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