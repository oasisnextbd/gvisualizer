QB.paper({ year: "Practice", set: "Washing & leaching", date: "", marks: 0, practice: true,
  rules: String.raw`Washing (y = x, constant underflow) and leaching (effective equilibrium constant, Kremser, McCabe–Thiele, and variable-flow leaching on a triangular diagram). Slide problems first, then every starred Wankat 3e Chapter 14 problem, then exam-style practice problems.`,
  questions: [
    { id: "practice-leaching-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-leaching-P1a", label: "", marks: "", topic: "leaching",
        sub: "Countercurrent washing recovery by Kremser (lime–soda NaOH)", type: "numerical", syllabus: "in", repeats: ["2016-17-Q8b", "2018-19-Q2a"],
        origin: "slides", ref: String.raw`Slides: Washing and Leaching, p. 9 (Example 14-1; Wankat 3e Example 14-1)`,
        text: String.raw`In the lime–soda process a slurry of CaCO₃ particles in dilute NaOH solution is washed in a four-stage countercurrent system. The underflow carries about 3 kg liquid per kg dry CaCO₃, the wash water is pure, and 8 kg wash water per kg dry CaCO₃ is used. Predict the fraction of NaOH recovered in the wash liquor.`,
        solution: String.raw`**Given (basis 1 kg/h dry CaCO₃):** U = 3 kg/h underflow liquid, O = 8 kg/h overflow, N = 4, $y_{N+1}$ = 0.
**Find:** recovery = $1 - x_N/x_0$ (the inlet concentration $x_0$ is not needed).
**Assumptions:** constant U and O (no solids in the overflow, solids do not dissolve, constant densities, constant entrainment), equilibrium stages with y = x (solute concentration equal in the underflow and overflow liquids), so the Kremser equation applies with m = 1.

1. Washing factor $mO/U = 1(8)/3 = 8/3$; $x_N^* = y_{N+1}/m = 0$.
2. Kremser:
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - mO/U}{1 - (mO/U)^{N+1}} = \frac{1 - 8/3}{1 - (8/3)^5} = \frac{-1.667}{-132.85} = 0.01245$$
3. Recovery $= 1 - 0.01245 = 0.9875$, i.e. 98.75 % of the NaOH leaves in the wash liquor.
4. McCabe–Thiele check (x scaled by $x_0$): operating line of slope U/O = 0.375 through $(x_N, 0)$; the staircase gives x/x₀ = 0.370, 0.134, 0.046, 0.0125 in exactly four stages.

![Washing McCabe–Thiele diagram: y = x and operating slope 3/8](fig/practice-leaching-P1-sol.svg)

**Slide answer:** 0.98755 ✓.`,
        answer: String.raw`$x_N/x_0$ = 0.01245; NaOH recovery = 98.75 %.` } ] },

    { id: "practice-leaching-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-leaching-P2a", label: "", marks: "", topic: "leaching",
        sub: "Washing salt from beach sand: countercurrent stages and cross-flow outlet", type: "numerical", syllabus: "in", repeats: ["2023-24-Q7a"],
        origin: "slides", ref: String.raw`Slides: Washing and Leaching, pp. 10–11 (Problem D2); Wankat 3e, Problem 14.D2*`,
        text: String.raw`Wet beach sand for a glass factory carries 40 % by volume of seawater (0.035 wt frac salt) between the grains. Densities: water 1.0 g/cm³ (constant), dry sand 1.8 g/cm³ including air, sand without air 3.0 g/cm³.
a. The water entrained in the product must contain 0.002 wt frac salt. With 0.5 kg of pure wash water per 1000 cm³ of wet sand fed, how many countercurrent stages are needed, and what is the outlet wash-water concentration?
b. In a seven-stage cross-flow process with 0.2 kg of pure wash water to each stage per 1000 cm³ of wet sand, what is the outlet salt concentration of the entrained water?`,
        solution: String.raw`**Basis:** 1000 cm³ of wet sand fed. Entrained liquid = 400 cm³ ≈ U = 0.4 kg (density 1.0 g/cm³), constant from stage to stage (same 40 vol % carried out of every settler). The sand densities are not needed because the basis is a volume of wet sand.
**Assumptions:** washing equilibrium y = x; constant U and O; pure wash water ($y_{N+1}$ = 0); equilibrium stages.

**(a) Countercurrent**, O = 0.5 kg.
1. Overall salt balance $Ux_0 + Oy_{N+1} = Ux_N + Oy_1$:
$$y_1 = \frac{0.4(0.035 - 0.002)}{0.5} = 0.0264$$
2. Operating line $y_{j+1} = (U/O)x_j + (y_{N+1} - (U/O)x_N)$, slope U/O = 0.8, through (0.002, 0) and (0.035, 0.0264).
3. Kremser with m = 1, A = O/U = 1.25:
$$\frac{x_N}{x_0} = \frac{0.002}{0.035} = 0.05714 = \frac{1 - 1.25}{1 - 1.25^{N+1}} \Rightarrow 1.25^{N+1} = 5.375 \Rightarrow N = 6.54$$
4. McCabe–Thiele stepping from (0.035, 0.0264): x = 0.0264, 0.0195, 0.0140, 0.0096, 0.0061, 0.0033, 0.0010 → the 7th stage passes 0.002 (fraction 0.56): N ≈ 6.6.

![Countercurrent washing of sand: 6.5 stages](fig/practice-leaching-P2-sol.svg)

**(b) Cross-flow**, O = 0.2 kg per stage, pure water each stage.
1. Stage j: $Ux_{j-1} + O(0) = Ux_j + Oy_j$ with $y_j = x_j$ → $x_j = \frac{U}{U + O}x_{j-1} = \frac{2}{3}x_{j-1}$ (stage operating line slope −U/O = −2).
2. $x_7 = 0.035(2/3)^7 = 0.00205$.

![Seven cross-flow washing stages](fig/practice-leaching-P2-sol2.svg)

Note: cross-flow uses 7(0.2) = 1.4 kg of water and still only reaches 0.00205, while countercurrent reaches 0.002 with 0.5 kg.

**Book/slide answer:** (a) 6 2/3 equilibrium stages, $y_{out}$ = 0.0264 ✓; (b) $x_{out}$ = 0.002 ✓.`,
        answer: String.raw`(a) N ≈ 6.5–6.7 → 7 stages; wash water leaves at 0.0264 wt frac salt. (b) $x_7$ = 0.00205 wt frac.` } ] },

    { id: "practice-leaching-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-leaching-P3a", label: "", marks: "", topic: "leaching",
        sub: "Washing with two solid feeds: underflow from porosity, optimum feed stage", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides: Washing and Leaching, pp. 12–13 (Problem D3); Wankat 3e, Problem 14.D4*`,
        text: String.raw`Alumina solids are washed countercurrently to remove NaOH from the entrained liquid. The settler underflow is 20 vol % solid and 80 vol % liquid, as are both solid feeds. Feed 1: 1000 kg/h dry solids, liquid 5 wt % NaOH. Feed 2: 2000 kg/h dry solids, liquid 2 wt % NaOH. The final underflow liquid must be 0.6 wt % NaOH; the wash water is pure, 4000 kg/h. Data: water 1.0 kg/L (constant), alumina 2.5 kg/L. Find the optimum location of feed 2 and the number of equilibrium stages.`,
        solution: String.raw`**Assumptions:** washing equilibrium y = x; constant solids and porosity, constant liquid density, so U and O are constant within each section; equilibrium stages. Stage 1 is the end where the 5 % feed enters and the overflow leaves.

1. **Underflow liquid** (porosity ε = 0.8, ε/(1 − ε) = 4):
$$U = (\text{dry solids})\frac{\varepsilon}{1 - \varepsilon}\frac{\rho_f}{\rho_s}$$
$$U_{F1} = 1000(4)\frac{1.0}{2.5} = 1600\ \mathrm{kg/h},\qquad U_{F2} = 2000(4)(0.4) = 3200\ \mathrm{kg/h},\qquad U_T = 4800\ \mathrm{kg/h}$$
O = 4000 kg/h everywhere (the liquid carried in by each feed leaves with its solids).
2. **Overall NaOH balance:** $1600(0.05) + 3200(0.02) = 4800(0.006) + 4000y_1$ → $y_1 = (80 + 64 - 28.8)/4000 = 0.0288$.
3. **Operating lines:**
   - section 1 (between feed 1 and feed 2): slope $U_{F1}/O = 0.4$, through $(x_0, y_1) = (0.05, 0.0288)$: $y_{j+1} = 0.4x_j + 0.0088$;
   - section 2 (below feed 2): slope $U_T/O = 1.2$, through $(x_N, y_{N+1}) = (0.006, 0)$: $y_{j+1} = 1.2(x_j - 0.006)$.
   They intersect on the feed line x = 0.02 (y = 0.0168), confirming the balances.
4. **Stepping** (y = x, so each horizontal step gives $x_j = y_j$), switching lines once x drops below 0.02:

| Stage | $x_j = y_j$ | next y from |
|---|---|---|
| 1 | 0.0288 | section 1 |
| 2 | 0.0203 | section 1 (still > 0.02) |
| 3 | 0.0169 | section 2: feed 2 enters stage 3 |
| 4 | 0.0131 | section 2 |
| 5 | 0.0085 | section 2 |
| 6 | 0.0030 | — |

Fraction of stage 6 = (0.0085 − 0.006)/(0.0085 − 0.0030) = 0.46 → N = 5.46.

![Two-feed washing McCabe–Thiele: feed line x = 0.02, 5.5 stages](fig/practice-leaching-P3-sol.svg)

**Result:** N ≈ 5.5 → 6 stages; feed 2 to stage 3 counted from the 5 % feed end, i.e. the 4th stage counted from the wash-water end of a 6-stage cascade.

**Slide/book answer:** 5.4 equilibrium stages, optimum feed is the 4th (the slide numbers stages from the wash-water end) ✓.`,
        answer: String.raw`U_F1 = 1600, U_F2 = 3200 kg/h; $y_1$ = 0.0288; N ≈ 5.5 (book 5.4); feed 2 at the 4th stage from the wash-water end (3rd from the 5 % feed end).` } ] },

    { id: "practice-leaching-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-leaching-P4a", label: "", marks: "", topic: "leaching",
        sub: "Sugar from cane with an effective equilibrium constant (Kremser)", type: "numerical", syllabus: "in", repeats: ["2017-18-Q2c", "2021-22-Q4b"],
        origin: "slides", ref: String.raw`Slides: Washing and Leaching, p. 19 (Problem D7); Wankat 3e, Problem 14.D8*`,
        text: String.raw`Sugar is leached from sugar cane with water in an 11-stage countercurrent Rotocel. On a volumetric basis liquid flow/solid flow = 0.95. The effective equilibrium constant is $m_E$ = 1.18 [(g/L in liquid)/(g/L in solid)]. With pure water as solvent, predict the sugar recovery.`,
        solution: String.raw`**Assumptions:** constant volumetric flows of solid ($F_{solid}$) and solvent ($F_{solv}$); effective linear equilibrium y = $m_E$x in concentration units (it lumps entrainment and non-equilibrium stages, valid for these conditions only); pure solvent so $x_N^* = y_{N+1}/m = 0$. Then the Kremser equation applies.

1. Leaching factor $m_EF_{solv}/F_{solid} = 1.18(0.95) = 1.121$, N = 11.
2. Kremser:
$$\frac{x_N}{x_0} = \frac{1 - 1.121}{1 - 1.121^{12}} = \frac{-0.121}{-2.94} = 0.0412$$
3. Recovery $= 1 - x_N/x_0 = 0.959$.

**Book/slide answer:** recovery = 95.9 % ✓.`,
        answer: String.raw`Leaching factor 1.121; $x_N/x_0$ = 0.041; sugar recovery ≈ 95.9 %.` } ] },

    { id: "practice-leaching-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-leaching-P5a", label: "", marks: "", topic: "leaching",
        sub: "Back-calculating the effective equilibrium constant (soybean oil)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides: Washing and Leaching, p. 20 (Problem D10); Wankat 3e, Problem 14.D12*`,
        text: String.raw`A five-stage countercurrent leaching system recovers 97.5 % of the oil entering with soybean solids, using pure solvent. Volumetric liquid flow/solids flow = 1.36. Find the effective equilibrium constant $m_E$ (kg/m³ in solvent per kg/m³ in solid, y = $m_E$x).`,
        solution: String.raw`**Assumptions:** as in Problem 4 (constant volumetric flows, linear effective equilibrium, pure solvent).

1. $x_N/x_0 = 1 - 0.975 = 0.025$, $x_N^*$ = 0, N = 5, $F_{solv}/F_{solid}$ = 1.36.
2. Kremser:
$$0.025 = \frac{1 - 1.36m}{1 - (1.36m)^6}$$
which rearranges to $0.025(1.36m)^6 - 1.36m + 0.975 = 0$, i.e. $0.1582m^6 - 1.36m + 0.975 = 0$.
3. Root with 1.36m > 1 (bisection): m = 1.313 (leaching factor 1.786).
4. Check: $(1 - 1.786)/(1 - 1.786^6) = 0.02500$ ✓.

**Book/slide answer:** $m_E$ = 1.313 ✓.`,
        answer: String.raw`$m_E$ ≈ 1.31 (leaching factor 1.79).` } ] },

    { id: "practice-leaching-P6", q: 6, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-leaching-P6a", label: "", marks: "", topic: "leaching",
        sub: "Cross-flow washing with partial reuse of wash water (minimum number of stages)", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 14.D7*`,
        text: String.raw`The beach sand of Problem 2 (40 vol % entrained seawater, 0.035 wt frac salt) is washed in a cross-flow cascade with 0.2 kg of wash water per stage per 1000 cm³ of wet sand. Stages 4 to N receive pure water. The overflow from stage N is used as the wash water for stage 3, from stage N − 1 for stage 2, and from stage N − 2 for stage 1 (figure). The entrained liquid leaving stage N must be below 0.002 wt frac salt. What is the minimum number of stages? (Not trial and error.)

![Cross-flow washing with reuse of the last three overflows](fig/practice-leaching-P6.svg)`,
        solution: String.raw`**Basis:** 1000 cm³ wet sand: U = 0.4 kg entrained liquid, O = 0.2 kg per stage.
**Assumptions:** washing equilibrium (overflow concentration = underflow concentration on each stage), constant U and O, equilibrium stages.

1. Stage balance: $Ux_{j-1} + Oy_{in,j} = (U + O)x_j$, so with $r = U/(U + O) = 2/3$ and $q = O/(U + O) = 1/3$:
$$x_j = r\,x_{j-1} + q\,y_{in,j}$$
2. Stages 4 … N get pure water: $x_j = r^{j-3}x_3$.
3. Stages 1–3 get the overflows (equal to the stage concentrations) of stages N − 2, N − 1, N:
$$x_1 = rx_0 + qr^{N-5}x_3,\quad x_2 = rx_1 + qr^{N-4}x_3,\quad x_3 = rx_2 + qr^{N-3}x_3$$
Substituting in turn: $x_3 = r^3x_0 + 3qr^{N-3}x_3 = r^3x_0 + r^{N-3}x_3$ (since 3q = 1), so
$$x_3 = \frac{r^3x_0}{1 - r^{N-3}},\qquad x_N = r^{N-3}x_3 = \frac{x_0r^N}{1 - r^{N-3}}$$
This is explicit in N: no trial and error.
4. Evaluate:

| N | 6 | 7 | 8 | 9 |
|---|---|---|---|---|
| $x_N$ | 0.00437 | 0.00255 | 0.00157 | 0.00100 |

5. N = 7 gives 0.00255 > 0.002; N = 8 gives 0.00157 < 0.002.

**Result:** minimum 8 stages. (For N = 8: $x_1$ = 0.0245, $x_2$ = 0.0171, $x_3$ = 0.0119.)

**Book answer:** need 8 equilibrium stages ✓.`,
        answer: String.raw`$x_N = x_0r^N/(1 - r^{N-3})$ with r = 2/3; N = 7 → 0.00255, N = 8 → 0.00157: minimum 8 stages.` } ] },

    { id: "practice-leaching-P7", q: 7, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-leaching-P7a", label: "", marks: "", topic: "leaching",
        sub: "Countercurrent slurry sorbent for CH₄/H₂ (McCabe–Thiele in mass ratios)", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 14.D10*`,
        text: String.raw`A countercurrent slurry-adsorbent system removes methane from hydrogen at 5 °C, where (wt frac CH₄ in gas) = 1.2 × (wt frac CH₄ in slurry); no hydrogen dissolves and the heat of sorption is negligible. The gas feed contains 100 lb/h H₂ and 30 lb/h CH₄; the outlet gas must be 0.05 wt frac CH₄. The entering slurry (120 lb/h) contains no methane. Find the number of equilibrium stages and the mass fraction of methane in the slurry leaving.`,
        solution: String.raw`> Slurry sorption is not a slide topic, but it is solved exactly like a concentrated absorber or leaching McCabe–Thiele problem in ratio units.

**Given:** carrier gas G = 100 lb/h H₂; slurry (methane-free) L = 120 lb/h. $Y_{N+1} = 30/100 = 0.30$ lb CH₄/lb H₂; outlet gas $y_1$ = 0.05 → $Y_1 = 0.05/0.95 = 0.0526$; $X_0$ = 0.
**Assumptions:** H₂ insoluble and slurry non-volatile (constant G and L), isothermal, equilibrium stages; concentrated, so mass ratios are used.

1. Balance: $X_N = G(Y_{N+1} - Y_1)/L = 100(0.30 - 0.0526)/120 = 0.2061$ lb CH₄/lb slurry → mass fraction $x_N = 0.2061/1.2061 = 0.171$.
2. Operating line (absorber-type, gas in at stage N): $Y_{j+1} = (L/G)X_j + Y_1 = 1.2X_j + 0.0526$, from (0, 0.0526) to (0.206, 0.30).
3. Equilibrium in ratios: $x = X/(1 + X)$, $y = 1.2x$, $Y = y/(1 - y)$.
4. Step from the gas-outlet end: Y → X (equilibrium) → next Y (operating line):

| Stage | Y | X (eq.) |
|---|---|---|
| 1 | 0.0526 | 0.0435 |
| 2 | 0.1048 | 0.0858 |
| 3 | 0.1556 | 0.1264 |
| 4 | 0.2043 | 0.1647 |
| 5 | 0.2502 | 0.2002 |
| 6 | 0.2928 | 0.2327 |

$X_N$ = 0.2061 is reached in stage 6: fraction = (0.2061 − 0.2002)/(0.2327 − 0.2002) = 0.18 → N ≈ 5.2.

![Slurry sorption McCabe–Thiele diagram in mass ratios: 5.2 stages](fig/practice-leaching-P7-sol.svg)

**Book answer:** ~5 1/8 equilibrium stages, $x_{out}$ = 0.171 (mass fraction) ✓.`,
        answer: String.raw`N ≈ 5.2 equilibrium stages (→ 6); slurry leaves at X = 0.206, i.e. 0.171 mass fraction CH₄.` } ] },

    { id: "practice-leaching-P8", q: 8, section: "W", compulsory: false, stem: String.raw`Oil (A) is leached from meal (D, inert solid) with benzene (S). Test data (Wankat Table 14-2, Prabhudesai): overflow solution contains no solids; underflow compositions in equilibrium:

| Overflow $y_A$ | Underflow $x_A$ | $x_D$ | $x_S$ |
|---|---|---|---|
| 0 | 0 | 0.670 | 0.333 |
| 0.1 | 0.0336 | 0.664 | 0.302 |
| 0.2 | 0.0682 | 0.660 | 0.272 |
| 0.3 | 0.1039 | 0.6541 | 0.242 |
| 0.4 | 0.1419 | 0.6451 | 0.213 |
| 0.5 | 0.1817 | 0.6366 | 0.1817 |
| 0.6 | 0.224 | 0.6268 | 0.1492 |
| 0.7 | 0.268 | 0.6172 | 0.1148 |

(The book prints the 6th $y_A$ as 0.4; from the trend and the balance it is 0.5.) Wankat Example 14-2: 1000 kg/h (wet basis) of meal with 0.20 wt frac oil and no benzene is treated with 662 kg/h of pure benzene; countercurrent with an underflow product of 0.04 wt frac oil gives an extract of 0.305 wt frac oil in about 2.1 stages.`,
      parts: [ { id: "practice-leaching-P8a", label: "", marks: "", topic: "leaching",
        sub: "Single-stage leaching with variable underflow (triangular diagram)", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 14.D18* (Example 14-2, Table 14-2)`,
        text: String.raw`Repeat Example 14-2 for a single equilibrium stage (same feed and solvent); the underflow product concentration is unknown. Find the extract and raffinate compositions and flow rates.`,
        solution: String.raw`> Variable-flow leaching on a triangular diagram is only mentioned in the slides ("a rigorous analysis … is very similar to partially miscible extraction"); it is solved exactly like single-stage extraction.

**Given:** F = 1000 kg/h at (x_D, x_A) = (0.80, 0.20); S = 662 kg/h pure benzene at (0, 0).
**Assumptions:** one equilibrium stage, no solids in the overflow (extract on the $x_D$ = 0 axis), underflow on the saturated-raffinate curve of Table 14-2.

1. M = 1662 kg/h: $x_{A,M} = 200/1662 = 0.120$, $x_{D,M} = 800/1662 = 0.481$.
2. Tie line through M (interpolated, from (0, $y_A$) to the underflow curve): $y_A$ = 0.232; underflow $x_A$ = 0.079, $x_D$ = 0.658, $x_S$ = 0.262.
3. Flows: all solids leave in the underflow, so R = 800/0.658 = 1216 kg/h and E = 1662 − 1216 = 446 kg/h (oil check: 446(0.232) + 1216(0.0795) = 200 ✓).
4. Oil recovered = 446(0.232)/200 = 52 %.

![Single-stage leaching on the oil–meal–benzene diagram](fig/practice-leaching-P8-sol.svg)

**Book answer:** extract $y_{oil}$ = 0.238, $y_{solid}$ = 0; raffinate $x_{oil}$ = 0.078, $x_{solid}$ = 0.656 ✓ (within reading accuracy).`,
        answer: String.raw`Extract E ≈ 446 kg/h, 0.23–0.24 oil, no solids; underflow R ≈ 1216 kg/h, 0.078–0.079 oil, 0.656–0.658 solids (≈ 52 % recovery).` } ] },

    { id: "practice-leaching-P9", q: 9, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-leaching-P9a", label: "", marks: "", topic: "leaching",
        sub: "Three-stage countercurrent leaching: simulation by trial on x_A,1", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 14.D19* (Example 14-2, Table 14-2 as in Problem 8)`,
        text: String.raw`Repeat Example 14-2 (1000 kg/h meal with 20 % oil, 662 kg/h pure benzene) for a three-stage countercurrent system; the underflow product concentration is unknown. Find the outlet extract and raffinate compositions.`,
        solution: String.raw`**Assumptions:** as in Problem 8; equilibrium stages; stage 1 = solvent-inlet / underflow-outlet end.

1. M is fixed by the feeds: (0.481, 0.120).
2. **Trial on $x_{A,1}$:** for a guess, $R_1$ is on the underflow curve; $E_N$ = line $R_1$M extended to the $x_D$ = 0 axis; flows by lever rule; $\Delta = E_0 - R_1$; step from $R_1$ and count stages. Adjust until N = 3.
3. **Check with Example 14-2** ($x_{A,1}$ = 0.04): $E_N$ = 0.333, N = 2.11 (book: 0.305 and 2.1; the overall balance with $R_1$ = 800/0.663 = 1206 kg/h gives $y_{A,N}$ = (200 − 48.2)/456 = 0.333, so the book's 0.305 is a graph reading).
4. **Converged ($N$ = 3):** $x_{A,1}$ = 0.0245, $x_{D,1}$ = 0.666 ($x_S$ = 0.310); $E_N$: $y_A$ = 0.371; $R_1$ = 1202 kg/h, $E_N$ = 460 kg/h; $\Delta = 662 - 1202 = -540$ kg/h (negative, so Δ is on the right of the diagram) at (1.48, 0.055).

| Stage | $R_j$: $x_D$, $x_A$ | $E_j$: $y_A$ |
|---|---|---|
| 1 | 0.666, 0.0245 | 0.073 |
| 2 | 0.660, 0.065 | 0.190 |
| 3 | 0.648, 0.131 | 0.371 = $E_N$ |

5. Oil recovery = 460(0.371)/200 = 85 % (vs 52 % in one stage and 76 % with 2.1 stages).

![Three countercurrent leaching stages with Δ on the right-hand side](fig/practice-leaching-P9-sol.svg)

**Book answer:** extract $y_{oil}$ = 0.38, $y_{solid}$ = 0; raffinate $x_{oil}$ = 0.026, $x_{solid}$ = 0.66 ✓.`,
        answer: String.raw`Extract ≈ 0.37–0.38 oil (460 kg/h); underflow product ≈ 0.025 oil, 0.666 solids (1202 kg/h); Δ at (1.48, 0.055).` } ] },

    { id: "practice-leaching-P10", q: 10, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-leaching-P10a", label: "", marks: "", topic: "leaching",
        sub: "Three-stage cross-flow leaching on the triangular diagram", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 14.D20* (Example 14-2, Table 14-2 as in Problem 8)`,
        text: String.raw`Repeat Example 14-2 for a three-stage cross-flow system with 421 kg/h of pure benzene added to each stage. Find the extract from each stage and the final underflow.`,
        solution: String.raw`**Assumptions:** each stage is an equilibrium stage; underflow of each stage feeds the next; no solids in any overflow.

For each stage: $M_j = R_{j-1} + 421$; M on the line from the benzene corner S to $R_{j-1}$; tie line through $M_j$; R = 800/$x_D$ (solids balance), E = M − R.

| Stage | $M_j$: $x_D$, $x_A$ | $E_j$: $y_A$, flow | $R_j$: $x_A$, $x_D$, flow |
|---|---|---|---|
| 1 | 0.563, 0.141 | 0.322, 194 kg/h | 0.112, 0.652, 1227 kg/h |
| 2 | 0.486, 0.083 | 0.162, 438 kg/h | 0.055, 0.662, 1209 kg/h |
| 3 | 0.491, 0.041 | 0.080, 428 kg/h | 0.027, 0.665, 1203 kg/h |

Final underflow: $x_{oil}$ = 0.027, $x_{solid}$ = 0.665, $x_{benzene}$ = 0.308. Oil recovered = 1 − 1203(0.0269)/200 = 84 %, but with 1263 kg/h of benzene, almost twice the countercurrent solvent of Problem 9 (85 % with 662 kg/h), and in three dilute extracts.

![Three-stage cross-flow leaching constructions](fig/practice-leaching-P10-sol.svg)

**Book answer:** stage 1 extract $y_{oil}$ = 0.35, stage 2 0.18, stage 3 0.09; stage 3 raffinate $x_{oil}$ = 0.03, $x_{solid}$ = 0.66. Our values are a little lower for the extracts; they satisfy the oil balance exactly on each stage (e.g. stage 1: 200 = 194(0.322) + 1227(0.112)).`,
        answer: String.raw`Extracts: 0.32, 0.16, 0.08 oil (book 0.35, 0.18, 0.09); final underflow 0.027 oil, 0.665 solids; ≈ 84 % recovery using 1263 kg/h benzene.` } ] },

    { id: "practice-leaching-P11", q: 11, section: "F", compulsory: false, stem: String.raw`A countercurrent washing system processes 5000 kg/h (dry basis) of crushed ore whose pores hold a CuSO₄ solution of 3 wt %. After settling, the solids have a porosity ε = 0.45. Solid density 2600 kg/m³; the liquid density may be taken as constant at 1000 kg/m³. Pure wash water is fed at 6000 kg/h.`,
      parts: [ { id: "practice-leaching-P11a", label: "(a)", marks: "8", topic: "leaching",
        sub: "Underflow liquid rate from porosity", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`Calculate the underflow liquid flow rate U, stating the assumptions that make U and the overflow O constant from stage to stage.`,
        solution: String.raw`1. Volume of dry solids = 5000/2600 = 1.923 m³/h. Since $1 - \varepsilon$ = volume solids/total volume, the total underflow volume is 1.923/0.55 = 3.497 m³/h and its liquid volume is 0.45(3.497) = 1.573 m³/h.
2. In one formula:
$$U = (\text{rate dry solids})\frac{\varepsilon}{1 - \varepsilon}\frac{\rho_f}{\rho_s} = 5000\frac{0.45}{0.55}\frac{1000}{2600} = 1573\ \mathrm{kg/h}$$
3. U (and hence O, from the overall balance) is constant if: no solids in the overflow and solids do not dissolve (constant solids rate); constant $\rho_f$ and $\rho_s$ (dilute solution); constant porosity (same liquid volume entrained from every settler).`,
        answer: String.raw`U = 1573 kg/h of underflow liquid; constant U and O require constant solids rate, densities and porosity.` },
      { id: "practice-leaching-P11b", label: "(b)", marks: "17", topic: "leaching",
        sub: "Stages for 99 % recovery: Kremser and McCabe–Thiele", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`How many equilibrium stages are needed to recover 99 % of the CuSO₄ in the wash liquor? What is the wash-liquor concentration? Check with a McCabe–Thiele diagram and give the recovery with the next whole number of stages.`,
        solution: String.raw`**Assumptions:** washing equilibrium y = x (m = 1), constant U = 1573 and O = 6000 kg/h, pure water, equilibrium stages.

1. $x_0$ = 0.03, $x_N$ = 0.01(0.03) = 0.0003; washing factor A = mO/U = 6000/1573 = 3.813.
2. Kremser:
$$N = \frac{\ln[(1 - 1/A)(x_0/x_N) + 1/A]}{\ln A} = \frac{\ln[(0.7378)(100) + 0.2622]}{\ln 3.813} = \frac{\ln 74.04}{1.3384} = 3.22$$
3. Wash liquor: $y_1 = U(x_0 - x_N)/O = 1573(0.0297)/6000 = 0.00779$.
4. McCabe–Thiele (y = x; operating slope U/O = 0.262 through (0.0003, 0)): x = 0.00779, 0.00196, 0.00044, 0.00004 → the 4th stage passes 0.0003 (fraction 0.34): N ≈ 3.3 (the graphical fraction is defined differently from the Kremser one, hence 3.3 vs 3.2).

![Countercurrent CuSO4 washing: 3.3 stages](fig/practice-leaching-P11-sol.svg)

5. With 4 stages: $x_N/x_0 = (1 - A)/(1 - A^5) = 0.00349$ → 99.65 % recovery.`,
        answer: String.raw`N ≈ 3.2 (Kremser) / 3.3 (graph) → 4 stages (99.65 % recovery); wash liquor 0.0078 wt frac CuSO₄.` },
      { id: "practice-leaching-P11c", label: "(c)", marks: "10", topic: "leaching",
        sub: "Effect of a less efficient settler (higher porosity)", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`If poor settling raises the underflow porosity to 0.55 with the same 4 stages and wash water, what recovery is obtained? Explain where the solids rate appears on the McCabe–Thiele diagram.`,
        solution: String.raw`1. $U = 5000(0.55/0.45)(1000/2600) = 2350$ kg/h; A = 6000/2350 = 2.553.
2. $x_N/x_0 = (1 - 2.553)/(1 - 2.553^5) = 1.553/107.0 = 0.0145$ → recovery 98.5 % (down from 99.65 %).
3. The solids never appear as a separate stream on the diagram: they enter only through U, i.e. the slope U/O of the operating line. More entrained liquid (higher ε, more solids or denser liquid) steepens the operating line towards y = x, so more stages are needed for the same recovery.`,
        answer: String.raw`U = 2350 kg/h, A = 2.55, recovery ≈ 98.5 %; solids enter only through the operating-line slope U/O.` } ] },

    { id: "practice-leaching-P12", q: 12, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-leaching-P12a", label: "(a)", marks: "12", topic: "leaching",
        sub: "Derivation: washing operating line and its constant-flow conditions", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); slides: Washing and Leaching pp. 5–8`,
        text: String.raw`For a countercurrent washing cascade (underflow $U_j$, overflow $O_j$, solids enter at stage 1 with $x_0$, wash water at stage N with $y_{N+1}$), derive the operating equation, state the conditions under which it is a straight line, and give the equilibrium relation. Show that the Kremser equation applies without further assumptions.`,
        solution: String.raw`1. Solute balance on the envelope from stage j + 1 to N (streams crossing: $O_{j+1}$ leaving, $U_j$ entering, $O_{N+1}$ entering, $U_N$ leaving):
$$O_{j+1}y_{j+1} + U_Nx_N = O_{N+1}y_{N+1} + U_jx_j$$
$$y_{j+1} = \frac{U_j}{O_{j+1}}x_j + \frac{O_{N+1}}{O_{j+1}}y_{N+1} - \frac{U_N}{O_{j+1}}x_N$$
2. Underflow liquid from the settled bed:
$$U_j = (\text{rate dry solids})\frac{\varepsilon}{1 - \varepsilon}\frac{\rho_f}{\rho_s}$$
3. U is constant if (i) no solids go to the overflow and the solids do not dissolve, (ii) $\rho_f$ and $\rho_s$ are constant (dilute solution), (iii) porosity ε is constant. Then an overall balance makes O constant too, and
$$y_{j+1} = \frac{U}{O}x_j + \left(y_{N+1} - \frac{U}{O}x_N\right)$$
a straight line of slope U/O through $(x_N, y_{N+1})$ and $(x_0, y_1)$.
4. Equilibrium: the solute is not held by the solid, so overflow and underflow liquids leaving a stage have the same concentration, y = x (a straight line, m = 1).
5. Both lines are straight and flows are constant, which are exactly the Kremser assumptions; hence with A = O/U:
$$\frac{x_N - y_{N+1}}{x_0 - y_{N+1}} = \frac{1 - O/U}{1 - (O/U)^{N+1}}$$`,
        answer: String.raw`$y_{j+1} = (U/O)x_j + (y_{N+1} - (U/O)x_N)$ with constant U = solids·ε/(1−ε)·ρ_f/ρ_s; equilibrium y = x; Kremser with A = O/U.` },
      { id: "practice-leaching-P12b", label: "(b)", marks: "12", topic: "leaching",
        sub: "Washing vs leaching; ideal leaching assumptions", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); slides: Washing and Leaching pp. 3–4, 14–16`,
        text: String.raw`Compare washing and leaching in a table (where the solute is, equilibrium, flow rates, rate of approach to equilibrium, examples). List the assumptions of the idealized countercurrent leaching McCabe–Thiele analysis.`,
        solution: String.raw`| Feature | Washing | Leaching |
|---|---|---|
| Solute location | dissolved in the liquid entrained in the pores/between particles | part of the solid matrix; must dissolve |
| Equilibrium | y = x (same concentration in underflow and overflow liquid) | measured experimentally, generally y ≠ x (often an effective $m_E$) |
| Solid flow | constant (solids do not dissolve) | total solid flow changes as solute dissolves |
| Mass transfer | fast (displacement of liquid) | slow (diffusion in solid); days for pickles, years for in-situ copper |
| Analysis | McCabe–Thiele / Kremser with constant U/O | constant-flow McCabe–Thiele/Kremser only in simple cases; otherwise triangular (variable flow) diagram |
| Examples | salt from beach sand, NaOH from CaCO₃ or alumina | coffee, tea, sugar from cane, oil from soybeans, metals from ores |

**Idealized leaching assumptions:** 1. isothermal; 2. isobaric; 3. no solvent dissolves into the solid; 4. no solvent entrained with the solid; 5. an insoluble solid backbone; 6. negligible heat of mixing; 7. equilibrium stages; 8. no solids in the overflow. Then with Y = kg solute/kg solvent and X = kg solute/kg insoluble solid, $Y_{j+1} = (F_{solid}/F_{solv})X_j + Y_1 - (F_{solid}/F_{solv})X_0$.`,
        answer: String.raw`Washing: solute in entrained liquid, y = x, constant flows; leaching: solute in the solid, measured (often effective) equilibrium, slow diffusion, variable flows; eight idealized assumptions listed.` },
      { id: "practice-leaching-P12c", label: "(c)", marks: "11", topic: "leaching",
        sub: "Effective equilibrium constant: why and limits", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); slides: Washing and Leaching p. 18`,
        text: String.raw`Which two assumptions of the idealized leaching analysis usually fail, and how does the effective equilibrium constant $m_E$ correct for them? State its limitations, and say whether stage efficiencies are expected to be higher or lower in leaching than in liquid–liquid extraction.`,
        solution: String.raw`- **Assumption 4 (no entrainment) fails:** the underflow always carries liquid, as in washing, so solute leaves with the solids in solution.
- **Assumption 7 (equilibrium stages) fails:** diffusion inside solids is slow, so real stages seldom reach equilibrium.
- **Correction:** measure an *effective* equilibrium constant $m_E$ = (solute concentration in the liquid)/(solute concentration in the solid) on the real equipment at the operating conditions. It lumps entrainment and stage inefficiency, so the McCabe–Thiele diagram (or Kremser with A = $m_EF_{solv}/F_{solid}$) is used as if the stages were ideal.
- **Limitations:** $m_E$ is not a thermodynamic property; it depends on flow rates, particle size, residence time and equipment, so it is valid only for the conditions where it was measured; it is often assumed linear (y = $m_E$x) for simplicity.
- **Efficiencies:** lower in leaching than in LLE, because mass transfer in leaching is controlled by slow diffusion through the solid, whereas LLE contacts two fluids with renewable interfaces.`,
        answer: String.raw`No-entrainment and equilibrium-stage assumptions fail; $m_E$ measured on the plant lumps both; it is condition-specific; leaching efficiencies are lower than in LLE.` } ] },

    { id: "practice-leaching-P13", q: 13, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-leaching-P13a", label: "", marks: "20", topic: "leaching",
        sub: "Countercurrent leaching with an effective equilibrium constant (instant coffee)", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`Soluble coffee solids are leached from roasted ground coffee with hot water in a countercurrent battery. The effective equilibrium constant is $m_E$ = 0.85 (kg/m³ in liquid per kg/m³ in solid) and the volumetric liquid/solid flow ratio is 1.6. Pure water is used.
(i) How many stages are needed to recover 96 % of the soluble solids?
(ii) What recovery do 6 stages give?
(iii) What liquid/solid ratio would give 96 % in 6 stages?`,
        solution: String.raw`**Assumptions:** constant volumetric solid and liquid flows, linear effective equilibrium y = $m_E$x (includes entrainment and stage efficiency), pure solvent ($x_N^*$ = 0): Kremser applies.

(i) Leaching factor $A = m_EF_{solv}/F_{solid} = 0.85(1.6) = 1.36$; $x_N/x_0$ = 0.04.
$$N = \frac{\ln[(1 - 1/1.36)(25) + 1/1.36]}{\ln 1.36} = \frac{\ln 7.353}{0.3075} = 6.49 \Rightarrow 7\ \text{stages}$$
(ii) N = 6: $x_N/x_0 = (1 - 1.36)/(1 - 1.36^7) = 0.36/7.60 = 0.0473$ → recovery 95.3 %.
(iii) Solve $(1 - A)/(1 - A^7) = 0.04$: A = 1.416 → $F_{solv}/F_{solid}$ = 1.416/0.85 = 1.67.

> Exam tip: a larger liquid/solid ratio raises recovery but dilutes the extract, which then costs more to dry; leaching factors of 1.2–1.5 are typical.`,
        answer: String.raw`(i) A = 1.36, N = 6.5 → 7 stages; (ii) 6 stages give 95.3 %; (iii) liquid/solid ≈ 1.67 (A ≈ 1.42).` } ] },

    { id: "practice-leaching-P14", q: 14, section: "F", compulsory: false, stem: String.raw`Oil is leached from 2000 kg/h of meal containing 25 wt % oil (no benzene) with 1600 kg/h of pure benzene in a countercurrent cascade. The underflow product must contain 3 wt % oil. Use the oil–meal–benzene equilibrium data of Problem 8.`,
      parts: [ { id: "practice-leaching-P14a", label: "(a)", marks: "15", topic: "leaching",
        sub: "Variable-flow leaching: external balance on the triangular diagram", type: "numerical", syllabus: "partial", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); data Wankat Table 14-2`,
        text: String.raw`Locate M, $R_1$ and $E_N$; find the flow rates and compositions of the outlet overflow and underflow and the oil recovery.`,
        solution: String.raw`**Assumptions:** overflow contains no solids ($x_D$ = 0), underflow lies on the saturated-underflow curve, isothermal.

1. M = 3600 kg/h: $x_{A,M}$ = 500/3600 = 0.139, $x_{D,M}$ = 1500/3600 = 0.417.
2. $R_1$ on the underflow curve at $x_A$ = 0.03: $x_D$ = 0.665, $x_S$ = 0.305.
3. $E_N$: line $R_1$M extended to the $x_D$ = 0 axis: $y_{A,N}$ = 0.322 (benzene 0.678).
4. Solids balance: $R_1$ = 1500/0.6646 = 2257 kg/h; $E_N$ = 3600 − 2257 = 1343 kg/h.
5. Check (oil): 1343(0.322) + 2257(0.03) = 432 + 68 = 500 ✓; recovery = 432/500 = 86.5 %.`,
        answer: String.raw`$E_N$ ≈ 1343 kg/h at 0.322 oil; $R_1$ ≈ 2257 kg/h (0.03 oil, 0.665 meal, 0.305 benzene); recovery 86.5 %.` },
      { id: "practice-leaching-P14b", label: "(b)", marks: "20", topic: "leaching",
        sub: "Difference point on the right-hand side and stage stepping", type: "numerical", syllabus: "partial", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`Locate the difference point and step off the equilibrium stages. Explain why Δ lies on the right of the diagram here.`,
        solution: String.raw`1. $\Delta = E_0 - R_1 = 1600 - 2257 = -657$ kg/h. Because the underflow leaving ($R_1$, carrying solids + solution) is larger than the solvent entering, Δ is negative and lies on the far side of $R_1$, to the right of the triangle.
2. Coordinates:
$$x_{A,\Delta} = \frac{0 - 2257(0.03)}{-657} = 0.103,\qquad x_{D,\Delta} = \frac{0 - 2257(0.6646)}{-657} = 2.28$$
(also the intersection of lines S–$R_1$ and $E_N$–F extended to the right).
3. Stepping from $R_1$: tie line → $E_j$ on the $x_D$ = 0 axis; line $E_j$–Δ meets the underflow curve at $R_{j+1}$.

| Stage | $R_j$: $x_D$, $x_A$ | $E_j$: $y_A$ |
|---|---|---|
| 1 | 0.665, 0.030 | 0.089 |
| 2 | 0.656, 0.093 | 0.270 |
| 3 | 0.627, 0.224 | 0.601 |

$E_N$ (0.322) is passed in stage 3: fraction = (0.322 − 0.270)/(0.601 − 0.270) = 0.16 → N ≈ 2.2 → 3 equilibrium stages.

![Countercurrent leaching with Δ to the right of the diagram: 2.2 stages](fig/practice-leaching-P14-sol.svg)`,
        answer: String.raw`Δ = −657 kg/h at (2.28, 0.103), right of the diagram since $R_1 > E_0$; N ≈ 2.2 → 3 stages.` } ] }
  ] });
