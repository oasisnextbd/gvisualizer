QB.paper({
  year: "2022-23", date: "26/05/2024", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engineering Examinations 2022-2023, MATH 327 (Multivariable Statistical Analysis and Complex Analysis), 3 hours, 210 marks (held 26/05/2024; the printed date 05/05/2024 is struck out). Section A (complex analysis): four questions, answer any THREE. Section B: four questions, answer any THREE. Use separate scripts for each section; symbols have their usual meaning.`,
  questions: [
    { id: "2022-23-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q1a", label: "(a)", marks: "12",
          topic: "complex-algebra", sub: "Proof of the triangle inequalities |z₁ + z₂| ≤ |z₁| + |z₂| and |z₁ − z₂| ≥ ||z₁| − |z₂||",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Prove the triangle inequalities

(i) $|z_1 + z_2| \le |z_1| + |z_2|$

(ii) $|z_1 - z_2| \ge \big||z_1| - |z_2|\big|$`,
          solution: String.raw`**Facts used:** $|z|^2 = z\bar z$, $\overline{z_1 + z_2} = \bar z_1 + \bar z_2$, $z + \bar z = 2\,\mathrm{Re}\,z$, $\mathrm{Re}\,z \le |z|$ and $|\bar z| = |z|$.

1. **(i) Expand $|z_1 + z_2|^2$:**
$$|z_1 + z_2|^2 = (z_1 + z_2)(\bar z_1 + \bar z_2) = |z_1|^2 + |z_2|^2 + z_1\bar z_2 + \bar z_1z_2$$
   Since $\bar z_1z_2 = \overline{z_1\bar z_2}$, the last two terms add to $2\,\mathrm{Re}(z_1\bar z_2)$:
$$|z_1 + z_2|^2 = |z_1|^2 + |z_2|^2 + 2\,\mathrm{Re}(z_1\bar z_2)$$

2. **Bound the real part.** $\mathrm{Re}(z_1\bar z_2) \le |z_1\bar z_2| = |z_1||z_2|$, so
$$|z_1 + z_2|^2 \le |z_1|^2 + 2|z_1||z_2| + |z_2|^2 = (|z_1| + |z_2|)^2$$
   Both sides are non-negative, so taking square roots gives
$$\boxed{|z_1 + z_2| \le |z_1| + |z_2|}$$
   Equality holds when $z_1\bar z_2$ is real and non-negative, i.e. when $z_1$ and $z_2$ point in the same direction.

3. **(ii) Apply (i) to $z_1 = (z_1 - z_2) + z_2$:**
$$|z_1| \le |z_1 - z_2| + |z_2| \;\Rightarrow\; |z_1 - z_2| \ge |z_1| - |z_2|$$
   Interchanging $z_1$ and $z_2$ (and using $|z_2 - z_1| = |z_1 - z_2|$):
$$|z_1 - z_2| \ge |z_2| - |z_1| = -(|z_1| - |z_2|)$$

4. **Combine.** $|z_1 - z_2|$ is at least both $(|z_1| - |z_2|)$ and $-(|z_1| - |z_2|)$, hence
$$\boxed{|z_1 - z_2| \ge \big||z_1| - |z_2|\big|}$$

**Geometric meaning:** in the triangle with vertices 0, $z_1$ and $z_1 + z_2$, no side is longer than the sum of the other two, and no side is shorter than the difference of the other two.`,
          answer: String.raw`|z₁ + z₂|² = |z₁|² + |z₂|² + 2Re(z₁z̄₂) ≤ (|z₁| + |z₂|)² since Re(z₁z̄₂) ≤ |z₁||z₂| ⇒ (i). Applying (i) to z₁ = (z₁ − z₂) + z₂ and to z₂ = (z₂ − z₁) + z₁ gives |z₁ − z₂| ≥ ±(|z₁| − |z₂|) ⇒ (ii).` },
        { id: "2022-23-Q1b", label: "(b)", marks: "12",
          topic: "complex-algebra", sub: "Fourth roots of −8 − 8√3 i: rectangular form, sketch, principal root",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find the roots of the equation $z^4 + 8 + 8\sqrt3\,i = 0$ in rectangular coordinates, exhibit them geometrically, and point out which is the principal root.`,
          solution: String.raw`**Given:** $z^4 = -8 - 8\sqrt3\,i$.

**Find:** the four roots in the form $x + iy$, a sketch, and the principal root.

1. **Polar form of the right side.** The modulus is $r = \sqrt{64 + 192} = 16$. The point $(-8, -8\sqrt3)$ is in the third quadrant with reference angle $\tan^{-1}\sqrt3 = \pi/3$, so the principal argument is
$$\theta = -\pi + \frac{\pi}{3} = -\frac{2\pi}{3}, \qquad -8 - 8\sqrt3\,i = 16\,e^{i(-2\pi/3 + 2k\pi)}$$

2. **De Moivre's theorem:**
$$z_k = 16^{1/4}\exp\left[i\,\frac{-2\pi/3 + 2k\pi}{4}\right] = 2\exp\left[i\left(-\frac{\pi}{6} + \frac{k\pi}{2}\right)\right], \qquad k = 0, 1, 2, 3$$

3. **Rectangular form:**

| k | argument | $z_k = 2(\cos\theta_k + i\sin\theta_k)$ |
|---|---|---|
| 0 | $-\pi/6$ (−30°) | $\sqrt3 - i$ |
| 1 | $\pi/3$ (60°) | $1 + \sqrt3\,i$ |
| 2 | $5\pi/6$ (150°) | $-\sqrt3 + i$ |
| 3 | $4\pi/3$ (240°) | $-1 - \sqrt3\,i$ |

   Check: $(\sqrt3 - i)^2 = 2 - 2\sqrt3\,i$, and $(2 - 2\sqrt3\,i)^2 = 4 - 8\sqrt3\,i - 12 = -8 - 8\sqrt3\,i$ ✓.

4. **Geometry.** All four roots lie on the circle $|z| = 2$, spaced $2\pi/4 = 90°$ apart, so they are the vertices of a square inscribed in that circle.

![The four roots on the circle of radius 2, at −30°, 60°, 150° and 240°; the principal root √3 − i is marked](fig/2022-23-Q1b-sol.svg)

5. **Principal root.** The principal root uses the principal argument $-2\pi/3$ (in $(-\pi, \pi]$), i.e. k = 0:
$$z_0 = 2e^{-i\pi/6} = \sqrt3 - i$$

**Result:** $\sqrt3 - i$, $1 + \sqrt3\,i$, $-\sqrt3 + i$, $-1 - \sqrt3\,i$; principal root $\sqrt3 - i$.`,
          answer: String.raw`z⁴ = 16e^{−2πi/3} ⇒ z = 2e^{i(−π/6 + kπ/2)}: √3 − i, 1 + √3 i, −√3 + i, −1 − √3 i (vertices of a square on |z| = 2); principal root √3 − i.` },
        { id: "2022-23-Q1c", label: "(c)", marks: "11",
          topic: "complex-algebra", sub: "Roots of z⁴ + 4 = 0 and factorization into real quadratics",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find four roots of the equation $z^4 + 4 = 0$ and use them factorize $z^4 + 4$ into quadratic factors with real coefficients.`,
          solution: String.raw`1. **Polar form:** $z^4 = -4 = 4e^{i(\pi + 2k\pi)}$, so
$$z_k = \sqrt2\exp\left[i\,\frac{\pi + 2k\pi}{4}\right], \qquad k = 0, 1, 2, 3$$

2. **The four roots:**
$$z_0 = \sqrt2 e^{i\pi/4} = 1 + i, \quad z_1 = \sqrt2 e^{3i\pi/4} = -1 + i, \quad z_2 = \sqrt2 e^{5i\pi/4} = -1 - i, \quad z_3 = \sqrt2 e^{7i\pi/4} = 1 - i$$
   Check: $(1 + i)^2 = 2i$ and $(2i)^2 = -4$ ✓.

3. **Group conjugate pairs.** Since the polynomial has real coefficients, the roots come in conjugate pairs:
$$(z - (1 + i))(z - (1 - i)) = (z - 1)^2 + 1 = z^2 - 2z + 2$$
$$(z - (-1 + i))(z - (-1 - i)) = (z + 1)^2 + 1 = z^2 + 2z + 2$$

4. **Factorization:**
$$\boxed{z^4 + 4 = (z^2 - 2z + 2)(z^2 + 2z + 2)}$$
   Check: $(z^2 + 2)^2 - (2z)^2 = z^4 + 4z^2 + 4 - 4z^2 = z^4 + 4$ ✓.`,
          answer: String.raw`Roots ±1 ± i (z = √2e^{i(π + 2kπ)/4}); z⁴ + 4 = (z² − 2z + 2)(z² + 2z + 2).` }
      ] },
    { id: "2022-23-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q2a", label: "(a)", marks: "17",
          topic: "analytic", sub: "Analytic and harmonic functions; f(z) = |z|² is differentiable only at z = 0",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Define analytic function and harmonic function. Show that the function $f(z) = |z|^2$ is differentiable only at $z = 0$ and nowhere else.`,
          solution: String.raw`### Definitions
- **Analytic function:** $f(z)$ is analytic at a point $z_0$ if it is differentiable at $z_0$ **and at every point of some neighbourhood** of $z_0$. It is analytic in a region if it is analytic at every point of that region. (Also called regular or holomorphic; a function analytic in the whole plane is entire.)
- **Harmonic function:** a real function $u(x, y)$ with continuous second partial derivatives that satisfies **Laplace's equation**
$$\nabla^2u = \frac{\partial^2u}{\partial x^2} + \frac{\partial^2u}{\partial y^2} = 0$$
  The real and imaginary parts of an analytic function are harmonic.

### $f(z) = |z|^2$
1. **Real and imaginary parts.** $f = x^2 + y^2$, so $u = x^2 + y^2$ and $v = 0$.

2. **Cauchy–Riemann equations** (necessary for differentiability):
$$u_x = 2x,\quad v_y = 0 \;\Rightarrow\; u_x = v_y \text{ only if } x = 0; \qquad u_y = 2y,\quad -v_x = 0 \;\Rightarrow\; u_y = -v_x \text{ only if } y = 0$$
   Both hold only at $x = y = 0$. So f is **not differentiable at any $z \ne 0$**.

3. **At $z = 0$, from the definition:**
$$f'(0) = \lim_{\Delta z\to0}\frac{|\Delta z|^2 - 0}{\Delta z} = \lim_{\Delta z\to0}\frac{\Delta z\,\overline{\Delta z}}{\Delta z} = \lim_{\Delta z\to0}\overline{\Delta z} = 0$$
   The limit exists (and is 0) whatever the direction of approach, so f is **differentiable at 0** with $f'(0) = 0$. (The partial derivatives are continuous everywhere and satisfy C–R at 0, which also gives differentiability there.)

4. **Direct check at $z_0 \ne 0$:**
$$\frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z} = \bar z_0 + \overline{\Delta z} + z_0\frac{\overline{\Delta z}}{\Delta z}$$
   Along the real axis ($\Delta z = \Delta x$) the limit is $\bar z_0 + z_0$; along the imaginary axis ($\Delta z = i\Delta y$) it is $\bar z_0 - z_0$. These differ unless $z_0 = 0$, so no derivative exists.

**Conclusion:** $|z|^2$ is differentiable only at $z = 0$. It is therefore **nowhere analytic**, since there is no neighbourhood of 0 in which it is differentiable.`,
          answer: String.raw`Analytic: differentiable at z₀ and throughout a neighbourhood; harmonic: u_xx + u_yy = 0. For |z|²: u = x² + y², v = 0; C–R (2x = 0, 2y = 0) hold only at 0, where f′(0) = lim Δz̄ = 0. So differentiable only at z = 0 (analytic nowhere).` },
        { id: "2022-23-Q2b", label: "(b)", marks: "18",
          topic: "analytic", sub: "u = 2x − x³ + 3xy² is harmonic; harmonic conjugate v and f(z) = 2z − z³",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that $u(x, y) = 2x - x^3 + 3xy^2$ is harmonic and find a harmonic conjugate $v(x, y)$. Then express $f(z) = u + iv$ in terms of z.`,
          solution: String.raw`1. **Harmonic:**
$$u_x = 2 - 3x^2 + 3y^2, \quad u_{xx} = -6x; \qquad u_y = 6xy, \quad u_{yy} = 6x$$
$$u_{xx} + u_{yy} = -6x + 6x = 0$$
   u has continuous second derivatives and satisfies Laplace's equation, so it is harmonic.

2. **First C–R equation, $v_y = u_x$:**
$$v = \int(2 - 3x^2 + 3y^2)\,dy = 2y - 3x^2y + y^3 + \phi(x)$$

3. **Second C–R equation, $v_x = -u_y$:**
$$v_x = -6xy + \phi'(x) = -6xy \;\Rightarrow\; \phi'(x) = 0 \;\Rightarrow\; \phi = C$$
$$\boxed{v(x, y) = 2y - 3x^2y + y^3 + C}$$

4. **f in terms of z** (Milne–Thomson: put $x = z$, $y = 0$):
$$f(z) = u(z, 0) + iv(z, 0) = 2z - z^3 + iC$$
   Check: $z^3 = (x + iy)^3 = x^3 - 3xy^2 + i(3x^2y - y^3)$, so $2z - z^3 = (2x - x^3 + 3xy^2) + i(2y - 3x^2y + y^3)$ ✓.

**Result:** $v = 2y - 3x^2y + y^3 + C$, $f(z) = 2z - z^3 + iC$.`,
          answer: String.raw`u_xx + u_yy = −6x + 6x = 0; v = 2y − 3x²y + y³ + C; f(z) = 2z − z³ + iC.` }
      ] },
    { id: "2022-23-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q3a", label: "(a)", marks: "18",
          topic: "complex-integration", sub: "∫ z̄ dz from 0 to 4 + 2i along z = t² + it and along 0 → 2i → 4 + 2i",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate $\displaystyle\int_C\bar z\,dz$ from $z = 0$ to $z = 4 + 2i$ along the curve C given by (i) $z = t^2 + it$; (ii) the line from $z = 0$ to $z = 2i$ and then from $z = 2i$ to $z = 4 + 2i$.`,
          solution: String.raw`![The parabola z = t² + it and the broken line 0 → 2i → 4 + 2i, with the two values of the integral](fig/2022-23-Q3a-sol.svg)

1. **(i) Parametrize.** $z = t^2 + it$ goes from 0 ($t = 0$) to $4 + 2i$ ($t = 2$). Then $\bar z = t^2 - it$ and $dz = (2t + i)\,dt$:
$$\bar z\,dz = (t^2 - it)(2t + i)\,dt = (2t^3 + it^2 - 2it^2 + t)\,dt = (2t^3 + t - it^2)\,dt$$
$$\int_C\bar z\,dz = \int_0^2(2t^3 + t)\,dt - i\int_0^2t^2\,dt = \left[\frac{t^4}{2} + \frac{t^2}{2}\right]_0^2 - i\left[\frac{t^3}{3}\right]_0^2 = 10 - \frac{8}{3}i$$

2. **(ii) First segment, 0 to 2i:** $z = iy$, $0 \le y \le 2$, so $\bar z = -iy$ and $dz = i\,dy$:
$$\int\bar z\,dz = \int_0^2(-iy)(i\,dy) = \int_0^2y\,dy = 2$$

3. **(ii) Second segment, 2i to 4 + 2i:** $z = x + 2i$, $0 \le x \le 4$, so $\bar z = x - 2i$ and $dz = dx$:
$$\int\bar z\,dz = \int_0^4(x - 2i)\,dx = 8 - 8i$$
   Total along (ii): $2 + 8 - 8i = 10 - 8i$.

4. **Comment.** The two results differ because $\bar z$ is not analytic (it fails the C–R equations everywhere), so its integral depends on the path. Check: going out along (i) and back along (ii) is an anticlockwise loop round the region between the parabola $x = y^2$ and the y-axis/top line, of area $\int_0^2y^2\,dy = 8/3$. For such a loop $\oint\bar z\,dz = 2i\times\text{area} = 16i/3$, and indeed $(10 - \tfrac83i) - (10 - 8i) = \tfrac{16}{3}i$ ✓.

**Result:** (i) $10 - \dfrac{8}{3}i$; (ii) $10 - 8i$.`,
          answer: String.raw`(i) z = t² + it, z̄dz = (2t³ + t − it²)dt ⇒ 10 − 8i/3. (ii) 0 → 2i gives 2, 2i → 4 + 2i gives 8 − 8i ⇒ 10 − 8i. Different: z̄ is not analytic, so the integral is path-dependent.` },
        { id: "2022-23-Q3b", label: "(b)", marks: "17",
          topic: "complex-integration", sub: "Cauchy's integral formula: ∮ (z + 1)/(z² − 2z) dz on |z| = 3",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`State Cauchy's Integral formula and use Cauchy's Integral formula to evaluate the integral $\displaystyle\oint_C\frac{z + 1}{z^2 - 2z}\,dz$, where C the circle $|z| = 3$ described in the positive sense.`,
          solution: String.raw`### Cauchy's integral formula
If $f(z)$ is analytic inside and on a simple closed contour C (taken in the positive, anticlockwise sense) and $z_0$ is any point inside C, then
$$f(z_0) = \frac{1}{2\pi i}\oint_C\frac{f(z)}{z - z_0}\,dz, \qquad\text{and}\qquad f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z - z_0)^{n+1}}\,dz$$

### Evaluation
1. **Singular points:** $z^2 - 2z = z(z - 2) = 0$ at $z = 0$ and $z = 2$. Both lie inside $|z| = 3$.

2. **Partial fractions:**
$$\frac{z + 1}{z(z - 2)} = \frac{A}{z} + \frac{B}{z - 2}, \qquad A = \frac{0 + 1}{0 - 2} = -\frac12, \quad B = \frac{2 + 1}{2} = \frac32$$

3. **Apply the formula to each term** with $f(z) = 1$ (analytic everywhere):
$$\oint_C\frac{dz}{z} = 2\pi i, \qquad \oint_C\frac{dz}{z - 2} = 2\pi i$$
$$\oint_C\frac{z + 1}{z^2 - 2z}\,dz = -\frac12(2\pi i) + \frac32(2\pi i) = 2\pi i$$

   **Alternative (separate small circles $C_1$ round 0 and $C_2$ round 2):**
$$\oint_{C_1}\frac{(z + 1)/(z - 2)}{z}\,dz = 2\pi i\left[\frac{z + 1}{z - 2}\right]_{z=0} = -\pi i, \qquad \oint_{C_2}\frac{(z + 1)/z}{z - 2}\,dz = 2\pi i\left[\frac{z + 1}{z}\right]_{z=2} = 3\pi i$$
   Sum: $2\pi i$ ✓.

**Result:** $\displaystyle\oint_C\frac{z + 1}{z^2 - 2z}\,dz = 2\pi i$.`,
          answer: String.raw`f(z₀) = (1/2πi)∮ f(z)/(z − z₀) dz. Poles 0 and 2 inside |z| = 3: (z + 1)/(z(z − 2)) = −½/z + (3/2)/(z − 2) ⇒ integral = 2πi(−½ + 3/2) = 2πi.` }
      ] },
    { id: "2022-23-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q4a", label: "(a)", marks: "18",
          topic: "series", sub: "Laurent series of 1/(z(z − 2)) in 1 < |z| < 2 and in |z| > 2",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Expand $f(z) = \dfrac{1}{z(z - 2)}$ in a Laurent series valid for (i) $1 < |z| < 2$, (ii) $|z| > 2$.`,
          solution: String.raw`1. **Partial fractions:**
$$f(z) = \frac{1}{z(z - 2)} = \frac12\left[\frac{1}{z - 2} - \frac{1}{z}\right]$$
   The term $-1/(2z)$ is already a Laurent term about $z = 0$; only $1/(z - 2)$ must be expanded.

2. **(i) $1 < |z| < 2$:** here $|z/2| < 1$, so expand in powers of $z/2$:
$$\frac{1}{z - 2} = -\frac12\cdot\frac{1}{1 - z/2} = -\frac12\sum_{n=0}^{\infty}\left(\frac z2\right)^n$$
$$\boxed{f(z) = -\frac{1}{2z} - \sum_{n=0}^{\infty}\frac{z^n}{2^{n+2}} = -\frac{1}{2z} - \frac14 - \frac z8 - \frac{z^2}{16} - \cdots}$$
   (The expansion actually holds in $0 < |z| < 2$; the annulus $1 < |z| < 2$ lies inside it.)

3. **(ii) $|z| > 2$:** now $|2/z| < 1$, so expand in powers of $2/z$:
$$\frac{1}{z - 2} = \frac1z\cdot\frac{1}{1 - 2/z} = \sum_{n=0}^{\infty}\frac{2^n}{z^{n+1}} = \frac1z + \frac{2}{z^2} + \frac{4}{z^3} + \cdots$$
$$f(z) = \frac12\left[\frac1z + \frac{2}{z^2} + \frac{4}{z^3} + \cdots - \frac1z\right]$$
$$\boxed{f(z) = \sum_{n=2}^{\infty}\frac{2^{n-2}}{z^n} = \frac{1}{z^2} + \frac{2}{z^3} + \frac{4}{z^4} + \frac{8}{z^5} + \cdots}$$

4. **Check (ii):** for large z, $f \approx 1/z^2$ ✓. Check (i) at $z = 1.5$: the series gives $-0.3333 - 0.25 - 0.1875 - 0.1406 - \cdots \to -1.3333$, and $1/(1.5 \times (-0.5)) = -1.3333$ ✓.

**Result:** (i) $-\dfrac{1}{2z} - \displaystyle\sum_{n\ge0}\frac{z^n}{2^{n+2}}$; (ii) $\displaystyle\sum_{n\ge2}\frac{2^{n-2}}{z^n}$.`,
          answer: String.raw`f = ½[1/(z − 2) − 1/z]. (i) 1 < |z| < 2: f = −1/(2z) − Σ zⁿ/2ⁿ⁺² = −1/(2z) − 1/4 − z/8 − …; (ii) |z| > 2: f = Σ_{n≥2} 2ⁿ⁻²/zⁿ = 1/z² + 2/z³ + 4/z⁴ + ….` },
        { id: "2022-23-Q4b", label: "(b)", marks: "17",
          topic: "residues", sub: "Residue theorem: ∮ (3z³ + 2)/((z − 1)(z² + 9)) dz on |z| = 4",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Using residue theorem find the value of the integral $\displaystyle\oint_C\frac{3z^3 + 2}{(z - 1)(z^2 + 9)}\,dz$, taken counterclockwise around the circle C with equation $|z| = 4$ described in the positive sense.`,
          solution: String.raw`**Residue theorem:** $\oint_Cf(z)\,dz = 2\pi i\sum(\text{residues of } f \text{ at the poles inside } C)$.

1. **Poles:** $z = 1$ and $z = \pm3i$, all simple. $|1| = 1$ and $|\pm3i| = 3$ are less than 4, so all three are inside C.

2. **Residue at $z = 1$:**
$$\mathrm{Res}_{z=1} = \lim_{z\to1}(z - 1)f(z) = \frac{3 + 2}{1 + 9} = \frac12$$

3. **Residue at $z = 3i$:**
$$\mathrm{Res}_{z=3i} = \lim_{z\to3i}(z - 3i)f(z) = \frac{3(3i)^3 + 2}{(3i - 1)(6i)} = \frac{2 - 81i}{-18 - 6i}$$
   Multiply by the conjugate: $\dfrac{(2 - 81i)(-18 + 6i)}{324 + 36} = \dfrac{-36 + 12i + 1458i + 486}{360} = \dfrac{450 + 1470i}{360} = \dfrac54 + \dfrac{49}{12}i$

4. **Residue at $z = -3i$** (the conjugate, because f has real coefficients):
$$\mathrm{Res}_{z=-3i} = \frac54 - \frac{49}{12}i$$

5. **Sum and integral:**
$$\sum\mathrm{Res} = \frac12 + \frac54 + \frac54 = 3, \qquad \oint_C f(z)\,dz = 2\pi i(3) = 6\pi i$$
   Check: f → 3 + 3/z + … for large z, so the sum of all finite residues equals the coefficient of 1/z, which is 3 ✓.

**Result:** $\displaystyle\oint_C\frac{3z^3 + 2}{(z - 1)(z^2 + 9)}\,dz = 6\pi i$.`,
          answer: String.raw`Poles 1, ±3i inside |z| = 4; residues 1/2, 5/4 ± 49i/12; sum 3 ⇒ integral = 6πi.` }
      ] },
    { id: "2022-23-Q5", q: 5, section: "B",
      stem: String.raw`Evaluate the following integrals by contour integration:`,
      parts: [
        { id: "2022-23-Q5a", label: "(a)", marks: "15",
          topic: "residues", sub: "∫₀^2π sin²θ/(5 − 4 cos θ) dθ = π/4 by the unit-circle substitution",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`$$\int_0^{2\pi}\frac{\sin^2\theta}{5 - 4\cos\theta}\,d\theta$$`,
          solution: String.raw`1. **Substitution** $z = e^{i\theta}$ (θ from 0 to 2π traces the unit circle $|z| = 1$ once):
$$\cos\theta = \frac{z + z^{-1}}{2}, \qquad \sin\theta = \frac{z - z^{-1}}{2i}, \qquad d\theta = \frac{dz}{iz}$$

2. **Transform each piece:**
$$\sin^2\theta = -\frac{(z^2 - 1)^2}{4z^2}, \qquad 5 - 4\cos\theta = 5 - 2\left(z + \frac1z\right) = -\frac{(2z - 1)(z - 2)}{z}$$
$$I = \oint_{|z|=1}\frac{-(z^2 - 1)^2}{4z^2}\cdot\frac{-z}{(2z - 1)(z - 2)}\cdot\frac{dz}{iz} = \oint_{|z|=1}\frac{(z^2 - 1)^2}{4i\,z^2(2z - 1)(z - 2)}\,dz$$

3. **Poles inside $|z| = 1$:** $z = 0$ (double) and $z = 1/2$ (simple). $z = 2$ is outside.

4. **Residue at $z = 1/2$:**
$$\mathrm{Res} = \frac{(1/4 - 1)^2}{4i(1/4)(2)(1/2 - 2)} = \frac{9/16}{4i(-3/4)} = \frac{9/16}{-3i} = \frac{3i}{16}$$

5. **Residue at $z = 0$** (order 2): with $h(z) = \dfrac{(z^2 - 1)^2}{4i(2z^2 - 5z + 2)}$,
$$\mathrm{Res} = h'(0) = \frac{1}{4i}\cdot\frac{2(z^2 - 1)(2z)(2z^2 - 5z + 2) - (z^2 - 1)^2(4z - 5)}{(2z^2 - 5z + 2)^2}\bigg|_{z=0} = \frac{1}{4i}\cdot\frac{0 + 5}{4} = \frac{5}{16i} = -\frac{5i}{16}$$

6. **Residue theorem:**
$$I = 2\pi i\left(\frac{3i}{16} - \frac{5i}{16}\right) = 2\pi i\left(-\frac{i}{8}\right) = \frac{\pi}{4}$$
   Check: numerical integration gives 0.785398 = π/4 ✓; also the standard result $\dfrac{2\pi}{b^2}\left(a - \sqrt{a^2 - b^2}\right) = \dfrac{2\pi}{16}(5 - 3) = \dfrac\pi4$ ✓.

**Result:** $\displaystyle\int_0^{2\pi}\frac{\sin^2\theta}{5 - 4\cos\theta}\,d\theta = \frac{\pi}{4}$.`,
          answer: String.raw`z = e^{iθ}: I = ∮ (z² − 1)²/[4i z²(2z − 1)(z − 2)] dz; residues at 0: −5i/16, at 1/2: 3i/16 ⇒ I = 2πi(−i/8) = π/4.` },
        { id: "2022-23-Q5b", label: "(b)", marks: "20",
          topic: "residues", sub: "∫ dx/(x⁴ + 1) over the real line = π/√2 by a semicircular contour",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`$$\int_{-\infty}^{\infty}\frac{1}{x^4 + 1}\,dx$$`,
          solution: String.raw`1. **Contour.** Take $f(z) = \dfrac{1}{z^4 + 1}$ and the closed contour C made of the segment $[-R, R]$ of the real axis and the semicircle $\Gamma: |z| = R$ in the upper half-plane, with $R > 1$.

2. **Poles:** $z^4 = -1 = e^{i(\pi + 2k\pi)}$ gives $z = e^{i\pi/4}, e^{3i\pi/4}, e^{5i\pi/4}, e^{7i\pi/4}$. Only $z_1 = e^{i\pi/4}$ and $z_2 = e^{3i\pi/4}$ lie in the upper half-plane, inside C.

3. **Residues** (simple poles, $\mathrm{Res} = 1/(4z^3) = z/(4z^4) = -z/4$ since $z^4 = -1$):
$$\mathrm{Res}_{z_1} = -\frac{e^{i\pi/4}}{4} = -\frac{1 + i}{4\sqrt2}, \qquad \mathrm{Res}_{z_2} = -\frac{e^{3i\pi/4}}{4} = -\frac{-1 + i}{4\sqrt2}$$
$$\sum\mathrm{Res} = -\frac{2i}{4\sqrt2} = -\frac{i}{2\sqrt2}$$

4. **Residue theorem:**
$$\oint_Cf\,dz = \int_{-R}^{R}\frac{dx}{x^4 + 1} + \int_\Gamma\frac{dz}{z^4 + 1} = 2\pi i\left(-\frac{i}{2\sqrt2}\right) = \frac{\pi}{\sqrt2}$$

5. **The semicircle contributes nothing as $R \to \infty$.** On Γ, $|z^4 + 1| \ge R^4 - 1$, so
$$\left|\int_\Gamma\frac{dz}{z^4 + 1}\right| \le \frac{\pi R}{R^4 - 1} \to 0$$

6. **Limit $R \to \infty$:**
$$\int_{-\infty}^{\infty}\frac{dx}{x^4 + 1} = \frac{\pi}{\sqrt2} \approx 2.2214$$
   Check: numerical integration gives 2.22144 ✓.

**Result:** $\dfrac{\pi}{\sqrt2}$.`,
          answer: String.raw`Upper-half-plane poles e^{iπ/4}, e^{3iπ/4}; residues −z/4, sum −i/(2√2); semicircle → 0 (≤ πR/(R⁴ − 1)) ⇒ ∫ = 2πi(−i/(2√2)) = π/√2 ≈ 2.221.` }
      ] },
    { id: "2022-23-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q6a", label: "(a)", marks: "8",
          topic: "multivariate-normal", sub: "Data matrix X (n × p): mean vector, covariance and correlation matrices and their relation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Let $X_{n\times p}$ be a data matrix containing n observations and p features. Derive the formulas of mean vector, covariance matrix, correlation matrix for the data matrix $X_{n\times p}$. What is the relationship between covariance and correlation?`,
          solution: String.raw`1. **Data matrix.** Row j is the j-th observation, column k the k-th variable:
$$X = \begin{bmatrix} x_{11} & x_{12} & \cdots & x_{1p} \\ x_{21} & x_{22} & \cdots & x_{2p} \\ \vdots & & & \vdots \\ x_{n1} & x_{n2} & \cdots & x_{np}\end{bmatrix}_{n\times p}$$

2. **Mean vector.** The sample mean of variable k is $\bar x_k = \frac1n\sum_{j=1}^nx_{jk}$. Collecting them, with $\mathbf 1$ the n × 1 vector of ones:
$$\bar{\mathbf x} = \begin{bmatrix}\bar x_1 \\ \vdots \\ \bar x_p\end{bmatrix}_{p\times1} = \frac1n X'\mathbf 1$$

3. **Covariance matrix.** Variances $s_{kk} = \frac1n\sum_j(x_{jk} - \bar x_k)^2$ and covariances $s_{ik} = \frac1n\sum_j(x_{ji} - \bar x_i)(x_{jk} - \bar x_k)$ form the symmetric matrix
$$S_n = \begin{bmatrix} s_{11} & s_{12} & \cdots & s_{1p} \\ s_{21} & s_{22} & \cdots & s_{2p} \\ \vdots & & & \vdots \\ s_{p1} & \cdots & & s_{pp}\end{bmatrix} = \frac1n\left(X - \mathbf 1\bar{\mathbf x}'\right)'\left(X - \mathbf 1\bar{\mathbf x}'\right)$$
   (With divisor $n - 1$ instead of n this is the unbiased sample covariance matrix S.)

4. **Correlation matrix.** The sample correlation of variables i and k is
$$r_{ik} = \frac{s_{ik}}{\sqrt{s_{ii}}\sqrt{s_{kk}}} = \frac{\sum_j(x_{ji} - \bar x_i)(x_{jk} - \bar x_k)}{\sqrt{\sum_j(x_{ji} - \bar x_i)^2}\sqrt{\sum_j(x_{jk} - \bar x_k)^2}}$$
$$R = \begin{bmatrix} 1 & r_{12} & \cdots & r_{1p} \\ r_{21} & 1 & \cdots & r_{2p} \\ \vdots & & & \vdots \\ r_{p1} & \cdots & & 1\end{bmatrix}$$

5. **Relationship.** With $D^{1/2} = \mathrm{diag}(\sqrt{s_{11}}, \ldots, \sqrt{s_{pp}})$ (the standard deviations):
$$R = D^{-1/2}S_nD^{-1/2}, \qquad S_n = D^{1/2}RD^{1/2}$$
   Correlation is the covariance of the **standardized** variables: it removes the units and scale, so $-1 \le r_{ik} \le 1$. Covariance keeps the units (product of the two variables' units) and can take any value. The same R results whether the divisor n or n − 1 is used.`,
          answer: String.raw`x̄ = (1/n)X′1; S_n = (1/n)(X − 1x̄′)′(X − 1x̄′) (s_ik = (1/n)Σ(x_ji − x̄_i)(x_jk − x̄_k)); r_ik = s_ik/√(s_ii s_kk), R = D^{−1/2}S_nD^{−1/2} with D = diag(s_kk): correlation = covariance of standardized variables (unit-free, −1 ≤ r ≤ 1).` },
        { id: "2022-23-Q6b", label: "(b)", marks: "20",
          topic: "multivariate-normal", sub: "7 × 2 data: mean vector, covariance matrix S_n, correlation matrix R and scatter plot",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate mean vector, covariance matrix, correlation matrix for the data matrix below. Interpret the correlation matrix graphically.

| $x_1$ | $x_2$ |
|---|---|
| 3 | 5 |
| 4 | 5.5 |
| 2 | 4 |
| 6 | 7 |
| 8 | 10 |
| 2 | 5 |
| 5 | 7.5 |`,
          solution: String.raw`**Given:** n = 7 observations of p = 2 variables. **Method (lecture notes):** $\bar{\mathbf x}$, then $S_n = \frac1n(X - \bar X)'(X - \bar X)$ and $R$.

1. **Mean vector:**
$$\bar x_1 = \frac{3 + 4 + 2 + 6 + 8 + 2 + 5}{7} = \frac{30}{7} = 4.286, \qquad \bar x_2 = \frac{5 + 5.5 + 4 + 7 + 10 + 5 + 7.5}{7} = \frac{44}{7} = 6.286$$
$$\bar{\mathbf x} = \begin{bmatrix}4.286 \\ 6.286\end{bmatrix}$$

2. **Deviations and products:**

| $x_1 - \bar x_1$ | $x_2 - \bar x_2$ | $(x_1 - \bar x_1)^2$ | $(x_2 - \bar x_2)^2$ | product |
|---|---|---|---|---|
| −1.286 | −1.286 | 1.653 | 1.653 | 1.653 |
| −0.286 | −0.786 | 0.082 | 0.617 | 0.224 |
| −2.286 | −2.286 | 5.224 | 5.224 | 5.224 |
| 1.714 | 0.714 | 2.939 | 0.510 | 1.224 |
| 3.714 | 3.714 | 13.796 | 13.796 | 13.796 |
| −2.286 | −1.286 | 5.224 | 1.653 | 2.939 |
| 0.714 | 1.214 | 0.510 | 1.474 | 0.867 |
| **Sum** | | **29.429** | **24.929** | **25.929** |

3. **Covariance matrix** (divisor n = 7):
$$s_{11} = \frac{29.429}{7} = 4.204, \quad s_{22} = \frac{24.929}{7} = 3.561, \quad s_{12} = \frac{25.929}{7} = 3.704$$
$$S_n = \begin{bmatrix}4.204 & 3.704 \\ 3.704 & 3.561\end{bmatrix}$$
   (With divisor $n - 1 = 6$: $S = \begin{bmatrix}4.905 & 4.321 \\ 4.321 & 4.155\end{bmatrix}$.)

4. **Correlation matrix:**
$$r_{12} = \frac{s_{12}}{\sqrt{s_{11}s_{22}}} = \frac{3.704}{\sqrt{4.204 \times 3.561}} = \frac{3.704}{3.869} = 0.957, \qquad R = \begin{bmatrix}1 & 0.957 \\ 0.957 & 1\end{bmatrix}$$

5. **Graphical interpretation:**

![Scatter plot of the seven observations with the mean point; the points lie close to a rising straight line](fig/2022-23-Q6b-sol.svg)

   - The off-diagonal $r_{12} = 0.957$ is close to +1: a **strong positive linear relation**. On the scatter plot the points lie in a narrow band around a rising straight line through $\bar{\mathbf x}$.
   - Large $x_1$ goes with large $x_2$, so the two variables carry largely the same information (useful for PCA: one component would explain most of the variation).
   - The diagonal ones are each variable's correlation with itself.

**Result:** $\bar{\mathbf x} = (4.286, 6.286)'$, $S_n = \begin{bmatrix}4.204 & 3.704 \\ 3.704 & 3.561\end{bmatrix}$, $r_{12} = 0.957$.`,
          answer: String.raw`x̄ = (30/7, 44/7) = (4.286, 6.286); S_n = [[4.204, 3.704], [3.704, 3.561]] (S with n − 1: [[4.905, 4.321], [4.321, 4.155]]); r₁₂ = 0.957 ⇒ strong positive linear association (points along a rising line).` },
        { id: "2022-23-Q6c", label: "(c)", marks: "7",
          topic: "multivariate-normal", sub: "Multivariate (normal) distribution versus the univariate normal",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is the multivariate distribution, and how does it differ from the univariate normal distribution?`,
          solution: String.raw`**Multivariate distribution:** the joint probability distribution of a random **vector** $\mathbf X = (X_1, X_2, \ldots, X_p)'$, i.e. of several variables measured together. It describes each variable and also how the variables vary together. The most important one is the **multivariate normal** $N_p(\mathbf\mu, \Sigma)$:
$$f(\mathbf x) = \frac{1}{(2\pi)^{p/2}|\Sigma|^{1/2}}\exp\left[-\frac12(\mathbf x - \mathbf\mu)'\Sigma^{-1}(\mathbf x - \mathbf\mu)\right], \qquad -\infty < x_i < \infty$$

| | Univariate normal $N(\mu, \sigma^2)$ | Multivariate normal $N_p(\mathbf\mu, \Sigma)$ |
|---|---|---|
| Variable | one scalar X | a p × 1 vector X |
| Parameters | mean μ, variance σ² | mean vector μ (p × 1), covariance matrix Σ (p × p, symmetric, positive definite) |
| Density | $\dfrac{1}{\sqrt{2\pi}\sigma}e^{-\frac12[(x - \mu)/\sigma]^2}$ | as above |
| Distance in the exponent | $\left(\frac{x - \mu}{\sigma}\right)^2$ | Mahalanobis distance $(\mathbf x - \mathbf\mu)'\Sigma^{-1}(\mathbf x - \mathbf\mu)$ |
| Shape | bell curve | bell-shaped surface; contours of constant density are ellipsoids |
| Dependence | — | correlations between the variables are part of the model (Σ) |

**Key differences:** the multivariate form accounts for the correlation between variables, so it cannot be built by treating each variable separately unless Σ is diagonal (then the variables are independent and the density is the product of univariate normals). Its marginals and conditional distributions and all linear combinations $\mathbf a'\mathbf X$ are again normal. For p = 1 it reduces to the univariate normal.`,
          answer: String.raw`Multivariate distribution = joint distribution of a random vector (e.g. N_p(μ, Σ) with density (2π)^{−p/2}|Σ|^{−1/2}exp[−½(x − μ)′Σ⁻¹(x − μ)]). Unlike the univariate N(μ, σ²) it has a mean vector and covariance matrix, uses the Mahalanobis distance, has ellipsoidal contours and models the correlation between variables; it reduces to the univariate case for p = 1.` }
      ] },
    { id: "2022-23-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q7a", label: "(a)", marks: "10",
          topic: "multivariate-normal", sub: "Derivation of the bivariate normal probability density function",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the probability density function for the bivariate normal distribution.`,
          solution: String.raw`1. **Start from the univariate normal and generalize** (lecture notes, Ch. 2). The univariate density
$$f(x) = \frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac12\left(\frac{x - \mu}{\sigma}\right)^2}$$
   has the squared distance $\left(\frac{x - \mu}{\sigma}\right)^2 = (x - \mu)(\sigma^2)^{-1}(x - \mu)$. For a p × 1 vector this becomes $(\mathbf x - \mathbf\mu)'\Sigma^{-1}(\mathbf x - \mathbf\mu)$, and the constant $(2\pi)^{-1/2}(\sigma^2)^{-1/2}$ becomes $(2\pi)^{-p/2}|\Sigma|^{-1/2}$:
$$f(\mathbf x) = \frac{1}{(2\pi)^{p/2}|\Sigma|^{1/2}}e^{-\frac12(\mathbf x - \mathbf\mu)'\Sigma^{-1}(\mathbf x - \mathbf\mu)}$$

2. **Bivariate case, p = 2:**
$$\mathbf x = \begin{bmatrix}x_1 \\ x_2\end{bmatrix}, \quad \mathbf\mu = \begin{bmatrix}\mu_1 \\ \mu_2\end{bmatrix}, \quad \Sigma = \begin{bmatrix}\sigma_{11} & \sigma_{12} \\ \sigma_{12} & \sigma_{22}\end{bmatrix}, \quad \rho_{12} = \frac{\sigma_{12}}{\sqrt{\sigma_{11}}\sqrt{\sigma_{22}}}$$
   so $\sigma_{12} = \rho_{12}\sqrt{\sigma_{11}\sigma_{22}}$.

3. **Determinant and inverse:**
$$|\Sigma| = \sigma_{11}\sigma_{22} - \sigma_{12}^2 = \sigma_{11}\sigma_{22}(1 - \rho_{12}^2)$$
$$\Sigma^{-1} = \frac{1}{\sigma_{11}\sigma_{22}(1 - \rho_{12}^2)}\begin{bmatrix}\sigma_{22} & -\rho_{12}\sqrt{\sigma_{11}\sigma_{22}} \\ -\rho_{12}\sqrt{\sigma_{11}\sigma_{22}} & \sigma_{11}\end{bmatrix}$$

4. **Quadratic form:**
$$(\mathbf x - \mathbf\mu)'\Sigma^{-1}(\mathbf x - \mathbf\mu) = \frac{\sigma_{22}(x_1 - \mu_1)^2 + \sigma_{11}(x_2 - \mu_2)^2 - 2\rho_{12}\sqrt{\sigma_{11}\sigma_{22}}(x_1 - \mu_1)(x_2 - \mu_2)}{\sigma_{11}\sigma_{22}(1 - \rho_{12}^2)}$$
$$= \frac{1}{1 - \rho_{12}^2}\left[\left(\frac{x_1 - \mu_1}{\sqrt{\sigma_{11}}}\right)^2 + \left(\frac{x_2 - \mu_2}{\sqrt{\sigma_{22}}}\right)^2 - 2\rho_{12}\left(\frac{x_1 - \mu_1}{\sqrt{\sigma_{11}}}\right)\left(\frac{x_2 - \mu_2}{\sqrt{\sigma_{22}}}\right)\right]$$

5. **Constant term:** $(2\pi)^{2/2}|\Sigma|^{1/2} = 2\pi\sqrt{\sigma_{11}\sigma_{22}(1 - \rho_{12}^2)}$.

6. **Bivariate normal density:**
$$\boxed{f(x_1, x_2) = \frac{1}{2\pi\sqrt{\sigma_{11}\sigma_{22}(1 - \rho_{12}^2)}}\exp\left\{-\frac{1}{2(1 - \rho_{12}^2)}\left[\left(\frac{x_1 - \mu_1}{\sqrt{\sigma_{11}}}\right)^2 + \left(\frac{x_2 - \mu_2}{\sqrt{\sigma_{22}}}\right)^2 - 2\rho_{12}\frac{(x_1 - \mu_1)(x_2 - \mu_2)}{\sqrt{\sigma_{11}}\sqrt{\sigma_{22}}}\right]\right\}}$$
   for $-\infty < x_1, x_2 < \infty$, $|\rho_{12}| < 1$.

7. **Special case:** if $\rho_{12} = 0$ the density factorizes into $f(x_1)f(x_2)$, two univariate normals: for normal variables, zero correlation means independence.`,
          answer: String.raw`Replace ((x − μ)/σ)² by (x − μ)′Σ⁻¹(x − μ) and the constant by (2π)^{p/2}|Σ|^{1/2}; with p = 2, |Σ| = σ₁₁σ₂₂(1 − ρ²): f(x₁, x₂) = [2π√(σ₁₁σ₂₂(1 − ρ²))]⁻¹ exp{−[z₁² + z₂² − 2ρz₁z₂]/(2(1 − ρ²))}, z_i = (x_i − μ_i)/√σ_ii.` },
        { id: "2022-23-Q7b", label: "(b)", marks: "10",
          topic: "regression", sub: "Method of least squares and the estimator β̂ = (XᵀX)⁻¹XᵀY",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Describe the method of least squares and how it is utilized to estimate parameter, $\hat\beta = (X^TX)^{-1}X^TY$ in multivariate regression.`,
          solution: String.raw`1. **Model.** For n observations of a response Y and k predictors, the multiple linear regression model is
$$Y_i = \beta_0 + \beta_1x_{i1} + \cdots + \beta_kx_{ik} + \varepsilon_i, \qquad i = 1, \ldots, n$$
   In matrix form $\mathbf Y = X\mathbf\beta + \mathbf\varepsilon$, where X is the n × (k + 1) design matrix (first column all ones), $\mathbf\beta$ is (k + 1) × 1, and the errors have $E(\mathbf\varepsilon) = \mathbf 0$, $\mathrm{Cov}(\mathbf\varepsilon) = \sigma^2I$.

2. **Method of least squares:** choose $\mathbf\beta$ to make the sum of squared residuals (vertical distances between observed and fitted values) as small as possible:
$$S(\mathbf\beta) = \sum_{i=1}^n\varepsilon_i^2 = (\mathbf Y - X\mathbf\beta)'(\mathbf Y - X\mathbf\beta) = \mathbf Y'\mathbf Y - 2\mathbf\beta'X'\mathbf Y + \mathbf\beta'X'X\mathbf\beta$$

3. **Minimize:** set the gradient to zero (using $\partial(\mathbf\beta'\mathbf a)/\partial\mathbf\beta = \mathbf a$ and $\partial(\mathbf\beta'A\mathbf\beta)/\partial\mathbf\beta = 2A\mathbf\beta$ for symmetric A):
$$\frac{\partial S}{\partial\mathbf\beta} = -2X'\mathbf Y + 2X'X\mathbf\beta = \mathbf 0$$
   This gives the **normal equations** $X'X\hat{\mathbf\beta} = X'\mathbf Y$.

4. **Solve.** If the columns of X are linearly independent, $X'X$ is non-singular and
$$\boxed{\hat{\mathbf\beta} = (X'X)^{-1}X'\mathbf Y}$$
   The second-derivative matrix $2X'X$ is positive definite, so this is a minimum.

5. **Use:**
   - Fitted values $\hat{\mathbf Y} = X\hat{\mathbf\beta}$; residuals $\mathbf e = \mathbf Y - \hat{\mathbf Y}$; $SSE = \mathbf e'\mathbf e$; $\hat\sigma^2 = SSE/(n - k - 1)$.
   - $\mathrm{Cov}(\hat{\mathbf\beta}) = \sigma^2(X'X)^{-1}$ gives standard errors for t-tests of each coefficient; $R^2 = 1 - SSE/SST$ measures fit.
   - $\hat{\mathbf\beta}$ is unbiased and, by the Gauss–Markov theorem, has the smallest variance among linear unbiased estimators.
   - For several responses (multivariate regression) the same formula is applied column by column: $\hat B = (X'X)^{-1}X'\mathbf Y$ with Y an n × m matrix.`,
          answer: String.raw`Model Y = Xβ + ε. Least squares minimizes S(β) = (Y − Xβ)′(Y − Xβ); ∂S/∂β = −2X′Y + 2X′Xβ = 0 gives the normal equations X′Xβ̂ = X′Y, so β̂ = (X′X)⁻¹X′Y (minimum since X′X is positive definite); then Ŷ = Xβ̂, SSE, σ̂², Cov(β̂) = σ²(X′X)⁻¹, R².` },
        { id: "2022-23-Q7c", label: "(c)", marks: "15",
          topic: "regression", sub: "Multiple regression of exam score on study hours and Facebook hours (8 observations)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Suppose you have the following dataset with one response variable (Exam Score) and two predictor variables (Study Hours and Facebooking Hours). Fit a multiple linear regression model for this dataset. Interpret your results.

| Study Hours | Facebooking Hours | Exam Score |
|---|---|---|
| 60 | 22 | 140 |
| 62 | 25 | 155 |
| 67 | 24 | 159 |
| 70 | 20 | 179 |
| 71 | 15 | 192 |
| 72 | 14 | 200 |
| 75 | 14 | 212 |
| 78 | 11 | 215 |`,
          solution: String.raw`**Model:** $Y = \beta_0 + \beta_1x_1 + \beta_2x_2 + \varepsilon$, with Y = exam score, $x_1$ = study hours, $x_2$ = Facebook hours; n = 8.

1. **Sums needed for the normal equations:**
$$\sum x_1 = 555, \quad \sum x_2 = 145, \quad \sum Y = 1452, \quad \sum x_1^2 = 38767, \quad \sum x_2^2 = 2823, \quad \sum x_1x_2 = 9859$$
$$\sum x_1Y = 101895, \qquad \sum x_2Y = 25364$$

2. **Normal equations** $X'X\hat\beta = X'Y$:
$$\begin{bmatrix}8 & 555 & 145 \\ 555 & 38767 & 9859 \\ 145 & 9859 & 2823\end{bmatrix}\begin{bmatrix}\hat\beta_0 \\ \hat\beta_1 \\ \hat\beta_2\end{bmatrix} = \begin{bmatrix}1452 \\ 101895 \\ 25364\end{bmatrix}$$

3. **Solve** ($\hat\beta = (X'X)^{-1}X'Y$):
$$(X'X)^{-1} = \begin{bmatrix}135.72 & -1.5215 & -1.6575 \\ -1.5215 & 0.017288 & 0.017776 \\ -1.6575 & 0.017776 & 0.023409\end{bmatrix}$$
$$\hat\beta_0 = -6.867, \qquad \hat\beta_1 = 3.148, \qquad \hat\beta_2 = -1.656$$
$$\boxed{\hat Y = -6.867 + 3.148\,x_1 - 1.656\,x_2}$$
   (The same result comes from the centred equations: $S_{11}\hat\beta_1 + S_{12}\hat\beta_2 = S_{1Y}$, $S_{12}\hat\beta_1 + S_{22}\hat\beta_2 = S_{2Y}$ with $S_{11} = 263.875$, $S_{22} = 194.875$, $S_{12} = -200.375$, $S_{1Y} = 1162.5$, $S_{2Y} = -953.5$.)

4. **Goodness of fit:**
$$SST = \sum(Y - \bar Y)^2 = 5442, \qquad SSE = \sum(Y - \hat Y)^2 = 203.44, \qquad R^2 = 1 - \frac{203.44}{5442} = 0.963$$
   Adjusted $R^2 = 0.948$; $\hat\sigma = \sqrt{SSE/(n - 3)} = 6.38$.

5. **Significance** (scipy values for the tables):
   - Overall F test: $F = \dfrac{(SST - SSE)/2}{SSE/5} = 64.4 > F_{0.05}(2, 5) = 5.79$, so the regression is highly significant.
   - Coefficients: $se(\hat\beta_1) = 0.839$, $t = 3.75$; $se(\hat\beta_2) = 0.976$, $t = -1.70$; with $t_{0.025}(5) = 2.571$, study hours are significant and Facebook hours are not, at the 5% level.

6. **Interpretation:**
   - Each extra hour of study raises the expected score by about **3.1 marks**, with Facebook time held fixed.
   - Each extra hour on Facebook lowers it by about **1.7 marks**, with study time held fixed.
   - The two predictors explain **96% of the variation** in exam score.
   - The predictors are strongly negatively correlated ($r = -0.88$: students who study more use Facebook less), so the separate effect of Facebook time is estimated imprecisely.
   - The intercept (−6.9) has no practical meaning: x₁ = 0 is far outside the data.

**Result:** $\hat Y = -6.87 + 3.15x_1 - 1.66x_2$, $R^2 = 0.963$.`,
          answer: String.raw`Normal equations with ΣX₁ = 555, ΣX₂ = 145, ΣY = 1452, ΣX₁² = 38767, ΣX₂² = 2823, ΣX₁X₂ = 9859, ΣX₁Y = 101895, ΣX₂Y = 25364 ⇒ Ŷ = −6.867 + 3.148X₁ − 1.656X₂; R² = 0.963, F = 64.4 (> 5.79). +3.1 marks per study hour, −1.7 per Facebook hour (the latter not significant, t = −1.70).` }
      ] },
    { id: "2022-23-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q8a", label: "(a)", marks: "7",
          topic: "anova-manova", sub: "Assumptions of ANOVA and MANOVA: similarities and differences",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Compare the assumptions of ANOVA and MANOVA. How are they similar, and how do they differ?`,
          solution: String.raw`**ANOVA** compares the means of **one** response variable across g groups ($H_0: \mu_1 = \mu_2 = \cdots = \mu_g$). **MANOVA** compares the mean **vectors** of p ≥ 2 response variables across g groups ($H_0: \mathbf\mu_1 = \cdots = \mathbf\mu_g$), using statistics such as Wilks' $\Lambda^* = |W|/|B + W|$.

### Similar assumptions
1. **Independent observations:** random samples, independent within and between groups.
2. **Normality** of the response(s) within each group.
3. **Equal variability across groups** (homogeneity).
4. Additive (linear) model: observation = overall mean + treatment effect + error.

### Differences

| Assumption | ANOVA | MANOVA |
|---|---|---|
| Normality | univariate normal: $X_{\ell j} \sim N(\mu_\ell, \sigma^2)$ | **multivariate normal**: $\mathbf X_{\ell j} \sim N_p(\mathbf\mu_\ell, \Sigma)$ (every linear combination normal) |
| Homogeneity | equal variances $\sigma^2$ (Levene/Bartlett test) | equal **covariance matrices** $\Sigma_1 = \cdots = \Sigma_g$ (Box's M test) |
| Relationship between responses | — | responses should be **moderately correlated** but not multicollinear; linear relations among them |
| Sample size | $n_\ell \ge 2$ | each group needs more observations than variables ($n_\ell > p$) so the covariance matrices are non-singular |
| Outliers | univariate outliers | also multivariate outliers (Mahalanobis distance) |
| Test statistic | F = MS(between)/MS(within) | Wilks' Λ, Pillai, Hotelling–Lawley, Roy (from matrices B and W) |

MANOVA uses the correlation among responses and controls the overall type I error, which separate ANOVAs on each response cannot.`,
          answer: String.raw`Both assume independent random samples, normal errors and equal variability across groups. ANOVA: one response, univariate normal, equal variances σ², F test. MANOVA: several responses, multivariate normal N_p(μ_ℓ, Σ), equal covariance matrices (Box's M), linearly related but not multicollinear responses, n_ℓ > p, multivariate outliers; Wilks' Λ etc.` },
        { id: "2022-23-Q8b", label: "(b)", marks: "8",
          topic: "pca", sub: "What principal component analysis is and its purpose",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is principal component analysis (PCA), and what is its primary purpose in data analysis?`,
          solution: String.raw`**Principal component analysis** explains the variance–covariance structure of a set of p variables through a few **linear combinations** of them, the principal components (lecture notes).

- If $\mathbf X$ has covariance matrix Σ with eigenvalue–eigenvector pairs $(\lambda_1, \mathbf e_1), \ldots, (\lambda_p, \mathbf e_p)$, $\lambda_1 \ge \cdots \ge \lambda_p \ge 0$, the i-th principal component is
$$Y_i = \mathbf e_i'\mathbf X = e_{i1}X_1 + \cdots + e_{ip}X_p, \qquad \mathrm{Var}(Y_i) = \lambda_i, \quad \mathrm{Cov}(Y_i, Y_k) = 0$$
- $Y_1$ is the linear combination (with unit-length coefficient vector) of **maximum variance**; $Y_2$ has the maximum variance among those uncorrelated with $Y_1$, and so on.
- Total variance is preserved: $\sum\sigma_{ii} = \sum\lambda_i$, and the proportion explained by the k-th component is $\lambda_k/\sum\lambda_i$.
- Geometrically, the components are a rotation of the axes to the principal axes of the data ellipsoid.

**Primary purpose:**
1. **Data reduction:** replace p correlated variables by a few uncorrelated components ($k < p$) that keep most of the variation (e.g. 80–90%), chosen with a scree plot or cumulative proportion.
2. **Interpretation:** reveal relationships not obvious in the raw variables (the loadings show which variables move together).
3. **Intermediate step** for other analyses: removing multicollinearity before regression, plotting high-dimensional data in 2-D, detecting outliers, clustering.
4. PCA can be done on Σ (variables in comparable units) or on the correlation matrix ρ (standardized variables, when units or scales differ).`,
          answer: String.raw`PCA forms uncorrelated linear combinations Y_i = e_i′X of the variables, with e_i the eigenvectors of Σ (or ρ) and Var(Y_i) = λ_i in decreasing order; total variance Σλ_i is preserved. Purpose: reduce dimension by keeping the few components that explain most variance, interpret structure, and remove multicollinearity / visualize data for further analysis.` },
        { id: "2022-23-Q8c", label: "(c)", marks: "20",
          topic: "pca", sub: "Principal components of a 5 × 2 dataset: covariance, eigenvalues, eigenvectors, scores",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate the principal components for the following dataset:

| feature 1 | feature 2 |
|---|---|
| 2.5 | 2.4 |
| 0.5 | 0.7 |
| 2.2 | 2.9 |
| 1.9 | 2.2 |
| 3.1 | 3 |`,
          solution: String.raw`**Given:** n = 5 observations of $x_1$ (feature 1) and $x_2$ (feature 2). **Method:** PCs from the eigenvalues and eigenvectors of the sample covariance matrix (lecture notes); divisor n as in Q6.

1. **Means and deviations:** $\bar x_1 = 10.2/5 = 2.04$, $\bar x_2 = 11.2/5 = 2.24$.

| $x_1 - \bar x_1$ | $x_2 - \bar x_2$ | $d_1^2$ | $d_2^2$ | $d_1d_2$ |
|---|---|---|---|---|
| 0.46 | 0.16 | 0.2116 | 0.0256 | 0.0736 |
| −1.54 | −1.54 | 2.3716 | 2.3716 | 2.3716 |
| 0.16 | 0.66 | 0.0256 | 0.4356 | 0.1056 |
| −0.14 | −0.04 | 0.0196 | 0.0016 | 0.0056 |
| 1.06 | 0.76 | 1.1236 | 0.5776 | 0.8056 |
| | **Sum** | **3.752** | **3.412** | **3.362** |

2. **Covariance matrix:**
$$S = \frac1n\begin{bmatrix}3.752 & 3.362 \\ 3.362 & 3.412\end{bmatrix} = \begin{bmatrix}0.7504 & 0.6724 \\ 0.6724 & 0.6824\end{bmatrix}$$

3. **Eigenvalues** from $|S - \lambda I| = 0$:
$$\lambda^2 - (0.7504 + 0.6824)\lambda + (0.7504 \times 0.6824 - 0.6724^2) = \lambda^2 - 1.4328\lambda + 0.05995 = 0$$
$$\lambda = \frac{1.4328 \pm \sqrt{1.4328^2 - 4(0.05995)}}{2} = \frac{1.4328 \pm 1.3465}{2} \;\Rightarrow\; \lambda_1 = 1.3897, \quad \lambda_2 = 0.0431$$

4. **Eigenvectors** from $(S - \lambda I)\mathbf e = 0$, normalized to unit length:
   - $\lambda_1$: $(0.7504 - 1.3897)e_{11} + 0.6724e_{12} = 0 \Rightarrow e_{12} = 0.9507e_{11}$, so $\mathbf e_1 = (0.7247, 0.6890)'$.
   - $\lambda_2$: orthogonal to $\mathbf e_1$, so $\mathbf e_2 = (-0.6890, 0.7247)'$.

5. **Principal components** (centred variables):
$$Y_1 = 0.7247(x_1 - 2.04) + 0.6890(x_2 - 2.24), \qquad \mathrm{Var}(Y_1) = 1.3897$$
$$Y_2 = -0.6890(x_1 - 2.04) + 0.7247(x_2 - 2.24), \qquad \mathrm{Var}(Y_2) = 0.0431$$

6. **Proportion of total variance** ($\lambda_1 + \lambda_2 = 1.4328 = s_{11} + s_{22}$ ✓):
$$\frac{1.3897}{1.4328} = 97.0\%\ \text{(PC1)}, \qquad \frac{0.0431}{1.4328} = 3.0\%\ \text{(PC2)}$$

7. **Scores** of the five observations:

| Obs. | $Y_1$ | $Y_2$ |
|---|---|---|
| 1 | 0.444 | −0.201 |
| 2 | −2.177 | −0.055 |
| 3 | 0.571 | 0.368 |
| 4 | −0.129 | 0.067 |
| 5 | 1.292 | −0.180 |

![The five data points with the PC1 direction (97 %) along the cloud and PC2 (3 %) across it, both through the mean](fig/2022-23-Q8c-sol.svg)

8. **Interpretation:** PC1 is nearly an equal-weight sum of the two features ("overall size") and carries 97% of the variance; PC2 is their contrast and is negligible. The data are essentially one-dimensional, so one component is enough.
   (With divisor n − 1 the eigenvalues are 1.7371 and 0.0539; the eigenvectors and the proportions 97.0% / 3.0% are unchanged.)

**Result:** $\lambda_1 = 1.390$, $\mathbf e_1 = (0.725, 0.689)$; $\lambda_2 = 0.043$, $\mathbf e_2 = (-0.689, 0.725)$; PC1 explains 97.0%.`,
          answer: String.raw`x̄ = (2.04, 2.24); S (÷n) = [[0.7504, 0.6724], [0.6724, 0.6824]]; λ₁ = 1.390, λ₂ = 0.043; Y₁ = 0.7247(x₁ − 2.04) + 0.6890(x₂ − 2.24) (97.0 %), Y₂ = −0.6890(x₁ − 2.04) + 0.7247(x₂ − 2.24) (3.0 %). (÷(n − 1): λ = 1.737, 0.054, same vectors.)` }
      ] }
  ]
});
