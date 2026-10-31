QB.paper({
  year: "2015-16", date: "14/01/2017", marks: 210,
  rules: String.raw`Section A: four questions, answer any three. Section B: four questions, answer any three. Separate scripts for each section; attach all plots and figures used.`,
  questions: [
    { id: "2015-16-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q1a", label: "(a)", marks: "15",
          topic: "vle", sub: "Reading a T–x–y diagram with an azeotrope (2-propanol–water) and the lever rule",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`If a 40 mole% 2-propanol, 60 mole% water mixture at 60°C and 1 atm is heated to 85°C:

(i) What fraction of the mixture will be vaporized? What is the composition of the vapor phase?

(ii) What happens if the heating is repeated with a mixture containing 60 mole% 2-propanol and 40 mole% water? (VLE diagram attached: T versus mole fraction 2-propanol in liquid (x) and vapour (y) at 1 atm, 78–102°C, minimum-boiling azeotrope near x = 0.68, 80°C.)`,
          solution: String.raw`**Given:** 2-propanol (IPA)–water at 1 atm; T–x–y diagram on the paper; heated from 60°C to 85°C.
**Find:** fraction vaporized and vapor composition for z = 0.40; behaviour for z = 0.60.
**Method:** locate the point (z, 85°C) on the T–x–y diagram. If it lies between the bubble and dew curves, draw the 85°C tie line and apply the lever rule.

Readings from the attached figure (gridlines every 2°C and 0.02 in mole fraction):

| curve | at 85°C | other readings |
|---|---|---|
| bubble (saturated liquid) | x ≈ 0.07 | 100°C at x = 0; ≈ 82°C at x = 0.2 |
| dew (saturated vapor) | y ≈ 0.43 | dew T at y = 0.40 ≈ 86.6°C; at y = 0.60 ≈ 80.8°C |
| azeotrope | x = y ≈ 0.68 at ≈ 80.1°C | minimum-boiling |

![T–x–y diagram of 2-propanol–water redrawn from the paper, with the 85°C tie line from x = 0.07 to y = 0.43](fig/2015-16-Q1a-sol.svg)

### (i) z = 0.40 IPA
1. At 60°C the mixture is subcooled liquid: the bubble point of z = 0.40 is ≈ 81°C.
2. At 85°C the point (0.40, 85°C) lies between the bubble curve (x = 0.07) and the dew curve (y = 0.43). The mixture is two-phase.
3. Lever rule on the tie line:
$$\frac{V}{F}=\frac{z-x}{y-x}=\frac{0.40-0.07}{0.43-0.07}=\frac{0.33}{0.36}=0.92$$
4. About **92% of the feed is vaporized**. The vapor is **≈ 43 mol% 2-propanol, 57 mol% water**. The small remaining liquid (8%) is ≈ 7 mol% IPA.

### (ii) z = 0.60 IPA
1. The dew temperature of a 60 mol% mixture is only ≈ 80.8°C (the dew curve almost touches the bubble curve here, because 0.60 is close to the azeotrope).
2. 85°C is above the dew point, so the point (0.60, 85°C) lies in the vapor region. The mixture is **completely vaporized** (V/F = 1) and is a slightly **superheated vapor of 60 mol% IPA**, the same composition as the feed.
3. The two-phase region near the azeotrope is very narrow (about 80.1–81°C), so the second mixture boils almost like a pure component. No separation is obtained.

> **Exam tip:** on a T–x–y diagram, read x on the bubble (lower) curve and y on the dew (upper) curve at the same T. The lever rule is V/F = (z − x)/(y − x). State your chart readings.`,
          answer: String.raw`(i) Two-phase at 85°C: x ≈ 0.07, y ≈ 0.43, V/F = (0.40 − 0.07)/(0.43 − 0.07) ≈ 0.92 (92% vaporized), vapor ≈ 43 mol% IPA. (ii) z = 0.60 lies above its dew point (≈ 80.8°C), so it is totally vaporized: superheated vapor of 60 mol% IPA, no separation.`},
        { id: "2015-16-Q1b", label: "(b)", marks: "20",
          topic: "flash", sub: "Binary flash at fixed V/F from a T–x–y diagram, and vertical drum sizing",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`A flash drum is to flash 1000 kmoles/hr of a feed that is 65 mole% benzene and 35 mole% toluene at 1 atm pressure. V/F = 0.4 (VLE diagram attached: T–x–y for benzene/toluene at 1.0 atm, 350–385 K).

(i) Find $T_{drum}$, the liquid mole fraction and the vapor mole fraction.

(ii) Find the diameter and height required for a vertical flash drum.

Given: $\rho_L$ = 0.87 g/cc, $\rho_V$ = 0.00314 g/cc, $K_{drum}$ = 0.25.`,
          solution: String.raw`> Part (i) is the flash method of the slides. Drum sizing (part ii) is in Wankat Section 2.9; the slides only show the drum components.

**Given:** F = 1000 kmol/h, z = 0.65 benzene, p = 1 atm, V/F = f = 0.4, so V = 400 and L = 600 kmol/h. $\rho_L$ = 870 kg/m³, $\rho_V$ = 3.14 kg/m³, $K_{drum}$ = 0.25 ft/s (Wankat's $K_{drum}$ is in ft/s).
**Find:** $T_{drum}$, x, y; drum D and $h_{total}$.
**Assumptions:** equilibrium stage, ideal benzene–toluene (the attached T–x–y diagram is Raoult's law); molar masses benzene 78.12 and toluene 92.14 kg/kmol (Çengel Table A-1 for benzene).

### (i) Drum temperature and compositions
1. Mass balance and operating line: $z = (1-f)x + f y$, or $y = -\frac{1-f}{f}x + \frac{z}{f} = -1.5x + 1.625$.
2. On the T–x–y diagram, find the temperature at which the tie line satisfies $\frac{V}{L} = \frac{z - x}{y - z} = \frac{0.4}{0.6}$, that is $(z-x) : (y-z) = 2 : 3$.
3. Checked numerically with Raoult's law and standard Antoine constants (Perry; mmHg, °C: benzene 6.90565, 1211.033, 220.79; toluene 6.95464, 1344.8, 219.482), solving the Rachford–Rice equation $\sum z_i(K_i-1)/[1+f(K_i-1)] = 0$:

| quantity | value |
|---|---|
| $T_{drum}$ | **363.3 K (90.1°C)** (figure: ≈ 363 K) |
| $K_B$, $K_T$ | 1.348, 0.537 ($\alpha$ = 2.51) |
| x (liquid) | **0.571 benzene** |
| y (vapor) | **0.769 benzene** |

4. Check: $0.6(0.571) + 0.4(0.769) = 0.343 + 0.307 = 0.650$ ✓, and on the figure the 363 K tie line runs from x ≈ 0.57 to y ≈ 0.77.

![T–x–y diagram of benzene–toluene at 1 atm with the 363.3 K tie line through z = 0.65](fig/2015-16-Q1b-sol.svg)

### (ii) Vertical drum size (Wankat Section 2.9)
1. Permissible vapor velocity:
$$u_{perm}=K_{drum}\sqrt{\frac{\rho_L-\rho_V}{\rho_V}}=0.25\sqrt{\frac{0.87-0.00314}{0.00314}}=0.25(16.62)=4.15\ \mathrm{ft/s}=1.266\ \mathrm{m/s}$$
2. Vapor mass flow: $MW_V = 0.769(78.12) + 0.231(92.14) = 81.35$ kg/kmol, so $\dot m_V = 400 \times 81.35 = 32{,}540$ kg/h = 9.04 kg/s.
3. Volumetric flow: $Q_V = \dot m_V/\rho_V = 9.04/3.14 = 2.88$ m³/s.
4. Cross-section: $A_c = Q_V/u_{perm} = 2.88/1.266 = 2.27$ m².
5. Diameter: $D = \sqrt{4A_c/\pi} = \sqrt{4(2.27)/\pi} = 1.70$ m (5.6 ft). Round up to the next 6-in size: **D = 6.0 ft = 1.83 m**.
6. Height: rule of thumb $h_{total}/D$ = 3 to 5. Taking 4: **$h_{total}$ ≈ 4(1.83) = 7.3 m (24 ft)**. The range is 5.5–9.1 m.

> **Exam tip:** $K_{drum}$ gives $u_{perm}$ in ft/s. Convert before you mix it with SI flows, and size the drum on the vapor flow V, not the feed.`,
          answer: String.raw`(i) $T_{drum}$ ≈ 363 K (90.1°C), x = 0.571, y = 0.769 benzene (L = 600, V = 400 kmol/h). (ii) $u_{perm}$ = 4.15 ft/s (1.27 m/s), A = 2.27 m², D = 1.70 m → use 1.83 m (6 ft); $h_{total}$ ≈ 4D ≈ 7.3 m.`}
      ] },
    { id: "2015-16-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q2a", label: "(a)", marks: "10",
          topic: "mccabe-thiele", sub: "CMO flow profiles for subcooled and two-phase feeds",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`For distillation at constant molal overflow, show the flow profiles schematically (plot L, V, $\bar{L}$ and $\bar{V}$ versus stage location) for (i) sub-cooled liquid feed, (ii) two-phase feed.`,
          solution: String.raw`Under CMO the liquid and vapor flows are constant within each section: L, V above the feed and $\bar{L}$, $\bar{V}$ below it. They change only at the feed stage. The feed-stage balances (Part B slides) are
$$\bar{L}=L+qF,\qquad \bar{V}=V-(1-q)F,\qquad q=\frac{H-h_F}{H-h}$$

![Two panels of flow rate versus stage location: subcooled feed raises both liquid and vapor below the feed; two-phase feed raises liquid and lowers vapor below the feed](fig/2015-16-Q2a-sol.svg)

### (i) Subcooled liquid feed (q > 1)
- The cold feed condenses some vapor on the feed stage to heat itself to the bubble point.
- $\bar{L} = L + qF > L + F$: the liquid jumps by more than F.
- $\bar{V} = V + (q-1)F > V$: the vapor below the feed is larger than above, because part of the rising vapor condenses on the feed stage.
- Profile: two vertical lines in each section, each with a step at the feed stage. Both steps increase going down.

### (ii) Two-phase feed (0 < q < 1)
- The liquid fraction q joins the downflowing liquid and the vapor fraction (1 − q) joins the rising vapor.
- $\bar{L} = L + qF$ (an increase of less than F).
- $\bar{V} = V - (1-q)F < V$: the vapor is smaller below the feed.
- Profile: L steps up at the feed and V steps down going downward.

| feed | q | $\bar{L}-L$ | $\bar{V}-V$ |
|---|---|---|---|
| subcooled liquid | > 1 | > F | > 0 |
| saturated liquid | 1 | F | 0 |
| two-phase | 0–1 | qF | −(1 − q)F |
| saturated vapor | 0 | 0 | −F |
| superheated vapor | < 0 | < 0 | < −F |

> **Exam tip:** draw stage number on the vertical axis (top at the top) and flow on the horizontal axis. Use vertical lines in each section with a step only at the feed stage, and label the step sizes with qF and (q − 1)F.`,
          answer: String.raw`CMO gives constant L, V above and $\bar{L}$, $\bar{V}$ below, with steps only at the feed: subcooled (q > 1) $\bar{L}$ = L + qF > L + F and $\bar{V}$ = V + (q − 1)F > V; two-phase $\bar{L}$ = L + qF and $\bar{V}$ = V − (1 − q)F < V.`},
        { id: "2015-16-Q2b", label: "(b)", marks: "25",
          topic: "advanced-distillation", sub: "Open steam column: minimum reflux, stages at 2Rmin and steam rate (ethanol–water)",
          type: "numerical", syllabus: "in", repeats: ["2023-24-Q3a"],
          text: String.raw`A distillation column is separating 1000 moles/hr of a 32 mole% ethanol, 68 mole% water mixture. The feed enters as a sub-cooled liquid that will condense one mole of vapor on the feed plate for every four moles of feed. The column has a total condenser and uses open steam heating. A distillate product $y_D$ = 0.75 and a bottoms product $x_B$ = 0.1 are desired. CMO is valid. The steam used is pure saturated water vapor. (VLE data table for ethanol–water attached.)

(i) Find the minimum reflux ratio, $(L/D)_{min}$.

(ii) Use $L/D = 2(L/D)_{min}$ and find the number of equilibrium stages and the optimum feed plate location.

(iii) Find the steam flow rate used.`,
          solution: String.raw`> This is Wankat Problem 4.D33 with a total condenser instead of a partial condenser. With a total condenser, $x_D = y_D$ = 0.75, and $(L/D)_{min}$ is the same as in 4.D33 (book answer 0.659).

**Given:** F = 1000 mol/h, z = 0.32, $x_D$ = 0.75, $x_B$ = 0.10, total condenser, open steam S (pure, saturated), CMO.
**Find:** $(L/D)_{min}$; N and feed stage at $L/D = 2(L/D)_{min}$; S.
**Data:** ethanol–water VLE at 1 atm, Wankat Table 2-1 (also in the flash slides). The attached table is the same data but illegible on the scan. Interpolated with a monotone cubic.
**Assumptions:** CMO; with saturated open steam $\bar{V} = S$ and $\bar{L} = B$.

### 1. Feed condition and feed line
One mole of vapor condenses per 4 mol of feed, so $\bar{L} = L + F + F/4$:
$$q=\frac{\bar{L}-L}{F}=1.25,\qquad y=\frac{q}{q-1}x-\frac{z}{q-1}=5x-1.28$$
The feed line meets the equilibrium curve at (0.377, 0.604).

### 2. (i) Minimum reflux
- The rectifying line runs from $(x_D, x_D)$ = (0.75, 0.75). Ethanol–water has an S-shaped curve, so check for a tangent pinch as well as the feed-line intersection.
- Slope to the feed-line intersection: (0.75 − 0.604)/(0.75 − 0.377) = 0.392.
- Steepest line from (0.75, 0.75) that touches the curve: tangent at x ≈ 0.50 (y ≈ 0.650), slope 0.393. This one controls, marginally.
$$\left(\frac{L}{V}\right)_{min}=0.393\ \Rightarrow\ \left(\frac{L}{D}\right)_{min}=\frac{0.393}{1-0.393}=\mathbf{0.65}$$
(Wankat's answer to 4.D33 is 0.659; the difference comes from interpolating the data.)

### 3. Flows at $L/D = 2(0.647) = 1.294$
- Open steam: $F + S = D + B$ and $Fz = Dx_D + Bx_B$ (steam has no ethanol).
- CMO at the feed: $\bar{L} = L + qF = 1.294D + 1250$ and $B = \bar{L}$.
- Ethanol balance: $320 = 0.75D + 0.10(1.294D + 1250)$, which gives **D = 221.7 mol/h** and **B = $\bar{L}$ = 1536.9 mol/h**.
- $L = 1.294D = 286.9$ and $V = L + D = 508.6$ mol/h.
- $\bar{V} = V + (q-1)F = 508.6 + 250 = 758.6$ mol/h.

### 4. Operating lines
- Rectifying: $y = \frac{L}{V}x + \left(1-\frac{L}{V}\right)x_D = 0.564x + 0.327$.
- Stripping with open steam passes through $(x_B, 0)$: $y = \frac{\bar{L}}{\bar{V}}(x - x_B) = 2.026(x - 0.10)$.
- The two lines intersect at (0.362, 0.531), on the q-line.

### 5. (ii) McCabe–Thiele stepping from the top
Step from (0.75, 0.75), and switch to the stripping line after the step that crosses x = 0.362.

| stage | y (vapor leaving) | x (liquid leaving) | line used for next y |
|---|---|---|---|
| 1 | 0.750 | 0.696 | rectifying |
| 2 | 0.720 | 0.642 | rectifying |
| 3 | 0.689 | 0.584 | rectifying |
| 4 | 0.656 | 0.511 | rectifying |
| 5 | 0.615 | 0.404 | rectifying |
| 6 | 0.555 | 0.254 | stripping (feed stage) |
| 7 | 0.313 | 0.048 | — (x < 0.10) |

Fraction of the last stage = (0.254 − 0.10)/(0.254 − 0.048) = 0.75, so **N = 6.75 → 7 equilibrium stages**. All of them are trays: open steam means there is no reboiler. The **optimum feed is stage 6 from the top**.

![McCabe–Thiele diagram for ethanol–water with open steam: rectifying line slope 0.564, stripping line through (0.10, 0), 6.75 stages, feed on stage 6](fig/2015-16-Q2b-sol.svg)

### 6. (iii) Steam rate
$$S=\bar{V}=V-(1-q)F=508.6+0.25(1000)=\mathbf{758.6\ mol/h}\ (\approx 13.7\ \mathrm{kg/h})$$
Check: $F + S = 1758.6 = D + B = 221.7 + 1536.9$ ✓.

> **Exam tip:** with open steam the bottom operating line ends at $(x_B, 0)$, not on the 45° line, and $B = \bar{L}$ is larger than F. For ethanol–water, always check for a tangent pinch before using the feed-line intersection for $R_{min}$.`,
          answer: String.raw`q = 1.25; $(L/D)_{min}$ ≈ 0.65 (tangent pinch near x = 0.50). At L/D = 1.29: D = 221.7, B = 1536.9 mol/h; op lines y = 0.564x + 0.327 and y = 2.026(x − 0.10); N = 6.75 → 7 equilibrium stages, feed on stage 6; S = $\bar{V}$ = 758.6 mol/h.`}
      ] },
    { id: "2015-16-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q3a", label: "(a)", marks: "17",
          topic: "mccabe-thiele", sub: "Top operating line with direct cooling water instead of a condenser",
          type: "derivation", syllabus: "partial", repeats: [],
          text: String.raw`When water is the more volatile component we do not need a condenser but can use direct cooling water as shown in the Figure for Q. 3(a). We set $y_D$ = 0.92, $x_B$ = 0.04, z = 0.4 (all mole fractions water), feed is a saturated vapor, feed rate is 1000 kmoles/hr, P = 1 atm, CMO is valid, the entering cooling water (C) is a saturated liquid and is pure water ($x_c$ = 0), and C/D = 3/4. Derive and plot the top operating line. Note that external balances (that is, balances around the entire column) are not required.

(Figure: column with cooling water C, $x_C$ entering stage 1 at the top and vapor D, $y_D$ leaving the top; feed F, z at the middle; stage N at the bottom with $x_N$, $\bar{L}$ to a partial reboiler $Q_R$ and $\bar{V}$, $y_{N+1}$ returning; bottoms B, $x_B$; $Q_{col}$ = 0.)`,
          solution: String.raw`> **Misprint:** the mole fractions are of water, so pure cooling water is $x_C$ = 1.0, not 0. With $x_C$ = 0 the line $y = 0.75x + 0.92$ lies above y = 1 for x > 0.11 and cannot work. Wankat Problem 4.D22, the source of this question, gives the answer y = 0.75x + 0.17.

**Given:** $y_D$ = 0.92, saturated-liquid cooling water C with $x_C$ = 1.0 entering the top stage, C/D = 3/4, CMO, saturated vapor feed z = 0.40 (water).
**Find:** the top operating line.

### Derivation
1. Envelope around the top of the column, cut between stage j and stage j + 1. In: $V_{j+1}$ and C. Out: $L_j$ and D.
2. Total balance: $V_{j+1} + C = L_j + D$.
3. Water balance: $V_{j+1}y_{j+1} + Cx_C = L_jx_j + Dy_D$.
4. CMO: C is a saturated liquid, so it acts exactly like reflux on stage 1, and the flows are constant in the section: $L_j = L = C$. Then $V_{j+1} = L + D - C = D$, so V = D.
5. Solve for $y_{j+1}$:
$$y_{j+1}=\frac{L}{V}x_j+\frac{Dy_D-Cx_C}{V}=\frac{C}{D}x_j+y_D-\frac{C}{D}x_C$$
6. Substitute C/D = 0.75, $y_D$ = 0.92, $x_C$ = 1.0:
$$\boxed{y=0.75x+0.17}$$

### Plotting
- Top end: at $x = x_C = 1.0$, y = 0.92. The line passes through $(x_C, y_D)$, the pair of passing streams at the top (liquid entering stage 1 and vapor leaving it), not through $(y_D, y_D)$.
- It crosses the 45° line at x = 0.17/0.25 = **0.68**, not at $y_D$ (unlike an ordinary condenser).
- The feed is a saturated vapor (q = 0), so the feed line is horizontal at y = z = 0.40. The top line ends at the feed line at x = (0.40 − 0.17)/0.75 = 0.307.

![y–x plot of the top operating line y = 0.75x + 0.17 from (1, 0.92) to the horizontal feed line at (0.307, 0.40)](fig/2015-16-Q3a-sol.svg)

> **Exam tip:** when a stream other than reflux enters the top stage, write the balance with that stream ($Cx_C$). The operating line then passes through $(x_C, y_D)$, not through the diagonal at $y_D$.`,
          answer: String.raw`With L = C and V = D (CMO, saturated cooling water): y = (C/D)x + $y_D$ − (C/D)$x_C$ = 0.75x + 0.17 (using $x_C$ = 1, pure water; the printed $x_C$ = 0 is a misprint). The line passes through (1, 0.92), meets y = x at 0.68 and the feed line y = 0.4 at x = 0.307.`},
        { id: "2015-16-Q3b", label: "(b)", marks: "18",
          topic: "column-balances", sub: "Condenser and reboiler duties from the ethanol–water H–x chart (two-phase feed)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A distillation column is separating ethanol from water at a pressure of 1 kg/cm². A two-phase feed of 20 wt% ethanol at 93°C is input at 100 kg/min. The column has a total condenser and a partial reboiler. The distillate composition is 90 wt% ethanol. Distillate and reflux are at 20°C. Bottoms composition is 1 wt% ethanol. Reflux ratio is $L_0/D$ = 3. Find $Q_C$ (condenser heat load) and $Q_R$ (reboiler heat load). (Enthalpy–composition diagram is attached.)`,
          solution: String.raw`> This is the Part A side-stream slide problem (Wankat 3.D5) without the side stream.

**Given:** F = 100 kg/min, z = 0.20, $x_D$ = 0.90, $x_B$ = 0.01 (mass fractions ethanol), $L_0/D$ = 3, D and $L_0$ at 20°C, total condenser, partial reboiler, $Q_{col}$ = 0.
**Find:** $Q_C$, $Q_R$ (kcal/min).
**Method:** external mass balances in kg (the H–x chart is per kg), then energy balances around the condenser and around the whole column.

### 1. Chart readings (Bosnjakovic H–x chart, 1 kg/cm², kcal/kg, liquid water and ethanol at 0°C = 0)

| stream | condition | reading |
|---|---|---|
| $H_1$ | saturated vapor, $y_1 = x_D$ = 0.90 | ≈ 288 kcal/kg |
| $h_D$ = $h_{L0}$ | liquid at 20°C, x = 0.90 | ≈ 11 kcal/kg (10.8) |
| $h_B$ | saturated liquid, x = 0.01 | ≈ 98 kcal/kg |
| $h_F$ | 93°C tie line from x ≈ 0.06 (h ≈ 92) to y ≈ 0.51 (H ≈ 452), read at z = 0.20 | ≈ 202 kcal/kg |

The feed point lies on the 93°C tie line, so its vapor fraction is (0.20 − 0.0625)/(0.51 − 0.0625) = 0.31, and $h_F = 0.69(92) + 0.31(452) \approx 202$ kcal/kg.

![Schematic H–x chart with the dew and boiling lines, the 20°C liquid isotherm, the 93°C tie line and the four chart readings](fig/2015-16-Q3b-sol.svg)

### 2. External mass balances
$$D=F\frac{z-x_B}{x_D-x_B}=100\frac{0.20-0.01}{0.90-0.01}=\mathbf{21.35\ kg/min},\qquad B=F-D=\mathbf{78.65\ kg/min}$$

### 3. Condenser
- $V_1 = L_0 + D = (1 + 3)D = 85.39$ kg/min.
- $Q_C = V_1(h_D - H_1) = 85.39(10.8 - 288) = $ **−2.37 × 10⁴ kcal/min** (heat removed).

### 4. Overall energy balance
$$Q_R=Dh_D+Bh_B-Fh_F-Q_C=21.35(10.8)+78.65(98)-100(202)+23{,}670$$
$$Q_R=231+7708-20{,}250+23{,}670\approx\mathbf{1.14\times10^4\ kcal/min}$$

The reboiler duty is much smaller than the condenser duty because the feed arrives 31% vaporized (high $h_F$) and the reflux is subcooled to 20°C.

> **Exam tip:** a two-phase feed sits on its own isotherm (tie line) inside the two-phase region; read $h_F$ there, not on the boiling line. Subcooled distillate and reflux are read on the 20°C liquid isotherm, not on the boiling line.`,
          answer: String.raw`D = 21.35 kg/min, B = 78.65 kg/min; readings $H_1$ ≈ 288, $h_D$ ≈ 11, $h_B$ ≈ 98, $h_F$ ≈ 202 kcal/kg give $Q_C$ = 85.4(10.8 − 288) ≈ −2.37 × 10⁴ kcal/min and $Q_R$ ≈ 1.14 × 10⁴ kcal/min.`}
      ] },
    { id: "2015-16-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q4a", label: "(a)", marks: "10",
          topic: "advanced-distillation", sub: "Murphree vapor efficiency and why E_MV can exceed 1",
          type: "theory", syllabus: "in", repeats: ["2017-18-Q5c", "2018-19-Q7a"],
          text: String.raw`What is Murphree efficiency, $E_{MV}$? Under what conditions $E_{MV}$ > 1?`,
          solution: String.raw`**Definition (Part C slides).** The Murphree vapor efficiency of tray n is the actual change in vapor composition divided by the change that an equilibrium stage would give:
$$E_{MV,n}=\frac{y_n-y_{n+1}}{y_n^*-y_{n+1}}$$
- $y_n$: actual (average) vapor leaving tray n.
- $y_{n+1}$: vapor entering from the tray below.
- $y_n^*$: vapor in equilibrium with the liquid **leaving** the tray, $x_n$.

The liquid version is $E_{ML,n} = (x_{n-1} - x_n)/(x_{n-1} - x_n^*)$. On a McCabe–Thiele diagram, $E_{MV}$ is used by drawing a pseudo-equilibrium curve a fraction $E_{MV}$ of the vertical distance from the operating line to the equilibrium curve.

**Murphree's model assumes** the vapor is well mixed between trays and the liquid on the tray is **perfectly mixed**, so the liquid everywhere has the outlet composition $x_n$.

**When is $E_{MV}$ > 1?** In large-diameter, cross-flow trays the liquid is **not** mixed. As it crosses the tray it loses the more volatile component, so the inlet side is richer than the outlet: $x_{in} > \dots > x_n$.
- Vapor rising near the inlet contacts richer liquid and can leave richer than $y_n^*$ (which is based on the leanest liquid, $x_n$).
- The average leaving vapor can then satisfy $y_n > y_n^*$, so the numerator exceeds the denominator and $E_{MV} > 1$.
- This is common in large columns with long liquid flow paths and plug-flow liquid (little back-mixing), and with a high point efficiency.
- Local point efficiencies $E_{pt}$ are never above 1. Only the tray-averaged Murphree value can be.

> **Exam tip:** give the formula, name each composition, and say that $E_{MV}$ > 1 is caused by the liquid concentration gradient across a large tray. It is not a violation of thermodynamics.`,
          answer: String.raw`$E_{MV}$ = ($y_n$ − $y_{n+1}$)/($y_n^*$ − $y_{n+1}$) with $y_n^*$ in equilibrium with the leaving liquid $x_n$. $E_{MV}$ > 1 occurs on large cross-flow trays where the liquid is not mixed: vapor contacts liquid richer than $x_n$, so the average $y_n$ can exceed $y_n^*$.`},
        { id: "2015-16-Q4b", label: "(b)", marks: "8",
          topic: "column-design", sub: "Sieve tray performance (operating window) diagram",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Draw the sieve tray performance diagram and label different regions.`,
          solution: String.raw`> The slides list the hydraulic limits (flooding, entrainment, weeping, downcomer backup) but do not draw the performance diagram. It is the standard Kister/Wankat ch. 10 picture.

The diagram plots vapor load against liquid load. The satisfactory region is bounded on every side by a failure mode.

![Sieve tray performance diagram: satisfactory region bounded by entrainment flooding (top), downcomer flooding (right), weeping and dumping (bottom), excessive entrainment and coning at low liquid rate (left)](fig/2015-16-Q4b-sol.svg)

| boundary | cause |
|---|---|
| **Entrainment (jet) flooding**, top | vapor velocity too high; liquid droplets are carried to the tray above, and efficiency collapses. This sets the diameter (design at ≈ 75–85% of flood). |
| **Downcomer flooding (backup)**, right | high liquid rate; the downcomer backs up ($h_{dc}/\phi$ > tray spacing). |
| **Weeping**, lower boundary | vapor rate too low; liquid leaks through the holes and efficiency falls. |
| **Dumping**, below weeping | essentially all the liquid drains through the holes; the tray stops working. |
| **Excessive entrainment / coning**, left (low liquid rate) | the liquid layer is so thin that vapor jets through it (coning) or sprays the liquid upward. |

The **design point** sits inside the window, far enough from all boundaries to give the turndown needed.

> **Exam tip:** label the axes (vapor rate up, liquid rate across), all five boundaries, and the design point.`,
          answer: String.raw`Vapor rate vs liquid rate: a satisfactory-operation window bounded above by entrainment (jet) flooding, on the right by downcomer flooding, below by weeping and then dumping, and on the left (low liquid rate) by excessive entrainment/coning; the design point is inside.`},
        { id: "2015-16-Q4c", label: "(c)", marks: "10",
          topic: "flash", sub: "Ways of using an existing flash drum",
          type: "theory", syllabus: "out", repeats: ["2013-14-Q6a"],
          text: String.raw`Write down different ways of using an existing flash drum.`,
          solution: String.raw`> Not covered in the current ChE 303 slides (Wankat Section 2.10).

An existing drum has fixed D and $h_{total}$, so its maximum vapor capacity is set by $u_{perm}$:
$$V_{max}=\frac{\pi D^2}{4}\,u_{perm}\,\frac{\rho_V}{MW_V},\qquad\text{and we need}\quad \frac{V}{F}F\le V_{max}$$
If this is satisfied, simply use the drum. If not (Wankat's list):
1. Add chevrons or a demister to raise $V_{max}$ and cut entrainment.
2. Reduce the feed rate to the drum.
3. Reduce V/F (less vapor, richer in the more volatile component).
4. Use existing drums **in parallel**, which lowers the feed to each.
5. Use existing drums **in series** (flash cascade).
6. Raise the pressure (raises $\rho_V$, but changes the whole separation).
7. Buy a different drum or build a new one.
8. Use a combination of these. Used equipment must be checked to be clean and structurally sound.

> **Exam tip:** start from the capacity check $V \le V_{max}$, then list the fixes.`,
          answer: String.raw`Check V = (V/F)F against $V_{max}$ = (πD²/4)$u_{perm}\rho_V/MW_V$; if it is too small: add a demister/chevrons, cut F, cut V/F, run drums in parallel or in series, raise pressure, or buy/build another drum (or combine).`},
        { id: "2015-16-Q4d", label: "(d)", marks: "7",
          topic: "column-design", sub: "Pressure heads on a sieve tray and downcomer backup",
          type: "sketch", syllabus: "partial", repeats: ["2011-12-Q8f", "2012-13-Q4e"],
          text: String.raw`Show schematically different pressure heads on a sieve tray.`,
          solution: String.raw`> The slides list downcomer backup and pressure drop as hydraulic checks; the head balance itself is Wankat Section 10.5 (Fig. 10-21).

The liquid in the downcomer must stand high enough to push liquid onto tray n against the higher pressure under tray n − 1. In inches of clear liquid:
$$h_{dc}=h_{\Delta p,dry}+h_{weir}+h_{crest}+h_{grad}+h_{du}$$

![Sieve tray and downcomer showing the downcomer liquid height h_dc and the heads h_weir, h_crest, h_du and the vapor dry-tray head](fig/2015-16-Q4d-sol.svg)

| head | meaning |
|---|---|
| $h_{\Delta p,dry}$ | pressure drop of the vapor through the dry holes (orifice equation) |
| $h_{weir}$ | weir height (2–4 in typical, at least 0.5 in) |
| $h_{crest}$ ($h_{ow}$) | liquid crest over the weir (Francis weir formula) |
| $h_{grad}$ | liquid gradient across the tray (≈ 0 on sieve trays) |
| $h_{du}$ | friction loss under the downcomer apron (gap ≈ 1 in) |

The total tray pressure drop is $h_{\Delta p,dry} + h_{weir} + h_{crest}$ (plus a small surface-tension term). The downcomer liquid is aerated (froth density $\phi_{dc}$ ≈ 0.5), so the actual backup is $h_{dc}/\phi_{dc}$. To avoid downcomer flooding this must be less than the tray spacing.

> **Exam tip:** write the $h_{dc}$ sum and mark each term on the sketch.`,
          answer: String.raw`$h_{dc}$ = $h_{\Delta p,dry}$ + $h_{weir}$ + $h_{crest}$ + $h_{grad}$ + $h_{du}$ (inches of clear liquid); aerated backup $h_{dc}/\phi_{dc}$ (φ ≈ 0.5) must stay below the tray spacing.`}
      ] },
    { id: "2015-16-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q5a", label: "(a)", marks: "25",
          topic: "partial-extraction", sub: "Countercurrent extraction with the difference point (acetic acid–water–isopropyl ether)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A solution of acetic acid (A) in water (D) is to be extracted using isopropyl ether as the solvent (S). The feed is 1000 kg/hr of a solution containing 35 wt% acid and 65 wt% water. The solvent is pure and its flow rate is 1475 kg/hr. The exiting raffinate stream should contain 10 wt% acetic acid. Find the outlet concentrations and the number of equilibrium stages required for this separation. The equilibrium data are given below (triangular diagram attached).

| Water layer $x_A$ | $x_D$ | $x_S$ | Ether layer $y_A$ | $y_D$ | $y_S$ |
|---|---|---|---|---|---|
| 0.69 | 98.1 | 1.2 | 0.18 | 0.5 | 99.3 |
| 1.41 | 97.1 | 1.5 | 0.37 | 0.7 | 98.9 |
| 2.89 | 95.5 | 1.6 | 0.79 | 0.8 | 98.4 |
| 6.42 | 91.7 | 1.9 | 1.93 | 1.0 | 97.1 |
| 13.30 | 84.4 | 2.3 | 4.82 | 1.9 | 93.3 |
| 25.50 | 71.1 | 3.4 | 11.40 | 3.9 | 84.7 |
| 36.70 | 58.9 | 4.4 | 21.60 | 6.9 | 71.5 |
| 44.30 | 45.1 | 10.6 | 31.10 | 10.8 | 58.1 |
| 46.40 | 37.1 | 16.5 | 36.20 | 15.1 | 48.7 |

(All wt%; each row is one tie line.)`,
          solution: String.raw`> Wankat Example 13-4 (slides "Example 18.2"); the book answer is 5.8 stages.

**Given:** F = $R_{N+1}$ = 1000 kg/h ($x_A$ = 0.35, $x_D$ = 0.65); $E_0$ = S = 1475 kg/h pure ether; $x_{A,1}$ = 0.10.
**Find:** $R_1$, $E_N$ (flows and compositions) and N.
**Method:** right-triangle diagram (x axis = mass fraction water, y axis = mass fraction acid), mixing point M, difference point Δ, stepping along tie lines. The tie lines between data rows are interpolated smoothly (conjugate-line equivalent).

### 1. Mixing point
$$x_{A,M}=\frac{E_0y_{A,0}+Fx_{A,F}}{E_0+F}=\frac{0+1000(0.35)}{2475}=0.1414,\qquad x_{D,M}=\frac{650}{2475}=0.2626$$
M lies on the straight line SF.

### 2. Outlet streams
- $R_1$ is on the raffinate (water-rich) branch at $x_A$ = 0.10: $x_D$ = 0.879, $x_S$ = 0.021.
- The line $R_1M$ extended meets the extract branch at $E_N$: $y_A$ = 0.156, $y_D$ = 0.051, $y_S$ = 0.793.
- Lever rule (acid balance): $E_N = M\frac{x_{A,M}-x_{A,1}}{y_{A,N}-x_{A,1}} = 2475\frac{0.1414-0.10}{0.1556-0.10} = $ **1842 kg/h**, and $R_1$ = 2475 − 1842 = **633 kg/h**.
- Water check: 1842(0.051) + 633(0.879) = 94 + 556 = 650 ✓.

### 3. Difference point
$\Delta = E_0 - R_1 = E_N - R_{N+1}$. It is the intersection of lines $E_0R_1$ and $E_NF$ extended:
$$\Delta = 1475-633 = 842\ \mathrm{kg/h};\qquad x_{A,\Delta}=\frac{0-633(0.10)}{842}=-0.075,\quad x_{D,\Delta}=\frac{0-633(0.879)}{842}=-0.661$$
Δ lies outside the triangle, to the lower left of S.

### 4. Stage-by-stage
Start at $R_1$. The tie line from $R_j$ gives $E_j$. The line from Δ through $E_j$ meets the raffinate curve at $R_{j+1}$. Repeat until $y_{A,j}$ passes $y_{A,N}$ = 0.156.

| stage j | $R_j$: $x_A$, $x_D$ | $E_j$: $y_A$, $y_D$ |
|---|---|---|
| 1 | 0.100, 0.879 | 0.033, 0.014 |
| 2 | 0.162, 0.813 | 0.062, 0.023 |
| 3 | 0.210, 0.761 | 0.086, 0.031 |
| 4 | 0.247, 0.720 | 0.109, 0.037 |
| 5 | 0.279, 0.686 | 0.132, 0.044 |
| 6 | 0.311, 0.654 | 0.160, 0.052 |

Fraction of stage 6 = (0.156 − 0.132)/(0.160 − 0.132) = 0.84, so **N ≈ 5.8 → 6 equilibrium stages**.

![Right-triangle diagram for acetic acid–water–isopropyl ether with mixing point M, outlet streams R1 and EN, difference point Δ and 5.8 stepped tie-line stages](fig/2015-16-Q5a-sol.svg)

**Outlet concentrations:** raffinate $R_1$ = 633 kg/h with 10.0% acid, 87.9% water, 2.1% ether. Extract $E_N$ = 1842 kg/h with 15.6% acid, 5.1% water, 79.3% ether. About 82% of the acid is recovered (287 of 350 kg/h).

> **Exam tip:** find M first. The line from $R_1$ through M fixes $E_N$; then Δ is where $E_0R_1$ and $E_NF$ cross. Draw large, because the steps near the plait point are very sensitive to the tie lines.`,
          answer: String.raw`M at $x_A$ = 0.141; $R_1$ = 633 kg/h (10% acid, 87.9% water); $E_N$ = 1842 kg/h (15.6% acid, 5.1% water, 79.3% ether); Δ at ($x_D$, $x_A$) = (−0.66, −0.075); N ≈ 5.8 → 6 equilibrium stages.`},
        { id: "2015-16-Q5b", label: "(b)", marks: "10",
          topic: "immiscible-extraction", sub: "Dilute countercurrent extraction of benzoic acid by Kremser",
          type: "numerical", syllabus: "in", repeats: ["2018-19-Q3c"],
          text: String.raw`A water solution containing 0.005 mol fraction benzoic acid is to be extracted using pure benzene as the solvent. If the feed rate is 100 moles/hr and the solvent rate is 10 moles/hr, find the number of equilibrium stages required to reduce the water concentration to 0.0001 mole fraction benzoic acid. Operation is isothermal at 6°C, where equilibrium data can be represented as: mole fraction of benzoic acid in water = 0.0446 × (mole fraction of benzoic acid in benzene).`,
          solution: String.raw`**Given:** R (water) = 100 mol/h with $x_0$ = 0.005; E (benzene) = 10 mol/h with $y_{N+1}$ = 0; $x_N$ = 0.0001; $x = 0.0446y$, so $y = mx$ with m = 1/0.0446 = 22.42.
**Find:** N.
**Assumptions:** water and benzene immiscible; dilute, so R and E are constant; isothermal; linear equilibrium (Kremser conditions, immiscible-extraction slides).

1. Extract leaving: $Ey_1 = R(x_0 - x_N)$, so $y_1 = 10(0.005 - 0.0001) = 0.049$.
2. Extraction factor: $\frac{mE}{R} = \frac{22.42(10)}{100} = 2.242$. Also $y_1^* = mx_0 = 0.1121$.
3. Kremser (slides, with R/E in place of L/V):
$$N=\frac{\ln\left[\left(1-\frac{mE}{R}\right)\frac{y_{N+1}-y_1^*}{y_1-y_1^*}+\frac{mE}{R}\right]}{\ln(R/mE)}=\frac{\ln[(1-2.242)\frac{0-0.1121}{0.049-0.1121}+2.242]}{\ln(1/2.242)}$$
$$N=\frac{\ln(-2.207+2.242)}{-0.8074}=\frac{\ln 0.0355}{-0.8074}=\mathbf{4.13}$$
4. Check with the raffinate form: $\frac{x_N}{x_0} = \frac{1-mE/R}{1-(mE/R)^{N+1}} = 0.02$ gives $2.242^{N+1} = 63.1$, so N + 1 = 5.13 ✓.

McCabe–Thiele check (stage 1 at the feed end; operating line $y_{j+1} = y_1 - \frac{R}{E}(x_0 - x_j)$, slope R/E = 10):

| stage | y | x = y/m |
|---|---|---|
| 1 | 0.0490 | 0.00219 |
| 2 | 0.0209 | 0.00093 |
| 3 | 0.0083 | 0.00037 |
| 4 | 0.0027 | 0.00012 |
| 5 | 0.0002 | 0.000009 |

![McCabe–Thiele diagram for dilute benzoic acid extraction: equilibrium y = 22.42x, operating line slope 10, about 4.1 stages](fig/2015-16-Q5b-sol.svg)

Result: **N = 4.13 → 5 equilibrium stages**.

> **Exam tip:** turn the given relation into y = mx before using Kremser ($x = 0.0446y$ means m = 22.4, not 0.0446). Check that mE/R > 1, which means the solvent can do the job.`,
          answer: String.raw`m = 22.42, $y_1$ = 0.049, mE/R = 2.242; Kremser N = 4.13 → 5 equilibrium stages.`}
      ] },
    { id: "2015-16-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw`A complete gas treatment plant often consists of both an absorber to remove the solute and a stripper to regenerate the solvent. Some of the treated gas is heated and used in the stripper. This is called stream B. In a particular application we wish to remove obnoxious impurity A from the inlet gas. The absorber operates at 1.5 atm and 24°C where equilibrium is given as y = 0.5x (units are mole fractions). The stripper operates at 1 atm and 92°C where equilibrium is y = 3x (units are mole fractions). The total gas flow rate is 1400 moles/day, and the gas is 15 mole% A. The nonsoluble carrier is air. We desire a treated gas concentration of 0.5 mole% A. The liquid flow rate into the absorber is 800 moles/day and the liquid is 0.5 mole% A.`,
      parts: [
        { id: "2015-16-Q6a", label: "(a)", marks: "5",
          topic: "absorption", sub: "Assumptions for an absorber–stripper gas treatment plant",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write down the assumptions needed to solve the problem of the gas treatment plant.`,
          solution: String.raw`Assumptions (absorption slides, Wankat ch. 12):
1. The carrier gas (air) is **insoluble** in the solvent, so G (mol air/day) is constant.
2. The solvent is **nonvolatile**, so L (mol solvent/day) is constant.
3. Each column is **isothermal and isobaric** (absorber 24°C, 1.5 atm; stripper 92°C, 1 atm), and the **heat of absorption is negligible**, so the energy balances are satisfied automatically.
4. The stages are **equilibrium stages** with the given linear equilibria in mole fractions.
5. The gas is concentrated (15% A), so the total flows change. Work in **mole ratios** Y = y/(1 − y) and X = x/(1 − x) on a solute-free basis; the operating lines are then straight with slope L/G.
6. Steady state. The regenerated solvent is recycled: the stripper liquid outlet equals the absorber liquid inlet ($X$ = 0.00503). Stream B has the composition of the treated gas (0.5% A).

> **Exam tip:** the key pair is insoluble carrier plus nonvolatile solvent; that is what makes mole ratios give straight operating lines.`,
          answer: String.raw`Insoluble carrier and nonvolatile solvent (constant G and L), isothermal and isobaric columns with negligible heat of absorption, equilibrium stages, steady state with recycled solvent; work in mole ratios because the gas is concentrated.`},
        { id: "2015-16-Q6b", label: "(b)", marks: "15",
          topic: "absorption", sub: "Concentrated absorber in mole ratios: outlet liquid and number of stages",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate the number of stages in the absorber and the liquid concentration leaving.`,
          solution: String.raw`> Wankat Problem 12.D13 (slides D13); the slide's graphical answer is 8 stages.

**Given:** total gas 1400 mol/day with $y_{in}$ = 0.15; $y_{out}$ = 0.005; liquid in 800 mol/day with $x_{in}$ = 0.005; equilibrium y = 0.5x.
**Find:** $X_{out}$ and N.

### 1. Solute-free flows and ratios
- G = 1400(0.85) = 1190 mol air/day; L = 800(0.995) = 796 mol solvent/day.
- $Y_{in}$ = 0.15/0.85 = 0.1765; $Y_{out}$ = 0.005/0.995 = 0.00503; $X_{in}$ = 0.00503.

### 2. External balance
$$X_{out}=X_{in}+\frac{G}{L}(Y_{in}-Y_{out})=0.00503+\frac{1190}{796}(0.1765-0.00503)=\mathbf{0.2613}$$
In mole fraction, $x_{out}$ = 0.2613/1.2613 = **0.207**.

### 3. Equilibrium and operating line in ratio units
- y = 0.5x becomes $Y = \frac{0.5X}{1+0.5X}$, or $X = \frac{2Y}{1-Y}$ (a curve).
- Operating line: $Y = Y_{out} + \frac{L}{G}(X - X_{in})$, slope L/G = 0.669, from (0.00503, 0.00503) to (0.2613, 0.1765).

### 4. Stepping from the top (stage 1 at the gas outlet)
Start at $Y_1 = Y_{out}$. Get $X_j$ from equilibrium, then $Y_{j+1}$ from the operating line.

| stage | Y (gas leaving) | X (liquid leaving) |
|---|---|---|
| 1 | 0.0050 | 0.0101 |
| 2 | 0.0084 | 0.0170 |
| 3 | 0.0130 | 0.0264 |
| 4 | 0.0193 | 0.0394 |
| 5 | 0.0280 | 0.0576 |
| 6 | 0.0402 | 0.0838 |
| 7 | 0.0577 | 0.1225 |
| 8 | 0.0836 | 0.1825 |
| 9 | 0.1238 | 0.2825 (passes 0.2613) |

Fraction of stage 9 = (0.2613 − 0.1825)/(0.2825 − 0.1825) = 0.79, so **N = 8.8 → 9 equilibrium stages**.

![Mole-ratio McCabe–Thiele diagram for the absorber: curved equilibrium, operating line slope 0.669, 8.8 stages](fig/2015-16-Q6b-sol.svg)

The operating line and the equilibrium curve come close together at the dilute (top) end, so many small steps are needed there.

> **Exam tip:** convert both the equilibrium line and the specifications to mole ratios before stepping; y = 0.5x is not a straight line in Y–X.`,
          answer: String.raw`G = 1190, L = 796 mol/day; $X_{out}$ = 0.2613 (x = 0.207); stepping in mole ratios gives 8.8 → 9 equilibrium stages.`},
        { id: "2015-16-Q6c", label: "(c)", marks: "15",
          topic: "absorption", sub: "Existing 4-stage stripper: trial-and-error stripping gas rate",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`If the stripper is an already existing column with four equilibrium stages, calculate the gas flow rate of stream B (concentration is 0.5 mole% A) and the outlet gas concentration from the stripper.`,
          solution: String.raw`**Given:** liquid in at the top $X_{in}$ = 0.2613 (absorber outlet); liquid out at the bottom $X_{out}$ = 0.00503 (back to the absorber); L = 796 mol solvent/day; stream B enters the bottom with $Y_{in}$ = 0.00503; equilibrium y = 3x; N = 4.
**Find:** G (stream B) and $Y_{out}$.
**Method:** trial and error on L/G. Each trial operating line runs from $(X_{out}, Y_{in})$ to $(X_{in}, Y_{out})$, with $Y_{out} = Y_{in} + \frac{L}{G}(X_{in} - X_{out})$. Step from the bottom and adjust L/G until exactly 4 stages fit.

1. Equilibrium in ratios: $\frac{Y}{1+Y} = 3\frac{X}{1+X}$, so $Y = \frac{3X}{1-2X}$ and $X = \frac{Y}{3+2Y}$.
2. Stepping upward from stage 4 (bottom): $Y_j = Y^*(X_j)$, then $X_{j-1} = X_{out} + \frac{G}{L}(Y_j - Y_{in})$.
3. Solving numerically for exactly N = 4 gives **L/G = 1.242**:

| stage (from top) | X leaving | Y leaving |
|---|---|---|
| 4 (bottom) | 0.0050 | 0.0152 |
| 3 | 0.0132 | 0.0408 |
| 2 | 0.0338 | 0.1089 |
| 1 (top) | 0.0887 | 0.3233 |

The liquid entering stage 1 is $X_0$ = 0.2613 = $X_{in}$ ✓.

4. Results:
- G = 796/1.242 = **641 mol air/day**, so stream B = 641/0.995 = **644 mol/day total** (0.5% A).
- $Y_{out} = 0.00503 + 1.242(0.2613 - 0.00503) = 0.323$, so **$y_{out}$ = 0.323/1.323 = 0.244** (24.4 mol% A).

![Mole-ratio McCabe–Thiele diagram for the 4-stage stripper: steep curved equilibrium Y = 3X/(1 − 2X) and operating line slope 1.242](fig/2015-16-Q6c-sol.svg)

> The slide solution reads L/G ≈ 1.10 (G ≈ 724 mol/day) off a hand-drawn graph; stepping that line numerically gives only 3.4 stages, so the computed 641 mol/day is the consistent answer for exactly 4 stages. Stream B (641 mol air/day) is about 54% of the treated gas (1190 mol air/day).

> **Exam tip:** for a stripper the operating line lies below the equilibrium curve. With a fixed number of stages, guess L/G, step, and adjust; a smaller G (larger L/G) needs more stages.`,
          answer: String.raw`Trial and error for exactly 4 stages: L/G = 1.242, so G = 641 mol air/day (stream B ≈ 644 mol/day at 0.5% A); $Y_{out}$ = 0.323, $y_{out}$ ≈ 0.244.`}
      ] },
    { id: "2015-16-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q7a", label: "(a)", marks: "10",
          topic: "batch", sub: "Batch versus continuous distillation",
          type: "theory", syllabus: "in", repeats: ["2013-14-Q3a", "2020-21-Q8a", "2022-23-Q8a"],
          text: String.raw`Discuss the differences between batch and continuous distillation column.`,
          solution: String.raw`| aspect | batch distillation | continuous distillation |
|---|---|---|
| operation | a charge is loaded into the still pot (reboiler), heated, and distillate is drawn off over hours or days; then the residue is dumped and the cycle repeats | feed, distillate and bottoms flow continuously at steady state |
| state | unsteady: still-pot and distillate compositions change with time | steady state: compositions constant at every stage |
| feed location | charged to the still; the column is only an enriching section | fed at an intermediate (optimum) stage; enriching and stripping sections |
| capacity | small amounts, many products, occasional duty (one or two shifts) | large, single-product throughput |
| flexibility | very versatile: one column handles different feeds and purities, multiple cuts | designed for one separation |
| control | constant reflux (falling $x_D$) or variable reflux (constant $x_D$) | fixed reflux ratio and steady flows |
| design method | Rayleigh equation + McCabe–Thiele at each instant; time = $D_{total}/D$ + down time | McCabe–Thiele / Lewis at steady state |
| energy | generally higher per unit of product (the whole charge is heated, reflux must suit the hardest part of the run) | thermodynamically more efficient, heat integration possible |
| typical use | fine chemicals, pharmaceuticals, solvent recovery, small ethanol plants | refineries, petrochemicals, bulk chemicals, cryogenic air separation |

> **Exam tip:** give at least five contrasts. The key words are unsteady state, versatility, small scale, and only an enriching section.`,
          answer: String.raw`Batch: unsteady, charge in the still, enriching section only, versatile and small-scale, changing compositions, Rayleigh-based design, more energy. Continuous: steady state, feed at an optimum stage with both sections, large single-product throughput, more energy-efficient.`},
        { id: "2015-16-Q7b", label: "(b)", marks: "25",
          topic: "batch", sub: "Constant-reflux batch distillation, still + 1 stage, methanol–water (Rayleigh)",
          type: "numerical", syllabus: "in", repeats: ["2020-21-Q8c"],
          text: String.raw`A one stage batch distillation column is used to distill a mixture of methanol and water at $L_0/D$ = 1.85. 1 kg mole of feed contains 57 mole% methanol. It is desired that the final bottoms concentration of methanol is 15 mole%. Find $W_{final}$, D and $x_{D,avg}$ for this system. Equilibrium data (mol% methanol):

| x | 0 | 2 | 4 | 6 | 8 | 10 | 15 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| y | 0 | 13.4 | 23 | 30.4 | 36.5 | 41.8 | 51.7 | 57.9 | 66.5 | 72.9 | 77.9 | 82.5 | 87 | 91.5 | 95.8 | 100 |`,
          solution: String.raw`> Wankat Problem 9.D3 (batch slides D3: still pot + one equilibrium stage, total condenser, $L_0/D$ = 1.85). "One stage column" is read as one equilibrium stage above the still pot, as in D3.

**Given:** F = 1 kmol, $x_F$ = 0.57; $x_{W,final}$ = 0.15; $L_0/D$ = 1.85 (constant), saturated reflux; equilibrium data on the paper.
**Find:** $W_{final}$, $D_{total}$, $x_{D,avg}$.
**Assumptions:** CMO, negligible holdup in the column and accumulator, equilibrium contacts (stage 1 and the still pot).

### 1. Operating line (constant L/V)
$$\frac{L}{V}=\frac{L_0/D}{1+L_0/D}=\frac{1.85}{2.85}=0.649,\qquad y=0.649x+0.351x_D$$

### 2. Relation between $x_D$ and $x_W$ (two equilibrium contacts)
For a chosen $x_D$:
1. $y_1 = x_D$, and $x_1$ = equilibrium x at $y_1$.
2. $y_W = 0.649x_1 + 0.351x_D$.
3. $x_W$ = equilibrium x at $y_W$.

Searching for the $x_D$ that gives each $x_W$ (data interpolated smoothly):

| $x_W$ | $x_D$ | $1/(x_D - x_W)$ |
|---|---|---|
| 0.15 | 0.730 | 1.724 |
| 0.20 | 0.768 | 1.761 |
| 0.25 | 0.795 | 1.835 |
| 0.30 | 0.817 | 1.934 |
| 0.36 | 0.840 | 2.084 |
| 0.40 | 0.853 | 2.208 |
| 0.45 | 0.867 | 2.396 |
| 0.50 | 0.881 | 2.626 |
| 0.57 | 0.899 | 3.040 |

![McCabe–Thiele diagram for the batch still plus one stage at L/V = 0.649: start of run with x_D = 0.899 and x_W = 0.57, end of run with x_D = 0.730 and x_W = 0.15](fig/2015-16-Q7b-sol.svg)

### 3. Rayleigh equation
$$\ln\frac{F}{W_{final}}=\int_{x_{W,final}}^{x_F}\frac{dx_W}{x_D-x_W}$$
- Simpson's rule on the slide's three points (0.15, 0.36, 0.57): area = (0.42/6)[1.724 + 4(2.084) + 3.040] = 0.917.
- Fine Simpson's rule (200 intervals): **area = 0.915**.

![Rayleigh integrand 1/(x_D − x_W) against x_W from 0.15 to 0.57 with the area 0.915 shaded](fig/2015-16-Q7b-sol2.svg)

### 4. Results
- $W_{final} = F e^{-0.915} = 1(0.4006) = $ **0.401 kmol**.
- $D_{total} = F - W_{final} = $ **0.599 kmol**.
- $x_{D,avg} = \frac{Fx_F - W_{final}x_{W,final}}{D_{total}} = \frac{0.57 - 0.401(0.15)}{0.599} = $ **0.851**.

(The slide solution of D3, with Wankat Table 3-3 data, gives 0.925, 0.397 kmol and 0.847.)

> **Exam tip:** with constant reflux, $x_D$ falls during the run. Choose several $x_D$ values, step the fixed number of contacts to find $x_W$, then integrate $1/(x_D - x_W)$ numerically from $x_{W,final}$ to $x_F$.`,
          answer: String.raw`L/V = 0.649; $x_D$ falls from 0.899 to 0.730; Rayleigh area = 0.915 → $W_{final}$ = 0.401 kmol, $D_{total}$ = 0.599 kmol, $x_{D,avg}$ = 0.851.`}
      ] },
    { id: "2015-16-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q8a", label: "(a)", marks: "20",
          topic: "absorption", sub: "Derivation of the Kremser equation (gas-phase form)",
          type: "derivation", syllabus: "in", repeats: ["2011-12-Q2a", "2012-13-Q1a"],
          text: String.raw`Starting from the operating line equation prove the Kremser equation in the form
$$N=\frac{\ln\left[\left(1-\frac{mV}{L}\right)\left(\frac{y_{N+1}-y_1^*}{y_1-y_1^*}\right)+\frac{mV}{L}\right]}{\ln\left(\frac{L}{mV}\right)}$$`,
          solution: String.raw`**Assumptions (slides):**
1. Dilute, so L/V (total flows) is constant.
2. Isothermal.
3. Isobaric.
4. Negligible heat of absorption.
5. Straight equilibrium line $y = mx + b$.

Equilibrium stages are numbered 1 (top, where $L, x_0$ enters and $V, y_1$ leaves) to N (bottom, where $V, y_{N+1}$ enters and $L, x_N$ leaves).

### 1. Operating and equilibrium lines
- Balance around the top j stages: $Vy_{j+1} + Lx_0 = Vy_1 + Lx_j$, so
$$y_{j+1}=\frac{L}{V}x_j+\left(y_1-\frac{L}{V}x_0\right)\quad(1)$$
- Equilibrium leaving stage j:
$$y_j=mx_j+b\ \Rightarrow\ x_j=\frac{y_j-b}{m}\quad(2)$$

### 2. Vertical step between the lines
Define $(\Delta y)_j = y_{j+1} - y_j$. Using (1) and $y_j = mx_j + b$:
$$(\Delta y)_j=\left(\frac{L}{V}-m\right)x_j+y_1-\frac{L}{V}x_0-b$$
Eliminate $x_j$ with (2):
$$(\Delta y)_j=\left(\frac{L}{mV}-1\right)y_j+\left(y_1-\frac{L}{mV}b-\frac{L}{V}x_0\right)\quad(3)$$
Write (3) for stage j + 1 and subtract (3) for stage j:
$$(\Delta y)_{j+1}-(\Delta y)_j=\left(\frac{L}{mV}-1\right)(y_{j+1}-y_j)=\left(\frac{L}{mV}-1\right)(\Delta y)_j$$
$$\Rightarrow\ (\Delta y)_{j+1}=\frac{L}{mV}(\Delta y)_j\quad(4)$$
So the steps form a geometric series with ratio $A = L/(mV)$ (the absorption factor).

### 3. Sum over the column
$$\Delta y_1+\Delta y_2+\dots+\Delta y_N=y_{N+1}-y_1$$
$$\Delta y_1\left(1+A+A^2+\dots+A^{N-1}\right)=y_{N+1}-y_1\ \Rightarrow\ \frac{y_{N+1}-y_1}{\Delta y_1}=\frac{1-A^N}{1-A}\quad(5)$$

### 4. Express $\Delta y_1$ in end compositions
Let $y_1^* = mx_0 + b$ (vapor in equilibrium with the entering liquid). From (1) with j = 1, and $x_1 = (y_1 - b)/m$:
$$\Delta y_1=y_2-y_1=\frac{L}{V}(x_1-x_0)=\frac{L}{mV}(y_1-b-mx_0)=A\,(y_1-y_1^*)$$
Substituting into (5):
$$\frac{y_{N+1}-y_1}{y_1-y_1^*}=\frac{A-A^{N+1}}{1-A}\quad(6)$$
Add 1 to both sides; the left side becomes $\frac{y_{N+1}-y_1^*}{y_1-y_1^*}$:
$$\frac{y_{N+1}-y_1^*}{y_1-y_1^*}=\frac{1-A^{N+1}}{1-A}\quad(7)\quad\text{(Kremser)}$$

### 5. Solve for N
From (7): $A^{N+1} = 1 - (1-A)\,r$, where $r = \frac{y_{N+1}-y_1^*}{y_1-y_1^*}$. Divide by A and use $1/A = mV/L$:
$$A^N=\frac{1}{A}-\left(\frac{1}{A}-1\right)r=\left(1-\frac{mV}{L}\right)r+\frac{mV}{L}$$
Take logarithms:
$$\boxed{N=\frac{\ln\left[\left(1-\frac{mV}{L}\right)\frac{y_{N+1}-y_1^*}{y_1-y_1^*}+\frac{mV}{L}\right]}{\ln\left(\frac{L}{mV}\right)}}$$

**Special case** $L/(mV) = 1$ (parallel lines): all $\Delta y$ are equal, so $N = \frac{y_{N+1}-y_1}{y_1 - \frac{L}{V}x_0 - b}$.

> **Exam tip:** the key steps are (4), the geometric ratio L/mV between successive steps, and adding 1 to both sides of (6) to bring in $y_1^*$. Always state assumption 5 (straight equilibrium line).`,
          answer: String.raw`From the operating line and y = mx + b: $(\Delta y)_{j+1}$ = (L/mV)$(\Delta y)_j$; summing the geometric series gives ($y_{N+1}$ − $y_1^*$)/($y_1$ − $y_1^*$) = [1 − (L/mV)$^{N+1}$]/(1 − L/mV), which rearranges to N = ln[(1 − mV/L)($y_{N+1}$ − $y_1^*$)/($y_1$ − $y_1^*$) + mV/L]/ln(L/mV).`},
        { id: "2015-16-Q8b", label: "(b)", marks: "7",
          topic: "leaching", sub: "Washing: equilibrium relation and constant-flow assumptions",
          type: "theory", syllabus: "in", repeats: ["2016-17-Q8a", "2017-18-Q2a", "2022-23-Q4b", "2023-24-Q5c"],
          text: String.raw`Write down the equilibrium relation and assumptions for stage calculation of washing.`,
          solution: String.raw`**Equilibrium.** In washing the solute is only dissolved in the liquid entrained by the solids; it is not held by the solid. At equilibrium the underflow liquid and the overflow liquid have the same concentration:
$$y=x$$
Here y is the mass fraction of solute in the overflow and x is the mass fraction in the underflow liquid (m = 1 in Kremser).

**Assumptions for constant flows** (so the operating line $y_{j+1} = \frac{U}{O}x_j + (y_{N+1} - \frac{U}{O}x_N)$ is straight):
1. No solids in the overflow, and the solids do not dissolve, so the solid flow rate is constant.
2. Constant fluid and solid densities ($\rho_f$, $\rho_s$): the solute has little effect on density, or the solution is dilute.
3. Constant porosity ε (constant liquid entrained per kg of solid), so the underflow liquid U is constant from stage to stage. A mass balance then makes the overflow O constant too.
4. Isothermal and isobaric stages, negligible heat of mixing, equilibrium (well-mixed) stages.

With these, the Kremser equation applies to countercurrent washing with no further assumption:
$$\frac{x_N-x_N^*}{x_0-x_N^*}=\frac{1-mO/U}{1-(mO/U)^{N+1}},\qquad m=1,\ x_N^*=y_{N+1}$$

> **Exam tip:** "y = x" plus "U and O constant" is the whole story; list the three reasons U is constant (solids, densities, porosity).`,
          answer: String.raw`Equilibrium y = x (same solute concentration in underflow and overflow liquid). Assumptions: no solids in the overflow and no dissolving solids, constant densities (dilute), constant porosity, so U and O are constant; isothermal, isobaric equilibrium stages.`},
        { id: "2015-16-Q8c", label: "(c)", marks: "8",
          topic: "immiscible-extraction", sub: "Cross-flow immiscible extraction: cascade and McCabe–Thiele diagram",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the cascade and McCabe–Thiele diagram for cross flow immiscible extraction.`,
          solution: String.raw`In a cross-flow cascade, the raffinate (diluent $F_D$, ratio $X$) passes through stages 1 → N, and **fresh solvent** $F_{S,j}$ (ratio $Y_{j,in}$, usually 0) is added to **every** stage. Each stage's extract $Y_j$ is withdrawn separately.

Balance on stage j (solute-free flows, immiscible phases):
$$F_DX_{j-1}+F_{S,j}Y_{j,in}=F_DX_j+F_{S,j}Y_j\ \Rightarrow\ Y_j=-\frac{F_D}{F_{S,j}}X_j+\left(\frac{F_D}{F_{S,j}}X_{j-1}+Y_{j,in}\right)$$

![Cross-flow cascade with fresh solvent to every stage and a McCabe–Thiele diagram with a separate operating line of slope −F_D/F_Sj from each X_(j−1) on the X axis to the equilibrium curve](fig/2015-16-Q8c-sol.svg)

**Construction (Wankat Fig. 16-9):**
1. Plot the equilibrium curve in Y (kg solute/kg solvent) versus X (kg solute/kg diluent).
2. From $(X_0, Y_{1,in})$, which is on the X axis when the solvent is pure, draw a line of slope $-F_D/F_{S,1}$ to the equilibrium curve. That point is $(X_1, Y_1)$.
3. Drop vertically to $(X_1, Y_{2,in})$ and draw the next line of slope $-F_D/F_{S,2}$, and so on.
4. Each stage has its own operating line. Equal solvent splits give parallel lines.

> **Exam tip:** cross-flow lines have negative slopes and start on the X axis; countercurrent has one positive-slope operating line. Cross-flow uses more solvent for the same recovery.`,
          answer: String.raw`Raffinate passes 1 → N with fresh solvent to each stage; each stage has its own operating line $Y_j$ = −($F_D/F_{S,j}$)$X_j$ + ($F_D/F_{S,j}$)$X_{j-1}$ + $Y_{j,in}$, drawn from $(X_{j-1}, Y_{j,in})$ on the X axis to the equilibrium curve.`}
      ] }
  ] });
