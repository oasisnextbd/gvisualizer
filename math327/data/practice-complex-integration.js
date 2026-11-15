QB.paper({ year: "Practice", set: "Complex integration and Cauchy's theorems", date: "", marks: 0, practice: true,
  rules: String.raw`Line integrals, the ML inequality, the Cauchy integral theorem and formula, and Liouville's theorem (Brown & Churchill ch. 4; lecture notes "Line Integral of a complex Function", "Cauchy Integral theorem" and "Liouville's Theorem"). Includes:
- the worked problems and practice/home-work items of the notes not already set in past papers;
- selected Brown & Churchill exercises (Secs. 43, 48, 50).

Not repeated:
- ∫ z² dz along the unit circle from 1 to i (2016-17 Q2d);
- ∮ (4 − 3z)/(z(z − 1)(z − 2)) dz on |z| = 3/2 (2023-24 Q3b);
- ∮ e^{zt}/(z² + 1)² dz (in the residues set).

Every solution starts from the sketch of the path or contour with its direction and the singular points (filled = inside, hollow = outside).`,
  questions: [
    { id: "practice-complex-integration-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P1", label: "", marks: "", topic: "complex-integration",
        sub: "∫ (y − x − 3ix²) dz from 0 to 1 + i along y = x, along 0 → i → 1 + i, and along y = x²", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Line Integral of a complex Function", Problem 01`,
        text: String.raw`Evaluate $\int_C f(z)\,dz$, where $f(z) = y - x - 3ix^2$ (z = x + iy), when
(I) C is the line segment from z = 0 to z = 1 + i;
(II) C consists of two segments, one from z = 0 to z = i and then from z = i to z = 1 + i;
(III) C is the curve $y = x^2$ from z = 0 to z = 1 + i.`,
        solution: String.raw`![Draw the three paths from O to M(1, 1): the diagonal C₃, the broken path C₁ + C₂ through L(0, 1), and the parabola](fig/practice-complex-integration-P1-sketch.svg)

1. **(I) On $C_3$: y = x**, so $z = (1 + i)x$, $dz = (1 + i)\,dx$, and $f = -3ix^2$, with $0 \le x \le 1$:
$$\int_{C_3} = \int_0^1(-3ix^2)(1 + i)\,dx = -i(1 + i) = 1 - i$$

2. **(II) On $C_1$: x = 0**, so z = iy, $dz = i\,dy$, f = y:
$$\int_{C_1} = \int_0^1 y\,i\,dy = \frac i2$$
   **On $C_2$: y = 1**, so z = x + i, dz = dx, $f = 1 - x - 3ix^2$:
$$\int_{C_2} = \int_0^1(1 - x - 3ix^2)\,dx = \frac12 - i$$
   Total: $\dfrac i2 + \dfrac12 - i = \dfrac12(1 - i)$.

3. **(III) On y = x²:** $z = x + ix^2$, $dz = (1 + 2ix)\,dx$, and $f = x^2(1 - 3i) - x$:
$$\int_C = \int_0^1[x^2(1 - 3i) - x](1 + 2ix)\,dx = \frac{1 - 3i}{3} - \frac12 + \frac{2i(1 - 3i)}{4} - \frac{2i}{3} = \frac43 - \frac{7}{6}i$$
   (The notes stop at the unsimplified form.)

4. **Comment.** The three values differ. f is not analytic, since it depends on x and y separately and not through z alone, so its integral depends on the path.

5. **Check:** numerical quadrature along each path gives 1 − i, 0.5 − 0.5i and 1.3333 − 1.1667i ✓.`,
        answer: String.raw`(I) 1 − i; (II) i/2 + (1/2 − i) = (1 − i)/2; (III) 4/3 − 7i/6 — path-dependent since f is not analytic.` } ] },
    { id: "practice-complex-integration-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P2", label: "", marks: "", topic: "complex-integration",
        sub: "∫ (z + 2)/z dz on the upper semicircle, the lower semicircle and the full circle |z| = 2", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Line Integral of a complex Function", Problem 02 (also Brown & Churchill, 7th ed., Sec. 40, Exercise 1; Ans. (a) −4 + 2πi, (b) 4 + 2πi, (c) 4πi)`,
        text: String.raw`Evaluate $\int_C\dfrac{z + 2}{z}\,dz$, where C is
(a) the semicircle $z = 2e^{i\theta}$ $(0 \le \theta \le \pi)$;
(b) the semicircle $z = 2e^{i\theta}$ $(\pi \le \theta \le 2\pi)$;
(c) the circle $z = 2e^{i\theta}$ $(0 \le \theta \le 2\pi)$.`,
        solution: String.raw`![Circle of radius 2: upper half for (a), lower half for (b), both counter-clockwise; z = 0 is the only singular point](fig/practice-complex-integration-P2-sketch.svg)

1. **Parametrise:** $z = 2e^{i\theta}$, $dz = 2ie^{i\theta}d\theta$, so
$$\frac{z + 2}{z}\,dz = \frac{2e^{i\theta} + 2}{2e^{i\theta}}\cdot2ie^{i\theta}\,d\theta = 2i(e^{i\theta} + 1)\,d\theta$$

2. **(a)**
$$\int_0^\pi 2i(e^{i\theta} + 1)\,d\theta = 2\left[e^{i\theta}\right]_0^\pi + 2\pi i = 2(-1 - 1) + 2\pi i = -4 + 2\pi i$$

3. **(b)**
$$\int_\pi^{2\pi} 2i(e^{i\theta} + 1)\,d\theta = 2(1 - (-1)) + 2\pi i = 4 + 2\pi i$$

4. **(c)** The sum of (a) and (b) is $4\pi i$. Equivalently, $\oint\left(1 + \frac2z\right)dz = 0 + 2\cdot2\pi i$.

5. **Note on the notes.** In part (i) the notes write the integrand as $2(ie^{i\theta} + 1)$, dropping the factor i on the second term, and arrive at $\frac2i(e^{i\pi} - 1) + 2\pi = 2\pi + 4i$. The correct value is −4 + 2πi, which is also B&C's answer. Their part (ii), $2e^{2\pi i} + 4\pi i - 2 = 4\pi i$, is right.

6. **Check:** numerical integration gives −4 + 6.2832i, 4 + 6.2832i and 12.566i ✓.`,
        answer: String.raw`Integrand 2i(e^{iθ} + 1)dθ: (a) −4 + 2πi; (b) 4 + 2πi; (c) 4πi (= 2·2πi from the 2/z term).` } ] },
    { id: "practice-complex-integration-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P3", label: "", marks: "", topic: "complex-integration",
        sub: "∫ from i to 2 − i of (3xy + iy²) dz along the straight line", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Line Integral of a complex Function", Problem 03`,
        text: String.raw`Evaluate the integral $\displaystyle\int_i^{2-i}(3xy + iy^2)\,dz$ along the straight line joining $z = i$ and $z = 2 - i$.`,
        solution: String.raw`1. **The line** through (0, 1) and (2, −1) is $x = 1 - y$. So $z = (1 - y) + iy$ and $dz = (-1 + i)\,dy$, with y running from 1 to −1.

![Segment from i = (0, 1) to 2 − i = (2, −1), crossing the real axis at (1, 0)](fig/practice-complex-integration-P3-sketch.svg)

2. **Integrand on the line:** $3xy + iy^2 = 3(1 - y)y + iy^2 = 3y + (-3 + i)y^2$.

3. **Integrate:**
$$\int_1^{-1}\left[3y + (-3 + i)y^2\right](-1 + i)\,dy = (-1 + i)\left[0 + (-3 + i)\left(-\frac23\right)\right] = (-1 + i)\left(2 - \frac{2i}{3}\right)$$
$$= -\frac43 + \frac{8}{3}i$$

4. **Agreement.** The notes' form $2(1 - i)\left(\frac i3 - 1\right)$ equals the same value. Numerical quadrature gives −1.3333 + 2.6667i ✓.`,
        answer: String.raw`x = 1 − y, dz = (−1 + i)dy, y: 1 → −1 ⇒ ∫ = (−1 + i)(2 − 2i/3) = −4/3 + 8i/3.` } ] },
    { id: "practice-complex-integration-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P4", label: "", marks: "", topic: "complex-integration",
        sub: "∫ z³ dz from −2 + i to 5 + 3i along a broken path, and by antiderivative", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Line Integral of a complex Function", Problem 04`,
        text: String.raw`Using the definition of the integral of f(z) along a given path, evaluate $\displaystyle\int_{-2+i}^{5+3i}z^3\,dz$.`,
        solution: String.raw`1. **Path.** Take the horizontal segment y = 1 from (−2, 1) to (5, 1) (z = x + i, dz = dx), then the vertical segment x = 5 from (5, 1) to (5, 3) (z = 5 + iy, dz = i dy).

![Draw the broken path −2 + i → 5 + i → 5 + 3i; the dashed straight chord gives the same value](fig/practice-complex-integration-P4-sketch.svg)

2. **Integrate along the two pieces:**
$$\int = \int_{-2}^5(x + i)^3\,dx + \int_1^3(5 + iy)^3\,i\,dy = \left[\frac{(x + i)^4}{4}\right]_{-2}^5 + \left[\frac{(5 + iy)^4}{4}\right]_1^3 = \frac{(5 + 3i)^4 - (-2 + i)^4}{4}$$
   The intermediate point 5 + i cancels.

3. **Arithmetic:**
$$(5 + 3i)^2 = 16 + 30i, \qquad (5 + 3i)^4 = -644 + 960i$$
$$(-2 + i)^2 = 3 - 4i, \qquad (-2 + i)^4 = -7 - 24i$$
$$\int_{-2+i}^{5+3i}z^3\,dz = \frac{-637 + 984i}{4} = -\frac{637}{4} + 246i$$

4. **Path independence.** z³ is entire with antiderivative z⁴/4, so every path gives the same value.

5. **Note on the notes.** The final line of the notes has $(2 + i)^4$; it should be $(-2 + i)^4$, the lower limit. With $(2 + i)^4$ the imaginary part would be 234 instead of 246. Numerical quadrature along the path gives −159.25 + 246i ✓.`,
        answer: String.raw`[(x + i)⁴/4]₋₂⁵ + [(5 + iy)⁴/4]₁³ = [(5 + 3i)⁴ − (−2 + i)⁴]/4 = (−644 + 960i + 7 + 24i)/4 = −637/4 + 246i (path-independent: z³ entire).` } ] },
    { id: "practice-complex-integration-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P5", label: "", marks: "", topic: "complex-integration",
        sub: "∫ z̄ dz over the right half of the circle |z| = 2", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Line Integral of a complex Function", Problem 05 (Brown & Churchill Sec. 40, Example 1)`,
        text: String.raw`Find the value of the integral $I = \int_C\bar z\,dz$, where C is the right-hand half of the circle |z| = 2, from z = −2i to z = 2i.`,
        solution: String.raw`1. **Parametrise:** $z = 2e^{i\theta}$ with $-\pi/2 \le \theta \le \pi/2$, so $\bar z = 2e^{-i\theta}$ and $dz = 2ie^{i\theta}d\theta$.

![Right half of |z| = 2 traversed from −2i up to 2i](fig/practice-complex-integration-P5-sketch.svg)

2. **Integrate:**
$$I = \int_{-\pi/2}^{\pi/2}2e^{-i\theta}\cdot2ie^{i\theta}\,d\theta = 4i\int_{-\pi/2}^{\pi/2}d\theta = 4\pi i$$

3. **Short cut.** On |z| = 2, $\bar z = 4/z$, so $I = 4\int_C dz/z = 4\cdot i\,\Delta\arg z = 4i\pi$ ✓.

4. **Comment.** z̄ is nowhere analytic, so the value depends on the path. For example, the straight segment from −2i to 2i gives $\int_{-2}^2(-iy)(i\,dy) = 0$.`,
        answer: String.raw`z = 2e^{iθ}, −π/2 ≤ θ ≤ π/2: I = ∫ 2e^{−iθ}·2ie^{iθ}dθ = 4i·π = 4πi.` } ] },
    { id: "practice-complex-integration-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P6", label: "", marks: "", topic: "complex-integration",
        sub: "ML inequality: |∮(e^z − z̄) dz| ≤ 57 on a triangle, and |∫ dz/(z² − 1)| ≤ π/3 on a quarter circle", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Line Integral of a complex Function", ML inequality, Problems 06 and 07`,
        text: String.raw`State the ML inequality. Then:
(a) if C is the boundary of the triangle with vertices 0, 3i and −4, oriented counter-clockwise, show that $\left|\oint_C(e^z - \bar z)\,dz\right| \le 57$;
(b) if C is the arc of the circle |z| = 2 from z = 2 to z = 2i in the first quadrant, show that $\left|\int_C\dfrac{dz}{z^2 - 1}\right| \le \dfrac\pi3$.`,
        solution: String.raw`**ML inequality:** if $|f(z)| \le M$ on a contour C of length L, then $\left|\int_C f(z)\,dz\right| \le ML$.

![Panel (a): the triangle with each side's length and bound; panel (b): the quarter circle, with ±1 off the path](fig/practice-complex-integration-P6-sketch.svg)

1. **(a) $C_1$: 0 → 3i** (x = 0, L₁ = 3). Here $f = e^{iy} + iy$, so $|f| \le 1 + 3 = 4$, giving $M_1L_1 = 12$.

2. **(a) $C_2$: 3i → −4** (L₂ = 5). Here x ≤ 0, so $|e^z| = e^x \le 1$. The farthest point of the side from 0 is −4, so $|\bar z| = |z| \le 4$. Then $|f| \le 5$, giving $M_2L_2 = 25$.

3. **(a) $C_3$: −4 → 0** (y = 0, L₃ = 4). Here $|f| = |e^x - x| \le 1 + 4 = 5$, giving $M_3L_3 = 20$.

4. **(a) Add the three bounds** (triangle inequality for the three pieces):
$$\left|\oint_C(e^z - \bar z)\,dz\right| \le 12 + 25 + 20 = 57$$
   The actual value is −12i (modulus 12), which is well inside the bound.

5. **(b) Bound the integrand.** On |z| = 2, $|z^2 - 1| \ge |z|^2 - 1 = 3$, so $\left|\dfrac{1}{z^2 - 1}\right| \le \dfrac13 = M$. The length is a quarter of the circumference, $L = \frac14(2\pi\cdot2) = \pi$. Hence
$$\left|\int_C\frac{dz}{z^2 - 1}\right| \le \frac\pi3$$
   Numerically the modulus is 0.719, below π/3 = 1.047 ✓.`,
        answer: String.raw`|∫f dz| ≤ ML. (a) sides 0→3i: M = 4, L = 3; 3i→−4: M = 5, L = 5; −4→0: M = 5, L = 4 ⇒ ≤ 12 + 25 + 20 = 57. (b) |z² − 1| ≥ 3 ⇒ M = 1/3, L = π ⇒ ≤ π/3.` } ] },
    { id: "practice-complex-integration-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P7", label: "", marks: "", topic: "complex-integration",
        sub: "Real line integrals: ∫(x + y)dx + x²y dy is path-dependent; ∫(3x² + 4xy + 3y²)dx + 2(x² + 3xy + 4y²)dy = 26/3 on every path", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Line Integral of a complex Function", For Practice 1 and 2 (Ans. 256½, 200¼; 26/3)`,
        text: String.raw`1. Find the value of $\int_C(x + y)\,dx + x^2y\,dy$ (a) along $y = x^2$ from (0, 0) to (3, 9); (b) along $y = 3x$ between the same points.
2. Evaluate
$$\int_{(0,0)}^{(1,1)}(3x^2 + 4xy + 3y^2)\,dx + 2(x^2 + 3xy + 4y^2)\,dy$$
along (a) $y^2 = x$; (b) $y = x^2$; (c) $y = x$. Explain why the answers agree.`,
        solution: String.raw`![Panel (a): the parabola and the line from (0, 0) to (3, 9); panel (b): three paths from (0, 0) to (1, 1)](fig/practice-complex-integration-P7-sketch.svg)

1. **1(a) y = x², dy = 2x dx:**
$$\int_0^3\left[(x + x^2) + x^2\cdot x^2\cdot2x\right]dx = \frac92 + 9 + \frac{2\cdot3^6}{6} = 256\tfrac12$$

2. **1(b) y = 3x, dy = 3 dx:**
$$\int_0^3\left[4x + x^2(3x)(3)\right]dx = 18 + \frac{9\cdot81}{4} = 200\tfrac14$$
   The values differ, as they must: $\partial P/\partial y = 1$ but $\partial Q/\partial x = 2xy$. The differential is not exact.

3. **2. Test for exactness:** $P = 3x^2 + 4xy + 3y^2$ and $Q = 2x^2 + 6xy + 8y^2$, so
$$\frac{\partial P}{\partial y} = 4x + 6y = \frac{\partial Q}{\partial x}$$
   The integral is independent of path (the notes' "NB").

4. **Potential function:**
$$\varphi = x^3 + 2x^2y + 3xy^2 + \frac83y^3, \qquad \varphi_x = P, \quad \varphi_y = Q$$
   For every path, the integral is $\varphi(1, 1) - \varphi(0, 0) = 1 + 2 + 3 + \tfrac83 = \tfrac{26}{3}$.

5. **Check:** direct integration along $y^2 = x$, $y = x^2$ and $y = x$ gives 26/3 each time (sympy) ✓.`,
        answer: String.raw`1(a) 513/2 = 256½; 1(b) 801/4 = 200¼ (path-dependent: P_y = 1 ≠ Q_x = 2xy). 2: P_y = Q_x = 4x + 6y ⇒ exact, φ = x³ + 2x²y + 3xy² + (8/3)y³ ⇒ 26/3 on every path.` } ] },
    { id: "practice-complex-integration-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P8", label: "", marks: "", topic: "complex-integration",
        sub: "(1/2πi)∮ e^{zt}/(z² + 1) dz = sin t on |z| = 3 by Cauchy's integral formula", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Cauchy Integral theorem", Problem 02`,
        text: String.raw`Evaluate $\dfrac{1}{2\pi i}\displaystyle\oint_C\frac{e^{zt}}{z^2 + 1}\,dz$, t > 0, where C is the circle |z| = 3.`,
        solution: String.raw`**Cauchy integral formula:** if f is analytic inside and on C and $z_0$ is inside C, then $f(z_0) = \dfrac{1}{2\pi i}\oint_C\dfrac{f(z)}{z - z_0}\,dz$.

1. **Poles:** $z^2 + 1 = 0$ gives z = ±i, and both lie inside |z| = 3. $f(z) = e^{zt}$ is entire.

![|z| = 3 with both poles ±i inside](fig/practice-complex-integration-P8-sketch.svg)

2. **Partial fractions:**
$$\frac{1}{z^2 + 1} = \frac{1}{2i}\left[\frac{1}{z - i} - \frac{1}{z + i}\right]$$

3. **Apply the formula to each term:**
$$\frac{1}{2\pi i}\oint_C\frac{e^{zt}}{z^2 + 1}\,dz = \frac{1}{2i}\left[f(i) - f(-i)\right] = \frac{e^{it} - e^{-it}}{2i} = \sin t$$

4. **Check:** numerical contour integration at t = 1.3 gives 0.96356 = sin 1.3 ✓.`,
        answer: String.raw`1/(z² + 1) = (1/2i)[1/(z − i) − 1/(z + i)], both ±i inside |z| = 3 ⇒ (1/2πi)∮ = (e^{it} − e^{−it})/(2i) = sin t.` } ] },
    { id: "practice-complex-integration-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P9", label: "", marks: "", topic: "complex-integration",
        sub: "∮ cos πz/(z² − 1) dz around the rectangles ±2 ± i (= 0) and ±i, 2 ± i (= −πi)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Cauchy Integral theorem", Problem 03`,
        text: String.raw`Evaluate $\displaystyle\oint_C\frac{\cos\pi z}{z^2 - 1}\,dz$ around a rectangle with vertices at (i) $2 \pm i$, $-2 \pm i$; (ii) $\pm i$, $2 \pm i$.`,
        solution: String.raw`1. **Split:**
$$\frac{1}{z^2 - 1} = \frac12\left[\frac{1}{z - 1} - \frac{1}{z + 1}\right]$$
   Let $f(z) = \cos\pi z$, which is entire.

![Rectangle (i) contains both poles ±1; rectangle (ii), 0 ≤ x ≤ 2, contains only z = 1](fig/practice-complex-integration-P9-sketch.svg)

2. **(i)** Both z = 1 and z = −1 are inside:
$$\oint = \frac12\left[2\pi i f(1) - 2\pi i f(-1)\right] = \pi i(\cos\pi - \cos(-\pi)) = 0$$

3. **(ii)** The rectangle is 0 ≤ x ≤ 2, −1 ≤ y ≤ 1. z = 1 is **inside** (the notes say "on", meaning within); z = −1 is outside, so $\cos\pi z/(z + 1)$ is analytic inside and its integral is 0 by Cauchy's theorem:
$$\oint = \frac12\left[2\pi i\cos\pi - 0\right] = -\pi i$$

4. **Check:** numerical integration around the two rectangles gives 0 and −3.14159i ✓.`,
        answer: String.raw`(i) both ±1 inside: πi[cos π − cos(−π)] = 0; (ii) only z = 1 inside: (1/2)(2πi cos π) = −πi.` } ] },
    { id: "practice-complex-integration-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P10", label: "", marks: "", topic: "complex-integration",
        sub: "∮ sin z/(z(z² + 1)) dz on |z| = 2, |z| = 1/2 and |z − 2| = 1 (all zero; z = 0 is removable)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Cauchy Integral theorem", Home Work 1`,
        text: String.raw`Evaluate $\displaystyle\oint_C\frac{\sin z}{z(z^2 + 1)}\,dz$ on (i) C: |z| = 2; (ii) C: |z| = 1/2; (iii) C: |z − 2| = 1.`,
        solution: String.raw`1. **Singular points.** At z = 0, $\sin z/z \to 1$, so z = 0 is a **removable** singularity: the integrand is analytic there once given the value 1. The genuine poles are z = ±i.

![Each circle with ±i marked (filled when inside) and the removable point 0](fig/practice-complex-integration-P10-sketch.svg)

2. **(i) |z| = 2:** both ±i are inside. Write $g(z) = \dfrac{\sin z}{z}$ (analytic) and
$$\frac{1}{z^2 + 1} = \frac{1}{2i}\left[\frac{1}{z - i} - \frac{1}{z + i}\right]$$
   Then
$$\oint = \frac{2\pi i}{2i}\left[g(i) - g(-i)\right] = \pi\left[\frac{\sin i}{i} - \frac{\sin(-i)}{-i}\right] = 0$$
   g is even, so the two contributions cancel.

3. **(ii) |z| = 1/2:** ±i are outside, and the only point inside is the removable 0. The integrand is analytic inside and on C, so the integral is **0** by Cauchy's theorem.

4. **(iii) |z − 2| = 1:** no singular point inside, so the integral is **0**.

5. **Check:** numerical contour integrals are below 10⁻¹⁵ in all three cases ✓.`,
        answer: String.raw`z = 0 is removable (sin z/z → 1); poles ±i. (i) πi·[g(i) − g(−i)]/i with g = sin z/z even ⇒ 0; (ii) analytic inside |z| = 1/2 ⇒ 0; (iii) nothing inside ⇒ 0.` } ] },
    { id: "practice-complex-integration-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P11", label: "", marks: "", topic: "complex-integration",
        sub: "Cauchy's formula and its derivative form: e^z/(z² + 1) on |z| = 2; (z − 1)/((z + 1)²(z − 2)) on |z − i| = 2; e^{zt}/(z + 1)⁴ on |z| = 2", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Cauchy Integral theorem", Home Work 2, 4 and 6`,
        text: String.raw`Evaluate (a) $\displaystyle\oint_C\frac{e^z}{z^2 + 1}\,dz$ over |z| = 2; (b) $\displaystyle\oint_C\frac{z - 1}{(z + 1)^2(z - 2)}\,dz$ where C is |z − i| = 2; (c) $\displaystyle\oint_C\frac{e^{zt}}{(z + 1)^4}\,dz$ on |z| = 2.`,
        solution: String.raw`**Derivative form:**
$$f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z - z_0)^{n+1}}\,dz$$

![Three contours: (a) ±i inside |z| = 2; (b) the double pole −1 inside |z − i| = 2 and 2 outside; (c) the fourth-order pole −1 inside |z| = 2](fig/practice-complex-integration-P11-sketch.svg)

1. **(a)** Both ±i are inside. As in P8,
$$\oint = 2\pi i\cdot\frac{e^i - e^{-i}}{2i} = 2\pi i\sin 1$$
   The notes' answer "2πi sin i" should read **2πi sin 1**: the real number 1, not i. Numerically, 5.2871i ✓.

2. **(b) Locate the singular points.** $|-1 - i| = \sqrt2 < 2$, so −1 is inside; $|2 - i| = \sqrt5 > 2$, so 2 is outside. Take $f(z) = \dfrac{z - 1}{z - 2}$, analytic inside C, with n = 1:
$$\oint = 2\pi i\,f'(-1) = 2\pi i\left[\frac{(z - 2) - (z - 1)}{(z - 2)^2}\right]_{z=-1} = 2\pi i\cdot\frac{-1}{9} = -\frac{2\pi i}{9}$$
   This matches the notes ✓.

3. **(c)** $f(z) = e^{zt}$ with $z_0 = -1$ inside and n = 3, and $f'''(z) = t^3e^{zt}$:
$$\oint = \frac{2\pi i}{3!}f'''(-1) = \frac{\pi i}{3}\,t^3e^{-t}$$
   The notes give $\pi ie^{-t}/3$, which has lost the factor $t^3$ from differentiating $e^{zt}$ three times. At t = 0.7 the numerical value 0.17837i equals $\pi i(0.343)e^{-0.7}/3$ ✓.`,
        answer: String.raw`(a) 2πi sin 1 (not sin i); (b) −1 inside, 2 outside: 2πi·d/dz[(z − 1)/(z − 2)] at −1 = −2πi/9; (c) (2πi/3!)·t³e^{−t} = πi t³e^{−t}/3.` } ] },
    { id: "practice-complex-integration-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P12", label: "", marks: "", topic: "complex-integration",
        sub: "Statement and proof of Cauchy's integral formula f(z₀) = (1/2πi)∮ f(z)/(z − z₀) dz", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Cauchy Integral theorem": Cauchy integral formula, theorem and proof`,
        text: String.raw`State and prove Cauchy's integral formula. State the formula for derivatives.`,
        solution: String.raw`**Theorem.** Let f be analytic everywhere within and on a simple closed contour C, taken in the positive sense. If $z_0$ is any point interior to C, then
$$f(z_0) = \frac{1}{2\pi i}\oint_C\frac{f(z)}{z - z_0}\,dz$$

![Contour C, the interior point z₀ and the small circle C₀ of radius ρ about it](fig/practice-complex-integration-P12-sketch.svg)

1. **Continuity at z₀.** f is analytic, so it is continuous at $z_0$: for every ε > 0 there is δ > 0 with $|f(z) - f(z_0)| < \varepsilon$ whenever $|z - z_0| < \delta$.

2. **Deform the contour.** Choose ρ < δ so small that the positively oriented circle $C_0: |z - z_0| = \rho$ lies inside C. The function $f(z)/(z - z_0)$ is analytic between C and $C_0$. By Cauchy's theorem for multiply connected regions,
$$\oint_C\frac{f(z)}{z - z_0}\,dz = \oint_{C_0}\frac{f(z)}{z - z_0}\,dz$$

3. **Subtract the constant f(z₀).** On $C_0$, $z = z_0 + \rho e^{i\theta}$, so $\oint_{C_0}\dfrac{dz}{z - z_0} = \displaystyle\int_0^{2\pi}i\,d\theta = 2\pi i$. Therefore
$$\oint_C\frac{f(z)}{z - z_0}\,dz - 2\pi i\,f(z_0) = \oint_{C_0}\frac{f(z) - f(z_0)}{z - z_0}\,dz$$

4. **Estimate** with the ML inequality. On $C_0$ the integrand is less than ε/ρ in modulus, and the length is 2πρ:
$$\left|\oint_C\frac{f(z)}{z - z_0}\,dz - 2\pi if(z_0)\right| < \frac\varepsilon\rho\cdot2\pi\rho = 2\pi\varepsilon$$

5. **Conclude.** The left side is a non-negative constant smaller than every 2πε, so it is 0. Hence $f(z_0) = \dfrac{1}{2\pi i}\oint_C\dfrac{f(z)}{z - z_0}\,dz$. ∎

6. **Derivatives.** Under the same hypotheses f has derivatives of all orders at $z_0$, and
$$f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z - z_0)^{n+1}}\,dz, \qquad n = 0, 1, 2, \dots$$`,
        answer: String.raw`f(z₀) = (1/2πi)∮ f/(z − z₀) dz. Proof: deform C to C₀: |z − z₀| = ρ; ∮_{C₀} dz/(z − z₀) = 2πi; |∮ − 2πi f(z₀)| = |∮_{C₀} (f − f(z₀))/(z − z₀) dz| < (ε/ρ)(2πρ) = 2πε → 0. Derivatives: f⁽ⁿ⁾(z₀) = (n!/2πi)∮ f/(z − z₀)^{n+1} dz.` } ] },
    { id: "practice-complex-integration-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P13", label: "", marks: "", topic: "complex-integration",
        sub: "Liouville's theorem: a bounded entire function is constant (proof with a large circle |z| = R)", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Liouville's Theorem", statement and proof`,
        text: String.raw`State and prove Liouville's theorem.`,
        solution: String.raw`**Statement.** If f(z) is analytic for all z in the finite complex plane (entire) and is bounded, then f is constant throughout the plane.

![Large circle C: |z| = R enclosing two arbitrary points a and b](fig/practice-complex-integration-P13-sketch.svg)

1. **Set-up.** Let a and b be any two points. Let C be the circle |z| = R, with R larger than |a| and |b|. Let M be a bound: |f(z)| ≤ M for all z.

2. **Cauchy's formula at both points:**
$$f(b) - f(a) = \frac{1}{2\pi i}\oint_C\left[\frac{1}{z - b} - \frac{1}{z - a}\right]f(z)\,dz = \frac{b - a}{2\pi i}\oint_C\frac{f(z)}{(z - a)(z - b)}\,dz$$

3. **Estimate** on |z| = R, where $|z - a| \ge R - |a|$ and $|z - b| \ge R - |b|$, with length 2πR:
$$|f(b) - f(a)| \le \frac{|b - a|}{2\pi}\cdot\frac{M}{(R - |a|)(R - |b|)}\cdot2\pi R = \frac{|b - a|\,MR}{(R - |a|)(R - |b|)}$$

4. **Let R → ∞.** The right side behaves like $|b - a|M/R \to 0$, so f(b) = f(a). Since a and b are arbitrary, f is constant. ∎

5. **Typical uses:**
   - sin z is entire and not constant, so it is unbounded in the plane.
   - Fundamental theorem of algebra: if a polynomial P of degree ≥ 1 had no zero, 1/P would be entire and bounded, hence constant, which is a contradiction.`,
        answer: String.raw`Entire + bounded ⇒ constant. f(b) − f(a) = ((b − a)/2πi)∮ f/((z − a)(z − b)) dz on |z| = R ⇒ |f(b) − f(a)| ≤ |b − a|MR/((R − |a|)(R − |b|)) → 0 as R → ∞ ⇒ f(b) = f(a) for all a, b.` } ] },
    { id: "practice-complex-integration-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P14", label: "", marks: "", topic: "complex-integration",
        sub: "Integrals by antiderivatives: ∫ e^{πz} dz from i to i/2, ∫ cos(z/2) dz from 0 to π + 2i, ∫ (z − 2)³ dz from 1 to 3", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 43, Exercise 2 (Ans. (a) (1 + i)/π; (b) e + 1/e; (c) 0)`,
        text: String.raw`By finding an antiderivative, evaluate each of these integrals, where the path is any contour between the indicated limits of integration:
(a) $\displaystyle\int_i^{i/2}e^{\pi z}\,dz$; (b) $\displaystyle\int_0^{\pi+2i}\cos\left(\frac z2\right)dz$; (c) $\displaystyle\int_1^3(z - 2)^3\,dz$.`,
        solution: String.raw`**Principle.** If f is continuous on a domain D and has an antiderivative F there (F′ = f), then $\int_C f\,dz = F(z_2) - F(z_1)$ for every contour in D from $z_1$ to $z_2$. All three integrands are entire, so any path will do.

![Any path (solid) between the limits gives the same value as the straight one (dashed)](fig/practice-complex-integration-P14-sketch.svg)

1. **(a)** With $F = e^{\pi z}/\pi$:
$$\int_i^{i/2}e^{\pi z}\,dz = \frac{e^{\pi i/2} - e^{\pi i}}{\pi} = \frac{i - (-1)}{\pi} = \frac{1 + i}{\pi}$$

2. **(b)** With $F = 2\sin(z/2)$:
$$\int_0^{\pi+2i}\cos\frac z2\,dz = 2\sin\left(\frac\pi2 + i\right) - 0 = 2\cos i = 2\cosh 1 = e + \frac1e$$

3. **(c)** With $F = (z - 2)^4/4$:
$$\int_1^3(z - 2)^3\,dz = \frac{1^4 - (-1)^4}{4} = 0$$

4. **Check:** sympy gives (1 + i)/π, 2 cosh 1 = 3.0862 = e + 1/e, and 0 ✓.`,
        answer: String.raw`(a) [e^{πz}/π] from i to i/2 = (i + 1)/π; (b) [2 sin(z/2)] = 2 sin(π/2 + i) = 2 cosh 1 = e + 1/e; (c) [(z − 2)⁴/4]₁³ = 0.` } ] },
    { id: "practice-complex-integration-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P15", label: "", marks: "", topic: "complex-integration",
        sub: "Five integrals around the square x = ±2, y = ±2 by Cauchy's integral formula", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 48, Exercise 1 (Ans. (a) 2π; (b) πi/4; (c) −πi/2; (d) 0; (e) iπ sec²(x₀/2))`,
        text: String.raw`Let C denote the positively oriented boundary of the square whose sides lie along the lines x = ±2 and y = ±2. Evaluate:
(a) $\displaystyle\oint_C\frac{e^{-z}\,dz}{z - (\pi i/2)}$; (b) $\displaystyle\oint_C\frac{\cos z}{z(z^2 + 8)}\,dz$; (c) $\displaystyle\oint_C\frac{z\,dz}{2z + 1}$; (d) $\displaystyle\oint_C\frac{\cosh z}{z^4}\,dz$; (e) $\displaystyle\oint_C\frac{\tan(z/2)}{(z - x_0)^2}\,dz$ $(-2 < x_0 < 2)$.`,
        solution: String.raw`![The square with every singular point: filled ones (πi/2, 0, −1/2, x₀) are inside; ±2√2 i and ±π (poles of tan(z/2)) are outside](fig/practice-complex-integration-P15-sketch.svg)

1. **(a)** $z_0 = \pi i/2 \approx 1.57i$ is inside, with $f = e^{-z}$:
$$\oint = 2\pi i\,e^{-\pi i/2} = 2\pi i(-i) = 2\pi$$

2. **(b)** The zeros of $z^2 + 8$ are $\pm2\sqrt2\,i$; $2\sqrt2 \approx 2.83 > 2$, so they are outside. Only z = 0 is inside, with $f = \cos z/(z^2 + 8)$:
$$\oint = 2\pi i\cdot\frac18 = \frac{\pi i}{4}$$

3. **(c)** Write $\dfrac{z}{2z + 1} = \dfrac{z/2}{z + 1/2}$; $z_0 = -1/2$ is inside:
$$\oint = 2\pi i\left(-\frac14\right) = -\frac{\pi i}{2}$$

4. **(d)** Derivative form with n = 3, $f = \cosh z$:
$$\oint = \frac{2\pi i}{3!}f'''(0) = \frac{\pi i}{3}\sinh 0 = 0$$

5. **(e)** tan(z/2) is analytic inside C: its poles are at z = ±π, ±3π, …, and π > 2. With n = 1:
$$\oint = 2\pi i\cdot\frac{d}{dz}\tan\frac z2\Big|_{x_0} = 2\pi i\cdot\frac12\sec^2\frac{x_0}{2} = i\pi\sec^2\frac{x_0}{2}$$

6. **Check:** numerical integration around the square gives 6.2832, 0.7854i, −1.5708i, 0, and 3.4422i at x₀ = 0.6 ✓.`,
        answer: String.raw`(a) 2πi e^{−πi/2} = 2π; (b) only 0 inside (±2√2 i outside): 2πi/8 = πi/4; (c) z/(2z + 1) = (z/2)/(z + 1/2): −πi/2; (d) (2πi/3!) sinh 0 = 0; (e) 2πi·(1/2)sec²(x₀/2) = iπ sec²(x₀/2).` } ] },
    { id: "practice-complex-integration-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-complex-integration-P16", label: "", marks: "", topic: "complex-integration",
        sub: "Liouville application: if f is entire and Re f(z) ≤ u₀, then Re f is constant (use exp f)", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 50, Exercise 2`,
        text: String.raw`Suppose that f(z) is entire and that the harmonic function u(x, y) = Re[f(z)] has an upper bound $u_0$; that is, $u(x, y) \le u_0$ for all points (x, y) in the xy plane. Show that u(x, y) must be constant throughout the plane.
*Suggestion:* apply Liouville's theorem to the function $g(z) = \exp[f(z)]$.`,
        solution: String.raw`![Panel (a): f takes values in the half-plane Re w ≤ u₀; panel (b): g = e^{f} then lies in the disc |g| ≤ e^{u₀}](fig/practice-complex-integration-P16-sketch.svg)

1. **g is entire.** It is the composition of the entire functions f and exp.

2. **g is bounded.** With f = u + iv,
$$|g(z)| = |e^{u + iv}| = e^{u(x,y)} \le e^{u_0}$$
   for all z.

3. **Liouville.** g is entire and bounded, so g is constant. It is never zero, since $e^f \ne 0$.

4. **Back to f.** $g' = f'e^{f} = 0$ and $e^f \ne 0$, so f′ = 0 everywhere. Hence f is constant, and so is u = Re f. ∎

5. **Remark.** The same argument with $e^{-f}$, $e^{\mp if}$ shows that a bound from below on u, or a bound on v from either side, also forces f to be constant.`,
        answer: String.raw`g = e^{f} is entire and |g| = e^{u} ≤ e^{u₀} ⇒ bounded ⇒ constant (Liouville) ⇒ g′ = f′e^{f} = 0 ⇒ f′ = 0 ⇒ f, hence u, constant.` } ] }
  ]
});
