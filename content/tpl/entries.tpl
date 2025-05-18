{% for e in entries %}
<div class="entry-title">
    {% if "thumbnail" in e %}
     <img class="thumbnail" src="/img/{{ e['thumbnail'] }}" />
    {% endif %}
    <a class="post-link" href="/{{ e['slug'] }}-{{ e['lang'] }}.html"><b>{{ e['title'] }}</b></a>
</div>
{% endfor %}
