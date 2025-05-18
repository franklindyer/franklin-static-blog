<html>
{% include 'header.tpl' %}
<body>
    <h1>Franklin's blog</h1>
    {% include 'about.tpl' %}
    <hr>
    <h2>Recent posts</h2>
    <a href="/all.html"><b>View all posts</b></a>
    {% include 'entries.tpl' %}
</body>
</html>
