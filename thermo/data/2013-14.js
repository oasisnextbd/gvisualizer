QB.paper({
  year: "2013-14", date: "08/08/2015", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engineering Examinations 2013-2014, CHE 307 (Chemical Engineering Thermodynamics II), 3 hours, 210 marks. Section A: four questions, answer any THREE. Section B: four questions, answer any THREE. Use separate scripts for each section; the figures in the margin indicate full marks. Attached to the paper: Figure for Question 7(b) (excess properties of chloroform/n-heptane and acetone/chloroform at 323.15 K) and Figure for Question 8(b) (comparison of the virial and Lee/Kesler correlations for Z⁰).`,
  questions: [
    { id: "2013-14-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q1a", label: "(a)", marks: "15",
          topic: "refrigeration", sub: "Linde liquefaction as the limiting case (x = 0) of the Claude process",
          type: "derivation", syllabus: "in", repeats: ["2018-19-Q5iv"],
          text: String.raw`Show that the Linde process is a limiting case of the claude process with necessary diagram and equation.`,
          solution: String.raw`![Linde and Claude liquefaction schematics: compressor and cooler, countercurrent heat exchanger, throttle, separator, and in the Claude process an expander taking a fraction x of the high-pressure gas](fig/2013-14-Q1a-sketch.svg)

**States (SVNA Fig. 9.6 numbering, as on the formula sheet):**
- 4: compressed gas after the compressor and cooler, entering the heat-exchanger system.
- 5: high-pressure gas at the expander inlet. A fraction x leaves the expander at state 12 and rejoins the cold return gas.
- 9: saturated liquid product (fraction z).
- 15: low-pressure unliquefied gas leaving the warm end of the exchangers.

1. **Control volume:** everything to the right of the compressor and cooler (exchangers, expander, throttle, separator). Basis: 1 mol of gas entering at 4. The exchangers and separator are insulated (Q = 0), and kinetic and potential energy changes are neglected.

2. **Energy balance, Claude process.** The expander delivers shaft work $W_s = x(H_5 - H_{12})$ out of the control volume:
$$H_4 = zH_9 + (1 - z)H_{15} + x(H_5 - H_{12})$$
   Solve for the fraction liquefied:
$$z(H_9 - H_{15}) = H_4 - H_{15} - x(H_5 - H_{12})$$
$$\boxed{z = \frac{H_4 - H_{15}}{H_9 - H_{15}} + x\,\frac{H_{12} - H_5}{H_9 - H_{15}}}$$
   Both terms are positive, because $H_9 < H_{15}$ and $H_{12} < H_5$. The second term is the **extra liquefaction from the work-producing expansion**.

3. **Limit x → 0.** If no gas goes to the expander, all of it passes through the exchangers and is throttled (isenthalpic):
$$z = \frac{H_4 - H_{15}}{H_9 - H_{15}}$$
   This is exactly the energy balance of the **Linde process**, the same control volume with only a throttle valve and no work.

4. **Conclusion.** The Linde process is the limiting case x = 0 of the Claude process. For the same compression pressure and precooling ($H_4$, $H_9$, $H_{15}$ fixed), any x > 0 increases z. The expander cools the gas nearly isentropically, which gives a much larger temperature drop than Joule–Thomson throttling, and it removes energy as work. The practical limit on x is that the expander exhaust (state 12) must not contain too much liquid.`,
          answer: String.raw`Energy balance on exchangers + expander + throttle + separator (1 mol at 4): H₄ = zH₉ + (1 − z)H₁₅ + x(H₅ − H₁₂) ⇒ z = (H₄ − H₁₅)/(H₉ − H₁₅) + x(H₁₂ − H₅)/(H₉ − H₁₅). With x = 0 (no expander, throttling only) z = (H₄ − H₁₅)/(H₉ − H₁₅): the Linde result, so Linde is the x = 0 limit of Claude.` },
        { id: "2013-14-Q1b", label: "(b)", marks: "20",
          topic: "refrigeration", sub: "Tetrafluoroethane refrigerator −26/27 °C, 5.3 kW: circulation rate, with heat exchanger, COP",
          type: "numerical", syllabus: "in", repeats: ["2017-18-Q8b"],
          text: String.raw`A refrigerator with tetra fluoroethane as refrigerant operates with an evaporation temperature of −26°C and a condensation temperature of 27°C. Saturated liquid refrigerant from the condenser flows through an expansion valve into the evaporator, from which it emerges as saturated vapor.

i) For cooling rate of 5.3 kW, what is the circulation rate of the refrigerant?

ii) Suppose the cycle of (i) is modified by the inclusion of a counter current heat exchanger between the condenser and the throttle valve in which heat is transferred to vapor returning from the evaporator. If liquid from the condenser enters the exchanger at 27°C and if vapor from the evaporator enters the exchanger at −26°C and leaves at 21°C, what is the circulation rate of the refrigerant?

iii) Determine COP for isentropic compression of the vapor for case (i) and (ii).`,
          solution: String.raw`**Given:** tetrafluoroethane (R-134a); evaporation at −26 °C, condensation at 27 °C; $\dot Q_C$ = 5.3 kW.

**Data:** no table is attached to the paper, so the values below are from Çengel & Boles, Table A-11 (saturated R-134a) and Table A-13 (superheated R-134a), in kJ/kg and kJ/(kg K).
- −26 °C: $P^{sat}$ = 101.73 kPa ≈ 0.10 MPa, $h_g$ = 234.70, $s_g$ = 0.95152.
- 27 °C (interpolated between 26 and 28 °C): $P^{sat}$ = 706.6 kPa ≈ 0.70 MPa, $h_f$ = 89.27.
- The A-13 isobars 0.10 MPa ($T^{sat}$ = −26.37 °C) and 0.70 MPa ($T^{sat}$ = 26.69 °C) are used for the evaporator and condenser pressures.

**Assumptions:** steady flow, no pressure drops, kinetic and potential energy changes neglected; heat exchanger adiabatic.

1. **(i) Simple cycle.** Throttling is isenthalpic, so the evaporator inlet has $h$ = 89.27 kJ/kg:
$$q_C = 234.70 - 89.27 = 145.44\ \mathrm{kJ/kg}, \qquad \dot m = \frac{5.3}{145.44} = 0.0364\ \mathrm{kg/s}$$

2. **(ii) Vapour side of the heat exchanger:** 0.10 MPa, −26 °C → 21 °C. From A-13 at 0.10 MPa (20 °C: h = 272.18, s = 1.0919; 30 °C: h = 280.69, s = 1.1204), at 21 °C: h = 273.03 kJ/kg and s = 1.0948 kJ/(kg K).
$$\Delta h_{vap} = 273.03 - 234.70 = 38.33\ \mathrm{kJ/kg}$$

3. **(ii) Liquid side.** The energy balance gives the liquid leaving the exchanger:
$$h_{liq} = 89.27 - 38.33 = 50.94\ \mathrm{kJ/kg}$$
   This is subcooled liquid at about −0.7 °C, since $h_f$ = 51.83 at 0 °C. The throttle keeps this enthalpy, so
$$q_C = 234.70 - 50.94 = 183.77\ \mathrm{kJ/kg}, \qquad \dot m = \frac{5.3}{183.77} = 0.0288\ \mathrm{kg/s}$$

4. **(iii) Isentropic compression, case (i):** s = 0.95152 to 0.70 MPa. A-13 at 0.70 MPa gives 30 °C: h = 268.47, s = 0.9314 and 40 °C: h = 278.59, s = 0.9642. Interpolating, $h_2$ = 274.68 kJ/kg (36 °C).
$$w = 274.68 - 234.70 = 39.98\ \mathrm{kJ/kg}, \qquad \mathrm{COP} = \frac{145.44}{39.98} = 3.64$$

5. **(iii) Isentropic compression, case (ii):** s = 1.0948 to 0.70 MPa. A-13 gives 80 °C: h = 318.29, s = 1.0835 and 90 °C: h = 328.31, s = 1.1115. Interpolating, $h_2$ = 322.32 kJ/kg (84 °C).
$$w = 322.32 - 273.03 = 49.28\ \mathrm{kJ/kg}, \qquad \mathrm{COP} = \frac{183.77}{49.28} = 3.73$$
   Compressor power: 0.0364 × 39.98 = 1.46 kW in case (i) and 0.0288 × 49.28 = 1.42 kW in case (ii). The exchanger cuts the circulation rate by 21% and raises the COP slightly, but gives a much hotter discharge (84 °C against 36 °C). The Carnot COP is 247.15/53 = 4.66.

**Result:** (i) 0.0364 kg/s; (ii) 0.0288 kg/s; (iii) COP = 3.64 (simple) and 3.73 (with heat exchanger).`,
          answer: String.raw`Çengel A-11/A-13: (i) q_C = 234.70 − 89.27 = 145.4 kJ/kg ⇒ ṁ = 0.0364 kg/s. (ii) vapour −26→21 °C gains 38.33 kJ/kg ⇒ liquid h = 50.94, q_C = 183.8 kJ/kg ⇒ ṁ = 0.0288 kg/s. (iii) isentropic to 0.70 MPa: h₂ = 274.7 (i), 322.3 (ii) ⇒ COP = 3.64 and 3.73.` }
      ] },
    { id: "2013-14-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q2a", label: "(a)", marks: "10",
          topic: "reaction-equilibria", sub: "Relation between the standard Gibbs-energy change and the equilibrium constant",
          type: "derivation", syllabus: "in", repeats: ["2017-18-Q7c", "2015-16-Q2b"],
          text: String.raw`Derive a relation between standard Gibbs-energy change and the equilibrium constant.`,
          solution: String.raw`1. **Criterion of equilibrium.** For a closed system at constant T and P, $(dG^t)_{T,P} = 0$ at equilibrium. For a single reaction, $dn_i = \nu_i\,d\varepsilon$, so
$$d(nG) = \sum_i\mu_i\,dn_i = \left(\sum_i\nu_i\mu_i\right)d\varepsilon \quad\Rightarrow\quad \left[\frac{\partial(nG)}{\partial\varepsilon}\right]_{T,P} = \sum_i\nu_i\mu_i = 0$$

2. **Chemical potential in terms of fugacity.** Take the standard state of each species at the system temperature T and a fixed pressure $P^\circ$ (1 bar), with Gibbs energy $G_i^\circ$ and fugacity $f_i^\circ$. Integrating $d\mu_i = RT\,d\ln\hat f_i$ at constant T from the standard state:
$$\mu_i = G_i^\circ + RT\ln\frac{\hat f_i}{f_i^\circ}$$

3. **Substitute:**
$$\sum_i\nu_iG_i^\circ + RT\sum_i\nu_i\ln\frac{\hat f_i}{f_i^\circ} = 0 \quad\Rightarrow\quad \ln\prod_i\left(\frac{\hat f_i}{f_i^\circ}\right)^{\nu_i} = \frac{-\sum_i\nu_iG_i^\circ}{RT}$$

4. **Define** the standard Gibbs-energy change of reaction, $\Delta G^\circ \equiv \sum_i\nu_iG_i^\circ$, and the equilibrium constant K:
$$\boxed{K \equiv \prod_i\left(\frac{\hat f_i}{f_i^\circ}\right)^{\nu_i} = \exp\left(\frac{-\Delta G^\circ}{RT}\right)}, \qquad \boxed{\Delta G^\circ = -RT\ln K}$$

5. **Remarks:**
   - $G_i^\circ$ is a property of pure i in its standard state at fixed $P^\circ$, so it depends on T only. Therefore **K is a function of temperature only**, not of P or composition. Pressure and composition affect the equilibrium through the ratios $\hat f_i/f_i^\circ$.
   - ΔG° < 0 gives K > 1 (products favoured); ΔG° > 0 gives K < 1.
   - $\Delta G^\circ_{298}$ is calculated from $\Delta G^\circ_{f,298}$ values, $\Delta G^\circ = \sum\nu_i\Delta G^\circ_{f_i}$.`,
          answer: String.raw`At equilibrium Σνᵢμᵢ = 0 (dGᵗ = 0 at T, P); μᵢ = Gᵢ° + RT ln(f̂ᵢ/fᵢ°) ⇒ Π(f̂ᵢ/fᵢ°)^νᵢ = exp(−ΔG°/RT) ≡ K, i.e. ΔG° = Σνᵢ Gᵢ° = −RT ln K (K depends on T only).` },
        { id: "2013-14-Q2b", label: "(b)", marks: "10",
          topic: "reaction-equilibria", sub: "Ideal-gas reaction: product of yᵢ to the power νᵢ equals (P/P°) to the −ν times K",
          type: "derivation", syllabus: "in", repeats: ["2021-22-Q8b"],
          text: String.raw`Prove that for gas phase reaction:

$$\prod_i(y_i)^{\nu_i} = \left(\frac{P}{P^\circ}\right)^{-\nu}K$$`,
          solution: String.raw`1. **Start from** $K = \prod_i(\hat f_i/f_i^\circ)^{\nu_i}$ (part (a)).

2. **Gas-phase standard state:** pure ideal gas at $P^\circ$ = 1 bar, so $f_i^\circ = P^\circ$. The species fugacity in the gas mixture is $\hat f_i = \hat\phi_iy_iP$. Then
$$\prod_i\left(\frac{y_i\hat\phi_iP}{P^\circ}\right)^{\nu_i} = K \quad\Rightarrow\quad \prod_i(y_i\hat\phi_i)^{\nu_i} = \left(\frac{P}{P^\circ}\right)^{-\nu}K, \qquad \nu \equiv \sum_i\nu_i$$
   Here $\prod_i(P/P^\circ)^{\nu_i} = (P/P^\circ)^{\sum\nu_i}$.

3. **Ideal-gas mixture:** $\hat\phi_i$ = 1, which holds at low pressure or high temperature:
$$\boxed{\prod_i(y_i)^{\nu_i} = \left(\frac{P}{P^\circ}\right)^{-\nu}K}$$
   An intermediate case is the **ideal solution** of real gases (Lewis/Randall rule), $\hat\phi_i = \phi_i$, with pure-gas $\phi_i$ from a generalized correlation.

4. **Consequences:**
   - K depends on T only; P enters through $(P/P^\circ)^{-\nu}$.
   - If ν < 0 (fewer moles of products), raising P increases the product mole fractions. If ν > 0, raising P decreases them. If ν = 0, P has no effect (ideal gases).
   - An inert diluent lowers the partial pressures, with the opposite effect to raising P.`,
          answer: String.raw`K = Π(f̂ᵢ/fᵢ°)^νᵢ with fᵢ° = P° and f̂ᵢ = yᵢφ̂ᵢP ⇒ Π(yᵢφ̂ᵢ)^νᵢ = (P/P°)^{−ν}K; ideal gas (φ̂ᵢ = 1): Π yᵢ^νᵢ = (P/P°)^{−ν}K, ν = Σνᵢ.` },
        { id: "2013-14-Q2c", label: "(c)", marks: "15",
          topic: "reaction-equilibria", sub: "Methanol synthesis at 550 K, 100 bar with the reverse shift: equilibrium composition",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q7"],
          text: String.raw`The feed gas to a methanol synthesis reactor is composed of 75 mole % H₂, 15 mole % CO, 5 mole % CO₂ and 5 mole % N₂. The system comes to equilibrium at 550 k and 100 bar with respect to the reactions:

$$\mathrm{2H_2(g) + CO(g) \rightarrow CH_3OH(g)}$$

$$\mathrm{CO_2(g) + H_2(g) \rightarrow CO(g) + H_2O(g)}$$

Assuming ideal gases, determine the composition of the equilibrium mixtures.`,
          solution: String.raw`**Given:** feed (basis 100 mol) 75 H₂, 15 CO, 5 CO₂, 5 N₂; T = 550 K, P = 100 bar. Reaction 1: 2H₂ + CO → CH₃OH (ν₁ = −2). Reaction 2: CO₂ + H₂ → CO + H₂O (ν₂ = 0).

**Assumptions:** ideal gases (as stated); SVNA App. C data; N₂ inert.

1. **K₁ at 550 K** ($K = K_0K_1K_2$, SVNA eq. 13.21):
   - $\Delta H^\circ_{298}$ = −200 660 + 110 525 = −90 135 J/mol; $\Delta G^\circ_{298}$ = −161 960 + 137 169 = −24 791 J/mol.
   - ΔA = −7.663, ΔB = 10.815 × 10⁻³, ΔC = −3.450 × 10⁻⁶, ΔD = −0.135 × 10⁵.
   - $K_0 = 2.205 \times 10^4$, $K_1 = 5.872 \times 10^{-8}$.
   - $\int\Delta C_P^\circ/R\,dT/T = -2.3906$ and $\frac1T\int\Delta C_P^\circ/R\,dT = -956.4/550 = -1.7390$, so $K_2 = e^{-0.6516} = 0.5212$.
$$K_1 = 2.205 \times 10^4 \times 5.872 \times 10^{-8} \times 0.5212 = 6.75 \times 10^{-4}$$

2. **K₂ at 550 K** (the reverse water-gas shift):
   - $\Delta H^\circ_{298}$ = +41 166 J/mol; $\Delta G^\circ_{298}$ = +28 618 J/mol.
   - ΔA = −1.860, ΔB = −0.540 × 10⁻³, ΔD = +1.164 × 10⁵.
   - $K_0 = 9.684 \times 10^{-6}$, $K_1$ = 2007.
   - $\int\Delta C_P^\circ/R\,dT/T = -0.5406$ and $\frac1T\int\Delta C_P^\circ/R\,dT = -232.0/550 = -0.4218$, so $K_2 = e^{-0.1188} = 0.888$.
$$K_2 = 9.684 \times 10^{-6} \times 2007 \times 0.888 = 0.0173$$

3. **Mole numbers** with extents ε₁ and ε₂:

| Species | H₂ | CO | CO₂ | H₂O | CH₃OH | N₂ | Total |
|---|---|---|---|---|---|---|---|
| mol | 75 − 2ε₁ − ε₂ | 15 − ε₁ + ε₂ | 5 − ε₂ | ε₂ | ε₁ | 5 | 100 − 2ε₁ |

4. **Equilibrium equations** ($\prod y_i^{\nu_i} = (P/P^\circ)^{-\nu}K$):
$$\frac{y_{CH_3OH}}{y_{CO}\,y_{H_2}^2} = \frac{\varepsilon_1(100 - 2\varepsilon_1)^2}{(15 - \varepsilon_1 + \varepsilon_2)(75 - 2\varepsilon_1 - \varepsilon_2)^2} = (100)^2(6.75 \times 10^{-4}) = 6.75$$
$$\frac{y_{CO}\,y_{H_2O}}{y_{CO_2}\,y_{H_2}} = \frac{(15 - \varepsilon_1 + \varepsilon_2)\,\varepsilon_2}{(5 - \varepsilon_2)(75 - 2\varepsilon_1 - \varepsilon_2)} = 0.0173$$

5. **Solve simultaneously** (Newton's method, or iterate: guess ε₂, solve the first equation for ε₁, update ε₂ from the second):
$$\varepsilon_1 = 11.86\ \mathrm{mol}, \qquad \varepsilon_2 = 0.888\ \mathrm{mol}, \qquad n = 76.28\ \mathrm{mol}$$

6. **Equilibrium composition:**

| Species | H₂ | CO | CO₂ | H₂O | CH₃OH | N₂ |
|---|---|---|---|---|---|---|
| mol | 50.39 | 4.03 | 4.11 | 0.89 | 11.86 | 5.00 |
| $y_i$ | 0.6606 | 0.0528 | 0.0539 | 0.0116 | 0.1555 | 0.0655 |

   Check: $0.1555/(0.0528 \times 0.6606^2) = 6.75$ ✓ and $0.0528 \times 0.0116/(0.0539 \times 0.6606) = 0.0173$ ✓.

**Result:** $y_{CH_3OH}$ ≈ 0.156, $y_{H_2}$ ≈ 0.661, $y_{CO}$ ≈ 0.053, $y_{CO_2}$ ≈ 0.054, $y_{H_2O}$ ≈ 0.012, $y_{N_2}$ ≈ 0.066. Methanol formed is 11.86 mol per 15 mol CO fed (79%); the CO₂ reaction converts only 0.89 of the 5 mol CO₂ to CO.`,
          answer: String.raw`K₁(550 K) = 6.75×10⁻⁴, K₂ = 0.0173; solving both equilibrium equations: ε₁ = 11.86, ε₂ = 0.888 (per 100 mol feed), n = 76.28 ⇒ y: H₂ 0.661, CO 0.053, CO₂ 0.054, H₂O 0.012, CH₃OH 0.156, N₂ 0.066.` }
      ] },
    { id: "2013-14-Q3", q: 3, section: "A",
      stem: String.raw`Ethanol is produced from ethylene via the gas phase reaction

$$\mathrm{C_2H_4(g) + H_2O(g) \rightarrow C_2H_5OH(g)}$$

Reaction conditions are 400K and 2 bar.`,
      parts: [
        { id: "2013-14-Q3a", label: "(a)", marks: "15",
          topic: "reaction-equilibria", sub: "Ethylene hydration: K at 25 °C from standard Gibbs energies of formation",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine a numerical value for the equilibrium constant K for this reaction at 25°C.`,
          solution: String.raw`**Given:** C₂H₄(g) + H₂O(g) → C₂H₅OH(g). SVNA Table C.4, J/mol:

| Species | $\Delta H^\circ_{f,298}$ | $\Delta G^\circ_{f,298}$ |
|---|---|---|
| C₂H₄(g) | 52 510 | 68 460 |
| H₂O(g) | −241 818 | −228 572 |
| C₂H₅OH(g) | −235 100 | −168 490 |

1. **Standard Gibbs-energy change at 298.15 K:**
$$\Delta G^\circ_{298} = \sum\nu_i\Delta G^\circ_{f_i} = -168\,490 - 68\,460 - (-228\,572) = -8\,378\ \mathrm{J/mol}$$

2. **Equilibrium constant** ($\Delta G^\circ = -RT\ln K$):
$$\ln K_{298} = \frac{8\,378}{8.314 \times 298.15} = 3.380 \quad\Rightarrow\quad \boxed{K_{298} = 29.4}$$

3. **Standard heat of reaction** (needed in part b):
$$\Delta H^\circ_{298} = -235\,100 - 52\,510 - (-241\,818) = -45\,792\ \mathrm{J/mol}$$
   The reaction is exothermic, so K decreases as T rises.

**Result:** $K_{298}$ ≈ 29.4 (ΔG° = −8378 J/mol).`,
          answer: String.raw`ΔG°₂₉₈ = −168 490 − 68 460 + 228 572 = −8378 J/mol ⇒ K₂₉₈ = exp(8378/(8.314 × 298.15)) = 29.4 (ΔH°₂₉₈ = −45 792 J/mol).` },
        { id: "2013-14-Q3b", label: "(b)", marks: "5",
          topic: "reaction-equilibria", sub: "Ethylene hydration: K at 400 K",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine the value of K at 400K.`,
          solution: String.raw`**Method:** SVNA eq. 13.21, $K = K_0K_1K_2$.

1. **K₀ and K₁:**
$$K_0 = 29.37, \qquad K_1 = \exp\left[\frac{\Delta H^\circ_0}{RT_0}\left(1 - \frac{T_0}{T}\right)\right] = \exp\left[\frac{-45\,792}{8.314 \times 298.15}\left(1 - \frac{298.15}{400}\right)\right] = e^{-4.704} = 0.00906$$

2. **K₂.** From Table C.1 for C₂H₅OH − C₂H₄ − H₂O: ΔA = 3.518 − 1.424 − 3.470 = −1.376; ΔB = (20.001 − 14.394 − 1.450) × 10⁻³ = 4.157 × 10⁻³; ΔC = (−6.002 + 4.392) × 10⁻⁶ = −1.610 × 10⁻⁶; ΔD = −0.121 × 10⁵.
$$\int_{298.15}^{400}\frac{\Delta C_P^\circ}{R}\frac{dT}{T} = -0.06846, \qquad \frac{1}{T}\int_{298.15}^{400}\frac{\Delta C_P^\circ}{R}dT = \frac{-22.81}{400} = -0.05702$$
$$K_2 = \exp(-0.06846 + 0.05702) = 0.9886$$

3. **K at 400 K:**
$$K_{400} = 29.37 \times 0.00906 \times 0.9886 = 0.263$$
   With ΔH° taken as constant ($K_2$ = 1) the result would be 0.266; the heat-capacity correction is small over this range.

**Result:** $K_{400}$ ≈ **0.263** (ΔG°₄₀₀ = +4.44 kJ/mol).`,
          answer: String.raw`K = K₀K₁K₂ = 29.37 × exp[−45 792/(R·298.15)·(1 − 298.15/400)] × 0.9886 = 29.37 × 0.00906 × 0.9886 = 0.263.` },
        { id: "2013-14-Q3c", label: "(c)", marks: "10",
          topic: "reaction-equilibria", sub: "Ethylene hydration at 400 K, 2 bar: equilibrium composition for an equimolar feed",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine the composition of the equilibrium gas mixture for an equimolar feed containing only ethylene and H₂O.`,
          solution: String.raw`**Given:** 1 mol C₂H₄ + 1 mol H₂O; 400 K, 2 bar; $K_{400}$ = 0.263; ideal gases (low pressure). ν = 1 − 1 − 1 = −1.

1. **Mole numbers:** C₂H₄ = 1 − ε, H₂O = 1 − ε, C₂H₅OH = ε; total n = 2 − ε.

2. **Equilibrium relation:** $\prod y_i^{\nu_i} = (P/P^\circ)^{-\nu}K = (P/P^\circ)K$:
$$\frac{y_{EtOH}}{y_{C_2H_4}\,y_{H_2O}} = \frac{\varepsilon(2 - \varepsilon)}{(1 - \varepsilon)^2} = \frac{P}{P^\circ}K = 2(0.263) = 0.526$$

3. **Solve.** Since $\varepsilon(2 - \varepsilon) = 1 - (1 - \varepsilon)^2$,
$$\frac{1}{(1 - \varepsilon)^2} = 1 + 0.526 \;\Rightarrow\; 1 - \varepsilon = (1.526)^{-1/2} = 0.8095 \;\Rightarrow\; \varepsilon = 0.1905$$

4. **Composition** (n = 1.8095):
$$y_{C_2H_5OH} = \frac{0.1905}{1.8095} = 0.105, \qquad y_{C_2H_4} = y_{H_2O} = \frac{0.8095}{1.8095} = 0.447$$

**Result:** **10.5% ethanol, 44.7% ethylene, 44.7% water** (19% conversion of ethylene).`,
          answer: String.raw`ε(2 − ε)/(1 − ε)² = (P/P°)K = 0.526 ⇒ 1 − ε = 1.526^{−½} ⇒ ε = 0.1905; y_EtOH = 0.105, y_C₂H₄ = y_H₂O = 0.447.` },
        { id: "2013-14-Q3d", label: "(d)", marks: "5",
          topic: "reaction-equilibria", sub: "Effect of lowering the pressure to 1 bar on the ethanol mole fraction",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`For the same feed as in part (c), but for P = 1 bar, would the equilibrium mole fraction of ethanol be hither or lower? Explain.`,
          solution: String.raw`**Lower.**

1. **Le Chatelier / sign of ν.** ν = −1: two moles of gas give one. From $\prod y_i^{\nu_i} = (P/P^\circ)K$, a lower P (with K fixed by T) lowers the right side, so the equilibrium shifts towards fewer products.

2. **Numbers.** At P = 1 bar:
$$\frac{\varepsilon(2 - \varepsilon)}{(1 - \varepsilon)^2} = 0.263 \;\Rightarrow\; 1 - \varepsilon = (1.263)^{-1/2} = 0.8898, \quad \varepsilon = 0.110$$
$$y_{C_2H_5OH} = \frac{0.110}{1.890} = 0.058$$
   This is lower than 0.105 at 2 bar.

High pressure (and moderate temperature, since the reaction is exothermic) favours ethanol formation; industrial ethylene hydration runs at about 60–70 bar.`,
          answer: String.raw`Lower: ν = −1, so Πyᵢ^νᵢ = (P/P°)K falls with P; at 1 bar ε = 0.110 and y_EtOH = 0.058 (vs 0.105 at 2 bar).` }
      ] },
    { id: "2013-14-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q4a", label: "(a)", marks: "15",
          topic: "solution-applications", sub: "Block diagram for the DEW T calculation with all equations (gamma/phi)",
          type: "sketch", syllabus: "in", repeats: ["2017-18-Q7b", "2015-16-Q4a"],
          text: String.raw`By clearly showing all the necessary equations, write a block diagram for the calculation of Dew T.`,
          solution: String.raw`**Problem:** given P and the vapour composition $\{y_i\}$, find T and the liquid composition $\{x_i\}$ (SVNA §14.1).

### Necessary equations
1. **Gamma/phi VLE:** $y_i\Phi_iP = x_i\gamma_iP_i^{sat}$, so
$$x_i = \frac{y_i\Phi_iP}{\gamma_iP_i^{sat}}$$

2. **Temperature equation.** Set $\sum x_i = 1$ and factor out the vapour pressure of a reference species j (any one of the components):
$$P_j^{sat} = P\sum_i\frac{y_i\Phi_i}{\gamma_i}\frac{P_j^{sat}}{P_i^{sat}}, \qquad T = \frac{B_j}{A_j - \ln P_j^{sat}} - C_j$$
   The ratios $P_j^{sat}/P_i^{sat}$ change only slowly with T, so this iteration converges well.

3. **Vapour pressures (Antoine):** $\ln P_i^{sat} = A_i - \dfrac{B_i}{T + C_i}$. For the initial guess, the saturation temperatures at P are $T_i^{sat} = \dfrac{B_i}{A_i - \ln P} - C_i$, and $T = \sum_iy_iT_i^{sat}$.

4. **Φ factor:**
$$\Phi_i = \frac{\hat\phi_i}{\phi_i^{sat}}\exp\left[\frac{-V_i^l(P - P_i^{sat})}{RT}\right]$$
   - $\ln\hat\phi_k = \dfrac{P}{RT}\left[B_{kk} + \tfrac12\sum_i\sum_jy_iy_j(2\delta_{ik} - \delta_{ij})\right]$ with $\delta_{ik} = 2B_{ik} - B_{ii} - B_{kk}$
   - $\ln\phi_i^{sat} = B_{ii}P_i^{sat}/RT$
   - $B_{ij}$ from the Pitzer correlation: $\dfrac{B_{ij}P_{cij}}{RT_{cij}} = B^0 + \omega_{ij}B^1$, $B^0 = 0.083 - 0.422/T_r^{1.6}$, $B^1 = 0.139 - 0.172/T_r^{4.2}$

5. **Activity coefficients** $\gamma_i(T, \{x_i\})$ from a $G^E$ model (Margules, van Laar, Wilson, NRTL). Here both T and x are unknown, so γ must be iterated.

### Block diagram
![DEW T flowchart with the gamma–phi formulation: inner loop on gamma, outer loop on T](fig/2013-14-Q4a-sketch.svg)

1. **Read** P, $\{y_i\}$ and the constants: Antoine $A_i, B_i, C_i$; $G^E$ parameters; $T_c, P_c, \omega$ (for $B_{ij}$); $V_i^l$.
2. **Initialize:** all $\Phi_i$ = 1 and all $\gamma_i$ = 1. Calculate $T_i^{sat}$ and the first estimate $T = \sum y_iT_i^{sat}$.
3. **Evaluate** $\{P_i^{sat}\}$ at T and pick species j. Calculate $P_j^{sat} = P\sum(y_i\Phi_i/\gamma_i)(P_j^{sat}/P_i^{sat})$, then the new T from Antoine.
4. **Evaluate** $\{P_i^{sat}\}$, $\hat\phi_i$, $\phi_i^{sat}$ and $\Phi_i$ at this T. Calculate $x_i = y_i\Phi_iP/(\gamma_iP_i^{sat})$ and $\gamma_i(T, x)$.
5. **Recalculate** $P_j^{sat}$ and T.
6. **Inner loop:** re-evaluate $P_i^{sat}$ and $\Phi_i$. Calculate $x_i = y_i\Phi_iP/(\gamma_iP_i^{sat})$, **normalize** ($x_i \leftarrow x_i/\sum x_i$) and evaluate new $\gamma_i$. If any $|\delta\gamma_i| > \varepsilon$, repeat step 6.
7. **Outer loop:** recalculate $P_j^{sat}$ and T. If $|\delta T| > \varepsilon$, return to step 6.
8. **Print** T and $\{x_i\}$.

At low pressure ($\Phi_i$ = 1) the same diagram gives DEW T by modified Raoult's law.`,
          answer: String.raw`Read P, {yᵢ}; Φᵢ = γᵢ = 1; Tᵢˢᵃᵗ = Bᵢ/(Aᵢ − ln P) − Cᵢ, T = ΣyᵢTᵢˢᵃᵗ; Pⱼˢᵃᵗ = PΣ(yᵢΦᵢ/γᵢ)(Pⱼˢᵃᵗ/Pᵢˢᵃᵗ) → T (Antoine); Φᵢ (virial), xᵢ = yᵢΦᵢP/γᵢPᵢˢᵃᵗ, γᵢ(T, x); inner loop: normalize x, new γ until δγ < ε; outer loop: new T until δT < ε; print T, {xᵢ}.` },
        { id: "2013-14-Q4b", label: "(b)", marks: "10",
          topic: "refrigeration", sub: "Absorption refrigeration: sketch, working principle and Q_H/Q_C equations",
          type: "sketch", syllabus: "in", repeats: ["2023-24-Q1a", "2021-22-Q6b", "2020-21-Q6a", "2018-19-Q8c", "2017-18-Q8a", "2015-16-Q1a", "2014-15-Q4a"],
          text: String.raw`With a neat sketch, write the working principle of an absorption refrigeration system. Derive necessary equations.`,
          solution: String.raw`### Sketch
![Absorption refrigeration cycle: generator, condenser, expansion valve, evaporator, absorber and solution pump; high-pressure and low-pressure sides](fig/2013-14-Q4b-sketch.svg)

### Working principle (NH₃–H₂O; LiBr–H₂O works the same way with water as refrigerant)
1. **Evaporator (low P):** liquid NH₃ boils at $T_C$, absorbing $Q_C$ from the cold space.
2. **Absorber (low P):** the vapour dissolves in a weak NH₃–water solution. The heat of absorption is removed by cooling water at about $T_S$.
3. **Pump:** the strong solution is pumped to high pressure. Pumping a liquid needs very little work.
4. **Generator (high P):** heat $Q_H$ at $T_H$ drives NH₃ out of solution (with a rectifier to remove water). The weak solution returns to the absorber through a throttle, usually via a solution heat exchanger.
5. **Condenser (high P):** the NH₃ condenses at $T_S$.
6. **Expansion valve:** the liquid is throttled to the evaporator pressure.

The absorber, pump and generator together act as a **heat-driven compressor**. This replaces the work input of a vapour-compression cycle with heat.

### Equations
1. **Overall energy balance** (steady state):
$$Q_H + Q_C + W_{pump} = Q_{absorber} + Q_{condenser}$$
2. **Best possible performance.** The heat $Q_H$ runs a Carnot engine between $T_H$ and $T_S$; its work drives a Carnot refrigerator between $T_C$ and $T_S$:
$$W = Q_H\frac{T_H - T_S}{T_H} = Q_C\frac{T_S - T_C}{T_C}$$
$$\left(\frac{Q_H}{Q_C}\right)_{min} = \frac{T_S - T_C}{T_C}\cdot\frac{T_H}{T_H - T_S}, \qquad \mathrm{COP}_{max} = \frac{Q_C}{Q_H} = \frac{T_C}{T_S - T_C}\cdot\frac{T_H - T_S}{T_H}$$
3. **Example:** $T_H$ = 100 °C, $T_S$ = 30 °C, $T_C$ = −10 °C gives $(Q_H/Q_C)_{min}$ = 0.81. Real units achieve $Q_C/Q_H$ ≈ 0.5–0.7. They are worthwhile when waste heat, steam or solar heat is cheap.`,
          answer: String.raw`Absorber + pump + generator replace the compressor (heat-driven). Q_H + Q_C + W_pump = Q_abs + Q_cond; Carnot limit: (Q_H/Q_C)min = [(T_S − T_C)/T_C]·[T_H/(T_H − T_S)] (0.81 for 100/30/−10 °C).` },
        { id: "2013-14-Q4c", label: "(c)", marks: "10",
          topic: "reaction-equilibria", sub: "Ethylene oxidation, two reactions from 2 mol C₂H₄ + 3 mol O₂: yᵢ(ε₁, ε₂)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`A system initially containing 2 mol C₂H₄ and 3 mol O₂ undergoing the reactions

$$\mathrm{C_2H_4(g) + \tfrac12O_2(g) \rightarrow ((CH_2)_2)O(g)}$$

$$\mathrm{C_2H_4(g) + 3O_2(g) \rightarrow 2CO_2(g) + 2H_2O(g)}$$

Develop expression for the mole fractions of the reacting species as function of the reaction coordinates.`,
          solution: String.raw`**Given:** initially 2 mol C₂H₄ and 3 mol O₂.
- Reaction 1: C₂H₄ + ½O₂ → (CH₂)₂O (ethylene oxide), $\nu_1 = 1 - 1 - \tfrac12 = -\tfrac12$.
- Reaction 2: C₂H₄ + 3O₂ → 2CO₂ + 2H₂O, $\nu_2 = 2 + 2 - 1 - 3 = 0$.

1. **Mole numbers** ($n_i = n_{i0} + \sum_j\nu_{i,j}\varepsilon_j$):

| Species | $\nu_{i,1}$ | $\nu_{i,2}$ | $n_i$ |
|---|---|---|---|
| C₂H₄ | −1 | −1 | $2 - \varepsilon_1 - \varepsilon_2$ |
| O₂ | −½ | −3 | $3 - \tfrac12\varepsilon_1 - 3\varepsilon_2$ |
| (CH₂)₂O | 1 | 0 | $\varepsilon_1$ |
| CO₂ | 0 | 2 | $2\varepsilon_2$ |
| H₂O | 0 | 2 | $2\varepsilon_2$ |
| Total | −½ | 0 | $n = 5 - \tfrac12\varepsilon_1$ |

2. **Mole fractions:**
$$y_{C_2H_4} = \frac{2 - \varepsilon_1 - \varepsilon_2}{5 - \frac12\varepsilon_1}, \qquad y_{O_2} = \frac{3 - \frac12\varepsilon_1 - 3\varepsilon_2}{5 - \frac12\varepsilon_1}, \qquad y_{(CH_2)_2O} = \frac{\varepsilon_1}{5 - \frac12\varepsilon_1}$$
$$y_{CO_2} = y_{H_2O} = \frac{2\varepsilon_2}{5 - \frac12\varepsilon_1}$$
   Check: the numerators sum to $5 - \tfrac12\varepsilon_1$ ✓.

3. **Limits on the extents** (all $n_i \ge 0$): $\varepsilon_1, \varepsilon_2 \ge 0$; $\varepsilon_1 + \varepsilon_2 \le 2$; $\tfrac12\varepsilon_1 + 3\varepsilon_2 \le 3$. For example, if only reaction 1 occurs, $\varepsilon_1 \le 2$; if only reaction 2 occurs, $\varepsilon_2 \le 1$ (O₂ limiting).`,
          answer: String.raw`n_C₂H₄ = 2 − ε₁ − ε₂, n_O₂ = 3 − ε₁/2 − 3ε₂, n_EO = ε₁, n_CO₂ = n_H₂O = 2ε₂, n = 5 − ε₁/2; yᵢ = nᵢ/(5 − ε₁/2).` }
      ] },
    { id: "2013-14-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q5a", label: "(a)", marks: "15",
          topic: "vle-intro", sub: "Which of five binary systems can be modelled by Raoult's law",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Of the following fine binary liquid/vapor systems, which can be approximately modeled by Raoult's law? Explain your answer. (Hint: Table B.1 of App B may be useful)

i) Benzene/toluene at 1 atm.

ii) n-Hexane/n-heptane at 25 bar

iii) Hydrogen/propane at 200K

iv) Iso-Octane/n-Octane at 373.15 K

v) Water/n-decane at 1 bar.`,
          solution: String.raw`**Raoult's law** $y_iP = x_iP_i^{sat}$ needs two conditions (SVNA §10.4):
1. **Ideal-gas vapour**: low to moderate pressure, well below the critical pressures.
2. **Ideal liquid solution**: chemically similar species (similar size and nature, e.g. members of a homologous series), miscible in all proportions.

It also needs every species to have a vapour pressure, i.e. **T below each species' critical temperature** (Raoult's law cannot be applied to a supercritical species).

**Data (SVNA Table B.1):**

| Species | $T_c$ (K) | $P_c$ (bar) | $T_n$ (K) |
|---|---|---|---|
| Benzene | 562.2 | 48.98 | 353.2 |
| Toluene | 591.8 | 41.06 | 383.8 |
| n-Hexane | 507.6 | 30.25 | 341.9 |
| n-Heptane | 540.2 | 27.40 | 371.6 |
| Hydrogen | 33.19 | 13.13 | 20.3 |
| Propane | 369.8 | 42.48 | 231.1 |
| Iso-octane | 544.0 | 25.68 | 372.4 |
| n-Octane | 568.7 | 24.90 | 398.8 |
| Water | 647.1 | 220.55 | 373.15 |
| n-Decane | 617.7 | 21.10 | 447.3 |

**(i) Benzene/toluene at 1 atm: Yes.** Both are aromatic and almost identical in structure, so the liquid solution is nearly ideal. At 1 atm the vapour is nearly an ideal gas ($P_r$ ≈ 0.02). This is the textbook example of a Raoult's-law system.

**(ii) n-Hexane/n-heptane at 25 bar: No.** The liquid would be close to ideal (adjacent paraffins), but 25 bar is near the critical pressures (30.25 and 27.40 bar; $P_r$ ≈ 0.8–0.9). The equilibrium temperature would be near the critical temperatures (above 480 K), so the vapour is far from an ideal gas and the system is in the near-critical region. A φ–φ (EOS) or γ–φ treatment is needed.

**(iii) Hydrogen/propane at 200 K: No.** 200 K is far above the critical temperature of hydrogen (33.2 K). Hydrogen is a supercritical gas with no vapour pressure, so Raoult's law cannot be written for it. Hydrogen only dissolves slightly in liquid propane; use Henry's law for H₂ (and Raoult's law only for propane, the nearly pure solvent).

**(iv) Iso-octane/n-octane at 373.15 K: Yes.** These are isomeric C₈ paraffins, so the solution is nearly ideal. At 373.15 K both vapour pressures are below about 1 bar (normal boiling points 372.4 K and 398.8 K), so the vapour is an ideal gas.

**(v) Water/n-decane at 1 bar: No.** A polar, hydrogen-bonding liquid and a non-polar hydrocarbon are essentially **immiscible**. The system forms two liquid phases (LLE/VLLE), with enormous activity coefficients. Raoult's law, which assumes a single ideal liquid phase, fails completely; each liquid exerts its own vapour pressure instead.

**Answer:** only **(i) benzene/toluene at 1 atm** and **(iv) iso-octane/n-octane at 373.15 K** can be modelled approximately by Raoult's law.`,
          answer: String.raw`(i) Yes — similar aromatics at low P. (ii) No — 25 bar is near Pc (P_r ≈ 0.8–0.9), near-critical, non-ideal vapour. (iii) No — H₂ is supercritical (Tc = 33.2 K ≪ 200 K), no Pˢᵃᵗ; use Henry's law. (iv) Yes — isomeric C₈ paraffins, P ≈ 1 bar. (v) No — water and n-decane are immiscible (two liquid phases).` },
        { id: "2013-14-Q5b", label: "(b)", marks: "20",
          topic: "vle-intro", sub: "Modified Raoult, ln γ = 1.8x²: z₁ range at x₁ = 0.65, P and y₁, azeotrope",
          type: "numerical", syllabus: "in", repeats: ["2017-18-Q1b", "2015-16-Q6a"],
          text: String.raw`A binary system of species 1 and 2 consists of vapor and liquid phase in equilibrium at temperature T, for which

$$\ln\gamma_1 = 1.8x_2^2 \qquad \ln\gamma_2 = 1.8x_1^2$$

$$P_1^{sat} = 1.24\ \mathrm{bar} \qquad P_2^{sat} = 0.89\ \mathrm{bar}$$

(i) for what range of values of the overall mole fraction $z_1$ can this two-phase system exist with a liquid mole fraction $x_1 = 0.65$.

(ii) what is the pressure P and vapor mole fraction $y_1$ within this range?

(iii) What are the pressure and composition of the azeotrope at temperature T?`,
          solution: String.raw`**Given:** $\ln\gamma_1 = 1.8x_2^2$, $\ln\gamma_2 = 1.8x_1^2$; $P_1^{sat}$ = 1.24 bar, $P_2^{sat}$ = 0.89 bar; $x_1$ = 0.65 (SVNA Problem 10.x).

**Assumptions:** modified Raoult's law, $y_iP = x_i\gamma_iP_i^{sat}$.

1. **Activity coefficients at $x_1$ = 0.65** ($x_2$ = 0.35):
$$\gamma_1 = e^{1.8(0.35)^2} = e^{0.2205} = 1.2467, \qquad \gamma_2 = e^{1.8(0.65)^2} = e^{0.7605} = 2.1393$$

2. **(ii) Pressure and vapour composition.** At fixed T and $x_1$, the phase rule (F = 2 − 2 + 2 = 2) fixes P and $y_1$:
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat} = 0.65(1.2467)(1.24) + 0.35(2.1393)(0.89) = 1.0048 + 0.6664 = 1.671\ \mathrm{bar}$$
$$y_1 = \frac{1.0048}{1.671} = 0.601$$

3. **(i) Range of $z_1$.** With $x_1$ and $y_1$ fixed, the material balance $z_1 = x_1(1 - V) + y_1V$ with $0 \le V \le 1$ places $z_1$ between $y_1$ and $x_1$:
$$\boxed{0.601 \le z_1 \le 0.65}$$
   At $z_1$ = 0.65 the system is at its bubble point (V = 0). At $z_1$ = 0.601 it is at its dew point (V = 1). Throughout this range P = 1.671 bar and $y_1$ = 0.601; only the vapour fraction $V = (z_1 - 0.65)/(0.601 - 0.65)$ changes. Since $y_1 < x_1$, the liquid at $x_1$ = 0.65 is richer in 1 than its vapour, so this composition lies on the far side of the azeotrope.

4. **(iii) Azeotrope.** At the azeotrope $y_i = x_i$, so $\gamma_1P_1^{sat} = \gamma_2P_2^{sat}$:
$$\ln\frac{\gamma_1}{\gamma_2} = 1.8(x_2^2 - x_1^2) = 1.8(1 - 2x_1) = \ln\frac{P_2^{sat}}{P_1^{sat}} = \ln\frac{0.89}{1.24} = -0.3316$$
$$1 - 2x_1 = -0.1842 \;\Rightarrow\; x_1^{az} = y_1^{az} = 0.592$$
   Check that it exists: $\alpha_{12} = (P_1^{sat}/P_2^{sat})e^{1.8(1 - 2x_1)}$ is 8.43 at $x_1$ = 0 and 0.230 at $x_1$ = 1, so it passes through 1 ✓.
$$\gamma_1^{az} = e^{1.8(0.4079)^2} = 1.3491, \qquad P^{az} = \gamma_1^{az}P_1^{sat} = 1.3491 \times 1.24 = 1.673\ \mathrm{bar}$$
   Check: $\gamma_2^{az}P_2^{sat} = e^{1.8(0.5921)^2}(0.89) = 1.8797 \times 0.89 = 1.673$ bar ✓. The positive deviations ($\gamma_i > 1$) give a **maximum-pressure azeotrope**. P = 1.671 bar at $x_1$ = 0.65 is just below this maximum, as expected.

**Result:** (i) $0.601 \le z_1 \le 0.65$; (ii) P = 1.671 bar, $y_1$ = 0.601; (iii) azeotrope at $x_1 = y_1$ = 0.592, P = 1.673 bar.`,
          answer: String.raw`γ₁ = 1.247, γ₂ = 2.139 at x₁ = 0.65; P = 1.671 bar, y₁ = 0.601 ⇒ (i) 0.601 ≤ z₁ ≤ 0.65; (ii) P = 1.671 bar, y₁ = 0.601; (iii) 1.8(1 − 2x₁) = ln(0.89/1.24) ⇒ x₁^az = 0.592, P^az = 1.673 bar (maximum-pressure azeotrope).` }
      ] },
    { id: "2013-14-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q6a", label: "(a)", marks: "8",
          topic: "solution-theory", sub: "Definition of fugacity and its physical significance",
          type: "theory", syllabus: "in", repeats: ["2015-16-Q7a"],
          text: String.raw`Define fugacity. What is its physical significance?`,
          solution: String.raw`### Definition
1. **Ideal gas.** For a pure ideal gas at constant T, $dG_i^{ig} = V_i^{ig}dP = RT\,d\ln P$, which integrates to
$$G_i^{ig} = \Gamma_i(T) + RT\ln P$$

2. **Real fluid.** Fugacity $f_i$ (units of pressure) is defined so that a real fluid keeps the same simple form:
$$G_i \equiv \Gamma_i(T) + RT\ln f_i, \qquad \text{with}\qquad \lim_{P\to0}\frac{f_i}{P} = 1$$
   The **fugacity coefficient** is $\phi_i = f_i/P$. Subtracting the two equations gives
$$\ln\phi_i = \frac{G_i - G_i^{ig}}{RT} = \frac{G_i^R}{RT} = \int_0^P(Z_i - 1)\frac{dP}{P}\quad(\text{const }T)$$

3. **Species in solution.** By analogy, $\mu_i \equiv \Gamma_i(T) + RT\ln\hat f_i$, with $\hat\phi_i = \hat f_i/(y_iP)$. For an ideal-gas mixture $\hat f_i^{ig} = y_iP$ (the partial pressure).

### Physical significance
- **A "corrected" or effective pressure.** For an ideal gas f = P; for a real fluid, f is the pressure an ideal gas would need to have the same Gibbs energy (chemical potential) at that T. The coefficient φ measures the departure from ideal-gas behaviour: φ < 1 when attractions dominate (Z < 1), φ > 1 when repulsions dominate.
- **Escaping tendency.** The name comes from the Latin *fugere*, to flee. f measures a species' tendency to escape from a phase; material moves from the phase of higher $\hat f_i$ to the one of lower $\hat f_i$.
- **Equilibrium criterion.** Equal chemical potentials at the same T are equivalent to equal fugacities:
$$\hat f_i^\alpha = \hat f_i^\beta = \cdots = \hat f_i^\pi \quad(i = 1, 2, \ldots, N)$$
   This is far more convenient than μ: μ → −∞ as P → 0 and has no absolute value, whereas f is finite and measurable in pressure units. All VLE, LLE and SVE calculations (Raoult's law, gamma/phi) start from this equation.
- **Link to properties:** $\ln\phi_i = G_i^R/RT$, obtainable from PVT data, an EOS or generalized correlations.`,
          answer: String.raw`Gᵢ = Γᵢ(T) + RT ln fᵢ with fᵢ/P → 1 as P → 0 (μᵢ = Γᵢ + RT ln f̂ᵢ in solution); φᵢ = fᵢ/P, ln φᵢ = Gᵢᴿ/RT = ∫(Z − 1)dP/P. Significance: an effective (corrected) pressure / escaping tendency; equality of f̂ᵢ in all phases is the phase-equilibrium criterion.` },
        { id: "2013-14-Q6b", label: "(b)", marks: "27",
          topic: "solution-applications", sub: "Gᴱ/RT = (−2.6x₁ − 1.8x₂)x₁x₂: ln γ₁, ln γ₂, Gibbs–Duhem check, plot with ln γ∞",
          type: "derivation", syllabus: "in", repeats: ["2018-19-Q4a", "2015-16-Q7b"],
          text: String.raw`The excess Gibbs energy of a binary liquid mixture at T and P is given by

$$\frac{G^E}{RT} = (-2.6x_1 - 1.8x_2)\,x_1x_2$$

(i) Find expressions for $\ln\gamma_1$ and $\ln\gamma_2$ at T and P

(ii) Show that these expressions satisfy the Gibbs/Duhem equation.

(iii) Plat $\ln\gamma_1$ and $\ln\gamma_2$ versus $x_1$, Label points $\ln\gamma_1^\alpha$, $\ln\gamma_2^\alpha$ and show their values.`,
          solution: String.raw`**Given:** the Margules form $G^E/(x_1x_2RT) = A_{21}x_1 + A_{12}x_2$ with $A_{21}$ = −2.6 and $A_{12}$ = −1.8 (SVNA Problem 11.x). The printed "$\ln\gamma_i^\alpha$" in (iii) means $\ln\gamma_i^\infty$.

1. **Write $G^E/RT$ in terms of $x_1$** ($x_2 = 1 - x_1$):
$$\frac{G^E}{RT} = (-1.8 - 0.8x_1)(x_1 - x_1^2) = -1.8x_1 + x_1^2 + 0.8x_1^3$$
$$\frac{d(G^E/RT)}{dx_1} = -1.8 + 2x_1 + 2.4x_1^2$$

2. **(i) Activity coefficients.** $\ln\gamma_i$ is the partial property of $G^E/RT$, so the binary relations $\bar M_1 = M + x_2\,dM/dx_1$ and $\bar M_2 = M - x_1\,dM/dx_1$ apply:
$$\ln\gamma_1 = (-1.8x_1 + x_1^2 + 0.8x_1^3) + (1 - x_1)(-1.8 + 2x_1 + 2.4x_1^2) = -1.8 + 2.0x_1 + 1.4x_1^2 - 1.6x_1^3$$
$$\ln\gamma_2 = (-1.8x_1 + x_1^2 + 0.8x_1^3) - x_1(-1.8 + 2x_1 + 2.4x_1^2) = -x_1^2 - 1.6x_1^3$$
   In the standard Margules form these are
$$\boxed{\ln\gamma_1 = x_2^2(-1.8 - 1.6x_1)}, \qquad \boxed{\ln\gamma_2 = x_1^2(-2.6 + 1.6x_2)}$$
   using $\ln\gamma_1 = x_2^2[A_{12} + 2(A_{21} - A_{12})x_1]$ and $\ln\gamma_2 = x_1^2[A_{21} + 2(A_{12} - A_{21})x_2]$. Check: $x_1\ln\gamma_1 + x_2\ln\gamma_2 = -1.8x_1 + x_1^2 + 0.8x_1^3 = G^E/RT$ ✓.

3. **(ii) Gibbs–Duhem** at constant T, P: $x_1\,d\ln\gamma_1/dx_1 + x_2\,d\ln\gamma_2/dx_1 = 0$.
$$\frac{d\ln\gamma_1}{dx_1} = 2.0 + 2.8x_1 - 4.8x_1^2, \qquad \frac{d\ln\gamma_2}{dx_1} = -2.0x_1 - 4.8x_1^2$$
$$x_1(2.0 + 2.8x_1 - 4.8x_1^2) + (1 - x_1)(-2.0x_1 - 4.8x_1^2) = 2x_1 + 2.8x_1^2 - 4.8x_1^3 - 2x_1 - 4.8x_1^2 + 2x_1^2 + 4.8x_1^3 = 0\ \checkmark$$
   Also, at $x_1$ = 1, $d\ln\gamma_1/dx_1 = 2 + 2.8 - 4.8 = 0$, and at $x_1$ = 0, $d\ln\gamma_2/dx_1 = 0$, as Gibbs–Duhem requires.

4. **(iii) Values and infinite-dilution limits:**
$$\ln\gamma_1^\infty = \ln\gamma_1(x_1 = 0) = -1.8, \qquad \ln\gamma_2^\infty = \ln\gamma_2(x_1 = 1) = -2.6$$
   (so $\gamma_1^\infty$ = 0.165 and $\gamma_2^\infty$ = 0.074).

| $x_1$ | 0 | 0.2 | 0.4 | 0.5 | 0.6 | 0.8 | 1.0 |
|---|---|---|---|---|---|---|---|
| $\ln\gamma_1$ | −1.800 | −1.357 | −0.878 | −0.650 | −0.442 | −0.123 | 0 |
| $\ln\gamma_2$ | 0 | −0.053 | −0.262 | −0.450 | −0.706 | −1.459 | −2.600 |

![ln γ1 and ln γ2 versus x1 for GE/RT = (−2.6x1 − 1.8x2)x1x2, with ln γ1∞ = −1.8 and ln γ2∞ = −2.6 marked](fig/2013-14-Q6b-sol.svg)

   Both $\ln\gamma_i$ are negative (strong negative deviations, as for systems with hydrogen bonding between unlike molecules). Each curve reaches zero with zero slope at its own pure-species end.

**Result:** $\ln\gamma_1 = x_2^2(-1.8 - 1.6x_1)$, $\ln\gamma_2 = x_1^2(-2.6 + 1.6x_2)$; Gibbs–Duhem satisfied; $\ln\gamma_1^\infty$ = −1.8, $\ln\gamma_2^\infty$ = −2.6.`,
          answer: String.raw`Margules with A₁₂ = −1.8, A₂₁ = −2.6: ln γ₁ = x₂²(−1.8 − 1.6x₁) = −1.8 + 2x₁ + 1.4x₁² − 1.6x₁³, ln γ₂ = x₁²(−2.6 + 1.6x₂) = −x₁² − 1.6x₁³; x₁dlnγ₁ + x₂dlnγ₂ = 0 ✓; ln γ₁^∞ = −1.8, ln γ₂^∞ = −2.6.` }
      ] },
    { id: "2013-14-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q7a", label: "(a)", marks: "18",
          topic: "solution-applications", sub: "Henry's law at infinite dilution and the Lewis/Randall rule for the solvent via Gibbs–Duhem",
          type: "derivation", syllabus: "in", repeats: ["2014-15-Q6a"],
          text: String.raw`"Henry's law applies to a species as it approaches infinite dilution in a binary solution, and the Gibbs/Duhem equation insures validity of the Lewis/Randall rule for the other species at it approaches purity"- justify this statement with necessary equations.`,
          solution: String.raw`### 1. Henry's law at infinite dilution
Consider $\hat f_1$ as a function of $x_1$ at constant T and P. It runs from $\hat f_1$ = 0 at $x_1$ = 0 to $\hat f_1 = f_1$ (pure 1) at $x_1$ = 1. Its limiting slope at $x_1 \to 0$ is finite; it defines **Henry's constant**:
$$\mathcal H_1 \equiv \lim_{x_1\to0}\frac{\hat f_1}{x_1} = \left(\frac{d\hat f_1}{dx_1}\right)_{x_1=0}$$
So as species 1 approaches infinite dilution, its fugacity becomes proportional to its mole fraction:
$$\hat f_1 = x_1\mathcal H_1 \qquad (x_1 \to 0)\qquad\textbf{Henry's law}$$
In terms of activity coefficients, $\hat f_1 = x_1\gamma_1f_1$, so $\mathcal H_1 = \gamma_1^\infty f_1$. Henry's law holds because $\gamma_1$ tends to a finite constant $\gamma_1^\infty$ as $x_1 \to 0$: the molecules of 1 are then surrounded only by molecules of 2, and their environment no longer changes with $x_1$.

### 2. Gibbs–Duhem equation in terms of fugacities
At constant T and P, $x_1\,d\mu_1 + x_2\,d\mu_2 = 0$ with $d\mu_i = RT\,d\ln\hat f_i$:
$$x_1\frac{d\ln\hat f_1}{dx_1} + x_2\frac{d\ln\hat f_2}{dx_1} = 0$$
Since $dx_2 = -dx_1$:
$$x_1\frac{d\ln\hat f_1}{dx_1} = x_2\frac{d\ln\hat f_2}{dx_2}$$

### 3. Henry's law for 1 implies the Lewis/Randall rule for 2
- In the Henry's-law limit, $\ln\hat f_1 = \ln x_1 + \ln\mathcal H_1$, so
$$\lim_{x_1\to0}x_1\frac{d\ln\hat f_1}{dx_1} = 1$$
- The same limit is $x_2 \to 1$, so the Gibbs–Duhem equation gives
$$\lim_{x_2\to1}x_2\frac{d\ln\hat f_2}{dx_2} = \lim_{x_2\to1}\frac{1}{\hat f_2}\frac{d\hat f_2}{dx_2} = 1$$
- At $x_2$ = 1, $\hat f_2 = f_2$, hence
$$\left(\frac{d\hat f_2}{dx_2}\right)_{x_2=1} = f_2$$
- The line through the origin with this slope, $\hat f_2 = x_2f_2$, is therefore tangent to the $\hat f_2$ curve at $x_2$ = 1:
$$\hat f_2 = x_2f_2 \qquad (x_2 \to 1)\qquad\textbf{Lewis/Randall rule}$$
So the Gibbs–Duhem equation guarantees that whenever the solute obeys Henry's law, the solvent obeys the Lewis/Randall rule (ideal-solution behaviour, $\gamma_2 \to 1$) in the same limit.

### 4. The same result in activity coefficients
$x_1\,d\ln\gamma_1 + x_2\,d\ln\gamma_2 = 0$. As $x_2 \to 1$, $d\ln\gamma_2/dx_1 = -(x_1/x_2)\,d\ln\gamma_1/dx_1 \to 0$ (since $d\ln\gamma_1/dx_1$ is finite at $x_1$ = 0). So $\ln\gamma_2 \to 0$ with zero slope, and $\gamma_2 \to 1$.

### 5. Consequences
- Two ideal behaviours appear on one $\hat f_1$–$x_1$ diagram: the **Lewis/Randall line** $x_1f_1$ (tangent at $x_1$ = 1) and the **Henry's-law line** $x_1\mathcal H_1$ (tangent at $x_1$ = 0). The real curve lies between them.
- For a dilute solution of a gas (1) in a liquid (2) at low pressure this gives the familiar pair $y_1P = x_1\mathcal H_1$ and $y_2P = x_2P_2^{sat}$ (Raoult's law for the solvent), as used in Q8(a).`,
          answer: String.raw`𝓗₁ = lim(x₁→0) f̂₁/x₁ (finite slope; 𝓗₁ = γ₁^∞f₁) ⇒ f̂₁ = x₁𝓗₁ at infinite dilution. Gibbs–Duhem: x₁ d ln f̂₁/dx₁ = x₂ d ln f̂₂/dx₂; with Henry's law the left side → 1, so (df̂₂/dx₂)/f̂₂ → 1 at x₂ = 1, i.e. df̂₂/dx₂ = f₂ and f̂₂ = x₂f₂ (Lewis/Randall) as x₂ → 1 (γ₂ → 1 with zero slope).` },
        { id: "2013-14-Q7b", label: "(b)", marks: "10",
          topic: "solution-applications", sub: "Sketching ln γ₁ and ln γ₂ from excess-property plots of two binaries",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Figure for Question No. 7(b) presents the plots of excess properties of two binary mixtures. Draw the corresponding plots of $\ln\gamma_1$ and $\ln\gamma_2$ vs $x_1$ qualitatively. (Hints: for $x_i \to 1$, $\ln\gamma_i \to 0$ and i generally have the same sign as $G^E$.)

Figure for Question 7(b) (attached to the paper): excess properties at 323.15 K, in J/mol against $x_1$. (i) Chloroform(1)/n-heptane(2): $H^E$, $TS^E$ and $G^E$ all positive, with maxima near $x_1$ = 0.5 of about 750, 500 and 300 J/mol. (ii) Acetone(1)/chloroform(2): $G^E$, $TS^E$ and $H^E$ all negative, with minima near $x_1$ = 0.5 of about −600, −1300 and −1900 J/mol.`,
          solution: String.raw`**Rules used:**
1. $G^E/RT = x_1\ln\gamma_1 + x_2\ln\gamma_2$. The $\ln\gamma_i$ are the partial properties of $G^E/RT$, so they are the tangent intercepts of the $G^E/RT$ curve: $\ln\gamma_1$ at $x_1$ = 1 and $\ln\gamma_2$ at $x_1$ = 0.
2. As $x_i \to 1$, $\ln\gamma_i \to 0$ **with zero slope** (Gibbs–Duhem / Lewis/Randall rule).
3. As $x_i \to 0$, $\ln\gamma_i \to \ln\gamma_i^\infty$, a finite value with the same sign as $G^E$. Its magnitude is roughly $4(G^E/RT)_{x_1=0.5}$ for a nearly symmetric curve, since then $G^E/RT = Ax_1x_2$ and $\ln\gamma_i^\infty = A$.
4. Only $G^E$ fixes the γ's; $H^E$ and $TS^E$ tell how they change with temperature.

**(i) Chloroform(1)/n-heptane(2): $G^E > 0$** (max about 300 J/mol, so $G^E/RT$ ≈ 0.11 at $x_1$ = 0.5 and T = 323 K).
- **Positive deviations:** $\ln\gamma_1 > 0$ and $\ln\gamma_2 > 0$ everywhere.
- $\ln\gamma_1$ falls from $\ln\gamma_1^\infty$ ≈ 0.4–0.5 at $x_1$ = 0 to 0 at $x_1$ = 1, flat at the end. $\ln\gamma_2$ rises from 0 (flat) at $x_1$ = 0 to $\ln\gamma_2^\infty$ ≈ 0.4 at $x_1$ = 1. The curves cross near the middle.
- $H^E > 0$ (endothermic mixing: breaking chloroform–chloroform interactions), so the γ's decrease as T rises.

**(ii) Acetone(1)/chloroform(2): $G^E < 0$** (min about −600 J/mol, so $G^E/RT$ ≈ −0.22 at $x_1$ = 0.5).
- **Negative deviations:** $\ln\gamma_1 < 0$ and $\ln\gamma_2 < 0$ everywhere.
- $\ln\gamma_1$ rises from $\ln\gamma_1^\infty$ ≈ −0.8 to −0.9 at $x_1$ = 0 to 0 at $x_1$ = 1. $\ln\gamma_2$ falls from 0 at $x_1$ = 0 to $\ln\gamma_2^\infty$ ≈ −0.8 at $x_1$ = 1. Both are flat at their pure ends.
- The cause is hydrogen bonding between the C–H of chloroform and the C=O of acetone. Unlike molecules attract more strongly than like ones, so $H^E$ is strongly negative (exothermic mixing). The large negative $\ln\gamma$'s produce a maximum-boiling (minimum-pressure) azeotrope.

![Qualitative ln γ1 and ln γ2 versus x1: (i) chloroform/n-heptane, both positive, falling to zero at their pure ends; (ii) acetone/chloroform, both negative](fig/2013-14-Q7b-sol.svg)

The dashed curve in each panel is $G^E/RT$, which lies between the two $\ln\gamma$ curves and has the same sign.`,
          answer: String.raw`(i) Chloroform/n-heptane, Gᴱ > 0: ln γ₁, ln γ₂ > 0; ln γ₁ falls from ln γ₁^∞ ≈ 0.45 to 0 (zero slope) at x₁ = 1; ln γ₂ rises from 0 at x₁ = 0 to ≈ 0.4 at x₁ = 1. (ii) Acetone/chloroform, Gᴱ < 0: mirror image below zero, ln γᵢ^∞ ≈ −0.8 to −0.9 (H-bonding, negative deviations).` },
        { id: "2013-14-Q7c", label: "(c)", marks: "7",
          topic: "solution-applications", sub: "Gibbs–Duhem consistency test for systematic error in activity-coefficient data",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is the basic criterion to check whether the experimental values of activity coefficients contain systematic error?`,
          solution: String.raw`**Basic criterion: the Gibbs/Duhem equation.** The activity coefficients of a binary at constant T (and nearly constant P) are not independent. They must satisfy
$$x_1\frac{d\ln\gamma_1}{dx_1} + x_2\frac{d\ln\gamma_2}{dx_1} = 0$$
Data that violate it contain systematic error. Raw data (P, x, y) are over-determined: P–x alone fixes the γ's through Gibbs–Duhem, so measured $y_1$ provides the check.

**Consistency test (SVNA §12.1):**
1. Calculate experimental $\ln\gamma_1^*$ and $\ln\gamma_2^*$ from the data ($\gamma_i^* = y_iP/x_iP_i^{sat}$) and $(G^E/RT)^*$.
2. Fit a correlation for $G^E/RT$ (e.g. Margules) by **Barker's method**, i.e. to the P–x data. Its $\ln\gamma_i$ satisfy Gibbs–Duhem exactly.
3. Define residuals $\delta\ln(\gamma_1/\gamma_2) = \ln(\gamma_1/\gamma_2) - \ln(\gamma_1^*/\gamma_2^*)$. It can be shown that
$$\frac{d\,\delta(G^E/RT)}{dx_1} = \delta\ln\frac{\gamma_1}{\gamma_2} - \left(x_1\frac{d\ln\gamma_1^*}{dx_1} + x_2\frac{d\ln\gamma_2^*}{dx_1}\right)$$
   The bracket is exactly the Gibbs–Duhem residual of the experimental data. Since the correlation fits $G^E/RT$ well, $d\,\delta(G^E/RT)/dx_1 \approx 0$, so the residuals $\delta\ln(\gamma_1/\gamma_2)$ directly measure the deviation from Gibbs–Duhem.
4. **Criterion:** the data are consistent if the residuals $\delta\ln(\gamma_1/\gamma_2)$ **scatter randomly about zero** (mean absolute value ≲ 0.03). A systematic trend, or residuals all of one sign, means systematic error, typically in $y_1$.

**Related area test (Redlich–Kister):** integrating $d(G^E/RT) = \ln(\gamma_1/\gamma_2)\,dx_1$ from $x_1$ = 0 to 1, where $G^E$ = 0 at both ends, gives
$$\int_0^1\ln\frac{\gamma_1}{\gamma_2}\,dx_1 = 0$$
The areas above and below the axis on a $\ln(\gamma_1/\gamma_2)$–$x_1$ plot must be equal. This is a necessary but weaker test, because errors can cancel.`,
          answer: String.raw`The Gibbs/Duhem equation x₁ d ln γ₁/dx₁ + x₂ d ln γ₂/dx₁ = 0. Test: fit Gᴱ/RT to P–x (Barker), compute residuals δ ln(γ₁/γ₂); consistent data scatter randomly about zero (|mean| ≲ 0.03), systematic trends mean systematic error. Area test: ∫₀¹ ln(γ₁/γ₂)dx₁ = 0.` }
      ] },
    { id: "2013-14-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q8a", label: "(a)", marks: "15",
          topic: "vle-intro", sub: "Dilute solute: Henry's law for 1 and Raoult's law for 2 at 298.15 K, 1 bar",
          type: "numerical", syllabus: "in", repeats: ["2015-16-Q5b"],
          text: String.raw`A concentrated binary solution containing mostly species 2 (but $x_2 \neq 1$) is in equilibrium with a vapor phase containing both species 1 and 2. The pressure of this two-phase system is 1 bar; the temperature is 298.15 K. Determine from the following data good estimates of $x_1$ and $y_1$

$$\mathcal H_1 = 200\ \mathrm{bar} \qquad P_2^{sat} = 0.10\ \mathrm{bar}$$

State and justify all assumptions.`,
          solution: String.raw`**Given:** T = 298.15 K, P = 1 bar; $\mathcal H_1$ = 200 bar; $P_2^{sat}$ = 0.10 bar. Liquid is mostly species 2.

**Find:** $x_1$ and $y_1$.

**Assumptions (and why):**
- **Vapour is an ideal gas:** P = 1 bar is low, so $\hat f_i^v = y_iP$.
- **Species 1 (dilute solute) obeys Henry's law,** $\hat f_1^l = x_1\mathcal H_1$: it is at high dilution, $x_1 \to 0$.
- **Species 2 (nearly pure solvent) obeys the Lewis/Randall rule,** $\hat f_2^l = x_2f_2$. Gibbs–Duhem guarantees this when 1 obeys Henry's law (Q7a). With $f_2 \approx P_2^{sat}$ (the Poynting factor is negligible at 1 bar), this is Raoult's law for 2.

1. **Equilibrium equations:**
$$y_1P = x_1\mathcal H_1, \qquad y_2P = x_2P_2^{sat}$$

2. **First estimate.** Since $x_2$ ≈ 1:
$$y_2 = \frac{x_2P_2^{sat}}{P} \approx \frac{0.10}{1} = 0.10 \;\Rightarrow\; y_1 = 0.90$$
$$x_1 = \frac{y_1P}{\mathcal H_1} = \frac{0.90 \times 1}{200} = 0.0045$$

3. **Refine** with $x_2 = 1 - 0.0045 = 0.9955$:
$$y_2 = 0.9955 \times 0.10 = 0.09955, \qquad y_1 = 0.90045, \qquad x_1 = \frac{0.90045}{200} = 0.004502$$
   The change is negligible, and a further iteration leaves the values unchanged.
   The same result comes directly from adding the two equations: $P = x_1\mathcal H_1 + (1 - x_1)P_2^{sat}$, so $x_1 = (1 - 0.10)/(200 - 0.10) = 0.004502$.

4. **Check of assumptions:** $x_1$ = 0.0045 is very dilute, so Henry's law and Lewis/Randall are both justified. Species 1 is a light, sparingly soluble component (a gas dissolved in a liquid).

**Result:** $x_1$ ≈ **0.0045**, $y_1$ ≈ **0.90** ($y_2$ ≈ 0.10).`,
          answer: String.raw`y₁P = x₁𝓗₁ (Henry, dilute 1), y₂P = x₂P₂ˢᵃᵗ (Lewis/Randall–Raoult for 2), ideal vapour at 1 bar: x₁ = (P − P₂ˢᵃᵗ)/(𝓗₁ − P₂ˢᵃᵗ) = 0.0045, y₁ = 0.900 (y₂ = 0.0996).` },
        { id: "2013-14-Q8b", label: "(b)", marks: "14",
          topic: "solution-theory", sub: "SO₂ at 600 K and 300 bar: fugacity and Gᴿ/RT by Lee/Kesler",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`For SO₂ at 600K and 300bar, make good estimates of the fugacity and $\dfrac{G^R}{RT}$.

(Hint: use the supplied data book and figure for Question No. 8(b))

Figure for Question No. 8(b) (attached to the paper): "Comparison of correlations for $Z^0$. The virial-coefficient correlation is represented by the straight lines; the Lee/Kesler correlation, by the points." $Z^0$ (0.7–1.0) against $P_r$ (0–2.5) for $T_r$ = 0.8, 0.9, 1.0, 1.1, 1.3, 1.5, 1.8, 2.4 and 4.0, with a dashed curve marking the region where the two agree.`,
          solution: String.raw`**Given:** SO₂, T = 600 K, P = 300 bar. **SVNA Table B.1:** $T_c$ = 430.8 K, $P_c$ = 78.84 bar, ω = 0.245.

**Find:** f and $G^R/RT$.

**Assumptions:** generalized (corresponding-states) correlation, $\ln\phi = \ln\phi^0 + \omega\ln\phi^1$, i.e. $\phi = \phi^0(\phi^1)^\omega$ (SVNA eq. 11.67).

1. **Reduced conditions:**
$$T_r = \frac{600}{430.8} = 1.393, \qquad P_r = \frac{300}{78.84} = 3.805$$

2. **Choice of correlation (figure for Q8b).** The virial straight lines agree with the Lee/Kesler points only above the dashed curve. For $T_r$ ≈ 1.3–1.5 that means $P_r$ below about 1.5–2. Here $P_r$ = 3.8 is far beyond the figure (its axis ends at 2.5), so the generalized virial correlation is **not valid**. Use the **Lee/Kesler tables** (SVNA App. E, Tables E.15 and E.16, $P_r$ = 1–10).

3. **Table values** at the bracketing grid points:

| | $T_r$ = 1.30, $P_r$ = 3 | $T_r$ = 1.30, $P_r$ = 5 | $T_r$ = 1.40, $P_r$ = 3 | $T_r$ = 1.40, $P_r$ = 5 |
|---|---|---|---|---|
| $\phi^0$ (E.15) | 0.6383 | 0.5383 | 0.7145 | 0.6237 |
| $\phi^1$ (E.16) | 1.2853 | 1.3868 | 1.2942 | 1.4488 |

4. **Double linear interpolation.** The fractions are $(3.805 - 3)/2 = 0.4026$ in $P_r$ and $(1.393 - 1.30)/0.10 = 0.928$ in $T_r$.
   - $\phi^0$: at $T_r$ = 1.30, $0.6383 - 0.4026(0.1000) = 0.5980$; at $T_r$ = 1.40, $0.7145 - 0.4026(0.0908) = 0.6779$. Interpolating in $T_r$: $\phi^0 = 0.5980 + 0.928(0.0799) = 0.6722$.
   - $\phi^1$: at 1.30, 1.3262; at 1.40, 1.3564. Interpolating in $T_r$: $\phi^1 = 1.3542$.

5. **Fugacity coefficient and fugacity:**
$$\phi = \phi^0(\phi^1)^\omega = 0.6722 \times 1.3542^{0.245} = 0.6722 \times 1.0771 = 0.724$$
$$f = \phi P = 0.724 \times 300 = 217\ \mathrm{bar}$$

6. **Residual Gibbs energy.** For a pure species $\ln\phi = G^R/RT$:
$$\frac{G^R}{RT} = \ln 0.724 = -0.323$$
   Equivalently, $G^R = -0.323 \times 8.314 \times 600 = -1611$ J/mol.

> **Comparison:** the generalized virial correlation would give $B^0 = 0.083 - 0.422/T_r^{1.6} = -0.1654$ and $B^1 = 0.139 - 0.172/T_r^{4.2} = 0.0962$, so $\ln\phi = (P_r/T_r)(B^0 + \omega B^1) = -0.387$, φ = 0.679 and f = 204 bar. That is about 6% low, which confirms the hint: at this high $P_r$ only Lee/Kesler is reliable.

**Result:** **f ≈ 217 bar**, $G^R/RT$ ≈ **−0.32** (φ = 0.724).`,
          answer: String.raw`T_r = 1.393, P_r = 3.805 (outside the virial range of the figure) ⇒ Lee/Kesler Tables E.15–E.16: φ⁰ = 0.6722, φ¹ = 1.3542; φ = 0.6722 × 1.3542^0.245 = 0.724; f = 217 bar; Gᴿ/RT = ln φ = −0.323 (virial would give 204 bar).` },
        { id: "2013-14-Q8c", label: "(c)", marks: "6",
          topic: "solution-theory", sub: "Excess properties versus residual properties",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Distinguish between excess properties and residual properties.`,
          solution: String.raw`| | **Residual property** $M^R$ | **Excess property** $M^E$ |
|---|---|---|
| Definition | $M^R \equiv M - M^{ig}$ | $M^E \equiv M - M^{id}$ |
| Reference | **Ideal gas** at the same T, P (and composition) | **Ideal solution** at the same T, P and composition |
| Measures | Departure from ideal-**gas** behaviour (molecular interactions and finite molecular volume) | Departure from ideal-**solution** behaviour (difference between unlike and like interactions) |
| Applies to | Pure species and mixtures, any phase; mostly used for gases | Mixtures, mostly liquid solutions; zero for pure species |
| Data source | PVT data, equations of state, generalized correlations | VLE data (activity coefficients), calorimetry ($H^E$), density ($V^E$) |
| Key relation | $\ln\phi_i = G_i^R/RT$; $\ln\hat\phi_i = \bar G_i^R/RT$ | $\ln\gamma_i = \bar G_i^E/RT$ |
| Gibbs-energy form | $\dfrac{G^R}{RT} = \displaystyle\int_0^P(Z - 1)\frac{dP}{P}$ | $\dfrac{G^E}{RT} = \sum x_i\ln\gamma_i$ |
| Limits | $M^R \to 0$ as $P \to 0$ | $M^E \to 0$ as $x_i \to 1$ |

**Link between them.** Since $M^{id}$ is built from pure-species values,
$$M^E = M^R - \sum_i x_iM_i^R$$
For example, $G^E/RT = G^R/RT - \sum x_iG_i^R/RT$. Also, for the volume-type properties ($V$, $H$, $U$), $M^E = \Delta M$ (the property change of mixing), whereas no such identity holds for $M^R$.`,
          answer: String.raw`M^R = M − M^ig (reference: ideal gas at same T, P; from PVT/EOS; → 0 as P → 0; ln φ = G^R/RT) vs M^E = M − M^id (reference: ideal solution at same T, P, x; from VLE/calorimetry; zero for pure species; ln γᵢ = Ḡᵢ^E/RT, G^E/RT = Σxᵢ ln γᵢ). M^E = M^R − Σxᵢ Mᵢ^R.` }
      ] }
  ]
});
