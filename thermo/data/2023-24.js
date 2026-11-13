QB.paper({
  year: "2023-24", date: "14/09/2025", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engg. Examination 2023-2024, CHE 313 (Solution Thermodynamics), 3 hours, 210 marks. Section A: answer any THREE of Q1–Q4. Section B: answer any THREE of Q5–Q8; make necessary assumptions and state them. Use separate scripts for each section. Attached to the paper: Figure for Q5(a) (P–T–composition diagram of ethane/n-heptane), Figure for Q8(a) (H–x diagram of H₂SO₄/H₂O with 250, 300 and 350 K isotherms) and the table for Q6(d) (steam-table data at 300 °C, transcribed in the question).`,
  questions: [
    { id: "2023-24-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q1a", label: "(a)", marks: "12+3=15",
          topic: "refrigeration", sub: "Absorption refrigeration cycle: schematic, working principle and limitations",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Describe the absorption-refrigeration cycle using a schematic diagram. Mention its limitations.`,
          solution: String.raw`### Idea
A vapour-compression refrigerator spends **work** to lift the low-pressure refrigerant vapour to the condenser pressure. An absorption refrigerator does the same job with **heat**. The vapour is absorbed into a liquid at low pressure, the liquid solution is pumped to high pressure (pumping a liquid costs very little work), and the refrigerant is then driven out again by heating. The usual pairs are ammonia (refrigerant) + water (absorbent), and water (refrigerant) + aqueous LiBr (absorbent) for air conditioning.

![Absorption refrigeration cycle: generator, condenser, expansion valve, evaporator, absorber and solution pump](fig/2023-24-Q1a-sketch.svg)

### Working principle (NH₃–H₂O)
1. **Evaporator (low P):** liquid NH₃ evaporates at $T_C$ and takes heat $Q_C$ from the refrigerated space. This is the same as in a vapour-compression cycle.
2. **Absorber (low P):** the NH₃ vapour is absorbed by weak (NH₃-lean) aqueous solution. Absorption is exothermic, so cooling water removes heat at about the surroundings temperature $T_S$. This produces a strong (NH₃-rich) solution.
3. **Pump:** the strong solution is pumped to the condenser pressure. The work is small because a liquid's specific volume is small ($W = \int V\,dP$).
4. **Generator (still, high P):** heat $Q_H$ from a source at $T_H$ (steam, flue gas, solar heat, waste heat) boils NH₃ out of the strong solution. A rectifier strips out the water vapour carried with it.
5. **Condenser (high P):** the NH₃ vapour condenses and rejects heat to cooling water at $T_S$.
6. **Expansion valve:** the liquid NH₃ is throttled to evaporator pressure and the loop closes. The hot weak solution returns from the generator to the absorber through a pressure-reducing valve. A solution heat exchanger (strong solution against weak solution) recovers heat.

### Thermodynamic limit (SVNA §9.4)
The heat $Q_H$ drives a Carnot engine between $T_H$ and $T_S$, and its work drives a Carnot refrigerator between $T_C$ and $T_S$:
$$W = Q_C\,\frac{T_S - T_C}{T_C}, \qquad W = Q_H\,\frac{T_H - T_S}{T_H} \;\Rightarrow\; \frac{Q_H}{Q_C} = \frac{T_H}{T_H - T_S}\cdot\frac{T_S - T_C}{T_C}$$
Example: steam at 100 °C, surroundings 30 °C, refrigeration at −10 °C gives $Q_H/Q_C = \frac{373.15}{70}\cdot\frac{40}{263.15} = 0.81$, so the best possible $Q_C/Q_H$ is about 1.2. Real single-effect units reach 0.5–0.7.

### Limitations
- **Low COP** (heat in per unit of refrigeration): about 0.5–0.7, compared with 3–5 for vapour compression. It pays only when cheap or waste heat is available.
- **Bulky, high capital cost:** four heat exchangers plus a solution circuit, a rectifier and a solution heat exchanger.
- **Needs a heat source** hot enough (roughly ≥ 80–150 °C, depending on $T_C$).
- **Working-pair problems:** NH₃ is toxic and needs a rectifier because water is volatile. In LiBr–H₂O, water is the refrigerant, so $T_C$ must stay above 0 °C, the plant runs under deep vacuum, and LiBr can crystallize and corrode.
- **Slow response** to load changes; performance falls quickly as the cooling-water temperature rises.`,
          answer: String.raw`Refrigerant vapour from the evaporator is absorbed (absorber, cooled), the solution is pumped to high P, heat Q_H in the generator drives the refrigerant out, it condenses, is throttled and evaporates (Q_C). Q_H/Q_C ≥ [T_H/(T_H−T_S)]·[(T_S−T_C)/T_C]. Limitations: low COP (0.5–0.7), bulky/costly, needs a hot heat source, NH₃ toxicity and rectification, LiBr crystallization, T_C > 0 °C for LiBr–water.` },
        { id: "2023-24-Q1b", label: "(b)", marks: "10+5=15",
          topic: "phase-equilibria-topics", sub: "Criterion dG ≤ 0 at constant T and P from the entropy inequality",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`For an irreversible process, $dS^t + dS^{surr} \ge 0$, where $S^t$ is the system entropy and $S^{surr}$ is the entropy of the surroundings. Assuming the system and the surroundings are in equilibrium, show that $dG^t \le 0$ at constant temperature (T) and pressure (P). From this derivation, explain why this form of the equation is the most useful among other thermodynamic correlations, such as $dS^t \ge 0$ at constant internal energy (U) and volume (V).`,
          solution: String.raw`**Assumptions:** closed system of uniform T and P; the system exchanges heat with surroundings at the same temperature T (thermal equilibrium with the surroundings), and only expansion work at the system pressure P is done (mechanical equilibrium).

1. **Second law for system + surroundings:**
$$dS^t + dS^{surr} \ge 0$$

2. **Entropy change of the surroundings.** The surroundings act as a reservoir at T that receives heat $-dQ$ reversibly:
$$dS^{surr} = \frac{-dQ}{T} \;\Rightarrow\; dS^t - \frac{dQ}{T} \ge 0 \;\Rightarrow\; dQ \le T\,dS^t$$

3. **First law with PV work only:**
$$dU^t = dQ - P\,dV^t \;\Rightarrow\; dQ = dU^t + P\,dV^t$$

4. **Combine:**
$$\boxed{dU^t + P\,dV^t - T\,dS^t \le 0}$$
   This holds for every process of a closed system that stays in thermal and mechanical equilibrium with its surroundings. The equality applies to reversible changes, the inequality to irreversible (spontaneous) ones.

5. **Special case, constant U and V:** $dU^t = dV^t = 0$, so $(dS^t)_{U,V} \ge 0$.

6. **Constant T and P.** Write $P\,dV^t = d(PV^t)$ and $T\,dS^t = d(TS^t)$, since P and T are fixed:
$$d(U^t + PV^t - TS^t)_{T,P} \le 0 \quad\text{and, since } G^t = H^t - TS^t = U^t + PV^t - TS^t,$$
$$\boxed{(dG^t)_{T,P} \le 0}$$
   At constant T and P every irreversible change lowers $G^t$. Equilibrium is the state of **minimum total Gibbs energy**, where $(dG^t)_{T,P} = 0$.

### Why the $G$ form is the most useful
- **The constraints are the ones we control.** In laboratories and plants, T and P are fixed and measured: reactors and separators run at set temperature and pressure. Holding U and V of a real system constant is almost impossible, and U and S cannot be measured directly.
- **It gives working criteria.** Minimum $G^t$ at fixed T, P gives equality of chemical potentials (fugacities) for phase equilibrium, $\sum\nu_i\mu_i = 0$ and $\Delta G^\circ = -RT\ln K$ for reactions, Gibbs-energy minimization with Lagrange multipliers for multireaction systems, and the stability test $\partial^2(\Delta G/RT)/\partial x_1^2 > 0$ for phase splitting.
- **Everything is in system properties.** Unlike $dS^t + dS^{surr} \ge 0$, the surroundings no longer appear, and $G$ connects directly to measurable data ($\Delta G^\circ_f$, vapour pressures, activity coefficients).`,
          answer: String.raw`dS^surr = −dQ/T and dQ = dU^t + P dV^t give dU^t + P dV^t − T dS^t ≤ 0; at fixed T, P this is d(U^t + PV^t − TS^t) = (dG^t)_T,P ≤ 0 (equilibrium = minimum G^t). Most useful because T and P are the variables actually held fixed and measured, and it leads directly to μ-equality, K and stability criteria.` },
        { id: "2023-24-Q1c", label: "(c)", marks: "5",
          topic: "reaction-equilibria", sub: "Three simultaneous reactions: mole fraction of hydrogen in terms of extents",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`$$\mathrm{H_2 + \tfrac{1}{2}O_2 = H_2O}\qquad \mathrm{C + \tfrac{1}{2}O_2 = CO}\qquad \mathrm{C + O_2 = CO_2}$$

All the three reactions are in equilibrium and take place at once in a closed chamber. At initial condition, 1 mol of H₂O, 0.5 mol of O₂ and 1.88 mol of N₂ were entered in the system. Write down the equation for the mole fraction of hydrogen at equilibrium.`,
          solution: String.raw`**Given:** initial moles H₂O 1, O₂ 0.5, N₂ 1.88 (inert); no H₂, C, CO or CO₂ initially. Reactions $j$ = 1, 2, 3 as written, with reaction coordinates $\varepsilon_1, \varepsilon_2, \varepsilon_3$.

**Find:** $y_{H_2}$ in terms of the $\varepsilon_j$.

**Assumptions:** carbon is a pure solid phase (not counted in the gas mole fractions); all other species are gases.

1. **Species balances** $n_i = n_{i0} + \sum_j \nu_{i,j}\varepsilon_j$:

| Species | $\nu_1$ | $\nu_2$ | $\nu_3$ | $n_i$ |
|---|---|---|---|---|
| H₂ | −1 | 0 | 0 | $-\varepsilon_1$ |
| O₂ | −½ | −½ | −1 | $0.5 - 0.5\varepsilon_1 - 0.5\varepsilon_2 - \varepsilon_3$ |
| H₂O | +1 | 0 | 0 | $1 + \varepsilon_1$ |
| CO | 0 | +1 | 0 | $\varepsilon_2$ |
| CO₂ | 0 | 0 | +1 | $\varepsilon_3$ |
| N₂ | 0 | 0 | 0 | $1.88$ |
| C (solid) | 0 | −1 | −1 | $-\varepsilon_2 - \varepsilon_3$ |

2. **Total gas moles:** $\nu_1 = -\tfrac12$, $\nu_2 = +\tfrac12$ (gas only: −½ O₂ + 1 CO), $\nu_3 = 0$, and $n_0 = 1 + 0.5 + 1.88 = 3.38$:
$$n = 3.38 - 0.5\varepsilon_1 + 0.5\varepsilon_2$$

3. **Mole fraction of hydrogen:**
$$\boxed{y_{H_2} = \frac{-\varepsilon_1}{3.38 - 0.5\varepsilon_1 + 0.5\varepsilon_2}}$$

4. **Physical check.** No carbon is present at the start, so $n_C = -(\varepsilon_2 + \varepsilon_3) \ge 0$, $n_{CO} = \varepsilon_2 \ge 0$ and $n_{CO_2} = \varepsilon_3 \ge 0$. This forces $\varepsilon_2 = \varepsilon_3 = 0$: only water dissociation (reaction 1 running backwards, $\varepsilon_1 < 0$) can occur, and
$$y_{H_2} = \frac{-\varepsilon_1}{3.38 - 0.5\varepsilon_1}$$
   with $\varepsilon_1$ fixed by $K_1 = \dfrac{y_{H_2O}}{y_{H_2}\,y_{O_2}^{1/2}}\left(\dfrac{P}{P^\circ}\right)^{1/2}$.`,
          answer: String.raw`y_H₂ = −ε₁/(3.38 − 0.5ε₁ + 0.5ε₂) (gas total n = 3.38 − 0.5ε₁ + 0.5ε₂; solid C excluded). With no carbon initially ε₂ = ε₃ = 0, so y_H₂ = −ε₁/(3.38 − 0.5ε₁), ε₁ < 0 (water dissociation).` }
      ] },
    { id: "2023-24-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q2a", label: "(a)", marks: "12+3=15",
          topic: "phase-equilibria-topics", sub: "Three stability criteria for liquid–liquid equilibrium and their significance",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the three stability criteria for Liquid-Liquid equilibrium. Explain the significance of the stability criteria for an equilibrium.`,
          solution: String.raw`**Assumptions:** binary liquid at constant T and P.

1. **Start from $(dG^t)_{T,P} \le 0$.** A single liquid phase is stable only if splitting it into two phases cannot lower $G^t$. Geometrically, the curve of $\Delta G$ (Gibbs energy of mixing) against $x_1$ must be convex everywhere:
$$\frac{d^2\Delta G}{dx_1^2} > 0 \quad\text{or}\quad \frac{d^2(\Delta G/RT)}{dx_1^2} > 0 \qquad (T, P\ \text{const.})$$
   If the curve has a concave part, the common tangent touches it at two compositions $x^\alpha$ and $x^\beta$. Any mixture between them has lower $G$ as two liquids than as one.

2. **Express $\Delta G$ through $G^E$:**
$$\frac{\Delta G}{RT} = x_1\ln x_1 + x_2\ln x_2 + \frac{G^E}{RT}$$
$$\frac{d^2(\Delta G/RT)}{dx_1^2} = \frac{1}{x_1} + \frac{1}{x_2} + \frac{d^2(G^E/RT)}{dx_1^2} = \frac{1}{x_1x_2} + \frac{d^2(G^E/RT)}{dx_1^2}$$
   Stability therefore requires
$$\frac{d^2(G^E/RT)}{dx_1^2} > -\frac{1}{x_1x_2}$$

3. **Introduce activity coefficients.** $G^E/RT = x_1\ln\gamma_1 + x_2\ln\gamma_2$. With Gibbs–Duhem ($x_1\,d\ln\gamma_1 + x_2\,d\ln\gamma_2 = 0$):
$$\frac{d(G^E/RT)}{dx_1} = \ln\gamma_1 - \ln\gamma_2, \qquad \frac{d^2(G^E/RT)}{dx_1^2} = \frac{d\ln\gamma_1}{dx_1} - \frac{d\ln\gamma_2}{dx_1} = \frac{1}{x_2}\frac{d\ln\gamma_1}{dx_1}$$
   (Gibbs–Duhem gives $d\ln\gamma_2/dx_1 = -(x_1/x_2)\,d\ln\gamma_1/dx_1$.) Substituting into step 2:
$$\frac{1}{x_2}\frac{d\ln\gamma_1}{dx_1} > -\frac{1}{x_1x_2} \;\Rightarrow\; \boxed{\frac{d\ln\gamma_1}{dx_1} > -\frac{1}{x_1}} \qquad \text{(criterion 1)}$$

4. **In terms of fugacity.** $\hat f_1 = x_1\gamma_1 f_1$ with $f_1$ fixed at given T, P:
$$\frac{d\ln\hat f_1}{dx_1} = \frac{1}{x_1} + \frac{d\ln\gamma_1}{dx_1} > 0 \;\Rightarrow\; \boxed{\frac{d\hat f_1}{dx_1} > 0} \qquad \text{(criterion 2)}$$
   (since $\hat f_1 > 0$). For species 2 the analogue is $d\hat f_2/dx_1 < 0$.

5. **In terms of chemical potential.** $\mu_1 = \Gamma_1(T) + RT\ln\hat f_1$, so $d\mu_1/dx_1 = RT\,d\ln\hat f_1/dx_1$:
$$\boxed{\frac{d\mu_1}{dx_1} > 0} \qquad \text{(criterion 3)}$$

### Significance
- These criteria decide whether a liquid of given composition stays **one phase or splits into two** (LLE). Where they fail, the curve of $\Delta G$ against $x_1$ is concave, and the system lowers its Gibbs energy by splitting into phases α and β of equal $\hat f_i$ (equal $\mu_i$).
- They test whether a $G^E$ model **predicts** phase splitting. For example, the two-suffix Margules model $G^E/RT = Ax_1x_2$ gives $d^2(\Delta G/RT)/dx_1^2 = 1/(x_1x_2) - 2A$, so it predicts two liquids when $A > 2$. Wilson's equation can never predict LLE.
- Physically, each species' fugacity (escaping tendency) must rise as its own mole fraction rises. A computed equilibrium state that breaks this is unstable or metastable (between the binodal and the spinodal), so it cannot be the real equilibrium.
- Applied to VLE, the same criteria give $dy_1/dx_1 > 0$ and the azeotrope condition $dP/dx_1 = 0$ where $y_1 = x_1$.`,
          answer: String.raw`d²(ΔG/RT)/dx₁² > 0 ⇒ d²(G^E/RT)/dx₁² > −1/(x₁x₂) ⇒ (1) d ln γ₁/dx₁ > −1/x₁, (2) d f̂₁/dx₁ > 0, (3) dμ₁/dx₁ > 0 (const T, P). Where they fail the liquid splits into two phases (LLE); they test G^E models (two-suffix Margules splits for A > 2) and screen out unstable solutions.` },
        { id: "2023-24-Q2b", label: "(b)", marks: "10+3=13",
          topic: "refrigeration", sub: "Vapour-compression cycle on ln P–H diagram and its irreversibilities",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the lnP vs. H diagram and describe the vapor compression cycle. Using the diagram, explain the irreversibility of the process.`,
          solution: String.raw`![Vapour-compression cycle: schematic, T–S and ln P–H diagrams with states 1–4](fig/2023-24-Q2b-sketch.svg)

### The cycle (SVNA Fig. 9.1/9.2 numbering)
- **1 → 2, evaporation** at constant low pressure and temperature $T_C$. Wet vapour from the throttle takes heat from the cold space and leaves as saturated (or slightly superheated) vapour. On ln P–H this is a horizontal line to the right; $Q_C = H_2 - H_1$.
- **2 → 3, compression** to the condenser pressure. Ideally isentropic (2 → 3′); really $H_3 - H_2 = (H_3' - H_2)/\eta$. On ln P–H this is a line rising to the right into the superheated region; $W = H_3 - H_2$.
- **3 → 4, condensation** at constant high pressure: desuperheating, then condensing to saturated (or subcooled) liquid at $T_H$. It is a horizontal line to the left; $Q_H = H_3 - H_4$.
- **4 → 1, throttling** through an expansion valve, $H_4 = H_1$. On ln P–H this is a **vertical** line down, ending in the two-phase region.
- Performance: $\omega = \dfrac{Q_C}{W} = \dfrac{H_2 - H_1}{H_3 - H_2}$, and circulation rate $\dot m = \dot Q_C/(H_2 - H_1)$.

The ln P–H chart is preferred because three of the four steps are straight lines (two horizontal, one vertical), and the heat and work are read directly as horizontal lengths.

### Irreversibilities (compared with the Carnot rectangle on T–S)
1. **Throttling 4 → 1.** This is a free, unresisted expansion at constant H, with $\Delta S > 0$ and no work recovered. On ln P–H the drop is vertical, whereas an isentropic expander would end to the left of point 1. The difference $H_1 - H_{1s}$ is refrigeration lost, plus the expansion work wasted.
2. **Non-isentropic compression 2 → 3.** Friction and fluid turbulence make $H_3 > H_{3'}$: more work, and a hotter discharge (point 3 lies to the right of the isentrope).
3. **Heat transfer across finite ΔT.** Refrigerant must evaporate below the cold-space temperature and condense above the cooling-medium temperature. The desuperheating section 3 → (saturated vapour) also rejects heat at temperatures well above $T_H$, unlike Carnot's isothermal heat rejection.
4. These effects together make $\omega < \omega_{Carnot} = T_C/(T_H - T_C)$.`,
          answer: String.raw`ln P–H: 1→2 horizontal evaporation (Q_C = H₂ − H₁), 2→3 compression into superheat (W = H₃ − H₂), 3→4 horizontal condensation (Q_H), 4→1 vertical isenthalpic throttling. ω = (H₂ − H₁)/(H₃ − H₂). Irreversibilities: throttling (ΔS > 0, no work recovered), non-isentropic compression, desuperheating and finite-ΔT heat transfer ⇒ ω < T_C/(T_H − T_C).` },
        { id: "2023-24-Q2c", label: "(c)", marks: "2+5=7",
          topic: "reaction-equilibria", sub: "Effect of temperature on fuel-cell reversible voltage",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`'If the temperature is increased for a fuel cell, the voltage of the cell is increased' – do you agree with this statement? Clarify with reasoning.`,
          solution: String.raw`**Answer: No, not in general.** For the usual hydrogen–oxygen cell, the reversible (equilibrium) voltage **decreases** as temperature rises.

1. **Reversible voltage from equilibrium thermodynamics.** The maximum electrical work equals the decrease in Gibbs energy: $W_{elect} = -\Delta G = nFE$, so
$$E = -\frac{\Delta G}{nF}$$

2. **Temperature dependence.** Because $(\partial\Delta G/\partial T)_P = -\Delta S$,
$$\left(\frac{\partial E}{\partial T}\right)_P = \frac{\Delta S}{nF}$$
   The sign of $dE/dT$ is the sign of the reaction's entropy change.

3. **H₂–O₂ cell at 25 °C** (liquid water product, SVNA App. C data): $\Delta H^\circ = -285.83$ kJ/mol, $\Delta G^\circ = -237.13$ kJ/mol, n = 2.
$$E^\circ = \frac{237130}{2 \times 96485} = 1.229\ \mathrm{V}, \qquad \Delta S^\circ = \frac{\Delta H^\circ - \Delta G^\circ}{T} = \frac{-285830 + 237130}{298.15} = -163.3\ \mathrm{J/(mol\,K)}$$
$$\frac{dE}{dT} = \frac{-163.3}{2 \times 96485} = -0.85\ \mathrm{mV/K}$$
   Moles of gas decrease (1.5 → 0), so ΔS < 0 and E falls with temperature (about 1.18 V at 80 °C and roughly 1.0 V for high-temperature cells producing steam).

4. **When the statement would be true:** reactions with ΔS > 0, e.g. $\mathrm{C + \tfrac12O_2 \to CO}$ (gas moles increase), have $dE/dT > 0$.

> **Practical note:** the voltage actually delivered under load often *improves* at higher temperature. Electrode kinetics are faster and activation and ohmic losses are smaller, which is why SOFC and MCFC cells run hot. This is a rate effect, not an equilibrium one: the thermodynamic (open-circuit) voltage and the ideal efficiency $\Delta G/\Delta H$ (0.83 at 25 °C) both decrease with T.`,
          answer: String.raw`Disagree in general: E = −ΔG/nF and dE/dT = ΔS/nF. For H₂ + ½O₂ → H₂O(l), ΔS° = −163.3 J/mol K ⇒ dE/dT = −0.85 mV/K (E° = 1.229 V falls with T). Only ΔS > 0 reactions (e.g. C + ½O₂ → CO) gain voltage; real cells may perform better hot because of kinetics, not equilibrium.` }
      ] },
    { id: "2023-24-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q3a", label: "(a)", marks: "8+8+2=18",
          topic: "reaction-equilibria", sub: "Gibbs-energy minimization equations for CO–O₂–H₂–CO₂–H₂O–CH₄–C₂H₆ system",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the equation for Gibb's free energy minimization for a reactive system in equilibrium. Using that equation, formulate and write down the equations for all the compounds in a reactive system containing CO, O₂, H₂, CO₂, H₂O, CH₄ and C₂H₆ in equilibrium starting with 2 mol CH₄, 0.5 mol O₂ and 0.25 mol C₂H₆ maintained at 1000 K and 1 bar. Classify the number of unknown variables for the system and the degrees of freedom. No numerical calculation is necessary. [Hint: Start the derivation with mass conservation law].`,
          solution: String.raw`### Derivation (SVNA §13.9, Kirtania part 2)
1. **Mass conservation (element balances).** Let $a_{ik}$ = number of atoms of element k in a molecule of species i, and $A_k$ = total gram-atoms of element k fed (fixed by the initial charge):
$$\sum_i n_i a_{ik} = A_k \quad\text{or}\quad \sum_i n_i a_{ik} - A_k = 0 \qquad (k = 1,\dots,w)$$

2. **Lagrange multipliers.** Multiply each constraint by a multiplier $\lambda_k$ and add it to the total Gibbs energy:
$$F = G^t + \sum_k \lambda_k\left(\sum_i n_i a_{ik} - A_k\right)$$
   $F = G^t$ whenever the balances hold, so $F$ and $G^t$ have the same minimum.

3. **Minimize at constant T and P** with respect to every $n_i$:
$$\left(\frac{\partial F}{\partial n_i}\right)_{T,P,n_j} = \left(\frac{\partial (nG)}{\partial n_i}\right)_{T,P,n_j} + \sum_k\lambda_k a_{ik} = \mu_i + \sum_k \lambda_k a_{ik} = 0$$

4. **Chemical potential.** Take the standard state as pure ideal gas at $P^\circ$ = 1 bar and set the elements' standard Gibbs energies to zero, so $G_i^\circ = \Delta G^\circ_{f_i}$. For a gas,
$$\mu_i = \Delta G^\circ_{f_i} + RT\ln\frac{\hat f_i}{P^\circ} = \Delta G^\circ_{f_i} + RT\ln\frac{y_i\hat\phi_i P}{P^\circ}$$
$$\boxed{\Delta G^\circ_{f_i} + RT\ln\frac{y_i\hat\phi_i P}{P^\circ} + \sum_k\lambda_k a_{ik} = 0 \qquad (i = 1,\dots,N)}$$
   For ideal gases at P = 1 bar $= P^\circ$: $\Delta G^\circ_{f_i} + RT\ln y_i + \sum_k\lambda_k a_{ik} = 0$.

### Application: 2 mol CH₄ + 0.5 mol O₂ + 0.25 mol C₂H₆ at 1000 K and 1 bar
5. **Element totals:**
$$A_C = 2(1) + 0.25(2) = 2.5,\qquad A_H = 2(4) + 0.25(6) = 9.5,\qquad A_O = 0.5(2) = 1.0$$

6. **Atom matrix $a_{ik}$:**

| | CO | O₂ | H₂ | CO₂ | H₂O | CH₄ | C₂H₆ |
|---|---|---|---|---|---|---|---|
| C | 1 | 0 | 0 | 1 | 0 | 1 | 2 |
| H | 0 | 0 | 2 | 0 | 2 | 4 | 6 |
| O | 1 | 2 | 0 | 2 | 1 | 0 | 0 |

7. **One equation per species** (ideal gas, P = P°; $\Delta G^\circ_f$ at 1000 K from SVNA App. C, zero for O₂ and H₂):
$$\mathrm{CO:}\quad \Delta G^\circ_{f,CO} + RT\ln y_{CO} + \lambda_C + \lambda_O = 0$$
$$\mathrm{O_2:}\quad RT\ln y_{O_2} + 2\lambda_O = 0$$
$$\mathrm{H_2:}\quad RT\ln y_{H_2} + 2\lambda_H = 0$$
$$\mathrm{CO_2:}\quad \Delta G^\circ_{f,CO_2} + RT\ln y_{CO_2} + \lambda_C + 2\lambda_O = 0$$
$$\mathrm{H_2O:}\quad \Delta G^\circ_{f,H_2O} + RT\ln y_{H_2O} + 2\lambda_H + \lambda_O = 0$$
$$\mathrm{CH_4:}\quad \Delta G^\circ_{f,CH_4} + RT\ln y_{CH_4} + \lambda_C + 4\lambda_H = 0$$
$$\mathrm{C_2H_6:}\quad \Delta G^\circ_{f,C_2H_6} + RT\ln y_{C_2H_6} + 2\lambda_C + 6\lambda_H = 0$$

8. **Element balances** (with $n$ = total moles, $n_i = y_i n$):
$$\mathrm{C:}\ n\,(y_{CO} + y_{CO_2} + y_{CH_4} + 2y_{C_2H_6}) = 2.5$$
$$\mathrm{H:}\ n\,(2y_{H_2} + 2y_{H_2O} + 4y_{CH_4} + 6y_{C_2H_6}) = 9.5$$
$$\mathrm{O:}\ n\,(y_{CO} + 2y_{O_2} + 2y_{CO_2} + y_{H_2O}) = 1.0$$
$$\textstyle\sum_i y_i = 1$$

### Unknowns and degrees of freedom
9. **Count:**

| Unknowns | Number | Equations | Number |
|---|---|---|---|
| $y_i$ | 7 | species equations (step 7) | 7 |
| $n$ | 1 | element balances | 3 |
| $\lambda_C, \lambda_H, \lambda_O$ | 3 | $\sum y_i = 1$ | 1 |
| **Total** | **11** | **Total** | **11** |

   Eleven nonlinear equations in eleven unknowns: the problem is exactly specified once T, P and the feed are fixed.

10. **Phase-rule check.** N = 7 species, w = 3 elements, so the number of independent reactions is r = N − w = 4 (for example CH₄ + H₂O ⇌ CO + 3H₂, CO + H₂O ⇌ CO₂ + H₂, C₂H₆ + H₂ ⇌ 2CH₄, H₂ + ½O₂ ⇌ H₂O). With π = 1 and no special constraints:
$$F = 2 - \pi + N - r = 2 - 1 + 7 - 4 = 4$$
   Four intensive variables (T, P and two composition variables) would fix the intensive state. Here the closed system has a **specified initial charge**, and by Duhem's theorem two variables then fix the state. These are T = 1000 K and P = 1 bar, so no freedom remains, consistent with the 11 × 11 count.`,
          answer: String.raw`From Σᵢnᵢa_ik = A_k with Lagrange multipliers: ΔG°_fi + RT ln(yᵢφ̂ᵢP/P°) + Σ_k λ_k a_ik = 0. Here A_C = 2.5, A_H = 9.5, A_O = 1.0; 7 species equations + 3 element balances + Σy = 1 = 11 equations for 11 unknowns (7 y, n, λ_C, λ_H, λ_O). Phase rule F = 2 − 1 + 7 − 4 = 4; with fixed feed (Duhem) T and P fix everything, so 0 remaining.` },
        { id: "2023-24-Q3b", label: "(b)", marks: "12",
          topic: "refrigeration", sub: "Ground-source heat pump: minimum power for winter heating and summer cooling",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Consider a heat-pump installation to maintain the house temperature at 20°C in winter and 25°C in summer. The house has a winter heating requirement of 35 kJ/s and a summer cooling requirement of 70 kJ/s. This requires circulation of the refrigerant through interior exchanger coils at 30°C in winter and 5°C in summer. Underground coils provided the heat source in winter and the heat sink in summer. For a year-round ground temperature of 15°C, the heat-transfer characteristics of the coils necessitate refrigerant temperature of 10°C in winter and 25°C in summer. Determine the minimum power requirements for winter heating and summer cooling.

[Required formulas: $Q_C/Q_H = (-T_C/T_H)$; $W/Q_C = (T_H - T_C)/T_C$]`,
          solution: String.raw`**Given:** winter: $Q_H$ = 35 kJ/s delivered at refrigerant temperature 30 °C; source (ground coils) refrigerant at 10 °C. Summer: $Q_C$ = 70 kJ/s removed at refrigerant temperature 5 °C; sink (ground coils) refrigerant at 25 °C.

**Find:** minimum (Carnot) power for each season.

**Assumptions:** reversible (Carnot) cycle between the **refrigerant** temperatures, since these are the temperatures at which heat actually enters and leaves the working fluid. The minimum power is that of a Carnot heat pump/refrigerator.

1. **Winter, heating:** $T_H$ = 303.15 K, $T_C$ = 283.15 K. From $Q_C/Q_H = -T_C/T_H$ and $W = Q_H + Q_C$ (in magnitudes, $W = |Q_H| - |Q_C|$):
$$W = |Q_H|\,\frac{T_H - T_C}{T_H} = 35 \times \frac{303.15 - 283.15}{303.15} = 35 \times 0.06597 = 2.31\ \mathrm{kW}$$
   Heat taken from the ground: $35 - 2.31 = 32.69$ kJ/s. Heating COP = 35/2.31 = 15.2.

2. **Summer, cooling:** $T_C$ = 278.15 K (interior coils), $T_H$ = 298.15 K (ground coils):
$$W = Q_C\,\frac{T_H - T_C}{T_C} = 70 \times \frac{298.15 - 278.15}{278.15} = 70 \times 0.07190 = 5.03\ \mathrm{kW}$$
   Heat rejected to the ground: $70 + 5.03 = 75.03$ kJ/s. ω = 70/5.03 = 13.9.

**Result:** minimum power ≈ **2.31 kW** in winter and **5.03 kW** in summer (SVNA Example 9.2 type; real units need several times more).`,
          answer: String.raw`Winter: W_min = 35 × 20/303.15 = 2.31 kW. Summer: W_min = 70 × 20/278.15 = 5.03 kW.` },
        { id: "2023-24-Q3c", label: "(c)", marks: "5",
          topic: "phase-equilibria-topics", sub: "Solvent phase not in equilibrium with solid in solid–vapour equilibrium",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`'The solvent phase is not in equilibrium with the solid phase during solid-vapor equilibrium' – discuss this statement with explanation.`,
          solution: String.raw`**The statement is correct, and it is the key simplifying assumption of SVE (SVNA §14.7).**

1. **The system.** A pure solid (species 1, the solute, e.g. naphthalene) is in contact with a gas or supercritical "solvent" (species 2, e.g. CO₂ or ethylene). The vapour phase contains both species. The solid is taken as **pure 1**: species 2 does not dissolve in the solid.

2. **Equilibrium equations.** Phase equilibrium requires $\hat f_i^\alpha = \hat f_i^\beta$ only for species present in **both** phases. Species 1 is in both, so
$$f_1^s = \hat f_1^v \;\Rightarrow\; y_1 = \frac{P_1^{sat}}{P}\,\frac{\phi_1^{sat}}{\hat\phi_1}\exp\frac{V_1^s(P - P_1^{sat})}{RT}$$
   Species 2 is absent from the solid, so no equilibrium relation is written for it. The solvent does not partition between the phases, so it is "not in equilibrium" with the solid in the sense of having equal fugacity in both.

3. **Consequences.**
   - Only one equilibrium equation, so for given T and P the single unknown $y_1$ (the solubility of the solid in the gas) is fixed.
   - The solvent influences the solubility only through $\hat\phi_1$ (gas-phase nonideality) and the Poynting factor. At high pressure $\hat\phi_1 \ll 1$ and the "enhancement factor" $y_1P/P_1^{sat}$ can reach $10^3$–$10^6$. This is the basis of supercritical-fluid extraction.
   - If the solvent did dissolve in the solid (solid solution), a second equation $\hat f_2^s = \hat f_2^v$ would be needed and the simple formula would not apply.`,
          answer: String.raw`True: in SVE the solid is pure solute (1); the solvent (2) is insoluble in it, so equilibrium (f₁ˢ = f̂₁ᵛ) is written only for species 1, giving y₁ = (P₁ˢᵃᵗ/P)(φ₁ˢᵃᵗ/φ̂₁)exp[V₁ˢ(P − P₁ˢᵃᵗ)/RT]. The solvent affects solubility only through φ̂₁ and the Poynting factor.` }
      ] },
    { id: "2023-24-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q4a", label: "(a)", marks: "9",
          topic: "phase-equilibria-topics", sub: "Three types of LLE solubility diagrams versus temperature",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Describe the three major types for liquid-liquid equilibrium (LLE) with schematic of phase diagrams with respect to temperature change.`,
          solution: String.raw`On a T–x₁ diagram at constant P, the LLE (binodal) curve encloses the region in which a liquid splits into two phases α and β. A horizontal tie line at T joins their compositions $x_1^\alpha$ and $x_1^\beta$. Three common shapes occur (SVNA Fig. 14.13):

![Three types of LLE solubility diagrams: UCST, LCST and closed loop](fig/2023-24-Q4a-sketch.svg)

1. **Upper critical solution temperature (UCST), the most common type.** The two-phase "island" is closed at the top. Mutual solubility increases with T until, at the UCST ($T_U$), the two liquid compositions become identical. Above $T_U$ the liquids are miscible in all proportions. Example: water/phenol (UCST ≈ 66 °C), n-hexane/nitrobenzene. Here $H^E > 0$ (endothermic mixing), so heating favours mixing.
2. **Lower critical solution temperature (LCST).** The region is closed at the bottom. The liquids are miscible below $T_L$ and split on **heating**. Example: water/triethylamine (LCST ≈ 18 °C). This occurs when mixing is exothermic (hydrogen bonding or complex formation) and the complexes break up at higher T.
3. **Closed loop (both UCST and LCST).** The miscibility gap exists only between $T_L$ and $T_U$; the liquids are miscible above and below. Example: water/nicotine (about 61–210 °C). Hydrogen-bond-driven mixing at low T and ordinary thermal mixing at high T both remove the gap.

Other behaviour: the LLE region may be cut off by freezing (SLE) below or by the bubble point (VLLE) above. The curves can also merge into an "hourglass" shape with no critical point (e.g. some polymer solutions).

**Use:** the tie-line compositions from the diagram give the phase amounts by the lever rule. This is the basis of liquid–liquid extraction and decanter design.`,
          answer: String.raw`(i) UCST: two-phase island closed at the top, solubility increases with T, single phase above T_U (water/phenol). (ii) LCST: closed at the bottom, phases separate on heating (water/triethylamine). (iii) Closed loop with both T_L and T_U (water/nicotine). Tie lines + lever rule give the phase compositions and amounts.` },
        { id: "2023-24-Q4b", label: "(b)", marks: "7+8+2+3=20",
          topic: "reaction-equilibria", sub: "Derive ln K = −ΔG°/RT and K = K₀K₁K₂ temperature dependence",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`For a reactive system in equilibrium, derive the equation for equilibrium constant at constant temperature and pressure ($\ln K = -\Delta G^\circ/RT$) from the definition of Gibb's free energy. To describe its dependence on temperature, further expand the equation of K with temperature change during reaction. In the final derived equation, identify the parameters which exert the most impact of temperature change on the equilibrium constant, K. Provide reasons to your answer why the parameters (i.e., K₀, K₁, K₂) have different impacts on the change of K with respect to temperature change.

[Hint: $d(nG) = (nV)dP - (nS)dT + \sum\mu_i dn_i$]`,
          solution: String.raw`### 1. Equilibrium criterion (7)
1. **Fundamental relation:** $d(nG) = (nV)dP - (nS)dT + \sum_i \mu_i\,dn_i$.
2. **Single reaction** $\sum_i\nu_iA_i = 0$ with reaction coordinate ε: $dn_i = \nu_i\,d\varepsilon$. At constant T and P,
$$d(nG) = \sum_i\nu_i\mu_i\,d\varepsilon \;\Rightarrow\; \left[\frac{\partial(nG)}{\partial\varepsilon}\right]_{T,P} = \sum_i\nu_i\mu_i$$
3. **Equilibrium** is the minimum of $nG$ at fixed T, P ($(dG^t)_{T,P} = 0$):
$$\sum_i\nu_i\mu_i = 0$$
4. **Chemical potential:** $\mu_i = G_i^\circ + RT\ln(\hat f_i/f_i^\circ)$, where $G_i^\circ$ is the standard-state Gibbs energy at T and $P^\circ$. Then
$$\sum_i\nu_iG_i^\circ + RT\sum_i\ln\left(\frac{\hat f_i}{f_i^\circ}\right)^{\nu_i} = 0 \;\Rightarrow\; \prod_i\left(\frac{\hat f_i}{f_i^\circ}\right)^{\nu_i} = \exp\left(\frac{-\Delta G^\circ}{RT}\right) \equiv K$$
$$\boxed{\ln K = -\frac{\Delta G^\circ}{RT}}, \qquad \Delta G^\circ = \sum_i\nu_iG_i^\circ = \sum_i\nu_i\Delta G^\circ_{f_i}$$
   Because the $G_i^\circ$ refer to a fixed pressure $P^\circ$, K depends on **T only**.

### 2. Temperature dependence (8)
5. **Gibbs–Helmholtz.** $d(G_i^\circ/RT)/dT = -H_i^\circ/RT^2$; summed with the $\nu_i$:
$$\frac{d(\Delta G^\circ/RT)}{dT} = -\frac{\Delta H^\circ}{RT^2} \;\Rightarrow\; \frac{d\ln K}{dT} = \frac{\Delta H^\circ}{RT^2} \qquad\text{(van 't Hoff)}$$
6. **ΔH° varies with T:** $\Delta H^\circ = \Delta H_0^\circ + R\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}\,dT$. Similarly $\Delta S^\circ = \Delta S_0^\circ + R\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}\frac{dT}{T}$ with $\Delta S_0^\circ = (\Delta H_0^\circ - \Delta G_0^\circ)/T_0$. Since $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$:
$$\frac{\Delta G^\circ}{RT} = \frac{\Delta G_0^\circ - \Delta H_0^\circ}{RT_0} + \frac{\Delta H_0^\circ}{RT} + \frac{1}{T}\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}dT - \int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}\frac{dT}{T}$$
7. **Factorized form** ($\ln K = -\Delta G^\circ/RT$):
$$\boxed{K = K_0K_1K_2}$$
$$K_0 = \exp\left(\frac{-\Delta G_0^\circ}{RT_0}\right),\quad K_1 = \exp\left[\frac{\Delta H_0^\circ}{RT_0}\left(1 - \frac{T_0}{T}\right)\right],\quad K_2 = \exp\left(-\frac{1}{T}\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}dT + \int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}\frac{dT}{T}\right)$$

### 3. Which parameter dominates? (2)
8. **$K_1$, through the standard heat of reaction $\Delta H_0^\circ$**, carries the major temperature effect. $K_0$ has none: it is K at the reference temperature $T_0$ (298.15 K). $K_2$ is a minor correction, close to 1.

### 4. Reasons (3)
9. **$K_0$** is a constant, evaluated once from $\Delta G^\circ_f$ data at $T_0$. It sets the magnitude of K, not its change.
10. **$K_1$:** the exponent $(\Delta H_0^\circ/RT_0)(1 - T_0/T)$ is large because $|\Delta H_0^\circ|$ is typically $10^4$–$10^5$ J/mol, which is 4–40 times $RT_0$. Its sign sets the direction: an endothermic reaction ($\Delta H^\circ > 0$) has K increasing with T; an exothermic one has K decreasing (Le Chatelier).
11. **$K_2$** depends on $\Delta C_P^\circ$, a *difference* of heat capacities (small, of order R). The two integrals nearly cancel. For constant $\Delta C_P^\circ$ and $\tau = T/T_0$:
$$\ln K_2 = \frac{\Delta C_P^\circ}{R}\left(\ln\tau - 1 + \frac{1}{\tau}\right)$$
   **Illustration:** $\tau = 2$ (298 → 596 K), $\Delta C_P^\circ/R = 2$ and $\Delta H_0^\circ = -50$ kJ/mol give $\ln K_2 = 2(0.193) = 0.39$, against $\ln K_1 = \frac{-50000}{8.314 \times 298.15}(1 - 0.5) = -10.1$. $K_1$ dominates by a factor of about 25 in the logarithm. This is why the approximate form $\ln(K/K_0) \approx -\frac{\Delta H^\circ}{R}\left(\frac1T - \frac1{T_0}\right)$ (constant ΔH°) works fairly well.`,
          answer: String.raw`Σνᵢμᵢ = 0 at equilibrium (from d(nG) with dnᵢ = νᵢdε), μᵢ = Gᵢ° + RT ln(f̂ᵢ/fᵢ°) ⇒ ln K = −ΔG°/RT. With d ln K/dT = ΔH°/RT²: K = K₀K₁K₂, K₀ = exp(−ΔG₀°/RT₀), K₁ = exp[(ΔH₀°/RT₀)(1 − T₀/T)], K₂ = exp[−(1/T)∫ΔC_P°/R dT + ∫ΔC_P°/R dT/T]. K₁ (heat of reaction) dominates; K₀ is a constant; K₂ ≈ 1 because ΔC_P° is small and the two integrals nearly cancel.` },
        { id: "2023-24-Q4c", label: "(c)", marks: "6",
          topic: "refrigeration", sub: "Why CFC refrigerants are banned and their alternatives",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why are CFC refrigerants not recommended for refrigeration applications? Give examples of a few alternatives to CFC based refrigerants.`,
          solution: String.raw`### Why not CFCs
- **Ozone depletion.** CFCs (e.g. R-11 CCl₃F, R-12 CCl₂F₂) are so stable that they reach the stratosphere intact. There UV light frees Cl atoms, which destroy ozone catalytically ($\mathrm{Cl + O_3 \to ClO + O_2}$, $\mathrm{ClO + O \to Cl + O_2}$); one Cl atom can destroy thousands of O₃ molecules. Ozone-depletion potential (ODP) is about 1 for R-11 and R-12.
- **Global warming.** They are strong greenhouse gases (GWP of R-12 ≈ 10,900) with atmospheric lifetimes of 50–100 years.
- **Regulation.** They were phased out under the **Montreal Protocol** (1987) and its amendments. HCFCs such as R-22 (ODP 0.05) are being phased out too, and the Kigali Amendment (2016) phases down high-GWP HFCs.

### Alternatives
| Class | Examples | Notes |
|---|---|---|
| HFC (no chlorine, ODP = 0) | R-134a (1,1,1,2-tetrafluoroethane), R-125 (pentafluoroethane), R-32, blends R-410A, R-404A, R-407C | ODP 0 but GWP still high (R-134a ≈ 1430) |
| HFO (low GWP) | R-1234yf, R-1234ze | GWP < 1–7; car air conditioners |
| Natural refrigerants | NH₃ (R-717), CO₂ (R-744), propane (R-290), isobutane (R-600a), water (R-718, absorption/LiBr) | ODP 0, GWP ≈ 0–3; NH₃ toxic, hydrocarbons flammable, CO₂ needs high pressure |

The slides cite R-134a (tetrafluoroethane, no chlorine) and pentafluoroethane (HFC-125) as the environment-friendly replacements.`,
          answer: String.raw`CFCs release Cl in the stratosphere and destroy ozone (ODP ≈ 1), are potent long-lived greenhouse gases, and are banned by the Montreal Protocol. Alternatives: HFCs (R-134a, R-125, R-32, R-410A), HFOs (R-1234yf, R-1234ze), natural refrigerants (NH₃, CO₂, propane, isobutane, water/LiBr).` }
      ] },
    { id: "2023-24-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q5a", label: "(a)", marks: "2+2+4=8",
          topic: "vle-intro", sub: "Ethane/n-heptane P–T–composition diagram: dew, critical locus, retrograde condensation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Look at Figure for Question 5(a). This is Pressure-Temperature-Composition diagram for heptane-ethane system. From the figure, describe the following:

(i) What does the lower curve of each Pressure-Composition diagram represent?

(ii) What does the dashed curved represent?

(iii) Looking at the Pressure-Composition diagram for T = 450 K, what happens if one move from b to a? What is this phenomenon called? In what operation does this phenomenon become important?

Figure for Question 5(a) (attached to the paper): a three-dimensional P–T–z diagram for ethane(A)/n-heptane with P–z loops at T = 300, 350, 400, 450, 500 and 540.5 K (P axis 0–90 bar); a dashed curve joins the tops of the loops; points b (above) and a (below) lie on a vertical line through the 450 K loop near its ethane-rich edge.`,
          solution: String.raw`(i) **Lower curve = dew-point curve.** On each constant-T P–z section the upper boundary of the shaded two-phase loop is the bubble-point (saturated-liquid) curve, P against x. The lower boundary is the **dew-point (saturated-vapour) curve**, P against y. Below it the mixture is all vapour; between the curves liquid and vapour coexist, joined by horizontal tie lines.

(ii) **Dashed curve = locus of mixture critical points (the critical line).** At each T the loop closes at a critical point, where the bubble and dew curves meet and liquid and vapour become identical. The dashed line connects these points. It runs from the critical point of pure ethane (305 K, about 49 bar) to that of pure n-heptane (540.5 K, about 27 bar), passing through a maximum of roughly 85–90 bar at intermediate T (read from the figure). Mixture critical pressures are much higher than those of either pure component.

(iii) **b → a at 450 K: retrograde condensation.**
- 450 K is above the critical temperature of pure ethane, so the 450 K loop does not reach the pure-ethane edge. Line b–a is at a fixed ethane-rich composition lying between the loop's critical point and its point of maximum pressure on the dew branch.
- At **b** (high P) the mixture is a single dense gas-like fluid. As the pressure falls isothermally it meets the **upper** branch of the dew curve and **liquid appears**. With further pressure reduction the amount of liquid first increases, then decreases, and the liquid re-vaporizes at the lower dew-point branch. Below that, at **a**, all is vapour.
- Condensation caused by *lowering* the pressure (or, near the cricondentherm, by *raising* T) is the reverse of normal behaviour. It is called **retrograde condensation**.
- **Where it matters:** production of **deep natural-gas (gas-condensate) wells**. Reservoir gas at high pressure is single-phase; as pressure falls in the formation, wellbore and separators, valuable heavy hydrocarbons condense. Reservoir pressure is therefore often maintained (gas recycling), and surface separators are set to recover the condensate. It is also important in high-pressure gas processing and pipeline design.`,
          answer: String.raw`(i) Dew-point (saturated vapour) curve, P–y; the upper curve is the bubble curve. (ii) Locus of mixture critical points from C(ethane) 305 K to C(heptane) 540.5 K. (iii) Isothermal pressure reduction from single-phase fluid b produces liquid that later re-vaporizes before a: retrograde condensation, important in deep natural-gas/gas-condensate wells.` },
        { id: "2023-24-Q5b", label: "(b)", marks: "6+6+3=15",
          topic: "solution-theory", sub: "Partial enthalpies from H = 400x₁ + 600x₂ + (40x₁ + 20x₂)x₁x₂",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The molar enthalpy of a binary liquid mixture at T and P is given by:

$$H = 400x_1 + 600x_2 + (40x_1 + 20x_2)x_1x_2$$

Using the above equation perform the following:

(i) Find expressions for partial enthalpy of species 1 and 2 at T and P.

(ii) Show that the expressions satisfy the Gibbs/Duhem equation.

(iii) Determine the values of partial enthalpies at infinite dilution.`,
          solution: String.raw`**Given:** H in J/mol at fixed T and P (SVNA Problem 11.x, the same mixture as 2016-17 Q1c).

1. **Write H in terms of $x_1$ only** ($x_2 = 1 - x_1$, so $40x_1 + 20x_2 = 20 + 20x_1$):
$$H = 400x_1 + 600(1 - x_1) + (20 + 20x_1)x_1(1 - x_1) = 600 - 180x_1 - 20x_1^3$$
$$\frac{dH}{dx_1} = -180 - 60x_1^2$$

2. **(i) Partial enthalpies** from $\bar H_1 = H + x_2\,dH/dx_1$ and $\bar H_2 = H - x_1\,dH/dx_1$:
$$\bar H_1 = 600 - 180x_1 - 20x_1^3 + (1 - x_1)(-180 - 60x_1^2) \;\Rightarrow\; \boxed{\bar H_1 = 420 - 60x_1^2 + 40x_1^3}\ \mathrm{J/mol}$$
$$\bar H_2 = 600 - 180x_1 - 20x_1^3 - x_1(-180 - 60x_1^2) \;\Rightarrow\; \boxed{\bar H_2 = 600 + 40x_1^3}\ \mathrm{J/mol}$$
   Check: $x_1\bar H_1 + x_2\bar H_2 = 420x_1 - 60x_1^3 + 40x_1^4 + 600 - 600x_1 + 40x_1^3 - 40x_1^4 = 600 - 180x_1 - 20x_1^3 = H$ ✓.

3. **(ii) Gibbs–Duhem** at constant T, P: $x_1\,d\bar H_1/dx_1 + x_2\,d\bar H_2/dx_1 = 0$.
$$\frac{d\bar H_1}{dx_1} = -120x_1 + 120x_1^2, \qquad \frac{d\bar H_2}{dx_1} = 120x_1^2$$
$$x_1(-120x_1 + 120x_1^2) + (1 - x_1)(120x_1^2) = -120x_1^2 + 120x_1^3 + 120x_1^2 - 120x_1^3 = 0 \quad\checkmark$$
   Also, at $x_1 = 1$, $d\bar H_1/dx_1 = 0$; at $x_1 = 0$, $d\bar H_2/dx_1 = 0$. The curves are horizontal at the pure-component ends, as Gibbs–Duhem requires.

4. **(iii) Infinite dilution:**
$$\bar H_1^\infty = \bar H_1(x_1 \to 0) = 420\ \mathrm{J/mol}, \qquad \bar H_2^\infty = \bar H_2(x_1 \to 1) = 600 + 40 = 640\ \mathrm{J/mol}$$
   Compare the pure-species values $H_1 = H(x_1 = 1) = 400$ and $H_2 = H(x_1 = 0) = 600$ J/mol. The excess partial enthalpies at infinite dilution are $\bar H_1^{E,\infty} = 20$ and $\bar H_2^{E,\infty} = 40$ J/mol.

**Result:** $\bar H_1 = 420 - 60x_1^2 + 40x_1^3$, $\bar H_2 = 600 + 40x_1^3$ J/mol; $\bar H_1^\infty = 420$, $\bar H_2^\infty = 640$ J/mol.`,
          answer: String.raw`H = 600 − 180x₁ − 20x₁³; H̄₁ = 420 − 60x₁² + 40x₁³, H̄₂ = 600 + 40x₁³ J/mol; x₁dH̄₁ + x₂dH̄₂ = 0 ✓; H̄₁^∞ = 420 J/mol, H̄₂^∞ = 640 J/mol (pure H₁ = 400, H₂ = 600).` },
        { id: "2023-24-Q5c", label: "(c)", marks: "6+6=12",
          topic: "vle-intro", sub: "Henry's law: N₂ and O₂ between water and air in two limiting cases",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`At 25°C and 1 bar, the Henry's law constants of nitrogen and oxygen dissolved in water are $H_{N_2} = 8.64 \times 10^4$ bar and $H_{O_2} = 4.41 \times 10^4$ bar. The vapor pressure of water at this temperature and pressure is $p_{H_2O} = 0.032$ bar. Assume that dry air contains only N₂ and O₂ at mole fractions $y_{N_2} = 0.788$ and $y_{O_2} = 0.212$. Consider liquid-gas systems formed by equilibrating liquid water and air at 25°C and 1 bar, and assume that the gas phase behaves as an ideal gas mixture. Determine the mole fractions of N₂ and O₂ in both phases for the following cases:

(i) A large volume of air is equilibrated with just enough water to leave a small drop of liquid.

(ii) A large volume of water is equilibrated with just enough air to leave a small bubble of gas.`,
          solution: String.raw`**Given:** T = 25 °C, P = 1 bar; $H_{N_2} = 8.64 \times 10^4$ bar, $H_{O_2} = 4.41 \times 10^4$ bar, $P_w^{sat} = 0.032$ bar; dry air 78.8% N₂, 21.2% O₂.

**Find:** $x_i$ and $y_i$ for N₂, O₂ (and water) in each case.

**Assumptions:** ideal-gas vapour. Dissolved gases obey Henry's law ($y_iP = x_iH_i$); water obeys Raoult's law with $x_w \approx 1$ ($y_wP = x_wP_w^{sat}$), since the solubilities are of order $10^{-5}$.

1. **Water in the vapour (both cases):**
$$y_w = \frac{x_wP_w^{sat}}{P} \approx \frac{0.032}{1} = 0.032$$

2. **(i) Large air volume, tiny drop.** The drop is too small to change the gas composition, so the gas keeps the dry-air N₂/O₂ ratio:
$$y_{N_2} = 0.788(1 - 0.032) = 0.7628, \qquad y_{O_2} = 0.212(1 - 0.032) = 0.2052$$
   Henry's law gives the drop's composition:
$$x_{N_2} = \frac{y_{N_2}P}{H_{N_2}} = \frac{0.7628}{8.64 \times 10^4} = 8.83 \times 10^{-6}, \qquad x_{O_2} = \frac{0.2052}{4.41 \times 10^4} = 4.65 \times 10^{-6}$$
   $x_w = 1 - 1.35 \times 10^{-5} \approx 1$ ✓.

3. **(ii) Large water volume, tiny bubble.** Now almost all the air **dissolves**: the bubble holds a negligible share of the N₂ and O₂. The liquid therefore keeps the air's N₂/O₂ ratio:
$$\frac{x_{O_2}}{x_{N_2}} = \frac{0.212}{0.788} = 0.2690$$
   The bubble is in equilibrium with this liquid at 1 bar, and its mole fractions must sum to 1:
$$x_{N_2}H_{N_2} + x_{O_2}H_{O_2} = P - x_wP_w^{sat} = 1 - 0.032 = 0.968\ \mathrm{bar}$$
$$x_{N_2}\left(8.64 \times 10^4 + 0.2690 \times 4.41 \times 10^4\right) = 0.968 \;\Rightarrow\; x_{N_2} = \frac{0.968}{9.826 \times 10^4} = 9.85 \times 10^{-6}$$
$$x_{O_2} = 0.2690 \times 9.85 \times 10^{-6} = 2.65 \times 10^{-6}$$
   Bubble composition:
$$y_{N_2} = \frac{x_{N_2}H_{N_2}}{P} = 9.85 \times 10^{-6} \times 8.64 \times 10^4 = 0.851, \qquad y_{O_2} = 2.65 \times 10^{-6} \times 4.41 \times 10^4 = 0.117, \qquad y_w = 0.032$$
   Sum = 1.000 ✓.

**Result:**

| Case | $x_{N_2}$ | $x_{O_2}$ | $y_{N_2}$ | $y_{O_2}$ | $y_{H_2O}$ |
|---|---|---|---|---|---|
| (i) drop in air | $8.83 \times 10^{-6}$ | $4.65 \times 10^{-6}$ | 0.763 | 0.205 | 0.032 |
| (ii) bubble in water | $9.85 \times 10^{-6}$ | $2.65 \times 10^{-6}$ | 0.851 | 0.117 | 0.032 |

In case (ii) the bubble is enriched in N₂, because O₂ is about twice as soluble.`,
          answer: String.raw`(i) y_N₂ = 0.763, y_O₂ = 0.205, y_w = 0.032; x_N₂ = 8.83×10⁻⁶, x_O₂ = 4.65×10⁻⁶. (ii) x_O₂/x_N₂ = 0.212/0.788: x_N₂ = 9.85×10⁻⁶, x_O₂ = 2.65×10⁻⁶; bubble y_N₂ = 0.851, y_O₂ = 0.117, y_w = 0.032.` }
      ] },
    { id: "2023-24-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q6a", label: "(a)", marks: "3",
          topic: "vle-intro", sub: "Duhem's theorem from the phase rule",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Starting from the equation of Gibb's phase rule, derive the formula for Duhem's theorem.`,
          solution: String.raw`1. **Phase rule (intensive state):** π phases, N non-reacting species. Variables: T, P and (N − 1) mole fractions per phase, i.e. $2 + (N - 1)\pi$. Equations: equal fugacity of each species in all phases, i.e. $(\pi - 1)N$. Hence
$$F = 2 + (N - 1)\pi - (\pi - 1)N = 2 - \pi + N$$

2. **Closed system with known initial amounts of each species.** To fix the **extensive** state as well, add the π phase amounts (masses or moles) as variables:
$$\text{variables} = 2 + (N - 1)\pi + \pi = 2 + N\pi$$
   and add the N material balances (the total of each species is known) as equations:
$$\text{equations} = (\pi - 1)N + N = \pi N$$

3. **Difference:**
$$\boxed{(2 + N\pi) - \pi N = 2}$$
   **Duhem's theorem:** for any closed system formed from known amounts of prescribed species, the equilibrium state (intensive *and* extensive) is completely determined once **any two independent variables** are fixed. This is why a flash calculation at given T and P fixes V, $\{x_i\}$ and $\{y_i\}$.`,
          answer: String.raw`Variables 2 + (N − 1)π + π (phase amounts) minus equations (π − 1)N + N (material balances) = 2: fixing any two independent variables fixes the equilibrium state of a closed system of known composition.` },
        { id: "2023-24-Q6b", label: "(b)", marks: "7",
          topic: "solution-theory", sub: "Equality of chemical potential in all phases at equilibrium",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that at phase equilibrium, chemical potential of a species will be the same in all phases.`,
          solution: String.raw`**Assumptions:** closed system of phases α and β (extendable to π phases) at uniform T and P; no reactions.

1. **Each phase is open to the other:**
$$d(nG)^\alpha = (nV)^\alpha dP - (nS)^\alpha dT + \sum_i\mu_i^\alpha dn_i^\alpha$$
$$d(nG)^\beta = (nV)^\beta dP - (nS)^\beta dT + \sum_i\mu_i^\beta dn_i^\beta$$

2. **Add** for the whole (closed) system, $nG = (nG)^\alpha + (nG)^\beta$:
$$d(nG) = (nV)dP - (nS)dT + \sum_i\mu_i^\alpha dn_i^\alpha + \sum_i\mu_i^\beta dn_i^\beta$$

3. **The total system is closed,** so $d(nG) = (nV)dP - (nS)dT$ also holds. Hence
$$\sum_i\mu_i^\alpha dn_i^\alpha + \sum_i\mu_i^\beta dn_i^\beta = 0$$
   (equivalently, equilibrium at fixed T, P means $(dG^t)_{T,P} = 0$).

4. **Mass conservation:** whatever leaves β enters α, so $dn_i^\beta = -dn_i^\alpha$:
$$\sum_i\left(\mu_i^\alpha - \mu_i^\beta\right)dn_i^\alpha = 0$$

5. **The $dn_i^\alpha$ are independent and arbitrary,** so every coefficient must vanish:
$$\boxed{\mu_i^\alpha = \mu_i^\beta \qquad (i = 1, 2, \dots, N)}$$
   Applying this to phases taken in pairs gives $\mu_i^\alpha = \mu_i^\beta = \dots = \mu_i^\pi$.

6. **Fugacity form.** At the same T, $\mu_i = \Gamma_i(T) + RT\ln\hat f_i$, so $\hat f_i^\alpha = \hat f_i^\beta = \dots = \hat f_i^\pi$, the working criterion for VLE and LLE.`,
          answer: String.raw`With d(nG) = (nV)dP − (nS)dT + Σμᵢdnᵢ for each phase and the closed total, Σ(μᵢ^α − μᵢ^β)dnᵢ^α = 0 with dnᵢ^β = −dnᵢ^α ⇒ μᵢ^α = μᵢ^β for every species (and f̂ᵢ^α = f̂ᵢ^β).` },
        { id: "2023-24-Q6c", label: "(c)", marks: "5",
          topic: "solution-theory", sub: "Can a partial molar volume be negative?",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Is it possible for partial molar volume to be negative? Explain your answer with proper reasoning.`,
          solution: String.raw`**Yes.** A partial molar volume is a **response function**, not the volume "occupied" by a molecule:
$$\bar V_i = \left(\frac{\partial (nV)}{\partial n_i}\right)_{T,P,n_j}$$
It is the change in total solution volume when a small amount of species i is added at constant T, P and amounts of the others. Only the total volume must be positive; the derivative can have either sign.

**Reason it can be negative:** if the added molecules pull the surrounding solvent more tightly together than it was before, the total volume *shrinks* when species i is added. This happens through strong ion–solvent attraction (electrostriction) or through breaking an open hydrogen-bonded network.

**Examples:**
- MgSO₄ in water at infinite dilution: $\bar V^\infty \approx -1.4\ \mathrm{cm^3/mol}$ at 25 °C. The Mg²⁺ and SO₄²⁻ ions bind water in compact hydration shells, collapsing the open structure of liquid water.
- Similar behaviour for NaOH and Li₂SO₄ at high dilution, and for dilute solutes in near-critical solvents (e.g. naphthalene in supercritical CO₂, $\bar V^\infty$ of order −10⁴ cm³/mol), where the compressible solvent condenses around the solute.

**Consistency:** Gibbs–Duhem ($x_1\,d\bar V_1 + x_2\,d\bar V_2 = 0$) and $V = \sum x_i\bar V_i > 0$ still hold. Only the partial property of the minor component is negative, while the solvent's $\bar V$ stays positive.`,
          answer: String.raw`Yes: V̄ᵢ = (∂(nV)/∂nᵢ)_T,P,nj is a derivative, not a molecular volume. If adding i contracts the solution (electrostriction, network collapse), V̄ᵢ < 0, e.g. MgSO₄ in water at infinite dilution (≈ −1.4 cm³/mol); total V stays positive.` },
        { id: "2023-24-Q6d", label: "(d)", marks: "20",
          topic: "solution-theory", sub: "Fugacity of water at 300 °C up to 10 MPa from steam-table data",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`For water at a temperature of 300°C and for pressures up to 10,000 kPa (given in respective Table), calculate values of fugacity and plot it against pressure. Saturation pressure for water at this temperature is 8592.7 kPa and specific volume of saturated liquid water at this condition is 1.404 cm³/g. [See Table for Question 6(d) for more data]

Table for Question 6(d): pressure, specific enthalpy and specific entropy data from steam table for 300°C

| P (kPa) | H (kJ/kg) | S (kJ/kg·K) |
|---|---|---|
| 1 | 3076.8 | 10.345 |
| 500 | 3064.8 | 7.4614 |
| 2000 | 3025.0 | 6.7696 |
| 4000 | 2962.0 | 6.3642 |
| 6000 | 2885.0 | 6.0692 |
| 8000 | 2786.8 | 5.7942 |
| 8592.7 | 2751.0 | 5.7081 |`,
          solution: String.raw`**Given:** T = 573.15 K; vapour H, S from the table; $P^{sat}$ = 8592.7 kPa; $V^l$ = 1.404 cm³/g. **Find:** f (and φ) from 1 to 10,000 kPa. This is SVNA Example 11.6, which uses the SVNA App. F steam tables.

**Assumptions:** at 1 kPa steam is an ideal gas, so $f^* = P^* = 1$ kPa. The liquid is incompressible between $P^{sat}$ and 10 MPa. $R = 8.314/18.015 = 0.46152$ kJ/(kg·K).

1. **Vapour branch.** Integrate $dG = RT\,d\ln f$ at constant T from the low-pressure state * to P, and write $G = H - TS$:
$$\ln\frac{f}{f^*} = \frac{1}{R}\left[\frac{H - H^*}{T} - (S - S^*)\right], \qquad H^* = 3076.8,\ S^* = 10.345$$

2. **Example at 8592.7 kPa (saturated vapour):**
$$\ln\frac{f^{sat}}{1} = \frac{1}{0.46152}\left[\frac{2751.0 - 3076.8}{573.15} - (5.7081 - 10.345)\right] = \frac{-0.56844 + 4.63690}{0.46152} = 8.8155$$
$$f^{sat} = e^{8.8155} = 6738.9\ \mathrm{kPa}, \qquad \phi^{sat} = 6738.9/8592.7 = 0.7843$$

3. **All vapour points:**

| P (kPa) | f (kPa) | φ = f/P |
|---|---|---|
| 1 | 1.0 | 1.0000 |
| 500 | 494.2 | 0.9884 |
| 2000 | 1903.5 | 0.9517 |
| 4000 | 3610.8 | 0.9027 |
| 6000 | 5114.4 | 0.8524 |
| 8000 | 6402.4 | 0.8003 |
| 8592.7 | 6738.9 | 0.7843 |

4. **At saturation** $f^l = f^v = f^{sat}$ (equilibrium); the curve is continuous but changes slope.

5. **Liquid branch (compressed liquid)** with the Poynting factor:
$$f = \phi^{sat}P^{sat}\exp\frac{V^l(P - P^{sat})}{RT}$$
   At 10,000 kPa: $\frac{V^l(P - P^{sat})}{RT} = \frac{1.404 \times 10^{-3}\ \mathrm{m^3/kg} \times (10000 - 8592.7)\ \mathrm{kPa}}{0.46152 \times 573.15} = \frac{1.9758}{264.52} = 0.007470$
$$f = 6738.9\,e^{0.00747} = 6789.4\ \mathrm{kPa}, \qquad \phi = 0.6789$$

| P (kPa) | 8592.7 | 9000 | 9500 | 10000 |
|---|---|---|---|---|
| f (kPa) | 6738.9 | 6753.5 | 6771.4 | 6789.4 |
| φ | 0.7843 | 0.7504 | 0.7128 | 0.6789 |

6. **Plot:**

![Fugacity of water at 300 °C versus pressure: vapour from the steam table, liquid from the Poynting equation](fig/2023-24-Q6d-sol.svg)

   f rises almost linearly with P at low pressure (φ ≈ 1) and bends below the ideal line f = P as the vapour becomes nonideal. Above $P^{sat}$ the liquid fugacity is nearly constant (Poynting factor only 1.0075 at 10 MPa), because the liquid volume is small.

**Result:** $f^{sat} = 6738.9$ kPa ($\phi^{sat}$ = 0.784); f = 6789 kPa (φ = 0.679) at 10,000 kPa.`,
          answer: String.raw`ln(f/f*) = [(H − H*)/T − (S − S*)]/R with f* = 1 kPa: f = 494.2, 1903.5, 3610.8, 5114.4, 6402.4, 6738.9 kPa at 500…8592.7 kPa (φ^sat = 0.784); liquid via Poynting: f = 6789.4 kPa, φ = 0.679 at 10,000 kPa.` }
      ] },
    { id: "2023-24-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q7a", label: "(a)", marks: "8",
          topic: "solution-applications", sub: "BUBL P algorithm with the gamma–phi formulation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Show the algorithm you need to follow to determine bubble point pressure using γ, φ formulation. Clearly write the expressions for each term present in the algorithm.`,
          solution: String.raw`**Problem:** given T and the liquid composition $\{x_i\}$, find P and $\{y_i\}$ (SVNA §14.1).

### Working equations
- **Gamma/phi VLE:** $y_i\Phi_iP = x_i\gamma_iP_i^{sat}$, so
$$y_i = \frac{x_i\gamma_iP_i^{sat}}{\Phi_iP}, \qquad P = \sum_i\frac{x_i\gamma_iP_i^{sat}}{\Phi_i} \quad(\text{from }\textstyle\sum y_i = 1)$$
- **Φ factor:**
$$\Phi_i = \frac{\hat\phi_i}{\phi_i^{sat}}\exp\left[\frac{-V_i^l(P - P_i^{sat})}{RT}\right]$$
- **Vapour fugacity coefficient** (virial EOS truncated at B):
$$\ln\hat\phi_k = \frac{P}{RT}\left[B_{kk} + \frac12\sum_i\sum_j y_iy_j(2\delta_{ik} - \delta_{ij})\right],\quad \delta_{ik} = 2B_{ik} - B_{ii} - B_{kk},\quad \ln\phi_i^{sat} = \frac{B_{ii}P_i^{sat}}{RT}$$
- **Vapour pressure (Antoine):** $\ln P_i^{sat} = A_i - \dfrac{B_i}{T + C_i}$.
- **Activity coefficients** from a $G^E$ model, e.g. Margules, Wilson, NRTL, at the given T and $\{x_i\}$. They do not change during the iteration because T and x are fixed.

### Algorithm
![BUBL P flowchart with the gamma–phi formulation](fig/2023-24-Q7a-sketch.svg)

1. **Read** T, $\{x_i\}$ and the constants: Antoine $A_i, B_i, C_i$; $G^E$ parameters; $B_{ij}$ (e.g. Pitzer correlation from $T_c, P_c, \omega$); $V_i^l$.
2. **Evaluate** $P_i^{sat}$ and $\gamma_i$ (fixed). **Set all $\Phi_i = 1$.**
3. **Calculate** $P = \sum_i x_i\gamma_iP_i^{sat}/\Phi_i$.
4. **Calculate** $y_i = x_i\gamma_iP_i^{sat}/(\Phi_iP)$.
5. **Evaluate** $\hat\phi_i(T, P, \{y\})$ and $\phi_i^{sat}$, then $\Phi_i$.
6. **Recalculate** $P = \sum_i x_i\gamma_iP_i^{sat}/\Phi_i$.
7. **Converged** ($|\delta P| < \varepsilon$)? If no, return to step 4. If yes, print P and $\{y_i\}$.

At low pressure $\Phi_i \approx 1$ and the method reduces to modified Raoult's law, $P = \sum x_i\gamma_iP_i^{sat}$, with no iteration.`,
          answer: String.raw`Given T, {xᵢ}: Pᵢˢᵃᵗ (Antoine), γᵢ(T, x) fixed; Φᵢ = 1 → P = Σxᵢγᵢ Pᵢˢᵃᵗ/Φᵢ → yᵢ = xᵢγᵢPᵢˢᵃᵗ/(ΦᵢP) → φ̂ᵢ (virial), φᵢˢᵃᵗ, Φᵢ = (φ̂ᵢ/φᵢˢᵃᵗ)exp[−Vᵢˡ(P − Pᵢˢᵃᵗ)/RT] → recompute P; repeat until δP < ε.` },
        { id: "2023-24-Q7b", label: "(b)", marks: "20",
          topic: "solution-applications", sub: "Acetone/methanol at 55 °C: Margules fit of G^E/RT and P-x-y comparison",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Following table presents a set of VLE data for acetone(1)/methanol(2) system at 55°C.

| P (kPa) | x₁ | y₁ |
|---|---|---|
| 68.728 | 0 | 0 |
| 75.279 | 0.0570 | 0.1295 |
| 82.528 | 0.1452 | 0.2694 |
| 93.206 | 0.3579 | 0.4779 |
| 98.462 | 0.5432 | 0.6174 |
| 101.059 | 0.7922 | 0.7876 |
| 99.877 | 0.9080 | 0.8959 |
| 96.885 | 1.000 | 1.000 |

From these data, find parameter values for the Margules equation that provide the best fit of $\dfrac{G^E}{RT}$ to the data, and prepare a P-x-y to compare the experimental data with curves determined from the correlation.`,
          solution: String.raw`**Given:** T = 328.15 K; $P_1^{sat}$ = 96.885 kPa ($x_1$ = 1), $P_2^{sat}$ = 68.728 kPa ($x_1$ = 0).

**Find:** two-parameter Margules $A_{12}, A_{21}$; P–x–y comparison.

**Assumptions:** low pressure, so modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$ holds (ideal vapour, Poynting ≈ 1). Margules form (SVNA eq. 12.9):
$$\frac{G^E}{x_1x_2RT} = A_{21}x_1 + A_{12}x_2, \qquad \ln\gamma_1 = x_2^2[A_{12} + 2(A_{21} - A_{12})x_1], \qquad \ln\gamma_2 = x_1^2[A_{21} + 2(A_{12} - A_{21})x_2]$$

1. **Experimental activity coefficients** $\gamma_1 = \dfrac{y_1P}{x_1P_1^{sat}}$, $\gamma_2 = \dfrac{y_2P}{x_2P_2^{sat}}$, and $\dfrac{G^E}{RT} = x_1\ln\gamma_1 + x_2\ln\gamma_2$:

| $x_1$ | $\gamma_1$ | $\gamma_2$ | $\ln\gamma_1$ | $\ln\gamma_2$ | $G^E/RT$ | $G^E/x_1x_2RT$ |
|---|---|---|---|---|---|---|
| 0.0570 | 1.7653 | 1.0111 | 0.5683 | 0.0110 | 0.0428 | 0.7964 |
| 0.1452 | 1.5804 | 1.0263 | 0.4577 | 0.0260 | 0.0887 | 0.7144 |
| 0.3579 | 1.2846 | 1.1027 | 0.2504 | 0.0978 | 0.1524 | 0.6632 |
| 0.5432 | 1.1551 | 1.1999 | 0.1442 | 0.1823 | 0.1616 | 0.6512 |
| 0.7922 | 1.0370 | 1.5030 | 0.0364 | 0.4074 | 0.1135 | 0.6893 |
| 0.9080 | 1.0171 | 1.6444 | 0.0170 | 0.4973 | 0.0612 | 0.7325 |

   For example, at $x_1$ = 0.3579: $\gamma_1 = 0.4779 \times 93.206/(0.3579 \times 96.885) = 1.2846$.

2. **Best fit (SVNA Example 12.1 method).** $G^E/x_1x_2RT$ is linear in $x_1$, intercept $A_{12}$ at $x_1 = 0$ and $A_{21}$ at $x_1 = 1$. Least squares on the six points gives
$$\frac{G^E}{x_1x_2RT} = 0.7340 - 0.0560x_1 \;\Rightarrow\; \boxed{A_{12} = 0.734,\quad A_{21} = 0.678}$$
   The points sag a little in the middle (minimum 0.651 near $x_1$ = 0.5), so the straight line is a compromise. A three-parameter form would follow them more closely.

3. **Correlated P and $y_1$** from modified Raoult's law:
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat}, \qquad y_1 = \frac{x_1\gamma_1P_1^{sat}}{P}$$

| $x_1$ | $P_{exp}$ | $P_{calc}$ | $y_{1,exp}$ | $y_{1,calc}$ |
|---|---|---|---|---|
| 0.0570 | 75.279 | 75.52 | 0.1295 | 0.1397 |
| 0.1452 | 82.528 | 83.48 | 0.2694 | 0.2847 |
| 0.3579 | 93.206 | 94.74 | 0.4779 | 0.4872 |
| 0.5432 | 98.462 | 99.50 | 0.6174 | 0.6087 |
| 0.7922 | 101.059 | 101.10 | 0.7876 | 0.7806 |
| 0.9080 | 99.877 | 99.60 | 0.8959 | 0.8880 |

   rms δP = 0.86 kPa (max 1.5 kPa); rms δy₁ = 0.010.

4. **P–x–y diagram:**

![P-x-y diagram for acetone/methanol at 55 °C: data points and Margules curves with a maximum-pressure azeotrope](fig/2023-24-Q7b-sol.svg)

   The system shows positive deviations ($\gamma_i > 1$) and a **maximum-pressure azeotrope**. The correlation puts it at $x_1 = y_1 \approx 0.74$, P ≈ 101.2 kPa. The data bracket it between $x_1$ = 0.54 ($y_1 > x_1$) and 0.79 ($y_1 < x_1$).

> **Note:** fitting P directly (Barker's method: minimize $\sum(\delta P)^2$) gives $A_{12} = 0.654$, $A_{21} = 0.675$ with rms δP = 0.35 kPa. Either answer is acceptable; the exam method is the $G^E/x_1x_2RT$ line.

**Result:** $A_{12}$ ≈ 0.734, $A_{21}$ ≈ 0.678; the correlation reproduces P within about 1 kPa and $y_1$ within about 0.01, with an azeotrope near $x_1$ = 0.74, 101.2 kPa.`,
          answer: String.raw`γ's from y₁P = x₁γ₁P₁ˢᵃᵗ; least-squares line G^E/x₁x₂RT = 0.734 − 0.056x₁ ⇒ A₁₂ = 0.734, A₂₁ = 0.678. Calculated P within ~1 kPa (rms 0.86 kPa), y₁ within 0.01; maximum-pressure azeotrope ≈ x₁ = 0.74, P = 101.2 kPa.` },
        { id: "2023-24-Q7c", label: "(c)", marks: "7",
          topic: "solution-theory", sub: "Usefulness of the residual Gibbs-energy fundamental property relation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain the usefulness of the following equation:

$$d\left(\frac{nG^R}{RT}\right) = \frac{nV^R}{RT}dP - \frac{nH^R}{RT^2}dT + \sum_i\ln\hat\phi_i\,dn_i$$`,
          solution: String.raw`This is the **fundamental residual-property relation** (SVNA eq. 11.55). $G^R/RT$ as a function of its canonical variables T, P and composition is a **generating function** for all residual properties, i.e. the departures from the ideal-gas state.

1. **Each coefficient is a property.** At constant composition:
$$\frac{V^R}{RT} = \left[\frac{\partial(G^R/RT)}{\partial P}\right]_{T,x}, \qquad \frac{H^R}{RT} = -T\left[\frac{\partial(G^R/RT)}{\partial T}\right]_{P,x}, \qquad \frac{S^R}{R} = \frac{H^R}{RT} - \frac{G^R}{RT}$$

2. **Fugacity coefficients are partial properties of $G^R/RT$:**
$$\ln\hat\phi_i = \left[\frac{\partial(nG^R/RT)}{\partial n_i}\right]_{P,T,n_j}$$
   so $G^R/RT = \sum_i x_i\ln\hat\phi_i$. They obey the Gibbs–Duhem equation $\sum_i x_i\,d\ln\hat\phi_i = 0$ (constant T, P).

3. **It links fugacities to PVT data.** Since $V^R = V - RT/P = (Z - 1)RT/P$, integrating at constant T and x gives
$$\frac{G^R}{RT} = \int_0^P(Z - 1)\frac{dP}{P}, \qquad \ln\hat\phi_i = \int_0^P(\bar Z_i - 1)\frac{dP}{P}$$
   Any equation of state (virial, cubic, Lee/Kesler) or measured volumetric data therefore yields $\hat\phi_i$, $H^R$ and $S^R$, which are exactly what the gamma/phi and phi/phi VLE methods need.

4. **Practical value.** From $V^R$ and $H^R$ (both measurable), the effect of P and T on the fugacity coefficients follows: $(\partial\ln\hat\phi_i/\partial P)_{T,x} = \bar V_i^R/RT$ and $(\partial\ln\hat\phi_i/\partial T)_{P,x} = -\bar H_i^R/RT^2$. The relation also gives consistency checks on data and models, and it is the base of property packages in process simulators.`,
          answer: String.raw`G^R/RT(T, P, x) is a generating function: V^R/RT = ∂(G^R/RT)/∂P, H^R/RT = −T ∂(G^R/RT)/∂T, ln φ̂ᵢ = ∂(nG^R/RT)/∂nᵢ (partial property, Σxᵢ d ln φ̂ᵢ = 0). With V^R = (Z − 1)RT/P it gives ln φ̂ᵢ, H^R, S^R from any EOS/PVT data, as needed for VLE and enthalpy calculations.` }
      ] },
    { id: "2023-24-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q8a", label: "(a)", marks: "6",
          topic: "solution-applications", sub: "Diluting 75% H₂SO₄ at 330 K with chilled water: H–x mixing line",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`It is proposed to cool a stream of 75 mass% sulfuric acid solution at 330 K by diluting it with chilled water at 280 K. Determine the amount of water that must be added to 1 kg of 75% acid before cooling below 330 K actually occurs.

Figure for Question 8(a) (attached to the paper): H–x diagram for H₂SO₄/H₂O, H in kJ/(kg solution) from −500 to 300 against wt% H₂SO₄ (0–100), with the 250, 300 and 350 K isotherms (the example points a, c, b and a dashed mixing line are drawn on it).`,
          solution: String.raw`**Given:** 1 kg of 75 wt% H₂SO₄ at 330 K; chilled water at 280 K. The H–x chart attached to the paper has isotherms at 250, 300 and 350 K. At $x$ = 0 the 300 K curve is at H ≈ 0 and the 350 K curve at about +210 kJ/kg, so the reference is liquid water at 300 K.

**Find:** the mass of water W per kg of acid at which the adiabatic mixture first falls back to 330 K.

**Assumptions:** adiabatic mixing (no heat loss); 330 K isotherm interpolated linearly between the 300 and 350 K curves (60% of the way up); water enthalpy from $c_P$ = 4.18 kJ/(kg K).

1. **Mixing rule.** For adiabatic mixing the mixture point lies on the **straight line** joining the two feed points on the H–x diagram (lever rule):
$$H_{mix} = \frac{1\cdot H_{acid} + W\,H_w}{1 + W}, \qquad x_{mix} = \frac{0.75}{1 + W}$$

2. **Feed points (chart readings):**
   - Water at 280 K: $H_w = 4.18(280 - 300) = -84$ kJ/kg. This agrees with the chart's x = 0 readings (300 K ≈ 0, 250 K ≈ −204 kJ/kg).
   - 75% acid: the 300 K isotherm reads about −310 kJ/kg and the 350 K isotherm about −206 kJ/kg, so at 330 K $H_{acid} \approx -310 + 0.6(104) = -248$ kJ/kg.

3. **Behaviour along the mixing line.** Interpolating T between the isotherms along the line from (75%, −248) to (0%, −84):

| wt% H₂SO₄ | 70 | 65 | 55 | 45 | 40 | 37 | 30 |
|---|---|---|---|---|---|---|---|
| $H_{line}$ (kJ/kg) | −237 | −226 | −204 | −182 | −171 | −165 | −149 |
| T (K) | ≈ 342 | ≈ 350 | ≈ 354 | ≈ 342 | ≈ 334 | ≈ 330 | ≈ 319 |

   Adding water first **heats** the mixture, up to a maximum of about 354 K near 55% acid, because the heat of dilution of strong H₂SO₄ is large. Only after the line crosses the 330 K isotherm again does dilution actually cool the stream.

4. **Crossing point.** The mixing line meets the interpolated 330 K isotherm again at $x_{mix} \approx 37$ wt% H₂SO₄:
$$1 + W = \frac{0.75}{0.37} = 2.01 \;\Rightarrow\; W \approx 1.0\ \mathrm{kg}$$

![How to read the H–x chart: water 280 K (H ≈ −84) and 75% acid at 330 K (H ≈ −248) → straight mixing line → re-crosses the 330 K isotherm at ≈ 37 wt%](fig/2023-24-Q8a-read.svg)

**Result:** about **1.0 kg of water per kg of 75% acid** must be added (down to about 37% H₂SO₄) before the mixture temperature falls below 330 K. Smaller additions make it hotter, up to about 80 °C.

> Chart readings are approximate (±10 kJ/kg); the answer is in the range 0.9–1.1 kg. The SVNA Fig. 12.17 chart (in °C) gives the same picture.`,
          answer: String.raw`Mixing line from water (280 K, H ≈ −84 kJ/kg) to 75% acid (330 K, H ≈ −248 kJ/kg) rises above 330 K (max ≈ 354 K near 55%) and re-crosses the 330 K isotherm at ≈ 37 wt% ⇒ W = 0.75/0.37 − 1 ≈ 1.0 kg water per kg acid.` },
        { id: "2023-24-Q8b", label: "(b)", marks: "7+7+3=17",
          topic: "vle-intro", sub: "Modified Raoult, ln γ = 0.67x²: two-phase P range, flash at x₁ = 0.75, azeotrope test",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A binary system of species 1 and 2 consists of vapor and liquid phases in equilibrium at temperature T. The overall mole fraction of species 1 in the system is $z_1 = 0.65$. At temperature T,

$$\ln\gamma_1 = 0.67x_2^2, \qquad \ln\gamma_2 = 0.67x_1^2$$

$$P_1^{sat} = 32.27\ \mathrm{kPa},\quad P_2^{sat} = 73.14\ \mathrm{kPa}$$

(i) Find out the pressure range where the system can exist as two phases at the given temperature and $z_1$?

(ii) For a liquid phase mole fraction $x_1 = 0.75$, what is the pressure P and what molar fraction of the system is vapor?

(iii) Show whether or not the system exhibits an azeotrope.`,
          solution: String.raw`**Given:** A = 0.67, $P_1^{sat}$ = 32.27 kPa, $P_2^{sat}$ = 73.14 kPa, $z_1$ = 0.65. **Assumptions:** modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$ (low pressure).

1. **(i) Upper limit: bubble point with $x_1 = z_1 = 0.65$.**
$$\gamma_1 = e^{0.67(0.35)^2} = 1.0855, \qquad \gamma_2 = e^{0.67(0.65)^2} = 1.3272$$
$$P_{bubl} = 0.65(1.0855)(32.27) + 0.35(1.3272)(73.14) = 22.77 + 33.98 = 56.74\ \mathrm{kPa}\quad(y_1 = 0.401)$$

2. **(i) Lower limit: dew point with $y_1 = z_1 = 0.65$.** $\gamma$ depends on the unknown $x_1$, so iterate on $x_1$ until $y_1 = x_1\gamma_1P_1^{sat}/P_{bubl}(x_1) = 0.65$, i.e. $P = 1/\sum(y_i/\gamma_iP_i^{sat})$. The solution is $x_1$ = 0.8742, $\gamma_1$ = 1.0107, $\gamma_2$ = 1.6687:
$$P_{dew} = \left[\frac{0.65}{1.0107 \times 32.27} + \frac{0.35}{1.6687 \times 73.14}\right]^{-1} = 43.86\ \mathrm{kPa}$$
   Two phases can exist for **43.86 kPa < P < 56.74 kPa**.

3. **(ii) $x_1$ = 0.75:**
$$\gamma_1 = e^{0.67(0.25)^2} = 1.0428, \qquad \gamma_2 = e^{0.67(0.75)^2} = 1.4577$$
$$P = 0.75(1.0428)(32.27) + 0.25(1.4577)(73.14) = 25.24 + 26.65 = 51.89\ \mathrm{kPa}$$
$$y_1 = \frac{25.24}{51.89} = 0.4863$$
   Material balance on species 1, $z_1 = x_1(1 - V) + y_1V$:
$$V = \frac{z_1 - x_1}{y_1 - x_1} = \frac{0.65 - 0.75}{0.4863 - 0.75} = 0.379$$
   So **P = 51.89 kPa and 37.9% of the system is vapour** (P lies inside the range from (i) ✓).

4. **(iii) Azeotrope test.** At an azeotrope $y_1 = x_1$, i.e. relative volatility $\alpha_{12} = 1$:
$$\alpha_{12} = \frac{\gamma_1P_1^{sat}}{\gamma_2P_2^{sat}} = \frac{P_1^{sat}}{P_2^{sat}}e^{0.67(x_2^2 - x_1^2)} = \frac{P_1^{sat}}{P_2^{sat}}e^{0.67(1 - 2x_1)}$$
$$(\alpha_{12})_{x_1 = 0} = \frac{32.27}{73.14}e^{0.67} = 0.862, \qquad (\alpha_{12})_{x_1 = 1} = \frac{32.27}{73.14}e^{-0.67} = 0.226$$
   $\alpha_{12}$ decreases monotonically with $x_1$ and stays **below 1** over the whole range, so it never equals 1. **There is no azeotrope**; species 2 is more volatile at all compositions. An azeotrope would need $A > \ln(P_2^{sat}/P_1^{sat}) = 0.818$.

**Result:** (i) 43.86–56.74 kPa; (ii) P = 51.89 kPa, $y_1$ = 0.486, V = 0.379; (iii) $\alpha_{12}$ runs from 0.862 to 0.226, so no azeotrope.`,
          answer: String.raw`(i) P_dew = 43.86 kPa (x₁ = 0.874) to P_bubl = 56.74 kPa. (ii) P = 51.89 kPa, y₁ = 0.486, vapour fraction V = 0.379. (iii) α₁₂ = 0.862 at x₁ = 0 and 0.226 at x₁ = 1, always < 1 ⇒ no azeotrope.` },
        { id: "2023-24-Q8c", label: "(c)", marks: "12",
          topic: "solution-applications", sub: "Flash calculation algorithm with the gamma–phi formulation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Show the algorithm you need to follow to make flash calculation using γ, φ formulation. Clearly write the expressions for each term involved in the algorithm.`,
          solution: String.raw`**Problem (P,T-flash):** given T, P and the overall composition $\{z_i\}$ of a feed (1 mol), find the vapour fraction $\mathcal V$ and the compositions $\{x_i\}$ and $\{y_i\}$ (SVNA §14.1, formula sheet item 39).

### Working equations
- **K-values:** from $y_i\Phi_iP = x_i\gamma_iP_i^{sat}$,
$$K_i = \frac{y_i}{x_i} = \frac{\gamma_iP_i^{sat}}{\Phi_iP}, \qquad \Phi_i = \frac{\hat\phi_i}{\phi_i^{sat}}\exp\left[\frac{-V_i^l(P - P_i^{sat})}{RT}\right]$$
- **Material balances:** $z_i = x_i(1 - \mathcal V) + y_i\mathcal V$ give
$$x_i = \frac{z_i}{1 + \mathcal V(K_i - 1)}, \qquad y_i = \frac{K_iz_i}{1 + \mathcal V(K_i - 1)}$$
- **Rachford–Rice** ($\sum y_i - \sum x_i = 0$):
$$F(\mathcal V) = \sum_i\frac{z_i(K_i - 1)}{1 + \mathcal V(K_i - 1)} = 0, \qquad \frac{dF}{d\mathcal V} = -\sum_i\frac{z_i(K_i - 1)^2}{[1 + \mathcal V(K_i - 1)]^2}$$
   Newton step: $\mathcal V_{new} = \mathcal V - F/(dF/d\mathcal V)$.
- $P_i^{sat}$ from Antoine, $\gamma_i(T, \{x\})$ from the $G^E$ model, $\hat\phi_i(T, P, \{y\})$ and $\phi_i^{sat}$ from the virial equation (as in BUBL P).

### Algorithm
![Flash calculation flowchart with the gamma–phi formulation](fig/2023-24-Q8c-sketch.svg)

1. **Read** T, P, $\{z_i\}$ and the constants.
2. **Check two phases exist:** run a BUBL P with $\{x_i\} = \{z_i\}$ and a DEW P with $\{y_i\} = \{z_i\}$. A flash is possible only if $P_{dew} < P < P_{bubl}$.
3. **Initial estimates:** $\gamma_i$ and $\Phi_i$ interpolated between the dew and bubble results; $\mathcal V = (P_{bubl} - P)/(P_{bubl} - P_{dew})$.
4. **Calculate** $K_i = \gamma_iP_i^{sat}/(\Phi_iP)$.
5. **Solve** $F(\mathcal V) = 0$ by Newton's method.
6. **Calculate** $x_i = z_i/[1 + \mathcal V(K_i - 1)]$ and $y_i = K_ix_i$.
7. **Update** $\gamma_i(\{x\})$, $\hat\phi_i(\{y\})$ and $\Phi_i$. If the changes in $\{x\}$, $\{y\}$ and $\mathcal V$ are below the tolerance ε, stop and print $\mathcal V$, $\{x_i\}$, $\{y_i\}$. Otherwise return to step 4.

For a binary system the result is independent of $z$ (x and y are fixed by T and P), and only $\mathcal V$ depends on $z$. Q8(b)(ii) is this calculation with $\Phi_i = 1$.`,
          answer: String.raw`Check P_dew < P < P_bubl (DEW P with y = z, BUBL P with x = z); start γᵢ, Φᵢ, V from them; Kᵢ = γᵢPᵢˢᵃᵗ/(ΦᵢP); solve Σzᵢ(Kᵢ − 1)/[1 + V(Kᵢ − 1)] = 0 by Newton; xᵢ = zᵢ/[1 + V(Kᵢ − 1)], yᵢ = Kᵢxᵢ; update γᵢ(x), φ̂ᵢ(y), Φᵢ; iterate to convergence.` }
      ] }
  ]
});
