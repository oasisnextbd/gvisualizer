QB.paper({
  year: "2011-12", date: "08/07/2013", marks: 210,
  rules: String.raw`Section A: four questions, answer any three. Section B: four questions, answer any three. Separate scripts for each section; attach all diagrams.`,
  questions: [
    { id: "2011-12-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q1a", label: "(a)", marks: "15",
          topic: "partial-extraction", sub: "Types of ternary liquid–liquid systems on a triangular diagram",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Draw neatly the three different liquid–liquid systems on ternary diagram which include the equilibrium envelope as well as with equilibrium or conjugate curve for partially miscible or completely immiscible systems. Explain briefly.`,
          solution: String.raw`> The slides teach the triangular diagram, tie lines and conjugate line (Wankat ch. 13) but not the Type I / Type II classification by name; that part is from Treybal.

Notation: A = solute, B = diluent (the feed solvent, e.g. water), S = extracting solvent. Each corner is a pure component, each edge a binary, and any point inside is a ternary mixture. The **binodal (equilibrium envelope)** separates the one-phase region from the two-phase region. A mixture inside it splits into a raffinate (B-rich) and an extract (S-rich) that lie at the two ends of a **tie line**.

![Three ternary liquid–liquid systems: Type I with plait point and conjugate line, Type II band, completely immiscible B and S](fig/2011-12-Q1a-sol.svg)

### 1. Type I: one partially miscible pair (B–S); A is miscible with both
- The binodal is a dome resting on the B–S edge. Its left branch is the saturated raffinate curve and its right branch is the saturated extract curve.
- Tie lines get shorter as the A content rises. They close at the **plait point P**, where the two phases become identical.
- **Conjugate line:** from each tie line, draw a line from the extract end parallel to the B–S edge (horizontal in the right triangle) and a line from the raffinate end parallel to the A–B edge (vertical). The locus of their crossing points is the conjugate curve, and it ends at P. To get a tie line through any point, reverse the construction. Example: water–acetic acid–isopropyl ether (Wankat Table 13-5), water–chloroform–acetone.

### 2. Type II: two partially miscible pairs (B–S and A–S)
- The two-phase region is a **band** that runs from the B–S edge to the A–S edge.
- There is no plait point. Tie lines cross the band, and the conjugate curve runs across the triangle without closing. Example: methylcyclohexane–n-heptane–aniline at some temperatures, styrene–ethylbenzene–diethylene glycol.

### 3. B and S completely immiscible
- The saturated raffinate curve is the A–B edge itself (no S in the raffinate). The saturated extract curve is the A–S edge (no B in the extract).
- Every tie line joins a point on the A–B edge to a point on the A–S edge, so almost the whole triangle is two-phase.
- The equilibrium is then described by a distribution curve $y_A = f(x_A)$, or $Y = K_D X$ in solute-free ratios. Solute-free flows are constant, so the McCabe–Thiele method and the Kremser equation apply (immiscible extraction). Nearly immiscible systems such as water–toluene are treated this way.

| feature | Type I | Type II | immiscible B–S |
|---|---|---|---|
| partially miscible pairs | B–S | B–S and A–S | none (B–S fully immiscible) |
| plait point | yes | no | no |
| tie-line interpolation | conjugate line | conjugate line | distribution curve |
| stage method | triangle, Δ point | triangle, Δ point | McCabe–Thiele / Kremser |

**Exam tip:** label the plait point, both saturated branches, three or four tie lines and the conjugate line. Those labels are what the marks are for.`,
          answer: String.raw`Type I (one partially miscible pair, dome with plait point and conjugate line), Type II (two partially miscible pairs, band with no plait point), and B–S immiscible (phases lie on the A–B and A–S edges; use a distribution curve with McCabe–Thiele/Kremser).` },
        { id: "2011-12-Q1b", label: "(b)", marks: "20",
          topic: "vle", sub: "Dew-point liquid composition from relative volatilities (multicomponent)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The vapor composition on a plate of a distillation column is

| Components | Vapor composition | relative volatility |
|---|---|---|
| $C_1$ | 0.025 | 36.5 |
| $C_2$ | 0.205 | 7.4 |
| $i$-$C_3$ | 0.21 | 3.0 |
| $n$-$C_3$ | 0.465 | 2.7 |
| $i$-$C_4$ | 0.045 | 1.3 |
| $n$-$C_4$ | 0.05 | 1.0 |

What will be the composition of liquid on the plate if it is in equilibrium with the vapor?`,
          solution: String.raw`**Given:** vapor mole fractions $y_i$ ($\sum y_i = 1.000$). Relative volatilities $\alpha_i = K_i/K_{nC_4}$ are taken relative to n-butane ($\alpha = 1.0$). (The printed "relative relativity" is a misprint for relative volatility.)

**Find:** the liquid in equilibrium, i.e. a dew-point calculation.

**Assumptions:** ideal-solution K-values, so the ratios $\alpha_i$ are constant at the plate temperature.

1. Equilibrium on each component: $y_i = K_i x_i = \alpha_i K_{ref}\, x_i$, so $x_i = \dfrac{y_i}{\alpha_i K_{ref}}$.
2. Summation $\sum x_i = 1$:
$$K_{ref} = \sum_i \frac{y_i}{\alpha_i}, \qquad x_i = \frac{y_i/\alpha_i}{\sum_j y_j/\alpha_j}$$

**3.** Table:


| component | $y_i$ | $\alpha_i$ | $y_i/\alpha_i$ | $x_i$ |
|---|---|---|---|---|
| $C_1$ | 0.025 | 36.5 | 0.000685 | 0.0019 |
| $C_2$ | 0.205 | 7.4 | 0.02770 | 0.0780 |
| $i$-$C_3$ | 0.21 | 3.0 | 0.07000 | 0.1971 |
| $n$-$C_3$ | 0.465 | 2.7 | 0.17222 | 0.4848 |
| $i$-$C_4$ | 0.045 | 1.3 | 0.03462 | 0.0974 |
| $n$-$C_4$ | 0.05 | 1.0 | 0.05000 | 0.1408 |
| sum | 1.000 | | 0.35522 | 1.0000 |

**4.** $K_{nC_4} = \sum y_i/\alpha_i = 0.355$. With a DePriester chart at the column pressure, this value fixes the plate (dew-point) temperature, which the question does not ask for.


**Check:** the light ends are strongly depleted in the liquid (C1 drops from 2.5% to 0.19%), and the heavy ends are enriched (n-C4 rises from 5% to 14%). That is the expected direction.

**Exam tip:** for a dew point you divide by $\alpha$, and for a bubble point you multiply ($y_i = \alpha_i x_i/\sum \alpha_j x_j$).`,
          answer: String.raw`$x$ = C1 0.0019, C2 0.078, i-C3 0.197, n-C3 0.485, i-C4 0.097, n-C4 0.141 (from $x_i = (y_i/\alpha_i)/\sum y_j/\alpha_j$; $K_{nC_4} = 0.355$).` } ] },

    { id: "2011-12-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q2a", label: "(a)", marks: "15",
          topic: "absorption", sub: "Kremser–Souders–Brown (KSB) equation: derivation and assumptions",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`What is KSB equation? Derive an expression for calculating the number of stages in gas-liquid absorption. Write down the assumptions you have to make.`,
          solution: String.raw`**KSB equation** = Kremser–Souders–Brown equation (Kremser 1930; Souders and Brown 1932). It is the analytical solution of the stage-by-stage balances for a countercurrent cascade with a straight operating line and a straight equilibrium line. It gives the number of equilibrium stages without drawing a McCabe–Thiele diagram.

**Assumptions** (as in the slides):
1. Dilute system, so total flows are constant: $L/V$ = constant (carrier gas insoluble, solvent nonvolatile).
2. Isothermal operation.
3. Isobaric operation.
4. Negligible heat of absorption.
5. Straight equilibrium line $y = mx + b$.
6. Equilibrium stages.

Stages are numbered from the top: liquid $L, x_0$ enters stage 1, gas $V, y_{N+1}$ enters stage N, gas $y_1$ leaves at the top, and liquid $x_N$ leaves at the bottom.

**Derivation**

1. Operating line (mass balance around stages 1 to j):
$$y_{j+1} = \frac{L}{V}x_j + \left(y_1 - \frac{L}{V}x_0\right)$$

**2.** Equilibrium leaving stage j: $y_j = m x_j + b$.

**3.** Define $(\Delta y)_j = y_{j+1} - y_j$. Subtracting step 2 from step 1:

$$(\Delta y)_j = \left(\frac{L}{V} - m\right)x_j + \left(y_1 - \frac{L}{V}x_0 - b\right)$$
Special case $L/V = m$ (parallel lines): $\Delta y$ is the same on every stage, so $N = \dfrac{y_{N+1} - y_1}{y_1 - \frac{L}{V}x_0 - b}$.

**4.** General case. Put $x_j = (y_j - b)/m$:

$$(\Delta y)_j = \left(\frac{L}{mV} - 1\right)y_j + \left(y_1 - \frac{L}{mV}b - \frac{L}{V}x_0\right)$$
Write the same equation for $j+1$ and subtract:
$$(\Delta y)_{j+1} - (\Delta y)_j = \left(\frac{L}{mV} - 1\right)(\Delta y)_j \;\Rightarrow\; (\Delta y)_{j+1} = A\,(\Delta y)_j, \quad A = \frac{L}{mV}$$

**5.** Sum over all stages: $\Delta y_1 + \Delta y_2 + \dots + \Delta y_N = y_{N+1} - y_1$. With step 4, the left side is a geometric series:

$$\Delta y_1\left(1 + A + A^2 + \dots + A^{N-1}\right) = y_{N+1} - y_1 \;\Rightarrow\; \frac{y_{N+1} - y_1}{\Delta y_1} = \frac{1 - A^N}{1 - A}$$

**6.** At the top, $\Delta y_1 = y_2 - y_1 = A\,(y_1 - y_1^*)$, with $y_1^* = m x_0 + b$ (the gas in equilibrium with the entering liquid). Substituting:

$$\boxed{\frac{y_{N+1} - y_1}{y_1 - y_1^*} = \frac{A - A^{N+1}}{1 - A}}\qquad A = \frac{L}{mV} \ne 1$$

**7.** Solved for N (gas-phase form):

$$N = \frac{\ln\left[\left(1 - \frac{mV}{L}\right)\frac{y_{N+1} - y_1^*}{y_1 - y_1^*} + \frac{mV}{L}\right]}{\ln\left(\frac{L}{mV}\right)}$$
An equivalent form is $\dfrac{y_{N+1} - y_{N+1}^*}{y_1 - y_1^*} = A^N$, with $y_{N+1}^* = m x_N + b$.

**Liquid-phase form** (convenient for strippers), with stripping factor $S = mV/L$ and $x_N^* = (y_{N+1} - b)/m$:
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - S}{1 - S^{N+1}}$$

The fraction of solute absorbed is $\dfrac{A^{N+1} - A}{A^{N+1} - 1}$ when $y_1^* = 0$.

**Exam tip:** state the five assumptions, the geometric-series step and the special case $L/V = m$. Then box the final form.`,
          answer: String.raw`KSB = Kremser–Souders–Brown: $\frac{y_{N+1}-y_1}{y_1-y_1^*} = \frac{A-A^{N+1}}{1-A}$, $A = L/mV$. It assumes a dilute system with constant L/V, isothermal and isobaric operation, negligible heat of absorption, a linear equilibrium and equilibrium stages.` },
        { id: "2011-12-Q2b", label: "(b)", marks: "20",
          topic: "absorption", sub: "Steam stripping of oil: stages by Kremser and by mole-ratio McCabe–Thiele",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`An oil containing 2.50 mole percent light hydrocarbon is stripped off by running the oil down a column up which live steam is passed. 4 kmole of steam are used for 100 kmole of oil stripped. Determine the number of theoretical plates required to reduce the hydrocarbon to 0.25 mole percent, assuming the oil is nonvolatile. The vapor–liquid relation of the hydrocarbon in the oil is given by $y^* = 33x$ where $y^*$ is the mole fraction in the vapor and $x$ is the mole fraction in the liquid. The temperature is maintained constant by internal heating, so that the steam does not condense in the tower.`,
          solution: String.raw`**Given:** $x_0 = 0.025$ (oil in at the top), $x_N = 0.0025$ (oil out at the bottom), pure steam in ($y_{N+1} = 0$). Equilibrium $y^* = 33x$ (mole fractions). Basis: 100 kmol oil and 4 kmol steam. ("like steam" on the paper is a misprint for "live steam".)

**Find:** the number of theoretical plates N.

**Assumptions:** the oil is nonvolatile and the steam does not condense, so the solute-free flows are constant: $L' = 100$ kmol oil and $G' = 4$ kmol steam (100 kmol is taken as hydrocarbon-free oil). Isothermal, equilibrium stages.

### Method 1: Kremser (KSB), treating the system as dilute (the method part (a) leads to)
1. Stripping factor $S = \dfrac{mV}{L} = \dfrac{33 \times 4}{100} = 1.32$. Inlet steam is pure, so $x_N^* = y_{N+1}/m = 0$.
2. Liquid-phase Kremser:
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - S}{1 - S^{N+1}} \;\Rightarrow\; \frac{0.0025}{0.025} = 0.10 = \frac{1 - 1.32}{1 - 1.32^{N+1}}$$

**3.** $1.32^{N+1} = 1 + 0.32/0.10 = 4.2$, so $N + 1 = \dfrac{\ln 4.2}{\ln 1.32} = 5.17$ and $N = 4.17$.


### Method 2: rigorous McCabe–Thiele in mole ratios (the vapor is not dilute)
1. $X = x/(1-x)$ and $Y = y/(1-y)$. Then $X_0 = 0.025/0.975 = 0.02564$ and $X_N = 0.0025/0.9975 = 0.002506$.
2. Overall balance gives the vapor leaving the top:
$$Y_1 = \frac{L'}{G'}(X_0 - X_N) = \frac{100}{4}(0.02564 - 0.002506) = 0.578 \quad (y_1 = 0.366)$$

**3.** Operating line through $(X_N, 0)$ with slope $L'/G' = 25$: $Y_{j+1} = 25\,(X_j - 0.002506)$.

**4.** Equilibrium in ratios: $x = X/(1+X)$, $y = 33x$, $Y = y/(1-y)$. This is strongly curved; for example $Y^* = 4.71$ at $X_0$.

**5.** Step from the bottom (a stripper's operating line lies below the equilibrium curve):


| stage (from bottom) | X leaving (liquid) | Y leaving (vapor) |
|---|---|---|
| 1 (bottom) | 0.00251 | 0.0899 |
| 2 | 0.00610 | 0.2503 |
| 3 | 0.01252 | 0.6891 |

The X that stage 3 calls for from above is $0.00251 + 0.6891/25 = 0.0301$, which passes $X_0 = 0.0256$. The fraction of stage 3 needed is $(0.02564 - 0.01252)/(0.0301 - 0.01252) = 0.75$, so $N = 2.75$.

![Steam stripper in mole ratios: 2.75 theoretical stages](fig/2011-12-Q2b-sol.svg)

### Which to quote
- Kremser assumes constant total L/V, but the vapor goes from 4 kmol of pure steam to 6.3 kmol at 37 mol% hydrocarbon. The equilibrium line in true ratios also curves upward strongly. Kremser is therefore conservative here.
- **Answer: Kremser gives 4.17, i.e. 5 theoretical plates. The rigorous mole-ratio stepping gives 2.75, i.e. 3 theoretical plates.** If 100 kmol is read as the feed (oil + HC), then $L' = 97.5$ and the rigorous answer becomes 2.65, still 3 plates.

**Exam tip:** if the question pairs with a Kremser derivation, show the Kremser answer. Then add one line noting that $y_1 \approx 0.37$ is not dilute, so the mole-ratio diagram is the rigorous check.`,
          answer: String.raw`Kremser with $S = mV/L = 1.32$: N = 4.17, i.e. 5 theoretical plates. The rigorous mole-ratio McCabe–Thiele ($L'/G' = 25$, $Y_1 = 0.578$) gives N = 2.75, i.e. 3 plates.` } ] },

    { id: "2011-12-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw`A countercurrent extraction cascade is processing an aqueous solution of acetic acid with pure isopropyl ether. The following data are available:

| stream | data |
|---|---|
| Entering feed | 1000 kg/hr; 35 percent acetic acid, 65 percent water |
| Final extract | 2500 kg/hr; 12 percent acetic acid |

[Use the figure for problem 3 to answer the followings]`,
      parts: [
        { id: "2011-12-Q3a", label: "(a)", marks: "35 (a+b)",
          topic: "partial-extraction", sub: "Countercurrent extraction: external balances, solvent rate and raffinate",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine the solvent feed rate. What is the final raffinate composition?`,
          solution: String.raw`> The "figure for problem 3" is not attached to the paper. The water–acetic acid–isopropyl ether equilibrium at 20 °C, 1 atm (Treybal; Wankat Table 13-5, also on the slides) is used instead. Values between the table rows are interpolated linearly.

**Given:** $F = R_{N+1} = 1000$ kg/h, $x_{A,F} = 0.35$, $x_{D,F} = 0.65$. Pure ether solvent $E_0 = S$ ($y_A = y_D = 0$). $E_N = 2500$ kg/h, $y_{A,N} = 0.12$ (A = acid, D = water, S = ether).

**Find:** S, $R_1$ and its composition.

**Assumptions:** isothermal, equilibrium stages. Both outlet streams are saturated, so they lie on the binodal.

1. **Extract composition.** $E_N$ lies on the ether-layer (extract) curve. Interpolating Table 13-5 between $y_A = 0.114$ ($y_D = 0.039$) and $0.216$ ($y_D = 0.069$) at $y_A = 0.12$ gives $y_{D,N} = 0.0408$ and $y_{S,N} = 0.839$.
2. **Component balances** ($F + S = R_1 + E_N$). Acid: $R_1 x_{A,1} = 350 - 2500(0.12) = 50.0$ kg/h. Water: $R_1 x_{D,1} = 650 - 2500(0.0408) = 548.1$ kg/h. So $x_{A,1}/x_{D,1} = 50.0/548.1 = 0.0912$.
3. **Locate $R_1$ on the raffinate (water-layer) curve** where $x_A/x_D = 0.0912$. It lies between the rows (6.42, 91.7) and (13.30, 84.4) wt%:
$$x_{A,1} = 0.0819, \quad x_{D,1} = 0.898, \quad x_{S,1} = 0.020$$

**4.** **Flows:**

$$R_1 = \frac{50.0}{0.0819} = 610\ \mathrm{kg/h}, \qquad S = R_1 + E_N - F = 610 + 2500 - 1000 = 2110\ \mathrm{kg/h}$$

**5.** **Check with the mixing point:** $x_{A,M} = \dfrac{F x_{A,F} + S\,y_{A,S}}{F + S} = \dfrac{350}{3110} = 0.1125$ and $x_{D,M} = 650/3110 = 0.209$. The points $R_1$, M and $E_N$ are collinear in the diagram of part (b).


**Graphical route** (as taught): plot F, S and $E_N$ (on the extract curve at 12% acid). M lies on line FS and on line $E_N$M. Extend $E_N$M to the raffinate curve to get $R_1$, then use the lever rule for the flows.

**Exam tip:** the water in the extract (about 4%) is small but not negligible. Ignoring it changes $R_1$ by about 15%.`,
          answer: String.raw`Solvent about 2110 kg/h of isopropyl ether. Final raffinate $R_1 \approx 610$ kg/h containing about 8.2 wt% acetic acid, 89.8% water and 2.0% ether.` },
        { id: "2011-12-Q3b", label: "(b)", marks: "(in a)",
          topic: "partial-extraction", sub: "Difference point and stage stepping on the triangular diagram",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`How many equilibrium stages are equivalent to the 'counter current cascade'?`,
          solution: String.raw`**Method:** difference point Δ with stepping on the right-triangle diagram (Wankat Example 13-4 procedure).

1. **Difference point:** $\Delta = E_0 - R_1 = E_j - R_{j+1} = E_N - R_{N+1}$, with flow $\Delta = E_N - F = 1500$ kg/h.
$$x_{A,\Delta} = \frac{E_N y_{A,N} - F x_{A,F}}{\Delta} = \frac{300 - 350}{1500} = -0.0333$$
$$x_{D,\Delta} = \frac{E_N y_{D,N} - F x_{D,F}}{\Delta} = \frac{102 - 650}{1500} = -0.365$$
Δ lies outside the triangle, below and to the left of S. As a check, it falls on lines $S R_1$ and $E_N F$ extended.

**2.** **Stepping from $R_1$.** A tie line from $R_j$ gives $E_j$. The line from Δ through $E_j$ meets the raffinate curve at $R_{j+1}$. Repeat until $y_{A,j} \ge 0.12$.


| stage j | $x_{A,j}$ (raffinate) | $x_{D,j}$ | $y_{A,j}$ (extract) | $y_{D,j}$ |
|---|---|---|---|---|
| 1 | 0.082 | 0.898 | 0.027 | 0.012 |
| 2 | 0.155 | 0.820 | 0.060 | 0.023 |
| 3 | 0.232 | 0.736 | 0.102 | 0.035 |
| 4 | 0.309 | 0.652 | 0.164 | 0.054 |

**3.** $E_N$ (12%) falls between $E_3$ (10.2%) and $E_4$ (16.4%). The fraction of stage 4 is $(0.12 - 0.102)/(0.164 - 0.102) = 0.30$, so $N = 3.3$.


![Triangular diagram: Δ point, tie lines and 3.3 stages for acetic acid–water–isopropyl ether](fig/2011-12-Q3b-sol.svg)

**Accuracy note:** the same code applied to Wankat Example 13-4 (S = 1475, 10% raffinate) gives 5.4 stages, against the book's graphical 5.8. Answers within about ±0.5 stage are normal for hand-drawn triangle work.

**Exam tip:** draw Δ accurately from its coordinates. A Δ read off a hand-drawn intersection of two nearly parallel lines is the main source of error.`,
          answer: String.raw`Δ at $(x_D, x_A) = (-0.365, -0.033)$ with flow 1500 kg/h. About 3.3 equilibrium stages, so 4 stages.` } ] },

    { id: "2011-12-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q4", label: "", marks: "35",
          topic: "leaching", sub: "Countercurrent leaching with variable underflow (halibut oil–ether)",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`Halibut oil is extracted from granulated halibut livers in a counter current multi-batch arrangement using ether as solvent. The solids charge contains 0.35 kg oil/kg exhausted livers and it is desired to obtain a 90% oil recovery. How many theoretical stages are required if 50 kg ether is used per 100 kg unsaturated solid. The entrainment data are:

| Concentration of overflow (kg oil/kg solution) | 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.67 |
|---|---|---|---|---|---|---|---|---|
| Entrainment (kg solution/kg extracted livers) | 0.28 | 0.34 | 0.40 | 0.47 | 0.55 | 0.66 | 0.8 | 0.96 |`,
          solution: String.raw`> The slides cover leaching with constant flows and an effective equilibrium constant. Here the underflow varies with concentration, so a stage-by-stage balance is needed (Coulson & Richardson method).

**Given:** basis 100 kg exhausted (oil-free) livers carrying 35 kg oil. Untreated solid = 135 kg, so ether = $50 \times 135/100 = 67.5$ kg. Recovery 90%, so 3.5 kg oil may leave with the spent livers. Entrainment k(y) (kg solution/kg livers) is from the table, with linear interpolation.

**Find:** the number of ideal stages N.

**Assumptions:** ideal stages, i.e. the solution entrained in the underflow from stage j has the same concentration $y_j$ as the overflow from stage j. Oil dissolves completely. No solids in the overflow. Livers enter stage 1 and fresh ether enters stage N.

1. **Final underflow (stage N):** oil = $100\,k(y_N)\,y_N = 3.5$, so $k\,y = 0.035$. Trial with the table gives $y_N = 0.1025$, $k = 0.3415$ and $L_N = 34.15$ kg solution (3.5 kg oil, 30.65 kg ether).
2. **Strong overflow $V_1$:** solution balance $V_1 = 35 + 67.5 - 34.15 = 68.35$ kg, with oil 31.5 kg, so $y_1 = 31.5/68.35 = 0.461$.
3. **Stage-by-stage** (balance over stages 1 to j):
$$V_{j+1} = V_1 + L_j - 35, \qquad y_{j+1} = \frac{V_1 y_1 + L_j y_j - 35}{V_{j+1}}, \qquad L_j = 100\,k(y_j)$$

| stage j | $y_j = x_j$ (kg oil/kg soln) | $k(y_j)$ | $L_j$ (kg soln) | $V_{j+1}$ (kg) | $y_{j+1}$ |
|---|---|---|---|---|---|
| 1 | 0.461 | 0.617 | 61.7 | 95.0 | 0.262 |
| 2 | 0.262 | 0.444 | 44.4 | 77.7 | 0.105 |
| 3 | 0.105 | 0.343 | 34.3 | 67.6 | 0.001 |

**4.** Underflow from stage 3 has $x_3 = 0.105$, which is essentially the required 0.1025. The overflow that stage 3 needs is $y_4 = 0.001 \approx 0$ with 67.6 kg, which is just the fresh ether (67.5 kg). The cascade closes at **3 ideal stages** (about 3.0).


![Leaching McCabe–Thiele: operating curve y(j+1) vs x(j), equilibrium y = x, 3 stages](fig/2011-12-Q4-sol.svg)

**Exam tip:** compute the final underflow first from $k\,y = $ oil left per kg solids. Without it, neither the strong-solution concentration nor the operating curve can be found.`,
          answer: String.raw`Basis 100 kg livers: 67.5 kg ether, strong solution 68.4 kg at 0.461 kg oil/kg, spent underflow at 0.102. Stepping gives 3 theoretical stages.` } ] },

    { id: "2011-12-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q5a", label: "(a)", marks: "10",
          topic: "flash", sub: "Basic flash distillation process (sketch and explanation)",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Sketch and explain the basic flash distillation process.`,
          solution: String.raw`![Flash distillation: pump, heater, valve, flash drum with demister](fig/2011-12-Q5a-sol.svg)

**Explanation**
1. **Pump:** raises the feed to a pressure high enough that it stays liquid in the heater.
2. **Heater:** adds heat $Q_h$ and raises the feed to $T_1$, still at high pressure (no vaporization).
3. **Valve:** the pressure drops sharply at constant enthalpy (adiabatic, isenthalpic). The hot liquid is now above its bubble point at the drum pressure, so part of it "flashes" to vapor and the temperature falls.
4. **Flash drum:** the vapor and liquid separate by gravity. The drum is sized so that drops can settle; a demister (mesh pad) at the vapor outlet stops entrained liquid. The drum is often vertical with $L/D \approx 3$–5.
5. **Products:** vapor V (rich in the more volatile component, $y$) and liquid L (rich in the less volatile, $x$). They leave in equilibrium at $T_{drum}$ and $p_{drum}$, so the drum is one equilibrium stage.

**Equations used:** total balance $F = V + L$; component balance $Fz = Vy + Lx$; energy balance $F h_F + Q = V H_V + L h_L$; equilibrium $y = f(x)$. Together they give the operating line $y = -\dfrac{L}{V}x + \dfrac{F}{V}z$. A binary flash has 2 degrees of freedom once the feed is fixed (for example $p_{drum}$ and $V/F$).

**Exam tip:** say why the valve is needed (to vaporize part of the feed by pressure reduction) and why the demister is there (to stop entrainment).`,
          answer: String.raw`Pump, then heater, then pressure-reducing (isenthalpic) valve, then drum with demister. Part of the feed flashes, and vapor y and liquid x leave in equilibrium as one stage.` },
        { id: "2011-12-Q5b", label: "(b)", marks: "25",
          topic: "flash", sub: "Binary flash with constant α: y–x plot, V/F = 0.6, specified vapor",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Suppose you wish to flash distill a mixture that is 45% (mole basis) Benzene and 55 mole% Toluene. Feed rate to the still is 700 moles/hr. Equilibrium data for Benzene–Toluene system can be approximated with a constant relative volatility of 2.5, where Benzene is more volatile. Operation of the still is at 1 atm.

(i) Plot a y–x diagram for Benzene.

(ii) If 60% of the feed is vaporized, find the liquid–vapor compositions.

(iii) If you desire a vapor composition of 60 mole% benzene, what is corresponding liquid composition, and what are the liquid and vapor flow rates?`,
          solution: String.raw`**Given:** $z = 0.45$, $F = 700$ mol/h, $\alpha = 2.5$, 1 atm.

**Assumptions:** constant α, equilibrium stage, binary.

**(i) Equilibrium curve:** $y = \dfrac{\alpha x}{1 + (\alpha - 1)x} = \dfrac{2.5x}{1 + 1.5x}$

| x | 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| y | 0 | 0.217 | 0.385 | 0.517 | 0.625 | 0.714 | 0.789 | 0.854 | 0.909 | 0.957 | 1.0 |

**(ii) $f = V/F = 0.6$**
1. Operating line: $y = -\dfrac{1-f}{f}x + \dfrac{z}{f} = -0.667x + 0.75$, through $(z, z) = (0.45, 0.45)$.
2. Intersect with the equilibrium curve: $0.4x + 0.6\,\dfrac{2.5x}{1 + 1.5x} = 0.45$. Solving gives $x = 0.318$ and $y = 0.538$.
3. Flows: $V = 0.6(700) = 420$ mol/h and $L = 280$ mol/h. Check: $280(0.318) + 420(0.538) = 89.0 + 226.0 = 315.0 = 700(0.45)$.

**(iii) $y = 0.60$**
1. Equilibrium inverted: $x = \dfrac{y}{\alpha - (\alpha - 1)y} = \dfrac{0.60}{2.5 - 1.5(0.60)} = 0.375$.
2. Lever rule:
$$V = F\frac{z - x}{y - x} = 700\,\frac{0.45 - 0.375}{0.60 - 0.375} = 233.3\ \mathrm{mol/h}, \qquad L = 466.7\ \mathrm{mol/h}$$
so $V/F = 1/3$. The operating line slope is $-L/V = -2$.

![y–x diagram for benzene–toluene, α = 2.5, with both flash operating lines](fig/2011-12-Q5b-sol.svg)

**Exam tip:** in (iii), y fixes x directly from equilibrium. The flows then come from the lever rule, with no trial and error.`,
          answer: String.raw`(ii) x = 0.318, y = 0.538 (V = 420, L = 280 mol/h). (iii) x = 0.375, V = 233.3 mol/h, L = 466.7 mol/h (V/F = 1/3).` } ] },

    { id: "2011-12-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q6a", label: "(a)", marks: "5×3=15",
          topic: "mccabe-thiele", sub: "Feed-line slopes: two-phase, superheated vapor, subcooled liquid",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate the feed line slope for the following cases and show them on a y–x diagram.

(i) A two-phase feed where 60% of the feed is vaporized under column conditions.

(ii) A superheated vapor feed where 3 mole of liquid will vaporized on the feed stage for each 9 moles of feed input.

(iii) A liquid feed subcooled by 35 °F. Average liquid heat capacity is 30 Btu/lb-mole·°F and $\lambda$ = 15,000 Btu/lb-mole.`,
          solution: String.raw`**Feed line:** $y = \dfrac{q}{q-1}x - \dfrac{z}{q-1}$, with slope $\dfrac{q}{q-1}$. It passes through $(z, z)$ on the 45° line. Here $q = \dfrac{H - h_F}{H - h} = \dfrac{\bar{L} - L}{F}$ (CMO).

**(i) 60% vaporized:** $q$ = fraction liquid $= 0.4$, so the slope is $\dfrac{0.4}{0.4 - 1} = -0.667$. The line runs up and to the left.

**(ii) Superheated vapor, 3 mol of liquid vaporize per 9 mol of feed:** the feed cools to saturation by vaporizing liquid on the feed stage, so $\bar{L} = L - 3F/9$. Then $q = -3/9 = -0.333$ and the slope is $\dfrac{-1/3}{-1/3 - 1} = +0.25$. The line runs down and to the left, below the 45° line.

**(iii) Subcooled liquid, 35 °F:**
$$q = 1 + \frac{C_{pL}(T_{bp} - T_F)}{\lambda} = 1 + \frac{30 \times 35}{15000} = 1.07$$
The slope is $\dfrac{1.07}{0.07} = +15.3$, nearly vertical and leaning to the right.

| case | q | slope q/(q−1) | direction from (z, z) |
|---|---|---|---|
| (i) two-phase, 60% vapor | 0.40 | −0.667 | up-left |
| (ii) superheated vapor | −0.333 | +0.25 | down-left |
| (iii) subcooled liquid | 1.07 | +15.3 | up-right, steep |

![Feed lines through (z, z) for the three feeds (z = 0.5 shown for illustration)](fig/2011-12-Q6a-sol.svg)

The paper gives no z; any z gives the same slopes. The sketch uses z = 0.5, and an α = 2.5 curve is drawn only for scale.

**Exam tip:** do the sign check. Feeds colder than saturated liquid ($q > 1$) lean right, two-phase feeds ($0 < q < 1$) lean left with a negative slope, and superheated vapor ($q < 0$) has a positive slope less than 1.`,
          answer: String.raw`(i) q = 0.4, slope −0.667. (ii) q = −1/3, slope +0.25. (iii) q = 1.07, slope +15.3.` },
        { id: "2011-12-Q6b", label: "(b)", marks: "20",
          topic: "mccabe-thiele", sub: "Benzene–toluene column: D, B, ideal plates and feed plate (q = 1/3)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A continuous fractionating column is to be designed to separate 30,000 kg/hr of a mixture of 40 percent benzene and 60 percent toluene into an overhead product containing 97 percent benzene and a bottom product containing 98% toluene. These percentages are by weight. A reflux ratio of 3.5 mole to 1 mole of product is to be used. The molal latent heats of benzene and toluene are 7360 and 7960 cal/gm-mole, respectively. Benzene and toluene form an ideal system with a relative volatility of about 2.5. The feed has a boiling point of 95 °C at a pressure of 1 atm.

(i) Calculate the moles of overhead product and bottom product per hour.

(ii) Determine the number of ideal plates and the position of the feed plate if feed is a mixture of two-thirds vapor and one-third liquid.

[Note: x–y diagram for the system is supplied]`,
          solution: String.raw`**Given:** $F = 30{,}000$ kg/h, 40 wt% benzene. Distillate 97 wt% benzene, bottoms 2 wt% benzene. $R = L/D = 3.5$, $\alpha = 2.5$, feed two-thirds vapor. Molar masses: benzene 78.115 kg/kmol (Çengel Table A-1), toluene 92.14 kg/kmol.

**Find:** D and B (kmol/h), ideal plates, feed plate.

**Assumptions:** CMO (the latent heats 7360 and 7960 cal/g-mol differ by only 8%), total condenser, partial reboiler counted as a stage, constant α = 2.5 in place of the supplied x–y chart. The 95 °C boiling point is not needed for this case.

### (i) External balances
1. Feed: benzene $12000/78.115 = 153.62$ kmol/h and toluene $18000/92.14 = 195.35$ kmol/h, so $F = 348.97$ kmol/h and $z = 0.4402$.
2. Mole fractions:
$$x_D = \frac{0.97/78.115}{0.97/78.115 + 0.03/92.14} = 0.9744, \qquad x_B = \frac{0.02/78.115}{0.02/78.115 + 0.98/92.14} = 0.0235$$

**3.** Balances:

$$D = F\frac{z - x_B}{x_D - x_B} = 348.97\,\frac{0.4402 - 0.0235}{0.9744 - 0.0235} = 152.9\ \mathrm{kmol/h}, \qquad B = 196.1\ \mathrm{kmol/h}$$
As a check, D is 12,000 kg/h and B is 18,000 kg/h.

### (ii) McCabe–Thiele
1. Internal flows: $L = 3.5D = 535.2$, $V = 4.5D = 688.1$. With $q = 1/3$: $\bar{L} = L + qF = 651.5$ and $\bar{V} = V - (1-q)F = 455.5$ kmol/h.
2. Rectifying line: $y = \dfrac{R}{R+1}x + \dfrac{x_D}{R+1} = 0.7778x + 0.2165$
3. Stripping line: $y = \dfrac{\bar{L}}{\bar{V}}x - \dfrac{B x_B}{\bar{V}} = 1.4304x - 0.0101$
4. Feed line: slope $\dfrac{q}{q-1} = -0.5$ through $(0.440, 0.440)$. The lines intersect at $(0.347, 0.487)$.
5. Step from the top with $x = y/(2.5 - 1.5y)$. Use the rectifying line until x passes 0.347 (optimum feed), then the stripping line:

| stage | x | y |
|---|---|---|
| 1 | 0.9385 | 0.9744 |
| 2 | 0.8761 | 0.9465 |
| 3 | 0.7788 | 0.8980 |
| 4 | 0.6492 | 0.8223 |
| 5 | 0.5089 | 0.7215 |
| 6 | 0.3872 | 0.6124 |
| 7 (feed) | 0.3004 | 0.5177 |
| 8 | 0.2243 | 0.4196 |
| 9 | 0.1528 | 0.3107 |
| 10 | 0.0953 | 0.2084 |
| 11 | 0.0546 | 0.1262 |
| 12 | 0.0283 | 0.0680 |
| 13 | 0.0124 | 0.0304 |

**6.** $x_B = 0.0235$ falls inside step 13: $(0.0283 - 0.0235)/(0.0283 - 0.0124) = 0.30$. This gives **12.3 equilibrium stages, so 13 stages, of which one is the partial reboiler**. That is **12 ideal plates plus the reboiler, with the feed on plate 7 from the top**.


![McCabe–Thiele: benzene–toluene, R = 3.5, q = 1/3, 12.3 stages with feed on stage 7](fig/2011-12-Q6b-sol.svg)

**Check:** the feed-line pinch with equilibrium is at (0.296, 0.512), giving $R_{min} = 2.13$. R = 3.5 is 1.64 times $R_{min}$, which is reasonable.

**Exam tip:** a mostly vapor feed ($q = 1/3$) lowers $\bar{V}$, which makes the stripping section need more stages than a saturated-liquid feed at the same R.`,
          answer: String.raw`(i) F = 349 kmol/h ($z_F = 0.440$), D = 152.9 kmol/h ($x_D = 0.974$), B = 196.1 kmol/h ($x_B = 0.0235$). (ii) 12.3 equilibrium stages, i.e. 12 ideal plates plus the partial reboiler, with feed on plate 7 from the top.` } ] },

    { id: "2011-12-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q7a", label: "(a)", marks: "10",
          topic: "batch", sub: "Derivation of the Rayleigh equation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the Rayleigh equation for simple batch distillation.`,
          solution: String.raw`**System:** a still pot holds W moles at liquid mole fraction $x_W$ (more volatile component). Vapor is boiled off continuously, condensed and collected as distillate. The vapor leaving is in equilibrium with the pot liquid: $y = x_D = f(x_W)$.

**Assumptions:** negligible holdup in the column, condenser and accumulator. The pot is well mixed and is one equilibrium stage. The vapor is removed as soon as it forms (differential distillation).

1. In time dt, the pot loses $-dW$ moles of vapor with composition $x_D$.
2. Total balance: $\mathrm{out} = -dW$ (no input).
3. Component balance: $-x_D\,dW = -d(W x_W) = -(W\,dx_W + x_W\,dW)$
4. Rearranged: $W\,dx_W = (x_D - x_W)\,dW$, so
$$\frac{dW}{W} = \frac{dx_W}{x_D - x_W}$$

**5.** Integrate from the start ($W = F$, $x_W = x_F$) to the end ($W_{final}$, $x_{W,final}$):

$$\boxed{\ln\frac{F}{W_{final}} = \int_{x_{W,final}}^{x_F}\frac{dx_W}{x_D - x_W}}$$
For a simple still $x_D = y^*(x_W)$ from the equilibrium data. For a multistage column, $x_D$ is linked to $x_W$ through the McCabe–Thiele stepping.

**6.** **Constant α** (analytical form):

$$\ln\frac{F}{W} = \frac{1}{\alpha - 1}\ln\left[\frac{x_F(1 - x_W)}{x_W(1 - x_F)}\right] + \ln\frac{1 - x_W}{1 - x_F}$$
Otherwise, integrate numerically (graphically, by trapezoid or by Simpson's rule) using a table of $1/(x_D - x_W)$ against $x_W$.

**7.** Then $D_{total} = F - W_{final}$ and $x_{D,avg} = \dfrac{F x_F - W_{final}x_{W,final}}{D_{total}}$.


**Exam tip:** keep the signs straight. The integral runs from $x_{W,final}$ up to $x_F$, which makes $\ln(F/W)$ positive.`,
          answer: String.raw`$-x_D\,dW = -d(Wx_W)$ leads to $\ln(F/W_{final}) = \int_{x_{W,final}}^{x_F} dx_W/(x_D - x_W)$, with $x_D = y^*(x_W)$ for a simple still.` },
        { id: "2011-12-Q7b", label: "(b)", marks: "25",
          topic: "batch", sub: "Multistage batch, constant reflux R = 3: ethanol–water Rayleigh integration",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`One hundred pound-moles of a mixture of 20 mole% ethanol, 80 mole% water is charged to the still pot of a batch distillation column equivalent to three equilibrium stages. The distillation at a reflux ratio of 3 and normal atmospheric pressure is continued until the residue in the still pot reaches a composition 0.03 mole fraction ethanol. What is the quantity and average composition of the distillate?

[Note: x–y diagram of the system is supplied]`,
          solution: String.raw`**Given:** $F = 100$ lbmol, $x_F = 0.20$, $x_{W,final} = 0.03$, $L_0/D = 3$ constant, 1 atm.

**Find:** $D_{total}$ and $x_{D,avg}$.

**Data:** ethanol–water VLE at 1 atm (Wankat Table 2-1 / slides, Perry 4th ed.), interpolated with a monotone cubic between the points (the curve is steep below x = 0.07).

**Assumptions:** "three equilibrium stages" is read as three equilibrium contacts in total: the still pot plus 2 ideal plates, as in the slides' batch Problem D4 (still pot plus a column with two equilibrium stages, "total of three equilibrium contacts"). Total condenser, saturated reflux, CMO, negligible holdup.

1. **Operating line** (constant reflux): $\dfrac{L}{V} = \dfrac{R}{R+1} = 0.75$, so $y = 0.75x + 0.25\,x_D$.
2. **Link between $x_D$ and $x_W$.** For each trial $x_D$, step 3 equilibrium contacts down from $(x_D, x_D)$. The last x is $x_W$. Adjust $x_D$ until it matches.

| point | $x_W$ | $x_D$ | steps (x, y) |
|---|---|---|---|
| start | 0.20 | 0.706 | (0.618, 0.706), (0.469, 0.640), (0.200, 0.528) |
| end | 0.03 | 0.613 | (0.398, 0.613), (0.107, 0.452), (0.030, 0.234) |

![Batch McCabe–Thiele, R = 3, 3 contacts: initial and final staircases](fig/2011-12-Q7b-sol.svg)

**3.** **Rayleigh integrand table:**


| $x_W$ | 0.030 | 0.064 | 0.098 | 0.132 | 0.166 | 0.200 |
|---|---|---|---|---|---|---|
| $x_D$ | 0.613 | 0.663 | 0.681 | 0.693 | 0.701 | 0.706 |
| $1/(x_D - x_W)$ | 1.716 | 1.671 | 1.714 | 1.783 | 1.869 | 1.975 |

**4.** **Integration** (Simpson's rule, 20 intervals from 0.03 to 0.20): $\displaystyle\int_{0.03}^{0.20}\frac{dx_W}{x_D - x_W} = 0.301$.


![Rayleigh integrand 1/(xD − xW) against xW; area 0.301](fig/2011-12-Q7b-sol2.svg)

**5.** **Results:**

$$W_{final} = F\,e^{-0.301} = 100\,e^{-0.301} = 74.0\ \mathrm{lbmol}, \qquad D_{total} = 26.0\ \mathrm{lbmol}$$
$$x_{D,avg} = \frac{F x_F - W x_W}{D} = \frac{20.0 - 74.0(0.03)}{26.0} = 0.684$$

**If the column itself has 3 plates** (4 contacts with the still): area = 0.280, so W = 75.6 lbmol, D = 24.4 lbmol and $x_{D,avg} = 0.727$.

**Method check:** the same code gives an area of 0.618 for Wankat Example 9-2 (slides Ex 11-2), against the book's 0.608.

**Exam tip:** with constant reflux, both $x_D$ and $x_W$ fall during the run. The Rayleigh integral is needed for every multistage batch problem except constant $x_D$ (variable reflux).`,
          answer: String.raw`Area = 0.301, so $W_{final} = 74.0$ lbmol and distillate = 26.0 lbmol at $x_{D,avg} = 0.684$ (still + 2 plates). With still + 3 plates: 24.4 lbmol at 0.727.` } ] },

    { id: "2011-12-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q8a", label: "(a)", marks: "5",
          topic: "advanced-distillation", sub: "Optimum reflux ratio",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is optimum reflux ratio? Explain it clearly.`,
          solution: String.raw`**Optimum reflux ratio:** the external reflux ratio $L_0/D$ that gives the minimum total annual cost (capital plus operating) for the required separation.

- **At $R_{min}$:** a pinch forms, the number of stages becomes infinite and the capital cost is infinite.
- **As R rises above $R_{min}$:** N falls quickly, so the capital cost drops steeply. However, $V = (R+1)D$ rises, which raises reboiler steam, condenser cooling water and the column diameter and exchanger sizes.
- **At large R:** the operating cost grows linearly with R, and the capital cost rises again because the diameter grows.
- The sum of the two passes through a minimum at $R_{opt}$. Rule of thumb (slides): $R_{opt} \approx 1.05$–$1.25\,R_{min}$. The curve is flat near the optimum, so designers usually choose a slightly higher R for operating flexibility.

![Annual cost against L/D: fixed, operating and total cost with the optimum](fig/2011-12-Q8a-sol.svg)

**Exam tip:** name the two competing costs and the limits $R_{min}$ (N = ∞) and total reflux (D = 0, $N_{min}$).`,
          answer: String.raw`The R that minimizes total annual cost (capital falls with R while energy rises). Typically $R_{opt} \approx 1.05$–$1.25\,R_{min}$.` },
        { id: "2011-12-Q8b", label: "(b)", marks: "5",
          topic: "column-design", sub: "Sieve vs bubble-cap vs valve trays",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Compare the relative advantages and disadvantages of sieve, bubble cap and valve tray.`,
          solution: String.raw`| feature | sieve | valve | bubble-cap |
|---|---|---|---|
| relative cost | lowest (base) | ≈ 1.2 × sieve | ≈ 4 × valve |
| efficiency at design | good | ≈ sieve | ≤ sieve |
| turndown | poor below ≈ 60% of design gas rate (weeping) | good: valves close at low rates | very flexible at very high and low liquid rates, but turndown often worse |
| entrainment | reference | similar | ≈ 3 × sieve, so larger tray spacing |
| pressure drop | reference | standard valve higher (can be designed lower) | highest |
| fouling / solids | best: easy to clean | more likely to foul or plug; moving parts wear | coking and polymer problems |
| design data | non-proprietary, standard item | proprietary (vendor design) | extensive old data |
| use today | fouling service, cheap | most new columns | older columns |

Efficiency ranking: valve ≥ sieve ≥ bubble-cap, except near flooding.

**Exam tip:** for a clean feed whose rate swings widely, choose valve trays. For a dirty or fouling service, choose sieve trays.`,
          answer: String.raw`Sieve: cheapest and easy to clean, but poor turndown. Valve: about 20% more expensive with good turndown and similar efficiency. Bubble-cap: about 4× valve cost, high entrainment and Δp, flexible, now obsolete.` },
        { id: "2011-12-Q8c", label: "(c)", marks: "7",
          topic: "advanced-distillation", sub: "Murphree efficiency model and its shortcomings",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Explain Murphree efficiency model with a neat sketch with respect to its shortcomings.`,
          solution: String.raw`![Tray n with liquid in x(n−1), out x(n), vapor in y(n+1), out y(n); Murphree definitions](fig/2011-12-Q8c-sol.svg)

**Model:** a real tray achieves only part of the composition change an equilibrium stage would give.

- Murphree vapor efficiency:
$$E_{MV} = \frac{y_n - y_{n+1}}{y_n^* - y_{n+1}}$$
where $y_n^*$ is the vapor in equilibrium with the liquid actually leaving, $x_n$.
- Murphree liquid efficiency:
$$E_{ML} = \frac{x_{n-1} - x_n}{x_{n-1} - x_n^*}$$
where $x_n^*$ is in equilibrium with $y_n$.
- On a McCabe–Thiele diagram, $E_{MV}$ is used by drawing a pseudo-equilibrium curve a fraction $E_{MV}$ of the vertical distance from the operating line to the equilibrium curve.

**Assumptions built into the model, and so its shortcomings:**
1. The liquid on the tray is completely mixed (one $x_n$ everywhere) and the vapor entering is uniform. Real large trays have a concentration gradient across the flow path, so $E_{MV}$ can exceed 1, and the point efficiency $E_{pt}$ is then needed.
2. Vapor between trays is assumed fully mixed.
3. $E_{MV} \ne E_{ML}$ and $E_{MV} \ne E_o$. The value depends on the definition chosen, and it varies from tray to tray, with flow rates and with composition.
4. It ignores entrainment, weeping and liquid maldistribution, which must be corrected separately.
5. In multicomponent systems each component has a different $E_{MV}$, and some can even be negative.
6. It is not a fundamental property. It must be measured or correlated (for example O'Connell for $E_o$).

**Exam tip:** write the definition with every symbol explained. The model is only as good as the "well-mixed liquid" assumption.`,
          answer: String.raw`$E_{MV} = (y_n - y_{n+1})/(y_n^* - y_{n+1})$ and $E_{ML} = (x_{n-1} - x_n)/(x_{n-1} - x_n^*)$. They assume well-mixed liquid and vapor, and they fail for large trays with gradients ($E_{MV} > 1$), entrainment and weeping, and multicomponent systems.` },
        { id: "2011-12-Q8d", label: "(d)", marks: "6",
          topic: "column-design", sub: "Types of downcomers and weirs (schematics)",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the schematic diagrams of different types of down comers and weirs.`,
          solution: String.raw`![Downcomers: circular pipe, straight segmental, sloped segmental, envelope; weirs: straight, adjustable, notched](fig/2011-12-Q8d-sol.svg)

**Downcomers**
- **(A) Circular pipe:** used in small columns and pilot plants. The pipe can stick up above the tray to act as the weir.
- **(B) Straight segmental:** the most common commercially. It is inexpensive, easy to install, almost impossible to install wrongly, and handles a wide range of liquid rates.
- **(C) Sloped segmental:** used when vapor–liquid disengagement is difficult. The large top area aids disengagement, and the small bottom keeps active area on the tray below. It is more expensive and easy to install backwards.
- **(D) Envelope:** occasionally used for very low liquid rates.

**Weirs**
- **Straight:** horizontal, 2–4 in high. The cheapest option, but not the best for turndown.
- **Adjustable:** looks like a fix for turndown, but if maladjusted it causes excessive weeping or trays running dry. Avoid it.
- **Notched (picket-fence):** gives liquid-rate flexibility and is especially useful at low liquid rates. It costs a little more than a straight weir.

**Exam tip:** label the weir, the apron and the clearance under the apron in each sketch.`,
          answer: String.raw`Downcomers: circular pipe, straight segmental (most common), sloped segmental and envelope. Weirs: straight (2–4 in), adjustable (avoid) and notched (low liquid rates).` },
        { id: "2011-12-Q8e", label: "(e)", marks: "6",
          topic: "column-design", sub: "Sieve tray geometry (layout sketch)",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Show sieve tray geometry with a neat sketch.`,
          solution: String.raw`> The slides show the cross-flow sieve tray anatomy. The layout numbers below are from Wankat §10.5 (Figure 10-20, Eqs. 10-20 to 10-22).

![Sieve tray plan view (inlet and outlet downcomers, active area with triangular-pitch holes, weir) and section](fig/2011-12-Q8e-sol.svg)

**Key geometry**
- Tower area $A_T = \pi D^2/4$. Each segmental downcomer takes $A_d = (1 - \eta)A_T$, about 10–15% of $A_T$. The active (bubbling) area is $A_{active} \approx A_T(2\eta - 1)$, and the net vapor area is $A_{net} = A_T - A_d$.
- Holes are 1/8 to 1 in in diameter (1/2 in is a good first guess; 1/2 in or larger for fouling service). They are punched on an **equilateral triangular pitch** of 2.5–5 $d_o$ (3.8 $d_o$ on average).
- Hole area $A_{hole} = \beta A_{active}$, with β = 6–25% (10% is a first guess). That is 4–15% of the tower area.
- Clearances: holes stay 2–3 in from the shell and from the inlet downcomer (the inlet calming zone), and 3–5 in before the outlet weir (disengaging zone).
- Outlet weir: 2–4 in high, with length $l_w/D \approx 0.6$–0.75 (Wankat Table 10-1). The apron leaves about a 1 in gap above the tray below.
- Tray spacing: 0.45 m for D < 1.2 m, and 0.6 m or more for larger columns (slides).

**Exam tip:** show plan view and section together, and label $A_T$, $A_d$, $A_{active}$, the holes and pitch, the weir and the calming zones.`,
          answer: String.raw`Cross-flow tray: segmental inlet and outlet downcomers (about 10–15% of area each), triangular-pitch holes (d_o 1/8–1 in, pitch 2.5–5 d_o, β ≈ 10%), calming zones, and an outlet weir 2–4 in high with $l_w/D$ 0.6–0.75.` },
        { id: "2011-12-Q8f", label: "(f)", marks: "6",
          topic: "column-design", sub: "Pressure heads on a sieve tray and downcomer backup",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Show different pressure heads on a sieve tray with a neat sketch.`,
          solution: String.raw`> The slides list "pressure drop, downcomer backup" in the hydraulics roadmap. The detail below follows Wankat Figure 10-21 and Eq. 10-23.

![Pressure heads on a sieve tray: dry-tray, weir, crest, gradient, under-apron loss and downcomer backup](fig/2011-12-Q8f-sol.svg)

**Heads** (inches of clear liquid). The liquid in the downcomer must overcome all of them before it can flow onto the tray below:
- $h_{\Delta p,dry}$: dry-tray head, the vapor's orifice pressure drop through the holes. $h_{\Delta p,dry} = 0.003\,v_o^2\rho_V(\rho_w/\rho_L)(1 - \beta^2)/C_o^2$.
- $h_{weir}$: weir height.
- $h_{crest}$: liquid crest over the weir (Francis weir equation).
- $h_{grad}$: hydraulic gradient of liquid across the tray (small on sieve trays).
- $h_{du}$: friction loss under the downcomer apron.

**Downcomer backup:**
$$h_{dc} = h_{\Delta p,dry} + h_{weir} + h_{crest} + h_{grad} + h_{du}$$
The downcomer liquid is aerated (relative froth density $\varphi \approx 0.5$), so $h_{dc,aerated} = h_{dc}/\varphi \approx 2h_{dc}$. To avoid downcomer flooding, the tray spacing must exceed $2h_{dc}$. Weeping is avoided when $h_{\Delta p,dry} + h_\sigma$ exceeds the liquid head ($h_{weir} + h_{crest} + h_{grad}$).

**Exam tip:** the sketch earns the marks if every head is marked as a vertical dimension and the summation for $h_{dc}$ is written below it.`,
          answer: String.raw`$h_{dc} = h_{\Delta p,dry} + h_{weir} + h_{crest} + h_{grad} + h_{du}$ (Wankat Eq. 10-23). The tray spacing must exceed $h_{dc}/\varphi \approx 2h_{dc}$ to avoid downcomer flooding.` } ] }
  ] });
