<html>
{% include 'header.tpl' %}
<body>
    <h1>Franklin's blog</h1>
    {% include 'about.tpl' %}
    <hr>

    <p>Here's where else you can find me:</p>
    <ul>
        <li><a href="https://github.com/franklindyer">GitHub</a></li>
        <li><a href="https://tatoeba.org/en/user/profile/frpzzd">Tatoeba</a></li>
        <li><a href="https://math.stackexchange.com/users/438055/franklin-pezzuti-dyer">Mathematics Stack Exchange</a></li>
        <li><a href="https://www.linkedin.com/in/franklin-pezzuti-dyer-3b0b84298/">LinkedIn</a></li>
    </ul>

    <p>Here are some of my recent web projects:</p>
    <ul>
        <li><a href="https://abstract.narfnilk.com">Abstractionary</a>, an online multiplayer word-guessing game</li>
        <li><a href="https://paramest.com">Statistical parameter estimation puzzles</a> run in the browser using WebR</li>
        <li><a href="https://mandarinvocab.com">Mandarin Chinese vocab tool</a> identifying multi-character words using only your known characters</li>
        <li><a href="https://flashcardapp.org">Flashcard app</a>, still very much a work-in-progress</li>
        <li><a href="https://asymptotic-calculator.com">Asymptotic growth order calculator</a>, an offshoot of my undergrad research</li>
    </ul>

    <h2>Recent posts</h2>
    <a href="/all.html"><b>View all posts</b></a>
    {% include 'entries.tpl' %}
    <a> ...and here are <a href="/notes.html"><b>some things that aren't posts</b></a></a>
</body>
</html>
