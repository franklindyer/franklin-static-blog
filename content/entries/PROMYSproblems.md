**INTRO:** Greetings! This is my completed problem set. First is the typed version of my answers, and following that you will find the handwritten "rough draft" version of all of my answers. Following some answers are addendums, which I tacked onto the answers about which I had other thoughts that didn't belong in my formal answer. If you want to see polished answers, you should read my typed answers first. But if you want to get a better idea of how I go about solving these problems, you should look at my handwritten answers as well, in which I show more of my work.

In the problem set, you suggested that I choose a few problems to focus on and explore as thoroughly as possible. Though I completed all of the problems, I focused most heavily on problems $5$ and $6$, and as a result, my answers to those two questions are probably my best two answers.

**SOURCES:**
To help with my formatting, I have frequently visited [Mathematics Stack Exchange's "Mathjax Tutorial and Quick Reference"](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference). 

For Problem 6, I used a [prime factorization calculator](https://www.numberempire.com/numberfactorizer.php).

For Problem 7, I visited the [OEIS](oeis.org).

**PROBLEM 1**

Before I proceed, I would like to mention the formula for the partial sum of a geometric series:
$$\sum_{k=0}^n \alpha^k =\frac{\alpha^{n+1}-1}{\alpha-1},\space\space\space \alpha\ne 1$$
This formula is easy to verify by multiplying both sides of the above equation by $\alpha-1$. I will use this formula shortly.

Calculating the first couple values gives
$$1^3+5^3+3^3=153$$
$$16^3+50^3+33^3=165033$$
$$166^3+500^3+333^3=166500333$$
$$1666^3+5000^3+3333^3=166650003333$$
... from this, the conjecture seems obvious. To help me formally state a conjecture, I will define the sequences $A_n$, $B_n$, $C_n$, and $S_n$ as follows:
$$A_n=\underbrace{166...6}_{n\space\text{digits}}$$
$$B_n=\underbrace{500...0}_{n\space\text{digits}}$$
$$C_n=\underbrace{333...3}_{n\space\text{digits}}$$
$$S_n=\underbrace{166...6500...0333...3}_{3n\space\text{digits}}$$
...where $S_n$ is formed by "concatenating" $A_n$, $B_n$, and $C_n$ in order.

Okay, now that I have defined $A_n$, $B_n$, and $C_n$, I can state my conjecture concisely. I think that
$$A_n^3+B_n^3+C_n^3=S_n$$
Now, to prove this, I will find closed-form formulas for $A_n$, $B_n$, $C_n$, and $S_n$. Using their digit sequences, I can express each in closed form with the partial geometric sum formula. We have that
$$\begin{align}
A_n
&= 10^{n-1}+\sum_{k=0}^{n-2} 6\cdot 10^k\\
&= 10^{n-1}+6\cdot \frac{10^{n-1}-1}{6}\\
&= \frac{5}{3}10^{n-1}-\frac{2}{3}\\
\end{align}$$
Now for $B_n$, whose formula is the simplest:
$$B_n=5\cdot 10^{n-1}$$
...and finally, $C_n$:
$$\begin{align}
C_n
&=\sum_{k=0}^{n-1} 3\cdot 10^k\\
&=3\cdot \frac{10^n-1}{9}\\
&=\frac{1}{3}10^n-\frac{1}{3}
\end{align}$$
Using these three formulas, a formula for the quantity $A_n^3+B_n^3+C_n^3$ can be obtained with a little bit of algebra. We have
$$A_n^3=\frac{125}{27}10^{3n-3}-\frac{50}{9}10^{2n-2}+\frac{20}{9}10^{n-1}-\frac{8}{27}$$
or
$$A_n^3=\frac{1}{216}10^{3n}-\frac{1}{18}10^{2n}+\frac{2}{9}10^{n}-\frac{8}{27}$$
and we have
$$B_n^3=125\cdot 10^{3n-3}$$
or
$$B_n^3=\frac{1}{8}10^{3n}$$
and, finally,
$$C_n^3=\frac{1}{27}10^{3n}-\frac{1}{9}10^{2n}+\frac{1}{9}10^n-\frac{1}{27}$$
By summing these three formulas, we have
$$A_n^3+B_n^3+C_n^3=\frac{1}{6}10^{3n}-\frac{1}{6}10^{2n}+\frac{1}{3}10^n-\frac{1}{3}$$

By looking at the digit sequence of $S_n$, one can express $S_n$ as follows:
$$\begin{align}
S_n
&= 10^{3n-1}+\sum_{k=2n}^{3n-2} 6\cdot 10^k+5\cdot 10^{2n-1}+\sum_{k=0}^{n-1} 3\cdot 10^k\\
&= \frac{1}{10}10^{3n}+6\bigg(\sum_{k=0}^{3n-2}10^k-\sum_{k=0}^{2n-1} 10^k\bigg)+\frac{1}{2}10^{2n}+\sum_{k=0}^{n-1} 3\cdot 10^k\\
&= \frac{1}{10}10^{3n}+6\cdot \frac{10^{3n-1}-10^{2n}}{6}+\frac{1}{2}10^{2n}+3\cdot \frac{10^n-1}{9}\\
&= \frac{1}{10}10^{3n}+\frac{1}{15}10^{3n}-\frac{2}{3}10^{2n}+\frac{1}{2}10^{2n}+\frac{1}{3}10^n-\frac{1}{3}\\
&= \frac{1}{6}10^{3n}-\frac{1}{6}10^{2n}+\frac{1}{3}10^n-\frac{1}{3}\\
\end{align}$$

Now, this is clearly equal to $A_n^3+B_n^3+C_n^3$, because their closed-form formulas are the same. Thus (by the transitive property of equality, if you will),
$$A_n^3+B_n^3+C_n^3=S_n$$
and the conjecture is proven. Hooray! $\blacksquare$

**ADDENDUM TO PROBLEM 1**
I was excited to see a problem like this, because this type of problem (though much simpler) was the first *really hard* type of problem that I struggled with while becoming involved in math. The original problem (which I came up with myself) was to prove the following pattern:
$$3^2=9$$
$$33^3=1089$$
$$333^2=110889$$
$$3333^3=11108889$$
and so on. The second such problem was to prove the pattern
$$11^4=14641$$
$$111^4=104060401$$
$$1111^4=1004006004001$$
And, following that, I tried the pattern
$$31^2+91^2=9242$$
$$301^2+901^2=902402$$
$$3001^2+9001^2=90024002$$
So thanks for that first problem! It brought me a little bit of nostalgia.

**PROBLEM 2**

The first sequence satisfies
$$x_{n+1}x_n x_{n-1}=1$$
Notice that no sequence containing a $0$ can satisfy this, since that would imply that
$$0=1$$
Which just isn't true. Furthermore, notice that
$$\begin{align}
x_{n+3}
&=\frac{1}{x_{n+2}x_{n+1}}\\
&=\frac{1}{\frac{1}{x_{n+1}x_n}x_{n+1}}\\
&=x_n
\end{align}$$
And so the sequence is periodic with period $3$, and takes the following form:
$$x_n=
\begin{cases}
x_1 &\text{if}\space n\equiv 1\bmod 3\\
x_2 &\text{if}\space n\equiv 2\bmod 3\\
\frac{1}{x_1 x_2} &\text{if}\space n\equiv 0\bmod 3\\
\end{cases}$$
For the initial values $x_1=1$ and $x_2=2$, the sequence is
$$1,2,\frac{1}{2},1,2,\frac{1}{2},...$$
The second sequence satisfies 
$$y_{n+1}y_{n-1}+y_n=1$$
or, as long as the sequence does not contain any zeroes,
$$y_{n+2}=\frac{1-y_n}{y_{n-1}}$$
Notice that this implies

$$\begin{align}
y_{n+5}
&= \frac{1-y_{n+4}}{y_{n+3}}\\
&= \frac{1-\frac{1-y_{n+3}}{y_{n+2}}}{y_{n+3}}\\
&= \frac{y_{n+3}+y_{n+2}-1}{y_{n+2}y_{n+3}}\\
&= \frac{\frac{1-y_{n+2}}{y_{n+1}}+y_{n+2}-1}{y_{n+2}\frac{1-y_{n+2}}{y_{n+1}}}\\
&= \frac{1-y_{n+2}+y_{n+2}y_{n+1}-y_{n+1}}{y_{n+2}(1-y_{n+2})}\\
&= \frac{(1-y_{n+1})(1-y_{n+2})}{y_{n+2}(1-y_{n+2})}\\
&= \frac{1-y_{n+1}}{y_{n+2}}\\
&= \frac{1-y_{n+1}}{\frac{1-y_{n+1}}{y_n}}\\
&= y_n\\
\end{align}$$

and so
$$y_{n+5}=y_n$$
as long as the sequence contains no zeroes. This means that
$$y_n=
\begin{cases}
y_1 &\text{if}\space n\equiv 1\bmod 5\\
y_2 &\text{if}\space n\equiv 2\bmod 5\\
\frac{1-y_2}{y_1} &\text{if}\space n\equiv 3\bmod 5\\
\frac{y_1+y_2-1}{y_1 y_2} &\text{if}\space n\equiv 4\bmod 5\\
\frac{1-y_1}{y_2} &\text{if}\space n\equiv 0\bmod 5\\
\end{cases}$$
However, with initial values $y_1=1$ and $y_2=2$, something different happens. We have
$$y_1=1$$
$$y_2=2$$
$$y_3=-1$$
$$y_4=1$$
$$y_5=0$$
$$y_6=1$$
Notice that the next number in the sequence is not uniquely determined, since the quantity
$$y_5 y_7 +y_6$$
is independent of $y_7$ (because $y_5=0$). Thus, we can tack on any number we wish as $y_7$ and keep going. This happens whenever a zero shows up in the sequence, or, since the sequence is otherwise periodic, if a zero shows up in the first $5$ terms. This will happen iff one of the following is true:
$$y_1=0$$
$$y_2=0$$
$$y_2=1$$
$$y_2=1-y_1$$
$$y_1=1$$
which is apparent from the periodic solution that I described.

So, here is a description of what happens to the sequence for any starting values $y_1,y_2$. If one of the following is true:
$$y_1=0\tag{1}$$
$$y_2=0\tag{2}$$
$$y_2=1\tag{3}$$
$$y_2=1-y_1\tag{4}$$
$$y_1=1\tag{5}$$
Then $y_n=0$, where $n$ is the number of the first true statement above. Then $y_{n+1}$ will be equal to $\frac{1}{y_{n-1}}$, and $y_{n+2}$ can be whatever you want. From there, it is like starting a brand new sequence with initial values $\frac{1}{y_{n-1}}$ and $y_{n+2}$. If one of the five statments above is true for these initial values, the process repeats itself. If not, the sequence is periodic as previously described. Something special happens, however, if $(1)$ is true - in this case, $\frac{1}{y_{n-1}}$ will also be equal to $1$, making $(1)$ true again for the new sequence with these new initial values. Thus, $(1)$ is self-perpetuating, and any sequence (such as the one provided) with $y_1=1$ will continue to follow this process. This gives us another interesting solution to the recurrence:
$$y_n=
\begin{cases}
1 &\text{if}\space n=5m+1\\
a_m &\text{if}\space n=5m+2\\
1-a_m &\text{if}\space n=5m+3\\
1 &\text{if}\space n=5m+4\\
0 &\text{if}\space n=5m+5\\
\end{cases}$$
where $a_m$ can be *any* sequence of nonzero numbers. There are all kinds of complex interactions between the five cases that cause this sequence to behave strangely, but the question asks about the sequence with initial values $y_1=1$ and $y_2=2$. A (non-exhaustive) solution to that recurrence is any sequence $y_n$ in the form
$$y_n=
\begin{cases}
1 &\text{if}\space n=5m+1\\
a_m &\text{if}\space n=5m+2\\
1-a_m &\text{if}\space n=5m+3\\
1 &\text{if}\space n=5m+4\\
0 &\text{if}\space n=5m+5\\
\end{cases}$$
where $a_0=2$ and $a_m$ contains no zeroes.

**ADDENDUM TO PROBLEM 2**

I was pretty excited when I saw this problem, because I used to spend a lot of time with recursively define sequences. However, I was disappointed upon further inspection, because these sequences are boring and periodic, as well as tedious to deal with due to the fact that not all numbers in the sequence are uniquely determined by previous terms. Far more interesting is the sequence satisfying the recurrence
$$a_{n+1}=\frac{a_n+2}{a_{n-1}}$$
with any initial conditions (excluding those that create zeroes), because it takes on very similar values over and over again *without being periodic*.

**PROBLEM 3**

This solution will probably be different from my others in that it will be shorter and probably less rigorous. This is because, rather than proving something to be true, by goal is just to show that the given proof doesn't work.

I'd like to begin with a little lemma that I will use later.

> **Lemma:**
$$\frac{\cos\theta}{1-\sin\theta}\lt \frac{\sin\theta}{\cos\theta}, \space\space\space \theta \in (\pi/2,\pi)$$

**Proof:** Clearly,
$$\sin\theta\le 1$$
or
$$\sin\theta\le \sin^2\theta+\cos^2\theta$$
$$\sin\theta-\sin^2\theta\le \cos^2\theta$$
$$\sin\theta(1-\sin\theta)\le \cos^2\theta$$
Now, since $1-\sin\theta$ is positive for $\theta \in (\pi/2,\pi)$,
$$\sin\theta\lt \frac{\cos^2 \theta}{1-\sin\theta}$$
and, since $\cos\theta$ is negative for $\theta \in (\pi/2,\pi)$, we have

$$\frac{\sin\theta}{\cos\theta}\gt \frac{\cos\theta}{1-\sin\theta}$$
for $\theta \in (\pi/2,\pi)$. $\blacksquare$

Now I will begin to explain the proof's fault. First I will provide a brief and intuitive explanation, and then a more rigorous demonstration.

The fault appears in the line
$$x=\angle PAD-\angle PAB$$
This seems innocent enough - just look at the diagram, and it's obviously true, right?

WRONG. This diagram is misleading. A more realistic diagram might look like this:

<center>![Fig 1](/img/PROMYS2018-Fig1.png)</center>

In this diagram, it is obvious that
$$\angle PAB+x\ne\angle PAD$$
In the diagram provided, however, some lengths were (almost unnoticeabley) shortened or lengthened in order to make it appear that angle $x$ was inside of $\triangle PAD$ rather than outside of it.

To demonstrate that angle $x$ isn't necessarily inside of $\triangle PAD$, I will use coordinate geometry.

I will duplicate the described construction on a coordinate plane. For convenience, let us use $\theta$ to denote the described obtuse angle, instead of $x$. On the coordinate plane, I will let
$$A=(0,0)$$
$$B=(1,0)$$
$$C=(1,1)$$
$$D=(\cos\theta,\sin\theta)$$
Of course, this doesn't cover *every* quadrilateral satisfying the rules of the construction - I just need to show how the proof fails in a single case in order to show that it is faulty. According to the proof, any old quadrilateral with $\angle DAB=\theta$, $AD=BC$, and $AB\perp BC$ should work, and so if I use a quadrilateral satisfying those three and the proof fails, I will have shown that the proof doesn't work.

With $A,B,C,D$ as defined, the perpendicular bisector of $AB$ is the line $x=1/2$. To bisect $CD$, I will have to do some algebra.

The midpoint of $CD$ is the point
$$\bigg(\frac{1+\cos\theta}{2},\frac{1+\sin\theta}{2}\bigg)$$
and the line $\overleftrightarrow{CD}$ has a slope of
$$\frac{1-\sin\theta}{1-\cos\theta}$$
The slope of the perpendicular bisector of $\overline{CD}$ should be the negative reciprocal of the slope of $\overleftrightarrow{CD}$. Thus, the perpendicular bisector of $\overline{CD}$ has slope
$$-\frac{1-\cos\theta}{1-\sin\theta}$$
and passes through the point
$$\bigg(\frac{1+\cos\theta}{2},\frac{1+\sin\theta}{2}\bigg)$$
Because we have a point and a slope, we may state the equation of this line immediately:
$$y=-\frac{1-\cos\theta}{1-\sin\theta}x+\frac{1+\sin\theta}{2}+\frac{1+\cos\theta}{2}\frac{1-\cos\theta}{1-\sin\theta}$$
or, equivalently,
$$y=-\frac{1-\cos\theta}{1-\sin\theta}x+\frac{1}{2-2\sin\theta}$$
The point $P$ is the intersection of this line with the line $x=1/2$. Thus, we have
$$P=\bigg(\frac{1}{2},\frac{\cos\theta}{2-2\sin\theta}\bigg)$$
From this, we may find that the slope of $\overleftrightarrow{AP}$ is
$$\frac{\cos\theta}{1-\sin\theta}$$
and the slope of $\overleftrightarrow{AD}$ is
$$\frac{\sin\theta}{\cos\theta}$$
Now, since $\theta$ is obtuse, or $\theta\in(\pi/2,\pi)$, by our lemma,
$$\frac{\sin\theta}{\cos\theta}\gt \frac{\cos\theta}{1-\sin\theta}$$
and so the slope of $\overleftrightarrow{AD}$ is greater than that of $\overleftrightarrow{AP}$, and both slopes are negative. Thus, $\overline{AD}$ and $\overline{AP}$ will look something like this:
<center>![Fig 2](/img/PROMYS2018-Fig2.png)</center>
and it is clear that
$$\angle PAB+x\ne\angle PAD$$
This completes my demonstration. I have also producted a more accurate geometric construction (using a ruler and compass) as part of my written answers.

**ADDENDUM TO PROBLEM 3**
I haven't done any "false proof" problems like this before, so it was a fun puzzle to find the flaw in the proof. At first, I was really confused, because all of the logic in the proof seemed to be sound. As it turns out, it *was* sound! The flaw in the proof wasn't really a logical flaw - it was a problem with the diagram! What a dirty trick!

Last summer, I got slightly obsessed with geometric construction problems, and so I learned how to construct a lot of stuff with a ruler and compass, such as angle bisectors, perpendicular bisectors, and so on (my favorite was the regular octagon), Because of this, when I got stuck on this problem, I decided I would just do the actual construction step by step. And sure enough, I knew something was wrong when I drew $\triangle PAD$.

Thanks for the fun problem!

**PROBLEM 4**

I would like to restate the four rules listed in the problem:
$$1\in S \tag{i}$$
$$\text{If}\space \frac{a}{b}\in S\space \text{with} \space a\perp b, \space \text{then}\space  \frac{b}{2a}\in S \tag{ii}$$
$$\text{If}\space \frac{a}{b},\frac{c}{d}\in S\space \text{with} \space a\perp b\space\text{and}\space c\perp d, \space \text{then}\space  \frac{a+c}{b+d}\in S \tag{iii}$$
$$\text{These rules are exhaustive.}\tag{iv}$$
I claim that $S=\mathbb Q\cap [1/2,1]$. That is, I claim that $S$ is the set of rational numbers between $1/2$ and $1$, inclusive.

My proof will consist of two parts. First I will prove that $S$ consists *only* of rational numbers between $1/2$ and $1$ (or, that $S\subset \mathbb Q\cap [1/2,1]$) and then I will prove that all rational numbers between $1/2$ and $1$ are in $S$ (or, that $\mathbb Q\cap [1/2,1]\subset S$).

Suppose that $\frac{a}{b}\in S$ and that $\frac{a}{b}\in[1/2,1]$. Then it follows that
$$\frac{1}{2}\le \frac{a}{b}\le 1$$
$$2\ge \frac{b}{a}\ge 1$$
$$1\ge \frac{b}{2a}\ge \frac{1}{2}$$
Thus, rule $(\text{ii})$ cannot be used to obtain any numbers not in the interval $[1/2,1]$ without being given one.

Now suppose that $\frac{a}{b},\frac{c}{d}\in S$ and $\frac{a}{b},\frac{c}{d}\in[1/2,1]$. This means that
$$\frac{1}{2}\le \frac{a}{b}\le 1$$
$$\frac{1}{2}\le \frac{c}{d}\le 1$$
or
$$\frac{b}{2}\le a \le b$$
$$\frac{d}{2}\le c \le d$$
By adding these two inequalities, we have
$$\frac{b+d}{2}\le a+c\le b+d$$
and
$$\frac{1}{2}\le \frac{a+c}{b+d}\le 1$$
Thus, rule $(\text{iii})$ cannot be used to obtain any numbers not in the interval $[1/2,1]$ without being given one.

We are given that $1\in S$, and the only ways to discover more elements of $S$ are to use rules $(\text{ii})$ and $(\text{iii})$. But, since I have shown that neither of these rules will allows us to find any number not in $[1/2,1]$ unless we are given one, by rule $(\text{iv})$, no numbers outside of the interval $[1/2,1]$ are in $S$. Of course, given rational numbers, rules $(\text{ii})$ and $(\text{iii})$ produce rational numbers, so all elements of $S$ are rational as well. Thus I have proven that
$$S\subset \mathbb Q\cap [1/2,1]$$
and all that remains is to prove that
$$\mathbb Q\cap [1/2,1] \subset S$$

To do this, I will use two small lemmas:

> **Lemma 1:**
$$\frac{n}{n+1}\in S, \space\space \forall n\in\mathbb N$$

**Proof:** Since $1\in S$, by rule $(\text{ii})$, $1/2\in S$. Thus, the statement
$$\frac{n}{n+1}\in S$$
is true for $n=1$. Now suppose it is true for some arbitrary $m\in\mathbb N$. Since $m$ and $m+1$ are coprime for all $m\in\mathbb N$, rule $(\text{iii})$ implies that
$$\frac{m+1}{(m+1)+1}\in S$$
Now, since the base case of $n=1$ is true, and since the statement's truth for $n=m$ implies its truth for $n=m+1$, we have that, by induction,
$$\frac{n}{n+1}\in S, \space\space \forall n\in\mathbb N\space\space\space\blacksquare$$

> **Lemma 2:**
$$\frac{n+1}{2n+1}\in S, \space\space \forall n\in\mathbb N\cup\{0\}$$

**Proof:** The statement
$$\frac{n+1}{2n+1}\in S$$
is true for $n=0$, because $1/2\in S$ as I have already shown. Now suppose that it is true for some $m$. Then
$$\frac{m+1}{2m+1}\in S$$
and, by rule $(\text{iii})$, since $1/2\in S$,
$$\frac{m+1+1}{2m+1+2}\in S$$
or
$$\frac{(m+1)+1}{2(m+1)+1}\in S$$
Now, since the base case of $n=0$ of the statement is true, and since the truth of the statement for $n=m$ implies its truth for $n=m+1$, by induction,
$$\frac{n+1}{2n+1}\in S, \space\space \forall n\in\mathbb N\cup\{0\}\space\space\space \blacksquare$$

Now I will show that any rational number in $[1/2,1]$ is in $S$. This is rather straightforward to show (if you wish to know how I came up with the following method, it is explained in greater detail in my written answer). By lemmas 1 and 2, the numbers
$$\frac{2a-b}{2a-b+1}$$
and
$$\frac{b-a}{2b-2a+1}$$
are both in $S$, and are both already in simplest terms, as long as $a\gt 2b$ and $b\gt a+1$. By rule $(\text{iii})$, this implies that
$$\frac{2a-b+b-a}{2a-b+1+2b-2a+1}$$
or
$$\frac{a}{b}$$
is in $S$, as long as $2a\gt b$ and $b\gt a+1$ (which are automatically true if $\frac{a}{b}\in(1/2,1)$... and I have already shown that $1$ and $1/2$ are in $S$). This implies that all rational numbers $\frac{a}{b}\in[1/2,1]$ are in $S$, or that
$$\mathbb Q\cap [1/2,1] \subset S$$
Now, since
$$S\subset \mathbb Q\cap [1/2,1]$$
and
$$\mathbb Q\cap [1/2,1] \subset S$$
as proven, we have that
$$S= \mathbb Q\cap [1/2,1]$$
and we are done!

**ADDENDUM TO PROBLEM 4**
When I first saw this problem, it scared me. I've seen other problems of this type in which some rules about a set are described and one must determine whether such a set exists, or what elements are in it - and I've never been able to solve any of them. I enjoyed this problem a lot, especially since this is the first problem of this type that I have solved!

**PROBLEM 5**

I will generalize this question right away. Forget about "quiteprime" or "very quiteprime" - these terms are too inefficient and verbose. Instead, I will define a function (or rather, a set of functions) to make my analysis more efficient.

> Let $\xi_k(n)$ be the number of positive integers less than or equal to $n$ divisible by any of the first $k$ primes.

From this definition, it follows that
$$n-\xi_3(n)$$
gives the number of *quiteprime* positive integers less than or equal to $n$, and
$$n-\xi_6(n)$$
does the same for *very quiteprime* positive integers.

Let's start with the simplest case. Of course, $\xi_1(n)$ counts the number of even positive integers less than or equal to $n$, which is, of course, equal to
$$\xi_1(n)=\bigg \lfloor \frac{n}{2}\bigg \rfloor$$
Notice that, more generally, the number of positive integers less than or equal to $n$ divisible by some positive integer $d$ is given by
$$\bigg \lfloor \frac{n}{d}\bigg \rfloor$$
Okay, that was pretty easy. Let's consider now the more complicated (but only slightly so) case of $k=2$. A good guess might be
$$\xi_2(n)\overset{\text{?}}{=}\bigg \lfloor \frac{n}{2}\bigg \rfloor+\bigg \lfloor \frac{n}{3}\bigg \rfloor$$
This is, of course, incorrect, because it counts the multiples of $6$ twice apiece. But this is easily fixed with a bit of inclusion-exclusion! By subtracting $\lfloor n/6\rfloor$, we "uncount" each multiple of $6$ once, giving us the correct answer:
$$\xi_2(n)=\bigg \lfloor \frac{n}{2}\bigg \rfloor+\bigg \lfloor \frac{n}{3}\bigg \rfloor-\bigg \lfloor \frac{n}{6}\bigg \rfloor$$
Using the same inclusion-exclusion trick, we can come up with a formula for $\xi_3(n)$. Clearly,
$$\bigg \lfloor \frac{n}{2}\bigg \rfloor+\bigg \lfloor \frac{n}{3}\bigg \rfloor+\bigg \lfloor \frac{n}{5}\bigg \rfloor$$
is incorrect because it counts multiples of $6,10,$ and $15$ twice apiece, and counts multiples of $30$ thrice apiece. A possible correction is
$$\bigg \lfloor \frac{n}{2}\bigg \rfloor+\bigg \lfloor \frac{n}{3}\bigg \rfloor+\bigg \lfloor \frac{n}{5}\bigg \rfloor-\bigg \lfloor \frac{n}{6}\bigg \rfloor-\bigg \lfloor \frac{n}{10}\bigg \rfloor-\bigg \lfloor \frac{n}{15}\bigg \rfloor$$
...which, unfortunately, does not count multiples of $30$ at all. This can be corrected by adding $\lfloor n/30\rfloor$, which gives us the sought-after formula
$$\xi_3(n)=\bigg \lfloor \frac{n}{2}\bigg \rfloor+\bigg \lfloor \frac{n}{3}\bigg \rfloor+\bigg \lfloor \frac{n}{5}\bigg \rfloor-\bigg \lfloor \frac{n}{6}\bigg \rfloor-\bigg \lfloor \frac{n}{10}\bigg \rfloor-\bigg \lfloor \frac{n}{15}\bigg \rfloor+\bigg \lfloor \frac{n}{30}\bigg \rfloor$$
Thus, the number of quiteprime positive integers less than or equal to $n$ is given by 
$$n-\bigg \lfloor \frac{n}{2}\bigg \rfloor-\bigg \lfloor \frac{n}{3}\bigg \rfloor-\bigg \lfloor \frac{n}{5}\bigg \rfloor+\bigg \lfloor \frac{n}{6}\bigg \rfloor+\bigg \lfloor \frac{n}{10}\bigg \rfloor+\bigg \lfloor \frac{n}{15}\bigg \rfloor-\bigg \lfloor \frac{n}{30}\bigg \rfloor$$
As satisfying as it is to have found a formula for the first half of the problem, this solution still feels somewhat... incomplete. If only there was some way to do away with those pesky "floors"...

In the first half of the problem, it asked about the number of quiteprime positive integers less than or equal to $10$ or $100$. What a wimpy couple of numbers those two area! Let's shoot for a formula for the number of quiteprime positive integers less than or equal to $10^n$, where $n$ is a positive integer.

Since $10$ is divisible by $2$ and $5$, it follows that
$$\bigg \lfloor \frac{10^n}{2}\bigg \rfloor=\frac{1}{2}10^n$$
$$\bigg \lfloor \frac{10^n}{5}\bigg \rfloor=\frac{1}{5}10^n$$
$$\bigg \lfloor \frac{10^n}{10}\bigg \rfloor=\frac{1}{10}10^n$$
Because "flooring" an integer does not alter its value.

Now recall that $10^n-1$ is divisible by $9$ for all positive integer $n$. From this, it follows that
$$\bigg \lfloor \frac{10^n}{2}\bigg \rfloor=\bigg \lfloor \frac{10^n-1}{3}+\frac{1}{3}\bigg \rfloor=\frac{10^n-1}{3}=\frac{1}{3}10^n-\frac{1}{3}$$
and it can be similarly proven that
$$\bigg \lfloor \frac{10^n}{6}\bigg \rfloor=\frac{1}{6}10^n-\frac{2}{3}$$
$$\bigg \lfloor \frac{10^n}{15}\bigg \rfloor=\frac{1}{15}10^n-\frac{2}{3}$$
$$\bigg \lfloor \frac{10^n}{30}\bigg \rfloor=\frac{1}{30}10^n-\frac{1}{3}$$
By plugging these special values directly into our formula and simplifying, we have that the number of quiteprime positive integers less than or equal to $10^n$ is
$$\frac{4}{15}10^n-\frac{2}{3}$$
which, interestingly, has a digit sequence composed of a $2$ followed by $n-1$ sixes.

This tells us that there are $2$ quiteprime positive integers less than or equal to $10$, there are $26$ less than or equal to $100$, and there are $266,666$ less than or equal to a million. Awesome!

My inclusion-exclusion strategy can be generalized for any $\xi_k$:
$$\xi_k(n)=\sum_{N\subset P_k, N\ne \varnothing} \bigg \lfloor \frac{n}{\prod_{\alpha\in N} \alpha}\bigg \rfloor (-1)^{|N|+1}$$
...where $P_k$ is the set of the first $k$ primes. This epic formula gives us a formula for $\xi_4 (n)$ using the floor function:
$$\begin{align}
\xi_4(n)
&=\bigg \lfloor \frac{n}{2}\bigg \rfloor+\bigg \lfloor \frac{n}{3}\bigg \rfloor+\bigg \lfloor \frac{n}{5}\bigg \rfloor+\bigg \lfloor \frac{n}{7}\bigg \rfloor\\
&-\bigg \lfloor \frac{n}{6}\bigg \rfloor-\bigg \lfloor \frac{n}{10}\bigg \rfloor-\bigg \lfloor \frac{n}{14}\bigg \rfloor-\bigg \lfloor \frac{n}{15}\bigg \rfloor-\bigg \lfloor \frac{n}{21}\bigg \rfloor-\bigg \lfloor \frac{n}{35}\bigg \rfloor\\
&+ \bigg\lfloor \frac{n}{105}\bigg \rfloor+\bigg\lfloor \frac{n}{70}\bigg \rfloor+\bigg\lfloor \frac{n}{42}\bigg \rfloor+\bigg\lfloor \frac{n}{30}\bigg \rfloor\\
&-\bigg\lfloor \frac{n}{210}\bigg \rfloor
\end{align}$$

Interestingly, it can be derived from this formula that
$$\xi_4(15^n)=\frac{27}{35}15^n+\frac{3}{7}$$
...but I'm not going to prove that for you, since we mostly care about $\xi_3$ and $\xi_6$. Unfortunately, by the time we get to $\xi_5$ and $\xi_6$, the floor formulas are really big and nasty, and I think we can give up hope for a nice, simple answer for the powers of $10$ or $15$ when we're dealing with $\xi_6$. However, the question asks for an approximate answer, which I can do.

Before I do that, let's step back for a second and simplify the problem. Consider first the humble "floor" function
$$\lfloor n\rfloor$$
Because we are now thinking about asymptotics, it is helpful to notice that
$$\lfloor n\rfloor\approx n$$
with an error less than one. Of course, since each floor function is approximately equal to its input with error less than one, the sum of a bunch of floor functions (like the ones we were dealing with) is approximately equal to the sum of their inputs without the floors (with an error less than the number of floors being added). This concept is explained in a bit more detail in my written answer. This allows us, for example, to state that
$$\xi_3(n)\approx \frac{n}{2}+\frac{n}{3}+\frac{n}{5}-\frac{n}{6}-\frac{n}{10}-\frac{n}{15}+\frac{n}{30}=\frac{11}{15}n$$
with an error less than $7$. It also allows us to say that
$$\begin{align}
\xi_5(n)
&\approx \frac{n}{2}+\frac{n}{3}+\frac{n}{5}+\frac{n}{7}+\frac{n}{11}\\
&-\frac{n}{6}-\frac{n}{10}-\frac{n}{14}-\frac{n}{22}-\frac{n}{15}-\frac{n}{21}-\frac{n}{33}-\frac{n}{35}-\frac{n}{55}-\frac{n}{77}\\
&+\frac{n}{385}+\frac{n}{231}+\frac{n}{165}+\frac{n}{105}+\frac{n}{154}+\frac{n}{110}+\frac{n}{70}+\frac{n}{66}+\frac{n}{42}+\frac{n}{30}\\
&-\frac{n}{1155}-\frac{n}{770}-\frac{n}{462}-\frac{n}{330}-\frac{n}{210}\\
&+\frac{n}{2310}
\end{align}$$
or
$$\xi_5(n)\approx \frac{61}{77}n$$
with error less than $31$. Awesome!

But I can do better than that. Let $\xi_k^*(n)$ be defined as
$$\xi_k^*(n)=\sum_{N\subset P_k, N\ne \varnothing} \frac{n}{\prod_{\alpha\in N} \alpha} \cdot (-1)^{|N|+1}$$
which is the "de-floored" version of $\xi_k(n)$. We have that
$$\xi_k(n)\approx \xi_k^*(n)$$
with an error less than $2^k$. Notice now that
$$n-\xi_k^*(n)=\sum_{N\subset P_k} \frac{n}{\prod_{\alpha\in N} \alpha} \cdot (-1)^{|N|}$$
and so, if $p_k$ is the *kth* prime,
$$\begin{align}
(n-\xi_k^*(n))\bigg(1-\frac{1}{p_{k+1}}\bigg)
&=\bigg(1-\frac{1}{p_{k+1}}\bigg)\sum_{N\subset P_k} \frac{n}{\prod_{\alpha\in N} \alpha} \cdot (-1)^{|N|}\\
&=\sum_{N\subset P_k} \frac{n}{\prod_{\alpha\in N} \alpha} \cdot (-1)^{|N|}-\sum_{N\subset P_k} \frac{n}{p_{k+1}\prod_{\alpha\in N} \alpha} \cdot (-1)^{|N|}\\
&=\sum_{N\subset P_{k+1}, p_{k+1}\notin N} \frac{n}{\prod_{\alpha\in N} \alpha} \cdot (-1)^{|N|}+\sum_{N\subset P_{k+1}, p_{k+1}\in N} \frac{n}{p_{k+1}\prod_{\alpha\in N} \alpha} \cdot (-1)^{|N|+1}\\
&=\sum_{N\subset P_{k+1}} \frac{n}{\prod_{\alpha\in N} \alpha} \cdot (-1)^{|N|}\\
&=(n-\xi_{k+1}^*(n))\\
\end{align}$$
And so, we have the recursion
$$(n-\xi_{k+1}^*(n))=(n-\xi_k^*(n))\bigg(1-\frac{1}{p_{k+1}}\bigg)$$
Since $n-\xi_i^*=n/2$, it can be shown easily by induction that
$$n-\xi_k^*(n)=n\prod_{i=1}^{k}\bigg(1-\frac{1}{p_i}\bigg)$$
This implies that
$$n-\xi_k(n)\approx n\prod_{i=1}^{k}\bigg(1-\frac{1}{p_i}\bigg)$$
with error less than $2^k$, and that
$$\lim_{n\to\infty}\frac{n-\xi_k(n)}{n}=\prod_{i=1}^{k}\bigg(1-\frac{1}{p_i}\bigg)$$
This is it! This is the great formula that I was working up towards. To answer the original question, it allows us to say that
$$n-\xi_6(n)\approx n\prod_{i=1}^{6}\bigg(1-\frac{1}{p_i}\bigg)=\frac{192}{1001}n$$
with error less than $128$. Thus, the number of very quiteprime numbers less than $10^{10}$ is approximately
$$\frac{192\cdot 10^{10}}{1001}$$
or $1918081918$, with an error of up to $128$. Furthermore, the number of very quiteprime numbers less than $10^{100}$ is approximately
$$\frac{192\cdot 10^{100}}{1001}\approx 1.918\cdot 10^{99}$$
That's it! This might have been my longest answer yet. Whew!

**PROBLEM 6**

Let the "copycopy" function $c:\mathbb N\mapsto\mathbb N$ map each positive integer to its copycopy. For example,
$$c(143)=143143$$
$$c(20)=2020$$
The problem thus reduces to finding solutions to the diophantine equation
$$c(n)=m^2$$
with $n,m\in\mathbb N$. Now notice that
$$c(n)=11n\space\space\text{iff}\space n\in[1,9]$$
$$c(n)=101n\space\space\text{iff}\space n\in[10,99]$$
$$c(n)=1001n\space\space\text{iff}\space n\in[100,999]$$
and so on. More generally, this can be written as
$$c(n)=(10^b+1)n\space\space\text{iff}\space n\in[10^{b-1},10^b-1]$$
This is important! It can be used to split our one diophantine equation up into many easier equations with *finite sets* from which the solution can be chosen:
$$11n=m^2, \space\space m,n\in\mathbb N,\space\space n\in[1,9]$$
$$101n=m^2, \space\space m,n\in\mathbb N,\space\space n\in[10,99]$$
$$1001n=m^2, \space\space m,n\in\mathbb N,\space\space n\in[100,999]$$
...and so on. The *bth* diophantine equation is
$$(10^b+1)n=m^2, \space\space m,n\in\mathbb N,\space\space n\in[10^{b-1},10^b-1]$$
Now I'll try to solve a few of these one by one before generalizing. Let's try the equation with $b=1$:
$$11n=m^2, \space\space m,n\in\mathbb N,\space\space n\in[1,9]$$
Notice that $11$ has no squared prime factors (in fact, it *is* prime), so if $11n$ is a perfect square, then $n$ must be divisible by $11$, and thus must be at least $11$. But wait, what about the restriction $n\in[1,9]$? That would put $n$ outside of this range, so the equation has *no* solutions.

Notice that $101$ is also prime. Thus, by the same argument, the second equation
$$101n=m^2, \space\space m,n\in\mathbb N,\space\space n\in[10,99]$$
has no solutions.

Next, notice that $1001$ is not prime, but its prime factorization
$$1001=7\cdot 11\cdot 13$$
shows that it has no squared prime factors. Thus, in order for $1001n$ to be a perfect square, $n$ must be divisible by $1001$, putting it outside of the solution range of the third diophantine equation
$$c(n)=1001n\space\space\text{iff}\space n\in[100,999]$$
and showing that this equation *also* has no solutions.

Consider now the *bth* diophantine equation
$$(10^b+1)n=m^2, \space\space m,n\in\mathbb N,\space\space n\in[10^{b-1},10^b-1]$$
Of course, if $10^b+1$ contains no squared prime factors, then the equation has no solutions, because that would imply that for $n$ to be a perfect square, $10^b+1$ would have to divide $n$, making $n$ too large.

Now define the sequence $q_b\in\mathbb N$ as follows. Let $q_b^2$ be the largest perfect square that divides $10^b+1$. Then what I have just stated is that if $q_b=1$, then the *bth* equation has no solutions. However, if $q_b\ne 1$, then we have that
$$n=\frac{10^b+1}{q_b^2}\cdot a^2$$
solves the *nth* equation, as long as $a$ is less than $q_b$ (to ensure that $n$ isn't too big). To ensure that $a$ is large enough to keep $n$ from being too small, we shall let
$$10^{b-1}\le \frac{10^b+1}{q_b^2}\cdot a^2$$
$$\frac{10^{b-1}}{10^b+1}\cdot q_b^2\le a^2$$
$$\frac{10^{b-1}}{10^b}\cdot q_b^2\le  a^2$$
$$\frac{q_b^2}{10}\le a^2$$
$$\frac{q_b}{\sqrt{10}}\le a$$
I know that replacing $10^b+1$ with $10^b$ was bad mathematics, but as $10^b$ gets *really big*, it won't make much of a difference.

So, if $a\in(q_b/\sqrt{10},q_b)$, then
$$n=\frac{10^b+1}{q_b^2}\cdot a^2$$
solves the *bth* diophantine equation. Awesome, this should be really helpful!

Now it's time to hit the prime factorization calculator. For the first couple $10^b+1$, the prime factorizations are
$$11=\text{prime}$$
$$101=\text{prime}$$
$$1001=7\cdot 11\cdot 13$$
$$10001=73\cdot 137$$
$$100001=11\cdot 9091$$
$$1000001=101\cdot 9901$$
$$10000001=11\cdot 909091$$
Darn, none of these have squared prime factors! It takes a little while to encounter one that *does* have a squared prime factor. The first one is
$$10^{11}+1=11^2\cdot 23\cdot 4093\cdot 8779$$
Thus, we have $q_{11}=11$, and if $a\in(11/\sqrt{10},11)$, the solutions are
$$n=\frac{10^{11}+1}{11^2}\cdot a^2$$
or
$$n=826446281a^2$$
This gives us a grand total of $7$ solutions, by replacing $a$ with integers from $4$ to $10$:
$$n=826446281\cdot 4^2$$
$$n=826446281\cdot 5^2$$
$$n=826446281\cdot 6^2$$
$$n=826446281\cdot 7^2$$
$$n=826446281\cdot 8^2$$
$$n=826446281\cdot 9^2$$
$$n=826446281\cdot 10^2$$
Or, written in terms of the original diophantine equation,
$$c(826446281\cdot 4^2)=\bigg(\frac{10^{11}+1}{11}\cdot 4\bigg)^2$$
$$c(826446281\cdot 5^2)=\bigg(\frac{10^{11}+1}{11}\cdot 5\bigg)^2$$
$$c(826446281\cdot 6^2)=\bigg(\frac{10^{11}+1}{11}\cdot 6\bigg)^2$$
$$c(826446281\cdot 7^2)=\bigg(\frac{10^{11}+1}{11}\cdot 7\bigg)^2$$
$$c(826446281\cdot 8^2)=\bigg(\frac{10^{11}+1}{11}\cdot 8\bigg)^2$$
$$c(826446281\cdot 9^2)=\bigg(\frac{10^{11}+1}{11}\cdot 9\bigg)^2$$
$$c(826446281\cdot 10^2)=\bigg(\frac{10^{11}+1}{11}\cdot 10\bigg)^2$$
Those are some big solutions!

...But why stop there? After returning to the prime factorization calculator, I found the following values of $q_b$:
$$q_{21}=7$$
$$q_{33}=11$$
$$q_{39}=13$$
$$q_{55}=11$$
and that's when the numbers $10^b+1$ got too big for my factorization calculator. Oh well, at least this gives us $26$ more solutions:
$$c\bigg(\frac{a^2(10^{21}+1)}{49}\bigg)=\bigg(\frac{10^{21}+1}{7}\cdot a\bigg)^2\space\space a=3,4,5,6$$
$$c\bigg(\frac{a^2(10^{33}+1)}{121}\bigg)=\bigg(\frac{10^{33}+1}{11}\cdot a\bigg)^2\space\space a=4,5,...,10$$
$$c\bigg(\frac{a^2(10^{39}+1)}{169}\bigg)=\bigg(\frac{10^{39}+1}{13}\cdot a\bigg)^2\space\space a=5,6,...,12$$
$$c\bigg(\frac{a^2(10^{55}+1)}{121}\bigg)=\bigg(\frac{10^{55}+1}{11}\cdot a\bigg)^2\space\space a=4,5,...,10$$
Awesome, we now have a grand total of $33$ solutions to 
$$c(n)=m^2,\space\space m,n\in\mathbb N$$
But I won't be happy until I've found *infinitely* many solutions. Before doing this, I need to prove a little lemma.

> **Lemma:**
$$q_b^2|(10^{(2k+1)b}+1)\space \text{for} \space b,k\in\mathbb N\cup\{0\}$$

**Proof:** If $q_b=1$, the proof is trivial. Suppose $q_b\ne 1$. We have that
$$10^b+1=q_b^2 r_0$$
for some positive integer $r_0$, by definition. Thus, the lemma is true for $k=0$. Now suppose it holds for some $k$. That is, suppose that
$$10^{(2k+1)b}+1=q_b^2 r_k$$
for some $k$ and some positive integer $r_k$. Then
$$10^{(2k+1)b}=q_b^2 r_k-1$$
$$10^{(2k+3)b}=10^{2b}q_b^2 r_k-10^{2b}$$
$$10^{(2k+3)b}+1=10^{2b}q_b^2 r_k-(10^{2b}-1)$$
$$10^{(2k+3)b}+1=10^{2b}q_b^2 r_k-(10^{b}+1)(10^b+1)$$
$$10^{(2k+3)b}+1=10^{2b}q_b^2 r_k-q_b^2 r_0(10^{b}-1)$$
and so
$$10^{(2k+3)b}+1=q_b^2(10^{2b} r_k-r_0(10^{b}-1))$$
implying that
$$q_b^2 | 10^{(2(k+1)+1)b}+1$$
and that the lemma holds for $k+1$. Thus, by induction, since the base case of $k=0$ is satisfied by definition, it follows that
$$q_b^2 | 10^{(2k+1)b}+1$$
for all $b,k\in \mathbb N\cup \{0\}$. $\blacksquare$

This lemma is the key to finding infinitely many solutions. Because we already know that
$$11^2 | 10^{11}+1$$
From this lemma, it follows that
$$11^2 | 10^{33}+1$$
$$11^2 | 10^{55}+1$$
$$11^2 | 10^{77}+1$$
$$11^2 | 10^{99}+1$$
$$11^2 | 10^{121}+1$$
and so on. More generally,
$$11^2 | 10^{22k+11}+1$$
for $k\in\mathbb N\cup\{0\}$. This tells us that
$$c\bigg(\frac{a^2(10^{22k+11}+1)}{121}\bigg)=\bigg(\frac{10^{22k+11}+1}{11}\cdot a\bigg)^2$$
where $k\in\mathbb N\cup\{0\}$ and $a=4,5,6,...,10$. This gives us an *infinite number of solutions* in chunks of seven. Awesome!

But I can go even further. Because we already know that
$$7^2|10^{21}+1\space\space\space \text{and}\space\space\space 13^2 | 10^{39}+1$$
it follows by my lemma that
$$7^2 | 10^{42k+21}+1$$
and
$$13^2 | 10^{78k+39}+1$$
for $k\in\mathbb Z$. Thus, we have two more infinite solution sets:
$$c\bigg(\frac{a^2(10^{42k+21}+1)}{49}\bigg)=\bigg(\frac{10^{42k+21}+1}{7}\cdot a\bigg)^2$$
for $a=3,4,5,6$, and the next solution set is
$$c\bigg(\frac{a^2(10^{78k+39}+1)}{169}\bigg)=\bigg(\frac{10^{78k+39}+1}{13}\cdot a\bigg)^2$$
for $a=5,6,7,...,12$.

In summary, I have considered the diophantine equation
$$c(n)=m^2$$
and found the following solution pairs $(n,m)$:
$$\bigg(\frac{a_1^2(10^{22k+11}+1)}{121}, \frac{10^{22k+11}+1}{11}\cdot a_1\bigg)$$
$$\bigg(\frac{a_2^2(10^{42k+21}+1)}{49}, \frac{10^{42k+21}+1}{7}\cdot a_2\bigg)$$
$$\bigg(\frac{a_3^2(10^{78k+39}+1)}{169}, \frac{10^{78k+21}+1}{13}\cdot a_3\bigg)$$
where
$$a_1=4,5,6,...,10$$
$$a_2=3,4,5,6$$
$$a_3=5,6,7,...,12$$
and $k\in\mathbb N\cup\{0\}$.

**PROBLEM 7**
Let $\nu(n)$ be the number of ways to write 
$$\frac{1}{n}$$
as an ordered sum of two unit fractions. To find an algorithm guaranteed to find all ways to write such a unit fraction, I noticed that the one of the two unit fractions would have to be greater than or equal to $\frac{1}{2n}$, and the other would have to be less than or equal to $\frac{1}{2n}$, and of course, both would have to be less than $\frac{1}{n}$. This allowed me to find all possible breakdowns in a finite number of steps by cycling through the numbers $n$ through $2n$. Through brute force computation, I calculated
$$1=\frac{1}{2}+\frac{1}{2}$$ 
$$\frac{1}{2}=\frac{1}{4}+\frac{1}{4}=\frac{1}{3}+\frac{1}{6}=\frac{1}{6}+\frac{1}{3}$$ 
$$\frac{1}{3}=\frac{1}{6}+\frac{1}{6}=\frac{1}{4}+\frac{1}{12}=\frac{1}{12}+\frac{1}{4}$$ 
$$\frac{1}{4}=\frac{1}{8}+\frac{1}{8}=\frac{1}{6}+\frac{1}{12}=\frac{1}{12}+\frac{1}{6}=\frac{1}{5}+\frac{1}{20}=\frac{1}{5}+\frac{1}{20}$$ 
$$\frac{1}{5}=\frac{1}{10}+\frac{1}{10}=\frac{1}{6}+\frac{1}{30}=\frac{1}{30}+\frac{1}{6}$$ 
Which gives us the values
$$\nu(1)=1$$
$$\nu(2)=3$$
$$\nu(3)=3$$
$$\nu(4)=5$$
$$\nu(5)=3$$
I also calculated the values
$$\nu(6)=9$$
$$\nu(7)=3$$
$$\nu(8)=7$$
$$\nu(9)=5$$
$$\nu(10)=9$$
Now, after a quick trip to the OEIS, I'm ready to conjecture that
$$\nu(n)=\tau(n^2)$$
where $\tau(n)$ counts the number of divisors of $n$. The first $10$ terms of each of these two sequences are the same, so I'll conjecture that they're all the same. Now I just need to prove it.

Observe the following. If $\alpha$ is some number, then
$$\begin{align}
\frac{1}{n+\alpha}+\frac{1}{n+\frac{n^2}{\alpha}}
&= \frac{\frac{n^2}{\alpha}+n+n+\alpha}{(n+\alpha)(n+\frac{n^2}{\alpha})}\\
&= \frac{\frac{n^2}{\alpha}+2n+\alpha}{n(n+\alpha)(1+\frac{n}{\alpha})}\\
&= \frac{\frac{n^2}{\alpha}+2n+\alpha}{n(n+\alpha)(1+\frac{n}{\alpha})}\\
&= \frac{(n+\alpha)(\frac{n}{\alpha}+1)}{n(n+\alpha)(1+\frac{n}{\alpha})}\\
&= \frac{1}{n}\\
\end{align}$$
and so
$$\frac{1}{n+\alpha}+\frac{1}{n+\frac{n^2}{\alpha}}=\frac{1}{n}$$
Of course, if $n$ is a natural number, the denominators of the fractions on the left side of the above equation are only natural numbers if and only if $\alpha$ and $n^2/\alpha$ are both natural numbers. Thus, the solutions to the diophantine equation
$$\frac{1}{n}=\frac{1}{a}+\frac{1}{b},\space\space a,b\in\mathbb N$$
are given by
$$a=\frac{1}{n+\alpha}$$
$$a=\frac{1}{n+\frac{n^2}{\alpha}}$$
where $\alpha$ is a divisor of $n^2$. Thus, since there are $\tau(n^2)$ divisors of $n^2$ and one solution to the equation for each of them, we have proven that $\nu(n)=\tau(n^2)$. $\blacksquare$

**PROBLEM 8**

The first thing that I will do here is prove a little formula that will come in handy later.

> **Lemma:** The area of an equilateral triangle with side length $l$ is $\frac{\sqrt 3}{4}l^2$.

**Proof:** Let $\triangle ABC$ be an equilateral triangle with side length $l$. Let $M$ be the midpoint of $\overline{BC}$ so that $\overline{AM}$ is an altitude of $\triangle ABC$ and $\overline{AM}\perp\overline{BC}$. Since $BM=CM=\frac{1}{2}l$, by the pythagorean theorem,
$$AM^2+MC^2=AC^2$$
and
$$AM^2=AC^2-MC^2$$
$$AM^2=l^2-\frac{1}{4}l^2$$
$$AM^2=\frac{3}{4}l^2$$
$$AM=\frac{\sqrt 3}{2}l$$
Now, since the area of a triangle is one-half the product of its base and height lengths, the area of $\triangle ABC$ is given by
$$\frac{1}{2}\cdot AM\cdot BC=\frac{\sqrt 3}{4}l^2 \space\space\space\blacksquare$$

I'm not going to use this formula until I find the areas of $P_2$ and $P_{\infty}$, since the area of $P_1$ can be computed much more easily. If we divide $P_0$ into nine congruent equilateral triangles as shown, we can see that $P_1$ (outlined darkly) consists of exactly six of these triangles.

<center>![Fig 3](/img/PROMYS2018-Fig3.png)</center>

Thus, the area of $P_1$ is $\frac{6}{9}=\frac{2}{3}$ times the area of $P_0$, which i $\frac{20}{3}$. Thus, the area of $P_1$ is $\frac{20}{3}$.

Finding the area of $P_2$ will involve a little bit of trigonometry. First, I will calculate the side length $l$ of $P_0$. Using the previously derived area formula, we have
$$\frac{\sqrt 3}{4}l^2=10$$
and so
$$l=\frac{2\sqrt{10}}{3^{1/4}}$$
Thus, the side length of $P_1$ is
$$\frac{1}{3}l=\frac{2\sqrt{10}}{3^{5/4}}$$
Now consider the areas of the triangles that will get "snipped off" or $P_1$. These triangles will look like this:

<center>![Fig 4](/img/PROMYS2018-Fig4.png)</center>

In order to find the area of one of these triangles, I shall divide it into two $30^{\circ},60^{\circ},90^{\circ}$ triangles:

<center>![Fig 5](/img/PROMYS2018-Fig5.png)</center>

The length of the base of one of these triangles is
$$\frac{2\sqrt{10}}{3^{9/4}}\cdot\sin(60^{\circ})=\frac{\sqrt{10}}{3^{7/4}}$$
and the length of the altitude is
$$\frac{2\sqrt{10}}{3^{9/4}}\cdot\cos(60^{\circ})=\frac{\sqrt{10}}{3^{7/4}}$$
Thus, the area of one of the halves is
$$\frac{1}{2}\cdot \frac{\sqrt{10}}{3^{7/4}}\cdot \frac{\sqrt{10}}{3^{7/4}}=\frac{5}{81}$$
and the area of the whole triangle is
$$2\cdot\frac{5}{81}= \frac{10}{81}$$
Of course, six of these are getting cut off of the hexagon, so the area of $P_2$ is
$$\frac{20}{3}-6\cdot \frac{10}{81}=\frac{160}{27}$$
Now for the area of $P_\infty$...

As corners are constantly snipped off, the shape will become a closer and closer approximation of a circle.

<center>![Fig 6](/img/PROMYS2018-Fig6.png)</center>

As depicted above, $P_\infty$ is the circle inscribed inside of $P_0$. To find its area, we need only find its radius using a little bit of trigonometry.

<center>![Fig 7](/img/PROMYS2018-Fig7.png)</center>

From the picture above, it is aparrent that if $r$ is the radius of the circle,
$$\tan(60^{\circ})=\frac{\sqrt{10}}{3^{1/4}r}$$
and so
$$\sqrt 3=\frac{\sqrt{10}}{3^{1/4}r}$$
$$r=\frac{\sqrt{10}}{3^{3/4}}$$
Thus, the area of the circle is
$$\pi\cdot \bigg(\frac{\sqrt{10}}{3^{3/4}}\bigg)^2$$
or
$$\frac{10\pi\sqrt 3}{9}$$
and the area of $P_\infty$ is
$$\frac{10\pi\sqrt 3}{9}$$
That concludes my answer to this problem!

**ADDENDUM TO PROBLEM 8**
I must say that, unfortunately, I did not much enjoy this problem. Though I enter in few math competitions (relative to the number of competitions that fellow math nerds enter, at least), I must have seen this problem in at least three of them already. Though it is both a simple and interesting idea, the concept of this problem is widely overused in contest math problems. The last place that I saw it was at a math competition I attended hosted by the University of Georgia (at Athens).

**PROBLEM 9**
The problem is to prove that if a set $S$ contains four or more positive integers, then there exist $x,y\in S$ such that
$$0\lt \frac{x-y}{1+xy}\lt \frac{1}{\sqrt 3}$$
Gee, that sure looks a lot like the tangent difference-angle formula:
$$\tan(\theta-\phi)=\frac{\tan\theta-\tan\phi}{1+\tan\theta\tan\phi}$$
If I hadn't noticed that, I probably would have toiled away on this problem for *hours* without progress.

Before proceeding, I would like to mention a similar concept which I shall use later. Suppose a set $A$ contains $n$ or mor numbers and that $A\subset [0,m]$. Then it *must be true* that for some $x,y\in A$,
$$0\lt x-y\lt \frac{m}{n-1}$$
By a pigeonhole-type argument, there simply isn't enough space in the interval $[0,m]$ to distribute $n$ or more numbers to that each pair of numbers is separated by a gap of length $\frac{m}{n-1}$ or more. Keep this concept in mind - I'll be bringing it up again shortly.

Now, suppose that $S$ contains $n$ or more elements. Let $S'$ be the set defined as follows:
$$S'=\{\theta\space|\space\theta\in[0,\pi/2)\space\text{and}\space \tan(\theta)\in S\}$$
Because the tangent function $\tan :[0,\pi/2)\mapsto \mathbb R^+$ is bijective, it can be used to form a one-to-one mapping of the elements of $S'$ onto the elements of $S$. 

Because $S'\subset [0,\pi/2)$, as explained earlier, because $S'$ contains the same number of elements as $S$, and because $S$ contains at least $n$ elements, it must be true that there exist some two numbers $\theta,\phi\in S'$ that satisfy
$$0\lt \theta-\phi\lt \frac{\pi}{2(n-1)}$$
This would imply that, since $\tan :[0,\pi/2)\mapsto \mathbb R^+$ is an increasing function,
$$\tan(0)\lt \tan(\theta-\phi)\lt \tan\bigg(\frac{\pi}{2(n-1)}\bigg)$$
or, using the tangent sum-angle formula,
$$\tan(0)\lt \frac{\tan\theta-\tan\phi}{1+\tan\theta\tan\phi}\lt \tan\bigg(\frac{\pi}{2(n-1)}\bigg)$$
for some $\theta,\phi\in S$. By definition, the tangent of any element of $S'$ is an element of $S$. Thus, if we let
$$\tan\theta=x\in S$$
$$\tan\phi=y\in S$$
we can see that there exist $x,y\in S$ such that
$$0\lt \frac{x-y}{1+xy}\lt \tan\bigg(\frac{\pi}{2(n-1)}\bigg)$$
Thus, my final conclusion is that if a set $S\in \mathbb R^+$ contains at least $n$ elements, there exist $x,y\in S$ such that
$$0\lt \frac{x-y}{1+xy}\lt \tan\bigg(\frac{\pi}{2(n-1)}\bigg)$$
If we let $n=4$, we see that if $S$ contains $4$ or more elements, there exist $x,y\in S$ such that
$$0\lt \frac{x-y}{1+xy}\lt \tan\bigg(\frac{\pi}{6}\bigg)=\frac{1}{\sqrt 3}$$
which completes the proof. $\blacksquare$

Another interesting result can be obtained by considering $S$ as an infinite set. If $S$ is an infinite set, than for each $n\in\mathbb N$, we have that $S$ contains at least $n$ elements, suggesting that for all $n\in\mathbb N$, there exist $x,y\in S$ such that
$$0\lt \frac{x-y}{1+xy}\lt \tan\bigg(\frac{\pi}{2(n-1)}\bigg)$$
By letting $n$ become arbitrarily large, we can make $\tan \frac{\pi}{2(n-1)}$ arbitrarily small, since the tangent function is continuous and $\tan(0)=0$. Thus, by letting $\epsilon=\tan \frac{\pi}{2(n-1)}$, we have the following conclusion: if $S$ is an infinite set, then for any positive $\epsilon$ arbitrarily small, there exist $x,y\in S$ such that
$$0\lt \frac{x-y}{1+xy}\lt \epsilon$$
That's pretty cool!

**ADDENDUM TO PROBLEM 9**

I shudder to think that I would've spent countless sleepless nights toiling away at this problem had I not immediately recognized the tangent difference formula. It would have been such a tedious problem without that trick to help me. Whew!

It's become second nature for me to instantly recognise trigonometric sum and difference formulas as well as other identities because they are so useful for other seemingly unrelated problems. For example, while I was obsessed with recursively defined sequences, I found a closed-form formula for the *nth* term of the sequence defined as
$$a_{n+1}=\frac{a_n+a_{n-1}}{1-a_n a_{n-1}},\space\space a_1=a_2=2$$
By noticing that
$$\arctan a_{n+1}=\arctan a_{n}+\arctan a_{n-1}$$
which allows the following formula for $a_n$ to be found in terms of $F_n$, the Fibonacci numbers:
$$a_n=\tan(F_n\arctan(2))$$
Because of this sequence and many other similar sequence and infinite series problems, so many trigonometric identities are permanently seared into my memory.

**PROBLEM 10**

When I first read this problem, I thought "am I missing something? Of *course* the flea will never catch the rabbit!" But then I realized that the trick lay in the "infinitely stretchy elastic cord" (I wish I had one of those... it sure would be useful around the house).

When the rabbit jumps, the cord dilates *with the flea on it*. So, for instance, when the rabbit jumps from $2$ to $3$ miles away, the flea's distance from the post is increased by a factor of $\frac{3}{2}$.

It would be simpler just to generalize this problem. Suppose that instead of moving $1$ inch per jump, the flea moves $m$ miles per jump. Let $d_n$ be the distance from the post to the flea after his *nth* jump. The rabbit's distance changes from $n$ to $n+1$ miles right after the flea jumps for the *nth* time, so
$$d_{n+1}=\frac{n+1}{n}d_n+m$$
Using the initial value $d_1=m$, this recurrence can be solved in terms of the harmonic numbers $H_n$:
$$d_n=mnH_n$$
This formula can be proven by induction. Clearly, it holds for the base case of $n=1$. Now suppose it holds for some arbitrary $n$. Then
$$d_n=mnH_n$$
implying that
$$\frac{n+1}{n}d_n=m(n+1)H_n$$
$$\frac{n+1}{n}d_n+m=m((n+1)H_n+1)$$
$$\frac{n+1}{n}d_n+m=m(n+1)\bigg(H_n+\frac{1}{n+1}\bigg)$$
$$d_{n+1}=m(n+1)H_{n+1}$$
and so it must also hold for $n+1$. Thus, by induction, for all $n\in\mathbb N$,
$$d_n=mnH_n$$
The flea will have caught up with the rabbit after its *nth* jump if
$$d_n\ge n$$
since the rabbit is $n$ miles from his post after the *nth* jump. This is equivalent to 
$$mnH_n\ge n$$
$$H_n\ge \frac{1}{m}$$
Now, recall that since the harmonic series diverges,
$$\lim_{n\to\infty} H_n=\infty$$
and so $H_n$ can surpass any number, however large, for some $n$. This implies that, however small $m$ may be, there exists some $n$ sufficiently large satisfying
$$H_n\ge \frac{1}{m}$$
Thus, the flea will *always* catch the rabbit, no matter how slow he may go. $\blacksquare$

<center>![Fig 8](/img/PROMYS2018-Fig8.png)</center>

Now one might ask the following question: how long will it take for the flea to catch this poof rabbit? To determine this, we can use the fact that as $n$ approaches infinity, the harmonic numbers behave like
$$H_n\approx \ln(n)+\gamma$$
where $\gamma$ is the Euler-Mascheroni constant. I have shown that the flea catches the rabbit when
$$H_n\ge \frac{1}{m}$$
or, if $\frac{1}{m}$ is large, this happens approximately when
$$\ln(n)+\gamma= \frac{1}{m}$$
or
$$n\ge e^{\frac{1}{m}-\gamma}$$
In this case, since there are approximately $6.33\cdot 10^4$ inches in a mile, this occurs at
$$n\approx e^{6.33\cdot 10^4-\gamma}$$
which is approximately
$$n\approx 10^{2.7\cdot 10^4}$$
steps. That's a long time!

**ADDENDUM TO PROBLEM 10**

I really enjoyed this problem. Because it seemed so obvious at first that the rabbit would win, I knew that the answer would be the opposite (reverse psychology! Ah-ha!).

For a long time, I was obsessed with recurrence relations, especially those in the form
$$a_{n+1}=\alpha_n a_n+\beta_n$$
which led me to derive the following solution to this type of recurrence:
$$a_n=\bigg(\prod_{k=1}^{n-1} \alpha_k\bigg)\bigg[a_1+\sum_{k=1}^{n-1} \frac{\beta_k}{\prod_{i=1}^{k}\alpha_i}\bigg]$$
This formula allowed me to come up with a quick solution to the problem once I had formula a recurrence.

Also, my experience with the harmonic numbers and their asymptotic formula
$$H_n\approx \ln(n)+\gamma$$
came in handy for the last part. I've used this in the past mostly to help me evaluate infinite series. For example, the series
$$\sum_{n=1}^\infty \frac{(-1)^n\lfloor \log_2(n)\rfloor}{n}$$
can be evaluated using the asymptotic formula. But I don't want to give away exactly how, in case you want to take a crack at it (it's a pretty fun problem).