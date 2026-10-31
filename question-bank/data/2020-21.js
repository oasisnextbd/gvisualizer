QB.paper({
  year: "2020-21", date: "25/10/2022", marks: 210,
  rules: String.raw`Section A: Q1 compulsory (35 marks) + any two of Q2–Q4. Section B: any three of Q5–Q8. Use separate scripts for each section.`,
  questions: [
    { id: "2020-21-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw`In a petroleum refinery, it is required to cool 30,000 lb/h of kerosene from 400°F to 250°F by heat exchange with 75,000 lb/h of gas oil, which is at 110°F. Available for this duty is a shell-and-tube exchanger having 156 tubes in a $21\frac{1}{4}$-in. ID shell. The tubes are 1-in. OD, 14 BWG, 16 ft long on a $1\frac{1}{4}$-in. square pitch. There is one pass on the shell side and six passes on the tube side. The baffles are 20% cut segmental type and are spaced at 5-in. intervals. Both the shell and tubes are carbon steel having $k = 26$ Btu/h·ft·°F. Following fluid properties are available:

| Fluid property | Kerosene | Gas oil |
|---|---|---|
| $c_p$ (Btu/lb·°F) | 0.6 | 0.5 |
| $\mu$ (cP) | 0.45 | 3.5 |
| $k$ (Btu/h·ft·°F) | 0.077 | 0.08 |`,
      parts: [
        { id: "2020-21-Q1a", label: "(a)", marks: "5",
          topic: "shell-tube", sub: "Heat balance, temperature profile, F-corrected LMTD (1-6)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Draw a temperature profile along the heat exchanger length, and find the corrected log mean temperature difference.`,
          solution: String.raw`**Given:** kerosene (hot) $W = 30{,}000$ lb/h, $T_1 = 400$°F → $T_2 = 250$°F, $c = 0.6$; gas oil (cold) $w = 75{,}000$ lb/h, $t_1 = 110$°F, $c = 0.5$; 1 shell pass, 6 tube passes.

**Find:** $t_2$, LMTD, $F_T$, $F_T\,\Delta T_{lm}$.

**Assumptions:** steady state, no heat loss, constant $c_p$.

**Fluid allocation (used in all parts):** kerosene in the **tubes** (hotter fluid: less shell heat loss; it gives a turbulent tube-side Re), gas oil in the **shell** (the more viscous, larger stream: baffled cross flow gives a good $h_o$ at a modest Re).

1. Heat balance:
$$Q = W c\,(T_1 - T_2) = 30{,}000(0.6)(400-250) = 2.70\times10^{6}\ \mathrm{Btu/h}$$
$$t_2 = t_1 + \frac{Q}{w c} = 110 + \frac{2.70\times10^6}{75{,}000(0.5)} = 182\ \mathrm{°F}$$

2. Counterflow LMTD: $\Delta t_h = T_1 - t_2 = 400-182 = 218$°F, $\Delta t_c = T_2 - t_1 = 250-110 = 140$°F
$$\Delta T_{lm} = \frac{218-140}{\ln(218/140)} = 176.1\ \mathrm{°F}$$

3. Correction factor (Holman Fig. 10-8, 1 shell pass, any even number of tube passes):
$$R = \frac{T_1-T_2}{t_2-t_1} = \frac{150}{72} = 2.08,\qquad S = \frac{t_2-t_1}{T_1-t_1} = \frac{72}{290} = 0.248$$
From the chart (or the 1-2 formula $F = \frac{\sqrt{R^2+1}}{R-1}\ln\frac{1-S}{1-RS}\Big/\ln\frac{2-S(R+1-\sqrt{R^2+1})}{2-S(R+1+\sqrt{R^2+1})}$): $F_T = 0.938$.
$$\Delta t = F_T\,\Delta T_{lm} = 0.938(176.1) = 165.3\ \mathrm{°F}$$

**Sketch (temperature vs. length):** vertical axis $T$ (°F), horizontal axis tube length. Kerosene (tube side) falls from 400°F to 250°F; gas oil (shell side) rises from 110°F to 182°F. In a 1-6 unit the tube-side curve zig-zags (parallel/counter passes alternate) while the shell curve is a smooth rise; the two curves never cross since $t_2 = 182 < T_2 = 250$°F (no temperature cross), which is why $F_T$ stays high (0.94).

![1-6 exchanger: kerosene zig-zags through six tube passes, gas oil rises smoothly in the shell](fig/2020-21-Q1a-sol.svg)

**Exam tip:** $F_T$ above about 0.75–0.8 means a 1-even-pass exchanger is acceptable for the duty.`,
          answer: String.raw`$Q = 2.70\times10^6$ Btu/h, gas oil leaves at 182°F; LMTD = 176.1°F, $F_T = 0.938$, corrected $\Delta t = 165.3$°F.` },
        { id: "2020-21-Q1b", label: "(b)", marks: "16",
          topic: "shell-tube", sub: "Kern rating: h_i (Fig. 24) and h_o (Fig. 28)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine the tube side and shell side heat transfer coefficients, $h_i$ and $h_o$ respectively.`,
          solution: String.raw`**Given:** 156 tubes, 1 in OD, 14 BWG (ID = 0.834 in, flow area per tube $a'_t = 0.546$ in², Kern Table 10), $L = 16$ ft, 6 tube passes, $P_T = 1.25$ in square, $D_s = 21.25$ in, $B = 5$ in.

**Assumptions:** no °API given, so the Kc–Fc chart cannot be used: properties at the arithmetic mean (caloric) temperatures, kerosene 325°F and gas oil 146°F, as tabulated in the question; $\phi = (\mu/\mu_w)^{0.14} = 1$ (no wall viscosity given). $\mu$(lb/ft·h) = 2.42 × cP: kerosene 1.089, gas oil 8.47.

### Tube side (kerosene)
1. Flow area: $a_t = \dfrac{N_t a'_t}{144\,n} = \dfrac{156(0.546)}{144(6)} = 0.0986$ ft²
2. Mass velocity: $G_t = W/a_t = 30{,}000/0.0986 = 3.04\times10^5$ lb/h·ft²
3. Reynolds number ($D = 0.834/12 = 0.0695$ ft):
$$Re_t = \frac{D G_t}{\mu} = \frac{0.0695(3.04\times10^5)}{1.089} = 1.94\times10^4\ \ (\text{turbulent})$$
4. Kern Fig. 24 ($L/D = 230$): $j_H \approx 73$ (fit $j_H = 0.027Re^{0.8}$ gives 72.8).
5. $Pr = c\mu/k = 0.6(1.089)/0.077 = 8.49$, $Pr^{1/3} = 2.04$
$$h_i = j_H\frac{k}{D}Pr^{1/3}\phi_t = 72.8\left(\frac{0.077}{0.0695}\right)(2.04)(1) = 164\ \mathrm{Btu/h\,ft^2\,°F}$$
6. Referred to the OD: $h_{io} = h_i\dfrac{ID}{OD} = 164.5(0.834) = 137$ Btu/h·ft²·°F

### Shell side (gas oil)
1. Clearance $C' = P_T - d_o = 0.25$ in; cross-flow area
$$a_s = \frac{D_s C' B}{144 P_T} = \frac{21.25(0.25)(5)}{144(1.25)} = 0.1476\ \mathrm{ft^2}$$
2. $G_s = w/a_s = 75{,}000/0.1476 = 5.08\times10^5$ lb/h·ft²
3. Equivalent diameter (square pitch):
$$D_e = \frac{4\left(P_T^2 - \pi d_o^2/4\right)}{\pi d_o} = \frac{4(1.25^2 - 0.785)}{\pi(1)} = 0.99\ \mathrm{in} = 0.0825\ \mathrm{ft}$$
4. $Re_s = \dfrac{D_e G_s}{\mu} = \dfrac{0.0825(5.08\times10^5)}{8.47} = 4.95\times10^3$
5. Kern Fig. 28: $j_H \approx 39$ (fit $0.36Re^{0.55}$ gives 38.7; Fig. 28 is drawn for 25% cut, used here for the 20% cut baffles).
6. $Pr = 0.5(8.47)/0.08 = 52.9$, $Pr^{1/3} = 3.75$
$$h_o = j_H\frac{k}{D_e}Pr^{1/3}\phi_s = 38.7\left(\frac{0.08}{0.0825}\right)(3.75)(1) = 141\ \mathrm{Btu/h\,ft^2\,°F}$$

**Exam tip:** if you put gas oil in the tubes instead, $Re_t \approx 6.2\times10^3$ (transition) and $U_C$ drops to about 50, so the chosen allocation is better.`,
          answer: String.raw`$h_i \approx 164$ Btu/h·ft²·°F ($h_{io} \approx 137$, $Re_t = 1.94\times10^4$); $h_o \approx 141$ Btu/h·ft²·°F ($Re_s = 4.95\times10^3$).` },
        { id: "2020-21-Q1c", label: "(c)", marks: "6",
          topic: "shell-tube", sub: "Clean/design U and dirt factor",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate the minimum required dirt factor for the exchanger.`,
          solution: String.raw`**Interpretation:** the dirt factor $R_d$ the exchanger provides when it just does the duty (it must be at least the required, ~0.003 for oil–oil service).

1. Clean coefficient (Kern, wall neglected):
$$U_C = \frac{h_{io}h_o}{h_{io}+h_o} = \frac{137.2(141.2)}{137.2+141.2} = 69.6\ \mathrm{Btu/h\,ft^2\,°F}$$
Including the carbon steel wall ($x_w = 0.083$ in, $k = 26$): $R_w = \frac{x_w}{k}\frac{d_o}{d_m} = \frac{0.083/12}{26}\cdot\frac{1}{0.917} = 2.9\times10^{-4}$, so $U_C = 1/(1/137.2 + 1/141.2 + 0.00029) = 68.2$.

2. Available surface ($a'' = 0.2618$ ft²/ft):
$$A = N_t\pi d_o L = 156(0.2618)(16) = 653.5\ \mathrm{ft^2}$$

3. Design coefficient needed for the duty:
$$U_D = \frac{Q}{A\,F_T\Delta T_{lm}} = \frac{2.70\times10^6}{653.5(165.3)} = 25.0\ \mathrm{Btu/h\,ft^2\,°F}$$

4. Dirt factor:
$$R_d = \frac{U_C - U_D}{U_C U_D} = \frac{69.6-25.0}{69.6(25.0)} = 0.0256\ \mathrm{h\,ft^2\,°F/Btu}$$
(0.0253 if the wall resistance is included.)

**Why it matters:** $R_d = 0.026$ is far above the 0.003–0.004 normally required for kerosene/gas oil, so the exchanger will do the duty with a large margin (it is oversized for this service).`,
          answer: String.raw`$U_C \approx 69.6$, $U_D \approx 25.0$ Btu/h·ft²·°F → $R_d \approx 0.026$ h·ft²·°F/Btu (> 0.003 required, so the unit is adequate).` },
        { id: "2020-21-Q1d", label: "(d)", marks: "8",
          topic: "shell-tube", sub: "Pressure drops and TEMA sheet",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Fill in the attached TEMA sheet and attach it to your answer script.`,
          solution: String.raw`**Assumptions:** specific gravities not given: kerosene $s = 0.73$ (at 325°F), gas oil $s = 0.85$ (at 146°F); $\phi = 1$; allowable ΔP taken as 10 psi each side (usual Kern value).

### Pressure drops
**Tube side.** $Re_t = 1.94\times10^4$ → Kern Fig. 26: $f \approx 0.00026$ ft²/in² (fit $f = 1.2\times4(0.0035+0.264Re^{-0.42}) = 0.0368$ ft²/ft²).
$$\Delta P_t = \frac{f G_t^2 L n}{5.22\times10^{10} D s \phi_t} = \frac{0.000256(3.04\times10^5)^2(16)(6)}{5.22\times10^{10}(0.0695)(0.73)} = 0.86\ \mathrm{psi}$$
Actual velocity $V = G_t/(3600\rho) = 3.04\times10^5/(3600\times62.5\times0.73) = 1.85$ ft/s. For the return loss, Kern Fig. 27 gives $V^2/2g'$ (psi) against $G_t$ on a water basis, so it is evaluated with $V_w = G_t/(3600\times62.5) = 1.35$ ft/s; the density correction is the $1/s$ in the formula:
$$\frac{V^2}{2g'} = \frac{1.35^2}{2(32.2)}\left(\frac{62.5}{144}\right) = 0.0123\ \mathrm{psi},\qquad \Delta P_r = \frac{4n}{s}\frac{V^2}{2g'} = \frac{4(6)}{0.73}(0.0123) = 0.40\ \mathrm{psi}$$
$\Delta P_T = 0.86 + 0.40 = 1.3$ psi.

**Shell side.** $Re_s = 4.95\times10^3$ → Kern Fig. 29: $f \approx 0.0025$ ft²/in² (fit $e^{0.576-0.19\ln Re}/144$). $N+1 = 12L/B = 12(16)/5 = 38.4$.
$$\Delta P_s = \frac{f G_s^2 D_s (N+1)}{5.22\times10^{10} D_e s \phi_s} = \frac{0.00245(5.08\times10^5)^2(1.771)(38.4)}{5.22\times10^{10}(0.0825)(0.85)} = 11.8\ \mathrm{psi}$$

### TEMA sheet (filled)
| Item | Shell side | Tube side |
|---|---|---|
| Size and type | 21¼–192, 1-6, horizontal, fixed tube sheet | |
| Surface per unit | 653.5 ft² | |
| Heat exchanged / corrected MTD | $2.70\times10^6$ Btu/h / 165.3°F | |
| Fluid | Gas oil | Kerosene |
| Flow rate | 75,000 lb/h | 30,000 lb/h |
| Temperature in / out | 110 / 182°F | 400 / 250°F |
| Viscosity | 3.5 cP | 0.45 cP |
| Specific heat / k | 0.5 / 0.08 | 0.6 / 0.077 |
| Velocity | 2.7 ft/s (cross flow) | 1.85 ft/s |
| Passes | 1 | 6 |
| ΔP allowed / calculated | 10 / 11.8 psi | 10 / 1.3 psi |
| Film coefficient | $h_o = 141$ | $h_{io} = 137$ (h_i = 164) Btu/h·ft²·°F |
| Fouling resistance | $R_d$ (total) = 0.026 h·ft²·°F/Btu available | |
| $U_C$ / $U_D$ | 69.6 / 25.0 Btu/h·ft²·°F | |
| Tubes | 156, 1 in OD, 14 BWG, 16 ft, 1¼ in square pitch, carbon steel | |
| Shell | 21¼ in ID, carbon steel | |
| Baffles | 20% cut segmental, 5 in spacing | |

**Comment:** thermally the unit has ample surface, but the shell-side ΔP (≈ 11.8 psi) is slightly above a 10 psi allowance; widening the baffle spacing would bring it down (ΔP ∝ roughly $B^{-2.8}$ at fixed flow) at the cost of some of the excess $R_d$.`,
          answer: String.raw`$\Delta P_T \approx 1.3$ psi (tubes), $\Delta P_s \approx 11.8$ psi (shell); TEMA: 21¼–192, 1-6, 653.5 ft², $U_C = 69.6$, $U_D = 25.0$, $R_d = 0.026$.` },
      ] },
    { id: "2020-21-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q2a", label: "(a)", marks: "6",
          topic: "heat-exchangers", sub: "Annulus equivalent diameters (heat transfer vs pressure drop)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"Equivalent diameter of the annular area of a double pipe system can be different based on its application." – Explain.`,
          solution: String.raw`For a non-circular passage the equivalent diameter is $4\times$(flow area)/(relevant perimeter). In a double-pipe exchanger (inner pipe OD $D_1$, outer pipe ID $D_2$) the **perimeter that matters depends on what is being calculated**:

![Annulus: heated perimeter π D₁ for heat transfer, wetted perimeter π(D₁ + D₂) for friction](fig/2020-21-Q2a-sol.svg)

- **Heat transfer** – only the outer surface of the inner pipe transfers heat, so the heated perimeter is $\pi D_1$:
$$D_e = \frac{4\cdot\frac{\pi}{4}(D_2^2-D_1^2)}{\pi D_1} = \frac{D_2^2 - D_1^2}{D_1}$$
This $D_e$ is used in $Re$ and $Nu$ for the annulus film coefficient $h_o$ (Kern).
- **Pressure drop (friction)** – friction acts on both walls, so the wetted perimeter is $\pi(D_1 + D_2)$:
$$D'_e = \frac{4\cdot\frac{\pi}{4}(D_2^2-D_1^2)}{\pi(D_1+D_2)} = D_2 - D_1$$
This $D'_e$ is used in the Reynolds number for the friction factor and in $\Delta P = 4fG^2L/(2g\rho^2 D'_e)$.

| | Heat transfer $D_e$ | Pressure drop $D'_e$ |
|---|---|---|
| Perimeter | heated, $\pi D_1$ | wetted, $\pi(D_1+D_2)$ |
| Formula | $(D_2^2-D_1^2)/D_1$ | $D_2-D_1$ |
| Size | larger | smaller |

So the same annulus has two "diameters", one for the film coefficient and one for friction.`,
          answer: String.raw`Heat transfer uses the heated perimeter: $D_e = (D_2^2-D_1^2)/D_1$. Pressure drop uses the wetted perimeter: $D'_e = D_2 - D_1$.` },
        { id: "2020-21-Q2b", label: "(b)", marks: "6",
          topic: "convection-basics", sub: "Physical meaning of Nusselt number",
          type: "theory", syllabus: "in", repeats: ["practice-convection-basics-P8a"],
          text: String.raw`"Nusselt number is also considered as dimensionless heat transfer coefficient" – explain.`,
          solution: String.raw`At the wall the fluid is at rest, so the heat convected away must be conducted through the fluid layer touching the wall:
$$h(T_w - T_\infty) = -k\left.\frac{\partial T}{\partial y}\right|_{y=0}$$
Make $y$ and $T$ dimensionless with a length $L$ and $\Delta T = T_w - T_\infty$ ($Y = y/L$, $\theta = (T-T_\infty)/\Delta T$):
$$Nu = \frac{hL}{k} = -\left.\frac{\partial \theta}{\partial Y}\right|_{Y=0}$$

- $Nu$ is $h$ scaled by $k/L$, i.e. it is the heat transfer coefficient made dimensionless. Correlations are written as $Nu = f(Re, Pr)$ or $f(Gr, Pr)$ and $h$ is recovered as $h = Nu\,k/L$.
- It is the **dimensionless temperature gradient at the wall**.
- It is the ratio of convective to pure conductive heat transfer across a fluid layer of thickness $L$: $\dfrac{q_{conv}}{q_{cond}} = \dfrac{h\Delta T}{k\Delta T/L} = \dfrac{hL}{k}$. $Nu = 1$ means pure conduction; larger values mean more effective convection.`,
          answer: String.raw`$Nu = hL/k = -(\partial\theta/\partial Y)_{wall}$: it is $h$ scaled by $k/L$, i.e. convection compared with conduction through the same layer.` },
        { id: "2020-21-Q2c", label: "(c)", marks: "6",
          topic: "shell-tube", sub: "Choosing the tube-side and shell-side fluids",
          type: "theory", syllabus: "in", repeats: ["practice-shell-tube-P6a"],
          text: String.raw`For a shell and tube heat exchanger, mention few criteria to decide shell side and tube side fluid.`,
          solution: String.raw`Put in the **tubes**:
- **Fouling / dirty fluid** (e.g. cooling water, kerosene in the course example): tubes are easier to clean mechanically.
- **Corrosive fluid**: only the tubes and channels need expensive alloy, not the whole shell.
- **High-pressure fluid**: small-diameter tubes withstand pressure more cheaply than a large shell.
- **High-temperature fluid**: reduces heat loss from the shell and the need for alloy/insulation on the shell.
- **Fluid needing high velocity or a low, predictable ΔP**: tube-side velocity and ΔP are set accurately by the number of passes.
- **Toxic or valuable fluid**: less chance of leakage.

Put in the **shell**:
- **Viscous fluid or low flow rate**: baffled cross flow gives turbulence (and good $h_o$) at $Re$ as low as ~100–200.
- **Condensing or boiling fluid** (steam, vapour): space for vapour and condensate drainage.
- **Fluid with a low allowable ΔP** (gases, vacuum vapour): the shell gives a large flow area.`,
          answer: String.raw`Tubes: fouling, corrosive, high-pressure, hot or toxic fluid. Shell: viscous fluid, low flow rate, condensing vapour, or low allowable ΔP.` },
        { id: "2020-21-Q2d", label: "(d)", marks: "17",
          topic: "heat-exchangers", sub: "Double-pipe hairpins for a steam condenser",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A steam condenser is designed to condense 76 kg/min of steam at 83 kPa with cooling water at 10°C. The exit water temperature is not to exceed 57°C. The overall heat-transfer coefficient is 3400 W/m²·°C. If the condenser is a double pipe hairpin of 1/2-in. OD, 16 BWG, 18 ft long, calculate the number of hairpins required to fulfill the requirement. $T_{sat} = 95.6$°C, $h_{fg} = 2.27\times10^6$ J/kg.`,
          solution: String.raw`**Given:** $\dot m_s = 76$ kg/min, $T_{sat} = 95.6$°C, $h_{fg} = 2.27\times10^6$ J/kg; water 10 → 57°C; $U = 3400$ W/m²·°C; inner tube $d_o = 0.5$ in = 0.0127 m; hairpin of 18 ft legs.

**Find:** number of hairpins.

![Double-pipe hairpin exchanger](fig/common-double-pipe.svg)

**Assumptions:** U based on the outside area of the inner tube; a "hairpin 18 ft long" has two 18 ft legs (Kern's convention); condensing at constant $T_{sat}$ (so $F = 1$); no subcooling.

1. Heat load:
$$Q = \dot m_s h_{fg} = \frac{76}{60}(2.27\times10^6) = 2.875\times10^6\ \mathrm{W}$$
(Cooling water needed: $\dot m_w = Q/(c_p\Delta t) = 2.875\times10^6/(4180\times47) = 14.6$ kg/s.)

2. LMTD (condensing, flow direction irrelevant):
$$\Delta T_1 = 95.6-10 = 85.6,\ \ \Delta T_2 = 95.6-57 = 38.6\ \mathrm{°C}$$
$$\Delta T_{lm} = \frac{85.6-38.6}{\ln(85.6/38.6)} = 59.0\ \mathrm{°C}$$

3. Area required:
$$A = \frac{Q}{U\Delta T_{lm}} = \frac{2.875\times10^6}{3400(59.0)} = 14.33\ \mathrm{m^2}$$

4. Area per hairpin (two legs of $18\times0.3048 = 5.486$ m):
$$A_{hp} = \pi d_o (2L) = \pi(0.0127)(2\times5.486) = 0.438\ \mathrm{m^2}$$

5. Number of hairpins:
$$N = \frac{14.33}{0.438} = 32.7 \;\Rightarrow\; 33\ \text{hairpins}$$

(If "18 ft" is read as the total tube length per hairpin, 66 hairpins would be needed; if U were based on the inner surface, ID = 0.37 in, 45 hairpins.)

**Exam tip:** for a condensing fluid $R = 0$, so $F = 1$ for any arrangement; only the LMTD and the area per hairpin matter.`,
          answer: String.raw`$Q = 2.875$ MW, LMTD = 59.0°C, $A = 14.3$ m² → about **33 hairpins** (0.438 m² each).` },
      ] },
    { id: "2020-21-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q3a", label: "(a)", marks: "18",
          topic: "heat-exchangers", sub: "LMTD derivation and assumptions",
          type: "derivation", syllabus: "in", repeats: ["practice-heat-exchangers-P1a"],
          text: String.raw`Derive the working equation of LMTD and state the assumptions made for the derivation.`,
          solution: String.raw`**Assumptions (the five listed in the slides)**
1. The exchanger is insulated from its surroundings: heat is exchanged only between the hot and cold fluids (no heat loss).
2. Axial conduction along the tubes is negligible.
3. Potential and kinetic energy changes are negligible.
4. The fluid specific heats are constant.
5. The overall heat transfer coefficient $U$ is constant.

![Temperature profiles: parallel flow, counterflow, condensing and boiling](fig/common-hx-profiles.svg)

Also implied: steady state with constant flow rates, no partial phase change (a phase change at constant temperature is allowed), and one bulk temperature for each fluid at any cross-section.

**Derivation (parallel flow; hot $h$, cold $c$, area coordinate $A$ from inlet)**

Over an element $dA$:
$$dq = U\,(T_h - T_c)\,dA \tag{1}$$
$$dq = -\dot m_h c_h\,dT_h = \dot m_c c_c\,dT_c \tag{2}$$
From (2):
$$dT_h = -\frac{dq}{\dot m_h c_h},\quad dT_c = \frac{dq}{\dot m_c c_c}\ \Rightarrow\ d(T_h - T_c) = -dq\left(\frac{1}{\dot m_h c_h} + \frac{1}{\dot m_c c_c}\right)$$
Substitute (1), with $\Delta T = T_h - T_c$:
$$\frac{d(\Delta T)}{\Delta T} = -U\left(\frac{1}{\dot m_h c_h} + \frac{1}{\dot m_c c_c}\right)dA$$
Integrate from inlet (1) to outlet (2):
$$\ln\frac{\Delta T_2}{\Delta T_1} = -UA\left(\frac{1}{\dot m_h c_h} + \frac{1}{\dot m_c c_c}\right) \tag{3}$$
Overall balances: $\dfrac{1}{\dot m_h c_h} = \dfrac{T_{h1}-T_{h2}}{q}$, $\dfrac{1}{\dot m_c c_c} = \dfrac{T_{c2}-T_{c1}}{q}$, so
$$\frac{1}{\dot m_h c_h} + \frac{1}{\dot m_c c_c} = \frac{(T_{h1}-T_{c1}) - (T_{h2}-T_{c2})}{q} = \frac{\Delta T_1 - \Delta T_2}{q}$$
Put into (3):
$$\ln\frac{\Delta T_2}{\Delta T_1} = -\frac{UA}{q}(\Delta T_1 - \Delta T_2)\ \Rightarrow\ q = UA\,\frac{\Delta T_2 - \Delta T_1}{\ln(\Delta T_2/\Delta T_1)}$$
$$\boxed{q = UA\,\Delta T_{lm},\qquad \Delta T_{lm} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1/\Delta T_2)}}$$

**Counterflow:** repeating with $dT_c$ of the same sign as $dT_h$ (the cold fluid flows the other way) gives the same form with $\Delta T_1 = T_{h,in} - T_{c,out}$ and $\Delta T_2 = T_{h,out} - T_{c,in}$.

For multipass or cross-flow exchangers: $q = UAF\,\Delta T_{lm,cf}$, with $F$ from charts (Holman Fig. 10-8).`,
          answer: String.raw`$q = UA\,\Delta T_{lm}$, $\Delta T_{lm} = (\Delta T_1 - \Delta T_2)/\ln(\Delta T_1/\Delta T_2)$, assuming an insulated exchanger, negligible axial conduction, negligible KE/PE changes, constant $c_p$ and constant $U$.` },
        { id: "2020-21-Q3b", label: "(b)", marks: "17",
          topic: "condensation", sub: "Horizontal tube bank (400 tubes) with modified h_fg",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A steam condenser consists of a square array of 400 tubes, each 6 mm in diameter. If the tubes are exposed to saturated steam at 0.15 bar, and the tube surface temperature is maintained at 25°C, calculate the steam condensation rate per unit length of the tube for this array. Consider modified heat of vaporization for your calculation.`,
          solution: String.raw`**Given:** 400 tubes in a square array → $N = 20$ tubes per vertical column; $D = 0.006$ m; $p = 15$ kPa; $T_w = 25$°C.

**Find:** condensation rate per metre of tube length (whole array).

![Condensation on a horizontal tube bank: the film thickens down each column](fig/common-tube-bank-condensation.svg)

**Assumptions:** laminar film condensation on horizontal tubes (Nusselt); vapour quiescent, no non-condensables; condensate from upper tubes falls on lower tubes ($h_N = h_1N^{-1/4}$).

**Properties.** Saturated steam at 15 kPa (Çengel Table A-5): $T_{sat} = 53.97$°C, $h_{fg} = 2372.4$ kJ/kg, $\rho_v = 1/10.02 = 0.0998$ kg/m³. Liquid at film temperature $T_f = (53.97+25)/2 \approx 40$°C (Çengel Table A-9): $\rho_l = 992.1$ kg/m³, $\mu_l = 0.653\times10^{-3}$ kg/m·s, $k_l = 0.631$ W/m·K, $c_{pl} = 4179$ J/kg·K.

1. $\Delta T = T_{sat} - T_w = 28.97$°C. Modified latent heat:
$$h^*_{fg} = h_{fg} + 0.68c_{pl}\Delta T = 2372.4\times10^3 + 0.68(4179)(28.97) = 2.455\times10^6\ \mathrm{J/kg}$$

2. Average h for the bank of $N$ tubes (Nusselt, as in the slides):
$$h = 0.725\left[\frac{\rho_l(\rho_l-\rho_v)g h^*_{fg}k_l^3}{N D\mu_l\Delta T}\right]^{1/4}$$
$$= 0.725\left[\frac{992.1(992.0)(9.81)(2.455\times10^6)(0.631)^3}{20(0.006)(0.653\times10^{-3})(28.97)}\right]^{1/4} = 5.19\times10^3\ \mathrm{W/m^2K}$$
(A single tube would have $h_1 = hN^{1/4} = 1.10\times10^4$ W/m²K.)

3. Heat transfer per metre of tube length for 400 tubes:
$$q' = h(N_t\pi D)\Delta T = 5188(400\pi\times0.006)(28.97) = 1.133\times10^6\ \mathrm{W/m}$$

4. Condensation rate:
$$\dot m' = \frac{q'}{h^*_{fg}} = \frac{1.133\times10^6}{2.455\times10^6} = 0.462\ \mathrm{kg/s\ per\ m}\ (\approx 1660\ \mathrm{kg/h\cdot m})$$

**Why it matters:** the $N^{-1/4}$ factor cuts the average h by half for a 20-row column because the lower tubes sit under a thicker film.`,
          answer: String.raw`$h \approx 5.19\times10^3$ W/m²K, $q' \approx 1.13$ MW/m, condensation ≈ **0.46 kg/s per metre** of array length (≈ 1660 kg/h·m).` },
      ] },
    { id: "2020-21-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q4a", label: "(a)", marks: "6",
          topic: "boiling", sub: "Critical heat flux and the factors that affect it",
          type: "theory", syllabus: "in", repeats: ["practice-boiling-P6a"],
          text: String.raw`What is the critical heat flux of a pool boiling curve? List the factors that can influence the critical heat flux.`,
          solution: String.raw`![Pool boiling curve with its regimes, the critical heat flux and the Leidenfrost point](fig/common-boiling-curve.svg)

**Critical (peak, burnout) heat flux** $\dot q_{max}$ is the maximum heat flux on the pool boiling curve, at the end of the nucleate boiling regime (point C, about $\Delta T_e \approx 30$°C for water at 1 atm). Beyond it, bubbles merge into vapour columns and patches, vapour blankets the surface, and the flux falls (transition boiling). In a heat-flux-controlled heater (electric), raising the flux above $\dot q_{max}$ makes the surface temperature jump to the film boiling curve (≈ 1000°C for water), which can melt the heater. This is **burnout**.

Zuber–Lienhard (slides):
$$\dot q_{max} = C_{cr}h_{fg}\left[\sigma g\rho_v^2(\rho_l - \rho_v)\right]^{1/4}$$

**Factors that influence it**
- Fluid properties: $h_{fg}$, surface tension $\sigma$, $\rho_l$, $\rho_v$.
- **Pressure** (through $\rho_v$, $h_{fg}$, $\sigma$): $\dot q_{max}$ rises with pressure and peaks at about one-third of the critical pressure.
- **Heater geometry and size** ($C_{cr}$: 0.149 large plates, 0.12–0.15 cylinders, spheres, depends on $L^* = L[g(\rho_l-\rho_v)/\sigma]^{1/2}$).
- Gravity $g$ (∝ $g^{1/4}$).
- Subcooling of the liquid (raises $\dot q_{max}$).
- Surface condition, wettability and coatings or deposits.
- Forced flow or agitation (flow boiling can raise it several times).`,
          answer: String.raw`CHF is the peak of the nucleate boiling curve (burnout point). It depends on $h_{fg}$, $\sigma$, densities, pressure, heater geometry and size ($C_{cr}$), gravity, subcooling, surface wettability and flow velocity.` },
        { id: "2020-21-Q4b", label: "(b)", marks: "6",
          topic: "boiling", sub: "Why h_total = h_film + 3/4 h_rad in film boiling",
          type: "theory", syllabus: "in", repeats: ["practice-boiling-P6a"],
          text: String.raw`Why does total heat transfer during film boiling consider only 75% of radiation heat transfer? Explain the reason for not considering total radiation heat transfer.`,
          solution: String.raw`In film boiling (surface far above $T_{sat}$) heat crosses the vapour film by **conduction/convection** and by **radiation**:
$$\dot q_{rad} = \varepsilon\sigma(T_s^4 - T_{sat}^4),\qquad h_{rad} = \frac{\dot q_{rad}}{T_s - T_{sat}}$$
The two mechanisms are **not independent**, so they cannot simply be added:
- Radiation passes through the vapour and evaporates liquid at the interface, generating extra vapour.
- The vapour film therefore becomes **thicker**, which increases the conduction resistance and lowers $h_{film}$.
- Radiation thus reduces the convective part. Bromley's analysis and experiments show the combined effect is well represented by
$$h_{total}^{4/3} = h_{film}^{4/3} + h_{rad}h_{total}^{1/3}\quad\approx\quad h_{total} = h_{film} + \tfrac{3}{4}h_{rad}\ \ (h_{rad} < h_{film})$$

So only ¾ of the radiation coefficient is added: the remaining quarter is cancelled by the loss of convective heat transfer due to the thicker film. Adding 100% of the radiation would overpredict the heat flux.`,
          answer: String.raw`Radiation thickens the vapour film and so lowers the film (conduction) coefficient. The net gain is only about $\tfrac34 h_{rad}$: $h_{total} = h_{film} + \tfrac34 h_{rad}$.` },
        { id: "2020-21-Q4c", label: "(c)", marks: "7",
          topic: "natural-convection", sub: "Hot surface facing down gives the lowest h",
          type: "sketch", syllabus: "in", repeats: ["practice-natural-convection-P7a"],
          text: String.raw`"Natural convection heat transfer is typically lowest in the case of the horizontal orientation with hot surface facing down" – explain with schematics.`,
          solution: String.raw`Buoyancy acts vertically: air heated by a hot surface becomes lighter and wants to **rise**.

- **Vertical hot plate:** heated air rises freely along the surface; a boundary layer grows from the bottom edge and leaves at the top. Good, continuous flow.
- **Horizontal, hot surface facing up:** heated air rises directly from the whole surface in plumes and cells and is replaced by cool air from the sides. Strongest convection (Holman: $Nu = 0.54Ra^{1/4}$ laminar, $0.15Ra^{1/3}$ turbulent).
- **Horizontal, hot surface facing down:** the plate itself blocks the rising warm air. The heated layer is trapped under the plate and can escape only by creeping sideways to the edges and then rising. The layer is thick and stagnant (stable stratification), so the conduction resistance is high. Weakest convection ($Nu = 0.27Ra^{1/4}$, roughly half the "facing up" value).

**Schematics (describe):**
1. Vertical plate: upward arrows along the face, boundary layer thickening upwards.
2. Plate facing up: plumes rising from the centre, cold air drawn in from both edges.
3. Plate facing down: a thin layer of warm air under the plate with arrows moving outward to the edges, then turning up around the edges; still air in the middle.

![Hot plate vertical, facing up and facing down: the face-down case traps the warm air](fig/2020-21-Q4c-sol.svg)

(For a cold plate the situation reverses: cold surface facing up is the worst case.)

In the course example (0.6 m square plate at 90°C in 30°C air) the heat loss for hot surface down was the lowest of the three orientations.`,
          answer: String.raw`Facing down, the plate traps the buoyant warm air, which can only escape slowly around the edges. The thick, stable layer gives the lowest $h$ ($Nu \approx 0.27Ra^{1/4}$).` },
        { id: "2020-21-Q4d", label: "(d)", marks: "16",
          topic: "natural-convection", sub: "Vertical oven door: free convection and radiation",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A household oven door (0.5 m × 0.7 m) reaches an average temperature of 32°C during its operation. Estimate free convection heat loss to the room with ambient air of 22°C. If the door has an emissivity factor of 1.0, how much heat will be lost by radiation?`,
          solution: String.raw`**Given:** vertical door, $A = 0.5\times0.7 = 0.35$ m², $T_w = 32$°C, $T_\infty = 22$°C.

![Natural convection on a vertical plate: velocity and temperature profiles](fig/common-nc-vertical-plate.svg)

**Assumptions:** door vertical with height $L = 0.7$ m; isothermal; room walls at 22°C for radiation; one face (outside) only.

**Properties** of air at $T_f = (32+22)/2 = 27$°C = 300 K (Holman Table A-5): $\nu = 15.69\times10^{-6}$ m²/s, $k = 0.02624$ W/m·K, $Pr = 0.708$; $\beta = 1/T_f = 1/300$ K⁻¹.

1. Grashof and Rayleigh numbers:
$$Gr_L = \frac{g\beta\Delta T L^3}{\nu^2} = \frac{9.81(1/300)(10)(0.7)^3}{(15.69\times10^{-6})^2} = 4.55\times10^8$$
$$Ra_L = Gr_L Pr = 3.22\times10^8\ \ (<10^9\ \text{laminar})$$

2. Holman Table 9-1, vertical plate, $10^4 < Ra < 10^9$: $C = 0.59$, $n = 1/4$:
$$Nu = 0.59Ra^{1/4} = 0.59(3.22\times10^8)^{1/4} = 79.0$$
$$h = \frac{Nu\,k}{L} = \frac{79.0(0.02624)}{0.7} = 2.96\ \mathrm{W/m^2K}$$
(Churchill–Chu: $Nu = 86.8$, $h = 3.25$.)

3. Convection loss:
$$q_{conv} = hA\Delta T = 2.96(0.35)(10) = 10.4\ \mathrm{W}\ \ (\text{Churchill–Chu: } 11.4\ \mathrm{W})$$

4. Radiation ($\varepsilon = 1$, large surroundings at 295.15 K):
$$q_{rad} = \varepsilon\sigma A(T_w^4 - T_\infty^4) = 1(5.669\times10^{-8})(0.35)(305.15^4 - 295.15^4) = 21.5\ \mathrm{W}$$

So the total is about 32 W. Radiation (equivalent $h_r \approx 6.1$ W/m²K) is twice the free convection loss. (Taking the 0.5 m side as the height gives $q_{conv} = 11.3$ W, so the choice of height barely matters.)

**Exam tip:** at low ΔT, radiation is comparable to or larger than natural convection and must not be neglected.`,
          answer: String.raw`$Ra = 3.2\times10^8$ (laminar), $h \approx 3.0$ W/m²K → $q_{conv} \approx 10$ W (11 W with Churchill–Chu); $q_{rad} \approx 21.5$ W.` },
      ] },
    { id: "2020-21-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q5a", label: "(a)", marks: "7",
          topic: "convection-basics", sub: "Bulk (mixing-cup) temperature",
          type: "theory", syllabus: "in", repeats: ["practice-convection-basics-P4a"],
          text: String.raw`What is bulk temperature? Why is it called 'Mixing Cup' temperature?`,
          solution: String.raw`In tube flow the temperature varies over the cross-section, so a single reference temperature is defined from the **energy carried by the flow**:
$$T_b = \frac{\int_A \rho u c_p T\,dA}{\int_A \rho u c_p\,dA} = \frac{\int_0^{r_0} \rho u c_p T\,2\pi r\,dr}{\int_0^{r_0}\rho u c_p\,2\pi r\,dr}$$
- Numerator: total energy (enthalpy) flow through the section; denominator: $\dot m c_p$.
- It is the temperature used in $q = \dot m c_p (T_{b2} - T_{b1})$ and in $q = hA(T_w - T_b)$ for internal flow.

**"Mixing cup":** if the fluid leaving a section were collected in a cup and mixed adiabatically until uniform, its temperature would be $T_b$. Faster (hotter or colder) streams carry more energy, so it is a **velocity-weighted** average, not a simple area average.

Simplified form (used when no profile information is given): $T_b \approx (T_1 + T_2)/2$ between inlet and outlet.`,
          answer: String.raw`$T_b = \int\rho u c_p T\,dA/\int\rho u c_p\,dA$ is the energy-averaged temperature. It is the temperature the fluid would reach if the flow were collected and mixed in a cup.` },
        { id: "2020-21-Q5b", label: "(b)", marks: "10",
          topic: "boundary-layer", sub: "Thermal boundary layer on an isothermal plate; δt vs δ",
          type: "theory", syllabus: "in", repeats: ["practice-boundary-layer-P12a"],
          text: String.raw`Describe the thermal boundary layer formation for forced convection on an isothermal flat plate. Indicate the relative thickness of hydrodynamic and thermal boundary layers for common fluids.`,
          solution: String.raw`![Velocity and thermal boundary layers on a flat plate](fig/common-bl-flat-plate.svg)

**Formation**
- Fluid at $T_\infty$ and $u_\infty$ meets a plate held at $T_w$. At the wall the fluid is at rest (no slip) and at the wall temperature (no temperature jump).
- Heat is conducted into the fluid layer next to the wall and carried downstream, so a region forms where $T$ changes from $T_w$ to $T_\infty$: the **thermal boundary layer**, of thickness $\delta_t$, defined where $(T - T_w)/(T_\infty - T_w) = 0.99$.
- $\delta_t$ is zero at the leading edge and grows with $x$ (laminar: $\delta_t \propto \sqrt{x}$), so the wall temperature gradient and the local $h_x = -k(\partial T/\partial y)_0/(T_w - T_\infty)$ **decrease** along the plate ($h_x \propto x^{-1/2}$).
- Further downstream the flow becomes turbulent ($Re_x \approx 5\times10^5$); mixing raises $h$ again.
- Sketch: plate along $x$; a velocity layer $\delta(x)$ and a thermal layer $\delta_t(x)$ both starting at the leading edge; temperature profile $T(y)$ going from $T_w$ at the wall to $T_\infty$ at $y = \delta_t$.

**Relative thickness:** governed by $Pr = \nu/\alpha$ (momentum diffusivity / thermal diffusivity). Integral method (cubic profiles):
$$\frac{\delta_t}{\delta} = \frac{1}{1.026}Pr^{-1/3}$$

| Fluid | Pr | Thickness |
|---|---|---|
| Gases (air) | ≈ 0.7–1 | $\delta_t \approx \delta$ (slightly thicker) |
| Water | ≈ 2–13 | $\delta_t < \delta$ |
| Oils | 100–10⁵ | $\delta_t \ll \delta$ |
| Liquid metals | 0.001–0.03 | $\delta_t \gg \delta$ |

(The $Pr^{-1/3}$ relation holds for $Pr \gtrsim 0.6$; liquid metals need separate relations.)`,
          answer: String.raw`$\delta_t$ grows from the leading edge as heat diffuses from the wall, so $h_x$ falls along the plate. $\delta_t/\delta = Pr^{-1/3}/1.026$: about equal for gases, thinner for water and oils, much thicker for liquid metals.` },
        { id: "2020-21-Q5c", label: "(c)", marks: "12+3+3",
          topic: "conduction", sub: "General 3-D conduction equation and special cases",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the general three-dimensional heat conduction equation. From this general equation derive equations for the following conditions.
(i) Steady state one dimensional heat flow with no heat generation.
(ii) Two-dimensional heat flow without heat generation.`,
          solution: String.raw`**Assumptions:** homogeneous solid, $\rho$ and $c$ constant, Fourier's law applies, volumetric generation $\dot q$ (W/m³).

![Control volume dx dy dz: conduction in and out on each face, generation and storage](fig/2020-21-Q5c-sol.svg)

**Energy balance on a control volume $dx\,dy\,dz$ (Cartesian)**

Heat conducted in at face $x$: $q_x = -k\,dy\,dz\,\dfrac{\partial T}{\partial x}$; out at $x+dx$: $q_{x+dx} = q_x + \dfrac{\partial q_x}{\partial x}dx$.

Net conduction in the $x$ direction:
$$q_x - q_{x+dx} = -\frac{\partial q_x}{\partial x}dx = \frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right)dx\,dy\,dz$$
Similarly for $y$ and $z$.

Energy generated: $\dot q\,dx\,dy\,dz$. Energy stored: $\rho c\,\dfrac{\partial T}{\partial \tau}dx\,dy\,dz$.

Balance: (net in by conduction) + (generated) = (stored):
$$\frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\left(k\frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \dot q = \rho c\frac{\partial T}{\partial \tau}$$
For constant $k$, with $\alpha = k/\rho c$:
$$\boxed{\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} + \frac{\dot q}{k} = \frac{1}{\alpha}\frac{\partial T}{\partial \tau}}$$
(Cylindrical form: $\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) + \frac{1}{r^2}\frac{\partial^2 T}{\partial\phi^2} + \frac{\partial^2T}{\partial z^2} + \frac{\dot q}{k} = \frac{1}{\alpha}\frac{\partial T}{\partial\tau}$.)

**(i) Steady, 1-D, no generation:** $\partial T/\partial\tau = 0$, $\dot q = 0$, $T = T(x)$:
$$\frac{d^2T}{dx^2} = 0\ \Rightarrow\ T = C_1x + C_2\ \text{(linear profile, plane wall)}$$

**(ii) 2-D, no generation:**
$$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = \frac{1}{\alpha}\frac{\partial T}{\partial \tau}$$
and at steady state the Laplace equation $\dfrac{\partial^2 T}{\partial x^2} + \dfrac{\partial^2 T}{\partial y^2} = 0$.`,
          answer: String.raw`$\nabla^2T + \dot q/k = (1/\alpha)\partial T/\partial\tau$; (i) $d^2T/dx^2 = 0$; (ii) $\partial^2T/\partial x^2 + \partial^2T/\partial y^2 = (1/\alpha)\partial T/\partial\tau$, which becomes $= 0$ at steady state.` },
      ] },
    { id: "2020-21-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q6a", label: "(a)", marks: "5",
          topic: "forced-convection", sub: "Dittus–Boelter equation and its range",
          type: "theory", syllabus: "in", repeats: ["practice-forced-convection-P12a"],
          text: String.raw`Write down Dittus-Boelter equation with its applicability ranges.`,
          solution: String.raw`$$Nu_d = \frac{hd}{k} = 0.023\,Re_d^{0.8}\,Pr^{n}$$
- $n = 0.4$ when the fluid is being **heated**, $n = 0.3$ when it is being **cooled**.
- Properties at the mean **bulk** temperature.

**Applicable for:**
- Fully developed **turbulent** flow in **smooth** tubes, $Re_d > 10{,}000$.
- $0.6 < Pr < 100$ (Holman; some texts give 0.7–160).
- $L/d > 10$ (fully developed, often stated as $L/d > 60$).
- Moderate temperature difference between wall and fluid (for large ΔT use Sieder–Tate with $(\mu/\mu_w)^{0.14}$).
- Not for liquid metals ($Pr \ll 1$) or laminar flow.`,
          answer: String.raw`$Nu = 0.023Re^{0.8}Pr^n$ ($n = 0.4$ heating, 0.3 cooling), for turbulent flow in smooth tubes, $Re > 10^4$, $0.6 < Pr < 100$, $L/d > 10$–60, moderate ΔT.` },
        { id: "2020-21-Q6b", label: "(b)", marks: "10",
          topic: "convection-basics", sub: "Stanton and Prandtl numbers",
          type: "theory", syllabus: "in", repeats: ["practice-convection-basics-P8a"],
          text: String.raw`Define Stanton number and Prandtl number. Explain their physical significance. What are the typical values of Prandtl number for gas and liquid metals?`,
          solution: String.raw`**Stanton number**
$$St = \frac{h}{\rho c_p u} = \frac{Nu}{Re\,Pr}$$
- Ratio of heat actually transferred to the wall, $h\Delta T$, to the heat capacity flow of the fluid, $\rho c_p u\Delta T$: the fraction of the fluid's thermal capacity that is exchanged with the wall.
- It appears in the Reynolds–Colburn analogy $St\,Pr^{2/3} = C_f/2$ (and $St = f/8$ for $Pr = 1$ in tubes), linking heat transfer to friction.

**Prandtl number**
$$Pr = \frac{\nu}{\alpha} = \frac{c_p\mu}{k}$$
- Ratio of momentum diffusivity to thermal diffusivity: how fast momentum diffuses through the fluid compared with heat.
- Fixes the relative thickness of the velocity and thermal boundary layers, $\delta_t/\delta \approx Pr^{-1/3}/1.026$.
- A fluid property only (no flow quantity).

**Typical values**
| Fluid | Pr |
|---|---|
| Gases | ≈ 0.7–1.0 (air ≈ 0.7) |
| Liquid metals | ≈ 0.001–0.03 (≈ 0.01) |
| Water | ≈ 1.7–13 |
| Oils | 50–10⁵ |`,
          answer: String.raw`$St = h/(\rho c_p u) = Nu/(RePr)$: wall heat transfer compared with the fluid's heat capacity flow. $Pr = \nu/\alpha$: momentum vs thermal diffusion. Gases $Pr \approx 0.7$–1; liquid metals ≈ 0.01.` },
        { id: "2020-21-Q6c", label: "(c)", marks: "20",
          topic: "forced-convection", sub: "Laminar tube flow, constant wall temperature (Sieder–Tate)",
          type: "numerical", syllabus: "in", repeats: ["practice-forced-convection-P2"],
          text: String.raw`Water at 60°C enters a tube of 1-in (2.54 cm) diameter at a mean flow velocity of 2 cm/s. Calculate the exit water temperature if the tube is 3.0 m long and the wall temperature is constant at 80°C.`,
          solution: String.raw`**Given:** $T_{b1} = 60$°C, $d = 0.0254$ m, $u_m = 0.02$ m/s, $L = 3$ m, $T_w = 80$°C.

**Find:** $T_{b2}$.

**Assumptions:** steady flow; first evaluate properties at the inlet temperature 60°C (check later); constant wall temperature.

**Properties** of water at 60°C (Holman Table A-9): $\rho = 985.5$ kg/m³, $c_p = 4180$ J/kg·K, $\mu = 4.71\times10^{-4}$ kg/m·s, $k = 0.651$ W/m·K, $Pr = 3.02$; at 80°C $\mu_w = 3.55\times10^{-4}$ kg/m·s.

1. Reynolds number:
$$Re_d = \frac{\rho u_m d}{\mu} = \frac{985.5(0.02)(0.0254)}{4.71\times10^{-4}} = 1063\ \ \Rightarrow\ \text{laminar}$$

2. Graetz-type group: $Re\,Pr\,\dfrac{d}{L} = 1063(3.02)\dfrac{0.0254}{3} = 27.2 > 10$, so Sieder–Tate laminar applies:
$$Nu_d = 1.86\left(Re\,Pr\frac{d}{L}\right)^{1/3}\left(\frac{\mu}{\mu_w}\right)^{0.14} = 1.86(27.2)^{1/3}\left(\frac{4.71}{3.55}\right)^{0.14} = 5.82$$
$$h = \frac{Nu\,k}{d} = \frac{5.82(0.651)}{0.0254} = 149\ \mathrm{W/m^2K}$$
(Hausen gives $Nu = 4.99$; Sieder–Tate is used because its average h goes with the arithmetic mean ΔT.)

3. Mass flow: $\dot m = \rho u_m\frac{\pi d^2}{4} = 985.5(0.02)\frac{\pi(0.0254)^2}{4} = 9.99\times10^{-3}$ kg/s

4. Energy balance with the arithmetic-mean temperature difference (as required by Sieder–Tate):
$$\dot m c_p(T_{b2} - 60) = h\pi dL\left[\frac{(80-60) + (80-T_{b2})}{2}\right]$$
$$9.99\times10^{-3}(4180)(T_{b2}-60) = 149.1\pi(0.0254)(3)\left[\frac{100 - T_{b2}}{2}\right]$$
$$41.75(T_{b2} - 60) = 17.85(100 - T_{b2})\ \Rightarrow\ T_{b2} = 72.0\ \mathrm{°C}$$
Heat gained: $q = 41.75(12.0) = 500$ W.

5. Check: mean bulk ≈ 66°C. Repeating with properties at 66°C ($\mu = 4.32\times10^{-4}$, $k = 0.659$, $Pr = 2.72$) gives $Re = 1153$, $h = 148$ W/m²K and again $T_{b2} \approx 72.0$°C.

**Exam tip:** always check $Re$ first. Here it is 1063, so Dittus–Boelter would be wrong.`,
          answer: String.raw`$Re = 1063$ (laminar), $Nu = 5.82$, $h \approx 149$ W/m²K → exit temperature **≈ 72°C** ($q \approx 500$ W).` },
      ] },
    { id: "2020-21-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q7a", label: "(a)", marks: "18",
          topic: "boundary-layer", sub: "Reynolds–Colburn analogy from the cubic profile",
          type: "derivation", syllabus: "in", repeats: ["2011-12-Q7a", "2014-15-Q3a", "2015-16-Q8a", "2016-17-Q8a", "2017-18-Q8a", "2022-23-Q3a", "practice-boundary-layer-P6"],
          text: String.raw`The velocity distribution and the laminar boundary layer thickness for the fluid can be expressed by the following equations, respectively:
$$\frac{u}{u_\infty} = \frac{3}{2}\frac{y}{\delta} - \frac{1}{2}\left(\frac{y}{\delta}\right)^3,\qquad \delta = 4.64\sqrt{\frac{\nu x}{u_\infty}}$$
where $u_\infty$ is the fluid velocity outside the boundary layer and other symbols have their usual meanings. Derive the Reynolds–Colburn analogy using the above equations and state its significance in heat transfer.`,
          solution: String.raw`**Assumptions:** steady, laminar, incompressible flow over a flat plate; constant properties; zero pressure gradient; plate isothermal at $T_w$ and heated from the leading edge; negligible viscous dissipation.

![Velocity and thermal boundary layers on a flat plate](fig/common-bl-flat-plate.svg)

### 1. Friction side
Wall shear stress from the given profile:
$$\tau_w = \mu\left.\frac{\partial u}{\partial y}\right|_{y=0} = \mu u_\infty\frac{3}{2\delta}$$
Local skin-friction coefficient:
$$C_{fx} = \frac{\tau_w}{\frac12\rho u_\infty^2} = \frac{3\mu}{\rho u_\infty\delta} = \frac{3\nu}{u_\infty}\cdot\frac{1}{4.64}\sqrt{\frac{u_\infty}{\nu x}} = \frac{3}{4.64}\,Re_x^{-1/2} = 0.646\,Re_x^{-1/2}$$
$$\frac{C_{fx}}{2} = 0.323\,Re_x^{-1/2} \tag{1}$$

### 2. Heat side
Take a cubic temperature profile of the same form ($\theta = T - T_w$):
$$\frac{\theta}{\theta_\infty} = \frac{3}{2}\frac{y}{\delta_t} - \frac{1}{2}\left(\frac{y}{\delta_t}\right)^3$$
Energy integral equation:
$$\frac{d}{dx}\int_0^{\delta_t}(\theta_\infty - \theta)u\,dy = \alpha\left.\frac{\partial\theta}{\partial y}\right|_0$$
With $\zeta = \delta_t/\delta < 1$ the integral is $\theta_\infty u_\infty\delta\left(\frac{3}{20}\zeta^2 - \frac{3}{280}\zeta^4\right) \approx \frac{3}{20}\theta_\infty u_\infty\delta\zeta^2$, and $(\partial\theta/\partial y)_0 = 3\theta_\infty/(2\delta_t)$:
$$\frac{3}{20}u_\infty\frac{d}{dx}(\delta\zeta^2) = \frac{3\alpha}{2\delta\zeta}$$
For a plate heated from the leading edge $\zeta$ is constant, and from the momentum integral $\delta\,d\delta/dx = 140\nu/(13u_\infty)$ (which gives $\delta = 4.64\sqrt{\nu x/u_\infty}$):
$$\frac{1}{10}u_\infty\zeta^3\delta\frac{d\delta}{dx} = \alpha\ \Rightarrow\ \zeta^3 = \frac{13}{14}\frac{\alpha}{\nu} = \frac{13}{14Pr}\ \Rightarrow\ \frac{\delta_t}{\delta} = \frac{Pr^{-1/3}}{1.026}$$
Local heat transfer coefficient:
$$h_x = \frac{-k(\partial T/\partial y)_0}{T_w - T_\infty} = \frac{3k}{2\delta_t} = \frac{3k(1.026)Pr^{1/3}}{2(4.64)x}Re_x^{1/2}$$
$$Nu_x = \frac{h_xx}{k} = 0.332\,Re_x^{1/2}Pr^{1/3}$$

### 3. Combine: Stanton number
$$St_x = \frac{h_x}{\rho c_p u_\infty} = \frac{Nu_x}{Re_x Pr} = 0.332\,Re_x^{-1/2}Pr^{-2/3}$$
$$St_x Pr^{2/3} = 0.332\,Re_x^{-1/2} \tag{2}$$
Comparing (1) and (2) (0.323 vs 0.332, the difference coming only from the approximate cubic profile; the exact Blasius solution gives 0.332 in both):
$$\boxed{St_x\,Pr^{2/3} = \frac{C_{fx}}{2}}$$
The same holds for average values over a length $L$: $\overline{St}\,Pr^{2/3} = \overline{C_f}/2$. This is the **Reynolds–Colburn analogy** (for $Pr = 1$ it reduces to Reynolds' analogy $St = C_f/2$).

**Significance**
- Links fluid friction to heat transfer: $h$ can be found from measured drag (no heat transfer experiment needed), or drag from a known $h$.
- Shows that heat and momentum are transported by the same boundary-layer mechanism; $Pr^{2/3}$ corrects for the different diffusivities.
- Used, for example, to get the drag on a heated plate from its heat transfer (slide example: air at 27°C, 2 m/s, first 40 cm).
- Valid for flat plates with no form drag (no pressure gradient); in turbulent flow it holds approximately with turbulent $C_f$.`,
          answer: String.raw`$C_{fx}/2 = 0.323Re_x^{-1/2}$ and $St_xPr^{2/3} = 0.332Re_x^{-1/2}$ → $St\,Pr^{2/3} = C_f/2$. So $h$ can be predicted from friction (drag) data.` },
        { id: "2020-21-Q7b", label: "(b)", marks: "17",
          topic: "boundary-layer", sub: "Laminar flat plate: effect of orientation (600 vs 300 mm)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Air at 25°C flows past a flat plate at 2.5 m/s. The plate measures 600 mm × 300 mm and is maintained at a uniform temperature of 95°C. Calculate the heat loss from the plate if the air flows parallel to the 600 mm side. How would this heat loss be affected if the flow of air is made parallel to the 300 mm side? Use an appropriate heat transfer equation to solve the problem.`,
          solution: String.raw`**Given:** $T_\infty = 25$°C, $u_\infty = 2.5$ m/s, $T_w = 95$°C, plate 0.6 m × 0.3 m.

![The same plate with the flow along the 600 mm side and along the 300 mm side](fig/2020-21-Q7b.svg)

**Assumptions:** steady, 1 atm, smooth plate, heat loss from one face, laminar if $Re_L < 5\times10^5$.

**Properties** of air at $T_f = (95+25)/2 = 60$°C = 333 K (Holman Table A-5, interpolated): $\nu = 19.05\times10^{-6}$ m²/s, $k = 0.02875$ W/m·K, $Pr = 0.701$.

### Case 1: flow parallel to the 600 mm side ($L = 0.6$ m, width 0.3 m)
$$Re_L = \frac{u_\infty L}{\nu} = \frac{2.5(0.6)}{19.05\times10^{-6}} = 7.87\times10^4\ \ (\text{laminar})$$
Average Nusselt number (laminar, $\overline{Nu} = 2Nu_{x=L}$):
$$\overline{Nu}_L = 0.664Re_L^{1/2}Pr^{1/3} = 0.664(7.87\times10^4)^{1/2}(0.701)^{1/3} = 165.5$$
$$\bar h = \frac{165.5(0.02875)}{0.6} = 7.93\ \mathrm{W/m^2K}$$
$$q = \bar hA(T_w - T_\infty) = 7.93(0.6\times0.3)(70) = 99.9\ \mathrm{W}$$

### Case 2: flow parallel to the 300 mm side ($L = 0.3$ m, width 0.6 m)
$$Re_L = 3.94\times10^4,\quad \overline{Nu} = 117.0,\quad \bar h = \frac{117.0(0.02875)}{0.3} = 11.22\ \mathrm{W/m^2K}$$
$$q = 11.22(0.18)(70) = 141.3\ \mathrm{W}$$

**Effect:** since $\bar h \propto L^{-1/2}$ at fixed area, $q_2/q_1 = \sqrt{0.6/0.3} = 1.414$: the loss rises by about **41%**. With the shorter flow length, a larger fraction of the plate lies under the thin boundary layer near the leading edge.

(If both faces lose heat, double both values: 200 W and 283 W.)`,
          answer: String.raw`Flow along the 600 mm side: $Re = 7.9\times10^4$, $\bar h = 7.9$ W/m²K, $q \approx 100$ W. Along the 300 mm side: $\bar h = 11.2$ W/m²K, $q \approx 141$ W, about 41% more.` },
      ] },
    { id: "2020-21-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q8a", label: "(a)", marks: "15",
          topic: "insulation", sub: "Critical radius of insulation for a cylinder",
          type: "derivation", syllabus: "in", repeats: ["practice-insulation-P1"],
          text: String.raw`Derive the equation for critical radius of insulation in a cylindrical system. What would you suggest for reducing heat loss if the bare pipe radius is smaller than the critical radius of insulation? Explain your answer with a schematic of heat loss vs. radius.`,
          solution: String.raw`**Assumptions:** steady, 1-D radial conduction; insulation conductivity $k$ constant; pipe surface at $T_i$ (radius $r_i$); outer surface convects to $T_\infty$ with constant $h$; length $L$.

1. Heat loss through insulation (outer radius $r_o$) plus outside film, in series:
$$q = \frac{T_i - T_\infty}{\dfrac{\ln(r_o/r_i)}{2\pi kL} + \dfrac{1}{2\pi r_o L h}}$$
2. As $r_o$ increases, the conduction resistance rises ($\ln r_o$) while the convection resistance falls ($1/r_o$). Find the extremum:
$$\frac{dq}{dr_o} = 0\ \Rightarrow\ \frac{d}{dr_o}\left[\frac{\ln(r_o/r_i)}{2\pi kL} + \frac{1}{2\pi r_oLh}\right] = \frac{1}{2\pi kLr_o} - \frac{1}{2\pi r_o^2Lh} = 0$$
$$\boxed{r_c = \frac{k}{h}}$$
3. The second derivative of the total resistance at $r_o = r_c$ is $\frac{1}{2\pi L}\left(-\frac{1}{kr_c^2} + \frac{2}{hr_c^3}\right) = \frac{1}{2\pi L}\frac{h^2}{k^3} > 0$, so the resistance is a **minimum** and the heat loss a **maximum** at $r_c$.

**Schematic (q vs $r_o$):** horizontal axis outer radius $r_o$ starting at $r_i$; vertical axis heat loss $q$. If $r_i < r_c$ the curve rises from the bare-pipe value $q_{bare}$, peaks at $r_o = r_c$, then falls, crossing $q_{bare}$ again at a radius $r^*$ well beyond $r_c$, and keeps decreasing. If $r_i > r_c$ the curve falls from the start.

![Heat loss versus outer radius: maximum at the critical radius $r_c = k/h$](fig/common-critical-radius.svg)

**Suggestions when $r_i < r_c$** (small tubes, wires, low $h$):
- Adding a thin layer of the same insulation **increases** the loss. Either use insulation thick enough that $r_o > r^*$ (where $q < q_{bare}$), or better,
- choose an insulating material with **lower $k$** so that $r_c = k/h$ becomes smaller than $r_i$. Then any thickness reduces the loss.
- Conversely, for electric cables, where cooling is wanted, insulating up to $r_c$ is used deliberately to increase heat dissipation.

(For a sphere the same analysis gives $r_c = 2k/h$.)`,
          answer: String.raw`$r_c = k/h$, the radius of maximum heat loss. If $r_i < r_c$, use a lower-$k$ insulation (so $r_c < r_i$) or a thickness well beyond the radius where the loss equals the bare-pipe value.` },
        { id: "2020-21-Q8b", label: "(b)", marks: "5",
          topic: "intro", sub: "Mechanism of radiation heat transfer",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Briefly state the mechanism of radiation heat transfer.`,
          solution: String.raw`- Every body above 0 K emits energy as **electromagnetic waves (photons)**, produced by changes in the electronic, vibrational and rotational states of its atoms and molecules. Thermal radiation lies roughly in the 0.1–100 μm band.
- It needs **no medium**: it travels at the speed of light and is most effective in a vacuum (sun to earth).
- When radiation strikes a surface it is partly absorbed (α), reflected (ρ) and transmitted (τ), with α + ρ + τ = 1. The absorbed part becomes internal energy (heat).
- Emissive power of a black body (Stefan–Boltzmann): $E_b = \sigma T^4$, $\sigma = 5.669\times10^{-8}$ W/m²·K⁴. A real surface emits $\varepsilon\sigma T^4$.
- Net exchange of a small body (area $A$, emissivity $\varepsilon$) with large surroundings: $q = \varepsilon\sigma A(T_1^4 - T_2^4)$. Because it depends on $T^4$, radiation dominates at high temperatures.`,
          answer: String.raw`Energy is emitted as electromagnetic waves by all matter above 0 K and needs no medium. $E_b = \sigma T^4$, and the net exchange is $q = \varepsilon\sigma A(T_1^4 - T_2^4)$.` },
        { id: "2020-21-Q8c", label: "(c)", marks: "15",
          topic: "conduction", sub: "Composite sphere: find k of insulation",
          type: "numerical", syllabus: "in", repeats: ["2014-15-Q2b"],
          text: String.raw`A hollow aluminum sphere with an electrical heater in the center is used in tests to determine the thermal conductivity of insulating materials. The inner and outer radii of the sphere are 0.15 and 0.18 m, respectively. The testing is done under steady-state conditions with the inner surface of the aluminum maintained at 250°C. A spherical shell of insulation is cast on the outer surface of the sphere to a thickness of 0.12 m. The outside air temperature is 20°C and the convection coefficient at the outer surface of the insulation is 30 W/m²·K. If 80 W heat is dissipated during the test, what is the thermal conductivity of insulation? Conductivity of aluminum at 250°C is 230 W/m·K.`,
          solution: String.raw`**Given:** $r_1 = 0.15$ m, $r_2 = 0.18$ m, $r_3 = 0.18 + 0.12 = 0.30$ m; $T_1 = 250$°C, $T_\infty = 20$°C; $h = 30$ W/m²K; $k_{Al} = 230$ W/m·K; $q = 80$ W.

**Find:** $k_{ins}$.

![Test sphere: heater, aluminium shell, insulation and outside film in series](fig/2020-21-Q8c.svg)

**Assumptions:** steady, 1-D radial conduction, perfect contact, constant $k$, radiation neglected.

1. Total resistance from the measured loss:
$$R_{tot} = \frac{T_1 - T_\infty}{q} = \frac{250-20}{80} = 2.875\ \mathrm{K/W}$$
2. Aluminium shell:
$$R_{Al} = \frac{1/r_1 - 1/r_2}{4\pi k_{Al}} = \frac{1/0.15 - 1/0.18}{4\pi(230)} = 3.84\times10^{-4}\ \mathrm{K/W}$$
3. Outside convection:
$$R_{conv} = \frac{1}{h\,4\pi r_3^2} = \frac{1}{30(4\pi)(0.30)^2} = 0.0295\ \mathrm{K/W}$$
4. Insulation resistance:
$$R_{ins} = 2.875 - 0.000384 - 0.0295 = 2.845\ \mathrm{K/W}$$
5. Conductivity of insulation:
$$R_{ins} = \frac{1/r_2 - 1/r_3}{4\pi k_{ins}}\ \Rightarrow\ k_{ins} = \frac{1/0.18 - 1/0.30}{4\pi(2.845)} = \frac{2.222}{35.75} = 0.0622\ \mathrm{W/m\cdot K}$$

**Why it matters:** the aluminium and outside-film resistances together are only about 1% of the total, so the test effectively measures the insulation alone.`,
          answer: String.raw`$R_{tot} = 2.875$ K/W, $R_{ins} = 2.845$ K/W → $k_{ins} \approx 0.062$ W/m·K.` },
      ] },
  ]
});
