QB.paper({
  year: "2019-20", date: "21/03/2022", marks: 280,
  rules: String.raw`L-2/T-2 (ME) B.Sc. Engineering Examinations 2019-2020, MATH 263 (Complex Variable, Fourier Series, Harmonic Functions and Partial Differential Equations), 3 hours, 280 marks. Section A: four questions, answer any THREE. Section B: four questions, answer any THREE. Use separate scripts for each section. **Only Section A (complex variables) is given here: Section B (Lagrange and Charpit methods, higher-order PDEs, Fourier series, integrals and transforms, wave and Laplace equations) is not part of MATH 327.**`,
  questions: [
    { id: "2019-20-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2019-20-Q1a", label: "(a)", marks: "12",
          topic: "complex-algebra", sub: "Airplane displacements as complex numbers: resultant distance and direction",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`An airplane travels 100 miles southeast, 50 miles due west, 200 miles 30° north of east and then 150 miles northeast. Determine (i) analytical and (ii) graphically how far and in what direction it is from its starting point.`,
          solution: String.raw`**Method:** represent each displacement as a complex number $re^{i\theta}$ (east = positive real axis, north = positive imaginary axis) and add them.

1. **(i) The four displacements:**

| Leg | Direction θ | $z = r(\cos\theta + i\sin\theta)$ |
|---|---|---|
| 100 mi southeast | −45° | $70.711 - 70.711i$ |
| 50 mi due west | 180° | $-50$ |
| 200 mi 30° north of east | 30° | $173.205 + 100i$ |
| 150 mi northeast | 45° | $106.066 + 106.066i$ |

2. **Resultant:**
$$R = (70.711 - 50 + 173.205 + 106.066) + i(-70.711 + 0 + 100 + 106.066) = 299.98 + 135.36i$$

3. **Distance and direction:**
$$|R| = \sqrt{299.98^2 + 135.36^2} = 329.1\ \text{miles}, \qquad \arg R = \tan^{-1}\frac{135.36}{299.98} = 24.3°$$
   The plane is **329.1 miles from its starting point, 24.3° north of east**.

4. **(ii) Graphically:** draw the four displacement vectors to scale, head to tail. The arrow from the start to the final point is the resultant; measure its length (≈ 329 mi) and its angle with the east axis (≈ 24°).

![The four displacements drawn head to tail and the resultant of 329.1 miles at 24.3° north of east](fig/2019-20-Q1a-sol.svg)`,
          answer: String.raw`Sum 100e^{−iπ/4} − 50 + 200e^{iπ/6} + 150e^{iπ/4} = 299.98 + 135.36i ⇒ 329.1 miles, 24.3° north of east (graphically: head-to-tail vector polygon).` },
        { id: "2019-20-Q1b", label: "(b)", marks: "11",
          topic: "elementary-functions", sub: "Principal value Log(1 + i); proof that |sin z|² = sin²x + sinh²y",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Compute the principal value of the complex logarithm $\mathrm{Log}\,z$ for $z = 1 + i$. Also show that $|\sin z|^2 = (\sin x)^2 + (\sinh y)^2$ for all complex numbers $z = x + iy$.`,
          solution: String.raw`### Principal logarithm
$\mathrm{Log}\,z = \ln|z| + i\,\mathrm{Arg}\,z$ with $-\pi < \mathrm{Arg}\,z \le \pi$. For $z = 1 + i$: $|z| = \sqrt2$, $\mathrm{Arg}\,z = \pi/4$:
$$\mathrm{Log}(1 + i) = \ln\sqrt2 + i\frac\pi4 = \tfrac12\ln2 + i\frac\pi4 \approx 0.3466 + 0.7854i$$

### $|\sin z|^2$
1. **Real and imaginary parts.** Using $\sin(iy) = i\sinh y$ and $\cos(iy) = \cosh y$:
$$\sin z = \sin(x + iy) = \sin x\cosh y + i\cos x\sinh y$$

2. **Modulus squared:**
$$|\sin z|^2 = \sin^2x\cosh^2y + \cos^2x\sinh^2y$$

3. **Use $\cosh^2y = 1 + \sinh^2y$:**
$$|\sin z|^2 = \sin^2x(1 + \sinh^2y) + \cos^2x\sinh^2y = \sin^2x + (\sin^2x + \cos^2x)\sinh^2y = \sin^2x + \sinh^2y \qquad\blacksquare$$

**Consequence:** $|\sin z| \ge |\sinh y|$, so sin z is unbounded in the plane (unlike the real sine), and $\sin z = 0$ only when $\sin x = 0$ and $y = 0$, i.e. at $z = n\pi$.`,
          answer: String.raw`Log(1 + i) = ln√2 + iπ/4 ≈ 0.3466 + 0.7854i. sin z = sin x cosh y + i cos x sinh y ⇒ |sin z|² = sin²x cosh²y + cos²x sinh²y = sin²x + sinh²y.` },
        { id: "2019-20-Q1c", label: "(c)", marks: "10",
          topic: "analytic", sub: "Guess and verify lim_{z→2+i} (z² − 2iz)/(z² + 4)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Guess at a possible value for $\displaystyle\lim_{z\to2+i}\frac{z^2 - 2iz}{z^2 + 4}$ and investigate the correctness of your guess.`,
          solution: String.raw`1. **Guess by substitution:** at $z_0 = 2 + i$, $z_0^2 = 3 + 4i$ and $2iz_0 = -2 + 4i$, so
$$\frac{z_0^2 - 2iz_0}{z_0^2 + 4} = \frac{3 + 4i + 2 - 4i}{7 + 4i} = \frac{5}{7 + 4i} = \frac{5(7 - 4i)}{65} = \frac{7 - 4i}{13}$$

2. **Is the guess correct?** Factor the numerator and denominator:
$$\frac{z^2 - 2iz}{z^2 + 4} = \frac{z(z - 2i)}{(z - 2i)(z + 2i)} = \frac{z}{z + 2i}, \qquad z \ne 2i$$
   The rational function $\dfrac{z}{z + 2i}$ is continuous wherever $z \ne -2i$, and in particular at $2 + i$. By the limit theorems for sums, products and quotients (the limit of the denominator, $z_0 + 2i = 2 + 3i$, is not zero):
$$\lim_{z\to2+i}\frac{z}{z + 2i} = \frac{2 + i}{2 + 3i} = \frac{(2 + i)(2 - 3i)}{13} = \frac{7 - 4i}{13}$$

3. **Conclusion:** the guess is correct:
$$\lim_{z\to2+i}\frac{z^2 - 2iz}{z^2 + 4} = \frac{7 - 4i}{13} \approx 0.538 - 0.308i$$
   Direct substitution works because the function is continuous at $2 + i$ (its denominator $z^2 + 4$ vanishes only at $\pm2i$). The guess would fail at $z_0 = 2i$, where substitution gives 0/0, although the limit still exists there ($\tfrac12$).`,
          answer: String.raw`Guess by substitution: 5/(7 + 4i) = (7 − 4i)/13. Correct: (z² − 2iz)/(z² + 4) = z/(z + 2i) is continuous at 2 + i (denominator 2 + 3i ≠ 0), so the limit is (2 + i)/(2 + 3i) = (7 − 4i)/13.` },
        { id: "2019-20-Q1d", label: "(d)", marks: "13⅓",
          topic: "mapping", sub: "Image of |z| = r₀ under T(z) = (z − i)/(z + i); the case r₀ = 1; preimage of 1 + i",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Find the image of the circle $|z| = r_0$, $r_0 \ne 1$ under the bilinear transformation $T(z) = \dfrac{z - i}{z + i}$. What happens if $r_0 = 1$? Which point will map onto $1 + i$.`,
          solution: String.raw`1. **Inverse map.** From $w = \dfrac{z - i}{z + i}$: $w(z + i) = z - i \Rightarrow z = \dfrac{i(1 + w)}{1 - w}$.

2. **Condition $|z| = r_0$:**
$$\left|\frac{i(1 + w)}{1 - w}\right| = r_0 \;\Rightarrow\; |w + 1| = r_0|w - 1|$$
   With $w = u + iv$:
$$(u + 1)^2 + v^2 = r_0^2\left[(u - 1)^2 + v^2\right] \;\Rightarrow\; (1 - r_0^2)(u^2 + v^2) + 2(1 + r_0^2)u + (1 - r_0^2) = 0$$

3. **For $r_0 \ne 1$**, divide by $1 - r_0^2$ and complete the square:
$$\left(u + \frac{1 + r_0^2}{1 - r_0^2}\right)^2 + v^2 = \left(\frac{1 + r_0^2}{1 - r_0^2}\right)^2 - 1 = \left(\frac{2r_0}{1 - r_0^2}\right)^2$$
   The image is the **circle with centre $\left(-\dfrac{1 + r_0^2}{1 - r_0^2}, 0\right)$ and radius $\dfrac{2r_0}{|1 - r_0^2|}$** (a circle of Apollonius with respect to $w = \pm1$). For $r_0 < 1$ it lies in the left half-plane $u < 0$; for $r_0 > 1$ in the right half-plane.

4. **For $r_0 = 1$:** the condition becomes $|w + 1| = |w - 1|$, i.e. $u = 0$. The unit circle maps onto the **imaginary axis** (a "circle" through ∞, since $z = -i$ on the unit circle goes to $w = \infty$). Points inside $|z| < 1$ satisfy $|w + 1| < |w - 1|$, i.e. they go to the left half-plane.

5. **Point mapped onto $1 + i$:**
$$z = \frac{i(1 + w)}{1 - w}\bigg|_{w=1+i} = \frac{i(2 + i)}{-i} = -(2 + i) = -2 - i$$
   Check: $T(-2 - i) = \dfrac{-2 - 2i}{-2} = 1 + i$ ✓. (Here $|z| = \sqrt5$, and the image circle for $r_0 = \sqrt5$ has centre $(1.5, 0)$ and radius $\sqrt5/2$, which indeed passes through $1 + i$.)`,
          answer: String.raw`z = i(1 + w)/(1 − w); |z| = r₀ ⇔ |w + 1| = r₀|w − 1| ⇒ circle centre (−(1 + r₀²)/(1 − r₀²), 0), radius 2r₀/|1 − r₀²|. If r₀ = 1: |w + 1| = |w − 1| ⇒ the imaginary axis u = 0. The point z = −2 − i maps to 1 + i.` }
      ] },
    { id: "2019-20-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2019-20-Q2a", label: "(a)", marks: "15⅔",
          topic: "analytic", sub: "Polar Cauchy–Riemann equations; f = √r e^{iθ/2} (0 < θ < 2π) is differentiable and f′ = 1/(2f)",
          type: "derivation", syllabus: "in", repeats: ["2021-22-Q2a", "2016-17-Q1c"],
          text: String.raw`Write down Cauchy-Riemann equations in polar form. Test the differentiability of the function $f(z) = \sqrt r\,e^{i\theta/2}$, $(r > 0,\ 0 < \theta < 2\pi)$ in the indicated domain and hence show that $f'(z) = \dfrac{1}{2f(z)}$.`,
          solution: String.raw`1. **Polar C–R equations:**
$$u_r = \frac1r v_\theta, \qquad v_r = -\frac1r u_\theta, \qquad f'(z) = e^{-i\theta}(u_r + iv_r)$$

2. **Parts of f:** $u = \sqrt r\cos\dfrac\theta2$, $v = \sqrt r\sin\dfrac\theta2$.

3. **Partial derivatives:**
$$u_r = \frac{\cos(\theta/2)}{2\sqrt r}, \quad u_\theta = -\frac{\sqrt r}{2}\sin\frac\theta2, \quad v_r = \frac{\sin(\theta/2)}{2\sqrt r}, \quad v_\theta = \frac{\sqrt r}{2}\cos\frac\theta2$$

4. **Check:**
$$\frac1r v_\theta = \frac{\cos(\theta/2)}{2\sqrt r} = u_r ✓, \qquad -\frac1r u_\theta = \frac{\sin(\theta/2)}{2\sqrt r} = v_r ✓$$
   The partials are continuous for $r > 0$, $0 < \theta < 2\pi$ (the branch cut is the positive real axis), so **f is differentiable (analytic) in the domain**.

5. **Derivative:**
$$f'(z) = e^{-i\theta}\cdot\frac{1}{2\sqrt r}\left(\cos\frac\theta2 + i\sin\frac\theta2\right) = \frac{e^{-i\theta}e^{i\theta/2}}{2\sqrt r} = \frac{1}{2\sqrt r\,e^{i\theta/2}} = \frac{1}{2f(z)} \qquad\blacksquare$$`,
          answer: String.raw`u_r = v_θ/r, v_r = −u_θ/r. u = √r cos(θ/2), v = √r sin(θ/2) satisfy them with continuous partials for r > 0, 0 < θ < 2π ⇒ differentiable; f′ = e^{−iθ}(u_r + iv_r) = 1/(2√r e^{iθ/2}) = 1/(2f).` },
        { id: "2019-20-Q2b", label: "(b)", marks: "16⅔",
          topic: "analytic", sub: "u = e^{−x}(x sin y − y cos y) is harmonic; f = i z e^{−z}",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that $u(x, y) = e^{-x}(x\sin y - y\cos y)$ is a harmonic function. Find an analytic function $f(z) = u(x, y) + iv(x, y)$ and express $f(z)$ in terms of z.`,
          solution: String.raw`1. **Derivatives of u:**
$$u_x = e^{-x}(\sin y - x\sin y + y\cos y), \qquad u_{xx} = e^{-x}(-2\sin y + x\sin y - y\cos y)$$
$$u_y = e^{-x}(x\cos y - \cos y + y\sin y), \qquad u_{yy} = e^{-x}(-x\sin y + 2\sin y + y\cos y)$$

2. **Laplace's equation:**
$$u_{xx} + u_{yy} = e^{-x}\left[(-2 + 2)\sin y + (x - x)\sin y + (-y + y)\cos y\right] = 0$$
   So u is harmonic.

3. **Milne–Thomson method.** $f'(z) = u_x - iu_y$ (by C–R). Put $x = z$, $y = 0$:
$$u_x(z, 0) = 0, \qquad u_y(z, 0) = e^{-z}(z - 1)$$
$$f'(z) = -ie^{-z}(z - 1) = i(1 - z)e^{-z}$$

4. **Integrate:** $\int(1 - z)e^{-z}dz = ze^{-z}$ (since $\frac{d}{dz}(ze^{-z}) = (1 - z)e^{-z}$), so
$$\boxed{f(z) = ize^{-z} + C}$$

5. **Check and v:** with $z = x + iy$,
$$ize^{-z} = i(x + iy)e^{-x}(\cos y - i\sin y) = e^{-x}(x\sin y - y\cos y) + ie^{-x}(x\cos y + y\sin y)$$
   The real part is u ✓, and $v = e^{-x}(x\cos y + y\sin y)$ (plus a constant).`,
          answer: String.raw`u_xx = e^{−x}(−2 sin y + x sin y − y cos y), u_yy = e^{−x}(2 sin y − x sin y + y cos y) ⇒ ∇²u = 0. Milne–Thomson: f′ = u_x − iu_y at (z, 0) = i(1 − z)e^{−z} ⇒ f = ize^{−z} + C, v = e^{−x}(x cos y + y sin y).` },
        { id: "2019-20-Q2c", label: "(c)", marks: "15",
          topic: "complex-integration", sub: "∫ (x² − iy²) dz along 1 + i → 1 + 8i → 2 + 8i",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate $\displaystyle\int_C(x^2 - iy^2)\,dz$ along the straight lines from $z = 1 + i$ to $z = 1 + 8i$ and then along a line parallel to y-axis from $z = 1 + 8i$ to $z = 2 + 8i$.`,
          solution: String.raw`**Note:** the second segment, from $1 + 8i$ to $2 + 8i$, is horizontal (parallel to the x-axis); the first one is parallel to the y-axis. The integrand is not analytic, so each segment must be parametrized.

1. **Segment 1, $1 + i \to 1 + 8i$:** $x = 1$, $z = 1 + iy$, $dz = i\,dy$, $1 \le y \le 8$:
$$\int_1^8(1 - iy^2)\,i\,dy = \int_1^8(i + y^2)\,dy = 7i + \frac{8^3 - 1}{3} = \frac{511}{3} + 7i$$

2. **Segment 2, $1 + 8i \to 2 + 8i$:** $y = 8$, $z = x + 8i$, $dz = dx$, $1 \le x \le 2$:
$$\int_1^2(x^2 - 64i)\,dx = \frac{8 - 1}{3} - 64i = \frac73 - 64i$$

3. **Total:**
$$\int_C(x^2 - iy^2)\,dz = \frac{511}{3} + \frac{7}{3} + (7 - 64)i = \frac{518}{3} - 57i \approx 172.67 - 57i$$

**Result:** $\dfrac{518}{3} - 57i$.`,
          answer: String.raw`Segment 1 (x = 1, dz = i dy): ∫₁⁸(i + y²)dy = 511/3 + 7i; segment 2 (y = 8, dz = dx): ∫₁²(x² − 64i)dx = 7/3 − 64i ⇒ total 518/3 − 57i ≈ 172.67 − 57i.` }
      ] },
    { id: "2019-20-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2019-20-Q3a", label: "(a)", marks: "15",
          topic: "complex-integration", sub: "Cauchy's integral formula for derivatives: ∮ (z + 1)/(z⁴ + 2iz³) dz on |z| = 1",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Use Cauchy integral formula to evaluate $\displaystyle\oint_C\frac{z + 1}{z^4 + 2iz^3}\,dz$, where the contour C is the circle $|z| = 1$.`,
          solution: String.raw`1. **Factor:** $z^4 + 2iz^3 = z^3(z + 2i)$. The singular points are $z = 0$ (order 3), inside $|z| = 1$, and $z = -2i$, outside.

2. **Take** $f(z) = \dfrac{z + 1}{z + 2i}$, analytic inside and on C. Cauchy's integral formula for the second derivative:
$$\oint_C\frac{f(z)}{z^3}\,dz = \frac{2\pi i}{2!}f''(0)$$

3. **Derivatives:** $f(z) = 1 + \dfrac{1 - 2i}{z + 2i}$, so
$$f'(z) = -\frac{1 - 2i}{(z + 2i)^2}, \qquad f''(z) = \frac{2(1 - 2i)}{(z + 2i)^3}, \qquad f''(0) = \frac{2(1 - 2i)}{(2i)^3} = \frac{2(1 - 2i)}{-8i} = \frac{2 + i}{4}$$

4. **Value:**
$$\oint_C\frac{z + 1}{z^4 + 2iz^3}dz = \pi i\cdot\frac{2 + i}{4} = \frac{\pi(-1 + 2i)}{4} = -\frac\pi4 + \frac{\pi}{2}i$$

**Result:** $\dfrac{\pi}{4}(-1 + 2i)$.`,
          answer: String.raw`z⁴ + 2iz³ = z³(z + 2i); only z = 0 (order 3) inside |z| = 1. With f = (z + 1)/(z + 2i): ∮ = (2πi/2!)f″(0), f″(0) = 2(1 − 2i)/(2i)³ = (2 + i)/4 ⇒ π(−1 + 2i)/4.` },
        { id: "2019-20-Q3b", label: "(b)", marks: "15",
          topic: "series", sub: "Laurent series of 1/((z + 1)(z + 3)) in 1 < |z| < 3 and |z| > 3",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Expand $f(z) = \dfrac{1}{(z + 1)(z + 3)}$ in a Laurent series valid for, (i) $1 < |z| < 3$, (ii) $|z| > 3$.`,
          solution: String.raw`1. **Partial fractions:**
$$f(z) = \frac12\left[\frac{1}{z + 1} - \frac{1}{z + 3}\right]$$

2. **(i) $1 < |z| < 3$:** $|1/z| < 1$ and $|z/3| < 1$:
$$\frac{1}{z + 1} = \frac1z\cdot\frac{1}{1 + 1/z} = \sum_{n=0}^\infty\frac{(-1)^n}{z^{n+1}}, \qquad \frac{1}{z + 3} = \frac13\cdot\frac{1}{1 + z/3} = \sum_{n=0}^\infty\frac{(-1)^nz^n}{3^{n+1}}$$
$$\boxed{f(z) = \frac12\sum_{n=0}^\infty\frac{(-1)^n}{z^{n+1}} - \frac12\sum_{n=0}^\infty\frac{(-1)^nz^n}{3^{n+1}} = \cdots - \frac{1}{2z^2} + \frac{1}{2z} - \frac16 + \frac{z}{18} - \frac{z^2}{54} + \cdots}$$

3. **(ii) $|z| > 3$:** now also $|3/z| < 1$:
$$\frac{1}{z + 3} = \frac1z\cdot\frac{1}{1 + 3/z} = \sum_{n=0}^\infty\frac{(-1)^n3^n}{z^{n+1}}$$
$$f(z) = \frac12\sum_{n=0}^\infty\frac{(-1)^n(1 - 3^n)}{z^{n+1}} = \frac{1}{z^2} - \frac{4}{z^3} + \frac{13}{z^4} - \frac{40}{z^5} + \cdots$$
   (The n = 0 term vanishes.) Check: for large z, $f \approx 1/z^2$ ✓.`,
          answer: String.raw`f = ½[1/(z + 1) − 1/(z + 3)]. (i) ½Σ(−1)ⁿ/zⁿ⁺¹ − ½Σ(−1)ⁿzⁿ/3ⁿ⁺¹; (ii) ½Σ(−1)ⁿ(1 − 3ⁿ)/zⁿ⁺¹ = 1/z² − 4/z³ + 13/z⁴ − 40/z⁵ + ….` },
        { id: "2019-20-Q3c", label: "(c)", marks: "16⅔",
          topic: "residues", sub: "Residue theorem: ∮ dz/((z − 1)²(z − 3)) on |z| = 2",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate $\displaystyle\oint_C\frac{1}{(z - 1)^2(z - 3)}\,dz$ by Cauchy residue theorem, where the contour C is the circle $|z| = 2$.`,
          solution: String.raw`1. **Poles:** $z = 1$ (double) is inside $|z| = 2$; $z = 3$ is outside.

2. **Residue at the double pole:**
$$\mathrm{Res}_{z=1} = \lim_{z\to1}\frac{d}{dz}\left[(z - 1)^2\frac{1}{(z - 1)^2(z - 3)}\right] = \frac{d}{dz}\left(\frac{1}{z - 3}\right)\bigg|_{z=1} = -\frac{1}{(1 - 3)^2} = -\frac14$$

3. **Residue theorem:**
$$\oint_C\frac{dz}{(z - 1)^2(z - 3)} = 2\pi i\left(-\frac14\right) = -\frac{\pi i}{2}$$

**Result:** $-\dfrac{\pi i}{2}$.`,
          answer: String.raw`Only the double pole z = 1 is inside |z| = 2: Res = d/dz[1/(z − 3)] at 1 = −1/4 ⇒ integral = −πi/2.` }
      ] },
    { id: "2019-20-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2019-20-Q4a", label: "(a)", marks: "23",
          topic: "residues", sub: "Show ∫₀^2π dθ/(5 − 3 sin θ)² = 5π/32 by contour integration",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Using the method of contour integration, show that $\displaystyle\int_0^{2\pi}\frac{d\theta}{(5 - 3\sin\theta)^2} = \frac{5\pi}{32}$.`,
          solution: String.raw`1. **Substitution** $z = e^{i\theta}$, $\sin\theta = \dfrac{z - z^{-1}}{2i}$, $d\theta = \dfrac{dz}{iz}$:
$$5 - 3\sin\theta = 5 - \frac{3(z^2 - 1)}{2iz} = \frac{-3z^2 + 10iz + 3}{2iz} = -\frac{3z^2 - 10iz - 3}{2iz}$$
   The roots of $3z^2 - 10iz - 3 = 0$ are $z = \dfrac{10i \pm \sqrt{-100 + 36}}{6} = \dfrac{10i \pm 8i}{6}$, i.e. $3i$ and $i/3$, so $3z^2 - 10iz - 3 = 3(z - 3i)(z - i/3)$.

2. **Integrand:**
$$\frac{d\theta}{(5 - 3\sin\theta)^2} = \frac{(2iz)^2}{9(z - 3i)^2(z - i/3)^2}\cdot\frac{dz}{iz} = \frac{4iz}{9(z - 3i)^2(z - i/3)^2}\,dz$$

3. **Pole inside $|z| = 1$:** $z = i/3$ (double); $z = 3i$ is outside.

4. **Residue at $z = i/3$:**
$$\mathrm{Res} = \frac{4i}{9}\frac{d}{dz}\left[\frac{z}{(z - 3i)^2}\right]_{z=i/3} = \frac{4i}{9}\left[\frac{-(z + 3i)}{(z - 3i)^3}\right]_{z=i/3}$$
   At $z = i/3$: $-(z + 3i) = -\dfrac{10i}{3}$ and $(z - 3i)^3 = \left(-\dfrac{8i}{3}\right)^3 = \dfrac{512i}{27}$, so
$$\mathrm{Res} = \frac{4i}{9}\cdot\frac{-10i/3}{512i/27} = \frac{4i}{9}\left(-\frac{45}{256}\right) = -\frac{5i}{64}$$

5. **Residue theorem:**
$$\int_0^{2\pi}\frac{d\theta}{(5 - 3\sin\theta)^2} = 2\pi i\left(-\frac{5i}{64}\right) = \frac{10\pi}{64} = \frac{5\pi}{32} \qquad\blacksquare$$
   Check: numerically 0.490874 = 5π/32 ✓; also the standard result $\dfrac{2\pi a}{(a^2 - b^2)^{3/2}} = \dfrac{10\pi}{64}$.`,
          answer: String.raw`z = e^{iθ}: 5 − 3 sin θ = −3(z − 3i)(z − i/3)/(2iz); integrand 4iz/[9(z − 3i)²(z − i/3)²]; double pole i/3 inside, residue −5i/64 ⇒ 2πi(−5i/64) = 5π/32.` },
        { id: "2019-20-Q4b", label: "(b)", marks: "23⅔",
          topic: "residues", sub: "∫ dx/((x² + 1)(x² + 9)) over the real line = π/12",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate the following integral using the method of contour integration $\displaystyle\int_{-\infty}^{\infty}\frac{dx}{(x^2 + 1)(x^2 + 9)}$.`,
          solution: String.raw`1. **Contour:** $f(z) = \dfrac{1}{(z^2 + 1)(z^2 + 9)}$, closed by the semicircle $\Gamma: |z| = R$ in the upper half-plane ($R > 3$).

2. **Poles in the upper half-plane:** $z = i$ and $z = 3i$ (simple).

3. **Residues:**
$$\mathrm{Res}_{z=i} = \frac{1}{(2i)(i^2 + 9)} = \frac{1}{16i}, \qquad \mathrm{Res}_{z=3i} = \frac{1}{((3i)^2 + 1)(6i)} = \frac{1}{(-8)(6i)} = -\frac{1}{48i}$$
$$\sum\mathrm{Res} = \frac{3 - 1}{48i} = \frac{1}{24i}$$

4. **Semicircle → 0:** on Γ, $|f| \le \dfrac{1}{(R^2 - 1)(R^2 - 9)}$, so $\left|\int_\Gamma f\,dz\right| \le \dfrac{\pi R}{(R^2 - 1)(R^2 - 9)} \to 0$.

5. **Result:**
$$\int_{-\infty}^{\infty}\frac{dx}{(x^2 + 1)(x^2 + 9)} = 2\pi i\cdot\frac{1}{24i} = \frac{\pi}{12} \approx 0.2618$$
   Check by partial fractions: $\frac18\left[\frac{1}{x^2 + 1} - \frac{1}{x^2 + 9}\right]$ integrates to $\frac18\left(\pi - \frac\pi3\right) = \frac\pi{12}$ ✓.`,
          answer: String.raw`Upper poles i, 3i with residues 1/(16i), −1/(48i); sum 1/(24i); semicircle → 0 ⇒ ∫ = 2πi/(24i) = π/12.` }
      ] }
  ]
});
