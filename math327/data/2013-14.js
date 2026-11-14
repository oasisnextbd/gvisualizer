QB.paper({
  year: "2013-14", date: "02/08/2015", marks: 280,
  rules: String.raw`L-2/T-2 (ME) B.Sc. Engineering Examinations 2013-2014, MATH 263 (Complex Variable, Fourier Series, Harmonic Function and Partial Differential Equations), 3 hours, 280 marks. Section A: four questions, answer any THREE. Section B: four questions, answer any THREE. Use separate scripts for each section; the figures in the margin indicate full marks. Only Section A (complex variable) is given here: Section B (formation of PDEs, Lagrange and complete integrals, higher-order PDEs, Fourier series and transforms, Laplace's equation, heat equation) is not part of MATH 327 and is omitted.`,
  questions: [
    { id: "2013-14-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q1a", label: "(a)", marks: "10",
          topic: "complex-algebra", sub: "The four fourth roots of −8 − 8√3 i in rectangular form, shown on |z| = 2",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q1b"],
          text: String.raw`Find all roots of $(-8 - 8\sqrt3 i)^{1/4}$ in rectangular coordinates and exhibit the distinct roots graphically.`,
          solution: String.raw`1. **Polar form.** $|-8 - 8\sqrt3i| = \sqrt{64 + 192} = 16$. The point is in the third quadrant with $\tan^{-1}(\sqrt3) = \pi/3$, so the principal argument is $-\pi + \pi/3 = -2\pi/3$:
$$-8 - 8\sqrt3i = 16\left[\cos\left(-\frac{2\pi}{3} + 2k\pi\right) + i\sin\left(-\frac{2\pi}{3} + 2k\pi\right)\right]$$

2. **De Moivre:**
$$z_k = 16^{1/4}\left[\cos\frac{-2\pi/3 + 2k\pi}{4} + i\sin\frac{-2\pi/3 + 2k\pi}{4}\right] = 2\,e^{i(-\pi/6 + k\pi/2)}, \qquad k = 0, 1, 2, 3$$

3. **The four roots:**

| k | argument | root |
|---|---|---|
| 0 | −30° | $2(\cos30° - i\sin30°) = \sqrt3 - i$ (principal root) |
| 1 | 60° | $2(\cos60° + i\sin60°) = 1 + \sqrt3i$ |
| 2 | 150° | $2(\cos150° + i\sin150°) = -\sqrt3 + i$ |
| 3 | 240° (−120°) | $2(\cos240° + i\sin240°) = -1 - \sqrt3i$ |

   Check: $(1 + \sqrt3i)^2 = -2 + 2\sqrt3i$ and $(-2 + 2\sqrt3i)^2 = 4 - 8\sqrt3i - 12 = -8 - 8\sqrt3i$ ✓.

4. **Graph.** The roots lie on the circle |z| = 2 and are spaced 90° apart: they are the vertices of a square.

![The four fourth roots of −8 − 8√3 i: vertices of a square inscribed in |z| = 2, starting at arg −π/6](fig/2013-14-Q1a-sketch.svg)

**Result:** $\sqrt3 - i$, $1 + \sqrt3i$, $-\sqrt3 + i$, $-1 - \sqrt3i$.`,
          answer: String.raw`−8 − 8√3i = 16e^{−2πi/3} ⇒ z_k = 2e^{i(−π/6 + kπ/2)}: √3 − i, 1 + √3i, −√3 + i, −1 − √3i (square inscribed in |z| = 2).` },
        { id: "2013-14-Q1b", label: "(b)", marks: "6",
          topic: "complex-algebra", sub: "Region |z|² + 3Re(z²) ≤ 4: between the branches of the hyperbola x² − y²/2 = 1",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Describe mathematically and graphically the region represented by $|z|^2 + 3\,\mathrm{Re}(z^2) \le 4$.`,
          solution: String.raw`1. **In Cartesian form,** with z = x + iy: $|z|^2 = x^2 + y^2$ and $z^2 = x^2 - y^2 + 2ixy$, so $\mathrm{Re}(z^2) = x^2 - y^2$:
$$x^2 + y^2 + 3(x^2 - y^2) \le 4 \;\Rightarrow\; 4x^2 - 2y^2 \le 4 \;\Rightarrow\; x^2 - \frac{y^2}{2} \le 1$$

2. **Boundary:** $x^2 - y^2/2 = 1$ is a **rectangular-type hyperbola** centred at the origin with transverse axis along the x-axis: vertices (±1, 0), a = 1, $b = \sqrt2$, asymptotes $y = \pm\sqrt2x$.

3. **Which side.** The origin gives 0 ≤ 1 (true), so the region is the part of the plane **between the two branches** (containing the origin and the whole y-axis), together with the hyperbola itself (≤ includes the boundary). It is a closed, unbounded, connected region.

![Shaded region x² − y²/2 ≤ 1 between the branches of the hyperbola with vertices ±1 and asymptotes y = ±√2x](fig/2013-14-Q1b-sketch.svg)

**Result:** $x^2 - y^2/2 \le 1$: the closed region between the branches of the hyperbola $x^2 - y^2/2 = 1$.`,
          answer: String.raw`|z|² + 3Re(z²) = 4x² − 2y² ≤ 4 ⇔ x² − y²/2 ≤ 1: closed region between the two branches of the hyperbola (vertices ±1, asymptotes y = ±√2x), containing the origin.` },
        { id: "2013-14-Q1c", label: "(c)", marks: "10⅔",
          topic: "analytic", sub: "f(z) = (z̄)²/z, f(0) = 0: continuous at 0, Cauchy–Riemann hold there, but not differentiable",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Test the continuity and differentiability of the following function at the points $z = 0$;

$$f(z) = \begin{cases}\dfrac{(\bar z)^2}{z}, & z \ne 0\\[4pt] 0, & z = 0\end{cases}$$`,
          solution: String.raw`1. **Continuity at 0.** For z ≠ 0, $|f(z)| = \dfrac{|\bar z|^2}{|z|} = \dfrac{|z|^2}{|z|} = |z| \to 0$ as z → 0. Hence $\lim_{z \to 0}f(z) = 0 = f(0)$: **f is continuous at z = 0**.

2. **Differentiability at 0.** The difference quotient is
$$\frac{f(z) - f(0)}{z - 0} = \frac{(\bar z)^2}{z^2}$$
   Along the path $z = re^{i\theta}$ (fixed θ, r → 0) this equals $e^{-4i\theta}$:
   - along the real axis (θ = 0): 1;
   - along the imaginary axis (θ = π/2): $e^{-2\pi i} = 1$;
   - along the line y = x (θ = π/4): $e^{-i\pi} = -1$.
   The limit depends on the direction, so it does not exist: **f is not differentiable at z = 0**.

3. **Cauchy–Riemann at 0 (a classic trap).** Write $f = (x - iy)^3/(x^2 + y^2)$:
$$u = \frac{x^3 - 3xy^2}{x^2 + y^2}, \qquad v = \frac{y^3 - 3x^2y}{x^2 + y^2}$$
   From the definition, at the origin:
$$u_x = \lim_{h\to0}\frac{u(h, 0)}{h} = 1, \quad u_y = \lim_{k\to0}\frac{u(0, k)}{k} = 0, \quad v_x = \lim_{h\to0}\frac{v(h, 0)}{h} = 0, \quad v_y = \lim_{k\to0}\frac{v(0, k)}{k} = 1$$
   So $u_x = v_y$ and $u_y = -v_x$: the **CR equations are satisfied at 0**, yet f is not differentiable. The CR equations are necessary but not sufficient; the partial derivatives are not continuous at the origin, so the sufficiency theorem does not apply.

**Result:** continuous at z = 0; not differentiable there (the quotient $(\bar z/z)^2 = e^{-4i\theta}$ depends on direction), although CR hold at the origin.`,
          answer: String.raw`|f(z)| = |z| → 0 ⇒ continuous at 0. [f(z) − f(0)]/z = (z̄/z)² = e^{−4iθ}: 1 along the axes, −1 along y = x ⇒ not differentiable at 0, even though u_x = v_y = 1, u_y = −v_x = 0 there.` },
        { id: "2013-14-Q1d", label: "(d)", marks: "20",
          topic: "analytic", sub: "u = x² − y² + x/(x² + y²) is harmonic; conjugate v and f(z) = z² + 1/z",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that $u(x, y) = x^2 - y^2 + \dfrac{x}{x^2 + y^2}$ is a harmonic function. Hence find $v(x, y)$ such that $f(z) = u(x, y) + iv(x, y)$ is an analytic function. Also express $f(z)$ in terms of z.`,
          solution: String.raw`**Domain:** $(x, y) \ne (0, 0)$.

1. **First derivatives:**
$$u_x = 2x + \frac{(x^2 + y^2) - 2x^2}{(x^2 + y^2)^2} = 2x + \frac{y^2 - x^2}{(x^2 + y^2)^2}, \qquad u_y = -2y - \frac{2xy}{(x^2 + y^2)^2}$$

2. **Second derivatives:**
$$u_{xx} = 2 + \frac{2x^3 - 6xy^2}{(x^2 + y^2)^3}, \qquad u_{yy} = -2 - \frac{2x^3 - 6xy^2}{(x^2 + y^2)^3}$$
   (For the second term: $\partial_y[-2xy(x^2 + y^2)^{-2}] = -2x(x^2 + y^2)^{-2} + 8xy^2(x^2 + y^2)^{-3} = \dfrac{-2x^3 + 6xy^2}{(x^2 + y^2)^3}$.)
$$u_{xx} + u_{yy} = 0$$
   so **u is harmonic** for z ≠ 0. (Equivalently, $x^2 - y^2 = \mathrm{Re}\,z^2$ and $x/(x^2 + y^2) = \mathrm{Re}(1/z)$ are both real parts of analytic functions.)

3. **Conjugate v from CR.** $v_y = u_x = 2x + \dfrac{y^2 - x^2}{(x^2 + y^2)^2}$. Integrate with respect to y, noting $\dfrac{\partial}{\partial y}\left(\dfrac{-y}{x^2 + y^2}\right) = \dfrac{y^2 - x^2}{(x^2 + y^2)^2}$:
$$v = 2xy - \frac{y}{x^2 + y^2} + \phi(x)$$
   Then $v_x = 2y + \dfrac{2xy}{(x^2 + y^2)^2} + \phi'(x)$, which must equal $-u_y = 2y + \dfrac{2xy}{(x^2 + y^2)^2}$. So φ′(x) = 0, φ = C:
$$v = 2xy - \frac{y}{x^2 + y^2} + C$$

4. **f in terms of z (Milne–Thomson).** $f'(z) = u_x - iu_y$ with x = z, y = 0:
$$f'(z) = 2z + \frac{-z^2}{z^4} = 2z - \frac{1}{z^2} \;\Rightarrow\; f(z) = z^2 + \frac1z + iC$$
   Check: $z^2 + 1/z = (x^2 - y^2 + 2ixy) + \dfrac{x - iy}{x^2 + y^2}$, whose real part is u and imaginary part is $2xy - y/(x^2 + y^2)$ ✓.

**Result:** $v = 2xy - \dfrac{y}{x^2 + y^2} + C$; $f(z) = z^2 + \dfrac1z + iC$ (analytic for z ≠ 0).`,
          answer: String.raw`u_xx + u_yy = 0 (u = Re z² + Re(1/z)); CR ⇒ v = 2xy − y/(x² + y²) + C; f′ = 2z − 1/z² ⇒ f(z) = z² + 1/z + iC.` }
      ] },
    { id: "2013-14-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q2a", label: "(a)", marks: "10",
          topic: "elementary-functions", sub: "Solve cosh z = −2 by equating real and imaginary parts",
          type: "numerical", syllabus: "in", repeats: ["2020-21-Q1b", "2016-17-Q2c"],
          text: String.raw`Solve $\cosh z = -2$ by equating the real and imaginary parts in the equation.`,
          solution: String.raw`1. **Expand** with z = x + iy:
$$\cosh z = \cosh x\cos y + i\sinh x\sin y = -2$$

2. **Equate parts:**
$$\cosh x\cos y = -2 \quad(1), \qquad \sinh x\sin y = 0 \quad(2)$$

3. **From (2):** sinh x = 0 (x = 0) or sin y = 0.
   - x = 0 turns (1) into $\cos y = -2$: impossible.
   - So $\sin y = 0$: $y = n\pi$, and $\cos y = (-1)^n$.

4. **From (1):** $(-1)^n\cosh x = -2$. Since cosh x ≥ 1 > 0, n must be odd, $y = (2k + 1)\pi$, and
$$\cosh x = 2 \;\Rightarrow\; x = \pm\cosh^{-1}2 = \pm\ln(2 + \sqrt3) = \pm1.3170$$

5. **Solutions:**
$$z = \pm\ln(2 + \sqrt3) + (2k + 1)\pi i, \qquad k = 0, \pm1, \pm2, \ldots$$
   Check: $\cosh(\ln(2 + \sqrt3) + i\pi) = -\cosh(\ln(2 + \sqrt3)) = -2$ ✓.

**Result:** $z = \pm\ln(2 + \sqrt3) + (2k + 1)\pi i$.`,
          answer: String.raw`cosh x cos y = −2, sinh x sin y = 0 ⇒ sin y = 0 with cos y = −1 ⇒ y = (2k + 1)π, cosh x = 2 ⇒ z = ±ln(2 + √3) + (2k + 1)πi.` },
        { id: "2013-14-Q2b", label: "(b)", marks: "10",
          topic: "elementary-functions", sub: "Log(−1 + i√3)² ≠ 2 Log(−1 + i√3)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that $\mathrm{Log}(-1 + i\sqrt3)^2 \ne 2\,\mathrm{Log}(-1 + i\sqrt3)$.`,
          solution: String.raw`**Principal logarithm:** $\mathrm{Log}\,z = \ln|z| + i\,\mathrm{Arg}\,z$, with $-\pi < \mathrm{Arg}\,z \le \pi$.

1. **Right side.** $|-1 + i\sqrt3| = 2$ and $\mathrm{Arg}(-1 + i\sqrt3) = \pi - \pi/3 = 2\pi/3$:
$$\mathrm{Log}(-1 + i\sqrt3) = \ln2 + \frac{2\pi i}{3} \;\Rightarrow\; 2\,\mathrm{Log}(-1 + i\sqrt3) = 2\ln2 + \frac{4\pi i}{3}$$

2. **Left side.** $(-1 + i\sqrt3)^2 = 1 - 2\sqrt3i - 3 = -2 - 2\sqrt3i$, with modulus 4 and principal argument $-\pi + \pi/3 = -2\pi/3$:
$$\mathrm{Log}(-1 + i\sqrt3)^2 = \ln4 - \frac{2\pi i}{3} = 2\ln2 - \frac{2\pi i}{3}$$

3. **Compare:** the real parts agree, but the imaginary parts are $-2\pi/3$ and $4\pi/3$, which differ by 2π. Hence
$$\mathrm{Log}(-1 + i\sqrt3)^2 \ne 2\,\mathrm{Log}(-1 + i\sqrt3)$$

4. **Reason.** $2\,\mathrm{Arg}\,z = 4\pi/3$ falls outside the principal range (−π, π], so it must be reduced by 2π. The identity $\log z^n = n\log z$ holds for the multivalued log (as sets of values), but not in general for the principal value Log.

**Result:** LHS = $2\ln2 - 2\pi i/3$, RHS = $2\ln2 + 4\pi i/3$; they differ by 2πi.`,
          answer: String.raw`Log(−1 + i√3) = ln 2 + 2πi/3 ⇒ 2Log = 2ln 2 + 4πi/3; (−1 + i√3)² = −2 − 2√3i ⇒ Log = 2ln 2 − 2πi/3. Different (by 2πi), since 4π/3 is outside (−π, π].` },
        { id: "2013-14-Q2c", label: "(c)", marks: "15⅔",
          topic: "mapping", sub: "Image of the rectangle 1, 4, 4 + 6i, 1 + 6i under w = (1 + i)z + (2 − i)",
          type: "sketch", syllabus: "in", repeats: ["2023-24-Q1c"],
          text: String.raw`Find the image of the rectangle with vertices 1, 4, 4 + 6i, 1 + 6i in the z-plane under the transformation $w = (1 + i)z + (2 - i)$. Sketch the graph of the rectangular region and its image.`,
          solution: String.raw`1. **Nature of the map.** $w = az + b$ with $a = 1 + i = \sqrt2e^{i\pi/4}$ and $b = 2 - i$ is a linear map: a **rotation by 45°**, a **magnification by √2** and a **translation by 2 − i**. It maps straight lines to straight lines and preserves angles and shapes, so the rectangle maps to a rectangle.

2. **Images of the vertices:**
$$w(1) = (1 + i) + 2 - i = 3$$
$$w(4) = 4 + 4i + 2 - i = 6 + 3i$$
$$w(4 + 6i) = (1 + i)(4 + 6i) + 2 - i = (-2 + 10i) + 2 - i = 9i$$
$$w(1 + 6i) = (1 + i)(1 + 6i) + 2 - i = (-5 + 7i) + 2 - i = -3 + 6i$$

3. **Image rectangle:** vertices 3, 6 + 3i, 9i, −3 + 6i. Side lengths: $|6 + 3i - 3| = 3\sqrt2$ and $|9i - (6 + 3i)| = 6\sqrt2$, i.e. the original 3 × 6 sides multiplied by √2. The area is multiplied by $|a|^2 = 2$ (18 → 36). The sides are rotated by 45°: the image of the bottom side has direction 3 + 3i.

4. **Interior.** Writing $w = u + iv$: $u = x - y + 2$ and $v = x + y - 1$, so $x = (u + v - 1)/2$ and $y = (v - u + 3)/2$. The region $1 \le x \le 4$, $0 \le y \le 6$ becomes
$$3 \le u + v \le 9, \qquad -3 \le v - u \le 9$$
   That is the interior of the image rectangle; check: w = 3 gives u + v = 3, v − u = −3, and w = 9i gives u + v = 9, v − u = 9 ✓.

![Rectangle 1, 4, 4 + 6i, 1 + 6i in the z-plane and its image 3, 6 + 3i, 9i, −3 + 6i in the w-plane](fig/2013-14-Q2c-sketch.svg)

**Result:** the image is the rectangle with vertices 3, 6 + 3i, 9i, −3 + 6i (rotated 45°, sides 3√2 and 6√2).`,
          answer: String.raw`Rotation 45°, scale √2, shift 2 − i: 1 → 3, 4 → 6 + 3i, 4 + 6i → 9i, 1 + 6i → −3 + 6i; image is a rectangle with sides 3√2 and 6√2 (area 36).` },
        { id: "2013-14-Q2d", label: "(d)", marks: "11",
          topic: "complex-integration", sub: "∫ f(z) dz for piecewise f (1 for y < 0, 4y for y > 0) along y = x³ from −1 − i to 1 + i",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate $\displaystyle\int_C f(z)\,dz$ where $f(z)$ is defined as $f(z) = \begin{cases}1, & y < 0\\ 4y, & y > 0\end{cases}$ and C is the arc from $z = -1 - i$ to $z = 1 + i$ along the curve $y = x^3$.`,
          solution: String.raw`**Parametrization:** $z = x + ix^3$, $-1 \le x \le 1$, so $dz = (1 + 3ix^2)\,dx$. The curve has y < 0 for x < 0 and y > 0 for x > 0.

1. **Part C₁ (−1 ≤ x ≤ 0, f = 1):**
$$\int_{C_1}1\,dz = z\Big|_{-1-i}^{0} = 0 - (-1 - i) = 1 + i$$

2. **Part C₂ (0 ≤ x ≤ 1, f = 4y = 4x³):**
$$\int_{C_2}4y\,dz = \int_0^14x^3(1 + 3ix^2)\,dx = \int_0^1(4x^3 + 12ix^5)\,dx = \left[x^4 + 2ix^6\right]_0^1 = 1 + 2i$$

3. **Total:**
$$\int_C f(z)\,dz = (1 + i) + (1 + 2i) = 2 + 3i$$

4. **Remark.** f is not analytic (4y is not a function of z alone), so the value depends on the path and the parametrization is essential. Numerical quadrature confirms 2 + 3i.

**Result:** $2 + 3i$.`,
          answer: String.raw`z = x + ix³, dz = (1 + 3ix²)dx: ∫_{C₁}dz = 1 + i; ∫₀¹4x³(1 + 3ix²)dx = 1 + 2i ⇒ total 2 + 3i.` }
      ] },
    { id: "2013-14-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q3a", label: "(a)", marks: "12",
          topic: "complex-integration", sub: "Cauchy integral formula for a double pole: ∮ dz/(z² + 4)² on |z − i| = 2",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Use Cauchy's integral formula to evaluate the integral $\displaystyle\oint_C\frac{dz}{(z^2 + 4)^2}$, where C is the circle $|z - i| = 2$, taken in the positive sense.`,
          solution: String.raw`1. **Singularities:** $(z^2 + 4)^2 = (z - 2i)^2(z + 2i)^2$, so there are double poles at $z = \pm2i$.
   - $|2i - i| = 1 < 2$: **2i is inside** C.
   - $|-2i - i| = 3 > 2$: −2i is outside.

2. **Cauchy integral formula for derivatives:** $\oint_C\dfrac{g(z)}{(z - z_0)^{n+1}}dz = \dfrac{2\pi i}{n!}g^{(n)}(z_0)$. Here n = 1, $z_0 = 2i$ and
$$g(z) = \frac{1}{(z + 2i)^2}$$
   g is analytic inside and on C.

3. **Derivative:** $g'(z) = \dfrac{-2}{(z + 2i)^3}$, so
$$g'(2i) = \frac{-2}{(4i)^3} = \frac{-2}{-64i} = \frac{1}{32i}$$

4. **Integral:**
$$\oint_C\frac{dz}{(z^2 + 4)^2} = 2\pi i\cdot\frac{1}{32i} = \frac{\pi}{16}$$
   Numerical integration around $z = i + 2e^{i\theta}$ gives 0.19635 = π/16 ✓.

**Result:** $\pi/16$.`,
          answer: String.raw`Only z = 2i (double pole) is inside |z − i| = 2; g = 1/(z + 2i)², g′(2i) = −2/(4i)³ = 1/(32i) ⇒ integral = 2πi/(32i) = π/16.` },
        { id: "2013-14-Q3b", label: "(b)", marks: "10⅔",
          topic: "series", sub: "Laurent series of (2z − 3)/((2z − 1)(z − 2)) about z = 1 in ½ < |z − 1| < 1",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find Laurent's series expansion of the function $f(z) = \dfrac{2z - 3}{(2z - 1)(z - 2)}$ about z = 1 where $\dfrac12 < |z - 1| < 1$ is the region of convergence.`,
          solution: String.raw`1. **Partial fractions:** $\dfrac{2z - 3}{(2z - 1)(z - 2)} = \dfrac{A}{2z - 1} + \dfrac{B}{z - 2}$. At z = ½: $A = \dfrac{1 - 3}{\frac12 - 2} = \dfrac43$. At z = 2: $B = \dfrac{4 - 3}{4 - 1} = \dfrac13$:
$$f(z) = \frac{4/3}{2z - 1} + \frac{1/3}{z - 2}$$

2. **Shift to t = z − 1** (expansion about z = 1, region ½ < |t| < 1): $2z - 1 = 1 + 2t$ and $z - 2 = t - 1$:
$$f = \frac{4/3}{1 + 2t} + \frac{1/3}{t - 1}$$
   The singularities are at t = −½ and t = 1, so the annulus ½ < |t| < 1 lies between them.

3. **First term, |2t| > 1** (expand in powers of 1/(2t)):
$$\frac{4/3}{2t\left(1 + \frac{1}{2t}\right)} = \frac{2}{3t}\sum_{n=0}^\infty\frac{(-1)^n}{(2t)^n} = \frac23\sum_{n=0}^\infty\frac{(-1)^n}{2^n(z - 1)^{n+1}}$$

4. **Second term, |t| < 1:**
$$\frac{1/3}{t - 1} = -\frac13\cdot\frac{1}{1 - t} = -\frac13\sum_{n=0}^\infty(z - 1)^n$$

5. **Laurent series:**
$$f(z) = \frac23\sum_{n=0}^\infty\frac{(-1)^n}{2^n(z - 1)^{n+1}} - \frac13\sum_{n=0}^\infty(z - 1)^n$$
$$= \cdots + \frac{1}{6(z - 1)^3} - \frac{1}{3(z - 1)^2} + \frac{2}{3(z - 1)} - \frac13 - \frac13(z - 1) - \frac13(z - 1)^2 - \cdots$$
   Numerical check at $z = 1 + 0.7e^{0.4i}$: the truncated series and f agree to 15 digits ✓.

**Result:** as above, valid for ½ < |z − 1| < 1.`,
          answer: String.raw`f = (4/3)/(2z − 1) + (1/3)/(z − 2); with t = z − 1: (4/3)/(1 + 2t) = (2/3)Σ(−1)ⁿ/(2ⁿt^{n+1}) (|t| > ½) and (1/3)/(t − 1) = −(1/3)Σtⁿ (|t| < 1): f = … − 1/(3t²) + 2/(3t) − 1/3 − t/3 − …` },
        { id: "2013-14-Q3ci", label: "(c)(i)", marks: "12",
          topic: "residues", sub: "∮ dz/(z³(z + 4)) on |z| = 2 by the residue theorem",
          type: "numerical", syllabus: "in", repeats: ["2021-22-Q3c"],
          text: String.raw`Evaluate the following integrals by Cauchy's residue theorem:

(i) $\displaystyle\oint_C\frac{dz}{z^3(z + 4)}$ where $C: |z| = 2$

taken in positive sense.`,
          solution: String.raw`1. **Singularities:** z = 0, a pole of order 3, inside |z| = 2; z = −4, outside.

2. **Residue at the pole of order 3:**
$$\mathrm{Res}_{z=0} = \frac{1}{2!}\lim_{z\to0}\frac{d^2}{dz^2}\left[z^3\cdot\frac{1}{z^3(z + 4)}\right] = \frac12\frac{d^2}{dz^2}\frac{1}{z + 4}\Big|_0 = \frac12\cdot\frac{2}{(z + 4)^3}\Big|_0 = \frac{1}{64}$$
   (Check by series: $\frac{1}{z + 4} = \frac14(1 - \frac z4 + \frac{z^2}{16} - \cdots)$, so the coefficient of $z^2$, which gives $z^{-1}$ after dividing by $z^3$, is 1/64 ✓.)

3. **Residue theorem:**
$$\oint_C\frac{dz}{z^3(z + 4)} = 2\pi i\cdot\frac{1}{64} = \frac{\pi i}{32}$$

**Result:** $\pi i/32$.`,
          answer: String.raw`Only the triple pole z = 0 is inside; Res = ½ d²/dz²[1/(z + 4)] at 0 = 1/64 ⇒ integral = 2πi/64 = πi/32.` },
        { id: "2013-14-Q3cii", label: "(c)(ii)", marks: "12",
          topic: "residues", sub: "∮ (1 + z²)/((z − 1)²(z + 2i)) dz on |z| = 3 by the residue theorem",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(ii) $\displaystyle\oint_C\frac{1 + z^2}{(z - 1)^2(z + 2i)}dz$ where $C: |z| = 3$

taken in positive sense.`,
          solution: String.raw`1. **Singularities:** z = 1 (double pole) and z = −2i (simple pole). Both lie inside |z| = 3 (|1| = 1, |−2i| = 2).

2. **Residue at the simple pole z = −2i:**
$$\mathrm{Res}_{z=-2i} = \frac{1 + z^2}{(z - 1)^2}\Big|_{z=-2i} = \frac{1 - 4}{(-1 - 2i)^2} = \frac{-3}{-3 + 4i} = \frac{-3(-3 - 4i)}{25} = \frac{9 + 12i}{25}$$

3. **Residue at the double pole z = 1:**
$$\mathrm{Res}_{z=1} = \frac{d}{dz}\left[\frac{1 + z^2}{z + 2i}\right]_{z=1} = \frac{2z(z + 2i) - (1 + z^2)}{(z + 2i)^2}\Big|_{z=1} = \frac{2(1 + 2i) - 2}{(1 + 2i)^2} = \frac{4i}{-3 + 4i}$$
$$= \frac{4i(-3 - 4i)}{25} = \frac{16 - 12i}{25}$$

4. **Sum and integral:**
$$\sum\mathrm{Res} = \frac{9 + 12i + 16 - 12i}{25} = 1, \qquad \oint_C = 2\pi i(1) = 2\pi i$$
   Check: for large |z| the integrand behaves like $z^2/z^3 = 1/z$, so the sum of all finite residues must be 1 ✓.

**Result:** $2\pi i$.`,
          answer: String.raw`Both poles inside: Res(−2i) = (9 + 12i)/25, Res(1) = d/dz[(1 + z²)/(z + 2i)] at 1 = (16 − 12i)/25; sum = 1 ⇒ integral = 2πi.` }
      ] },
    { id: "2013-14-Q4", q: 4, section: "A",
      stem: String.raw`(a) Workout the following integrals using residues and contours:`,
      parts: [
        { id: "2013-14-Q4ai", label: "(a)(i)", marks: "26⅔",
          topic: "residues", sub: "∫₀^∞ x³ sin x/((x² + 1)(x² + 9)) dx by Jordan's lemma",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(i) $\displaystyle\int_0^\infty\frac{x^3\sin x}{(x^2 + 1)(x^2 + 9)}dx$`,
          solution: String.raw`**Method:** consider $f(z) = \dfrac{z^3e^{iz}}{(z^2 + 1)(z^2 + 9)}$ on the upper semicircular contour of radius R > 3. Then $\int_0^\infty = \frac12\mathrm{Im}\int_{-\infty}^{\infty}$, because $x^3\sin x/[(x^2 + 1)(x^2 + 9)]$ is even.

1. **Poles in the upper half-plane:** z = i and z = 3i (simple).

2. **Residues** (write $(z^2 + 1)(z^2 + 9) = (z - i)(z + i)(z - 3i)(z + 3i)$):
$$\mathrm{Res}_{z=i} = \frac{i^3e^{-1}}{(2i)(i^2 + 9)} = \frac{-ie^{-1}}{2i \times 8} = -\frac{e^{-1}}{16}$$
$$\mathrm{Res}_{z=3i} = \frac{(3i)^3e^{-3}}{((3i)^2 + 1)(6i)} = \frac{-27ie^{-3}}{(-8)(6i)} = \frac{27e^{-3}}{48} = \frac{9e^{-3}}{16}$$

3. **Semicircle → 0.** $z^3/[(z^2 + 1)(z^2 + 9)] \to 0$ like 1/|z| as |z| → ∞, so by **Jordan's lemma** (Brown & Churchill, 7th ed., Sec. 74) $\int_{C_R}f\,dz \to 0$ (the factor $e^{iz}$ decays in the upper half-plane).

4. **Real-line integral:**
$$\int_{-\infty}^{\infty}\frac{x^3e^{ix}}{(x^2 + 1)(x^2 + 9)}dx = 2\pi i\left(\frac{9e^{-3} - e^{-1}}{16}\right) = \frac{\pi i(9e^{-3} - e^{-1})}{8}$$
   Taking imaginary parts (the real part, with $\cos x$, is the integral of an odd function, i.e. zero):
$$\int_{-\infty}^{\infty}\frac{x^3\sin x}{(x^2 + 1)(x^2 + 9)}dx = \frac{\pi}{8}(9e^{-3} - e^{-1})$$

5. **Half range:**
$$\int_0^\infty\frac{x^3\sin x}{(x^2 + 1)(x^2 + 9)}dx = \frac{\pi}{16}(9e^{-3} - e^{-1}) = \frac{\pi}{16}(0.44808 - 0.36788) = 0.01575$$
   Oscillatory quadrature gives 0.015748 ✓.

**Result:** $\dfrac{\pi}{16}\left(9e^{-3} - e^{-1}\right) \approx 0.0157$.`,
          answer: String.raw`f = z³e^{iz}/[(z² + 1)(z² + 9)], upper half-plane poles i, 3i: Res = −e⁻¹/16, 9e⁻³/16; Jordan's lemma ⇒ ∫_{−∞}^{∞} = 2πi(9e⁻³ − e⁻¹)/16; Im and half ⇒ ∫₀^∞ = π(9e⁻³ − e⁻¹)/16 ≈ 0.0157.` },
        { id: "2013-14-Q4aii", label: "(a)(ii)", marks: "20",
          topic: "residues", sub: "∫₀^{2π} dθ/(3 − 2 cos θ + sin θ) = π by the unit-circle substitution",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(ii) $\displaystyle\int_0^{2\pi}\frac{d\theta}{3 - 2\cos\theta + \sin\theta}$.`,
          solution: String.raw`**Substitution:** $z = e^{i\theta}$, $\cos\theta = \dfrac{z + z^{-1}}{2}$, $\sin\theta = \dfrac{z - z^{-1}}{2i}$, $d\theta = \dfrac{dz}{iz}$, with C the unit circle.

1. **Transform the denominator.** Multiply $3 - 2\cos\theta + \sin\theta$ by 2iz:
$$2iz\left[3 - (z + z^{-1}) + \frac{z - z^{-1}}{2i}\right] = 6iz - 2iz^2 - 2i + z^2 - 1 = (1 - 2i)z^2 + 6iz - (1 + 2i)$$
   Hence
$$I = \oint_C\frac{1}{3 - 2\cos\theta + \sin\theta}\cdot\frac{dz}{iz} = \oint_C\frac{2\,dz}{(1 - 2i)z^2 + 6iz - (1 + 2i)}$$

2. **Poles:**
$$z = \frac{-6i \pm\sqrt{(6i)^2 + 4(1 - 2i)(1 + 2i)}}{2(1 - 2i)} = \frac{-6i \pm\sqrt{-36 + 20}}{2(1 - 2i)} = \frac{-6i \pm 4i}{2(1 - 2i)}$$
$$z_1 = \frac{-i}{1 - 2i} = \frac{2 - i}{5}, \qquad z_2 = \frac{-5i}{1 - 2i} = 2 - i$$
   $|z_1| = \sqrt5/5 = 0.447 < 1$ (inside); $|z_2| = \sqrt5 > 1$ (outside).

3. **Residue at $z_1$:**
$$\mathrm{Res}_{z_1} = \frac{2}{(1 - 2i)(z_1 - z_2)} = \frac{2}{(1 - 2i)\left(-\frac45(2 - i)\right)} = \frac{-10}{4(1 - 2i)(2 - i)} = \frac{-10}{4(-5i)} = \frac{1}{2i}$$

4. **Integral:**
$$I = 2\pi i\cdot\frac{1}{2i} = \pi$$

5. **Check:** the standard result $\int_0^{2\pi}\frac{d\theta}{a + b\cos\theta + c\sin\theta} = \frac{2\pi}{\sqrt{a^2 - b^2 - c^2}}$ (for $a^2 > b^2 + c^2$) gives $2\pi/\sqrt{9 - 4 - 1} = \pi$ ✓; quadrature gives 3.14159 ✓.

**Result:** $I = \pi$.`,
          answer: String.raw`z = e^{iθ}: I = ∮ 2dz/[(1 − 2i)z² + 6iz − (1 + 2i)]; poles (2 − i)/5 (inside) and 2 − i (outside); Res = 1/(2i) ⇒ I = π (= 2π/√(9 − 4 − 1)).` }
      ] }
  ]
});
