QB.paper({
  year: "2013-14", date: "28/06/2015", marks: 210,
  rules: String.raw`Section A: four questions, answer any three. Section B: four questions, answer any three. Separate scripts for each section; attach the triangular diagram (Q4) and the Fig. for Q. 7(a) with the script.`,
  questions: [
    { id: "2013-14-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q1", label: "", marks: "35",
          topic: "absorption", sub: "Concentrated absorber in weight ratios: (L/G)min and stages",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A vent gas stream from a chemical plant is 15 wt% Z; the rest is air. The local pollution authorities feel that Z is a minor pollutant and require a maximum concentration of 4 wt%. The plant owner decided to build an absorption tower using water as the absorbent. The inlet water is pure and at 30°C. The operation is essentially isothermal. At 30°C the equilibrium data can be approximated by $y = 0.5x$ (where y and x are weight fractions of Z in vapor and liquid, respectively).

(a) Find the minimum ratio of water to air (L/G)$_{min}$.

(b) Find the total number of equilibrium stages using $\dfrac{L}{G} = 1.22\left(\dfrac{L}{G}\right)_{min}$.

Assuming that air is not soluble in water and that water is nonvolatile.`,
          solution: String.raw`**Given:** gas in $y_{N+1}$ = 0.15, gas out $y_1$ = 0.04 (wt frac Z); pure water $x_0$ = 0; $y = 0.5x$ (wt fractions); isothermal; air insoluble, water nonvolatile.

**Find:** (a) $(L/G)_{min}$, kg water/kg air; (b) N at $L/G = 1.22(L/G)_{min}$.

**Assumptions:** 15% is concentrated, so total flows change; use **weight ratios** with solute-free flows $G$ (kg air/h) and $L$ (kg water/h), which are constant, so the operating line is straight in $Y$–$X$.

### (a) Minimum L/G
1. End ratios: $Y_{N+1} = \dfrac{0.15}{0.85} = 0.17647$; $Y_1 = \dfrac{0.04}{0.96} = 0.04167$; $X_0 = 0$.
2. Equilibrium in ratio units: $\dfrac{Y}{1+Y} = 0.5\dfrac{X}{1+X}$, i.e. $Y = \dfrac{0.5X}{1+0.5X}$ (concave curve, below the operating line).
3. Pinch check: at $Y_{N+1}$, $y = 0.15$, $x^* = 0.30$, $X_N^* = 0.4286$. The line from $(0, 0.04167)$ to $(0.4286, 0.17647)$ has slope 0.3145, while the equilibrium slope there is $0.5/(1+0.5X)^2 = 0.339$; the line stays above the curve everywhere (checked numerically), so the pinch is at the bottom (gas inlet).
$$
\left(\frac{L}{G}\right)_{min} = \frac{Y_{N+1} - Y_1}{X_N^* - X_0} = \frac{0.17647 - 0.04167}{0.4286 - 0} = 0.3145\ \mathrm{\frac{kg\ water}{kg\ air}}
$$

### (b) Number of stages
4. $L/G = 1.22(0.3145) = 0.3837$. Outlet liquid: $X_N = \dfrac{0.13480}{0.3837} = 0.3513$ ($x_N$ = 0.260 wt frac).
5. Operating line: $Y_{j+1} = 0.3837X_j + 0.04167$.
6. Step from the top (equilibrium $X_j$ from $Y_j$, then $Y_{j+1}$ from the operating line):

| stage | $Y_j$ | $X_j$ (eq.) |
|---|---|---|
| 1 | 0.0417 | 0.0870 |
| 2 | 0.0750 | 0.1622 |
| 3 | 0.1039 | 0.2320 |
| 4 | 0.1307 | 0.3006 |
| 5 | 0.1570 | 0.3726 |

   Fraction of stage 5 $= (0.3513 - 0.3006)/(0.3726 - 0.3006) = 0.70$.

![Y–X diagram for the Z absorber: minimum line to the pinch at the gas inlet and 4.7 stages at 1.22 (L/G)min](fig/2013-14-Q1-sol.svg)

**Result:** (a) $(L/G)_{min}$ = 0.315 kg water/kg air; (b) N = 4.70 → 5 equilibrium stages; leaving water ≈ 26 wt% Z.

> **Exam tip:** with weight fractions, convert to weight ratios exactly as for mole ratios; never use 0.15/0.04 directly on a y–x diagram when the gas is this concentrated.`,
          answer: String.raw`(a) (L/G)min = 0.315 kg water/kg air (pinch at gas inlet, X* = 0.429). (b) L/G = 0.384, XN = 0.351; N = 4.7 → 5 equilibrium stages.` } ] },
    { id: "2013-14-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q2", label: "", marks: "35",
          topic: "immiscible-extraction", sub: "Temperature-swing extraction/back-extraction, two Kremser columns",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The system shown in the Fig. for Q. No. 2 is extracting acetic acid from water using benzene as the solvent. The temperature shift is used to regenerate the solvent and return the acid to the water phase.

(a) Determine $y_1$ and $y_{N+1}$ (Units are in wt. fraction) for the column at 40°C.

(b) Determine R' and $x'_N$ for the column at 25°C.

![Fig. for Q. 2: column at 40 °C (N = 11, R = 100, x0 = 0.01, xN = 0.0008, E = 1000 benzene) and column at 25 °C (N = 9, water R' with x'0 = 0); the benzene circulates between them through a cooler and a heater](fig/2013-14-Q2.svg)

Table for Question No. 2: distribution coefficient for acetic acid in water and benzene, $K_d = y_A/x_A$ (weight fraction units, Perry and Green, 1984):

| T, °C | 25 | 30 | 40 | 50 | 60 |
|---|---|---|---|---|---|
| $K_d$ | 0.0328 | 0.0984 | 0.1022 | 0.0588 | 0.0637 |`,
          solution: String.raw`This is Wankat Problem 13.D15 (book answers: $y_1$ = 0.00092693, $y_{N+1}$ = 6.929×10⁻⁶; R′ = 50.35, $x'_N$ = 0.0183).

**Given:** Column 1 (40 °C): R = 100 (water), $x_0$ = 0.01, $x_N$ = 0.0008, E = 1000 (benzene), N = 11, $m_1$ = 0.1022. Column 2 (25 °C): N = 9, $m_2$ = 0.0328, pure water in ($x'_0$ = 0). The benzene loop: extract $y_1$ from the top of column 1 is cooled and enters the bottom of column 2; the regenerated benzene ($y_{N+1}$) leaves the top of column 2, is heated and returns to the bottom of column 1.

**Assumptions:** dilute, so R and E are constant and the McCabe–Thiele lines are straight; water and benzene immiscible; equilibrium stages; Kremser applies.

### (a) Column 1, 40 °C
1. Extraction factor: $S_1 = \dfrac{m_1E}{R} = \dfrac{0.1022(1000)}{100} = 1.022$.
2. Kremser, raffinate form:
$$
\frac{x_N - y_{N+1}/m_1}{x_0 - y_{N+1}/m_1} = \frac{S_1 - 1}{S_1^{N+1} - 1} = \frac{0.022}{1.022^{12} - 1} = 0.07372
$$
3. Solve for $y_{N+1}$:
$$
y_{N+1} = m_1\frac{0.07372\,x_0 - x_N}{0.07372 - 1} = 0.1022\,\frac{0.0007372 - 0.0008}{-0.92628} = 6.92\times10^{-6}
$$
4. Acid balance: $y_1 = y_{N+1} + \dfrac{R}{E}(x_0 - x_N) = 6.92\times10^{-6} + 0.1(0.0092) = 9.27\times10^{-4}$.
5. Check by stepping 11 stages ($x_j = y_j/m_1$, $y_{j+1} = y_1 - 0.1(x_0 - x_j)$): $x_{11}$ = 0.000800 ✓.

### (b) Column 2, 25 °C
6. Benzene now gives up acid to water. Benzene in (bottom) $y_{in} = y_1 = 9.27\times10^{-4}$, out (top) $y_{out} = y_{N+1} = 6.92\times10^{-6}$; water in $x'_0 = 0$. Fraction of acid left in the benzene:
$$
\frac{y_{out} - m_2x'_0}{y_{in} - m_2x'_0} = \frac{6.92\times10^{-6}}{9.27\times10^{-4}} = 0.00747 = \frac{A - 1}{A^{N+1} - 1}, \quad A = \frac{R'}{m_2E}
$$
7. Trial and error with N = 9: A = 1.535 (check: $(0.535)/(1.535^{10} - 1) = 0.00747$ ✓).
8. $R' = A\,m_2E = 1.535(0.0328)(1000) = 50.35$ (same units as E, kg/h); acid balance:
$$
x'_N = \frac{E(y_{in} - y_{out})}{R'} = \frac{1000(9.27\times10^{-4} - 6.92\times10^{-6})}{50.35} = 0.0183
$$
9. Stepping check (9 stages, $y_{j+1} = y_{out} + (R'/E)x'_j$) returns $y_{10}$ = 9.27×10⁻⁴ ✓.

![McCabe–Thiele checks for both columns: 11 nearly parallel steps at 40 °C and 9 steps at 25 °C](fig/2013-14-Q2-sol.svg)

**Result:** (a) $y_1$ = 9.27×10⁻⁴, $y_{N+1}$ = 6.92×10⁻⁶ wt frac; (b) R′ ≈ 50.3 (per 1000 benzene) and $x'_N$ ≈ 0.0183 wt frac. The temperature swing (K falls from 0.102 to 0.033) lets half as much water recover the acid at 1.8 times the feed concentration.

> **Exam tip:** in column 2 the benzene is the phase being stripped and water is the solvent, so the factor is $R'/(m_2E)$; solve it by trial (or plot the Kremser fraction vs A).`,
          answer: String.raw`(a) y1 = 9.27×10⁻⁴, yN+1 = 6.92×10⁻⁶ (wt frac). (b) R' ≈ 50.3, x'N ≈ 0.0183.` } ] },
    { id: "2013-14-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q3a", label: "(a)", marks: "15",
          topic: "batch", sub: "Batch vs continuous distillation; which industries use which",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss the advantages and disadvantages of batch distillation compared to continuous distillation. Would you expect to see batch or continuous distillation in the following industries? Why?

(i) Large basic chemical plant
(ii) Pharmaceutical plant
(iii) Still for solvent recovery in a painting operation
(iv) Crude oil refinery
(v) Condensate refinery`,
          solution: String.raw`**Advantages of batch**
- Versatile: one column can separate many different feeds and products, and product purity can be changed run to run.
- Suited to small amounts of material, occasional or seasonal operation, and plants that do not run continuously (a batch finished in one or two shifts).
- One column can make several products (successive cuts) from a multicomponent charge; low capital for small capacity.
- Easy to trace a batch (quality records, as in pharmaceuticals); handles feeds containing solids or tars left in the pot.

**Disadvantages of batch**
- Less energy-efficient; unsteady operation needs more operator attention or control; distillate composition changes unless reflux is varied.
- Down time between batches (charging, heating, cleaning); throughput limited.
- Long residence of the charge at the pot temperature (problem for heat-sensitive materials).
- For large, steady flows continuous distillation is cheaper per kg.

| industry | choice | reason |
|---|---|---|
| (i) large basic chemical plant | continuous | huge steady flows of fixed products; energy efficiency and low unit cost matter |
| (ii) pharmaceutical plant | batch | small volumes, many products, campaign operation, batch traceability |
| (iii) solvent recovery still in a painting operation | batch | small, intermittent amounts of dirty solvent; residue (paint solids) stays in the pot |
| (iv) crude oil refinery | continuous | very large, steady throughput |
| (v) condensate refinery (gas condensate splitter) | continuous | large steady feed from gas wells, fixed product slate |

> **Exam tip:** the deciding factors are scale, continuity of supply and number of products; give one reason per industry.`,
          answer: String.raw`Batch: flexible, small/intermittent, many products, but less efficient and labor-intensive. (i) continuous, (ii) batch, (iii) batch, (iv) continuous, (v) continuous.` },
        { id: "2013-14-Q3b", label: "(b)", marks: "10",
          topic: "absorption", sub: "How to make the absorber operating line straight",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`The McCabe-Thiele diagram is most useful when the operating line is straight. How can you achieve this in absorption process?`,
          solution: String.raw`The operating line $Y_{j+1} = \dfrac{L}{G}X_j + \left(Y_1 - \dfrac{L}{G}X_0\right)$ is straight when $L/G$ is constant from stage to stage. In absorption the total flows change as solute moves from gas to liquid, so:

1. **Use solute-free flows and ratio units.** Define $L$ = mol (or kg) solvent/h and $G$ = mol carrier gas/h, and $X = x/(1-x)$, $Y = y/(1-y)$. If the carrier gas is insoluble and the solvent nonvolatile, $L$ and $G$ are constant, so the operating line is exactly straight in $Y$–$X$ coordinates.
2. Convert the equilibrium data to ratio units (it may curve, which is fine).
3. **Dilute systems:** if the solute is only a few percent, total flows are nearly constant and the line is straight in ordinary mole fractions $y$–$x$ (then Kremser can also be used if equilibrium is linear).
4. Keep the column **isothermal and isobaric** (cooling coils, dilute gas) so that equilibrium does not shift with heat of absorption; heat effects would also change L/V through vaporization of solvent.

The assumptions behind this: insoluble carrier gas, nonvolatile solvent, isothermal, isobaric operation.

> **Exam tip:** "mole ratios with solute-free flows" is the key phrase; it is the absorption equivalent of CMO.`,
          answer: String.raw`Use solute-free flow rates with mole (weight) ratios X, Y, valid with insoluble carrier and nonvolatile solvent (isothermal, isobaric); for dilute gas, plain mole fractions also give a straight line.` },
        { id: "2013-14-Q3c", label: "(c)", marks: "10",
          topic: "leaching", sub: "Washing as an equilibrium-stage process",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`In chemical engineering washing is treated as an equilibrium staged separation process – Explain. How do you reach equilibrium in washing?`,
          solution: String.raw`**Why an equilibrium stage:** each washing unit is a mixer followed by a settler or thickener, exactly the contact–equilibrate–separate pattern of a stage. In washing the solute is not bound to the solid; it is dissolved in the liquid entrained between and inside the particles. After thorough mixing with wash liquor the solute concentration is the same everywhere in the liquid, so the **underflow liquid and the overflow liquid have the same concentration**:
$$
y_j = x_j
$$
This is the equilibrium relation of a washing stage. With constant underflow U and overflow O (constant solids rate, porosity and liquid density), countercurrent washing is analysed with a McCabe–Thiele diagram (equilibrium line y = x) or the Kremser equation with m = 1, as for any equilibrium cascade.

**How equilibrium is reached**
- Intense mixing of solids with wash liquor so that the entrained liquid is displaced and diluted.
- Enough residence time for solute in the pores to diffuse out (fine particles, warm liquor).
- Good settling/thickening so that only the entrained underflow liquid goes with the solids and the overflow is clear (no solids carried over).
- Where these are not fully met, the stage is non-ideal; this is handled with a stage efficiency or an effective equilibrium constant (as in leaching).

> **Exam tip:** write y = x and say why: the washer only equalizes concentrations; the solid itself holds no solute.`,
          answer: String.raw`A washer mixes and then separates; after mixing the underflow and overflow liquids have equal concentration (y = x), which is the stage equilibrium; reached by good mixing, enough contact time and clean settling.` } ] },
    { id: "2013-14-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q4", label: "", marks: "35",
          topic: "partial-extraction", sub: "Countercurrent extraction, acetic acid–water–isopropyl ether: Smin, N, extract",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Pure isopropyl ether is being used to extract an aqueous solution of 150 kg/h with 30 wt% acetic acid and 70 wt% water by countercurrent multi-stage extraction. The exit concentration in the aqueous phase is 10 wt%.

(a) Find the minimum isopropyl ether rate for this separation.

(b) If 450 kg/h isopropyl ether is used: (i) Calculate the number of stages required. (ii) Find the exit extract concentration.

The equilibrium data and right triangular diagram for water–acetic acid–isopropyl ether at 20°C and 1 atm are attached. [Note: Please attach the right triangular diagram with your answer script.]

Equilibrium data, water–acetic acid–isopropyl ether at 20 °C and 1 atm, wt% (points on the same line are in equilibrium; Treybal 1968):

| water layer: acid $x_A$ | water $x_D$ | ether $x_S$ | ether layer: acid $y_A$ | water $y_D$ | ether $y_S$ |
|---|---|---|---|---|---|
| 0.69 | 98.1 | 1.2 | 0.18 | 0.5 | 99.3 |
| 1.41 | 97.1 | 1.5 | 0.37 | 0.7 | 98.9 |
| 2.89 | 95.5 | 1.6 | 0.79 | 0.8 | 98.4 |
| 6.42 | 91.7 | 1.9 | 1.93 | 1.0 | 97.1 |
| 13.30 | 84.4 | 2.3 | 4.82 | 1.9 | 93.3 |
| 25.50 | 71.1 | 3.4 | 11.40 | 3.9 | 84.7 |
| 36.70 | 58.9 | 4.4 | 21.60 | 6.9 | 71.5 |
| 44.30 | 45.1 | 10.6 | 31.10 | 10.8 | 58.1 |
| 46.40 | 37.1 | 16.5 | 36.20 | 15.1 | 48.7 |

(The attached right-triangle plot shows wt% acetic acid against wt% water.)`,
          solution: String.raw`Same system and method as the slides' Example 18-2 (Wankat Example 13-4, data of Wankat Table 13-5). Coordinates on the right triangle: (wt frac water $x_D$, wt frac acid $x_A$); solvent S = (0, 0). Notation of the slides: feed $F = R_{N+1}$ enters stage N, solvent $E_0 = S$ enters stage 1, raffinate $R_1$ leaves stage 1, extract $E_N$ leaves stage N; difference point $\Delta = E_0 - R_1 = E_N - R_{N+1}$.

**Given:** F = 150 kg/h at (0.70, 0.30); pure ether; $R_1$ on the raffinate (water-rich) curve at $x_A$ = 0.10 → (0.879, 0.100), interpolating the table (water 87.9%, ether 2.1%).

**Assumptions:** isothermal (20 °C), equilibrium stages, tie lines interpolated linearly between the data tie lines; all computed numerically from the table (equivalent to careful work on the attached diagram).

### (a) Minimum solvent rate
1. Δ lies on the line through $S$ and $R_1$ (since $\Delta = E_0 - R_1$) and on the line through F and $E_N$.
2. At minimum solvent an operating line coincides with a tie line (pinch). Extend the tie lines between $R_1$ and the feed end until they cut line $SR_1$ (extended beyond S). For Δ on the solvent side, the intersection **closest to S** gives the minimum solvent; here it is from the data tie line 25.5% / 11.4% acid: $\Delta_{min}$ ≈ (−1.10, −0.125).
3. Line $\Delta_{min}F$ cuts the extract curve at $E_{N,min}$ ≈ 14.6% acid. Balances (acid and water) for $E_N$ and $R_1$:
   $150(0.30) = E_N(0.146) + R_1(0.10)$, $150(0.70) = E_N\,y_{D,N} + R_1(0.879)$ → $E_N$ = 235, $R_1$ = 106.5 kg/h.
$$
S_{min} = E_N + R_1 - F \approx 191\ \mathrm{kg/h}\quad (S_{min}/F \approx 1.28)
$$
   Check: at 1.01 $S_{min}$ the stepping needs about 25 stages, at 1.05 $S_{min}$ about 11, confirming the pinch.

### (b) S = 450 kg/h
4. Mixing point: $x_{A,M} = \dfrac{150(0.30)}{600} = 0.075$, $x_{D,M} = \dfrac{150(0.70)}{600} = 0.175$ → M = (0.175, 0.075).
5. $E_N$: extend line $R_1M$ to the extract curve: $E_N$ = (0.0255 water, 0.0697 acid), ether 0.905.
6. Flows by lever rule/balances: $E_N = 600\,\dfrac{\overline{R_1M}}{\overline{R_1E_N}} = 494.9$ kg/h, $R_1 = 105.1$ kg/h. Acid check: 494.9(0.0697) + 105.1(0.10) = 34.5 + 10.5 = 45.0 = 150(0.30) ✓.
7. Difference point: $\Delta = \dfrac{S\cdot(0,0) - R_1(0.879, 0.100)}{S - R_1} = \dfrac{-105.1(0.879, 0.100)}{344.9}$ = (−0.268, −0.030); net flow 344.9 kg/h toward the solvent end.
8. Stage-by-stage from the feed end (tie line from $E_j$ gives $R_j$; line $\Delta R_j$ cut with the extract curve gives $E_{j-1}$):

| stage (from feed end) | extract $E$ (water, acid) | raffinate $R$ (water, acid) |
|---|---|---|
| N | (0.0255, 0.0697) | (0.801, 0.173) |
| N−1 | (0.0110, 0.0226) | (0.909, 0.072) |

   The second stage passes the target 10% acid: fraction $= (0.173 - 0.100)/(0.173 - 0.072) = 0.72$ (stepping from the $R_1$ end gives 1.66).

![Right-triangle diagram: binodal, mixing point M, EN at 6.97% acid, R1 at 10% acid, Δ at (−0.268, −0.030) and the stage tie lines](fig/2013-14-Q4-sol.svg)

**Result:** (a) $S_{min}$ ≈ 190 kg/h of isopropyl ether. (b)(i) N ≈ 1.7 → 2 equilibrium stages; (ii) exit extract ≈ 495 kg/h containing 6.97 wt% acetic acid (2.6% water, 90.5% ether); raffinate 105 kg/h at 10% acid. With 450 kg/h (2.4 $S_{min}$) the separation is easy; graphical answers within ±0.2 stage and ±10 kg/h of $S_{min}$ are normal.

> **Exam tip:** find M from the mass-fraction formula rather than by eye, then $E_N$ on line $R_1M$; Δ is where lines $FE_N$ and $SR_1$ meet (outside the triangle on the solvent side).`,
          answer: String.raw`(a) Smin ≈ 190 kg/h. (b) N ≈ 1.7 → 2 stages; exit extract ≈ 495 kg/h at 6.97 wt% acid (raffinate 105 kg/h at 10%).` } ] },
    { id: "2013-14-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw`The equilibrium data for benzene–toluene system is given below for a system at 1 atm pressure. (The liquid composition of benzene in the mixture is denoted by $\chi_B$; the enthalpies of saturated liquid and saturated vapor at the corresponding composition are denoted by h and H, respectively). The reference for enthalpies is taken as pure benzene at its boiling point.

| $\chi_B$ | T (°C) | h (kJ/kmol) | H (kJ/kmol) |
|---|---|---|---|
| 0 | 110.6057 | 5121.594 | 38451.43 |
| 0.1 | 105.837 | 4247.225 | 36821.79 |
| 0.2 | 101.6467 | 3494.285 | 35552.68 |
| 0.3 | 97.9292 | 2840.94 | 34539.77 |
| 0.4 | 94.60248 | 2270.257 | 33714.01 |
| 0.5 | 91.60229 | 1768.977 | 33028.35 |
| 0.6 | 88.87775 | 1326.605 | 32449.87 |
| 0.7 | 86.38817 | 934.735 | 31955 |
| 0.8 | 84.10065 | 586.5622 | 31526.47 |
| 0.9 | 81.98831 | 276.5179 | 31151.4 |
| 1 | 80.029 | 0 | 30820 |

A mixture of benzene and toluene containing 40 mole percent benzene is to be separated in a distillation column to give a product containing 90 mole percent benzene at the top and a bottom product containing not more than 10 mole percent benzene. The feed enters the column at its boiling point and the vapor leaving the column is condensed fully, provides reflux and product. The unit operates at 1 atm and a reflux ratio of 3 kmol/kmol product. The relative volatility is taken to be 2.5.`,
      parts: [
        { id: "2013-14-Q5a", label: "(a)", marks: "5",
          topic: "mccabe-thiele", sub: "Is CMO valid? Check with enthalpy data",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Given the above data can you make the assumption of constant molal overflow for this unit? Give your reasoning.`,
          solution: String.raw`CMO needs (1) equal molar latent heats, (2) negligible sensible-heat changes and heat of mixing, (3) adiabatic column, constant pressure. Check (1) with the table, $\lambda = H - h$:

| $\chi_B$ | 0 | 0.2 | 0.4 | 0.6 | 0.8 | 1.0 |
|---|---|---|---|---|---|---|
| $H - h$, kJ/kmol | 33,330 | 32,058 | 31,444 | 31,123 | 30,940 | 30,820 |

- $\lambda_{toluene}/\lambda_{benzene} = 33{,}330/30{,}820 = 1.08$: within about 8% over the whole column (about 3% between $x_B$ = 0.1 and $x_D$ = 0.9).
- Saturated liquid enthalpies change by only about 5000 kJ/kmol over the range (15% of λ), and the H and h curves are nearly parallel straight lines, which is the Ponchon–Savarit condition for constant flows.
- Benzene and toluene form a nearly ideal solution, so the heat of mixing is negligible; the column is at constant 1 atm.

**Conclusion:** yes, CMO is a reasonable assumption (errors of a few percent in L and V); the constant α = 2.5 is consistent with it.`,
          answer: String.raw`Yes: molar latent heats H − h vary only 30,820–33,330 kJ/kmol (≈ 8%), H and h lines nearly parallel, ideal mixture → CMO acceptable.` },
        { id: "2013-14-Q5b", label: "(b)", marks: "12",
          topic: "mccabe-thiele", sub: "Operating and equilibrium line equations (α = 2.5, R = 3)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Assuming constant molal overflow find the equation for top operating line, bottom operating line, equilibrium line.`,
          solution: String.raw`**Basis:** F = 100 kmol/h (no rate is given; the line equations do not depend on it). z = 0.40, $x_D$ = 0.90, $x_B$ = 0.10, R = L/D = 3, saturated liquid feed (q = 1), total condenser.

1. External balances:
$$
D = F\frac{z - x_B}{x_D - x_B} = 100\,\frac{0.30}{0.80} = 37.5, \qquad B = 62.5\ \mathrm{kmol/h}
$$
2. Rectifying flows: $L = RD = 112.5$, $V = (R+1)D = 150$. Stripping (q = 1): $\bar{L} = L + F = 212.5$, $\bar{V} = V = 150$.
3. **Top operating line:**
$$
y_{j+1} = \frac{L}{V}x_j + \frac{D}{V}x_D = \frac{R}{R+1}x_j + \frac{x_D}{R+1} = 0.75x_j + 0.225
$$
4. **Bottom operating line:**
$$
y_{k+1} = \frac{\bar{L}}{\bar{V}}x_k - \frac{B}{\bar{V}}x_B = 1.4167x_k - 0.04167
$$
   (passes through $y = x = 0.10$).
5. **Equilibrium line** (constant α):
$$
y = \frac{\alpha x}{1 + (\alpha - 1)x} = \frac{2.5x}{1 + 1.5x}, \qquad x = \frac{y}{2.5 - 1.5y}
$$
6. The two operating lines meet at x = 0.40, y = 0.525 (on the vertical feed line).`,
          answer: String.raw`Top: y = 0.75x + 0.225; bottom: y = 1.4167x − 0.0417; equilibrium: y = 2.5x/(1 + 1.5x) (D = 37.5, B = 62.5 per 100 kmol/h feed).` },
        { id: "2013-14-Q5c", label: "(c)", marks: "3",
          topic: "mccabe-thiele", sub: "Feed line for a saturated liquid feed",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is the equation for the feed line? Explain your reasoning.`,
          solution: String.raw`The feed is at its boiling point (saturated liquid), so
$$
q = \frac{H - h_F}{H - h} = 1
$$
The feed line $y = \dfrac{q}{q-1}x - \dfrac{z}{q-1}$ has infinite slope, so it is the **vertical line x = z = 0.40**. Physically all the feed joins the liquid: $\bar{L} = L + F$, $\bar{V} = V$. It passes through $y = x = 0.40$ and through the intersection of the two operating lines (0.40, 0.525).`,
          answer: String.raw`q = 1, so the feed line is vertical: x = 0.40.` },
        { id: "2013-14-Q5d", label: "(d)", marks: "15",
          topic: "mccabe-thiele", sub: "Lewis method: optimum feed stage and number of stages",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Using the equations above and using the Lewis method, determine the optimum stage for the feed to enter when the feed is at boiling point temperature. Find the theoretical number of stages for the system.`,
          solution: String.raw`**Lewis method:** start at the top with $y_1 = x_D$ (total condenser), alternate equilibrium $x_j = \dfrac{y_j}{2.5 - 1.5y_j}$ and the operating line for $y_{j+1}$. Switch to the bottom line as soon as $x_j < 0.40$ (the intersection, optimum feed).

1. Stage 1: $y_1 = 0.900$, $x_1 = 0.900/(2.5 - 1.35) = 0.7826$.
2. Stage 2: $y_2 = 0.75(0.7826) + 0.225 = 0.8120$, $x_2 = 0.6333$.
3. Stage 3: $y_3 = 0.7000$, $x_3 = 0.4827$.
4. Stage 4: $y_4 = 0.5871$, $x_4 = 0.3625 < 0.40$ → stage 4 is the feed stage; use the bottom line from here.
5. Stage 5: $y_5 = 1.4167(0.3625) - 0.04167 = 0.4719$, $x_5 = 0.2633$.
6. Stage 6: $y_6 = 0.3314$, $x_6 = 0.1654$.
7. Stage 7: $y_7 = 0.1927$, $x_7 = 0.0872 < x_B = 0.10$.

| stage | y | x | line for next y |
|---|---|---|---|
| 1 | 0.9000 | 0.7826 | top |
| 2 | 0.8120 | 0.6333 | top |
| 3 | 0.7000 | 0.4827 | top |
| 4 (feed) | 0.5871 | 0.3625 | bottom |
| 5 | 0.4719 | 0.2633 | bottom |
| 6 | 0.3314 | 0.1654 | bottom |
| 7 | 0.1927 | 0.0872 | — |

Fraction of stage 7 $= (0.1654 - 0.10)/(0.1654 - 0.0872) = 0.84$.

![McCabe–Thiele check of the Lewis calculation: 6.84 stages, feed on stage 4](fig/2013-14-Q5d-sol.svg)

**Result:** optimum feed on stage 4 from the top; 6.84 → 7 theoretical stages, i.e. 6 theoretical plates plus the reboiler (the still is counted as the last stage).

> **Exam tip:** in the Lewis method, show the switch test ($x_4 < z$ for a saturated-liquid feed) explicitly; that is how the optimum feed stage is "determined".`,
          answer: String.raw`Feed on stage 4 (optimum); 6.84 → 7 theoretical stages including the reboiler.` } ] },
    { id: "2013-14-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q6a", label: "(a)", marks: "10",
          topic: "flash", sub: "Reusing existing distillation equipment and flash drums",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`What are the reasons for reusing old distillation equipment? What conditions must be fulfilled to reuse an existing flash drum? List some steps you can take to reuse an existing flash drum if the above condition is not fulfilled?`,
          solution: String.raw`> From Wankat section 2.10 (Using existing flash drums) and 4.13 (New uses for old columns); not in the current slides.

**Reasons to reuse old equipment**
- Equipment often outlives the plant; used or off-the-shelf units in the salvage yard or from dealers are much cheaper than custom-built ones.
- Faster delivery (no design and fabrication time), so the project starts sooner.
- Lower capital risk for a new or short-lived process.

**Conditions for an existing flash drum**
- It must be clean and structurally sound (inspection by an expert: corrosion, pressure rating, materials compatible with the new chemicals).
- Its vapor capacity must be large enough: from its diameter D, $V_{max} = \dfrac{u_{perm}\,(\pi D^2/4)\,(3600)\,\rho_v}{MW_v}$, and the new duty must satisfy
$$
\left(\frac{V}{F}\right)F \le V_{max}
$$
  with $u_{perm} = K_{drum}\sqrt{(\rho_L - \rho_v)/\rho_v}$; the height must also give the required liquid surge and disengagement space ($h_{total}/D$ 3–5).

**If the condition is not met** (Wankat's list)
1. Add chevrons or a (better) demister to raise $V_{max}$ / reduce entrainment.
2. Reduce the feed rate to the drum.
3. Reduce V/F (less vapor, richer in the volatile component).
4. Use existing drums in parallel (less feed to each).
5. Use existing drums in series.
6. Raise the operating pressure (higher vapor density, but this changes the whole flash).
7. Buy or build a different drum, or combine these options as cheaply and quickly as possible.`,
          answer: String.raw`Reuse because cheaper and faster; drum must be sound and have V_max ≥ (V/F)F; otherwise add demister/chevrons, cut feed or V/F, drums in parallel or series, raise pressure, or buy a new drum.` },
        { id: "2013-14-Q6b", label: "(b)", marks: "25",
          topic: "flash", sub: "Methanol–water flash: V/F, products, vertical drum size",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`A mixture of methanol and water in a flash drum is at 1 atm pressure. Equilibrium data at this pressure are listed as follows. (The data are in mole percentages)

| methanol vapor | 0 | 13.4 | 23.0 | 30.4 | 36.5 | 41.8 | 51.7 | 57.9 | 66.5 | 72.9 | 77.9 | 82.5 | 87.0 | 91.5 | 95.8 | 97.9 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| methanol liquid | 0 | 2 | 4 | 6 | 8 | 10 | 15 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 100 |
| T, °C | 100 | 96.4 | 93.5 | 91.2 | 89.3 | 87.7 | 84.4 | 81.7 | 78.0 | 75.3 | 73.1 | 71.2 | 69.3 | 67.6 | 66.0 | 65.0 | 54.6 |

If the feed is 30 mol% methanol and we desire a liquid product that is 20 mol% methanol, what V/F must be used? For a feed rate of 1000 lbmol/h, find product flow rates and compositions. Find the dimensions of a vertical drum. Use $h_{total}/D$ = 4.0. Assume vapors are ideal gases and the symbols have their usual meaning.

Data and formulae: specific gravity of water $\rho_w$ = 1.00; specific gravity of liquid methanol $\rho_{m,L}$ = 0.7914; $MW_w$ = 18.01, $MW_m$ = 32.04.

Permissible velocity $u_{perm} = K_{drum}\sqrt{\dfrac{\rho_L - \rho_v}{\rho_v}}$, $K_{drum} = \exp[A + B(\ln F_{lv}) + C(\ln F_{lv})^2 + D(\ln F_{lv})^3 + E(\ln F_{lv})^4]$, where $F_{lv} = \dfrac{W_L}{W_V}\sqrt{\dfrac{\rho_V}{\rho_L}}$; $W_L$ and $W_V$ are liquid and vapor flow rates in lb/hr, $K_{drum}$ is in ft/sec. A = −1.877478097; B = −0.8145804597; C = −0.1879744085; D = −0.0145228667; E = −0.0010148518.`,
          solution: String.raw`This is Wankat Problems 2.D1c and 2.D1e (slides' problem D1c). The last table entry, 54.6 °C for pure methanol, is a misprint for 64.5 °C (Wankat Table 2-7); it is not needed here.

**Given:** z = 0.30, x = 0.20, p = 1 atm, F = 1000 lbmol/h, $h_{total}/D$ = 4.

**Assumptions:** equilibrium stage, ideal gas, ideal liquid mixing (additive volumes), drum sized at the drum conditions.

### Flash
1. Equilibrium at x = 0.20: y = 0.579, $T_{drum}$ = 81.7 °C (table).
2. Operating line through $y = x = z$: $y = -\dfrac{L}{V}x + \dfrac{F}{V}z$. Lever rule:
$$
\frac{V}{F} = \frac{z - x}{y - x} = \frac{0.30 - 0.20}{0.579 - 0.20} = 0.264
$$
3. V = 263.9 lbmol/h (y = 0.579 methanol), L = 736.1 lbmol/h (x = 0.20). (Wankat's listed answer, read graphically, is V/F ≈ 0.25.)

![y–x diagram: flash operating line of slope −2.79 from z = 0.30 to the equilibrium point (0.20, 0.579)](fig/2013-14-Q6b-sol.svg)

### Drum size (Wankat Example 2-4 procedure)
4. Molecular weights: $MW_L = 0.2(32.04) + 0.8(18.01) = 20.82$; $MW_V = 0.579(32.04) + 0.421(18.01) = 26.13$.
5. Liquid density (additive volumes): $\bar{V}_L = 0.2\dfrac{32.04}{0.7914} + 0.8\dfrac{18.01}{1.00} = 22.51$ mL/mol, $\rho_L = 20.82/22.51 = 0.925$ g/mL (57.7 lb/ft³).
6. Vapor density at 81.7 °C = 354.85 K: $\rho_v = \dfrac{pMW_V}{RT} = \dfrac{1(26.13)}{82.0575(354.85)} = 8.97\times10^{-4}$ g/mL (0.0560 lb/ft³).
7. Mass flows: $W_L = 736.1(20.82) = 15{,}324$ lb/h, $W_V = 263.9(26.13) = 6{,}895$ lb/h.
$$
F_{lv} = \frac{15{,}324}{6{,}895}\sqrt{\frac{8.97\times10^{-4}}{0.925}} = 0.0692
$$
8. $\ln F_{lv} = -2.671$; $K_{drum} = \exp[-1.8775 + 2.1757 - 1.3411 + 0.2768 - 0.0516] = 0.441$ ft/s.
9. $u_{perm} = 0.441\sqrt{\dfrac{0.925 - 0.000897}{0.000897}} = 14.2$ ft/s.
10. Cross-section:
$$
A_c = \frac{V\,MW_V}{u_{perm}(3600)\rho_v} = \frac{263.9(26.13)}{14.16(3600)(0.0560)} = 2.42\ \mathrm{ft^2}
$$
    $D = \sqrt{4A_c/\pi} = 1.75$ ft → use **D = 2.0 ft** (next 6-in increment).
11. $h_{total} = 4D = 8.0$ ft.

**Result:** V/F = 0.264; V = 264 lbmol/h at 57.9 mol% methanol, L = 736 lbmol/h at 20 mol%, $T_{drum}$ = 81.7 °C; vertical drum D = 1.75 ft → 2.0 ft, height 8 ft (Wankat's answer: D = 1.705 ft, use 2 ft).

> **Exam tip:** keep $W_L/W_V$ in lb/h and $u_{perm}$ in ft/s, as the $K_{drum}$ fit requires; convert $\rho_v$ to lb/ft³ before computing $A_c$.`,
          answer: String.raw`V/F = 0.264; V = 264 lbmol/h (y = 0.579), L = 736 lbmol/h (x = 0.20); K_drum = 0.441 ft/s, u_perm = 14.2 ft/s, D = 1.75 → 2.0 ft, h = 8 ft.` } ] },
    { id: "2013-14-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q7a", label: "(a)", marks: "20",
          topic: "mccabe-thiele", sub: "CS2–CCl4 column: subcooled feed q, stages and overall efficiency",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A laboratory fractionating column is to be designed to operate at atmospheric pressure. We desire to separate a mixture containing 15.67% carbon disulphide mixed with carbon tetrachloride into an overhead product containing 91% carbon disulphide and a waste of 97.3% carbon tetrachloride (these percentages are weight percentages). A reflux ratio of 3.16 mol/mol of product is proposed. Determine the theoretical number of plates.

We wish to use a feed entering at 290K having a specific heat of 1.7 kJ/kg K and a boiling point of 336 K. The latent heat of both carbon disulphide and carbon tetrachloride is assumed to be 25,900 kJ/mol.

Find the mean molecular mass of the feed stream given that the molecular weight of CS$_2$ is 76 g/mol and of CCl$_4$ is 72.6 g/mol.

The final design had 14 plates. What was the efficiency of the column? Use the Fig. for Q. 7(a) supplied for this question and attach it with your answer sheet.

(Fig. for Q. 7(a): x–y diagram for the CS$_2$–CCl$_4$ system, mole fraction CS$_2$ in vapor against mole fraction CS$_2$ in liquor, at 1 atm.)`,
          solution: String.raw`Two misprints: the molar mass of CCl$_4$ is 153.8 g/mol (Çengel Table A-1: 153.82), not 72.6; and the latent heat is 25,900 kJ/kmol, not kJ/mol. Equilibrium points were read from the supplied Fig. for Q. 7(a) (e.g. x = 0.2 → y = 0.42, 0.4 → 0.64, 0.6 → 0.79, 0.8 → 0.90).

**Given:** feed 15.67 wt% CS$_2$, distillate 91 wt% CS$_2$, bottoms 2.7 wt% CS$_2$; R = L/D = 3.16; feed at 290 K, boiling point 336 K, $c_p$ = 1.7 kJ/kg·K, λ = 25,900 kJ/kmol; 1 atm.

**Find:** mean feed molar mass, q, number of theoretical plates, overall efficiency with 14 real plates.

**Assumptions:** CMO (equal molar latent heats, as stated); total condenser; partial reboiler (still) counted as one equilibrium stage; saturated reflux.

1. Mole fractions (M = 76 and 153.82):
$$
x_F = \frac{15.67/76}{15.67/76 + 84.33/153.82} = 0.273, \quad x_D = \frac{91/76}{91/76 + 9/153.82} = 0.953, \quad x_W = \frac{2.7/76}{2.7/76 + 97.3/153.82} = 0.053
$$
2. Mean molar mass of feed: $M_F = 0.273(76) + 0.727(153.82) = 132.6$ kg/kmol. (With the printed 72.6 one would get 73.5 kg/kmol and $x_F$ = 0.151, which is physically wrong.)
3. Thermal condition: molar heat capacity $= 1.7(132.6) = 225.3$ kJ/kmol·K;
$$
q = \frac{H - h_F}{H - h} = 1 + \frac{c_p(T_b - T_F)}{\lambda} = 1 + \frac{225.3(336 - 290)}{25{,}900} = 1.40
$$
   Feed line: $y = \dfrac{q}{q-1}x - \dfrac{x_F}{q-1} = 3.50x - 0.683$.
4. Top operating line: $y = \dfrac{R}{R+1}x + \dfrac{x_D}{R+1} = 0.760x + 0.229$.
5. Intersection with the feed line: x = 0.333, y = 0.482. Bottom line from $(x_W, x_W) = (0.053, 0.053)$ through it: slope 1.533, $y = 1.533x - 0.0283$ (per 100 kmol/h feed: D = 24.45, B = 75.55, $\bar{L}/\bar{V}$ = 1.533 ✓).
6. Step off from $x_D$ (equilibrium read from the figure):

| stage | y | x | line for next y |
|---|---|---|---|
| 1 | 0.9534 | 0.9110 | top |
| 2 | 0.9212 | 0.8441 | top |
| 3 | 0.8704 | 0.7517 | top |
| 4 | 0.8002 | 0.6234 | top |
| 5 | 0.7028 | 0.4745 | top |
| 6 | 0.5896 | 0.3438 | top |
| 7 (feed) | 0.4904 | 0.2557 | bottom |
| 8 | 0.3637 | 0.1665 | bottom |
| 9 | 0.2270 | 0.0870 | bottom |
| 10 | 0.1051 | 0.0287 | — |

   Fraction of stage 10 $= (0.0870 - 0.0532)/(0.0870 - 0.0287) = 0.58$.

![McCabe–Thiele diagram for CS2–CCl4: 9.58 equilibrium stages, feed on stage 7](fig/2013-14-Q7a-sol.svg)

7. Theoretical stages = 9.58 including the still → **8.6 theoretical plates** (9.58 − 1), feed on the 7th stage from the top.
8. Overall efficiency with 14 actual plates:
$$
E_o = \frac{N_{theoretical\ plates}}{N_{actual}} = \frac{8.58}{14} = 0.61
$$
   (If the still is not treated as a stage, $E_o$ = 9.58/14 = 0.68.)

**Result:** $M_F$ ≈ 132.6 kg/kmol, q = 1.40; about 8.6 theoretical plates plus the still (9.6 stages), feed on stage 7; overall efficiency ≈ 61%.

> **Exam tip:** a cold liquid feed has q > 1: $q = 1 + c_{p,L}(T_b - T_F)/\lambda$ with $c_p$ on a molar basis, which is why the mean molar mass is asked for.`,
          answer: String.raw`x_F = 0.273, x_D = 0.953, x_W = 0.053; M_F = 132.6 kg/kmol; q = 1.40; 9.58 stages (≈ 8.6 plates + still), feed stage 7; E_o ≈ 8.6/14 = 61%.` },
        { id: "2013-14-Q7b", label: "(b)", marks: "15",
          topic: "column-design", sub: "Flow regimes and operating limits in a tray column",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`With appropriate diagrams describe the regimes that can be found in a typical distillation column.`,
          solution: String.raw`> The four tray regimes are described in Wankat ch. 3 (section 3.4); the slides cover only the operating limits (flooding, weeping, entrainment).

![Flow regimes on a tray (bubble, foam, froth, spray) and the stable operating window bounded by flooding, entrainment, downcomer flooding and weeping](fig/2013-14-Q7b-sol.svg)

### Flow regimes on a tray (increasing vapor rate)
1. **Bubble regime:** liquid is an almost stagnant pool with distinct bubbles rising through it; poor mixing and contact, low efficiency; not used commercially.
2. **Foam (cellular foam) regime:** liquid continuous with many bubbles and a distinct foam layer (like the head on beer); large interfacial area, can be efficient, but a stable foam can fill the tray spacing → excessive entrainment and flooding (antifoam may be needed); vapor rates usually too low for industry.
3. **Froth regime:** liquid continuous with large pulsating vapor voids, violent boiling surface and splashing; liquid well mixed; good efficiency and good capacity, so this is the **normal design regime**.
4. **Spray regime:** vapor continuous, liquid as dispersed droplets; vapor well mixed but liquid poorly mixed, low efficiency; a small increase in vapor rate from froth to spray can cut efficiency from about 65% to 40%.

### Operating limits (stable operating window)
- **Entrainment (jet) flooding** at high vapor rate: liquid carried to the tray above.
- **Downcomer flooding** at high liquid rate: backup in the downcomer reaches the tray above.
- **Weeping / dumping** at low vapor rate: liquid drains through the holes.
- **Coning / excessive entrainment at low liquid rate:** vapor jets through a thin liquid layer.
- Inside these limits the tray operates stably (froth regime), with design at about 75–85% of flooding.

> **Exam tip:** give both pictures: the regime ladder against vapor velocity, and the operating window bounded by flooding, weeping and downcomer backup.`,
          answer: String.raw`Bubble, foam, froth (normal design) and spray regimes with rising vapor rate; stable operation lies inside limits set by entrainment and downcomer flooding, weeping/dumping and coning.` } ] },
    { id: "2013-14-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q8a", label: "(a)", marks: "25",
          topic: "column-design", sub: "Significance of weir, downcomer, lever-arm rule, pressure heads, minimum reflux",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Describe the significance of the following when dealing with distillation columns. Use appropriate diagrams to clarify your statement: weir, downcomer, lever arm rule, pressure heads on sieve trays, minimum reflux ratio.`,
          solution: String.raw`### 1. Weir
- The outlet weir (straight, 2–4 in high; adjustable or notched types exist) sets the **liquid depth on the tray**, so it controls vapor–liquid contact time, froth height and tray efficiency.
- It seals the downcomer of the tray above (keeps vapor from bypassing up the downcomer).
- Weir length (typically 0.6–0.75 of the diameter) fixes the crest height $h_{crest}$ (Francis formula) and therefore the liquid capacity of the tray; too low a weir gives a dry tray, too high a weir raises pressure drop and weeping.

### 2. Downcomer
- Carries liquid from one tray to the next and gives time for **vapor to disengage** from the froth, so only clear liquid goes down.
- Designs: segmental (straight, most common, cheap, hard to install wrongly), sloped segmental (better disengagement, keeps active area below), circular pipe (small columns), envelope (very low liquid rates).
- Sized for residence time and backup: if liquid cannot flow down fast enough the column suffers **downcomer flooding**.

### 3. Lever-arm rule
- For a mixture split into two phases (flash, mixing point, tie line), the amounts are inversely proportional to the distances from the mixture point:
$$
\frac{L}{V} = \frac{y - z}{z - x}, \qquad \frac{V}{F} = \frac{z - x}{y - x}
$$
- Used on T-x-y, H-x (Ponchon–Savarit, flash on the enthalpy chart) and triangular extraction diagrams (mixing point M, $E_N$, $R_1$, difference point) to get flow rates graphically; it is the graphical form of the mass balance.

### 4. Pressure heads on sieve trays
![Pressure heads on a sieve tray and downcomer](fig/2012-13-Q4e-sol.svg)

- $h_{dc} = h_{\Delta p,dry} + h_{weir} + h_{crest} + h_{grad} + h_{du}$: the downcomer backup must balance the dry-tray drop, the liquid on the tray and the under-downcomer loss.
- Significance: tray pressure drop sets reboiler pressure and temperature; the dry-hole drop must be big enough to prevent weeping; $h_{dc}$ (aerated) must stay below about half the tray spacing to avoid downcomer flooding.

### 5. Minimum reflux ratio
![McCabe–Thiele sketches including the minimum-reflux pinch](fig/2012-13-Q8c-sol.svg)

- The reflux at which the operating lines touch the equilibrium curve (pinch, usually at the feed line, or a tangent pinch); infinite stages are needed. $R_{min} = \dfrac{(L/V)_{min}}{1 - (L/V)_{min}}$.
- Significance: lower limit of reflux; operating reflux is set as a multiple (optimum about 1.05–1.25 $R_{min}$), trading stages (capital) against reboiler/condenser duty (operating cost); below $R_{min}$ the specification cannot be met.`,
          answer: String.raw`Weir sets liquid depth and seals downcomer; downcomer carries liquid and disengages vapor (limits by backup flooding); lever rule gives phase amounts from diagram distances; pressure heads fix Δp and downcomer backup; Rmin is the pinch limit (infinite stages) used to set operating reflux.` },
        { id: "2013-14-Q8b", label: "(b)", marks: "10",
          topic: "advanced-distillation", sub: "Open steam distillation: why, schematic, bottom operating line",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`What do you understand by open steam distillation? Why would you use open steam in a distillation column? Show the schematic representation of such a distillation column. What is the equation for the bottom operating line for such a column?`,
          solution: String.raw`**Open (direct) steam distillation:** live steam is injected directly into the bottom of the column instead of boiling the bottoms in a reboiler. Used when **water is the heavy component** (e.g. methanol–water, ethanol–water), so the steam adds nothing foreign to the bottoms.

**Why use it**
- Saves the reboiler (capital) and its heat-transfer surface; useful for fouling or corrosive bottoms where a reboiler would scale.
- Steam is a cheap direct heat source with no temperature-difference limitation.
- Penalty: the condensed steam dilutes the bottoms, so B is larger and more solute is lost for the same $x_B$; slightly more stages are needed.

![Column with open steam: saturated steam S enters below the bottom tray, no reboiler](fig/2013-14-Q8b-sol.svg)

**Bottom operating line**

Assumptions: CMO; saturated steam of pure water ($y_S = 0$); so $\bar{V} = S$ and $\bar{L} = B$ in the stripping section.

Balance around the bottom of the column (below stage k):
$$
\bar{V}y_{k+1} + Bx_B = \bar{L}x_k + S(0)
$$
With $\bar{V} = S$ and $\bar{L} = B$:
$$
y_{k+1} = \frac{\bar{L}}{\bar{V}}x_k - \frac{B}{S}x_B = \frac{B}{S}\left(x_k - x_B\right)
$$
The line has slope $\bar{L}/\bar{V} = B/S$ and cuts the x-axis at $(x_B, 0)$, **not** the 45° line; the stepping is continued until it passes $x_B$ on the x-axis. External balances: $F + S = D + B$, $Fz = Dx_D + Bx_B$.

> **Exam tip:** the key difference from a reboiler column is the end point (x_B, 0) of the bottom line and the extra stream S in the overall balance.`,
          answer: String.raw`Live steam replaces the reboiler (water is the heavy key); with V̄ = S, L̄ = B: y = (B/S)(x − x_B), a line through (x_B, 0).` } ] }
  ]
});
