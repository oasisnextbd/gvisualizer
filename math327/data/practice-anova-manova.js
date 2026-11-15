QB.paper({ year: "Practice", set: "ANOVA and MANOVA", date: "", marks: 0, practice: true,
  rules: String.raw`One-way ANOVA and MANOVA (lecture notes "Multivariate Analysis of Variance (MANOVA)"). Covered: why one MANOVA beats several ANOVAs; the decomposition T = H + E; Wilks' Λ (by determinants and from the eigenvalues of E⁻¹H), Pillai's trace and the Hotelling–Lawley trace; the F-test chart; the worked Problem 01 and Exercises 1–3 of the notes. Also included are new exam-style problems: a one-way ANOVA table, MANOVA from given SSCP matrices, and a test from the eigenvalue of E⁻¹H. The assumptions of ANOVA vs MANOVA are 2022-23 Q8(a), so they are not repeated as a question. Two slips in the notes are corrected where they occur: the degrees of freedom in Problem 01, and the eigenvalue form of Λ.`,
  questions: [
    { id: "practice-anova-manova-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-anova-manova-P1", label: "", marks: "", topic: "anova-manova",
        sub: "ANOVA vs MANOVA, and why not run separate ANOVAs (Type-I error inflation, correlated responses)", type: "theory", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`MANOVA notes, pp. 1–2`,
        text: String.raw`Distinguish between ANOVA and MANOVA with an example. A researcher has three dependent variables. Why should she not simply run three separate ANOVAs? Compute the overall Type-I error probability when three independent tests are each done at α = 0.05.`,
        solution: String.raw`### ANOVA
- Tests whether the group means (usually of three or more independent groups) differ on **one** continuous dependent variable.
- Example: do three teaching methods affect math test scores?
- $H_0: \mu_1 = \mu_2 = \cdots = \mu_g$, tested with $F = \mathrm{MS}_{\text{between}}/\mathrm{MS}_{\text{within}}$.

### MANOVA
- Tests whether the group **mean vectors** differ on **two or more** continuous dependent variables considered simultaneously.
- Example: do three teaching styles affect math scores, spatial-reasoning scores and anxiety levels altogether?
- $H_0: \mathbf\mu_1 = \mathbf\mu_2 = \cdots = \mathbf\mu_g$, tested with Wilks' Λ (or Pillai, Hotelling–Lawley).

### Why not separate ANOVAs?
1. **Type-I error inflation.** Each test at α = 0.05 has a 5% chance of a false positive. For three independent tests,
$$P(\text{at least one Type-I error}) = 1 - (0.95)^3 = 1 - 0.857 = 0.143$$
   so about **14.3%**, not 5% (and 22.6% for five tests). A single MANOVA keeps this familywise error rate at 5%.
2. **Ignoring relationships between variables.** The dependent variables are usually correlated (high math scores go with high spatial scores). Separate ANOVAs ignore this. MANOVA uses the full covariance structure (the off-diagonal SSCP terms), so it can detect differences between groups that no individual ANOVA shows, and it avoids counting the same effect several times.

After a significant MANOVA, follow-up univariate ANOVAs show which variables contribute to the difference.`,
        answer: String.raw`ANOVA: one continuous DV, H₀: μ₁ = … = μ_g; MANOVA: ≥ 2 DVs jointly, H₀: equal mean vectors. Separate ANOVAs inflate the familywise Type-I error, 1 − 0.95³ = 0.143 (14.3 %), and ignore the correlation between DVs; one MANOVA keeps α = 5 % and uses the covariance structure.` } ] },
    { id: "practice-anova-manova-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-anova-manova-P2", label: "", marks: "", topic: "anova-manova",
        sub: "T = H + E, Wilks' Λ by determinants and by eigenvalues of E⁻¹H, Pillai and Hotelling–Lawley traces, F-test chart", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`MANOVA notes, pp. 5–7 (calculation and importance of Wilks' lambda, F-test chart)`,
        text: String.raw`Define the total, between-group and within-group SSCP matrices of a one-way MANOVA with g groups and p variables. Define Wilks' lambda and show that it can be computed from the eigenvalues of $\mathbf E^{-1}\mathbf H$. Interpret large and small values of Λ, and state Pillai's trace and the Hotelling–Lawley trace. Give the exact F statistics used for p = 2 or 3 with g = 2 or 3.`,
        solution: String.raw`1. **SSCP decomposition.** Let $\mathbf x_{ij}$ be observation j of group i ($n_i$ observations, $N = \sum n_i$), with group means $\bar{\mathbf x}_i$ and grand mean $\bar{\mathbf x}$:
$$\underbrace{\sum_i\sum_j(\mathbf x_{ij} - \bar{\mathbf x})(\mathbf x_{ij} - \bar{\mathbf x})'}_{\mathbf T\ (\text{total})} = \underbrace{\sum_i n_i(\bar{\mathbf x}_i - \bar{\mathbf x})(\bar{\mathbf x}_i - \bar{\mathbf x})'}_{\mathbf H\ (\text{between})} + \underbrace{\sum_i\sum_j(\mathbf x_{ij} - \bar{\mathbf x}_i)(\mathbf x_{ij} - \bar{\mathbf x}_i)'}_{\mathbf E\ (\text{within}) = \sum_i\mathbf E_i}$$
   The diagonal entries are the univariate SS of each variable; the off-diagonal entries are sums of cross-products (SP).

2. **Wilks' lambda:**
$$\Lambda = \frac{|\mathbf E|}{|\mathbf H + \mathbf E|} = \frac{|\mathbf E|}{|\mathbf T|}, \qquad 0 \le \Lambda \le 1$$

3. **Eigenvalue form.** $|\mathbf H + \mathbf E| = |\mathbf E|\,|\mathbf I + \mathbf E^{-1}\mathbf H|$. If $\lambda_1 \ge \cdots \ge \lambda_p$ are the roots of $|\mathbf E^{-1}\mathbf H - \lambda\mathbf I| = 0$, then $\mathbf I + \mathbf E^{-1}\mathbf H$ has eigenvalues $1 + \lambda_i$, so
$$\Lambda = \frac{1}{|\mathbf I + \mathbf E^{-1}\mathbf H|} = \prod_{i=1}^{p}\frac{1}{1 + \lambda_i}$$
   This is a **product**. The notes print $\sum_{i=1}^p\frac{1}{1+\lambda_i}$, which is a slip: a sum could exceed 1. At most $\min(p, g - 1)$ of the $\lambda_i$ are non-zero.

4. **Interpretation.** Λ is the proportion of the generalized (determinant) variation **not** explained by the groups.
   - Λ close to 1: the groups are similar, with no significant difference.
   - Λ close to 0: the mean vectors differ significantly.

5. **Related statistics:**
   - Pillai's trace $V = \sum\frac{\lambda_i}{1 + \lambda_i}$. V = 0 means no group effect; larger V means stronger evidence.
   - Hotelling–Lawley trace $HL = \sum\lambda_i = \mathrm{tr}(\mathbf E^{-1}\mathbf H)$. HL = 0 means no effect; larger HL means a stronger effect.

6. **F-test chart** ($v_H = g - 1$, $v_E = N - g$, $df_1 = p\,v_H$, $df_2 = v_H(v_E - p + 1)$):

| design | F | $df_1$, $df_2$ |
|---|---|---|
| p = 2 or 3, g = 2 | $\dfrac{(1 - \Lambda)/df_1}{\Lambda/df_2}$ | p, $v_E - p + 1$ |
| p = 2 or 3, g = 3 | $\dfrac{(1 - \sqrt\Lambda)/df_1}{\sqrt\Lambda/df_2}$ | 2p, $2(v_E - p + 1)$ |

   Reject $H_0$ if $F_{\text{cal}} > F_{\alpha}(df_1, df_2)$. These F's are exact under multivariate normality with a common Σ.`,
        answer: String.raw`T = H + E (total = between + within SSCP); Λ = |E|/|H + E| = |E|/|T| = Π 1/(1 + λᵢ), λᵢ = eigenvalues of E⁻¹H (product, not sum); Λ ≈ 1 ⇒ no group difference, Λ ≈ 0 ⇒ mean vectors differ; Pillai V = Σ λᵢ/(1 + λᵢ), HL = Σ λᵢ; F = [(1 − Λ)/Λ](df₂/df₁) for g = 2, with √Λ for g = 3; df₁ = p(g − 1), df₂ = (g − 1)(N − g − p + 1).` } ] },
    { id: "practice-anova-manova-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-anova-manova-P3", label: "", marks: "", topic: "anova-manova",
        sub: "Two teaching methods, mathematics and statistics scores (p = 2, g = 2): T, E, H, Λ and F with the correct df", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`MANOVA notes, Problem #01 (pp. P-1 to P-4)`,
        text: String.raw`A researcher wants to determine whether two teaching methods produce different outcomes in mathematics ($x_1$) and statistics ($x_2$). The scores of six students are:

| Method | $x_1$ | $x_2$ |
|---|---|---|
| A | 2 | 3 |
| A | 3 | 2 |
| A | 4 | 4 |
| B | 6 | 5 |
| B | 7 | 6 |
| B | 8 | 7 |

Test at the 5% level whether the mean vectors of the two methods differ.`,
        solution: String.raw`**Hypotheses:** $H_0: \mathbf\mu_A = \mathbf\mu_B$ vs $H_1: \mathbf\mu_A \ne \mathbf\mu_B$, with p = 2, g = 2 and $n_A = n_B = 3$, so N = 6.

1. **Means:** $\bar{\mathbf x}_A = (3, 3)'$, $\bar{\mathbf x}_B = (7, 6)'$, $\bar{\mathbf x} = (5, 4.5)'$.

2. **Total SSCP:**
$$SS(x_1) = 28, \qquad SS(x_2) = 17.5, \qquad SP = 21, \qquad \mathbf T = \begin{bmatrix}28 & 21\\21 & 17.5\end{bmatrix}$$
   (The notes write this as $n\mathbf S_n = 6\begin{bmatrix}4.67 & 3.50\\3.50 & 2.92\end{bmatrix}$.)

3. **Within SSCP:**
$$\mathbf E_A = \begin{bmatrix}2 & 1\\1 & 2\end{bmatrix}, \qquad \mathbf E_B = \begin{bmatrix}2 & 2\\2 & 2\end{bmatrix}, \qquad \mathbf E = \begin{bmatrix}4 & 3\\3 & 4\end{bmatrix}, \qquad \mathbf H = \mathbf T - \mathbf E = \begin{bmatrix}24 & 18\\18 & 13.5\end{bmatrix}$$

4. **Wilks' Λ:** $|\mathbf E| = 16 - 9 = 7$ and $|\mathbf T| = 490 - 441 = 49$, so
$$\Lambda = \frac{7}{49} = \frac17 = 0.1429$$
   Check: $\mathbf E^{-1}\mathbf H$ has eigenvalues 6 and 0, and $1/(1 + 6) = 1/7$ ✓.

5. **Degrees of freedom.** $v_H = g - 1 = 1$. The design has **six** students, three per method, so $v_E = N - g = 6 - 2 = 4$. Then $df_1 = p\,v_H = 2$ and $df_2 = v_H(v_E - p + 1) = 1 \times (4 - 2 + 1) = 3$.

   *Note on the notes:* they take $N = 6 + 6 = 12$, giving $v_E = 10$ and $df_2 = 9$. The table, however, has $n_A = n_B = 3$.

6. **F statistic:**
$$F = \frac{(1 - 0.1429)/2}{0.1429/3} = \frac{0.4286}{0.04762} = 9.00$$
   With $df_2 = 9$ the same formula gives 27.0. The notes' 26.991 comes from rounding Λ.

7. **Decision.** $F_{0.05}(2, 3) = 9.55$. Since 9.00 < 9.55 (p ≈ 0.054), **$H_0$ is not rejected at the 5% level**, although it would be at 10%.

   With only three students per method the test has very little power. The notes' conclusion (reject, using $F_{0.05}(2, 9) = 4.26$) follows only from the larger df.

**Comment.** The separate ANOVAs are $F = 24.0$ for $x_1$ and $F = 13.5$ for $x_2$, both above $F_{0.05}(1, 4) = 7.71$. The groups clearly differ along the direction where $x_1$ and $x_2$ move together, but with N = 6 the multivariate test pays for estimating the full 2 × 2 covariance matrix with only 4 within-group df.`,
        answer: String.raw`T = [[28, 21], [21, 17.5]], E = [[4, 3], [3, 4]], H = [[24, 18], [18, 13.5]]; Λ = 7/49 = 0.143; with N = 6: v_E = 4, df = (2, 3), F = 9.00 < F₀.₀₅(2, 3) = 9.55 ⇒ H₀ not rejected at 5 % (p ≈ 0.054). (The notes' df₂ = 9 uses N = 12 and gives F = 27 > 4.26.)` } ] },
    { id: "practice-anova-manova-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-anova-manova-P4", label: "", marks: "", topic: "anova-manova",
        sub: "Three industrial training programs, two outcomes (p = 2, g = 3): Λ via √Λ F test, follow-up ANOVAs", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`MANOVA notes, Exercise (p. P-5)`,
        text: String.raw`$x_1$ = production efficiency, $x_2$ = quality score. A researcher compares three industrial training programs based on these two outcomes:

| Group | $x_1$ | $x_2$ |
|---|---|---|
| 1 | 0 | 1 |
| 1 | 1 | 2 |
| 1 | 2 | 0 |
| 2 | 2 | 1 |
| 2 | 3 | 2 |
| 2 | 4 | 0 |
| 3 | 1 | 4 |
| 3 | 2 | 5 |
| 3 | 3 | 3 |

Test whether the mean vectors of $x_1$ and $x_2$ are significantly different among the groups at the 5% level of significance.`,
        solution: String.raw`**Hypotheses:** $H_0: \mathbf\mu_1 = \mathbf\mu_2 = \mathbf\mu_3$ vs $H_1$: at least two mean vectors differ. Here p = 2, g = 3, $n_i = 3$ and N = 9.

1. **Means:** $\bar{\mathbf x}_1 = (1, 1)'$, $\bar{\mathbf x}_2 = (3, 1)'$, $\bar{\mathbf x}_3 = (2, 4)'$, $\bar{\mathbf x} = (2, 2)'$.

2. **Within SSCP.** Every group has deviations (−1, 0, 1) in $x_1$ and (0, 1, −1) in $x_2$ about its mean, so
$$\mathbf E_1 = \mathbf E_2 = \mathbf E_3 = \begin{bmatrix}2 & -1\\-1 & 2\end{bmatrix}, \qquad \mathbf E = \begin{bmatrix}6 & -3\\-3 & 6\end{bmatrix}$$

3. **Between SSCP:** $\mathbf H = \sum 3(\bar{\mathbf x}_i - \bar{\mathbf x})(\bar{\mathbf x}_i - \bar{\mathbf x})'$, with deviations (−1, −1), (1, −1) and (0, 2):
$$\mathbf H = 3\begin{bmatrix}1 & 1\\1 & 1\end{bmatrix} + 3\begin{bmatrix}1 & -1\\-1 & 1\end{bmatrix} + 3\begin{bmatrix}0 & 0\\0 & 4\end{bmatrix} = \begin{bmatrix}6 & 0\\0 & 18\end{bmatrix}, \qquad \mathbf T = \begin{bmatrix}12 & -3\\-3 & 24\end{bmatrix}$$
   Check: direct SS of $x_1$ about 2 is 12 ✓.

4. **Wilks' Λ:**
$$\Lambda = \frac{|\mathbf E|}{|\mathbf T|} = \frac{36 - 9}{288 - 9} = \frac{27}{279} = 0.0968, \qquad \sqrt\Lambda = 0.3111$$
   (Eigenvalues of $\mathbf E^{-1}\mathbf H$: 4.431 and 0.903, and $1/(5.431 \times 1.903) = 0.0968$ ✓.)

5. **F test** (p = 2, g = 3): $v_H = 2$, $v_E = 6$, $df_1 = 4$, $df_2 = 2(6 - 2 + 1) = 10$:
$$F = \frac{(1 - 0.3111)/4}{0.3111/10} = \frac{0.1722}{0.03111} = 5.54$$
   $F_{0.05}(4, 10) = 3.48$, and 5.54 > 3.48, so **reject $H_0$** (p ≈ 0.013). The programs differ in their mean (efficiency, quality) vectors.

6. **Follow-up ANOVAs** (diagonals of H and E, df 2 and 6):
   - $x_1$: $F = (6/2)/(6/6) = 3.0$, which is **below** $F_{0.05}(2, 6) = 5.14$.
   - $x_2$: $F = (18/2)/(6/6) = 9.0$, which is significant.

   Program 3 stands out on quality. Programs 1 and 2 differ on efficiency, but $x_1$ alone is not significant. Within each group $x_1$ and $x_2$ are negatively related ($e_{12} = -3$), and MANOVA uses this.

![Scatter of the three programs with their mean vectors](fig/practice-anova-manova-P4-sol.svg)`,
        answer: String.raw`E = [[6, −3], [−3, 6]], H = [[6, 0], [0, 18]], T = [[12, −3], [−3, 24]]; Λ = 27/279 = 0.0968; F = (1 − √Λ)/4 ÷ (√Λ/10) = 5.54 > F₀.₀₅(4, 10) = 3.48 ⇒ reject H₀; follow-up ANOVAs: x₁ F = 3.0 (n.s.), x₂ F = 9.0 (sig.).` } ] },
    { id: "practice-anova-manova-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-anova-manova-P5", label: "", marks: "", topic: "anova-manova",
        sub: "Two catalysts, three responses: yield = conversion − 6 exactly makes |E| = 0; drop the redundant response and test", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`MANOVA notes, Ex. 2 (p. P-6); assumption 5 (absence of multicollinearity), p. 4`,
        text: String.raw`A chemical engineer wants to investigate whether two catalyst types produce different overall process performance. Three responses are measured for each run: $Y_1$ = conversion (%), $Y_2$ = product purity (%) and $Y_3$ = yield (%).

| Catalyst | $Y_1$ | $Y_2$ | $Y_3$ |
|---|---|---|---|
| A | 82 | 91 | 76 |
| A | 85 | 89 | 79 |
| A | 80 | 92 | 74 |
| A | 83 | 90 | 77 |
| A | 86 | 88 | 80 |
| B | 88 | 94 | 82 |
| B | 90 | 96 | 84 |
| B | 87 | 95 | 81 |
| B | 91 | 93 | 85 |
| B | 89 | 97 | 83 |

1. State the null and alternative hypotheses for the MANOVA. 2. Using an appropriate test, test the hypothesis at the 5% level of significance and give your conclusion.`,
        solution: String.raw`1. **Hypotheses:** $H_0: \mathbf\mu_A = \mathbf\mu_B$, i.e. $(\mu_{A1}, \mu_{A2}, \mu_{A3})' = (\mu_{B1}, \mu_{B2}, \mu_{B3})'$, vs $H_1: \mathbf\mu_A \ne \mathbf\mu_B$.

2. **Check the data first.** In **every** run, $Y_3 = Y_1 - 6$ (76 = 82 − 6, 79 = 85 − 6, …, 83 = 89 − 6). Yield carries no information beyond conversion. Its deviations equal those of $Y_1$, so the third row of each SSCP matrix equals the first:
$$|\mathbf E| = 0 \quad\text{and}\quad |\mathbf T| = 0 \;\Rightarrow\; \Lambda = 0/0 \text{ is undefined}$$
   This is the **multicollinearity** assumption of the notes (assumption 5) failing in its most extreme form. The 3-variable MANOVA cannot be computed, so drop the redundant response $Y_3$ and test on $(Y_1, Y_2)$. Then p = 2, g = 2, $n_A = n_B = 5$ and N = 10.

3. **Means:** $\bar{\mathbf y}_A = (83.2, 90.0)'$, $\bar{\mathbf y}_B = (89.0, 95.0)'$, $\bar{\mathbf y} = (86.1, 92.5)'$. (Yield means are 77.2 and 83.0, again conversion − 6.)

4. **SSCP matrices:**
$$\mathbf E_A = \begin{bmatrix}22.8 & -15\\-15 & 10\end{bmatrix}, \qquad \mathbf E_B = \begin{bmatrix}10 & -2\\-2 & 10\end{bmatrix}, \qquad \mathbf E = \begin{bmatrix}32.8 & -17\\-17 & 20\end{bmatrix}$$
$$\mathbf H = \begin{bmatrix}84.1 & 72.5\\72.5 & 62.5\end{bmatrix}, \qquad \mathbf T = \begin{bmatrix}116.9 & 55.5\\55.5 & 82.5\end{bmatrix}$$
   Check: $h_{11} = 5(2.9)^2 \times 2 = 84.1$ ✓.

5. **Wilks' Λ:**
$$|\mathbf E| = 656 - 289 = 367, \qquad |\mathbf T| = 9644.25 - 3080.25 = 6564, \qquad \Lambda = \frac{367}{6564} = 0.0559$$

6. **F test** (p = 2, g = 2): $v_E = 8$, $df_1 = 2$, $df_2 = 1 \times (8 - 2 + 1) = 7$:
$$F = \frac{(1 - 0.0559)/2}{0.0559/7} = \frac{0.4720}{0.007987} = 59.1$$
   $F_{0.05}(2, 7) = 4.74$, so **reject $H_0$** (p ≈ 4 × 10⁻⁵).

7. **Conclusion.** The two catalysts give significantly different mean performance vectors. Catalyst B is higher by about 5.8 points in conversion (and therefore in yield) and 5 points in purity. Separate ANOVAs agree: F = 20.5 and 25.0, against $F_{0.05}(1, 8) = 5.32$.`,
        answer: String.raw`H₀: μ_A = μ_B vs H₁: μ_A ≠ μ_B. Y₃ = Y₁ − 6 in every run ⇒ |E| = |T| = 0, Λ undefined (perfect multicollinearity) — drop Y₃. On (Y₁, Y₂): E = [[32.8, −17], [−17, 20]], T = [[116.9, 55.5], [55.5, 82.5]], Λ = 367/6564 = 0.0559, F(2, 7) = 59.1 > 4.74 ⇒ reject H₀; catalyst B gives higher conversion/yield and purity.` } ] },
    { id: "practice-anova-manova-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-anova-manova-P6", label: "", marks: "", topic: "anova-manova",
        sub: "Three reactor temperatures, three responses (p = 3, g = 3): MANOVA then separate ANOVAs", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`MANOVA notes, Ex. 3 (p. P-7)`,
        text: String.raw`An experiment is conducted to determine whether three reactor-temperature conditions result in different product characteristics.

| Temperature | Yield (%) | Purity (%) | Energy (MJ/kg) |
|---|---|---|---|
| Low | 72 | 88 | 15 |
| Low | 74 | 87 | 16 |
| Low | 70 | 90 | 15 |
| Low | 73 | 89 | 14 |
| Low | 71 | 91 | 16 |
| Medium | 82 | 93 | 18 |
| Medium | 84 | 94 | 19 |
| Medium | 81 | 92 | 17 |
| Medium | 83 | 95 | 18 |
| Medium | 85 | 93 | 19 |
| High | 87 | 89 | 24 |
| High | 89 | 88 | 25 |
| High | 86 | 91 | 23 |
| High | 90 | 87 | 26 |
| High | 88 | 90 | 24 |

1. State the null and alternative hypotheses for the MANOVA. 2. Test the overall MANOVA hypothesis at 5% and interpret the results. 3. If the overall MANOVA is significant, perform separate ANOVAs.`,
        solution: String.raw`1. **Hypotheses:** $H_0: \mathbf\mu_L = \mathbf\mu_M = \mathbf\mu_H$ vs $H_1$: at least two mean vectors are unequal. Here p = 3, g = 3, $n_i = 5$ and N = 15.

2. **Means** (yield, purity, energy):
   - Low: (72, 89, 15.2)
   - Medium: (83, 93.4, 18.2)
   - High: (88, 89, 24.4)
   - Grand: (81, 90.467, 19.267)

3. **Within SSCP:**
$$\mathbf E_L = \begin{bmatrix}10 & -8 & 0\\-8 & 10 & 0\\0 & 0 & 2.8\end{bmatrix}, \quad \mathbf E_M = \begin{bmatrix}10 & 3 & 5\\3 & 5.2 & 1.6\\5 & 1.6 & 2.8\end{bmatrix}, \quad \mathbf E_H = \begin{bmatrix}10 & -9 & 7\\-9 & 10 & -7\\7 & -7 & 5.2\end{bmatrix}$$
$$\mathbf E = \begin{bmatrix}30 & -14 & 12\\-14 & 25.2 & -5.4\\12 & -5.4 & 10.8\end{bmatrix}$$

4. **Between and total:**
$$\mathbf H = \sum 5(\bar{\mathbf x}_i - \bar{\mathbf x})(\bar{\mathbf x}_i - \bar{\mathbf x})' = \begin{bmatrix}670 & 44 & 352\\44 & 64.53 & -23.47\\352 & -23.47 & 220.13\end{bmatrix}, \qquad \mathbf T = \begin{bmatrix}700 & 30 & 364\\30 & 89.73 & -28.87\\364 & -28.87 & 230.93\end{bmatrix}$$

5. **Wilks' Λ:**
$$|\mathbf E| = 3358.8, \qquad |\mathbf T| = 1\,194\,797.6, \qquad \Lambda = \frac{3358.8}{1\,194\,797.6} = 0.002811, \qquad \sqrt\Lambda = 0.05302$$
   (The non-zero eigenvalues of $\mathbf E^{-1}\mathbf H$ are 34.39 and 9.05; $1/(35.39 \times 10.05) = 0.00281$ ✓.)

6. **F test** (p = 3, g = 3): $v_H = 2$, $v_E = 12$, $df_1 = 6$, $df_2 = 2(12 - 3 + 1) = 20$:
$$F = \frac{(1 - 0.05302)/6}{0.05302/20} = \frac{0.15783}{0.002651} = 59.5$$
   $F_{0.05}(6, 20) = 2.60$, so **reject $H_0$** (p ≈ 10⁻¹¹). Temperature has a strong joint effect on the product characteristics: Λ ≈ 0.003, so almost none of the generalized variation is left unexplained.

7. **Separate ANOVAs** (diagonals of H and E; MSB = SSB/2, MSW = SSW/12; $F_{0.05}(2, 12) = 3.89$):

| response | SSB | SSW | MSB | MSW | F |
|---|---|---|---|---|---|
| Yield | 670 | 30 | 335 | 2.5 | 134.0 |
| Purity | 64.53 | 25.2 | 32.27 | 2.1 | 15.37 |
| Energy | 220.13 | 10.8 | 110.07 | 0.9 | 122.3 |

   All three are significant.
   - Yield and energy rise steadily with temperature (72 → 83 → 88 and 15.2 → 18.2 → 24.4).
   - Purity peaks at the medium temperature (93.4, against 89 at both low and high).

   Medium temperature therefore offers the best purity at moderate energy cost. High temperature maximises yield but costs the most energy.`,
        answer: String.raw`H₀: μ_L = μ_M = μ_H; |E| = 3358.8, |T| = 1 194 797.6, Λ = 0.00281, √Λ = 0.0530; F(6, 20) = 59.5 > 2.60 ⇒ reject H₀. ANOVAs (F₀.₀₅(2, 12) = 3.89): yield F = 134.0, purity F = 15.4, energy F = 122.3 — all significant; yield and energy increase with temperature, purity peaks at medium.` } ] },
    { id: "practice-anova-manova-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-anova-manova-P7", label: "", marks: "(15)", topic: "anova-manova",
        sub: "One-way ANOVA table for three drying methods (4 runs each): SS, MS, F and decision", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem: univariate one-way ANOVA (the p = 1 case of the MANOVA decomposition)`,
        text: String.raw`The moisture content (%) of a product dried by three methods was:

| Method | runs |
|---|---|
| A | 12, 15, 14, 13 |
| B | 18, 16, 17, 19 |
| C | 14, 13, 16, 15 |

Construct the one-way ANOVA table and test at the 5% level whether the mean moisture contents differ.`,
        solution: String.raw`**Given:** g = 3, $n_i = 4$, N = 12. **Find:** the ANOVA table and the test of $H_0: \mu_A = \mu_B = \mu_C$.

1. **Totals:** $T_A = 54$, $T_B = 70$, $T_C = 58$, so the grand total G = 182. Also $\sum x^2 = 2810$. The correction factor is $CF = G^2/N = 182^2/12 = 2760.33$.

2. **Sums of squares:**
$$SST = 2810 - 2760.33 = 49.67, \qquad SSB = \frac{54^2 + 70^2 + 58^2}{4} - 2760.33 = 2795 - 2760.33 = 34.67, \qquad SSW = 49.67 - 34.67 = 15.00$$
   These are the scalar versions of T = H + E.

3. **ANOVA table:**

| source | SS | df | MS | F |
|---|---|---|---|---|
| between methods | 34.67 | 2 | 17.33 | 10.40 |
| within (error) | 15.00 | 9 | 1.667 | |
| total | 49.67 | 11 | | |

4. **Decision.** $F_{0.05}(2, 9) = 4.26$. Since 10.40 > 4.26 (p ≈ 0.005), **reject $H_0$**: the drying methods give different mean moisture contents. The means are 13.5, 17.5 and 14.5. Method B leaves the most moisture; A and C are close.

5. **Link to MANOVA.** For p = 1, Wilks' $\Lambda = SSW/SST = 15/49.67 = 0.302$, and the g = 2 or 3 chart reduces to the usual $F = \frac{(1 - \Lambda)/(g - 1)}{\Lambda/(N - g)} = \frac{0.698/2}{0.302/9} = 10.40$ ✓.`,
        answer: String.raw`CF = 2760.33; SST = 49.67, SSB = 34.67, SSW = 15.00; MSB = 17.33 (df 2), MSW = 1.667 (df 9); F = 10.40 > F₀.₀₅(2, 9) = 4.26 ⇒ reject H₀ (means 13.5, 17.5, 14.5; method B differs).` } ] },
    { id: "practice-anova-manova-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-anova-manova-P8", label: "", marks: "(20)", topic: "anova-manova",
        sub: "MANOVA from given E and H (p = 2, g = 3, n = 8 each): Λ two ways, Pillai, Hotelling–Lawley, F test", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem on the statistics of notes pp. 5–7`,
        text: String.raw`Three solvent formulations (8 batches each) are compared on two responses. The within- and between-group SSCP matrices are

$$\mathbf E = \begin{bmatrix}20 & 5\\5 & 15\end{bmatrix}, \qquad \mathbf H = \begin{bmatrix}12 & 9\\9 & 10\end{bmatrix}$$

(i) Compute Wilks' Λ from determinants. (ii) Find the eigenvalues of $\mathbf E^{-1}\mathbf H$ and recompute Λ from them; also find Pillai's trace and the Hotelling–Lawley trace. (iii) Test $H_0: \mathbf\mu_1 = \mathbf\mu_2 = \mathbf\mu_3$ at α = 0.05.`,
        solution: String.raw`1. **(i) Determinants:** $\mathbf T = \mathbf H + \mathbf E = \begin{bmatrix}32 & 14\\14 & 25\end{bmatrix}$, so
$$|\mathbf E| = 300 - 25 = 275, \qquad |\mathbf T| = 800 - 196 = 604, \qquad \Lambda = \frac{275}{604} = 0.4553$$

2. **(ii) Compute $\mathbf E^{-1}\mathbf H$:**
$$\mathbf E^{-1} = \frac{1}{275}\begin{bmatrix}15 & -5\\-5 & 20\end{bmatrix}, \qquad \mathbf E^{-1}\mathbf H = \frac{1}{275}\begin{bmatrix}135 & 85\\120 & 155\end{bmatrix} = \begin{bmatrix}0.4909 & 0.3091\\0.4364 & 0.5636\end{bmatrix}$$

3. **Characteristic equation:** $\lambda^2 - (\mathrm{tr})\lambda + \det = 0$, with $\mathrm{tr} = 1.0545$ and $\det = |\mathbf H|/|\mathbf E| = 39/275 = 0.1418$:
$$\lambda^2 - 1.0545\lambda + 0.1418 = 0 \;\Rightarrow\; \lambda_1 = 0.8963, \qquad \lambda_2 = 0.1582$$

4. **The three statistics:**
$$\Lambda = \frac{1}{(1.8963)(1.1582)} = 0.4553 \ ✓$$
$$V = \frac{0.8963}{1.8963} + \frac{0.1582}{1.1582} = 0.4727 + 0.1366 = 0.6093$$
$$HL = 0.8963 + 0.1582 = 1.0545$$

5. **(iii) F test** (p = 2, g = 3): N = 24, $v_H = 2$, $v_E = 21$, $df_1 = 4$, $df_2 = 2(21 - 2 + 1) = 40$, $\sqrt\Lambda = 0.6748$:
$$F = \frac{(1 - 0.6748)/4}{0.6748/40} = \frac{0.08131}{0.01687} = 4.82$$
   $F_{0.05}(4, 40) = 2.61$, so **reject $H_0$** (p ≈ 0.003). The formulations differ in their mean response vectors. Most of the separation lies along one direction: λ₁ is much larger than λ₂.`,
        answer: String.raw`T = [[32, 14], [14, 25]]; Λ = 275/604 = 0.4553; λ(E⁻¹H) = 0.8963, 0.1582 ⇒ Λ = 1/(1.8963 × 1.1582) = 0.4553, Pillai V = 0.609, HL = 1.0545; F = 4.82 with (4, 40) df > 2.61 ⇒ reject H₀.` } ] },
    { id: "practice-anova-manova-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-anova-manova-P9", label: "", marks: "(10)", topic: "anova-manova",
        sub: "Two groups, three responses: the single eigenvalue of E⁻¹H gives Λ, V, HL and the exact F", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem on the eigenvalue form of Wilks' Λ and the F chart (p = 3, g = 2)`,
        text: String.raw`Two membrane types (8 test cells each) are compared on flux, rejection and fouling rate (p = 3). The only non-zero eigenvalue of $\mathbf E^{-1}\mathbf H$ is 1.25. (i) Why is there only one non-zero eigenvalue? (ii) Find Wilks' Λ, Pillai's trace and the Hotelling–Lawley trace. (iii) Test equality of the mean vectors at the 5% level.`,
        solution: String.raw`1. **(i) Rank.** With g = 2, $\mathbf H = \sum n_i(\bar{\mathbf x}_i - \bar{\mathbf x})(\bar{\mathbf x}_i - \bar{\mathbf x})'$ is built from two deviation vectors, and these sum to zero when weighted by $n_i$. So H has rank 1, and $\mathbf E^{-1}\mathbf H$ has at most $\min(p, g - 1) = 1$ non-zero eigenvalue.

2. **(ii) Statistics** with λ₁ = 1.25 and λ₂ = λ₃ = 0:
$$\Lambda = \frac{1}{1 + 1.25} = 0.4444, \qquad V = \frac{1.25}{2.25} = 0.5556, \qquad HL = 1.25$$

3. **(iii) F test** (p = 3, g = 2): N = 16, $v_H = 1$, $v_E = 14$, $df_1 = 3$, $df_2 = 1 \times (14 - 3 + 1) = 12$:
$$F = \frac{(1 - 0.4444)/3}{0.4444/12} = \frac{0.18519}{0.037037} = 5.00$$
   Equivalently, $F = \lambda_1\,df_2/df_1 = 1.25 \times 12/3 = 5.00$. Since $F_{0.05}(3, 12) = 3.49$ and 5.00 > 3.49 (p ≈ 0.018), **reject $H_0$**: the two membranes differ in mean performance vector.`,
        answer: String.raw`(i) H has rank min(p, g − 1) = 1; (ii) Λ = 1/2.25 = 0.444, V = 0.556, HL = 1.25; (iii) df = (3, 12), F = 5.00 > F₀.₀₅(3, 12) = 3.49 ⇒ reject H₀.` } ] }
  ]
});
