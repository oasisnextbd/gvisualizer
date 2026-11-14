QB.paper({
  year: "2016-17", date: "17/02/2018", marks: 280,
  rules: String.raw`L-2/T-2 (ME) B.Sc. Engineering Examinations 2016-2017, MATH 263 (Complex Variable, Harmonic Analysis and Partial Differential Equations), 3 hours, 280 marks. Section A: four questions, answer any THREE. Section B: four questions, answer any THREE. Use separate scripts for each section; the figures in the margin indicate full marks; symbols have their usual meaning. Only Section A (complex variable) is given here: Section B (Lagrange and Charpit methods, higher-order PDEs, Fourier series, integrals and transforms, Laplace's equation) is not part of MATH 327 and is omitted.`,
  questions: [
    { id: "2016-17-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q1a", label: "(a)", marks: "12",
          topic: "complex-algebra", sub: "arg z₁ from z̄₁ + i z̄₂ = 0 and arg(z₁z₂) = π",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Let $z_1$ and $z_2$ be two complex numbers such that $\bar z_1 + i\bar z_2 = 0$ and $\arg(z_1z_2) = \pi$. Then find $\arg(z_1)$.`,
          solution: String.raw`**Given:** $\bar z_1 + i\bar z_2 = 0$, $\arg(z_1z_2) = \pi$. **Find:** $\arg z_1$.

1. **Relate $z_2$ to $z_1$.** From $\bar z_1 = -i\bar z_2$, take the conjugate of both sides (the conjugate of $-i$ is $+i$):
$$z_1 = i z_2 \;\Rightarrow\; z_2 = \frac{z_1}{i} = -iz_1$$

2. **Product:**
$$z_1z_2 = -iz_1^2$$

3. **Arguments add under multiplication.** Let $\arg z_1 = \theta$. Since $\arg(-i) = -\pi/2$ and $\arg z_1^2 = 2\theta$:
$$\arg(z_1z_2) = 2\theta - \frac{\pi}{2} = \pi + 2k\pi \;\Rightarrow\; 2\theta = \frac{3\pi}{2} + 2k\pi \;\Rightarrow\; \theta = \frac{3\pi}{4} + k\pi$$

4. **Principal values** ($-\pi < \theta \le \pi$): $\theta = 3\pi/4$ (k = 0) or $\theta = -\pi/4$ (k = −1). Both satisfy the conditions; for example, $z_1 = e^{i3\pi/4}$ gives $z_2 = -iz_1 = e^{i\pi/4}$ and $z_1z_2 = e^{i\pi} = -1$ ✓.

**Result:** $\arg z_1 = \dfrac{3\pi}{4}$ (equivalently $-\pi/4$, since only $2\arg z_1$ is fixed). The usual textbook answer is $3\pi/4$.`,
          answer: String.raw`z̄₁ = −i z̄₂ ⇒ z₁ = iz₂ ⇒ z₁z₂ = −iz₁²; 2 arg z₁ − π/2 = π (mod 2π) ⇒ arg z₁ = 3π/4 (or −π/4).` },
        { id: "2016-17-Q1b", label: "(b)", marks: "10",
          topic: "analytic", sub: "f(z) = x² + iy²: differentiable only on the line y = x",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`If $f(z) = x^2 + iy^2$, then show that $f'(z)$ exist at $z = x + ix$.`,
          solution: String.raw`**Given:** $u = x^2$, $v = y^2$.

1. **Partial derivatives** (all continuous everywhere):
$$u_x = 2x, \quad u_y = 0, \quad v_x = 0, \quad v_y = 2y$$

2. **Cauchy–Riemann equations** $u_x = v_y$, $u_y = -v_x$:
   - $u_y = -v_x$: $0 = 0$, true everywhere.
   - $u_x = v_y$: $2x = 2y$, true only where **y = x**.

3. **Sufficient condition.** Where the first partials are continuous and satisfy the CR equations, f is differentiable. The partials are continuous everywhere, so f′ exists exactly at the points $z = x + ix$ (the line y = x), and
$$f'(z) = u_x + iv_x = 2x$$

4. **Direct check from the definition** at $z_0 = a + ia$: with Δz = h + ik,
$$\frac{\Delta f}{\Delta z} = \frac{(a + h)^2 - a^2 + i[(a + k)^2 - a^2]}{h + ik} = \frac{2a(h + ik) + h^2 + ik^2}{h + ik} = 2a + \frac{h^2 + ik^2}{h + ik}$$
   The last term has modulus at most $(h^2 + k^2)/\sqrt{h^2 + k^2} = |\Delta z| \to 0$, so the limit is 2a in every direction ✓.

5. **Remark.** f is differentiable on a line but is **not analytic anywhere**, since no point of the line has a neighbourhood where f′ exists.

**Result:** CR holds only on y = x; there $f'(z) = 2x$.`,
          answer: String.raw`u = x², v = y²: u_y = −v_x = 0 always; u_x = v_y ⇔ 2x = 2y. Partials continuous ⇒ f′ exists exactly on y = x (z = x + ix), f′ = 2x; f is nowhere analytic.` },
        { id: "2016-17-Q1c", label: "(c)", marks: "13⅔",
          topic: "analytic", sub: "Polar Cauchy–Riemann equations; f(z) = √r e^{iθ/2} is differentiable and f′ = 1/(2f)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Write down Cauchy Riemann equation in polar form. Test the differentiability of the function $f(z) = \sqrt r\,e^{i\theta/2}$, $(r > 0, \alpha < \theta < \alpha + 2\pi)$ in the indicated domain and hence show that, $f'(z) = \dfrac{1}{2f(z)}$.`,
          solution: String.raw`1. **Polar CR equations.** With $z = re^{i\theta}$ and $f = u(r, \theta) + iv(r, \theta)$:
$$u_r = \frac1r v_\theta, \qquad v_r = -\frac1r u_\theta \qquad (r > 0)$$
   If these hold and the first partials are continuous near a point, then f is differentiable there and
$$f'(z) = e^{-i\theta}(u_r + iv_r)$$

2. **Real and imaginary parts:**
$$u = \sqrt r\cos\frac\theta2, \qquad v = \sqrt r\sin\frac\theta2$$

3. **Partial derivatives:**
$$u_r = \frac{1}{2\sqrt r}\cos\frac\theta2, \quad u_\theta = -\frac{\sqrt r}{2}\sin\frac\theta2, \quad v_r = \frac{1}{2\sqrt r}\sin\frac\theta2, \quad v_\theta = \frac{\sqrt r}{2}\cos\frac\theta2$$

4. **Check CR:**
$$\frac1rv_\theta = \frac{1}{2\sqrt r}\cos\frac\theta2 = u_r \;\checkmark, \qquad -\frac1ru_\theta = \frac{1}{2\sqrt r}\sin\frac\theta2 = v_r \;\checkmark$$
   All four partials are continuous for r > 0 and α < θ < α + 2π (a domain that excludes the ray θ = α, where θ would jump). Hence **f is differentiable (indeed analytic) throughout the domain**. This is a branch of $z^{1/2}$.

5. **Derivative:**
$$f'(z) = e^{-i\theta}\left(\frac{1}{2\sqrt r}\cos\frac\theta2 + \frac{i}{2\sqrt r}\sin\frac\theta2\right) = e^{-i\theta}\frac{e^{i\theta/2}}{2\sqrt r} = \frac{e^{-i\theta/2}}{2\sqrt r} = \frac{1}{2\sqrt r\,e^{i\theta/2}}$$
$$\boxed{f'(z) = \frac{1}{2f(z)}}$$

**Result:** polar CR hold with continuous partials, so f is differentiable for r > 0, α < θ < α + 2π, and $f'(z) = 1/(2f(z))$ (the familiar $\frac{d}{dz}z^{1/2} = \frac{1}{2}z^{-1/2}$).`,
          answer: String.raw`u_r = v_θ/r, v_r = −u_θ/r; u = √r cos(θ/2), v = √r sin(θ/2) satisfy them with continuous partials (r > 0), so f is analytic there; f′ = e^{−iθ}(u_r + iv_r) = e^{−iθ/2}/(2√r) = 1/(2f(z)).` },
        { id: "2016-17-Q1d", label: "(d)", marks: "11",
          topic: "mapping", sub: "Bilinear map w = (iz + 2)/(4z + i): image of the real axis is a circle, centre −7i/8, radius 9/8",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Show that the transformation, $w = \dfrac{iz + 2}{4z + 1}$ transform the real axis in the z-plane into circle in the w-plane. Find the centre and radius of this.`,
          solution: String.raw`**Misprint.** As printed, the pole of $w = (iz + 2)/(4z + 1)$ is at $z = -1/4$, which lies **on** the real axis. A bilinear map sends a line through its pole to a **straight line**, not a circle: here $u + 8v = 2$ (shown at the end). The intended map, the standard textbook exercise, is $w = (iz + 2)/(4z + i)$, whose pole $-i/4$ is off the real axis. It is solved below.

1. **Invert the map.** $w(4z + i) = iz + 2 \Rightarrow z(4w - i) = 2 - iw$, so
$$z = \frac{2 - iw}{4w - i}$$

2. **Condition for real z:** $z = \bar z$:
$$\frac{2 - iw}{4w - i} = \frac{2 + i\bar w}{4\bar w + i}$$
   Cross-multiplying:
$$(2 - iw)(4\bar w + i) = (2 + i\bar w)(4w - i)$$
$$8\bar w + 2i - 4iw\bar w + w = 8w - 2i + 4iw\bar w + \bar w$$
$$7(\bar w - w) + 4i - 8i\,w\bar w = 0$$

3. **In terms of w = u + iv** ($\bar w - w = -2iv$, $w\bar w = u^2 + v^2$):
$$-14iv + 4i - 8i(u^2 + v^2) = 0 \;\Rightarrow\; u^2 + v^2 + \frac74v - \frac12 = 0$$

4. **Complete the square:**
$$u^2 + \left(v + \frac78\right)^2 = \frac12 + \frac{49}{64} = \frac{81}{64}$$
   A **circle with centre $w_0 = -\dfrac{7i}{8}$ (0, −7/8) and radius $\dfrac98$**.

5. **Check with three points:** $w(0) = 2/i = -2i$; $w(\infty) = i/4$; $w(1) = (2 + i)/(4 + i) = (9 + 2i)/17$. Distances from $-7i/8$: $|-2i + 7i/8| = 9/8$, $|i/4 + 7i/8| = 9/8$, $|(9 + 2i)/17 + 7i/8| = 9/8$ ✓.

![The real axis of the z-plane mapped by w = (iz + 2)/(4z + i) onto the circle with centre −7i/8 and radius 9/8](fig/2016-17-Q1d-sketch.svg)

6. **The map as printed.** For $w = (iz + 2)/(4z + 1)$, $z = (2 - w)/(4w - i)$ and $z = \bar z$ gives $8(\bar w - w) + 4i - i(w + \bar w) = 0$, i.e. $-16iv + 4i - 2iu = 0$: the straight line $u + 8v = 2$. (A line is a "circle through ∞": the real-axis point $z = -1/4$ goes to w = ∞.)

**Result:** with $w = (iz + 2)/(4z + i)$ the real axis maps onto $|w + 7i/8| = 9/8$ (centre −7i/8, radius 9/8). With the printed denominator 4z + 1, the image is the line u + 8v = 2.`,
          answer: String.raw`Intended w = (iz + 2)/(4z + i): z = (2 − iw)/(4w − i), z = z̄ ⇒ u² + v² + (7/4)v − 1/2 = 0 ⇒ circle, centre −7i/8, radius 9/8. (As printed, 4z + 1 puts the pole on the real axis and gives the line u + 8v = 2.)` }
      ] },
    { id: "2016-17-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q2a", label: "(a)", marks: "10",
          topic: "analytic", sub: "u = ½ ln(x² + y²) is harmonic; analytic f(z) = ln z",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that $u = \dfrac12\ln(x^2 + y^2)$ is harmonic. Find an analytic function $f(z)$ in which $u(x, y)$ is the real part. Also express $f(z)$ in terms of z.`,
          solution: String.raw`**Domain:** $(x, y) \ne (0, 0)$.

1. **First derivatives:**
$$u_x = \frac{x}{x^2 + y^2}, \qquad u_y = \frac{y}{x^2 + y^2}$$

2. **Second derivatives:**
$$u_{xx} = \frac{(x^2 + y^2) - 2x^2}{(x^2 + y^2)^2} = \frac{y^2 - x^2}{(x^2 + y^2)^2}, \qquad u_{yy} = \frac{x^2 - y^2}{(x^2 + y^2)^2}$$
$$u_{xx} + u_{yy} = 0$$
   so u is **harmonic** (with continuous second partials) for $z \ne 0$.

3. **Harmonic conjugate v from CR:** $v_y = u_x = \dfrac{x}{x^2 + y^2}$. Integrating with respect to y:
$$v = \tan^{-1}\frac{y}{x} + \phi(x)$$
   Then $v_x = -\dfrac{y}{x^2 + y^2} + \phi'(x)$, and CR requires $v_x = -u_y = -\dfrac{y}{x^2 + y^2}$. So φ′(x) = 0 and φ = C:
$$v = \tan^{-1}\frac yx + C \quad(= \theta + C)$$

4. **f(z):**
$$f = \frac12\ln(x^2 + y^2) + i\tan^{-1}\frac yx + iC = \ln r + i\theta + iC$$

5. **In terms of z (Milne–Thomson).** $f'(z) = u_x - iu_y$; put x = z, y = 0: $f'(z) = \dfrac{z}{z^2} = \dfrac1z$, so $f(z) = \ln z + iC$. Consistent with $\ln z = \ln r + i\theta$ ✓.

**Result:** $u_{xx} + u_{yy} = 0$; $v = \tan^{-1}(y/x) + C$; $f(z) = \ln z + iC$ (analytic in any domain excluding a branch cut from 0).`,
          answer: String.raw`u_xx = (y² − x²)/(x² + y²)², u_yy = (x² − y²)/(x² + y²)² ⇒ Δu = 0. CR ⇒ v = tan⁻¹(y/x) + C; f = ½ln(x² + y²) + i tan⁻¹(y/x) = ln z + iC (f′ = 1/z).` },
        { id: "2016-17-Q2b", label: "(b)", marks: "10",
          topic: "elementary-functions", sub: "Principal value of (1 − i)^{4i}",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find the principle value of $(1 - i)^{4i}$.`,
          solution: String.raw`1. **Definition:** $a^b = e^{b\log a}$; the principal value uses the principal logarithm $\mathrm{Log}\,a = \ln|a| + i\,\mathrm{Arg}\,a$, $-\pi < \mathrm{Arg}\,a \le \pi$.

2. **Principal log of 1 − i:** $|1 - i| = \sqrt2$, $\mathrm{Arg}(1 - i) = -\pi/4$:
$$\mathrm{Log}(1 - i) = \frac12\ln 2 - \frac{i\pi}{4}$$

3. **Exponent:**
$$4i\,\mathrm{Log}(1 - i) = 4i\left(\frac12\ln2 - \frac{i\pi}{4}\right) = \pi + 2i\ln 2$$

4. **Principal value:**
$$(1 - i)^{4i} = e^{\pi + 2i\ln2} = e^\pi[\cos(2\ln2) + i\sin(2\ln2)] = e^{\pi}e^{i\ln 4}$$
   Numerically $2\ln 2 = 1.3863$: $e^\pi = 23.141$, $\cos(1.3863) = 0.1835$, $\sin(1.3863) = 0.9830$, so
$$(1 - i)^{4i} \approx 4.245 + 22.748i$$

5. **All values:** with $\arg(1 - i) = -\pi/4 + 2n\pi$, $(1 - i)^{4i} = e^{\pi - 8n\pi}e^{2i\ln2}$, n = 0, ±1, …; the principal value is n = 0.

**Result:** $e^{\pi}[\cos(2\ln2) + i\sin(2\ln2)] \approx 4.245 + 22.748i$.`,
          answer: String.raw`Log(1 − i) = ½ln 2 − iπ/4 ⇒ 4i Log(1 − i) = π + 2i ln 2 ⇒ (1 − i)^{4i} = e^π[cos(2 ln 2) + i sin(2 ln 2)] ≈ 4.245 + 22.748i.` },
        { id: "2016-17-Q2c", label: "(c)", marks: "10",
          topic: "elementary-functions", sub: "Solve cos z = 2 by equating real and imaginary parts",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Solve the equation $\cos z = 2$ by equating the real and imaginary parts in the equation.`,
          solution: String.raw`1. **Expand** with z = x + iy:
$$\cos z = \cos x\cosh y - i\sin x\sinh y = 2$$

2. **Equate parts:**
$$\cos x\cosh y = 2 \quad (1), \qquad \sin x\sinh y = 0 \quad (2)$$

3. **From (2):** either sinh y = 0 (y = 0) or sin x = 0.
   - y = 0 makes (1) $\cos x = 2$: impossible for real x.
   - So $\sin x = 0$: $x = n\pi$, and $\cos x = (-1)^n$.

4. **From (1):** $(-1)^n\cosh y = 2$. Since cosh y ≥ 1 > 0, n must be even, $x = 2k\pi$, and
$$\cosh y = 2 \;\Rightarrow\; y = \pm\cosh^{-1}2 = \pm\ln(2 + \sqrt3) = \pm1.3170$$

5. **Solutions:**
$$z = 2k\pi \pm i\ln(2 + \sqrt3), \qquad k = 0, \pm1, \pm2, \ldots$$
   Check: $\cos(i\ln(2 + \sqrt3)) = \cosh(\ln(2 + \sqrt3)) = \frac12[(2 + \sqrt3) + (2 - \sqrt3)] = 2$ ✓.

**Result:** $z = 2k\pi \pm i\ln(2 + \sqrt3) \approx 2k\pi \pm 1.317i$.`,
          answer: String.raw`cos x cosh y = 2, sin x sinh y = 0 ⇒ sin x = 0 with cos x = 1 ⇒ x = 2kπ, cosh y = 2 ⇒ z = 2kπ ± i ln(2 + √3) (≈ 2kπ ± 1.317i).` },
        { id: "2016-17-Q2d", label: "(d)", marks: "16⅔",
          topic: "complex-integration", sub: "∫ z² dz along the unit circle from 1 to i",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate $\displaystyle\int_C z^2\,dz$ where C is the part of the unit circle going anticlockwise from the point $z = 1$ to the point $z = i$.`,
          solution: String.raw`**Given:** C: $z = e^{i\theta}$, $0 \le \theta \le \pi/2$.

1. **Parametrize:** $dz = ie^{i\theta}d\theta$, $z^2 = e^{2i\theta}$:
$$\int_C z^2\,dz = \int_0^{\pi/2}e^{2i\theta}\,ie^{i\theta}\,d\theta = i\int_0^{\pi/2}e^{3i\theta}d\theta = i\left[\frac{e^{3i\theta}}{3i}\right]_0^{\pi/2} = \frac{e^{3i\pi/2} - 1}{3}$$

2. **Evaluate:** $e^{3i\pi/2} = -i$, so
$$\int_C z^2\,dz = \frac{-1 - i}{3}$$

3. **Check (independence of path).** $z^2$ is entire, with antiderivative $z^3/3$, so the integral depends only on the end points:
$$\left[\frac{z^3}{3}\right]_1^i = \frac{i^3 - 1}{3} = \frac{-i - 1}{3} \;\checkmark$$
   The same value is obtained along any path from 1 to i (e.g. the straight segment).

**Result:** $\displaystyle\int_C z^2\,dz = -\frac13(1 + i)$.`,
          answer: String.raw`z = e^{iθ}, 0 ≤ θ ≤ π/2: i∫e^{3iθ}dθ = (e^{3iπ/2} − 1)/3 = −(1 + i)/3 (same as [z³/3] from 1 to i).` }
      ] },
    { id: "2016-17-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q3a", label: "(a)", marks: "15",
          topic: "complex-integration", sub: "Cauchy integral formula: ∮ z/((9 − z²)(z + i)) dz on |z| = 2",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Use Cauchy integral formula to evaluate $\displaystyle\oint_C\frac{z}{(9 - z^2)(z + i)}dz$, where C is the circle $|z| = 2$.`,
          solution: String.raw`1. **Singularities:** $9 - z^2 = 0$ gives $z = \pm3$, with $|z| = 3 > 2$: **outside** C. $z = -i$, with $|z| = 1 < 2$: **inside** C.

2. **Cauchy integral formula** $\oint_C\dfrac{g(z)}{z - z_0}dz = 2\pi i\,g(z_0)$ with $z_0 = -i$ and
$$g(z) = \frac{z}{9 - z^2}$$
   g is analytic inside and on C (its poles ±3 are outside).

3. **Evaluate:**
$$g(-i) = \frac{-i}{9 - (-i)^2} = \frac{-i}{9 + 1} = -\frac{i}{10}$$
$$\oint_C\frac{z}{(9 - z^2)(z + i)}dz = 2\pi i\left(-\frac{i}{10}\right) = \frac{\pi}{5}$$

4. **Numerical check:** integrating along $z = 2e^{i\theta}$ numerically gives 0.62832 = π/5 ✓.

**Result:** $\pi/5$.`,
          answer: String.raw`Only z = −i lies inside |z| = 2 (±3 outside); g = z/(9 − z²), g(−i) = −i/10 ⇒ integral = 2πi(−i/10) = π/5.` },
        { id: "2016-17-Q3b", label: "(b)", marks: "15⅔",
          topic: "series", sub: "Laurent series of z²/((z − 1)(z − 2)) in 1 < |z| < 2",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Express $f(z) = \dfrac{z^2}{(z - 1)(z - 2)}$ in a Laurent series valid in the region $1 < |z| < 2$.`,
          solution: String.raw`1. **Partial fractions.** The degrees of numerator and denominator are equal, so first divide: $z^2 = (z - 1)(z - 2) + 3z - 2$. Then
$$f(z) = 1 + \frac{3z - 2}{(z - 1)(z - 2)} = 1 + \frac{A}{z - 1} + \frac{B}{z - 2}$$
   with $A = \dfrac{3 - 2}{1 - 2} = -1$ and $B = \dfrac{6 - 2}{2 - 1} = 4$:
$$f(z) = 1 - \frac{1}{z - 1} + \frac{4}{z - 2}$$

2. **Term −1/(z − 1) for |z| > 1** (expand in powers of 1/z, since |1/z| < 1):
$$-\frac{1}{z - 1} = -\frac1z\cdot\frac{1}{1 - 1/z} = -\frac1z\sum_{n=0}^\infty\frac{1}{z^n} = -\sum_{n=1}^\infty\frac{1}{z^n}$$

3. **Term 4/(z − 2) for |z| < 2** (expand in powers of z/2):
$$\frac{4}{z - 2} = -\frac{2}{1 - z/2} = -2\sum_{n=0}^\infty\frac{z^n}{2^n}$$

4. **Combine** (both expansions hold in 1 < |z| < 2):
$$f(z) = 1 - \sum_{n=1}^\infty z^{-n} - 2\sum_{n=0}^\infty\frac{z^n}{2^n}$$
$$\boxed{f(z) = \cdots - \frac{1}{z^3} - \frac{1}{z^2} - \frac1z - 1 - z - \frac{z^2}{2} - \frac{z^3}{4} - \cdots}$$
   (The constant term is 1 − 2 = −1; the coefficient of $z^n$, n ≥ 1, is $-2^{1-n}$; the coefficient of $z^{-n}$ is −1.)

**Result:** $f(z) = -\sum_{n\ge1}z^{-n} - 1 - \sum_{n\ge1}2^{1-n}z^n$, valid for 1 < |z| < 2.`,
          answer: String.raw`f = 1 − 1/(z − 1) + 4/(z − 2); in 1 < |z| < 2: −1/(z − 1) = −Σ_{n≥1} z^{−n}, 4/(z − 2) = −2Σ_{n≥0}(z/2)^n ⇒ f = … − 1/z² − 1/z − 1 − z − z²/2 − z³/4 − …` },
        { id: "2016-17-Q3c", label: "(c)", marks: "16",
          topic: "residues", sub: "∮ sin 3z/(z − π/4)⁴ dz around the square |x| ≤ 2, |y| ≤ 2 by the residue theorem",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate the integral $\displaystyle\oint_C\frac{\sin 3z}{\left(z - \frac\pi4\right)^4}dz$ by Cauchy residue theorem, where $C = \{(x, y): |x| \le 2, |y| \le 2\}$, positively oriented.`,
          solution: String.raw`**Note:** C is the boundary of the square $|x| \le 2$, $|y| \le 2$, traversed anticlockwise.

![Square contour |x| ≤ 2, |y| ≤ 2 with the fourth-order pole at z = π/4 inside](fig/2016-17-Q3c-sketch.svg)

1. **Singularity:** $z = \pi/4 \approx 0.785$ lies inside the square. It is a **pole of order 4**, because sin 3z is analytic and $\sin(3\pi/4) = \sqrt2/2 \ne 0$.

2. **Residue at a pole of order m = 4:**
$$\mathrm{Res}_{z = \pi/4} = \frac{1}{3!}\lim_{z \to \pi/4}\frac{d^3}{dz^3}\left[(z - \pi/4)^4\frac{\sin3z}{(z - \pi/4)^4}\right] = \frac16\frac{d^3}{dz^3}\sin 3z\Big|_{\pi/4}$$
$$\frac{d^3}{dz^3}\sin3z = -27\cos3z \;\Rightarrow\; \mathrm{Res} = \frac{-27\cos(3\pi/4)}{6} = \frac{-27(-\sqrt2/2)}{6} = \frac{9\sqrt2}{4}$$

3. **Residue theorem:**
$$\oint_C\frac{\sin3z}{(z - \pi/4)^4}dz = 2\pi i\cdot\frac{9\sqrt2}{4} = \frac{9\sqrt2\,\pi i}{2} \approx 19.99i$$
   (Equivalently, by the generalized Cauchy integral formula, $\oint\frac{g(z)}{(z - z_0)^4}dz = \frac{2\pi i}{3!}g'''(z_0)$ with g = sin 3z.)

**Result:** $\dfrac{9\sqrt2}{2}\pi i$.`,
          answer: String.raw`Pole of order 4 at π/4 (inside); Res = (1/3!)(sin 3z)‴ at π/4 = −27cos(3π/4)/6 = 9√2/4 ⇒ integral = 2πi(9√2/4) = 9√2πi/2 ≈ 19.99i.` }
      ] },
    { id: "2016-17-Q4", q: 4, section: "A",
      stem: String.raw`Evaluate the following integral using the method of contour integration: (23 + 23⅔ marks)`,
      parts: [
        { id: "2016-17-Q4i", label: "(i)", marks: "23",
          topic: "residues", sub: "∫₀^{2π} cos 2θ/(5 − 3 cos θ) dθ = π/18 by the unit-circle substitution",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(i) $\displaystyle\int_0^{2\pi}\frac{\cos2\theta}{5 - 3\cos\theta}d\theta$.`,
          solution: String.raw`**Method:** put $z = e^{i\theta}$, so the interval $0 \le \theta \le 2\pi$ becomes the unit circle |z| = 1, with
$$\cos\theta = \frac12\left(z + \frac1z\right), \qquad d\theta = \frac{dz}{iz}, \qquad \cos2\theta = \mathrm{Re}(e^{2i\theta}) = \mathrm{Re}(z^2)$$

1. **Write I as the real part of a contour integral** (using $e^{2i\theta}$ instead of $\cos 2\theta$ avoids a pole at z = 0):
$$I = \mathrm{Re}\oint_{|z|=1}\frac{z^2}{5 - \frac32\left(z + \frac1z\right)}\frac{dz}{iz} = \mathrm{Re}\oint_{|z|=1}\frac{2z^2}{i(10z - 3z^2 - 3)}dz = \mathrm{Re}\oint_{|z|=1}\frac{2iz^2}{3z^2 - 10z + 3}dz$$
   (multiplying numerator and denominator by −1 and using −1/i = i).

2. **Poles:** $3z^2 - 10z + 3 = (3z - 1)(z - 3) = 0$ gives $z = 1/3$ (inside |z| = 1) and z = 3 (outside).

3. **Residue at z = 1/3** (simple pole):
$$\mathrm{Res} = \frac{2iz^2}{3(z - 3)}\Big|_{z = 1/3} = \frac{2i(1/9)}{3(-8/3)} = \frac{2i/9}{-8} = -\frac{i}{36}$$

4. **Residue theorem:**
$$\oint = 2\pi i\left(-\frac{i}{36}\right) = \frac{2\pi}{36} = \frac{\pi}{18}$$
   This is already real; its imaginary part, $\int_0^{2\pi}\sin2\theta/(5 - 3\cos\theta)\,d\theta$, is zero by odd symmetry, as it must be.

5. **Numerical check:** quadrature gives 0.174533 = π/18 ✓.

**Result:** $\displaystyle\int_0^{2\pi}\frac{\cos2\theta}{5 - 3\cos\theta}d\theta = \frac{\pi}{18}$.`,
          answer: String.raw`z = e^{iθ}: I = Re∮ 2iz²/[(3z − 1)(z − 3)] dz; only z = 1/3 inside, Res = −i/36 ⇒ I = 2πi(−i/36) = π/18 ≈ 0.1745.` },
        { id: "2016-17-Q4ii", label: "(ii)", marks: "23⅔",
          topic: "residues", sub: "∫₀^∞ ln(1 + x²)/(1 + x²) dx = π ln 2 using log(z + i) on an upper semicircle",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(ii) $\displaystyle\int_0^\infty\frac{\ln(1 + x^2)}{1 + x^2}dx$.`,
          solution: String.raw`**Idea:** for real x, $\ln(1 + x^2) = \ln[(x + i)(x - i)] = 2\ln|x + i|$, so $\ln(1 + x^2)/2 = \mathrm{Re}\log(x + i)$. Integrate $f(z) = \dfrac{\log(z + i)}{z^2 + 1}$ around the upper semicircle.

1. **Branch.** Take $\log(z + i)$ with its branch cut from $z = -i$ straight down the imaginary axis. Then log(z + i) is analytic in the closed upper half-plane, and on the real axis $\log(x + i) = \frac12\ln(1 + x^2) + i\arg(x + i)$ with $0 < \arg(x + i) < \pi$.

![Upper semicircular contour of radius R enclosing the pole z = i; the branch cut of log(z + i) runs down from −i](fig/2016-17-Q4-sketch.svg)

2. **Contour:** the segment [−R, R] plus the semicircle $C_R$ (R > 1). The only singularity inside is the simple pole z = i ($z = -i$ is excluded by the cut and lies outside).

3. **Residue at z = i:**
$$\mathrm{Res}_{z = i} = \frac{\log(2i)}{2i} = \frac{\ln2 + i\pi/2}{2i}$$
$$\oint f\,dz = 2\pi i\cdot\frac{\ln2 + i\pi/2}{2i} = \pi\ln2 + \frac{i\pi^2}{2}$$

4. **Semicircle → 0.** On $C_R$, $|\log(z + i)| \le \ln(R + 1) + \pi$ and $|z^2 + 1| \ge R^2 - 1$, so
$$\left|\int_{C_R}f\,dz\right| \le \frac{[\ln(R + 1) + \pi]\pi R}{R^2 - 1} \to 0 \quad (R \to \infty)$$

5. **Real-axis integral:**
$$\int_{-\infty}^{\infty}\frac{\frac12\ln(1 + x^2) + i\arg(x + i)}{1 + x^2}dx = \pi\ln2 + \frac{i\pi^2}{2}$$
   Equate real parts. The integrand is even, so
$$\frac12\int_{-\infty}^{\infty}\frac{\ln(1 + x^2)}{1 + x^2}dx = \int_0^\infty\frac{\ln(1 + x^2)}{1 + x^2}dx = \pi\ln2$$
   (Imaginary parts: $\int\arg(x + i)/(1 + x^2)dx = \pi^2/2$, a consistency check, since $\arg(x + i) = \pi/2 - \tan^{-1}x$.)

6. **Numerical check:** quadrature gives 2.177586 = π ln 2 ✓.

**Result:** $\displaystyle\int_0^\infty\frac{\ln(1 + x^2)}{1 + x^2}dx = \pi\ln2 \approx 2.1776$.`,
          answer: String.raw`∮ log(z + i)/(z² + 1) over the upper semicircle (cut below −i): 2πi·log(2i)/(2i) = π ln 2 + iπ²/2, arc → 0; real part = ∫_{−∞}^{∞} ½ln(1 + x²)/(1 + x²)dx ⇒ ∫₀^∞ ln(1 + x²)/(1 + x²)dx = π ln 2 ≈ 2.178.` }
      ] }
  ]
});
