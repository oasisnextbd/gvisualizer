QB.paper({ year: "Practice", set: "Chemical-reaction equilibria", date: "", marks: 0, practice: true,
  rules: String.raw`Chemical-reaction equilibria (SVNA ch. 13; Dr. Kawnish Kirtania, Parts 1–2): every worked example on the slides (reaction coordinates, water-gas shift, Gibbs-energy minimization, hydrogen fuel cell, the Henry's-law homework), selected SVNA chapter-13 end-of-chapter problems not already set in past papers (13.1, 13.4, 13.8, 13.10, 13.11, 13.15, 13.17, 13.20, 13.21(c), 13.22–13.24), and new exam-style problems (liquid-phase esterification, Gibbs minimization for partial oxidation, short conceptual questions).`,
  questions: [
    { id: "practice-reaction-equilibria-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P1", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Reaction coordinate: CH₄ + H₂O → CO + 3H₂ from 2 CH₄, 1 H₂O, 1 CO, 4 H₂", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, Chemical Reaction Equilibria Part 1, slides 2–5 ("Reaction Coordinates", "An example"); SVNA 6th ed. SI, Example 13.1`,
        text: String.raw`The following reaction occurs in a system initially consisting of 2 mol CH₄, 1 mol H₂O, 1 mol CO and 4 mol H₂:

$$\mathrm{CH_4 + H_2O \rightarrow CO + 3H_2}$$

(a) Define the reaction coordinate ε and show that $n_i = n_{i0} + \nu_i\varepsilon$.

(b) Develop expressions for the mole fractions $y_i$ as functions of ε, and state the range of ε.`,
        solution: String.raw`1. **Stoichiometric numbers** (positive for products, negative for reactants): $\nu_{CH_4} = -1$, $\nu_{H_2O} = -1$, $\nu_{CO} = +1$, $\nu_{H_2} = +3$; $\nu = \sum\nu_i = 2$.

2. **(a) Reaction coordinate.** As the reaction proceeds, the changes in mole numbers are in proportion to the stoichiometric numbers:
$$\frac{dn_1}{\nu_1} = \frac{dn_2}{\nu_2} = \frac{dn_3}{\nu_3} = \frac{dn_4}{\nu_4} \equiv d\varepsilon \;\Rightarrow\; dn_i = \nu_i\,d\varepsilon$$
   Integrating from the initial state (ε = 0, $n_i = n_{i0}$):
$$n_i = n_{i0} + \nu_i\varepsilon, \qquad n = \sum_i n_i = n_0 + \nu\varepsilon$$
   ε has units of moles and is the same for every species, so one variable describes the composition.

3. **(b) Mole numbers:** $n_0 = 2 + 1 + 1 + 4 = 8$ and $n = 8 + 2\varepsilon$.

| Species | $n_{i0}$ | $\nu_i$ | $n_i$ | $y_i$ |
|---|---|---|---|---|
| CH₄ | 2 | −1 | 2 − ε | (2 − ε)/(8 + 2ε) |
| H₂O | 1 | −1 | 1 − ε | (1 − ε)/(8 + 2ε) |
| CO | 1 | +1 | 1 + ε | (1 + ε)/(8 + 2ε) |
| H₂ | 4 | +3 | 4 + 3ε | (4 + 3ε)/(8 + 2ε) |

   Check: numerators sum to $8 + 2\varepsilon$, so $\sum y_i = 1$ ✓.

4. **Range of ε.** All $n_i \ge 0$: water is the limiting reactant, so ε ≤ 1; the reverse reaction can proceed until CO runs out, so ε ≥ −1. Hence **−1 ≤ ε ≤ 1**. (Negative ε means the reaction runs from right to left.)`,
        answer: String.raw`n_i = n_i0 + ν_iε, n = 8 + 2ε; y_CH₄ = (2 − ε)/(8 + 2ε), y_H₂O = (1 − ε)/(8 + 2ε), y_CO = (1 + ε)/(8 + 2ε), y_H₂ = (4 + 3ε)/(8 + 2ε); −1 ≤ ε ≤ 1.` } ] },
    { id: "practice-reaction-equilibria-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P2", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Water-gas shift at 1100 K: extent for 1:1 and 2:1 steam feed; effects of pressure and N₂", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, Part 2, slides 4–9 ("Single Phase or Multi-phase Reaction"); SVNA 6th ed. SI, Example 13.5 (a)–(d)`,
        text: String.raw`For the water-gas-shift reaction

$$\mathrm{CO(g) + H_2O(g) \rightarrow CO_2(g) + H_2(g)}$$

at 1100 K and 1 bar, K = 1 (SVNA Fig. 13.2). Assuming ideal gases, find the equilibrium extent and composition when the feed is:

(a) 1 mol CO and 1 mol H₂O;

(b) as (a) but at a pressure below 1 bar;

(c) as (a) with 2 mol N₂ added;

(d) 1 mol CO and 2 mol H₂O.`,
        solution: String.raw`**Given:** K = 1 at 1100 K (read from SVNA Fig. 13.2; from Appendix C, $K = K_0K_1K_2 = 1.03 \times 10^5 \times 5.53 \times 10^{-6} \times 1.762 = 1.006$ ✓).

**Assumptions:** ideal-gas mixture, so $\prod y_i^{\nu_i} = (P/P^\circ)^{-\nu}K$; here $\nu = 1 + 1 - 1 - 1 = 0$.

1. **(a) Equimolar feed.** With extent $\varepsilon_e$: $n_{CO} = n_{H_2O} = 1 - \varepsilon_e$, $n_{CO_2} = n_{H_2} = \varepsilon_e$, n = 2:
$$\frac{y_{CO_2}\,y_{H_2}}{y_{CO}\,y_{H_2O}} = \frac{\varepsilon_e^2}{(1 - \varepsilon_e)^2} = 1 \;\Rightarrow\; \varepsilon_e = 0.5$$
   $y_{CO} = y_{H_2O} = y_{CO_2} = y_{H_2} = 0.25$; 50% of the CO is converted.

2. **(b) P < 1 bar.** Since ν = 0, $(P/P^\circ)^{-\nu} = 1$: the equilibrium composition is **unchanged** at any (low) pressure.

3. **(c) 2 mol N₂ added.** The inert raises n to 4, but every mole fraction is divided by the same n and, with ν = 0, n cancels from the ratio: $\varepsilon_e^2/(1 - \varepsilon_e)^2 = 1$ again, so **$\varepsilon_e$ = 0.5, no change** in conversion (the mole fractions are diluted: 0.125 each, N₂ 0.5). An inert only shifts equilibria with ν ≠ 0 (it acts like a pressure reduction).

4. **(d) 2 mol H₂O.** n = 3; $n_{CO} = 1 - \varepsilon_e$, $n_{H_2O} = 2 - \varepsilon_e$:
$$\frac{\varepsilon_e^2}{(1 - \varepsilon_e)(2 - \varepsilon_e)} = 1 \;\Rightarrow\; \varepsilon_e^2 = 2 - 3\varepsilon_e + \varepsilon_e^2 \;\Rightarrow\; \varepsilon_e = \frac23 = 0.667$$
   Excess steam raises the CO conversion from 50% to 66.7%: $y_{CO} = 0.111$, $y_{H_2O} = 0.444$, $y_{CO_2} = y_{H_2} = 0.222$.

**Result:** (a) 0.5; (b) no change (ν = 0); (c) no change in conversion; (d) 0.667.`,
        answer: String.raw`ν = 0 ⇒ ε²/[(1 − ε)(n_H₂O0 − ε)] = K = 1: (a) ε = 0.5 (all y = 0.25); (b) no effect of P; (c) N₂ does not change ε (0.5); (d) 2 mol steam: ε = 2/3 = 0.667.` } ] },
    { id: "practice-reaction-equilibria-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P3", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Gibbs-energy minimization: CH₄ + H₂O at 1000 K and 1 bar, 2 mol CH₄ and 3 mol H₂O", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, Part 2, slides 19–29 ("Gibbs free energy minimization"); SVNA 6th ed. SI, Example 13.14`,
        text: String.raw`Calculate the equilibrium compositions of CH₄, H₂O, CO, CO₂ and H₂ at 1000 K and 1 bar for a feed of 2 mol CH₄ and 3 mol H₂O, by minimizing the total Gibbs energy. At 1000 K: $\Delta G^\circ_{f,CH_4}$ = 19 720, $\Delta G^\circ_{f,H_2O}$ = −192 420, $\Delta G^\circ_{f,CO}$ = −200 240, $\Delta G^\circ_{f,CO_2}$ = −395 790 J/mol. Also find the Lagrange multipliers.`,
        solution: String.raw`**Given:** T = 1000 K, P = 1 bar; elements C, H, O with $A_C$ = 2, $A_H$ = 4(2) + 2(3) = 14, $A_O$ = 3; $\Delta G^\circ_{f,H_2}$ = 0 (element). RT = 8314 J/mol.

**Assumptions:** ideal gases at $P = P^\circ$ = 1 bar ($\hat\phi_i = 1$); no solid carbon forms.

1. **Method.** Minimize $G^t$ subject to the atom balances $\sum_i n_ia_{ik} = A_k$, using Lagrange multipliers $\lambda_k$. Setting $\partial F/\partial n_i = 0$ with $\mu_i = \Delta G^\circ_{f_i} + RT\ln(y_iP/P^\circ)$ gives, for each species,
$$\frac{\Delta G^\circ_{f_i}}{RT} + \ln\frac{n_i}{\sum_i n_i} + \sum_k\frac{\lambda_k}{RT}a_{ik} = 0$$

2. **Five species equations:**
$$\mathrm{CH_4:}\ \frac{19\,720}{RT} + \ln\frac{n_{CH_4}}{\sum n_i} + \frac{\lambda_C}{RT} + \frac{4\lambda_H}{RT} = 0$$
$$\mathrm{H_2O:}\ \frac{-192\,420}{RT} + \ln\frac{n_{H_2O}}{\sum n_i} + \frac{2\lambda_H}{RT} + \frac{\lambda_O}{RT} = 0$$
$$\mathrm{CO:}\ \frac{-200\,240}{RT} + \ln\frac{n_{CO}}{\sum n_i} + \frac{\lambda_C}{RT} + \frac{\lambda_O}{RT} = 0$$
$$\mathrm{CO_2:}\ \frac{-395\,790}{RT} + \ln\frac{n_{CO_2}}{\sum n_i} + \frac{\lambda_C}{RT} + \frac{2\lambda_O}{RT} = 0$$
$$\mathrm{H_2:}\ \ln\frac{n_{H_2}}{\sum n_i} + \frac{2\lambda_H}{RT} = 0$$

3. **Three atom balances:**
$$\mathrm C:\ n_{CH_4} + n_{CO} + n_{CO_2} = 2, \qquad \mathrm H:\ 4n_{CH_4} + 2n_{H_2O} + 2n_{H_2} = 14, \qquad \mathrm O:\ n_{H_2O} + n_{CO} + 2n_{CO_2} = 3$$
   Eight equations, eight unknowns (5 $n_i$, 3 $\lambda_k$); $\sum n_i$ is defined from the $n_i$.

4. **Solution** (Newton's method on $\ln n_i$ and $\lambda_k/RT$; any equation solver):

| | CH₄ | H₂O | CO | CO₂ | H₂ | Total |
|---|---|---|---|---|---|---|
| $n_i$ / mol | 0.1696 | 0.8485 | 1.5093 | 0.3211 | 5.8123 | 8.6608 |
| $y_i$ | 0.0196 | 0.0980 | 0.1743 | 0.0371 | 0.6711 | 1 |

$$\frac{\lambda_C}{RT} = 0.7635,\quad \frac{\lambda_O}{RT} = 25.068,\quad \frac{\lambda_H}{RT} = 0.1994 \;\Rightarrow\; \lambda_C = 6\,348,\ \lambda_O = 208\,418,\ \lambda_H = 1\,658\ \mathrm{J/mol}$$

5. **Checks.** C: 0.1696 + 1.5093 + 0.3211 = 2.000 ✓; O: 0.8485 + 1.5093 + 0.6422 = 3.000 ✓; H₂ equation: ln 0.6711 = −0.3988 = −2(0.1994) ✓. These match the slide (y = 0.0196, 0.0980, 0.1743, 0.0371, 0.6710). The same answer follows from two independent reactions (steam reforming and water-gas shift) with K's, but minimization needs no choice of reactions.

**Result:** $y_{CH_4}$ = 0.020, $y_{H_2O}$ = 0.098, $y_{CO}$ = 0.174, $y_{CO_2}$ = 0.037, $y_{H_2}$ = 0.671.`,
        answer: String.raw`ΔG°fᵢ/RT + ln yᵢ + Σλₖaᵢₖ/RT = 0 for 5 species + C, H, O balances (A_C = 2, A_H = 14, A_O = 3): n = 0.170, 0.849, 1.509, 0.321, 5.812 mol; y_CH₄ 0.020, y_H₂O 0.098, y_CO 0.174, y_CO₂ 0.037, y_H₂ 0.671; λ_C/RT = 0.764, λ_O/RT = 25.07, λ_H/RT = 0.199.` } ] },
    { id: "practice-reaction-equilibria-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P4", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Hydrogen/oxygen fuel cell: work, heat, emf and efficiency at 25 °C and 60 °C, with air", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, Part 2, slides 30–40 ("Fuel Cell"), including the four questions on slide 40; SVNA 6th ed. SI, §13.10`,
        text: String.raw`A hydrogen/oxygen fuel cell produces water vapour, H₂ + ½O₂ → H₂O(g), reversibly and isothermally with pure gases at 1 bar.

(a) At 25 °C, find the electrical work, the heat transferred to the surroundings, the reversible emf E and the maximum efficiency (work/ΔH).

(b) What happens at 60 °C?

(c) What if air (21% O₂) is used instead of pure oxygen (at 25 °C)?

(d) Comment on the efficiency obtained in real operation.`,
        solution: String.raw`**Given:** $\Delta H^\circ_{f298}$(H₂O, g) = −241 818 and $\Delta G^\circ_{f298}$ = −228 572 J/mol (SVNA Table C.4); $C_P/R$ from Table C.1 (H₂: 3.249, 0.422×10⁻³, D = 0.083×10⁵; O₂: 3.639, 0.506×10⁻³, D = −0.227×10⁵; H₂O: 3.470, 1.450×10⁻³, D = 0.121×10⁵). Faraday constant F = 96 485 C/mol; 2 electrons per H₂.

**Assumptions:** ideal gases; reversible, isothermal operation.

1. **Energy balance.** ΔH = Q + W_elect; reversible isothermal: Q = TΔS, so $W_{elect} = \Delta H - T\Delta S = \Delta G$ and $Q = \Delta H - \Delta G$. The charge transferred per mol H₂ is $q = -2F = -192\,970$ C, and $W_{elect} = qE$, so $E = -\Delta G/(2F)$.

2. **(a) 25 °C:**
$$W_{elect} = \Delta G = -228\,572\ \mathrm{J/mol}, \qquad Q = -241\,818 + 228\,572 = -13\,246\ \mathrm{J/mol}$$
$$E = \frac{228\,572}{192\,970} = 1.184\ \mathrm V, \qquad \eta_{max} = \frac{\Delta G}{\Delta H} = \frac{228\,572}{241\,818} = 0.945$$
   (The cell delivers work and rejects 13.2 kJ/mol of heat.)

3. **(b) 60 °C (333.15 K).** ΔA = 3.470 − 3.249 − ½(3.639) = −1.5985, ΔB = 0.775×10⁻³, ΔD = 0.1515×10⁵. Then
$$\Delta H = \Delta H_0^\circ + R\int\frac{\Delta C_P^\circ}{R}dT = -242\,168\ \mathrm{J/mol}, \qquad \Delta S = \Delta S_0^\circ + R\int\frac{\Delta C_P^\circ}{R}\frac{dT}{T} = -45.54\ \mathrm{J/(mol\,K)}$$
   with $\Delta S_0^\circ = (\Delta H_0^\circ - \Delta G_0^\circ)/T_0 = -44.43$ J/(mol K).
$$\Delta G = -242\,168 - 333.15(-45.54) = -226\,997\ \mathrm{J/mol}, \quad E = 1.176\ \mathrm V, \quad Q = -15\,170\ \mathrm{J/mol}, \quad \eta_{max} = 0.937$$
   Because ΔS < 0, |ΔG| falls as T rises: the reversible emf and maximum efficiency **decrease slightly** with temperature (the electrode kinetics, however, improve).

4. **(c) Air at 25 °C.** The O₂ partial pressure is 0.21 bar, so
$$\Delta G = \Delta G^\circ + RT\ln\frac{y_{H_2O}}{y_{H_2}\,y_{O_2}^{1/2}} = -228\,572 - \tfrac12(8.314)(298.15)\ln 0.21 = -226\,638\ \mathrm{J/mol}$$
   $E = 226\,638/192\,970 = 1.174$ V: only 0.010 V lower (about 1% less work).

5. **(d) Real operation.** Internal irreversibilities (activation, ohmic and concentration losses) reduce the operating voltage to about 0.6–0.7 V. Based on the heating value ($-\Delta H/2F$ = 1.253 V), the efficiency is about 0.65/1.25 ≈ **50%**, still higher than combustion followed by a heat engine.

**Result:** (a) W = −228.6 kJ/mol, Q = −13.2 kJ/mol, E = 1.184 V, η_max = 94.5%; (b) 60 °C: E = 1.176 V, η_max = 93.7%; (c) air: E = 1.174 V; (d) real ≈ 0.6–0.7 V, η ≈ 50%.`,
        answer: String.raw`W = ΔG = −228 572 J/mol, Q = ΔH − ΔG = −13 246 J/mol, E = −ΔG/2F = 1.184 V, η_max = 94.5% at 25 °C; at 60 °C ΔG = −226 997 J/mol, E = 1.176 V (η 93.7%); with air E = 1.174 V; real cells 0.6–0.7 V, ≈ 50%.` } ] },
    { id: "practice-reaction-equilibria-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P5", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Henry's-law standard state for a dilute solute in a liquid-phase reaction", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, Part 1, slide 27 ("HOMEWORK"), with slides 22–26 (liquid-phase reactions)`,
        text: String.raw`For a liquid-phase reaction in which species i is a dilute solute ($x_i \to 0$), the pure-liquid standard state $f_i^\circ = f_i$ may be undefined (e.g. the solute is a gas above its critical temperature).

(a) If the standard state is chosen as $f_i^\circ = \mathcal H_i$ (Henry's constant), what is $\hat f_i/f_i^\circ$ in the dilute limit?

(b) How does K change when the standard state of i is switched from pure liquid to Henry's law?

(c) Relate $\gamma_i^\infty$ and $\mathcal H_i$.`,
        solution: String.raw`1. **Henry's law.** For a dilute solute, $\hat f_i \to \mathcal H_ix_i$ as $x_i \to 0$, where $\mathcal H_i = \lim_{x_i \to 0}(\hat f_i/x_i)$ depends on T and the solvent.

2. **(a) Activity with the Henry standard state.** Define $\gamma_i^* \equiv \hat f_i/(x_i\mathcal H_i)$; then
$$\frac{\hat f_i}{f_i^\circ} = \frac{\hat f_i}{\mathcal H_i} = \gamma_i^*x_i \to x_i \quad\text{as } x_i \to 0 \quad(\gamma_i^* \to 1)$$
   So in the dilute limit the activity of the solute equals its mole fraction, and the equilibrium relation contains $x_i$ directly: $\prod(\hat f_i/f_i^\circ)^{\nu_i} = K^*$.

3. **(c) Relation of $\gamma_i^\infty$ and $\mathcal H_i$.** With the Lewis–Randall convention, $\hat f_i = \gamma_ix_if_i$. Taking $x_i \to 0$:
$$\mathcal H_i = \lim_{x_i \to 0}\frac{\hat f_i}{x_i} = \gamma_i^\infty f_i, \qquad \gamma_i^* = \frac{\gamma_i}{\gamma_i^\infty}$$

4. **(b) Effect on K.** K depends on the standard state through $\Delta G^\circ = \sum\nu_iG_i^\circ$. Changing the standard state of species i from $f_i$ to $\mathcal H_i$ changes $G_i^\circ$ by $RT\ln(\mathcal H_i/f_i) = RT\ln\gamma_i^\infty$, so
$$\Delta G^{\circ *} = \Delta G^\circ + \nu_iRT\ln\gamma_i^\infty, \qquad K^* = K\,(\gamma_i^\infty)^{-\nu_i} = K\left(\frac{f_i}{\mathcal H_i}\right)^{\nu_i}$$
   The equilibrium composition is the same either way: the change in K is exactly compensated by the change from $\gamma_ix_i$ to $\gamma_i^*x_i$. In practice, $\Delta G^\circ_f$ data for solutes in water are tabulated for the hypothetical ideal 1-molal solution (the "(aq)" entries of SVNA Table C.4), a Henry-type standard state on a molality basis.

**Result:** $\hat f_i/\mathcal H_i = \gamma_i^*x_i \to x_i$; $\mathcal H_i = \gamma_i^\infty f_i$; $K^* = K(\gamma_i^\infty)^{-\nu_i}$, same equilibrium composition.`,
        answer: String.raw`With f_i° = 𝓗ᵢ: f̂ᵢ/f_i° = γᵢ*xᵢ → xᵢ as xᵢ → 0 (γᵢ* = γᵢ/γᵢ^∞). 𝓗ᵢ = γᵢ^∞fᵢ. Changing standard state changes ΔG° by νᵢRT ln γᵢ^∞, so K* = K(γᵢ^∞)^−νᵢ; the equilibrium composition is unchanged.` } ] },
    { id: "practice-reaction-equilibria-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P6", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Why ln K is nearly linear in 1/T although the full equation is not", type: "theory", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, Part 1, slides 12–18 (Effect of temperature, "K = K₀·K₁·K₂", and the question under SVNA Fig. 13.2: "Why are the curves linear if the equation is not?")`,
        text: String.raw`SVNA Fig. 13.2 plots ln K against 1/T for many reactions, and the lines are almost straight, although the rigorous expression for ln K(T) contains ΔC°P integrals. Explain why. What do $K_0$, $K_1$ and $K_2$ represent?`,
        solution: String.raw`1. **Van 't Hoff equation.** From $d(\Delta G^\circ/RT)/dT = -\Delta H^\circ/RT^2$:
$$\frac{d\ln K}{d(1/T)} = -\frac{\Delta H^\circ}{R}$$
   So the slope of ln K against 1/T is $-\Delta H^\circ/R$. If ΔH° were constant, the plot would be exactly a straight line: $\ln(K/K') = -(\Delta H^\circ/R)(1/T - 1/T')$.

2. **Why nearly straight.** ΔH° changes with T only through $\Delta C_P^\circ$: $\Delta H^\circ = \Delta H_0^\circ + \int\Delta C_P^\circ\,dT$. For most reactions $\Delta C_P^\circ$ is a small difference of the products' and reactants' heat capacities (a few J/(mol K) to tens), so over hundreds of kelvin ΔH° changes by only a few percent of its value (typically tens to hundreds of kJ/mol). The slope is therefore almost constant and the curvature is barely visible on a plot that spans many decades of K.

3. **Meaning of the three factors** ($K = K_0K_1K_2$):
   - $K_0 = \exp(-\Delta G_0^\circ/RT_0)$: K at the reference temperature (298.15 K).
   - $K_1 = \exp[(\Delta H_0^\circ/RT_0)(1 - T_0/T)]$: the **main** temperature effect, the van 't Hoff (constant-ΔH°) term, which gives the straight line.
   - $K_2$: the **minor** correction for $\Delta C_P^\circ \ne 0$, usually within a factor of about 0.5–2 of unity. For example, for CO + 2H₂ → CH₃OH at 550 K, $K_1 = 5.87 \times 10^{-8}$ but $K_2$ = 0.52.

4. **Sign of the slope.** Exothermic reactions (ΔH° < 0) have lines rising with 1/T (K falls as T rises); endothermic reactions have falling lines (K rises with T).`,
        answer: String.raw`d ln K/d(1/T) = −ΔH°/R; ΔH° varies only through the small ΔC°P, so the slope is nearly constant and ln K vs 1/T is almost linear. K₀ = K at 298 K, K₁ = main van 't Hoff (constant-ΔH°) effect, K₂ = minor ΔC°P correction (close to 1).` } ] },
    { id: "practice-reaction-equilibria-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P7a", label: "(a)", marks: "", topic: "reaction-equilibria",
        sub: "NH₃ oxidation from 2 mol NH₃ and 5 mol O₂: mole fractions versus ε", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.1(a) (p. 499)`,
        text: String.raw`Develop expressions for the mole fractions of reacting species as functions of the reaction coordinate for a system initially containing 2 mol NH₃ and 5 mol O₂ and undergoing the reaction:

$$\mathrm{4NH_3(g) + 5O_2(g) \rightarrow 4NO(g) + 6H_2O(g)}$$`,
        solution: String.raw`1. **Stoichiometry:** ν = −4, −5, +4, +6; $\nu = \sum\nu_i = 1$; $n_0 = 7$; $n = 7 + \varepsilon$.

2. **Mole fractions** ($y_i = (n_{i0} + \nu_i\varepsilon)/(n_0 + \nu\varepsilon)$):
$$y_{NH_3} = \frac{2 - 4\varepsilon}{7 + \varepsilon}, \quad y_{O_2} = \frac{5 - 5\varepsilon}{7 + \varepsilon}, \quad y_{NO} = \frac{4\varepsilon}{7 + \varepsilon}, \quad y_{H_2O} = \frac{6\varepsilon}{7 + \varepsilon}$$
   Check: numerators sum to $7 + \varepsilon$ ✓.

3. **Range:** NH₃ is limiting ($2 - 4\varepsilon \ge 0$), so $0 \le \varepsilon \le 0.5$. At ε = 0.5: $y_{O_2}$ = 2.5/7.5 = 0.333, $y_{NO}$ = 0.267, $y_{H_2O}$ = 0.400.`,
        answer: String.raw`n = 7 + ε; y_NH₃ = (2 − 4ε)/(7 + ε), y_O₂ = (5 − 5ε)/(7 + ε), y_NO = 4ε/(7 + ε), y_H₂O = 6ε/(7 + ε); 0 ≤ ε ≤ 0.5.` },
      { id: "practice-reaction-equilibria-P7b", label: "(b)", marks: "", topic: "reaction-equilibria",
        sub: "H₂S oxidation from 3 mol H₂S and 5 mol O₂: mole fractions versus ε", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.1(b) (p. 499)`,
        text: String.raw`A system initially containing 3 mol H₂S and 5 mol O₂ undergoes the reaction:

$$\mathrm{2H_2S(g) + 3O_2(g) \rightarrow 2H_2O(g) + 2SO_2(g)}$$

Develop expressions for the mole fractions as functions of the reaction coordinate.`,
        solution: String.raw`1. **Stoichiometry:** ν = −2, −3, +2, +2; $\nu = -1$; $n_0 = 8$; $n = 8 - \varepsilon$.

2. **Mole fractions:**
$$y_{H_2S} = \frac{3 - 2\varepsilon}{8 - \varepsilon}, \quad y_{O_2} = \frac{5 - 3\varepsilon}{8 - \varepsilon}, \quad y_{H_2O} = \frac{2\varepsilon}{8 - \varepsilon}, \quad y_{SO_2} = \frac{2\varepsilon}{8 - \varepsilon}$$
   Check: $3 + 5 + (-2 - 3 + 2 + 2)\varepsilon = 8 - \varepsilon$ ✓.

3. **Range:** H₂S allows ε ≤ 1.5 and O₂ allows ε ≤ 5/3, so H₂S is limiting: $0 \le \varepsilon \le 1.5$.`,
        answer: String.raw`n = 8 − ε; y_H₂S = (3 − 2ε)/(8 − ε), y_O₂ = (5 − 3ε)/(8 − ε), y_H₂O = y_SO₂ = 2ε/(8 − ε); 0 ≤ ε ≤ 1.5.` },
      { id: "practice-reaction-equilibria-P7c", label: "(c)", marks: "", topic: "reaction-equilibria",
        sub: "NO₂ reduction by NH₃ from 3 NO₂, 4 NH₃, 1 N₂: mole fractions versus ε", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.1(c) (p. 499)`,
        text: String.raw`A system initially containing 3 mol NO₂, 4 mol NH₃ and 1 mol N₂ undergoes the reaction:

$$\mathrm{6NO_2(g) + 8NH_3(g) \rightarrow 7N_2(g) + 12H_2O(g)}$$

Develop expressions for the mole fractions as functions of the reaction coordinate.`,
        solution: String.raw`1. **Stoichiometry:** ν = −6, −8, +7, +12; $\nu = 5$; $n_0 = 8$; $n = 8 + 5\varepsilon$. N₂ is both a product and present initially, so it is **not** inert here.

2. **Mole fractions:**
$$y_{NO_2} = \frac{3 - 6\varepsilon}{8 + 5\varepsilon}, \quad y_{NH_3} = \frac{4 - 8\varepsilon}{8 + 5\varepsilon}, \quad y_{N_2} = \frac{1 + 7\varepsilon}{8 + 5\varepsilon}, \quad y_{H_2O} = \frac{12\varepsilon}{8 + 5\varepsilon}$$
   Check: $8 + (-6 - 8 + 7 + 12)\varepsilon = 8 + 5\varepsilon$ ✓.

3. **Range:** the feed is in the stoichiometric ratio (3 : 4 = 6 : 8), so NO₂ and NH₃ run out together at ε = 0.5: $0 \le \varepsilon \le 0.5$. At ε = 0.5: $y_{N_2}$ = 4.5/10.5 = 0.429, $y_{H_2O}$ = 0.571.`,
        answer: String.raw`n = 8 + 5ε; y_NO₂ = (3 − 6ε)/(8 + 5ε), y_NH₃ = (4 − 8ε)/(8 + 5ε), y_N₂ = (1 + 7ε)/(8 + 5ε), y_H₂O = 12ε/(8 + 5ε); 0 ≤ ε ≤ 0.5.` } ] },
    { id: "practice-reaction-equilibria-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P8", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Water-gas shift at 1000 K: G versus ε, minimum by dG/dε = 0, check with K", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.4(a),(b) and 13.6(a) (p. 500)`,
        text: String.raw`Consider the water-gas-shift reaction H₂(g) + CO₂(g) → H₂O(g) + CO(g). At high temperatures and low to moderate pressures the species form an ideal-gas mixture, and

$$G = \sum_i y_i\Delta G^\circ_{f_i} + RT\sum_i y_i\ln y_i \qquad (A)$$

Since $dn/d\varepsilon = 0$ for this reaction, the equilibrium criterion becomes $dG/d\varepsilon = 0$ (B). For T = 1000 K and a feed of 1 mol H₂ and 1 mol CO₂ (ΔG°f at 1000 K: H₂O −192 420, CO −200 240, CO₂ −395 790 J/mol):

(a) Determine the equilibrium value of ε by application of Eq. (B).

(b) Plot G vs. ε, indicating the location of the equilibrium value of ε.

(c) Verify ε by the method of equilibrium constants (Pb. 13.6).`,
        solution: String.raw`**Given:** T = 1000 K, RT = 8314 J/mol; feed 1 mol H₂ + 1 mol CO₂ (n = 2, constant).

1. **Mole fractions:** $y_{H_2} = y_{CO_2} = (1 - \varepsilon)/2$, $y_{H_2O} = y_{CO} = \varepsilon/2$.

2. **G(ε)** from (A), with $\Delta G^\circ_{f,H_2}$ = 0:
$$G = \frac{(1 - \varepsilon)(-395\,790) + \varepsilon(-192\,420 - 200\,240)}{2} + RT\left[(1 - \varepsilon)\ln\frac{1 - \varepsilon}{2} + \varepsilon\ln\frac{\varepsilon}{2}\right]$$

3. **(a) dG/dε = 0.** The +1 and −1 from differentiating $x\ln x$ cancel:
$$\frac{dG}{d\varepsilon} = \frac{\Delta G^\circ}{2} + RT\ln\frac{\varepsilon}{1 - \varepsilon} = 0, \qquad \Delta G^\circ = -192\,420 - 200\,240 + 395\,790 = 3\,130\ \mathrm{J/mol}$$
$$\ln\frac{\varepsilon}{1 - \varepsilon} = \frac{-3\,130}{2 \times 8314} = -0.1882 \;\Rightarrow\; \frac{\varepsilon}{1 - \varepsilon} = 0.8284 \;\Rightarrow\; \varepsilon_e = 0.453$$

4. **(b) Plot.** G = −203 658 J/mol at ε → 0, −202 093 J/mol at ε → 1, and a minimum of −208 675 J/mol at ε = 0.453:

![G versus ε for the water-gas shift at 1000 K, 1 bar, with the minimum at ε = 0.453](fig/practice-reaction-equilibria-P8-sol.svg)

   The curve has infinite slope at both ends (the $\ln y_i$ terms), so the minimum always lies inside 0 < ε < 1.

5. **(c) Check with K.** $K = \exp(-\Delta G^\circ/RT) = \exp(-3130/8314) = 0.6863$; ν = 0, so
$$\frac{y_{H_2O}\,y_{CO}}{y_{H_2}\,y_{CO_2}} = \frac{\varepsilon^2}{(1 - \varepsilon)^2} = 0.6863 \;\Rightarrow\; \frac{\varepsilon}{1 - \varepsilon} = \sqrt{0.6863} = 0.8284 \;\Rightarrow\; \varepsilon = 0.453 \quad\checkmark$$
   (The same K follows from Appendix C: 1/K(CO + H₂O → CO₂ + H₂, 1000 K) = 1/1.461 = 0.684.)

**Result:** $\varepsilon_e$ = 0.453; $y_{H_2O} = y_{CO}$ = 0.227, $y_{H_2} = y_{CO_2}$ = 0.273; $G_{min}$ = −208.7 kJ/mol.`,
        answer: String.raw`dG/dε = ΔG°/2 + RT ln[ε/(1 − ε)] = 0 with ΔG° = 3130 J/mol ⇒ ε = 0.453 (G_min = −208.7 kJ/mol); K = e^(−3130/8314) = 0.686 = ε²/(1 − ε)² gives the same ε.` } ] },
    { id: "practice-reaction-equilibria-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P9", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Effect of T and P on the equilibrium extent: (∂ε/∂T)_P, (∂ε/∂P)_T and dε/dK_y > 0", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.8 (pp. 500–501)`,
        text: String.raw`For ideal gases, exact expressions can be developed for the effect of T and P on $\varepsilon_e$. Let $\prod_i(y_i)^{\nu_i} \equiv K_y$. Then $(\partial\varepsilon_e/\partial T)_P = (\partial K_y/\partial T)_P\,d\varepsilon_e/dK_y$ and $(\partial\varepsilon_e/\partial P)_T = (\partial K_y/\partial P)_T\,d\varepsilon_e/dK_y$. Show that:

(a) $\left(\dfrac{\partial\varepsilon_e}{\partial T}\right)_P = \dfrac{K_y}{RT^2}\dfrac{d\varepsilon_e}{dK_y}\Delta H^\circ$

(b) $\left(\dfrac{\partial\varepsilon_e}{\partial P}\right)_T = \dfrac{K_y}{P}\dfrac{d\varepsilon_e}{dK_y}(-\nu)$

(c) $d\varepsilon_e/dK_y$ is always positive.`,
        solution: String.raw`1. **Ideal-gas equilibrium:** $K_y = \prod y_i^{\nu_i} = (P/P^\circ)^{-\nu}K$, so $\ln K_y = \ln K - \nu\ln(P/P^\circ)$, where K depends on T only.

2. **(a)** At constant P, $(\partial\ln K_y/\partial T)_P = d\ln K/dT = \Delta H^\circ/RT^2$ (van 't Hoff, SVNA eq. 13.14). Hence $(\partial K_y/\partial T)_P = K_y\Delta H^\circ/RT^2$ and
$$\left(\frac{\partial\varepsilon_e}{\partial T}\right)_P = \frac{K_y}{RT^2}\frac{d\varepsilon_e}{dK_y}\Delta H^\circ$$

3. **(b)** At constant T, $(\partial\ln K_y/\partial P)_T = -\nu/P$, so $(\partial K_y/\partial P)_T = -\nu K_y/P$ and
$$\left(\frac{\partial\varepsilon_e}{\partial P}\right)_T = \frac{K_y}{P}\frac{d\varepsilon_e}{dK_y}(-\nu)$$

4. **(c) Sign of $dK_y/d\varepsilon$.** With $n_i = n_{i0} + \nu_i\varepsilon$ and $n = n_0 + \nu\varepsilon$, $\ln K_y = \sum\nu_i(\ln n_i - \ln n)$:
$$\frac{d\ln K_y}{d\varepsilon} = \sum_i\frac{\nu_i^2}{n_i} - \frac{\nu^2}{n}$$
   (the sum is over reacting species; inerts only add to n). By the Cauchy–Schwarz inequality,
$$\nu^2 = \left(\sum_i\frac{\nu_i}{\sqrt{n_i}}\sqrt{n_i}\right)^2 \le \sum_i\frac{\nu_i^2}{n_i}\sum_in_i \le \sum_i\frac{\nu_i^2}{n_i}\,n$$
   so $d\ln K_y/d\varepsilon \ge 0$; equality would need all $\nu_i/n_i$ equal and no inerts, which cannot hold when reactants (ν < 0) and products (ν > 0) are both present. Therefore $dK_y/d\varepsilon > 0$, and its reciprocal $d\varepsilon_e/dK_y > 0$.

5. **Consequences (Le Chatelier, quantified):** the sign of $(\partial\varepsilon_e/\partial T)_P$ is that of ΔH°: raising T increases the conversion of endothermic reactions and decreases that of exothermic ones. The sign of $(\partial\varepsilon_e/\partial P)_T$ is that of −ν: raising P favours the side with fewer gas moles (ν < 0), and has no effect when ν = 0.`,
        answer: String.raw`ln K_y = ln K − ν ln(P/P°) ⇒ (∂K_y/∂T)_P = K_yΔH°/RT², (∂K_y/∂P)_T = −νK_y/P, giving (a) and (b). d ln K_y/dε = Σνᵢ²/nᵢ − ν²/n > 0 (Cauchy–Schwarz), so dε/dK_y > 0: ε rises with T if ΔH° > 0 and with P if ν < 0.` } ] },
    { id: "practice-reaction-equilibria-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P10", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Same equilibrium from 2NH₃ + 3NO, its double, and its reverse (Peter, Paul and Mary)", type: "theory", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.10 (p. 501)`,
        text: String.raw`Peter, Paul, and Mary are asked to find the equilibrium composition at a particular T and P for given initial amounts of reactants for the gas-phase reaction:

$$\mathrm{2NH_3 + 3NO \rightarrow 3H_2O + \tfrac52N_2} \qquad (A)$$

Mary uses reaction (A) as written. Paul multiplies it by 2: $\mathrm{4NH_3 + 6NO \rightarrow 6H_2O + 5N_2}$ (B). Peter uses the reverse: $\mathrm{3H_2O + \tfrac52N_2 \rightarrow 2NH_3 + 3NO}$ (C). Write the chemical-equilibrium equations for the three reactions, indicate how the equilibrium constants are related, and show why all three obtain the same result.`,
        solution: String.raw`1. **Equilibrium constants.** $\Delta G^\circ = \sum\nu_i\Delta G^\circ_{f_i}$ scales with the stoichiometric numbers: $\Delta G_B^\circ = 2\Delta G_A^\circ$ and $\Delta G_C^\circ = -\Delta G_A^\circ$. With $K = \exp(-\Delta G^\circ/RT)$:
$$K_B = K_A^2, \qquad K_C = \frac{1}{K_A}$$

2. **Equilibrium equations** (ideal gases, $\nu_A = 3 + 2.5 - 2 - 3 = 0.5$, $\nu_B = 1$, $\nu_C = -0.5$):
$$\text{(A)}\quad \frac{y_{H_2O}^3\,y_{N_2}^{5/2}}{y_{NH_3}^2\,y_{NO}^3} = \left(\frac{P}{P^\circ}\right)^{-0.5}K_A$$
$$\text{(B)}\quad \frac{y_{H_2O}^6\,y_{N_2}^5}{y_{NH_3}^4\,y_{NO}^6} = \left(\frac{P}{P^\circ}\right)^{-1}K_A^2$$
$$\text{(C)}\quad \frac{y_{NH_3}^2\,y_{NO}^3}{y_{H_2O}^3\,y_{N_2}^{5/2}} = \left(\frac{P}{P^\circ}\right)^{0.5}\frac{1}{K_A}$$

3. **Why the results agree.** (B) is exactly the square of (A), and (C) is exactly its reciprocal, so all three impose the same relation among the mole fractions.

4. **The extents differ but the compositions agree.** For the same change in moles, $\varepsilon_B = \varepsilon_A/2$ and $\varepsilon_C = -\varepsilon_A$, because $n_i = n_{i0} + \nu_i\varepsilon$ and the ν's are scaled by 2 or −1. The mole numbers $n_i$, and hence the $y_i$, are identical. Only the numerical value of ε (and of K) depends on how the equation is written.`,
        answer: String.raw`K_B = K_A², K_C = 1/K_A (ΔG° scales with ν). Equation (B) is the square of (A) and (C) its reciprocal, so the y's satisfy the same relation; ε_B = ε_A/2, ε_C = −ε_A but the nᵢ are identical.` } ] },
    { id: "practice-reaction-equilibria-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P11", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Deacon process 4HCl + O₂ → 2H₂O + 2Cl₂ at 773.15 K and 2 bar, 5 mol HCl per mol O₂", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.11 (p. 501)`,
        text: String.raw`The following reaction reaches equilibrium at 773.15 K (500°C) and 2 bar:

$$\mathrm{4HCl(g) + O_2(g) \rightarrow 2H_2O(g) + 2Cl_2(g)}$$

If the system initially contains 5 mol HCl for each mole of oxygen, what is the composition of the system at equilibrium? Assume ideal gases.`,
        solution: String.raw`Data are from SVNA 6th ed. (SI) Appendix C: Table C.4 (pp. 637–638, $\Delta H^\circ_{f298}$, $\Delta G^\circ_{f298}$ in J/mol), Table C.1 (p. 635, ideal-gas $C_P/R = A + BT + CT^2 + DT^{-2}$) and Table C.2 (p. 636, solids). K is evaluated as $K = K_0K_1K_2$ (SVNA eq. 13.21), with
$$K_0 = \exp\frac{-\Delta G_0^\circ}{RT_0},\quad K_1 = \exp\left[\frac{\Delta H_0^\circ}{RT_0}\left(1 - \frac{T_0}{T}\right)\right],\quad K_2 = \exp\left(-\frac1T\int_{T_0}^T\frac{\Delta C_P^\circ}{R}dT + \int_{T_0}^T\frac{\Delta C_P^\circ}{R}\frac{dT}{T}\right)$$

| Species | ν | $\Delta H^\circ_{f298}$ | $\Delta G^\circ_{f298}$ | A | 10³B | 10⁻⁵D |
|---|---|---|---|---|---|---|
| HCl | −4 | −92 307 | −95 299 | 3.156 | 0.623 | 0.151 |
| O₂ | −1 | 0 | 0 | 3.639 | 0.506 | −0.227 |
| H₂O | +2 | −241 818 | −228 572 | 3.470 | 1.450 | 0.121 |
| Cl₂ | +2 | 0 | 0 | 4.442 | 0.089 | −0.344 |

1. **Standard changes:** $\Delta H_0^\circ = 2(-241\,818) - 4(-92\,307) = -114\,408$ J/mol; $\Delta G_0^\circ = 2(-228\,572) - 4(-95\,299) = -75\,948$ J/mol; ΔA = −0.439, ΔB = 0.080×10⁻³, ΔD = −0.823×10⁵.

2. **K at 773.15 K:** $K_0 = 2.024 \times 10^{13}$, $K_1 = 4.845 \times 10^{-13}$; $\int\Delta C_P^\circ/R\,dT = -357.76$ K, $\int\Delta C_P^\circ/R\,dT/T = -0.7744$, $K_2 = \exp(357.76/773.15 - 0.7744) = 0.732$:
$$K = 2.024 \times 10^{13} \times 4.845 \times 10^{-13} \times 0.732 = 7.18$$

3. **Mole numbers** (basis 1 mol O₂, 5 mol HCl): HCl 5 − 4ε, O₂ 1 − ε, H₂O 2ε, Cl₂ 2ε; n = 6 − ε. ν = −1.

4. **Equilibrium equation:**
$$\frac{y_{H_2O}^2\,y_{Cl_2}^2}{y_{HCl}^4\,y_{O_2}} = \left(\frac{P}{P^\circ}\right)^{1}K \;\Rightarrow\; \frac{(2\varepsilon)^4(6 - \varepsilon)}{(5 - 4\varepsilon)^4(1 - \varepsilon)} = 2(7.18) = 14.36$$

5. **Solve** (trial): ε = 0.793, n = 5.207 mol.

| | HCl | O₂ | H₂O | Cl₂ |
|---|---|---|---|---|
| mol | 1.826 | 0.207 | 1.587 | 1.587 |
| $y_i$ | 0.351 | 0.040 | 0.305 | 0.305 |

**Result:** $y_{HCl}$ = 0.351, $y_{O_2}$ = 0.040, $y_{H_2O} = y_{Cl_2}$ = 0.305 (O₂ 79% and HCl 63% converted).`,
        answer: String.raw`K(773 K) = 2.02×10¹³ × 4.85×10⁻¹³ × 0.732 = 7.18; (2ε)⁴(6 − ε)/[(5 − 4ε)⁴(1 − ε)] = 2K ⇒ ε = 0.793: y_HCl 0.351, y_O₂ 0.040, y_H₂O = y_Cl₂ = 0.305.` } ] },
    { id: "practice-reaction-equilibria-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P12", label: "", marks: "", topic: "reaction-equilibria",
        sub: "SO₂ converter at 753.15 K and 1 bar: conversion and heat removed for isothermal operation", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.15 (p. 502)`,
        text: String.raw`The gas stream from a sulfur burner is composed of 15-mol-% SO₂, 20-mol-% O₂, and 65-mol-% N₂. This gas stream at 1 bar and 753.15 K (480°C) enters a catalytic converter, where the SO₂ is further oxidized to SO₃. Assuming that the reaction reaches equilibrium, how much heat must be removed from the converter to maintain isothermal conditions? Base your answer on 1 mol of entering gas.`,
        solution: String.raw`Data are from SVNA 6th ed. (SI) Appendix C: Table C.4 (pp. 637–638, $\Delta H^\circ_{f298}$, $\Delta G^\circ_{f298}$ in J/mol), Table C.1 (p. 635, ideal-gas $C_P/R = A + BT + CT^2 + DT^{-2}$) and Table C.2 (p. 636, solids). K is evaluated as $K = K_0K_1K_2$ (SVNA eq. 13.21), with
$$K_0 = \exp\frac{-\Delta G_0^\circ}{RT_0},\quad K_1 = \exp\left[\frac{\Delta H_0^\circ}{RT_0}\left(1 - \frac{T_0}{T}\right)\right],\quad K_2 = \exp\left(-\frac1T\int_{T_0}^T\frac{\Delta C_P^\circ}{R}dT + \int_{T_0}^T\frac{\Delta C_P^\circ}{R}\frac{dT}{T}\right)$$

**Reaction:** SO₂ + ½O₂ → SO₃ (ν = −½). SO₂: ΔH°f = −296 830, ΔG°f = −300 194; SO₃: −395 720, −371 060 J/mol. $C_P/R$: SO₂ (5.699, 0.801×10⁻³, D −1.015×10⁵), O₂ (3.639, 0.506×10⁻³, −0.227×10⁵), SO₃ (8.060, 1.056×10⁻³, −2.028×10⁵).

**Assumptions:** ideal gases; N₂ inert; isothermal converter, so Q = (moles reacted) × ΔH° at 753.15 K.

1. **Standard changes:** $\Delta H_0^\circ$ = −98 890 J/mol, $\Delta G_0^\circ$ = −70 866 J/mol; ΔA = 0.5415, ΔB = 0.002×10⁻³, ΔD = −0.8995×10⁵.

2. **K at 753.15 K:** $K_0 = 2.605 \times 10^{12}$, $K_1 = 3.412 \times 10^{-11}$, $K_2 = \exp(-64.60/753.15 + 0.07605) = 0.990$:
$$K = 2.605 \times 10^{12} \times 3.412 \times 10^{-11} \times 0.990 = 88.0$$

3. **Equilibrium** (1 mol feed; n = 1 − 0.5ε; P/P° = 1):
$$\frac{y_{SO_3}}{y_{SO_2}\,y_{O_2}^{1/2}} = \frac{\varepsilon(1 - 0.5\varepsilon)^{1/2}}{(0.15 - \varepsilon)(0.20 - 0.5\varepsilon)^{1/2}} = 88.0 \;\Rightarrow\; \varepsilon = 0.1455\ \mathrm{mol}$$
   SO₂ conversion = 0.1455/0.15 = 97.0%. Exit gas: SO₂ 0.0045, O₂ 0.1272, SO₃ 0.1455, N₂ 0.65 mol (y = 0.005, 0.137, 0.157, 0.701).

4. **Heat of reaction at 753.15 K:**
$$\Delta H^\circ = \Delta H_0^\circ + R\int_{298.15}^{753.15}\frac{\Delta C_P^\circ}{R}dT = -98\,890 + 8.314(64.60) = -98\,353\ \mathrm{J/mol}$$

5. **Heat removed:** inlet and outlet are both at 753.15 K, so
$$Q = \varepsilon\,\Delta H^\circ_{753} = 0.1455(-98\,353) = -14\,310\ \mathrm{J}$$

**Result:** about 14.3 kJ must be removed per mol of entering gas (SO₂ conversion 97%).`,
        answer: String.raw`K(753 K) = 88.0; ε(1 − 0.5ε)^½/[(0.15 − ε)(0.20 − 0.5ε)^½] = 88 ⇒ ε = 0.1455 mol (97% conversion); ΔH°₇₅₃ = −98.35 kJ/mol ⇒ Q = −14.3 kJ per mol of entering gas.` } ] },
    { id: "practice-reaction-equilibria-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P13", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Ethane dehydrogenation at 1100 K and 1 bar with 0.5 mol steam per mol ethane", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.17 (p. 502)`,
        text: String.raw`Ethylene is produced by the dehydrogenation of ethane. If the feed includes 0.5 mol of steam (an inert diluent) per mole of ethane and if the reaction reaches equilibrium at 1100 K and 1 bar, what is the composition of the product gas on a water-free basis?`,
        solution: String.raw`Data are from SVNA 6th ed. (SI) Appendix C: Table C.4 (pp. 637–638, $\Delta H^\circ_{f298}$, $\Delta G^\circ_{f298}$ in J/mol), Table C.1 (p. 635, ideal-gas $C_P/R = A + BT + CT^2 + DT^{-2}$) and Table C.2 (p. 636, solids). K is evaluated as $K = K_0K_1K_2$ (SVNA eq. 13.21), with
$$K_0 = \exp\frac{-\Delta G_0^\circ}{RT_0},\quad K_1 = \exp\left[\frac{\Delta H_0^\circ}{RT_0}\left(1 - \frac{T_0}{T}\right)\right],\quad K_2 = \exp\left(-\frac1T\int_{T_0}^T\frac{\Delta C_P^\circ}{R}dT + \int_{T_0}^T\frac{\Delta C_P^\circ}{R}\frac{dT}{T}\right)$$

**Reaction:** C₂H₆ → C₂H₄ + H₂ (ν = +1). Ethane: ΔH°f = −83 820, ΔG°f = −31 855; ethylene: 52 510, 68 460 J/mol. $C_P/R$: C₂H₆ (1.131, 19.225×10⁻³, C −5.561×10⁻⁶), C₂H₄ (1.424, 14.394×10⁻³, −4.392×10⁻⁶), H₂ (3.249, 0.422×10⁻³, D 0.083×10⁵).

1. **Standard changes:** $\Delta H_0^\circ$ = 136 330 J/mol, $\Delta G_0^\circ$ = 100 315 J/mol; ΔA = 3.542, ΔB = −4.409×10⁻³, ΔC = 1.169×10⁻⁶, ΔD = 0.083×10⁵.

2. **K at 1100 K:** $K_0 = 2.658 \times 10^{-18}$, $K_1 = 2.578 \times 10^{17}$, $K_2 = \exp(-897.28/1100 + 1.7872) = 2.642$:
$$K = 2.658 \times 10^{-18} \times 2.578 \times 10^{17} \times 2.642 = 1.81$$

3. **Equilibrium** (1 mol C₂H₆, 0.5 mol H₂O; n = 1.5 + ε; P/P° = 1):
$$\frac{y_{C_2H_4}\,y_{H_2}}{y_{C_2H_6}} = \frac{\varepsilon^2}{(1 - \varepsilon)(1.5 + \varepsilon)} = 1.81 \;\Rightarrow\; \varepsilon = 0.835$$

4. **Composition:** wet: C₂H₆ 0.071, C₂H₄ 0.358, H₂ 0.358, H₂O 0.214. **Water-free** (divide by 1 + ε = 1.835 mol):
$$y_{C_2H_6} = \frac{0.165}{1.835} = 0.090, \qquad y_{C_2H_4} = y_{H_2} = \frac{0.835}{1.835} = 0.455$$

5. **Role of steam:** ν = +1, so the inert diluent lowers the partial pressures and raises the conversion (without steam, ε²/(1 − ε²) = 1.81 gives ε = 0.803).

**Result:** dry product ≈ 45.5% C₂H₄, 45.5% H₂, 9.0% C₂H₆ (83.5% conversion).`,
        answer: String.raw`K(1100 K) = 1.81; ε²/[(1 − ε)(1.5 + ε)] = 1.81 ⇒ ε = 0.835; dry basis: C₂H₄ 0.455, H₂ 0.455, C₂H₆ 0.090 (steam raises conversion from 0.803 to 0.835).` } ] },
    { id: "practice-reaction-equilibria-P14", q: 14, section: "S", compulsory: false, stem: String.raw`For the ammonia synthesis reaction ½N₂(g) + 3/2H₂(g) → NH₃(g), the equilibrium conversion to ammonia is large at 300 K, but decreases rapidly with increasing T. However, reaction rates become appreciable only at higher temperatures. For a feed mixture of hydrogen and nitrogen in the stoichiometric proportions,`,
      parts: [
      { id: "practice-reaction-equilibria-P14a", label: "(a)", marks: "", topic: "reaction-equilibria",
        sub: "Ammonia synthesis: equilibrium NH₃ mole fraction at 1 bar and 300 K", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.20(a) (p. 503)`,
        text: String.raw`(a) What is the equilibrium mole fraction of ammonia at 1 bar and 300 K?`,
        solution: String.raw`**Data** (SVNA App. C): NH₃: $\Delta H^\circ_{f298}$ = −46 110, $\Delta G^\circ_{f298}$ = −16 450 J/mol; $C_P/R$: NH₃ (3.578, 3.020×10⁻³, D −0.186×10⁵), N₂ (3.280, 0.593×10⁻³, 0.040×10⁵), H₂ (3.249, 0.422×10⁻³, 0.083×10⁵). Reaction ½N₂ + 3/2H₂ → NH₃: $\Delta H_0^\circ$ = −46 110, $\Delta G_0^\circ$ = −16 450 J/mol, ΔA = −2.9355, ΔB = 2.0905×10⁻³, ΔD = −0.3305×10⁵; ν = −1. Feed ½ mol N₂ + 3/2 mol H₂: n = 2 − ε, and
$$\frac{y_{NH_3}}{y_{N_2}^{1/2}y_{H_2}^{3/2}} = \frac{\varepsilon(2 - \varepsilon)}{(0.5)^{1/2}(1.5)^{3/2}(1 - \varepsilon)^2} = \frac{\varepsilon(2 - \varepsilon)}{1.299(1 - \varepsilon)^2} = \frac{P}{P^\circ}K$$

1. **K at 300 K:** $K_0 = \exp(16\,450/(8.314 \times 298.15)) = 762.2$, $K_1 = \exp[(-46\,110/(8.314 \times 298.15))(1 - 298.15/300)] = 0.8916$, $K_2$ = 0.99995; K = 679.6.

2. **Solve** $\varepsilon(2 - \varepsilon)/[1.299(1 - \varepsilon)^2] = 679.6$: ε = 0.9664.

3. $y_{NH_3} = \varepsilon/(2 - \varepsilon) = 0.9664/1.0336 = 0.935$.

**Result:** $y_{NH_3}$ ≈ 0.935 at 300 K and 1 bar.`,
        answer: String.raw`K(300 K) = 762.2 × 0.8916 × 1.000 = 679.6; ε(2 − ε)/[1.299(1 − ε)²] = 679.6 ⇒ ε = 0.966, y_NH₃ = 0.935.` },
      { id: "practice-reaction-equilibria-P14b", label: "(b)", marks: "", topic: "reaction-equilibria",
        sub: "Ammonia synthesis: temperature for y(NH₃) = 0.50 at 1 bar", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.20(b) (p. 503)`,
        text: String.raw`(b) At what temperature does the equilibrium mole fraction of ammonia equal 0.50 for a pressure of 1 bar?`,
        solution: String.raw`**Data** (SVNA App. C): NH₃: $\Delta H^\circ_{f298}$ = −46 110, $\Delta G^\circ_{f298}$ = −16 450 J/mol; $C_P/R$: NH₃ (3.578, 3.020×10⁻³, D −0.186×10⁵), N₂ (3.280, 0.593×10⁻³, 0.040×10⁵), H₂ (3.249, 0.422×10⁻³, 0.083×10⁵). Reaction ½N₂ + 3/2H₂ → NH₃: $\Delta H_0^\circ$ = −46 110, $\Delta G_0^\circ$ = −16 450 J/mol, ΔA = −2.9355, ΔB = 2.0905×10⁻³, ΔD = −0.3305×10⁵; ν = −1. Feed ½ mol N₂ + 3/2 mol H₂: n = 2 − ε, and
$$\frac{y_{NH_3}}{y_{N_2}^{1/2}y_{H_2}^{3/2}} = \frac{\varepsilon(2 - \varepsilon)}{(0.5)^{1/2}(1.5)^{3/2}(1 - \varepsilon)^2} = \frac{\varepsilon(2 - \varepsilon)}{1.299(1 - \varepsilon)^2} = \frac{P}{P^\circ}K$$

1. **Extent for y = 0.5:** $\varepsilon/(2 - \varepsilon) = 0.5 \Rightarrow \varepsilon = 2/3$.

2. **Required K** at 1 bar: $K = \dfrac{(2/3)(4/3)}{1.299(1/3)^2} = 6.158$.

3. **Solve K(T) = 6.158.** Van 't Hoff estimate: $1/T = 1/298.15 - R\ln(6.158/762.2)/(-46\,110)$ gives T ≈ 402 K. With the ΔC°P terms, trial converges to **T = 399.5 K**: $K_1 = 8.924 \times 10^{-3}$, $K_2$ = 0.9054, $K = 762.2 \times 8.924 \times 10^{-3} \times 0.9054 = 6.158$ ✓.

**Result:** T ≈ 400 K (about 126 °C) at 1 bar.`,
        answer: String.raw`y = 0.5 ⇒ ε = 2/3 ⇒ K = 6.158; K₀K₁K₂ = 6.158 at T ≈ 399.5 K.` },
      { id: "practice-reaction-equilibria-P14c", label: "(c)", marks: "", topic: "reaction-equilibria",
        sub: "Ammonia synthesis: temperature for y(NH₃) = 0.50 at 100 bar (ideal gases)", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.20(c) (p. 503)`,
        text: String.raw`(c) At what temperature does the equilibrium mole fraction of ammonia equal 0.50 for a pressure of 100 bar, assuming the equilibrium mixture is an ideal gas?`,
        solution: String.raw`**Data** (SVNA App. C): NH₃: $\Delta H^\circ_{f298}$ = −46 110, $\Delta G^\circ_{f298}$ = −16 450 J/mol; $C_P/R$: NH₃ (3.578, 3.020×10⁻³, D −0.186×10⁵), N₂ (3.280, 0.593×10⁻³, 0.040×10⁵), H₂ (3.249, 0.422×10⁻³, 0.083×10⁵). Reaction ½N₂ + 3/2H₂ → NH₃: $\Delta H_0^\circ$ = −46 110, $\Delta G_0^\circ$ = −16 450 J/mol, ΔA = −2.9355, ΔB = 2.0905×10⁻³, ΔD = −0.3305×10⁵; ν = −1. Feed ½ mol N₂ + 3/2 mol H₂: n = 2 − ε, and
$$\frac{y_{NH_3}}{y_{N_2}^{1/2}y_{H_2}^{3/2}} = \frac{\varepsilon(2 - \varepsilon)}{(0.5)^{1/2}(1.5)^{3/2}(1 - \varepsilon)^2} = \frac{\varepsilon(2 - \varepsilon)}{1.299(1 - \varepsilon)^2} = \frac{P}{P^\circ}K$$

1. **Required K.** The composition is the same as in (b), so $K_y$ = 6.158, but now $K = K_y(P/P^\circ)^{-1} = 6.158/100 = 0.06158$.

2. **Solve K(T) = 0.06158:** T = 577.6 K, where $K_1 = 1.234 \times 10^{-4}$, $K_2$ = 0.6549 and $K = 762.2 \times 1.234 \times 10^{-4} \times 0.6549 = 0.0616$ ✓.

3. **Comment.** Raising P from 1 to 100 bar lets the same yield be reached 178 K hotter, where the iron catalyst works. Industrial plants use 150–300 bar and about 700 K, accepting lower single-pass conversion. At 100 bar the ideal-gas assumption is approximate; part (d) of the book problem repeats the calculation with Lewis/Randall fugacity coefficients.

**Result:** T ≈ 578 K at 100 bar.`,
        answer: String.raw`K = 6.158/100 = 0.0616 ⇒ T ≈ 577.6 K (vs 399.5 K at 1 bar).` } ] },
    { id: "practice-reaction-equilibria-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P15", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Methanol synthesis: temperature for y(CH₃OH) = 0.50 at 100 bar (ideal gases)", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.21(c) (p. 503)`,
        text: String.raw`For the methanol synthesis reaction CO(g) + 2H₂(g) → CH₃OH(g) with a feed of CO and H₂ in the stoichiometric proportions: at what temperature does the equilibrium mole fraction of methanol equal 0.50 for a pressure of 100 bar, assuming the equilibrium mixture is an ideal gas?`,
        solution: String.raw`Data are from SVNA 6th ed. (SI) Appendix C: Table C.4 (pp. 637–638, $\Delta H^\circ_{f298}$, $\Delta G^\circ_{f298}$ in J/mol), Table C.1 (p. 635, ideal-gas $C_P/R = A + BT + CT^2 + DT^{-2}$) and Table C.2 (p. 636, solids). K is evaluated as $K = K_0K_1K_2$ (SVNA eq. 13.21), with
$$K_0 = \exp\frac{-\Delta G_0^\circ}{RT_0},\quad K_1 = \exp\left[\frac{\Delta H_0^\circ}{RT_0}\left(1 - \frac{T_0}{T}\right)\right],\quad K_2 = \exp\left(-\frac1T\int_{T_0}^T\frac{\Delta C_P^\circ}{R}dT + \int_{T_0}^T\frac{\Delta C_P^\circ}{R}\frac{dT}{T}\right)$$

1. **Reaction data:** $\Delta H_0^\circ$ = −200 660 + 110 525 = −90 135 J/mol; $\Delta G_0^\circ$ = −161 960 + 137 169 = −24 791 J/mol; ΔA = −7.663, ΔB = 10.815×10⁻³, ΔC = −3.450×10⁻⁶, ΔD = −0.135×10⁵; ν = −2.

2. **Composition for y = 0.5.** Feed 1 CO + 2 H₂, n = 3 − 2ε: $\varepsilon/(3 - 2\varepsilon) = 0.5 \Rightarrow \varepsilon = 0.75$, $y_{CO} = 1/6$, $y_{H_2} = 1/3$, and
$$K_y = \frac{0.5}{(1/6)(1/3)^2} = 27$$

3. **Required K:** $K = K_y(P/P^\circ)^{\nu} = 27 \times 100^{-2} = 2.7 \times 10^{-3}$.

4. **Solve K(T) = 2.7×10⁻³:** T = 516.5 K, where $K_0 = 2.205 \times 10^4$, $K_1 = 2.111 \times 10^{-7}$, $K_2$ = 0.580: $K = 2.70 \times 10^{-3}$ ✓.

5. **Comparison:** at 1 bar the same yield needs 364.5 K (2016-17 and 2017-18 papers). The factor $(P/P^\circ)^2 = 10^4$ moves it to 516 K, close to industrial practice (500–550 K, 50–100 bar).

**Result:** T ≈ 516 K at 100 bar.`,
        answer: String.raw`y = 0.5 ⇒ K_y = 27; K = 27/100² = 2.7×10⁻³ ⇒ T ≈ 516.5 K.` } ] },
    { id: "practice-reaction-equilibria-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P16", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Limestone decomposition: temperature at which the CO₂ pressure is 1 atm", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.22 (p. 503)`,
        text: String.raw`Limestone (CaCO₃) decomposes upon heating to yield quicklime (CaO) and carbon dioxide. At what temperature is the decomposition pressure of limestone 1 (atm)?`,
        solution: String.raw`Data are from SVNA 6th ed. (SI) Appendix C: Table C.4 (pp. 637–638, $\Delta H^\circ_{f298}$, $\Delta G^\circ_{f298}$ in J/mol), Table C.1 (p. 635, ideal-gas $C_P/R = A + BT + CT^2 + DT^{-2}$) and Table C.2 (p. 636, solids). K is evaluated as $K = K_0K_1K_2$ (SVNA eq. 13.21), with
$$K_0 = \exp\frac{-\Delta G_0^\circ}{RT_0},\quad K_1 = \exp\left[\frac{\Delta H_0^\circ}{RT_0}\left(1 - \frac{T_0}{T}\right)\right],\quad K_2 = \exp\left(-\frac1T\int_{T_0}^T\frac{\Delta C_P^\circ}{R}dT + \int_{T_0}^T\frac{\Delta C_P^\circ}{R}\frac{dT}{T}\right)$$

| Species | ν | $\Delta H^\circ_{f298}$ | $\Delta G^\circ_{f298}$ | A | 10³B | 10⁻⁵D |
|---|---|---|---|---|---|---|
| CaCO₃(s) | −1 | −1 206 920 | −1 128 790 | 12.572 | 2.637 | −3.120 |
| CaO(s) | +1 | −635 090 | −604 030 | 6.104 | 0.443 | −1.047 |
| CO₂(g) | +1 | −393 509 | −394 359 | 5.457 | 1.045 | −1.157 |

**Assumptions:** CaCO₃ and CaO are pure solids (activity = 1; the pressure effect on solids is negligible); CO₂ is an ideal gas.

1. **Equilibrium expression** for the heterogeneous reaction CaCO₃(s) → CaO(s) + CO₂(g): only the gas appears,
$$K = \frac{\hat f_{CO_2}}{f^\circ} = \frac{P_{CO_2}}{P^\circ}$$
   For a decomposition pressure of 1 atm: K = 1.01325/1 = 1.013.

2. **Standard changes:** $\Delta H_0^\circ$ = 178 321 J/mol, $\Delta G_0^\circ$ = 130 401 J/mol; ΔA = −1.011, ΔB = −1.149×10⁻³, ΔD = 0.916×10⁵.

3. **Solve K(T) = 1.013.** First estimate with constant ΔH°: $1/T = 1/298.15 - R\ln(1.013/1.424 \times 10^{-23})/178\,321$ gives T ≈ 1110 K. With the ΔC°P terms, trial gives **T = 1151.8 K**: $K_0 = 1.424 \times 10^{-23}$, $K_1 = 1.430 \times 10^{23}$, $K_2$ = 0.498, K = 1.013 ✓.

4. **Phase rule check:** π = 3 (two solids, gas), N = 3, r = 1 ⇒ F = 2 − 3 + 3 − 1 = 1. Fixing P fixes T, so a definite decomposition temperature exists (like a boiling point).

**Result:** T ≈ 1152 K (about 879 °C); the measured value is about 1170 K (898 °C).`,
        answer: String.raw`K = P_CO₂/P° = 1.013 (solids at unit activity); ΔH°₂₉₈ = 178.3 kJ/mol, ΔG°₂₉₈ = 130.4 kJ/mol ⇒ K₀K₁K₂ = 1.013 at T ≈ 1152 K (879 °C).` } ] },
    { id: "practice-reaction-equilibria-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P17", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Ammonium chloride decomposition: temperature for a decomposition pressure of 1.5 bar", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.23 (p. 503)`,
        text: String.raw`Ammonium chloride [NH₄Cl(s)] decomposes upon heating to yield a gas mixture of ammonia and hydrochloric acid. At what temperature does ammonium chloride exert a decomposition pressure of 1.5 bar? For NH₄Cl(s), $\Delta H^\circ_{f298}$ = −314 430 J mol⁻¹ and $\Delta G^\circ_{f298}$ = −202 870 J mol⁻¹.`,
        solution: String.raw`Data are from SVNA 6th ed. (SI) Appendix C: Table C.4 (pp. 637–638, $\Delta H^\circ_{f298}$, $\Delta G^\circ_{f298}$ in J/mol), Table C.1 (p. 635, ideal-gas $C_P/R = A + BT + CT^2 + DT^{-2}$) and Table C.2 (p. 636, solids). K is evaluated as $K = K_0K_1K_2$ (SVNA eq. 13.21), with
$$K_0 = \exp\frac{-\Delta G_0^\circ}{RT_0},\quad K_1 = \exp\left[\frac{\Delta H_0^\circ}{RT_0}\left(1 - \frac{T_0}{T}\right)\right],\quad K_2 = \exp\left(-\frac1T\int_{T_0}^T\frac{\Delta C_P^\circ}{R}dT + \int_{T_0}^T\frac{\Delta C_P^\circ}{R}\frac{dT}{T}\right)$$

**Reaction:** NH₄Cl(s) → NH₃(g) + HCl(g). $C_P/R$: NH₄Cl(s) (5.939, 16.105×10⁻³; Table C.2, valid to 458 K), NH₃ (3.578, 3.020×10⁻³, D −0.186×10⁵), HCl (3.156, 0.623×10⁻³, 0.151×10⁵).

**Assumptions:** pure solid (activity 1); ideal gases; pure NH₄Cl as the only source, so the gas is equimolar ($y_{NH_3} = y_{HCl}$ = 0.5).

1. **Equilibrium expression:**
$$K = \frac{\hat f_{NH_3}\hat f_{HCl}}{(P^\circ)^2} = y_{NH_3}y_{HCl}\left(\frac{P}{P^\circ}\right)^2 = 0.25 \times 1.5^2 = 0.5625$$

2. **Standard changes:** $\Delta H_0^\circ$ = −46 110 − 92 307 + 314 430 = 176 013 J/mol; $\Delta G_0^\circ$ = −16 450 − 95 299 + 202 870 = 91 121 J/mol; ΔA = 0.795, ΔB = −12.462×10⁻³, ΔD = −0.035×10⁵.

3. **Solve K(T) = 0.5625:** T = 624 K, where $K_0 = 1.085 \times 10^{-16}$, $K_1 = 1.267 \times 10^{16}$, $K_2$ = 0.409, K = 0.5625 ✓. (The solid's $C_P$ equation is used beyond its 458 K limit; ΔH° is large, so the error is small.)

4. **Phase rule:** π = 2, N = 3, r = 1, and the special constraint $y_{NH_3} = y_{HCl}$ (s = 1): F = 2 − 2 + 3 − 1 − 1 = 1, so P fixes T.

**Result:** T ≈ 624 K (about 351 °C).`,
        answer: String.raw`K = y_NH₃y_HCl(P/P°)² = 0.25(1.5)² = 0.5625; ΔH°₂₉₈ = 176.0 kJ/mol, ΔG°₂₉₈ = 91.1 kJ/mol ⇒ T ≈ 624 K.` } ] },
    { id: "practice-reaction-equilibria-P18", q: 18, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P18", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Independent reactions and degrees of freedom: NH₃, NO, NO₂, O₂, H₂O gas system", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 13.24 (p. 503)`,
        text: String.raw`A chemically reactive system contains the following species in the gas phase: NH₃, NO, NO₂, O₂ and H₂O. Determine a complete set of independent reactions for this system. How many degrees of freedom does the system have?`,
        solution: String.raw`**Method** (SVNA §13.8): write formation reactions from the elements for each compound, then eliminate the elements that are not present in the system.

1. **Formation reactions:**
$$\tfrac12\mathrm N_2 + \tfrac32\mathrm H_2 \rightarrow \mathrm{NH_3} \quad(1) \qquad \tfrac12\mathrm N_2 + \tfrac12\mathrm O_2 \rightarrow \mathrm{NO} \quad(2)$$
$$\tfrac12\mathrm N_2 + \mathrm O_2 \rightarrow \mathrm{NO_2} \quad(3) \qquad \mathrm H_2 + \tfrac12\mathrm O_2 \rightarrow \mathrm{H_2O} \quad(4)$$
   O₂ is present in the system; N₂ and H₂ are not, so they must be eliminated.

2. **Eliminate H₂** with (4): $\mathrm H_2 = \mathrm{H_2O} - \tfrac12\mathrm O_2$. Substituting in (1):
$$\tfrac12\mathrm N_2 + \tfrac32\mathrm{H_2O} \rightarrow \mathrm{NH_3} + \tfrac34\mathrm O_2 \quad(1')$$

3. **Eliminate N₂** with (1′): $\tfrac12\mathrm N_2 = \mathrm{NH_3} + \tfrac34\mathrm O_2 - \tfrac32\mathrm{H_2O}$. Substituting in (2) and (3), and clearing fractions:
$$\mathrm{4NH_3 + 5O_2 \rightarrow 4NO + 6H_2O}$$
$$\mathrm{4NH_3 + 7O_2 \rightarrow 4NO_2 + 6H_2O}$$
   An equivalent set is $\mathrm{4NH_3 + 5O_2 \rightarrow 4NO + 6H_2O}$ and $\mathrm{2NO + O_2 \rightarrow 2NO_2}$. So **r = 2**. Check: 5 species built from 3 elements (N, H, O), all independent, give r = N − (number of elements) = 5 − 3 = 2.

4. **Degrees of freedom** (one gas phase, π = 1; N = 5):
$$F = 2 - \pi + N - r = 2 - 1 + 5 - 2 = 4$$
   For example T, P and two mole fractions (or element ratios) can be fixed independently.`,
        answer: String.raw`Eliminating N₂ and H₂ from the formation reactions gives r = 2, e.g. 4NH₃ + 5O₂ → 4NO + 6H₂O and 2NO + O₂ → 2NO₂ (= N − elements = 5 − 3). F = 2 − π + N − r = 2 − 1 + 5 − 2 = 4.` } ] },
    { id: "practice-reaction-equilibria-P19", q: 19, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P19", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Liquid-phase esterification with K = 4: equilibrium conversion for 1:1 and 1:2 acid:alcohol", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (liquid-phase reactions, Kirtania Part 1 slides 22–26; SVNA §13.8)`,
        text: String.raw`Acetic acid reacts with ethanol in the liquid phase at 100 °C:

$$\mathrm{CH_3COOH(l) + C_2H_5OH(l) \rightleftharpoons CH_3COOC_2H_5(l) + H_2O(l)}, \qquad K = 4.0$$

(a) State the assumptions under which $\prod_i x_i^{\nu_i} = K$, and show that pressure and the total number of moles do not affect this equilibrium.

(b) Find the equilibrium conversion of acetic acid for an equimolar feed.

(c) Find the conversion when 2 mol ethanol are fed per mol of acid. Comment on the result.`,
        solution: String.raw`1. **(a) Working equation.** For liquids with pure-liquid standard states, $\prod(x_i\gamma_i)^{\nu_i} = K\exp[(P^\circ - P)\sum\nu_iV_i/RT]$. Assume (i) moderate pressure, so the Poynting-type exponential ≈ 1 ($\sum\nu_iV_i$ is only a few cm³/mol here); (ii) ideal solution, $\gamma_i = 1$. Then $\prod x_i^{\nu_i} = K$. Since $\nu = 1 + 1 - 1 - 1 = 0$, $x_i = n_i/n$ and n cancels, and P does not appear: neither pressure nor an inert solvent shifts this equilibrium.

2. **(b) Equimolar feed** (1 mol each; extent ε):
$$\frac{x_{ester}\,x_{H_2O}}{x_{acid}\,x_{EtOH}} = \frac{\varepsilon^2}{(1 - \varepsilon)^2} = 4 \;\Rightarrow\; \frac{\varepsilon}{1 - \varepsilon} = 2 \;\Rightarrow\; \varepsilon = 0.667$$
   Conversion of acid = 66.7%; $x_{ester} = x_{H_2O}$ = 0.333, $x_{acid} = x_{EtOH}$ = 0.167.

3. **(c) 2 mol ethanol per mol acid:**
$$\frac{\varepsilon^2}{(1 - \varepsilon)(2 - \varepsilon)} = 4 \;\Rightarrow\; 3\varepsilon^2 - 12\varepsilon + 8 = 0 \;\Rightarrow\; \varepsilon = \frac{12 - \sqrt{144 - 96}}{6} = 0.845$$
   Conversion of acid = 84.5% (the other root, 3.15, is impossible).

4. **Comment.** Excess of the cheaper reactant pushes the reaction forward (Le Chatelier), as does removing water or ester as it forms (reactive distillation). The real system is not ideal ($\gamma_i \ne 1$, especially for water), so in practice $K_x = \prod x_i^{\nu_i}$ differs from K by $\prod\gamma_i^{-\nu_i}$.

**Result:** (b) 66.7%; (c) 84.5% conversion of acetic acid.`,
        answer: String.raw`Ideal solution + Poynting ≈ 1: Πxᵢ^νᵢ = K; ν = 0 so P and n cancel. (b) ε²/(1 − ε)² = 4 ⇒ ε = 0.667; (c) ε²/[(1 − ε)(2 − ε)] = 4 ⇒ 3ε² − 12ε + 8 = 0 ⇒ ε = 0.845.` } ] },
    { id: "practice-reaction-equilibria-P20", q: 20, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P20", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Gibbs-energy minimization: partial oxidation of CH₄ with ½ O₂ at 1200 K and 1 bar", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (Gibbs minimization, Kirtania Part 2 slides 19–29; ΔG°f at 1200 K computed from SVNA App. C)`,
        text: String.raw`Methane is partially oxidized with oxygen (1 mol CH₄ : 0.5 mol O₂) at 1200 K and 1 bar. The gas may contain CH₄, O₂, CO, CO₂, H₂ and H₂O. At 1200 K, $\Delta G^\circ_f$ = 41 230 (CH₄), −181 380 (H₂O), −217 820 (CO) and −396 250 (CO₂) J/mol.

(a) Write the complete set of equations for the equilibrium composition by Gibbs-energy minimization.

(b) Solve them and comment on the product.`,
        solution: String.raw`**Given:** T = 1200 K, RT = 9977 J/mol; P = 1 bar. Atom totals: $A_C$ = 1, $A_H$ = 4, $A_O$ = 2(0.5) = 1.

**Assumptions:** ideal gases at 1 bar; no solid carbon.

1. **(a) Species equations** $\Delta G^\circ_{f_i}/RT + \ln(n_i/\sum n_i) + \sum_k\lambda_ka_{ik}/RT = 0$:
$$\mathrm{CH_4:}\ \frac{41\,230}{RT} + \ln y_{CH_4} + \frac{\lambda_C + 4\lambda_H}{RT} = 0 \qquad \mathrm{O_2:}\ \ln y_{O_2} + \frac{2\lambda_O}{RT} = 0$$
$$\mathrm{CO:}\ \frac{-217\,820}{RT} + \ln y_{CO} + \frac{\lambda_C + \lambda_O}{RT} = 0 \qquad \mathrm{CO_2:}\ \frac{-396\,250}{RT} + \ln y_{CO_2} + \frac{\lambda_C + 2\lambda_O}{RT} = 0$$
$$\mathrm{H_2:}\ \ln y_{H_2} + \frac{2\lambda_H}{RT} = 0 \qquad \mathrm{H_2O:}\ \frac{-181\,380}{RT} + \ln y_{H_2O} + \frac{2\lambda_H + \lambda_O}{RT} = 0$$
   Atom balances:
$$\mathrm C:\ n_{CH_4} + n_{CO} + n_{CO_2} = 1, \quad \mathrm H:\ 4n_{CH_4} + 2n_{H_2} + 2n_{H_2O} = 4, \quad \mathrm O:\ 2n_{O_2} + n_{CO} + 2n_{CO_2} + n_{H_2O} = 1$$
   Nine equations; unknowns: six $n_i$ and three $\lambda_k$.

2. **(b) Solution** (Newton on $\ln n_i$, $\lambda_k/RT$):

| | CH₄ | O₂ | CO | CO₂ | H₂ | H₂O | Total |
|---|---|---|---|---|---|---|---|
| $n_i$ / mol | 0.0216 | ≈ 0 | 0.9726 | 0.0059 | 1.9412 | 0.0157 | 2.957 |
| $y_i$ | 0.0073 | 1×10⁻²⁰ | 0.3289 | 0.0020 | 0.6565 | 0.0053 | 1 |

   $\lambda_C/RT$ = −0.053, $\lambda_O/RT$ = 23.00, $\lambda_H/RT$ = 0.210. Checks: C 0.0216 + 0.9726 + 0.0059 = 1.000 ✓; O 0.9726 + 0.0117 + 0.0157 = 1.000 ✓; H 0.0862 + 3.8824 + 0.0314 = 4.000 ✓.

3. **Comment.** O₂ is consumed completely ($y_{O_2} = e^{-2(23.00)} \approx 10^{-20}$), so it could have been dropped from the start. The product is nearly pure synthesis gas with H₂/CO ≈ 2.0, ideal for methanol synthesis; 98% of the CH₄ reacts. At 1200 K, CO₂ and H₂O are minor because the reverse shift and reforming are favoured at high T.

**Result:** $y_{CO}$ = 0.329, $y_{H_2}$ = 0.657, $y_{CH_4}$ = 0.007, $y_{H_2O}$ = 0.005, $y_{CO_2}$ = 0.002, O₂ ≈ 0.`,
        answer: String.raw`Six equations ΔG°fᵢ/RT + ln yᵢ + Σλₖaᵢₖ/RT = 0 plus C, H, O balances (A_C = 1, A_H = 4, A_O = 1). Solution: y_CO 0.329, y_H₂ 0.657, y_CH₄ 0.007, y_H₂O 0.005, y_CO₂ 0.002, O₂ ≈ 10⁻²⁰ (syngas H₂/CO ≈ 2).` } ] },
    { id: "practice-reaction-equilibria-P21", q: 21, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P21", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Short conceptual questions on reaction equilibria (catalyst, inerts, ΔG versus ΔG°, solids, high pressure)", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style short questions (format of the compulsory short-question sections in 2018-19 Q5 and 2021-22 Q5)`,
        text: String.raw`Answer briefly, with reasons:

(i) Does a catalyst change the equilibrium conversion?

(ii) For ammonia synthesis (ν = −1), what is the effect of adding argon to the feed at constant total pressure?

(iii) A reaction has ΔG° = +5 kJ/mol at 500 K. Can it proceed from a given initial mixture?

(iv) In CaCO₃(s) ⇌ CaO(s) + CO₂(g), does adding more CaCO₃ change the equilibrium CO₂ pressure?

(v) Why may $\prod y_i^{\nu_i} = (P/P^\circ)^{-\nu}K$ fail at 300 bar, and how is it corrected?`,
        solution: String.raw`1. **(i) No.** A catalyst lowers the activation energy of the forward and reverse reactions equally. It changes the rate of approach to equilibrium, not ΔG° or K, so the equilibrium composition is unchanged. (It can change selectivity among several reactions by speeding one more than others.)

2. **(ii) Lower conversion.** At constant P an inert lowers every partial pressure, which acts like a pressure reduction. Write $\prod y_i^{\nu_i} = n^{-\nu}\prod n_i^{\nu_i}$. With ν = −1 this is $n\prod n_i^{\nu_i} = (P/P^\circ)K$, a fixed number, so a larger n (more inert) forces a smaller $\prod n_i^{\nu_i}$, i.e. a smaller extent. This is why inerts (Ar, CH₄) are purged from ammonia loops. For ν = 0 an inert has no effect; for ν > 0 (e.g. dehydrogenation) it raises conversion (steam dilution).

3. **(iii) Yes.** The criterion for a given mixture is $\Delta G = \Delta G^\circ + RT\ln\prod(\hat f_i/f_i^\circ)^{\nu_i} < 0$, not ΔG° < 0. ΔG° > 0 only means K < 1 (here $K = e^{-5000/(8.314 \times 500)} = 0.30$). Starting from reactants only, $\prod \to 0$ and ΔG → −∞, so the reaction proceeds until $\prod = K$, giving a modest conversion.

4. **(iv) No.** Pure solids have activity 1 regardless of amount, so $K = P_{CO_2}/P^\circ$ fixes $P_{CO_2}$ at each T. The amount of solid only changes how much CO₂ must be produced to reach it (as long as both solids are present). Consistent with F = 1.

5. **(v)** At high pressure the gas mixture is not ideal: $\hat f_i = \hat\phi_iy_iP$ with $\hat\phi_i \ne 1$. The rigorous form is $\prod(\hat\phi_iy_i)^{\nu_i} = (P/P^\circ)^{-\nu}K$. A usual simplification is the Lewis/Randall rule, $\hat\phi_i \approx \phi_i$ (pure-gas value from the generalized correlations at $T_r$, $P_r$), giving $K_\phi\prod y_i^{\nu_i} = (P/P^\circ)^{-\nu}K$. For NH₃ synthesis at 300 bar, $K_\phi < 1$, so the real yield is higher than the ideal-gas estimate.`,
        answer: String.raw`(i) No: a catalyst changes rate, not K. (ii) Inert at constant P lowers conversion for ν < 0. (iii) Yes: ΔG = ΔG° + RT ln Π(f̂/f°)^ν is < 0 initially; ΔG° > 0 just means K < 1 (0.30). (iv) No: solids at unit activity, P_CO₂ fixed by K(T). (v) Non-ideal gas: use Π(φ̂ᵢyᵢ)^νᵢ = (P/P°)^−νK, e.g. Lewis/Randall φ̂ᵢ ≈ φᵢ.` } ] },
    { id: "practice-reaction-equilibria-P22", q: 22, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P22", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Direct-methanol fuel cell at 25 °C: reversible emf and maximum efficiency, liquid and vapour", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (fuel cells, Kirtania Part 2 slides 30–40; SVNA §13.10, which gives the anode reaction CH₃OH + H₂O → 6H⁺ + 6e⁻ + CO₂)`,
        text: String.raw`In a proton-exchange-membrane direct-methanol fuel cell, methanol reacts at the anode (CH₃OH + H₂O → 6H⁺ + 6e⁻ + CO₂) and oxygen forms water at the cathode. The overall reaction is CH₃OH + 3/2 O₂ → CO₂ + 2H₂O.

(a) Find the reversible emf and the maximum efficiency (W/ΔH) at 25 °C when methanol and water are liquids.

(b) Repeat for methanol and water as vapours (ideal gases at 1 bar).

(c) Why can the "efficiency" in (b) exceed 100%?`,
        solution: String.raw`**Data** (SVNA Table C.4, J/mol): CH₃OH(l) −238 660 / −166 270; CH₃OH(g) −200 660 / −161 960; CO₂ −393 509 / −394 359; H₂O(l) −285 830 / −237 129; H₂O(g) −241 818 / −228 572 ($\Delta H^\circ_f$ / $\Delta G^\circ_f$). Electrons per CH₃OH: 6 (C goes from −2 to +4). F = 96 485 C/mol.

**Assumptions:** reversible isothermal operation at 25 °C, pure species at 1 bar.

1. **Relations:** $W_{elect} = \Delta G = -nFE$, so $E = -\Delta G/(6F)$; heat to surroundings $Q = \Delta H - \Delta G$; $\eta_{max} = \Delta G/\Delta H$.

2. **(a) Liquids:**
$$\Delta G = -394\,359 + 2(-237\,129) - (-166\,270) = -702\,347\ \mathrm{J/mol}, \qquad \Delta H = -393\,509 + 2(-285\,830) + 238\,660 = -726\,509\ \mathrm{J/mol}$$
$$E = \frac{702\,347}{6 \times 96\,485} = 1.213\ \mathrm V, \qquad \eta_{max} = \frac{702\,347}{726\,509} = 0.967, \qquad Q = -24\,162\ \mathrm{J/mol}$$

3. **(b) Vapours:**
$$\Delta G = -394\,359 + 2(-228\,572) + 161\,960 = -689\,543\ \mathrm{J/mol}, \qquad \Delta H = -393\,509 + 2(-241\,818) + 200\,660 = -676\,485\ \mathrm{J/mol}$$
$$E = 1.191\ \mathrm V, \qquad \eta_{max} = \frac{689\,543}{676\,485} = 1.019, \qquad Q = +13\,058\ \mathrm{J/mol}$$

4. **(c) Explanation.** $W = \Delta G = \Delta H - T\Delta S$. In (b), 2.5 mol of gas (CH₃OH + 1.5 O₂) give 3 mol of gas, so ΔS > 0 (ΔS = (ΔH − ΔG)/T = +43.8 J/(mol K)). The reversible cell then **absorbs** heat TΔS = 13.1 kJ/mol from the surroundings and converts it into work too, so W exceeds |ΔH|. This does not violate the second law: the ratio W/ΔH is not a heat-engine efficiency. In (a), ΔS < 0 and the cell rejects heat. Real DMFCs run at only 0.3–0.5 V because of slow methanol oxidation and methanol crossover.

**Result:** (a) E = 1.213 V, η_max = 96.7%; (b) E = 1.191 V, η_max = 101.9% (heat absorbed, ΔS > 0).`,
        answer: String.raw`E = −ΔG/6F. Liquids: ΔG = −702.3 kJ, ΔH = −726.5 kJ ⇒ E = 1.213 V, η = 96.7%. Vapours: ΔG = −689.5 kJ, ΔH = −676.5 kJ ⇒ E = 1.191 V, η = 101.9%, possible because ΔS > 0 and the cell absorbs TΔS from the surroundings.` } ] },
    { id: "practice-reaction-equilibria-P23", q: 23, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-reaction-equilibria-P23", label: "", marks: "", topic: "reaction-equilibria",
        sub: "Phase rule for reacting systems: four systems with special constraints", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (phase rule for reacting systems, Kirtania Part 2 slides 2–3; SVNA §13.8)`,
        text: String.raw`Using F = 2 − π + N − r − s (s = special constraints), find the degrees of freedom of:

(a) C(s), O₂, CO and CO₂ in chemical equilibrium;

(b) NH₄Cl(s) partially decomposed into NH₃(g) and HCl(g), starting from pure NH₄Cl;

(c) the same as (b) but with extra NH₃ added;

(d) a gas mixture of H₂, O₂ and H₂O at room temperature with no catalyst.`,
        solution: String.raw`1. **(a)** Species N = 4; phases π = 2 (graphite + gas). Independent reactions: formation reactions C + O₂ → CO₂ and C + ½O₂ → CO; C and O₂ are both present, so r = 2 (equivalently N − elements = 4 − 2 = 2). F = 2 − 2 + 4 − 2 = **2** (e.g. T and P fix the gas composition).

2. **(b)** N = 3, π = 2, r = 1 (NH₄Cl → NH₃ + HCl). Starting from pure NH₄Cl, the gas is equimolar: special constraint $y_{NH_3} = y_{HCl}$, s = 1. F = 2 − 2 + 3 − 1 − 1 = **1**: the decomposition pressure is a function of T only (as in SVNA Pb. 13.23).

3. **(c)** With extra NH₃ the constraint is lost (s = 0): F = 2 − 2 + 3 − 1 = **2**. Now T and P (or T and the NH₃ excess) must both be set; the HCl partial pressure falls as NH₃ is added (common-ion-type effect of K = $y_{NH_3}y_{HCl}(P/P^\circ)^2$).

4. **(d)** At room temperature without a catalyst H₂ + ½O₂ → H₂O does not proceed at a measurable rate, so it is not an equilibrium reaction: r = 0. One gas phase, N = 3: F = 2 − 1 + 3 − 0 = **4**. (If a catalyst brought it to equilibrium, r = 1 and F = 3; the phase rule counts only reactions that actually reach equilibrium.)`,
        answer: String.raw`(a) N = 4, π = 2, r = 2 ⇒ F = 2. (b) N = 3, π = 2, r = 1, s = 1 (y_NH₃ = y_HCl) ⇒ F = 1. (c) s = 0 ⇒ F = 2. (d) no reaction at equilibrium (r = 0), π = 1, N = 3 ⇒ F = 4.` } ] }
  ]
});
