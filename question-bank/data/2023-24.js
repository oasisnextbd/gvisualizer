QB.paper({
  year: "2023-24", date: "24/08/2025", marks: 210,
  rules: String.raw`Section A: Q1 is compulsory + any two of Q2–Q4. Section B: any three of Q5–Q8. Heat Transfer Data Booklet supplied; an "Additional Information" formula sheet (Nusselt condensation, Rohsenow, Zuber with the C_cr table, C_sf table, σ of water, flat-plate relations, tube-entrance charts) is attached.`,
  questions: [
    { id: "2023-24-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q1a", label: "(a)", marks: "6+3",
          topic: "natural-convection", sub: "Mixed convection on a circuit board (Gr/Re²)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A 12-cm-high and 20-cm-wide circuit board houses 100 closely spaced logic chips on its surface, each dissipating 0.05 W. The board is cooled by a fan that blows air over the hot surface of the board at 35°C at a velocity of 0.85 m/s in the vertical upward direction along the 12 cm side. The average surface temperature of the board is 80°C. The heat transfer from the back surface of the board is negligible. It is a well-known phenomenon that natural convection is always accompanied by forced convection – sometimes assisting the natural convection heat transfer and sometimes opposing it. However, it is worth determining the extent of the heat transfer by both mechanisms.

(i) Identify which of the convection mechanisms is dominant here. Support your answer with appropriate mathematical analysis. **[6]**

(ii) For this system, with the help of the sketch, determine whether the forced convection will assist or oppose the natural convection with appropriate reasoning. **[3]**

![Vertical circuit board (L = 12 cm) with air blown upward along it](fig/2023-24-Q1a.svg)`,
          solution: String.raw`**Given:** $L = 0.12$ m (in the flow direction), $T_s = 80^\circ$C, $T_\infty = 35^\circ$C, $V = 0.85$ m/s upward; total dissipation $100 \times 0.05 = 5$ W.

**Find:** the dominant mechanism (Gr/Re²), and whether the flows assist or oppose.

**Assumptions:** steady state; air is an ideal gas ($\beta = 1/T_f$); properties at the film temperature; the board is a vertical flat plate of characteristic length $L = 0.12$ m.

### (i) Dominant mechanism
1. Film temperature: $T_f = (80 + 35)/2 = 57.5^\circ$C = 330.65 K. Air properties (Holman Table A-5, interpolated between 300 and 350 K): $\nu = 1.880\times10^{-5}$ m²/s, $k = 0.02856$ W/m·°C, $\mathrm{Pr} = 0.701$; $\beta = 1/330.65 = 3.024\times10^{-3}$ K⁻¹.

2. Grashof number:
$$\mathrm{Gr}_L = \frac{g\beta(T_s - T_\infty)L^3}{\nu^2} = \frac{9.81 \times 3.024\times10^{-3} \times 45 \times 0.12^3}{(1.880\times10^{-5})^2} = 6.53\times10^{6}$$

3. Reynolds number:
$$\mathrm{Re}_L = \frac{VL}{\nu} = \frac{0.85 \times 0.12}{1.880\times10^{-5}} = 5426\quad(\text{laminar})$$

4. Ratio:
$$\frac{\mathrm{Gr}_L}{\mathrm{Re}_L^2} = \frac{6.53\times10^6}{(5426)^2} = 0.22$$

5. Interpretation: the ratio is below 1 but not ≪ 1 (it lies in the mixed-convection band, roughly 0.1–10). **Forced convection is the dominant mechanism**, but natural convection is *not negligible* and should be included.

6. Supporting estimate:
   - Forced: $\mathrm{Nu} = 0.664\,\mathrm{Re}^{1/2}\mathrm{Pr}^{1/3} = 43.5$, so $h_F \approx 10.3$ W/m²°C.
   - Natural: Churchill–Chu with $\mathrm{Ra} = 4.6\times10^6$ gives $\mathrm{Nu} = 25.0$, so $h_N \approx 6.0$ W/m²°C.
   - The forced value is larger, but the natural one is the same order of magnitude, which confirms mixed convection with forced dominant.

### (ii) Assisting or opposing?
*Sketch:* vertical board with the hot face exposed; small arrows show the buoyant warm air rising along the face; large arrows at the bottom show the fan flow going up.
- The board (80°C) is hotter than the air (35°C). Air next to it is heated, becomes lighter, and the buoyancy force pushes it **upward**.
- The fan also blows the air **upward** along the 12 cm side.
- Both flows act in the same direction, so this is **assisting (aiding) flow**: buoyancy accelerates the near-wall air, thins the boundary layer and raises $h$ above the pure forced value. With downward fan flow the flows would oppose and $h$ would fall. A transverse flow would be transverse mixed convection.`,
          answer: String.raw`Gr ≈ 6.5×10⁶, Re ≈ 5.4×10³, Gr/Re² ≈ 0.22: forced convection dominates, but natural convection is not negligible (mixed). Hot plate with upward flow: buoyancy also acts upward, so the flows **assist**.` },
        { id: "2023-24-Q1b", label: "(b)", marks: "6+3",
          topic: "boiling", sub: "h curves: pool vs internal flow boiling",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the comparative heat transfer coefficient curve for pool boiling (with excess temperature) and internal flow boiling (with pipe length) with identifying the boiling regimes for both of the cases. Do you think flow boiling comes up with higher difficulties to analyze compared to pool boiling? Why/Why not? Rationalize.`,
          solution: String.raw`### Sketch 1: Pool boiling, $h$ (log) vs $\Delta T_{excess}$ (log)
| Regime ($\Delta T_{excess}$ for water at 1 atm) | Shape of $h$ |
|---|---|
| I Natural convection (< ~5°C) | low, rises slowly |
| II–III Nucleate boiling (isolated bubbles, then jets/columns; ~5–30°C) | rises steeply to a peak just before the CHF point |
| IV Transition boiling (~30–120°C) | falls sharply as a vapour blanket forms intermittently |
| V–VI Film boiling (> ~120°C, Leidenfrost point) | low; rises slowly at high ΔT as radiation adds |

Mark the critical heat flux (point C) and the Leidenfrost point (D) on the curve.

### Sketch 2: Internal flow boiling in a heated vertical tube, $h$ vs tube length (quality increases with length)
| Section along the tube | Flow pattern | $h$ |
|---|---|---|
| Single-phase liquid (forced convection) | subcooled liquid | low, constant |
| Subcooled / bubbly flow | bubbles at the wall | rises (onset of nucleate boiling) |
| Slug flow | large bubbles | keeps rising |
| Annular flow | liquid film on the wall, vapour core | **maximum**: thin-film evaporation |
| Transition (dryout) | film dries out | **sudden sharp drop** |
| Mist flow | droplets in vapour | low, slight recovery |
| Single-phase vapour | superheated vapour | lowest, vapour forced convection |

![h for pool boiling (against $\Delta T_{excess}$) and for flow boiling (along the tube)](fig/2023-24-Q1b-sol.svg)

### Is flow boiling harder to analyse? **Yes.**
- In pool boiling the vapour escapes through a free surface and the liquid around it is essentially stagnant. $\dot q$ depends mainly on $\Delta T_{excess}$, fluid properties and $C_{sf}$ (Rohsenow), plus geometry for CHF (Zuber).
- In a tube there is **no free surface**. Liquid and vapour are forced to flow together, and the **two-phase flow pattern changes continuously along the length** (bubbly → slug → annular → mist). Each pattern has a different mechanism and correlation.
- The local $h$ depends on many coupled variables: mass flux, vapour quality, the competition between nucleate and convective boiling, pressure, tube orientation and diameter, heat-flux distribution, and slip between phases.
- **Dryout / CHF** can occur at modest heat flux, set by local quality rather than ΔT. The pressure drop (and so $T_{sat}$) varies along the tube; flow instabilities and oscillations can occur.
- Accurate analysis therefore needs two-phase flow maps and empirical correlations (e.g. Chen-type superposition) instead of one curve.`,
          answer: String.raw`Pool: $h$ rises through natural convection and nucleate boiling to a peak near the CHF, falls in transition, and is low in film boiling. Flow: $h$ is low for liquid, rises through bubbly and slug flow to a maximum in annular flow, drops sharply at dryout, and is low for mist and vapour. Flow boiling is harder: no free surface, regimes change along the tube, and many coupled variables (G, x, p).` },
        { id: "2023-24-Q1c", label: "(c)", marks: "12",
          topic: "heat-exchangers", sub: "Double pipe: dirt factor from fouling history",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A double pipe exchanger was oversized because no data were available on the rate at which dirt accumulated. The exchanger was originally designed to cool 13,000 lb/hr of 100 percent acetic acid from 250°F to 135°F by heating 19,000 lb/hr of butyl alcohol from 100°F to 157°F. A design coefficient $U_D$ = 85 was employed, but during operation the hot fluid outlet temperature was found to be increasing at the average rate of 3°F per month. What dirt factor should have been specified for a 5-month cleaning cycle?`,
          solution: String.raw`**Given:** acid 13,000 lb/h, 250 → 135°F; butanol 19,000 lb/h, 100 → 157°F; $U_D = 85$ Btu/h·ft²·°F; the hot outlet rises 3°F/month; cleaning cycle 5 months.

**Find:** the dirt factor $R_d$ that builds up in 5 months.

![Double-pipe hairpin exchanger](fig/common-double-pipe.svg)

**Assumptions:**
- True counterflow (double pipe); constant flows, inlet temperatures and $c_p$; the area $A$ is fixed.
- The design point (135°F outlet with U = 85) is the clean start of operation. After 5 months the acid leaves at 135 + 5 × 3 = **150°F**.

1. The heat-capacity ratio is fixed by the design temperatures (so $c_p$ values are not needed):
$$\frac{w c}{W C} = \frac{T_1 - T_2}{t_2 - t_1} = \frac{250 - 135}{157 - 100} = 2.0175$$

2. Design (clean) condition. $\Delta t_1 = 250 - 157 = 93^\circ$F, $\Delta t_2 = 135 - 100 = 35^\circ$F.
$$\mathrm{LMTD}_d = \frac{93 - 35}{\ln(93/35)} = 59.35^\circ\mathrm{F},\qquad A = \frac{Q_d}{85 \times 59.35}$$

3. After 5 months: $T_2 = 150^\circ$F, so the duty falls to $Q_5 = Q_d \times (250 - 150)/115$.
$$t_2 = 100 + \frac{100}{2.0175} = 149.6^\circ\mathrm{F}$$
$\Delta t_1 = 250 - 149.6 = 100.4^\circ$F, $\Delta t_2 = 150 - 100 = 50^\circ$F.
$$\mathrm{LMTD}_5 = \frac{100.4 - 50}{\ln(100.4/50)} = 72.31^\circ\mathrm{F}$$

4. Coefficient after 5 months, with the same $A$:
$$U_5 = \frac{Q_5}{A\,\mathrm{LMTD}_5} = 85 \times \frac{100}{115} \times \frac{59.35}{72.31} = 60.7\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

5. Dirt factor:
$$R_d = \frac{1}{U_5} - \frac{1}{U_{clean}} = \frac{1}{60.7} - \frac{1}{85} = 0.0047\ \mathrm{h\,ft^2\,^\circ F/Btu}$$

Month by month: $R_d$ = 0.0009, 0.0018, 0.0027, 0.0037, **0.0047** (fouling builds up roughly linearly).

**Answer:** specify $R_d \approx 0.005$ h·ft²·°F/Btu. The exchanger should then be designed with $U_D \approx 61$, about 40% more area than the design based on $U = 85$.

> Misprint note: with the printed temperatures the heat balance needs $c_{p,butanol} \approx 0.70$ for $c_{p,acid} \approx 0.51$. The method above uses only temperature ratios, so the answer does not depend on $c_p$.`,
          answer: String.raw`After 5 months $T_2 = 150^\circ$F, $t_2 = 149.6^\circ$F, LMTD 59.4 → 72.3°F, $U_5 \approx 60.7$, so $R_d = 1/60.7 - 1/85 \approx 0.0047$ (≈ 0.005) h·ft²·°F/Btu.` },
        { id: "2023-24-Q1d", label: "(d)", marks: "5",
          topic: "heat-exchangers", sub: "Controlling resistance",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`In a heat exchanger, can increasing the heat transfer coefficient of one fluid compensate for poor heat transfer on the other side? Explain with numbers.`,
          solution: String.raw`**No, only up to a limit.** The film resistances are in series (thin clean wall, equal areas):
$$\frac{1}{U} = \frac{1}{h_1} + \frac{1}{h_2}\quad\Rightarrow\quad U < \min(h_1, h_2)$$
The smaller $h$ (the **controlling resistance**) caps $U$.

Example: gas on one side with $h_1 = 50$ W/m²K, water on the other.

| $h_1$ | $h_2$ | $U$ (W/m²K) |
|---|---|---|
| 50 | 1,000 | 47.6 |
| 50 | 2,000 (×2) | 48.8 (+2.4%) |
| 50 | 10,000 (×10) | 49.8 (+4.5%) |
| 50 | ∞ | 50.0 (limit) |
| 100 (×2) | 1,000 | 90.9 (+91%) |
| 200 (×4) | 1,000 | 166.7 (+250%) |

Raising the good side tenfold gains less than 5%. Doubling the poor side almost doubles U. To improve the exchanger, attack the **controlling (low-h) side**: higher velocity, fins on the gas side, a different tube-side/shell-side allocation, or removing fouling there. This is why finned tubes are used on air coolers.`,
          answer: String.raw`No. $1/U = 1/h_1 + 1/h_2$, so U cannot exceed the smaller h. With $h_1 = 50$, raising $h_2$ from 1000 to 10,000 lifts U only from 47.6 to 49.8, while doubling $h_1$ gives U = 90.9. Improve the controlling side.` },
      ] },
    { id: "2023-24-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw`Dry ammonia gas at 83 psia and at a rate of 9872 lb/hr is discharged from a compressor at 245°F and is to be fed to a reactor at 95°F using cooling water from 85 to 95°F. A pressure drop of 2.0 psi is allowable on the gas and 10.0 psi on the water. Available for the service is a 23¼ in. ID shell and tube exchanger having 364 tubes of ¾ in. OD, 16 BWG, 8′0″ long, laid out on 15/16-in. triangular pitch. The bundle is arranged for eight passes, and baffles are spaced 12 in. apart.

At average temperatures, the following fluid properties are available:

| Fluid property | Ammonia (shell side) | Water (tube side) |
|---|---|---|
| $C_p$ (Btu/lbm·°F) | 0.53 | 1.0 |
| μ (cP) | 0.012 | 0.82 |
| k (Btu/h·ft·°F) | 0.017 | 0.36 |`,
      parts: [
        { id: "2023-24-Q2a", label: "(a)", marks: "7",
          topic: "shell-tube", sub: "Temperature profile, LMTD and F_T (1-8)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Draw a temperature profile along the heat exchanger length, and find the corrected log mean temperature difference.`,
          solution: String.raw`**Given:** hot ammonia $T_1 = 245^\circ$F → $T_2 = 95^\circ$F (shell); water $t_1 = 85^\circ$F → $t_2 = 95^\circ$F (tube); 1 shell pass, 8 tube passes.

**Find:** the temperature profile sketch and $\Delta t = F_T \times \mathrm{LMTD}$.

**Assumptions:** no heat loss; constant $c_p$.

1. **Temperature profile (sketch):** T (°F) vertical, length horizontal. The ammonia curve falls steeply from 245°F to 95°F (gas cooling, sensible heat only, since dry gas does not condense). The water line is nearly flat, rising only from 85 to 95°F. With multipass flow the water line zig-zags between 85 and 95°F. The two streams come close at the cold end (95°F gas vs 85°F water inlet), which is a small approach. The hot outlet (95°F) equals the cold outlet (95°F), a temperature "meet" that makes $F_T$ fall well below 1.

![1-8 gas cooler: ammonia falls from 245°F to 95°F, water zig-zags from 85°F to 95°F](fig/2023-24-Q2a-sol.svg)

2. Heat balance:
$$Q = WC(T_1 - T_2) = 9872 \times 0.53 \times 150 = 784{,}800\ \mathrm{Btu/h}$$
$$w = \frac{Q}{c(t_2 - t_1)} = \frac{784{,}800}{1.0 \times 10} = 78{,}480\ \mathrm{lb/h\ water}$$

3. Counterflow LMTD. $\Delta t_h = 245 - 95 = 150^\circ$F, $\Delta t_c = 95 - 85 = 10^\circ$F.
$$\mathrm{LMTD} = \frac{150 - 10}{\ln(150/10)} = 51.7^\circ\mathrm{F}$$

4. Correction factor for 1 shell pass with an even number of tube passes (1-2 chart, Holman Fig. 10-8 / Kern Fig. 18):
$$R = \frac{T_1 - T_2}{t_2 - t_1} = \frac{150}{10} = 15,\qquad S = \frac{t_2 - t_1}{T_1 - t_1} = \frac{10}{160} = 0.0625$$
$$F_T = \frac{\sqrt{R^2+1}\,\ln\dfrac{1-S}{1-RS}}{(R-1)\ln\dfrac{2 - S(R+1-\sqrt{R^2+1})}{2 - S(R+1+\sqrt{R^2+1})}} = 0.838$$

5. Corrected temperature difference:
$$\Delta t = F_T \times \mathrm{LMTD} = 0.838 \times 51.7 = 43.3^\circ\mathrm{F}$$
$F_T > 0.75$, so the 1-8 arrangement is acceptable.

**Caloric temperatures:** the Kc–Fc chart is for petroleum fractions, so arithmetic means are used: $T_c = 170^\circ$F (gas), $t_c = 90^\circ$F (water). The properties are given at these averages.`,
          answer: String.raw`$Q = 7.85\times10^5$ Btu/h, water = 78,480 lb/h; LMTD = 51.7°F, R = 15, S = 0.0625, $F_T \approx 0.84$, so $\Delta t \approx 43.3^\circ$F.` },
        { id: "2023-24-Q2b", label: "(b)", marks: "16",
          topic: "shell-tube", sub: "Kern rating: h_i (water) and h_o (ammonia gas)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Formulate the thermal design calculations and generate the tube side and shell side heat transfer coefficients, $h_i$ and $h_o$, respectively.`,
          solution: String.raw`**Data:** ¾ in OD, 16 BWG tubes: ID $= 0.620$ in, flow area $a'_t = 0.302$ in²/tube, external surface 0.1963 ft²/ft (Kern Table 10). $N_t = 364$, $n = 8$, $L = 8$ ft, $P_T = 15/16 = 0.9375$ in (triangular), $C' = P_T - d_o = 0.1875$ in, $B = 12$ in, shell ID $= 23.25$ in. Viscosities: μ (lb/ft·h) = cP × 2.42.

**Assumptions:** $\phi = (\mu/\mu_w)^{0.14} = 1$ on both sides (no wall viscosities given); 25% cut segmental baffles; properties at the caloric (average) temperatures.

### Shell side: ammonia gas (hot)
1. Flow area:
$$a_s = \frac{\mathrm{ID} \times C' \times B}{144\,P_T} = \frac{23.25 \times 0.1875 \times 12}{144 \times 0.9375} = 0.3875\ \mathrm{ft^2}$$

2. Mass velocity:
$$G_s = \frac{W}{a_s} = \frac{9872}{0.3875} = 25{,}480\ \mathrm{lb/h\,ft^2}$$

3. Equivalent diameter. From Kern Fig. 28, for ¾ in on 15/16 in triangular pitch, $d_e = 0.55$ in, so $D_e = 0.0458$ ft. The slides' formula $4(\tfrac12 P_T\cdot0.86P_T - \tfrac12\pi d_o^2/4)/(\tfrac12\pi d_o)$ gives 0.53 in.

4. Reynolds number, with $\mu = 0.012 \times 2.42 = 0.0290$ lb/ft·h:
$$\mathrm{Re}_s = \frac{D_eG_s}{\mu} = \frac{0.0458 \times 25{,}480}{0.0290} = 40{,}200$$

5. $j_H$: Kern Fig. 28 curve fit $j_H = 0.36\,\mathrm{Re}^{0.55} = 0.36\,(40{,}200)^{0.55} = 123$. The chart reads ≈ 115–120.

6. Prandtl term:
$$\left(\frac{c\mu}{k}\right)^{1/3} = \left(\frac{0.53 \times 0.0290}{0.017}\right)^{1/3} = (0.905)^{1/3} = 0.967$$

7. Shell-side coefficient:
$$h_o = j_H\frac{k}{D_e}\left(\frac{c\mu}{k}\right)^{1/3}\phi_s = 123 \times \frac{0.017}{0.0458} \times 0.967 = 44.0\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

### Tube side: water (cold)
8. Flow area:
$$a_t = \frac{N_t a'_t}{144\,n} = \frac{364 \times 0.302}{144 \times 8} = 0.0954\ \mathrm{ft^2}$$

9. Mass velocity and velocity:
$$G_t = \frac{w}{a_t} = \frac{78{,}480}{0.0954} = 822{,}500\ \mathrm{lb/h\,ft^2}$$
$$V = \frac{G_t}{3600 \times 62.5} = 3.66\ \mathrm{ft/s}\ \ \text{(good water velocity, 3–8 fps)}$$

10. Reynolds number, with $D = 0.620/12 = 0.0517$ ft and $\mu = 0.82 \times 2.42 = 1.984$ lb/ft·h:
$$\mathrm{Re}_t = \frac{DG_t}{\mu} = \frac{0.0517 \times 822{,}500}{1.984} = 21{,}400\quad(L/D = 155)$$

11. $j_H$: Kern Fig. 24 gives $j_H \approx 70$. This is consistent with the slides' reading of 42 at Re = 11,570 scaled by $\mathrm{Re}^{0.8}$. The fit $0.027\,\mathrm{Re}^{0.8}$ would give 79.

12. Prandtl term:
$$\left(\frac{c\mu}{k}\right)^{1/3} = \left(\frac{1.0 \times 1.984}{0.36}\right)^{1/3} = (5.51)^{1/3} = 1.766$$

13. Tube-side coefficient:
$$h_i = j_H\frac{k}{D}\left(\frac{c\mu}{k}\right)^{1/3} = 70 \times \frac{0.36}{0.0517} \times 1.766 = 862\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

14. Referred to the outside area:
$$h_{io} = h_i\frac{\mathrm{ID}}{\mathrm{OD}} = 862 \times \frac{0.620}{0.75} = 712\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

**Why it matters:** $h_o$ (gas, ≈ 44) is about 16 times smaller than $h_{io}$ (≈ 712), so the gas film controls U. The low-density gas is put in the shell, where a large flow area keeps its pressure drop within 2 psi.`,
          answer: String.raw`Shell (NH₃): $a_s = 0.388$ ft², $G_s = 25{,}480$, Re = 40,200, $j_H \approx 123$, $h_o \approx 44$ Btu/h·ft²·°F. Tube (water): $G_t = 8.2\times10^5$, V = 3.66 fps, Re = 21,400, $j_H \approx 70$, $h_i \approx 862$, $h_{io} \approx 712$ Btu/h·ft²·°F.` },
        { id: "2023-24-Q2c", label: "(c)", marks: "6",
          topic: "shell-tube", sub: "U_C, U_D and dirt factor",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate the minimum required dirt factor for the exchanger.`,
          solution: String.raw`*Interpretation:* find the dirt factor $R_d$ that the existing exchanger can accommodate while still doing the duty (from $U_C$ and $U_D$), and check it against what the service needs.

1. Clean overall coefficient:
$$U_C = \frac{h_{io}h_o}{h_{io} + h_o} = \frac{712 \times 44.0}{712 + 44.0} = 41.4\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

2. Available surface:
$$A = N_t\,(a''L) = 364 \times 0.1963 \times 8 = 571.6\ \mathrm{ft^2}$$

3. Design overall coefficient:
$$U_D = \frac{Q}{A\,\Delta t} = \frac{784{,}800}{571.6 \times 43.3} = 31.7\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

4. Dirt factor:
$$R_d = \frac{U_C - U_D}{U_C U_D} = \frac{41.4 - 31.7}{41.4 \times 31.7} = 0.0074\ \mathrm{h\,ft^2\,^\circ F/Btu}$$

5. Comparison with the service requirement: dry ammonia vapour about 0.001, plus cooling water (treated, < 125°F) about 0.001–0.002, so the required $R_d$ is ≈ 0.003. Since $R_{d,calc} = 0.0074 > 0.003$, the exchanger will perform the service with a margin. The over-surface is $(U_C - U_D)/U_C \approx 24\%$.

**Note:** in Kern's original version of this problem the tubes are 16 ft long ($A = 1142$ ft², $R_d \approx 0.04$, badly oversized). With 8 ft tubes the unit is close to right-sized.`,
          answer: String.raw`$U_C \approx 41.4$, $A = 571.6$ ft², $U_D \approx 31.7$ Btu/h·ft²·°F, so $R_d \approx 0.0074$ h·ft²·°F/Btu (> ≈ 0.003 required, acceptable).` },
        { id: "2023-24-Q2d", label: "(d)", marks: "6",
          topic: "shell-tube", sub: "TEMA specification sheet",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Compose a standard TEMA sheet using the blank format provided and attach it to your answer script.`,
          solution: String.raw`**Pressure drops** (needed for the sheet).

*Tube side (water):* Kern Fig. 26 at Re = 21,400 gives $f \approx 0.00023$ ft²/in², with $s = 1.0$. As a check, the Kern-scaled fit $f = 4(0.0035 + 0.264\,\mathrm{Re}^{-0.42}) = 0.030$ ft²/ft² $= 0.00021$ ft²/in² gives $\Delta P_t \approx 3.4$ psi.
$$\Delta P_t = \frac{fG_t^2Ln}{5.22\times10^{10}Ds\phi_t} = \frac{0.00023 \times (822{,}500)^2 \times 8 \times 8}{5.22\times10^{10} \times 0.0517 \times 1} = 3.7\ \mathrm{psi}$$
Return loss: $V^2/2g' = 0.090$ psi at $G_t = 8.2\times10^5$ (Kern Fig. 27).
$$\Delta P_r = \frac{4n}{s}\frac{V^2}{2g'} = \frac{4 \times 8}{1} \times 0.090 = 2.9\ \mathrm{psi}$$
$\Delta P_T = 6.6$ psi < 10 psi ✓

*Shell side (ammonia):* gas density at 83 psia and 170°F:
$$\rho = \frac{pM}{RT} = \frac{83 \times 17}{10.73 \times 630} = 0.209\ \mathrm{lb/ft^3},\qquad s = 0.00335$$
Friction factor from the fit $\exp(0.576 - 0.19\ln\mathrm{Re})/144$: $f = 0.00165$ ft²/in² (Fig. 29 reads ≈ 0.0015–0.0017). Number of crosses $N + 1 = 12L/B = 12 \times 8/12 = 8$; $D_s = 1.9375$ ft.
$$\Delta P_s = \frac{fG_s^2D_s(N+1)}{5.22\times10^{10}D_es\phi_s} = \frac{0.00165 \times 25{,}480^2 \times 1.9375 \times 8}{5.22\times10^{10} \times 0.0458 \times 0.00335} \approx 2.0\ \mathrm{psi}$$
This is right at the 2.0 psi allowable: acceptable but with no margin.

**TEMA specification sheet (filled values)**

| Item | Shell side | Tube side |
|---|---|---|
| Service | Ammonia compressor aftercooler | |
| Size and type | 23¼ in ID × 8 ft, 1-8 (one shell pass, eight tube passes), fixed tubesheet | |
| Surface per shell | 571.6 ft² (based on tube OD) | |
| Fluid | Dry ammonia gas | Cooling water |
| Total flow, lb/h | 9,872 | 78,480 |
| Temperature in / out, °F | 245 / 95 | 85 / 95 |
| Caloric (average) temperature, °F | 170 | 90 |
| Operating pressure | 83 psia | – |
| Specific heat, Btu/lb·°F | 0.53 | 1.0 |
| Viscosity, cP | 0.012 | 0.82 |
| Thermal conductivity, Btu/h·ft·°F | 0.017 | 0.36 |
| Density, lb/ft³ | 0.209 | 62.5 |
| Velocity | ≈ 34 ft/s ($G_s = 25{,}480$ lb/h·ft²) | 3.66 ft/s ($G_t = 822{,}500$ lb/h·ft²) |
| Reynolds number | 40,200 | 21,400 |
| Film coefficient, Btu/h·ft²·°F | $h_o = 44.0$ | $h_i = 862$, $h_{io} = 712$ |
| Pressure drop allowed / calculated, psi | 2.0 / ≈ 2.0 | 10.0 / 6.6 |
| Heat exchanged, Btu/h | 784,800 | |
| LMTD / $F_T$ / corrected Δt, °F | 51.7 / 0.838 / 43.3 | |
| Clean coefficient $U_C$ | 41.4 Btu/h·ft²·°F | |
| Design coefficient $U_D$ | 31.7 Btu/h·ft²·°F | |
| Dirt factor (calculated / required) | 0.0074 / ≈ 0.003 h·ft²·°F/Btu | |
| Tubes | 364, ¾ in OD, 16 BWG (ID 0.620 in), 8 ft, 15/16 in triangular pitch | |
| Shell ID | 23.25 in | |
| Baffles | 25% cut segmental, 12 in spacing, 7 baffles | |
| Passes | 1 | 8 |`,
          answer: String.raw`1-8 exchanger, 23¼ in shell, 364 ¾ in 16 BWG × 8 ft tubes, A = 571.6 ft²; $h_o = 44$, $h_{io} = 712$, $U_C = 41.4$, $U_D = 31.7$, $R_d = 0.0074$; ΔP: tube 6.6/10 psi, shell ≈ 2.0/2.0 psi (at the limit).` },
      ] },
    { id: "2023-24-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q3a", label: "(a)", marks: "6",
          topic: "heat-exchangers", sub: "Annulus equivalent diameters",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"Equivalent diameter of the annular area of a double pipe system can be different based on its context" – Explain.`,
          solution: String.raw`The equivalent diameter is defined as $D_e = 4 \times$ (flow area)/(perimeter). In an annulus (inner pipe OD $D_1$, outer pipe ID $D_2$) the flow area is always $\frac{\pi}{4}(D_2^2 - D_1^2)$, but **which perimeter counts depends on what is being calculated** (Kern):

![Annulus: heated perimeter π D₁ for heat transfer, wetted perimeter π(D₁ + D₂) for friction](fig/2020-21-Q2a-sol.svg)

**1. For heat transfer:** only the surface that transfers heat counts, i.e. the outside of the inner pipe, $\pi D_1$ (the outer pipe is insulated).
$$D_e = \frac{4\cdot\frac{\pi}{4}(D_2^2 - D_1^2)}{\pi D_1} = \frac{D_2^2 - D_1^2}{D_1}$$
This $D_e$ is used in $\mathrm{Re}_a$ and in $h_o D_e/k$ (Fig. 24).

**2. For pressure drop (friction):** friction acts on *both* wetted walls, so the perimeter is $\pi(D_1 + D_2)$.
$$D'_e = \frac{4\cdot\frac{\pi}{4}(D_2^2 - D_1^2)}{\pi(D_1 + D_2)} = D_2 - D_1$$
This $D'_e$ is used in $\mathrm{Re}'_a$ and in the friction-factor and $\Delta P_a$ equations.

**Example** (2 × 1¼ in IPS double pipe; $D_2 = 2.067$ in, $D_1 = 1.66$ in):
- $D_e = (2.067^2 - 1.66^2)/1.66 = 0.914$ in
- $D'_e = 2.067 - 1.66 = 0.407$ in

So the same annulus has two different "diameters". Using the wrong one changes Re, $h$ and ΔP substantially. (In Holman's general hydraulic diameter $D_h = 4A/P_{wetted} = D_2 - D_1$, which is the friction-type definition.)`,
          answer: String.raw`Heat transfer uses the heated perimeter only: $D_e = (D_2^2 - D_1^2)/D_1$. Pressure drop uses both wetted walls: $D'_e = D_2 - D_1$. Example: 0.914 in vs 0.407 in for 2 × 1¼ in IPS.` },
        { id: "2023-24-Q3b", label: "(b)", marks: "5",
          topic: "convection-basics", sub: "Role of viscosity in convection",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What role does fluid viscosity play in convection?`,
          solution: String.raw`- **No-slip and the boundary layer:** viscosity makes the fluid stick to the wall ($u = 0$), creating the velocity boundary layer. Next to the wall heat moves by conduction through this nearly stagnant layer, so its thickness sets $h \sim k/\delta_t$.
- **Flow regime:** viscosity appears in $\mathrm{Re} = \rho VL/\mu$ (inertia/viscous) and $\mathrm{Gr} = g\beta\Delta TL^3/\nu^2$ (buoyancy/viscous). High μ means low Re and laminar flow with low $h$. Low μ means turbulent flow and high $h$.
- **Relative boundary-layer thickness:** μ enters $\mathrm{Pr} = c_p\mu/k$. A viscous oil (large Pr) has a thin thermal layer inside a thick velocity layer.
- **Natural convection:** viscous forces resist the buoyancy-driven motion, so a more viscous fluid gives weaker currents and lower $h$.
- **Variable viscosity:** μ changes with temperature (falls for liquids and rises for gases on heating), which distorts the velocity profile. This is corrected by Sieder–Tate's $(\mu/\mu_w)^{0.14}$.
- **Cost side:** viscosity sets friction and pressure drop ($\tau_w = \mu\,\partial u/\partial y$, $C_f$), and so pumping power. The Reynolds–Colburn analogy links this friction directly to heat transfer.`,
          answer: String.raw`Viscosity creates the no-slip boundary layer, sets the flow regime (Re, Gr) and δ_t/δ (Pr), damps buoyant flow, distorts the profile when it varies with T ($(\mu/\mu_w)^{0.14}$), and sets friction and pumping cost.` },
        { id: "2023-24-Q3c", label: "(c)", marks: "6",
          topic: "convection-basics", sub: "Meaning of Nusselt number; Nu ≈ 1",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss how the Nusselt number helps in understanding convective heat transfer. What does it mean if Nu ≈ 1?`,
          solution: String.raw`$$\mathrm{Nu} = \frac{hL_c}{k} = \frac{q''_{conv}}{q''_{cond}} = \frac{h\Delta T}{k\Delta T/L_c} = \left.\frac{\partial\theta^*}{\partial y^*}\right|_{wall}$$

How it helps:
- **Enhancement factor:** Nu tells how many times convection increases heat transfer over pure conduction through a fluid layer of the same thickness.
- **Dimensionless h:** it is the dimensionless temperature gradient at the wall. A large Nu means a thin thermal boundary layer ($\mathrm{Nu} \approx L/\delta_t$ in order of magnitude).
- **Generalising data:** experiments and theory are expressed as $\mathrm{Nu} = f(\mathrm{Re},\mathrm{Pr})$ (forced) or $f(\mathrm{Ra},\mathrm{Pr})$ (natural). One correlation then covers all fluids, sizes and velocities, and $h = \mathrm{Nu}\,k/L_c$ follows. Examples: flat plate $0.332\mathrm{Re}^{1/2}\mathrm{Pr}^{1/3}$; tube $0.023\mathrm{Re}^{0.8}\mathrm{Pr}^n$; laminar tube 3.66 or 4.364.
- **Regime indicator:** typical values are about 1–10 for laminar internal flow and 100–1000 or more for turbulent flow.

**Nu ≈ 1:** convective heat transfer equals conduction across the layer. The fluid is effectively **stagnant** or moving so slowly (e.g. Ra below the critical value in an enclosure, creeping flow) that motion adds nothing, and heat crosses by **pure conduction**. In free convection between plates Nu = 1 below Ra ≈ 1708. In any convection problem a calculated Nu < 1 would signal an error.`,
          answer: String.raw`Nu = hL/k = convection ÷ conduction (the wall temperature gradient), and it lets correlations Nu = f(Re, Pr) give h for any case. Nu ≈ 1 means the fluid behaves as stagnant: pure conduction, with no enhancement from fluid motion.` },
        { id: "2023-24-Q3d", label: "(d)", marks: "12+6",
          topic: "conduction", sub: "Composite furnace wall with combined h",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The large furnace wall consists of a 250 mm thick common brick layer (k = 0.65 W/m·K), lined on the inside with a 300 mm thick layer of magnesite bricks (k = 11.5 W/m·K). The inner side of the furnace is exposed to hot gases at 1400°C with a convective heat transfer coefficient of 17.5 W/m²·K and a radiative heat transfer coefficient of 23.2 W/m²·K. The temperature of the surrounding air is 30°C with a convective heat transfer coefficient of 7.5 W/m²·K and a radiation heat transfer coefficient of 11.5 W/m²·K. Calculate:

(i) Rate of heat transfer through the wall per unit area.

(ii) Temperature at the interface.

![Furnace wall: magnesite brick lining and common brick, gases inside and air outside](fig/2023-24-Q3d.svg)`,
          solution: String.raw`**Given:** $T_g = 1400^\circ$C, $h_{c,i} = 17.5$, $h_{r,i} = 23.2$ W/m²K; magnesite $L_1 = 0.30$ m, $k_1 = 11.5$; common brick $L_2 = 0.25$ m, $k_2 = 0.65$; $T_a = 30^\circ$C, $h_{c,o} = 7.5$, $h_{r,o} = 11.5$ W/m²K.

**Find:** $q''$ and the brick–brick interface temperature $T_2$.

![Furnace wall circuit: convection and radiation in parallel at each face, two brick layers in series](fig/2023-24-Q3d-sol.svg)

**Assumptions:** steady 1-D conduction through a large plane wall; constant $k$; convection and radiation act in parallel on each face (combined $h = h_c + h_r$); no contact resistance.

1. Combined coefficients:
$$h_i = 17.5 + 23.2 = 40.7\ \mathrm{W/m^2K},\qquad h_o = 7.5 + 11.5 = 19.0\ \mathrm{W/m^2K}$$

2. Resistances per unit area (m²K/W):
$$R_i = \frac{1}{40.7} = 0.02457,\qquad R_1 = \frac{0.30}{11.5} = 0.02609,\qquad R_2 = \frac{0.25}{0.65} = 0.38462,\qquad R_o = \frac{1}{19.0} = 0.05263$$
$$\sum R = 0.48790\ \mathrm{m^2K/W}$$

3. **(i) Heat flux:**
$$q'' = \frac{T_g - T_a}{\sum R} = \frac{1400 - 30}{0.48790} = 2808\ \mathrm{W/m^2}$$

4. Surface and interface temperatures:
$$T_1\ (\text{inner face}) = 1400 - 2808 \times 0.02457 = 1331.0^\circ\mathrm{C}$$
$$\textbf{(ii)}\ \ T_2\ (\text{interface}) = T_1 - q''R_1 = 1331.0 - 2808 \times 0.02609 = 1257.8^\circ\mathrm{C}$$
$$T_3\ (\text{outer face}) = T_2 - q''R_2 = 1257.8 - 2808 \times 0.38462 = 177.8^\circ\mathrm{C}$$
Check: $T_3 - q''R_o = 177.8 - 147.8 = 30^\circ$C ✓.

**Why it matters:** the common brick gives 79% of the resistance. The interface at ≈ 1258°C is far above what ordinary brick tolerates (~1000–1100°C), which is why a thicker refractory lining or an insulating firebrick layer would be used.`,
          answer: String.raw`$\sum R = 0.488$ m²K/W; (i) $q'' \approx 2.81$ kW/m²; (ii) interface $T_2 \approx 1258^\circ$C (inner face 1331°C, outer face 178°C).` },
      ] },
    { id: "2023-24-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q4a", label: "(a)", marks: "18",
          topic: "heat-exchangers", sub: "Double pipe area: counter vs co-current",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A double-pipe heat exchanger will be used to cool a hot stream from 350°F to 250°F by heating a cold stream from 80°F to 120°F. The hot stream will flow in the inner pipe, which is 2-in. schedule 40 carbon steel with a thermal conductivity of 26 Btu/h·ft·°F. Fouling factors of 0.001 h·ft²·°F/Btu should be provided for each stream. The heat-transfer coefficients are estimated to be $h_i$ = 200 and $h_o$ = 350 Btu/h·ft²·°F, and the heat load is 3.5 × 10⁶ Btu/h. What surface area is required if the orientation is (i) counter-current; (ii) co-current?`,
          solution: String.raw`**Given:** hot (inner pipe) 350 → 250°F; cold (annulus) 80 → 120°F; 2 in sch 40 pipe: $D_i = 2.067$ in, $D_o = 2.375$ in; $k = 26$ Btu/h·ft·°F (the paper's "ft²" is a unit misprint); $R_{Di} = R_{Do} = 0.001$; $h_i = 200$ (based on the inside area), $h_o = 350$; $q = 3.5\times10^6$ Btu/h.

**Find:** the outside area $A_o$ for counter-current and co-current flow.

![Counter-current and co-current temperature profiles with the terminal differences](fig/2023-24-Q4a-sol.svg)

**Assumptions:** U is constant along the exchanger; area based on the pipe OD.

1. Overall coefficient based on the outside area:
$$\frac{1}{U_o} = \frac{D_o}{D_i}\frac{1}{h_i} + \frac{D_o}{D_i}R_{Di} + \frac{D_o\ln(D_o/D_i)}{2k} + R_{Do} + \frac{1}{h_o}$$

2. The terms, with $D_o/D_i = 1.149$ and $D_o = 0.1979$ ft:

| Term | Value (h·ft²·°F/Btu) |
|---|---|
| $(D_o/D_i)/h_i$ | 0.005745 |
| $(D_o/D_i)R_{Di}$ | 0.001149 |
| $D_o\ln(D_o/D_i)/(2k) = 0.1979\ln(1.149)/52$ | 0.000529 |
| $R_{Do}$ | 0.001000 |
| $1/h_o$ | 0.002857 |
| Sum | 0.011280 |

$$U_o = \frac{1}{0.011280} = 88.7\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

3. **(i) Counter-current.** $\Delta T_1 = 350 - 120 = 230^\circ$F, $\Delta T_2 = 250 - 80 = 170^\circ$F.
$$\Delta T_{lm} = \frac{230 - 170}{\ln(230/170)} = 198.5^\circ\mathrm{F}$$
$$A_o = \frac{q}{U_o\Delta T_{lm}} = \frac{3.5\times10^6}{88.7 \times 198.5} = 199\ \mathrm{ft^2}$$
This is about 320 ft of 2 in pipe.

4. **(ii) Co-current.** $\Delta T_1 = 350 - 80 = 270^\circ$F, $\Delta T_2 = 250 - 120 = 130^\circ$F.
$$\Delta T_{lm} = \frac{270 - 130}{\ln(270/130)} = 191.5^\circ\mathrm{F}$$
$$A_o = \frac{3.5\times10^6}{88.7 \times 191.5} = 206\ \mathrm{ft^2}$$

**Comment:** co-current needs about 3.6% more area. The difference is small because both streams change temperature only modestly compared with the large temperature gap between them. Counterflow is still preferred. (If $h_i$ were taken as already based on the OD, $U_o = 96.3$ and the areas would be 183 and 190 ft².)`,
          answer: String.raw`$U_o \approx 88.7$ Btu/h·ft²·°F; (i) counter: LMTD = 198.5°F, $A \approx 199$ ft²; (ii) co-current: LMTD = 191.5°F, $A \approx 206$ ft².` },
        { id: "2023-24-Q4b", label: "(b)", marks: "9+8",
          topic: "insulation", sub: "Overall U of a pipe; critical radius check",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Water flows on the inside of a steel pipe with an ID of 2.5 cm. The wall thickness is 2 mm, and the convection coefficient on the inside is 500 W/m²·°C. The convection coefficient on the outside is 12 W/m²·°C. Calculate the overall heat-transfer coefficient. Consider the pipe is covered with a layer of asbestos [k = 0.18 W/m·°C] while still surrounded by a convection environment with h = 12 W/m²·°C. Calculate the critical insulation radius. Will the heat transfer be increased or decreased by adding an insulation thickness of (i) 0.5 mm, (ii) 10 mm?`,
          solution: String.raw`**Given:** $r_i = 12.5$ mm, $r_o = 14.5$ mm; $h_i = 500$, $h_o = 12$ W/m²·°C; asbestos $k = 0.18$ W/m·°C.

**Find:** $U_o$, $r_c$, and the effect of 0.5 mm and 10 mm of insulation.

![Heat loss versus outer radius: maximum at the critical radius $r_c = k/h$](fig/common-critical-radius.svg)

**Assumptions:** steady, 1-D radial conduction; steel $k = 43$ W/m·°C (1% carbon steel, Holman Table A-2; not given in the question); h unchanged by the insulation; per metre length.

1. Resistances per metre (°C·m/W):
$$R_i = \frac{1}{h_i 2\pi r_i} = \frac{1}{500 \times 2\pi \times 0.0125} = 0.02546$$
$$R_{steel} = \frac{\ln(r_o/r_i)}{2\pi k} = \frac{\ln(14.5/12.5)}{2\pi \times 43} = 0.00055$$
$$R_o = \frac{1}{h_o 2\pi r_o} = \frac{1}{12 \times 2\pi \times 0.0145} = 0.91468$$
$$\sum R = 0.94070$$

2. Overall coefficient based on the outer area:
$$U_o = \frac{1}{\dfrac{r_o}{r_i h_i} + \dfrac{r_o\ln(r_o/r_i)}{k} + \dfrac{1}{h_o}} = \frac{1}{2\pi r_o\sum R} = 11.67\ \mathrm{W/m^2\,^\circ C}$$
Based on the inner area, $U_i = U_o r_o/r_i = 13.5$ W/m²·°C. Heat flow per unit ΔT is $1/\sum R = 1.0630$ W/m·°C.

3. Critical radius:
$$r_c = \frac{k_{ins}}{h_o} = \frac{0.18}{12} = 0.015\ \mathrm{m} = 15\ \mathrm{mm}$$
The bare outer radius (14.5 mm) is just below $r_c$.

4. **(i) 0.5 mm of insulation**, $r = 15.0$ mm $= r_c$:
$$R_{ins} = \frac{\ln(15/14.5)}{2\pi \times 0.18} = 0.02998,\qquad R_{conv} = \frac{1}{12 \times 2\pi \times 0.015} = 0.88419$$
$$\sum R = 0.94018\ \Rightarrow\ q/\Delta T = 1.0636\ \mathrm{W/m\,^\circ C}$$
Heat transfer **increases**, very slightly (+0.05%). This is the maximum possible, since $r = r_c$.

5. **(ii) 10 mm of insulation**, $r = 24.5$ mm $> r_c$:
$$R_{ins} = \frac{\ln(24.5/14.5)}{2\pi \times 0.18} = 0.46378,\qquad R_{conv} = \frac{1}{12 \times 2\pi \times 0.0245} = 0.54134$$
$$\sum R = 1.03114\ \Rightarrow\ q/\Delta T = 0.9698\ \mathrm{W/m\,^\circ C}$$
Heat transfer **decreases** (−8.8% compared with the bare pipe).

**Exam tip:** because $r_o$ is so close to $r_c$, the heat loss is almost flat near $r_c$. Asbestos only becomes effective at thicknesses well beyond the critical radius.`,
          answer: String.raw`$U_o \approx 11.7$ W/m²°C (outer area); $r_c = k/h = 15$ mm. (i) 0.5 mm brings r to $r_c$: heat transfer slightly **increases** (maximum). (ii) 10 mm: heat transfer **decreases** by ≈ 9%.` },
      ] },
    { id: "2023-24-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw`The parabolic trough reflector is a solar thermal energy device designed to capture the sun's direct solar radiation over a large surface area and then focus, or "concentrate", it onto a much smaller focal point area. Concentrating solar energy onto a smaller area yields high-temperature heat with excellent thermal efficiency. A tube is set at the focal line of a parabolic reflector and a fluid is passed through it. The net effect of this arrangement may be approximated as a condition of uniform heating (constant heat flux) at the surface of the tube.

![Parabolic trough collector: the absorber tube lies along the focal line](fig/2023-24-Q5.svg)

On a sunny day, the heat flux from the reflector was 2000 W/m² and the surface temperature reached up to 450°C. The fluid tube has an internal diameter of 60 mm, and water was used at 620 g/min as the heating fluid with an inlet temperature of 27°C.`,
      parts: [
        { id: "2023-24-Q5a", label: "(a)", marks: "8",
          topic: "boundary-layer", sub: "Cubic temperature profile in the thermal BL",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`As the reflectors are long enough, the surfaces approximately behave like a flat plate system for a small horizon. Develop the expression for the temperature profile at a distance y in the boundary layer with thermal boundary layer thickness ($\delta_t$), surface temperature ($T_w$) and free stream temperature ($T_\infty$).`,
          solution: String.raw`**Assumptions:** steady, 2-D, laminar, incompressible flow over a flat plate; constant properties; negligible viscous dissipation; plate at uniform $T_w$; the profile is similar at every x, so it can be written in terms of $y/\delta_t$.

![Cubic temperature profile across the thermal boundary layer $\delta_t$](fig/2023-24-Q5a-sol.svg)

1. Define $\theta = T - T_w$, so $\theta_\infty = T_\infty - T_w$. Assume a cubic polynomial (as for the velocity profile):
$$\theta(y) = a + by + cy^2 + dy^3$$

2. **Boundary conditions:**
   - (1) At $y = 0$: $T = T_w$, so $\theta = 0$.
   - (2) At $y = 0$: $u = v = 0$, so the energy equation $u\frac{\partial T}{\partial x} + v\frac{\partial T}{\partial y} = \alpha\frac{\partial^2T}{\partial y^2}$ gives $\frac{\partial^2\theta}{\partial y^2} = 0$.
   - (3) At $y = \delta_t$: $T = T_\infty$, so $\theta = \theta_\infty$.
   - (4) At $y = \delta_t$: $\frac{\partial\theta}{\partial y} = 0$ (smooth merge with the free stream).

3. Apply the conditions:
   - (1) gives $a = 0$.
   - (2) gives $2c + 6dy|_{0} = 0$, so $c = 0$.
   - (4) gives $b + 3d\delta_t^2 = 0$, so $b = -3d\delta_t^2$.
   - (3) gives $b\delta_t + d\delta_t^3 = \theta_\infty$, so $-3d\delta_t^3 + d\delta_t^3 = \theta_\infty$ and $d = -\frac{\theta_\infty}{2\delta_t^3}$, $b = \frac{3\theta_\infty}{2\delta_t}$.

4. Result:
$$\boxed{\frac{\theta}{\theta_\infty} = \frac{T - T_w}{T_\infty - T_w} = \frac{3}{2}\frac{y}{\delta_t} - \frac{1}{2}\left(\frac{y}{\delta_t}\right)^3}$$

5. **Use:** the wall gradient is
$$\left.\frac{\partial T}{\partial y}\right|_0 = \frac{3}{2}\frac{T_\infty - T_w}{\delta_t}$$
so $q''_w = -k(\partial T/\partial y)_0$ gives $h = 3k/(2\delta_t)$. Combined with the integral energy equation this leads to $\delta_t/\delta = \mathrm{Pr}^{-1/3}/1.026$ and $\mathrm{Nu}_x = 0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$ (the formulas on the data sheet).`,
          answer: String.raw`$\dfrac{T - T_w}{T_\infty - T_w} = \dfrac32\dfrac{y}{\delta_t} - \dfrac12\left(\dfrac{y}{\delta_t}\right)^3$, from a cubic profile with θ = 0 and θ″ = 0 at the wall, and θ = θ∞, θ′ = 0 at y = δ_t. It gives $h = 3k/(2\delta_t)$.` },
        { id: "2023-24-Q5b", label: "(b)", marks: "12",
          topic: "boundary-layer", sub: "δ and δ_t on a flat plate (air)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`If the air flow in that weather was 1.2 m/s at 30°C, calculate the thermal and velocity boundary layer thickness in cm at 15 cm from the leading edge of the reflector, considering the plate is being heated homogeneously, heating from the edge.`,
          solution: String.raw`**Given:** air at 30°C, $u_\infty = 1.2$ m/s, $x = 0.15$ m; heated from the leading edge ($x_0 = 0$).

**Find:** $\delta$ and $\delta_t$ in cm.

![Velocity and thermal boundary layers on a flat plate](fig/common-bl-flat-plate.svg)

**Assumptions:** 1 atm; the reflector temperature is not given, so properties are taken at the air temperature 30°C (303 K); laminar integral-method results from the data sheet.

1. Air at 303 K (Holman Table A-5, interpolated): $\nu = 1.601\times10^{-5}$ m²/s, $\mathrm{Pr} = 0.707$.

2. Reynolds number:
$$\mathrm{Re}_x = \frac{u_\infty x}{\nu} = \frac{1.2 \times 0.15}{1.601\times10^{-5}} = 11{,}240\quad(< 5\times10^5,\ \text{laminar})$$

3. Velocity boundary layer:
$$\delta = \frac{4.64\,x}{\sqrt{\mathrm{Re}_x}} = \frac{4.64 \times 0.15}{\sqrt{11{,}240}} = 6.56\times10^{-3}\ \mathrm{m} = 0.656\ \mathrm{cm}$$

4. Thermal boundary layer, with $x_0 = 0$ so $[1 - (x_0/x)^{3/4}]^{1/3} = 1$:
$$\frac{\delta_t}{\delta} = \zeta = \frac{1}{1.026}\mathrm{Pr}^{-1/3} = \frac{(0.707)^{-1/3}}{1.026} = 1.094$$
$$\delta_t = 1.094 \times 0.656 = 0.718\ \mathrm{cm}$$

**Comment:** for air Pr < 1, so $\delta_t$ is slightly larger than δ. The derivation assumed $\zeta \le 1$, but for Pr ≈ 0.7 the error is negligible. If the plate were much hotter, film-temperature properties would increase ν and both thicknesses.`,
          answer: String.raw`Re ≈ 1.12×10⁴ (laminar); $\delta \approx 0.66$ cm; $\delta_t = \delta\,\mathrm{Pr}^{-1/3}/1.026 \approx 0.72$ cm.` },
        { id: "2023-24-Q5c", label: "(c)", marks: "5+10",
          topic: "forced-convection", sub: "Laminar tube, constant heat flux: length and exit wall temperature",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`If we want to get the water at 90°C in the outlet, what should be the corresponding tube length to achieve that? What should be the surface temperature of the tube at the exit point?`,
          solution: String.raw`**Given:** $q''_w = 2000$ W/m² (uniform); $D = 0.06$ m; $\dot m = 620$ g/min $= 0.01033$ kg/s; $T_{b,in} = 27^\circ$C, $T_{b,out} = 90^\circ$C.

**Find:** $L$ and $T_{w}$ at the exit.

![Uniform heat flux: $T_b$ rises linearly and $T_w$ runs parallel above it once developed](fig/2023-24-Q5c.svg)

**Assumptions:** steady state; the whole tube surface receives 2000 W/m²; no losses; water properties from Çengel Table A-9. The "450°C surface temperature" in the stem is not consistent with this flux and is not used.

### Tube length
1. Energy balance, with $c_p = 4184$ J/kg·°C at the mean $(27 + 90)/2 = 58.5^\circ$C:
$$Q = \dot m c_p(T_{out} - T_{in}) = 0.01033 \times 4184 \times 63 = 2724\ \mathrm{W}$$

2. Length:
$$Q = q''_w\,\pi D L\ \Rightarrow\ L = \frac{2724}{2000 \times \pi \times 0.06} = 7.23\ \mathrm{m}$$

### Surface temperature at the exit
3. Flow regime at the exit, with water at 90°C: $\mu = 3.15\times10^{-4}$ kg/m·s, $k = 0.675$ W/m·°C, $\mathrm{Pr} = 1.96$.
$$\mathrm{Re} = \frac{4\dot m}{\pi D\mu} = \frac{4 \times 0.01033}{\pi \times 0.06 \times 3.15\times10^{-4}} = 696\quad(\text{laminar}; \approx 460\ \text{at the mean temperature})$$

4. Entrance check with the data-sheet chart (Fig. 6-5):
$$\mathrm{Gz}^{-1} = \frac{x/D}{\mathrm{Re}\,\mathrm{Pr}} = \frac{7.23/0.06}{696 \times 1.96} = 0.088$$
This is above ≈ 0.05, so the flow is **thermally fully developed** at the exit. The $q_w$ = const curve gives $\mathrm{Nu}_d = 4.364$.

5. Heat transfer coefficient:
$$h = \frac{\mathrm{Nu}\,k}{D} = \frac{4.364 \times 0.675}{0.06} = 49.1\ \mathrm{W/m^2\,^\circ C}$$

6. Exit wall temperature:
$$q''_w = h(T_w - T_b)\ \Rightarrow\ T_{w,exit} = 90 + \frac{2000}{49.1} = 130.7^\circ\mathrm{C}$$

**Comment:** with constant flux in laminar flow, $T_w - T_b$ = 40.7°C is the same everywhere in the developed region, so the wall is hottest at the exit. At about 131°C the water at the wall would boil unless the loop is pressurised (> 2.7 bar). In practice a turbulent flow or a pressurised loop is used.`,
          answer: String.raw`$Q \approx 2.72$ kW, so $L \approx 7.2$ m. Laminar (Re ≈ 700), fully developed: $\mathrm{Nu} = 4.364$, $h \approx 49$ W/m²°C, $T_{w,exit} \approx 131^\circ$C.` },
      ] },
    { id: "2023-24-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw`Liquefied petroleum gas (LPG) is widely used as a fuel in households, and LPG-carrying vessels are a common sight in the streets. LPG mainly contains liquid propane. A 1.5-m-diameter, 5-m-long cylindrical LPG tank is initially filled with liquid propane (ρ = 581 kg/m³). The tank is exposed to the ambient air at 25°C in calm weather. The outer surface of the tank is polished so that the radiation heat transfer is negligible. Now, fine fissures and cracks develop at the top of the tank, and the pressure inside drops to 1 atm while the temperature drops to −42°C, which is the boiling temperature of propane at 1 atm. The heat of vaporization of propane at 1 atm is 425 kJ/kg. The propane is slowly vaporized as a result of the heat transfer from the ambient air into the tank, and the propane vapor escapes the tank at −42°C through the crack.

Assume:
- The propane tank is at about the same temperature as the propane inside at all times.
- The heat transfer coefficient at the end surfaces of the tank is the same as that of its side surface.

![Horizontal propane tank (D = 1.5 m) at −42°C in still air at 25°C](fig/2023-24-Q6.svg)`,
      parts: [
        { id: "2023-24-Q6a", label: "(a)", marks: "7",
          topic: "natural-convection", sub: "Boundary layer on a cold horizontal cylinder",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the boundary layer profile for this tank for the upper and lower surfaces. Qualitatively compare the heat transfer coefficients for the upper and lower surfaces.`,
          solution: String.raw`The tank (−42°C) is **colder** than the air (25°C). Air touching it is cooled, becomes denser and **sinks**. This is the mirror image of the hot cylinder in the slides, whose boundary layer starts at the bottom and forms a rising plume at the top.

*Sketch (cross-section of the horizontal tank):*
- The boundary layer **starts at the top** (stagnation point, where warm ambient air approaches the surface) and is **thinnest there**.
- It **thickens** as it flows down both sides around the circumference.
- At the **bottom** the two layers meet and leave as a **falling cold plume** (downward arrows below the tank). Air near the bottom is cold and nearly stagnant.
- Velocity profile at any angle: zero at the wall, a maximum close to it, zero at the edge. Temperature rises from $T_s = -42^\circ$C at the wall to 25°C at the edge.

![Cold tank: the boundary layer starts thin at the top and leaves as a falling plume at the bottom](fig/2023-24-Q6a-sol.svg)

**Comparison of h:**
- **Upper surface:** thin boundary layer, fresh warm air constantly arrives, so the temperature gradient is steep and the **local h is highest**.
- **Lower surface:** thick boundary layer and separated, cold, slow air, so the **local h is lowest**.
- The average h over the circumference is what Churchill–Chu gives (used in part b). For a hot tank the pattern would be reversed (highest h at the bottom).`,
          answer: String.raw`Cold cylinder: the BL starts thin at the top, thickens down both sides and leaves as a falling cold plume at the bottom. So local h is highest on the upper surface and lowest on the lower surface (the reverse of a hot cylinder).` },
        { id: "2023-24-Q6b", label: "(b)", marks: "17",
          topic: "natural-convection", sub: "Horizontal cylinder (Churchill–Chu): time to empty",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine how long it will take for the tank to empty if it is not insulated.`,
          solution: String.raw`**Given:** $D = 1.5$ m, $L = 5$ m (the text value is used; the figure shows 4 m), $T_s = -42^\circ$C, $T_\infty = 25^\circ$C, $\rho_{prop} = 581$ kg/m³, $h_{fg} = 425$ kJ/kg.

**Find:** the time to vaporise all the propane.

**Assumptions:** steady natural convection at a constant surface temperature; no radiation (polished); the same h on the ends; air is an ideal gas at 1 atm; the tank is full at the start.

1. Film temperature: $T_f = (-42 + 25)/2 = -8.5^\circ$C = 264.65 K. Air properties (Holman Table A-5, interpolated between 250 and 300 K): $\nu = 1.259\times10^{-5}$ m²/s, $k = 0.02343$ W/m·°C, $\mathrm{Pr} = 0.718$; $\beta = 1/264.65$ K⁻¹.

2. Rayleigh number:
$$\mathrm{Ra}_D = \frac{g\beta\Delta T D^3}{\nu^2}\mathrm{Pr} = \frac{9.81 \times (1/264.65) \times 67 \times 1.5^3}{(1.259\times10^{-5})^2} \times 0.718 = 3.79\times10^{10}$$

3. Churchill–Chu for a horizontal cylinder (slides Eq. 9-25; valid for $\mathrm{Ra}_D \le 10^{12}$ ✓):
$$\mathrm{Nu} = \left\{0.6 + \frac{0.387\,\mathrm{Ra}_D^{1/6}}{[1 + (0.559/\mathrm{Pr})^{9/16}]^{8/27}}\right\}^2 = 370$$
$$h = \frac{\mathrm{Nu}\,k}{D} = \frac{370 \times 0.02343}{1.5} = 5.78\ \mathrm{W/m^2\,^\circ C}$$
The table constant $\mathrm{Nu} = 0.13\,\mathrm{Ra}^{1/3}$ for $10^9$–$10^{12}$ gives h = 6.8, about 18% higher.

4. Surface area:
$$A = \pi DL + 2\cdot\frac{\pi D^2}{4} = \pi(1.5)(5) + 2(1.767) = 23.56 + 3.53 = 27.10\ \mathrm{m^2}$$

5. Heat gain and evaporation rate:
$$\dot Q = hA(T_\infty - T_s) = 5.78 \times 27.10 \times 67 = 10{,}500\ \mathrm{W}$$
$$\dot m = \frac{\dot Q}{h_{fg}} = \frac{10{,}500}{425{,}000} = 0.0247\ \mathrm{kg/s}$$

6. Mass of propane:
$$m = \rho\frac{\pi D^2}{4}L = 581 \times 1.767 \times 5 = 5134\ \mathrm{kg}$$

7. Time to empty:
$$t = \frac{m}{\dot m} = \frac{5134}{0.0247} = 2.08\times10^5\ \mathrm{s} \approx 57.7\ \mathrm{h} \approx 2.4\ \mathrm{days}$$
(Using L = 4 m from the figure gives about 2.3 days.)

**Exam tip:** natural convection from calm air is small (~6 W/m²K), yet the 67°C temperature difference on 27 m² still boils off about 90 kg/h, which is why cracked LPG tanks frost over and vent continuously.`,
          answer: String.raw`$\mathrm{Ra} \approx 3.8\times10^{10}$, Nu ≈ 370, $h \approx 5.8$ W/m²°C, $A = 27.1$ m², $\dot Q \approx 10.5$ kW, $\dot m \approx 0.0247$ kg/s, m = 5134 kg, so $t \approx 2.1\times10^5$ s ≈ 2.4 days.` },
        { id: "2023-24-Q6c", label: "(c)", marks: "6",
          topic: "condensation", sub: "Horizontal vs vertical orientation for film condensation",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`If the moisture that is in the air gets condensed on the surfaces of the propane tank, determine which orientation of the tank is suitable for the film-type condensation.`,
          solution: String.raw`**Approach:** compare the Nusselt laminar film coefficients for the same cylinder lying horizontally (diameter D) and standing vertically (height L), at the same ΔT and with the same fluid properties.

1. The two Nusselt relations:
$$h_{vert} = 0.943\left[\frac{g\rho_l(\rho_l - \rho_v)h^*_{fg}k_l^3}{\mu_l\Delta T\,L}\right]^{1/4},\qquad h_{horiz} = 0.729\left[\frac{g\rho_l(\rho_l - \rho_v)h^*_{fg}k_l^3}{\mu_l\Delta T\,D}\right]^{1/4}$$

2. Their ratio:
$$\frac{h_{horiz}}{h_{vert}} = \frac{0.729}{0.943}\left(\frac{L}{D}\right)^{1/4} = 0.773\left(\frac{5}{1.5}\right)^{1/4} = 1.04$$

3. The two are equal when $L = (0.943/0.729)^4 D = 2.77D$. Here $L/D = 3.33 > 2.77$, so the **horizontal orientation** gives the higher condensation coefficient (about 4% higher) and is the suitable one. The film drains over the short path around the circumference (πD/2 ≈ 2.4 m) instead of down a 5 m height, where the film would grow thicker.

**Caveats:**
- The moisture condenses from humid air, so non-condensable air dominates the resistance (diffusion of vapour through air), and the actual rates are far below Nusselt values.
- At −42°C the moisture actually freezes to frost. The comparison of orientation still holds qualitatively.`,
          answer: String.raw`$h_{horiz}/h_{vert} = 0.773(L/D)^{1/4} = 1.04$. Since L/D = 3.33 > 2.77, the **horizontal** orientation is (slightly) better for film condensation.` },
        { id: "2023-24-Q6d", label: "(d)", marks: "5",
          topic: "boiling", sub: "Can the propane boil? (excess temperature)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Is there any possibility of getting boiling of the propane inside the propane tank? Rationalize your claim.`,
          solution: String.raw`- The propane is a **saturated liquid** at its boiling point (−42°C at 1 atm), so every joule that enters turns liquid into vapour. In that sense it is a boiling (phase-change) process: about 0.025 kg/s leaves as vapour (part b).
- What matters for the *type* of boiling is the **excess temperature** $\Delta T_{excess} = T_{wall} - T_{sat}$. By assumption the tank wall is at the same temperature as the propane, so $\Delta T_{excess} \approx 0$. The heat flux is only $\dot Q/A = 10{,}500/27.1 \approx 390$ W/m², which is tiny compared with nucleate boiling fluxes ($10^4$–$10^6$ W/m²). So the process is at the very start of the boiling curve: **Regime I, natural-convection boiling**. The liquid is heated slightly at the wall, circulates by buoyancy, and evaporates quietly at the **free surface**. No vigorous nucleate bubbles form on the wall.
- **Nucleate boiling becomes possible** if the wall is a few °C above −42°C (roughly 2–5°C superheat for propane). That could happen if the wall is warmed locally by sun, a fire or a hand, or if the pressure suddenly drops further (flashing). Then bubbles would form on the wall and the vaporisation rate would rise sharply.

**Conclusion:** yes, the propane evaporates at its saturation temperature, but under the stated conditions it is gentle natural-convection (surface) evaporation, not nucleate boiling, because $\Delta T_{excess} \approx 0$.`,
          answer: String.raw`It vaporises at $T_{sat}$, but $\Delta T_{excess} \approx 0$ and $q'' \approx 390$ W/m², so it is regime I natural-convection boiling (quiet evaporation at the free surface). Nucleate boiling would need a wall a few °C above −42°C.` },
      ] },
    { id: "2023-24-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q7a", label: "(a)", marks: "9+16",
          topic: "condensation", sub: "Re-form of Nusselt h; condenser tube bank",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The condenser of a steam power plant operates at a pressure of 4.25 kPa. The steam that enters the tube is slightly superheated with 10°C of superheat. The condenser consists of 100 horizontal tubes arranged in a 10 × 10 square array. The tubes are 8 m long and have an outer diameter of 3 cm. The tube surfaces are maintained at 18°C. The condensate that leaves the condenser is 5°C sub-cooled.

(i) In most cases $\rho_v \ll \rho_l$ and thus $\rho_l - \rho_v \approx \rho_l$. Using this approximation, prove that the average heat transfer coefficient of a vertical flat plate has the following relationship with the Re number (a simplified version of the Nusselt equation for condensation), where the symbols have their usual meaning:

$$h_{vert} \cong 1.47\,k_l\,\mathrm{Re}^{-1/3}\left(\frac{g}{\nu_l^2}\right)^{1/3},\qquad 0 < \mathrm{Re} < 30,\ \rho_v \ll \rho_l$$

where $h = h_{ave} = \frac{1}{L}\int_0^L h_x\,dx = \frac{4}{3}h_{x=L}$.

(ii) Determine the rate of heat transfer from the steam to the cooling water and the rate of condensation of steam in the condenser.

![Shell condenser: 100 horizontal tubes in a 10 × 10 array, N = 10 per column](fig/2023-24-Q7a.svg)`,
          solution: String.raw`### (i) Re-form of the Nusselt vertical-plate coefficient
**Assumptions:** laminar, wave-free film (Re < 30); $\rho_v \ll \rho_l$; plate of width $b$ (wetted perimeter $p = b$) and height L; steady state; average $h = \frac43 h_{x=L}$ (consistent with $h_x \propto x^{-1/4}$).

![Nusselt film on a vertical plate, the basis of the Re form of h](fig/2022-23-Q6a-sol.svg)

1. Nusselt average coefficient (data sheet), with $\rho_l - \rho_v \approx \rho_l$:
$$h = 0.943\left[\frac{g\rho_l^2h^*_{fg}k_l^3}{\mu_l(T_{sat} - T_s)L}\right]^{1/4}$$

2. Film Reynolds number at the bottom of the plate (data sheet), with $A_s = bL$ and $p = b$:
$$\mathrm{Re} = \frac{4\dot m}{p\mu_l} = \frac{4\dot Q}{p\mu_lh^*_{fg}} = \frac{4A_sh(T_{sat} - T_s)}{p\mu_lh^*_{fg}} = \frac{4Lh(T_{sat} - T_s)}{\mu_lh^*_{fg}}$$
so
$$(T_{sat} - T_s)L = \frac{\mathrm{Re}\,\mu_lh^*_{fg}}{4h}$$

3. Raise step 1 to the 4th power and substitute step 2:
$$h^4 = 0.943^4\,\frac{g\rho_l^2h^*_{fg}k_l^3}{\mu_l}\cdot\frac{4h}{\mathrm{Re}\,\mu_lh^*_{fg}} = 0.943^4 \times 4\,\frac{g\rho_l^2k_l^3}{\mu_l^2}\,\frac{h}{\mathrm{Re}}$$
$h^*_{fg}$ and ΔT cancel.

4. Divide by h, use $\nu_l = \mu_l/\rho_l$, and take the cube root:
$$h^3 = \frac{4(0.943)^4\,k_l^3\,g}{\nu_l^2\,\mathrm{Re}}$$
$$h = \left[4(0.943)^4\right]^{1/3}k_l\,\mathrm{Re}^{-1/3}\left(\frac{g}{\nu_l^2}\right)^{1/3}$$

5. Numerical constant: $4 \times 0.943^4 = 4 \times 0.7908 = 3.163$, and $3.163^{1/3} = 1.468$.
$$\boxed{h_{vert} \cong 1.47\,k_l\,\mathrm{Re}^{-1/3}\left(\frac{g}{\nu_l^2}\right)^{1/3}}\qquad (0 < \mathrm{Re} < 30)$$

(The constant 0.943 itself comes from integrating the local Nusselt coefficient $h_x = [g\rho_l^2h_{fg}k_l^3/(4\mu_l\Delta T x)]^{1/4}$: $h = \frac{1}{L}\int_0^Lh_xdx = \frac43h_{x=L} = 0.943[\ldots/L]^{1/4}$.)

### (ii) Condenser
**Given:** $p = 4.25$ kPa, so $T_{sat} = 30^\circ$C (Çengel Table A-9: 4.247 kPa); superheat 10°C; 10 × 10 bank, so N = 10 tubes per column; $D = 0.03$ m, $L = 8$ m; $T_s = 18^\circ$C; condensate leaves 5°C subcooled.

**Assumptions:** laminar film; Nusselt tube-bank relation; $T_s$ uniform; the superheat is added to $h^*_{fg}$ (Çengel).

1. Liquid properties at $T_f = (30 + 18)/2 = 24^\circ$C (Çengel A-9, interpolated): $\rho_l = 997.2$ kg/m³, $\mu_l = 9.13\times10^{-4}$ kg/m·s, $k_l = 0.605$ W/m·°C, $c_{pl} = 4180$ J/kg·°C. At 30°C: $h_{fg} = 2431$ kJ/kg, $\rho_v = 0.0304$ kg/m³, $c_{pv} = 1915$ J/kg·°C.

2. Modified latent heat (subcooled film plus superheat):
$$h^*_{fg} = h_{fg} + 0.68c_{pl}(T_{sat} - T_s) + c_{pv}(T_v - T_{sat})$$
$$h^*_{fg} = 2431\times10^3 + 0.68 \times 4180 \times 12 + 1915 \times 10 = 2.484\times10^6\ \mathrm{J/kg}$$

3. Tube-bank coefficient (data sheet), N = 10:
$$h = 0.729\left[\frac{g\rho_l(\rho_l - \rho_v)h^*_{fg}k_l^3}{\mu_l(T_{sat} - T_s)ND}\right]^{1/4} = 0.729\left[\frac{9.81 \times 997.2 \times 997.2 \times 2.484\times10^6 \times 0.605^3}{9.13\times10^{-4} \times 12 \times 10 \times 0.03}\right]^{1/4}$$
$$h = 4635\ \mathrm{W/m^2\,^\circ C}$$

4. Surface area:
$$A = n\pi DL = 100 \times \pi \times 0.03 \times 8 = 75.40\ \mathrm{m^2}$$

5. **Rate of heat transfer:**
$$\dot Q = hA(T_{sat} - T_s) = 4635 \times 75.40 \times 12 = 4.19\times10^6\ \mathrm{W} \approx 4.19\ \mathrm{MW}$$

6. **Rate of condensation:**
$$\dot m = \frac{\dot Q}{h^*_{fg}} = \frac{4.19\times10^6}{2.484\times10^6} = 1.69\ \mathrm{kg/s}$$
On a strict energy basis (superheat + $h_{fg}$ + 5°C subcooling $= 19.2 + 2431 + 20.9 = 2471$ kJ/kg) it is 1.70 kg/s, essentially the same.

**Exam tip:** N is the number of tubes in a vertical column (10), not 100. Superheat and subcooling change $\dot m$ by under 2%; the dominant term is $h_{fg}$.`,
          answer: String.raw`(i) Eliminating ΔT·L with $\mathrm{Re} = 4Lh\Delta T/(\mu_lh^*_{fg})$ gives $h = (4\times0.943^4)^{1/3}k_l\mathrm{Re}^{-1/3}(g/\nu_l^2)^{1/3} = 1.47\ldots$ (ii) $T_{sat} = 30^\circ$C, $h^*_{fg} = 2.484$ MJ/kg, $h \approx 4.6$ kW/m²°C, A = 75.4 m², $\dot Q \approx 4.19$ MW, $\dot m \approx 1.69$ kg/s.` },
        { id: "2023-24-Q7b", label: "(b)", marks: "5+5",
          topic: "natural-convection", sub: "Inclined hot plate and horizontal cold plate profiles",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the boundary layer profile for the following natural convection heating/cooling system and explain the reason for the shape and distortion of the profile.

(i) The top and bottom surfaces of the inclined hot flat plate

(ii) The top and bottom surfaces of the horizontal cold flat plate`,
          solution: String.raw`![Inclined hot plate and horizontal cold plate: which face holds the layer and which sheds plumes](fig/2023-24-Q7b-sol.svg)

### (i) Inclined hot plate (angle θ from the vertical)
The buoyancy force $g\Delta\rho$ acts vertically upward on the heated air. Split it into a component **along** the plate ($g\cos\theta$) and a component **normal** to it ($g\sin\theta$).

- **Bottom (lower) surface:** the normal component pushes the warm air *toward* the plate, holding the layer against it. The flow stays attached and moves up the plate under $g\cos\theta$.
  - *Sketch:* a smooth, thin layer growing from the lower edge to the upper edge, like a vertical plate but slightly thicker.
  - Analysis: use the vertical-plate relations with g replaced by $g\cos\theta$ (Ra < 10⁹). h is a little lower than for a vertical plate.
- **Top (upper) surface:** the normal component pulls the warm air *away* from the plate. The layer thickens quickly, becomes unstable, **separates** and rises as plumes and thermals well before the upper edge, giving a 3-D, partly turbulent flow.
  - *Sketch:* a thin layer near the lower edge, then a sharply thickening, lifted-off layer with plumes rising vertically from the surface.
  - The early instability enhances mixing at high Ra, so h on the upper side is often equal to or larger than on the lower side. The vertical-plate formula with $g\cos\theta$ does not apply.

(For a **cold** inclined plate the roles swap: the upper surface behaves like the "attached" case.)

### (ii) Horizontal cold plate (e.g. a chilled ceiling panel)
The cooled air next to the plate is heavier and tends to **sink**.

- **Bottom surface (cold face down):** the dense cold air falls freely away from the plate as **descending plumes**, and warm room air continually replaces it.
  - *Sketch:* a thin layer near the edges, with cold air drawn inward and falling as a central plume or cellular sinking streams.
  - Strong convection, high h: $\mathrm{Nu} = 0.54\,\mathrm{Ra}^{1/4}$ or $0.15\,\mathrm{Ra}^{1/3}$, the same as the upper surface of a hot plate.
- **Top surface (cold face up):** the cooled air wants to sink but the plate blocks it. It forms a stagnant, stratified cold layer on the plate and can leave only by spreading slowly **outward over the edges**.
  - *Sketch:* a thick layer, thickest at the centre, thinning toward the edges, with flow spilling off the edges.
  - Weak convection, low h: $\mathrm{Nu} = 0.27\,\mathrm{Ra}^{1/4}$, the same as the lower surface of a hot plate. Characteristic length $L_c = A_s/p$.

**Reason for the distortion in both cases:** the shape is set by whether the buoyancy force (which always acts vertically) can carry fluid **away from** the surface freely (thin layer, plumes, high h) or pushes it **against** the surface so it must escape along it (thick, sluggish layer, low h).`,
          answer: String.raw`Inclined hot plate: the bottom face keeps an attached thin BL (vertical-plate correlation with g cos θ), while the top face separates into rising plumes. Horizontal cold plate: the bottom face sheds falling plumes (high h, 0.54/0.15 Ra^n), while the top face holds a thick stagnant layer draining over the edges (low h, 0.27 Ra^{1/4}).` },
      ] },
    { id: "2023-24-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q8a", label: "(a)", marks: "15",
          topic: "forced-convection", sub: "Annulus, inner wall at constant T: required length",
          type: "numerical", syllabus: "in", repeats: ["2021-22-Q5c"],
          text: String.raw`An annulus consists of the region between two concentric tubes having diameters of 4 cm and 5 cm. Ethylene glycol flows in this space at a velocity of 6.9 m/s. The entrance temperature is 20°C, and the exit temperature is 40°C. Only the inner tube is a heating surface, and it is maintained at a constant temperature of 80°C. Calculate the length of the annulus necessary to effect the heat transfer.`,
          solution: String.raw`**Given:** $D_i = 0.04$ m (heated, $T_w = 80^\circ$C), $D_o = 0.05$ m (insulated); $u_m = 6.9$ m/s; $T_b$: 20 → 40°C.

**Find:** the annulus length L.

![Annulus D₁ = 4 cm, D₂ = 5 cm: only the inner tube (80°C) heats the glycol](fig/2021-22-Q5c.svg)

**Assumptions:** steady, fully developed turbulent flow; Dittus–Boelter with $n = 0.4$ (fluid heated) using the hydraulic diameter; properties at the mean bulk temperature 30°C; constant wall temperature, so the LMTD applies.

1. Ethylene glycol at 30°C (Holman Table A-4, linear interpolation between 20 and 40°C): $\rho = 1109$ kg/m³, $c_p = 2428$ J/kg·°C, $\nu = 1.394\times10^{-5}$ m²/s, $k = 0.2525$ W/m·°C, $\mathrm{Pr} = 148.5$.

2. Hydraulic diameter:
$$D_h = \frac{4A_c}{P_{wetted}} = D_o - D_i = 0.01\ \mathrm{m}$$

3. Reynolds number:
$$\mathrm{Re} = \frac{u_mD_h}{\nu} = \frac{6.9 \times 0.01}{1.394\times10^{-5}} = 4950\quad(\text{turbulent, but below }10^4)$$

4. Nusselt number and h:
$$\mathrm{Nu} = 0.023\,\mathrm{Re}^{0.8}\mathrm{Pr}^{0.4} = 0.023 \times (4950)^{0.8} \times (148.5)^{0.4} = 153.5$$
$$h = \frac{\mathrm{Nu}\,k}{D_h} = \frac{153.5 \times 0.2525}{0.01} = 3877\ \mathrm{W/m^2\,^\circ C}$$

5. Mass flow and duty:
$$A_c = \frac{\pi}{4}(0.05^2 - 0.04^2) = 7.069\times10^{-4}\ \mathrm{m^2}$$
$$\dot m = \rho u_mA_c = 1109 \times 6.9 \times 7.069\times10^{-4} = 5.41\ \mathrm{kg/s}$$
$$q = \dot mc_p\Delta T_b = 5.41 \times 2428 \times 20 = 2.627\times10^5\ \mathrm{W}$$

6. Log-mean temperature difference (constant $T_w$):
$$\Delta T_{lm} = \frac{(80 - 20) - (80 - 40)}{\ln(60/40)} = 49.3^\circ\mathrm{C}$$

7. Length (heat enters through the inner surface only):
$$q = h(\pi D_iL)\Delta T_{lm}\ \Rightarrow\ L = \frac{2.627\times10^5}{3877 \times \pi \times 0.04 \times 49.3} = 10.9\ \mathrm{m}$$

**Validity note:** Re ≈ 5000 and Pr ≈ 150 lie outside the strict Dittus–Boelter range (Re > 10⁴, Pr < 100), so the result is an estimate.
- Sieder–Tate with $(\mu/\mu_w)^{0.14}$, where $\mu_w$ is at 80°C, gives L ≈ 10.4 m.
- Kern's heat-transfer diameter $D_e = (D_o^2 - D_i^2)/D_i = 2.25$ cm gives L ≈ 12.9 m.
- Gnielinski (valid down to Re = 3000) gives about 14.7 m.
- Expect a length of 11–15 m.`,
          answer: String.raw`$D_h = 1$ cm, Re ≈ 4950, Pr = 148.5, Nu ≈ 154, $h \approx 3.88$ kW/m²°C; $\dot m = 5.41$ kg/s, q = 263 kW, LMTD = 49.3°C, so $L \approx 10.9$ m (Dittus–Boelter; estimate since Re < 10⁴).` },
        { id: "2023-24-Q8b", label: "(b)", marks: "17+3",
          topic: "boiling", sub: "Operating at 0.75 q_max: Zuber + Rohsenow",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q4b"],
          text: String.raw`In a gas-fired boiler, water is boiled at 150°C by hot gases flowing through 50-m-long, 5-cm-outer-diameter mechanically polished stainless-steel pipes submerged in water. The outer surface of the pipe should not exceed 170°C. Thus, the operating zone is maintained so that $q_{existing} = 0.75\,q_{critical}$. Determine whether the surface temperature of the flue gas pipe is below the safety limit. Also, determine the rate of steam production from the boiler.

![Gas-fired boiler: flue-gas pipe submerged in water boiling at 150°C](fig/2023-24-Q8b.svg)`,
          solution: String.raw`**Given:** $T_{sat} = 150^\circ$C; $D = 0.05$ m, $L = 50$ m; water on mechanically polished stainless steel; $\dot q = 0.75\,\dot q_{max}$; limit $T_s \le 170^\circ$C.

**Find:** $T_s$ at the operating flux, and $\dot m_{steam}$.

**Assumptions:** nucleate pool boiling on the outside of horizontal tubes; uniform flux; data-sheet formulas (Zuber with Table 10-4, Rohsenow with Table 10-3).

1. Properties of saturated water at 150°C (Çengel Table A-9, the same values as 2016-17 Q4b): $\rho_l = 916.6$ kg/m³, $\rho_v = 2.55$ kg/m³, $h_{fg} = 2114$ kJ/kg, $\mu_l = 1.83\times10^{-4}$ kg/m·s, $c_{pl} = 4311$ J/kg·°C, $\mathrm{Pr}_l = 1.16$. Table 10-1 gives $\sigma = 0.0509 + 0.5(0.0466 - 0.0509) = 0.04875 \approx 0.0488$ N/m. Table 10-3 gives $C_{sf} = 0.0130$, $n = 1$.

2. **Critical heat flux.** For a horizontal cylinder the characteristic length is the radius, $r = 0.025$ m:
$$L^* = r\left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2} = 0.025\left[\frac{9.81 \times 914.1}{0.0488}\right]^{1/2} = 0.025 \times 428.6 = 10.7 > 1.2$$
So this is a large horizontal cylinder with $C_{cr} = 0.12$.
$$\dot q_{max} = C_{cr}h_{fg}\left[\sigma g\rho_v^2(\rho_l - \rho_v)\right]^{1/4} = 0.12 \times 2.114\times10^6 \times [0.0488 \times 9.81 \times 2.55^2 \times 914.1]^{1/4}$$
$$\dot q_{max} = 1.85\times10^6\ \mathrm{W/m^2}$$

3. **Operating flux:**
$$\dot q = 0.75 \times 1.851\times10^6 = 1.388\times10^6\ \mathrm{W/m^2}$$

4. **Surface temperature from Rohsenow**, solved for $\Delta T_{excess}$:
$$\Delta T_{excess} = \frac{C_{sf}h_{fg}\mathrm{Pr}_l^{\,n}}{c_{pl}}\left[\frac{\dot q}{\mu_lh_{fg}\sqrt{g(\rho_l - \rho_v)/\sigma}}\right]^{1/3}$$
$$\frac{C_{sf}h_{fg}\mathrm{Pr}_l}{c_{pl}} = \frac{0.0130 \times 2.114\times10^6 \times 1.16}{4311} = 7.395^\circ\mathrm{C}$$
$$\mu_lh_{fg}\sqrt{g(\rho_l - \rho_v)/\sigma} = 1.83\times10^{-4} \times 2.114\times10^6 \times 428.6 = 1.658\times10^5$$
$$\Delta T_{excess} = 7.395 \times \left[\frac{1.388\times10^6}{1.658\times10^5}\right]^{1/3} = 7.395 \times 2.030 = 15.0^\circ\mathrm{C}$$
$$T_s = 150 + 15.0 = 165.0^\circ\mathrm{C}$$

5. **Safety check:** $T_s \approx 165^\circ$C < 170°C, so the pipe surface is **below the safety limit** (5°C margin). For comparison, $T_s = 170^\circ$C would need $\dot q = 3.3$ MW/m² by Rohsenow, which exceeds $\dot q_{max}$. The 0.75 CHF rule is therefore the governing (binding) constraint, not the 170°C limit.

6. **Steam production rate:**
$$A = \pi DL = \pi \times 0.05 \times 50 = 7.854\ \mathrm{m^2}$$
$$\dot Q = \dot qA = 1.388\times10^6 \times 7.854 = 1.09\times10^7\ \mathrm{W}$$
$$\dot m_{steam} = \frac{\dot Q}{h_{fg}} = \frac{1.090\times10^7}{2.114\times10^6} = 5.16\ \mathrm{kg/s}\ (\approx 18.6\ \mathrm{t/h})$$

**Link to 2016-17 Q4b:** with $T_s = 165^\circ$C that problem gave $\dot q = 1.38$ MW/m². This is exactly the 0.75 $\dot q_{max}$ operating point found here.`,
          answer: String.raw`$\dot q_{max} \approx 1.85$ MW/m² ($C_{cr} = 0.12$, L* = 10.7); $\dot q = 1.39$ MW/m², so $\Delta T_{excess} \approx 15.0^\circ$C and $T_s \approx 165^\circ$C < 170°C (safe). $\dot Q \approx 10.9$ MW, steam ≈ 5.16 kg/s.` },
      ] },
  ]
});
