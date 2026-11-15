QB.paper({ year: "Practice", set: "Taylor and Laurent series; singularities", date: "", marks: 0, practice: true,
  rules: String.raw`Taylor and Laurent series and isolated singular points (Brown & Churchill ch. 5–6; lecture notes "Problem based on Laurent's series and Taylor's series"). Includes:
- every worked problem in the notes not already set in a past paper (Problems 01–06);
- selected Brown & Churchill exercises (Secs. 54, 56, 65);
- new exam-style problems.

The notes' homework 1, 1/(z(z² − 3z + 2)), is 2021-22 Q3(b); homework 3, 1/((z − 1)(z − 2)) in 1 < |z| < 2, is essentially 2016-17 Q3(b). Neither is repeated. Every solution starts from a sketch of the region of validity with the singularities marked. Draw it first in the exam.`,
  questions: [
    { id: "practice-series-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P1", label: "", marks: "", topic: "series",
        sub: "(z − 1)/z² about z = 1: Laurent series for |z − 1| > 1 and Taylor series for |z − 1| < 1", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Laurent's and Taylor's series", Problem 01`,
        text: String.raw`Expand $f(z) = \dfrac{z - 1}{z^2}$ in (a) a Laurent series for the domain $|z - 1| > 1$; (b) a Taylor series in powers of $z - 1$.`,
        solution: String.raw`1. **Singularity and regions.** The only singularity is the double pole z = 0, which lies at distance 1 from the centre z = 1. So the circle $|z - 1| = 1$ separates the two regions.

![Draw the circle |z − 1| = 1 through the pole z = 0; shade the exterior for (a) and the disc for (b)](fig/practice-series-P1-sketch.svg)

2. **Substitute** $w = z - 1$, so $z = 1 + w$ and
$$f = \frac{w}{(1 + w)^2}$$

3. **(a) $|w| > 1$:** factor out $w^2$ so that $|1/w| < 1$:
$$f = \frac{w}{w^2(1 + 1/w)^2} = \frac1w\left(1 + \frac1w\right)^{-2} = \frac1w\sum_{n=0}^\infty(-1)^n(n + 1)w^{-n}$$
$$f(z) = \frac{1}{z - 1} - \frac{2}{(z - 1)^2} + \frac{3}{(z - 1)^3} - \cdots = \sum_{n=1}^\infty\frac{(-1)^{n+1}\,n}{(z - 1)^n}, \qquad |z - 1| > 1$$

4. **(b) $|w| < 1$:** $(1 + w)^{-2} = \sum(-1)^n(n + 1)w^n$, so
$$f(z) = (z - 1) - 2(z - 1)^2 + 3(z - 1)^3 - \cdots = \sum_{n=1}^\infty(-1)^{n+1}\,n\,(z - 1)^n, \qquad |z - 1| < 1$$

5. **Check:** at $z = 1 + 2.5e^{0.7i}$ the partial sums of (a) agree with $f(z)$ to 10⁻⁸, and at $z = 1 + 0.5e^{2i}$ those of (b) do too.`,
        answer: String.raw`(a) Σ_{n≥1} (−1)^{n+1} n/(z − 1)^n = 1/(z − 1) − 2/(z − 1)² + 3/(z − 1)³ − … (|z − 1| > 1); (b) Σ_{n≥1} (−1)^{n+1} n (z − 1)^n = (z − 1) − 2(z − 1)² + 3(z − 1)³ − … (|z − 1| < 1).` } ] },
    { id: "practice-series-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P2", label: "", marks: "", topic: "series",
        sub: "(2z³ + 1)/(z² + z): Taylor series about z = i and Laurent series in 0 < |z| < 1", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Laurent's and Taylor's series", Problem 02`,
        text: String.raw`For the function $f(z) = \dfrac{2z^3 + 1}{z^2 + z}$ find (i) the Taylor series valid in the neighbourhood of the point $i$; (ii) the Laurent series valid within the annulus whose centre is the origin.`,
        solution: String.raw`1. **Divide and split.** $2z^3 + 1 = (z^2 + z)(2z - 2) + (2z + 1)$, and $\dfrac{2z + 1}{z(z + 1)} = \dfrac1z + \dfrac{1}{z + 1}$, so
$$f(z) = 2(z - 1) + \frac1z + \frac{1}{z + 1}$$
   The singularities are z = 0 and z = −1.

![Panel (i): the disc about i of radius 1 reaching to z = 0; panel (ii): the punctured disc 0 < |z| < 1 with −1 on its edge](fig/practice-series-P2-sketch.svg)

2. **(i) Radius about i.** The distances are |i − 0| = 1 and |i + 1| = √2, so the Taylor series converges for $|z - i| < 1$.

3. **(i) Expand each term in powers of $z - i$:**
$$\frac1z = \frac{1}{i + (z - i)} = \sum_{n=0}^\infty\frac{(-1)^n(z - i)^n}{i^{n+1}}, \qquad \frac{1}{z + 1} = \frac{1}{(1 + i) + (z - i)} = \sum_{n=0}^\infty\frac{(-1)^n(z - i)^n}{(1 + i)^{n+1}}$$
   and $2(z - 1) = 2(i - 1) + 2(z - i)$. So
$$f(z) = 2(i - 1) + 2(z - i) + \sum_{n=0}^\infty(-1)^n\left[\frac{1}{i^{n+1}} + \frac{1}{(1 + i)^{n+1}}\right](z - i)^n, \qquad |z - i| < 1$$

4. **(ii) Annulus about 0.** f is analytic in $0 < |z| < 1$, and z = −1 lies on the outer circle. Expand $\dfrac{1}{1 + z} = \sum(-1)^n z^n$ for $|z| < 1$:
$$f(z) = 2z - 2 + \frac1z + 1 - z + z^2 - z^3 + \cdots = \frac1z - 1 + z + \sum_{n=2}^\infty(-1)^n z^n, \qquad 0 < |z| < 1$$

5. **Check:** both series match f numerically at sample points in their regions, to 10⁻⁸.`,
        answer: String.raw`f = 2(z − 1) + 1/z + 1/(z + 1). (i) f = 2(i − 1) + 2(z − i) + Σ (−1)ⁿ[i^{−(n+1)} + (1 + i)^{−(n+1)}](z − i)ⁿ, |z − i| < 1; (ii) f = 1/z − 1 + z + Σ_{n≥2} (−1)ⁿ zⁿ, 0 < |z| < 1.` } ] },
    { id: "practice-series-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P3", label: "", marks: "", topic: "series",
        sub: "(z² − 1)/((z + 2)(z + 3)) in |z| < 2, 2 < |z| < 3 and |z| > 3", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Laurent's and Taylor's series", Problem 03`,
        text: String.raw`Obtain the Taylor or Laurent series which represents the function $f(z) = \dfrac{z^2 - 1}{(z + 2)(z + 3)}$ valid in the regions (i) $|z| < 2$; (ii) $2 < |z| < 3$; (iii) $|z| > 3$.`,
        solution: String.raw`1. **Partial fractions.** Long division gives $f = 1 + \dfrac{-5z - 7}{(z + 2)(z + 3)}$. Then
$$\frac{-5z - 7}{(z + 2)(z + 3)} = \frac{A}{z + 2} + \frac{B}{z + 3}, \qquad A = \frac{10 - 7}{1} = 3, \qquad B = \frac{15 - 7}{-1} = -8$$
$$f(z) = 1 + \frac{3}{z + 2} - \frac{8}{z + 3}$$

![Draw the circles |z| = 2 and |z| = 3 through the poles −2 and −3, and shade each region in turn](fig/practice-series-P3-sketch.svg)

2. **Two expansions for each fraction:**
$$|z| < 2: \quad \frac{3}{z + 2} = \frac32\left(1 + \frac z2\right)^{-1} = \sum(-1)^n\frac{3z^n}{2^{n+1}}$$
$$|z| > 2: \quad \frac{3}{z + 2} = \frac3z\left(1 + \frac2z\right)^{-1} = \sum(-1)^n\frac{3\cdot2^n}{z^{n+1}}$$
   Similarly for $\dfrac{8}{z + 3}$, with 3 in place of 2.

3. **(i) $|z| < 2$** (Taylor):
$$f(z) = 1 + \sum_{n=0}^\infty(-1)^n\left[\frac{3}{2^{n+1}} - \frac{8}{3^{n+1}}\right]z^n$$
   The constant term is $1 + \tfrac32 - \tfrac83 = -\tfrac16 = f(0)$ ✓.

4. **(ii) $2 < |z| < 3$** (Laurent):
$$f(z) = 1 + \sum_{n=0}^\infty\frac{(-1)^n\,3\cdot2^n}{z^{n+1}} - \sum_{n=0}^\infty\frac{(-1)^n\,8z^n}{3^{n+1}}$$

5. **(iii) $|z| > 3$** (Laurent, negative powers only):
$$f(z) = 1 + \sum_{n=0}^\infty\frac{(-1)^n(3\cdot2^n - 8\cdot3^n)}{z^{n+1}} = 1 - \frac5z + \frac{18}{z^2} - \cdots$$

6. **Check:** numerical partial sums agree with f at $|z| = 1.5$, 2.5 and 4.`,
        answer: String.raw`f = 1 + 3/(z + 2) − 8/(z + 3). (i) 1 + Σ (−1)ⁿ[3/2^{n+1} − 8/3^{n+1}]zⁿ; (ii) 1 + Σ (−1)ⁿ 3·2ⁿ/z^{n+1} − Σ (−1)ⁿ 8zⁿ/3^{n+1}; (iii) 1 + Σ (−1)ⁿ(3·2ⁿ − 8·3ⁿ)/z^{n+1}.` } ] },
    { id: "practice-series-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P4", label: "", marks: "", topic: "series",
        sub: "z/((z − 1)(2 − z)) about z = 2: Laurent series in |z − 2| > 1 and in 0 < |z − 2| < 1", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Laurent's and Taylor's series", Problem 04`,
        text: String.raw`Expand $f(z) = \dfrac{z}{(z - 1)(2 - z)}$ in (i) $|z - 2| > 1$; (ii) $0 < |z - 2| < 1$.`,
        solution: String.raw`1. **Partial fractions:** $z = A(2 - z) + B(z - 1)$. Putting z = 1 gives A = 1, and z = 2 gives B = 2, so
$$f(z) = \frac{1}{z - 1} + \frac{2}{2 - z}$$
   Both regions are centred at z = 2, so put $w = z - 2$. Then $\dfrac{2}{2 - z} = -\dfrac2w$, which is already a power of w, and $\dfrac{1}{z - 1} = \dfrac{1}{1 + w}$.

![Both regions are centred at 2; the other singularity z = 1 lies on the circle |z − 2| = 1](fig/practice-series-P4-sketch.svg)

2. **(i) $|w| > 1$:**
$$\frac{1}{1 + w} = \frac1w\left(1 + \frac1w\right)^{-1} = \sum_{n=0}^\infty\frac{(-1)^n}{w^{n+1}}$$
   so
$$f(z) = -\frac{2}{z - 2} + \frac{1}{z - 2} - \frac{1}{(z - 2)^2} + \frac{1}{(z - 2)^3} - \cdots = -\frac{1}{z - 2} + \sum_{n=1}^\infty\frac{(-1)^n}{(z - 2)^{n+1}}$$
   That is,
$$f = -\frac{1}{z - 2} - \frac{1}{(z - 2)^2} + \frac{1}{(z - 2)^3} - \cdots$$

3. **(ii) $|w| < 1$:** $\dfrac{1}{1 + w} = \sum(-1)^n w^n$, so
$$f(z) = -\frac{2}{z - 2} + 1 - (z - 2) + (z - 2)^2 - (z - 2)^3 + \cdots, \qquad 0 < |z - 2| < 1$$
   The principal part is $-2/(z - 2)$, so z = 2 is a simple pole with residue −2.

4. **Note on the notes.**
   - For (i) the notes expand in powers of $1/(z - 1)$, using $|1/(z - 1)| < 1$. That series is valid in $|z - 1| > 1$, not in the stated domain $|z - 2| > 1$. Done consistently, it reads $-\frac{1}{z-1} - \frac{2}{(z-1)^2} - \cdots$.
   - In (ii) the term written $(z - 3)^3$ should be $(z - 2)^3$.

5. **Check:** both results match f numerically, and sympy's expansion about 2 gives $-2/(z - 2) + 1 - (z - 2) + \cdots$ ✓.`,
        answer: String.raw`f = 1/(z − 1) + 2/(2 − z). (i) |z − 2| > 1: −1/(z − 2) + Σ_{n≥1} (−1)ⁿ/(z − 2)^{n+1} = −1/(z − 2) − 1/(z − 2)² + 1/(z − 2)³ − …; (ii) 0 < |z − 2| < 1: −2/(z − 2) + Σ (−1)ⁿ(z − 2)ⁿ.` } ] },
    { id: "practice-series-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P5", label: "", marks: "", topic: "series",
        sub: "Maclaurin series of z/(z⁴ + 9) and its disc of convergence |z| < √3", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Laurent's and Taylor's series", Problem 05 (also Brown & Churchill, 7th ed., Sec. 54, Exercise 3)`,
        text: String.raw`Expand $f(z) = \dfrac{z}{z^4 + 9}$ in a Maclaurin series and find its region of convergence.`,
        solution: String.raw`1. **Geometric series:**
$$f(z) = \frac{z}{9}\cdot\frac{1}{1 + z^4/9} = \frac z9\sum_{n=0}^\infty(-1)^n\left(\frac{z^4}{9}\right)^n = \sum_{n=0}^\infty\frac{(-1)^n z^{4n+1}}{9^{n+1}} = \sum_{n=0}^\infty\frac{(-1)^n z^{4n+1}}{3^{2n+2}}$$

2. **Region:** the series converges when $|z^4/9| < 1$, i.e. $|z|^4 < 9$, i.e. $|z| < \sqrt3$.

3. **Why √3.** The singularities are the roots of $z^4 = -9$:
$$z = \sqrt3\,e^{i(\pi/4 + k\pi/2)}, \quad k = 0, 1, 2, 3$$
   all on the circle $|z| = \sqrt3$. The Maclaurin series converges in the largest disc about 0 that contains no singularity.

![Disc |z| < √3 with the four poles of z/(z⁴ + 9) on its boundary](fig/practice-series-P5-sketch.svg)

**Result:** $\displaystyle\sum_{n\ge0}\frac{(-1)^n z^{4n+1}}{9^{n+1}}$ for $|z| < \sqrt3$. This matches B&C's answer, $\sum(-1)^n z^{4n+1}/3^{2n+2}$.`,
        answer: String.raw`z/(z⁴ + 9) = Σ_{n≥0} (−1)ⁿ z^{4n+1}/9^{n+1} = z/9 − z⁵/81 + …, valid for |z| < √3 (poles √3 e^{i(π/4 + kπ/2)} on |z| = √3).` } ] },
    { id: "practice-series-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P6", label: "", marks: "", topic: "series",
        sub: "1/((1 + z²)(z + 2)) in |z| < 1, 1 < |z| < 2 and |z| > 2", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture notes "Laurent's and Taylor's series", Problem 06 (and homework 2)`,
        text: String.raw`Expand $f(z) = \dfrac{1}{(1 + z^2)(z + 2)}$ in (i) $|z| < 1$; (ii) $1 < |z| < 2$; (iii) $|z| > 2$.`,
        solution: String.raw`1. **Partial fractions:**
$$f(z) = \frac15\left[\frac{1}{z + 2} - \frac{z - 2}{1 + z^2}\right]$$
   Check:
$$(1 + z^2) - (z - 2)(z + 2) = 5 \ ✓$$
   The singularities are ±i (on |z| = 1) and −2 (on |z| = 2).

![Draw |z| = 1 through ±i and |z| = 2 through −2; shade the disc, the annulus and the exterior](fig/practice-series-P6-sketch.svg)

2. **Building blocks:**
$$\frac{1}{z + 2} = \begin{cases}\dfrac12\sum(-1)^n\left(\dfrac z2\right)^n & |z| < 2\\[2mm] \sum(-1)^n\dfrac{2^n}{z^{n+1}} & |z| > 2\end{cases} \qquad \frac{1}{1 + z^2} = \begin{cases}\sum(-1)^n z^{2n} & |z| < 1\\[2mm] \sum(-1)^n\dfrac{1}{z^{2n+2}} & |z| > 1\end{cases}$$

3. **(i) $|z| < 1$** (Taylor):
$$f(z) = \frac{1}{10}\sum_{n=0}^\infty(-1)^n\frac{z^n}{2^n} + \frac{2 - z}{5}\sum_{n=0}^\infty(-1)^n z^{2n}$$

4. **(ii) $1 < |z| < 2$:**
$$f(z) = \frac{1}{10}\sum_{n=0}^\infty(-1)^n\frac{z^n}{2^n} - \frac{z - 2}{5}\sum_{n=0}^\infty\frac{(-1)^n}{z^{2n+2}}$$

5. **(iii) $|z| > 2$:**
$$f(z) = \frac15\sum_{n=0}^\infty\frac{(-1)^n 2^n}{z^{n+1}} - \frac{z - 2}{5}\sum_{n=0}^\infty\frac{(-1)^n}{z^{2n+2}} = \frac{1}{z^3} - \frac{2}{z^4} + \frac{3}{z^5} - \cdots$$
   The leading term $1/z^3$ is correct, since $f \sim 1/z^3$ as $z \to \infty$.

6. **Note:** the notes label the third case "(iv)" and write "|z| > 2 > 3" for |z| > 2. The working is unaffected. All three results were checked numerically at |z| = 0.7, 1.5 and 3.`,
        answer: String.raw`f = (1/5)[1/(z + 2) − (z − 2)/(1 + z²)]. (i) (1/10)Σ(−1)ⁿ(z/2)ⁿ + ((2 − z)/5)Σ(−1)ⁿz²ⁿ; (ii) (1/10)Σ(−1)ⁿ(z/2)ⁿ − ((z − 2)/5)Σ(−1)ⁿ/z^{2n+2}; (iii) (1/5)Σ(−1)ⁿ2ⁿ/z^{n+1} − ((z − 2)/5)Σ(−1)ⁿ/z^{2n+2} = 1/z³ − 2/z⁴ + 3/z⁵ − ….` } ] },
    { id: "practice-series-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P7", label: "", marks: "", topic: "series",
        sub: "Taylor series of 1/(1 − z) about z = i, valid for |z − i| < √2", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 54, Exercise 7`,
        text: String.raw`Derive the Taylor series representation
$$\frac{1}{1 - z} = \sum_{n=0}^\infty\frac{(z - i)^n}{(1 - i)^{n+1}} \qquad (|z - i| < \sqrt2)$$
*Suggestion:* start by writing $\dfrac{1}{1 - z} = \dfrac{1}{(1 - i) - (z - i)}$.`,
        solution: String.raw`1. **Rewrite about i:**
$$\frac{1}{1 - z} = \frac{1}{(1 - i) - (z - i)} = \frac{1}{1 - i}\cdot\frac{1}{1 - \dfrac{z - i}{1 - i}}$$

2. **Geometric series**, valid when $\left|\dfrac{z - i}{1 - i}\right| < 1$, i.e. $|z - i| < |1 - i| = \sqrt2$:
$$\frac{1}{1 - z} = \frac{1}{1 - i}\sum_{n=0}^\infty\left(\frac{z - i}{1 - i}\right)^n = \sum_{n=0}^\infty\frac{(z - i)^n}{(1 - i)^{n+1}}$$

3. **Radius.** The only singularity is z = 1, at distance $|1 - i| = \sqrt2$ from the centre i. So √2 is exactly the radius of the largest disc about i in which the function is analytic.

![Disc about i of radius √2; the pole z = 1 lies on its boundary](fig/practice-series-P7-sketch.svg)

4. **Check:** at $z = i + 1.2e^{2i}$ the partial sums equal $1/(1 - z)$ to 10⁻⁸.`,
        answer: String.raw`1/(1 − z) = [1/(1 − i)]·1/(1 − (z − i)/(1 − i)) = Σ (z − i)ⁿ/(1 − i)^{n+1}, valid for |z − i| < |1 − i| = √2 (pole z = 1 on the circle).` } ] },
    { id: "practice-series-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P8", label: "", marks: "", topic: "series",
        sub: "Largest circle for the Maclaurin series of tanh z, and its first two non-zero terms", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 54, Exercise 10`,
        text: String.raw`What is the largest circle within which the Maclaurin series for the function tanh z converges to tanh z? Write the first two non-zero terms of that series.`,
        solution: String.raw`1. **Singularities.** $\tanh z = \sinh z/\cosh z$ is analytic except where $\cosh z = 0$. Since $\cosh z = \cos(iz)$, this happens when $iz = \pi/2 + n\pi$, i.e.
$$z = \left(n + \tfrac12\right)\pi i, \qquad n = 0, \pm1, \pm2, \dots$$

2. **Radius.** The nearest singularities to 0 are $\pm\pi i/2$. tanh z is analytic in $|z| < \pi/2$ but not in any larger disc, so the series converges to tanh z in $|z| < \pi/2$.

![Disc |z| < π/2; the poles of tanh z at ±iπ/2 lie on the circle and ±3iπ/2 lie outside](fig/practice-series-P8-sketch.svg)

3. **Coefficients.** tanh z is odd, so only odd powers appear. With $\tanh' = \mathrm{sech}^2 z$, $\tanh'(0) = 1$; and $\tanh''' = -2\,\mathrm{sech}^2 z\,(1 - 3\tanh^2 z)$, so $\tanh'''(0) = -2$. Hence
$$\tanh z = z + \frac{-2}{3!}z^3 + \cdots = z - \frac{z^3}{3} + \cdots$$
   (Alternatively, divide $z + z^3/6$ by $1 + z^2/2$.)

4. **Check:** sympy gives $z - z^3/3 + 2z^5/15 - \cdots$ ✓.`,
        answer: String.raw`cosh z = 0 at z = (n + ½)πi; nearest to 0 are ±πi/2 ⇒ largest circle |z| = π/2; tanh z = z − z³/3 + … (|z| < π/2).` } ] },
    { id: "practice-series-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P9", label: "", marks: "", topic: "series",
        sub: "Laurent series of z² sin(1/z²) in 0 < |z| < ∞ (an essential singularity at 0)", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 56, Exercise 1`,
        text: String.raw`Find the Laurent series that represents the function $f(z) = z^2\sin\left(\dfrac{1}{z^2}\right)$ in the domain $0 < |z| < \infty$. What type of singular point is z = 0?`,
        solution: String.raw`1. **Start from the sine series**, valid for all w: $\sin w = \sum_{n=0}^\infty\dfrac{(-1)^n w^{2n+1}}{(2n + 1)!}$. Put $w = 1/z^2$, which is allowed for every z ≠ 0:
$$\sin\frac{1}{z^2} = \sum_{n=0}^\infty\frac{(-1)^n}{(2n + 1)!\,z^{4n+2}}$$

2. **Multiply by $z^2$:**
$$z^2\sin\frac{1}{z^2} = \sum_{n=0}^\infty\frac{(-1)^n}{(2n + 1)!\,z^{4n}} = 1 + \sum_{n=1}^\infty\frac{(-1)^n}{(2n + 1)!}\cdot\frac{1}{z^{4n}} = 1 - \frac{1}{6z^4} + \frac{1}{120z^8} - \cdots$$
   valid for $0 < |z| < \infty$.

![Shade the whole plane except z = 0, an essential singularity](fig/practice-series-P9-sketch.svg)

3. **Type of singularity.** The principal part has infinitely many non-zero terms $z^{-4n}$, so z = 0 is an **essential singular point**. The coefficient of $1/z$ is 0, so the residue is 0.

4. **Check:** at $z = 0.9e^{0.4i}$ the series reproduces $z^2\sin(1/z^2)$ to 10⁻⁸.`,
        answer: String.raw`z² sin(1/z²) = 1 + Σ_{n≥1} (−1)ⁿ/((2n + 1)! z^{4n}) = 1 − 1/(6z⁴) + 1/(120z⁸) − … (0 < |z| < ∞); infinitely many negative powers ⇒ essential singularity at 0 (residue 0).` } ] },
    { id: "practice-series-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P10", label: "", marks: "", topic: "series",
        sub: "Two Laurent series of 1/(z²(1 − z)) in powers of z: 0 < |z| < 1 and 1 < |z| < ∞", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 56, Exercise 4`,
        text: String.raw`Give two Laurent series expansions in powers of z for the function $f(z) = \dfrac{1}{z^2(1 - z)}$, and specify the regions in which those expansions are valid.`,
        solution: String.raw`1. **Singularities:** z = 0 (double pole) and z = 1. The circle |z| = 1 separates the two regions about 0.

![Panel (i): punctured disc 0 < |z| < 1; panel (ii): exterior |z| > 1 (singularities 0 and 1)](fig/practice-series-P10-sketch.svg)

2. **(i) $0 < |z| < 1$:** $\dfrac{1}{1 - z} = \sum_{n=0}^\infty z^n$, so
$$f(z) = \frac{1}{z^2}\sum_{n=0}^\infty z^n = \frac{1}{z^2} + \frac1z + \sum_{n=0}^\infty z^n$$

3. **(ii) $1 < |z| < \infty$:** factor out $-z$ so that $|1/z| < 1$:
$$\frac{1}{1 - z} = -\frac1z\cdot\frac{1}{1 - 1/z} = -\sum_{n=0}^\infty\frac{1}{z^{n+1}}$$
$$f(z) = -\frac{1}{z^2}\sum_{n=0}^\infty\frac{1}{z^{n+1}} = -\sum_{n=3}^\infty\frac{1}{z^n} = -\frac{1}{z^3} - \frac{1}{z^4} - \cdots$$

4. **Check:** both agree numerically with f, at $|z| = 0.6$ and $|z| = 1.8$ (B&C's answers ✓).`,
        answer: String.raw`(i) 0 < |z| < 1: Σ_{n≥0} zⁿ + 1/z + 1/z²; (ii) 1 < |z| < ∞: −Σ_{n≥3} 1/zⁿ.` } ] },
    { id: "practice-series-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P11", label: "", marks: "", topic: "series",
        sub: "z/((z − 1)(z − 3)) in 0 < |z − 1| < 2: Laurent series about z = 1", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 56, Exercise 6`,
        text: String.raw`Show that when $0 < |z - 1| < 2$,
$$\frac{z}{(z - 1)(z - 3)} = -3\sum_{n=0}^\infty\frac{(z - 1)^n}{2^{n+2}} - \frac{1}{2(z - 1)}$$`,
        solution: String.raw`1. **Partial fractions:**
$$\frac{z}{(z - 1)(z - 3)} = \frac{A}{z - 1} + \frac{B}{z - 3}$$
   with
$$A = \frac{1}{1 - 3} = -\frac12, \qquad B = \frac{3}{3 - 1} = \frac32$$

![Punctured disc about 1 of radius 2; the other singularity z = 3 is on the edge](fig/practice-series-P11-sketch.svg)

2. **Expand $\dfrac{3/2}{z - 3}$ about 1.** Write
$$z - 3 = (z - 1) - 2 = -2\left[1 - \frac{z - 1}{2}\right]$$
   Then
$$\frac{3/2}{z - 3} = -\frac34\cdot\frac{1}{1 - (z - 1)/2} = -\frac34\sum_{n=0}^\infty\frac{(z - 1)^n}{2^n} = -3\sum_{n=0}^\infty\frac{(z - 1)^n}{2^{n+2}}$$
   This is valid for $|z - 1| < 2$.

3. **Combine:** the term $-\dfrac{1}{2(z - 1)}$ is already a power of $z - 1$, valid for z ≠ 1. Hence
$$\frac{z}{(z - 1)(z - 3)} = -3\sum_{n=0}^\infty\frac{(z - 1)^n}{2^{n+2}} - \frac{1}{2(z - 1)}, \qquad 0 < |z - 1| < 2$$
   z = 1 is a simple pole with residue −1/2.

4. **Check:** the identity holds numerically at $z = 1 + 1.5e^{i}$.`,
        answer: String.raw`z/((z − 1)(z − 3)) = −(1/2)/(z − 1) + (3/2)/(z − 3); (3/2)/(z − 3) = −(3/4)·1/(1 − (z − 1)/2) = −3Σ (z − 1)ⁿ/2^{n+2} for |z − 1| < 2 ⇒ result in 0 < |z − 1| < 2 (residue −1/2 at 1).` } ] },
    { id: "practice-series-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P12", label: "", marks: "", topic: "series",
        sub: "Principal part and type of isolated singularity: z²/(1 + z), cos z/z, 1/(2 − z)³", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 65, Exercise 1(b), (d), (e)`,
        text: String.raw`In each case, write the principal part of the function at its isolated singular point and determine whether that point is a pole, a removable singular point or an essential singular point:
(b) $\dfrac{z^2}{1 + z}$; (d) $\dfrac{\cos z}{z}$; (e) $\dfrac{1}{(2 - z)^3}$.`,
        solution: String.raw`**Classification by the principal part** (the negative powers of $z - z_0$ in the Laurent series on $0 < |z - z_0| < R$):
- none: **removable** singularity;
- finitely many, the last being $b_m/(z - z_0)^m$ with $b_m \ne 0$: **pole of order m**;
- infinitely many: **essential** singularity.

![Each singular point with a small punctured neighbourhood in which the Laurent series is written](fig/practice-series-P12-sketch.svg)

1. **(b) $z^2/(1 + z)$ at $z_0 = -1$.** Write $z^2 = [(z + 1) - 1]^2 = (z + 1)^2 - 2(z + 1) + 1$:
$$\frac{z^2}{1 + z} = (z + 1) - 2 + \frac{1}{z + 1}$$
   Principal part $\dfrac{1}{z + 1}$: a **simple pole** (m = 1), residue 1.

2. **(d) $\cos z/z$ at $z_0 = 0$:**
$$\frac{\cos z}{z} = \frac1z\left(1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \cdots\right) = \frac1z - \frac z2 + \frac{z^3}{24} - \cdots$$
   Principal part $\dfrac1z$: a **simple pole**, residue 1.

3. **(e) $1/(2 - z)^3$ at $z_0 = 2$:**
$$\frac{1}{(2 - z)^3} = -\frac{1}{(z - 2)^3}$$
   This is its own Laurent series. Principal part $-\dfrac{1}{(z - 2)^3}$: a **pole of order 3**, residue 0.

4. **Check:** sympy series about each point give the same principal parts, with residues 1, 1 and 0.`,
        answer: String.raw`(b) z²/(1 + z) = (z + 1) − 2 + 1/(z + 1): principal part 1/(z + 1), simple pole at −1; (d) cos z/z = 1/z − z/2 + …: principal part 1/z, simple pole at 0; (e) −1/(z − 2)³: pole of order 3 at 2.` } ] },
    { id: "practice-series-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P13", label: "", marks: "", topic: "series",
        sub: "Order m and residue B: (1 − cosh z)/z³, (1 − e^{2z})/z⁴, e^{2z}/(z − 1)²", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Brown & Churchill, Complex Variables and Applications, 7th ed., Sec. 65, Exercise 2 (Ans. (a) m = 1, B = −1/2; (b) m = 3, B = −4/3; (c) m = 2, B = 2e²)`,
        text: String.raw`Show that the singular point of each of the following functions is a pole. Determine the order m of that pole and the corresponding residue B.
(a) $\dfrac{1 - \cosh z}{z^3}$; (b) $\dfrac{1 - \exp(2z)}{z^4}$; (c) $\dfrac{\exp(2z)}{(z - 1)^2}$.`,
        solution: String.raw`![Mark each pole and record its order m and residue B beside it](fig/practice-series-P13-sketch.svg)

1. **(a)** From $\cosh z = 1 + z^2/2! + z^4/4! + \cdots$,
$$1 - \cosh z = -\frac{z^2}{2} - \frac{z^4}{24} - \cdots$$
   and
$$\frac{1 - \cosh z}{z^3} = -\frac{1}{2z} - \frac{z}{24} - \cdots \qquad (0 < |z| < \infty)$$
   A **simple pole** (m = 1) with B = −1/2. The cubic in the denominator is cancelled down to a single power by the double zero of the numerator.

2. **(b)**
$$1 - e^{2z} = -2z - \frac{4z^2}{2!} - \frac{8z^3}{3!} - \frac{16z^4}{4!} - \cdots$$
   so
$$\frac{1 - e^{2z}}{z^4} = -\frac{2}{z^3} - \frac{2}{z^2} - \frac{4}{3z} - \frac23 - \cdots$$
   A pole of order **m = 3** with B = −4/3.

3. **(c)** Expand $e^{2z}$ about 1:
$$e^{2z} = e^2e^{2(z-1)} = e^2\left[1 + 2(z - 1) + 2(z - 1)^2 + \cdots\right]$$
   so
$$\frac{e^{2z}}{(z - 1)^2} = \frac{e^2}{(z - 1)^2} + \frac{2e^2}{z - 1} + 2e^2 + \cdots$$
   A pole of order **m = 2** with B = 2e². (Check with the formula: $\frac{d}{dz}e^{2z}\big|_{1} = 2e^2$ ✓.)

4. **Check:** sympy residues are −1/2, −4/3 and 2e², matching the book's answers.`,
        answer: String.raw`(a) (1 − cosh z)/z³ = −1/(2z) − z/24 − …: m = 1, B = −1/2; (b) (1 − e^{2z})/z⁴ = −2/z³ − 2/z² − 4/(3z) − …: m = 3, B = −4/3; (c) e^{2z}/(z − 1)² = e²/(z − 1)² + 2e²/(z − 1) + …: m = 2, B = 2e².` } ] },
    { id: "practice-series-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P14", label: "", marks: "(12)", topic: "series",
        sub: "Laurent series of sin z/(z − π)² about z = π: type of singularity and residue", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem: Laurent series about a point other than 0, using a shift identity`,
        text: String.raw`Find the Laurent series of $f(z) = \dfrac{\sin z}{(z - \pi)^2}$ about $z = \pi$, state the region where it is valid, classify the singularity at π and give the residue there.`,
        solution: String.raw`1. **Shift to the centre.** Put $w = z - \pi$. Then $\sin z = \sin(w + \pi) = -\sin w$, so
$$f = -\frac{\sin w}{w^2}$$

2. **Expand** using $\sin w = w - \dfrac{w^3}{3!} + \dfrac{w^5}{5!} - \cdots$, valid for all w:
$$f(z) = -\frac{1}{z - \pi} + \frac{z - \pi}{6} - \frac{(z - \pi)^3}{120} + \cdots = \sum_{n=0}^\infty\frac{(-1)^{n+1}(z - \pi)^{2n-1}}{(2n + 1)!}$$

3. **Region:** sin z is entire, so the only singularity is z = π, and the series is valid for $0 < |z - \pi| < \infty$.

![The whole plane minus z = π; one simple pole with residue −1](fig/practice-series-P14-sketch.svg)

4. **Classification.** The principal part is the single term $-1/(z - \pi)$. So z = π is a **simple pole**, not a double one: the double zero of the denominator is partly cancelled by the simple zero of sin z at π. The **residue is −1**.

5. **Check:** sympy gives $-1/(z - \pi) + (z - \pi)/6 - \cdots$ and residue −1 ✓. Also
$$\lim_{z\to\pi}(z - \pi)f(z) = \lim_{z\to\pi}\frac{\sin z}{z - \pi} = \cos\pi = -1 \ ✓$$`,
        answer: String.raw`f = −1/(z − π) + (z − π)/6 − (z − π)³/120 + … = Σ (−1)^{n+1}(z − π)^{2n−1}/(2n + 1)!, valid 0 < |z − π| < ∞; simple pole at π, residue −1.` } ] },
    { id: "practice-series-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-series-P15", label: "", marks: "(15)", topic: "series",
        sub: "Laurent series of 1/(e^z − 1) in 0 < |z| < 2π by series division", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem on division of power series (Brown & Churchill Sec. 61 method)`,
        text: String.raw`Find the first four non-zero terms of the Laurent series of $f(z) = \dfrac{1}{e^z - 1}$ about $z = 0$, and state the largest annulus $0 < |z| < R$ in which it is valid. Hence write down the residue of f at 0.`,
        solution: String.raw`1. **Singularities.** $e^z = 1$ when $z = 2k\pi i$, k = 0, ±1, ±2, …. The point z = 0 is one of them. The nearest others are ±2πi, so the series about 0 is valid in $0 < |z| < 2\pi$.

![Punctured disc 0 < |z| < 2π; poles at 2πik, with ±2πi on the boundary](fig/practice-series-P15-sketch.svg)

2. **Factor out z:**
$$e^z - 1 = z\left(1 + \frac z2 + \frac{z^2}{6} + \frac{z^3}{24} + \frac{z^4}{120} + \cdots\right), \qquad f = \frac1z\cdot\frac{1}{1 + \frac z2 + \frac{z^2}{6} + \frac{z^3}{24} + \cdots}$$

3. **Divide.** Write
$$\frac{1}{1 + z/2 + z^2/6 + \cdots} = c_0 + c_1z + c_2z^2 + c_3z^3 + c_4z^4 + \cdots$$
   and match coefficients of the product with 1:
   - $c_0 = 1$
   - $c_1 + \tfrac12 = 0$, so $c_1 = -\tfrac12$
   - $c_2 + \tfrac12c_1 + \tfrac16 = 0$, so $c_2 = \tfrac14 - \tfrac16 = \tfrac{1}{12}$
   - $c_3 = -\left(\tfrac12c_2 + \tfrac16c_1 + \tfrac{1}{24}\right) = -\tfrac{1}{24} + \tfrac{1}{12} - \tfrac{1}{24} = 0$
   - $c_4 = -\left(\tfrac12c_3 + \tfrac16c_2 + \tfrac1{24}c_1 + \tfrac{1}{120}\right) = -\tfrac{1}{720}$

4. **Result:**
$$\frac{1}{e^z - 1} = \frac1z - \frac12 + \frac{z}{12} - \frac{z^3}{720} + \cdots, \qquad 0 < |z| < 2\pi$$
   z = 0 is a simple pole with **residue 1**.

5. **Check:** sympy gives $1/z - 1/2 + z/12 - z^3/720 + z^5/30240 + \cdots$ ✓. Also $\lim_{z\to0} z/(e^z - 1) = 1$ ✓.`,
        answer: String.raw`1/(e^z − 1) = 1/z − 1/2 + z/12 − z³/720 + …, valid 0 < |z| < 2π (next poles ±2πi); residue at 0 = 1.` } ] }
  ]
});
