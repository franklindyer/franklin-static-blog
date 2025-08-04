## Упражнения для сестры, часть 5

Do not use a calculator for any of these problems. Don't Google them, either. <br>
    
Do your best to solve them, but if you get stuck and can't find an answer to all parts of a problem, don't worry. We can talk about it together, and you can always come back and try to solve it again later.

<hr>

**Don't forget** to revisit some of the problems on previous sets that you never finished! If you don't have time to work on *all of them*, no problem - just pick the ones that are most interesting to you.

- **Set 1, Problem 3.** (repeated digit sums of natural numbers)
- **Set 3, Problem 2.** (whether or not the continued fractions have a limit)
- **Set 3, Problem 3.** (number of necklaces with $n=4,5,6$ beads)
- **Set 4, Problem 1.** (you didn't manage to prove/disprove some statements)
- **Set 4, Problem 3.** (lambda calculus arithmetic functions)

<hr>

**Problem 1.** As you did last time, take another close, careful look at your list of "basic rules" about $\mathbb Z$. Make a nice and neat list of rules. Give each of them names, if you want. (Like "Jerry".)

The "bar" symbol `|` is a piece of notation often used in number theory to describe divisibility. If $a,b\in \mathbb Z$, then the statement $a|b$ is defined to mean "$a$ divides $b$", or written more formally, $\exists q ~ b = aq$.

Using formal math language, try to write a definition of what it means for a number to be *prime*.

Read each of the following statements about divisibility in $\mathbb Z$ and decide if you think each one is true or false. Can you prove the ones you believe to be true, and disprove the ones you believe to be false? Try to write systematic, step-by-step proofs citing a basic fact about $\mathbb Z$ from your list for each step. (You might find it helpful to write some intermediate "lemmas" as well, or cite statements you've proven previously.)

- $\forall a ~ 1 | a$
- $\neg \exists a ~ a | 1$
- $\forall a ~ \forall b ~ a | b \lor b | a$
- $\forall a ~ \forall b ~ \forall c ~ (a | b \land b | c) \implies a | c$
- $\forall a ~ \forall b ~ \forall c ~ (a | c \land b | c) \implies ab | c$
- $\forall a ~ \forall b ~ \forall c ~ \forall d ~ (a | b \land c | d) \implies ac | bd$
- $\forall a ~ \forall b ~ \forall d ~ d | ab \implies (d|a \lor d|b)$

<hr>

**Problem 2.** The *Gaussian integers* is another kind of number system which is usually written as $\mathbb Z[i]$. It is defined as the set of complex numbers taking the form $a + bi$, where $a,b$ are integers. You can picture them as a kind of "grid" of points in the 2D complex plane, where the x- and y-components are both whole numbers.

As you know, you can add and multiply complex numbers. Can you see why $\mathbb Z[i]$ is closed under addition and multiplication?

You can ask questions about divisibility in $\mathbb Z[i]$ just as you can ask questions about divisibility in $\mathbb Z$. We say that $a|b$ for Gaussian integers $a,b\in\mathbb Z[i]$ if $b = aq$ for some $q\in\mathbb Z[i]$, that is, if $b$ is a *Gaussian integer multiple* of $a$.

Determine the answers to the following divisibility questions in $\mathbb Z[i]$:

- is $12$ divisible by $3$?
- is $12$ divisible by $1+i$?
- is $12$ divisible by $1+2i$?
- is $2$ divisible by $1+i$?
- is $5$ divisible by $1+i$?
- is $5$ divisible by $1+2i$?
- is $2+3i$ divisible by $1+i$?
- is $7+i$ divisible by $1+i$?

Do you notice any patterns? Can you find some simple criterion or "trick" for quickly determining if a Gaussian integer is divisible by $1+i$? (Also, I encourage you to think about this problem visually, in terms of the "grid" of Gaussian integers in the plane. What do the multiples of a number look like geometrically in the 2D plane?)

<hr>

**Problem 3.** Imagine a frog lives on the real number line $\mathbb R$. He starts out sitting on the origin $0\in\mathbb R$, and he is capable of jumping $1$ unit to the left or $\sqrt{2}$ units to the right.

Can the frog get to any real number? Why, or why not? If not, can he at least get *arbitrarily close* to any real number? That is, if he picks a real number $r\in\mathbb R$ and some "margin of error" $\epsilon$, can he get *within $\epsilon$ of $r$*, i.e. can he get within the interval $(r-\epsilon,r+\epsilon)$? Is there anything you can say about how long (how many hops) it might take him to get there, depending on what $r$ is?
