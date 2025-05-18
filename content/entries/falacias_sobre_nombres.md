### Falacias que los informáticos creen sobre los nombres

**Noticia:** Lo siguiente es una traducción de un [artículo](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/) escrito en junio de 2010 por el individuo que algunos llaman "Patrick McKenzie." El hecho de que me he puesto a traducirlo *no* indica que estoy totalmente de acuerdo con su tésis - solamente me pareció divertido.

John Graham-Cumming escribió un [artículo](https://blog.jgc.org/2010/06/your-last-name-contains-invalid.html) hoy quejándose de un sistema informático con el que trabajaba declaró que su nombre contenga carácteres inválidos. Por supuesto que no, porque lo que alguien presenta como su nombre es - por definición - un identificador apropiado. John era comprensiblemente irritado por este asunto, y justificadamente, porque los nombres son partes fundamentales de nuestras identidades, prácticamente por definición.

Yo he vivido por varios años en Japón como programador profesional y he roto muchos sistemas simplemente por ser introducido en ellos. (La mayoría me llama Patrick McKenzie, pero reconocería como correcto cualquier de seis nombres "completos" distintos.) Semejantemente, he trabajado con Big Freaking Enterprises, que, a fuerza de hacer negocios globales, han diseñado sus sistemas para funcionar con todos los nombres. Yo nunca he encontrado un sistema informático que trate los nombres apropiadamente y dudo que un tal exista, a ninguna parte.

Así que, como servicio público, enumero las suposiciones que sus sistemas probablemente hagan sobre los nombres. Todas son falsas. Trata de hacer menos la próxima vez que escribes un sistema que toca los nombres.

1. Que las personas tengan un solo nombre completo canónico.  
2. Que las personas tengan un solo nombre completo que se hagan llamar.  
3. Que las personas tengan, en ese instante, un solo nombre completo canónico.  
4. Que las personas tengan, en ese instante, un solo nombre completo que se hagan llamar.  
5. Que las personas tengan exactamente N nombres, por cualquier número N.  
6. Que los nombres de la gente quepan en un cierto espacio determinado.  
7. Que los nombres de la gente no cambien.  
8. Que los nombres de la gente cambien, pero solamente en un evento de una colección enumerada.  
9. Que los nombres de la gente se escriban en ASCII.  
10. Que los nombre de la gente se escriban en un solo juego de caracteres.  
11. Que los nombres de la gente usen los puntos de código de Unicode.
12. Que los nombres de la gente sean sensibles a las mayúsculas.  
13. Que los nombres de la gente no sean sensibles a las mayúsculas.  
14. Que los nombres de la gente algunas veces tengan prefijos o sufijos, pero se pueda ignorar aquellos sin problemas.  
15. Que los nombres de la gente no contengan números.  
16. Que los nombres de la gente no se escriban TODO EN MAYÚSCULA.  
17. Que los nombres de la gente no se escriban todo en minúscula.  
18. Que los nombres de la gente tengan un orden. Que eligir cualquier estilo de ordenación resultaría automáticamente en una ordenación consistente entre todos los sistemas, siempre y cuando todos usen el mismo estilo de ordenación para el mismo nombre.  
19. Que los nombres de pila y los apellidos de la gente sean necesariamente distintas.  
20. Que las personas tengan apellidos, apellidos de familia, o algo que las personas conocidas como sus parientes compartan.  
21. Que los nombres de la gente sean globalmente únicos.  
22. Que los nombres de la gente sean casi globalmente únicos.  
23. Bueno bueno, pero que seguramente sean los nombres de la gente suficientemente diversos para que ningún millón de gente compartan el mismo nombre.  
24. Que mi sistema nunca tendría que gestionar nombres de China.  
25. Ni de Japón.  
26. Ni de Corea.  
27. Ni de Irlanda, ni del Reino Unido, los Estados Unidos, España, México, Brasil, Perú, Rusia, Suecia, Botswana, Sudáfrica, Trinidad, Haití, Francia, ni del Imperio Klingon, todos los cuales tienen esquemas de nombres que son "extraños" en el uso común.  
28. Lo del Imperio Klingon era una broma, ¿no?  
29. ¡Maldito sea tu relativismo cultural! Que las personas en mi sociedad, por los menos, están de acuerdo en una mayoritariamente aceptada norma de nombres.  
30. Que exista un algoritmo que transforme los nombres y que se pueda invertir sin pérdidas. (Sí bueno, puedes hacerlo si tu algoritmo devuelve la entrada. Aquí tienes una estrellita.)  
31. Que pueda tomar por dado que este diccionario de palabrotas no contenga el nombre de ninguna persona.  
32. Que se asignen los nombres al parto.  
33. Pues quizá no al parto, sino poco después del parto.  
34. Bueno, bueno, dentro de un año después del parto.  
35. ¿Cinco años?  
36. ¿Me estás tomando el pelo?  
37. Que dos sistemas que contienen datos sobre la misma persona usen el mismo nombre para esta persona.  
38. Que dos operaciones para la entrada de datos, dados el nombre de una persona, necesariamente registrarían en un sistema dos cadenas de caracteres iguales a nivel de bits, si el sistema es buen diseñado.  
39. Que las personas cuyos nombres rompen mi sistema sean casos atípicos y raros. Deben tener nombres admisibles y bien hechos, como 田中太郎.  
40. Que las personas tengan nombres.

Esta lista no es de ninguna manera completa. Si necesitas ejemplos de nombres que refutan las confusiones comunes alistadas arriba, yo te presentaré varios. Siéntete libre de añadir otras falacias en los comentarios, y sugiérele esta entrada a la gente la próxima vez que propongan una idea genial como una tabla en un baso de datos con columnas de "nombre" y "apellido.
