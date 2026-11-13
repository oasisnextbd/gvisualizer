QB.paper({
  year: "2020-21", date: "15/10/2022", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engineering Examination 2020-2021, CHE 307 (Chemical Engineering Thermodynamics II), 3 hours, 210 marks. Section A: four questions, answer any THREE; assume reasonable values for different parameters if necessary; symbols have their usual meanings; data booklet is to be supplied. Section B: four questions; Question 5 is compulsory (45 marks); answer any TWO of the remaining three. Use separate scripts for each section. Attached data (pp. 6–9): saturated water – temperature table; molar mass, gas constant and critical-point properties; Henry's constant H (bar) for selected gases in water (Mills, Table A.21); Fig. 12.14 heats of solution of HCl(g) and LiCl(s) at 25 °C; table of cubic-EOS parameters (vdW, RK, SRK, PR).`,
  questions: [
    { id: "2020-21-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q1a", label: "(a)", marks: "5+3=8",
          topic: "vle-intro", sub: "Mole fraction of water vapour above a lake at 15 °C and 92 kPa",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine the mole fraction of the water vapor at the surface of a lake whose temperature is 15°C, and compare it to the mole fraction of water in the lake. Take the atmospheric pressure at lake level to be 92 kPa.

*(Figure for Question no. 1(a): lake at 15 °C under air at 92 kPa; "Saturated air, $y_{H_2O,\,air\ side}$ = 0.0185" just above the surface and "$y_{H_2O,\,liquid\ side}$ ≅ 1.0" in the lake.)*`,
          solution: String.raw`**Given:** lake at 15 °C, P = 92 kPa.

**Find:** $y_{H_2O}$ in the air at the surface, compared with $x_{H_2O}$ in the lake.

**Assumptions:** the air at the water surface is saturated (phase equilibrium at the interface); air and vapour are ideal gases; dissolved air is negligible, so the lake is essentially pure water (Raoult's law with $x_w \approx 1$).

1. **Vapour pressure** (attached saturated-water table, 15 °C): $P_{sat}$ = 1.7057 kPa.

2. **Raoult's law at the interface:** $y_wP = x_wP_{sat}$ with $x_w$ ≈ 1:
$$y_{H_2O,\,air\ side} = \frac{P_v}{P} = \frac{1.7057}{92} = 0.0185$$

3. **Liquid side:** air is only sparingly soluble (Henry's constant for air at 290 K is 62 000 bar, so $x_{air} \approx 0.9815 \times 0.92/62\,000 \approx 1.5\times10^{-5}$). Hence $x_{H_2O,\,liquid\ side}$ ≈ 1.0.

4. **Comparison.** Water makes up 100% of the liquid but only 1.85% of the gas at the interface. Mole fractions are **not** continuous across a phase boundary. What is continuous at equilibrium is the fugacity (chemical potential) of water: $f_w = y_wP = x_wP_{sat}$ = 1.71 kPa on both sides.

**Result:** $y_{H_2O}$ = 0.0185 in the air versus about 1.0 in the lake.`,
          answer: String.raw`y_H₂O = Pₛₐₜ(15 °C)/P = 1.7057/92 = 0.0185 at the air side, whereas x_H₂O ≈ 1.0 in the lake (dissolved air ~10⁻⁵); mole fraction jumps across the interface while the fugacity (1.71 kPa) is continuous.` },
        { id: "2020-21-Q1b", label: "(b)", marks: "5+10=15",
          topic: "vle-intro", sub: "Carbonated drink at 27 °C, 115 kPa: water vapour in gas and dissolved CO₂ (Henry)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Consider a carbonated drink in a bottle at 27°C and 115 kPa. Assuming the gas space above the liquid consists of a saturated mixture of CO₂ and water vapor and treating the drink as water, determine –

(i) The mole fraction of the water vapor in the CO₂ gas and

(ii) The mass of dissolved CO₂ in a 300-ml drink.`,
          solution: String.raw`**Given:** T = 27 °C (300.15 K), P = 115 kPa, 300 mL drink.

**Find:** (i) $y_{H_2O}$ in the gas; (ii) mass of dissolved CO₂.

**Assumptions:** the gas space is a saturated ideal-gas mixture of CO₂ and water vapour; the liquid is essentially pure water (Raoult's law for water with $x_w$ ≈ 1); Henry's law for CO₂ with $\mathcal H$ at 300 K = **1710 bar** (attached table, Mills); density of the drink 1 kg/L, so 300 mL ≈ 0.300 kg of water.

1. **(i) Water vapour.** From the attached table, $P_{sat}$ = 3.1698 kPa (25 °C) and 4.2469 kPa (30 °C). Interpolating to 27 °C:
$$P_{sat} = 3.1698 + 0.4(4.2469 - 3.1698) = 3.60\ \mathrm{kPa}$$
$$y_{H_2O} = \frac{P_v}{P} = \frac{3.60}{115} = \mathbf{0.0313}$$

2. **(ii) Partial pressure of CO₂:**
$$P_{CO_2} = P - P_v = 115 - 3.60 = 111.4\ \mathrm{kPa} = 1.114\ \mathrm{bar}$$

3. **Henry's law** for the liquid-side mole fraction:
$$x_{CO_2} = \frac{P_{CO_2}}{\mathcal H} = \frac{1.114}{1710} = 6.51\times10^{-4}$$

4. **Moles and mass dissolved.** Water: $N_w = 300/18.015$ = 16.65 mol. Then
$$N_{CO_2} = \frac{x_{CO_2}}{1 - x_{CO_2}}N_w = \frac{6.51\times10^{-4}}{0.99935}(16.65) = 0.01086\ \mathrm{mol}$$
$$m_{CO_2} = 0.01086 \times 44.01 = 0.478\ \mathrm g$$

**Result:** (i) $y_{H_2O}$ = 0.0313; (ii) about 0.48 g CO₂ is dissolved in 300 mL (cooling the drink raises the solubility, since $\mathcal H$ falls with T).`,
          answer: String.raw`(i) Pₛₐₜ(27 °C) = 3.60 kPa ⇒ y_H₂O = 0.0313. (ii) P_CO₂ = 111.4 kPa, x_CO₂ = 1.114/1710 = 6.51×10⁻⁴ ⇒ N_CO₂ = 0.0109 mol ⇒ m ≈ 0.48 g.` },
        { id: "2020-21-Q1c", label: "(c)", marks: "3×4=12",
          topic: "vle-intro", sub: "Short questions on phase equilibrium: vapour escape, NH₃–H₂O, solubility, Henry's law",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`The following questions are based on phase Equilibrium.

(i) Consider a tank that contains a saturated liquid-vapor mixture of water in equilibrium. Some vapor is now allowed to escape the tank at constant temperature and pressure. Will this disturb the phase equilibrium and cause some of the liquid to evaporate?

(ii) Consider a two-phase mixture of ammonia and water in equilibrium. Can this mixture exist in two phases at the same temperature but at a different pressure?

(iii) Using the solubility data of a solid in a specified liquid, explain how you would determine the mole fraction of the solid in the liquid at the interface at a specified temperature.

(iv) Using the Henry's constant for a gas dissolved in a liquid, explain how you would determine the mole fraction of the gas dissolved in the liquid at the interface at a specified temperature.`,
          solution: String.raw`### (i) Vapour escaping at constant T and P
**The equilibrium is not disturbed, but some liquid evaporates.** For a pure substance the criterion is $g_f = g_g$, and it depends only on T (with $P = P_{sat}(T)$), not on the amounts of each phase. While T and P are held constant, the remaining liquid and vapour stay saturated and in equilibrium. As vapour leaves, the pressure tends to fall below $P_{sat}$. To hold P, liquid evaporates (absorbing $h_{fg}$, which must be supplied as heat) and replaces the lost vapour. Only the quality changes, not the state of each phase.

### (ii) NH₃–H₂O at the same T but a different P
**Yes.** Phase rule: F = 2 − π + N = 2 − 2 + 2 = **2**. With T fixed, one more variable (P) can still be chosen freely. The phase compositions simply adjust: at higher P the liquid holds more ammonia. Contrast pure water, where F = 1 and fixing T fixes P.

### (iii) Mole fraction of a dissolved solid from solubility data
Solubility tables give the **maximum mass of solid dissolved per 100 kg of solvent** at T. The liquid at the interface is saturated, so
$$x_{solid} = \frac{m_s/M_s}{m_s/M_s + m_w/M_w}$$
Example (Çengel Table 16-1): NaCl at 310 K, 36.5 kg per 100 kg water, gives mass fraction 36.5/136.5 = 0.267 and
$$x_{NaCl} = \frac{36.5/58.44}{36.5/58.44 + 100/18.015} = \frac{0.625}{0.625 + 5.551} = 0.101$$
On the solid side the mole fraction of NaCl is 1.

### (iv) Mole fraction of a dissolved gas from Henry's constant
For a sparingly soluble gas (dilute solution, P below about 5 atm), Henry's law at the interface is
$$x_{i,\,liquid\ side} = \frac{P_{i,\,gas\ side}}{\mathcal H_i(T)}, \qquad P_{i,\,gas\ side} = y_iP$$
Steps: (1) find the partial pressure of the gas on the gas side, e.g. $y_iP$, or $P - P_{sat,w}$ if the gas is saturated with water vapour; (2) read $\mathcal H_i$ at T from the table; (3) divide. Because $\mathcal H$ rises with T, solubility falls as T rises, and it is proportional to the partial pressure. Q1(b) is an example: $x_{CO_2}$ = 1.114/1710.`,
          answer: String.raw`(i) No — at fixed T, P the phases remain saturated (g_f = g_g); liquid evaporates to replace the escaped vapour. (ii) Yes — binary two-phase system has F = 2, so P can change at fixed T (compositions shift). (iii) Saturated solution: x = (mₛ/Mₛ)/(mₛ/Mₛ + m_w/M_w) from solubility per 100 kg solvent (NaCl at 310 K: x = 0.101). (iv) x = P_i,gas/𝓗(T), with the gas partial pressure from yᵢP.` }
      ] },
    { id: "2020-21-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q2a", label: "(a)", marks: "25",
          topic: "solution-theory", sub: "Fugacity of chloroform at 200 °C, 0–40 bar: generalized virial plus Poynting",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Prepare plots of f vs. P for chloroform at 200°C for the pressure range from 0 to 40 bar.

$$V^{sat} = V_cZ_c(1 - T_r)^{0.2857} \qquad \phi = \exp\left[\frac{P_r}{T_r}(B^0 + \omega B^1)\right]$$

$$B^0 = 0.083 - 0.422/T_r^{1.6} \qquad B^1 = 0.139 - 0.172/T_r^{4.2}$$`,
          solution: String.raw`**Given:** chloroform, T = 473.15 K, P = 0–40 bar. Attached critical-property table: $T_c$ = 536.6 K, $P_c$ = 5.47 MPa = 54.7 bar, $V_c$ = 0.2403 m³/kmol = 240.3 cm³/mol.

**Find:** f(P) from 0 to 40 bar, as a table and a plot.

**Assumptions:**
- ω = 0.222 (SVNA App. B; not in the attached table).
- $Z_c = P_cV_c/RT_c = 54.7(240.3)/[83.14(536.6)] = 0.2946$.
- Vapour pressure at 200 °C: $P^{sat}$ = 22.27 bar (SVNA problem value). The Lee–Kesler correlation gives 22.5 bar, which agrees; the Antoine constants are valid only up to 84 °C.
- The printed liquid-volume formula is the **Rackett equation**, $V^{sat} = V_cZ_c^{(1 - T_r)^{0.2857}}$.
- The liquid is incompressible (Poynting correction).

1. **Reduced temperature and virial coefficients:**
$$T_r = \frac{473.15}{536.6} = 0.8818, \quad B^0 = 0.083 - \frac{0.422}{0.8818^{1.6}} = -0.4331, \quad B^1 = 0.139 - \frac{0.172}{0.8818^{4.2}} = -0.1528$$
$$B^0 + \omega B^1 = -0.4331 + 0.222(-0.1528) = -0.4670$$

2. **Vapour branch (0 ≤ P ≤ Pˢᵃᵗ):** f = φP with
$$\ln\phi = \frac{P_r}{T_r}(B^0 + \omega B^1) = \frac{P}{54.7(0.8818)}(-0.4670) = -0.009683\,P\ (\text{P in bar})$$

3. **Saturation point:**
$$\phi^{sat} = e^{-0.009683(22.27)} = 0.8060, \qquad f^{sat} = 0.8060 \times 22.27 = 17.95\ \mathrm{bar}$$

4. **Saturated-liquid volume (Rackett):**
$$(1 - T_r)^{0.2857} = 0.1182^{0.2857} = 0.5432, \qquad V^{sat} = 240.3(0.2946)^{0.5432} = 123.7\ \mathrm{cm^3\,mol^{-1}}$$

5. **Liquid branch (P > Pˢᵃᵗ),** with the Poynting factor:
$$f = \phi^{sat}P^{sat}\exp\frac{V^l(P - P^{sat})}{RT} = 17.95\exp\frac{123.7(P - 22.27)}{83.14(473.15)}$$
   At 40 bar the Poynting factor is $e^{0.0557}$ = 1.057.

6. **Table:**

| P / bar | phase | φ | f / bar |
|---|---|---|---|
| 0 | vapour | 1.000 | 0 |
| 5 | vapour | 0.9527 | 4.76 |
| 10 | vapour | 0.9077 | 9.08 |
| 15 | vapour | 0.8648 | 12.97 |
| 20 | vapour | 0.8239 | 16.48 |
| 22.27 | sat. | 0.8060 | 17.95 |
| 25 | liquid | 0.7242 | 18.11 |
| 30 | liquid | 0.6131 | 18.39 |
| 35 | liquid | 0.5338 | 18.68 |
| 40 | liquid | 0.4745 | 18.98 |

7. **Plot:**

![Fugacity of chloroform at 200 °C against pressure: virial vapour branch up to Pˢᵃᵗ = 22.27 bar, then the nearly flat Poynting liquid branch](fig/2020-21-Q2a-sol.svg)

8. **Interpretation.** In the vapour region f rises almost linearly but falls increasingly below the ideal-gas line f = P. At $P^{sat}$ the curve shows a sharp break in slope, because $(\partial\ln f/\partial P)_T = V/RT$ and V drops from the vapour to the liquid volume. In the liquid region f is nearly independent of P, rising only 5.7% from 22.27 to 40 bar, while φ = f/P falls steeply.

**Result:** $f^{sat}$ = 17.95 bar at 22.27 bar. f = 9.08, 16.48 and 18.98 bar at 10, 20 and 40 bar (plot above).`,
          answer: String.raw`Tᵣ = 0.8818, B⁰ + ωB¹ = −0.4670 ⇒ vapour ln φ = −0.009683P; Pˢᵃᵗ = 22.27 bar ⇒ φˢᵃᵗ = 0.806, fˢᵃᵗ = 17.95 bar; Rackett Vˡ = 123.7 cm³/mol ⇒ liquid f = 17.95 exp[Vˡ(P − Pˢᵃᵗ)/RT], 18.98 bar at 40 bar. f vs P: near-linear vapour branch, sharp break at Pˢᵃᵗ, almost flat liquid branch.` },
        { id: "2020-21-Q2b", label: "(b)", marks: "10",
          topic: "solution-theory", sub: "Partial molar mass equals molar mass; partial specific properties",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that –

(i) The 'partial molar mass' of a species in solution is equal to its molar mass.

(ii) A partial specific property of a species in solution is obtained by division of the partial molar property by the molar mass of the species.`,
          solution: String.raw`1. **(i) Partial molar mass.** The total mass of a solution is the sum of the masses of its species:
$$m^t = \sum_kn_kM_k$$
   where $M_k$ is the molar mass, a constant independent of T, P and composition. By definition of a partial molar property,
$$\bar M_i^{(mass)} \equiv \left[\frac{\partial m^t}{\partial n_i}\right]_{T,P,n_j} = \frac{\partial}{\partial n_i}\left(\sum_kn_kM_k\right) = M_i$$
   because only the term $k = i$ depends on $n_i$. **The partial molar mass of i equals its molar mass.** Summability is consistent with this: the solution's mean molar mass is $\sum_kx_kM_k$.

2. **(ii) Partial specific property.** Let M be a molar property of the solution, so the total property is $M^t = nM$. A *specific* (per unit mass) property is defined with masses $m_i$ in place of moles:
$$\tilde M_i \equiv \left[\frac{\partial M^t}{\partial m_i}\right]_{T,P,m_j}$$

3. **Change of variable.** $m_i = M_in_i$, with $M_i$ constant, so $dm_i = M_i\,dn_i$. Holding all $m_j$ constant is the same as holding all $n_j$ constant. Hence
$$\tilde M_i = \left[\frac{\partial M^t}{\partial(M_in_i)}\right]_{T,P,n_j} = \frac{1}{M_i}\left[\frac{\partial(nM)}{\partial n_i}\right]_{T,P,n_j} = \frac{\bar M_i}{M_i}$$

4. **So** a partial specific property is the partial molar property divided by the molar mass of the species. Example: the partial specific volume of ethanol in water (cm³/g) is $\bar V_{EtOH}/46.07$. The partial specific properties obey the same summability relation, $M^{(mass)} = \sum_iw_i\tilde M_i$ with mass fractions $w_i$, and the same Gibbs–Duhem relation as the molar ones.`,
          answer: String.raw`(i) mᵗ = Σnₖ Mₖ ⇒ ∂mᵗ/∂nᵢ (T, P, nⱼ) = Mᵢ. (ii) With mᵢ = Mᵢnᵢ (Mᵢ constant), ∂(nM)/∂mᵢ = (1/Mᵢ)∂(nM)/∂nᵢ ⇒ M̃ᵢ = M̄ᵢ/Mᵢ.` }
      ] },
    { id: "2020-21-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q3a", label: "(a)", marks: "12+3=15",
          topic: "solution-applications", sub: "Isothermal addition of 20 kg LiCl(s) to 125 kg of 10 wt% LiCl solution at 25 °C",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`What is the heat effect when 20 kg of LiCl(s) is added to 125 kg of an aqueous solution containing 10 wt% LiCl in an isothermal process at 25°C? You must draw the corresponding H-x diagram.`,
          solution: String.raw`**Given:** 125 kg of 10 wt% LiCl solution plus 20 kg LiCl(s), isothermal at 25 °C.

**Find:** Q; an H–x diagram.

**Assumptions:** constant P, so Q = ΔH. Heats of solution $\Delta\tilde H$ (kJ per mol LiCl, at 25 °C) from the attached Fig. 12.14 as a function of ñ = mol H₂O per mol LiCl. M(LiCl) = 42.39 and M(H₂O) = 18.015 g/mol.

1. **Material balance.**
   - Initial solution: 12.5 kg LiCl = 0.2949 kmol; 112.5 kg H₂O = 6.2448 kmol; $\tilde n_1 = 6.2448/0.2949 = 21.18$.
   - Added LiCl: 20/42.39 = 0.4718 kmol. Final: 0.7667 kmol LiCl in 6.2448 kmol H₂O, $\tilde n_2 = 8.145$. Final mass 145 kg at 32.5/145 = **22.4 wt%** LiCl.

2. **Chart readings (Fig. 12.14, LiCl(s) curve).** Move vertically from ñ on the log axis to the LiCl curve and read across:
   - $\tilde n$ = 21.18 (between 20 and 30): $\Delta\tilde H_1$ = **−34.9 kJ/mol LiCl**.
   - $\tilde n$ = 8.145 (just above the "8" division): $\Delta\tilde H_2$ = **−32.0 kJ/mol LiCl**.

3. **Path (enthalpy is a state function).** (a) Unmix the initial solution into 12.5 kg LiCl(s) and 112.5 kg H₂O at 25 °C: $\Delta H_a = -n_1\Delta\tilde H_1$. (b) Dissolve all 32.5 kg of LiCl in the water: $\Delta H_b = n_2\Delta\tilde H_2$.
$$\Delta H_a = -(294.9\ \mathrm{mol})(-34.9) = +10\,290\ \mathrm{kJ}$$
$$\Delta H_b = (766.7\ \mathrm{mol})(-32.0) = -24\,530\ \mathrm{kJ}$$

4. **Heat effect:**
$$Q = \Delta H = 10\,290 - 24\,530 = -14\,240\ \mathrm{kJ}$$

5. **H–x diagram.** References: H = 0 for H₂O(l) and LiCl(s) at 25 °C. The 25 °C solution isotherm is $H = (x/M_{LiCl})\Delta\tilde H$ in kJ per kg of solution:
   - A (10%): H = (0.10/0.04239)(−34.9) = −82.3 kJ/kg
   - F (22.4%): H = (0.2241/0.04239)(−32.0) = −169.2 kJ/kg
   - B: pure LiCl(s), H = 0 at x = 1

   Mixing A and B adiabatically would give point M on the straight line AB at x = 0.224, with $H_M$ = (125/145)(−82.3) = −70.9 kJ/kg. Holding 25 °C requires removing heat until the mixture reaches F on the isotherm:
$$Q = 145(H_F - H_M) = 145(-169.2 + 70.9) = -14\,250\ \mathrm{kJ}\ ✓$$

![H–x diagram at 25 °C for LiCl/H₂O, built from the Fig. 12.14 readings: points A, B, M and F and the heat removed](fig/2020-21-Q3a-sketch.svg)

**Result:** Q ≈ −14 240 kJ (about −14.2 MJ). Heat is released and must be removed to keep the process at 25 °C.`,
          answer: String.raw`ñ = 21.18 → 8.145; Fig. 12.14: ΔH̃ = −34.9 and −32.0 kJ/mol LiCl; Q = 766.7(−32.0) − 294.9(−34.9) ≈ −14 240 kJ (heat released; H–x: A(10%, −82.3) + B(LiCl, 0) → M(22.4%, −70.9) → F(22.4%, −169.2 kJ/kg)).` },
        { id: "2020-21-Q3b", label: "(b)", marks: "8+12=20",
          topic: "vle-intro", sub: "Ethyl ethanoate/n-heptane at 343.15 K: BUBL P at x₁ = 0.05 and azeotrope",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`For the system ethyl ethanoate(1)/n-heptane(2) at T = 343.15 K,

$$\ln\gamma_1 = 0.95x_2^2 \qquad \ln\gamma_2 = 0.95x_1^2$$

$$P_1^{sat} = 79.80\ \mathrm{kPa} \qquad P_2^{sat} = 40.50\ \mathrm{kPa}$$

Assuming the validity of Modified Raoult's law,

(i) Make a bubble point pressure (BUBL P) calculation for the given T and $x_1$ = 0.05.

(ii) What is the azeotrope composition and pressure at the T mentioned above?`,
          solution: String.raw`**Given:** A = 0.95, $P_1^{sat}$ = 79.80 kPa, $P_2^{sat}$ = 40.50 kPa, T = 343.15 K.

**Find:** (i) P and $y_1$ at $x_1$ = 0.05; (ii) $x_1^{az}$ and $P^{az}$.

**Assumptions:** modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$.

1. **(i) Activity coefficients at $x_1$ = 0.05:**
$$\gamma_1 = e^{0.95(0.95)^2} = e^{0.8574} = 2.3570, \qquad \gamma_2 = e^{0.95(0.05)^2} = e^{0.002375} = 1.0024$$

2. **(i) Bubble pressure and vapour composition:**
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat} = 0.05(2.3570)(79.80) + 0.95(1.0024)(40.50) = 9.40 + 38.57 = 47.97\ \mathrm{kPa}$$
$$y_1 = \frac{9.40}{47.97} = 0.196, \qquad y_2 = 0.804$$

3. **(ii) Existence of an azeotrope.** Relative volatility:
$$\alpha_{12} = \frac{\gamma_1P_1^{sat}}{\gamma_2P_2^{sat}}, \qquad \ln\alpha_{12} = \ln\frac{79.80}{40.50} + 0.95(x_2^2 - x_1^2) = 0.6782 + 0.95(1 - 2x_1)$$
$$\alpha_{12}(x_1 = 0) = 1.970e^{0.95} = 5.09 > 1, \qquad \alpha_{12}(x_1 = 1) = 1.970e^{-0.95} = 0.762 < 1$$
   α₁₂ passes through 1, so an azeotrope exists.

4. **(ii) Azeotrope composition** ($\alpha_{12} = 1$):
$$0.6782 + 0.95(1 - 2x_1) = 0 \;\Rightarrow\; x_1^{az} = \frac12\left(1 + \frac{0.6782}{0.95}\right) = 0.857$$

5. **(ii) Azeotrope pressure:**
$$\gamma_1^{az} = e^{0.95(0.143)^2} = 1.0196, \qquad P^{az} = \gamma_1^{az}P_1^{sat} = 1.0196(79.80) = 81.37\ \mathrm{kPa}$$
   Check: $\gamma_2^{az}P_2^{sat} = e^{0.95(0.857)^2}(40.50) = 2.009(40.50) = 81.37$ kPa ✓. This is a **maximum-pressure (positive-deviation) azeotrope**, slightly above $P_1^{sat}$, with $x_1 = y_1$ = 0.857.

**Result:** (i) P = 47.97 kPa, $y_1$ = 0.196; (ii) $x_1^{az} = y_1^{az}$ = 0.857, $P^{az}$ = 81.37 kPa.`,
          answer: String.raw`(i) γ₁ = 2.357, γ₂ = 1.002 ⇒ P = 47.97 kPa, y₁ = 0.196. (ii) α₁₂ falls from 5.09 to 0.762 ⇒ azeotrope at x₁ = y₁ = 0.857, P = 81.37 kPa (maximum-pressure azeotrope).` }
      ] },
    { id: "2020-21-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q4a", label: "(a)", marks: "10",
          topic: "solution-applications", sub: "Block diagram for the DEW P calculation with the gamma/phi formulation",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw a neat and clean block diagram for the calculation of dew point pressure (DEW P) applying the gamma/phi formulation.

$$x_i = \frac{y_i\Phi_iP}{\gamma_iP_i^{sat}} \qquad \text{(A)}$$

$$P = \frac{1}{\sum_iy_i\Phi_i/\gamma_iP_i^{sat}} \qquad \text{(B)}$$`,
          solution: String.raw`**Basis.** Gamma/phi VLE: $y_i\Phi_iP = x_i\gamma_iP_i^{sat}$, where $\Phi_i = \dfrac{\hat\phi_i}{\phi_i^{sat}}\exp\left[\dfrac{-V_i^l(P - P_i^{sat})}{RT}\right]$. Solving for $x_i$ gives (A); then $\sum_ix_i = 1$ gives (B). In DEW P, T and $\{y_i\}$ are known, and P and $\{x_i\}$ are unknown. The γᵢ depend on the unknown x, and the Φᵢ depend on P, so the calculation iterates.

![Block diagram of the DEW P calculation with the gamma–phi formulation](fig/2020-21-Q4a-sketch.svg)

1. **Read** T, $\{y_i\}$ and the constants: Antoine $A_i, B_i, C_i$; $G^E$-model parameters; $B_{ij}$ (virial); $V_i^l$.
2. **Initialise:** all $\Phi_i$ = 1 and all $\gamma_i$ = 1; evaluate $P_i^{sat}$ at T (fixed for the whole calculation).
3. **First P from (B):** $P = 1/\sum_iy_i\Phi_i/(\gamma_iP_i^{sat})$.
4. **First liquid composition from (A):** $x_i = y_i\Phi_iP/(\gamma_iP_i^{sat})$. Evaluate $\gamma_i$ from the $G^E$ model at T and $\{x_i\}$, then recalculate P from (B).
5. **Evaluate $\Phi_i$** at the current P: $\hat\phi_i$ from the virial equation at T, P, $\{y_i\}$; $\phi_i^{sat}$ at $P_i^{sat}$; Poynting factor.
6. **Inner loop on γ:** compute $x_i$ from (A), normalise ($x_i/\sum x_i$), re-evaluate $\gamma_i$. Repeat until every $\delta\gamma_i$ < ε.
7. **Recalculate P from (B)**, then test $|\delta P|$ < ε. If not converged, return to step 5 (outer loop).
8. **Print** P and $\{x_i\}$.

**Note.** DEW P needs the inner γ loop because x is unknown and the $x_i$ from (A) do not sum to 1 until γ is consistent. In BUBL P, x is given and γ is computed once.`,
          answer: String.raw`Read T, {yᵢ} → Φᵢ = γᵢ = 1, Pᵢˢᵃᵗ(T) → P from (B) → xᵢ from (A), γᵢ(x), P from (B) → evaluate Φᵢ (virial) → inner loop: xᵢ (A), normalise, γᵢ until δγ < ε → P from (B), test |δP| < ε (else back to Φᵢ) → print P, {xᵢ}.` },
        { id: "2020-21-Q4b", label: "(b)", marks: "25",
          topic: "solution-theory", sub: "Fugacity coefficients of N₂ and CH₄ (40% N₂) at 200 K, 300 bar by Redlich/Kwong",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A vapor mixture of nitrogen(1) and methane(2) at 200 K and 300 bar contains 40 mol% N₂. Determine the fugacity coefficients of nitrogen and methane in the mixture. The Redlich/Kwong equation of state is valid for the system. You may consider the following equations.

$$\ln\hat\phi_i = \frac{b_i}{b}(Z - 1) - \ln(Z - \beta) - \bar q_iI$$

$$Z = 1 + \beta - q\beta\frac{Z - \beta}{(Z + \epsilon\beta)(Z + \sigma\beta)}$$

$$\beta \equiv \frac{bP}{RT} \qquad q \equiv \frac{a(T)}{bRT} \qquad b = \sum_ix_ib_i \qquad a = \sum_i\sum_jx_ix_ja_{ij}$$

$$\bar a_i \equiv \left[\frac{\partial(na)}{\partial n_i}\right]_{T,n_j} \qquad \bar b_i \equiv \left[\frac{\partial(nb)}{\partial n_i}\right]_{T,n_j} \qquad I = \frac{1}{\sigma - \epsilon}\ln\left(\frac{1 + \sigma\rho b}{1 + \epsilon\rho b}\right) = \frac{1}{\sigma - \epsilon}\ln\left(\frac{Z + \sigma\beta}{Z + \epsilon\beta}\right)$$

$$\bar q_i \equiv \left[\frac{\partial(nq)}{\partial n_i}\right]_{T,n_j} = q\left(1 + \frac{\bar a_i}{a} - \frac{b_i}{b}\right)$$`,
          solution: String.raw`**Given:** $y_1$ = 0.40 (N₂), $y_2$ = 0.60 (CH₄), T = 200 K, P = 300 bar. Attached critical-property table: N₂ $T_c$ = 126.2 K, $P_c$ = 33.9 bar; CH₄ $T_c$ = 191.1 K, $P_c$ = 46.4 bar.

**Find:** $\hat\phi_1$, $\hat\phi_2$.

**Assumptions:** RK parameters from the attached EOS table: σ = 1, ε = 0, Ω = 0.08664, Ψ = 0.42748, α = $T_r^{-1/2}$. Mixing rules as printed, with the geometric-mean combining rule $a_{12} = (a_1a_2)^{1/2}$. Then $\bar b_i = b_i$ and $\bar a_i = 2\sum_jy_ja_{ij} - a$. R = 83.14 cm³·bar/(mol·K).

1. **Pure-component parameters:** $a_i = \Psi\alpha_iR^2T_{c,i}^2/P_{c,i}$, $b_i = \Omega RT_{c,i}/P_{c,i}$.

| | $T_r$ | α | $a_i$ / bar·cm⁶·mol⁻² | $b_i$ / cm³·mol⁻¹ |
|---|---|---|---|---|
| N₂ | 1.5848 | 0.7944 | 1.1027 × 10⁶ | 26.82 |
| CH₄ | 1.0466 | 0.9775 | 2.2733 × 10⁶ | 29.67 |

2. **Mixture parameters:**
$$a_{12} = \sqrt{a_1a_2} = 1.5833\times10^6, \qquad a = y_1^2a_1 + 2y_1y_2a_{12} + y_2^2a_2 = 1.7548\times10^6$$
$$b = 0.4(26.82) + 0.6(29.67) = 28.53\ \mathrm{cm^3\,mol^{-1}}$$
$$\beta = \frac{bP}{RT} = \frac{28.53(300)}{83.14(200)} = 0.5147, \qquad q = \frac{a}{bRT} = \frac{1.7548\times10^6}{28.53(83.14)(200)} = 3.6995$$

3. **Compressibility factor** (vapour root; RK: ε = 0, σ = 1):
$$Z = 1 + \beta - q\beta\frac{Z - \beta}{Z(Z + \beta)}$$
   Iterating from Z = 1 (or solving the cubic, which has only one real root here) gives **Z = 0.9272**.

4. **The integral:**
$$I = \ln\frac{Z + \beta}{Z} = \ln\frac{1.4419}{0.9272} = 0.4415$$

5. **Partial parameters:**
$$\bar a_1 = 2(y_1a_1 + y_2a_{12}) - a = 1.0273\times10^6, \qquad \bar a_2 = 2(y_1a_{12} + y_2a_2) - a = 2.2398\times10^6$$
$$\bar q_1 = q\left(1 + \frac{\bar a_1}{a} - \frac{b_1}{b}\right) = 3.6995(1 + 0.5854 - 0.9401) = 2.3877$$
$$\bar q_2 = 3.6995(1 + 1.2764 - 1.0400) = 4.5740$$

6. **Fugacity coefficients** ($Z - 1 = -0.0728$, $-\ln(Z - \beta) = -\ln 0.4125 = 0.8855$):
$$\ln\hat\phi_1 = 0.9401(-0.0728) + 0.8855 - 2.3877(0.4415) = -0.0685 + 0.8855 - 1.0543 = -0.2372$$
$$\ln\hat\phi_2 = 1.0400(-0.0728) + 0.8855 - 4.5740(0.4415) = -0.0758 + 0.8855 - 2.0196 = -1.2098$$
$$\boxed{\hat\phi_{N_2} = 0.789, \qquad \hat\phi_{CH_4} = 0.298}$$

7. **Check and comment.** The SVNA App. B constants (CH₄ 190.6 K, 45.99 bar; N₂ 34.0 bar) give Z = 0.930, $\hat\phi_1$ = 0.787 and $\hat\phi_2$ = 0.300, essentially the same. Methane is near its critical temperature ($T_r$ ≈ 1.05) and has the stronger attraction (larger a). Its fugacity coefficient is therefore much lower than that of the supercritical, weakly interacting N₂ ($T_r$ ≈ 1.6). Fugacities: $\hat f_1 = 0.4(0.789)(300) = 94.7$ bar and $\hat f_2 = 0.6(0.298)(300) = 53.7$ bar.

**Result:** Z = 0.927; $\hat\phi_{N_2}$ = 0.789; $\hat\phi_{CH_4}$ = 0.298.`,
          answer: String.raw`RK: a₁ = 1.103×10⁶, a₂ = 2.273×10⁶ bar·cm⁶/mol², b₁ = 26.82, b₂ = 29.67 cm³/mol; β = 0.5147, q = 3.700, Z = 0.927, I = 0.4415, q̄₁ = 2.388, q̄₂ = 4.574 ⇒ φ̂_N₂ = 0.789, φ̂_CH₄ = 0.298.` }
      ] },
    { id: "2020-21-Q5", q: 5, section: "B", compulsory: true,
      stem: String.raw`Answer the following questions *(Question 5 is compulsory, 45 marks)*.`,
      parts: [
        { id: "2020-21-Q5a", label: "(a)", marks: "5",
          topic: "reaction-equilibria", sub: "Does reaction equilibrium assume infinite reaction time?",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"For a reaction to be in thermodynamic equilibrium, it is assumed that the reaction has progressed for infinite time". True/False. Give reasons to your answer.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2020-21-Q5b", label: "(b)", marks: "6",
          topic: "phase-equilibria-topics", sub: "Why stability criteria are needed for any equilibrium",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why do we need stability criteria for any equilibrium? Explain.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2020-21-Q5c", label: "(c)", marks: "12",
          topic: "refrigeration", sub: "Linde liquefaction process: principle, schematic, scale of application",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Describe the operating principles of Linde process with a schematic diagram of the process. Mention the preferable scale of application for the process.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2020-21-Q5d", label: "(d)", marks: "5",
          topic: "phase-equilibria-topics", sub: "Equality of solid and vapour fugacities at solid–vapour equilibrium",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"At solid-vapor equilibrium, the fugacities of solid phase and vapor phase will be equal". Do you agree with this statement? Clarify your answer.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2020-21-Q5e", label: "(e)", marks: "6",
          topic: "phase-equilibria-topics", sub: "Why dUᵗ + PdVᵗ − TdSᵗ ≤ 0 is not a practical stability criterion",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`We have a stability criterion for a system with arbitrary number of species –

$$dU^t + PdV^t - TdS^t \le 0$$

This criterion is not ideal for practical applications. Why is that? Interpret.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2020-21-Q5f", label: "(f)", marks: "5",
          topic: "reaction-equilibria", sub: "Equilibrium constant for multiphase reactions, with examples",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`How do you express equilibrium constant for multiphase reactions? Describe with examples.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2020-21-Q5g", label: "(g)", marks: "6",
          topic: "phase-equilibria-topics", sub: "Interpret three binary LLE solubility diagrams (UCST, LCST, closed loop)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Describe the conditions shown in the figure below:

*(Figure 5g: three T–x₁ diagrams for binary liquid–liquid equilibrium, each with tie line A–B at temperature T and phase compositions $x_1^\alpha$, $x_1^\beta$: (a) a closed "two liquid phases" loop between a lower point L at $T_L$ and an upper point U at $T_U$; (b) a dome with its maximum U at $T_U$; (c) a U-shaped region with its minimum L at $T_L$.)*`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] },
    { id: "2020-21-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q6a", label: "(a)", marks: "16",
          topic: "refrigeration", sub: "Absorption refrigeration cycle: sketch and working principle",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw an absorption refrigeration cycle and describe its working principle.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2020-21-Q6b", label: "(b)", marks: "6+2=8",
          topic: "reaction-equilibria", sub: "Maximum thermodynamic efficiency of a hydrogen fuel cell",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is the maximum efficiency that could be reached by a hydrogen fuel cell thermodynamically? How much of it is practically achievable?`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2020-21-Q6c", label: "(c)", marks: "6",
          topic: "refrigeration", sub: "Why some refrigerants were banned and their alternatives",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Describe the reasons behind banning some of the refrigerants. What are the possible alternatives to them?`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] },
    { id: "2020-21-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q7a", label: "(a)", marks: "18",
          topic: "phase-equilibria-topics", sub: "Stability criteria for a binary liquid–liquid mixture: derivation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the stability criteria for a binary liquid-liquid mixture in equilibrium.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2020-21-Q7b", label: "(b)", marks: "12",
          topic: "phase-equilibria-topics", sub: "Criteria for isothermal binary VLE and their significance",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`For an isothermal binary component vapor-liquid equilibrium, what criteria are to be met? Explain the significance of these criteria.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] },
    { id: "2020-21-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q8a", label: "(a)", marks: "8",
          topic: "reaction-equilibria", sub: "Meaning of the Gibbs-minimisation equation with Lagrange multipliers",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`$$\Delta G_{f_i}^0 + RT\ln\left(\frac{y_i\hat\phi_iP}{P^0}\right) + \sum_k\lambda_ka_{ik} = 0,$$ symbols have their usual meanings.

Explain the significance of the equation and its parameters.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2020-21-Q8b", label: "(b)", marks: "22",
          topic: "reaction-equilibria", sub: "CO/H₂O/CO₂/H₂ at 1000 K, 1 bar with 3 mol H₂ measured: compositions and λₖ",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The equilibrium compositions at 1000 K and 1 bar of a gas-phase system containing the species H₂O, CO, CO₂ and H₂ are to be determined. In the initial unreacted state, there are 2 mol CO and 4 mol of H₂O present. Value of $\Delta G_f^0$ at 1000 K are:

$$\Delta G^0_{f\,H_2O} = -192.42\ \mathrm{kJ/mol} \qquad \Delta G^0_{f\,CO} = -200.24\ \mathrm{kJ/mol} \qquad \Delta G^0_{f\,CO_2} = -395.79\ \mathrm{kJ/mol}$$

At equilibrium, H₂ is measured by gas chromatography and found to have 3 moles. With this measurement, it will be possible to estimate the equilibrium concentration of the gas components and $\lambda_k$ values. Determine the values of $\lambda_k$. [Hint: See the equation in 8(a)].`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] }
  ]
});
