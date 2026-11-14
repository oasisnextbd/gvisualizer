QB.paper({
  year: "2020-21", date: "25/09/2022", marks: 280,
  rules: String.raw`L-2/T-2 (ME) B.Sc. Engineering Examinations 2020-2021, MATH 263 (Complex Variables, Harmonic Analysis and Partial Differential Equations), 3 hours, 280 marks. Section A: four questions, answer any THREE. Use separate scripts for each section. **Only the first page of the paper (Section A, Q1–Q3) is in the scan, so Q4 is missing. Section B (PDEs and Fourier analysis) is not part of MATH 327 and is not given here.**`,
  questions: [
    { id: "2020-21-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q1a", label: "(a)", marks: "11",
          topic: "residues", sub: "Bound |e^{iz}/(z² + z + 1)| ≤ 1/(R − 1)² on the upper semicircle |z| = R",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Let $C_R$ denote the upper half of the circle $|z| = R$ for some $R > 1$. Show that
$$\left|\frac{e^{iz}}{z^2 + z + 1}\right| \le \frac{1}{(R - 1)^2} \quad\text{for all z lying on } C_R.$$`,
          solution: String.raw`1. **Numerator.** For $z = x + iy$ on $C_R$ (upper half, so $y \ge 0$):
$$|e^{iz}| = |e^{ix - y}| = e^{-y} \le 1$$

2. **Denominator.** Factor $z^2 + z + 1 = (z - \omega)(z - \bar\omega)$ with $\omega = e^{2\pi i/3} = -\tfrac12 + \tfrac{\sqrt3}{2}i$, $|\omega| = |\bar\omega| = 1$. By the triangle inequality $|z - \omega| \ge |z| - |\omega| = R - 1 > 0$, and the same for $\bar\omega$:
$$|z^2 + z + 1| = |z - \omega||z - \bar\omega| \ge (R - 1)^2$$

3. **Combine:**
$$\left|\frac{e^{iz}}{z^2 + z + 1}\right| = \frac{|e^{iz}|}{|z^2 + z + 1|} \le \frac{1}{(R - 1)^2} \qquad\blacksquare$$

**Use:** with the ML-inequality, $\left|\int_{C_R}\frac{e^{iz}}{z^2 + z + 1}dz\right| \le \frac{\pi R}{(R - 1)^2} \to 0$ as $R \to \infty$. This is the step that removes the semicircle when evaluating $\int_{-\infty}^\infty\frac{\cos x}{x^2 + x + 1}dx$ by contour integration.`,
          answer: String.raw`On C_R, y ≥ 0 so |e^{iz}| = e^{−y} ≤ 1; z² + z + 1 = (z − ω)(z − ω̄) with |ω| = 1, so |z² + z + 1| ≥ (R − 1)² ⇒ the bound. (Then ∫_{C_R} → 0 by ML ≤ πR/(R − 1)².)` },
        { id: "2020-21-Q1b", label: "(b)", marks: "12",
          topic: "elementary-functions", sub: "Principal value of (2i)^{1−i}; all solutions of sin z = 5",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Compute the principal value of the complex power $(2i)^{1-i}$. Also find all solutions to the equation $\sin z = 5$.`,
          solution: String.raw`### Principal value of $(2i)^{1-i}$
1. **Definition:** $z^c = e^{c\,\mathrm{Log}\,z}$, with the principal logarithm $\mathrm{Log}\,z = \ln|z| + i\,\mathrm{Arg}\,z$:
$$\mathrm{Log}(2i) = \ln2 + i\frac\pi2$$

2. **Exponent:**
$$(1 - i)\left(\ln2 + i\frac\pi2\right) = \ln2 + \frac\pi2 + i\left(\frac\pi2 - \ln2\right)$$

3. **Value:**
$$(2i)^{1-i} = e^{\ln2 + \pi/2}\,e^{i(\pi/2 - \ln2)} = 2e^{\pi/2}\left[\sin(\ln2) + i\cos(\ln2)\right] \approx 9.621(0.6390 + 0.7692i) = 6.147 + 7.401i$$

### All solutions of $\sin z = 5$
1. **Real and imaginary parts:** $\sin(x + iy) = \sin x\cosh y + i\cos x\sinh y = 5$, so
$$\sin x\cosh y = 5, \qquad \cos x\sinh y = 0$$

2. **Second equation:** either $\sinh y = 0$ (y = 0), which would need $\sin x = 5$, impossible; or $\cos x = 0$, i.e. $x = \frac\pi2 + n\pi$.

3. **First equation:** $\cosh y = 5/\sin x > 0$ requires $\sin x = 1$, i.e. $x = \frac\pi2 + 2n\pi$, and then
$$\cosh y = 5 \;\Rightarrow\; y = \pm\cosh^{-1}5 = \pm\ln\left(5 + \sqrt{24}\right) = \pm\ln\left(5 + 2\sqrt6\right) \approx \pm2.2924$$

4. **Solutions:**
$$\boxed{z = \frac\pi2 + 2n\pi \pm i\ln\left(5 + 2\sqrt6\right), \qquad n = 0, \pm1, \pm2, \ldots}$$
   (The same result from $\sin z = 5 \Rightarrow e^{2iz} - 10ie^{iz} - 1 = 0 \Rightarrow e^{iz} = (5 \pm 2\sqrt6)i$.)`,
          answer: String.raw`(2i)^{1−i} = e^{(1−i)(ln 2 + iπ/2)} = 2e^{π/2}[sin(ln 2) + i cos(ln 2)] ≈ 6.147 + 7.401i. sin z = 5 ⇒ cos x = 0, sin x = 1, cosh y = 5 ⇒ z = π/2 + 2nπ ± i ln(5 + 2√6) (≈ ±2.292i).` },
        { id: "2020-21-Q1c", label: "(c)", marks: "12",
          topic: "analytic", sub: "Where 2x² + y + i(y² − x) and z Im z are differentiable; analyticity",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Determine where the following functions are differentiable.

(i) $f(z) = 2x^2 + y + i(y^2 - x)$ (ii) $f(z) = z\,\mathrm{Im}(z)$

Hence discuss the analyticity of these functions.`,
          solution: String.raw`**Test:** f is differentiable at a point where the first partial derivatives are continuous and satisfy $u_x = v_y$, $u_y = -v_x$; there $f' = u_x + iv_x$.

### (i) $f = 2x^2 + y + i(y^2 - x)$
1. $u = 2x^2 + y$, $v = y^2 - x$: $u_x = 4x$, $v_y = 2y$, $u_y = 1$, $v_x = -1$.
2. $u_y = -v_x$: $1 = 1$ always ✓. $u_x = v_y$: $4x = 2y$, i.e. **$y = 2x$**.
3. So f is differentiable **only on the line $y = 2x$**, with $f'(z) = u_x + iv_x = 4x - i$ there.
4. **Analyticity:** a line contains no open disc, so there is no point at which f is differentiable throughout a neighbourhood. **f is nowhere analytic.**

### (ii) $f = z\,\mathrm{Im}\,z = (x + iy)y = xy + iy^2$
1. $u = xy$, $v = y^2$: $u_x = y$, $v_y = 2y$, $u_y = x$, $v_x = 0$.
2. $u_x = v_y \Rightarrow y = 2y \Rightarrow y = 0$; $u_y = -v_x \Rightarrow x = 0$.
3. Both hold only at **z = 0**, where the partials are continuous, so f is differentiable only at the origin, with $f'(0) = 0$. (Directly: $\frac{f(\Delta z) - f(0)}{\Delta z} = \mathrm{Im}\,\Delta z \to 0$.)
4. **Analyticity:** differentiable at a single point only, so **nowhere analytic**.`,
          answer: String.raw`(i) u = 2x² + y, v = y² − x: u_y = −v_x always, u_x = v_y ⇔ y = 2x ⇒ differentiable only on the line y = 2x (f′ = 4x − i), nowhere analytic. (ii) z Im z = xy + iy²: C–R need y = 0 and x = 0 ⇒ differentiable only at z = 0 (f′(0) = 0), nowhere analytic.` },
        { id: "2020-21-Q1d", label: "(d)", marks: "11⅓",
          topic: "mapping", sub: "w = z² on the quarter annulus b ≤ |z| ≤ a in the first quadrant; conformality",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Given the transformation $w = f(z) = z^2$ which lies in the area in the first quadrant of the z plane bounded by the axes and circles $|z| = a$ and $|z| = b$, $(a > b > 0)$. Discuss the transformation in the w plane and check whether if it is a conformal mapping.`,
          solution: String.raw`1. **Polar form.** With $z = re^{i\theta}$ and $w = \rho e^{i\phi}$, $w = z^2$ gives
$$\rho = r^2, \qquad \phi = 2\theta$$
   Moduli are squared and arguments doubled.

2. **Boundary curves:**
   - Arc $|z| = b$, $0 \le \theta \le \pi/2$ → semicircle $|w| = b^2$, $0 \le \phi \le \pi$.
   - Arc $|z| = a$ → semicircle $|w| = a^2$, $0 \le \phi \le \pi$.
   - Positive real axis segment $b \le x \le a$ (θ = 0) → positive real segment $b^2 \le u \le a^2$ (φ = 0).
   - Positive imaginary axis segment $b \le y \le a$ (θ = π/2) → negative real segment $-a^2 \le u \le -b^2$ (φ = π), because $w = (iy)^2 = -y^2$.

3. **Image region:** the quarter annulus $b \le r \le a$, $0 \le \theta \le \frac\pi2$ maps onto the **upper half annulus** $b^2 \le \rho \le a^2$, $0 \le \phi \le \pi$, one-to-one.

![The quarter annulus in the z-plane and its image, the upper half annulus between radii b² and a² in the w-plane](fig/2020-21-Q1d-sol.svg)

4. **Conformality.** A mapping by an analytic function is conformal wherever $f'(z) \ne 0$. Here $f'(z) = 2z$, which vanishes only at $z = 0$. The region has $|z| \ge b > 0$, so **w = z² is conformal at every point of the region**: angles between curves are preserved in size and sense. (For example, the radial lines and circular arcs, which meet at right angles in the z-plane, map to radial lines and semicircles that also meet at right angles.)
   At the origin (not in the region) the map is not conformal: there angles are doubled, which is why the right angle between the axes becomes the straight angle π.`,
          answer: String.raw`ρ = r², φ = 2θ: arcs |z| = b, a → semicircles |w| = b², a²; the axes → the real segments [b², a²] and [−a², −b²]; region → upper half annulus b² ≤ |w| ≤ a², 0 ≤ arg w ≤ π. f′ = 2z ≠ 0 there (|z| ≥ b > 0) ⇒ conformal (not at z = 0, where angles double).` }
      ] },
    { id: "2020-21-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q2a", label: "(a)", marks: "16⅔",
          topic: "analytic", sub: "Polar C–R: f = e^{−θ}cos(ln r) + i e^{−θ}sin(ln r) is differentiable and f′ = i f/z",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Write down Cauchy Riemann equations in polar form. Test the differentiability of the function $f(z) = e^{-\theta}\cos(\ln r) + ie^{-\theta}\sin(\ln r)$, $(r > 0,\ 0 < \theta < 2\pi)$ in the indicated domain and hence show that $f'(z) = i\dfrac{f(z)}{z}$.`,
          solution: String.raw`1. **Polar C–R equations:**
$$u_r = \frac1r v_\theta, \qquad v_r = -\frac1r u_\theta, \qquad f'(z) = e^{-i\theta}(u_r + iv_r)$$

2. **Parts:** $u = e^{-\theta}\cos(\ln r)$, $v = e^{-\theta}\sin(\ln r)$.

3. **Partial derivatives:**
$$u_r = -\frac{e^{-\theta}}{r}\sin(\ln r), \quad u_\theta = -e^{-\theta}\cos(\ln r), \quad v_r = \frac{e^{-\theta}}{r}\cos(\ln r), \quad v_\theta = -e^{-\theta}\sin(\ln r)$$

4. **Check:**
$$\frac1r v_\theta = -\frac{e^{-\theta}}{r}\sin(\ln r) = u_r ✓, \qquad -\frac1r u_\theta = \frac{e^{-\theta}}{r}\cos(\ln r) = v_r ✓$$
   All partials are continuous for $r > 0$, $0 < \theta < 2\pi$, so **f is differentiable (analytic) in the domain**.

5. **Derivative:**
$$f'(z) = e^{-i\theta}\frac{e^{-\theta}}{r}\left[-\sin(\ln r) + i\cos(\ln r)\right] = e^{-i\theta}\frac{i}{r}\,e^{-\theta}\left[\cos(\ln r) + i\sin(\ln r)\right] = \frac{i}{re^{i\theta}}f(z) = i\frac{f(z)}{z} \qquad\blacksquare$$
   (In fact $f = e^{-\theta}e^{i\ln r} = e^{i(\ln r + i\theta)} = e^{i\log z} = z^i$, and $\frac{d}{dz}z^i = iz^{i-1} = iz^i/z$.)`,
          answer: String.raw`u_r = v_θ/r, v_r = −u_θ/r. u = e^{−θ}cos ln r, v = e^{−θ}sin ln r: u_r = −e^{−θ}sin(ln r)/r = v_θ/r, v_r = e^{−θ}cos(ln r)/r = −u_θ/r, continuous ⇒ differentiable; f′ = e^{−iθ}(u_r + iv_r) = (i/z)f (f = z^i).` },
        { id: "2020-21-Q2b", label: "(b)", marks: "20",
          topic: "analytic", sub: "v = x/(x² + y²) + cosh x cos y is harmonic; f = i/z + i cosh z",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that $v(x, y) = \dfrac{x}{x^2 + y^2} + \cosh x\cos y$ is a harmonic function. Find an analytic function $f(z) = u(x, y) + iv(x, y)$ and express $f(z)$ in terms of z.`,
          solution: String.raw`1. **Harmonic, first term** $v_1 = \dfrac{x}{x^2 + y^2}$:
$$v_{1x} = \frac{y^2 - x^2}{(x^2 + y^2)^2}, \quad v_{1xx} = \frac{2x(x^2 - 3y^2)}{(x^2 + y^2)^3}; \qquad v_{1y} = \frac{-2xy}{(x^2 + y^2)^2}, \quad v_{1yy} = \frac{-2x(x^2 - 3y^2)}{(x^2 + y^2)^3}$$
   so $v_{1xx} + v_{1yy} = 0$ (for $z \ne 0$).
   **Second term** $v_2 = \cosh x\cos y$: $v_{2xx} = \cosh x\cos y$, $v_{2yy} = -\cosh x\cos y$, sum 0.
   Hence $\nabla^2v = 0$: v is harmonic (except at the origin).

2. **Milne–Thomson method.** $f'(z) = u_x + iv_x = v_y + iv_x$ (C–R). Put $x = z$, $y = 0$:
$$v_y(z, 0) = 0 - \cosh z\sin0 = 0, \qquad v_x(z, 0) = \frac{-z^2}{z^4} + \sinh z = -\frac{1}{z^2} + \sinh z$$
$$f'(z) = i\left(-\frac{1}{z^2} + \sinh z\right) \;\Rightarrow\; f(z) = \frac{i}{z} + i\cosh z + C \quad(C \text{ real})$$

3. **Check:** $\dfrac iz = \dfrac{i(x - iy)}{x^2 + y^2} = \dfrac{y + ix}{x^2 + y^2}$ and $i\cosh z = i(\cosh x\cos y + i\sinh x\sin y) = -\sinh x\sin y + i\cosh x\cos y$. The imaginary part is $\dfrac{x}{x^2 + y^2} + \cosh x\cos y = v$ ✓.

4. **Real part:** $u = \dfrac{y}{x^2 + y^2} - \sinh x\sin y + C$.

**Result:** $f(z) = \dfrac iz + i\cosh z + C$.`,
          answer: String.raw`x/(x² + y²) = Re(1/z) and cosh x cos y = Re(cosh z) are harmonic ⇒ v harmonic. Milne–Thomson: f′ = v_y + iv_x at (z, 0) = i(−1/z² + sinh z) ⇒ f = i/z + i cosh z + C, u = y/(x² + y²) − sinh x sin y + C.` },
        { id: "2020-21-Q2c", label: "(c)", marks: "10",
          topic: "complex-integration", sub: "∫ dz/z around the unit circle x = cos t, y = sin t",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate $\displaystyle\int_C\frac1z\,dz$ along the curve $x = \cos t$, $y = \sin t$, $0 \le t \le 2\pi$.`,
          solution: String.raw`1. **Parametrize:** $z = \cos t + i\sin t = e^{it}$, $dz = ie^{it}dt$, $0 \le t \le 2\pi$ (the unit circle once, anticlockwise).

2. **Integral:**
$$\int_C\frac{dz}{z} = \int_0^{2\pi}\frac{ie^{it}}{e^{it}}\,dt = i\int_0^{2\pi}dt = 2\pi i$$

3. **Remark:** the answer is not zero although the curve is closed, because $1/z$ is not analytic at $z = 0$, which lies inside C (Cauchy's theorem does not apply). It agrees with Cauchy's integral formula with f(z) = 1 and $z_0 = 0$, and with the residue 1 at z = 0.

**Result:** $2\pi i$.`,
          answer: String.raw`z = e^{it}, dz = ie^{it}dt ⇒ ∫ dz/z = ∫₀^{2π} i dt = 2πi (non-zero because 1/z has a pole at 0 inside C).` }
      ] },
    { id: "2020-21-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q3a", label: "(a)", marks: "15",
          topic: "complex-integration", sub: "Cauchy's integral formulas: ∮ (z + 2)/(z²(z − 1 − i)) dz on |z| = 1 and |z − 1 − i| = 1",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`State Cauchy's integral formulas and evaluate $\displaystyle\oint_C\frac{z + 2}{z^2(z - 1 - i)}\,dz$, along the indicated closed contours: (i) $|z| = 1$ (ii) $|z - 1 - i| = 1$.`,
          solution: String.raw`### Cauchy's integral formulas
If f is analytic inside and on a simple closed contour C (positive sense) and $z_0$ is inside C:
$$f(z_0) = \frac{1}{2\pi i}\oint_C\frac{f(z)}{z - z_0}dz, \qquad f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z - z_0)^{n+1}}dz$$

### (i) $|z| = 1$
1. **Singular points:** $z = 0$ (double) is inside; $z = 1 + i$ has $|1 + i| = \sqrt2 > 1$, so it is outside.
2. **Take** $f(z) = \dfrac{z + 2}{z - 1 - i}$, analytic inside $|z| = 1$, and use the n = 1 formula:
$$\oint_C\frac{f(z)}{z^2}dz = 2\pi i\,f'(0), \qquad f'(z) = \frac{(z - 1 - i) - (z + 2)}{(z - 1 - i)^2} = \frac{-3 - i}{(z - 1 - i)^2}$$
$$f'(0) = \frac{-3 - i}{(1 + i)^2} = \frac{-3 - i}{2i} = \frac{-1 + 3i}{2}$$
3. **Value:** $2\pi i\cdot\dfrac{-1 + 3i}{2} = \pi i(-1 + 3i) = -3\pi - \pi i$.

### (ii) $|z - 1 - i| = 1$
1. The circle has centre $1 + i$ and radius 1: $z = 1 + i$ is inside; $z = 0$ is at distance $\sqrt2 > 1$, outside.
2. **Take** $g(z) = \dfrac{z + 2}{z^2}$ and use the n = 0 formula:
$$\oint_C\frac{g(z)}{z - (1 + i)}dz = 2\pi i\,g(1 + i) = 2\pi i\cdot\frac{3 + i}{(1 + i)^2} = 2\pi i\cdot\frac{3 + i}{2i} = \pi(3 + i)$$

**Result:** (i) $-\pi(3 + i)$; (ii) $\pi(3 + i)$.`,
          answer: String.raw`(i) Only z = 0 (double) inside |z| = 1: 2πi f′(0) with f = (z + 2)/(z − 1 − i), f′(0) = (−1 + 3i)/2 ⇒ −3π − πi. (ii) Only 1 + i inside: 2πi (3 + i)/(1 + i)² = π(3 + i).` },
        { id: "2020-21-Q3b", label: "(b)", marks: "15",
          topic: "series", sub: "Laurent series of 1/(z(z − 1)) in 1 < |z − 2| < 2",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Expand $f(z) = \dfrac{1}{z(z - 1)}$ in a Laurent series valid for $1 < |z - 2| < 2$.`,
          solution: String.raw`1. **Partial fractions and centre z = 2.** Put $u = z - 2$:
$$f(z) = \frac{1}{z - 1} - \frac1z = \frac{1}{u + 1} - \frac{1}{u + 2}$$

2. **$\frac{1}{u + 1}$ with $|u| > 1$:**
$$\frac{1}{u + 1} = \frac1u\cdot\frac{1}{1 + 1/u} = \sum_{n=0}^\infty\frac{(-1)^n}{u^{n+1}}$$

3. **$\frac{1}{u + 2}$ with $|u| < 2$:**
$$\frac{1}{u + 2} = \frac12\cdot\frac{1}{1 + u/2} = \sum_{n=0}^\infty\frac{(-1)^nu^n}{2^{n+1}}$$

4. **Laurent series:**
$$\boxed{f(z) = \sum_{n=0}^\infty\frac{(-1)^n}{(z - 2)^{n+1}} - \sum_{n=0}^\infty\frac{(-1)^n(z - 2)^n}{2^{n+1}}}$$
$$= \cdots - \frac{1}{(z - 2)^2} + \frac{1}{z - 2} - \frac12 + \frac{z - 2}{4} - \frac{(z - 2)^2}{8} + \cdots$$

5. **Check** at $z = 3.5$ ($|z - 2| = 1.5$): the series sums to 0.11429, and $1/(3.5 \times 2.5) = 0.11429$ ✓.`,
          answer: String.raw`With u = z − 2: f = 1/(u + 1) − 1/(u + 2) = Σ(−1)ⁿ/(z − 2)ⁿ⁺¹ − Σ(−1)ⁿ(z − 2)ⁿ/2ⁿ⁺¹ (first for |z − 2| > 1, second for |z − 2| < 2).` },
        { id: "2020-21-Q3c", label: "(c)", marks: "16⅔",
          topic: "residues", sub: "Residue theorem: ∮ e^z/(z² + π²)² dz on |z| = 4",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate $\displaystyle\oint_C\frac{e^z}{(z^2 + \pi^2)^2}\,dz$ by Cauchy's residue theorem, where the contour C is the circle $|z| = 4$.`,
          solution: String.raw`1. **Poles:** $z^2 + \pi^2 = 0$ gives $z = \pm i\pi$, each a pole of order 2. Since $\pi < 4$, both are inside C.

2. **Residue at $z = i\pi$** (order 2):
$$\mathrm{Res} = \frac{d}{dz}\left[\frac{e^z}{(z + i\pi)^2}\right]_{z=i\pi} = \left[\frac{e^z(z + i\pi - 2)}{(z + i\pi)^3}\right]_{z=i\pi} = \frac{e^{i\pi}(2i\pi - 2)}{(2i\pi)^3} = \frac{-(2i\pi - 2)}{-8i\pi^3} = \frac{i\pi - 1}{4i\pi^3}$$

3. **Residue at $z = -i\pi$:**
$$\mathrm{Res} = \left[\frac{e^z(z - i\pi - 2)}{(z - i\pi)^3}\right]_{z=-i\pi} = \frac{e^{-i\pi}(-2i\pi - 2)}{(-2i\pi)^3} = \frac{2i\pi + 2}{8i\pi^3} = \frac{i\pi + 1}{4i\pi^3}$$

4. **Sum and integral:**
$$\sum\mathrm{Res} = \frac{2i\pi}{4i\pi^3} = \frac{1}{2\pi^2}, \qquad \oint_C\frac{e^z}{(z^2 + \pi^2)^2}dz = 2\pi i\cdot\frac{1}{2\pi^2} = \frac{i}{\pi}$$

**Result:** $\dfrac{i}{\pi}$.`,
          answer: String.raw`Double poles ±iπ inside |z| = 4; Res(iπ) = (iπ − 1)/(4iπ³), Res(−iπ) = (iπ + 1)/(4iπ³); sum 1/(2π²) ⇒ integral = i/π.` }
      ] }
  ]
});
