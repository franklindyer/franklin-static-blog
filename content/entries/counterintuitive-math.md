## Simple but counterintuitive math

<hr>

**The Basel Problem.** Why is the following equation true: $$\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}$$ I know how to prove this using Fourier Series, but the proof doesn't "preserve intuition" very well.

<hr>

**Selmer's cubic curve.** Selmer has proved that the following cubic has a solution modulo $m$ for every positive integer $m$, but does *not* have any integer solutions: $$3x^3 + 4y^3 + 5z^3 = 0$$ That makes this a counterexample to a property satisfied by homogenous conics, stating that they have a solution in integers if and only if they have a solution modulo each positive integer $m$. Is there a quick or intuitive way to understand why this fails for this cubic?

<hr>

**The quantum CHSH game.** This is a very simple cooperative game for two players, Alice and Bob, who are allowed to discuss strategy before playing the game separately from each other. The game has a moderator named Charlie, and the game proceeds as follows:

1. Charlie chooses $x,y\in \{0,1\}$ uniformly and at random.
2. Charlie sends $x$ to Alice and $y$ to Bob.
3. Alice must choose a bit $a$, and Bob must choose a bit $b$.
4. Alice and Bob win the game iff $a + b\bmod 2 = x\land y$.

Classically, it is easy to prove that the optimal strategy allows them to win $75\%$ of the time. But when *quantum* strategies are permitted, so that Alice and Bob may share an entangled quantum state, the following winning probability is realizable, and furthermore optimal: $$\cos^2\tfrac{\pi}{8} \approx 0.85$$ This is unintuitive to me in two ways: firstly, that such a strategy is possible in the first place; and secondly, that it cannot be improved on by adding "more entanglement" somehow. I've proven both of these things algebraically, but they still elude my intuition (as many quantum-related things do).

<hr>

**Exotic S5-shaped subgroups of S6**. There are 6 conjugate subgroups of $S_6$ that are isomorphic to $S_5$, *and* that act transitively upon a 6-element set as subgroups of the permutation group representation of $S_6$. (That is, they are not the trivially embedded copies of $S_5$ that simply fix one of the 6 elements.) Is there an intuitive - perhaps geometric or algebraic - way of understanding these subgroups?

<hr>

**Magma theories over finite sets.** Terence Tao's "Equational Theories" formalization project holds many gems of counterintuitive mathematics, but one of the things that intrigues me most is the idea that some equational laws, called *Austin laws*, admit only *infinite* (or trivial) models. Examples include:

$$\begin{align*}x &= y\circ (y\circ (y\circ (x\circ (z\circ y)))) \\ x &= (y\circ ((z\circ x) \circ w))\circ (x\circ w) \\ x &= (((y\circ y)\circ y)\circ x)\circ ((y\circ y)\circ z)\end{align*}$$

It is also interesting how some pairs of magma laws have an entailment relationship for finite magmas, but not for infinite magmas. I find both things very counterintuitive but haven't had the time to explore the topic enough for them to become more clear to me.

<hr>

**Equational proofs can be ridiculously hard.** There are many interesting problems that take the following form: given that some equations hold true in a ring/magma/monoid/group/field, show that some other equation holds true in general, or that some other equation has a solution. One of the most appealing kinds of proofs for these problems is that consisting of *direct algebraic manipulation*. For example, a favorite problem is to prove that $$X = 1 + X^2 ~ \implies ~ X = X^7$$ in, for instance $\mathbb C$. One proof is to show that $X$ is a cube root of unity, from which the result is straightforward. But there is a more interesting and more generalizable proof that does not even rely on the field properties of $\mathbb C$, and in fact applies in more general settings (one consequence, for example, is that a tree-like topological space satisfying $T\simeq \mathbf{1} + T^2$ also satisfies $T \simeq T^7$).

But sometimes, direct algebraic proofs are shockingly *way more complicated* than constructive ones. For example, Jacobson's Theorem states that rings $R$ for which $x^n = x$ for all $x\in R$ for some $n\in\mathbb N$ are commutative. Direct algebraic evidence for this claim for a particular value of $n$ can be provided by expressing the commutator $xy-yx$ in the following form: $$xy-yx = \sum g_i\cdot (f_i^n - f_i)\cdot h_i$$ for some $f_i,g_i,h_i\in \mathbb Z[x,y]$. But finding these representations is difficult and they can be ridiculously complicated for even very small values of $n$. See [this paper](https://arxiv.org/pdf/2310.05301) for details.

<hr>
