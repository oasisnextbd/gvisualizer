QB.paper({
  year: "2012-13", date: "10/05/2014", marks: 210,
  rules: String.raw`Section A: four questions, answer any three. Section B: four questions, answer any three. Separate scripts for each section. Assume reasonable values if additional data are required.`,
  questions: [
    { id: "2012-13-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q1a", label: "(a)", marks: "12",
          topic: "absorption", sub: "Kremser equation: assumptions, applicability, advantages",
          type: "theory", syllabus: "in", repeats: ["2011-12-Q2a", "2015-16-Q8a"],
          text: String.raw`Write a short note on 'Kremser Equation' of absorption-stripping indicating the assumptions, applicability and advantages.`,
          solution: String.raw`The Kremser equation is the analytical solution of the stage-by-stage balances for a countercurrent cascade when **both the operating line and the equilibrium line are straight**. It replaces McCabe–Thiele stepping by one formula.

### Form (absorber, gas-phase)
Equilibrium $y = m x + b$, absorption factor $A = L/(mV)$, $y_0^* = m x_0 + b$ (gas in equilibrium with the entering liquid):

$$
N = \frac{\ln\left[\left(1-\frac{mV}{L}\right)\frac{y_{N+1}-y_0^*}{y_1-y_0^*}+\frac{mV}{L}\right]}{\ln\left(\frac{L}{mV}\right)}
$$

Equivalent fractional form: $\dfrac{y_{N+1}-y_1}{y_{N+1}-y_0^*} = \dfrac{A^{N+1}-A}{A^{N+1}-1}$. For a stripper use $S = mV/L$ and the liquid-phase form $\dfrac{x_N-x_{N+1}^*}{x_0-x_{N+1}^*} = \dfrac{S-1}{S^{N+1}-1}$. Special case $A = 1$ (parallel lines): $N = \dfrac{y_{N+1}-y_1}{y_1-y_0^*}$.

### Assumptions (derivation)
1. Dilute system (or solute-free ratio units), so $L/V$ is constant and the operating line is straight.
2. Equilibrium line straight: Henry's law $y = mx + b$ with constant $m$, i.e. isothermal and isobaric.
3. Carrier gas insoluble, solvent nonvolatile; heat of absorption negligible.
4. Equilibrium (theoretical) stages, countercurrent, no side streams.

### Applicability
- Dilute absorbers, strippers, immiscible extractors, washers (y = x, so m = 1) and any countercurrent cascade meeting the assumptions; also each solute separately in a multisolute dilute system.
- Use mole fractions when dilute; use ratios $X, Y$ with $L/G$ solute-free if the equilibrium is still linear in ratio units.
- Not valid when the equilibrium curve bends (concentrated gas, large heat effects); then step off a McCabe–Thiele diagram or apply Kremser piecewise with a mean $m$.

### Advantages
- Fast and exact (no graph reading errors), easy on a calculator or spreadsheet.
- Solves design (find N) and rating/simulation problems (given N, find outlet concentration or flow), which are trial and error on a graph.
- Shows the effect of $A$: $A > 1$ is needed for high recovery in an absorber; increasing N beyond a few stages helps little when $A < 1$.
- Easy to use with very small concentrations (graph would need many zoomed diagrams).

> **Exam tip:** state the five assumptions, write one form of the equation with every symbol defined, and note the $A = 1$ special case.`,
          answer: String.raw`Kremser: analytical N for countercurrent cascades with straight operating and equilibrium lines (dilute, constant L/V, Henry's law, isothermal); fast, exact and handles rating problems.` },
        { id: "2012-13-Q1b", label: "(b)", marks: "23",
          topic: "absorption", sub: "Concentrated CO2 absorber in mole ratios, 1.5 Lmin",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`It is required to absorb CO$_2$ into water from a gas stream containing 90 mole% N$_2$ and 10 mole% CO$_2$. The inlet water is pure and is at 10°C. The operation can be assumed to be isothermal and is at 10 atm pressure. If the liquid flow rate is 1.5 times the minimum liquid flow rate, how many equilibrium stages are required to absorb 92% of the CO$_2$? Choose a basis of 1 mole/hr of entering gas. Consider an equilibrium relationship of $y = 87.6x$.`,
          solution: String.raw`This is Example 15-1 of the slides (Wankat Example 12-1) with the equilibrium given directly: $y = 87.6x$ (that is $H/P = 876/10$; Wankat Table 12-1 gives H = 876 atm at 5 °C, the paper writes 10 °C but gives the slope, so use 87.6).

**Given:** G basis 1 mol/h gas: 0.9 mol/h N$_2$, 0.1 mol/h CO$_2$; pure water in; 92% CO$_2$ absorbed; $L = 1.5L_{min}$; $y = 87.6x$ (mole fractions).

**Find:** number of equilibrium stages N.

**Assumptions:** N$_2$ insoluble, water nonvolatile, isothermal, isobaric. 10% CO$_2$ is not dilute, so work in **mole ratios** with solute-free flows $G$ (N$_2$) and $L$ (water) constant: the operating line is then straight.

1. Solute-free flows and end compositions:
   $G = 0.9$ mol N$_2$/h; $Y_{N+1} = \dfrac{0.1}{0.9} = 0.11111$; CO$_2$ leaving in gas $= 0.08(0.1) = 0.008$ mol/h, so $Y_1 = \dfrac{0.008}{0.9} = 0.008889$; $X_0 = 0$.
2. Equilibrium in ratio units: $x = \dfrac{X}{1+X}$, $y = \dfrac{Y}{1+Y}$, $y = 87.6x$. The curve $Y(X)$ bends upward (convex), so the minimum-L pinch is at the gas inlet (bottom).
3. Minimum L/G: at $Y_{N+1} = 0.11111$, $y = 0.1$, $x^* = 0.1/87.6 = 0.0011416$, $X^*_N = 0.0011429$.
$$
\left(\frac{L}{G}\right)_{min} = \frac{Y_{N+1}-Y_1}{X_N^*-X_0} = \frac{0.11111-0.008889}{0.0011429} = 89.44
$$
   $L_{min} = 89.44(0.9) = 80.5$ mol water/h.
4. Actual: $L = 1.5(80.5) = 120.75$ mol/h, $L/G = 134.17$.
   Outlet liquid: $X_N = \dfrac{Y_{N+1}-Y_1}{L/G} = \dfrac{0.10222}{134.17} = 7.62\times10^{-4}$.
   Operating line (top balance): $Y_{j+1} = 134.17X_j + 0.008889$.
5. Stage-by-stage from the top (equilibrium: $X_j$ from $Y_j$; operating line: $Y_{j+1}$ from $X_j$):

| stage | $Y_j$ | $X_j$ (eq.) |
|---|---|---|
| 1 | 0.00889 | 0.000101 |
| 2 | 0.02238 | 0.000250 |
| 3 | 0.04243 | 0.000465 |
| 4 | 0.07126 | 0.000760 |
| 5 | 0.11084 | 0.001140 |

   Stage 4 gives $X_4 = 0.000760$, just short of $X_N = 0.000762$: fraction of stage 5 $= (0.000762-0.000760)/(0.001140-0.000760) = 0.005$.

![McCabe–Thiele Y–X diagram for the CO2 absorber: about 4.0 stages](fig/2012-13-Q1b-sol.svg)

**Result:** $N = 4.005 \approx 4$ equilibrium stages. A check with exactly 4 stages at this L gives 91.98% absorption, i.e. 92% within rounding. (The slides' graphical answer for the same numbers is 4.13 stages, because the pinch was read as X = 0.001137; specify 5 stages if a safety margin is wanted.)

> **Exam tip:** convert every equilibrium point to ratios with a small table (as on the slide) and draw the minimum-L line from $(X_0, Y_1)$ to the equilibrium curve at $Y_{N+1}$.`,
          answer: String.raw`(L/G)min = 89.4, L = 120.8 mol/h (L/G = 134.2), XN = 7.62×10⁻⁴; N ≈ 4.0 equilibrium stages (graphical ≈ 4.1).` } ] },
    { id: "2012-13-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q2a", label: "(a)", marks: "15",
          topic: "leaching", sub: "Washing vs leaching: principle, operation, equilibrium, operating line",
          type: "theory", syllabus: "in", repeats: ["2017-18-Q2b", "2023-24-Q7b"],
          text: String.raw`Make a comparison between 'Washing' and 'Leaching' on the basis of principle, operation, equilibrium relationship and operating equation.`,
          solution: String.raw`| basis | Washing | Leaching (solid–liquid extraction) |
|---|---|---|
| principle | solute is only in the liquid entrained in the pores/between particles; it is removed by displacing/diluting that liquid with clean wash liquor | solute is part of the solid matrix and must dissolve and diffuse out of the solid into the solvent |
| examples | salt from mined sand, NaOH from CaCO$_3$ slurry (lime–soda process), alumina mud | sugar from cane/beets, oil from soybeans, coffee and tea, metals from ores |
| operation | mixer–settler or thickener stages (single, cross-flow, countercurrent); underflow = solids + entrained liquid, overflow = clear liquid; fast | same equipment (mixer–settler, Rotocel, percolators); slow because of diffusion in the solid, long residence times; solids flow usually changes |
| equilibrium | $y = x$: overflow and underflow liquids have the same solute concentration | measured experimentally, $y = f(x)$, usually not $y = x$; with entrainment and non-equilibrium lumped into an effective constant $y = m_E x$ |
| constant flows | constant underflow liquid U (constant solids, constant porosity, constant density) and therefore constant overflow O | only in idealized cases (insoluble backbone, no entrainment); rigorous analysis is like partially miscible extraction |
| operating equation | $y_{j+1} = \dfrac{U}{O}x_j + \left(y_1 - \dfrac{U}{O}x_0\right)$, straight | $y_{j+1} = \dfrac{L}{V}x_j + \left(y_1 - \dfrac{L}{V}x_0\right)$ with solvent and solid flows (straight only if those are constant) |
| analysis | McCabe–Thiele with y = x, or Kremser with m = 1 (no extra assumptions) | McCabe–Thiele with the measured curve; Kremser if $y = m_E x$ is linear |

> **Exam tip:** the single most important difference is the equilibrium: $y = x$ for washing versus a measured, usually nonlinear curve (or $m_E$) for leaching.`,
          answer: String.raw`Washing removes solute held in entrained liquid (equilibrium y = x, constant U and O, Kremser with m = 1); leaching dissolves solute out of the solid (measured or effective y = m_E x, slower, flows often vary).` },
        { id: "2012-13-Q2b", label: "(b)", marks: "20",
          topic: "leaching", sub: "Seven-stage countercurrent washing of NaOH, Kremser",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`We wish to wash a solid-solution stream. A countercurrent washing system with seven stages is used. The inlet solids flow is 10,000 kg/hr of dry solids. Each kilogram of dry solids also entrains 4 liters of solution. Thus, total inlet feed is 10,000 kg solids plus 40,000 liters of solution. The inlet concentration of this entrained solution is 2 wt% NaOH and 98 wt% water. Pure water at a flow rate of 25,000 kg/hr is used for washing. Assume that the liquid density is constant at 1 kg/liter. What is the outlet concentration of the NaOH in the overflow liquid?`,
          solution: String.raw`**Given:** N = 7 countercurrent stages; solids 10,000 kg/h each carrying 4 L solution, $\rho = 1$ kg/L so underflow liquid $U = 40{,}000$ kg/h; $x_0 = 0.02$; wash water $O = 25{,}000$ kg/h, $y_{N+1} = 0$.

**Find:** NaOH in the overflow leaving, $y_1$.

**Assumptions (constant-flow washing):** solids do not dissolve and none leave in the overflow; constant liquid density (dilute, 2%); constant entrainment per kg solids. Then U and O are constant from stage to stage. Equilibrium: $y_j = x_j$ (m = 1).

1. Stripping factor for the underflow liquid (the phase losing solute): $S = \dfrac{mO}{U} = \dfrac{25{,}000}{40{,}000} = 0.625$.
2. Kremser (liquid-phase form):
$$
\frac{x_N - y_{N+1}/m}{x_0 - y_{N+1}/m} = \frac{S-1}{S^{N+1}-1} = \frac{0.625-1}{0.625^{8}-1} = \frac{-0.375}{0.02328-1} = 0.3839
$$
   $x_7 = 0.3839(0.02) = 0.00768$ wt frac NaOH in the washed underflow.
3. NaOH balance: in $= 40{,}000(0.02) = 800$ kg/h; out with solids $= 40{,}000(0.00768) = 307.2$ kg/h; to overflow $= 492.8$ kg/h.
$$
y_1 = \frac{U(x_0-x_7)}{O} = \frac{40{,}000(0.02-0.00768)}{25{,}000} = 0.01971
$$
4. Check by stepping (operating line $y_{j+1} = 1.6x_j - 0.01229$, equilibrium $x_j = y_j$):

| stage | $x_j = y_j$ |
|---|---|
| 1 | 0.01971 |
| 2 | 0.01926 |
| 3 | 0.01852 |
| 4 | 0.01735 |
| 5 | 0.01548 |
| 6 | 0.01248 |
| 7 | 0.00768 |

   and $y_8 = 1.6(0.00768) - 0.01229 = 0.0000$ ✓.

![McCabe–Thiele diagram for countercurrent washing: y = x equilibrium, operating line slope 1.6, 7 stages](fig/2012-13-Q2b-sol.svg)

**Result:** outlet overflow ≈ 1.97 wt% NaOH; only 61.6% of the NaOH is recovered because the wash ratio O/U = 0.625 is below 1 (the cascade pinches at the feed end).

> **Exam tip:** in washing m = 1, so the Kremser factor is just O/U (or U/O); with O/U < 1 extra stages add little recovery.`,
          answer: String.raw`Overflow leaving ≈ 0.0197 wt frac NaOH (1.97 wt%); washed underflow 0.0077; recovery 61.6%.` } ] },
    { id: "2012-13-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q3a", label: "(a)", marks: "12",
          topic: "immiscible-extraction", sub: "Three types of liquid–liquid extractors",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Name three liquid-liquid extractors indicating their general features.`,
          solution: String.raw`> The slides show the extractor types and the selection heuristics (Wankat ch. 13); the details below are the textbook features.

1. **Mixer–settler**
   - A stirred tank mixes the two liquids (drops of one in the other), followed by a settler (gravity decanter) where the phases separate; each unit is close to one equilibrium stage.
   - Very flexible, high stage efficiency (80–100%), handles high flow ratios and viscous liquids, easy scale-up.
   - Large floor area and inventory (solvent hold-up), pumping between stages; emulsions can form. Best for 1–2 stages (heuristic).
2. **Sieve-tray (perforated plate) column, unagitated**
   - Dispersed phase is broken into drops by the perforations, rises (or falls) through the continuous phase and coalesces under the next plate; downcomers carry the continuous phase.
   - Cheap, no moving parts, compact, good for 3–5 stages and moderate capacity; low efficiency per tray (stage efficiency 25–50%).
   - Packed and spray columns are the same family: packed columns give more interfacial area, spray columns are simplest but suffer back-mixing.
3. **Mechanically agitated columns** (rotating disc contactor RDC, Scheibel, Karr reciprocating-plate, pulsed columns)
   - A rotating shaft with discs/impellers, or a pulsed or reciprocating plate stack, adds energy to make small drops and large area.
   - Many stages in one shell (more than five), high throughput, adjustable agitation; more expensive, moving parts, risk of emulsions and axial mixing.
4. (Also used: **centrifugal extractors**, e.g. Podbielniak: very short contact time, small hold-up, for low density difference or unstable products such as antibiotics.)

| extractor | stages | strength | weakness |
|---|---|---|---|
| mixer–settler | 1–2 per unit | high efficiency, flexible | large volume and floor space |
| sieve-tray / packed column | 3–5 | cheap, no moving parts | low efficiency, limited stages |
| agitated column (RDC, Karr) | more than 5 | many stages, high capacity | cost, moving parts, emulsions |

> **Exam tip:** quote the slide heuristic: 1–2 stages mixer–settlers, 3–5 stages sieve or packed column, more than 5 stages a column with mechanical energy input.`,
          answer: String.raw`Mixer–settlers (one high-efficiency stage each), sieve-tray/packed columns (cheap, 3–5 stages), mechanically agitated columns such as RDC/Karr (many stages, high capacity).` },
        { id: "2012-13-Q3b", label: "(b)", marks: "23",
          topic: "immiscible-extraction", sub: "Four-stage cross-flow extraction, acetic acid–water–1-butanol",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`An 11.5 wt% mixture of acetic acid in water is to be extracted with pure 1-butanol at 1 atm pressure and 26.7°C temperature in a four-stage cross-flow immiscible system. The ratio of water to pure 1-butanol flow rate is same for each stage and is equal to 3.39. Determine the outlet concentration of all streams. Assume that equilibrium follows $y = 1.613x$ relationship.`,
          solution: String.raw`This is Example 16-2 of the slides (Wankat Example 13-2): the countercurrent solvent of Example 16-1 ($F_D/F_S = 0.848$) is split equally over four stages, so each stage has $F_D/F_{S,j} = 4(0.848) = 3.39$.

**Given:** $x_0 = 0.115$ wt frac acid; pure butanol to every stage ($Y_{j,in} = 0$); $F_D/F_{S,j} = 3.39$ (kg water / kg butanol per stage); $y = 1.613x$ (wt fractions, Wankat Table 13-3).

**Find:** $X_1 \ldots X_4$, $Y_1 \ldots Y_4$ (and the fractions).

**Assumptions:** water and butanol immiscible (constant solute-free flows), isothermal, isobaric, equilibrium stages. 11.5% is not dilute, so use mass ratios: $X$ = kg acid/kg water, $Y$ = kg acid/kg butanol.

1. Feed ratio: $X_0 = \dfrac{0.115}{1-0.115} = 0.1299$.
2. Equilibrium in ratios: $x = \dfrac{X}{1+X}$, $y = 1.613x$, $Y = \dfrac{y}{1-y}$.
3. Stage j balance (cross-flow, Wankat Eq. 16-21):
$$
Y_j = -\frac{F_D}{F_{S,j}}X_j + \left(\frac{F_D}{F_{S,j}}X_{j-1} + Y_{j,in}\right) = -3.39\,(X_j - X_{j-1})
$$
   A straight line from $(X_{j-1}, 0)$ with slope −3.39 meets the equilibrium curve at $(X_j, Y_j)$. Solved numerically for each stage:

| stage | $X_j$ (kg/kg water) | $x_j$ (wt frac) | $Y_j$ (kg/kg butanol) | $y_j$ (wt frac) |
|---|---|---|---|---|
| 1 | 0.0865 | 0.0796 | 0.1473 | 0.1284 |
| 2 | 0.0579 | 0.0548 | 0.0969 | 0.0883 |
| 3 | 0.0389 | 0.0375 | 0.0643 | 0.0605 |
| 4 | 0.0262 | 0.0256 | 0.0430 | 0.0413 |

4. Check (basis 1 kg water, $F_S = 0.295$ kg butanol per stage): acid in = 0.1299; out = 0.0262 + 0.295(0.1473 + 0.0969 + 0.0643 + 0.0430) = 0.1299 ✓.

![Cross-flow McCabe–Thiele diagram: four operating lines of slope −3.39 from the X axis](fig/2012-13-Q3b-sol.svg)

**Result:** raffinate leaving stage 4: $x_4$ = 2.56 wt% acid ($X_4 = 0.026$); extracts: 12.8, 8.8, 6.0 and 4.1 wt% acid from stages 1–4. Compared with the countercurrent column using the same total solvent (raffinate 0.5 wt%), cross-flow leaves five times more acid.

> **Exam tip:** in cross-flow every stage has its own operating line starting on the X-axis at the previous raffinate; do not draw one continuous staircase.`,
          answer: String.raw`X4 = 0.026 (x4 = 2.56 wt% acid in raffinate); Y1…Y4 = 0.147, 0.097, 0.064, 0.043 kg/kg butanol (12.8, 8.8, 6.0, 4.1 wt%).` } ] },
    { id: "2012-13-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q4a", label: "(a)", marks: "8",
          topic: "column-design", sub: "Tray efficiency vs vapor velocity",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Providing required explanation show graphically how the efficiency of a tray varies with vapor velocity in the staged-column distillation.`,
          solution: String.raw`> The slides mention weeping, entrainment and turndown; the efficiency–velocity curve itself is Wankat Fig. 10-13.

![Tray efficiency vs vapor velocity: weeping at low rate, maximum near design point, fall with entrainment and flooding](fig/2012-13-Q4a-sol.svg)

- **Very low vapor velocity – weeping:** the vapor cannot hold the liquid on the deck; liquid drains through the holes and bypasses contact (dumping in the extreme). Efficiency is very low.
- **Rising velocity:** the froth develops, interfacial area and turbulence increase, and the Murphree efficiency rises.
- **Design point:** trays are designed for maximum efficiency near about 75–85% of flooding.
- **Above design – excessive entrainment:** liquid drops are carried to the tray above, back-mixing liquid and lowering the effective separation; efficiency falls sharply.
- **Flooding:** liquid fills the tray spacing (or the downcomer backs up); the column stops separating.
- A tray with good **turndown** (valve tray) has a broad, flat maximum, so efficiency changes little when the vapor rate drops; a sieve tray falls off below about 60% of design rate.

> **Exam tip:** label the three regions (weeping, design maximum, entrainment/flooding) on the sketch; that is where the marks are.`,
          answer: String.raw`Efficiency is low at weeping, rises to a maximum near the design velocity, then drops steeply with excessive entrainment and flooding.` },
        { id: "2012-13-Q4b", label: "(b)", marks: "12",
          topic: "column-design", sub: "Sieve vs bubble-cap vs valve trays",
          type: "theory", syllabus: "in", repeats: ["2011-12-Q8b", "2016-17-Q5e", "2020-21-Q1a"],
          text: String.raw`Discuss the relative advantages and disadvantages of sieve, bubble cap and valve trays used in distillation column.`,
          solution: String.raw`| feature | sieve tray | valve tray | bubble-cap tray |
|---|---|---|---|
| construction | flat deck with punched/drilled holes | large holes with liftable valve covers (feet or cage) | riser (chimney) over each hole, slotted cap on top |
| cost | lowest (base) | about 1.2 × sieve | about 4 × valve |
| efficiency at design | good | about the same as sieve | same or lower than sieve |
| turndown | poor: efficiency drops below about 60% of design gas rate, weeps | good: valve lift follows vapor rate, slot velocity nearly constant | very flexible: no weeping (liquid seal), works at very low liquid rates |
| entrainment | reference | similar | about 3 × sieve, needs larger tray spacing |
| pressure drop | low | standard valve higher; can be designed lower | highest |
| fouling/solids | best: easy to clean | can stick or plug; feet wear | coking, polymer problems |
| design information | open (anyone can design) | proprietary, vendor design | extensive old data |
| use today | fouling service, standard item | most new columns | older columns, very low liquid rates |

**Sieve:** + cheap, simple, high capacity, easy to clean; − poor turndown (weeping), efficiency falls off at low vapor rates.

**Valve:** + good turndown and flexibility with feed rate changes, efficiency held over a wide range; − 20% dearer, moving parts wear or stick in dirty service, vendor-proprietary.

**Bubble-cap:** + positive liquid seal, operates at very low liquid and vapor rates, much design data; − expensive, heavy, high pressure drop, high entrainment and liquid gradient, fouling; rarely chosen for new columns.

Efficiency ranking: valve ≥ sieve ≥ bubble-cap (except near flooding), so bubble-cap efficiencies give a conservative design for sieve and valve trays.

> **Exam tip:** a comparison table with cost, turndown, entrainment, pressure drop and fouling earns most of the marks.`,
          answer: String.raw`Sieve: cheapest, easy to clean, poor turndown; valve: about 1.2× cost, best turndown, proprietary; bubble-cap: about 4× valve cost, no weeping but high Δp and entrainment, mostly in old columns.` },
        { id: "2012-13-Q4c", label: "(c)", marks: "5",
          topic: "column-design", sub: "O'Connell correlation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain the importance and use of O'Connell correlation.`,
          solution: String.raw`- **Importance:** McCabe–Thiele gives equilibrium stages; a real column needs real trays, $N_{act} = N_{equil}/E_o$. When no plant or pilot efficiency data exist, the O'Connell correlation is the standard first estimate of the **overall efficiency** $E_o$.
- **Correlation:** $E_o$ (Wankat Fig. 10-14, 38 data points from commercial and laboratory columns) as a function of the product $\alpha\mu$: relative volatility of the key components times the liquid viscosity of the feed (cP), both at the average column temperature and pressure. Curve fit (Kessler and Wankat):
$$
E_o = 0.52782 - 0.27511\log_{10}(\alpha\mu) + 0.044923\left[\log_{10}(\alpha\mu)\right]^2
$$
- **Trends:** higher viscosity lowers mass-transfer rates, so $E_o$ falls; higher α means more material must be transferred to reach equilibrium, so $E_o$ falls. Typical values 40–90%.
- **Use:** (1) find average T and P; (2) get α and μ of the feed; (3) read $E_o$; (4) $N_{act} = (N_{equil} - 1_{\text{reboiler}})/E_o$, rounded up. The data were probably for bubble-cap columns, so the estimate is conservative for sieve and valve trays. The slides also apply O'Connell's (absorber) version to bubble-cap absorbers.

> **Exam tip:** write $N_{act} = N_{equil}/E_o$ and name both variables of the correlation (α and μ).`,
          answer: String.raw`O'Connell gives overall efficiency E_o from αμ (feed viscosity × relative volatility at average conditions) to convert equilibrium stages to real trays; conservative for sieve and valve trays.` },
        { id: "2012-13-Q4d", label: "(d)", marks: "5",
          topic: "column-design", sub: "Flow pattern selection guide for sieve trays",
          type: "sketch", syllabus: "partial", repeats: ["2021-22-Q4c", "2022-23-Q1b", "2023-24-Q4b"],
          text: String.raw`Draw the diagram which can be used as a guide to select proper flow pattern for sieve trays.`,
          solution: String.raw`> The slides explain cross-flow, multipass and reverse flow; the selection chart itself is Wankat Fig. 10-4 (Huang and Hodson, 1958). The boundaries below are approximate readings of that chart.

![Selection guide for sieve trays: liquid rate vs tower diameter with reverse-flow, cross-flow and double-pass regions](fig/2012-13-Q4d-sol.svg)

- Axes: liquid capacity (gal/min, log scale) against tower diameter (ft, log scale).
- **Reverse flow** (liquid baffled across and back) for low liquid rates, below about 30–50 gal/min.
- **Cross flow** (single pass) for intermediate rates, roughly 50 to 200–500 gal/min depending on diameter; the normal choice.
- **Double pass** (and four-pass, never three-pass) above about 500 gal/min in columns larger than about 5–6 ft.
- Reason: weir length (liquid capacity) grows with D while vapor area grows with D², so large columns run out of weir length first and need more passes. The chart is only approximate near the boundaries.`,
          answer: String.raw`Liquid rate vs diameter chart: reverse flow at low liquid rate, cross flow in the middle, double (multi) pass at high liquid rate in large columns.` },
        { id: "2012-13-Q4e", label: "(e)", marks: "5",
          topic: "column-design", sub: "Pressure heads on a sieve tray",
          type: "sketch", syllabus: "partial", repeats: ["2011-12-Q8f", "2015-16-Q4d"],
          text: String.raw`Show different pressure heads on a sieve tray with a neat sketch.`,
          solution: String.raw`> Listed in the slides' hydraulics topics; the sketch and equation follow Wankat Fig. 10-21 and Eq. (10-23).

![Pressure heads on a sieve tray: dry-tray head, weir height, crest, gradient, under-downcomer loss and downcomer backup](fig/2012-13-Q4e-sol.svg)

The clear-liquid head in the downcomer must balance all the heads the liquid has to overcome to flow onto the tray below:

$$
h_{dc} = h_{\Delta p,dry} + h_{weir} + h_{crest} + h_{grad} + h_{du}
$$

- $h_{\Delta p,dry}$: head equivalent to the gas pressure drop through the dry holes (orifice equation).
- $h_{weir}$: outlet weir height (0.5 in minimum, 2–4 in common).
- $h_{crest}$: liquid crest over the weir (Francis weir formula).
- $h_{grad}$: hydraulic gradient across the tray (usually negligible on sieve trays).
- $h_{du}$: friction loss as liquid flows under the downcomer apron.
- Total tray pressure drop = dry-tray drop + liquid head ($h_{weir} + h_{crest}$, corrected for aeration). If $h_{dc}$ (aerated) reaches the top of the weir on the tray above, the column suffers **downcomer flooding**; design keeps $h_{dc}$ below about half the tray spacing.`,
          answer: String.raw`h_dc = h_dry + h_weir + h_crest + h_grad + h_du; downcomer backup must stay well below tray spacing to avoid downcomer flooding.` } ] },
    { id: "2012-13-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q5a", label: "(a)", marks: "8",
          topic: "intro", sub: "Is distillation an equilibrium-stage process?",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"Distillation, whether batch or continuous, is an equilibrium stage separation process" – do you agree with this statement? Explain.`,
          solution: String.raw`**Yes, as a design model**, with the qualification that real trays only approach equilibrium.

- The separation is based on the different volatilities of the components: a vapor and a liquid are brought into contact, mass and heat are exchanged until $\mu_i^L = \mu_i^V$ (phase equilibrium), and the two phases are separated. That contact–equilibrate–separate unit is an **equilibrium stage**.
- **Continuous column:** every tray (and the partial reboiler, partial condenser) is modelled as an equilibrium stage; McCabe–Thiele and Lewis methods count equilibrium stages, the flash drum is a single equilibrium stage.
- **Batch:** the still pot of a simple batch still is one equilibrium stage at each instant ($x_D = y^*(x_W)$ in the Rayleigh equation); a multistage batch column is a set of equilibrium stages above the pot, analysed with McCabe–Thiele at each time. Batch is unsteady, but each stage is still treated as at equilibrium.
- **Qualification:** finite contact time and area, entrainment, weeping and maldistribution mean a real tray does not reach equilibrium, so the equilibrium-stage result is corrected by efficiencies ($E_{MV}$, $E_o$, $N_{act} = N_{equil}/E_o$). Packed columns are continuous-contact devices described by HETP or HTU–NTU, not discrete stages.

> **Exam tip:** agree, define an equilibrium stage, give one continuous and one batch example, then mention efficiency as the correction.`,
          answer: String.raw`Agreed as a model: both are designed as sequences of equilibrium stages (tray, still pot); real trays fall short of equilibrium, handled by efficiencies.` },
        { id: "2012-13-Q5b", label: "(b)", marks: "12",
          topic: "vle", sub: "Ternary VLE with DePriester K-values (C4–C5–C6)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A mixture of n-butane, n-pentane, and n-hexane is at 120°F and 20 psia. Liquid and vapor are in equilibrium. If the liquid is 0.13 mole fraction n-butane, find the compositions of liquid and vapor. (Use supplied De Priester chart).`,
          solution: String.raw`**Given:** T = 120 °F = 48.9 °C = 579.67 °R; p = 20 psia = 137.9 kPa; $x_{C4} = 0.13$; two phases in equilibrium.

**Find:** all $x_i$ and $y_i$.

**Assumptions:** K-values from the DePriester chart (ideal-solution K independent of composition). The chart attached to the paper is the low-temperature one (−70 to 20 °C), which does not reach 48.9 °C, so use the high-temperature DePriester chart (Wankat Fig. 2-12) through its curve fit, Wankat Eq. (2-30) with Table 2-3 constants ($\ln K = a_{T1}/T^2 + a_{T6} + a_{p1}\ln p$ for these alkanes, T in °R, p in psia).

1. Degrees of freedom: $F = C - P + 2 = 3 - 2 + 2 = 3$; fixing T, p and $x_{C4}$ fixes the system.
2. K-values at 120 °F, 20 psia:

| component | $a_{T1}$ | $a_{T6}$ | $a_{p1}$ | K |
|---|---|---|---|---|
| n-butane | −1,280,557 | 7.94986 | −0.96455 | 3.49 |
| n-pentane | −1,524,891 | 7.33129 | −0.89143 | 1.13 |
| n-hexane | −1,778,901 | 6.96783 | −0.84634 | 0.422 |

   (Reading the chart gives about 3.5, 1.1 and 0.42.)
3. Equations: $x_{C5} + x_{C6} = 1 - 0.13 = 0.87$ and $\sum y_i = \sum K_i x_i = 1$:
$$
3.49(0.13) + 1.13\,x_{C5} + 0.422(0.87 - x_{C5}) = 1
$$
$$
x_{C5} = \frac{1 - 0.4534 - 0.3675}{1.1305 - 0.4225} = 0.253, \qquad x_{C6} = 0.617
$$
4. Vapor: $y_{C4} = 3.488(0.13) = 0.453$; $y_{C5} = 1.1305(0.253) = 0.286$; $y_{C6} = 0.4225(0.617) = 0.261$; sum = 1.000 ✓.

| | n-butane | n-pentane | n-hexane |
|---|---|---|---|
| liquid x | 0.130 | 0.253 | 0.617 |
| vapor y | 0.453 | 0.286 | 0.261 |

The answer is sensitive to the K readings (with K = 3.4, 1.1, 0.42 one gets $x_{C5} \approx 0.28$), so read the chart carefully.

> **Exam tip:** state F = 3 first, then the two summation equations; with one x known the problem is linear, no trial and error.`,
          answer: String.raw`K ≈ 3.49, 1.13, 0.42; x = (0.130, 0.253, 0.617), y = (0.453, 0.286, 0.261) for (C4, C5, C6).` },
        { id: "2012-13-Q5c", label: "(c)", marks: "15",
          topic: "vle", sub: "Ethanol–water on the H-x chart: tie line at 87 °C and lever rule",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A 50 wt% alcohol mixture is heated to 87°C and then allowed to separate into liquid and vapor, what are the compositions of the two phases at equilibrium? Determine the relative amounts of liquid and vapor. (Use the supplied enthalpy composition diagram at 1 kg/cm$^2$).`,
          solution: String.raw`**Given:** ethanol–water, z = 0.50 wt frac ethanol, T = 87 °C, p = 1 kg/cm² (H-x chart supplied, Wankat Fig. 2-4).

**Find:** liquid and vapor compositions; L/V, L/F, V/F (mass basis).

1. Check the phase: at 50 wt% the bubble point is about 81–82 °C and the dew point about 91–92 °C, so 87 °C is inside the two-phase region.
2. The 87 °C isothermal tie line on the chart runs from the boiling line to the dew line. Readings (wt fraction ethanol): liquid **x ≈ 0.18** ($h_L$ ≈ 87 kcal/kg), vapor **y ≈ 0.64** ($H_V$ ≈ 394 kcal/kg). Cross-check with the 1-atm VLE table (Wankat Table 2-1, mole fractions converted with M = 46.07 and 18.02): at about 88 °C, x = 0.081 mol (0.18 wt), y = 0.406 mol (0.64 wt); the 1 kg/cm² chart isotherms lie about 1 °C below the 1-atm temperatures.
3. Lever rule on the tie line (mass basis, since the chart is per kg):
$$
\frac{L}{V} = \frac{y - z}{z - x} = \frac{0.64 - 0.50}{0.50 - 0.18} = 0.43
$$
$$
\frac{V}{F} = \frac{z - x}{y - x} = \frac{0.32}{0.46} = 0.70, \qquad \frac{L}{F} = 0.30
$$

![H-x diagram for ethanol–water at 1 kg/cm²: the 87 °C tie line through the 50 wt% feed point](fig/2012-13-Q5c-sol.svg)

**Result:** liquid ≈ 18 wt% ethanol, vapor ≈ 64 wt% ethanol; per 100 kg of mixture about 70 kg vapor and 30 kg liquid (L/V ≈ 0.43). Chart reading tolerance about ±0.01 in composition.

> **Exam tip:** on the H-x chart use the auxiliary line or the printed isotherms to draw the tie line; the feed point must lie on it, and the lever rule uses the horizontal (composition) distances.`,
          answer: String.raw`x ≈ 0.18, y ≈ 0.64 wt frac ethanol; L/V ≈ 0.43, i.e. ≈ 70% vapor and 30% liquid by mass.` } ] },
    { id: "2012-13-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q6a", label: "(a)", marks: "10",
          topic: "flash", sub: "Flash distillation system: schematic and working",
          type: "sketch", syllabus: "in", repeats: ["2011-12-Q5a", "2017-18-Q5b", "2018-19-Q5a", "2020-21-Q5c", "2023-24-Q2a"],
          text: String.raw`Draw the schematic diagram of a flash distillation system. Label the diagram and describe the working principle.`,
          solution: String.raw`![Flash distillation system: pump, heater, throttling valve, flash drum with demister, vapor and liquid products](fig/2012-13-Q6a-sol.svg)

**Working principle**
1. **Pump** raises the feed pressure so the liquid does not boil in the heater.
2. **Heater** raises the temperature above the drum temperature ($Q_h$); the feed is still liquid under pressure.
3. **Throttling valve:** the pressure drops suddenly (isenthalpic, $h_F$ constant). The liquid is now superheated at the low pressure, so part of it **flashes** to vapor, cooling the mixture to $T_{drum}$.
4. **Flash drum:** inlet distributor, vapor disengagement space, demister pad to stop entrained droplets, liquid hold-up (surge) zone. Vapor V (rich in the more volatile components, $y_i$) leaves the top; liquid L ($x_i$) leaves the bottom.
5. The drum is one **equilibrium stage**: $y_i = K_i x_i$, $T_V = T_L = T_{drum}$. Balances: $F = L + V$, $Fz = Lx + Vy$, $Fh_F = Lh_L + VH_V$ (adiabatic drum). Operating line on the y–x diagram: $y = -\dfrac{L}{V}x + \dfrac{F}{V}z$, which passes through $y = x = z$.
6. Degrees of freedom: C + 5 for the whole system; with the feed and $Q_{flash} = 0$ fixed, two more variables (e.g. $p_{drum}$ and V/F, or $T_{drum}$) set the flash.`,
          answer: String.raw`Pump → heater → valve (isenthalpic pressure drop, partial vaporization) → flash drum (one equilibrium stage, demister) → vapor top, liquid bottom.` },
        { id: "2012-13-Q6b", label: "(b)", marks: "25",
          topic: "flash", sub: "Ethanol–water flash from 200 °C liquid feed using the H-x chart",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A flash drum is to treat 1200 kg/hr of an ethanol-water mixture. The feed is 35 wt% ethanol and is heated to 200°C. The flash drum operates at a pressure of 1 kg/cm$^2$. Find: T$_{drum}$, weight fractions of liquid and vapor products, and liquid and vapor flow rates.

Given data:
- $C_{PL,EtOH}$ = 37.96 at 100°C, kcal/kg mole°C
- $C_{PL,W}$ = 18.0 kcal/kg-mole°C
- $C_{PV,EtOH} = 14.66 + 3.7588\times10^{-2}\,T$
- $C_{PV,W} = 7.88 + 0.32\times10^{-2}\,T$
- Both $C_{PV}$ values are in kcal/kg mole°C, with T in °C
- $\rho_{EtOH}$ = 0.789 g/mL, $\rho_W$ = 1.0 g/mL
- $\lambda_{EtOH}$ = 9.22 kcal/g-mole at 351.7 K and $\lambda_W$ = 9.717 kcal/g-mole at 373.16 K.

(Use the supplied enthalpy composition diagram)`,
          solution: String.raw`This is Wankat Problem 2.D9 with 35 wt% and 1200 kg/h (the book's version, 30 wt% and 1000 kg/h, has the answer $T_{drum}$ ≈ 88.2 °C, x = 0.146, y = 0.617, V = 326.9 kg/h).

**Given:** F = 1200 kg/h, z = 0.35 wt frac ethanol, liquid feed at 200 °C (pressurized), drum at 1 kg/cm², adiabatic.

**Find:** $T_{drum}$, x, y (wt frac), L and V (kg/h).

**Assumptions:** the feed is liquid at 200 °C (the heater is under pressure; otherwise there is nothing to flash); ideal liquid mixture (no heat of mixing); the valve and drum are adiabatic, so $h_F$ is the same before and after the valve. The H-x chart reference is liquid water and liquid ethanol at 0 °C (h = 0).

1. Feed enthalpy on the chart basis. Mass heat capacities: $C_{p,E} = 37.96/46.07 = 0.824$ kcal/kg·°C; $C_{p,W} = 18.0/18.015 = 0.999$ kcal/kg·°C.
$$
h_F = \left[0.35(0.824) + 0.65(0.999)\right](200 - 0) = 0.938 \times 200 = 187.6\ \mathrm{kcal/kg}
$$
   (The vapor $C_p$ and λ values are only needed for the alternative route of building vapor enthalpies by calculation; the chart already contains them. Densities are not needed.)
2. Plot the feed point (z = 0.35, h = 187.6 kcal/kg): it lies between the boiling line (≈ 82 kcal/kg at 0.35) and the dew line (≈ 513 kcal/kg), so the feed partly vaporizes.
3. Find the isothermal tie line through the feed point (interpolate between the printed isotherms with the auxiliary line). Readings: liquid end **x ≈ 0.20** ($h_L$ ≈ 86 kcal/kg), vapor end **y ≈ 0.65** ($H_V$ ≈ 388 kcal/kg); the tie line lies between the 86 °C and 87 °C isotherms, so $T_{drum}$ ≈ 86.5 °C (≈ 87.5 °C on the 1-atm VLE data).
4. Mass balances (lever rule):
$$
V = F\frac{z - x}{y - x} = 1200\,\frac{0.35 - 0.198}{0.650 - 0.198} = 404\ \mathrm{kg/h}, \qquad L = 1200 - 404 = 796\ \mathrm{kg/h}
$$
5. Checks: ethanol 404(0.650) + 796(0.198) = 262.6 + 157.6 = 420 = 1200(0.35) ✓; energy $[404(388) + 796(86)]/1200 = 187.6$ kcal/kg = $h_F$ ✓.

![H-x chart construction: feed point at 187.6 kcal/kg, tie line to x = 0.20 and y = 0.65](fig/2012-13-Q6b-sol.svg)

**Result:** $T_{drum}$ ≈ 86–87 °C; liquid ≈ 0.20 wt frac ethanol, vapor ≈ 0.65 wt frac ethanol; V ≈ 404 kg/h, L ≈ 796 kg/h (V/F ≈ 0.34). Expect ±0.01 in compositions and ±1 °C from chart reading.

> **Exam tip:** this is the "sequential" flash on an H-x chart: first $h_F$ from the heat capacities, then the tie line through the feed point, then the lever rule.`,
          answer: String.raw`h_F = 187.6 kcal/kg; T_drum ≈ 86–87 °C, x ≈ 0.20, y ≈ 0.65 wt frac ethanol; V ≈ 404 kg/h, L ≈ 796 kg/h.` } ] },
    { id: "2012-13-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw`A distillation column is separating methanol and water. The column has a partial reboiler, a total condenser, and a saturated liquid reflux. The feed rate is 100 kg moles/hr, and feed composition is 35 mole% methanol. The feed is a two-phase mixture that is 60% liquid and 40% vapor and will be put into the column at the optimum feed plate. The distillate composition is 0.92, and bottoms is 0.08 mole fraction methanol. CMO can be assumed. Use an external reflux ratio of L/D = 1. (Use the attached VLE diagram for methanol-water system at atmospheric pressure)`,
      parts: [
        { id: "2012-13-Q7a", label: "(a)", marks: "15",
          topic: "mccabe-thiele", sub: "Methanol–water McCabe–Thiele, two-phase feed, optimum feed stage",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find the optimum feed plate location and total number of equilibrium stages.`,
          solution: String.raw`The attached VLE diagram is not in the scanned paper; use the methanol–water data at 1 atm from the slides (Wankat Table 2-7, mol%).

**Given:** F = 100 kmol/h, z = 0.35, q = 0.6 (60% liquid), $x_D$ = 0.92, $x_B$ = 0.08, L/D = 1, total condenser, partial reboiler, saturated reflux.

**Find:** optimum feed stage and number of equilibrium stages.

**Assumptions:** CMO, 1 atm, partial reboiler is an equilibrium stage.

1. External balances:
$$
D = F\frac{z - x_B}{x_D - x_B} = 100\,\frac{0.35 - 0.08}{0.92 - 0.08} = 32.14\ \mathrm{kmol/h}, \qquad B = 67.86\ \mathrm{kmol/h}
$$
2. Internal flows: $L = D = 32.14$, $V = 2D = 64.29$; $\bar{L} = L + qF = 92.14$, $\bar{V} = V - (1-q)F = 24.29$ kmol/h.
3. Operating lines:
   - Rectifying: $y = \dfrac{L}{V}x + \dfrac{D}{V}x_D = 0.5x + 0.46$
   - Stripping: $y = \dfrac{\bar{L}}{\bar{V}}x - \dfrac{B}{\bar{V}}x_B = 3.794x - 0.2235$
   - Feed line: $y = \dfrac{q}{q-1}x - \dfrac{z}{q-1} = -1.5x + 0.875$
   - All three meet at x = 0.2075, y = 0.5638.
4. Step off from the top (equilibrium by linear interpolation in Table 2-7), switching to the stripping line on the step that crosses x = 0.2075 (optimum feed):

| stage | y | x | line used for next y |
|---|---|---|---|
| 1 | 0.9200 | 0.8116 | rectifying |
| 2 | 0.8658 | 0.6907 | rectifying |
| 3 | 0.8053 | 0.5573 | rectifying |
| 4 | 0.7386 | 0.4193 | rectifying |
| 5 | 0.6696 | 0.3073 | rectifying |
| 6 | 0.6136 | 0.2403 | rectifying |
| 7 (feed) | 0.5801 | 0.2013 | stripping |
| 8 | 0.5403 | 0.1688 | stripping |
| 9 | 0.4168 | 0.0996 | stripping |
| 10 | 0.1542 | 0.0242 | (past $x_B$) |

   Fraction of the last stage $= (0.0996 - 0.08)/(0.0996 - 0.0242) = 0.26$.
5. Check of the feed choice: feed on stage 8 gives 9.64 stages, on 9 gives 10.5 stages; feed on stage 6 or above cannot reach $x_B$ (stripping line crosses the curve). So stage 7 is optimum.

![McCabe–Thiele diagram, methanol–water: 9.26 stages with feed on stage 7](fig/2012-13-Q7a-sol.svg)

**Result:** 9.26 equilibrium stages → 10 stages = 9 equilibrium trays + partial reboiler; optimum feed on stage 7 from the top.

> **Exam tip:** a two-phase feed with 60% liquid has q = 0.6 and a feed-line slope of −1.5; always state where the three lines intersect before stepping.`,
          answer: String.raw`D = 32.14, B = 67.86 kmol/h; 9.26 equilibrium stages (10 incl. partial reboiler); optimum feed = stage 7 from top.` },
        { id: "2012-13-Q7b", label: "(b)", marks: "10",
          topic: "mccabe-thiele", sub: "Vapor composition leaving stage 3",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`What is the vapor composition leaving the third equilibrium stage below the total condenser?`,
          solution: String.raw`With a total condenser $y_1 = x_D = 0.92$; stages 1–3 are all above the feed (stage 7), so use equilibrium and the rectifying line $y_{j+1} = 0.5x_j + 0.46$ (Lewis method).

1. Stage 1: $y_1 = 0.92$ → equilibrium (Table 2-7 interpolation between 80 and 90 mol%): $x_1 = 0.8116$.
2. Stage 2: $y_2 = 0.5(0.8116) + 0.46 = 0.8658$ → $x_2 = 0.6907$.
3. Stage 3: $y_3 = 0.5(0.6907) + 0.46 = 0.8053$ → (liquid $x_3 = 0.5573$).

**Result:** vapor leaving stage 3, $y_3$ ≈ 0.805 mole fraction methanol (liquid leaving it $x_3$ ≈ 0.557).

> **Exam tip:** "third stage below the condenser" with a total condenser is stage 3; the condenser itself is not a stage.`,
          answer: String.raw`y3 ≈ 0.805 mole fraction methanol (x3 ≈ 0.557).` },
        { id: "2012-13-Q7c", label: "(c)", marks: "10",
          topic: "advanced-distillation", sub: "Open (direct) steam instead of reboiler: steam rate",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`If open steam (saturated) heating is used instead of partial reboiler, what would be the steam flow rate?`,
          solution: String.raw`**Given:** same F, z, q, $x_D$ = 0.92, $x_B$ = 0.08, L/D = 1; saturated steam S (pure water vapor) enters below the bottom tray, no reboiler.

**Assumptions:** CMO; saturated steam so $\bar{V} = S$ and $\bar{L} = B$ (each mole of steam that enters leaves as vapor); the specifications $x_D$ and $x_B$ are kept.

1. Section flows: $L = D$, $V = 2D$; $\bar{L} = L + qF = D + 60$; $\bar{V} = V - (1 - q)F = 2D - 40$.
2. Open steam: $B = \bar{L} = D + 60$ and $S = \bar{V} = 2D - 40$. (The overall balance $F + S = D + B$ is then automatically satisfied: 100 + 2D − 40 = D + D + 60.)
3. Methanol balance (steam brings none):
$$
Fz = Dx_D + Bx_B: \quad 35 = 0.92D + 0.08(D + 60) \Rightarrow D = 30.2\ \mathrm{kmol/h}
$$
4. $B = 90.2$ kmol/h, and
$$
S = 2(30.2) - 40 = 20.4\ \mathrm{kmol/h}
$$
5. Stripping operating line: $y = \dfrac{B}{S}(x - x_B) = 4.42(x - 0.08)$, which passes through $(x_B, 0)$, not the diagonal. Stepping with it (feed on stage 7 again) gives about 9.1 equilibrium stages, all of them trays.

![Column with open steam: steam S enters below the bottom tray, no reboiler](fig/2013-14-Q8b-sol.svg)

**Result:** saturated steam ≈ 20.4 kmol/h (≈ 368 kg/h); D falls from 32.1 to 30.2 kmol/h and B rises from 67.9 to 90.2 kmol/h because the condensed steam dilutes the bottoms.

> **Exam tip:** with open steam use $\bar{V} = S$, $\bar{L} = B$, and remember the steam appears in the overall balance but not in the methanol balance.`,
          answer: String.raw`Steam S ≈ 20.4 kmol/h (with D = 30.2, B = 90.2 kmol/h).` } ] },
    { id: "2012-13-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q8a", label: "(a)", marks: "10",
          topic: "batch", sub: "Is the Rayleigh equation valid for simple and multistage batch?",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"Rayleigh equation is valid for both simple and multistage batch distillation" – is this statement true? Explain.`,
          solution: String.raw`**True**, provided hold-up on the trays, in the condenser and in the accumulator is negligible.

1. Derivation (Wankat 9.1): only the still pot accumulates material. If $-dW$ moles of distillate of composition $x_D$ leave while the pot changes from $W, x_W$:
$$
-x_D\,dW = -d(Wx_W) = -W\,dx_W - x_W\,dW \Rightarrow \ln\frac{W_{final}}{F} = -\int_{x_{W,final}}^{x_F}\frac{dx_W}{x_D - x_W}
$$
   Nothing in this differential mass balance depends on how many stages are between the pot and the condenser, so the equation holds for both.
2. **What differs is the relation between $x_D$ and $x_W$ needed to integrate it:**
   - Simple batch (pot = one equilibrium stage): $x_D = y^*(x_W)$ from the equilibrium curve.
   - Multistage batch at constant reflux: at each $x_W$ the McCabe–Thiele diagram (operating line of slope L/V through $y = x = x_D$, N stages stepped down to $x_W$) gives $x_D$; tabulate $1/(x_D - x_W)$ and integrate numerically (slides' Example 11-2).
   - Multistage batch with variable reflux (constant $x_D$): the Rayleigh integral reduces to the overall balance; it still gives the same answer (Wankat Problem 9.C1).
3. It fails if column hold-up is significant (then the column inventory changes with time).

> **Exam tip:** answer "true, but" and explain that for multistage operation $x_D$ is obtained from stage calculations, not from the equilibrium curve.`,
          answer: String.raw`True: Rayleigh is a pot mass balance (negligible hold-up) valid for both; simple batch uses x_D = y*(x_W), multistage gets x_D(x_W) from McCabe–Thiele at each instant.` },
        { id: "2012-13-Q8b", label: "(b)", marks: "10",
          topic: "batch", sub: "Options when a batch still cannot meet xD and xW",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`What can be done if an existing batch system cannot produce the desired values of x$_D$ and x$_W$? Generate ideas for both operating and equipment changes.`,
          solution: String.raw`> This is Wankat Problem 9.B2; the slides give the batch methods but not this list.

**Operating changes**
- Increase the reflux ratio (up to total reflux) if the condenser, reboiler and vapor capacity allow; use **variable reflux** so $x_D$ stays constant as the pot is depleted.
- Distil more slowly (lower boilup) to reduce entrainment and raise tray efficiency.
- Stop the run earlier (accept higher $x_{W,final}$) or collect an intermediate "slop" cut that is recycled to the next batch; redistil the distillate in a second batch.
- Change pressure (vacuum often raises α for organics); use steam or entrainer distillation if an azeotrope limits the separation.
- Relax the specifications if possible.

**Equipment changes**
- Add stages: a taller column, more efficient or more closely spaced trays, or structured packing with lower HETP.
- Larger condenser/reboiler (to allow higher reflux and boilup), better reflux control.
- Connect two existing columns in series, or change to inverted batch operation (bottoms withdrawn continuously) if pure bottoms are needed.
- Combine with another separation (extraction, membrane, adsorption) or switch to continuous distillation if throughput justifies it.

If even total reflux cannot meet the specs, only more stages or a change in α (pressure, entrainer) will help; more reflux will not.`,
          answer: String.raw`Operate: higher or variable reflux, slower boilup, cut/recycle fractions, change pressure, relax specs; equipment: more or better stages/packing, bigger condenser and reboiler, columns in series, hybrid processes.` },
        { id: "2012-13-Q8c", label: "(c)", marks: "15",
          topic: "advanced-distillation", sub: "Zero reflux, below minimum reflux, total reflux on McCabe–Thiele",
          type: "sketch", syllabus: "in", repeats: ["2021-22-Q5c", "2022-23-Q6b"],
          text: String.raw`What happens if we use (i) zero reflux; (ii) less than minimum reflux; (iii) total reflux in distillation operation? Explain with the help of McCabe-Thiele diagram.`,
          solution: String.raw`![Three McCabe–Thiele sketches: zero reflux, reflux below minimum, total reflux](fig/2012-13-Q8c-sol.svg)

### (i) Zero reflux, L/D = 0
- No liquid returns, L = 0, so the rectifying line $y = \dfrac{L}{V}x + \dfrac{D}{V}x_D$ becomes horizontal, $y = x_D$.
- There is no liquid to contact the rising vapor: the rectifying section does nothing and the top product is just the vapor leaving the feed stage. The column behaves as a stripping column (or a flash): the highest attainable $x_D$ is the vapor in equilibrium with the feed region, $y^*(z)$ for a liquid feed, far below a high-purity specification.

### (ii) Reflux below the minimum, L/D < (L/D)min
- At $R_{min}$ the operating lines meet on the equilibrium curve (pinch, usually at the feed line; or a tangent pinch for non-ideal systems such as ethanol–water); the stage count is infinite. $R_{min} = \dfrac{(L/V)_{min}}{1 - (L/V)_{min}}$.
- Below $R_{min}$ the operating lines intersect above the equilibrium curve; the staircase pinches before reaching the feed, so the specified $x_D$ and $x_B$ **cannot be obtained with any number of stages**. The column will run, but it gives a poorer separation than specified.

### (iii) Total reflux, L/D = ∞
- All overhead is returned, D = B = 0 (and F = 0); L/V = 1, so both operating lines coincide with the 45° line.
- The steps are the largest possible, giving the **minimum number of equilibrium stages**, $N_{min}$ (Fenske equation for constant α: $N_{min} = \dfrac{\ln[(x_D/(1-x_D))((1-x_B)/x_B)]}{\ln\alpha}$).
- No product is made, so it is used for start-up, for efficiency testing and as the design limit. Practical reflux is 1.05–1.25 $R_{min}$ (optimum), between the two limits.`,
          answer: String.raw`Zero reflux: horizontal top line, no rectification. R < Rmin: lines cross above the curve, spec impossible even with infinite stages. Total reflux: lines on 45° line, Nmin, no product.` } ] }
  ]
});
