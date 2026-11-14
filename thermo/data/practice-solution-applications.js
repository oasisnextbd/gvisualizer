QB.paper({ year: "Practice", set: "Solution thermodynamics: activity-coefficient models, mixing, heat effects", date: "", marks: 0, practice: true,
  rules: String.raw`Solution thermodynamics applications (SVNA ch. 12; Kaniz Fatema and Faisal Ahmed slides): VLE data reduction and Henry's constant (MEK/toluene), heats of formation and solution of LiCl from NBS data, the LiCl and NaOH evaporator examples, H–x mixing lines; SVNA chapter-12 problems not set in past papers (van Laar and Wilson fits, azeotrope and extremum conditions, heats of solution of hydrates, properties of ΔH̃ vs ñ plots); and new exam-style problems (van Laar from an azeotrope, Wilson BUBL P, BUBL T gamma/phi algorithm, LiCl dilution).`,
  questions: [
    { id: "practice-solution-applications-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P1", label: "", marks: "", topic: "solution-applications",
        sub: "MEK/toluene at 50 °C: γ's from VLE data, Margules fit, Henry's constant and γ₁∞", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Faisal Ahmed, Chapter 12 slides 3–9 and Kaniz Fatema slides (§12.1 "Liquid-phase properties from VLE data"); SVNA 6th ed. SI, Table 12.1 and §12.1`,
        text: String.raw`VLE data for methyl ethyl ketone(1)/toluene(2) at 50°C (partial pressures $y_1P$ and $y_2P$ in kPa):

| $x_1$ | $y_1$ | $y_1P$ | $y_2P$ |
|---|---|---|---|
| 0.0000 | 0.0000 | 0.000 | 12.300 |
| 0.0895 | 0.2716 | 4.212 | 11.298 |
| 0.1981 | 0.4565 | 8.496 | 10.114 |
| 0.3193 | 0.5934 | 12.835 | 8.795 |
| 0.4232 | 0.6815 | 16.363 | 7.697 |
| 0.5119 | 0.7440 | 19.284 | 6.636 |
| 0.6096 | 0.8050 | 22.508 | 5.542 |
| 0.7135 | 0.8639 | 26.021 | 4.099 |
| 0.7934 | 0.9048 | 28.727 | 3.023 |
| 0.9102 | 0.9590 | 32.750 | 1.400 |
| 1.0000 | 1.0000 | 36.090 | 0.000 |

(a) Calculate $\gamma_1$, $\gamma_2$, $G^E/RT$ and $G^E/x_1x_2RT$ at each composition.

(b) Fit the Margules equation $G^E/x_1x_2RT = A_{21}x_1 + A_{12}x_2$ and report $\ln\gamma_1^\infty$ and $\ln\gamma_2^\infty$.

(c) Estimate Henry's constant for MEK in toluene at 50°C and explain how the fugacity plot is related to the Lewis/Randall rule and Henry's law.`,
        solution: String.raw`**Given:** T = 323.15 K; $P_1^{sat}$ = 36.09 kPa, $P_2^{sat}$ = 12.30 kPa (the end points).

**Assumptions:** low pressure, so the vapour is ideal and $\hat f_i = y_iP$. Modified Raoult's law: $\gamma_i = y_iP/(x_iP_i^{sat})$.

1. **(a) Reduction.** For example, at $x_1$ = 0.3193: $\gamma_1$ = 12.835/(0.3193 × 36.09) = 1.114 and $\gamma_2$ = 8.795/(0.6807 × 12.30) = 1.050.

| $x_1$ | P/kPa | $\gamma_1$ | $\gamma_2$ | $\ln\gamma_1$ | $\ln\gamma_2$ | $G^E/RT$ | $G^E/x_1x_2RT$ |
|---|---|---|---|---|---|---|---|
| 0.0895 | 15.51 | 1.304 | 1.009 | 0.2654 | 0.0088 | 0.0318 | 0.390 |
| 0.1981 | 18.61 | 1.188 | 1.025 | 0.1726 | 0.0251 | 0.0543 | 0.342 |
| 0.3193 | 21.63 | 1.114 | 1.050 | 0.1078 | 0.0492 | 0.0679 | 0.313 |
| 0.4232 | 24.06 | 1.071 | 1.085 | 0.0689 | 0.0815 | 0.0762 | 0.312 |
| 0.5119 | 25.92 | 1.044 | 1.105 | 0.0429 | 0.1001 | 0.0708 | 0.284 |
| 0.6096 | 28.05 | 1.023 | 1.154 | 0.0228 | 0.1433 | 0.0699 | 0.294 |
| 0.7135 | 30.12 | 1.010 | 1.163 | 0.0105 | 0.1512 | 0.0508 | 0.248 |
| 0.7934 | 31.75 | 1.003 | 1.190 | 0.0032 | 0.1736 | 0.0384 | 0.235 |
| 0.9102 | 34.15 | 0.997 | 1.268 | −0.0030 | 0.2370 | 0.0185 | 0.227 |

2. **(b) Margules fit.** The points of $G^E/x_1x_2RT$ lie close to a straight line. Least squares gives
$$\frac{G^E}{x_1x_2RT} = 0.388 - 0.186x_1 \;\Rightarrow\; A_{12} = 0.388\ (x_1 = 0),\quad A_{21} = 0.202\ (x_1 = 1)$$
   So $\ln\gamma_1^\infty$ = 0.388 ($\gamma_1^\infty$ = 1.47) and $\ln\gamma_2^\infty$ = 0.202 ($\gamma_2^\infty$ = 1.22). The intercepts are found by this extrapolation: at $x_1$ = 0 and 1 the ratio is 0/0.

![MEK/toluene at 50 °C: data and Margules curves for ln γ₁, ln γ₂ and Gᴱ/x₁x₂RT](fig/practice-solution-applications-P1-fit.svg)

3. **(c) Henry's constant.** By definition $\mathcal H_1 = \lim_{x_1 \to 0}\hat f_1/x_1$. Since $\hat f_1 = x_1\gamma_1P_1^{sat}$:
$$\mathcal H_1 = \gamma_1^\infty P_1^{sat} = e^{0.388}(36.09) = 53.2\ \mathrm{kPa}$$
   The first data point gives $\hat f_1/x_1$ = 4.212/0.0895 = 47.1 kPa, still well away from the limit, which shows why extrapolation through $G^E/x_1x_2RT$ is used.

4. **(c) Fugacity plot (slides 5–9).**
   - Plotting $\hat f_1 = y_1P$ and $\hat f_2 = y_2P$ against $x_1$, the **Lewis/Randall** lines $\hat f_i = x_if_i$ (dashed) join 0 to $P_i^{sat}$. The real curves lie above them (positive deviation, γ > 1) and become **tangent** to them as $x_i \to 1$.
   - As $x_i \to 0$ the curves are tangent to **Henry's-law** lines $\hat f_i = x_i\mathcal H_i$, with slope $\mathcal H_1$ = 53.2 kPa for MEK.
   - The two limits are linked by the Gibbs–Duhem equation: Henry's law for the solute implies the Lewis/Randall rule for the solvent.

**Result:** $A_{12}$ = 0.388, $A_{21}$ = 0.202; $\gamma_1^\infty$ = 1.47, $\gamma_2^\infty$ = 1.22; $\mathcal H_{MEK}$ ≈ 53 kPa.`,
        answer: String.raw`γᵢ = yᵢP/(xᵢPᵢˢᵃᵗ) (e.g. x₁ = 0.3193: 1.114, 1.050); Gᴱ/x₁x₂RT ≈ 0.388 − 0.186x₁ ⇒ A₁₂ = 0.388, A₂₁ = 0.202 (γ₁∞ = 1.47, γ₂∞ = 1.22); 𝓗₁ = γ₁∞P₁ˢᵃᵗ = 53.2 kPa; f̂ᵢ curves tangent to Lewis/Randall lines at xᵢ → 1 and to Henry lines at xᵢ → 0.` } ] },
    { id: "practice-solution-applications-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P2", label: "", marks: "", topic: "solution-applications",
        sub: "Heat of formation of LiCl in 12 mol H₂O from heats of formation and solution", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kaniz Fatema, Chapter 12 slide 42 ("Heats of formation from heats of solution", Example 12.4); SVNA 6th ed. SI, Example 12.4 (p. 427)`,
        text: String.raw`Calculate the heat of formation of LiCl in 12 mol of H₂O at 298.15 K (25°C). Data: $\Delta H^\circ_{f298}$ of LiCl(s) = −408 610 J; heat of solution of 1 mol LiCl(s) in 12 mol H₂O(l) at 25°C, $\Delta\tilde H$ = −33 614 J.`,
        solution: String.raw`**Find:** ΔH for $\mathrm{Li + \tfrac12Cl_2 + 12H_2O(l) \to LiCl(12H_2O)}$.

1. **Process.** The formation of 1 mol of LiCl *in solution* in 12 mol of water, from its constituent elements, is the sum of a chemical change and a physical change:
$$\mathrm{Li + \tfrac12Cl_2 \to LiCl(s)} \qquad \Delta H^\circ_{298} = -408\,610\ \mathrm J$$
$$\mathrm{LiCl(s) + 12H_2O(l) \to LiCl(12H_2O)} \qquad \Delta\tilde H_{298} = -33\,614\ \mathrm J$$

2. **Add** (enthalpy is a state function, Hess's law):
$$\mathrm{Li + \tfrac12Cl_2 + 12H_2O(l) \to LiCl(12H_2O)} \qquad \Delta H = -408\,610 - 33\,614 = -442\,224\ \mathrm J$$

3. **Meaning.** −442 224 J is the heat of formation of LiCl in 12 mol of water (the NBS table value). It does **not** include the heat of formation of the water: H₂O appears unchanged on both sides as the solvent.

**Result:** ΔH°f (LiCl in 12 H₂O) = −442 224 J/mol.`,
        answer: String.raw`Li + ½Cl₂ → LiCl(s) (−408 610 J) plus LiCl(s) + 12H₂O → LiCl(12H₂O) (−33 614 J) ⇒ ΔH = −442 224 J (excludes formation of the water).` } ] },
    { id: "practice-solution-applications-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P3", label: "", marks: "", topic: "solution-applications",
        sub: "Heat of solution of LiCl in 5 mol H₂O from NBS heats of formation; ΔH̃ vs ñ", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kaniz Fatema, Chapter 12 slides 43–44 ("Heats of solution from heats of formation"); SVNA 6th ed. SI, p. 428 (NBS data table)`,
        text: String.raw`Typical data for the heats of formation of 1 mol of LiCl at 25°C (NBS) are:

| Species | $\Delta H^\circ_f$ / J |
|---|---|
| LiCl(s) | −408 610 |
| LiCl in 3 mol H₂O | −429 366 |
| LiCl in 5 mol H₂O | −436 805 |
| LiCl in 8 mol H₂O | −440 529 |
| LiCl in 10 mol H₂O | −441 579 |
| LiCl in 12 mol H₂O | −442 224 |
| LiCl in 15 mol H₂O | −442 835 |

Calculate the heat of solution $\Delta\tilde H$ for the dissolution of 1 mol of LiCl(s) in 5 mol of H₂O(l), tabulate $\Delta\tilde H$ against ñ for all the data, and relate ñ to $x_1$.`,
        solution: String.raw`1. **Combine the formation reactions** (Hess's law):
$$\mathrm{Li + \tfrac12Cl_2 + 5H_2O(l) \to LiCl(5H_2O)} \qquad \Delta H = -436\,805\ \mathrm J$$
$$\mathrm{LiCl(s) \to Li + \tfrac12Cl_2} \qquad \Delta H = +408\,610\ \mathrm J$$
$$\mathrm{LiCl(s) + 5H_2O(l) \to LiCl(5H_2O)} \qquad \Delta\tilde H_{298} = -28\,195\ \mathrm J$$

2. **Same calculation for every entry:** $\Delta\tilde H = \Delta H^\circ_f(\text{LiCl in } \tilde n\ \text{H}_2\text{O}) + 408\,610$.

| ñ (mol H₂O/mol LiCl) | 3 | 5 | 8 | 10 | 12 | 15 |
|---|---|---|---|---|---|---|
| $\Delta\tilde H$ / kJ per mol LiCl | −20.76 | −28.20 | −31.92 | −32.97 | −33.61 | −34.23 |

   These are the points of the LiCl curve on SVNA Fig. 12.14. The curve flattens towards the heat of solution at infinite dilution (about −37 kJ/mol). Reading the figure at ñ = 13.3 gives −34, the value used on the evaporator slide (P4).

3. **Composition variable.** $\tilde n = n_2/n_1$ (moles of solvent per mole of solute):
$$\tilde n = \frac{x_2}{x_1} = \frac{1 - x_1}{x_1} \quad\Leftrightarrow\quad x_1 = \frac{1}{1 + \tilde n}$$
   Heat of solution per mole of solute and heat of mixing per mole of solution are related by $\Delta\tilde H = \Delta H/x_1$.

**Result:** $\Delta\tilde H$(ñ = 5) = −28 195 J per mol LiCl; the table gives the full ΔH̃–ñ curve.`,
        answer: String.raw`ΔH̃ = ΔH°f(LiCl in ñH₂O) − ΔH°f(LiCl(s)): ñ = 5 ⇒ −436 805 + 408 610 = −28 195 J; ñ = 3, 8, 10, 12, 15 ⇒ −20.76, −31.92, −32.97, −33.61, −34.23 kJ; ñ = (1 − x₁)/x₁, ΔH̃ = ΔH/x₁.` } ] },
    { id: "practice-solution-applications-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P4", label: "", marks: "", topic: "solution-applications",
        sub: "Single-effect evaporator, 15 % to 40 % LiCl at 2 kg/s: heat-transfer rate (Fig. 12.14)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kaniz Fatema, Chapter 12 slides 46–51 ("Heats of solution – Mathematical problem"); SVNA 6th ed. SI, Example 12.6/12.7 (single-effect LiCl evaporator)`,
        text: String.raw`A single-effect evaporator operating at atmospheric pressure concentrates a 15% (by weight) LiCl solution to 40%. The feed enters the evaporator at the rate of 2 kg s⁻¹ at 298.15 K (25°C). The normal boiling point of a 40% LiCl solution is about 405.15 K (132°C), and its specific heat is estimated as 2.72 kJ kg⁻¹ °C⁻¹. What is the heat-transfer rate in the evaporator?`,
        solution: String.raw`**Given:** feed 2 kg/s of 15 wt% LiCl at 25 °C; product 40 wt% at 132 °C, $C_P$ = 2.72 kJ/(kg·°C); vapour leaves as superheated steam at 132 °C and 1 atm.

**Find:** $\dot Q$.

**Assumptions:**
- Steady flow, no kinetic or potential energy change, so $\dot Q = \Delta\dot H$.
- Heats of solution at 25 °C from SVNA Fig. 12.14 (the slide value −34 kJ/mol at ñ = 13.3; the curve gives −23.4 kJ/mol at ñ = 3.53, consistent with the NBS values of P3).
- Steam tables: H₂O(l) at 25 °C is 104.8 kJ/kg; steam at 132 °C and 1 atm is 2740.3 kJ/kg.

1. **Material balance:**
   - LiCl: 0.15(2) = 0.30 kg/s = 7.08 mol/s.
   - Product: 0.30/0.40 = 0.75 kg/s (0.45 kg/s water).
   - Vapour: 2 − 0.75 = **1.25 kg/s**.
   - Feed water: 1.70 kg/s = 94.4 mol/s, so $\tilde n_F$ = 94.4/7.08 = **13.3**.
   - Product water: 0.45 kg/s = 24.98 mol/s, so $\tilde n_P$ = **3.53**.

2. **Path** (slides, ΔH^a to ΔH^d), all at 25 °C until the final heating steps:
   - (a) Unmix the feed into pure LiCl(s) and water: $\Delta\dot H_a = -7.08(-34.0) = +240.6$ kJ/s
   - (b) Mix 0.30 kg/s LiCl with 0.45 kg/s water to form 40% solution: $\Delta\dot H_b = 7.08(-23.4) = -165.6$ kJ/s
   - (c) Heat the 40% solution from 25 to 132 °C: $\Delta\dot H_c = 0.75(2.72)(107) = 218.3$ kJ/s
   - (d) Evaporate 1.25 kg/s of water from liquid at 25 °C to steam at 132 °C: $\Delta\dot H_d = 1.25(2740.3 - 104.8) = 3294.4$ kJ/s

3. **Total:**
$$\dot Q = 240.6 - 165.6 + 218.3 + 3294.4 = 3588\ \mathrm{kJ/s}$$

4. **H–x picture.** Point F (13.3, 25 °C) goes up to the pure components, across to the 40% isotherm at 25 °C, and up to 132 °C. The latent heat of the water dominates: 92% of the duty. The net heat of solution, +75 kJ/s, is small because the solution is stronger (less negative ΔH̃) after concentration.

**Result:** $\dot Q$ ≈ 3.59 × 10³ kJ/s. The past papers (2016-17 Q4a, 2018-19 Q4b) use the same method with a 10% feed.`,
        answer: String.raw`LiCl 7.08 mol/s; ñ = 13.3 (feed) → 3.53 (product); ΔH̃ = −34.0 and −23.4 kJ/mol; Q̇ = 240.6 − 165.6 + 0.75(2.72)(107) + 1.25(2635.5) = 240.6 − 165.6 + 218.3 + 3294.4 ≈ 3588 kJ/s.` } ] },
    { id: "practice-solution-applications-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P5", label: "", marks: "", topic: "solution-applications",
        sub: "NaOH evaporator, 10 % to 50 % at 3 inHg, from an H–x diagram", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kaniz Fatema, Chapter 12 slides 54–55 ("Hx diagram – Mathematical problem"); SVNA, Example 12.8 (NaOH/H₂O H–x diagram, Fig. 12.19, British units)`,
        text: String.raw`A single-effect evaporator concentrates 10,000 lbₘ h⁻¹ of a 10% (by weight) aqueous NaOH solution at 70°F to 50%. The evaporator operates at an absolute pressure of 3 inHg, where the boiling point of the 50% solution is 190°F (the vapor leaves as superheated steam at 190°F and 3 inHg). What is the heat-transfer rate in the evaporator? (From the H–x diagram for NaOH/H₂O and the steam tables: H of 10% NaOH at 70°F = 34 Btu lbₘ⁻¹; H of 50% NaOH at 190°F = 215 Btu lbₘ⁻¹; H of steam at 190°F, 3 inHg = 1146 Btu lbₘ⁻¹.)`,
        solution: String.raw`**Given:** feed 10 000 lbₘ/h of 10% NaOH at 70 °F; product 50%; enthalpies (consistent references: the H–x diagram for NaOH/H₂O uses the steam-table reference for water):
- 10% NaOH at 70 °F: 34 Btu/lbₘ
- 50% NaOH at 190 °F: 215 Btu/lbₘ
- steam at 190 °F, 3 inHg: 1146 Btu/lbₘ

**Find:** $\dot Q$.

**Assumptions:** steady flow, so $\dot Q = \Delta\dot H$; the values are as read from the diagram on the slides.

1. **Material balance:** NaOH = 0.10(10 000) = 1000 lbₘ/h. Product = 1000/0.50 = **2000 lbₘ/h**. Water evaporated = 10 000 − 2000 = **8000 lbₘ/h**.

2. **Energy balance:**
$$\dot Q = \dot m_PH_P + \dot m_VH_V - \dot m_FH_F = 2000(215) + 8000(1146) - 10\,000(34)$$
$$\dot Q = 430\,000 + 9\,168\,000 - 340\,000 = 9.258\times10^6\ \mathrm{Btu/h}\ (2.71\ \mathrm{MW})$$

3. **Why the H–x diagram is convenient.** One reading per stream replaces the heat-of-solution path (unmixing, mixing, heating) of P4. The diagram already contains the heat of mixing and the sensible heats. The **reference states must be the same** for the solution and the steam: here, water's steam-table reference (the triple point), so the steam enthalpy can be added directly.

**Result:** $\dot Q$ ≈ 9.26 × 10⁶ Btu/h.`,
        answer: String.raw`Product 2000 lbₘ/h, vapour 8000 lbₘ/h; Q̇ = 2000(215) + 8000(1146) − 10 000(34) = 9.258×10⁶ Btu/h (≈ 2.71 MW).` } ] },
    { id: "practice-solution-applications-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P6", label: "", marks: "", topic: "solution-applications",
        sub: "Adiabatic mixing of two binary solutions lies on a straight line on the H–x diagram", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kaniz Fatema, Chapter 12 slides 56–59 ("Hx diagram – adiabatic mixing of different binary solutions"); SVNA §12.4`,
        text: String.raw`Show that when two binary solutions a and b (of the same two species) are mixed adiabatically, at constant P in a batch or in steady flow with no shaft work, the points representing a, b and the final solution c lie on a straight line on an H–x diagram. Explain also how an ideal-solution isotherm, the heat of mixing ΔH and the partial enthalpies appear on an H–x diagram.`,
        solution: String.raw`**Notation:** $n_a$, $n_b$ are moles (or masses) of solutions a and b; compositions $x_{1a}$, $x_{1b}$; molar (specific) enthalpies $H_a$, $H_b$. The product c has $n_a + n_b$ and $x_{1c}$, $H_c$.

1. **Energy balance** (adiabatic, constant P, no work, $\Delta H^t = Q = 0$):
$$(n_a + n_b)H_c = n_aH_a + n_bH_b \qquad (1)$$

2. **Species-1 balance:**
$$(n_a + n_b)x_{1c} = n_ax_{1a} + n_bx_{1b} \qquad (2)$$

3. **Eliminate the amounts.** From (1) and (2):
$$n_a(H_c - H_a) = n_b(H_b - H_c), \qquad n_a(x_{1c} - x_{1a}) = n_b(x_{1b} - x_{1c})$$
   Dividing:
$$\frac{H_c - H_a}{x_{1c} - x_{1a}} = \frac{H_b - H_c}{x_{1b} - x_{1c}}$$

4. **Interpretation.** The slope of the segment ac equals that of cb, so **a, c and b lie on one straight line**. Point c divides it by the lever rule, $\overline{ac}/\overline{cb} = n_b/n_a$. This holds for both batch and steady-flow mixing. Any point (H, x₁) satisfying the equation lies on the line through a and b.

5. **Other features of the H–x diagram (slide 56):**
   - **Ideal solution:** $H^{id} = x_1H_1 + x_2H_2$, a straight line joining the pure-species enthalpies at x₁ = 0 and 1 at the same T (dashed).
   - **Heat of mixing:** ΔH = H − ($x_1H_1 + x_2H_2$) is the vertical distance from the real isotherm down (or up) to that line. An isotherm lying below the line is exothermic (H₂SO₄/water, NaOH/water); above, endothermic (methanol/benzene).
   - **Partial enthalpies:** the tangent to an isotherm at $x_1$ cuts x₁ = 1 at $\bar H_1$ and x₁ = 0 at $\bar H_2$.
   - **Use:** if c falls below the isotherm of the mixing temperature, adiabatic mixing **heats** the solution. The final temperature is the isotherm through c (e.g. 2023-24 Q8(a)). For isothermal mixing, the heat removed is the vertical drop from c to the isotherm.`,
        answer: String.raw`Energy: (n_a + n_b)H_c = n_aH_a + n_bH_b; species 1: (n_a + n_b)x₁c = n_ax₁a + n_bx₁b ⇒ (H_c − H_a)/(x₁c − x₁a) = (H_b − H_c)/(x₁b − x₁c): a, c, b collinear (lever rule). Ideal isotherm = straight line between pure enthalpies; ΔH = vertical distance; tangent intercepts give H̄₁, H̄₂.` } ] },
    { id: "practice-solution-applications-P7", q: 7, section: "S", compulsory: false,
      stem: String.raw`The following is a set of VLE data for the system methanol(1)/water(2) at 333.15 K (60°C):

| P/kPa | $x_1$ | $y_1$ | P/kPa | $x_1$ | $y_1$ |
|---|---|---|---|---|---|
| 19.953 | 0.0000 | 0.0000 | 60.614 | 0.5282 | 0.8085 |
| 39.223 | 0.1686 | 0.5714 | 63.998 | 0.6044 | 0.8383 |
| 42.984 | 0.2167 | 0.6268 | 67.924 | 0.6804 | 0.8733 |
| 48.852 | 0.3039 | 0.6943 | 70.229 | 0.7255 | 0.8922 |
| 52.784 | 0.3681 | 0.7345 | 72.832 | 0.7776 | 0.9141 |
| 56.652 | 0.4461 | 0.7742 | 84.562 | 1.0000 | 1.0000 |

*(The Margules fit of these data was set in 2014-15 Q5 and 2017-18 Q4; parts (b) and (c) of the book problem are given here.)*`,
      parts: [
        { id: "practice-solution-applications-P7a", label: "(a)", marks: "", topic: "solution-applications",
          sub: "Methanol/water at 60 °C: van Laar parameters that best fit Gᴱ/RT", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 12.1(b) (p. 440)`,
          text: String.raw`Basing calculations on modified Raoult's law, find parameter values for the van Laar equation that provide the best fit of $G^E/RT$ to the data, and compare the correlated P and $y_1$ with the experimental points.`,
          solution: String.raw`**Assumptions:** modified Raoult's law, so $\gamma_i = y_iP/(x_iP_i^{sat})$ with $P_1^{sat}$ = 84.562 and $P_2^{sat}$ = 19.953 kPa. Van Laar:
$$\frac{G^E}{RT} = \frac{A'_{12}A'_{21}x_1x_2}{A'_{12}x_1 + A'_{21}x_2} \quad\Leftrightarrow\quad \frac{x_1x_2}{G^E/RT} = \frac{x_1}{A'_{21}} + \frac{x_2}{A'_{12}}$$
$$\ln\gamma_1 = A'_{12}\left(1 + \frac{A'_{12}x_1}{A'_{21}x_2}\right)^{-2}, \qquad \ln\gamma_2 = A'_{21}\left(1 + \frac{A'_{21}x_2}{A'_{12}x_1}\right)^{-2}$$

1. **Data reduction:**

| $x_1$ | $\gamma_1$ | $\gamma_2$ | $G^E/RT$ | $x_1x_2RT/G^E$ |
|---|---|---|---|---|
| 0.1686 | 1.5720 | 1.0134 | 0.0873 | 1.605 |
| 0.2167 | 1.4703 | 1.0264 | 0.1039 | 1.633 |
| 0.3039 | 1.3198 | 1.0752 | 0.1348 | 1.569 |
| 0.3681 | 1.2455 | 1.1115 | 0.1476 | 1.576 |
| 0.4461 | 1.1627 | 1.1574 | 0.1482 | 1.667 |
| 0.5282 | 1.0972 | 1.2330 | 0.1478 | 1.686 |
| 0.6044 | 1.0497 | 1.3110 | 0.1365 | 1.752 |
| 0.6804 | 1.0310 | 1.3495 | 0.1166 | 1.866 |
| 0.7255 | 1.0213 | 1.3822 | 0.1042 | 1.912 |
| 0.7776 | 1.0125 | 1.4098 | 0.0860 | 2.010 |

2. **First estimate (linearised form).** $x_1x_2RT/G^E$ is linear in $x_1$: intercept $1/A'_{12}$ at $x_1$ = 0 and $1/A'_{21}$ at $x_1$ = 1. Least squares gives $A'_{12}$ ≈ 0.705 and $A'_{21}$ ≈ 0.485.

3. **Best fit of $G^E/RT$ itself** (non-linear least squares, minimising $\sum\delta(G^E/RT)^2$):
$$\boxed{A'_{12} = 0.708, \qquad A'_{21} = 0.494}$$
   The rms residual in $G^E/RT$ is 0.0041, practically the same as two-parameter Margules (0.0037, with $A_{12}$ = 0.696, $A_{21}$ = 0.472). So $\gamma_1^\infty = e^{0.708}$ = 2.03 and $\gamma_2^\infty$ = 1.64.

4. **Correlated P–x–y** ($P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat}$):

| $x_1$ | $P_{exp}$ | $P_{vL}$ | $y_{1,exp}$ | $y_{1,vL}$ |
|---|---|---|---|---|
| 0.1686 | 39.22 | 38.82 | 0.5714 | 0.5618 |
| 0.3039 | 48.85 | 48.54 | 0.6943 | 0.6921 |
| 0.4461 | 56.65 | 56.68 | 0.7742 | 0.7753 |
| 0.6044 | 64.00 | 64.75 | 0.8383 | 0.8461 |
| 0.7776 | 72.83 | 73.31 | 0.9141 | 0.9147 |

   Deviations are within about 1% in P and 0.01 in $y_1$. The correlation is satisfactory, with a small systematic error at high methanol content.

**Result:** $A'_{12}$ = 0.708, $A'_{21}$ = 0.494 (γ₁∞ = 2.03, γ₂∞ = 1.64).`,
          answer: String.raw`From x₁x₂RT/Gᴱ = x₁/A′₂₁ + x₂/A′₁₂ and a least-squares fit of Gᴱ/RT: A′₁₂ = 0.708, A′₂₁ = 0.494 (rms 0.004; γ₁∞ = 2.03, γ₂∞ = 1.64); P within ~1 %, y₁ within 0.01 of the data.` },
        { id: "practice-solution-applications-P7b", label: "(b)", marks: "", topic: "solution-applications",
          sub: "Methanol/water at 60 °C: Wilson parameters Λ₁₂, Λ₂₁ that best fit Gᴱ/RT", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 12.1(c) (p. 440); Wilson equation, Kaniz Fatema slide 32`,
          text: String.raw`Repeat (a) for the Wilson equation.`,
          solution: String.raw`**Wilson equation** (Kaniz Fatema slide 32):
$$\frac{G^E}{RT} = -x_1\ln(x_1 + x_2\Lambda_{12}) - x_2\ln(x_2 + x_1\Lambda_{21})$$
$$\ln\gamma_1 = -\ln(x_1 + x_2\Lambda_{12}) + x_2\left(\frac{\Lambda_{12}}{x_1 + x_2\Lambda_{12}} - \frac{\Lambda_{21}}{x_2 + x_1\Lambda_{21}}\right)$$
$$\ln\gamma_2 = -\ln(x_2 + x_1\Lambda_{21}) - x_1\left(\frac{\Lambda_{12}}{x_1 + x_2\Lambda_{12}} - \frac{\Lambda_{21}}{x_2 + x_1\Lambda_{21}}\right)$$
$$\ln\gamma_1^\infty = -\ln\Lambda_{12} + 1 - \Lambda_{21}, \qquad \ln\gamma_2^\infty = -\ln\Lambda_{21} + 1 - \Lambda_{12}$$

1. **Fit.** The model is non-linear in Λ. Minimise $\sum[(G^E/RT)_{calc} - (G^E/RT)_{exp}]^2$ over the ten points of (a) with Λ > 0, starting from values that reproduce the van Laar γ∞:
$$\boxed{\Lambda_{12} = 0.476, \qquad \Lambda_{21} = 1.026}$$
   The rms residual is 0.0043, the same quality as van Laar and Margules for this mildly non-ideal system.

2. **Infinite dilution:** $\ln\gamma_1^\infty = -\ln 0.476 + 1 - 1.026 = 0.716$, so $\gamma_1^\infty$ = 2.05. $\ln\gamma_2^\infty = -\ln 1.026 + 1 - 0.476 = 0.498$, so $\gamma_2^\infty$ = 1.65. Both are close to van Laar (2.03, 1.64).

3. **P–x–y check:** at $x_1$ = 0.3039, $P_{calc}$ = 48.50 kPa against 48.85 measured, and $y_1$ = 0.6917 against 0.6943; at $x_1$ = 0.6044, 64.78 against 64.00 kPa.

4. **Comment.** Wilson's equation has a sound molecular (local-composition) basis and extends to multicomponent mixtures with binary parameters only. It cannot represent liquid–liquid splitting, which is not an issue for methanol/water.

**Result:** Λ₁₂ = 0.476, Λ₂₁ = 1.026 (γ₁∞ = 2.05, γ₂∞ = 1.65).`,
          answer: String.raw`Non-linear least squares on Gᴱ/RT = −x₁ln(x₁ + x₂Λ₁₂) − x₂ln(x₂ + x₁Λ₂₁): Λ₁₂ = 0.476, Λ₂₁ = 1.026 (rms 0.004); γ₁∞ = 2.05, γ₂∞ = 1.65 — same quality as van Laar/Margules.` }
      ] },
    { id: "practice-solution-applications-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P8", label: "", marks: "", topic: "solution-applications",
        sub: "Show that (dP/dx₁) ≥ −P₂ˢᵃᵗ at x₁ = 0 and ≤ P₁ˢᵃᵗ at x₁ = 1 (modified Raoult)", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 12.2 (p. 440)`,
        text: String.raw`If modified Raoult's law (Eq. 12.1) is valid for isothermal VLE in a binary system, show that:

$$\left(\frac{dP}{dx_1}\right)_{x_1 = 0} \ge -P_2^{sat} \qquad \left(\frac{dP}{dx_1}\right)_{x_1 = 1} \le P_1^{sat}$$`,
        solution: String.raw`1. **Bubble pressure:** $P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat}$ (T constant, so the $P_i^{sat}$ are constant). Differentiating with $dx_2 = -dx_1$:
$$\frac{dP}{dx_1} = \gamma_1P_1^{sat} - \gamma_2P_2^{sat} + x_1P_1^{sat}\frac{d\gamma_1}{dx_1} + x_2P_2^{sat}\frac{d\gamma_2}{dx_1}$$

2. **At $x_1$ = 0** ($x_2$ = 1): $\gamma_2$ = 1 (pure 2), and Gibbs–Duhem $x_1\,d\ln\gamma_1 + x_2\,d\ln\gamma_2 = 0$ gives $d\gamma_2/dx_1 = 0$ there (with $d\ln\gamma_1/dx_1$ finite). The term $x_1(d\gamma_1/dx_1)$ also vanishes. Hence
$$\left(\frac{dP}{dx_1}\right)_{x_1 = 0} = \gamma_1^\infty P_1^{sat} - P_2^{sat} \ge -P_2^{sat}$$
   because $\gamma_1^\infty P_1^{sat} \ge 0$ (= $\mathcal H_1$, Henry's constant, positive).

3. **At $x_1$ = 1:** $\gamma_1$ = 1, $d\gamma_1/dx_1 = 0$, and the $x_2$ term vanishes:
$$\left(\frac{dP}{dx_1}\right)_{x_1 = 1} = P_1^{sat} - \gamma_2^\infty P_2^{sat} \le P_1^{sat}$$

4. **Use.** The limiting slopes of measured P–x₁ data give the infinite-dilution activity coefficients:
$$\gamma_1^\infty = \frac{P_2^{sat} + (dP/dx_1)_{x_1 = 0}}{P_1^{sat}}$$
   Slopes outside these bounds indicate bad data. Equality holds only in the limit $\gamma^\infty \to 0$, i.e. extremely negative deviations.`,
        answer: String.raw`dP/dx₁ = γ₁P₁ˢᵃᵗ − γ₂P₂ˢᵃᵗ + x₁P₁ˢᵃᵗdγ₁/dx₁ + x₂P₂ˢᵃᵗdγ₂/dx₁; at x₁ = 0, γ₂ = 1 and dγ₂/dx₁ = 0 (Gibbs–Duhem) ⇒ γ₁∞P₁ˢᵃᵗ − P₂ˢᵃᵗ ≥ −P₂ˢᵃᵗ; at x₁ = 1 ⇒ P₁ˢᵃᵗ − γ₂∞P₂ˢᵃᵗ ≤ P₁ˢᵃᵗ.` } ] },
    { id: "practice-solution-applications-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P9", label: "", marks: "", topic: "solution-applications",
        sub: "Gᴱ/RT = Ax₁x₂ with constant P₁ˢᵃᵗ/P₂ˢᵃᵗ = r: range of A for which no azeotrope exists", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 12.4 (p. 441)`,
        text: String.raw`The excess Gibbs energy for binary systems consisting of liquids not too dissimilar in chemical nature is represented to a reasonable approximation by the equation $G^E/RT = Ax_1x_2$, where A is a function of temperature only. For such systems, it is often observed that the ratio of the vapor pressures of the pure species is nearly constant over a considerable temperature range. Let this ratio be r, and determine the range of values of A, expressed as a function of r, for which no azeotrope can exist. Assume the vapor phase to be an ideal gas.`,
        solution: String.raw`1. **Model:** $\ln\gamma_1 = Ax_2^2$, $\ln\gamma_2 = Ax_1^2$; modified Raoult's law; $r = P_1^{sat}/P_2^{sat}$.

2. **Relative volatility:**
$$\alpha_{12} = \frac{y_1/x_1}{y_2/x_2} = \frac{\gamma_1P_1^{sat}}{\gamma_2P_2^{sat}} = r\exp[A(x_2^2 - x_1^2)] = r\exp[A(1 - 2x_1)]$$
   An azeotrope is a point with $\alpha_{12}$ = 1, i.e. $\ln\alpha_{12} = \ln r + A(1 - 2x_1) = 0$ at some $0 < x_1 < 1$.

3. **End values:** $\ln\alpha_{12}(0) = \ln r + A$ and $\ln\alpha_{12}(1) = \ln r - A$. Since $\ln\alpha_{12}$ is linear in $x_1$, it vanishes inside the range only if the two end values have opposite signs:
$$(\ln r + A)(\ln r - A) < 0 \;\Leftrightarrow\; A^2 > (\ln r)^2$$

4. **No azeotrope:**
$$\boxed{|A| \le |\ln r|, \quad\text{i.e.}\quad -|\ln r| \le A \le |\ln r|}$$
   Because r is nearly constant with T, this criterion holds over the whole temperature range, even though A varies.

5. **Check with the papers.** 2022-23 Q5(b): r = 32.27/73.14 and |ln r| = 0.818 > A = 0.67, so no azeotrope ✓. 2020-21 Q3(b): |ln(79.80/40.50)| = 0.678 < A = 0.95, so an azeotrope exists ✓. For A > 0 a maximum-pressure azeotrope forms when $A > |\ln r|$; for A < 0 a minimum-pressure one forms when $|A| > |\ln r|$.`,
        answer: String.raw`ln α₁₂ = ln r + A(1 − 2x₁) is linear in x₁, with end values ln r ± A; an azeotrope needs a sign change, i.e. A² > (ln r)². No azeotrope ⇔ |A| ≤ |ln r|.` } ] },
    { id: "practice-solution-applications-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P10", label: "", marks: "", topic: "solution-applications",
        sub: "Interior extrema of ln γ: impossible for van Laar; Margules needs A₂₁/A₁₂ > 2 or < ½", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 12.5 (p. 441)`,
        text: String.raw`For the ethanol(1)/chloroform(2) system at 323.15 K (50°C), the activity coefficients show interior extrema with respect to composition [see SVNA Fig. 12.9(e)].

(a) Prove that the van Laar equation cannot represent such behavior.

(b) The two-parameter Margules equation can represent this behavior, but only for particular ranges of the ratio $A_{21}/A_{12}$. What are they?`,
        solution: String.raw`1. **(a) Van Laar:** $\ln\gamma_1 = A'_{12}\left(1 + \dfrac{A'_{12}x_1}{A'_{21}x_2}\right)^{-2}$. Write $u = \dfrac{A'_{12}x_1}{A'_{21}x_2}$, which (for $A'_{12}$ and $A'_{21}$ of the same sign, as the model requires) increases monotonically from 0 to ∞ as $x_1$ goes from 0 to 1. Then
$$\frac{d\ln\gamma_1}{dx_1} = -2A'_{12}(1 + u)^{-3}\frac{du}{dx_1}, \qquad \frac{du}{dx_1} = \frac{A'_{12}}{A'_{21}x_2^2} \ne 0$$
   This never vanishes for $0 < x_1 < 1$: ln γ₁ is monotonic, from $A'_{12}$ to 0. The same holds for ln γ₂. **Van Laar cannot give interior extrema.** (Mixed-sign parameters make $G^E$ singular inside the range, which is physically unacceptable.)

2. **(b) Margules:** $\ln\gamma_1 = x_2^2[A_{12} + 2(A_{21} - A_{12})x_1]$. Differentiating:
$$\frac{d\ln\gamma_1}{dx_1} = 2x_2[(A_{21} - 2A_{12}) - 3(A_{21} - A_{12})x_1]$$
   This vanishes inside the range at
$$x_1^* = \frac{A_{21} - 2A_{12}}{3(A_{21} - A_{12})} = \frac{\rho - 2}{3(\rho - 1)}, \qquad \rho \equiv \frac{A_{21}}{A_{12}}$$

3. **Condition 0 < x₁* < 1:**
   - For ρ > 1: need ρ > 2 (the upper bound is then automatic).
   - For ρ < 1: the denominator is negative, and $0 < (2 - \rho)/(3(1 - \rho)) < 1$ requires $2 - \rho < 3 - 3\rho$, i.e. ρ < ½.

   By symmetry (interchange 1 and 2, ρ → 1/ρ), ln γ₂ has an interior extremum under the same conditions.

4. **Result:** interior extrema (in both γ₁ and γ₂) occur only if
$$\boxed{\frac{A_{21}}{A_{12}} > 2 \quad\text{or}\quad \frac{A_{21}}{A_{12}} < \frac12}$$
   Ethanol/chloroform (SVNA Fig. 12.9e) has very unsymmetric parameters of this kind. Note that $\ln\gamma_1$ then changes sign: an extremum means ln γ₁ crosses its end value.`,
        answer: String.raw`(a) Van Laar: ln γ₁ = A′₁₂(1 + u)⁻², u = A′₁₂x₁/(A′₂₁x₂) monotonic ⇒ d ln γ₁/dx₁ ≠ 0 ⇒ no interior extrema. (b) Margules: d ln γ₁/dx₁ = 0 at x₁* = (ρ − 2)/(3(ρ − 1)), ρ = A₂₁/A₁₂; inside (0, 1) only if ρ > 2 or ρ < ½ (same for γ₂).` } ] },
    { id: "practice-solution-applications-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P11", label: "", marks: "", topic: "solution-applications",
        sub: "Dissolving Cu(NO₃)₂·6H₂O in water at 25 °C: heat removed in the exchanger", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 12.34 (p. 446)`,
        text: String.raw`A mass of 12 kg s⁻¹ of Cu(NO₃)₂·6H₂O along with 15 kg s⁻¹ of water, both at 298.15 K (25°C), are fed to a tank where mixing takes place. The resulting solution passes through a heat exchanger which adjusts its temperature to 298.15 K (25°C). What is the rate of heat transfer in the exchanger?

- For Cu(NO₃)₂, $\Delta H^\circ_{f298}$ = −302.9 kJ.
- For Cu(NO₃)₂·6H₂O, $\Delta H^\circ_{f298}$ = −2110.8 kJ.
- The heat of solution of 1 mol of Cu(NO₃)₂ in water at 298.15 K (25°C) is −47.84 kJ, independent of ñ for values of interest here.`,
        solution: String.raw`**Given:** the data above; $\Delta H^\circ_{f}$ of H₂O(l) = −285.83 kJ/mol (SVNA Table C.4); M[Cu(NO₃)₂·6H₂O] = 295.64 g/mol.

**Find:** $\dot Q$.

**Assumptions:** steady flow, overall isothermal at 25 °C, so $\dot Q = \Delta\dot H$.

1. **Moles of hydrate:** $\dot n$ = 12 000/295.64 = 40.59 mol/s. Total water in the solution = 15 000/18.015 + 6(40.59) = 832.6 + 243.5 = 1076 mol/s, so ñ = 26.5. The heat of solution is independent of ñ here.

2. **Path per mole of hydrate:**
   - (i) Decompose the hydrate into the anhydrous salt and liquid water:
$$\mathrm{Cu(NO_3)_2{\cdot}6H_2O(s) \to Cu(NO_3)_2(s) + 6H_2O(l)}$$
$$\Delta H = -302.9 + 6(-285.83) - (-2110.8) = +92.92\ \mathrm{kJ}$$
   - (ii) Dissolve the anhydrous salt in the water: ΔH = −47.84 kJ.
   - Net: 92.92 − 47.84 = **+45.08 kJ per mol hydrate**. The free water (15 kg/s) only dilutes, with no further heat, since ΔH̃ is independent of ñ.

3. **Heat-transfer rate:**
$$\dot Q = 40.59(45.08) = +1830\ \mathrm{kJ/s}$$
   Positive: dissolving the hexahydrate is **endothermic**, so the exchanger must **supply** about 1.83 MW of heat to bring the solution back to 25 °C. (The anhydrous salt alone would release heat; the hydrate has already "used" its heat of hydration.)

**Result:** $\dot Q$ ≈ +1.83 × 10³ kJ/s (heat added).`,
        answer: String.raw`Hydrate 40.59 mol/s; dehydration ΔH = −302.9 + 6(−285.83) + 2110.8 = +92.92 kJ, dissolution −47.84 kJ ⇒ +45.08 kJ/mol ⇒ Q̇ = +1830 kJ/s (heat must be added; endothermic).` } ] },
    { id: "practice-solution-applications-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P12", label: "", marks: "", topic: "solution-applications",
        sub: "Dissolving 1 mol LiCl·3H₂O(s) in a solution of 1 mol LiCl in 7 mol water at 25 °C", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 12.35 (p. 446); NBS data of SVNA p. 428 (see P3)`,
        text: String.raw`A liquid solution of LiCl in water at 298.15 K (25°C) contains 1 mol of LiCl and 7 mol of water. If 1 mol of LiCl·3H₂O(s) is dissolved isothermally in this solution, what is the heat effect? (Data, SVNA p. 428: $\Delta H^\circ_f$ of LiCl·3H₂O(s) = −1 311 300 J, together with the LiCl solution data of P3; $\Delta H^\circ_f$ of H₂O(l) = −285 830 J.)`,
        solution: String.raw`**Given:** initial solution 1 mol LiCl + 7 mol H₂O; added 1 mol LiCl·3H₂O(s). Final solution: 2 mol LiCl + 10 mol H₂O, i.e. **ñ = 5**.

**Assumptions:** isothermal at 25 °C, constant P, so Q = ΔH. $\Delta H^\circ_f$(LiCl in 7 H₂O) is not tabulated; interpolate linearly in ñ between 5 and 8: −436 805 + (2/3)(−440 529 + 436 805) = **−439 288 J**.

1. **Path (Hess's law):**
   - (i) Break the hydrate into LiCl(s) and water:
$$\mathrm{LiCl{\cdot}3H_2O(s) \to LiCl(s) + 3H_2O(l)}$$
$$\Delta H_i = -408\,610 + 3(-285\,830) - (-1\,311\,300) = +45\,200\ \mathrm J$$
   - (ii) Combine LiCl(s), the 3 H₂O and the initial solution into 2 mol of "LiCl in 5 H₂O":
$$\mathrm{LiCl(s) + 3H_2O + LiCl(7H_2O) \to 2\,LiCl(5H_2O)}$$
$$\Delta H_{ii} = 2(-436\,805) - (-408\,610) - (-439\,288) = -25\,712\ \mathrm J$$
     (Formation enthalpies of LiCl in solution exclude the water, so the free water carries no ΔH°f term here.)

2. **Total heat effect:**
$$Q = \Delta H_i + \Delta H_{ii} = 45\,200 - 25\,712 = +19\,490\ \mathrm J$$

3. **Check with ΔH̃ values:** heats of solution are −28.20 kJ (ñ = 5) and about −30.68 kJ (ñ = 7, interpolated). Q = 2(−28.195) − (−30.678) + 45.200 = +19.49 kJ ✓.

**Result:** Q ≈ +19.5 kJ. The process is endothermic: heat must be supplied to keep it at 25 °C.`,
        answer: String.raw`Final 2 LiCl in 10 H₂O (ñ = 5); hydrate → LiCl(s) + 3H₂O: +45 200 J; LiCl(s) + 3H₂O + LiCl(7H₂O) → 2LiCl(5H₂O): 2(−436 805) + 408 610 + 439 288 = −25 712 J ⇒ Q ≈ +19.5 kJ (endothermic).` } ] },
    { id: "practice-solution-applications-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P13", label: "", marks: "", topic: "solution-applications",
        sub: "ΔH̃ vs ñ plot: tangent slope = H̄₂ᴱ, intercept = H̄₁ᴱ", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 12.40 (p. 447)`,
        text: String.raw`Consider a plot of $\Delta\tilde H$, the heat of solution based on 1 mol of solute (species 1), vs. ñ, the moles of solvent per mole of solute, at constant T and P. (Figure 12.14 is an example, except that the plot considered here has a linear rather than logarithmic scale along the abscissa.) Let a tangent drawn to the $\Delta\tilde H$ vs. ñ curve intercept the ordinate at point I.

(a) Prove that the slope of the tangent at a particular point is equal to the partial excess enthalpy of the solvent in a solution with the composition represented by ñ; i.e., prove that $\dfrac{d\Delta\tilde H}{d\tilde n} = \bar H_2^E$.

(b) Prove that the intercept I equals the partial excess enthalpy of the solute in the same solution; i.e., prove that $I = \bar H_1^E$.`,
        solution: String.raw`1. **Relations.** $\Delta H = H^E$ (heat of mixing = excess enthalpy, since $\Delta H^{id}$ = 0), and $\Delta\tilde H = \Delta H/x_1$. For $n_1$ mol of solute and $n_2$ mol of solvent ($n = n_1 + n_2$):
$$nH^E = n\Delta H = n_1\Delta\tilde H(\tilde n), \qquad \tilde n = \frac{n_2}{n_1}$$

2. **(a) Partial excess enthalpy of the solvent:** differentiate $nH^E$ with respect to $n_2$ at constant $n_1$, T and P. Since $\partial\tilde n/\partial n_2 = 1/n_1$:
$$\bar H_2^E = \left[\frac{\partial(nH^E)}{\partial n_2}\right]_{T,P,n_1} = n_1\frac{d\Delta\tilde H}{d\tilde n}\cdot\frac{1}{n_1} = \frac{d\Delta\tilde H}{d\tilde n}\ \blacksquare$$

3. **(b) Intercept.** The tangent at ñ is $y = \Delta\tilde H + (\tilde n' - \tilde n)\,d\Delta\tilde H/d\tilde n$. At $\tilde n'$ = 0:
$$I = \Delta\tilde H - \tilde n\frac{d\Delta\tilde H}{d\tilde n} = \Delta\tilde H - \tilde n\bar H_2^E$$
   Summability, $nH^E = n_1\bar H_1^E + n_2\bar H_2^E$, divided by $n_1$: $\Delta\tilde H = \bar H_1^E + \tilde n\bar H_2^E$. Therefore
$$I = \bar H_1^E\ \blacksquare$$

4. **Use.** From Fig. 12.14, the slope of the LiCl curve gives the differential heat of dilution (solvent). The intercept gives the differential heat of solution of LiCl at that composition. At large ñ the slope tends to 0 and $I \to \Delta\tilde H^\infty$.`,
        answer: String.raw`n ΔH = n₁ΔH̃(ñ), ñ = n₂/n₁ ⇒ H̄₂ᴱ = ∂(nHᴱ)/∂n₂ = dΔH̃/dñ; summability ΔH̃ = H̄₁ᴱ + ñH̄₂ᴱ ⇒ tangent intercept I = ΔH̃ − ñ dΔH̃/dñ = H̄₁ᴱ.` } ] },
    { id: "practice-solution-applications-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P14", label: "", marks: "", topic: "solution-applications",
        sub: "ΔH = x₁x₂(A₂₁x₁ + A₁₂x₂) rewritten as ΔH̃(ñ): limits and initial slope", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 12.41 (p. 447)`,
        text: String.raw`Suppose that ΔH for a particular solute(1)/solvent(2) system is represented by the equation $\Delta H = x_1x_2(A_{21}x_1 + A_{12}x_2)$. Relate the behavior of a plot of $\Delta\tilde H$ vs. ñ to the features of this equation. Specifically, rewrite the equation in the form $\Delta\tilde H(\tilde n)$, and then show that:

(a) $\lim_{\tilde n \to 0}\Delta\tilde H = 0$ (b) $\lim_{\tilde n \to \infty}\Delta\tilde H = A_{12}$ (c) $\lim_{\tilde n \to 0}d\Delta\tilde H/d\tilde n = A_{21}$`,
        solution: String.raw`1. **Rewrite.** $x_1 = \dfrac{1}{1 + \tilde n}$, $x_2 = \dfrac{\tilde n}{1 + \tilde n}$, and $\Delta\tilde H = \Delta H/x_1 = x_2(A_{21}x_1 + A_{12}x_2)$:
$$\Delta\tilde H = \frac{\tilde n}{1 + \tilde n}\cdot\frac{A_{21} + A_{12}\tilde n}{1 + \tilde n} = \frac{\tilde n(A_{21} + A_{12}\tilde n)}{(1 + \tilde n)^2}$$

2. **(a)** ñ → 0 (pure solute): numerator → 0, denominator → 1, so $\Delta\tilde H$ → 0. There is no heat effect when no solvent is added.

3. **(b)** ñ → ∞ (infinite dilution): $\Delta\tilde H \approx A_{12}\tilde n^2/\tilde n^2 = A_{12}$. The plateau of the curve is the heat of solution at infinite dilution, $\Delta\tilde H^\infty = A_{12} = \bar H_1^{E,\infty}$.

4. **(c)** Derivative:
$$\frac{d\Delta\tilde H}{d\tilde n} = \frac{(A_{21} + 2A_{12}\tilde n)(1 + \tilde n)^2 - 2(1 + \tilde n)\tilde n(A_{21} + A_{12}\tilde n)}{(1 + \tilde n)^4} \;\xrightarrow{\tilde n \to 0}\; A_{21}$$
   The initial slope is $\bar H_2^{E,\infty}$, the partial excess enthalpy of the solvent infinitely dilute in the solute (by P13(a), slope = $\bar H_2^E$).

5. **Interpretation.** For the LiCl curve on Fig. 12.14 ($A_{12}$ ≈ −37 kJ/mol), ΔH̃ starts at 0, falls steeply (slope $A_{21}$) and levels off at $A_{12}$. The log scale on the figure compresses the plateau.`,
        answer: String.raw`ΔH̃ = ñ(A₂₁ + A₁₂ñ)/(1 + ñ)²: (a) → 0 as ñ → 0; (b) → A₁₂ (= H̄₁ᴱ∞, infinite-dilution heat of solution) as ñ → ∞; (c) dΔH̃/dñ → A₂₁ (= H̄₂ᴱ∞) as ñ → 0.` } ] },
    { id: "practice-solution-applications-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P15", label: "", marks: "", topic: "solution-applications",
        sub: "Temperature dependence of the heat of mixing: ΔH = ΔH₀ + ∫ΔC_P dT", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 12.42 (p. 448)`,
        text: String.raw`If the heat of mixing at temperature $T_0$ is $\Delta H_0$ and if the heat of mixing of the same solution at temperature T is ΔH, show that the two heats of mixing are related by $\Delta H = \Delta H_0 + \int_{T_0}^T\Delta C_P\,dT$, where $\Delta C_P$ is the heat-capacity change of mixing, defined by Eq. (12.29).`,
        solution: String.raw`1. **Definitions** (constant P and composition): $\Delta H = H - \sum_ix_iH_i$ and $\Delta C_P = C_P - \sum_ix_iC_{P_i}$ (Eq. 12.29).

2. **Differentiate ΔH with respect to T** at constant P and x:
$$\left(\frac{\partial\Delta H}{\partial T}\right)_{P,x} = \left(\frac{\partial H}{\partial T}\right)_{P,x} - \sum_ix_i\left(\frac{\partial H_i}{\partial T}\right)_P = C_P - \sum_ix_iC_{P_i} = \Delta C_P$$

3. **Integrate** from $T_0$ to T at constant P and x:
$$\boxed{\Delta H = \Delta H_0 + \int_{T_0}^T\Delta C_P\,dT}$$

4. **Path interpretation** (Hess-type cycle): mixing at T = (cool the pure species from T to $T_0$) + (mix at $T_0$) + (heat the solution back to T). Then $\Delta H = -\sum x_i\int_{T_0}^TC_{P_i}dT + \Delta H_0 + \int_{T_0}^TC_P\,dT$, the same result. This is the analogue of $\Delta H^\circ = \Delta H_0^\circ + \int\Delta C_P^\circ dT$ for reactions.

5. **Use.** Heat-of-solution data at 25 °C (Fig. 12.14) can be corrected to process temperatures, given the solution and pure-species heat capacities. If $\Delta C_P$ ≈ 0 (as is often nearly true), ΔH is nearly independent of T. Ethanol/water (KF slide 37) is a counter-example: $H^E$ changes sign between 30 and 110 °C.`,
        answer: String.raw`(∂ΔH/∂T)_P,x = C_P − ΣxᵢC_Pᵢ = ΔC_P ⇒ integrate T₀ → T: ΔH = ΔH₀ + ∫ΔC_P dT (equivalent to a cool–mix–heat path).` } ] },
    { id: "practice-solution-applications-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P16", label: "", marks: "(10+10+10=30)", topic: "solution-applications",
        sub: "van Laar constants from an azeotrope (x₁ = 0.45, 101.33 kPa), then γ∞ and BUBL P at x₁ = 0.10", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem: van Laar parameters from a single azeotrope (SVNA §12.2; Kaniz Fatema slides 27–30 on the van Laar equation)`,
        text: String.raw`A binary system forms an azeotrope at temperature T with $x_1^{az} = y_1^{az}$ = 0.45 and P = 101.33 kPa. At this temperature $P_1^{sat}$ = 67.0 kPa and $P_2^{sat}$ = 69.0 kPa. Assuming modified Raoult's law and the van Laar equation

$$\ln\gamma_1 = A'_{12}\left(1 + \frac{A'_{12}x_1}{A'_{21}x_2}\right)^{-2}, \qquad \ln\gamma_2 = A'_{21}\left(1 + \frac{A'_{21}x_2}{A'_{12}x_1}\right)^{-2}$$

(i) find the activity coefficients at the azeotrope and the van Laar constants;

(ii) find $\gamma_1^\infty$ and $\gamma_2^\infty$;

(iii) make a BUBL P calculation at the same T for $x_1$ = 0.10.`,
        solution: String.raw`**Assumptions:** modified Raoult's law; the van Laar parameters are independent of composition (T fixed).

1. **(i) γ's at the azeotrope.** There $x_i = y_i$, so $\gamma_i = P/P_i^{sat}$:
$$\gamma_1 = \frac{101.33}{67.0} = 1.5124, \qquad \gamma_2 = \frac{101.33}{69.0} = 1.4686$$
   So $\ln\gamma_1$ = 0.4137 and $\ln\gamma_2$ = 0.3843.

2. **(i) Van Laar constants from one (x, γ₁, γ₂) point.** Inverting the van Laar equations:
$$A'_{12} = \ln\gamma_1\left(1 + \frac{x_2\ln\gamma_2}{x_1\ln\gamma_1}\right)^2 = 0.4137\left(1 + \frac{0.55(0.3843)}{0.45(0.4137)}\right)^2 = 1.886$$
$$A'_{21} = \ln\gamma_2\left(1 + \frac{x_1\ln\gamma_1}{x_2\ln\gamma_2}\right)^2 = 0.3843\left(1 + \frac{0.45(0.4137)}{0.55(0.3843)}\right)^2 = 1.359$$

3. **(ii) Infinite dilution:** $\ln\gamma_1^\infty = A'_{12}$, so $\gamma_1^\infty = e^{1.886}$ = **6.59**; $\gamma_2^\infty = e^{1.359}$ = **3.89**. These are strong positive deviations, typical of an alcohol/hydrocarbon pair, which explains the maximum-pressure azeotrope even though the vapour pressures are nearly equal.

4. **(iii) BUBL P at $x_1$ = 0.10:**
$$\ln\gamma_1 = 1.886\left(1 + \frac{1.886(0.1)}{1.359(0.9)}\right)^{-2} = 1.416 \;\Rightarrow\; \gamma_1 = 4.120$$
$$\ln\gamma_2 = 1.359\left(1 + \frac{1.359(0.9)}{1.886(0.1)}\right)^{-2} = 0.0243 \;\Rightarrow\; \gamma_2 = 1.0246$$
$$P = 0.1(4.120)(67.0) + 0.9(1.0246)(69.0) = 27.61 + 63.63 = 91.23\ \mathrm{kPa}, \qquad y_1 = \frac{27.61}{91.23} = 0.303$$

5. **Check.** P(0.10) = 91.2 kPa lies between $P_2^{sat}$ and $P^{az}$, and $y_1 > x_1$ on this side of the azeotrope ✓.

**Result:** (i) γ₁ = 1.512, γ₂ = 1.469, $A'_{12}$ = 1.886, $A'_{21}$ = 1.359; (ii) γ₁∞ = 6.59, γ₂∞ = 3.89; (iii) P = 91.2 kPa, $y_1$ = 0.303.`,
        answer: String.raw`(i) γᵢ = P/Pᵢˢᵃᵗ: 1.512, 1.469 ⇒ A′₁₂ = ln γ₁(1 + x₂ln γ₂/x₁ln γ₁)² = 1.886, A′₂₁ = 1.359; (ii) γ₁∞ = 6.59, γ₂∞ = 3.89; (iii) x₁ = 0.1: γ₁ = 4.12, γ₂ = 1.025 ⇒ P = 91.2 kPa, y₁ = 0.303.` } ] },
    { id: "practice-solution-applications-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P17", label: "", marks: "(15)", topic: "solution-applications",
        sub: "Wilson equation, methanol/water at 60 °C: γ's, γ∞ and BUBL P at x₁ = 0.30", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem using the Wilson parameters of P7(b) (SVNA Problem 12.1c data) and the Wilson equations of Kaniz Fatema slide 32`,
        text: String.raw`For methanol(1)/water(2) at 333.15 K the Wilson parameters are $\Lambda_{12}$ = 0.4763 and $\Lambda_{21}$ = 1.0262, and $P_1^{sat}$ = 84.562 kPa, $P_2^{sat}$ = 19.953 kPa. Assuming modified Raoult's law:

(i) Write the Wilson equations for $\ln\gamma_1$ and $\ln\gamma_2$ and evaluate $\gamma_1^\infty$ and $\gamma_2^\infty$.

(ii) Calculate P and $y_1$ for a liquid with $x_1$ = 0.30.

(iii) What advantages does the Wilson equation have over Margules and van Laar, and what is its main limitation?`,
        solution: String.raw`1. **(i) Wilson equations:**
$$\ln\gamma_1 = -\ln(x_1 + x_2\Lambda_{12}) + x_2\left(\frac{\Lambda_{12}}{x_1 + x_2\Lambda_{12}} - \frac{\Lambda_{21}}{x_2 + x_1\Lambda_{21}}\right)$$
$$\ln\gamma_2 = -\ln(x_2 + x_1\Lambda_{21}) - x_1\left(\frac{\Lambda_{12}}{x_1 + x_2\Lambda_{12}} - \frac{\Lambda_{21}}{x_2 + x_1\Lambda_{21}}\right)$$
   Infinite dilution:
$$\ln\gamma_1^\infty = -\ln\Lambda_{12} + 1 - \Lambda_{21} = 0.7417 + 1 - 1.0262 = 0.7155 \;\Rightarrow\; \gamma_1^\infty = 2.045$$
$$\ln\gamma_2^\infty = -\ln\Lambda_{21} + 1 - \Lambda_{12} = -0.0259 + 1 - 0.4763 = 0.4978 \;\Rightarrow\; \gamma_2^\infty = 1.645$$

2. **(ii) At $x_1$ = 0.30:** $x_1 + x_2\Lambda_{12}$ = 0.3 + 0.7(0.4763) = 0.6334, and $x_2 + x_1\Lambda_{21}$ = 0.7 + 0.3(1.0262) = 1.0079.
$$\text{bracket} = \frac{0.4763}{0.6334} - \frac{1.0262}{1.0079} = 0.7520 - 1.0182 = -0.2662$$
$$\ln\gamma_1 = -\ln 0.6334 + 0.7(-0.2662) = 0.4567 - 0.1863 = 0.2703 \;\Rightarrow\; \gamma_1 = 1.310$$
$$\ln\gamma_2 = -\ln 1.0079 - 0.3(-0.2662) = -0.0079 + 0.0799 = 0.0720 \;\Rightarrow\; \gamma_2 = 1.075$$
$$P = 0.3(1.310)(84.562) + 0.7(1.075)(19.953) = 33.24 + 15.01 = 48.25\ \mathrm{kPa}, \qquad y_1 = \frac{33.24}{48.25} = 0.689$$
   This compares with the data of P7: P ≈ 48.9 kPa and $y_1$ ≈ 0.694 at $x_1$ = 0.30.

3. **(iii) Advantages and limitation.**
   - **Local-composition basis:** the parameters reflect unlike/like interaction energies. $\Lambda_{ij} = (V_j/V_i)\exp(-a_{ij}/RT)$ builds in a temperature dependence, so it extrapolates in T better than Margules and van Laar.
   - **Multicomponent extension** with binary parameters only, which is essential for process simulation.
   - Good for strongly non-ideal miscible systems, such as alcohols with hydrocarbons, where Margules and van Laar fail.
   - **Limitation:** it **cannot predict liquid–liquid immiscibility**. The Wilson $G^E$ always satisfies the stability criterion. NRTL or UNIQUAC are used for partially miscible systems.

**Result:** γ₁∞ = 2.05, γ₂∞ = 1.65; at $x_1$ = 0.30, γ₁ = 1.310, γ₂ = 1.075, P = 48.25 kPa, $y_1$ = 0.689.`,
        answer: String.raw`ln γ₁∞ = −ln Λ₁₂ + 1 − Λ₂₁ ⇒ γ₁∞ = 2.045; ln γ₂∞ = −ln Λ₂₁ + 1 − Λ₁₂ ⇒ γ₂∞ = 1.645; x₁ = 0.3: γ₁ = 1.310, γ₂ = 1.075 ⇒ P = 48.25 kPa, y₁ = 0.689. Wilson: local-composition, T-dependent, multicomponent; cannot predict LLE.` } ] },
    { id: "practice-solution-applications-P18", q: 18, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P18", label: "", marks: "(15)", topic: "solution-applications",
        sub: "BUBL T block diagram with the gamma/phi formulation", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`SVNA §14.1 (gamma/phi algorithms); the only gamma/phi algorithm not yet set in the past papers (BUBL P, DEW P, DEW T and flash have been)`,
        text: String.raw`Draw a neat block diagram for the calculation of the bubble-point temperature (BUBL T) applying the gamma/phi formulation. Write the necessary equations clearly.`,
        solution: String.raw`### Equations
1. **Gamma/phi VLE:** $y_i\Phi_iP = x_i\gamma_iP_i^{sat}$, with
$$\Phi_i = \frac{\hat\phi_i}{\phi_i^{sat}}\exp\left[\frac{-V_i^l(P - P_i^{sat})}{RT}\right]$$
2. **Σy = 1:** $P = \sum_ix_i\gamma_iP_i^{sat}/\Phi_i$. For a chosen species j, divide by $P_j^{sat}$:
$$P_j^{sat} = \frac{P}{\sum_i(x_i\gamma_i/\Phi_i)(P_i^{sat}/P_j^{sat})}$$
   The ratios $P_i^{sat}/P_j^{sat}$ depend only weakly on T, which keeps the iteration stable.
3. **Antoine:** $\ln P_i^{sat} = A_i - B_i/(T + C_i)$; inverted, $T = B_j/(A_j - \ln P_j^{sat}) - C_j$; starting values $T_i^{sat} = B_i/(A_i - \ln P) - C_i$.
4. **φ̂ᵢ** from the virial equation, $\ln\hat\phi_k = \frac{P}{RT}[B_{kk} + \tfrac12\sum\sum y_iy_j(2\delta_{ik} - \delta_{ij})]$, and $\ln\phi_i^{sat} = B_{ii}P_i^{sat}/RT$.
5. **γᵢ(T, x)** from a $G^E$ model (Wilson, NRTL…). In BUBL T the liquid composition is known, so γ changes only through T.

### Block diagram
![BUBL T flowchart with the gamma–phi formulation](fig/practice-solution-applications-P18-sketch.svg)

1. **Read** P, $\{x_i\}$; Antoine, $G^E$ and virial constants, $V_i^l$.
2. **Initialise:** all $\Phi_i$ = 1; $T = \sum x_iT_i^{sat}$.
3. **Evaluate** $P_i^{sat}(T)$ and $\gamma_i(T, \{x\})$. Calculate $P_j^{sat}$ from equation 2, then T from Antoine for j.
4. **Re-evaluate** $P_i^{sat}(T)$.
5. **Calculate** $y_i = x_i\gamma_iP_i^{sat}/(\Phi_iP)$. Evaluate $\hat\phi_i$ (at T, P, $\{y\}$), $\phi_i^{sat}$ and $\Phi_i$, and update $\gamma_i(T, x)$.
6. **Recalculate** $P_j^{sat}$ and T.
7. **Test** $|\delta T| < \varepsilon$. If not, return to step 5; if yes, **print** T and $\{y_i\}$.

At low pressure ($\Phi_i$ = 1) this reduces to the modified-Raoult BUBL T (VLE practice set, P3(c)).`,
        answer: String.raw`Read P, {xᵢ} → Φᵢ = 1, T = ΣxᵢTᵢˢᵃᵗ → Pᵢˢᵃᵗ(T), γᵢ(T, x) → Pⱼˢᵃᵗ = P/Σ(xᵢγᵢ/Φᵢ)(Pᵢˢᵃᵗ/Pⱼˢᵃᵗ), T from Antoine (j) → yᵢ = xᵢγᵢPᵢˢᵃᵗ/(ΦᵢP), new Φᵢ (virial φ̂ᵢ, φᵢˢᵃᵗ), γᵢ → recalc Pⱼˢᵃᵗ, T → repeat until |δT| < ε → print T, {yᵢ}.` } ] },
    { id: "practice-solution-applications-P19", q: 19, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-applications-P19", label: "", marks: "(12+3=15)", topic: "solution-applications",
        sub: "LiCl: heat of solution in 3 mol water and heat of dilution to 15 mol water (NBS data)", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style heats-of-solution problem using the NBS data on Kaniz Fatema slide 43 / SVNA p. 428 (see P3)`,
        text: String.raw`Using the heats of formation of P3 (LiCl(s) −408 610 J; LiCl in 3 mol H₂O −429 366 J; LiCl in 15 mol H₂O −442 835 J), calculate at 25°C:

(i) the heat effect when 1 mol of LiCl(s) is dissolved in 3 mol of water;

(ii) the heat effect when this solution is diluted isothermally with 12 more mol of water;

(iii) the heat released per kg of final solution if 1 kg of LiCl(s) is dissolved directly in water to give the same final solution. Sketch the process on a ΔH̃–ñ plot.`,
        solution: String.raw`**Assumptions:** isothermal, constant P; Q = ΔH. M(LiCl) = 42.39 and M(H₂O) = 18.015 g/mol.

1. **(i) Dissolution in 3 mol H₂O:**
$$\mathrm{LiCl(s) + 3H_2O \to LiCl(3H_2O)}: \quad \Delta\tilde H_3 = -429\,366 - (-408\,610) = -20\,756\ \mathrm J$$

2. **(ii) Dilution from ñ = 3 to ñ = 15:**
$$\mathrm{LiCl(3H_2O) + 12H_2O \to LiCl(15H_2O)}: \quad \Delta H = -442\,835 - (-429\,366) = -13\,469\ \mathrm J$$
   This equals $\Delta\tilde H_{15} - \Delta\tilde H_3$ = (−34 225) − (−20 756). Water appears on both sides of each step, so its formation enthalpy cancels.

3. **(iii) Direct dissolution of 1 kg LiCl** to ñ = 15:
   - 1000/42.39 = 23.59 mol LiCl, so ΔH = 23.59(−34.225) = −807.4 kJ.
   - Water = 15(23.59)(18.015) = 6375 g, so the solution mass is 7.375 kg and the heat per kg of solution is 807.4/7.375 = **109.5 kJ/kg** (released).
   - The total is the same as steps (i) + (ii) (Hess's law): −20.76 − 13.47 = −34.23 kJ/mol.

4. **Sketch (ΔH̃ against ñ):** the LiCl curve falls from about −21 kJ at ñ = 3 to −34.2 kJ at ñ = 15 and flattens towards about −37 kJ at infinite dilution. Step (i) is the point at ñ = 3. Step (ii) is the vertical drop of 13.5 kJ between the curve values at ñ = 3 and ñ = 15. The slope of the curve at any ñ is the partial excess enthalpy of water (P13), small at large ñ, so further dilution releases little heat.

**Result:** (i) −20.76 kJ/mol; (ii) −13.47 kJ/mol; (iii) −807 kJ per kg LiCl, i.e. about 110 kJ released per kg of final solution.`,
        answer: String.raw`(i) ΔH̃₃ = −429 366 + 408 610 = −20 756 J; (ii) dilution 3 → 15: −442 835 + 429 366 = −13 469 J; (iii) 23.59 mol × (−34.225 kJ) = −807 kJ per kg LiCl ≈ −110 kJ per kg of solution (7.375 kg).` } ] }
  ]
});
