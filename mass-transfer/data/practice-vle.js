QB.paper({ year: "Practice", set: "Phase equilibria & VLE", date: "", marks: 0, practice: true,
  rules: String.raw`Phase rule, Raoult's law, bubble and dew points, T–x–y and P–x–y diagrams, the lever rule, relative volatility, K values and azeotropes: the derivations shown in the VLE slides, the starred Wankat chapter 2 VLE problem, and exam-style questions.`,
  questions: [
    { id: "practice-vle-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-P1", label: "", marks: "", topic: "vle",
        sub: "Gibbs phase rule: derivation and the slide examples (water, binary)", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 02 (VLE), "Gibbs Phase Rule" and "Phase Rule to Phase Diagram"`,
        text: String.raw`Derive the Gibbs phase rule $F = C - P + 2$ by counting intensive variables and equilibrium equations. Apply it to (i) pure liquid water, (ii) boiling water, (iii) water at its triple point, and (iv) a binary system with one and with two phases, at variable and at fixed pressure.`,
        solution: String.raw`**Derivation.** Consider $C$ components distributed among $P$ phases at equilibrium.

1. **Variables** (intensive only): $T$ and $p$ (2), plus the composition of each phase. Each phase has $C$ mole fractions, but $\sum x_i = 1$ fixes the last one, so $C - 1$ are independent per phase:
$$N_v = 2 + P(C - 1)$$

2. **Equations:** at equilibrium the chemical potential of every species is the same in all phases, $\mu_i^{(1)} = \mu_i^{(2)} = \cdots = \mu_i^{(P)}$. That is $P - 1$ equations per species:
$$N_e = C(P - 1)$$
(Equal $T$ and $p$ in all phases, the thermal and mechanical equilibria, are already built in by using a single $T$ and $p$.)

3. **Degrees of freedom:**
$$F = N_v - N_e = 2 + PC - P - CP + C = C - P + 2$$
$F$ is the number of intensive variables that can be fixed independently before the state is completely determined.

**Applications** (see the water phase diagram):

| system | $C$ | $P$ | $F$ | meaning |
|---|---|---|---|---|
| pure liquid water | 1 | 1 | 2 | $T$ and $p$ both free: an area on the P–T diagram |
| boiling water | 1 | 2 | 1 | fix $p$ and the boiling $T$ is fixed: a curve |
| triple point | 1 | 3 | 0 | one point (0.01 °C, 0.006 atm): nothing free |
| binary, one phase | 2 | 1 | 3 | $T$, $p$ and one mole fraction |
| binary, vapor + liquid | 2 | 2 | 2 | e.g. $T$ and $p$; then $x$ and $y$ are fixed |
| binary, V + L at fixed $p$ | 2 | 2 | 1 | choose $T$ (or $x$) and everything else follows: the T–x–y diagram |

![Phase diagram of water with the phase-rule degrees of freedom in each region, on each curve and at the triple point](fig/practice-vle-P1-sol.svg)

For a binary $F = 4 - P$; at fixed pressure $F = 3 - P$. This is why a binary flash drum at known $p$ and $T$ has fixed $x$ and $y$, whatever the feed: the feed only sets the amounts (lever rule).

**Exam tip:** say clearly that $F$ counts *intensive* variables only; flow rates such as $F$, $V$, $L$ are not in the phase rule.`,
        answer: String.raw`$F = [2 + P(C - 1)] - C(P - 1) = C - P + 2$; water: 2 (liquid), 1 (boiling), 0 (triple point); binary: $F = 4 - P$, or $3 - P$ at fixed pressure.` } ] },

    { id: "practice-vle-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-vle-P2a", label: "(a)", marks: "", topic: "vle",
          sub: "Bubble-point and dew-point formulas from Raoult's law", type: "derivation", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 02, "Raoult's Law" and "Ideal Binary VLE – Bubble Point and Dew Point"`,
          text: String.raw`For an ideal binary (1, 2) obeying Raoult's law, derive (i) the bubble-point pressure and vapor composition for a given liquid $x_1$, and (ii) the dew-point pressure and liquid composition for a given vapor $y_1$. State the assumptions of Raoult's law and when it fails.`,
          solution: String.raw`**Raoult's law** (with Dalton's law, $p_i = y_ip$):
$$y_ip = x_ip_i^{sat}(T)$$

**(i) Bubble point** (liquid known): write it for both species and add, using $y_1 + y_2 = 1$:
$$p_{bubble} = x_1p_1^{sat} + x_2p_2^{sat}, \qquad y_1 = \frac{x_1p_1^{sat}}{p_{bubble}}$$
$p_{bubble}$ is linear in $x_1$, so the bubble line on a P–x–y diagram is straight.

**(ii) Dew point** (vapor known): $x_i = y_ip/p_i^{sat}$; add, using $x_1 + x_2 = 1$:
$$\frac{1}{p_{dew}} = \frac{y_1}{p_1^{sat}} + \frac{y_2}{p_2^{sat}}, \qquad x_1 = \frac{y_1p_{dew}}{p_1^{sat}}$$
At a given pressure instead, the same sums are solved for $T$ by trial (the $p^{sat}$ depend on $T$, e.g. Antoine).

**Assumptions:**
- ideal-gas vapor (low to moderate pressure, away from the critical region);
- ideal liquid solution: 1–1, 2–2 and 1–2 interactions are alike (no preferential attraction or repulsion);
- the pure-component vapor pressure depends on $T$ only (Antoine, Clausius–Clapeyron).

**Limitations:** chemically dissimilar pairs (e.g. ethanol–water, which forms an azeotrope); high pressure and the near-critical region, where the ideal-gas assumption fails. Then $y_ip = \gamma_ix_ip_i^{sat}$ with activity coefficients, or K values from charts, are needed.`,
          answer: String.raw`$p_{bubble} = x_1p_1^{sat} + x_2p_2^{sat}$, $y_1 = x_1p_1^{sat}/p_{bubble}$; $1/p_{dew} = y_1/p_1^{sat} + y_2/p_2^{sat}$, $x_1 = y_1p_{dew}/p_1^{sat}$.` },
        { id: "practice-vle-P2b", label: "(b)", marks: "", topic: "vle",
          sub: "Lever rule on a T–x–y diagram", type: "derivation", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 02, "Lever Rule"`,
          text: String.raw`A feed of composition $z$ at fixed $T$ and $p$ inside the two-phase region splits into liquid $L$ (composition $x$) and vapor $V$ (composition $y$). Derive the lever rule and show it on a T–x–y diagram.`,
          solution: String.raw`1. Overall and component balances:
$$F = L + V, \qquad Fz = Lx + Vy$$

2. Eliminate $F$ using $F = L + V$:
$$(L + V)z = Lx + Vy \Rightarrow L(z - x) = V(y - z)$$

3. Lever rule:
$$\frac{L}{V} = \frac{y - z}{z - x}, \qquad \frac{V}{F} = \frac{z - x}{y - x}, \qquad \frac{L}{F} = \frac{y - z}{y - x}$$

On the T–x–y diagram the horizontal tie line at the given $T$ joins $x$ (bubble curve) and $y$ (dew curve). The feed point $z$ sits on it; the amount of each phase is proportional to the length of the *opposite* arm, like a lever balanced at $z$.

**Example** (benzene–toluene, 1 atm, Raoult's law): at 98 °C the tie line runs from $x = 0.313$ to $y = 0.527$. For $z = 0.40$:
$$\frac{L}{V} = \frac{0.527 - 0.40}{0.40 - 0.313} = 1.46, \qquad \frac{V}{F} = \frac{0.40 - 0.313}{0.527 - 0.313} = 0.41$$

![Benzene–toluene T–x–y diagram at 1 atm with the tie line at 98 °C and the feed point z = 0.40](fig/practice-vle-P2-sol.svg)`,
          answer: String.raw`$L(z - x) = V(y - z)$, so $L/V = (y - z)/(z - x)$ and $V/F = (z - x)/(y - x)$.` } ] },

    { id: "practice-vle-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-P3", label: "", marks: "", topic: "vle",
        sub: "Relative volatility and the equilibrium curve y = αx/(1 + (α − 1)x)", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 02, "Relative Volatility (α)" and "Equilibrium Curve from Constant α"`,
        text: String.raw`Define the K value and the relative volatility $\alpha_{AB}$. Show that $\alpha_{AB} = p_A^{sat}/p_B^{sat}$ for a Raoult's-law system, and derive the binary equilibrium curve $y_A = \alpha x_A/[1 + (\alpha - 1)x_A]$. What do $\alpha \gg 1$, $\alpha \to 1$ and $\alpha = 1$ mean for distillation?`,
        solution: String.raw`1. **K value:** $K_i = y_i/x_i$. $K > 1$: species $i$ concentrates in the vapor; $K < 1$: in the liquid. For Raoult's law $K_i = p_i^{sat}(T)/p$.

2. **Relative volatility:**
$$\alpha_{AB} = \frac{K_A}{K_B} = \frac{y_A/x_A}{y_B/x_B}$$
With Raoult's law $K_A/K_B = (p_A^{sat}/p)/(p_B^{sat}/p)$, so $\alpha_{AB} = p_A^{sat}/p_B^{sat}$, independent of composition and only weakly dependent on $T$.

3. **Equilibrium curve.** Divide $y_Ap = x_Ap_A^{sat}$ by $y_Bp = x_Bp_B^{sat}$:
$$\frac{y_A}{y_B} = \alpha_{AB}\frac{x_A}{x_B} \Rightarrow \frac{y_A}{1 - y_A} = \alpha\frac{x_A}{1 - x_A}$$
Solve for $y_A$: $y_A(1 - x_A) = \alpha x_A(1 - y_A) \Rightarrow y_A[1 - x_A + \alpha x_A] = \alpha x_A$:
$$y_A = \frac{\alpha x_A}{1 + (\alpha - 1)x_A}$$
Inverse form, useful for stepping: $x_A = y_A/[\alpha - (\alpha - 1)y_A]$.

4. **Meaning:**
- $\alpha \gg 1$: curve far above the diagonal, easy separation, few stages;
- $\alpha \to 1$: curve close to $y = x$, many stages, high reflux;
- $\alpha = 1$: $y = x$, no separation by distillation (this happens at an azeotrope).

![Family of constant-α equilibrium curves for α = 1.5, 2, 2.5, 3 and 5](fig/practice-vle-P3-sol.svg)`,
        answer: String.raw`$\alpha = K_A/K_B = p_A^{sat}/p_B^{sat}$ (Raoult); $y_A/(1 - y_A) = \alpha x_A/(1 - x_A) \Rightarrow y_A = \alpha x_A/[1 + (\alpha - 1)x_A]$; α = 1 means no separation.` } ] },

    { id: "practice-vle-P4", q: 4, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-vle-P4", label: "", marks: "", topic: "vle",
        sub: "Benzene–toluene y–x: constant α = 2.5 versus Raoult's law", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 2.F1*`,
        text: String.raw`Benzene–toluene equilibrium is often approximated by $\alpha_{BT} = 2.5$. Generate the y–x diagram for this relative volatility, generate the equilibrium data at 1 atm from Raoult's law, and compare the two (and with literature data).`,
        solution: String.raw`**Data:** Antoine equation $\log_{10}p^{sat}(\mathrm{mmHg}) = A - B/(T + C)$, $T$ in °C: benzene $A = 6.90565$, $B = 1211.033$, $C = 220.790$; toluene $A = 6.95464$, $B = 1344.8$, $C = 219.482$ (standard constants, e.g. Dean, Lange's Handbook). $p = 760$ mmHg.

1. **Constant α:** $y = 2.5x/(1 + 1.5x)$.

2. **Raoult's law:** for each $x$, solve $x p_B^{sat}(T) + (1 - x)p_T^{sat}(T) = 760$ for the bubble temperature, then $y = xp_B^{sat}/760$. The local $\alpha = p_B^{sat}/p_T^{sat}$ is also printed.

| $x$ | $T$, °C | $y$ (Raoult) | $y$ (α = 2.5) | difference | local α |
|---|---|---|---|---|---|
| 0.0 | 110.6 | 0 | 0 | 0 | 2.35 |
| 0.1 | 106.1 | 0.209 | 0.217 | +0.008 | 2.38 |
| 0.2 | 102.1 | 0.376 | 0.385 | +0.009 | 2.41 |
| 0.3 | 98.5 | 0.511 | 0.517 | +0.006 | 2.44 |
| 0.4 | 95.1 | 0.622 | 0.625 | +0.003 | 2.47 |
| 0.5 | 92.1 | 0.714 | 0.714 | +0.001 | 2.49 |
| 0.6 | 89.3 | 0.791 | 0.789 | −0.001 | 2.52 |
| 0.7 | 86.8 | 0.856 | 0.854 | −0.002 | 2.54 |
| 0.8 | 84.4 | 0.911 | 0.909 | −0.002 | 2.56 |
| 0.9 | 82.2 | 0.959 | 0.957 | −0.001 | 2.58 |
| 1.0 | 80.1 | 1 | 1 | 0 | 2.60 |

3. **Comparison:** $\alpha$ falls from 2.60 at the benzene end (80.1 °C) to 2.35 at the toluene end (110.6 °C) because the vapor-pressure ratio drops as $T$ rises. $\alpha = 2.5$ matches the middle of the range, so the two curves differ by less than 0.01 in $y$ everywhere: slightly high at low $x$, slightly low at high $x$. Pure-component boiling points from Antoine (80.1 and 110.6 °C) agree with the known normal boiling points.

4. **Literature data:** benzene–toluene is close to an ideal solution (similar aromatic molecules), so the measured 1-atm data in the sources of Wankat Table 2-2 lie very close to the Raoult curve. Both approximations are adequate for McCabe–Thiele work; constant α is the easier one for hand stepping.

![Benzene–toluene y–x diagram: constant α = 2.5 against Raoult's law with Antoine vapor pressures](fig/practice-vle-P4-sol.svg)

> Book check: the back of the book has no numerical answer for 2.F1 (the answer list gives 2.F2 instead), so the check here is the agreement of the α = 2.5 curve with Raoult's law (within 0.009 in y).`,
        answer: String.raw`Raoult's law gives α from 2.35 (110.6 °C) to 2.60 (80.1 °C); the α = 2.5 curve is within 0.009 in y of the Raoult curve at all x.` } ] },

    { id: "practice-vle-P5", q: 5, section: "F", compulsory: false,
      stem: String.raw`Benzene (1) and toluene (2) follow Raoult's law. Antoine equation: $\log_{10}p^{sat}(\mathrm{mmHg}) = A - B/(T + C)$, $T$ in °C; benzene $A = 6.90565$, $B = 1211.033$, $C = 220.790$; toluene $A = 6.95464$, $B = 1344.8$, $C = 219.482$.`,
      parts: [
        { id: "practice-vle-P5a", label: "(a)", marks: "12", topic: "vle",
          sub: "Bubble and dew pressures at 90 °C", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Own numbers; method of Slides 02 (bubble and dew point)`,
          text: String.raw`At 90 °C find (i) the bubble-point pressure and vapor composition of a liquid with $x_1 = 0.40$, and (ii) the dew-point pressure and liquid composition of a vapor with $y_1 = 0.40$. Show both on a P–x–y sketch.`,
          solution: String.raw`1. Vapor pressures at 90 °C:
$$p_1^{sat} = 10^{6.90565 - 1211.033/310.79} = 1021\ \mathrm{mmHg}, \qquad p_2^{sat} = 10^{6.95464 - 1344.8/309.482} = 406.7\ \mathrm{mmHg}$$

2. **(i) Bubble point:**
$$p_{bubble} = 0.40(1021) + 0.60(406.7) = 408.4 + 244.0 = 652.4\ \mathrm{mmHg}, \qquad y_1 = \frac{408.4}{652.4} = 0.626$$

3. **(ii) Dew point:**
$$\frac{1}{p_{dew}} = \frac{0.40}{1021} + \frac{0.60}{406.7} = 3.918\times10^{-4} + 1.4753\times10^{-3} \Rightarrow p_{dew} = 535.6\ \mathrm{mmHg}$$
$$x_1 = \frac{0.40(535.6)}{1021} = 0.210$$

![Benzene–toluene P–x–y diagram at 90 °C with the bubble-point and dew-point constructions](fig/practice-vle-P5-sol.svg)

The bubble line is straight (linear in $x_1$); the dew curve lies below it. Liquid is stable at high pressure, vapor at low pressure.`,
          answer: String.raw`$p_1^{sat} = 1021$, $p_2^{sat} = 406.7$ mmHg; bubble: p = 652 mmHg, $y_1 = 0.626$; dew: p = 536 mmHg, $x_1 = 0.210$.` },
        { id: "practice-vle-P5b", label: "(b)", marks: "13", topic: "vle",
          sub: "Bubble and dew temperatures at 1 atm by trial", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Own numbers`,
          text: String.raw`At 1 atm find the bubble temperature of a liquid with $x_1 = 0.40$ and the dew temperature of a vapor with $y_1 = 0.40$. Give the equilibrium phase compositions and the relative volatility at the bubble point.`,
          solution: String.raw`**Bubble T:** find $T$ with $x_1p_1^{sat} + x_2p_2^{sat} = 760$ mmHg.

| $T$, °C | $p_1^{sat}$ | $p_2^{sat}$ | $0.4p_1^{sat} + 0.6p_2^{sat}$ |
|---|---|---|---|
| 94 | 1144.3 | 462.1 | 735.0 |
| 95 | 1176.8 | 476.9 | 756.9 |
| 96 | 1210.1 | 492.0 | 779.2 |

Interpolating and refining: $T_{bubble} = 95.1$ °C, where $p_1^{sat} = 1181.5$, $p_2^{sat} = 479.0$ mmHg.
$$y_1 = \frac{0.40(1181.5)}{760} = 0.622, \qquad \alpha = \frac{1181.5}{479.0} = 2.47$$

**Dew T:** find $T$ with $760\left(\dfrac{0.40}{p_1^{sat}} + \dfrac{0.60}{p_2^{sat}}\right) = 1$. By the same trial: $T_{dew} = 101.5$ °C and
$$x_1 = \frac{0.40(760)}{p_1^{sat}(101.5)} = 0.216$$

So a 40% benzene mixture starts to boil at 95.1 °C and is fully vaporized at 101.5 °C; between these temperatures it is two-phase.`,
          answer: String.raw`$T_{bubble} = 95.1$ °C ($y_1 = 0.622$, α = 2.47); $T_{dew} = 101.5$ °C ($x_1 = 0.216$).` },
        { id: "practice-vle-P5c", label: "(c)", marks: "10", topic: "vle",
          sub: "Phases and amounts at 98 °C, 1 atm (lever rule)", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Own numbers`,
          text: String.raw`One kmol of a 40 mol% benzene mixture is held at 1 atm and 98 °C. Is it liquid, vapor or two-phase? Find the phase compositions and amounts.`,
          solution: String.raw`1. 98 °C lies between $T_{bubble} = 95.1$ °C and $T_{dew} = 101.5$ °C from (b), so the mixture is two-phase.

2. At 98 °C: $p_1^{sat} = 1278.8$, $p_2^{sat} = 523.4$ mmHg. With two phases at fixed $T$ and $p$ the compositions are fixed ($F = 2 - 2 + 2 = 2$, both used):
$$x_1 = \frac{760 - p_2^{sat}}{p_1^{sat} - p_2^{sat}} = \frac{236.6}{755.4} = 0.313, \qquad y_1 = \frac{x_1p_1^{sat}}{760} = 0.527$$

3. Lever rule:
$$V = \frac{z - x}{y - x} = \frac{0.40 - 0.313}{0.527 - 0.313} = 0.406\ \mathrm{kmol}, \qquad L = 0.594\ \mathrm{kmol}$$

**Check:** $0.406(0.527) + 0.594(0.313) = 0.214 + 0.186 = 0.400$ ✓

The construction is the tie line drawn in the T–x–y diagram of practice problem P2b.`,
          answer: String.raw`Two-phase: $x_1 = 0.313$, $y_1 = 0.527$; V = 0.406 kmol, L = 0.594 kmol.` } ] },

    { id: "practice-vle-P6", q: 6, section: "F", compulsory: false,
      stem: String.raw`Methanol–water at 1 atm (Wankat Table 2-7, mol% methanol):

| $x$ | 0 | 10 | 15 | 20 | 30 | 40 | 50 | 60 | 80 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|
| $y$ | 0 | 41.8 | 51.7 | 57.9 | 66.5 | 72.9 | 77.9 | 82.5 | 91.5 | 100 |
| $T$, °C | 100 | 87.7 | 84.4 | 81.7 | 78.0 | 75.3 | 73.1 | 71.2 | 67.6 | 64.5 |`,
      parts: [
        { id: "practice-vle-P6a", label: "(a)", marks: "12", topic: "vle",
          sub: "Construct and read the T–x–y diagram", type: "sketch", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Own numbers; Slides 02 (T–x–y diagram)`,
          text: String.raw`Sketch the T–x–y diagram from the data, label the bubble-point and dew-point curves and the one- and two-phase regions, and find the bubble and dew temperatures of a mixture with 35 mol% methanol.`,
          solution: String.raw`1. Plot $T$ against $x$ (bubble-point curve, saturated liquid) and $T$ against $y$ (dew-point curve, saturated vapor). Below the bubble curve: subcooled liquid. Above the dew curve: superheated vapor. Between them: two phases, with horizontal tie lines joining $x$ and $y$.

2. Bubble temperature of $z = 0.35$: on the bubble curve between $x = 0.30$ (78.0 °C) and $0.40$ (75.3 °C):
$$T_{bubble} \approx 78.0 - 0.5(2.7) = 76.6\ ^\circ\mathrm{C}$$

3. Dew temperature: on the dew curve, $y = 0.35$ between $y = 0.304$ (91.2 °C) and $0.365$ (89.3 °C) (full Table 2-7):
$$T_{dew} \approx 89.8\ ^\circ\mathrm{C}$$

![Methanol–water T–x–y diagram at 1 atm with the tie line at 82 °C for z = 0.35](fig/practice-vle-P6-sol.svg)`,
          answer: String.raw`For z = 0.35: bubble point ≈ 76.6 °C, dew point ≈ 89.8 °C; two-phase in between.` },
        { id: "practice-vle-P6b", label: "(b)", marks: "13", topic: "vle",
          sub: "Equilibrium amounts at 82 °C (tie line and lever rule)", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Own numbers`,
          text: String.raw`5 kmol of the 35 mol% methanol mixture is brought to 82 °C at 1 atm in a closed vessel. Find the compositions and amounts of the two phases. How many degrees of freedom did you use?`,
          solution: String.raw`1. Phase rule: $C = 2$, $P = 2$, so $F = 2$. Fixing $T = 82$ °C and $p = 1$ atm uses both; $x$ and $y$ are then fixed by equilibrium, independent of the overall composition.

2. Tie line at 82 °C (between the 15% point at 84.4 °C and the 20% point at 81.7 °C, linear interpolation):
$$x = 0.15 + \frac{84.4 - 82}{84.4 - 81.7}(0.05) = 0.194, \qquad y = 0.517 + 0.889(0.062) = 0.572$$

3. Lever rule:
$$\frac{V}{F} = \frac{z - x}{y - x} = \frac{0.35 - 0.194}{0.572 - 0.194} = 0.412$$
$$V = 0.412(5) = 2.06\ \mathrm{kmol}\ (y = 0.572), \qquad L = 2.94\ \mathrm{kmol}\ (x = 0.194)$$

4. **Check:** $2.06(0.572) + 2.94(0.194) = 1.18 + 0.57 = 1.75 = 5(0.35)$ ✓`,
          answer: String.raw`$x = 0.194$, $y = 0.572$; V ≈ 2.06 kmol, L ≈ 2.94 kmol; T and p use both degrees of freedom.` },
        { id: "practice-vle-P6c", label: "(c)", marks: "10", topic: "vle",
          sub: "Is there an azeotrope? Relative volatility from data", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Own question; Slides 02 (relative volatility, azeotropes)`,
          text: String.raw`From the data, calculate the relative volatility at $x$ = 0.10, 0.50 and 0.80. Does methanol–water form an azeotrope at 1 atm? Is constant α a good model for this system?`,
          solution: String.raw`$\alpha = \dfrac{y/x}{(1 - y)/(1 - x)}$:

| $x$ | $y$ | $\alpha$ |
|---|---|---|
| 0.10 | 0.418 | $\dfrac{4.18}{0.582/0.90} = 6.46$ |
| 0.50 | 0.779 | $\dfrac{1.558}{0.221/0.50} = 3.52$ |
| 0.80 | 0.915 | $\dfrac{1.144}{0.085/0.20} = 2.69$ |

- $y > x$ at every data point and $T$ falls steadily from 100 to 64.5 °C, so there is **no azeotrope** at 1 atm (unlike ethanol–water).
- $\alpha$ changes from about 6.5 to 2.7, so a single constant α is a poor model; use the data (or an average α only for rough estimates).`,
          answer: String.raw`α ≈ 6.5, 3.5, 2.7 at x = 0.1, 0.5, 0.8; no azeotrope (y > x everywhere), but α is far from constant.` } ] },

    { id: "practice-vle-P7", q: 7, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-vle-P7a", label: "(a)", marks: "15", topic: "vle",
          sub: "Minimum- and maximum-boiling azeotropes: T–x–y and y–x sketches", type: "sketch", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 02, "Azeotropes"`,
          text: String.raw`What is an azeotrope? With T–x–y and y–x sketches, compare minimum-boiling and maximum-boiling azeotropes, give one example of each, and explain why ordinary distillation cannot cross an azeotrope.`,
          solution: String.raw`An **azeotrope** is a liquid mixture that boils at constant composition: at the azeotrope $y = x$, so $K_1 = K_2 = 1$ and $\alpha_{12} = 1$.

![Minimum-boiling azeotrope: ethanol–water T–x–y at 1 atm](fig/practice-vle-P7-sol.svg)

![Maximum-boiling azeotrope: schematic T–x–y diagram](fig/practice-vle-P7-sol2.svg)

| | minimum-boiling (positive deviation) | maximum-boiling (negative deviation) |
|---|---|---|
| cause | unlike molecules repel ($\gamma > 1$) | unlike molecules attract ($\gamma < 1$) |
| T–x–y | bubble and dew curves touch at a **minimum** T | they touch at a **maximum** T |
| P–x–y (fixed T) | maximum pressure | minimum pressure |
| y–x | curve crosses the diagonal from above to below | crosses from below to above |
| example | ethanol–water, $x = 0.894$ (95.6 wt%), 78.15 °C at 1 atm | acetone–chloroform; HCl–water |
| what distillation gives | azeotrope at the top, one pure component at the bottom | pure component at the top, azeotrope at the bottom |

**Why it cannot be crossed:** at the azeotrope the vapor has the same composition as the liquid, so a stage produces no enrichment; on the y–x diagram the McCabe–Thiele staircase pinches where the equilibrium curve meets the diagonal. A feed on one side of the azeotrope can only be split into the azeotrope and the pure component on that side. Crossing it needs another method: pressure-swing distillation, an entrainer (azeotropic or extractive distillation), membranes or adsorption.`,
          answer: String.raw`Azeotrope: y = x, α = 1. Minimum-boiling (positive deviation, e.g. ethanol–water at 0.894) vs maximum-boiling (negative deviation, e.g. acetone–chloroform); stages pinch at y = x, so distillation stops at the azeotrope.` },
        { id: "practice-vle-P7b", label: "(b)", marks: "10", topic: "vle",
          sub: "Retrograde condensation on a P–T diagram", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 02, "P–T Diagram: Retrograde Condensation"`,
          text: String.raw`Sketch the P–T phase envelope of a mixture, label the bubble-point and dew-point curves, the critical point, the cricondenbar and the cricondentherm, and explain retrograde condensation. Where does it matter in practice?`,
          solution: String.raw`- For a mixture the phase envelope on P–T axes is a closed loop: the **bubble-point curve** (100% liquid) on the left/top joins the **dew-point curve** (100% vapor) at the **critical point**, where the two phases become identical. Lines of constant liquid fraction (e.g. 75%, 50%, 25% liquid) lie inside.
- **Cricondenbar:** the highest pressure at which two phases can exist. **Cricondentherm:** the highest temperature at which two phases can exist. For a mixture the critical point lies between them, not at the top or right of the envelope.
- **Retrograde condensation:** at a temperature between the critical temperature and the cricondentherm, a vertical line (constant T, falling pressure) starting in the vapor region first meets the dew-point curve and then enters the two-phase region. So reducing the pressure **condenses** liquid, the opposite of normal behavior. Further pressure reduction re-vaporizes it (the line leaves through the lower dew-point branch).
- **Where it matters:** gas-condensate reservoirs and natural-gas processing (for example the Bangladesh gas fields): when the reservoir pressure falls below the upper dew point, valuable condensate drops out in the rock and is lost; gas pipelines and separators are designed to control where liquids form.

**Exam tip:** draw the vertical constant-T arrow between the critical point and the cricondentherm and mark where liquid appears and disappears.`,
          answer: String.raw`Between T_c and the cricondentherm, lowering p at constant T crosses the dew curve into the two-phase region, so vapor condenses as p falls (gas-condensate fields).` },
        { id: "practice-vle-P7c", label: "(c)", marks: "10", topic: "vle",
          sub: "Reading an enthalpy–composition (H–x–y) diagram", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 02, "Enthalpy – Concentration (H-x-y) Diagram"; Wankat Fig. 2-4`,
          text: String.raw`Describe the features of the ethanol–water enthalpy–composition diagram at 1 kg/cm² (saturated vapor and liquid curves, isotherms, tie lines, auxiliary line). How is it used to solve an adiabatic flash, and why does the feed point lie on a tie line?`,
          solution: String.raw`- **Axes:** enthalpy (kcal/kg, reference liquid at 0 °C) against weight fraction ethanol, at one pressure.
- **Saturated vapor curve (dew line)** at the top, **saturated liquid curve (boiling line)** at the bottom. Above the dew line: superheated vapor; below the boiling line: subcooled liquid, with liquid isotherms (0, 20, …, 100 °C).
- **Tie lines** in the two-phase region join liquid and vapor in equilibrium; they are isotherms (labelled with T). The **auxiliary line** is used to draw tie lines that are not printed: go vertically from $x$ to the auxiliary line, then horizontally to the dew line to find $y$.
- **Adiabatic flash:** the balances $Fh_F = Lh_L + VH_V$ and $Fz = Lx + Vy$ mean that the points $(x, h_L)$, $(z, h_F)$ and $(y, H_V)$ lie on one straight line. Since $(x, h_L)$ and $(y, H_V)$ are in equilibrium, that line is a tie line. So: calculate $h_F$ (e.g. $C_P$ of the hot feed times $T_F - 0$), plot $(z, h_F)$, find the tie line through it; it gives $x$, $y$ and $T_{drum}$, and the lever rule gives $V/F = (z - x)/(y - x) = (h_F - h_L)/(H_V - h_L)$ in weight units (see practice flash P7).`,
          answer: String.raw`Dew and boiling curves, liquid isotherms, isothermal tie lines and the auxiliary line; the feed point (z, h_F) lies on the drum's tie line because the mass and energy balances are both lever rules.` } ] },

    { id: "practice-vle-P8", q: 8, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-vle-P8a", label: "(a)", marks: "20", topic: "vle",
          sub: "Multicomponent bubble and dew temperatures with DePriester K values", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Own numbers; K values from the DePriester chart (fit, Wankat Eq. 2-30)`,
          text: String.raw`A mixture of 20 mol% propane, 50 mol% n-butane and 30 mol% n-hexane is at 400 kPa. Using DePriester K values, find (i) its bubble-point temperature and the first vapor formed, and (ii) its dew-point temperature and the first liquid formed. K values at 400 kPa:

| T, °C | 30 | 35 | 40 | 70 | 75 | 80 |
|---|---|---|---|---|---|---|
| $K_{C3}$ | 2.42 | 2.69 | 2.97 | 4.95 | 5.32 | 5.70 |
| $K_{nC4}$ | 0.765 | 0.879 | 1.003 | 1.967 | 2.165 | 2.373 |
| $K_{nC6}$ | 0.087 | 0.105 | 0.126 | 0.323 | 0.368 | 0.418 |`,
          solution: String.raw`**Assumptions:** K values independent of composition (light hydrocarbons, DePriester).

**(i) Bubble point:** find $T$ with $\sum K_iz_i = 1$.

| $T$, °C | $\sum K_iz_i$ |
|---|---|
| 30 | $0.2(2.42) + 0.5(0.765) + 0.3(0.087) = 0.893$ |
| 35 | $0.2(2.69) + 0.5(0.879) + 0.3(0.105) = 1.008$ |
| 40 | 1.133 |

Interpolating between 30 and 35 °C: $T_{bubble} = 30 + 5(1 - 0.893)/(1.008 - 0.893) = 34.7$ °C. There $K$ = 2.668, 0.871, 0.104 and the first bubble of vapor is
$$y_i = K_iz_i = 0.534\ (\mathrm{C_3}),\ 0.435\ (\mathrm{nC_4}),\ 0.031\ (\mathrm{nC_6}) \quad (\textstyle\sum = 1.000)$$

**(ii) Dew point:** find $T$ with $\sum z_i/K_i = 1$.

| $T$, °C | $\sum z_i/K_i$ |
|---|---|
| 70 | 1.225 |
| 75 | $0.2/5.32 + 0.5/2.165 + 0.3/0.368 = 1.083$ |
| 80 | $0.2/5.70 + 0.5/2.373 + 0.3/0.418 = 0.963$ |

Interpolating: $T_{dew} = 75 + 5(1.083 - 1)/(1.083 - 0.963) = 78.4$ °C. There $K$ = 5.58, 2.30, 0.402 and the first drop of liquid is
$$x_i = z_i/K_i = 0.036\ (\mathrm{C_3}),\ 0.217\ (\mathrm{nC_4}),\ 0.747\ (\mathrm{nC_6})$$

Between 34.7 and 78.4 °C the mixture is two-phase at 400 kPa; a flash drum at this pressure must run in that range.

**Exam tip:** use $\sum K_iz_i$ for the bubble point and $\sum z_i/K_i$ for the dew point; interpolate on the sum (or on $\ln K$ of a reference component) to choose the next temperature.`,
          answer: String.raw`$T_{bubble} \approx 34.7$ °C, first vapor y = 0.534/0.435/0.031; $T_{dew} \approx 78.4$ °C, first liquid x = 0.036/0.217/0.747 (C₃/nC₄/nC₆).` },
        { id: "practice-vle-P8b", label: "(b)", marks: "15", topic: "vle",
          sub: "How K values change with T, p, composition and molecular weight", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 02 (K values, DePriester chart); Wankat Problem 2.A8 style`,
          text: String.raw`For light hydrocarbons, how does the K value change when (i) temperature rises, (ii) pressure rises, (iii) the liquid mole fraction changes, and (iv) molecular weight increases in a homologous series? Use the bubble-point result of (a) to compute $\alpha_{C3/C6}$ and $\alpha_{C4/C6}$ and comment.`,
          solution: String.raw`- **(i) Temperature up:** K increases (vapor pressure rises), e.g. $K_{C3}$ at 400 kPa goes from 2.42 at 30 °C to 5.70 at 80 °C.
- **(ii) Pressure up:** K decreases, roughly as $1/p$ (Raoult: $K = p^{sat}/p$).
- **(iii) Composition:** for ideal hydrocarbon mixtures K is (approximately) independent of composition; this is the DePriester assumption. For nonideal systems it is not.
- **(iv) Heavier member of a series:** lower vapor pressure, so smaller K (methane > ethane > … > n-decane on the chart).
- **Relative volatilities at 34.7 °C, 400 kPa:** $\alpha_{C3/C6} = 2.668/0.104 = 25.7$ and $\alpha_{C4/C6} = 0.871/0.104 = 8.4$. Hexane is far less volatile than the others, so a single flash already removes most of it in the liquid; separating propane from n-butane ($\alpha = 3.1$) would need a column.
- A component with $K = 1$ at the drum conditions would split evenly; the pure-component boiling point at a pressure is where its $K = 1$.`,
          answer: String.raw`K rises with T, falls with p, is roughly composition-independent for hydrocarbons, and falls with molecular weight; α(C₃/C₆) ≈ 26, α(C₄/C₆) ≈ 8.4 at the bubble point.` } ] }
  ] });
