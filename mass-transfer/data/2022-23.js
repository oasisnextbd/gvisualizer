QB.paper({
  year: "2022-23", date: "20/05/2024", marks: 210,
  rules: String.raw`Section A: Q1 compulsory + any two of Q2–Q4. Section B: any three of Q5–Q8. Separate scripts for each section. Q5(a) and Q6(a) use the attached ethanol–water enthalpy–composition chart (1 kg/cm²); Q5(b) and Q8(c) use the attached methanol–water VLE table.`,
  questions: [
    { id: "2022-23-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q1a", label: "(a)", marks: "7",
          topic: "column-design", sub: "Three steps to estimate column diameter",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Diameter of distillation column is very important in controlling costs and has to be estimated even for preliminary designs. Explain clearly three fundamental steps to estimate the column diameter.`,
          solution: String.raw`The diameter is fixed by the **vapor** that must pass up the column at an allowable velocity (a fraction of flooding). The course procedure (Wankat Ch. 10):

1. **Find the vapor flow and its mass flow.** From the external/internal balances: at the top $V = (R+1)D$; at the bottom $\bar{V} = V - (1-q)F$. Convert to mass: $\dot{m}_V = V\,M_V$ with $M_V = \sum y_i M_i$ (vapor composition at the section, e.g. $y_1 = x_D$ at the top).
2. **Find the volumetric flow from the vapor density.** Ideal gas: $\rho_V = \frac{P M_V}{R T}$ (absolute P, T in K at that tray), so $Q_V = \dot{m}_V/\rho_V$ (divide by 3600 for m³/s). Note $Q_V = V R T/P$: the molar mass cancels.
3. **Choose the allowable velocity and get the area and diameter.** The flooding velocity comes from a flooding correlation (depends on tray spacing and $\rho_L,\rho_V$): $u_{flood} = C_{sb}\sqrt{(\rho_L-\rho_V)/\rho_V}$; operate at $u \approx 0.65$–$0.90\,u_{flood}$ (about 75%). Then $A_{net} = Q_V/u$, total area $A_T = A_{net}/(1 - A_d/A_T)$ to add the downcomer area, and

$$D = \sqrt{\frac{4A_T}{\pi}}$$

Round **up** to a standard size. Size both the top and the bottom (and near the feed if $q \ne 1$) and use the larger diameter.

Worked check from the slides: hexane–heptane, $V = 160$ kmol/h, $M_V = 86.74$, 70 °C, 101.3 kPa, $u = 1.2$ m/s gives $\rho_V = 3.08$ kg/m³, $Q_V = 1.252$ m³/s, $A = 1.043$ m², $D = 1.15 \to 1.2$ m.

**Exam tip:** the usual slips are leaving $Q_V$ in m³/h, using °C or gauge pressure in $\rho_V$, and sizing only the top.`,
          answer: String.raw`(1) V (kmol/h) → mass flow via M_V; (2) ρ_V = PM_V/RT → Q_V; (3) u ≈ 75% of flooding → A = Q_V/u (+ downcomer area) → D = √(4A/π), size top and bottom, take the larger.` },
        { id: "2022-23-Q1b", label: "(b)", marks: "7",
          topic: "column-design", sub: "Flow-pattern selection guide for sieve trays",
          type: "sketch", syllabus: "in", repeats: ["2012-13-Q4d", "2021-22-Q4c", "2023-24-Q4b"],
          text: String.raw`Flow pattern on the trays is also an important design parameter for distillation columns. With an appropriate diagram, demonstrate the selection guide of flow pattern for sieve trays.`,
          solution: String.raw`The flow pattern is chosen from the **liquid rate** and the **tower diameter** (Huang–Hodson guide in Wankat Ch. 10 and the slides):

![Selection guide: liquid capacity vs tower diameter with reverse, cross, double-pass and four-pass regions](fig/2022-23-Q1b-sol.svg)

| Region | Liquid rate (approx.) | Pattern |
|---|---|---|
| Low liquid rate | below ≈ 30–50 gpm | **Reverse flow**: a centre baffle sends the liquid across and back, lengthening its path |
| Average | ≈ 50 to 200–500 gpm (rises with D up to ≈ 6 ft) | **Cross flow** (single pass): most common, handles solids, open-literature design |
| High | ≈ 500 to 700–1100 gpm, large D | **Double pass**: liquid split in two, halves the flow path and liquid gradient |
| Very high | above ≈ 1100 gpm | **Four-pass / cascade** |

Why: liquid capacity grows with weir length ($\propto D$) while vapor capacity grows with area ($\propto D^2$). At large D a single-pass tray runs out of weir length (high weir loading, large hydraulic gradient, downcomer overload) before it runs out of vapor area, so the liquid is split into more passes. Three-pass trays are not used (liquid maldistribution). Below about 3 ft diameter, single cross flow (or packing) is used.

**Exam tip:** label both axes (liquid rate, gpm, vs diameter, ft, log scales) and the four regions; that is what earns the marks.`,
          answer: String.raw`Reverse flow at low liquid rates, cross flow for average rates, double pass and then four-pass as liquid rate and diameter grow (weir length ∝ D, vapor area ∝ D²).` },
        { id: "2022-23-Q1c", label: "(c)", marks: "7",
          topic: "absorption", sub: "Multisolute absorption: independent solutes and DOF",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Rationalize how the single assumption that "solutes are independent of each other" can specify more than one degree of freedom for multisolute absorption and stripping process.`,
          solution: String.raw`Take three solutes A, B, D plus a solvent and a carrier gas (Wankat 12.8):

$$F = C - P + 2 = 5 - 2 + 2 = 5$$

To draw equilibrium for one solute as a single curve $y_B = f_B(x_B)$ (or a straight line $y_B = m_B x_B$), four of these five must be fixed.

- Constant **T** and **p** (isothermal, isobaric column) use **two**.
- The remaining two would be the concentrations of the *other* solutes, which in general change the equilibrium of B. The assumption "**solutes are independent**" says the equilibrium of any solute does not depend on how much of the other solutes is present. That one statement removes the dependence on both other concentrations, so it fixes **two** degrees of freedom at once (in general, $n_{solutes}-1$ of them).

Consequences:

- Each solute has its own curve $y_i = f_i(x_i)$, so the multisolute column is solved as separate single-solute problems (McCabe–Thiele or Kremser), one per solute, with the same L/V and N.
- It is only valid for **dilute** systems, and the analysis must use mole (or mass) fractions with **total** flows; ratio units fail because $X = x/(1-\sum x)$ involves the unknown concentrations of the other solutes.
- Each extra solute adds two DOF, used for its inlet gas and inlet liquid compositions; with T, p and inlets fixed, one specification (e.g. the outlet of the key solute) sets N, and the other solutes' outlets are then calculated.`,
          answer: String.raw`F = 5 for 3 solutes; T and p fix 2; "independent solutes" makes each solute's equilibrium independent of the other two concentrations, so one assumption fixes the remaining 2 DOF (valid only when dilute).` },
        { id: "2022-23-Q1d", label: "(d)", marks: "7",
          topic: "partial-extraction", sub: "Difference point when R1 = E0",
          type: "theory", syllabus: "in", repeats: ["2017-18-Q3a", "2021-22-Q1d"],
          text: String.raw`When $E_0 > R_1$ the difference point is on the left-side of the right triangular equilibrium diagram; and when $R_1 > E_0$ the difference point is on the right of the diagram. What happens when $R_1 = E_0$? Answer this question using a logical argument.`,
          solution: String.raw`The difference point is a fictitious stream defined by the passing-stream balance

$$\Delta = E_0 - R_1 = E_j - R_{j+1} = E_N - R_{N+1}$$

and its coordinates are

$$x_{A,\Delta} = \frac{E_0 y_{A,0} - R_1 x_{A,1}}{E_0 - R_1},\qquad x_{D,\Delta} = \frac{E_0 y_{D,0} - R_1 x_{D,1}}{E_0 - R_1}$$

Argument:

1. $\Delta$ lies on the straight line through $E_0$ and $R_1$ (lever-arm rule for a difference). When $E_0 > R_1$, $\Delta$ is positive and lies beyond $E_0$ (left); when $R_1 > E_0$, $\Delta$ is negative and lies beyond $R_1$ (right).
2. As $E_0 \to R_1$ the denominator $E_0 - R_1 \to 0$ while the numerators stay finite, so $x_{A,\Delta}$ and $x_{D,\Delta} \to \pm\infty$: the point moves out to **infinity** along the line $E_0R_1$, switching from the far left to the far right as the sign changes.
3. A point at infinity means every operating line $E_jR_{j+1}$ is **parallel** to $E_0R_1$ (and to $E_NR_{N+1}$). Physically $E_j = R_{j+1}$ in every section: the total flows of the passing streams are equal, as in a constant-flow countercurrent cascade.

![Right triangular diagram: with E0 = R1 all operating lines are parallel](fig/2022-23-Q1d-sol.svg)

So stage stepping is still possible: alternate tie lines with lines **parallel** to $E_0R_1$ instead of lines through a point.`,
          answer: String.raw`Δ has zero flow, so its coordinates go to infinity: the difference point is at infinity and all operating lines are parallel to E0R1.` },
        { id: "2022-23-Q1e", label: "(e)", marks: "7",
          topic: "leaching", sub: "Why an effective equilibrium constant in leaching",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q2b", "2023-24-Q7c"],
          text: String.raw`Justify with proper reasoning the use of "effective equilibrium constant" in the analysis of leaching process.`,
          solution: String.raw`The simple leaching model (McCabe–Thiele or Kremser) assumes isothermal, isobaric operation, no solvent dissolving in the solid, **no liquid entrained with the solid**, an insoluble solid matrix, negligible heat of mixing, **equilibrium stages** and no solid in the overflow. Two of these are usually wrong:

- **Entrainment:** the underflow always carries liquid with it (the same reason washing has an underflow liquid), so solute leaves each stage both inside the solid and in the entrained liquid.
- **Non-equilibrium stages:** the solute must diffuse out through the solid, and diffusion in solids is very slow; equilibrium may take days (pickles) or years (in-situ copper leaching), so real stages are far from equilibrium.

Both effects are lumped into one measured number, the **effective equilibrium constant** $m_E$:

$$y = m_E x$$

with $y$ the solute concentration in the solvent (e.g. g/L) and $x$ that in the solid (g/L). It is measured on the actual equipment at the actual flow rates and residence times.

Why this is justified:

- It is **easy to measure and easy to use**: the McCabe–Thiele diagram keeps the same form and, if $y = m_E x$ is linear, the Kremser equation applies directly.
- It avoids the need for diffusion rates, residence-time distributions and entrainment data, which are rarely available.

Limitation: $m_E$ is **not a fundamental thermodynamic quantity**. It depends on flow conditions and residence time and is valid only for the conditions at which it was measured (example in the slides: sugar-cane Rotocel, $m_E = 1.18$).`,
          answer: String.raw`Entrainment in the underflow and slow solid-phase diffusion (non-equilibrium stages) are lumped into one measured y = m_E x, which keeps McCabe–Thiele/Kremser usable but holds only at the measured conditions.` } ] },

    { id: "2022-23-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q2a", label: "(a)", marks: "5",
          topic: "absorption", sub: "What makes a column a stripper or an absorber",
          type: "theory", syllabus: "in", repeats: ["2016-17-Q6c", "2017-18-Q1a", "2018-19-Q1a", "2021-22-Q2b", "practice-absorption-P4"],
          text: String.raw`What controls whether a column is a stripper or an absorber?`,
          solution: String.raw`The **direction of mass transfer**, which is set by where the operating line lies relative to the equilibrium line:

- **Absorber:** the gas holds more solute than it would at equilibrium with the liquid, $y > y^*(x)$; solute moves gas → liquid. The operating line lies **above** the equilibrium curve on a y–x diagram.
- **Stripper:** the liquid holds more solute than equilibrium with the gas allows, $y < y^*(x)$; solute moves liquid → gas. The operating line lies **below** the equilibrium curve.

What sets this in practice is **equilibrium (T, p) and the inlet concentrations**: low T and high p give a small m (Henry's constant/P), which favours absorption; high T and low p give a large m, which favours stripping. That is why a gas-treatment plant absorbs cold and at high pressure, then heats the solvent and strips it at low pressure. The flow ratio also matters: absorbers need $L/V > m$ for good recovery, strippers need $mV/L > 1$.`,
          answer: String.raw`The direction of mass transfer: operating line above equilibrium (y > y*) is an absorber, below (y < y*) is a stripper; this is fixed by T, p (the value of m) and the inlet concentrations.` },
        { id: "2022-23-Q2b", label: "(b)", marks: "13",
          topic: "absorption", sub: "Operating line for concentrated absorption (mole ratios)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Make the necessary assumption(s) and derive the equation of operating line for an absorption process when the feed is reasonably concentrated.`,
          solution: String.raw`**Assumptions**

1. Isothermal and isobaric column, negligible heat of absorption (energy balance satisfied automatically).
2. **Carrier gas is insoluble** in the solvent, so the moles of carrier G (mol/h) are constant.
3. **Solvent is nonvolatile**, so the moles of pure solvent L (mol/h) are constant.

With a concentrated feed the *total* flows change from stage to stage (much solute is transferred), so total L/V is not constant. The carrier and solvent flows are constant, so use solute-free flows and **mole ratios**:

$$Y = \frac{y}{1-y} = \frac{\text{mol solute}}{\text{mol carrier gas}},\qquad X = \frac{x}{1-x} = \frac{\text{mol solute}}{\text{mol solvent}}$$

**Column and envelope.** Stages numbered 1 (top) to N (bottom). Pure solvent L enters stage 1 with $X_0$; gas G enters stage N with $Y_{N+1}$; gas leaves the top with $Y_1$, liquid leaves the bottom with $X_N$. Take a mass-balance envelope around the top of the column down to stage j.

**Solute balance** (in = out at steady state; solute in gas = $G Y$, in liquid = $L X$):

$$G\,Y_{j+1} + L\,X_0 = G\,Y_1 + L\,X_j$$

**Solve for Y** (passing streams $Y_{j+1}$ and $X_j$):

$$Y_{j+1} = \frac{L}{G}X_j + \left(Y_1 - \frac{L}{G}X_0\right)$$

This is the operating line. Because L and G are constant, it is a **straight line** of slope $L/G$ on a Y–X diagram, passing through $(X_0, Y_1)$ at the top and $(X_N, Y_{N+1})$ at the bottom. The equilibrium data must also be converted: $Y^* = \frac{y^*}{1-y^*}$ at $X = \frac{x}{1-x}$ (it becomes curved even if $y = mx$ is linear).

Overall balance (for the end point): $G(Y_{N+1} - Y_1) = L(X_N - X_0)$.

**Minimum solvent:** $(L/G)_{min}$ is the slope of the line from $(X_0,Y_1)$ that just touches the equilibrium curve (usually at $Y_{N+1}$).

**Exam tip:** state why ratio units are needed (constant solute-free flows give a straight line) and convert both data and specs before stepping.`,
          answer: String.raw`With insoluble carrier and nonvolatile solvent: Y_{j+1} = (L/G) X_j + (Y_1 − (L/G) X_0), a straight line in mole-ratio units Y = y/(1−y), X = x/(1−x).` },
        { id: "2022-23-Q2c", label: "(c)", marks: "17",
          topic: "absorption", sub: "Ammonia stripper, 4 stages, Kremser",
          type: "numerical", syllabus: "in", repeats: ["practice-absorption-P10"],
          text: String.raw`A stripping tower with four equilibrium stages is being used to remove ammonia from waste water using air as the stripping agent. Operation is at 80°F and 1 atm. The inlet air is pure air, and the inlet water contains 0.02 mole fraction ammonia. The column operates at $L/V = 0.65$. Equilibrium data in mole fraction are given as $y = 1.414x$. Determine the outlet concentrations.`,
          solution: String.raw`**Given:** N = 4 equilibrium stages, $x_0 = 0.02$ (water in, top), $y_{N+1} = 0$ (pure air in, bottom), $L/V = 0.65$, $y = 1.414x$ (80 °F, 1 atm).

**Find:** outlet water $x_N$ and outlet air $y_1$.

**Assumptions:** isothermal, isobaric, negligible heat of absorption, constant total L/V (dilute, 2 mol%), straight equilibrium line, so the **Kremser** equation applies (same assumptions as the slides' 6-stage NH₃ stripping example).

1. **Stripping factor.**

$$S = \frac{mV}{L} = \frac{1.414}{0.65} = 2.175$$

2. **Kremser, liquid-phase form** (stripper, liquid enters stage 1, $x_N^* = y_{N+1}/m = 0$):

$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - \frac{mV}{L}}{1-\left(\frac{mV}{L}\right)^{N+1}} = \frac{1-2.175}{1-2.175^5} = \frac{-1.175}{1-48.70} = 0.02463$$

$$x_N = 0.02463 \times 0.02 = 4.93\times10^{-4}\ \text{mole fraction NH}_3$$

(97.5% of the ammonia is removed.)

3. **Outlet air from the overall balance** $L(x_0 - x_N) = V(y_1 - y_{N+1})$:

$$y_1 = \frac{L}{V}(x_0 - x_N) = 0.65\,(0.02 - 0.000493) = 0.01268$$

Check: $y_1 < m x_0 = 0.0283$, so the top is not pinched.

4. **Stage-by-stage check** (top-down: $x_j = y_j/m$; operating line $y_{j+1} = 0.65x_j + (y_1 - 0.65x_0) = 0.65x_j - 0.000320$):

| Stage | $y_j$ (leaving) | $x_j = y_j/1.414$ |
|---|---|---|
| 1 | 0.012680 | 0.008967 |
| 2 | 0.005509 | 0.003896 |
| 3 | 0.002212 | 0.001564 |
| 4 | 0.000697 | 0.000493 |

and $y_5 = 0.65(0.000493) - 0.000320 = 0$ ✓ (pure air).

![McCabe–Thiele diagram for the ammonia stripper: 4 stages below the equilibrium line](fig/2022-23-Q2c-sol.svg)

**Exam tip:** for a stripper the operating line lies below the equilibrium line; step from the liquid inlet (top) and check that the last step lands on $y_{N+1} = 0$.`,
          answer: String.raw`S = mV/L = 2.175; outlet water x_N = 4.9 × 10⁻⁴ (97.5% NH₃ removed), outlet air y₁ = 0.0127 mole fraction NH₃.` } ] },

    { id: "2022-23-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q3a", label: "(a)", marks: "7",
          topic: "immiscible-extraction", sub: "Solvent selection criteria",
          type: "theory", syllabus: "in", repeats: ["2017-18-Q4a", "2020-21-Q3a"],
          text: String.raw`Selection of a proper solvent is very important for the development of an economical extraction system. State solvent-selection criteria for an extraction system.`,
          solution: String.raw`A good extraction solvent should have:

1. **High selectivity** for the desired solute over contaminants: $\alpha = K_{desired}/K_{undesired}$ large.
2. **High distribution coefficient** $K_d$ for the desired solute, so less solvent and fewer stages are needed.
3. **Low mutual solubility with the diluent** (totally immiscible, or partially miscible but easy to separate), so little solvent is lost to the raffinate and little diluent goes to the extract.
4. **Easy recovery** of solvent from the solute (the recovery step, often distillation, is usually the most expensive part): different boiling point, no azeotrope, low latent heat.
5. **Density difference** from the feed phase and suitable **interfacial tension** and **low viscosity**, so the phases disperse and then settle quickly.
6. Nontoxic, noncorrosive, chemically and thermally stable, environmentally friendly, nonflammable where possible.
7. Readily available and **inexpensive**.`,
          answer: String.raw`High selectivity and high K_d, low miscibility with the diluent, easy recovery, good density difference/physical properties for settling, and safe, stable, cheap and available.` },
        { id: "2022-23-Q3b", label: "(b)", marks: "20",
          topic: "immiscible-extraction", sub: "Multisolute dilute extraction (oleic/linoleic), Kremser",
          type: "numerical", syllabus: "in", repeats: ["practice-immiscible-extraction-P4a"],
          text: String.raw`We have a mixture of linoleic and oleic acids dissolved in methylcellosolve and 10% water. Feed is 0.003 wt frac linoleic acid and 0.0025 wt frac oleic acid. Feed flow rate is 1500 kg/h. A simple countercurrent extractor will be used with 750 kg/h of pure heptane as solvent. We desire a 99% recovery of the oleic acid in the extract products. The equilibrium distribution constant, $K_d$ for the given condition are 2.17 and 4.14 for linoleic and oleic acids, respectively. Find the required number of stages, N and the recovery of linoleic acid in the extract product.`,
          solution: String.raw`This is slide Problem D6 (Wankat 13.D6).

**Given:** R = 1500 kg/h raffinate phase (methylcellosolve + 10% water), E = 750 kg/h pure heptane ($y_{N+1} = 0$); $x_{0,oleic} = 0.0025$, $x_{0,lin} = 0.003$; $K_{d,oleic} = 4.14$, $K_{d,lin} = 2.17$ (Wankat Table 13-3, from the paper); 99% oleic recovery.

**Find:** N; recovery of linoleic acid.

**Assumptions:** very dilute, so R and E are constant and $y = K_d x$ (mass ratio ≈ mass fraction); solvent and diluent immiscible; isothermal; solutes independent (each solute solved separately with the same N, R, E). Kremser applies.

1. **Oleic acid outlet extract** (99% recovered):

$$y_{1,ol} = \frac{0.99(0.0025)(1500)}{750} = 0.00495$$

2. **Extraction factor and Kremser for oleic acid.** $\frac{mE}{R} = \frac{4.14(750)}{1500} = 2.07$, $y_1^* = m x_0 = 4.14(0.0025) = 0.01035$.

$$N = \frac{\ln\left[\left(1-\frac{mE}{R}\right)\frac{y_{N+1}-y_1^*}{y_1-y_1^*} + \frac{mE}{R}\right]}{\ln\frac{R}{mE}}$$

$$N = \frac{\ln\left[(1-2.07)\frac{0-0.01035}{0.00495-0.01035}+2.07\right]}{\ln(1/2.07)} = \frac{\ln(0.0192)}{-0.7275} = 5.44$$

So **N = 5.44 → 6 equilibrium stages** (with exactly 6 stages the oleic recovery rises to 99.3%).

3. **Linoleic acid with the same N = 5.44.** $\frac{R}{mE} = \frac{1500}{2.17(750)} = 0.9217$, $y_1^* = 2.17(0.003) = 0.00651$, $y_{N+1}=0$.

$$\frac{y_1 - y_1^*}{y_{N+1}-y_1^*} = \frac{1-\frac{R}{mE}}{1-\left(\frac{R}{mE}\right)^{N+1}} = \frac{0.07834}{0.40866} = 0.1918$$

$$y_{1,lin} = 0.00651 - 0.1918(0.00651) = 0.00526$$

4. **Linoleic recovery:**

$$\text{Rec} = \frac{0.00526(750)}{0.003(1500)} = 0.877$$

About **87.7%** of the linoleic acid also goes to the extract (86.5% with 5 stages, 89.0% with 6). The selectivity $4.14/2.17 = 1.9$ is too low to separate the two acids in a simple countercurrent extractor: that needs fractional extraction.

![McCabe–Thiele check for oleic acid: about 5.4 stages between y = 4.14x and the operating line of slope R/E = 2](fig/2022-23-Q3b-sol.svg)

**Exam tip:** solve the specified solute first to get N, then reuse N for the other solute; use the form of Kremser that has the unknown on one side only.`,
          answer: String.raw`N = 5.44 → 6 equilibrium stages (mE/R = 2.07 for oleic); linoleic acid recovery ≈ 0.877 (y₁ = 0.00526).` },
        { id: "2022-23-Q3c", label: "(c)", marks: "8",
          topic: "partial-extraction", sub: "Two-feed extractor: difference-point procedure",
          type: "sketch", syllabus: "in", repeats: ["practice-partial-extraction-P5a"],
          text: String.raw`Consider that the specifications of feeds and fresh solvent are fully known. Show the solution procedure using difference-point on a right triangular diagram for a two-feed extractor.`,
          solution: String.raw`**Set-up** (Wankat 1988, Fig. 18-19, as in the slides): solvent $E_0 = S$ enters stage 1, raffinate $R_1$ leaves stage 1; feed $F_1 = R_{N+1}$ enters stage N; the intermediate feed $F_2$ enters stage $N_f$; extract $E_N$ leaves stage N. Specified: $S, F_1, F_2$ and their compositions, plus the raffinate composition $x_{A,1}$ (the design spec).

**External balances**

$$E_0 + F_2 + R_{N+1} = M = E_N + R_1$$

$$x_{A,M} = \frac{E_0 y_{A,0} + F_2 x_{A,F_2} + R_{N+1} x_{A,N+1}}{E_0 + F_2 + R_{N+1}},\quad x_{D,M} = \frac{E_0 y_{D,0} + F_2 x_{D,F_2} + R_{N+1} x_{D,N+1}}{E_0 + F_2 + R_{N+1}}$$

Equivalent graphical route: $F_T = F_1 + F_2$ on line $F_1F_2$ (lever rule), then $M$ on line $S F_T$.

**Procedure**

1. Plot the equilibrium data (extract and raffinate curves, tie lines) and draw the conjugate line.
2. Plot $S = E_0$, $F_1$, $F_2$, and $R_1$ (on the raffinate curve at $x_{A,1}$).
3. Locate M (coordinates above or via $F_T$).
4. Draw $R_1M$ and extend it to the extract curve: that is $E_N$. Then $E_N = M\frac{x_{A,M}-x_{A,1}}{y_{A,N}-x_{A,1}}$ and $R_1 = M - E_N$.
5. **Two difference points**, one for each section:
   - Top section (between $E_0$ and $F_2$): $\Delta_1 = E_0 - R_1 = E_j - R_{j+1}$, on the line through $E_0$ and $R_1$.
   - Bottom section (between $F_2$ and $F_1$): $\Delta_2 = E_N - R_{N+1} = E_k - R_{k+1}$, on the line through $E_N$ and $F_1$.
   - A balance around the feed stage gives $\Delta_2 = \Delta_1 + F_2$, so **$\Delta_1$, $F_2$ and $\Delta_2$ lie on one straight line**. Use it to fix the points (for example, intersect line $E_0R_1$ with line $\Delta_2F_2$), or compute coordinates as in the single-feed case.
6. **Step off stages** from $R_1$: tie line from $R_1$ to $E_1$; operating line $\Delta_1E_1$ to the raffinate curve gives $R_2$; repeat.
7. **Switch to $\Delta_2$** at the optimum feed stage, when the operating line through $\Delta_2$ gives the bigger step (the stage where the tie line crosses line $\Delta_1F_2\Delta_2$). Continue with $\Delta_2$ until a tie line reaches or passes $E_N$. Count stages (fractional at the end).

![Right triangular diagram for a two-feed extractor: M, E_N, Δ1, Δ2 and the line Δ1–F2–Δ2](fig/2022-23-Q3c-sol.svg)`,
          answer: String.raw`Find M from the external balance, E_N on line R1M, Δ1 = E0 − R1 and Δ2 = E_N − F1 (collinear with F2); step tie line/operating line from R1 with Δ1, switch to Δ2 at the feed stage.` } ] },

    { id: "2022-23-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q4a", label: "(a)", marks: "10",
          topic: "leaching", sub: "Stage efficiency: leaching vs liquid–liquid extraction",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Would you expect stage efficiencies to be higher or lower in leaching than in liquid-liquid extraction? Explain.`,
          solution: String.raw`**Lower in leaching.**

| | Liquid–liquid extraction | Leaching |
|---|---|---|
| Where the solute is | dissolved in a liquid (the feed phase) | inside a solid matrix |
| Transport path | liquid–liquid, both phases can be dispersed and mixed | diffusion out through the pores of the solid, then into the liquid |
| Diffusivity | liquid: about $10^{-9}$ m²/s | effective diffusivity in solids is orders of magnitude lower |
| Interfacial area | very large (fine drops, made by agitation) | fixed by particle size; cannot be increased by mixing |
| Approach to equilibrium | minutes in a mixer | hours, days (pickles), even years (in-situ ore leaching) |
| Phase separation | clean settling | underflow always entrains liquid |

Reasons:

1. **Slow solid-phase diffusion** controls the rate. Agitation only helps the outside film resistance, not the internal resistance, so stages seldom reach equilibrium in a practical residence time.
2. **Entrainment** of liquid in the underflow carries unequilibrated solution forward, which lowers the separation per stage further.
3. In extraction both phases are fluids that can be finely dispersed, so the stage efficiency of a mixer-settler is often close to 100%.

This is why leaching is analysed with an **effective equilibrium constant** $m_E$ measured at operating conditions, rather than true equilibrium.

**Exam tip:** name the controlling resistance (diffusion inside the solid) and link it to the effective equilibrium constant.`,
          answer: String.raw`Lower: diffusion of solute out of the solid is very slow and the interfacial area cannot be increased by mixing, and the underflow entrains liquid, so stages rarely reach equilibrium.` },
        { id: "2022-23-Q4b", label: "(b)", marks: "10+6",
          topic: "leaching", sub: "Underflow liquid rate in washing and constant-flow assumptions",
          type: "numerical", syllabus: "in", repeats: ["2015-16-Q8b", "2016-17-Q8a", "2017-18-Q2a", "2023-24-Q5c"],
          text: String.raw`A washing operation is processing 10,000 kg/h of wet solids. The liquid is essentially water with a density of 1000 kg/m³, the dry solids have a density of 1500 kg/m³, and the porosity is measured as $\varepsilon = 0.40$. What is the flow rate of the underflow liquid in kg/h? Also state all the crucial assumptions which are required for the stage-to-stage calculation of washing process.`,
          solution: String.raw`**Given:** wet solids (solids + entrained liquid) 10,000 kg/h; $\rho_f = 1000$ kg/m³, $\rho_s = 1500$ kg/m³, $\varepsilon = 0.40$ (volume fraction of liquid in the wet solids).

**Find:** underflow liquid U (kg/h).

1. **Basis 1 m³ of wet solids:**
   - liquid: $\varepsilon\rho_f = 0.40(1000) = 400$ kg
   - dry solids: $(1-\varepsilon)\rho_s = 0.60(1500) = 900$ kg
   - total: 1300 kg
2. **Mass fraction of liquid** in the wet solids $= 400/1300 = 0.3077$.
3. **Underflow liquid:**

$$U = 10000 \times \frac{400}{1300} = 3077\ \mathrm{kg/h}$$

Dry solids $= 6923$ kg/h. Equivalently (Wankat Eq. 14-1),

$$U = \frac{\varepsilon\rho_f}{(1-\varepsilon)\rho_s}S = \frac{400}{900}(6923) = 3077\ \mathrm{kg/h}$$

**Assumptions for constant flow in stage-to-stage washing calculations** (U and overflow O constant):

1. **No solids in the overflow and the solids do not dissolve**, so the solids flow rate is constant from stage to stage.
2. **Constant densities** $\rho_f$ and $\rho_s$: the solute has little effect on the fluid density (dilute solution).
3. **Constant porosity** $\varepsilon$, so the volume of liquid entrained per unit solids is the same in every stage.

Then $U_j = U$ = constant and, by an overall balance, $O_j = O$ = constant. With the washing equilibrium $y = x$ (same solute concentration in underflow and overflow liquid) the operating line is straight and McCabe–Thiele or Kremser can be used. Also: isothermal operation and equilibrium (well-mixed) stages.`,
          answer: String.raw`U = 10,000 × 400/1300 = 3077 kg/h (solids 6923 kg/h); constant-flow assumptions: no solids in overflow and no dissolution, constant ρ_f and ρ_s (dilute), constant porosity; equilibrium y = x.` },
        { id: "2022-23-Q4c", label: "(c)", marks: "9",
          topic: "column-design", sub: "Why notched weirs give better turndown",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Reason why the notched weirs have better turndown characteristics than straight weirs in distillation columns.`,
          solution: String.raw`Turndown is the range of flow (below design) over which a tray still works well.

**Straight weir:** the liquid flows over the full weir length $l_w$. The crest height over the weir follows the Francis weir formula, $h_{ow} \propto (Q_L/l_w)^{2/3}$. At low liquid rates $h_{ow}$ becomes very small (a few mm), so:

- the liquid level on the tray and the crest are very sensitive to any **out-of-levelness** of the weir or tray; part of the weir may get no flow, causing maldistribution, dry areas and channeling;
- the liquid head on the tray becomes uncertain, so weeping or poor contacting starts.

**Notched (picket-fence, V- or rectangular-notch) weir:** at low flows the liquid passes only through the notches, so the **effective weir length is much shorter**. For the same flow the crest in the notches is much higher (and for V-notches it grows with $Q^{0.4}$ rather than $Q^{2/3}$ per unit length), so:

- a **stable, measurable liquid head** is kept on the tray even at low liquid rates;
- flow is spread at regular points along the whole outlet, so it is much less sensitive to levelling errors;
- at high rates the liquid overflows the tops of the notches and the weir behaves like a straight weir, so capacity is not lost.

This gives a wider operating range for liquid flow at little extra cost. By contrast, adjustable weirs look like a fix for turndown but, if misadjusted, cause weeping or dry trays, so the slides say to avoid them.

![Straight, adjustable and notched weir designs](fig/2023-24-Q4b-sol2.svg)`,
          answer: String.raw`At low liquid rates the notches act as a short effective weir, so the crest stays high and stable and is insensitive to levelling errors; at high rates it works as a straight weir: wider turndown.` } ] },

    { id: "2022-23-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q5a", label: "(a)", marks: "15",
          topic: "vle", sub: "T-x-y diagram from the ethanol–water H-x chart",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Sketch the T-x-y diagram for Ethanol-Water system using Enthalpy-Composition Diagram attached in the question. Use at least 5 points for both T-x and T-y graph on the same graph paper. It is also required to write down the steps these you have followed to draw the graph.

(Attached: enthalpy–composition diagram for ethanol–water at a pressure of 1 kg/cm², Bosnjakovic; enthalpy in kcal/kg, concentration in weight fraction alcohol; Wankat Fig. 2-4.)`,
          solution: String.raw`**Steps**

1. On the H-x chart (1 kg/cm²), identify the **saturated-liquid (boiling) line** (lower curve), the **saturated-vapor (dew) line** (upper curve), and the straight **isothermal tie lines** joining them, each labelled with its temperature (99.1, 98.5, …, 80, 79, 78.5 °C).
2. For each chosen tie line, read the weight fraction where it meets the boiling line ($x$, liquid) and where it meets the dew line ($y$, vapor). For a temperature with no drawn tie line, use the **auxiliary line** to interpolate: vertical from x to the auxiliary line, horizontal to the dew line gives y.
3. Add the end points: pure water boils at 99.1 °C at 1 kg/cm² (x = y = 0); pure ethanol at 77.8 °C (x = y = 1); the azeotrope at 0.956 wt fraction, 77.65 °C, where the boiling and dew lines meet.
4. On one sheet plot T (°C) against weight fraction: points (x, T) give the **T-x (bubble-point) curve**, points (y, T) the **T-y (dew-point) curve**. Join each set with a smooth curve. Liquid lies below the T-x curve, vapor above the T-y curve, two phases in between; horizontal lines between the curves are the same tie lines.

**Readings** (weight fraction ethanol from the chart, ±0.01–0.02; they agree with Perry's 1-atm data in Wankat Table 2-1 converted to weight fraction and shifted about 0.85 °C for 1 kg/cm² = 0.968 atm):

| T, °C (tie line) | x (boiling line) | y (dew line) |
|---|---|---|
| 99.1 | 0.00 | 0.00 |
| 95 | 0.04 | 0.32 |
| 90 | 0.13 | 0.55 |
| 85 | 0.25 | 0.68 |
| 82 | 0.43 | 0.75 |
| 80 | 0.61 | 0.80 |
| 79 | 0.72 | 0.83 |
| 77.65 (azeotrope) | 0.956 | 0.956 |
| 77.8 (pure ethanol) | 1.00 | 1.00 |

![T-x-y diagram for ethanol–water at 1 kg/cm² from the H-x chart tie lines](fig/2022-23-Q5a-sol.svg)

**Exam tip:** the tie lines on the H-x chart are the horizontal lines of the T-x-y diagram; keep weight fractions on the axis (or convert both x and y to mole fractions).`,
          answer: String.raw`Read (x, y) at each labelled tie line (e.g. 95 °C: 0.04/0.32; 90: 0.13/0.55; 85: 0.25/0.68; 82: 0.43/0.75; 80: 0.61/0.80) and plot T-x and T-y; the curves meet at the azeotrope 0.956 wt, 77.65 °C.` },
        { id: "2022-23-Q5b", label: "(b)", marks: "20",
          topic: "flash", sub: "Two flash drums in series (methanol–water)",
          type: "numerical", syllabus: "in", repeats: ["practice-flash-P5"],
          text: String.raw`Two flash distillation chambers are hooked together as shown below. Both are at 1 atm pressure. The feed to the first drum is a binary mixture of methanol and water that is 55 mol% methanol. The feed flow rate is 10,000 kmol/h. The second flash drum operates with $(V/F)_2 = 0.7$ and the liquid product composition is 25 mol% methanol. Equilibrium data are given in Table Q. 5(b).

(i) What is the fraction vaporized in the first flash drum?

(ii) What are $y_1$, $y_2$, $x_1$, $T_1$, and $T_2$?

![Two flash drums: feed 10,000 kmol/h, z = 0.55 to drum 1; liquid L1 pumped and heated to drum 2 with (V/F)2 = 0.7, x2 = 0.25](fig/2022-23-Q5b.svg)

Table Q.5(b): VLE for methanol–water, p = 1 atm (mol%) (Perry, as Wankat Table 2-7)

| Methanol liquid | 0 | 2.0 | 4.0 | 6.0 | 8.0 | 10.0 | 15.0 | 20.0 | 30.0 | 40.0 | 50.0 | 60.0 | 70.0 | 80.0 | 90.0 | 95.0 | 100.0 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Methanol vapor | 0 | 13.4 | 23.0 | 30.4 | 36.5 | 41.8 | 51.7 | 57.9 | 66.5 | 72.9 | 77.9 | 82.5 | 87.0 | 91.5 | 95.8 | 97.9 | 100.0 |
| Temp, °C | 100 | 96.4 | 93.5 | 91.2 | 89.3 | 87.7 | 84.4 | 81.7 | 78.0 | 75.3 | 73.1 | 71.2 | 69.3 | 67.6 | 66.0 | 65.0 | 64.5 |`,
          solution: String.raw`This is Wankat Problem 2.D2.

**Given:** $F_1 = 10{,}000$ kmol/h, $z_1 = 0.55$; drum 2: $f_2 = (V/F)_2 = 0.7$, $x_2 = 0.25$; p = 1 atm; data from Table Q.5(b).

**Find:** $f_1 = (V/F)_1$, $y_1, y_2, x_1, T_1, T_2$.

**Assumptions:** each drum is an equilibrium stage; the pump and heater only change p and T of $L_1$, not its composition ($z_2 = x_1$); linear interpolation of the table.

**Work backwards from drum 2** (its liquid is specified).

1. **Drum 2 equilibrium at $x_2 = 0.25$** (between 0.20 and 0.30):

$$y_2 = 0.579 + \frac{0.25-0.20}{0.10}(0.665-0.579) = 0.622,\qquad T_2 = 81.7 + 0.5(78.0-81.7) = 79.85\ ^\circ\mathrm{C}$$

2. **Feed to drum 2** from its balance $z_2 = (1-f_2)x_2 + f_2y_2$:

$$z_2 = 0.3(0.25) + 0.7(0.622) = 0.5104$$

Since $z_2$ is the liquid from drum 1, $x_1 = 0.510$.

3. **Drum 1 equilibrium at $x_1 = 0.510$** (between 0.50 and 0.60):

$$y_1 = 0.779 + 0.104(0.825-0.779) = 0.784,\qquad T_1 = 73.1 + 0.104(71.2-73.1) = 72.9\ ^\circ\mathrm{C}$$

4. **Fraction vaporized in drum 1** (lever rule, $f = \frac{z-x}{y-x}$):

$$f_1 = \frac{0.55-0.5104}{0.7838-0.5104} = \frac{0.0396}{0.2734} = 0.145$$

Flows: $V_1 = 1449$, $L_1 = 8551$, $V_2 = 0.7(8551) = 5986$, $L_2 = 2565$ kmol/h.

**McCabe–Thiele check:** drum 1 operating line from $(z, z) = (0.55, 0.55)$ with slope $-(1-f_1)/f_1 = -5.90$ meets the equilibrium curve at $(0.510, 0.784)$; drum 2 line from $(0.510, 0.510)$ with slope $-0.3/0.7 = -0.429$ meets it at $(0.25, 0.622)$.

![McCabe–Thiele flash operating lines for both drums](fig/2022-23-Q5b-sol.svg)

**Exam tip:** when the second drum's product is specified, solve drum 2 first; the liquid from drum 1 is drum 2's feed.`,
          answer: String.raw`(i) (V/F)₁ = 0.145; (ii) x₁ = 0.510, y₁ = 0.784, T₁ ≈ 72.9 °C; y₂ = 0.622, T₂ ≈ 79.9 °C.` } ] },

    { id: "2022-23-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q6a", label: "(a)", marks: "25",
          topic: "column-balances", sub: "No-condenser column with cold ethanol reflux: boilup from H-x chart",
          type: "numerical", syllabus: "in", repeats: ["practice-column-balances-P4"],
          text: String.raw`A distillation column separating ethanol from water is shown as below. Pressure is 1 kg/cm². Instead of having a condenser, a stream of pure liquid ethanol is added directly to the column to serve as the reflux. This stream is a saturated liquid. The feed is 40 wt% ethanol and is at −20°C. Feed flow rate is 2000 kg/h. We desire a distillate concentration of 80 wt% ethanol and a bottom composition of 5 wt% ethanol. A total reboiler is used, and the boilup is a saturated vapor. The cooling stream is input at C = 1000 kg/h. Find the external boilup rate, $\bar{V}$.

Note: Set up the equations, solve in equation form for $\bar{V}$ for all required terms, read off all required enthalpies from the enthalpy composition diagram in Figure Q. 6(a), and then calculate a numerical answer.

![Column with pure-ethanol stream C entering the top, vapor distillate D, feed F, and a total reboiler at the bottom](fig/2022-23-Q6a.svg)`,
          solution: String.raw`This is the slides' "no condenser column" problem (Wankat 3.D-type).

**Given:** F = 2000 kg/h, z = 0.40 wt frac, −20 °C; C = 1000 kg/h pure ethanol, saturated liquid; distillate leaves the top as **vapor**, $y_D = 0.80$; $x_B = 0.05$; total reboiler, boilup saturated vapor; $Q_{col} = 0$; 1 kg/cm².

**Find:** $\bar{V}$ (kg/h).

**Assumptions:** steady state, adiabatic column; mass units throughout (the chart is per kg, wt fractions); total reboiler: the liquid $\bar{L}$ leaving stage N splits into B and a stream that is totally vaporized, so $\bar{V}$ and B both have composition $x_B$.

**Equations**

1. Overall mass balance: $F + C = D + B$
2. Ethanol balance: $Fz + Cx_C = Dy_D + Bx_B$
3. Overall energy balance (no condenser, $Q_{col} = 0$): $Fh_F + Ch_C + Q_R = DH_D + Bh_B$
4. Total reboiler: $Q_R = \bar{V}(H_{\bar{V}} - h_{L,N})$ with $h_{L,N} = h_B$ (saturated liquid at $x_B$)

Solving (1)–(2) for D and B:

$$D = \frac{Fz + Cx_C - x_B(F+C)}{y_D - x_B},\qquad B = F + C - D$$

and combining (3)–(4):

$$\bar{V} = \frac{DH_D + Bh_B - Fh_F - Ch_C}{H_{\bar{V}}(x_B) - h_L(x_B)}$$

**Numbers**

1. $D = \frac{2000(0.4) + 1000(1) - 0.05(3000)}{0.80-0.05} = \frac{1650}{0.75} = 2200$ kg/h, $B = 3000 - 2200 = 800$ kg/h.
2. **Enthalpies read from the chart** (kcal/kg, reference liquid at 0 °C; readings ±2–3 kcal/kg):

| Stream | State, composition | Reading |
|---|---|---|
| $h_F$ | liquid, 0.40 wt, −20 °C (on the −20 °C liquid isotherm) | ≈ −28 |
| $h_C$ | saturated liquid, pure ethanol (boiling line at x = 1, ≈ 78 °C) | ≈ 48 |
| $H_D$ | saturated vapor (dew line) at 0.80 wt | ≈ 328 |
| $h_B = h_{L,N}$ | saturated liquid (boiling line) at 0.05 wt | ≈ 94 |
| $H_{\bar{V}}$ | saturated vapor (dew line) at 0.05 wt | ≈ 620 |

3. Reboiler duty:

$$Q_R = 2200(328) + 800(94) - 2000(-28) - 1000(48) = 721{,}600 + 75{,}200 + 56{,}000 - 48{,}000 = 8.05\times10^5\ \mathrm{kcal/h}$$

4. Boilup:

$$\bar{V} = \frac{8.05\times10^5}{620 - 94} = 1530\ \mathrm{kg/h}$$

($\bar{L} = \bar{V} + B = 2330$ kg/h.) With the reading uncertainty, $\bar{V} \approx 1500$–$1550$ kg/h.

**Exam tip:** the distillate here is a *vapor* (no condenser), so use the dew-line enthalpy $H_D$; and the cold feed's negative enthalpy adds to the reboiler load.`,
          answer: String.raw`D = 2200 kg/h, B = 800 kg/h; Q_R ≈ 8.05 × 10⁵ kcal/h; V̄ ≈ 1530 kg/h (h_F ≈ −28, h_C ≈ 48, H_D ≈ 328, h_B ≈ 94, H_V ≈ 620 kcal/kg).` },
        { id: "2022-23-Q6b", label: "(b)", marks: "10",
          topic: "advanced-distillation", sub: "Total reflux and minimum reflux on McCabe–Thiele",
          type: "sketch", syllabus: "in", repeats: ["2012-13-Q8c", "2021-22-Q5c"],
          text: String.raw`Explain the concepts of total reflux and minimum reflux and how they relate to McCabe Thiele diagram.`,
          solution: String.raw`**Total reflux** ($R = L/D \to \infty$)

- All overhead vapor is condensed and returned; all bottoms liquid is reboiled; F = D = B = 0 (in practice used in start-up and testing).
- Then $L/V = 1$ and $\bar{L}/\bar{V} = 1$: both operating lines collapse onto the **45° line** $y = x$.
- The steps between the equilibrium curve and the diagonal are the largest possible, so this gives the **minimum number of equilibrium stages** $N_{min}$ (for constant α, Fenske: $N_{min} = \frac{\ln\{[x_D/(1-x_D)][(1-x_B)/x_B]\}}{\ln\alpha}$).
- Infinite energy and column diameter per unit product: a limiting case, not an operating point.

![Total reflux: staircase between the equilibrium curve and y = x gives N_min](fig/2022-23-Q6b-sol.svg)

**Minimum reflux** ($R_{min}$)

- As R is lowered, the top operating line (slope L/V) rotates toward the equilibrium curve. $R_{min}$ is the reflux ratio at which an operating line first **touches** the equilibrium curve: usually where the two operating lines meet **on the feed line** (or at a **tangent pinch** for non-ideal curves such as ethanol–water).
- At the pinch the steps become infinitely small, so the number of stages is **infinite**.

$$R_{min} = \frac{(L/V)_{min}}{1-(L/V)_{min}}$$

with $(L/V)_{min}$ the slope of the line from $(x_D, x_D)$ to the pinch point.

![Minimum reflux: operating lines meet on the q-line at the equilibrium curve](fig/2022-23-Q6b-sol2.svg)

**Relation:** real columns lie between these limits; the optimum is typically $R = 1.05$–$1.25\,R_{min}$ (often quoted up to 1.5). Higher R means fewer stages but more energy (V = (R+1)D) and larger diameter.`,
          answer: String.raw`Total reflux: operating lines on y = x, N = N_min. Minimum reflux: operating line touches the equilibrium curve (pinch at feed line or tangent), N = ∞. Design R ≈ 1.05–1.25 R_min.` } ] },

    { id: "2022-23-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q7a", label: "(a)", marks: "22",
          topic: "column-balances", sub: "Multicomponent external balance with recoveries, CMO flows",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`A mixture containing 40 mol% isopentane, 30 mol% n-hexane, and 30 mol% n-heptane is being separated. We aim to achieve a 98% recovery of n-hexane in the bottom and a 99% recovery of isopentane in the distillate. F = 1000 kmol/h. Feed is a two-phase mixture that is 40% vapor. L/D = 2.5.

(i) Find D and B. List any required assumptions.

(ii) Find compositions of distillate and bottom product.

(iii) Calculate L, V, $\bar{L}$, and $\bar{V}$ assuming CMO.`,
          solution: String.raw`> Multicomponent shortcut methods are outside the slides, but this part needs only external balances and the feed-stage balance, which are covered.

**Given:** F = 1000 kmol/h; $z$: iC₅ 0.40 (light key), nC₆ 0.30 (heavy key), nC₇ 0.30 (heavy non-key); iC₅ 99% to D; nC₆ 98% to B; feed 40% vapor, so q = 0.6; L/D = 2.5.

**Assumptions:** steady state; **n-heptane does not distribute**: all of it goes to the bottoms (it is much heavier than the heavy key); total condenser with saturated-liquid reflux; CMO for part (iii).

**(i) D and B** (component balances $Fz_i = Dx_{D,i} + Bx_{B,i}$):

| Component | Feed, kmol/h | Distillate | Bottoms |
|---|---|---|---|
| iC₅ | 400 | 0.99(400) = 396 | 4 |
| nC₆ | 300 | 0.02(300) = 6 | 294 |
| nC₇ | 300 | 0 | 300 |
| Total | 1000 | **D = 402** | **B = 598** |

**(ii) Compositions**

| | $x_D$ | $x_B$ |
|---|---|---|
| iC₅ | 396/402 = 0.9851 | 4/598 = 0.00669 |
| nC₆ | 6/402 = 0.0149 | 294/598 = 0.4916 |
| nC₇ | 0 | 300/598 = 0.5017 |

**(iii) Internal flows (CMO)**

1. $L = (L/D)D = 2.5(402) = 1005$ kmol/h
2. $V = L + D = 1005 + 402 = 1407$ kmol/h
3. Feed: 40% vapor, so $q = 0.6$ (fraction liquid).

$$\bar{L} = L + qF = 1005 + 0.6(1000) = 1605\ \mathrm{kmol/h}$$

$$\bar{V} = V - (1-q)F = 1407 - 0.4(1000) = 1007\ \mathrm{kmol/h}$$

Check: $\bar{L} - \bar{V} = 598 = B$ ✓.`,
          answer: String.raw`D = 402, B = 598 kmol/h; x_D = (0.985 iC₅, 0.015 nC₆, 0), x_B = (0.0067, 0.4916, 0.5017); L = 1005, V = 1407, L̄ = 1605, V̄ = 1007 kmol/h.` },
        { id: "2022-23-Q7b", label: "(b)", marks: "13",
          topic: "advanced-distillation", sub: "Column cannot reach product purity: remedies",
          type: "theory", syllabus: "partial", repeats: ["2016-17-Q1f"],
          text: String.raw`What should be done if the current column is unable to achieve the desired product purity?`,
          solution: String.raw`First find the cause, then use the operating handles in order of cost.

**Check first**

- Is the column **operating properly**? Look for flooding, excessive entrainment, weeping or dumping, foaming, fouled or damaged trays, or flooded downcomers (pressure-drop and temperature profiles). These lower the tray efficiency.
- Is the feed what was designed for (composition, rate, thermal condition q)? Is the feed entering at the right tray?
- Are the instruments and analyses right, and is the reflux really saturated liquid (subcooled reflux changes internal flows)?

**Operating changes (existing column)**

1. **Increase the reflux ratio** L/D (and the boilup with it). The operating lines move away from the equilibrium curve, so each stage does more separation. Limit: condenser and reboiler capacity and flooding (V = (R+1)D grows).
2. **Move the feed to the optimum feed stage** if alternative feed nozzles exist; a badly placed feed wastes stages.
3. **Change the feed condition** q (preheat or cool the feed) to shift the load between the sections.
4. **Reduce the feed rate**, so higher L/D is possible within flooding limits, or reduce the distillate rate (D/F) if purity rather than recovery is the problem.
5. **Change the pressure**: lower pressure usually increases relative volatility α for hydrocarbons (check that the condenser can still condense).

**Equipment changes**

6. **Add stages**: more trays at smaller spacing, a taller column, or higher-efficiency trays or structured packing.
7. Add a second column in series or a polishing step, or use a different separation (extractive or azeotropic distillation, membrane, adsorption) if an azeotrope or pinch limits the purity.

**Exam tip:** on a McCabe–Thiele diagram, purity at fixed N is raised by increasing R (lines toward y = x) until the condenser/reboiler or flooding limit is hit; beyond that you need more stages.`,
          answer: String.raw`Fix operating problems (flooding, weeping, feed location, efficiency), then raise L/D and boilup, optimise feed stage and q, reduce feed rate or change pressure; if still short, add stages/better trays or packing, or another column.` } ] },

    { id: "2022-23-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q8a", label: "(a)", marks: "6",
          topic: "batch", sub: "Batch vs continuous distillation: pros and cons",
          type: "theory", syllabus: "in", repeats: ["2013-14-Q3a", "2015-16-Q7a", "2020-21-Q8a", "practice-batch-P6a"],
          text: String.raw`Discuss the benefits and drawbacks of using batch distillation in contrast to continuous distillation.`,
          solution: String.raw`| Benefits of batch | Drawbacks of batch |
|---|---|
| **Versatile:** one column can separate many different feeds and products (multipurpose plants, pharmaceuticals, fine chemicals, specialty products) | **Less energy-efficient**: more energy per unit product than a continuous column |
| Economical for **small or seasonal volumes** (feed produced in batches, short campaigns) | **Time-varying** compositions and temperatures: needs more control and operator attention |
| Can produce **several products** (cuts) from one column by changing reflux or collecting fractions | Lower throughput; **down time** between batches (charging, heating up, emptying, cleaning) |
| Easy to **clean** between runs: good for fouling materials and for traceability of product lots (GMP) | Longer residence time of the charge at high temperature in the still: risk of thermal degradation |
| Simple to start up and to change product specs; can handle feeds with solids | Higher labour cost per unit product; scale-up and design are less standard |

Continuous distillation is preferred for large, steady flows (refineries, bulk chemicals) where energy efficiency matters most.`,
          answer: String.raw`Batch is flexible (many feeds/products, small volumes, easy cleaning) but uses more energy and labour, has down time, and has time-varying operation.` },
        { id: "2022-23-Q8b", label: "(b)", marks: "6",
          topic: "batch", sub: "Variable reflux ratio (constant x_D) batch distillation",
          type: "theory", syllabus: "in", repeats: ["2021-22-Q5d"],
          text: String.raw`Explain the variable reflux ratio method of batch distillation.`,
          solution: String.raw`In multistage batch distillation (still pot + column with N stages + total condenser) the still composition $x_W$ falls as light component is removed. In the **variable-reflux** mode the reflux ratio is **increased continuously** so that the **distillate composition $x_D$ stays constant**.

**Procedure** (course slides; Wankat Sec. 9.4):

1. Fix $x_D$ and the number of stages N (still pot counts as one).
2. For a series of L/D values, draw the operating line $y = \frac{L}{V}x + \left(1-\frac{L}{V}\right)x_D$ from $(x_D, x_D)$, step off N stages, and read the still composition $x_W$ at the last step. Each L/D corresponds to one $x_W$.
3. **Initial** L/D: the value whose N steps end at $x_W = x_F$. **Final** L/D: the value whose N steps end at $x_{W,final}$.
4. Mass balances between the initial and final states (no holdup):

$$D_{total} = F\frac{x_F - x_{W,final}}{x_D - x_{W,final}},\qquad W_{final} = F - D_{total}$$

5. If needed, the boilup required, and so the operating time, from $dD = V\,\frac{dD}{V}$ with $V = (1 + L/D)D$: integrate over the run.

**Features:** constant product purity (no blending of cuts), but the reflux (and energy per mole) rises steeply as the still becomes depleted; it needs a controller that raises L/D, often driven by the top-tray temperature. Compare with **constant reflux**, where $x_D$ falls during the run and the average distillate composition comes from a Rayleigh balance.`,
          answer: String.raw`L/D is raised during the run so x_D stays constant; each L/D (N fixed) gives an x_W on the McCabe–Thiele diagram, initial and final L/D come from x_F and x_W,final, and D_total = F(x_F − x_W)/(x_D − x_W).` },
        { id: "2022-23-Q8c", label: "(c)", marks: "23",
          topic: "batch", sub: "Simple batch (Rayleigh) methanol–water 75% → 55%",
          type: "numerical", syllabus: "in", repeats: ["practice-batch-P2a"],
          text: String.raw`We wish to use a simple batch still (one equilibrium stage) to separate methanol from water. The feed charge to the still pot is 100 moles of a 75 mol% methanol mixture. We desire a final bottoms concentration of 55 mol% methanol. Find the amount of distillate collected, the amount of material left in the still pot, and the average concentration of distillate. Pressure is 1 atm. Equilibrium data are given in Table 8(c).

(Table 8(c) is the same methanol–water VLE table as Table Q.5(b), 1 atm, mol%.)`,
          solution: String.raw`This is slide Problem D2 (Wankat 9.D2).

**Given:** F = 100 mol, $x_F = 0.75$; $x_{W,final} = 0.55$; one equilibrium stage (still pot), 1 atm; VLE from Table 8(c).

**Find:** $W_{final}$, $D_{total}$, $x_{D,avg}$.

**Assumptions:** the vapor leaving is in equilibrium with the still liquid ($y = y^*(x_W)$); no holdup outside the pot; linear interpolation of the table.

1. **Rayleigh equation:**

$$\ln\frac{W_{final}}{F} = -\int_{x_{W,final}}^{x_F}\frac{dx_W}{y - x_W}$$

2. **Integrand from the table** (interpolated at 0.55, 0.65, 0.75):

| $x_W$ | y | y − x | 1/(y − x) |
|---|---|---|---|
| 0.55 | 0.802 | 0.252 | 3.968 |
| 0.60 | 0.825 | 0.225 | 4.444 |
| 0.65 | 0.8475 | 0.1975 | 5.063 |
| 0.70 | 0.870 | 0.170 | 5.882 |
| 0.75 | 0.8925 | 0.1425 | 7.018 |

3. **Simpson's rule**, h = 0.05:

$$\int_{0.55}^{0.75}\frac{dx}{y-x} = \frac{0.05}{3}\left[3.968 + 4(4.444) + 2(5.063) + 4(5.882) + 7.018\right] = 1.040$$

(The slide uses three points, $\frac{0.2}{6}[3.92 + 4(5.13) + 6.89] = 1.044$; same answer.)

4. **Amounts:**

$$W_{final} = 100\,e^{-1.040} = 35.3\ \mathrm{mol},\qquad D_{total} = 100 - 35.3 = 64.7\ \mathrm{mol}$$

5. **Average distillate** (methanol balance):

$$x_{D,avg} = \frac{Fx_F - W_{final}x_{W,final}}{D_{total}} = \frac{75 - 35.3(0.55)}{64.7} = 0.859$$

![Rayleigh integrand 1/(y − x) against x_W, area 1.040 between 0.55 and 0.75](fig/2022-23-Q8c-sol.svg)

**Exam tip:** integrate from the final to the initial still composition; the area is positive and $W_{final} = F e^{-\text{area}}$.`,
          answer: String.raw`∫dx/(y−x) = 1.040 → W_final ≈ 35.3 mol left in the pot, D_total ≈ 64.7 mol, x_D,avg ≈ 0.859.` } ] }
  ] });
