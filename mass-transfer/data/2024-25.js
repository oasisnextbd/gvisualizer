QB.paper({
  year: "2024-25", date: "05/11/2026", marks: 210,
  rules: String.raw`Section A: Q1 compulsory + any two of Q2–Q4. Section B: Q5 compulsory + any two of Q6–Q8. Separate scripts for each section. Four forms of the Kremser equation are printed in the Appendix.`,
  questions: [
    { id: "2024-25-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q1a", label: "(a)", marks: "7",
          topic: "absorption", sub: "Heater and cooler in an absorber–stripper gas plant",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q1a", "2021-22-Q2a"],
          text: String.raw`A gas treatment plant used to have both absorption and stripping columns. Describe the uses of the heater and cooler in this absorption-stripping plant.`,
          solution: String.raw`The solvent circulates in a closed loop: it **absorbs** the solute in the absorber and is **regenerated** in the stripper, then returns to the absorber. The equilibrium constant $m = H/p$ rises strongly with temperature (Henry's constant increases with T) and falls with pressure, so:

- the absorber should run **cold and at high pressure** (small m: the operating line lies well above the equilibrium line, $y > y^*$);
- the stripper should run **hot and at low pressure** (large m: equilibrium line above the operating line, $y < y^*$).

The heater and the cooler swing the temperature between these two conditions.

![Absorber–stripper gas plant: rich solvent heated before the stripper, lean solvent cooled before the absorber, stream B gas heater](fig/2024-25-Q1a-sol.svg)

**Uses of the heater**
1. Heats the **rich solvent** leaving the absorber before it enters the stripper: raises m (e.g. y = 0.5x at 24 °C in the absorber becomes y = 3.0x at 92 °C in the stripper in Q2), reversing the direction of mass transfer so the solute leaves the liquid.
2. Heats the **stripping gas** (stream B, part of the treated gas, or steam) so it enters at the stripper temperature and does not cool the liquid; it also supplies the heat of desorption, keeping the stripper close to isothermal.
3. Fewer stages or less stripping gas are needed because the hot equilibrium line is steep.

**Uses of the cooler**
1. Cools the **lean (regenerated) solvent** from the stripper back to absorber temperature before it re-enters the absorber, so m is small again and the solvent has high capacity: a lower $L_{min}$ and fewer stages.
2. Removes the heat of absorption (and the sensible heat carried by the solvent), keeping the absorber nearly isothermal, which is the assumption behind the straight or known equilibrium curve.
3. Reduces solvent loss by vaporization in the absorber.

**Energy saving:** a lean/rich cross heat exchanger heats the cold rich solvent with the hot lean solvent; the heater and cooler only trim the temperatures, which cuts utility cost.

> **Exam tip:** state the reason in terms of m = H/p: heat (and low p) to strip, cool (and high p) to absorb.`,
          answer: String.raw`Heater: warms the rich solvent (and stripping gas) so m rises and the solute desorbs in the stripper. Cooler: cools the lean solvent back to absorber temperature so m is small and absorption capacity is high; a lean/rich exchanger recovers most of the heat.` },
        { id: "2024-25-Q1b", label: "(b)", marks: "7",
          topic: "batch", sub: "Initial reflux ratio for a multistage batch with x_D and N specified",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`How can you determine the initial external ratio of a batch distillation column with $x_D$ and the number of stages specified. Write down the steps and hand-sketch the necessary diagram.`,
          solution: String.raw`"External ratio" is read as the **external reflux ratio** $L_0/D$. At time zero the still pot holds the charge, so $x_W = x_F$; the column (still pot + N − 1 stages, total condenser) must make $x_D$ from that pot liquid. This is the starting point of a constant-$x_D$ (variable reflux) batch, or the reflux of a constant-reflux batch that gives the desired initial distillate.

**Steps (trial and error on the McCabe–Thiele diagram)**
1. Draw the equilibrium curve and the y = x line; mark $x_D$ on the diagonal and $x_F$ (= $x_{W,initial}$) on the x axis.
2. The operating line (CMO, negligible holdup) is the rectifying line
$$y_{j+1} = \frac{L}{V}x_j + \left(1-\frac{L}{V}\right)x_D,\qquad \frac{L}{V} = \frac{L_0/D}{1+L_0/D}$$
It always passes through $(x_D, x_D)$; only the slope is unknown.
3. Guess $L_0/D$ (slope L/V) and draw the line from $(x_D, x_D)$.
4. Step off exactly the specified number of equilibrium contacts from the top (the still pot is the last contact).
5. If the last step ends at $x > x_F$ the guessed reflux is **too low** (not enough separation); if it ends below $x_F$, it is too high. Adjust the slope and repeat until the last step lands on $x_W = x_F$.
6. The converged slope gives $(L/V)_{initial}$ and $(L_0/D)_{initial} = \frac{L/V}{1-L/V}$.

Illustration (α = 2.5, $x_F$ = 0.50, $x_D$ = 0.95, still pot + 3 stages = 4 contacts): $L_0/D$ = 1.5 leaves the 4th step at x = 0.627 (too high); the converged value is **$L_0/D$ = 3.38** (L/V = 0.771), with steps x = 0.884, 0.781, 0.645, 0.500.

![Batch column McCabe–Thiele: trial line L/D = 1.5 ends too high; converged initial L/D = 3.38 makes the 4th step land on x_F = 0.50](fig/2024-25-Q1b-sol.svg)

As the pot is depleted ($x_W$ falls), the same N steps need a steeper line, so for constant $x_D$ the reflux ratio must be increased with time; the run ends at the final $x_W$ (or at the largest practical L/D).

> **Exam tip:** the operating line pivots on $(x_D, x_D)$; the number of steps is fixed and the end point $x_W$ moves. That is the reverse of the continuous-column design problem.`,
          answer: String.raw`Draw the top operating line from (x_D, x_D), guess L/D, step off the N contacts, and adjust L/D until the last step (still pot) lands at x_W = x_F; that slope gives the initial L_0/D = (L/V)/(1 − L/V).` },
        { id: "2024-25-Q1c", label: "(c)", marks: "7",
          topic: "leaching", sub: "Faulty McCabe–Thiele assumptions in leaching",
          type: "theory", syllabus: "in", repeats: ["2021-22-Q1e"],
          text: String.raw`Which McCabe-Thiele assumptions are faulty in a leaching operation? Give the reasons.`,
          solution: String.raw`**Idealized leaching assumptions (slides):** (1) isothermal; (2) isobaric; (3) no solvent dissolves into the solid; (4) **no solvent is entrained with the solid** (underflow carries no liquid); (5) the solid backbone is insoluble; (6) negligible heat of mixing; (7) **every stage is an equilibrium stage**; (8) no solid is carried with the overflow. With these, $F_{solv}$ and $F_{solid}$ are constant and the operating line is straight.

**The two that are usually faulty**

| assumption | why it fails |
|---|---|
| (4) no liquid entrained with the solid | solids always leave a settler or filter wet: the settled bed has a porosity filled with solution, so solvent and dissolved solute leave with the underflow (exactly as in washing) |
| (7) equilibrium stages | the solute must **diffuse out of the solid** matrix (seeds, flakes, ore, cane), and diffusion in solids is very slow; with practical residence times equilibrium is not reached (large pieces take days, heap/in-situ ore leaching takes months to years) |

Sometimes (8) also fails (fines carried over with the overflow) and (3) for porous solids that imbibe solvent.

**Correction used in the course:** lump both effects into an **effective equilibrium constant** measured on the real equipment,
$$y = m_E\,x$$
with x the solute concentration in the solid (including its entrained liquid) and y in the overflow. The McCabe–Thiele method or, with constant $m_E$, the Kremser equation
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - m_EF_{solv}/F_{solid}}{1 - (m_EF_{solv}/F_{solid})^{N+1}}$$
is then applied as usual. $m_E$ is valid only for the flow conditions and residence time at which it was measured (see Q4(b)).

> **Exam tip:** name the two assumptions (no entrainment, equilibrium stages) and give the cure ($m_E$).`,
          answer: String.raw`"No liquid entrained with the solid" (underflow is always wet) and "equilibrium stages" (slow diffusion out of the solid) fail; use a measured effective equilibrium y = m_E x with McCabe–Thiele or Kremser.` },
        { id: "2024-25-Q1d", label: "(d)", marks: "7",
          topic: "partial-extraction", sub: "Why a difference point and how to locate it",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q3b"],
          text: String.raw`Why do you use a difference (delta) point in partially miscible extraction? How can you find the location of the delta point in the ternary diagram?`,
          solution: String.raw`**Why.** In a countercurrent cascade (feed $F = R_{N+1}$ at stage N, solvent $E_0$ at stage 1) the **operating equation** links the passing streams $R_{j+1}$ and $E_j$. In a partially miscible system the extract and raffinate flows change from stage to stage (solvent and diluent dissolve in both phases), so there is no straight operating line on a McCabe–Thiele diagram. A balance on stages 1…j gives

$$E_0 + R_{j+1} = R_1 + E_j\ \Rightarrow\ \Delta = E_0 - R_1 = E_j - R_{j+1} = \dots = E_N - F$$

The **difference** of the flows of any two passing streams is constant (also for each component), so $\Delta$ is a fixed point on the triangular diagram and every pair of passing streams $E_j$, $R_{j+1}$ lies on a straight line through Δ. Δ therefore plays the role of the operating line: alternate **tie lines** (equilibrium, $E_j$–$R_j$) and **Δ lines** (operating, $R_{j+1}$ on line Δ–$E_j$, or $E_{j-1}$ on line Δ–$R_j$) step off the stages.

**How to locate Δ**
1. **Intersection of two lines (usual graphical method):** find M on line F–S from $x_M = \frac{F x_F + S y_S}{F + S}$; draw $R_1$–M and extend to the extract curve to get $E_N$. Then Δ is the intersection of line $E_0R_1$ (extended) with line $E_NF$ (extended), since Δ = $E_0 - R_1$ = $E_N - F$.
2. **From its coordinates:** $\Delta$ (flow) = $E_0 - R_1$ and
$$x_{A,\Delta} = \frac{E_0 y_{A,0} - R_1 x_{A,1}}{E_0 - R_1},\qquad x_{D,\Delta} = \frac{E_0 y_{D,0} - R_1 x_{D,1}}{E_0 - R_1}$$
3. **Lever-arm rule** on a known line: $\frac{E_0}{R_1} = \frac{\overline{\Delta R_1}}{\overline{\Delta E_0}}$.

**Position:** Δ lies on the left of the diagram (outside, beyond the solvent corner) when $E_0 > R_1$, on the right when $R_1 > E_0$, and at infinity (all operating lines parallel) when $E_0 = R_1$.

![Difference-point construction on the right-triangle diagram: M on F–S, E_N on R_1–M extended, Δ at the intersection of E_0R_1 and E_NF, stages stepped with tie lines and Δ lines](fig/2015-16-Q5a-sol.svg)

See also the 3-stage construction in Q3(a) (Δ at $x_D$ = −0.100, $x_A$ = 0.006).

> **Exam tip:** Δ is a fictitious stream (negative flow if R_1 > E_0); it is found by intersecting the two outermost operating lines.`,
          answer: String.raw`The flows change stage to stage, but E_j − R_{j+1} = Δ is constant, so all operating lines pass through one point Δ. Locate it at the intersection of lines E_0R_1 and E_NF (E_N from R_1–M), or from its coordinates/lever rule.` },
        { id: "2024-25-Q1e", label: "(e)", marks: "7",
          topic: "immiscible-extraction", sub: "Five-stage cross-flow cascade and its McCabe–Thiele diagram",
          type: "sketch", syllabus: "in", repeats: ["2015-16-Q8c"],
          text: String.raw`Hand-sketch a 5-stage cross-flow immiscible extraction cascade properly and show the corresponding McCabe-Thiele analysis graphically.`,
          solution: String.raw`**Cascade.** The raffinate (diluent flow $F_D$, solute ratio X) passes through stages 1 → 5. **Fresh solvent** $F_{S,j}$ (ratio $Y_{j,in}$, usually 0) is added to **every** stage, and each stage's extract $E_j$ ($Y_j$) is withdrawn separately.

**Assumptions:** immiscible diluent and solvent (constant $F_D$, $F_{S,j}$), equilibrium stages, isothermal; work in mass-ratio units.

**Stage j balance:**
$$F_DX_{j-1} + F_{S,j}Y_{j,in} = F_DX_j + F_{S,j}Y_j\ \Rightarrow\ Y_j = -\frac{F_D}{F_{S,j}}X_j + \left(\frac{F_D}{F_{S,j}}X_{j-1} + Y_{j,in}\right)$$

Each stage has its **own operating line** of slope $-F_D/F_{S,j}$ through $(X_{j-1}, Y_{j,in})$; it cuts the equilibrium curve at $(X_j, Y_j)$.

![Five-stage cross-flow cascade with fresh solvent to each stage, and the McCabe–Thiele diagram: five parallel operating lines of slope −2 starting on the X axis](fig/2024-25-Q1e-sol.svg)

**Construction**
1. Plot the equilibrium curve Y vs X.
2. From $(X_0, Y_{1,in})$ (on the X axis for pure solvent) draw slope $-F_D/F_{S,1}$ to the equilibrium curve: point $(X_1, Y_1)$.
3. Drop vertically to $(X_1, Y_{2,in})$ and draw the next line of slope $-F_D/F_{S,2}$ to get $(X_2, Y_2)$.
4. Repeat for stages 3, 4, 5; $X_5$ is the final raffinate. Equal solvent splits give parallel lines.

Illustration in the figure: Y = 1.2X, $F_D/F_{S,j}$ = 2, $X_0$ = 0.10: $X_j = X_{j-1}/(1 + mF_{S,j}/F_D) = 0.625X_{j-1}$, so $X_1 \dots X_5$ = 0.0625, 0.0391, 0.0244, 0.0153, 0.0095.

> **Exam tip:** cross-flow lines have negative slope and start on the X axis; countercurrent has one positive-slope line and uses less solvent for the same recovery.`,
          answer: String.raw`Raffinate 1 → 5 with fresh solvent to each stage; on Y–X, five separate operating lines of slope −F_D/F_Sj, each from (X_{j−1}, Y_in) to the equilibrium curve, give X_1 … X_5.` } ] },
    { id: "2024-25-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q2", label: "", marks: "35",
          topic: "absorption", sub: "Concentrated absorber + existing 4-stage stripper (Wankat 12.D13)",
          type: "numerical", syllabus: "in", repeats: ["2015-16-Q6b", "2015-16-Q6c"],
          text: String.raw`A complete gas treatment plant often consists of both an absorber to remove the solute and a stripper to regenerate the solvent. Some of the treated gas is heated and is used in the stripper. This is called stream B. In a particular application, we wish to remove obnoxious impurity A from the inlet gas. The absorber operates at 1.5 atm and 24°C where equilibrium is given as y = 0.5x (units are mole fracs). The stripper operates at 1 atm and 92°C where equilibrium is y = 3.0x (units are mole fracs). The total gas flow rate is 1400 mol/day, and the gas is 15 mol% A. The insoluble carrier is air. We desire a treated gas concentration of 0.5 mol% A. The liquid flow rate into the absorber is 800 mol/day and the liquid is 0.5 mol% A. Using McCabe-Thiele graphical analysis:

(i) Calculate the number of stages in the absorber and the liquid concentration leaving.

(ii) If the stripper is an already existing column with four equilibrium stages, calculate the gas flow rate of stream B (concentration is 0.5 mol% A) and the outlet gas concentration from the stripper.`,
          solution: String.raw`> Same problem as 2015-16 Q6(b), (c) (Wankat Problem 12.D13, slides D13; the slide's graphical answer is 8 stages).

**Assumptions:** insoluble carrier (air) and nonvolatile solvent, so the solute-free flows G and L are constant; isothermal, isobaric columns; equilibrium stages; the gas is concentrated (15%), so work in **mole ratios** Y = y/(1 − y), X = x/(1 − x).

### (i) Absorber

**Given:** 1400 mol/day gas, $y_{in}$ = 0.15, $y_{out}$ = 0.005; 800 mol/day liquid, $x_{in}$ = 0.005; y = 0.5x.

1. **Solute-free flows and ratios:** G = 1400(0.85) = 1190 mol air/day; L = 800(0.995) = 796 mol solvent/day. $Y_{in}$ = 0.15/0.85 = 0.1765; $Y_{out}$ = 0.005/0.995 = 0.00503; $X_{in}$ = 0.00503.
2. **External balance:**
$$X_{out} = X_{in} + \frac{G}{L}(Y_{in} - Y_{out}) = 0.00503 + \frac{1190}{796}(0.1765 - 0.00503) = \mathbf{0.2613}$$
so $x_{out}$ = 0.2613/1.2613 = **0.207** (20.7 mol% A).
3. **Equilibrium in ratios:** $\frac{Y}{1+Y} = 0.5\frac{X}{1+X}$ gives $X = \frac{2Y}{1-Y}$ (a curve). **Operating line:** $Y = Y_{out} + \frac{L}{G}(X - X_{in})$, slope L/G = 0.669, from (0.00503, 0.00503) to (0.2613, 0.1765).
4. **Stepping from the top** (stage 1 at the gas outlet): $X_j$ from equilibrium, $Y_{j+1}$ from the operating line.

| stage | Y leaving | X leaving |
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

### (ii) Existing 4-stage stripper

**Given:** liquid in at the top $X_{in}$ = 0.2613, liquid out at the bottom $X_{out}$ = 0.00503 (it returns to the absorber), L = 796 mol solvent/day; stream B enters the bottom with $Y_{in}$ = 0.00503; y = 3x; N = 4.

1. **Equilibrium in ratios:** $\frac{Y}{1+Y} = 3\frac{X}{1+X}$, so $Y = \frac{3X}{1-2X}$.
2. **Operating line** from $(X_{out}, Y_{in})$ to $(X_{in}, Y_{out})$ with $Y_{out} = Y_{in} + \frac{L}{G}(X_{in} - X_{out})$; it lies **below** the equilibrium curve (stripping).
3. **Trial and error on L/G:** step up from the bottom, $Y_j = Y^*(X_j)$, $X_{j-1} = X_{out} + \frac{G}{L}(Y_j - Y_{in})$, and adjust L/G until exactly 4 stages fit. Solving numerically gives **L/G = 1.242**:

| stage (from top) | X leaving | Y leaving |
|---|---|---|
| 4 (bottom) | 0.0050 | 0.0152 |
| 3 | 0.0132 | 0.0408 |
| 2 | 0.0338 | 0.1089 |
| 1 (top) | 0.0887 | 0.3233 |

The liquid entering stage 1 is $X_0$ = 0.2613 = $X_{in}$ ✓.

4. **Results:** G = 796/1.242 = **641 mol air/day**, so stream B = 641/0.995 = **644 mol/day** (0.5% A), about 54% of the treated gas. $Y_{out} = 0.00503 + 1.242(0.2613 - 0.00503) = 0.323$, so **$y_{out}$ = 0.323/1.323 = 0.244** (24.4 mol% A).

![Mole-ratio McCabe–Thiele diagram for the 4-stage stripper: steep curved equilibrium Y = 3X/(1 − 2X) and operating line slope 1.242](fig/2015-16-Q6c-sol.svg)

> The slide solution reads L/G ≈ 1.10 (G ≈ 724 mol/day) off a hand-drawn graph; stepping that line numerically gives only 3.4 stages, so 641 mol/day is the consistent value for exactly 4 stages.

> **Exam tip:** convert the equilibrium relation and all specifications to mole ratios before stepping (y = 0.5x is curved in Y–X); for a fixed number of stripper stages guess L/G, step, and adjust.`,
          answer: String.raw`(i) X_out = 0.2613 (x = 0.207); N = 8.8 → 9 equilibrium stages. (ii) L/G = 1.242: stream B ≈ 641 mol air/day (644 mol/day total); outlet gas Y = 0.323, y ≈ 0.244.` } ] },
    { id: "2024-25-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q3a", label: "(a)", marks: "23",
          topic: "partial-extraction", sub: "3-stage countercurrent acetic acid–water–IPE: solvent rate by trial (Wankat 13.D26)",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`A countercurrent system with three equilibrium stages is to be used for water-acetic acid-isopropyl ether extraction. The feed is 40 wt% acetic acid and 60 wt% water. The feed flow rate is 2000 kg/hr. The solvent added contains 1 wt% acetic acid but no water. We desire a raffinate that is 5 wt% acetic acid.

(i) What solvent flow rate is required?

(ii) What are the weight fraction of $E_N$ and $R_1$?

(iii) What are the flow rates of $E_N$ and $R_1$?

Write down the **STEPS** in detail. **Do not** show any calculations. Explain your steps with the necessary **equations** and **hand-sketch** diagrams. Mention any further data that you may need.`,
          solution: String.raw`> Wankat Problem 13.D26. The paper gives no equilibrium data; the check values below use Wankat Table 13-5 (Treybal, 20 °C, 1 atm).

**Further data needed:** the ternary equilibrium data for water (D)–acetic acid (A)–isopropyl ether (S) at the operating temperature and pressure (binodal curve: raffinate and extract branches, and tie lines or a conjugate line), e.g. Wankat Table 13-5 at 20 °C, 1 atm; operation isothermal.

**Notation (Wankat):** feed $F = R_{N+1}$ enters stage N = 3, solvent $S = E_0$ enters stage 1; raffinate $R_1$ leaves stage 1, extract $E_N$ leaves stage 3. Right-triangle diagram: $x_A$ (acid) vertical, $x_D$ (water) horizontal, $x_S = 1 - x_A - x_D$.

### Steps
1. **Plot the equilibrium data** on the right-triangle diagram: binodal curve, tie lines, and a conjugate line for interpolating new tie lines.
2. **Plot the known streams:** F at ($x_D$ = 0.60, $x_A$ = 0.40); S = $E_0$ at (0, 0.01) on the $x_A$ axis (no water); $R_1$ on the **raffinate branch** at $x_A$ = 0.05 (read its $x_D$ there).
3. **Guess a solvent rate S.** Find the mixing point M on line F–S:
$$x_{A,M} = \frac{F x_{A,F} + S y_{A,S}}{F + S},\qquad x_{D,M} = \frac{F x_{D,F}}{F + S}$$
(or by the lever rule $S/F = \overline{FM}/\overline{MS}$).
4. **Find $E_N$:** since $F + S = M = R_1 + E_N$, draw the straight line from $R_1$ through M and extend it to the **extract branch**: that point is $E_N$.
5. **Locate the difference point:** $\Delta = E_0 - R_1 = E_N - F$. Extend line $R_1E_0$ and line $FE_N$; their intersection is Δ.
6. **Step off stages from the feed end:** $E_N$ → tie line → $R_N$; line Δ–$R_N$ cut on the extract branch → $E_{N-1}$; tie line → $R_{N-1}$; … until a raffinate reaches $x_A \le 0.05$. (One may equally start at $R_1$: tie line → $E_1$, line Δ–$E_1$ → $R_2$, …)
7. **Trial and error:** if more than 3 stages are needed, S is too small; increase S (M moves toward S, $E_N$ becomes more dilute) and repeat steps 3–6 until exactly **3 stages** take the raffinate to 5% acid. This answers (i).
8. **Compositions (ii):** read $y_{A,N}$, $y_{D,N}$ of $E_N$ on the extract branch and $x_{A,1}$ = 0.05, $x_{D,1}$ of $R_1$ on the raffinate branch; $y_S = 1 - y_A - y_D$.
9. **Flow rates (iii):** $M = F + S$, then by the lever-arm rule on line $R_1ME_N$ (or by an acid balance)
$$E_N = M\frac{\overline{R_1M}}{\overline{R_1E_N}} = M\frac{x_{A,M} - x_{A,1}}{y_{A,N} - x_{A,1}},\qquad R_1 = M - E_N$$
10. **Check:** water balance $F x_{D,F} = E_N y_{D,N} + R_1 x_{D,1}$.

![Right-triangle diagram (Wankat Table 13-5): F, S, M, R_1, E_N, Δ and three stages](fig/2024-25-Q3a-sol.svg)

![Zoom of the low-acid region: S = E_0 at (0, 0.01), Δ at (−0.100, 0.006), tie lines of stages 1–3 and the Δ lines](fig/2024-25-Q3a-sol2.svg)

### Check values (computed; not required in the exam)
Stepping with Table 13-5 (linear interpolation of the tie lines) gives N = 4.0 at S = 7000 kg/h and 2.8 at 12,000 kg/h; exactly **3 stages at S ≈ 9.9 × 10³ kg/h**.

| stream | flow, kg/h | acid | water | ether |
|---|---|---|---|---|
| M | 11,880 | 0.076 | 0.101 | 0.823 |
| $E_N$ | 10,920 | 0.078 | 0.028 | 0.894 |
| $R_1$ | 960 | 0.050 | 0.932 | 0.018 |

Stage raffinates (feed end → raffinate end): $R_3$ 0.188, $R_2$ 0.088, $R_1$ 0.050 acid; Δ at ($x_D$, $x_A$) = (−0.100, 0.006). Acid balance: 2000(0.40) + 9877(0.01) = 899 kg/h = 10,918(0.0779) + 959(0.050) ✓.

> The answer is very sensitive to the drawing: N changes slowly with S near 3 stages, so hand-drawn answers anywhere around 9,000–10,500 kg/h are consistent. A low distribution coefficient at the dilute end is why so much solvent is needed.

> **Exam tip:** with N fixed and S unknown the problem is trial and error; each trial is "M → E_N → Δ → step".`,
          answer: String.raw`Steps: plot LLE data, F, S, R_1; guess S → M → E_N (on R_1M) → Δ (E_0R_1 ∩ FE_N) → step 3 stages; adjust S. With Wankat Table 13-5: S ≈ 9.9×10³ kg/h; E_N ≈ 10,900 kg/h (7.8% acid, 2.8% water), R_1 ≈ 960 kg/h (5% acid, 93.2% water).` },
        { id: "2024-25-Q3b", label: "(b)", marks: "12",
          topic: "immiscible-extraction", sub: "Dilute countercurrent extraction of benzoic acid by Kremser",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A water solution containing 0.05 mole % benzoic acid is to be extracted using pure benzene as the solvent. If the feed rate is 200 moles/hr and the solvent rate is 400 moles/hr, find the number of equilibrium stages required to reduce the water concentration to 0.001 mole % benzoic acid. Operation is isothermal at 6 °C, where equilibrium data can be represented as y = 0.78x.`,
          solution: String.raw`**Given:** R = 200 mol/h water phase, $x_0$ = 0.0005; E = 400 mol/h benzene, $y_{N+1}$ = 0; $x_N$ = 0.00001; equilibrium y = 0.78x (y in benzene, x in water, mole fractions).
**Find:** N.
**Assumptions:** very dilute, so R and E are constant (water and benzene immiscible), mole fractions ≈ mole ratios; straight equilibrium and operating lines; isothermal equilibrium stages → **Kremser** applies.

1. **Extraction factor:**
$$\frac{mE}{R} = \frac{0.78(400)}{200} = 1.56$$
2. **Outlet extract (external balance):** $y_1 = \frac{R}{E}(x_0 - x_N) = \frac{200}{400}(0.0005 - 0.00001) = 2.45\times10^{-4}$; 98% of the acid is removed.
3. **Kremser** (Appendix form), with $x_N^* = y_{N+1}/m = 0$:
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - mE/R}{1 - (mE/R)^{N+1}}\ \Rightarrow\ \frac{0.00001}{0.0005} = 0.02 = \frac{1 - 1.56}{1 - 1.56^{N+1}}$$
$$1 - 1.56^{N+1} = -28\ \Rightarrow\ 1.56^{N+1} = 29\ \Rightarrow\ N + 1 = \frac{\ln 29}{\ln 1.56} = \frac{3.367}{0.4447} = 7.57$$
$$N = \mathbf{6.57 \to 7\ equilibrium\ stages}$$
4. **Graphical check** (operating line $y_{j+1} = 0.5(x_j - x_N)$ from $(x_N, 0)$ to $(x_0, y_1)$, stepping from the feed end):

| stage | y leaving (×10⁴) | x leaving (×10⁴) |
|---|---|---|
| 1 | 2.450 | 3.141 |
| 2 | 1.521 | 1.949 |
| 3 | 0.925 | 1.186 |
| 4 | 0.543 | 0.696 |
| 5 | 0.298 | 0.382 |
| 6 | 0.141 | 0.181 |
| 7 | 0.040 | 0.052 (passes 0.1) |

Fraction of stage 7 ≈ 0.63, i.e. about 6.6 stages, agreeing with Kremser.

![Dilute McCabe–Thiele diagram (×10⁴ axes): equilibrium y = 0.78x, operating line slope 0.5, 6.6 stages](fig/2024-25-Q3b-sol.svg)

> **Exam tip:** in the raffinate-phase Kremser form use mE/R (not R/mE) and $x_N^* = y_{N+1}/m$; with pure solvent $x_N^*$ = 0.`,
          answer: String.raw`mE/R = 1.56; 1.56^(N+1) = 29 → N = 6.57 → 7 equilibrium stages (y_1 = 2.45×10⁻⁴).` } ] },
    { id: "2024-25-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q4a", label: "(a)", marks: "23",
          topic: "leaching", sub: "Countercurrent washing with two feeds: optimum feed and stages (Wankat 14.D4 variant)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`We wish to wash an aluminum solid to remove NaOH from the entrained liquid. The underflow from the settler tank is 30 vol % solid and 70 vol % liquid. The two solid feeds to the system are also 30 vol % solids. In one of these feeds, NaOH concentration in the liquid is 8 wt %. This feed's solid flow rate (on a dry basis) is 1000 kg/hr. The second feed has a NaOH concentration in the liquid of 3 wt %, and its solids flow rate (on a dry basis) is 2000 kg/hr. We desire the final NaOH concentration in the underflow liquid to be 0.8 wt% NaOH. A countercurrent operation is used. The inlet washing water is pure and flows at 2350 kg/hr. Find the optimum feed location for the intermediate feed and the number of equilibrium stages required.

Data: Density of water = 1.0 kg/liter (constant), Density of crushed dry alumina = 2.5 kg/liter.`,
          solution: String.raw`> Wankat Problem 14.D4 with changed numbers ("aluminum solid" = alumina, as the data line says).

**Given:** underflow and both feeds 30 vol% solids; feed 1: 1000 kg/h dry solids, liquid 8 wt% NaOH; feed 2: 2000 kg/h solids, 3 wt%; wash water 2350 kg/h pure; $x_N$ = 0.008; $\rho_{liq}$ = 1.0, $\rho_s$ = 2.5 kg/L.
**Find:** optimum stage for the intermediate feed and N.
**Assumptions (washing):** equilibrium stages, y = x (overflow liquid = underflow liquid leaving a stage); no solids in the overflow; constant liquid density (1.0 kg/L) so the underflow liquid per kg of solid is constant and **U, O are constant within each section**; the more concentrated feed (8%) enters at stage 1, where the overflow leaves, and the 3% feed enters at an intermediate stage (Wankat's choice).

1. **Underflow liquid per kg solid:** 1 kg solid = 1/2.5 = 0.400 L; liquid = 0.400(70/30) = 0.933 L = **0.933 kg/kg solid**.
 - Feed 1 liquid $U_1$ = 1000(0.933) = 933.3 kg/h; feed 2 liquid = 2000(0.933) = 1866.7 kg/h.
 - Underflow below the second feed: $U$ = 3000(0.933) = 2800 kg/h; above it (stages 1 … f − 1): $U_1$ = 933.3 kg/h.
2. **Overflow:** liquid balance 933.3 + 1866.7 + 2350 = 2800 + $O_1$, so $O_1$ = 2350 kg/h; the same balance around any section shows **O = 2350 kg/h everywhere**.
3. **NaOH balance:** in = 933.3(0.08) + 1866.7(0.03) = 74.67 + 56.00 = 130.67 kg/h; out in underflow = 2800(0.008) = 22.40 kg/h.
$$y_1 = \frac{130.67 - 22.40}{2350} = \mathbf{0.0461}$$
4. **Operating lines** ($y_{j+1}$ vs $x_j$):
 - Top section (balance around stages 1…j, feed 1 enters stage 1 with $x_0$ = 0.08):
$$y_{j+1} = \frac{U_1}{O}x_j + y_1 - \frac{U_1}{O}x_0 = 0.3972x_j + 0.01430$$
(passes through $(x_0, y_1)$ = (0.08, 0.0461)).
 - Bottom section (balance around stages j+1…N, pure water in):
$$y_{j+1} = \frac{U}{O}(x_j - x_N) = 1.1915(x_j - 0.008)$$
 - They intersect at x = **0.030** (the feed-2 liquid composition), y = 0.0262.
5. **Stepping from stage 1** with y = x, switching to the bottom line at the first stage whose x is below 0.030 (optimum feed):

| stage | $x_j = y_j$ | line used for $y_{j+1}$ |
|---|---|---|
| 1 | 0.0461 | top |
| 2 | 0.0326 | top |
| 3 | 0.0272 | **feed 2 here** → bottom |
| 4 | 0.0229 | bottom |
| 5 | 0.0178 | bottom |
| 6 | 0.0117 | bottom |
| 7 | 0.0044 (passes 0.008) | — |

Fraction of stage 7 = (0.01166 − 0.008)/(0.01166 − 0.00436) = 0.50, so **N = 6.5 → 7 equilibrium stages**, with the **3% feed on stage 3**.

Check of optimality: feeding on stage 2 needs 7.07 and on stage 4 needs 7.01 stages, against 6.50 on stage 3.

![Washing McCabe–Thiele diagram: equilibrium y = x, top line slope 0.397 from (0.08, 0.0461), bottom line slope 1.191 to (0.008, 0), 6.5 stages with feed 2 on stage 3](fig/2024-25-Q4a-sol.svg)

> **Exam tip:** in washing the equilibrium line is y = x and the slopes are U/O; an extra solids feed changes U below it, exactly like a second feed changes L in distillation.`,
          answer: String.raw`U = 0.933 kg liquid/kg solid (933 and 2800 kg/h), O = 2350 kg/h, y_1 = 0.0461; optimum: 3% feed on stage 3; N = 6.5 → 7 equilibrium stages.` },
        { id: "2024-25-Q4b", label: "(b)", marks: "12",
          topic: "leaching", sub: "Oil recovery from oilcake in 10 stages with an effective equilibrium constant",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A countercurrent leaching system is recovering oil from oilcakes. The system has 10 stages. For proper extraction, 1.36 m³ solvent is needed for 1 kg of solid oilcake. At equilibrium, 2.18 g oil is transferred to the solvent, whereas 1.8 g oil remains in the solid. The solvent used is pure. Predict the recovery of oil in the solvent. Make any reasonable assumption.`,
          solution: String.raw`**Given:** N = 10; $F_{solv}/F_{solid}$ = 1.36 m³/kg; at equilibrium (for that solvent-to-solid ratio) 2.18 g oil is in the solvent and 1.8 g in the solid; pure solvent.
**Find:** fraction of the oil recovered.
**Assumptions:** constant solvent and solid flows ($F_{solv}/F_{solid}$ constant through the cascade); the equilibrium data are for 1 kg solid contacted with 1.36 m³ solvent and define a constant **effective equilibrium constant** $y = m_E x$; countercurrent equilibrium stages → leaching **Kremser** (Appendix form).

1. **Effective equilibrium constant:** y = 2.18 g / 1.36 m³ = 1.603 g/m³ solvent; x = 1.8 g/kg solid, so
$$m_E = \frac{1.603}{1.8} = 0.891\ \mathrm{kg/m^3}$$
2. **Extraction factor:**
$$\frac{m_EF_{solv}}{F_{solid}} = 0.891(1.36) = \frac{2.18}{1.8} = 1.211$$
(the units cancel: it is simply the ratio of oil in the solvent to oil in the solid at equilibrium).
3. **Kremser** with $x_N^* = y_{N+1}/m_E = 0$:
$$\frac{x_N}{x_0} = \frac{1 - 1.211}{1 - 1.211^{11}} = \frac{-0.2111}{1 - 8.22} = 0.0292$$
4. **Recovery of oil in the solvent:**
$$1 - \frac{x_N}{x_0} = 1 - 0.0292 = \mathbf{0.971\ (97.1\%)}$$

> **Exam tip:** with an extraction factor only slightly above 1, adding stages helps slowly; one stage would recover only 2.18/(2.18 + 1.8) = 54.8%.`,
          answer: String.raw`m_E F_solv/F_solid = 2.18/1.8 = 1.211; x_N/x_0 = 0.029; about 97.1% of the oil is recovered.` } ] },
    { id: "2024-25-Q5", q: 5, section: "B", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q5", label: "", marks: "20+10+5",
          topic: "advanced-distillation", sub: "Benzene–toluene column, mean α from Antoine, E_ML = 0.75: trays, feed tray, diameter and height",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A continuous fractionating column operating at 101.3 kPa (760 mmHg) is to separate 100 kmol/h of a benzene–toluene mixture containing 45 mol% benzene into a distillate containing 90 mol% benzene and a bottoms product containing 8 mol% benzene. The feed enters as a saturated liquid. The column is equipped with a total condenser, which returns the reflux as a saturated liquid, and a partial reboiler. The external reflux ratio is 1.70. Assume constant molal overflow, and a constant relative volatility equal to the mean of its values at the top-tray and reboiler temperatures.

**Data:**

Antoine equation: $\log_{10}P^{sat}(\mathrm{mmHg}) = A - \frac{B}{T + C}$, with T in °C

| Component | A | B | C |
|---|---|---|---|
| Benzene | 6.90 | 1211 | 220 |
| Toluene | 6.95 | 1344 | 219 |

| Property | Value |
|---|---|
| Molar latent heats of vaporization | Benzene 30,800 kJ/kmol; toluene 33,300 kJ/kmol |
| Approximate temperatures | Top tray 84 °C; reboiler 107 °C |
| Molar masses | Benzene 78.11 kg/kmol; toluene 92.14 kg/kmol |
| Murphree liquid efficiency (every tray) | $E_{ML}$ = 0.75; the partial reboiler is an equilibrium stage |
| Maximum allowable vapor velocity at the top | 1.3 m/s, based on the total column cross-sectional area |
| Tray spacing | 0.60 m |
| Additional height | 1.5 m above the top tray; 2.5 m below the bottom tray |
| Gas constant | 8.314 kJ/(kmol·K); the vapor behaves as an ideal gas |

(i) Determine the number of actual trays required.

(ii) Find the optimum feed tray.

(iii) Determine the diameter and height of the column.`,
          solution: String.raw`**Given:** F = 100 kmol/h, z = 0.45, saturated liquid (q = 1); $x_D$ = 0.90, $x_B$ = 0.08; L/D = 1.70; total condenser; partial reboiler (equilibrium); $E_{ML}$ = 0.75 on every tray; p = 760 mmHg.
**Assumptions:** CMO (the latent heats differ by only 8%, 30,800 vs 33,300 kJ/kmol, so CMO is reasonable); constant α; ideal gas vapor.

### 1. Relative volatility (Raoult's law, α = $P_B^{sat}/P_T^{sat}$)

| T | $P^{sat}_{benzene}$, mmHg | $P^{sat}_{toluene}$, mmHg | α |
|---|---|---|---|
| 84 °C (top tray) | $10^{6.90 - 1211/304}$ = 825.0 | $10^{6.95 - 1344/303}$ = 326.9 | 2.524 |
| 107 °C (reboiler) | $10^{6.90 - 1211/327}$ = 1572.7 | $10^{6.95 - 1344/326}$ = 671.9 | 2.341 |

$$\alpha = \frac{2.524 + 2.341}{2} = \mathbf{2.43},\qquad y = \frac{2.43x}{1 + 1.43x}$$
(Check: the bubble points from the same Antoine constants are 83.3 °C at $x_D$ and 107.7 °C at $x_B$, consistent with the given 84 and 107 °C.)

### 2. External balances and flows
$$D = F\frac{z - x_B}{x_D - x_B} = 100\frac{0.45 - 0.08}{0.90 - 0.08} = 45.12\ \mathrm{kmol/h},\qquad B = 54.88\ \mathrm{kmol/h}$$
L = 1.70(45.12) = 76.71, V = L + D = 121.83 kmol/h; q = 1: $\bar{L}$ = L + F = 176.71, $\bar{V}$ = V = 121.83 kmol/h.

### 3. Operating lines
- Top: $y = \frac{L}{V}x + \frac{D}{V}x_D = 0.6296x + 0.3333$
- Bottom: $y = \frac{\bar{L}}{\bar{V}}x - \frac{B}{\bar{V}}x_B = 1.4505x - 0.0360$
- q-line vertical at x = 0.45; the lines meet at (0.45, 0.6167).

### 4. Stepping with the Murphree liquid efficiency (top down)
$$E_{ML} = \frac{x_{j-1} - x_j}{x_{j-1} - x_j^*}\ \Rightarrow\ x_j = x_{j-1} + 0.75(x_j^* - x_{j-1})$$
where $x_{j-1}$ is the liquid entering tray j (reflux $x_0 = x_D$ for tray 1), $y_j$ comes from the operating line and $x_j^* = \frac{y_j}{\alpha - (\alpha - 1)y_j}$ is in equilibrium with it. Graphically this is the **pseudo-equilibrium curve** drawn 75% of the horizontal distance from the operating line to the equilibrium curve. Switch to the bottom line after the first tray whose liquid is below x = 0.45 (optimum feed).

The partial reboiler is an equilibrium stage: $y_R = y^*(0.08) = 0.1746$, so the liquid leaving the bottom tray must be $x_N = (y_R + 0.0360)/1.4505 = 0.1452$.

| tray | $y_j$ | $x_j^*$ | $x_j$ | line for $y_{j+1}$ |
|---|---|---|---|---|
| 1 | 0.9000 | 0.7872 | 0.8154 | top |
| 2 | 0.8468 | 0.6943 | 0.7246 | top |
| 3 | 0.7896 | 0.6067 | 0.6362 | top |
| 4 | 0.7339 | 0.5314 | 0.5576 | top |
| 5 | 0.6844 | 0.4713 | 0.4929 | top |
| 6 | 0.6437 | 0.4262 | 0.4428 | **feed tray** → bottom |
| 7 | 0.6063 | 0.3877 | 0.4015 | bottom |
| 8 | 0.5463 | 0.3311 | 0.3487 | bottom |
| 9 | 0.4697 | 0.2670 | 0.2874 | bottom |
| 10 | 0.3808 | 0.2018 | 0.2232 | bottom |
| 11 | 0.2877 | 0.1424 | 0.1626 | bottom |
| 12 | 0.1998 | 0.0931 | 0.1105 (passes 0.1452) | — |
| reboiler | 0.1746 | — | 0.0800 | — |

Fraction of tray 12 = (0.1626 − 0.1452)/(0.1626 − 0.1105) = 0.33.

![McCabe–Thiele diagram with the E_ML = 0.75 pseudo-equilibrium curve: 11.3 trays + partial reboiler, feed on tray 6](fig/2024-25-Q5-sol.svg)

**(i) Actual trays:** 11.33 → **12 actual trays + the partial reboiler**. (For comparison, ideal trays: 8.4 + reboiler.)

**(ii) Optimum feed tray:** **tray 6 from the top** (the step that crosses the intersection x = 0.45). Check: switching after tray 5 needs 12.3 trays and after tray 7 needs 11.4, against 11.3 for tray 6; switching earlier is impossible (the bottom line would cross the equilibrium curve).

### (iii) Diameter and height
- Vapor at the top: V = 121.83 kmol/h at 84 °C (357.15 K) and 101.3 kPa:
$$Q_V = \frac{VRT}{p} = \frac{(121.83/3600)(8.314)(357.15)}{101.3} = 0.992\ \mathrm{m^3/s}$$
- Area at the allowable velocity: $A = Q_V/u = 0.992/1.3 = 0.763$ m²
$$D_c = \sqrt{\frac{4A}{\pi}} = \sqrt{\frac{4(0.763)}{\pi}} = 0.986\ \mathrm{m} \approx \mathbf{1.0\ m}$$
- Height: $H = (N_{act} - 1)S + H_{top} + H_{bottom} = (12 - 1)(0.60) + 1.5 + 2.5 = \mathbf{10.6\ m}$.

Extra (from the latent heats): $Q_C = V\lambda_{top} \approx 121.83(31{,}050)/3600 \approx 1.05$ MW; $Q_R = \bar{V}\lambda \approx 1.11$ MW. The molar masses are not needed when the allowable velocity is given (they would give the vapor density, ≈ 2.7 kg/m³ at the top).

> **Exam tip:** with $E_{ML}$ step **horizontally** from the operating line only 75% of the way to the equilibrium curve; the reboiler step uses the true equilibrium curve.`,
          answer: String.raw`α = (2.524 + 2.341)/2 = 2.43; D = 45.1, B = 54.9 kmol/h; (i) 11.3 → 12 actual trays + partial reboiler; (ii) feed on tray 6 from the top; (iii) Q_V = 0.992 m³/s, D_c ≈ 0.99 → 1.0 m, H = 11(0.6) + 1.5 + 2.5 = 10.6 m.` } ] },
    { id: "2024-25-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q6", label: "", marks: "35",
          topic: "flash", sub: "Adiabatic multicomponent flash: Rachford–Rice + energy balance for T_drum",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A liquid mixture of n-butane, n-pentane, and n-hexane is fed to an adiabatic flash process at a rate of 100 kmol/h. The feed composition and the constants of the K-value correlation are given below.

| Component | Feed mole fraction, $z_i$ | $A_i$ | $B_i$ |
|---|---|---|---|
| n-Butane | 0.30 | 9.21 | 2686 |
| n-Pentane | 0.40 | 9.70 | 3207 |
| n-Hexane | 0.30 | 10.19 | 3715 |

The liquid feed is first pressurized to 2000 kPa and then heated to 120°C. At this condition, the feed remains entirely in the liquid phase.

The heated liquid then throttled through a valve into an adiabatic flash drum operating at 200 kPa, where part of it vaporizes. The drum temperature is unknown. At 200 kPa, the K-values are correlated by

$$\ln K_i = A_i - \frac{B_i}{T}$$

where T is in K.

Assume the liquid and vapor have the same mixture heat capacity, $c_p$ = 165 kJ/(kmol·K), and a constant heat of vaporization, λ = 26,500 kJ/kmol, independent of composition. Neglect any pressure effect on enthalpy.

Determine the drum temperature, and the flow rates and compositions of the liquid and vapor leaving the drum.

**Rachford-Rice equation:**
$$\sum_{i=1}^{n}\frac{z_i(K_i - 1)}{1 + \psi(K_i - 1)} = 0$$
where ψ is the fraction of the feed vaporized.`,
          solution: String.raw`**Given:** F = 100 kmol/h, z = (0.30, 0.40, 0.30); $T_F$ = 120 °C = 393.15 K (liquid); drum at 200 kPa, adiabatic; $\ln K_i = A_i - B_i/T$; $c_p$ = 165 kJ/(kmol·K) for both phases, λ = 26,500 kJ/kmol.
**Find:** $T_{drum}$, V, L, $x_i$, $y_i$.
**Assumptions:** adiabatic drum, throttling is isenthalpic ($h_F$ unchanged), equilibrium stage, enthalpy independent of pressure and composition.

### 1. Energy balance → ψ as a function of T
Take liquid at the drum temperature T as reference: $h_L = 0$, $h_V = \lambda$ (same $c_p$ for both phases), $h_F = c_p(T_F - T)$. Then $F h_F = V h_V + L h_L$ gives
$$\psi_E(T) = \frac{V}{F} = \frac{c_p(T_F - T)}{\lambda} = \frac{165(393.15 - T)}{26{,}500}$$

### 2. Mass balance → Rachford–Rice
$$f(\psi, T) = \sum\frac{z_i(K_i - 1)}{1 + \psi(K_i - 1)} = 0,\qquad x_i = \frac{z_i}{1 + \psi(K_i - 1)},\quad y_i = K_ix_i$$

### 3. Bounds on T at 200 kPa
Bubble point $\sum z_iK_i = 1$: **318.6 K** (45.4 °C); dew point $\sum z_i/K_i = 1$: **340.4 K** (67.3 °C). The drum T lies between them.

### 4. Solve the two equations together (trial and error on T)
For each trial T: K from the correlation, ψ from Rachford–Rice, compare with $\psi_E(T)$.

| T, K | $K_{C4}$ | $K_{C5}$ | $K_{C6}$ | ψ (Rachford–Rice) | ψ (energy) |
|---|---|---|---|---|---|
| 320 | 2.262 | 0.725 | 0.242 | 0.063 | 0.456 |
| 325 | 2.574 | 0.846 | 0.289 | 0.275 | 0.424 |
| 330 | 2.917 | 0.982 | 0.344 | 0.489 | 0.393 |
| 328 | 2.776 | 0.925 | 0.321 | 0.402 | 0.406 |
| **328.1** | **2.781** | **0.928** | **0.322** | **0.405** | **0.405** |

Equivalently: put $\psi_E(T)$ into f and find the root in T: f = −0.088 at 325 K, +0.055 at 330 K, 0 at **T = 328.1 K**.

![ψ from Rachford–Rice and ψ from the energy balance versus drum temperature: they cross at 328.1 K, ψ = 0.405](fig/2024-25-Q6-sol.svg)

![Rachford–Rice function at 328.1 K: f(0) = 0.302, f(1) = −0.471, root ψ = 0.405](fig/2024-25-Q6-sol2.svg)

### 5. Results
**$T_{drum}$ = 328.1 K (54.9 °C)**, ψ = 0.405: **V = 40.5 kmol/h, L = 59.5 kmol/h**.

| component | K | $x_i = \frac{z_i}{1 + 0.405(K_i - 1)}$ | $y_i = K_ix_i$ |
|---|---|---|---|
| n-butane | 2.781 | 0.174 | 0.485 |
| n-pentane | 0.928 | 0.412 | 0.382 |
| n-hexane | 0.322 | 0.414 | 0.133 |
| sum | | 1.000 | 1.000 |

**Checks:** Σx = Σy = 1; energy: $F c_p(T_F - T)$ = 100(165)(65.07) = 1.074×10⁶ kJ/h = Vλ = 40.52(26,500) ✓; n-butane balance 40.5(0.485) + 59.5(0.174) = 30.0 ✓.

> **Exam tip:** an adiabatic flash has two unknowns (T, ψ): nest Rachford–Rice (for ψ at a trial T) inside the energy balance, and first check that T lies between the bubble and dew points at the drum pressure.`,
          answer: String.raw`T_drum = 328.1 K (54.9 °C); ψ = 0.405: V = 40.5 kmol/h, y = (0.485, 0.382, 0.133); L = 59.5 kmol/h, x = (0.174, 0.412, 0.414) for (C4, C5, C6).` } ] },
    { id: "2024-25-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q7a", label: "(a)", marks: "10",
          topic: "advanced-distillation", sub: "Minimum and total reflux; effect of L/D on stages and duties",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q6b"],
          text: String.raw`Define minimum reflux and total reflux. Explain how the number of equilibrium stages and the condenser and reboiler duties change as the reflux ratio is increased from its minimum value toward total reflux.`,
          solution: String.raw`**Minimum reflux** $(L/D)_{min}$: the smallest reflux ratio at which the specified separation is possible. The operating line touches the equilibrium curve (a **pinch**, usually at the feed-line intersection; for non-ideal systems a tangent pinch). Near the pinch the steps become infinitely small, so **N → ∞**. From the pinch point: $(L/V)_{min} = \frac{x_D - y^*}{x_D - x^*}$ and $(L/D)_{min} = \frac{(L/V)_{min}}{1 - (L/V)_{min}}$.

**Total reflux** ($L/D = \infty$): all the overhead vapor is condensed and returned (D = 0, B = 0, F = 0 in operation). L = V, the operating lines lie on y = x, the steps are as large as possible and **N = N_min** (Fenske for constant α: $N_{min} = \frac{\ln[(x_D/(1-x_D))((1-x_B)/x_B)]}{\ln\alpha}$). Used at start-up and for testing efficiency.

**As L/D increases from the minimum toward total reflux** (fixed F, z, q, $x_D$, $x_B$):

| quantity | at $R_{min}$ | as L/D increases | at total reflux |
|---|---|---|---|
| operating lines | touch equilibrium (pinch) | move toward y = x | on y = x |
| equilibrium stages N | ∞ | fall rapidly at first, then slowly | $N_{min}$ |
| $V = (1 + L/D)D$ | minimum | rises linearly with L/D | ∞ per unit product |
| $Q_C = V\lambda$ | minimum | rises linearly | ∞ per unit product |
| $Q_R \approx \bar{V}\lambda$, $\bar{V} = V - (1 - q)F$ | minimum | rises linearly | ∞ per unit product |
| column diameter | smallest | grows with V | — |

Illustration (α = 2.5, z = 0.5 saturated liquid, $x_D$ = 0.95, $x_B$ = 0.05): $R_{min}$ = 1.10 and $N_{min}$ = 6.4; L/D = 1.21 (1.1 $R_{min}$) needs 17.1 stages, 1.65 needs 11.7, 3.3 needs 8.6, while $Q_C/(D\lambda)$ = L/D + 1 goes 2.21, 2.65, 4.3.

![Stages and condenser duty versus L/D: N falls from ∞ at R_min = 1.10 toward N_min = 6.4 while Q_C/(Dλ) = L/D + 1 rises linearly](fig/2024-25-Q7a-sol.svg)

So the capital cost (stages) falls and the operating cost (condenser and reboiler duties) rises; the total cost has a minimum at the optimum reflux, typically $L/D \approx 1.05$–$1.25\,(L/D)_{min}$.

> **Exam tip:** state that both duties rise linearly with L/D (energy balance), while N falls non-linearly from ∞ to N_min.`,
          answer: String.raw`R_min: operating line pinches the equilibrium curve, N = ∞, minimum Q_C and Q_R. Total reflux: L = V, lines on y = x, N = N_min, no product. Raising L/D lowers N (fast, then slowly) and raises Q_C = (1 + L/D)Dλ and Q_R linearly; optimum ≈ 1.05–1.25 R_min.` },
        { id: "2024-25-Q7b", label: "(b)", marks: "12+13",
          topic: "advanced-distillation", sub: "Partial condenser, α = 2.4: analytical stage-by-stage and McCabe–Thiele with data",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A distillation column separates benzene from toluene at 1 atm. The overhead vapor enters an equilibrium partial condenser. The distillate is withdrawn as a vapor at 100 kmol/h with a composition of 0.95 mole fraction benzene. The liquid leaving the condenser is returned to the column as reflux, with an external reflux ratio of L/D = 3. The equilibrium data can be represented by a constant relative volatility, α(benzene-toluene) = 2.4. Constant molal overflow (CMO) can be assumed. The feed enters the column below the fifth stage.

(i) Using an analytical stage-by-stage calculation, find the composition of the vapor leaving stage 3.

(ii) Using a McCabe-Thiele diagram and the equilibrium data in Table 7(b), find the composition of the liquid leaving stage 5.

Table 7(b): Vapor–liquid equilibrium data for benzene-toluene at 1 atm (x, y = mole fraction of benzene)

| x | 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| y | 0 | 0.211 | 0.375 | 0.507 | 0.615 | 0.706 | 0.783 | 0.849 | 0.906 | 0.956 | 1.0 |`,
          solution: String.raw`**Given:** D = 100 kmol/h vapor, $y_D$ = 0.95; L/D = 3; equilibrium partial condenser; CMO; feed below stage 5, so stages 1–5 are all in the rectifying section.
**Assumption (numbering):** stages are numbered from the top of the column; the partial condenser is an extra equilibrium contact ("stage 0", reflux $x_0$, as in Wankat Sec. 4.9.1). If your instructor counts the partial condenser as stage 1, shift the numbering by one (then "vapor leaving stage 3" is $y_2$ = 0.834 below).

**Flows (CMO):** $L = 3(100) = 300$, $V = L + D = 400$ kmol/h. **Top operating line** (balance around the condenser and stages 1…j):
$$y_{j+1} = \frac{L}{V}x_j + \frac{D}{V}y_D = 0.75x_j + 0.2375$$
(It meets y = x at $y_D$ = 0.95.)

### (i) Analytical, α = 2.4
Equilibrium solved for x: $x = \frac{y}{\alpha - (\alpha - 1)y} = \frac{y}{2.4 - 1.4y}$.

1. Partial condenser: $x_0 = \frac{0.95}{2.4 - 1.4(0.95)} = 0.8879$
2. $y_1 = 0.75(0.8879) + 0.2375 = 0.9034$ → $x_1 = 0.7958$
3. $y_2 = 0.75(0.7958) + 0.2375 = 0.8343$ → $x_2 = 0.6772$
4. $y_3 = 0.75(0.6772) + 0.2375 = \mathbf{0.7454}$ → $x_3 = 0.5496$

(Continuing: $y_4$ = 0.6497, $x_4$ = 0.4359; $y_5$ = 0.5644, $x_5$ = 0.3506.)

**Vapor leaving stage 3: $y_3$ ≈ 0.745 mole fraction benzene.**

### (ii) McCabe–Thiele with Table 7(b)
Plot the data (smooth monotone curve through the points), the diagonal and the top operating line from (0.95, 0.95) with slope 0.75 (intercept 0.2375). Start at $y_D$ = 0.95: the first horizontal step to the equilibrium curve is the **partial condenser** ($x_0$), then alternate vertical (operating line) and horizontal (equilibrium) steps for stages 1–5.

| contact | y leaving | x leaving |
|---|---|---|
| partial condenser | 0.950 | 0.887 |
| 1 | 0.903 | 0.794 |
| 2 | 0.833 | 0.675 |
| 3 | 0.744 | 0.547 |
| 4 | 0.648 | 0.434 |
| 5 | 0.563 | **0.350** |

![McCabe–Thiele diagram with the Table 7(b) data: partial condenser step from y_D = 0.95, then 5 rectifying stages on y = 0.75x + 0.2375; x_5 ≈ 0.350](fig/2024-25-Q7b-sol.svg)

**Liquid leaving stage 5: $x_5$ ≈ 0.35** mole fraction benzene (0.356 with straight-line interpolation between the table points). The table data are almost exactly α ≈ 2.4, so (i) and (ii) agree.

> **Exam tip:** a partial condenser is an equilibrium contact: the first horizontal step from $y_D$ gives the reflux $x_0$, and the top operating line passes through $(y_D, y_D)$.`,
          answer: String.raw`L = 300, V = 400 kmol/h; y = 0.75x + 0.2375; x_0 = 0.888. (i) y_3 = 0.745 (y_1 0.903, y_2 0.834). (ii) Graphically x_5 ≈ 0.35 (partial condenser not counted as a stage).` } ] },
    { id: "2024-25-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q8a", label: "(a)", marks: "4+2+4",
          topic: "mccabe-thiele", sub: "Partial reboiler and bottom tray: B, x_B, y_R, y_N, x_N−1 (α = 2.5)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A distillation column for a binary mixture of A (more volatile) and B has an equilibrium partial reboiler. Liquid leaves the bottom tray (tray N) and enters the reboiler at 150 kmol/h with 30 mol% A. The vapor leaving the reboiler (boil-up) is returned to the column at 90 kmol/h, and the remaining liquid leaves as the bottoms product. The relative volatility is constant at 2.5. Assume that every tray is an equilibrium stage (100% tray efficiency) and that constant molal overflow applies.

(i) Calculate the bottoms flow rate, the compositions of the bottoms liquid and the boil-up vapor.

(ii) Find the composition of the vapor leaving tray N.

(iii) Find the composition of the liquid entering tray N from tray N - 1.`,
          solution: String.raw`**Given:** $\bar{L}$ = 150 kmol/h, $x_N$ = 0.30 into the reboiler; $\bar{V}$ = 90 kmol/h; α = 2.5; equilibrium reboiler and trays; CMO.

### (i) Reboiler
1. Total balance: $B = \bar{L} - \bar{V} = 150 - 90 = \mathbf{60\ kmol/h}$.
2. A balance with equilibrium ($y_R$ and $x_B$ leave the equilibrium reboiler):
$$\bar{L}x_N = \bar{V}y_R + Bx_B,\qquad y_R = \frac{2.5x_B}{1 + 1.5x_B}$$
$$150(0.30) = 90\frac{2.5x_B}{1 + 1.5x_B} + 60x_B\ \Rightarrow\ 90x_B^2 + 217.5x_B - 45 = 0$$
$$x_B = \frac{-217.5 + \sqrt{217.5^2 + 4(90)(45)}}{2(90)} = \mathbf{0.192}$$
3. $y_R = \frac{2.5(0.1917)}{1 + 1.5(0.1917)} = \mathbf{0.372}$. Check: 90(0.3722) + 60(0.1917) = 45.0 ✓.

### (ii) Vapor leaving tray N
Tray N is an equilibrium stage, so its vapor is in equilibrium with its liquid $x_N$ = 0.30:
$$y_N = \frac{2.5(0.30)}{1 + 1.5(0.30)} = \frac{0.75}{1.45} = \mathbf{0.517}$$

### (iii) Liquid entering tray N (from tray N − 1)
Bottom operating line (balance around tray N and the reboiler): $\bar{L}x_{N-1} = \bar{V}y_N + Bx_B$
$$x_{N-1} = \frac{90(0.5172) + 60(0.1917)}{150} = \frac{46.55 + 11.50}{150} = \mathbf{0.387}$$

![Bottom of the McCabe–Thiele diagram: reboiler step (x_B = 0.192, y_R = 0.372), tray N step (x_N = 0.30, y_N = 0.517) and the operating line giving x_N−1 = 0.387](fig/2024-25-Q8a-sol.svg)

> **Exam tip:** the reboiler is solved by combining its balance with equilibrium (a quadratic for constant α); after that, alternate equilibrium (tray) and the bottom operating line.`,
          answer: String.raw`(i) B = 60 kmol/h, x_B = 0.192, y_R = 0.372; (ii) y_N = 0.517; (iii) x_N−1 = 0.387.` },
        { id: "2024-25-Q8b", label: "(b)", marks: "15",
          topic: "column-design", sub: "Sieve vs valve vs bubble-cap trays",
          type: "theory", syllabus: "in", repeats: ["2011-12-Q8b", "2012-13-Q4b"],
          text: String.raw`Compare the common types of distillation trays (sieve, valve, and bubble-cap) in terms of their features, advantages, and disadvantages.`,
          solution: String.raw`![Cross-sections: sieve tray (fixed holes), valve tray (liftable disc), bubble-cap tray (riser and slotted cap)](fig/2024-25-Q8b-sol.svg)

| feature | sieve tray | valve tray | bubble-cap tray |
|---|---|---|---|
| construction | flat deck with punched/drilled holes (≈ 3–12 mm) | large holes with liftable valve covers (legs or cage) | riser (chimney) over each hole, slotted cap on top |
| vapor path | straight up through the holes | up and sideways under the lifted disc | up the riser, down under the cap, out of the slots |
| cost | lowest (base) | about 1.2 × sieve | about 4 × valve |
| efficiency at design | good | about the same as sieve | same or lower |
| turndown | poor: weeps below ≈ 60% of design vapor rate | good: lift follows vapor rate, slot velocity nearly constant | best: liquid seal, no weeping, works at very low liquid rates |
| entrainment | reference | similar | about 3 × sieve (needs larger spacing) |
| pressure drop | low | moderate (higher than sieve) | highest |
| fouling, solids | best, easy to clean | valves can stick or plug, legs wear | coking, polymer problems |
| design information | open literature | proprietary, vendor design | extensive old data |
| use today | standard, fouling service | most new columns | old columns, very low liquid rates |

**Sieve:** + cheapest, simple, high capacity, easy to clean; − poor turndown (weeping, then dumping at low vapor rate), efficiency falls at low rates.

**Valve:** + wide operating range (good turndown) with nearly constant efficiency, handles feed-rate changes; − about 20% dearer, moving parts can wear or stick in dirty service, vendor-proprietary designs.

**Bubble-cap:** + positive liquid seal (no weeping), operates at very low liquid and vapor rates, large design database; − expensive, heavy, highest pressure drop, high entrainment and liquid gradient, fouls; rarely chosen for new columns.

Efficiency ranking: valve ≥ sieve ≥ bubble-cap (except near flooding), so bubble-cap efficiencies give a conservative design for the others.

> **Exam tip:** a comparison table with cost, turndown, entrainment, pressure drop and fouling earns most of the marks.`,
          answer: String.raw`Sieve: cheapest and easy to clean, poor turndown. Valve: ~1.2× sieve cost, best turndown at similar efficiency, moving parts. Bubble-cap: ~4× valve cost, no weeping and works at very low rates, but high Δp and entrainment; obsolete for new columns.` },
        { id: "2024-25-Q8c", label: "(c)", marks: "10",
          topic: "column-design", sub: "Choosing the number of liquid-flow passes",
          type: "theory", syllabus: "in", repeats: ["2012-13-Q4d", "2021-22-Q4c", "2022-23-Q1b", "2023-24-Q4b"],
          text: String.raw`How would you choose the number of liquid-flow passes on a distillation tray?`,
          solution: String.raw`**Procedure**
1. Size the column diameter D from the **vapor** load (flooding velocity, fraction of flooding, downcomer area).
2. Find the **liquid** load (volumetric liquid rate, gpm, at the tray with the largest liquid flow, usually below the feed).
3. Enter the flow-pattern selection guide (Huang–Hodson, Wankat Ch. 10 and the slides) with D (ft) and the liquid rate (gpm), both on log scales, and read the region:

![Selection guide: liquid capacity vs tower diameter with reverse, cross, double-pass and four-pass regions](fig/2022-23-Q1b-sol.svg)

| region | liquid rate (approx.) | pattern |
|---|---|---|
| low | below ≈ 30–50 gpm | **reverse flow** (a centre baffle sends the liquid across and back: longer path) |
| average | ≈ 50 to 200–500 gpm (rises with D up to ≈ 6 ft) | **cross flow, single pass** (most common, open design data, handles solids) |
| high | ≈ 500 to 700–1100 gpm, large D | **double pass** (liquid split in two: half the flow path and weir loading) |
| very high | above ≈ 1100 gpm | **four-pass / cascade** |

4. Check the weir loading (liquid per unit weir length), hydraulic gradient and downcomer capacity; if they are too high, go to the next number of passes (or a larger D).

**Why:** liquid-handling capacity grows with weir length (∝ D) while vapor capacity grows with area (∝ D²). In large columns with high liquid rates a single pass runs out of weir and downcomer capacity and develops a large liquid gradient (vapor maldistribution, lower efficiency) before it runs out of vapor area, so the liquid is split into more passes. More passes cost more and shorten the flow path (slightly lower efficiency), so use the fewest passes that work. Three-pass trays are avoided (unequal liquid split); columns below about 3 ft diameter use single cross flow (or packing).

> **Exam tip:** label both axes (liquid rate, gpm, and diameter, ft, log scales) and the regions; that is what earns the marks.`,
          answer: String.raw`Size D from the vapor load, then read (D, liquid gpm) on the flow-pattern guide: reverse flow at low liquid rates, single cross flow for average, double pass and then four-pass at high rates in large columns; check weir loading and gradient and use the fewest passes that work.` } ] }
  ]
});
