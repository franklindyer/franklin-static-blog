import jinja2
import json
import os
import markdown
import markdown2

JLOAD = jinja2.FileSystemLoader(searchpath="./content/tpl/")
JENV = jinja2.Environment(loader=JLOAD)
INDEX = json.loads(open("./content/entries.json").read())
MD_EXT = ['mdx_math', 'markdown.extensions.tables', 'md_in_html']
MD_PROC = markdown.Markdown(extensions=MD_EXT)

# Get thumbnail filenames for the entries that have a thumbnail
for i in range(len(INDEX['entries'])):
    e = INDEX['entries'][i]
    thumb_name = f"thumbnail-{e['date']}.png"
    if os.path.isfile(f"./content/img/{thumb_name}"):
        INDEX['entries'][i]["thumbnail"] = thumb_name

def make_post_filename(entry):
    return f"{entry['slug']}-{entry['lang']}"

def generate_post(entry):
    fname = entry['file']
    md_content = open(f"./content/entries/{fname}", 'r').read()
    html_content = MD_PROC.convert(md_content)
    html_content = markdown2.markdown(html_content)
    html_tpl = JENV.get_template("entry.tpl")
    html_page = html_tpl.render(title=entry["title"], content=html_content)

    new_fname = make_post_filename(entry) 
    f = open(f"./dist/{new_fname}.html", 'w')
    f.write(html_page)
    f.close()

def generate_all_posts():
    for e in INDEX["entries"]:
        generate_post(e) 

def generate_homepage():
    html_tpl = JENV.get_template("home.tpl")
    html_page = html_tpl.render(entries=INDEX["entries"][:5])

    f = open(f"./dist/index.html", 'w')
    f.write(html_page)
    f.close()

def generate_post_list():
    html_tpl = JENV.get_template("all.tpl")
    html_page = html_tpl.render(entries=INDEX["entries"])

    f = open(f"./dist/all.html", 'w')
    f.write(html_page)
    f.close()

generate_all_posts()
generate_post_list()
generate_homepage()
