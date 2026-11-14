QB.paper({
  year: "2018-19", date: "09/01/2021", marks: 240,
  rules: String.raw`L-2/T-2 (ME) B.Sc. Engineering Examinations 2018-2019, MATH 263 (Complex Variables, Harmonic Analysis and Partial Differential Equations), 2 hours, 240 marks. Section A: four questions, answer any THREE. Section B: four questions, answer any THREE. Use separate scripts for each section. This is the older MATH 263 course: only Section A (complex variables) is included here; Section B (Lagrange/Charpit PDEs, higher-order PDEs, Fourier series and integrals, heat and Laplace equations) belongs to a different syllabus and is not included.`,
  questions: [
    { id: "2018-19-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q1a", label: "(a)", marks: "10",
          topic: "complex-algebra", sub: "(z − i)/(z + i) purely imaginary ⇒ z lies on the unit circle",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`If the ratio of $\frac{z - i}{z + i}$ is purely imaginary, then show that the point z lies on a circle whose centre is at the origin and radius 1.`,
          solution: String.raw`1. **Write z = x + iy** and rationalise:
$$\frac{z - i}{z + i} = \frac{x + i(y - 1)}{x + i(y + 1)} = \frac{[x + i(y - 1)][x - i(y + 1)]}{x^2 + (y + 1)^2}$$

2. **Expand the numerator:**
$$x^2 - ix(y + 1) + ix(y - 1) + (y - 1)(y + 1) = (x^2 + y^2 - 1) - 2ix$$
$$\frac{z - i}{z + i} = \frac{x^2 + y^2 - 1}{x^2 + (y + 1)^2} - i\frac{2x}{x^2 + (y + 1)^2}$$

3. **Purely imaginary ⇒ real part zero:**
$$x^2 + y^2 - 1 = 0 \;\Rightarrow\; x^2 + y^2 = 1, \quad\text{i.e. } |z| = 1$$
   This is the circle with **centre at the origin and radius 1**. ∎

4. **Excluded points.** z = −i is excluded (the ratio is undefined there). z = i is also excluded if a purely imaginary number must be non-zero, since the ratio is 0 there (imaginary part −2x = 0).

5. **Geometric view.** $\arg\frac{z - i}{z + i} = \pm\frac\pi2$ means the segments from z to i and to −i are perpendicular. So z sees the diameter from −i to i at a right angle, which puts z on the circle having that segment as diameter: |z| = 1.

![The unit circle |z| = 1, with i and −i excluded](fig/2018-19-Q1a-sketch.svg)`,
          answer: String.raw`(z − i)/(z + i) = [(x² + y² − 1) − 2ix]/[x² + (y + 1)²]; Re = 0 ⇒ x² + y² = 1: the unit circle (centre 0, radius 1), excluding ±i.` },
        { id: "2018-19-Q1b", label: "(b)", marks: "15",
          topic: "elementary-functions", sub: "Analyticity of w = ln z and its derivative 1/z",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Test the analyticity of the function w = ln(z) and find its derivative.`,
          solution: String.raw`1. **Definition (principal branch).** With $z = re^{i\theta}$, r > 0, −π < θ ≤ π:
$$w = \ln z = \ln r + i\theta \;\Rightarrow\; u(r, \theta) = \ln r, \quad v(r, \theta) = \theta$$
   (Other branches add $2k\pi i$.)

2. **Polar Cauchy–Riemann equations:** $u_r = \dfrac1rv_\theta$, $v_r = -\dfrac1ru_\theta$.
$$u_r = \frac1r, \quad u_\theta = 0, \quad v_r = 0, \quad v_\theta = 1$$
$$u_r = \frac1r = \frac1r v_\theta\ ✓, \qquad v_r = 0 = -\frac1ru_\theta\ ✓$$

3. **Continuity of the partials.** They are continuous for r > 0, −π < θ < π. On the negative real axis (θ = π) v = θ jumps by 2π, so ln z is not even continuous there. At z = 0, ln r → −∞.

4. **Conclusion.** The CR equations hold with continuous partials, so ln z is **analytic in the domain r > 0, −π < θ < π**: the plane cut along the non-positive real axis, the branch cut. It is not analytic at z = 0 (a branch point) or on the cut.

5. **Derivative** (polar formula):
$$\frac{dw}{dz} = e^{-i\theta}(u_r + iv_r) = e^{-i\theta}\cdot\frac1r = \frac{1}{re^{i\theta}} = \frac1z$$
   Check: z = e^w gives dz/dw = e^w = z, so dw/dz = 1/z ✓.`,
          answer: String.raw`ln z = ln r + iθ (u = ln r, v = θ): u_r = 1/r = v_θ/r, v_r = 0 = −u_θ/r with continuous partials ⇒ analytic for r > 0, −π < θ < π (not at 0 or on the branch cut); d(ln z)/dz = e^{−iθ}(1/r) = 1/z.` },
        { id: "2018-19-Q1c", label: "(c)", marks: "15",
          topic: "mapping", sub: "w = 1/z maps the line y − x + 1 = 0 onto a circle (with sketch)",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Prove that under the bilinear transformation, $w = \frac1z$ the image of straight line y − x + 1 = 0 in z-plane is transformed into a circle of w plane. Also sketch the figure.`,
          solution: String.raw`1. **Inverse map.** With w = u + iv, z = 1/w:
$$x + iy = \frac{1}{u + iv} = \frac{u - iv}{u^2 + v^2} \;\Rightarrow\; x = \frac{u}{u^2 + v^2}, \qquad y = \frac{-v}{u^2 + v^2}$$

2. **Substitute into y − x + 1 = 0:**
$$\frac{-v}{u^2 + v^2} - \frac{u}{u^2 + v^2} + 1 = 0 \;\Rightarrow\; u^2 + v^2 - u - v = 0$$

3. **Complete the squares:**
$$\left(u - \tfrac12\right)^2 + \left(v - \tfrac12\right)^2 = \tfrac12$$
   This is a **circle** with centre $\tfrac12 + \tfrac12i$ and radius $1/\sqrt2$. ∎

4. **Checks.**
   - z = 1 (on the line) maps to w = 1, and z = −i maps to w = i; both satisfy the circle equation.
   - The circle passes through w = 0, the image of the point at infinity on the line. A line not through the origin maps under 1/z to a circle through the origin.
   - The bilinear map takes "circles" (lines and circles) to circles.

![The line y = x − 1 in the z-plane and its image circle (u − ½)² + (v − ½)² = ½ in the w-plane](fig/2018-19-Q1c-sketch.svg)`,
          answer: String.raw`x = u/(u² + v²), y = −v/(u² + v²) ⇒ −v − u + (u² + v²) = 0 ⇒ (u − ½)² + (v − ½)² = ½: a circle, centre ½ + ½i, radius 1/√2, through w = 0 (image of z = ∞).` }
      ] },
    { id: "2018-19-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q2a", label: "(a)", marks: "20",
          topic: "analytic", sub: "v = 2x(1 − y) is harmonic; analytic f(z) = −z² + 2iz + c",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that v(x, y) = 2x(1 − y) is a harmonic function. Find an analytic function f(z) and express f(z) in terms of z.`,
          solution: String.raw`1. **Harmonic test.** v = 2x − 2xy:
$$v_x = 2 - 2y, \quad v_{xx} = 0, \qquad v_y = -2x, \quad v_{yy} = 0 \;\Rightarrow\; v_{xx} + v_{yy} = 0$$
   v is harmonic.

2. **Find u from the CR equations** ($u_x = v_y$, $u_y = -v_x$). From $u_x = v_y = -2x$:
$$u = -x^2 + g(y)$$
   Then $u_y = g'(y) = -v_x = -(2 - 2y) = 2y - 2$, so $g(y) = y^2 - 2y + c$.
$$u = y^2 - x^2 - 2y + c$$

3. **Assemble f = u + iv:**
$$f = (y^2 - x^2 - 2y) + i(2x - 2xy) + c = -(x^2 - y^2 + 2ixy) + 2i(x + iy) + c$$
   since $-(x + iy)^2 = -(x^2 - y^2) - 2ixy$ and $2i(x + iy) = 2ix - 2y$.
$$\boxed{f(z) = -z^2 + 2iz + c}\quad(c\ \text{real})$$

4. **Check by Milne–Thomson.** $f'(z) = v_y + iv_x$; put x = z, y = 0: $f'(z) = -2z + 2i$, so $f = -z^2 + 2iz + C$ ✓. The imaginary part of $-z^2 + 2iz$ is $-2xy + 2x = 2x(1 - y)$ ✓.`,
          answer: String.raw`v_xx + v_yy = 0 + 0 ⇒ harmonic; u = y² − x² − 2y + c ⇒ f(z) = −z² + 2iz + c (Milne–Thomson: f′ = v_y + iv_x → −2z + 2i).` },
        { id: "2018-19-Q2b", label: "(b)", marks: "20",
          topic: "complex-integration", sub: "∫(2y + x²)dx + (3x − y)dy along two segments; path dependence",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate $\int_{(0,3)}^{(2,4)}(2y + x^2)dx + (3x - y)dy$ along the straight line from (0, 3) to (2, 3) and then from (2, 3) to (2, 4). Is the integral is independent of path?`,
          solution: String.raw`**Given:** P = 2y + x², Q = 3x − y; the path (0, 3) → (2, 3) → (2, 4).

1. **Segment 1:** y = 3 (dy = 0), x from 0 to 2:
$$\int_0^2(6 + x^2)\,dx = 12 + \frac83 = \frac{44}{3}$$

2. **Segment 2:** x = 2 (dx = 0), y from 3 to 4:
$$\int_3^4(6 - y)\,dy = \left[6y - \frac{y^2}{2}\right]_3^4 = 16 - 13.5 = \frac52$$

3. **Total:**
$$\int = \frac{44}{3} + \frac52 = \frac{103}{6} \approx 17.17$$

4. **Independence of path.** The line integral $\int P\,dx + Q\,dy$ is independent of path in a simply connected region if and only if $\partial P/\partial y = \partial Q/\partial x$ (P dx + Q dy is then exact). Here
$$\frac{\partial P}{\partial y} = 2 \ne \frac{\partial Q}{\partial x} = 3$$
   so the integral **depends on the path**.
   For example, along the straight line from (0, 3) to (2, 4), x = 2t, y = 3 + t (0 ≤ t ≤ 1):
$$\int_0^1[2(3 + t) + 4t^2](2\,dt) + (6t - 3 - t)\,dt = \int_0^1(9 + 9t + 8t^2)\,dt = \frac{97}{6} \ne \frac{103}{6}$$
   By Green's theorem, the difference equals $\iint(Q_x - P_y)\,dA = 1 \times$(area of the triangle between the paths) = 1, which matches 103/6 − 97/6 ✓.`,
          answer: String.raw`∫₀²(6 + x²)dx + ∫₃⁴(6 − y)dy = 44/3 + 5/2 = 103/6 ≈ 17.17. Not path-independent: ∂P/∂y = 2 ≠ ∂Q/∂x = 3 (straight line gives 97/6).` }
      ] },
    { id: "2018-19-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q3a", label: "(a)", marks: "20",
          topic: "complex-integration", sub: "Cauchy integral formula: ∮ e^{3z}/(z − i)⁴ dz on the square |x|, |y| ≤ 2",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate the integral $\oint_C\frac{e^{3z}}{(z - i)^4}dz$ by Cauchy integral formula where, $C = \{(x, y) : |x| \le 2, |y| \le 2\}$ is positively oriented.`,
          solution: String.raw`1. **Generalised Cauchy integral formula:** if f is analytic inside and on C and a is inside C,
$$\oint_C\frac{f(z)}{(z - a)^{n+1}}dz = \frac{2\pi i}{n!}f^{(n)}(a)$$

2. **Identify:** $f(z) = e^{3z}$ is entire; a = i lies inside the square (|0| ≤ 2, |1| ≤ 2); n + 1 = 4, so n = 3.

![The square contour enclosing z = i](fig/2018-19-Q3a-sketch.svg)

3. **Third derivative:** $f'''(z) = 27e^{3z}$, so $f'''(i) = 27e^{3i}$.

4. **Evaluate:**
$$\oint_C\frac{e^{3z}}{(z - i)^4}dz = \frac{2\pi i}{3!}\cdot27e^{3i} = 9\pi ie^{3i} = 9\pi i(\cos3 + i\sin3) = -9\pi\sin3 + 9\pi i\cos3$$
   Numerically: −3.990 − 27.991i.`,
          answer: String.raw`a = i inside, n = 3: ∮ = (2πi/3!)·27e^{3i} = 9πie^{3i} = −9π sin 3 + 9πi cos 3 ≈ −3.99 − 27.99i.` },
        { id: "2018-19-Q3b", label: "(b)", marks: "20",
          topic: "series", sub: "Laurent series of 1/(z + 3) for 5 < |z − (1 − 3i)| < ∞",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Express $f(z) = \frac{1}{z + 3}$ in a Laurent series valid in the region $5 < |z - (1 - 3i)| < \infty$.`,
          solution: String.raw`1. **Centre a = 1 − 3i.** Put u = z − a = z − 1 + 3i. Then
$$z + 3 = u + (a + 3) = u + (4 - 3i), \qquad |4 - 3i| = 5$$
   The only singularity, z = −3, is at distance 5 from a. So the region |u| > 5 is the exterior annulus.

2. **Factor out u** (valid since |(4 − 3i)/u| < 1 for |u| > 5):
$$f = \frac{1}{u\left(1 + \frac{4 - 3i}{u}\right)} = \frac1u\sum_{n=0}^\infty(-1)^n\left(\frac{4 - 3i}{u}\right)^n$$

3. **Laurent series:**
$$f(z) = \sum_{n=0}^\infty\frac{(-1)^n(4 - 3i)^n}{(z - 1 + 3i)^{n+1}} = \frac{1}{z - 1 + 3i} - \frac{4 - 3i}{(z - 1 + 3i)^2} + \frac{(4 - 3i)^2}{(z - 1 + 3i)^3} - \cdots$$
   Here $(4 - 3i)^2 = 7 - 24i$.

4. **Check.** At z = a + 7e^{0.3i}, 200 terms of the series agree with 1/(z + 3) to machine precision. The series has only negative powers: in this exterior region there is no analytic part.`,
          answer: String.raw`u = z − (1 − 3i), z + 3 = u + (4 − 3i), |4 − 3i| = 5 ⇒ f = Σₙ₌₀^∞ (−1)ⁿ(4 − 3i)ⁿ/(z − 1 + 3i)ⁿ⁺¹ for |z − 1 + 3i| > 5.` }
      ] },
    { id: "2018-19-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q4a", label: "(a)", marks: "20",
          topic: "residues", sub: "∮ z dz/((z² − 1)(z − 3)²) on |z − 1| = 2: poles on the contour",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Use Cauchy's residue theorem evaluate the integral $\oint_C\frac{z\,dz}{(z^2 - 1)(z - 3)^2}$ where $C = \{z : |z - 1| = 2, \text{positively oriented}\}$.`,
          solution: String.raw`1. **Singularities.** Simple poles at z = 1 and z = −1; a double pole at z = 3.

2. **Position relative to C** (centre 1, radius 2):
   - |1 − 1| = 0 < 2: **inside**.
   - |−1 − 1| = 2 and |3 − 1| = 2: **both lie on C**.

![|z − 1| = 2 passes through −1 and 3; only z = 1 is inside](fig/2018-19-Q4a-sketch.svg)

3. **Consequence.** The residue theorem needs f analytic on C. With singularities on C the integral as printed is improper. Because z = 3 is a **double** pole, it does not exist even as a principal value. The contour has almost certainly been misprinted. The only singularity strictly inside is z = 1.

4. **Residues:**
$$\mathrm{Res}_{z=1} = \frac{z}{(z + 1)(z - 3)^2}\Big|_{z=1} = \frac{1}{2 \cdot 4} = \frac18, \qquad \mathrm{Res}_{z=-1} = \frac{z}{(z - 1)(z - 3)^2}\Big|_{z=-1} = \frac{-1}{(-2)(16)} = \frac{1}{32}$$
$$\mathrm{Res}_{z=3} = \frac{d}{dz}\frac{z}{z^2 - 1}\Big|_{z=3} = \frac{-(z^2 + 1)}{(z^2 - 1)^2}\Big|_{z=3} = -\frac{10}{64} = -\frac{5}{32}$$

5. **Values for contours that avoid the poles:**
   - Any circle |z − 1| = r with r < 2 (the printed circle shrunk so that −1 and 3 are excluded) encloses only z = 1:
$$\oint = 2\pi i\cdot\frac18 = \frac{\pi i}{4}$$
   - If the intended contour encloses both ±1 but not 3 (e.g. |z| = 2):
$$\oint = 2\pi i\left(\frac18 + \frac{1}{32}\right) = \frac{5\pi i}{16}$$
   - A contour enclosing all three poles gives 2πi(1/8 + 1/32 − 5/32) = 0. This is consistent with f = O(1/z³) at infinity, where the sum of all residues is zero.

**Result:** as printed, −1 and 3 lie on C and the integral is not defined. Enclosing only z = 1 gives πi/4. Enclosing ±1 (|z| = 2) gives 5πi/16.`,
          answer: String.raw`Poles 1 (inside), −1 and 3 (double) — the latter two lie ON |z − 1| = 2, so the integral as printed is undefined (misprint). Residues 1/8, 1/32, −5/32: enclosing only z = 1 ⇒ πi/4; enclosing ±1 (|z| = 2) ⇒ 5πi/16.` },
        { id: "2018-19-Q4b", label: "(b)", marks: "20",
          topic: "residues", sub: "∫₀²π cos 3θ/(5 − 4cos θ) dθ = π/12 by contour integration",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Evaluate $\int_0^{2\pi}\frac{\cos3\theta}{5 - 4\cos\theta}d\theta$ by using the method of contour integration.`,
          solution: String.raw`1. **Use the exponential.** $\cos3\theta = \mathrm{Re}\,e^{3i\theta}$, and the denominator is real, so
$$I = \mathrm{Re}\int_0^{2\pi}\frac{e^{3i\theta}}{5 - 4\cos\theta}d\theta$$
   Put $z = e^{i\theta}$ (unit circle C), $\cos\theta = \frac{z + z^{-1}}{2}$, $d\theta = \frac{dz}{iz}$:
$$\int_0^{2\pi}\frac{e^{3i\theta}}{5 - 4\cos\theta}d\theta = \oint_C\frac{z^3}{5 - 2(z + z^{-1})}\cdot\frac{dz}{iz} = \oint_C\frac{z^3\,dz}{i(5z - 2z^2 - 2)} = \oint_C\frac{-z^3\,dz}{i(2z - 1)(z - 2)}$$

2. **Poles:** $2z^2 - 5z + 2 = (2z - 1)(z - 2)$, so z = ½ (inside C) and z = 2 (outside).

3. **Residue at z = ½:**
$$\mathrm{Res} = \frac{-z^3}{i\cdot2(z - 2)}\Big|_{z=1/2} = \frac{-1/8}{2i(-3/2)} = \frac{1}{24i}$$

4. **Integral:**
$$\oint_C = 2\pi i\cdot\frac{1}{24i} = \frac{\pi}{12}$$
   This is real, so the sin 3θ part integrates to 0 (as expected by symmetry), and
$$I = \frac{\pi}{12} \approx 0.2618$$
   Numerical quadrature gives 0.26180 ✓. This agrees with the general result $\int_0^{2\pi}\frac{\cos n\theta}{a - b\cos\theta}d\theta = \frac{2\pi}{\sqrt{a^2 - b^2}}\left(\frac{a - \sqrt{a^2 - b^2}}{b}\right)^n = \frac{2\pi}{3}\left(\frac12\right)^3$.`,
          answer: String.raw`I = Re∮_{|z|=1} −z³dz/[i(2z − 1)(z − 2)]; only z = ½ inside, residue 1/(24i) ⇒ I = 2πi/(24i) = π/12 ≈ 0.2618.` }
      ] }
  ]
});
