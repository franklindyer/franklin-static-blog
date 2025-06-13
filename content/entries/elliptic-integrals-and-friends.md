## Elliptic integrals and their friends

The theory of elliptic functions is rich with unbelievable algebraic identities and relationships. To make sense of this field, you have to keep a myriad of complicated mathematical objects and their relationships to each other in your head all at once. This page is an (incomplete) "cheat sheet" of the colorful characters belonging to this field of study.

<hr>

**Elliptic integrals.** The complete elliptic integral of the first kind $K$ is defined by $$K(k) = \int_0^{\pi/2} \frac{d\vartheta}{\sqrt{1-k^2\sin^2\vartheta}} = \int_0^1 \frac{dz}{\sqrt{(1-z^2)(1-k^2 z^2)}}$$ and its complementary function $K'$ by $K'(k) = K(\sqrt{1-k^2})$.

- The Jacobi elliptic functions are inverses of the (multi-valued) incomplete elliptic integral of the first kind.
- The values $K$ and $K'$ are the quarter-periods of the Jacobi elliptic functions.

<hr>

**Weierstrass elliptic P-functions.** The Weierstrass P-function $\wp(z)$ is defined relative to a set of periods $\omega_1,\omega_2$. It is an even doubly-periodic meromorphic function that is periodic with periods $\omega_1, \omega_2$. It is defined by the following absolutely convergent series: $$\wp(z) =\frac{1}{z^2} + \sum_{w\in \omega_1\mathbb Z + \omega_2\mathbb Z \backslash \{0\}} \bigg(\frac{1}{(z-w)^2} - \frac{1}{w^2}\bigg)$$ It can also be proven to satisfy a differential equation: $$\wp'^2 = 4\wp^3 - g_2 \wp - g_3$$ for constants $g_2,g_3\in\mathbb C$. These constants are called "modular invariants".

- The differential equation implies that $(\wp,\wp')$ parametrizes the elliptic curve $y^2 = x^3 - g_2 x - g_3$.
- The modular invariants as a function of $\omega_1,\omega_2$ are Eisenstein series $g_2 = 60 G_4$ and $g_3 = 140 G_6$.

<hr>

**Modular lambda function.** The modular lambda function $\lambda(\tau)$ describes the shape of the values of the $\wp(z)$ function at its half-periods, where $\tau = \omega_2/\omega_1$ is the ratio of the periods of $\wp$. In particular, it is defined by the cross-ratio $$\lambda(\tau) = \frac{e_3-e_2}{e_1-e_2} = \frac{\wp(\tfrac{\omega_1+\omega_2}{2})-\wp(\tfrac{\omega_2}{2})}{\wp(\tfrac{\omega_1}{2})-\wp(\tfrac{\omega_2}{2})}$$

<hr>

**Jacobi elliptic trigonometric functions.**

<hr>

**Elliptic nome.**

<hr>

**Jacobi theta functions.** 

<hr>

**Eisenstein series.** The Eisenstein series $G_{2k}(\omega_1,\omega_2)$ is defined by $$G_{2k}(\omega_1,\omega_2) = \sum_{w\in\omega_1\mathbb Z + \omega_2\mathbb Z \backslash 0} \frac{1}{w^{2k}}$$

- Multiples of the Eisenstein series give the modular invariants of $\wp$ in terms of its periods.

<hr>

**Modular J-invariant.**

<hr>

**Elliptic curves.**

<hr>

**Arithmetic-geometric mean.**

<hr>
