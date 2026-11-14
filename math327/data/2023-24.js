QB.paper({
  year: "2023-24", date: "09/09/2025", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engineering Examinations 2023-2024, MATH 327 (Multivariate Statistical Analysis and Complex Analysis), 3 hours, 210 marks. Section A (complex analysis): four questions, answer any THREE. Section B (contour integration and multivariate statistics): four questions, answer any THREE. Use separate scripts for each section; the figures in the margin indicate full marks. Attached: standard normal probability table (Chart 1, two pages).`,
  questions: [
    { id: "2023-24-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q1a", label: "(a)", marks: "12",
          topic: "complex-algebra", sub: "Loci from |z₁ − z₂| as distance: an ellipse and a straight line",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Based on the fact that $|z_1 - z_2|$ is the distance between two points $z_1$ and $z_2$, give a geometric argument that

i) $|z - 4i| + |z + 4i| = 10$ represents an ellipse whose foci are $(0, \pm4)$.

ii) $|z - 1| = |z + i|$ represents the line through the origin whose slope is −1.`,
          solution: String.raw`**Basis:** for $z = x + iy$, $|z - z_0|$ is the distance from the point z to the fixed point $z_0$.

1. **(i) Geometric argument.** $|z - 4i|$ is the distance from z to the point (0, 4), and $|z + 4i| = |z - (-4i)|$ is the distance to (0, −4). The equation says the **sum of the distances from z to two fixed points is the constant 10**. That is the definition of an ellipse with foci (0, ±4). It is a genuine ellipse because 10 exceeds the distance between the foci (8).

2. **(i) Its equation.** Major axis 2a = 10, so a = 5, along the y-axis (the foci lie on it). Focal distance c = 4, so $b^2 = a^2 - c^2 = 25 - 16 = 9$:
$$\frac{x^2}{9} + \frac{y^2}{25} = 1$$
   Algebraic check: $\sqrt{x^2 + (y - 4)^2} = 10 - \sqrt{x^2 + (y + 4)^2}$. Squaring gives $5\sqrt{x^2 + (y + 4)^2} = 25 + 4y$, and squaring again gives $25x^2 + 9y^2 = 225$, i.e. the equation above ✓.

3. **(ii) Geometric argument.** $|z - 1|$ is the distance from z to the point A = 1 = (1, 0); $|z + i| = |z - (-i)|$ is the distance to B = −i = (0, −1). The points equidistant from A and B form the **perpendicular bisector** of the segment AB.
   - Midpoint of AB: (½, −½).
   - Slope of AB: (−1 − 0)/(0 − 1) = 1, so the bisector has slope −1.
   - Line: y + ½ = −(x − ½), i.e. **y = −x**. It passes through the origin (indeed |0 − 1| = |0 + i| = 1) with slope −1.

4. **Check (ii) algebraically:** $(x - 1)^2 + y^2 = x^2 + (y + 1)^2$ gives −2x + 1 = 2y + 1, i.e. y = −x ✓.

![The ellipse x²/9 + y²/25 = 1 with foci ±4i, and the line y = −x as the perpendicular bisector of the points 1 and −i](fig/2023-24-Q1a-sketch.svg)`,
          answer: String.raw`(i) Sum of distances to the fixed points ±4i is 10 > 8 ⇒ ellipse with foci (0, ±4), a = 5, b = 3: x²/9 + y²/25 = 1. (ii) Points equidistant from 1 and −i lie on the perpendicular bisector of that segment: through (½, −½) with slope −1 ⇒ y = −x.` },
        { id: "2023-24-Q1b", label: "(b)", marks: "11",
          topic: "analytic", sub: "Where is f(z) = z Im(z) differentiable? Analyticity",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Determine where the function $f(z) = z\,\mathrm{Im}(z)$ is differentiable and discuss its analyticity.`,
          solution: String.raw`1. **Real and imaginary parts.** With z = x + iy, Im z = y, so
$$f(z) = (x + iy)y = xy + iy^2 \;\Rightarrow\; u = xy, \quad v = y^2$$

2. **Partial derivatives** (continuous everywhere):
$$u_x = y, \quad u_y = x, \quad v_x = 0, \quad v_y = 2y$$

3. **Cauchy–Riemann equations:**
$$u_x = v_y: \; y = 2y \Rightarrow y = 0, \qquad u_y = -v_x: \; x = 0$$
   Both hold only at x = 0, y = 0, i.e. **only at z = 0**.

4. **Differentiability.** The partials are continuous everywhere and the CR equations hold at z = 0. So f is differentiable at z = 0, with
$$f'(0) = u_x + iv_x = 0$$
   Directly: $\dfrac{f(\Delta z) - f(0)}{\Delta z} = \mathrm{Im}(\Delta z) \to 0$. At every other point the CR equations fail, so f is not differentiable there.

5. **Analyticity.** A function is analytic at a point only if it is differentiable throughout some neighbourhood of that point. f is differentiable only at the single point z = 0, never on a neighbourhood. **f is analytic nowhere** (not even at z = 0).`,
          answer: String.raw`u = xy, v = y²; CR: y = 2y and x = 0 ⇒ only at z = 0, where f′(0) = 0. Differentiable only at the origin, hence analytic nowhere.` },
        { id: "2023-24-Q1c", label: "(c)", marks: "12",
          topic: "mapping", sub: "Translation w = z + (1 − 2i): image of the rectangle 0 ≤ x ≤ 2, 0 ≤ y ≤ 1",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Using the transformation $w = z + (1 - 2i)$, determine the region R′ in the w plane into which the region R in the z plane bounded by the lines x = 0, y = 0, x = 2, y = 1 is mapped.`,
          solution: String.raw`1. **Transformation in components.** With w = u + iv and z = x + iy:
$$u + iv = (x + 1) + i(y - 2) \;\Rightarrow\; u = x + 1, \quad v = y - 2$$
   This is a **translation** by the vector (1, −2). It shifts every point 1 unit right and 2 units down, without rotation or change of size or shape.

2. **Images of the boundary lines:**

| z-plane line | w-plane line |
|---|---|
| x = 0 | u = 1 |
| x = 2 | u = 3 |
| y = 0 | v = −2 |
| y = 1 | v = −1 |

3. **Corners:** 0 → 1 − 2i, 2 → 3 − 2i, 2 + i → 3 − i, i → 1 − i.

4. **Region:** the inside of R (0 < x < 2, 0 < y < 1) maps to the inside of the image rectangle:
$$R' = \{w = u + iv : 1 \le u \le 3,\; -2 \le v \le -1\}$$
   It is a congruent 2 × 1 rectangle.

![The rectangle R in the z-plane and its translated image R′ in the w-plane](fig/2023-24-Q1c-sketch.svg)`,
          answer: String.raw`u = x + 1, v = y − 2 (translation by 1 − 2i): R′ is the rectangle bounded by u = 1, u = 3, v = −2, v = −1 (vertices 1 − 2i, 3 − 2i, 3 − i, 1 − i).` }
      ] },
    { id: "2023-24-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q2a", label: "(a)", marks: "12",
          topic: "complex-algebra", sub: "Fourth roots of −2√3 − 2i, plotted, with the principal root",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find all roots of $\left(-2\sqrt3 - 2i\right)^{1/4}$, locate them graphically and point out which is the principal root.`,
          solution: String.raw`1. **Polar form.** $w = -2\sqrt3 - 2i$: $|w| = \sqrt{12 + 4} = 4$. The point lies in the third quadrant with reference angle $\tan^{-1}(2/2\sqrt3) = 30°$, so the principal argument is
$$\mathrm{Arg}\,w = -(180° - 30°) = -150° = -\frac{5\pi}{6}$$
$$w = 4\left[\cos\left(-\frac{5\pi}{6} + 2k\pi\right) + i\sin\left(-\frac{5\pi}{6} + 2k\pi\right)\right]$$

2. **De Moivre's theorem:**
$$w^{1/4} = 4^{1/4}\left[\cos\frac{-5\pi/6 + 2k\pi}{4} + i\sin\frac{-5\pi/6 + 2k\pi}{4}\right], \qquad k = 0, 1, 2, 3$$
   with $4^{1/4} = \sqrt2$ and angles $-37.5° + 90°k$.

3. **The four roots:**

| k | angle | root |
|---|---|---|
| 0 | −37.5° | $\sqrt2(\cos 37.5° - i\sin 37.5°) = 1.1220 - 0.8609i$ |
| 1 | 52.5° | $0.8609 + 1.1220i$ |
| 2 | 142.5° | $-1.1220 + 0.8609i$ |
| 3 | 232.5° (= −127.5°) | $-0.8609 - 1.1220i$ |

   Check: $(1.1220 - 0.8609i)^4 = -3.4641 - 2i$ ✓.

4. **Graph.** The roots lie on the circle |z| = √2, equally spaced 90° apart: the vertices of a square.

![The four fourth roots on the circle |z| = √2, with the principal root at −37.5°](fig/2023-24-Q2a-sketch.svg)

5. **Principal root:** obtained from the principal argument (k = 0):
$$z_0 = \sqrt2\left[\cos\left(-\frac{5\pi}{24}\right) + i\sin\left(-\frac{5\pi}{24}\right)\right] = 1.122 - 0.861i$$`,
          answer: String.raw`|w| = 4, Arg w = −5π/6 ⇒ roots √2 cis(−5π/24 + kπ/2): 1.122 − 0.861i (principal, k = 0), 0.861 + 1.122i, −1.122 + 0.861i, −0.861 − 1.122i — vertices of a square on |z| = √2.` },
        { id: "2023-24-Q2b", label: "(b)", marks: "11",
          topic: "analytic", sub: "Polar Cauchy–Riemann equations; f = r⁻⁴cos 4θ − ir⁻⁴sin 4θ and f′(z) = −4/(r⁵e^{5iθ})",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Describe Cauchy-Riemann equations in polar form. Test the differentiability of the function $f(z) = \frac{1}{r^4}\cos4\theta + i\left(-\frac{1}{r^4}\sin4\theta\right)$, r > 0, 0 < θ < 2π in the indicated domain and hence show that $f'(z) = -\frac{4}{r^5e^{i5\theta}}$.`,
          solution: String.raw`1. **Polar CR equations.** With $z = re^{i\theta}$ and f = u(r, θ) + iv(r, θ), $x = r\cos\theta$, $y = r\sin\theta$. The chain rule gives $u_r = u_x\cos\theta + u_y\sin\theta$ and $u_\theta = -u_xr\sin\theta + u_yr\cos\theta$, and similarly for v. Substituting the Cartesian equations $u_x = v_y$, $u_y = -v_x$ gives
$$u_r = \frac1r v_\theta, \qquad v_r = -\frac1r u_\theta$$
   If these hold and the partials are continuous near a point, f is differentiable there, and
$$f'(z) = e^{-i\theta}(u_r + iv_r)$$

2. **The given function:** $u = r^{-4}\cos4\theta$, $v = -r^{-4}\sin4\theta$. Indeed $f = r^{-4}e^{-4i\theta} = z^{-4}$.

3. **Partial derivatives** (continuous for r > 0):
$$u_r = -4r^{-5}\cos4\theta, \qquad u_\theta = -4r^{-4}\sin4\theta$$
$$v_r = 4r^{-5}\sin4\theta, \qquad v_\theta = -4r^{-4}\cos4\theta$$

4. **Check the CR equations:**
$$\frac1r v_\theta = -4r^{-5}\cos4\theta = u_r\ ✓, \qquad -\frac1r u_\theta = 4r^{-5}\sin4\theta = v_r\ ✓$$
   They hold at every point of the domain r > 0, 0 < θ < 2π, and the partials are continuous there. So **f is differentiable (indeed analytic) throughout the domain**.

5. **Derivative:**
$$f'(z) = e^{-i\theta}(u_r + iv_r) = e^{-i\theta}\left(-4r^{-5}\cos4\theta + 4ir^{-5}\sin4\theta\right) = -4r^{-5}e^{-i\theta}e^{-4i\theta} = -\frac{4}{r^5e^{5i\theta}}\ \blacksquare$$
   This agrees with $\frac{d}{dz}z^{-4} = -4z^{-5}$.`,
          answer: String.raw`Polar CR: u_r = v_θ/r, v_r = −u_θ/r, f′ = e^{−iθ}(u_r + iv_r). Here u_r = −4r⁻⁵cos 4θ = v_θ/r and v_r = 4r⁻⁵sin 4θ = −u_θ/r with continuous partials ⇒ differentiable for r > 0; f′(z) = e^{−iθ}(−4r⁻⁵)(cos 4θ − i sin 4θ) = −4/(r⁵e^{5iθ}) (f = z⁻⁴).` },
        { id: "2023-24-Q2c", label: "(c)", marks: "12",
          topic: "analytic", sub: "u = eˣ cos y is harmonic; analytic f(z) with real part u (= eᶻ)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that $u(x, y) = e^x\cos y$ is harmonic. Find an analytic function f(z) in which u(x, y) is the real part. Also express f(z) in terms of z.`,
          solution: String.raw`1. **Harmonic test:**
$$u_x = e^x\cos y, \quad u_{xx} = e^x\cos y, \qquad u_y = -e^x\sin y, \quad u_{yy} = -e^x\cos y$$
$$\nabla^2u = u_{xx} + u_{yy} = 0$$
   u has continuous second partials, so **u is harmonic** everywhere.

2. **Harmonic conjugate v from the CR equations.** $v_y = u_x = e^x\cos y$, so
$$v = e^x\sin y + \phi(x)$$
   Then $v_x = e^x\sin y + \phi'(x)$ must equal $-u_y = e^x\sin y$, so φ′(x) = 0 and φ = c (a real constant).
$$v = e^x\sin y + c$$

3. **f(z):**
$$f = u + iv = e^x\cos y + ie^x\sin y + ic = e^x(\cos y + i\sin y) + ic = e^{x + iy} + ic$$
$$\boxed{f(z) = e^z + ic}$$

4. **Check by Milne–Thomson.** $f'(z) = u_x - iu_y$; put x = z, y = 0: $f'(z) = e^z\cos0 - i(-e^z\sin0) = e^z$, so $f = e^z + C$ ✓.`,
          answer: String.raw`u_xx + u_yy = eˣcos y − eˣcos y = 0 ⇒ harmonic; v = eˣ sin y + c ⇒ f = eˣ(cos y + i sin y) + ic = eᶻ + ic.` }
      ] },
    { id: "2023-24-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q3a", label: "(a)", marks: "18",
          topic: "complex-integration", sub: "∫ z̄ dz from 0 to 4 + 2i along a polyline and along z = t² + it",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate $\int_C\bar z\,dz$ along the curve C from z = 0 to z = 4 + 2i where C is given by

i) the line from z = 0 to z = 2i and then from z = 2i to z = 4 + 2i

ii) $z = t^2 + it$.`,
          solution: String.raw`**Method:** parametrise each piece, z = z(t), and evaluate $\int\bar z(t)z'(t)\,dt$.

![The two paths from 0 to 4 + 2i](fig/2023-24-Q3a-sketch.svg)

1. **(i) First segment, 0 → 2i:** z = iy, 0 ≤ y ≤ 2, so $\bar z = -iy$ and dz = i dy:
$$\int_0^2(-iy)(i\,dy) = \int_0^2y\,dy = 2$$

2. **(i) Second segment, 2i → 4 + 2i:** z = x + 2i, 0 ≤ x ≤ 4, so $\bar z = x - 2i$ and dz = dx:
$$\int_0^4(x - 2i)\,dx = 8 - 8i$$
   Total along (i): **10 − 8i**.

3. **(ii) Curve z = t² + it:** at t = 0, z = 0; at t = 2, z = 4 + 2i. So 0 ≤ t ≤ 2, $\bar z = t^2 - it$ and dz = (2t + i) dt.
$$\int_0^2(t^2 - it)(2t + i)\,dt = \int_0^2(2t^3 + t - it^2)\,dt = \left[\frac{t^4}{2} + \frac{t^2}{2} - \frac{it^3}{3}\right]_0^2 = 8 + 2 - \frac{8i}{3}$$
   Along (ii): $10 - \dfrac{8i}{3}$.

4. **Comment.** The values differ because $\bar z$ is **not analytic** (it fails the CR equations: u = x, v = −y gives $u_x = 1 \ne v_y = -1$). The integral therefore depends on the path. In both cases Re = 10 = ½|4 + 2i|², since $\int\bar z\,dz = \int(x\,dx + y\,dy) + i\int(x\,dy - y\,dx)$, and the real part is exact.`,
          answer: String.raw`(i) ∫₀²y dy + ∫₀⁴(x − 2i)dx = 2 + 8 − 8i = 10 − 8i; (ii) ∫₀²(t² − it)(2t + i)dt = 10 − 8i/3. Different values: z̄ is not analytic, so the integral is path-dependent.` },
        { id: "2023-24-Q3b", label: "(b)", marks: "17",
          topic: "complex-integration", sub: "Cauchy integral formula: ∮(4 − 3z)/(z(z − 1)(z − 2)) dz on |z| = 3/2",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`State Cauchy integral formula and use it to evaluate $\oint_C\frac{4 - 3z}{z(z - 1)(z - 2)}dz$, where C is the circle $|z| = \frac32$.`,
          solution: String.raw`1. **Cauchy's integral formula.** Let f be analytic inside and on a simple closed contour C, and let a be any point inside C. Then
$$f(a) = \frac{1}{2\pi i}\oint_C\frac{f(z)}{z - a}dz \qquad\left(\text{and } f^{(n)}(a) = \frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z - a)^{n+1}}dz\right)$$

2. **Singularities:** z = 0, 1, 2. On |z| = 3/2, the points 0 and 1 lie **inside** and z = 2 lies **outside**.

![Contour |z| = 3/2: the poles 0 and 1 inside, 2 outside](fig/2023-24-Q3b-sketch.svg)

3. **Separate the two interior points** with partial fractions in 1/(z(z − 1)):
$$\frac{1}{z(z - 1)} = \frac{1}{z - 1} - \frac1z \;\Rightarrow\; \oint_C\frac{4 - 3z}{z(z - 1)(z - 2)}dz = \oint_C\frac{g(z)}{z - 1}dz - \oint_C\frac{g(z)}{z}dz, \qquad g(z) = \frac{4 - 3z}{z - 2}$$
   g is analytic inside and on C (its only singularity, z = 2, is outside).

4. **Apply the formula to each:**
$$\oint_C\frac{g(z)}{z - 1}dz = 2\pi i\,g(1) = 2\pi i\frac{4 - 3}{1 - 2} = -2\pi i, \qquad \oint_C\frac{g(z)}{z}dz = 2\pi i\,g(0) = 2\pi i\frac{4}{-2} = -4\pi i$$

5. **Result:**
$$\oint_C\frac{4 - 3z}{z(z - 1)(z - 2)}dz = -2\pi i - (-4\pi i) = 2\pi i$$
   Check by residues: Res(0) = 4/((−1)(−2)) = 2 and Res(1) = 1/(1·(−1)) = −1, so 2πi(2 − 1) = 2πi ✓.`,
          answer: String.raw`Only z = 0 and z = 1 lie inside |z| = 3/2; with g = (4 − 3z)/(z − 2): ∮ = 2πi[g(1) − g(0)] = 2πi(−1 + 2) = 2πi.` }
      ] },
    { id: "2023-24-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q4a", label: "(a)", marks: "18",
          topic: "series", sub: "Laurent's theorem; 1/((z + 1)(z + 2)) in 0 < |z + 1| < 1",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Give the statement of Laurent's theorem. Express $f(z) = \frac{1}{(z + 1)(z + 2)}$ in a Laurent series valid in the region $0 < |z + 1| < 1$.`,
          solution: String.raw`1. **Laurent's theorem.** Let f be analytic in the annulus $R_1 < |z - a| < R_2$. Then at every point of the annulus
$$f(z) = \sum_{n=0}^\infty a_n(z - a)^n + \sum_{n=1}^\infty\frac{a_{-n}}{(z - a)^n}, \qquad a_n = \frac{1}{2\pi i}\oint_C\frac{f(z)}{(z - a)^{n+1}}dz\ \ (n = 0, \pm1, \pm2, \dots)$$
   where C is any simple closed curve in the annulus encircling a. The first sum is the **analytic (regular) part**; the second, in negative powers, is the **principal part**. The expansion is unique.

2. **Centre and variable.** The region $0 < |z + 1| < 1$ is a punctured disc about a = −1, reaching up to the other singularity z = −2. Put u = z + 1, so 0 < |u| < 1 and z + 2 = u + 1:
$$f = \frac{1}{u(1 + u)}$$

3. **Expand $1/(1 + u)$** as a geometric series (|u| < 1):
$$\frac{1}{1 + u} = 1 - u + u^2 - u^3 + \cdots = \sum_{n=0}^\infty(-1)^nu^n$$

4. **Divide by u:**
$$f(z) = \frac1u - 1 + u - u^2 + \cdots = \sum_{n=0}^\infty(-1)^n(z + 1)^{n-1}$$
$$\boxed{f(z) = \frac{1}{z + 1} - 1 + (z + 1) - (z + 1)^2 + (z + 1)^3 - \cdots}$$

5. **Remarks.** The principal part is the single term $1/(z + 1)$: z = −1 is a simple pole with residue 1. The series converges for 0 < |z + 1| < 1, the largest punctured disc about −1 that avoids the singularity at −2.`,
          answer: String.raw`Laurent: f = Σaₙ(z − a)ⁿ + Σa₋ₙ(z − a)⁻ⁿ in R₁ < |z − a| < R₂, aₙ = (1/2πi)∮f/(z − a)ⁿ⁺¹dz. With u = z + 1: f = 1/(u(1 + u)) = Σ(−1)ⁿ(z + 1)ⁿ⁻¹ = 1/(z + 1) − 1 + (z + 1) − (z + 1)² + ⋯ (0 < |z + 1| < 1).` },
        { id: "2023-24-Q4b", label: "(b)", marks: "17",
          topic: "residues", sub: "(1/2πi)∮ e^{zt}/(z²(z² + 2z + 2)) dz on |z| = 3 by the residue theorem",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate the integral $\frac{1}{2\pi i}\oint_C\frac{e^{zt}}{z^2(z^2 + 2z + 2)}dz$ by Cauchy residue theorem where C is the circle |z| = 3.`,
          solution: String.raw`**Residue theorem:** $\oint_Cf\,dz = 2\pi i\sum$(residues inside C), so the required value is the **sum of the residues** inside C.

1. **Singularities.** $z^2 = 0$ gives a double pole at z = 0. $z^2 + 2z + 2 = 0$ gives simple poles at $z = -1 \pm i$ (|−1 ± i| = √2 < 3). All three lie inside |z| = 3.

![Contour |z| = 3 enclosing the double pole at 0 and the simple poles −1 ± i](fig/2023-24-Q4b-sketch.svg)

2. **Residue at the double pole z = 0:**
$$\mathrm{Res}_{z=0} = \lim_{z \to 0}\frac{d}{dz}\left[\frac{e^{zt}}{z^2 + 2z + 2}\right] = \lim_{z \to 0}\frac{te^{zt}(z^2 + 2z + 2) - e^{zt}(2z + 2)}{(z^2 + 2z + 2)^2} = \frac{2t - 2}{4} = \frac{t - 1}{2}$$

3. **Residue at z = −1 + i** (simple pole; $z^2 + 2z + 2 = (z + 1 - i)(z + 1 + i)$):
$$\mathrm{Res} = \frac{e^{(-1+i)t}}{z^2(z + 1 + i)}\Big|_{z=-1+i} = \frac{e^{(-1+i)t}}{(-2i)(2i)} = \frac{e^{(-1+i)t}}{4}$$
   using $(-1 + i)^2 = -2i$.

4. **Residue at z = −1 − i:** $(-1 - i)^2 = 2i$ and $z + 1 - i = -2i$, so
$$\mathrm{Res} = \frac{e^{(-1-i)t}}{(2i)(-2i)} = \frac{e^{(-1-i)t}}{4}$$

5. **Sum:**
$$\frac{1}{2\pi i}\oint_C\frac{e^{zt}}{z^2(z^2 + 2z + 2)}dz = \frac{t - 1}{2} + \frac{e^{-t}(e^{it} + e^{-it})}{4} = \frac{t - 1}{2} + \frac12e^{-t}\cos t$$
   (This is the inverse Laplace transform of $1/[s^2(s^2 + 2s + 2)]$, which is why such integrals appear.)`,
          answer: String.raw`Poles inside |z| = 3: 0 (double), −1 ± i (simple). Residues: (t − 1)/2, e^{(−1+i)t}/4, e^{(−1−i)t}/4 ⇒ value = (t − 1)/2 + ½e^{−t}cos t.` }
      ] },
    { id: "2023-24-Q5", q: 5, section: "B",
      stem: String.raw`Explain contour integration. Evaluate the following integrals by contour integration:`,
      parts: [
        { id: "2023-24-Q5a", label: "(a)", marks: "17",
          topic: "residues", sub: "Contour integration; ∫₀²π (sin²θ − 2cos θ)/(2 + cos θ) dθ",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`$$\int_0^{2\pi}\frac{\sin^2\theta - 2\cos\theta}{2 + \cos\theta}d\theta$$`,
          solution: String.raw`**Contour integration** evaluates a real integral by converting it into $\oint_Cf(z)\,dz$ around a closed contour C in the complex plane and applying the residue theorem, $\oint_Cf\,dz = 2\pi i\sum\mathrm{Res}$ inside C. For $\int_0^{2\pi}R(\cos\theta, \sin\theta)\,d\theta$, put $z = e^{i\theta}$, so C is the unit circle |z| = 1, with
$$\cos\theta = \frac{z + z^{-1}}{2}, \qquad \sin\theta = \frac{z - z^{-1}}{2i}, \qquad d\theta = \frac{dz}{iz}$$

1. **Simplify the integrand.** With c = cos θ and $\sin^2\theta = 1 - c^2$:
$$\frac{1 - c^2 - 2c}{2 + c} = \frac{-(c^2 + 2c) + 1}{2 + c} = -c + \frac{1}{2 + c}$$
   since $c^2 + 2c = c(c + 2)$. Therefore
$$I = -\int_0^{2\pi}\cos\theta\,d\theta + \int_0^{2\pi}\frac{d\theta}{2 + \cos\theta} = 0 + J$$

2. **J by contour integration:**
$$J = \oint_{|z|=1}\frac{1}{2 + \frac{z + z^{-1}}{2}}\cdot\frac{dz}{iz} = \oint_{|z|=1}\frac{2\,dz}{i(z^2 + 4z + 1)}$$

3. **Poles:** $z^2 + 4z + 1 = 0$ gives $z = -2 \pm \sqrt3$. Here $z_1 = -2 + \sqrt3 = -0.268$ lies inside the unit circle and $z_2 = -2 - \sqrt3 = -3.732$ lies outside.

4. **Residue at $z_1$:**
$$\mathrm{Res}_{z_1} = \frac{2}{i(z_1 - z_2)} = \frac{2}{i(2\sqrt3)} = \frac{1}{i\sqrt3}$$

5. **Result:**
$$J = 2\pi i\cdot\frac{1}{i\sqrt3} = \frac{2\pi}{\sqrt3}, \qquad I = \frac{2\pi}{\sqrt3} \approx 3.628$$
   Numerical quadrature of the original integrand gives 3.6276 ✓. (The −cos θ term also gives 0 by contour integration: $\oint\frac{z + z^{-1}}{2}\frac{dz}{iz}$ has residue 0 at z = 0.)`,
          answer: String.raw`Integrand = −cos θ + 1/(2 + cos θ); with z = e^{iθ}: ∮2dz/[i(z² + 4z + 1)], pole −2 + √3 inside, residue 1/(i√3) ⇒ I = 2π/√3 ≈ 3.628.` },
        { id: "2023-24-Q5b", label: "(b)", marks: "18",
          topic: "residues", sub: "∫₋∞^∞ x²/(x⁶ + 1) dx by a semicircular contour",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`$$\int_{-\infty}^{\infty}\frac{x^2}{x^6 + 1}dx$$`,
          solution: String.raw`1. **Contour.** Take $f(z) = \dfrac{z^2}{z^6 + 1}$ and C = the segment [−R, R] plus the upper semicircle Γ: |z| = R, Im z ≥ 0, with R > 1. Then
$$\oint_Cf\,dz = \int_{-R}^Rf(x)\,dx + \int_\Gamma f(z)\,dz = 2\pi i\sum\mathrm{Res}\ (\text{upper half plane})$$

2. **Semicircle contribution vanishes:** on Γ, $|f| \le R^2/(R^6 - 1)$, so $\left|\int_\Gamma\right| \le \pi R\cdot R^2/(R^6 - 1) \to 0$ as R → ∞ (the degree of the denominator exceeds the numerator's by 4 ≥ 2).

3. **Poles:** $z^6 = -1 = e^{i\pi}$ gives $z_k = e^{i(\pi + 2k\pi)/6}$. The poles in the upper half plane are
$$z_0 = e^{i\pi/6}, \qquad z_1 = e^{i\pi/2} = i, \qquad z_2 = e^{5i\pi/6}$$
   They are simple poles.

4. **Residues:** for a simple pole of P/Q, Res = $P(z_k)/Q'(z_k) = z_k^2/(6z_k^5) = 1/(6z_k^3)$.
$$z_0^3 = e^{i\pi/2} = i, \qquad z_1^3 = i^3 = -i, \qquad z_2^3 = e^{5i\pi/2} = i$$
$$\sum\mathrm{Res} = \frac16\left(\frac1i - \frac1i + \frac1i\right) = \frac{1}{6i}$$

5. **Result** (R → ∞):
$$\int_{-\infty}^\infty\frac{x^2}{x^6 + 1}dx = 2\pi i\cdot\frac{1}{6i} = \frac\pi3 \approx 1.0472$$
   Checks: numerical quadrature gives 1.0472 ✓. The substitution u = x³ gives $\frac13\int du/(u^2 + 1) = \pi/3$ ✓.`,
          answer: String.raw`Upper-half-plane poles e^{iπ/6}, i, e^{5iπ/6}; Res = 1/(6z³) = 1/(6i), −1/(6i), 1/(6i); sum 1/(6i); semicircle → 0 ⇒ ∫ = 2πi/(6i) = π/3.` }
      ] },
    { id: "2023-24-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q6a", label: "(a)", marks: "5+15=20",
          topic: "multivariate-normal", sub: "Aspects and objectives of multivariate analysis; x̄, Sₙ and R for 5 observations on 3 variables",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Discuss the aspects of Multivariate Analysis along with the major objectives. The following are the 5 measurements on the variables $x_1$, $x_2$, and $x_3$.

| $x_1$ | 9 | 2 | 6 | 5 | 8 |
|---|---|---|---|---|---|
| $x_2$ | 12 | 8 | 6 | 4 | 10 |
| $x_3$ | 3 | 4 | 0 | 2 | 1 |

Find the array $\bar{\mathbf x}$, $\mathbf S_n$, and $\mathbf R$.`,
          solution: String.raw`### Aspects and objectives (5)
**Multivariate analysis** is the branch of statistics dealing with the **simultaneous** analysis of several random variables measured on the same units, and with their relationships (Lecture 1). Its key feature is that it studies the **joint variation** of the variables, i.e. their covariance structure, instead of each variable separately.

Major objectives (Johnson & Wichern):
1. **Data reduction or structural simplification:** represent the data as simply as possible without losing valuable information (e.g. principal components).
2. **Sorting and grouping:** form groups of similar objects or variables (classification, clustering).
3. **Investigation of dependence among variables:** are the variables independent, or how are they related (correlation, covariance)?
4. **Prediction:** predict one or more variables from others (multiple and multivariate regression).
5. **Hypothesis construction and testing:** test hypotheses about multivariate population parameters (Hotelling T², MANOVA).

### Descriptive statistics (15)
**Given:** n = 5 observations on p = 3 variables. **Notation (Lectures 1–2):** sample mean vector $\bar{\mathbf x}$; $\mathbf S_n$ with divisor n, $s_{ik} = \frac1n\sum_{j=1}^n(x_{ji} - \bar x_i)(x_{jk} - \bar x_k)$; $r_{ik} = s_{ik}/\sqrt{s_{ii}s_{kk}}$.

1. **Mean vector:**
$$\bar x_1 = \frac{9 + 2 + 6 + 5 + 8}{5} = 6, \quad \bar x_2 = \frac{12 + 8 + 6 + 4 + 10}{5} = 8, \quad \bar x_3 = \frac{3 + 4 + 0 + 2 + 1}{5} = 2$$
$$\bar{\mathbf x} = \begin{bmatrix}6\\8\\2\end{bmatrix}$$

2. **Deviations from the means:**

| j | $x_1 - 6$ | $x_2 - 8$ | $x_3 - 2$ |
|---|---|---|---|
| 1 | 3 | 4 | 1 |
| 2 | −4 | 0 | 2 |
| 3 | 0 | −2 | −2 |
| 4 | −1 | −4 | 0 |
| 5 | 2 | 2 | −1 |

3. **Variances and covariances** (divisor n = 5):
$$s_{11} = \frac{9 + 16 + 0 + 1 + 4}{5} = 6, \quad s_{22} = \frac{16 + 0 + 4 + 16 + 4}{5} = 8, \quad s_{33} = \frac{1 + 4 + 4 + 0 + 1}{5} = 2$$
$$s_{12} = \frac{12 + 0 + 0 + 4 + 4}{5} = 4, \quad s_{13} = \frac{3 - 8 + 0 + 0 - 2}{5} = -1.4, \quad s_{23} = \frac{4 + 0 + 4 + 0 - 2}{5} = 1.2$$
$$\mathbf S_n = \frac1n(\mathbf X - \mathbf 1\bar{\mathbf x}')'(\mathbf X - \mathbf 1\bar{\mathbf x}') = \begin{bmatrix}6 & 4 & -1.4\\4 & 8 & 1.2\\-1.4 & 1.2 & 2\end{bmatrix}$$

4. **Correlations:**
$$r_{12} = \frac{4}{\sqrt{6 \times 8}} = 0.577, \quad r_{13} = \frac{-1.4}{\sqrt{6 \times 2}} = -0.404, \quad r_{23} = \frac{1.2}{\sqrt{8 \times 2}} = 0.300$$
$$\mathbf R = \begin{bmatrix}1 & 0.577 & -0.404\\0.577 & 1 & 0.300\\-0.404 & 0.300 & 1\end{bmatrix}$$

5. **Interpretation.** $x_1$ and $x_2$ are moderately positively associated (0.58). $x_1$ and $x_3$ are moderately negatively associated (−0.40). $x_2$ and $x_3$ are weakly positively associated (0.30). (With divisor n − 1 the covariances would be 5/4 times larger, but R is unchanged.)`,
          answer: String.raw`Objectives: data reduction, sorting/grouping, dependence among variables, prediction, hypothesis testing. x̄ = (6, 8, 2)′; Sₙ = [[6, 4, −1.4], [4, 8, 1.2], [−1.4, 1.2, 2]]; R = [[1, 0.577, −0.404], [0.577, 1, 0.300], [−0.404, 0.300, 1]].` },
        { id: "2023-24-Q6b", label: "(b)", marks: "15",
          topic: "multivariate-normal", sub: "Joint pdf f = 4x₁x₂ on the unit square: P(exactly one > 0.9) and P(X₁ + X₂ > 1)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The bivariate random variables $(X_1, X_2)$ has the joint probability density function:

$$f(x_1, x_2) = 4x_1x_2, \quad 0 < x_1 < 1,\ 0 < x_2 < 1; \qquad = 0, \text{ Otherwise}$$

(i) Find the probability that exactly one of the variables is great than 0.9

(ii) Calculate $P(X_1 + X_2 > 1)$.`,
          solution: String.raw`**Check:** $\int_0^1\int_0^14x_1x_2\,dx_1dx_2 = 4\cdot\frac12\cdot\frac12 = 1$ ✓.

1. **(i) Event.** Exactly one variable exceeds 0.9:
$$P = P(X_1 > 0.9, X_2 \le 0.9) + P(X_1 \le 0.9, X_2 > 0.9)$$

2. **First term:**
$$\int_{0.9}^1\int_0^{0.9}4x_1x_2\,dx_2\,dx_1 = \int_{0.9}^14x_1\left[\frac{x_2^2}{2}\right]_0^{0.9}dx_1 = \int_{0.9}^11.62x_1\,dx_1 = 1.62\left[\frac{x_1^2}{2}\right]_{0.9}^1 = 0.81(0.19) = 0.1539$$
   By symmetry the second term is also 0.1539, so
$$P(\text{exactly one} > 0.9) = 0.3078$$
   Check: the pdf factorises as $(2x_1)(2x_2)$, so $X_1$ and $X_2$ are independent with $P(X_i > 0.9) = 1 - 0.81 = 0.19$. Then P = 2(0.19)(0.81) = 0.3078 ✓.

3. **(ii) $P(X_1 + X_2 > 1)$** = 1 − P(X₁ + X₂ ≤ 1). Over the triangle $0 < x_2 < 1 - x_1$:
$$P(X_1 + X_2 \le 1) = \int_0^1\int_0^{1-x_1}4x_1x_2\,dx_2\,dx_1 = \int_0^12x_1(1 - x_1)^2dx_1 = 2\left(\frac12 - \frac23 + \frac14\right) = \frac16$$
$$P(X_1 + X_2 > 1) = 1 - \frac16 = \frac56 \approx 0.833$$`,
          answer: String.raw`(i) 2∫₀.₉¹∫₀⁰·⁹4x₁x₂dx₂dx₁ = 2(0.1539) = 0.3078; (ii) 1 − ∫₀¹∫₀^{1−x₁}4x₁x₂ = 1 − 1/6 = 5/6.` }
      ] },
    { id: "2023-24-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q7a", label: "(a)", marks: "20",
          topic: "multivariate-normal", sub: "Bivariate normal and independence; P(106 < Y < 124) and given X = 3.2",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Define bivariate normal distribution, Stochastically independent random variables. Let X and Y have a bivariate normal distribution with $\mu_X = 2.8$, $\mu_Y = 110$, $\sigma_X^2 = 0.16$, $\sigma_Y^2 = 100$, and ρ = 0.6, compute

(i) p(106 < Y < 124)

(ii) p(106 < Y < 124|X = 3.2)

(Chart 1 attached)`,
          solution: String.raw`### Definitions
1. **Bivariate normal distribution.** (X, Y) is bivariate normal with means $\mu_X, \mu_Y$, variances $\sigma_X^2, \sigma_Y^2$ and correlation ρ (|ρ| < 1) if its joint pdf is
$$f(x, y) = \frac{1}{2\pi\sigma_X\sigma_Y\sqrt{1 - \rho^2}}\exp\left\{-\frac{1}{2(1 - \rho^2)}\left[\left(\frac{x - \mu_X}{\sigma_X}\right)^2 - 2\rho\left(\frac{x - \mu_X}{\sigma_X}\right)\left(\frac{y - \mu_Y}{\sigma_Y}\right) + \left(\frac{y - \mu_Y}{\sigma_Y}\right)^2\right]\right\}$$
   for −∞ < x, y < ∞. Then each marginal is normal, $X \sim N(\mu_X, \sigma_X^2)$ and $Y \sim N(\mu_Y, \sigma_Y^2)$, and the conditional distribution is
$$Y|X = x \;\sim\; N\left(\mu_Y + \rho\frac{\sigma_Y}{\sigma_X}(x - \mu_X),\; \sigma_Y^2(1 - \rho^2)\right)$$
2. **Stochastically independent random variables:** X and Y are independent if their joint pdf factorises into the marginals, $f(x, y) = f_X(x)f_Y(y)$ for all x, y. Equivalently, f(y|x) = $f_Y(y)$. For the bivariate normal, independence ⇔ ρ = 0.

### Probabilities
**Given:** $\sigma_X = 0.4$, $\sigma_Y = 10$, ρ = 0.6. Standard normal values Φ from Chart 1.

3. **(i) Marginal of Y:** Y ~ N(110, 100).
$$P(106 < Y < 124) = P\left(\frac{106 - 110}{10} < Z < \frac{124 - 110}{10}\right) = P(-0.4 < Z < 1.4) = \Phi(1.4) - \Phi(-0.4)$$
$$= 0.9192 - 0.3446 = 0.5746$$

4. **(ii) Conditional distribution at X = 3.2:**
$$\mu_{Y|x} = 110 + 0.6\cdot\frac{10}{0.4}(3.2 - 2.8) = 110 + 6 = 116, \qquad \sigma_{Y|x}^2 = (1 - 0.36)(100) = 64, \quad \sigma_{Y|x} = 8$$
$$P(106 < Y < 124\,|\,X = 3.2) = P\left(\frac{106 - 116}{8} < Z < \frac{124 - 116}{8}\right) = \Phi(1) - \Phi(-1.25) = 0.8413 - 0.1056 = 0.7357$$

5. **Interpretation.** Knowing X = 3.2 (one σ above its mean) shifts the centre of Y up to 116 and shrinks its spread from 10 to 8. The same interval therefore becomes more probable (0.736 against 0.575). (scipy gives 0.57467 and 0.73569.)`,
          answer: String.raw`Bivariate normal pdf as defined; independent ⇔ f(x, y) = f_X f_Y (⇔ ρ = 0). (i) Y ~ N(110, 10²): Φ(1.4) − Φ(−0.4) = 0.9192 − 0.3446 = 0.5746; (ii) Y|X = 3.2 ~ N(116, 8²): Φ(1) − Φ(−1.25) = 0.8413 − 0.1056 = 0.7357.` },
        { id: "2023-24-Q7b", label: "(b)", marks: "15",
          topic: "multivariate-normal", sub: "Joint pdf 4(x + y)/(5x³): P(0 < Y < ½ | X = 2) and independence",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`It has been observed that the joint distribution of a number X, X ≥ 1, and its fractional part Y which is the result of a computer operation involving a random generator is $F(x, y) = \frac45\frac{x + y}{x^3}$, 0 ≤ y < 1, 1 < x < ∞

(i) Find $P\left(0 < Y < \frac12\,\Big|\,X = 2\right)$

(ii) Are X and Y independent?`,
          solution: String.raw`**Given:** joint pdf $f(x, y) = \dfrac{4(x + y)}{5x^3}$ on 1 < x < ∞, 0 ≤ y < 1 (the printed F is the density).

**Check:** $\int_1^\infty\int_0^1f\,dy\,dx = \frac45\int_1^\infty\frac{x + \frac12}{x^3}dx = \frac45\left(1 + \frac14\right) = 1$ ✓.

1. **Marginal of X:**
$$f_X(x) = \int_0^1\frac{4(x + y)}{5x^3}dy = \frac{4(x + \frac12)}{5x^3} = \frac{2(2x + 1)}{5x^3}, \qquad x > 1$$

2. **Conditional pdf of Y given X = x:**
$$f(y|x) = \frac{f(x, y)}{f_X(x)} = \frac{x + y}{x + \frac12}, \quad 0 \le y < 1 \qquad\Rightarrow\qquad f(y|2) = \frac{2 + y}{2.5}$$

3. **(i) Conditional probability:**
$$P\left(0 < Y < \tfrac12\,\big|\,X = 2\right) = \int_0^{1/2}\frac{2 + y}{2.5}dy = \frac{1}{2.5}\left[2y + \frac{y^2}{2}\right]_0^{1/2} = \frac{1 + 0.125}{2.5} = 0.45$$

4. **(ii) Independence.** Marginal of Y:
$$f_Y(y) = \int_1^\infty\frac{4(x + y)}{5x^3}dx = \frac45\left(1 + \frac y2\right) = \frac{2(2 + y)}{5}, \quad 0 \le y < 1$$
   Then
$$f_X(x)f_Y(y) = \frac{4(2x + 1)(2 + y)}{25x^3} \ne \frac{4(x + y)}{5x^3} = f(x, y)$$
   For example, at x = 1, y = 0: f(1, 0) = 4/5 = 0.80, whereas $f_X(1)f_Y(0) = 1.2 \times 0.8 = 0.96$. Equivalently, the conditional pdf f(y|x) = (x + y)/(x + ½) **depends on x**, whereas independence requires f(y|x) = $f_Y(y)$ for every x. Hence **X and Y are not independent**.`,
          answer: String.raw`f_X = 2(2x + 1)/(5x³), f(y|x) = (x + y)/(x + ½) ⇒ P(0 < Y < ½ | X = 2) = ∫₀^{½}(2 + y)/2.5 dy = 0.45; f_Y = 2(2 + y)/5 and f(y|x) depends on x (f ≠ f_X f_Y) ⇒ not independent.` }
      ] },
    { id: "2023-24-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q8a", label: "(a)", marks: "5",
          topic: "pca", sub: "Key concepts and essential steps of principal component analysis",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain the key concepts and various essential steps in Principal Component Analysis.`,
          solution: String.raw`### Key concepts
- **Principal components (PCs)** are uncorrelated linear combinations $Y_i = \mathbf e_i'\mathbf X = e_{i1}X_1 + \cdots + e_{ip}X_p$ of the p original variables. They are chosen so that $Y_1$ has the largest possible variance, $Y_2$ the largest variance among combinations uncorrelated with $Y_1$, and so on (with $\mathbf e_i'\mathbf e_i = 1$).
- They are given by the **eigenvalue–eigenvector pairs** $(\lambda_i, \mathbf e_i)$ of the covariance matrix Σ (or of the correlation matrix ρ when the variables are on different scales), with $\lambda_1 \ge \lambda_2 \ge \cdots \ge \lambda_p \ge 0$:
$$\mathrm{Var}(Y_i) = \lambda_i, \qquad \mathrm{Cov}(Y_i, Y_k) = 0\ (i \ne k), \qquad \sum_i\mathrm{Var}(Y_i) = \sum_i\sigma_{ii} = \mathrm{tr}\,\Sigma$$
- **Proportion of total variance** explained by the kth PC is $\lambda_k/(\lambda_1 + \cdots + \lambda_p)$. The purpose is **dimension reduction**: a few PCs often explain 80–90% of the variation.
- **Loadings / correlations:** $\rho_{Y_i,X_k} = e_{ik}\sqrt{\lambda_i}/\sqrt{\sigma_{kk}}$ show which variables each PC represents.

### Essential steps
1. Collect the n × p data matrix. **Centre** the variables (subtract the means); **standardise** them if the units differ.
2. Compute the sample **covariance matrix S** (or the correlation matrix R).
3. Find its **eigenvalues and eigenvectors** and order them $\lambda_1 \ge \lambda_2 \ge \cdots$.
4. Form the PCs $\hat y_i = \hat{\mathbf e}_i'(\mathbf x - \bar{\mathbf x})$ and their **variance proportions** (and cumulative proportions).
5. **Decide how many PCs to keep:** cumulative proportion (e.g. ≥ 80%), eigenvalue > average (> 1 for R), or the elbow of a scree plot.
6. **Interpret** the retained PCs from their coefficients and correlations, and use the PC scores in further analysis (plots, regression, outlier detection).`,
          answer: String.raw`PCs are uncorrelated linear combinations eᵢ′X with maximal variances = eigenpairs of Σ (or ρ): Var(Yᵢ) = λᵢ, Σλᵢ = tr Σ, proportion λₖ/Σλ. Steps: centre/standardise → S or R → eigenvalues/vectors (ordered) → PCs and variance proportions → choose number (cumulative %, scree, λ > 1) → interpret/use scores.` },
        { id: "2023-24-Q8b", label: "(b)", marks: "15",
          topic: "pca", sub: "Principal components of Σ = diag(2, 4, 4); non-unique eigenvectors for equal eigenvalues",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Suppose the random variables $X_1$, $X_2$ and $X_3$ have the covariance matrix

$$\Sigma = \begin{bmatrix}2 & 0 & 0\\0 & 4 & 0\\0 & 0 & 4\end{bmatrix}$$

Determine the principal components $Y_1$, $Y_2$ and $Y_3$. What could be said about the eigenvectors (and principal components) associated with eigenvalues that are not distinct?`,
          solution: String.raw`1. **Eigenvalues.** Σ is diagonal, so $|\Sigma - \lambda I| = (2 - \lambda)(4 - \lambda)^2 = 0$. In decreasing order:
$$\lambda_1 = 4, \quad \lambda_2 = 4, \quad \lambda_3 = 2$$

2. **Eigenvectors.**
   - For λ = 2: $(\Sigma - 2I)\mathbf e = \mathbf 0$ gives $2e_2 = 0$, $2e_3 = 0$, so $\mathbf e_3 = (1, 0, 0)'$.
   - For λ = 4: $(\Sigma - 4I)\mathbf e = \mathbf 0$ gives $-2e_1 = 0$, with $e_2$ and $e_3$ arbitrary. The eigenspace is the whole $(x_2, x_3)$-plane. A convenient orthonormal pair is $\mathbf e_1 = (0, 1, 0)'$ and $\mathbf e_2 = (0, 0, 1)'$.

3. **Principal components:**
$$Y_1 = \mathbf e_1'\mathbf X = X_2, \qquad Y_2 = \mathbf e_2'\mathbf X = X_3, \qquad Y_3 = \mathbf e_3'\mathbf X = X_1$$
   with Var = 4, 4 and 2, all uncorrelated.

4. **Variance explained:** total variance = tr Σ = 2 + 4 + 4 = 10.

| PC | λ | proportion | cumulative |
|---|---|---|---|
| $Y_1$ | 4 | 0.40 | 0.40 |
| $Y_2$ | 4 | 0.40 | 0.80 |
| $Y_3$ | 2 | 0.20 | 1.00 |

   Since the original variables are already uncorrelated, PCA simply reorders them by variance; nothing is gained in dimension reduction.

5. **Equal (non-distinct) eigenvalues.** When $\lambda_1 = \lambda_2$, the eigenvectors are **not unique**. Any orthonormal pair spanning the eigenspace is valid, e.g.
$$\mathbf e_1 = (0, \cos\alpha, \sin\alpha)', \qquad \mathbf e_2 = (0, -\sin\alpha, \cos\alpha)'$$
   for any α, giving $Y_1 = \cos\alpha X_2 + \sin\alpha X_3$, $Y_2 = -\sin\alpha X_2 + \cos\alpha X_3$, both with variance 4 and uncorrelated. So the corresponding PCs are **determined only up to a rotation** within that subspace: their variances (4 and 4) and the subspace are unique, but the individual components are not and cannot be interpreted separately. Geometrically, the constant-density ellipsoid is circular in that plane, so there is no preferred axis.`,
          answer: String.raw`λ = 4, 4, 2 ⇒ Y₁ = X₂, Y₂ = X₃ (variance 4 each, 40 % each), Y₃ = X₁ (variance 2, 20 %). For the repeated eigenvalue 4 any orthonormal pair in the (x₂, x₃) plane is an eigenvector pair: those PCs are unique only up to rotation (variances unique, directions arbitrary).` },
        { id: "2023-24-Q8c", label: "(c)", marks: "15",
          topic: "regression", sub: "Normal equations; least-squares regression of X₃ on X₁, X₂ from summary statistics and predictions",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Define the normal equations of multiple linear regression for 3 variables $X_1$, $X_2$, and $X_3$.

An instructor of mathematics wished to determine the relationship of grades on two quizzes given during the semester. Calling $X_1$, $X_2$, and $X_3$ the grades of a student on the first quiz, second quiz, and final examination, respectively, he made the following computations for a total of 120 students:

$\bar X_1 = 6.4$, $\bar X_2 = 7.2$, $\bar X_3 = 6.9$; $s_1 = 1.0$, $s_2 = 0.80$, $s_3 = 9.0$; $r_{12} = 0.60$, $r_{13} = 0.70$, $r_{23} = 0.65$

(i) Find the least-squares regression equation of $X_1$, $X_2$ and $X_3$.

(ii) Estimate the final grades of two students whose respective scores on the two quizzes were (1) 9 and 10 and (2) 5 and 8.`,
          solution: String.raw`### Normal equations
For the regression of $X_3$ on $X_1$ and $X_2$, $\hat X_3 = b_0 + b_1X_1 + b_2X_2$, least squares minimises $\sum(X_3 - b_0 - b_1X_1 - b_2X_2)^2$. Setting the derivatives with respect to $b_0, b_1, b_2$ to zero gives the **normal equations**:
$$\sum X_3 = nb_0 + b_1\sum X_1 + b_2\sum X_2$$
$$\sum X_1X_3 = b_0\sum X_1 + b_1\sum X_1^2 + b_2\sum X_1X_2$$
$$\sum X_2X_3 = b_0\sum X_2 + b_1\sum X_1X_2 + b_2\sum X_2^2$$
In matrix form $\mathbf X'\mathbf X\mathbf b = \mathbf X'\mathbf y$, so $\mathbf b = (\mathbf X'\mathbf X)^{-1}\mathbf X'\mathbf y$. In deviation form (dividing by n), the first equation gives $b_0 = \bar X_3 - b_1\bar X_1 - b_2\bar X_2$, and the other two become
$$s_1^2b_1 + r_{12}s_1s_2b_2 = r_{13}s_1s_3, \qquad r_{12}s_1s_2b_1 + s_2^2b_2 = r_{23}s_2s_3$$

### (i) Regression equation (of the final grade $X_3$ on the quizzes)
1. **Solve the deviation-form equations:**
$$b_1 = \frac{s_3}{s_1}\cdot\frac{r_{13} - r_{12}r_{23}}{1 - r_{12}^2} = \frac{9.0}{1.0}\cdot\frac{0.70 - 0.60(0.65)}{1 - 0.36} = 9(0.4844) = 4.359$$
$$b_2 = \frac{s_3}{s_2}\cdot\frac{r_{23} - r_{12}r_{13}}{1 - r_{12}^2} = \frac{9.0}{0.80}\cdot\frac{0.65 - 0.60(0.70)}{0.64} = 11.25(0.3594) = 4.043$$

2. **Intercept:**
$$b_0 = 6.9 - 4.359(6.4) - 4.043(7.2) = 6.9 - 27.90 - 29.11 = -50.11$$
$$\boxed{\hat X_3 = -50.11 + 4.359X_1 + 4.043X_2}$$
   Multiple correlation: $R_{3.12}^2 = (r_{13}^2 + r_{23}^2 - 2r_{12}r_{13}r_{23})/(1 - r_{12}^2) = 0.573$, so $R_{3.12}$ = 0.757.

### (ii) Predictions
3. **Student 1** ($X_1$ = 9, $X_2$ = 10): $\hat X_3 = -50.11 + 39.23 + 40.43 = 29.6$.
4. **Student 2** ($X_1$ = 5, $X_2$ = 8): $\hat X_3 = -50.11 + 21.80 + 32.34 = 4.0$.

### Note on the data
The printed $\bar X_3$ = 6.9 is not consistent with $s_3$ = 9.0 and grades on the quiz scale: a mean of 6.9 with a standard deviation of 9 would make many predicted final grades negative, e.g. $X_1$ = 5, $X_2$ = 6 gives −4.1. The final-exam mean has probably been misprinted. The slopes $b_1$ and $b_2$ do **not** depend on $\bar X_3$. If the true mean is $\bar X_3'$, only the intercept and the predictions change, by $(\bar X_3' - 6.9)$: $b_0 = \bar X_3' - 57.01$, and the predictions become $\bar X_3' + 22.65$ and $\bar X_3' - 2.87$. The solution above uses the data as printed.`,
          answer: String.raw`Normal equations: X′Xb = X′y (three sums equations). b₁ = (s₃/s₁)(r₁₃ − r₁₂r₂₃)/(1 − r₁₂²) = 4.359, b₂ = (s₃/s₂)(r₂₃ − r₁₂r₁₃)/(1 − r₁₂²) = 4.043, b₀ = 6.9 − 4.359(6.4) − 4.043(7.2) = −50.11 ⇒ X̂₃ = −50.11 + 4.359X₁ + 4.043X₂; predictions 29.6 (9, 10) and 4.0 (5, 8). X̄₃ = 6.9 looks misprinted (slopes unaffected; predictions shift by X̄₃′ − 6.9).` }
      ] }
  ]
});
