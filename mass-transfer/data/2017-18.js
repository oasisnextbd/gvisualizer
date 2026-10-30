QB.paper({
  year: "2017-18", date: "11/09/2018", marks: 210,
  rules: String.raw`Section A: four questions, answer any three. Section B: Q5 is compulsory, answer any two from the rest. Separate scripts for each section. Assume reasonably any missing data; notations have their usual meanings.`,
  questions: [
    { id: "2017-18-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q1a", label: "(a)", marks: "9",
          topic: "absorption", sub: "Absorption vs stripping: purpose, line positions, diameter basis",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Make a comparison between absorption and stripping processes on the basis of:

(i) purpose of use

(ii) relative position of equilibrium and operating lines in McCabe–Thiele diagram and analysis

(iii) reference flow for the determination of column diameters.`,
          solution: String.raw`| basis | Absorption | Stripping |
|---|---|---|
| (i) purpose | Remove a solute from a **gas** by dissolving it in a nonvolatile liquid solvent (the solvent is the separating agent). Examples: CO2 or H2S removal from natural gas with amine/water, NH3 recovery, C4–C5 recovery from refinery gas with heavy oil. | Remove a solute from a **liquid** by transferring it into an insoluble gas (air, N2, steam is the separating agent). Examples: NH3 or CO2 stripping from water, solvent regeneration in a gas plant. |
| direction of transfer | gas → liquid | liquid → gas |
| (ii) line positions on y–x | Operating line lies **above** the equilibrium line ($y > y^*$, driving force pushes solute into the liquid). | Operating line lies **below** the equilibrium line ($y < y^*$, solute leaves the liquid). |
| limiting flow | $L_{min}$: operating line pinches the equilibrium curve at the **bottom** (concentrated gas inlet end). | $V_{min}$ (or $(L/V)_{max}$): pinch at the **top** where the liquid feed enters. |
| stepping | from the top $(x_0, y_1)$ down to $y_{N+1}$, or vice versa; slope $L/V$ (or $L/G$ solute-free) | same construction, but the steps lie between a lower operating line and an upper equilibrium line |
| Kremser factor | absorption factor $A = L/(mV)$; easy when $A > 1$ | stripping factor $S = mV/L$; easy when $S > 1$ |
| (iii) diameter | Gas flow is large and sets the vapour load: size on the **gas flow at the bottom** (entering rich gas, largest $V$). | Vapour load is largest at the **top** where the gas leaves carrying the stripped solute; size on the **exit gas (top)**, and check the liquid load. |

Column diameter in both is found the same way as for a distillation column: flooding velocity from the vapour/gas flow rate, operating at 75–85 % of flood, $D = \sqrt{4A/\pi}$ (slides: "the column diameter is designed the same way as for a staged distillation column").

**Exam tip:** a sketch of both diagrams (op line above eq for absorber, below for stripper) earns most of the marks for (ii).`,
          answer: String.raw`Absorber: gas → liquid, op line above equilibrium, Lmin pinch at the bottom, size on the bottom (rich) gas flow. Stripper: liquid → gas, op line below equilibrium, Vmin pinch at the top, size on the top exit gas.` },
        { id: "2017-18-Q1b", label: "(b)", marks: "6",
          topic: "absorption", sub: "Why an absorber is followed by a stripper (gas treatment plant)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"An absorption unit is often followed by a stripping unit in many industries including gas treatment plant" — Explain the reason.`,
          solution: String.raw`![Gas treatment plant: absorber at low T and high p, heated rich solvent stripped at high T and low p, lean solvent recycled](fig/2017-18-Q1b-sol.svg)

- The absorber produces a **rich solvent** loaded with solute. Throwing it away wastes solvent (amines such as MEA are expensive), creates a disposal problem, and loses a solute that may be a product.
- A **stripper regenerates the solvent**: the rich solvent is heated (and/or let down in pressure), which raises $m = H/p$ so the equilibrium line moves up and above the operating line. The solute transfers back to a stripping gas or steam.
- The **lean solvent is cooled and recycled** to the absorber, so the plant runs in a closed solvent loop with only make-up solvent.
- The solute comes out concentrated in the stripper overhead (e.g. CO2/H2S from natural-gas sweetening with MEA, sent to sulfur recovery). Chemical absorption with a **reversible** reaction (MEA) is preferred precisely because the solvent can be regenerated this way.

**Exam tip:** state the key physics: absorption favoured by low T, high p; stripping by high T, low p.`,
          answer: String.raw`The stripper regenerates the loaded solvent (heat/lower p reverses the equilibrium) so the solvent is recycled and the solute recovered; this closes the solvent loop of a gas plant.` },
        { id: "2017-18-Q1c", label: "(c)", marks: "20",
          topic: "absorption", sub: "Concentrated CO2 absorber, 1.5 Lmin, 95 % absorbed (mole ratios)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A gas stream contains 90 mole % N$_2$ and 10 mole % CO$_2$. We wish to absorb the CO$_2$ into water. The inlet water is at 5 °C and can be considered as pure. Because of cooling coils, operation can be assumed to be isothermal. Operation is at 10 atm. If the liquid flow rate is 1.5 times the minimum liquid flow rate, how many equilibrium stages are required to absorb 95 % of the CO$_2$? The Henry's law constant, H, for CO$_2$ in water at 5 °C is 875. Choose a basis of 1 mole/hr of entering gas. (Graph papers to be attached with answer script.)`,
          solution: String.raw`This is Wankat Example 12-3 (slide Example 15-1) with 95 % instead of 92 % absorption.

**Given:** $y_{N+1} = 0.10$, $G$ (N2) = 0.90 mol/h, pure water $X_0 = 0$, $H = 875$ atm/mole frac (paper; Wankat Table 12-1 gives 876), $p = 10$ atm, 95 % absorbed, $L = 1.5L_{min}$.

**Find:** $L_{min}$, $L$, number of equilibrium stages.

**Assumptions:** N2 insoluble, water nonvolatile, isothermal and isobaric, so the solute-free flows $L$ (water) and $G$ (N2) are constant. The gas is concentrated (10 %), so use **mole ratios** $X = x/(1-x)$, $Y = y/(1-y)$: the operating line is then straight, the equilibrium curve is not.

1. Equilibrium (Henry's law):
$$y = \frac{H}{p}x = \frac{875}{10}x = 87.5x, \qquad Y = \frac{y}{1-y}\ \text{with}\ x = \frac{X}{1+X}$$

| x | X | y = 87.5x | Y |
|---|---|---|---|
| 0.0002 | 0.0002 | 0.0175 | 0.0178 |
| 0.0004 | 0.0004 | 0.0350 | 0.0363 |
| 0.0006 | 0.0006 | 0.0525 | 0.0554 |
| 0.0008 | 0.0008 | 0.0700 | 0.0753 |
| 0.0010 | 0.0010 | 0.0875 | 0.0959 |
| 0.0012 | 0.0012 | 0.1050 | 0.1173 |

2. End compositions:
$$Y_{N+1} = \frac{0.10}{0.90} = 0.11111, \qquad Y_1 = (1-0.95)Y_{N+1} = 0.005556, \qquad X_0 = 0$$

3. Minimum liquid: the equilibrium curve in Y–X is concave upward, so the pinch is at the gas inlet (bottom). The liquid in equilibrium with $Y_{N+1}$: $y = 0.10 \Rightarrow x^* = 0.10/87.5 = 0.0011429$, $X^* = 0.0011442$.
$$\left(\frac{L}{G}\right)_{min} = \frac{Y_{N+1}-Y_1}{X^*-X_0} = \frac{0.11111-0.005556}{0.0011442} = 92.26$$
$$L_{min} = 92.26(0.90) = 83.0\ \mathrm{mol\ water/h}$$
(checked numerically: the line from $(0, Y_1)$ to $(X^*, Y_{N+1})$ stays above the curve, so this is the true pinch.)

4. Actual flow: $L = 1.5L_{min} = 124.5$ mol water/h, $(L/G) = 138.4$.

5. Operating line (mass balance around the top):
$$Y_{j+1} = \frac{L}{G}X_j + \left(Y_1 - \frac{L}{G}X_0\right) = 138.38X_j + 0.005556$$
Outlet liquid: $X_N = (Y_{N+1}-Y_1)/(L/G) = 0.10556/138.38 = 0.000763$.

6. McCabe–Thiele stepping from the top (stage $j$: $X_j$ from equilibrium with $Y_j$, then $Y_{j+1}$ from the operating line):

| stage | Y_j (gas leaving) | X_j (liquid leaving) |
|---|---|---|
| 1 | 0.005556 | 0.0000631 |
| 2 | 0.014294 | 0.0001611 |
| 3 | 0.027847 | 0.0003097 |
| 4 | 0.048416 | 0.0005280 |
| 5 | 0.078629 | 0.0008338 > X_N |

Fraction of stage 5: $(X_N - X_4)/(X_5-X_4) = (0.000763-0.000528)/(0.000834-0.000528) = 0.77$.

![Y–X diagram for the CO2 absorber: equilibrium curve, minimum and actual operating lines, 4.77 stages](fig/2017-18-Q1c-sol.svg)

**Result:** $N = 4.77$, so **5 equilibrium stages** (the slide example with 92 % absorption needs 4.13).

**Exam tip:** in an absorber the operating line is above the equilibrium curve; plot Y–X on different scales and step from $(X_0, Y_1)$ at the top.`,
          answer: String.raw`(L/G)min = 92.3 (Lmin = 83.0 mol/h), L = 124.5 mol water/h, XN = 7.6×10⁻⁴; 4.77 → 5 equilibrium stages.` } ] },
    { id: "2017-18-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q2a", label: "(a)", marks: "6+4+4",
          topic: "leaching", sub: "Washing: McCabe–Thiele assumptions, when to use Kremser, role of solid",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`State the assumptions required for McCabe–Thiele analysis for washing. When should Kremser analytical calculation be used for washing? How does the solid enter into washing calculations?`,
          solution: String.raw`### Assumptions (constant underflow and overflow)
Washing equilibrium is $y = x$ (same solute concentration in the overflow and in the liquid entrained in the underflow). For a straight operating line we need constant liquid flows. The underflow liquid is
$$U = (\text{rate of dry solids})\left(\frac{\varepsilon}{1-\varepsilon}\right)\frac{\rho_f}{\rho_s}$$
so $U$ (and by mass balance $O$) is constant if:
1. No solids leave in the overflow and the solids do not dissolve, so the solids flow is constant.
2. $\rho_f$ and $\rho_s$ are constant (dilute solution: solute has little effect on liquid density).
3. The porosity $\varepsilon$ is constant, so the same volume of liquid is entrained from stage to stage.

Also: isothermal, no adsorption of solute on the solid, equilibrium stages (complete mixing in each mixer, clean separation in each settler).

Then the operating line is $y_{j+1} = (U/O)x_j + (y_{N+1} - (U/O)x_N)$, straight with slope $U/O$, and $y = x$ is the equilibrium line.

### When to use Kremser
Since the equilibrium line $y = x$ is straight ($m = 1$) and $U/O$ is constant, the Kremser equation applies to **countercurrent washing with no additional assumptions** (slides). Use it whenever the three constant-flow assumptions hold, especially when many stages are involved or when N is given and recovery is wanted:
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - mO/U}{1-(mO/U)^{N+1}}, \qquad x_N^* = y_{N+1}/m$$
Use McCabe–Thiele (or stage-by-stage) instead if the underflow changes (variable $U$), for cross-flow systems, or with intermediate feeds.

### How the solid enters
The solid is an inert carrier: it does not appear in the equilibrium ($y = x$) and does not dissolve. It enters only through the **underflow liquid flow** $U$, which is fixed by the solids rate, $\varepsilon$, $\rho_f$ and $\rho_s$ (or by "kg liquid entrained per kg dry solid"), and it sets the slope $U/O$. A wet-solids feed is also a liquid feed: its entrained liquid ($U_0$, $x_0$) is the "feed" to stage 1.`,
          answer: String.raw`Constant U and O need: no solids in overflow and none dissolve, constant ρf and ρs, constant porosity. Kremser applies to countercurrent washing directly (m = 1, constant U/O). The solid only fixes the entrained liquid U.` },
        { id: "2017-18-Q2b", label: "(b)", marks: "6",
          topic: "leaching", sub: "How leaching differs from washing",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain adequately how leaching differs from washing.`,
          solution: String.raw`| aspect | Washing | Leaching |
|---|---|---|
| where the solute is | in the liquid entrained in the pores/between particles; solid itself holds no solute | initially **part of the solid** (inside the matrix), must dissolve and diffuse out |
| what happens | solute is displaced by clear wash liquor | solute dissolves into the solvent (solid–liquid extraction) |
| equilibrium | $y = x$ (same concentration in overflow and underflow liquid) | usually **not** $y = x$; measured experimentally (solute between solvent and solid) |
| solids flow | constant (inert, no dissolution) | usually **not constant** (the solid loses mass as solute dissolves) |
| rate | fast, equilibrium almost reached | diffusion in the solid is slow: hours/days (pickles) or years (in-situ copper leaching), so stages rarely reach equilibrium |
| analysis | McCabe–Thiele or Kremser with constant U/O | rigorous analysis is like partially miscible extraction; simple cases use modified McCabe–Thiele/Kremser with an **effective equilibrium constant** $y = m_E x$ |
| examples | salt from mined wet sand, NaOH from CaCO3 slurry | coffee, tea, sugar from cane/beets, oil from soybeans, metals from ores, pharmaceuticals from leaves/roots |

Washing can be viewed as a special case of leaching in which the solid does not dissolve.`,
          answer: String.raw`In washing the solute sits in the entrained liquid (y = x, constant solids); in leaching it is part of the solid and must dissolve and diffuse out (y ≠ x, solids flow changes, slow, use effective mE).` },
        { id: "2017-18-Q2c", label: "(c)", marks: "15",
          topic: "leaching", sub: "Sugar from cane: 11-stage countercurrent leaching, Kremser with mE",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`In the leaching of sugar from sugar cane, water is used as the solvent. Typically about 11 stages are used in a countercurrent Rotocel or other leaching system. On a volumetric basis liquid flow rate/solid flow rate = 0.95. The effective equilibrium constant is $M_E$ = 1.18, where $M_E$ = (concentration, g/liter in liquid)/(concentration g/liter in solid). If pure water is used as the inlet solvent, predict the recovery of sugar in the solvent.`,
          solution: String.raw`This is Wankat Problem 14.D8 (slide Problem D7).

**Given:** $N = 11$, $F_{solv}/F_{solid} = 0.95$ (volumetric), $y = m_E x$ with $m_E = 1.18$ (g/L basis), pure water in: $y_{N+1} = 0$.

**Find:** recovery $= 1 - x_N/x_0$.

**Assumptions:** constant volumetric flows of solvent and solid (Kremser assumptions), effective equilibrium linear ($y = m_E x$) and valid for these flow conditions (it lumps entrainment and non-equilibrium stages).

1. Operating line (countercurrent leaching, concentrations in g/L):
$$y_{j+1} = \frac{F_{solid}}{F_{solv}}x_j + y_1 - \frac{F_{solid}}{F_{solv}}x_0$$
2. Kremser (solid-phase form, as for washing):
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - m_E F_{solv}/F_{solid}}{1 - (m_E F_{solv}/F_{solid})^{N+1}}, \qquad x_N^* = \frac{y_{N+1}}{m_E} = 0$$
3. Extraction factor: $m_E F_{solv}/F_{solid} = 1.18 \times 0.95 = 1.121$.
4. $$\frac{x_N}{x_0} = \frac{1-1.121}{1-1.121^{12}} = \frac{-0.121}{1-3.938} = 0.0412$$
5. Recovery $= 1 - 0.0412 = 0.959$.

**Result:** about **95.9 %** of the sugar is recovered in the water (Wankat answer 95.9 %).

**Exam tip:** recovery needs only the ratio $x_N/x_0$, so $x_0$ is never needed. Use the exponent $N+1 = 12$.`,
          answer: String.raw`mE·Fsolv/Fsolid = 1.121; xN/x0 = (1 − 1.121)/(1 − 1.121¹²) = 0.041; recovery ≈ 95.9 %.` } ] },
    { id: "2017-18-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q3a", label: "(a)", marks: "12+6",
          topic: "partial-extraction", sub: "Countercurrent stages on a triangular diagram; Δ when R1 = E0",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`For a partially miscible countercurrent liquid–liquid extraction:

(i) Consider that the initial feed (raffinate) and solvent (extract) are completely specified. All required equilibrium data are given in right triangular diagram. The solute concentration in raffinate is required to be reduced to a desired low value. With the help of clean hand drawing, demonstrate the determination of equilibrium stages required for this separation. (12)

(ii) When $E_0 > R_1$ the difference point is on the left side of the diagram; and when $R_1 > E_0$ the difference point is on the right of the diagram. What happened when $R_1 = E_0$? Answer this question using a logical argument. (6)`,
          solution: String.raw`### (i) Procedure (stages numbered from the raffinate end)
Cascade: feed $F = R_{N+1}$ enters stage N, solvent $S = E_0$ enters stage 1; raffinate $R_1$ leaves stage 1, extract $E_N$ leaves stage N.

Known: $F$, its composition, $S$, its composition, and the desired $x_{A,1}$.

1. Plot the equilibrium data (saturated raffinate and extract curves) and the tie lines; draw the conjugate line for interpolating tie lines.
2. Plot $F$, $S = E_0$ and $R_1$ (on the saturated raffinate curve at the specified $x_{A,1}$).
3. **Mixing point M** on line $SF$ by the lever rule or
$$x_{A,M} = \frac{E_0 y_{A,0} + R_{N+1}x_{A,N+1}}{E_0+R_{N+1}}$$
4. Since $E_0 + R_{N+1} = R_1 + E_N = M$, the extract $E_N$ is where line $R_1M$ extended meets the saturated extract curve. Flows by lever rule: $E_N = M\,\overline{R_1M}/\overline{R_1E_N}$, $R_1 = M - E_N$.
5. **Difference point**
$$\Delta = E_0 - R_1 = E_1 - R_2 = \cdots = E_j - R_{j+1} = E_N - R_{N+1}$$
$\Delta$ lies on both lines $E_0R_1$ and $E_NR_{N+1}$ (extended), so it is their **intersection** (or use one line and the coordinate $x_{A,\Delta} = (E_0y_{A,0} - R_1x_{A,1})/\Delta$, or the lever rule).
6. **Step off:** from $R_1$ follow the tie line to $E_1$ (equilibrium); draw line $\Delta E_1$ and extend to the raffinate curve: $R_2$ (operating line, passing streams). Tie line $R_2 \to E_2$, line $\Delta E_2 \to R_3$, and so on, until a tie line reaches or passes $E_N$ (equivalently $R_{j+1}$ passes $F$). Count tie lines; the last stage is fractional.

Worked illustration (Wankat Example 13-4, acetic acid–water–isopropyl ether, Treybal data in the slides): $F = 1000$ kg/h, 35 % acid; $S = 1475$ kg/h pure IPE; $x_{A,1} = 0.10$. Then $x_{A,M} = 350/2475 = 0.1414$; $E_N$ at $y_A = 0.156$, $E_N = 1843$ kg/h, $R_1 = 632$ kg/h; $\Delta = E_0 - R_1 = 843$ kg/h at $(x_D, x_A) = (-0.659, -0.075)$, to the left of the diagram because $E_0 > R_1$.

![Right-triangle diagram for Wankat Example 13-4: mixing point M, lines E0R1 and ENF meeting at Δ, tie lines and operating lines stepped from R1](fig/2017-18-Q3a-sol.svg)

Computer stepping with linear interpolation of the tie-line data gives about 5.4 stages; Wankat's hand graph gives 5.8 and his McCabe–Thiele transfer gives 6 1/6. Expect ±0.5 stage from graph reading; the answer is "about 6 equilibrium stages".

### (ii) $R_1 = E_0$
$\Delta = E_0 - R_1$ is a flow of magnitude $E_0 - R_1$, and its coordinates are
$$x_{A,\Delta} = \frac{E_0y_{A,0}-R_1x_{A,1}}{E_0-R_1}, \qquad x_{D,\Delta} = \frac{E_0y_{D,0}-R_1x_{D,1}}{E_0-R_1}$$
- As $E_0 - R_1 \to 0^+$ the denominators go to zero and $\Delta$ moves off to $-\infty$ on the left; for $E_0 - R_1 \to 0^-$ it comes in from $+\infty$ on the right.
- At $R_1 = E_0$ exactly, $\Delta = 0$: the difference point is **at infinity**. Every passing-stream pair then has $E_j = R_{j+1}$, and $E_jy_j - R_{j+1}x_{j+1}$ is the same constant (nonzero) vector, so the lines $E_jR_{j+1}$ are all **parallel**.
- In practice: step with operating lines drawn parallel to $E_0R_1$ (= parallel to $E_NR_{N+1}$). This happens at one particular S/F, the boundary between left-side and right-side $\Delta$ (Wankat Fig. 13-28).

**Exam tip:** state the three ways to locate $\Delta$ (intersection, coordinates, lever rule) even in a sketch question.`,
          answer: String.raw`Find M on SF, EN on line R1M, Δ = intersection of E0R1 and ENF extended; step tie line Rj→Ej then line ΔEj→Rj+1 until EN is passed (Ex. 13-4: ≈ 6 stages). If R1 = E0, Δ is at infinity and all operating lines are parallel.` },
        { id: "2017-18-Q3b", label: "(b)", marks: "17",
          topic: "immiscible-extraction", sub: "Acetic acid from water into 3-heptanol, Kremser (m = 0.828)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`We have a mixture of acetic acid in water and wish to extract this with 3-heptanol at 25 °C. Equilibrium is
$$\frac{\text{Wt frac acetic acid in solvent}}{\text{Wt frac acetic acid in water}} = 0.828$$
The inlet water solution flows at 550 lb/hr and is 0.0097 wt frac acetic acid. We desire an outlet water concentration of 0.00046 wt frac acetic acid. The solvent flow rate is 700 lb/hr. The entering solvent contains 0.0003 wt frac acetic acid. Find the outlet solvent concentration and the number of equilibrium stages required (use the Kremser equation).`,
          solution: String.raw`This is Wankat Problem 13.D4 (slide Problem D4).

**Given:** $R = 550$ lb/h (water phase), $E = 700$ lb/h (solvent), $x_0 = 0.0097$, $x_N = 0.00046$, $y_{N+1} = 0.0003$, $y = 0.828x$ (wt fractions).

**Find:** $y_1$ (outlet solvent) and $N$.

**Assumptions:** dilute, so total flows $R$ and $E$ are constant and wt fractions can be used; water and 3-heptanol immiscible; isothermal; linear equilibrium $y = mx + b$ with $m = 0.828$, $b = 0$.

1. External mass balance:
$$y_1 = y_{N+1} + \frac{R}{E}(x_0 - x_N) = 0.0003 + \frac{550}{700}(0.0097-0.00046) = 0.00756$$
2. Equilibrium value at the feed end: $y_1^* = mx_0 = 0.828(0.0097) = 0.008032$. Extraction factor $mE/R = 0.828(700)/550 = 1.0538$; $R/(mE) = 0.9489$.
3. Kremser (extraction form, slide):
$$N = \frac{\ln\left[\left(1-\frac{mE}{R}\right)\left(\frac{y_{N+1}-y_1^*}{y_1-y_1^*}\right)+\frac{mE}{R}\right]}{\ln\left(\frac{R}{mE}\right)}$$
$$\frac{y_{N+1}-y_1^*}{y_1-y_1^*} = \frac{0.0003-0.008032}{0.00756-0.008032} = \frac{-0.007732}{-0.000472} = 16.40$$
$$N = \frac{\ln[(-0.0538)(16.40)+1.0538]}{\ln 0.9489} = \frac{\ln(0.1715)}{-0.05245} = 33.6$$
4. Check with the raffinate form: $x_N^* = y_{N+1}/m = 0.000362$; $N = \ln[(1 - R/mE)(x_0 - x_N^*)/(x_N - x_N^*) + R/mE]/\ln(mE/R) = 33.6$. Same.

**Result:** $y_1 = 0.00756$ wt frac acetic acid; $N = 33.6$, so **34 equilibrium stages** (Wankat answer 33.6).

**Exam tip:** $mE/R$ is barely above 1, so the operating and equilibrium lines are almost parallel and many stages are needed; carry 4 significant figures or the log blows up.`,
          answer: String.raw`Outlet solvent y1 = 0.00756 wt frac; mE/R = 1.054; Kremser N = 33.6 → 34 equilibrium stages.` } ] },
    { id: "2017-18-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q4a", label: "(a)", marks: "5",
          topic: "immiscible-extraction", sub: "Properties of a good extraction solvent",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are some of the properties you would look for in a good solvent to be used for liquid–liquid extraction?`,
          solution: String.raw`- **High selectivity** for the solute over contaminants: $\alpha = K_{desired}/K_{undesired}$ large.
- **Large distribution coefficient** $K_{desired}$ for the solute, so less solvent is needed.
- **Immiscible (or only slightly miscible)** with the diluent, and **easy to separate** from the solute and the diluent afterwards (e.g. by distillation with a large relative volatility, no azeotrope), because solvent recovery is often the most expensive step.
- **Density difference** from the feed phase and suitable **interfacial tension** for fast phase separation without stable emulsions; low viscosity.
- **Nontoxic, noncorrosive, nonflammable, chemically and thermally stable, environmentally friendly**, readily available and **inexpensive**.`,
          answer: String.raw`High selectivity and distribution coefficient, immiscible with and easily recovered from the diluent, good density difference/phase separation, and safe, stable, cheap.` },
        { id: "2017-18-Q4b", label: "(b)", marks: "5+5+5+5+5+5",
          topic: "column-design", sub: "Sieve-tray supports, downcomers and weirs, flow patterns, flooding, tray ranking, spacing",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`In the context of staged distillation column design:

(i) List the mechanical supports essentially required for sieve trays.

(ii) State the function of downcomers and weirs.

(iii) Demonstrate graphically the flow pattern (reverse flow, cross flow and double pass) selection guide for sieve trays.

(iv) Explain briefly the difference between entrainment flooding and downcomer flooding.

(v) Rank sieve, valve and bubble cap trays on the basis of efficiency and turndown.

(vi) What effect does increasing the spacing between trays have on column efficiency?`,
          solution: String.raw`> The slides list "mechanical support of trays" as a heading only; the support details in (i) are from Wankat Fig. 10-7 (Zenz).

### (i) Mechanical supports for sieve trays
The supports must carry the tray weight plus the heaviest liquid load without blocking much vapour area or active area.
- **Support ring** welded to the shell, on which the tray panels rest and are clamped.
- **Major support beams** (I-beams or trusses) across the column in larger diameters, with **minor beams / support bars** under the panels.
- **Tray panels** (sections small enough to pass through a manway) bolted or clamped to each other and to the ring; one removable **manway panel**.
- **Downcomer bolting bars** and downcomer plates fixed to the shell, plus the **seal pan** at the bottom downcomer.
- Weir plates bolted to the tray deck. Supports become more critical as diameter increases.

### (ii) Downcomers and weirs
- **Downcomer:** carries liquid from one tray to the tray below and gives residence time for vapour to disengage from the froth, so clear liquid reaches the tray below; its liquid seal stops vapour bypassing up the downcomer. Downcomer backup is where downcomer flooding starts.
- **Weir:** a dam at the tray outlet that keeps a set liquid depth (2–4 in) on the tray, so vapour must bubble through a froth (contact time, efficiency) and the downcomer stays sealed; its length and type set the liquid-handling range (notched weirs for low or variable liquid rates).

### (iii) Flow-pattern selection guide
![Sieve-tray flow-pattern selection guide: reverse flow at low liquid capacity, cross flow in the middle, double pass at high liquid rates for diameters above about 6 ft](fig/2017-18-Q4b-sol.svg)

Read the liquid rate (gal/min) and the tower diameter: **reverse flow** below about 50 gal/min (lengthens the liquid path at low rates), **cross flow** for most cases, **double pass** above about 500 gal/min in columns larger than about 6 ft (liquid capacity grows with weir length ∝ D, vapour capacity with D², so large columns run out of weir length first). Four-pass for still larger loads; three-pass is avoided (maldistribution). The chart is approximate near the boundaries.

### (iv) Entrainment vs downcomer flooding
| | Entrainment (jet) flooding | Downcomer flooding |
|---|---|---|
| cause | vapour velocity too high: liquid droplets/froth are carried up to the tray above | liquid backs up in the downcomer until it reaches the tray above |
| controlling flow | vapour rate (and tray spacing) | liquid rate, tray pressure drop, downcomer area and clearance |
| design check | flooding velocity from Fair's $C_{sb,f}$ correlation; operate at 75–85 % of flood (sets diameter) | downcomer backup (clear liquid + pressure drop) kept below about half the tray spacing; enough downcomer residence time |
| symptom | efficiency falls, liquid accumulates, pressure drop rises | liquid fills the column from a downcomer up |

### (v) Ranking
| | efficiency at design | turndown |
|---|---|---|
| valve | ≈ sieve (highest or equal) | **best**: valve lift follows vapour rate |
| sieve | ≈ valve | **poorest**: efficiency drops below about 60 % of design gas rate (weeping) |
| bubble cap | same as or lower than sieve | good, very flexible at very low and high liquid rates, but often worse than valve |

Efficiency ranking: valve ≥ sieve ≥ bubble cap (except near flooding). Turndown: valve > bubble cap > sieve (bubble caps are flexible but cost about 4× valve trays).

### (vi) Tray spacing and efficiency
Tray spacing has **little effect on tray efficiency** (it is set mainly by maintenance access: about 0.45 m below 1.2 m diameter, 0.6 m for 1.2–3 m). A larger spacing reduces entrainment, so $C_{sb,f}$ and the flooding velocity increase, which allows a **smaller diameter**, but the **column is taller**: $H = (N_{act}-1)S + H_{top} + H_{bottom}$.

**Exam tip:** in (vi) say three things: efficiency hardly changes, diameter falls, height rises.`,
          answer: String.raw`Supports: ring, major/minor beams, panels with clamps, manway, downcomer bolting bars. Downcomer carries and de-aerates liquid; weir holds tray liquid. Reverse < ~50 gpm, double pass > ~500 gpm in D > ~6 ft. Valve ≥ sieve ≥ bubble cap in efficiency; valve best turndown, sieve worst. Larger spacing: efficiency ≈ unchanged, smaller D, taller column.` } ] },
    { id: "2017-18-Q5", q: 5, section: "B", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q5a", label: "(a)", marks: "7×4=28",
          topic: "mccabe-thiele", sub: "Short notes: stripping column, Lewis method, inverted column, reflux and boilup",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write a short note on

I. Stripping Distillation Column

II. Lewis Stage by stage method

III. Advantages of Inverted Column

IV. Reflux and Boil up of Continuous Column`,
          solution: String.raw`![Stripping column (feed on top stage, partial reboiler, no condenser) and inverted column (feed at the bottom, total condenser, no reboiler)](fig/2017-18-Q5a-sol.svg)

### I. Stripping distillation column
- The feed (usually a saturated liquid) enters the **top stage**; there is no condenser and no reflux. The column has only a stripping section plus a partial reboiler.
- Vapour leaving the top is the distillate product: $D = V$, $y_D = y_1$. Bottoms $B$ from the reboiler.
- Balances: $\bar{L} = F$ (saturated liquid feed), $\bar{V} = \bar{L} - B$; stripping operating line $y = (\bar{L}/\bar{V})x - (B/\bar{V})x_B$, which passes through $y = x = x_B$ and meets the feed line; boilup ratio $\bar{V}/B$ is the operating variable.
- Used when a very pure bottoms is needed but the distillate purity is not critical, or the light component is to be removed from a heavy product (e.g. stripping light ends). The achievable $y_D$ is limited: the operating line must stay below the equilibrium curve.

### II. Lewis stage-by-stage method
- Analytical stage-by-stage calculation assuming **constant molal overflow** (CMO): $L$ and $V$ are constant in each section, so energy balances need not be solved on every stage.
- Start at the top: $y_1 = x_D$ (total condenser); stage 1 equilibrium gives $x_1$; the operating equation $y_{j+1} = (L/V)x_j + (1 - L/V)x_D$ gives $y_2$; repeat equilibrium → operating line alternately.
- At the feed stage switch to the stripping operating line $y = (\bar{L}/\bar{V})x - (B/\bar{V})x_B$ with $\bar{L} = L + qF$, $\bar{V} = V - (1-q)F$; continue until $x \le x_B$.
- It is the analytical version of the McCabe–Thiele graph (Lewis 1922). Slide example: ethanol–water, $L/D = 3$, operating lines $y = 0.75x + 0.153$ and $y = 1.94x - 0.019$, 3 stages including the reboiler.

### III. Inverted column (advantages)
- Feed enters at the **bottom**; the column has only an enriching section, a total condenser and reflux, and **no reboiler**; the bottoms is liquid from the bottom stage.
- Advantages: no reboiler (saves capital and heat duty; useful for a vapour or hot feed, or when the bottoms is heat sensitive or fouls reboilers); suits a vapour feed that needs only rectification; gives a high-purity distillate when the bottoms purity is not important. Operating line: $y = (L/V)x + (1-L/V)x_D$ with $V = F$ for a saturated vapour feed.

### IV. Reflux and boilup
- **Reflux** $L_0$: part of the condensed overhead returned to the top as liquid. External reflux ratio $R = L_0/D$; with a total condenser $V_1 = (1 + L_0/D)D$. It provides the liquid that flows down the enriching section and contacts the rising vapour.
- **Boilup** $\bar{V}$: vapour returned from the reboiler; boilup ratio $\bar{V}/B$; $\bar{L} = \bar{V} + B$. It provides the vapour for the stripping section.
- Effects: higher reflux (or boilup) moves the operating lines toward the 45° line, so fewer stages but more energy ($Q_C$, $Q_R$ larger) and a larger diameter. Limits: total reflux gives $N_{min}$; minimum reflux gives a pinch and infinite stages; the optimum is about 1.05–1.25 $R_{min}$.`,
          answer: String.raw`Stripping column: feed on top, reboiler only. Lewis: CMO stage-by-stage alternating equilibrium and operating equations. Inverted column: feed at bottom, condenser only, no reboiler. Reflux L0/D and boilup V̄/B supply the liquid and vapour; more of either means fewer stages but more energy.` },
        { id: "2017-18-Q5b", label: "(b)", marks: "9",
          topic: "flash", sub: "Flash distillation process with schematic",
          type: "sketch", syllabus: "in", repeats: ["2018-19-Q5a"],
          text: String.raw`Describe the flash distillation process with schematic diagram.`,
          solution: String.raw`![Flash system: pump, heater, throttle valve, flash drum with demister; vapour V, y from top and liquid L, x from bottom](fig/2017-18-Q5b-sol.svg)

1. **Pump** raises the feed pressure (so it stays liquid in the heater).
2. **Heater** heats the pressurized liquid (duty $Q_h$) to $T_F$.
3. **Throttle valve:** the pressure drops suddenly; the expansion is isenthalpic and part of the liquid flashes to vapour.
4. **Flash drum:** the two-phase mixture enters through an inlet distributor; vapour rises through the vapour disengagement zone and a **demister pad** (removes entrained droplets) and leaves at the top as $V$, $y$; liquid settles in the liquid holdup zone and leaves at the bottom as $L$, $x$.
5. The drum is one **equilibrium stage** ($\mu_i^L = \mu_i^V$): $y$ and $x$ are in equilibrium at $T_{drum}$, $p_{drum}$; usually adiabatic ($Q_{flash} = 0$).

Equations: $F = L + V$, $Fz = Lx + Vy$, $Fh_F + Q_{flash} = Lh_L + VH_V$; operating line $y = -(L/V)x + (F/V)z$ through $y = x = z$. Degrees of freedom $C + 5$; after the feed is specified, 2 more (e.g. $p_{drum}$ and $V/F$).`,
          answer: String.raw`Pump → heater → throttle valve (isenthalpic, partial vaporization) → flash drum (one equilibrium stage, demister); vapour V,y overhead, liquid L,x bottom.` },
        { id: "2017-18-Q5c", label: "(c)", marks: "8",
          topic: "advanced-distillation", sub: "Murphree vapour efficiency and when EMV > 1",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q7a"],
          text: String.raw`What is Murphree efficiency, $E_{MV}$? Under what conditions $E_{MV} > 1$?`,
          solution: String.raw`**Definition:** fraction of the ideal (equilibrium) change in vapour composition that a real tray achieves:
$$E_{MV} = \frac{y_n - y_{n+1}}{y_n^* - y_{n+1}}$$
$y_n$ = actual average vapour leaving tray n, $y_{n+1}$ = vapour entering, $y_n^*$ = vapour in equilibrium with the liquid **leaving** the tray, $x_n$. (Liquid form: $E_{ML} = (x_{n-1}-x_n)/(x_{n-1}-x_n^*)$.) Model: vapour streams and downcomer liquids well mixed, liquid on the tray assumed well mixed ($x = x_{out}$).

**When $E_{MV} > 1$:** on a **large-diameter cross-flow tray** the liquid is not well mixed. As it crosses the tray it loses the light component, so $x_{in} > \ldots > x_{out}$.

![Cross-flow tray: liquid composition falls from x1 at the inlet to x_out at the weir; vapour rising near the inlet meets richer liquid](fig/2017-18-Q5c-sol.svg)

$y_n^*$ is based on $x_{out}$, the leanest liquid on the tray, but vapour leaving the inlet side has contacted richer liquid. The average $y_n$ can then be **greater than** $y_n^*$, making the numerator larger than the denominator: $E_{MV} > 1$, even though the point efficiency everywhere is $< 1$. This is often observed in large columns with long liquid flow paths (unmixed liquid, plug flow across the tray).

**Exam tip:** "$E_{MV} > 1$ is possible because $y^*$ refers to the outlet liquid, not to the liquid each bubble actually meets."`,
          answer: String.raw`EMV = (yn − yn+1)/(yn* − yn+1). It exceeds 1 on large cross-flow trays with poorly mixed liquid, where average yn exceeds y* based on the leanest (outlet) liquid.` } ] },
    { id: "2017-18-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q6a", label: "(a)", marks: "30",
          topic: "advanced-distillation", sub: "Acetone–ethanol, two feeds, partial condenser, total reboiler, (V̄/B)min, EML = 0.75",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A distillation column with a partial condenser and a total reboiler is separating acetone and ethanol. There are two feeds. One feed is 50.0 mol% acetone, flows at 100.0 mol/min, and is a superheated vapor where approximately 1 mole of liquid will vaporize on the feed stage for each 20 moles of feed. The other feed is a saturated liquid, flows at 150.0 mol/min and is 35.0 mol% acetone. We desire a distillate product that is $y_D$ = 0.85 mole fraction acetone and a bottoms product that is $x_B$ = 0.10 mole fraction acetone. The column has a partial condenser and a total reboiler. Boilup is returned as a saturated vapor. Column operates at a pressure of 1.0 atm. Assume CMO and use a McCabe–Thiele diagram. VLE data are given below:

| $x_A$ | 0.10 | 0.15 | 0.20 | 0.25 | 0.30 | 0.35 | 0.40 | 0.50 | 0.60 | 0.70 | 0.80 | 0.90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $y_A$ | 0.262 | 0.348 | 0.417 | 0.478 | 0.524 | 0.566 | 0.605 | 0.674 | 0.739 | 0.802 | 0.865 | 0.929 |

(a) Find $(\bar{V}/B)_{min}$. (Plot both feed lines to decide which one to use.)

(b) Operate at $\bar{V}/B = 3 \times (\bar{V}/B)_{min}$. The partial condenser is an equilibrium contact. If the stages have a Murphree liquid efficiency of 0.75 find optimum feed locations for each feed and total number of real stages. (It is easiest to start at top and step down.)`,
          solution: String.raw`This is Wankat Problem 4.D26.

**Given:** $F_1 = 100$ mol/min, $z_1 = 0.50$, superheated: 1 mol liquid vaporizes per 20 mol feed $\Rightarrow q_1 = -1/20 = -0.05$. $F_2 = 150$ mol/min, $z_2 = 0.35$, saturated liquid, $q_2 = 1$. $y_D = 0.85$ (partial condenser), $x_B = 0.10$ (total reboiler). VLE from the paper, interpolated linearly (with (0,0) and (1,1) added).

**Assumptions:** CMO; the partial condenser is an equilibrium stage; the total reboiler is **not** a stage (point $y = x = x_B$ on the diagram); $F_1$ (richer) enters above $F_2$.

### External balances
$$D + B = 250, \qquad 0.85D + 0.10B = 100(0.50) + 150(0.35) = 102.5$$
$$D = \frac{102.5 - 0.10(250)}{0.85-0.10} = 103.33\ \mathrm{mol/min}, \qquad B = 146.67\ \mathrm{mol/min}$$

### Section flows in terms of the boilup $\bar{V}$
- Bottom: $\bar{L} = \bar{V} + B$; line $y = (\bar{L}/\bar{V})x - (B/\bar{V})x_B$ through $(0.10, 0.10)$.
- Middle (between the feeds, $F_2$ saturated liquid): $V' = \bar{V}$, $L' = \bar{L} - F_2$.
- Top ($F_1$ with $q_1 = -0.05$): $V = V' + (1-q_1)F_1 = \bar{V} + 105$, $L = L' + q_1F_1 = L' - 5$. Top line $y = (L/V)x + (D/V)y_D$ through $(0.85, 0.85)$.

Feed lines: $F_2$: vertical at $x = 0.35$. $F_1$: $y = \frac{q}{q-1}x - \frac{z}{q-1} = 0.0476x + 0.476$ (nearly horizontal through (0.5, 0.5)); it cuts the equilibrium curve at $(0.262, 0.489)$.

### (a) Minimum boilup
Lower $\bar{V}/B$ steepens the bottom line and raises the middle/top lines toward the curve. Test a pinch at each feed line:
- **Pinch at $F_2$** (bottom and middle lines both pass through $(0.35, 0.566)$ on the curve):
$$\frac{\bar{L}}{\bar{V}} = \frac{0.566-0.10}{0.35-0.10} = 1.864 = 1 + \frac{B}{\bar{V}} \Rightarrow \left(\frac{\bar{V}}{B}\right) = \frac{1}{0.864} = 1.157$$
- **Pinch at $F_1$** (top line from $(0.85, 0.85)$ to $(0.262, 0.489)$): $L/V = 0.614$; with $L = \bar{V} + 1.67$, $V = \bar{V} + 105$: $\bar{V} = 162.8$, $\bar{V}/B = 1.110$.

The minimum is the **larger** requirement: below 1.157 the column pinches at the $F_2$ feed point even though $F_1$ is still fine. So
$$\left(\frac{\bar{V}}{B}\right)_{min} = 1.157 \quad (\text{pinch at the saturated-liquid feed } F_2)$$

![Minimum boilup: bottom line from (0.10, 0.10) pinches at (0.35, 0.566) on the F2 feed line; the F1 pinch would need only 1.110](fig/2017-18-Q6a-sol2.svg)

### (b) Operating at $\bar{V}/B = 3(1.157) = 3.472$
Flows (mol/min): $\bar{V} = 509.3$, $\bar{L} = 655.9$; $V' = 509.3$, $L' = 505.9$; $V = 614.3$, $L = 510.9$ ($L/D = 4.94$).

| section | operating line |
|---|---|
| top | $y = 0.8318x + 0.1430$ |
| middle | $y = 0.9935x + 0.0743$ |
| bottom | $y = 1.2880x - 0.0288$ |

Intersections: top/middle at $x = 0.425$ (on the $F_1$ line), middle/bottom at $x = 0.350$ (on the $F_2$ line).

**Partial condenser (equilibrium):** $x_0 = x^*(y_D = 0.85) = 0.776$; $y_1 = 0.8318(0.776) + 0.143 = 0.7886$.

**Murphree liquid stepping (top down):** for real stage n, $x_n^* = x^*(y_n)$ and
$$x_n = x_{n-1} - E_{ML}(x_{n-1} - x_n^*), \qquad E_{ML} = 0.75$$
then $y_{n+1}$ from the operating line in force (switch as soon as $x_n$ passes an intersection: optimum feed).

| real stage | y_n | x_n* (eq.) | x_n (actual) | line for y_n+1 |
|---|---|---|---|---|
| PC | 0.8500 | 0.7762 | 0.7762 (equilibrium) | top |
| 1 | 0.7886 | 0.6787 | 0.7031 | top |
| 2 | 0.7278 | 0.5828 | 0.6129 | top |
| 3 | 0.6528 | 0.4692 | 0.5051 | top |
| 4 | 0.5631 | 0.3466 | 0.3862 | middle (F1 here) |
| 5 | 0.4580 | 0.2336 | 0.2718 | bottom (F2 here) |
| 6 | 0.3212 | 0.1344 | 0.1688 | bottom |
| 7 | 0.1886 | 0.0720 | 0.0962 < 0.10 | — |

Fraction of stage 7: $(0.1688-0.10)/(0.1688-0.0962) = 0.95$.

![McCabe–Thiele for acetone–ethanol with Murphree liquid efficiency 0.75: partial condenser step, 7 real stages, F1 on stage 4 and F2 on stage 5](fig/2017-18-Q6a-sol.svg)

**Result:** $(\bar{V}/B)_{min} = 1.16$. At $\bar{V}/B = 3.47$: 6.95, so **7 real stages** plus the partial condenser (equilibrium) and the total reboiler; optimum feeds: **$F_1$ on real stage 4** and **$F_2$ on real stage 5** from the top.

**Exam tip:** with $E_{ML}$ step horizontally only 75 % of the way from the operating line to the equilibrium curve (pseudo-equilibrium curve), and never apply the efficiency to the partial condenser or the total reboiler.`,
          answer: String.raw`D = 103.3, B = 146.7 mol/min; (V̄/B)min = 1.157 (pinch at the F2 sat-liquid feed line). At V̄/B = 3.47: ≈ 6.95 → 7 real stages + partial condenser + total reboiler; F1 on stage 4, F2 on stage 5 from top.` } ] },
    { id: "2017-18-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q7a", label: "(a)", marks: "15",
          topic: "column-balances", sub: "Ethanol–water column with direct steam injection: L/D from H–x chart",
          type: "numerical", syllabus: "in", repeats: ["2018-19-Q6c"],
          text: String.raw`A distillation column separating ethanol from water is shown. Pressure is 1 kg/cm$^2$. Instead of having a reboiler, steam (pure water vapor) is injected directly into the bottom of the column to provide heat. The injected steam is a saturated vapor. The feed is 30 wt % ethanol and is at 20 °C. Feed flow rate is 100 kg/min. Reflux is a saturated liquid. We desire a distillate concentration of 60 wt % ethanol and a bottoms product that is 5 wt % ethanol. The steam is input at 100 kg/min. What is the external reflux ratio, L/D? (Enthalpy–composition diagram for ethanol–water at 1 kg/cm$^2$ attached.)

![Column with total condenser Q_C, reflux L, distillate D, x_D; feed F, z; steam S, y_S injected at the bottom; bottoms B, x_B; Q_col = 0](fig/2017-18-Q7a.svg)`,
          solution: String.raw`This is Wankat Problem 3.D2 (slide problem "External balances for no reboiler column").

**Given (mass basis):** $F = 100$ kg/min, $z = 0.30$, 20 °C; $S = 100$ kg/min saturated steam, $y_S = 0$; $x_D = 0.60$, $x_B = 0.05$ (wt fractions); saturated reflux; total condenser; $Q_{col} = 0$; $p = 1$ kg/cm².

**Find:** $L/D$.

**Assumptions:** adiabatic column, total condenser ($y_1 = x_D$), bottoms leaves as saturated liquid. Enthalpies read from the attached H–x chart (Wankat Fig. 2-4, kcal/kg, reference 0 °C liquid):

| stream | state | enthalpy, kcal/kg |
|---|---|---|
| feed, 30 wt %, 20 °C | subcooled liquid (20 °C isotherm) | $h_F \approx 9$ |
| steam, pure water | saturated vapour at 1 kg/cm² (99.1 °C) | $H_S \approx 639$ (chart; Çengel Table A-9 $h_g$ = 2675 kJ/kg = 639 kcal/kg) |
| distillate/reflux, 60 wt % | saturated liquid (boiling line) | $h_D \approx 65$ |
| bottoms, 5 wt % | saturated liquid | $h_B \approx 91$ |
| top vapour $V_1$, $y_1 = 0.60$ | saturated vapour (dew line) | $H_1 \approx 405$ |

1. Overall mass balances (steam is an extra input):
$$F + S = D + B \Rightarrow D + B = 200$$
$$Fz + Sy_S = Dx_D + Bx_B \Rightarrow 30 = 0.60D + 0.05(200 - D)$$
$$D = \frac{30 - 10}{0.55} = 36.36\ \mathrm{kg/min}, \qquad B = 163.64\ \mathrm{kg/min}$$
2. Overall energy balance (no reboiler, $Q_{col} = 0$):
$$Fh_F + SH_S + Q_C = Dh_D + Bh_B$$
$$Q_C = 36.36(65) + 163.64(91) - 100(9) - 100(639) = 2364 + 14891 - 900 - 63900 = -47\,545\ \mathrm{kcal/min}$$
3. Condenser balance (total condenser, $V_1 = L + D$, reflux and distillate at $h_D$):
$$V_1H_1 + Q_C = (L + D)h_D = V_1h_D \Rightarrow V_1 = \frac{-Q_C}{H_1 - h_D} = \frac{47\,545}{405 - 65} = 139.8\ \mathrm{kg/min}$$
4. $L = V_1 - D = 139.8 - 36.4 = 103.5$ kg/min, so
$$\frac{L}{D} = \frac{103.5}{36.36} = 2.85$$

Sensitivity: $H_1 = 395$–415 gives $L/D = 2.96$–2.74. Wankat's answer is 2.77; the difference is chart reading only.

**Result:** $L/D \approx 2.8$ (2.85 with the readings above; book 2.77).

**Exam tip:** the steam must appear in both the mass and energy balances; with direct steam the bottoms is larger than $F - D$.`,
          answer: String.raw`D = 36.4, B = 163.6 kg/min; QC ≈ −4.75×10⁴ kcal/min; V1 = 139.8 kg/min; L/D ≈ 2.8 (2.85 with hF 9, HS 639, hD 65, hB 91, H1 405 kcal/kg; Wankat 2.77).` },
        { id: "2017-18-Q7b", label: "(b)", marks: "15",
          topic: "vle", sub: "Bubble-point pressure of ethane/n-pentane/n-heptane at 40 °C (DePriester)",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`We have a liquid mixture that is 10 mol% ethane, 35 mol% n-pentane, and 55 mol% n-heptane at 40 °C and a high pressure. As the pressure is slowly dropped at what pressure will the mixture first start to boil? Use the DePriester chart. (Modified DePriester chart at high temperatures attached.)`,
          solution: String.raw`This is Wankat Problem 5.D11 (multicomponent bubble point; the slides cover K-values from the DePriester chart).

**Given:** $x_{C2} = 0.10$, $x_{C5} = 0.35$, $x_{C7} = 0.55$, $T = 40$ °C.

**Find:** bubble-point pressure (first bubble as $p$ falls).

**Method:** at the bubble point the vapour is $y_i = K_ix_i$ and must sum to 1:
$$\sum_i K_i(T, p)\,x_i = 1$$
Trial on $p$: on the DePriester chart put a straightedge through $T = 40$ °C and a trial $p$, read the three K values, and compute $\sum K_ix_i$. If the sum is > 1 the trial pressure is too low (raise $p$, K's fall), and vice versa. The K values below were read along the straightedge and checked with the McWilliams fit of the chart (Wankat Eq. 2-30, Table 2-3).

| p, kPa | K ethane | K n-C5 | K n-C7 | Σ K x |
|---|---|---|---|---|
| 300 | 11.3 | 0.435 | 0.060 | 1.318 |
| 400 | 8.68 | 0.337 | 0.048 | 1.012 |
| 500 | 7.08 | 0.276 | 0.040 | 0.827 |
| **405** | **8.57** | **0.333** | **0.047** | **1.000** |

Interpolating ($\sum Kx$ against $p$) gives $p \approx 405$ kPa.

First-bubble vapour: $y_{C2} = 8.57(0.10) = 0.857$, $y_{C5} = 0.333(0.35) = 0.117$, $y_{C7} = 0.047(0.55) = 0.026$ (sum 1.00).

**Result:** the liquid starts to boil at about **400 kPa** (≈ 405 kPa, about 4 atm).

**Exam tip:** state the convergence direction ($\sum Kx > 1$ means $p$ too low) and show at least two trials.`,
          answer: String.raw`Bubble point: Σ Ki xi = 1 at 40 °C gives p ≈ 405 kPa (K ≈ 8.6, 0.33, 0.047); first vapour ≈ 86 % ethane.` } ] },
    { id: "2017-18-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q8a", label: "(a)", marks: "18",
          topic: "batch", sub: "Simple Rayleigh distillation, methanol–water, 50 mol at 80 %, xD,avg = 0.892",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`We wish to use a simple batch still (one equilibrium stage) to separate methanol from water. The feed charge to the still pot is 50 moles of an 80 mol% methanol mixture. We desire an average distillate concentration of 89.2 mol% methanol. Find the amount of distillate collected, the amount of material left in the still pot, and the concentration of material in the still pot. Pressure is 1 atm. Methanol–water equilibrium data at 1 atm are given in Table 1.`,
          solution: String.raw`This is Wankat Example 9-1 (slide Example 11-1). Table 1 is not attached to the paper; use methanol–water VLE at 1 atm, Wankat Table 2-7 (slides Table 3-3).

**Given:** $F = 50$ mol, $x_F = 0.80$, $x_{D,avg} = 0.892$, one equilibrium contact (still pot), 1 atm.

**Find:** $x_{W,final}$, $W_{final}$, $D_{total}$.

**Assumptions:** negligible holdup in the column/condenser, vapour leaving is in equilibrium with the pot liquid ($x_D = y^*(x_W)$), total condenser.

1. Rayleigh equation and mass balances:
$$\ln\frac{W_{final}}{F} = -\int_{x_{W,final}}^{x_F}\frac{dx}{y^*-x}, \qquad x_{D,avg} = \frac{Fx_F - W_{final}x_{W,final}}{F - W_{final}}$$
Since $x_{W,final}$ is unknown: guess $x_{W,final}$, integrate, get $W_{final}$, check $x_{D,avg}$.
2. Integrand from the VLE data (linear interpolation of Table 2-7):

| x | y* | 1/(y* − x) |
|---|---|---|
| 0.800 | 0.915 | 8.70 |
| 0.775 | 0.904 | 7.77 |
| 0.750 | 0.893 | 7.02 |
| 0.725 | 0.881 | 6.40 |
| 0.700 | 0.870 | 5.88 |
| 0.675 | 0.859 | 5.44 |
| 0.650 | 0.848 | 5.06 |

3. Trials (Simpson's rule on the curve):

| x_W,final guess | area | W_final = 50e^(−area) | D = F − W | x_D,avg |
|---|---|---|---|---|
| 0.70 | 0.711 | 24.57 | 25.43 | 0.897 |
| 0.65 | 0.983 | 18.70 | 31.30 | 0.890 |
| **0.668** | **0.890** | **20.53** | **29.47** | **0.892** |

Check with the slide 3-point Simpson at 0.70: $(0.10/6)[5.88 + 4(7.02) + 8.70] = 0.711$, the same.

![Rayleigh integrand 1/(y* − x) for methanol–water; shaded area from 0.668 to 0.80 equals 0.89](fig/2017-18-Q8a-sol.svg)

4. Mass-balance check: $20.53(0.668) + 29.47(0.892) = 13.71 + 26.29 = 40.0 = Fx_F$. ✓

**Result:** $x_{W,final} \approx 0.67$, $W_{final} \approx 20.5$ mol, $D_{total} \approx 29.5$ mol. (Wankat rounds to $x_{W,final} = 0.65$, $W = 18.9$, $D = 31.1$; $x_{D,avg}$ is very insensitive to $x_{W,final}$: 0.65 gives 0.890–0.891.)

**Exam tip:** show the trial-and-error table; examiners accept $x_W$ = 0.65–0.67 because $x_{D,avg}$ hardly changes.`,
          answer: String.raw`xW,final ≈ 0.67 (Wankat 0.65), Wfinal ≈ 20.5 mol (18.9), Dtotal ≈ 29.5 mol (31.1); area under 1/(y−x) ≈ 0.89.` },
        { id: "2017-18-Q8b", label: "(b)", marks: "12",
          topic: "batch", sub: "Constant-xD multistage batch: overall balance equals Rayleigh result",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`For a binary, multistage batch distillation with constant $x_{dist}$, prove that the mass balances over the entire batch period and the Rayleigh equation give identical results:
$$W_{final} = \left[\frac{x_{dist} - x_F}{x_{dist} - x_{W,final}}\right]F$$`,
          solution: String.raw`**Assumptions:** negligible holdup on the stages and in the condenser/accumulator, so all material is in the still pot $W$ or in the collected distillate; the reflux ratio is varied so that $x_D = x_{dist}$ stays **constant** during the whole batch.

### 1. Overall balances over the batch
Total: $F = W_{final} + D_{total}$. Light component: $Fx_F = W_{final}x_{W,final} + D_{total}x_{dist}$ (the collected distillate has constant composition $x_{dist}$). Eliminate $D_{total} = F - W_{final}$:
$$Fx_F = W_{final}x_{W,final} + (F - W_{final})x_{dist}$$
$$W_{final}(x_{dist} - x_{W,final}) = F(x_{dist} - x_F)$$
$$\boxed{W_{final} = F\,\frac{x_{dist}-x_F}{x_{dist}-x_{W,final}}}$$

### 2. Rayleigh equation
Differential balance on the still (out = −accumulation): removing $-dW$ of composition $x_D$:
$$-x_D\,dW = -d(Wx_W) = -W\,dx_W - x_W\,dW \Rightarrow \frac{dW}{W} = \frac{dx_W}{x_D - x_W}$$
Integrate from $F$ (at $x_F$) to $W_{final}$ (at $x_{W,final}$):
$$\ln\frac{W_{final}}{F} = \int_{x_F}^{x_{W,final}}\frac{dx_W}{x_D - x_W} = -\int_{x_{W,final}}^{x_F}\frac{dx_W}{x_D - x_W}$$
With $x_D = x_{dist}$ constant the integral is analytic:
$$\int_{x_{W,final}}^{x_F}\frac{dx_W}{x_{dist}-x_W} = \left[-\ln(x_{dist}-x_W)\right]_{x_{W,final}}^{x_F} = \ln\frac{x_{dist}-x_{W,final}}{x_{dist}-x_F}$$
$$\ln\frac{W_{final}}{F} = -\ln\frac{x_{dist}-x_{W,final}}{x_{dist}-x_F} = \ln\frac{x_{dist}-x_F}{x_{dist}-x_{W,final}}$$
$$W_{final} = F\,\frac{x_{dist}-x_F}{x_{dist}-x_{W,final}}$$
which is identical to step 1. ∎

**Why:** the Rayleigh equation is just the integrated mass balance; when $x_D$ does not change, integrating the differential balance is the same as writing the overall balance for the whole batch. (With constant reflux, $x_D$ varies and a numerical integral is needed.) Then $D_{total} = F - W_{final}$.`,
          answer: String.raw`Overall: Fx_F = W x_W,final + (F − W)x_dist ⇒ W = F(x_dist − x_F)/(x_dist − x_W,final). Rayleigh with constant x_D integrates to ln(W/F) = ln[(x_dist − x_F)/(x_dist − x_W,final)], the same result.` } ] }
  ]
});
