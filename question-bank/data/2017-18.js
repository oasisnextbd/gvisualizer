QB.paper({
  year: "2017-18", date: "01/09/2018", marks: 210,
  rules: String.raw`Section A: Q1 compulsory (45 marks) + any two of Q2–Q4. Section B: any three of Q5–Q8. Heat Transfer data booklet provided; formula sheet, $C_{sf}$/$C_{cr}$ tables, Table 6-8 and a blank TEMA sheet attached.`,
  questions: [
    { id: "2017-18-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw`43,800 lb/hr of a 42° API kerosene leaves the bottom of a distilling column at 300°F and will be cooled to 200°F by 149,000 lb/hr of 34° API Mid-continent crude coming from storage at 100°F and heated to 170°F. A 10 psi pressure drop is permissible on both streams, and a combined dirt factor of 0.003 should be provided. Available for this service is a 21.25 in. ID exchanger having 158 1 in. OD, 13 BWG tubes 16′ long and laid out on 1.25-in. square pitch. The bundle is arranged for four passes, and baffles are spaced 5 in. apart. Will the exchanger be suitable? What is the dirt factor?

Physical properties at caloric temperature:

| Property | 42° API kerosene | 34° API Mid-continent crude |
|---|---|---|
| Viscosity | 0.9 lb/ft·hr | 8.7 lb/ft·hr |
| Viscosity at wall temperature | 1.36 lb/ft·hr | 3.63 lb/ft·hr |
| Thermal conductivity | 0.0765 Btu/hr·ft·°F | 0.077 Btu/hr·ft·°F |
| Specific heat capacity | 0.60 Btu/lb·°F | 0.49 Btu/lb·°F |
| Specific gravity | 0.73 | 0.83 |

> **Misprint note (applies to all parts):** with 300°F the heat balance does not close (kerosene gives up $43{,}800\times0.60\times100 = 2.63\times10^6$ Btu/h, the crude needs $149{,}000\times0.49\times70 = 5.11\times10^6$ Btu/h). This is Kern's Example 7.3, where the kerosene enters at **390°F**; with 390°F both duties agree within 2% and the caloric properties above match. The solutions use $T_1 = 390$°F. A short "if you take 300°F literally" check is given in (c).`,
      parts: [
        { id: "2017-18-Q1a", label: "(a)", marks: "5",
          topic: "shell-tube", sub: "Temperature profile, LMTD and F_T (1-4 exchanger)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Draw a temperature profile along the heat exchanger length, and find the log mean temperature difference.`,
          solution: String.raw`**Given:** kerosene (hot) $T_1 = 390$°F → $T_2 = 200$°F (see misprint note); crude (cold) $t_1 = 100$°F → $t_2 = 170$°F; 1 shell pass, 4 tube passes (a 1-4 exchanger, read on the 1-2 $F_T$ chart).

**Fluid allocation (Kern):** crude (the larger, dirtier, more viscous stream) in the tubes; kerosene in the shell.

### 1. Temperature profile (sketch)
Sketch: temperature (°F, vertical) vs. length along the shell (horizontal). The kerosene line falls steadily from 390°F at the shell inlet to 200°F at the shell outlet. The crude enters the tubes at 100°F and rises to 170°F in four alternating passes: draw it as a zig-zag of four rising segments (pass 1 left→right, pass 2 right→left, …), each lying below the kerosene curve. Mark the terminal differences: hot end $390-170 = 220$°F, cold end $200-100 = 100$°F. No temperature cross occurs ($T_2 = 200 > t_2 = 170$).

![Temperature profile in the 1-4 kerosene–crude exchanger (T₁ = 390°F, shape computed)](fig/2017-18-Q1a-sol.svg)

### 2. Heat balance
$$Q_{crude} = w c (t_2-t_1) = 149{,}000(0.49)(70) = 5.11\times10^6\ \mathrm{Btu/h}$$
$$Q_{kero} = W C (T_1-T_2) = 43{,}800(0.60)(190) = 4.99\times10^6\ \mathrm{Btu/h}$$
Agreement within 2%; use $Q = 5.11\times10^6$ Btu/h (crude side, both crude temperatures are firm).

### 3. LMTD (counter-flow basis)
$$\Delta t_1 = T_1 - t_2 = 220\,°\mathrm{F},\quad \Delta t_2 = T_2 - t_1 = 100\,°\mathrm{F}$$
$$\mathrm{LMTD} = \frac{220-100}{\ln(220/100)} = 152.2\,°\mathrm{F}$$

### 4. Correction factor
$$R = \frac{T_1-T_2}{t_2-t_1} = \frac{190}{70} = 2.71,\qquad S = \frac{t_2-t_1}{T_1-t_1} = \frac{70}{290} = 0.241$$
From Holman Fig. 10-8 / Kern Fig. 18 (1 shell pass, 2 or more tube passes): $F_T \approx 0.89$ (the analytical 1-2 formula gives 0.892).
$$\Delta t = F_T\,\mathrm{LMTD} = 0.892 \times 152.2 = 135.7\,°\mathrm{F}$$

**Caloric temperatures** are not needed: the properties are already given at caloric conditions ($\Delta t_c/\Delta t_h = 0.45$, $F_c \approx 0.42$, so $T_c \approx 280$°F, $t_c \approx 129$°F).

**Exam tip:** $F_T > 0.75$ here, so one shell pass is acceptable.`,
          answer: String.raw`LMTD = 152.2°F; $R = 2.71$, $S = 0.241$, $F_T \approx 0.89$ → $\Delta t \approx 136$°F; $Q = 5.11\times10^6$ Btu/h (taking $T_1 = 390$°F).` },

        { id: "2017-18-Q1b", label: "(b)", marks: "14",
          topic: "shell-tube", sub: "Kern method: tube-side h_i and shell-side h_o",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine the tube side and shell side heat transfer coefficients, $h_i$ and $h_o$, respectively.`,
          solution: String.raw`**Given:** 158 tubes, 1 in OD, 13 BWG, 16 ft, 4 passes, 1.25 in square pitch; shell ID $D_s = 21.25$ in, baffle spacing $B = 5$ in.
Tube data (Kern Table 10, 1 in 13 BWG): ID $= 0.810$ in, flow area per tube $a'_t = 0.515\ \mathrm{in^2}$, outside surface $a'' = 0.2618\ \mathrm{ft^2/ft}$.

**Assumptions:** crude in tubes, kerosene in shell; properties at caloric temperature as given; $\phi = (\mu/\mu_w)^{0.14}$ with the given wall viscosities.

### Shell side: kerosene (hot)
1. Clearance $C' = P_T - d_o = 1.25 - 1.0 = 0.25$ in.
$$a_s = \frac{D_s C' B}{144 P_T} = \frac{21.25(0.25)(5)}{144(1.25)} = 0.1476\ \mathrm{ft^2}$$
2. $$G_s = \frac{W}{a_s} = \frac{43{,}800}{0.1476} = 2.97\times10^5\ \mathrm{lb/h\,ft^2}$$
3. Equivalent diameter, square pitch:
$$D_e = \frac{4\left(P_T^2 - \pi d_o^2/4\right)}{\pi d_o} = \frac{4(1.5625-0.7854)}{\pi(1.0)} = 0.99\ \mathrm{in} = 0.0825\ \mathrm{ft}$$
4. $$\mathrm{Re}_s = \frac{D_e G_s}{\mu} = \frac{0.0825(2.97\times10^5)}{0.9} = 2.72\times10^4$$
5. Kern Fig. 28: $j_H \approx 99$ (curve fit $j_H = 0.36\,\mathrm{Re}^{0.55}$, valid $2\times10^3$–$10^6$).
6. $$\left(\frac{c\mu}{k}\right)^{1/3} = \left(\frac{0.60(0.9)}{0.0765}\right)^{1/3} = 1.918$$
$$\frac{h_o}{\phi_s} = j_H \frac{k}{D_e}\left(\frac{c\mu}{k}\right)^{1/3} = 99\times\frac{0.0765}{0.0825}\times1.918 = 176\ \mathrm{Btu/h\,ft^2\,°F}$$
7. $\phi_s = (0.9/1.36)^{0.14} = 0.944$ (kerosene is being cooled, wall colder, wall viscosity higher).
$$h_o = 176 \times 0.944 = 166\ \mathrm{Btu/h\,ft^2\,°F}$$

### Tube side: crude (cold)
1. $$a_t = \frac{N_t a'_t}{144\,n} = \frac{158(0.515)}{144(4)} = 0.1413\ \mathrm{ft^2}$$
2. $$G_t = \frac{w}{a_t} = \frac{149{,}000}{0.1413} = 1.055\times10^6\ \mathrm{lb/h\,ft^2}$$
Velocity: $V = G_t/(3600\rho) = 1.055\times10^6/(3600\times62.5\times0.83) = 5.6$ ft/s.
3. $D = 0.810/12 = 0.0675$ ft;
$$\mathrm{Re}_t = \frac{D G_t}{\mu} = \frac{0.0675(1.055\times10^6)}{8.7} = 8.18\times10^3,\qquad L/D = 16/0.0675 = 237$$
4. Kern Fig. 24 (transition region, $L/D = 237$): $j_H \approx 31$. (The turbulent fit $0.027\,\mathrm{Re}^{0.8}$ gives 36, but it over-predicts below $\mathrm{Re} = 10^4$, so the chart value is used.)
5. $$\left(\frac{c\mu}{k}\right)^{1/3} = \left(\frac{0.49(8.7)}{0.077}\right)^{1/3} = 3.81$$
$$\frac{h_i}{\phi_t} = j_H\frac{k}{D}\left(\frac{c\mu}{k}\right)^{1/3} = 31\times\frac{0.077}{0.0675}\times3.81 = 134.8$$
6. $\phi_t = (8.7/3.63)^{0.14} = 1.130$ (crude is heated, wall hotter, wall viscosity lower).
$$h_i = 134.8\times1.130 = 152\ \mathrm{Btu/h\,ft^2\,°F}$$
7. Refer to the outside surface:
$$h_{io} = h_i\frac{ID}{OD} = 152.3\times\frac{0.810}{1.0} = 123\ \mathrm{Btu/h\,ft^2\,°F}$$

**Why it matters:** the crude side controls ($h_{io} < h_o$) because of its high viscosity and transition-region Re.`,
          answer: String.raw`Shell (kerosene): $\mathrm{Re}_s = 2.7\times10^4$, $j_H \approx 99$, $h_o \approx 166$; tube (crude): $\mathrm{Re}_t = 8.2\times10^3$, $j_H \approx 31$, $h_i \approx 152$, $h_{io} \approx 123$ Btu/h·ft²·°F.` },

        { id: "2017-18-Q1c", label: "(c)", marks: "7",
          topic: "shell-tube", sub: "Clean and design U, dirt factor",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find the dirt factor.`,
          solution: String.raw`**Given:** $h_{io} = 123.4$, $h_o = 166.1$ Btu/h·ft²·°F (part b); $Q = 5.11\times10^6$ Btu/h, $\Delta t = 135.7$°F (part a).

1. Clean coefficient:
$$U_C = \frac{h_{io}h_o}{h_{io}+h_o} = \frac{123.4(166.1)}{123.4+166.1} = 70.8\ \mathrm{Btu/h\,ft^2\,°F}$$
2. Available surface:
$$A = N_t\,L\,a'' = 158(16)(0.2618) = 661.8\ \mathrm{ft^2}$$
3. Design coefficient:
$$U_D = \frac{Q}{A\,\Delta t} = \frac{5.11\times10^6}{661.8(135.7)} = 56.9\ \mathrm{Btu/h\,ft^2\,°F}$$
4. Dirt factor:
$$R_d = \frac{U_C-U_D}{U_C U_D} = \frac{70.8-56.9}{70.8(56.9)} = 0.0034\ \mathrm{h\,ft^2\,°F/Btu}$$
(Using the kerosene-side duty $4.99\times10^6$ Btu/h gives $U_D = 55.6$ and $R_d = 0.0039$.)

**If 300°F is taken literally** (kerosene duty $2.63\times10^6$ Btu/h, crude would leave at only 136°F): $\Delta t = 0.96\times129.4 = 124.5$°F, $U_D = 31.9$, $R_d \approx 0.017$, i.e. a hugely oversized exchanger. This inconsistency is why 390°F is assumed.

**Exam tip:** $R_d$ is very sensitive to the $j_H$ chart readings; a ±10% change in $h_{io}$ moves $R_d$ by about ±0.001.`,
          answer: String.raw`$U_C = 70.8$, $U_D = 56.9$ Btu/h·ft²·°F, $R_d \approx 0.0034$ h·ft²·°F/Btu (required 0.003).` },

        { id: "2017-18-Q1d", label: "(d)", marks: "12",
          topic: "shell-tube", sub: "Pressure drops and suitability check",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Perform all the necessary calculations and check if the exchanger is suitable for use.`,
          solution: String.raw`**Criteria:** $R_d \ge 0.003$ and $\Delta P \le 10$ psi on each side.

### Tube side (crude, $s = 0.83$, $n = 4$)
1. Friction factor at $\mathrm{Re}_t = 8.18\times10^3$, Kern Fig. 26: $f \approx 0.00028\ \mathrm{ft^2/in^2}$. (Check: Kern's fit $0.0035 + 0.264\,\mathrm{Re}^{-0.42} = 0.0095$ is the Fanning-type factor; $4\times0.0095/144 = 0.00026$, consistent.)
2. $$\Delta P_t = \frac{f G_t^2 L n}{5.22\times10^{10} D\, s\, \phi_t} = \frac{0.00028(1.055\times10^6)^2(16)(4)}{5.22\times10^{10}(0.0675)(0.83)(1.130)} = 6.0\ \mathrm{psi}$$
3. Return loss: $V^2/2g' \cdot (62.5/144)$ at $G_t = 1.055\times10^6$: $V = G_t/(3600\times62.5) = 4.69$ ft/s, so $V^2/2g' = 0.148$ psi (Kern Fig. 27 reads ≈ 0.15).
$$\Delta P_r = \frac{4n}{s}\frac{V^2}{2g'} = \frac{4(4)}{0.83}(0.148) = 2.9\ \mathrm{psi}$$
4. $\Delta P_T = 6.0 + 2.9 = 8.9$ psi < 10 psi ✓

### Shell side (kerosene, $s = 0.73$)
1. $\mathrm{Re}_s = 2.72\times10^4$; Kern Fig. 29: $f \approx 0.00178\ \mathrm{ft^2/in^2}$ (fit $f = e^{0.576-0.19\ln\mathrm{Re}} = 0.256\ \mathrm{ft^2/ft^2}$, ÷144).
2. Number of crosses: $N+1 = 12L/B = 12(16)/5 = 38.4$.
3. $$\Delta P_s = \frac{f G_s^2 D_s (N+1)}{5.22\times10^{10} D_e\, s\, \phi_s} = \frac{0.00178(2.97\times10^5)^2(1.771)(38.4)}{5.22\times10^{10}(0.0825)(0.73)(0.944)} = 3.6\ \mathrm{psi}$$
< 10 psi ✓

### Summary

| | Calculated | Allowed / required | OK? |
|---|---|---|---|
| $R_d$ | 0.0034 | 0.003 | ✓ |
| $\Delta P_t$ | 8.9 psi | 10 psi | ✓ |
| $\Delta P_s$ | 3.6 psi | 10 psi | ✓ |

**Conclusion:** the exchanger is suitable: it carries a dirt factor slightly above the 0.003 required, and both pressure drops are within the allowance. The margin on $R_d$ is small, so the crude-side $j_H$ reading (transition region) is the main uncertainty.`,
          answer: String.raw`$\Delta P_t \approx 8.9$ psi (6.0 + 2.9 return), $\Delta P_s \approx 3.6$ psi, $R_d \approx 0.0034 > 0.003$ → exchanger is (just) suitable.` },

        { id: "2017-18-Q1e", label: "(e)", marks: "7",
          topic: "shell-tube", sub: "TEMA specification sheet",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Fill in the attached TEMA sheet and attach it to your answer script.`,
          solution: String.raw`Key rows of the TEMA heat-exchanger specification sheet (values from parts a–d; kerosene inlet taken as 390°F):

| Item | Shell side | Tube side |
|---|---|---|
| Service | Kerosene cooler / crude preheater | |
| Size and type | 21¼ in ID × 16 ft, 1-4 (one shell pass, four tube passes), horizontal | |
| Surface per unit | 661.8 ft² (outside) | |
| Fluid | 42° API kerosene | 34° API Mid-continent crude |
| Total flow | 43,800 lb/h | 149,000 lb/h |
| Temperature in / out | 390°F / 200°F | 100°F / 170°F |
| Specific gravity | 0.73 | 0.83 |
| Viscosity (caloric / wall) | 0.9 / 1.36 lb/ft·h | 8.7 / 3.63 lb/ft·h |
| Specific heat | 0.60 Btu/lb·°F | 0.49 Btu/lb·°F |
| Thermal conductivity | 0.0765 Btu/h·ft·°F | 0.077 Btu/h·ft·°F |
| Velocity | 1.8 ft/s | 5.6 ft/s |
| Number of passes | 1 | 4 |
| Pressure drop allowed / calculated | 10 / 3.6 psi | 10 / 8.9 psi |
| Film coefficient | $h_o = 166$ | $h_{io} = 123$ ($h_i = 152$) Btu/h·ft²·°F |
| Fouling resistance | combined 0.003 required | |
| Heat exchanged | $5.11\times10^6$ Btu/h | |
| MTD (corrected) | LMTD 152.2°F × $F_T$ 0.89 = 135.7°F | |
| Transfer rate | $U_C = 70.8$, $U_D = 56.9$ Btu/h·ft²·°F, $R_d$ calc. 0.0034 | |
| Tubes | 158 tubes, 1 in OD, 13 BWG (ID 0.810 in), 16 ft, 1¼ in square pitch | |
| Shell | ID 21¼ in | |
| Baffles | segmental, spacing 5 in (≈ 38 crosses) | |
| Tube sheets / bundle | 4-pass channel with pass partitions | |`,
          answer: String.raw`1-4 exchanger, 21¼ in × 16 ft, 661.8 ft²; $h_o = 166$, $h_{io} = 123$, $U_C = 70.8$, $U_D = 56.9$, $R_d = 0.0034$; $\Delta P_s/\Delta P_t = 3.6/8.9$ psi.` },
      ] },

    { id: "2017-18-Q2", q: 2, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2017-18-Q2a", label: "(a)", marks: "10",
          topic: "shell-tube", sub: "2-4 exchanger schematic and temperature profile",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw and label a schematic of 2-4 Shell and tube heat exchanger. Show the corresponding temperature profile along the heat exchanger length.`,
          solution: String.raw`### Schematic (describe/draw)
A 2-4 exchanger has **two shell passes** and **four tube passes**.
- Horizontal shell with a **longitudinal baffle** along the centre-line splitting it into an upper and a lower shell pass; shell fluid enters at one end of the top half, flows along, turns round the end of the longitudinal baffle and returns along the bottom half to leave near the inlet end.
- **Transverse (segmental) baffles** in each half to force cross-flow over the tubes.
- **Tube bundle** (U-tubes or floating head) fixed in a **tube sheet**; a front **channel (bonnet)** with **pass-partition plates** so that the tube fluid makes four passes (in → pass 1 → rear head → pass 2 → front channel → pass 3 → pass 4 → out).
- Label: shell inlet/outlet nozzles, tube inlet/outlet nozzles, shell, tube sheet(s), channel cover, pass partitions, longitudinal baffle, transverse baffles, tie rods/spacers, floating head (or U-bends), supports, vent and drain.

![2-4 exchanger: schematic and temperature profile](fig/2017-18-Q2a-sol.svg)

### Temperature profile
Sketch: temperature vs. fractional length. Two shell-fluid curves (one per shell pass): hot fluid falls from $T_1$ along the first shell pass and continues falling along the second pass to $T_2$. The tube fluid is shown as four segments rising from $t_1$ to $t_2$, alternately in counter- and co-current with the shell fluid; the pair of passes in the second shell lies at the cold end, the pair in the first shell at the hot end. The arrangement approaches true counter-flow, so $t_2$ can exceed $T_2$ (a temperature cross a 1-2 exchanger could not tolerate), and $F_T$ for a 2-4 exchanger is higher than for a 1-2 at the same $R$, $S$.

**Exam tip:** use a 2-4 when the 1-2 chart gives $F_T < 0.75$.`,
          answer: String.raw`Two shell passes (longitudinal baffle) and four tube passes (pass partitions); the profile is closer to counter-flow than a 1-2, so it tolerates a temperature cross and gives higher $F_T$.` },
        { id: "2017-18-Q2b", label: "(b)", marks: "20",
          topic: "heat-exchangers", sub: "LMTD derivation",
          type: "derivation", syllabus: "in", repeats: ["2013-14-Q4b"],
          text: String.raw`Derive the basic equation to calculate LMTD. List the assumptions you make to derive this.`,
          solution: String.raw`**Assumptions (the five listed in the slides)**
1. The exchanger is insulated from its surroundings: heat is exchanged only between the hot and cold fluids (no heat loss).
2. Axial conduction along the tubes is negligible.
3. Potential and kinetic energy changes are negligible.
4. The fluid specific heats are constant.
5. The overall heat transfer coefficient $U$ is constant.

Also implied: steady state with constant flow rates, no partial phase change (a phase change at constant temperature is allowed), and one bulk temperature for each fluid at any cross-section.

**Derivation (counter-flow; parallel flow is analogous)**

![Temperature profiles: parallel flow, counterflow, condensing and boiling](fig/common-hx-profiles.svg)

Let hot fluid $(W, C, T)$ and cold fluid $(w, c, t)$ exchange heat across an element $dA$. Local driving force $\Delta t = T - t$.

1. Energy balance on the element (counter-flow, area measured from the hot inlet end, both temperatures fall in the direction of increasing $A$):
$$dQ = -WC\,dT = -wc\,dt$$
2. Rate equation:
$$dQ = U\,dA\,(T - t)$$
3. Change in driving force:
$$d(T-t) = dT - dt = -dQ\left(\frac{1}{WC} - \frac{1}{wc}\right)$$
4. Substitute $dQ$:
$$\frac{d(T-t)}{T-t} = -U\left(\frac{1}{WC} - \frac{1}{wc}\right)dA$$
5. Integrate from end 1 ($\Delta t_1$) to end 2 ($\Delta t_2$) over the whole area $A$:
$$\ln\frac{\Delta t_2}{\Delta t_1} = -UA\left(\frac{1}{WC} - \frac{1}{wc}\right)$$
6. From the overall balances, $Q = WC(T_1-T_2) = wc(t_2-t_1)$, so
$$\frac{1}{WC} - \frac{1}{wc} = \frac{(T_1-T_2) - (t_2-t_1)}{Q} = \frac{\Delta t_1 - \Delta t_2}{Q}$$
with $\Delta t_1 = T_1 - t_2$ and $\Delta t_2 = T_2 - t_1$.
7. Combine:
$$\ln\frac{\Delta t_2}{\Delta t_1} = -\frac{UA(\Delta t_1-\Delta t_2)}{Q}\ \Rightarrow\ Q = UA\,\frac{\Delta t_1-\Delta t_2}{\ln(\Delta t_1/\Delta t_2)}$$
8. Hence
$$Q = UA\,\mathrm{LMTD},\qquad \mathrm{LMTD} = \frac{\Delta t_1 - \Delta t_2}{\ln(\Delta t_1/\Delta t_2)}$$
For parallel flow the same result follows with $\Delta t_1 = T_1 - t_1$, $\Delta t_2 = T_2 - t_2$.

**Notes:** if $\Delta t_1 = \Delta t_2$ the LMTD reduces to $\Delta t$ (limit). For multipass/cross-flow exchangers, $\Delta t = F_T\,\mathrm{LMTD}_{counter}$.`,
          answer: String.raw`$Q = UA\,\mathrm{LMTD}$ with $\mathrm{LMTD} = (\Delta t_1-\Delta t_2)/\ln(\Delta t_1/\Delta t_2)$, assuming an insulated exchanger, negligible axial conduction, negligible KE/PE changes, constant $c_p$ and constant $U$.` },
      ] },

    { id: "2017-18-Q3", q: 3, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2017-18-Q3a", label: "(a)", marks: "12",
          topic: "boiling", sub: "Pool boiling curve, burnout and Leidenfrost point",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw a pool boiling curve and explain the boiling behavior during *burnout condition* and *Leidenfrost point*.`,
          solution: String.raw`**Sketch:** log heat flux $q''$ (vertical) vs. log excess temperature $\Delta T_e = T_s - T_{sat}$ (horizontal) for water at 1 atm. The curve rises gently (natural convection, up to $\Delta T_e \approx 5$°C), then steeply (nucleate boiling) to a peak $q''_{max} \approx 1$ MW/m² at $\Delta T_e \approx 30$°C (point C, **critical heat flux / burnout**), falls through the transition region to a minimum at $\Delta T_e \approx 120$°C (point D, **Leidenfrost point**, $q''_{min}$), then rises again in film boiling. Mark points A (onset of nucleate boiling), B (isolated bubbles → jets and columns), C, D, and the dashed jump from C horizontally to E in film boiling at $\Delta T_e \approx 1000$°C.

![Pool boiling curve: regimes, critical heat flux (burnout) and Leidenfrost point](fig/common-boiling-curve.svg)

**Regimes**
| Regime | $\Delta T_e$ (water, 1 atm) | Behaviour |
|---|---|---|
| Natural convection | < 5°C | liquid slightly superheated, no bubbles; heat removed by free convection |
| Nucleate (isolated bubbles) | 5–10°C | bubbles form at nucleation sites and collapse/rise; strong stirring |
| Nucleate (jets and columns) | 10–30°C | bubbles merge into columns; $h$ largest; ends at $q''_{max}$ |
| Transition | 30–120°C | unstable, partly film-covered surface; $q''$ falls as $\Delta T_e$ rises |
| Film boiling | > 120°C | stable vapour blanket; heat by conduction/radiation through the vapour |

**Burnout (point C, critical heat flux):** at $q''_{max}$ so much vapour is generated that the vapour columns block liquid from reaching the surface. In a heat-flux-controlled system (electric heater, nuclear fuel), any increase in $q''$ beyond $q''_{max}$ cannot be removed by nucleate boiling; the surface is suddenly covered by vapour and its temperature jumps along C→E to about 1000°C or more, often above the melting point of the heater — "burnout". This sets the upper design limit for boilers (Zuber: $q''_{max} = C_{cr} h_{fg}[\sigma g\rho_v^2(\rho_l-\rho_v)]^{1/4}$).

**Leidenfrost point (point D, minimum heat flux):** the lowest heat flux at which a continuous vapour film can be sustained. Beyond it the surface is completely blanketed by vapour; liquid droplets on a very hot plate "dance" on their vapour cushion (Leidenfrost effect) and evaporate slowly. If $q''$ is reduced below $q''_{min}$ in film boiling, the film collapses and the system drops back to nucleate boiling.`,
          answer: String.raw`Curve: natural convection → nucleate → peak (burnout, $q''_{max}$) → transition → minimum (Leidenfrost) → film boiling; beyond $q''_{max}$ a flux-controlled surface jumps to film boiling and may melt.` },
        { id: "2017-18-Q3b", label: "(b)", marks: "18",
          topic: "natural-convection", sub: "Rectangular duct: vertical sides and horizontal bottom",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A sheet metal air duct carries air-conditioned air at an average temperature of 10°C. The duct size is 320 mm × 200 mm and the length of duct exposed to the surrounding air at 30°C is 15 m long. Find the heat gain by the air in the duct. Assume 200 mm side is vertical and the top surface is insulated.

![Duct 320 mm × 200 mm with an insulated top](fig/2017-18-Q3b.svg)

Formula sheet: $\mathrm{Gr}_x = g\beta(T_w-T_\infty)x^3/\nu^2$; $\mathrm{Nu} = 0.6(\mathrm{Gr\,Pr})^{0.25}$ for vertical surface; $\mathrm{Nu} = 0.27(\mathrm{Gr\,Pr})^{0.25}$ for horizontal surface.`,
          solution: String.raw`**Given:** $T_w = 10$°C (thin sheet metal, wall ≈ air temperature), $T_\infty = 30$°C, $H = 0.20$ m, $B = 0.32$ m, $L = 15$ m; top insulated.
**Find:** heat gain $Q$ through the two vertical sides and the bottom.
**Assumptions:** steady state; duct wall at 10°C; radiation neglected; correlations from the formula sheet; characteristic length $H$ for the sides and $B$ for the bottom.

1. Film temperature $T_f = (10+30)/2 = 20$°C. Air at 20°C, 1 atm (Çengel Table A-15): $k = 0.02514$ W/m·K, $\nu = 1.516\times10^{-5}$ m²/s, $\mathrm{Pr} = 0.7309$; $\beta = 1/T_f = 1/293$ K⁻¹.

2. **Vertical sides** ($x = H = 0.2$ m):
$$\mathrm{Gr} = \frac{9.81(1/293)(20)(0.2)^3}{(1.516\times10^{-5})^2} = 2.33\times10^7,\quad \mathrm{Ra} = 1.70\times10^7$$
Laminar ($10^4 < \mathrm{Ra} < 10^9$):
$$\mathrm{Nu} = 0.6(1.70\times10^7)^{0.25} = 38.5,\quad h_v = \frac{38.5(0.02514)}{0.2} = 4.84\ \mathrm{W/m^2K}$$

3. **Bottom surface** ($x = B = 0.32$ m):
$$\mathrm{Ra} = \frac{9.81(1/293)(20)(0.32)^3}{(1.516\times10^{-5})^2}(0.7309) = 6.97\times10^7$$
$$\mathrm{Nu} = 0.27(6.97\times10^7)^{0.25} = 24.7,\quad h_b = \frac{24.7(0.02514)}{0.32} = 1.94\ \mathrm{W/m^2K}$$

4. Heat gain:
$$Q_{sides} = h_v(2HL)\Delta T = 4.84(2\times0.2\times15)(20) = 581\ \mathrm{W}$$
$$Q_{bottom} = h_b(BL)\Delta T = 1.94(0.32\times15)(20) = 186\ \mathrm{W}$$
$$Q = 581 + 186 \approx 767\ \mathrm{W}$$

**Note:** physically a *cold* surface facing *down* behaves like a hot surface facing up (cooled air sinks away freely), for which Holman gives $\mathrm{Nu} = 0.54\,\mathrm{Ra}^{1/4}$; that would double $h_b$ and give $Q \approx 950$ W. The answer above follows the formula sheet the paper supplies.

**Exam tip:** the "Gr" in the formula sheet uses the surface's own length ($H$ for sides, width for the bottom); always check Ra is in the laminar range before using the ¼-power law.`,
          answer: String.raw`$h_{side} \approx 4.8$ W/m²K, $h_{bottom} \approx 1.9$ W/m²K; heat gain $\approx 581 + 186 \approx 770$ W (≈ 950 W if 0.54 is used for the cold bottom facing down).` },
      ] },

    { id: "2017-18-Q4", q: 4, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2017-18-Q4a", label: "(a)", marks: "16",
          topic: "boiling", sub: "Nucleate pool boiling in a copper pan (Rohsenow)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Water at atmospheric pressure is to be boiled in a polished copper pan. The diameter of the pan is 350 mm and is kept at 115°C. Calculate the following:

(i) Power of the burner
(ii) Rate of evaporation

Given: latent heat of vaporization of water at atmospheric pressure = 2257 kJ/kg; surface tension $\sigma = 58.9\times10^{-3}$ N/m; water vapour density $\rho_v = 0.5955$ kg/m³.`,
          solution: String.raw`**Given:** $T_s = 115$°C, $T_{sat} = 100$°C → $\Delta T_e = 15$°C; $D = 0.35$ m; $h_{fg} = 2257$ kJ/kg, $\sigma = 0.0589$ N/m, $\rho_v = 0.5955$ kg/m³.
**Assumptions:** steady state; nucleate pool boiling (to be checked); water–polished copper: $C_{sf} = 0.0130$, $n = 1.0$ (table supplied).
Saturated water at 100°C (Çengel Table A-9): $\rho_l = 957.9$ kg/m³, $\mu_l = 0.282\times10^{-3}$ kg/m·s, $c_{pl} = 4217$ J/kg·K, $\mathrm{Pr}_l = 1.75$.

1. $\Delta T_e = 15$°C lies in 5–30°C, so nucleate boiling.

2. Rohsenow:
$$q'' = \mu_l h_{fg}\left[\frac{g(\rho_l-\rho_v)}{\sigma}\right]^{1/2}\left[\frac{c_{pl}\Delta T_e}{C_{sf}h_{fg}\mathrm{Pr}_l^n}\right]^3$$
$$\left[\frac{9.81(957.3)}{0.0589}\right]^{1/2} = 399.3\ \mathrm{m^{-1}},\qquad \frac{4217(15)}{0.013(2.257\times10^6)(1.75)} = 1.232$$
$$q'' = (0.282\times10^{-3})(2.257\times10^6)(399.3)(1.232)^3 = 4.75\times10^5\ \mathrm{W/m^2}$$

3. Check against burnout (large flat heater, $L^* = (D/2)\sqrt{g(\rho_l-\rho_v)/\sigma} = 69.9 > 27$, $C_{cr} = 0.149$):
$$q''_{max} = 0.149\,h_{fg}[\sigma g\rho_v^2(\rho_l-\rho_v)]^{1/4} = 1.26\times10^6\ \mathrm{W/m^2}$$
$q'' < q''_{max}$ ✓

4. (i) Burner power:
$$A = \frac{\pi}{4}(0.35)^2 = 0.0962\ \mathrm{m^2},\qquad Q = q''A = 4.75\times10^5(0.0962) = 45.7\ \mathrm{kW}$$

5. (ii) Evaporation rate:
$$\dot m = \frac{Q}{h_{fg}} = \frac{45{,}715}{2.257\times10^6} = 0.0203\ \mathrm{kg/s} = 72.9\ \mathrm{kg/h}$$

**Exam tip:** $q''$ goes as $\Delta T_e^3$ — a small error in $C_{sf}$ or $\Delta T_e$ is cubed.`,
          answer: String.raw`$q'' = 4.75\times10^5$ W/m² (below $q''_{max} = 1.26$ MW/m²); (i) burner power ≈ 45.7 kW; (ii) evaporation ≈ 0.0203 kg/s ≈ 73 kg/h.` },
        { id: "2017-18-Q4b", label: "(b)", marks: "14",
          topic: "condensation", sub: "Film condensation on a horizontal tube",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A horizontal tube of 20 mm outside diameter is exposed to dry steam at atmospheric pressure. The outer surface of the tube is maintained at 84°C by circulating cooling water through it. Calculate the rate of condensation of steam per unit length.`,
          solution: String.raw`**Given:** $D = 0.02$ m, $T_{sat} = 100$°C (1 atm), $T_w = 84$°C, $\Delta T = 16$°C.
**Find:** $\dot m/L$.
**Assumptions:** laminar film condensation (Nusselt), pure saturated vapour, liquid properties at film temperature.

1. Film temperature $T_f = (100+84)/2 = 92$°C. Liquid water at 92°C (Çengel Table A-9, interpolated): $\rho_l = 963.8$ kg/m³, $k_l = 0.676$ W/m·K, $\mu_l = 3.08\times10^{-4}$ kg/m·s, $c_{pl} = 4208$ J/kg·K. At 100°C: $h_{fg} = 2257$ kJ/kg, $\rho_v = 0.5955$ kg/m³.

2. Modified latent heat (subcooling of the film):
$$h^*_{fg} = h_{fg} + 0.68c_{pl}\Delta T = 2257 + 0.68(4.208)(16) = 2303\ \mathrm{kJ/kg}$$

3. Horizontal tube (Nusselt, slides):
$$h = 0.729\left[\frac{g\rho_l(\rho_l-\rho_v)h^*_{fg}k_l^3}{\mu_l D\,\Delta T}\right]^{1/4}$$
$$h = 0.729\left[\frac{9.81(963.8)(963.2)(2.303\times10^6)(0.676)^3}{(3.08\times10^{-4})(0.02)(16)}\right]^{1/4} = 11{,}670\ \mathrm{W/m^2K}$$

4. Heat transfer per metre:
$$Q/L = h\pi D\Delta T = 11{,}670\pi(0.02)(16) = 11.7\ \mathrm{kW/m}$$

5. Condensation rate:
$$\frac{\dot m}{L} = \frac{Q/L}{h^*_{fg}} = \frac{11{,}734}{2.303\times10^6} = 5.10\times10^{-3}\ \mathrm{kg/s\,m} \approx 18.3\ \mathrm{kg/h\,m}$$

(The formula sheet's constant 0.725 with plain $h_{fg}$ gives $h = 11{,}550$ W/m²K and $\dot m/L = 5.14\times10^{-3}$ kg/s·m, essentially the same.)

**Exam tip:** for a single horizontal tube the film is always laminar in practice; the characteristic length is $D$, not the tube length.`,
          answer: String.raw`$h \approx 1.17\times10^4$ W/m²K, $Q/L \approx 11.7$ kW/m, condensation ≈ $5.1\times10^{-3}$ kg/s per metre (≈ 18 kg/h·m).` },
      ] },

    { id: "2017-18-Q5", q: 5, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2017-18-Q5a", label: "(a)", marks: "15",
          topic: "conduction", sub: "General 3-D heat conduction equation",
          type: "derivation", syllabus: "partial", repeats: [],
          text: String.raw`Starting from the Fourier's law of heat conduction, develop the general three dimensional heat-conduction equation.`,
          solution: String.raw`**Assumptions:** homogeneous medium at rest; Cartesian coordinates; $k$ may vary with position; uniform volumetric generation $\dot q$ (W/m³) allowed; constant $\rho$, $c$.

1. **Control volume:** an element $dx\,dy\,dz$ inside the solid.

![Control volume dx dy dz for the conduction energy balance](fig/2015-16-Q5a-sol.svg)

2. **Fourier's law** for the heat flow entering the face at $x$:
$$q_x = -k\,dy\,dz\,\frac{\partial T}{\partial x}$$
Heat leaving at $x+dx$ (Taylor expansion):
$$q_{x+dx} = q_x + \frac{\partial q_x}{\partial x}dx$$
Net conduction into the element in the x-direction:
$$q_x - q_{x+dx} = -\frac{\partial q_x}{\partial x}dx = \frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right)dx\,dy\,dz$$
Similarly for y and z.

3. **Generation** inside the element: $\dot q\,dx\,dy\,dz$.

4. **Storage** (rate of increase of internal energy): $\rho c\,\dfrac{\partial T}{\partial t}\,dx\,dy\,dz$.

5. **Energy balance:** net in by conduction + generated = stored. Dividing by $dx\,dy\,dz$:
$$\frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\left(k\frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \dot q = \rho c\frac{\partial T}{\partial t}$$

6. **Constant k:** with $\alpha = k/\rho c$,
$$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} + \frac{\dot q}{k} = \frac{1}{\alpha}\frac{\partial T}{\partial t}$$

**Special cases**
- Steady with generation (Poisson): $\nabla^2 T + \dot q/k = 0$
- Transient, no generation (Fourier/diffusion): $\nabla^2 T = \frac{1}{\alpha}\partial T/\partial t$
- Steady, no generation (Laplace): $\nabla^2 T = 0$
- 1-D steady plane wall: $d^2T/dx^2 = 0$ → linear profile.`,
          answer: String.raw`$\nabla\cdot(k\nabla T) + \dot q = \rho c\,\partial T/\partial t$; for constant $k$: $\nabla^2T + \dot q/k = (1/\alpha)\partial T/\partial t$.` },
        { id: "2017-18-Q5b", label: "(b)", marks: "10",
          topic: "insulation", sub: "Critical radius of insulation, cylinder",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`What is the significance of "critical thickness of insulation"? Derive the equation for critical thickness of insulation for a cylindrical pipe.`,
          solution: String.raw`**Significance:** adding insulation to a small pipe or wire increases the conduction resistance but also increases the outer surface area, which decreases the convection resistance. Up to a certain outer radius (the critical radius) the second effect wins, so the heat loss *increases* as insulation is added. Hence:
- for steam/hot pipes the outer radius must exceed $r_c$ for insulation to reduce heat loss;
- for electric cables, insulation up to $r_c$ is used deliberately to *increase* heat dissipation.

![Heat loss vs outer radius: maximum at the critical radius r = k/h](fig/common-critical-radius.svg)

**Derivation (per unit length, steady, constant $k$ and $h$)**

Pipe outer radius $r_i$ at $T_i$, insulation $r_i \to r$ with conductivity $k$, surroundings $T_\infty$ with coefficient $h$:
$$q' = \frac{T_i - T_\infty}{\dfrac{\ln(r/r_i)}{2\pi k} + \dfrac{1}{2\pi r h}}$$
Heat loss is a maximum where the total resistance $R(r)$ is a minimum:
$$\frac{dR}{dr} = \frac{1}{2\pi k r} - \frac{1}{2\pi h r^2} = 0\ \Rightarrow\ r_c = \frac{k}{h}$$
Second derivative at $r_c$: $d^2R/dr^2 = -\frac{1}{2\pi k r^2} + \frac{1}{\pi h r^3} = \frac{1}{2\pi k r_c^2} > 0$, so it is a minimum of resistance, i.e. a **maximum** of heat loss.

Critical thickness $= r_c - r_i = k/h - r_i$ (meaningful when $r_i < k/h$).
(For a sphere, $r_c = 2k/h$.)`,
          answer: String.raw`$r_{c,cyl} = k/h$; heat loss is maximum at $r_c$, so insulation reduces loss only when the outer radius exceeds $k/h$.` },
        { id: "2017-18-Q5c", label: "(c)", marks: "10",
          topic: "convection-basics", sub: "Bulk (mixing-cup) temperature",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Define bulk temperature in case of forced convection in tubes. What is "Mixing Cup" temperature?`,
          solution: String.raw`**Bulk temperature:** in tube flow there is no free-stream temperature; the reference temperature is the energy-averaged temperature over the cross-section:
$$T_b = \frac{\int_0^R \rho\,u\,c_p\,T\,2\pi r\,dr}{\int_0^R \rho\,u\,c_p\,2\pi r\,dr}$$
The numerator is the energy carried through the section per unit time; the denominator is $\dot m c_p$. For constant properties, $T_b = \frac{2}{u_m R^2}\int_0^R u\,T\,r\,dr$.

It is used in $q = h(T_w - T_b)$ and in the energy balance $q = \dot m c_p (T_{b,out} - T_{b,in})$. When nothing else is known, the mean bulk temperature for property evaluation is taken as $(T_{b1}+T_{b2})/2$.

**Mixing-cup temperature:** the same quantity — it is the temperature the fluid would reach if the whole flow at that section were collected in a cup and mixed adiabatically until uniform. Hence it represents the total energy of the stream at that location, which is why $T_b$ is also called the mixing-cup temperature.

**Why it matters:** with a non-uniform profile (e.g. parabolic laminar flow) the fast-moving centre carries more energy, so $T_b$ is weighted by velocity, not a simple area average.`,
          answer: String.raw`$T_b = \int\rho u c_p T\,dA/\int\rho u c_p\,dA$, the velocity-weighted energy average; "mixing cup" = the temperature after adiabatically mixing the whole flow at that section.` },
      ] },

    { id: "2017-18-Q6", q: 6, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2017-18-Q6a", label: "(a)", marks: "10",
          topic: "boundary-layer", sub: "Thermal boundary layer on a flat plate",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Describe the thermal boundary layer formation for forced convection on an isothermal flat plate. Indicate the relative thickness of hydrodynamic and thermal boundary layers for common fluids.`,
          solution: String.raw`**Formation:** fluid at uniform $T_\infty$ and $u_\infty$ meets a plate held at $T_w$. The fluid particles touching the plate take the plate temperature (no-slip, thermal equilibrium). They exchange energy with the next layer by conduction, so a region develops near the wall in which temperature varies from $T_w$ to $T_\infty$. This region grows downstream as more fluid is affected. The **thermal boundary-layer thickness** $\delta_t$ is the distance from the wall where
$$\frac{T - T_w}{T_\infty - T_w} = 0.99$$
At the wall, heat transfer is by conduction only: $q'' = -k(\partial T/\partial y)_{y=0} = h(T_w - T_\infty)$. As $\delta_t$ grows, the wall gradient and hence $h_x$ fall ($h_x \propto x^{-1/2}$ in laminar flow).

*Sketch: plate with velocity profile (u from 0 to u∞ within δ) and temperature profile (T from T_w to T∞ within δ_t), both boundary-layer edges growing as √x from the leading edge.*

![Velocity and thermal boundary layers on a flat plate](fig/common-bl-flat-plate.svg)

**Relative thickness — set by the Prandtl number** $\mathrm{Pr} = \nu/\alpha$ (momentum diffusivity / heat diffusivity). Integral analysis (cubic profiles, plate heated from the leading edge):
$$\frac{\delta_t}{\delta} = \frac{1}{1.026}\mathrm{Pr}^{-1/3}$$

| Fluid | Pr | $\delta_t$ vs $\delta$ |
|---|---|---|
| Liquid metals | ~0.01 | $\delta_t \gg \delta$ |
| Gases (air) | ~0.7–1 | $\delta_t \approx \delta$ |
| Water | ~2–7 | $\delta_t < \delta$ |
| Oils | 100–10⁵ | $\delta_t \ll \delta$ |`,
          answer: String.raw`$\delta_t$ grows from the leading edge where $T$ goes from $T_w$ to 99% of $T_\infty$; $\delta_t/\delta \approx \mathrm{Pr}^{-1/3}/1.026$ — about equal for gases, thinner for water and oils, much thicker for liquid metals.` },
        { id: "2017-18-Q6b", label: "(b)", marks: "10",
          topic: "forced-convection", sub: "Dittus–Boelter equation and validity",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write down the Dittus Boelter equation with its applicability ranges.`,
          solution: String.raw`**Dittus–Boelter equation** (fully developed turbulent flow in smooth tubes):
$$\mathrm{Nu}_d = \frac{hd}{k} = 0.023\,\mathrm{Re}_d^{0.8}\,\mathrm{Pr}^n$$
- $n = 0.4$ when the fluid is **heated** ($T_w > T_b$)
- $n = 0.3$ when the fluid is **cooled** ($T_w < T_b$)

**Applicability**
- Fully developed turbulent flow: $\mathrm{Re}_d \gtrsim 10{,}000$
- $0.6 \lesssim \mathrm{Pr} \lesssim 100$ (often quoted up to 160)
- $L/d \gtrsim 10$ (fully developed; entrance effects ignored, conservative for $L/d > 60$)
- Smooth tubes
- **Moderate** wall-to-bulk temperature differences (roughly ≤ 5–6°C for liquids, ≤ 50°C for gases); for large differences use Sieder–Tate with $(\mu/\mu_w)^{0.14}$
- All properties at the mean bulk temperature $T_b = (T_{b1}+T_{b2})/2$
- Non-circular ducts: use the hydraulic diameter $D_h = 4A/P$.

Accuracy about ±25%.`,
          answer: String.raw`$\mathrm{Nu} = 0.023\mathrm{Re}^{0.8}\mathrm{Pr}^n$ ($n$ = 0.4 heating, 0.3 cooling); $\mathrm{Re} > 10^4$, $0.6 < \mathrm{Pr} < 100$, $L/d > 10$, smooth tube, moderate ΔT, properties at bulk T.` },
        { id: "2017-18-Q6c", label: "(c)", marks: "7",
          topic: "convection-basics", sub: "Nusselt and Prandtl numbers",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Define Nusselt number and Prandtl number. Explain their physical significance.`,
          solution: String.raw`**Nusselt number**
$$\mathrm{Nu} = \frac{hL}{k}$$
Ratio of convective to conductive heat transfer across a fluid layer of thickness $L$: $\dfrac{q''_{conv}}{q''_{cond}} = \dfrac{h\Delta T}{k\Delta T/L}$. It is also the dimensionless temperature gradient at the wall. $\mathrm{Nu} = 1$ means pure conduction across the layer; the larger Nu, the more effective the convection.

**Prandtl number**
$$\mathrm{Pr} = \frac{\nu}{\alpha} = \frac{c_p\mu}{k}$$
Ratio of molecular diffusivity of momentum to that of heat; a pure fluid property. It fixes the relative thickness of velocity and thermal boundary layers ($\delta_t/\delta \approx \mathrm{Pr}^{-1/3}$): ~0.01 liquid metals (heat diffuses much faster, $\delta_t \gg \delta$), ~0.7 gases ($\delta_t \approx \delta$), ~1–10 water, up to 10⁵ for heavy oils ($\delta_t \ll \delta$).`,
          answer: String.raw`$\mathrm{Nu} = hL/k$ (convection relative to conduction); $\mathrm{Pr} = \nu/\alpha$ (momentum vs heat diffusivity, sets $\delta_t/\delta$).` },
        { id: "2017-18-Q6d", label: "(d)", marks: "13",
          topic: "conduction", sub: "Glass window with inner and outer convection",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q5c"],
          text: String.raw`Consider a 0.8 m high and 1.5 m wide glass window with a thickness of 8 mm and a thermal conductivity of $k = 0.78$ W/m·°C. Determine the steady state rate of heat transfer through this glass window and the temperature of its inner surface for a day during which the room is maintained at 20°C while the outdoor temperature is −10°C. Take the heat transfer coefficients on inner and outer surfaces of the window to be $h_1 = 10$ W/m²·°C and $h_2 = 40$ W/m²·°C, which includes the effects of radiation.`,
          solution: String.raw`**Given:** $A = 0.8\times1.5 = 1.2$ m², $L = 0.008$ m, $k = 0.78$ W/m·°C, $T_{\infty1} = 20$°C, $T_{\infty2} = -10$°C, $h_1 = 10$, $h_2 = 40$ W/m²·°C.
**Find:** $\dot Q$, $T_1$ (inner surface).
**Assumptions:** steady, 1-D conduction; constant $k$; $h$ values include radiation.

![Glass window: convection-conduction-convection in series](fig/2016-17-Q5c.svg)

1. Resistances in series:
$$R_{conv,1} = \frac{1}{h_1A} = \frac{1}{10(1.2)} = 0.08333\ \mathrm{°C/W}$$
$$R_{glass} = \frac{L}{kA} = \frac{0.008}{0.78(1.2)} = 0.00855\ \mathrm{°C/W}$$
$$R_{conv,2} = \frac{1}{h_2A} = \frac{1}{40(1.2)} = 0.02083\ \mathrm{°C/W}$$
$$R_{total} = 0.1127\ \mathrm{°C/W}$$

2. Heat transfer:
$$\dot Q = \frac{T_{\infty1}-T_{\infty2}}{R_{total}} = \frac{20-(-10)}{0.1127} = 266\ \mathrm{W}$$

3. Inner surface temperature:
$$T_1 = T_{\infty1} - \dot Q R_{conv,1} = 20 - 266(0.08333) = -2.2\,°\mathrm{C}$$
(outer surface: $T_2 = -10 + 266(0.02083) = -4.5$°C).

**Why it matters:** the glass itself is only ~8% of the resistance; the inside film dominates, so the inner surface falls below 0°C and frost forms — the reason for double glazing.`,
          answer: String.raw`$\dot Q \approx 266$ W; inner surface ≈ −2.2°C.` },
      ] },

    { id: "2017-18-Q7", q: 7, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2017-18-Q7a", label: "(a)", marks: "15",
          topic: "conduction", sub: "Pipe with split two-material insulation (parallel paths)",
          type: "numerical", syllabus: "in", repeats: ["2014-15-Q1b"],
          text: String.raw`Steam flowing through a long, thin walled pipe maintains the pipe wall at a uniform temperature of 500 K. The pipe is covered with an insulation blanket comprised of two different materials, A and B as shown in the figure. The interface between the two materials may be assumed to have an infinite contact resistance, and the entire outer surface is exposed to air at 300 K and $h = 25$ W/m²·K. Heat transfer resistance of the thin wall is negligible.

(i) Draw the thermal resistance circuit for the system.
(ii) Calculate the total heat loss from the pipe.

![Pipe with insulation A (top half) and B (bottom half)](fig/2017-18-Q7a.svg)`,
          solution: String.raw`**Given:** $T_s = 500$ K, $T_\infty = 300$ K, $h = 25$ W/m²K, $r_1 = 0.05$ m, $r_2 = 0.10$ m, $k_A = 2$, $k_B = 0.25$ W/m·K; each material covers half the circumference.
**Find:** circuit; $q'$ per metre of pipe.
**Assumptions:** steady, radial conduction only (the infinite contact resistance blocks circumferential heat flow between A and B); constant properties; per unit length.

### (i) Circuit
Two parallel branches between $T_s$ and $T_\infty$:

$T_s$ — $R_{A}$ (half-cylinder conduction) — $R_{conv,A}$ (outer half surface) — $T_\infty$
$T_s$ — $R_{B}$ (half-cylinder conduction) — $R_{conv,B}$ (outer half surface) — $T_\infty$

Each branch is two resistances in series; the two branches are in parallel.

![Two parallel branches, each conduction plus convection](fig/2017-18-Q7a-sol.svg)

### (ii) Resistances (per metre)
A half cylinder has half the area of a full one, so its resistance is twice the full-cylinder value:
$$R_A = \frac{\ln(r_2/r_1)}{\pi k_A} = \frac{\ln 2}{\pi(2)} = 0.1103\ \mathrm{m\,K/W}$$
$$R_B = \frac{\ln 2}{\pi(0.25)} = 0.8825\ \mathrm{m\,K/W}$$
$$R_{conv,A} = R_{conv,B} = \frac{1}{h\pi r_2} = \frac{1}{25\pi(0.1)} = 0.1273\ \mathrm{m\,K/W}$$

Branch heat flows:
$$q'_A = \frac{500-300}{0.1103+0.1273} = 842\ \mathrm{W/m}$$
$$q'_B = \frac{500-300}{0.8825+0.1273} = 198\ \mathrm{W/m}$$
$$q' = 842 + 198 \approx 1040\ \mathrm{W/m}$$

**Why it matters:** ~80% of the loss goes through the high-$k$ half; the low-$k$ half barely helps because heat simply bypasses it.`,
          answer: String.raw`Two parallel branches, each (half-cylinder conduction + half-surface convection); $q' \approx 842 + 198 \approx 1040$ W per metre of pipe.` },
        { id: "2017-18-Q7b", label: "(b)", marks: "13",
          topic: "boundary-layer", sub: "Laminar boundary-layer thickness on a flat plate",
          type: "numerical", syllabus: "in", repeats: ["2015-16-Q7b", "2016-17-Q7d"],
          text: String.raw`Atmospheric air at 300 K flows over a flat plate at a speed of 2 m/s. If the viscosity of air at 300 K is $1.85\times10^{-5}$ kg/m·s, calculate the boundary layer thickness at distance of 20 cm and 40 cm from the leading edge of the plate.

Given relations: $u/u_\infty = \tfrac{3}{2}(y/\delta) - \tfrac{1}{2}(y/\delta)^3$, $\delta/x = 4.64/\mathrm{Re}_x^{1/2}$, $\tau_w = C_f\,\rho u_\infty^2/2$.`,
          solution: String.raw`**Given:** air, $T = 300$ K, $p = 101.325$ kPa, $u_\infty = 2$ m/s, $\mu = 1.85\times10^{-5}$ kg/m·s; $x = 0.2$ and $0.4$ m.
**Assumptions:** ideal gas, steady laminar flow, zero pressure gradient, cubic profile (integral method).

![Boundary-layer thickness at 20 cm and 40 cm (air, 2 m/s)](fig/2015-16-Q7b.svg)

1. Density:
$$\rho = \frac{p}{RT} = \frac{101{,}325}{287(300)} = 1.177\ \mathrm{kg/m^3},\qquad \nu = \frac{\mu}{\rho} = 1.572\times10^{-5}\ \mathrm{m^2/s}$$

2. $x = 0.2$ m:
$$\mathrm{Re}_x = \frac{u_\infty x}{\nu} = \frac{2(0.2)}{1.572\times10^{-5}} = 2.54\times10^4\ (<5\times10^5,\ \text{laminar})$$
$$\delta = \frac{4.64x}{\sqrt{\mathrm{Re}_x}} = \frac{4.64(0.2)}{\sqrt{25{,}445}} = 5.82\times10^{-3}\ \mathrm{m} = 5.8\ \mathrm{mm}$$

3. $x = 0.4$ m:
$$\mathrm{Re}_x = 5.09\times10^4\ (\text{laminar}),\qquad \delta = \frac{4.64(0.4)}{\sqrt{50{,}890}} = 8.23\times10^{-3}\ \mathrm{m} = 8.2\ \mathrm{mm}$$

**Check:** $\delta \propto \sqrt{x}$, so doubling $x$ multiplies $\delta$ by $\sqrt2$: $5.82\times1.414 = 8.23$ mm ✓`,
          answer: String.raw`$\delta(20\ \mathrm{cm}) \approx 5.8$ mm, $\delta(40\ \mathrm{cm}) \approx 8.2$ mm (Re = 2.5×10⁴ and 5.1×10⁴, laminar).` },
        { id: "2017-18-Q7c", label: "(c)", marks: "7",
          topic: "forced-convection", sub: "Distortion of the parabolic profile by heating/cooling",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`We know that the laminar velocity profile in a tube is parabolic. For heating or cooling, this parabolic velocity profile is changed to some extent. Draw few of those profiles.`,
          solution: String.raw`**Sketch:** velocity $u$ (horizontal) vs radial position $r$ from $-R$ to $+R$ (vertical) — three profiles on one diagram:
1. **Isothermal flow:** the parabola $u/u_{max} = 1 - (r/R)^2$.
2. **Liquid heated / gas cooled:** the fluid near the wall has *lower* viscosity than the core, so it moves faster near the wall; the profile is **flatter** (blunter) than the parabola, with a steeper slope at the wall and a lower centre-line velocity.
3. **Liquid cooled / gas heated:** the fluid near the wall has *higher* viscosity, so it is slowed near the wall; the profile is **more peaked** (sharper) than the parabola, with a higher centre-line velocity and a smaller wall slope.

![Laminar tube velocity profiles distorted by heating and cooling](fig/common-velocity-distortion.svg)

All three enclose the same flow rate.

**Reason:** viscosity of liquids falls with temperature, while that of gases rises. This is why Sieder–Tate adds the factor $(\mu/\mu_w)^{0.14}$: heating a liquid ($\mu_w < \mu$) increases $h$; cooling it decreases $h$.`,
          answer: String.raw`Isothermal: parabola; liquid heated (or gas cooled): flatter profile, steeper wall gradient; liquid cooled (or gas heated): more peaked profile.` },
      ] },

    { id: "2017-18-Q8", q: 8, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2017-18-Q8a", label: "(a)", marks: "11",
          topic: "boundary-layer", sub: "Reynolds–Colburn analogy",
          type: "derivation", syllabus: "in", repeats: ["2011-12-Q7a", "2014-15-Q3a", "2015-16-Q8a", "2016-17-Q8a", "2020-21-Q7a", "2022-23-Q3a"],
          text: String.raw`Derive the relation known as Reynold's–Colburn analogy.`,
          solution: String.raw`**Assumptions:** steady, incompressible, laminar flow over a flat plate; zero pressure gradient; constant properties; plate heated from the leading edge; cubic velocity and temperature profiles (integral method); $\mathrm{Pr} \gtrsim 0.7$ so that $\delta_t < \delta$.

1. **Velocity side.** Cubic profile $\dfrac{u}{u_\infty} = \dfrac32\dfrac{y}{\delta} - \dfrac12\left(\dfrac{y}{\delta}\right)^3$, and from the momentum integral $\dfrac{\delta}{x} = \dfrac{4.64}{\mathrm{Re}_x^{1/2}}$.

Wall shear:
$$\tau_w = \mu\left.\frac{\partial u}{\partial y}\right|_{0} = \frac{3}{2}\frac{\mu u_\infty}{\delta}$$
Local skin-friction coefficient:
$$C_{fx} = \frac{\tau_w}{\tfrac12\rho u_\infty^2} = \frac{3\nu}{u_\infty\delta} = \frac{3}{4.64}\frac{\nu}{u_\infty x}\mathrm{Re}_x^{1/2} = 0.646\,\mathrm{Re}_x^{-1/2}$$
so
$$\frac{C_{fx}}{2} = 0.323\,\mathrm{Re}_x^{-1/2}$$

2. **Thermal side.** From the energy integral with a cubic temperature profile, $\delta_t/\delta = \mathrm{Pr}^{-1/3}/1.026$ and
$$h_x = \frac{3}{2}\frac{k}{\delta_t}\ \Rightarrow\ \mathrm{Nu}_x = \frac{h_x x}{k} = 0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$$

3. **Stanton number:**
$$\mathrm{St}_x = \frac{h_x}{\rho c_p u_\infty} = \frac{\mathrm{Nu}_x}{\mathrm{Re}_x\mathrm{Pr}} = 0.332\,\mathrm{Re}_x^{-1/2}\mathrm{Pr}^{-2/3}$$
$$\mathrm{St}_x\mathrm{Pr}^{2/3} = 0.332\,\mathrm{Re}_x^{-1/2}$$

4. **Compare** with step 1 (0.332 ≈ 0.323, the small difference being the error of the approximate profiles; the exact Blasius solution gives 0.332 for both):
$$\boxed{\mathrm{St}_x\,\mathrm{Pr}^{2/3} = \frac{C_{fx}}{2}}$$
Integrating over the plate (both sides ∝ $x^{-1/2}$) gives the same relation for averages: $\overline{\mathrm{St}}\,\mathrm{Pr}^{2/3} = \overline{C_f}/2$.

**Why it matters:** this is the Reynolds–Colburn analogy: $h$ can be found from friction (drag) measurements made without heat transfer. For $\mathrm{Pr} = 1$ it reduces to Reynolds' analogy $\mathrm{St} = C_f/2$. It also holds approximately for turbulent flow with $C_f/2 = 0.0296\mathrm{Re}_x^{-1/5}$.`,
          answer: String.raw`$\mathrm{St}_x\mathrm{Pr}^{2/3} = C_{fx}/2$ (from $C_{fx}/2 = 0.332\mathrm{Re}_x^{-1/2}$ and $\mathrm{Nu}_x = 0.332\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$).` },
        { id: "2017-18-Q8b", label: "(b)", marks: "24",
          topic: "forced-convection", sub: "Laminar oil flow in a heated tube, outlet temperature",
          type: "numerical", syllabus: "in", repeats: ["2014-15-Q4b"],
          text: String.raw`Engine oil is heated by flowing through a circular tube of diameter $D = 50$ mm and length $L = 25$ m and whose surface is maintained at 150°C. If the flow rate and inlet temperature of the oil are 0.5 kg/s and 20°C, what is the outlet oil temperature?`,
          solution: String.raw`**Given:** $D = 0.05$ m, $L = 25$ m, $T_s = 150$°C (constant), $\dot m = 0.5$ kg/s, $T_{m,i} = 20$°C.
**Find:** $T_{m,o}$.
**Assumptions:** steady; constant wall temperature; negligible wall resistance; properties at the mean bulk temperature (iterate); thin hydrodynamic entry.

Engine oil (unused), Holman Table A-4:

| T (°C) | ρ (kg/m³) | $c_p$ (J/kg·K) | ν (m²/s) | k (W/m·K) | Pr |
|---|---|---|---|---|---|
| 20 | 888.2 | 1881 | 9.01×10⁻⁴ | 0.145 | 10,400 |
| 40 | 876.1 | 1964 | 2.40×10⁻⁴ | 0.144 | 2870 |
| 140 | 816.9 | 2395 | 8.0×10⁻⁶ | 0.133 | 116 |
| 160 | 805.9 | 2483 | 5.6×10⁻⁶ | 0.132 | 84 |

1. **First guess** $T_{m,o} \approx 36$°C → $\bar T_m \approx 28$°C. Interpolating (log for ν, Pr): $\rho = 883$ kg/m³, $c_p = 1915$ J/kg·K, $\nu = 5.25\times10^{-4}$ m²/s → $\mu = 0.463$ kg/m·s, $k = 0.1446$ W/m·K, $\mathrm{Pr} = 6140$.

2. **Reynolds number:**
$$\mathrm{Re} = \frac{4\dot m}{\pi D\mu} = \frac{4(0.5)}{\pi(0.05)(0.463)} = 27.5\ \to\ \text{laminar}$$
Hydrodynamic entry $L_h \approx 0.05\mathrm{Re}D = 0.07$ m (developed almost at once); thermal entry $L_t \approx 0.05\mathrm{Re\,Pr}D \approx 420$ m ≫ 25 m, so the whole tube is a **thermal entrance region** → use Hausen (constant $T_s$, developed velocity).

3. **Graetz number:**
$$\mathrm{Gz} = \mathrm{Re\,Pr}\frac{D}{L} = 27.5(6140)\frac{0.05}{25} = 338$$
(Note $\mathrm{Re\,Pr} = 4\dot m c_p/(\pi D k)$ does not depend on μ, so Gz hardly changes between iterations.)

4. **Hausen:**
$$\overline{\mathrm{Nu}} = 3.66 + \frac{0.0668\,\mathrm{Gz}}{1+0.04\,\mathrm{Gz}^{2/3}} = 3.66 + \frac{0.0668(338)}{1+0.04(338)^{2/3}} = 11.33$$
$$\bar h = \frac{11.33(0.1446)}{0.05} = 32.8\ \mathrm{W/m^2K}$$

5. **Outlet temperature** (constant wall temperature):
$$\frac{T_s - T_{m,o}}{T_s - T_{m,i}} = \exp\left(-\frac{\bar h\pi DL}{\dot m c_p}\right) = \exp\left(-\frac{32.8\pi(0.05)(25)}{0.5(1915)}\right) = 0.8742$$
$$T_{m,o} = 150 - 130(0.8742) = 36.4\,°\mathrm{C}$$
$\bar T_m = (20+36.4)/2 = 28.2$°C — matches the guess, so no further iteration.

6. Heat rate: $q = \dot m c_p (T_{m,o}-T_{m,i}) = 0.5(1915)(16.4) = 15.7$ kW.

**Check with Sieder–Tate** (laminar, slides): $\mathrm{Nu} = 1.86(\mathrm{Gz})^{1/3}(\mu/\mu_w)^{0.14}$ with $\mu_w$(150°C) $= 5.4\times10^{-3}$ kg/m·s gives $\mu/\mu_w \approx 50$–85, far outside its validity range ($0.0044 < \mu/\mu_w < 9.75$); it would predict ≈ 50°C. Without the viscosity factor it gives Nu ≈ 13, close to Hausen. Hausen is therefore used.

**Exam tip:** viscous oils give tiny Re and huge Pr — always check laminar and the thermal entry length first.`,
          answer: String.raw`Re ≈ 28 (laminar, thermal entrance), Gz ≈ 338, Hausen Nu ≈ 11.3, $\bar h \approx 33$ W/m²K → $T_{m,o} \approx 36$°C ($q \approx 15.7$ kW).` },
      ] },
  ]
});
