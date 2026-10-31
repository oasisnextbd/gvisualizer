QB.paper({ year: "Practice", set: "Advanced binary distillation", date: "", marks: 0, practice: true,
  rules: String.raw`Multiple feeds and side draws, partial condensers, total reboilers, open steam, total and minimum reflux and Murphree efficiency: every worked problem from slide deck 5 (Fractional Distillation Part C), the starred Wankat 3e problems 4.D22–4.G3, and exam-style practice problems.`,
  questions: [
    { id: "practice-advanced-distillation-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P1a", label: "", marks: "", topic: "advanced-distillation",
        sub: "Two feeds and a liquid side draw, benzene–toluene, α = 2.5", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 05 (Fractional Distillation Part C), pp. 6–10`,
        text: String.raw`A column separates benzene and toluene, with a constant relative volatility $\alpha = 2.5$. It has two feeds and one liquid side draw:

| stream | flow (kmol/h) | benzene mole fraction | condition |
|---|---|---|---|
| Feed 1 | 100 | 0.60 | saturated liquid |
| Feed 2 | 60 | 0.30 | saturated vapor |
| Side draw S | 20 | about 0.45 (target) | saturated liquid |

The column has a total condenser and runs at $R = L_0/D = 2$. The distillate is 95 mol% benzene and the bottoms 5 mol% benzene.

Find D and B, the operating line of every section, the total number of equilibrium stages, and the stages where each feed enters and the side draw is taken.`,
        solution: String.raw`**Given:** $F_1 = 100$ ($z_1 = 0.60$, $q = 1$), $F_2 = 60$ ($z_2 = 0.30$, $q = 0$), $S = 20$ kmol/h liquid at $x_S \approx 0.45$, $R = 2$, $x_D = 0.95$, $x_B = 0.05$, $\alpha = 2.5$.

**Find:** D, B, four operating lines, N, feed and draw stages.

**Assumptions:** CMO, constant pressure, total condenser with saturated reflux, partial reboiler counted as an equilibrium stage. The balance uses the target $x_S = 0.45$.

### 1. Overall balances (step 2 of the slide procedure)
$$F_1 + F_2 = D + B + S \;\Rightarrow\; D + B = 140$$
$$F_1z_1 + F_2z_2 = Dx_D + Bx_B + Sx_S \;\Rightarrow\; 60 + 18 - 9 = 0.95D + 0.05B = 69$$
$$D = \frac{69 - 0.05(140)}{0.95 - 0.05} = 68.89\ \mathrm{kmol/h}, \qquad B = 71.11\ \mathrm{kmol/h}$$

### 2. Order of the column and internal flows (steps 3–4)

![Column flowsheet: Feed 1 on stage 4, side draw from stage 5, Feed 2 on stage 8, with the flows of the four sections](fig/practice-advanced-distillation-P1.svg)

By composition, top to bottom: distillate 0.95, Feed 1 (0.60), side draw (0.45), Feed 2 (0.30), bottoms 0.05. Three injections or draws give **four sections**. A saturated liquid changes only L; a saturated vapor changes only V.

| section | between | L (kmol/h) | V (kmol/h) |
|---|---|---|---|
| I | condenser – Feed 1 | $L = RD = 137.78$ | $V = (R+1)D = 206.67$ |
| II | Feed 1 – side draw | $L' = L + F_1 = 237.78$ | $V' = 206.67$ |
| III | side draw – Feed 2 | $L'' = L' - S = 217.78$ | $V'' = 206.67$ |
| IV | Feed 2 – reboiler | $\bar{L} = 217.78$ | $\bar{V} = V'' - F_2 = 146.67$ |

Check: $\bar{L} - \bar{V} = 71.11 = B$.

### 3. Operating lines (step 5), each from a balance around the top of the column
- I: $Vy = Lx + Dx_D$, so $y = 0.6667x + 0.3167$
- II: $V'y = L'x + Dx_D - F_1z_1$, so $y = 1.1505x + 0.0263$
- III: $V''y = L''x + Dx_D - F_1z_1 + Sx_S$, so $y = 1.0538x + 0.0699$
- IV: $\bar{V}y = \bar{L}x - Bx_B$, so $y = 1.4848x - 0.0242$

### 4. q-lines and intersections (steps 6–7)
- Feed 1 (saturated liquid): vertical line x = 0.60. Lines I and II meet at (0.600, 0.717).
- Side draw: lines II and III meet at x = $x_S$ = 0.45, y = 0.544 (the draw term $Sx$ cancels there).
- Feed 2 (saturated vapor): horizontal line y = 0.30. Lines III and IV meet at (0.218, 0.300).

Each q-line passes through the intersection of the lines on either side of it, which checks the balances.

### 5. Stepping from the top (step 8)
Equilibrium: $x = y/(\alpha - (\alpha-1)y) = y/(2.5 - 1.5y)$. Switch lines as soon as a step passes an intersection. The side draw is taken from stage 5, whose liquid (0.474) is the one closest to the 0.45 target, so line III is used just below stage 5.

| stage | x | y | line used below this stage |
|---|---|---|---|
| 1 | 0.8837 | 0.9500 | I |
| 2 | 0.7937 | 0.9058 | I |
| 3 | 0.6869 | 0.8458 | I |
| 4 (Feed 1) | 0.5789 | 0.7746 | II |
| 5 (side draw) | 0.4738 | 0.6924 | III |
| 6 | 0.3457 | 0.5691 | III |
| 7 | 0.2348 | 0.4342 | III |
| 8 (Feed 2) | 0.1568 | 0.3174 | IV |
| 9 | 0.0954 | 0.2086 | IV |
| 10 | 0.0505 | 0.1174 | IV |
| 11 | 0.0209 | 0.0507 | – |

$x_{10} = 0.0505$ is practically $x_B$: fraction of stage 11 needed $= (0.0505 - 0.05)/(0.0505 - 0.0209) = 0.02$, so **N = 10.02 ≈ 10 equilibrium stages (9 trays + partial reboiler)**, as on the slide. If the draw is placed exactly at the line intersection instead (draw below stage 6), N = 10.04, which is the same answer.

![McCabe–Thiele diagram: two feeds and a side draw, 10 stages, F1 on stage 4, side draw from stage 5, F2 on stage 8](fig/practice-advanced-distillation-P1-sol.svg)

### 6. Answers (step 9)
Feed 1 enters stage 4, the side draw comes from stage 5 (liquid 0.474 mol% benzene, close to the 0.45 target), Feed 2 enters stage 8, and stage 10 is the partial reboiler.

**Exam tip:** write the flows of every section in one table before any operating line. A saturated-liquid stream changes only L and a saturated-vapor stream changes only V, and $\bar{L} - \bar{V} = B$ is a free check.`,
        answer: String.raw`D = 68.9, B = 71.1 kmol/h. Lines: $y = 0.667x + 0.317$, $1.151x + 0.026$, $1.054x + 0.070$, $1.485x - 0.024$. About 10 equilibrium stages (9 trays + reboiler): F1 on stage 4, side draw from stage 5, F2 on stage 8.` } ] },

    { id: "practice-advanced-distillation-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P2a", label: "", marks: "", topic: "advanced-distillation",
        sub: "Equilibrium partial condenser, α = 2.5, 40% leaves as vapor", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 05 (Fractional Distillation Part C), pp. 15–16`,
        text: String.raw`The vapor leaving the top tray of a binary column (70 mol% of the more volatile component, MVC) goes to an equilibrium partial condenser. The relative volatility is constant at 2.5. Of the total flow leaving the condenser, 40% leaves as vapor (the distillate) and the rest is returned as liquid reflux. Assume ideal VLE and CMO.

Find the compositions of the liquid and vapor leaving the condenser, and check the material balance around the condenser.`,
        solution: String.raw`**Given:** $y_1 = 0.70$, $\alpha = 2.5$, $D/V_1 = 0.40$, $L_0/V_1 = 0.60$.

**Find:** $y_D$ and $x_0$.

**Assumptions:** the partial condenser is one equilibrium stage, so $y_D$ and $x_0$ are in equilibrium. Steady state, CMO.

1. **Basis:** $V_1 = 100$ mol, so D = 40 mol of vapor and $L_0$ = 60 mol of liquid.
2. **MVC balance** (this is the flash operating line):
$$V_1y_1 = Dy_D + L_0x_0 \;\Rightarrow\; 0.70 = 0.4\,y_D + 0.6\,x_0$$
3. **Equilibrium:** $y_D = \dfrac{2.5\,x_0}{1 + 1.5\,x_0}$
4. **Combine:** $0.6x_0(1 + 1.5x_0) + x_0 - 0.7(1 + 1.5x_0) = 0$, which gives
$$0.9x_0^2 + 0.55x_0 - 0.7 = 0 \;\Rightarrow\; x_0 = \frac{-0.55 + \sqrt{0.3025 + 2.52}}{1.8} = 0.6278$$
$$y_D = \frac{2.5(0.6278)}{1 + 1.5(0.6278)} = 0.8083$$
5. **Check, MVC:** $40(0.8083) + 60(0.6278) = 32.33 + 37.67 = 70.0$ mol, equal to $100(0.70)$. **Less volatile:** $40(0.1917) + 60(0.3722) = 7.67 + 22.33 = 30.0$ mol. **Total:** 40 + 60 = 100.
6. **Equilibrium check:** $\dfrac{y_D/x_0}{(1-y_D)/(1-x_0)} = \dfrac{1.2875}{0.5150} = 2.50$.

**Link to the column:** the top operating line is $y = (L/V)x + (1 - L/V)y_D = 0.6x + 0.323$. It passes through $(y_D, y_D)$, not through the vapor $y_1$. On the McCabe–Thiele diagram the condenser is the first step from $(y_D, y_D)$ to the equilibrium curve at $x_0$.

**Exam tip:** a partial condenser is an extra equilibrium stage, counted on the diagram like a tray. A total condenser is not.`,
        answer: String.raw`Liquid reflux $x_0 = 0.628$, vapor distillate $y_D = 0.808$. Balance: $40(0.808) + 60(0.628) = 70.0$ mol MVC per 100 mol of vapor, as required.` } ] },

    { id: "practice-advanced-distillation-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P3a", label: "", marks: "", topic: "advanced-distillation",
        sub: "Open (direct) steam heating, methanol–water, L0/D = 3", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 05 (Fractional Distillation Part C), pp. 18–20; Wankat 3e, Example 4-4`,
        text: String.raw`A feed of 350 kmol/h, 60 mol% methanol and 40 mol% water, enters as a two-phase mixture with $V_F/F = 0.3$. The insulated column has a total condenser with saturated-liquid reflux at $L_0/D = 3.0$. The distillate should be 95 mol% methanol and the bottoms 8 mol% methanol. There is no reboiler: saturated steam at 1 atm is sparged into the bottom of the column. Pressure is 1 atm.

Find the number of equilibrium stages and the optimum feed stage.`,
        solution: String.raw`**Given:** F = 350 kmol/h, z = 0.60, $q = 1 - V_F/F = 0.7$, $L_0/D = 3$, $x_D = 0.95$, $x_B = 0.08$, pure saturated steam ($y_S = 0$).

**Find:** N and the optimum feed stage (plus D, B, S as a check).

**Data:** methanol–water VLE at 1 atm, Wankat Table 2-7 (slides Table 3-3), interpolated with a smooth monotone curve.

**Assumptions:** CMO (latent heats 8.43 and 9.72 kcal/mol differ by 15%, so this is approximate, as Wankat notes), adiabatic column. Saturated steam means $S = \bar{V}$ and $B = \bar{L}$.

1. **Top operating line:** $L/V = \dfrac{L_0/D}{1 + L_0/D} = 0.75$
$$y = 0.75x + (1 - 0.75)(0.95) = 0.75x + 0.2375$$
2. **Feed line:** slope $q/(q-1) = 0.7/(-0.3) = -7/3$, through (0.60, 0.60). It meets the top line at **(0.5716, 0.6662)**.
3. **Bottom operating line with open steam:** $\bar{V}y + Bx_B = \bar{L}x + S y_S$, with $y_S = 0$ and $\bar{L} = B$:
$$y = \frac{\bar{L}}{\bar{V}}(x - x_B)$$
This line passes through **$(x_B, 0)$** on the x-axis, not through $(x_B, x_B)$. Draw it from (0.08, 0) to (0.5716, 0.6662): slope = 1.355.
4. **Flows (check):** $Fz = Dx_D + Bx_B$ with $B = \bar{L} = 3D + 0.7F$:
$$210 = 0.95D + 0.08(3D + 245) \;\Rightarrow\; D = 160.0,\; B = 725.0,\; S = \bar{V} = 4D - 0.3F = 535.0\ \mathrm{kmol/h}$$
The slope is $\bar{L}/\bar{V} = 725/535 = 1.355$, which matches step 3.
5. **Step off from the top** at $(0.95, 0.95)$:

| stage | x | y |
|---|---|---|
| 1 | 0.8812 | 0.9500 |
| 2 | 0.7627 | 0.8984 |
| 3 (feed) | 0.5659 | 0.8095 |
| 4 | 0.2912 | 0.6585 |
| 5 | 0.0548 | 0.2862 |

$x_3 = 0.566$ lies (by chance) almost on the intersection (0.572), so stage 3 is the feed stage. $x_B = 0.08$ is passed in stage 5: fraction $= (0.2912 - 0.08)/(0.2912 - 0.0548) = 0.89$.

**Result: N = 4.9, so 5 equilibrium stages, with the feed on stage 3** (slide: N = 5, feed on stage 3. Wankat: feed on stage 3 or 4, and "five is more than enough"). All five are trays: there is no reboiler stage with open steam.

![McCabe–Thiele diagram for open steam: bottom line ends at (xB, 0); 4.9 stages, feed on stage 3](fig/practice-advanced-distillation-P3-sol.svg)

**Exam tip:** with open steam the bottom line ends at $(x_B, 0)$, and the large steam flow makes B ($= \bar{L}$) much bigger than with a reboiler, so the bottoms is more dilute in the same amount of methanol.`,
        answer: String.raw`Top line $y = 0.75x + 0.2375$; bottom line $y = 1.355(x - 0.08)$ through $(x_B, 0)$. About 4.9, so 5 equilibrium stages, with the optimum feed on stage 3. D = 160, B = 725, S = 535 kmol/h.` } ] },

    { id: "practice-advanced-distillation-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw`A column with a total condenser and a partial reboiler separates acetone and ethanol at 1 atm. The feed is 1000 mol/h of 70 mol% acetone. It is a superheated vapor, and 1 mol of liquid must vaporize on the feed plate to cool every 4 mol of feed. We want $x_B = 0.05$ and $x_D = 0.90$ (acetone). Reflux is a saturated liquid. Acetone–ethanol VLE at 1 atm (mole fraction acetone):

| $x_A$ | 0.10 | 0.15 | 0.20 | 0.25 | 0.30 | 0.35 | 0.40 | 0.50 | 0.60 | 0.70 | 0.80 | 0.90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $y_A$ | 0.262 | 0.348 | 0.417 | 0.478 | 0.524 | 0.566 | 0.605 | 0.674 | 0.739 | 0.802 | 0.865 | 0.929 |`,
      parts: [
        { id: "practice-advanced-distillation-P4a", label: "(a)", marks: "", topic: "advanced-distillation",
          sub: "Total reflux: minimum number of stages, acetone–ethanol", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 05 (Fractional Distillation Part C), p. 29 (data as in Wankat 3e, Problem 4.D7)`,
          text: String.raw`What is the minimum number of equilibrium stages (total reflux)?`,
          solution: String.raw`**Method:** at total reflux D = B = 0 and both operating lines lie on the 45° line, so we step between the equilibrium curve and y = x from $x_D$ down to $x_B$. Neither the feed nor q matters.

**Data:** the table above (Wankat Problem 4.D7), with the end points (0, 0) and (1, 1) added and a smooth monotone interpolation.

| stage | x | y |
|---|---|---|
| 1 | 0.8555 | 0.9000 |
| 2 | 0.7850 | 0.8555 |
| 3 | 0.6729 | 0.7850 |
| 4 | 0.4984 | 0.6729 |
| 5 | 0.2709 | 0.4984 |
| 6 | 0.1045 | 0.2709 |
| 7 | 0.0347 | 0.1045 |

Fraction of the last stage: $(0.1045 - 0.05)/(0.1045 - 0.0347) = 0.78$.

$$N_{min} = 6.8\ \text{equilibrium stages (including the partial reboiler)}$$

So the column needs at least 7 contacts, i.e. about 6 trays plus the reboiler.

![Total reflux staircase for acetone–ethanol: 6.8 stages between y = x and the equilibrium curve](fig/practice-advanced-distillation-P4a-sol.svg)`,
          answer: String.raw`$N_{min} \approx 6.8$ equilibrium stages (partial reboiler included), stepped on the 45° line.` },
        { id: "practice-advanced-distillation-P4b", label: "(b)", marks: "", topic: "advanced-distillation",
          sub: "Minimum reflux with a superheated-vapor feed (q = −1/4)", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 05 (Fractional Distillation Part C), p. 29`,
          text: String.raw`What is the minimum external reflux ratio?`,
          solution: String.raw`1. **q of the feed.** Cooling 4 mol of superheated feed vaporizes 1 mol of liquid on the feed plate, so the liquid flow falls by F/4: $\bar{L} = L - F/4$, i.e. **q = −0.25**.
2. **Feed line:** slope $\dfrac{q}{q-1} = \dfrac{-0.25}{-1.25} = 0.2$, through (0.70, 0.70): $y = 0.2x + 0.56$.
3. **Pinch:** the feed line meets the equilibrium curve at **(0.470, 0.654)**. Testing every point of the curve between there and $x_D$ shows that no point is more limiting (no tangent pinch), so the minimum-reflux line joins $(x_D, x_D)$ to this point:
$$\left(\frac{L}{V}\right)_{min} = \frac{0.90 - 0.654}{0.90 - 0.470} = 0.572$$
4. **Minimum reflux ratio:**
$$R_{min} = \left(\frac{L}{D}\right)_{min} = \frac{(L/V)_{min}}{1 - (L/V)_{min}} = \frac{0.572}{0.428} = 1.34$$

![Minimum reflux: top line from (0.90, 0.90) to the pinch (0.470, 0.654) on the feed line](fig/practice-advanced-distillation-P4b-sol.svg)`,
          answer: String.raw`q = −0.25; pinch at (0.470, 0.654); $(L/V)_{min} = 0.572$, $(L/D)_{min} = 1.34$.` },
        { id: "practice-advanced-distillation-P4c", label: "(c)", marks: "", topic: "advanced-distillation",
          sub: "L/D = 2 Rmin with Murphree vapor efficiency 75%: real stages and feed", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 05 (Fractional Distillation Part C), p. 29`,
          text: String.raw`If $L/D = 2(L/D)_{min}$, find the optimum feed plate and the number of stages using a Murphree vapor efficiency of 75%.`,
          solution: String.raw`**Assumptions:** $E_{MV} = 0.75$ on every column tray. The partial reboiler is an equilibrium contact (efficiency 1). CMO.

1. **Flows:** $R = 2(1.338) = 2.676$. $D = F\dfrac{z - x_B}{x_D - x_B} = 1000\dfrac{0.65}{0.85} = 764.7$ and B = 235.3 mol/h.
$L = 2046.3$, $V = 2811.0$, $\bar{L} = L + qF = 1796.3$, $\bar{V} = V - (1-q)F = 1561.0$ mol/h.
2. **Operating lines:**
- top: $y = \dfrac{L}{V}x + \dfrac{Dx_D}{V} = 0.7280x + 0.2448$
- bottom: $y = \dfrac{\bar{L}}{\bar{V}}x - \dfrac{Bx_B}{\bar{V}} = 1.1507x - 0.0075$
- they meet on the feed line at (0.597, 0.679)
3. **Murphree stepping.** $E_{MV} = \dfrac{y_n - y_{n+1}}{y_n^* - y_{n+1}}$, so the actual vapor point lies 75% of the way up from the operating line to the equilibrium curve. In practice, step between the operating line and the **pseudo-equilibrium curve** $y = y_{op} + 0.75(y^* - y_{op})$. After each real tray, check whether an ideal reboiler step would reach $x_B$.

| real tray | x | y |
|---|---|---|
| 1 | 0.8677 | 0.9000 |
| 2 | 0.8320 | 0.8765 |
| 3 | 0.7923 | 0.8505 |
| 4 | 0.7482 | 0.8216 |
| 5 | 0.6991 | 0.7895 |
| 6 | 0.6443 | 0.7538 |
| 7 (feed) | 0.5855 | 0.7139 |
| 8 | 0.5240 | 0.6663 |
| 9 | 0.4346 | 0.5954 |
| 10 | 0.3161 | 0.4925 |
| 11 | 0.1904 | 0.3562 |
| 12 | 0.0936 | 0.2115 |
| reboiler | 0.033 | 0.100 |

Tray 7 is the first whose liquid is below the intersection (0.597), so it is the optimum feed tray. After tray 12, the vapor from the reboiler is $y = 0.100$, and the ideal reboiler step gives x = 0.033 < 0.05.

**Result: 12 real trays plus the partial reboiler, with the feed on real tray 7 from the top.** For comparison, with ideal stages the same R needs 9.6 equilibrium stages (overall efficiency about 8.6/12 ≈ 0.7).

![Murphree stepping at L/D = 2.68 with EMV = 0.75: 12 real trays + partial reboiler, feed on tray 7](fig/practice-advanced-distillation-P4c-sol.svg)

**Exam tip:** draw the pseudo-equilibrium curve only between the operating lines and the true curve, then step on it exactly as on a normal diagram. If the reboiler is an equilibrium contact, make its step on the true curve.`,
          answer: String.raw`R = 2.68: top $y = 0.728x + 0.245$, bottom $y = 1.151x - 0.0075$. With $E_{MV} = 0.75$: 12 real trays + partial reboiler, feed on tray 7 from the top (9.6 ideal stages would be needed).` } ] },

    { id: "practice-advanced-distillation-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw`A column separates 1000 mol/h of 32 mol% ethanol and 68 mol% water. The feed is a subcooled liquid that condenses 1 mol of vapor on the feed plate for every 4 mol of feed. The column has a partial condenser and is heated by open steam (pure saturated water vapor). We want a distillate vapor $y_D = 0.75$ and bottoms $x_B = 0.10$. CMO is valid. Use ethanol–water VLE at 1 atm (Wankat Table 2-1).`,
      parts: [
        { id: "practice-advanced-distillation-P5a", label: "(a)", marks: "", topic: "advanced-distillation",
          sub: "Minimum reflux with partial condenser and subcooled feed (tangent pinch)", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 05 (Fractional Distillation Part C), p. 30; Wankat 3e, Problem 4.D33*`,
          text: String.raw`Find the minimum external reflux ratio.`,
          solution: String.raw`**Data:** Wankat Table 2-1 (ethanol–water, 1 atm), smooth monotone interpolation.

1. **q:** subcooled feed condenses F/4 of vapor, so $\bar{L} = L + 1.25F$ and **q = 1.25**. Feed line: slope $q/(q-1) = 5$ through (0.32, 0.32), i.e. $y = 5x - 1.28$. It meets the equilibrium curve at (0.377, 0.604).
2. **Top operating line with a partial condenser:** $y = (L/V)x + (1 - L/V)y_D$. It passes through $(y_D, y_D) = (0.75, 0.75)$.
3. **Pinch test.** Through the feed pinch the slope would be $(0.75 - 0.604)/(0.75 - 0.377) = 0.392$. Ethanol–water has a bulge of the curve towards the diagonal around x = 0.5–0.6, and scanning the curve gives a slightly steeper limiting line, which touches the curve at **x ≈ 0.50, y ≈ 0.650 (tangent pinch)**:
$$\left(\frac{L}{V}\right)_{min} = 0.393, \qquad \left(\frac{L}{D}\right)_{min} = \frac{0.393}{1 - 0.393} = 0.647$$

![Minimum reflux for ethanol–water with a partial condenser: tangent pinch near x = 0.50](fig/practice-advanced-distillation-P5a-sol.svg)

**Book answer:** $(L/D)_{min} = 0.659$ ✓ (agrees within graph-reading accuracy: the tangent sits on the flat part of the curve, where a change of 0.003 in y moves the result by about 0.01).`,
          answer: String.raw`$(L/V)_{min} \approx 0.393$, $(L/D)_{min} \approx 0.65$ (tangent pinch near x = 0.50). Book: 0.659.` },
        { id: "practice-advanced-distillation-P5b", label: "(b)", marks: "", topic: "advanced-distillation",
          sub: "Real stages with EMV = 2/3, partial condenser + open steam", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 05 (Fractional Distillation Part C), p. 30; Wankat 3e, Problem 4.D33*`,
          text: String.raw`Use $L/D = 2.0(L/D)_{min}$ and find the number of real stages and the real optimum feed location if $E_{MV} = 2/3$ on all stages.`,
          solution: String.raw`**Assumptions:** the partial condenser is an equilibrium contact; every column tray has $E_{MV} = 2/3$; open steam replaces the reboiler.

1. **Reflux:** $L/D = 2(0.647) = 1.294$, so $L/V = 1.294/2.294 = 0.5640$.
2. **Flows** (open steam: $B = \bar{L}$, $S = \bar{V}$):
$$Fz = Dy_D + Bx_B, \quad B = L + qF = 1.294D + 1250$$
$$320 = 0.75D + 0.10(1.294D + 1250) \;\Rightarrow\; D = 221.7,\; L = 286.9,\; V = 508.6$$
$\bar{L} = B = 1536.9$, $\bar{V} = V - (1-q)F = 758.6$ mol/h.
3. **Operating lines:**
- top: $y = 0.5640x + 0.3270$, through (0.75, 0.75)
- bottom: $y = \dfrac{\bar{L}}{\bar{V}}(x - x_B) = 2.026(x - 0.10)$, through (0.10, 0)
- they meet on the feed line at (0.362, 0.531)
4. **Partial condenser (ideal step):** $x_0 = x^*(0.75) = 0.696$. The vapor from tray 1 is $y_1 = 0.564(0.696) + 0.327 = 0.720$.
5. **Murphree steps** on the pseudo-curve $y = y_{op} + \tfrac{2}{3}(y^* - y_{op})$:

| real tray | x | y |
|---|---|---|
| 1 | 0.6608 | 0.7197 |
| 2 | 0.6242 | 0.6997 |
| 3 | 0.5853 | 0.6791 |
| 4 | 0.5417 | 0.6571 |
| 5 | 0.4888 | 0.6325 |
| 6 | 0.4209 | 0.6027 |
| 7 (feed) | 0.3509 | 0.5644 |
| 8 | 0.2905 | 0.5082 |
| 9 | 0.1679 | 0.3859 |
| 10 | 0.0379 | 0.1375 |

$x_B = 0.10$ is passed on tray 10: fraction $= (0.1679 - 0.10)/(0.1679 - 0.0379) = 0.52$.

**Result: 9.5, so 10 real trays plus the partial condenser, with the feed on real tray 7 from the top** (the 4th tray from the bottom of 10). With ideal stages the same reflux would need 5.7 stages below the condenser.

![Murphree stepping with EMV = 2/3 for ethanol–water with partial condenser and open steam](fig/practice-advanced-distillation-P5b-sol.svg)

**Book answer:** "9 real stages + partial condenser, feed third real stage from the bottom", i.e. feed on tray 7 of 9 from the top ✓ for the feed tray. Our count is 9.5 trays: the last tray falls on the steep low-x part of the ethanol curve, where small reading differences decide whether 9 trays just suffice. Use the book's L/D = 1.318 and the count is still 9.4, so round up to 10 in a design.`,
          answer: String.raw`L/D = 1.29: top $y = 0.564x + 0.327$, bottom $y = 2.026(x - 0.10)$. About 9.5, so 10 real trays + partial condenser, feed on tray 7 from the top. Book: 9 real trays, feed 3rd from the bottom.` },
        { id: "practice-advanced-distillation-P5c", label: "(c)", marks: "", topic: "advanced-distillation",
          sub: "Open steam flow rate", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 05 (Fractional Distillation Part C), p. 30; Wankat 3e, Problem 4.D33*`,
          text: String.raw`Find the steam flow rate used.`,
          solution: String.raw`With saturated steam and CMO, the vapor in the stripping section equals the steam flow:
$$S = \bar{V} = V - (1 - q)F = 508.6 - (1 - 1.25)(1000) = 508.6 + 250 = 758.6\ \mathrm{mol/h}$$

Check the overall balance: $F + S = D + B$, i.e. $1000 + 758.6 = 221.7 + 1536.9$ ✓. Ethanol: $320 = 221.7(0.75) + 1536.9(0.10) = 166.3 + 153.7$ ✓.

In mass terms, $758.6 \times 18.015 = 13{,}670$ g/h of steam per 1000 mol/h of feed.

**Book answer:** S = 760 mol/h (the book prints "lb mol/h = 13,680 lb/h", i.e. the same basis as the feed) ✓.`,
          answer: String.raw`$S = \bar{V} = V + 0.25F \approx 759$ mol/h (about 13.7 kg/h), matching the book's 760.` } ] },

    { id: "practice-advanced-distillation-P6", q: 6, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P6a", label: "", marks: "", topic: "advanced-distillation",
        sub: "Direct cooling with saturated water instead of a condenser: top operating line", type: "derivation", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D22*`,
        text: String.raw`When water is the more volatile component, the condenser can be replaced by direct cooling: pure liquid water (C) is fed to the top stage, and the vapor leaving the top stage is the distillate. Take $y_D = 0.92$, $x_B = 0.04$, $z = 0.4$ (all mole fractions water), saturated-vapor feed of 1000 kmol/h, 1 atm, CMO, cooling water a saturated liquid, and $C/D = 3/4$.

Derive and plot the top operating line. (Balances around the whole column are not needed.)`,
        solution: String.raw`**Given:** $y_D = 0.92$, C/D = 0.75, cooling stream pure water ($x_C = 1$) and a saturated liquid.

**Find:** the top operating line.

**Assumptions:** CMO. A saturated-liquid cooling stream neither condenses nor vaporizes extra vapor.

1. **Envelope** around the top of the column down to the cut between stage j and j + 1. In: $V_{j+1}$ and C. Out: D (vapor) and $L_j$.
2. **Total balance:** $V_{j+1} + C = D + L_j$.
3. **CMO with a saturated-liquid C:** the liquid on every stage of this section is $L = C$. Then $V = D + L - C = D$. The vapor flow equals the distillate flow.
4. **Water balance:** $V y_{j+1} + C(1) = D y_D + L x_j$. Divide by $V = D$ and use $L = C$:
$$y_{j+1} = \frac{C}{D}x_j + y_D - \frac{C}{D}$$
5. **Numbers:**
$$y = 0.75x + 0.92 - 0.75 = 0.75x + 0.17$$
6. **Plotting points:**
- At x = 1 (the cooling water entering the top), y = 0.92 = $y_D$. The vapor leaving the top is paired with the entering liquid of composition 1.
- It meets the 45° line where x = 0.75x + 0.17, i.e. **x = y = 0.68**, not at $y_D$ as it would with a total condenser.
- The y-intercept is 0.17.

![Top operating line y = 0.75x + 0.17: from (1, 0.92) to the 45° line at 0.68](fig/practice-advanced-distillation-P6-sol.svg)

**Book answer:** $y = 0.75x + 0.17$, meets $y = x$ at 0.68 (not at $y_D$) ✓.

**Exam tip:** for any top section, write the balance with every stream that crosses the envelope. A cold-liquid or direct-contact stream moves the operating line off the point $(x_D, x_D)$.`,
        answer: String.raw`$V = D$, $L = C$: $y = (C/D)x + y_D - C/D = 0.75x + 0.17$. It passes through (1, 0.92) and meets $y = x$ at 0.68.` } ] },

    { id: "practice-advanced-distillation-P7", q: 7, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P7a", label: "", marks: "", topic: "advanced-distillation",
        sub: "Direct cooling with subcooled water: internal L/V", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D23*`,
        text: String.raw`Repeat the direct-cooling arrangement of 4.D22 with $y_D = 0.999$, $x_B = 0.04$, z = 0.4 (water mole fractions), a saturated-liquid feed of 1000 kmol/h, 1 atm, CMO, pure cooling water with C/D = 3/4. The cooling water enters at 100 °F; its boiling point is 212 °F. Find the slope L/V of the top operating line. (No equilibrium data are needed.)`,
        solution: String.raw`**Given:** C/D = 0.75, cooling water at 100 °F, boiling point 212 °F.

**Data:** water $c_p = 4.18\ \mathrm{kJ/(kg\,K)}$ and $h_{fg} = 2257$ kJ/kg at 100 °C (Çengel Table A-9). In US units this is $c_p \approx 18.0$ Btu/(lbmol °F) and λ ≈ 17,480 Btu/lbmol.

**Assumptions:** CMO inside the column. The cold water is heated to its boiling point on the top stage by condensing vapor there.

1. **Vapor condensed per mole of cooling water:**
$$f = \frac{c_p(T_{bp} - T_C)}{\lambda} = \frac{4.18 \times (112/1.8)}{2257} = \frac{4.18 \times 62.2}{2257} = 0.1152$$
2. **Liquid leaving the top stage:** $L = C(1 + f) = 1.1152\,C$
3. **Vapor entering the top stage**, from the stage balance $V + C = D + L$:
$$V = D + Cf$$
4. **Slope** (with C = 0.75D):
$$\frac{L}{V} = \frac{0.75(1.1152)}{1 + 0.75(0.1152)} = \frac{0.8364}{1.0864} = 0.770$$
With CMO this L/V holds for every stage below the top one.

**Book answer:** L/V = 0.77 ✓.

**Exam tip:** a subcooled liquid at the top acts like extra reflux: each mole condenses f moles of vapor. This is the same as the factor $(1 + f)$ for subcooled reflux.`,
        answer: String.raw`f = 0.115 mol of vapor condensed per mol of water; $L/V = 0.75(1.115)/(1 + 0.75 \times 0.115) = 0.77$.` } ] },

    { id: "practice-advanced-distillation-P8", q: 8, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P8a", label: "", marks: "", topic: "advanced-distillation",
        sub: "Steam injected on stage 2 above a partial reboiler, methanol–water", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D27*`,
        text: String.raw`A methanol–water column at 1 atm has a total condenser and a partial reboiler. A saturated vapor stream of pure steam is also fed to the second stage above the partial reboiler. Feed: 2000 kmol/day, 48 mol% methanol, subcooled so that 1 mol of vapor condenses in the column for every 4 mol of feed. $x_D = 0.92$ with saturated reflux and $L_0/D = 1.0$; $x_B = 0.08$; boilup ratio $\bar{V}/B = 0.5$. CMO; Table 2-7 VLE. Find the optimum feed stage and the total number of equilibrium stages.`,
        solution: String.raw`**Given:** F = 2000 kmol/day, z = 0.48, q = 1.25, $x_D = 0.92$, L/D = 1, $x_B = 0.08$, $\bar{V}/B = 0.5$. Steam (y = 0) on stage 2 above the reboiler.

**Find:** optimum feed stage and N.

**Assumptions:** CMO, saturated steam (adds only to V), partial reboiler is an equilibrium stage.

### 1. Flows in the three sections
- **Below the steam** (between the reboiler and stage 2): $\bar{V} = 0.5B$ and $\bar{L} = B + \bar{V} = 1.5B$.
- **Between the steam and the feed:** $L' = \bar{L}$ and $V' = \bar{V} + S$.
- **Above the feed:** $L = L' - qF$ and $V = V' + (1 - q)F = V' - 500$ (the subcooled feed condenses 500 kmol/day of vapor).
- **Top:** $L = D$ (L/D = 1).

Unknowns D, B and S follow from:
$$D = 1.5B - 1.25(2000), \qquad 960 = 0.92D + 0.08B$$
$$\Rightarrow\; B = 2232.9,\; D = 849.3,\; S = D + B - F = 1082.2\ \mathrm{kmol/day}$$

So L = 849.3, V = 1698.6, $L' = 3349.3$, $V' = 2198.6$, $\bar{V} = 1116.4$, $\bar{L} = 3349.3$. Check: $V' = \bar{V} + S$ ✓.

### 2. Operating lines
- top: $y = 0.5x + 0.46$
- middle: $V'y = L'x + Dx_D - Fz$, so $y = 1.5234x - 0.0812$
- bottom: $y = \dfrac{\bar{L}}{\bar{V}}x - \dfrac{Bx_B}{\bar{V}} = 3x - 0.16$
- the feed line (slope q/(q − 1) = 5 through 0.48) meets the top and middle lines at (0.529, 0.724)

### 3. Step from the bottom (the steam stage is fixed relative to the reboiler)
Start at the reboiler, $x_B = 0.08$. The bottom line pairs each liquid with the vapor from the stage below for the first two stages above the reboiler; then the middle line applies, then the top line once a stage's vapor passes the feed intersection.

| stage above PR | x | y | line to the stage below |
|---|---|---|---|
| PR | 0.0800 | 0.3650 | – |
| 1 | 0.1750 | 0.5511 | bottom |
| 2 (steam in) | 0.2370 | 0.6145 | bottom |
| 3 (feed) | 0.4567 | 0.7583 | middle |
| 4 | 0.5966 | 0.8235 | top |
| 5 | 0.7269 | 0.8822 | top |
| 6 | 0.8443 | 0.9343 | top |

$x_D = 0.92$ is reached part way through stage 6: fraction $= (0.92 - 0.8822)/(0.9343 - 0.8822) = 0.73$.

**Result: about 5.7 equilibrium stages plus the partial reboiler; the optimum feed is the 3rd stage above the reboiler** (the first stage whose vapor, 0.758, is above the intersection, 0.724).

![Bottom-up McCabe–Thiele with three operating lines: steam on stage 2, feed on stage 3 above the reboiler](fig/practice-advanced-distillation-P8-sol.svg)

**Book answer:** optimum feed 3rd above the partial reboiler; about 5.5 equilibrium stages + partial reboiler ✓ (our 5.7 is within graphical accuracy).`,
        answer: String.raw`D = 849, B = 2233, S = 1082 kmol/day. Lines: top $y = 0.5x + 0.46$, middle $y = 1.523x - 0.081$, bottom $y = 3x - 0.16$. About 5.7 stages + partial reboiler, feed on the 3rd stage above the reboiler (book: ~5.5 + PR, feed 3rd).` } ] },

    { id: "practice-advanced-distillation-P9", q: 9, section: "W", compulsory: false,
      stem: String.raw`A methanol–water column has a total condenser that subcools the reflux, so that 1 mol of vapor condenses in the column for every 3 mol of reflux; $L_0/D = 3$. A liquid side stream S = 500 kmol/h is withdrawn from the second stage below the condenser, vaporized to a saturated vapor, mixed with the feed and fed to stage 4. The feed is 1000 kmol/h of saturated vapor, 48 mol% methanol. A total reboiler gives saturated-vapor boilup. $x_D = 0.92$, $x_B = 0.04$. CMO; Table 2-7 VLE.`,
      parts: [
        { id: "practice-advanced-distillation-P9a", label: "(a)", marks: "", topic: "advanced-distillation",
          sub: "Subcooled reflux, side stream vaporized and returned, total reboiler: stages", type: "numerical", syllabus: "in", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D30*`,
          text: String.raw`Find the total number of equilibrium stages.`,
          solution: String.raw`**Assumptions:** CMO. The side stream leaves and returns, so it does not appear in the overall balance. The total reboiler is not an equilibrium stage (it is the point $y = x = x_B$).

1. **Overall:** $D = F\dfrac{z - x_B}{x_D - x_B} = 1000\dfrac{0.44}{0.88} = 500$, B = 500 kmol/h.
2. **Top stage with subcooled reflux:** $L_0 = 3D = 1500$. One third of $L_0$ condenses extra vapor on stage 1, so the liquid leaving stage 1 is $L = \tfrac{4}{3}L_0 = 2000$. The vapor leaving stage 1 is $V_1 = L_0 + D = 2000$, and the vapor entering it is $V = V_1 + 500 = 2500$ kmol/h.
3. **Section 1–2:** $y = \dfrac{L}{V}x + \dfrac{Dx_D}{V} = 0.8x + 0.184$
4. **Stage 1:** $y_1 = x_D = 0.92$ gives $x_1 = 0.8114$. Then $y_2 = 0.8(0.8114) + 0.184 = 0.8331$ and $x_2 = 0.6179 = x_S$.
5. **Section 2–4** (below the draw): $L' = 2000 - 500 = 1500$ and $V' = 2500$:
$$y = 0.6x + \frac{Dx_D + Sx_S}{V'} = 0.6x + 0.3076$$
6. **Below stage 4:** the combined saturated vapor (1500 kmol/h at $(480 + 500 \times 0.618)/1500 = 0.526$) enters, so $\bar{V} = 2500 - 1500 = 1000$ and $\bar{L} = 1500$:
$$y = 1.5x - 0.02$$
Check: $\bar{L} - \bar{V} = 500 = B$ ✓. The middle and bottom lines meet at y = 0.526, on the horizontal q-line of the combined vapor feed ✓.
7. **Stepping:**

| stage | x | y |
|---|---|---|
| 1 | 0.8114 | 0.9200 |
| 2 (draw) | 0.6179 | 0.8331 |
| 3 | 0.3187 | 0.6783 |
| 4 (feed) | 0.1389 | 0.4988 |
| 5 | 0.0306 | 0.1884 |

Fraction of stage 5: $(0.1389 - 0.04)/(0.1389 - 0.0306) = 0.91$. **N = 4.9, so 5 equilibrium stages plus the total reboiler.**

![McCabe–Thiele with subcooled reflux, side draw from stage 2 and combined vapor feed on stage 4: about 5 stages](fig/practice-advanced-distillation-P9-sol.svg)

**Book answer:** N ≈ 5 equilibrium stages ✓.`,
          answer: String.raw`D = B = 500 kmol/h. Lines: $y = 0.8x + 0.184$ (stages 1–2), $0.6x + 0.308$ (2–4), $1.5x - 0.02$ (below 4). $x_S = 0.618$. N ≈ 4.9, so 5 equilibrium stages + total reboiler (book ≈ 5).` },
        { id: "practice-advanced-distillation-P9b", label: "(b)", marks: "", topic: "advanced-distillation",
          sub: "Boilup ratio", type: "numerical", syllabus: "in", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D30*`,
          text: String.raw`Find the value of $\bar{V}/B$.`,
          solution: String.raw`From part (a), $\bar{V} = V' - (F + S) = 2500 - 1500 = 1000$ kmol/h and B = 500 kmol/h:
$$\frac{\bar{V}}{B} = \frac{1000}{500} = 2.0$$

**Book answer:** $\bar{V}/B$ = 2.0 ✓ (printed as "/B = 20" in the answer list: the bar and the decimal point were lost).`,
          answer: String.raw`$\bar{V}/B = 1000/500 = 2.0$.` } ] },

    { id: "practice-advanced-distillation-P10", q: 10, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P10a", label: "", marks: "", topic: "advanced-distillation",
        sub: "Existing column (4 contacts, feed on stage 2): required L/D by trial", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D31*`,
        text: String.raw`An ethanol–water column with a total condenser and a partial reboiler has three equilibrium stages plus the reboiler (four contacts), and the feed enters stage 2 from the condenser. The feed is 150 mol/h of saturated liquid, 25 mol% ethanol. Reflux is saturated, CMO holds. We want $x_B = 0.05$ and $x_D = 0.63$. Find the required external reflux ratio (Table 2-1 VLE).`,
        solution: String.raw`**Method:** simulation problem (the stages are fixed, L/D is unknown), so use trial and error. Guess L/D, step the four fixed contacts, and adjust L/D until $x_4 = x_B$.

1. **Balances:** $D = 150\dfrac{0.25 - 0.05}{0.63 - 0.05} = 51.72$, B = 98.28 mol/h.
2. **For a guess R:** L = RD, V = (R + 1)D, $\bar{L} = L + F$, $\bar{V} = V$.
- top: $y = \dfrac{L}{V}x + \dfrac{Dx_D}{V}$
- bottom: $y = \dfrac{\bar{L}}{\bar{V}}x - \dfrac{Bx_B}{\bar{V}}$
- Stage 1 uses the top line to the stage below, stages 2 and 3 use the bottom line (feed on 2), and stage 4 is the reboiler.
3. **Trials:**

| L/D | 0.50 | 0.60 | 0.636 | 0.70 |
|---|---|---|---|---|
| $x_4$ | 0.568 (fails) | 0.056 | 0.040 | 0.026 |

4. **Converged at L/D = 0.611:** top line $y = 0.379x + 0.391$, bottom line $y = 2.179x - 0.059$.

| stage | x | y |
|---|---|---|
| 1 | 0.4425 | 0.6300 |
| 2 (feed) | 0.2629 | 0.5589 |
| 3 | 0.1738 | 0.5139 |
| 4 (reboiler) | 0.0500 | 0.3197 |

![Four fixed contacts with feed on stage 2: L/D = 0.61 brings x4 to 0.05](fig/practice-advanced-distillation-P10-sol.svg)

**Book answer:** L/D = 0.636. We get 0.61 with a smooth curve through Table 2-1 (0.62 with straight-line interpolation). The reboiler step lands on the very steep part of the curve below x = 0.07, so $x_4$ changes from 0.056 to 0.040 between L/D = 0.60 and 0.636. Our result agrees with the book's to within graph-reading accuracy ✓.

**Exam tip:** below about L/D = 0.55 the steps pinch near the feed and the column cannot make the separation, so start trials above the minimum.`,
        answer: String.raw`D = 51.7, B = 98.3 mol/h. Trial and error gives L/D ≈ 0.61–0.62 (book 0.636; the difference is the reading of the steep part of the curve).` } ] },

    { id: "practice-advanced-distillation-P11", q: 11, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P11a", label: "", marks: "", topic: "advanced-distillation",
        sub: "Column running with D = 0: bottoms composition", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D32*`,
        text: String.raw`An acetone–ethanol column (1 atm, CMO, total condenser, partial reboiler, 8 equilibrium stages, feed on the third stage above the reboiler) takes 50 kmol/h of saturated-liquid feed with 40 mol% acetone. Three months ago the distillate flow was shut off (D = 0), but the column kept running with $\bar{V}/B = 1.0$. What is $x_B$?`,
        solution: String.raw`**Key idea:** at steady state with D = 0, everything that enters leaves as bottoms.

1. **Overall balance:** F = B, so B = 50 kmol/h.
2. **Acetone balance:** $Fz = Bx_B$, so **$x_B = z = 0.40$**. No equilibrium data are needed for this answer.
3. **What the column looks like** (for understanding): $\bar{V} = B = 50$ and $\bar{L} = \bar{V} + B = 100$ kmol/h. Above the feed, $L = \bar{L} - F = 50 = V$: the top section is at total reflux.
- The stripping line is $y = 2x - 0.40$ through (0.40, 0.40).
- The rectifying line is the 45° line.
4. **Profile** (stepping up from the reboiler, data from Problem 4.D7):

| contact | x | y |
|---|---|---|
| reboiler | 0.400 | 0.605 |
| 1 | 0.503 | 0.676 |
| 2 | 0.538 | 0.699 |
| 3 (feed) | 0.549 | 0.707 |
| 4 | 0.707 | 0.806 |
| 6 | 0.869 | 0.909 |
| 8 | 0.935 | 0.953 |

The stripping section pinches against the curve (it is close to the 0.55–0.71 region), while the top section enriches the circulating liquid at total reflux. The trays hold nearly pure acetone at the top, but nothing is withdrawn.

![Profile with D = 0: stripping line y = 2x − 0.4 from xB = z = 0.40, total reflux above the feed](fig/practice-advanced-distillation-P11-sol.svg)

**Book answer:** $x_B = z = 0.4$ ✓.`,
        answer: String.raw`With D = 0, B = F and $x_B = z = 0.40$ (the top section runs at total reflux, L = V = 50 kmol/h).` } ] },

    { id: "practice-advanced-distillation-P12", q: 12, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P12a", label: "", marks: "", topic: "advanced-distillation",
        sub: "Existing short column with subcooled feed: bottoms by trial", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D34*`,
        text: String.raw`A methanol–water column has two equilibrium stages and a partial reboiler (three contacts) and a total condenser. The feed is 150 mol/h of 45 mol% methanol on stage 2 below the condenser. It is subcooled: 1 mol of vapor condenses at the feed stage to heat every 2 mol of feed. $x_D = 0.80$, saturated reflux, L/D = 2.0, CMO. Find $x_B$ (Table 2-7 VLE).`,
        solution: String.raw`**Method:** trial and error on $x_B$, because D and B depend on it.

1. **q:** condensing F/2 of vapor gives **q = 1.5**. $\bar{L} = L + 1.5F$, $\bar{V} = V + 0.5F$.
2. **For a guess $x_B$:**
- $D = F\dfrac{z - x_B}{x_D - x_B}$, $L = 2D$, $V = 3D$
- top line: $y = 0.6667x + 0.2667$
- bottom line: $y = \dfrac{\bar{L}}{\bar{V}}x - \dfrac{Bx_B}{\bar{V}}$
- step stage 1 on the top line, then stage 2 (feed) and the reboiler on the bottom line
3. **Trials:**

| guess $x_B$ | 0.03 | 0.05 | 0.07 | 0.10 |
|---|---|---|---|---|
| calculated $x_3$ | 0.0597 | 0.0590 | 0.0582 | 0.0570 |

The calculated value is almost independent of the guess, so the iteration converges fast: **$x_B = 0.0587$**.

4. **Converged:** D = 79.18, B = 70.82, $\bar{L} = 383.4$, $\bar{V} = 312.5$ mol/h; bottom line $y = 1.2266x - 0.0133$.

| stage | x | y |
|---|---|---|
| 1 | 0.5450 | 0.8000 |
| 2 (feed) | 0.2550 | 0.6300 |
| 3 (reboiler) | 0.0587 | 0.2995 |

![Three contacts at L/D = 2 with a subcooled feed: xB converges to 0.059](fig/practice-advanced-distillation-P12-sol.svg)

**Book answer:** $x_B$ ≈ 0.058 ✓.`,
        answer: String.raw`Trial and error: $x_B \approx 0.059$ (D = 79.2, B = 70.8 mol/h). Book: ≈ 0.058.` } ] },

    { id: "practice-advanced-distillation-P13", q: 13, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P13a", label: "", marks: "", topic: "advanced-distillation",
        sub: "Open steam column with a liquid side stream, 5 stages: xS and xD by trial", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.E2*`,
        text: String.raw`A methanol–water column has open (direct) steam heating and five stages in total. A saturated-liquid side stream is withdrawn from the second plate above the bottom. The feed is 1000 mol/h, 30 mol% methanol, subcooled so that 1 mol of vapor condenses to heat every 2 mol of feed. $x_B = 0.015$. The steam is pure saturated water vapor with steam/bottoms = 0.833, and side stream/bottoms = 0.4. Total condenser, saturated reflux, CMO; Table 2-7 VLE. Find the side-stream and distillate concentrations.`,
        solution: String.raw`**Assumptions:** stages numbered from the top, so the bottom stage is 5 and the side stream leaves stage 4. The feed enters at its optimum location (it is not specified). q = 1.5.

### 1. Bottom section, solved directly from the bottom up
With open steam $\bar{L} = B$ and $\bar{V} = S_{steam} = 0.833B$, so the bottom line is
$$y = \frac{B}{0.833B}(x - x_B) = 1.2(x - 0.015)$$
- Stage 5: $x_5 = 0.015$ gives $y_5 = y^*(0.015) = 0.1045$.
- Then $x_4 = y_5/1.2 + 0.015 = 0.102$.

The side stream leaves stage 4, so **$x_S = 0.102$**. This value is fixed whatever $x_D$ is.

### 2. Section between the feed and the side draw
$L' = \bar{L} + S_{side} = 1.4B$ and $V' = 0.833B$. The line meets the bottom line at x = $x_S$.

### 3. Top section and balances (unknown $x_D$)
- Above the feed: $L = L' - qF = 1.4B - 1500$ and $V = V' + (1 - q)F = 0.833B - 500$.
- Overall: $D = F + S_{steam} - B - S_{side} = 1000 - 0.567B$.
- Methanol: $300 = Dx_D + 0.015B + 0.4B(x_S)$.

For each guess of $x_D$, these give B, D, L and V, the two upper operating lines and their intersection. Step down from $(x_D, x_D)$ with the optimum feed switch, and require $x_4 = x_S$ (then $x_5 = x_B$ automatically).

### 4. Trials

| $x_D$ | 0.80 | 0.85 | 0.868 | 0.90 |
|---|---|---|---|---|
| calculated $x_4$ | 0.021 | 0.077 | 0.102 | 0.207 |

**Converged:** $x_D = 0.868$, B = 1302, D = 261.8, $S_{steam} = 1084.6$, $S_{side} = 520.8$, L = 322.8, V = 584.6 mol/h.

- top line: $y = 0.5522x + 0.3889$
- middle line: $y = 1.6807x - 0.0670$
- bottom line: $y = 1.2(x - 0.015)$
- the top and middle lines meet at (0.404, 0.612) on the feed line (slope 3)

| stage | x | y |
|---|---|---|
| 1 | 0.6965 | 0.8684 |
| 2 | 0.4885 | 0.7735 |
| 3 (feed) | 0.2914 | 0.6586 |
| 4 (side draw) | 0.1021 | 0.4227 |
| 5 | 0.0150 | 0.1045 |

![Open-steam column with a side draw from stage 4: five stages give xD = 0.87](fig/practice-advanced-distillation-P13-sol.svg)

**Book answer:** $x_{side}$ = 0.0975, $x_D$ ≈ 0.85 (trial and error) ✓ within reading accuracy. Our $y^*(0.015) = 0.1045$ comes from a smooth curve through Table 2-7; a straight line between x = 0 and 0.02 gives 0.1005, $x_S = 0.0987$ and $x_D = 0.863$. The result is sensitive because $x_4$ changes quickly with $x_D$.`,
        answer: String.raw`$x_S = x_4 \approx 0.10$ (from the bottom: $y_5 = 0.1045$, $x_4 = y_5/1.2 + 0.015$). Trial and error gives $x_D \approx 0.86$–0.87 with the feed on stage 3. Book: 0.0975 and ≈ 0.85.` } ] },

    { id: "practice-advanced-distillation-P14", q: 14, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P14a", label: "", marks: "", topic: "advanced-distillation",
        sub: "Side stream to an intermediate reboiler, returned as vapor; total reboiler", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.E3*`,
        text: String.raw`An ethanol–water column (1 atm, CMO, equilibrium stages) has a total condenser and a total reboiler, with saturated reflux and saturated boilup. A saturated-liquid feed of 1000 kmol/h, 32 mol% ethanol, enters at its optimum stage. $x_D = 0.80$ and $x_B = 0.02$. A liquid side stream S = 457.3 kmol/h is taken from the eighth stage from the top, vaporized in an intermediate reboiler to saturated vapor, and returned at its optimum location. $L_0/D = 1.86$. Find the optimum locations of the feed and of the returned vapor, and the total number of equilibrium stages (Table 2-1 VLE).`,
        solution: String.raw`**Assumptions:** CMO. The total reboiler is the point $y = x = x_B$, not a stage. The feed (z = 0.32) lies above the vapor return, whose composition is $y = x_S$; this order is checked below.

### 1. Flows
- $D = 1000\dfrac{0.30}{0.78} = 384.6$, B = 615.4 kmol/h
- $L = 1.86D = 715.4$, $V = 2.86D = 1100$

| section | L | V | operating line |
|---|---|---|---|
| I: stages 1–8 | 715.4 | 1100 | $y = 0.6503x + 0.2797$ |
| II: draw – feed | $L - S = 258.1$ | 1100 | $y = 0.2346x + (Dx_D + Sx_S)/V$ |
| III: feed – vapor return | $258.1 + F = 1258.1$ | 1100 | $y = 1.1437x + (Dx_D + Sx_S - Fz)/V$ |
| IV: below vapor return | 1258.1 | $1100 - S = 642.7$ | $y = 1.9575x - 0.0191$ |

Check: 1258.1 − 642.7 = 615.4 = B ✓.

### 2. Step the top section to find $x_S$
Stepping 8 stages on line I gives $x_8 = x_S = 0.499$. Then line II is $y = 0.2346x + 0.4873$ and line III is $y = 1.1437x + 0.1964$.
- Feed (saturated liquid): vertical at x = 0.32; lines II and III meet at (0.320, 0.562).
- Vapor return (saturated vapor at y = $x_S$ = 0.499): horizontal; lines III and IV meet at (0.265, 0.499).

The vapor return is the leaner stream, so it belongs below the feed ✓.

### 3. Stepping (switch at each intersection)

| stage | x | y |
|---|---|---|
| 1 | 0.7713 | 0.8000 |
| 4 | 0.6928 | 0.7485 |
| 7 | 0.5723 | 0.6837 |
| 8 (side draw) | 0.4992 | 0.6519 |
| 9 | 0.3783 | 0.6044 |
| 10 (feed) | 0.3095 | 0.5760 |
| 11 (vapor return) | 0.2454 | 0.5503 |
| 12 | 0.1162 | 0.4613 |
| 13 | 0.0283 | 0.2084 |
| 14 | 0.0041 | 0.0363 |

Fraction of stage 14: $(0.0283 - 0.02)/(0.0283 - 0.0041) = 0.34$.

**Result: about 13.3 equilibrium stages (plus the total reboiler), feed on stage 10, intermediate-reboiler vapor returned on stage 11.**

![Four operating lines; side draw from stage 8, feed on 10, vapor return on 11; about 13.3 stages](fig/practice-advanced-distillation-P14-sol.svg)

**Book answer:** feed tenth below the condenser, vapor returned at stage 11, 12½ equilibrium stages ✓ for both locations. Our count (13.3) uses straight-line interpolation of Table 2-1, as on a hand-drawn graph.

**Sensitivity note:** section II has L/V = 0.23 and runs close to the curve (near a pinch). A smooth curve fit through the same data moves $x_S$ to 0.525 and gives 15.4 stages (feed on 12, vapor return on 13). "Be very neat" in the problem is a real warning: this design is sensitive to the equilibrium reading.`,
        answer: String.raw`D = 384.6, B = 615.4 kmol/h, $x_S = x_8 \approx 0.50$. Feed on stage 10, vapor return on stage 11, about 13 equilibrium stages plus the total reboiler (book: 10, 11, 12½). The result is very sensitive to the VLE reading because section II is close to a pinch.` } ] },

    { id: "practice-advanced-distillation-P15", q: 15, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P15a", label: "", marks: "", topic: "mccabe-thiele",
        sub: "Is CMO valid? Five binary systems by latent heat comparison", type: "theory", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.F3*`,
        text: String.raw`For distillation of each of the following systems, is constant molal overflow (CMO) valid? (a) methanol–water; (b) isopropanol–water; (c) acetic acid–water; (d) n-butane–n-pentane; (e) benzene–toluene.`,
        solution: String.raw`**Test:** CMO needs equal molar latent heats (plus small sensible-heat and heat-of-mixing effects, and an adiabatic column). Compare $\Delta H_{vap}$ per mole at the normal boiling points. A difference of a few percent is fine; about 10–15% is marginal.

| system | λ of component 1 (kcal/mol) | λ of water or component 2 (kcal/mol) | difference | CMO? |
|---|---|---|---|---|
| (a) methanol–water | 8.43 | 9.72 | 15% | approximate, use with caution (Wankat Example 4-4) |
| (b) isopropanol–water | ≈ 9.5 | 9.72 | ≈ 2% | yes |
| (c) acetic acid–water | 5.83 | 9.72 | 40% | **no** |
| (d) n-butane–n-pentane | 5.33 | 6.16 | 15% | marginal; equal latent heat **per kg** works better |
| (e) benzene–toluene | 7.35 | 8.00 | ≈ 8% | yes, reasonable |

Notes:
- (c) Acetic acid's low apparent latent heat comes from dimerization in the vapor. Its molar overflow changes a lot from stage to stage, so use enthalpy balances (Lewis method with energy balances, or Ponchon–Savarit).
- (d) Per unit mass the latent heats are 91.7 and 85.4 cal/g (MW 58.1 and 72.2), only about 7% apart, so constant **mass** overflow is the better approximation.

**Book answer:** (a) see Example 4-4; (b) CMO OK; (c) not valid, 5.83 vs 9.72 kcal/mol; (d) 5.331 vs 6.16, 15% marginal, constant mass overflow better; (e) 7.353 vs 8.00, CMO within about 6% ✓ (the 8.8% ratio of the book's own values is still acceptable).`,
        answer: String.raw`Valid: isopropanol–water, benzene–toluene. Approximate: methanol–water (15%). Marginal: n-butane–n-pentane (use constant mass overflow). Not valid: acetic acid–water (5.83 vs 9.72 kcal/mol).` } ] },

    { id: "practice-advanced-distillation-P16", q: 16, section: "W", compulsory: false,
      stem: String.raw`Write a program (computer, spreadsheet or calculator) for the number of equilibrium stages and the optimum feed stage of a binary column with constant relative volatility, CMO, saturated reflux, a total condenser and a partial reboiler. Inputs: F, $z_F$, q, $x_B$, $x_D$, α and $L_0/D$. The program should report the fractional number of stages.`,
      parts: [
        { id: "practice-advanced-distillation-P16a", label: "(a)", marks: "", topic: "mccabe-thiele",
          sub: "Constant-α stepping program: phenol–p-cresol test", type: "numerical", syllabus: "in", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.G3*`,
          text: String.raw`Test case: phenol from p-cresol, F = 100, $z_F$ = 0.6, q = 0.4, $x_B$ = 0.04, $x_D$ = 0.98, α = 1.76, L/D = 4.00.`,
          solution: String.raw`**Algorithm** (any language or a spreadsheet column):

1. $D = F(z - x_B)/(x_D - x_B)$, $B = F - D$, $L = RD$, $V = L + D$, $\bar{L} = L + qF$, $\bar{V} = V - (1 - q)F$.
2. Top line $y = (L/V)x + Dx_D/V$; bottom line $y = (\bar{L}/\bar{V})x - Bx_B/\bar{V}$.
3. Intersection with the feed line: $x_I = \dfrac{z/(q-1) + Dx_D/V}{q/(q-1) - L/V}$ (use $x_I = z$ if q = 1).
4. Set y = $x_D$ and n = 0. Repeat:
- n = n + 1
- $x_n = y/(\alpha - (\alpha - 1)y)$
- if $x_n \le x_B$, stop: $N = n - 1 + (x_{n-1} - x_B)/(x_{n-1} - x_n)$
- if no switch yet and $x_n < x_I$, switch to the bottom line and record the feed stage = n
- y = operating line at $x_n$
5. Hand check: the first three stages are computed by hand below.

**Case (a):** D = 59.57, B = 40.43; top line $y = 0.8x + 0.196$; bottom line $y = 1.1699x - 0.0068$; intersection (0.548, 0.635).

| stage | x | y |
|---|---|---|
| 1 | 0.9653 | 0.9800 |
| 2 | 0.9455 | 0.9683 |
| 3 | 0.9191 | 0.9524 |
| 10 | 0.5523 | 0.6847 |
| 11 (feed) | 0.5002 | 0.6378 |
| 19 | 0.0483 | 0.0820 |
| 20 | 0.0289 | 0.0497 |

Hand check of stage 1: $x_1 = 0.98/(1.76 - 0.76 \times 0.98) = 0.9653$ and $y_2 = 0.8(0.9653) + 0.196 = 0.9683$ ✓.

**Result: 19.43 equilibrium contacts including the partial reboiler, optimum feed on stage 11 from the top.**

![Phenol–p-cresol, α = 1.76: 19.43 contacts with feed on stage 11](fig/practice-advanced-distillation-P16a-sol.svg)

**Book answer:** feed 11th below the condenser; 19.43 equilibrium contacts including the partial reboiler ✓ (exact match).`,
          answer: String.raw`19.43 equilibrium contacts including the partial reboiler, optimum feed on stage 11 (book: same).` },
        { id: "practice-advanced-distillation-P16b", label: "(b)", marks: "", topic: "mccabe-thiele",
          sub: "Constant-α program: benzene–toluene test", type: "numerical", syllabus: "in", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.G3*`,
          text: String.raw`Test case: benzene from toluene, F = 200, $z_F$ = 0.4, q = 1.3, $x_B$ = 0.0005, $x_D$ = 0.98, α = 2.5, L/D = 2.00.`,
          solution: String.raw`**Setup:** D = 81.57 and B = 118.43; $\bar{L} = 423.1$ and $\bar{V} = 304.7$.
- top line: $y = 0.6667x + 0.3267$
- bottom line: $y = 1.3886x - 0.000194$
- intersection with the feed line (slope 1.3/0.3 = 4.33): (0.453, 0.628)

Running the program gives **21.9 equilibrium contacts including the partial reboiler, with the optimum feed on stage 8**. The very pure bottoms ($x_B$ = 0.0005) needs many stages in the dilute region, where each step is short.

![Benzene–toluene, α = 2.5: 21.9 contacts with feed on stage 8](fig/practice-advanced-distillation-P16b-sol.svg)

**Book answer:** feed 8th from the top; 21.9 equilibrium contacts including the partial reboiler ✓ (exact match).`,
          answer: String.raw`21.9 equilibrium contacts including the partial reboiler, feed on stage 8 (book: same).` },
        { id: "practice-advanced-distillation-P16c", label: "(c)", marks: "", topic: "mccabe-thiele",
          sub: "Sensitivity of N to α (2.315, 2.4, 2.61)", type: "numerical", syllabus: "in", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.G3*`,
          text: String.raw`The relative volatility of benzene–toluene varies from 2.61 (pure benzene) to 2.315 (pure toluene). Repeat (b) for α = 2.315, 2.4 and 2.61.`,
          solution: String.raw`D, B and the operating lines are the same as in (b), because they do not depend on α. Only the equilibrium curve changes:

| α | N (contacts incl. reboiler) | optimum feed stage |
|---|---|---|
| 2.315 | 26.4 | 10 |
| 2.40 | 24.0 | 9 |
| 2.50 | 21.9 | 8 |
| 2.61 | 20.1 | 7 |

A change of α of ±6% changes N by about +21% and −8%. For a reliable design use an average α (for example the geometric mean of the top and bottom values), or real VLE data. The book gives no answer for part (c).

**Exam tip:** N is most sensitive to α when α is small or the products are very pure. That is why the constant-α assumption should be checked at both ends of the column.`,
          answer: String.raw`N = 26.4 (α = 2.315, feed 10), 24.0 (2.4, feed 9), 21.9 (2.5, feed 8), 20.1 (2.61, feed 7). N is very sensitive to α.` } ] },

    { id: "practice-advanced-distillation-P17", q: 17, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-advanced-distillation-P17a", label: "(a)", marks: "8", topic: "advanced-distillation",
          sub: "Derivation: bottom operating line with open steam, x-intercept at xB", type: "derivation", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Exam-style; cf. Slides 05 pp. 18–20 and Wankat 3e Eq. (4-42), Problem 4.C1`,
          text: String.raw`A column uses open (direct) steam S, pure saturated water vapor, in place of a reboiler. Derive the stripping-section operating line and show that it cuts the x-axis at $x = x_B$. State when open steam is preferred.`,
          solution: String.raw`**Assumptions:** CMO, adiabatic column, steam is saturated pure water ($y_S = 0$), the bottoms leaves the bottom stage N as a saturated liquid.

1. **Envelope** around the bottom of the column, cut between stages j and j + 1 in the stripping section. In: $\bar{L}$ (from stage j) and steam S. Out: $\bar{V}$ (to stage j) and B.
2. **Total balance:** $\bar{L} + S = \bar{V} + B$
3. **Component balance:** $\bar{L}x_j + S y_S = \bar{V}y_{j+1} + Bx_B$
4. **CMO with saturated steam:** the vapor flow does not change through the section, so $\bar{V} = S$. Then step 2 gives $\bar{L} = B$.
5. **Operating line:** with $y_S = 0$,
$$y_{j+1} = \frac{\bar{L}}{\bar{V}}x_j - \frac{B}{\bar{V}}x_B = \frac{\bar{L}}{\bar{V}}\left(x_j - x_B\right)$$
since $B = \bar{L}$.
6. **x-intercept:** set y = 0, which gives x = $x_B$. The line goes through **$(x_B, 0)$**, not $(x_B, x_B)$ as with a reboiler. The slope is $\bar{L}/\bar{V} = B/S$. Its other point is the intersection of the top line and the feed line.
7. **Stepping** continues to x = $x_B$ on the equilibrium curve. The last stage is a real tray (no reboiler stage), and the bottom staircase crosses below the 45° line.

**When to use open steam:** when water is the heavy component and leaves as bottoms (e.g. methanol–water, ethanol–water, removing organics from wastewater). It saves the reboiler cost and fouling, and gives a better heat-transfer arrangement. The penalties: B is diluted by condensed steam (larger B, same solute), so a slightly larger number of stages is needed for the same $x_B$. The steam must be clean.`,
          answer: String.raw`$\bar{V} = S$, $\bar{L} = B$, so $y = (\bar{L}/\bar{V})(x - x_B)$: slope B/S, x-intercept at $x_B$. Used when water is the bottoms product; it removes the reboiler but dilutes B.` },
        { id: "practice-advanced-distillation-P17b", label: "(b)", marks: "6", topic: "advanced-distillation",
          sub: "Partial condenser vs total condenser; partial vs total reboiler", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Exam-style; cf. Slides 05 pp. 15–17`,
          text: String.raw`Show how a partial condenser and a total reboiler appear on a McCabe–Thiele diagram, and compare them with a total condenser and a partial reboiler.`,
          solution: String.raw`| item | equilibrium stage? | operating line end point | on the diagram |
|---|---|---|---|
| total condenser | no | $(x_D, x_D)$ | first step starts at $y_1 = x_D$ |
| partial condenser | **yes** | $(y_D, y_D)$: $y = (L/V)x + (1 - L/V)y_D$ | first step from $(y_D, y_D)$ to the curve gives the reflux $x_0$; count it as a stage |
| partial reboiler | **yes** | $(x_B, x_B)$ | last step ends at $x_B$; count it as a stage |
| total reboiler | no | $(x_B, x_B)$, same line | single point $y = x = x_B$; stepping ends when x reaches $x_B$, and the reboiler is not counted |

Derivation for the partial condenser (balance around condenser plus the top of the column): $Vy = Lx + Dy_D$, so $y = \dfrac{L}{V}x + \dfrac{D}{V}y_D = \dfrac{L}{V}x + \left(1 - \dfrac{L}{V}\right)y_D$.

A partial condenser gives a vapor product (useful when the distillate is a gas, or to save cooling) and one free equilibrium stage. A total reboiler (for example a thermosiphon taking all the bottom liquid) gives no separation.`,
          answer: String.raw`Partial condenser and partial reboiler are equilibrium stages (count them); total condenser and total reboiler are not. All top lines pass through $(y_D, y_D)$ or $(x_D, x_D)$; with a total reboiler the bottom line ends at the single point $(x_B, x_B)$.` },
        { id: "practice-advanced-distillation-P17c", label: "(c)", marks: "6", topic: "advanced-distillation",
          sub: "Murphree vapor and liquid, point and overall efficiencies", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Exam-style; cf. Slides 05 pp. 25–28`,
          text: String.raw`Define the Murphree vapor and liquid efficiencies, the point efficiency and the overall efficiency. Why does a real tray give less than one equilibrium stage of separation?`,
          solution: String.raw`- **Murphree vapor efficiency** of tray n: actual vapor enrichment divided by the enrichment if the leaving vapor were in equilibrium with the leaving liquid:
$$E_{MV,n} = \frac{y_n - y_{n+1}}{y_n^* - y_{n+1}}, \qquad y_n^* = y^*(x_n)$$
- **Murphree liquid efficiency:**
$$E_{ML,n} = \frac{x_{n-1} - x_n}{x_{n-1} - x_n^*}, \qquad x_n^* = x^*(y_n)$$
- **Point efficiency** at one location on the tray (local vapor in and out):
$$E_{pt} = \frac{y' - y'_{in}}{y'^{*} - y'_{in}}$$
Murphree efficiencies use the average outlet streams. Because liquid changes composition across the tray, $E_{MV}$ can exceed $E_{pt}$ (and even exceed 1 on large trays).
- **Overall efficiency:** $E_o = N_{equil}/N_{actual}$, used for quick sizing: $N_{actual} = N_{equil}/E_o$, not counting a partial reboiler.

**Why a real tray falls short:** limited contact time and interfacial area for mass transfer, imperfect mixing of vapor and liquid, entrainment of liquid into the vapor above, weeping, liquid maldistribution and bypassing.

**On the diagram:** draw a pseudo-equilibrium curve a fraction $E_{MV}$ of the vertical distance from the operating line to the equilibrium curve, and step on it.`,
          answer: String.raw`$E_{MV} = (y_n - y_{n+1})/(y_n^* - y_{n+1})$, $E_{ML} = (x_{n-1} - x_n)/(x_{n-1} - x_n^*)$, $E_{pt}$ is the same ratio at a point, $E_o = N_{equil}/N_{actual}$. Trays fall short from finite contact time and area, poor mixing, entrainment and weeping.` } ] },

    { id: "practice-advanced-distillation-P18", q: 18, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P18a", label: "", marks: "25", topic: "advanced-distillation",
        sub: "Vapor side draw in the stripping section, α = 2.4", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style (own numbers), variation listed on Slides 05 p. 12`,
        text: String.raw`A saturated-liquid feed of 150 kmol/h containing 45 mol% of the more volatile component (α = 2.4) is separated into a distillate with 96 mol% and a bottoms with 4 mol%. A saturated-vapor side stream of 20 kmol/h is withdrawn from the stripping section; its composition is 28.5 mol%. The column has a total condenser and a partial reboiler, and runs at $L_0/D = 2.0$. Assume CMO.

(i) Find D and B. (ii) Write the operating lines of all sections. (iii) Find the number of equilibrium stages, the feed stage and the stage from which the vapor is drawn. (iv) Check that the reflux is above the minimum.`,
        solution: String.raw`**Given:** F = 150, z = 0.45, q = 1; $V_S = 20$ kmol/h vapor, $y_S = 0.285$; $x_D = 0.96$, $x_B = 0.04$, R = 2, α = 2.4.

**Assumptions:** CMO; partial reboiler is a stage; the vapor draw removes vapor only (L unchanged).

### (i) Balances
$$F = D + B + V_S, \qquad Fz = Dx_D + Bx_B + V_S y_S$$
$$D = \frac{67.5 - 20(0.285) - 0.04(130)}{0.96 - 0.04} = 61.52, \qquad B = 130 - 61.52 = 68.48\ \mathrm{kmol/h}$$

### (ii) Flows and lines
| section | L | V | operating line |
|---|---|---|---|
| I (top – feed) | 123.04 | 184.57 | $y = 0.6667x + 0.3200$ |
| II (feed – vapor draw) | 273.04 | 184.57 | $y = 1.4794x - 0.0457$ |
| III (below vapor draw) | 273.04 | 204.57 | $y = 1.3348x - 0.0134$ |

A vapor draw leaves L unchanged and makes V **larger below it**: $\bar{V} = V + V_S$. Check: 273.04 − 204.57 = 68.48 = B ✓. The section III intercept $-Bx_B/\bar{V} = -0.0134$ agrees with the top-down balance ✓.

Intersections: I/II on the feed line at (0.45, 0.62). II/III at y = $y_S$ = 0.285, x = 0.2236 (a horizontal "q-line" for a vapor draw).

### (iii) Stepping from the top
Switch to line III as soon as the vapor from line II would fall below $y_S$, so that the vapor drawn is the vapor leaving that stage.

| stage | x | y |
|---|---|---|
| 1 | 0.9091 | 0.9600 |
| 2 | 0.8392 | 0.9261 |
| 3 | 0.7525 | 0.8795 |
| 4 | 0.6575 | 0.8217 |
| 5 | 0.5666 | 0.7583 |
| 6 | 0.4903 | 0.6977 |
| 7 (feed) | 0.4328 | 0.6469 |
| 8 | 0.3793 | 0.5946 |
| 9 | 0.3071 | 0.5155 |
| 10 | 0.2236 | 0.4086 |
| 11 (vapor draw) | 0.1424 | 0.2850 |
| 12 | 0.0821 | 0.1767 |
| 13 | 0.0425 | 0.0962 |
| 14 | 0.0185 | 0.0433 |

The vapor leaving stage 11 is 0.2850 = $y_S$, so the specification is consistent. Fraction of stage 14: $(0.0425 - 0.04)/(0.0425 - 0.0185) = 0.10$.

**N = 13.1, so 14 equilibrium stages (13 trays + partial reboiler); feed on stage 7; vapor drawn from stage 11.**

![Three operating lines with a vapor side draw at y = 0.285: 13.1 stages, feed on 7, draw from 11](fig/practice-advanced-distillation-P18-sol.svg)

### (iv) Minimum reflux check
For the saturated-liquid feed the pinch is at x = 0.45, $y^* = 2.4(0.45)/(1 + 1.4 \times 0.45) = 0.6626$. Then $(L/V)_{min} = (0.96 - 0.6626)/(0.96 - 0.45) = 0.583$ and $R_{min} = 1.40$. The actual R = 2.0 = 1.43 $R_{min}$ ✓. (The draw lies far below the feed and does not create a tighter pinch.)`,
        answer: String.raw`D = 61.5, B = 68.5 kmol/h. Lines: $y = 0.667x + 0.320$; $1.479x - 0.046$; $1.335x - 0.013$. 13.1, so 14 stages (13 trays + PR): feed on 7, vapor draw from 11. $R_{min}$ = 1.40, so R = 1.43 $R_{min}$.` } ] },

    { id: "practice-advanced-distillation-P19", q: 19, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-advanced-distillation-P19a", label: "", marks: "30", topic: "advanced-distillation",
        sub: "Open steam methanol–water with Rmin, steam rate and Murphree efficiency", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style (own numbers)`,
        text: String.raw`200 kmol/h of a saturated-liquid feed, 35 mol% methanol and 65 mol% water, is distilled at 1 atm in a column with a total condenser (saturated reflux) and open steam (pure saturated vapor) instead of a reboiler. The distillate is 90 mol% methanol and the bottoms 2 mol% methanol. The methanol–water VLE table (mol%) is supplied:

| x | 0 | 2 | 4 | 6 | 8 | 10 | 15 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| y | 0 | 13.4 | 23.0 | 30.4 | 36.5 | 41.8 | 51.7 | 57.9 | 66.5 | 72.9 | 77.9 | 82.5 | 87.0 | 91.5 | 95.8 | 97.9 | 100 |

(i) Find $(L/D)_{min}$. (ii) For L/D = 1.0, find D, B and the steam rate. (iii) Find the number of real trays and the feed tray for a Murphree vapor efficiency of 0.70.`,
        solution: String.raw`**Assumptions:** CMO, adiabatic column, $E_{MV} = 0.70$ on every tray, smooth interpolation of the table.

### (i) Minimum reflux
Saturated liquid: vertical feed line at x = 0.35, where $y^* = 0.699$. No tangent pinch exists above the feed (the curve is concave), so
$$\left(\frac{L}{V}\right)_{min} = \frac{0.90 - 0.699}{0.90 - 0.35} = 0.365, \qquad \left(\frac{L}{D}\right)_{min} = \frac{0.365}{0.635} = 0.575$$
Open steam does not change $R_{min}$: the pinch is set by the top line.

### (ii) Flows at L/D = 1.0 (1.74 $R_{min}$)
With open steam, $B = \bar{L} = L + F$ and $S = \bar{V} = V$ (q = 1):
$$Fz = Dx_D + Bx_B \;\Rightarrow\; 70 = 0.90D + 0.02(D + 200) \;\Rightarrow\; D = 71.74\ \mathrm{kmol/h}$$
$$L = 71.74, \quad V = S = 143.48, \quad B = \bar{L} = 271.74\ \mathrm{kmol/h}$$
Check: $F + S = 343.5 = D + B$ ✓.

### (iii) Real trays
- top line: $y = 0.5x + 0.45$; at x = 0.35, y = 0.625
- bottom line: $y = \dfrac{271.74}{143.48}(x - 0.02) = 1.894(x - 0.02)$, through (0.02, 0) and (0.35, 0.625)
- pseudo-equilibrium curve: $y = y_{op} + 0.70(y^* - y_{op})$

| tray | x | y |
|---|---|---|
| 1 | 0.8098 | 0.9000 |
| 2 | 0.7127 | 0.8549 |
| 3 | 0.6082 | 0.8064 |
| 4 | 0.4976 | 0.7541 |
| 5 | 0.3881 | 0.6988 |
| 6 (feed) | 0.3182 | 0.6441 |
| 7 | 0.2466 | 0.5648 |
| 8 | 0.1461 | 0.4293 |
| 9 | 0.0611 | 0.2388 |
| 10 | 0.0166 | 0.0779 |

Fraction of tray 10: $(0.0611 - 0.02)/(0.0611 - 0.0166) = 0.92$. **9.9, so 10 real trays, feed on tray 6 from the top** (ideal stages: 6.85, so the overall efficiency is 6.85/9.92 = 0.69).

![Methanol–water with open steam, L/D = 1, EMV = 0.70: 9.9 real trays, feed on tray 6](fig/practice-advanced-distillation-P19-sol.svg)

**Marking guide:** $R_{min}$ 6; balances and steam rate 8; operating lines 6; stepping and answer 10.`,
        answer: String.raw`$(L/D)_{min}$ = 0.575. At L/D = 1: D = 71.7, B = 271.7, S = 143.5 kmol/h. With $E_{MV}$ = 0.70: 9.9, so 10 real trays, feed on tray 6 (6.85 ideal stages).` } ] },

    { id: "practice-advanced-distillation-P20", q: 20, section: "F", compulsory: false,
      stem: String.raw`A binary mixture with constant α = 2.2 is fed at 100 kmol/h (z = 0.50, half vapor: q = 0.5) to a column with a **partial condenser** and a partial reboiler. The distillate vapor must be $y_D = 0.95$ and the bottoms $x_B = 0.05$. CMO holds.`,
      parts: [
        { id: "practice-advanced-distillation-P20a", label: "(a)", marks: "8", topic: "advanced-distillation",
          sub: "Total reflux with partial condenser: Nmin", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Exam-style (own numbers)`,
          text: String.raw`Find the minimum number of equilibrium contacts (total reflux).`,
          solution: String.raw`At total reflux both lines are y = x. Start at $(y_D, y_D)$; the first step is the partial condenser. Equilibrium: $x = y/(2.2 - 1.2y)$.

| contact | x | y |
|---|---|---|
| 1 (PC) | 0.8962 | 0.9500 |
| 2 | 0.7970 | 0.8962 |
| 3 | 0.6409 | 0.7970 |
| 4 | 0.4478 | 0.6409 |
| 5 | 0.2694 | 0.4478 |
| 6 | 0.1435 | 0.2694 |
| 7 | 0.0708 | 0.1435 |
| 8 | 0.0335 | 0.0708 |

Fraction: $(0.0708 - 0.05)/(0.0708 - 0.0335) = 0.56$. **$N_{min}$ = 7.56 contacts** (partial condenser + 5.6 trays + partial reboiler).

Check with the Fenske equation (not in the slides, constant α only): $N_{min} = \ln\left[\dfrac{0.95/0.05}{0.05/0.95}\right]/\ln 2.2 = 7.47$ ✓.

![Total reflux with a partial condenser: 7.56 contacts](fig/practice-advanced-distillation-P20a-sol.svg)`,
          answer: String.raw`$N_{min}$ ≈ 7.6 equilibrium contacts, counting the partial condenser and the partial reboiler (Fenske 7.5).` },
        { id: "practice-advanced-distillation-P20b", label: "(b)", marks: "7", topic: "advanced-distillation",
          sub: "Minimum reflux analytically (pinch on the feed line)", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Exam-style (own numbers)`,
          text: String.raw`Find $(L/D)_{min}$ analytically.`,
          solution: String.raw`1. Feed line: slope $q/(q - 1) = -1$ through (0.5, 0.5), so $y = 1 - x$.
2. Pinch with the equilibrium curve: $\dfrac{2.2x}{1 + 1.2x} = 1 - x$, which gives $1.2x^2 + 2x - 1 = 0$:
$$x_p = \frac{-2 + \sqrt{4 + 4.8}}{2.4} = 0.4027, \qquad y_p = 0.5973$$
3. For constant α the curve has no inflection, so the pinch is on the feed line:
$$\left(\frac{L}{V}\right)_{min} = \frac{y_D - y_p}{y_D - x_p} = \frac{0.95 - 0.5973}{0.95 - 0.4027} = 0.6444, \qquad R_{min} = \frac{0.6444}{0.3556} = 1.81$$`,
          answer: String.raw`Pinch (0.403, 0.597); $(L/V)_{min}$ = 0.644; $R_{min}$ = 1.81.` },
        { id: "practice-advanced-distillation-P20c", label: "(c)", marks: "15", topic: "advanced-distillation",
          sub: "Stages at R = 1.4 Rmin with partial condenser", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Exam-style (own numbers)`,
          text: String.raw`For R = 1.4 $R_{min}$, find the number of equilibrium contacts and the optimum feed location.`,
          solution: String.raw`1. R = 1.4(1.812) = 2.537. $D = F(z - x_B)/(y_D - x_B) = 50.0$, B = 50.0 kmol/h.
$L = 126.87$, $V = 176.87$, $\bar{L} = L + 0.5F = 176.87$, $\bar{V} = V - 0.5F = 126.87$ kmol/h.
2. Lines:
- top: $y = 0.7173x + (1 - 0.7173)(0.95) = 0.7173x + 0.2686$
- bottom: $y = 1.3941x - 0.0197$
- they meet at (0.426, 0.574) on $y = 1 - x$ ✓
3. Stepping from $(y_D, y_D)$; contact 1 is the partial condenser, giving the reflux $x_0 = 0.896$:

| contact | x | y |
|---|---|---|
| 1 (PC) | 0.8962 | 0.9500 |
| 2 | 0.8239 | 0.9114 |
| 3 | 0.7355 | 0.8595 |
| 4 | 0.6397 | 0.7962 |
| 5 | 0.5481 | 0.7274 |
| 6 | 0.4707 | 0.6617 |
| 7 (feed) | 0.4116 | 0.6062 |
| 8 | 0.3610 | 0.5542 |
| 9 | 0.2986 | 0.4836 |
| 10 | 0.2300 | 0.3965 |
| 11 | 0.1636 | 0.3009 |
| 12 | 0.1069 | 0.2084 |
| 13 | 0.0632 | 0.1293 |
| 14 | 0.0323 | 0.0685 |

Fraction: $(0.0632 - 0.05)/(0.0632 - 0.0323) = 0.43$.

**13.4, so 14 contacts: partial condenser + 12 trays + partial reboiler, with the feed on contact 7 (the 6th tray below the condenser).** $N/N_{min}$ = 13.4/7.56 = 1.8, typical for R/R_min = 1.4.

![Partial condenser column at R = 2.54: 13.4 contacts, feed on contact 7](fig/practice-advanced-distillation-P20c-sol.svg)

**Exam tip:** with a partial condenser the top line starts at $(y_D, y_D)$, and the first step is a real equilibrium contact, so it must be counted.`,
          answer: String.raw`R = 2.54: top $y = 0.717x + 0.269$, bottom $y = 1.394x - 0.020$. 13.4, so 14 contacts (PC + 12 trays + PR), feed on contact 7 (tray 6).` } ] }
  ] });
