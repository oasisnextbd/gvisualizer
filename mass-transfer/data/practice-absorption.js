QB.paper({ year: "Practice", set: "Absorption & stripping", date: "", marks: 0, practice: true,
  rules: String.raw`Absorption and stripping: every worked example and problem in the Absorption and Stripping slides, all starred Wankat 3e Chapter 12 problems with book-answer checks, and exam-style practice problems.`,
  questions: [
    { id: "practice-absorption-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw`1000 kmol/h of air containing 100 ppm (molar) chloroform at 25 °C and 2.0 atm is to be treated by absorbing the chloroform into pure water at 25 °C. The outlet air must contain 10.0 ppm chloroform, and the column runs at $L/V = 1.4(L/V)_{min}$. The Henry's law constant for chloroform at 25 °C is $H = 211.19$ atm/mole fraction (Wankat Table 12-2).`,
      parts: [
        { id: "practice-absorption-P1a", label: "(a)", marks: "", topic: "absorption",
          sub: "Dilute absorber: (L/V)min and McCabe–Thiele stages", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides Absorption & Stripping, Example 12-1 (Wankat 3e Example 12-1)`,
          text: String.raw`Find $(L/V)_{min}$, the actual $L/V$, the outlet liquid concentration and the number of equilibrium stages by McCabe–Thiele.`,
          solution: String.raw`**Given:** $y_{N+1} = 100$ ppm, $y_1 = 10$ ppm, $x_0 = 0$, $T = 25$ °C, $p = 2.0$ atm, $V = 1000$ kmol/h.

**Assumptions:** dilute, so L and V are constant and the operating line is straight. Isothermal and isobaric; negligible heat of absorption; Henry's law holds.

1. **Equilibrium:** $y = (H/p)x = (211.19/2.0)x = 105.6x$, with x and y both in ppm.
2. **Minimum L/V:** the minimum operating line goes from $(x_0, y_1) = (0, 10)$ to the equilibrium line at $y_{N+1}$. There $x = 100/105.6 = 0.947$ ppm, so
$$\left(\frac{L}{V}\right)_{min} = \frac{y_{N+1} - y_1}{x^*_N - x_0} = \frac{100 - 10}{0.947 - 0} = 95.0$$
3. **Actual:** $L/V = 1.4(95.0) = 133$, so $L = 133\,000$ kmol/h.
4. **Outlet liquid**, from the balance $V(y_{N+1} - y_1) = L(x_N - x_0)$: $x_N = 90/133 = 0.68$ ppm.
5. **Operating line:** $y_{j+1} = (L/V)x_j + y_1 - (L/V)x_0 = 133x_j + 10$, from $(0, 10)$ to $(0.68, 100)$.
6. **Step off from the top.** Equilibrium gives $x_j = y_j/105.6$; the operating line gives $y_{j+1} = 10 + 133x_j$.

| stage | y_j (ppm) | x_j (ppm) |
|---|---|---|
| 1 | 10.00 | 0.0947 |
| 2 | 22.60 | 0.2140 |
| 3 | 38.48 | 0.3644 |
| 4 | 58.48 | 0.5538 |
| 5 | 83.68 | 0.7925 |

   $x_N = 0.676$ is passed on stage 5: fraction $= (0.676 - 0.554)/(0.7925 - 0.554) = 0.51$, so **N ≈ 4.5 equilibrium stages** (use 5).

![Dilute chloroform absorber in ppm: equilibrium y = 105.6x, operating line slope 133 from (0, 10), minimum line slope 95; 4.5 stages](fig/practice-absorption-P1-sol.svg)

**Check:** the slide and the book read 4.4 stages from the graph (fraction ≈ 0.4). My interpolated 4.5 agrees within graph accuracy ✓. (The slide's line "(110 − 10)/0.947" is a misprint for (100 − 10)/0.947 = 95.0.)

**Exam tip:** with unequal axes, compute two points on each line instead of drawing slopes by eye.`,
          answer: String.raw`y = 105.6x; (L/V)min = 95.0; L/V = 133; x_N = 0.68 ppm; N ≈ 4.5 equilibrium stages (book 4.4 graphically).` },
        { id: "practice-absorption-P1b", label: "(b)", marks: "", topic: "absorption",
          sub: "Kremser check of the McCabe–Thiele result", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides Absorption & Stripping, Example 12-1 check; Wankat 3e Problem 12.D19*`,
          text: String.raw`Use the Kremser equation to check the McCabe–Thiele calculation in part (a).`,
          solution: String.raw`The Kremser equation applies because the solution is dilute, the operating line is straight (constant L/V) and the equilibrium line is straight ($m = 105.6$, $b = 0$).

1. Absorption factor: $A = \dfrac{L}{mV} = \dfrac{133.05}{105.6} = 1.260$.
2. $y_1^* = mx_0 + b = 0$.
3. Gas-phase form:
$$N = \frac{\ln\left[\left(1 - \dfrac{1}{A}\right)\dfrac{y_{N+1} - y_1^*}{y_1 - y_1^*} + \dfrac{1}{A}\right]}{\ln A} = \frac{\ln[(1 - 0.7937)(100/10) + 0.7937]}{\ln 1.260} = \frac{\ln 2.857}{0.2311} = 4.54$$

**Check:** Kremser gives 4.5 stages, the same as McCabe–Thiele (4.5) ✓. Wankat Example 12-1 states that the Kremser check gives N = 4.5 ✓. (The answer list does not include 12.D19, so this is the reference value.)`,
          answer: String.raw`A = L/(mV) = 1.26 → N = ln[(1 − 1/A)(10) + 1/A]/ln A = 4.5, agreeing with McCabe–Thiele (book 4.5 ✓).` } ] },
    { id: "practice-absorption-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P2", label: "", marks: "", topic: "absorption",
          sub: "Concentrated CO₂ absorber in mole ratios with 1.5 L_min", type: "numerical", syllabus: "in", repeats: ["2012-13-Q1b", "2017-18-Q1c"],
          origin: "slides", ref: String.raw`Slides Absorption & Stripping, Example 15-1 (Wankat 3e Example 12-3)`,
          text: String.raw`A gas of 90 mol% N₂ and 10 mol% CO₂ is to be contacted with pure water at 5 °C and 10 atm, with cooling coils keeping the operation isothermal. 92% of the CO₂ must be absorbed, using a liquid rate of 1.5 times the minimum. How many equilibrium stages are required? Use a basis of 1 mol/h of entering gas. Henry's constant for CO₂ at 5 °C is 876 atm/mole fraction.`,
          solution: String.raw`**Given:** $y_{N+1} = 0.10$, 92% absorbed, $x_0 = 0$, $p = 10$ atm, $H = 876$ atm/mole fraction. Basis: 1 mol/h of feed gas.

**Assumptions:** N₂ insoluble (carrier $G$ constant); water nonvolatile (solvent $L$ constant); isothermal and isobaric. The feed is concentrated (10%), so use **mole ratios** $X = x/(1-x)$ and $Y = y/(1-y)$. These keep the operating line straight.

1. **Flows and end ratios:** $G = 0.9$ mol N₂/h; $Y_{N+1} = 0.1/0.9 = 0.1111$; $Y_1 = 0.08(0.1111) = 0.008889$; $X_0 = 0$.
2. **Equilibrium:** $y = (876/10)x = 87.6x$. Convert point by point to ratios (the curve in Y–X is not straight):

| x | X | y = 87.6x | Y |
|---|---|---|---|
| 0.0001 | 0.0001 | 0.00876 | 0.00884 |
| 0.0004 | 0.0004 | 0.0350 | 0.0363 |
| 0.0006 | 0.0006 | 0.0526 | 0.0555 |
| 0.0008 | 0.0008 | 0.0701 | 0.0754 |
| 0.0010 | 0.0010 | 0.0876 | 0.0960 |
| 0.0012 | 0.0012 | 0.1051 | 0.1175 |

3. **Operating line** (solute balance on solute-free flows): $Y_{j+1} = \dfrac{L}{G}X_j + Y_1 - \dfrac{L}{G}X_0$. It passes through $(X_0, Y_1) = (0, 0.008889)$.
4. **Minimum L/G:** the curve is concave upward, so the pinch is at the bottom, where $Y_{N+1} = 0.1111$ meets equilibrium. There $y = 0.10$, $x^* = 0.10/87.6 = 0.0011416$ and $X^* = 0.0011429$:
$$\left(\frac{L}{G}\right)_{min} = \frac{0.1111 - 0.008889}{0.0011429 - 0} = 89.44$$
   $L_{min} = 89.44(0.9) = 80.5$ mol water/h.
5. **Actual:** $L = 1.5L_{min} = 120.75$ mol/h, so $L/G = 134.2$. $X_N = (Y_{N+1} - Y_1)/(L/G) = 0.10222/134.2 = 0.000762$.
6. **Step off from the top** (equilibrium in ratios, then the operating line):

| stage | Y_j | X_j |
|---|---|---|
| 1 | 0.00889 | 0.000101 |
| 2 | 0.02238 | 0.000250 |
| 3 | 0.04243 | 0.000465 |
| 4 | 0.07126 | 0.000760 |

   $X_4 = 0.000760 \approx X_N = 0.000762$, so **N ≈ 4.0 equilibrium stages** (fraction of a 5th < 0.01).

![CO2–water absorber in mole ratios: curved equilibrium, operating line L/G = 134.2, minimum line L/G = 89.4, about 4 stages](fig/practice-absorption-P2-sol.svg)

**Comparison with the slide:** the slide reads $X^* = 0.001137$ from the graph, which gives $(L/G)_{min} = 89.9$, $L_{min} = 80.9$, $L = 121.4$, $(L/G) = 134.9$ and **4.13 stages**. Computing $X^*$ instead of reading it gives 89.4 and 4.0 stages. The small difference comes from reading the graph near the pinch.

**Exam tip:** in ratio units the operating line is straight, but the equilibrium curve is not. Tabulate it from the Henry's law line before plotting.`,
          answer: String.raw`Y_{N+1} = 0.1111, Y₁ = 0.00889; (L/G)min = 89.4 (L_min = 80.5 mol/h); L = 120.8 mol/h (L/G = 134.2), X_N = 7.62×10⁻⁴; N ≈ 4.0 stages (slide 4.13 from graph readings).` } ] },
    { id: "practice-absorption-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P3", label: "", marks: "", topic: "absorption",
          sub: "Countercurrent stripper in mass ratios: N, outlet gas, (L/G)max", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides Absorption & Stripping, Stripper Problem`,
          text: String.raw`Component A in a water stream is stripped into air in a countercurrent staged stripper. The inlet air is pure and flows at $G = 500$ lb/h. The inlet liquid has a mass ratio $X = 0.10$ (lb A/lb water) and contains 500 lb/h of pure water. The desired outlet mass ratio is $X = 0.005$. Water is nonvolatile and air is insoluble; equilibrium is $Y = 1.5X$ (mass ratios). Find the number of equilibrium stages, the outlet gas mass ratio and $(L/G)_{max}$.`,
          solution: String.raw`**Given:** $L = 500$ lb water/h, $G = 500$ lb air/h, so $L/G = 1.0$. $X_0 = 0.10$ (liquid in, top), $X_N = 0.005$ (liquid out, bottom), $Y_{N+1} = 0$ (air in, bottom). Equilibrium $Y = 1.5X$.

**Assumptions:** nonvolatile water and insoluble air, so the solute-free flows L and G are constant and the operating line is straight in ratio units. Isothermal.

1. **Outlet gas**, from $L(X_0 - X_N) = G(Y_1 - Y_{N+1})$: $Y_1 = 1.0(0.10 - 0.005) = 0.095$ lb A/lb air.
2. **Operating line:** $Y_{j+1} = (L/G)X_j + Y_{N+1} - (L/G)X_N = X_j - 0.005$. It joins $(X_N, Y_{N+1}) = (0.005, 0)$ and $(X_0, Y_1) = (0.10, 0.095)$. For stripping it lies **below** the equilibrium line.
3. **Maximum L/G (minimum gas):** the pinch is at the top, where the liquid enters: $Y_1^* = 1.5(0.10) = 0.15$.
$$\left(\frac{L}{G}\right)_{max} = \frac{Y_1^* - Y_{N+1}}{X_0 - X_N} = \frac{0.15 - 0}{0.10 - 0.005} = 1.58$$
   So $G_{min} = 500/1.58 = 317$ lb air/h.
4. **Stages.** Both lines are straight, so Kremser is exact. Stripping factor $S = mG/L = 1.5$ and $X_N^* = Y_{N+1}/m = 0$:
$$N = \frac{\ln\left[\left(1 - \dfrac1S\right)\dfrac{X_0 - X_N^*}{X_N - X_N^*} + \dfrac1S\right]}{\ln S} = \frac{\ln[(1/3)(0.10/0.005) + 2/3]}{\ln 1.5} = \frac{\ln 7.333}{0.4055} = 4.91$$
5. **Graphical check**, stepping from the bottom ($X_N = 0.005$):

| stage from bottom | X_j | Y_j = 1.5X_j |
|---|---|---|
| N | 0.0050 | 0.0075 |
| N−1 | 0.0125 | 0.0188 |
| N−2 | 0.0238 | 0.0356 |
| N−3 | 0.0406 | 0.0609 |
| N−4 | 0.0659 | 0.0989 |

   The next liquid, $X = 0.0659 + 0.0989 - 0.0750 = 0.1039$, passes $X_0 = 0.10$, so N ≈ 4.9.

![Stripper in mass ratios: equilibrium Y = 1.5X above the operating line of slope 1, about 4.9 stages; maximum L/G line to the pinch at the top](fig/practice-absorption-P3-sol.svg)

**Result:** N ≈ 4.9, so **5 equilibrium stages**; $Y_{out} = 0.095$; $(L/G)_{max} = 1.58$.`,
          answer: String.raw`Y_out = 0.095 lb A/lb air; (L/G)max = 1.58 (G_min ≈ 317 lb/h); N = 4.9 → 5 equilibrium stages (Kremser and stepping agree).` } ] },
    { id: "practice-absorption-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P4", label: "", marks: "", topic: "absorption",
          sub: "Comparison of absorber and stripper", type: "theory", syllabus: "in", repeats: ["2016-17-Q6c", "2017-18-Q1a", "2021-22-Q2b", "2022-23-Q2a"],
          origin: "slides", ref: String.raw`Slides Absorption & Stripping, Comparison between Absorber and Stripper`,
          text: String.raw`Compare an absorber and a stripper under these headings: principle, application, equilibrium relationship, operating equation, direction of mass transfer, relative position of the equilibrium and operating lines, and stepping off.`,
          solution: String.raw`| heading | absorber | stripper |
|---|---|---|
| principle | a gas solute dissolves into a nonvolatile liquid solvent (separating agent = solvent) | a dissolved solute is vaporized into an insoluble gas (separating agent = stripping gas or steam) |
| application | remove CO₂/H₂S from natural gas (MEA), C₄–C₅ from refinery gas into heavy oil, VOCs from air | regenerate the solvent of a gas plant, remove NH₃, VOCs or CO₂ from water |
| favourable conditions | low T, high p (high solubility, small m = H/p) | high T, low p (large m) |
| equilibrium | Henry: $y = (H/p)x = mx$, or $Y$ vs $X$ in ratios | the same relation, at the stripper's T and p |
| operating equation | $y_{j+1} = \dfrac{L}{V}x_j + \left(y_1 - \dfrac{L}{V}x_0\right)$ | the same balance; usually written from the bottom: $y_{j+1} = \dfrac{L}{V}x_j + \left(y_{N+1} - \dfrac{L}{V}x_N\right)$ |
| direction of transfer | gas → liquid | liquid → gas |
| line position | operating line **above** the equilibrium line | operating line **below** the equilibrium line |
| limiting flow | $L_{min}$: pinch at the bottom, where the gas enters | $G_{min}$ (or $(L/G)_{max}$): pinch at the top, where the liquid enters |
| stepping off | from $(x_0, y_1)$ at the top: horizontal to equilibrium, vertical to the operating line | from the top or the bottom; the steps lie between the lines with the equilibrium line above |
| Kremser factor | $A = L/(mV) > 1$ for good absorption | $S = mV/L > 1$ for good stripping |

**What decides absorber or stripper:** the position of the operating line relative to equilibrium. If $y > y^*(x)$ along the column, the solute moves into the liquid (absorption). If $y < y^*(x)$, it moves into the gas (stripping). The same pair of fluids can do either: changing T and p (through m = H/p) reverses the direction, which is how a gas plant regenerates its solvent.`,
          answer: String.raw`Absorber: gas → liquid, op line above equilibrium, L_min (bottom pinch), favoured by low T and high p. Stripper: liquid → gas, op line below equilibrium, G_min (top pinch), favoured by high T and low p.` } ] },
    { id: "practice-absorption-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P5", label: "", marks: "", topic: "absorption",
          sub: "Derivation of the Kremser equation (gas-phase form)", type: "derivation", syllabus: "in", repeats: ["2011-12-Q2a", "2015-16-Q8a"],
          origin: "slides", ref: String.raw`Slides Absorption & Stripping, Kremser equation and its derivation (Wankat 3e §12.4)`,
          text: String.raw`State the assumptions and derive the Kremser equation for a dilute countercurrent absorber with N equilibrium stages, in the gas-phase form
$$\frac{y_{N+1} - y_1}{y_1 - y_1^*} = \frac{(L/mV) - (L/mV)^{N+1}}{1 - (L/mV)}$$
including the special case $L/(mV) = 1$, and show how it is solved for N.`,
          solution: String.raw`**Assumptions:**
1. L/V (total flows) constant (dilute)
2. isothermal
3. isobaric
4. negligible heat of absorption
5. straight equilibrium line, $y_j = mx_j + b$

Stages are numbered 1 (top) to N (bottom). Liquid $L$, $x_0$ enters at the top; gas $V$, $y_{N+1}$ enters at the bottom.

![Dilute absorber: straight operating and equilibrium lines and the vertical gaps Δy_j between them at each stage](fig/practice-absorption-P5-sol.svg)

**Step 1, operating line** (balance around the top down to stage j): $y_{j+1} = \dfrac{L}{V}x_j + \left(y_1 - \dfrac{L}{V}x_0\right)$.

**Step 2, the gap at each stage.** Define $(\Delta y)_j = y_{j+1} - y_j$, the vertical distance between the operating and equilibrium lines at $x_j$. Using equilibrium, $x_j = (y_j - b)/m$:
$$(\Delta y)_j = \left(\frac{L}{mV} - 1\right)y_j + \left(y_1 - \frac{L}{mV}b - \frac{L}{V}x_0\right)$$
Write the same for stage $j+1$ and subtract:
$$(\Delta y)_{j+1} - (\Delta y)_j = \left(\frac{L}{mV} - 1\right)(y_{j+1} - y_j) = \left(\frac{L}{mV} - 1\right)(\Delta y)_j \;\Rightarrow\; (\Delta y)_{j+1} = \frac{L}{mV}(\Delta y)_j$$
So the gaps form a **geometric series** with ratio $A = L/(mV)$: $(\Delta y)_j = A^{\,j-1}(\Delta y)_1$.

**Step 3, sum over the column:**
$$(\Delta y)_1 + (\Delta y)_2 + \dots + (\Delta y)_N = y_{N+1} - y_1 \;\Rightarrow\; (\Delta y)_1(1 + A + A^2 + \dots + A^{N-1}) = y_{N+1} - y_1$$
$$\frac{y_{N+1} - y_1}{(\Delta y)_1} = \frac{1 - A^N}{1 - A}$$

**Step 4, eliminate $(\Delta y)_1$.** Apply the gap at "stage 0": $(\Delta y)_0 = y_1 - y_1^*$, with $y_1^* = mx_0 + b$ in equilibrium with the entering liquid. Then $(\Delta y)_1 = A(y_1 - y_1^*)$ and
$$\frac{y_{N+1} - y_1}{y_1 - y_1^*} = \frac{A(1 - A^N)}{1 - A} = \frac{A - A^{N+1}}{1 - A}$$
This is the required form. Adding 1 to both sides gives the equivalent form $\dfrac{y_{N+1} - y_1^*}{y_1 - y_1^*} = \dfrac{1 - A^{N+1}}{1 - A}$.

**Solving for N:**
$$N = \frac{\ln\left[\left(1 - \dfrac1A\right)\dfrac{y_{N+1} - y_1^*}{y_1 - y_1^*} + \dfrac1A\right]}{\ln A}$$

**Special case $A = 1$ (parallel lines):** all the gaps are equal, $\Delta y = y_1 - (L/V)x_0 - b$, so
$$N = \frac{y_{N+1} - y_1}{y_1 - \dfrac LV x_0 - b} = \frac{y_{N+1} - y_1}{y_1 - y_1^*}$$

**Other forms:** with $S = mV/L = 1/A$, the liquid-phase form is $\dfrac{x_N - x_0}{x_N^* - x_0} = \dfrac{1 - S^N}{1 - S^{N+1}}$, or, as on the slide, $\dfrac{x_N - x_N^*}{x_0 - x_N^*} = \dfrac{1 - S}{1 - S^{N+1}}$, with $x_N^* = (y_{N+1} - b)/m$. The same equations apply to strippers.`,
          answer: String.raw`With straight lines the stage gaps obey Δy_{j+1} = (L/mV)Δy_j; summing the geometric series and using Δy₀ = y₁ − y₁* gives (y_{N+1} − y₁)/(y₁ − y₁*) = (A − A^{N+1})/(1 − A), A = L/mV; N = (y_{N+1} − y₁)/(y₁ − y₁*) when A = 1.` } ] },
    { id: "practice-absorption-P6", q: 6, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P6", label: "", marks: "", topic: "absorption",
          sub: "Kremser for a 6-stage ammonia stripper (exit water concentration)", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides Absorption & Stripping, Example-2 (Wankat 3e Example 12-2)`,
          text: String.raw`A plate tower with six equilibrium stages strips ammonia from wastewater with countercurrent air at 1 atm and 80 °F. The inlet liquid is 0.1 mol% NH₃, the inlet air is ammonia-free, and 30 standard cubic feet of air are fed per pound of wastewater. Equilibrium: $y = 1.414x$. Calculate the ammonia concentration in the exit water.`,
          solution: String.raw`**Given:** $N = 6$, $x_0 = 0.001$, $y_{N+1} = 0$, $m = 1.414$, $b = 0$; air 30 scf/lb water.

**Assumptions:** dilute, so constant L and V; isothermal; straight equilibrium line. Kremser applies.

1. **Gas-to-liquid ratio** (1 lbmol of ideal gas = 379 scf at standard conditions):
$$\frac VL = \frac{30 \text{ scf air}}{1 \text{ lb water}} \times \frac{1 \text{ lbmol air}}{379 \text{ scf}} \times \frac{18 \text{ lb water}}{1 \text{ lbmol water}} = 1.425 \approx 1.43$$
   Only the ratio is needed, not the individual flows.
2. **Stripping factor:** $S = mV/L = 1.414 \times 1.43 = 2.022$. $x_N^* = (y_{N+1} - b)/m = 0$.
3. **Liquid-phase Kremser:**
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - S}{1 - S^{N+1}} \;\Rightarrow\; x_6 = \frac{1 - 2.022}{1 - 2.022^7}(0.001) = \frac{-1.022}{1 - 138.1}(0.001) = 7.45 \times 10^{-6}$$
4. **Outlet air**, by mass balance: $y_1 = (L/V)(x_0 - x_6) = (0.001 - 0.0000075)/1.43 = 6.9 \times 10^{-4}$.

**Check:** my result matches the slide, $x_6 = 7.45 \times 10^{-6}$ ✓. With the unrounded $V/L = 1.4248$, $S = 2.015$ and $x_6 = 7.6 \times 10^{-6}$. More than 99% of the ammonia is stripped.`,
          answer: String.raw`V/L = 1.43, S = mV/L = 2.02 → x₆ = 0.001(1 − S)/(1 − S⁷) = 7.45×10⁻⁶ (99.3% removed); y₁ ≈ 6.9×10⁻⁴.` } ] },
    { id: "practice-absorption-P7", q: 7, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P7", label: "", marks: "", topic: "absorption",
          sub: "CO₂ stripper with nitrogen and E_MV = 40%: McCabe–Thiele and Kremser", type: "numerical", syllabus: "in", repeats: ["2018-19-Q1c", "2021-22-Q2c"],
          origin: "slides", ref: String.raw`Slides Absorption & Stripping, Problem D6; Wankat 3e Problem 12.D6*`,
          text: String.raw`CO₂ is to be stripped from water by heating the water and passing it countercurrent to nitrogen in a staged stripper, isothermal and isobaric at 60 °C and 1 atm. The water contains $9.2\times10^{-6}$ mole fraction CO₂ and flows at 100,000 lb/h. Pure N₂ enters at 2500 ft³/h (measured at 1 atm and 60 °C). The outlet water must be $2\times10^{-7}$ mole fraction CO₂. Ignore N₂ solubility and water volatility. Henry's constant for CO₂ at 60 °C is 3410 atm/mole fraction. With a Murphree vapor efficiency of 40%, find the outlet vapor composition and the number of real stages.`,
          solution: String.raw`**Given:** $x_0 = 9.2\times10^{-6}$ (liquid in, top), $x_N = 2\times10^{-7}$ (out, bottom), $y_{N+1} = 0$, $E_{MV} = 0.40$, $T = 60$ °C, $p = 1$ atm.

**Assumptions:** very dilute, so constant L and V; ideal-gas N₂; Henry's law; isothermal.

1. **Gas flow:** 1 lbmol occupies 359 ft³ at 0 °C and 1 atm, so $359(333.15/273.15) = 437.9$ ft³/lbmol at 60 °C. $V = 2500/437.9 = 5.71$ lbmol/h (slide: 5.72).
2. **Liquid flow:** $L = 100\,000/18 = 5556$ lbmol/h, so $L/V = 973$ (slide: 972).
3. **Equilibrium:** $y = (H/p)x = 3410x$.
4. **Outlet gas** by mass balance: $y_1 = (L/V)(x_0 - x_N) = 973(9.2\times10^{-6} - 2\times10^{-7}) = 0.00876$.
5. **McCabe–Thiele with E_MV** (step from the bottom using a pseudo-equilibrium line):
   - real stage j gives $y_j = y_{j+1} + 0.40(3410x_j - y_{j+1})$
   - the operating line gives $x_{j-1} = x_N + (y_j - y_{N+1})/(L/V)$

| real stage from bottom | x_j (×10⁻⁶) | y_j |
|---|---|---|
| N | 0.200 | 0.00027 |
| N−1 | 0.480 | 0.00082 |
| N−2 | 1.042 | 0.00191 |
| N−3 | 2.165 | 0.00410 |
| N−4 | 4.414 | 0.00848 |

   The next liquid is $x = 8.92\times10^{-6}$, just below $x_0 = 9.2\times10^{-6}$; the 6th stage is needed for only 3% of a stage. So 5.03 real stages.

![CO2 stripper with N2: equilibrium y = 3410x, pseudo-equilibrium for E_MV = 0.4, operating line L/V = 973; about 5 real stages](fig/practice-absorption-P7-sol.svg)

6. **Kremser with Murphree efficiency** (slide form):
   - $mV/L = 3410/973 = 3.505$
   - $y_1^* = mx_0 = 3410(9.2\times10^{-6}) = 0.03137$
$$N_{actual} = -\frac{\ln\left\{\left[1 - \dfrac{mV}{L}\right]\left[\dfrac{y_{N+1} - y_1^*}{y_1 - y_1^*}\right] + \dfrac{mV}{L}\right\}}{\ln[1 + E_{MV}(mV/L - 1)]} = -\frac{\ln\{(-2.505)(1.387) + 3.505\}}{\ln[1 + 0.4(2.505)]} = -\frac{\ln 0.0302}{\ln 2.002} = 5.04$$
   (With $E_{MV} = 1$ the same data give 2.8 equilibrium stages.)

**Check:** slide and book: McCabe–Thiele 5 real stages, Kremser 5.07 real stages; in practice use **6 real stages** ✓. The argument of the logarithm (0.03) is a small difference of large numbers, so rounding L/V moves N between 5.04 and 5.07.`,
          answer: String.raw`V = 5.71 lbmol/h, L = 5556 lbmol/h, L/V = 973; y_out = 0.00876; ≈5.0 real stages (MT 5.03, Kremser 5.04–5.07) → use 6 real stages (book ✓).` } ] },
    { id: "practice-absorption-P8", q: 8, section: "S", compulsory: false,
      stem: String.raw`A gas treatment plant has an absorber that removes an obnoxious impurity A from a gas, and a stripper that regenerates the solvent using part of the treated gas, heated (stream B, 0.5 mol% A). The absorber operates at 1.5 atm and 24 °C with equilibrium $y = 0.5x$. The stripper operates at 1 atm and 92 °C with $y = 3.0x$ (mole fractions). The feed gas is 1400 mol/day with 15 mol% A in an insoluble carrier (air). The treated gas must be 0.5 mol% A. The liquid entering the absorber is 800 mol/day with 0.5 mol% A.`,
      parts: [
        { id: "practice-absorption-P8a", label: "(a)", marks: "", topic: "absorption",
          sub: "Gas-plant absorber: stages and leaving liquid (mole ratios)", type: "numerical", syllabus: "in", repeats: ["2015-16-Q6b", "2015-16-Q6c"],
          origin: "slides", ref: String.raw`Slides Absorption & Stripping, Problem D13; Wankat 3e Problem 12.D23a*`,
          text: String.raw`Calculate the number of stages in the absorber and the concentration of the liquid leaving it.`,
          solution: String.raw`**Assumptions:** carrier insoluble and solvent nonvolatile (constant G and L on a solute-free basis); isothermal. The gas is concentrated (15%), so use mole ratios.

1. **Solute-free flows:** $G = 1400(0.85) = 1190$ mol air/day; $L = 800(0.995) = 796$ mol solvent/day; $L/G = 0.669$.
2. **End ratios:** $Y_{in} = 0.15/0.85 = 0.1765$; $Y_{out} = 0.005/0.995 = 0.005025$; $X_{in} = 0.005/0.995 = 0.005025$.
3. **External balance:** $796X_{out} + 1190(0.005025) = 1190(0.1765) + 796(0.005025)$, so $X_{out} = \mathbf{0.2613}$ (mole fraction $x = 0.207$).
4. **Equilibrium in ratios:** $Y/(1+Y) = 0.5\,X/(1+X)$:

| x | X | y | Y |
|---|---|---|---|
| 0.05 | 0.0526 | 0.025 | 0.0256 |
| 0.10 | 0.1111 | 0.05 | 0.0526 |
| 0.15 | 0.1765 | 0.075 | 0.0811 |
| 0.20 | 0.25 | 0.10 | 0.1111 |

5. **Operating line:** $Y_{j+1} = 0.669X_j + (0.005025 - 0.669 \times 0.005025) = 0.669X_j + 0.00166$.
6. **Step off from the top** $(X_0, Y_1) = (0.005025, 0.005025)$:

| stage | Y_j | X_j |
|---|---|---|
| 1 | 0.0050 | 0.0101 |
| 2 | 0.0084 | 0.0170 |
| 3 | 0.0130 | 0.0264 |
| 4 | 0.0193 | 0.0394 |
| 5 | 0.0280 | 0.0576 |
| 6 | 0.0402 | 0.0838 |
| 7 | 0.0577 | 0.1225 |
| 8 | 0.0836 | 0.1825 |
| 9 | 0.1238 | 0.2825 |

   $X_{out} = 0.2613$ is reached during stage 9: fraction $= (0.2613 - 0.1825)/(0.2825 - 0.1825) = 0.79$. So **N = 8.8**, i.e. 9 equilibrium stages.

![Gas-plant absorber in mole ratios, y = 0.5x: operating line L/G = 0.669 from (0.005, 0.005) to (0.2613, 0.1765); 8.8 stages](fig/practice-absorption-P8a-sol.svg)

**Book answer:** N = 8 equilibrium stages, $X_{out} = 0.2614$. The outlet liquid matches ✓. For the stage count, careful stepping gives 8.8, i.e. 9 stages. The many small steps near the origin are easy to miss on the book's coarse graph.`,
          answer: String.raw`G = 1190, L = 796 mol/day; X_out = 0.2613 (book 0.2614 ✓); N ≈ 8.8 → 9 equilibrium stages (book quotes 8 from its graph).` },
        { id: "practice-absorption-P8b", label: "(b)", marks: "", topic: "absorption",
          sub: "Existing 4-stage stripper: stripping-gas rate by trial and error", type: "numerical", syllabus: "in", repeats: ["2015-16-Q6b", "2015-16-Q6c"],
          origin: "slides", ref: String.raw`Slides Absorption & Stripping, Problem D13; Wankat 3e Problem 12.D23b*`,
          text: String.raw`The stripper is an existing column with four equilibrium stages. Calculate the gas flow rate of stream B (0.5 mol% A) and the outlet gas concentration from the stripper.`,
          solution: String.raw`**Stripper streams:**
- Liquid in (top): $X_0 = 0.2613$, the absorber outlet. Liquid out (bottom): $X_N = 0.005025$, the absorber inlet.
- $L = 796$ mol/day.
- Gas in (bottom): $Y_{N+1} = 0.005/0.995 = 0.005025$.
- Equilibrium $y = 3.0x$, converted to ratios: $Y/(1+Y) = 3X/(1+X)$.

**Method (trial and error on G):** choose $G$, draw the operating line from $(X_N, Y_{N+1})$ with slope $L/G$, step off from the bottom, and adjust $G$ until exactly 4 stages reach $X_0$.

For the final value $G = 641$ mol carrier/day ($L/G = 1.242$):

| stage from bottom | X_j | Y_j (equilibrium) | next X from operating line |
|---|---|---|---|
| 4 (bottom) | 0.00503 | 0.0152 | 0.0132 |
| 3 | 0.0132 | 0.0408 | 0.0338 |
| 2 | 0.0338 | 0.1089 | 0.0887 |
| 1 (top) | 0.0887 | 0.3233 | 0.2613 = X₀ ✓ |

**Outlet gas:** $Y_{out} = Y_{N+1} + (L/G)(X_0 - X_N) = 0.005025 + 1.242(0.2563) = 0.323$, i.e. $y_{out} = 0.244$.

![Gas-plant stripper in mole ratios, y = 3x: operating line L/G = 1.242 gives exactly 4 stages](fig/practice-absorption-P8b-sol.svg)

(Minimum gas, for reference: pinch at the top, where $Y^*(X_0) = 1.64$, gives $G_{min} = 796(0.2563)/(1.64 - 0.005) = 125$ mol/day.)

**Book answer:** $G = 723.7$ mol carrier/day, $Y_{out} \approx 0.287$, both read from a graph that ends at Y ≈ 0.3. The stripper's equilibrium curve rises very steeply in ratio units (Y = 0.32 at X = 0.089, Y = 1.64 at X = 0.26). Stepping it numerically gives exactly 4 stages at **G = 641 mol/day** and $Y_{out} = 0.323$. With the book's G = 723.7 the column would need only about 3.4–3.5 stages. This difference is graph reading near the steep top of the curve, so trust the computed values.`,
          answer: String.raw`Trial and error for exactly 4 stages: G ≈ 641 mol carrier/day, Y_out ≈ 0.323 (y ≈ 0.24); book's graphical 723.7 mol/day and Y_out ≈ 0.287 are less accurate.` } ] },
    { id: "practice-absorption-P9", q: 9, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P9", label: "", marks: "", topic: "absorption",
          sub: "HETP of a packed stripper from laboratory data (Kremser)", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 12.D5*`,
          text: String.raw`A laboratory packed column, 0.0762 m in diameter with 3.048 m of Intalox saddles, strips solute P from n-nonane using methane. Methane is insoluble and n-C9 nonvolatile; operation is isothermal. Measured: $X_{in} = 0.40$ and $X_{out} = 0.06$ (lb P/lb n-C9); $Y_{in} = 0.02$ and $Y_{out} = 0.50$ (lb P/lb methane). Equilibrium: $Y = 1.5X$. Find the HETP.`,
          solution: String.raw`> HETP is outside the slides; the stage count is an ordinary Kremser/McCabe–Thiele stripping calculation.

1. **L/G from the balance:** $L(X_{in} - X_{out}) = G(Y_{out} - Y_{in})$, so $L/G = (0.50 - 0.02)/(0.40 - 0.06) = 1.412$.
2. Both lines are straight in ratio units. Stripping factor $S = mG/L = 1.5/1.412 = 1.0625$. $X_N^* = Y_{in}/m = 0.02/1.5 = 0.01333$.
3. **Kremser (stripping, liquid form):**
$$N = \frac{\ln\left[\left(1 - \dfrac1S\right)\dfrac{X_{in} - X_N^*}{X_{out} - X_N^*} + \dfrac1S\right]}{\ln S} = \frac{\ln[(0.05882)(0.3867/0.04667) + 0.9412]}{\ln 1.0625} = \frac{\ln 1.4286}{0.0606} = 5.88$$
   Stepping from the bottom gives the same, 5.88 stages.

![Packed stripper test: equilibrium Y = 1.5X, operating line L/G = 1.412 from (0.06, 0.02) to (0.40, 0.50); 5.9 stages](fig/practice-absorption-P9-sol.svg)

4. **HETP** $= 3.048/5.88 = 0.518$ m $= 1.70$ ft.

**Book answer: HETP = 1.7 ft ✓.** With S close to 1 the lines are nearly parallel, so many stages are needed for a modest change in X.`,
          answer: String.raw`L/G = 1.412, S = 1.0625 → N = 5.88 equilibrium stages → HETP = 3.048/5.88 = 0.52 m = 1.70 ft (book ✓).` } ] },
    { id: "practice-absorption-P10", q: 10, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P10", label: "", marks: "", topic: "absorption",
          sub: "Outlet concentrations of a 4-stage ammonia stripper (Kremser)", type: "numerical", syllabus: "in", repeats: ["2022-23-Q2c"],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 12.D10*`,
          text: String.raw`A stripping tower with four equilibrium stages removes ammonia from wastewater using air at 80 °F and 1 atm. The inlet air is pure and the inlet water contains 0.02 mole fraction NH₃. $L/V = 0.65$; equilibrium is $y = 1.414x$. Find the outlet concentrations.`,
          solution: String.raw`**Assumptions:** constant L/V, isothermal, straight equilibrium line. (At 2 mol% this is dilute enough for Kremser, as the problem intends.)

1. $S = mV/L = 1.414/0.65 = 2.175$; $x_N^* = y_{N+1}/m = 0$.
2. **Liquid-phase Kremser:**
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - S}{1 - S^{N+1}} = \frac{1 - 2.175}{1 - 2.175^5} = \frac{-1.175}{1 - 48.6} = 0.0247$$
   So $x_4 = 0.0247(0.02) = 4.93\times10^{-4}$.
3. **Outlet gas** by mass balance: $y_1 = (L/V)(x_0 - x_N) + y_{N+1} = 0.65(0.02 - 0.000493) = 0.01268$.

**Book answer: $y_{out} = 0.1267$, $x_{out} = 4.93\times10^{-4}$.** My $x_{out}$ matches ✓. The book's $y_{out}$ is missing a zero: the mass balance gives $0.01268$ (a gas leaving at 0.127 would be above equilibrium with the 0.02 inlet liquid, $y^* = 0.028$).`,
          answer: String.raw`S = 2.175 → x_out = 0.02(1 − S)/(1 − S⁵) = 4.93×10⁻⁴ (book ✓); y_out = 0.65(0.02 − 0.000493) = 0.0127 (book prints 0.1267, a decimal slip).` } ] },
    { id: "practice-absorption-P11", q: 11, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P11", label: "", marks: "", topic: "absorption",
          sub: "Back-calculating the Henry slope m from a 4-stage absorber", type: "numerical", syllabus: "in", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 12.D11*`,
          text: String.raw`A laboratory absorber has exactly four equilibrium stages and absorbs ammonia from air into pure distilled water, isothermally at 80 °F and 1 atm. $L/V = 1.2$; the inlet gas is 0.01 mole fraction NH₃ and the measured outlet gas is 0.0027. Assuming equilibrium of the form $y = mx$, calculate m and check the result.`,
          solution: String.raw`1. With $x_0 = 0$, $y_1^* = 0$, so the left side of the Kremser equation is known:
$$\frac{y_{N+1} - y_1}{y_1 - y_1^*} = \frac{0.01 - 0.0027}{0.0027} = 2.7037 = \frac{A - A^{N+1}}{1 - A} = A + A^2 + A^3 + A^4$$
2. **Solve for A** (bisection or trial): $A = 0.8493$ gives $0.8493 + 0.7213 + 0.6126 + 0.5203 = 2.7035$ ✓.
3. $m = \dfrac{L/V}{A} = \dfrac{1.2}{0.8493} = 1.413$.
4. **Check:** with $m = 1.413$, $A = 0.849$ and $N = \dfrac{\ln[(1 - 1/A)(0.01/0.0027) + 1/A]}{\ln A} = 4.00$ ✓.
5. **The trap:** the form $(A^{N+1} - A)/(A - 1)$ is 0/0 at $A = 1$, so a careless trial can "converge" on $A = 1$, i.e. $m = L/V = 1.2$. But at $A = 1$ the special case gives $N = (y_{N+1} - y_1)/(y_1 - y_1^*) = 2.70 \ne 4$. So $m = 1.2$ is not a solution.

**Book answer: m = 1.414; m = 1.2 is incorrect (L/mV = 1) ✓.**`,
          answer: String.raw`A + A² + A³ + A⁴ = 2.704 → A = 0.849 → m = 1.2/0.849 = 1.41 (book 1.414 ✓); the spurious root A = 1 (m = 1.2) fails the A = 1 special case.` } ] },
    { id: "practice-absorption-P12", q: 12, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P12", label: "", marks: "", topic: "absorption",
          sub: "Cross-flow CO₂ stripping with fresh air to each stage", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 12.D12* (uses cross-flow, Section 13.4)`,
          text: String.raw`CO₂ is stripped from a liquid solvent into air in a cross-flow cascade (lower pressure drop; the gas is vented). The inlet liquid is 20.4 wt% CO₂ at 1000 kg/h total; the outlet liquid must be 2.5 wt% CO₂. Each stage receives 25,190 kg/h of air; the last stage uses specially purified, CO₂-free air. Equilibrium (weight fractions): $y = 0.04x$. Find the number of equilibrium stages (use unequal axes).`,
          solution: String.raw`> Cross-flow cascades are taught in the immiscible-extraction deck, not in the absorption slides. The stage balance is the same.

**Stage balance** (fresh CO₂-free gas $G$ to every stage $j$; liquid flows from stage $j-1$ to $j$):
$$L(x_{j-1} - x_j) = G(y_j - 0), \qquad y_j = 0.04x_j \;\Rightarrow\; x_j = \frac{x_{j-1}}{1 + 0.04G/L}$$
Each stage's operating line runs from $(x_{j-1}, 0)$ with slope $-L/G$ to the equilibrium line. I assume all air streams are CO₂-free: no CO₂ content is given for the other stages.

**(i) Constant total liquid flow, $L = 1000$ kg/h** (the dilute McCabe–Thiele treatment the problem intends): $0.04G/L = 0.04(25\,190)/1000 = 1.0076$, so each stage divides x by 2.0076.

| stage | x_j (wt fraction) | y_j |
|---|---|---|
| 0 (feed) | 0.204 | — |
| 1 | 0.1016 | 0.00406 |
| 2 | 0.0506 | 0.00203 |
| 3 | 0.0252 | 0.00101 |
| 4 | 0.0126 | 0.00050 |

   After 3 stages $x = 0.0252$, just above 0.025, so **4 stages** are needed (about 3.01 by fraction).

![Cross-flow CO2 stripper: each stage's operating line of slope −L/G drops from the previous liquid composition to the equilibrium line y = 0.04x; x falls 0.204 → 0.102 → 0.051 → 0.0252 → 0.0126](fig/practice-absorption-P12-sol.svg)

**(ii) More exact, in solute-free weight ratios.** Solvent $= 796$ kg/h; $X_0 = 0.204/0.796 = 0.2563$; target $X = 0.025/0.975 = 0.02564$. Equilibrium is applied as $y = 0.04x$ on each stage. Then $X_1 = 0.1200$, $X_2 = 0.0545$, $X_3 = 0.0244$ (x = 0.0238), so 3 stages are just enough. Using ratios matters at 20 wt%, because the liquid flow falls by about 20% as CO₂ leaves.

**Book answer: 4 equilibrium stages ✓** (matches the constant-flow treatment, with $x_3 = 0.0252$ just failing the 0.025 target). The more exact ratio analysis shows 3 stages would barely suffice, so 4 stages give a safety margin.`,
          answer: String.raw`Constant-flow cross-flow: x = 0.204 → 0.1016 → 0.0506 → 0.0252 → 0.0126, so 4 stages (book 4 ✓); ratio units give x₃ = 0.0238 (3 stages just suffice).` } ] },
    { id: "practice-absorption-P13", q: 13, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P13", label: "", marks: "", topic: "absorption",
          sub: "Multisolute absorption of propane and n-butane into heavy oil (Kremser + DePriester)", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 12.D15*`,
          text: String.raw`Traces of propane and n-butane are to be removed from a hydrogen stream by absorption into a heavy oil (about C10, nonvolatile). The feed is 150 kmol/h of gas, 0.0017 mole fraction propane and 0.0006 n-butane; hydrogen is insoluble. The oil enters pure at 300 kmol/h. Operation is at 700 kPa and 20 °C. 98.8% of the butane must be recovered. Using DePriester K values, find the number of equilibrium stages and the compositions of the leaving gas and liquid.`,
          solution: String.raw`> Multisolute absorption is in the syllabus list, but the slides show Kremser only for one solute. DePriester K values are from the VLE deck.

**Assumptions:** very dilute, so $L = 300$ and $V = 150$ kmol/h are constant; isothermal; $y = Kx$ for each solute. The solutes are independent: each obeys its own Kremser equation with the **same N**.

1. **K values** at 20 °C and 700 kPa (DePriester chart, using the McWilliams fit, Wankat Table 2-3): $K_{C3} = 1.19$, $K_{nC4} = 0.331$.
2. **Absorption factors** ($L/V = 2$): $A_{C4} = 2/0.331 = 6.04$; $A_{C3} = 2/1.19 = 1.68$.
3. **N from the specified key (butane).** With $x_0 = 0$, the fraction not absorbed is $\dfrac{y_1}{y_{N+1}} = \dfrac{A - 1}{A^{N+1} - 1} = 0.012$, so
$$N = \frac{\ln[(1 - 1/A)(1/0.012) + 1/A]}{\ln A} = \frac{\ln[(0.8345)(83.33) + 0.1655]}{\ln 6.04} = \frac{\ln 69.70}{1.799} = 2.36$$
4. **Propane at the same N:** $\dfrac{y_1}{y_{N+1}} = \dfrac{1.68 - 1}{1.68^{3.36} - 1} = 0.145$, so only 85.5% of the propane is absorbed.
5. **Leaving gas** (V constant): $y_{1,C4} = 0.012(0.0006) = 7.2\times10^{-6}$; $y_{1,C3} = 0.145(0.0017) = 2.46\times10^{-4}$.
6. **Leaving liquid:**
   - $x_{N,C4} = 150(0.0006)(0.988)/300 = 2.96\times10^{-4}$
   - $x_{N,C3} = 150(0.0017)(0.855)/300 = 7.27\times10^{-4}$
   - the remainder is oil

**Book answer: N = 2.39, $y_{1,C4} = 7.2\times10^{-6}$, $y_{1,C3} = 2.98\times10^{-4}$.** N ✓ (2.36 vs 2.39) and the butane result ✓. The propane value is sensitive to $K_{C3}$: the book's chart reading (≈ 1.25–1.27, against 1.19 from the fit) gives 17.5% unabsorbed instead of 14.5%. Both are within DePriester reading accuracy.`,
          answer: String.raw`K_C3 ≈ 1.19, K_C4 ≈ 0.331; A_C4 = 6.04 → N = 2.36 (book 2.39 ✓); y₁,C4 = 7.2×10⁻⁶ ✓, y₁,C3 ≈ 2.5×10⁻⁴ (book 2.98×10⁻⁴, chart K); x_N,C4 = 2.96×10⁻⁴, x_N,C3 ≈ 7.3×10⁻⁴.` } ] },
    { id: "practice-absorption-P14", q: 14, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P14", label: "", marks: "", topic: "absorption",
          sub: "Required solvent rate for a 3-stage ammonia absorber (Kremser, trial)", type: "numerical", syllabus: "in", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 12.D17*`,
          text: String.raw`Ammonia is absorbed from air into water in a countercurrent column with three equilibrium stages; equilibrium is $y = 1.414x$. The entering air is 10 kmol/h with 0.0083 mole fraction NH₃; the inlet water contains 0.0002 mole fraction NH₃. The outlet gas must be 0.0005 mole fraction NH₃. Find the required liquid flow rate L.`,
          solution: String.raw`1. $y_1^* = mx_0 = 1.414(0.0002) = 0.000283$.
2. **Gas-phase Kremser:**
$$\frac{y_{N+1} - y_1}{y_1 - y_1^*} = \frac{0.0083 - 0.0005}{0.0005 - 0.000283} = 35.91 = A + A^2 + A^3$$
3. **Solve for A** (trial): $A = 2.907$ gives $2.907 + 8.451 + 24.57 = 35.93$ ✓.
4. $L = A\,mV = 2.907(1.414)(10) = 41.1$ kmol/h.
5. **Check:** $x_N = x_0 + V(y_{N+1} - y_1)/L = 0.0002 + 10(0.0078)/41.1 = 0.0021$, which is still dilute. Kremser with $L/V = 4.11$ returns N = 3.00 ✓.

**Book answer: L = 41.1 kmol/h ✓.**

Note how close the outlet gas is to $y_1^* = 0.000283$: a small inlet-liquid contamination forces a large A, because the top of the column nearly pinches.`,
          answer: String.raw`(y_{N+1} − y₁)/(y₁ − y₁*) = 35.9 = A + A² + A³ → A = 2.907 → L = A·mV = 41.1 kmol/h (book ✓).` } ] },
    { id: "practice-absorption-P15", q: 15, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P15", label: "", marks: "", topic: "other",
          sub: "Non-isothermal multicomponent absorber: one sum-rates iteration and Newton temperatures", type: "numerical", syllabus: "out", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 12.F2* (difficult)`,
          text: String.raw`An insulated absorber with three equilibrium stages operates at 1 atm. The feed gas is 10 mol/h of 60 mol% ethane and 40 mol% n-pentane at 30 °F. The solvent is pure n-octane at 70 °F, 20 mol/h. First guesses: all stages at 70 °F; $L_0 = 20.0$, $L_1 = 20.2$, $L_2 = 20.8$, $L_3 = 24.0$; $V_1 = 6.00$, $V_2 = 6.18$, $V_3 = 6.66$, $V_4 = 10.0$ mol/h. Do one iteration of the sum-rates procedure by direct substitution to get new flows. Then, with the new flows, find the stage compositions and use a multivariable Newton step on the energy balances to estimate new stage temperatures (stop there). Use DePriester K values and ideal-solution enthalpies.`,
          solution: String.raw`> Not covered in the current ChE 303 slides (rigorous multicomponent absorber, Wankat §12.7). Solved briefly.

**Data used:**
- K values at 70 °F and 1 atm (DePriester, McWilliams fit, Wankat Table 2-3): ethane 27.2, n-pentane 0.607, n-octane 0.0199.
- Enthalpies (Btu/lbmol), referenced to liquid at 0 °F and estimated from Maxwell-type data: $h = \sum x_i C_{pL,i}T$ and $H = \sum y_i(\lambda_i + C_{pV,i}T)$.
  - $C_{pL}$ = 26, 39, 60 and $C_{pV}$ = 12.6, 28, 44 Btu/(lbmol °F) for ethane, pentane, octane.
  - $\lambda$(0 °F) = 5600, 12 000, 18 900 Btu/lbmol.

### 1. Component balances at the first-guess flows (tridiagonal, stage 1 = top)
For each component, with $l_{ij} = L_jx_{ij}$ and $v_{ij} = S_{ij}l_{ij}$, $S_{ij} = K_{ij}V_j/L_j$:
$$l_{i,j-1} - (1 + S_{ij})l_{ij} + S_{i,j+1}l_{i,j+1} = -(\text{feeds})$$
The octane feed enters stage 1 and the gas feed enters stage 3.

| component | l₁ | l₂ | l₃ | v₁ (leaves top) |
|---|---|---|---|---|
| ethane | 0.645 | 0.725 | 0.787 | 5.213 |
| n-pentane | 0.100 | 0.652 | 3.982 | 0.018 |
| n-octane | 20.000 | 19.992 | 19.882 | 0.118 |

### 2. Sum rates (direct substitution)
- $L_j^{new} = \sum_i l_{ij}$: $L_1 = 20.75$, $L_2 = 21.37$, $L_3 = 24.65$.
- $V_j$ from the overall balance $V_j = L_{j-1} + V_4 - L_3$: $V_1 = 5.35$, $V_2 = 6.09$, $V_3 = 6.72$ (equal to $\sum_i v_{ij}$ ✓).

### 3. Compositions with the new flows
| stage | x ethane | x pentane | x octane | y ethane | y pentane | y octane |
|---|---|---|---|---|---|---|
| 1 | 0.036 | 0.005 | 0.960 | 0.978 | 0.003 | 0.019 |
| 2 | 0.036 | 0.030 | 0.934 | 0.964 | 0.018 | 0.018 |
| 3 | 0.033 | 0.161 | 0.806 | 0.886 | 0.098 | 0.016 |

### 4. Energy balances and Newton step
The stage balance is $E_j = L_{j-1}h_{j-1} + V_{j+1}H_{j+1} - L_jh_j - V_jH_j = 0$. At 70 °F the residuals are $E = (4.7, 6.2, 28.3)\times10^3$ Btu/h. Positive residuals mean heat is released, mainly by absorbing pentane on stage 3.

With the 3 × 3 Jacobian $\partial E_j/\partial T_k$ (from the heat capacities of the streams), one Newton step gives $\Delta T = -J^{-1}E$, i.e. new temperatures
$$T_1 = 74.3 \text{ °F (top)}, \quad T_2 = 80.7 \text{ °F}, \quad T_3 = 98.4 \text{ °F (bottom)}$$
The bottom stage is hottest because most of the pentane condenses into the oil there, and the cold feed gas enters there too.

**Book answer: T = 99.1 °F, 80.9 °F, 73.9 °F ✓.** The book lists them bottom to top; mine are 98.4, 80.7 and 74.3 °F. The agreement within 1 °F is good given the estimated enthalpies.`,
          answer: String.raw`After one sum-rates pass: L = 20.75, 21.37, 24.65; V = 5.35, 6.09, 6.72 mol/h; one Newton step gives T ≈ 74 °F (top), 81 °F, 98 °F (bottom) — book 73.9, 80.9, 99.1 °F ✓.` } ] },
    { id: "practice-absorption-P16", q: 16, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P16a", label: "(a)", marks: "15", topic: "absorption",
          sub: "Derive the Kremser equation for a stripper in liquid compositions", type: "derivation", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Slides Kremser equation in terms of liquid-phase composition`,
          text: String.raw`For a dilute countercurrent stripper with N equilibrium stages (liquid $L$, $x_0$ in at the top; gas $V$, $y_{N+1}$ in at the bottom; equilibrium $y = mx + b$), state the assumptions and derive
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - S}{1 - S^{N+1}}, \qquad S = \frac{mV}{L}, \quad x_N^* = \frac{y_{N+1} - b}{m}$$
Hence write N explicitly and give the form for $S = 1$.`,
          solution: String.raw`**Assumptions:**
1. dilute, so the total flows L and V are constant (straight operating line)
2. isothermal
3. isobaric
4. negligible heat of desorption
5. straight equilibrium line, $y = mx + b$

**Step 1, operating line** (balance from the bottom up to stage j): $Vy_{j} + Lx_N = Vy_{N+1} + Lx_{j-1}$, so
$$x_{j-1} = x_N + \frac VL(y_j - y_{N+1})$$

**Step 2, express y_j through equilibrium:** $y_j = mx_j + b$. Define liquid-side gaps $(\Delta x)_j = x_{j-1} - x_j$, the horizontal step on stage j. Then
$$(\Delta x)_j = x_N + \frac VL(mx_j + b - y_{N+1}) - x_j = (S - 1)x_j + x_N - S\,x_N^*$$
using $\dfrac VL(b - y_{N+1}) = -S x_N^*$.

**Step 3, ratio of successive gaps.** Write the same for stage $j-1$ and subtract:
$$(\Delta x)_{j-1} - (\Delta x)_j = (S - 1)(x_{j-1} - x_j) = (S - 1)(\Delta x)_j \;\Rightarrow\; (\Delta x)_{j-1} = S(\Delta x)_j$$
Going up the column, each step is S times the one below: a geometric series.

**Step 4, bottom step.** At stage N, $(\Delta x)_N = (S - 1)x_N + x_N - Sx_N^* = S(x_N - x_N^*)$. So $(\Delta x)_{N-k} = S^{k+1}(x_N - x_N^*)$.

**Step 5, sum all N steps:**
$$x_0 - x_N = \sum_{k=0}^{N-1}(\Delta x)_{N-k} = (x_N - x_N^*)(S + S^2 + \dots + S^N) = (x_N - x_N^*)\frac{S - S^{N+1}}{1 - S}$$
Add $x_N - x_N^*$ to both sides:
$$x_0 - x_N^* = (x_N - x_N^*)\frac{1 - S^{N+1}}{1 - S} \;\Rightarrow\; \frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - S}{1 - S^{N+1}}$$

**Explicit N:**
$$N = \frac{\ln\left[\left(1 - \dfrac1S\right)\dfrac{x_0 - x_N^*}{x_N - x_N^*} + \dfrac1S\right]}{\ln S}$$

**S = 1 (parallel lines):** all the steps are equal, $\Delta x = x_N - x_N^*$, so $N = \dfrac{x_0 - x_N}{x_N - x_N^*}$.

**Interpretation:** a good stripper needs $S = mV/L > 1$ (high m, i.e. high T and low p, and enough gas). As $N \to \infty$ with $S > 1$, $x_N \to x_N^*$.`,
          answer: String.raw`Horizontal steps obey Δx_{j−1} = SΔx_j with Δx_N = S(x_N − x_N*); summing gives (x_N − x_N*)/(x₀ − x_N*) = (1 − S)/(1 − S^{N+1}), N = ln[(1 − 1/S)(x₀ − x_N*)/(x_N − x_N*) + 1/S]/ln S; for S = 1, N = (x₀ − x_N)/(x_N − x_N*).` },
        { id: "practice-absorption-P16b", label: "(b)", marks: "20", topic: "absorption",
          sub: "Dilute toluene absorber: (L/V)min, Kremser and McCabe–Thiele", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style)`,
          text: String.raw`An air stream of 120 kmol/h containing 0.50 mol% toluene vapor is scrubbed with 60 kmol/h of pure, nonvolatile mineral oil in a countercurrent tray absorber at 25 °C and 1 atm. Equilibrium is $y = 0.18x$ (mole fractions). 98% of the toluene must be removed. Find (i) the outlet gas and liquid compositions, (ii) $(L/V)_{min}$ and the ratio of actual to minimum, and (iii) the number of equilibrium stages by the Kremser equation and by McCabe–Thiele. (Graph paper supplied.)`,
          solution: String.raw`**Given:** $V = 120$, $L = 60$ kmol/h, so $L/V = 0.5$. $y_{N+1} = 0.005$, $x_0 = 0$, $m = 0.18$, 98% removal.

**Assumptions:** dilute (check below), so L and V are constant; isothermal and isobaric; negligible heat of absorption; air insoluble and oil nonvolatile.

**(i) Outlet compositions:** $y_1 = 0.02(0.005) = 1.0\times10^{-4}$. Balance: $x_N = x_0 + (V/L)(y_{N+1} - y_1) = 2(0.0049) = 0.0098$. Both phases stay below 1 mol%, so the dilute assumption holds.

**(ii) Minimum L/V:** pinch at the bottom, $x_N^* = y_{N+1}/m = 0.005/0.18 = 0.02778$.
$$\left(\frac LV\right)_{min} = \frac{0.005 - 0.0001}{0.02778 - 0} = 0.176$$
   $L_{min} = 21.2$ kmol/h, and actual/minimum $= 0.5/0.176 = 2.83$.

**(iii) Kremser:** $A = L/(mV) = 0.5/0.18 = 2.78$; $y_1^* = mx_0 = 0$.
$$N = \frac{\ln[(1 - 1/A)(y_{N+1}/y_1) + 1/A]}{\ln A} = \frac{\ln[(0.64)(50) + 0.36]}{\ln 2.78} = \frac{\ln 32.36}{1.022} = 3.40$$

**McCabe–Thiele:** operating line $y = 0.5x + 0.0001$ from $(0, 0.0001)$ to $(0.0098, 0.005)$; equilibrium $y = 0.18x$.

| stage | y_j | x_j = y_j/0.18 |
|---|---|---|
| 1 | 0.000100 | 0.00056 |
| 2 | 0.000378 | 0.00210 |
| 3 | 0.001149 | 0.00639 |
| 4 | 0.003293 | 0.01829 |

   Stage 4 passes $x_N = 0.0098$: fraction $= (0.0098 - 0.00639)/(0.01829 - 0.00639) = 0.29$, so N ≈ 3.3.

![Dilute toluene absorber: equilibrium y = 0.18x, operating line slope 0.5, minimum line slope 0.176; between 3 and 4 stages](fig/practice-absorption-P16b-sol.svg)

**Answer:** 3.3–3.4 equilibrium stages, so **use 4**. The graphical fraction (linear in x) and the Kremser fraction (logarithmic) are defined differently. Both mean the 4th stage is only partly used.`,
          answer: String.raw`y₁ = 1.0×10⁻⁴, x_N = 0.0098; (L/V)min = 0.176 (L_min = 21.2 kmol/h), actual = 2.83 × min; A = 2.78 → N = 3.4 (Kremser), ≈3.3 (McCabe–Thiele) → 4 stages.` } ] },
    { id: "practice-absorption-P17", q: 17, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P17a", label: "(a)", marks: "10", topic: "absorption",
          sub: "Derive the operating line for a concentrated absorber", type: "derivation", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Slides 'If the feed is concentrated'`,
          text: String.raw`Making the necessary assumptions, derive the operating-line equation for a countercurrent absorber treating a concentrated gas. Explain why mole fractions cannot be used, and what is plotted on the McCabe–Thiele diagram.`,
          solution: String.raw`**Why not mole fractions:** with a concentrated feed, a lot of solute moves from gas to liquid. The **total** flows V and L change from stage to stage, so in $y$–$x$ coordinates the operating line $y_{j+1} = (L_j/V_{j+1})x_j + \dots$ has a varying slope and is curved.

**Assumptions:**
1. the carrier gas is insoluble, so the solute-free gas flow G (mol carrier/h) is constant
2. the solvent is nonvolatile, so the solute-free liquid flow L (mol solvent/h) is constant
3. isothermal and isobaric (energy balance satisfied; equilibrium fixed)
4. negligible heat of absorption, or the column is cooled

**Ratio units:** $Y = \dfrac{y}{1 - y}$ (mol solute per mol carrier) and $X = \dfrac{x}{1 - x}$ (mol solute per mol solvent). Solute flows are then simply $GY$ and $LX$.

**Solute balance** around the top of the column down to stage j (gas $Y_{j+1}$ enters from below, liquid $X_j$ leaves stage j):
$$GY_{j+1} + LX_0 = GY_1 + LX_j$$
$$\boxed{\;Y_{j+1} = \frac LG X_j + \left(Y_1 - \frac LG X_0\right)\;}$$
G and L are constant, so this is a **straight line** of slope $L/G$ through $(X_0, Y_1)$ and $(X_N, Y_{N+1})$.

**Diagram:** plot Y against X. Convert the equilibrium data (e.g. Henry's law $y = (H/p)x$) point by point to $Y$–$X$; the curve is no longer straight. Then step off stages between the curve and the straight operating line. $(L/G)_{min}$ comes from the operating line through $(X_0, Y_1)$ touching the equilibrium curve, usually at $Y_{N+1}$.`,
          answer: String.raw`With insoluble carrier (G constant) and nonvolatile solvent (L constant), GY_{j+1} + LX₀ = GY₁ + LX_j ⇒ Y_{j+1} = (L/G)X_j + (Y₁ − (L/G)X₀), a straight line in Y = y/(1 − y), X = x/(1 − x).` },
        { id: "practice-absorption-P17b", label: "(b)", marks: "20", topic: "absorption",
          sub: "Concentrated H₂S absorber: L_min, L and stages in mole ratios", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Henry's constant from the slides' table (Wankat Table 12-1)`,
          text: String.raw`100 kmol/h of a gas containing 8 mol% H₂S in an inert carrier is to be scrubbed with pure water at 20 °C and 25 atm in a cooled, isothermal tray absorber. 90% of the H₂S must be absorbed with a water rate 1.4 times the minimum. Henry's constant for H₂S at 20 °C is 483 atm/mole fraction. Find $L_{min}$, L, the outlet liquid composition and the number of equilibrium stages. (Graph paper supplied.)`,
          solution: String.raw`**Assumptions:** inert carrier insoluble; water nonvolatile; isothermal and isobaric. The feed is concentrated, so use ratios.

1. **Equilibrium:** $y = (483/25)x = 19.32x$. In ratios, $Y = \dfrac{19.32\,x}{1 - 19.32\,x}$ with $x = X/(1+X)$.
2. **Flows and ends:** $G = 100(0.92) = 92$ kmol carrier/h; $Y_{N+1} = 0.08/0.92 = 0.08696$; $Y_1 = 0.10(0.08696) = 0.008696$; $X_0 = 0$.
3. **Minimum L/G:** the curve is concave upward, so the pinch is at the bottom. At $Y_{N+1}$: $y = 0.08$, $x^* = 0.08/19.32 = 0.004141$ and $X^* = 0.004158$.
$$\left(\frac LG\right)_{min} = \frac{0.08696 - 0.008696}{0.004158} = 18.82 \;\Rightarrow\; L_{min} = 18.82(92) = 1732 \text{ kmol water/h}$$
4. **Actual:** $L/G = 1.4(18.82) = 26.35$, so $L = 2424$ kmol/h. $X_N = (0.08696 - 0.008696)/26.35 = 0.002970$ ($x_N = 0.00296$).
5. **Operating line:** $Y_{j+1} = 26.35X_j + 0.008696$.
6. **Step off from the top** (equilibrium: $y = Y/(1+Y)$, $x = y/19.32$, $X = x/(1-x)$):

| stage | Y_j | X_j |
|---|---|---|
| 1 | 0.00870 | 0.000446 |
| 2 | 0.02046 | 0.001039 |
| 3 | 0.03607 | 0.001805 |
| 4 | 0.05626 | 0.002765 |
| 5 | 0.08154 | 0.003918 |

   $X_N = 0.002970$ is passed on stage 5: fraction $= (0.002970 - 0.002765)/(0.003918 - 0.002765) = 0.18$, so **N ≈ 4.2**, i.e. 5 equilibrium stages.

![H2S absorber in mole ratios: curved equilibrium, operating line L/G = 26.35, minimum L/G = 18.82; 4.2 stages](fig/practice-absorption-P17b-sol.svg)`,
          answer: String.raw`G = 92 kmol/h, Y_{N+1} = 0.0870, Y₁ = 0.0087; (L/G)min = 18.8 (L_min ≈ 1730 kmol/h); L = 2424 kmol/h; X_N = 0.00297; N ≈ 4.2 → 5 stages.` },
        { id: "practice-absorption-P17c", label: "(c)", marks: "5", topic: "absorption",
          sub: "What makes a column an absorber or a stripper", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style)`,
          text: String.raw`Explain why the absorber in (b) is run cold and at high pressure, and what change of conditions would turn the same equipment into a stripper for the loaded water.`,
          solution: String.raw`- The direction of transfer depends on whether the gas is above or below equilibrium with the liquid, $y \gtrless y^* = (H/p)x$.
- **Absorber:** we want $y > y^*$ everywhere, i.e. a **small slope m = H/p**. Low T lowers H (gases are more soluble cold) and high p lowers $H/p$. The equilibrium line then lies well below the operating line, so few stages and little solvent are needed.
- **Stripper:** raising T (H rises, e.g. H₂S: 483 atm at 20 °C to 1030 at 60 °C) and lowering p make m large. The loaded liquid's $y^*$ then exceeds the gas composition, and the solute leaves the liquid. The operating line now lies **below** the equilibrium line.
- A gas plant does exactly this: a cold, high-pressure absorber, then heat exchange and a hot, low-pressure stripper with steam or stripping gas, and the lean solvent is recycled.`,
          answer: String.raw`m = H/p controls it: low T and high p give small m (y > y*, absorption); heating and depressurizing give large m (y < y*, stripping).` } ] },
    { id: "practice-absorption-P18", q: 18, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-absorption-P18a", label: "(a)", marks: "10", topic: "absorption",
          sub: "Physical vs chemical absorption and the gas treatment plant", type: "sketch", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Slides Absorption and Its Applications, Gas Treatment Plant`,
          text: String.raw`Distinguish physical and chemical absorption (with irreversible and reversible examples), and sketch a complete gas treatment plant. Why are reversible reactions usually preferred?`,
          solution: String.raw`- **Physical absorption:** the solute is removed because it is more soluble in the solvent than the other gases; there is no reaction. Example: C₄–C₅ hydrocarbons from refinery gas into heavy oil. Equilibrium follows Henry's law, and the solvent is easily regenerated by heating or depressurizing.
- **Chemical absorption:** the solute reacts with the solvent and stays in solution. The reaction raises the capacity and drives the gas concentration very low.
  - **Irreversible**, e.g. CO₂ or H₂S with NaOH. The spent liquid must be disposed of, and reagent is consumed continuously.
  - **Reversible**, e.g. CO₂ or H₂S with monoethanolamine (MEA) or other amines in water. Heating reverses the reaction, so the solvent is **regenerated** in a stripper and recycled. This is why reversible reactions are preferred: less solvent cost and less waste.

![Gas treatment plant: absorber at low T and high p, rich solvent heated in a heat exchanger and stripped at high T and low p with steam or stripping gas, lean solvent cooled and recycled](fig/practice-absorption-P18a-sol.svg)

**How the plant works:** the absorber (cold, high pressure) produces treated gas and rich solvent. The rich solvent is heated in a cross heat exchanger against the hot lean solvent, which changes the equilibrium so the solute can be stripped. In the stripper (hot, lower pressure), steam or part of the heated treated gas (stream B in Problem D13) strips the solute. The lean solvent is cooled and returned to the absorber. Typical use: CO₂/H₂S removal from natural or refinery gas with MEA, using steam as the stripping gas.`,
          answer: String.raw`Physical: solubility only (heavy oil for C₄–C₅); chemical: reaction—irreversible (NaOH, spent liquid discarded) or reversible (MEA, regenerated by heating in a stripper, preferred). Plant: cold/high-p absorber → HX → hot/low-p stripper → lean solvent recycled.` },
        { id: "practice-absorption-P18b", label: "(b)", marks: "7", topic: "absorption",
          sub: "Assumptions behind straight operating lines and Henry's law", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Slides Absorption and Stripping Equilibria, Operating Lines for Absorption`,
          text: String.raw`List the assumptions usually made for absorption and stripping equilibria and operating lines, and explain what goes wrong if the heat of absorption is large. How many degrees of freedom remain for the equilibrium of a solute, an insoluble carrier and a nonvolatile solvent once T and p are fixed?`,
          solution: String.raw`**Assumptions:**
1. carrier gas insoluble
2. solvent nonvolatile
3. isothermal and isobaric operation
4. negligible heat of absorption (with item 3, the energy balance is automatically satisfied)
5. for mole-fraction McCabe–Thiele and Kremser: dilute streams, so total L/V is constant; for concentrated streams, ratio units with solute-free L and G

**Large heat of absorption** (e.g. HCl or NH₃ into water): the liquid heats up as it moves down the column. The solubility falls (H rises with T), so the equilibrium curve moves up toward the operating line. More stages or more solvent are needed, and the column may pinch in the middle. A design that assumes isothermal operation is then unsafe, unless the column has cooling coils (as in the slide's CO₂ example) or an energy balance is solved stage by stage.

**Phase rule:** $F = C - P + 2 = 3 - 2 + 2 = 3$. Fixing T and p leaves **one** degree of freedom. So the gas composition is a single function of the liquid composition, $y = f(x)$, which is Henry's law at low concentration: $p_A = H x_A$, i.e. $y = (H/p)x$.`,
          answer: String.raw`Insoluble carrier, nonvolatile solvent, isothermal, isobaric, negligible heat of absorption (plus dilute for constant L/V). Large heat of absorption raises T and m, pushing equilibrium toward the operating line. F = 3 − 2 + 2 = 3; with T, p fixed one remains, so y = f(x) (Henry).` },
        { id: "practice-absorption-P18c", label: "(c)", marks: "18", topic: "absorption",
          sub: "Air stripper for a chlorinated solvent: G_min, equilibrium and real stages", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); H from Wankat Table 12-2`,
          text: String.raw`Groundwater (50 kmol/h) containing 8.0 ppm (molar) 1,2,3-trichloropropane is to be cleaned to 0.20 ppm in a countercurrent tray stripper using pure air at 25 °C and 1 atm. Henry's constant is 23.78 atm/mole fraction. (i) Find the minimum air rate. (ii) At twice the minimum, find the outlet air composition and the number of equilibrium stages by Kremser, and check with McCabe–Thiele. (iii) Find the number of real trays for a Murphree vapor efficiency of 50%.`,
          solution: String.raw`**Given:** $L = 50$ kmol/h, $x_0 = 8.0\times10^{-6}$, $x_N = 0.20\times10^{-6}$, $y_{N+1} = 0$, $m = 23.78/1 = 23.78$.

**Assumptions:** very dilute, so L and V are constant; isothermal; Henry's law; air insoluble and water nonvolatile.

**(i) Minimum gas:** pinch at the top, where the liquid enters: $y_1^* = mx_0 = 23.78(8.0\times10^{-6}) = 1.902\times10^{-4}$.
$$\left(\frac LV\right)_{max} = \frac{y_1^* - y_{N+1}}{x_0 - x_N} = \frac{1.902\times10^{-4}}{7.8\times10^{-6}} = 24.39 \;\Rightarrow\; V_{min} = 50/24.39 = 2.05 \text{ kmol/h}$$

**(ii) At $V = 2V_{min} = 4.10$ kmol/h:**
- $L/V = 12.19$ and $S = mV/L = 23.78/12.19 = 1.95$.
- Outlet air: $y_1 = (L/V)(x_0 - x_N) = 12.19(7.8\times10^{-6}) = 9.51\times10^{-5}$ (95 ppm).
- Kremser, liquid form, with $x_N^* = 0$:
$$N = \frac{\ln[(1 - 1/S)(x_0/x_N) + 1/S]}{\ln S} = \frac{\ln[(0.4872)(40) + 0.5128]}{\ln 1.95} = \frac{\ln 19.99}{0.6678} = 4.49$$
- McCabe–Thiele check, stepping from the bottom (x in ppm, $y = 23.78x$, $x_{j-1} = 0.20 + y_j/12.19$):

| stage from bottom | x_j (ppm) | y_j (ppm) |
|---|---|---|
| N | 0.200 | 4.76 |
| N−1 | 0.590 | 14.03 |
| N−2 | 1.351 | 32.11 |
| N−3 | 2.833 | 67.38 |
| N−4 | 5.725 | 136.2 |

  The next liquid, $x = 11.37$ ppm, passes $x_0 = 8.0$: fraction $= (8.0 - 5.725)/(11.37 - 5.725) = 0.40$, so N ≈ 4.4.

![Air stripper for trichloropropane: equilibrium y = 23.78x above the operating line L/V = 12.19; about 4.4–4.5 stages](fig/practice-absorption-P18c-sol.svg)

**(iii) Real trays** with $E_{MV} = 0.5$ (Kremser–Murphree form), using $y_1^* = 1.902\times10^{-4}$ and $mV/L = 1.95$:
$$N_{actual} = -\frac{\ln\{(1 - 1.95)[(0 - 1.902\times10^{-4})/(9.51\times10^{-5} - 1.902\times10^{-4})] + 1.95\}}{\ln[1 + 0.5(1.95 - 1)]} = -\frac{\ln[(-0.95)(2.0) + 1.95]}{\ln 1.475} = -\frac{\ln 0.05}{0.3889} = 7.7$$
So **8 real trays**.

**Exam tip:** at twice the minimum gas rate, $S = 2(1 - x_N/x_0)$, which is a quick check of your $V_{min}$.`,
          answer: String.raw`(L/V)max = 24.4 → V_min = 2.05 kmol/h; at 4.10 kmol/h: S = 1.95, y_out = 9.5×10⁻⁵, N = 4.5 (Kremser) ≈ 4.4 (MT) → 5 equilibrium stages; with E_MV = 0.5, 7.7 → 8 real trays.` } ] }
  ] });
