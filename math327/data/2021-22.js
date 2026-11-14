QB.paper({
  year: "2021-22", date: "03/10/2023", marks: 280,
  rules: String.raw`L-2/T-2 (ME) B.Sc. Engineering Examinations 2021-2022, MATH 263 (Complex Variables, Harmonic Analysis and Partial Differential Equations), 3 hours, 280 marks. Section A: four questions, answer any THREE. Section B: four questions, answer any THREE. Use separate scripts for each section. **Only Section A (complex variables) is given here: Section B (first- and higher-order PDEs, Fourier series and transforms, Laplace's equation) is not part of MATH 327.**`,
  questions: [
    { id: "2021-22-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q1a", label: "(a)", marks: "8⅔",
          topic: "complex-algebra", sub: "|z₁| = |z₂| and amp z₁ + amp z₂ = 0 imply z₂ = z̄₁",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`For any complex number $z_1$ and $z_2$ if $|z_1| = |z_2|$ and $\mathrm{amp}(z_1) + \mathrm{amp}(z_2) = 0$, then show that $z_2 = \bar z_1$.`,
          solution: String.raw`1. **Polar forms.** Let $|z_1| = |z_2| = r$ and $\mathrm{amp}(z_1) = \theta$. The condition $\mathrm{amp}(z_1) + \mathrm{amp}(z_2) = 0$ gives $\mathrm{amp}(z_2) = -\theta$. Hence
$$z_1 = r(\cos\theta + i\sin\theta), \qquad z_2 = r[\cos(-\theta) + i\sin(-\theta)] = r(\cos\theta - i\sin\theta)$$

2. **Conjugate of $z_1$:**
$$\bar z_1 = r(\cos\theta - i\sin\theta) = re^{-i\theta}$$

3. **Compare:** $z_2 = r(\cos\theta - i\sin\theta) = \bar z_1$. $\blacksquare$

**Geometric view:** $z_1$ and $z_2$ are at the same distance from the origin and at equal and opposite angles from the positive real axis, so each is the mirror image of the other in the real axis.`,
          answer: String.raw`z₁ = re^{iθ}, z₂ = re^{−iθ} (same modulus, opposite amplitude) ⇒ z₂ = r(cos θ − i sin θ) = z̄₁ (reflection in the real axis).` },
        { id: "2021-22-Q1b", label: "(b)", marks: "9+9=18",
          topic: "analytic", sub: "Analyticity and derivatives of cosh 5z and ln(√z)",
          type: "derivation", syllabus: "in", repeats: ["2018-19-Q1b"],
          text: String.raw`Discuss the analyticity of the following functions and find its derivatives

(i) $f(z) = \cosh 5z$, and (ii) $f(z) = \ln\left(\sqrt z\right)$`,
          solution: String.raw`### (i) $f(z) = \cosh 5z$
1. **Real and imaginary parts.** With $z = x + iy$, $\cosh(5x + 5iy) = \cosh5x\cos5y + i\sinh5x\sin5y$:
$$u = \cosh5x\cos5y, \qquad v = \sinh5x\sin5y$$

2. **Cauchy–Riemann equations:**
$$u_x = 5\sinh5x\cos5y = v_y, \qquad u_y = -5\cosh5x\sin5y = -v_x$$
   They hold for **all** x, y, and the partial derivatives are continuous everywhere.

3. **Conclusion:** $\cosh5z$ is analytic in the whole plane (entire). Its derivative is
$$f'(z) = u_x + iv_x = 5\sinh5x\cos5y + 5i\cosh5x\sin5y = 5\sinh5z$$

### (ii) $f(z) = \ln\sqrt z = \tfrac12\ln z$ (principal branch)
1. **Polar form.** With $z = re^{i\theta}$, $-\pi < \theta \le \pi$: $\sqrt z = \sqrt r\,e^{i\theta/2}$ and
$$f = \ln\sqrt r + i\frac\theta2 \;\Rightarrow\; u = \tfrac12\ln r, \qquad v = \tfrac12\theta$$

2. **Polar C–R equations** $u_r = \frac1r v_\theta$, $v_r = -\frac1r u_\theta$:
$$u_r = \frac{1}{2r}, \quad \frac1r v_\theta = \frac{1}{2r} \;✓; \qquad v_r = 0, \quad -\frac1r u_\theta = 0 \;✓$$
   The partials are continuous for $r > 0$, $-\pi < \theta < \pi$.

3. **Analyticity:** f is analytic everywhere **except at z = 0** (branch point, $\ln r \to -\infty$) and **on the negative real axis** (branch cut, where θ jumps from π to −π, so f is not even continuous there).

4. **Derivative:**
$$f'(z) = e^{-i\theta}(u_r + iv_r) = \frac{e^{-i\theta}}{2r} = \frac{1}{2z}$$
   This agrees with $\frac{d}{dz}\left(\tfrac12\ln z\right) = \frac{1}{2z}$.`,
          answer: String.raw`(i) u = cosh5x cos5y, v = sinh5x sin5y satisfy C–R everywhere ⇒ entire; f′ = 5 sinh 5z. (ii) ln√z = ½ ln z: u = ½ ln r, v = θ/2 satisfy polar C–R for r > 0, −π < θ < π ⇒ analytic except at z = 0 and on the branch cut (negative real axis); f′ = 1/(2z).` },
        { id: "2021-22-Q1c", label: "(c)", marks: "10",
          topic: "complex-algebra", sub: "(z − i)/(z − 1) purely imaginary ⇒ z on the circle centre ½(1 + i), radius 1/√2",
          type: "derivation", syllabus: "in", repeats: ["2018-19-Q1a"],
          text: String.raw`If the ratio of $\dfrac{z - i}{z - 1}$ is purely imaginary, then prove that the point z lies on the circle whose centre is the point $\frac12(1 + i)$ and radius is $\frac{1}{\sqrt2}$.`,
          solution: String.raw`1. **Write z = x + iy** and rationalize:
$$\frac{z - i}{z - 1} = \frac{x + i(y - 1)}{(x - 1) + iy}\cdot\frac{(x - 1) - iy}{(x - 1) - iy} = \frac{[x(x - 1) + y(y - 1)] + i[(x - 1)(y - 1) - xy]}{(x - 1)^2 + y^2}$$

2. **Purely imaginary means the real part is zero:**
$$x(x - 1) + y(y - 1) = 0 \;\Rightarrow\; x^2 + y^2 - x - y = 0$$

3. **Complete the squares:**
$$\left(x - \tfrac12\right)^2 + \left(y - \tfrac12\right)^2 = \tfrac14 + \tfrac14 = \tfrac12$$
   This is the circle with **centre $(\tfrac12, \tfrac12)$, i.e. $\tfrac12(1 + i)$, and radius $\tfrac{1}{\sqrt2}$**. $\blacksquare$

4. **Remarks:** the circle passes through 0, 1 and i. The point $z = 1$ must be excluded (the ratio is undefined there), and at $z = i$ the ratio is 0.
   Geometrically, $\arg\frac{z - i}{z - 1} = \pm\frac\pi2$ means the segment from i to 1 subtends a right angle at z, so z lies on the circle with that segment as diameter (centre at its midpoint, radius $|1 - i|/2 = 1/\sqrt2$).

![The circle through 0, 1 and i with centre ½(1 + i) and radius 1/√2](fig/2021-22-Q1c-sol.svg)`,
          answer: String.raw`Re[(z − i)/(z − 1)] = [x(x − 1) + y(y − 1)]/[(x − 1)² + y²] = 0 ⇒ x² + y² − x − y = 0 ⇒ (x − ½)² + (y − ½)² = ½: circle, centre ½(1 + i), radius 1/√2 (z ≠ 1).` },
        { id: "2021-22-Q1d", label: "(d)", marks: "10",
          topic: "mapping", sub: "Bilinear map of |z| = 1 onto the real axis with 1, i, −1 → 0, 1, ∞",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find a bilinear transformation which transform the circle $|z| = 1$ in the z-plane into the real axis in the w-plane in such a way that the points $z_1 = 1$, $z_2 = i$, $z_3 = -1$ are mapped into $w_1 = 0$, $w_2 = 1$ and $w_3 = \infty$, respectively.`,
          solution: String.raw`1. **Use the zero and the pole.** $w = 0$ at $z = 1$ and $w = \infty$ at $z = -1$, so the bilinear map has the form
$$w = k\,\frac{z - 1}{z + 1}$$

2. **Fix k with $z = i \to w = 1$:**
$$\frac{i - 1}{i + 1} = \frac{(i - 1)(1 - i)}{(1 + i)(1 - i)} = \frac{2i}{2} = i \;\Rightarrow\; 1 = k\,i \;\Rightarrow\; k = -i$$
$$\boxed{w = -i\,\frac{z - 1}{z + 1} = \frac{i(1 - z)}{1 + z}}$$
   (The cross-ratio formula $\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$ with $w_3 = \infty$ gives the same result.)

3. **Check that $|z| = 1$ goes to the real axis.** For $z = e^{i\theta}$:
$$\frac{1 - e^{i\theta}}{1 + e^{i\theta}} = \frac{e^{-i\theta/2} - e^{i\theta/2}}{e^{-i\theta/2} + e^{i\theta/2}} = \frac{-2i\sin(\theta/2)}{2\cos(\theta/2)} = -i\tan\frac\theta2$$
$$w = i\left(-i\tan\frac\theta2\right) = \tan\frac\theta2 \quad\text{(real)} ✓$$
   Also $z = 0 \to w = i$: the inside of the unit circle maps to the upper half-plane.

**Result:** $w = \dfrac{i(1 - z)}{1 + z}$.`,
          answer: String.raw`w = k(z − 1)/(z + 1); z = i → 1 gives k = −i ⇒ w = i(1 − z)/(1 + z). On |z| = 1, z = e^{iθ} gives w = tan(θ/2) (real); |z| < 1 maps to Im w > 0.` }
      ] },
    { id: "2021-22-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q2a", label: "(a)", marks: "16",
          topic: "analytic", sub: "Polar Cauchy–Riemann equations; f = √r e^{iθ/2} is differentiable and f′ = 1/(2f)",
          type: "derivation", syllabus: "in", repeats: ["2019-20-Q2a", "2016-17-Q1c"],
          text: String.raw`Write down Cauchy Riemann equations in polar form. If $f(z) = u(r, \theta) + iv(r, \theta)$ then test the differentiability of the function $f(z) = \sqrt r\,e^{i\theta/2}$, $(r > 0,\ \alpha < \theta < \alpha + 2\pi)$ in the indicated domain and hence show that, $f'(z) = \dfrac{1}{2f(z)}$.`,
          solution: String.raw`1. **Polar C–R equations.** With $x = r\cos\theta$, $y = r\sin\theta$, the equations $u_x = v_y$, $u_y = -v_x$ become
$$u_r = \frac1r v_\theta, \qquad v_r = -\frac1r u_\theta$$
   and, when they hold with continuous partials, $f'(z) = e^{-i\theta}(u_r + iv_r)$.

2. **Parts of f:** $f = \sqrt r\left(\cos\frac\theta2 + i\sin\frac\theta2\right)$, so
$$u = \sqrt r\cos\frac\theta2, \qquad v = \sqrt r\sin\frac\theta2$$

3. **Partial derivatives:**
$$u_r = \frac{1}{2\sqrt r}\cos\frac\theta2, \quad u_\theta = -\frac{\sqrt r}{2}\sin\frac\theta2, \quad v_r = \frac{1}{2\sqrt r}\sin\frac\theta2, \quad v_\theta = \frac{\sqrt r}{2}\cos\frac\theta2$$

4. **Check:**
$$\frac1r v_\theta = \frac{1}{2\sqrt r}\cos\frac\theta2 = u_r ✓, \qquad -\frac1r u_\theta = \frac{1}{2\sqrt r}\sin\frac\theta2 = v_r ✓$$
   The partials are continuous for $r > 0$, $\alpha < \theta < \alpha + 2\pi$, so **f is differentiable (indeed analytic) throughout the domain**.

5. **Derivative:**
$$f'(z) = e^{-i\theta}(u_r + iv_r) = e^{-i\theta}\frac{1}{2\sqrt r}e^{i\theta/2} = \frac{1}{2\sqrt r\,e^{i\theta/2}} = \frac{1}{2f(z)} \qquad\blacksquare$$`,
          answer: String.raw`u_r = v_θ/r, v_r = −u_θ/r. For f = √r e^{iθ/2}: u = √r cos(θ/2), v = √r sin(θ/2); u_r = cos(θ/2)/(2√r) = v_θ/r, v_r = sin(θ/2)/(2√r) = −u_θ/r, continuous for r > 0 ⇒ differentiable; f′ = e^{−iθ}(u_r + iv_r) = 1/(2√r e^{iθ/2}) = 1/(2f).` },
        { id: "2021-22-Q2b", label: "(b)", marks: "15",
          topic: "analytic", sub: "v = −tan⁻¹(x/y) is harmonic; analytic f with imaginary part v: f = ln z + C",
          type: "derivation", syllabus: "in", repeats: ["2016-17-Q2a"],
          text: String.raw`Define harmonic function. Show that $v = -\tan^{-1}\dfrac{x}{y}$ is a harmonic. Find an analytic function $f(z)$ in which $v(x, y)$ is the imaginary part.`,
          solution: String.raw`**Harmonic function:** a real function with continuous second partial derivatives satisfying Laplace's equation $\phi_{xx} + \phi_{yy} = 0$.

1. **First derivatives** (for $y \ne 0$):
$$v_x = -\frac{1/y}{1 + x^2/y^2} = -\frac{y}{x^2 + y^2}, \qquad v_y = \frac{x/y^2}{1 + x^2/y^2} = \frac{x}{x^2 + y^2}$$

2. **Second derivatives:**
$$v_{xx} = \frac{2xy}{(x^2 + y^2)^2}, \qquad v_{yy} = -\frac{2xy}{(x^2 + y^2)^2} \;\Rightarrow\; v_{xx} + v_{yy} = 0$$
   So v is harmonic (away from the origin and the line y = 0).

3. **Find u from the C–R equations.** $u_x = v_y = \dfrac{x}{x^2 + y^2}$:
$$u = \tfrac12\ln(x^2 + y^2) + \phi(y)$$
   $u_y = \dfrac{y}{x^2 + y^2} + \phi'(y)$ must equal $-v_x = \dfrac{y}{x^2 + y^2}$, so $\phi' = 0$ and $\phi = C$.

4. **The analytic function:**
$$f(z) = \tfrac12\ln(x^2 + y^2) - i\tan^{-1}\frac xy + C$$
   **In terms of z** (Milne–Thomson): $f'(z) = u_x + iv_x = v_y + iv_x$, and with $x = z$, $y = 0$: $f'(z) = \dfrac1z - 0$, so
$$\boxed{f(z) = \ln z + C}$$
   Check: in polar form, $\tan^{-1}(x/y) = \frac\pi2 - \theta$ (first quadrant), so $v = \theta - \frac\pi2$ and $u = \ln r$: $u + iv = \ln r + i\theta - i\frac\pi2 = \ln z - \frac{i\pi}{2}$, consistent with $C = -i\pi/2$.`,
          answer: String.raw`v_x = −y/(x² + y²), v_y = x/(x² + y²), v_xx + v_yy = 2xy/r⁴ − 2xy/r⁴ = 0 ⇒ harmonic. u_x = v_y ⇒ u = ½ ln(x² + y²); f = ½ ln(x² + y²) − i tan⁻¹(x/y) + C = ln z + C (f′ = 1/z).` },
        { id: "2021-22-Q2c", label: "(c)", marks: "15⅔",
          topic: "complex-integration", sub: "∫ (z² − 3|z| + Im z) dz along the quarter circle from 2 to 2i",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Compute the integral $\displaystyle\int_C\left(z^2 - 3|z| + \mathrm{Im}\,z\right)dz$, where C is $z = 2e^{i\theta}$ $\left(0 \le \theta \le \frac\pi2\right)$. That is, C is the quarter-circle centered at the origin and extending from 2 to 2i.`,
          solution: String.raw`**On C:** $z = 2e^{i\theta}$, $dz = 2ie^{i\theta}d\theta$, $|z| = 2$, $\mathrm{Im}\,z = 2\sin\theta$. Split the integral into three parts.

1. **$\int_C z^2\,dz$:** $z^2$ is analytic, so it depends only on the end points:
$$\int_C z^2\,dz = \left[\frac{z^3}{3}\right]_2^{2i} = \frac{(2i)^3 - 8}{3} = \frac{-8 - 8i}{3}$$

2. **$\int_C(-3|z|)\,dz = -6\int_C dz$:**
$$-6\,(2i - 2) = 12 - 12i$$

3. **$\int_C\mathrm{Im}\,z\,dz$:**
$$\int_0^{\pi/2}2\sin\theta\cdot2ie^{i\theta}\,d\theta = 4i\int_0^{\pi/2}(\sin\theta\cos\theta + i\sin^2\theta)\,d\theta = 4i\left(\frac12 + i\frac\pi4\right) = 2i - \pi$$

4. **Total:**
$$\int_C = \left(-\frac83 + 12 - \pi\right) + i\left(-\frac83 - 12 + 2\right) = \left(\frac{28}{3} - \pi\right) - \frac{38}{3}i \approx 6.192 - 12.667i$$
   Check: numerical integration along C gives 6.1917 − 12.6667i ✓.

**Result:** $\dfrac{28}{3} - \pi - \dfrac{38}{3}i$.`,
          answer: String.raw`∫z²dz = (−8 − 8i)/3; ∫−3|z|dz = −6(2i − 2) = 12 − 12i; ∫Im z dz = 4i(½ + iπ/4) = 2i − π ⇒ total (28/3 − π) − (38/3)i ≈ 6.192 − 12.667i.` }
      ] },
    { id: "2021-22-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q3a", label: "(a)", marks: "15",
          topic: "complex-integration", sub: "Cauchy's integral formula: ∮ dz/((z² + 1)(z² + 9)) round the rectangle ±3 ± 2i",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Apply Cauchy's Integral formula to evaluate the integral $\displaystyle\oint_C\frac{1}{(z^2 + 1)(z^2 + 9)}\,dz$, where C is a rectangle with vertices at ±3, ±2, described in the positive sense.`,
          solution: String.raw`**Interpretation:** the rectangle with vertices $\pm3 \pm 2i$ ($-3 \le x \le 3$, $-2 \le y \le 2$), described anticlockwise.

1. **Singular points:** $z = \pm i$ and $z = \pm3i$. Since $|{\pm1}| < 2$, the points $\pm i$ are **inside** C; $\pm3i$ are **outside** ($|{\pm3}| > 2$).

![Rectangle contour with vertices ±3 ± 2i; the poles ±i are inside and ±3i outside](fig/2021-22-Q3a-sol.svg)

2. **Split the integrand** into terms with one pole inside each:
$$\frac{1}{(z^2 + 1)(z^2 + 9)} = \frac{1}{(z - i)(z + i)(z^2 + 9)}$$
   Using small circles $C_1$ about $i$ and $C_2$ about $-i$ (Cauchy's theorem for multiply connected regions), $\oint_C = \oint_{C_1} + \oint_{C_2}$.

3. **Cauchy's integral formula** $\oint\frac{f(z)}{z - z_0}dz = 2\pi i f(z_0)$:
$$\oint_{C_1}\frac{1/[(z + i)(z^2 + 9)]}{z - i}\,dz = 2\pi i\cdot\frac{1}{(2i)(8)} = \frac{\pi}{8}$$
$$\oint_{C_2}\frac{1/[(z - i)(z^2 + 9)]}{z + i}\,dz = 2\pi i\cdot\frac{1}{(-2i)(8)} = -\frac{\pi}{8}$$

4. **Sum:**
$$\oint_C\frac{dz}{(z^2 + 1)(z^2 + 9)} = \frac\pi8 - \frac\pi8 = 0$$

**Result:** 0.`,
          answer: String.raw`Poles ±i inside the rectangle ±3 ± 2i, ±3i outside. CIF: 2πi·1/((2i)(8)) + 2πi·1/((−2i)(8)) = π/8 − π/8 = 0.` },
        { id: "2021-22-Q3b", label: "(b)", marks: "16⅔",
          topic: "series", sub: "Laurent series of 1/(z(z² − 3z + 2)) in 1 < |z| < 2 and |z| ≥ 2",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q4a", "2016-17-Q3b"],
          text: String.raw`Express $f(z) = \dfrac{1}{z(z^2 - 3z + 2)}$ in a Laurent expansion valid in the region:

(i) $1 < |z| < 2$, and (ii) $|z| \ge 2$.`,
          solution: String.raw`1. **Partial fractions** ($z^2 - 3z + 2 = (z - 1)(z - 2)$):
$$f(z) = \frac{1}{z(z - 1)(z - 2)} = \frac{1}{2z} - \frac{1}{z - 1} + \frac{1}{2(z - 2)}$$

2. **(i) $1 < |z| < 2$:** here $|1/z| < 1$ and $|z/2| < 1$:
$$-\frac{1}{z - 1} = -\frac1z\cdot\frac{1}{1 - 1/z} = -\sum_{n=0}^\infty\frac{1}{z^{n+1}}, \qquad \frac{1}{2(z - 2)} = -\frac14\cdot\frac{1}{1 - z/2} = -\sum_{n=0}^\infty\frac{z^n}{2^{n+2}}$$
$$f(z) = \frac{1}{2z} - \frac1z - \frac{1}{z^2} - \frac{1}{z^3} - \cdots - \frac14 - \frac z8 - \frac{z^2}{16} - \cdots$$
$$\boxed{f(z) = \cdots - \frac{1}{z^3} - \frac{1}{z^2} - \frac{1}{2z} - \frac14 - \frac z8 - \frac{z^2}{16} - \cdots = -\frac{1}{2z} - \sum_{n=2}^\infty\frac{1}{z^n} - \sum_{n=0}^\infty\frac{z^n}{2^{n+2}}}$$

3. **(ii) $|z| > 2$** (the series converges for $|z| > 2$; on $|z| = 2$ itself f has the pole z = 2): here $|2/z| < 1$:
$$\frac{1}{2(z - 2)} = \frac{1}{2z}\cdot\frac{1}{1 - 2/z} = \sum_{n=0}^\infty\frac{2^{n-1}}{z^{n+1}}$$
$$f(z) = \frac{1}{2z} + \sum_{n=0}^\infty\frac{2^{n-1} - 1}{z^{n+1}} = \frac{1}{2z} - \frac{1}{2z} + 0 + \frac{1}{z^3} + \frac{3}{z^4} + \frac{7}{z^5} + \cdots$$
$$\boxed{f(z) = \sum_{n=3}^\infty\frac{2^{n-2} - 1}{z^n} = \frac{1}{z^3} + \frac{3}{z^4} + \frac{7}{z^5} + \frac{15}{z^6} + \cdots}$$

4. **Checks:** for large z, $f \approx 1/z^3$ ✓. At $z = 1.5$ the series in (i) sums to −2.6667, equal to $1/(1.5 \times 0.5 \times (-0.5))$ ✓.`,
          answer: String.raw`f = 1/(2z) − 1/(z − 1) + 1/(2(z − 2)). (i) 1 < |z| < 2: f = −1/(2z) − Σ_{n≥2} z^{−n} − Σ_{n≥0} zⁿ/2ⁿ⁺². (ii) |z| > 2: f = Σ_{n≥3}(2ⁿ⁻² − 1)/zⁿ = 1/z³ + 3/z⁴ + 7/z⁵ + ….` },
        { id: "2021-22-Q3c", label: "(c)", marks: "15",
          topic: "residues", sub: "Residue theorem: ∮ dz/(z³(z + 4)) on |z| = 2",
          type: "numerical", syllabus: "in", repeats: ["2013-14-Q3ci"],
          text: String.raw`Evaluate the integral $\displaystyle\oint_C\frac{dz}{z^3(z + 4)}$ by Cauchy's residue theorem, where C: $|z| = 2$.`,
          solution: String.raw`1. **Poles:** $z = 0$ (order 3) is inside $|z| = 2$; $z = -4$ is outside.

2. **Residue at the pole of order 3:**
$$\mathrm{Res}_{z=0} = \frac{1}{2!}\lim_{z\to0}\frac{d^2}{dz^2}\left[z^3\cdot\frac{1}{z^3(z + 4)}\right] = \frac12\cdot\frac{2}{(z + 4)^3}\bigg|_{z=0} = \frac{1}{64}$$
   (Equivalently, $\frac{1}{z^3(z + 4)} = \frac{1}{4z^3}\left(1 - \frac z4 + \frac{z^2}{16} - \cdots\right)$, and the coefficient of $1/z$ is $\frac{1}{64}$.)

3. **Residue theorem:**
$$\oint_C\frac{dz}{z^3(z + 4)} = 2\pi i\cdot\frac{1}{64} = \frac{\pi i}{32}$$

**Result:** $\dfrac{\pi i}{32}$.`,
          answer: String.raw`Only z = 0 (triple pole) is inside |z| = 2; Res = ½ d²/dz²[1/(z + 4)] at 0 = 1/64 ⇒ integral = 2πi/64 = πi/32.` }
      ] },
    { id: "2021-22-Q4", q: 4, section: "A",
      stem: String.raw`Evaluate the following integrals using the method of contour integration`,
      parts: [
        { id: "2021-22-Q4i", label: "(i)", marks: "23⅔",
          topic: "residues", sub: "∫₀^∞ sin πx/(x(1 − x²)) dx = π with poles on the real axis (indented contour)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`$$\int_0^\infty\frac{\sin\pi x}{x(1 - x^2)}\,dx$$`,
          solution: String.raw`1. **Reduce to the whole line.** The integrand is even and finite at x = 0, ±1 (removable: $\sin\pi x$ vanishes there), so
$$I = \int_0^\infty\frac{\sin\pi x}{x(1 - x^2)}dx = \frac12\int_{-\infty}^{\infty}\frac{\sin\pi x}{x(1 - x^2)}dx = \frac12\,\mathrm{Im}\;\mathrm{P.V.}\!\int_{-\infty}^{\infty}\frac{e^{i\pi x}}{x(1 - x^2)}dx$$

2. **Contour.** Take $f(z) = \dfrac{e^{i\pi z}}{z(1 - z^2)}$. It has simple poles at $z = 0, 1, -1$, **on** the real axis. Use the large upper semicircle Γ of radius R, the real axis, and small upper semicircles of radius ε round each pole (indentations). There are no poles inside, so the total integral is 0.

3. **Large semicircle → 0** by Jordan's lemma, since $|1/(z(1 - z^2))| \to 0$ as $|z| \to \infty$ and $e^{i\pi z}$ is bounded in the upper half-plane.

4. **Small indentations.** Going clockwise over a half-circle round a simple pole $a$ contributes $-\pi i\,\mathrm{Res}_{z=a}$. Writing $z(1 - z^2) = z - z^3$, with derivative $1 - 3z^2$:
$$\mathrm{Res}_{0} = \frac{e^0}{1} = 1, \qquad \mathrm{Res}_{1} = \frac{e^{i\pi}}{1 - 3} = \frac12, \qquad \mathrm{Res}_{-1} = \frac{e^{-i\pi}}{1 - 3} = \frac12$$

5. **Combine** (ε → 0, R → ∞):
$$\mathrm{P.V.}\!\int_{-\infty}^{\infty}\frac{e^{i\pi x}}{x(1 - x^2)}dx - \pi i(1 + \tfrac12 + \tfrac12) = 0 \;\Rightarrow\; \mathrm{P.V.}\!\int_{-\infty}^{\infty}\frac{e^{i\pi x}}{x(1 - x^2)}dx = 2\pi i$$

6. **Imaginary part:**
$$\int_{-\infty}^{\infty}\frac{\sin\pi x}{x(1 - x^2)}dx = 2\pi \;\Rightarrow\; I = \pi$$
   Check: numerical integration gives 3.14159 ✓.

**Result:** $\displaystyle\int_0^\infty\frac{\sin\pi x}{x(1 - x^2)}dx = \pi$.`,
          answer: String.raw`f = e^{iπz}/(z(1 − z²)); simple poles 0, ±1 on the real axis with residues 1, ½, ½; indented upper contour, Jordan's lemma ⇒ P.V.∫ = πi(2) = 2πi ⇒ ∫_{−∞}^{∞} sin πx/(x(1 − x²)) = 2π ⇒ ∫₀^∞ = π.` },
        { id: "2021-22-Q4ii", label: "(ii)", marks: "23",
          topic: "residues", sub: "∫₀^2π sin 2θ/(5 − 3 cos θ) dθ by the unit-circle substitution",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q4i"],
          text: String.raw`$$\int_0^{2\pi}\frac{\sin2\theta}{5 - 3\cos\theta}\,d\theta$$`,
          solution: String.raw`1. **Substitution** $z = e^{i\theta}$, $d\theta = \dfrac{dz}{iz}$:
$$\sin2\theta = \frac{z^2 - z^{-2}}{2i} = \frac{z^4 - 1}{2iz^2}, \qquad 5 - 3\cos\theta = 5 - \frac32\left(z + \frac1z\right) = -\frac{(3z - 1)(z - 3)}{2z}$$
$$I = \oint_{|z|=1}\frac{z^4 - 1}{2iz^2}\cdot\frac{-2z}{(3z - 1)(z - 3)}\cdot\frac{dz}{iz} = \oint_{|z|=1}\frac{z^4 - 1}{z^2(3z - 1)(z - 3)}\,dz$$

2. **Poles inside $|z| = 1$:** $z = 0$ (double) and $z = 1/3$; $z = 3$ is outside.

3. **Residue at $z = 1/3$:**
$$\frac{(1/3)^4 - 1}{(1/3)^2\cdot3\cdot(1/3 - 3)} = \frac{-80/81}{-8/9} = \frac{10}{9}$$

4. **Residue at $z = 0$:** with $h(z) = \dfrac{z^4 - 1}{3z^2 - 10z + 3}$,
$$h'(0) = \frac{4z^3(3z^2 - 10z + 3) - (z^4 - 1)(6z - 10)}{(3z^2 - 10z + 3)^2}\bigg|_0 = \frac{0 - (-1)(-10)}{9} = -\frac{10}{9}$$

5. **Residue theorem:** $I = 2\pi i\left(\frac{10}{9} - \frac{10}{9}\right) = 0$.
   This is expected: replacing θ by $2\pi - \theta$ changes the sign of $\sin2\theta$ but not of $\cos\theta$, so the integrand is odd about θ = π.

> **If the intended integrand is $\sin^2\theta$** (a common variant): the same method gives $\displaystyle\int_0^{2\pi}\frac{\sin^2\theta}{5 - 3\cos\theta}d\theta = \frac{2\pi}{9}\left(5 - \sqrt{25 - 9}\right) = \frac{2\pi}{9} \approx 0.698$.

**Result:** $\displaystyle\int_0^{2\pi}\frac{\sin2\theta}{5 - 3\cos\theta}d\theta = 0$.`,
          answer: String.raw`z = e^{iθ}: I = ∮ (z⁴ − 1)/(z²(3z − 1)(z − 3)) dz; residues at 0: −10/9, at 1/3: +10/9 ⇒ I = 0 (odd about θ = π). (For sin²θ: 2π/9.)` }
      ] }
  ]
});
