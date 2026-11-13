QB.paper({ year: "Practice", set: "VLE: Raoult, modified Raoult, Henry, bubble/dew, flash", date: "", marks: 0, practice: true,
  rules: String.raw`Vapour/liquid equilibrium (SVNA ch. 10, Faisal Ahmed Lec 1): every worked example on the slides (Examples 10.1, 10.3, 10.4, 10.5), selected SVNA chapter-10 examples and end-of-chapter problems not already set in past papers, and new exam-style problems on modified Raoult's law with ln γ = Ax², Henry's law, azeotropes, multicomponent bubble/dew points and the phase rule.`,
  questions: [
    { id: "practice-vle-intro-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P1", label: "", marks: "", topic: "vle-intro",
        sub: "Acetonitrile/nitromethane at 75 °C: Raoult's-law P–x–y diagram", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lec 1 (Faisal Ahmed), slides 28–29, "Example 10.1" (a) and Solution 10.1; SVNA 6th ed. SI, Example 10.1`,
        text: String.raw`Binary system acetonitrile(1)/nitromethane(2) conforms closely to Raoult's law. Vapor pressures for the pure species are given by the following Antoine equations:

$$\ln P_1^{sat}/\mathrm{kPa} = 14.2724 - \frac{2945.47}{t/°\mathrm C + 224.00} \qquad \ln P_2^{sat}/\mathrm{kPa} = 14.2043 - \frac{2972.64}{t/°\mathrm C + 209.00}$$

(a) Prepare a graph showing P vs. $x_1$ and P vs. $y_1$ for a temperature of 75°C.`,
        solution: String.raw`**Given:** t = 75 °C; Antoine equations; Raoult's law.

**Find:** the P–x₁ (bubble) and P–y₁ (dew) curves at 75 °C.

**Assumptions:** Raoult's law, $y_iP = x_iP_i^{sat}$: ideal-gas vapour at these low pressures; ideal liquid solution (the two nitriles/nitro compounds are chemically similar).

1. **Vapour pressures at 75 °C:**
$$P_1^{sat} = \exp\left(14.2724 - \frac{2945.47}{299.00}\right) = 83.21\ \mathrm{kPa}, \qquad P_2^{sat} = \exp\left(14.2043 - \frac{2972.64}{284.00}\right) = 41.98\ \mathrm{kPa}$$

2. **BUBL P (binary form of Raoult's law).** Sum $y_iP = x_iP_i^{sat}$ over i, with $\sum y_i = 1$:
$$P = P_2^{sat} + (P_1^{sat} - P_2^{sat})x_1 = 41.98 + 41.23x_1 \qquad (\text{a straight line})$$
$$y_1 = \frac{x_1P_1^{sat}}{P}$$
   For example, at $x_1$ = 0.6: P = 41.98 + 41.23(0.6) = 66.72 kPa and $y_1$ = 0.6(83.21)/66.72 = 0.7483.

3. **Table of points:**

| $x_1$ | P / kPa | $y_1$ |
|---|---|---|
| 0 | 41.98 | 0 |
| 0.2 | 50.23 | 0.3313 |
| 0.4 | 58.47 | 0.5692 |
| 0.6 | 66.72 | 0.7483 |
| 0.8 | 74.96 | 0.8880 |
| 1.0 | 83.21 | 1 |

4. **Graph.** P–x₁ is the straight bubble line; P–y₁ (dew) lies below it, from $1/P = y_1/P_1^{sat} + y_2/P_2^{sat}$. Above the bubble line the mixture is subcooled liquid; below the dew line it is superheated vapour; between them, L + V.

![P–x–y diagram for acetonitrile/nitromethane at 75 °C with the isopleth z₁ = 0.6](fig/practice-vle-intro-P1-pxy.svg)

5. **Reading the diagram (the slide's path a → d).** Lower the pressure of a liquid with $z_1$ = 0.6 at 75 °C. The first bubble forms at b, P = 66.72 kPa, with $y_1$ = 0.748 (b′). The last drop disappears at the dew point c: $P = 1/(0.6/83.21 + 0.4/41.98) = 59.74$ kPa, where the liquid has $x_1 = 0.6(59.74)/83.21 = 0.431$ (c′).

**Result:** a straight bubble line from 41.98 to 83.21 kPa and the dew curve below it; for z₁ = 0.6 the two-phase range is 59.74–66.72 kPa.`,
        answer: String.raw`P₁ˢᵃᵗ = 83.21, P₂ˢᵃᵗ = 41.98 kPa; bubble line P = 41.98 + 41.23x₁, y₁ = x₁P₁ˢᵃᵗ/P (e.g. x₁ = 0.6: P = 66.72 kPa, y₁ = 0.748); dew curve below it (z₁ = 0.6: dew at 59.74 kPa, x₁ = 0.431).` } ] },
    { id: "practice-vle-intro-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P2", label: "", marks: "", topic: "vle-intro",
        sub: "Acetonitrile/nitromethane at 70 kPa: Raoult's-law t–x–y diagram (BUBL T)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lec 1 (Faisal Ahmed), slides 28 and 31, Example 10.1 (b); SVNA 6th ed. SI, Example 10.1`,
        text: String.raw`For the acetonitrile(1)/nitromethane(2) system of Example 10.1 (Raoult's law, same Antoine equations), prepare a graph showing t vs. $x_1$ and t vs. $y_1$ for a pressure of 70 kPa.`,
        solution: String.raw`**Given:** P = 70 kPa; the Antoine equations of P1.

**Find:** the t–x₁ (bubble) and t–y₁ (dew) curves.

**Assumptions:** Raoult's law.

1. **End points** (pure boiling temperatures at 70 kPa): $t_i^{sat} = \dfrac{B_i}{A_i - \ln P} - C_i$.
$$t_1^{sat} = \frac{2945.47}{14.2724 - \ln 70} - 224.00 = 69.84\ °\mathrm C, \qquad t_2^{sat} = \frac{2972.64}{14.2043 - \ln 70} - 209.00 = 89.58\ °\mathrm C$$

2. **Method (slide).** Instead of iterating on T, *select* t between 69.84 and 89.58 °C. Evaluate $P_1^{sat}$ and $P_2^{sat}$ at that t, then
$$x_1 = \frac{P - P_2^{sat}}{P_1^{sat} - P_2^{sat}}, \qquad y_1 = \frac{x_1P_1^{sat}}{P}$$
   For example, at t = 78 °C: $P_1^{sat}$ = 91.76 and $P_2^{sat}$ = 46.84 kPa, so $x_1$ = (70 − 46.84)/(91.76 − 46.84) = 0.5156 and $y_1$ = 0.5156(91.76)/70 = 0.6759.

3. **Table:**

| t / °C | $P_1^{sat}$ | $P_2^{sat}$ | $x_1$ | $y_1$ |
|---|---|---|---|---|
| 69.84 | 70.00 | 34.60 | 1.0000 | 1.0000 |
| 72 | 75.30 | 37.54 | 0.8596 | 0.9247 |
| 74 | 80.50 | 40.46 | 0.7378 | 0.8484 |
| 76 | 85.98 | 43.55 | 0.6233 | 0.7656 |
| 78 | 91.76 | 46.84 | 0.5156 | 0.6759 |
| 80 | 97.84 | 50.32 | 0.4142 | 0.5789 |
| 82 | 104.24 | 54.00 | 0.3184 | 0.4742 |
| 89.58 | 131.56 | 70.00 | 0 | 0 |

4. **Graph.** Both curves are slightly curved because the vapour pressures are exponential in T. The bubble (t–x₁) curve lies **below** the dew curve: liquid is stable below the bubble curve and vapour above the dew curve.

![t–x–y diagram for acetonitrile/nitromethane at 70 kPa](fig/practice-vle-intro-P2-txy.svg)

**Result:** the t–x–y diagram runs between 69.84 °C (pure 1) and 89.58 °C (pure 2); for example, at 78 °C, x₁ = 0.516 and y₁ = 0.676.`,
        answer: String.raw`t₁ˢᵃᵗ = 69.84 °C, t₂ˢᵃᵗ = 89.58 °C at 70 kPa; pick t, x₁ = (P − P₂ˢᵃᵗ)/(P₁ˢᵃᵗ − P₂ˢᵃᵗ), y₁ = x₁P₁ˢᵃᵗ/P (78 °C: x₁ = 0.516, y₁ = 0.676; 80 °C: 0.414, 0.579).` } ] },
    { id: "practice-vle-intro-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw`For the system methanol(1)/methyl acetate(2), the following equations provide a reasonable correlation for the activity coefficients:

$$\ln\gamma_1 = Ax_2^2 \qquad \ln\gamma_2 = Ax_1^2 \qquad\text{where}\quad A = 2.771 - 0.00523T$$

In addition, the following Antoine equations provide vapor pressures:

$$\ln P_1^{sat} = 16.59158 - \frac{3643.31}{T - 33.424} \qquad \ln P_2^{sat} = 14.25326 - \frac{2665.54}{T - 53.424}$$

where T is in kelvins and the vapor pressures are in kPa. Assuming the validity of modified Raoult's law, $y_iP = x_i\gamma_iP_i^{sat}$, calculate:`,
      parts: [
        { id: "practice-vle-intro-P3a", label: "(a)", marks: "", topic: "vle-intro",
          sub: "Methanol/methyl acetate: BUBL P at 318.15 K, x₁ = 0.25", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Lec 1, slides 35–36, Example 10.3(a); SVNA 6th ed. SI, Example 10.3`,
          text: String.raw`(a) P and $\{y_i\}$, for T = 318.15 K and $x_1$ = 0.25.`,
          solution: String.raw`**Given:** T = 318.15 K, $x_1$ = 0.25.

**Find:** P and $y_1$ (BUBL P).

**Assumptions:** modified Raoult's law (low pressure, ideal vapour).

1. **Vapour pressures and A:** $P_1^{sat}$ = 44.51 kPa, $P_2^{sat}$ = 65.64 kPa, and A = 2.771 − 0.00523(318.15) = 1.107.

2. **Activity coefficients** (known directly, since x is given):
$$\gamma_1 = e^{1.107(0.75)^2} = 1.864, \qquad \gamma_2 = e^{1.107(0.25)^2} = 1.072$$

3. **Bubble pressure:**
$$P = \sum_ix_i\gamma_iP_i^{sat} = 0.25(1.864)(44.51) + 0.75(1.072)(65.64) = 20.74 + 52.76 = 73.50\ \mathrm{kPa}$$

4. **Vapour composition:** $y_1 = 20.74/73.50 = 0.282$, $y_2 = 0.718$.

**Result:** P = 73.50 kPa, $y_1$ = 0.282.`,
          answer: String.raw`A = 1.107, γ₁ = 1.864, γ₂ = 1.072; P = 73.50 kPa, y₁ = 0.282.` },
        { id: "practice-vle-intro-P3b", label: "(b)", marks: "", topic: "vle-intro",
          sub: "Methanol/methyl acetate: DEW P at 318.15 K, y₁ = 0.60", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Lec 1, slide 37, Example 10.3(b); SVNA Example 10.3`,
          text: String.raw`(b) P and $\{x_i\}$, for T = 318.15 K and $y_1$ = 0.60.`,
          solution: String.raw`**Given:** T = 318.15 K, $y_1$ = 0.60; $P_1^{sat}$ = 44.51 and $P_2^{sat}$ = 65.64 kPa; A = 1.107.

**Find:** P and $x_1$ (DEW P).

**Assumptions:** modified Raoult's law.

1. **Equations.** $\sum x_i = 1$ with $x_i = y_iP/(\gamma_iP_i^{sat})$ gives
$$P = \frac{1}{y_1/(\gamma_1P_1^{sat}) + y_2/(\gamma_2P_2^{sat})}$$
   The γ's depend on the unknown x, so iterate.

2. **Iteration.** Start with $\gamma_1 = \gamma_2 = 1$: P = 1/(0.6/44.51 + 0.4/65.64) = 51.11 kPa and $x_1$ = 0.6(51.11)/44.51 = 0.689. Re-evaluate the γ's at the new $x_1$, recompute P, then $x_1 = y_1P/(\gamma_1P_1^{sat})$, and repeat until P stops changing.

3. **Converged values:** $\gamma_1$ = 1.0378, $\gamma_2$ = 2.0935:
$$P = \left[\frac{0.6}{1.0378(44.51)} + \frac{0.4}{2.0935(65.64)}\right]^{-1} = 62.89\ \mathrm{kPa}, \qquad x_1 = \frac{0.6(62.89)}{1.0378(44.51)} = 0.8169$$

**Result:** P = 62.89 kPa, $x_1$ = 0.817, $x_2$ = 0.183.`,
          answer: String.raw`Iterating on γ(x): γ₁ = 1.038, γ₂ = 2.094 ⇒ P = 62.89 kPa, x₁ = 0.817.` },
        { id: "practice-vle-intro-P3c", label: "(c)", marks: "", topic: "vle-intro",
          sub: "Methanol/methyl acetate: BUBL T at 101.33 kPa, x₁ = 0.85", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Lec 1, slide 38, Example 10.3(c); SVNA Example 10.3`,
          text: String.raw`(c) T and $\{y_i\}$, for P = 101.33 kPa and $x_1$ = 0.85.`,
          solution: String.raw`**Given:** P = 101.33 kPa, $x_1$ = 0.85.

**Find:** T and $y_1$ (BUBL T).

**Assumptions:** modified Raoult's law.

1. **Starting T.** Pure boiling points at 101.33 kPa, $T_i^{sat} = B_i/(A_i - \ln P) - C_i$: $T_1^{sat}$ = 337.71 K and $T_2^{sat}$ = 330.08 K. Start from $T = 0.85(337.71) + 0.15(330.08) = 336.57$ K.

2. **Iteration scheme (slide).** With $\alpha = P_1^{sat}/P_2^{sat}$ (weakly T-dependent):
$$P_1^{sat} = \frac{P}{x_1\gamma_1 + x_2\gamma_2/\alpha}, \qquad T = \frac{3643.31}{16.59158 - \ln P_1^{sat}} + 33.424$$
   At each new T, re-evaluate A(T), the γ's and α, and repeat until T is constant.

3. **Converged:** T = 331.20 K, A = 1.0388, $\gamma_1$ = 1.0236, $\gamma_2$ = 2.1182, $P_1^{sat}$ = 77.99 and $P_2^{sat}$ = 105.35 kPa.
   Check: 0.85(1.0236)(77.99) + 0.15(2.1182)(105.35) = 67.86 + 33.47 = 101.33 kPa ✓.

4. **Vapour:** $y_1$ = 67.86/101.33 = 0.670, $y_2$ = 0.330.

**Result:** T = 331.20 K (58.05 °C), $y_1$ = 0.670.

**Note:** T lies *below* both pure boiling points (330.08 and 337.71 K). This is a sign of the maximum-pressure (minimum-boiling) azeotrope found in (e).`,
          answer: String.raw`T = 331.20 K (γ₁ = 1.024, γ₂ = 2.118, P₁ˢᵃᵗ = 77.99, P₂ˢᵃᵗ = 105.35 kPa), y₁ = 0.670.` },
        { id: "practice-vle-intro-P3d", label: "(d)", marks: "", topic: "vle-intro",
          sub: "Methanol/methyl acetate: DEW T at 101.33 kPa, y₁ = 0.40", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Lec 1, slide 39, Example 10.3(d); SVNA Example 10.3`,
          text: String.raw`(d) T and $\{x_i\}$, for P = 101.33 kPa and $y_1$ = 0.40.`,
          solution: String.raw`**Given:** P = 101.33 kPa, $y_1$ = 0.40.

**Find:** T and $x_1$ (DEW T).

**Assumptions:** modified Raoult's law.

1. **Start:** $T = 0.40(337.71) + 0.60(330.08) = 333.13$ K, with all $\gamma_i$ = 1.

2. **Iteration scheme (slide).** From $\sum x_i = 1$:
$$P_1^{sat} = P\left(\frac{y_1}{\gamma_1} + \frac{y_2}{\gamma_2}\alpha\right), \qquad \alpha = \frac{P_1^{sat}}{P_2^{sat}}$$
   T follows from the Antoine equation for species 1. Then $x_1 = y_1P/(\gamma_1P_1^{sat})$, and the γ's are re-evaluated at the new x and T. Both loops are repeated until T and x are constant.

3. **Converged:** T = 326.70 K, A = 1.0624, $x_1$ = 0.4602, $\gamma_1$ = 1.3628, $\gamma_2$ = 1.2523, $P_1^{sat}$ = 64.63 and $P_2^{sat}$ = 89.94 kPa.
   Check: $x_1\gamma_1P_1^{sat}$ = 0.4602(1.3628)(64.63) = 40.53 = $y_1P$ ✓; $x_2\gamma_2P_2^{sat}$ = 0.5398(1.2523)(89.94) = 60.80 = $y_2P$ ✓.

**Result:** T = 326.70 K, $x_1$ = 0.460, $x_2$ = 0.540.`,
          answer: String.raw`T = 326.70 K, x₁ = 0.460 (γ₁ = 1.363, γ₂ = 1.252).` },
        { id: "practice-vle-intro-P3e", label: "(e)", marks: "", topic: "vle-intro",
          sub: "Methanol/methyl acetate: azeotrope composition and pressure at 318.15 K", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Lec 1, slides 40–41, Example 10.3(e); SVNA Example 10.3`,
          text: String.raw`(e) The azeotropic pressure, and the azeotropic composition, for T = 318.15 K.`,
          solution: String.raw`**Given:** T = 318.15 K, A = 1.107; $P_1^{sat}$ = 44.51 and $P_2^{sat}$ = 65.64 kPa.

**Find:** whether an azeotrope exists; $x_1^{az}$ and $P^{az}$.

**Assumptions:** modified Raoult's law.

1. **Relative volatility:** $\alpha_{12} = \dfrac{y_1/x_1}{y_2/x_2} = \dfrac{\gamma_1P_1^{sat}}{\gamma_2P_2^{sat}}$. At an azeotrope $y_i = x_i$, so $\alpha_{12} = 1$.

2. **Limits:** $\ln(\gamma_1/\gamma_2) = A(x_2^2 - x_1^2) = A(1 - 2x_1)$.
$$\alpha_{12}(x_1 = 0) = \frac{P_1^{sat}}{P_2^{sat}}e^{A} = \frac{44.51}{65.64}e^{1.107} = 2.052, \qquad \alpha_{12}(x_1 = 1) = \frac{44.51}{65.64}e^{-1.107} = 0.224$$
   α₁₂ is continuous and passes from above 1 to below 1, so an azeotrope exists.

3. **Composition** ($\alpha_{12} = 1$):
$$A(1 - 2x_1^{az}) = \ln\frac{P_2^{sat}}{P_1^{sat}} = 0.3885 \;\Rightarrow\; x_1^{az} = \frac12\left(1 - \frac{0.3885}{1.107}\right) = 0.325 = y_1^{az}$$

4. **Pressure:**
$$\gamma_1^{az} = e^{1.107(0.675)^2} = 1.657, \qquad P^{az} = \gamma_1^{az}P_1^{sat} = 1.657(44.51) = 73.76\ \mathrm{kPa}$$
   This is above both vapour pressures: a **maximum-pressure** azeotrope (positive deviation).

**Result:** $x_1^{az} = y_1^{az}$ = 0.325, $P^{az}$ = 73.76 kPa.`,
          answer: String.raw`α₁₂ goes from 2.052 (x₁ = 0) to 0.224 (x₁ = 1) ⇒ azeotrope; x₁ᵃᶻ = 0.325, Pᵃᶻ = 1.657 × 44.51 = 73.76 kPa (maximum-pressure azeotrope).` }
      ] },
    { id: "practice-vle-intro-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw`For a mixture of 10 mol-% methane, 20 mol-% ethane, and 70 mol-% propane at 10°C (50°F), determine (the K-values are from the DePriester chart, as tabulated on the slides):`,
      parts: [
        { id: "practice-vle-intro-P4a", label: "(a)", marks: "", topic: "vle-intro",
          sub: "Light hydrocarbons at 50 °F: dew-point pressure from K-values", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Lec 1, slides 42–44 (K-values, DePriester chart and dew-point table); SVNA 6th ed. SI, Example 10.4(a)`,
          text: String.raw`(a) The dew-point pressure.`,
          solution: String.raw`**Given:** $y_1$ = 0.10 (CH₄), $y_2$ = 0.20 (C₂H₆), $y_3$ = 0.70 (C₃H₈); T = 50 °F.

**Find:** the dew-point pressure.

**Assumptions:** $K_i = y_i/x_i$ depends only on T and P (DePriester chart for light hydrocarbons; composition effects neglected).

1. **Criterion.** At the dew point $\sum_ix_i = \sum_iy_i/K_i = 1$. Guess P, read the $K_i$ at 50 °F and that P, and adjust P until the sum is 1. A larger P gives smaller K's and a larger sum.

2. **Trials** (K-values read from the chart, as on the slide):

| Species | $y_i$ | K (100 psia) | y/K | K (150 psia) | y/K | K (126 psia) | y/K |
|---|---|---|---|---|---|---|---|
| CH₄ | 0.10 | 20.0 | 0.005 | 13.2 | 0.008 | 16.0 | 0.006 |
| C₂H₆ | 0.20 | 3.25 | 0.062 | 2.25 | 0.089 | 2.65 | 0.075 |
| C₃H₈ | 0.70 | 0.92 | 0.761 | 0.65 | 1.077 | 0.762 | 0.919 |
| Σ | | | 0.828 | | 1.174 | | 1.000 |

   Linear interpolation of Σ between 100 and 150 psia gives about 125 psia. The trial at 126 psia closes the sum to 1.000.

3. **Dew-point liquid** ($x_i = y_i/K_i$ at 126 psia): $x$ = 0.006 CH₄, 0.075 C₂H₆, 0.919 C₃H₈ — mostly propane, the heaviest component.

**Result:** $P_{dew}$ ≈ 126 psia (8.7 bar), with the first drop of liquid 91.9% propane.`,
          answer: String.raw`Σyᵢ/Kᵢ = 1 by trial: 0.828 at 100 psia, 1.174 at 150 psia, 1.000 at 126 psia ⇒ P_dew ≈ 126 psia (8.7 bar); dew liquid x = 0.006, 0.075, 0.919.` },
        { id: "practice-vle-intro-P4b", label: "(b)", marks: "", topic: "vle-intro",
          sub: "Light hydrocarbons at 50 °F: bubble-point pressure from K-values", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Lec 1, slide 45 (bubble-point table); SVNA 6th ed. SI, Example 10.4(b)`,
          text: String.raw`(b) The bubble-point pressure.`,
          solution: String.raw`**Given:** $x$ = 0.10, 0.20, 0.70 (CH₄, C₂H₆, C₃H₈); T = 50 °F.

**Find:** the bubble-point pressure.

**Assumptions:** DePriester K-values, functions of T and P only.

1. **Criterion.** At the bubble point $\sum_iy_i = \sum_iK_ix_i = 1$. A higher P gives smaller K's and a smaller sum.

2. **Trials** (K-values from the chart, as on the slide):

| Species | $x_i$ | K (380 psia) | Kx | K (400 psia) | Kx | K (385 psia) | Kx |
|---|---|---|---|---|---|---|---|
| CH₄ | 0.10 | 5.60 | 0.560 | 5.25 | 0.525 | 5.49 | 0.549 |
| C₂H₆ | 0.20 | 1.11 | 0.222 | 1.07 | 0.214 | 1.10 | 0.220 |
| C₃H₈ | 0.70 | 0.335 | 0.235 | 0.32 | 0.224 | 0.33 | 0.231 |
| Σ | | | 1.017 | | 0.963 | | 1.000 |

   Interpolation gives about 386 psia; the trial at 385 psia closes the sum.

3. **Bubble vapour** ($y_i = K_ix_i$ at 385 psia): 0.549 CH₄, 0.220 C₂H₆, 0.231 C₃H₈. The first bubble is rich in methane, the lightest component.

**Result:** $P_{bubl}$ ≈ 385 psia (26.5 bar). Between 126 and 385 psia the mixture is two-phase at 50 °F.`,
          answer: String.raw`ΣKᵢxᵢ = 1 by trial: 1.017 at 380, 0.963 at 400, 1.000 at 385 psia ⇒ P_bubl ≈ 385 psia (26.5 bar); bubble vapour y = 0.549, 0.220, 0.231.` }
      ] },
    { id: "practice-vle-intro-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P5", label: "", marks: "", topic: "vle-intro",
        sub: "Raoult's-law P,T-flash of acetone/acetonitrile/nitromethane at 80 °C, 110 kPa", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lec 1, slides 46–47 (flash calculations); SVNA 6th ed. SI, Example 10.5`,
        text: String.raw`The system acetone(1)/acetonitrile(2)/nitromethane(3) at 80°C and 110 kPa has the overall composition $z_1$ = 0.45, $z_2$ = 0.35, $z_3$ = 0.20. Assuming that Raoult's law is appropriate to this system, determine L, V, $\{x_i\}$ and $\{y_i\}$. The vapor pressures of the pure species at 80°C are $P_1^{sat}$ = 195.75, $P_2^{sat}$ = 97.84, $P_3^{sat}$ = 50.32 kPa.`,
        solution: String.raw`**Given:** T = 80 °C, P = 110 kPa, z = (0.45, 0.35, 0.20), and the vapour pressures. Basis: 1 mol of feed.

**Find:** L, V, x, y.

**Assumptions:** Raoult's law, so $K_i = P_i^{sat}/P$.

1. **Is the feed two-phase?**
   - BUBL P with x = z: $P_{bubl}$ = 0.45(195.75) + 0.35(97.84) + 0.20(50.32) = 132.40 kPa.
   - DEW P with y = z: $P_{dew}$ = 1/(0.45/195.75 + 0.35/97.84 + 0.20/50.32) = 101.52 kPa.

   Since $P_{dew}$ < 110 < $P_{bubl}$, the system is two-phase.

2. **K-values:** $K_1$ = 195.75/110 = 1.7795, $K_2$ = 0.8895, $K_3$ = 0.4575.

3. **Flash equation** (Rachford–Rice form of $\sum y_i = 1$ and $\sum x_i = 1$):
$$F(\mathcal V) = \sum_i\frac{z_i(K_i - 1)}{1 + \mathcal V(K_i - 1)} = 0$$
   F is monotonic in 𝒱. Solving by Newton from 𝒱 = 0.5: **𝒱 = 0.7364** and **L = 0.2636** (mol per mol feed).

4. **Compositions:** $x_i = z_i/[1 + \mathcal V(K_i - 1)]$, $y_i = K_ix_i$.

| Species | $K_i$ | $x_i$ | $y_i$ |
|---|---|---|---|
| Acetone | 1.7795 | 0.2859 | 0.5087 |
| Acetonitrile | 0.8895 | 0.3810 | 0.3389 |
| Nitromethane | 0.4575 | 0.3331 | 0.1524 |
| Σ | | 1.0000 | 1.0000 |

**Result:** V = 0.7364 and L = 0.2636 mol per mol of feed; x and y as tabulated. The vapour is enriched in acetone, the liquid in nitromethane.`,
        answer: String.raw`P_dew = 101.52 < 110 < P_bubl = 132.40 kPa ⇒ two-phase; Kᵢ = 1.780, 0.890, 0.458 ⇒ V = 0.7364, L = 0.2636; x = (0.286, 0.381, 0.333), y = (0.509, 0.339, 0.152).` } ] },
    { id: "practice-vle-intro-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P6", label: "", marks: "", topic: "vle-intro",
        sub: "Methane/ethane/propane flash at 50 °F and 200 psia with DePriester K-values", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Example 10.6 (p. 345–346)`,
        text: String.raw`The system methane(1)/ethane(2)/propane(3) of Example 10.4 ($z$ = 0.10, 0.20, 0.70) is flashed at 10°C (50°F) and 200 psia. What fraction of the system is vapor, and what are the compositions of the phases? (From the DePriester chart at 50°F and 200 psia: $K_1$ = 10.0, $K_2$ = 1.76, $K_3$ = 0.52.)`,
        solution: String.raw`**Given:** z = (0.10, 0.20, 0.70), K = (10.0, 1.76, 0.52) at 50 °F and 200 psia.

**Find:** 𝒱, x, y.

**Assumptions:** K depends only on T and P, so it is fixed and the flash is solved directly.

1. **Check two-phase.** $\sum z_iK_i$ = 1.0 + 0.352 + 0.364 = 1.716 > 1: above the bubble point. $\sum z_i/K_i$ = 0.010 + 0.114 + 1.346 = 1.470 > 1: below the dew point. So the system is two-phase (consistent with P4: 126 < 200 < 385 psia).

2. **Solve $\sum_iy_i = \sum_i\dfrac{z_iK_i}{1 + \mathcal V(K_i - 1)} = 1$ by trial** (the book's table):

| | $z_i$ | $K_i$ | $y_i$ (𝒱 = 0.35) | $y_i$ (𝒱 = 0.25) | $y_i$ (𝒱 = 0.273) | $x_i = y_i/K_i$ |
|---|---|---|---|---|---|---|
| CH₄ | 0.10 | 10.0 | 0.241 | 0.308 | 0.289 | 0.029 |
| C₂H₆ | 0.20 | 1.76 | 0.278 | 0.296 | 0.292 | 0.166 |
| C₃H₈ | 0.70 | 0.52 | 0.438 | 0.414 | 0.419 | 0.805 |
| Σ | | | 0.957 | 1.018 | 1.000 | 1.000 |

3. **Converged:** 𝒱 = 0.2725 (≈ 0.273). Then y = (0.290, 0.292, 0.419) and x = (0.029, 0.166, 0.805).

**Result:** 27.3% of the system is vapour (rich in methane); the liquid is 80.5% propane.`,
        answer: String.raw`Σzᵢ(Kᵢ − 1)/[1 + V(Kᵢ − 1)] = 0 ⇒ V = 0.273; y = (0.290, 0.292, 0.419), x = (0.029, 0.166, 0.805).` } ] },
    { id: "practice-vle-intro-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P7", label: "", marks: "", topic: "vle-intro",
        sub: "Benzene/toluene by Raoult's law: BUBL P, DEW P, BUBL T, DEW T and P,T-flash", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 10.1 (p. 346–347); Antoine constants from SVNA Table 10.2`,
        text: String.raw`Assuming the validity of Raoult's law, do the following calculations for the benzene(1)/toluene(2) system:

(a) Given $x_1$ = 0.33 and T = 373.15 K (100°C), find $y_1$ and P.
(b) Given $y_1$ = 0.33 and T = 373.15 K (100°C), find $x_1$ and P.
(c) Given $x_1$ = 0.33 and P = 120 kPa, find $y_1$ and T.
(d) Given $y_1$ = 0.33 and P = 120 kPa, find $x_1$ and T.
(e) Given T = 387.15 K (105°C) and P = 120 kPa, find $x_1$ and $y_1$.
(f) For part (e), if the overall mole fraction of benzene is $z_1$ = 0.33, what molar fraction of the two-phase system is vapor?
(g) Why is Raoult's law likely to be an excellent VLE model for this system at the stated (or computed) conditions?

Table 10.2 ($\ln P^{sat}/\mathrm{kPa} = A - B/(T + C)$, T in K): benzene A = 13.8594, B = 2773.78, C = −53.08; toluene A = 14.0098, B = 3103.01, C = −53.36.`,
        solution: String.raw`**Assumptions:** Raoult's law, $y_iP = x_iP_i^{sat}$.

1. **(a) BUBL P at 373.15 K:** $P_1^{sat}$ = 180.05 kPa, $P_2^{sat}$ = 74.18 kPa.
$$P = 0.33(180.05) + 0.67(74.18) = 109.12\ \mathrm{kPa}, \qquad y_1 = \frac{0.33(180.05)}{109.12} = 0.545$$

2. **(b) DEW P at 373.15 K:**
$$P = \frac{1}{0.33/180.05 + 0.67/74.18} = 92.04\ \mathrm{kPa}, \qquad x_1 = \frac{0.33(92.04)}{180.05} = 0.169$$

3. **(c) BUBL T at 120 kPa.** The pure boiling points at 120 kPa are 358.83 K (benzene) and 389.83 K (toluene). Solve $0.33P_1^{sat}(T) + 0.67P_2^{sat}(T) = 120$ for T (e.g. by the α iteration of P3c): **T = 376.51 K**, and $y_1 = 0.33P_1^{sat}/120$ = **0.542**.

4. **(d) DEW T at 120 kPa.** Solve $0.33/P_1^{sat} + 0.67/P_2^{sat} = 1/120$: **T = 382.31 K**, and $x_1 = 0.33(120)/P_1^{sat}$ = **0.173**.

5. **(e) P,T-flash at 387.15 K and 120 kPa:** $P_1^{sat}$ = 258.89 kPa and $P_2^{sat}$ = 111.44 kPa.
$$x_1 = \frac{P - P_2^{sat}}{P_1^{sat} - P_2^{sat}} = \frac{120 - 111.44}{258.89 - 111.44} = 0.0580, \qquad y_1 = \frac{0.0580(258.89)}{120} = 0.125$$

6. **(f) Vapour fraction.** The lever rule gives $\mathcal V = \dfrac{z_1 - x_1}{y_1 - x_1} = \dfrac{0.33 - 0.058}{0.125 - 0.058} = 4.05$. This is impossible (> 1). With $z_1$ = 0.33 > $y_1$ = 0.125 the feed lies **outside** the two-phase region: at 105 °C and 120 kPa it is entirely **superheated vapour** (its dew temperature at 120 kPa is 382.31 K, below 387.15 K, as found in (d)). So 𝒱 = 1. Only feeds with 0.058 < $z_1$ < 0.125 would split into two phases.

7. **(g) Why Raoult's law is excellent here.**
   - Benzene and toluene are chemically very similar: aromatic, non-polar, nearly the same molecular size. Their mixtures are nearly ideal solutions, with γ ≈ 1.
   - The pressures (about 1 bar) are low, so the vapour is very nearly an ideal gas.
   - Both species are well below their critical temperatures (562 and 592 K), so the vapour pressures exist.

**Result:** (a) P = 109.12 kPa, $y_1$ = 0.545; (b) P = 92.04 kPa, $x_1$ = 0.169; (c) T = 376.51 K, $y_1$ = 0.542; (d) T = 382.31 K, $x_1$ = 0.173; (e) $x_1$ = 0.058, $y_1$ = 0.125; (f) the computed 𝒱 = 4.05 > 1, so the system is all vapour.`,
        answer: String.raw`(a) P = 109.12 kPa, y₁ = 0.545; (b) P = 92.04 kPa, x₁ = 0.169; (c) T = 376.51 K, y₁ = 0.542; (d) T = 382.31 K, x₁ = 0.173; (e) x₁ = 0.058, y₁ = 0.125; (f) lever rule gives 4.05 > 1 ⇒ z₁ = 0.33 is all vapour at these conditions; (g) similar non-polar aromatics at ~1 bar.` } ] },
    { id: "practice-vle-intro-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P8", label: "", marks: "", topic: "vle-intro",
        sub: "n-Pentane/n-heptane at 55 °C and P = ½(P₁ˢᵃᵗ + P₂ˢᵃᵗ): x₁, y₁ and V versus z₁", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 10.3(a) (p. 347); Antoine constants from Table 10.2`,
        text: String.raw`Assuming Raoult's law to apply to the system n-pentane(1)/n-heptane(2), what are the values of $x_1$ and $y_1$ at T = 328.15 K (55°C) and $P = \frac12(P_1^{sat} + P_2^{sat})$? For these conditions plot the fraction of system that is vapor V vs. overall composition $z_1$.

(Table 10.2: n-pentane A = 13.8183, B = 2477.07, C = −39.94; n-heptane A = 13.8587, B = 2991.32, C = −56.51.)`,
        solution: String.raw`**Assumptions:** Raoult's law.

1. **Vapour pressures at 328.15 K:** $P_1^{sat}$ = 185.61 kPa and $P_2^{sat}$ = 17.23 kPa, so P = ½(185.61 + 17.23) = 101.42 kPa.

2. **Phase compositions** (fixed by T and P for a binary, F = 2):
$$x_1 = \frac{P - P_2^{sat}}{P_1^{sat} - P_2^{sat}} = \frac{101.42 - 17.23}{168.38} = 0.500, \qquad y_1 = \frac{0.500(185.61)}{101.42} = 0.915$$
   This choice of P always gives $x_1$ = ½, since $P - P_2^{sat} = ½(P_1^{sat} - P_2^{sat})$.

3. **V against z₁** (lever rule):
$$\mathcal V = \frac{z_1 - x_1}{y_1 - x_1} = \frac{z_1 - 0.500}{0.415}$$

| $z_1$ | 0.50 | 0.60 | 0.70 | 0.80 | 0.915 |
|---|---|---|---|---|---|
| 𝒱 | 0 | 0.241 | 0.482 | 0.723 | 1 |

   The plot is a **straight line** from 𝒱 = 0 at $z_1 = x_1$ = 0.500 (bubble point) to 𝒱 = 1 at $z_1 = y_1$ = 0.915 (dew point). For $z_1$ < 0.5 the system is all liquid; for $z_1$ > 0.915 it is all vapour.

**Result:** $x_1$ = 0.500, $y_1$ = 0.915; 𝒱 = ($z_1$ − 0.5)/0.415 for 0.5 ≤ $z_1$ ≤ 0.915.`,
        answer: String.raw`P₁ˢᵃᵗ = 185.61, P₂ˢᵃᵗ = 17.23 kPa, P = 101.42 kPa ⇒ x₁ = 0.500, y₁ = 0.915; V = (z₁ − 0.5)/0.415, linear from 0 (z₁ = 0.5) to 1 (z₁ = 0.915).` } ] },
    { id: "practice-vle-intro-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P9", label: "", marks: "", topic: "vle-intro",
        sub: "Benzene/ethylbenzene separator producing x₁ = 0.35, y₁ = 0.70: T and P", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 10.7(a) (p. 347)`,
        text: String.raw`A single-stage liquid/vapor separation for the benzene(1)/ethylbenzene(2) system must produce phases of the following equilibrium compositions: $x_1$ = 0.35, $y_1$ = 0.70. Determine the T and P in the separator. What additional information is needed to compute the relative amounts of liquid and vapor leaving the separator? Assume that Raoult's law applies.

(Table 10.2: benzene A = 13.8594, B = 2773.78, C = −53.08; ethylbenzene A = 14.0045, B = 3279.47, C = −59.95.)`,
        solution: String.raw`**Assumptions:** Raoult's law. For a binary, F = 2 − 2 + 2 = 2, so fixing $x_1$ and $y_1$ fixes T and P.

1. **Eliminate P.** From $y_1P = x_1P_1^{sat}$ and $y_2P = x_2P_2^{sat}$:
$$\frac{P_1^{sat}(T)}{P_2^{sat}(T)} = \frac{y_1/x_1}{y_2/x_2} = \frac{0.70/0.35}{0.30/0.65} = 4.333$$
   This depends on T only, so solve for T.

2. **Solve for T:** at **T = 407.16 K (134.0 °C)**, $P_1^{sat}$ = 413.91 kPa and $P_2^{sat}$ = 95.52 kPa (ratio 4.333 ✓).

3. **Pressure:**
$$P = \frac{x_1P_1^{sat}}{y_1} = \frac{0.35(413.91)}{0.70} = 206.95\ \mathrm{kPa}$$
   Check: $x_2P_2^{sat}/y_2$ = 0.65(95.52)/0.30 = 206.95 kPa ✓.

4. **Additional information.** The amounts of liquid and vapour need the **overall feed composition $z_1$**. Then $\mathcal V = (z_1 - x_1)/(y_1 - x_1)$, valid for 0.35 < $z_1$ < 0.70, and with the feed rate the flows follow.

**Result:** T = 407.2 K (134 °C), P = 207 kPa; the feed composition (and rate) is needed for L and V.`,
        answer: String.raw`P₁ˢᵃᵗ/P₂ˢᵃᵗ = (y₁/x₁)/(y₂/x₂) = 4.333 ⇒ T = 407.2 K (134 °C); P = x₁P₁ˢᵃᵗ/y₁ = 206.95 kPa; need overall z₁ (V = (z₁ − 0.35)/0.35) to get L and V.` } ] },
    { id: "practice-vle-intro-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P10", label: "", marks: "", topic: "vle-intro",
        sub: "Acetone/acetonitrile flash z₁ = 0.75 at 340 K and 115 kPa: x, y, V and recovery", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 10.11(a) (p. 348)`,
        text: String.raw`A binary mixture of mole fraction $z_1$ is flashed to conditions T and P. Determine the equilibrium mole fractions $x_1$ and $y_1$ of the liquid and vapor phases formed, the molar fraction V of the vapor formed, and the fractional recovery $\mathcal R$ of species 1 in the vapor phase (defined as the ratio for species 1 of moles in the vapor to moles in the feed). Assume that Raoult's law applies.

(a) Acetone(1)/acetonitrile(2), $z_1$ = 0.75, T = 340 K, P = 115 kPa.

(Table 10.2: acetone A = 14.3916, B = 2795.82, C = −43.15; acetonitrile A = 14.7258, B = 3271.24, C = −31.30.)`,
        solution: String.raw`**Assumptions:** Raoult's law. Basis 1 mol of feed.

1. **Vapour pressures at 340 K:** $P_1^{sat}$ = 144.50 kPa and $P_2^{sat}$ = 62.11 kPa.

2. **Check two-phase:** $P_{bubl}$ = 0.75(144.50) + 0.25(62.11) = 123.91 kPa and $P_{dew}$ = 1/(0.75/144.50 + 0.25/62.11) = 108.52 kPa. Since 108.52 < 115 < 123.91, the feed is two-phase ✓.

3. **Phase compositions** (binary, fixed by T and P):
$$x_1 = \frac{115 - 62.11}{144.50 - 62.11} = 0.642, \qquad y_1 = \frac{0.642(144.50)}{115} = 0.807$$

4. **Vapour fraction:**
$$\mathcal V = \frac{z_1 - x_1}{y_1 - x_1} = \frac{0.75 - 0.642}{0.807 - 0.642} = 0.656$$

5. **Recovery of acetone in the vapour:**
$$\mathcal R = \frac{y_1\mathcal V}{z_1} = \frac{0.807(0.656)}{0.75} = 0.706$$

**Result:** $x_1$ = 0.642, $y_1$ = 0.807, 𝒱 = 0.656, $\mathcal R$ = 0.706.`,
        answer: String.raw`P₁ˢᵃᵗ = 144.50, P₂ˢᵃᵗ = 62.11 kPa (P_dew 108.5 < 115 < P_bubl 123.9) ⇒ x₁ = 0.642, y₁ = 0.807, V = 0.656, R = 0.706.` } ] },
    { id: "practice-vle-intro-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P11", label: "", marks: "", topic: "vle-intro",
        sub: "Humidity from Raoult's law: absolute, saturation, percentage and relative humidity", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 10.12 (p. 348)`,
        text: String.raw`Humidity, relating to the quantity of moisture in atmospheric air, is accurately given by equations derived from the ideal-gas law and Raoult's law for H₂O.

(a) The absolute humidity h is defined as the mass of water vapor in a unit mass of dry air. Show that it is given by $h = \dfrac{\mathcal M_{H_2O}}{\mathcal M_{air}}\dfrac{p_{H_2O}}{P - p_{H_2O}}$, where $\mathcal M$ represents a molar mass and $p_{H_2O} = y_{H_2O}P$.

(b) The saturation humidity $h^{sat}$ is defined as the value of h when air is in equilibrium with a large body of pure water. Show that it is given by $h^{sat} = \dfrac{\mathcal M_{H_2O}}{\mathcal M_{air}}\dfrac{P_{H_2O}^{sat}}{P - P_{H_2O}^{sat}}$.

(c) The percentage humidity is defined as the ratio of h to its saturation value, expressed as a percentage. The relative humidity is defined as the ratio of the partial pressure of water vapor in air to its vapor pressure, expressed as a percentage. What is the relation between these two quantities?`,
        solution: String.raw`1. **(a) Absolute humidity.** In an ideal-gas mixture the mole ratio equals the ratio of partial pressures: $n_{H_2O}/n_{air} = p_{H_2O}/p_{air} = p_{H_2O}/(P - p_{H_2O})$. Converting moles to mass:
$$h = \frac{m_{H_2O}}{m_{air}} = \frac{\mathcal M_{H_2O}\,n_{H_2O}}{\mathcal M_{air}\,n_{air}} = \frac{\mathcal M_{H_2O}}{\mathcal M_{air}}\frac{p_{H_2O}}{P - p_{H_2O}}$$

2. **(b) Saturation humidity.** At equilibrium with pure liquid water ($x_{H_2O}$ = 1, air insoluble), Raoult's law for water gives $y_{H_2O}P = P_{H_2O}^{sat}$, i.e. $p_{H_2O} = P_{H_2O}^{sat}$. Substituting:
$$h^{sat} = \frac{\mathcal M_{H_2O}}{\mathcal M_{air}}\frac{P_{H_2O}^{sat}}{P - P_{H_2O}^{sat}}$$

3. **(c) Relation.** Percentage humidity $h_p = 100h/h^{sat}$; relative humidity $h_r = 100\,p_{H_2O}/P_{H_2O}^{sat}$.
$$h_p = 100\frac{p_{H_2O}}{P_{H_2O}^{sat}}\cdot\frac{P - P_{H_2O}^{sat}}{P - p_{H_2O}} = h_r\,\frac{P - P_{H_2O}^{sat}}{P - p_{H_2O}}$$
   Since $p_{H_2O} \le P_{H_2O}^{sat}$, $h_p \le h_r$. The two are equal at 0% and 100%, and nearly equal when $P_{H_2O}^{sat} \ll P$.

4. **Example:** 30 °C, 101.325 kPa, $h_r$ = 60%: $P^{sat}$ = 4.247 kPa, p = 2.548 kPa. Then h = (18.015/28.97)(2.548/98.777) = 0.0160 kg/kg dry air, $h^{sat}$ = 0.0272, and $h_p$ = 59.0% (versus $h_r$ = 60%).`,
        answer: String.raw`h = (M_w/M_air)·p_w/(P − p_w) (ideal-gas mole ratio); at saturation p_w = P_wˢᵃᵗ (Raoult, x_w = 1) ⇒ hˢᵃᵗ; h_p = h_r(P − Pˢᵃᵗ)/(P − p_w) ≤ h_r (equal at 0 and 100 %; e.g. 30 °C, h_r = 60 % ⇒ h_p = 59.0 %).` } ] },
    { id: "practice-vle-intro-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P12", label: "", marks: "", topic: "vle-intro",
        sub: "Why air is not used instead of CO₂ to carbonate drinks (Henry's constants)", type: "theory", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 10.14 (p. 349); Henry's constants from SVNA Table 10.1 (p. 334)`,
        text: String.raw`Air, even more so than carbon dioxide, is inexpensive and nontoxic. Why is it not the gas of choice for making soda water and (cheap) champagne effervescent? Table 10.1 may provide useful data.`,
        solution: String.raw`1. **Henry's law** for a dilute gas in water: $y_iP = x_i\mathcal H_i$, so the dissolved mole fraction is $x_i = p_i/\mathcal H_i$. A **small** $\mathcal H$ means high solubility.

2. **Table 10.1 (25 °C):** $\mathcal H_{CO_2}$ = 1670 bar; $\mathcal H_{air}$ = 72 950 bar ($\mathcal H_{N_2}$ = 87 650, $\mathcal H_{O_2}$ = 44 380 bar).
   At the same partial pressure, CO₂ is $72\,950/1670 \approx 44$ times more soluble (in mole fraction) than air.

3. **Illustration** at a gas partial pressure of 5 bar:
   - CO₂: $x$ = 5/1670 = 3.0 × 10⁻³. With 55.5 mol of water per litre this is 0.166 mol, about 7.3 g/L.
   - Air: $x$ = 5/72 950 = 6.9 × 10⁻⁵, about 3.8 × 10⁻³ mol, or 0.11 g/L.

   To dissolve as much air as CO₂ the bottle would need about 44 times the pressure, over 200 bar, which is impossible in a glass bottle.

4. **Other reasons:**
   - CO₂ also reacts slightly with water (carbonic acid), which gives the pleasant sharp taste. Air would give neither the taste nor the fizz on opening.
   - Dissolved O₂ would oxidise and spoil flavours.

**Conclusion:** air is far too insoluble (Henry's constant about 44 times larger), so it cannot carry enough dissolved gas at practical pressures to make the drink effervescent.`,
        answer: String.raw`x = p/𝓗: 𝓗_CO₂ = 1670 bar vs 𝓗_air = 72 950 bar at 25 °C ⇒ CO₂ ~44 times more soluble; air would need >200 bar for the same dissolved amount, gives no acidic taste, and O₂ spoils flavour.` } ] },
    { id: "practice-vle-intro-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P13", label: "", marks: "", topic: "vle-intro",
        sub: "Ethyl ethanoate/n-heptane at 343.15 K: DEW P at y₁ = 0.05 (modified Raoult)", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 10.17(b) (p. 349). Parts (a) and (c) were set in 2020-21 Q3(b).`,
        text: String.raw`For the system ethyl ethanoate(1)/n-heptane(2) at 343.15 K (70°C), $\ln\gamma_1 = 0.95x_2^2$, $\ln\gamma_2 = 0.95x_1^2$, $P_1^{sat}$ = 79.80 kPa, $P_2^{sat}$ = 40.50 kPa. Assuming the validity of modified Raoult's law, make a DEW P calculation for T = 343.15 K (70°C), $y_1$ = 0.05.`,
        solution: String.raw`**Given:** A = 0.95, $P_1^{sat}$ = 79.80 kPa, $P_2^{sat}$ = 40.50 kPa, $y_1$ = 0.05.

**Find:** P and $x_1$.

**Assumptions:** modified Raoult's law.

1. **DEW P equation:**
$$P = \frac{1}{y_1/(\gamma_1P_1^{sat}) + y_2/(\gamma_2P_2^{sat})}, \qquad x_1 = \frac{y_1P}{\gamma_1P_1^{sat}}$$
   with the γ's evaluated at the unknown $x_1$.

2. **Iteration:**
   - γ = 1: P = 1/(0.05/79.80 + 0.95/40.50) = 41.53 kPa and $x_1$ = 0.05(41.53)/79.80 = 0.0260.
   - At $x_1$ = 0.0260: $\gamma_1 = e^{0.95(0.974)^2}$ = 2.463, $\gamma_2$ = 1.0006, so P = 42.20 kPa and $x_1$ = 0.0107.
   - Repeating converges at $x_1$ = 0.0104.

3. **Converged:** $\gamma_1$ = 2.535, $\gamma_2$ = 1.0001:
$$P = \left[\frac{0.05}{2.535(79.80)} + \frac{0.95}{1.0001(40.50)}\right]^{-1} = 42.19\ \mathrm{kPa}, \qquad x_1 = \frac{0.05(42.19)}{2.535(79.80)} = 0.0104$$

4. **Interpretation.** A vapour with 5% ethyl ethanoate is in equilibrium with a liquid of only about 1% ethyl ethanoate. The large $\gamma_1^\infty$ ($e^{0.95}$ = 2.59) makes the ester very volatile at high dilution in heptane (compare the BUBL P of 2020-21: $x_1$ = 0.05 gives $y_1$ = 0.196).

**Result:** P = 42.19 kPa, $x_1$ = 0.0104.`,
        answer: String.raw`Iterating on γ(x): γ₁ = 2.535, γ₂ = 1.000 ⇒ P = 42.19 kPa, x₁ = 0.0104.` } ] },
    { id: "practice-vle-intro-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P14", label: "", marks: "", topic: "vle-intro",
        sub: "Rule of thumb y₁ = P₁ˢᵃᵗ/(P₁ˢᵃᵗ + P₂ˢᵃᵗ) for an equimolar liquid with symmetric γ", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 10.21 (p. 350)`,
        text: String.raw`The following is a rule of thumb: For a binary system in VLE at low pressure, the equilibrium vapor-phase mole fraction $y_1$ corresponding to an equimolar liquid mixture is approximately

$$y_1 = \frac{P_1^{sat}}{P_1^{sat} + P_2^{sat}}$$

where $P_i^{sat}$ is a pure-species vapor pressure. Clearly, this equation is valid if Raoult's law applies. Prove that it is also valid for VLE described by modified Raoult's law with $\ln\gamma_1 = Ax_2^2$, $\ln\gamma_2 = Ax_1^2$.`,
        solution: String.raw`1. **Raoult's law** at $x_1 = x_2 = ½$:
$$y_1 = \frac{x_1P_1^{sat}}{x_1P_1^{sat} + x_2P_2^{sat}} = \frac{½P_1^{sat}}{½(P_1^{sat} + P_2^{sat})} = \frac{P_1^{sat}}{P_1^{sat} + P_2^{sat}}$$

2. **Modified Raoult's law:** $y_1 = \dfrac{x_1\gamma_1P_1^{sat}}{x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat}}$.

3. **At $x_1 = x_2 = ½$** the symmetric model gives
$$\ln\gamma_1 = A(½)^2 = \frac A4 = \ln\gamma_2 \;\Rightarrow\; \gamma_1 = \gamma_2 = e^{A/4}$$

4. **Substitute:** the common factor $½e^{A/4}$ cancels:
$$y_1 = \frac{½e^{A/4}P_1^{sat}}{½e^{A/4}(P_1^{sat} + P_2^{sat})} = \frac{P_1^{sat}}{P_1^{sat} + P_2^{sat}}\ \blacksquare$$

5. **Remarks.**
   - Only the **pressure** differs from Raoult's law: $P = e^{A/4}(P_1^{sat} + P_2^{sat})/2$.
   - The result holds for any symmetric $G^E$ model, where $\gamma_1 = \gamma_2$ at $x_1$ = ½. For unsymmetric models (e.g. Margules with $A_{12} \ne A_{21}$) it is only approximate, hence a "rule of thumb".`,
        answer: String.raw`At x₁ = x₂ = ½ the symmetric model gives γ₁ = γ₂ = e^(A/4), which cancels in y₁ = x₁γ₁P₁ˢᵃᵗ/ΣxᵢγᵢPᵢˢᵃᵗ ⇒ y₁ = P₁ˢᵃᵗ/(P₁ˢᵃᵗ + P₂ˢᵃᵗ) (only P changes by e^(A/4)).` } ] },
    { id: "practice-vle-intro-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P15", label: "", marks: "", topic: "vle-intro",
        sub: "Separator for x₁ = 0.002, y₁ = 0.950 with ln γ = 0.93x²: T and P", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 10.22 (p. 350)`,
        text: String.raw`A process stream contains light species 1 and heavy species 2. A relatively pure liquid stream containing mostly 2 is desired, obtained by a single-stage liquid/vapor separation. Specifications on the equilibrium composition are: $x_1$ = 0.002 and $y_1$ = 0.950. Use data given below to determine T(K) and P(bar) for the separator. Assume that modified Raoult's law applies; the calculated P should validate this assumption. Data:

For the liquid phase, $\ln\gamma_1 = 0.93x_2^2$, $\ln\gamma_2 = 0.93x_1^2$

$$\ln P_i^{sat}/\mathrm{bar} = A_i - \frac{B_i}{T/\mathrm K}$$

$A_1$ = 10.08, $B_1$ = 2572.0, $A_2$ = 11.63, $B_2$ = 6254.0`,
        solution: String.raw`**Given:** $x_1$ = 0.002, $y_1$ = 0.950; A = 0.93; the vapour-pressure constants.

**Find:** T and P.

**Assumptions:** modified Raoult's law (to be checked: P must be low).

1. **Activity coefficients** (x is known):
$$\gamma_1 = e^{0.93(0.998)^2} = 2.525, \qquad \gamma_2 = e^{0.93(0.002)^2} = 1.000$$

2. **Eliminate P.** Divide $y_1P = x_1\gamma_1P_1^{sat}$ by $y_2P = x_2\gamma_2P_2^{sat}$:
$$\frac{P_1^{sat}}{P_2^{sat}} = \frac{y_1x_2\gamma_2}{y_2x_1\gamma_1} = \frac{0.95(0.998)(1.000)}{0.05(0.002)(2.525)} = 3755$$
$$\ln\frac{P_1^{sat}}{P_2^{sat}} = (10.08 - 11.63) + \frac{6254.0 - 2572.0}{T} = -1.55 + \frac{3682}{T} = \ln 3755 = 8.231$$
$$T = \frac{3682}{9.781} = \mathbf{376.45\ K}$$

3. **Pressure:** $P_1^{sat} = e^{10.08 - 2572/376.45}$ = 25.73 bar and $P_2^{sat}$ = 0.006854 bar.
$$P = \frac{x_1\gamma_1P_1^{sat}}{y_1} = \frac{0.002(2.525)(25.73)}{0.95} = \mathbf{0.137\ bar}$$
   Check: $x_2\gamma_2P_2^{sat}/y_2$ = 0.998(0.006854)/0.05 = 0.137 bar ✓.

4. **Validation.** P = 0.137 bar is a vacuum, so the vapour is certainly an ideal gas and the Poynting factors are 1. Modified Raoult's law is justified.

**Result:** T ≈ 376.5 K, P ≈ 0.137 bar.`,
        answer: String.raw`γ₁ = 2.525, γ₂ = 1.000; P₁ˢᵃᵗ/P₂ˢᵃᵗ = 3755 ⇒ −1.55 + 3682/T = 8.231 ⇒ T = 376.45 K; P = x₁γ₁P₁ˢᵃᵗ/y₁ = 0.137 bar (low ⇒ assumption valid).` } ] },
    { id: "practice-vle-intro-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P16", label: "", marks: "(5+15+10=30)", topic: "vle-intro",
        sub: "Modified Raoult, ln γ = 1.2x²: two-phase pressure range, flash at x₁ = 0.30, azeotrope", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem in the format of 2022-23 Q5(b) and 2013-14 Q5(b), with new data`,
        text: String.raw`A binary system of species 1 and 2 consists of vapor and liquid phases in equilibrium at temperature T. The overall mole fraction of species 1 in the system is $z_1$ = 0.40. At temperature T,

$$\ln\gamma_1 = 1.2x_2^2, \qquad \ln\gamma_2 = 1.2x_1^2, \qquad P_1^{sat} = 60.0\ \mathrm{kPa}, \qquad P_2^{sat} = 40.0\ \mathrm{kPa}$$

Assuming modified Raoult's law:

(i) Over what range of pressures can this system exist as two phases at the given T and $z_1$?

(ii) For a liquid-phase mole fraction $x_1$ = 0.30, what is the pressure P, and what molar fraction 𝒱 of the system is vapor?

(iii) Show whether or not the system exhibits an azeotrope; if so, find its composition and pressure.`,
        solution: String.raw`**Given:** A = 1.2, $P_1^{sat}$ = 60.0 kPa, $P_2^{sat}$ = 40.0 kPa, $z_1$ = 0.40.

**Assumptions:** modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$.

1. **(i) Bubble point** ($x_1 = z_1$ = 0.40): $\gamma_1 = e^{1.2(0.6)^2}$ = 1.5403, $\gamma_2 = e^{1.2(0.4)^2}$ = 1.2117.
$$P_{bubl} = 0.4(1.5403)(60) + 0.6(1.2117)(40) = 36.97 + 29.08 = 66.05\ \mathrm{kPa}$$

2. **(i) Dew point** ($y_1 = z_1$ = 0.40): iterate $P = 1/\sum(y_i/\gamma_iP_i^{sat})$ with γ at $x_1 = y_1P/(\gamma_1P_1^{sat})$. Starting from γ = 1, it converges to $x_1$ = 0.1664, $\gamma_1$ = 2.3024, $\gamma_2$ = 1.0338:
$$P_{dew} = \left[\frac{0.4}{2.3024(60)} + \frac{0.6}{1.0338(40)}\right]^{-1} = 57.45\ \mathrm{kPa}$$
   Two-phase range: **57.45 kPa < P < 66.05 kPa**.

3. **(ii) At $x_1$ = 0.30:** $\gamma_1 = e^{1.2(0.49)}$ = 1.8004, $\gamma_2 = e^{1.2(0.09)}$ = 1.1140.
$$P = 0.3(1.8004)(60) + 0.7(1.1140)(40) = 32.41 + 31.19 = 63.60\ \mathrm{kPa}, \qquad y_1 = \frac{32.41}{63.60} = 0.5095$$
$$\mathcal V = \frac{z_1 - x_1}{y_1 - x_1} = \frac{0.40 - 0.30}{0.5095 - 0.30} = 0.477$$
   P lies inside the range from (i) ✓.

4. **(iii) Azeotrope.** $\alpha_{12} = \dfrac{\gamma_1P_1^{sat}}{\gamma_2P_2^{sat}} = 1.5e^{1.2(1 - 2x_1)}$:
$$\alpha_{12}(0) = 1.5e^{1.2} = 4.98, \qquad \alpha_{12}(1) = 1.5e^{-1.2} = 0.452$$
   α₁₂ crosses 1, so an azeotrope exists. (Condition: $A > |\ln(P_1^{sat}/P_2^{sat})|$ = 0.405.)
$$1.2(1 - 2x_1^{az}) = -\ln 1.5 \;\Rightarrow\; x_1^{az} = \frac12\left(1 + \frac{0.4055}{1.2}\right) = 0.669$$
$$P^{az} = \gamma_1P_1^{sat} = e^{1.2(0.331)^2}(60) = 68.43\ \mathrm{kPa}$$
   This is above both vapour pressures: a **maximum-pressure azeotrope**, as expected for positive deviations (A > 0).

**Result:** (i) 57.45–66.05 kPa; (ii) P = 63.60 kPa, $y_1$ = 0.510, 𝒱 = 0.477; (iii) azeotrope at $x_1 = y_1$ = 0.669, P = 68.43 kPa.`,
        answer: String.raw`(i) P_dew = 57.45 kPa (x₁ = 0.166) < P < P_bubl = 66.05 kPa (y₁ = 0.560); (ii) P = 63.60 kPa, y₁ = 0.510, V = 0.477; (iii) α₁₂ from 4.98 to 0.452 ⇒ azeotrope x₁ = 0.669, P = 68.43 kPa (maximum-pressure).` } ] },
    { id: "practice-vle-intro-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P17", label: "", marks: "(5+10+5=20)", topic: "vle-intro",
        sub: "Soda bottle at 17 °C and 3 bar: dissolved CO₂, and what remains after opening (Henry's law)", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem in the format of 2020-21 Q1(b) and 2018-19 Q1(b), with Henry's constants from the 2020-21 data sheet (Mills, Table A.21)`,
        text: String.raw`A sealed 500-mL bottle of soda water is stored at 17°C (290 K). The gas space above the liquid contains a saturated mixture of CO₂ and water vapor at a total pressure of 300 kPa. Treat the drink as pure water (density 1 kg/L). Henry's constant of CO₂ in water at 290 K is 1280 bar; vapor pressures of water: 1.7057 kPa at 15°C and 2.3392 kPa at 20°C.

(i) Determine the mole fraction of water vapor in the gas space.

(ii) Determine the mole fraction and the mass of CO₂ dissolved in the drink.

(iii) The bottle is opened and left until the drink is in equilibrium with atmospheric air at 101.325 kPa containing 0.04 mol% CO₂. How much CO₂ (g, and litres of gas at 290 K and 1 atm) escapes?`,
        solution: String.raw`**Given:** T = 290 K, P = 300 kPa, 500 mL of drink, $\mathcal H_{CO_2}$ = 1280 bar.

**Assumptions:**
- Liquid ≈ pure water ($x_w$ ≈ 1), so Raoult's law applies for water.
- Henry's law for CO₂ (dilute, P below about 5 atm).
- Ideal-gas vapour; T constant.

1. **(i) Water vapour.** Interpolating to 17 °C: $P_{sat}$ = 1.7057 + 0.4(2.3392 − 1.7057) = 1.959 kPa.
$$y_{H_2O} = \frac{P_{sat}}{P} = \frac{1.959}{300} = 0.00653$$

2. **(ii) Dissolved CO₂:** $p_{CO_2}$ = 300 − 1.96 = 298.04 kPa = 2.980 bar.
$$x_{CO_2} = \frac{p_{CO_2}}{\mathcal H} = \frac{2.980}{1280} = 2.33\times10^{-3}$$
   Water: 500/18.015 = 27.75 mol. So
$$N_{CO_2} = \frac{x}{1 - x}N_w = \frac{0.00233}{0.99767}(27.75) = 0.0648\ \mathrm{mol} \;\Rightarrow\; m = 0.0648(44.01) = 2.85\ \mathrm g$$

3. **(iii) After opening:** $p_{CO_2}$ = 0.0004(1.01325) = 4.05 × 10⁻⁴ bar.
$$x'_{CO_2} = \frac{4.05\times10^{-4}}{1280} = 3.17\times10^{-7}, \qquad N' = 3.17\times10^{-7}(27.75) = 8.8\times10^{-6}\ \mathrm{mol}\ (0.0004\ \mathrm g)$$
   CO₂ released: 0.0648 − 0.0000088 ≈ 0.0648 mol = **2.85 g**, essentially all of it.
$$V_{gas} = \frac{NRT}{P} = \frac{0.0648(8.314)(290)}{101325} = 1.54\times10^{-3}\ \mathrm m^3 = 1.54\ \mathrm L$$
   That is three times the volume of the drink, which is why a soda goes "flat".

**Result:** (i) $y_{H_2O}$ = 0.0065; (ii) $x_{CO_2}$ = 2.33 × 10⁻³, 2.85 g; (iii) about 2.85 g (1.54 L at 1 atm, 17 °C) escapes.`,
        answer: String.raw`(i) Pₛₐₜ(17 °C) = 1.959 kPa ⇒ y_H₂O = 0.0065; (ii) x_CO₂ = 2.980/1280 = 2.33×10⁻³ ⇒ 0.0648 mol = 2.85 g; (iii) x′ = 3.2×10⁻⁷ ⇒ ≈ 2.85 g (1.54 L at 1 atm, 290 K) escapes.` } ] },
    { id: "practice-vle-intro-P18", q: 18, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P18", label: "", marks: "(10)", topic: "vle-intro",
        sub: "Positive and negative deviations from Raoult's law: P–x–y shapes, azeotropes, molecular reasons", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lec 1, slides 19–23 ("VLE: qualitative behavior"); SVNA §10.3`,
        text: String.raw`With neat sketches of P–x–y diagrams at constant T, explain positive and negative deviations from Raoult's law. Under what conditions do maximum-pressure and minimum-pressure azeotropes form, and what do these deviations indicate about intermolecular forces? How do the azeotropes appear on a constant-P (t–x–y) diagram?`,
        solution: String.raw`1. **Raoult's law** gives a straight bubble line, $P = P_2^{sat} + (P_1^{sat} - P_2^{sat})x_1$ (dashed lines in the figure). Real systems deviate.

![P–x–y diagrams generated with ln γ₁ = Ax₂²: A > 0 (left) gives a maximum-pressure azeotrope, A < 0 (right) a minimum-pressure azeotrope](fig/practice-vle-intro-P18-sketch.svg)

2. **Positive deviation (γᵢ > 1, $G^E$ > 0).** The P–x₁ (bubble) curve lies **above** the Raoult line. If the deviation is large relative to the difference in vapour pressures ($A > |\ln(P_1^{sat}/P_2^{sat})|$ for the symmetric model), the P–x₁ curve passes through a **maximum**. At that point the P–y₁ curve has the same maximum and touches it: a **maximum-pressure azeotrope** with $x_1 = y_1$. Left figure: A = 1.2, $P_1^{sat}$ = 60, $P_2^{sat}$ = 40 kPa, azeotrope at $x_1$ = 0.67, 68.4 kPa.
   - **Molecular reason:** attractions between **like** molecules are stronger than between unlike ones (e.g. ethanol hydrogen bonds broken by a hydrocarbon). Each species "escapes" more easily from the mixture.

3. **Negative deviation (γᵢ < 1, $G^E$ < 0).** The P–x₁ curve lies **below** the Raoult line. A strong negative deviation gives a **minimum** in P: a **minimum-pressure azeotrope**. Right figure: A = −1.116, azeotrope at $x_1$ = 0.40, 33.5 kPa.
   - **Molecular reason:** **unlike** pairs attract more strongly than like pairs, e.g. hydrogen bonding between acetone and chloroform, or between phenol and cyclohexanone.

4. **Thermodynamics of the extremum.** From the stability analysis, $\dfrac{1}{P}\dfrac{dP}{dx_1} = \dfrac{y_1 - x_1}{y_1y_2}\dfrac{dy_1}{dx_1}$ with $dy_1/dx_1 > 0$. So $dP/dx_1 = 0$ exactly where $y_1 = x_1$. At the azeotrope the bubble and dew curves are tangent, and ordinary distillation cannot pass that composition.

5. **On a t–x–y diagram (constant P):** the maximum-pressure azeotrope becomes a **minimum-boiling (minimum-temperature)** azeotrope (e.g. ethanol/water, 89 mol% ethanol at 78.2 °C). The minimum-pressure azeotrope becomes a **maximum-boiling** azeotrope (e.g. acetone/chloroform at about 64.5 °C).`,
        answer: String.raw`Positive deviation (γ > 1, like–like attraction stronger): bubble curve above Raoult line, possibly a P maximum = maximum-pressure (minimum-boiling) azeotrope. Negative deviation (γ < 1, unlike attraction stronger): curve below, possibly a P minimum = minimum-pressure (maximum-boiling) azeotrope. At the extremum y₁ = x₁ since dP/dx₁ ∝ (y₁ − x₁).` } ] },
    { id: "practice-vle-intro-P19", q: 19, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P19", label: "", marks: "(5+10+10=25)", topic: "vle-intro",
        sub: "Minimum-pressure azeotrope at x₁ = 0.40: A, azeotrope pressure, BUBL P and DEW P", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem in the format of 2018-19 Q2(a) / SVNA Problem 10.18, extended with a DEW P`,
        text: String.raw`At temperature T a binary liquid system obeys modified Raoult's law with $\ln\gamma_1 = Ax_2^2$ and $\ln\gamma_2 = Ax_1^2$. At this T, $P_1^{sat}$ = 50.0 kPa and $P_2^{sat}$ = 40.0 kPa, and the system forms an azeotrope at $x_1^{az} = y_1^{az}$ = 0.40.

(i) Determine A and the azeotrope pressure. Is it a maximum- or minimum-pressure azeotrope?

(ii) Make a BUBL P calculation for $x_1$ = 0.80.

(iii) Make a DEW P calculation for $y_1$ = 0.80.`,
        solution: String.raw`**Assumptions:** modified Raoult's law; the one-parameter model holds over the whole composition range.

1. **(i) A from the azeotrope.** At $x_1 = y_1$: $\gamma_1P_1^{sat} = \gamma_2P_2^{sat}$, so
$$A(1 - 2x_1^{az}) = \ln\frac{P_2^{sat}}{P_1^{sat}} \;\Rightarrow\; A = \frac{\ln(40/50)}{1 - 0.80} = \frac{-0.2231}{0.20} = -1.116$$
$$P^{az} = \gamma_1P_1^{sat} = e^{-1.116(0.60)^2}(50) = 0.6692(50) = 33.46\ \mathrm{kPa}$$
   A < 0 (negative deviation) and $P^{az}$ is below both vapour pressures: a **minimum-pressure** azeotrope (maximum-boiling at constant P).

2. **(ii) BUBL P at $x_1$ = 0.80:** $\gamma_1 = e^{-1.116(0.04)}$ = 0.9564, $\gamma_2 = e^{-1.116(0.64)}$ = 0.4897.
$$P = 0.8(0.9564)(50) + 0.2(0.4897)(40) = 38.25 + 3.92 = 42.17\ \mathrm{kPa}, \qquad y_1 = \frac{38.25}{42.17} = 0.907$$

3. **(iii) DEW P at $y_1$ = 0.80.** Iterate $P = 1/[y_1/(\gamma_1P_1^{sat}) + y_2/(\gamma_2P_2^{sat})]$ and $x_1 = y_1P/(\gamma_1P_1^{sat})$:
   - γ = 1: P = 47.62 kPa, $x_1$ = 0.762.
   - Repeating converges at $x_1$ = 0.681, $\gamma_1$ = 0.8928, $\gamma_2$ = 0.5959.
$$P = \left[\frac{0.8}{0.8928(50)} + \frac{0.2}{0.5959(40)}\right]^{-1} = 38.01\ \mathrm{kPa}, \qquad x_1 = \frac{0.8(38.01)}{0.8928(50)} = 0.681$$

4. **Check.** At $x_1$ = 0.80 > $x^{az}$, species 1 is the more volatile ($y_1$ > $x_1$). A vapour with $y_1$ = 0.80 is in equilibrium with a liquid of lower $x_1$ (0.681), which also lies to the right of the azeotrope ✓.

**Result:** (i) A = −1.116, $P^{az}$ = 33.46 kPa (minimum-pressure azeotrope); (ii) P = 42.17 kPa, $y_1$ = 0.907; (iii) P = 38.01 kPa, $x_1$ = 0.681.`,
        answer: String.raw`(i) A = ln(0.8)/0.2 = −1.116, Pᵃᶻ = 33.46 kPa (minimum-pressure); (ii) BUBL P (x₁ = 0.8): P = 42.17 kPa, y₁ = 0.907; (iii) DEW P (y₁ = 0.8): P = 38.01 kPa, x₁ = 0.681.` } ] },
    { id: "practice-vle-intro-P20", q: 20, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P20", label: "", marks: "(10+10=20)", topic: "vle-intro",
        sub: "Equimolar benzene/toluene/ethylbenzene at 1 atm: BUBL T and DEW T by Raoult's law", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style multicomponent problem (cf. SVNA Problem 10.9 system); Antoine constants from SVNA Table 10.2`,
        text: String.raw`An equimolar liquid mixture of benzene(1), toluene(2) and ethylbenzene(3) is at 101.33 kPa. Assuming Raoult's law, determine:

(i) the bubble-point temperature and the composition of the first vapor formed;

(ii) the dew-point temperature of an equimolar vapor of the same three species, and the composition of the first liquid formed.

Antoine equation $\ln P^{sat}/\mathrm{kPa} = A - B/(T + C)$, T in K: benzene 13.8594, 2773.78, −53.08; toluene 14.0098, 3103.01, −53.36; ethylbenzene 14.0045, 3279.47, −59.95.`,
        solution: String.raw`**Assumptions:** Raoult's law (similar aromatics, 1 atm).

1. **Pure boiling points at 101.33 kPa:** benzene 353.24 K, toluene 383.77 K, ethylbenzene 409.35 K. The bubble and dew temperatures lie between 353 and 409 K.

2. **(i) BUBL T:** solve $\sum_ix_iP_i^{sat}(T) = P$. Iteration scheme: pick a reference species j (toluene), $P_j^{sat} = P/\sum_ix_i(P_i^{sat}/P_j^{sat})$, then T from Antoine for j; repeat. Start at $T = \sum x_iT_i^{sat}$ = 382.1 K.
   Converged: **T = 374.99 K (101.8 °C)**, with $P_i^{sat}$ = 189.18, 78.41, 36.40 kPa.
   Check: (189.18 + 78.41 + 36.40)/3 = 101.33 kPa ✓.
$$y_i = \frac{x_iP_i^{sat}}{P}: \quad y = (0.622,\ 0.258,\ 0.120)$$

3. **(ii) DEW T:** solve $\sum_iy_i/P_i^{sat}(T) = 1/P$. Scheme: $P_j^{sat} = P\sum_iy_i(P_j^{sat}/P_i^{sat})$, then T from Antoine.
   Converged: **T = 389.28 K (116.1 °C)**, with $P_i^{sat}$ = 272.89, 118.21, 57.20 kPa.
$$x_i = \frac{y_iP}{P_i^{sat}}: \quad x = (0.124,\ 0.286,\ 0.591)$$

4. **Interpretation.** An equimolar liquid starts to boil at 101.8 °C, giving vapour rich in benzene. An equimolar vapour starts to condense at 116.1 °C, giving liquid rich in ethylbenzene. For a given equimolar mixture, the two-phase range at 1 atm is 101.8–116.1 °C.

**Result:** (i) $T_{bubl}$ = 375.0 K, y = (0.622, 0.258, 0.120); (ii) $T_{dew}$ = 389.3 K, x = (0.124, 0.286, 0.591).`,
        answer: String.raw`(i) BUBL T = 374.99 K (101.8 °C), Pˢᵃᵗ = 189.2, 78.4, 36.4 kPa ⇒ y = (0.622, 0.258, 0.120); (ii) DEW T = 389.28 K (116.1 °C), Pˢᵃᵗ = 272.9, 118.2, 57.2 kPa ⇒ x = (0.124, 0.286, 0.591).` } ] },
    { id: "practice-vle-intro-P21", q: 21, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-intro-P21", label: "", marks: "(4×3=12)", topic: "vle-intro",
        sub: "Phase rule and Duhem's theorem: degrees of freedom of VLE systems", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lec 1, slides on the phase rule and Duhem's rule; SVNA §10.2`,
        text: String.raw`Answer briefly with reasons:

(i) How many intensive variables must be specified to fix the state of (a) pure water in VLE, (b) a binary mixture in VLE, (c) a binary mixture in vapor/liquid/liquid equilibrium?

(ii) State Duhem's theorem. Why can a flash calculation be specified by T and P (both intensive), while the phase rule gives only two degrees of freedom for a binary in VLE?

(iii) For a closed system with a known feed and F = 1, why must at least one of the two specified variables be extensive?

(iv) A binary VLE system at fixed T: why is P–x–y a single curve pair, while for a ternary system at fixed T it is not?`,
        solution: String.raw`**Phase rule** (non-reacting): F = 2 − π + N.

1. **(i)**
   - (a) Pure water in VLE: F = 2 − 2 + 1 = **1**. Fix T and P = $P^{sat}(T)$ follows (the vapour-pressure curve).
   - (b) Binary in VLE: F = 2 − 2 + 2 = **2**. Fix, e.g., T and $x_1$; then P and $y_1$ follow (BUBL P).
   - (c) Binary in VLLE: F = 2 − 3 + 2 = **1**. Fixing T fixes P and all three phase compositions: the three-phase line on a P–x diagram is horizontal.

2. **(ii) Duhem's theorem:** for any closed system formed from known amounts of prescribed species, the equilibrium state is completely determined when **any two independent variables** are fixed. These may be intensive or extensive.
   - In a flash, T and P fix the **phase compositions** (phase rule, F = 2 for a binary).
   - The known **feed amounts** (closed system) then fix the **amounts** of the phases through the material balances.
   - Duhem's count: (2 + (N − 1)π) intensive variables plus π phase amounts, minus [(π − 1)N equilibrium equations + N material balances], gives **2**.

3. **(iii)** If F = 1, only one intensive variable is independent. Specifying two intensive variables would over-specify the phase rule. For example, in pure-water VLE, fixing T also fixes P, so T and P are not independent. The second variable must therefore be **extensive** (e.g. total volume or the mass of vapour), and it fixes the relative amounts of the phases. If F = 0, both must be extensive.

4. **(iv)** Binary at fixed T: one degree of freedom remains, so P, $y_1$ (and the dew/bubble curves) are unique functions of $x_1$. Ternary at fixed T: F = 2 − 2 + 3 = 3, so two degrees remain. P depends on two composition variables: bubble and dew **surfaces** over the composition triangle, not single curves.`,
        answer: String.raw`(i) F = 2 − π + N: pure-water VLE 1; binary VLE 2; binary VLLE 1. (ii) Duhem: closed system with known feed fixed by any two independent variables; T, P fix compositions and the feed fixes phase amounts. (iii) With F = 1 only one intensive variable is free, so the second must be extensive (fixes phase amounts). (iv) Binary at fixed T has F = 1 (curves); ternary has F = 2 (surfaces).` } ] }
  ]
});
