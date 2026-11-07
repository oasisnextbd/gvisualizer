QB.paper({
  year: "2022-23", date: "13/05/2024", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engg. Examination 2022-2023, CHE 313 (Solution Thermodynamics), 3 hours, 210 marks (held 13/05/2024; the printed date 25/04/2024 is struck out). Section A: Question 1 is compulsory (45 marks) and any TWO of Q2–Q4 (30 each). Section B: Q5–Q8, 35 marks each; the paper prints "answer any FOUR", but the total of 210 requires THREE. Use separate scripts for each section; symbols have their usual meanings. A five-page list of formulas (49 items, solution thermodynamics, reaction equilibria and refrigeration) is attached.`,
  questions: [
    { id: "2022-23-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw`Answer the questions below. Clarify your answers with **adequate reasoning**. Answering without any reasoning will bear zero marks.`,
      parts: [
        { id: "2022-23-Q1i", label: "(i)", marks: "7",
          topic: "phase-equilibria-topics", sub: "What happens without stability in a vapour–liquid system",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain what will happen if there is no stability to a vapor-liquid system in equilibrium. You can use the stability criterion applicable to this scenario to clarify your answer.`,
          solution: String.raw`1. **Stability criterion (binary liquid, constant T, P):**
$$\frac{d^2(\Delta G/RT)}{dx_1^2} > 0 \;\Leftrightarrow\; \frac{d\ln\gamma_1}{dx_1} > -\frac{1}{x_1} \;\Leftrightarrow\; \frac{d\hat f_1}{dx_1} > 0$$

2. **Consequence for VLE.** At low pressure $\hat f_i^l = \hat f_i^v = y_iP$. The criterion becomes
$$\frac{d\ln\hat f_1}{dx_1} - \frac{d\ln\hat f_2}{dx_1} = \frac{1}{y_1y_2}\frac{dy_1}{dx_1} > 0 \;\Rightarrow\; \frac{dy_1}{dx_1} > 0, \qquad \frac{1}{P}\frac{dP}{dx_1} = \frac{y_1 - x_1}{y_1y_2}\frac{dy_1}{dx_1}$$
   For a stable liquid, $y_1$ always rises with $x_1$, and P rises or falls according to the sign of $(y_1 - x_1)$. P has an extremum only where $y_1 = x_1$ (an azeotrope).

3. **If the liquid is not stable** over some composition range ($d^2\Delta G/dx_1^2 < 0$, so the $\Delta G$ curve is concave):
   - A single liquid phase cannot exist there. The liquid lowers $G^t$ (as $(dG^t)_{T,P} \le 0$ requires) by **splitting into two liquid phases α and β**. Their compositions are fixed by the common tangent ($\hat f_i^\alpha = \hat f_i^\beta$).
   - The vapour then coexists with **two** liquids (VLLE). By the phase rule, F = 2 − 3 + 2 = 1, so at fixed T the pressure and vapour composition are fixed. On the P–x diagram the bubble curve becomes a horizontal line between $x_1^\alpha$ and $x_1^\beta$ (the three-phase line), usually with a heterogeneous azeotrope.
   - A calculation that ignores this, e.g. a $G^E$ model with too large a parameter, predicts $dy_1/dx_1 < 0$ and a P–x curve with a maximum and a minimum (S-shape). These states are unstable or metastable and are not observed.

4. **Example:** two-suffix Margules, $G^E/RT = Ax_1x_2$. Stability fails where $1/(x_1x_2) < 2A$, i.e. for $A > 2$ (at $x_1$ = 0.5 first). n-butanol/water is a real system of this kind.`,
          answer: String.raw`Stability (d²(ΔG/RT)/dx₁² > 0, i.e. d f̂₁/dx₁ > 0) makes dy₁/dx₁ > 0 and dP/dx₁ ∝ (y₁ − x₁). Without it the liquid splits into two liquid phases (common tangent, f̂ᵢ^α = f̂ᵢ^β), giving VLLE with constant P and y (F = 1) across the split; an unstable model gives an S-shaped P–x and dy₁/dx₁ < 0, which is not physical.` },
        { id: "2022-23-Q1ii", label: "(ii)", marks: "7",
          topic: "phase-equilibria-topics", sub: "Adsorption equilibrium between adsorbed phase and gas",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"After adsorption of molecules on a solid surface, the equilibrium is maintained between the adsorbed molecules and vapor phase" – Is it true or, false? Give reasons to your answer.`,
          solution: String.raw`**True.**

1. In physical adsorption of a gas on a solid (the adsorbent), the solid is treated as inert. Only the **adsorbate** is distributed between two phases: the gas phase and the **adsorbed phase**, a two-dimensional surface phase on the solid.
2. The adsorbed phase is described by a 2-D fundamental relation, with spreading pressure Π and specific area a in place of P and V (formula sheet item 48):
$$d(nG) = (na)\,d\Pi - (nS)\,dT + \sum_i\mu_i\,dn_i$$
3. At equilibrium, at uniform T, each adsorbed species has the **same chemical potential (fugacity) as in the gas**:
$$\mu_i^{ads} = \mu_i^{gas} \quad\Leftrightarrow\quad \hat f_i^{ads} = \hat f_i^{gas} = y_i\hat\phi_iP$$
   The solid adsorbent itself does not enter this equilibrium: it is not present in the gas.
4. Combining with Gibbs–Duhem for the surface phase gives the **Gibbs adsorption isotherm**, $-\frac{a}{RT}d\Pi + d\ln P + \sum_i x_i\,d\ln y_i = 0$ (formula sheet). From it come the isotherms $n = f(P)$ (Henry's law region, Langmuir) at constant T.
5. The equilibrium is dynamic: molecules adsorb and desorb at equal rates. Raising P or lowering T shifts it towards more adsorption, which is the basis of PSA and TSA separations.`,
          answer: String.raw`True: the adsorbate is distributed between the gas and a 2-D adsorbed phase (inert solid); at equilibrium μᵢ^ads = μᵢ^gas (f̂ᵢ^ads = yᵢφ̂ᵢP), which with d(nG) = (na)dΠ − (nS)dT + Σμᵢdnᵢ gives the Gibbs adsorption isotherm.` },
        { id: "2022-23-Q1iii", label: "(iii)", marks: "7",
          topic: "refrigeration", sub: "Why the Linde process is still used despite small liquefied fraction",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Liquefaction converts only a small fraction of a gas to liquid through Linde process. Why is it still relevant to use this method in commercial scale? How can you overcome the limitation? Provide reason(s) to your answer.`,
          solution: String.raw`### Why the Linde process is still used
- **The gas is not wasted.** The unliquefied fraction (1 − z), still cold, returns through the countercurrent heat exchanger to precool the incoming high-pressure gas, and is then recompressed and recycled. Per pass only a fraction z liquefies (about 5% for methane from 60 bar, as in Q3b), but over many passes **all the feed is eventually liquefied**. The penalty is compression work, not lost material.
- **Simplicity and reliability.** The only device at low temperature is a **throttle valve**: no moving parts in the cold box and no lubrication problems at cryogenic temperatures. It is cheap to build and maintain, and it handles two-phase flow without damage.
- **It works for any gas below its inversion temperature** (N₂, O₂, air, CH₄, CO₂), and it is the basis of air separation and LNG plants.

### Overcoming the limitation
The energy balance $z = \dfrac{H_4 - H_{15}}{H_9 - H_{15}}$ shows the remedies:
1. **Higher compression pressure** lowers $H_4$ at a given precooling temperature (a larger Joule–Thomson effect), so z rises.
2. **Precooling** the compressed gas with a separate refrigeration loop (e.g. ammonia or propane) lowers $H_4$.
3. **Claude process:** expand part of the high-pressure gas (fraction x) in an **expansion engine or turbine**. A nearly isentropic expansion gives far more cooling than isenthalpic throttling, and it recovers work: $z = \dfrac{H_4 - H_{15}}{H_9 - H_{15}} + x\,\dfrac{H_{12} - H_5}{H_9 - H_{15}}$.
4. **Cascade or mixed-refrigerant cycles** (as in large LNG trains) and multistage throttling with intermediate separators.`,
          answer: String.raw`Unliquefied gas is recycled through the heat exchanger, so eventually all feed is liquefied; the cold section has only a throttle valve (simple, reliable, cheap). Improve z by higher pressure, external precooling, or the Claude process (expansion engine/turbine gives near-isentropic cooling and work recovery), cascades or mixed refrigerants.` },
        { id: "2022-23-Q1iv", label: "(iv)", marks: "8",
          topic: "phase-equilibria-topics", sub: "Simplified solid–vapour equilibrium equation at high pressure",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the simplified equation for solid-vapor equilibrium applicable under high pressure scenario. Give an example of an application where this equation could be used.`,
          solution: String.raw`**System:** pure solid solute 1 in equilibrium with a gas mixture of 1 and an insoluble solvent gas 2 (SVNA §14.7).

1. **Equilibrium for species 1 only:** $f_1^s = \hat f_1^v = y_1\hat\phi_1P$.

2. **Fugacity of the pure solid.** Start from the solid's saturation (sublimation) state, where $f_1^{sat} = \phi_1^{sat}P_1^{sat}$, and compress the solid at constant T ($d\ln f = V\,dP/RT$, solid incompressible):
$$f_1^s = \phi_1^{sat}P_1^{sat}\exp\frac{V_1^s(P - P_1^{sat})}{RT}$$

3. **General result:**
$$y_1 = \frac{P_1^{sat}}{P}F_1, \qquad F_1 \equiv \frac{\phi_1^{sat}}{\hat\phi_1}\exp\frac{V_1^s(P - P_1^{sat})}{RT}$$

4. **High-pressure simplifications.**
   - Solid vapour pressures are tiny ($P_1^{sat}$ ~ Pa), so the saturated vapour is an ideal gas: $\phi_1^{sat} \approx 1$.
   - $P \gg P_1^{sat}$, so $P - P_1^{sat} \approx P$.
   - $\hat\phi_1$ must be kept: at high P near the solvent's critical point it is $\ll 1$, typically from a cubic EOS or virial equation.
$$\boxed{y_1 = \frac{P_1^{sat}}{\hat\phi_1P}\exp\frac{V_1^sP}{RT}}$$
   The ratio $E = y_1P/P_1^{sat} = \exp(V_1^sP/RT)/\hat\phi_1$ is the **enhancement factor**. The Poynting factor alone gives about 1.5–3 at 100–300 bar; the small $\hat\phi_1$ raises E to $10^3$–$10^6$.

5. **At low pressure** ($\hat\phi_1 \approx 1$, Poynting ≈ 1): $y_1 = P_1^{sat}/P$, the ideal-gas solubility.

**Application:** **supercritical-fluid extraction**, e.g. decaffeination of coffee with supercritical CO₂, extraction of hop oils or essential oils, solubility of naphthalene in CO₂ or ethylene at 100–300 bar. The equation predicts the solubility and how a small pressure drop precipitates the solute in the separator.`,
          answer: String.raw`f₁ˢ = f̂₁ᵛ with f₁ˢ = φ₁ˢᵃᵗP₁ˢᵃᵗ exp[V₁ˢ(P − P₁ˢᵃᵗ)/RT] ⇒ y₁ = (P₁ˢᵃᵗ/P)(φ₁ˢᵃᵗ/φ̂₁)exp[V₁ˢ(P − P₁ˢᵃᵗ)/RT]; at high P, φ₁ˢᵃᵗ ≈ 1 and P ≫ P₁ˢᵃᵗ: y₁ = P₁ˢᵃᵗ exp(V₁ˢP/RT)/(φ̂₁P) (enhancement factor). Application: supercritical CO₂ extraction (decaffeination, naphthalene in CO₂).` },
        { id: "2022-23-Q1v", label: "(v)", marks: "10",
          topic: "reaction-equilibria", sub: "Alkaline fuel cell: electrode reactions and thermodynamic efficiency",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Illustrate the basic mechanism (with reactions) for an alkaline fuel cell. How can thermodynamic equilibrium provide effective estimation of fuel cell efficiency? Explain.`,
          solution: String.raw`![Alkaline fuel cell: H₂ at the anode, O₂ at the cathode, OH⁻ through KOH electrolyte, electrons through the external load](fig/2022-23-Q1v-sketch.svg)

### Mechanism
- **Electrolyte:** aqueous KOH (30–45%), often held in a porous matrix. The charge carrier is **OH⁻**.
- **Anode** (fuel side, porous Ni or Pt catalyst):
$$\mathrm{H_2 + 2OH^- \to 2H_2O + 2e^-}$$
- **Cathode** (oxygen side):
$$\mathrm{\tfrac12O_2 + H_2O + 2e^- \to 2OH^-}$$
- The electrons travel through the external circuit and do work; the OH⁻ ions migrate through the electrolyte from cathode to anode. Water is formed at the anode and removed.
- **Overall:** $\mathrm{H_2 + \tfrac12O_2 \to H_2O}$ (n = 2 electrons per H₂).

### Efficiency from equilibrium thermodynamics (SVNA §13.10)
1. A fuel cell converts chemical energy directly into electrical work, not through heat, so it is **not limited by the Carnot efficiency**. For a reversible cell at constant T and P, the maximum electrical work is the Gibbs-energy decrease (formula sheet item 45):
$$W_{elect} = \Delta G = -nFE \;\Rightarrow\; E = \frac{-\Delta G}{nF}$$
2. The reaction's "heating value" is $-\Delta H$, so the ideal efficiency is
$$\eta_{ideal} = \frac{\Delta G}{\Delta H} = 1 - \frac{T\Delta S}{\Delta H}$$
3. **At 25 °C**, liquid water product (SVNA App. C): $\Delta H^\circ = -285.83$ kJ/mol, $\Delta G^\circ = -237.13$ kJ/mol:
$$E^\circ = \frac{237130}{2 \times 96485} = 1.229\ \mathrm{V}, \qquad \eta_{ideal} = \frac{237.13}{285.83} = 0.83$$
   The heat $T\Delta S = -48.7$ kJ/mol must be rejected even by a reversible cell.
4. **Real cells:** with an operating voltage $V_{cell}$, $\eta = nFV_{cell}/(-\Delta H) = V_{cell}/1.481$ V. For example, 0.8 V gives 54%. The equilibrium values give the **upper bound**, and the ratio $V_{cell}/E$ measures the irreversibilities (activation, ohmic and concentration losses). Because $dE/dT = \Delta S/nF < 0$, the ideal efficiency also falls with temperature.`,
          answer: String.raw`Anode H₂ + 2OH⁻ → 2H₂O + 2e⁻; cathode ½O₂ + H₂O + 2e⁻ → 2OH⁻; overall H₂ + ½O₂ → H₂O, OH⁻ through KOH. Reversible work = −ΔG = nFE: E° = 1.229 V, η_ideal = ΔG/ΔH = 237.13/285.83 = 0.83 (not Carnot-limited); real η = V_cell/1.481 V.` },
        { id: "2022-23-Q1vi", label: "(vi)", marks: "6",
          topic: "reaction-equilibria", sub: "Why K is called a constant despite temperature dependence",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"Despite the dependence on temperature, K is called the equilibrium constant for a reaction" – using the expression for its temperature dependence (see formula sheet), asses this statement.`,
          solution: String.raw`1. **Definition:**
$$\ln K = \frac{-\Delta G^\circ}{RT}, \qquad \Delta G^\circ = \sum_i\nu_iG_i^\circ$$
   The $G_i^\circ$ are Gibbs energies of the pure species in their **standard states at a fixed pressure** $P^\circ$ (1 bar) and the system temperature. They therefore depend on **T only**.

2. **Temperature dependence** (formula sheet item 43):
$$\frac{d\ln K}{dT} = \frac{\Delta H^\circ}{RT^2}$$
   K changes strongly with T. For example, the water-gas shift reaction has K ≈ 1.0 × 10⁵ at 298 K (ΔG° = −28.6 kJ/mol) but K ≈ 1 near 1100 K (Q4b uses 1.1).

3. **Why it is still a "constant".** At a given T, K is independent of:
   - **pressure**: P affects the equilibrium composition through $(P/P^\circ)^{-\nu}$ and the $\hat\phi_i$, but not K;
   - **initial composition**, the amount of inerts and the extent of reaction;
   - which phase(s) the species actually occupy, once the standard states are chosen.
   It plays the same role as $P^{sat}$ in VLE: a property of the substances at a temperature.

4. **Assessment.** The statement is justified. "Constant" means constant with respect to every variable except T: at fixed T, all equilibrium compositions are computed from the same K. It is not a universal constant, and the van 't Hoff equation ($K = K_0K_1K_2$) must be used to re-evaluate it whenever T changes.`,
          answer: String.raw`K = exp(−ΔG°/RT) depends only on standard-state properties at fixed P° ⇒ a function of T alone (d ln K/dT = ΔH°/RT²). At a given T it is independent of P, feed composition, inerts and extent, so it is a constant for the reaction at that T; it must be recalculated (K₀K₁K₂) when T changes.` }
      ] },
    { id: "2022-23-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q2a", label: "(a)", marks: "5+10=15",
          topic: "refrigeration", sub: "General method of liquefaction; Linde versus Claude process schematics",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Describe the general method of liquefaction. Provide a schematic to differentiate between Linde and Claude Process.`,
          solution: String.raw`### General method (SVNA §9.6)
A gas liquefies when it is cooled into the two-phase region below its critical temperature. Cooling is achieved by:
1. **Heat exchange at constant pressure** against a colder stream: precooling with refrigerant and countercurrent exchange with the cold returning gas.
2. **Expansion with work output** (expansion engine or turbine, nearly isentropic). This gives the largest temperature drop at a given pressure ratio.
3. **Throttling** (Joule–Thomson expansion at constant H). It cools the gas only below its inversion temperature, and the cooling is much smaller than for isentropic expansion.

Practical liquefiers combine all three. The gas is compressed and cooled to ambient, cooled further in a countercurrent exchanger by the cold unliquefied gas, and finally expanded into a separator, where liquid (fraction z) is drawn off and the cold vapour returns through the exchanger.

![Linde and Claude liquefaction schematics: compressor, heat exchanger, throttle, separator, and in Claude an expansion engine](fig/2022-23-Q2a-sketch.svg)

### Linde versus Claude
| | Linde | Claude |
|---|---|---|
| Final cooling | Throttle valve only (isenthalpic) | Fraction x of the high-P gas expanded in an **engine/turbine**; rest throttled |
| Low-temperature equipment | No moving parts | Expander at low T (lubrication/two-phase care) |
| Work recovered | None | Expander work recovered |
| Fraction liquefied (energy balance, formula sheet) | $z = \dfrac{H_4 - H_{15}}{H_9 - H_{15}}$ | $z = \dfrac{H_4 - H_{15}}{H_9 - H_{15}} + x\dfrac{H_{12} - H_5}{H_9 - H_{15}}$ |
| Yield and energy | Low z per pass; high pressure needed | Higher z for the same pressure; less energy per kg liquid |

With x = 0 the Claude result reduces to Linde's, so **the Linde process is the limiting case of the Claude process**.`,
          answer: String.raw`Liquefy by compression + heat exchange with cold return gas + expansion (isentropic in an expander or isenthalpic in a throttle) into a separator. Linde: throttle only, z = (H₄ − H₁₅)/(H₉ − H₁₅). Claude: part of the gas expanded in an engine with work recovery, z = (H₄ − H₁₅)/(H₉ − H₁₅) + x(H₁₂ − H₅)/(H₉ − H₁₅), larger yield; Linde = Claude with x = 0.` },
        { id: "2022-23-Q2b", label: "(b)", marks: "8+7=15",
          topic: "refrigeration", sub: "Vapour-compression refrigeration cycle on T–S and ln P–H diagrams",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Describe the vapor-liquid compression cycle with a schematic of the process. Explain different steps of the process using T-S and lnP-H diagrams.`,
          solution: String.raw`![Vapour-compression cycle: schematic, T–S and ln P–H diagrams with states 1–4](fig/2023-24-Q2b-sketch.svg)

### Equipment
A volatile refrigerant (e.g. R-134a, NH₃) circulates through an **evaporator** (low pressure, inside the refrigerated space), a **compressor**, a **condenser** (high pressure, rejecting heat to air or cooling water) and an **expansion (throttle) valve**.

### Steps (states as in the figure)
1. **1 → 2, evaporation** at constant $P_{low}$ and $T_C$. Wet vapour boils by taking heat $Q_C$ from the cold space. T–S: horizontal line under the dome. ln P–H: horizontal line to the saturated-vapour curve. $Q_C = H_2 - H_1$.
2. **2 → 3, compression** of saturated vapour to $P_{high}$. Ideally isentropic (vertical on T–S), with T rising into the superheated region. ln P–H: steep line to the right. $W = H_3 - H_2$; with efficiency η, $(\Delta H)_S/\eta$.
3. **3 → 4, condensation** at constant $P_{high}$. Desuperheating (T falls to $T_H$), then condensation at $T_H$ to saturated liquid. T–S: sloping then horizontal. ln P–H: horizontal line to the saturated-liquid curve. $Q_H = H_3 - H_4$.
4. **4 → 1, throttling** through the expansion valve, $H_4 = H_1$. ln P–H: vertical line down. T–S: dashed line to the right (entropy increases, irreversible), ending inside the dome at $T_C$.

### Performance
$$\omega = \frac{Q_C}{W} = \frac{H_2 - H_1}{H_3 - H_2}, \qquad \dot m = \frac{\dot Q_C}{H_2 - H_1}$$
On T–S the cycle departs from the Carnot rectangle (whose $\omega = T_C/(T_H - T_C)$) through the throttle and the superheat horn. The ln P–H diagram is the working chart because Q and W appear as horizontal enthalpy lengths.`,
          answer: String.raw`Evaporator (1→2, Q_C = H₂ − H₁, constant low P), compressor (2→3, W = H₃ − H₂, isentropic ideal), condenser (3→4, Q_H, desuperheat + condense at high P), throttle (4→1, H constant: vertical on ln P–H, entropy increase on T–S). ω = (H₂ − H₁)/(H₃ − H₂), ṁ = Q̇_C/(H₂ − H₁).` }
      ] },
    { id: "2022-23-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q3a", label: "(a)", marks: "20",
          topic: "reaction-equilibria", sub: "C + CO₂ = 2CO at 1000 K by Gibbs-energy minimization: composition and λ values",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The equilibrium composition at 1000 K and 1 bar of a gas-phase system containing the species C, CO and CO₂ are to be determined. In the initial unreacted state, there are 1 mol C and 1 mol CO₂ present. (Reaction: C+CO₂ = 2CO).

Values of $\Delta G_f^\circ$ at 1000 K are:

$$\Delta G^\circ_{f,CO} = -200.24\ \mathrm{kJ/mol}, \qquad \Delta G^\circ_{f,CO_2} = -395.79\ \mathrm{kJ/mol}$$

Based on this data, estimate the equilibrium concentration of the components and $\lambda_k$ values. [Hint: see formula sheet]`,
          solution: String.raw`**Given:** T = 1000 K, P = 1 bar; feed 1 mol C, 1 mol CO₂; $\Delta G^\circ_{f,CO} = -200{,}240$ J/mol, $\Delta G^\circ_{f,CO_2} = -395{,}790$ J/mol, $\Delta G^\circ_{f,C} = 0$ (element). $RT = 8.314 \times 1000 = 8314$ J/mol.

**Find:** equilibrium amounts and mole fractions; $\lambda_C$ and $\lambda_O$.

**Assumptions:** carbon is a pure solid phase (graphite) with activity 1; CO and CO₂ form an ideal-gas mixture at $P = P^\circ$ = 1 bar.

1. **Minimization equations** (formula sheet item 43): for each species, $\Delta G^\circ_{f_i} + RT\ln(\hat f_i/f_i^\circ) + \sum_k\lambda_ka_{ik} = 0$.
   - **C(s)**, pure solid, $\hat f/f^\circ = 1$: $0 + 0 + \lambda_C = 0 \Rightarrow \lambda_C = 0$.
   - **CO**: $\Delta G^\circ_{f,CO} + RT\ln y_{CO} + \lambda_C + \lambda_O = 0$.
   - **CO₂**: $\Delta G^\circ_{f,CO_2} + RT\ln y_{CO_2} + \lambda_C + 2\lambda_O = 0$.

2. **Element balances** (gram-atoms fed: $A_C$ = 2, $A_O$ = 2):
$$n_C + n_{CO} + n_{CO_2} = 2, \qquad n_{CO} + 2n_{CO_2} = 2, \qquad y_{CO} + y_{CO_2} = 1$$

3. **Eliminate $\lambda_O$.** Take 2 × (CO equation) − (CO₂ equation), with $\lambda_C = 0$:
$$2\Delta G^\circ_{f,CO} - \Delta G^\circ_{f,CO_2} + RT\ln\frac{y_{CO}^2}{y_{CO_2}} = 0$$
$$\ln\frac{y_{CO}^2}{y_{CO_2}} = \frac{-[2(-200240) - (-395790)]}{8314} = \frac{4690}{8314} = 0.5641 \;\Rightarrow\; \frac{y_{CO}^2}{1 - y_{CO}} = 1.758$$
   This is exactly the equilibrium constant of C + CO₂ = 2CO.

4. **Solve the quadratic** $y_{CO}^2 + 1.758y_{CO} - 1.758 = 0$:
$$y_{CO} = \frac{-1.758 + \sqrt{1.758^2 + 4(1.758)}}{2} = 0.7118, \qquad y_{CO_2} = 0.2882$$

5. **Amounts.** Let ε = moles of CO₂ reacted: $n_{CO} = 2\varepsilon$, $n_{CO_2} = 1 - \varepsilon$, $n_C = 1 - \varepsilon$, gas total = $1 + \varepsilon$.
$$\frac{2\varepsilon}{1 + \varepsilon} = 0.7118 \;\Rightarrow\; \varepsilon = 0.5525$$
$$n_{CO} = 1.105\ \mathrm{mol}, \quad n_{CO_2} = 0.4475\ \mathrm{mol}, \quad n_C = 0.4475\ \mathrm{mol}\ (>0\text{, so solid C remains}\ \checkmark)$$
   Check balances: C: 0.4475 + 1.105 + 0.4475 = 2.000 ✓; O: 1.105 + 2(0.4475) = 2.000 ✓.

6. **Lagrange multipliers.** From the CO equation:
$$\lambda_O = -\Delta G^\circ_{f,CO} - RT\ln y_{CO} = 200240 - 8314\ln 0.7118 = 200240 + 2827 = 203{,}067\ \mathrm{J/mol}$$
$$\frac{\lambda_O}{RT} = 24.42, \qquad \lambda_C = 0$$
   Check with CO₂: $-395790 + 8314\ln 0.2882 + 2(203067) = -395790 - 10344 + 406134 = 0$ ✓.

**Result:**

| | C(s) | CO | CO₂ |
|---|---|---|---|
| n (mol) | 0.4475 | 1.105 | 0.4475 |
| y (gas) | (solid) | 0.712 | 0.288 |

$\lambda_C = 0$, $\lambda_O = 2.03 \times 10^5$ J/mol ($\lambda_O/RT = 24.42$).`,
          answer: String.raw`λ_C = 0 (pure solid C); y_CO²/y_CO₂ = exp(4690/8314) = 1.758 ⇒ y_CO = 0.712, y_CO₂ = 0.288; ε = 0.5525: n_CO = 1.105, n_CO₂ = 0.4475, n_C = 0.4475 mol; λ_O = 203.07 kJ/mol (λ_O/RT = 24.42).` },
        { id: "2022-23-Q3b", label: "(b)", marks: "10",
          topic: "refrigeration", sub: "Linde liquefaction of methane: fraction liquefied and throttle-inlet enthalpy",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Natural gas, assuming pure methane, is liquefied in a simple Linde process. Compression is to 60 bar and precooling is to 300 K. The separator is maintained at a pressure of 1 bar, and un-liquefied gas at this pressure leaves the cooler at 295 K. What fraction of the gas is liquefied in the process and what is the enthalpy of the high-pressure gas entering the throttle valve?

At 300 K and 60 bar, Enthalpy of superheated methane = 1140 kJ/kg

At 295 K and 1 bar, Enthalpy of superheated methane = 1188.9 kJ/kg

At 1 bar pressure, under saturated condition of methane, $T^{sat}$ = 111.45 K, saturated liquid enthalpy = 285.4 kJ/kg, and saturated vapor enthalpy = 796.9 kJ/kg`,
          solution: String.raw`**Given (numbering of the formula sheet / SVNA Fig. 9.6):** $H_4$ = 1140 kJ/kg (60 bar, 300 K, after precooling); $H_{15}$ = 1188.9 kJ/kg (1 bar, 295 K, unliquefied gas leaving the exchanger); $H_9$ = 285.4 kJ/kg (saturated liquid, 1 bar); $H_{v}$ = 796.9 kJ/kg (saturated vapour, 1 bar).

**Find:** fraction liquefied z; enthalpy $H_{in}$ of the high-pressure gas entering the throttle.

**Assumptions:** steady flow; exchanger, throttle and separator adiabatic; kinetic and potential energy negligible. Basis: 1 kg of gas entering the cold section.

1. **Energy balance on the cold section** (exchanger + throttle + separator). One kg enters at $H_4$; z kg leave as liquid at $H_9$; (1 − z) kg leave as gas at $H_{15}$. No work or heat:
$$H_4 = zH_9 + (1 - z)H_{15} \;\Rightarrow\; z = \frac{H_4 - H_{15}}{H_9 - H_{15}}$$
$$z = \frac{1140 - 1188.9}{285.4 - 1188.9} = \frac{-48.9}{-903.5} = 0.0541$$

2. **Throttle + separator.** Throttling is isenthalpic, so the separator receives a two-phase stream with $H_{in}$. It splits into saturated liquid z and saturated vapour (1 − z):
$$H_{in} = zH_9 + (1 - z)H_v = 0.0541(285.4) + 0.9459(796.9) = 15.45 + 753.77 = 769.2\ \mathrm{kJ/kg}$$

**Result:** about **5.4% of the methane is liquefied** per pass, and the high-pressure gas enters the throttle valve with **H ≈ 769.2 kJ/kg**. The gas has been cooled by the returning cold vapour from 1140 to 769.2 kJ/kg before throttling. The 94.6% unliquefied gas is recycled.`,
          answer: String.raw`z = (H₄ − H₁₅)/(H₉ − H₁₅) = (1140 − 1188.9)/(285.4 − 1188.9) = 0.0541 (5.4% liquefied); H at throttle inlet = 0.0541(285.4) + 0.9459(796.9) = 769.2 kJ/kg.` }
      ] },
    { id: "2022-23-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q4a", label: "(a)", marks: "5+10=15",
          topic: "reaction-equilibria", sub: "Multiphase reaction equilibrium constant: phases of species and simplifications",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`$$K = \frac{x_1\gamma_1f_1^lP^\circ}{(y_2\hat\phi_2P)(x_3\gamma_3f_3^l)}$$

This is an expression for a multiphase reaction equilibrium constant. Assuming the expression, answer the following questions:

(i) Identify the phase of the component 1, 2 and 3 from the equation. Give reasons to your identification.

(ii) Make possible assumptions that could be applied to simplify and solve the equation for K. Clearly mention the circumstances when these assumptions will be applied.`,
          solution: String.raw`**General form:** $K = \prod_i(\hat f_i/f_i^\circ)^{\nu_i}$, where $\hat f_i/f_i^\circ$ is the activity of species i in the phase it occupies:
- **gas:** $\hat f_i = y_i\hat\phi_iP$ and $f_i^\circ = P^\circ$, so the activity is $y_i\hat\phi_iP/P^\circ$;
- **liquid solution:** $\hat f_i = x_i\gamma_if_i$ and $f_i^\circ$ = pure liquid at T and $P^\circ$, so the activity is $x_i\gamma_if_i/f_i^\circ$.

### (i) Phases (5)
- **Species 1: liquid.** It appears as $x_1\gamma_1f_1^l$ (liquid mole fraction, activity coefficient, pure-liquid fugacity), in the **numerator**: a **product** with ν₁ = +1.
- **Species 2: gas.** It appears as $y_2\hat\phi_2P$ with $P^\circ$ as its standard-state fugacity. The $P^\circ$ moves to the numerator because $(y_2\hat\phi_2P/P^\circ)^{-1}$: a **reactant** in the vapour phase, ν₂ = −1.
- **Species 3: liquid.** It appears as $x_3\gamma_3f_3^l$ in the denominator: a liquid **reactant**, ν₃ = −1.
- So the reaction is $\mathrm{A_2(g) + A_3(l) \rightleftharpoons A_1(l)}$, e.g. a gas absorbed with reaction into a liquid, such as hydration or chlorination in the liquid phase. In the printed expression, $f_1^l$ and $f_3^l$ stand for the ratios $f_i/f_i^\circ$: the liquid fugacity at system P relative to the standard state at $P^\circ$.

### (ii) Simplifying assumptions (10)
1. **Liquid fugacity ratio ≈ 1.** $f_i/f_i^\circ = \exp[V_i^l(P - P^\circ)/RT] \approx 1$, because liquid volumes are small. Valid at low to moderate pressures (up to tens of bar); at very high P keep the Poynting factor.
2. **Ideal-gas vapour:** $\hat\phi_2 = 1$. Valid at low P or high T (P well below the critical pressure). Otherwise use the virial equation or a cubic EOS.
3. **Ideal liquid solution** (Lewis–Randall): $\gamma_1 = \gamma_3 = 1$. Valid when 1 and 3 are chemically similar or the solution is dilute in solutes (solvent γ → 1). For a dilute solute, use a Henry's-law standard state instead.
4. **Pure, immiscible liquids** (each liquid its own phase): $x_i\gamma_i = 1$ for that species.
5. **With 1–3 applied:**
$$K = \frac{x_1}{x_3\,y_2\,(P/P^\circ)} \qquad (P^\circ = 1\ \mathrm{bar})$$
   This is solved together with the material balances (reaction coordinate) and the phase-equilibrium relations of each species distributing between gas and liquid (e.g. Raoult's or Henry's law for 2).
6. **K itself** comes from $\ln K = -\Delta G^\circ/RT$ with $\Delta G^\circ = \Delta G^\circ_{f,1}(l) - \Delta G^\circ_{f,2}(g) - \Delta G^\circ_{f,3}(l)$, using each species' standard-state phase.`,
          answer: String.raw`(i) 1 = liquid product (x₁γ₁f₁, numerator), 2 = gas reactant (y₂φ̂₂P/P°), 3 = liquid reactant (x₃γ₃f₃): A₂(g) + A₃(l) ⇌ A₁(l). (ii) f_i/f_i° ≈ 1 (no Poynting, low–moderate P), φ̂₂ = 1 (low P/high T), γ = 1 (ideal solution, similar species) or pure immiscible liquids ⇒ K = x₁/[x₃y₂(P/P°)].` },
        { id: "2022-23-Q4b", label: "(b)", marks: "12+3=15",
          topic: "reaction-equilibria", sub: "Water-gas shift with N₂ at 1100 K, K = 1.1: extent and pressure effect",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`1 mol CO and 2 mol H₂O are being reacted to produce CO₂ and H₂ in presence of 2 mol N₂ in the system. The reaction is taking place at 1100 K and 2 ba. Under ideal condition

(i) Calculate the extent of reaction if the value of K is 1.1 under this condition.

(ii) Predict the outcome if the pressure is doubled for this system.`,
          solution: String.raw`**Given:** CO + H₂O → CO₂ + H₂; feed 1 CO, 2 H₂O, 2 N₂ (inert); T = 1100 K, P = 2 bar ("2 ba" is a misprint for bar); K = 1.1.

**Assumptions:** ideal gases ($\hat\phi_i = 1$), so $\prod(y_iP/P^\circ)^{\nu_i} = K$.

1. **Mole numbers** with reaction coordinate ε:

| | CO | H₂O | CO₂ | H₂ | N₂ | Total |
|---|---|---|---|---|---|---|
| $n_i$ | $1 - \varepsilon$ | $2 - \varepsilon$ | ε | ε | 2 | 5 |

   ν = 1 + 1 − 1 − 1 = 0, so the total stays at 5 mol and $(P/P^\circ)^{-\nu} = 1$.

2. **Equilibrium equation:**
$$K = \frac{y_{CO_2}y_{H_2}}{y_{CO}y_{H_2O}} = \frac{\varepsilon^2}{(1 - \varepsilon)(2 - \varepsilon)} = 1.1$$
$$\varepsilon^2 = 1.1(2 - 3\varepsilon + \varepsilon^2) \;\Rightarrow\; 0.1\varepsilon^2 - 3.3\varepsilon + 2.2 = 0$$
$$\varepsilon = \frac{3.3 - \sqrt{3.3^2 - 4(0.1)(2.2)}}{2(0.1)} = \frac{3.3 - 3.1639}{0.2} = 0.6807$$
   (The other root, 32.3, is impossible since ε ≤ 1.)

3. **Equilibrium composition:**

| | CO | H₂O | CO₂ | H₂ | N₂ |
|---|---|---|---|---|---|
| n (mol) | 0.319 | 1.319 | 0.681 | 0.681 | 2 |
| y | 0.0639 | 0.2639 | 0.1361 | 0.1361 | 0.400 |

   Check: $0.1361^2/(0.0639 \times 0.2639) = 1.10$ ✓. CO conversion = 68.1%.

4. **(ii) Pressure doubled (4 bar).** Since ν = 0,
$$\prod_i y_i^{\nu_i} = K\left(\frac{P}{P^\circ}\right)^{-\nu} = K$$
   This is independent of P. **The extent stays 0.681 and the composition is unchanged**: by Le Chatelier, there is no change in gas moles to favour either side. The inert N₂ has no effect for the same reason. Only at pressures high enough for $\hat\phi_i \ne 1$ would the equilibrium shift slightly.

**Result:** ε = 0.681 mol; doubling P has no effect on the equilibrium (Δν = 0).`,
          answer: String.raw`ε²/[(1 − ε)(2 − ε)] = 1.1 ⇒ ε = 0.681 (y: CO 0.064, H₂O 0.264, CO₂ 0.136, H₂ 0.136, N₂ 0.40). Doubling P: ν = 0 so no change in ε or composition (ideal gas).` }
      ] },
    { id: "2022-23-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q5a", label: "(a)", marks: "10",
          topic: "vle-intro", sub: "Retrograde condensation and its importance in deep natural-gas wells",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Explain the term "retrograde condensation". Discuss its applicability in the operation of deep natural gas wells.`,
          solution: String.raw`![P–T envelope of a mixture: bubble and dew curves meeting at the critical point C, with cricondenbar M, cricondentherm N and the retrograde region](fig/2022-23-Q5a-sketch.svg)

1. **P–T envelope of a mixture at fixed composition** (SVNA §10.3). The bubble-point and dew-point curves meet at the **critical point C**. Unlike a pure substance, C is generally *not* the highest pressure or temperature at which two phases coexist. The envelope extends beyond C to the **cricondenbar M** (maximum pressure) and the **cricondentherm N** (maximum temperature).

2. **Retrograde condensation.** For a temperature between $T_c$ and the cricondentherm, consider isothermal **pressure reduction** from above the envelope (vertical line in the figure):
   - Above the upper dew-point curve the mixture is a single dense vapour.
   - On crossing the dew curve, **liquid forms** although the pressure is falling. The liquid fraction rises to a maximum and then falls.
   - Liquid re-vaporizes at the lower branch of the dew curve.
   Formation of liquid on lowering P (the reverse of normal behaviour) is **retrograde condensation**. The analogous effect between the critical point and the cricondenbar, where liquid vaporizes on cooling, is retrograde vaporization.

3. **Why it happens.** Near the critical region the dew curve bends back (from M to N). The isotherm cuts it twice, so the vapour first becomes saturated with respect to the heavy components when P falls, because the heavy-component solubility in the dense gas decreases.

4. **Deep natural-gas (gas-condensate) wells:**
   - Deep reservoirs are at high pressure (hundreds of bar) and at temperatures between $T_c$ and the cricondentherm of the reservoir fluid, which is single-phase gas.
   - As gas is produced, the reservoir pressure falls into the retrograde region. Heavy hydrocarbons (C₅⁺, the valuable "condensate") condense **in the pores of the rock**, where they wet the rock, cannot flow, and are lost. They also cut the gas permeability near the wellbore ("condensate banking").
   - Remedies: maintain reservoir pressure above the dew point by **cycling** (re-injecting the stripped dry gas), or inject N₂/CO₂. At the surface, the same phenomenon is exploited: separators are run at the pressure and temperature of maximum liquid drop-out to recover the condensate.
   - Pipeline and process design must also allow for liquid appearing on pressure let-down (slugging, hydrates).`,
          answer: String.raw`Retrograde condensation: for T between the mixture critical temperature and the cricondentherm, an isothermal pressure decrease from the dense-gas region crosses the dew curve, so liquid forms (then re-vaporizes at lower P). In deep gas-condensate wells falling reservoir pressure drops valuable condensate in the rock pores (lost, blocks flow), so pressure is maintained by gas cycling and separators are set to maximize condensate recovery.` },
        { id: "2022-23-Q5b", label: "(b)", marks: "25",
          topic: "vle-intro", sub: "Modified Raoult, ln γ = 0.67x²: two-phase P range, flash at x₁ = 0.75, azeotrope test",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A binary system of species 1 and 2 consists of vapor and liquid phases in equilibrium at temperature T. The overall mole fraction of species 1 in the system is $z_1 = 0.65$.

At temperature T

$$\ln\gamma_1 = 0.67x_2^2, \qquad \ln\gamma_2 = 0.67x_1^2$$

$$P_1^{sat} = 32.27\ \mathrm{kPa},\quad P_2^{sat} = 73.14\ \mathrm{kPa}$$

(i) Over what range of pressure can this system exist as two phases at given T and $z_1$.

(ii) For a liquid mole fraction $x_1 = 0.75$, what is the pressure P and what molar fraction v of the system is vapor?

(iii) Show whether or not the system exhibits an azeotrope.`,
          solution: String.raw`**Given:** A = 0.67, $P_1^{sat}$ = 32.27 kPa, $P_2^{sat}$ = 73.14 kPa, $z_1$ = 0.65. This is the same problem as 2023-24 Q8(b). **Assumptions:** modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$.

1. **(i) Bubble point** at $x_1 = z_1 = 0.65$: $\gamma_1 = e^{0.67(0.35)^2} = 1.0855$, $\gamma_2 = e^{0.67(0.65)^2} = 1.3272$.
$$P_{bubl} = 0.65(1.0855)(32.27) + 0.35(1.3272)(73.14) = 22.77 + 33.98 = 56.74\ \mathrm{kPa}, \quad y_1 = 0.401$$

2. **(i) Dew point** at $y_1 = z_1 = 0.65$: $P = 1/\sum_i(y_i/\gamma_iP_i^{sat})$ with γ evaluated at the unknown $x_1$. Iterate:
   - Start: $\gamma = 1$ gives $P = 1/(0.65/32.27 + 0.35/73.14) = 40.1$ kPa and $x_1 = y_1P/(\gamma_1P_1^{sat}) = 0.81$.
   - Update the γ's and repeat. Convergence: $x_1$ = 0.8742, $\gamma_1$ = 1.0107, $\gamma_2$ = 1.6687.
$$P_{dew} = \left[\frac{0.65}{1.0107(32.27)} + \frac{0.35}{1.6687(73.14)}\right]^{-1} = 43.86\ \mathrm{kPa}$$
   Two-phase range: **43.86 kPa < P < 56.74 kPa**.

3. **(ii) $x_1$ = 0.75:** $\gamma_1 = e^{0.67(0.0625)} = 1.0428$, $\gamma_2 = e^{0.67(0.5625)} = 1.4577$.
$$P = 0.75(1.0428)(32.27) + 0.25(1.4577)(73.14) = 25.24 + 26.65 = 51.89\ \mathrm{kPa}, \qquad y_1 = \frac{25.24}{51.89} = 0.4863$$
$$v = \frac{z_1 - x_1}{y_1 - x_1} = \frac{0.65 - 0.75}{0.4863 - 0.75} = 0.379$$

4. **(iii) Azeotrope** requires $\alpha_{12} = \dfrac{\gamma_1P_1^{sat}}{\gamma_2P_2^{sat}} = 1$ somewhere in $0 \le x_1 \le 1$:
$$\alpha_{12} = \frac{32.27}{73.14}e^{0.67(1 - 2x_1)}: \qquad \alpha_{12}(0) = 0.4412e^{0.67} = 0.862, \qquad \alpha_{12}(1) = 0.4412e^{-0.67} = 0.226$$
   The function is monotonic and both end values are below 1, so $\alpha_{12} = 1$ is never reached: **no azeotrope**. The positive deviation (A = 0.67) is too small to overcome the vapour-pressure ratio; an azeotrope would need $A > \ln(73.14/32.27) = 0.818$.

**Result:** (i) 43.86–56.74 kPa; (ii) P = 51.89 kPa, $y_1$ = 0.486, v = 0.379; (iii) no azeotrope.`,
          answer: String.raw`(i) 43.86 kPa (dew, x₁ = 0.874) < P < 56.74 kPa (bubble). (ii) P = 51.89 kPa, y₁ = 0.486, v = 0.379. (iii) α₁₂ falls from 0.862 to 0.226, never 1 ⇒ no azeotrope.` }
      ] },
    { id: "2022-23-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q6a", label: "(a)", marks: "15",
          topic: "solution-theory", sub: "Partial molar properties and the Gibbs–Duhem equation Σx dM̄ = 0",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Define partial molar properties and show that for constant P and T.

$$\sum x_i\,d\bar M_i = 0$$`,
          solution: String.raw`1. **Definition.** For a solution property M (V, U, H, S, G…) with total property nM = M(T, P, n₁, n₂, …), the **partial molar property** of species i is
$$\bar M_i \equiv \left[\frac{\partial(nM)}{\partial n_i}\right]_{T,P,n_j}$$
   It is the response of the total property to adding a differential amount of i at constant T, P and amounts of all other species. It is an intensive function of T, P and composition. Examples: $\bar V_i$, $\bar H_i$, and $\bar G_i = \mu_i$.

2. **Total differential** of nM:
$$d(nM) = \left[\frac{\partial(nM)}{\partial P}\right]_{T,n}dP + \left[\frac{\partial(nM)}{\partial T}\right]_{P,n}dT + \sum_i\bar M_i\,dn_i$$
   or, with $n$ constant in the first two terms,
$$d(nM) = n\left(\frac{\partial M}{\partial P}\right)_{T,x}dP + n\left(\frac{\partial M}{\partial T}\right)_{P,x}dT + \sum_i\bar M_i\,dn_i$$

3. **Substitute** $n_i = x_in$, so $dn_i = x_i\,dn + n\,dx_i$, and $d(nM) = n\,dM + M\,dn$:
$$n\,dM + M\,dn = n\left(\frac{\partial M}{\partial P}\right)dP + n\left(\frac{\partial M}{\partial T}\right)dT + \sum_i\bar M_i(x_i\,dn + n\,dx_i)$$
$$\left[dM - \left(\frac{\partial M}{\partial P}\right)dP - \left(\frac{\partial M}{\partial T}\right)dT - \sum_i\bar M_i\,dx_i\right]n + \left[M - \sum_ix_i\bar M_i\right]dn = 0$$

4. **n and dn are arbitrary and independent,** so each bracket is zero:
$$M = \sum_i x_i\bar M_i \qquad\text{(summability)}$$
$$dM = \left(\frac{\partial M}{\partial P}\right)_{T,x}dP + \left(\frac{\partial M}{\partial T}\right)_{P,x}dT + \sum_i\bar M_i\,dx_i$$

5. **Differentiate the summability relation:** $dM = \sum_i x_i\,d\bar M_i + \sum_i\bar M_i\,dx_i$. Equate with the second result:
$$\left(\frac{\partial M}{\partial P}\right)_{T,x}dP + \left(\frac{\partial M}{\partial T}\right)_{P,x}dT - \sum_i x_i\,d\bar M_i = 0 \qquad\text{(Gibbs–Duhem)}$$

6. **At constant T and P** (dT = dP = 0):
$$\boxed{\sum_i x_i\,d\bar M_i = 0}$$
   For a binary: $x_1\,d\bar M_1/dx_1 + x_2\,d\bar M_2/dx_1 = 0$. The partial properties of the species are not independent: knowing one fixes the other. This is the basis of thermodynamic consistency tests.`,
          answer: String.raw`M̄ᵢ = [∂(nM)/∂nᵢ]_T,P,nj. From d(nM) = n(∂M/∂P)dP + n(∂M/∂T)dT + ΣM̄ᵢdnᵢ with nᵢ = xᵢn: M = ΣxᵢM̄ᵢ and dM = (∂M/∂P)dP + (∂M/∂T)dT + ΣM̄ᵢdxᵢ; combining gives Gibbs–Duhem, and at constant T, P: Σxᵢ dM̄ᵢ = 0.` },
        { id: "2022-23-Q6b", label: "(b)", marks: "5",
          topic: "solution-theory", sub: "Pure-species VLE criterion: equal temperature and fugacity",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"For a pure species coexisting liquid and vapor phases are in equilibrium when they have same temperature and fugacity" True/False – Explain your answer.`,
          solution: String.raw`**True** (with the pressure, which is necessarily the same, equal to $P^{sat}$).

1. For coexisting saturated phases of a pure species, $dG = V\,dP - S\,dT$ with T and P constant during the phase change gives $G^v = G^l$ (SVNA eq. 11.31).
2. For a pure species at the same T, $G_i = \Gamma_i(T) + RT\ln f_i$ (SVNA eq. 11.31), where $\Gamma_i(T)$ depends only on T. Then
$$G_i^v - G_i^l = RT\ln\frac{f_i^v}{f_i^l} = 0 \;\Rightarrow\; f_i^v = f_i^l = f_i^{sat}$$
3. Conversely, if the two phases are at the same T and have equal fugacities, they have equal Gibbs energies (chemical potentials), so no mass transfer can lower G: they are in equilibrium.
4. **Qualification.** "Same T" is essential, because the relation between f and G is defined only at constant T. Mechanical equilibrium (same P) is implied: for a pure species at a given T, $f^l = f^v$ is satisfied only at $P = P^{sat}$. So the full statement is: same T, same P ($= P^{sat}$) and equal fugacity, $f^v = f^l = \phi^{sat}P^{sat}$.`,
          answer: String.raw`True: at equal T, G_i = Γ_i(T) + RT ln f_i, so f^v = f^l ⇔ G^v = G^l (equilibrium); mechanical equilibrium (P = P^sat) is implied, giving f^v = f^l = f^sat = φ^sat P^sat.` },
        { id: "2022-23-Q6c", label: "(c)", marks: "15",
          topic: "solution-theory", sub: "Pure-liquid fugacity with virial φ^sat and Poynting factor",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that for pure liquid

$$f_i = P_i^{sat}\exp\frac{B_{ii}P_i^{sat} + V_i^l(P - P_i^{sat})}{RT}$$`,
          solution: String.raw`**Assumptions:** constant T; liquid incompressible ($V_i^l$ constant) between $P_i^{sat}$ and P; saturated vapour described by the two-term virial equation $Z = 1 + B_{ii}P/RT$.

1. **Fugacity of the saturated liquid.** At the saturation point vapour and liquid are in equilibrium (Q6b):
$$f_i^l(P_i^{sat}) = f_i^v(P_i^{sat}) = \phi_i^{sat}P_i^{sat}$$

2. **φ^sat from the virial equation.** $\ln\phi_i = \int_0^P(Z_i - 1)\frac{dP}{P}$ at constant T. With $Z_i - 1 = B_{ii}P/RT$:
$$\ln\phi_i = \int_0^P\frac{B_{ii}}{RT}dP = \frac{B_{ii}P}{RT} \;\Rightarrow\; \phi_i^{sat} = \exp\frac{B_{ii}P_i^{sat}}{RT}$$

3. **Compress the liquid from $P_i^{sat}$ to P** at constant T. From $dG_i = V_i\,dP$ and $dG_i = RT\,d\ln f_i$:
$$RT\ln\frac{f_i^l(P)}{f_i^{sat}} = \int_{P_i^{sat}}^{P}V_i^l\,dP = V_i^l(P - P_i^{sat})$$
$$f_i = \phi_i^{sat}P_i^{sat}\exp\frac{V_i^l(P - P_i^{sat})}{RT}$$
   The exponential is the **Poynting factor**.

4. **Combine** steps 2 and 3:
$$\boxed{f_i = P_i^{sat}\exp\frac{B_{ii}P_i^{sat} + V_i^l(P - P_i^{sat})}{RT}}$$

5. **Interpretation.** The first term corrects for vapour nonideality at saturation ($B_{ii} < 0$, so $\phi^{sat} < 1$). The second corrects for compressing the liquid; it is small unless P − P^sat is tens of bar, as $V^l$ is small. At low pressure both are ≈ 1 and $f_i \approx P_i^{sat}$, which is the approximation behind Raoult's law. $B_{ii}$ can be estimated from the Pitzer correlation, $B_{ii}P_c/RT_c = B^0 + \omega B^1$.`,
          answer: String.raw`f_i^l(P^sat) = φ^sat P^sat with ln φ^sat = B_iiP^sat/RT (virial Z = 1 + BP/RT); compress the incompressible liquid: RT ln(f/f^sat) = V^l(P − P^sat). Together: f_i = P_i^sat exp{[B_iiP_i^sat + V_i^l(P − P_i^sat)]/RT}.` }
      ] },
    { id: "2022-23-Q7", q: 7, section: "B",
      stem: String.raw`VLE data for methyl tert-butyl ether(1)/dichloromethane(2) at 308.15 K are as follows:

| P/kPa | x₁ | y₁ | P/kPa | x₁ | y₁ |
|---|---|---|---|---|---|
| 85.2 | 0.00 | 0.00 | 53.6 | 0.674 | 0.588 |
| 82.2 | 0.058 | 0.025 | 50.4 | 0.847 | 0.824 |
| 76.7 | 0.166 | 0.08 | 49.7 | 0.953 | 0.950 |
| 68 | 0.332 | 0.197 | 49.62 | 1.00 | 1.00 |
| 59.6 | 0.504 | 0.368 | | | |

The data are well co-related by three parameter Margules equation

$$\frac{G^E}{RT} = (A_{21}x_1 + A_{12}x_2 - Cx_1x_2)x_1x_2$$

Implied by this equation are the expressions:

$$\ln\gamma_1 = x_2^2[A_{12} + 2(A_{21} - A_{12} - C)x_1 + 3Cx_1^2]$$

*(35 marks for the whole question; the paper gives no split between (a), (b) and (c).)*`,
      parts: [
        { id: "2022-23-Q7a", label: "(a)", marks: "",
          topic: "solution-applications", sub: "MTBE/dichloromethane at 308.15 K: three-parameter Margules fit to VLE data",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(a) Find the values of parameters A₁₂, A₂₁ and C that provide the best fit of $G^E/RT$ to the data.`,
          solution: String.raw`**Given:** T = 308.15 K; $P_1^{sat}$ = 49.62 kPa (x₁ = 1), $P_2^{sat}$ = 85.2 kPa (x₁ = 0). This is SVNA Example 12.1-type data (MTBE/DCM, negative deviations).

**Assumptions:** low pressure, so modified Raoult's law holds and $\gamma_i = y_iP/(x_iP_i^{sat})$. The companion expression (by symmetry) is $\ln\gamma_2 = x_1^2[A_{21} + 2(A_{12} - A_{21} - C)x_2 + 3Cx_2^2]$.

1. **Reduce the data:**

| $x_1$ | $\gamma_1$ | $\gamma_2$ | $\ln\gamma_1$ | $\ln\gamma_2$ | $G^E/RT$ | $G^E/x_1x_2RT$ |
|---|---|---|---|---|---|---|
| 0.058 | 0.7140 | 0.9986 | −0.3368 | −0.0014 | −0.0209 | −0.3819 |
| 0.166 | 0.7449 | 0.9931 | −0.2945 | −0.0070 | −0.0547 | −0.3950 |
| 0.332 | 0.8132 | 0.9594 | −0.2068 | −0.0414 | −0.0963 | −0.4344 |
| 0.504 | 0.8770 | 0.8913 | −0.1312 | −0.1150 | −0.1232 | −0.4928 |
| 0.674 | 0.9424 | 0.7951 | −0.0593 | −0.2293 | −0.1148 | −0.5223 |
| 0.847 | 0.9881 | 0.6805 | −0.0119 | −0.3850 | −0.0690 | −0.5325 |
| 0.953 | 0.9985 | 0.6206 | −0.0015 | −0.4771 | −0.0239 | −0.5335 |

   For example, at $x_1$ = 0.332: $\gamma_1 = 0.197 \times 68/(0.332 \times 49.62) = 0.8132$ and $\gamma_2 = 0.803 \times 68/(0.668 \times 85.2) = 0.9594$.

2. **Best fit.** $G^E/x_1x_2RT = A_{21}x_1 + A_{12}x_2 - Cx_1x_2$ is **linear in the three parameters**. Least squares on the seven values of $G^E/x_1x_2RT$ (normal equations with regressors $x_2$, $x_1$, $-x_1x_2$) gives
$$\boxed{A_{12} = -0.351,\quad A_{21} = -0.541,\quad C = 0.154}$$
   $\ln\gamma_1^\infty = A_{12} = -0.351$ and $\ln\gamma_2^\infty = A_{21} = -0.541$. The curve $-0.351x_2 - 0.541x_1 - 0.154x_1x_2$ reproduces the points to within about 0.01. (The fit is sensitive to the dilute-end points: without $x_1$ = 0.058 and 0.953 it gives −0.324, −0.539, 0.223.)

**Result:** $A_{12}$ = −0.351, $A_{21}$ = −0.541, C = 0.154 (negative deviations from Raoult's law).`,
          answer: String.raw`γᵢ = yᵢP/(xᵢPᵢˢᵃᵗ); least squares on G^E/x₁x₂RT = A₂₁x₁ + A₁₂x₂ − Cx₁x₂ gives A₁₂ = −0.351, A₂₁ = −0.541, C = 0.154.` },
        { id: "2022-23-Q7b", label: "(b)", marks: "",
          topic: "solution-applications", sub: "MTBE/dichloromethane: plot ln γ₁, ln γ₂ and GE/x₁x₂RT, data vs Margules",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(b) Prepare a plot of ln γ₁, ln γ₂ and $G^E/x_1x_2RT$ vs x₁ showing both the experimental and calculated values.`,
          solution: String.raw`**Given:** the fit from (a): $A_{12}$ = −0.351, $A_{21}$ = −0.541, C = 0.154, and the experimental values reduced in (a) step 1.

1. **Calculated values from the fitted equation:**

| $x_1$ | 0.058 | 0.166 | 0.332 | 0.504 | 0.674 | 0.847 | 0.953 |
|---|---|---|---|---|---|---|---|
| $\ln\gamma_1$ calc | −0.346 | −0.315 | −0.236 | −0.143 | −0.064 | −0.014 | −0.001 |
| $\ln\gamma_2$ calc | −0.000 | −0.004 | −0.032 | −0.100 | −0.213 | −0.372 | −0.487 |
| $G^E/x_1x_2RT$ calc | −0.371 | −0.404 | −0.448 | −0.485 | −0.513 | −0.532 | −0.539 |

![ln γ₁, ln γ₂ and GE/x₁x₂RT versus x₁ for MTBE/DCM: data points and three-parameter Margules curves](fig/2022-23-Q7-sol.svg)

   Both ln γ are negative (attraction between the ether oxygen and the acidic H of CH₂Cl₂). Each tends to zero with zero slope as its species becomes pure, as Gibbs–Duhem requires. The largest scatter is in $\ln\gamma_1$ at small $x_1$, where errors in $y_1$ are magnified.

**Result:** the three-parameter Margules curves pass through the reduced data; both ln γ are negative and go to zero with zero slope at their pure-species ends.`,
          answer: String.raw`Calculated ln γ₁, ln γ₂ and G^E/x₁x₂RT follow the data within about 0.01–0.03; both ln γ < 0 (negative deviation).` },
        { id: "2022-23-Q7c", label: "(c)", marks: "",
          topic: "solution-applications", sub: "MTBE/dichloromethane at 308.15 K: P-x-y diagram from the Margules fit",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(c) Prepare a P-x-y diagram.`,
          solution: String.raw`**Given:** the fit from (a) and $P_1^{sat}$ = 49.62 kPa, $P_2^{sat}$ = 85.2 kPa.

1. **P–x–y from the correlation:**
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat}, \qquad y_1 = \frac{x_1\gamma_1P_1^{sat}}{P}$$

| $x_1$ | 0.058 | 0.166 | 0.332 | 0.504 | 0.674 | 0.847 | 0.953 |
|---|---|---|---|---|---|---|---|
| $P_{calc}$ (kPa) | 82.28 | 76.76 | 68.15 | 59.94 | 53.81 | 50.42 | 49.69 |
| $P_{exp}$ (kPa) | 82.2 | 76.7 | 68.0 | 59.6 | 53.6 | 50.4 | 49.7 |
| $y_{1,calc}$ | 0.025 | 0.078 | 0.191 | 0.362 | 0.583 | 0.822 | 0.950 |
| $y_{1,exp}$ | 0.025 | 0.080 | 0.197 | 0.368 | 0.588 | 0.824 | 0.950 |

   rms δP = 0.17 kPa, rms δy₁ = 0.004.

![P-x-y diagram for MTBE/dichloromethane at 308.15 K: data and correlation](fig/2022-23-Q7-pxy.svg)

   P falls monotonically from $P_2^{sat}$ to $P_1^{sat}$. The bubble curve sags below the Raoult straight line (negative deviation), and the diagram flattens near pure MTBE ($dP/dx_1 \to$ small as $P \to 49.62$ kPa), but there is no extremum in the range, so no azeotrope.

**Result:** $A_{12}$ = −0.351, $A_{21}$ = −0.541, C = 0.154; the correlation reproduces P within 0.34 kPa and $y_1$ within 0.006.`,
          answer: String.raw`P = ΣxᵢγᵢPᵢˢᵃᵗ: P falls from 85.2 to 49.62 kPa, below the Raoult line; correlation matches P within 0.34 kPa and y₁ within 0.006.` }
      ] },
    { id: "2022-23-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q8a", label: "(a)", marks: "15",
          topic: "solution-theory", sub: "Partial excess enthalpies from H^E = x₁x₂(40x₁ + 20x₂)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The excess enthalpy for a liquid mixture of species 1 and 2 at fixed T and P is represented by the equation $H^E = x_1x_2(40x_1 + 20x_2)$ where $H^E$ is in J/mol. Determine expressions for $\bar H_1^E$ and $\bar H_2^E$ as function of x₁.`,
          solution: String.raw`1. **In terms of $x_1$ only** ($x_2 = 1 - x_1$, $40x_1 + 20x_2 = 20 + 20x_1$):
$$H^E = (20 + 20x_1)x_1(1 - x_1) = 20x_1 - 20x_1^3, \qquad \frac{dH^E}{dx_1} = 20 - 60x_1^2$$

2. **Partial excess properties** (binary relations, valid for any excess property):
$$\bar H_1^E = H^E + x_2\frac{dH^E}{dx_1} = 20x_1 - 20x_1^3 + (1 - x_1)(20 - 60x_1^2)$$
$$\boxed{\bar H_1^E = 20 - 60x_1^2 + 40x_1^3\ \mathrm{J/mol}}$$
$$\bar H_2^E = H^E - x_1\frac{dH^E}{dx_1} = 20x_1 - 20x_1^3 - 20x_1 + 60x_1^3$$
$$\boxed{\bar H_2^E = 40x_1^3\ \mathrm{J/mol}}$$

3. **Checks:**
   - Summability: $x_1\bar H_1^E + x_2\bar H_2^E = 20x_1 - 60x_1^3 + 40x_1^4 + 40x_1^3 - 40x_1^4 = 20x_1 - 20x_1^3 = H^E$ ✓.
   - Gibbs–Duhem: $x_1(-120x_1 + 120x_1^2) + (1 - x_1)(120x_1^2) = 0$ ✓.
   - Limits: $\bar H_1^E(x_1 = 1) = 0$ and $\bar H_2^E(x_1 = 0) = 0$ (a pure species has no excess property). Infinite dilution: $\bar H_1^{E,\infty} = 20$ J/mol, $\bar H_2^{E,\infty} = 40$ J/mol.

These agree with 2023-24 Q5(b): $\bar H_i = H_i + \bar H_i^E$, with $H_1 = 400$ and $H_2 = 600$ J/mol.`,
          answer: String.raw`H^E = 20x₁ − 20x₁³; H̄₁^E = 20 − 60x₁² + 40x₁³ J/mol, H̄₂^E = 40x₁³ J/mol (H̄₁^E,∞ = 20, H̄₂^E,∞ = 40 J/mol; satisfies summability and Gibbs–Duhem).` },
        { id: "2022-23-Q8b", label: "(b)", marks: "10",
          topic: "solution-theory", sub: "Partial molar volumes from a quadratic molar-density correlation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`If the molar density of a binary mixture is given by the empirical

$$\rho = a_0 + a_1x_1 + a_2x_1^2$$

Find the $\bar V_1$ and $\bar V_2$`,
          solution: String.raw`1. **Molar volume:** $V = 1/\rho$, so
$$\frac{dV}{dx_1} = -\frac{1}{\rho^2}\frac{d\rho}{dx_1} = -\frac{a_1 + 2a_2x_1}{\rho^2}$$

2. **$\bar V_1 = V + x_2\,dV/dx_1$:**
$$\bar V_1 = \frac{1}{\rho} - \frac{(1 - x_1)(a_1 + 2a_2x_1)}{\rho^2} = \frac{(a_0 + a_1x_1 + a_2x_1^2) - (a_1 + 2a_2x_1 - a_1x_1 - 2a_2x_1^2)}{\rho^2}$$
$$\boxed{\bar V_1 = \frac{(a_0 - a_1) + 2(a_1 - a_2)x_1 + 3a_2x_1^2}{(a_0 + a_1x_1 + a_2x_1^2)^2}}$$

3. **$\bar V_2 = V - x_1\,dV/dx_1$:**
$$\bar V_2 = \frac{1}{\rho} + \frac{x_1(a_1 + 2a_2x_1)}{\rho^2} = \frac{a_0 + a_1x_1 + a_2x_1^2 + a_1x_1 + 2a_2x_1^2}{\rho^2}$$
$$\boxed{\bar V_2 = \frac{a_0 + 2a_1x_1 + 3a_2x_1^2}{(a_0 + a_1x_1 + a_2x_1^2)^2}}$$

4. **Checks:**
   - $x_1 = 0$: $\bar V_2 = a_0/a_0^2 = 1/a_0 = V_2$ (pure 2) ✓, and $\bar V_1^\infty = (a_0 - a_1)/a_0^2$.
   - $x_1 = 1$: $\bar V_1 = (a_0 + a_1 + a_2)/(a_0 + a_1 + a_2)^2 = 1/\rho_1 = V_1$ ✓, and $\bar V_2^\infty = (a_0 + 2a_1 + 3a_2)/(a_0 + a_1 + a_2)^2$.
   - Summability: $x_1\bar V_1 + x_2\bar V_2 = [a_0 + a_1x_1 + a_2x_1^2]/\rho^2 = 1/\rho = V$ ✓.`,
          answer: String.raw`V = 1/ρ, dV/dx₁ = −(a₁ + 2a₂x₁)/ρ²; V̄₁ = [(a₀ − a₁) + 2(a₁ − a₂)x₁ + 3a₂x₁²]/ρ², V̄₂ = [a₀ + 2a₁x₁ + 3a₂x₁²]/ρ², with ρ = a₀ + a₁x₁ + a₂x₁².` },
        { id: "2022-23-Q8c", label: "(c)", marks: "10",
          topic: "solution-applications", sub: "Limit of G^E/x₁x₂RT as x₁ → 0 equals ln γ₁^∞",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that for pure liquid

$$\lim_{x_1 \to 0}\frac{G^E}{x_1x_2RT} = \ln\gamma_1^\infty$$`,
          solution: String.raw`("Pure liquid" in the question means the binary liquid as $x_1 \to 0$, i.e. nearly pure species 2.)

1. **Summability for $G^E/RT$:** $\dfrac{G^E}{RT} = x_1\ln\gamma_1 + x_2\ln\gamma_2$. Divide by $x_1x_2$:
$$\frac{G^E}{x_1x_2RT} = \frac{\ln\gamma_1}{x_2} + \frac{\ln\gamma_2}{x_1}$$

2. **First term:** as $x_1 \to 0$, $x_2 \to 1$ and $\ln\gamma_1 \to \ln\gamma_1^\infty$ (finite), so it tends to $\ln\gamma_1^\infty$.

3. **Second term** is 0/0, because $\ln\gamma_2 \to 0$ as species 2 becomes pure ($\gamma_2 \to 1$, Lewis–Randall standard state). By L'Hôpital's rule,
$$\lim_{x_1 \to 0}\frac{\ln\gamma_2}{x_1} = \lim_{x_1 \to 0}\frac{d\ln\gamma_2}{dx_1}$$

4. **Gibbs–Duhem** at constant T, P: $x_1\dfrac{d\ln\gamma_1}{dx_1} + x_2\dfrac{d\ln\gamma_2}{dx_1} = 0$, so
$$\frac{d\ln\gamma_2}{dx_1} = -\frac{x_1}{x_2}\frac{d\ln\gamma_1}{dx_1} \to 0 \quad\text{as } x_1 \to 0$$
   ($d\ln\gamma_1/dx_1$ is finite at $x_1$ = 0). The second term therefore vanishes.

5. **Hence**
$$\boxed{\lim_{x_1 \to 0}\frac{G^E}{x_1x_2RT} = \ln\gamma_1^\infty} \qquad\text{and similarly}\qquad \lim_{x_2 \to 0}\frac{G^E}{x_1x_2RT} = \ln\gamma_2^\infty$$

6. **Use:** on a plot of $G^E/x_1x_2RT$ against $x_1$, the intercepts at $x_1$ = 0 and 1 give $\ln\gamma_1^\infty$ and $\ln\gamma_2^\infty$. For Margules, $G^E/x_1x_2RT = A_{21}x_1 + A_{12}x_2$, so $\ln\gamma_1^\infty = A_{12}$ and $\ln\gamma_2^\infty = A_{21}$. This is how Q7 and the SVNA examples read the parameters.`,
          answer: String.raw`G^E/x₁x₂RT = ln γ₁/x₂ + ln γ₂/x₁; as x₁ → 0 the first → ln γ₁^∞, the second (0/0) → d ln γ₂/dx₁ = −(x₁/x₂)d ln γ₁/dx₁ → 0 by Gibbs–Duhem. Hence the limit is ln γ₁^∞ (the x₁ = 0 intercept; = A₁₂ for Margules).` }
      ] }
  ]
});
