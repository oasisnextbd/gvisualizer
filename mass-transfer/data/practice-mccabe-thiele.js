QB.paper({ year: "Practice", set: "Stage-by-stage: Lewis & McCabe–Thiele", date: "", marks: 0, practice: true,
  rules: String.raw`Internal stage-by-stage balances for binary columns: the Lewis method, operating and feed lines, q, McCabe–Thiele stepping and the optimum feed stage — the slide problems of deck 4B, every starred Wankat chapter 4 problem in this set (4.D3–4.D20), and exam-style questions and derivations.`,
  questions: [
    { id: "practice-mccabe-thiele-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mccabe-thiele-P1", label: "", marks: "", topic: "mccabe-thiele",
        sub: "Lewis method, ethanol–water, feed on stage 2", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B (Fractional distillation Part B), "Problem: Stage-by-Stage Calculations by Lewis Method" and its seven solution slides; same as Wankat 3e, Example 4-1`,
        text: String.raw`A countercurrent staged column at 1 atm separates 10 000 kg/h of a saturated-liquid feed of 30 wt% ethanol, 70 wt% water. The distillate must be 80 wt% ethanol and the bottoms 5 wt% ethanol. The column is well insulated and has a total condenser and a partial reboiler; reflux is a saturated liquid and $L/D = 3.0$. Use the Lewis method to find the number of equilibrium contacts if the feed is introduced on the second stage from the top.`,
        solution: String.raw`**Given:** $F = 10\,000$ kg/h, saturated liquid ($q = 1$), $z = 0.30$, $x_D = 0.80$, $x_B = 0.05$ (wt fractions), $L/D = 3$, feed stage 2.

**Find:** number of equilibrium contacts.

**Assumptions:** CMO (λ of ethanol and water differ by about 5 %, acceptable since only ratios $L/V$ are used); equilibrium stages; VLE from Wankat Table 2-1 (1 atm) with monotone interpolation.

1. **Mole fractions** ($M_E = 46.07$, $M_W = 18.02$):
$$z = \frac{0.30/46.07}{0.30/46.07 + 0.70/18.02} = 0.1435,\qquad x_D = 0.6100,\qquad x_B = 0.0202$$
$\bar{M}_F = 22.04$ kg/kmol, so $F = 10\,000/22.04 = 453.7$ kmol/h.

2. **External balances:** $D = F(z - x_B)/(x_D - x_B) = 94.9$ kmol/h, $B = 358.8$ kmol/h (3333 and 6667 kg/h as in Example 3-1; the slide's 95.33 and 358.6 come from rounding $\bar{M}_F$ to 22).

3. **Flows (CMO):** $L = 3D = 284.7$, $V = L + D = 379.6$; saturated-liquid feed: $\bar{L} = L + F = 738.4$, $\bar{V} = V = 379.6$ kmol/h.

4. **Operating lines:**
$$y_{j+1} = \frac{L}{V}x_j + \left(1 - \frac{L}{V}\right)x_D = 0.75x_j + 0.1525$$
$$y_k = \frac{\bar{L}}{\bar{V}}x_{k-1} - \left(\frac{\bar{L}}{\bar{V}} - 1\right)x_B = 1.945x_{k-1} - 0.0191$$

5. **Stage by stage** (equilibrium, then operating line; switch below stage 2):

| Contact | $y_n$ | $x_n$ (equilibrium) | next $y$ from |
|---|---|---|---|
| 1 | 0.610 ($= x_D$) | 0.391 | top line: $y_2 = 0.446$ |
| 2 (feed) | 0.446 | 0.103 | bottom line: $y_3 = 0.180$ |
| 3 (reboiler) | 0.180 | 0.0207 | — |

$x_3 = 0.0207$ is essentially $x_B = 0.0202$ (a fourth contact would add only 3 % of a stage).

![Lewis stepping drawn on the McCabe–Thiele diagram: three contacts](fig/practice-mccabe-thiele-P1-sol.svg)

**Result:** 3 equilibrium contacts = 2 stages in the column + the partial reboiler, as on the slide and in Wankat. The slide's own diagram is titled "4 equilibrium stages"; that counts the tiny fraction at the bottom as a full step — with exact numbers the separation is reached at 3.03 contacts.

> **Exam tip:** in the Lewis method alternate strictly: $x_n$ from equilibrium with $y_n$, then $y_{n+1}$ from the operating line of the section you are in; change to the bottom line right after the feed stage.`,
        answer: String.raw`D = 94.9, B = 358.8 kmol/h; y = 0.75x + 0.153 and y = 1.945x − 0.019; x₁ = 0.391, x₂ = 0.103, x₃ = 0.021 ≈ x_B → 3 contacts (2 stages + partial reboiler).` } ] },

    { id: "practice-mccabe-thiele-P2", q: 2, section: "S", compulsory: false, stem: String.raw`Calculate the slope of the feed line for each of the following feeds.`,
      parts: [
        { id: "practice-mccabe-thiele-P2a", label: "(a)", marks: "", topic: "mccabe-thiele",
        sub: "Two-phase feed, 80 % vaporized", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Feed Line Calculations" (a); Wankat 3e, Example 4-2a`,
        text: String.raw`A two-phase feed of which 80 % is vaporized at column conditions.`,
        solution: String.raw`For a two-phase feed the liquid part joins the liquid flow: $\bar{L} = L + L_F = L + 0.2F$, so
$$q = \frac{\bar{L} - L}{F} = 0.2,\qquad \text{slope} = \frac{q}{q - 1} = \frac{0.2}{-0.8} = -0.25$$

![The feed lines of this question drawn through a common z](fig/practice-mccabe-thiele-P2-sol.svg)`,
        answer: String.raw`q = 0.2, slope = −0.25.` },
        { id: "practice-mccabe-thiele-P2b", label: "(b)", marks: "", topic: "mccabe-thiele",
        sub: "Superheated vapor, 1 mol liquid vaporized per 9 mol feed", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Feed Line Calculations" (b); Wankat 3e, Example 4-2b`,
        text: String.raw`A superheated vapor feed; 1 mol of liquid vaporizes on the feed stage for every 9 mol of feed.`,
        solution: String.raw`Cooling the feed to saturation vaporizes $v = F/9$ of the liquid coming down: $\bar{L} = L - F/9$ and $\bar{V} = V + F + F/9$. Hence
$$q = \frac{\bar{L} - L}{F} = -\frac{1}{9} = -0.111,\qquad \text{slope} = \frac{-1/9}{-1/9 - 1} = \frac{1}{10} = 0.10$$`,
        answer: String.raw`q = −1/9, slope = +0.10.` },
        { id: "practice-mccabe-thiele-P2c", label: "(c)", marks: "", topic: "mccabe-thiele",
        sub: "Liquid subcooled by 35 °F", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Feed Line Calculations" (c); Wankat 3e, Example 4-2c`,
        text: String.raw`A liquid feed subcooled by 35 °F; average liquid heat capacity 30 Btu/(lbmol °F), λ = 15 000 Btu/lbmol.`,
        solution: String.raw`The vapor that condenses, $c$, heats the feed to its bubble point: $c\lambda = FC_{PL}(T_{BP} - T_F)$. Then $\bar{L} = L + F + c$ and
$$q = 1 + \frac{C_{PL}(T_{BP} - T_F)}{\lambda} = 1 + \frac{30(35)}{15\,000} = 1.07,\qquad \text{slope} = \frac{1.07}{0.07} = 15.3$$
Even 35 °F of subcooling gives a nearly vertical feed line.`,
        answer: String.raw`q = 1.07, slope = 15.3.` },
        { id: "practice-mccabe-thiele-P2d", label: "(d)", marks: "", topic: "mccabe-thiele",
        sub: "Ethanol–water 40 mol% at 40 °C, q from the H–x chart", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Feed Line Calculations" (d); Wankat 3e, Example 4-2d`,
        text: String.raw`An ethanol–water feed, 40 mol% ethanol, at 40 °C and 1 kg/cm².`,
        solution: String.raw`Use $q = (H - h_F)/(H - h)$ with all enthalpies at the same composition, so the molar mass cancels and the mass-basis chart can be used.

1. 0.40 mole fraction = $\dfrac{0.40(46.07)}{0.40(46.07) + 0.60(18.02)} = 0.63$ weight fraction.
2. From the H–x chart at 0.63: $H$ (saturated vapor) ≈ 395, $h$ (saturated liquid) ≈ 65, $h_F$ (40 °C isotherm) ≈ 27.5 kcal/kg.
3. $$q = \frac{395 - 27.5}{395 - 65} = 1.11,\qquad \text{slope} = \frac{1.11}{0.11} \approx 9.8$$

Wankat reads $h_F = 20$ kcal/kg, giving $q = 1.14$ and slope 8.3; either way the line is steep (a subcooled liquid, $q > 1$). The 40 °C isotherm is hard to read at this composition, which is the whole difference.`,
        answer: String.raw`q ≈ 1.11–1.14, slope ≈ 8–10 (subcooled liquid).` } ] },

    { id: "practice-mccabe-thiele-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mccabe-thiele-P3", label: "", marks: "", topic: "mccabe-thiele",
        sub: "McCabe–Thiele, ethanol–water, R = 5/3, subcooled feed at 80 °F", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Problem: Stage-by-Stage Calculations by McCabe-Thiele Method" and its two solution slides; same as Wankat 3e, Example 4-3`,
        text: String.raw`A column with a total condenser and a partial reboiler separates 1000 kmol/h of 20 mol% ethanol in water, fed at 80 °F, at 1 atm. The distillate must be 80 mol% and the bottoms 2 mol% ethanol. $L/D = 5/3$, saturated-liquid reflux, CMO. Find the optimum feed stage and the total number of equilibrium stages.`,
        solution: String.raw`**Given:** $z = 0.20$, $x_D = 0.80$, $x_B = 0.02$, $R = L/D = 5/3$, $T_F = 80\ ^\circ$F, 1 atm.

**Find:** optimum feed stage, number of stages.

**Assumptions:** CMO, equilibrium stages, VLE from Wankat Table 2-1 (monotone interpolation).

1. **Top operating line:**
$$y = \frac{R}{R+1}x + \frac{x_D}{R+1} = 0.625x + 0.30$$

2. **q** from the molar enthalpy–composition chart at 1 atm (slide values, Btu/lbmol): $H = 21\,250$, $h = 3000$, $h_F(80\ ^\circ\mathrm{F}) = 700$:
$$q = \frac{H - h_F}{H - h} = \frac{21\,250 - 700}{21\,250 - 3000} = 1.126,\qquad \text{slope} = \frac{q}{q-1} = 8.94$$
Feed line: $y = 8.94x - 1.587$.

3. **Intersection** of the top line and feed line: $x = 0.227$, $y = 0.442$. The bottom operating line joins this point to $(x_B, x_B) = (0.02, 0.02)$: slope $\bar{L}/\bar{V} = 2.038$, $y = 2.038x - 0.0208$.

4. **Stepping from the top** (switch to the bottom line after the step that crosses the intersection):

| Stage | $x$ | $y$ | Stage | $x$ | $y$ |
|---|---|---|---|---|---|
| 1 | 0.774 | 0.800 | 8 | 0.580 | 0.687 |
| 2 | 0.751 | 0.784 | 9 | 0.526 | 0.663 |
| 3 | 0.728 | 0.769 | 10 | 0.439 | 0.629 |
| 4 | 0.705 | 0.755 | 11 | 0.305 | 0.575 |
| 5 | 0.680 | 0.741 | 12 (feed) | 0.144 | 0.491 |
| 6 | 0.652 | 0.725 | 13 | 0.039 | 0.273 |
| 7 | 0.620 | 0.708 | 14 | 0.006 | 0.058 |

Fraction of the last step: $(0.039 - 0.020)/(0.039 - 0.006) = 0.57$, so 13.6 contacts.

![McCabe–Thiele diagram: 13.6 contacts, feed on stage 12](fig/practice-mccabe-thiele-P3-sol.svg)

**Result:** 13.6 → 14 contacts = 13 equilibrium stages + partial reboiler; optimum feed on stage 12 from the top (the 2nd stage above the reboiler).

**Comparison with the slide/Wankat:** "12 stages + partial reboiler, feed 2nd above the reboiler". The feed location agrees; the stage count is one higher here because the operating line almost pinches the curve between $x = 0.6$ and 0.8, where Table 2-1 has no data between 0.747 and 0.894: small changes in the curve shift many small steps (linear interpolation gives 13.3 contacts).

> **Exam tip:** near the ethanol–water azeotrope steps get tiny; expand that part of the diagram (or draw it large) — most errors come from the equilibrium curve there.`,
        answer: String.raw`y = 0.625x + 0.30; q = 1.126, feed line slope 8.94; ≈ 13.6 contacts → 13 stages + partial reboiler, feed on stage 12 (2nd above reboiler); slide/Wankat: 12 + reboiler.` } ] },

    { id: "practice-mccabe-thiele-P4", q: 4, section: "S", compulsory: false, stem: String.raw`A column (total condenser, partial reboiler, saturated-liquid reflux, CMO, 1 atm) separates ethanol from n-propanol with constant $\alpha = 2.1$. $z = 0.48$, $x_D = 0.96$, $x_B = 0.04$. Find the number of stages and the optimum feed location for the cases below.`,
      parts: [
        { id: "practice-mccabe-thiele-P4a", label: "(a)", marks: "", topic: "mccabe-thiele",
        sub: "Ethanol–propanol α = 2.1, L/D = 3: effect of q (0.4 and 2.0)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Problem: Ethanol-Propanol System" (a) (also asked in the 2016-17 and 2020-21 finals for q = 0.4)`,
        text: String.raw`$L/D = 3$ with (i) $q = 0.4$ and (ii) $q = 2.0$.`,
        solution: String.raw`**Equilibrium:** $y = \dfrac{2.1x}{1 + 1.1x}$, inverse $x = \dfrac{y}{2.1 - 1.1y}$.

**Top operating line** (both cases): $L/V = 3/4 = 0.75$, $y = 0.75x + 0.24$.

**(i) q = 0.4:** feed line $y = \dfrac{0.4}{-0.6}x - \dfrac{0.48}{-0.6} = -0.667x + 0.80$. Intersection with the top line: $x = 0.395$, $y = 0.537$. Bottom line through (0.04, 0.04): slope 1.397.

Stepping from the top ($x_n$, $y_n$; S = below the feed): 1: 0.920, 0.960 | 2: 0.863, 0.930 | 3: 0.789, 0.887 | 4: 0.702, 0.832 | 5: 0.610, 0.767 | 6: 0.523, 0.697 | 7: 0.450, 0.632 | 8: 0.395, 0.578 (feed) | 9: 0.354, 0.535 S | 10: 0.305, 0.479 S | 11: 0.249, 0.410 S | 12: 0.191, 0.331 S | 13: 0.138, 0.251 S | 14: 0.093, 0.176 S | 15: 0.057, 0.113 S | 16: 0.032, 0.064 S.

Result: 15.7 contacts → 16 = 15 stages + partial reboiler, feed on stage 8.

![Ethanol–propanol, L/D = 3, q = 0.4](fig/practice-mccabe-thiele-P4a-sol.svg)

**(ii) q = 2.0:** feed line $y = 2x - 0.48$; intersection (0.576, 0.672); bottom-line slope 1.179.

Stepping: stages 1–6 as above (x₆ = 0.523, feed stage 6), then 7: 0.427 | 8: 0.319 | 9: 0.218 | 10: 0.137 | 11: 0.080 | 12: 0.043 | 13: 0.021.

Result: 12.2 contacts → 13 = 12 stages + partial reboiler, feed on stage 6.

![Ethanol–propanol, L/D = 3, q = 2.0](fig/practice-mccabe-thiele-P4a2-sol.svg)

**Comparison:** the subcooled feed ($q = 2$) raises $\bar{L}$ and $\bar{V}$ (more boilup), moves the intersection away from the equilibrium curve and saves about 3.5 stages; the feed stage moves up.`,
        answer: String.raw`(i) q = 0.4: 15.7 contacts → 15 stages + reboiler, feed on stage 8; (ii) q = 2.0: 12.2 contacts → 12 stages + reboiler, feed on stage 6.` },
        { id: "practice-mccabe-thiele-P4b", label: "(b)", marks: "", topic: "mccabe-thiele",
        sub: "Ethanol–propanol α = 2.1, q = 0.4: effect of L/D (2.5 and 6)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Problem: Ethanol-Propanol System" (b)`,
        text: String.raw`$q = 0.4$ with (i) $L/D = 2.5$ and (ii) $L/D = 6$.`,
        solution: String.raw`Feed line as in (a)(i): $y = -0.667x + 0.80$.

**(i) L/D = 2.5:** $L/V = 0.714$, $y = 0.714x + 0.274$; intersection (0.381, 0.546); bottom slope 1.486.

Stepping: 1: 0.920 | 2: 0.866 | 3: 0.798 | 4: 0.721 | 5: 0.641 | 6: 0.565 | 7: 0.501 | 8: 0.450 | 9: 0.412 | 10: 0.386 | 11: 0.368 (feed) | 12: 0.347 | 13: 0.319 | 14: 0.284 | 15: 0.243 | 16: 0.198 | 17: 0.153 | 18: 0.111 | 19: 0.075 | 20: 0.046 | 21: 0.024 (liquid mole fractions). Steps 9–12 crowd near the intersection: the column is close to a pinch.

Result: 20.3 contacts → 21 = 20 stages + partial reboiler, feed on stage 11.

![Ethanol–propanol, L/D = 2.5, q = 0.4](fig/practice-mccabe-thiele-P4b-sol.svg)

**(ii) L/D = 6:** $L/V = 0.857$, $y = 0.857x + 0.137$; intersection (0.435, 0.510); bottom slope 1.190.

Stepping: 1: 0.920 | 2: 0.855 | 3: 0.761 | 4: 0.641 | 5: 0.511 | 6: 0.392 (feed) | 7: 0.287 | 8: 0.193 | 9: 0.120 | 10: 0.069 | 11: 0.037.

Result: 10.9 contacts → 11 = 10 stages + partial reboiler, feed on stage 6.

![Ethanol–propanol, L/D = 6, q = 0.4](fig/practice-mccabe-thiele-P4b2-sol.svg)

**Comparison:** raising $L/D$ from 2.5 to 6 halves the number of stages but more than doubles $V$ (condenser and reboiler duties): the stages–energy trade-off.`,
        answer: String.raw`(i) L/D = 2.5: 20.3 contacts → 20 stages + reboiler, feed on 11; (ii) L/D = 6: 10.9 contacts → 10 stages + reboiler, feed on 6.` } ] },

    { id: "practice-mccabe-thiele-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mccabe-thiele-P5", label: "", marks: "", topic: "mccabe-thiele",
        sub: "Stripping section, EDC–TCE, α = 2.4, V̄/B = 2: second stage from the bottom", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Problem: Ethylene Dichloride – Tri Chloroethane System"`,
        text: String.raw`In the stripping section of a column separating ethylene dichloride (EDC, more volatile) from trichloroethane, the partial reboiler gives a bottoms of 0.10 mole fraction EDC. CMO is valid, $\bar{V}/B = 2$ and $\alpha = 2.40$. Find the liquid and vapor compositions leaving the second stage from the bottom (a) analytically and (b) graphically.`,
        solution: String.raw`**Given:** $x_B = 0.10$, $\bar{V}/B = 2$, $\alpha = 2.4$.

**Assumptions:** CMO, partial reboiler is an equilibrium contact (counted as the first stage from the bottom).

1. **Bottom operating line.** $\bar{L} = \bar{V} + B$, so $\bar{L}/\bar{V} = (\bar{V}/B + 1)/(\bar{V}/B) = 1.5$ and
$$y_k = \frac{\bar{L}}{\bar{V}}x_{k-1} - \left(\frac{\bar{L}}{\bar{V}} - 1\right)x_B = 1.5x_{k-1} - 0.05$$

2. **(a) Analytical, from the bottom up** (equilibrium $y = 2.4x/(1 + 1.4x)$, operating line solved for $x$):

| Contact | $x$ (liquid leaving) | $y$ (vapor leaving) |
|---|---|---|
| reboiler (1st from bottom) | 0.100 | $2.4(0.1)/1.14 = 0.2105$ |
| stage above (2nd from bottom) | $(0.2105 + 0.05)/1.5 = 0.1737$ | $2.4(0.1737)/(1 + 1.4(0.1737)) = 0.3353$ |
| next stage (3rd) | 0.2569 | 0.4534 |

3. **(b) Graphically:** plot the curve for α = 2.4, the line $y = 1.5x - 0.05$ through (0.10, 0.10), and step up from $x_B$: vertical to the curve (reboiler), horizontal to the operating line, vertical again.

![Bottom-up steps in the stripping section](fig/practice-mccabe-thiele-P5-sol.svg)

**Result:** second stage from the bottom (the first stage above the reboiler): $x = 0.174$, $y = 0.335$. If the reboiler is not counted as a stage, the "second stage" is the next one: $x = 0.257$, $y = 0.453$.

> **Exam tip:** going up the column, $y$ comes from equilibrium and $x$ from the operating line — the reverse of top-down stepping.`,
        answer: String.raw`Bottom line y = 1.5x − 0.05; reboiler x = 0.10, y = 0.211; 2nd from bottom x = 0.174, y = 0.335 (3rd: x = 0.257, y = 0.453).` } ] },

    { id: "practice-mccabe-thiele-P6", q: 6, section: "S", compulsory: false, stem: String.raw`A column separates phenol from p-cresol at 1 atm. The distillate is 0.96 mole fraction phenol, $L/D = 4$, the reflux is a saturated liquid, CMO holds and $\alpha_{phenol-cresol} = 1.76$.`,
      parts: [
        { id: "practice-mccabe-thiele-P6a", label: "(a)", marks: "", topic: "mccabe-thiele",
        sub: "Phenol–cresol, α = 1.76: vapor leaving stage 3 (analytical)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Problem: Phenol – Cresol System" (a); Wankat 3e, Problem 4.D10*`,
        text: String.raw`Find the vapor composition leaving the third equilibrium stage below the total condenser by an analytical stage-by-stage calculation, alternating between the operating and equilibrium equations.`,
        solution: String.raw`**Top operating line:** $L/V = 4/5 = 0.8$, $y_{j+1} = 0.8x_j + 0.2(0.96) = 0.8x_j + 0.192$.

**Equilibrium** solved for $x$: $x = \dfrac{y}{\alpha - (\alpha - 1)y} = \dfrac{y}{1.76 - 0.76y}$.

| Stage | $y_j$ | $x_j$ |
|---|---|---|
| 1 | 0.9600 ($= x_D$) | 0.9317 |
| 2 | $0.8(0.9317) + 0.192 = 0.9373$ | 0.8947 |
| 3 | $0.8(0.8947) + 0.192 = 0.9078$ | 0.8483 |

**Book answer: $y_3 = 0.9078$ ✓**`,
        answer: String.raw`y₃ = 0.908 (book 0.9078 ✓).` },
        { id: "practice-mccabe-thiele-P6b", label: "(b)", marks: "", topic: "mccabe-thiele",
        sub: "Phenol–cresol: liquid leaving stage 6 (graphical)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Problem: Phenol – Cresol System" (b); Wankat 3e, Problem 4.D10b*`,
        text: String.raw`Find the liquid composition leaving the sixth equilibrium stage below the total condenser graphically, on a McCabe–Thiele diagram plotted for α = 1.76.`,
        solution: String.raw`Plot $y = 1.76x/(1 + 0.76x)$ and the top line through (0.96, 0.96) with slope 0.8, and step down six times from $x_D$. Continuing the table of (a): stage 4: $y = 0.8707$, $x = 0.7927$; stage 5: $y = 0.8262$, $x = 0.7298$; stage 6: $y = 0.7758$, $x = 0.6629$.

![Six steps down from x_D for phenol–cresol](fig/practice-mccabe-thiele-P6-sol.svg)

**Book answer: $x_6 = 0.66$ ✓**`,
        answer: String.raw`x₆ ≈ 0.663 (book 0.66 ✓).` } ] },

    { id: "practice-mccabe-thiele-P7", q: 7, section: "S", compulsory: false, stem: String.raw`A column at 101 kPa separates 30 kg/h of a bubble-point benzene–toluene solution (0.6 mass fraction toluene) into a distillate of 0.97 mass fraction benzene and a bottoms of 0.98 mass fraction toluene, at a reflux ratio of 3.5 with saturated reflux and the feed on the optimum tray. Equilibrium at 101 kPa (mole fraction benzene):

| $x$ | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 0.95 |
|---|---|---|---|---|---|---|---|---|---|---|
| $y$ | 0.21 | 0.37 | 0.51 | 0.64 | 0.72 | 0.79 | 0.86 | 0.91 | 0.96 | 0.98 |`,
      parts: [
        { id: "practice-mccabe-thiele-P7a", label: "(a)", marks: "", topic: "mccabe-thiele",
        sub: "Benzene–toluene: product flow rates", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Problem: Benzene-Toluene System" (a); Seader, Henley & Roper 3e, ch. 7 (McCabe–Thiele worked example)`,
        text: String.raw`Find the top and bottom product flow rates.`,
        solution: String.raw`In mass units, $D = F\dfrac{z - x_B}{x_D - x_B} = 30\,\dfrac{0.40 - 0.02}{0.97 - 0.02} = 12.0$ kg/h and $B = 18.0$ kg/h.

In moles ($M_B = 78.11$, $M_T = 92.14$): $z = 0.440$, $x_D = 0.974$, $x_B = 0.0235$; $\bar{M}_F = 85.96$, $F = 0.349$ kmol/h, $D = 0.153$ kmol/h, $B = 0.196$ kmol/h.`,
        answer: String.raw`D = 12.0 kg/h (0.153 kmol/h), B = 18.0 kg/h (0.196 kmol/h).` },
        { id: "practice-mccabe-thiele-P7b", label: "(b)", marks: "", topic: "mccabe-thiele",
        sub: "Benzene–toluene, R = 3.5: number of stages", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Problem: Benzene-Toluene System" (b); Seader, Henley & Roper 3e, ch. 7 (McCabe–Thiele worked example)`,
        text: String.raw`Find the number of equilibrium stages with the given equilibrium data.`,
        solution: String.raw`**Assumptions:** CMO, total condenser, partial reboiler, saturated-liquid feed ($q = 1$); data interpolated with a monotone curve through (0, 0) and (1, 1).

1. Top line: $L/V = 3.5/4.5 = 0.778$, $y = 0.778x + 0.974/4.5 = 0.778x + 0.217$.
2. Feed line: vertical at $x = 0.440$; intersection $y = 0.559$. Bottom line from (0.0235, 0.0235) to (0.440, 0.559): slope 1.285.
3. Stepping from the top ($x_n$, $y_n$): 1: 0.936, 0.974 | 2: 0.867, 0.944 | 3: 0.760, 0.891 | 4: 0.625, 0.808 | 5: 0.476, 0.702 | 6: 0.355, 0.587 (feed) | 7: 0.256, 0.450 | 8: 0.168, 0.322 | 9: 0.100, 0.209 | 10: 0.056, 0.121 | 11: 0.030, 0.065 | 12: 0.015, 0.032. Last fraction $(0.030 - 0.0235)/(0.030 - 0.015) = 0.44$.

![Benzene–toluene, R = 3.5: 11.4 contacts, feed on 6](fig/practice-mccabe-thiele-P7-sol.svg)

**Result:** 11.4 → 12 contacts = 11 equilibrium stages + partial reboiler, feed on stage 6 from the top.`,
        answer: String.raw`≈ 11.4 contacts → 11 stages + partial reboiler; optimum feed on stage 6.` } ] },

    { id: "practice-mccabe-thiele-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mccabe-thiele-P8", label: "", marks: "", topic: "mccabe-thiele",
        sub: "Simulation: benzene–chlorobenzene, 2 plates + reboiler, find x_D and x_B", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 4B, "Problem: Calculation of Products"; Seader, Henley & Roper 3e, ch. 7 exercise (as on the slide)`,
        text: String.raw`A bubble-point mixture of 54.5 mol% benzene in chlorobenzene is fed continuously to the bottom plate of a column with two equilibrium plates, a partial reboiler and a total condenser. The reboiler duty gives $\bar{V}/F = 0.855$, and $L/V$ in the top of the column is 0.50. With the equilibrium data below, what product compositions are expected?

| $x$ | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 |
|---|---|---|---|---|---|---|---|---|
| $y$ | 0.314 | 0.508 | 0.640 | 0.734 | 0.806 | 0.862 | 0.905 | 0.943 |`,
        solution: String.raw`**Given:** $z = 0.545$, $q = 1$, feed to plate 2 (bottom plate), $\bar{V}/F = 0.855$, $L/V = 0.5$.

**Find:** $x_D$, $x_B$ — a simulation problem (stages fixed), solved by trial and error.

**Assumptions:** CMO; the data fit $\alpha \approx 4.13$ at every point, used to extend the curve above $x = 0.8$.

1. **Flows** (basis $F = 1$): $q = 1$ so $V = \bar{V} = 0.855$; $L = 0.5V = 0.4275$; $D = V - L = 0.4275$; $B = 0.5725$; $\bar{L} = L + F = 1.4275$, $\bar{L}/\bar{V} = 1.670$.

2. **Trial and error on $x_D$:** guess $x_D$ → $x_1$ from equilibrium with $y_1 = x_D$ → $y_2 = 0.5x_1 + 0.5x_D$ → $x_2$ (feed plate) → reboiler balance $\bar{L}x_2 = \bar{V}y_R + Bx_B$ with $y_R = y^*(x_B)$ gives $x_B$ → check $Fz = Dx_D + Bx_B$. Converged:

| Contact | $x$ | $y$ |
|---|---|---|
| plate 1 | 0.688 | 0.900 ($= x_D$) |
| plate 2 (feed) | 0.482 | 0.794 |
| reboiler | 0.280 ($= x_B$) | 0.617 |

Check: $0.4275(0.900) + 0.5725(0.280) = 0.545$ ✓; plate-2 balance $Lx_1 + Fz + \bar{V}y_R = Vy_2 + \bar{L}x_2$: 1.367 = 1.367 ✓.

![Benzene–chlorobenzene: two plates and reboiler](fig/practice-mccabe-thiele-P8-sol.svg)

**Result:** $x_D \approx 0.90$, $x_B \approx 0.28$ (mole fraction benzene).

> **Exam tip:** in a simulation problem the stages are fixed and the products unknown: guess one product composition, step through the fixed stages, and correct the guess until the overall balance closes.`,
        answer: String.raw`x_D ≈ 0.90, x_B ≈ 0.28 mole fraction benzene (D = 0.4275F, B = 0.5725F).` } ] },

    { id: "practice-mccabe-thiele-P9", q: 9, section: "W", compulsory: false, stem: String.raw`Ethanol–water feeds that flash as they enter a column at 1 kg/cm² (data: Wankat Figure 2-4; CMO may be assumed).`,
      parts: [
        { id: "practice-mccabe-thiele-P9a", label: "(a)", marks: "", topic: "mccabe-thiele",
        sub: "Hot pressurized liquid feed (40 mol%, 200 °C) flashing into the column: feed-line slope", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D3a*`,
        text: String.raw`The feed is 40 mol% ethanol, a liquid at 200 °C kept under enough pressure to stay liquid; it flashes through a valve into the column. Find the slope of the feed line.`,
        solution: String.raw`**Method:** $q = (H - h_F)/(H - h)$ with $H$ and $h$ (saturated vapor and liquid) at the feed composition; the valve is isenthalpic, so $h_F$ is the enthalpy of the hot liquid.

1. 40 mol% = 0.63 weight fraction. From the chart: $H = 395$, $h = 65$ kcal/kg; bubble point ≈ 80.7 °C (Table 2-1).
2. The chart stops near 100 °C, so extend the liquid line with the liquid heat capacity read from the spacing of the chart's liquid isotherms at this composition, $C_P \approx 0.90$ kcal/(kg °C):
$$h_F = h + C_P(200 - 80.7) = 65 + 0.90(119.3) = 172\ \mathrm{kcal/kg}$$
3. $$q = \frac{395 - 172}{395 - 65} = 0.675,\qquad \text{slope} = \frac{q}{q - 1} = \frac{0.675}{-0.325} = -2.07$$
$q < 1$: about one third of the feed flashes to vapor.

**Book answer: slope = −2.54 ✗.** The book's value means $q = 0.718$, i.e. $h_F = 158$ kcal/kg, an average liquid $C_P$ of about 0.78 kcal/(kg °C) above the boiling point. The answer depends entirely on the $C_P$ used beyond the chart; the method is the same.`,
        answer: String.raw`q ≈ 0.68, feed-line slope ≈ −2.1 (book −2.54, which corresponds to C_P ≈ 0.78 kcal/kg °C instead of 0.90).` },
        { id: "practice-mccabe-thiele-P9b", label: "(b)", marks: "", topic: "mccabe-thiele",
        sub: "50 wt% feed at 250 °C flashing into the column: q", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D3b*`,
        text: String.raw`The feed is 50 wt% ethanol, 1 kg/h, a liquid at 250 °C that flashes as it enters the column. Find $q$.`,
        solution: String.raw`1. At 0.50 wt (0.281 mole fraction): $H = 448$, $h = 69$ kcal/kg; bubble point ≈ 82.1 °C.
2. $h_F = 69 + 0.90(250 - 82.1) = 220$ kcal/kg.
3. $$q = \frac{H - h_F}{H - h} = \frac{448 - 220}{448 - 69} = 0.60$$
The feed rate is not needed. Since CMO holds, $q$ is also the liquid fraction of the flashed feed.

**Book answer: $q = 0.58$ ✓**`,
        answer: String.raw`q ≈ 0.60 (book 0.58 ✓).` } ] },

    { id: "practice-mccabe-thiele-P10", q: 10, section: "W", compulsory: false, stem: String.raw`Find $q$ and the feed-line slope for each feed.`,
      parts: [
        { id: "practice-mccabe-thiele-P10a", label: "(a)", marks: "", topic: "mccabe-thiele",
        sub: "Superheated vapor feed with given Cp and λ: plot the feed line", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D4a*`,
        text: String.raw`A superheated vapor feed, 60 mol% more volatile component, at 350 °C; 1000 kmol/h. The feed-plate temperature is 50 °C. $C_{PL} = 50$ and $C_{PV} = 25$ cal/(mol °C), λ = 5000 cal/mol. Plot the feed line.`,
        solution: String.raw`With the vapor enthalpy $H$ at the feed-plate temperature (saturated vapor at 50 °C), $H - h_F = -C_{PV}(T_F - 50)$ and $H - h = \lambda$:
$$q = \frac{H - h_F}{H - h} = \frac{-25(350 - 50)}{5000} = -1.5,\qquad \text{slope} = \frac{-1.5}{-2.5} = 0.6$$
The feed line passes through $y = x = z = 0.6$ with slope 0.6 ($y = 0.6x + 0.24$) and runs down to the left.

![Feed lines of 4.D4](fig/practice-mccabe-thiele-P10-sol.svg)

**Book answer: slope = 0.6 through y = x = z = 0.6 ✓**`,
        answer: String.raw`q = −1.5, slope 0.6, through (0.6, 0.6) ✓.` },
        { id: "practice-mccabe-thiele-P10b", label: "(b)", marks: "", topic: "mccabe-thiele",
        sub: "Two-phase feed, 40 % vapor", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D4b*`,
        text: String.raw`A two-phase feed that is 40 mol% vapor.`,
        solution: String.raw`$q$ = liquid fraction = 0.6; slope $= 0.6/(0.6 - 1) = -1.5$.

**Book answer: q = 0.6, slope = −1.5 ✓**`,
        answer: String.raw`q = 0.6, slope = −1.5 ✓.` },
        { id: "practice-mccabe-thiele-P10c", label: "(c)", marks: "", topic: "mccabe-thiele",
        sub: "Superheated vapor, 1 mol liquid vaporized per 5 mol feed", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D4c*`,
        text: String.raw`A superheated vapor feed; 1 mol of liquid vaporizes on the feed plate to cool 5 mol of feed to a saturated vapor.`,
        solution: String.raw`$\bar{L} = L - F/5$, so $q = -1/5 = -0.2$ and slope $= -0.2/(-1.2) = 1/6 = 0.167$.

**Book answer: q = −1/5, slope = 1/6 ✓**`,
        answer: String.raw`q = −0.2, slope = 1/6 ✓.` } ] },

    { id: "practice-mccabe-thiele-P11", q: 11, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mccabe-thiele-P11", label: "", marks: "", topic: "mccabe-thiele",
        sub: "Subcooled reflux: internal reflux ratio L₁/V₂", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D5*`,
        text: String.raw`A column runs with a subcooled reflux. The vapors have $H_1 = H_2 = 17\,500$ Btu/lbmol, the saturated liquid $h_1 = 3100$ Btu/lbmol and the reflux $h_0 = 1500$ Btu/lbmol. $L_0/D = 1.1$. Find the internal reflux ratio $L_1/V_2$.`,
        solution: String.raw`**Balances on stage 1** (feed of reflux $L_0$ and vapor $V_2$; products $V_1$ and $L_1$):
$$V_2 + L_0 = V_1 + L_1,\qquad V_2H_2 + L_0h_0 = V_1H_1 + L_1h_1$$
With $H_1 = H_2 = H$: $(V_2 - V_1)H = L_1h_1 - L_0h_0$ and $V_2 - V_1 = L_1 - L_0$, so
$$L_1(H - h_1) = L_0(H - h_0)\ \Rightarrow\ \frac{L_1}{L_0} = \frac{17\,500 - 1500}{17\,500 - 3100} = 1.111$$
Per mole of distillate: $L_1 = 1.111(1.1) = 1.222$, $V_2 = L_1 + D = 2.222$, so
$$\frac{L_1}{V_2} = \frac{1.222}{2.222} = 0.55$$
(compared with $L_0/V_1 = 1.1/2.1 = 0.524$ for a saturated reflux).

**Book answer: $L_1/V_2 = 0.55$ ✓**`,
        answer: String.raw`L₁/L₀ = 1.111, L₁/V₂ = 0.55 ✓.` } ] },

    { id: "practice-mccabe-thiele-P12", q: 12, section: "W", compulsory: false, stem: String.raw`Acetone–ethanol at 1 atm, CMO (acetone is more volatile). Equilibrium data (Perry):

| $x_A$ | 0.10 | 0.15 | 0.20 | 0.25 | 0.30 | 0.35 | 0.40 | 0.50 | 0.60 | 0.70 | 0.80 | 0.90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $y_A$ | 0.262 | 0.348 | 0.417 | 0.478 | 0.524 | 0.566 | 0.605 | 0.674 | 0.739 | 0.802 | 0.865 | 0.929 |`,
      parts: [
        { id: "practice-mccabe-thiele-P12a", label: "(a)", marks: "", topic: "mccabe-thiele",
        sub: "Acetone–ethanol, L/V = 0.8: liquid leaving the fifth stage", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D7a*`,
        text: String.raw`A column with a total condenser gives $x_D = 0.90$ with $L/V = 0.8$. Find the liquid composition leaving the fifth stage below the condenser.`,
        solution: String.raw`Top line: $y = 0.8x + 0.2(0.90) = 0.8x + 0.18$. Stepping down (equilibrium by monotone interpolation of the table):

| Stage | $y$ | $x$ |
|---|---|---|
| 1 | 0.900 | 0.856 |
| 2 | 0.864 | 0.799 |
| 3 | 0.819 | 0.727 |
| 4 | 0.762 | 0.636 |
| 5 | 0.689 | 0.522 |

**Book answer: $x_5 = 0.515$ ✓** (linear interpolation gives 0.521; the difference is reading accuracy).`,
        answer: String.raw`x₅ ≈ 0.52 (book 0.515 ✓).` },
        { id: "practice-mccabe-thiele-P12b", label: "(b)", marks: "", topic: "mccabe-thiele",
        sub: "Acetone–ethanol, V̄/B = 1: vapor leaving the second stage above the reboiler", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D7b*`,
        text: String.raw`A column with a partial reboiler gives $x_B = 0.13$ with $\bar{V}/B = 1.0$. Find the vapor composition leaving the second stage above the reboiler.`,
        solution: String.raw`$\bar{L}/\bar{V} = (1 + 1)/1 = 2$, bottom line $y = 2x - 0.13$, i.e. $x = (y + 0.13)/2$.

| Contact | $x$ | $y$ (equilibrium) |
|---|---|---|
| reboiler | 0.130 | 0.316 |
| 1st above | $(0.316 + 0.13)/2 = 0.223$ | 0.447 |
| 2nd above | $(0.447 + 0.13)/2 = 0.288$ | 0.514 |

**Book answer: $y_2 = 0.515$ ✓**`,
        answer: String.raw`y = 0.514 leaving the 2nd stage above the reboiler (book 0.515 ✓).` },
        { id: "practice-mccabe-thiele-P12c", label: "(c)", marks: "", topic: "mccabe-thiele",
        sub: "Acetone–ethanol: optimum feed, number of stages and the q that makes the lines meet", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D7c*`,
        text: String.raw`The same column has $x_D = 0.90$, $x_B = 0.13$, $L/V = 0.8$, $\bar{V}/B = 1.0$ and $z = 0.30$. Find the optimum feed plate, the total number of stages and the $q$ the feed must have.`,
        solution: String.raw`1. **Intersection of the two operating lines:** $0.8x + 0.18 = 2x - 0.13$ gives $x = 0.2583$, $y = 0.3867$.
2. **q:** the feed line must pass through $(z, z) = (0.30, 0.30)$ and this point: slope $= (0.3867 - 0.30)/(0.2583 - 0.30) = -2.08 = q/(q - 1)$, so
$$q = \frac{2.08}{3.08} = 0.675$$
3. **Stepping from the top** (switch to $y = 2x - 0.13$ after the step that crosses $x = 0.258$):

| Stage | $x$ | $y$ |
|---|---|---|
| 1 | 0.856 | 0.900 |
| 2 | 0.799 | 0.864 |
| 3 | 0.727 | 0.819 |
| 4 | 0.636 | 0.762 |
| 5 | 0.522 | 0.689 |
| 6 | 0.391 | 0.598 |
| 7 | 0.265 | 0.493 |
| 8 (feed) | 0.181 | 0.392 |
| 9 (reboiler) | 0.086 | 0.231 |

Last fraction $(0.181 - 0.13)/(0.181 - 0.086) = 0.54$: 8.5 contacts.

![Acetone–ethanol, L/V = 0.8, V̄/B = 1](fig/practice-mccabe-thiele-P12-sol.svg)

**Result:** 8 equilibrium stages + partial reboiler; optimum feed on stage 8 from the top (stage 7, with $x_7 = 0.265$, sits almost on the intersection, so 7 or 8 are nearly equivalent); $q = 0.675$.

**Book answer:** feed 7th or 8th from the top, 8 stages + partial reboiler ✓; $q = 0.692$ ✓ (ours is the exact intersection; the book's is read from the graph).`,
        answer: String.raw`Lines meet at (0.258, 0.387); q = 0.675 (book 0.692 ✓); 8.5 contacts → 8 stages + reboiler, feed on stage 7–8 ✓.` } ] },

    { id: "practice-mccabe-thiele-P13", q: 13, section: "W", compulsory: false, stem: String.raw`For the acetone–ethanol column of the previous problem (part c: $x_D = 0.90$, $x_B = 0.13$, $z = 0.30$, $q = 0.675$, $L/V = 0.8$), determine the following.`,
      parts: [
        { id: "practice-mccabe-thiele-P13a", label: "(a)", marks: "", topic: "advanced-distillation",
        sub: "Total reflux: minimum number of stages", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D8a*`,
        text: String.raw`How many stages are required at total reflux?`,
        solution: String.raw`At total reflux both operating lines are $y = x$. Stepping from $x_D = 0.90$ (each $y_{n+1} = x_n$): $x$ = 0.855, 0.785, 0.673, 0.498, 0.271, then 0.104 passes $x_B = 0.13$; fraction $(0.271 - 0.13)/(0.271 - 0.104) = 0.85$ → $N_{min} = 5.85$ contacts (including the partial reboiler).

![Total reflux steps and the minimum-reflux pinch](fig/practice-mccabe-thiele-P13a-sol.svg)

**Book answer: $N_{min} \approx 5.67$ ✓** (graphical; within a few tenths of a stage).`,
        answer: String.raw`N_min ≈ 5.8 equilibrium contacts (book ~5.67 ✓).` },
        { id: "practice-mccabe-thiele-P13b", label: "(b)", marks: "", topic: "advanced-distillation",
        sub: "Minimum reflux: (L/V)min and (L/D)min", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D8b*`,
        text: String.raw`What are $(L/V)_{min}$ and $(L/D)_{min}$?`,
        solution: String.raw`The curve has no inflection here, so the pinch is where the feed line ($y = 0.30 - 2.08(x - 0.30)$) meets the equilibrium curve: $x = 0.227$, $y = 0.452$. (A check of all lines from $(x_D, x_D)$ touching the curve gives the same point.)
$$\left(\frac{L}{V}\right)_{min} = \frac{x_D - y}{x_D - x} = \frac{0.90 - 0.452}{0.90 - 0.227} = 0.666,\qquad \left(\frac{L}{D}\right)_{min} = \frac{0.666}{1 - 0.666} = 2.00$$

**Book answer: $(L/D)_{min} = 1.941$ ✓** (3 % apart: the book's feed line, with $q = 0.692$, is slightly steeper and moves the pinch).`,
        answer: String.raw`(L/V)min = 0.666, (L/D)min ≈ 2.0 (book 1.941 ✓).` },
        { id: "practice-mccabe-thiele-P13c", label: "(c)", marks: "", topic: "advanced-distillation",
        sub: "Ratio of actual to minimum reflux", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D8c*`,
        text: String.raw`The $L/D$ used is how many times $(L/D)_{min}$?`,
        solution: String.raw`$L/D = 0.8/0.2 = 4.0$, so $L/D \div (L/D)_{min} = 4.0/2.00 = 2.0$.

**Book answer: 2.06 ✓**`,
        answer: String.raw`L/D = 4.0 ≈ 2.0 × (L/D)min (book 2.06 ✓).` },
        { id: "practice-mccabe-thiele-P13d", label: "(d)", marks: "", topic: "advanced-distillation",
        sub: "Murphree vapor efficiency 0.75: real stages", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D8d*`,
        text: String.raw`If $E_{MV} = 0.75$, how many real stages are needed with $L/V = 0.8$?`,
        solution: String.raw`$E_{MV} = (y_n - y_{n+1})/(y_n^* - y_{n+1})$. Each real stage moves the vapor only 75 % of the way from the operating line to the equilibrium curve, so step between the operating lines and a **pseudo-equilibrium curve** $y = y_{op} + 0.75(y^* - y_{op})$. The partial reboiler is still an equilibrium contact.

Real stages from the top ($x_n$): 0.869, 0.831, 0.787, 0.735, 0.672, 0.598, 0.511, 0.413, 0.315, 0.230 (stage 10, crosses the intersection: feed stage), 0.166. After stage 11 the vapor from the reboiler is $y = 2(0.166) - 0.13 = 0.202$, and the reboiler liquid in equilibrium with it is $x = 0.074 < x_B = 0.13$: done.

![Real-stage stepping with E_MV = 0.75](fig/practice-mccabe-thiele-P13d-sol.svg)

**Result:** 11 real stages + partial reboiler, feed on real stage 10.

**Book answer: 11 real stages + partial reboiler ✓**`,
        answer: String.raw`11 real stages + partial reboiler (feed on real stage 10) ✓.` } ] },

    { id: "practice-mccabe-thiele-P14", q: 14, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mccabe-thiele-P14", label: "", marks: "", topic: "mccabe-thiele",
        sub: "q of a subcooled pentane–hexane feed from Cp and λ", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D16* (feed of Problem 3.D6)`,
        text: String.raw`Estimate $q$ for the feed of Problem 3.D6 (40 mol% n-pentane, 60 mol% n-hexane, liquid at 30 °C, 1 atm; $C_{PL,C5} = 39.7$, $C_{PL,C6} = 51.7$ Btu/(lbmol °F); $\lambda_{C5} = 11\,369$, $\lambda_{C6} = 13\,572$ Btu/lbmol). Take the feed-stage composition equal to the feed composition.`,
        solution: String.raw`1. **Bubble point** of $x = 0.40$ at 760 mmHg (Antoine, constants as in the external-balance problem): solve $0.4P^{sat}_{C5}(T) + 0.6P^{sat}_{C6}(T) = 760$ → $T_{BP} = 51.6\ ^\circ$C.
2. **Mixture properties:** $C_{PL} = 0.4(39.7) + 0.6(51.7) = 46.9$ Btu/(lbmol °F); $\lambda = 0.4(11\,369) + 0.6(13\,572) = 12\,691$ Btu/lbmol.
3. **q** (subcooled liquid): with $\Delta T = 51.6 - 30 = 21.6$ °C = 38.9 °F,
$$q = 1 + \frac{C_{PL}(T_{BP} - T_F)}{\lambda} = 1 + \frac{46.9(38.9)}{12\,691} = 1.14,\qquad \text{slope} = \frac{1.14}{0.14} \approx 8$$

**Book answer: $q = 1.13$ ✓**`,
        answer: String.raw`T_BP ≈ 51.6 °C, q ≈ 1.14 (book 1.13 ✓).` } ] },

    { id: "practice-mccabe-thiele-P15", q: 15, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mccabe-thiele-P15", label: "", marks: "", topic: "mccabe-thiele",
        sub: "Bottoms valve shut (B = 0): distillate and reboiler compositions", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D19*`,
        text: String.raw`An acetone–ethanol column at 1 atm has the equivalent of six equilibrium stages plus a partial reboiler. The feed, 1000 kmol/h of 75 mol% acetone, is 40 % liquid and enters on the fourth stage from the top. The column has reached steady state with the bottoms valve shut, while distillate is still drawn and the reboiler still boils. $L_0/D = 2$, saturated reflux, CMO. Find the distillate composition, and predict $x_B$ for a drop of liquid taken from the reboiler. (Acetone–ethanol data as in the earlier problem.)`,
        solution: String.raw`1. **External balance:** with $B = 0$, $D = F$ and $x_D = z = 0.75$ — everything fed leaves as distillate.
2. **Flows:** $L = 2D$, $V = 3D$; $q = 0.4$: $\bar{L} = L + 0.4F = 2.4D$, $\bar{V} = V - 0.6F = 2.4D$. So $\bar{L} = \bar{V}$: the stripping section runs at **total reflux**, its operating line is $y = x$.
3. **Top line:** $y = (2/3)x + (1/3)(0.75) = 0.667x + 0.25$ for stages 1–3; below the feed stage (4) use $y = x$.
4. **Stepping from $x_D = 0.75$:**

| Contact | $y$ | $x$ |
|---|---|---|
| 1 | 0.750 | 0.617 |
| 2 | 0.661 | 0.481 |
| 3 | 0.571 | 0.356 |
| 4 (feed) | 0.487 | 0.259 |
| 5 | 0.259 | 0.099 |
| 6 | 0.099 | 0.036 |
| 7 (reboiler) | 0.036 | 0.013 |

![Acetone–ethanol with B = 0](fig/practice-mccabe-thiele-P15-sol.svg)

**Result:** $x_D = 0.75$; the reboiler liquid is $x_B \approx 0.013$ mole fraction acetone.

**Book answer: $x_D = z = 0.75$, $x_B \approx 0.01$–0.02 ✓**`,
        answer: String.raw`x_D = z = 0.75; stripping section at total reflux (L̄ = V̄); x_B ≈ 0.013 ✓ (book 0.01–0.02).` } ] },

    { id: "practice-mccabe-thiele-P16", q: 16, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mccabe-thiele-P16", label: "", marks: "", topic: "mccabe-thiele",
        sub: "Ethanol–water: L/D from a given condenser duty, q from Cp, then stages", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 4.D20*`,
        text: String.raw`A column (total condenser, partial reboiler) separates 100 kmol/h of 0.32 mole fraction ethanol in water, fed at 30 °C, at 1 kg/cm². The distillate is a saturated liquid of 80 mol% ethanol, the bottoms 4 mol% ethanol, and the condenser removes 2 065 113 kcal/h. CMO holds; $C_{PL,EtOH} = 24.65$ cal/(mol °C). Find the number of stages and the optimum feed stage (H–x data: Figure 2-4; y–x data: Figure 2-2 / Table 2-1). Watch the units.`,
        solution: String.raw`**Given:** $F = 100$ kmol/h, $z = 0.32$, 30 °C; $x_D = 0.80$, $x_B = 0.04$; $|Q_C| = 2.065\times10^6$ kcal/h.

**Assumptions:** CMO, saturated reflux, VLE of Table 2-1 (1 atm) for the 1 kg/cm² column, water $C_{PL} = 18.0$ cal/(mol °C).

1. **External balance:** $D = 100(0.32 - 0.04)/(0.80 - 0.04) = 36.84$ kmol/h, $B = 63.16$ kmol/h.
2. **Reflux from $Q_C$.** $x_D = 0.80$ mol = 0.911 wt; chart: $H_1 = 284$, $h_D = 54.5$ kcal/kg; $\bar{M}_D = 40.46$ kg/kmol, so $\lambda_D = (284 - 54.5)(40.46) = 9281$ kcal/kmol.
$$V = \frac{|Q_C|}{\lambda_D} = \frac{2\,065\,113}{9281} = 222.5\ \mathrm{kmol/h},\quad L = V - D = 185.7,\quad \frac{L}{D} = 5.04,\quad \frac{L}{V} = 0.834$$
3. **q.** Feed 0.32 mol = 0.546 wt, $\bar{M}_F = 26.99$; $\lambda_F = (430 - 67.6)(26.99) = 9782$ kcal/kmol from the chart; bubble point 81.6 °C (Table 2-1); $C_{PL} = 0.32(24.65) + 0.68(18.0) = 20.13$ cal/(mol °C):
$$q = 1 + \frac{20.13(81.6 - 30)}{9782} = 1.106,\qquad \text{slope} = 10.4$$
4. **Lines:** top $y = 0.834x + 0.133$; intersection with the feed line (0.328, 0.406); bottom line through (0.04, 0.04), slope $\bar{L}/\bar{V} = 296.3/233.1 = 1.271$.
5. **Stepping from the top:**

| Stage | $x$ | $y$ |
|---|---|---|
| 1 | 0.774 | 0.800 |
| 2 | 0.743 | 0.779 |
| 3 | 0.700 | 0.752 |
| 4 | 0.637 | 0.717 |
| 5 | 0.529 | 0.664 |
| 6 (feed) | 0.303 | 0.574 |
| 7 | 0.066 | 0.374 |
| 8 (reboiler) | 0.008 | 0.074 |

Fraction $(0.066 - 0.04)/(0.066 - 0.008) = 0.45$: 7.4 contacts.

![Ethanol–water, L/D ≈ 5, q = 1.106](fig/practice-mccabe-thiele-P16-sol.svg)

**Result:** ≈ 7.4 → 8 contacts = 7 equilibrium stages + partial reboiler, optimum feed on stage 6 (the 2nd stage above the reboiler).

**Book answer:** "feed on the first stage above the reboiler, about 8 stages + partial reboiler" ✗ by about one stage. Stage 6 lands just below the intersection ($x_6 = 0.303$ vs 0.328), so a slightly different curve near the top (Figure 2-2 read by eye, or a slightly different $L/V$) shifts the feed by one stage and the count by about one. The method and $L/D \approx 5$, $q \approx 1.1$ are the key results.`,
        answer: String.raw`D = 36.8 kmol/h, V = 222.5, L/D ≈ 5.0; q = 1.11; ≈ 7.4 contacts → 7 stages + reboiler, feed on stage 6 (book ~8 + reboiler, feed first above reboiler).` } ] },

    { id: "practice-mccabe-thiele-P17", q: 17, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mccabe-thiele-P17", label: "", marks: "15", topic: "mccabe-thiele",
        sub: "Derive q, the flow changes at the feed stage and the feed-line equation", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style derivation; slides 4B "Feed Stage" and "Feed Line" slides; Wankat 3e, Section 4.4`,
        text: String.raw`(a) From mass and energy balances around the feed stage of a binary column under CMO, show that $q = (\bar{L} - L)/F = (H - h_F)/(H - h)$, and hence $\bar{L} = L + qF$ and $\bar{V} = V - (1 - q)F$. (7)

(b) Derive the feed-line equation $y = \dfrac{q}{q-1}x - \dfrac{z}{q-1}$ and show that it passes through $y = x = z$. (5)

(c) Sketch the feed lines for the five thermal conditions of the feed and give the range of $q$ for each. (3)`,
        solution: String.raw`**(a)** Balance envelope around the feed stage $f$: in come $F$ ($h_F$), $L$ from stage $f-1$ ($h_{f-1}$) and $\bar{V}$ from stage $f+1$ ($H_{f+1}$); out go $\bar{L}$ ($h_f$) and $V$ ($H_f$).
$$F + \bar{V} + L = \bar{L} + V \qquad (1)$$
$$Fh_F + \bar{V}H_{f+1} + Lh_{f-1} = \bar{L}h_f + VH_f \qquad (2)$$
CMO: saturated enthalpies change little from stage to stage, $H_{f+1} \approx H_f = H$ and $h_{f-1} \approx h_f = h$. Then (2) becomes $Fh_F + (\bar{V} - V)H = (\bar{L} - L)h$. From (1), $\bar{V} - V = \bar{L} - L - F$:
$$Fh_F + (\bar{L} - L)H - FH = (\bar{L} - L)h\ \Rightarrow\ (\bar{L} - L)(H - h) = F(H - h_F)$$
$$q \equiv \frac{\bar{L} - L}{F} = \frac{H - h_F}{H - h}$$
so $\bar{L} = L + qF$ and, from (1), $\bar{V} = V - (1 - q)F$. $q$ is the fraction of the feed that adds to the liquid flow: energy needed to vaporize 1 mol of feed divided by the molar latent heat.

**(b)** Component balance around the feed stage: $Fz + \bar{V}y_{f+1} + Lx_{f-1} = \bar{L}x_f + Vy_f$. At the intersection of the two operating lines (the McCabe–Thiele approximation) $x_{f-1} \approx x_f = x$, $y_f \approx y_{f+1} = y$:
$$Fz + \bar{V}y + Lx = \bar{L}x + Vy$$
Substitute $\bar{L} = L + qF$, $\bar{V} = V - (1 - q)F$: $Fz - (1 - q)Fy = qFx$, i.e. $z - (1 - q)y = qx$, so
$$y = \frac{q}{q - 1}x - \frac{z}{q - 1}$$
Put $x = z$: $y = (qz - z)/(q - 1) = z$. The line passes through $(z, z)$ on the 45° line.

**(c)**

| Feed condition | $q$ | slope $q/(q-1)$ | direction from $(z, z)$ |
|---|---|---|---|
| subcooled liquid | $q > 1$ | > 1 | up and to the right |
| saturated liquid | $q = 1$ | ∞ | vertical |
| two-phase | $0 < q < 1$ | negative | up and to the left |
| saturated vapor | $q = 0$ | 0 | horizontal |
| superheated vapor | $q < 0$ | between 0 and 1 | down and to the left |

![The five feed conditions and their q-lines](fig/practice-mccabe-thiele-P17-sol.svg)

> **Exam tip:** the two-phase feed is the case where $q$ equals the liquid fraction; for any other feed compute $q$ from enthalpies (subcooled: $q = 1 + C_{PL}\Delta T/\lambda$; superheated: $q = -C_{PV}\Delta T/\lambda$).`,
        answer: String.raw`q = (L̄ − L)/F = (H − h_F)/(H − h); L̄ = L + qF, V̄ = V − (1 − q)F; feed line y = qx/(q − 1) − z/(q − 1) through (z, z); q > 1, = 1, 0–1, = 0, < 0 for subcooled, saturated liquid, two-phase, saturated vapor, superheated.` } ] },

    { id: "practice-mccabe-thiele-P18", q: 18, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mccabe-thiele-P18", label: "", marks: "25", topic: "mccabe-thiele",
        sub: "Methanol–water McCabe–Thiele with subcooled feed: lines, stages, feed, boilup ratio", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem, own numbers; methanol–water VLE of Wankat Table 2-7`,
        text: String.raw`A column with a total condenser and a partial reboiler separates 200 kmol/h of 50 mol% methanol in water at 1 atm. The feed is a subcooled liquid with $q = 1.1$. The distillate must be 97 mol% and the bottoms 2 mol% methanol; $L/D = 1.5$, saturated reflux, CMO. Equilibrium at 1 atm (mole fraction methanol):

| $x$ | 0.02 | 0.04 | 0.06 | 0.08 | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 | 0.60 | 0.70 | 0.80 | 0.90 | 0.95 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $y$ | 0.134 | 0.230 | 0.304 | 0.365 | 0.418 | 0.579 | 0.665 | 0.729 | 0.779 | 0.825 | 0.870 | 0.915 | 0.958 | 0.979 |

(a) Find $D$, $B$, $L$, $V$, $\bar{L}$ and $\bar{V}$. (6)

(b) Write the top operating line, the feed line and the bottom operating line. (6)

(c) Step off stages from the bottom; report the optimum feed stage and the total number of equilibrium stages. (10)

(d) Find the boilup ratio $\bar{V}/B$. (3)`,
        solution: String.raw`**Assumptions:** CMO, equilibrium stages, partial reboiler = one equilibrium contact, monotone interpolation of the table.

**(a)**
$$D = 200\,\frac{0.50 - 0.02}{0.97 - 0.02} = 101.05,\qquad B = 98.95\ \mathrm{kmol/h}$$
$L = 1.5D = 151.6$, $V = L + D = 252.6$; $\bar{L} = L + qF = 151.6 + 220 = 371.6$; $\bar{V} = V - (1 - q)F = 252.6 + 20 = 272.6$ kmol/h.

**(b)**
- Top: $y = \dfrac{L}{V}x + \dfrac{D}{V}x_D = 0.600x + 0.388$
- Feed: $y = \dfrac{1.1}{0.1}x - \dfrac{0.5}{0.1} = 11x - 5.0$
- Bottom: $y = \dfrac{\bar{L}}{\bar{V}}x - \dfrac{B}{\bar{V}}x_B = 1.363x - 0.00726$

All three meet at $x = 0.518$, $y = 0.699$ (check: $1.363(0.518) - 0.0073 = 0.699$ ✓).

**(c)** Bottom-up stepping: $y$ from equilibrium, $x$ from the operating line; change to the top line after the step whose $y$ passes 0.699.

| Contact (from bottom) | $x$ | $y$ |
|---|---|---|
| 1 (reboiler) | 0.020 | 0.134 |
| 2 | 0.104 | 0.426 |
| 3 | 0.318 | 0.678 |
| 4 (feed) | 0.503 | 0.780 |
| 5 | 0.654 | 0.849 |
| 6 | 0.769 | 0.901 |
| 7 | 0.855 | 0.939 |
| 8 | 0.918 | 0.966 |
| 9 | 0.963 | 0.984 |

Fraction of the last step: $(0.97 - 0.966)/(0.984 - 0.966) = 0.23$ → 8.2 contacts.

![Methanol–water: bottom-up steps, feed on contact 4](fig/practice-mccabe-thiele-P18-sol.svg)

**Result:** 8.2 → 9 contacts = 8 equilibrium stages + partial reboiler; optimum feed on the 3rd stage above the reboiler (stage 6 from the top). Stepping from the top gives 8.4 contacts with the feed on stage 6 — the same design.

**(d)** $\bar{V}/B = 272.6/98.95 = 2.76$.

> **Exam tip:** a subcooled feed increases both $\bar{L}$ and $\bar{V}$ ($\bar{V} > V$); always check that the three lines meet at one point before stepping.`,
        answer: String.raw`D = 101.1, B = 98.9, L = 151.6, V = 252.6, L̄ = 371.6, V̄ = 272.6 kmol/h; y = 0.6x + 0.388, y = 11x − 5, y = 1.363x − 0.0073; 8.2 contacts → 8 stages + reboiler, feed 3rd stage above reboiler; V̄/B = 2.76.` } ] },

    { id: "practice-mccabe-thiele-P19", q: 19, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-mccabe-thiele-P19a", label: "(a)", marks: "8", topic: "mccabe-thiele",
        sub: "Constant molal overflow: assumptions, proof idea and when it holds", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Slides 4B, "Constant Molal Overflow (CMO)"; Wankat 3e, Section 4.2`,
        text: String.raw`What is constant molal overflow? State the conditions under which it holds, explain why the energy balances then drop out of the stage-by-stage calculation, and judge whether it is reasonable for ethanol–water ($\lambda$ = 9.22 and 9.72 kcal/mol) and methanol–water ($\lambda$ = 8.43 and 9.72 kcal/mol).`,
        solution: String.raw`**CMO:** the molar liquid and vapor flows are constant within each section between feeds and draws: $L_1 = L_2 = \dots = L$, $V_1 = V_2 = \dots = V$ above the feed and $\bar{L}$, $\bar{V}$ constant below it.

**Conditions** (every mole of vapor that condenses on a stage vaporizes one mole of liquid):
1. The column is adiabatic.
2. Sensible-heat changes are small compared with latent heats (the stage temperature changes little).
3. The molar latent heat λ does not depend on composition (the most important condition). Alternatively: the saturated-liquid and saturated-vapor lines of the molar H–x diagram are parallel.

**Why the energy balance drops out:** with $H_j = H$, $h_j = h$ and constant flows, the stage energy balance $V_{j+1}H_{j+1} + L_{j-1}h_{j-1} = V_jH_j + L_jh_j$ is satisfied identically whenever the mass balance is; only the operating line and equilibrium remain (Lewis method, McCabe–Thiele).

**Judgement:**
- ethanol–water: λ differs by $(9.72 - 9.22)/9.72 = 5\ \%$ → CMO acceptable, especially because only the ratios $L/V$ enter.
- methanol–water: 13 % difference → CMO is approximate; results are usable for design estimates but stage counts can be off.
- For hydrocarbons whose λ per kg is constant, constant **mass** overflow is the better assumption.`,
        answer: String.raw`Constant molar L and V in each section; needs adiabatic column, negligible sensible heat, composition-independent molar λ; then energy balances are automatically satisfied; fine for ethanol–water (5 %), approximate for methanol–water (13 %).` },
        { id: "practice-mccabe-thiele-P19b", label: "(b)", marks: "7", topic: "mccabe-thiele",
        sub: "Optimum feed stage: what happens if the feed is too high or too low", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Slides 4B, "McCabe-Thiele Method: Determining the Number of Stages Required" (feed stages 2, 3, 5); Wankat 3e, Section 4.5`,
        text: String.raw`Explain with McCabe–Thiele sketches why the optimum feed stage is the step that crosses the intersection of the operating lines, and what happens when the feed is introduced too high or too low. Use the ethanol–propanol column ($\alpha = 2.1$, $z = 0.48$, $x_D = 0.96$, $x_B = 0.04$, $L/D = 3$, $q = 0.4$, optimum 15.7 contacts with feed on stage 8) as the example.`,
        solution: String.raw`- When stepping down, each step should use whichever operating line lies **farther from the equilibrium curve**: larger steps, fewer stages. Above the intersection that is the top line, below it the bottom line. So the switch (the feed stage) belongs at the step that straddles the intersection point.
- **Feed too high (stage 7 instead of 8):** the bottom line is used while it is still closer to the curve than the top line; the steps shrink near the intersection and 16.9 contacts are needed. Switching even earlier (stage 6 or above) is impossible here: the extended bottom line lies above the equilibrium curve and the staircase cannot pass.
- **Feed too low (stage 11):** the top line is kept below the intersection; it approaches the curve and the steps pinch, giving 16.8 contacts. Kept long enough, the staircase stalls at the point where the top line cuts the curve.

![Feed one stage too high: 16.9 contacts](fig/practice-mccabe-thiele-P19a-sol.svg)

![Feed three stages too low: 16.8 contacts](fig/practice-mccabe-thiele-P19b-sol.svg)

In an existing column the feed tray is fixed; a non-optimal feed location simply costs separation (or needs more reflux).`,
        answer: String.raw`Optimum feed = step that crosses the operating-line intersection (largest steps); too high or too low uses the line nearer the curve, adds stages (16.9 and 16.8 vs 15.7) and can pinch or become infeasible.` } ] },

    { id: "practice-mccabe-thiele-P20", q: 20, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mccabe-thiele-P20", label: "", marks: "15", topic: "mccabe-thiele",
        sub: "Bottom operating line from the boilup ratio, Lewis steps up, and a feasibility check", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem, own numbers; slides 4B "Operating Line of the Stripping Section" (V_B form) and Lewis method`,
        text: String.raw`n-Pentane–n-hexane (average $\alpha = 2.9$) is distilled in a column with a total condenser and a partial reboiler. $x_B = 0.04$ and the boilup ratio is $\bar{V}/B = 1.5$; CMO.

(a) Derive the bottom operating line in terms of $V_B = \bar{V}/B$ and $x_B$, and write it for these data. (4)

(b) By an analytical stage-by-stage calculation upward from the reboiler, find the compositions leaving the reboiler and the first three stages above it. (6)

(c) The feed is 100 kmol/h of a saturated liquid with $z = 0.45$ and the distillate must be $x_D = 0.98$. Find the reflux ratio this boilup implies and decide whether the separation is possible. (5)`,
        solution: String.raw`**(a)** Around the bottom of the column (below stage $k-1$): $\bar{V} = \bar{L} - B$ and $\bar{V}y_k = \bar{L}x_{k-1} - Bx_B$. Divide by $\bar{V}$ and use $\bar{L} = \bar{V} + B$, $V_B = \bar{V}/B$:
$$y_k = \frac{V_B + 1}{V_B}x_{k-1} - \frac{1}{V_B}x_B$$
For $V_B = 1.5$, $x_B = 0.04$: $y = 1.667x - 0.0267$, i.e. $x_{k-1} = (y_k + 0.0267)/1.667$.

**(b)** Equilibrium $y = 2.9x/(1 + 1.9x)$:

| Contact | $x$ | $y$ |
|---|---|---|
| reboiler | 0.040 | 0.108 |
| stage 1 above | $(0.108 + 0.0267)/1.667 = 0.081$ | 0.203 |
| stage 2 above | 0.138 | 0.317 |
| stage 3 above | 0.206 | 0.429 |

![Bottom-up Lewis steps](fig/practice-mccabe-thiele-P20-sol.svg)

**(c)** $D = 100(0.45 - 0.04)/(0.98 - 0.04) = 43.6$, $B = 56.4$ kmol/h; $\bar{V} = 1.5B = 84.6$; saturated-liquid feed so $V = \bar{V} = 84.6$, $L = V - D = 41.0$ and $L/D = 0.94$.

Minimum reflux (pinch at the feed line, $x = z = 0.45$): $y^* = 2.9(0.45)/(1 + 1.9(0.45)) = 0.704$,
$$\left(\frac{L}{V}\right)_{min} = \frac{0.98 - 0.704}{0.98 - 0.45} = 0.522,\qquad \left(\frac{L}{D}\right)_{min} = 1.09$$
Since $L/D = 0.94 < 1.09$, the separation is **impossible** with this boilup: the operating lines would cross the equilibrium curve. The minimum boilup is $\bar{V}/B = (1 + 1.09)(43.6)/56.4 = 1.62$; operate at, say, 1.2–1.5 times that.

> **Exam tip:** boilup and reflux are linked by the feed condition ($\bar{V} = V - (1 - q)F$); specifying one fixes the other, so always check it against the minimum.`,
        answer: String.raw`(a) y = [(V_B + 1)/V_B]x − x_B/V_B = 1.667x − 0.0267; (b) reboiler 0.040/0.108, stages above 0.081/0.203, 0.138/0.317, 0.206/0.429; (c) L/D = 0.94 < (L/D)min = 1.09 → infeasible; need V̄/B > 1.62.` } ] }
  ] });
