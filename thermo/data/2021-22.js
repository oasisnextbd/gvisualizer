QB.paper({
  year: "2021-22", date: "07/05/2023", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engg. Examination 2021-2022, CHE 307 (Chemical Engineering Thermodynamics II), 3 hours, 210 marks. Section A: four questions; answer Question 1 (compulsory, 45) and any TWO from the rest. Section B: four questions; answer any THREE, i.e. Question 5 (compulsory, 45) and any two from the rest. Use separate scripts for each section; the figures in the margin indicate full marks. Attached: Figure for Q4(a) (H–x diagram of H₂SO₄/H₂O, H in Btu/lbₘ of solution, isotherms 32–200 °F); the virial-coefficient table for Q2(b) is printed in the question.`,
  questions: [
    { id: "2021-22-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw`**Compulsory Question.** Provide a list of some models to characterize the behavior of systems in vapor/liquid equilibrium (VLE). Briefly discuss the limitation(s) of one model among those. If a system of air in contact with liquid water is presumed at equilibrium, which model(s) will you select to perform the VLE calculation? You must justify your selection. **(3+4+6+30+2=45)**

Now, consider the following system of acetone (1)/methanol (2) where symbols have their usual meanings. For this system, a vapor mixture with $z_1$ = 0.30 is cooled to temperature T in the two-phase region and flows into a separation chamber at a pressure of 1 bar. If the composition of the liquid product is to be $x_1$ = 0.20, evaluate the required value of T and the value of $y_1$. For liquid mixtures of this system to a good approximation:

$$\ln\gamma_1 = 0.64x_2^2 \qquad \ln\gamma_2 = 0.64x_1^2$$

Antoine coefficients (P in kPa, T in degree Celsius):

| Species | A | B | C |
|---|---|---|---|
| Acetone | 14.31 | 2756.22 | 228.06 |
| Methanol | 16.58 | 3638.27 | 239.50 |

The model proposed above for VLE calculation including gamma (γ) cannot be applied extensively for many processes due to some constraints. Identify those constraints and propose modification(s) to overcome those.

*(The paper does not letter the parts; they are split here by the printed marks 3 + 4 + 6 = 13, 30 and 2.)*`,
      parts: [
        { id: "2021-22-Q1a", label: "(a)", marks: "3+4+6=13",
          topic: "vle-intro", sub: "VLE models, limitations of Raoult's law, model choice for air–water",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Provide a list of some models to characterize the behavior of systems in vapor/liquid equilibrium (VLE). Briefly discuss the limitation(s) of one model among those. If a system of air in contact with liquid water is presumed at equilibrium, which model(s) will you select to perform the VLE calculation? You must justify your selection.`,
          solution: String.raw`### Models for VLE (3)
| Model | Equation | Use |
|---|---|---|
| Raoult's law | $y_iP = x_iP_i^{sat}$ | ideal vapour + ideal liquid (similar species, low P) |
| Henry's law | $y_iP = x_i\mathcal H_i$ | dilute, usually supercritical solute (gases in liquids) |
| Modified Raoult's law | $y_iP = x_i\gamma_iP_i^{sat}$ | non-ideal liquid, low to moderate P |
| Gamma/phi formulation | $y_i\Phi_iP = x_i\gamma_iP_i^{sat}$ | non-ideal liquid and non-ideal vapour (moderate P) |
| Equation-of-state (phi/phi) | $y_i\hat\phi_i^vP = x_i\hat\phi_i^lP$ | high pressure, near-critical systems (cubic EOS) |
| K-value correlations | $y_i = K_ix_i$, $K_i(T, P)$ from DePriester charts | light hydrocarbons |

### Limitations of Raoult's law (4)
1. **Ideal-gas vapour:** valid only at low to moderate pressure. At high P the fugacity coefficients differ from 1.
2. **Ideal-solution liquid:** valid only for chemically similar species (benzene/toluene, n-hexane/n-heptane). It cannot describe positive or negative deviations, and it can never predict an azeotrope, because $P = P_2^{sat} + (P_1^{sat} - P_2^{sat})x_1$ is linear in $x_1$.
3. **Every species must be subcritical:** $P_i^{sat}$ must exist at the system T. So the law cannot be used for a gas such as N₂ or O₂ dissolved in water at room temperature.
4. It also neglects the Poynting effect and gives no liquid–liquid splitting.

### Air in contact with liquid water (6)
**Choice: Raoult's law for water and Henry's law for air** (SVNA Example 10.1).
- **Water (2)** is almost pure in the liquid ($x_2 \approx 1$), so $\gamma_2 \to 1$ (Lewis–Randall limit), and at about 1 atm the vapour is ideal. Hence $y_2P = x_2P_2^{sat} \approx P_2^{sat}$.
- **Air (1)** is far above its critical temperature ($T_c$ = 132.5 K, well below 298 K), so $P_1^{sat}$ does not exist and Raoult's law cannot be written for it. Its solubility is tiny ($x_1 \sim 10^{-5}$), which is exactly the dilute limit where Henry's law holds: $y_1P = x_1\mathcal H_1$.
- **Example** (25 °C, 1 atm, $\mathcal H_{air}$ = 72 950 bar, $P_2^{sat}$ = 3.166 kPa): $y_2 = 3.166/101.33 = 0.0312$, $y_1 = 0.9688$, and $x_1 = y_1P/\mathcal H_1 = 0.9688(1.01325)/72\,950 = 1.35\times10^{-5}$.
- A full γ model or an EOS is unnecessary here: water is nearly pure and the pressure is low.`,
          answer: String.raw`Models: Raoult, Henry, modified Raoult, gamma/phi, EOS (phi/phi), K-value charts. Raoult's law needs an ideal vapour (low P), an ideal liquid (similar species; no azeotropes) and subcritical species. Air–water: Raoult's law for water (x_w ≈ 1) and Henry's law for air (supercritical, very dilute), e.g. y_w = 0.031, x_air = 1.35×10⁻⁵ at 25 °C, 1 atm.` },
        { id: "2021-22-Q1b", label: "(b)", marks: "30",
          topic: "vle-intro", sub: "Acetone/methanol at 1 bar: separator temperature and vapour composition (BUBL T)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Now, consider the following system of acetone (1)/methanol (2) where symbols have their usual meanings. For this system, a vapor mixture with $z_1$ = 0.30 is cooled to temperature T in the two-phase region and flows into a separation chamber at a pressure of 1 bar. If the composition of the liquid product is to be $x_1$ = 0.20, evaluate the required value of T and the value of $y_1$. For liquid mixtures of this system to a good approximation:

$$\ln\gamma_1 = 0.64x_2^2 \qquad \ln\gamma_2 = 0.64x_1^2$$

Antoine coefficients (P in kPa, T in degree Celsius):

| Species | A | B | C |
|---|---|---|---|
| Acetone | 14.31 | 2756.22 | 228.06 |
| Methanol | 16.58 | 3638.27 | 239.50 |`,
          solution: String.raw`**Given:** $z_1$ = 0.30, P = 1 bar = 100 kPa, liquid product $x_1$ = 0.20; $\ln\gamma_1 = 0.64x_2^2$, $\ln\gamma_2 = 0.64x_1^2$; Antoine $\ln P^{sat}/\mathrm{kPa} = A - B/(t/°\mathrm C + C)$.

**Find:** T and $y_1$.

**Assumptions:** modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$ (1 bar: ideal vapour, Poynting factor ≈ 1); the liquid and vapour leaving the chamber are in equilibrium. With $x_1$ and P fixed, T is the **bubble-point temperature** of the liquid (a BUBL T calculation; $z_1$ only fixes the phase split).

1. **Activity coefficients** (independent of T here):
$$\gamma_1 = e^{0.64(0.8)^2} = e^{0.4096} = 1.5062, \qquad \gamma_2 = e^{0.64(0.2)^2} = e^{0.0256} = 1.0259$$

2. **Starting T.** Pure-component boiling points at 100 kPa, $t_i^{sat} = B_i/(A_i - \ln P) - C_i$: acetone 55.94 °C, methanol 64.33 °C. Start from $t = \sum x_it_i^{sat} = 0.2(55.94) + 0.8(64.33)$ = 62.65 °C.

3. **Iterate (SVNA BUBL T scheme).** With $\alpha_{12} = P_1^{sat}/P_2^{sat}$ at the current t:
$$P_2^{sat} = \frac{P}{x_1\gamma_1\alpha_{12} + x_2\gamma_2}, \qquad t = \frac{B_2}{A_2 - \ln P_2^{sat}} - C_2$$

| t / °C | $P_1^{sat}$ / kPa | $P_2^{sat}$ / kPa | $\alpha_{12}$ | new $P_2^{sat}$ / kPa | new t / °C |
|---|---|---|---|---|---|
| 62.65 | 125.09 | 93.57 | 1.3368 | 81.74 | 59.29 |
| 59.29 | 111.98 | 81.74 | 1.3700 | 81.07 | 59.10 |
| 59.10 | 111.23 | 81.07 | 1.3720 | 81.03 | 59.08 |

   Converged: **t = 59.08 °C (T = 332.23 K)**, with $P_1^{sat}$ = 111.19 kPa and $P_2^{sat}$ = 81.03 kPa.

4. **Check of the bubble pressure:**
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat} = 0.2(1.5062)(111.19) + 0.8(1.0259)(81.03) = 33.49 + 66.51 = 100.00\ \mathrm{kPa}\ ✓$$

5. **Vapour composition:**
$$y_1 = \frac{x_1\gamma_1P_1^{sat}}{P} = \frac{33.49}{100} = 0.335, \qquad y_2 = 0.665$$

6. **Consistency with the feed.** $x_1$ = 0.20 < $z_1$ = 0.30 < $y_1$ = 0.335, so the feed is indeed two-phase. The vapour fraction leaving the chamber is
$$\mathcal V = \frac{z_1 - x_1}{y_1 - x_1} = \frac{0.30 - 0.20}{0.335 - 0.20} = 0.741$$

**Result:** T = 59.1 °C (332.2 K), $y_1$ = 0.335 (and $\mathcal V$ = 0.741 of the feed leaves as vapour).`,
          answer: String.raw`T = 59.08 °C (332.2 K) from BUBL T at x₁ = 0.20, P = 100 kPa (γ₁ = 1.506, γ₂ = 1.026; P₁ˢᵃᵗ = 111.2, P₂ˢᵃᵗ = 81.0 kPa); y₁ = 0.335 (vapour fraction 0.741).` },
        { id: "2021-22-Q1c", label: "(c)", marks: "2",
          topic: "solution-applications", sub: "Constraints of modified Raoult's law and the gamma/phi remedy",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`The model proposed above for VLE calculation including gamma (γ) cannot be applied extensively for many processes due to some constraints. Identify those constraints and propose modification(s) to overcome those.`,
          solution: String.raw`### Constraints of modified Raoult's law, $y_iP = x_i\gamma_iP_i^{sat}$
1. **Ideal-gas vapour** is assumed. This fails at moderate and high pressure and for associating vapours.
2. **Poynting factor** taken as 1 (liquid fugacity evaluated at $P_i^{sat}$, not at P).
3. **Subcritical species only:** $P_i^{sat}$ must exist at T, so dissolved gases (N₂, CH₄, CO₂ above $T_c$) cannot be handled.
4. **The γ model** used here ($\ln\gamma_1 = 0.64x_2^2$) is a one-parameter, symmetric Margules form with a constant parameter. Real $G^E$ depends on T and is often unsymmetric, so the fit cannot be extrapolated far from the data.

### Modifications
- **Gamma/phi formulation:** $y_i\Phi_iP = x_i\gamma_iP_i^{sat}$, with $\Phi_i = \dfrac{\hat\phi_i}{\phi_i^{sat}}\exp\left[-\dfrac{V_i^l(P - P_i^{sat})}{RT}\right]$ and $\hat\phi_i$ from the virial equation. This corrects for vapour non-ideality and pressure.
- **Henry's law** (with an unsymmetric standard state) for supercritical components.
- **Better $G^E$ models** with T-dependent parameters: Margules/van Laar with two parameters, or Wilson, NRTL, UNIQUAC; UNIFAC when no data exist.
- At high pressure, the **EOS (phi/phi) approach**, $y_i\hat\phi_i^v = x_i\hat\phi_i^l$, with a cubic EOS and mixing rules.`,
          answer: String.raw`Constraints: ideal vapour (low P only), Poynting ≈ 1, every species subcritical, constant symmetric one-parameter γ model. Remedies: gamma/phi (yᵢΦᵢP = xᵢγᵢPᵢˢᵃᵗ with virial φ̂ᵢ and Poynting), Henry's law for gases, T-dependent Gᴱ models (Wilson/NRTL/UNIQUAC/UNIFAC), EOS (phi/phi) at high P.` }
      ] },
    { id: "2021-22-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q2a", label: "(a)", marks: "10",
          topic: "solution-applications", sub: "Ternary Gᴱ/RT = A₁₂x₁x₂ + A₁₃x₁x₃ + A₂₃x₂x₃: ln γ₁ and summability",
          type: "derivation", syllabus: "in", repeats: ["2014-15-Q3a"],
          text: String.raw`The excess Gibbs energy of a particular ternary liquid mixture is represented by the empirical expression, with parameters $A_{12}$, $A_{13}$ and $A_{23}$ functions of T and P only.

$$G^E/RT = A_{12}x_1x_2 + A_{13}x_1x_3 + A_{23}x_2x_3$$

i. Determine the implied expressions for ln γ1.

ii. Verify that your result for part (i) satisfies the summability relation.`,
          solution: String.raw`1. **Tool.** $\ln\gamma_i$ is the partial property of $G^E/RT$:
$$\ln\gamma_i = \left[\frac{\partial(nG^E/RT)}{\partial n_i}\right]_{T,P,n_j}$$
   Multiply by n and use $x_i = n_i/n$:
$$\frac{nG^E}{RT} = \frac{A_{12}n_1n_2 + A_{13}n_1n_3 + A_{23}n_2n_3}{n}$$

2. **(i) Differentiate with respect to $n_1$** ($n_2$, $n_3$ constant; $\partial n/\partial n_1 = 1$):
$$\ln\gamma_1 = \frac{A_{12}n_2 + A_{13}n_3}{n} - \frac{A_{12}n_1n_2 + A_{13}n_1n_3 + A_{23}n_2n_3}{n^2} = A_{12}x_2 + A_{13}x_3 - \frac{G^E}{RT}$$
$$\boxed{\ln\gamma_1 = A_{12}x_2(1 - x_1) + A_{13}x_3(1 - x_1) - A_{23}x_2x_3}$$
   By symmetry:
$$\ln\gamma_2 = A_{12}x_1 + A_{23}x_3 - \frac{G^E}{RT}, \qquad \ln\gamma_3 = A_{13}x_1 + A_{23}x_2 - \frac{G^E}{RT}$$

3. **(ii) Summability** requires $\sum_ix_i\ln\gamma_i = G^E/RT$:
$$\sum_ix_i\ln\gamma_i = (A_{12}x_1x_2 + A_{13}x_1x_3) + (A_{12}x_1x_2 + A_{23}x_2x_3) + (A_{13}x_1x_3 + A_{23}x_2x_3) - (x_1 + x_2 + x_3)\frac{G^E}{RT}$$
$$= 2\frac{G^E}{RT} - \frac{G^E}{RT} = \frac{G^E}{RT}\ ✓$$

4. **Checks.** As $x_1 \to 1$, $\ln\gamma_1 \to 0$ (pure-liquid standard state). At infinite dilution of 1 in the 2–3 binary, $\ln\gamma_1 = A_{12}x_2 + A_{13}x_3 - A_{23}x_2x_3$. In the binary 1–2 ($x_3$ = 0) the result reduces to the one-parameter Margules form $\ln\gamma_1 = A_{12}x_2^2$.`,
          answer: String.raw`ln γ₁ = A₁₂x₂ + A₁₃x₃ − Gᴱ/RT = A₁₂x₂(1 − x₁) + A₁₃x₃(1 − x₁) − A₂₃x₂x₃ (similarly for γ₂, γ₃); Σxᵢ ln γᵢ = 2Gᴱ/RT − Gᴱ/RT = Gᴱ/RT, so summability holds.` },
        { id: "2021-22-Q2b", label: "(b)", marks: "20",
          topic: "solution-theory", sub: "Equimolar propane/n-pentane at 75 °C, 2 bar: Z, Hᴿ, Sᴿ from virial coefficients",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q3b"],
          text: String.raw`For an equimolar vapor mixture of propane (1) and n-pentane (2) at 75°C and 2 bar, estimate Z, $H^R$, and $S^R$. The second virial coefficients are in cm³mol⁻¹.

| t/°C | $B_{11}$ | $B_{22}$ | $B_{12}$ |
|---|---|---|---|
| 50 | −331 | −980 | −558 |
| 75 | −276 | −809 | −466 |
| 100 | −235 | −684 | −399 |

$$Z = \frac{PV}{RT} = 1 + \frac{BP}{RT}, \qquad \frac{H^R}{RT} = \frac{P}{R}\left(\frac{B}{T} - \frac{dB}{dT}\right), \qquad \frac{S^R}{R} = -\frac{P}{R}\frac{dB}{dT}$$`,
          solution: String.raw`**Given:** $y_1 = y_2$ = 0.5, T = 348.15 K, P = 2 bar; $B_{ij}$ at 50, 75, 100 °C.

**Find:** Z, $H^R$, $S^R$.

**Assumptions:** two-term virial equation in P (adequate at 2 bar); mixture $B = \sum_i\sum_jy_iy_jB_{ij}$; $dB_{ij}/dT$ by a central difference over 50–100 °C.

1. **Mixture B at 75 °C:**
$$B = y_1^2B_{11} + 2y_1y_2B_{12} + y_2^2B_{22} = 0.25(-276) + 0.5(-466) + 0.25(-809) = -504.25\ \mathrm{cm^3\,mol^{-1}}$$

2. **Temperature derivatives** (central difference, ΔT = 50 K):
$$\frac{dB_{11}}{dT} = \frac{-235 - (-331)}{50} = 1.92, \qquad \frac{dB_{22}}{dT} = \frac{-684 + 980}{50} = 5.92, \qquad \frac{dB_{12}}{dT} = \frac{-399 + 558}{50} = 3.18\ \mathrm{cm^3\,mol^{-1}\,K^{-1}}$$
$$\frac{dB}{dT} = 0.25(1.92) + 0.5(3.18) + 0.25(5.92) = 3.55\ \mathrm{cm^3\,mol^{-1}\,K^{-1}}$$

3. **Compressibility factor:**
$$\frac{BP}{RT} = \frac{(-504.25\times10^{-6})(2\times10^5)}{8.314(348.15)} = -0.0348, \qquad \boxed{Z = 0.9652}$$

4. **Residual enthalpy:**
$$H^R = P\left(B - T\frac{dB}{dT}\right) = (2\times10^5)\left[-504.25 - 348.15(3.55)\right]\times10^{-6} = (2\times10^5)(-1740.2\times10^{-6})$$
$$\boxed{H^R = -348\ \mathrm{J\,mol^{-1}}}, \qquad \frac{H^R}{RT} = -0.120$$

5. **Residual entropy:**
$$S^R = -P\frac{dB}{dT} = -(2\times10^5)(3.55\times10^{-6}) \Rightarrow \boxed{S^R = -0.710\ \mathrm{J\,mol^{-1}\,K^{-1}}}, \qquad \frac{S^R}{R} = -0.0854$$

**Result:** Z = 0.965, $H^R$ = −348 J/mol, $S^R$ = −0.710 J/(mol·K). The mixture is close to ideal at 2 bar, and the negative residuals reflect attractive forces (B < 0).`,
          answer: String.raw`B = −504.25 cm³/mol, dB/dT = 3.55 cm³/(mol·K) ⇒ Z = 0.965, Hᴿ = P(B − T dB/dT) = −348 J/mol (Hᴿ/RT = −0.120), Sᴿ = −P dB/dT = −0.710 J/(mol·K).` }
      ] },
    { id: "2021-22-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q3", label: "", marks: "30",
          topic: "solution-applications", sub: "Acetonitrile/benzene at 45 °C: Margules fit and thermodynamic-consistency test",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Following are VLE data for the system acetonitrile (1)/benzene (2) at 45°C.

| P / kPa | $x_1$ | $y_1$ | P / kPa | $x_1$ | $y_1$ |
|---|---|---|---|---|---|
| 29.82 | 0.00 | 0.00 | 36.98 | 0.55 | 0.51 |
| 33.55 | 0.09 | 0.18 | 35.79 | 0.72 | 0.62 |
| 36.46 | 0.29 | 0.36 | 32.33 | 0.90 | 0.79 |
| 37.06 | 0.51 | 0.49 | 27.78 | 1.00 | 1.00 |

Prepare a consistency test diagram for activity coefficient and excess Gibbs energy.

$$P_1^{sat} = 27.78\ \mathrm{kPa}, \quad P_2^{sat} = 29.82\ \mathrm{kPa}$$

$$\ln\gamma_1 = x_2^2[A_{12} + 2(A_{21} - A_{12})x_1], \qquad \ln\gamma_2 = x_1^2[A_{21} + 2(A_{12} - A_{21})x_2]$$`,
          solution: String.raw`**Given:** T = 318.15 K, the eight P–x–y points, $P_1^{sat}$ = 27.78 kPa, $P_2^{sat}$ = 29.82 kPa, two-parameter Margules model.

**Find:** experimental γ's and $G^E/RT$, a Margules fit, and the residual (consistency) plots.

**Assumptions:** low pressure, so modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$ holds. The test is the SVNA (§12.1) residual method based on the Gibbs–Duhem equation.

1. **Experimental values** $\gamma_1 = y_1P/(x_1P_1^{sat})$, $\gamma_2 = y_2P/(x_2P_2^{sat})$, $G^E/RT = x_1\ln\gamma_1 + x_2\ln\gamma_2$. For example, at $x_1$ = 0.29: $\gamma_1 = 0.36(36.46)/(0.29 \times 27.78) = 1.6293$.

| $x_1$ | $\gamma_1$ | $\gamma_2$ | $\ln\gamma_1$ | $\ln\gamma_2$ | $G^E/RT$ | $G^E/x_1x_2RT$ | $\ln(\gamma_1/\gamma_2)$ |
|---|---|---|---|---|---|---|---|
| 0.09 | 2.4154 | 1.0138 | 0.8819 | 0.0137 | 0.0919 | 1.122 | 0.8682 |
| 0.29 | 1.6293 | 1.1021 | 0.4881 | 0.0972 | 0.2106 | 1.023 | 0.3909 |
| 0.51 | 1.2817 | 1.2935 | 0.2482 | 0.2574 | 0.2527 | 1.011 | −0.0091 |
| 0.55 | 1.2344 | 1.3503 | 0.2106 | 0.3004 | 0.2510 | 1.014 | −0.0898 |
| 0.72 | 1.1094 | 1.6288 | 0.1038 | 0.4879 | 0.2114 | 1.048 | −0.3841 |
| 0.90 | 1.0215 | 2.2768 | 0.0213 | 0.8228 | 0.1015 | 1.127 | −0.8014 |

2. **Fit of $G^E/RT$.** The Margules model is $G^E/RT = x_1x_2(A_{21}x_1 + A_{12}x_2)$, which is linear in the parameters. Least squares on $G^E/RT$ (minimise $\sum(\delta G^E/RT)^2$) gives
$$\boxed{A_{12} = 1.009, \qquad A_{21} = 1.047}$$
   So $\ln\gamma_1^\infty = 1.009$ and $\ln\gamma_2^\infty = 1.047$: a nearly symmetric, positive-deviation system.

3. **Residuals.** From the correlation, $\ln(\gamma_1/\gamma_2)_{calc} = \ln\gamma_1 - \ln\gamma_2$ (model). The residuals are δX = X(calc) − X(exp):

| $x_1$ | $G^E/RT$ (calc) | $\delta(G^E/RT)$ | $\ln(\gamma_1/\gamma_2)$ (calc) | $\delta\ln(\gamma_1/\gamma_2)$ |
|---|---|---|---|---|
| 0.09 | 0.0829 | −0.0089 | 0.8333 | −0.0348 |
| 0.29 | 0.2100 | −0.0006 | 0.4361 | +0.0452 |
| 0.51 | 0.2570 | +0.0043 | −0.0112 | −0.0021 |
| 0.55 | 0.2549 | +0.0039 | −0.0937 | −0.0039 |
| 0.72 | 0.2089 | −0.0025 | −0.4483 | −0.0643 |
| 0.90 | 0.0939 | −0.0076 | −0.8309 | −0.0295 |

4. **Why this tests consistency.** For a correlation of $G^E/RT$, the Gibbs–Duhem equation gives
$$\delta\frac{G^E}{RT} = x_1\,\delta\ln\frac{\gamma_1}{\gamma_2} - \varepsilon, \qquad \varepsilon = x_1\frac{d\ln\gamma_1^*}{dx_1} + x_2\frac{d\ln\gamma_2^*}{dx_1}$$
   where * marks the experimental values. The correlation satisfies Gibbs–Duhem exactly, so once $\delta(G^E/RT)$ has been made small by the fit, any remaining systematic $\delta\ln(\gamma_1/\gamma_2)$ measures ε, the violation of Gibbs–Duhem by the data. Consistent data give $\delta\ln(\gamma_1/\gamma_2)$ scattered randomly about zero, with a mean absolute value of about 0.03 or less (Van Ness index 1–2).

5. **Consistency-test diagram** (upper panel: data and correlation; lower panel: residuals; dashed band ±0.03):

![Acetonitrile/benzene at 45 °C: ln γ₁, ln γ₂ and Gᴱ/RT data with the Margules correlation (top) and the residuals δ ln(γ₁/γ₂) and δ(Gᴱ/RT) (bottom)](fig/2021-22-Q3-sol.svg)

6. **Assessment.**
   - $\delta(G^E/RT)$ is small everywhere (|δ| ≤ 0.009), so the two-parameter Margules form represents $G^E/RT$ well.
   - $\delta\ln(\gamma_1/\gamma_2)$: mean absolute value = (0.0348 + 0.0452 + 0.0021 + 0.0039 + 0.0643 + 0.0295)/6 = **0.030**, right at the 0.03 limit. Four of six residuals are negative, and the point at $x_1$ = 0.72 (−0.064) lies well outside the band.
   - **Conclusion:** the data are only **marginally consistent**. The point at $x_1$ = 0.72 is suspect. The two-decimal $y_1$ values (uncertainty ±0.005 ⇒ about ±0.01–0.02 in ln γ) limit the quality of the set.

**Result:** $A_{12}$ = 1.009, $A_{21}$ = 1.047. Residuals δ(Gᴱ/RT) ≤ 0.009 and mean |δ ln(γ₁/γ₂)| = 0.030 with a systematic bias, so the data pass the consistency test only marginally.`,
          answer: String.raw`Experimental γ's from yᵢP = xᵢγᵢPᵢˢᵃᵗ; least-squares Margules fit of Gᴱ/RT gives A₁₂ = 1.009, A₂₁ = 1.047. Residuals: |δ(Gᴱ/RT)| ≤ 0.009; δ ln(γ₁/γ₂) = −0.035, +0.045, −0.002, −0.004, −0.064, −0.030 (mean |δ| = 0.030, mostly negative) ⇒ marginally consistent; x₁ = 0.72 point suspect.` }
      ] },
    { id: "2021-22-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q4a", label: "(a)", marks: "12+3=15",
          topic: "solution-applications", sub: "SO₃(l) + H₂O to 50 wt% H₂SO₄ at 60 °C: heat effect with the H–x chart",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`What is the heat effect when sufficient SO₃(l) at 25°C is reacted with H₂O at 25°C to give a 50 wt% H₂SO₄ solution at 60°C? You must attach the H-X diagram with answer script showing the points you are considering for the energy balance.

*(Figure for Q 4(a): H–x diagram of H₂SO₄/H₂O, H in Btu/lbₘ of solution against wt % H₂SO₄, isotherms 32, 40, 60, 77, 80, 100, 120, 140, 160, 180, 200 °F, with the freezing line.)*`,
          solution: String.raw`**Given:** SO₃(l) and H₂O(l) at 25 °C (77 °F) → 50 wt% H₂SO₄ at 60 °C (140 °F); the H–x chart in Btu/lbₘ.

**Find:** Q per unit of product.

**Assumptions:** steady flow at about 1 atm, so Q = ΔH. Chart reference states (SVNA Fig. 12.17, as stated in the lecture): **H = 0 for pure liquid water at 32 °F and pure liquid H₂SO₄ at 77 °F**. Heats of formation at 298.15 K: H₂SO₄(l) −813.989 and H₂O(l) −285.830 kJ/mol (SVNA Table C.4); SO₃(l) −441.04 kJ/mol (NBS tables; SVNA lists only SO₃(g), −395.72). Basis: **1 lbₘ of 50% solution**.

1. **Material balance.** 0.5 lbₘ H₂SO₄ = 0.5(453.59)/98.08 = 2.3124 mol. It needs 2.3124 mol SO₃ (185.1 g = 0.408 lbₘ) and 2.3124 mol H₂O (41.7 g = 0.0918 lbₘ) for the reaction, plus 0.5 lbₘ water for dilution. Total water fed: 0.592 lbₘ at 77 °F.

2. **Path.** (i) React SO₃(l) + H₂O(l) → H₂SO₄(l) at 25 °C. (ii) Mix the pure acid and the remaining water (both at 77 °F) into 50% solution at 140 °F, using the chart.

3. **Step (i), heat of reaction:**
$$\Delta H^\circ_{298} = -813.989 - (-441.04) - (-285.830) = -87.12\ \mathrm{kJ\,mol^{-1}}$$
$$\Delta H_{(i)} = 2.3124(-87.12) = -201.5\ \mathrm{kJ} = -191.0\ \mathrm{Btu}$$

4. **Step (ii), chart readings** (points to mark on the attached H–x diagram):
   - **W** – water at 77 °F, x = 0: the 77 °F isotherm meets the H axis at **H = 45 Btu/lbₘ** (steam tables: $h_f$ = 45.08 Btu/lbₘ above 32 °F).
   - **S** – pure H₂SO₄ at 77 °F, x = 100%: **H = 0** (reference state).
   - **M** – adiabatic mixture on the straight line WS at 50%: $H_M = 0.5(45.08) + 0.5(0) = 22.5$ Btu/lbₘ.
   - **P** – product at 50 wt%, 140 °F: go up the 50% ordinate to the 140 °F isotherm (between the 120 °F curve at about −82 and the 160 °F curve at about −58) and read across: **H = −70 Btu/lbₘ**.
$$\Delta H_{(ii)} = H_P - H_M = -70.3 - 22.5 = -92.8\ \mathrm{Btu} = -98.0\ \mathrm{kJ}$$
   On the chart, P lies 92.8 Btu/lbₘ vertically below M: the heat of mixing far exceeds the sensible heat needed to reach 140 °F.

![How to read the H–x chart (Btu): W (x = 0, 77 °F, H = 45) and S (100 %, H = 0) → M on line WS at 50 % (22.5) → P on the 140 °F isotherm at 50 % (H ≈ −70 Btu/lbₘ)](fig/2021-22-Q4a-read.svg)

5. **Total heat effect** (per lbₘ of product):
$$Q = \Delta H_{(i)} + \Delta H_{(ii)} = -191.0 - 92.8 = -283.8\ \mathrm{Btu/lb_m}$$
$$Q = -299.4\ \mathrm{kJ\ per\ lb_m} = -660\ \mathrm{kJ\ per\ kg\ of\ 50\%\ acid} \;(= -129.5\ \mathrm{kJ\ per\ mol\ SO_3})$$

**Result:** Q ≈ −284 Btu/lbₘ (−660 kJ/kg) of 50% H₂SO₄. The process is strongly exothermic, and this heat must be removed to hold the product at 60 °C. About two-thirds comes from the hydration reaction and one-third from dilution.`,
          answer: String.raw`Q ≈ −284 Btu per lbₘ of 50% acid (−660 kJ/kg; −129.5 kJ/mol SO₃): reaction SO₃(l) + H₂O(l) → H₂SO₄(l), ΔH° = −87.12 kJ/mol (−191 Btu/lbₘ), plus mixing from the chart H(50%, 140 °F) = −70 vs. M = 22.5 Btu/lbₘ (−92.8 Btu/lbₘ). Heat must be removed.` },
        { id: "2021-22-Q4b", label: "(b)", marks: "15",
          topic: "solution-applications", sub: "Block diagram for a P,T-flash calculation with the gamma/phi formulation",
          type: "sketch", syllabus: "in", repeats: ["2023-24-Q8c"],
          text: String.raw`Draw a block diagram for a P, T - flash calculation applying the gamma-phi formulation. You may consider the following equations.

$$K_i = \frac{y_i}{x_i} = \frac{\gamma_iP_i^{sat}}{\phi_iP} \qquad F = \sum_i\frac{z_i(K_i - 1)}{1 + V(K_i - 1)} = 0$$

$$\frac{dF}{dV} = -\sum_i\frac{z_i(K_i - 1)^2}{[1 + V(K_i - 1)]^2} \qquad x_i = \frac{z_i}{1 + V(K_i - 1)}$$`,
          solution: String.raw`**Basis.** Gamma/phi VLE: $y_i\Phi_iP = x_i\gamma_iP_i^{sat}$, so $K_i = \gamma_iP_i^{sat}/(\Phi_iP)$ with $\Phi_i = \dfrac{\hat\phi_i}{\phi_i^{sat}}\exp\left[\dfrac{-V_i^l(P - P_i^{sat})}{RT}\right]$ (the printed $\phi_i$ is this Φᵢ). Material balances for 1 mol feed with vapour fraction V: $z_i = x_i(1 - V) + y_iV$ and $\sum_i(y_i - x_i) = 0$ give the Rachford–Rice function F(V) above.

![Block diagram of the P,T-flash calculation with the gamma–phi formulation](fig/2021-22-Q4b-sketch.svg)

1. **Read** T, P, the feed $\{z_i\}$ and the constants: Antoine (for $P_i^{sat}$), $G^E$-model parameters (for $\gamma_i$), virial coefficients $B_{ij}$ (for $\hat\phi_i$, $\phi_i^{sat}$), liquid volumes $V_i^l$.

2. **Check that a flash exists.** Run a BUBL P with $\{x_i\} = \{z_i\}$ and a DEW P with $\{y_i\} = \{z_i\}$. Only if $P_{dew} < P < P_{bubl}$ is the feed two-phase. Otherwise it is all vapour or all liquid and the calculation stops.

3. **Initial estimates.** Interpolate between the dew point (V = 1, with its $x_i$, $\gamma_i$) and the bubble point (V = 0, with its $y_i$, $\Phi_i$):
$$V \approx \frac{P_{bubl} - P}{P_{bubl} - P_{dew}}$$
   and take $\gamma_i$, $\Phi_i$ by the same linear interpolation in P.

4. **K-values:** $K_i = \gamma_iP_i^{sat}/(\Phi_iP)$ with the current $\gamma_i$, $\Phi_i$.

5. **Solve F(V) = 0 by Newton's method:**
$$V_{new} = V - \frac{F}{dF/dV}, \qquad \frac{dF}{dV} = -\sum_i\frac{z_i(K_i - 1)^2}{[1 + V(K_i - 1)]^2} < 0$$
   F is monotonic in V, so the iteration converges quickly.

6. **Phase compositions:** $x_i = \dfrac{z_i}{1 + V(K_i - 1)}$, $y_i = K_ix_i$.

7. **Update the non-idealities:** $\gamma_i$ from the $G^E$ model at T and the new $\{x_i\}$; $\hat\phi_i$ (virial) at T, P and the new $\{y_i\}$; hence new $\Phi_i$ and $K_i$.

8. **Convergence test:** if the changes in V, $\{x_i\}$ and $\{y_i\}$ are all below the tolerance ε, print V, $\{x_i\}$, $\{y_i\}$. Otherwise return to step 4 (the loop on the right of the diagram).`,
          answer: String.raw`Read T, P, {zᵢ} → BUBL P (x = z) and DEW P (y = z), check P_dew < P < P_bubl → initial V, γᵢ, Φᵢ by interpolation → Kᵢ = γᵢPᵢˢᵃᵗ/(ΦᵢP) → Newton on Rachford–Rice F(V) = 0 → xᵢ = zᵢ/[1 + V(Kᵢ − 1)], yᵢ = Kᵢxᵢ → new γᵢ(x), φ̂ᵢ(y), Φᵢ → repeat until V, x, y converge.` }
      ] },
    { id: "2021-22-Q5", q: 5, section: "B", compulsory: true,
      stem: String.raw`**Compulsory Question.** Answer the multiple choice questions below with reasoning. *(45 marks in all; part (iii) carries no printed mark.)*`,
      parts: [
        { id: "2021-22-Q5i", label: "(i)", marks: "7",
          topic: "reaction-equilibria", sub: "Effect of pressure on a liquid-phase reaction with Σν > 0",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q5ii"],
          text: String.raw`If the total stoichiometric number $\nu = \sum\nu_i$ is positive, an increases in P at constant Temperature (according to $\prod_i(\gamma_ix_i)^{\nu_i} = K\exp\left(\dfrac{(P_0 - P)}{P_0}\sum_i\gamma_i\nu_i\right)$, (Symbols have their usual meanings)

(a) will cause a shift of the reaction to the right
(b) will cause a shift of the reaction to the left
(c) will not affect the equilibrium at all
(d) None of the above

Interpret your answer.

*(Exponent transcribed as printed: $\frac{(P_0 - P)}{P_0}\sum_i\gamma_i\nu_i$. The intended SVNA relation is $\prod_i(\gamma_ix_i)^{\nu_i} = K\exp\left[\frac{(P^\circ - P)}{RT}\sum_i\nu_iV_i\right]$.)*`,
          solution: String.raw`**Answer: (b) – the reaction shifts to the left** (for the usual case where the products occupy more volume than the reactants).

1. **The relation.** For a liquid-phase reaction (SVNA §13.8), the standard state is the pure liquid at $P^\circ$. Correcting each pure-liquid fugacity from $P^\circ$ to P with the Poynting factor ($\ln(f_i/f_i^\circ) = V_i(P - P^\circ)/RT$) gives
$$\prod_i(x_i\gamma_i)^{\nu_i} = K\exp\left[\frac{(P^\circ - P)}{RT}\sum_i\nu_iV_i\right]$$
   The printed exponent, $\frac{P_0 - P}{P_0}\sum_i\gamma_i\nu_i$, is a misprint of this: RT in place of $P_0$ and molar volumes $V_i$ in place of $\gamma_i$.

2. **Effect of P.** K depends on T only. The exponent's sign is fixed by $\Delta V = \sum_i\nu_iV_i$. When the products take up more volume ($\Delta V > 0$), raising P makes $(P^\circ - P)\Delta V < 0$. The right-hand side then falls, so $\prod(x_i\gamma_i)^{\nu_i}$ must fall: the products decrease and **the reaction shifts left**, which is Le Chatelier's principle. For an ideal-gas reaction, ν > 0 means more moles and more volume. There $\prod y_i^{\nu_i} = (P/P^\circ)^{-\nu}K$, and the shift to the left is direct.

3. **Interpretation.** For liquids the $V_i$ are small, about 10⁻⁴ m³/mol. Even ΔV = 50 cm³/mol and ΔP = 100 bar give an exponent of only $-50\times10^{-6}(10^7)/(8.314 \times 298) = -0.20$. Pressure therefore has a **minor** effect on liquid-phase equilibria and is usually neglected below a few hundred bar ($\prod(x_i\gamma_i)^{\nu_i} = K$). The decisive quantity is the **volume change** of reaction, not ν itself. With a negative ΔV, raising P would shift the reaction to the right.`,
          answer: String.raw`(b) Shifts left: Π(xᵢγᵢ)^νᵢ = K exp[(P° − P)ΣνᵢVᵢ/RT] (printed exponent garbled); with ΔV = ΣνᵢVᵢ > 0 (products bulkier, as ν > 0 implies for gases), raising P lowers the right side ⇒ fewer products (Le Chatelier). For liquids the effect is small (ΔV tiny).` },
        { id: "2021-22-Q5ii", label: "(ii)", marks: "5",
          topic: "refrigeration", sub: "Most critical factor for choosing multistage (cascade) refrigeration",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q5iii"],
          text: String.raw`Using cascade refrigeration loop, higher cooling efficiency can be achieved. In this case, for this we need to connect them in a way that one loops evaporator becomes condenser for the other. What is the most critical factor to choose multiple-stage refrigeration over single stage-

(a) Limits of Temperature difference
(b) Limits on operating pressures
(c) Limits on the condenser
(d) Limits on the evaporator

Describe the reasons behind your answer.`,
          solution: String.raw`**Answer: (a) Limits of temperature difference** (with the pressure ratio that follows from it).

1. In a single-stage vapour-compression cycle, one refrigerant must evaporate at $T_C$ and condense at $T_H$. The required pressure ratio $P_{sat}(T_H)/P_{sat}(T_C)$ grows roughly exponentially with $T_H - T_C$ (Clausius–Clapeyron).

2. When $T_H - T_C$ is large (deep refrigeration, below about −30 to −40 °C with rejection to ambient):
   - **No single refrigerant suits both ends.** At $T_C$ its vapour pressure is far below 1 atm (air leaks in, vapour volume is huge), or near $T_H$ it approaches its critical point (little latent heat).
   - The **compression ratio is very high**, so compressor efficiency and volumetric efficiency fall and the discharge temperature becomes excessive.
   - **Throttling losses rise sharply**: a large fraction of the liquid flashes, and ω falls well below the Carnot value $T_C/(T_H - T_C)$.

3. **Cascade remedy.** Split $T_H - T_C$ into two or more smaller lifts, each with its own refrigerant (e.g. NH₃ or R-134a in the upper loop, ethane or CO₂ in the lower). The evaporator of the upper loop is the condenser of the lower loop. Each loop then works at a moderate pressure ratio, and the overall ω is much closer to Carnot.

4. The operating-pressure limits (b) and the condenser and evaporator conditions (c, d) all follow from the **overall temperature difference**, which is therefore the critical factor.`,
          answer: String.raw`(a) Limits of temperature difference: a large T_H − T_C needs a huge pressure ratio, with no single refrigerant suitable at both ends, poor compressor efficiency, high discharge temperature and big throttling losses. A cascade splits the lift between loops with different refrigerants.` },
        { id: "2021-22-Q5iii", label: "(iii)", marks: "",
          topic: "phase-equilibria-topics", sub: "Do phase-stability criteria apply to non-equilibrium states?",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q5v"],
          text: String.raw`Phase stability criteria are applicable to both equilibrium and non-equilibrium states. True/False (Clarify)`,
          solution: String.raw`**True.**

1. The criteria come from the second law: $dU^t + P\,dV^t - T\,dS^t \le 0$, i.e. $(dG^t)_{T,P} \le 0$. The **inequality** applies to every *irreversible* change of a closed system (a non-equilibrium state moving towards equilibrium). The **equality** holds at equilibrium (Kirtania: "this equation defines both irreversible and equilibrium processes").

2. The stability condition for a binary liquid,
$$\frac{d^2(\Delta G/RT)}{dx_1^2} > 0 \;\Leftrightarrow\; \frac{d\ln\gamma_1}{dx_1} > -\frac{1}{x_1} \;\Leftrightarrow\; \frac{d\hat f_1}{dx_1} > 0 \qquad (T, P\ \text{const.})$$
   is a property of the **homogeneous mixture at the given T, P, x**. It can be evaluated for any proposed single-phase state, whether or not that state is the final equilibrium one.

3. **Use for non-equilibrium states:** if a freshly mixed homogeneous liquid (not yet in equilibrium) violates the criterion, $G^t$ can still fall by splitting. The mixture will then separate spontaneously into two liquid phases (LLE). If the criterion is satisfied, the single phase is stable, or at most metastable between the binodal and the spinodal.

4. **Use at equilibrium:** a computed equilibrium state, e.g. from a $G^E$ model, must also meet the criterion. Otherwise it is not physically realisable (an S-shaped P–x curve, or $dy_1/dx_1 < 0$).`,
          answer: String.raw`True: derived from dUᵗ + PdVᵗ − TdSᵗ ≤ 0 [(dGᵗ)_T,P ≤ 0], which covers irreversible (non-equilibrium) changes and equilibrium alike; d²(ΔG/RT)/dx₁² > 0 tests any homogeneous state — if violated, a (non-equilibrium) mixture splits spontaneously; equilibrium solutions must satisfy it too.` },
        { id: "2021-22-Q5iv", label: "(iv)", marks: "7",
          topic: "reaction-equilibria", sub: "Does a fuel cell gain efficiency at higher temperature?",
          type: "theory", syllabus: "in", repeats: ["2023-24-Q2c"],
          text: String.raw`A fuel cell is operating at room temperature. It will achieve higher efficiency if it can be operated at a higher temperature. True/False (Clarify)`,
          solution: String.raw`**False** (thermodynamically). The ideal efficiency of an H₂–O₂ fuel cell **decreases** with temperature.

1. The maximum electrical work is $-\Delta G$ (reversible, constant T and P), so the ideal efficiency is
$$\eta = \frac{\Delta G}{\Delta H} = 1 - \frac{T\Delta S}{\Delta H}$$

2. For $\mathrm{H_2 + \tfrac12O_2 \to H_2O(g)}$ at 25 °C (Kirtania slides): ΔH = −241 818 J/mol, ΔG = −228 572 J/mol, giving E = 1.184 V and η = 0.945. Here
$$\Delta S = \frac{\Delta H - \Delta G}{T} = \frac{-241818 + 228572}{298.15} = -44.4\ \mathrm{J\,mol^{-1}\,K^{-1}}$$
   ΔS < 0 because the moles of gas fall from 1.5 to 1.

3. ΔG = ΔH − TΔS becomes **less negative** as T rises, so η and the reversible voltage $E = -\Delta G/2F$ both fall. With ΔH and ΔS taken as constant, at 60 °C: ΔG = −241 818 + 333.15(44.4) = −227 017 J/mol, η = 0.939 and E = 1.176 V. Also $dE/dT = \Delta S/2F = -0.23$ mV/K.

4. **Practical note.** Real cells often deliver *more* power when hotter: faster electrode kinetics and lower ohmic and activation losses, which is why SOFC and MCFC cells run at 600–1000 °C. That is a rate effect. The thermodynamic maximum still falls with temperature. A fuel cell is not a heat engine, so the Carnot argument ("higher T, higher efficiency") does not apply.`,
          answer: String.raw`False: η_ideal = ΔG/ΔH = 1 − TΔS/ΔH with ΔS < 0 (−44.4 J/mol K for H₂O(g)), so η falls with T (0.945 at 25 °C → 0.939 at 60 °C; E 1.184 → 1.176 V). Higher T only reduces kinetic/ohmic losses (rate effect); fuel cells are not Carnot-limited.` },
        { id: "2021-22-Q5v", label: "(v)", marks: "6",
          topic: "reaction-equilibria", sub: "Degrees of freedom for NiO(s) + H₂(g) → Ni(s) + H₂O(l)",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q5vii"],
          text: String.raw`Consider this reaction: NiO(s) + H₂(g) → Ni(s) + H₂O(l). How many degrees of freedom available for this case (provide explanation)?

a) 0 b) 1 c) 2 d) 3`,
          solution: String.raw`**Answer: (b) 1.**

1. **Phase rule for reacting systems:** F = 2 − π + N − r − s, with N species, π phases, r independent reactions and s special constraints.

2. **Phases:** NiO(s), Ni(s) and H₂O(l) are separate pure condensed phases. H₂(g) is the gas phase, and some water vapour is present in it in equilibrium with the liquid. So π = 4: two solids, one liquid, one gas.

3. **Species:** NiO, H₂, Ni, H₂O, so N = 4. There is one independent reaction (r = 1) and no special constraints (s = 0).
$$F = 2 - 4 + 4 - 1 - 0 = 1$$

4. **Meaning:** fixing one variable fixes the intensive state. Choose T: then $P_{sat,H_2O}(T)$ is fixed, the equilibrium constant $K = \hat f_{H_2O}/\hat f_{H_2} \approx y_{H_2O}/y_{H_2}$ fixes the gas composition, and with $y_{H_2O}P = P_{sat}$ the total P is fixed too. This is the same count as the decomposition $\mathrm{CaCO_3(s) \to CaO(s) + CO_2(g)}$ (F = 1).

   If water vapour is not counted separately, the result is the same, because it is the same species H₂O.`,
          answer: String.raw`(b) 1: N = 4 species, π = 4 phases (NiO(s), Ni(s), H₂O(l), gas H₂ + H₂O vapour), r = 1 ⇒ F = 2 − 4 + 4 − 1 = 1 (fix T and P, y are fixed).` },
        { id: "2021-22-Q5vi", label: "(vi)", marks: "6",
          topic: "phase-equilibria-topics", sub: "Solid–vapour equilibrium: which species is insoluble in the solid",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q5viii"],
          text: String.raw`In solid/vapor equilibrium, there would be a binary vapor phase containing species 1 and species 2. Among these two-

a) species 1 is insoluble in the solid
b) species 2 is insoluble in the solid
c) both of them are insoluble in the solid
d) both of them are soluble in the solid

Discuss you answer with an example.`,
          solution: String.raw`**Answer: (b) species 2 is insoluble in the solid** (with the usual SVNA numbering).

1. **The SVE problem** (SVNA §14.7, Kirtania slides): a pure **solid 1** (the solute) is in equilibrium with a binary **vapour** of species 1 and a "solvent" gas 2. Species 2 does not dissolve in the solid, so the solid phase is pure 1.

2. Because species 2 is absent from the solid, **only species 1** has an equilibrium equation:
$$f_1^s = \hat f_1^v \;\Rightarrow\; y_1 = \frac{P_1^{sat}}{P}\cdot\frac{\phi_1^{sat}}{\hat\phi_1}\exp\frac{V_1^s(P - P_1^{sat})}{RT}$$
   There is no equation for species 2; it simply fills the rest of the vapour ($y_2 = 1 - y_1$).

3. **Example:** naphthalene (1) in supercritical CO₂ (2), or in ethylene, at 35 °C and up to 300 bar. CO₂ does not enter the solid naphthalene crystal, but naphthalene sublimes into the compressed gas. Its solubility $y_1$ rises by orders of magnitude at high pressure because $\hat\phi_1 \ll 1$. This is the basis of **supercritical-fluid extraction** (caffeine from coffee with CO₂).`,
          answer: String.raw`(b) Species 2 (the gas "solvent") is insoluble in the solid; the solid is pure 1, so only f₁ˢ = f̂₁ᵛ applies (y₁ = (P₁ˢᵃᵗ/P)(φ₁ˢᵃᵗ/φ̂₁)exp[V₁ˢ(P − P₁ˢᵃᵗ)/RT]). Example: naphthalene in supercritical CO₂ (SCF extraction).` }
      ] },
    { id: "2021-22-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q6a", label: "(a)", marks: "12+5=17",
          topic: "refrigeration", sub: "Claude liquefaction process: principle and fraction liquefied",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Describe the working principle (by deriving the expression for fraction liquefied, z) of Claude process for liquefaction with a neat sketch.`,
          solution: String.raw`![Linde and Claude liquefaction schematics: compressor, heat exchanger, throttle, separator, and in Claude an expansion engine](fig/2021-22-Q6a-sketch.svg)

### Working principle (12)
1. Gas is **compressed** (multistage, with intercooling) and cooled to near ambient by water.
2. It passes through a **countercurrent heat exchanger**, where it is cooled by the cold unliquefied gas returning from the separator.
3. **Claude's addition:** part of the high-pressure gas (fraction x of the feed) is withdrawn from the exchanger at an intermediate temperature and **expanded in an engine or turbine**. A nearly isentropic expansion with work output produces a much larger temperature drop than throttling. The cold exhaust joins the returning low-pressure stream and cools the remaining high-pressure gas further.
4. The rest of the high-pressure gas, now very cold, is **throttled** (H = constant, Joule–Thomson) into a **separator**. A fraction z of the feed leaves as liquid; the saturated vapour returns through the exchanger, is warmed to near ambient, and is recycled to the compressor.

### Derivation of z (5)
States (SVNA §9.6 numbering):
- 4: high-pressure gas entering the cold box (compressed, cooled)
- 15: low-pressure unliquefied gas leaving the exchanger warm
- 9: saturated liquid product
- 5: gas sent to the expander
- 12: expander exhaust

Basis: 1 mol (or kg) of gas entering at 4. Control volume: the heat exchanger, throttle, separator and expander together (the cold box), adiabatic, with no kinetic or potential energy change. Streams out: z of liquid at 9 and (1 − z) of gas at 15. Work leaves through the expander: $W_{out} = x(H_5 - H_{12})$.
$$H_4 = zH_9 + (1 - z)H_{15} + x(H_5 - H_{12})$$
$$\boxed{z = x\frac{H_{12} - H_5}{H_9 - H_{15}} + \frac{H_4 - H_{15}}{H_9 - H_{15}}}$$
- Since $H_{12} < H_5$ and $H_9 < H_{15}$, the expander term is **positive**: the work removed raises the yield.
- **x = 0** gives the Linde result $z = (H_4 - H_{15})/(H_9 - H_{15})$. The Linde process is the limiting case of the Claude process.
- To evaluate z, fix the pressures, the inlet temperature, the expander efficiency and the approach temperature at the warm end. Read $H_4$, $H_9$, $H_{15}$ and $H_5$ from tables or a chart. Find $H_{12}$ from the expander efficiency, $H_5 - H_{12} = \eta(H_5 - H_{12}')$ with $S_{12}' = S_5$. An energy balance on the exchanger sections then sets x and z.`,
          answer: String.raw`Compress and cool → countercurrent HX → fraction x expanded in an engine/turbine (near-isentropic, work out) to give extra cooling → remainder throttled into separator, liquid z drawn off, cold vapour recycled through HX. Energy balance on the cold box: H₄ = zH₉ + (1 − z)H₁₅ + x(H₅ − H₁₂) ⇒ z = x(H₁₂ − H₅)/(H₉ − H₁₅) + (H₄ − H₁₅)/(H₉ − H₁₅); x = 0 gives Linde.` },
        { id: "2021-22-Q6b", label: "(b)", marks: "10+3=13",
          topic: "refrigeration", sub: "Absorption refrigeration: sketch, working principle, example",
          type: "sketch", syllabus: "in", repeats: ["2023-24-Q1a", "2020-21-Q6a", "2018-19-Q8c", "2017-18-Q8a", "2015-16-Q1a", "2014-15-Q4a", "2013-14-Q4b"],
          text: String.raw`Draw a neat sketch of the absorption refrigeration process and describe its working principle. State an example of an absorption refrigeration process.`,
          solution: String.raw`![Absorption refrigeration cycle: generator, condenser, expansion valve, evaporator, absorber and solution pump](fig/2021-22-Q6b-sketch.svg)

### Working principle (10)
In an absorption refrigerator the compressor is replaced by an **absorber–pump–generator** loop. Heat, rather than shaft work, lifts the refrigerant from evaporator pressure to condenser pressure.
1. **Evaporator (low P):** liquid refrigerant (NH₃) evaporates at $T_C$, taking heat $Q_C$ from the cold space.
2. **Absorber (low P):** the vapour is absorbed into a weak NH₃–water solution. The absorption is exothermic, and the heat is removed by cooling water at $T_S$.
3. **Pump:** the strong solution is pumped to high pressure. Pumping a liquid takes very little work ($\int V\,dP$ is small).
4. **Generator (high P):** heat $Q_H$ from a source at $T_H$ (steam, waste heat, flue gas, solar) boils NH₃ out of the solution. A rectifier removes the water vapour. The hot weak solution returns to the absorber through a valve, usually via a solution heat exchanger.
5. **Condenser (high P):** NH₃ condenses, rejecting heat at $T_S$.
6. **Expansion valve:** the liquid NH₃ is throttled back to evaporator pressure.

**Thermodynamic limit** (SVNA §9.4): the best performance is a Carnot engine between $T_H$ and $T_S$ driving a Carnot refrigerator between $T_C$ and $T_S$:
$$\frac{Q_H}{Q_C} = \frac{T_H}{T_H - T_S}\cdot\frac{T_S - T_C}{T_C}$$
For example, with $T_H$ = 373 K, $T_S$ = 303 K and $T_C$ = 263 K, $Q_H/Q_C$ = 0.81. Real units have $Q_C/Q_H$ ≈ 0.5–0.7.

### Examples (3)
- **Ammonia–water** absorption refrigeration in cold storage and ice plants, and gas-fired domestic refrigerators (Electrolux / Platen–Munters, which use H₂ as a pressure-equalising gas and need no pump).
- **Water–lithium bromide** absorption chillers for building air conditioning, driven by steam or waste heat (water is the refrigerant, $T_C$ > 0 °C).`,
          answer: String.raw`Absorber + pump + generator replace the compressor: refrigerant (NH₃) evaporates at T_C, is absorbed in weak solution (heat to cooling water), pumped to high P, driven out of the strong solution by heat Q_H in the generator, condensed, throttled; (Q_H/Q_C)min = [T_H/(T_H − T_S)][(T_S − T_C)/T_C]. Examples: NH₃–H₂O cold storage/Electrolux fridge; LiBr–H₂O chillers.` },
        { id: "2021-22-Q6c", label: "(c)", marks: "5",
          topic: "reaction-equilibria", sub: "Gibbs-energy minimisation versus equilibrium-constant method",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q6d"],
          text: String.raw`What are the advantages or, disadvantages of determining equilibrium composition for reactions using Gibb's free energy minimization against equilibrium constant-based calculation?`,
          solution: String.raw`| | Gibbs-energy minimisation (Lagrange multipliers) | Equilibrium-constant method |
|---|---|---|
| Set-up | One equation per **species**, $\Delta G^\circ_{f_i} + RT\ln(y_i\hat\phi_iP/P^\circ) + \sum_k\lambda_ka_{ik} = 0$, plus one atom balance per element | Choose a set of **independent reactions**, write $K_j = \prod_i(\hat f_i/f_i^\circ)^{\nu_{ij}}$ in terms of the extents $\varepsilon_j$ |
| Reactions | **Not needed**: no need to identify independent reactions or their stoichiometry | Must find the r independent reactions (phase rule / Denbigh method) |
| Data | Only $\Delta G^\circ_f$ of each species at T and the element balances | $\Delta G^\circ$ (hence K) of each reaction |
| Many species | Systematic and well suited to computers (complex gasification, combustion and refinery systems) | Becomes awkward: many coupled nonlinear equations in ε's, with sign problems for small extents |
| Phases | Naturally handles multiple phases and solids (a species absent from a phase is simply dropped) | Each phase needs its own treatment |

**Advantages of minimisation:** general and systematic; no reaction set needed; the λₖ (element potentials) are found as by-products; it is directly the criterion $(dG^t)_{T,P} = 0$.

**Disadvantages:** many unknowns (N species + w elements); it needs iterative numerical solution and good initial estimates, so it is not suited to hand calculation. It gives only the composition, with no insight into which reaction dominates. Every possible species must be listed: a missing species gives a wrong answer. For one or two reactions the K method is simpler, quicker and easier to interpret, e.g. for seeing pressure and temperature effects through ν and ΔH°.`,
          answer: String.raw`Minimisation: no need to choose independent reactions, only ΔG°f and atom balances, systematic for many species/phases, gives λₖ; but many unknowns, needs iterative numerical solution and good initial guesses and a complete species list. K-method: simple and insightful for few reactions, but requires identifying independent reactions and becomes unwieldy for complex systems.` }
      ] },
    { id: "2021-22-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q7a", label: "(a)", marks: "15",
          topic: "reaction-equilibria", sub: "Effect of temperature on the equilibrium constant: consolidated expression",
          type: "derivation", syllabus: "in", repeats: ["2023-24-Q4b", "2018-19-Q6a", "2016-17-Q8a"],
          text: String.raw`What is the effect of temperature on the equilibrium constant? Derive the consolidated expression and interpret different types of temperature effect on equilibrium constant.`,
          solution: String.raw`### Effect (summary)
K depends on T only. Its variation is governed by the **standard heat of reaction**: K increases with T for an endothermic reaction (ΔH° > 0) and decreases for an exothermic one (ΔH° < 0).

### Derivation
1. **Definition:** $\ln K = -\Delta G^\circ/RT$, with $\Delta G^\circ = \sum_i\nu_iG_i^\circ$ at the standard pressure $P^\circ$, a function of T only.

2. **Gibbs–Helmholtz relation** for each species, $d(G_i^\circ/RT)/dT = -H_i^\circ/RT^2$. Summing with the $\nu_i$:
$$\frac{d(\Delta G^\circ/RT)}{dT} = -\frac{\Delta H^\circ}{RT^2} \;\Rightarrow\; \boxed{\frac{d\ln K}{dT} = \frac{\Delta H^\circ}{RT^2}}\qquad\text{(van 't Hoff)}$$

3. **Constant ΔH° (approximate):** integrate from $T_0$ = 298.15 K:
$$\ln\frac{K}{K_0} = -\frac{\Delta H^\circ}{R}\left(\frac1T - \frac{1}{T_0}\right)$$
   so ln K is linear in 1/T.

4. **Rigorous (consolidated) form.** With $\Delta H^\circ = \Delta H_0^\circ + R\int_{T_0}^T(\Delta C_P^\circ/R)\,dT$ and $\Delta S^\circ = \Delta S_0^\circ + R\int_{T_0}^T(\Delta C_P^\circ/R)\,dT/T$, $\Delta S_0^\circ = (\Delta H_0^\circ - \Delta G_0^\circ)/T_0$ and $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$:
$$\frac{\Delta G^\circ}{RT} = \frac{\Delta G_0^\circ - \Delta H_0^\circ}{RT_0} + \frac{\Delta H_0^\circ}{RT} + \frac1T\int_{T_0}^T\frac{\Delta C_P^\circ}{R}dT - \int_{T_0}^T\frac{\Delta C_P^\circ}{R}\frac{dT}{T}$$
$$\boxed{K = K_0K_1K_2}$$
$$K_0 = \exp\frac{-\Delta G_0^\circ}{RT_0}, \qquad K_1 = \exp\left[\frac{\Delta H_0^\circ}{RT_0}\left(1 - \frac{T_0}{T}\right)\right], \qquad K_2 = \exp\left(-\frac1T\int_{T_0}^T\frac{\Delta C_P^\circ}{R}dT + \int_{T_0}^T\frac{\Delta C_P^\circ}{R}\frac{dT}{T}\right)$$
   With $\Delta C_P^\circ/R = \Delta A + \Delta B\,T + \Delta C\,T^2 + \Delta D\,T^{-2}$ the integrals are the SVNA functions IDCPH and IDCPS.

### Interpretation of the types of T-effect
- **$K_0$:** K at the reference $T_0$ from $\Delta G^\circ_f$ data. It sets the magnitude but no T-dependence.
- **$K_1$:** the dominant term. Its exponent $(\Delta H_0^\circ/RT_0)(1 - T_0/T)$ is large because $|\Delta H_0^\circ| \gg RT_0$.
  - **Exothermic** (ΔH° < 0, e.g. NH₃ and methanol synthesis, water-gas shift): K falls as T rises, so conversion falls. Kinetics needs high T, so a compromise temperature and catalyst are chosen.
  - **Endothermic** (ΔH° > 0, e.g. steam reforming, dehydrogenation, C + CO₂ → 2CO): K rises with T, so high T is favoured.
  - **ΔH° ≈ 0:** K nearly independent of T.
- **$K_2$:** a small correction (near 1) from $\Delta C_P^\circ$. It matters only over wide temperature ranges and can change the curvature of ln K against 1/T.
- On a plot of ln K against 1/T (SVNA Fig. 13.2), the lines are nearly straight with slope $-\Delta H^\circ/R$. K = 1 (ΔG° = 0) marks the temperature at which a reaction changes from unfavourable to favourable.`,
          answer: String.raw`d ln K/dT = ΔH°/RT² (van 't Hoff); consolidated: K = K₀K₁K₂ with K₀ = exp(−ΔG°₀/RT₀), K₁ = exp[(ΔH°₀/RT₀)(1 − T₀/T)] (dominant), K₂ = ΔC°_P correction (~1). Endothermic: K rises with T; exothermic: K falls; ΔH° ≈ 0: K ~ constant; ln K vs 1/T nearly linear with slope −ΔH°/R.` },
        { id: "2021-22-Q7b", label: "(b)", marks: "6+2=8",
          topic: "phase-equilibria-topics", sub: "Solid–vapour equilibrium at high pressure and the Poynting factor",
          type: "derivation", syllabus: "in", repeats: ["2022-23-Q1iv", "2018-19-Q7c"],
          text: String.raw`The general equation of Solid/Vapor eq. is: $y_1 = \dfrac{P_1^{sat}}{P}\dfrac{\phi_1^{sat}}{\hat\phi_1}\exp\left(\dfrac{V_1^s(P - P_1^{sat})}{RT}\right)$.

Simplify the equation for high pressure applications and explain the effect of pointing factor for a solid -vapor equilibrium condition.`,
          solution: String.raw`### Simplification for high pressure (6)
For the solid solute (1) at moderate to high pressure:
1. $P_1^{sat}$ of a solid is very small, so its saturated vapour is ideal: $\phi_1^{sat} = 1$.
2. The solid is incompressible and $P \gg P_1^{sat}$, so $P - P_1^{sat} \approx P$.
$$\boxed{y_1 = \frac{P_1^{sat}}{P}\,\frac{1}{\hat\phi_1}\exp\frac{V_1^sP}{RT} = \frac{P_1^{sat}}{P}F_1, \qquad F_1 \equiv \frac{1}{\hat\phi_1}\exp\frac{V_1^sP}{RT}}$$
   $F_1$ is the **enhancement factor** ($F_1 \to 1$ at low P, giving the ideal solubility $y_1^{id} = P_1^{sat}/P$). $\hat\phi_1$ in the compressed gas comes from an EOS (SRK, PR) with the mixing rules.

### Effect of the Poynting factor (2)
$\exp(V_1^sP/RT)$ always **increases** the solubility, but only modestly. For naphthalene ($V^s$ ≈ 125 cm³/mol) at 35 °C it is about 1.6 at 100 bar and 4 at 300 bar. The much larger effect, factors of $10^3$–$10^4$ near the solvent's critical point, comes from $1/\hat\phi_1$, because $\hat\phi_1 \ll 1$ for a heavy solute in a dense supercritical gas. So $y_1$ first falls as $P_1^{sat}/P$, then rises steeply near the critical pressure of the solvent (supercritical-fluid extraction). The Poynting factor alone cannot explain this rise.`,
          answer: String.raw`High P: φ₁ˢᵃᵗ ≈ 1, P − P₁ˢᵃᵗ ≈ P ⇒ y₁ = (P₁ˢᵃᵗ/P)·(1/φ̂₁)exp(V₁ˢP/RT) = (P₁ˢᵃᵗ/P)F₁ (enhancement factor). Poynting factor raises solubility modestly (~1.6 at 100 bar for naphthalene); the large enhancement comes from φ̂₁ ≪ 1 in the dense gas.` },
        { id: "2021-22-Q7c", label: "(c)", marks: "12",
          topic: "reaction-equilibria", sub: "Three simultaneous reactions (H₂O, CO, CO₂ formation): K₁–K₃ in terms of extents",
          type: "derivation", syllabus: "in", repeats: ["2023-24-Q1c"],
          text: String.raw`Consider the following set of reactions taking place at once and have reached equilibrium:

$$H_2 + \tfrac12O_2 \leftrightarrow H_2O \qquad (1)$$
$$C + \tfrac12O_2 \leftrightarrow CO \qquad (2)$$
$$C + O_2 \leftrightarrow CO_2 \qquad (3)$$

Initially, there were 1 molecular H₂O, 0.5 mol O₂ and 1.68 mol N₂ present in the system. Derive the expressions for the equilibrium constants ($K_1$, $K_2$ and $K_3$) of reactions assuming $\varepsilon_1$, $\varepsilon_2$, $\varepsilon_3$ as the extent of reactions, respectively.`,
          solution: String.raw`**Given:** reactions (1) H₂ + ½O₂ ⇌ H₂O, (2) C + ½O₂ ⇌ CO, (3) C + O₂ ⇌ CO₂; initial 1 mol H₂O, 0.5 mol O₂, 1.68 mol N₂ (inert), and carbon present in excess.

**Assumptions:** carbon is a pure solid (graphite), so its activity is 1 and it does not enter the gas mole fractions. The gas phase is ideal at pressure P, with $P^\circ$ = 1 bar. Extents $\varepsilon_1, \varepsilon_2, \varepsilon_3$. Reaction 1 runs backwards (H₂O decomposes), so $\varepsilon_1 < 0$.

1. **Gas-phase amounts** ($n_i = n_{i0} + \sum_j\nu_{ij}\varepsilon_j$):

| Species | $n_i$ |
|---|---|
| H₂ | $-\varepsilon_1$ |
| O₂ | $0.5 - \tfrac12\varepsilon_1 - \tfrac12\varepsilon_2 - \varepsilon_3$ |
| H₂O | $1 + \varepsilon_1$ |
| CO | $\varepsilon_2$ |
| CO₂ | $\varepsilon_3$ |
| N₂ | 1.68 |
| **Total** | $n = 3.18 - \tfrac12\varepsilon_1 + \tfrac12\varepsilon_2$ |

   Gas-phase $\nu_j$: reaction 1: 1 − 1 − ½ = −½; reaction 2: 1 − ½ = +½ (C is solid); reaction 3: 1 − 1 = 0.

2. **Equilibrium relations.** For ideal gases and a pure solid, $\prod_i(y_iP/P^\circ)^{\nu_i} = K$, with C omitted (activity 1). Writing $y_i = n_i/n$:
$$K_1 = \frac{y_{H_2O}}{y_{H_2}\,y_{O_2}^{1/2}}\left(\frac{P}{P^\circ}\right)^{-1/2} = \frac{(1 + \varepsilon_1)\,(3.18 - \tfrac12\varepsilon_1 + \tfrac12\varepsilon_2)^{1/2}}{(-\varepsilon_1)\,(0.5 - \tfrac12\varepsilon_1 - \tfrac12\varepsilon_2 - \varepsilon_3)^{1/2}}\left(\frac{P}{P^\circ}\right)^{-1/2}$$
$$K_2 = \frac{y_{CO}}{y_{O_2}^{1/2}}\left(\frac{P}{P^\circ}\right)^{1/2} = \frac{\varepsilon_2}{(0.5 - \tfrac12\varepsilon_1 - \tfrac12\varepsilon_2 - \varepsilon_3)^{1/2}\,(3.18 - \tfrac12\varepsilon_1 + \tfrac12\varepsilon_2)^{1/2}}\left(\frac{P}{P^\circ}\right)^{1/2}$$
$$K_3 = \frac{y_{CO_2}}{y_{O_2}} = \frac{\varepsilon_3}{0.5 - \tfrac12\varepsilon_1 - \tfrac12\varepsilon_2 - \varepsilon_3}$$

3. **Use.** $K_j = \exp(-\Delta G_j^\circ/RT)$ with $\Delta G_1^\circ = \Delta G^\circ_{f,H_2O}$, $\Delta G_2^\circ = \Delta G^\circ_{f,CO}$ and $\Delta G_3^\circ = \Delta G^\circ_{f,CO_2}$ (elements have $\Delta G_f^\circ$ = 0). The three equations are solved simultaneously for $\varepsilon_1, \varepsilon_2, \varepsilon_3$.
   At gasifier temperatures all three K's are huge, so O₂ is almost completely consumed: $y_{O_2} \to 0$. It is then better to eliminate O₂ by combining the reactions ($\mathrm{C + H_2O \rightleftharpoons CO + H_2}$, $K_a = K_2/K_1$; $\mathrm{C + CO_2 \rightleftharpoons 2CO}$, $K_b = K_2^2/K_3$), as in SVNA Example 13.13.`,
          answer: String.raw`n: H₂ = −ε₁, O₂ = 0.5 − ½ε₁ − ½ε₂ − ε₃, H₂O = 1 + ε₁, CO = ε₂, CO₂ = ε₃, N₂ = 1.68, n = 3.18 − ½ε₁ + ½ε₂ (C(s) activity 1). K₁ = y_H₂O/(y_H₂ y_O₂^½)(P/P°)^−½, K₂ = y_CO/y_O₂^½ (P/P°)^½, K₃ = y_CO₂/y_O₂, each written with yᵢ = nᵢ/n as above.` }
      ] },
    { id: "2021-22-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q8a", label: "(a)", marks: "14",
          topic: "phase-equilibria-topics", sub: "Three stability criteria for a binary liquid in VLE; ideal-gas simplification and azeotrope",
          type: "derivation", syllabus: "in", repeats: ["2020-21-Q7b", "2018-19-Q7a"],
          text: String.raw`Derive the three criteria of stability for as system of binary liquid mixture in equilibrium with vapor phase. If the pressure is low enough for the system to consider as ideal gas, make necessary simplifications and interpret what happens if the mixture reaches azeotrope.`,
          solution: String.raw`**Assumptions:** binary liquid at constant T and P in equilibrium with its vapour.

1. **Stability of the liquid.** From $(dG^t)_{T,P} \le 0$, a homogeneous liquid is stable only if its Gibbs energy of mixing is convex in composition:
$$\frac{d^2(\Delta G/RT)}{dx_1^2} > 0, \qquad \frac{\Delta G}{RT} = x_1\ln x_1 + x_2\ln x_2 + \frac{G^E}{RT}$$

2. **Criterion 1 (activity coefficient).** With $d^2(G^E/RT)/dx_1^2 = (1/x_2)\,d\ln\gamma_1/dx_1$ (Gibbs–Duhem):
$$\frac{1}{x_1x_2} + \frac{1}{x_2}\frac{d\ln\gamma_1}{dx_1} > 0 \;\Rightarrow\; \boxed{\frac{d\ln\gamma_1}{dx_1} > -\frac{1}{x_1}}$$

3. **Criterion 2 (fugacity).** $\hat f_1 = x_1\gamma_1f_1$, so $\dfrac{d\ln\hat f_1}{dx_1} = \dfrac{1}{x_1} + \dfrac{d\ln\gamma_1}{dx_1} > 0 \Rightarrow \boxed{\dfrac{d\hat f_1}{dx_1} > 0}$ (and $d\hat f_2/dx_1 < 0$).

4. **Criterion 3 (chemical potential).** $\mu_1 = \Gamma_1(T) + RT\ln\hat f_1$, so $\boxed{d\mu_1/dx_1 > 0}$.

5. **Ideal-gas vapour (low P).** $\hat f_i^l = \hat f_i^v = y_iP$. Then
$$\frac{d\ln\hat f_1}{dx_1} = \frac{1}{y_1}\frac{dy_1}{dx_1} + \frac{d\ln P}{dx_1} > 0, \qquad \frac{d\ln\hat f_2}{dx_1} = -\frac{1}{y_2}\frac{dy_1}{dx_1} + \frac{d\ln P}{dx_1} < 0$$
   Subtracting the second from the first:
$$\frac{1}{y_1y_2}\frac{dy_1}{dx_1} > 0 \;\Rightarrow\; \boxed{\frac{dy_1}{dx_1} > 0}$$
   Gibbs–Duhem for the liquid, $x_1\,d\ln\hat f_1 + x_2\,d\ln\hat f_2 = 0$ at constant T (pressure effect on the liquid neglected), gives
$$\frac{1}{P}\frac{dP}{dx_1} = \frac{y_1 - x_1}{y_1y_2}\,\frac{dy_1}{dx_1}$$

6. **At an azeotrope** ($y_1 = x_1$): $dP/dx_1 = 0$, so the P–x curve (and the P–y curve) has an **extremum**. It is a maximum for positive deviations and a minimum for negative ones, and the bubble and dew curves are tangent there. Since $dy_1/dx_1 > 0$ everywhere, the y–x curve crosses the diagonal there and nowhere else. P rises with $x_1$ where $y_1 > x_1$ and falls where $y_1 < x_1$. A model giving $dy_1/dx_1 < 0$ (or an S-shaped P–x curve) violates stability: the liquid would split into two phases (VLLE).`,
          answer: String.raw`Stability: d²(ΔG/RT)/dx₁² > 0 ⇒ (1) d ln γ₁/dx₁ > −1/x₁, (2) df̂₁/dx₁ > 0, (3) dμ₁/dx₁ > 0. Ideal-gas vapour (f̂ᵢ = yᵢP): dy₁/dx₁ > 0 and (1/P)dP/dx₁ = (y₁ − x₁)/(y₁y₂)·dy₁/dx₁; at an azeotrope y₁ = x₁ ⇒ dP/dx₁ = 0 (P extremum, max for positive, min for negative deviations).` },
        { id: "2021-22-Q8b", label: "(b)", marks: "6+2=8",
          topic: "reaction-equilibria", sub: "Gas-phase reaction equilibrium under ideal conditions: Πyᵢ^νᵢ = (P/P°)^−ν K",
          type: "derivation", syllabus: "in", repeats: ["2013-14-Q2b"],
          text: String.raw`Derive the equation for gas phase reactions understand ideal conditions $\left(\prod_i(y_i)^{\nu_i} = \left(\dfrac{P}{P_0}\right)^{-\nu}K\right)$. State all the necessary assumptions during thee derivation.`,
          solution: String.raw`1. **Equilibrium criterion.** For a single reaction at constant T and P, minimising $G^t$ with $dn_i = \nu_i\,d\varepsilon$ gives $\sum_i\nu_i\mu_i = 0$.

2. **Chemical potential** relative to the standard state (pure ideal gas at $P^\circ$ and T): $\mu_i = G_i^\circ + RT\ln(\hat f_i/f_i^\circ)$ with $f_i^\circ = P^\circ$. Substituting:
$$\sum_i\nu_iG_i^\circ + RT\sum_i\nu_i\ln\frac{\hat f_i}{P^\circ} = 0 \;\Rightarrow\; \prod_i\left(\frac{\hat f_i}{P^\circ}\right)^{\nu_i} = \exp\frac{-\Delta G^\circ}{RT} \equiv K$$

3. **Gas phase:** $\hat f_i = y_i\hat\phi_iP$, so
$$\prod_i(y_i\hat\phi_i)^{\nu_i} = \left(\frac{P}{P^\circ}\right)^{-\nu}K, \qquad \nu = \sum_i\nu_i$$

4. **Ideal conditions:** the mixture is an ideal gas, so $\hat\phi_i$ = 1:
$$\boxed{\prod_i y_i^{\nu_i} = \left(\frac{P}{P^\circ}\right)^{-\nu}K}$$

**Assumptions:**
1. Closed system at uniform, constant T and P; a single reaction (or each independent reaction separately).
2. Standard state for each species: the pure ideal gas at $P^\circ$ (1 bar) and the system T. K is therefore a function of T only.
3. The equilibrium mixture is an **ideal gas**: low pressure or high temperature, $\hat\phi_i = 1$ (no Lewis–Randall or virial correction).
4. All species are in the gas phase (no condensed phases).
5. Equilibrium is reached ($dG^t = 0$): kinetics are not considered.`,
          answer: String.raw`Σνᵢμᵢ = 0 with μᵢ = Gᵢ° + RT ln(f̂ᵢ/P°) ⇒ Π(f̂ᵢ/P°)^νᵢ = K = exp(−ΔG°/RT); f̂ᵢ = yᵢφ̂ᵢP ⇒ Π(yᵢφ̂ᵢ)^νᵢ = (P/P°)^−ν K; ideal gas φ̂ᵢ = 1 ⇒ Πyᵢ^νᵢ = (P/P°)^−ν K. Assumptions: const T, P; standard state ideal gas at P° (K = f(T)); ideal-gas mixture; all species gaseous; equilibrium attained.` },
        { id: "2021-22-Q8c", label: "(c)", marks: "13",
          topic: "refrigeration", sub: "Heat pump with 0.75 kW/K house loss and 1.5 kW motor: limiting outside temperatures",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A heat pump is used to heat a house in the winter and to cool it in the summer. During the winter, the outside air serves as a low-temperature heat source; during the summer, it acts as a high-temperature heat sink. The heat-transfer rate through the walls and roof of the house is 0.75 KW for each kelvin of temperature difference between the inside and outside of the house, summer and winter. The heat-pump motor is rated at 1.5 KW. Determine the minimum outside temperature for which the house can be maintained at 293.15 K (20°C) during the winter and the maximum outside temperature for which the house can be maintained at 298.15 K (25°C) during the summer.`,
          solution: String.raw`**Given:** house loss 0.75 kW per K of (inside − outside) temperature difference; motor power W = 1.5 kW; house kept at 293.15 K in winter and 298.15 K in summer.

**Find:** the minimum outside temperature in winter; the maximum outside temperature in summer.

**Assumptions:** the heat pump works as a **Carnot** cycle between the house and the outside air (the limiting case; heat-exchange temperature differences neglected). Steady state: the heat pumped equals the heat leak.

1. **Winter (heating).** Heat delivered to the house: $|Q_H| = 0.75(T_H - T_C)$ with $T_H$ = 293.15 K and $T_C$ = outside air. Carnot: $W = |Q_H|(T_H - T_C)/T_H$, so
$$1.5 = \frac{0.75(T_H - T_C)^2}{293.15} \;\Rightarrow\; (T_H - T_C)^2 = 586.3 \;\Rightarrow\; T_H - T_C = 24.21\ \mathrm K$$
$$\boxed{T_{C,min} = 293.15 - 24.21 = 268.94\ \mathrm K\ (-4.2\ °\mathrm C)}$$
   Check: $Q_H$ = 0.75(24.21) = 18.16 kW and W = 18.16(24.21/293.15) = 1.50 kW ✓.

2. **Summer (cooling).** Heat removed from the house: $|Q_C| = 0.75(T_H - T_C)$ with $T_C$ = 298.15 K and $T_H$ = outside air. Carnot: $W = |Q_C|(T_H - T_C)/T_C$, so
$$1.5 = \frac{0.75(T_H - T_C)^2}{298.15} \;\Rightarrow\; (T_H - T_C)^2 = 596.3 \;\Rightarrow\; T_H - T_C = 24.42\ \mathrm K$$
$$\boxed{T_{H,max} = 298.15 + 24.42 = 322.57\ \mathrm K\ (49.4\ °\mathrm C)}$$
   Check: $Q_C$ = 18.31 kW, ω = 298.15/24.42 = 12.2, W = 1.50 kW ✓.

**Result:** the house can be held at 20 °C down to an outside temperature of 268.9 K (−4.2 °C) in winter, and at 25 °C up to 322.6 K (49.4 °C) in summer. A real heat pump, with finite ΔT in its exchangers and an efficiency below Carnot, would manage a narrower range.`,
          answer: String.raw`Carnot, W = 0.75ΔT²/T_house = 1.5 kW ⇒ winter ΔT = √(2 × 293.15) = 24.21 K ⇒ T_min = 268.94 K (−4.2 °C); summer ΔT = √(2 × 298.15) = 24.42 K ⇒ T_max = 322.57 K (49.4 °C).` }
      ] }
  ]
});
