<html>
{% include 'header.tpl' %}
<body>
    <h1>Franklin's blog</h1>
    {% include 'about.tpl' %}
    <hr>

    <p>Here are some of my recent web projects:</p>
    <ul>
        <li><a href="https://abstract.narfnilk.com">Abstractionary</a>, an online multiplayer word-guessing game</li>
        <li><a href="https://paramest.com">Statistical parameter estimation puzzles</a> run in the browser using WebR</li>
        <li><a href="https://flashcardapp.org">Flashcard app</a>, still very much a work-in-progress</li>
        <li><a href="https://www.narfnilk.com/asymptotic-calculator/">Asymptotic growth order calculator</a>, an offshoot of my undergrad research</li>
    </ul>

    <h2>Recent posts</h2>
    <a href="/all.html"><b>View all posts</b></a>
    {% include 'entries.tpl' %}
    <a> ...and here are <a href="/notes.html"><b>some things that aren't posts</b></a></a>
</body>
</html>
