QB.paper({ year: "Practice", set: "Immiscible extraction", date: "", marks: 0, practice: true,
  rules: String.raw`Immiscible (dilute and ratio-unit) extraction: McCabe–Thiele, Kremser, cross-flow, two solvent feeds, multisolute and fractional extraction. Slide problems first, then every starred Wankat 3e Chapter 13 immiscible problem, then exam-style practice problems.`,
  questions: [
    { id: "practice-immiscible-extraction-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P1a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Countercurrent extraction in mass-ratio units (acetic acid–water–1-butanol)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides: Immiscible Extraction, pp. 15–17 (Example 16.1, Wankat 2nd ed.)`,
        text: String.raw`A water solution containing 11.5 wt % acetic acid is extracted countercurrently with pure 1-butanol at 1 atm and 26.7 °C. The water leaving the cascade must contain 0.5 wt % acid and the butanol leaving must contain 9.6 wt % acid. The equilibrium distribution in weight fractions is $y = 1.613x$ (y in the butanol phase, x in the water phase). Water and butanol may be taken as immiscible. Find the number of equilibrium stages and the ratio of water to butanol flow rates.`,
        solution: String.raw`**Given:** $x_0 = 0.115$, $x_N = 0.005$, $y_1 = 0.096$, $y_{N+1} = 0$; $K_d = 1.613$ (wt frac).
**Find:** N and $F_D/F_S$ (kg water / kg butanol).
**Assumptions:** isothermal, isobaric, negligible heat of mixing, water (diluent D) and butanol (solvent S) totally immiscible, so $F_D$ and $F_S$ are constant. The solution is not dilute (11.5 %), so total flows are *not* constant: work in mass ratios.

1. Convert to ratio units, $X = x/(1-x)$, $Y = y/(1-y)$:
$$X_0 = \frac{0.115}{0.885} = 0.1299,\quad X_N = \frac{0.005}{0.995} = 0.00503,\quad Y_1 = \frac{0.096}{0.904} = 0.1062,\quad Y_{N+1} = 0$$

2. Operating line (solute balance around stages 1 to j):
$$Y_{j+1} = \frac{F_D}{F_S}X_j + \left(Y_1 - \frac{F_D}{F_S}X_0\right)$$
It passes through $(X_0, Y_1)$ and $(X_N, Y_{N+1})$, so
$$\frac{F_D}{F_S} = \frac{Y_1 - Y_{N+1}}{X_0 - X_N} = \frac{0.1062 - 0}{0.1299 - 0.00503} = 0.850$$
(the slide rounds to 0.848).

3. Equilibrium in ratio units: for each x, $y = 1.613x$, then $X = x/(1-x)$, $Y = y/(1-y)$:

| x | y | X | Y |
|---|---|---|---|
| 0.02 | 0.0323 | 0.0204 | 0.0333 |
| 0.04 | 0.0645 | 0.0417 | 0.0690 |
| 0.06 | 0.0968 | 0.0638 | 0.1071 |
| 0.08 | 0.1290 | 0.0870 | 0.1482 |
| 0.10 | 0.1613 | 0.1111 | 0.1923 |
| 0.115 | 0.1855 | 0.1299 | 0.2277 |

The curve is slightly convex in ratio units even though it is a straight line in fractions.

4. Step off stages from the feed end $(X_0, Y_1)$: horizontally to equilibrium (gives $X_j$), vertically to the operating line (gives $Y_{j+1}$).

| Stage | $Y_j$ | $X_j$ (equilibrium) |
|---|---|---|
| 1 | 0.1062 | 0.0633 |
| 2 | 0.0495 | 0.0301 |
| 3 | 0.0213 | 0.0131 |
| 4 | 0.0069 | 0.00426 |

$X_4 = 0.00426 < X_N = 0.00503$, so the 4th stage is partial: fraction $= (0.0131 - 0.00503)/(0.0131 - 0.00426) = 0.91$.

![McCabe–Thiele diagram in mass ratios: 3.9 stages](fig/practice-immiscible-extraction-P1-sol.svg)

**Result:** N = 3.9 → 4 equilibrium stages, $F_D/F_S = 0.85$ kg water/kg butanol, i.e. about 1.18 kg butanol per kg water. This matches the slide's staircase (4 steps).

> Exam tip: when the solute concentration is more than a few per cent, convert both the equilibrium data and the end points to ratio units before drawing the operating line; only then is the operating line straight.`,
        answer: String.raw`N ≈ 3.9 → 4 equilibrium stages; $F_D/F_S = 0.85$ kg water/kg 1-butanol (solvent-free basis).` } ] },

    { id: "practice-immiscible-extraction-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P2a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Four-stage cross-flow extraction with the same solvent", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides: Immiscible Extraction, pp. 24–27 (Example 16.2, Wankat 2nd ed.)`,
        text: String.raw`The 11.5 wt % acetic acid–water feed of Problem 1 is now treated in a four-stage cross-flow cascade. The same total amount of pure 1-butanol is used ($F_D/F_S = 0.850$ overall), divided equally among the four stages. Operation is at 1 atm and 26.7 °C with $y = 1.613x$. Find the outlet concentrations of all streams.`,
        solution: String.raw`**Given:** $X_0 = 0.1299$ (ratio), pure solvent to each stage ($Y_{j,in} = 0$), $F_{S,j} = F_S/4$, so $F_D/F_{S,j} = 4(0.850) = 3.40$.
**Find:** $X_1 \dots X_4$, $Y_1 \dots Y_4$.
**Assumptions:** as in Problem 1 (immiscible, isothermal, ratio units); each stage is an equilibrium stage.

1. Balance on stage j (Eq. 16-20): $F_D X_{j-1} + F_{S,j}Y_{j,in} = F_D X_j + F_{S,j}Y_j$, giving the stage operating line
$$Y_j = -\frac{F_D}{F_{S,j}}X_j + \left(\frac{F_D}{F_{S,j}}X_{j-1} + Y_{j,in}\right)$$
a line of slope −3.40 starting at $(X_{j-1}, 0)$ on the X axis. Its intersection with the equilibrium curve gives the stage outlets.

2. Solve each stage in turn (numerical intersection with $Y_{eq}(X)$ from Problem 1):

| Stage | $X_j$ | $Y_j$ | $x_j$ (wt frac) | $y_j$ (wt frac) |
|---|---|---|---|---|
| 1 | 0.0866 | 0.1475 | 0.0797 | 0.1285 |
| 2 | 0.0580 | 0.0971 | 0.0548 | 0.0885 |
| 3 | 0.0391 | 0.0645 | 0.0376 | 0.0606 |
| 4 | 0.0263 | 0.0432 | 0.0257 | 0.0414 |

![Cross-flow McCabe–Thiele diagram: four lines of slope −3.40](fig/practice-immiscible-extraction-P2-sol.svg)

3. Compare: with the same solvent the countercurrent cascade of Problem 1 reached $x_N = 0.005$ in 4 stages, while cross-flow leaves $x_4 = 0.0257$. Cross-flow is less efficient because fresh solvent never meets the most concentrated feed while the extract leaving each stage is only in equilibrium with that stage's raffinate.

These values agree with the slide's graph ($Y_1 \approx 0.147$, $X_4 \approx 0.026$).`,
        answer: String.raw`$X_4 = 0.0263$ ($x_4 = 0.0257$); $Y_1 = 0.148$, $Y_2 = 0.097$, $Y_3 = 0.065$, $Y_4 = 0.043$ kg acid/kg butanol; much poorer than countercurrent.` } ] },

    { id: "practice-immiscible-extraction-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P3a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Kremser equation for dilute extraction (acetic acid into 3-heptanol)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides: Immiscible Extraction, pp. 22–23 (Problem D4); Wankat 3e, Problem 13.D4*`,
        text: String.raw`Acetic acid is extracted from water into 3-heptanol at 25 °C, where (wt frac acid in solvent)/(wt frac acid in water) = 0.828. The aqueous feed is 550 lb/h with 0.0097 wt frac acid and must leave at 0.00046 wt frac. The solvent flow is 700 lb/h and enters with 0.0003 wt frac acid. Using the Kremser equation, find the outlet solvent concentration and the number of equilibrium stages. Is this an economical way to extract acetic acid?`,
        solution: String.raw`**Given:** R = 550 lb/h, E = 700 lb/h, $x_0 = 0.0097$, $x_N = 0.00046$, $y_{N+1} = 0.0003$, $m = 0.828$, b = 0.
**Find:** $y_1$, N.
**Assumptions:** dilute, so total flows R and E are constant and weight fractions can be used directly; immiscible phases; linear equilibrium; isothermal (all Kremser assumptions).

1. External balance: $Ey_1 + Rx_N = Ey_{N+1} + Rx_0$
$$y_1 = y_{N+1} + \frac{R}{E}(x_0 - x_N) = 0.0003 + \frac{550}{700}(0.0097 - 0.00046) = 0.00756$$

2. Extraction factor $mE/R = 0.828(700)/550 = 1.0538$, so $R/(mE) = 0.9489$. Extract in equilibrium with the entering feed: $y_1^* = mx_0 = 0.828(0.0097) = 0.008032$.

3. Kremser (Wankat Eq. 13-11b):
$$N = \frac{\ln\left[\left(1 - \frac{mE}{R}\right)\frac{y_{N+1} - y_1^*}{y_1 - y_1^*} + \frac{mE}{R}\right]}{\ln\frac{R}{mE}} = \frac{\ln\left[(-0.0538)\frac{-0.007732}{-0.000472} + 1.0538\right]}{\ln 0.9489} = \frac{\ln 0.1715}{-0.05242} = 33.6$$

4. Check by stepping (y = 0.828x, operating slope R/E = 0.786): 34 steps are needed, confirming the Kremser value.

![Nearly parallel operating and equilibrium lines need 34 stages](fig/practice-immiscible-extraction-P3-sol.svg)

5. Economics: no. The extraction factor is only 1.05, so the operating and equilibrium lines are almost parallel and about 34 stages are needed; the extract leaves at only 0.75 wt % acid, so a large amount of 3-heptanol must be recovered (by distillation) per kg of acid. A solvent with a larger $K_d$ (or a larger E) would be needed.

**Book answer:** $y_{out} = 0.0075$, N = 33.6 ✓.`,
        answer: String.raw`$y_1 = 0.0075$ wt frac; N = 33.6 → 34 equilibrium stages; not economical (mE/R ≈ 1.05, very dilute extract).` } ] },

    { id: "practice-immiscible-extraction-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P4a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Dilute two-solute countercurrent extraction (oleic and linoleic acids)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides: Immiscible Extraction, pp. 28–30 (Problem D6); Wankat 3e, Problem 13.D9*`,
        text: String.raw`A 1500 kg/h feed of methylcellosolve + 10 % water contains 0.003 wt frac linoleic acid and 0.0025 wt frac oleic acid. It is extracted in a simple countercurrent cascade with 750 kg/h of pure heptane. 99 % of the oleic acid must be recovered in the extract. Distribution coefficients (heptane/methylcellosolve, mass-ratio units): oleic 4.14, linoleic 2.17. Find N and the recovery of linoleic acid in the extract.`,
        solution: String.raw`**Given:** R = 1500 kg/h, E = 750 kg/h, $y_{N+1} = 0$; oleic $x_0 = 0.0025$, $m_o = 4.14$; linoleic $x_0 = 0.003$, $m_L = 2.17$.
**Find:** N, linoleic recovery.
**Assumptions:** very dilute (constant R and E, mass ratios ≈ mass fractions), solvents immiscible, solutes independent, linear equilibrium, so the Kremser equation applies to each solute with the same N.

1. Oleic acid fixes N. 99 % into the extract:
$$Ey_{1,o} = 0.99Rx_{0,o} \Rightarrow y_{1,o} = \frac{0.99(0.0025)(1500)}{750} = 0.00495$$

2. $m_oE/R = 4.14(750)/1500 = 2.07$; $y_1^* = m_ox_0 = 0.01035$.
$$N = \frac{\ln\left[(1 - 2.07)\frac{0 - 0.01035}{0.00495 - 0.01035} + 2.07\right]}{\ln(1/2.07)} = \frac{\ln 0.0191}{-0.7275} = 5.44$$

3. Linoleic acid with the same N: $R/(m_LE) = 1500/(2.17 \times 750) = 0.9217$, $y_1^* = 2.17(0.003) = 0.00651$. Kremser (Eq. 13-11a):
$$\frac{y_1 - y_1^*}{y_{N+1} - y_1^*} = \frac{1 - R/(mE)}{1 - (R/(mE))^{N+1}} = \frac{0.0783}{1 - 0.9217^{6.44}} = 0.1917$$
$$y_1 = 0.00651 - 0.00651(0.1917) = 0.00526$$

4. Recovery of linoleic acid $= Ey_1/(Rx_0) = 750(0.00526)/(1500 \times 0.003) = 0.877$.

If a whole number of stages (6) is built, the oleic recovery rises to 99.3 % and linoleic to 89.0 %.

**Book answer:** N = 5.44, recovery of linoleic acid = 87.7 % ✓.

> Exam tip: in dilute multisolute problems, the solute with the specified recovery fixes N; every other solute is then a "simulation" problem with that N.`,
        answer: String.raw`N = 5.44 (→ 6 stages); linoleic acid recovery in the extract = 87.7 %.` } ] },

    { id: "practice-immiscible-extraction-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P5a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Temperature-swing extraction and back-extraction (benzene, Kremser)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides: Immiscible Extraction, pp. 31–32 (Problem D9); Wankat 3e, Problem 13.D15*`,
        text: String.raw`Acetic acid is extracted from water with benzene, and a temperature shift regenerates the benzene and returns the acid to a water phase (figure). Column 1 (40 °C, N = 11): aqueous feed R = 100 kg/h with $x_0 = 0.01$ wt frac acid, raffinate $x_N = 0.0008$; benzene E = 1000 kg/h circulates between the columns. Column 2 (25 °C, N = 9): pure water R′ enters ($x'_0 = 0$) and strips the acid from the benzene. Distribution coefficients (wt frac acid in benzene / wt frac in water): 0.1022 at 40 °C, 0.0328 at 25 °C.

![Two-column temperature-swing extraction flowsheet](fig/practice-immiscible-extraction-P5.svg)

a. Find $y_1$ and $y_{N+1}$ for column 1.
b. Find R′ and $x'_N$ for column 2.
c. Is this a practical way to concentrate the acid?`,
        solution: String.raw`**Assumptions:** dilute, immiscible, constant flows, linear equilibrium, so the Kremser equation is valid in weight fractions; benzene flow is the same in both columns.

**(a) Column 1 (40 °C).** $m = 0.1022$, $R/(mE) = 100/102.2 = 0.97847$, $y_1^* = mx_0 = 0.001022$.

1. Kremser (Eq. 13-11a):
$$\frac{y_1 - y_1^*}{y_{N+1} - y_1^*} = \frac{1 - 0.97847}{1 - 0.97847^{12}} = 0.09366 \Rightarrow y_1 = 0.09366\,y_{N+1} + 0.000926$$
2. External balance: $Ey_{N+1} + Rx_0 = Ey_1 + Rx_N \Rightarrow y_{N+1} = y_1 - \frac{100}{1000}(0.01 - 0.0008) = y_1 - 0.00092$
3. Solving the two equations: $y_1 = 0.000927$, $y_{N+1} = 6.92 \times 10^{-6}$.

**(b) Column 2 (25 °C).** The benzene enters at $y_1 = 0.000927$ and must leave at $6.92 \times 10^{-6}$ (it is recycled to column 1); $m = 0.0328$, N = 9, $x'_0 = 0$ so $y^* = 0$.

1. Kremser with the benzene as the stream being stripped:
$$\frac{6.92 \times 10^{-6} - 0}{0.000927 - 0} = 0.007470 = \frac{1 - R'/(mE)}{1 - (R'/(mE))^{10}},\quad mE = 32.8\ \mathrm{kg/h}$$
2. Trial and error (numerical root): R′ = 50.35 kg/h (R′/(mE) = 1.535).

| R′ | 50 | 50.35 | 50.5 | 60 |
|---|---|---|---|---|
| RHS | 0.00786 | 0.00747 | 0.00731 | 0.00198 |

3. Acid balance: $x'_N = E(y_{in} - y_{out})/R' = 1000(0.000927 - 0.0000069)/50.35 = 0.0183$.

**(c)** Technically it works (0.01 → 0.0183, a 1.8-fold concentration), but it is not practical: the distribution coefficients are tiny and change little with temperature, so 1000 kg/h of benzene must be pumped, heated and cooled to concentrate 100 kg/h of feed by less than a factor of two; benzene is also carcinogenic. A solvent with large K and a large temperature (or pH) shift would be needed, as in commercial citric-acid processes.

**Book answer:** (a) $y_1 = 0.00092693$, $y_{N+1} = 6.929 \times 10^{-6}$; (b) R′ = 50.35, $x'_N = 0.0183$ ✓.`,
        answer: String.raw`(a) $y_1 = 9.27 \times 10^{-4}$, $y_{N+1} = 6.9 \times 10^{-6}$; (b) R′ = 50.35 kg/h, $x'_N = 0.0183$; (c) not practical: huge benzene circulation for <2× concentration.` } ] },

    { id: "practice-immiscible-extraction-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P6a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Benzoic acid from water into benzene (Kremser in mole fractions)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides: Immiscible Extraction, p. 33 (first problem; Wankat 2nd ed.)`,
        text: String.raw`A water solution with 0.005 mole frac benzoic acid (100 mol/h) is extracted countercurrently with 10 mol/h of pure benzene at 6 °C to reduce the water to 0.0001 mole frac benzoic acid. Equilibrium: (mole frac benzoic acid in water) = 0.0446 × (mole frac benzoic acid in benzene). Find the number of equilibrium stages.`,
        solution: String.raw`**Given:** R = 100 mol/h, E = 10 mol/h, $x_0 = 0.005$, $x_N = 0.0001$, $y_{N+1} = 0$; $x = 0.0446y \Rightarrow y = mx$ with $m = 1/0.0446 = 22.42$.
**Find:** N.
**Assumptions:** dilute (constant R and E), immiscible, linear equilibrium, isothermal.

1. Extraction factor $mE/R = 22.42(10)/100 = 2.242$.
2. Outlet extract: $y_1 = (R/E)(x_0 - x_N) = 10(0.0049) = 0.049$.
3. Kremser in raffinate form, with $x_N^* = y_{N+1}/m = 0$:
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - mE/R}{1 - (mE/R)^{N+1}} \Rightarrow N = \frac{\ln\left[\left(1 - \frac{R}{mE}\right)\frac{x_0}{x_N} + \frac{R}{mE}\right]}{\ln(mE/R)} = \frac{\ln[(0.554)(50) + 0.446]}{\ln 2.242} = 4.13$$
4. Check: $y_1 = 0.049$ is not very dilute, so a ratio-unit stepping (X = x/(1−x), Y = y/(1−y), $F_D = 99.5$, $F_S = 10$) was also done: stages give X = 0.00209, 0.00087, 0.00034, 0.000105, … → N = 4.05. Both methods give just over 4 stages.

**Result:** about 4.1 equilibrium stages → 5 real equilibrium stages to guarantee 0.0001 (4 stages leave $x \approx 0.000105$).`,
        answer: String.raw`mE/R = 2.24; N ≈ 4.1 equilibrium stages (ratio-unit check 4.05); $y_1 = 0.049$.` } ] },

    { id: "practice-immiscible-extraction-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P7a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Two solvent feeds: optimum feed stage for the impure solvent (ratio units)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides: Immiscible Extraction, p. 33 (Problem D3, "glop"; Wankat 2nd ed.)`,
        text: String.raw`"Glop" is extracted from water into toluene (completely immiscible). The aqueous feed, $F_D$ = 1000 kg/h total, contains 15 wt % glop and must leave with 2 wt %. Available: 1466.67 kg/h of pure toluene ($F_{S,1}$, $Y_{N+1} = 0$) and $F_{S,2}$ = 671.73 kg/h of toluene containing 2 wt % glop. Equilibrium: y = 0.5x (weight fractions). Find the optimum feed location for $F_{S,2}$ and the total number of stages.`,
        solution: String.raw`**Given:** water (glop-free) $F_D = 0.85(1000) = 850$ kg/h; $X_0 = 0.15/0.85 = 0.1765$, $X_N = 0.02/0.98 = 0.02041$; $F_{S1} = 1466.67$ kg/h toluene, $Y_{N+1} = 0$; $F_{S2}$: toluene $= 0.98(671.73) = 658.3$ kg/h with $Y_{F2} = 0.02/0.98 = 0.02041$.
**Assumptions:** immiscible, isothermal; concentrations up to 15 % so use mass ratios (constant $F_D$, $F_S$ in each section). The pure solvent enters at the raffinate-outlet end (stage N) and the impure solvent part way up, since $Y_{F2}$ lies between the extract concentrations at the two ends (do not mix streams of different composition).

1. Equilibrium in ratios: $y = 0.5x$ with $x = X/(1+X)$, $Y = y/(1-y)$.
2. Overall glop balance (stage 1 = aqueous-feed end):
$$F_DX_0 + F_{S2}Y_{F2} = F_DX_N + (F_{S1} + F_{S2})Y_1 \Rightarrow Y_1 = \frac{150 + 13.43 - 17.35}{2125.0} = 0.06875$$
3. Operating lines:
   - top section (between stage 1 and the $F_{S2}$ stage), slope $F_D/(F_{S1}+F_{S2}) = 850/2125 = 0.400$, through $(X_0, Y_1)$;
   - bottom section, slope $F_D/F_{S1} = 850/1466.67 = 0.580$, through $(X_N, 0)$.
   They meet on the feed line $Y = Y_{F2} = 0.0204$ at X = 0.0556 (both lines give the same point, a check on the balance).
4. Step from $(X_0, Y_1)$, switching to the bottom line as soon as a step crosses the feed line (optimum feed):

| Stage | Y | X (eq.) | line used next |
|---|---|---|---|
| 1 | 0.0687 | 0.1476 | top |
| 2 | 0.0572 | 0.1214 | top |
| 3 | 0.0467 | 0.0980 | top |
| 4 | 0.0374 | 0.0776 | top |
| 5 | 0.0292 | 0.0602 | top |
| 6 | 0.0222 | 0.0455 | bottom ($F_{S2}$ enters stage 6) |
| 7 | 0.0145 | 0.0295 | bottom |
| 8 | 0.00525 | 0.0106 | — |

Fraction of stage 8 $= (0.0295 - 0.0204)/(0.0295 - 0.0106) = 0.48$, so N = 7.5.

![Two operating lines meeting on the feed line Y = 0.0204; 7.5 stages](fig/practice-immiscible-extraction-P7-sol.svg)

5. Check of other feed stages: feeding $F_{S2}$ on stage 5 needs 7.6 stages, on stage 4 8.4, on stage 3 11.1, so stage 6 is optimum.

**Result:** N ≈ 7.5 → 8 equilibrium stages; feed the 2 % solvent to stage 6 counted from the aqueous-feed end (the 2nd–3rd stage from the pure-toluene end).`,
        answer: String.raw`Optimum: impure toluene to stage 6 (from the water-feed end); N ≈ 7.5 → 8 stages; $Y_1 = 0.0687$ kg glop/kg toluene.` } ] },

    { id: "practice-immiscible-extraction-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P8a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Countercurrent vs cross-flow: acid from toluene into water", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides: Immiscible Extraction, p. 34 (Problem D8; Wankat 2nd ed.)`,
        text: String.raw`200 mol/h of a toluene solution containing 0.05 mole frac of an acid is extracted with water recycled from a distillation column; the water contains 0.002 mole frac acid and the total water flow is 30 mol/h. At 1 atm and 25 °C toluene and water are immiscible and (mole frac acid in toluene phase) = 0.0846 × (mole frac acid in water phase).
a. If the outlet toluene must contain 0.001 mole frac acid, how many stages are needed in a countercurrent cascade?
b. If the water is split equally among five cross-flow stages, what is the outlet toluene concentration?
c. Which cascade is more effective?`,
        solution: String.raw`**Given:** toluene (acid-free) $F_D = 0.95(200) = 190$ mol/h; water $F_S = 0.998(30) = 29.94$ mol/h with $Y_{in} = 0.002/0.998 = 0.002004$; $X_0 = 0.05/0.95 = 0.05263$, $X_N = 0.001/0.999 = 0.001001$. Here toluene is the diluent (raffinate) and water the solvent. Equilibrium $y_{water} = x_{tol}/0.0846 = 11.82x$.
**Assumptions:** immiscible, isothermal. The extract will be about 25 mol % acid, far from dilute, so use mole ratios: $Y_{eq} = y/(1-y)$ with $y = 11.82X/(1+X)$.

**(a) Countercurrent.**
1. Operating line slope $F_D/F_S = 190/29.94 = 6.346$; balance: $Y_1 = Y_{in} + 6.346(0.05263 - 0.001001) = 0.3297$ ($y_1 = 0.248$).
2. Step from $(X_0, Y_1)$:

| Stage | Y | X (eq.) |
|---|---|---|
| 1 | 0.3297 | 0.02142 |
| 2 | 0.1316 | 0.00994 |
| 3 | 0.0587 | 0.00471 |
| 4 | 0.0256 | 0.00211 |
| 5 | 0.00906 | 0.00076 |

Fraction of stage 5 = (0.00211 − 0.00100)/(0.00211 − 0.00076) = 0.82 → N = 4.8.

![Countercurrent stepping in mole ratios: 4.8 stages](fig/practice-immiscible-extraction-P8-sol.svg)

**(b) Five-stage cross-flow**, $F_{S,j} = 29.94/5 = 5.988$ mol/h each with $Y_{in} = 0.002$; stage line slope $-F_D/F_{S,j} = -31.7$. Solving $190(X_{j-1} - X_j) = 5.988(Y_j - 0.002)$ with equilibrium for each stage:

| Stage | X | Y | x |
|---|---|---|---|
| 1 | 0.03330 | 0.615 | 0.0322 |
| 2 | 0.02237 | 0.349 | 0.0219 |
| 3 | 0.01550 | 0.220 | 0.0153 |
| 4 | 0.01094 | 0.147 | 0.0108 |
| 5 | 0.00782 | 0.101 | 0.00776 |

![Five cross-flow stage lines of slope −31.7](fig/practice-immiscible-extraction-P8-sol2.svg)

Outlet toluene: x = 0.0078 mole frac.

**(c)** With the same water, countercurrent reaches x = 0.001 (98.1 % of the acid removed) in fewer than 5 stages, while five cross-flow stages leave x = 0.0078 (85 % removed). Countercurrent is far more effective, because the fresh water contacts the most extracted toluene and the outgoing water leaves in contact with the richest feed.`,
        answer: String.raw`(a) N ≈ 4.8 → 5 stages; (b) outlet toluene x ≈ 0.0078 mole frac; (c) countercurrent (98 % vs 85 % removal with the same water).` } ] },

    { id: "practice-immiscible-extraction-P9", q: 9, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P9a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Solvent rate for a given number of stages (Kremser, trial)", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 13.D7*`,
        text: String.raw`An extraction column with 30 equilibrium stages extracts acetic acid from water into 3-heptanol at 25 °C (equilibrium as in Problem 3, y = 0.828x in weight fractions). The aqueous feed is 500 kg/h with 0.011 wt frac acid; the exit water must contain 0.00037 wt frac. The entering 3-heptanol contains 0.0002 wt frac acid. Total flow rates may be taken as constant. What solvent flow rate is needed?`,
        solution: String.raw`**Given:** R = 500 kg/h, N = 30, $x_0 = 0.011$, $x_N = 0.00037$, $y_{N+1} = 0.0002$, m = 0.828.
**Find:** E.
**Assumptions:** dilute, constant R and E, immiscible, linear equilibrium (Kremser valid).

1. Raffinate-form Kremser, with $x_N^* = y_{N+1}/m = 0.0002/0.828 = 0.0002415$:
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{0.00037 - 0.0002415}{0.011 - 0.0002415} = 0.01194 = \frac{1 - mE/R}{1 - (mE/R)^{31}}$$
2. Solve for the extraction factor A = mE/R (bisection): A = 1.0593.

| E (kg/h) | 620 | 630 | 639.7 | 650 |
|---|---|---|---|---|
| A = mE/R | 1.027 | 1.043 | 1.059 | 1.076 |
| RHS | 0.0211 | 0.0159 | 0.0119 | 0.0087 |

3. E = A R/m = 1.0593(500)/0.828 = 639.7 kg/h.
4. Outlet extract: $y_1 = y_{N+1} + (R/E)(x_0 - x_N) = 0.0002 + 0.7816(0.01063) = 0.0085$.
5. Check: N from Eq. 13-11b with E = 639.7 kg/h returns 30.0 ✓.

**Book answer:** E = 639.6 kg/h ✓.`,
        answer: String.raw`E ≈ 640 kg/h of 3-heptanol (mE/R = 1.059); $y_1 = 0.0085$.` } ] },

    { id: "practice-immiscible-extraction-P10", q: 10, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P10a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Dilute fractional extraction: stages for 95 % recovery (abietic acid)", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 13.D11* (fractional extraction, Fig. 13-5)`,
        text: String.raw`In the fractional extractor of Wankat Fig. 13-5, abietic acid is separated from other acids. Solvent 1, pure heptane, enters the bottom at $\bar{E}$ = 1000 kg/h; solvent 2, pure methylcellosolve + 10 % water, enters the top at R = 2500 kg/h. The feed, 1 kg/h of 5 wt % abietic acid in solvent 2 (other acids only traces), enters stage 6 (stages numbered from the top). 95 % of the abietic acid must be recovered in the bottom raffinate. The solvents are immiscible and the system very dilute; $K_d$ (abietic acid, heptane/methylcellosolve) = 1.57. Find N.`,
        solution: String.raw`> Fractional extraction (two solvents, feed in the middle) is not in the current slides; the method is the same McCabe–Thiele/Kremser balance used in class, applied to two sections.

**Given:** R = 2500, $\bar{R} = R + F = 2501$ kg/h (feed is dissolved in solvent 2), $E = \bar{E} = 1000$ kg/h, $x_0 = 0$, $y_{N+1} = 0$, feed solute $Fz = 0.05$ kg/h, $N_F = 6$, K = 1.57.
**Find:** N for 95 % recovery in the bottom stream.
**Assumptions:** very dilute, immiscible, constant flows in each section, linear equilibrium y = 1.57x, solute independent of the trace acids.

1. Direction test: $K_dE/R = 1.57(1000)/2500 = 0.628 < 1$, so abietic acid moves down with solvent 2, as wanted.
2. External balances: bottom raffinate $\bar{R}x_N = 0.95(0.05) = 0.0475$ kg/h → $x_N = 1.899 \times 10^{-5}$; top extract $Ey_1 = 0.0025$ kg/h → $y_1 = 2.5 \times 10^{-6}$.
3. Operating lines:
   - top section (stages 1–5): $y_{j+1} = (R/E)x_j + y_1 = 2.5x_j + 2.5 \times 10^{-6}$;
   - bottom section (stage 6 down): $y_{k+1} = (\bar{R}/\bar{E})(x_k - x_N) = 2.501(x_k - 1.899 \times 10^{-5})$.
4. Step from the top (equilibrium x = y/1.57), switching lines after the feed stage 6:

| Stage | $y_j \times 10^5$ | $x_j \times 10^5$ |
|---|---|---|
| 1 | 0.250 | 0.159 |
| 2 | 0.648 | 0.413 |
| 3 | 1.282 | 0.817 |
| 4 | 2.291 | 1.459 |
| 5 | 3.899 | 2.483 |
| 6 (feed) | 6.458 | 4.113 |
| 7 | 5.538 | 3.527 |
| 8 | 4.072 | 2.593 |
| 9 | 1.736 | 1.106 |

The solute peaks at the feed stage and falls in both directions. $x_N = 1.899 \times 10^{-5}$ is passed during stage 9: fraction = (2.593 − 1.899)/(2.593 − 1.106) = 0.47 → N = 8.5.

![Fractional extraction McCabe–Thiele diagram for abietic acid: 8.5 stages](fig/practice-immiscible-extraction-P10-sol.svg)

5. Check by an exact stage-by-stage simulation (tridiagonal balances) with feed on stage 6: bottom recovery is 95.3 % with N = 8 and 94.8 % with N = 9. More bottom stages lower the abietic-acid recovery (the heptane strips some of it upward) but purify the bottom product of the other acids, so 95 % fixes N ≈ 8.5.

**Book answer:** N ≈ 8.5 equilibrium stages ✓.`,
        answer: String.raw`N ≈ 8.5 equilibrium stages (feed on stage 6); 8 stages give 95.3 % and 9 stages 94.8 % recovery.` } ] },

    { id: "practice-immiscible-extraction-P11", q: 11, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P11a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Single equilibrium stage; converting a concentration-based K to mole fractions", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 13.D38* (data from Example 13-5)`,
        text: String.raw`Benzoic acid is extracted from water into toluene in one equilibrium stage. The toluene enters pure; the water (1.0 kmol/h) contains 0.00023 mole frac benzoic acid; the toluene flow is 0.06 kmol/h. Water and toluene are completely immiscible. Data (Example 13-5): $K = C_{extract}/C_{raffinate}$ = 20.8 (kmol benzoic acid/m³ of each phase); water ρ = 998 kg/m³, M = 18.02; toluene ρ = 865 kg/m³, M = 92.14. Find the outlet mole fractions of benzoic acid in the raffinate and extract.`,
        solution: String.raw`**Given:** F = 1.0 kmol/h, $x_0 = 0.00023$, S = 0.06 kmol/h, $y_S = 0$, $K_C = 20.8$.
**Find:** $x_1$, $y_1$.
**Assumptions:** dilute (phase molar densities equal those of the pure liquids), immiscible, one equilibrium stage, constant flows.

1. Convert K to mole fractions. For a dilute phase, $C = x\,c_{total}$ with $c_{total} = \rho/M$:
$$c_w = 998/18.02 = 55.38\ \mathrm{kmol/m^3},\qquad c_t = 865/92.14 = 9.388\ \mathrm{kmol/m^3}$$
$$K_x = \frac{y}{x} = K_C\frac{c_w}{c_t} = 20.8 \times \frac{55.38}{9.388} = 122.7$$
2. Solute balance with $y_1 = K_xx_1$:
$$Fx_0 = Fx_1 + Sy_1 = x_1(F + SK_x) \Rightarrow x_1 = \frac{1.0(0.00023)}{1.0 + 0.06(122.7)} = \frac{0.00023}{8.362} = 2.75 \times 10^{-5}$$
3. $y_1 = 122.7(2.75 \times 10^{-5}) = 3.37 \times 10^{-3}$. Fraction extracted $= Sy_1/(Fx_0) = 88 %$.

**Book answer:** $x_{out} = 0.0000275$ ✓ and $y_{out} = 0.0037$. The extract value does not close the balance: $0.06 \times 0.0037 = 2.2 \times 10^{-4}$ would exceed the $2.03 \times 10^{-4}$ kmol/h that leaves the water, so 0.00337 is the consistent value (the book figure appears to be a rounding slip). The book's warning applies: using K = 20.8 directly in mole fractions gives the wrong $x_{out} = 0.000102$.`,
        answer: String.raw`$K_x = 122.7$; $x_1 = 2.75 \times 10^{-5}$, $y_1 = 3.37 \times 10^{-3}$ mole frac (88 % extracted).` } ] },

    { id: "practice-immiscible-extraction-P12", q: 12, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P12a", label: "", marks: "", topic: "immiscible-extraction",
        sub: "Fractional extraction of m- and o-xylene with two solvents", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 13.E1* (fractional extractor, Fig. 13-5; Table 13-3)`,
        text: String.raw`A liquid feed of 48 wt % m-xylene and 52 wt % o-xylene (no solvent) is separated in a fractional extractor at 25 °C. Solvent 1, β,β′-thiodipropionitrile (TDPN), enters the bottom and solvent 2, n-hexane, the top; per kg of feed, 200 kg of TDPN and 20 kg of hexane are used, both pure. $K_d$ (wt frac in TDPN / wt frac in hexane): m-xylene 0.050, o-xylene 0.150. Desired: 92 % of the o-xylene in the TDPN (top) product and 94 % of the m-xylene in the hexane (bottom) product. Find the outlet compositions, N and $N_F$; adjust the m-xylene recovery if necessary.`,
        solution: String.raw`> Fractional extraction is not in the current slides; it uses the class McCabe–Thiele/Kremser balances in two sections.

**Given (basis 1 kg feed):** E = 200 kg TDPN (up), R = 20 kg hexane (down), stage 1 at the top (hexane inlet, TDPN outlet).
**Assumptions:** dilute (xylenes ≤ 4.4 wt % in the column, so constant E and R; the 1 kg of feed is neglected in the flows), immiscible solvents, independent solutes, linear equilibrium.

1. Direction test (Eq. 13-14): o-xylene $K E/R = 0.15(200)/20 = 1.5 > 1$ → goes up into TDPN; m-xylene $0.05(10) = 0.5 < 1$ → goes down with hexane. The separation is feasible.
2. Specified outlets (external balances): o-xylene to the top $0.92(0.52) = 0.478$ kg → $y_{o,1} = 0.00239$; m-xylene to the bottom $0.94(0.48) = 0.451$ kg → $x_{m,N} = 0.0226$.
3. This is "Case 3" (two recoveries specified): both N and $N_F$ must be found by trial. For each trial (N, $N_F$) the stage balances
$$Rx_{j-1} + Ey_{j+1} + Fz\,\delta_{j,N_F} = Rx_j + Ey_j,\qquad y_j = K x_j$$
were solved exactly for each solute (equivalent to stepping both McCabe–Thiele diagrams). Recoveries:

| N | $N_F$ | o-xylene up | m-xylene down |
|---|---|---|---|
| 8 | 3 | 93.7 % | 87.7 % |
| 8 | 4 | 89.2 % | 93.9 % |
| 9 | 4 | 92.8 % | 93.8 % |
| 10 | 4 | 95.3 % | 93.8 % |
| 10 | 5 | 92.3 % | 96.9 % |

4. The m-xylene recovery depends almost only on the number of stages above the feed: with $N_F = 4$ it is fixed at 93.8–93.9 %, just below 94 %, while the o-xylene recovery is set by the stages below the feed. Hence: **N = 9, feed on stage 4 from the top**, with the m-xylene recovery relaxed to 93.8 % (the fractional value for 92 % o-xylene is N ≈ 8.8). Meeting both 92 % and 94 % strictly needs N = 10 with $N_F = 5$.
5. Stage profile for N = 9, $N_F$ = 4 (hexane-phase weight fractions):

| Stage | 1 | 2 | 3 | 4 (feed) | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| $x_o$ | 0.0161 | 0.0268 | 0.0340 | 0.0387 | 0.0246 | 0.0152 | 0.0089 | 0.0047 | 0.0019 |
| $x_m$ | 0.0030 | 0.0089 | 0.0207 | 0.0443 | 0.0436 | 0.0422 | 0.0394 | 0.0338 | 0.0225 |

![o-xylene McCabe–Thiele: profile for N = 9, feed on stage 4](fig/practice-immiscible-extraction-P12-sol.svg)

![m-xylene McCabe–Thiele: profile for N = 9, feed on stage 4](fig/practice-immiscible-extraction-P12-sol2.svg)

6. Outlets: TDPN product $y_o = 0.00241$, $y_m = 0.000148$ (solvent-free: 94 % o-xylene); hexane product $x_m = 0.0225$, $x_o = 0.0019$ (solvent-free: 92.4 % m-xylene).

**Book answer:** ~93.5 % m-xylene recovery with 8 stages, feed on stage 4. The exact simulation agrees on the feed stage and on a m-xylene recovery just below 94 %, but needs about 8.8 → 9 stages for 92 % o-xylene (8 stages give 89 %); the book value comes from a graphical solution with fractional stages.`,
        answer: String.raw`N ≈ 9 (8.8) equilibrium stages, feed on stage 4 from the hexane end; m-xylene recovery reduced to ≈ 93.8 %; TDPN product 94 % o-xylene, hexane product 92 % m-xylene (solvent-free).` } ] },

    { id: "practice-immiscible-extraction-P13", q: 13, section: "F", compulsory: false, stem: String.raw`Furfural is to be removed from water by countercurrent extraction with methyl isobutyl ketone (MIBK) at 25 °C.`,
      parts: [ { id: "practice-immiscible-extraction-P13a", label: "(a)", marks: "12", topic: "immiscible-extraction",
        sub: "Derivation of the Kremser equation for dilute countercurrent extraction", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); method of Wankat 3e Section 13.2.2`,
        text: String.raw`State the assumptions under which the Kremser equation can be used for a countercurrent extractor, and derive it in the form
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - mE/R}{1 - (mE/R)^{N+1}},\qquad x_N^* = \frac{y_{N+1} - b}{m}$$
where stage 1 is the feed end, R and E are the raffinate and extract flow rates, and equilibrium is $y = mx + b$. Also give N explicitly.`,
        solution: String.raw`**Assumptions:**
1. Isothermal and isobaric operation; heat of mixing negligible.
2. Diluent and solvent immiscible.
3. Dilute solution, so total flows R and E are constant from stage to stage.
4. Linear equilibrium $y = mx + b$ (constant m and b over the range).
5. Equilibrium stages.

**Derivation.**
1. Solute balance on stage j (raffinate enters from j − 1, extract from j + 1):
$$Rx_{j-1} + Ey_{j+1} = Rx_j + Ey_j$$
2. Substitute equilibrium $y_j = mx_j + b$, $y_{j+1} = mx_{j+1} + b$ (b cancels) and divide by R, with the extraction factor $A = mE/R$:
$$x_{j-1} - (1 + A)x_j + Ax_{j+1} = 0$$
3. Stage N receives the entering solvent $y_{N+1}$. Define a fictitious $x_{N+1} = (y_{N+1} - b)/m = x_N^*$ (the raffinate that would be in equilibrium with the entering solvent); then stage N obeys the same equation, so it holds for j = 1 … N with known ends $x_0$ and $x_{N+1} = x_N^*$.
4. This linear difference equation has characteristic equation $Ar^2 - (1 + A)r + 1 = 0$, roots r = 1 and r = 1/A, so for A ≠ 1
$$x_j = C_1 + C_2A^{-j}$$
5. End conditions: $x_0 = C_1 + C_2$ and $x_N^* = C_1 + C_2A^{-(N+1)}$. Then
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{A^{-N} - A^{-(N+1)}}{1 - A^{-(N+1)}} = \frac{A - 1}{A^{N+1} - 1} = \frac{1 - A}{1 - A^{N+1}}$$
which is the required form.
6. Solving for N: with $Q = (x_0 - x_N^*)/(x_N - x_N^*)$, $A^{N+1} = 1 + (A - 1)Q$, so
$$N = \frac{\ln\left[\left(1 - \frac{R}{mE}\right)\frac{x_0 - x_N^*}{x_N - x_N^*} + \frac{R}{mE}\right]}{\ln(mE/R)}$$
7. Special case A = 1: the roots coincide, $x_j = C_1 + C_2j$ (operating and equilibrium lines parallel) and $N = (x_0 - x_N)/(x_N - x_N^*)$.

> Exam tip: the extraction factor mE/R plays the role of mV/L in stripping (replace L/V by R/E); for good recovery it must exceed 1.`,
        answer: String.raw`$x_j = C_1 + C_2(mE/R)^{-j}$ with $x_{N+1} = x_N^*$ gives the Kremser form; $N = \ln[(1 - R/mE)(x_0 - x_N^*)/(x_N - x_N^*) + R/mE]/\ln(mE/R)$.` },
      { id: "practice-immiscible-extraction-P13b", label: "(b)", marks: "23", topic: "immiscible-extraction",
        sub: "Minimum solvent and stages by Kremser (furfural–water–MIBK)", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); $K_d$ from Wankat Table 13-3`,
        text: String.raw`An aqueous stream of 2500 kg/h containing 1.5 wt % furfural is extracted with pure MIBK. 99 % of the furfural must be removed. Equilibrium (Wankat Table 13-3): y = 7.10x (wt frac furfural in MIBK / in water). Treat the system as dilute and immiscible.
(i) Find the minimum solvent rate.
(ii) For E = 1.5 $E_{min}$ find the outlet extract concentration and the number of equilibrium stages by the Kremser equation; check with a McCabe–Thiele diagram.
(iii) What removal do you get with the next whole number of stages?`,
        solution: String.raw`**Given:** R = 2500 kg/h, $x_0 = 0.015$, $x_N = 0.01x_0 = 0.00015$, $y_{N+1} = 0$, m = 7.10.
**Assumptions:** dilute (constant R, E), immiscible, linear equilibrium through the origin, isothermal.

**(i) Minimum solvent.** With infinitely many stages the operating line touches the equilibrium line. Since $mE/R < 1$ near the minimum, the pinch is at the feed end: the extract leaves in equilibrium with the feed, $y_{1,max} = mx_0 = 0.1065$.
$$E_{min} = \frac{R(x_0 - x_N)}{y_{1,max}} = \frac{2500(0.01485)}{0.1065} = 348.6\ \mathrm{kg/h}$$

**(ii)** E = 1.5(348.6) = 522.9 kg/h.
1. $y_1 = R(x_0 - x_N)/E = 2500(0.01485)/522.9 = 0.0710$.
2. $A = mE/R = 7.10(522.9)/2500 = 1.485$; $x_N^* = 0$.
$$N = \frac{\ln[(1 - 1/1.485)(100) + 1/1.485]}{\ln 1.485} = \frac{\ln 33.33}{0.3954} = 8.87$$
3. McCabe–Thiele check (operating slope R/E = 4.78 through (0.00015, 0) and (0.015, 0.0710)): stepping from the feed end gives x = 0.0100, 0.00663, 0.00437, 0.00284, 0.00181, 0.00112, 0.00065, 0.00034, 0.00013 → the 9th step passes $x_N = 0.00015$ (fraction (0.00034 − 0.00015)/(0.00034 − 0.00013) = 0.9), agreeing with 8.9 stages.

![Furfural–MIBK McCabe–Thiele diagram: 8.9 stages at 1.5 Emin](fig/practice-immiscible-extraction-P13-sol.svg)

**(iii)** With N = 9: $x_N/x_0 = (1 - A)/(1 - A^{10}) = 0.00948$, i.e. 99.05 % removal.

> Note: $y_1 = 7.1$ wt % is near the limit of "dilute"; a mass-ratio check would change N slightly, which is acceptable for a design estimate.`,
        answer: String.raw`(i) $E_{min} = 349$ kg/h; (ii) E = 523 kg/h, $y_1 = 0.071$, N = 8.9 → 9 stages; (iii) 9 stages remove 99.05 %.` } ] },

    { id: "practice-immiscible-extraction-P14", q: 14, section: "F", compulsory: false, stem: String.raw`800 kg/h of water containing 0.8 wt % acetic acid is extracted with a total of 600 kg/h of pure 1-butanol at 26.7 °C. Equilibrium: y = 1.613x (weight fractions, Wankat Table 13-3). Treat the system as dilute and immiscible.`,
      parts: [ { id: "practice-immiscible-extraction-P14a", label: "(a)", marks: "12", topic: "immiscible-extraction",
        sub: "Three-stage cross-flow with equal solvent split", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`The butanol is divided equally among three cross-flow stages. Find the raffinate and extract concentrations leaving each stage and the overall recovery of acid.`,
        solution: String.raw`**Assumptions:** dilute, so R = 800 kg/h and $E_j$ = 200 kg/h are constant; each stage an equilibrium stage; pure solvent to each stage.

1. Stage j balance: $Rx_{j-1} = Rx_j + E_jy_j$ with $y_j = mx_j$:
$$x_j = \frac{R}{R + mE_j}x_{j-1} = \frac{800}{800 + 1.613(200)}x_{j-1} = 0.7126\,x_{j-1}$$
2. Results:

| Stage | $x_j$ | $y_j = 1.613x_j$ |
|---|---|---|
| 1 | 0.005701 | 0.00920 |
| 2 | 0.004063 | 0.00655 |
| 3 | 0.002895 | 0.00467 |

3. Recovery $= 1 - x_3/x_0 = 1 - 0.002895/0.008 = 63.8 %$. Equivalently $x_3/x_0 = 0.7126^3$.

On a McCabe–Thiele diagram each stage is a line of slope $-R/E_j = -4.0$ from $(x_{j-1}, 0)$ to the equilibrium line (see the figure in part b).`,
        answer: String.raw`$x_1, x_2, x_3$ = 0.00570, 0.00406, 0.00290; $y$ = 0.0092, 0.0066, 0.0047; recovery 63.8 %.` },
      { id: "practice-immiscible-extraction-P14b", label: "(b)", marks: "12", topic: "immiscible-extraction",
        sub: "Three-stage countercurrent with the same solvent (Kremser + McCabe–Thiele)", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`The same 600 kg/h of butanol is used in a three-stage countercurrent cascade. Find the outlet raffinate and extract concentrations and the recovery. Show the McCabe–Thiele construction.`,
        solution: String.raw`**Assumptions:** dilute, immiscible, linear equilibrium (Kremser valid), N = 3.

1. $A = mE/R = 1.613(600)/800 = 1.2098$; $x_N^* = 0$.
2. Kremser: $x_3/x_0 = (1 - A)/(1 - A^4) = (-0.2098)/(1 - 2.142) = 0.1837$ → $x_3 = 0.001470$.
3. Balance: $y_1 = (R/E)(x_0 - x_3) = (800/600)(0.008 - 0.00147) = 0.00871$.
4. Recovery $= 1 - 0.1837 = 81.6 %$.
5. McCabe–Thiele check: operating line slope R/E = 1.333 through (0.00147, 0) and (0.008, 0.00871); stepping from the feed end: $x_1 = 0.00540$, $y_2 = 0.00524$, $x_2 = 0.00325$, $y_3 = 0.00237$, $x_3 = 0.00147$ ✓ (exactly 3 steps).

![Countercurrent staircase vs cross-flow stage lines for the same solvent](fig/practice-immiscible-extraction-P14-sol.svg)`,
        answer: String.raw`$x_3 = 0.00147$, $y_1 = 0.0087$, recovery 81.6 % (vs 63.8 % cross-flow).` },
      { id: "practice-immiscible-extraction-P14c", label: "(c)", marks: "11", topic: "immiscible-extraction",
        sub: "Comparing cascades: solvent saved by countercurrent flow", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`How much butanol would a three-stage countercurrent cascade need to give the same recovery as the cross-flow cascade of part (a)? Explain physically why countercurrent operation is better.`,
        solution: String.raw`1. Required: $x_3/x_0 = 1 - 0.638 = 0.362$ with N = 3: solve $(1 - A)/(1 - A^4) = 0.362$ → A = 0.757 → $E = AR/m = 0.757(800)/1.613 = 375$ kg/h.
2. So countercurrent needs 375 kg/h instead of 600 kg/h (38 % less solvent) for the same recovery, and the extract is more concentrated (0.0108 vs an average of 0.0068), which lowers solvent-recovery cost.
3. Why: in countercurrent flow the fresh solvent meets the most-depleted raffinate and the loaded extract leaves in contact with the fresh feed, so the driving force is kept along the whole cascade. In cross-flow each extract leaves in equilibrium with a progressively leaner raffinate, and fresh solvent is "wasted" on the later, dilute stages.`,
        answer: String.raw`≈ 375 kg/h of butanol (A = 0.757) in countercurrent matches the 600 kg/h cross-flow result; countercurrent keeps the driving force at both ends.` } ] },

    { id: "practice-immiscible-extraction-P15", q: 15, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-immiscible-extraction-P15a", label: "(a)", marks: "8", topic: "immiscible-extraction",
        sub: "Solvent selection criteria and selectivity", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); slides: Immiscible Extraction p. 10; Wankat Table 13-3`,
        text: String.raw`List the criteria for choosing an extraction solvent. Using the distribution coefficients in β,β′-thiodipropionitrile (TDPN) / n-hexane at 25 °C (ethylbenzene 0.100, m-xylene 0.050, o-xylene 0.150, p-xylene 0.080), calculate the selectivities and state which pair is hardest to separate by extraction with TDPN.`,
        solution: String.raw`**Solvent selection criteria:**
- High distribution coefficient $K_{d}$ for the desired solute (less solvent, fewer stages).
- High selectivity $\alpha = K_{d,desired}/K_{d,undesired}$ (purity of the extract).
- Low mutual solubility with the diluent (immiscible or easily separated by distillation), and a density difference for fast settling; suitable interfacial tension and viscosity.
- Easy recovery of the solvent from the solute (e.g. large boiling-point difference, no azeotrope).
- Non-toxic, non-corrosive, chemically and thermally stable, environmentally friendly (green), non-flammable, cheap and readily available.

**Selectivities** ($\alpha_{ij} = K_i/K_j$):

| Pair | α |
|---|---|
| o-xylene / m-xylene | 0.150/0.050 = 3.0 |
| ethylbenzene / m-xylene | 2.0 |
| o-xylene / p-xylene | 1.875 |
| p-xylene / m-xylene | 1.6 |
| o-xylene / ethylbenzene | 1.5 |
| ethylbenzene / p-xylene | 1.25 |

Ethylbenzene/p-xylene (α = 1.25) is the hardest; o-/m-xylene (α = 3) is the easiest. All K values are below 1, so large solvent/feed ratios are needed (mE/R > 1).`,
        answer: String.raw`Criteria: high K and selectivity, immiscibility, easy recovery, safe and cheap; hardest pair ethylbenzene/p-xylene (α = 1.25).` },
      { id: "practice-immiscible-extraction-P15b", label: "(b)", marks: "8", topic: "immiscible-extraction",
        sub: "Choosing extraction equipment", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); slides: Immiscible Extraction pp. 6–9`,
        text: String.raw`Give the heuristics for choosing the type of extractor from the number of equilibrium stages needed, and explain why the variety of extraction equipment is much larger than for distillation.`,
        solution: String.raw`**Heuristics (slides):**

| Stages needed | Equipment |
|---|---|
| 1–2 | mixer-settlers |
| 3 | sieve-tray column, packed column (random or structured) or membrane contactor |
| 4–5 | sieve-tray column, packed column or membrane contactor |
| more than 5 | columns with mechanical energy input (pulsed, rotating-disc, Karr reciprocating-plate, Scheibel, etc.) or centrifugal extractors |

**Why more variety:** both phases are liquids with small density differences and often low interfacial tension, so dispersing one liquid in the other and then separating the two phases is much harder than contacting a vapor with a liquid. Different systems need different compromises between drop size (mass transfer) and settling (phase separation), so many special devices exist: mixer-settlers, static and agitated columns, pulsed columns, centrifugal contactors and membrane contactors.`,
        answer: String.raw`1–2 stages: mixer-settlers; 3–5: sieve-tray/packed/membrane columns; > 5: mechanically agitated columns; liquid–liquid contacting and settling are hard, hence many designs.` },
      { id: "practice-immiscible-extraction-P15c", label: "(c)", marks: "7", topic: "immiscible-extraction",
        sub: "When are total flows constant? Ratio units", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); slides: Immiscible Extraction pp. 13, 18–19`,
        text: String.raw`Explain when the McCabe–Thiele analysis of immiscible extraction can use weight fractions with total flow rates, and when mass ratios with solvent-free flow rates must be used. Write the operating equation in both cases.`,
        solution: String.raw`- If diluent and solvent are immiscible, $F_D$ (kg diluent/h) and $F_S$ (kg solvent/h) are constant. In mass ratios $X = $ kg A/kg D, $Y = $ kg A/kg S, the operating line is always straight:
$$Y_{j+1} = \frac{F_D}{F_S}X_j + \left(Y_1 - \frac{F_D}{F_S}X_0\right)$$
The equilibrium data must then be converted to (X, Y).
- If the solution is also **dilute**, total flows R ≈ $F_D$ and E ≈ $F_S$ are constant and fractions can be used directly:
$$y_{j+1} = \frac{R}{E}x_j + \left(y_1 - \frac{R}{E}x_0\right)$$
- At higher solute concentrations total R and E change as solute transfers, so a fraction-based operating line curves; use ratio units (still immiscible) or, if the phases become partially miscible, a triangular diagram.
- If small, constant amounts of solvent dissolve in the raffinate (and diluent in the extract), the ratio method still works with $F_D$ = kg (D + S) in raffinate and $F_S$ = kg (S + D) in extract.`,
        answer: String.raw`Dilute: fractions with constant R/E; concentrated but immiscible: mass ratios with constant $F_D/F_S$; partially miscible: triangular diagram.` } ] },

    { id: "practice-immiscible-extraction-P16", q: 16, section: "F", compulsory: false, stem: String.raw`A n-hexane stream (2000 kg/h) contains 0.004 wt frac ethylbenzene (EB) and 0.004 wt frac p-xylene (PX). It is extracted countercurrently with 30 000 kg/h of pure β,β′-thiodipropionitrile at 25 °C. $K_d$ (TDPN/hexane, wt frac): EB 0.100, PX 0.080. 95 % of the EB must be recovered. Assume dilute, immiscible, independent solutes.`,
      parts: [ { id: "practice-immiscible-extraction-P16a", label: "(a)", marks: "20", topic: "immiscible-extraction",
        sub: "Dilute multisolute extraction: N from the key solute (Kremser)", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); $K_d$ from Wankat Table 13-3`,
        text: String.raw`Find the number of equilibrium stages required and the recovery of p-xylene. Give the outlet raffinate and extract compositions.`,
        solution: String.raw`**Given:** R = 2000, E = 30 000 kg/h, $x_0$ = 0.004 for each solute, $y_{N+1} = 0$.
**Assumptions:** dilute (constant R, E), immiscible, linear equilibrium, solutes independent (assumption 6), so each solute obeys its own Kremser equation with the same N.

1. Extraction factors: $A_{EB} = 0.100(30000)/2000 = 1.50$; $A_{PX} = 0.080(30000)/2000 = 1.20$. Both > 1, so both solutes move into the TDPN.
2. EB fixes N: $x_N/x_0 = 0.05$, $x_N^* = 0$:
$$N = \frac{\ln[(1 - 1/1.5)(1/0.05) + 1/1.5]}{\ln 1.5} = \frac{\ln 7.333}{0.4055} = 4.91$$
3. PX with N = 4.91: $x_N/x_0 = (1 - 1.2)/(1 - 1.2^{5.91}) = 0.103$ → recovery 89.7 %.
4. With N = 5 stages built: EB 95.2 %, PX 89.9 %.
5. Compositions (N = 4.91):
   - raffinate: $x_{EB} = 0.0002$, $x_{PX} = 0.00041$;
   - extract: $y_{EB} = 2000(0.0038)/30000 = 2.53 \times 10^{-4}$, $y_{PX} = 2000(0.00359)/30000 = 2.39 \times 10^{-4}$.`,
        answer: String.raw`N = 4.9 → 5 stages; p-xylene recovery ≈ 90 %; raffinate EB 0.0002, PX 0.0004; extract EB 2.5 × 10⁻⁴, PX 2.4 × 10⁻⁴.` },
      { id: "practice-immiscible-extraction-P16b", label: "(b)", marks: "15", topic: "immiscible-extraction",
        sub: "Why simple countercurrent extraction cannot separate EB from PX", type: "theory", syllabus: "partial", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); Wankat 3e Section 13.3`,
        text: String.raw`Comment on the result of part (a) if the aim were to separate EB from PX. Suggest and sketch a cascade that could do this and state the condition on $K_dE/R$ for each solute.`,
        solution: String.raw`- Part (a) recovers both aromatics together (95 % and 90 %); the extract has EB:PX ≈ 1.06:1 versus 1:1 in the feed, so the simple countercurrent extractor separates aromatics from hexane, not EB from PX. With α = 1.25 any single-solvent cascade with $A_i > 1$ extracts both.
- To separate them use **fractional extraction** (Wankat Fig. 13-5): feed in the middle, solvent 1 (TDPN, E) in at the bottom, solvent 2 (hexane, R) in at the top. Choose E/R so that
$$\frac{K_{EB}E}{R} > 1\quad\text{and}\quad\frac{K_{PX}E}{R} < 1$$
e.g. E/R = 11 gives 1.10 for EB (goes up with TDPN) and 0.88 for PX (goes down with hexane). The top section strips PX out of the rising extract, the bottom section strips EB out of the falling raffinate.
- Because the two factors are close to each other and to 1, many stages are needed; a solvent with a higher selectivity would be preferred.`,
        answer: String.raw`Both solutes are extracted (α = 1.25); use fractional extraction with E/R chosen so $K_{EB}E/R > 1 > K_{PX}E/R$ (e.g. E/R ≈ 11).` } ] }
  ] });
