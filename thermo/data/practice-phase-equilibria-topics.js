QB.paper({ year: "Practice", set: "Topics in phase equilibria", date: "", marks: 0, practice: true,
  rules: String.raw`Topics in phase equilibria (SVNA ch. 14; Dr. Kawnish Kirtania): stability applied to a G^E model and the symmetric LLE equations from the slides, SVNA chapter-14 problems not already set in past papers (14.14, 14.15, 14.19, 14.20, 14.22–14.24, 14.26, 14.31, 14.44: stability bounds, Margules parameters from mutual solubilities, distribution of a solute between immiscible solvents, VLLE of immiscible and partially miscible systems, solid/liquid rules of thumb, osmotic virial coefficient), and new exam-style problems on solid/vapour equilibrium with the enhancement factor, ideal solubility and eutectics, osmotic pressure, Langmuir adsorption and the VLE stability criteria.`,
  questions: [
    { id: "practice-phase-equilibria-topics-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P1", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Stability of a binary liquid with G^E/RT = A x₁x₂: phase splitting for A > 2", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, Topics in Phase Equilibria, slides 9–17 (ΔG of mixing < 0 and the stability criterion $d^2(\Delta G/RT)/dx_1^2 > 0$)`,
        text: String.raw`For a binary liquid described by $G^E/RT = Ax_1x_2$ at fixed T and P:

(a) Write $\Delta G/RT$ for mixing and apply the stability criterion $d^2(\Delta G/RT)/dx_1^2 > 0$.

(b) Find the critical value of A above which the liquid splits into two phases, and the critical composition.

(c) Sketch ΔG/RT against $x_1$ for A = 1, 2, 2.5 and 3 and explain how the coexisting phases are located.`,
        solution: String.raw`1. **(a) Mixing Gibbs energy:** $\Delta G = G^E + RT\sum x_i\ln x_i$, so
$$\frac{\Delta G}{RT} = x_1\ln x_1 + x_2\ln x_2 + Ax_1x_2$$
   Differentiating twice ($dx_2 = -dx_1$):
$$\frac{d(\Delta G/RT)}{dx_1} = \ln\frac{x_1}{x_2} + A(1 - 2x_1), \qquad \frac{d^2(\Delta G/RT)}{dx_1^2} = \frac{1}{x_1x_2} - 2A$$
   Stability requires $\frac{1}{x_1x_2} - 2A > 0$, i.e. $A < \dfrac{1}{2x_1x_2}$.

2. **(b) Critical point.** $1/(x_1x_2)$ has its minimum value 4 at $x_1 = 0.5$. So for A < 2 the curvature is positive at every composition and the liquid is stable everywhere. For A > 2 there is a band around $x_1 = 0.5$ with negative curvature (unstable): the liquid splits. **Critical A = 2, at $x_1^c = 0.5$** (an upper critical solution point if A decreases with T). At equimolar composition this corresponds to $G^E/RT = 2/4 = 0.5$.

3. **(c) Diagram:**

![ΔG/RT versus x₁ for A = 1, 2, 2.5 and 3; for A > 2 the curve has two minima and a common tangent fixes the coexisting liquids](fig/practice-phase-equilibria-topics-P1-sol.svg)

   - A = 1: single minimum, concave upward everywhere: one stable liquid at all compositions.
   - A = 2: the curve is flat at $x_1$ = 0.5 (critical).
   - A = 2.5 and 3: two minima. A **common tangent** touches the curve at the two coexisting compositions (the binodal). For a symmetric G^E it is horizontal, and the binodal points satisfy $\ln[x_1/(1 - x_1)] = A(2x_1 - 1)$: $x_1^\alpha$ = 0.145 and 0.855 for A = 2.5; 0.071 and 0.929 for A = 3. Any overall composition between them lowers its G by splitting into these two liquids (lever rule). Between the inflection points (spinodal, $x_1x_2 = 1/2A$) the single liquid is unstable; between spinodal and binodal it is metastable.

**Result:** stable everywhere if A < 2; phase splitting for A > 2; critical point A = 2, $x_1$ = 0.5.`,
        answer: String.raw`ΔG/RT = x₁ln x₁ + x₂ln x₂ + Ax₁x₂; d²(ΔG/RT)/dx₁² = 1/(x₁x₂) − 2A > 0 ⇒ stable if A < 1/(2x₁x₂); min of 1/(x₁x₂) = 4 ⇒ split for A > 2 (critical A = 2, x₁ = 0.5). Coexisting phases from the common tangent: 0.145/0.855 (A = 2.5).` } ] },
    { id: "practice-phase-equilibria-topics-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P2", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Symmetric LLE from x^α γ^α = x^β γ^β with ln γ = A x²: compositions for A = 2.25, 2.5 and 3", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, slides 28–29 ("Liquid-Liquid Equilibrium": $\hat f_i^\alpha = \hat f_i^\beta$, $x_i^\alpha\gamma_i^\alpha = x_i^\beta\gamma_i^\beta$); SVNA §14.4`,
        text: String.raw`Two liquid phases α and β of the same binary are in equilibrium at T and P.

(a) Starting from $\hat f_i^\alpha = \hat f_i^\beta$, show that $x_i^\alpha\gamma_i^\alpha = x_i^\beta\gamma_i^\beta$.

(b) For $G^E/RT = Ax_1x_2$ (ln γ₁ = A x₂², ln γ₂ = A x₁²) show that $x_1^\beta = 1 - x_1^\alpha$ and that $x_1^\alpha$ satisfies $\ln[x_1^\alpha/(1 - x_1^\alpha)] = A(2x_1^\alpha - 1)$.

(c) Calculate the compositions of the two phases for A = 2.25, 2.5 and 3.0.`,
        solution: String.raw`1. **(a) Equilibrium.** At the same T and P, each species has equal fugacity in both liquids: $\hat f_i^\alpha = \hat f_i^\beta$. With activity coefficients, $\hat f_i = x_i\gamma_if_i$, where $f_i$ is the fugacity of pure liquid i at T and P, the same for both phases. It cancels:
$$x_i^\alpha\gamma_i^\alpha = x_i^\beta\gamma_i^\beta \qquad (i = 1, 2)$$

2. **(b) Symmetric model.** The equations are
$$x_1^\alpha e^{A(x_2^\alpha)^2} = x_1^\beta e^{A(x_2^\beta)^2}, \qquad x_2^\alpha e^{A(x_1^\alpha)^2} = x_2^\beta e^{A(x_1^\beta)^2}$$
   They are symmetric in 1 ↔ 2, so the solution satisfies $x_1^\beta = x_2^\alpha$, i.e. $x_1^\beta = 1 - x_1^\alpha$. Substituting into the first equation, with $x = x_1^\alpha$:
$$\ln x + A(1 - x)^2 = \ln(1 - x) + Ax^2 \;\Rightarrow\; \ln\frac{x}{1 - x} = A(2x - 1)$$
   x = 0.5 is always a (trivial) root; a second root with x < 0.5 exists only when A > 2 (the slope of the right side at 0.5, 2A, must exceed that of the left side, 4).

3. **(c) Solve** (trial or Newton on $F(x) = \ln[x/(1 - x)] - A(2x - 1)$):

| A | $x_1^\alpha$ | $x_1^\beta$ | $\gamma_1^\alpha = e^{A(x_2^\alpha)^2}$ |
|---|---|---|---|
| 2.25 | 0.2244 | 0.7756 | 3.87 |
| 2.5 | 0.1448 | 0.8552 | 6.22 |
| 3.0 | 0.0707 | 0.9293 | 13.34 |

   Check for A = 2.5: ln(0.1448/0.8552) = −1.776 and 2.5(2 × 0.1448 − 1) = −1.776 ✓.

4. **Comment.** The miscibility gap widens rapidly as A grows beyond 2. If A falls with T (as for many systems with positive $H^E$), the gap closes at the temperature where A = 2: the upper critical solution temperature.

**Result:** α/β compositions 0.224/0.776 (A = 2.25), 0.145/0.855 (A = 2.5), 0.071/0.929 (A = 3).`,
        answer: String.raw`f̂ᵢ^α = f̂ᵢ^β with f̂ᵢ = xᵢγᵢfᵢ ⇒ xᵢ^αγᵢ^α = xᵢ^βγᵢ^β. Symmetric model ⇒ x₁^β = 1 − x₁^α and ln[x/(1 − x)] = A(2x − 1): x₁^α = 0.224 (A = 2.25), 0.145 (2.5), 0.071 (3.0).` } ] },
    { id: "practice-phase-equilibria-topics-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P3", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Upper bound G^E < RT ln 2 for a stable equimolar binary (RT ln N for N species)", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 14.14 (p. 585)`,
        text: String.raw`An absolute upper bound on $G^E$ for stability of an equimolar binary mixture is $G^E = RT\ln 2$. Develop this result. What is the corresponding bound for an equimolar mixture containing N species?`,
        solution: String.raw`1. **Necessary condition.** A homogeneous mixture cannot be stable if its Gibbs energy is higher than that of the unmixed pure species at the same T and P, because the system could then lower G by separating into the pure liquids (an extreme form of phase splitting). So stability requires
$$\Delta G = G - \sum_i x_iG_i < 0$$

2. **ΔG in terms of $G^E$:** $\Delta G = G^E + RT\sum_i x_i\ln x_i$. Hence
$$G^E < -RT\sum_i x_i\ln x_i$$

3. **Equimolar binary** ($x_1 = x_2 = \tfrac12$): $-\sum x_i\ln x_i = -2(\tfrac12\ln\tfrac12) = \ln 2$, so
$$G^E < RT\ln 2 = 0.693RT$$

4. **Equimolar N-component mixture** ($x_i = 1/N$): $-\sum x_i\ln x_i = -N\cdot\frac1N\ln\frac1N = \ln N$, so
$$G^E < RT\ln N$$

5. **Why it is only an upper bound.** ΔG < 0 is necessary but not sufficient: the stricter condition is $d^2(\Delta G/RT)/dx_1^2 > 0$, which rules out splitting into two liquids of intermediate compositions. For $G^E/RT = Ax_1x_2$, splitting already occurs for $G^E/RT$ (equimolar) = A/4 > 0.5 (Problem 14.19), below the bound ln 2 = 0.693.`,
        answer: String.raw`Stability needs ΔG = G^E + RTΣxᵢ ln xᵢ < 0 ⇒ G^E < −RTΣxᵢ ln xᵢ; equimolar binary: G^E < RT ln 2; N species: G^E < RT ln N (necessary, not sufficient).` } ] },
    { id: "practice-phase-equilibria-topics-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P4", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Margules A₁₂ and A₂₁ from mutual solubility data at 298.15 K: three data sets", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 14.15 (pp. 585–586)`,
        text: String.raw`A binary liquid system exhibits LLE at 298.15 K (25°C). Determine from each of the following sets of miscibility data estimates for parameters $A_{12}$ and $A_{21}$ in the Margules equation at 298.15 K (25°C):

(a) $x_1^\alpha$ = 0.10, $x_1^\beta$ = 0.90; (b) $x_1^\alpha$ = 0.20, $x_1^\beta$ = 0.90; (c) $x_1^\alpha$ = 0.10, $x_1^\beta$ = 0.80.`,
        solution: String.raw`**Equations:** LLE, $x_i^\alpha\gamma_i^\alpha = x_i^\beta\gamma_i^\beta$, gives
$$\ln\gamma_1^\alpha - \ln\gamma_1^\beta = \ln\frac{x_1^\beta}{x_1^\alpha}, \qquad \ln\gamma_2^\alpha - \ln\gamma_2^\beta = \ln\frac{x_2^\beta}{x_2^\alpha}$$
   Margules: $\ln\gamma_1 = x_2^2[A_{12} + 2(A_{21} - A_{12})x_1] = A_{12}x_2^2(1 - 2x_1) + 2A_{21}x_1x_2^2$ and $\ln\gamma_2 = A_{21}x_1^2(1 - 2x_2) + 2A_{12}x_2x_1^2$. Both are **linear** in $A_{12}$, $A_{21}$, so the two LLE equations are two linear equations.

1. **Coefficients** $c_{12}(x) = x_2^2(1 - 2x_1)$, $c_{21}(x) = 2x_1x_2^2$ for ln γ₁, and $d_{21}(x) = x_1^2(1 - 2x_2)$, $d_{12}(x) = 2x_2x_1^2$ for ln γ₂. The system is
$$[c_{12}^\alpha - c_{12}^\beta]A_{12} + [c_{21}^\alpha - c_{21}^\beta]A_{21} = \ln(x_1^\beta/x_1^\alpha)$$
$$[d_{12}^\alpha - d_{12}^\beta]A_{12} + [d_{21}^\alpha - d_{21}^\beta]A_{21} = \ln(x_2^\beta/x_2^\alpha)$$

2. **(a) 0.10/0.90** (symmetric). By symmetry $A_{12} = A_{21} = A$ with $\ln(x/(1 - x)) = A(2x - 1)$: $\ln(1/9) = -0.8A$, so **A₁₂ = A₂₁ = 2.747**.

3. **(b) 0.20/0.90.** Coefficients: α: $c_{12}$ = 0.384, $c_{21}$ = 0.256, $d_{12}$ = 0.064, $d_{21}$ = −0.024; β: $c_{12}$ = −0.008, $c_{21}$ = 0.018, $d_{12}$ = 0.162, $d_{21}$ = 0.648.
$$0.392A_{12} + 0.238A_{21} = \ln 4.5 = 1.5041, \qquad -0.098A_{12} - 0.672A_{21} = \ln(0.125) = -2.0794$$
   Solving: **A₁₂ = 2.148, A₂₁ = 2.781**.

4. **(c) 0.10/0.80** is the mirror image of (b) (interchange 1 and 2), so **A₁₂ = 2.781, A₂₁ = 2.148**.

5. **Check (b):** $\ln\gamma_1^\alpha = 0.384(2.148) + 0.256(2.781) = 1.537$ and $\ln\gamma_1^\beta = -0.008(2.148) + 0.018(2.781) = 0.033$: $0.2e^{1.537} = 0.930 = 0.9e^{0.033}$ ✓.

**Result:** (a) 2.747, 2.747; (b) A₁₂ = 2.148, A₂₁ = 2.781; (c) A₁₂ = 2.781, A₂₁ = 2.148. The narrower the solubility gap on one side, the larger the parameter that controls that side.`,
        answer: String.raw`LLE equations are linear in A₁₂, A₂₁ for Margules. (a) A₁₂ = A₂₁ = 2.747; (b) A₁₂ = 2.148, A₂₁ = 2.781; (c) A₁₂ = 2.781, A₂₁ = 2.148.` } ] },
    { id: "practice-phase-equilibria-topics-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P5", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Why G^E of at least 0.5RT is needed for liquid/liquid splitting in a binary", type: "theory", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 14.19 (p. 586)`,
        text: String.raw`It has been suggested that a value for $G^E$ of at least 0.5 RT is required for liquid/liquid phase splitting in a binary system. Offer some justification for this statement.`,
        solution: String.raw`1. **Stability criterion:** a binary liquid is stable when
$$\frac{d^2(\Delta G/RT)}{dx_1^2} = \frac{1}{x_1x_2} + \frac{d^2(G^E/RT)}{dx_1^2} > 0$$
   Splitting needs the curvature of $G^E/RT$ to be more negative than $-1/(x_1x_2)$ somewhere, and $1/(x_1x_2) \ge 4$.

2. **Simplest model.** For $G^E/RT = Ax_1x_2$, $d^2(G^E/RT)/dx_1^2 = -2A$, so instability requires $2A > 1/(x_1x_2)$, first possible at $x_1 = 0.5$ when A > 2. At $x_1 = 0.5$, $G^E/RT = A/4$, so the threshold is
$$\left(\frac{G^E}{RT}\right)_{x_1 = 0.5} = \frac{2}{4} = 0.5$$

3. **General argument.** $G^E$ is zero at both pure-component ends. A curvature of about −4 over the whole composition range (as needed near $x_1$ = 0.5) produces a hump whose height is about $\tfrac12\times 4 \times (0.5)^2 = 0.5$ in units of RT. Unsymmetrical models (Margules with $A_{12} \ne A_{21}$, van Laar, NRTL) give similar thresholds, of order 0.5RT at the maximum of $G^E$.

4. **Hence** a maximum $G^E$ of roughly 0.5RT (about 1.2 kJ/mol at 298 K) is the practical threshold. Systems with smaller positive deviations (e.g. most hydrocarbon pairs) are completely miscible; strongly non-ideal pairs (water/hydrocarbon, water/n-butanol) exceed it and split. The bound is a guide, not an exact law, because the shape of $G^E$ matters.`,
        answer: String.raw`d²(G^E/RT)/dx₁² must be < −1/(x₁x₂) ≤ −4 somewhere; for G^E/RT = Ax₁x₂ this needs A > 2, i.e. G^E/RT(x₁ = 0.5) = A/4 > 0.5. A G^E hump of about 0.5RT is therefore the threshold for splitting.` } ] },
    { id: "practice-phase-equilibria-topics-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P6", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Distribution of solute 1 between immiscible liquids 2 and 3 (1 mol each): phase compositions", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 14.20 (p. 586)`,
        text: String.raw`Pure liquid species 2 and 3 are for practical purposes immiscible in one another. Liquid species 1 is soluble in both liquid 2 and liquid 3. One mole each of liquids 1, 2, and 3 are shaken together to form an equilibrium mixture of two liquid phases: an α-phase containing species 1 and 2, and a β-phase containing species 1 and 3. What are the mole fractions of species 1 in the α and β phases, if at the temperature of the experiment, the excess Gibbs energies of the phases are given by:

$$\frac{(G^E)^\alpha}{RT} = 0.4x_1^\alpha x_2^\alpha \qquad\text{and}\qquad \frac{(G^E)^\beta}{RT} = 0.8x_1^\beta x_3^\beta$$`,
        solution: String.raw`**Unknown:** $n_1^\alpha$ (moles of 1 in α); then $n_1^\beta = 1 - n_1^\alpha$, $n_2^\alpha = 1$, $n_3^\beta = 1$.

1. **Activity coefficients** (two-suffix Margules in each phase): $\ln\gamma_1^\alpha = 0.4(x_2^\alpha)^2$, $\ln\gamma_1^\beta = 0.8(x_3^\beta)^2$.

2. **Equilibrium for species 1** (the only species in both phases): $x_1^\alpha\gamma_1^\alpha = x_1^\beta\gamma_1^\beta$, with
$$x_1^\alpha = \frac{n}{n + 1}, \quad x_2^\alpha = \frac{1}{n + 1}, \quad x_1^\beta = \frac{1 - n}{2 - n}, \quad x_3^\beta = \frac{1}{2 - n} \qquad (n \equiv n_1^\alpha)$$
$$F(n) = \frac{n}{n + 1}\exp\left[\frac{0.4}{(n + 1)^2}\right] - \frac{1 - n}{2 - n}\exp\left[\frac{0.8}{(2 - n)^2}\right] = 0$$

3. **Solve** (F changes sign between 0.5 and 0.7): n = 0.590 mol.
$$x_1^\alpha = \frac{0.590}{1.590} = 0.371, \qquad x_1^\beta = \frac{0.410}{1.410} = 0.291$$
   Check: $\gamma_1^\alpha = e^{0.4(0.629)^2} = 1.171$ and $\gamma_1^\beta = e^{0.8(0.709)^2} = 1.496$; $0.371(1.171) = 0.435 = 0.291(1.496)$ ✓.

4. **Interpretation.** Species 1 is less non-ideal in solvent 2 (smaller parameter), so more of it (59%) goes into the α phase. The distribution coefficient $x_1^\alpha/x_1^\beta = \gamma_1^\beta/\gamma_1^\alpha = 1.28$ is the basis of liquid extraction.

**Result:** $x_1^\alpha$ = 0.371, $x_1^\beta$ = 0.291.`,
        answer: String.raw`x₁^αγ₁^α = x₁^βγ₁^β with ln γ₁^α = 0.4(x₂^α)², ln γ₁^β = 0.8(x₃^β)²: n₁^α = 0.590 mol ⇒ x₁^α = 0.371, x₁^β = 0.291 (distribution ratio 1.28).` } ] },
    { id: "practice-phase-equilibria-topics-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P7", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Stability criteria and positive deviations: can negative deviations give two liquid phases?", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 14.23 (p. 587)`,
        text: String.raw`In Ex. 14.4 a plausibility argument was developed from the LLE equilibrium equations to demonstrate that positive deviations from ideal-solution behavior are conducive to liquid/liquid phase splitting.

(a) Use one of the binary stability criteria to reach this same conclusion.

(b) Is it possible in principle for a system exhibiting negative deviations from ideality to form two liquid phases?`,
        solution: String.raw`1. **(a) Criterion.** Instability (splitting) requires, somewhere,
$$\frac{d^2(G^E/RT)}{dx_1^2} < -\frac{1}{x_1x_2} \le -4$$
   i.e. $G^E/RT$ must be strongly **concave downward**. $G^E$ vanishes at $x_1 = 0$ and $x_1 = 1$. A function that is zero at both ends and concave downward between them is **positive** in between (it lies above its chord). So the curvature needed for splitting is naturally associated with $G^E > 0$, i.e. positive deviations ($\gamma_i > 1$). Equivalently, with $d\ln\gamma_1/dx_1 > -1/x_1$ as the criterion: positive deviations with ln γ₁ falling steeply as $x_1$ rises (large $\gamma_1^\infty$) are what violate it.

2. **(b) Negative deviations.** If $G^E < 0$ everywhere and is convex (the usual shape), $d^2(G^E/RT)/dx_1^2 > 0$ and the mixture is always stable. But the criterion involves only the **curvature**, not the sign, of $G^E$. A $G^E$ curve that is negative overall but has an S-shape with a strongly concave region could, in principle, violate the criterion locally. So splitting is not forbidden by thermodynamics, but it would need an unusual $G^E(x_1)$ and is essentially never observed. Strong negative deviations (complex formation, e.g. acetone/chloroform) make liquids **more** miscible.

**Result:** (a) splitting needs strongly concave $G^E$, which with $G^E = 0$ at both ends means $G^E > 0$ (positive deviations); (b) possible in principle only for an unusual, locally concave $G^E < 0$, not for the common convex negative curves.`,
        answer: String.raw`(a) Splitting requires d²(G^E/RT)/dx₁² < −1/(x₁x₂) ≤ −4: a concave G^E that is zero at both ends must be positive ⇒ positive deviations. (b) In principle yes if a negative G^E had a locally strongly concave region, but normal convex negative G^E curves are always stable.` } ] },
    { id: "practice-phase-equilibria-topics-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P8", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Toluene/water (immiscible liquids) at 101.33 kPa: dew points, first drops, three-phase temperature and last vapour", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 14.24 (p. 587)`,
        text: String.raw`Toluene(1) and water(2) are essentially immiscible as liquids. Determine the dew-point temperatures and the compositions of the first drops of liquid formed when vapor mixtures of these species with mole fractions $z_1$ = 0.2 and $z_1$ = 0.7 are cooled at the constant pressure of 101.33 kPa. What is the bubble-point temperature and the composition of the last drop of vapor in each case? See Table 10.2, p. 346, for vapor-pressure equations.`,
        solution: String.raw`Antoine equations (SVNA Table 10.2, $\ln P^{sat}/\mathrm{kPa} = A - B/(T/\mathrm K + C)$): toluene A = 14.0098, B = 3103.01, C = −53.36; water A = 16.2620, B = 3799.89, C = −46.80.

**Assumptions:** completely immiscible liquids, so each liquid is pure and exerts its own vapour pressure; ideal-gas vapour.

1. **Three-phase (bubble) point.** When both pure liquids are present, $P = P_1^{sat}(T) + P_2^{sat}(T)$, independent of the overall composition:
$$P_1^{sat}(T^*) + P_2^{sat}(T^*) = 101.33\ \mathrm{kPa} \;\Rightarrow\; T^* = 357.48\ \mathrm K\ (84.3\ °\mathrm C)$$
   with $P_1^{sat}$ = 45.00 and $P_2^{sat}$ = 56.33 kPa. The vapour in equilibrium with both liquids has
$$y_1^* = \frac{P_1^{sat}(T^*)}{P} = \frac{45.00}{101.33} = 0.444$$
   (Pure toluene boils at 383.77 K and water at 373.15 K; the mixture boils lower than either, the basis of steam distillation.)

2. **Dew points.** A pure liquid i first condenses when $y_iP = P_i^{sat}(T)$. Compute both candidate temperatures; the higher one is reached first on cooling:

| $z_1$ | water condenses at ($P_2^{sat} = (1 - z_1)P$) | toluene condenses at ($P_1^{sat} = z_1P$) | dew point, first drop |
|---|---|---|---|
| 0.2 | $P_2^{sat}$ = 81.06 kPa ⇒ **367.01 K** | 20.27 kPa ⇒ 335.43 K | 367.0 K, pure **water** |
| 0.7 | 30.40 kPa ⇒ 342.57 K | $P_1^{sat}$ = 70.93 kPa ⇒ **371.68 K** | 371.7 K, pure **toluene** |

   This is consistent with $z_1$ relative to $y_1^*$: for $z_1 < 0.444$ the vapour has excess water, which condenses first; for $z_1 > 0.444$ toluene condenses first.

3. **Further cooling.** As the first liquid condenses, the vapour moves toward $y_1^*$ = 0.444, following the dew curve of that liquid. At $T^*$ = 357.48 K the second liquid appears, and the remaining vapour (y₁ = 0.444) condenses at constant T.

**Result:** $z_1$ = 0.2: dew point 367.0 K (first drop pure water); $z_1$ = 0.7: dew point 371.7 K (first drop pure toluene). In both cases the bubble point (end of condensation) is 357.5 K, and the last vapour has $y_1$ = 0.444.`,
        answer: String.raw`Three-phase point: P₁ˢᵃᵗ + P₂ˢᵃᵗ = 101.33 kPa ⇒ T* = 357.5 K, y₁* = 0.444. z₁ = 0.2: dew 367.0 K, first drop water; z₁ = 0.7: dew 371.7 K, first drop toluene; both finish condensing at 357.5 K with last vapour y₁ = 0.444.` } ] },
    { id: "practice-phase-equilibria-topics-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P9", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Water in SF₆ at 1600 kPa: phase diagram up to 1000 ppm water and the moisture limit", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 14.22 (p. 586)`,
        text: String.raw`Vapor sulfur hexafluoride SF₆ at pressures of about 1600 kPa is used as a dielectric in large primary circuit breakers for electric transmission systems. As liquids, SF₆ and H₂O are essentially immiscible, and it is therefore necessary to specify a low enough moisture content in the vapor SF₆ so that if condensation occurs in cold weather a liquid-water phase will not form first in the system. For a preliminary determination, assume the vapor phase an ideal gas and prepare the phase diagram [Fig. 14.20(a)] for H₂O(1)/SF₆(2) at 1600 kPa in the composition range up to 1000 parts per mega parts of water (mole basis). The following approximate equations for vapor pressure are adequate:

$$\ln P_1^{sat}/\mathrm{kPa} = 19.1478 - \frac{5363.70}{T/\mathrm K} \qquad \ln P_2^{sat}/\mathrm{kPa} = 14.6511 - \frac{2048.97}{T/\mathrm K}$$`,
        solution: String.raw`**Assumptions:** ideal-gas vapour; immiscible pure liquids (Fig. 14.20(a) type: VLLE with two dew curves meeting at a three-phase point).

1. **Water dew curve** (liquid water forms first): $y_1P = P_1^{sat}(T)$, so
$$T = \frac{5363.70}{19.1478 - \ln(1600y_1)}$$

2. **SF₆ dew curve** (liquid SF₆ forms first): $y_2P = P_2^{sat}(T)$, so
$$T = \frac{2048.97}{14.6511 - \ln[1600(1 - y_1)]}$$
   This is almost constant at 281.7 K over the range, because $y_2 \approx 1$.

3. **Three-phase point:** $P_1^{sat} + P_2^{sat} = 1600$ kPa gives $T^*$ = 281.68 K, $y_1^* = P_1^{sat}/P$ = 695 ppm.

4. **Table:**

| ppm water | 100 | 300 | 500 | 695 | 800 | 1000 |
|---|---|---|---|---|---|---|
| water dew T / K | 255.7 | 269.8 | 276.9 | 281.7 | 283.8 | 287.2 |
| SF₆ dew T / K | 281.7 | 281.7 | 281.7 | 281.7 | 281.7 | 281.7 |

![T–y diagram for H₂O/SF₆ at 1600 kPa: SF₆ dew line, water dew curve and the three-phase point at 281.7 K, 695 ppm](fig/practice-phase-equilibria-topics-P9-sol.svg)

5. **Interpretation.** For water contents **below 695 ppm**, cooling first condenses liquid SF₆ (at 281.7 K); water stays in the vapour until the three-phase temperature. For contents **above 695 ppm**, liquid water forms first, at a higher temperature (e.g. 287.2 K at 1000 ppm). This is what must be avoided. The specification is therefore a moisture content safely below about **700 ppm (mole)**. (Below 273 K the water would actually deposit as ice, so the low-ppm part of the water dew curve is only indicative.)

**Result:** three-phase point 281.7 K and 695 ppm; keep the water content below about 700 ppm so that SF₆, not water, condenses first.`,
        answer: String.raw`Water dew: T = 5363.70/[19.1478 − ln(1600y₁)]; SF₆ dew ≈ 281.7 K; three-phase point (P₁ˢᵃᵗ + P₂ˢᵃᵗ = 1600) at 281.7 K, y₁ = 695 ppm. Below ≈ 700 ppm water, liquid SF₆ forms first.` } ] },
    { id: "practice-phase-equilibria-topics-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P10", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Partially miscible binary with G^E/RT = 2.25x₁x₂, P₁ˢᵃᵗ = 75, P₂ˢᵃᵗ = 110 kPa: P-x-y diagram with VLLE", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 14.26 (p. 587)`,
        text: String.raw`Consider a binary system of species 1 and 2 in which the liquid phase exhibits partial miscibility. In the regions of miscibility, the excess Gibbs energy at a particular temperature is expressed by the equation:

$$G^E/RT = 2.25x_1x_2$$

In addition, the vapor pressures of the pure species are: $P_1^{sat}$ = 75 kPa and $P_2^{sat}$ = 110 kPa. Making the usual assumptions for low-pressure VLE, prepare a P-x-y diagram for this system at the given temperature.`,
        solution: String.raw`**Assumptions:** modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$; ln γ₁ = 2.25x₂², ln γ₂ = 2.25x₁².

1. **LLE compositions.** A = 2.25 > 2, so the liquid splits. By symmetry (Problem P2), $\ln[x/(1 - x)] = 2.25(2x - 1)$ gives
$$x_1^\alpha = 0.2244, \qquad x_1^\beta = 0.7756$$

2. **Three-phase pressure and vapour.** At $x_1^\alpha$: $\gamma_1 = e^{2.25(0.7756)^2} = 3.871$ and $\gamma_2 = e^{2.25(0.2244)^2} = 1.120$:
$$P^* = 0.2244(3.871)(75) + 0.7756(1.120)(110) = 65.15 + 95.55 = 160.70\ \mathrm{kPa}, \qquad y_1^* = \frac{65.15}{160.70} = 0.405$$
   The β phase gives the same P and y (as it must, since the liquids are in equilibrium). $y_1^*$ lies between $x_1^\alpha$ and $x_1^\beta$, so this is a **heteroazeotrope**: P* is the maximum pressure of the system.

3. **Homogeneous regions** (BUBL P, $P = \sum x_i\gamma_iP_i^{sat}$, $y_1 = x_1\gamma_1P_1^{sat}/P$):

| $x_1$ | 0 | 0.10 | 0.20 | 0.2244 | 0.7756 | 0.80 | 0.90 | 1 |
|---|---|---|---|---|---|---|---|---|
| P / kPa | 110.0 | 147.7 | 159.6 | 160.7 | 160.7 | 158.5 | 137.1 | 75.0 |
| $y_1$ | 0 | 0.314 | 0.397 | 0.405 | 0.405 | 0.414 | 0.504 | 1 |

   Between $x_1$ = 0.224 and 0.776 the single-liquid equations have no physical meaning (the liquid is unstable); there the liquid is the two-phase mixture and the pressure is P*.

4. **Diagram:**

![P–x–y diagram for G^E/RT = 2.25x₁x₂: bubble and dew curves in the two homogeneous regions and the three-phase line at 160.7 kPa](fig/practice-phase-equilibria-topics-P10-sol.svg)

   Regions: above the bubble curves and above P*, liquid (one liquid near the edges, Lα + Lβ in the middle); between bubble and dew curves, V + Lα (left) or V + Lβ (right); below the dew curves, vapour. The horizontal line at P* joins three phases: α, vapour y* and β.

**Result:** LLE at 0.224/0.776; three-phase line at 160.7 kPa with $y_1^*$ = 0.405 (heteroazeotrope).`,
        answer: String.raw`A = 2.25 > 2 ⇒ LLE x₁^α = 0.224, x₁^β = 0.776; P* = 0.2244(3.871)(75) + 0.7756(1.120)(110) = 160.7 kPa, y₁* = 0.405 (heteroazeotrope, maximum P); homogeneous branches from BUBL P, e.g. x₁ = 0.1: 147.7 kPa, y₁ = 0.314.` } ] },
    { id: "practice-phase-equilibria-topics-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P11", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Ideal solubility of a solid in a liquid: four rules of thumb", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 14.31 (p. 588), with §14.6`,
        text: String.raw`Use results of Sec. 14.6 to develop the following (approximate) rules of thumb:

(a) The solubility of a solid in a liquid solvent increases with increasing T.

(b) The solubility of a solid in a liquid solvent is independent of the identity of the solvent species.

(c) Of two solids with roughly the same heat of fusion, that solid with the lower melting point is the more soluble in a given liquid solvent at a given T.

(d) Of two solids with similar melting points, that solid with the smaller heat of fusion is the more soluble in a given liquid solvent at a given T.`,
        solution: String.raw`1. **Basis (SVNA §14.6, Case II: pure solid, ideal liquid solution).** Equality of fugacities of the solute i, $f_i^s = x_i\gamma_i^lf_i^l$, with $\gamma_i^l = 1$ and the ratio of pure-solid to subcooled-liquid fugacities from the heat of fusion (neglecting ΔC_P), gives
$$\ln x_i = \frac{\Delta H_{fus,i}}{R}\left(\frac{1}{T_{m,i}} - \frac{1}{T}\right) = -\frac{\Delta H_{fus,i}}{R}\,\frac{T_{m,i} - T}{T\,T_{m,i}} \qquad (T < T_{m,i})$$

2. **(a)** $\Delta H_{fus} > 0$ and $(1/T_m - 1/T)$ increases toward 0 as T rises, so $\ln x_i$ increases: **solubility rises with T**, reaching $x_i$ = 1 at $T = T_m$.

3. **(b)** The equation contains only properties of the solute ($\Delta H_{fus}$, $T_m$) and T: the solvent does not appear. For an ideal solution, the solubility is **independent of the solvent**. (Real solvents with $\gamma_i \ne 1$ give $x_i = x_i^{ideal}/\gamma_i$, so this rule is approximate.)

4. **(c)** At fixed T and $\Delta H_{fus}$, a lower $T_m$ makes $(T_m - T)/(TT_m) = 1/T - 1/T_m$ smaller, so $\ln x_i$ is less negative: the **lower-melting solid is more soluble**.

5. **(d)** At fixed T and $T_m$, $\ln x_i$ is proportional to $-\Delta H_{fus}$: the **smaller heat of fusion gives the larger solubility**.

6. **Example:** naphthalene ($T_m$ = 353.4 K, $\Delta H_{fus}$ ≈ 19.0 kJ/mol) at 298.15 K: $\ln x = -(19\,000/8.314)(55.25/(298.15 \times 353.4)) = -1.198$, so x = 0.30. The measured value in benzene is 0.295, close to ideal as rule (b) suggests.`,
        answer: String.raw`Ideal solubility ln xᵢ = (ΔH_fus/R)(1/T_m − 1/T): (a) rises with T; (b) contains no solvent property; (c) lower T_m ⇒ larger x; (d) smaller ΔH_fus ⇒ larger x (e.g. naphthalene at 25 °C: x = 0.30).` } ] },
    { id: "practice-phase-equilibria-topics-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P12", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Osmotic virial coefficient: show B = ½[1 − (d² ln γ₂/dx₁²) at x₁ = 0]", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 14.44 (p. 589), with Eq. 14.132`,
        text: String.raw`With $\bar V_2 = V_2$, Eq. (14.132) for the osmotic pressure may be represented as a power series in $x_1$:

$$\frac{\Pi V_2}{x_1RT} = 1 + \mathcal Bx_1 + \mathcal Cx_1^2 + \cdots$$

Reminiscent of Eqs. (3.11) and (3.12), this series is called an osmotic virial expansion. Show that the second osmotic virial coefficient $\mathcal B$ is:

$$\mathcal B = \frac12\left[1 - \left(\frac{d^2\ln\gamma_2}{dx_1^2}\right)_{x_1 = 0}\right]$$

What is $\mathcal B$ for an ideal solution? What is $\mathcal B$ if $G^E = Ax_1x_2$?`,
        solution: String.raw`1. **Osmotic pressure (SVNA eq. 14.132).** Equality of solvent fugacity across the membrane, with the solution at P + Π and the pure solvent at P and an incompressible solvent, gives
$$\Pi = -\frac{RT}{V_2}\ln(x_2\gamma_2) \;\Rightarrow\; \frac{\Pi V_2}{x_1RT} = -\frac{\ln x_2 + \ln\gamma_2}{x_1}$$

2. **Expand ln x₂** ($x_2 = 1 - x_1$): $\ln(1 - x_1) = -x_1 - \tfrac12x_1^2 - \tfrac13x_1^3 - \cdots$

3. **Expand ln γ₂ about $x_1 = 0$.** At $x_1 = 0$, $\ln\gamma_2 = 0$ (pure solvent, Lewis–Randall). Its first derivative is also zero there: by Gibbs–Duhem, $d\ln\gamma_2/dx_1 = -(x_1/x_2)\,d\ln\gamma_1/dx_1 \to 0$. Hence
$$\ln\gamma_2 = \frac12\left(\frac{d^2\ln\gamma_2}{dx_1^2}\right)_0x_1^2 + O(x_1^3)$$

4. **Combine:**
$$\frac{\Pi V_2}{x_1RT} = \frac{x_1 + \tfrac12x_1^2 - \tfrac12(d^2\ln\gamma_2/dx_1^2)_0x_1^2 + \cdots}{x_1} = 1 + \frac12\left[1 - \left(\frac{d^2\ln\gamma_2}{dx_1^2}\right)_0\right]x_1 + \cdots$$
   so
$$\boxed{\mathcal B = \frac12\left[1 - \left(\frac{d^2\ln\gamma_2}{dx_1^2}\right)_{x_1 = 0}\right]}$$

5. **Ideal solution:** $\gamma_2 = 1$, so $\mathcal B = \tfrac12$ (from $-\ln(1 - x_1)$ alone).

6. **$G^E = Ax_1x_2$:** $\ln\gamma_2 = (A/RT)x_1^2$, so $d^2\ln\gamma_2/dx_1^2 = 2A/RT$ and
$$\mathcal B = \frac12 - \frac{A}{RT}$$
   Positive deviations (A > 0) reduce Π below the ideal value at a given $x_1$; negative deviations increase it.`,
        answer: String.raw`ΠV₂/(x₁RT) = −[ln(1 − x₁) + ln γ₂]/x₁ with ln γ₂ = ½(d²ln γ₂/dx₁²)₀x₁² (ln γ₂ and its slope vanish at x₁ = 0 by Gibbs–Duhem) ⇒ 𝓑 = ½[1 − (d²ln γ₂/dx₁²)₀]; ideal 𝓑 = ½; G^E = Ax₁x₂: 𝓑 = ½ − A/RT.` } ] },
    { id: "practice-phase-equilibria-topics-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P13", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Solid/vapour equilibrium: solubility of naphthalene in compressed CO₂ at 35 °C with the enhancement factor", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (solid/vapour equilibrium, Kirtania slides 31–35; SVNA §14.7)`,
        text: String.raw`Solid naphthalene (1) is in equilibrium with compressed CO₂ (2) at 35 °C. Its sublimation pressure is $P_1^{sat}$ = 2.9×10⁻⁴ bar and its solid molar volume is $V_1^s$ = 125 cm³/mol. The fugacity coefficient of naphthalene at infinite dilution in CO₂, from an equation of state, is $\hat\phi_1^\infty$ = 0.90 at 10 bar, 0.010 at 100 bar and 0.0040 at 200 bar.

(a) Write the SVE equation and the simplified enhancement factor $F_1$.

(b) Calculate $y_1$ at 10, 100 and 200 bar and compare with the ideal-gas estimate $y_1 = P_1^{sat}/P$.`,
        solution: String.raw`1. **(a) Equations.** $f_1^s = \hat f_1^v$ with the solid's fugacity $f_1^s = \phi_1^{sat}P_1^{sat}\exp[V_1^s(P - P_1^{sat})/RT]$ and $\hat f_1^v = y_1\hat\phi_1P$:
$$y_1 = \frac{P_1^{sat}}{P}F_1, \qquad F_1 = \frac{\phi_1^{sat}}{\hat\phi_1}\exp\frac{V_1^s(P - P_1^{sat})}{RT}$$
   Since $P_1^{sat}$ is tiny: $\phi_1^{sat} \approx 1$, $P - P_1^{sat} \approx P$, and $y_1$ is small so $\hat\phi_1 \approx \hat\phi_1^\infty$:
$$F_1 = \frac{1}{\hat\phi_1^\infty}\exp\frac{PV_1^s}{RT}$$

2. **(b) Calculations** (RT = 83.14 × 308.15 = 25 620 cm³ bar/mol):

| P / bar | Poynting $e^{PV^s/RT}$ | $\hat\phi_1^\infty$ | $F_1$ | $P_1^{sat}/P$ | $y_1$ |
|---|---|---|---|---|---|
| 10 | 1.050 | 0.90 | 1.17 | 2.9×10⁻⁵ | 3.4×10⁻⁵ |
| 100 | 1.629 | 0.010 | 163 | 2.9×10⁻⁶ | 4.7×10⁻⁴ |
| 200 | 2.653 | 0.0040 | 663 | 1.45×10⁻⁶ | 9.6×10⁻⁴ |

3. **Discussion.** At low pressure, $y_1$ falls as 1/P (ideal-gas behaviour, $F_1 \approx 1$). Near and above the critical pressure of CO₂ (73.8 bar), the dense fluid solvates naphthalene strongly: $\hat\phi_1^\infty$ drops by orders of magnitude, and $F_1$ reaches hundreds. The solubility then rises with P, which is the basis of supercritical-fluid extraction (decaffeination, extraction of flavours). The Poynting factor alone contributes less than a factor 3; the main effect is vapour-phase non-ideality.

**Result:** $y_1$ = 3.4×10⁻⁵ (10 bar), 4.7×10⁻⁴ (100 bar), 9.6×10⁻⁴ (200 bar), against ideal estimates of 2.9×10⁻⁵, 2.9×10⁻⁶ and 1.45×10⁻⁶.`,
        answer: String.raw`y₁ = (P₁ˢᵃᵗ/P)F₁ with F₁ = (1/φ̂₁^∞)exp(PV₁ˢ/RT): F₁ = 1.17, 163, 663 ⇒ y₁ = 3.4×10⁻⁵ (10 bar), 4.7×10⁻⁴ (100 bar), 9.6×10⁻⁴ (200 bar); ideal estimate falls as 1/P. Enhancement is mainly from φ̂₁^∞ ≪ 1.` } ] },
    { id: "practice-phase-equilibria-topics-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P14", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Ideal solid/liquid equilibrium: naphthalene solubility in benzene and the eutectic point", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (solid/liquid equilibrium, SVNA §14.6 Case II)`,
        text: String.raw`Naphthalene (1): $T_m$ = 353.4 K, $\Delta H_{fus}$ = 19.0 kJ/mol. Benzene (2): $T_m$ = 278.7 K, $\Delta H_{fus}$ = 9.87 kJ/mol. The liquid solution is ideal and the solids are completely immiscible.

(a) Estimate the solubility of naphthalene in liquid benzene at 25 °C.

(b) Find the eutectic temperature and composition.

(c) Sketch the T–x₁ diagram and label the regions.`,
        solution: String.raw`**Assumptions:** ideal liquid ($\gamma_i = 1$); pure solid phases; $\Delta C_P$ of fusion neglected (SVNA Case II). For each solid in equilibrium with the liquid:
$$x_i = \exp\left[\frac{\Delta H_{fus,i}}{R}\left(\frac1{T_{m,i}} - \frac1T\right)\right]$$

1. **(a) 25 °C:**
$$\ln x_1 = \frac{19\,000}{8.314}\left(\frac{1}{353.4} - \frac{1}{298.15}\right) = -1.198 \;\Rightarrow\; x_1 = 0.302$$
   (Measured: 0.295.)

2. **(b) Eutectic.** Both solids coexist with the liquid, so $x_1(T) + x_2(T) = 1$ with each from its own freezing curve. Solving by trial gives
$$T_e = 269.6\ \mathrm K\ (-3.6\ °\mathrm C), \qquad x_{1,e} = 0.134, \quad x_{2,e} = 0.866$$
   Check: $x_2 = \exp[(9870/8.314)(1/278.7 - 1/269.6)] = 0.866$ ✓.

3. **(c) Diagram.** Two freezing curves fall from the pure melting points (353.4 K at $x_1$ = 1; 278.7 K at $x_1$ = 0) and meet at the eutectic E (0.134, 269.6 K). Regions: above both curves, liquid; between the naphthalene curve and the eutectic line (right), solid naphthalene + liquid; between the benzene curve and the eutectic line (left), solid benzene + liquid; below the eutectic line, two solids. At E, three phases coexist (for a binary at fixed P, F = 0).

**Result:** (a) $x_1$ = 0.30; (b) eutectic at 269.6 K, $x_1$ = 0.134.`,
        answer: String.raw`ln x₁ = (ΔH_fus/R)(1/T_m − 1/T): x₁ = 0.302 at 25 °C (measured 0.295); eutectic from x₁(T) + x₂(T) = 1: T_e = 269.6 K, x₁ = 0.134.` } ] },
    { id: "practice-phase-equilibria-topics-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P15", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Osmotic pressure of sea water (3.5 wt% NaCl) at 25 °C and the reverse-osmosis pressure", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (osmotic equilibrium, SVNA §14.9)`,
        text: String.raw`Sea water may be approximated as 3.5 wt% NaCl in water, fully dissociated, at 25 °C.

(a) Derive the osmotic-pressure expression $\Pi = -(RT/V_w)\ln(x_w\gamma_w)$ and its dilute limit.

(b) Estimate the osmotic pressure of sea water assuming an ideal solution ($V_w$ = 18.07 cm³/mol).

(c) What does this imply for a reverse-osmosis desalination plant?`,
        solution: String.raw`1. **(a) Derivation.** A membrane permeable only to water separates pure water at P from the solution at P + Π. At equilibrium the water fugacities are equal:
$$\hat f_w(T, P + \Pi, x_w) = f_w(T, P)$$
   With $\hat f_w = x_w\gamma_wf_w(T, P + \Pi)$ and the Poynting relation $\ln[f_w(P + \Pi)/f_w(P)] = V_w\Pi/RT$ (incompressible water):
$$x_w\gamma_w\exp\frac{V_w\Pi}{RT} = 1 \;\Rightarrow\; \Pi = -\frac{RT}{V_w}\ln(x_w\gamma_w)$$
   Dilute ideal solution: $-\ln x_w \approx x_s$ (total solute particles), so $\Pi \approx x_sRT/V_w$ (van 't Hoff).

2. **(b) Composition** (basis 1 kg sea water): NaCl 35 g = 0.599 mol, giving 1.198 mol of ions; water 965 g = 53.57 mol.
$$x_s = \frac{1.198}{54.76} = 0.0219, \qquad x_w = 0.9781$$
$$\Pi = -\frac{8.314 \times 298.15}{18.07 \times 10^{-6}}\ln(0.9781) = 3.03 \times 10^6\ \mathrm{Pa} = 30.3\ \mathrm{bar}$$
   (dilute formula: 30.0 bar). Non-ideality of the electrolyte ($\gamma_w$, i.e. osmotic coefficient ≈ 0.9) lowers the real value to about 27 bar.

3. **(c) Reverse osmosis.** To push fresh water out of sea water through the membrane, the feed pressure must exceed Π (about 25–30 bar). As water is removed the brine concentrates and Π rises, so plants operate at 50–80 bar to get practical fluxes and recoveries. The minimum (reversible) work is about ΠV_w per mol of water, i.e. roughly 30 bar × 1 m³ = 3 MJ per m³ ≈ 0.8 kWh/m³ at low recovery; real plants use 3–4 kWh/m³.

**Result:** Π ≈ 30 bar (ideal), about 27 bar in reality; RO needs well above this, typically 50–80 bar.`,
        answer: String.raw`Π = −(RT/V_w)ln(x_wγ_w) ≈ x_sRT/V_w. 35 g NaCl → 1.198 mol ions in 53.57 mol water: x_s = 0.0219 ⇒ Π ≈ 30.3 bar (ideal; ≈ 27 bar real); RO plants run at 50–80 bar.` } ] },
    { id: "practice-phase-equilibria-topics-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P16", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Langmuir isotherm from pure-gas adsorption data: m, b and Henry's constant", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (adsorption equilibrium, SVNA §14.8; cf. 2022-23 Q1(ii) on the adsorbed phase)`,
        text: String.raw`The following amounts n (mol/kg) of a gas are adsorbed on an activated carbon at 300 K:

| P / bar | 0.2 | 0.5 | 1 | 2 | 4 | 8 |
|---|---|---|---|---|---|---|
| n / mol kg⁻¹ | 0.364 | 0.800 | 1.333 | 2.000 | 2.667 | 3.200 |

(a) State the assumptions of the Langmuir isotherm and write it.

(b) Find the monolayer capacity m and the constant b, and Henry's constant k.

(c) What fraction of the sites is covered at 4 bar?`,
        solution: String.raw`1. **(a) Langmuir model:** adsorption on identical, independent sites; at most one molecule per site (monolayer); no interaction between adsorbed molecules; dynamic equilibrium between adsorption and desorption rates. With fractional coverage θ = n/m:
$$n = \frac{mbP}{1 + bP}$$
   At low P, $n \approx mbP = kP$ (Henry's law for adsorption, $k = mb$); at high P, $n \to m$.

2. **(b) Linear form:** $P/n = 1/(mb) + P/m$. From the data:

| P | 0.2 | 0.5 | 1 | 2 | 4 | 8 |
|---|---|---|---|---|---|---|
| P/n | 0.549 | 0.625 | 0.750 | 1.000 | 1.500 | 2.500 |

   Least squares: P/n = 0.500 + 0.250P. Hence slope 1/m = 0.250, so **m = 4.00 mol/kg**; intercept 1/(mb) = 0.500, so **b = 0.500 bar⁻¹**; **k = mb = 2.00 mol/(kg bar)**.

3. **(c) Coverage at 4 bar:** θ = bP/(1 + bP) = 2/3 = 0.667 (n = 2.667 mol/kg ✓).

4. **Thermodynamic note (SVNA §14.8):** the adsorbed phase is treated with a two-dimensional spreading pressure Π. The Gibbs adsorption isotherm, $A\,d\Pi = RT\,n\,d\ln P$ (pure gas, constant T), links the isotherm to an adsorbate equation of state; Langmuir corresponds to $z = \Pi A/(nRT) = -(m/n)\ln(1 - n/m)$.

**Result:** m = 4.0 mol/kg, b = 0.50 bar⁻¹, k = 2.0 mol/(kg bar); θ = 0.67 at 4 bar.`,
        answer: String.raw`Langmuir n = mbP/(1 + bP); P/n = 1/(mb) + P/m = 0.500 + 0.250P ⇒ m = 4.0 mol/kg, b = 0.50 bar⁻¹, k = mb = 2.0 mol/(kg bar); θ(4 bar) = 0.667.` } ] },
    { id: "practice-phase-equilibria-topics-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P17", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Checking the VLE stability criteria numerically for ln γ = x² with P₁ˢᵃᵗ = 100 and P₂ˢᵃᵗ = 80 kPa", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (VLE stability criteria, Kirtania slides 20–26: $dy_1/dx_1 > 0$; $dP/dx_1$, $dP/dy_1$ and $y_1 - x_1$ have the same sign)`,
        text: String.raw`A binary obeys modified Raoult's law with ln γ₁ = x₂², ln γ₂ = x₁² (A = 1), $P_1^{sat}$ = 100 kPa and $P_2^{sat}$ = 80 kPa.

(a) Calculate P, $y_1$, $dP/dx_1$ and $dy_1/dx_1$ at $x_1$ = 0.3 and 0.9 and verify the VLE stability criteria.

(b) Locate the azeotrope and confirm that $dP/dx_1 = 0$ there.`,
        solution: String.raw`1. **Relations.** $P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat}$, $y_1 = x_1\gamma_1P_1^{sat}/P$. The slide result (from Gibbs–Duhem with $\hat f_i = y_iP$) is
$$\frac{1}{P}\frac{dP}{dx_1} = \frac{y_1 - x_1}{y_1y_2}\frac{dy_1}{dx_1}$$

2. **(a) $x_1$ = 0.3:** $\gamma_1 = e^{0.49} = 1.632$, $\gamma_2 = e^{0.09} = 1.094$; P = 48.97 + 61.27 = 110.24 kPa; $y_1$ = 0.444. Numerically $dP/dx_1$ = +43.9 kPa and $dy_1/dx_1$ = +0.682.
   - $dy_1/dx_1 > 0$ ✓
   - $y_1 - x_1 = +0.144$ and $dP/dx_1 > 0$: same sign ✓
   - Check of the relation: $(1/P)dP/dx_1 = 0.398$ and $(y_1 - x_1)/(y_1y_2) \times dy_1/dx_1 = 0.144/(0.444 \times 0.556) \times 0.682 = 0.398$ ✓

3. **$x_1$ = 0.9:** P = 108.89 kPa, $y_1$ = 0.835; $dP/dx_1$ = −64.6 kPa, $dy_1/dx_1$ = +1.256.
   - $dy_1/dx_1 > 0$ ✓
   - $y_1 - x_1 = -0.065 < 0$ and $dP/dx_1 < 0$: same sign ✓
   - $(1/P)dP/dx_1 = -0.594$ = $(-0.065)/(0.835 \times 0.165) \times 1.256$ ✓

4. **(b) Azeotrope.** $y_1 = x_1$ requires $\gamma_1P_1^{sat} = \gamma_2P_2^{sat}$, i.e. $1 - 2x_1 = \ln(80/100)$:
$$x_1^{az} = \frac12\left(1 + \ln\frac{100}{80}\right) = 0.612, \qquad P^{az} = e^{(0.388)^2}(100) = 116.29\ \mathrm{kPa}$$
   Here $y_1 - x_1 = 0$, so the relation gives $dP/dx_1 = 0$ (and $dP/dy_1 = 0$): the azeotrope is the maximum of the P–x and P–y curves (116.29 kPa at $x_1$ = 0.61 numerically) ✓. Since $dy_1/dx_1 > 0$ everywhere (minimum 0.49), the system is stable over the whole range; no liquid/liquid splitting occurs (A = 1 < 2).

**Result:** criteria satisfied at both points; maximum-pressure azeotrope at $x_1$ = 0.612, 116.3 kPa, where dP/dx₁ = 0.`,
        answer: String.raw`x₁ = 0.3: P = 110.24 kPa, y₁ = 0.444, dP/dx₁ = +43.9, dy₁/dx₁ = +0.68; x₁ = 0.9: P = 108.89, y₁ = 0.835, dP/dx₁ = −64.6, dy₁/dx₁ = +1.26: dy₁/dx₁ > 0 and dP/dx₁ has the sign of y₁ − x₁. Azeotrope x₁ = 0.612, P = 116.3 kPa (dP/dx₁ = 0).` } ] },
    { id: "practice-phase-equilibria-topics-P18", q: 18, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-phase-equilibria-topics-P18", label: "", marks: "", topic: "phase-equilibria-topics",
        sub: "Short conceptual questions on LLE, VLLE, SLE and stability", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style short questions (format of 2018-19 Q5, 2020-21 Q5 and 2021-22 Q5)`,
        text: String.raw`Answer briefly, with reasons:

(i) Why does a mixture of two immiscible liquids (e.g. water and toluene) boil below the boiling point of either? How is this used?

(ii) How many degrees of freedom does a binary system have when two liquid phases and a vapour are in equilibrium?

(iii) What causes a lower critical solution temperature (LCST)?

(iv) Distinguish between the binodal and the spinodal curves.

(v) A mixture has ΔG of mixing < 0 at all compositions. Can it still split into two liquid phases?`,
        solution: String.raw`1. **(i)** With immiscible liquids each exerts its full vapour pressure regardless of the amount of the other: $P = P_1^{sat}(T) + P_2^{sat}(T)$. The total reaches 1 atm at a temperature below either pure boiling point (toluene/water: 84.3 °C against 100 and 110.6 °C). This is **steam distillation**: heat-sensitive, water-insoluble organics (essential oils) are distilled with steam at temperatures below 100 °C.

2. **(ii)** F = 2 − π + N = 2 − 3 + 2 = **1**. Fixing P fixes T and the compositions of all three phases (the three-phase line on a P–x–y or T–x–y diagram).

3. **(iii)** An LCST occurs when the liquids mix well at low T, usually because of specific attractions such as hydrogen bonding (negative $H^E$), but the attractions weaken as T rises and the unfavourable entropy of the ordered complexes takes over, so $G^E$ grows with T until the mixture splits (e.g. triethylamine/water, LCST ≈ 18 °C). Formally, splitting on heating requires $\partial(G^E/RT)/\partial T > 0$, i.e. $H^E < 0$.

4. **(iv)** The **binodal** (coexistence curve) gives the compositions of the two liquids in equilibrium, from equal fugacities (common tangent to ΔG). The **spinodal** is the locus of $d^2\Delta G/dx_1^2 = 0$ (inflection points). Inside the spinodal the single liquid is unstable and splits spontaneously; between the spinodal and the binodal it is metastable (needs nucleation). The two curves meet at the critical point.

5. **(v) Yes.** ΔG < 0 only means the mixture is more stable than the unmixed **pure** liquids. Stability also requires $d^2(\Delta G/RT)/dx_1^2 > 0$. If ΔG has two minima (e.g. $G^E/RT = 2.5x_1x_2$ in P1: ΔG/RT ≈ −0.07 at $x_1$ = 0.5, still negative), the mixture lowers G further by splitting into the two common-tangent compositions.`,
        answer: String.raw`(i) P = P₁ˢᵃᵗ + P₂ˢᵃᵗ reaches 1 atm below both boiling points (steam distillation). (ii) F = 1. (iii) Specific attractions (H-bonding, H^E < 0) weaken with T ⇒ splitting on heating. (iv) Binodal: coexisting compositions (common tangent); spinodal: d²ΔG/dx² = 0 (unstable inside). (v) Yes: ΔG < 0 is not sufficient; curvature must be positive.` } ] }
  ]
});
