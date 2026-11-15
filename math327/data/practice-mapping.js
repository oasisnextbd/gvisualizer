QB.paper({ year: "Practice", set: "Mapping: linear, bilinear and conformal", date: "", marks: 0, practice: true,
  rules: String.raw`Mapping by elementary functions (Brown & Churchill chs. 8–9; lecture notes "Mapping/Transformation" and "Linear Transformation"). Covered: rotation, magnification and their compositions; inversion w = 1/z; bilinear (Möbius) transformations, including their decomposition, three-point problems, images of lines and circles, and fixed points; conformality and scale factors. Includes the worked problems and homework of the notes not already set in past papers, and selected Brown & Churchill exercises (Secs. 85, 87, 88, 96).

Not repeated:
- the translation of a rectangle (2023-24 Q1c);
- w = (1 + i)z + (2 − i) on a rectangle (2013-14 Q2c);
- (iz + 2)/(4z + i) on the real axis (2016-17 Q1d);
- 1, i, −1 → 0, 1, ∞ with |z| = 1 → the real axis (2021-22 Q1d; notes Problem 03 and homework 2);
- w = 1/z on the line y = x − 1 (2018-19 Q1c).

Every solution shows the z-plane and the w-plane together, with corresponding points in matching colours.`,
  questions: [
    { id: "practice-mapping-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P1", label: "", marks: "", topic: "mapping",
        sub: "Triangle x = 0, y = 0, x + y = 1 under the rotation w = e^{iπ/4}z and the magnification w = 2z", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Mapping/Transformation", Problems 02 and 03`,
        text: String.raw`Determine the region in the w-plane corresponding to the triangular region bounded by x = 0, y = 0 and x + y = 1 in the z-plane under (a) $w = e^{i\pi/4}z$; (b) $w = 2z$.`,
        solution: String.raw`![Draw the triangle in the z-plane; in the w-plane, its rotated image (teal) and its doubled image (orange) with the vertices matched](fig/practice-mapping-P1-sketch.svg)

1. **(a) Rotation.** $w = e^{i\pi/4}z = \dfrac{1 + i}{\sqrt2}(x + iy)$, so
$$u = \frac{x - y}{\sqrt2}, \qquad v = \frac{x + y}{\sqrt2}$$

2. **(a) Images of the three sides:**
   - x = 0: $u = -y/\sqrt2$ and $v = y/\sqrt2$, so **v = −u**.
   - y = 0: $u = v = x/\sqrt2$, so **v = u**.
   - x + y = 1: $v = 1/\sqrt2$.

   The vertices 0, 1, i go to 0, $(1 + i)/\sqrt2$, $(-1 + i)/\sqrt2$. The image is the triangle bounded by v = u, v = −u and $v = 1/\sqrt2$: the same triangle turned through π/4 about the origin.

3. **(b) Magnification.** $w = 2z$ gives u = 2x, v = 2y. The sides x = 0, y = 0 and x + y = 1 go to **u = 0, v = 0 and u + v = 2**, and the vertices to 0, 2, 2i. The triangle is enlarged in the ratio 2 : 1 without turning.

4. **General rule.** For w = βz, the region is rotated through arg β and magnified by |β|. Shape and orientation are preserved.`,
        answer: String.raw`(a) u = (x − y)/√2, v = (x + y)/√2: x = 0 → v = −u, y = 0 → v = u, x + y = 1 → v = 1/√2 (rotation by π/4); (b) u = 2x, v = 2y: triangle u = 0, v = 0, u + v = 2 (magnification 2).` } ] },
    { id: "practice-mapping-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P2", label: "", marks: "", topic: "mapping",
        sub: "Rectangle 0 ≤ x ≤ 2, 0 ≤ y ≤ 3 under w = √2 e^{iπ/4} z (rotation plus stretching)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Mapping/Transformation", Problem 04`,
        text: String.raw`Determine the region D′ of the w-plane into which the region D bounded by x = 0, y = 0, x = 2, y = 3 is mapped under $w = \sqrt2\,e^{i\pi/4}z$.`,
        solution: String.raw`1. **Real form.** $\sqrt2\,e^{i\pi/4} = 1 + i$, so $w = (1 + i)(x + iy)$:
$$u = x - y, \qquad v = x + y$$
   This is a rotation through π/4 together with a magnification by √2.

![Rectangle ABCD in the z-plane and its image A′B′C′D′, a square-cornered rectangle turned through 45°](fig/practice-mapping-P2-sketch.svg)

2. **Images of the sides:**

| z-side | u, v on it | image line |
|---|---|---|
| x = 0 | u = −y, v = y | v = −u |
| y = 0 | u = x, v = x | v = u |
| x = 2 | u = 2 − y, v = 2 + y | u + v = 4 |
| y = 3 | u = x − 3, v = x + 3 | v − u = 6 |

3. **Vertices:** 0 → 0, 2 → 2 + 2i, 2 + 3i → −1 + 5i, 3i → −3 + 3i.

4. **Result.** D′ is the rectangle bounded by v = u, v = −u, u + v = 4 and v − u = 6. Its sides are √2 times as long (2√2 and 3√2), and it is turned through 45°.`,
        answer: String.raw`u = x − y, v = x + y: x = 0 → v = −u, y = 0 → v = u, x = 2 → u + v = 4, y = 3 → v − u = 6; vertices 0, 2 + 2i, −1 + 5i, −3 + 3i (rotation π/4, magnification √2).` } ] },
    { id: "practice-mapping-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P3", label: "", marks: "", topic: "mapping",
        sub: "Rectangle 0 ≤ x ≤ 2, 0 ≤ y ≤ 1 under w = √2 e^{iπ/4} z + (1 − 2i)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Mapping/Transformation", Home work 1`,
        text: String.raw`Let R be the region in the z-plane bounded by x = 0, y = 0, x = 2, y = 1. Determine the region R′ of the w-plane into which R is mapped under the transformation $w = \sqrt2\,e^{i\pi/4}z + (1 - 2i)$.`,
        solution: String.raw`1. **Real form:** $w = (1 + i)(x + iy) + 1 - 2i$, so
$$u = x - y + 1, \qquad v = x + y - 2$$
   This is a rotation by π/4, a magnification by √2, then a translation by 1 − 2i.

![Rectangle in the z-plane and its rotated, stretched and shifted image](fig/practice-mapping-P3-sketch.svg)

2. **Images of the sides:**
   - x = 0: u = 1 − y, v = y − 2, so **u + v = −1**.
   - y = 0: u = x + 1, v = x − 2, so **u − v = 3**.
   - x = 2: u = 3 − y, v = y, so **u + v = 3**.
   - y = 1: u = x, v = x − 1, so **u − v = 1**.

3. **Vertices:** A(0) → 1 − 2i, B(2) → 3, C(2 + i) → 2 + i, D(i) → −i.

4. **Result.** R′ is the rectangle bounded by u + v = −1, u + v = 3, u − v = 1 and u − v = 3. Its sides are 2√2 and √2, and it is turned 45° with the corner A′ at 1 − 2i.`,
        answer: String.raw`u = x − y + 1, v = x + y − 2: x = 0 → u + v = −1, y = 0 → u − v = 3, x = 2 → u + v = 3, y = 1 → u − v = 1; vertices 1 − 2i, 3, 2 + i, −i.` } ] },
    { id: "practice-mapping-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P4", label: "", marks: "", topic: "mapping",
        sub: "Inversion w = 1/z: R = 1/r, φ = −θ; the hyperbola x² − y² = 1 maps to the lemniscate R² = cos 2φ", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Mapping/Transformation" (inversion) and "Linear Transformation", Problem 05`,
        text: String.raw`Describe the inversion $w = 1/z$ in polar form, and show that under it the image of the hyperbola $x^2 - y^2 = 1$ is the lemniscate $R^2 = \cos 2\phi$.`,
        solution: String.raw`1. **Polar form.** Put $z = re^{i\theta}$ and $w = Re^{i\phi}$. Then $Re^{i\phi} = \dfrac1re^{-i\theta}$, so
$$R = \frac1r, \qquad \phi = -\theta$$
   The point $(r, \theta)$ goes to $(1/r, -\theta)$: an inversion in the unit circle followed by a reflection in the real axis.

2. **The hyperbola in polar form:**
$$x^2 - y^2 = r^2(\cos^2\theta - \sin^2\theta) = r^2\cos2\theta = 1$$

![The hyperbola x² − y² = 1 and its image, the lemniscate R² = cos 2φ; ±1 are fixed](fig/practice-mapping-P4-sketch.svg)

3. **Substitute** $r = 1/R$ and $\theta = -\phi$:
$$\frac{1}{R^2}\cos(-2\phi) = 1 \;\Rightarrow\; R^2 = \cos 2\phi$$
   This is the lemniscate of Bernoulli.

4. **Correspondence.**
   - The vertices z = ±1 are fixed, since 1/(±1) = ±1.
   - As z → ∞ along either branch, θ → ±π/4 and w → 0, approaching along the lemniscate's tangents at the origin.
   - Check: $z = \sqrt2 + i$ gives $w = (\sqrt2 - i)/3$, with $R^2 = 1/3$ and $\cos2\phi = (2 - 1)/3 = 1/3$ ✓.`,
        answer: String.raw`R = 1/r, φ = −θ. x² − y² = 1 ⇔ r² cos 2θ = 1 ⇒ (1/R²) cos(−2φ) = 1 ⇒ R² = cos 2φ (lemniscate); ±1 fixed, z → ∞ ⇒ w → 0.` } ] },
    { id: "practice-mapping-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P5", label: "", marks: "", topic: "mapping",
        sub: "Conformal mapping: definition; w = z² preserves the right angle between x = 1 and y = 1 at 1 + i", type: "theory", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Mapping/Transformation": conformal transformation (illustration as in Brown & Churchill Secs. 94–95)`,
        text: String.raw`Define an isogonal and a conformal mapping. Show that $w = z^2$ is conformal at $z_0 = 1 + i$ by finding the images of the lines x = 1 and y = 1 and the angle between them at $w_0 = 2i$.`,
        solution: String.raw`### Definitions
- A mapping of a domain $D_1$ onto $D_2$ that is one-to-one and continuously differentiable is **isogonal** if any two curves meeting at an angle α are mapped onto curves meeting at the same angle α.
- It is **conformal** if both the magnitude **and the sense** of every angle are preserved.
- An analytic f is conformal at every point where $f'(z_0) \ne 0$. There, every direction is turned through $\arg f'(z_0)$ and lengths are scaled by $|f'(z_0)|$.

![x = 1 and y = 1 cross at 1 + i at 90°; under w = z² they become two parabolas still crossing at 90° at 2i](fig/practice-mapping-P5-sketch.svg)

### Example: w = z² at 1 + i
1. **Check the derivative.** $f'(z) = 2z$, so $f'(1 + i) = 2 + 2i \ne 0$. w = z² is conformal there: rotation 45°, scale factor $2\sqrt2$.
2. **x = 1:** $w = (1 + iy)^2 = 1 - y^2 + 2iy$, so $u = 1 - v^2/4$, a parabola opening left.
3. **y = 1:** $w = (x + i)^2 = x^2 - 1 + 2ix$, so $u = v^2/4 - 1$, a parabola opening right.
4. **Angle at $w_0 = 2i$.** The tangent vectors are
$$\frac{d}{dy}(1 + iy)^2\Big|_{y=1} = -2 + 2i, \qquad \frac{d}{dx}(x + i)^2\Big|_{x=1} = 2 + 2i$$
   Their dot product is (−2)(2) + (2)(2) = 0. The parabolas meet at **90°**, with the same sense as the original lines.
5. **Contrast.** At z = 0, f′(0) = 0 and w = z² doubles angles. It is not conformal there.`,
        answer: String.raw`Isogonal: angles preserved in size; conformal: size and sense preserved (analytic f with f′(z₀) ≠ 0). w = z² at 1 + i: f′ = 2 + 2i ≠ 0; x = 1 → u = 1 − v²/4, y = 1 → u = v²/4 − 1, tangents −2 + 2i and 2 + 2i at 2i are perpendicular ⇒ right angle preserved.` } ] },
    { id: "practice-mapping-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P6", label: "", marks: "", topic: "mapping",
        sub: "Every bilinear transformation is a composition of translations, inversion (with reflection), rotation and magnification", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Linear Transformation", definition and Problem 01`,
        text: String.raw`Define a bilinear transformation and show that every bilinear transformation $w = \dfrac{az + b}{cz + d}$ (ad − bc ≠ 0) is a combination of translation, inversion, rotation and magnification.`,
        solution: String.raw`1. **Definition.** $w = \dfrac{az + b}{cz + d}$ with a, b, c, d complex and $ad - bc \ne 0$. Equivalently $cwz + dw - az - b = 0$, which is linear in w and in z separately; hence "bilinear" (also called fractional or Möbius). The condition $ad - bc \ne 0$ (the determinant) makes the map one-to-one and not constant.

2. **Case c = 0.** Then d ≠ 0 and $w = \dfrac adz + \dfrac bd$: a rotation and magnification by a/d, followed by a translation by b/d.

![The chain of elementary maps that builds any bilinear transformation](fig/practice-mapping-P6-sketch.svg)

3. **Case c ≠ 0.** Divide:
$$w = \frac ac + \frac{bc - ad}{c}\cdot\frac{1}{cz + d} = \frac ac + \frac{bc - ad}{c^2}\cdot\frac{1}{z + d/c}$$
   So w is the result of the chain
$$t = z + \frac dc, \qquad s = \frac1t, \qquad r = \frac{bc - ad}{c^2}\,s, \qquad w = r + \frac ac$$

4. **The elementary maps:**
   - $z + \alpha$: translation by the vector α.
   - $\beta z$ (β ≠ 0): rotation through arg β and magnification by |β|.
   - $1/z = \overline{(1/\bar z)}$: inversion in the unit circle followed by reflection in the real axis.

5. **Consequence.** Each step maps circles and lines to circles and lines (1/z does; the others obviously do). So a bilinear transformation maps every circle or line onto a circle or line.`,
        answer: String.raw`w = (az + b)/(cz + d), ad − bc ≠ 0. If c = 0: w = (a/d)z + b/d. If c ≠ 0: w = a/c + ((bc − ad)/c²)·1/(z + d/c) = chain t = z + d/c (translation), s = 1/t (inversion + reflection), r = ((bc − ad)/c²)s (rotation + magnification), w = r + a/c (translation).` } ] },
    { id: "practice-mapping-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P7", label: "", marks: "", topic: "mapping",
        sub: "Bilinear map sending z = 0, −i, −1 to w = i, 1, 0", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Linear Transformation", Example 01`,
        text: String.raw`Find a bilinear transformation which maps the points z = 0, −i, −1 into w = i, 1, 0 respectively.`,
        solution: String.raw`1. **Set up** $w = \dfrac{az + b}{cz + d}$ and impose the three conditions:
   - $z = 0 \mapsto i$: $b/d = i$, so b = id.
   - $z = -1 \mapsto 0$: $-a + b = 0$, so a = b.
   - $z = -i \mapsto 1$: $-ai + b = -ci + d$.

2. **Solve.** From the first two, d = b/i = −ia. Substitute into the third: $-ai + a = -ci - ia$, so $a = -ci$, i.e. c = ia. Then
$$w = \frac{az + a}{iaz - ia} = \frac{z + 1}{i(z - 1)} = -i\,\frac{z + 1}{z - 1}$$

![The three z-points and their images in matching colours; the circle through 0, −i, −1 maps onto the circle through i, 1, 0](fig/practice-mapping-P7-sketch.svg)

3. **Check:**
   - z = 0: $-i(1)/(-1) = i$ ✓
   - z = −i: $-i(1 - i)/(-1 - i) = i(1 - i)/(1 + i) = i(-i) = 1$ ✓
   - z = −1: 0 ✓

4. **Geometry.**
   - The pole is z = 1 (↦ ∞).
   - The circle through 0, −i, −1 (centre $-\frac12 - \frac i2$, radius $1/\sqrt2$) does not pass through z = 1, so its image is a circle: the one through i, 1, 0, with centre $\frac12 + \frac i2$ and radius $1/\sqrt2$. This was checked numerically.`,
        answer: String.raw`b = id, a = b, c = ia ⇒ w = (z + 1)/(i(z − 1)) = −i(z + 1)/(z − 1).` } ] },
    { id: "practice-mapping-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P8", label: "", marks: "", topic: "mapping",
        sub: "Bilinear map −i, 0, i → −1, i, 1 and the image of the y-axis (the unit circle)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Linear Transformation", Problem 02 (also Brown & Churchill, 7th ed., Sec. 87, Exercise 2)`,
        text: String.raw`Find the bilinear transformation that maps the points $z_1 = -i$, $z_2 = 0$, $z_3 = i$ into $w_1 = -1$, $w_2 = i$, $w_3 = 1$ respectively. Find the image of the y-axis under this transformation.`,
        solution: String.raw`1. **Normalise** (d ≠ 0 since 0 ↦ i): $w = \dfrac{pz + q}{rz + 1}$.
   - z = 0 gives **q = i**.
   - z = −i: $-1 = \dfrac{-ip + i}{-ir + 1}$, i.e. $pi + ri = 1 + i$.
   - z = i: $1 = \dfrac{ip + i}{ir + 1}$, i.e. $pi - ri = 1 - i$.

   Adding gives 2pi = 2, so p = −i. Subtracting gives 2ri = 2i, so r = 1. Hence
$$w = \frac{-iz + i}{z + 1} = i\,\frac{1 - z}{1 + z}$$

![The y-axis (upper half orange, lower half teal) and its image, the unit circle; −1 ↦ ∞ and ∞ ↦ −i](fig/practice-mapping-P8-sketch.svg)

2. **Image of x = 0.** Put z = iy:
$$w = i\frac{1 - iy}{1 + iy} = \frac{i(1 - iy)^2}{1 + y^2} = \frac{2y}{1 + y^2} + i\,\frac{1 - y^2}{1 + y^2}$$
$$u^2 + v^2 = \frac{4y^2 + (1 - y^2)^2}{(1 + y^2)^2} = 1$$

3. **Result.** The y-axis is mapped onto the unit circle $u^2 + v^2 = 1$.
   - y > 0 gives u > 0 (the right half).
   - y < 0 gives u < 0 (the left half).
   - The point at infinity of the axis goes to w = −i.

   The notes solve for y and keep $u = +\sqrt{1 - v^2}$, which covers only y > 0. The left half comes from y < 0.

4. **Check:** −i ↦ −1, 0 ↦ i, i ↦ 1 ✓. Numerically |w| = 1 to 10⁻¹⁵ along the axis.`,
        answer: String.raw`w = i(1 − z)/(1 + z) (q = i, p = −i, r = 1). On z = iy: u = 2y/(1 + y²), v = (1 − y²)/(1 + y²) ⇒ u² + v² = 1: the y-axis maps onto the unit circle (y > 0 → right half, y < 0 → left half, ∞ → −i).` } ] },
    { id: "practice-mapping-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P9", label: "", marks: "", topic: "mapping",
        sub: "w = (2z + 3)/(z − 4) maps the circle x² + y² − 4x = 0 onto the line 4u + 3 = 0", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Linear Transformation", Problem 04`,
        text: String.raw`Show that the transformation $w = \dfrac{2z + 3}{z - 4}$ transforms the circle $x^2 + y^2 - 4x = 0$ into the straight line $4u + 3 = 0$.`,
        solution: String.raw`1. **Inverse:** $w(z - 4) = 2z + 3$, so
$$z = \frac{4w + 3}{w - 2}$$

2. **The circle in z, z̄:** $x^2 + y^2 = z\bar z$ and $2x = z + \bar z$, so the circle is
$$z\bar z - 2(z + \bar z) = 0$$

![The circle |z − 2| = 2 passes through the pole z = 4, so its image is the straight line u = −3/4; matching points shown](fig/practice-mapping-P9-sketch.svg)

3. **Substitute** and multiply through by $(w - 2)(\bar w - 2)$:
$$(4w + 3)(4\bar w + 3) - 2\left[(4w + 3)(\bar w - 2) + (4\bar w + 3)(w - 2)\right] = 0$$
$$16w\bar w + 12(w + \bar w) + 9 - 2\left[8w\bar w - 5(w + \bar w) - 12\right] = 0$$
$$22(w + \bar w) + 33 = 0$$

4. **Result.** With $w + \bar w = 2u$: $44u + 33 = 0$, i.e. $4u + 3 = 0$, a straight line ✓.

5. **Why a line.** The circle passes through z = 4, the pole of the map, which goes to ∞; a circle through the pole must become a line.

6. **Check points:**
   - z = 0 ↦ −3/4
   - z = 2 ± 2i ↦ −3/4 ∓ 11i/4

   All have u = −3/4 ✓.`,
        answer: String.raw`z = (4w + 3)/(w − 2); circle z z̄ − 2(z + z̄) = 0 ⇒ (4w + 3)(4w̄ + 3) − 2[(4w + 3)(w̄ − 2) + (4w̄ + 3)(w − 2)] = 0 ⇒ 22(w + w̄) + 33 = 0 ⇒ 4u + 3 = 0 (circle through the pole z = 4 → line).` } ] },
    { id: "practice-mapping-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P10", label: "", marks: "", topic: "mapping",
        sub: "Bilinear map 2, i, −2 → 1, i, −1 by the cross ratio: w = (3z + 2i)/(iz + 6)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Linear Transformation", Home Work 1 (also Brown & Churchill, 7th ed., Sec. 87, Exercise 1; Ans. w = (3z + 2i)/(iz + 6))`,
        text: String.raw`Find the bilinear transformation which maps the points $z_1 = 2$, $z_2 = i$, $z_3 = -2$ into the points $w_1 = 1$, $w_2 = i$ and $w_3 = -1$.`,
        solution: String.raw`1. **Cross ratio** (a bilinear map preserves it):
$$\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$$
$$\frac{(w - 1)(i + 1)}{(w + 1)(i - 1)} = \frac{(z - 2)(i + 2)}{(z + 2)(i - 2)}$$

2. **Simplify the constants:**
$$\frac{i + 1}{i - 1} = -i, \qquad \frac{i + 2}{i - 2} = \frac{(i + 2)(-i - 2)}{5} = \frac{-3 - 4i}{5}$$
   So
$$-i\,\frac{w - 1}{w + 1} = \frac{-3 - 4i}{5}\cdot\frac{z - 2}{z + 2} \;\Rightarrow\; \frac{w - 1}{w + 1} = \frac{(4 - 3i)(z - 2)}{5(z + 2)}$$

3. **Solve for w** with $K = (4 - 3i)(z - 2)$ and $M = 5(z + 2)$, so $w = (M + K)/(M - K)$:
$$w = \frac{(9 - 3i)z + 2 + 6i}{(1 + 3i)z + 18 - 6i} = \frac{3z + 2i}{iz + 6}$$
   The last step divides top and bottom by 3 − i.

![The points 2, i, −2 on the circle |z + 3i/2| = 5/2 and their images 1, i, −1 on |w| = 1](fig/practice-mapping-P10-sketch.svg)

4. **Check:**
   - z = 2: $(6 + 2i)/(6 + 2i) = 1$ ✓
   - z = i: $5i/5 = i$ ✓
   - z = −2: $(-6 + 2i)/(6 - 2i) = -1$ ✓

5. **Note on the notes.** The homework statement prints $w_1 = 0$, but the answer quoted, $(3z + 2i)/(iz + 6)$, sends 2 ↦ 1. As in B&C, the intended value is $w_1 = 1$.

6. **Geometry.** The circle through 2, i, −2 is $|z + \tfrac32i| = \tfrac52$. The pole 6i is not on it, so it maps onto the circle through 1, i, −1, which is |w| = 1.`,
        answer: String.raw`Cross ratio ⇒ (w − 1)/(w + 1) = (4 − 3i)(z − 2)/(5(z + 2)) ⇒ w = (3z + 2i)/(iz + 6) (check 2 ↦ 1, i ↦ i, −2 ↦ −1); the notes' "w₁ = 0" should be w₁ = 1.` } ] },
    { id: "practice-mapping-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P11", label: "", marks: "", topic: "mapping",
        sub: "Bilinear map with ∞ among the points: z = ∞, i, 0 onto w = 0, i, ∞", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 87, Exercise 3 (Ans. w = −1/z)`,
        text: String.raw`Find the bilinear transformation that maps the points $z_1 = \infty$, $z_2 = i$, $z_3 = 0$ onto the points $w_1 = 0$, $w_2 = i$, $w_3 = \infty$.`,
        solution: String.raw`1. **Use the special points.** With $w = \dfrac{az + b}{cz + d}$:
   - $z = 0 \mapsto \infty$ requires the denominator to vanish at 0, so **d = 0**.
   - $z = \infty \mapsto 0$: the limit as z → ∞ is a/c, so **a = 0**.

   Hence $w = \dfrac{b}{cz} = \dfrac kz$.

2. **Third point:** $i = k/i$ gives $k = i^2 = -1$. So
$$w = -\frac1z$$

![∞, i, 0 in the z-plane and their images 0, i, ∞; the unit circle maps onto itself and i is a fixed point](fig/practice-mapping-P11-sketch.svg)

3. **Check:** ∞ ↦ 0, i ↦ −1/i = i, 0 ↦ ∞ ✓ (the determinant ad − bc = 0 − (−1)(1) ≠ 0).

4. **Geometry.**
   - $-1/z = -\bar z/|z|^2$: inversion in the unit circle, then reflection in the imaginary axis.
   - |z| = 1 goes onto |w| = 1, and the positive imaginary axis onto itself, since $-1/(iy) = i/y$.`,
        answer: String.raw`0 ↦ ∞ ⇒ d = 0; ∞ ↦ 0 ⇒ a = 0 ⇒ w = k/z; i ↦ i ⇒ k = −1 ⇒ w = −1/z.` } ] },
    { id: "practice-mapping-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P12", label: "", marks: "", topic: "mapping",
        sub: "Fixed points of w = (z − 1)/(z + 1) and w = (6z − 9)/z", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 87, Exercises 6–7 (Ans. (a) z = ±i; (b) z = 3)`,
        text: String.raw`A fixed point of a transformation w = f(z) is a point $z_0$ with $f(z_0) = z_0$. Show that a bilinear transformation other than the identity has at most two fixed points in the extended plane, and find the fixed points of (a) $w = \dfrac{z - 1}{z + 1}$; (b) $w = \dfrac{6z - 9}{z}$.`,
        solution: String.raw`1. **At most two.** $z = \dfrac{az + b}{cz + d}$ gives $cz^2 + (d - a)z - b = 0$.
   - If c ≠ 0, this quadratic has at most two roots.
   - If c = 0 (w = (a/d)z + b/d), ∞ is fixed and there is at most one finite fixed point, unless a = d and b = 0, which is the identity.

![Fixed points: (a) ±i; (b) the double fixed point 3; hollow markers are the poles](fig/practice-mapping-P12-sketch.svg)

2. **(a)** $z(z + 1) = z - 1$, so $z^2 = -1$ and **z = ±i**. Check: $(i - 1)/(i + 1) = i$ ✓.

3. **(b)** $z^2 = 6z - 9$, so $(z - 3)^2 = 0$ and **z = 3**, a double (parabolic) fixed point. Check: $(18 - 9)/3 = 3$ ✓. The point ∞ is not fixed, since it maps to 6.`,
        answer: String.raw`cz² + (d − a)z − b = 0 ⇒ at most two fixed points (unless identity). (a) z² = −1 ⇒ z = ±i; (b) (z − 3)² = 0 ⇒ z = 3 (double).` } ] },
    { id: "practice-mapping-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P13", label: "", marks: "", topic: "mapping",
        sub: "Image of the strip 0 < y < 1/(2c) under w = 1/z: u² + (v + c)² > c², v < 0", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 85, Exercise 4 (Ans. u² + (v + c)² > c², v < 0)`,
        text: String.raw`Find the image of the infinite strip $0 < y < 1/(2c)$ (c > 0) under the transformation $w = 1/z$. Sketch the strip and its image.`,
        solution: String.raw`1. **Formulas.** $w = 1/z$ gives
$$u = \frac{x}{x^2 + y^2}, \qquad v = \frac{-y}{x^2 + y^2}$$
   and conversely $x = u/(u^2 + v^2)$, $y = -v/(u^2 + v^2)$.

![Strip between the real axis (teal) and the line y = 1/(2c) (orange); image: the lower half plane outside the orange circle](fig/practice-mapping-P13-sketch.svg)

2. **y > 0.** Then $-v/(u^2 + v^2) > 0$, so **v < 0**: the real axis bounds the image along the u axis.

3. **y < 1/(2c):**
$$\frac{-v}{u^2 + v^2} < \frac{1}{2c} \;\Leftrightarrow\; -2cv < u^2 + v^2 \;\Leftrightarrow\; u^2 + (v + c)^2 > c^2$$

4. **Result.** The image is the part of the lower half plane outside the circle of radius c centred at −ci:
$$u^2 + (v + c)^2 > c^2, \qquad v < 0$$
   The line y = 1/(2c) becomes the circle $u^2 + (v + c)^2 = c^2$, which touches the u axis at the origin (the image of z = ∞). Random points of the strip (c = 1) all satisfied both inequalities ✓.`,
        answer: String.raw`y = −v/(u² + v²): y > 0 ⇒ v < 0; y < 1/(2c) ⇔ u² + v² + 2cv > 0 ⇔ u² + (v + c)² > c². Image: lower half plane outside the circle |w + ci| = c.` } ] },
    { id: "practice-mapping-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P14", label: "", marks: "", topic: "mapping",
        sub: "w = (z − 2)/z maps the disc |z − 1| ≤ 1 onto the half plane Re w ≤ 0", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 88, Exercise 3(b)`,
        text: String.raw`Show that the linear fractional transformation $w = \dfrac{z - 2}{z}$ can be written as $Z = z - 1$, $W = i\dfrac{1 - Z}{1 + Z}$, $w = iW$, and verify that it maps the disc $|z - 1| \le 1$ onto the left half plane $\mathrm{Re}\,w \le 0$.`,
        solution: String.raw`1. **Composition:**
$$iW = i\cdot i\frac{1 - (z - 1)}{1 + (z - 1)} = -\frac{2 - z}{z} = \frac{z - 2}{z} \ ✓$$

![The disc |z − 1| ≤ 1 and its image, the half plane Re w ≤ 0; the boundary circle goes onto the imaginary axis (0 ↦ ∞, 2 ↦ 0, 1 ± i ↦ ±i)](fig/practice-mapping-P14-sketch.svg)

2. **Step by step.**
   - Z = z − 1 moves the disc to $|Z| \le 1$.
   - $W = i(1 - Z)/(1 + Z)$ maps |Z| ≤ 1 onto Im W ≥ 0 (the map of notes Problem 03, verified in B&C Exercise 3(a)).
   - Multiplying by i rotates through π/2, taking the upper half plane Im W ≥ 0 onto the left half plane Re w ≤ 0.

3. **Direct check.** $w = 1 - \dfrac2z$, so
$$\mathrm{Re}\,w = 1 - \frac{2x}{x^2 + y^2} \le 0 \;\Leftrightarrow\; x^2 + y^2 \le 2x \;\Leftrightarrow\; (x - 1)^2 + y^2 \le 1$$
   (For z ≠ 0; z = 0 goes to ∞.)

4. **Boundary points:** 0 ↦ ∞, 2 ↦ 0, 1 + i ↦ i, 1 − i ↦ −i. All lie on the imaginary axis, the image of the circle |z − 1| = 1 ✓.`,
        answer: String.raw`iW = −(2 − z)/z = (z − 2)/z; |Z| ≤ 1 → Im W ≥ 0 → (×i) Re w ≤ 0. Directly: Re w = 1 − 2x/(x² + y²) ≤ 0 ⇔ (x − 1)² + y² ≤ 1.` } ] },
    { id: "practice-mapping-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mapping-P15", label: "", marks: "", topic: "mapping",
        sub: "Angle of rotation and scale factor: w = z² at 2 + i; w = 1/z at z = 1 and z = i", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 96 exercises, Exercises 1 and 2 (Ans. 2: (a) π; (b) 0)`,
        text: String.raw`(a) Determine the angle of rotation at the point z = 2 + i when the transformation is $w = z^2$, and show that the scale factor of the transformation at that point is $2\sqrt5$. (b) What angle of rotation is produced by the transformation $w = 1/z$ at the point (i) z = 1; (ii) z = i?`,
        solution: String.raw`**Rule.** If f is analytic and $f'(z_0) \ne 0$, every smooth curve through $z_0$ is turned through $\arg f'(z_0)$, and short lengths are multiplied by the scale factor $|f'(z_0)|$.

![Short horizontal and vertical segments at 2 + i and their images at 3 + 4i: both turned through 26.6° and stretched by 2√5](fig/practice-mapping-P15-sketch.svg)

1. **(a)** $f'(z) = 2z$, so $f'(2 + i) = 4 + 2i$. Then
$$\text{angle of rotation} = \arg(4 + 2i) = \tan^{-1}\frac12 \approx 0.4636\ \text{rad} = 26.57^\circ$$
$$\text{scale factor} = |4 + 2i| = \sqrt{20} = 2\sqrt5 \approx 4.47$$
   For example, the horizontal line y = 1 through 2 + i, with direction 1, maps to a curve leaving $w_0 = 3 + 4i$ in direction 4 + 2i.

2. **(b)** $f'(z) = -1/z^2$:
   - (i) $f'(1) = -1$, so the angle of rotation is **π**.
   - (ii) $f'(i) = -1/(-1) = 1$, so the angle of rotation is **0**.

   The scale factor is 1 at both points, since |z| = 1.`,
        answer: String.raw`(a) f′(2 + i) = 4 + 2i: rotation arg(4 + 2i) = tan⁻¹(1/2) ≈ 26.57°, scale factor |4 + 2i| = 2√5; (b) f′ = −1/z²: (i) f′(1) = −1 ⇒ π; (ii) f′(i) = 1 ⇒ 0.` } ] }
  ]
});
