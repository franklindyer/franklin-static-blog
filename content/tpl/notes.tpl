<html>
{% include 'header.tpl' %}
<body>
<h2>All notes</h2>
{% for e in entries %}
<div class="entry-title" style="background-color: #dddddd">
    <a class="post-link" href="/{{ e['slug'] }}-{{ e.get('lang') }}.html"><b>{{ e['title'] }}</b></a>
</div>
{% endfor %}
</body>
