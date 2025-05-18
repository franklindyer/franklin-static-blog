### Lügen, die die Informatiker über Namen glauben

**Notiz:** Das Folgende ist eine Übersetzung eines im Juni 2010 von einem sogennanten "Patrick McKenzie" veröffentlichen [Artikels](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/). Die Tatsache, daß ich den übergesetzt habe, heißt nicht, daß ich damit völlig einverstanden bin, sondern daß es mir als interessant (und lustig) gefällt hat.

Heute schrieb John Graham-Cumming [einen Artikel](https://blog.jgc.org/2010/06/your-last-name-contains-invalid.html), in dem er sich über einen Computersystem beschwert, mit dem er gearbeitet hat, weil der seine Name als ungültige Buchstaben beinhaltend beschrieben hat. Natürlich ist es aber nicht, weil irgendetwas, das man als seine Name vorbringt, ihm per definitionem eine gültige Bezeichnung ist. Verständlicherweise wurde John darüber geärgert und zu Recht kann er so sein, weil die Name für die Identität zentral ist.

Ich habe jahrelang in Japan als beruflicher Informatiker gewohnt und viele Systeme versagen machen, nur weil ich mich ihr zugeführen habe. (Die meisten Leute nennen mich Patrick Mckenzie, aber ich erkenne als richtig sechs verschiedenen "vollen" Namen an und viele Systeme, die ich benutze, lassen eben keine davon zu.) Ähnlicherweise habe ich bei Big Freaking Enterprises gearbeitet, die ihre Systeme theoretisch ausgerichtet hat, um alle Namen darin zuzulassen, weil sie weltweite Geschäfte betätigen. Nie habe ich einen System gesehen, der die Namen richtig bearbeitet und auch bezweifle ich das es einen solcher irgendwo gibt.

Deshalb liste ich als einen öffentlichen Auftrag die Unterstellungen wegen der Namen auf, die deine Systemen wahrscheinlich annimmt. Sie alle sind ganz falsch. Wenn du das nächste Mal einen System schreibst, die die Namen besorgt, versuche, weniger dieser Annahmen anzunehmen.

1. Daß die Menschen genau einen anerkannten vollen Namen haben.  
2. Daß die Menschen genau einen vollen Namen haben, unter dem sie bekannt seien.  
3. Daß, zu diesem Zeitpunkt, genau einen anerkannten vollen Namen haben.  
4. Daß, zu diesem Zeitpunkt, die Menschen genau einen vollen Namen haben, unter dem sie bekannt seien.  
5. Daß die Menschen genau N Namen haben, wo N eine bestimmte Zahl sei.  
6. Daß die Personennamen in einem bestimmten Platz passen.  
7. Daß die Personennamen nicht ändern.  
8. Daß die Personennamen ändern, nur aber während Ereignisse von einer bestimmten Menge.  
9. Daß die Personennamen in ASCII abgefasst seien.  
10. Daß die Personennamen in einer bestimmten Zeichenmenge abgefasst seien.  
11. Daß die Personennamen mit Unicode-Code-Points abgebildet seien.  
12. Daß die Personennamen schreibungsabhängig seien.  
13. Daß die Personennamen nicht schreibungsabhängig seien.  
14. Daß manchmal die Personennamen Vorsilben und Nachsilben haben, die man aber unproblematisch ignorieren könne.  
15. Daß die Personennamen keine Zahlen beinhalten.  
16. Daß die Personennamen nicht VÖLLIG GROßGESCHRIEBEN seien.  
17. Daß die Personennamen nicht völlig kleingeschrieben seien.  
18. Daß die Personennamen eine Reihe haben. Wenn man einen Reihenprogramm wählt, werden alle Systeme automatisch stimmige Reihen haben, solange sie den gleichen Reihenprogramm für den gleichen Namen benutzen.  
19. Daß der Vorname und der Nachname einer Person notwendigerweise ungleich seien.  
20. Daß die Personen Nachnamen, Familiennamen, oder sonstwas haben, die die als seine Verwandte geltende Leute miteinander gemeinsam haben.  
21. Daß die Personennamen global einzig seien.  
22. Daß die Personennamen fast global einzig seien.  
23. Na gut, aber wohl sind die Personennamen verschieden genug, daß kein Million von Personen den gleichen Namen besitzen.  
24. Daß mein System keine Namen von China erledigen müssen werde.  
25. Auch nicht von Japan.  
26. Noch Korea.  
27. Noch Irland, noch das Vereinigte Königreich, die USA, Spanien, Mexiko, Brasilien, Peru, Russland, Schweden, Botsuana, Südafrika, Trinidad, Haiti, Frankreich, noch das Imperium der Klingonen.  
28. Das Imperium der Klingonen war nur ein Scherz, oder... ?  
29. Zur Hölle mit deinem Kulturrelativismus! Am wenigsten sind die Personen in meiner Gesellschaft in einem landläufigen Maßstab der Namen übereingestimmt.  
30. Daß es einen Namen verwandelnden Algorithmus gebe, der verlustfrei invertiert werden könne. (Ja ja, wenn dein Algorithmus mit der Eingabe antwortet kannst du es einfach machen. Du kriegst ein Bienchen.)  
31. Daß ich unproblematisch annehmen könne, daß dieses Wörterbuch von Schimpfwörter keinen Personennamen beinhält.  
32. Daß die Personennamen bei der Geburt zugewiesen werden.  
33. Na gut, vielleicht nicht bei der Geburt, sondern kurz danach.  
34. Ach, innerhalb eines Jahres oder so nach dem Geburt.  
35. Fünf Jahre?  
36. Du machst nur Spaß, oder?  
37. Daß zwei verschiedene Systeme, die Daten über die gleiche Person umfassen, werden für die Person den gleichen Namen benutzen.  
38. Daß zwei verschiedene Dateneingabenbetreiber bitweise identische Reihungen in einen einzigen System notwendigerweise einspeisen werden, wenn sie einen Personennamen bekommen und der System gut konzipiert ist.  
39. Daß die Personen, deren Namen meinen System brechen, ganz schräge Sonderfälle seien. Sie sollen deftigen und zulässigen Namen haben, z.B. 田中太郎.  
40. Daß die Personen Namen haben.  

Keineswegs ist diese Liste vollständig. Wenn due Beispiele wahrer Namen brauchen, die irgendeine der obenen Fehlvorstellungen widerlegen, werde ich dir mehrere gern versorgen. Ergänz ruhig anderen Irrglauben in die Kommentare und das nächste Mal, daß jemand eine geniale Idee wie eine Tabelle eines Datenbanks mit Kolonnen für "Vorname" und "Nachname" vorschlägt, zeig ihm gern diesen Eintrag.
