QB.paper({ year: "Practice", set: "Residues and contour integration", date: "", marks: 0, practice: true,
  rules: String.raw`Residues and contour integration (Brown & Churchill ch. 6–7; lecture notes "Residue" and "Contour Integration"): every worked example and home-work problem in the notes not already set in past papers (residues at poles of any order, the residue theorem, rational integrals over the real line, Fourier-type integrals with Jordan's lemma, trigonometric integrals over (0, 2π), indented contours), selected Brown & Churchill exercises (Secs. 69, 72, 74), and new exam-style problems.`,
  questions: [
    { id: "practice-residues-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P1", label: "", marks: "", topic: "residues",
        sub: "Residue of z⁻³e^{iz} at z = 0 from the Laurent series", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Residue" (MATH 327), worked example after the definition`,
        text: String.raw`Find the residue of $z^{-3}e^{iz}$ at $z = 0$.`,
        solution: String.raw`1. **Laurent series about 0.** With $e^{w} = \sum w^n/n!$:
$$\frac{e^{iz}}{z^3} = \frac{1}{z^3}\left[1 + iz + \frac{(iz)^2}{2!} + \frac{(iz)^3}{3!} + \cdots\right] = \frac{1}{z^3} + \frac{i}{z^2} - \frac{1}{2z} - \frac{i}{6} + \cdots$$

![Draw the small circle about z = 0 and mark the pole of order 3](fig/practice-residues-P1-sketch.svg)

2. **Residue** = coefficient of $z^{-1}$:
$$\mathrm{Res}_{z=0}\frac{e^{iz}}{z^3} = -\frac12$$

3. **Check with the pole formula** (pole of order 3): $\frac{1}{2!}\frac{d^2}{dz^2}e^{iz}\big|_0 = \frac{i^2}{2} = -\frac12$ ✓.

**Result:** −1/2.`,
        answer: String.raw`e^{iz}/z³ = 1/z³ + i/z² − 1/(2z) − i/6 + … ⇒ Res = −1/2 (= (1/2!)(e^{iz})″ at 0).` } ] },
    { id: "practice-residues-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P2", label: "", marks: "", topic: "residues",
        sub: "Residues of (z² − 2z)/((z + 1)²(z² + 4)) at all its poles", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Residue" (MATH 327), Problem 01`,
        text: String.raw`Find the residue of $f(z) = \dfrac{z^2 - 2z}{(z + 1)^2(z^2 + 4)}$ at all its poles in the finite plane.`,
        solution: String.raw`1. **Poles:** $(z + 1)^2(z^2 + 4) = 0$ gives a double pole at z = −1 and simple poles at z = ±2i.

![Mark the double pole −1 and the simple poles ±2i with their residues](fig/practice-residues-P2-sketch.svg)

2. **Double pole z = −1:**
$$\mathrm{Res}_{-1} = \frac{d}{dz}\left[\frac{z^2 - 2z}{z^2 + 4}\right]_{z=-1} = \frac{(2z - 2)(z^2 + 4) - (z^2 - 2z)(2z)}{(z^2 + 4)^2}\Big|_{-1} = \frac{(-4)(5) - (3)(-2)}{25} = -\frac{14}{25}$$

3. **Simple pole z = 2i:**
$$\mathrm{Res}_{2i} = \frac{z^2 - 2z}{(z + 2i)(z + 1)^2}\Big|_{2i} = \frac{-4 - 4i}{4i(1 + 2i)^2} = \frac{-4 - 4i}{4i(-3 + 4i)} = \frac{-4 - 4i}{-16 - 12i} = \frac{1 + i}{4 + 3i} = \frac{7 + i}{25}$$

4. **Simple pole z = −2i** (f has real coefficients, so the residue is the conjugate): $\mathrm{Res}_{-2i} = \dfrac{7 - i}{25}$.

5. **Check:** the sum of all residues is $(-14 + 7 + 7)/25 = 0$, as it must be, since f ~ 1/z² at infinity.

**Result:** −14/25 at −1; (7 + i)/25 at 2i; (7 − i)/25 at −2i.`,
        answer: String.raw`Res(−1) = d/dz[(z² − 2z)/(z² + 4)] at −1 = −14/25; Res(2i) = (7 + i)/25; Res(−2i) = (7 − i)/25 (sum 0).` } ] },
    { id: "practice-residues-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P3", label: "", marks: "", topic: "residues",
        sub: "Poles and residues of z²/((z − 1)²(z + 2))", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Residue" (MATH 327), H.W. after Problem 01`,
        text: String.raw`Determine the poles and the residue at each pole of the function $f(z) = \dfrac{z^2}{(z - 1)^2(z + 2)}$.`,
        solution: String.raw`1. **Poles:** a double pole at z = 1 and a simple pole at z = −2.

![Mark the double pole 1 and the simple pole −2 with their residues](fig/practice-residues-P3-sketch.svg)

2. **Double pole z = 1:**
$$\mathrm{Res}_{1} = \frac{d}{dz}\left[\frac{z^2}{z + 2}\right]_{z=1} = \frac{2z(z + 2) - z^2}{(z + 2)^2}\Big|_1 = \frac{z^2 + 4z}{(z + 2)^2}\Big|_1 = \frac{5}{9}$$

3. **Simple pole z = −2:**
$$\mathrm{Res}_{-2} = \frac{z^2}{(z - 1)^2}\Big|_{-2} = \frac{4}{9}$$

4. **Check:** sum = 5/9 + 4/9 = 1, the coefficient of 1/z in f at infinity (f ≈ 1/z for large z) ✓.

**Result:** Res = 5/9 at z = 1 (double pole), 4/9 at z = −2 (simple pole).`,
        answer: String.raw`Double pole z = 1: Res = d/dz[z²/(z + 2)] at 1 = 5/9; simple pole z = −2: Res = 4/9.` } ] },
    { id: "practice-residues-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P4", label: "", marks: "", topic: "residues",
        sub: "∮ e^z/(z(z − 1)²) dz = 2πi on |z| = 2", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Residue" (MATH 327), Problem 03`,
        text: String.raw`Show that $\displaystyle\oint_C\frac{e^z}{z(z - 1)^2}dz = 2\pi i$, where $C: |z| = 2$.`,
        solution: String.raw`1. **Poles:** z = 0 (simple) and z = 1 (double), both inside |z| = 2.

![Draw |z| = 2 with both poles inside (filled) and their residues](fig/practice-residues-P4-sketch.svg)

2. **Residue at 0:** $\dfrac{e^z}{(z - 1)^2}\Big|_0 = 1$.

3. **Residue at 1:**
$$\frac{d}{dz}\left[\frac{e^z}{z}\right]_{z=1} = \frac{ze^z - e^z}{z^2}\Big|_1 = 0$$

4. **Residue theorem:** $\oint_C = 2\pi i(1 + 0) = 2\pi i$ ✓.

**Result:** 2πi.`,
        answer: String.raw`Res(0) = 1, Res(1) = d/dz(e^z/z) at 1 = 0 ⇒ integral = 2πi.` } ] },
    { id: "practice-residues-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P5", label: "", marks: "", topic: "residues",
        sub: "∮ z³/((z − 1)²(z − 2)(z − 4)) dz on |z| = 3", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Residue" (MATH 327), Problem 04`,
        text: String.raw`Evaluate $\displaystyle\oint_C\frac{z^3}{(z - 1)^2(z - 2)(z - 4)}dz$, $C: |z| = 3$.`,
        solution: String.raw`1. **Poles:** z = 1 (double), z = 2 and z = 4 (simple). z = 1 and z = 2 lie inside |z| = 3; z = 4 is outside.

![Draw |z| = 3: poles 1 and 2 inside (filled), 4 outside (hollow)](fig/practice-residues-P5-sketch.svg)

2. **Residue at the double pole z = 1:** with $g(z) = \dfrac{z^3}{(z - 2)(z - 4)} = \dfrac{z^3}{z^2 - 6z + 8}$,
$$g'(1) = \frac{3z^2(z^2 - 6z + 8) - z^3(2z - 6)}{(z^2 - 6z + 8)^2}\Big|_1 = \frac{3(3) - (-4)}{9} = \frac{13}{9}$$

3. **Residue at z = 2:** $\dfrac{z^3}{(z - 1)^2(z - 4)}\Big|_2 = \dfrac{8}{1 \times (-2)} = -4$.

4. **Residue theorem:**
$$\oint_C = 2\pi i\left(\frac{13}{9} - 4\right) = 2\pi i\left(-\frac{23}{9}\right) = -\frac{46\pi i}{9}$$

5. **Note on the notes.** The notes write the residue at z = 2 as "4" (and take the limit as "z → 1"), but then correctly use 13/9 − 4. The value is −4, and the integral is −46πi/9 (the minus sign is easily lost). Check: the residue at the outside pole z = 4 is 64/(9 × 2) = 32/9, and all three residues sum to 13/9 − 4 + 32/9 = 1, the residue of f at infinity with sign changed ✓.

**Result:** $-46\pi i/9$.`,
        answer: String.raw`Inside: z = 1 (double, Res = 13/9) and z = 2 (Res = −4); z = 4 outside ⇒ integral = 2πi(13/9 − 4) = −46πi/9.` } ] },
    { id: "practice-residues-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P6", label: "", marks: "", topic: "residues",
        sub: "∮ e^{zt}/(z² + 1)² dz = πi(sin t − t cos t) on |z| = 3", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Residue" (MATH 327), Problem 05`,
        text: String.raw`Show that $\displaystyle\oint_C\frac{e^{zt}}{(z^2 + 1)^2}dz = \pi i(\sin t - t\cos t)$, t > 0, $C: |z| = 3$.`,
        solution: String.raw`1. **Poles:** z = ±i, both double, both inside |z| = 3.

![Draw |z| = 3 enclosing the double poles ±i](fig/practice-residues-P6-sketch.svg)

2. **Residue at z = i:** with $g(z) = e^{zt}/(z + i)^2$,
$$g'(z) = \frac{te^{zt}(z + i) - 2e^{zt}}{(z + i)^3} \;\Rightarrow\; \mathrm{Res}_i = g'(i) = \frac{e^{it}(2it - 2)}{(2i)^3} = \frac{e^{it}(2it - 2)}{-8i} = -\frac14(t + i)e^{it}$$

3. **Residue at z = −i** (same steps with i → −i): $\mathrm{Res}_{-i} = -\dfrac14(t - i)e^{-it}$.

4. **Sum:**
$$-\frac14\left[t(e^{it} + e^{-it}) + i(e^{it} - e^{-it})\right] = -\frac14[2t\cos t + i(2i\sin t)] = \frac12(\sin t - t\cos t)$$

5. **Residue theorem:**
$$\oint_C\frac{e^{zt}}{(z^2 + 1)^2}dz = 2\pi i\cdot\frac12(\sin t - t\cos t) = \pi i(\sin t - t\cos t)$$
   Numerical check (t = 1.3): both sides equal 1.93462i ✓. (This is the inverse Laplace transform of $1/(s^2 + 1)^2$, namely $\frac12(\sin t - t\cos t)$.)`,
        answer: String.raw`Res(i) = −¼(t + i)e^{it}, Res(−i) = −¼(t − i)e^{−it}; sum = ½(sin t − t cos t) ⇒ integral = πi(sin t − t cos t).` } ] },
    { id: "practice-residues-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P7", label: "", marks: "", topic: "residues",
        sub: "∫ x²/(x² + 1)³ dx over the real line = π/8 (and x²/(x² + a²)³ = π/(8a³))", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Contour Integration" (MATH 327), Type I Problem and Home Work 1`,
        text: String.raw`Evaluate $\displaystyle\int_{-\infty}^{\infty}\frac{x^2\,dx}{(x^2 + 1)^3}$. Hence (home work) show that $\displaystyle\int_{-\infty}^{\infty}\frac{x^2\,dx}{(x^2 + a^2)^3} = \frac{\pi}{8a^3}$ (a > 0).`,
        solution: String.raw`**Method:** $\oint_C f(z)\,dz$ with $f(z) = z^2/(z^2 + 1)^3$ and C the segment [−R, R] plus the upper semicircle Γ (R > 1).

![Closed contour: segment [−R, R] and the upper semicircle C_R enclosing z = i (order 3)](fig/practice-residues-P7-sketch.svg)

1. **Poles:** z = ±i, each of order 3; only z = i is inside.

2. **Residue at z = i:** with $g(z) = z^2/(z + i)^3$,
$$\mathrm{Res}_i = \frac{1}{2!}g''(i), \qquad g''(z) = \frac{2}{(z + i)^3} - \frac{12z}{(z + i)^4} + \frac{12z^2}{(z + i)^5}$$
$$g''(i) = \frac{2}{-8i} - \frac{12i}{16} + \frac{-12}{32i} = \frac{i}{4} - \frac{3i}{4} + \frac{3i}{8} = -\frac{i}{8} \;\Rightarrow\; \mathrm{Res}_i = -\frac{i}{16}$$

3. **Γ contributes nothing:** on |z| = R, $|f| \le R^2/(R^2 - 1)^3$, so $|\int_\Gamma f\,dz| \le \pi R^3/(R^2 - 1)^3 \to 0$.

4. **Result:**
$$\int_{-\infty}^{\infty}\frac{x^2\,dx}{(x^2 + 1)^3} = 2\pi i\left(-\frac{i}{16}\right) = \frac{\pi}{8}, \qquad \int_0^\infty = \frac{\pi}{16}$$

5. **General a** (substitute x = at, dx = a dt):
$$\int_{-\infty}^{\infty}\frac{x^2\,dx}{(x^2 + a^2)^3} = \int\frac{a^2t^2\,a\,dt}{a^6(t^2 + 1)^3} = \frac{1}{a^3}\cdot\frac{\pi}{8} = \frac{\pi}{8a^3}$$
   Quadrature: 0.392699 = π/8 ✓.`,
        answer: String.raw`Pole z = i (order 3) inside; Res = ½g″(i) = −i/16 with g = z²/(z + i)³; arc → 0 ⇒ integral = 2πi(−i/16) = π/8 (π/16 on (0, ∞)); scaling gives π/(8a³).` } ] },
    { id: "practice-residues-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P8", label: "", marks: "", topic: "residues",
        sub: "∫₀^∞ x²/((x² + 9)(x² + 4)²) dx = π/200", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Contour Integration" (MATH 327), Problem 02 (same as Brown & Churchill Sec. 72, Exercise 5)`,
        text: String.raw`Evaluate $\displaystyle\int_0^\infty\frac{x^2\,dx}{(x^2 + 9)(x^2 + 4)^2}$.`,
        solution: String.raw`**Method:** the integrand is even, so the integral is half of $\int_{-\infty}^{\infty}$; use the upper semicircle with $f(z) = z^2/[(z^2 + 9)(z^2 + 4)^2]$ (degree difference 4, so the arc integral → 0).

1. **Poles in the upper half-plane:** z = 3i (simple) and z = 2i (double).

![Draw the upper semicircle enclosing 2i and 3i; −2i, −3i are outside](fig/practice-residues-P8-sketch.svg)

2. **Residue at 3i:**
$$\frac{z^2}{(z + 3i)(z^2 + 4)^2}\Big|_{3i} = \frac{-9}{6i(-5)^2} = \frac{-9}{150i} = \frac{3i}{50}$$

3. **Residue at 2i:** with $g(z) = \dfrac{z^2}{(z^2 + 9)(z + 2i)^2}$, $\mathrm{Res}_{2i} = g'(2i)$. Using $g'/g = \frac{2}{z} - \frac{2z}{z^2 + 9} - \frac{2}{z + 2i}$:
$$g(2i) = \frac{-4}{5(4i)^2} = \frac{1}{20}, \qquad \frac{g'}{g}\Big|_{2i} = \frac{2}{2i} - \frac{4i}{5} - \frac{2}{4i} = -i - \frac{4i}{5} + \frac{i}{2} = -\frac{13i}{10}$$
$$\mathrm{Res}_{2i} = \frac{1}{20}\left(-\frac{13i}{10}\right) = -\frac{13i}{200}$$

4. **Sum and integral:**
$$\frac{3i}{50} - \frac{13i}{200} = -\frac{i}{200}, \qquad \int_{-\infty}^{\infty} = 2\pi i\left(-\frac{i}{200}\right) = \frac{\pi}{100}, \qquad \int_0^\infty = \frac{\pi}{200}$$
   This agrees with the Brown & Churchill answer π/200; quadrature gives 0.0157080 ✓.`,
        answer: String.raw`Upper poles 3i (Res = 3i/50) and 2i (double, Res = −13i/200); sum −i/200 ⇒ ∫_{−∞}^{∞} = π/100 ⇒ ∫₀^∞ = π/200.` } ] },
    { id: "practice-residues-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P9", label: "", marks: "", topic: "residues",
        sub: "∫₀^∞ cos mx/(x² + 1) dx = (π/2)e^{−m} via e^{imz} and Jordan's lemma", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Contour Integration" (MATH 327), Type I Problem (m > 0) and the 'Useful Lemma' (Jordan); also Brown & Churchill Sec. 74, Exercise 2`,
        text: String.raw`Evaluate $\displaystyle\int_0^\infty\frac{\cos mx}{x^2 + 1}dx$, m > 0.`,
        solution: String.raw`1. **Complex form.** The integrand is even, and $\cos mx = \mathrm{Re}\,e^{imx}$:
$$I = \frac12\mathrm{Re}\int_{-\infty}^{\infty}\frac{e^{imx}}{x^2 + 1}dx$$
   Use $f(z) = e^{imz}/(z^2 + 1)$ on the upper semicircle (do **not** use cos mz, which grows in the upper half-plane).

![Draw the semicircle C_R (Jordan arc) enclosing z = i](fig/practice-residues-P9-sketch.svg)

2. **Arc → 0** (Jordan's lemma): $1/(z^2 + 1) \to 0$ as |z| → ∞ and m > 0, so $\int_\Gamma e^{imz}f\,dz \to 0$. (Even the crude bound works here: $|e^{imz}| = e^{-my} \le 1$, so $|\int_\Gamma| \le \pi R/(R^2 - 1) \to 0$.)

3. **Residue at z = i:** $\dfrac{e^{imz}}{2z}\Big|_i = \dfrac{e^{-m}}{2i}$.

4. **Result:**
$$\int_{-\infty}^{\infty}\frac{e^{imx}}{x^2 + 1}dx = 2\pi i\frac{e^{-m}}{2i} = \pi e^{-m} \;\Rightarrow\; I = \frac{\pi}{2}e^{-m}$$
   The imaginary part gives $\int_{-\infty}^\infty \sin mx/(x^2 + 1)\,dx = 0$ (odd integrand) ✓. Numerical check (m = 1.7): 0.286959 ✓.`,
        answer: String.raw`I = ½Re∫e^{imx}/(x² + 1)dx; Res at i = e^{−m}/(2i); Jordan ⇒ arc → 0 ⇒ ∫_{−∞}^{∞} = πe^{−m} ⇒ I = (π/2)e^{−m}.` } ] },
    { id: "practice-residues-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P10", label: "", marks: "", topic: "residues",
        sub: "∫₀^π dθ/(3 + 2 cos θ) = π/√5 by the unit-circle substitution", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Contour Integration" (MATH 327), Type II Problem 02`,
        text: String.raw`Evaluate $\displaystyle\int_0^\pi\frac{d\theta}{3 + 2\cos\theta}$.`,
        solution: String.raw`1. **Extend to a full period.** The integrand is even in θ and 2π-periodic, so $\int_0^\pi = \frac12\int_0^{2\pi}$.

![Unit circle after z = e^{iθ}: α inside, β outside](fig/practice-residues-P10-sketch.svg)

2. **Substitute** $z = e^{i\theta}$, $\cos\theta = \frac12(z + z^{-1})$, $d\theta = dz/(iz)$:
$$\int_0^{2\pi}\frac{d\theta}{3 + 2\cos\theta} = \oint_{|z|=1}\frac{dz}{iz(3 + z + z^{-1})} = \frac1i\oint_{|z|=1}\frac{dz}{z^2 + 3z + 1}$$

3. **Poles:** $z^2 + 3z + 1 = 0$ gives $z = \dfrac{-3 \pm\sqrt5}{2}$, i.e. α = −0.382 (inside) and β = −2.618 (outside).

4. **Residue at α:** $\dfrac{1}{\alpha - \beta} = \dfrac{1}{\sqrt5}$.

5. **Result:**
$$\int_0^{2\pi} = \frac1i\cdot2\pi i\cdot\frac{1}{\sqrt5} = \frac{2\pi}{\sqrt5} \;\Rightarrow\; \int_0^\pi\frac{d\theta}{3 + 2\cos\theta} = \frac{\pi}{\sqrt5} \approx 1.4050$$

6. **Note on the notes:** the roots are printed there as $(-1 \pm\sqrt5)/2$; they should be $(-3 \pm\sqrt5)/2$. The residue $1/\sqrt5$ and the final answer π/√5 are correct. Check: $\int_0^{2\pi}d\theta/(a + b\cos\theta) = 2\pi/\sqrt{a^2 - b^2} = 2\pi/\sqrt5$ ✓.`,
        answer: String.raw`∫₀^π = ½∫₀^{2π}; z = e^{iθ} ⇒ (1/i)∮dz/(z² + 3z + 1); inside root (−3 + √5)/2, Res = 1/√5 ⇒ ∫₀^{2π} = 2π/√5 ⇒ answer π/√5.` } ] },
    { id: "practice-residues-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P11", label: "", marks: "", topic: "residues",
        sub: "General result ∫₀^{2π} dθ/(a + b sin θ) = 2π/√(a² − b²) for |b| < a", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Contour Integration" (MATH 327), Type II Problem (Show that …)`,
        text: String.raw`Show that $\displaystyle\int_0^{2\pi}\frac{d\theta}{a + b\sin\theta} = \frac{2\pi}{\sqrt{a^2 - b^2}}$, $|b| < a$.`,
        solution: String.raw`1. **Substitute** $z = e^{i\theta}$, $\sin\theta = \dfrac{z - z^{-1}}{2i}$, $d\theta = \dfrac{dz}{iz}$ (b ≠ 0; for b = 0 the result 2π/a is immediate):
$$I = \oint_{|z|=1}\frac{1}{a + \frac{b}{2i}(z - z^{-1})}\frac{dz}{iz} = \oint_{|z|=1}\frac{2\,dz}{bz^2 + 2aiz - b}$$

![Unit circle with the poles α (inside) and β (outside)](fig/practice-residues-P11-sketch.svg)

2. **Poles:** $bz^2 + 2aiz - b = 0$ gives
$$z = \frac{-2ai \pm\sqrt{-4a^2 + 4b^2}}{2b} = \frac{i\left(-a \pm\sqrt{a^2 - b^2}\right)}{b}$$
   $\alpha = i(-a + \sqrt{a^2 - b^2})/b$ and $\beta = i(-a - \sqrt{a^2 - b^2})/b$. Since $|\alpha\beta| = |{-b}/b| = 1$ and $|\alpha| < |\beta|$, α is **inside** and β outside.

3. **Residue at α:**
$$\mathrm{Res}_\alpha = \frac{2}{b(\alpha - \beta)} = \frac{2}{b\cdot\frac{2i\sqrt{a^2 - b^2}}{b}} = \frac{1}{i\sqrt{a^2 - b^2}}$$

4. **Result:**
$$I = 2\pi i\cdot\frac{1}{i\sqrt{a^2 - b^2}} = \frac{2\pi}{\sqrt{a^2 - b^2}}$$
   Check (a = 5, b = 3): 2π/4 = 1.5708, matching quadrature ✓.`,
        answer: String.raw`z = e^{iθ} ⇒ ∮2dz/(bz² + 2aiz − b); roots i(−a ± √(a² − b²))/b, the + root inside; Res = 1/(i√(a² − b²)) ⇒ I = 2π/√(a² − b²).` } ] },
    { id: "practice-residues-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P12a", label: "(a)", marks: "", topic: "residues",
        sub: "∫₀^{2π} dθ/(5 − 4 sin θ) = 2π/3", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Contour Integration" (MATH 327), Home Work (i)`,
        text: String.raw`(i) Show that $\displaystyle\int_0^{2\pi}\frac{d\theta}{5 - 4\sin\theta} = \frac{2\pi}{3}$.`,
        solution: String.raw`1. **Substitute** $z = e^{i\theta}$, $\sin\theta = (z - z^{-1})/(2i)$, $d\theta = dz/(iz)$:
$$\frac{1}{5 - \frac{4}{2i}(z - z^{-1})}\cdot\frac{1}{iz} = \frac{2}{10iz - 4z^2 + 4}\cdot\frac{1}{1}\cdot\frac{1}{1}\;\Rightarrow\; I = \oint_{|z|=1}\frac{-dz}{2z^2 - 5iz - 2}$$
   (Multiply numerator and denominator by 2iz: $2iz \cdot 5 - 4(z^2 - 1) = 10iz - 4z^2 + 4$, so $I = \oint\frac{2\,dz}{-4z^2 + 10iz + 4}$.)

![Unit circle: i/2 inside, 2i outside](fig/practice-residues-P12a-sketch.svg)

2. **Poles:** $2z^2 - 5iz - 2 = 0$ gives $z = \dfrac{5i \pm\sqrt{-25 + 16}}{4} = \dfrac{5i \pm 3i}{4}$: z = 2i (outside) and z = i/2 (inside).

3. **Residue at i/2** of $\dfrac{-1}{2(z - 2i)(z - i/2)}$: $\dfrac{-1}{2(i/2 - 2i)} = \dfrac{-1}{-3i} = \dfrac{1}{3i}$.

4. **Result:** $I = 2\pi i\cdot\dfrac{1}{3i} = \dfrac{2\pi}{3}$ ✓ (also from the general formula $2\pi/\sqrt{25 - 16}$).`,
        answer: String.raw`z = e^{iθ} ⇒ I = ∮ −dz/(2z² − 5iz − 2); poles i/2 (inside), 2i; Res = 1/(3i) ⇒ I = 2π/3.` },
      { id: "practice-residues-P12b", label: "(b)", marks: "", topic: "residues",
        sub: "∫₀^{2π} dθ/(5 + 3 sin θ) = π/2", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Contour Integration" (MATH 327), Home Work (iii) (poles −i/3, −3i)`,
        text: String.raw`(iii) Show that $\displaystyle\int_0^{2\pi}\frac{d\theta}{5 + 3\sin\theta} = \frac{\pi}{2}$.`,
        solution: String.raw`1. **Substitute** as before; multiplying by 2iz, $2iz\cdot5 + 3(z^2 - 1) = 3z^2 + 10iz - 3$, so
$$I = \oint_{|z|=1}\frac{2\,dz}{3z^2 + 10iz - 3}$$

![Unit circle: −i/3 inside, −3i outside](fig/practice-residues-P12b-sketch.svg)

2. **Poles:** $z = \dfrac{-10i \pm\sqrt{-100 + 36}}{6} = \dfrac{-10i \pm 8i}{6}$: z = −i/3 (inside) and z = −3i (outside), as stated in the notes.

3. **Residue at −i/3:** $\dfrac{2}{3(z + 3i)}\Big|_{-i/3} = \dfrac{2}{3(8i/3)} = \dfrac{1}{4i}$.

4. **Result:** $I = 2\pi i\cdot\dfrac{1}{4i} = \dfrac{\pi}{2}$ ✓ (general formula: $2\pi/\sqrt{25 - 9} = \pi/2$).`,
        answer: String.raw`I = ∮2dz/(3z² + 10iz − 3); poles −i/3 (inside), −3i; Res = 1/(4i) ⇒ I = π/2.` } ] },
    { id: "practice-residues-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P13", label: "", marks: "", topic: "residues",
        sub: "∫₀^∞ sin mx/x dx = π/2 with an indented semicircular contour", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Contour Integration" (MATH 327), Type III Problem 01 (indented contour)`,
        text: String.raw`By contour integration prove that $\displaystyle\int_0^\infty\frac{\sin mx}{x}dx = \frac\pi2$, m > 0.`,
        solution: String.raw`**Contour:** $f(z) = e^{imz}/z$ has a simple pole at z = 0 **on** the real axis. Indent around it with a small semicircle γ of radius r above the origin; close with the large semicircle Γ.

![Indented contour: large semicircle C_R (= Γ), the real axis and the small clockwise semicircle γ_r about the origin](fig/practice-residues-P13-sketch.svg)

1. **No poles inside** the indented contour, so by Cauchy's theorem
$$\int_{-R}^{-r}\frac{e^{imx}}{x}dx + \int_\gamma f\,dz + \int_r^R\frac{e^{imx}}{x}dx + \int_\Gamma f\,dz = 0$$

2. **Large arc:** 1/z → 0 and m > 0, so $\int_\Gamma \to 0$ by Jordan's lemma.

3. **Small arc** (clockwise, angle π): near 0, $f = 1/z + (\text{analytic})$, so $\int_\gamma f\,dz \to -\pi i\,\mathrm{Res}_{z=0}f = -\pi i$. (Directly: $z = re^{i\theta}$, θ from π to 0, $\int_\pi^0 \frac{e^{imre^{i\theta}}}{re^{i\theta}}ire^{i\theta}d\theta \to i\int_\pi^0 d\theta = -\pi i$.)

4. **Combine** (R → ∞, r → 0): the two real pieces give the principal value
$$\mathrm{P.V.}\int_{-\infty}^{\infty}\frac{e^{imx}}{x}dx = \pi i$$
   Combining $x$ and $-x$: $\int_r^R\frac{e^{imx} - e^{-imx}}{x}dx = 2i\int_r^R\frac{\sin mx}{x}dx$, so
$$2i\int_0^\infty\frac{\sin mx}{x}dx = \pi i \;\Rightarrow\; \int_0^\infty\frac{\sin mx}{x}dx = \frac{\pi}{2}$$
   (independent of m > 0; numerical check with m = 2.3: 1.570796 ✓).`,
        answer: String.raw`f = e^{imz}/z, indented at 0: ∫_Γ → 0 (Jordan), ∫_γ → −πi·Res(0) = −πi, no poles inside ⇒ P.V.∫e^{imx}/x dx = πi ⇒ 2i∫₀^∞ sin mx/x dx = πi ⇒ π/2.` } ] },
    { id: "practice-residues-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P14", label: "", marks: "", topic: "residues",
        sub: "P.V. ∫₀^∞ cos x/(a² − x²) dx = π sin a/(2a): two poles on the real axis", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Contour Integration" (MATH 327), Type III Home Work 2`,
        text: String.raw`Evaluate (principal value) $\displaystyle\int_0^\infty\frac{\cos x}{a^2 - x^2}dx$, a > 0.`,
        solution: String.raw`**Contour:** $f(z) = \dfrac{e^{iz}}{a^2 - z^2}$ has simple poles at z = ±a on the real axis. Indent above both with small semicircles γ₁ (about −a) and γ₂ (about a); close with the upper semicircle Γ. There are no poles inside.

1. **Cauchy's theorem:** (real pieces) + $\int_{\gamma_1} + \int_{\gamma_2} + \int_\Gamma = 0$.

![Indent above both real-axis poles ±a; close with C_R](fig/practice-residues-P14-sketch.svg)

2. **Large arc → 0** by Jordan's lemma ($1/(a^2 - z^2) \to 0$).

3. **Small arcs** (clockwise half-circles): each tends to $-\pi i\times$(residue).
$$\mathrm{Res}_{z=a} = \frac{e^{iz}}{-2z}\Big|_a = -\frac{e^{ia}}{2a}, \qquad \mathrm{Res}_{z=-a} = \frac{e^{iz}}{-2z}\Big|_{-a} = \frac{e^{-ia}}{2a}$$
   Sum $= \dfrac{e^{-ia} - e^{ia}}{2a} = -\dfrac{i\sin a}{a}$.

4. **Principal value:**
$$\mathrm{P.V.}\int_{-\infty}^{\infty}\frac{e^{ix}}{a^2 - x^2}dx = \pi i\left(-\frac{i\sin a}{a}\right) = \frac{\pi\sin a}{a}$$
   Real part, and evenness of the cosine integrand:
$$\mathrm{P.V.}\int_0^\infty\frac{\cos x}{a^2 - x^2}dx = \frac{\pi\sin a}{2a}$$

5. **Numerical check** (a = 1.3; principal value computed by subtracting cos a near x = a, since P.V.$\int_0^\infty dx/(a^2 - x^2) = 0$): 1.164272 = π sin 1.3/2.6 ✓.`,
        answer: String.raw`f = e^{iz}/(a² − z²), indent above ±a: P.V.∫e^{ix}/(a² − x²) = πi[Res(a) + Res(−a)] = πi(−i sin a/a) = π sin a/a ⇒ P.V.∫₀^∞ cos x/(a² − x²)dx = π sin a/(2a).` } ] },
    { id: "practice-residues-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P15", label: "", marks: "", topic: "residues",
        sub: "∫₀^∞ dx/(x² + 1)² = π/4", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 72, Exercise 2 (Ans. π/4)`,
        text: String.raw`Use residues to evaluate the improper integral $\displaystyle\int_0^\infty\frac{dx}{(x^2 + 1)^2}$.`,
        solution: String.raw`1. **Even integrand:** $I = \frac12\int_{-\infty}^\infty$. Take $f(z) = 1/(z^2 + 1)^2$ on the upper semicircle; the arc integral is at most $\pi R/(R^2 - 1)^2 \to 0$.

![Upper semicircle enclosing the double pole i](fig/practice-residues-P15-sketch.svg)

2. **Double pole at z = i:**
$$\mathrm{Res}_i = \frac{d}{dz}\frac{1}{(z + i)^2}\Big|_i = \frac{-2}{(2i)^3} = \frac{-2}{-8i} = \frac{1}{4i}$$

3. **Result:** $\int_{-\infty}^\infty = 2\pi i\cdot\dfrac{1}{4i} = \dfrac\pi2$, so $I = \dfrac\pi4$, as in the book ✓.`,
        answer: String.raw`Res at i of 1/(z² + 1)² = −2/(2i)³ = 1/(4i) ⇒ ∫_{−∞}^{∞} = π/2 ⇒ π/4.` } ] },
    { id: "practice-residues-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P16", label: "", marks: "", topic: "residues",
        sub: "P.V. ∫ x dx/((x² + 1)(x² + 2x + 2)) = −π/5", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 72, Exercise 7 (Ans. −π/5)`,
        text: String.raw`Use residues to find the Cauchy principal value of $\displaystyle\int_{-\infty}^\infty\frac{x\,dx}{(x^2 + 1)(x^2 + 2x + 2)}$.`,
        solution: String.raw`1. **Poles of** $f(z) = \dfrac{z}{(z^2 + 1)(z^2 + 2z + 2)}$: z = ±i and z = −1 ± i. In the upper half-plane: **i** and **−1 + i**. f ~ 1/z³, so the arc integral → 0.

![Upper semicircle enclosing i and −1 + i](fig/practice-residues-P16-sketch.svg)

2. **Residue at i:**
$$\frac{z}{2z(z^2 + 2z + 2)}\Big|_i = \frac{1}{2(i^2 + 2i + 2)} = \frac{1}{2(1 + 2i)} = \frac{1 - 2i}{10}$$

3. **Residue at −1 + i** (simple root of $z^2 + 2z + 2$, derivative 2z + 2 = 2i):
$$\frac{z}{(z^2 + 1)(2z + 2)}\Big|_{-1+i} = \frac{-1 + i}{(1 - 2i)(2i)} = \frac{-1 + i}{4 + 2i} = \frac{(-1 + i)(4 - 2i)}{20} = \frac{-1 + 3i}{10}$$
   (using $(-1 + i)^2 = -2i$, so $z^2 + 1 = 1 - 2i$).

4. **Sum:** $\dfrac{1 - 2i - 1 + 3i}{10} = \dfrac{i}{10}$, so
$$\mathrm{P.V.}\int_{-\infty}^\infty\frac{x\,dx}{(x^2 + 1)(x^2 + 2x + 2)} = 2\pi i\cdot\frac{i}{10} = -\frac{\pi}{5}$$
   as in the book; quadrature gives −0.628319 ✓.`,
        answer: String.raw`Upper poles i (Res (1 − 2i)/10) and −1 + i (Res (−1 + 3i)/10); sum i/10 ⇒ P.V. = 2πi(i/10) = −π/5.` } ] },
    { id: "practice-residues-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P17", label: "", marks: "", topic: "residues",
        sub: "∫₀^∞ dx/(x³ + 1) = 2π/(3√3) using the wedge 0 ≤ arg z ≤ 2π/3", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 72, Exercise 8 (contour of Fig. 92, R > 1)`,
        text: String.raw`Use residues and the contour shown in Fig. 92 (the boundary of the sector 0 ≤ arg z ≤ 2π/3, |z| ≤ R, R > 1) to establish the integration formula
$$\int_0^\infty\frac{dx}{x^3 + 1} = \frac{2\pi}{3\sqrt3}$$`,
        solution: String.raw`**Why a wedge:** the integrand is not even, so a semicircle cannot be used. On the ray arg z = 2π/3, $z^3$ is again real, so the integral along that ray is a multiple of the wanted integral.

![Wedge contour 0 ≤ arg z ≤ 2π/3 with the pole e^(iπ/3) inside](fig/practice-residues-P17-sketch.svg)

1. **Poles of** $1/(z^3 + 1)$: $z = e^{i\pi/3}, -1, e^{-i\pi/3}$. Only $z_0 = e^{i\pi/3}$ lies inside the wedge.

2. **Residue:** $\dfrac{1}{3z^2}\Big|_{z_0} = \dfrac{e^{-2i\pi/3}}{3}$.

3. **The three pieces:**
   - segment [0, R]: $\int_0^R\frac{dx}{x^3 + 1} \to I$;
   - arc $C_R$: $|\int| \le \frac{(2\pi/3)R}{R^3 - 1} \to 0$;
   - ray from $Re^{2\pi i/3}$ to 0: put $z = re^{2\pi i/3}$, $z^3 = r^3$, $dz = e^{2\pi i/3}dr$: $\int_R^0\frac{e^{2\pi i/3}dr}{r^3 + 1} \to -e^{2\pi i/3}I$.

4. **Residue theorem:**
$$(1 - e^{2\pi i/3})I = 2\pi i\cdot\frac{e^{-2\pi i/3}}{3}$$
   Now $1 - e^{2\pi i/3} = \frac32 - \frac{\sqrt3}{2}i = \sqrt3e^{-i\pi/6}$ and $2\pi ie^{-2\pi i/3}/3 = \frac{2\pi}{3}e^{i\pi/2 - 2i\pi/3} = \frac{2\pi}{3}e^{-i\pi/6}$. Hence
$$I = \frac{2\pi/3}{\sqrt3} = \frac{2\pi}{3\sqrt3} \approx 1.2092$$
   which matches quadrature ✓.`,
        answer: String.raw`Only e^{iπ/3} is inside the wedge; Res = e^{−2iπ/3}/3; ray integral = −e^{2πi/3}I, arc → 0 ⇒ (1 − e^{2πi/3})I = 2πie^{−2πi/3}/3 ⇒ I = 2π/(3√3).` } ] },
    { id: "practice-residues-P18", q: 18, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P18", label: "", marks: "", topic: "residues",
        sub: "∫ cos x/((x² + a²)(x² + b²)) dx over the real line (a > b > 0)", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 74, Exercise 1 (Ans. π/(a² − b²)·(e^{−b}/b − e^{−a}/a))`,
        text: String.raw`Use residues to evaluate $\displaystyle\int_{-\infty}^\infty\frac{\cos x\,dx}{(x^2 + a^2)(x^2 + b^2)}$ (a > b > 0).`,
        solution: String.raw`1. **Complex form:** the integral is $\mathrm{Re}\int_{-\infty}^\infty f(x)\,dx$ with $f(z) = \dfrac{e^{iz}}{(z^2 + a^2)(z^2 + b^2)}$; the arc integral → 0 (|e^{iz}| ≤ 1 in the upper half-plane and the rational factor decays like 1/R⁴).

![Upper semicircle (Jordan arc) enclosing ib and ia](fig/practice-residues-P18-sketch.svg)

2. **Upper poles:** ia and ib (simple, since a ≠ b).
$$\mathrm{Res}_{ia} = \frac{e^{-a}}{2ia(b^2 - a^2)}, \qquad \mathrm{Res}_{ib} = \frac{e^{-b}}{2ib(a^2 - b^2)}$$

3. **Sum × 2πi:**
$$2\pi i\left[\frac{e^{-b}}{2ib(a^2 - b^2)} - \frac{e^{-a}}{2ia(a^2 - b^2)}\right] = \frac{\pi}{a^2 - b^2}\left(\frac{e^{-b}}{b} - \frac{e^{-a}}{a}\right)$$
   This is real, so it is the required integral (the sine part vanishes by oddness). It agrees with the book. Check (a = 2, b = 1): 0.314381 ✓.

**Result:** $\dfrac{\pi}{a^2 - b^2}\left(\dfrac{e^{-b}}{b} - \dfrac{e^{-a}}{a}\right)$.`,
        answer: String.raw`f = e^{iz}/[(z² + a²)(z² + b²)]; Res(ia) = e^{−a}/(2ia(b² − a²)), Res(ib) = e^{−b}/(2ib(a² − b²)) ⇒ integral = π/(a² − b²)·(e^{−b}/b − e^{−a}/a).` } ] },
    { id: "practice-residues-P19", q: 19, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P19", label: "", marks: "", topic: "residues",
        sub: "∮ tan z dz and ∮ dz/sinh 2z on |z| = 2", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 69, Exercise 4 (Ans. (a) −4πi; (b) −πi)`,
        text: String.raw`Let C denote the positively oriented circle |z| = 2 and evaluate the integral (a) $\displaystyle\oint_C\tan z\,dz$; (b) $\displaystyle\oint_C\frac{dz}{\sinh 2z}$.`,
        solution: String.raw`**Tool (Brown & Churchill Sec. 69, Theorem 2):** if p and q are analytic at $z_0$, $p(z_0) \ne 0$, $q(z_0) = 0$ and $q'(z_0) \ne 0$, then p/q has a simple pole at $z_0$ with residue $p(z_0)/q'(z_0)$.

1. **(a) tan z = sin z/cos z.** Zeros of cos z: $z = \pi/2 + n\pi$ (all real). Inside |z| = 2: ±π/2 (|π/2| = 1.571). Residue: $\dfrac{\sin z}{-\sin z} = -1$ at each.
$$\oint_C\tan z\,dz = 2\pi i(-1 - 1) = -4\pi i$$

![Draw |z| = 2 and mark the poles of tan z and of 1/sinh 2z inside it](fig/practice-residues-P19-sketch.svg)

2. **(b) 1/sinh 2z.** Zeros: $2z = n\pi i$, i.e. $z = n\pi i/2$. Inside |z| = 2: z = 0 and z = ±πi/2 (|πi/2| = 1.571; ±πi is outside). Residue $\dfrac{1}{2\cosh2z}$:
   - at 0: 1/2;
   - at ±πi/2: $\cosh(\pm\pi i) = \cos\pi = -1$, so −1/2 each.
$$\oint_C\frac{dz}{\sinh2z} = 2\pi i\left(\frac12 - \frac12 - \frac12\right) = -\pi i$$

**Result:** (a) −4πi; (b) −πi, as in the book.`,
        answer: String.raw`(a) poles ±π/2 inside, Res = sin z/(cos z)′ = −1 each ⇒ −4πi. (b) poles 0, ±πi/2 inside, Res = 1/(2cosh 2z) = ½, −½, −½ ⇒ −πi.` } ] },
    { id: "practice-residues-P20", q: 20, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P20", label: "", marks: "", topic: "residues",
        sub: "∫ cos x/(x² + 2x + 2) dx over the real line = (π/e) cos 1", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (Fourier-type integral with a shifted quadratic)`,
        text: String.raw`Using contour integration, evaluate $\displaystyle\int_{-\infty}^\infty\frac{\cos x\,dx}{x^2 + 2x + 2}$ and $\displaystyle\int_{-\infty}^\infty\frac{\sin x\,dx}{x^2 + 2x + 2}$.`,
        solution: String.raw`1. **Function:** $f(z) = \dfrac{e^{iz}}{z^2 + 2z + 2}$; poles $z = -1 \pm i$. Only $z_0 = -1 + i$ is in the upper half-plane.

2. **Arc → 0** (Jordan's lemma, or $|e^{iz}| \le 1$ with a 1/R² factor):

![Upper semicircle C_R (Jordan arc) enclosing the pole −1 + i](fig/practice-residues-P20-sketch.svg)

3. **Residue:**
$$\mathrm{Res}_{z_0} = \frac{e^{iz}}{2z + 2}\Big|_{-1+i} = \frac{e^{i(-1+i)}}{2i} = \frac{e^{-1}e^{-i}}{2i}$$

4. **Integral:**
$$\int_{-\infty}^\infty\frac{e^{ix}}{x^2 + 2x + 2}dx = 2\pi i\cdot\frac{e^{-1}e^{-i}}{2i} = \frac{\pi}{e}(\cos1 - i\sin1)$$

5. **Real and imaginary parts:**
$$\int_{-\infty}^\infty\frac{\cos x}{x^2 + 2x + 2}dx = \frac{\pi}{e}\cos1 \approx 0.6244, \qquad \int_{-\infty}^\infty\frac{\sin x}{x^2 + 2x + 2}dx = -\frac{\pi}{e}\sin1 \approx -0.9725$$
   (The sine integral is not zero because the integrand is not odd: the denominator is not even.) Numerical check: 0.624442 ✓.`,
        answer: String.raw`f = e^{iz}/(z² + 2z + 2), upper pole −1 + i, Res = e^{−1}e^{−i}/(2i) ⇒ ∫e^{ix}/… = (π/e)(cos 1 − i sin 1) ⇒ cos-integral (π/e)cos 1 ≈ 0.624, sin-integral −(π/e)sin 1.` } ] },
    { id: "practice-residues-P21", q: 21, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P21", label: "", marks: "", topic: "residues",
        sub: "Classify the singularity at 0 and find the residue: sin z/z, (1 − cos z)/z⁴, z e^{1/z}", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (types of isolated singularities, residues from Laurent series)`,
        text: String.raw`For each function, classify the singularity at z = 0 (removable, pole of order m, essential), find the residue there, and evaluate $\oint_{|z|=1}f(z)\,dz$:

(i) $\dfrac{\sin z}{z}$; (ii) $\dfrac{1 - \cos z}{z^4}$; (iii) $z\,e^{1/z}$.`,
        solution: String.raw`**Rule:** in the Laurent series about 0, no negative powers means removable; finitely many (lowest $z^{-m}$) means a pole of order m; infinitely many means essential. The residue is the coefficient of $z^{-1}$.

1. **(i)** $\dfrac{\sin z}{z} = 1 - \dfrac{z^2}{3!} + \dfrac{z^4}{5!} - \cdots$: no negative powers, so **removable** (define f(0) = 1). Residue 0, and $\oint = 0$.

![Unit circle around the singularity z = 0](fig/practice-residues-P21-sketch.svg)

2. **(ii)** $\dfrac{1 - \cos z}{z^4} = \dfrac{1}{z^4}\left(\dfrac{z^2}{2} - \dfrac{z^4}{24} + \dfrac{z^6}{720} - \cdots\right) = \dfrac{1}{2z^2} - \dfrac{1}{24} + \dfrac{z^2}{720} - \cdots$: lowest power $z^{-2}$, so a **pole of order 2** (not 4, because the numerator has a double zero). There is no $z^{-1}$ term: residue **0**, and $\oint = 0$.

3. **(iii)** $ze^{1/z} = z\left(1 + \dfrac1z + \dfrac{1}{2!z^2} + \dfrac{1}{3!z^3} + \cdots\right) = z + 1 + \dfrac{1}{2z} + \dfrac{1}{6z^2} + \cdots$: infinitely many negative powers, so an **essential singularity**. Residue **1/2**, and
$$\oint_{|z|=1}ze^{1/z}\,dz = 2\pi i\cdot\frac12 = \pi i$$
   The pole formula cannot be used at an essential singularity; the Laurent series is the only route.`,
        answer: String.raw`(i) removable, Res 0, ∮ = 0; (ii) (1 − cos z)/z⁴ = 1/(2z²) − 1/24 + …: pole of order 2, Res 0; (iii) z e^{1/z} = z + 1 + 1/(2z) + …: essential, Res ½, ∮ = πi.` } ] },
    { id: "practice-residues-P22", q: 22, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-residues-P22", label: "", marks: "", topic: "residues",
        sub: "∫ dx/(x⁶ + 1) over the real line = 2π/3", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (rational integral with several poles in the upper half-plane; cf. 2023-24 Q5b, which had x² in the numerator)`,
        text: String.raw`Evaluate $\displaystyle\int_{-\infty}^\infty\frac{dx}{x^6 + 1}$ by contour integration.`,
        solution: String.raw`1. **Poles:** $z^6 = -1 = e^{i\pi}$ gives $z_k = e^{i(\pi + 2k\pi)/6}$. In the upper half-plane: $e^{i\pi/6}$, $e^{i\pi/2} = i$, $e^{5i\pi/6}$. The arc integral → 0 (degree difference 6).

![Upper semicircle enclosing the three upper roots of z⁶ = −1](fig/practice-residues-P22-sketch.svg)

2. **Residues at simple poles:** $\dfrac{1}{6z^5} = \dfrac{z}{6z^6} = -\dfrac{z}{6}$ (since $z^6 = -1$).

3. **Sum:**
$$-\frac16\left(e^{i\pi/6} + i + e^{5i\pi/6}\right) = -\frac16\left[\left(\tfrac{\sqrt3}{2} + \tfrac i2\right) + i + \left(-\tfrac{\sqrt3}{2} + \tfrac i2\right)\right] = -\frac{2i}{6} = -\frac{i}{3}$$

4. **Result:**
$$\int_{-\infty}^\infty\frac{dx}{x^6 + 1} = 2\pi i\left(-\frac i3\right) = \frac{2\pi}{3} \approx 2.0944$$
   Check: the general formula $\int_0^\infty dx/(x^{2n} + 1) = \frac{\pi}{2n}\csc\frac{\pi}{2n}$ (Brown & Churchill Sec. 72, Ex. 9 with m = 0) gives $\frac{\pi}{6}\csc\frac{\pi}{6} = \frac\pi3$ for (0, ∞) ✓.`,
        answer: String.raw`Upper poles e^{iπ/6}, i, e^{5iπ/6}; Res = 1/(6z⁵) = −z/6; sum −i/3 ⇒ integral = 2π/3.` } ] }
  ]
});
