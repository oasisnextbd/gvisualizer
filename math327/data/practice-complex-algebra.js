QB.paper({ year: "Practice", set: "Complex algebra: polar form, roots and regions", date: "", marks: 0, practice: true,
  rules: String.raw`Complex numbers, polar form, roots, loci and regions (Brown & Churchill ch. 1; lecture notes "Complex Algebra" and "Graphical representation"): the worked examples in the notes not already set in past papers, selected Brown & Churchill exercises (Secs. 5 and 10), and new exam-style problems. Every solution includes the Argand-diagram sketch a student should draw.`,
  questions: [
    { id: "practice-complex-algebra-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P1", label: "", marks: "", topic: "complex-algebra",
        sub: "Modulus and principal argument of seven complex numbers", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Complex Algebra" (MATH 327), Example (i)–(vii)`,
        text: String.raw`Find the modulus and argument of the complex numbers: (1) $z = -1 - i$; (2) $z = -1$; (3) $z = 1 + i\sqrt3$; (4) $z = \dfrac{1 - i}{1 + i}$; (5) $z = \left(\dfrac{2 + i}{3 - i}\right)^2$; (6) $z = -3i$; (7) $z = -1 + i$.`,
        solution: String.raw`**Method:** $|z| = \sqrt{x^2 + y^2}$; the principal argument $\mathrm{Arg}\,z \in (-\pi, \pi]$ is found from the reference angle $\tan^{-1}|y/x|$ **and the quadrant** (plot the point first); general $\arg z = \mathrm{Arg}\,z + 2n\pi$.

1. **Simplify (4) and (5):**
$$\frac{1 - i}{1 + i} = \frac{(1 - i)^2}{2} = \frac{-2i}{2} = -i, \qquad \frac{2 + i}{3 - i} = \frac{(2 + i)(3 + i)}{10} = \frac{5 + 5i}{10} = \frac{1 + i}{2} \Rightarrow \left(\frac{1 + i}{2}\right)^2 = \frac{2i}{4} = \frac i2$$

![Plot each number, join it to O, and read the quadrant before writing Arg z](fig/practice-complex-algebra-P1-sketch.svg)

2. **Table:**

| z | point | quadrant | modulus | Arg z | general arg z |
|---|---|---|---|---|---|
| −1 − i | (−1, −1) | III | √2 | −3π/4 | −3π/4 + 2nπ (e.g. 5π/4) |
| −1 | (−1, 0) | negative real axis | 1 | π | π + 2nπ |
| 1 + i√3 | (1, √3) | I | 2 | π/3 | π/3 + 2nπ |
| −i | (0, −1) | negative imaginary axis | 1 | −π/2 | −π/2 + 2nπ (e.g. 3π/2) |
| i/2 | (0, ½) | positive imaginary axis | ½ | π/2 | π/2 + 2nπ |
| −3i | (0, −3) | negative imaginary axis | 3 | −π/2 | −π/2 + 2nπ |
| −1 + i | (−1, 1) | II | √2 | 3π/4 | 3π/4 + 2nπ |

3. **Caution with tan⁻¹.** For −1 − i, $\tan^{-1}(y/x) = \tan^{-1}1 = \pi/4$ is the reference angle only: in quadrant III the principal value is $-\pi + \pi/4 = -3\pi/4$ (the notes write 5π/4 first and then reduce it by 2π).`,
        answer: String.raw`−1 − i: √2, −3π/4; −1: 1, π; 1 + i√3: 2, π/3; (1 − i)/(1 + i) = −i: 1, −π/2; ((2 + i)/(3 − i))² = i/2: ½, π/2; −3i: 3, −π/2; −1 + i: √2, 3π/4.` } ] },
    { id: "practice-complex-algebra-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P2", label: "", marks: "", topic: "complex-algebra",
        sub: "z₁ = −1 + i√3, z₂ = √3 + i: verify arg(z₁/z₂) = arg z₁ − arg z₂", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Complex Algebra" (MATH 327), worked example after the modulus/argument examples`,
        text: String.raw`Given $z_1 = -1 + \sqrt3i$, $z_2 = \sqrt3 + i$, find $\arg z_1$, $\arg z_2$, $\arg(z_1/z_2)$ and verify that $\arg(z_1/z_2) = \arg z_1 - \arg z_2$.`,
        solution: String.raw`1. **Arguments.** $z_1 = (-1, \sqrt3)$ is in quadrant II with reference angle $\tan^{-1}\sqrt3 = \pi/3$, so $\arg z_1 = \pi - \pi/3 = 2\pi/3$. $z_2 = (\sqrt3, 1)$ is in quadrant I: $\arg z_2 = \tan^{-1}(1/\sqrt3) = \pi/6$.

2. **Quotient:**
$$\frac{z_1}{z_2} = \frac{(-1 + \sqrt3i)(\sqrt3 - i)}{(\sqrt3 + i)(\sqrt3 - i)} = \frac{-\sqrt3 + i + 3i + \sqrt3}{4} = \frac{4i}{4} = i \;\Rightarrow\; \arg\frac{z_1}{z_2} = \frac\pi2$$

![Draw z₁, z₂ and z₁/z₂ = i with their angles 2π/3, π/6 and π/2](fig/practice-complex-algebra-P2-sketch.svg)

3. **Verify:** $\arg z_1 - \arg z_2 = \dfrac{2\pi}{3} - \dfrac{\pi}{6} = \dfrac{\pi}{2} = \arg\dfrac{z_1}{z_2}$ ✓. In polar form: $z_1 = 2e^{2\pi i/3}$, $z_2 = 2e^{i\pi/6}$, so $z_1/z_2 = e^{i\pi/2} = i$ (moduli divide, arguments subtract). The identity holds for the multivalued arg; for principal values it can fail by 2π when the difference leaves (−π, π].`,
        answer: String.raw`arg z₁ = 2π/3, arg z₂ = π/6; z₁/z₂ = i so arg = π/2 = 2π/3 − π/6 ✓.` } ] },
    { id: "practice-complex-algebra-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P3", label: "", marks: "", topic: "complex-algebra",
        sub: "|z − 3|/|z + 3| = 2 is the circle centre −5, radius 4", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Graphical representation" (MATH 327), (v)`,
        text: String.raw`Describe the locus $\left|\dfrac{z - 3}{z + 3}\right| = 2$.`,
        solution: String.raw`1. **Distances:** $|z - 3| = 2|z + 3|$; the distance to 3 is twice the distance to −3 (a circle of Apollonius).

2. **Algebra** with z = x + iy:
$$(x - 3)^2 + y^2 = 4[(x + 3)^2 + y^2] \;\Rightarrow\; 3x^2 + 3y^2 + 30x + 27 = 0 \;\Rightarrow\; x^2 + y^2 + 10x + 9 = 0$$
$$(x + 5)^2 + y^2 = 16$$

![Draw the points ±3 and the circle (x + 5)² + y² = 16 around −5](fig/practice-complex-algebra-P3-sketch.svg)

3. **Locus:** the circle with **centre (−5, 0), radius 4**. Check: z = −1 gives |−4|/|2| = 2 ✓ and z = −9 gives |−12|/|−6| = 2 ✓ (the two real-axis points of the circle). The circle lies around the point −3 (nearer to it), as it must since points are closer to −3 than to 3.`,
        answer: String.raw`|z − 3| = 2|z + 3| ⇒ x² + y² + 10x + 9 = 0 ⇒ (x + 5)² + y² = 16: circle centre −5, radius 4 (through −1 and −9).` } ] },
    { id: "practice-complex-algebra-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P4", label: "", marks: "", topic: "complex-algebra",
        sub: "Region 1 < |z − 2i| ≤ 2: annulus about 2i", type: "sketch", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Graphical representation" (MATH 327), (xvii)`,
        text: String.raw`Describe and sketch the region $1 < |z - 2i| \le 2$.`,
        solution: String.raw`1. **Write as distances:** |z − 2i| is the distance from z to the point (0, 2).
$$1 < \sqrt{x^2 + (y - 2)^2} \le 2 \;\Leftrightarrow\; 1 < x^2 + (y - 2)^2 \le 4$$

2. **Region:** the points **outside** the circle of radius 1 and **inside or on** the circle of radius 2, both centred at 2i: an annulus. The outer circle belongs to the set (≤), the inner one does not (<).

![Shade the annulus about 2i; draw the inner circle dashed (excluded) and the outer circle solid (included)](fig/practice-complex-algebra-P4-sketch.svg)

3. **Properties:** bounded (inside |z| ≤ 4); neither open (contains outer boundary points) nor closed (misses inner boundary points); connected. The origin lies on the outer circle (|0 − 2i| = 2), so it belongs to the set.`,
        answer: String.raw`1 < x² + (y − 2)² ≤ 4: annulus between the circles of radius 1 (excluded) and 2 (included) centred at 2i.` } ] },
    { id: "practice-complex-algebra-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P5", label: "", marks: "", topic: "complex-algebra",
        sub: "Region |2z + 3| > 4: exterior of the circle centre −3/2, radius 2", type: "sketch", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Graphical representation" (MATH 327), (viii); also Brown & Churchill Sec. 10, Ex. 1(b)`,
        text: String.raw`Describe and sketch the region $|2z + 3| > 4$.`,
        solution: String.raw`1. **Divide by 2:** $|2z + 3| = 2|z + \tfrac32| > 4 \Leftrightarrow |z + \tfrac32| > 2$.

2. **Cartesian form:** $(2x + 3)^2 + 4y^2 > 16 \Rightarrow x^2 + y^2 + 3x > \tfrac74 \Rightarrow (x + \tfrac32)^2 + y^2 > 4$.

![Draw the circle |z + 3/2| = 2 dashed (not included) and shade its exterior](fig/practice-complex-algebra-P5-sketch.svg)

3. **Region:** all points **outside** the circle with centre (−3/2, 0) and radius 2; the circle itself is excluded. It is open and connected, hence a **domain** (Brown & Churchill list it as one), and unbounded.`,
        answer: String.raw`|z + 3/2| > 2 ⇔ (x + 3/2)² + y² > 4: exterior of the circle centre −3/2, radius 2 (open, a domain, unbounded).` } ] },
    { id: "practice-complex-algebra-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P6", label: "", marks: "", topic: "complex-algebra",
        sub: "Region |z − 2| − |z + 2| > 3: inside the left branch of a hyperbola", type: "sketch", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Graphical representation" (MATH 327), (xxvi)`,
        text: String.raw`Describe the region $|z - 2| - |z + 2| > 3$.`,
        solution: String.raw`1. **Hyperbola.** $|z - z_0| - |z + z_0| = 2a$ is one branch of the hyperbola with foci $\pm z_0$ and transverse axis 2a. Here the foci are ±2 (c = 2) and 2a = 3 (a = 3/2), so $b^2 = c^2 - a^2 = 4 - \tfrac94 = \tfrac74$:
$$\frac{x^2}{9/4} - \frac{y^2}{7/4} = 1$$

2. **Which branch.** $|z - 2| > |z + 2|$ means z is **closer to −2**, i.e. x < 0. So the boundary is the **left** branch, and the region (difference greater than 3) is the part of the plane **inside the left branch** (containing the focus −2), boundary excluded. Checks: z = −3 gives 5 − 1 = 4 > 3 ✓; z = −1.6 gives 3.6 − 0.4 = 3.2 > 3 ✓; z = −1.4 gives 2.8 ✗ (just outside the vertex −3/2); z = 3 gives 1 − 5 = −4 ✗.

![Shade only the region inside the left branch (around the focus −2); the right branch belongs to |z + 2| − |z − 2| = 3](fig/practice-complex-algebra-P6-sketch.svg)

3. **Note on the notes.** The figure in the notes shades the regions inside **both** branches. Only the left one satisfies |z − 2| − |z + 2| > 3; the right one is the region |z + 2| − |z − 2| > 3. (Both together would be described by ||z − 2| − |z + 2|| > 3.)`,
        answer: String.raw`Foci ±2, 2a = 3, b² = 7/4: hyperbola 4x²/9 − 4y²/7 = 1; since |z − 2| > |z + 2| ⇒ x < 0, the region is inside the left branch (x < −3/2 at y = 0), boundary excluded.` } ] },
    { id: "practice-complex-algebra-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P7", label: "", marks: "", topic: "complex-algebra",
        sub: "Regions Re(z²) > 1 and Im(z²) > 0", type: "sketch", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Graphical representation" (MATH 327), (xxvii) and (xxviii)`,
        text: String.raw`Describe and sketch the regions (i) $\mathrm{Re}(z^2) > 1$; (ii) $\mathrm{Im}(z^2) > 0$.`,
        solution: String.raw`1. **z² in Cartesian form:** $z^2 = (x + iy)^2 = x^2 - y^2 + 2ixy$.

2. **(i)** $\mathrm{Re}(z^2) = x^2 - y^2 > 1$: the points **outside** (to the left and right of) the two branches of the rectangular hyperbola $x^2 - y^2 = 1$ (vertices ±1, asymptotes y = ±x); boundary excluded. The origin (0 > 1 false) is not in the set.

3. **(ii)** $\mathrm{Im}(z^2) = 2xy > 0$: x and y have the same sign, i.e. the **open first and third quadrants** (axes excluded).

![Panel (i): shade beyond both hyperbola branches; panel (ii): shade the first and third quadrants](fig/practice-complex-algebra-P7-sketch.svg)

4. **Polar check:** with $z = re^{i\theta}$, $z^2 = r^2e^{2i\theta}$. (ii) says $\sin2\theta > 0$, i.e. $0 < \theta < \pi/2$ or $\pi < \theta < 3\pi/2$ ✓; (i) says $r^2\cos2\theta > 1$, which needs $|\theta| < \pi/4$ or $|\theta - \pi| < \pi/4$ and r large enough ✓.`,
        answer: String.raw`(i) x² − y² > 1: outside both branches of the rectangular hyperbola x² − y² = 1; (ii) 2xy > 0: open first and third quadrants.` } ] },
    { id: "practice-complex-algebra-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P8", label: "", marks: "", topic: "complex-algebra",
        sub: "Regions 0 < Re(iz) < 1 and π/3 ≤ arg z ≤ π/2", type: "sketch", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Graphical representation" (MATH 327), (xviii) and (xix)`,
        text: String.raw`Describe and sketch (i) $0 < \mathrm{Re}(iz) < 1$; (ii) $\dfrac\pi3 \le \arg z \le \dfrac\pi2$.`,
        solution: String.raw`1. **(i)** $iz = i(x + iy) = -y + ix$, so $\mathrm{Re}(iz) = -y$ and $0 < -y < 1 \Leftrightarrow -1 < y < 0$: the open **horizontal strip** between the lines y = −1 and y = 0 (both excluded).

2. **(ii)** With $z = re^{i\theta}$ (z ≠ 0, since arg 0 is undefined): $\pi/3 \le \theta \le \pi/2$ is the **wedge** between the rays θ = π/3 and θ = π/2 (the positive imaginary axis), including the rays, excluding the origin; it is unbounded.

![Panel (i): shade the strip −1 < y < 0; panel (ii): shade the wedge between θ = π/3 and θ = π/2](fig/practice-complex-algebra-P8-sketch.svg)

3. **Remarks.** Multiplying by i rotates by 90°, which is why a condition on Re(iz) becomes a condition on y. The wedge is neither open nor closed (it contains its rays but not the vertex).`,
        answer: String.raw`(i) Re(iz) = −y ⇒ −1 < y < 0: horizontal strip; (ii) wedge between the rays θ = π/3 and θ = π/2 (rays included, origin excluded).` } ] },
    { id: "practice-complex-algebra-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P9", label: "", marks: "", topic: "complex-algebra",
        sub: "Sketch Re(z̄ − i) = 2 and |2z̄ − i| = 4", type: "sketch", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 5, Exercise 2`,
        text: String.raw`Sketch the set of points determined by the condition (a) $\mathrm{Re}(\bar z - i) = 2$; (b) $|2\bar z - i| = 4$.`,
        solution: String.raw`1. **(a)** $\bar z - i = x - iy - i = x - i(y + 1)$, so $\mathrm{Re}(\bar z - i) = x = 2$: the **vertical line x = 2**.

2. **(b)** $|2\bar z - i| = |\overline{2\bar z - i}| = |2z + i| = 2|z + \tfrac i2|$ (a number and its conjugate have the same modulus). So $|z + \tfrac i2| = 2$: the **circle centre −i/2, radius 2**, i.e. $x^2 + (y + \tfrac12)^2 = 4$.

![(a) the line x = 2; (b) the circle centre −i/2, radius 2](fig/practice-complex-algebra-P9-sketch.svg)

3. **Check (b):** z = 3i/2 gives $|2(-3i/2) - i| = |-4i| = 4$ ✓, and it lies on the circle (distance 2 from −i/2).`,
        answer: String.raw`(a) Re(z̄ − i) = x = 2: the vertical line x = 2. (b) |2z̄ − i| = |2z + i| = 4 ⇒ |z + i/2| = 2: circle centre −i/2, radius 2.` } ] },
    { id: "practice-complex-algebra-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P10", label: "", marks: "", topic: "complex-algebra",
        sub: "If |z| = 2 then |1/(z⁴ − 4z² + 3)| ≤ 1/3", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 5, Exercise 10`,
        text: String.raw`By factoring $z^4 - 4z^2 + 3$ into two quadratic factors and then using inequality (8), Sec. 4 ($|z_1 + z_2| \ge ||z_1| - |z_2||$), show that if z lies on the circle |z| = 2, then
$$\left|\frac{1}{z^4 - 4z^2 + 3}\right| \le \frac13$$`,
        solution: String.raw`1. **Factor:** $z^4 - 4z^2 + 3 = (z^2 - 1)(z^2 - 3)$; its zeros ±1 and ±√3 all lie **inside** |z| = 2, so the denominator never vanishes on the circle.

![On |z| = 2 the zeros ±1, ±√3 of the denominator are inside the circle, so it is bounded away from 0](fig/practice-complex-algebra-P10-sketch.svg)

2. **Lower bounds on |z| = 2** ($|z^2| = 4$), using $|a - b| \ge ||a| - |b||$:
$$|z^2 - 1| \ge |z^2| - 1 = 3, \qquad |z^2 - 3| \ge |z^2| - 3 = 1$$

3. **Combine:** $|z^4 - 4z^2 + 3| = |z^2 - 1||z^2 - 3| \ge 3 \times 1 = 3$, hence
$$\left|\frac{1}{z^4 - 4z^2 + 3}\right| \le \frac13$$
   Equality holds at z = ±2 (z² = 4: (4 − 1)(4 − 3) = 3). A numerical sweep of the circle gives a maximum of 0.3333 ✓.`,
        answer: String.raw`z⁴ − 4z² + 3 = (z² − 1)(z² − 3); on |z| = 2: |z² − 1| ≥ 4 − 1 = 3, |z² − 3| ≥ 4 − 3 = 1 ⇒ |denominator| ≥ 3 ⇒ |1/(…)| ≤ 1/3 (equality at z = ±2).` } ] },
    { id: "practice-complex-algebra-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P11", label: "", marks: "", topic: "complex-algebra",
        sub: "Equation of a circle: |z − z₀| = R ⇔ |z|² − 2Re(z z̄₀) + |z₀|² = R²", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 5, Exercise 14`,
        text: String.raw`Show that the equation $|z - z_0| = R$ of a circle, centered at $z_0$ with radius R, can be written
$$|z|^2 - 2\,\mathrm{Re}(z\bar z_0) + |z_0|^2 = R^2$$`,
        solution: String.raw`1. **Square the modulus** using $|w|^2 = w\bar w$:
$$|z - z_0|^2 = (z - z_0)(\bar z - \bar z_0) = z\bar z - z\bar z_0 - \bar zz_0 + z_0\bar z_0$$

2. **Middle terms:** $\bar zz_0 = \overline{z\bar z_0}$, and $w + \bar w = 2\,\mathrm{Re}\,w$, so $z\bar z_0 + \bar zz_0 = 2\,\mathrm{Re}(z\bar z_0)$.

![The circle |z − z₀| = R: every z on it is at distance R from z₀](fig/practice-complex-algebra-P11-sketch.svg)

3. **Result:** $|z - z_0|^2 = |z|^2 - 2\,\mathrm{Re}(z\bar z_0) + |z_0|^2 = R^2$ ✓. Example: $z_0 = 1 + i$, R = 2: $x^2 + y^2 - 2(x + y) + 2 = 4$, i.e. $(x - 1)^2 + (y - 1)^2 = 4$ ✓.`,
        answer: String.raw`|z − z₀|² = (z − z₀)(z̄ − z̄₀) = |z|² − (zz̄₀ + z̄z₀) + |z₀|² = |z|² − 2Re(zz̄₀) + |z₀|² = R².` } ] },
    { id: "practice-complex-algebra-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P12", label: "", marks: "", topic: "complex-algebra",
        sub: "Sets 0 ≤ arg z ≤ π/4 (z ≠ 0) and |z − 4| ≥ |z|: sketch, domain?", type: "sketch", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 10, Exercise 1 (e), (f) (answer: neither is a domain)`,
        text: String.raw`Sketch the following sets and determine which are domains: (e) $0 \le \arg z \le \pi/4$ (z ≠ 0); (f) $|z - 4| \ge |z|$.`,
        solution: String.raw`**Domain** = open, connected set.

1. **(e)** The wedge between the positive real axis (θ = 0) and the ray θ = π/4, rays included, origin excluded. It contains its boundary rays, so it is **not open**: not a domain.

2. **(f)** $|z - 4| \ge |z|$: z is at least as far from 4 as from 0. The equality $|z - 4| = |z|$ is the perpendicular bisector x = 2, so the set is the **half-plane x ≤ 2** (algebra: $(x - 4)^2 + y^2 \ge x^2 + y^2 \Leftrightarrow -8x + 16 \ge 0$). It contains the line x = 2: closed, **not a domain**.

![(e) the closed wedge 0 ≤ θ ≤ π/4 without the origin; (f) the closed half-plane x ≤ 2](fig/practice-complex-algebra-P12-sketch.svg)

3. **Answer:** neither (e) nor (f) is a domain (in Brown & Churchill's list only (b) and (c) are domains).`,
        answer: String.raw`(e) wedge 0 ≤ θ ≤ π/4, z ≠ 0 (contains its rays ⇒ not open); (f) |z − 4| ≥ |z| ⇔ x ≤ 2, closed half-plane. Neither is a domain.` } ] },
    { id: "practice-complex-algebra-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P13", label: "", marks: "", topic: "complex-algebra",
        sub: "Closures of Re(1/z) ≤ ½ and Re(z²) > 0", type: "sketch", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 10, Exercise 4 (c), (d)`,
        text: String.raw`In each case, sketch the closure of the set: (c) $\mathrm{Re}(1/z) \le \tfrac12$; (d) $\mathrm{Re}(z^2) > 0$.`,
        solution: String.raw`1. **(c)** $1/z = \bar z/|z|^2$, so $\mathrm{Re}(1/z) = x/(x^2 + y^2) \le \tfrac12 \Leftrightarrow x^2 + y^2 - 2x \ge 0 \Leftrightarrow (x - 1)^2 + y^2 \ge 1$ (z ≠ 0). The set is the **exterior of the circle centre 1, radius 1, with the circle**, minus the point 0 (which lies on that circle). Its **closure** adds back z = 0: the closed set $(x - 1)^2 + y^2 \ge 1$.

2. **(d)** $\mathrm{Re}(z^2) = x^2 - y^2 > 0 \Leftrightarrow |x| > |y|$: the open double wedge around the real axis between the lines y = ±x. Its **closure** is $|x| \ge |y|$ (lines included, origin included).

![(c) shade outside the circle |z − 1| = 1 (circle included, 0 added in the closure); (d) the double wedge |x| ≥ |y|](fig/practice-complex-algebra-P13-sketch.svg)

3. **Check (c):** z = 2 gives Re(1/2) = ½ ✓ (on the circle); z = 1 gives 1 > ½ (inside the circle, excluded) ✓.`,
        answer: String.raw`(c) Re(1/z) = x/(x² + y²) ≤ ½ ⇔ (x − 1)² + y² ≥ 1 (z ≠ 0); closure: (x − 1)² + y² ≥ 1 including 0. (d) x² − y² > 0 ⇔ |x| > |y|; closure |x| ≥ |y|.` } ] },
    { id: "practice-complex-algebra-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P14", label: "", marks: "", topic: "complex-algebra",
        sub: "Cube roots of −8i, plotted, with the principal root", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (roots by De Moivre, cf. the fourth-root questions in 2013-14, 2022-23 and 2023-24)`,
        text: String.raw`Find all values of $(-8i)^{1/3}$ in rectangular form, show them on an Argand diagram and identify the principal root.`,
        solution: String.raw`1. **Polar form:** $-8i = 8e^{i(-\pi/2 + 2k\pi)}$, |−8i| = 8, Arg = −π/2.

2. **De Moivre:** $z_k = 8^{1/3}e^{i(-\pi/2 + 2k\pi)/3} = 2e^{i(-\pi/6 + 2k\pi/3)}$, k = 0, 1, 2:
$$z_0 = 2e^{-i\pi/6} = \sqrt3 - i, \qquad z_1 = 2e^{i\pi/2} = 2i, \qquad z_2 = 2e^{i7\pi/6} = -\sqrt3 - i$$

![The three cube roots on |z| = 2, 120° apart: an equilateral triangle](fig/practice-complex-algebra-P14-sketch.svg)

3. **Principal root:** k = 0, from Arg(−8i) = −π/2: $\sqrt3 - i$.

4. **Check:** $(2i)^3 = 8i^3 = -8i$ ✓; $(\sqrt3 - i)^3 = 2^3e^{-i\pi/2} = -8i$ ✓. The roots sum to 0 (centroid of the triangle at O), as the coefficient of $z^2$ in $z^3 + 8i$ is zero.`,
        answer: String.raw`−8i = 8e^{−iπ/2} ⇒ z_k = 2e^{i(−π/6 + 2kπ/3)}: √3 − i (principal), 2i, −√3 − i; vertices of an equilateral triangle on |z| = 2.` } ] },
    { id: "practice-complex-algebra-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P15", label: "", marks: "", topic: "complex-algebra",
        sub: "Solve z² + (2i − 3)z + 5 − i = 0", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (quadratic with complex coefficients; square root of a complex number)`,
        text: String.raw`Solve $z^2 + (2i - 3)z + 5 - i = 0$ and plot the roots.`,
        solution: String.raw`1. **Discriminant:** $\Delta = (2i - 3)^2 - 4(5 - i) = (5 - 12i) - (20 - 4i) = -15 - 8i$.

2. **Square root of Δ.** Put $(a + ib)^2 = -15 - 8i$: $a^2 - b^2 = -15$, $2ab = -8$, and $a^2 + b^2 = |\Delta| = 17$. So $a^2 = 1$, $b^2 = 16$, and ab < 0: $\sqrt\Delta = \pm(1 - 4i)$.

3. **Roots:**
$$z = \frac{-(2i - 3) \pm(1 - 4i)}{2} = \frac{(3 - 2i) \pm(1 - 4i)}{2} \;\Rightarrow\; z_1 = 2 - 3i, \quad z_2 = 1 + i$$

![Plot the roots 2 − 3i and 1 + i; their midpoint is −(2i − 3)/2](fig/practice-complex-algebra-P15-sketch.svg)

4. **Check (Vieta):** $z_1 + z_2 = 3 - 2i = -(2i - 3)$ ✓ and $z_1z_2 = (2 - 3i)(1 + i) = 2 + 2i - 3i + 3 = 5 - i$ ✓.`,
        answer: String.raw`Δ = −15 − 8i, √Δ = ±(1 − 4i) ⇒ z = [(3 − 2i) ± (1 − 4i)]/2 = 2 − 3i or 1 + i (sum 3 − 2i, product 5 − i ✓).` } ] },
    { id: "practice-complex-algebra-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P16", label: "", marks: "", topic: "complex-algebra",
        sub: "Equilateral triangle condition z₁² + z₂² + z₃² = z₁z₂ + z₂z₃ + z₃z₁", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (geometry with complex numbers; rotation by multiplication)`,
        text: String.raw`Show that $z_1$, $z_2$, $z_3$ are the vertices of an equilateral triangle if and only if
$$z_1^2 + z_2^2 + z_3^2 = z_1z_2 + z_2z_3 + z_3z_1$$`,
        solution: String.raw`1. **Rotation.** The triangle $z_1z_2z_3$ (anticlockwise) is equilateral iff each side vector is the previous one rotated by 120°: with $\omega = e^{2\pi i/3}$,
$$z_3 - z_2 = \omega(z_2 - z_1), \qquad z_1 - z_3 = \omega(z_3 - z_2)$$
   Equivalently $\dfrac{z_3 - z_2}{z_2 - z_1} = \dfrac{z_1 - z_3}{z_3 - z_2}$ (both equal ω; for clockwise orientation both equal $\bar\omega$).

![Equilateral triangle: each side is the previous one rotated through 120°](fig/practice-complex-algebra-P16-sketch.svg)

2. **Cross-multiply:** $(z_3 - z_2)^2 = (z_2 - z_1)(z_1 - z_3)$.
   Left: $z_3^2 - 2z_2z_3 + z_2^2$. Right: $z_1z_2 - z_2z_3 - z_1^2 + z_1z_3$.

3. **Rearrange:** $z_1^2 + z_2^2 + z_3^2 = z_1z_2 + z_2z_3 + z_3z_1$ ✓.

4. **Converse.** The steps are reversible: the identity gives $\frac{z_3 - z_2}{z_2 - z_1} = \frac{z_1 - z_3}{z_3 - z_2} = q$. With $a = z_2 - z_1$, the sides are $z_3 - z_2 = qa$ and $z_1 - z_3 = q^2a$; since the three side vectors add to zero, $a(1 + q + q^2) = 0$, so $q^2 + q + 1 = 0$, i.e. q = ω or $\bar\omega$ (|q| = 1, turn of ±120°): the triangle is equilateral.

5. **Numerical check:** $z_1 = 0.5 + 0.3i$, $z_2 = 2.3 + 0.3i$, $z_3 = z_1 + (z_2 - z_1)e^{i\pi/3}$ satisfy the identity to 10⁻¹⁵.`,
        answer: String.raw`Equilateral ⇔ (z₃ − z₂)/(z₂ − z₁) = (z₁ − z₃)/(z₃ − z₂) (= ω or ω̄) ⇔ (z₃ − z₂)² = (z₂ − z₁)(z₁ − z₃) ⇔ z₁² + z₂² + z₃² = z₁z₂ + z₂z₃ + z₃z₁.` } ] },
    { id: "practice-complex-algebra-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-complex-algebra-P17", label: "", marks: "", topic: "complex-algebra",
        sub: "Locus arg((z − 1)/(z + 1)) = π/4: an arc of the circle centre i, radius √2", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (loci from arguments; cf. 2018-19 Q1a and 2021-22 Q1c, which used "purely imaginary")`,
        text: String.raw`Find and sketch the locus of z for which $\arg\dfrac{z - 1}{z + 1} = \dfrac\pi4$.`,
        solution: String.raw`1. **Compute the quotient** with z = x + iy:
$$\frac{z - 1}{z + 1} = \frac{(x - 1 + iy)(x + 1 - iy)}{(x + 1)^2 + y^2} = \frac{x^2 + y^2 - 1 + 2iy}{(x + 1)^2 + y^2}$$

2. **Argument π/4** means real part = imaginary part > 0:
$$x^2 + y^2 - 1 = 2y > 0 \;\Rightarrow\; x^2 + (y - 1)^2 = 2, \quad y > 0$$

3. **Locus:** the part of the circle with **centre i, radius √2** lying **above the real axis** (y > 0), excluding the end points ±1 (where the quotient is 0 or undefined). Geometrically, $\arg\frac{z - 1}{z + 1}$ is the angle at z subtended by the segment from −1 to 1; it is constant (π/4) on a circular arc through ±1.

![Draw the circle |z − i| = √2 through ±1; the locus is its arc above the real axis (lower arc dashed: there the argument is −3π/4)](fig/practice-complex-algebra-P17-sketch.svg)

4. **Check:** z = i + √2 i = (1 + √2)i gives $\frac{z - 1}{z + 1}$ with argument π/4 ✓ (computed: 0.25π); points on the lower arc give −3π/4.`,
        answer: String.raw`(z − 1)/(z + 1) = [x² + y² − 1 + 2iy]/|z + 1|²; arg = π/4 ⇒ x² + y² − 1 = 2y > 0 ⇒ x² + (y − 1)² = 2 with y > 0: arc of the circle centre i, radius √2 above the real axis (±1 excluded).` } ] }
  ]
});
