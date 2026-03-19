<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
    <title>Franklin's blog</title>
    <description>Franklin's blog</description>
    <link>https://franklin.dyer.me</link>
    <atom:link href="https://franklin.dyer.me/rss.xml" rel="self" type="application/rss+xml" />
    
    {% for e in entries %}
    <item>
        <title>{{ e['title'] }}</title>
        <link>http://franklin.dyer.me/{{ e['slug'] }}-{{ e['lang'] }}.html</link>
        <guid>{{ e['slug'] }}-{{ e['lang'] }}</guid>
        <pubDate>{{ e['date'] }}</pubDate>
        <content:encoded type="html"><![CDATA[{{ e['content'] | escape_ampersands | safe }}]]></content:encoded>
    </item>
    {% endfor %}
</channel>
</rss>
