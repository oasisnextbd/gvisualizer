QB.paper({
  year: "2016-17", date: "08/08/2017", marks: 210,
  rules: String.raw`Section A: Q1 compulsory + any two of Q2–Q4. Section B: four questions, answer any three. Separate scripts for each section; assume reasonable values for missing data.`,
  questions: [
    { id: "2016-17-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q1a", label: "(a)", marks: "5+5",
          topic: "vle", sub: "y–x, T–x–y and H–x diagrams; T–x–y from the DePriester chart",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain briefly the relationship among y–x, temperature–composition, and enthalpy–composition diagrams. Demonstrate how a temperature–composition diagram can be generated from the DePriester chart.`,
          solution: String.raw`### Relationship among the three diagrams (binary, fixed pressure)
- All three show the **same equilibrium data** at one pressure. Each equilibrium state is a pair (x, y) at a temperature T, with enthalpies h and H.
- **T–x–y:** bubble (saturated liquid) curve T(x) and dew (saturated vapor) curve T(y). A horizontal tie line at T joins the x and y in equilibrium.
- **y–x:** plots those (x, y) pairs directly. Temperature is lost (it can be written beside the points), but it is the most convenient diagram for stage-by-stage (McCabe–Thiele) work.
- **H–x–y:** saturated-liquid (boiling) and saturated-vapor (dew) lines with sloping isothermal tie lines. It holds the same (x, y) pairs plus the enthalpies, so it is used for energy balances ($Q_C$, $Q_R$, $h_F$, q) and Ponchon–Savarit.
- Moving between them: a tie line in T–x–y or H–x gives one point on y–x. Projecting the ends of each tie line down onto the y–x plane (through the 45° line) builds the y–x curve.

![T–x–y diagram above and y–x diagram below on the same x axis for benzene–toluene at 1 atm, showing one tie line mapped to one (x, y) point](fig/2016-17-Q1a-sol.svg)

### Generating T–x–y from the DePriester chart (ideal hydrocarbons)
1. Fix the pressure p on the chart's pressure scale.
2. Choose a temperature T between the two pure-component boiling points. On the chart, $T_{bp}$ of each component is where its K = 1 at that p.
3. Draw a straight line from p to T and read $K_A$ and $K_B$ where it crosses the component scales.
4. Solve the binary equations $\sum x_i = 1$ and $\sum K_ix_i = 1$:
$$x_A=\frac{1-K_B}{K_A-K_B},\qquad y_A=K_Ax_A$$
5. Plot $(x_A, T)$ on the bubble curve and $(y_A, T)$ on the dew curve.
6. Repeat for several temperatures. The end points are the pure-component boiling points (x = y = 0 and 1). Join the points to get the T–x–y diagram; the same pairs give the y–x curve.

> **Exam tip:** say that y–x has no T and no H information, T–x–y has no H, and H–x–y has everything but is the hardest to read. For DePriester, give the two-line formula for $x_A$.`,
          answer: String.raw`All three hold the same (x, y) equilibrium at one p: tie lines of T–x–y (horizontal) and H–x–y (sloping isotherms) each give one y–x point; H–x adds enthalpies. DePriester: at fixed p pick T, read $K_A$, $K_B$, compute $x_A$ = (1 − $K_B$)/($K_A$ − $K_B$), $y_A$ = $K_Ax_A$, repeat for several T and plot.`},
        { id: "2016-17-Q1b", label: "(b)", marks: "8",
          topic: "column-balances", sub: "Purposes of reflux and boilup",
          type: "theory", syllabus: "in", repeats: ["2020-21-Q6a"],
          text: String.raw`Elaborate the purposes/functions of reflux and boilup in continuous distillation.`,
          solution: String.raw`From the flash-cascade-to-column development (Part A slides):

**Reflux ($L_0$, returned liquid from the condenser):**
- Supplies the **liquid that flows down the enriching section**. Without it, the top stages would have no liquid to contact the rising vapor.
- Each tray strips heavy component out of the vapor into this liquid, so the vapor is **enriched** in the more volatile component. A high-purity distillate needs reflux.
- Provides the cooling on each stage (the liquid partly vaporizes as vapor condenses), so all cooling is done in one top condenser instead of intermediate coolers.
- Sets $L/V$ in the rectifying section, the main operating handle on distillate purity and stage count (higher $L/D$ means fewer stages but more energy).

**Boilup ($\bar{V}$, vapor returned from the reboiler):**
- Supplies the **vapor that flows up the stripping section**, which strips the more volatile component out of the descending liquid and gives a pure bottoms.
- All heating is done in one reboiler at the bottom instead of intermediate heaters.
- Sets $\bar{V}/B$ (slope $\bar{L}/\bar{V}$), which controls bottoms purity.

**Together:**
- They turn a cascade of flash drums into one countercurrent column at constant pressure, with **no intermediate products and no compressors or pumps between stages**.
- They let the internal liquid and vapor flows be set at any desired level, independent of the feed.
- Both ends can then be pure and the recovery high.

> **Exam tip:** reflux enriches (top), boilup strips (bottom); both let the internal L and V be set independently of the feed.`,
          answer: String.raw`Reflux gives liquid in the enriching section (vapor enrichment, top cooling, sets L/V); boilup gives vapor in the stripping section (liquid stripping, bottom heating, sets $\bar{V}$/B); together they make a constant-pressure countercurrent column with controllable internal flows and pure products at both ends.`},
        { id: "2016-17-Q1c", label: "(c)", marks: "4",
          topic: "mccabe-thiele", sub: "Quick check of CMO validity",
          type: "theory", syllabus: "in", repeats: ["2013-14-Q5a", "practice-advanced-distillation-P15a"],
          text: String.raw`What is the quickest method to determine if Constant Molal Overflow (CMO) is valid in a given situation?`,
          solution: String.raw`CMO assumes that the **molar latent heat of vaporization is about the same** for every composition, and that the column is adiabatic, with negligible sensible heat and heat-of-mixing effects.

**Quickest check:** compare the **molar latent heats of the pure components** (at their normal boiling points). If they are within roughly 10%, CMO is a good assumption.

Examples (Wankat Problem 4.F3 answers, Çengel Table A-2):
- Benzene 7.35 vs toluene 8.00 kcal/mol: about 8% apart, so CMO is OK.
- Methanol 8.43 vs water 9.72 kcal/mol: about 13% apart, so CMO is only approximate.
- Acetic acid 5.83 vs water 9.72 kcal/mol: CMO is not valid.

(A more detailed check is to see whether the saturated-liquid and saturated-vapor lines are parallel on an H–x diagram in molar units.)

> **Exam tip:** compare λ in kJ/mol (or kcal/mol), not per kg.`,
          answer: String.raw`Compare the molar latent heats of the pure components: if λ (per mole) are nearly equal (within ≈ 10%), CMO is valid.`},
        { id: "2016-17-Q1d", label: "(d)", marks: "5",
          topic: "advanced-distillation", sub: "When to use stripping-only or enriching-only columns",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`When would just a stripping or just an enriching distillation column be used?`,
          solution: String.raw`**Stripping column** (feed enters the top as the liquid; reboiler at the bottom; no rectifying section, often no reflux):
- Only a **pure bottoms** is needed, and the distillate (vapor) purity is not important.
- Examples: removing light components or volatile impurities from a liquid (e.g. ammonia or organics from wastewater), or when the overhead vapor goes to another column or is recycled.
- The feed is usually a liquid, and its own flow acts as the "reflux".

**Enriching (rectifying) column** (feed enters the bottom as vapor; condenser and reflux at the top; no reboiler):
- Only a **pure distillate** is needed, and the bottoms liquid purity is not important (e.g. it is recycled or sent elsewhere).
- The feed is usually a saturated vapor (e.g. vapor from a reactor or evaporator).
- On McCabe–Thiele, the bottom operating point is set by the feed, so bottoms purity is limited.

In both cases one section is left out to save equipment and energy, when the second product does not have to be pure.

> **Exam tip:** "only one end needs to be pure" is the core idea; say where the feed enters in each case.`,
          answer: String.raw`Stripping-only: only the bottoms must be pure (liquid feed to the top, reboiler only). Enriching-only: only the distillate must be pure (vapor feed to the bottom, condenser/reflux only).`},
        { id: "2016-17-Q1e", label: "(e)", marks: "5",
          topic: "advanced-distillation", sub: "Limiting conditions: total reflux and minimum reflux",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Describe shortly when a continuous distillation column is required to operate at the limiting conditions.`,
          solution: String.raw`The limiting conditions are **total reflux** (R = ∞, D = B = 0, both operating lines on the 45° line, $N_{min}$) and **minimum reflux** ($R_{min}$, a pinch point, infinite stages).

**Total reflux is used in practice for:**
- **Start-up:** the column is run at total reflux until stable temperature and composition profiles build up, then feed and product draw-off begin.
- **Performance testing and troubleshooting:** measuring tray efficiency at plant commissioning or diagnosis. Feed and products do not interfere, and $N_{min}$ gives a reference.
- **Upsets or temporary loss of feed:** the column can be held at total reflux (hot standby) instead of being shut down.

**Minimum reflux** is never an actual operating point, since it needs infinite stages. It is a **design limit**: the operating reflux is chosen as 1.05–1.25 $R_{min}$ (often 1.2–1.5 in practice). $N_{min}$ and $R_{min}$ together bound the design.

> **Exam tip:** only total reflux is actually run (start-up, tests); minimum reflux is a design reference.`,
          answer: String.raw`Total reflux (D = B = 0, $N_{min}$) is used at start-up, for efficiency/performance testing and troubleshooting, and as hot standby; minimum reflux (pinch, infinite stages) is only a design limit, with operation at about 1.05–1.25 $R_{min}$.`},
        { id: "2016-17-Q1f", label: "(f)", marks: "7",
          topic: "advanced-distillation", sub: "Remedies when an existing column cannot meet purities",
          type: "theory", syllabus: "partial", repeats: ["2022-23-Q7b"],
          text: String.raw`What can be done if the existing continuous distillation column cannot produce the desired product purities?`,
          solution: String.raw`> The slides cover the McCabe–Thiele effects behind these remedies (reflux, feed stage, efficiency); the full list follows Wankat ch. 4 and 10.

For an existing column (N and diameter fixed):
1. **Increase the reflux ratio L/D and the boilup** $\bar{V}/B$. The operating lines move toward the 45° line, so fewer stages are needed. The limits are flooding and the condenser and reboiler capacity.
2. **Move the feed to the optimum feed stage** (use an alternative feed nozzle), so no stages are wasted on the wrong operating line.
3. **Change the feed thermal condition** (preheat or precool, i.e. change q) to unload the section that limits.
4. **Reduce the feed rate.** This allows a higher L/D without flooding the column.
5. **Change the operating pressure.** Lower pressure usually raises α. Check the condenser coolant and flooding.
6. **Improve the efficiency:** replace trays with higher-efficiency trays or structured packing, or repair damaged or weeping trays. More effective stages result.
7. **Add stages:** a second column in series, or extra trays (retray at a smaller spacing).
8. Use intermediate reboilers/condensers, or relax the specification (accept a lower purity or recovery at one end).

> **Exam tip:** the first two (more reflux, right feed stage) are the cheapest and are what examiners expect first. Then mention flooding as the limit.`,
          answer: String.raw`Raise L/D and boilup (up to flooding/heat-duty limits), use the optimum feed tray, adjust feed q, reduce feed rate, change pressure (raise α), improve tray efficiency or packing, add stages/a second column, or relax a specification.`},
        { id: "2016-17-Q1g", label: "(g)", marks: "6",
          topic: "batch", sub: "Energy use: batch versus continuous distillation",
          type: "theory", syllabus: "in", repeats: ["2020-21-Q8b", "practice-batch-P7a"],
          text: String.raw`Explain which type of distillation, batch or continuous, would use less energy.`,
          solution: String.raw`**Multistage separations: continuous distillation uses less energy.**
- A continuous column runs at steady state at the optimum reflux (≈ 1.05–1.25 $R_{min}$), with the feed on the optimum stage and both enriching and stripping sections.
- Heat can be integrated: the feed is preheated by the bottoms, and condenser heat is reused.
- A batch column has only an enriching section. The reflux must be high enough for the hardest (end) part of the run: with constant reflux, $x_D$ falls; with variable reflux, L/D must rise steeply as the still is depleted.
- The whole charge is heated and cooled each cycle, and part of the time is spent at total reflux during start-up.

**Exception: simple (single-contact) separations.** A simple batch (Rayleigh) still gives a better separation than a single continuous flash with the same fraction vaporized, because it behaves like an infinite series of differential flashes. For the same separation, simple batch distillation needs **less** vaporization, and therefore less energy, than a one-stage continuous flash. Batch steam distillation behaves the same way.

So, in the slide MCQ: simple batch beats one-stage continuous; multistage batch does not beat multistage continuous.

> **Exam tip:** state the general rule (continuous is more efficient) and the Rayleigh exception.`,
          answer: String.raw`Continuous uses less energy for multistage separations (steady optimum reflux, both sections, heat integration); only simple (one-contact) batch/steam batch distillation beats a single continuous flash, because Rayleigh distillation separates better per mole vaporized.`}
      ] },
    { id: "2016-17-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q2a", label: "(a)", marks: "14",
          topic: "flash", sub: "Binary flash with constant α: vapor composition and liquid rate",
          type: "numerical", syllabus: "in", repeats: ["2020-21-Q5d", "practice-flash-P4"],
          text: String.raw`A mixture that is 40 mole% benzene and 60 mole% toluene is to be flashed in a flash distillation system. Feed is 100 kg moles/day. We desire a liquid product that is 30 mole% benzene. The relative volatility is $\alpha_{BT}$ = 2.4. Find: (i) vapor composition, (ii) liquid flow rate.`,
          solution: String.raw`> This is the slide problem "Benzene–Toluene System (α given)" (flash deck).

**Given:** F = 100 kmol/day, z = 0.40, x = 0.30, α = 2.4.
**Find:** y and L.
**Assumptions:** equilibrium stage, constant α.

1. **Equilibrium** (vapor and liquid leaving the drum are in equilibrium):
$$y=\frac{\alpha x}{1+(\alpha-1)x}=\frac{2.4(0.30)}{1+1.4(0.30)}=\frac{0.72}{1.42}=\mathbf{0.507}$$
2. **Mass balances:** F = L + V and Fz = Lx + Vy, so
$$L=F\frac{y-z}{y-x}=100\frac{0.507-0.40}{0.507-0.30}=\mathbf{51.7\ kmol/day},\qquad V=48.3\ \mathrm{kmol/day}$$
3. **Check** with the operating line $y = -\frac{L}{V}x + \frac{F}{V}z$: slope −51.7/48.3 = −1.07, passing through (0.40, 0.40) and (0.30, 0.507) ✓. V/F = 0.483.

![McCabe–Thiele diagram of the flash: equilibrium curve for α = 2.4 and operating line of slope −1.07 from (0.40, 0.40) to (0.30, 0.507)](fig/2016-17-Q2a-sol.svg)

> **Exam tip:** when x is specified, get y from equilibrium first; the lever rule then gives L directly.`,
          answer: String.raw`y = 2.4(0.3)/(1 + 1.4(0.3)) = 0.507 benzene; L = 100(0.507 − 0.40)/(0.507 − 0.30) = 51.7 kmol/day (V = 48.3 kmol/day).`},
        { id: "2016-17-Q2b", label: "(b)", marks: "16",
          topic: "column-balances", sub: "D, B, Q_C, Q_R from the ethanol–water H–x chart (subcooled feed and reflux)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A steady-state, countercurrent, staged distillation column is to be used to separate ethanol from water. The feed is a mixture of 40 wt% ethanol and 60 wt% water at 20°C. Flow rate of feed is 20,000 kg/hr. The column operates at a pressure of 1 kg/cm². The reflux is cooled to 40°C. A reflux ratio of L/D = 3.5 is being used. We desire a bottom composition of $x_B$ = 0.002 (weight fraction ethanol) and a distillate composition of $x_D$ = 0.91 (weight fraction ethanol). The system has a total condenser and a partial reboiler. Find D, B, $Q_C$ and $Q_R$. Use Figure 2(b) for data (enthalpy–composition diagram for ethanol–water at 1 kg/cm²).`,
          solution: String.raw`> Same method as the Part A slide problem (Wankat Example 3-1: 30 wt%, 40°C, L/D = 3).

**Given:** F = 20,000 kg/h, z = 0.40 at 20°C; $x_D$ = 0.91; $x_B$ = 0.002 (mass fractions); $L_0/D$ = 3.5 with reflux (and distillate) at 40°C; total condenser; partial reboiler; adiabatic column.
**Find:** D, B, $Q_C$, $Q_R$ (kcal/h).

### 1. Chart readings (H–x chart, kcal/kg, liquids at 0°C = 0)

| stream | condition | reading |
|---|---|---|
| $H_1$ | saturated vapor at $y_1 = x_D$ = 0.91 | ≈ 284 kcal/kg |
| $h_D$ = $h_{L0}$ | liquid at 40°C, x = 0.91 | ≈ 25 kcal/kg (24.8) |
| $h_F$ | liquid at 20°C, x = 0.40 | ≈ 8.4 kcal/kg (heat of mixing makes it below 20) |
| $h_B$ | saturated liquid, x = 0.002 (≈ 99°C) | ≈ 99 kcal/kg |

![Schematic H–x chart with the dew line, boiling line, 20°C and 40°C liquid isotherms and the four readings](fig/2016-17-Q2b-sol.svg)

### 2. External mass balances
$$D=F\frac{z-x_B}{x_D-x_B}=20{,}000\frac{0.40-0.002}{0.91-0.002}=\mathbf{8767\ kg/h},\qquad B=\mathbf{11{,}233\ kg/h}$$

### 3. Condenser
- $V_1 = (1 + L_0/D)D = 4.5(8767) = 39{,}449$ kg/h.
- $Q_C = V_1(h_D - H_1) = 39{,}449(24.8 - 284) = $ **−1.02 × 10⁷ kcal/h**.

### 4. Reboiler (overall energy balance)
$$Q_R=Dh_D+Bh_B-Fh_F-Q_C=8767(24.8)+11{,}233(99)-20{,}000(8.4)+1.0225\times10^7$$
$$Q_R=2.17\times10^5+1.112\times10^6-1.68\times10^5+1.0225\times10^7\approx\mathbf{1.14\times10^7\ kcal/h}$$
That is about 13.2 MW.

**Note:** the reflux is subcooled (40°C). The external ratio $L_0/D$ = 3.5 fixes $V_1$ for the condenser balance. Inside the column the cold reflux condenses extra vapor on stage 1, so the internal L/V is slightly higher than 3.5/4.5.

> **Exam tip:** use mass units throughout with this chart. Read subcooled streams on their liquid isotherm (40°C, 20°C), not on the boiling line.`,
          answer: String.raw`D = 8767 kg/h, B = 11,233 kg/h; with $H_1$ ≈ 284, $h_D$ ≈ 25, $h_F$ ≈ 8.4, $h_B$ ≈ 99 kcal/kg: $Q_C$ = 39,449(24.8 − 284) ≈ −1.02 × 10⁷ kcal/h, $Q_R$ ≈ 1.14 × 10⁷ kcal/h.`}
      ] },
    { id: "2016-17-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q3a", label: "(a)", marks: "22",
          topic: "mccabe-thiele", sub: "McCabe–Thiele with constant α (ethanol–propanol), two-phase feed q = 0.4",
          type: "numerical", syllabus: "in", repeats: ["2020-21-Q7a", "practice-mccabe-thiele-P4a"],
          text: String.raw`Determine the number of stages and the best feed location for a column separating ethanol and propanol, α = 2.1. Feed composition = 0.48, $x_D$ = 0.96, $x_B$ = 0.04. Constant molal overflow can be assumed, and reflux is a saturated liquid. Column has a total condenser and a partial reboiler. Pressure is 101.3 kPa. It is given that L/D = 3 and q = 0.4.`,
          solution: String.raw`> Slide problem "Ethanol–Propanol System" (Part B deck, Wankat 4.D7-type).

**Given:** α = 2.1, z = 0.48, $x_D$ = 0.96, $x_B$ = 0.04, L/D = 3, q = 0.4, total condenser, partial reboiler, CMO.
**Find:** N and the optimum feed stage.

### 1. Lines
- Equilibrium: $y = \frac{2.1x}{1+1.1x}$, or $x = \frac{y}{2.1-1.1y}$.
- Rectifying: $\frac{L}{V} = \frac{3}{4} = 0.75$, so $y = 0.75x + 0.25(0.96) = 0.75x + 0.24$.
- Feed line: $y = \frac{q}{q-1}x - \frac{z}{q-1} = -0.667x + 0.80$.
- Intersection of rectifying and feed lines: **(0.395, 0.536)**.
- Stripping line from $(x_B, x_B)$ = (0.04, 0.04) through (0.395, 0.536): slope $\bar{L}/\bar{V}$ = 1.397, so $y = 1.397x - 0.0159$.
- Check per mole of feed: D = (0.48 − 0.04)/0.92 = 0.478, L = 1.435, V = 1.913, $\bar{L}$ = L + 0.4F = 1.835, $\bar{V}$ = V − 0.6F = 1.313, and 1.835/1.313 = 1.397 ✓.

### 2. Stepping from the top (equilibrium x, then the operating line for the next y)

| stage | y | x | stage | y | x |
|---|---|---|---|---|---|
| 1 | 0.960 | 0.920 | 9 | 0.535 | 0.354 |
| 2 | 0.930 | 0.863 | 10 | 0.479 | 0.305 |
| 3 | 0.887 | 0.789 | 11 | 0.410 | 0.249 |
| 4 | 0.832 | 0.702 | 12 | 0.331 | 0.191 |
| 5 | 0.767 | 0.610 | 13 | 0.251 | 0.138 |
| 6 | 0.697 | 0.523 | 14 | 0.176 | 0.093 |
| 7 | 0.632 | 0.450 | 15 | 0.113 | 0.057 |
| 8 | 0.578 | 0.395 (feed) | 16 | 0.064 | 0.032 |

- Stage 8 is the first stage whose liquid is below x = 0.395, so the optimum feed is **stage 8**. The stripping line is used from stage 9 on.
- Fraction of the last step = (0.0574 − 0.04)/(0.0574 − 0.0317) = 0.68.

![McCabe–Thiele diagram for ethanol–propanol with α = 2.1: rectifying line y = 0.75x + 0.24, feed line slope −2/3, stripping line slope 1.397, 15.7 stages](fig/2016-17-Q3a-sol.svg)

**Result:** N = 15.7 → **16 equilibrium stages, including the partial reboiler** (15 equilibrium trays + reboiler). **Optimum feed on stage 8** from the top.

> **Exam tip:** with q = 0.4 the feed line slope is q/(q − 1) = −0.67. Switch lines at the first step that crosses the intersection; that stage is the feed stage.`,
          answer: String.raw`Op lines y = 0.75x + 0.24 and y = 1.397x − 0.0159 (intersection 0.395, 0.536); N = 15.7 → 16 equilibrium stages including the partial reboiler, optimum feed on stage 8 from the top.`},
        { id: "2016-17-Q3b", label: "(b)", marks: "8",
          topic: "advanced-distillation", sub: "Real stages with Murphree vapor efficiency 75% (pseudo-equilibrium curve)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`What would be the number of stages for part (a), if you are required to consider a Murphree vapor efficiency of 75%?`,
          solution: String.raw`**Given:** same column; $E_{MV}$ = 0.75 for every tray.
**Assumptions:** the partial reboiler is an equilibrium contact ($E_{MV}$ applies to the trays only); same operating lines.

### Method (pseudo-equilibrium curve)
$$E_{MV}=\frac{y_n-y_{n+1}}{y_n^*-y_{n+1}}\ \Rightarrow\ y_n=y_{n+1}+0.75\,(y_n^*-y_{n+1})$$
On the McCabe–Thiele diagram, draw a curve 75% of the vertical distance from the operating line to the equilibrium curve. Step between this curve and the operating lines. At the bottom, the reboiler takes one full equilibrium step.

### Stepping (real trays, from the top)

| tray | y | x | tray | y | x |
|---|---|---|---|---|---|
| 1 | 0.960 | 0.933 | 11 | 0.560 | 0.388 (feed) |
| 2 | 0.940 | 0.897 | 12 | 0.526 | 0.358 |
| 3 | 0.913 | 0.853 | 13 | 0.485 | 0.323 |
| 4 | 0.880 | 0.799 | 14 | 0.436 | 0.284 |
| 5 | 0.839 | 0.737 | 15 | 0.381 | 0.241 |
| 6 | 0.793 | 0.670 | 16 | 0.321 | 0.198 |
| 7 | 0.742 | 0.601 | 17 | 0.261 | 0.157 |
| 8 | 0.691 | 0.535 | 18 | 0.203 | 0.119 |
| 9 | 0.641 | 0.476 | 19 | 0.150 | 0.086 |
| 10 | 0.597 | 0.426 | 20 | 0.104 | 0.059 |

- The partial reboiler (equilibrium) can finish the job once the liquid leaving the last tray is at or below x = 0.069. That is where the stripping line reaches $y^*(x_B)$ = 0.080.
- Fraction of tray 20 = (0.086 − 0.069)/(0.086 − 0.059) = 0.64, so 19.6 trays.

![McCabe–Thiele diagram with the pseudo-equilibrium curve for E_MV = 0.75: 20 real trays plus the partial reboiler, feed on tray 11](fig/2016-17-Q3b-sol.svg)

**Result:** **20 real trays + partial reboiler**, with the **feed on real tray 11** from the top.

Compared with (a): 14.7 equilibrium trays (15.7 stages minus the reboiler) become 19.6 real trays, an overall efficiency of 14.7/19.6 ≈ 0.75, equal to $E_{MV}$ here because the equilibrium and operating lines are nearly parallel.

> **Exam tip:** do not just divide by 0.75. Step with the pseudo-equilibrium curve, and keep the reboiler as one ideal stage.`,
          answer: String.raw`Stepping on the 75% pseudo-equilibrium curve: 19.6 → 20 real trays plus the partial reboiler (equilibrium), feed on real tray 11 (vs 15.7 ideal stages incl. reboiler in (a)).`}
      ] },
    { id: "2016-17-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q4", label: "", marks: "30",
          topic: "batch", sub: "Constant-reflux multistage batch distillation, ethanol–water (Wankat Example 9-2)",
          type: "numerical", syllabus: "in", repeats: ["practice-batch-P3a"],
          text: String.raw`We wish to batch distill 50 kg moles of a 32 mole% ethanol, 68 mole% water feed. The system has a still pot plus two equilibrium stages and a total condenser. Reflux is returned as a saturated liquid, and we use L/D = 2/3. We desire a final still pot composition of 4.5 mole% ethanol. Determine the average distillate composition, the final charge in the still pot, and the amount of distillate collected. Pressure is 1 atm. Use Figure (4) for equilibrium data (y versus x diagram for ethanol–water at 1 atm).`,
          solution: String.raw`> Wankat Example 9-2 (batch slides "Example 11-2"); the graphical area there is 0.608.

**Given:** F = 50 kmol, $x_F$ = 0.32; still pot + 2 equilibrium stages (3 equilibrium contacts); L/D = 2/3 constant; $x_{W,final}$ = 0.045.
**Find:** $x_{D,avg}$, $W_{final}$, $D_{total}$.
**Data:** ethanol–water VLE at 1 atm, Wankat Table 2-1 (same data as Figure 4), interpolated smoothly.
**Assumptions:** CMO, negligible holdup on the trays and in the accumulator, saturated reflux.

### 1. Operating line
$$\frac{L}{V}=\frac{L/D}{1+L/D}=\frac{2/3}{5/3}=0.4,\qquad y_{j+1}=0.4x_j+0.6x_D$$

### 2. $x_D$–$x_W$ pairs (three equilibrium contacts)
For a trial $x_D$:
1. $y_1 = x_D$, and $x_1$ from equilibrium.
2. $y_2 = 0.4x_1 + 0.6x_D$, and $x_2$ from equilibrium.
3. $y_W = 0.4x_2 + 0.6x_D$, and $x_W$ from equilibrium.

Repeat until $x_W$ matches each chosen still composition:

| $x_W$ | $x_D$ | $1/(x_D - x_W)$ |
|---|---|---|
| 0.045 | 0.466 | 2.378 |
| 0.050 | 0.493 | 2.258 |
| 0.070 | 0.567 | 2.012 |
| 0.100 | 0.611 | 1.959 |
| 0.150 | 0.637 | 2.052 |
| 0.1825 | 0.647 | 2.154 |
| 0.200 | 0.651 | 2.218 |
| 0.250 | 0.663 | 2.421 |
| 0.300 | 0.672 | 2.686 |
| 0.320 | 0.676 | 2.812 |

![McCabe–Thiele diagram at L/V = 0.4 for the start of the run (x_W = 0.32, x_D = 0.676) and the end (x_W = 0.045, x_D = 0.466)](fig/2016-17-Q4-sol.svg)

### 3. Rayleigh equation
$$\ln\frac{F}{W_{final}}=\int_{0.045}^{0.32}\frac{dx_W}{x_D-x_W}$$
- The integrand has a minimum near $x_W$ ≈ 0.1 (the flat part of the ethanol–water curve).
- Three-point Simpson (0.045, 0.1825, 0.32): (0.275/6)[2.378 + 4(2.154) + 2.812] = 0.633. This is too coarse for this curve shape.
- Fine Simpson's rule (400 intervals): **area = 0.618**.

![Rayleigh integrand 1/(x_D − x_W) from x_W = 0.045 to 0.32, with a minimum near 0.1; area 0.618](fig/2016-17-Q4-sol2.svg)

### 4. Results
- $W_{final} = 50e^{-0.618} = $ **26.96 kmol**.
- $D_{total} = 50 - 26.96 = $ **23.04 kmol**.
- $x_{D,avg} = \frac{50(0.32) - 26.96(0.045)}{23.04} = \frac{16.0 - 1.21}{23.04} = $ **0.642**.

(Wankat, with graphical integration, gets area 0.608: $W_{final}$ = 27.2 kmol, D = 22.8 kmol, $x_{D,avg}$ = 0.648.)

> **Exam tip:** for constant reflux, the operating lines for different $x_D$ are parallel (slope L/V). Step the same number of contacts each time. Use at least 5 integrand points, because the curve is not smooth enough for 3-point Simpson.`,
          answer: String.raw`L/V = 0.4; $x_D$ falls from 0.676 to 0.466; Rayleigh area 0.618 (Wankat graphical 0.608) → $W_{final}$ ≈ 27.0 kmol, $D_{total}$ ≈ 23.0 kmol, $x_{D,avg}$ ≈ 0.64 (0.648 in Wankat).`}
      ] },
    { id: "2016-17-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q5a", label: "(a)", marks: "12",
          topic: "column-design", sub: "Functions of downcomers and weirs; four downcomer designs",
          type: "sketch", syllabus: "in", repeats: ["2011-12-Q8d"],
          text: String.raw`Discuss the function of downcomers and weirs for staged distillation. Draw the downcomer and weir design for (i) circular pipe, (ii) straight segmental, (iii) sloped and (iv) envelope.`,
          solution: String.raw`**Functions**
- **Downcomer:** carries liquid from one tray down to the tray below. It gives the liquid enough residence time (3–7 s) for the vapor to disengage, so only clear liquid goes down. Its bottom is sealed by the liquid on the tray below, so vapor cannot bypass up the downcomer. Too much backup causes downcomer flooding.
- **Outlet weir:** holds a liquid level on the tray (2–4 in), so the vapor bubbles through a froth with good contact. It keeps the downcomer of the tray above sealed, and makes the liquid distribute evenly across the tray. The crest over the weir sets the liquid head.

![Four downcomer designs in a column section: circular pipe, straight segmental, sloped segmental and envelope](fig/2016-17-Q5a-sol.svg)

| design | features and use (slides, Wankat Fig. 10-5) |
|---|---|
| (i) circular pipe | small columns and pilot plants; the pipe can stick up as the weir |
| (ii) straight segmental | most common commercially: inexpensive, easy to install, almost impossible to install incorrectly, wide range of liquid rates |
| (iii) sloped segmental | used when vapor–liquid disengagement is difficult; keeps more active area on the tray below; more expensive and easy to install backwards |
| (iv) envelope | occasionally used for very low liquid rates |

Weirs: straight weirs are cheapest. Notched (picket-fence) weirs suit low or variable liquid rates. Adjustable weirs should be avoided, because if maladjusted they cause weeping or dry trays.

> **Exam tip:** label tray, weir, downcomer, apron gap and liquid direction on each sketch.`,
          answer: String.raw`Downcomers carry degassed liquid to the tray below with a liquid seal; weirs hold the tray liquid level, seal the downcomer above and distribute flow. Designs: circular pipe (small/pilot), straight segmental (most common, cheap, foolproof), sloped (hard disengagement, more active area), envelope (very low liquid rates).`},
        { id: "2016-17-Q5b", label: "(b)", marks: "3",
          topic: "advanced-distillation", sub: "Difficulties with Murphree efficiencies in multicomponent systems",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`What are the difficulties of using Murphree efficiencies for a multicomponent system?`,
          solution: String.raw`> The slides define Murphree efficiencies; the multicomponent problem is from Wankat Section 10.2.

- In a binary, $E_{MV}$ is the same for both components. In a **multicomponent** mixture each component has a **different** Murphree efficiency on the same tray, so one tray needs C − 1 efficiencies.
- On some trays the efficiencies can be **negative or greater than 1**. This happens because a component's denominator $y_n^* - y_{n+1}$ can be very small or change sign (e.g. a component going through a maximum in the column).
- This makes them hard to measure, correlate and predict, and awkward to use in stage-by-stage calculations. Point efficiencies and mass-transfer (rate-based) models are used instead.

> **Exam tip:** "different for every component, and can be negative" is the key sentence.`,
          answer: String.raw`Each component has a different $E_{MV}$ on the same tray, and some can be negative or above 1 (small or sign-changing driving forces), so they are hard to predict and use.`},
        { id: "2016-17-Q5c", label: "(c)", marks: "7",
          topic: "column-design", sub: "Tray efficiency ranking and efficiency versus vapor rate curve",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Write the names of different types of trays for distillation in the order of their efficiencies from high to low. Draw the efficiency vs. vapor flow rate curve and identify the weeping, flooding and design point.`,
          solution: String.raw`**Order of efficiency (slides):** valve tray ≥ sieve tray ≥ bubble-cap tray, except near flooding. Efficiency data from bubble-cap columns therefore give a conservative design for sieve and valve trays.

**Efficiency versus vapor rate (Wankat Fig. 10-13):**
- At the **design point** the efficiency is at its maximum.
- Moving to higher vapor velocity, entrainment grows. Near **flooding** the efficiency drops sharply.
- Moving to lower velocity, contact is poorer. At the **weep point** liquid drains through the holes, and the efficiency drops sharply again.
- Valve trays have a wider flat top (better turndown) than sieve trays, whose efficiency falls below about 60% of the design gas rate.

![Tray efficiency against vapor flow rate: rising from the weeping limit to a flat maximum at the design point and falling near the flooding limit; valve tray curve flatter than sieve tray](fig/2016-17-Q5c-sol.svg)

> **Exam tip:** mark both limits as vertical dashed lines and put the design point on the plateau, nearer the flooding side.`,
          answer: String.raw`Valve ≥ sieve ≥ bubble-cap. Efficiency vs vapor rate rises from the weeping limit to a plateau at the design point and falls sharply near the flooding (entrainment) limit; valve trays have a wider plateau.`},
        { id: "2016-17-Q5d", label: "(d)", marks: "5",
          topic: "column-design", sub: "Sieve-tray hole pattern and equilateral triangular pitch",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Why is it important to have a detailed pattern for sieve trays? Show equilateral triangular pitch by a diagram.`,
          solution: String.raw`> Tray layout is listed in the slides' roadmap; the details are from Wankat Section 10.5.

**Why a detailed pattern:**
- The holes are not scattered randomly. A regular pattern gives **even distribution of vapor across the active area** and uniform liquid–vapor contact, with no channeling, dead zones or local weeping.
- It fixes the open-area ratio β = $A_{hole}/A_{active}$ (6–25%, 10% first guess), which sets the hole velocity between the weep point and the entrainment/flooding limit.
- It leaves the required clearances: 2–3 in from the shell and the inlet downcomer, and 3–5 in before the outlet weir for disengagement.
- Standard punching patterns are cheaper to make.

![Equilateral triangular pitch: hole centres at the corners of equilateral triangles of side p, with each hole equidistant from six neighbours](fig/2016-17-Q5d-sol.svg)

**Equilateral triangular pitch:** each hole centre sits at a corner of an equilateral triangle of side p (the pitch), so every hole is the same distance p from its six neighbours. Typical values: p = 2.5–5 $d_0$ (3.8 $d_0$ average), $d_0$ = 1/8–1 in (½ in first guess). Hole fraction of the active area = 0.907 $(d_0/p)^2$.

> **Exam tip:** draw at least two rows offset by p/2, and mark p and $d_0$.`,
          answer: String.raw`A regular pattern gives uniform vapor distribution, sets the open-area ratio β (hole velocity between weeping and flooding), keeps clearances and is cheap to punch; triangular pitch puts holes at the corners of equilateral triangles of side p ≈ 2.5–5 $d_0$.`},
        { id: "2016-17-Q5e", label: "(e)", marks: "8",
          topic: "column-design", sub: "Sieve versus valve trays: advantages and disadvantages",
          type: "theory", syllabus: "in", repeats: ["2011-12-Q8b", "2012-13-Q4b", "2020-21-Q1a"],
          text: String.raw`Discuss the advantages and disadvantages of sieve tray and valve tray in a distillation column.`,
          solution: String.raw`| | sieve tray | valve tray |
|---|---|---|
| construction | flat deck with punched or drilled holes | large holes with movable valve covers (lift limited by feet or cage) |
| cost | lowest (base) | about 20% more than sieve |
| efficiency at design | good | about the same as sieve |
| turndown | poor: efficiency drops below ≈ 60% of design gas rate; weeps at low vapor rate | better: valve lift follows the vapor rate, so slot velocity, and hence efficiency, stays nearly constant; weeping prevented over a wide range |
| flexibility to feed-rate changes | low | high |
| pressure drop | reference | standard valve higher; can be designed lower (venturi valves) |
| fouling and solids | best: easy to clean, normal choice for fouling or solids service | more likely to foul or plug with dirty solutions; moving parts (feet) wear |
| design data | non-proprietary, anyone can design and build | proprietary: final design by the supplier |

**Summary:**
- **Sieve tray:** advantages are cheapness, simplicity, non-proprietary design and good fouling resistance. Its main disadvantage is poor turndown.
- **Valve tray:** advantages are turndown and flexibility at similar efficiency. Its disadvantages are cost, wear and fouling of the moving parts, and proprietary design.

Most new columns use valve trays; sieve trays are used for fouling service.

> **Exam tip:** examiners look for the turndown–cost–fouling trade-off.`,
          answer: String.raw`Sieve: cheapest, simple, non-proprietary, easy to clean (fouling service), but poor turndown. Valve: ~20% dearer, similar efficiency, much better turndown and flexibility, but moving parts wear/foul and design is proprietary.`}
      ] },
    { id: "2016-17-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q6a", label: "(a)", marks: "3+6=9",
          topic: "absorption", sub: "Absorption and its types (physical, chemical reversible/irreversible)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is absorption? Discuss different types of absorption.`,
          solution: String.raw`**Absorption** is the unit operation in which one or more components of a gas stream are removed by being taken up (absorbed) into a nonvolatile liquid solvent. The liquid is the added separating agent (in distillation the agent is energy). It is run as an equilibrium-stage operation with gas and liquid in countercurrent contact.

**Types (slides):**
1. **Physical absorption:** the solute dissolves because it is more soluble in the solvent than the other gases are. No reaction takes place. Example: removing butane and pentane ($C_4$–$C_5$) from refinery gas with a heavy oil; CO₂ into water. The equilibrium is described by Henry's law (y = (H/P)x).
2. **Chemical absorption:** the solute reacts with the solvent and stays in solution.
   - **Irreversible**, e.g. CO₂ or H₂S with NaOH. The spent liquid must be disposed of.
   - **Reversible**, e.g. CO₂ or H₂S with monoethanolamine (MEA) or other amines. The solvent is regenerated by heating in a stripper and recycled, so reversible systems are usually preferred. This is the gas treatment plant: absorber + heat exchanger + stripper, with steam as the stripping gas.

> **Exam tip:** give one example for each type, and say why reversible chemical absorption is preferred (solvent regeneration).`,
          answer: String.raw`Absorption removes gas components into a nonvolatile liquid solvent (mass separating agent). Types: physical (solubility only, e.g. C4–C5 into heavy oil) and chemical: irreversible (CO₂ + NaOH, spent solvent discarded) or reversible (CO₂/H₂S + MEA, solvent regenerated in a stripper, preferred).`},
        { id: "2016-17-Q6b", label: "(b)", marks: "20",
          topic: "absorption", sub: "Dilute acetone absorber: McCabe–Thiele and Kremser",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`It is desired to absorb 90% of the acetone in a gas containing 1.0 mole% acetone in air in a counter-current stage tower. The total inlet gas flow to the tower is 30 kmol/h and the total inlet pure water flow to be used to absorb acetone is 108 kmol H₂O/h. The process is to operate isothermally at 300 K and a total pressure of 101.3 kPa. The equilibrium relation for the acetone (A) in the gas–liquid is $y_A = 2.53x_A$. Determine the number of theoretical stages required for this separation graphically and repeat using the Kremser (analytical) equation.`,
          solution: String.raw`**Given:** V = 30 kmol/h with $y_{N+1}$ = 0.010; L = 108 kmol/h of pure water ($x_0$ = 0); 90% absorbed; y = 2.53x; 300 K, 101.3 kPa.
**Find:** N graphically and by Kremser.
**Assumptions:** dilute (≤ 1%), so L/V is constant; isothermal; isobaric; negligible heat of absorption; air insoluble, water nonvolatile; linear equilibrium.

### 1. End compositions
- Acetone in: 30(0.01) = 0.300 kmol/h. Absorbed: 0.270. Out with the gas: 0.030.
- $y_1 = \frac{0.030}{30 - 0.27} = 0.00101$.
- $x_N = \frac{0.270}{108 + 0.27} = 0.00249$.
- Operating line (dilute): $y = y_1 + \frac{L}{V}x = 0.00101 + 3.6x$, from (0, 0.00101) to (0.00249, 0.010).

### 2. Graphical (McCabe–Thiele, stepped from the top)

| stage | y (gas leaving) | x = y/2.53 (liquid leaving) |
|---|---|---|
| 1 | 0.00101 | 0.00040 |
| 2 | 0.00244 | 0.00097 |
| 3 | 0.00449 | 0.00177 |
| 4 | 0.00740 | 0.00292 (passes 0.00249) |

Fraction of stage 4 = (0.00249 − 0.00177)/(0.00292 − 0.00177) = 0.63, so **N ≈ 3.6 → 4 theoretical stages**.

![Dilute absorber McCabe–Thiele diagram: equilibrium y = 2.53x, operating line slope 3.6 from (0, 0.00101) to (0.00249, 0.010), 3.6 stages](fig/2016-17-Q6b-sol.svg)

### 3. Kremser
- Absorption factor: $A = \frac{L}{mV} = \frac{108}{2.53(30)} = 1.423$, so 1/A = 0.703. Also $y_1^* = mx_0 = 0$.
$$N=\frac{\ln\left[\left(1-\frac{mV}{L}\right)\frac{y_{N+1}-y_1^*}{y_1-y_1^*}+\frac{mV}{L}\right]}{\ln(L/mV)}=\frac{\ln[(0.297)(9.91)+0.703]}{\ln 1.423}=\frac{\ln 3.648}{0.3527}=\mathbf{3.67}$$
- Exact mole-ratio stepping gives 3.61, so the dilute assumption is good.

**Result:** **≈ 3.6–3.7 theoretical stages → 4 stages** by both methods.

> **Exam tip:** with x₀ = 0, $y_1^*$ = 0 and the Kremser ratio is simply $y_{N+1}/y_1$ ≈ 10 for 90% absorption.`,
          answer: String.raw`$y_1$ = 0.00101, $x_N$ = 0.00249, L/V = 3.6, A = L/mV = 1.423; graphical N ≈ 3.6, Kremser N = 3.67 → 4 theoretical stages.`},
        { id: "2016-17-Q6c", label: "(c)", marks: "6",
          topic: "absorption", sub: "Absorber or stripper? Position of the stripping operating line",
          type: "theory", syllabus: "in", repeats: ["2017-18-Q1a", "2018-19-Q1a", "2021-22-Q2b", "2022-23-Q2a", "practice-absorption-P4"],
          text: String.raw`How do you know if the column is an absorber or a stripper? Why does the operating line for stripping stay below the equilibrium curve?`,
          solution: String.raw`**Absorber or stripper:** look at the direction of solute transfer, which you can see from the end compositions compared with equilibrium.
- **Absorber:** solute goes from gas to liquid. The gas leaves leaner than it entered ($y_1 < y_{N+1}$) and the liquid leaves richer. Everywhere $y > y^*(x)$, so the operating line lies **above** the equilibrium curve on y–x.
- **Stripper:** solute goes from liquid to gas. The liquid leaves leaner and the gas richer, and $y < y^*(x)$.
- A quick check is to plot the inlet points. If $y_{in} > mx$ of the liquid it contacts, the column absorbs; if $y < mx$, it strips. Strippers are also usually hot or at low pressure with an inert or steam gas feed, which makes m large.

**Why the stripping operating line lies below the equilibrium curve:**
- For mass transfer from liquid to gas, the driving force $y^*(x) - y$ must be positive on every stage. The actual gas composition must be **less** than the composition in equilibrium with the liquid it meets.
- The operating line gives the actual (x, y) pairs of passing streams, so it must lie below the equilibrium curve y* = f(x).
- If it touched the curve, the driving force would be zero there: a pinch, which needs infinite stages and corresponds to the minimum gas rate. If it crossed above, the solute would be absorbed instead.

> **Exam tip:** absorber, line above the curve; stripper, line below. Explain it with the sign of the driving force.`,
          answer: String.raw`Decide from the direction of transfer: absorber (gas → liquid, y > y*, operating line above equilibrium) or stripper (liquid → gas, y < y*). The stripping line lies below the curve because the driving force y* − y must be positive everywhere; touching the curve is a pinch (minimum gas).`}
      ] },
    { id: "2016-17-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q7a", label: "(a)", marks: "12",
          topic: "immiscible-extraction", sub: "Types of extractors and selection for high capacity and high stage efficiency",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q4a", "2021-22-Q3a"],
          text: String.raw`Discuss different types of extractors. For a process requiring high capacity and high stage efficiency, which type of extractor should be selected?`,
          solution: String.raw`Types (immiscible-extraction slides, extractor-types table):

| extractor | examples | general features |
|---|---|---|
| unagitated columns | plate, packed, spray columns | low capital and operating cost, simple, handles corrosive material; relatively **low efficiency** |
| **mixer-settlers** | mixer-settler, vertical mixer-settler, Morris contactor, static mixers | **higher stage efficiency**, **high capacity**, handles wide solvent ratios, good flexibility, reliable scale-up, handles viscous liquids; needs a large area, expensive for many stages |
| pulsed columns | perforated plate, packed | low HETP, no internal moving parts, many stages possible |
| rotary-agitation columns | rotating disk contactor (RDC), Oldshue–Rushton, Scheibel, Kühni | reasonable capacity and HETP, many stages, moderate cost |
| reciprocating-plate columns | Karr column | high throughput, low HETP, versatile, handles solids and emulsifying mixtures |
| centrifugal extractors | Podbielniak, Alfa-Laval, Westfalia | short contact time (unstable materials), small space, handles emulsions and small density differences; high cost; up to about 7 stages |
| membrane extractors | Celgard membrane | no flooding, no emulsion, very low liquid rates possible; chemical compatibility issues |

Selection heuristics (slides):
- 1–2 stages: mixer-settlers.
- 3–5 stages: sieve-tray or packed column, or a membrane contactor.
- More than 5 stages: mechanically agitated columns.

**Answer: mixer-settlers.** They combine high capacity with high (near-equilibrium) stage efficiency and handle wide solvent ratios. A mixer-settler cascade is used if several stages are needed.

> **Exam tip:** quote at least four extractor families with one feature each, then pick the mixer-settler and say why.`,
          answer: String.raw`Unagitated columns, mixer-settlers, pulsed columns, rotary-agitated columns (RDC, Scheibel, Kühni), reciprocating-plate (Karr), centrifugal (Podbielniak) and membrane extractors; for high capacity with high stage efficiency choose mixer-settlers.`},
        { id: "2016-17-Q7b", label: "(b)", marks: "9",
          topic: "immiscible-extraction", sub: "Definitions: extraction, raffinate, extract",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Define the following: (i) Extraction, (ii) Raffinate, (iii) Extract.`,
          solution: String.raw`(i) **Extraction (liquid–liquid extraction):** a separation in which one or more solutes are removed from a liquid (the feed, solute + diluent) by transferring them into a second, immiscible or partially miscible liquid phase, the **solvent**. The separation is based on the different solubility of the solute in the two phases. The solvent is a mass separating agent that must be recovered later. No vaporization is needed, so it suits heat-sensitive materials (e.g. penicillin, proteins). Example: aromatics from paraffins with sulfolane.

(ii) **Raffinate:** the diluent-rich liquid phase leaving an extraction stage or cascade, from which the solute has been (partly) removed. Notation R, $x_A$. Example: water leaving the acetic acid–isopropyl ether extractor.

(iii) **Extract:** the solvent-rich liquid phase leaving the stage or cascade, which contains the extracted solute. Notation E, $y_A$. Example: the ether phase carrying acetic acid.

At equilibrium the raffinate and extract are joined by a tie line.

> **Exam tip:** name the phase each stream is rich in (diluent for raffinate, solvent for extract).`,
          answer: String.raw`Extraction: transfer of solute from a liquid feed into a second immiscible/partially miscible solvent phase. Raffinate: the diluent-rich phase left after solute removal. Extract: the solvent-rich phase carrying the solute.`},
        { id: "2016-17-Q7c", label: "(c)", marks: "14",
          topic: "partial-extraction", sub: "Countercurrent stage determination with the difference point (construction)",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`For a partially miscible countercurrent liquid–liquid extraction, consider that the inlet composition and mass flow rate of feed or raffinate and solvent or extract are completely known. The solute concentration in raffinate is required to be reduced to a desired low value. All the necessary equilibrium data at the operational temperature and pressure are also available. With the aid of clean hand drawing, demonstrate the determination of equilibrium stages required for this separation.`,
          solution: String.raw`**Known:** F = $R_{N+1}$ (flow and composition), solvent $E_0$ (flow and composition), target raffinate $x_{A,1}$, and the equilibrium data (binodal and tie lines) at the operating T, p. Stages are numbered 1 at the raffinate exit to N at the feed end.

**Construction on a right-triangle diagram** (x axis = mass fraction diluent, y axis = mass fraction solute; Wankat Example 13-4):
1. **Plot the equilibrium data:** the raffinate and extract branches of the binodal, the tie lines, and the conjugate line for interpolating new tie lines.
2. **Plot the known streams:** $E_0$ (S), $R_{N+1}$ (F), and $R_1$ on the raffinate branch at $x_{A,1}$.
3. **Mixing point M:** on line $E_0F$ at $x_{A,M} = \frac{E_0y_{A,0} + Fx_{A,F}}{E_0 + F}$ (lever rule).
4. **Extract product $E_N$:** extend $R_1M$ to the extract branch. Flows follow from the lever rule: $E_N/M = \overline{R_1M}/\overline{R_1E_N}$.
5. **Difference point Δ:** $\Delta = E_0 - R_1 = E_j - R_{j+1} = E_N - R_{N+1}$, a constant net flow. Δ is the intersection of lines $E_0R_1$ and $E_NF$ extended. It usually lies outside the triangle, or use its coordinates $x_{A,\Delta} = (E_0y_{A,0} - R_1x_{A,1})/\Delta$.
6. **Step off stages:**
   - From $R_1$, follow the tie line (equilibrium) to $E_1$.
   - Draw the operating line from Δ through $E_1$; it meets the raffinate branch at $R_2$.
   - From $R_2$, the tie line gives $E_2$. The line from Δ through $E_2$ gives $R_3$, and so on.
7. **Stop** when an extract $E_j$ reaches or passes $E_N$. The last stage is counted as a fraction, e.g. $\overline{E_{N-1}E_N}/\overline{E_{N-1}E_j}$.

![Worked example of the construction: acetic acid–water–isopropyl ether with M, R1, EN, the difference point Δ and stepped tie lines giving 5.8 stages](fig/2016-17-Q7c-sol.svg)

The example (Wankat Example 13-4: 1000 kg/h of 35% acetic acid, 1475 kg/h of pure isopropyl ether, 10% acid in the raffinate) gives Δ at (−0.66, −0.075), $E_N$ at 15.6% acid, and N ≈ 5.8 stages.

> **Exam tip:** draw large and neat, label every point (F, S, M, $R_1$, $E_N$, Δ, $R_j$, $E_j$), and alternate tie line (equilibrium) with Δ line (operating) in every stage.`,
          answer: String.raw`Plot the binodal and tie lines; locate F, S, $R_1$; find M on SF, then $E_N$ on $R_1M$ extended; find Δ = intersection of $E_0R_1$ and $E_NF$; step tie line $R_j$ → $E_j$, then Δ-line $E_j$ → $R_{j+1}$, until $E_N$ is passed (e.g. 5.8 stages in Wankat Ex. 13-4).`}
      ] },
    { id: "2016-17-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q8a", label: "(a)", marks: "5",
          topic: "leaching", sub: "Assumptions of the McCabe–Thiele method for washing",
          type: "theory", syllabus: "in", repeats: ["2015-16-Q8b", "2017-18-Q2a", "2022-23-Q4b", "2023-24-Q5c"],
          text: String.raw`State the assumptions for the McCabe–Thiele calculation method for washing.`,
          solution: String.raw`For the washing McCabe–Thiele diagram (equilibrium y = x, straight operating line of slope U/O), the slides list:
1. **No solids in the overflow, and the solids do not dissolve**, so the solid flow rate is constant.
2. **Constant fluid and solid densities** ($\rho_f$, $\rho_s$): the solute has little effect on density, or the solution is dilute.
3. **Constant porosity ε**: the same volume of liquid is entrained per unit of solid from stage to stage.

Assumptions 1–3 make the underflow liquid U constant. An overall mass balance then makes the overflow O constant too.

4. The solute is not adsorbed by the solid, so the equilibrium is **y = x** (same concentration in underflow and overflow liquid). The stages are equilibrium (well-mixed) stages.
5. Isothermal, isobaric operation with negligible heat of mixing.

Then $y_{j+1} = \frac{U}{O}x_j + \left(y_{N+1} - \frac{U}{O}x_N\right)$ is a straight line, and the Kremser equation applies with m = 1.

> **Exam tip:** the three that matter are no solids in the overflow, constant densities, and constant porosity, which together give constant U and O.`,
          answer: String.raw`Solids not in the overflow and insoluble, constant densities (dilute), constant porosity → constant U and O; solute not held by the solid (y = x), equilibrium stages, isothermal/isobaric.`},
        { id: "2016-17-Q8b", label: "(b)", marks: "18",
          topic: "leaching", sub: "Countercurrent washing recovery by Kremser and McCabe–Thiele (NaOH from CaCO3)",
          type: "numerical", syllabus: "in", repeats: ["practice-leaching-P1a"],
          text: String.raw`During production of sodium hydroxide by the lime soda process, a slurry of CaCO₃ particles in a dilute sodium hydroxide solution emerges. A four stage counter-current washing system is used. The underflow entrains approximately 4 kg liquid/kg calcium carbonate solids. The inlet water is pure water. If 10 kg wash water/kg calcium carbonate solids is used, predict the recovery of NaOH in the wash liquor. First determine with the Kremser equation, then verify with the McCabe–Thiele method.`,
          solution: String.raw`> Wankat Example 14-1 with 4 kg/kg (instead of 3) entrained and 10 kg/kg (instead of 8) wash water.

**Given:** basis 1 kg/h CaCO₃; U = 4 kg liquid/h (constant); O = 10 kg wash water/h; N = 4; $y_{N+1}$ = 0; equilibrium y = x (m = 1).
**Find:** recovery = 1 − $x_N/x_0$.
**Assumptions:** constant U and O (washing assumptions), dilute, equilibrium stages.

### 1. Kremser (liquid-phase form)
$$\frac{x_N-x_N^*}{x_0-x_N^*}=\frac{1-\frac{mO}{U}}{1-\left(\frac{mO}{U}\right)^{N+1}},\qquad x_N^*=\frac{y_{N+1}}{m}=0,\qquad \frac{mO}{U}=\frac{10}{4}=2.5$$
$$\frac{x_N}{x_0}=\frac{1-2.5}{1-2.5^5}=\frac{-1.5}{1-97.66}=0.01552$$
**Recovery = 1 − 0.0155 = 0.9845, about 98.4% of the NaOH** goes to the wash liquor. $x_0$ is not needed.

### 2. McCabe–Thiele check (compositions as $x/x_0$)
- Overall balance: $Oy_1 = U(x_0 - x_N)$, so $y_1 = 0.4(1 - 0.0155) = 0.394$.
- Operating line: $y_{j+1} = \frac{U}{O}x_j + \left(y_{N+1} - \frac{U}{O}x_N\right) = 0.4x_j - 0.0062$, from $(x_N, 0)$ to $(x_0, y_1) = (1, 0.394)$.
- Equilibrium: y = x. Step from the solids-inlet end $(x_0, y_1)$:

| stage | y (overflow leaving) | x = y (underflow leaving) |
|---|---|---|
| 1 | 0.394 | 0.394 |
| 2 | 0.151 | 0.151 |
| 3 | 0.054 | 0.054 |
| 4 | 0.0155 | 0.0155 = $x_N$ ✓ |

Exactly four stages reach $x_N/x_0$ = 0.0155, which confirms the Kremser result.

![Washing McCabe–Thiele diagram in x/x0 units: equilibrium y = x and operating line slope U/O = 0.4 from (0.0155, 0) to (1, 0.394), four stages](fig/2016-17-Q8b-sol.svg)

> **Exam tip:** in washing, m = 1, so the Kremser factor is just O/U. Recovery depends only on O/U and N, not on the NaOH concentration.`,
          answer: String.raw`mO/U = 2.5: $x_N/x_0$ = (1 − 2.5)/(1 − 2.5⁵) = 0.0155, so recovery ≈ 98.4%; McCabe–Thiele with y = x and slope U/O = 0.4 gives exactly four stages to $x_N/x_0$ = 0.0155.`},
        { id: "2016-17-Q8c", label: "(c)", marks: "12",
          topic: "leaching", sub: "Countercurrent leaching cascade, McCabe–Thiele diagram and operating line",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw a countercurrent cascade for leaching and the McCabe–Thiele diagram for this system (by hand). Write the equation for the operating line and state the assumptions made in this case.`,
          solution: String.raw`**Cascade:** solids $F_{solid}$ (kg insoluble solid/h) enter stage 1 with $X_0$ (kg solute/kg solid) and leave stage N with $X_N$. Fresh solvent $F_{solv}$ (kg solvent/h) enters stage N with $Y_{N+1}$ and leaves stage 1 as the extract (overflow) with $Y_1$ (kg solute/kg solvent).

![Countercurrent leaching cascade and McCabe–Thiele diagram: equilibrium Y = mX, operating line slope F_solid/F_solv from (X_N, Y_N+1) to (X_0, Y_1), stepped stages](fig/2016-17-Q8c-sol.svg)

**Operating line** (balance around stages 1 to j):
$$F_{solid}X_0+F_{solv}Y_{j+1}=F_{solid}X_j+F_{solv}Y_1\ \Rightarrow\ Y_{j+1}=\frac{F_{solid}}{F_{solv}}X_j+Y_1-\frac{F_{solid}}{F_{solv}}X_0$$
This is a straight line of slope $F_{solid}/F_{solv}$ through $(X_0, Y_1)$ and $(X_N, Y_{N+1})$. It lies **below** the equilibrium curve because solute is transferred from the solid to the solvent. Step from $(X_0, Y_1)$ between the equilibrium curve and the operating line.

**Assumptions (slides, idealized leaching):**
1. Isothermal.
2. Isobaric.
3. No solvent dissolves into the solid.
4. **No solvent entrained with the solid** (underflow entrainment ignored).
5. An insoluble solid backbone (matrix), so $F_{solid}$ is constant.
6. Negligible heat of mixing of solute in solvent.
7. **Equilibrium stages.**
8. No solid carried with the overflow liquid.

The equilibrium curve (solute between solvent and solid) must be measured. Assumptions 4 and 7 are often poor, because entrainment always occurs and diffusion in solids is slow. They are lumped into an **effective equilibrium constant**, $Y = m_E X$. If this is linear, the Kremser equation can be used.

> **Exam tip:** write Y and X with their units (per kg solvent and per kg insoluble solid), and mark the slope $F_{solid}/F_{solv}$ on the sketch.`,
          answer: String.raw`Operating line $Y_{j+1}$ = ($F_{solid}/F_{solv}$)$X_j$ + $Y_1$ − ($F_{solid}/F_{solv}$)$X_0$ (straight, below the equilibrium curve), stepped from ($X_0$, $Y_1$); assumes isothermal, isobaric, no solvent dissolved in or entrained with the solid, insoluble backbone, negligible heat of mixing, equilibrium stages, no solids in the overflow (or an effective $m_E$).`}
      ] }
  ] });
