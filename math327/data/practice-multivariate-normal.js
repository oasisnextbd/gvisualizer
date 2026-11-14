QB.paper({ year: "Practice", set: "Multivariate data, joint distributions and the multivariate normal", date: "", marks: 0, practice: true,
  rules: String.raw`Every worked example and exercise in the multivariate lecture notes (Lecture 1: introduction, Lecture 2: data representation, Lectures 3–4: multivariate normal, conditional-distribution lecture): mean vector, Sₙ and R from data matrices, linear combinations and independence in the multivariate normal, bivariate normal probabilities and conditional distributions, joint/marginal/conditional pdfs; plus new exam-style problems on conditional distributions and Mahalanobis distance. Slide answers are checked and any slips are noted.`,
  questions: [
    { id: "practice-multivariate-normal-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P1", label: "", marks: "", topic: "multivariate-normal",
        sub: "Chocolates sold and prices in four shops: x̄, Sₙ, r₁₂ and R", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture 2 (Introduction / data representation), pp. 6–8, Example (chocolates)`,
        text: String.raw`Suppose the following observations are collected on the number of chocolates sold ($x_1$) and their respective prices ($x_2$) in four shops:

| Shop | No. of chocolates sold ($x_1$) | Cost of chocolate ($x_2$) |
|---|---|---|
| 1 | 4 | 48 |
| 2 | 3 | 58 |
| 3 | 4 | 42 |
| 4 | 5 | 52 |

Find the sample mean vector, the sample covariance matrix $\mathbf S_n$ and the sample correlation matrix $\mathbf R$.`,
        solution: String.raw`**Given:** n = 4 observation vectors $\mathbf x_j = (x_{j1}, x_{j2})'$: (4, 48), (3, 58), (4, 42), (5, 52).

**Notation (Lecture 2):** $s_{ik} = \frac1n\sum_{j=1}^n(x_{ji} - \bar x_i)(x_{jk} - \bar x_k)$ (divisor n); $r_{ik} = s_{ik}/\sqrt{s_{ii}s_{kk}}$.

1. **Sample means:**
$$\bar x_1 = \frac14(4 + 3 + 4 + 5) = 4, \qquad \bar x_2 = \frac14(48 + 58 + 42 + 52) = 50, \qquad \bar{\mathbf x} = \begin{pmatrix}4\\50\end{pmatrix}$$

2. **Variances:**
$$s_{11} = \frac14[0^2 + (-1)^2 + 0^2 + 1^2] = 0.5, \qquad s_{22} = \frac14[(-2)^2 + 8^2 + (-8)^2 + 2^2] = \frac{136}{4} = 34$$

3. **Covariance:**
$$s_{12} = \frac14[(0)(-2) + (-1)(8) + (0)(-8) + (1)(2)] = \frac{-6}{4} = -1.5$$
$$\mathbf S_n = \begin{pmatrix}0.5 & -1.5\\-1.5 & 34\end{pmatrix}$$

4. **Correlation:**
$$r_{12} = \frac{-1.5}{\sqrt{0.5 \times 34}} = \frac{-1.5}{4.123} = -0.36, \qquad \mathbf R = \begin{pmatrix}1 & -0.36\\-0.36 & 1\end{pmatrix}$$

5. **Interpretation.** There is a weak negative association: shops charging more sell slightly fewer chocolates. (With divisor n − 1, $\mathbf S$ = [[0.667, −2], [−2, 45.33]]; R is the same.)`,
        answer: String.raw`x̄ = (4, 50)′; Sₙ = [[0.5, −1.5], [−1.5, 34]]; r₁₂ = −1.5/√17 = −0.36, R = [[1, −0.36], [−0.36, 1]].` } ] },
    { id: "practice-multivariate-normal-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P2", label: "", marks: "", topic: "multivariate-normal",
        sub: "Reactor runs (temperature, pressure, conversion): x̄, S by the matrix formula, and R", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture 1 (Multivariate Analysis), pp. 14–17, Problem 01`,
        text: String.raw`A chemical engineering experiment records three process variables from a reactor and the observations from five experimental runs are given below:

| Run | Temperature | Pressure | Conversion |
|---|---|---|---|
| 1 | 100 | 5 | 50 |
| 2 | 110 | 6 | 55 |
| 3 | 120 | 7 | 65 |
| 4 | 130 | 8 | 70 |
| 5 | 140 | 9 | 80 |

Find mean vector, covariance matrix and correlation matrix.`,
        solution: String.raw`**Given:** $x_1$ = temperature, $x_2$ = pressure, $x_3$ = conversion; n = 5.

1. **Mean vector:** $\bar{\mathbf x} = (120, 7, 64)'$.

2. **Deviation matrix** $\mathbf X - \mathbf 1\bar{\mathbf x}'$:
$$\begin{pmatrix}-20 & -2 & -14\\-10 & -1 & -9\\0 & 0 & 1\\10 & 1 & 6\\20 & 2 & 16\end{pmatrix}$$

3. **Covariance matrix** $\mathbf S_n = \frac1n(\mathbf X - \mathbf 1\bar{\mathbf x}')'(\mathbf X - \mathbf 1\bar{\mathbf x}')$. For example, $s_{11} = \frac15(400 + 100 + 0 + 100 + 400) = 200$, $s_{13} = \frac15(280 + 90 + 0 + 60 + 320) = 150$, and $s_{33} = \frac15(196 + 81 + 1 + 36 + 256) = 114$:
$$\mathbf S_n = \begin{pmatrix}200 & 20 & 150\\20 & 2 & 15\\150 & 15 & 114\end{pmatrix}$$
   **Note on the slide:** its formula uses the divisor n, but the numbers shown (250, 25, 187.5, …) are the divisor-(n − 1) values, $\mathbf S = \frac{n}{n-1}\mathbf S_n$ = [[250, 25, 187.5], [25, 2.5, 18.75], [187.5, 18.75, 142.5]]. Either is acceptable if stated; the correlations are the same.

4. **Correlation matrix:**
$$r_{12} = \frac{20}{\sqrt{200 \times 2}} = 1.000, \qquad r_{13} = \frac{150}{\sqrt{200 \times 114}} = 0.993, \qquad r_{23} = \frac{15}{\sqrt{2 \times 114}} = 0.993$$
$$\mathbf R = \begin{pmatrix}1 & 1 & 0.993\\1 & 1 & 0.993\\0.993 & 0.993 & 1\end{pmatrix}$$

5. **Interpretation.** Pressure is an exact linear function of temperature in these runs ($x_2 = x_1/10 - 5$), so $r_{12}$ = 1 and $\mathbf S_n$ is singular (|S| = 0). Conversion rises almost linearly with both. In such data the variables carry essentially one dimension of information, which PCA would reveal.`,
        answer: String.raw`x̄ = (120, 7, 64)′; Sₙ = [[200, 20, 150], [20, 2, 15], [150, 15, 114]] (slide's values 250, 25, 187.5 are the n − 1 versions); R: r₁₂ = 1, r₁₃ = r₂₃ = 0.993.` } ] },
    { id: "practice-multivariate-normal-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P3", label: "", marks: "", topic: "multivariate-normal",
        sub: "Marks of five students in Mathematics and Statistics: mean vector, S, r and R", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture 2, p. 9, Exercise 1`,
        text: String.raw`Five students obtained the following marks in Mathematics and Statistics:

| Student | Mathematics | Statistics |
|---|---|---|
| 1 | 65 | 70 |
| 2 | 72 | 75 |
| 3 | 80 | 85 |
| 4 | 78 | 82 |
| 5 | 90 | 88 |

(a) Calculate the sample mean vector (b) Calculate the sample variances (c) Calculate the covariance matrix (d) Compute the correlation coefficient between the marks of two subjects (e) Calculate the sample correlation matrix and interpret your results.`,
        solution: String.raw`1. **(a) Mean vector:** $\bar x_1$ = 385/5 = 77, $\bar x_2$ = 400/5 = 80, so $\bar{\mathbf x} = (77, 80)'$.

2. **Deviations:** Mathematics −12, −5, 3, 1, 13; Statistics −10, −5, 5, 2, 8.

3. **(b) Variances** (divisor n):
$$s_{11} = \frac{144 + 25 + 9 + 1 + 169}{5} = 69.6, \qquad s_{22} = \frac{100 + 25 + 25 + 4 + 64}{5} = 43.6$$

4. **(c) Covariance:**
$$s_{12} = \frac{120 + 25 + 15 + 2 + 104}{5} = 53.2, \qquad \mathbf S_n = \begin{pmatrix}69.6 & 53.2\\53.2 & 43.6\end{pmatrix}$$
   (Divisor n − 1: [[87, 66.5], [66.5, 54.5]].)

5. **(d) Correlation:**
$$r_{12} = \frac{53.2}{\sqrt{69.6 \times 43.6}} = \frac{53.2}{55.09} = 0.966$$

6. **(e)** $\mathbf R = \begin{pmatrix}1 & 0.966\\0.966 & 1\end{pmatrix}$. There is a very strong positive linear association: students who do well in Mathematics also do well in Statistics. The Mathematics marks are more spread out (variance 69.6 against 43.6).`,
        answer: String.raw`x̄ = (77, 80)′; s₁₁ = 69.6, s₂₂ = 43.6, s₁₂ = 53.2 (Sₙ); r₁₂ = 0.966 ⇒ R = [[1, 0.966], [0.966, 1]] — strong positive association.` } ] },
    { id: "practice-multivariate-normal-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P4", label: "", marks: "", topic: "multivariate-normal",
        sub: "Age, income and years of schooling of six persons: x̄, Sₙ and R", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture 2, p. 9, Exercise 2 ("questions are same as Ex. 1")`,
        text: String.raw`| Person | Age | Income | Education (years of schooling) |
|---|---|---|---|
| 1 | 25 | 35 | 12 |
| 2 | 30 | 42 | 14 |
| 3 | 35 | 48 | 15 |
| 4 | 40 | 55 | 16 |
| 5 | 45 | 62 | 17 |
| 6 | 50 | 70 | 18 |

Calculate the sample mean vector, the sample variances, the covariance matrix, the correlation coefficients and the sample correlation matrix, and interpret.`,
        solution: String.raw`**Given:** n = 6, p = 3 ($x_1$ age, $x_2$ income, $x_3$ education).

1. **Mean vector:** $\bar{\mathbf x} = (225/6,\ 312/6,\ 92/6)' = (37.5,\ 52.0,\ 15.33)'$.

2. **Deviations:**

| j | $x_1 - 37.5$ | $x_2 - 52$ | $x_3 - 15.33$ |
|---|---|---|---|
| 1 | −12.5 | −17 | −3.33 |
| 2 | −7.5 | −10 | −1.33 |
| 3 | −2.5 | −4 | −0.33 |
| 4 | 2.5 | 3 | 0.67 |
| 5 | 7.5 | 10 | 1.67 |
| 6 | 12.5 | 18 | 2.67 |

3. **Covariance matrix** (divisor n = 6):
$$\mathbf S_n = \begin{pmatrix}72.92 & 100.83 & 16.67\\100.83 & 139.67 & 23.00\\16.67 & 23.00 & 3.889\end{pmatrix}$$
   For example, $s_{12} = \frac16(212.5 + 75 + 10 + 7.5 + 75 + 225) = 605/6 = 100.83$.

4. **Correlations:**
$$r_{12} = \frac{100.83}{\sqrt{72.92 \times 139.67}} = 0.999, \quad r_{13} = \frac{16.67}{\sqrt{72.92 \times 3.889}} = 0.990, \quad r_{23} = \frac{23.00}{\sqrt{139.67 \times 3.889}} = 0.987$$
$$\mathbf R = \begin{pmatrix}1 & 0.999 & 0.990\\0.999 & 1 & 0.987\\0.990 & 0.987 & 1\end{pmatrix}$$

5. **Interpretation.** All three variables increase together almost perfectly in this small sample. Older persons have more schooling and higher income, and income is nearly a linear function of age (0.999). The near-singular R signals strong **multicollinearity**: regressing income on age and education would give unstable coefficients.`,
        answer: String.raw`x̄ = (37.5, 52, 15.33)′; Sₙ = [[72.92, 100.83, 16.67], [100.83, 139.67, 23.00], [16.67, 23.00, 3.889]]; r₁₂ = 0.999, r₁₃ = 0.990, r₂₃ = 0.987 — near-perfect positive association (multicollinearity).` } ] },
    { id: "practice-multivariate-normal-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P5", label: "", marks: "", topic: "multivariate-normal",
        sub: "Ten observations on three variables: x̄, Sₙ, unbiased S, and the two correlation matrices", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lecture 2, p. 13, Exercise 1 (with answers to check)`,
        text: String.raw`Compute the basic descriptive statistics: (i) sample mean vector (ii) sample covariance matrix (iii) sample covariance matrix considering unbiased estimator (iv) sample correlation matrix (v) sample correlation matrix considering unbiased estimator. The data are as follows:

| $X_1$ | 2.22 | 2.31 | 2.46 | 2.00 | 2.73 | 2.00 | 1.88 | 2.39 | 2.27 | 2.00 |
|---|---|---|---|---|---|---|---|---|---|---|
| $X_2$ | 1.95 | 2.31 | 2.91 | 1.00 | 4.09 | 2.60 | 1.56 | 4.00 | 3.27 | 1.00 |
| $X_3$ | 1.00 | 2.00 | 3.00 | 1.00 | 0.01 | 2.00 | 0.00 | 2.00 | 2.00 | 2.00 |`,
        solution: String.raw`**Given:** n = 10, p = 3.

1. **(i) Mean vector:**
$$\bar{\mathbf x} = \left(\frac{22.26}{10},\ \frac{24.69}{10},\ \frac{15.01}{10}\right)' = (2.226,\ 2.469,\ 1.501)' \approx (2.23,\ 2.47,\ 1.50)'$$
   The slide's answer gives 2.25 for $\bar x_1$, a rounding slip; the data sum to 22.26.

2. **(ii) $\mathbf S_n$** (divisor n), from $\frac1n(\mathbf X - \mathbf 1\bar{\mathbf x}')'(\mathbf X - \mathbf 1\bar{\mathbf x}')$:
$$\mathbf S_n = \begin{pmatrix}0.0618 & 0.2145 & 0.0155\\0.2145 & 1.1262 & 0.1021\\0.0155 & 0.1021 & 0.8470\end{pmatrix} \approx \begin{pmatrix}0.06 & 0.21 & 0.02\\0.21 & 1.13 & 0.10\\0.02 & 0.10 & 0.85\end{pmatrix}$$
   This agrees with the slide's answer, except that the slide shows 0.15 for $s_{13}$ in the first row but 0.02 in the third row: the correct value is 0.02.

3. **(iii) Unbiased estimator** $\mathbf S = \frac{n}{n-1}\mathbf S_n = \frac{10}{9}\mathbf S_n$:
$$\mathbf S = \begin{pmatrix}0.0686 & 0.2384 & 0.0172\\0.2384 & 1.2513 & 0.1135\\0.0172 & 0.1135 & 0.9411\end{pmatrix}$$

4. **(iv) and (v) Correlation matrix.** The factor n/(n − 1) cancels in $r_{ik} = s_{ik}/\sqrt{s_{ii}s_{kk}}$, so both versions give the **same** R:
$$\mathbf R = \begin{pmatrix}1 & 0.81 & 0.07\\0.81 & 1 & 0.10\\0.07 & 0.10 & 1\end{pmatrix}$$

5. **Interpretation.** $X_1$ and $X_2$ are strongly positively correlated (0.81). $X_3$ is nearly uncorrelated with both.`,
        answer: String.raw`x̄ = (2.226, 2.469, 1.501)′; Sₙ ≈ [[0.062, 0.215, 0.016], [0.215, 1.126, 0.102], [0.016, 0.102, 0.847]]; unbiased S = (10/9)Sₙ; R (same for both) = [[1, 0.81, 0.07], [0.81, 1, 0.10], [0.07, 0.10, 1]].` } ] },
    { id: "practice-multivariate-normal-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P6", label: "", marks: "", topic: "multivariate-normal",
        sub: "Distribution of Y = 2X₁ − X₂ when X ~ N₂((10, 20)′, [[4, 2], [2, 9]])", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lectures 3–4 (Multivariate Normal Distribution), pp. 7–9, Property 1 and Exercise 1`,
        text: String.raw`Suppose $\mathbf X = \begin{pmatrix}X_1\\X_2\end{pmatrix} \sim N(\mu, \Sigma)$, where $\mu = \begin{pmatrix}10\\20\end{pmatrix}$, $\Sigma = \begin{pmatrix}4 & 2\\2 & 9\end{pmatrix}$. Find the distribution of $Y = 2X_1 - X_2$.`,
        solution: String.raw`1. **Property 1 (linear combinations).** If $\mathbf X \sim N_p(\mu, \Sigma)$, then any linear combination $Y = \mathbf a'\mathbf X$ is normal:
$$Y \sim N(\mathbf a'\mu,\ \mathbf a'\Sigma\mathbf a)$$

2. **Coefficient vector:** $\mathbf a = (2, -1)'$.

3. **Mean:** $\mathbf a'\mu = 2(10) - 20 = 0$.

4. **Variance:**
$$\mathbf a'\Sigma\mathbf a = (2, -1)\begin{pmatrix}4 & 2\\2 & 9\end{pmatrix}\begin{pmatrix}2\\-1\end{pmatrix} = (2, -1)\begin{pmatrix}6\\-5\end{pmatrix} = 12 + 5 = 17$$
   Equivalently, $4\sigma_{11} + \sigma_{22} - 4\sigma_{12} = 16 + 9 - 8 = 17$.

**Result:** $Y \sim N(0, 17)$, as on the slide.`,
        answer: String.raw`a = (2, −1)′: E(Y) = a′μ = 0, Var(Y) = a′Σa = 17 ⇒ Y ~ N(0, 17).` } ] },
    { id: "practice-multivariate-normal-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P7", label: "", marks: "", topic: "multivariate-normal",
        sub: "N₃ with μ = (−3, 1, 4)′: which variables or groups are independent?", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lectures 3–4, pp. 10–15, Property 3 (zero covariance ⇔ independence) and Exercise 1`,
        text: String.raw`Let X be $N_3(\mu, \Sigma)$ with $\mu' = [-3, 1, 4]$ and

$$\Sigma = \begin{pmatrix}1 & -2 & 0\\-2 & 5 & 0\\0 & 0 & 2\end{pmatrix}$$

Which of the following random variables are independent? Explain. (a) $X_1$ and $X_2$ (b) $X_2$ and $X_3$ (c) $(X_1, X_2)$ and $X_3$ (d) $\frac{X_1 + X_2}{2}$ and $X_3$ (e) $X_2$ and $X_2 - \frac52X_1 - X_3$`,
        solution: String.raw`**Rule (Property 3):** for jointly multivariate normal variables, zero covariance ⇔ independence. For linear combinations $\mathbf Y = \mathbf C\mathbf X$, compute $\mathrm{Cov}(\mathbf Y) = \mathbf C\Sigma\mathbf C'$.

1. **(a)** $\sigma_{12} = -2 \ne 0$, so $X_1$ and $X_2$ are **not independent**.

2. **(b)** $\sigma_{23} = 0$, so $X_2$ and $X_3$ are **independent**.

3. **(c)** The cross-covariance block is $\mathrm{Cov}((X_1, X_2)', X_3) = (\sigma_{13}, \sigma_{23})' = (0, 0)'$. So $(X_1, X_2)$ and $X_3$ are **independent**.

4. **(d)** Take $\mathbf c = (\tfrac12, \tfrac12, 0)'$:
$$\mathrm{Cov}\left(\frac{X_1 + X_2}{2}, X_3\right) = \tfrac12\sigma_{13} + \tfrac12\sigma_{23} = 0$$
   They are **independent**. (Var = ¼(1 + 5 − 4) = 0.5.)

5. **(e)** $\mathrm{Cov}(X_2, X_2 - \tfrac52X_1 - X_3) = \sigma_{22} - \tfrac52\sigma_{21} - \sigma_{23} = 5 - \tfrac52(-2) - 0 = 10 \ne 0$. They are **not independent** (as on the slide: 10 ≠ 0).`,
        answer: String.raw`(a) not (σ₁₂ = −2); (b) independent (σ₂₃ = 0); (c) independent (σ₁₃ = σ₂₃ = 0); (d) independent (Cov = 0); (e) not independent (Cov = 5 + 5 − 0 = 10).` } ] },
    { id: "practice-multivariate-normal-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P8", label: "", marks: "", topic: "multivariate-normal",
        sub: "N₃ with μ = (2, −3, 1)′: distribution of 3X₁ − 2X₂ + X₃", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lectures 3–4, p. 16, Exercise 2(a)`,
        text: String.raw`$\mathbf X \sim N_3(\mu, \Sigma)$ with $\mu' = [2, -3, 1]$ and $\Sigma = \begin{pmatrix}1 & 1 & 1\\1 & 3 & 2\\1 & 2 & 2\end{pmatrix}$. Find the distribution of $3X_1 - 2X_2 + X_3$. (Hint: $Y = \mathbf a'\mathbf X \sim N(\mathbf a'\mu, \mathbf a'\Sigma\mathbf a)$.)`,
        solution: String.raw`1. **Coefficients:** $\mathbf a = (3, -2, 1)'$.

2. **Mean:** $\mathbf a'\mu = 3(2) - 2(-3) + 1(1) = 6 + 6 + 1 = 13$.

3. **Variance:**
$$\Sigma\mathbf a = \begin{pmatrix}3 - 2 + 1\\3 - 6 + 2\\3 - 4 + 2\end{pmatrix} = \begin{pmatrix}2\\-1\\1\end{pmatrix}, \qquad \mathbf a'\Sigma\mathbf a = 3(2) - 2(-1) + 1(1) = 9$$

**Result:** $3X_1 - 2X_2 + X_3 \sim N(13, 9)$.`,
        answer: String.raw`a = (3, −2, 1)′: a′μ = 13, a′Σa = 9 ⇒ N(13, 9).` } ] },
    { id: "practice-multivariate-normal-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P9", label: "", marks: "", topic: "multivariate-normal",
        sub: "Write the bivariate normal density for μ = (0, 2), σ₁₁ = 2, σ₂₂ = 1, ρ₁₂ = 0.5", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lectures 3–4, pp. 4–6 (bivariate normal density) and p. 16, Exercise 2(b)`,
        text: String.raw`Consider a bivariate population with means $\mu_1 = 0$, $\mu_2 = 2$ and variances $\sigma_{11} = 2$, $\sigma_{22} = 1$, and correlation $\rho_{12} = 0.5$. Write the bivariate normal density.`,
        solution: String.raw`1. **General form (slides p. 6):**
$$f(x_1, x_2) = \frac{1}{2\pi\sqrt{\sigma_{11}\sigma_{22}(1 - \rho_{12}^2)}}\exp\left\{-\frac{1}{2(1 - \rho_{12}^2)}\left[\left(\frac{x_1 - \mu_1}{\sqrt{\sigma_{11}}}\right)^2 + \left(\frac{x_2 - \mu_2}{\sqrt{\sigma_{22}}}\right)^2 - 2\rho_{12}\left(\frac{x_1 - \mu_1}{\sqrt{\sigma_{11}}}\right)\left(\frac{x_2 - \mu_2}{\sqrt{\sigma_{22}}}\right)\right]\right\}$$

2. **Constants:** $1 - \rho_{12}^2 = 0.75$, so
$$2\pi\sqrt{2 \times 1 \times 0.75} = 2\pi\sqrt{1.5} = 7.695 \;\Rightarrow\; \frac{1}{7.695} = 0.1300$$

3. **Density:**
$$f(x_1, x_2) = 0.1300\exp\left\{-\frac23\left[\frac{x_1^2}{2} + (x_2 - 2)^2 - \frac{x_1(x_2 - 2)}{\sqrt2}\right]\right\}, \qquad -\infty < x_1, x_2 < \infty$$
   using $2\rho_{12}/\sqrt{\sigma_{11}\sigma_{22}} = 2(0.5)/\sqrt2 = 1/\sqrt2$.

4. **Matrix form (equivalent):** $\Sigma = \begin{pmatrix}2 & 0.7071\\0.7071 & 1\end{pmatrix}$, |Σ| = 1.5, $\Sigma^{-1} = \frac{1}{1.5}\begin{pmatrix}1 & -0.7071\\-0.7071 & 2\end{pmatrix}$, and
$$f = \frac{1}{2\pi|\Sigma|^{1/2}}\exp\left\{-\tfrac12(\mathbf x - \mu)'\Sigma^{-1}(\mathbf x - \mu)\right\}$$
   Expanding the quadratic form reproduces the exponent above.`,
        answer: String.raw`f = [1/(2π√1.5)] exp{−(2/3)[x₁²/2 + (x₂ − 2)² − x₁(x₂ − 2)/√2]} = 0.130 exp{…}; Σ = [[2, 0.707], [0.707, 1]], |Σ| = 1.5.` } ] },
    { id: "practice-multivariate-normal-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P10", label: "", marks: "", topic: "multivariate-normal",
        sub: "N₄ with block Σ: independence of (X₁, X₂) & (X₃, X₄), (X₁, X₄) & (X₂, X₃), X₁ + X₃ & X₂ + X₄", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lectures 3–4, p. 16, Exercise 3`,
        text: String.raw`Given $\mathbf X = (X_1, X_2, X_3, X_4)' \sim N_4(\mu, \Sigma)$, where

$$\Sigma = \begin{pmatrix}4 & 1 & 0 & 0\\1 & 9 & 0 & 0\\0 & 0 & 5 & 2\\0 & 0 & 2 & 8\end{pmatrix}$$

(a) Are $(X_1, X_2)$ and $(X_3, X_4)$ independent? (b) Are $(X_1, X_4)$ and $(X_2, X_3)$ independent? (c) Are $(X_1 + X_3)$ and $(X_2 + X_4)$ independent?`,
        solution: String.raw`**Rule:** two sub-vectors of a multivariate normal vector are independent iff their cross-covariance matrix is zero.

1. **(a)** $\mathrm{Cov}\left(\begin{pmatrix}X_1\\X_2\end{pmatrix}, \begin{pmatrix}X_3\\X_4\end{pmatrix}\right) = \begin{pmatrix}\sigma_{13} & \sigma_{14}\\\sigma_{23} & \sigma_{24}\end{pmatrix} = \begin{pmatrix}0 & 0\\0 & 0\end{pmatrix}$, so they are **independent**.

2. **(b)** $\mathrm{Cov}\left(\begin{pmatrix}X_1\\X_4\end{pmatrix}, \begin{pmatrix}X_2\\X_3\end{pmatrix}\right) = \begin{pmatrix}\sigma_{12} & \sigma_{13}\\\sigma_{42} & \sigma_{43}\end{pmatrix} = \begin{pmatrix}1 & 0\\0 & 2\end{pmatrix} \ne \mathbf 0$, so they are **not independent**.

3. **(c)** With $\mathbf C = \begin{pmatrix}1 & 0 & 1 & 0\\0 & 1 & 0 & 1\end{pmatrix}$:
$$\mathbf C\Sigma\mathbf C' = \begin{pmatrix}\sigma_{11} + 2\sigma_{13} + \sigma_{33} & \sigma_{12} + \sigma_{14} + \sigma_{32} + \sigma_{34}\\\cdot & \sigma_{22} + 2\sigma_{24} + \sigma_{44}\end{pmatrix} = \begin{pmatrix}9 & 3\\3 & 17\end{pmatrix}$$
   Cov = 3 ≠ 0, so $X_1 + X_3$ and $X_2 + X_4$ are **not independent**.`,
        answer: String.raw`(a) independent (cross-covariance block 0); (b) not independent (σ₁₂ = 1, σ₄₃ = 2); (c) Cov(X₁ + X₃, X₂ + X₄) = 1 + 0 + 0 + 2 = 3 ≠ 0 ⇒ not independent.` } ] },
    { id: "practice-multivariate-normal-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P11", label: "", marks: "", topic: "multivariate-normal",
        sub: "Y₁ = 2X₁ − X₂, Y₂ = X₂ + X₃, Y₃ = X₁ + X₃: mean vector, covariance matrix and independence", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lectures 3–4, p. 17, Exercise 4 (part (v) printed "Y₂ and Y₂", read as Y₂ and Y₃)`,
        text: String.raw`Given $\mathbf X = (X_1, X_2, X_3)' \sim N_3(\mu, \Sigma)$, where $\Sigma = \begin{pmatrix}2 & -1 & 0\\-1 & 3 & 1\\0 & 1 & 4\end{pmatrix}$ and $\mu = (2, 3, 4)'$. Let $Y_1 = 2X_1 - X_2$, $Y_2 = X_2 + X_3$ and $Y_3 = X_1 + X_3$. (i) Find $E(\mathbf Y) = \mu_Y$ (ii) Find $\mathrm{Cov}(\mathbf Y) = \Sigma_Y$ (iii) Determine whether $Y_1$ and $Y_2$ are independent. (iv) Are $Y_1$ and $Y_3$ independent? (v) Are $Y_2$ and $Y_3$?`,
        solution: String.raw`1. **Matrix form:** $\mathbf Y = \mathbf A\mathbf X$ with
$$\mathbf A = \begin{pmatrix}2 & -1 & 0\\0 & 1 & 1\\1 & 0 & 1\end{pmatrix}, \qquad \mathbf Y \sim N_3(\mathbf A\mu,\ \mathbf A\Sigma\mathbf A')$$

2. **(i) Mean vector:** $\mu_Y = \mathbf A\mu = (2 \cdot 2 - 3,\ 3 + 4,\ 2 + 4)' = (1, 7, 6)'$.

3. **(ii) Covariance matrix:**
$$\mathbf A\Sigma = \begin{pmatrix}5 & -5 & -1\\-1 & 4 & 5\\2 & 0 & 4\end{pmatrix}, \qquad \Sigma_Y = \mathbf A\Sigma\mathbf A' = \begin{pmatrix}15 & -6 & 4\\-6 & 9 & 4\\4 & 4 & 6\end{pmatrix}$$
   For example, $\mathrm{Var}(Y_1) = 4\sigma_{11} + \sigma_{22} - 4\sigma_{12} = 8 + 3 + 4 = 15$.

4. **(iii)** $\mathrm{Cov}(Y_1, Y_2) = -6 \ne 0$: **not independent**.

5. **(iv)** $\mathrm{Cov}(Y_1, Y_3) = 4 \ne 0$: **not independent**.

6. **(v)** $\mathrm{Cov}(Y_2, Y_3) = 4 \ne 0$: **not independent**.

Because Y is multivariate normal, zero covariance would be needed for independence; none of the pairs has it.`,
        answer: String.raw`μ_Y = (1, 7, 6)′; Σ_Y = AΣA′ = [[15, −6, 4], [−6, 9, 4], [4, 4, 6]]; no pair is independent (Cov = −6, 4, 4).` } ] },
    { id: "practice-multivariate-normal-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P12", label: "", marks: "", topic: "multivariate-normal",
        sub: "Joint pdf proportional to xy on the unit square: P(X > 0.8, Y < 0.5), P(X + Y < 1), exactly one > 0.7", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Conditional distribution lecture, p. 6, Ex-2 (printed constant 6 is not a valid density; normalised to 4)`,
        text: String.raw`Suppose the joint pdf of (X, Y) is given by $f(x, y) = 6xy$; 0 < x < 1 and 0 < y < 1; = 0, otherwise. Find (i) P[X > 0.8, Y < 0.5] (ii) P[X + Y < 1] (iii) P[exactly one is greater than 0.7].`,
        solution: String.raw`**Check of the density.** $\int_0^1\int_0^16xy\,dx\,dy = 6 \cdot \tfrac12 \cdot \tfrac12 = \tfrac32 \ne 1$. So 6xy is **not** a valid pdf on the unit square. Normalising the given shape xy gives the valid density $f(x, y) = 4xy$, which is used below (the probabilities scale with the constant).

1. **Independence.** f = (2x)(2y) factorises, so X and Y are independent, each with pdf 2t on (0, 1) and $P(\cdot > a) = 1 - a^2$.

2. **(i)**
$$P(X > 0.8, Y < 0.5) = \int_{0.8}^1\int_0^{0.5}4xy\,dy\,dx = (1 - 0.64)(0.25) = 0.36 \times 0.25 = 0.09$$

3. **(ii)**
$$P(X + Y < 1) = \int_0^1\int_0^{1-x}4xy\,dy\,dx = \int_0^12x(1 - x)^2dx = 2\left(\frac12 - \frac23 + \frac14\right) = \frac16$$

4. **(iii)** $P(X > 0.7) = P(Y > 0.7) = 1 - 0.49 = 0.51$. So
$$P(\text{exactly one} > 0.7) = 2(0.51)(0.49) = 0.4998$$
   (Compare 2023-24 Q6(b), the same method with 0.9.)`,
        answer: String.raw`6xy integrates to 3/2 (not a pdf); with the normalised f = 4xy: (i) 0.36 × 0.25 = 0.09; (ii) 1/6; (iii) 2(0.51)(0.49) = 0.4998.` } ] },
    { id: "practice-multivariate-normal-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P13", label: "", marks: "", topic: "multivariate-normal",
        sub: "Joint pdf 8xy on 0 < y < x < 1: P(Y < 0.3), P(X > 0.5), P(X + Y < 1)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Conditional distribution lecture, p. 6, Ex-3`,
        text: String.raw`Let $f(x, y) = 8xy$; 0 < x < 1, 0 < y < x. (a) Find P[Y < 0.3]. (b) P[X > 0.5] (c) P[X + Y < 1].`,
        solution: String.raw`**Check:** $\int_0^1\int_0^x8xy\,dy\,dx = \int_0^14x^3dx = 1$ ✓. The support is the triangle below the line y = x.

1. **Marginals:** $f_X(x) = \int_0^x8xy\,dy = 4x^3$ (0 < x < 1); $f_Y(y) = \int_y^18xy\,dx = 4y(1 - y^2)$ (0 < y < 1).

2. **(a)**
$$P(Y < 0.3) = \int_0^{0.3}4y(1 - y^2)\,dy = [2y^2 - y^4]_0^{0.3} = 0.18 - 0.0081 = 0.1719$$

3. **(b)**
$$P(X > 0.5) = \int_{0.5}^14x^3dx = 1 - 0.0625 = \frac{15}{16} = 0.9375$$

4. **(c)** On the support y < x, the condition x + y < 1 means y < ½ and y < x < 1 − y:
$$P(X + Y < 1) = \int_0^{1/2}\int_y^{1-y}8xy\,dx\,dy = \int_0^{1/2}4y[(1 - y)^2 - y^2]\,dy = \int_0^{1/2}4y(1 - 2y)\,dy = \frac12 - \frac13 = \frac16$$

5. **Note.** X and Y are **not** independent even though f = 8xy "factorises": the support 0 < y < x is not a rectangle, and $f_X f_Y = 16x^3y(1 - y^2) \ne f$.`,
        answer: String.raw`f_X = 4x³, f_Y = 4y(1 − y²); (a) 2(0.09) − 0.0081 = 0.1719; (b) 15/16; (c) ∫₀^{½}∫_y^{1−y}8xy dx dy = 1/6 (X, Y dependent: triangular support).` } ] },
    { id: "practice-multivariate-normal-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P14", label: "", marks: "", topic: "multivariate-normal",
        sub: "Bivariate normal μX = 10, μY = 50, σX² = 9, σY² = 64, ρ = 0.4: P(46 < Y < 58), given X = 13, E and Var", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Conditional distribution lecture, p. 9, Ex-5 (method of Ex-4, pp. 7–8)`,
        text: String.raw`Let X and Y have a bivariate normal distribution with $\mu_X = 10$, $\mu_Y = 50$, $\sigma_X^2 = 9$, $\sigma_Y^2 = 64$, ρ = 0.4. Calculate: (i) P[46 < Y < 58] (ii) P[46 < Y < 58 | X = 13] (iii) E[Y | X = 13] (iv) Var[Y | X = 13]`,
        solution: String.raw`**Given:** $\sigma_X = 3$, $\sigma_Y = 8$, ρ = 0.4.

**Result used (lecture):** $Y|X = x \sim N\left(\mu_Y + \rho\frac{\sigma_Y}{\sigma_X}(x - \mu_X),\ (1 - \rho^2)\sigma_Y^2\right)$.

1. **(i)** Y ~ N(50, 64):
$$P(46 < Y < 58) = P\left(\frac{46 - 50}{8} < Z < \frac{58 - 50}{8}\right) = \Phi(1) - \Phi(-0.5) = 0.8413 - 0.3085 = 0.5328$$

2. **(iii) Conditional mean:**
$$E[Y|X = 13] = 50 + 0.4\cdot\frac83(13 - 10) = 50 + 3.2 = 53.2$$

3. **(iv) Conditional variance:**
$$\mathrm{Var}[Y|X = 13] = (1 - 0.16)(64) = 53.76, \qquad \sigma_{Y|x} = 7.332$$

4. **(ii)**
$$P(46 < Y < 58|X = 13) = P\left(\frac{46 - 53.2}{7.332} < Z < \frac{58 - 53.2}{7.332}\right) = \Phi(0.65) - \Phi(-0.98) = 0.7422 - 0.1635 = 0.5787$$
   (Exact z-values −0.982 and 0.655 give 0.5806 by scipy; table rounding gives 0.579.)`,
        answer: String.raw`(i) Φ(1) − Φ(−0.5) = 0.5328; (iii) E[Y|X = 13] = 53.2; (iv) Var = 0.84 × 64 = 53.76 (σ = 7.33); (ii) Φ(0.65) − Φ(−0.98) ≈ 0.579 (0.5806 exact).` } ] },
    { id: "practice-multivariate-normal-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P15", label: "", marks: "", topic: "multivariate-normal",
        sub: "Bivariate normal μX = 20, μY = 80, σX² = 16, σY² = 144, ρ = 0.5: probabilities and f(y|x = 24)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Conditional distribution lecture, p. 9, Ex-6`,
        text: String.raw`Suppose X and Y follow a bivariate normal distribution with $\mu_X = 20$, $\mu_Y = 80$, $\sigma_X^2 = 16$, $\sigma_Y^2 = 144$, ρ = 0.5. Find (i) P[74 < Y < 92] (ii) P[Y > 92] (iii) P[74 < Y < 92 | X = 24] (iv) the conditional distribution of Y|X = 24, i.e. f(y|24).`,
        solution: String.raw`**Given:** $\sigma_X = 4$, $\sigma_Y = 12$, ρ = 0.5.

1. **(i)** Y ~ N(80, 144): $P(74 < Y < 92) = \Phi(1) - \Phi(-0.5) = 0.8413 - 0.3085 = 0.5328$.

2. **(ii)** $P(Y > 92) = 1 - \Phi(1) = 0.1587$.

3. **(iv) Conditional distribution at x = 24:**
$$\mu_{Y|24} = 80 + 0.5\cdot\frac{12}{4}(24 - 20) = 86, \qquad \sigma_{Y|24}^2 = (1 - 0.25)(144) = 108, \quad \sigma = 10.392$$
$$f(y|24) = \frac{1}{\sqrt{2\pi(108)}}\exp\left[-\frac{(y - 86)^2}{2(108)}\right], \quad -\infty < y < \infty \qquad (Y|X = 24 \sim N(86, 108))$$

4. **(iii)**
$$P(74 < Y < 92|X = 24) = \Phi\left(\frac{92 - 86}{10.392}\right) - \Phi\left(\frac{74 - 86}{10.392}\right) = \Phi(0.58) - \Phi(-1.15) = 0.7190 - 0.1251 = 0.5939$$
   (scipy: 0.5940.)`,
        answer: String.raw`(i) 0.5328; (ii) 0.1587; (iv) Y|X = 24 ~ N(86, 108), f = (2π·108)^{−½}exp[−(y − 86)²/216]; (iii) Φ(0.58) − Φ(−1.15) = 0.594.` } ] },
    { id: "practice-multivariate-normal-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P16", label: "", marks: "", topic: "multivariate-normal",
        sub: "Joint pdf k(4x + y)/(5x³): k = 20/17, P(0 < Y < ½ | X = 2), independence", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Conditional distribution lecture, p. 10, Ex-7 (answers k = 20/17 and 0.4853 confirmed)`,
        text: String.raw`Given $f(x, y) = K\left(\frac{4x + y}{5x^3}\right)$; 1 < x < ∞, 0 < y < 1. (i) Find K (ii) P[0 < Y < ½ | X = 2] (iii) Are X and Y independent?`,
        solution: String.raw`1. **(i) Normalising constant:**
$$\int_1^\infty\int_0^1\frac{4x + y}{5x^3}dy\,dx = \frac15\int_1^\infty\frac{4x + \frac12}{x^3}dx = \frac15\left(4 + \frac14\right) = \frac{17}{20} \;\Rightarrow\; K = \frac{20}{17}$$

2. **Marginal of X:**
$$f(x) = \frac{20}{17}\cdot\frac{4x + \frac12}{5x^3} = \frac{16x + 2}{17x^3}, \quad x > 1$$

3. **Conditional pdf:**
$$f(y|x) = \frac{f(x, y)}{f(x)} = \frac{4x + y}{4x + \frac12} \;\Rightarrow\; f(y|2) = \frac{8 + y}{8.5} = \frac{2(8 + y)}{17}, \quad 0 < y < 1$$

4. **(ii)**
$$P(0 < Y < \tfrac12|X = 2) = \int_0^{1/2}\frac{2(8 + y)}{17}dy = \frac{2}{17}\left(4 + \frac18\right) = \frac{33}{68} = 0.4853$$

5. **(iii)** f(y|x) depends on x, so it is not equal to the marginal $f_Y(y) = \frac{20}{17}\cdot\frac15(4 + \frac y2) = \frac{8 + 2y}{17}$ for all x. Equivalently, $f(x, y) \ne f(x)f(y)$. **X and Y are not independent.**`,
        answer: String.raw`K = 20/17; f(x) = (16x + 2)/(17x³); f(y|2) = 2(8 + y)/17 ⇒ P = 33/68 = 0.4853; f(y|x) depends on x ⇒ not independent.` } ] },
    { id: "practice-multivariate-normal-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P17", label: "", marks: "", topic: "multivariate-normal",
        sub: "Joint pdf ∝ (3x + 2y)/x⁴: marginals, f(y|x), P(0.3 < Y < 0.8 | X = 3), independence", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Conditional distribution lecture, p. 11, Ex-8 (printed constant 8/31 does not normalise; corrected to 6/11)`,
        text: String.raw`Given $f(x, y) = \frac{8(3x + 2y)}{31x^4}$, 1 < x < ∞, 0 < y < 1. Find (i) the marginal distributions of X and Y (ii) f(y|x) (iii) calculate P(0.3 < Y < 0.8 | X = 3) (iv) Are X and Y independent?`,
        solution: String.raw`**Check of the density.** $\int_1^\infty\int_0^1\frac{3x + 2y}{x^4}dy\,dx = \int_1^\infty\frac{3x + 1}{x^4}dx = \frac32 + \frac13 = \frac{11}{6}$. With the printed constant 8/31 the total probability is $\frac{8}{31}\cdot\frac{11}{6} = \frac{44}{93} \ne 1$. The valid density is
$$f(x, y) = \frac{6(3x + 2y)}{11x^4}$$
Parts (ii)–(iv) do not depend on the constant.

1. **(i) Marginals:**
$$f_X(x) = \frac{6}{11x^4}\int_0^1(3x + 2y)\,dy = \frac{6(3x + 1)}{11x^4}, \quad x > 1$$
$$f_Y(y) = \frac{6}{11}\int_1^\infty\left(\frac{3}{x^3} + \frac{2y}{x^4}\right)dx = \frac{6}{11}\left(\frac32 + \frac{2y}{3}\right) = \frac{9 + 4y}{11}, \quad 0 < y < 1$$

2. **(ii) Conditional pdf:**
$$f(y|x) = \frac{f(x, y)}{f_X(x)} = \frac{3x + 2y}{3x + 1}, \quad 0 < y < 1$$

3. **(iii)** At x = 3, f(y|3) = (9 + 2y)/10:
$$P(0.3 < Y < 0.8|X = 3) = \frac{1}{10}\left[9y + y^2\right]_{0.3}^{0.8} = \frac{(7.2 + 0.64) - (2.7 + 0.09)}{10} = \frac{5.05}{10} = 0.505$$

4. **(iv)** f(y|x) depends on x (for x = 3 it is (9 + 2y)/10; for x = 1, (3 + 2y)/4), whereas independence needs f(y|x) = $f_Y(y)$. **X and Y are not independent.**`,
        answer: String.raw`Printed 8/31 gives total 44/93 — normalised f = 6(3x + 2y)/(11x⁴); f_X = 6(3x + 1)/(11x⁴), f_Y = (9 + 4y)/11; f(y|x) = (3x + 2y)/(3x + 1); P(0.3 < Y < 0.8 | X = 3) = 0.505; not independent.` } ] },
    { id: "practice-multivariate-normal-P18", q: 18, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P18", label: "", marks: "(15)", topic: "multivariate-normal",
        sub: "Conditional distribution of X₁ given X₂, X₃ in a trivariate normal (partitioned Σ)", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style extension of Lectures 3–4 Property 4 (conditional distributions of the multivariate normal) using the Σ of Exercise 4`,
        text: String.raw`Let $\mathbf X = (X_1, X_2, X_3)' \sim N_3(\mu, \Sigma)$ with $\mu = (2, 3, 4)'$ and $\Sigma = \begin{pmatrix}2 & -1 & 0\\-1 & 3 & 1\\0 & 1 & 4\end{pmatrix}$.

(i) State the conditional distribution of $\mathbf X_1$ given $\mathbf X_2 = \mathbf x_2$ for a partitioned multivariate normal vector.

(ii) Find the conditional distribution of $X_1$ given $X_2 = x_2$, $X_3 = x_3$, and evaluate it for $x_2 = 4$, $x_3 = 2$.

(iii) Compare $\mathrm{Var}(X_1|x_2, x_3)$ with $\mathrm{Var}(X_1)$ and comment.`,
        solution: String.raw`1. **(i) Result.** Partition $\mathbf X = \begin{pmatrix}\mathbf X_1\\\mathbf X_2\end{pmatrix}$, $\mu = \begin{pmatrix}\mu_1\\\mu_2\end{pmatrix}$, $\Sigma = \begin{pmatrix}\Sigma_{11} & \Sigma_{12}\\\Sigma_{21} & \Sigma_{22}\end{pmatrix}$ with $|\Sigma_{22}| > 0$. Then
$$\mathbf X_1|\mathbf X_2 = \mathbf x_2 \;\sim\; N\left(\mu_1 + \Sigma_{12}\Sigma_{22}^{-1}(\mathbf x_2 - \mu_2),\ \Sigma_{11} - \Sigma_{12}\Sigma_{22}^{-1}\Sigma_{21}\right)$$
   For p = 2 this reduces to the bivariate formula $\mu_Y + \rho\frac{\sigma_Y}{\sigma_X}(x - \mu_X)$ with variance $(1 - \rho^2)\sigma_Y^2$.

2. **(ii) Blocks:** $\Sigma_{11} = 2$, $\Sigma_{12} = (-1, 0)$, $\Sigma_{22} = \begin{pmatrix}3 & 1\\1 & 4\end{pmatrix}$, so $|\Sigma_{22}| = 11$ and $\Sigma_{22}^{-1} = \frac{1}{11}\begin{pmatrix}4 & -1\\-1 & 3\end{pmatrix}$.
$$\Sigma_{12}\Sigma_{22}^{-1} = \frac{1}{11}(-4, 1) = (-0.3636,\ 0.0909)$$
$$E(X_1|x_2, x_3) = 2 - 0.3636(x_2 - 3) + 0.0909(x_3 - 4)$$
$$\mathrm{Var}(X_1|x_2, x_3) = 2 - \frac{1}{11}(-4, 1)\begin{pmatrix}-1\\0\end{pmatrix} = 2 - \frac{4}{11} = \frac{18}{11} = 1.636$$

3. **(ii) At $x_2 = 4$, $x_3 = 2$:**
$$E = 2 - 0.3636(1) + 0.0909(-2) = 2 - 0.3636 - 0.1818 = 1.455, \qquad X_1|x_2, x_3 \sim N(1.455,\ 1.636)$$

4. **(iii) Comment.** The variance drops from 2 to 1.636 (18%). Knowing $X_2$ and $X_3$ reduces the uncertainty about $X_1$, mainly through $X_2$ (σ₁₂ = −1). The conditional variance does **not** depend on the values $x_2$, $x_3$ — a special property of the normal distribution. Although $\sigma_{13}$ = 0, $X_3$ still enters the conditional mean, because it is correlated with $X_2$.`,
        answer: String.raw`X₁|x₂ ~ N(μ₁ + Σ₁₂Σ₂₂⁻¹(x₂ − μ₂), Σ₁₁ − Σ₁₂Σ₂₂⁻¹Σ₂₁); here E = 2 − (4/11)(x₂ − 3) + (1/11)(x₃ − 4), Var = 18/11 = 1.636; at (4, 2): N(1.455, 1.636); variance reduced from 2.` } ] },
    { id: "practice-multivariate-normal-P19", q: 19, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-multivariate-normal-P19", label: "", marks: "(15)", topic: "multivariate-normal",
        sub: "Mahalanobis distance and constant-density ellipses of a bivariate normal (χ² contours)", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem on the quadratic form (x − μ)′Σ⁻¹(x − μ) in the multivariate normal density (Lectures 3–4); population of P9`,
        text: String.raw`For the bivariate normal population of P9 ($\mu_1 = 0$, $\mu_2 = 2$, $\sigma_{11} = 2$, $\sigma_{22} = 1$, $\rho_{12} = 0.5$):

(i) Compute the squared Mahalanobis (statistical) distance of the point $\mathbf x = (1, 3)'$ from μ, and the probability that a random observation lies closer to μ than this point.

(ii) Describe the contour of constant density that contains 95% of the probability: its centre, the directions of its axes and the half-lengths of the axes.`,
        solution: String.raw`1. **Key fact.** For $\mathbf X \sim N_p(\mu, \Sigma)$, the squared Mahalanobis distance $d^2 = (\mathbf X - \mu)'\Sigma^{-1}(\mathbf X - \mu)$ has a $\chi^2_p$ distribution. Density contours are the ellipsoids $d^2 = c^2$, and $P(d^2 \le \chi^2_p(\alpha)) = 1 - \alpha$.

2. **(i) Distance.** $\Sigma = \begin{pmatrix}2 & 0.7071\\0.7071 & 1\end{pmatrix}$, $\Sigma^{-1} = \begin{pmatrix}0.6667 & -0.4714\\-0.4714 & 1.3333\end{pmatrix}$, and $\mathbf x - \mu = (1, 1)'$:
$$d^2 = 0.6667 - 2(0.4714) + 1.3333 = 1.057$$
   Then $P(\chi^2_2 \le 1.057) = 1 - e^{-1.057/2} = 0.411$ (for 2 df, $P(\chi^2_2 \le c) = 1 - e^{-c/2}$; scipy agrees). About 41% of the population is statistically closer to μ than (1, 3). The Euclidean distance √2 = 1.41 ignores the unequal variances and the correlation; d = 1.03 accounts for them.

3. **(ii) Eigen-decomposition of Σ:** $|\Sigma - \lambda I| = \lambda^2 - 3\lambda + 1.5 = 0$ gives $\lambda_1 = 2.366$ and $\lambda_2 = 0.634$. The eigenvectors are $\mathbf e_1 = (0.888, 0.460)'$ (about 27.4° above the $x_1$-axis) and $\mathbf e_2 = (-0.460, 0.888)'$.

4. **95% ellipse:** $(\mathbf x - \mu)'\Sigma^{-1}(\mathbf x - \mu) = \chi^2_2(0.05) = 5.991$ (table, 2 df).
   - Centre: (0, 2).
   - Major axis along $\mathbf e_1$, half-length $\sqrt{5.991 \times 2.366} = 3.77$.
   - Minor axis along $\mathbf e_2$, half-length $\sqrt{5.991 \times 0.634} = 1.95$.

   The positive correlation tilts the ellipse upward to the right. The 50% contour ($\chi^2_2(0.5) = 1.386$) has half-axes 1.81 and 0.94.`,
        answer: String.raw`(i) d² = (1, 1)Σ⁻¹(1, 1)′ = 1.057, P(χ²₂ ≤ 1.057) = 0.411. (ii) λ = 2.366, 0.634, e₁ = (0.888, 0.460)′; 95 % ellipse d² = 5.991 centred at (0, 2), half-axes 3.77 (along e₁) and 1.95 (along e₂).` } ] }
  ]
});
