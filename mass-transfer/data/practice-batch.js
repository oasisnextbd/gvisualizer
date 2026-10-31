QB.paper({ year: "Practice", set: "Batch distillation", date: "", marks: 0, practice: true,
  rules: String.raw`Simple (Rayleigh) and multistage batch distillation at constant and variable reflux, operating time and steam distillation: every worked problem from the batch distillation slides, the starred Wankat 3e chapter 9 problems, and exam-style practice problems.`,
  questions: [
    { id: "practice-batch-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-batch-P1a", label: "", marks: "", topic: "batch",
        sub: "Simple Rayleigh distillation with a specified average distillate (trial and error)", type: "numerical", syllabus: "in", repeats: ["2017-18-Q8a"],
        origin: "slides", ref: String.raw`Batch distillation slides, pp. 8–9 (Example 11-1); Wankat 3e, Example 9-1`,
        text: String.raw`A simple batch still (one equilibrium stage) separates methanol from water at 1 atm. The charge is 50 mol of 80 mol% methanol. We want an average distillate of 89.2 mol% methanol. Find the amount of distillate, the amount left in the still pot, and the final still-pot composition. Use the methanol–water VLE table (Wankat Table 2-7, slides Table 3-3).`,
        solution: String.raw`**Given:** F = 50 mol, $x_F = 0.80$, $x_{D,avg} = 0.892$.

**Find:** $x_{W,final}$, $W_{final}$, $D_{total}$.

**Assumptions:** the still pot is one equilibrium stage, so the vapor (the distillate) is $y^*(x_W)$. Holdup in the condenser and receiver is negligible.

**Equations:**
$$\ln\frac{W_{final}}{F} = -\int_{x_{W,final}}^{x_F}\frac{dx}{y^* - x}, \qquad x_{D,avg} = \frac{Fx_F - W_{final}x_{W,final}}{F - W_{final}}$$

Because $x_{W,final}$ is unknown, guess it, integrate, compute $x_{D,avg}$, and repeat.

1. **Integrand table** (equilibrium values used in the slides):

| x | 0.80 | 0.75 | 0.70 | 0.65 | 0.60 | 0.50 |
|---|---|---|---|---|---|---|
| $y^*$ | 0.915 | 0.895 | 0.871 | 0.845 | 0.825 | 0.780 |
| $1/(y^* - x)$ | 8.70 | 6.90 | 5.85 | 5.13 | 4.44 | 3.57 |

2. **First guess $x_W = 0.70$** (Simpson's rule, midpoint 0.75):
$$\int_{0.70}^{0.80} = \frac{0.10}{6}\left[5.85 + 4(6.90) + 8.70\right] = 0.702$$
$W = 50e^{-0.702} = 24.8$, D = 25.2, $x_{D,avg} = (40 - 24.8 \times 0.70)/25.2 = 0.898$. This is too high, so lower $x_W$.
3. **More trials** (fine Simpson integration on a smooth curve through Table 2-7):

| $x_{W,final}$ | area | $W_{final}$ | $D_{total}$ | $x_{D,avg}$ |
|---|---|---|---|---|
| 0.75 | 0.389 | 33.87 | 16.13 | 0.905 |
| 0.70 | 0.710 | 24.58 | 25.42 | 0.897 |
| 0.65 | 0.983 | 18.71 | 31.29 | 0.890 |
| 0.60 | 1.220 | 14.77 | 35.23 | 0.884 |

4. **Converged:** $x_{W,final} = 0.667$, area = 0.893:
$$W_{final} = 50e^{-0.893} = 20.5\ \mathrm{mol}, \qquad D_{total} = 29.5\ \mathrm{mol}, \qquad x_{D,avg} = 0.892$$
Check: $20.5(0.667) + 29.5(0.892) = 13.7 + 26.3 = 40.0 = Fx_F$ ✓.

![Rayleigh integrand 1/(y* − x) for methanol–water; shaded area 0.893 from 0.667 to 0.80](fig/practice-batch-P1-sol.svg)

**Comparison with the slide/book:** Wankat accepts $x_{W,final} = 0.65$, W = 18.94, D = 31.06 (where $x_{D,avg}$ = 0.890–0.891). The difference is a matter of tolerance: $x_{D,avg}$ changes only from 0.897 to 0.884 while $x_W$ goes from 0.70 to 0.60, so the answer is very insensitive. A simple still cannot give both a pure distillate and a lean residue.

**Exam tip:** the integral runs from $x_{W,final}$ up to $x_F$, so it is positive and $W < F$. Use Simpson's rule with the midpoint value when the integrand curves.`,
        answer: String.raw`$x_{W,final} \approx 0.67$ (book: 0.65), $W_{final} \approx 20$ mol (book: 18.9), $D_{total} \approx 30$ mol (book: 31.1), at $x_{D,avg}$ = 0.892. The result is very insensitive to $x_W$.` } ] },

    { id: "practice-batch-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-batch-P2a", label: "", marks: "", topic: "batch",
        sub: "Simple batch still, methanol–water 75% → 55% (Rayleigh + Simpson)", type: "numerical", syllabus: "in", repeats: ["2022-23-Q8c"],
        origin: "slides", ref: String.raw`Batch distillation slides, pp. 10–11 (Problem D2); Wankat 3e, Problem 9.D2*`,
        text: String.raw`A simple batch still (one equilibrium stage) separates methanol from water at 1 atm. The charge is 100 mol of 75 mol% methanol, and the final bottoms should be 55 mol% methanol. Find the distillate collected, the amount left in the still pot and the average distillate composition (Table 2-7 VLE).`,
        solution: String.raw`**Given:** F = 100 mol, $x_F = 0.75$, $x_{W,final} = 0.55$.

**Assumptions:** one equilibrium contact (the still), negligible holdup.

1. **Integrand values:** $y^*(0.55) = 0.802$ (interpolated in Table 2-7; the slide uses 0.805), so $1/(y - x) = 3.96$. At the midpoint 0.65, $y^* = 0.845$ and $1/(y - x) = 5.13$. At 0.75, $y^* = 0.895$ and $1/(y - x) = 6.89$.
2. **Simpson's rule:**
$$\int_{0.55}^{0.75}\frac{dx}{y - x} = \frac{0.20}{6}\left[3.96 + 4(5.13) + 6.89\right] = 1.04$$
(A 20-interval Simpson integration on the smooth curve gives 1.040, so the 3-point rule is accurate here.)
3. **Rayleigh:**
$$W_{final} = 100e^{-1.04} = 35.3\ \mathrm{mol}, \qquad D_{total} = 100 - 35.3 = 64.7\ \mathrm{mol}$$
4. **Average distillate:**
$$x_{D,avg} = \frac{100(0.75) - 35.3(0.55)}{64.7} = \frac{75 - 19.4}{64.7} = 0.859$$

![Rayleigh integrand between 0.55 and 0.75; area 1.040](fig/practice-batch-P2-sol.svg)

**Slide:** area 1.044, $W_{final} = 35.20$, $D_{total} = 64.8$, $x_{D,avg} = 0.859$ ✓. **Book answer:** $W_{final}$ = 35.2, D = 64.8 mol, $x_{D,avg}$ = 0.86 ✓.`,
        answer: String.raw`Area ≈ 1.04; $W_{final}$ ≈ 35.3 mol, $D_{total}$ ≈ 64.7 mol, $x_{D,avg}$ = 0.859 (book: 35.2, 64.8, 0.86).` } ] },

    { id: "practice-batch-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-batch-P3a", label: "", marks: "", topic: "batch",
        sub: "Multistage batch at constant reflux, ethanol–water, still + 2 stages", type: "numerical", syllabus: "in", repeats: ["2016-17-Q4"],
        origin: "slides", ref: String.raw`Batch distillation slides, pp. 13–15 (Example 11-2); Wankat 3e, Example 9-2`,
        text: String.raw`We batch distill 50 kmol of 32 mol% ethanol, 68 mol% water at 1 atm. The system is a still pot plus two equilibrium stages and a total condenser, with L/D = 2/3 (saturated reflux). The final still-pot composition is 4.5 mol% ethanol. Find the average distillate composition, the final charge in the still pot and the amount of distillate.`,
        solution: String.raw`**Given:** F = 50 kmol, $x_F = 0.32$, $x_{W,final} = 0.045$, L/D = 2/3, 3 equilibrium contacts (2 stages + still).

**Data:** ethanol–water VLE, Wankat Table 2-1, smooth interpolation.

**Assumptions:** CMO, negligible holdup on the trays and in the condenser, quasi-steady operating line at each instant.

1. **Operating line** (always through $(x_D, x_D)$):
$$\frac{L}{V} = \frac{L/D}{1 + L/D} = \frac{2/3}{5/3} = 0.4, \qquad y = 0.4x + 0.6x_D$$
2. **Link $x_D \leftrightarrow x_W$.** Pick $x_D$, draw the line of slope 0.4 through $(x_D, x_D)$, step 3 contacts, and read $x_W$. In practice invert this to get $x_D$ for each chosen $x_W$:

| $x_W$ | 0.045 | 0.0575 | 0.07 | 0.10 | 0.15 | 0.20 | 0.25 | 0.32 |
|---|---|---|---|---|---|---|---|---|
| $x_D$ | 0.466 | 0.527 | 0.567 | 0.611 | 0.637 | 0.651 | 0.663 | 0.676 |
| $1/(x_D - x_W)$ | 2.38 | 2.13 | 2.01 | 1.96 | 2.05 | 2.22 | 2.42 | 2.81 |

The staircases at the start ($x_D = 0.676$: x = 0.555, 0.436, 0.320) and at the end ($x_D = 0.466$: x = 0.119, 0.052, 0.045) are shown below.

![Batch McCabe–Thiele at L/V = 0.4: starting and final staircases of 3 contacts](fig/practice-batch-P3-sol.svg)

3. **Rayleigh integral** (Simpson, 40 intervals, over the curve below):
$$\int_{0.045}^{0.32}\frac{dx_W}{x_D - x_W} = 0.618$$

![1/(xD − xW) against xW for Example 9-2; area 0.618](fig/practice-batch-P3-sol2.svg)

4. **Results:**
$$W_{final} = 50e^{-0.618} = 27.0\ \mathrm{kmol}, \qquad D_{total} = 23.0\ \mathrm{kmol}$$
$$x_{D,avg} = \frac{50(0.32) - 27.0(0.045)}{23.0} = 0.642$$

**Slide/book:** area 0.608 (graphical), $W_{final} = 27.21$, $D_{total} = 22.79$, $x_{D,avg} = 0.648$ ✓ (within 1–2%). The integrand rises steeply at the lower end, so read it at several closely spaced points there.

**Exam tip:** at constant reflux both $x_D$ and $x_W$ fall during the run. Keep the slope L/V fixed, slide the line along the 45° line, and tabulate $x_D$ against $x_W$ before integrating.`,
        answer: String.raw`Area ≈ 0.62 (slide 0.608); $W_{final}$ ≈ 27.0 kmol, $D_{total}$ ≈ 23.0 kmol, $x_{D,avg}$ ≈ 0.64–0.65 (slide 27.21, 22.79, 0.648).` } ] },

    { id: "practice-batch-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-batch-P4a", label: "", marks: "", topic: "batch",
        sub: "Still + 1 stage at constant L0/D = 1.85, methanol–water 57% → 15%", type: "numerical", syllabus: "in", repeats: ["2015-16-Q7b", "2020-21-Q8c"],
        origin: "slides", ref: String.raw`Batch distillation slides, pp. 16–17 (Problem D3); Wankat 3e, Problem 9.D3*`,
        text: String.raw`A still pot plus a column with one equilibrium stage and a total condenser batch-distills methanol–water at 101.3 kPa. The feed is 57 mol% methanol and the final bottoms 15 mol% methanol. Reflux is a saturated liquid with constant $L_0/D = 1.85$. Find $W_{final}$, $D_{total}$ and $x_{D,avg}$ per 1 kmol of feed (Table 2-7 VLE).`,
        solution: String.raw`**Given:** F = 1 kmol, $x_F = 0.57$, $x_{W,final} = 0.15$, $L_0/D = 1.85$, two equilibrium contacts (1 stage + still).

**Assumptions:** CMO, negligible holdup.

1. **Operating line:** $L/V = 1.85/2.85 = 0.649$, so $y = 0.649x + 0.351x_D$.
2. **Stepping 2 contacts** for each $x_W$ gives:

| $x_W$ | 0.15 | 0.20 | 0.25 | 0.30 | 0.36 | 0.40 | 0.45 | 0.50 | 0.57 |
|---|---|---|---|---|---|---|---|---|---|
| $x_D$ | 0.730 | 0.768 | 0.795 | 0.817 | 0.840 | 0.853 | 0.867 | 0.881 | 0.899 |
| $1/(x_D - x_W)$ | 1.724 | 1.761 | 1.835 | 1.934 | 2.084 | 2.208 | 2.396 | 2.626 | 3.040 |

(Slide: $x_D$ = 0.90 at 0.588, 0.837 at 0.360 and 0.72 at 0.150, the same within reading accuracy.)

![Batch McCabe–Thiele at L/V = 0.649 with 2 contacts: start (xD = 0.899) and end (xD = 0.730)](fig/practice-batch-P4-sol.svg)

3. **Simpson's rule** with the midpoint $x_W = 0.36$:
$$\int_{0.15}^{0.57}\frac{dx_W}{x_D - x_W} = \frac{0.42}{6}\left[1.724 + 4(2.084) + 3.040\right] = 0.917$$
A 40-interval integration gives 0.915.

![1/(xD − xW) against xW for 9.D3; area 0.915](fig/practice-batch-P4-sol2.svg)

4. **Results per kmol of feed:**
$$W_{final} = e^{-0.915} = 0.401\ \mathrm{kmol}, \qquad D_{total} = 0.599\ \mathrm{kmol}$$
$$x_{D,avg} = \frac{0.57 - 0.401(0.15)}{0.599} = 0.851$$

**Slide:** area 0.925; "$W_{final}$ = 39.7 kmol, $D_{total}$ = 60.3 kmol, $x_{D,avg}$ = 0.847". These are on a 100 kmol basis, although the problem says 1 kmol; per kmol they are 0.397 and 0.603. **Book answer:** $W_{final}$ = 39.7, D = 60.3 kmol, $x_{D,avg}$ = 0.85 ✓.`,
        answer: String.raw`Per kmol of feed: area ≈ 0.915, $W_{final}$ ≈ 0.40 kmol, $D_{total}$ ≈ 0.60 kmol, $x_{D,avg}$ ≈ 0.85 (slide and book 39.7 and 60.3 kmol per 100 kmol, 0.85).` } ] },

    { id: "practice-batch-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw`A normal batch distillation of methanol and water uses a still pot (an equilibrium stage) and a column with two equilibrium stages, i.e. three equilibrium contacts, a total condenser and saturated reflux. The reflux ratio is varied so that $x_D$ stays constant at 0.84. The charge is F = 10 kmol of 40 mol% methanol, and the final still-pot composition is 8 mol%. 1 atm, CMO, Table 2-7 VLE.`,
      parts: [
        { id: "practice-batch-P5a", label: "(a)", marks: "", topic: "batch",
          sub: "Variable reflux at constant xD: initial and final L0/D", type: "numerical", syllabus: "in", repeats: ["2021-22-Q5d"],
          origin: "slides", ref: String.raw`Batch distillation slides, pp. 18, 24–25 (Problem D4, solution labelled 9-D16); Wankat 3e, Problem 9.D16*`,
          text: String.raw`What initial and what final external reflux ratios $L_0/D$ must be used?`,
          solution: String.raw`**Method (slides):** with $x_D$ and the number of contacts fixed, find by trial the slope L/V for which 3 steps from $(x_D, x_D)$ end at the current still-pot composition. The Rayleigh equation is not needed because $x_D$ is constant.

**Note on the data:** the slides use $x_D$ = 0.84. The printed book problem says 0.85, but the book's answers (0.47, 5.46) belong to 0.84, so 0.84 is used here.

1. **Initial ($x_W = x_F = 0.40$):** trial and error gives L/V = 0.317.

| contact | x | y |
|---|---|---|
| 1 | 0.6332 | 0.8400 |
| 2 | 0.4903 | 0.7744 |
| 3 (still) | 0.4000 | 0.7290 |

$$\left(\frac{L_0}{D}\right)_{initial} = \frac{0.317}{1 - 0.317} = 0.465$$

2. **Final ($x_W = 0.08$):** L/V = 0.869.

| contact | x | y |
|---|---|---|
| 1 | 0.6332 | 0.8400 |
| 2 | 0.2935 | 0.6602 |
| 3 (still) | 0.0800 | 0.3650 |

$$\left(\frac{L_0}{D}\right)_{final} = \frac{0.869}{0.131} = 6.6$$

![Variable-reflux batch at xD = 0.84: initial line L/V = 0.317 and final line L/V = 0.869, three contacts each](fig/practice-batch-P5-sol.svg)

**Slide/book:** $(L/V)_a = 0.3214$, $(L_0/D)_{initial}$ = 0.47 ✓. $(L/V)_b = 0.8452$, $(L_0/D)_{final}$ = 5.46: our 6.6 is higher. The final condition is close to the total-reflux limit (3 contacts at total reflux from $x_W$ = 0.08 reach only $x_D$ = 0.87), so L/D is extremely sensitive. With the book's L/V = 0.845 the third step ends at $x_W$ = 0.087 instead of 0.080. A small graphical error in $x_W$ is a large error in L/D.`,
          answer: String.raw`$(L_0/D)_{initial}$ ≈ 0.47 (L/V = 0.317); $(L_0/D)_{final}$ ≈ 6.6 (L/V = 0.869). Book: 0.47 and 5.46; the final value is very sensitive near total reflux.` },
        { id: "practice-batch-P5b", label: "(b)", marks: "", topic: "batch",
          sub: "Variable reflux: distillate and final still-pot amounts by mass balance", type: "numerical", syllabus: "in", repeats: ["2021-22-Q5d"],
          origin: "slides", ref: String.raw`Batch distillation slides, p. 25; Wankat 3e, Problem 9.D16*`,
          text: String.raw`How much distillate is withdrawn, and what is the final amount $W_{final}$ left in the still pot?`,
          solution: String.raw`With constant $x_D$, overall balances over the whole batch are enough:
$$F = D_{total} + W_{final}: \quad 10 = D_{total} + W_{final}$$
$$Fx_F = D_{total}x_D + W_{final}x_{W,final}: \quad 4.0 = 0.84D_{total} + 0.08W_{final}$$
$$D_{total} = \frac{F(x_F - x_{W,final})}{x_D - x_{W,final}} = \frac{10(0.32)}{0.76} = 4.21\ \mathrm{kmol}, \qquad W_{final} = 5.79\ \mathrm{kmol}$$

The Rayleigh equation with constant $x_D$ gives the same result: $\ln(F/W) = \int dx_W/(x_D - x_W) = \ln\dfrac{x_D - x_{W,f}}{x_D - x_F}$, so $W = 10(0.44/0.76) = 5.79$ ✓.

**Slide/book answer:** $W_{final}$ = 5.79 and D = 4.21 kmol ✓.`,
          answer: String.raw`$D_{total}$ = 4.21 kmol, $W_{final}$ = 5.79 kmol (book: same).` } ] },

    { id: "practice-batch-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-batch-P6a", label: "", marks: "", topic: "batch",
        sub: "Batch vs continuous: advantages, disadvantages and choice by industry", type: "theory", syllabus: "in", repeats: ["2013-14-Q3a", "2015-16-Q7a", "2020-21-Q8a", "2022-23-Q8a"],
        origin: "slides", ref: String.raw`Batch distillation slides, p. 22 (Problem A4, from an earlier Wankat edition)`,
        text: String.raw`Discuss the advantages and disadvantages of batch distillation compared with continuous distillation. Would you expect batch or continuous distillation in: (a) a large basic chemical plant; (b) a fine chemicals plant; (c) a petroleum refinery; (d) a petrochemical plant; (e) a pharmaceutical plant; (f) a cryogenic air separation plant for oxygen; (g) a solvent-recovery still in a painting operation; (h) a farmer's ethanol facility? Why?`,
        solution: String.raw`**Advantages of batch**
- One column can handle many feeds and products, one after another (campaigns), and several cuts from one charge.
- Suits small or occasional throughputs, and a run can be fitted into one or two shifts (8–16 h).
- Copes with changing feed compositions and specifications, and with feeds containing solids or tars (they stay in the pot).
- Lower capital cost for small capacities; simple to operate and clean; keeps batch identity (traceability, important for pharmaceuticals).

**Disadvantages of batch**
- Usually more energy per unit product, because the column works against a changing composition and there is no stripping section.
- Down time (charging, heating up, emptying, cleaning) reduces capacity.
- Product composition varies during the run unless the reflux is varied; it needs more operator attention or control.
- Longer residence time at the still temperature can degrade heat-sensitive material.

| plant | choice | reason |
|---|---|---|
| (a) large basic chemicals | continuous | huge steady throughput, energy efficiency |
| (b) fine chemicals | batch | small volumes, many products in shared equipment |
| (c) petroleum refinery | continuous | very large steady flows |
| (d) petrochemical plant | continuous | large steady flows (batch only for small specialty units) |
| (e) pharmaceutical plant | batch | small lots, many products, batch traceability and cleaning validation |
| (f) cryogenic O₂ plant | continuous | very large steady flow; start-up and cooling cycles make batch impractical |
| (g) paint-shop solvent recovery | batch | small, intermittent amounts of dirty solvent; residue stays in the pot |
| (h) farmer's ethanol | batch | small seasonal amounts, simple equipment, low capital |`,
        answer: String.raw`Batch suits small, varied or intermittent duties (fine chemicals, pharmaceuticals, solvent recovery, farm ethanol); continuous suits large steady duties (basic chemicals, refinery, petrochemicals, air separation). Batch costs more energy and has down time.` } ] },

    { id: "practice-batch-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-batch-P7a", label: "", marks: "", topic: "batch",
        sub: "Which batch systems use less energy than continuous? (MCQ)", type: "theory", syllabus: "in", repeats: ["2016-17-Q1g", "2020-21-Q8b"],
        origin: "slides", ref: String.raw`Batch distillation slides, p. 23; Wankat 3e, Problem 9.A5`,
        text: String.raw`Which system(s) need less energy as batch than as continuous distillation for the same separation? (a) simple batch vs one-stage continuous; (b) multistage batch vs multistage continuous; (c) batch vs continuous steam distillation; (d) all; (e) a and b; (f) a and c; (g) b and c; (h) none. Explain.`,
        solution: String.raw`**Answer: (f), a and c.**

- **(a) Simple batch vs a single continuous stage (flash): batch uses less energy.** A flash produces all its vapor in equilibrium with the final, leanest liquid. A batch still produces each vapor increment in equilibrium with the liquid present at that moment, which is richer at the start. To reach the same residue it vaporizes less. Example (methanol–water, 0.75 → 0.55): batch D/F = 0.65 (9.D2), while a flash to x = 0.55 needs V/F = (0.75 − 0.55)/(0.802 − 0.55) = 0.79, and its vapor is leaner (0.80 against 0.86 average).
- **(b) Multistage batch vs multistage continuous: batch uses more energy.** A batch column is only an enriching section, with no stripping section. To keep the distillate pure as the pot depletes it needs a high (or rising) reflux, so the boil-up per mole of product is larger than in a continuous column with the feed at the optimum stage.
- **(c) Steam distillation: batch uses less steam.** Steam per mole of organic is $p_w/p_{org}$ with $p_{org} = x_{org}VP_{org}$. A continuous still always runs at the final (lowest) organic mole fraction, so it uses the most steam per mole throughout. A batch still runs at high organic fractions for most of the time.`,
        answer: String.raw`(f) a and c: simple batch beats a single flash and batch steam distillation beats continuous steam distillation, but a multistage batch column (enriching only) uses more energy than a continuous column.` } ] },
    { id: "practice-batch-P8", q: 8, section: "W", compulsory: false,
      stem: String.raw`1-Butanol and water form a heterogeneous azeotrope. A batch still pot boils the mixture; the vapor is condensed and settles into two liquid layers. The water-rich bottom layer (97.5 mol% water) is withdrawn as distillate, and the butanol-rich top layer (57.3 mol% water) is returned to the still pot. 1 atm. The charge is 20 kmol of 40 mol% water. Water–n-butanol VLE at 1 atm (Wankat Table 8-2, mol% water, homogeneous-liquid branch):

| liquid | 0 | 3.9 | 4.7 | 5.5 | 7.0 | 25.7 | 27.5 | 29.2 | 30.5 | 49.6 |
|---|---|---|---|---|---|---|---|---|---|---|
| vapor | 0 | 26.7 | 29.9 | 32.3 | 35.2 | 62.9 | 64.1 | 65.5 | 66.2 | 73.6 |`,
      parts: [
        { id: "practice-batch-P8a", label: "(a)", marks: "", topic: "batch",
          sub: "Batch distillation with a decanter (heterogeneous azeotrope): distillate amount", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 9.D9*`,
          text: String.raw`If the final still-pot concentration is $x_{W,final}$ = 0.28, how much distillate $D_{total}$ (kmol) is collected?`,
          solution: String.raw`> Partly beyond the slides: heterogeneous azeotropes and decanters are Wankat chapter 8. The batch balance itself is the slide method for constant $x_D$.

![Batch still with a decanter: the water layer is the product, the butanol layer returns to the pot](fig/practice-batch-P8.svg)

**Key idea:** whatever the vapor composition, the net product removed is always the water layer with $x_D = x_\beta = 0.975$. The butanol layer goes back to the pot, so the system behaves like a batch distillation at **constant distillate composition**, and overall balances are enough (as in variable-reflux batch).

This holds as long as the condensed vapor splits into two liquid layers, i.e. $0.573 < y < 0.975$. At $x_W$ = 0.40, y ≈ 0.69 and at 0.28, y ≈ 0.645, so the condition is met throughout.

1. Total: $20 = D + W$
2. Water: $20(0.40) = 0.975D + 0.28W$
$$D_{total} = \frac{F(x_F - x_{W,final})}{x_D - x_{W,final}} = \frac{20(0.40 - 0.28)}{0.975 - 0.28} = 3.45\ \mathrm{kmol}, \qquad W_{final} = 16.55\ \mathrm{kmol}$$

**Book answer:** D = 3.45 kmol ✓.`,
          answer: String.raw`Constant $x_D$ = 0.975, so $D = 20(0.12)/0.695 = 3.45$ kmol (W = 16.55 kmol). Book: 3.45.` },
        { id: "practice-batch-P8b", label: "(b)", marks: "", topic: "batch",
          sub: "Lowest still-pot composition that still gives two liquid phases", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 9.D9*`,
          text: String.raw`If the batch is continued, what is the lowest $x_{W,final}$ that can still be reached while producing $x_D$ = 0.975?`,
          solution: String.raw`A water layer separates in the decanter only while the condensed vapor lies inside the two-liquid-phase region, i.e. $y > x_\alpha = 0.573$. As water is removed, $x_W$ falls and so does y. The limit is reached when the vapor in equilibrium with the pot equals 0.573.

From Table 8-2, y = 0.573 lies between (7.0, 35.2) and (25.7, 62.9) mol%:
$$x_W = 7.0 + \frac{57.3 - 35.2}{62.9 - 35.2}(25.7 - 7.0) = 21.9\ \mathrm{mol\%}$$

Below $x_W \approx 0.22$ the condensate is a single butanol-rich liquid, so no 97.5% water layer forms.

**Book answer:** $x_{W,final,min}$ = 0.21 ✓ (linear interpolation over a wide data gap gives 0.22; the true curve is concave, so its value is slightly lower).`,
          answer: String.raw`The limit is $y^*(x_W) = x_\alpha = 0.573$, which gives $x_{W,min} \approx 0.21$–0.22 (book 0.21).` } ] },

    { id: "practice-batch-P9", q: 9, section: "W", compulsory: false,
      stem: String.raw`A simple batch steam distillation is run with liquid water present in the still (immiscible water and n-decane). The organic charge is F = 10 kmol: 90 mol% n-decane and 10% nonvolatile organics. Distillation continues until the organic layer in the still is 10 mol% n-decane. Total pressure is 760 mm Hg.

Vapor pressure data (Perry, via Wankat Example 8-2 and Problem 8.D10):

| n-decane, T (°C) | 85.5 | 95.5 | 108.6 | 128.4 |
|---|---|---|---|---|
| VP (mm Hg) | 40 | 60 | 100 | 200 |

| water, T (°C) | 97.0 | 98.0 | 99.0 | 99.5 | 100.0 |
|---|---|---|---|---|---|
| VP (mm Hg) | 682.07 | 707.27 | 733.24 | 746.52 | 760.0 |`,
      parts: [
        { id: "practice-batch-P9a", label: "(a)", marks: "", topic: "batch",
          sub: "Batch steam distillation: still temperature at the end", type: "numerical", syllabus: "out", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 9.D14*`,
          text: String.raw`At the final time, what is the temperature in the still?`,
          solution: String.raw`> Not covered in the current ChE 303 slides (steam distillation is Wankat chapter 8; it appears in the slides only in the energy MCQ).

**Assumptions:** water and decane are completely immiscible. The water phase is pure (activity 1). The organic phase is ideal (Raoult). The nonvolatiles have zero vapor pressure.

**Equilibrium:** $p_{tot} = x_{C10}(VP)_{C10} + (VP)_w$, with $x_{C10} = 0.10$ in the organic layer at the end.

Trial and error on T (log-linear interpolation of the decane VP):
- At 99.5 °C: $0.1(70.1) + 746.5 = 753.5 < 760$. Too low.
- At 100 °C: $0.1(71.5) + 760 = 767 > 760$. Too high.
- Converged at **T = 99.7 °C**: $(VP)_{C10}$ = 70.8 mm Hg, $(VP)_w$ = 752.9 mm Hg, and $7.1 + 752.9 = 760$ ✓.

For comparison, at the start ($x_{C10}$ = 0.90) the still boils at 97.8 °C. The temperature rises only slightly, because water supplies most of the pressure.

**Book answer:** $T_{final}$ = 99.7 °C ✓.`,
          answer: String.raw`Solve $0.10(VP)_{C10} + (VP)_w = 760$: T ≈ 99.7 °C (book 99.7 °C).` },
        { id: "practice-batch-P9b", label: "(b)", marks: "", topic: "batch",
          sub: "Steam distillation: final organic in the still and decane distilled", type: "numerical", syllabus: "out", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 9.D14*`,
          text: String.raw`What are $W_{final}$ and $D_{total}$ (organic basis)?`,
          solution: String.raw`The nonvolatile organics (1 kmol) all stay in the still. At the end they are 90% of the organic layer:
$$W_{final} = \frac{1.0}{1 - 0.10} = 1.11\ \mathrm{kmol}\ (0.11\ \text{kmol decane} + 1.0\ \text{kmol nonvolatiles})$$
$$D_{total} = F - W_{final} = 10 - 1.11 = 8.89\ \mathrm{kmol\ of\ n\text{-}decane}$$

No Rayleigh integral is needed: the distillate is pure decane on a water-free basis, so the balance on the nonvolatiles fixes W.

**Book answer:** $W_{final}$ = 1.11, D = 8.89 moles ✓.`,
          answer: String.raw`$W_{final}$ = 1.0/0.9 = 1.11 kmol; $D_{total}$ = 8.89 kmol of decane (book: same).` },
        { id: "practice-batch-P9c", label: "(c)", marks: "", topic: "batch",
          sub: "Water carried over per mole of decane at the end", type: "numerical", syllabus: "out", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 9.D14*`,
          text: String.raw`Estimate the moles of water passed overhead per mole of n-decane at the end of the distillation.`,
          solution: String.raw`For immiscible phases, the vapor mole ratio equals the partial-pressure ratio:
$$\frac{n_w}{n_{C10}} = \frac{p_w}{p_{C10}} = \frac{(VP)_w}{x_{C10}(VP)_{C10}} = \frac{752.9}{0.10 \times 70.8} = 106$$

At the start the ratio is only $(760 - 0.9 \times 65.5)/(0.9 \times 65.5) = 11.9$. The steam demand per mole of product rises about ninefold as the organic layer is depleted. This is why the energy MCQ (problem 7) favors batch steam distillation over continuous operation at the final composition.

**Book answer:** $n_{water}/n_{organic}$ = 107.2 ✓ (106 here; the difference is the interpolation of the decane VP between 95.5 and 108.6 °C).`,
          answer: String.raw`$n_w/n_{C10} = (VP)_w/[x(VP)_{C10}] \approx 753/7.1 \approx 106$ mol water per mol decane at the end (book 107).` } ] },
    { id: "practice-batch-P10", q: 10, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-batch-P10a", label: "(a)", marks: "10", topic: "batch",
          sub: "Derivation: Rayleigh equation and its constant-α form", type: "derivation", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Exam-style; cf. Batch distillation slides pp. 6–7`,
          text: String.raw`Derive the Rayleigh equation for simple batch distillation, stating the assumptions. Integrate it analytically for a constant relative volatility α.`,
          solution: String.raw`**Assumptions:** the still pot is well mixed and is one equilibrium stage; the vapor is removed as soon as it forms; holdup in the column, condenser and receiver is negligible; constant pressure.

1. At any time the pot holds W mol at mole fraction $x_W$. In time dt, a small amount of vapor, $-dW$, leaves with composition $x_D = y^*(x_W)$.
2. Total balance (out = −accumulation): $dD = -dW$.
3. Component balance: $-x_D\,dW = -d(Wx_W) = -W\,dx_W - x_W\,dW$
4. Rearrange: $W\,dx_W = (x_D - x_W)\,dW$, so $\dfrac{dW}{W} = \dfrac{dx_W}{x_D - x_W}$
5. Integrate from (F, $x_F$) to ($W_{final}$, $x_{W,final}$):
$$\ln\frac{W_{final}}{F} = -\int_{x_{W,final}}^{x_F}\frac{dx_W}{x_D - x_W}$$
For a simple still $x_D = y^*(x_W)$. Then $D_{total} = F - W_{final}$ and $x_{D,avg} = (Fx_F - W_{final}x_{W,final})/D_{total}$.
6. **Constant α:** $y = \alpha x/(1 + (\alpha - 1)x)$, so
$$\frac{1}{y - x} = \frac{1 + (\alpha - 1)x}{(\alpha - 1)x(1 - x)} = \frac{1}{\alpha - 1}\left[\frac{1}{x} + \frac{1}{1 - x}\right] + \frac{1}{1 - x}$$
Integrating term by term:
$$\ln\frac{F}{W_{final}} = \frac{1}{\alpha - 1}\ln\left[\frac{x_F(1 - x_{W,f})}{x_{W,f}(1 - x_F)}\right] + \ln\frac{1 - x_{W,f}}{1 - x_F}$$

**Why it is not a flash:** a flash makes all its vapor at the final liquid composition. The Rayleigh still makes each increment of vapor from the liquid present at that moment, so it behaves like an infinite series of differential flashes.`,
          answer: String.raw`$-x_D\,dW = -d(Wx_W)$ leads to $\ln(F/W) = \int_{x_{W,f}}^{x_F} dx/(y^* - x)$. For constant α: $\ln(F/W) = \frac{1}{\alpha - 1}\ln\frac{x_F(1 - x_W)}{x_W(1 - x_F)} + \ln\frac{1 - x_W}{1 - x_F}$.` },
        { id: "practice-batch-P10b", label: "(b)", marks: "15", topic: "batch",
          sub: "Simple batch with constant α = 2.5: analytic vs Simpson", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Exam-style (own numbers)`,
          text: String.raw`100 kmol of a 50 mol% benzene–toluene mixture (α = 2.5) is distilled in a simple batch still until the pot contains 20 mol% benzene. Find $W_{final}$, $D_{total}$ and $x_{D,avg}$ (i) with the analytical constant-α form, (ii) with Simpson's rule using 5 points. (iii) Could a single continuous flash leave the same 20% liquid? Comment.`,
          solution: String.raw`**(i) Analytical**
$$\ln\frac{F}{W} = \frac{1}{1.5}\ln\frac{0.5(0.8)}{0.2(0.5)} + \ln\frac{0.8}{0.5} = \frac{1.3863}{1.5} + 0.4700 = 1.3942$$
$$W_{final} = 100e^{-1.3942} = 24.80\ \mathrm{kmol}, \qquad D_{total} = 75.20\ \mathrm{kmol}$$
$$x_{D,avg} = \frac{50 - 24.80(0.20)}{75.20} = 0.599$$

**(ii) Simpson** (h = 0.075):

| x | 0.200 | 0.275 | 0.350 | 0.425 | 0.500 |
|---|---|---|---|---|---|
| $y^* = 2.5x/(1 + 1.5x)$ | 0.3846 | 0.4867 | 0.5738 | 0.6489 | 0.7143 |
| $1/(y^* - x)$ | 5.417 | 4.723 | 4.469 | 4.467 | 4.667 |

$$\int = \frac{0.075}{3}\left[5.417 + 4(4.723) + 2(4.469) + 4(4.467) + 4.667\right] = 1.3946$$
So W = 24.79 kmol and $x_{D,avg}$ = 0.599, matching (i) to 0.03%. (The 3-point rule gives 1.398.)

![Integrand 1/(y* − x) for α = 2.5 between 0.2 and 0.5; area 1.394](fig/practice-batch-P10-sol.svg)

**(iii) Flash:** a flash leaving liquid at 0.20 would produce vapor in equilibrium with it, $y^* = 0.385$, which is leaner than the feed (0.50). The lever rule would need $V/F = (0.5 - 0.2)/(0.385 - 0.2) = 1.6 > 1$, which is impossible. The batch still reaches the 20% residue because its early vapor (up to 0.714) is richer than the feed.

**Marking guide:** equation 3, analytical 5, Simpson table 5, comment 2.`,
          answer: String.raw`ln(F/W) = 1.394: $W_{final}$ = 24.8 kmol, $D_{total}$ = 75.2 kmol, $x_{D,avg}$ = 0.599. Simpson (5 points) gives 1.3946. A single flash cannot leave 0.20 liquid (it would need V/F = 1.6).` } ] },

    { id: "practice-batch-P11", q: 11, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-batch-P11a", label: "", marks: "25", topic: "batch",
        sub: "Constant-reflux batch (still + 1 stage), methanol–water, with operating time", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style (own numbers)`,
        text: String.raw`20 kmol of 50 mol% methanol in water is batch distilled at 1 atm in a still pot plus a column with one equilibrium stage and a total condenser. The external reflux ratio is held at $L_0/D = 1.0$ (saturated reflux) until the pot reaches 10 mol% methanol. Use the methanol–water VLE table (Table 2-7).

(i) Find $W_{final}$, $D_{total}$ and $x_{D,avg}$. (ii) The column can boil up at most $V_{max}$ = 4 kmol/h, and down time is 1.5 h per batch. Find the operating time and the total batch time.`,
        solution: String.raw`**Assumptions:** CMO, negligible holdup, 2 equilibrium contacts (one stage + the still), constant vapor rate $V_{max}$.

### (i) Rayleigh with a stepped $x_D(x_W)$
1. Operating line: $L/V = 1/(1 + 1) = 0.5$, so $y = 0.5x + 0.5x_D$.
2. For each $x_W$, find by trial the $x_D$ whose 2-step staircase ends at $x_W$:

| $x_W$ | 0.10 | 0.15 | 0.20 | 0.25 | 0.30 | 0.35 | 0.40 | 0.45 | 0.50 |
|---|---|---|---|---|---|---|---|---|---|
| $x_D$ | 0.607 | 0.693 | 0.739 | 0.770 | 0.795 | 0.817 | 0.835 | 0.851 | 0.866 |
| $1/(x_D - x_W)$ | 1.972 | 1.841 | 1.855 | 1.923 | 2.019 | 2.143 | 2.297 | 2.491 | 2.730 |

Start: $x_D$ = 0.866 (stage x = 0.692). End: $x_D$ = 0.607 (stage x = 0.229).

![Constant L0/D = 1 with 2 contacts: start and end staircases](fig/practice-batch-P11-sol.svg)

3. Simpson over 0.10–0.50 (h = 0.05, 9 points): area = **0.844**. The 3-point rule gives $\frac{0.4}{6}[1.972 + 4(2.019) + 2.730] = 0.852$.
4. Results:
$$W_{final} = 20e^{-0.844} = 8.60\ \mathrm{kmol}, \qquad D_{total} = 11.40\ \mathrm{kmol}$$
$$x_{D,avg} = \frac{20(0.5) - 8.60(0.10)}{11.40} = 0.802$$

### (ii) Time
- From the balance around the condenser: $D = \dfrac{V_{max}}{1 + L_0/D} = \dfrac{4}{2} = 2.0$ kmol/h
- $t_{op} = D_{total}/D = 11.40/2.0 = 5.7$ h
- $t_{batch} = t_{op} + t_{down} = 5.7 + 1.5 = 7.2$ h (one 8-hour shift)

**Marking guide:** operating line 3, $x_D$–$x_W$ table 8, integration 6, results 4, time 4.`,
        answer: String.raw`Area ≈ 0.84: $W_{final}$ = 8.6 kmol, $D_{total}$ = 11.4 kmol, $x_{D,avg}$ = 0.80. D = 2 kmol/h, so $t_{op}$ = 5.7 h and $t_{batch}$ = 7.2 h.` } ] },

    { id: "practice-batch-P12", q: 12, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-batch-P12a", label: "", marks: "25", topic: "batch",
        sub: "Variable-reflux batch at constant xD with operating time at constant boil-up", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style (own numbers)`,
        text: String.raw`A batch still pot plus three equilibrium stages (four contacts) with a total condenser distills 25 kmol of 30 mol% methanol in water at 1 atm. The reflux is increased during the run so that the distillate stays at 90 mol% methanol, and the run stops at $x_W$ = 0.05. Boil-up is constant at V = 6 kmol/h. (i) Explain the procedure. (ii) Find the initial and final $L_0/D$. (iii) Find $D_{total}$ and $W_{final}$. (iv) Find the operating time.`,
        solution: String.raw`**(i) Procedure** (slides, variable reflux):
1. With $x_D$ and N fixed, find by trial the L/V for which N steps from $(x_D, x_D)$ end at $x_F$. This gives the initial reflux.
2. Increase L/V until the N steps end at $x_{W,final}$. This gives the final reflux.
3. Get $W_{final}$ and $D_{total}$ from overall balances; no Rayleigh integral is needed because $x_D$ is constant.
4. Time: with constant V, the distillate rate is $dD/dt = V/(1 + R)$, so $t_{op} = \dfrac{1}{V}\int (1 + R)\,dD$.

**(ii) Reflux ratios** (Table 2-7 VLE, 4 steps):

| | L/V | $L_0/D$ | staircase x values |
|---|---|---|---|
| initial ($x_W$ = 0.30) | 0.516 | 1.06 | 0.766, 0.613, 0.444, 0.300 |
| final ($x_W$ = 0.05) | 0.876 | 7.06 | 0.766, 0.508, 0.180, 0.050 |

![Variable reflux at xD = 0.90 with 4 contacts: initial and final operating lines](fig/practice-batch-P12-sol.svg)

**(iii) Balances:**
$$D_{total} = \frac{25(0.30 - 0.05)}{0.90 - 0.05} = 7.35\ \mathrm{kmol}, \qquad W_{final} = 17.65\ \mathrm{kmol}$$

**(iv) Operating time.** $D(x_W) = F(x_F - x_W)/(x_D - x_W)$, so $dD = F\dfrac{x_D - x_F}{(x_D - x_W)^2}(-dx_W)$, and
$$t_{op} = \frac{1}{V}\int_{x_{W,f}}^{x_F}\frac{1}{1 - L/V}\,\frac{F(x_D - x_F)}{(x_D - x_W)^2}\,dx_W$$

| $x_W$ | 0.30 | 0.25 | 0.20 | 0.15 | 0.10 | 0.075 | 0.05 |
|---|---|---|---|---|---|---|---|
| L/V | 0.516 | 0.557 | 0.604 | 0.663 | 0.751 | 0.808 | 0.876 |
| $L_0/D$ | 1.06 | 1.26 | 1.53 | 1.97 | 3.02 | 4.21 | 7.06 |
| D so far (kmol) | 0 | 1.92 | 3.57 | 5.00 | 6.25 | 6.82 | 7.35 |
| integrand | 86.0 | 80.2 | 77.4 | 79.2 | 94.2 | 114.8 | 167.4 |

Simpson (40 intervals): $\int(1 + R)\,dD = 22.2$ kmol of vapor in total, so
$$t_{op} = 22.2/6 = 3.7\ \mathrm{h}$$
The average distillate rate is 7.35/3.7 = 2.0 kmol/h. It falls from 2.9 kmol/h at the start to 0.74 kmol/h at the end; the last 10% of the product takes about a fifth of the time.

**Marking guide:** procedure 5, reflux ratios 8, balances 4, time 8.`,
        answer: String.raw`$(L_0/D)$ from 1.06 (initial) to 7.06 (final); $D_{total}$ = 7.35 kmol, $W_{final}$ = 17.65 kmol; total vapor 22.2 kmol, so $t_{op}$ ≈ 3.7 h at V = 6 kmol/h.` } ] },

    { id: "practice-batch-P13", q: 13, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-batch-P13a", label: "(a)", marks: "6", topic: "batch",
          sub: "Simple batch distillation vs flash distillation", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Exam-style; cf. Batch distillation slides p. 5`,
          text: String.raw`Compare simple batch (Rayleigh) distillation with flash distillation.`,
          solution: String.raw`| feature | flash (continuous, one stage) | simple batch (Rayleigh) |
|---|---|---|
| operation | steady state, continuous feed | unsteady; charge, boil off, dump |
| equilibrium | one vapor in equilibrium with one final liquid | each vapor increment in equilibrium with the current pot liquid |
| distillate | constant composition | composition falls with time; collected average $x_{D,avg}$ |
| model | lever rule and flash operating line | Rayleigh equation (integral) |
| separation for the same fraction vaporized | poorer | better (like infinitely many differential flashes) |
| equipment | pump, heater, valve, drum | still pot, condenser, receiver |
| use | large steady flows, first rough cut | small or occasional batches, solids-laden feeds |

Neither can give both a pure distillate and a pure residue unless α is large.`,
          answer: String.raw`A flash is steady, with one vapor at the final liquid composition (lever rule). A batch still is unsteady and separates better, with a falling $x_D$ (Rayleigh); it suits small or occasional duties.` },
        { id: "practice-batch-P13b", label: "(b)", marks: "6", topic: "batch",
          sub: "Steam distillation principle and still temperature", type: "theory", syllabus: "out", repeats: [],
          origin: "potential", ref: String.raw`Exam-style; Wankat 3e section 8.4 and Problem 9.D14`,
          text: String.raw`Explain the principle of steam distillation with liquid water present. Why does the still boil below 100 °C at 1 atm even for a high-boiling organic?`,
          solution: String.raw`> Not covered in the current ChE 303 slides (steam distillation is in Wankat chapters 8–9).

- Water and the organic are immiscible, so each liquid phase exerts its own vapor pressure independently: $p_{tot} = (VP)_w + x_{org}(VP)_{org}$ (Raoult's law in the organic phase, pure water phase).
- Boiling occurs when the sum reaches $p_{tot}$. Because $(VP)_w$ alone reaches 760 mm Hg at 100 °C, the sum reaches 760 mm Hg **below** 100 °C. Example: n-decane (normal bp 174 °C) steam-distills at about 98–99.7 °C.
- The mole ratio in the vapor is $n_w/n_{org} = (VP)_w/[x_{org}(VP)_{org}]$. Steam use rises sharply as the organic is depleted (12 → 106 mol/mol in 9.D14).
- Uses: recovering high-boiling or heat-sensitive organics (essential oils, cutting oils) from nonvolatile residues without high temperatures or vacuum.`,
          answer: String.raw`For immiscible phases $p_{tot} = (VP)_w + x_{org}(VP)_{org}$, so boiling occurs below 100 °C at 1 atm. Water to organic in the vapor is $(VP)_w/[x(VP)_{org}]$.` },
        { id: "practice-batch-P13c", label: "(c)", marks: "8", topic: "batch",
          sub: "Operating time, maximum distillate rate and batch size", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Exam-style; cf. Batch distillation slides pp. 19–21`,
          text: String.raw`How are the operating time and total batch time of an existing batch column found? What limits the distillate rate?`,
          solution: String.raw`1. $t_{batch} = t_{down} + t_{op}$. Down time (dumping the bottoms, cleaning, charging, heating until reflux appears) comes from experience.
2. $t_{op} = D_{total}/D$, where $D_{total}$ comes from the Rayleigh calculation (or from overall balances at constant $x_D$), with F set by the pot size or the charge.
3. For an existing column, D cannot be chosen freely. The column diameter was designed for a maximum vapor velocity (a fraction of flooding), which fixes $V_{max}$ (kmol/h). A balance around the condenser gives
$$D_{max} = \frac{V_{max}}{1 + L/D}$$
4. With variable reflux, D falls as L/D rises, so $t_{op} = \dfrac{1}{V}\int(1 + R)\,dD$.
5. If the batch does not fit the shift, increase V (up to flooding), reduce the charge, lower the purity, or use a bigger or better column.`,
          answer: String.raw`$t_{batch} = t_{down} + D_{total}/D$ with $D_{max} = V_{max}/(1 + L/D)$, where $V_{max}$ is set by the flooding velocity and column area. At variable reflux, $t_{op} = (1/V)\int(1 + R)\,dD$.` } ] }

  ] });
