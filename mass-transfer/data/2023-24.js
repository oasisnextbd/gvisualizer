QB.paper({
  year: "2023-24", date: "04/09/2025", marks: 210,
  rules: String.raw`Section A: Q1 compulsory + any two of Q2–Q4. Section B: any three of Q5–Q8. Separate scripts for each section. Symbols have their usual meanings. Kremser equations (liquid and gas phase) are printed at the end of the paper.`,
  questions: [
    { id: "2023-24-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q1a", label: "(a)", marks: "3+3",
          topic: "vle", sub: "Equivalence of y-x data from α, T-x-y and H-x-y diagrams",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Consider a binary VLE system and analyse the equivalence of the followings:

i. y-x data obtained from experimental y-x diagram and those obtained from relative volatility equation.

ii. y-x data obtained from temperature-composition diagram and those obtained from enthalpy-composition diagram.`,
          solution: String.raw`**(i) Experimental y-x vs the relative-volatility equation**

The relative volatility is defined from the data themselves:

$$\alpha_{AB} = \frac{K_A}{K_B} = \frac{y_A/x_A}{y_B/x_B} = \frac{y(1-x)}{x(1-y)}$$

Solving this definition for y gives, with no approximation,

$$y = \frac{\alpha x}{1+(\alpha-1)x}$$

So the two are **identical point by point** if α is evaluated at each composition. They are equivalent with a *single constant* α only when α is nearly constant over the range: ideal (Raoult's law) systems of similar compounds (e.g. benzene–toluene, α ≈ 2.4–2.5), where $\alpha = P_A^{sat}/P_B^{sat}$ changes little with T. For non-ideal systems (ethanol–water, methanol–water) α varies strongly with x (and is 1 at an azeotrope), so a constant-α curve does not reproduce the experimental curve; use the data, or a geometric-mean α over a narrow range.

**(ii) T-x-y vs H-x-y diagram**

Both are plotted at the **same fixed pressure** and contain the **same equilibrium information**:

- On the T-x-y diagram, a horizontal line at temperature T cuts the bubble (T-x) curve at x and the dew (T-y) curve at y.
- On the H-x-y diagram, the same equilibrium pair is joined by the **isothermal tie line** between the saturated-liquid line (at x) and the saturated-vapor line (at y), labelled with T.

Reading (x, y) at each tie line therefore gives the same y-x points; the H-x-y diagram only adds the enthalpies. Points to watch: H-x charts (e.g. ethanol–water, Wankat Fig. 2-4) are usually in **weight** fractions and at a specified pressure (1 kg/cm² there), so convert to mole fractions and check the pressure before comparing.`,
          answer: String.raw`(i) Identical if α(x) = y(1−x)/[x(1−y)] is used at each point; with one constant α only for near-ideal systems. (ii) Same P, same tie lines: horizontal lines on T-x-y = isothermal tie lines on H-x-y, so the same y-x data (convert wt to mol fractions).` },
        { id: "2023-24-Q1b", label: "(b)", marks: "3+3",
          topic: "mccabe-thiele", sub: "Effect of reflux ratio and q on number of stages",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Consider a staged distillation column and show graphically (on y-x diagram) the effect of followings on the number of stage requirements in the column.

i. Changing reflux ratio with constant q

ii. Changing q with fixed reflux ratio`,
          solution: String.raw`Illustration computed for α = 2.5, z = 0.5, $x_D = 0.95$, $x_B = 0.05$ (stage counts include the partial reboiler).

**(i) Reflux ratio at constant q** (q = 1). The top line $y = \frac{L}{V}x + \left(1-\frac{L}{V}\right)x_D$ pivots about $(x_D, x_D)$; raising L/D raises its slope L/V toward 1, so both operating lines move **away from** the equilibrium curve toward y = x. Steps get bigger, so **fewer stages**.

| L/D | stages |
|---|---|
| 1.10 = $R_{min}$ | ∞ (pinch at the feed line) |
| 1.5 | 12.7 |
| 4.0 | 8.1 |
| ∞ (total reflux) | 6.4 ($N_{min}$) |

![Two operating-line sets at L/D = 1.5 and 4.0 with their staircases](fig/2023-24-Q1b-sol.svg)

**(ii) q at fixed reflux ratio** (L/D = 2). The top line is fixed. The q-line $y = \frac{q}{q-1}x - \frac{z}{q-1}$ rotates about $(z, z)$, which moves the intersection point and with it the bottom line. A **larger q** (colder, more liquid feed) puts the intersection further from the equilibrium curve, so the stripping line moves away from equilibrium and **fewer stages** are needed (at the cost of more boilup, $\bar{V} = V + (q-1)F$).

| q | feed | stages |
|---|---|---|
| 1.5 | subcooled liquid | 9.6 |
| 1.0 | saturated liquid | 10.4 |
| 0.5 | half vapor | 12.2 |

![Fixed top line, q = 1.5 and q = 0.5: the colder feed needs fewer stages](fig/2023-24-Q1b-sol2.svg)

**Exam tip:** at fixed L/D a vapor feed can even drop below the minimum (pinch); always check the intersection stays below the equilibrium curve.`,
          answer: String.raw`(i) Higher L/D at constant q moves the operating lines away from equilibrium → fewer stages (∞ at R_min, N_min at total reflux). (ii) At fixed L/D a higher q (colder feed) moves the bottom line away from equilibrium → fewer stages.` },
        { id: "2023-24-Q1c", label: "(c)", marks: "7",
          topic: "advanced-distillation", sub: "Top-down stepping with Murphree vapor efficiency",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`For the McCabe Thiele analysis of staged distillation columns, what happens if we try to step off stages from the top down and $E_{MV}$ is given? Determine how to do this calculation.`,
          solution: String.raw`**The difficulty.** The Murphree vapor efficiency is

$$E_{MV} = \frac{y_n - y_{n+1}}{y_n^* - y_{n+1}}$$

It is a **vertical** distance ratio at the liquid composition $x_n$: $y_n^* = y^*(x_n)$ and $y_{n+1}$ is on the operating line at $x_n$. Stepping from the top down, we know $y_n$ and must find $x_n$, which is a **horizontal** step to the curve. But $y_n^*$ and $y_{n+1}$ both depend on the unknown $x_n$, so the efficiency cannot be applied directly to a horizontal step (stepping bottom-up has no such problem: from $x_n$ go up a fraction $E_{MV}$ of the vertical distance).

**How to do it: pseudo-equilibrium curve**

1. For several x values compute
$$y_{pseudo}(x) = y_{op}(x) + E_{MV}\left[y^*(x) - y_{op}(x)\right]$$
   i.e. go a fraction $E_{MV}$ of the vertical distance from the operating line to the equilibrium curve. Join the points to draw the **pseudo-equilibrium curve** (one for each column section, since it depends on the operating line).
2. Step off stages top-down exactly as usual, but use the pseudo-equilibrium curve instead of the real one: horizontal from $(x_D, y_1)$ to the pseudo curve gives $x_1$; vertical to the operating line gives $y_2$; repeat. Each step is one **real** tray.
3. At the feed switch to the other operating line and its pseudo curve. A partial reboiler (or partial condenser) is normally an equilibrium contact: use the real equilibrium curve for it.
4. Algebraic equivalent: for each tray solve $y_n = y_{op}(x_n) + E_{MV}[y^*(x_n) - y_{op}(x_n)]$ for $x_n$ by trial and error.

![Top-down stepping on a pseudo-equilibrium curve drawn E_MV = 0.6 of the way from the operating line to equilibrium](fig/2023-24-Q1c-sol.svg)`,
          answer: String.raw`E_MV is a vertical ratio at the unknown x_n, so a horizontal top-down step cannot use it directly; draw a pseudo-equilibrium curve y_op + E_MV(y* − y_op) (or iterate on x_n) and step off on it; each step is a real tray.` },
        { id: "2023-24-Q1d", label: "(d)", marks: "4+4",
          topic: "column-design", sub: "Raise feed rate near flooding by raising pressure",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`You need to temporarily increase the feed rate to an existing distillation column without flooding. Since the column is now operation at about 90% of flooding, you must vary some operating parameter. The column has 18-in tray spacing, is operating at 1 atm, and has a constant reflux ratio. How can the feed rate be increased under this condition? What are required to be checked and confirmed before the increase in feed rate?`,
          solution: String.raw`This is Wankat Problem 10.C1.

**How: increase the column pressure.** The tray spacing (18 in) and diameter are fixed, so the flooding constant $C_{sb}$ is fixed:

$$u_{flood} = C_{sb}\sqrt{\frac{\rho_L-\rho_V}{\rho_V}} \approx C_{sb}\sqrt{\frac{\rho_L}{\rho_V}}$$

The molar vapor capacity at a fixed fraction of flooding is

$$V_{max} = \frac{u\,A\,\rho_V}{M_V} \propto \frac{\sqrt{\rho_L\rho_V}}{M_V} \propto \sqrt{\rho_V} \propto \sqrt{P}\ \ (\rho_V = PM_V/RT)$$

With L/D constant, $V = (1+L/D)D$ and D ∝ F, so F ∝ V. Hence, at the same % of flooding,

$$\frac{F_{new}}{F_{old}} \approx \sqrt{\frac{P_{new}}{P_{old}}}$$

For example, a 20% higher feed rate needs about $1.2^2 = 1.44$ atm (a little more, because the boiling temperature and $\rho_V$'s T also rise). Lowering the reflux ratio would also cut V, but it is fixed here.

**Check and confirm before raising the feed**

1. **Pressure rating** of the shell, relief-valve settings and instruments for the new pressure.
2. **Relative volatility** at higher P (usually lower): check product purity at the same L/D and N.
3. **Reboiler**: higher bottoms temperature reduces the ΔT with the available steam; check it can still supply the larger duty. Check fouling or thermal degradation of the bottoms at the higher T.
4. **Condenser**: the duty rises with F; at higher P it condenses at a higher T (usually easier), but confirm duty and coolant.
5. **Liquid-side hydraulics**: liquid rates rise with F; check downcomer backup and residence time, weir loading and pressure drop (downcomer flooding).
6. Feed pump, preheater, product pumps, coolers and control valves can take the higher flow.
7. Tray efficiency and entrainment at the new conditions; operate below about 85–90% flooding.`,
          answer: String.raw`Raise the column pressure: at fixed % flooding V_max ∝ √ρ_V ∝ √P, so F ∝ √P (20% more feed needs ≈ 1.44 atm). First check pressure rating/relief, α and purity, reboiler ΔT and duty, condenser duty, downcomer backup and auxiliaries.` },
        { id: "2023-24-Q1e", label: "(e)", marks: "4+4",
          topic: "column-design", sub: "Column diameter ∝ F^1/2 and (1 + L/D)^1/2",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that the distillation column diameter is proportional to $F^{1/2}$ and to $(1+L/D)^{1/2}$.`,
          solution: String.raw`**Assumptions:** ideal-gas vapor; operation at a fixed allowable velocity u (a fixed fraction of flooding); fixed P, T at the section sized; fixed feed and product compositions.

1. **Distillate from the external balances** ($F = D + B$, $Fz = Dx_D + Bx_B$):

$$D = F\,\frac{z - x_B}{x_D - x_B}$$

2. **Vapor flow at the top** (total condenser, $V = L + D$):

$$V = \left(1+\frac{L}{D}\right)D = \left(1+\frac{L}{D}\right)\frac{z-x_B}{x_D-x_B}\,F$$

3. **Volumetric vapor flow** ($\rho_V = PM_V/RT$):

$$Q_V = \frac{V M_V}{\rho_V} = \frac{V R T}{P}$$

4. **Area and diameter** at velocity u:

$$A = \frac{Q_V}{u} = \frac{\pi D_{col}^2}{4}\ \Rightarrow\ D_{col} = \sqrt{\frac{4Q_V}{\pi u}}$$

5. **Substitute:**

$$D_{col} = \left[\frac{4RT}{\pi P u}\,\frac{z-x_B}{x_D-x_B}\right]^{1/2}\left(1+\frac{L}{D}\right)^{1/2}F^{1/2}$$

The bracket is constant for a given service, so

$$D_{col} \propto F^{1/2}\quad\text{and}\quad D_{col} \propto \left(1+\frac{L}{D}\right)^{1/2}$$

The same holds at the bottom: $\bar{V} = V - (1-q)F$ is also proportional to F at fixed L/D and q. Consequence: doubling the feed rate needs only $\sqrt{2} = 1.41$ times the diameter.`,
          answer: String.raw`D_col = √(4Q_V/πu), Q_V = VRT/P, V = (1 + L/D)D, D = F(z − x_B)/(x_D − x_B) ⇒ D_col = const × (1 + L/D)^1/2 F^1/2.` } ] },

    { id: "2023-24-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q2a", label: "(a)", marks: "15",
          topic: "flash", sub: "Flash system sketch: pump, heater, valve, drum, demister",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Sketch and label a typical flash distillation system with liquid feed. State subsequently the purpose of using the pump, heater and demister.`,
          solution: String.raw`![Flash system: liquid feed, pump, heater, pressure-reducing valve, flash drum with demister, vapor and liquid products](fig/2023-24-Q2a-sol.svg)

**Flow:** liquid feed is pumped to high pressure, heated (still liquid because of the high pressure), then flashed across a valve into the drum at lower pressure. Part of the liquid vaporizes; vapor and liquid reach equilibrium at $T_{drum}$, $p_{drum}$; vapor leaves at the top through a demister, liquid at the bottom.

**Purposes**

- **Pump:** raises the pressure of the liquid feed, so that (1) the feed can be heated without boiling in the heater (it stays liquid, which avoids two-phase flow and vapor locking in the exchanger) and (2) there is a pressure drop available across the valve to drive the flash and the flow into the drum.
- **Heater:** adds the energy needed to vaporize the desired fraction V/F. It sets the feed enthalpy $h_F$ (or $T_F$); with the drum pressure it fixes the flash (energy balance $Fh_F = VH_V + Lh_L$). The valve is isenthalpic, so all the heat for vaporization must be supplied before it.
- **Valve:** drops the pressure; the hot, pressurized liquid becomes superheated relative to the drum pressure and partly flashes (isenthalpic expansion).
- **Demister** (mesh pad, wire mesh): coalesces and removes **entrained liquid droplets** from the vapor before it leaves the drum, so the vapor product is not contaminated with liquid and the separation stays close to one equilibrium stage. It also protects downstream compressors and equipment.
- **Drum:** gives residence time and disengagement space for the vapor and liquid to separate; sized from the allowable vapor velocity (with the demister).`,
          answer: String.raw`Pump: raise pressure so feed can be heated without boiling and drive the flash; heater: supply the enthalpy for the required V/F; demister: remove entrained droplets from the vapor (valve flashes isenthalpically; drum separates phases).` },
        { id: "2023-24-Q2b", label: "(b)", marks: "20",
          topic: "mccabe-thiele", sub: "Methanol–water McCabe–Thiele, two-phase feed, optimum feed",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A distillation column is separating methanol and water. The column has a partial reboiler, a total condenser, and a saturated liquid reflux. The feed rate is 152 kg moles/hr, and feed composition is 40 mole % methanol. The feed is a two-phase mixture that is 60% liquid and 40% vapor and will be put into the column at the optimum feed plate. The distillate composition is 0.92, and bottoms is 0.08 mole fraction methanol. CMO can be assumed. Use an external reflux ratio of L/D = 0.9. Equilibrium data are given below. Determine the optimum feed plate location and total number of required equilibrium stages.

Table 1: Mole fraction of methanol

| $x_M$ | 0.02 | 0.04 | 0.06 | 0.08 | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 | 0.60 | 0.70 | 0.80 | 0.90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $y_M$ | 0.134 | 0.23 | 0.304 | 0.365 | 0.418 | 0.579 | 0.665 | 0.729 | 0.779 | 0.825 | 0.87 | 0.915 | 0.958 |`,
          solution: String.raw`**Given:** F = 152 kmol/h, z = 0.40, 60% liquid so **q = 0.6**; $x_D = 0.92$, $x_B = 0.08$; L/D = 0.9; total condenser, saturated reflux, partial reboiler; CMO.

**Data:** Table 1; above x = 0.90 the table stops, so I added $x = 0.95, y = 0.979$ and (1, 1) from the same Perry data (Wankat Table 2-7) for the top step.

**Find:** optimum feed stage and number of equilibrium stages.

**Assumptions:** CMO, constant L/V in each section; total condenser ($y_1 = x_D$); partial reboiler = one equilibrium stage; linear interpolation of the data.

1. **External balances:**

$$D = F\frac{z-x_B}{x_D-x_B} = 152\,\frac{0.32}{0.84} = 57.90\ \mathrm{kmol/h},\qquad B = 94.10\ \mathrm{kmol/h}$$

2. **Internal flows:** $L = 0.9D = 52.11$, $V = L + D = 110.02$; $\bar{L} = L + qF = 52.11 + 0.6(152) = 143.31$; $\bar{V} = V - (1-q)F = 110.02 - 60.80 = 49.22$ kmol/h.

3. **Operating lines:**

$$\text{Top: } y = \frac{L}{V}x + \left(1-\frac{L}{V}\right)x_D = 0.4737x + 0.4842$$

$$\text{Bottom: } y = \frac{\bar{L}}{\bar{V}}x - \left(\frac{\bar{L}}{\bar{V}}-1\right)x_B = 2.912x - 0.1529$$

4. **Feed line:** $y = \frac{q}{q-1}x - \frac{z}{q-1} = -1.5x + 1.0$. The three lines meet at $(0.2613, 0.6080)$.

5. **Check minimum reflux:** the q-line cuts the equilibrium curve at (0.251, 0.623), so $(L/V)_{min} = \frac{0.92-0.623}{0.92-0.251} = 0.444$ and $R_{min} = 0.80$. L/D = 0.9 = 1.13 $R_{min}$: feasible, but many stages.

6. **Step off from the top** (horizontal to equilibrium, vertical to the operating line; switch to the bottom line at the first stage whose x is below 0.2613):

| Stage | x (leaving) | y (leaving) | line used for next y |
|---|---|---|---|
| 1 | 0.8116 | 0.9200 | top |
| 2 | 0.6970 | 0.8687 | top |
| 3 | 0.5769 | 0.8144 | top |
| 4 | 0.4570 | 0.7575 | top |
| 5 | 0.3557 | 0.7007 | top |
| 6 | 0.2857 | 0.6527 | top |
| 7 (feed) | 0.2472 | 0.6196 | bottom |
| 8 | 0.1924 | 0.5667 | bottom |
| 9 | 0.0959 | 0.4072 | bottom |
| 10 | 0.0189 | 0.1264 | (passes $x_B$) |

Fraction of the last step: $\frac{0.0959-0.08}{0.0959-0.0189} = 0.21$.

![McCabe–Thiele diagram for methanol–water: 9.2 stages, feed on stage 7](fig/2023-24-Q2b-sol.svg)

**Result:** 9.2 equilibrium stages → **10 equilibrium stages = 9 equilibrium trays + the partial reboiler**; **optimum feed on stage 7** from the top.`,
          answer: String.raw`D = 57.9, B = 94.1 kmol/h; L/V = 0.474, L̄/V̄ = 2.91; 9.2 → 10 equilibrium stages (9 trays + partial reboiler), optimum feed on stage 7 from the top (R_min ≈ 0.80).` } ] },

    { id: "2023-24-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw`A distillation column is separating 1000 moles/hr of a 32 mole% ethanol, 68 mole% water mixture. The feed enters as a subcooled liquid that will condense 1 mole of vapor on the feed plate for every 4 moles of feed. The column has a partial condenser and uses open steam heating. We desire a distillate product $y_D = 0.75$ and bottoms product $x_B = 0.10$. CMO is valid. The steam used is pure saturated water vapor. Equilibrium data are given below.

Table 2: Mole fractions of ethanol at different temperatures and 1 atm

| T, °C | 95.5 | 89.0 | 86.7 | 85.3 | 84.1 | 82.7 | 82.3 | 81.5 | 80.7 | 79.8 | 79.7 | 79.3 | 78.7 | 78.15 | 78.30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $x_E$ | 0.019 | 0.0721 | 0.096 | 0.123 | 0.166 | 0.238 | 0.261 | 0.327 | 0.396 | 0.508 | 0.520 | 0.573 | 0.676 | 0.894 | 1.000 |
| $y_E$ | 0.170 | 0.389 | 0.4375 | 0.470 | 0.509 | 0.545 | 0.558 | 0.583 | 0.612 | 0.656 | 0.660 | 0.684 | 0.738 | 0.894 | 1.000 |`,
      parts: [
        { id: "2023-24-Q3a", label: "(a)", marks: "35 (a+b)",
          topic: "advanced-distillation", sub: "Minimum reflux: partial condenser, open steam, subcooled feed",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find the minimum external reflux ratio.`,
          solution: String.raw`This is the last problem in the slides' Part C deck (Wankat 4.D-type).

**Given:** F = 1000 mol/h, z = 0.32; 1 mol vapor condenses per 4 mol feed; $y_D = 0.75$ (partial condenser), $x_B = 0.10$; open steam (pure saturated water vapor); CMO; Table 2 data (with (0, 0) added).

**Assumptions:** CMO; partial condenser is an equilibrium stage, top operating line through $(y_D, y_D)$; open steam: $\bar{V} = S$, $\bar{L} = B$, bottom line through $(x_B, 0)$; linear interpolation of the data.

1. **Feed quality.** Condensing 1 mol vapor per 4 mol feed: $\bar{L} = L + F + F/4$, so

$$q = 1 + \frac{1}{4} = 1.25$$

2. **Feed line** through $(z, z)$:

$$y = \frac{q}{q-1}x - \frac{z}{q-1} = 5x - 1.28$$

3. **Pinch.** The q-line meets the equilibrium curve at $(0.377, 0.604)$ (between x = 0.327 and 0.396).

4. **Check for a tangent pinch** (ethanol–water bulges near the top): the largest slope from $(y_D, y_D)$ to any equilibrium point between x = 0.377 and 0.75 is

$$\max\frac{y_D - y^*}{y_D - x} = \frac{0.75-0.604}{0.75-0.377} = 0.391$$

reached at the q-line intersection itself (at x = 0.508: 0.388; x = 0.573: 0.373; x = 0.676: 0.162). So the pinch is at the feed line, $(L/V)_{min} = 0.391$.

5. **Minimum reflux:**

$$\left(\frac{L}{D}\right)_{min} = \frac{(L/V)_{min}}{1-(L/V)_{min}} = \frac{0.391}{0.609} = 0.643$$

![Minimum reflux for ethanol–water with partial condenser: top line from y_D touches the curve on the q-line](fig/2023-24-Q3a-sol.svg)`,
          answer: String.raw`q = 1.25 (q-line y = 5x − 1.28), pinch at (0.377, 0.604) on the feed line, (L/V)min = 0.391, (L/D)min ≈ 0.64.` },
        { id: "2023-24-Q3b", label: "(b)", marks: "",
          topic: "advanced-distillation", sub: "Real stages with E_MV = 2/3, partial condenser, open steam",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Use $L/D = 2.0\,(L/D)_{min}$ and find the number of real stages and the real optimum feed location if the Murphree vapor efficiency is 2/3 for all stages.`,
          solution: String.raw`**Given:** from (a), $(L/D)_{min} = 0.643$, so $L/D = 1.286$; $E_{MV} = 2/3$ on all column trays; partial condenser taken as an equilibrium stage.

**Find:** number of real trays and the real optimum feed tray (steam rate is also found, part (c) in the slides).

1. **Top section:** $\frac{L}{V} = \frac{R}{1+R} = \frac{1.286}{2.286} = 0.5626$

$$y = 0.5626x + 0.4374(0.75) = 0.5626x + 0.3280$$

2. **Flows with open steam** ($\bar{L} = L + qF = B$, $\bar{V} = V + (q-1)F = S$). The overall balance $F + S = D + B$ is then automatically satisfied, so use the ethanol balance $Fz = Dy_D + Bx_B$ with $B = RD + qF$:

$$D = \frac{Fz - x_B qF}{y_D + x_B R} = \frac{320 - 0.10(1250)}{0.75 + 0.1286} = 221.9\ \mathrm{mol/h}$$

$L = 285.5$, $V = 507.4$, $\bar{L} = B = 285.5 + 1250 = 1535.5$, $\bar{V} = S = 507.4 + 250 = 757.4$ mol/h.

3. **Bottom line** through $(x_B, 0)$, slope $\bar{L}/\bar{V} = 2.027$:

$$y = 2.027(x - 0.10)$$

Intersection with the top line and the q-line: $(0.3624, 0.5319)$.

4. **Pseudo-equilibrium curves** (one per section): $y_{pseudo} = y_{op} + \frac{2}{3}(y^* - y_{op})$.

5. **Step off from the top:** partial condenser on the real equilibrium curve ($y_D = 0.75 \Rightarrow x_0 = 0.693$), then $y_1 = 0.5626(0.693) + 0.328 = 0.718$; each tray: horizontal to the pseudo curve, vertical to the operating line. Switch to the stripping line and its pseudo curve at the first tray whose step crosses the intersection.

| Tray | x leaving | y leaving | section |
|---|---|---|---|
| PC | 0.6928 | 0.7500 | equilibrium |
| 1 | 0.6568 | 0.7178 | top |
| 2 | 0.6191 | 0.6976 | top |
| 3 | 0.5796 | 0.6763 | top |
| 4 | 0.5348 | 0.6541 | top |
| 5 | 0.4791 | 0.6290 | top |
| 6 | 0.4093 | 0.5976 | top |
| 7 (feed) | 0.3440 | 0.5583 | bottom |
| 8 | 0.2759 | 0.4946 | bottom |
| 9 | 0.1447 | 0.3566 | bottom |
| 10 | 0.0283 | 0.0905 | passes $x_B$ |

Fraction of tray 10: $\frac{0.1447-0.10}{0.1447-0.0283} = 0.38$, so **9.4 real trays → 10 real trays** plus the partial condenser. Trying the switch one tray earlier or later gives 9.9 and 9.6 trays, so **feed on real tray 7** from the top is optimum.

6. **Steam rate:** $S = \bar{V} = 757$ mol/h of saturated steam; $B = 1535$ mol/h at $x_B = 0.10$; check: $F + S = 1757 = D + B$ ✓; ethanol $320 = 221.9(0.75) + 1535.5(0.10)$ ✓.

![Murphree stepping with pseudo-equilibrium curves: partial condenser, 9.4 real trays, feed on tray 7, bottom line to (x_B, 0)](fig/2023-24-Q3b-sol.svg)

**Note:** Table 2 skips the Perry point (0.7472, 0.7815); using it moves $x_0$ only to 0.696, so the result is unchanged.

**Exam tip:** with open steam the bottom operating line ends at $(x_B, 0)$, not on the 45° line, and no reboiler stage is counted.`,
          answer: String.raw`L/D = 1.29; D = 222, B = 1535, S = V̄ ≈ 757 mol/h; with E_MV = 2/3: 9.4 → 10 real trays plus the partial condenser, optimum feed on real tray 7.` } ] },

    { id: "2023-24-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q4a", label: "(a)", marks: "4+4",
          topic: "column-design", sub: "Tray hydrodynamic regimes; best for industry",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Write down the hydrodynamic regimes which can occur on the tray of a distillation column, and choose & rationalize the best one for industrial operation.`,
          solution: String.raw`As the gas rate increases at a given liquid rate (Wankat Sec. 3.3):

| Regime | Gas rate | Description | Efficiency / use |
|---|---|---|---|
| **Bubble** | low | nearly stagnant liquid pool with distinct bubbles rising | poor mixing, low efficiency: undesirable |
| **Foam** (cellular foam) | moderate | liquid continuous with fairly distinct bubbles; a foam head like beer | large interfacial area, can be efficient, but a stable foam can fill the tray space and cause entrainment and flooding (may need antifoam); rate usually too low for industry |
| **Froth** | higher | liquid continuous with large pulsating vapor voids; violent boiling and splashing | liquid well mixed, good efficiency, reasonable capacity |
| **Spray** | very high | vapor continuous, liquid as a spray of droplets | vapor well mixed but liquid poorly mixed: low efficiency (e.g. 65% drops to 40%), high entrainment |

Beyond these come excessive entrainment and flooding; at the low end, weeping and dumping through the holes.

**Best for industry: the froth regime.** It combines good efficiency (liquid thoroughly mixed, high mass-transfer area, and in most distillations liquid-phase transfer controls) with a reasonable vapor capacity, so the column diameter is economical. It also sits safely between weeping (too little vapor) and the spray/entrainment-flooding limit (too much vapor). Note that a small rise in vapor velocity can push a tray from froth into spray, with a large efficiency loss.`,
          answer: String.raw`Bubble, foam, froth and spray regimes (then entrainment/flooding); froth is best: good mixing and efficiency with reasonable vapor capacity, away from weeping and spray/flooding.` },
        { id: "2023-24-Q4b", label: "(b)", marks: "8+8",
          topic: "column-design", sub: "Flow-pattern selection; downcomer and weir designs",
          type: "sketch", syllabus: "in", repeats: ["2022-23-Q1b"],
          text: String.raw`In addition to choosing the type of tray, the designer of a distillation column must select the flow pattern on the trays and design the weirs and downcomers.

i. Show graphically the selection guide of appropriate flow pattern for sieve trays.

ii. Draw the possible designs for downcomer and weir.`,
          solution: String.raw`**(i) Flow-pattern selection guide**

![Selection guide: liquid capacity vs tower diameter with reverse, cross, double-pass and four-pass regions](fig/2022-23-Q1b-sol.svg)

- **Reverse flow** for low liquid rates (below ≈ 30–50 gpm): a baffle sends the liquid across and back, lengthening its path.
- **Cross flow** (single pass) for average rates (up to ≈ 200–500 gpm): most common, handles solids.
- **Double pass** for high liquid rates and large diameters (≈ 500 to 1100 gpm), **four-pass** (cascade) above that. Three-pass trays are not used.
- Reason: weir length (liquid capacity) grows with D, vapor area with D², so large columns run out of weir length first.

**(ii) Downcomer and weir designs**

![Downcomers: circular pipe, straight segmental, sloped segmental, envelope; weirs: straight, adjustable, notched](fig/2023-24-Q4b-sol2.svg)

| Downcomer | Use |
|---|---|
| (A) Circular pipe | small columns and pilot plants; the pipe can stick up as the weir |
| (B) Straight segmental | most common commercially: cheap, easy to install, almost impossible to install wrongly, wide range of liquid rates |
| (C) Sloped segmental | difficult vapor–liquid disengagement; keeps more active area on the tray below; costlier, can be installed backwards |
| (D) Envelope | occasionally, for very low liquid rates |

| Weir | Use |
|---|---|
| Straight (2–4 in high) | cheapest; not the best turndown |
| Adjustable | looks like a fix for turndown, but misadjustment gives weeping or dry trays: avoid |
| Notched (picket-fence) | good when liquid-rate flexibility is needed, especially at low liquid rates; little more expensive than straight |`,
          answer: String.raw`(i) Reverse flow at low liquid rates, cross flow for average, double pass then four-pass at high rates/large D. (ii) Downcomers: circular pipe, straight segmental (most common), sloped segmental, envelope; weirs: straight, adjustable (avoid), notched.` },
        { id: "2023-24-Q4c", label: "(c)", marks: "6",
          topic: "column-design", sub: "Sieve tray geometry sketch",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`With a hand-drawing, show the tray geometry for a typical sieve tray in distillation columns.`,
          solution: String.raw`![Cross-flow sieve tray: side view with downcomers, outlet weir, froth and tray spacing; top view with inlet area, perforated active area and segmental downcomer](fig/2023-24-Q4c-sol.svg)

Label these parts:

- **Tray deck** with punched or drilled **holes** (typically 3/16–1/2 in, open area ≈ 5–15% of the active area): the **active (bubbling) area** $A_a$ where vapor rises through the holes and the liquid forms a froth.
- **Inlet downcomer** and the unperforated **inlet (calming) area** where liquid from the tray above enters.
- **Outlet weir** (height $h_w$, typically 2–4 in; length $l_w$ = the chord of the segmental downcomer) which holds the liquid level on the tray.
- **Downcomer** (area $A_d$, often ≈ 10–12% of $A_T$) carrying liquid to the tray below; the **downcomer apron** and the **clearance** under it, which seals the downcomer with liquid.
- **Tray spacing** S (e.g. 0.45 m for D below 1.2 m, at least 0.6 m for 1.2–3 m).
- Areas: $A_T = A_{net} + A_d$, $A_{net} = A_T - A_d$, $A_a = A_T - 2A_d$ (single-pass cross flow).`,
          answer: String.raw`Side view: perforated deck, froth, outlet weir, downcomer with apron and clearance, tray spacing; top view: inlet area, active area with holes, segmental downcomer (A_d) and weir length.` },
        { id: "2023-24-Q4d", label: "(d)", marks: "5",
          topic: "mccabe-thiele", sub: "Consistency checks of a CMO column calculation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Consider that CMO is valid for a distillation column. How can the consistency of column calculation-analysis be checked?`,
          solution: String.raw`Internal consistency checks used in Wankat Ch. 4:

1. **External balances close:** $F = D + B$ and $Fz = Dx_D + Bx_B$; with CMO also $V = L + D$, $\bar{L} = L + qF$, $\bar{V} = V - (1-q)F$, and $\bar{L} - \bar{V} = B$.
2. **Slopes make sense:** $L/V < 1$ (otherwise no distillate) and $\bar{L}/\bar{V} > 1$ (otherwise no bottoms product).
3. **Three lines meet at one point:** the top line, bottom line and feed line intersect at a single point; the top line passes through $(x_D, x_D)$ and the bottom line through $(x_B, x_B)$. The feed-line slope $q/(q-1)$ has the right sign for the feed condition.
4. **Equilibrium is a smooth curve** (catches misplotted points) and every step lands on it; stepping meets $x_B$ (or $x_D$) at the end; going bottom-up gives the same answer.
5. **Energy check of CMO:** latent heats (molar) of the components should be close (within about 10%), sensible-heat changes and heat of mixing small. Compare $Q_C = V\lambda$ and $Q_R = \bar{V}\lambda$ from CMO with the overall energy balance $Fh_F + Q_R = Dh_D + Bh_B + Q_C$; a big mismatch means CMO is not valid and a Lewis/energy-balance (Ponchon–Savarit or simulator) solution is needed.`,
          answer: String.raw`Close the mass balances, check L/V < 1 and L̄/V̄ > 1, the three lines meet on the q-line and end at (x_D,x_D),(x_B,x_B), a smooth equilibrium curve, and the CMO duties agree with the overall energy balance (similar latent heats).` } ] },

    { id: "2023-24-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q5a", label: "(a)", marks: "5",
          topic: "absorption", sub: "Limiting operating conditions of absorption and stripping",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain limiting operating conditions of absorption and stripping.`,
          solution: String.raw`For a fixed separation the limit is the flow ratio at which the operating line first **touches** the equilibrium line (a pinch, infinite stages).

**Absorber: minimum liquid rate, $(L/V)_{min}$.** The operating line is above equilibrium and passes through the fixed dilute end $(x_0, y_1)$. Lowering L rotates it down until it touches the equilibrium curve, usually at the concentrated (bottom) end, where $x_N = x_N^{*} = y_{N+1}/m$:

$$\left(\frac{L}{V}\right)_{min} = \frac{y_{N+1} - y_1}{x_N^* - x_0}$$

(in ratio units for concentrated feeds; for curved equilibrium the touch may be a tangent point in between). Actual L is set at about 1.2–2 $L_{min}$ (e.g. 1.5 in the CO₂ example).

![Absorber: minimum L/V operating line touches equilibrium at the rich end](fig/2023-24-Q5a-sol.svg)

**Stripper: minimum gas rate, $(V/L)_{min}$, i.e. maximum L/V.** The operating line is below equilibrium and passes through $(x_N, y_{N+1})$. Reducing V raises its slope L/V until it touches equilibrium, usually at the liquid-inlet end where $y_1 = y_1^* = m x_0$:

$$\left(\frac{L}{V}\right)_{max} = \frac{y_1^* - y_{N+1}}{x_0 - x_N}$$

![Stripper: maximum L/V (minimum gas) operating line touches equilibrium at the top](fig/2023-24-Q5a-sol2.svg)

The other limit, total reflux-like operation, is infinite solvent (or gas), giving the minimum number of stages; with straight lines the Kremser equation shows recovery is limited by $L/mV < 1$ (absorber) or $mV/L < 1$ (stripper) even with infinite stages.`,
          answer: String.raw`Absorber: (L/V)min when the operating line touches equilibrium (usually at the rich end, x_N = y_{N+1}/m); stripper: (V/L)min (max L/V) when it touches at the liquid inlet (y₁ = m x₀); both give infinite stages, so operate at about 1.2–2 times the minimum.` },
        { id: "2023-24-Q5b", label: "(b)", marks: "5",
          topic: "partial-extraction", sub: "Feeding two feeds and solvent to a single mixer-settler",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`If we wish to conduct partially miscible extraction with two feeds and a solvent in single stage extractor (mixer-settler), how should we feed all the streams in the system for better separation? Give your reason.`,
          solution: String.raw`**It does not matter how the streams are fed: mix them all in the one mixer** (together, or pre-mix the two feeds and then add solvent).

Reason: a single mixer-settler is **one equilibrium stage**. All the material entering is mixed into one stream M and then settles into an extract and a raffinate on the **single tie line through M**. The location of M follows only from the overall balances (lever rule, Wankat Eq. 13-30):

$$M = F_1 + F_2 + S,\qquad x_{A,M} = \frac{F_1x_{A,F_1} + F_2x_{A,F_2} + Sy_{A,S}}{M}$$

So the outlet compositions and flows are the same whatever the order of feeding (this is how slide Problem D1, MCH–heptane–aniline with two feeds, is solved).

To get **better separation** from two feeds of different concentration you must keep them **separate in a countercurrent cascade**: feed the more dilute feed nearer the raffinate end and the concentrated one at the extract end (two-feed extractor with two difference points). Mixing two feeds of different composition destroys part of the separation already present, which is wasteful in a cascade but irrelevant in a single stage.`,
          answer: String.raw`In one equilibrium stage only the overall mixing point M matters, so all streams can simply be mixed together; better separation needs a countercurrent cascade with the feeds kept separate (two-feed extractor).` },
        { id: "2023-24-Q5c", label: "(c)", marks: "5",
          topic: "leaching", sub: "Assumptions for constant underflow and overflow in washing",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q4b"],
          text: String.raw`What assumptions should we make if we wish to have underflow and overflow liquid flow-rates equal in washing? Explain the reasons.`,
          solution: String.raw`The underflow liquid rate is (per unit dry solids S)

$$U = \frac{\varepsilon\rho_f}{(1-\varepsilon)\rho_s}S$$

For U to be the same in every stage (and hence, from the overall balance, the overflow O also constant from stage to stage):

1. **No solids in the overflow and the solids do not dissolve**, so the solids flow S is constant through the cascade.
2. **Constant fluid and solid densities** $\rho_f$, $\rho_s$: the solute has little effect on the fluid density, i.e. the solution is dilute.
3. **Constant porosity** $\varepsilon$: the solids entrain the same volume of liquid per unit volume in every stage (same settling/packing behaviour).

Then $U_j = U$ and $O_j = O$ are constant, so the operating line is straight, with slope U/O; with the washing equilibrium $y = x$ the McCabe–Thiele and Kremser methods apply with no extra assumptions. (Underflow and overflow are each constant through the cascade; they are equal to each other only if the wash-liquid rate is chosen equal to U.)`,
          answer: String.raw`No solids in the overflow and no dissolving solids (constant S), constant ρ_f and ρ_s (dilute), constant porosity ε; then U is constant and, by the overall balance, so is O (straight operating line).` },
        { id: "2023-24-Q5d", label: "(d)", marks: "20",
          topic: "partial-extraction", sub: "Steps: countercurrent acetic acid–water–IPE on triangular diagram",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`We have 450 kg/h of a feed that is 20 wt% acetic acid and 70 wt% water and 10% isopropyl ether. This will be extracted by using counter-current system with pure isopropyl ether at 250 kg/hr. Operation is at 1 atm and 25°C. Write down the STEPS in detail how to

i. Draw a triangular diagram for partially miscible extraction system and conjugate lines.

ii. Find the outlet concentrations and the number of equilibrium stages required for this separation.

**Do not** show any calculations. Explain your steps with the necessary **hand-sketch** diagram(s).`,
          solution: String.raw`> Data: no table is given, so use Wankat Table 13-5 (water–acetic acid–isopropyl ether, 20 °C, 1 atm, Treybal) as in the slides. The paper gives no raffinate specification; a design spec such as the raffinate acid fraction $x_{A,1}$ (or the number of stages N) must be supplied; the steps below assume $x_{A,1}$ is specified.

**(i) Triangular diagram and conjugate line**

1. Draw a right triangle: x-axis = wt fraction **water (diluent, D)**, y-axis = wt fraction **acetic acid (solute, A)**; IPE (solvent) = 1 − A − D. The origin is pure IPE, (1, 0) pure water, (0, 1) pure acid.
2. Plot the **raffinate (water-layer) points** $(x_D, x_A)$ and the **extract (ether-layer) points** $(y_D, y_A)$ from the table; join each set by a smooth curve. Together they form the binodal (saturation) curve; inside it is the two-phase region.
3. Join each raffinate point to its extract point (same table row): these are the **tie lines**.
4. **Conjugate line:** for each tie line, draw a horizontal line from the extract point and a vertical line from the raffinate point; their intersection $(x_{D,R}, y_{A,E})$ is one point. Join these points: the conjugate line. Any new tie line is found by reversing this (from a raffinate point go vertically to the conjugate line, then horizontally to the extract curve).

**(ii) Outlet concentrations and stages (difference-point method)**

1. Plot the streams: feed $F = R_{N+1}$ at (0.70, 0.20) (it contains 10% IPE, so it lies inside the two-phase region; that is fine for a mixing point); solvent $S = E_0$ at the origin; raffinate $R_1$ on the raffinate curve at the specified $x_{A,1}$.
2. **Mixing point M** on line SF: $M = F + S = 700$ kg/h, located by the lever rule $\frac{\overline{MS}}{\overline{FM}} = \frac{F}{S} = \frac{450}{250}$ (or $x_{A,M} = (Fx_{A,F} + Sy_{A,S})/M$).
3. **Extract product:** draw $R_1M$ and extend it to the extract curve: that gives $E_N$ and its composition ($y_{A,N}$, $y_{D,N}$). Flows from the lever rule, $E_N/M = \overline{R_1M}/\overline{R_1E_N}$, $R_1 = M - E_N$. These are the outlet concentrations.
4. **Difference point:** $\Delta = E_0 - R_1 = E_N - R_{N+1}$. Draw line $R_1S$ and line $FE_N$, both extended; their intersection is Δ. Here S/F is small, so $R_1 > E_0$ and Δ lies far to the **right** of the diagram.
5. **Step off stages** from the solvent end: from $R_1$ follow the tie line (via the conjugate line) to $E_1$; draw the operating line $\Delta E_1$ to the raffinate curve to get $R_2$; tie line to $E_2$; continue until a tie line reaches or passes $E_N$. Count the stages (the last as a fraction).
6. **Check:** if an operating line through Δ coincides with a tie line, the solvent rate is below the minimum (pinch, infinite stages). With only 250 kg/h IPE for 450 kg/h feed, a check with the Table 13-5 data shows the raffinate cannot be brought much below about 0.16–0.17 wt fraction acid; a lower $x_{A,1}$ needs more solvent.

![Sketch of the countercurrent construction on the acetic acid–water–IPE diagram: binodal, tie lines, conjugate line, F, S, M, R1, E_N, and operating lines toward Δ on the far right](fig/2023-24-Q5d-sol.svg)

(The sketch uses $x_{A,1} = 0.165$ for illustration: about 2–3 stages.)`,
          answer: String.raw`Plot binodal, tie lines and conjugate line from Table 13-5; locate F, S, R1, M (lever rule), E_N on line R1M; Δ = intersection of R1S and FE_N (far right since R1 > S); alternate tie lines and Δ-lines from R1 to E_N to count stages. A raffinate spec is missing; with S = 250 kg/h x_A,1 cannot fall much below ≈ 0.16.` } ] },

    { id: "2023-24-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q6", label: "", marks: "15+10+10",
          topic: "partial-extraction", sub: "Pyridine–water–chlorobenzene: single stage and 2-stage cross flow",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`We have 500 kg/h of a feed that is 30 wt% pyridine and 70 wt% water. This will be extracted with pure chlorobenzene. Operation is at 1 atm and 25°C. Equilibrium data are in the Table below:

(i) Draw a triangular diagram for partially miscible extraction system with the provided data in the below table and construct conjugate lines.

(ii) If a single mixer-settler is used with Chlorobenzene flow rate of 300 kg/h, find the outlet extract and raffinate flow rates and weight fractions.

(iii) We now want to convert the single-stage system in part (i) into a two-stage cross flow system. The raffinate from part (i) is fed to the second mixer-settler and is contacted with an additional 300 kg/h of pure chlorobenzene. Find the raffinate and extract flow rates and weight fractions leaving the second stage.

Table: Equilibrium data for pyridine, water, chlorobenzene at 25°C and 1 atm.

| Extract: wt frac pyridine | Extract: wt frac water | Raffinate: wt frac pyridine | Raffinate: wt frac water |
|---|---|---|---|
| 0 | 0.0005 | 0 | 0.9992 |
| 0.1105 | 0.0067 | 0.0502 | 0.9482 |
| 0.1895 | 0.0115 | 0.1105 | 0.8871 |
| 0.2410 | 0.0162 | 0.1890 | 0.8072 |
| 0.2860 | 0.0225 | 0.2550 | 0.7392 |
| 0.3155 | 0.0287 | 0.3610 | 0.6205 |
| 0.3505 | 0.0395 | 0.4495 | 0.5087 |
| 0.4060 | 0.0640 | 0.5320 | 0.3790 |
| 0.490 | 0.132 | 0.490 | 0.132 |`,
          solution: String.raw`This is Wankat Problem 13.D23 (data = Wankat Table 13-7, as printed). Pyridine = solute A, water = diluent D, chlorobenzene = solvent S.

**(i) Diagram**

1. Right triangle: x-axis wt frac water, y-axis wt frac pyridine; chlorobenzene = 1 − A − D (origin = pure chlorobenzene).
2. Plot the extract points (water, pyridine) on the left (chlorobenzene-rich) branch and the raffinate points on the right (water-rich) branch; join them into the binodal curve; the last row (0.132, 0.490) is the plait point.
3. Join each row's extract and raffinate points: tie lines.
4. Conjugate line: for each tie line take the point (water of the raffinate, pyridine of the extract), i.e. vertical from R, horizontal from E; join the points.

![Pyridine–water–chlorobenzene diagram with tie lines, conjugate line and the single-stage and second-stage constructions](fig/2023-24-Q6-sol.svg)

**(ii) Single mixer-settler, S = 300 kg/h**

**Assumptions:** one equilibrium stage, isothermal; the tie line through M is interpolated between the data tie lines (equivalent to using the conjugate line); readings ±0.005.

1. Mixing point: $M_1 = 500 + 300 = 800$ kg/h,

$$x_{A,M} = \frac{500(0.30)}{800} = 0.1875,\quad x_{D,M} = \frac{500(0.70)}{800} = 0.4375\quad(\text{chlorobenzene } 0.375)$$

2. Tie line through $M_1$ (between the 3rd and 4th data tie lines):
   - extract $E_1$: pyridine 0.220, water 0.014, chlorobenzene 0.766
   - raffinate $R_1$: pyridine 0.157, water 0.840, chlorobenzene 0.003
3. Flows from the pyridine balance (lever rule):

$$E_1 = M\frac{x_{A,M} - x_{A,R}}{y_{A,E} - x_{A,R}} = 800\,\frac{0.1875-0.1567}{0.2198-0.1567} = 390\ \mathrm{kg/h},\qquad R_1 = 800 - 390 = 410\ \mathrm{kg/h}$$

Check, water: $390(0.0143) + 410(0.840) = 350$ ✓ (= 500 × 0.70).

**(iii) Second cross-flow stage, fresh S = 300 kg/h** (feed = $R_1$, 410 kg/h)

1. $M_2 = 410 + 300 = 710$ kg/h; pyridine $= 410(0.1567)/710 = 0.0905$; water $= 410(0.840)/710 = 0.485$.
2. Tie line through $M_2$ (between the 2nd and 3rd data tie lines):
   - extract $E_2$: pyridine 0.123, water 0.007, chlorobenzene 0.870
   - raffinate $R_2$: pyridine 0.060, water 0.939, chlorobenzene 0.002
3. Flows:

$$E_2 = 710\,\frac{0.0905-0.0597}{0.1229-0.0597} = 346\ \mathrm{kg/h},\qquad R_2 = 710 - 346 = 364\ \mathrm{kg/h}$$

Overall: pyridine left in the final raffinate $= 364(0.0597) = 21.7$ kg/h, so 85.5% of the 150 kg/h pyridine is extracted (vs 57% in the single stage).

**Exam tip:** in cross flow the raffinate of stage 1 is the feed of stage 2; locate each new M on the line from that raffinate to the fresh-solvent point.`,
          answer: String.raw`(ii) M = 800 kg/h (0.1875 pyr): E₁ ≈ 390 kg/h (0.220 pyr, 0.014 water), R₁ ≈ 410 kg/h (0.157 pyr, 0.840 water). (iii) E₂ ≈ 346 kg/h (0.123 pyr, 0.007 water), R₂ ≈ 364 kg/h (0.060 pyr, 0.939 water).` } ] },

    { id: "2023-24-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q7a", label: "(a)", marks: "23",
          topic: "leaching", sub: "Countercurrent washing of beach sand: stages by McCabe–Thiele",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`You wish to collect sand from the beach for a glass factory. However, the wet sand carries with it seawater entrained between the sand grains. Several studies have shown that 30% by volume seawater is consistently carried with the sand. The seawater is 0.05 wt% salt, which must be removed by a washing process. Densities: Water: 1.0 g/cm³ (assume constant); Dry sand: 2.5 g/cm³. You desire a final wet sand product in which the entrained water has 0.002 wt% salt. For each 1000 kg/hr of wet sand fed you will use 0.5 kg/hr of pure wash water. In a countercurrent washing process, how many stages are required? What is the outlet concentration of the wash water? You must use McCabe Thiele method to answer this question (graphically).`,
          solution: String.raw`This is a version of slide Problem D2 (Wankat 14.D2).

> Misprint: 0.5 kg/h of wash water per 1000 kg/h of wet sand is impossible. The underflow carries 146 kg/h of water, and with O/U = 0.0034 at most 0.34% of the salt could be removed even with infinite stages. I take **0.5 kg wash water per kg wet sand**, i.e. O = 500 kg/h per 1000 kg/h of wet sand (the book's "0.5 kg per 1000 cm³" scaled the same way).

**Given:** 30 vol% seawater in the wet sand ($\varepsilon = 0.30$); $\rho_w = 1000$ kg/m³, $\rho_{sand} = 2500$ kg/m³; $x_0 = 0.05$ wt% salt (entering underflow liquid); $x_N = 0.002$ wt%; pure wash water $y_{N+1} = 0$; basis 1000 kg/h wet sand.

**Assumptions:** constant underflow and overflow (no sand dissolves or leaves in the overflow, constant densities since dilute, constant ε); equilibrium stages with $y = x$.

1. **Underflow liquid.** Per m³ wet sand: water 0.30(1000) = 300 kg, sand 0.70(2500) = 1750 kg, total 2050 kg.

$$U = 1000\,\frac{300}{2050} = 146.3\ \mathrm{kg/h},\qquad \text{sand} = 853.7\ \mathrm{kg/h}$$

2. **Outlet wash water** (salt balance, $U x_0 + O y_{N+1} = U x_N + O y_1$):

$$y_1 = \frac{U}{O}(x_0 - x_N) = \frac{146.3}{500}(0.05 - 0.002) = 0.0140\ \text{wt\% salt}$$

3. **Operating line** (passing streams $x_j$, $y_{j+1}$), slope $U/O = 0.293$:

$$y_{j+1} = 0.2927x_j + (y_1 - 0.2927x_0) = 0.2927x_j - 0.000585\ \ (\text{wt\%})$$

It runs from $(x_N, y_{N+1}) = (0.002, 0)$ to $(x_0, y_1) = (0.05, 0.0140)$. Equilibrium is the 45° line $y = x$.

4. **Step off from the feed end** (stage 1): horizontal from $(x_0, y_1)$ to $y = x$ gives $x_1$; vertical to the operating line gives $y_2$; repeat.

| Stage | $y_j$ (overflow out) | $x_j = y_j$ (underflow out), wt% |
|---|---|---|
| 1 | 0.01405 | 0.01405 |
| 2 | 0.00353 | 0.00353 |
| 3 | 0.00045 | 0.00045 (below 0.002) |

The third step passes $x_N = 0.002$: fraction ≈ $\frac{0.00353-0.002}{0.00353-0.00045} = 0.5$. The Kremser equation (S = O/U = 3.42) gives

$$N = \frac{\ln\left[\frac{x_0}{x_N}\left(1-\frac{U}{O}\right)+\frac{U}{O}\right]}{\ln(O/U)} = \frac{\ln[25(0.7073)+0.2927]}{\ln 3.417} = 2.35$$

![McCabe–Thiele diagram for washing: y = x and operating line of slope 0.293, about 2.4–2.5 stages](fig/2023-24-Q7a-sol.svg)

![Zoom of the clean end of the washing diagram](fig/2023-24-Q7a-sol2.svg)

**Result:** about 2.4–2.5 equilibrium stages → **3 countercurrent stages**; outlet wash water **0.014 wt% salt** (1.4 × 10⁻⁴ wt frac).

**Exam tip:** in washing the equilibrium line is always y = x; the dilute end needs a zoomed graph to count the last fractional stage.`,
          answer: String.raw`U = 146 kg/h per 1000 kg/h wet sand; taking O = 500 kg/h (misprint), y₁ = 0.014 wt% salt; about 2.4 stages (Kremser 2.35) → 3 countercurrent stages.` },
        { id: "2023-24-Q7b", label: "(b)", marks: "6",
          topic: "leaching", sub: "Leaching vs washing",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`How does leaching differ from washing? Explain.`,
          solution: String.raw`| | Washing | Leaching (solid–liquid extraction) |
|---|---|---|
| Where the solute is | dissolved in the liquid **entrained** between/in the pores of the solid; not part of the solid | **part of the solid** matrix, must dissolve into the solvent |
| Equilibrium | $y = x$: same concentration in underflow and overflow liquid | not $y = x$; measured solid–solvent equilibrium (often an effective $y = m_E x$) |
| Solids flow | constant (inert solid, does not dissolve) | usually not constant, because the solid loses solute |
| Rate | fast: just displacement and mixing of liquid | slow: diffusion through the solid, so equilibrium may take days or years |
| Analysis | constant U and O: straight operating line, McCabe–Thiele or Kremser directly | rigorous analysis needs variable flows (like partially miscible extraction); simple cases use an effective equilibrium constant |

Washing can be seen as a **special case of leaching** in which the solute only has to be displaced from the pores. Both use similar equipment (mixer-settlers, thickeners, Rotocel-type extractors).`,
          answer: String.raw`In washing the solute is in the entrained liquid and is displaced (y = x, constant solids flow, fast); in leaching it is part of the solid and must dissolve and diffuse out (y ≠ x, varying solids flow, slow, effective m_E).` },
        { id: "2023-24-Q7c", label: "(c)", marks: "6",
          topic: "leaching", sub: "Why an effective equilibrium constant in leaching",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q1e"],
          text: String.raw`Why do we have to use effective equilibrium constant in leaching? Explain.`,
          solution: String.raw`The simple leaching analysis assumes **no liquid entrained with the solid** and **equilibrium stages**. In practice both are faulty:

- The underflow always **entrains solution**, so solute leaves in the liquid carried with the solid as well as inside it.
- **Diffusion inside the solid is very slow**, so in a practical residence time the solid never reaches equilibrium with the liquid (pickles take days, in-situ copper leaching years).

Their combined effect is lumped into an **effective equilibrium constant** measured on the real system:

$$y = m_E x\qquad m_E = \frac{\text{concentration in liquid (e.g. g/L)}}{\text{concentration in solid (g/L)}}$$

Using $m_E$ keeps the McCabe–Thiele diagram in the same form and, because it is taken as linear, lets the Kremser equation be used (slide examples: sugar cane, 11 stages, $m_E = 1.18$; soybean oil, 5 stages, 97.5% recovery). It is easy to measure and use, but it is **not a fundamental property**: it depends on the flow conditions and residence time and is valid only at the conditions where it was measured.`,
          answer: String.raw`Because real leaching has liquid entrainment and non-equilibrium (diffusion-limited) stages; an effective y = m_E x measured at operating conditions lumps both and keeps McCabe–Thiele/Kremser usable (valid only at those conditions).` } ] },

    { id: "2023-24-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q8a", label: "(a)", marks: "25",
          topic: "absorption", sub: "Vinyl chloride stripper: G_min and stages at 2G_min",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A water cleanup is stripping vinyl chloride from contaminated ground water at 25°C and 850 mm Hg using a countercurrent, staged stripper. The feed is 5.0 (mole fraction) vinyl chloride. An outlet water that contains 0.1 (mole fraction) vinyl chloride is required. The inlet air used for stripping is pure. In mole fraction units, the equilibrium is y = 1147.9x. For a base liquid flow rate of L = 1.0 kmol/h, determine the following:

i. The minimum gas flow rate $G_{min}$ in kmol/h.

ii. If $G = 2G_{min}$, use a McCabe-Thiele diagram to determine the number of equilibrium stages needed (including a fractional number).`,
          solution: String.raw`This is Wankat Problem 12.D13.

> Misprint: mole fractions of 5.0 and 0.1 are impossible; the book gives **5.0 ppm (molar)** and **0.1 ppm (molar)**, used here: $x_0 = 5.0\times10^{-6}$, $x_N = 1.0\times10^{-7}$.

**Given:** L = 1.0 kmol/h water; $y_{N+1} = 0$ (pure air); $y = 1147.9x$ (25 °C, 850 mm Hg).

**Assumptions:** very dilute, so total L and G are constant; isothermal, isobaric; straight equilibrium line; water nonvolatile, air insoluble.

**(i) Minimum gas rate**

1. For a stripper the operating line (slope L/G) passes through $(x_N, y_{N+1}) = (1.0\times10^{-7}, 0)$; less gas means a steeper line, which pinches at the liquid-inlet end where $y_1 = y_1^* = m x_0$:

$$y_1^* = 1147.9(5.0\times10^{-6}) = 5.74\times10^{-3}$$

2. Maximum slope:

$$\left(\frac{L}{G}\right)_{max} = \frac{y_1^* - y_{N+1}}{x_0 - x_N} = \frac{5.74\times10^{-3}}{4.9\times10^{-6}} = 1171.3$$

3.

$$G_{min} = \frac{1.0}{1171.3} = 8.54\times10^{-4}\ \mathrm{kmol/h}$$

**(ii) Stages at G = 2G_min**

1. $G = 1.707\times10^{-3}$ kmol/h, $L/G = 585.7$.
2. Outlet gas: $y_1 = \frac{L}{G}(x_0 - x_N) = 585.7(4.9\times10^{-6}) = 2.87\times10^{-3}$.
3. Operating line: $y_{j+1} = 585.7x_j + (y_1 - 585.7x_0) = 585.7x_j - 5.86\times10^{-5}$, from (0.1 ppm, 0) to (5 ppm, 2.87 × 10⁻³). Use different scales on the two axes (x in ppm, y × 10³).
4. **Step off from the top** (liquid inlet): horizontal from $(x_0, y_1)$ to equilibrium, $x_j = y_j/1147.9$; vertical down to the operating line.

| Stage | $y_j \times 10^3$ | $x_j$, ppm |
|---|---|---|
| 1 | 2.870 | 2.500 |
| 2 | 1.406 | 1.224 |
| 3 | 0.659 | 0.574 |
| 4 | 0.277 | 0.242 |
| 5 | 0.083 | 0.072 (below 0.1) |

Fraction of stage 5: $\frac{0.242-0.1}{0.242-0.072} = 0.84$, so **N ≈ 4.8 equilibrium stages → 5 stages**.

5. **Kremser check**, $S = mG/L = 1147.9/585.7 = 1.96$:

$$N = \frac{\ln\left[\frac{x_0}{x_N}\left(1-\frac{1}{S}\right)+\frac{1}{S}\right]}{\ln S} = \frac{\ln[50(0.4898)+0.5102]}{\ln 1.96} = 4.78$$

![McCabe–Thiele diagram for the vinyl chloride stripper at G = 2 G_min: 4.8 stages](fig/2023-24-Q8a-sol.svg)

**Exam tip:** a stripper's minimum gas is set by the pinch at the liquid inlet ($y_1 = mx_0$), not at the bottom.`,
          answer: String.raw`(Feed 5 ppm, outlet 0.1 ppm.) (L/G)max = 1171 → G_min = 8.5 × 10⁻⁴ kmol/h; at 2G_min, L/G = 586, y₁ = 2.87 × 10⁻³, N ≈ 4.8 (Kremser 4.78) → 5 equilibrium stages.` },
        { id: "2023-24-Q8b", label: "(b)", marks: "10",
          topic: "absorption", sub: "Acetone absorber in water, Kremser",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A countercurrent absorber is used to absorb acetone from air into water at 3 atm pressure and 20°C. The total inlet gas flow rate is 100 kmol/h. The inlet gas is 0.004 mole fraction acetone. The inlet liquid contains 0.0001 mole fraction acetone and flow rate is 62 kmol/h. Outlet gas is 0.0002 mole fraction acetone. Assume total liquid and gas flow rates are constant. At 20°C the Henry's law constant for acetone in water is H = 1.186 atm/mole fraction. Find the required number of stages and the mole fraction acetone in the outlet liquid.

Kremser equation in liquid and gas phase (printed on the paper):

$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1-\frac{mV}{L}}{1-\left(\frac{mV}{L}\right)^{N+1}},\qquad \frac{y_{N+1}-y_1^*}{y_1-y_1^*} = \frac{1-\left(\frac{L}{mV}\right)^{N+1}}{1-\frac{L}{mV}}$$`,
          solution: String.raw`**Given:** V = 100 kmol/h, $y_{N+1} = 0.004$; L = 62 kmol/h, $x_0 = 0.0001$; $y_1 = 0.0002$; p = 3 atm, H = 1.186 atm/mol frac; constant L and V.

**Assumptions:** dilute, isothermal, isobaric, negligible heat of absorption, Henry's law (straight equilibrium line): Kremser applies.

1. **Equilibrium:** $y = \frac{H}{p}x = \frac{1.186}{3}x = 0.3953x$, so m = 0.3953.
2. **Absorption factor:** $A = \frac{L}{mV} = \frac{62}{0.3953(100)} = 1.568$; $\frac{mV}{L} = 0.6376$.
3. **Outlet liquid** (balance $V(y_{N+1} - y_1) = L(x_N - x_0)$):

$$x_N = 0.0001 + \frac{100(0.004 - 0.0002)}{62} = 6.23\times10^{-3}$$

4. **Stages**, gas-phase Kremser solved for N with $y_1^* = m x_0 = 3.953\times10^{-5}$:

$$N = \frac{\ln\left[\left(1-\frac{mV}{L}\right)\frac{y_{N+1}-y_1^*}{y_1-y_1^*}+\frac{mV}{L}\right]}{\ln\frac{L}{mV}} = \frac{\ln\left[0.3624\,\frac{0.004-0.0000395}{0.0002-0.0000395}+0.6376\right]}{\ln 1.568} = \frac{\ln 9.580}{0.4499} = 5.02$$

Check with the liquid form ($x_N^* = y_{N+1}/m = 0.01012$): both sides equal 0.388 ✓.

5. **Stage-by-stage check** (top-down, $x_j = y_j/m$, $y_{j+1} = 0.62(x_j - x_0) + y_1$):

| Stage | $y_j\times10^3$ | $x_j\times10^3$ |
|---|---|---|
| 1 | 0.200 | 0.506 |
| 2 | 0.452 | 1.142 |
| 3 | 0.846 | 2.141 |
| 4 | 1.465 | 3.707 |
| 5 | 2.436 | 6.162 |
| 6 | 3.958 | (beyond $x_N$ = 6.23) |

![McCabe–Thiele diagram for the acetone absorber: about 5.0 stages above the equilibrium line](fig/2023-24-Q8b-sol.svg)

**Result:** N = 5.02 ≈ **5 equilibrium stages** (5 stages give $y_1 = 2.02\times10^{-4}$, essentially the spec; use 6 to guarantee it); outlet liquid $x_N = 6.23\times10^{-3}$ mole fraction acetone.`,
          answer: String.raw`m = H/p = 0.395, L/mV = 1.57; x_N = 6.23 × 10⁻³; N = 5.02 ≈ 5 equilibrium stages.` } ] }
  ] });
