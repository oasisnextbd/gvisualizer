QB.paper({
  year: "2018-19", date: "19/10/2019", marks: 210,
  rules: String.raw`Section A: four questions, answer any three. Section B: four questions, answer any three. Separate scripts for each section. Assume reasonably any additional data.`,
  questions: [
    { id: "2018-19-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q1a", label: "(a)", marks: "5+4",
          topic: "absorption", sub: "Reversing mass transfer in a gas plant; what makes a column an absorber or stripper",
          type: "theory", syllabus: "in", repeats: ["2016-17-Q6c", "2017-18-Q1a", "2021-22-Q2b", "2022-23-Q2a"],
          text: String.raw`How can the direction of mass transfer be reversed in a gas/liquid system as it is in a complete gas plant? What controls whether a column is a stripper or an absorber?`,
          solution: String.raw`![Gas treatment plant: absorber at low T and high p, heated rich solvent stripped at high T and low p, lean solvent recycled](fig/2018-19-Q1a-sol.svg)

### Reversing the direction (5)
Equilibrium for a dilute solute is $y^* = (H/p)\,x = m x$, with Henry's constant $H$ rising steeply with temperature (CO2 in water: 876 atm at 5 °C, 3410 atm at 60 °C, Wankat Table 12-1).
- **Absorber:** low temperature and high pressure give a small $m$; the gas has $y > y^*$, so solute moves gas → liquid.
- **Stripper:** the rich solvent is **heated** (heat exchanger) and/or its **pressure is lowered**, so $m = H/p$ becomes large; now $y < y^*$ and solute moves liquid → gas (into steam or a stripping gas).
- The lean solvent is cooled and returned to the absorber. Changing T and p moves the equilibrium line from below the operating line (absorber) to above it (stripper). With chemical solvents (MEA) heating also reverses the reaction.

### What makes it an absorber or a stripper (4)
- The **driving force** $y - y^*$: if the gas is richer than equilibrium with the liquid ($y > mx$) the column absorbs; if leaner ($y < mx$) it strips.
- On the McCabe–Thiele diagram: **operating line above the equilibrium line → absorber; below → stripper.**
- This is set by the operating conditions (T, p, hence $m$), the inlet compositions, and the flow ratio: absorption needs $L/(mV)$ large (absorption factor $A > 1$ for good recovery), stripping needs $mV/L$ large (stripping factor $S > 1$).`,
          answer: String.raw`Heat and/or depressurize the rich solvent so m = H/p rises and y < y*, then cool it back for absorption. A column absorbs when y > y* (op line above eq line) and strips when y < y* (op line below), set by T, p and L/V.` },
        { id: "2018-19-Q1b", label: "(b)", marks: "4+5",
          topic: "absorption", sub: "Assumptions for the absorption operating line; justification of Henry's law",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`State all the assumptions required for the derivation of operating line for absorption. Justify the representation of absorption equilibrium data by Henry's law constant.`,
          solution: String.raw`### Assumptions for a straight operating line (4)
The McCabe–Thiele method needs the energy balance to be automatically satisfied and $L/V$ constant:
1. **Heat of absorption negligible.**
2. **Isothermal** operation (and isobaric).
3. **Carrier gas insoluble** in the solvent.
4. **Solvent nonvolatile.**

For a **dilute** system (solute well below about 1 %) total flows $L$ and $V$ are then constant and $y_{j+1} = (L/V)x_j + (y_1 - (L/V)x_0)$ is straight in mole fractions. For a **concentrated** system use solute-free flows $L$ (pure solvent) and $G$ (pure carrier) with mole ratios $X = x/(1-x)$, $Y = y/(1-y)$: $Y_{j+1} = (L/G)X_j + (Y_1 - (L/G)X_0)$ is straight in ratios.

### Henry's law (5)
$$p_A = H x_A \;\Rightarrow\; y_A = \frac{H}{p_{tot}}x_A = m\,x_A$$
- For **sparingly soluble gases** (CO2, CO, H2S, O2 in water) the liquid is an **ideal dilute solution**: each solute molecule is surrounded by solvent, so its fugacity is proportional to its mole fraction. Experimental data are linear at low $x$.
- The three-component system (solute, carrier, solvent) at fixed T and p has $F = C - P + 2 = 3$; with T and p fixed one degree of freedom remains, so one constant ($H$ at that T) describes the equilibrium.
- $H$ depends strongly on T but only weakly on total pressure (up to several atm), so one tabulated value per temperature is enough (Wankat Table 12-1).
- It gives a **straight equilibrium line** of slope $m = H/p$, which together with a straight operating line allows the analytical **Kremser** equation and simple minimum-$L/V$ calculations.
- Limits: not valid for highly soluble gases (NH3 at high concentration), electrolytes or reacting systems; then use measured curved data.`,
          answer: String.raw`Negligible heat of absorption, isothermal and isobaric, insoluble carrier, nonvolatile solvent (plus dilute for constant L/V). Henry's law y = (H/p)x is valid for dilute, sparingly soluble gases (ideal dilute solution), is linear and T-dependent, and allows Kremser.` },
        { id: "2018-19-Q1c", label: "(c)", marks: "17",
          topic: "absorption", sub: "CO2 stripping from water with N2 at 60 °C, Kremser stages",
          type: "numerical", syllabus: "in", repeats: ["2021-22-Q2c", "practice-absorption-P7"],
          text: String.raw`We wish to design a stripping column to remove carbon dioxide from water. This is done by heating the water and passing it countercurrent to a nitrogen stream in a staged stripper. Operation is at 60 °C and 1 atm. The water contains 9.2×10$^{-6}$ mole fraction CO$_2$ and flows at 100,000 lb/hr. Nitrogen (N$_2$) enters the column as pure nitrogen and flows at 2500 ft$^3$/hr. Nitrogen is at 1 atm and 60 °C. We desire an outlet water concentration that is 2×10$^{-7}$ mole fraction CO$_2$. Ignore nitrogen solubility in water and ignore the volatility of the water. The Henry's law constant at 60 °C is 3410. Determine the number of stages needed using Kremser equation.`,
          solution: String.raw`This is Wankat Problem 12.D6 (slide Problem D6) without the Murphree efficiency, i.e. equilibrium stages.

**Given:** $x_0 = 9.2\times10^{-6}$ (water in, top), $x_N = 2\times10^{-7}$ (water out, bottom), $y_{N+1} = 0$ (pure N2 in), $H = 3410$ atm/mole frac, $p = 1$ atm, water 100,000 lb/h, N2 2500 ft³/h at 60 °C, 1 atm.

**Find:** $N$ (and $y_{out}$).

**Assumptions:** very dilute, so $L$ and $V$ are constant; N2 insoluble, water nonvolatile; isothermal and isobaric; linear equilibrium. All Kremser assumptions hold.

1. Molar flows. N2 as ideal gas: 359 ft³/lbmol at 0 °C, 1 atm, so at 60 °C: $359(333.15/273.15) = 437.9$ ft³/lbmol.
$$V = \frac{2500}{437.9} = 5.71\ \mathrm{lbmol/h}, \qquad L = \frac{100\,000}{18.02} = 5551\ \mathrm{lbmol/h}\ (M_{water}\ \text{from Çengel Table A-1})$$
$$\frac{L}{V} = 972$$
2. Equilibrium: $y = (H/p)x = 3410x$, so $m = 3410$.
3. External balance for the exit gas:
$$y_1 = y_{N+1} + \frac{L}{V}(x_0 - x_N) = 0 + 972(9.0\times10^{-6}) = 0.00875$$
4. Stripping factor: $S = \dfrac{mV}{L} = \dfrac{3410(5.71)}{5551} = 3.508$.
5. Kremser, liquid-phase form for stripping, $x_N^* = y_{N+1}/m = 0$:
$$N = \frac{\ln\left[\left(1-\frac{1}{S}\right)\frac{x_0 - x_N^*}{x_N - x_N^*} + \frac{1}{S}\right]}{\ln S} = \frac{\ln\left[(1-0.2851)\frac{9.2\times10^{-6}}{2\times10^{-7}} + 0.2851\right]}{\ln 3.508}$$
$$N = \frac{\ln(0.7149 \times 46 + 0.2851)}{1.2550} = \frac{\ln 33.17}{1.2550} = \frac{3.502}{1.2550} = 2.79$$
The slide gas-phase form with $E_{MV} = 1$, $N = -\ln[(1-S)\frac{y_{N+1}-y_1^*}{y_1-y_1^*}+S]/\ln S$ with $y_1^* = mx_0 = 0.03137$, gives the same 2.79.

6. Graphical check (dilute McCabe–Thiele, stepping from the top: $x_j = y_j/m$, $y_{j+1} = (L/V)(x_j - x_N)$):

| stage | y_j | x_j |
|---|---|---|
| 1 | 0.008749 | 2.566×10⁻⁶ |
| 2 | 0.002300 | 6.745×10⁻⁷ |
| 3 | 0.000461 | 1.353×10⁻⁷ < x_N |

Fraction of stage 3 (linear) = $(6.745 - 2.0)/(6.745 - 1.353) = 0.88$, about 2.9 stages. The fractional stage from a graph is approximate; Kremser's 2.79 is exact for straight lines.

![Dilute stripper McCabe–Thiele: equilibrium line y = 3410x above the operating line of slope 972; about 2.8 stages](fig/2018-19-Q1c-sol.svg)

**Result:** $y_{out} = 0.00875$; $N = 2.79$, so **3 equilibrium stages**. (With $E_{MV} = 0.40$ the slide answer is 5.07, so 6 real stages.)

**Exam tip:** for a stripper use the factor $S = mV/L$; with pure stripping gas $x_N^* = 0$ and the ratio $x_0/x_N = 46$ is all you need.`,
          answer: String.raw`V = 5.71 lbmol/h N2, L = 5551 lbmol/h, L/V = 972; yout = 0.00875; S = mV/L = 3.51; Kremser N = 2.79 → 3 equilibrium stages.` } ] },
    { id: "2018-19-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q2a", label: "(a)", marks: "17",
          topic: "leaching", sub: "Countercurrent washing of CaCO3 slurry, 5 stages, Kremser recovery of NaOH",
          type: "numerical", syllabus: "in", repeats: ["practice-leaching-P1a"],
          text: String.raw`In the production of sodium hydroxide by the lime soda process, a slurry of calcium carbonate particles in a dilute sodium hydroxide solution results. A five-stage counter current washing system is used. The underflow entrains approximately 3.75 kg liquid/kg dry calcium carbonate solids. The inlet water is pure water. If 10 kg wash water/kg dry calcium carbonate solids is used, predict the recovery of NaOH in the wash liquor.`,
          solution: String.raw`Same method as Wankat Example 14-1 (slides: 4 stages, 3 kg/kg, 8 kg/kg, recovery 0.98755), with new numbers.

**Given:** $N = 5$, underflow liquid $U = 3.75$ kg/kg dry solid, wash water $O = 10$ kg/kg dry solid, pure water $y_{N+1} = 0$.

**Find:** recovery $= 1 - x_N/x_0$.

**Assumptions:** constant underflow and overflow (no solids in the overflow, solids do not dissolve, constant densities, constant entrainment); dilute NaOH; equilibrium stages, so $y = x$ ($m = 1$). Basis 1 kg/h dry CaCO3.

1. Operating line $y_{j+1} = (U/O)x_j + (y_{N+1} - (U/O)x_N)$, slope $U/O = 0.375$; equilibrium $y = x$. Both straight, so Kremser applies with no extra assumptions.
2. Kremser (underflow form):
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - mO/U}{1-(mO/U)^{N+1}}, \qquad x_N^* = \frac{y_{N+1}}{m} = 0$$
3. $mO/U = (1)(10)/3.75 = 2.667$; $(2.667)^6 = 359.6$.
$$\frac{x_N}{x_0} = \frac{1-2.667}{1-359.6} = \frac{-1.667}{-358.6} = 0.00465$$
4. Recovery $= 1 - 0.00465 = 0.9954$.

**Result:** about **99.5 %** of the NaOH is recovered in the wash liquor (the feed concentration $x_0$ is not needed).

**Exam tip:** washing is Kremser with $m = 1$; the exponent is $N + 1 = 6$.`,
          answer: String.raw`mO/U = 10/3.75 = 2.667; xN/x0 = (1 − 2.667)/(1 − 2.667⁶) = 0.00465; NaOH recovery ≈ 99.5 %.` },
        { id: "2018-19-Q2b", label: "(b)", marks: "6+6",
          topic: "leaching", sub: "Leaching vs washing; why an effective equilibrium constant is used",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q1e", "2023-24-Q7c"],
          text: String.raw`Explain properly how leaching differs from washing. Justify adequately the use of effective equilibrium constant for leaching.`,
          solution: String.raw`### Leaching vs washing (6)
| aspect | Washing | Leaching |
|---|---|---|
| solute location | in the liquid entrained between/in the pores of an inert solid | part of the solid matrix; must dissolve and diffuse out |
| solid | inert, does not dissolve; constant solids flow | loses mass as solute dissolves; solids flow usually not constant |
| equilibrium | $y = x$ (overflow = underflow liquid concentration) | usually $y \neq x$; measured experimentally |
| rate | fast; stages close to equilibrium | slow diffusion in the solid (days for pickles, years for in-situ copper) |
| analysis | McCabe–Thiele or Kremser with constant U/O | rigorous analysis like partially miscible extraction; simple cases with modified McCabe–Thiele/Kremser |
| examples | salt from wet ocean sand, NaOH from CaCO3 slurry | coffee, tea, soybean oil, sugar, ores, pharmaceuticals |

Washing can be considered a special case of leaching in which the solid does not dissolve.

### Effective equilibrium constant (6)
The idealized leaching analysis assumes (among others) **no solvent entrained with the solid** (assumption 4) and **equilibrium stages** (assumption 7). Both are usually false:
- liquid is always entrained in the underflow, for the same reason as in washing;
- diffusion in solids is very slow, so equilibrium is seldom attained in the residence time available.

A rigorous model would need the changing flows, the entrainment and a stage efficiency for each stage, data that are hard to get. Instead an **effective equilibrium constant** $m_E$ is measured on the actual equipment (e.g. concentration in liquid / concentration in solid, g/L basis), which lumps entrainment and non-equilibrium together. If the effective equilibrium is linear, $y = m_Ex$:
- the McCabe–Thiele diagram looks the same as for ideal leaching (Wankat Fig. 14-3B), and
- the **Kremser** equation applies, e.g. $x_N/x_0 = (1 - m_EF_{solv}/F_{solid})/(1 - (m_EF_{solv}/F_{solid})^{N+1})$.

It is easy to measure and use, but it is **not a fundamental property**: it depends on flow conditions and residence times and is valid only for the conditions at which it was measured.`,
          answer: String.raw`Washing removes solute from entrained liquid (y = x, inert solid); leaching dissolves solute out of the solid (y ≠ x, varying solids, slow). mE lumps underflow entrainment and non-equilibrium stages into one measured linear constant, so McCabe–Thiele/Kremser can be used, but only at the measured conditions.` },
        { id: "2018-19-Q2c", label: "(c)", marks: "6",
          topic: "leaching", sub: "Classify processes as washing or leaching",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`State only whether the following processes are washing or leaching:

(i) Recovering oil from soybeans (Washing/leaching)

(ii) Recovery sugar from sugar cane (Washing/leaching)

(iii) Isolating salt from wet sand obtained through mining from the ocean (Washing/leaching)

(iv) Obtaining pharmaceutical products from plant roots. (Washing/leaching)`,
          solution: String.raw`| process | answer | reason (one line) |
|---|---|---|
| (i) oil from soybeans | **Leaching** | oil is inside the bean matrix; dissolved by hexane/benzene |
| (ii) sugar from sugar cane | **Leaching** | sugar is in the cane cells; extracted with water (Rotocel) |
| (iii) salt from wet ocean sand | **Washing** | salt is in the seawater entrained between sand grains; sand is inert |
| (iv) pharmaceuticals from plant roots | **Leaching** | active compounds are part of the plant tissue |`,
          answer: String.raw`(i) leaching, (ii) leaching, (iii) washing, (iv) leaching.` } ] },
    { id: "2018-19-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q3a", label: "(a)", marks: "13",
          topic: "partial-extraction", sub: "Acetic acid–water–IPE, 3 countercurrent stages: exit raffinate and entering extract",
          type: "sketch", syllabus: "in", repeats: ["practice-partial-extraction-P3a"],
          text: String.raw`Assume that you are extracting acetic acid from water with isopropylether in a countercurrent cascade. Equilibrium data are given as right triangular diagram. The column has three equilibrium stages. The entering feed rate is 500 kg/h. The feed is 40 wt% acetic acid and 60 wt% water. The exiting extract stream has a flow rate of 1250 kg/h and is 20 wt% acetic acid. The entering extract stream (which is not pure isopropyl ether) contains no water. With the help of clear hand drawing and proper labeling, demonstrate the determination of:

(i) exit raffinate concentration

(ii) required entering extract stream concentration`,
          solution: String.raw`This is Wankat Problem 13.D28 (slide Problem D9) at half the flow rates (500 and 1250 instead of 1000 and 2500), so all compositions are the same and the flows are halved. The diagram is not attached to the paper; use the Treybal data at 20 °C in the slides (Wankat Table 13-5).

**Given:** $F = R_4 = 500$ kg/h, $x_{A,F} = 0.40$, $x_{D,F} = 0.60$; $E_N = E_3 = 1250$ kg/h, $y_{A,3} = 0.20$; $E_0$ has $y_{D,0} = 0$; $N = 3$.

**Find:** $x_{A,1}$ (exit raffinate) and $y_{A,0}$, $y_{S,0}$ (entering extract).

**Assumptions:** equilibrium stages, isothermal (20 °C), tie lines interpolated linearly between the tabulated pairs (or by the conjugate line).

1. **Locate $E_3$:** on the saturated extract curve at $y_A = 0.20$: interpolating the IPE-layer data, $y_D = 0.064$, so $E_3 = (y_D, y_A) = (0.064, 0.200)$.
2. **Difference point** (both ends known at the feed end):
$$\Delta = E_N - R_{N+1} = 1250 - 500 = 750\ \mathrm{kg/h}$$
$$x_{A,\Delta} = \frac{E_Ny_{A,N} - R_{N+1}x_{A,N+1}}{\Delta} = \frac{1250(0.20) - 500(0.40)}{750} = 0.0667$$
$$x_{D,\Delta} = \frac{1250(0.064) - 500(0.60)}{750} = -0.293$$
$\Delta$ lies on line $FE_3$ extended to the left (outside the triangle, since $E_j > R_{j+1}$).
3. **Step off three stages from the extract end** (stage 3 at the feed end):
   - Stage 3: tie line from $E_3$ gives $R_3$: $x_A = 0.349$, $x_D = 0.608$.
   - Line $\Delta R_3$ cuts the extract curve at $E_2$: $y_A = 0.177$. Tie line gives $R_2$: $x_A = 0.324$.
   - Line $\Delta R_2$ gives $E_1$: $y_A = 0.162$. Tie line gives **$R_1$: $x_A = 0.308$, $x_D = 0.653$**.
4. **Entering extract $E_0$:** $\Delta = E_0 - R_1$, so $E_0$ is on line $\Delta R_1$; with no water it lies on the A–S edge ($x_D = 0$): **$y_{A,0} = 0.141$, $y_{S,0} = 0.859$**, $y_{D,0} = 0$.
5. **Flows** (for completeness): $E_0 = R_1 + 750$ and $E_0(0.141) + 500(0.40) = R_1(0.308) + 1250(0.20)$ give $R_1 = 336$ kg/h, $E_0 = 1086$ kg/h.

![Right-triangle diagram: E3, Δ on line FE3 extended, tie lines E3R3, E2R2, E1R1 and operating lines from Δ; E0 on the A–S edge](fig/2018-19-Q3a-sol.svg)

| stream | x_A or y_A | x_D or y_D |
|---|---|---|
| E3 (exit extract) | 0.200 | 0.064 |
| R3 | 0.349 | 0.608 |
| E2 / R2 | 0.177 / 0.324 | 0.057 / 0.636 |
| E1 / R1 | 0.162 / 0.308 | 0.053 / 0.653 |
| E0 (entering extract) | 0.141 | 0 |

**Result:** (i) exit raffinate about **31 wt % acetic acid** (65 % water); (ii) entering extract about **14 wt % acetic acid, 86 % IPE, no water**.

Note: the book's hand-graph answer is 27.5 % acid in $R_1$, 13 % acid in $E_0$ ($R_1$ = 327.5, $E_0$ = 1077.5 kg/h at these flows). Three tie-line steps in the acid-rich region amplify graph-reading errors; careful interpolation of the Treybal table gives the values above. Either set is acceptable if the construction is right.

**Exam tip:** here $E_N$ and $F$ are both known, so $\Delta$ is found first from the coordinates; then step from $E_N$, not from $R_1$.`,
          answer: String.raw`Δ = EN − F = 750 kg/h at (xD, xA) = (−0.293, 0.067). Three tie-line steps from E3 (yA 0.20): R1 ≈ 31 % acid (book graph 27.5 %); E0 on the A–S edge ≈ 14 % acid, 86 % IPE (book 13 %); R1 ≈ 336, E0 ≈ 1086 kg/h.` },
        { id: "2018-19-Q3b", label: "(b)", marks: "6",
          topic: "partial-extraction", sub: "Methods of locating the difference point Δ",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write a short note on the methods of locating Δ, difference point for stage-by-stage calculation in triangular diagram.`,
          solution: String.raw`For a countercurrent cascade ($E_0 = S$ enters stage 1, $F = R_{N+1}$ enters stage N), the balance $E_0 + R_{N+1} = R_1 + E_N$ rearranges to
$$\Delta = E_0 - R_1 = E_1 - R_2 = \cdots = E_j - R_{j+1} = \cdots = E_N - R_{N+1}$$
The difference in flow of passing streams is constant, so every operating line $E_jR_{j+1}$ passes through the single point $\Delta$. Three ways to locate it:

1. **Graphical construction:** $\Delta$, $E_0$, $R_1$ are collinear and $\Delta$, $E_N$, $R_{N+1}$ are collinear. Draw lines $E_0R_1$ and $E_NR_{N+1}$ and extend them; their intersection is $\Delta$. For a design problem $R_{N+1}$, $E_0$, $R_1$ are plotted directly and $E_N$ comes from the mixing point ($E_N$ on line $R_1M$).
2. **Coordinates:**
$$x_{A,\Delta} = \frac{E_0y_{A,0} - R_1x_{A,1}}{E_0 - R_1} = \frac{E_Ny_{A,N}-R_{N+1}x_{A,N+1}}{E_N - R_{N+1}}, \qquad x_{D,\Delta} = \frac{E_0y_{D,0} - R_1x_{D,1}}{E_0 - R_1}$$
Useful when the two lines are nearly parallel and the graphical intersection is inaccurate: draw one line and use one coordinate.
3. **Lever-arm rule:** for passing streams $\dfrac{E_j}{\Delta} = \dfrac{\overline{\Delta R_{j+1}}}{\overline{E_jR_{j+1}}}$; if $R_1$ and $E_0$ are known, $\Delta$ is on line $R_1E_0$ at the distance this gives.

Position: if $E_0 > R_1$ ($\Delta > 0$), $\Delta$ is on the **left** of the diagram (beyond the solvent side); if $R_1 > E_0$ it is on the **right**; if $R_1 = E_0$ it is at infinity and the operating lines are parallel. Then stages are stepped alternately along tie lines ($R_j \leftrightarrow E_j$) and operating lines through $\Delta$ ($E_j \to R_{j+1}$).`,
          answer: String.raw`Δ = Ej − Rj+1 is constant; locate it by (1) intersecting lines E0R1 and ENRN+1, (2) its coordinates xA,Δ, xD,Δ from the balances, or (3) the lever-arm rule on a known line. Left side if E0 > R1, right side if R1 > E0, infinity if equal.` },
        { id: "2018-19-Q3c", label: "(c)", marks: "16",
          topic: "immiscible-extraction", sub: "Benzoic acid from water into pure benzene, 100 mol/h feed, 10 mol/h solvent",
          type: "numerical", syllabus: "in", repeats: ["2015-16-Q5b", "practice-immiscible-extraction-P6a"],
          text: String.raw`A water solution containing 0.005 mole fraction benzoic acid is to be extracted using pure benzene as the solvent. If the feed rate is 100 moles/hr and the solvent rate is 10 moles/hr, find the number of equilibrium stages required to reduce the water concentration to 0.0001 mole fraction benzoic acid. Operation is isothermal at 6 °C, where equilibrium data can be represented as

Mole fraction of benzoic acid in water = 0.0446 × (mole fraction of benzoic acid in benzene).`,
          solution: String.raw`**Given:** $F = R = 100$ mol/h, $x_0 = 0.005$; $S = E = 10$ mol/h pure benzene, $y_{N+1} = 0$; $x_N = 0.0001$; $x = 0.0446y \Rightarrow y = 22.42x$.

**Find:** $N$.

**Assumptions:** water and benzene immiscible; isothermal; equilibrium stages. The extract leaves at about 5 mol % acid, so total flows are not quite constant: solve exactly with **mole ratios** (McCabe–Thiele) and check with **Kremser** (dilute, total flows).

### Method 1: McCabe–Thiele in mole ratios (exact for immiscible solvents)
1. Solute-free flows: water $R' = 100(0.995) = 99.5$ mol/h, benzene $E' = 10$ mol/h; $R'/E' = 9.95$.
2. $X_0 = 0.005/0.995 = 0.005025$, $X_N = 0.0001/0.9999 = 0.000100$, $Y_{N+1} = 0$.
3. Mass balance: $Y_1 = (R'/E')(X_0 - X_N) = 9.95(0.004925) = 0.04900$ ($y_1 = 0.0467$).
4. Operating line: $Y_{j+1} = 9.95X_j + Y_1 - 9.95X_0$, through $(X_N, 0)$ and $(X_0, Y_1)$.
5. Equilibrium: $y = 22.42x$ converted point by point ($x = X/(1+X)$, $Y = y/(1-y)$).
6. Step from the feed end (stage 1): $X_j$ in equilibrium with $Y_j$, then $Y_{j+1}$ from the operating line:

| stage | Y_j (extract) | X_j (raffinate) |
|---|---|---|
| 1 | 0.04900 | 0.002088 |
| 2 | 0.01978 | 0.000866 |
| 3 | 0.00762 | 0.000337 |
| 4 | 0.00236 | 0.000105 |
| 5 | 0.00005 | 0.000002 < X_N |

Fraction of stage 5 $= (0.000105 - 0.000100)/(0.000105 - 0.000002) = 0.05$, so $N = 4.05$.

![McCabe–Thiele in mole ratios for benzoic acid extraction into benzene: about 4.05 stages](fig/2018-19-Q3c-sol.svg)

### Method 2: Kremser (dilute approximation)
$m = 22.42$, $mE/R = 22.42(10)/100 = 2.242$; $y_1 = (R/E)(x_0 - x_N) = 0.049$; $x_N^* = y_{N+1}/m = 0$:
$$N = \frac{\ln\left[\left(1-\frac{R}{mE}\right)\frac{x_0 - x_N^*}{x_N-x_N^*}+\frac{R}{mE}\right]}{\ln(mE/R)} = \frac{\ln[(1-0.446)(50)+0.446]}{\ln 2.242} = \frac{\ln 28.15}{0.8074} = 4.13$$

**Result:** about **4.1 equilibrium stages, so use 5** (ratio method 4.05, Kremser 4.13).

**Exam tip:** check whether the "dilute" assumption holds at the extract end; here $y_1 \approx 0.05$, so the mole-ratio method is safer, but both round to 5 stages.`,
          answer: String.raw`y = 22.4x; Y1 = 0.049; McCabe–Thiele in mole ratios 4.05 stages, Kremser (mE/R = 2.24) 4.13 stages → 5 equilibrium stages.` } ] },
    { id: "2018-19-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q4a", label: "(a)", marks: "4+4",
          topic: "immiscible-extraction", sub: "Extractor selection for suspended solids and corrosive material",
          type: "theory", syllabus: "partial", repeats: ["2016-17-Q7a", "2021-22-Q3a"],
          text: String.raw`Select and justify appropriate type(s) of extractor when it is required to handle:

(i) liquids containing suspended solids

(ii) Corrosive material`,
          solution: String.raw`> The slides show the extractor types and the stage-number heuristics; the feature list below is Wankat Table 13-1.

### (i) Suspended solids: reciprocating-plate (Karr) column
- Large open-area perforated plates move up and down; there are no small holes, no packing and no stagnant corners where solids settle or plug.
- Wankat Table 13-1: Karr columns "handle liquids containing suspended solids" and mixtures with emulsifying tendencies, with high throughput, low HETP and simple construction.
- Mixer-settlers also tolerate solids (agitated tanks keep them suspended) when only 1–2 stages are needed. Avoid packed and sieve-plate columns, which foul and plug.

### (ii) Corrosive material: unagitated columns (spray, packed or plate)
- No moving parts, seals or shafts to corrode or leak; the shell and internals can be made of corrosion-resistant materials (ceramic or plastic packing, lined shells) cheaply.
- Wankat Table 13-1: unagitated columns are simple, low in capital and maintenance cost and "handle corrosive material" (penalty: relatively low efficiency, so more height). Membrane extractors may also be considered if the membrane is chemically compatible.`,
          answer: String.raw`(i) Reciprocating-plate (Karr) column (or mixer-settlers for few stages): open moving plates do not plug with solids. (ii) Unagitated spray/packed/plate columns: no moving parts, easy to build from corrosion-resistant materials.` },
        { id: "2018-19-Q4b", label: "(b)", marks: "6+5+5+5+6",
          topic: "column-design", sub: "Uflood, notched weirs, feeds into downcomers, tray ranking, column areas",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`In the context of staged distillation column design:

(i) The basic design method for determining column diameter determines $U_{flood}$. Is this a vapor or a liquid velocity? How is the velocity of the other phase (liquid or vapor) included in the design procedure? (6)

(ii) State and explain the reason why the notched weirs have better turndown characteristics than straight weirs. (5)

(iii) Intermediate feeds should not be introduced into a downcomer. Explain why not. (5)

(iv) Describe rank sieve, valve and bubble cap trays on the basis of efficiency and turndown. (5)

(v) Several different column areas are used in column design. Define and contrast: net area, active area and hole area. (6)`,
          solution: String.raw`> Parts (i) and (v) use Wankat ch. 10 (Fair's flooding method); the slides cover the diameter steps, weirs, inlets and tray comparison.

### (i) $U_{flood}$
It is a **vapour velocity**: the superficial vapour velocity, based on the **net area**, at which entrainment flooding starts:
$$u_{flood} = C_{sb,f}\left(\frac{\sigma}{20}\right)^{0.2}\sqrt{\frac{\rho_L-\rho_V}{\rho_V}}$$
The liquid enters through:
- the **flow parameter** $F_{lv} = \dfrac{W_L}{W_V}\sqrt{\dfrac{\rho_V}{\rho_L}}$, which sets the capacity factor $C_{sb,f}$ (Fair's chart; more liquid → lower $C_{sb,f}$ → lower flooding velocity);
- the liquid density and surface tension in the formula;
- the **downcomer area**: the net area is $A_{net} = A_T - A_d$, and $A_d$ is sized from the liquid rate (residence time, downcomer backup), so the total area is $A_T = A_{net}/\eta$.
Design: $u_{op}$ = 0.65–0.90 (typically 0.75) $u_{flood}$, then $D$ from $V$.

### (ii) Notched weirs and turndown
On a straight weir the liquid crest is $h_{ow} \propto (Q_L/L_w)^{2/3}$. At low liquid rates the crest over the long weir is only a few millimetres; small out-of-levelness then makes liquid flow over part of the weir only, giving maldistribution, dry areas and weeping, so the tray cannot be turned down far. A notched (picket-fence/V-notch) weir confines the flow to the notches: the crest height in each notch is larger and changes more strongly with flow (V-notch $Q \propto h^{2.5}$), so the liquid level and distribution stay controlled over a wide range of liquid rates. Notched weirs cost little more than straight ones and are especially good at low or variable liquid rates (adjustable weirs only look like a fix and cause weeping or dry trays if maladjusted).

### (iii) No feeds into a downcomer
- The downcomer's job is to let vapour disengage and pass clear liquid down; its capacity is set by that.
- An intermediate feed often contains vapour or flashes as it enters (hotter or two-phase feed, pressure drop through the nozzle). Vapour released in the downcomer reduces its liquid capacity and can **choke it: downcomer flooding**, and froth can be carried down to the tray below.
- The extra liquid load may exceed the downcomer design; the feed also bypasses contact on the feed tray, so it is not mixed with the tray liquid where the McCabe–Thiele analysis assumes it enters.
- Feeds are introduced onto the tray (with baffles or a distributor for vapour-bearing feeds) or into a feed gallery.

### (iv) Ranking
| | efficiency at design | turndown |
|---|---|---|
| valve | ≈ sieve, highest or equal | best (valves open with vapour rate) |
| sieve | ≈ valve | poorest (weeping below about 60 % of design gas rate) |
| bubble cap | same as or lower than sieve | flexible at very low/high liquid rates, but often worse than valve |

Efficiency: valve ≥ sieve ≥ bubble cap. Turndown: valve > bubble cap > sieve. Cost: sieve 1, valve ≈ 1.2, bubble cap ≈ 4× valve.

### (v) Column areas
| area | definition | used for |
|---|---|---|
| total $A_T = \pi D^2/4$ | whole column cross-section | final diameter |
| downcomer $A_d$ | area of one downcomer (8–15 % of $A_T$) | liquid handling |
| **net** $A_{net} = A_T - A_d$ | area available for vapour flow **above** the tray (between trays) | flooding velocity and diameter: $A_{net} = Q_V/u_{op}$ |
| **active** $A_{active} \approx A_T - 2A_d$ | bubbling area of the tray deck between the inlet downcomer and the outlet weir (less calming zones) | vapour–liquid contact, tray layout, $u_a$ in efficiency and pressure drop correlations |
| **hole** $A_{hole}$ | total open area of the perforations, $\beta = A_{hole}/A_{active}$ = 0.06–0.25 | hole velocity, dry-tray pressure drop, weeping; $\beta < 0.1$ needs a flooding correction |

Ordering: $A_T > A_{net} > A_{active} > A_{hole}$.`,
          answer: String.raw`Uflood is a vapour velocity on the net area; liquid enters via the flow parameter Flv (sets Csb,f), ρL, σ and the downcomer area. Notched weirs keep a controllable crest at low liquid rates. Feeds into downcomers release vapour and choke them. Valve ≥ sieve ≥ bubble cap in efficiency; valve best, sieve worst turndown. AT > Anet (AT − Ad, vapour flow) > Aactive (bubbling deck) > Ahole (perforations).` } ] },
    { id: "2018-19-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q5a", label: "(a)", marks: "10",
          topic: "flash", sub: "Labelled schematic of a flash distillation system and working principle",
          type: "sketch", syllabus: "in", repeats: ["2011-12-Q5a", "2012-13-Q6a", "2017-18-Q5b", "2020-21-Q5c", "2023-24-Q2a"],
          text: String.raw`Draw the schematic diagram of a flash distillation system. Label the diagram and describe the working principle.`,
          solution: String.raw`![Flash system: pump, heater, throttle valve, flash drum with demister; vapour V, y from top and liquid L, x from bottom](fig/2018-19-Q5a-sol.svg)

**Working principle:** a single equilibrium-stage separation in which a liquid feed is partially vaporized by a sudden pressure drop, and the vapour and liquid are separated.
1. **Pump** raises the feed pressure so it stays liquid when heated.
2. **Heater** heats the pressurized liquid to $T_F$ (duty $Q_h$).
3. **Throttle valve:** pressure falls suddenly; the expansion is isenthalpic, so the liquid becomes superheated relative to the drum pressure and part of it **flashes** (very rapidly, hence the name), cooling the mixture to $T_{drum}$.
4. **Flash drum:** inlet distributor; vapour rises through the disengagement space and a **demister pad** that traps droplets, and leaves at the top ($V$, $y$); liquid collects in the holdup zone and leaves at the bottom ($L$, $x$).
5. The phases leave in equilibrium ($\mu_i^L = \mu_i^V$); the more volatile component concentrates in the vapour. Usually adiabatic, $Q_{flash} = 0$.

Equations: $F = V + L$, $Fz = Vy + Lx$, $Fh_F + Q_{flash} = Vh_V + Lh_L$; operating line $y = -\frac{L}{V}x + \frac{F}{V}z$ (slope $-L/V$, through $y = x = z$); its intersection with the equilibrium curve gives $x$, $y$, and $T_{drum}$ comes from the T–x–y diagram. DOF = $C + 5$; 2 after the feed is fixed.`,
          answer: String.raw`Pump → heater → throttle valve (isenthalpic, flash) → drum with demister: one equilibrium stage giving vapour V, y overhead and liquid L, x at the bottom; F = V + L, Fz = Vy + Lx.` },
        { id: "2018-19-Q5b", label: "(b)", marks: "7+8",
          topic: "flash", sub: "Propane/n-pentane flash: L, V from lever rule; Tdrum and pdrum from DePriester",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`We are feeding 100 kmol/h of a 45 mole% propane and 55 mole% n-pentane feed to a flash distillation system. We measure the outlet vapor and liquid mole fractions leaving the flash drum, which is an equilibrium stage. It has been obtained that $y_{propane}$ is 0.8 and $x_{propane}$ is 0.2162.

Find: (i) L and V (7)

(ii) $T_{drum}$ and $P_{drum}$ (8)

where symbols have their usual meanings. (DePriester charts for low and high temperatures attached.)`,
          solution: String.raw`This is Wankat Problem 2.D26 ("Note: this is not trial and error").

**Given:** $F = 100$ kmol/h, $z = 0.45$ propane; $y = 0.80$, $x = 0.2162$ (propane).

**Assumptions:** the drum is one equilibrium stage; K values from the DePriester chart (hydrocarbons, ideal enough).

### (i) L and V (mass balance / lever rule)
$$F = V + L, \qquad Fz = Vy + Lx \Rightarrow V = F\frac{z - x}{y - x} = 100\frac{0.45-0.2162}{0.80-0.2162} = 40.05\ \mathrm{kmol/h}$$
$$L = F - V = 59.95\ \mathrm{kmol/h} \qquad (V/F = 0.40)$$

### (ii) $T_{drum}$ and $p_{drum}$
Binary, so both K values are fixed by the measured compositions:
$$K_{C3} = \frac{y_{C3}}{x_{C3}} = \frac{0.80}{0.2162} = 3.70, \qquad K_{C5} = \frac{y_{C5}}{x_{C5}} = \frac{0.20}{0.7838} = 0.255$$
On the DePriester chart (low-temperature chart, Wankat Fig. 2-11) a straight line through $K = 3.70$ on the propane scale and $K = 0.255$ on the n-pentane scale is unique; extend it to the two outer scales and read:
$$p_{drum} \approx 150\ \mathrm{kPa}, \qquad T_{drum} \approx 8\ ^\circ\mathrm{C}$$
Check with the McWilliams fit of the chart (Wankat Eq. 2-30, Table 2-3): at 150 kPa, $K_{C3} = 3.70$ needs $T = 8.1$ °C, where $K_{C5} = 0.255$. ✓ (Along the $K_{C3} = 3.70$ line: 101.3 kPa → $K_{C5}$ 0.18; 150 kPa → 0.255; 200 kPa → 0.32, so only 150 kPa fits.)

**Result:** $V = 40.0$ kmol/h, $L = 60.0$ kmol/h; $T_{drum} \approx 8$ °C, $p_{drum} \approx 150$ kPa (1.5 bar).

**Exam tip:** for a binary with both compositions known, the two K values define one straight line on the nomograph, so no trial and error is needed.`,
          answer: String.raw`V = 40.05, L = 59.95 kmol/h (V/F = 0.40); K(C3) = 3.70, K(nC5) = 0.255 → DePriester line gives Tdrum ≈ 8 °C, pdrum ≈ 150 kPa.` },
        { id: "2018-19-Q5c", label: "(c)", marks: "10",
          topic: "flash", sub: "Vertical flash drum sizing (hexane–octane, Kdrum = 0.4433)",
          type: "numerical", syllabus: "out", repeats: [],
          text: String.raw`A vertical flash drum is to flash a liquid feed of 1500 lbmol/h that is 40 mole% n-hexane and 60 mole% n-octane at 101.3 kPa (1 atm). We wish to produce a vapor that is 60 mole% n-hexane. Solution of the flash equations with equilibrium data gives $x_H$ = 0.19, $T_{drum}$ = 378 K and V/F = 0.51. What size flash drum is required? Note that, symbols have their usual meanings. Consider, $K_{drum}$ = 0.4433.`,
          solution: String.raw`> Not covered in the current ChE 303 slides (drum sizing is Wankat section 2.9); solved briefly as Wankat Example 2-4.

**Given:** $F = 1500$ lbmol/h, $V/F = 0.51$, $y_H = 0.60$, $x_H = 0.19$, $T = 378$ K, $p = 1$ atm, $K_{drum} = 0.4433$ ft/s.

**Data:** $M_H = 86.17$, $M_O = 114.22$; liquid densities at 20 °C: n-hexane 0.659 g/mL, n-octane 0.703 g/mL (Çengel Table A-2 gives 703 kg/m³ for octane).

**Assumptions:** ideal gas vapour; ideal liquid mixture (additive volumes).

1. Flows: $V = 0.51(1500) = 765$ lbmol/h, $L = 735$ lbmol/h.
2. Liquid: $\bar{M}_L = 0.19(86.17) + 0.81(114.22) = 108.9$; $\bar{V}_L = 0.19(86.17/0.659) + 0.81(114.22/0.703) = 156.45$ mL/mol; $\rho_L = 108.9/156.45 = 0.696$ g/mL.
3. Vapour: $\bar{M}_V = 0.6(86.17) + 0.4(114.22) = 97.39$;
$$\rho_V = \frac{p\bar{M}_V}{RT} = \frac{1(97.39)}{82.057(378)} = 3.14\times10^{-3}\ \mathrm{g/mL} = 0.196\ \mathrm{lb/ft^3}$$
4. Permissible vapour velocity:
$$u_{perm} = K_{drum}\sqrt{\frac{\rho_L-\rho_V}{\rho_V}} = 0.4433\sqrt{\frac{0.696-0.00314}{0.00314}} = 6.58\ \mathrm{ft/s}$$
5. Cross-sectional area and diameter:
$$A_c = \frac{V\bar{M}_V}{3600\,u_{perm}\rho_V} = \frac{765(97.39)}{3600(6.58)(0.196)} = 16.0\ \mathrm{ft^2}, \qquad D = \sqrt{\frac{4A_c}{\pi}} = 4.52\ \mathrm{ft}$$
(Wankat prints $D = 4.01$ ft, but $\sqrt{4(16.05)/\pi} = 4.52$ ft.)
6. Height: vertical drums use $h_{total}/D$ = 3 to 5; with 4: $h_{total} = 4(4.5) = 18$ ft.

**Result:** a vertical drum about **4.5 ft diameter × 18 ft high** (h/D range 3–5 gives 13.5–22.5 ft).`,
          answer: String.raw`ρL = 0.696 g/mL, ρV = 3.14×10⁻³ g/mL, uperm = 6.58 ft/s, Ac = 16.0 ft², D = 4.52 ft → use 4.5 ft; h ≈ 4D = 18 ft.` } ] },
    { id: "2018-19-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q6a", label: "(a)", marks: "4+3=7",
          topic: "column-design", sub: "Bubble vs froth regime on trays; difficulties in distillation",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Distinguish between bubble regime and froth regime. Also write about the difficulties in distillation.`,
          solution: String.raw`> Tray flow regimes are in Wankat section 3.2 (not separately in the slides).

| | Bubble regime | Froth regime |
|---|---|---|
| gas rate | low | high (normal commercial range) |
| appearance | liquid nearly a stagnant pool with distinct bubbles rising through it | liquid continuous with large, pulsating vapour voids; surface boils violently with splashing |
| mixing | poor liquid and vapour contact | liquid thoroughly mixed (vapour not) |
| efficiency | low; undesirable commercially | good, with reasonable vapour capacity; the usual design regime |

(Between them is the foam regime; above the froth regime is the spray regime, where vapour is continuous and efficiency drops sharply, e.g. 65 % to 40 %.)

**Difficulties in distillation:**
- **Foaming:** a stable foam can fill the tray spacing, causing excessive entrainment and flooding (antifoam needed).
- **Entrainment and flooding** at high vapour rates; **spray regime** with low efficiency just above the froth regime, so the operating window is narrow.
- **Weeping/dumping** at low vapour rates, poor turndown (especially sieve trays).
- Separation limits: low relative volatility needs many stages and high reflux; **azeotropes** cannot be crossed by ordinary distillation.
- **Energy intensive** (reboiler and condenser duties), heat-sensitive or fouling/polymerizing materials, and high columns.`,
          answer: String.raw`Bubble regime: low gas rate, stagnant pool with distinct bubbles, poor contact, low efficiency. Froth regime: high gas rate, violently boiling continuous liquid with large voids, good mixing and efficiency (normal operation). Difficulties: foaming, entrainment/flooding, spray regime, weeping, azeotropes/low α, high energy use.` },
        { id: "2018-19-Q6b", label: "(b)", marks: "6+2=8",
          topic: "column-balances", sub: "External mass, energy and equilibrium relations; derive D and B",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Write the overall external balance equations (mass balance, energy balance and equilibrium relations) for a binary distillation column with necessary diagram. From them, derive the equations to calculate the distillate and bottom product.`,
          solution: String.raw`![Column with total condenser, partial reboiler, feed F, distillate D, bottoms B and the external balance envelope](fig/2018-19-Q6b-sol.svg)

Column: total condenser (duty $Q_C$, saturated reflux $L_0$), partial reboiler ($Q_R$), feed $F$, $z$, $h_F$; products $D$, $x_D$, $h_D$ and $B$, $x_B$, $h_B$; adiabatic column.

### Balances around the whole column
- Total mass: $F = D + B$ (1)
- Light component: $Fz = Dx_D + Bx_B$ (2)
- Energy: $Fh_F + Q_C + Q_R = Dh_D + Bh_B$ (3) ($Q_C < 0$)

### Equipment balances and equilibrium relations
- Total condenser: $y_1 = x_D = x_0$; $V_1 = L_0 + D = (1 + L_0/D)D$; $V_1H_1 + Q_C = V_1h_D$, so $Q_C = -(1 + L_0/D)D(H_1 - h_D)$.
- Partial reboiler (an equilibrium stage): $\bar{L} = \bar{V} + B$, with $y_{N+1}$ in equilibrium with $x_B$: $y_{N+1} = y^*(x_B)$ (e.g. $y = \alpha x/(1 + (\alpha - 1)x)$ or the VLE data); $Q_R = Dh_D + Bh_B - Fh_F - Q_C$ from (3).
- Enthalpies from equilibrium/state: $h_D = h(x_D, T_{reflux})$, $h_B = h(x_B,$ saturated liquid$)$, $H_1 = H(y_1,$ saturated vapour$)$, $h_F = h(z, T_F)$.

### Derivation of D and B (2)
From (1), $B = F - D$. Substitute in (2):
$$Fz = Dx_D + (F - D)x_B \Rightarrow D(x_D - x_B) = F(z - x_B)$$
$$\boxed{D = F\,\frac{z - x_B}{x_D - x_B}}, \qquad \boxed{B = F - D = F\,\frac{x_D - z}{x_D - x_B}}$$
With $D$ and $B$ known, $Q_C$ follows from the reflux ratio and $Q_R$ from the overall energy balance.`,
          answer: String.raw`F = D + B, Fz = DxD + BxB, FhF + QC + QR = DhD + BhB; condenser QC = −(1 + L0/D)D(H1 − hD), reboiler y = y*(xB). Hence D = F(z − xB)/(xD − xB), B = F(xD − z)/(xD − xB).` },
        { id: "2018-19-Q6c", label: "(c)", marks: "20",
          topic: "column-balances", sub: "Ethanol–water column with direct steam injection: L/D from H–x chart",
          type: "numerical", syllabus: "in", repeats: ["2017-18-Q7a", "practice-column-balances-P3"],
          text: String.raw`A distillation column separating ethanol from water is shown in Figure for Q 6(c). Pressure of the system is 1 kg/cm$^2$. Instead of having a reboiler, steam (pure water vapor) is injected directly into the bottom of the column to provide heat. The injected steam is a saturated vapor. The feed is 30 wt% ethanol and is at 20 °C. Feed flow rate is 100 kg/min. Reflux is a saturated liquid. We desire a distillate concentration of 60 wt% ethanol and a bottom product that is 5 wt% ethanol. The steam is input at 100 kg/min flow rate. What is the external reflux ratio L/D? (Enthalpy–composition diagram for ethanol–water at 1 kg/cm$^2$ attached.)

![Column with total condenser Q_C, reflux L, distillate D, x_D; feed F, z; steam S, y_S injected at the bottom; bottoms B, x_B; Q_col = 0](fig/2018-19-Q6c.svg)`,
          solution: String.raw`Same problem as 2017-18 Q7(a) (Wankat Problem 3.D2).

**Given (mass basis):** $F = 100$ kg/min, $z = 0.30$ at 20 °C; $S = 100$ kg/min saturated steam ($y_S = 0$); $x_D = 0.60$, $x_B = 0.05$; saturated reflux; total condenser; adiabatic column; $p = 1$ kg/cm².

**Find:** $L/D$.

**Assumptions:** $Q_{col} = 0$; $y_1 = x_D$ (total condenser); bottoms is saturated liquid. Enthalpies read from the attached chart (kcal/kg, 0 °C liquid reference):

| stream | reading | kcal/kg |
|---|---|---|
| feed 30 wt %, 20 °C | 20 °C liquid isotherm | $h_F \approx 9$ |
| saturated steam (water, 99.1 °C) | dew line at x = 0 (Çengel Table A-9: 2675 kJ/kg) | $H_S \approx 639$ |
| distillate/reflux 60 wt % sat. liquid | boiling line | $h_D \approx 65$ |
| bottoms 5 wt % sat. liquid | boiling line | $h_B \approx 91$ |
| top vapour 60 wt % sat. vapour | dew line | $H_1 \approx 405$ |

1. Mass balances including the steam:
$$D + B = F + S = 200, \qquad 0.30(100) = 0.60D + 0.05B$$
$$D = 36.36\ \mathrm{kg/min}, \qquad B = 163.64\ \mathrm{kg/min}$$
2. Overall energy balance (no reboiler):
$$Q_C = Dh_D + Bh_B - Fh_F - SH_S = 2364 + 14\,891 - 900 - 63\,900 = -47\,545\ \mathrm{kcal/min}$$
3. Total condenser: $V_1(H_1 - h_D) = -Q_C$, so
$$V_1 = \frac{47\,545}{405-65} = 139.8\ \mathrm{kg/min}, \qquad L = V_1 - D = 103.5\ \mathrm{kg/min}$$
4. $$\frac{L}{D} = \frac{103.5}{36.36} = 2.85$$

Chart-reading sensitivity: $H_1$ = 395–415 kcal/kg gives 2.96–2.74; Wankat's answer is 2.77.

**Result:** $L/D \approx 2.8$.

**Exam tip:** write the steam into both balances; the bottoms carries the condensed steam, so $B > F - D$.`,
          answer: String.raw`D = 36.4, B = 163.6 kg/min; QC ≈ −4.75×10⁴ kcal/min; V1 = 139.8 kg/min; L/D ≈ 2.8 (2.85 with chart readings; Wankat 2.77).` } ] },
    { id: "2018-19-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q7a", label: "(a)", marks: "4+6=10",
          topic: "advanced-distillation", sub: "Murphree vapour efficiency model; proof that EMV can exceed 1",
          type: "derivation", syllabus: "in", repeats: ["2015-16-Q4a", "2017-18-Q5c"],
          text: String.raw`What is Murphree vapor Efficiency, $E_{MV}$? Describe the Murphree Efficiency Model with a neat diagram and prove that $E_{MV}$ can be greater than 1.`,
          solution: String.raw`### Definition (4)
$$E_{MV} = \frac{y_{out} - y_{in}}{y^*_{out} - y_{in}} = \frac{y_n - y_{n+1}}{y_n^* - y_{n+1}}$$
the actual change in vapour composition across tray n divided by the change if the vapour left in equilibrium with the liquid leaving the tray ($y_n^* = y^*(x_n)$). Liquid form: $E_{ML} = (x_{n-1} - x_n)/(x_{n-1} - x_n^*)$.

### Model
![Murphree model on a cross-flow tray: vapour in and out well mixed, liquid composition falling from x1 near the inlet to x_out at the weir](fig/2018-19-Q7a-sol.svg)

Murphree's assumptions: the vapour streams entering and leaving are perfectly mixed (uniform $y_{in}$, $y_{out}$); the downcomer liquids are perfectly mixed; and the liquid on the tray is perfectly mixed, so the liquid everywhere has the outlet composition, $x = x_{out}$.

### Proof that $E_{MV}$ can exceed 1 (6)
On a large tray the liquid is **not** well mixed; it flows across in a cross-flow pattern and loses the more volatile component as it goes:
$$x_{in} > x_1 > x_2 > x_3 > x_4 > x_{out}$$
1. Each vapour element rising at position $i$ contacts liquid $x_i$. Even with a point efficiency $E_{OG} < 1$, the vapour leaving position $i$ satisfies $y_i \le y^*(x_i)$, and since $x_i > x_{out}$ near the inlet, $y^*(x_i) > y^*(x_{out}) = y^*_{out}$ (equilibrium curve increasing).
2. So the vapour leaving the inlet side can be richer than $y^*_{out}$; the mixed average $y_{out}$ of all elements can therefore exceed $y^*_{out}$.
3. Then $y_{out} - y_{in} > y^*_{out} - y_{in}$, i.e. numerator > denominator, so **$E_{MV} > 1$**. This is a consequence of defining $y^*$ from the leanest liquid on the tray, not a violation of thermodynamics.

Quantitative check (Lewis, liquid in plug flow, vapour unmixed between trays, $\lambda = mV/L$):
$$E_{MV} = \frac{1}{\lambda}\left[e^{\lambda E_{OG}} - 1\right]$$
with $E_{OG} = 0.8$ and $\lambda = 2$: $E_{MV} = \tfrac{1}{2}(e^{1.6} - 1) = 1.98 > 1$. For a well-mixed liquid ($x = x_{out}$ everywhere) $E_{MV} = E_{OG} \le 1$. $E_{MV} > 1$ is indeed often observed in large-diameter columns.`,
          answer: String.raw`EMV = (yn − yn+1)/(yn* − yn+1), y* based on the outlet liquid; Murphree assumes well-mixed vapour and liquid. With cross-flow, inlet liquid is richer than x_out, so the average y can exceed y*(x_out): EMV > 1 (e.g. Lewis plug flow, EOG 0.8, mV/L 2 gives EMV ≈ 1.98).` },
        { id: "2018-19-Q7b", label: "(b)", marks: "25",
          topic: "batch", sub: "Simple batch (Rayleigh) acetone–ethanol, 80 % → 40 %, Wfinal = 2 kmol",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`We wish to do a simple batch distillation (1 equilibrium contact) of a mixture of acetone and ethanol. The feed charge to the still pot is 80 mole% acetone. The final concentration in the still pot will be 40 mole% acetone. The final amount of material in the still pot is 2 kmol. Vapor–liquid equilibrium (VLE) data are presented below. Find the feed amount F, the average mole fraction of the distillate and the kmoles of distillate collected.

| $x_A$ | 0.10 | 0.15 | 0.20 | 0.30 | 0.40 | 0.50 | 0.60 | 0.70 | 0.80 | 0.90 |
|---|---|---|---|---|---|---|---|---|---|---|
| $y_A$ | 0.262 | 0.348 | 0.417 | 0.524 | 0.605 | 0.674 | 0.739 | 0.802 | 0.865 | 0.929 |`,
          solution: String.raw`This is Wankat Problem 9.D4.

**Given:** $x_F = 0.80$, $x_{W,final} = 0.40$, $W_{final} = 2.0$ kmol, one equilibrium contact, VLE above.

**Find:** $F$, $x_{D,avg}$, $D_{total}$.

**Assumptions:** negligible holdup; vapour leaving the pot in equilibrium with the pot liquid; total condenser collects all distillate.

1. Rayleigh equation (no trial and error here, since both limits are known):
$$\ln\frac{W_{final}}{F} = -\int_{x_{W,final}}^{x_F}\frac{dx}{y^*-x} \Rightarrow F = W_{final}\exp(\text{Area})$$
2. Integrand (data points, plus linear interpolation for the midpoints):

| x | y* | y* − x | 1/(y* − x) |
|---|---|---|---|
| 0.40 | 0.605 | 0.205 | 4.88 |
| 0.45 | 0.640 | 0.190 | 5.28 |
| 0.50 | 0.674 | 0.174 | 5.75 |
| 0.55 | 0.707 | 0.157 | 6.39 |
| 0.60 | 0.739 | 0.139 | 7.19 |
| 0.65 | 0.771 | 0.121 | 8.30 |
| 0.70 | 0.802 | 0.102 | 9.80 |
| 0.75 | 0.834 | 0.084 | 11.98 |
| 0.80 | 0.865 | 0.065 | 15.38 |

3. Simpson's rule with $h = 0.05$ (8 intervals):
$$\text{Area} = \frac{0.05}{3}[4.88 + 4(5.28 + 6.39 + 8.30 + 11.98) + 2(5.75 + 7.19 + 9.80) + 15.38] = 3.23$$
(fine numerical integration of the interpolated curve: 3.225; trapezoid on the five data points only: 3.29, which overestimates because the curve is concave up.)

![Rayleigh integrand 1/(y* − x) for acetone–ethanol from x = 0.40 to 0.80; area 3.22](fig/2018-19-Q7b-sol.svg)

4. Feed:
$$F = 2.0\,e^{3.225} = 2.0(25.15) = 50.3\ \mathrm{kmol}$$
5. Distillate: $D_{total} = F - W_{final} = 48.3$ kmol.
6. Average distillate composition:
$$x_{D,avg} = \frac{Fx_F - W_{final}x_{W,final}}{D_{total}} = \frac{50.3(0.80) - 2.0(0.40)}{48.3} = \frac{40.24 - 0.80}{48.3} = 0.817$$

**Result:** $F \approx 50$ kmol, $D_{total} \approx 48$ kmol, $x_{D,avg} \approx 0.82$ acetone.

**Comment:** because the curve rises steeply near $x_F$ (small $y - x$), the area is large and 96 % of the charge must be boiled off; a simple still gives poor separation for this system.

**Exam tip:** $F$ depends exponentially on the area, so an error of 0.06 in the area changes $F$ by 6 %; use Simpson's rule, not a coarse trapezoid.`,
          answer: String.raw`Area ∫dx/(y* − x) from 0.40 to 0.80 ≈ 3.22; F = 2e^3.22 ≈ 50.3 kmol; D ≈ 48.3 kmol; xD,avg ≈ 0.817.` } ] },
    { id: "2018-19-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw`A distillation column with 2 feeds is separating ethanol (E) and water (w) at a pressure of 1 atm. The column has a total condenser with saturated liquid reflux and a partial reboiler. Feed 1 is a saturated liquid and is 42 mole% ethanol. Feed 2 flowrate is 100 kmol/h. Feed 2 is 18 mole% ethanol and is a two phase mixture that is 30% vapor. The external reflux ratio is L/D = 1/2 and the distillate flowrate is 80 kmol/h. We desire a distillate mole fraction of $x_D$ = 0.66 mole fraction ethanol and a bottoms that is $x_B$ = 0.04 mole fraction ethanol. You can assume that CMO is valid. (Ethanol–water VLE at 1 atm, Table 2-1, attached.)`,
      parts: [
        { id: "2018-19-Q8a", label: "(a)", marks: "5",
          topic: "advanced-distillation", sub: "Two-feed ethanol–water column: external balances for F1 and B",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find the flowrates $F_1$ and B.`,
          solution: String.raw`This is Wankat Problem 4.D9.

**Given:** $F_2 = 100$ kmol/h, $z_2 = 0.18$; $z_1 = 0.42$ ($F_1$ unknown); $D = 80$ kmol/h, $x_D = 0.66$; $x_B = 0.04$.

Overall and ethanol balances:
$$F_1 + F_2 = D + B \Rightarrow B = F_1 + 20$$
$$z_1F_1 + z_2F_2 = Dx_D + Bx_B \Rightarrow 0.42F_1 + 18 = 52.8 + 0.04(F_1 + 20)$$
$$0.38F_1 = 35.6 \Rightarrow F_1 = 93.68\ \mathrm{kmol/h}, \qquad B = 113.68\ \mathrm{kmol/h}$$
Check: $0.42(93.68) + 18 = 57.35$; $52.8 + 0.04(113.68) = 57.35$. ✓`,
          answer: String.raw`F1 = 93.7 kmol/h, B = 113.7 kmol/h.` },
        { id: "2018-19-Q8b", label: "(b)", marks: "5",
          topic: "advanced-distillation", sub: "Middle-section flows L′ and V′ between the two feeds",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find the liquid and vapor flowrates in the middle section, $L'$ and $V'$.`,
          solution: String.raw`**Assumptions:** CMO; saturated reflux; $F_1$ (42 %, richer) enters above $F_2$ (18 %).

1. Top section: $L = (L/D)D = 0.5(80) = 40$ kmol/h, $V = L + D = 120$ kmol/h.
2. Across feed 1 (saturated liquid, $q_1 = 1$): all of $F_1$ joins the liquid.
$$L' = L + q_1F_1 = 40 + 93.68 = 133.68\ \mathrm{kmol/h}, \qquad V' = V - (1-q_1)F_1 = 120\ \mathrm{kmol/h}$$
3. For part (c), across feed 2 (30 % vapour, $q_2 = 0.7$):
$$\bar{L} = L' + q_2F_2 = 133.68 + 70 = 203.68, \qquad \bar{V} = V' - (1-q_2)F_2 = 120 - 30 = 90\ \mathrm{kmol/h}$$
Check: $\bar{L} - \bar{V} = 113.68 = B$. ✓`,
          answer: String.raw`L′ = 133.7 kmol/h, V′ = 120 kmol/h (and L̄ = 203.7, V̄ = 90 kmol/h below feed 2).` },
        { id: "2018-19-Q8c", label: "(c)", marks: "10",
          topic: "advanced-distillation", sub: "Three operating lines and feed lines for the two-feed column",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine and plot the operating lines. Be neat.`,
          solution: String.raw`1. **Top (rectifying):** $y = \dfrac{L}{V}x + \dfrac{D}{V}x_D = \dfrac{40}{120}x + \dfrac{80(0.66)}{120}$
$$y = 0.3333x + 0.4400 \quad (\text{through } y = x = 0.66)$$
2. **Middle:** balance around the top including $F_1$: $V'y = L'x + Dx_D - F_1z_1$
$$y = \frac{133.68}{120}x + \frac{52.8 - 39.35}{120} = 1.1140x + 0.1121$$
3. **Bottom (stripping):** $y = \dfrac{\bar{L}}{\bar{V}}x - \dfrac{B}{\bar{V}}x_B = \dfrac{203.68}{90}x - \dfrac{113.68(0.04)}{90}$
$$y = 2.2632x - 0.0505 \quad (\text{through } y = x = 0.04)$$
4. **Feed lines and intersections:**
   - Feed 1, $q = 1$: vertical line $x = 0.42$. Top and middle lines meet there at $(0.42, 0.580)$.
   - Feed 2, $q = 0.7$: $y = \dfrac{q}{q-1}x - \dfrac{z}{q-1} = -2.333x + 0.600$. Middle and bottom lines meet on it at $(0.1415, 0.2698)$.
5. The whole operating line stays below the equilibrium curve; the closest approach is at the feed-1 point ($y^* - y = 0.041$ at $x = 0.42$), so the column is feasible at $L/D = 0.5$.

![Ethanol–water: equilibrium curve, three operating lines and both feed lines](fig/2018-19-Q8c-sol.svg)`,
          answer: String.raw`Top y = 0.333x + 0.440; middle y = 1.114x + 0.112; bottom y = 2.263x − 0.0505. Intersections (0.42, 0.58) on F1's vertical q-line and (0.142, 0.270) on F2's q-line (slope −2.33).` },
        { id: "2018-19-Q8d", label: "(d)", marks: "15",
          topic: "advanced-distillation", sub: "Bottom-up McCabe–Thiele stepping: optimum feed stages and total stages",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find both optimum feed locations (above partial reboiler) and the total number of equilibrium stages needed. Step off stages from the bottom up. Be neat.`,
          solution: String.raw`**Method:** McCabe–Thiele from the bottom: start at $(x_B, x_B)$; go vertically to the equilibrium curve (the partial reboiler is stage 1), then horizontally to the operating line in force, and repeat. Switch from the bottom line to the middle line as soon as a horizontal step passes $x = 0.1415$, and from the middle to the top line once it passes $x = 0.42$ (optimum feeds). Equilibrium: Wankat Table 2-1 (attached), linear interpolation.

| stage (from bottom) | x_j (liquid) | y_j (vapour, equilibrium) | next x from |
|---|---|---|---|
| 1 = partial reboiler | 0.0400 | 0.2566 | bottom line |
| 2 | 0.1357 | 0.4813 | middle line (passes 0.1415): **feed 2 on stage 2** |
| 3 | 0.3314 | 0.5843 | top line (passes 0.42): **feed 1 on stage 3** |
| 4 | 0.4330 | 0.6263 | top line |
| 5 | 0.5590 | 0.6777 > 0.66 | — |

Fraction of the last stage: $(0.66 - 0.6263)/(0.6777 - 0.6263) = 0.66$.

![Bottom-up McCabe–Thiele staircase for the two-feed ethanol–water column: 4.66 stages, feed 2 on stage 2, feed 1 on stage 3 counted from the reboiler](fig/2018-19-Q8d-sol.svg)

**Result:** $N = 4.66$ equilibrium stages including the partial reboiler, i.e. **5 equilibrium contacts (partial reboiler + about 3.7 stages in the column)**. Optimum feeds: **feed 2 on the 1st stage above the partial reboiler** (stage 2 from the bottom), **feed 1 on the 2nd stage above the partial reboiler** (stage 3 from the bottom).

**Exam tip:** in bottom-up stepping the feed stage is the step whose horizontal line crosses the operating-line intersection; count the reboiler as stage 1 but report feed positions "above the reboiler" as asked.`,
          answer: String.raw`4.66 → 5 equilibrium stages including the partial reboiler; feed 2 on the 1st stage above the reboiler, feed 1 on the 2nd stage above the reboiler.` } ] }
  ]
});
