QB.paper({ year: "Practice", set: "Principal component analysis", date: "", marks: 0, practice: true,
  rules: String.raw`Principal component analysis (lecture notes "Principal Component Analysis"): the derivation of PCs as maximum-variance normalized linear combinations, the worked Problems 1–2 and Exercises 8.1, 8.2, 8.6, 8.7 (covariance- and correlation-based PCs, variance proportions, PC–variable correlations); plus new exam-style problems: PCs and scores from a raw data set, a scree-plot decision for a 3 × 3 correlation matrix, and the covariance-versus-correlation choice. Exercise 8.3 is 2023-24 Q8(b), so it is not repeated.`,
  questions: [
    { id: "practice-pca-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pca-P1", label: "", marks: "", topic: "pca",
        sub: "PCs as maximum-variance normalized linear combinations: the eigenvalue problem and properties", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`PCA notes, pp. 1–5 (definition, objectives, properties of PCs, method of finding PCs)`,
        text: String.raw`Define principal components. Show that the coefficients of the principal components of a random vector $\mathbf X' = [X_1, \dots, X_p]$ with covariance matrix Σ are the eigenvectors of Σ, and that $\mathrm{Var}(Y_i) = \lambda_i$, $\mathrm{Cov}(Y_i, Y_k) = 0$ and $\sum\mathrm{Var}(Y_i) = \mathrm{tr}\,\Sigma$.`,
        solution: String.raw`1. **Definition.** Principal components are **normalized linear combinations** $Y_i = \mathbf l_i'\mathbf X = l_{i1}X_1 + \cdots + l_{ip}X_p$, with $\mathbf l_i'\mathbf l_i = 1$, which are **uncorrelated** and have variances **as large as possible**:
   - $Y_1$ maximises $\mathrm{Var}(\mathbf l_1'\mathbf X)$ subject to $\mathbf l_1'\mathbf l_1 = 1$;
   - $Y_2$ maximises $\mathrm{Var}(\mathbf l_2'\mathbf X)$ subject to $\mathbf l_2'\mathbf l_2 = 1$ and $\mathrm{Cov}(\mathbf l_1'\mathbf X, \mathbf l_2'\mathbf X) = 0$;
   - and so on.

   The constraint is needed because otherwise the variance could be increased without limit by scaling $\mathbf l$.

2. **Lagrange multiplier.** $\mathrm{Var}(\mathbf l'\mathbf X) = \mathbf l'\Sigma\mathbf l$. Maximise $\varphi = \mathbf l'\Sigma\mathbf l - \lambda(\mathbf l'\mathbf l - 1)$:
$$\frac{\partial\varphi}{\partial\mathbf l} = 2\Sigma\mathbf l - 2\lambda\mathbf l = \mathbf 0 \;\Rightarrow\; (\Sigma - \lambda\mathbf I)\mathbf l = \mathbf 0$$
   A non-zero $\mathbf l$ requires the **characteristic equation** $|\Sigma - \lambda\mathbf I| = 0$. So $\mathbf l$ must be an eigenvector of Σ, with eigenvalue λ.

3. **Which eigenvector.** Premultiply by $\mathbf l'$: $\mathbf l'\Sigma\mathbf l = \lambda\mathbf l'\mathbf l = \lambda$. The variance equals the eigenvalue, so it is maximised by the largest eigenvalue $\lambda_1$ with eigenvector $\mathbf e_1$. Requiring zero covariance with $Y_1$ leads to $\mathbf e_2$ (the second largest $\lambda_2$), and so on. With $\lambda_1 \ge \lambda_2 \ge \cdots \ge \lambda_p \ge 0$:
$$Y_i = \mathbf e_i'\mathbf X, \qquad \mathrm{Var}(Y_i) = \mathbf e_i'\Sigma\mathbf e_i = \lambda_i$$

4. **Uncorrelated:** $\mathrm{Cov}(Y_i, Y_k) = \mathbf e_i'\Sigma\mathbf e_k = \lambda_k\mathbf e_i'\mathbf e_k = 0$ for i ≠ k, since the eigenvectors of a symmetric matrix are orthogonal.

5. **Total variance.** Write $\Sigma = \mathbf P\Lambda\mathbf P'$, with $\mathbf P = [\mathbf e_1, \dots, \mathbf e_p]$ orthogonal. Then
$$\sum_i\mathrm{Var}(X_i) = \mathrm{tr}\,\Sigma = \mathrm{tr}(\mathbf P\Lambda\mathbf P') = \mathrm{tr}(\Lambda\mathbf P'\mathbf P) = \sum_i\lambda_i = \sum_i\mathrm{Var}(Y_i)$$
   Also $|\Sigma| = \prod\lambda_i$. The proportion of total variance due to the kth PC is $\lambda_k/\sum\lambda_i$, and the first k PCs explain $(\lambda_1 + \cdots + \lambda_k)/\sum\lambda_i$.

6. **Objectives (notes):** data reduction (a few PCs carry most of the variability) and composite scores.`,
        answer: String.raw`Yᵢ = lᵢ′X with lᵢ′lᵢ = 1, uncorrelated, maximal variance; max l′Σl − λ(l′l − 1) ⇒ (Σ − λI)l = 0 ⇒ l = eigenvector, Var = l′Σl = λ; Yᵢ = eᵢ′X (λ₁ ≥ … ≥ λ_p), Cov(Yᵢ, Yₖ) = λₖeᵢ′eₖ = 0; Σ Var(Yᵢ) = tr Σ = Σλᵢ, |Σ| = Πλᵢ.` } ] },
    { id: "practice-pca-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pca-P2", label: "", marks: "", topic: "pca",
        sub: "Σ = [[1, −2, 0], [−2, 5, 0], [0, 0, 2]]: eigenpairs, PCs, variance explained, |Σ| = Πλ, correlations", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`PCA notes, pp. 6–14, Problem 1 (parts I–VIII)`,
        text: String.raw`Suppose $X_1$, $X_2$ and $X_3$ have the covariance matrix

$$\Sigma = \begin{bmatrix}1 & -2 & 0\\-2 & 5 & 0\\0 & 0 & 2\end{bmatrix}$$

I. Find the eigenvalues and eigenvectors. II. State all the principal components. III. Show that $\mathrm{var}(y_i) = \lambda_i$. IV. Show that principal components are uncorrelated. V. What amount of variation of X can be explained by the first two PCs? VI. Show that $\det(\Sigma) = \prod\lambda_i$. VII. Compute the correlation between PCs and original variables. VIII. Show that $\sum\mathrm{var}(X_i) = \sum\mathrm{var}(y_i)$.`,
        solution: String.raw`1. **I. Characteristic equation:**
$$|\lambda I - \Sigma| = (\lambda - 2)[(\lambda - 1)(\lambda - 5) - 4] = (\lambda - 2)(\lambda^2 - 6\lambda + 1) = 0$$
$$\lambda_1 = 3 + 2\sqrt2 = 5.83, \qquad \lambda_2 = 2, \qquad \lambda_3 = 3 - 2\sqrt2 = 0.17$$

2. **Eigenvectors** ($\Sigma\mathbf e = \lambda\mathbf e$, $\mathbf e'\mathbf e = 1$):
   - For λ₁: $e_{11} - 2e_{12} = 5.83e_{11}$ gives $e_{12} = -2.414e_{11}$, and $e_{13} = 0$. Normalising: $\mathbf e_1 = (0.383, -0.924, 0)'$.
   - For λ₂ = 2: $\mathbf e_2 = (0, 0, 1)'$.
   - For λ₃: $\mathbf e_3 = (0.924, 0.383, 0)'$.

   (Any eigenvector may be multiplied by −1.)

3. **II. Principal components:**
$$Y_1 = 0.383X_1 - 0.924X_2, \qquad Y_2 = X_3, \qquad Y_3 = 0.924X_1 + 0.383X_2$$

4. **III.** $\mathrm{Var}(Y_1) = 0.383^2(1) + 0.924^2(5) + 2(0.383)(-0.924)(-2) = 0.147 + 4.268 + 1.414 = 5.83 = \lambda_1$. Likewise Var(Y₂) = 2 and Var(Y₃) = 0.854 + 0.733 − 1.414 = 0.17 ✓.

5. **IV.** $\mathrm{Cov}(Y_1, Y_3) = \mathbf e_1'\Sigma\mathbf e_3 = \lambda_3\mathbf e_1'\mathbf e_3 = 0.17[(0.383)(0.924) + (-0.924)(0.383)] = 0$. $Y_2$ involves only $X_3$, which is uncorrelated with $X_1$ and $X_2$. So all the PCs are uncorrelated.

6. **V. First two PCs:**
$$\frac{\lambda_1 + \lambda_2}{\lambda_1 + \lambda_2 + \lambda_3} = \frac{5.83 + 2}{8} = 0.979$$
   About 98% of the total variance (the first PC alone explains 72.9%).

7. **VI.** $|\Sigma| = 2(5 - 4) = 2$ and $\lambda_1\lambda_2\lambda_3 = (3 + 2\sqrt2)(2)(3 - 2\sqrt2) = 2(9 - 8) = 2$ ✓.

8. **VII. Correlations** $\rho_{Y_i,X_k} = e_{ik}\sqrt{\lambda_i}/\sqrt{\sigma_{kk}}$:
$$\rho_{Y_1,X_1} = \frac{0.383\sqrt{5.83}}{1} = 0.924, \qquad \rho_{Y_1,X_2} = \frac{-0.924\sqrt{5.83}}{\sqrt5} = -0.997, \qquad \rho_{Y_1,X_3} = 0$$
$$\rho_{Y_2,X_3} = \frac{1 \cdot \sqrt2}{\sqrt2} = 1, \qquad \rho_{Y_2,X_1} = \rho_{Y_2,X_2} = 0$$
   $Y_1$ is essentially (minus) $X_2$ blended with $X_1$; $Y_2$ is exactly $X_3$.

9. **VIII.** $\sum\mathrm{Var}(X_i) = 1 + 5 + 2 = 8$ and $\sum\lambda_i = 5.83 + 2 + 0.17 = 8$ ✓.`,
        answer: String.raw`λ = 5.83, 2, 0.17; e₁ = (0.383, −0.924, 0)′, e₂ = (0, 0, 1)′, e₃ = (0.924, 0.383, 0)′; Y₁ = 0.383X₁ − 0.924X₂, Y₂ = X₃, Y₃ = 0.924X₁ + 0.383X₂; first two PCs explain 7.83/8 = 97.9 %; |Σ| = 2 = Πλ; ρ(Y₁, X₁) = 0.924, ρ(Y₁, X₂) = −0.997, ρ(Y₂, X₃) = 1; Σ Var = 8.` } ] },
    { id: "practice-pca-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pca-P3", label: "", marks: "", topic: "pca",
        sub: "Convert Σ = [[1, 4], [4, 100]] into the correlation matrix ρ", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`PCA notes, p. 14, Problem 2`,
        text: String.raw`Convert the covariance matrix $\Sigma = \begin{bmatrix}1 & 4\\4 & 100\end{bmatrix}$ to a correlation matrix ρ. Why might PCs from ρ differ from those from Σ here?`,
        solution: String.raw`1. **Formula:** $\rho_{ik} = \dfrac{\sigma_{ik}}{\sqrt{\sigma_{ii}}\sqrt{\sigma_{kk}}}$, or in matrix form $\rho = \mathbf V^{-1/2}\Sigma\mathbf V^{-1/2}$ with $\mathbf V^{1/2} = \mathrm{diag}(\sqrt{\sigma_{11}}, \dots)$.

2. **Elements:** $\rho_{11} = \rho_{22} = 1$ and
$$\rho_{12} = \frac{4}{\sqrt1\sqrt{100}} = \frac{4}{10} = 0.4$$

3. **Result:**
$$\rho = \begin{bmatrix}1 & 0.4\\0.4 & 1\end{bmatrix}$$

4. **Comment.** In Σ, $X_2$ has variance 100 against 1, so the first PC of Σ is almost entirely $X_2$: λ₁ = 100.16 with $\mathbf e_1 = (0.040, 0.999)'$, explaining 99% of the variance merely because of the scale. From ρ the PCs are $(Z_1 \pm Z_2)/\sqrt2$, with λ = 1.4 and 0.6, giving both variables equal weight. When variables are measured on very different scales, PCs should be extracted from ρ (standardized variables).`,
        answer: String.raw`ρ₁₂ = 4/(1 × 10) = 0.4 ⇒ ρ = [[1, 0.4], [0.4, 1]]; PCs of Σ would be dominated by X₂ (variance 100), so standardizing (using ρ) is preferable here.` } ] },
    { id: "practice-pca-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pca-P4", label: "", marks: "", topic: "pca",
        sub: "Population PCs of Σ = [[5, 2], [2, 2]] and the share of the first PC", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`PCA notes, pp. 15–16, Exercise 8.1 (Johnson & Wichern Exercise 8.1)`,
        text: String.raw`Determine the population principal components $y_1$ and $y_2$ for the covariance matrix $\Sigma = \begin{bmatrix}5 & 2\\2 & 2\end{bmatrix}$. Also, calculate the proportion of the total population variance explained by the first principal component.`,
        solution: String.raw`1. **Characteristic equation:**
$$|\lambda I - \Sigma| = (\lambda - 5)(\lambda - 2) - 4 = \lambda^2 - 7\lambda + 6 = 0 \;\Rightarrow\; \lambda_1 = 6, \quad \lambda_2 = 1$$

2. **Eigenvector for λ₁ = 6:** $5e_1 + 2e_2 = 6e_1$, so $e_1 = 2e_2$. Normalising: $\mathbf e_1 = (2, 1)'/\sqrt5 = (0.894, 0.447)'$.

3. **Eigenvector for λ₂ = 1:** $5e_1 + 2e_2 = e_1$, so $e_2 = -2e_1$, giving $\mathbf e_2 = (1, -2)'/\sqrt5 = (0.447, -0.894)'$.

4. **Principal components:**
$$y_1 = 0.894X_1 + 0.447X_2, \qquad y_2 = 0.447X_1 - 0.894X_2$$
   with variances 6 and 1.

5. **Proportion explained by $y_1$:**
$$\frac{\lambda_1}{\lambda_1 + \lambda_2} = \frac67 = 0.857$$
   The first PC explains 85.7% of the total variance (= tr Σ = 7).`,
        answer: String.raw`λ² − 7λ + 6 = 0 ⇒ λ = 6, 1; e₁ = (0.894, 0.447)′, e₂ = (0.447, −0.894)′; y₁ = 0.894X₁ + 0.447X₂, y₂ = 0.447X₁ − 0.894X₂; proportion 6/7 = 0.857.` } ] },
    { id: "practice-pca-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pca-P5", label: "", marks: "", topic: "pca",
        sub: "Exercise 8.1 redone from ρ: PCs, proportions, comparison with Σ, and ρ(yᵢ, zₖ)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`PCA notes, pp. 16–18, Exercise 8.2 (Johnson & Wichern Exercise 8.2)`,
        text: String.raw`Convert the covariance matrix in Exercise 8.1 to a correlation matrix ρ.

a) Determine the PCs $y_1$ and $y_2$ from ρ and compute the proportion of total population variance explained by $y_1$.

b) Compare the components calculated in part (a) with those obtained in Exercise 8.1. Are they the same? Should they be?

c) Compute $\rho_{y_1,z_1}$, $\rho_{y_1,z_2}$ and $\rho_{y_2,z_1}$.`,
        solution: String.raw`1. **Correlation matrix.** $\mathbf D = [\mathrm{diag}(\Sigma)]^{-1/2} = \mathrm{diag}(1/\sqrt5, 1/\sqrt2) = \mathrm{diag}(0.4472, 0.7071)$, and $\rho = \mathbf D\Sigma\mathbf D$:
$$\rho_{12} = \frac{2}{\sqrt5\sqrt2} = 0.6325, \qquad \rho = \begin{bmatrix}1 & 0.6325\\0.6325 & 1\end{bmatrix}$$

2. **(a) Eigenvalues.** For a 2 × 2 correlation matrix, $\lambda = 1 \pm \rho_{12}$, so $\lambda_1 = 1.6325$ and $\lambda_2 = 0.3675$, with $\mathbf e_1 = (0.707, 0.707)'$ and $\mathbf e_2 = (0.707, -0.707)'$:
$$y_1 = 0.707Z_1 + 0.707Z_2, \qquad y_2 = 0.707Z_1 - 0.707Z_2$$
   where $Z_1 = (X_1 - \mu_1)/\sqrt5$ and $Z_2 = (X_2 - \mu_2)/\sqrt2$. Proportion explained by $y_1$: $\lambda_1/p = 1.6325/2 = 0.816$.

3. **(b) Comparison.** From Σ, $y_1 = 0.894X_1 + 0.447X_2$ explained 85.7%. From ρ, $y_1$ weights the standardized variables equally and explains 81.6%. **They are not the same, and need not be.** PCs are not invariant to a change of scale: standardizing removes the larger variance of $X_1$ (5 against 2), which gave $X_1$ more weight in the covariance-based PC.

4. **(c) Correlations** $\rho_{y_i,z_k} = e_{ik}\sqrt{\lambda_i}$ (each $z_k$ has variance 1):
$$\rho_{y_1,z_1} = 0.707\sqrt{1.6325} = 0.903, \qquad \rho_{y_1,z_2} = 0.903, \qquad \rho_{y_2,z_1} = 0.707\sqrt{0.3675} = 0.429$$
   (The notes give 0.43 ✓.) $y_1$ is an "overall size" component, equally correlated with both standardized variables.`,
        answer: String.raw`ρ₁₂ = 0.6325; λ = 1.6325, 0.3675; y₁ = 0.707(Z₁ + Z₂), y₂ = 0.707(Z₁ − Z₂); y₁ explains 81.6 % (vs 85.7 % from Σ) — not the same since PCs depend on scale; ρ(y₁, z₁) = ρ(y₁, z₂) = 0.903, ρ(y₂, z₁) = 0.429.` } ] },
    { id: "practice-pca-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pca-P6", label: "", marks: "", topic: "pca",
        sub: "Sales and profits of the 10 largest companies: sample PCs from S, proportion and r(ŷ₁, xₖ)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`PCA notes, pp. 20–22, Exercise 8.6 (Johnson & Wichern Exercise 8.6, data of Example 4.12)`,
        text: String.raw`Data on $x_1$ = sales and $x_2$ = profits for the 10 largest companies in the world give

$$\bar{\mathbf x} = \begin{bmatrix}155.60\\14.70\end{bmatrix}, \qquad \mathbf S = \begin{bmatrix}7476.45 & 303.62\\303.62 & 26.19\end{bmatrix}$$

a. Determine the sample principal components and their variances. b. Find the proportion of the total sample variance explained by $\hat y_1$. c. Compute the correlation coefficients $r_{\hat y_1,x_k}$, k = 1, 2. What interpretation, if any, can you give to the first principal component?`,
        solution: String.raw`1. **(a) Characteristic equation:**
$$(\lambda - 7476.45)(\lambda - 26.19) - 303.62^2 = \lambda^2 - 7502.64\lambda + 103623.1 = 0$$
$$\hat\lambda = \frac{7502.64 \pm \sqrt{7502.64^2 - 4(103623.1)}}{2} \;\Rightarrow\; \hat\lambda_1 = 7488.80, \qquad \hat\lambda_2 = 13.84$$
   (The notes write "λ − 26.91" in one line, a slip for 26.19; their roots are correct.)

2. **Eigenvectors:** for $\hat\lambda_1$, $(7476.45 - 7488.80)e_1 + 303.62e_2 = 0$ gives $e_2 = 0.0407e_1$, so $\hat{\mathbf e}_1 = (0.9992, 0.0407)'$ (≈ (0.999, 0.041)′) and $\hat{\mathbf e}_2 = (-0.041, 0.999)'$.
$$\hat y_1 = 0.999(x_1 - 155.60) + 0.041(x_2 - 14.70), \qquad \hat y_2 = -0.041(x_1 - 155.60) + 0.999(x_2 - 14.70)$$
   with sample variances 7488.80 and 13.84.

3. **(b) Proportion:** $\hat\lambda_1/(\hat\lambda_1 + \hat\lambda_2) = 7488.80/7502.64 = 0.998$.

4. **(c) Correlations** $r_{\hat y_1,x_k} = \hat e_{1k}\sqrt{\hat\lambda_1}/\sqrt{s_{kk}}$:
$$r_{\hat y_1,x_1} = \frac{0.999\sqrt{7488.80}}{\sqrt{7476.45}} = 1.000, \qquad r_{\hat y_1,x_2} = \frac{0.0407\sqrt{7488.80}}{\sqrt{26.19}} = 0.687$$

5. **Interpretation.** $\hat y_1$ is essentially **sales** (correlation 1.00). It explains 99.8% of the variance simply because sales has a far larger variance than profits (7476 against 26). It also carries the moderate sales–profit association (0.69). This PC reflects the scale of measurement rather than structure, so standardizing is advisable (P7).`,
        answer: String.raw`λ̂₁ = 7488.80, λ̂₂ = 13.84; ŷ₁ = 0.999(x₁ − 155.6) + 0.041(x₂ − 14.7), ŷ₂ = −0.041(x₁ − 155.6) + 0.999(x₂ − 14.7); proportion 0.998; r(ŷ₁, x₁) = 1.00, r(ŷ₁, x₂) = 0.69 — ŷ₁ is essentially sales (scale-dominated).` } ] },
    { id: "practice-pca-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pca-P7", label: "", marks: "", topic: "pca",
        sub: "Same companies from the correlation matrix R: PCs, proportion, r(ŷ₁, zₖ), S versus R", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`PCA notes, pp. 23–24, Exercise 8.7 (Johnson & Wichern Exercise 8.7)`,
        text: String.raw`Convert the covariance matrix S in Exercise 8.6 to a sample correlation matrix R. a. Find the sample principal components $\hat y_1$, $\hat y_2$ and their variances. b. Compute the proportion of the total sample variance explained by $\hat y_1$. c. Compute the correlation coefficients $r_{\hat y_1,z_k}$, k = 1, 2. Interpret $\hat y_1$. d. Compare the components obtained in part a with those obtained in Exercise 8.6 a. Is it better to determine principal components from the sample covariance matrix or the sample correlation matrix? Explain.`,
        solution: String.raw`1. **Correlation:** $r_{12} = \dfrac{303.62}{\sqrt{7476.45 \times 26.19}} = \dfrac{303.62}{442.50} = 0.6861$, so $\mathbf R = \begin{bmatrix}1 & 0.6861\\0.6861 & 1\end{bmatrix}$.

2. **(a) Eigenvalues.** For p = 2 equicorrelation, $\hat\lambda_1 = 1 + (p - 1)r = 1.6861$ and $\hat\lambda_2 = 1 - r = 0.3139$, with $\hat{\mathbf e}_1 = (1/\sqrt2, 1/\sqrt2)'$ and $\hat{\mathbf e}_2 = (1/\sqrt2, -1/\sqrt2)'$:
$$\hat y_1 = 0.707z_1 + 0.707z_2, \qquad \hat y_2 = 0.707z_1 - 0.707z_2$$
   Variances 1.686 and 0.314. Check: $\mathrm{Var}(\hat y_1) = 0.5 + 0.5 + 2(0.5)(0.6861) = 1.686$ ✓.

3. **(b) Proportion:** $1.6861/2 = 0.843$.

4. **(c) Correlations:** $r_{\hat y_1,z_k} = 0.707\sqrt{1.6861} = 0.918$ for both k. $\hat y_1$ is an overall **"company size"** index: the sum of standardized sales and profits, equally weighted.

5. **(d) Comparison.**
   - From S: $\hat y_1 \approx$ sales alone, explaining 99.8%, an artefact of the units (sales variance is 285 times the profit variance).
   - From R: both variables contribute equally, and $\hat y_1$ explains a more honest 84.3%.

   Because sales and profits are on very different scales, the **correlation matrix is better** here. Use S only when the variables are commensurate (same units, similar variances).`,
        answer: String.raw`r₁₂ = 0.6861; λ̂ = 1.6861, 0.3139; ŷ₁ = 0.707(z₁ + z₂), ŷ₂ = 0.707(z₁ − z₂); proportion 0.843; r(ŷ₁, z₁) = r(ŷ₁, z₂) = 0.918 (size index); R is preferable to S here because of the very different scales.` } ] },
    { id: "practice-pca-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pca-P8", label: "", marks: "(20)", topic: "pca",
        sub: "PCA of six observations on two variables: S, eigenpairs, proportions and PC scores", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem in the format of 2022-23 Q8(c) with new data (sample covariance with divisor n − 1)`,
        text: String.raw`Calculate the principal components for the following dataset, the proportion of variance each explains, and the PC scores of the observations.

| $x_1$ | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|
| $x_2$ | 3 | 5 | 4 | 7 | 8 | 9 |`,
        solution: String.raw`**Assumptions:** the variables have the same units, so PCA uses the sample covariance matrix S with divisor n − 1 = 5. (With divisor n, all eigenvalues scale by 5/6; the eigenvectors and proportions are unchanged.)

1. **Means and centred data:** $\bar{\mathbf x} = (4.5, 6)'$. Deviations: $x_1$: −2.5, −1.5, −0.5, 0.5, 1.5, 2.5; $x_2$: −3, −1, −2, 1, 2, 3.

2. **Covariance matrix:**
$$s_{11} = \frac{17.5}{5} = 3.5, \qquad s_{22} = \frac{28}{5} = 5.6, \qquad s_{12} = \frac{21}{5} = 4.2, \qquad \mathbf S = \begin{bmatrix}3.5 & 4.2\\4.2 & 5.6\end{bmatrix}$$

3. **Eigenvalues:** $\lambda^2 - 9.1\lambda + (3.5 \times 5.6 - 4.2^2) = \lambda^2 - 9.1\lambda + 1.96 = 0$:
$$\lambda_1 = \frac{9.1 + \sqrt{82.81 - 7.84}}{2} = 8.879, \qquad \lambda_2 = 0.221$$

4. **Eigenvectors:** $(3.5 - 8.879)e_1 + 4.2e_2 = 0$ gives $e_2 = 1.281e_1$, so $\mathbf e_1 = (0.615, 0.788)'$ and $\mathbf e_2 = (0.788, -0.615)'$.
$$\hat y_1 = 0.615(x_1 - 4.5) + 0.788(x_2 - 6), \qquad \hat y_2 = 0.788(x_1 - 4.5) - 0.615(x_2 - 6)$$

5. **Proportions:** $\hat y_1$: 8.879/9.1 = **97.6%**; $\hat y_2$: 2.4%. One component suffices.

6. **Scores** $\hat y_{1j}$: −3.90, −1.71, −1.88, 1.10, 2.50, 3.90. $\hat y_{2j}$: −0.12, −0.57, 0.84, −0.22, −0.05, 0.12. Their sample variances reproduce 8.879 and 0.221, and they are uncorrelated.

![Data, mean and the PC1/PC2 axes](fig/practice-pca-P8-sol.svg)

**Interpretation.** PC1 runs along the main trend of the data (both variables increasing together). PC2 measures small deviations across the trend.`,
        answer: String.raw`x̄ = (4.5, 6)′, S = [[3.5, 4.2], [4.2, 5.6]]; λ = 8.879, 0.221; e₁ = (0.615, 0.788)′, e₂ = (0.788, −0.615)′; PC1 explains 97.6 %; scores ŷ₁ = −3.90, −1.71, −1.88, 1.10, 2.50, 3.90.` } ] },
    { id: "practice-pca-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pca-P9", label: "", marks: "(15)", topic: "pca",
        sub: "3 × 3 correlation matrix: eigenvalues, variance explained, scree plot and number of PCs to retain", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem on choosing the number of components (notes: proportion of variance; Kaiser and scree criteria)`,
        text: String.raw`Three standardized process variables have the sample correlation matrix

$$\mathbf R = \begin{bmatrix}1 & 0.8 & 0.3\\0.8 & 1 & 0.2\\0.3 & 0.2 & 1\end{bmatrix}$$

Its eigenvalues are 1.934, 0.873 and 0.193, with first two eigenvectors $\mathbf e_1 = (0.671, 0.651, 0.355)'$ and $\mathbf e_2 = (-0.182, -0.320, 0.930)'$. (i) Verify that the eigenvalues are consistent with R. (ii) Find the proportion and cumulative proportion of variance explained. (iii) Draw a scree plot and decide how many PCs to retain. (iv) Interpret the retained PCs using their correlations with the variables.`,
        solution: String.raw`1. **(i) Checks.**
   - Trace: 1.934 + 0.873 + 0.193 = 3.000 = tr R ✓.
   - Determinant: 1.934 × 0.873 × 0.193 = 0.326, and $|\mathbf R| = 1 - 0.64 - 0.09 - 0.04 + 2(0.8)(0.3)(0.2) = 0.326$ ✓.
   - $\mathbf R\mathbf e_1 = (0.671 + 0.521 + 0.107,\ 0.537 + 0.651 + 0.071,\ 0.201 + 0.130 + 0.355)' = (1.299, 1.259, 0.686)' = 1.934\mathbf e_1$ ✓.

2. **(ii) Proportions** (total = p = 3):

| PC | λ | proportion | cumulative |
|---|---|---|---|
| 1 | 1.934 | 0.645 | 0.645 |
| 2 | 0.873 | 0.291 | 0.936 |
| 3 | 0.193 | 0.064 | 1.000 |

3. **(iii) Scree plot and retention:**

![Scree plot of the eigenvalues with the Kaiser line λ = 1](fig/practice-pca-P9-scree.svg)

   - **Kaiser rule** (keep λ > 1 for R): 1 component.
   - **Cumulative-variance rule** (≥ 80–90%): 2 components (93.6%).
   - **Scree:** the curve flattens after the second point.

   Recommended: **retain 2 PCs**. They reduce 3 variables to 2 while keeping 94% of the variance, and λ₂ = 0.87 is close to 1.

4. **(iv) Correlations** $r_{y_i,z_k} = e_{ik}\sqrt{\lambda_i}$:
   - $y_1$: 0.671(1.391) = 0.93, 0.651(1.391) = 0.91, 0.355(1.391) = 0.49. An overall component dominated by the strongly correlated $z_1$, $z_2$.
   - $y_2$: −0.182(0.934) = −0.17, −0.320(0.934) = −0.30, 0.930(0.934) = 0.87. Essentially $z_3$, the variable weakly related to the others.`,
        answer: String.raw`tr = 3 and |R| = 0.326 match Σλ and Πλ; proportions 64.5 %, 29.1 %, 6.4 % (cumulative 64.5, 93.6, 100 %); retain 2 PCs (Kaiser gives 1, 90 % rule and scree give 2); y₁ ≈ z₁, z₂ (r 0.93, 0.91), y₂ ≈ z₃ (r 0.87).` } ] },
    { id: "practice-pca-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pca-P10", label: "", marks: "(10)", topic: "pca",
        sub: "Covariance or correlation matrix for PCA? Scale dependence and rules for the number of PCs", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style theory question summarizing Exercises 8.2 and 8.7 of the notes`,
        text: String.raw`(a) Explain why principal components obtained from the covariance matrix generally differ from those obtained from the correlation matrix, and when each should be used. (b) State three criteria for deciding how many principal components to retain.`,
        solution: String.raw`### (a) Σ (or S) versus ρ (or R)
- PCs are **not scale invariant**. Multiplying a variable by a constant (e.g. changing its units) changes its variance and hence the eigenvectors of Σ. Variables with large variances dominate the leading PCs: sales in P6 gave a PC explaining 99.8% that is just "sales".
- Using **ρ** is equivalent to PCA of the standardized variables $Z_k = (X_k - \mu_k)/\sqrt{\sigma_{kk}}$. Every variable then gets equal initial weight, the total variance is p, and $\rho_{y_i,z_k} = e_{ik}\sqrt{\lambda_i}$.
- **Use Σ** when the variables are in the same units with comparable variances, and the variance differences are themselves meaningful (e.g. repeated measurements of one quantity).
- **Use ρ** when units differ or the variances are very unequal (e.g. sales vs profits, temperature vs pressure).
- The two analyses give different eigenvalues and eigenvectors, and there is no simple relation between them. This is why Exercise 8.2's answer to "should they be the same?" is **no**.

### (b) Number of components
1. **Cumulative proportion of variance:** keep the smallest k with $(\lambda_1 + \cdots + \lambda_k)/\sum\lambda_i$ ≥ a target (commonly 80–90%).
2. **Kaiser's rule:** keep components with eigenvalue above the average eigenvalue (λ > 1 for a correlation matrix).
3. **Scree plot:** plot $\lambda_i$ against i and keep the components before the "elbow" where the curve flattens.

Also consider interpretability of the retained PCs, and the rank: if rank(Σ) = r < p, the first r PCs explain all the variance.`,
        answer: String.raw`(a) PCs depend on scale: Σ-based PCs are dominated by large-variance variables; ρ-based PCs use standardized variables (equal weight). Use Σ for commensurate variables, ρ for different units/variances — the results differ and need not agree. (b) cumulative % (80–90 %), Kaiser (λ > average, i.e. > 1 for R), scree-plot elbow (plus interpretability).` } ] }
  ]
});
