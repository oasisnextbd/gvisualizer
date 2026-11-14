QB.paper({ year: "Practice", set: "Multiple linear regression", date: "", marks: 0, practice: true,
  rules: String.raw`Multiple linear regression (lecture notes "Multiple Linear Regression Analysis"): least-squares estimators for simple and multiple regression, normal equations, the matrix estimator and its unbiasedness, regression from summary statistics and from standardized variables, R² and the decomposition SST = SSR + SSE, and the energy-consumption exercise; plus new exam-style problems on the overall F test, coefficient t tests, a hand matrix computation and interpretation. The notes' quiz-grade problem is 2023-24 Q8(c) and the study-hours dataset is 2022-23 Q7(c), so they are not repeated here.`,
  questions: [
    { id: "practice-regression-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-regression-P1", label: "", marks: "", topic: "regression",
        sub: "Simple linear regression: least-squares estimators β̂₀ and β̂₁", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Regression notes, pp. 1–3 ("Simple linear regression", estimation of parameters)`,
        text: String.raw`For the simple linear regression model $Y_i = \beta_0 + \beta_1X_i + \varepsilon_i$, i = 1, …, n, derive the ordinary least squares (OLS) estimators of $\beta_0$ and $\beta_1$, and write the fitted equation.`,
        solution: String.raw`1. **Model.** Y is the dependent (response) variable, X the independent (explanatory) variable, ε the random error, $\beta_0$ the intercept and $\beta_1$ the regression coefficient (slope).

2. **Least-squares criterion:** choose $\hat\beta_0, \hat\beta_1$ to minimise the error sum of squares
$$S = \sum_{i=1}^n\varepsilon_i^2 = \sum_{i=1}^n(Y_i - \beta_0 - \beta_1X_i)^2$$

3. **Normal equations:**
$$\frac{\partial S}{\partial\beta_0} = -2\sum(Y_i - \beta_0 - \beta_1X_i) = 0 \;\Rightarrow\; \sum Y_i = n\beta_0 + \beta_1\sum X_i$$
$$\frac{\partial S}{\partial\beta_1} = -2\sum X_i(Y_i - \beta_0 - \beta_1X_i) = 0 \;\Rightarrow\; \sum X_iY_i = \beta_0\sum X_i + \beta_1\sum X_i^2$$

4. **Intercept.** Dividing the first equation by n:
$$\hat\beta_0 = \bar Y - \hat\beta_1\bar X$$

5. **Slope.** Substituting into the second equation:
$$\sum X_iY_i = (\bar Y - \hat\beta_1\bar X)n\bar X + \hat\beta_1\sum X_i^2 \;\Rightarrow\; \hat\beta_1 = \frac{\sum X_iY_i - n\bar X\bar Y}{\sum X_i^2 - n\bar X^2} = \frac{\sum(X_i - \bar X)(Y_i - \bar Y)}{\sum(X_i - \bar X)^2} = \frac{S_{XY}}{S_{XX}} = \frac{\mathrm{Cov}(X, Y)}{\mathrm{Var}(X)}$$

6. **Fitted line:** $\hat Y = \hat\beta_0 + \hat\beta_1X$. It passes through $(\bar X, \bar Y)$, and the residuals $e_i = Y_i - \hat Y_i$ sum to zero (first normal equation).`,
        answer: String.raw`Minimise Σ(Yᵢ − β₀ − β₁Xᵢ)² ⇒ normal equations ΣY = nβ₀ + β₁ΣX, ΣXY = β₀ΣX + β₁ΣX² ⇒ β̂₁ = S_XY/S_XX = Cov(X, Y)/Var(X), β̂₀ = Ȳ − β̂₁X̄; Ŷ = β̂₀ + β̂₁X (through (X̄, Ȳ)).` } ] },
    { id: "practice-regression-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-regression-P2", label: "", marks: "", topic: "regression",
        sub: "Two-predictor regression: normal equations and β̂₁, β̂₂ in deviation (s₁₁, s₁₂, …) form", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Regression notes, pp. 4–8 ("Multiple Linear Regression", estimation of parameters)`,
        text: String.raw`For the multiple regression model $Y = \beta_0 + \beta_1X_1 + \beta_2X_2 + \varepsilon$, derive the normal equations by least squares and show that

$$\hat\beta_1 = \frac{S_{1y}S_{22} - S_{2y}S_{12}}{S_{11}S_{22} - S_{12}^2}, \qquad \hat\beta_2 = \frac{S_{2y}S_{11} - S_{1y}S_{12}}{S_{11}S_{22} - S_{12}^2}, \qquad \hat\beta_0 = \bar Y - \hat\beta_1\bar X_1 - \hat\beta_2\bar X_2$$

where $S_{jk} = \sum(X_{ij} - \bar X_j)(X_{ik} - \bar X_k)$ and $S_{jy} = \sum(X_{ij} - \bar X_j)(Y_i - \bar Y)$.`,
        solution: String.raw`1. **Criterion:** minimise $S = \sum_i(Y_i - \beta_0 - \beta_1X_{i1} - \beta_2X_{i2})^2$.

2. **Normal equations** (set the three partial derivatives to zero):
$$\sum Y_i = n\beta_0 + \beta_1\sum X_{i1} + \beta_2\sum X_{i2}$$
$$\sum X_{i1}Y_i = \beta_0\sum X_{i1} + \beta_1\sum X_{i1}^2 + \beta_2\sum X_{i1}X_{i2}$$
$$\sum X_{i2}Y_i = \beta_0\sum X_{i2} + \beta_1\sum X_{i1}X_{i2} + \beta_2\sum X_{i2}^2$$

3. **Eliminate β₀.** The first equation gives $\hat\beta_0 = \bar Y - \hat\beta_1\bar X_1 - \hat\beta_2\bar X_2$. Substituting it into the other two and using $\sum X_{i1}Y_i - n\bar X_1\bar Y = S_{1y}$, etc., gives the **deviation-form normal equations**:
$$S_{11}\hat\beta_1 + S_{12}\hat\beta_2 = S_{1y}, \qquad S_{12}\hat\beta_1 + S_{22}\hat\beta_2 = S_{2y}$$

4. **Solve by Cramer's rule:**
$$\hat\beta_1 = \frac{\begin{vmatrix}S_{1y} & S_{12}\\S_{2y} & S_{22}\end{vmatrix}}{\begin{vmatrix}S_{11} & S_{12}\\S_{12} & S_{22}\end{vmatrix}} = \frac{S_{1y}S_{22} - S_{2y}S_{12}}{S_{11}S_{22} - S_{12}^2}, \qquad \hat\beta_2 = \frac{S_{2y}S_{11} - S_{1y}S_{12}}{S_{11}S_{22} - S_{12}^2}\ \blacksquare$$

5. **With summary statistics** (divide each S by n, or by n − 1 — the ratio is unchanged): $s_{jk} = r_{jk}s_js_k$. Then
$$\hat\beta_1 = \frac{s_y}{s_1}\cdot\frac{r_{1y} - r_{12}r_{2y}}{1 - r_{12}^2}, \qquad \hat\beta_2 = \frac{s_y}{s_2}\cdot\frac{r_{2y} - r_{12}r_{1y}}{1 - r_{12}^2}$$
   This is the form used for problems given only means, standard deviations and correlations (e.g. 2023-24 Q8(c), P4).

6. **Note.** The denominator $S_{11}S_{22} - S_{12}^2 = S_{11}S_{22}(1 - r_{12}^2)$ approaches 0 as the predictors become collinear ($|r_{12}| \to 1$), making the estimates unstable (multicollinearity).`,
        answer: String.raw`Normal equations: ΣY = nβ₀ + β₁ΣX₁ + β₂ΣX₂, ΣX₁Y = β₀ΣX₁ + β₁ΣX₁² + β₂ΣX₁X₂, ΣX₂Y = β₀ΣX₂ + β₁ΣX₁X₂ + β₂ΣX₂²; eliminating β₀: S₁₁β₁ + S₁₂β₂ = S₁y, S₁₂β₁ + S₂₂β₂ = S₂y ⇒ Cramer's rule gives the stated β̂₁, β̂₂; β̂₀ = Ȳ − β̂₁X̄₁ − β̂₂X̄₂.` } ] },
    { id: "practice-regression-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-regression-P3", label: "", marks: "", topic: "regression",
        sub: "OLS assumptions and proof that β̂ = (XᵀX)⁻¹Xᵀy is unbiased", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Regression notes, pp. 10–11 ("Required assumptions of OLS method"; "Show that OLS estimator is an unbiased estimator of β")`,
        text: String.raw`State the assumptions required for the OLS method in the multiple regression model $\mathbf y = \mathbf X\beta + \varepsilon$, and show that the OLS estimator $\hat{\beta} = (\mathbf X'\mathbf X)^{-1}\mathbf X'\mathbf y$ is an unbiased estimator of β. Also find its covariance matrix.`,
        solution: String.raw`**Model:** $\mathbf y$ (n × 1), $\mathbf X$ (n × (k + 1), first column of 1s), β ((k + 1) × 1), ε (n × 1).

### Assumptions
1. **Linearity in the parameters:** $\mathbf y = \mathbf X\beta + \varepsilon$.
2. **Zero mean errors:** $E(\varepsilon_i) = 0$, i.e. $E(\varepsilon) = \mathbf 0$.
3. **Constant variance (homoscedasticity):** $\mathrm{Var}(\varepsilon_i) = \sigma^2$ for all i.
4. **Uncorrelated errors:** $\mathrm{Cov}(\varepsilon_i, \varepsilon_j) = 0$ for i ≠ j. Together with (3), $\mathrm{Cov}(\varepsilon) = \sigma^2\mathbf I$.
5. **Fixed (non-random) regressors**, or regressors uncorrelated with the errors.
6. **No perfect multicollinearity:** X has full column rank, so $\mathbf X'\mathbf X$ is invertible.
7. For tests and intervals: $\varepsilon \sim N_n(\mathbf 0, \sigma^2\mathbf I)$.

### Unbiasedness
1. **Substitute the model** into the estimator:
$$\hat\beta = (\mathbf X'\mathbf X)^{-1}\mathbf X'(\mathbf X\beta + \varepsilon) = (\mathbf X'\mathbf X)^{-1}\mathbf X'\mathbf X\beta + (\mathbf X'\mathbf X)^{-1}\mathbf X'\varepsilon = \beta + (\mathbf X'\mathbf X)^{-1}\mathbf X'\varepsilon$$

2. **Take expectations** (X fixed, $E(\varepsilon) = \mathbf 0$):
$$E(\hat\beta) = \beta + (\mathbf X'\mathbf X)^{-1}\mathbf X'E(\varepsilon) = \beta\ \blacksquare$$

3. **Covariance matrix:**
$$\mathrm{Cov}(\hat\beta) = E[(\hat\beta - \beta)(\hat\beta - \beta)'] = (\mathbf X'\mathbf X)^{-1}\mathbf X'E(\varepsilon\varepsilon')\mathbf X(\mathbf X'\mathbf X)^{-1} = \sigma^2(\mathbf X'\mathbf X)^{-1}$$
   σ² is estimated by $s^2 = \mathrm{SSE}/(n - k - 1)$. Under these assumptions OLS is the best linear unbiased estimator (Gauss–Markov).`,
        answer: String.raw`Assumptions: linear model, E(ε) = 0, Var(εᵢ) = σ², uncorrelated errors (Cov(ε) = σ²I), fixed X of full rank, normal errors for inference. β̂ = β + (X′X)⁻¹X′ε ⇒ E(β̂) = β (unbiased); Cov(β̂) = σ²(X′X)⁻¹.` } ] },
    { id: "practice-regression-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-regression-P4", label: "", marks: "", topic: "regression",
        sub: "200 students: regression of the final score on two quiz scores from summary statistics", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Regression notes, p. 16, Exercise Problem 1 (method of the worked problem on pp. 12–15)`,
        text: String.raw`For 200 students, the following statistics are obtained:

$\bar X_1 = 6.2$, $\bar X_2 = 7.1$, $\bar X_3 = 68.4$; $s_1 = 1.30$, $s_2 = 1.10$, $s_3 = 9.20$; $r_{12} = 0.62$, $r_{13} = 0.71$, $r_{23} = 0.66$

where $X_1$ and $X_2$ are two quiz scores and $X_3$ is the final examination score. (i) Write the multiple regression model (ii) Derive the normal equations (iii) Estimate the predicted equation. (iv) Calculate the predicted final examination score for (a) $X_1 = 8$ and $X_2 = 9$ (b) $X_1 = 5$, $X_2 = 6$.`,
        solution: String.raw`1. **(i) Model:** $X_3 = \beta_0 + \beta_1X_1 + \beta_2X_2 + \varepsilon$.

2. **(ii) Normal equations** (as in P2), in deviation form with $s_{jk} = r_{jk}s_js_k$:
$$s_{11}\hat\beta_1 + s_{12}\hat\beta_2 = s_{13}, \qquad s_{12}\hat\beta_1 + s_{22}\hat\beta_2 = s_{23}, \qquad \hat\beta_0 = \bar X_3 - \hat\beta_1\bar X_1 - \hat\beta_2\bar X_2$$

3. **Variances and covariances** (notes' method):
$$s_{11} = 1.69, \quad s_{22} = 1.21, \quad s_{12} = 0.62(1.30)(1.10) = 0.8866$$
$$s_{13} = 0.71(1.30)(9.20) = 8.4916, \qquad s_{23} = 0.66(1.10)(9.20) = 6.6792$$

4. **(iii) Coefficients:**
$$\hat\beta_1 = \frac{s_{13}s_{22} - s_{23}s_{12}}{s_{11}s_{22} - s_{12}^2} = \frac{8.4916(1.21) - 6.6792(0.8866)}{1.69(1.21) - 0.8866^2} = \frac{10.2748 - 5.9218}{2.0449 - 0.7861} = \frac{4.3530}{1.2588} = 3.458$$
$$\hat\beta_2 = \frac{s_{23}s_{11} - s_{13}s_{12}}{s_{11}s_{22} - s_{12}^2} = \frac{6.6792(1.69) - 8.4916(0.8866)}{1.2588} = \frac{11.2878 - 7.5287}{1.2588} = 2.986$$
$$\hat\beta_0 = 68.4 - 3.458(6.2) - 2.986(7.1) = 68.4 - 21.44 - 21.20 = 25.76$$
$$\boxed{\hat X_3 = 25.76 + 3.458X_1 + 2.986X_2}$$
   Multiple $R^2 = (r_{13}^2 + r_{23}^2 - 2r_{12}r_{13}r_{23})/(1 - r_{12}^2) = 0.583$.

5. **(iv) Predictions:**
   - (a) $\hat X_3 = 25.76 + 3.458(8) + 2.986(9) = 25.76 + 27.66 + 26.88 = 80.3$
   - (b) $\hat X_3 = 25.76 + 3.458(5) + 2.986(6) = 25.76 + 17.29 + 17.92 = 61.0$`,
        answer: String.raw`s₁₂ = 0.8866, s₁₃ = 8.4916, s₂₃ = 6.6792 ⇒ β̂₁ = 3.458, β̂₂ = 2.986, β̂₀ = 25.76: X̂₃ = 25.76 + 3.458X₁ + 2.986X₂ (R² = 0.583); predictions 80.3 (8, 9) and 61.0 (5, 6).` } ] },
    { id: "practice-regression-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-regression-P5", label: "", marks: "", topic: "regression",
        sub: "Correlations only (r₁₃ = 0.75, r₂₃ = 0.65, r₁₂ = 0.50): standardized regression and R²", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Regression notes, pp. 16–17, Exercise Problem 2, and p. 23 (R² for standardized variables)`,
        text: String.raw`Suppose the following correlations are available: $r_{13} = 0.75$, $r_{23} = 0.65$, $r_{12} = 0.50$, where $X_3$ is the response variable. Find the regression equation in standardized form and the coefficient of determination, and interpret. (Since only correlations are given, standardize the variables.)`,
        solution: String.raw`1. **Standardize:** $Z_j = (X_j - \bar X_j)/s_j$. Then every $\bar Z_j = 0$, every $s_{Z_j} = 1$, and $\mathrm{Cov}(Z_j, Z_k) = r_{jk}$.

2. **Model:** $\hat Z_3 = \hat\beta_0 + \hat\beta_1Z_1 + \hat\beta_2Z_2$, with $\hat\beta_0 = \bar Z_3 - \hat\beta_1\bar Z_1 - \hat\beta_2\bar Z_2 = 0$.

3. **Normal equations** become $\hat\beta_1 + r_{12}\hat\beta_2 = r_{13}$ and $r_{12}\hat\beta_1 + \hat\beta_2 = r_{23}$:
$$\hat\beta_1 = \frac{r_{13} - r_{12}r_{23}}{1 - r_{12}^2} = \frac{0.75 - 0.50(0.65)}{1 - 0.25} = \frac{0.425}{0.75} = 0.5667$$
$$\hat\beta_2 = \frac{r_{23} - r_{12}r_{13}}{1 - r_{12}^2} = \frac{0.65 - 0.375}{0.75} = 0.3667$$
$$\boxed{\hat Z_3 = 0.5667Z_1 + 0.3667Z_2}$$

4. **Coefficient of determination** (p. 23):
$$R^2 = \hat\beta_1r_{13} + \hat\beta_2r_{23} = 0.5667(0.75) + 0.3667(0.65) = 0.425 + 0.238 = 0.663$$

5. **Interpretation.**
   - A one-standard-deviation increase in $X_1$ (holding $X_2$ fixed) raises the predicted $X_3$ by 0.57 standard deviations; for $X_2$ the effect is 0.37 SD. So $X_1$ is the more important predictor.
   - About **66.3%** of the variation in $X_3$ is explained by $X_1$ and $X_2$ together; 33.7% is due to other factors.
   - With means and SDs, the coefficients convert back via $\beta_j = \hat\beta_j^{(std)}s_3/s_j$.`,
        answer: String.raw`Ẑ₃ = 0.5667Z₁ + 0.3667Z₂ (β̂₀ = 0); R² = 0.5667(0.75) + 0.3667(0.65) = 0.663 — 66.3 % of the variation in X₃ explained; X₁ has the larger standardized effect.` } ] },
    { id: "practice-regression-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-regression-P6", label: "", marks: "", topic: "regression",
        sub: "Coefficient of determination: SST = SSR + SSE and R² = SSR/SST", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Regression notes, pp. 21–23 ("Coefficient of determination (R²)")`,
        text: String.raw`Define the coefficient of determination $R^2$ for a multiple regression model. Show that the total variation decomposes as SST = SSR + SSE and hence write $R^2$ in terms of these sums of squares. What are the limits of $R^2$ and how is it interpreted?`,
        solution: String.raw`1. **Definition.** $R^2$ measures the proportion of the total variation in the dependent variable that is explained by the regression model:
$$R^2 = \frac{\text{explained variation}}{\text{total variation}}$$

2. **Decomposition of a deviation:** $Y_i - \bar Y = (\hat Y_i - \bar Y) + (Y_i - \hat Y_i) = (\hat Y_i - \bar Y) + e_i$.

3. **Square and sum:**
$$\sum(Y_i - \bar Y)^2 = \sum(\hat Y_i - \bar Y)^2 + \sum e_i^2 + 2\sum(\hat Y_i - \bar Y)e_i$$

4. **The cross term vanishes.** The normal equations give $\sum e_i = 0$ and $\sum X_{ij}e_i = 0$ for each predictor. Since $\hat Y_i = \hat\beta_0 + \sum_j\hat\beta_jX_{ij}$, $\sum\hat Y_ie_i = 0$ and $\bar Y\sum e_i = 0$. Hence
$$\underbrace{\sum(Y_i - \bar Y)^2}_{\text{SST}} = \underbrace{\sum(\hat Y_i - \bar Y)^2}_{\text{SSR}} + \underbrace{\sum(Y_i - \hat Y_i)^2}_{\text{SSE}}$$

5. **Coefficient of determination:**
$$R^2 = \frac{\mathrm{SSR}}{\mathrm{SST}} = 1 - \frac{\mathrm{SSE}}{\mathrm{SST}}, \qquad 0 \le R^2 \le 1$$
   R = √R² is the multiple correlation coefficient, the correlation between Y and Ŷ. For standardized variables with two predictors, $R^2 = \hat\beta_1r_{1y} + \hat\beta_2r_{2y}$.

6. **Interpretation.** R² = 0 means the model explains nothing (the best prediction is $\bar Y$). R² = 1 means a perfect fit (all residuals zero). R² never decreases when a predictor is added, so the **adjusted** $\bar R^2 = 1 - \frac{\mathrm{SSE}/(n - k - 1)}{\mathrm{SST}/(n - 1)}$ is used to compare models with different numbers of predictors.`,
        answer: String.raw`Yᵢ − Ȳ = (Ŷᵢ − Ȳ) + eᵢ; squaring and summing, the cross term Σ(Ŷᵢ − Ȳ)eᵢ = 0 by the normal equations ⇒ SST = SSR + SSE; R² = SSR/SST = 1 − SSE/SST ∈ [0, 1], the fraction of variation explained (adjusted R² penalises extra predictors).` } ] },
    { id: "practice-regression-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-regression-P7", label: "", marks: "", topic: "regression",
        sub: "Daily energy consumption on production level and temperature (8 days): fit, residuals, SSE/SSR/SST, R²", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Regression notes, p. 24, Exercise Problem 1`,
        text: String.raw`The following data represent daily energy consumption, production level, and operating temperature. Fit a multiple linear regression model considering energy consumption as response variable.

| Day | Production | Temperature | Energy consumption |
|---|---|---|---|
| 1 | 20 | 70 | 110 |
| 2 | 25 | 72 | 125 |
| 3 | 30 | 75 | 143 |
| 4 | 35 | 74 | 151 |
| 5 | 40 | 78 | 171 |
| 6 | 45 | 80 | 188 |
| 7 | 50 | 82 | 207 |
| 8 | 55 | 85 | 229 |

(i) Calculate SSE, SSR, SST (ii) Calculate residuals or errors (ε) (iii) Calculate R², and interpret your results.`,
        solution: String.raw`**Given:** n = 8; $X_1$ = production, $X_2$ = temperature, Y = energy consumption. (The notes number the last two days 8 and 8; they are taken as days 7 and 8.)

1. **Means:** $\bar X_1 = 37.5$, $\bar X_2 = 77.0$, $\bar Y = 165.5$.

2. **Corrected sums of squares and products:**
$$S_{11} = 1050, \quad S_{22} = 186, \quad S_{12} = 435, \quad S_{1y} = 3495, \quad S_{2y} = 1468, \quad S_{yy} = \mathrm{SST} = 11728$$

3. **Coefficients** (formulas of P2):
$$\hat\beta_1 = \frac{S_{1y}S_{22} - S_{2y}S_{12}}{S_{11}S_{22} - S_{12}^2} = \frac{3495(186) - 1468(435)}{1050(186) - 435^2} = \frac{650070 - 638580}{195300 - 189225} = \frac{11490}{6075} = 1.8914$$
$$\hat\beta_2 = \frac{S_{2y}S_{11} - S_{1y}S_{12}}{6075} = \frac{1468(1050) - 3495(435)}{6075} = \frac{21075}{6075} = 3.4691$$
$$\hat\beta_0 = 165.5 - 1.8914(37.5) - 3.4691(77) = -172.55$$
$$\boxed{\hat Y = -172.55 + 1.891X_1 + 3.469X_2}$$
   The matrix route, $\hat\beta = (\mathbf X'\mathbf X)^{-1}\mathbf X'\mathbf y$ with $\mathbf X'\mathbf X$ = [[8, 300, 616], [300, 12300, 23535], [616, 23535, 47618]] and $\mathbf X'\mathbf y$ = (1324, 53145, 103416)′, gives the same result.

4. **(ii) Fitted values and residuals** $e_i = Y_i - \hat Y_i$:

| Day | Y | Ŷ | e |
|---|---|---|---|
| 1 | 110 | 108.12 | 1.88 |
| 2 | 125 | 124.51 | 0.49 |
| 3 | 143 | 144.38 | −1.38 |
| 4 | 151 | 150.36 | 0.64 |
| 5 | 171 | 173.70 | −2.70 |
| 6 | 188 | 190.09 | −2.09 |
| 7 | 207 | 206.49 | 0.51 |
| 8 | 229 | 226.35 | 2.65 |

   Σe = 0 ✓.

5. **(i) Sums of squares:**
$$\mathrm{SST} = 11728, \qquad \mathrm{SSE} = \sum e_i^2 = 25.01, \qquad \mathrm{SSR} = \mathrm{SST} - \mathrm{SSE} = 11702.99$$
   Check: $\mathrm{SSR} = \hat\beta_1S_{1y} + \hat\beta_2S_{2y} = 1.8914(3495) + 3.4691(1468) = 11703.0$ ✓.

6. **(iii)**
$$R^2 = \frac{11702.99}{11728} = 0.9979, \qquad \bar R^2 = 1 - \frac{25.01/5}{11728/7} = 0.9970$$

7. **Interpretation.**
   - 99.8% of the day-to-day variation in energy consumption is explained by production level and temperature.
   - Each extra unit of production adds about 1.89 units of energy, and each degree of temperature about 3.47 units, the other variable held fixed.
   - The negative intercept has no physical meaning: it is far outside the data range.
   - Production and temperature are themselves highly correlated (r = 0.984), so the individual coefficients are less precise than the excellent R² suggests.`,
        answer: String.raw`Ŷ = −172.55 + 1.891X₁ + 3.469X₂; residuals 1.88, 0.49, −1.38, 0.64, −2.70, −2.09, 0.51, 2.65; SST = 11728, SSE = 25.01, SSR = 11703.0; R² = 0.998 (adj. 0.997) — fit explains 99.8 % of the variation.` } ] },
    { id: "practice-regression-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-regression-P8", label: "", marks: "(15)", topic: "regression",
        sub: "Energy model: overall F test and t tests of the coefficients at 5 %", type: "numerical", syllabus: "partial", repeats: [],
        origin: "potential", ref: String.raw`Exam-style extension of P7 (tests are in the brief's regression scope but not worked in the notes); F and t table values computed with scipy`,
        text: String.raw`For the energy-consumption regression of P7 (n = 8, k = 2 predictors):

(i) Set up the ANOVA table and test $H_0: \beta_1 = \beta_2 = 0$ at the 5% level.

(ii) Estimate σ² and the standard errors of $\hat\beta_1$ and $\hat\beta_2$, and test each coefficient for significance at the 5% level.

(iii) Comment on the results in the light of the correlation between the predictors.`,
        solution: String.raw`**Given (P7):** SSR = 11703.0, SSE = 25.01, SST = 11728; n − k − 1 = 5.

1. **(i) ANOVA table:**

| Source | SS | df | MS | F |
|---|---|---|---|---|
| Regression | 11703.0 | 2 | 5851.5 | 1169.7 |
| Error | 25.01 | 5 | 5.002 | |
| Total | 11728 | 7 | | |

   The table value is $F_{0.05}(2, 5)$ = 5.79 (scipy: 5.786). Since 1169.7 > 5.79 (p ≈ 2 × 10⁻⁷), **reject H₀**: the regression is highly significant.

2. **(ii) Error variance:** $s^2 = \mathrm{MSE} = 5.002$, s = 2.237.

3. **Standard errors** from $s^2(\mathbf X'\mathbf X)^{-1}$, or in deviation form $\mathrm{Var}(\hat\beta_1) = s^2S_{22}/(S_{11}S_{22} - S_{12}^2)$:
$$\mathrm{se}(\hat\beta_1) = \sqrt{5.002 \times 186/6075} = 0.391, \qquad \mathrm{se}(\hat\beta_2) = \sqrt{5.002 \times 1050/6075} = 0.930$$

4. **t tests** of $H_0: \beta_j = 0$, with critical value $t_{0.025}(5)$ = 2.571:
$$t_1 = \frac{1.891}{0.391} = 4.83, \qquad t_2 = \frac{3.469}{0.930} = 3.73$$
   Both exceed 2.571, so **both predictors are significant** at 5%. (The intercept has t = −3.02.)

5. **(iii) Comment.** The predictors are strongly correlated (r = 0.984), so $S_{11}S_{22} - S_{12}^2$ is small (6075, against $S_{11}S_{22}$ = 195 300). This inflates the standard errors by a factor $1/\sqrt{1 - r_{12}^2} \approx 5.7$. Even so, both effects remain significant because the fit is very tight (s ≈ 2.2). With only 8 points and such collinearity, the separate effects should be interpreted cautiously.`,
        answer: String.raw`F = (11703.0/2)/(25.01/5) = 1169.7 > F₀.₀₅(2, 5) = 5.79 ⇒ regression significant; s² = 5.00, se(β̂₁) = 0.391, se(β̂₂) = 0.930, t = 4.83 and 3.73 > t₀.₀₂₅(5) = 2.571 ⇒ both significant (despite r₁₂ = 0.984).` } ] },
    { id: "practice-regression-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-regression-P9", label: "", marks: "(15)", topic: "regression",
        sub: "Hand computation of β̂ = (XᵀX)⁻¹Xᵀy for five observations and two predictors", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style matrix least-squares computation (notes pp. 8–10; cf. 2022-23 Q7(b)–(c) which uses a different dataset)`,
        text: String.raw`Fit $\hat y = \hat\beta_0 + \hat\beta_1x_1 + \hat\beta_2x_2$ by the matrix method to the data below, showing $\mathbf X'\mathbf X$, its inverse and $\mathbf X'\mathbf y$. Then find the residuals and R².

| $x_1$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $x_2$ | 2 | 1 | 4 | 3 | 5 |
| y | 4 | 5 | 9 | 10 | 13 |`,
        solution: String.raw`1. **Design matrix and response:**
$$\mathbf X = \begin{pmatrix}1 & 1 & 2\\1 & 2 & 1\\1 & 3 & 4\\1 & 4 & 3\\1 & 5 & 5\end{pmatrix}, \qquad \mathbf y = (4, 5, 9, 10, 13)'$$

2. **Cross-products:**
$$\mathbf X'\mathbf X = \begin{pmatrix}5 & 15 & 15\\15 & 55 & 53\\15 & 53 & 55\end{pmatrix}, \qquad \mathbf X'\mathbf y = \begin{pmatrix}41\\146\\144\end{pmatrix}$$

3. **Inverse:** $|\mathbf X'\mathbf X| = 180$. The adjoint (matrix of cofactors, transposed) gives
$$(\mathbf X'\mathbf X)^{-1} = \frac{1}{180}\begin{pmatrix}216 & -30 & -30\\-30 & 50 & -40\\-30 & -40 & 50\end{pmatrix}$$
   For example, cofactor $C_{11} = 55 \times 55 - 53^2 = 216$ and $C_{22} = 5 \times 55 - 225 = 50$.

4. **Estimates:**
$$\hat\beta = \frac{1}{180}\begin{pmatrix}216(41) - 30(146) - 30(144)\\-30(41) + 50(146) - 40(144)\\-30(41) - 40(146) + 50(144)\end{pmatrix} = \frac{1}{180}\begin{pmatrix}156\\310\\130\end{pmatrix} = \begin{pmatrix}0.867\\1.722\\0.722\end{pmatrix}$$
$$\hat y = 0.867 + 1.722x_1 + 0.722x_2$$

5. **Residuals:** fitted values 4.033, 5.033, 8.922, 9.922, 13.089, so e = (−0.033, −0.033, 0.078, 0.078, −0.089); Σe = 0 ✓.
$$\mathrm{SSE} = 0.0222, \qquad \mathrm{SST} = \sum(y - 8.2)^2 = 54.8, \qquad R^2 = 1 - \frac{0.0222}{54.8} = 0.9996$$
   The model fits these data almost perfectly.`,
        answer: String.raw`X′X = [[5, 15, 15], [15, 55, 53], [15, 53, 55]], |X′X| = 180, (X′X)⁻¹ = (1/180)[[216, −30, −30], [−30, 50, −40], [−30, −40, 50]], X′y = (41, 146, 144)′ ⇒ β̂ = (0.867, 1.722, 0.722)′; SSE = 0.022, R² = 0.9996.` } ] },
    { id: "practice-regression-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-regression-P10", label: "", marks: "(10)", topic: "regression",
        sub: "Interpreting regression coefficients, R² vs adjusted R², and multicollinearity", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style theory question built on the interpretation pages of the notes (pp. 20, 23)`,
        text: String.raw`(a) How are the partial regression coefficients of a multiple linear regression model interpreted? (b) Why is adjusted R² preferred to R² when comparing models? (c) What is multicollinearity, how can it be detected, and what are its consequences for the least-squares estimates?`,
        solution: String.raw`### (a) Coefficients
- $\hat\beta_j$ is the estimated change in the mean response for a **one-unit increase in $X_j$ with all other predictors held constant** (a partial effect). Its sign gives the direction. For example, in the energy model of P7, each extra unit of production adds 1.89 units of energy at fixed temperature.
- $\hat\beta_0$ is the predicted response when all predictors are zero. It is often meaningless if zero lies outside the data range.
- Standardized coefficients (P5) measure effects in SD units and allow predictors on different scales to be compared.

### (b) Adjusted R²
- R² = 1 − SSE/SST never decreases when a variable is added, even a useless one, so it always favours bigger models.
- $\bar R^2 = 1 - \dfrac{\mathrm{SSE}/(n - k - 1)}{\mathrm{SST}/(n - 1)} = 1 - (1 - R^2)\dfrac{n - 1}{n - k - 1}$ penalises each extra parameter. It rises only if the new variable reduces the error mean square, so it is the fairer basis for comparing models with different k.

### (c) Multicollinearity
- **Definition:** strong linear relationships among the predictors (e.g. production and temperature in P7, r = 0.98). Perfect multicollinearity makes $\mathbf X'\mathbf X$ singular, so β̂ does not exist.
- **Detection:** large pairwise correlations; variance inflation factors $\mathrm{VIF}_j = 1/(1 - R_j^2)$ > 5–10; a near-zero $|\mathbf X'\mathbf X|$; coefficients with "wrong" signs; a large overall F with non-significant individual t's.
- **Consequences:** the estimates remain unbiased but have **large variances** ($\mathrm{Var}(\hat\beta_j) \propto 1/(1 - R_j^2)$). They are unstable from sample to sample, sensitive to small data changes, and individual effects are hard to separate. Predictions within the data range can still be good.
- **Remedies:** drop or combine variables, collect more varied data, centre the predictors, or use principal-component (or ridge) regression.`,
        answer: String.raw`(a) β̂ⱼ = change in mean Y per unit Xⱼ with other X's fixed; β̂₀ at all X = 0. (b) R² never falls when variables are added; adjusted R² = 1 − (1 − R²)(n − 1)/(n − k − 1) penalises parameters. (c) Multicollinearity: near-linear dependence among X's (detect via r, VIF, small |X′X|); unbiased but high-variance, unstable estimates; remedies: drop/combine variables, more data, PCA/ridge.` } ] }
  ]
});
