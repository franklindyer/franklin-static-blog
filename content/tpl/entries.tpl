{% for e in entries %}
<div class="entry-title" style="background-color: {{ conf['langcolors'][e['lang']] }}">
    {% if "thumbnail" in e %}
     <img class="thumbnail" src="/img/{{ e['thumbnail'] }}" />
    {% endif %}
    <a class="post-link" href="/{{ e['slug'] }}-{{ e['lang'] }}.html"><b>{{ e['title'] }}</b></a>
    <img class="lang-icon" src="/img/{{ e['lang'] }}.svg" />
</div>
{% endfor %}
