from dotenv import load_dotenv
import jinja2
import json
import os
import markdown
import markdown2
import re

load_dotenv()

def escape_ampersands(text):
    # Escape & that are not part of existing entities
    return re.sub(r"&(?!([a-zA-Z]+|#\d+);)", "&amp;", text)

JLOAD = jinja2.FileSystemLoader(searchpath="./content/tpl/")
JENV = jinja2.Environment(loader=JLOAD)
JENV.filters['escape_ampersands'] = escape_ampersands
INDEX = json.loads(open("./content/entries.json").read())
NOTES = json.loads(open("./content/notes.json").read())
MD_EXT = ['mdx_math', 'markdown.extensions.tables', 'md_in_html', 'tables']
MD_PROC = markdown.Markdown(extensions=MD_EXT)
ENV_VARS = dict(os.environ)

# Get thumbnail filenames for the entries that have a thumbnail
for i in range(len(INDEX['entries'])):
    e = INDEX['entries'][i]
    thumb_name = f"thumbnail-{e['date']}.png"
    if os.path.isfile(f"./content/img/{thumb_name}"):
        INDEX['entries'][i]["thumbnail"] = thumb_name

def make_post_filename(entry):
    return f"{entry['slug']}-{entry.get('lang')}"

def generate_post(entry):
    fname = entry['file']
    md_content = open(f"./content/entries/{fname}", 'r').read()
    html_content = MD_PROC.convert(md_content)
    html_content = markdown2.markdown(html_content)
    html_tpl = JENV.get_template("entry.tpl")
    html_page = html_tpl.render(title=entry["title"], content=html_content, conf=INDEX["config"], env=ENV_VARS)

    new_fname = make_post_filename(entry) 
    f = open(f"./dist/{new_fname}.html", 'w')
    f.write(html_page)
    f.close()

def generate_all_posts():
    for e in INDEX["entries"] + [e for g in NOTES["notes"] for e in NOTES["notes"][g]]:
        generate_post(e) 

def generate_rss():
    xml_tpl = JENV.get_template("rss.tpl") 

    feed_entries = INDEX["entries"][:10]
    for i in range(len(feed_entries)):
        new_fname = make_post_filename(feed_entries[i])
        content = open(f"./dist/{new_fname}.html").read()
        content = re.compile("<body>(.*)</body>", re.MULTILINE|re.DOTALL).search(content).group(1)
        feed_entries[i]["content"] = content

    feed = xml_tpl.render(entries=feed_entries, conf=INDEX["config"], env=ENV_VARS)
    
    f = open(f"./dist/rss.xml", 'w')
    f.write(feed)
    f.close()

def generate_homepage():
    html_tpl = JENV.get_template("home.tpl")
    html_page = html_tpl.render(entries=INDEX["entries"][:5], conf=INDEX["config"], env=ENV_VARS)

    f = open(f"./dist/index.html", 'w')
    f.write(html_page)
    f.close()

def generate_post_list():
    html_tpl = JENV.get_template("all.tpl")
    html_page = html_tpl.render(entries=INDEX["entries"], conf=INDEX["config"], env=ENV_VARS)

    f = open(f"./dist/all.html", 'w')
    f.write(html_page)
    f.close()

    notes_tpl = JENV.get_template("notes.tpl")
    html_page = notes_tpl.render(entries=NOTES["notes"], conf=NOTES["config"], env=ENV_VARS)

    f = open(f"./dist/notes.html", 'w')
    f.write(html_page)
    f.close()


def generate_redirects():
    f = open(f"./dist/_redirects", 'w')
    for e in INDEX["entries"]:
        if "old-id" in e:
            f.write(f"/post/{e['old-id']} /{make_post_filename(e)}\n")
            if not (f"slug-{e['old-id']}" in e['slug']):
                f.write(f"/slug-{e['old-id']}-{e.get('lang')} /{make_post_filename(e)}\n")

generate_all_posts()
generate_post_list()
generate_redirects()
generate_rss()
generate_homepage()
