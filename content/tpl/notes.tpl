<html>
{% include 'header.tpl' %}
<body>
<h2>All notes</h2>
{% for g in entries %}
<div class="entry-title-group">
    <h3>{{ g }}</h3>
    {% for e in entries[g] %}
    <div class="entry-title">
        <a class="post-link" href="/{{ e['slug'] }}-{{ e.get('lang') }}.html"><b>{{ e['title'] }}</b></a>
    </div>
    {% endfor %}
</div>
{% endfor %}
</body>
