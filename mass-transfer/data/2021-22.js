QB.paper({
  year: "2021-22", date: "06/04/2023", marks: 210,
  rules: String.raw`Section A: Q1 compulsory + any two of Q2–Q4. Section B: Q5 compulsory + any two of Q6–Q8. Separate scripts for each section.`,
  questions: [
    { id: "2021-22-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q1a", label: "(a)", marks: "7",
          topic: "column-design", sub: "Effect of tray spacing on efficiency and diameter",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain briefly what effect increasing the spacing between trays in a staged distillation column has on: (i) Column Efficiency (ii) Column Diameter`,
          solution: String.raw`**(i) Efficiency: little effect** (slides: "tray spacing has little effect on efficiency").
- Mass transfer happens in the froth on the tray, and the froth height is set by the weir height and the flows, not by the spacing.
- A larger spacing gives more room for droplets to fall back, so there is less entrainment to the tray above. Entrainment lowers the apparent Murphree efficiency, so the efficiency rises slightly, mainly when operating close to flooding.

**(ii) Diameter: decreases.**
- In the flooding correlation, $C_{SB}$ rises strongly with spacing. For example, at $F_{lv} = 0.1$, $C_{SB} \approx 0.19$ ft/s at 12 in and 0.33 ft/s at 24 in.
- Since $u_{flood} = C_{SB}(\sigma/20)^{0.2}[(\rho_L-\rho_V)/\rho_V]^{0.5}$ and $D = \sqrt{4Q_V/(\pi f u_{flood})}$, we have $D \propto C_{SB}^{-1/2}$. Doubling 12 → 24 in cuts D by about 25%.
- Downcomer backup also has more room, so higher liquid loads are possible.

**Trade-off:** a larger spacing gives a smaller, cheaper-per-tray diameter, but a taller shell, $H = (N-1)S + H_{top} + H_{bottom}$. Spacing is also set by access for maintenance: 0.45 m for D < 1.2 m and at least 0.6 m for D = 1.2–3 m. The optimum minimizes total cost.`,
          answer: String.raw`Efficiency: almost unchanged (slightly higher through less entrainment). Diameter: smaller, because $C_{SB}$ and $u_{flood}$ rise with spacing ($D \propto C_{SB}^{-1/2}$), at the price of a taller column.` },
        { id: "2021-22-Q1b", label: "(b)", marks: "7",
          topic: "absorption", sub: "Kremser for multisolute absorption: advantages and limits",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`What are the advantages of using the Kremser equation for multisolute absorption and stripping instead of a graphical solution? When can't the Kremser equation be used?`,
          solution: String.raw`> The slides cover Kremser for one solute. Multisolute use follows Wankat §12.7.

**Why Kremser is preferred for multisolute dilute systems**
- In dilute systems each solute behaves **independently** with its own $y_i = m_i x_i + b_i$. One column (N, L/V) gives a different absorption factor $A_i = L/(m_iV)$ for each solute.
- A graphical solution would need a separate McCabe–Thiele diagram for every solute. Since N is set by one (key) solute and the others are found by trial, this means repeated trial-and-error stepping. Kremser gives each solute's recovery **directly and analytically**:
$$\frac{y_{N+1,i} - y_{1,i}}{y_{N+1,i} - y_{1,i}^*} = \frac{A_i^{N+1} - A_i}{A_i^{N+1} - 1}$$
- It handles fractional stages, very small concentrations (where graphs are unreadable), and very many stages, all accurately.
- It suits spreadsheets and is fast for sensitivity studies (change L/V or N and see every solute at once). It also includes $E_{MV}$ easily.

**When it cannot be used** (its assumptions fail)
- **Concentrated systems:** total L and V change through the column, so L/V is not constant.
- **Curved equilibrium** (not $y = mx + b$), or m changing with T or P along the column.
- **Non-isothermal operation:** a large heat of absorption heats the liquid and changes $m_i$.
- **Solutes interacting** (non-dilute, or chemical reaction with non-linear equilibrium), or a volatile solvent or soluble carrier.
- Efficiency varying strongly from stage to stage, or side streams and intermediate feeds (it applies only to a simple countercurrent section).`,
          answer: String.raw`Kremser treats each dilute solute independently and analytically (no repeated diagrams or trial and error; accurate at tiny concentrations and fractional N). It fails for concentrated systems, curved or T-dependent equilibrium, non-isothermal (large heat of absorption) or interacting solutes.` },
        { id: "2021-22-Q1c", label: "(c)", marks: "7",
          topic: "immiscible-extraction", sub: "Why extraction equipment is so varied",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"The variety of equipment used for extraction is much greater than for distillation, absorption, and stripping" — elaborate and rationalize.`,
          solution: String.raw`**Reason (slides):** "Efficient contacting and separating of two liquid phases is considerably more difficult than contacting and separating a vapor and a liquid."
- **Small density difference.** Liquid–liquid $\Delta\rho$ is about 0.1–0.3 g/cm³, compared with about 1 g/cm³ for vapor–liquid. Gravity separation is slow, so settlers, coalescers or centrifuges are needed.
- **Dispersion needs energy, coalescence needs time.** Liquids do not break into drops by themselves the way vapor bubbles through liquid. Mixing energy (agitators, pulsing, rotating discs) creates area. Too much energy forms stable emulsions, so separation is then hard.
- **Wide range of properties:** viscosity, interfacial tension, emulsifying tendency, solids content, corrosiveness and sensitivity of the solute (proteins, antibiotics need short contact).
- **Wide range of stage numbers and throughputs:** from 1–2 stages to more than 10, and from lab to refinery scale.

**Resulting families of equipment**
- **Mixer-settlers:** 1–2 stages, very flexible, handle solids and viscous liquids, but large volume.
- **Unagitated columns:** spray, packed (random or structured) and sieve-tray columns, for 3–5 stages, cheap, no moving parts.
- **Mechanically agitated or pulsed columns:** rotating-disc contactor (RDC), Scheibel, Kühni, Karr reciprocating-plate and pulsed columns, for more than 5 stages.
- **Centrifugal extractors** (Podbielniak), for small $\Delta\rho$, emulsifying systems and short residence times.
- **Membrane (hollow-fiber) contactors:** no dispersion, so no emulsion.

By contrast, almost every distillation or absorption duty can be met by a sieve, valve or bubble-cap tray, or by packing.

Heuristics (slides): 1–2 stages → mixer-settler; 3–5 → sieve tray, packed or membrane; more than 5 → mechanically agitated column.`,
          answer: String.raw`Liquid–liquid systems have small Δρ, need energy to disperse and time to coalesce, risk emulsions, and vary widely in properties and stage needs. Hence mixer-settlers, static columns, agitated or pulsed columns, centrifugal and membrane contactors, against essentially trays or packing for V–L.` },
        { id: "2021-22-Q1d", label: "(d)", marks: "7",
          topic: "partial-extraction", sub: "Difference point when R1 = E0",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Consider a right triangular equilibrium diagram for a partially miscible extraction system. When $E_0 > R_1$ the difference point is on the left side of the diagram; and when $R_1 > E_0$ the difference point is on the right of the diagram. What happens when $R_1 = E_0$? Answer the question using a logical argument.`,
          solution: String.raw`**Definition (slides):** $\Delta = E_0 - R_1 = E_j - R_{j+1} = E_N - R_{N+1}$, a fictitious stream with coordinates

$$x_{A,\Delta} = \frac{E_0y_{A,0} - R_1x_{A,1}}{\Delta}, \qquad x_{D,\Delta} = \frac{E_0y_{D,0} - R_1x_{D,1}}{\Delta}$$

**Argument**
1. If $R_1 = E_0$, then $\Delta = 0$ kg/h. The numerators are not zero, because $E_0$ and $R_1$ are different points. So $x_{A,\Delta}$ and $x_{D,\Delta}$ go to $\pm\infty$: **Δ lies at infinity.**
2. Continuity: as $R_1$ grows toward $E_0$ from below, Δ moves further left (to $-\infty$). Just past equality it reappears far to the right (from $+\infty$). At equality it is at infinity in both directions along the same direction.
3. Lever rule: Δ is on the line through $E_0$ and $R_1$, with $E_0 = \Delta + R_1$. With $\Delta \to 0$ the lever arm $\overline{R_1\Delta}$ must be infinite.
4. **Geometric consequence:** every passing-stream pair has $E_j = R_{j+1}$, and every pair carries the same net solute and diluent flows. So the lines $E_jR_{j+1}$ are all **parallel** to line $E_0R_1$ (and to $E_NF$), rather than meeting at a point.

**Stepping procedure:** tie line from $E_N$ to $R_N$. Then draw through $R_N$ a line parallel to $E_0R_1$ to get $E_{N-1}$, and so on. The method still works, just with parallel operating lines.

![Right-triangle diagram with R1 = E0: operating lines EjRj+1 drawn parallel to E0R1](fig/2021-22-Q1d-sol.svg)`,
          answer: String.raw`$\Delta = E_0 - R_1 = 0$, so the coordinates of Δ blow up: Δ is at infinity and all operating lines $E_jR_{j+1}$ are parallel to $E_0R_1$; step with parallel lines.` },
        { id: "2021-22-Q1e", label: "(e)", marks: "7",
          topic: "leaching", sub: "Faulty leaching assumptions and the effective equilibrium constant",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`McCabe-Thiele graphical stage analysis for idealized leaching process requires a set of assumptions of which two assumptions are often faulty in real cases — state those assumptions with reasons and what corrective measures are taken for the stage analysis?`,
          solution: String.raw`**Idealized leaching assumptions (slides):** (1) isothermal; (2) isobaric; (3) no solvent dissolves into the solid; (4) **no solvent entrained with the solid**; (5) insoluble solid backbone; (6) negligible heat of mixing; (7) **the stages are equilibrium stages**; (8) no solid carried with the overflow.

**The two that are often faulty**
- **Assumption 4, no entrainment.** Solids always leave a settler or filter wet. They carry underflow liquid with them for the same reason as in washing (porosity of the settled bed). So the solvent and solute leaving with the solids is not zero, and $F_{solv}$ is not the same in both streams.
- **Assumption 7, equilibrium stages.** The solute must diffuse out of the solid matrix, and diffusion in solids is very slow. With practical residence times, equilibrium between solid and liquid is seldom reached. Large pieces can take days; in-situ ore leaching can take years.

**Corrective measure:** lump both effects into an **effective equilibrium constant** measured on the real equipment:

$$y = m_E\,x$$

- Here y is the concentration in the overflow liquid and x the concentration in the solid (including its entrained liquid), e.g. g/L or kg/m³.
- The McCabe–Thiele diagram looks the same, with the effective equilibrium line in place of true equilibrium. If $m_E$ is constant, the **Kremser equation** applies, for example
$$\frac{x_N}{x_0} = \frac{1 - m_EF_{solv}/F_{solid}}{1 - (m_EF_{solv}/F_{solid})^{N+1}}$$

**Caution:** $m_E$ depends on flow conditions and residence time. It is valid only for the conditions at which it was measured and is not a fundamental property, but it is easy to measure and use.`,
          answer: String.raw`Assumption 4 (no liquid entrained with the solids: underflow always entrains) and assumption 7 (equilibrium stages: slow diffusion in solids) usually fail. Correct by using a measured effective equilibrium $y = m_Ex$, then McCabe–Thiele or Kremser.` } ] },
    { id: "2021-22-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q2a", label: "(a)", marks: "7",
          topic: "absorption", sub: "Why absorbers and strippers are coupled",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Many chemical plants including gas treatment plant often have both absorption and stripping columns coupled to each other — state the reason(s).`,
          solution: String.raw`- **Solvent regeneration and recycle.** The absorber loads the solvent with solute. Buying fresh solvent and disposing of the loaded solvent would be very costly and polluting. The stripper removes the solute so the lean solvent can be **recycled** to the absorber in a closed loop, with only a small make-up.
- **Recovering the solute.** The absorbed component (e.g. CO₂, H₂S, hydrocarbons, ammonia) leaves the stripper as a concentrated stream. It can then be sold, used (H₂S to sulfur by the Claus process, CO₂ for urea or sequestration) or disposed of safely.
- **Equilibrium can be shifted between the two columns.** Absorption is favored by **high pressure and low temperature**, which give a small m. Stripping is favored by **low pressure and high temperature**, which give a large m. A heat exchanger heats the rich solvent going to the stripper (and cools the lean solvent returning), so the same solvent absorbs in one column and releases in the other. Some treated gas (or steam) can serve as the stripping gas.
- **Reversible chemical solvents** (MEA and other amines with water) are chosen exactly because they can be regenerated thermally in the stripper. Irreversible solvents (NaOH) cannot.
- **Economics and environment:** low solvent loss, low waste, heat integration between the hot lean solvent and the cold rich solvent.

Typical example (slides): natural gas or refinery gas sweetening. An amine absorber at high P removes CO₂ and H₂S; a steam-stripped amine regenerator at low P and high T releases them.`,
          answer: String.raw`To regenerate and recycle the (costly) solvent and recover the solute. The absorber runs at high P and low T, the stripper at low P and high T with heat exchange, as in amine gas sweetening.` },
        { id: "2021-22-Q2b", label: "(b)", marks: "10",
          topic: "absorption", sub: "Absorber vs stripper comparison",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Make a comparison between the absorption and stripping process in direction of mass transfer, relative position of equilibrium and operating lines and basis for the determination of column diameter.`,
          solution: String.raw`| Aspect | Absorption | Stripping (desorption) |
|---|---|---|
| Principle | a soluble gas component is taken up by a nonvolatile liquid solvent | a dissolved component is removed from the liquid into an insoluble gas or steam |
| **Direction of mass transfer** | gas → liquid | liquid → gas |
| Favourable conditions | high P, low T (small m) | low P, high T (large m) |
| Equilibrium (dilute) | $y = mx$ (Henry: m = H/P) | same relation |
| Operating line | $y_{j+1} = (L/V)x_j + (y_1 - (L/V)x_0)$ | same equation |
| **Relative position on y–x** | operating line **above** the equilibrium line, since $y > y^*$ drives solute into the liquid | operating line **below** the equilibrium line, since $y < y^*$ |
| Limiting flow | $L_{min}$: pinch at the bottom, where the rich gas enters | $V_{min}$ (= $G_{max}$ for L/G): pinch at the top, where the rich liquid enters |
| Kremser factor | absorption factor $A = L/(mV) > 1$ is good | stripping factor $S = mV/L > 1$ is good |
| Stepping | from $(x_0, y_1)$ at the top, stepping toward the bottom; steps go between the operating line (above) and equilibrium (below) | the same, but the staircase sits between equilibrium (above) and operating line (below) |
| **Basis for diameter** | same method as distillation (flooding, $u \approx 0.75u_{flood}$). Size at the **bottom**, where the total gas and liquid flows are largest because the gas is richest and the liquid most loaded | same method; size where the flows are largest. In a gas stripper this is usually the **top**, where the gas leaves carrying the solute (with steam, check both ends because of condensation) |

**Basis of diameter (slides):** the gas carrier flow $G = (1-y_j)V_j$ is constant, so the total $V_j$ is largest where y is largest. $L_j - V_{j+1} = L_0 - V_1$ is constant, so total L and V vary together. The diameter is sized for the stage with the largest total vapor flow and checked against flooding.`,
          answer: String.raw`Absorption moves solute gas → liquid, with the operating line above equilibrium and the pinch at the bottom ($L_{min}$). Stripping moves liquid → gas, with the operating line below equilibrium and the pinch at the top ($V_{min}$). Both are sized like distillation at the end with the largest total gas flow.` },
        { id: "2021-22-Q2c", label: "(c)", marks: "18",
          topic: "absorption", sub: "CO2 stripper with N2, Murphree efficiency 40%",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`We wish to design a stripping column to remove carbon dioxide from water. This is done by heating the water and passing it counter-current to a nitrogen stream in a staged stripper. Operation is isothermal and isobaric at 60°C and 1 atm pressure. The water contains $9.2\times10^{-6}$ mole fraction CO₂ and flows at 100,000 lb/hr. Nitrogen (N₂) enters the column as pure nitrogen and flows at 2500 ft³/hr. Nitrogen is at 1 atm and 60°C. We desire an outlet water concentration that is $2\times10^{-7}$ mole fraction CO₂. Ignore nitrogen solubility in water and ignore the volatility of the water. The respective Henry's law constant, H at 60°C is 3410 atm/mole fraction. Use a Murphree vapor efficiency of 40%. Determine the outlet vapor composition and number of real stages needed.`,
          solution: String.raw`**Given:** $x_0 = 9.2\times10^{-6}$, $x_N = 2\times10^{-7}$, $y_{N+1} = 0$; water 100,000 lb/h; N₂ 2500 ft³/h at 60°C and 1 atm; H = 3410 atm/mole frac (also Wankat Table 12-1); $E_{MV} = 0.40$.

**Find:** $y_1$ and $N_{real}$.

**Assumptions:** very dilute, so total L and V are constant; isothermal and isobaric; $y = (H/P)x$ is linear; N₂ is an ideal gas; molar mass of water 18.015 (Çengel Table A-1).

1. **Gas flow:** the molar volume at 0°C and 1 atm is 359.05 ft³/lbmol, so at 60°C it is $359.05(333.15/273.15) = 437.9$ ft³/lbmol.
$$V = 2500/437.9 = 5.709\ \mathrm{lbmol/h}$$
2. **Liquid flow:** $L = 100{,}000/18.015 = 5551$ lbmol/h, so $L/V = 972.3$.
3. **Equilibrium:** $y = (H/P)x = 3410x$, so $m = 3410$, $b = 0$.
4. **External balance:**
$$y_1 = \frac{L}{V}(x_0 - x_N) + y_{N+1} = 972.3(9.2\times10^{-6} - 2\times10^{-7}) = 0.00875$$
5. **Kremser with Murphree efficiency** (slides):
$$y_1^* = mx_0 = 3410(9.2\times10^{-6}) = 0.03137, \qquad \frac{mV}{L} = \frac{3410}{972.3} = 3.507$$
$$N_{real} = -\frac{\ln\left[\left(1-\frac{mV}{L}\right)\frac{y_{N+1}-y_1^*}{y_1-y_1^*} + \frac{mV}{L}\right]}{\ln[1 + E_{MV}(mV/L - 1)]}$$
$$= -\frac{\ln[(1-3.507)\frac{0-0.03137}{0.00875-0.03137} + 3.507]}{\ln[1 + 0.4(2.507)]} = -\frac{\ln(0.0303)}{\ln(2.003)} = \frac{3.497}{0.694} = 5.04$$
   - With $E_{MV} = 1$ the same equation gives 2.79 equilibrium stages, so the overall efficiency is about 2.79/5.04 = 55%.
6. **Use 6 real stages.** Five give $x_5 = 2.08\times10^{-7}$, just short of the specification.

**McCabe–Thiele with Murphree stepping** (from the top). On each step the vapor leaving reaches only 40% of the way from the operating line to equilibrium: $y_n = y_{n+1} + 0.4(3410x_n - y_{n+1})$, with $y_{n+1} = 972.3x_n - 0.000195$.

| Real stage | $y_n$ (leaving) | $x_n$ |
|---|---|---|
| 1 | 0.00875 | $4.55\times10^{-6}$ |
| 2 | 0.00423 | $2.23\times10^{-6}$ |
| 3 | 0.00198 | $1.08\times10^{-6}$ |
| 4 | 0.00085 | $4.97\times10^{-7}$ |
| 5 | 0.00029 | $2.08\times10^{-7}$ |
| 6 | 0.0000080 | $6.4\times10^{-8}$ (passes $2\times10^{-7}$) |

This gives about 5.06 real stages, so 6 trays, matching Kremser.

![Dilute stripping McCabe–Thiele: equilibrium y = 3410x, operating line slope 972, pseudo-equilibrium line at 40%, about 5 real stages](fig/2021-22-Q2c-sol.svg)

**Exam tip:** note the very different axis scales (x of order $10^{-6}$, y of order $10^{-3}$). Plot in scaled units, and draw the pseudo-equilibrium line 40% of the vertical distance up from the operating line.`,
          answer: String.raw`$V = 5.71$ lbmol/h, $L = 5551$ lbmol/h, L/V = 972; $y_{out} = 0.00875$; mV/L = 3.51; $N_{real} = 5.04$, so 6 real stages (2.8 equilibrium stages).` } ] },
    { id: "2021-22-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q3a", label: "(a)", marks: "6",
          topic: "immiscible-extraction", sub: "Choosing extractor type",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Propose appropriate extractor type for the followings: (i) liquids containing suspended solids (ii) liquids with high viscosity (iii) corrosive material`,
          solution: String.raw`| Duty | Suitable extractors | Avoid | Reason |
|---|---|---|---|
| (i) Suspended solids | **mixer-settlers** (agitation keeps solids suspended; the settler is easy to clean); **Karr reciprocating-plate or pulsed columns**; spray columns | packed and sieve-tray columns, centrifugal extractors | small openings and narrow passages plug and foul |
| (ii) High viscosity | **mechanically agitated equipment:** mixer-settlers, rotating-disc (RDC) or Karr columns; centrifugal extractors when the density difference is small | spray, packed and sieve columns (unagitated) | viscous liquids do not disperse into fine drops without mechanical energy, so little interfacial area forms |
| (iii) Corrosive material | **no internal moving parts, built in corrosion-resistant materials:** packed columns with ceramic or plastic packing, spray columns, or **pulsed sieve-plate columns** (the pulse is generated outside the column, as in nuclear fuel reprocessing) | agitated columns and centrifuges with seals and bearings in contact with the liquid | moving parts and seals corrode, and exotic alloys for them are costly |

General heuristics (slides): 1–2 stages → mixer-settler; 3–5 → sieve tray, packed or membrane contactor; more than 5 → mechanically agitated column.`,
          answer: String.raw`(i) Mixer-settler (or Karr/pulsed column); (ii) mechanically agitated: mixer-settler, RDC or Karr (centrifugal if Δρ is small); (iii) no moving parts: packed or spray columns in resistant materials, or pulsed sieve-plate columns.` },
        { id: "2021-22-Q3b", label: "(b)", marks: "17",
          topic: "immiscible-extraction", sub: "Acetic acid into 3-heptanol, countercurrent Kremser (slide D4)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`We have a mixture of acetic acid in water and wish to extract this with 3-heptanol at 25°C. Equilibrium is (wt fraction acetic acid in solvent)/(wt fraction acetic acid in water) = 0.828. The inlet water solution flows at 550 lb/hr and is 0.0097 wt fraction acetic acid. We desire an outlet water concentration of 0.00046 wt fraction acetic acid. The solvent flow rate is 700 lb/hr. The entering solvent contains 0.0003 wt fraction acetic acid. Determine the outlet solvent concentration and the number of equilibrium stages required. Is this an economical way to extract acetic acid?`,
          solution: String.raw`**Given:** $R = 550$ lb/h, $x_0 = 0.0097$, $x_N = 0.00046$; $E = 700$ lb/h, $y_{N+1} = 0.0003$; $y = 0.828x$.

**Find:** $y_1$, $N$, and whether the process is economical.

**Assumptions:** immiscible, dilute (below 1 wt%), so the total flows R and E are constant; isothermal; linear equilibrium. These are the Kremser conditions (slides: replace L/V by R/E). Same problem as slide D4 (Wankat 13.D4).

1. **Outlet solvent concentration** (external balance):
$$y_1 = y_{N+1} + \frac{R}{E}(x_0 - x_N) = 0.0003 + \frac{550}{700}(0.0097 - 0.00046) = 0.00756$$
2. **Extraction factor:** $mE/R = 0.828(700)/550 = 1.0538$, so $R/(mE) = 0.9489$. Also $y_1^* = mx_0 = 0.828(0.0097) = 0.00803$.
3. **Kremser** (slides, Eq. 13-11b):
$$N = \frac{\ln\left[\left(1-\frac{mE}{R}\right)\frac{y_{N+1}-y_1^*}{y_1-y_1^*} + \frac{mE}{R}\right]}{\ln(R/mE)} = \frac{\ln\left[(-0.0538)\frac{0.0003 - 0.00803}{0.00756 - 0.00803} + 1.0538\right]}{\ln 0.9489}$$
$$= \frac{\ln[0.1715]}{-0.0524} = 33.6$$
   - The liquid-phase form, with $x_N^* = y_{N+1}/m = 0.000362$, gives the same 33.6. Stepping 34 stages on the McCabe–Thiele diagram confirms it (33.6).
4. **Result:** about 33.6, so **34 equilibrium stages**; extract leaves at 0.756 wt% acid.

![Dilute McCabe–Thiele for acetic acid into 3-heptanol: operating line slope R/E = 0.786 nearly parallel to y = 0.828x near the feed end, about 34 stages](fig/2021-22-Q3b-sol.svg)

**Is it economical? No.**
- $m = 0.828 < 1$: the solute prefers the water slightly, so 3-heptanol is a poor solvent for acetic acid.
- The minimum solvent rate (pinch at the feed end, $y_1 = mx_0$) is $E_{min} = R(x_0 - x_N)/(mx_0 - y_{N+1}) = 657$ lb/h. We use only 1.06 × $E_{min}$, so the operating and equilibrium lines are almost parallel and 34 stages are needed. No real extractor gives 34 equilibrium stages economically.
- The extract (0.76 wt%) is barely more concentrated than the feed (0.97 wt%). Recovering acid from it (and solvent from the acid) by distillation would cost much more than the extraction.
- Improvement: use much more solvent (for example $mE/R \approx 1.5$–2 brings N down to about 9 and 6), or a solvent with a larger distribution coefficient. Even then, other recovery routes such as azeotropic distillation or ethyl acetate extraction would likely be preferred.`,
          answer: String.raw`$y_1 = 0.00756$ wt frac; mE/R = 1.054; N = 33.6, so 34 stages. Not economical: m < 1 and the solvent rate is only 1.06 $E_{min}$, giving many stages and a dilute extract that is costly to recover.` },
        { id: "2021-22-Q3c", label: "(c)", marks: "12",
          topic: "partial-extraction", sub: "Graphical method: exit raffinate and entering extract composition (given extract product)",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`We are extracting (partially miscible extraction) formic acid from water with isobutyl ether at 30°C and 1 atm pressure. The column has the equilibrium stages. The entering feed rate is 1200 kg/hr. The feed is 40 wt% formic acid and 60 wt% water. The exiting extract stream has a flow rate of 2500 kg/hr and is 20 wt% formic acid. The entering extract stream (which is not pure isobutyl ether) contains no water. Consider a reasonable equilibrium diagram and demonstrate graphically how the followings can be determined: (i) The exit raffinate concentration (ii) The required entering extract stream concentration`,
          solution: String.raw`**Assumptions:** the number of stages is missing in the paper ("The column has the equilibrium stages"). As in the parent slide problem D9 (Wankat 13.D14), **3 equilibrium stages** are assumed. No formic acid–water–isobutyl ether data are given, so the construction below uses the acetic acid–water–isopropyl ether tie lines (Wankat Table 13-5) as the "reasonable equilibrium diagram". The numbers are illustrative; the method is the answer.

**Known:** $F = R_{N+1} = 1200$ kg/h, $x_{A,F} = 0.40$, $x_{D,F} = 0.60$; $E_N = 2500$ kg/h, $y_{A,N} = 0.20$ (on the saturated extract curve); $E_0$ has $y_{D,0} = 0$ (it lies on the solute–solvent edge, the vertical axis); N = 3.

**Construction**
1. Plot the binodal, the tie lines (or conjugate line), and the points F and $E_N$. $E_N$ is on the extract branch at 20% acid. From the curve, its water content is $y_{D,N} \approx 0.064$.
2. **Difference point** from the feed end, which is fully known:
$$\Delta = E_N - R_{N+1} = 2500 - 1200 = 1300\ \mathrm{kg/h}$$
$$x_{A,\Delta} = \frac{E_Ny_{A,N} - Fx_{A,F}}{\Delta} = \frac{500 - 480}{1300} = 0.0154, \qquad x_{D,\Delta} = \frac{2500(0.064) - 720}{1300} = -0.430$$
   - Δ lies on line $FE_N$ extended beyond $E_N$, on the left side of the diagram ($E_N > F$).
   - Lever-rule alternative: $R_{N+1}/\Delta = \overline{E_N\Delta}/\overline{R_{N+1}E_N}$.
3. **Step off 3 stages from $E_N$:**
   - Tie line from $E_N$ to $R_N$ (stage N).
   - Line from Δ through $R_N$, cut by the extract curve, gives $E_{N-1}$; its tie line gives $R_{N-1}$.
   - Repeat: the third tie line ends at $R_1$.
4. **(i) Exit raffinate $R_1$** is the end of the third tie line. Illustrative values: $x_{A,1} \approx 0.30$, $x_{D,1} \approx 0.67$.
5. **(ii) Entering extract $E_0$:** draw line $\Delta R_1$ and extend it to the vertical axis ($y_D = 0$, no water). The intersection is $E_0$: $y_{A,0} \approx 0.125$, $y_{S,0} \approx 0.875$.
6. **Flows** (from $E_0 - R_1 = \Delta$ and the acid balance $E_0y_{A,0} - R_1x_{A,1} = 20$):
$$E_0 \approx 2140\ \mathrm{kg/h}, \qquad R_1 \approx 840\ \mathrm{kg/h}$$
   - Water check: $840(0.667) = 559 = 720 - 2500(0.064)$.

| Stage (from feed end) | Extract $y_A$ | Raffinate $x_A$ |
|---|---|---|
| N = 3 | 0.200 | 0.349 |
| 2 | 0.172 | 0.318 |
| 1 | 0.151 | 0.296 (= $R_1$) |

![Illustrative right-triangle construction: Δ from F and EN, three tie-line steps to R1, and E0 on line ΔR1 at the solute–solvent edge](fig/2021-22-Q3c-sol.svg)

**Exam tip:** when $E_N$ and F are both known, start from the *feed end*: Δ = $E_N - F$ lies on line $FE_N$. Step N stages, then find $E_0$ where line $\Delta R_1$ meets the $y_D = 0$ edge.`,
          answer: String.raw`Δ = $E_N - F$ = 1300 kg/h on line $FE_N$ (here $x_{A,\Delta} = 0.015$). Step 3 tie lines from $E_N$ to get $R_1$ (≈ 30% acid with the stand-in data); $E_0$ is where line $\Delta R_1$ meets the water-free edge (≈ 12.5% acid, $E_0$ ≈ 2140, $R_1$ ≈ 840 kg/h).` } ] },
    { id: "2021-22-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q4a", label: "(a)", marks: "13",
          topic: "leaching", sub: "Role of solids in washing calculations; where solids rate appears on McCabe–Thiele",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`How does the quality of solid enter into washing calculations? Where does solids flow rate implicitly appear in McCabe-Thiele diagram for washing?`,
          solution: String.raw`**Washing basics (slides):** the solute is not held by the solid; it is only in the liquid entrained between the particles. Equilibrium is therefore $y = x$: the same concentration in the overflow and in the underflow liquid. **The solid does not change concentrations; it changes the relative flow rates.**

**How the "quality" of the solid enters: through the underflow liquid U**

$$U = (\text{dry solids rate})\left(\frac{\varepsilon}{1-\varepsilon}\right)\frac{\rho_f}{\rho_s} \qquad \text{or} \qquad U = (\text{volume of wet solids/h})\,\varepsilon\,\rho_f$$

- **Porosity ε** of the settled solids (liquid volume / total volume) depends on particle size, size distribution, shape and how well the solids settle or compact in the thickener. Fine, flocculent solids hold a lot of liquid (large U); coarse sand holds little.
- **Solid density** $\rho_s$ (dry crushed, without air) and the fluid density $\rho_f$.
- **Solids rate:** the dry solids throughput.
- Often the solid quality is given directly as "kg liquid entrained per kg dry solid" (e.g. 3 kg/kg in Example 14-1) or "vol% liquid in the underflow" (e.g. 80 vol% in Problem D3).

**Conditions for constant U and O**, so the operating line is straight: no solids in the overflow and no dissolving solids (constant solids rate); constant $\rho_f$ and $\rho_s$ (dilute solution); constant ε from stage to stage.

**Where the solids rate appears on the McCabe–Thiele diagram**

$$y_{j+1} = \frac{U}{O}x_j + \left(y_{N+1} - \frac{U}{O}x_N\right)$$

- The **slope U/O** of the operating line contains the solids rate, through U = (solids rate) × (liquid per unit solids). Doubling the solids at the same wash water doubles U/O. The line becomes steeper and moves toward $y = x$, so more stages are needed.
- In Kremser form: $x_N/x_0 = (1 - mO/U)/(1 - (mO/U)^{N+1})$ with m = 1, so the recovery depends only on the wash ratio $O/U$, i.e. kg wash water per kg liquid entrained with the solids.
- Example 14-1: U = 3 kg/kg solid, O = 8 kg/kg solid, N = 4, so $mO/U = 8/3$, $x_N/x_0 = 0.0125$, recovery 98.8%.
- The solids rate itself never appears as an axis or on the equilibrium line ($y = x$). It is hidden in U, so both the operating-line slope and the overall balance $O(y_1 - y_{N+1}) = U(x_0 - x_N)$ reflect it.`,
          answer: String.raw`Solid properties (porosity ε, $\rho_s$, settling, i.e. liquid entrained per kg solid) set the underflow $U = (\text{solids})\,\varepsilon\rho_f/[(1-\varepsilon)\rho_s]$. The solids rate appears only implicitly through U, in the operating-line slope U/O (equilibrium stays y = x).` },
        { id: "2021-22-Q4b", label: "(b)", marks: "12",
          topic: "leaching", sub: "Sugar leaching, 11 stages, effective mE = 1.18: Kremser recovery",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`In the leaching of sugar from sugar cane, water is used as the solvent. Typically about 11 stages are used in a countercurrent Rotocel or other leaching system. On a volumetric basis, liquid flow rate/solid flow rate = 0.95. The effective equilibrium constant is $m_E$ = 1.18, where $m_E$ = (concentration, g/liter, in liquid)/(concentration, g/liter, in solid). If pure water is used as the inlet solvent, predict the recovery of sugar in the solvent.`,
          solution: String.raw`**Given:** N = 11; $F_{solv}/F_{solid} = 0.95$ (volumetric); $y = m_Ex$ with $m_E = 1.18$ (g/L basis); $y_{N+1} = 0$.

**Find:** recovery $= 1 - x_N/x_0$.

**Assumptions:** constant volumetric flows; linear effective equilibrium; countercurrent stages. Entrainment and non-equilibrium are already lumped into $m_E$, so Kremser applies (slide problem D7, Wankat 14.D7).

1. **Operating line:** $Y_{j+1} = (F_{solid}/F_{solv})X_j + Y_1 - (F_{solid}/F_{solv})X_0$, with slope $1/0.95 = 1.053$.
2. **Kremser (liquid-phase form):**
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - \frac{mF_{solv}}{F_{solid}}}{1 - \left(\frac{mF_{solv}}{F_{solid}}\right)^{N+1}}, \qquad x_N^* = y_{N+1}/m = 0$$
3. **Stripping-type factor:** $mF_{solv}/F_{solid} = 1.18(0.95) = 1.121$.
$$\frac{x_N}{x_0} = \frac{1 - 1.121}{1 - 1.121^{12}} = \frac{-0.121}{1 - 3.938} = 0.0412$$
4. **Recovery** $= 1 - 0.0412 = 0.959$, i.e. **95.9% of the sugar goes into the water**.
5. **Check by stepping** (normalized $x_0 = 1$, $y_1 = 1.009$): the stage solids concentrations are 0.855, 0.726, 0.611, 0.508, 0.417, 0.335, 0.262, 0.197, 0.139, 0.087 and 0.041 after 11 stages, which agrees.

![Leaching McCabe–Thiele (normalized): effective equilibrium y = 1.18x, operating line slope 1.053, 11 stages to xN/x0 = 0.041](fig/2021-22-Q4b-sol.svg)

**Comment:** the factor 1.121 is close to 1, so the lines are nearly parallel. Each extra stage helps only slowly; this is why about 11 stages are used industrially.`,
          answer: String.raw`$m_EF_{solv}/F_{solid} = 1.121$; $x_N/x_0 = 0.041$; recovery of sugar ≈ 95.9%.` },
        { id: "2021-22-Q4c", label: "(c)", marks: "6+4",
          topic: "column-design", sub: "Choosing liquid flow pattern (graph) and best way to get overall efficiency",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`In the context of staged distillation column design, answer the followings: (i) How to find the appropriate liquid flow patterns for a given condition/problem? [Show graphically]. (ii) State briefly the best way to determine overall column efficiency.`,
          solution: String.raw`### (i) Liquid flow pattern
- The two variables are the **liquid flow rate** (gal/min) and the **tower diameter** (ft, set by the vapor load from the flooding calculation).
- Liquid-handling capacity grows with weir length (∝ D), but vapor capacity grows with area (∝ D²). At large D and high liquid rates the tray runs out of weir length before it runs out of vapor area, so more passes are needed.
- **Procedure:** size D from the vapor flow. Locate the point (D, liquid rate) on the chart below and read the region:
  - **reverse flow** (low liquid rates, less than about 30–50 gpm: a baffle lengthens the liquid path);
  - **cross flow, single pass** (most common, average rates);
  - **double pass** (high liquid rates, large D, above about 200–500 gpm);
  - **cascade or four-pass** (very high rates). Three-pass trays are not used because of liquid maldistribution.

![Liquid flow pattern chart: liquid rate (gpm, log) against tower diameter (ft, log) with reverse-flow, cross-flow, double-pass and multipass regions](fig/2021-22-Q4c-sol.svg)

(The boundaries are approximate, redrawn from the slide chart after Huang and Hodson.)

### (ii) Overall efficiency $E_o = N_{equil}/N_{actual}$
- **Best:** use **measured data for the same or a closely similar system and tray type**: operating plant columns, or a pilot or Oldershaw (small sieve-tray) column scaled up. Efficiency depends on the system and the hardware, so experiment is the most reliable source.
- **Without data:** use the **O'Connell correlation**, $E_o$ against $\alpha\mu_L$ (relative volatility × liquid viscosity in cP at the average column T and P):
$$E_o = 0.52782 - 0.27511\log_{10}(\alpha\mu) + 0.044923[\log_{10}(\alpha\mu)]^2$$
  - It is conservative for sieve and valve trays, being based on bubble-cap data. For absorbers, use the absorber version with $Hp/\mu$, as in the slides.
- Or estimate Murphree or point efficiencies from mass-transfer models (e.g. the AIChE method), convert them to $E_o$, and check against data.`,
          answer: String.raw`(i) Size D from the vapor load, then read (D, liquid gpm) on the flow-pattern chart: reverse, cross-flow, double-pass or 4-pass (never 3-pass). (ii) Best: plant or pilot data for the same system; otherwise the O'Connell correlation $E_o(\alpha\mu)$.` } ] },
    { id: "2021-22-Q5", q: 5, section: "B", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q5a", label: "(a)", marks: "7",
          topic: "vle", sub: "Applicability of Raoult's and Henry's laws",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss the applicability of Raoult's Law and Henry's Law for vapor-liquid systems.`,
          solution: String.raw`| | Raoult's law | Henry's law |
|---|---|---|
| Form | $y_iP = x_iP_i^{sat}(T)$ | $p_i = y_iP = H_ix_i$, i.e. $y_i = (H_i/P)x_i$ |
| Assumptions | ideal liquid solution (similar molecules, no heat of mixing, $\gamma_i = 1$), ideal gas (low P), component below its critical point | dilute solute ($x_i \to 0$) in a solvent; ideal gas; H is a fitted constant for that solute–solvent pair at that T |
| Valid for | mixtures of chemically similar components (benzene–toluene, hexane–heptane); also for the **solvent** of any dilute solution as $x \to 1$ | dissolved gases, often supercritical at system T (CO₂, CO, H₂S, O₂, N₂ in water), and any solute at low concentration, even strongly non-ideal ones |
| Fails for | non-ideal systems (alcohol–water, azeotropes) and high pressure; use $y_iP = \gamma_ix_iP_i^{sat}$ | concentrated solutions; H varies strongly with T (it rises with T, e.g. CO₂: 876 atm at 5°C, 3410 atm at 60°C, Wankat Table 12-1) |
| Used in | distillation: bubble and dew points, K and α ($\alpha = P_A^{sat}/P_B^{sat}$) | absorption and stripping: straight equilibrium lines, Kremser |

Both are limiting laws. Raoult describes the component in excess ($x \to 1$); Henry describes the trace component ($x \to 0$). For a binary, if Henry holds for the solute, Raoult holds for the solvent over the same range (Gibbs–Duhem).`,
          answer: String.raw`Raoult: ideal mixtures of similar molecules at low P (and the solvent of dilute solutions). Henry: dilute solutes and dissolved gases, with H depending on T. Non-ideal or concentrated systems need activity coefficients or data.` },
        { id: "2021-22-Q5b", label: "(b)", marks: "7",
          topic: "vle", sub: "Ethanol–water azeotrope limit (95.6 wt%)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`'The ethanol-water mixture cannot be separated beyond the point where the purity of ethanol is 95.635 wt% using the distillation process.' Explain this statement with proper reasonings.`,
          solution: String.raw`- Ethanol–water forms a **minimum-boiling (positive-deviation) azeotrope** at 1 atm. From the Perry data in the slides (Wankat Table 2-1): $x = y = 0.8943$ at 78.15°C, below the boiling points of both ethanol (78.3°C) and water (100°C).
- **In weight fraction:** 95.635 wt% ethanol corresponds to
$$x = \frac{95.635/46.07}{95.635/46.07 + 4.365/18.015} = \frac{2.0759}{2.0759 + 0.2423} = 0.8955$$
  This is the azeotrope (0.8943 mol gives 95.6 wt%).
- **At the azeotrope** $y = x$, so $\alpha = 1$. Vaporizing the liquid produces vapor of the *same* composition. A stage, or any number of stages, cannot change the composition.
- **On the McCabe–Thiele diagram** the equilibrium curve crosses the 45° line at x = 0.894. Starting from dilute feed, a column's top can only approach the azeotrope: the steps shrink to zero near it, even at total reflux (infinitely many stages). Above x = 0.894 the curve lies below the diagonal, so ethanol would become the *less* volatile component.
- **To go beyond it** something must change the equilibrium: pressure-swing distillation (the azeotrope shifts with P and vanishes below about 0.1 atm), azeotropic distillation with an entrainer (benzene or cyclohexane), extractive distillation (ethylene glycol), or a non-distillation step such as molecular-sieve adsorption or pervaporation.`,
          answer: String.raw`95.6 wt% (x = 0.894) is the minimum-boiling azeotrope: y = x and α = 1 there, so ordinary distillation at 1 atm cannot cross it; entrainers, pressure swing, sieves or membranes are needed.` },
        { id: "2021-22-Q5c", label: "(c)", marks: "7",
          topic: "advanced-distillation", sub: "Total reflux and minimum reflux on McCabe–Thiele",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Explain total reflux and minimum reflux with the help of McCabe Thiele diagrams.`,
          solution: String.raw`### Total reflux (R = L/D = ∞)
- All the overhead is returned and all the boilup is kept: $D = B = 0$ and F = 0 at steady state.
- $L/V = 1$ and $\bar{L}/\bar{V} = 1$, so **both operating lines coincide with the 45° line**. The feed composition and the q-line do not matter.
- Steps between the equilibrium curve and the diagonal give the **minimum number of stages $N_{min}$**, the absolute lower limit. It is used at start-up and for efficiency testing. For constant α this is the Fenske equation; for α = 2.5, $x_D = 0.95$, $x_B = 0.05$: $N_{min} \approx 6.5$.

![Total reflux: staircase between the α = 2.5 equilibrium curve and y = x, about 6.5 stages](fig/2021-22-Q5c-sol-1.svg)

### Minimum reflux ($R_{min}$)
- Lowering R reduces the slope L/V, and the operating lines move toward the equilibrium curve. At $R_{min}$ they **touch the equilibrium curve: a pinch**, where compositions stop changing from stage to stage. The stages crowd together and **N → ∞**.
- For an ideal system the pinch is at the intersection of the feed line with equilibrium. With saturated liquid at z = 0.5 and α = 2.5: $y^* = 0.714$, $(L/V)_{min} = (0.95 - 0.714)/(0.95 - 0.5) = 0.524$, and
$$R_{min} = \frac{(L/V)_{min}}{1 - (L/V)_{min}} = 1.10$$
- For non-ideal curves (e.g. ethanol–water) the operating line may first become **tangent** to the curve above the feed (a tangent pinch). $R_{min}$ is then set by the tangent line from $(x_D, x_D)$.
- The design reflux is between the limits: $R_{opt} \approx 1.05$–$1.25R_{min}$.

![Minimum reflux: rectifying and stripping lines meet the equilibrium curve on the feed line (pinch), steps crowd into the pinch](fig/2021-22-Q5c-sol-2.svg)`,
          answer: String.raw`Total reflux: D = B = 0, both operating lines on y = x, giving $N_{min}$. Minimum reflux: the operating line touches the equilibrium curve (pinch at the feed line or a tangent point), giving N → ∞; $R_{min} = (L/V)_{min}/[1-(L/V)_{min}]$.` },
        { id: "2021-22-Q5d", label: "(d)", marks: "7",
          topic: "batch", sub: "Variable reflux batch distillation for constant xD",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Explain the steps that can be followed to obtain constant distillate composition using batch distillation column with proper diagrams.`,
          solution: String.raw`As the still-pot liquid is depleted of the light component, a fixed number of stages with fixed L/V would give a falling $x_D$. To **hold $x_D$ constant the reflux ratio must increase during the run** (variable reflux).

**Steps (slides, Wankat ch. 9)**
1. Specify $x_D$, the number of equilibrium contacts N (still pot plus column stages), $F$, $x_F$ and $x_{W,final}$. Operating line: $y = (L/V)x + (1 - L/V)x_D$, pivoting about $(x_D, x_D)$.
2. **Initial L/V:** by trial and error, find the slope for which N steps from $x_D$ end exactly at $x_W = x_F$. Then $(L_0/D)_{initial} = (L/V)/(1 - L/V)$.
3. As distillate is withdrawn, $x_W$ falls. Increase L/V (rotate the operating line about $(x_D, x_D)$) so that N steps still end at the current $x_W$.
4. **Final L/V:** the slope for which N steps end at $x_{W,final}$, giving $(L_0/D)_{final}$.
5. **Amounts from mass balances.** No Rayleigh integration is needed, because $x_D$ is constant:
$$F = D_{total} + W_{final}, \qquad Fx_F = D_{total}x_D + W_{final}x_{W,final}$$
$$W_{final} = F\frac{x_D - x_F}{x_D - x_{W,final}}$$
6. **Operating time** $t_{op} = D_{total}/D$, where $D = V_{max}/(1 + L_0/D)$ varies; integrate over the run. Then $t_{batch} = t_{op} + t_{down}$.

**Illustration (slide D4, methanol–water, 3 contacts, $x_D = 0.84$, $x_F = 0.40$, $x_{W,final} = 0.08$, F = 10 kmol):** with the Wankat Table 2-7 data, L/V rises from about 0.32 ($L_0/D \approx 0.47$) to about 0.87 at the end. $W_{final} = 10(0.84 - 0.40)/(0.84 - 0.08) = 5.79$ kmol and $D_{total} = 4.21$ kmol.

![Variable-reflux batch: two operating lines through (xD, xD) = (0.84, 0.84), each with 3 steps, ending at xW = 0.40 (start) and 0.08 (end)](fig/2021-22-Q5d-sol.svg)`,
          answer: String.raw`Keep $x_D$ fixed and raise L/V during the run: find the initial L/V so that N steps reach $x_F$ and the final L/V so that they reach $x_{W,final}$; then $W_{final} = F(x_D-x_F)/(x_D-x_{W,f})$ and $D = F - W$ (no Rayleigh needed).` },
        { id: "2021-22-Q5e", label: "(e)", marks: "7",
          topic: "flash", sub: "Flash drum height from surge volume",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Discuss the steps that are required to calculate height of flash drum using surge volume.`,
          solution: String.raw`> Drum sizing is Wankat §2.9; the flash slides stop at the equations and the McCabe–Thiele solution.

**Vertical drum procedure (Wankat Eqs. 2-64 to 2-68)**
1. **Flash calculation first:** V, L, x, y and $T_{drum}$. Then get the properties: $MW_V$, $MW_L$, $\rho_V = PMW_V/(RT)$ (ideal gas), and $\rho_L$ from additive volumes, $1/\rho_L = \sum w_i/\rho_i$.
2. **Permissible vapor velocity:**
$$u_{perm} = K_{drum}\sqrt{(\rho_L - \rho_V)/\rho_V}$$
   - $K_{drum}$ (ft/s) comes from the Blackwell fit of the Watkins chart, $K = \exp[A + B\ln F_{lv} + C(\ln F_{lv})^2 + D(\ln F_{lv})^3 + E(\ln F_{lv})^4]$, with $F_{lv} = (W_L/W_V)\sqrt{\rho_V/\rho_L}$.
3. **Cross-section and diameter:** $A_c = V\,MW_V/(3600\,u_{perm}\rho_V)$ and $D = \sqrt{4A_c/\pi}$. Round D up to the next 6 in.
4. **Surge volume:** $V_{surge} = (\text{liquid volumetric flow}) \times t_{surge}$, where $Q_L = L\,MW_L/\rho_L$ and $t_{surge}$ is the hold-up time required for control or downstream (typically 5–10 min; up to about 30 min if the drum also serves as a surge tank).
5. **Liquid pool depth:** $h_L = V_{surge}/(\pi D^2/4)$.
6. **Free spaces** (Watkins):
   - Feed-nozzle centerline to the maximum liquid level: $h_f$ = 12 in + ½ the feed-line diameter (minimum 18 in).
   - Above the feed nozzle (vapor disengagement and demister): $h_V$ = 36 in + ½ the feed-line diameter (minimum 48 in).
7. **Total height:** $h_{total} = h_V + h_f + h_L$.
8. **Check** $3 \le h_{total}/D \le 5$. If below 3, allow a larger surge volume (taller drum). If above 5, use a horizontal drum (where $A_T = hD$ is the vapor disengagement area and $K_{horizontal} = 1.25K_{vertical}$).

![Vertical flash drum showing hV above the feed nozzle, hf to the maximum liquid level, and hL from the surge volume](fig/2021-22-Q5e-sol.svg)`,
          answer: String.raw`Find D from $u_{perm} = K\sqrt{(\rho_L-\rho_V)/\rho_V}$; set $V_{surge} = Q_Lt_{surge}$ and $h_L = V_{surge}/(\pi D^2/4)$; add $h_f$ (≥ 18 in) and $h_V$ (≥ 48 in); $h_{total} = h_V + h_f + h_L$; check $3 \le h/D \le 5$.` } ] },
    { id: "2021-22-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q6a", label: "(a)", marks: "15",
          topic: "vle", sub: "T–x–y diagram of ethanol–water from the enthalpy–composition chart",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Sketch the T-x-y diagram for Ethanol-Water system using Enthalpy-Composition Diagram attached in the question. Use at least 5 points for both T-x and T-y graph in the same graph paper. It is also required to write down the steps that you have followed to draw the graph. (The attached chart is the ethanol–water H–x diagram at 1 kg/cm², enthalpy in kcal/kg against weight fraction alcohol, with boiling and dew lines, isothermal tie lines labelled 99.1°C … 77.65°C, and the auxiliary line for interpolating equilibrium compositions; Wankat Fig. 2-4.)`,
          solution: String.raw`**What the chart shows:** the **boiling line** (saturated liquid) at the bottom and the **dew line** (saturated vapor) at the top. Straight **isothermal tie lines** join a saturated liquid of composition x to the vapor y in equilibrium with it, and each tie line is labelled with its temperature. Compositions are in **weight fraction ethanol**.

**Steps**
1. Choose a labelled tie line, e.g. 89°C.
2. Follow it down to the **boiling line** and read the composition on the x-axis: that is the liquid $x$ (a T–x point).
3. Follow the same tie line up to the **dew line** and read the composition: that is the vapor $y$ (a T–y point at the same T).
4. If an unlabelled temperature is needed, use the **auxiliary line**: from x on the boiling line go vertically up to the auxiliary line, then horizontally to the dew line to get y.
5. Repeat for at least 5 tie lines spread over the range. Add the end points: pure water at the left axis (99.1°C on the chart at 1 kg/cm²) and the azeotrope (x = y ≈ 0.956, about 77.7–78.2°C).
6. On one graph (T against weight fraction) plot the x points and join them as the **T–x (bubble-point) curve**, then plot the y points as the **T–y (dew-point) curve**. Join each pair with a horizontal tie line. Label the vapor, L + V and liquid regions and the azeotrope where the curves touch.

**Points used** (tie-line ends read on the chart; they agree, to about ±0.01 wt frac, with the Perry 1 atm data of the slides / Wankat Table 2-1 converted to wt fraction, which are the values listed; the chart is at 1 kg/cm² = 0.968 atm, so its temperatures are about 0.5–1°C lower):

| T, °C | x (liquid), wt frac | y (vapor), wt frac |
|---|---|---|
| 100 | 0 | 0 |
| 95.5 | 0.047 | 0.344 |
| 89.0 | 0.166 | 0.620 |
| 86.7 | 0.215 | 0.665 |
| 84.1 | 0.337 | 0.726 |
| 82.3 | 0.474 | 0.764 |
| 80.7 | 0.627 | 0.801 |
| 79.3 | 0.774 | 0.847 |
| 78.4 | 0.883 | 0.901 |
| 78.15 (azeotrope) | 0.956 | 0.956 |
| 78.3 | 1.0 | 1.0 |

(Mole-to-weight conversion, for checking: $w = 46.07x/[46.07x + 18.015(1-x)]$, molar masses from Çengel Table A-1.)

![Ethanol–water T–x–y diagram in weight fraction: boiling curve, dew curve, tie lines and the azeotrope at 0.956 wt fraction, 78.15 °C](fig/2021-22-Q6a-sol.svg)

**Shape to note:** the T–x curve falls steeply for x < 0.2 and is very flat above 0.4. The two curves converge at the minimum-boiling azeotrope, where the gap between them (and so the ease of separation) vanishes.`,
          answer: String.raw`Read each labelled tie line's ends: on the boiling line gives (T, x), on the dew line gives (T, y); use the auxiliary line for intermediate T. Plot T–x and T–y on one graph: e.g. 89°C: 0.17/0.62; 84°C: 0.34/0.73; 80.7°C: 0.63/0.80 wt frac; azeotrope 0.956 at about 78°C.` },
        { id: "2021-22-Q6b", label: "(b)", marks: "20",
          topic: "flash", sub: "Methanol–water flash for x = 0.20 and horizontal drum sizing (h/D = 4)",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`We are separating a mixture of methanol and water in a flash drum at 1 atm pressure. If the feed is 30 mol% methanol and we desire a liquid product that is 20 mol% methanol, what V/F must be used? For a feed rate of 1000 lbmol/h, determine product flow rates and composition. The equilibrium data are attached (y–x figure for methanol–water at 1 atm). Now, you are required to design a horizontal flash drum by calculating the total length (h) and diameter. Use h/D = 4. Required information: density of methanol = 0.7914 g/cc; density of water = 1 g/cc; MW of methanol = 32.04; MW of water = 18.01;

$$K_{drum}(\mathrm{vertical}) = \exp[A + B\ln F_{lv} + C(\ln F_{lv})^2 + D(\ln F_{lv})^3 + E(\ln F_{lv})^4]$$

with A = −1.877, B = −0.815, C = −0.187, D = −0.0145, E = −0.001; $F_{lv} = (W_L/W_v)\sqrt{\rho_v/\rho_L}$, with $W_L$ and $W_v$ the liquid and vapor flow rates in weight units per hour; $K_{drum}(\mathrm{horizontal}) = 1.25K_{drum}(\mathrm{vertical})$.`,
          solution: String.raw`> The flash part is in the slides (problem D1c). Drum sizing is Wankat §2.9 (Problem 2.D12).

**Given:** $z = 0.30$, $x = 0.20$, $F = 1000$ lbmol/h, P = 1 atm; data from the figure (= Wankat Table 2-7); properties as listed.

**Find:** V/F, V, L, y; horizontal drum D and h with h/D = 4.

**Assumptions:** equilibrium flash; ideal gas vapor; ideal (additive-volume) liquid; $\rho_L$ at the tabulated values.

### Flash
1. **Equilibrium** at x = 0.20: y = 0.579 (table: 57.9 mol%), $T_{drum} = 81.7$°C.
2. **Fraction vaporized** (operating line through (z, z), slope −L/V):
$$\frac{V}{F} = \frac{z - x}{y - x} = \frac{0.30 - 0.20}{0.579 - 0.20} = 0.264$$
3. **Flows:** $V = 263.9$ lbmol/h at y = 0.579 methanol; $L = 736.1$ lbmol/h at x = 0.20.
   - Check: $263.9(0.579) + 736.1(0.20) = 300.0$ lbmol/h of methanol, which matches the feed.

![Flash McCabe–Thiele for methanol–water: operating line from (0.30, 0.30) with slope −2.79 to (0.20, 0.579)](fig/2021-22-Q6b-sol.svg)

### Horizontal drum (Wankat Eqs. 2-64, 2-65, 2-69a,b,e)
4. **Molar masses:** $MW_V = 0.579(32.04) + 0.421(18.01) = 26.13$; $MW_L = 0.20(32.04) + 0.80(18.01) = 20.82$.
5. **Mass flows:** $W_V = 263.9(26.13) = 6895$ lb/h; $W_L = 736.1(20.82) = 15{,}324$ lb/h.
6. **Vapor density:** $\rho_V = \dfrac{P\,MW_V}{RT} = \dfrac{1(26.13)}{0.7302(354.85 \times 1.8)} = 0.0560$ lb/ft³ (0.898 kg/m³).
7. **Liquid density:** mass fraction of methanol $= 0.20(32.04)/20.82 = 0.308$.
$$\frac{1}{\rho_L} = \frac{0.308}{0.7914} + \frac{0.692}{1.0} = 1.081 \Rightarrow \rho_L = 0.925\ \mathrm{g/cc} = 57.74\ \mathrm{lb/ft^3}$$
8. **Flow parameter:** $F_{lv} = (15{,}324/6895)\sqrt{0.0560/57.74} = 0.0692$, so $\ln F_{lv} = -2.670$.
9. **Drum constants:** $K_{vertical} = \exp[-1.877 + 2.176 - 1.334 + 0.276 - 0.051] = \exp(-0.809) = 0.445$ ft/s; $K_{horizontal} = 1.25(0.445) = 0.557$ ft/s.
10. **Permissible velocity:**
$$u_{perm} = 0.557\sqrt{(57.74 - 0.056)/0.056} = 17.86\ \mathrm{ft/s}$$
11. **Disengagement area.** For a horizontal drum the vapor rises through the liquid surface, so $A_T = hD$:
$$A_T = \frac{V\,MW_V}{3600\,u_{perm}\rho_V} = \frac{6895}{3600(17.86)(0.0560)} = 1.91\ \mathrm{ft^2}$$
12. **Diameter and length** with $h = CD$, C = 4:
$$D = \sqrt{\frac{A_T}{C}} = \sqrt{\frac{1.91}{4}} = 0.69\ \mathrm{ft}, \qquad h = 4D = 2.77\ \mathrm{ft}$$
   - Practical size: round D up to the next 6 in, giving **D = 1.0 ft, h = 4.0 ft** (0.30 m × 1.22 m).

**Checks:** the liquid flow is $15{,}324/57.74 = 265$ ft³/h (4.4 ft³/min). The 1 ft × 4 ft drum (3.1 ft³) half full holds only about 0.35 min of liquid. If a surge time of 5–10 min is required, the drum must be sized on liquid volume instead (about 22–44 ft³, e.g. D ≈ 2.5 ft, h ≈ 10 ft), and the vapor criterion is then easily met. A vertical drum by Eq. 2-67 would need D = 1.75 ft.`,
          answer: String.raw`V/F = 0.264; V = 263.9 lbmol/h at y = 0.579; L = 736.1 lbmol/h at x = 0.20 (T ≈ 81.7°C). Horizontal drum: $K_h$ = 0.557 ft/s, $u_{perm}$ = 17.9 ft/s, $A_T = hD$ = 1.91 ft², D = 0.69 ft, h = 2.8 ft (use 1.0 ft × 4.0 ft; larger if surge time is required).` } ] },
    { id: "2021-22-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q7a", label: "(a)", marks: "28",
          topic: "advanced-distillation", sub: "Acetone–ethanol, two feeds: feed lines, Rmin from feed 1, stages and feed locations",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A distillation column with a total condenser and partial reboiler is separating acetone (more volatile component) from ethanol. There are two feeds with flowrates $F_1$ = 100 mol/hr and $F_2$ = 200 mol/hr. Feed 1 has $z_1$ = 0.7 and is a saturated liquid. Feed 2 has $z_2$ = 0.4 and is a superheated vapor where approximately 1 mol of liquid will vaporize on the feed stage for each 10 mol of feed. We desire $X_D$ = 0.95 and $X_B$ = 0.05. Here, $(L/V) = 2(L/V)_{min}$. Use feed 1 to determine $(L/V)_{min}$. CMO is valid. The compositions given are in mole fraction of the more volatile component.
(i) Show the equations for feed lines and top operating line.
(ii) Determine the number of stages needed to achieve this separation and what is the optimal feed stage for feed 1?
The figure for Q. 7 shows the equilibrium y–x diagram for acetone and ethanol; perform the stage calculation on the graph.`,
          solution: String.raw`**Given:** $F_1 = 100$ mol/h, $z_1 = 0.7$, $q_1 = 1$; $F_2 = 200$ mol/h, $z_2 = 0.4$, superheated; $x_D = 0.95$, $x_B = 0.05$; total condenser, partial reboiler.

**Find:** feed lines, top operating line, N, optimum feed stages.

**Assumptions**
- **Misprint:** "(L/V) = 2(L/V)min" is impossible. From feed 1, $(L/V)_{min} = 0.592$, and twice that is 1.18 > 1, which cannot occur with D > 0. The intended specification is the usual one, **L/D = 2(L/D)min** (as in Wankat's problems), and that is used here.
- **Equilibrium:** acetone–ethanol at 1 atm from Wankat Problem 4.D7 (same as the slide table and the paper figure). Points below x = 0.10 are extended at constant α = 3.20 (the value at x = 0.10; this gives y = 0.144 at x = 0.05, consistent with the figure).

| x | 0.10 | 0.15 | 0.20 | 0.25 | 0.30 | 0.35 | 0.40 | 0.50 | 0.60 | 0.70 | 0.80 | 0.90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| y | 0.262 | 0.348 | 0.417 | 0.478 | 0.524 | 0.566 | 0.605 | 0.674 | 0.739 | 0.802 | 0.865 | 0.929 |

### (i) Feed lines and top operating line
1. **Feed 1** (saturated liquid, $q_1 = 1$): vertical line **x = 0.70**.
2. **Feed 2:** 1 mol of liquid vaporizes per 10 mol of feed, so $q_2 = -1/10 = -0.1$.
$$y = \frac{q_2}{q_2-1}x - \frac{z_2}{q_2-1} = \frac{-0.1}{-1.1}x + \frac{0.4}{1.1} \Rightarrow \mathbf{y = 0.0909x + 0.3636}$$
3. **Minimum reflux from feed 1:** pinch where x = 0.70 meets equilibrium, at y = 0.802.
$$\left(\frac{L}{V}\right)_{min} = \frac{0.95 - 0.802}{0.95 - 0.70} = 0.592, \qquad \left(\frac{L}{D}\right)_{min} = \frac{0.592}{0.408} = 1.451$$
   - No tangent pinch: the line from (0.95, 0.95) stays below the curve between 0.7 and 0.95 (at x = 0.8 the line is at 0.861 and the curve at 0.865).
4. **Operating reflux:** $L/D = 2(1.451) = 2.902$, so $L/V = 2.902/3.902 = 0.744$.
5. **Top operating line:**
$$y = 0.744x + (1 - 0.744)(0.95) \Rightarrow \mathbf{y = 0.744x + 0.2435}$$

### (ii) Stages and feed locations
6. **External balances:** $D + B = 300$ and $0.95D + 0.05B = 100(0.7) + 200(0.4) = 150$, so D = 150 and B = 150 mol/h.
7. **Section flows:**
   - Top: $L = 2.902(150) = 435.3$, $V = 585.3$.
   - Middle (below F₁): $L' = L + F_1 = 535.3$, $V' = V = 585.3$, slope 0.915. Line: $y = 0.915x + (Dx_D - F_1z_1)/V' = 0.915x + 0.1239$.
   - Bottom (below F₂): $\bar{L} = L' + q_2F_2 = 515.3$, $\bar{V} = V' - (1-q_2)F_2 = 365.3$, slope 1.411. Line: $y = 1.411x - 0.0205$.
8. **Intersections:** top and middle meet at x = 0.70 (y = 0.764). Middle and bottom meet on the F₂ feed line at x = 0.291, y = 0.390.
9. **Stepping from the top**, switching lines at the optimum points:

| Stage | y | x | Section |
|---|---|---|---|
| 1 | 0.950 | 0.930 | top |
| 2 | 0.935 | 0.908 | top |
| 3 | 0.919 | 0.884 | top |
| 4 | 0.901 | 0.856 | top |
| 5 | 0.880 | 0.824 | top |
| 6 | 0.856 | 0.786 | top |
| 7 | 0.828 | 0.742 | top |
| **8 (F₁)** | 0.795 | 0.689 | crosses x = 0.70 |
| 9 | 0.754 | 0.624 | middle |
| 10 | 0.694 | 0.531 | middle |
| 11 | 0.610 | 0.407 | middle |
| **12 (F₂)** | 0.496 | 0.269 | crosses x = 0.291 |
| 13 | 0.359 | 0.158 | bottom |
| 14 | 0.203 | 0.074 | bottom |
| 15 | 0.083 | 0.028 | passes $x_B$ = 0.05 |

Fraction of the last stage = $(0.074 - 0.05)/(0.074 - 0.028) = 0.52$.

**Result: 14.5 equilibrium stages, so 15 stages (14 trays + partial reboiler). Optimum feed for F₁ is stage 8 and for F₂ stage 12 from the top.**

![Acetone–ethanol McCabe–Thiele with two feeds: top line slope 0.744, middle 0.915, bottom 1.411; F1 vertical at 0.7, F2 feed line slope 0.091; 14.5 stages, F1 on stage 8, F2 on stage 12](fig/2021-22-Q7a-sol.svg)

**Exam tip:** with two feeds there are three operating lines. The upper feed changes L only (saturated liquid). The superheated lower feed reduces both $\bar{L}$ and $\bar{V}$, and its feed line is nearly horizontal (slope 0.09).`,
          answer: String.raw`F₁ line x = 0.70; F₂ line y = 0.0909x + 0.364 (q = −0.1); $(L/V)_{min}$ = 0.592, so L/D = 2(L/D)min = 2.90 (misprint: 2(L/V)min > 1); top line y = 0.744x + 0.2435; 14.5, so 15 stages incl. reboiler; F₁ on stage 8, F₂ on stage 12.` },
        { id: "2021-22-Q7b", label: "(b)", marks: "7",
          topic: "advanced-distillation", sub: "Open steam distillation: McCabe–Thiele and applicability",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Explain open steam distillation with McCabe-Thiele analysis and write down its applicability.`,
          solution: String.raw`**What it is:** instead of a reboiler, saturated steam S is sparged directly into the bottom stage. It supplies both heat and stripping vapor. The heavy component (water) is the steam itself.

**Analysis (CMO, saturated steam, pure water so $y_{N+1} = 0$)**
1. Bottom-section flows: $\bar{V} = S$ and $\bar{L} = B$ (the steam condenses or vaporizes molar-equivalently).
2. Bottom operating line, from a balance below stage k:
$$\bar{V}y_{k+1} + Bx_B = \bar{L}x_k \Rightarrow y = \frac{\bar{L}}{\bar{V}}x - \frac{B}{S}x_B = \frac{B}{S}(x - x_B)$$
   It passes through **$(x_B, 0)$ on the x-axis**, not through $(x_B, x_B)$.
3. Overall balance: $F + S = D + B$, so B is larger than in a reboiled column (it includes the condensed steam). Hence, for the same recovery, $x_B$ is more dilute.
4. The top line and the feed line are unchanged. Step from $x_D$ down to $x_B$. The last step goes below the diagonal toward the x-axis, and the bottom stage is a real tray (no reboiler stage).

**Slide example** (methanol–water, F = 350 kmol/h, z = 0.6, q = 0.7, $L_0/D = 3$, $x_D = 0.95$, $x_B = 0.08$): balances give D = 160, B = 725, S = 535 kmol/h, and bottom slope B/S = 1.355. Stepping gives 4.9, so **5 equilibrium stages with the feed on stage 3**, as in the slide.

![Open steam McCabe–Thiele (slide example): top line L/V = 0.75, bottom line from (xB, 0) with slope 1.355, about 5 stages, feed on stage 3](fig/2021-22-Q7b-sol.svg)

**Applicability**
- The bottoms is essentially **water** (the heavy key is water), e.g. methanol–water, ethanol–water, or stripping volatile organics from wastewater.
- **Saves the reboiler:** cheaper, no heat-transfer surface to foul, useful with corrosive or fouling bottoms, and steam is cheap.
- The cost: more water in the bottoms (larger B, more dilute $x_B$), and slightly more stages than with a reboiler for the same $x_B$ (the reboiler is lost as an equilibrium stage).
- It should not be used when water would contaminate the product or create a large wastewater load.`,
          answer: String.raw`Live steam replaces the reboiler: $\bar V = S$, $\bar L = B$, and the bottom line $y = (B/S)(x - x_B)$ passes through $(x_B, 0)$. Use it when the bottoms is water (alcohol–water, wastewater stripping); it saves a reboiler but dilutes the bottoms.` } ] },
    { id: "2021-22-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q8a", label: "(a)", marks: "25",
          topic: "batch", sub: "Ethanol–water batch, pot + 9 contacts, L/D = 2/3, 10% → 0.4%: Rayleigh",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`We wish to batch distill a mixture of ethanol and water. The feed is 10.0 mol% ethanol. Operation is at 1.0 atmosphere. The batch distillation system consists of a still pot plus a column with the equivalent of 9 equilibrium contacts and a total condenser. We operate at a constant external reflux ratio of 2/3. The initial charge to the still pot is 1000 kg. We desire a final still pot concentration of 0.004 mole fraction ethanol. Equilibrium data are in the figure for Q. 8(a). Perform the stage calculation in the figure and attach with the script. Calculate $W_{final}$ and $D_{total}$ in kmole, and $x_{D,avg}$.`,
          solution: String.raw`**Given:** $x_F = 0.10$, 1000 kg charge, $x_{W,final} = 0.004$; constant $L_0/D = 2/3$; still pot plus 9 contacts in the column; total condenser.

**Find:** $W_{final}$, $D_{total}$ (kmol) and $x_{D,avg}$.

**Assumptions:** CMO; negligible holdup; equilibrium from Wankat Table 2-1 (ethanol–water, 1 atm, the same Perry data as in the slides and the paper figure) with linear interpolation. "Still pot plus 9 contacts" is taken as 10 equilibrium contacts; 9 contacts give the same answer, see step 3. Molar masses 46.07 and 18.015 (Çengel Table A-1).

1. **Charge in kmol:** $\bar{M} = 0.10(46.07) + 0.90(18.015) = 20.82$, so $F = 1000/20.82 = 48.03$ kmol.
2. **Operating line:** $L/V = (2/3)/(5/3) = 0.4$, so $y = 0.4x + 0.6x_D$.
3. **$x_D$–$x_W$ relation:** for a trial $x_D$, step 10 contacts down from $(x_D, x_D)$ to get $x_W$.
   - With L/V = 0.4 so small, the staircase **pinches**. Near the feed composition it pinches against the S-shaped curve. Late in the run the bottom-end limit is $y_W \ge 0.6x_D$ (the operating line meets the y-axis at $0.6x_D$).
   - So the extra stages barely matter: 9 and 10 contacts give identical results to 4 figures. This is Wankat's "short cut": $x_D$ is fixed essentially by the pinch.

| $x_W$ | $x_D$ | $1/(x_D - x_W)$ |
|---|---|---|
| 0.100 | 0.669 | 1.757 |
| 0.090 | 0.647 | 1.794 |
| 0.080 | 0.621 | 1.848 |
| 0.070 | 0.587 | 1.933 |
| 0.060 | 0.525 | 2.149 |
| 0.052 | 0.476 | 2.361 |
| 0.040 | 0.401 | 2.769 |
| 0.030 | 0.339 | 3.236 |
| 0.020 | 0.277 | 3.893 |
| 0.015 | 0.214 | 5.033 |
| 0.010 | 0.142 | 7.550 |
| 0.006 | 0.085 | 12.58 |
| 0.004 | 0.057 | 18.87 |

   - At $x_W = 0.004$: $y_W = 0.0358$ (linear interpolation from 0 to 0.019), so $x_D \le y_W/0.6 = 0.060$ and the column delivers 0.057.

4. **Rayleigh integral** (numerical Simpson, 400 intervals):
$$\int_{0.004}^{0.10}\frac{dx_W}{x_D - x_W} = 0.311$$
5. **Products:**
$$W_{final} = 48.03\,e^{-0.311} = 35.2\ \mathrm{kmol}, \qquad D_{total} = 48.03 - 35.2 = 12.8\ \mathrm{kmol}$$
$$x_{D,avg} = \frac{48.03(0.10) - 35.2(0.004)}{12.8} = \frac{4.803 - 0.141}{12.83} = 0.363$$

![Ethanol–water batch McCabe–Thiele at the start: operating line y = 0.4x + 0.6xD with xD = 0.669, ten contacts pinching above xW = 0.10](fig/2021-22-Q8a-sol.svg)

![Rayleigh integrand 1/(xD − xW) against xW from 0.004 to 0.10; area = 0.311](fig/2021-22-Q8a-sol2.svg)

**Sensitivity:** the dilute end of the data is coarse (no points between x = 0 and 0.019). Extending the curve with constant α = 10.6 below x = 0.019, instead of a straight line, gives area 0.301, W = 35.6, D = 12.5 and $x_{D,avg}$ = 0.374. Answers of W ≈ 35–36, D ≈ 12.5–13 kmol and $x_{D,avg}$ ≈ 0.36–0.37 are equivalent.

**Comment:** with L/D = 2/3 the reflux is too low to use 10 contacts. $x_D$ starts at only 0.67 (well below the azeotrope) and collapses at the end of the run.`,
          answer: String.raw`F = 48.0 kmol; L/V = 0.4; area = 0.311; $W_{final}$ ≈ 35.2 kmol, $D_{total}$ ≈ 12.8 kmol, $x_{D,avg}$ ≈ 0.36 (pinch-limited: $x_D$ falls from 0.67 to 0.06).` },
        { id: "2021-22-Q8b", label: "(b)", marks: "10",
          topic: "mccabe-thiele", sub: "Feed-line slopes for ethanol–water feeds (H–x chart)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate the feed line slopes for the following feeds: (i) Feed is 40% ethanol and is a liquid at 20°C. (ii) Feed is 50% ethanol and is a subcooled liquid. One mole of vapor must be condensed to heat 12 moles of feed to their boiling point. (Use the enthalpy–composition chart attached for Q. 6(a) and 8(b).)`,
          solution: String.raw`**Basis:** $q = \dfrac{H - h_F}{H - h} = \dfrac{\bar{L} - L}{F}$ and slope $= q/(q-1)$. Percentages are taken as **mol%**, as in the parent Wankat Problem 4.D2 ("all percentages are mol%"). The chart is in weight fraction, so convert first. Because q is a ratio of enthalpy differences at the same composition, using kcal/kg gives the same q as kcal/kmol.

### (i) 40 mol% ethanol, liquid at 20°C
1. **Weight fraction:** $w = \dfrac{0.40(46.07)}{0.40(46.07) + 0.60(18.015)} = 0.630$
2. **Chart readings at w = 0.63** (kcal/kg, read approximately):
   - $h_F$ (20°C liquid isotherm) ≈ 10
   - $h$ (boiling line, about 80.7°C) ≈ 65
   - $H$ (dew line) ≈ 400
3. **Feed quality:**
$$q = \frac{400 - 10}{400 - 65} = \frac{390}{335} = 1.16$$
   - Check with sensible heat: $q = 1 + C_p\Delta T/\lambda \approx 1 + 0.92(80.7 - 20)/335 = 1.17$.
4. **Slope:** $q/(q-1) = 1.16/0.16 \approx 7.0$ (about 6.9–7.3 for ±5 kcal/kg reading error).

If "40%" is read as 40 wt% instead: $h_F$ ≈ 9, $h$ ≈ 75, $H$ ≈ 480, so q ≈ 1.16 and slope ≈ 7.1. The answer is practically the same.

### (ii) 50 mol% ethanol, subcooled
1. Heating 12 mol of feed to its boiling point condenses 1 mol of vapor, so $\bar{L} = L + F + F/12$.
2. $q = 1 + 1/12 = 13/12 = 1.083$
3. Slope $= \dfrac{13/12}{1/12} = 13$ (no chart needed).

![Feed lines on the ethanol–water diagram: (i) through z = 0.40 with slope about 7.0; (ii) through z = 0.50 with slope 13](fig/2021-22-Q8b-sol.svg)`,
          answer: String.raw`(i) $q = (H-h_F)/(H-h) \approx (400-10)/(400-65) = 1.16$, slope ≈ 7.0; (ii) $q = 13/12 = 1.083$, slope = 13.` } ] }
  ]
});
