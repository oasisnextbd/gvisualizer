QB.paper({ year: "Practice", set: "Analytic and elementary functions: limits, Cauchy–Riemann, harmonic functions, exp, log, powers, trig", date: "", marks: 0, practice: true,
  rules: String.raw`Limits, continuity and differentiability, the Cauchy–Riemann equations (Cartesian and polar), analytic and harmonic functions (Brown & Churchill Secs. 14–25; lecture notes "Limit, continuity and differentiability" and "Chapter Two: Analytic Function"), followed by the elementary functions exp, log, complex powers, trigonometric and hyperbolic functions (Brown & Churchill ch. 3; lecture notes "Chapter Three: Elementary Function"). The set uses worked examples and exercises from the notes that are not already in past papers, selected Brown & Churchill exercises (Secs. 17–25 and 28–34), and new exam-style problems. Every solution includes the sketch a student should draw: approach paths, the set where the Cauchy–Riemann equations hold, orthogonal level curves, branch cuts, or the lattice of solutions.`,
  questions: [
    { id: "practice-analytic-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P1", label: "", marks: "", topic: "analytic",
        sub: "f(z) = z̄ is continuous everywhere but differentiable nowhere", type: "proof", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Limit, continuity and differentiability" (MATH 327), Problem 03`,
        text: String.raw`Show that $f(z) = \bar z$ is continuous everywhere but differentiable nowhere.`,
        solution: String.raw`**Method:** continuity from the definition (or from u, v continuous); differentiability from the difference quotient, letting Δz → 0 along two different directions.

1. **Continuity.** $f = x - iy$, so $u = x$ and $v = -y$ are continuous for all (x, y); hence f is continuous everywhere. Directly: $|\bar z - \bar z_0| = |\overline{z - z_0}| = |z - z_0| < \varepsilon$ whenever $|z - z_0| < \delta = \varepsilon$.

2. **Difference quotient** at any point z:
$$\frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{\overline{z + \Delta z} - \bar z}{\Delta z} = \frac{\overline{\Delta z}}{\Delta z}$$

![Let Δz shrink to 0 horizontally and vertically; the ratio is +1 one way and −1 the other](fig/practice-analytic-P1-sketch.svg)

3. **Two paths.** Along the real axis, Δz = Δx: $\overline{\Delta z}/\Delta z = \Delta x/\Delta x = 1$. Along the imaginary axis, Δz = iΔy: $\overline{\Delta z}/\Delta z = -i\Delta y/(i\Delta y) = -1$.

4. **Conclusion.** The limit depends on the direction, so it does not exist: f′(z) exists at no point, although f is continuous everywhere. (Check with C–R: $u_x = 1 \ne v_y = -1$ at every point.)`,
        answer: String.raw`Continuous since |z̄ − z̄₀| = |z − z₀|; the quotient Δz̄/Δz is 1 along Δz = Δx and −1 along Δz = iΔy, so f′(z) exists nowhere.` } ] },
    { id: "practice-analytic-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P2", label: "", marks: "", topic: "analytic",
        sub: "The limit of (z/z̄)² as z → 0 does not exist (test along y = x)", type: "proof", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 17 (exercises after the section on continuity, p. 53), Exercise 5`,
        text: String.raw`Show that the limit of the function $f(z) = \left(\dfrac{z}{\bar z}\right)^2$ as z tends to 0 does not exist. Do this by letting nonzero points z = (x, 0) and z = (x, x) approach the origin.`,
        solution: String.raw`**Method:** if a limit exists, every path into the point must give the same value. The axes alone are not enough here: they agree.

1. **Polar form.** On the ray z = re^{iθ} (r > 0):
$$\left(\frac{z}{\bar z}\right)^2 = \left(\frac{re^{i\theta}}{re^{-i\theta}}\right)^2 = e^{4i\theta},$$
which depends on θ only, not on r.

![Approach 0 along θ = 0, θ = π/2 and θ = π/4; the axes give 1, the diagonal gives −1](fig/practice-analytic-P2-sketch.svg)

2. **Along z = (x, 0)** (θ = 0): $f = (x/x)^2 = 1 \to 1$. (Along z = (0, y) also $f = (iy/(-iy))^2 = 1$; this is why the two axes are not sufficient.)

3. **Along z = (x, x)** (θ = π/4): $z = x(1 + i)$, $\bar z = x(1 - i)$,
$$\frac{z}{\bar z} = \frac{1 + i}{1 - i} = i \;\Rightarrow\; f = i^2 = -1 \to -1.$$

4. **Conclusion.** 1 ≠ −1, so $\lim_{z \to 0}(z/\bar z)^2$ does not exist.`,
        answer: String.raw`On the ray of angle θ, $(z/\bar z)^2 = e^{4i\theta}$: along z = (x, 0) the value is 1, along z = (x, x) it is i² = −1, so the limit does not exist.` } ] },
    { id: "practice-analytic-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P3", label: "", marks: "", topic: "analytic",
        sub: "f = ((1+i)x³ − (1−i)y³)/(x² + y²): continuous at 0, C–R hold at 0, yet f′(0) does not exist", type: "proof", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Chapter Two: Analytic Function" (MATH 327), Home work Problem 01 (part (c) added)`,
        text: String.raw`Let
$$f(z) = \begin{cases} \dfrac{(1 + i)x^3 - (1 - i)y^3}{x^2 + y^2}, & z \ne 0, \\[2mm] 0, & z = 0. \end{cases}$$
(a) Prove that f is continuous at z = 0. (b) Show that the Cauchy–Riemann equations are satisfied at the origin. (c) Show that f′(0) nevertheless does not exist.`,
        solution: String.raw`1. **Real and imaginary parts** (z ≠ 0):
$$u = \frac{x^3 - y^3}{x^2 + y^2}, \qquad v = \frac{x^3 + y^3}{x^2 + y^2}.$$

2. **(a) Continuity.** With $r = |z|$, $|x|, |y| \le r$:
$$|f(z)| \le \frac{|1 + i||x|^3 + |1 - i||y|^3}{r^2}$$
$$\le \frac{2\sqrt2\,r^3}{r^2} = 2\sqrt2\,r \to 0 = f(0).$$

3. **(b) Partial derivatives at 0** from the definition (u(0, 0) = v(0, 0) = 0):
$$u_x = \lim_{h\to0}\frac{u(h, 0)}{h} = 1, \qquad u_y = \lim_{k\to0}\frac{u(0, k)}{k} = -1,$$
$$v_x = \lim_{h\to0}\frac{v(h, 0)}{h} = 1, \qquad v_y = \lim_{k\to0}\frac{v(0, k)}{k} = 1.$$
So $u_x = v_y = 1$ and $u_y = -v_x = -1$: the C–R equations hold at the origin.

![Compute f(z)/z along both axes (as the C–R equations do) and along y = x](fig/practice-analytic-P3-sketch.svg)

4. **(c) The derivative.** $f'(0) = \lim_{z\to0} f(z)/z$ if it exists.
   - Along the x-axis: $f(x)/x = (1 + i)x^3/x^3 = 1 + i$.
   - Along the y-axis: $f(iy)/(iy) = -(1 - i)y/(iy) = 1 + i$.
   - Along y = x: $f = \dfrac{(1 + i) - (1 - i)}{2}x = ix$ and $z = (1 + i)x$, so $f/z = \dfrac{i}{1 + i} = \dfrac{1 + i}{2}$.

   The values 1 + i and (1 + i)/2 differ, so f′(0) does not exist. The C–R equations are necessary but **not sufficient**: they use only the two axis directions, and the partial derivatives here are not continuous at 0.`,
        answer: String.raw`(a) |f| ≤ 2√2|z| → 0. (b) At 0: $u_x = 1 = v_y$, $u_y = -1 = -v_x$. (c) f(z)/z → 1 + i along the axes but (1 + i)/2 along y = x, so f′(0) does not exist.` } ] },
    { id: "practice-analytic-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P4", label: "", marks: "", topic: "analytic",
        sub: "f = x³ + i(1 − y)³: f′ exists only at z = i (f′(i) = 0); nowhere analytic", type: "proof", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 22, Exercise 5; also Lecture notes "Chapter Two: Analytic Function" (MATH 327), Exercise 5`,
        text: String.raw`Show that when $f(z) = x^3 + i(1 - y)^3$, it is legitimate to write $f'(z) = u_x + iv_x = 3x^2$ only when z = i. Is f analytic anywhere?`,
        solution: String.raw`1. **Partial derivatives:** $u = x^3$, $v = (1 - y)^3$:
$$u_x = 3x^2, \quad u_y = 0, \quad v_x = 0, \quad v_y = -3(1 - y)^2.$$
All are continuous everywhere.

2. **Cauchy–Riemann.** $u_y = -v_x$ holds everywhere (0 = 0). $u_x = v_y$ requires $3x^2 = -3(1 - y)^2$, i.e. $x^2 + (1 - y)^2 = 0$, so x = 0 and y = 1.

![The C–R equations hold only at the single point i; every disc about i contains points where they fail](fig/practice-analytic-P4-sketch.svg)

3. **Derivative.** At z = i the C–R equations hold and the partials are continuous, so f′(i) exists and $f'(i) = u_x + iv_x = 3x^2 + 0 = 0$. At any other point the C–R equations fail, so f′ does not exist; the formula $f' = u_x + iv_x = 3x^2$ is legitimate only at z = i.

4. **Analyticity.** Analytic at a point requires differentiability throughout some neighbourhood. The set {i} contains no disc, so f is **nowhere analytic**.`,
        answer: String.raw`C–R: 3x² = −3(1 − y)² only at x = 0, y = 1, so f′ exists only at z = i, where f′(i) = 3x² = 0; f is analytic nowhere.` } ] },
    { id: "practice-analytic-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P5", label: "", marks: "", topic: "analytic",
        sub: "f = 2x + ixy²: f′(z) exists nowhere", type: "proof", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 22 (exercises, p. 68), Exercise 1(c)`,
        text: String.raw`Use the Cauchy–Riemann equations to show that f′(z) does not exist at any point if $f(z) = 2x + ixy^2$.`,
        solution: String.raw`1. **Parts:** $u = 2x$, $v = xy^2$:
$$u_x = 2, \quad v_y = 2xy, \quad u_y = 0, \quad v_x = y^2.$$

2. **Each equation separately:**
   - $u_x = v_y$: $2 = 2xy$, i.e. the hyperbola **xy = 1**.
   - $u_y = -v_x$: $0 = -y^2$, i.e. the line **y = 0**.

![Draw the hyperbola xy = 1 and the line y = 0: they have no common point](fig/practice-analytic-P5-sketch.svg)

3. **Conclusion.** Both equations would have to hold at the same point, but on y = 0 we get xy = 0 ≠ 1. The C–R equations (a necessary condition) hold nowhere, so f′(z) exists at no point.`,
        answer: String.raw`$u_x = v_y$ needs xy = 1 and $u_y = -v_x$ needs y = 0; these never hold together, so f′(z) exists nowhere.` } ] },
    { id: "practice-analytic-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P6", label: "", marks: "", topic: "analytic",
        sub: "f = cos x cosh y − i sin x sinh y is entire and f″ = −f", type: "proof", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 22 (exercises, p. 68), Exercise 2(d)`,
        text: String.raw`Show that $f(z) = \cos x\cosh y - i\sin x\sinh y$ and its derivative f′(z) exist everywhere, and find f″(z).`,
        solution: String.raw`**Method:** the sufficient condition (Sec. 21): continuous first partials satisfying C–R give $f' = u_x + iv_x$; apply it twice.

1. **First derivative.** $u = \cos x\cosh y$, $v = -\sin x\sinh y$:
$$u_x = -\sin x\cosh y = v_y, \qquad u_y = \cos x\sinh y = -v_x.$$
The partials are continuous everywhere and satisfy C–R, so f′ exists everywhere:
$$f'(z) = u_x + iv_x = -\sin x\cosh y - i\cos x\sinh y.$$

2. **Second derivative.** For $f' = U + iV$ with $U = -\sin x\cosh y$, $V = -\cos x\sinh y$:
$$U_x = -\cos x\cosh y = V_y, \qquad U_y = -\sin x\sinh y = -V_x.$$
Again continuous and C–R hold, so
$$f''(z) = U_x + iV_x = -\cos x\cosh y + i\sin x\sinh y = -f(z).$$

![Sketch the level curves u = c₁ and v = c₂: they cross at right angles wherever f′ ≠ 0](fig/practice-analytic-P6-sketch.svg)

3. **Identification.** $\cos(x + iy) = \cos x\cosh y - i\sin x\sinh y$, so f = cos z, f′ = −sin z and f″ = −cos z = −f, as for real cosines. Since f′ ≠ 0 except at z = nπ, the level curves of u and v are orthogonal families (Sec. 25, Ex. 7).`,
        answer: String.raw`$u_x = v_y = -\sin x\cosh y$, $u_y = -v_x = \cos x\sinh y$ (continuous) so f′ = −sin x cosh y − i cos x sinh y everywhere; repeating, f″ = −cos x cosh y + i sin x sinh y = −f(z). (f = cos z.)` } ] },
    { id: "practice-analytic-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P7", label: "", marks: "", topic: "analytic",
        sub: "Polar form of f′(z₀) in terms of θ-derivatives; apply to f = 1/z", type: "proof", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 22, Exercise 9; also Lecture notes "Chapter Two: Analytic Function" (MATH 327), Exercise 9`,
        text: String.raw`(a) With the aid of the polar Cauchy–Riemann equations $ru_r = v_\theta$, $u_\theta = -rv_r$, derive the alternative form
$$f'(z_0) = \frac{-i}{z_0}(u_\theta + iv_\theta)$$
of the expression $f'(z_0) = e^{-i\theta}(u_r + iv_r)$. (b) Use it to show that the derivative of f(z) = 1/z (z ≠ 0) is $f'(z) = -1/z^2$.`,
        solution: String.raw`1. **(a) Substitute the polar C–R equations.** From them $u_r = v_\theta/r$ and $v_r = -u_\theta/r$, so
$$f'(z_0) = e^{-i\theta}\left(\frac{v_\theta}{r} - i\frac{u_\theta}{r}\right) = \frac{e^{-i\theta}}{r}(-i)(u_\theta + iv_\theta)$$
$$= \frac{-i}{re^{i\theta}}(u_\theta + iv_\theta) = \frac{-i}{z_0}(u_\theta + iv_\theta),$$
using $-i(u_\theta + iv_\theta) = v_\theta - iu_\theta$.

![From z₀, moving radially gives Δz = e^{iθ}Δr; moving round the circle gives Δz = iz₀Δθ](fig/practice-analytic-P7-sketch.svg)

2. **Geometric check.** Moving round the circle |z| = r, $\Delta z \approx iz_0\,\Delta\theta$ and $\Delta f \approx (u_\theta + iv_\theta)\Delta\theta$, so $f' = (u_\theta + iv_\theta)/(iz_0) = (-i/z_0)(u_\theta + iv_\theta)$, the same result.

3. **(b) f = 1/z.** $f = \dfrac1r e^{-i\theta}$, so $u = \dfrac{\cos\theta}{r}$ and $v = -\dfrac{\sin\theta}{r}$:
$$u_\theta + iv_\theta = -\frac{\sin\theta}{r} - i\frac{\cos\theta}{r} = -\frac{i}{r}(\cos\theta - i\sin\theta)$$
$$= -\frac{i}{r}e^{-i\theta} = -\frac iz.$$
(The polar C–R equations hold: $ru_r = -\cos\theta/r = v_\theta$ and $u_\theta = -\sin\theta/r = -rv_r$, with continuous partials for r > 0.) Hence
$$f'(z) = \frac{-i}{z}\cdot\frac{-i}{z} = \frac{i^2}{z^2} = -\frac1{z^2}.$$`,
        answer: String.raw`(a) $u_r = v_\theta/r$, $v_r = -u_\theta/r$ give $f' = e^{-i\theta}(v_\theta - iu_\theta)/r = (-i/z_0)(u_\theta + iv_\theta)$. (b) For 1/z: $u_\theta + iv_\theta = -i/z$, so f′ = (−i/z)(−i/z) = −1/z².` } ] },
    { id: "practice-analytic-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P8", label: "", marks: "", topic: "analytic",
        sub: "Singular points of (z³ + i)/(z² − 3z + 2) and (z² + 1)/[(z + 2)(z² + 2z + 2)]", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 24, Exercise 4(b), (c)`,
        text: String.raw`In each case, determine the singular points of the function and state why the function is analytic everywhere except at those points:
(b) $f(z) = \dfrac{z^3 + i}{z^2 - 3z + 2}$; (c) $f(z) = \dfrac{z^2 + 1}{(z + 2)(z^2 + 2z + 2)}$.`,
        solution: String.raw`**Method:** a quotient P(z)/Q(z) of polynomials (entire functions) is analytic wherever Q(z) ≠ 0 (quotient rule); a zero of Q where f is not defined is a singular point, since f is analytic at points arbitrarily close to it.

1. **(b)** $z^2 - 3z + 2 = (z - 1)(z - 2) = 0$ at z = 1, 2. The numerator there is 1 + i and 8 + i (non-zero), so f is genuinely undefined at both. Singular points: **z = 1, 2**.

2. **(c)** $z + 2 = 0$ gives z = −2; $z^2 + 2z + 2 = (z + 1)^2 + 1 = 0$ gives $z = -1 \pm i$. The numerator at these points is 5 and $(-1 \pm i)^2 + 1 = 1 \mp 2i$ (non-zero). Singular points: **z = −2, −1 ± i**.

![Mark the zeros of the denominator as hollow points; f is analytic on the rest of the plane](fig/practice-analytic-P8-sketch.svg)

3. **Why analytic elsewhere.** Numerator and denominator are polynomials, which are entire; the derivative of a quotient exists wherever the denominator is non-zero. Each singular point is isolated (the function is analytic in a punctured disc around it).`,
        answer: String.raw`(b) z = 1, 2; (c) z = −2, −1 ± i. Quotients of polynomials are analytic wherever the denominator is non-zero.` } ] },
    { id: "practice-analytic-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P9", label: "", marks: "", topic: "analytic",
        sub: "G(z) = g(z² + 1) with g = ln r + iθ is analytic in the first quadrant; G′ = 2z/(z² + 1)", type: "proof", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 24, Exercise 6`,
        text: String.raw`The function $g(z) = \ln r + i\theta$ (r > 0, 0 < θ < 2π) is analytic in its domain of definition, with $g'(z) = 1/z$. Show that the composite function $G(z) = g(z^2 + 1)$ is analytic in the quadrant x > 0, y > 0, with derivative $G'(z) = \dfrac{2z}{z^2 + 1}$.`,
        solution: String.raw`**Method:** chain rule. The inner function w = z² + 1 is entire; it must carry the quadrant into the domain of g (the plane without the ray θ = 0, r ≥ 0).

1. **Image of the quadrant.** $w = z^2 + 1 = (x^2 - y^2 + 1) + 2ixy$, so $\mathrm{Im}\,w = 2xy > 0$ when x > 0, y > 0. Thus w lies in the upper half-plane, where 0 < arg w < π: inside the domain of g, away from its branch cut.

![The quadrant x, y > 0 is carried by w = z² + 1 into Im w > 0, clear of the cut of g along θ = 0](fig/practice-analytic-P9-sketch.svg)

2. **Chain rule.** g is analytic at w = z² + 1 and z² + 1 is analytic at z, so G is analytic throughout the quadrant, with
$$G'(z) = g'(z^2 + 1)\cdot\frac{d}{dz}(z^2 + 1) = \frac{1}{z^2 + 1}\cdot 2z = \frac{2z}{z^2 + 1}.$$

3. **Remark.** Note that z² + 1 ≠ 0 in the quadrant (its zeros ±i lie on the axis), consistent with the formula.`,
        answer: String.raw`Im(z² + 1) = 2xy > 0 in the quadrant, so z² + 1 lies in the domain of g (off the cut θ = 0); by the chain rule G′(z) = g′(z² + 1)·2z = 2z/(z² + 1).` } ] },
    { id: "practice-analytic-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P10", label: "", marks: "", topic: "analytic",
        sub: "f analytic in a domain with f real-valued, or with |f| constant, must be constant", type: "proof", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 24, Exercise 7 (with Example 3)`,
        text: String.raw`Let f(z) be analytic in a domain D. Prove that f must be constant throughout D if (a) f(z) is real-valued for all z in D; (b) |f(z)| is constant throughout D.`,
        solution: String.raw`1. **(a) Real-valued.** v ≡ 0, so by C–R $u_x = v_y = 0$ and $u_y = -v_x = 0$. Then $f'(z) = u_x + iv_x = 0$ throughout D, and a function with zero derivative in a domain is constant (Sec. 23).

2. **(b) |f| = c.** If c = 0 then f ≡ 0. If c ≠ 0, f has no zeros, and $f\bar f = |f|^2 = c^2$ gives
$$\overline{f(z)} = \frac{c^2}{f(z)},$$
which is analytic in D (quotient with non-vanishing denominator).

![Points f(z) on the circle |w| = c: the conjugate (mirror image) is c²/f(z)](fig/practice-analytic-P10-sketch.svg)

3. **Both f and f̄ analytic ⇒ constant** (Example 3, Sec. 24). With $\bar f = U + iV = u - iv$, C–R for f give $u_x = v_y$, $u_y = -v_x$, and C–R for $\bar f$ give $u_x = -v_y$, $u_y = v_x$. Adding and subtracting: $u_x = v_y = 0$ and $u_y = v_x = 0$, so f′ = 0 and f is constant in D.`,
        answer: String.raw`(a) v = 0 ⇒ $u_x = u_y = 0$ ⇒ f′ = 0 ⇒ constant. (b) |f| = c ≠ 0 ⇒ f̄ = c²/f is analytic; f and f̄ both analytic force $u_x = u_y = v_x = v_y = 0$, so f is constant (c = 0 gives f ≡ 0).` } ] },
    { id: "practice-analytic-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P11", label: "", marks: "", topic: "analytic",
        sub: "u = sinh x sin y is harmonic; conjugate v = −cosh x cos y, f = −i cosh z", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 25, Exercise 1(c)`,
        text: String.raw`Show that $u(x, y) = \sinh x\sin y$ is harmonic in some domain and find a harmonic conjugate v(x, y).`,
        solution: String.raw`1. **Harmonic.** $u_x = \cosh x\sin y$, $u_{xx} = \sinh x\sin y$; $u_y = \sinh x\cos y$, $u_{yy} = -\sinh x\sin y$. So $u_{xx} + u_{yy} = 0$ in the whole plane.

2. **Integrate $v_y = u_x$:**
$$v = \int\cosh x\sin y\,dy = -\cosh x\cos y + \phi(x).$$

3. **Use $v_x = -u_y$:** $-\sinh x\cos y + \phi'(x) = -\sinh x\cos y$, so $\phi' = 0$ and φ = C:
$$v(x, y) = -\cosh x\cos y + C.$$

![The level curves u = c₁ and v = c₂ form two orthogonal families](fig/practice-analytic-P11-sketch.svg)

4. **The analytic function.** $f = u + iv = \sinh x\sin y - i\cosh x\cos y = -i(\cosh x\cos y + i\sinh x\sin y) = -i\cosh z$ (+ iC). Check with y = 0: $f(x) = -i\cosh x$ ✓, and $f' = -i\sinh z \ne 0$ off z = nπi, so the level curves are orthogonal.`,
        answer: String.raw`$u_{xx} + u_{yy} = \sinh x\sin y - \sinh x\sin y = 0$; v = −cosh x cos y + C, and u + iv = −i cosh z.` } ] },
    { id: "practice-analytic-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P12", label: "", marks: "", topic: "analytic",
        sub: "u = y/(x² + y²) is harmonic; conjugate v = x/(x² + y²), f = i/z", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 25, Exercise 1(d)`,
        text: String.raw`Show that $u(x, y) = \dfrac{y}{x^2 + y^2}$ is harmonic in some domain and find a harmonic conjugate v(x, y).`,
        solution: String.raw`1. **Domain and derivatives** (z ≠ 0, r² = x² + y²):
$$u_x = \frac{-2xy}{r^4}, \qquad u_y = \frac{x^2 - y^2}{r^4},$$
$$u_{xx} = \frac{2y(3x^2 - y^2)}{r^6}, \qquad u_{yy} = \frac{2y(y^2 - 3x^2)}{r^6},$$
so $u_{xx} + u_{yy} = 0$: u is harmonic in the plane without the origin.

2. **Integrate $v_y = u_x = -2xy/r^4$** with respect to y: since $\dfrac{\partial}{\partial y}\dfrac{x}{r^2} = \dfrac{-2xy}{r^4}$,
$$v = \frac{x}{x^2 + y^2} + \phi(x).$$

3. **Use $v_x = -u_y$:** $\dfrac{y^2 - x^2}{r^4} + \phi'(x) = \dfrac{y^2 - x^2}{r^4}$, so φ′ = 0:
$$v(x, y) = \frac{x}{x^2 + y^2} + C.$$

![u = c are circles centred on the y-axis, v = k are circles centred on the x-axis; all touch at the excluded point 0](fig/practice-analytic-P12-sketch.svg)

4. **Analytic function and geometry.** $\dfrac iz = \dfrac{i(x - iy)}{r^2} = \dfrac{y + ix}{r^2}$, so f = u + iv = i/z (+ iC). The level curves $y/r^2 = c$ are the circles $x^2 + (y - \frac{1}{2c})^2 = \frac{1}{4c^2}$, and $x/r^2 = k$ the circles $(x - \frac1{2k})^2 + y^2 = \frac1{4k^2}$: two orthogonal families of circles through the origin.`,
        answer: String.raw`Harmonic for z ≠ 0; v = x/(x² + y²) + C; f = u + iv = i/z.` } ] },
    { id: "practice-analytic-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P13", label: "", marks: "", topic: "analytic",
        sub: "u = x³ − 3xy² + 3x² − 3y² + 1: conjugate v and f = z³ + 3z² + 1 + ic", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Chapter Two: Analytic Function" (MATH 327), Problem 03`,
        text: String.raw`Let f(z) = u(x, y) + iv(x, y) be analytic. If $u = x^3 - 3xy^2 + 3x^2 - 3y^2 + 1$, find v and express f in terms of z.`,
        solution: String.raw`1. **Check harmonic:** $u_x = 3x^2 - 3y^2 + 6x$, $u_{xx} = 6x + 6$; $u_y = -6xy - 6y$, $u_{yy} = -6x - 6$. Sum = 0 ✓.

2. **$v_y = u_x$:**
$$v = \int(3x^2 - 3y^2 + 6x)\,dy = 3x^2y - y^3 + 6xy + \phi(x).$$

3. **$v_x = -u_y$:** $6xy + 6y + \phi'(x) = 6xy + 6y$, so φ = c:
$$v = 3x^2y + 6xy - y^3 + c.$$

4. **f in terms of z.** $z^3 = x^3 - 3xy^2 + i(3x^2y - y^3)$ and $3z^2 = 3x^2 - 3y^2 + 6ixy$, so
$$f(z) = z^3 + 3z^2 + 1 + ic.$$
(Milne–Thomson check: put y = 0, $f(x) = x^3 + 3x^2 + 1 + ic$, then replace x by z.)

![Level curves of u and v cross at right angles except at the critical points z = 0 and z = −2, where f′ = 0](fig/practice-analytic-P13-sketch.svg)

5. **Orthogonality.** $f'(z) = 3z^2 + 6z = 3z(z + 2)$ vanishes at z = 0 and z = −2; there the level curves through the point meet at 45° instead of 90° (the sketch shows the crossings).`,
        answer: String.raw`v = 3x²y + 6xy − y³ + c; f(z) = z³ + 3z² + 1 + ic.` } ] },
    { id: "practice-analytic-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P14", label: "", marks: "", topic: "analytic",
        sub: "u = x² − y² and v = y/(x² + y²) are harmonic but not harmonic conjugates", type: "proof", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Chapter Two: Analytic Function" (MATH 327), harmonic functions, Problem 01`,
        text: String.raw`Prove that $u = x^2 - y^2$ and $v = \dfrac{y}{x^2 + y^2}$ are harmonic functions of (x, y), but that they are not harmonic conjugates (u + iv is not analytic).`,
        solution: String.raw`1. **u harmonic:** $u_{xx} = 2$, $u_{yy} = -2$, sum 0 (everywhere).

2. **v harmonic** (z ≠ 0): $v_x = \dfrac{-2xy}{r^4}$, $v_y = \dfrac{x^2 - y^2}{r^4}$,
$$v_{xx} = \frac{6x^2y - 2y^3}{r^6}, \qquad v_{yy} = \frac{2y^3 - 6x^2y}{r^6},$$
$$v_{xx} + v_{yy} = 0.$$

3. **Not conjugates.** C–R would need $u_x = v_y$: $2x = \dfrac{x^2 - y^2}{(x^2 + y^2)^2}$, and $u_y = -v_x$: $-2y = \dfrac{2xy}{(x^2 + y^2)^2}$. These fail in general (at (1, 0): $u_x = 2$ but $v_y = 1$), so they do not hold in any domain and u + iv is not analytic. (u is the real part of z², whose conjugate is 2xy; v is the imaginary part of $-1/z$, whose partner is $-x/r^2$.)

![Draw the hyperbolas u = c and the circles v = k: at (1, 1) they meet at 45°, so they are not orthogonal families](fig/practice-analytic-P14-sketch.svg)

4. **Geometric test.** If u + iv were analytic with f′ ≠ 0, the level curves would cross at right angles. At (1, 1): ∇u = (2, −2) and ∇v = (−1/2, 0); the angle between the gradients is 135°, so the curves meet at 45°, confirming they are not conjugates.`,
        answer: String.raw`Both satisfy Laplace's equation (v for z ≠ 0), but $u_x = 2x \ne v_y = (x^2 - y^2)/(x^2 + y^2)^2$ (e.g. at (1, 0): 2 ≠ 1), so C–R fail and u, v are not harmonic conjugates.` } ] },
    { id: "practice-analytic-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P15", label: "", marks: "", topic: "analytic",
        sub: "Find a, b, c, d so that x² + axy + by² + i(cx² + dxy + y²) is analytic", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (Cauchy–Riemann with undetermined constants)`,
        text: String.raw`Find the real constants a, b, c, d such that
$$f(z) = x^2 + axy + by^2 + i(cx^2 + dxy + y^2)$$
is analytic, and express f in terms of z.`,
        solution: String.raw`1. **Partials:** $u = x^2 + axy + by^2$, $v = cx^2 + dxy + y^2$:
$$u_x = 2x + ay, \qquad u_y = ax + 2by,$$
$$v_x = 2cx + dy, \qquad v_y = dx + 2y.$$

2. **$u_x = v_y$ for all x, y:** $2x + ay = dx + 2y$ ⇒ **d = 2, a = 2**.

3. **$u_y = -v_x$ for all x, y:** $ax + 2by = -2cx - dy$ ⇒ $a = -2c$ and $2b = -d$ ⇒ **c = −1, b = −1**.

4. **The function:** $f = x^2 + 2xy - y^2 + i(-x^2 + 2xy + y^2)$. With y = 0: $f(x) = x^2 - ix^2 = (1 - i)x^2$, so
$$f(z) = (1 - i)z^2.$$
Check: $(1 - i)(x^2 - y^2 + 2ixy) = x^2 - y^2 + 2xy + i(2xy - x^2 + y^2)$ ✓. The partials are polynomials (continuous), so f is entire.

![Level curves of u and v: rotated hyperbolas crossing at right angles except at 0](fig/practice-analytic-P15-sketch.svg)

5. **Sketch note.** Since f′ = 2(1 − i)z ≠ 0 except at 0, the two families of hyperbolas are orthogonal away from the origin.`,
        answer: String.raw`a = 2, b = −1, c = −1, d = 2; f(z) = (1 − i)z².` } ] },
    { id: "practice-analytic-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P16", label: "", marks: "", topic: "analytic",
        sub: "f = x² − y² + 2i|xy|: differentiable only in quadrants I, III and at 0", type: "proof", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (differentiability versus analyticity)`,
        text: String.raw`Let $f(z) = x^2 - y^2 + 2i|xy|$. Find where f is differentiable and where it is analytic.`,
        solution: String.raw`1. **Open quadrants I and III** (xy > 0): $f = x^2 - y^2 + 2ixy = z^2$, which is analytic, with f′ = 2z.

2. **Open quadrants II and IV** (xy < 0): $f = x^2 - y^2 - 2ixy = \bar z^2$; here $u_x = 2x$, $v_y = -2x$, so $u_x = v_y$ needs x = 0, which is not in these regions. **Not differentiable.**

3. **On the axes, away from 0.** At $(x_0, 0)$ with $x_0 \ne 0$: $v = 2|x||y|$ and $v(x_0, y) = 2|x_0||y|$ has a corner at y = 0, so $v_y$ does not exist; similarly $v_x$ does not exist at $(0, y_0)$, $y_0 \ne 0$. Existence of the partials is necessary, so f is **not differentiable** there.

4. **At the origin:** $|x^2 - y^2| \le |z|^2$ and $2|xy| \le |z|^2$, so $|f(z)| \le \sqrt2|z|^2$ and
$$\left|\frac{f(z) - f(0)}{z}\right| \le \sqrt2|z| \to 0 \;\Rightarrow\; f'(0) = 0.$$

![Shade quadrants I and III (f = z²); mark 0, where f′(0) = 0 although every disc about 0 meets quadrants II and IV](fig/practice-analytic-P16-sketch.svg)

5. **Conclusion.** f is differentiable exactly on the open first and third quadrants and at z = 0. It is **analytic** on the open quadrants I and III only: at 0 every neighbourhood contains points of quadrants II and IV where f′ does not exist.`,
        answer: String.raw`Differentiable on the open quadrants x, y > 0 and x, y < 0 (f = z², f′ = 2z) and at z = 0 (f′(0) = 0); not on the axes away from 0 or in quadrants II, IV. Analytic only in the open quadrants I and III.` } ] },
    { id: "practice-analytic-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P17", label: "", marks: "", topic: "elementary-functions",
        sub: "All solutions of exp z = −1", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Chapter Three: Elementary Function" (MATH 327), Example after the definition of e^z; also Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 28, Example`,
        text: String.raw`Find all values of z such that $e^z = -1$.`,
        solution: String.raw`**Method:** write both sides in exponential form and equate moduli and arguments: $e^z = e^x e^{iy}$ has modulus $e^x$ and argument y + 2nπ.

1. **Exponential form of −1:** $-1 = 1\cdot e^{i\pi}$. So $e^xe^{iy} = 1\cdot e^{i\pi}$.

2. **Moduli:** $e^x = 1 \Rightarrow x = 0$. **Arguments:** $y = \pi + 2n\pi$ (n = 0, ±1, ±2, …).

![Plot the roots on the imaginary axis: one in each horizontal strip of height 2π, since e^z has period 2πi](fig/practice-analytic-P17-sketch.svg)

3. **Solutions:**
$$z = 0 + i(\pi + 2n\pi) = (2n + 1)\pi i, \qquad n = 0, \pm1, \pm2, \ldots$$
Check: $e^{\pi i} = \cos\pi + i\sin\pi = -1$ ✓. Unlike $e^x$, the complex exponential takes negative values.`,
        answer: String.raw`$e^x = 1$ and y = π + 2nπ, so z = (2n + 1)πi, n = 0, ±1, ±2, ….` } ] },
    { id: "practice-analytic-P18", q: 18, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P18", label: "", marks: "", topic: "elementary-functions",
        sub: "f(z) = exp(z̄) is not analytic anywhere", type: "proof", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Chapter Three: Elementary Function" (MATH 327), Exercise 3; also Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 28, Exercise 3`,
        text: String.raw`Use the Cauchy–Riemann equations to show that $f(z) = \exp\bar z$ is not analytic anywhere.`,
        solution: String.raw`1. **Parts:** $\exp\bar z = e^{x - iy} = e^x(\cos y - i\sin y)$, so $u = e^x\cos y$, $v = -e^x\sin y$:
$$u_x = e^x\cos y, \qquad v_y = -e^x\cos y,$$
$$u_y = -e^x\sin y, \qquad v_x = -e^x\sin y.$$

2. **C–R equations:**
   - $u_x = v_y$: $e^x\cos y = -e^x\cos y$ ⇒ **cos y = 0** (lines y = π/2 + nπ).
   - $u_y = -v_x$: $-e^x\sin y = e^x\sin y$ ⇒ **sin y = 0** (lines y = nπ).

![Draw the lines cos y = 0 and sin y = 0: they interleave and never coincide](fig/practice-analytic-P18-sketch.svg)

3. **Conclusion.** $\cos y$ and $\sin y$ cannot vanish together ($\cos^2y + \sin^2y = 1$), so the C–R equations hold at no point; f′(z) exists nowhere and f is analytic nowhere.`,
        answer: String.raw`u = eˣ cos y, v = −eˣ sin y: C–R need cos y = 0 and sin y = 0 simultaneously, impossible, so exp z̄ is differentiable (hence analytic) nowhere.` } ] },
    { id: "practice-analytic-P19", q: 19, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P19", label: "", marks: "", topic: "elementary-functions",
        sub: "|exp(−2z)| < 1 if and only if Re z > 0", type: "proof", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Chapter Three: Elementary Function" (MATH 327), Exercise 7`,
        text: String.raw`Prove that $|\exp(-2z)| < 1$ if and only if Re(z) > 0.`,
        solution: String.raw`1. **Modulus of an exponential.** $\exp(-2z) = e^{-2x - 2iy} = e^{-2x}e^{-2iy}$ and $|e^{-2iy}| = 1$, so
$$|\exp(-2z)| = e^{-2x}.$$

2. **Equivalence.** Since $e^t$ is strictly increasing on the reals,
$$e^{-2x} < 1 = e^0 \iff -2x < 0$$
$$\iff x > 0 \iff \mathrm{Re}\,z > 0.$$
Each step reverses, giving both directions ("if and only if").

![Shade the right half-plane: there |e^{−2z}| < 1; on the imaginary axis it equals 1](fig/practice-analytic-P19-sketch.svg)

3. **Picture.** The modulus depends on x only: the level sets of $|e^{-2z}|$ are vertical lines, equal to 1 on the imaginary axis and less than 1 to its right.`,
        answer: String.raw`$|\exp(-2z)| = e^{-2x} < 1$ ⇔ −2x < 0 ⇔ x = Re z > 0.` } ] },
    { id: "practice-analytic-P20", q: 20, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P20", label: "", marks: "", topic: "elementary-functions",
        sub: "exp(2 ± 3πi) = −e², exp((2 + πi)/4) = √(e/2)(1 + i), exp(z + πi) = −exp z", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 28, Exercise 1`,
        text: String.raw`Show that (a) $\exp(2 \pm 3\pi i) = -e^2$; (b) $\exp\left(\dfrac{2 + \pi i}{4}\right) = \sqrt{\dfrac e2}\,(1 + i)$; (c) $\exp(z + \pi i) = -\exp z$.`,
        solution: String.raw`**Method:** $e^{x + iy} = e^x(\cos y + i\sin y)$: modulus $e^x$, argument y.

1. **(a)** $\exp(2 \pm 3\pi i) = e^2(\cos3\pi \pm i\sin3\pi) = e^2(-1 + 0) = -e^2$.

2. **(b)** $\exp\left(\dfrac12 + \dfrac{\pi i}{4}\right) = e^{1/2}\left(\cos\dfrac\pi4 + i\sin\dfrac\pi4\right) = \sqrt e\cdot\dfrac{1 + i}{\sqrt2} = \sqrt{\dfrac e2}(1 + i)$.

![Plot the values in the w-plane by modulus e^x and angle y](fig/practice-analytic-P20-sketch.svg)

3. **(c)** $\exp(z + \pi i) = e^z e^{\pi i} = e^z(-1) = -\exp z$: adding πi to z rotates $e^z$ through the angle π (and adding 2πi leaves it unchanged, the period).`,
        answer: String.raw`(a) e²(cos 3π ± i sin 3π) = −e². (b) $e^{1/2}e^{i\pi/4} = \sqrt e(1 + i)/\sqrt2 = \sqrt{e/2}\,(1 + i)$. (c) $e^ze^{\pi i} = -e^z$.` } ] },
    { id: "practice-analytic-P21", q: 21, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P21", label: "", marks: "", topic: "elementary-functions",
        sub: "General and principal values of ln 1, ln(−1) and log i", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Chapter Three: Elementary Function" (MATH 327), For Practice 1; also Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 30, Exercise 2(b)`,
        text: String.raw`Find the principal and general values of ln 1 and ln(−1), and show that $\log i = \left(2n + \tfrac12\right)\pi i$ (n = 0, ±1, ±2, …).`,
        solution: String.raw`**Method:** $\log z = \ln|z| + i\arg z = \ln r + i(\Theta + 2n\pi)$; the principal value Log z takes n = 0 with $-\pi < \Theta \le \pi$.

1. **ln 1:** r = 1, Θ = 0:
$$\ln 1 = 0 + i(0 + 2n\pi) = 2n\pi i, \qquad \mathrm{Log}\,1 = 0.$$

2. **ln(−1):** r = 1, Θ = π:
$$\ln(-1) = i(\pi + 2n\pi) = (2n + 1)\pi i, \qquad \mathrm{Log}(-1) = \pi i.$$

3. **log i:** r = 1, Θ = π/2:
$$\log i = i\left(\frac\pi2 + 2n\pi\right) = \left(2n + \frac12\right)\pi i, \qquad \mathrm{Log}\,i = \frac{\pi i}{2}.$$

![All values have real part ln 1 = 0; they are spaced 2πi apart, and the principal values lie in the strip −π < Im w ≤ π](fig/practice-analytic-P21-sketch.svg)

4. **Check:** $e^{2n\pi i} = 1$, $e^{(2n + 1)\pi i} = -1$, $e^{(2n + 1/2)\pi i} = i$ ✓. Note that ln 1 has infinitely many values, of which only the principal one is the real logarithm 0.`,
        answer: String.raw`ln 1 = 2nπi (P.V. 0); ln(−1) = (2n + 1)πi (P.V. πi); log i = (2n + ½)πi (P.V. πi/2).` } ] },
    { id: "practice-analytic-P22", q: 22, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P22", label: "", marks: "", topic: "elementary-functions",
        sub: "All roots of log z = iπ/2", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 30, Exercise 7`,
        text: String.raw`Find all roots of the equation $\log z = i\pi/2$.`,
        solution: String.raw`1. **Write z = re^{iθ}.** Every value of log z has the form $\ln r + i(\Theta + 2n\pi)$. Setting one such value equal to iπ/2:
$$\ln r = 0, \qquad \theta = \frac\pi2 \;(\text{some argument of } z).$$

2. **Hence** r = 1 and z has the argument π/2: $z = e^{i\pi/2} = i$.

![The only point with r = 1 and argument π/2 is z = i](fig/practice-analytic-P22-sketch.svg)

3. **Alternatively** apply exp: $z = e^{\log z} = e^{i\pi/2} = i$. So the only root is **z = i**; indeed $\log i = (2n + \frac12)\pi i$ contains iπ/2 (n = 0). Exponentiating gives a single z because exp is single-valued, even though log is multivalued.`,
        answer: String.raw`ln r = 0 and θ = π/2 give $z = e^{i\pi/2} = i$ (the only root).` } ] },
    { id: "practice-analytic-P23", q: 23, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P23", label: "", marks: "", topic: "elementary-functions",
        sub: "log(i²) = 2 log i on the branch π/4 < θ < 9π/4 but not on 3π/4 < θ < 11π/4", type: "proof", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 30, Exercise 4`,
        text: String.raw`Show that (a) $\log(i^2) = 2\log i$ when $\log z = \ln r + i\theta$ ($r > 0$, $\pi/4 < \theta < 9\pi/4$); (b) $\log(i^2) \ne 2\log i$ when $\log z = \ln r + i\theta$ ($r > 0$, $3\pi/4 < \theta < 11\pi/4$).`,
        solution: String.raw`**Method:** on a branch, the argument used must be the one lying in the stated interval. Here $i^2 = -1$.

1. **(a) Branch π/4 < θ < 9π/4.** The argument of i in this interval is π/2, and that of −1 is π:
$$\log(i^2) = \log(-1) = \ln1 + i\pi = i\pi,$$
$$2\log i = 2\left(i\frac\pi2\right) = i\pi.$$
Equal ✓.

![Draw each branch cut and read off the arguments of i and −1 that lie in the allowed interval](fig/practice-analytic-P23-sketch.svg)

2. **(b) Branch 3π/4 < θ < 11π/4.** Now π/2 is not allowed; the argument of i in the interval is π/2 + 2π = 5π/2. The argument of −1 is still π:
$$\log(i^2) = \log(-1) = i\pi,$$
$$2\log i = 2\left(i\frac{5\pi}2\right) = 5\pi i \ne i\pi.$$

3. **Moral.** The rule log(z²) = 2 log z holds only when doubling the chosen argument of z lands back in the branch interval (2 · 5π/2 = 5π is outside (3π/4, 11π/4)).`,
        answer: String.raw`(a) log(−1) = iπ and 2 log i = 2(iπ/2) = iπ: equal. (b) log(−1) = iπ but log i = i5π/2, so 2 log i = 5πi ≠ iπ.` } ] },
    { id: "practice-analytic-P24", q: 24, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P24", label: "", marks: "", topic: "elementary-functions",
        sub: "Log(z + 4)/(z² + i) is analytic except at ±(1 − i)/√2 and on x ≤ −4", type: "proof", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 30, Exercise 9(b)`,
        text: String.raw`Show that the function $\dfrac{\mathrm{Log}(z + 4)}{z^2 + i}$ is analytic everywhere except at the points $\pm(1 - i)/\sqrt2$ and on the portion $x \le -4$ of the real axis.`,
        solution: String.raw`1. **Numerator.** Log w is analytic on the plane minus the ray $\{w \le 0\}$ (the origin and the negative real axis). With w = z + 4, Log(z + 4) fails to be analytic exactly where z + 4 is real and ≤ 0, i.e. **z = x ≤ −4** on the real axis. Elsewhere it is analytic with derivative 1/(z + 4).

2. **Denominator.** $z^2 + i = 0 \iff z^2 = -i = e^{-i\pi/2} \iff z = \pm e^{-i\pi/4} = \pm\dfrac{1 - i}{\sqrt2}$.

![Draw the branch cut x ≤ −4 of Log(z + 4) and the zeros of z² + i (hollow points)](fig/practice-analytic-P24-sketch.svg)

3. **Quotient.** A quotient of analytic functions is analytic where the denominator is non-zero. Hence the function is analytic everywhere except on the ray x ≤ −4 and at the two points $\pm(1 - i)/\sqrt2$ (neither of which lies on the ray, so the two sets are separate).`,
        answer: String.raw`Log(z + 4) is analytic off the ray z + 4 ≤ 0 (x ≤ −4, y = 0); z² + i = 0 at z = ±(1 − i)/√2; the quotient is analytic everywhere else.` } ] },
    { id: "practice-analytic-P25", q: 25, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P25", label: "", marks: "", topic: "elementary-functions",
        sub: "All values of i to the power −2i; principal value of [(e/2)(−1 − √3i)] to the power 3πi", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Chapter Three: Elementary Function" (MATH 327), Complex exponent Example and Problem 01(b); also Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 32, Exercise 2(b)`,
        text: String.raw`(a) Find all values of $i^{-2i}$. (b) Find the principal value of $\left[\dfrac e2\left(-1 - \sqrt3 i\right)\right]^{3\pi i}$.`,
        solution: String.raw`**Method:** $z^c = \exp(c\log z)$ (all values) and P.V. $z^c = \exp(c\,\mathrm{Log}\,z)$ with $-\pi < \mathrm{Arg}\,z \le \pi$.

1. **(a)** $\log i = \left(2n + \tfrac12\right)\pi i$, so
$$i^{-2i} = \exp\left[-2i\left(2n + \tfrac12\right)\pi i\right]$$
$$= \exp[(4n + 1)\pi], \quad n = 0, \pm1, \ldots$$
All values are real and positive; the principal value (n = 0) is $e^\pi \approx 23.14$.

2. **(b) Polar form of the base.** $z = \dfrac e2(-1 - \sqrt3i)$ has modulus $\dfrac e2\cdot2 = e$ and lies in quadrant III with $\mathrm{Arg}\,z = -\pi + \dfrac\pi3 = -\dfrac{2\pi}3$. So
$$\mathrm{Log}\,z = \ln e - \frac{2\pi i}3 = 1 - \frac{2\pi i}{3}.$$

![Locate the bases: i at angle π/2 and (e/2)(−1 − √3i) at modulus e, Arg −2π/3 (quadrant III)](fig/practice-analytic-P25-sketch.svg)

3. **(b) Principal value:**
$$3\pi i\,\mathrm{Log}\,z = 3\pi i - 2\pi^2i^2 = 2\pi^2 + 3\pi i,$$
$$\text{P.V.} = e^{2\pi^2}e^{3\pi i} = -e^{2\pi^2} \approx -3.74\times10^8.$$`,
        answer: String.raw`(a) $i^{-2i} = \exp[(4n + 1)\pi]$ (P.V. $e^\pi$). (b) Log of the base = 1 − 2πi/3, so P.V. = exp(2π² + 3πi) = −exp(2π²).` } ] },
    { id: "practice-analytic-P26", q: 26, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P26", label: "", marks: "", topic: "elementary-functions",
        sub: "(−1) to the power 1/π equals exp((2n + 1)i): infinitely many values on the unit circle", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 32, Exercise 1(b)`,
        text: String.raw`Show that $(-1)^{1/\pi} = e^{(2n + 1)i}$ (n = 0, ±1, ±2, …).`,
        solution: String.raw`1. **Definition:** $(-1)^{1/\pi} = \exp\left[\dfrac1\pi\log(-1)\right]$ with $\log(-1) = (2n + 1)\pi i$:
$$(-1)^{1/\pi} = \exp\left[\frac{(2n + 1)\pi i}{\pi}\right] = e^{(2n + 1)i},$$
with n = 0, ±1, ±2, …

2. **Location.** Each value has modulus 1 and argument 2n + 1 radians, so all lie on the unit circle. The principal value (n = 0) is $e^i = \cos1 + i\sin1 \approx 0.540 + 0.841i$.

![Plot e^{(2n + 1)i} on the unit circle for several n: the values never repeat](fig/practice-analytic-P26-sketch.svg)

3. **How many values?** Two values coincide only if $(2n + 1) - (2m + 1) = 2(n - m)$ is a multiple of 2π, i.e. $n - m = k\pi$, impossible for integers unless n = m because π is irrational. So there are infinitely many distinct values (in fact dense on the circle), in contrast with a rational exponent such as $(-1)^{1/3}$, which has only 3.`,
        answer: String.raw`$(-1)^{1/\pi} = \exp[(1/\pi)(2n + 1)\pi i] = e^{(2n+1)i}$: infinitely many distinct values on |w| = 1; P.V. $e^i = \cos1 + i\sin1$.` } ] },
    { id: "practice-analytic-P27", q: 27, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P27", label: "", marks: "", topic: "elementary-functions",
        sub: "All roots of sin z = cosh 4", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 33, Exercise 17; also Lecture notes "Chapter Three: Elementary Function" (MATH 327), Exercise 17`,
        text: String.raw`Find all roots of the equation $\sin z = \cosh 4$ by equating the real parts and the imaginary parts of sin z and cosh 4.`,
        solution: String.raw`1. **Expand:** $\sin z = \sin x\cosh y + i\cos x\sinh y$. Equating with the real number cosh 4:
$$\sin x\cosh y = \cosh 4, \qquad \cos x\sinh y = 0.$$

2. **Imaginary part.** Either sinh y = 0 or cos x = 0.
   - If sinh y = 0 then y = 0 and $\sin x = \cosh 4 \approx 27.3 > 1$: impossible.
   - So **cos x = 0**: $x = \pi/2 + n\pi$, and then sin x = ±1.

3. **Real part.** $\pm\cosh y = \cosh 4$ with cosh y > 0 forces the + sign, i.e. sin x = 1: $x = \pi/2 + 2n\pi$, and $\cosh y = \cosh 4 \Rightarrow y = \pm4$.

![Roots lie on the lines x = π/2 + 2nπ, at heights ±4](fig/practice-analytic-P27-sketch.svg)

4. **Roots:**
$$z = \frac\pi2 + 2n\pi \pm 4i, \qquad n = 0, \pm1, \pm2, \ldots$$
Check: $\sin(\pi/2 + 4i) = \sin\frac\pi2\cosh4 + i\cos\frac\pi2\sinh4 = \cosh4$ ✓ (numerically 27.308).`,
        answer: String.raw`cos x sinh y = 0 and sin x cosh y = cosh 4 give cos x = 0, sin x = 1, cosh y = cosh 4: z = π/2 + 2nπ ± 4i.` } ] },
    { id: "practice-analytic-P28", q: 28, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P28", label: "", marks: "", topic: "elementary-functions",
        sub: "Roots of sinh z = i and cosh z = ½", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 34, Exercise 15`,
        text: String.raw`Find all roots of the equations (a) $\sinh z = i$; (b) $\cosh z = \dfrac12$.`,
        solution: String.raw`**Method:** $\sinh z = \sinh x\cos y + i\cosh x\sin y$ and $\cosh z = \cosh x\cos y + i\sinh x\sin y$; equate real and imaginary parts, using cosh x ≥ 1.

1. **(a) sinh z = i:** $\sinh x\cos y = 0$ and $\cosh x\sin y = 1$.
   - If cos y = 0 then sin y = ±1 and $\cosh x = \pm1$; only $\cosh x = 1$, sin y = 1 works: x = 0, $y = \pi/2 + 2n\pi$.
   - If sinh x = 0 then x = 0, cosh x = 1 and sin y = 1: the same points.

   $$z = \left(2n + \frac12\right)\pi i.$$

2. **(b) cosh z = ½:** $\cosh x\cos y = \frac12$ and $\sinh x\sin y = 0$.
   - If sin y = 0 then cos y = ±1 and $\cosh x = \pm\frac12$: impossible (cosh x ≥ 1).
   - So sinh x = 0: x = 0 and $\cos y = \frac12$, $y = \pm\frac\pi3 + 2n\pi$.

   $$z = \left(2n \pm \frac13\right)\pi i.$$

![All roots lie on the imaginary axis; plot both families](fig/practice-analytic-P28-sketch.svg)

3. **Check:** $\sinh(i\pi/2) = i\sin(\pi/2) = i$ ✓ and $\cosh(i\pi/3) = \cos(\pi/3) = \frac12$ ✓ (using sinh(iy) = i sin y, cosh(iy) = cos y).`,
        answer: String.raw`(a) z = (2n + ½)πi; (b) z = (2n ± ⅓)πi, n = 0, ±1, ±2, ….` } ] },
    { id: "practice-analytic-P29", q: 29, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P29", label: "", marks: "", topic: "elementary-functions",
        sub: "Zeros of sinh z and cosh z; zeros and singular points of tanh z", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 34, Exercises 8 and 9`,
        text: String.raw`Show that the zeros of sinh z are $z = n\pi i$ and those of cosh z are $z = \left(\frac\pi2 + n\pi\right)i$ (n = 0, ±1, ±2, …). Hence locate all zeros and singularities of tanh z.`,
        solution: String.raw`1. **sinh z = 0:** $\sinh x\cos y = 0$ and $\cosh x\sin y = 0$. Since cosh x ≥ 1, sin y = 0, so cos y = ±1 and then sinh x = 0, x = 0:
$$z = n\pi i.$$

2. **cosh z = 0:** $\cosh x\cos y = 0$ ⇒ cos y = 0 ⇒ sin y = ±1; then $\sinh x\sin y = 0$ ⇒ sinh x = 0, x = 0:
$$z = \left(\frac\pi2 + n\pi\right)i.$$
(Equivalently, sinh z = −i sin(iz) and cosh z = cos(iz), so these are the zeros of sin and cos rotated onto the imaginary axis.)

![Zeros of tanh z (filled) and its singular points (hollow) alternate along the imaginary axis](fig/practice-analytic-P29-sketch.svg)

3. **tanh z = sinh z/cosh z.** It is analytic wherever cosh z ≠ 0, so its **singular points** are $z = \left(n + \frac12\right)\pi i$; its **zeros** are the zeros of sinh z, $z = n\pi i$ (cosh z ≠ 0 there since $\cosh(n\pi i) = \cos n\pi = \pm1$).`,
        answer: String.raw`sinh z = 0 ⇔ z = nπi; cosh z = 0 ⇔ z = (n + ½)πi. tanh z has zeros nπi and singular points (n + ½)πi, and is analytic elsewhere.` } ] },
    { id: "practice-analytic-P30", q: 30, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-analytic-P30", label: "", marks: "", topic: "elementary-functions",
        sub: "Solve tan z = 2i", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (inverse trigonometric equation via exponentials)`,
        text: String.raw`Find all solutions of $\tan z = 2i$.`,
        solution: String.raw`**Method:** write tan z in terms of $W = e^{2iz}$, solve for W, then take logarithms.

1. **Rewrite:**
$$\tan z = \frac{\sin z}{\cos z} = \frac{e^{iz} - e^{-iz}}{i(e^{iz} + e^{-iz})} = \frac{W - 1}{i(W + 1)},$$
where $W = e^{2iz}$ (multiply top and bottom by $e^{iz}$).

2. **Solve for W:** $\dfrac{W - 1}{i(W + 1)} = 2i \Rightarrow W - 1 = -2(W + 1) \Rightarrow 3W = -1 \Rightarrow W = -\dfrac13.$

3. **Logarithm:** $2iz = \log\left(-\dfrac13\right) = -\ln3 + (2n + 1)\pi i$, so
$$z = \frac{(2n + 1)\pi}{2} + \frac i2\ln3, \qquad n = 0, \pm1, \pm2, \ldots$$

![The roots sit at height ½ ln 3 ≈ 0.549 directly above the poles (n + ½)π of tan z](fig/practice-analytic-P30-sketch.svg)

4. **Check** (n = 0, z = π/2 + 0.549i): numerically tan z = 0.000 + 2.000i ✓. The real parts are the points where tan x has its poles: there $\tan(\pi/2 + iy) = -\cot(iy) = i\coth y$, and $\coth y = 2$ gives $y = \tfrac12\ln3$.`,
        answer: String.raw`$e^{2iz} = -1/3$, so z = (2n + 1)π/2 + (i/2) ln 3 (n = 0, ±1, …).` } ] }
  ]
});
