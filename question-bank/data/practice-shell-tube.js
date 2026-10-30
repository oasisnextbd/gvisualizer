QB.paper({ year: "Practice", set: "Shell & tube design (Kern)", date: "", marks: 0, practice: true,
  rules: String.raw`Kern's method in Kern's units (Btu, lb, ft, h, °F): rating an existing exchanger (heat balance, caloric temperature, LMTD and F_T, h_io, h_o, U_C, U_D, R_d, pressure drops, TEMA sheet) and designing a new one by trial (assumed U, tube count, overdesign). Slide examples first (S), then potential compulsory-style finals (F) with all properties given.`,
  questions: [

    // ---------------------------------------------------------------- S1
    { id: "practice-shell-tube-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw`*Kern Example 7.3, the slides' "existing exchanger" example.* 43,800 lb/h of 42°API kerosene leaves the bottom of a distilling column at 390°F and is to be cooled to 200°F by 149,000 lb/h of 34°API Mid-continent crude coming from storage at 100°F and heated to 170°F. A 10 psi pressure drop is permissible on both streams and, in accordance with Kern Table 12, a combined dirt factor of 0.003 should be provided. Available: a 21¼ in ID exchanger with 158 tubes, 1 in OD, 13 BWG, 16 ft long, on a 1¼ in square pitch. The bundle is arranged for four tube passes and the baffles are spaced 5 in apart. Is the exchanger suitable?

Tube data (Kern Table 10, 1 in 13 BWG): ID 0.810 in, flow area per tube 0.515 in², outside surface 0.2618 ft²/ft. Property values below are those read from Kern's charts in the slides.`,
      parts: [
        { id: "practice-shell-tube-P1a", label: "(a)", marks: "", topic: "shell-tube",
          sub: "Heat balance, LMTD, F_T and caloric temperatures", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 3 pp. 19–28 (Kern Ex. 7.3, steps 1–3; Figs. 17 and 18)`,
          text: String.raw`Make the heat balance, find the true temperature difference $\Delta t = F_T\times\mathrm{LMTD}$ and the caloric temperatures, and decide which fluid goes in the tubes. (Kerosene $c = 0.605$, crude $c = 0.49$ Btu/lb·°F; $K_c = 0.20$ with the crude controlling.)`,
          solution: String.raw`**Given:** kerosene (hot) $W = 43{,}800$ lb/h, $T_1 = 390$, $T_2 = 200$°F; crude (cold) $w = 149{,}000$ lb/h, $t_1 = 100$, $t_2 = 170$°F.

![Kern Ex. 7.3: kerosene in the shell, crude in four tube passes](fig/practice-shell-tube-P1.svg)

### 1. Heat balance
$$Q = WC(T_1 - T_2) = 43{,}800(0.605)(190) = 5.03\times10^6\ \mathrm{Btu/h}$$
$$Q = wc(t_2 - t_1) = 149{,}000(0.49)(70) = 5.11\times10^6\ \mathrm{Btu/h}$$
Agreement within 1.5%; the slides use $Q = 5{,}100{,}000$ Btu/h.

### 2. LMTD and $F_T$
Hot end $390 - 170 = 220$°F; cold end $200 - 100 = 100$°F.
$$\mathrm{LMTD} = \frac{220 - 100}{2.3\log(220/100)} = 152.2\,°\mathrm{F}\ \ (\text{slides: } 152.5)$$
$$R = \frac{T_1 - T_2}{t_2 - t_1} = \frac{190}{70} = 2.71,\qquad S = \frac{t_2 - t_1}{T_1 - t_1} = \frac{70}{390 - 100} = 0.241$$
Kern Fig. 18 (1-2, also used for 1-4): $F_T = 0.905$ (the analytical 1-2 formula gives 0.892).
$$\Delta t = F_T\,\mathrm{LMTD} = 0.905(152.5) = 138\,°\mathrm{F}$$
$F_T > 0.75$, so one shell pass is acceptable.

### 3. Caloric temperatures
$$\frac{\Delta t_c}{\Delta t_h} = \frac{100}{220} = 0.455,\qquad K_c = 0.20\ \ \Rightarrow\ \ F_c = 0.42\ \ \text{(Kern Fig. 17)}$$
$$T_c = T_2 + F_c(T_1 - T_2) = 200 + 0.42(190) = 280\,°\mathrm{F}$$
$$t_c = t_1 + F_c(t_2 - t_1) = 100 + 0.42(70) = 129\,°\mathrm{F}$$
(The arithmetic means, 295 and 135°F, would overstate the kerosene temperature; the caloric temperature is used because the crude viscosity varies strongly with temperature.)

### 4. Allocation
The shell-side and tube-side flow areas will be nearly equal, so the **larger stream, crude, goes in the tubes** and kerosene in the shell.`,
          answer: String.raw`$Q \approx 5.1\times10^6$ Btu/h; LMTD = 152.5°F, $R = 2.71$, $S = 0.241$, $F_T = 0.905$, $\Delta t = 138$°F; $F_c = 0.42$ → $T_c = 280$°F, $t_c = 129$°F; crude in the tubes.` },

        { id: "practice-shell-tube-P1b", label: "(b)", marks: "", topic: "shell-tube",
          sub: "h_o and h_io with the wall-temperature correction φ", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 3 pp. 29–36 (Kern Ex. 7.3, steps 4–10; Figs. 24, 28)`,
          text: String.raw`Find the shell-side and tube-side film coefficients, including the viscosity correction $\phi = (\mu/\mu_w)^{0.14}$.

Properties at the caloric temperatures: kerosene at 280°F: $\mu = 0.40$ cP, $c = 0.59$, $k = 0.0765$; crude at 129°F: $\mu = 3.6$ cP, $c = 0.49$, $k = 0.077$. At the wall temperature: kerosene 0.56 cP, crude 1.5 cP.`,
          solution: String.raw`### Shell side: kerosene
1. Clearance $C' = P_T - d_o = 1.25 - 1.0 = 0.25$ in.
$$a_s = \frac{ID\times C'B}{144P_T} = \frac{21.25(0.25)(5)}{144(1.25)} = 0.1475\ \mathrm{ft^2}$$
2. $$G_s = \frac{W}{a_s} = \frac{43{,}800}{0.1475} = 297{,}000\ \mathrm{lb/h\,ft^2}$$
3. $D_e = 0.99/12 = 0.0825$ ft (Fig. 28 inset, 1 in on 1¼ in square); $\mu = 0.40(2.42) = 0.97$ lb/ft·h.
$$Re_s = \frac{D_eG_s}{\mu} = \frac{0.0825(297{,}000)}{0.97} = 25{,}300$$
4. Kern Fig. 28: $j_H = 93$.
5. $(c\mu/k)^{1/3} = (0.59\times0.97/0.0765)^{1/3} = 1.95$
$$\frac{h_o}{\phi_s} = j_H\frac{k}{D_e}\left(\frac{c\mu}{k}\right)^{1/3} = 93\times\frac{0.0765}{0.0825}\times1.95 = 169\ \mathrm{Btu/h\,ft^2\,°F}$$

### Tube side: crude
6. $$a_t = \frac{N_ta'_t}{144n} = \frac{158(0.515)}{144(4)} = 0.141\ \mathrm{ft^2}$$
7. $$G_t = \frac{w}{a_t} = \frac{149{,}000}{0.141} = 1{,}060{,}000\ \mathrm{lb/h\,ft^2}$$
8. $D = 0.81/12 = 0.0675$ ft; $\mu = 3.6(2.42) = 8.7$ lb/ft·h.
$$Re_t = \frac{DG_t}{\mu} = \frac{0.0675(1{,}060{,}000)}{8.7} = 8220,\qquad L/D = \frac{16}{0.0675} = 237$$
9. Kern Fig. 24 (transition region, $L/D = 237$): $j_H = 31$.
10. $(c\mu/k)^{1/3} = (0.49\times8.7/0.077)^{1/3} = 3.81$
$$\frac{h_i}{\phi_t} = 31\times\frac{0.077}{0.0675}\times3.81 = 135,\qquad \frac{h_{io}}{\phi_t} = 135\times\frac{0.81}{1.0} = 109$$

### Wall temperature and φ
11. $$t_w = t_c + \frac{h_o/\phi_s}{h_{io}/\phi_t + h_o/\phi_s}(T_c - t_c) = 129 + \frac{169}{109 + 169}(280 - 129) = 221\,°\mathrm{F}$$
12. Kerosene: $\mu_w = 0.56(2.42) = 1.36$, $\phi_s = (0.97/1.36)^{0.14} = 0.96$.
Crude: $\mu_w = 1.5(2.42) = 3.63$, $\phi_t = (8.7/3.63)^{0.14} = 1.11$ (computed 1.13; the slides use 1.11).
13. Corrected coefficients:
$$h_o = \frac{h_o}{\phi_s}\phi_s = 169(0.96) = 162,\qquad h_{io} = 109(1.11) = 121\ \mathrm{Btu/h\,ft^2\,°F}$$

**Why it matters:** the crude is heated, so it is less viscous at the hotter wall ($\phi_t > 1$), while the kerosene is cooled and more viscous at the colder wall ($\phi_s < 1$). The crude film controls.`,
          answer: String.raw`Shell: $a_s = 0.1475$ ft², $G_s = 297{,}000$, $Re_s = 25{,}300$, $j_H = 93$, $h_o = 162$; tube: $a_t = 0.141$ ft², $G_t = 1.06\times10^6$, $Re_t = 8220$, $j_H = 31$, $h_{io} = 121$ Btu/h·ft²·°F ($t_w = 221$°F).` },

        { id: "practice-shell-tube-P1c", label: "(c)", marks: "", topic: "shell-tube",
          sub: "U_C, U_D and R_d", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 3 pp. 37–38 (Kern Ex. 7.3, steps 11–13)`,
          text: String.raw`Find the clean and design overall coefficients and the dirt factor the exchanger provides.`,
          solution: String.raw`1. Clean coefficient:
$$U_C = \frac{h_{io}h_o}{h_{io} + h_o} = \frac{121(162)}{121 + 162} = 69.3\ \mathrm{Btu/h\,ft^2\,°F}$$
2. Available surface ($a'' = 0.2618$ ft²/ft):
$$A = N_tLa'' = 158(16)(0.2618) = 662\ \mathrm{ft^2}$$
3. Design coefficient:
$$U_D = \frac{Q}{A\,\Delta t} = \frac{5{,}100{,}000}{662(138)} = 55.8\ \mathrm{Btu/h\,ft^2\,°F}$$
4. Dirt factor:
$$R_d = \frac{U_C - U_D}{U_CU_D} = \frac{69.3 - 55.8}{69.3(55.8)} = 0.00348\ \mathrm{h\,ft^2\,°F/Btu}$$

0.00348 > 0.003 required, so the exchanger has enough surface for a reasonable maintenance period.`,
          answer: String.raw`$U_C = 69.3$, $A = 662$ ft², $U_D = 55.8$ Btu/h·ft²·°F, $R_d = 0.00348$ (≥ 0.003 required).` },

        { id: "practice-shell-tube-P1d", label: "(d)", marks: "", topic: "shell-tube",
          sub: "Shell-side and tube-side pressure drops; suitability", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 3 pp. 39–43 (Kern Ex. 7.3, ΔP; Figs. 26, 27, 29)`,
          text: String.raw`Calculate both pressure drops (kerosene $s = 0.73$, crude $s = 0.83$) and state whether the exchanger is suitable. Fill in the key TEMA-sheet values.`,
          solution: String.raw`### Shell side
1. $Re_s = 25{,}300$: Kern Fig. 29, $f = 0.00175$ ft²/in².
2. Number of crosses: $N + 1 = 12L/B = 12(16)/5 = 38.4$ (the slides round to 39); $D_s = 21.25/12 = 1.77$ ft.
3. $$\Delta P_s = \frac{fG_s^2D_s(N+1)}{5.22\times10^{10}D_es\phi_s} = \frac{0.00175(297{,}000)^2(1.77)(39)}{5.22\times10^{10}(0.0825)(0.73)(0.96)} = 3.5\ \mathrm{psi}$$

### Tube side
4. $Re_t = 8220$: Kern Fig. 26, $f = 0.000285$ ft²/in².
5. $$\Delta P_t = \frac{fG_t^2Ln}{5.22\times10^{10}Ds\phi_t} = \frac{0.000285(1{,}060{,}000)^2(16)(4)}{5.22\times10^{10}(0.0675)(0.83)(1.11)} = 6.3\ \mathrm{psi}$$
6. Return loss: Kern Fig. 27 at $G_t = 1.06\times10^6$, $V^2/2g' = 0.15$ psi (check: $V = G_t/(3600\times62.5) = 4.71$ ft/s, $V^2/2g'\times62.5/144 = 0.150$).
$$\Delta P_r = \frac{4n}{s}\frac{V^2}{2g'} = \frac{4(4)}{0.83}(0.15) = 2.9\ \mathrm{psi}$$
7. $\Delta P_T = 6.3 + 2.9 = 9.2$ psi.

### Verdict

| Item | Calculated | Required / allowed |
|---|---|---|
| $R_d$ | 0.00348 | ≥ 0.003 ✓ |
| $\Delta P_s$ (kerosene) | 3.5 psi | ≤ 10 ✓ |
| $\Delta P_T$ (crude) | 9.2 psi | ≤ 10 ✓ |

"A dirt factor of 0.00348 will be obtained although only 0.003 is required; the pressure drops have not been exceeded and the exchanger will be satisfactory for the service."

### TEMA sheet (key rows)

| Item | Shell side | Tube side |
|---|---|---|
| Size and type | 21¼–192, 1-4, fixed tubesheet | |
| Surface | 662 ft² | |
| Fluid | 42°API kerosene | 34°API crude |
| Flow, lb/h | 43,800 | 149,000 |
| Temperature in/out, °F | 390 / 200 | 100 / 170 |
| Passes | 1 | 4 |
| ΔP allowed / calculated, psi | 10 / 3.5 | 10 / 9.2 |
| Film coefficient, Btu/h·ft²·°F | 162 | 121 ($h_{io}$) |
| Fouling | combined 0.003 required, 0.00348 available | |
| Heat exchanged | 5,100,000 Btu/h; corrected MTD 138°F | |
| $U_C$ / $U_D$ | 69.3 / 55.8 | |
| Tubes | 158, 1 in OD, 13 BWG, 16 ft, 1¼ in square pitch | |
| Shell / baffles | 21¼ in ID; segmental, 25% cut, 5 in spacing | |`,
          answer: String.raw`$\Delta P_s = 3.5$ psi; $\Delta P_T = 6.3 + 2.9 = 9.2$ psi; with $R_d = 0.00348 > 0.003$ the exchanger is **suitable**.` }
      ] },

    // ---------------------------------------------------------------- S2
    { id: "practice-shell-tube-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw`*Heat Exchanger Part 2 design example.* 150,000 lb/h of kerosene is to be heated from 75 to 120°F by cooling a gasoline stream from 160 to 120°F. The inlet pressure is 50 psia for each stream; the maximum pressure drop is 7 psi for gasoline and 10 psi for kerosene. Use published fouling factors for refinery streams: gasoline 0.0005 and kerosene 0.001 h·ft²·°F/Btu. Design a shell-and-tube exchanger for this service.

Properties at the caloric temperatures (slides): 76°API gasoline $\mu = 0.2$ cP (0.484 lb/ft·h), $c = 0.57$, $k = 0.075$, $s = 0.685$; 46°API kerosene $\mu = 1.6$ cP (3.872 lb/ft·h), $c = 0.48$, $k = 0.083$, $s = 0.80$ ($\rho = 49.8$ lb/ft³). Tubes 1 in OD, 14 BWG (ID 0.834 in, flow area 0.546 in²), on a 1¼ in square pitch, fixed tubesheet. Admiralty-brass tubes, $k_w = 70$ Btu/h·ft·°F.`,
      parts: [
        { id: "practice-shell-tube-P2a", label: "(a)", marks: "", topic: "shell-tube",
          sub: "Design: caloric T, heat balance, LMTD, assumed U, area, tube count", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides Heat Exchanger Part 2, pp. 2–17 (design example, iterations 1 and 2; Kern Tables 8, 9)`,
          text: String.raw`Find the caloric temperatures ($K_c = 1$), the heat duty and gasoline flow, the LMTD and $F_T$ for a 1-2 exchanger, and the area for an assumed $U = 45$ Btu/h·ft²·°F. Choose the tube count and shell for 16 ft tubes with 2 passes and check the tube-side Reynolds number; then repeat with 24 ft tubes and 6 passes.`,
          solution: String.raw`![Kerosene in the tubes, gasoline in the shell](fig/practice-shell-tube-P2.svg)

### 1. Caloric temperatures
$$r = \frac{\Delta t_c}{\Delta t_h} = \frac{T_2 - t_1}{T_1 - t_2} = \frac{120 - 75}{160 - 120} = 1.125$$
(The slide prints $(120 - 70)/40 = 1.25$, a typo; either gives about the same $F_c$.) Gasoline 76°API gives $K_c = 1$, and Kern Fig. 17 gives $F_c = 0.455$.
$$T_c = 120 + 0.455(160 - 120) = 138.2\,°\mathrm{F},\qquad t_c = 75 + 0.455(120 - 75) = 95.5\,°\mathrm{F}$$

### 2. Heat balance (no heat loss)
$$Q = \dot m_kC_k(t_2 - t_1) = 150{,}000(0.48)(45) = 3.24\times10^6\ \mathrm{Btu/h}$$
$$\dot m_g = \frac{3.24\times10^6}{0.57(40)} = 142{,}105\ \mathrm{lb/h}$$

### 3. LMTD and $F_T$
Ends: $160 - 120 = 40$°F and $120 - 75 = 45$°F.
$$\Delta T_{lm} = \frac{40 - 45}{\ln(40/45)} = 42.5\,°\mathrm{F}\ \ (\text{slides: } 42.75)$$
$R = 40/45 = 0.889$, $S = 45/85 = 0.529$; Holman Fig. 10-8: $F_T = 0.802$.

### 4. Area for $U_{assm} = 45$
Kern Table 8 gives 40–75 for light organics against light organics; 45 is assumed.
$$A = \frac{Q}{U_{assm}\,\mathrm{LMTD}\,F_T} = \frac{3.24\times10^6}{45(42.75)(0.802)} = 2100\ \mathrm{ft^2}$$
(With 42.5°F the area is 2114 ft²; the choice of shell below is unchanged.)

### 5. Iteration 1: 16 ft tubes, 2 passes
Kerosene goes in the tubes because it has the higher fouling tendency.
$$n_t = \frac{A}{\pi d_oL} = \frac{2100}{\pi(1/12)(16)} = 502$$
Kern Table 9 (1 in on 1¼ in square, 2-P): the closest standard count is 518 tubes in a 35 in shell.
$$Re = \frac{4\dot m_k(n_p/n_t)}{\pi d_i\mu} = \frac{4(150{,}000)(2/518)}{\pi(0.834/12)(3.872)} = 2740 < 10^4$$
The flow is laminar or transitional, so $h_i$ would be poor: revise the design (more passes, longer tubes, fewer tubes), subject to the tube-side $\Delta P$.

### 6. Iteration 2: 24 ft tubes, 6 passes
$$n_t = \frac{2100}{\pi(1/12)(24)} = 335$$
Kern Table 9, 6-P: 368 tubes in a 31 in shell.
$$Re = \frac{4(150{,}000)(6/368)}{\pi(0.0695)(3.872)} = 11{,}571 > 10^4\ ✓$$
$$u = \frac{Re\,\mu}{d_i\rho} = \frac{11{,}571(3.872)}{0.0695(49.8)} = 12{,}945\ \mathrm{ft/h} = 3.6\ \mathrm{ft/s} = 1.1\ \mathrm{m/s}$$
within the usual 1–2.5 m/s for liquids.`,
          answer: String.raw`$T_c = 138.2$°F, $t_c = 95.5$°F; $Q = 3.24\times10^6$ Btu/h, $\dot m_g = 142{,}105$ lb/h; LMTD ≈ 42.5°F (slides 42.75), $F_T = 0.802$; $A = 2100$ ft². 16 ft/2-P: 518 tubes, Re = 2740 (rejected); 24 ft/6-P: 368 tubes in a 31 in shell, Re = 11,571, $u = 3.6$ ft/s.` },

        { id: "practice-shell-tube-P2b", label: "(b)", marks: "", topic: "shell-tube",
          sub: "Design: h_i, h_o, U_o,cal and the 30% check", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides Heat Exchanger Part 2, pp. 18–24 (Figs. 24, 28; Eq. 1.6)`,
          text: String.raw`For the 31 in, 368-tube, 6-pass design find $h_i$ (Kern Fig. 24 gives $j_H = 42$), $h_o$ with 25% cut baffles at $B = 0.5D_s$ (Kern Fig. 28 gives $j_H = 110$), and the calculated overall coefficient
$$U_{o,cal} = \left[\frac{1}{h_o} + R_{dg} + \frac{A_o}{A_i}\frac{d_o - d_i}{2k_w} + \frac{A_o}{A_i}\frac{1}{h_i} + \frac{A_o}{A_i}R_{dk}\right]^{-1}$$
Is the assumed $U$ acceptable?`,
          solution: String.raw`### Tube side (kerosene)
$\phi_t = 1$. $(c\mu/k)^{1/3} = (0.48\times3.872/0.083)^{1/3} = 2.819$.
$$h_i = j_H\frac{k}{d_i}\left(\frac{c\mu}{k}\right)^{1/3} = 42\times\frac{0.083}{0.834/12}\times2.819 = 141.3\ \mathrm{Btu/h\,ft^2\,°F}$$
(The Sieder–Tate line $0.027Re^{0.8}$ would give $j_H = 48$; the chart reads lower near $Re = 10^4$, with $L/D = 345$.)

### Shell side (gasoline)
1. $B = 0.5D_s = 15.5$ in; $C' = 1.25 - 1 = 0.25$ in.
2. $$D_e = \frac{4(P_T^2 - \pi d_o^2/4)}{\pi d_o} = \frac{4(1.5625 - 0.7854)}{\pi(1)} = 0.99\ \mathrm{in} = 0.082\ \mathrm{ft}$$
3. $$a_s = \frac{C'BD_s}{P_T} = \frac{(0.25/12)(15.5/12)(31/12)}{1.25/12} = 0.667\ \mathrm{ft^2}\ \ (\text{slides: } 0.675)$$
4. $$G_s = \frac{142{,}105}{0.675} = 210{,}526\ \mathrm{lb/h\,ft^2},\qquad Re_s = \frac{0.082(210{,}526)}{0.484} = 35{,}668$$
5. $j_H = 110$; $(c\mu/k)^{1/3} = (0.57\times0.484/0.075)^{1/3} = 1.544$; $\phi_s = 1$.
$$h_o = 110\times\frac{0.075}{0.082}\times1.544 = 155.3\ \mathrm{Btu/h\,ft^2\,°F}$$

### Overall coefficient
As on the slide (with $A_o/A_i$ written as $(d_o/d_i)^2 = 1.438$):
$$U_{o,cal} = \left[\frac{1}{155.3} + 0.0005 + 1.438\,\frac{(1 - 0.834)/12}{2(70)} + \frac{1.438}{141.3} + 1.438(0.001)\right]^{-1} = 53.5\ \mathrm{Btu/h\,ft^2\,°F}$$
$$\frac{U_{o,cal} - U_{o,assm}}{U_{o,assm}} = \frac{53.5 - 45}{45} = 18.9\% < 30\%\ ✓$$

> Note: for tubes $A_o/A_i = d_o/d_i = 1.199$, not $(d_o/d_i)^2$. With the correct ratio $U_{o,cal} = 59.7$ and the deviation is 33%, just above the 30% limit, which would strictly call for one more iteration (recompute $A$ with $U = 59.7$). The slides' answer is kept below.`,
          answer: String.raw`$h_i = 141.3$, $h_o = 155.3$ Btu/h·ft²·°F; $U_{o,cal} = 53.5$ (slides), 18.9% above the assumed 45, so accepted (with $A_o/A_i = d_o/d_i$ it would be 59.7, +33%).` },

        { id: "practice-shell-tube-P2c", label: "(c)", marks: "", topic: "shell-tube",
          sub: "Design: pressure drops, over-surface and overdesign", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides Heat Exchanger Part 2, pp. 25–33 (Figs. 26, 27, 29; over surface and over design)`,
          text: String.raw`Check the tube-side (Kern Fig. 26: $f = 0.00028$ ft²/in²) and shell-side (Fig. 29: $f = 0.00165$ ft²/in²) pressure drops, then find the percentage over-surface and overdesign.`,
          solution: String.raw`### Tube side (kerosene, $n_p = 6$, $L = 24$ ft)
1. $f = 0.00028\times144 = 0.0403$ (dimensionless).
2. $$a_t = \frac{368(0.546)}{6(144)} = 0.232\ \mathrm{ft^2},\qquad G_t = \frac{150{,}000}{0.232} = 646{,}552\ \mathrm{lb/h\,ft^2}$$
3. Friction (the slides' form; $7.5\times10^{12} \approx 144\times5.22\times10^{10}$):
$$\Delta P_t = \frac{fG_t^2Ln_p}{7.5\times10^{12}d_is_k\phi_t} = \frac{0.0403(646{,}552)^2(24)(6)}{7.5\times10^{12}(0.834/12)(0.80)(1)} = 5.81\ \mathrm{psi}$$
4. Return loss, slide formula:
$$\Delta P_{rt} = 1.334\times10^{-13}(2n_p - 1.5)\frac{G_t^2}{s_k} = 1.334\times10^{-13}(10.5)\frac{(646{,}552)^2}{0.80} = 0.73\ \mathrm{psi}$$
5. $\Delta P_T = 5.81 + 0.73 = 6.54$ psi < 10 psi ✓
(Kern's $4n/s$ velocity heads, Fig. 27, give $\Delta P_r = (24/0.8)(0.055) = 1.66$ psi and $\Delta P_T = 7.5$ psi, still acceptable.)

### Shell side (gasoline)
6. Number of baffles $n_b = L/B = 24/(15.5/12) = 18.6 \approx 19$, so $n_b + 1 = 20$ crossings. $f = 0.00165\times144 = 0.2376$.
$$\Delta P_s = \frac{fG_s^2D_s(n_b + 1)}{7.5\times10^{12}D_es_g\phi_s} = \frac{0.2376(210{,}526)^2(20)(31/12)}{7.5\times10^{12}(0.082)(0.685)(1)} = 1.4\ \mathrm{psi} < 7\ ✓$$
(the computed value is 1.3 psi; one shell pass, so no shell return loss).

### Over-surface and overdesign
7. $h_{io} = h_i\,d_i/d_o = 141.3(0.834) = 117.8$
$$U_C = \frac{h_oh_{io}}{h_o + h_{io}} = \frac{155.3(117.8)}{155.3 + 117.8} = 67.0\ \mathrm{Btu/h\,ft^2\,°F}$$
$$\%\ \text{over-surface} = \frac{U_C - U_{o,cal}}{U_C} = \frac{67.0 - 53.5}{67.0} = 20\%$$
8. Area installed and required:
$$A = \pi d_oLn_t = \pi(1/12)(24)(368) = 2312\ \mathrm{ft^2},\qquad A_{reqd} = \pi(1/12)(24)(335) = 2105\ \mathrm{ft^2}$$
$$\%\ \text{overdesign} = \frac{A - A_{reqd}}{A_{reqd}} = \frac{2312 - 2105}{2105} = 9.8\% \le 10\%\ ✓$$

**Final design:** 1-6 fixed-tubesheet exchanger, 31 in shell, 368 tubes 1 in OD 14 BWG × 24 ft on 1¼ in square pitch, kerosene in the tubes, 25% cut baffles at 15.5 in; $\Delta P_T = 6.5$ psi, $\Delta P_s = 1.4$ psi.`,
          answer: String.raw`$\Delta P_T = 5.81 + 0.73 = 6.54$ psi (< 10); $\Delta P_s = 1.4$ psi (< 7); $U_C = 67.0$, over-surface 20%; $A = 2312$ vs 2105 ft² → overdesign 9.8%: design accepted.` }
      ] },

    // ---------------------------------------------------------------- S3
    { id: "practice-shell-tube-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-shell-tube-P3", label: "", marks: "", topic: "shell-tube",
          sub: "Kern geometry drill: a_t, a_s, G, Re, D_e, N+1, A", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Variation of slides HX Part 1, file 3 pp. 5–11 (existing-exchanger steps 4–5, 9)`,
          text: String.raw`An exchanger has a 25 in ID shell with 238 tubes, 1 in OD 14 BWG (ID 0.834 in, flow area 0.546 in², 0.2618 ft²/ft), 16 ft long on a 1¼ in square pitch, arranged for 4 tube passes; baffles are 10 in apart. 120,000 lb/h of a liquid ($\mu = 1.0$ cP, $s = 0.85$) flows in the tubes and 80,000 lb/h of another ($\mu = 0.8$ cP) in the shell. Find $a_t$, $G_t$, $Re_t$ and the tube velocity; $a_s$, $D_e$, $G_s$, $Re_s$; the number of shell crossings and the heat-transfer area. Would 2 tube passes (252 tubes in the same shell) be acceptable?`,
          solution: String.raw`![Baffle spacing, shell ID and pitch clearance C′ that set the shell flow area](fig/practice-shell-tube-P3.svg)

### Tube side
1. $$a_t = \frac{N_ta'_t}{144n} = \frac{238(0.546)}{144(4)} = 0.2256\ \mathrm{ft^2}$$
2. $$G_t = \frac{w}{a_t} = \frac{120{,}000}{0.2256} = 531{,}900\ \mathrm{lb/h\,ft^2}$$
3. $D = 0.834/12 = 0.0695$ ft; $\mu = 1.0(2.42) = 2.42$ lb/ft·h.
$$Re_t = \frac{DG_t}{\mu} = \frac{0.0695(531{,}900)}{2.42} = 15{,}300$$
4. $$V = \frac{G_t}{3600\rho} = \frac{531{,}900}{3600(62.5\times0.85)} = 2.8\ \mathrm{ft/s}$$

### Shell side
5. $C' = 1.25 - 1.0 = 0.25$ in.
$$a_s = \frac{ID\,C'B}{144P_T} = \frac{25(0.25)(10)}{144(1.25)} = 0.347\ \mathrm{ft^2}$$
6. $D_e = 4(1.25^2 - \pi/4)/\pi = 0.99$ in $= 0.0825$ ft.
7. $$G_s = \frac{80{,}000}{0.347} = 230{,}400\ \mathrm{lb/h\,ft^2},\qquad Re_s = \frac{0.0825(230{,}400)}{0.8(2.42)} = 9820$$
8. Crossings: $N + 1 = 12L/B = 12(16)/10 = 19.2$ (about 19 crossings, 18 baffles).

### Surface
9. $$A = N_tLa'' = 238(16)(0.2618) = 997\ \mathrm{ft^2}$$

### Two passes?
With 252 tubes and $n = 2$: $a_t = 252(0.546)/(144\times2) = 0.478$ ft², $G_t = 251{,}200$, $Re_t = 7200$. That is in the transition region (below $10^4$), with a much lower $h_i$, so the 4-pass arrangement is preferred (if its $\Delta P_t$ is acceptable).

**Exam tip:** in $a_s$ use $ID$, $C'$, $B$ and $P_T$ all in inches with the 144; in $N + 1 = 12L/B$, $L$ is in ft and $B$ in inches.`,
          answer: String.raw`$a_t = 0.2256$ ft², $G_t = 5.32\times10^5$, $Re_t = 15{,}300$, $V = 2.8$ ft/s; $a_s = 0.347$ ft², $D_e = 0.0825$ ft, $G_s = 2.30\times10^5$, $Re_s = 9820$; $N+1 = 19.2$; $A = 997$ ft². 2 passes would give $Re_t \approx 7200$ (transition): keep 4 passes.` }
      ] },

    // ---------------------------------------------------------------- S4
    { id: "practice-shell-tube-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-shell-tube-P4a", label: "(a)", marks: "", topic: "shell-tube",
          sub: "Caloric temperatures and F_T for a 1-2 exchanger", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Variation of slides HX Part 1, file 3 pp. 6, 24–28 and Part 2, pp. 3–9 (Kern Figs. 17, 18; Holman Fig. 10-8)`,
          text: String.raw`A crude-oil fraction is cooled from 350 to 180°F in the shell of a 1-2 exchanger by a cold oil heated from 95 to 155°F in the tubes. The inset of Kern Fig. 17 gives $K_c = 0.30$ for the controlling stream. Find the caloric temperatures, the LMTD, $R$, $S$, $F_T$ and the true temperature difference.`,
          solution: String.raw`**Given:** $T_1 = 350$, $T_2 = 180$°F; $t_1 = 95$, $t_2 = 155$°F; $K_c = 0.30$.

1. Terminal differences: hot end $\Delta t_h = T_1 - t_2 = 350 - 155 = 195$°F; cold end $\Delta t_c = T_2 - t_1 = 180 - 95 = 85$°F.

2. Caloric factor: $\Delta t_c/\Delta t_h = 85/195 = 0.436$. Kern Fig. 17 with $K_c = 0.30$: $F_c \approx 0.41$. (Kern's Eq. 5.28, $F_c = \dfrac{1/K_c + r/(r-1)}{1 + \ln(K_c + 1)/\ln r} - \dfrac{1}{K_c}$ with $r = 0.436$, gives 0.410.)
$$T_c = T_2 + F_c(T_1 - T_2) = 180 + 0.41(170) = 250\,°\mathrm{F}$$
$$t_c = t_1 + F_c(t_2 - t_1) = 95 + 0.41(60) = 120\,°\mathrm{F}$$
The arithmetic means would be 265 and 125°F; for a viscous oil the caloric temperatures, weighted toward the cold end where $U$ is lowest, are the better choice.

3. LMTD:
$$\mathrm{LMTD} = \frac{195 - 85}{\ln(195/85)} = 132.5\,°\mathrm{F}$$

4. Correction factor:
$$R = \frac{T_1 - T_2}{t_2 - t_1} = \frac{170}{60} = 2.83,\qquad S = \frac{t_2 - t_1}{T_1 - t_1} = \frac{60}{255} = 0.235$$
Kern Fig. 18 / Holman Fig. 10-8: $F_T \approx 0.89$ (analytical 0.890).

5. $$\Delta t = F_T\,\mathrm{LMTD} = 0.89(132.5) = 118\,°\mathrm{F}$$
$F_T > 0.75$: a 1-2 exchanger is acceptable.`,
          answer: String.raw`$F_c \approx 0.41$ → $T_c = 250$°F, $t_c = 120$°F; LMTD = 132.5°F; $R = 2.83$, $S = 0.235$, $F_T \approx 0.89$; $\Delta t \approx 118$°F.` },

        { id: "practice-shell-tube-P4b", label: "(b)", marks: "", topic: "shell-tube",
          sub: "When a 1-2 exchanger cannot do the duty: 2-4 exchanger", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 2 pp. 50–52 (Holman Figs. 10-8 and 10-9); file 3 p. 6 (F_T > 0.75)`,
          text: String.raw`A hot stream is cooled from 300 to 150°F while a cold stream is heated from 100 to 200°F. Can a 1-2 exchanger be used? If not, find $F_T$ for a 2-4 exchanger and the true temperature difference.`,
          solution: String.raw`![Two 1-2 shells in series (2-4 arrangement)](fig/practice-shell-tube-P4b.svg)

1. LMTD (counterflow): ends $300 - 200 = 100$°F and $150 - 100 = 50$°F.
$$\mathrm{LMTD} = \frac{100 - 50}{\ln 2} = 72.1\,°\mathrm{F}$$

2. $$R = \frac{300 - 150}{200 - 100} = 1.5,\qquad S = \frac{200 - 100}{300 - 100} = 0.50$$

3. **1-2 exchanger.** On Holman Fig. 10-8 the $R = 1.5$ curve drops vertically at about $S = 0.46$; $S = 0.50$ lies beyond it. Analytically, the 1-2 formula has a real value only for $S < 2/(R + 1 + \sqrt{R^2 + 1}) = 0.465$. So no 1-2 exchanger, however large, can do this duty: there is a temperature cross ($t_2 = 200 > T_2 = 150$) that one shell pass cannot handle.

4. **2-4 exchanger** (Holman Fig. 10-9, two shell passes): $F_T \approx 0.86$ (analytical 0.864, from the 1-2 formula applied to each of two shells in series).
$$\Delta t = 0.86(72.1) = 62\,°\mathrm{F}$$
$F_T > 0.75$, so two shell passes (two shells in series, or one F-shell with a longitudinal baffle) are acceptable. Three shell passes would give $F_T \approx 0.94$.

**Exam tip:** if $F_T$ comes out below 0.75, or the $R$ curve does not reach your $S$, add shell passes; do not just add area.`,
          answer: String.raw`LMTD = 72.1°F, $R = 1.5$, $S = 0.50$: beyond the 1-2 limit ($S_{max} = 0.465$), so a 1-2 is impossible. 2-4: $F_T \approx 0.86$, $\Delta t \approx 62$°F.` }
      ] },

    // ---------------------------------------------------------------- S5
    { id: "practice-shell-tube-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-shell-tube-P5a", label: "(a)", marks: "", topic: "shell-tube",
          sub: "Rating vs design: Kern design steps", type: "theory",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 2 p. 49; file 3 pp. 5–18 (existing exchanger and design steps #1–#14)`,
          text: String.raw`Distinguish between rating an existing shell-and-tube exchanger and designing a new one. List the steps of the Kern trial-and-error design procedure and the acceptance criteria used at each check.`,
          solution: String.raw`**Rating (existing exchanger).** Geometry is known (shell ID, baffle spacing, tube number, OD, BWG, length, pitch, passes). Calculate $h_{io}$, $h_o$, $U_C$, $U_D = Q/(A\,\Delta t)$ and $R_d = (U_C - U_D)/(U_CU_D)$. The exchanger is suitable if $R_{d,calc} \ge R_{d,required}$ **and** $\Delta P_T$, $\Delta P_s$ are within the allowed values.

**Design (new exchanger), Kern steps:**
1. Properties at the caloric (or arithmetic mean) temperatures.
2. Energy balance: $Q$ and any unknown flow or temperature.
3. Assume $U_{o,assm}$ from Kern Table 8.
4. Choose shell and tube passes; LMTD and $F_T$. Require $F_T > 0.75$, otherwise add shell passes.
5. $A = Q/(U_{o,assm}\,\mathrm{LMTD}\,F_T)$.
6. Choose tube OD, BWG and length; $n_t = A/(\pi d_oL)$; check the velocity and $Re = 4\dot m(n_p/n_t)/(\pi d_i\mu) \ge 10^4$, changing $n_p$ (subject to $\Delta P$).
7. Exchanger type, pitch and shell ID from the tube-count table (Kern Table 9).
8. (Not on the slides.)
9. Fluid allocation; baffle type and cut (25% common) and spacing $B = 0.2D_s$ to $D_s$.
10. $h_i$ (Sieder–Tate, Fig. 24) and $h_o$ (Fig. 28), fouling factors (Kern Table 12), $U_{o,cal}$.
11. Accept if $0 < (U_{o,cal} - U_{o,assm})/U_{o,assm} < 30\%$, otherwise recompute $A$ with $U_{o,cal}$ and repeat from step 5. If $h_o$ is low, close the baffles toward $0.2D_s$.
12. Overdesign $= (A - A_{reqd})/A_{reqd} \le 10\%$.
13. Tube side $\Delta P_T = \Delta P_t + \Delta P_r$ within the allowance (if too high, fewer passes or more tubes per pass, back to 6).
14. Shell side $\Delta P_s$ within the allowance (if too high, back to 7: wider baffle spacing or a larger shell).

**Over-surface vs overdesign:** over-surface $= (U_C - U_D)/U_C$ is the extra surface that allows for fouling; overdesign is the extra area installed beyond what the calculated coefficient needs.`,
          answer: String.raw`Rating: fixed geometry → check $R_d$ and $\Delta P$. Design: assume $U$ → $A$ → $n_t$ and shell (Table 9) → check $Re \ge 10^4$, $F_T > 0.75$, $|U_{cal} - U_{assm}| < 30\%$, overdesign ≤ 10%, $\Delta P$ within limits, iterate.` },

        { id: "practice-shell-tube-P5b", label: "(b)", marks: "", topic: "shell-tube",
          sub: "TEMA classes and designations", type: "theory",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 3 pp. 44–51 (TEMA scope, classes, letter codes, spec sheet)`,
          text: String.raw`What is TEMA? State its scope and the three classes. Interpret the designation "Size 31-288, Type BEU" and state the two other letter codes used for (i) a removable channel and cover with a split-ring floating head and (ii) a fixed-tubesheet exchanger with bonnets at both ends.`,
          solution: String.raw`**TEMA** (Tubular Exchanger Manufacturers Association) publishes the mechanical standards for shell-and-tube exchangers; most process-industry exchangers are built to it.

**Scope:** shell ID up to 60 in (1.52 m); nominal diameter (in) × design pressure (psi) up to 60,000; design pressure up to 3000 psi.

**Classes:**
- **R**: severe service of petroleum and related processing (the most demanding).
- **C**: moderate, general commercial service (least stringent).
- **B**: chemical process service.

**Designation:** front head letter + shell letter + rear head letter.

"Size 31-288, Type BEU":
- 31 = nominal shell ID, 31 in; 288 = tube length, 288 in = 24 ft.
- **B** = bonnet (integral cover) front head; **E** = one-pass shell; **U** = U-tube bundle.
A U-tube unit absorbs thermal expansion and is cheap at high pressure, but the tube insides are hard to clean mechanically.

(i) **AES**: A = removable channel and cover, E = one-pass shell, S = floating head with backing device (split ring).
(ii) **BEM**: B = bonnet, E = one-pass shell, M = fixed tubesheet like a "B" stationary head.

**TEMA spec sheet:** the data sheet lists size and type, surface, fluids, flows, temperatures in/out, densities, viscosities, velocities, allowable and calculated $\Delta P$, fouling, heat exchanged, corrected MTD, transfer rate (service and clean), and construction (tubes, shell, baffles, materials, design pressure and temperature).`,
          answer: String.raw`TEMA classes R (refinery), C (general), B (chemical). 31-288 BEU: 31 in shell, 24 ft tubes, bonnet head, one-pass shell, U-tube bundle. AES = removable channel, E shell, split-ring floating head; BEM = fixed tubesheet with bonnets.` }
      ] },

    // ---------------------------------------------------------------- F6
    { id: "practice-shell-tube-P6", q: 6, section: "F", compulsory: true,
      stem: String.raw`60,000 lb/h of a gas oil is to be cooled from 220 to 140°F with cooling water heated from 85 to 115°F. Available is a 1-4 exchanger: 19¼ in ID shell with 128 tubes, 1 in OD, 14 BWG, 16 ft long, on a 1¼ in square pitch, 4 tube passes, and 25% cut segmental baffles spaced 10 in apart. Pressure drops of 10 psi are allowed on both streams, and a combined dirt factor of 0.003 h·ft²·°F/Btu is required.

Tube data: ID 0.834 in, flow area 0.546 in² per tube, outside surface 0.2618 ft²/ft.

| Property | Gas oil (at 180°F) | Water (at 100°F) |
|---|---|---|
| $c$, Btu/lb·°F | 0.52 | 1.0 |
| $\mu$, cP | 1.5 | 0.68 |
| $k$, Btu/h·ft·°F | 0.077 | 0.363 |
| $s$ | 0.82 | 1.0 |
| $\mu$ at the tube wall (≈ 110°F), cP | 2.6 | — (take $\phi = 1$) |

Use the arithmetic mean temperatures as caloric temperatures.`,
      parts: [
        { id: "practice-shell-tube-P6a", label: "(a)", marks: "4", topic: "shell-tube",
          sub: "Which fluid in the tubes?", type: "theory",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Asked in finals like 2015-16 Q1(b), 2018-19 Q1(a)`,
          text: String.raw`Which fluid should flow through the tubes? Give reasons.`,
          solution: String.raw`![1-4 exchanger: water in the tubes, gas oil in the shell](fig/practice-shell-tube-P6.svg)

**Cooling water in the tubes, gas oil in the shell.**
- Water is the fouling, scale-forming stream; tube insides are easy to clean mechanically, the shell side is not.
- Water is the corrosive stream: only the tubes (and channels) need corrosion-resistant material, not the shell.
- The more viscous oil gains more from the shell side, where the baffled cross-flow gives turbulence at lower Re (Kern Fig. 28).
- The larger flow (83,200 lb/h water) in the tubes gives a good tube velocity with 4 passes.`,
          answer: String.raw`Water in the tubes (fouling, corrosive, cleanable, larger flow); viscous gas oil in the shell.` },

        { id: "practice-shell-tube-P6b", label: "(b)", marks: "7", topic: "shell-tube",
          sub: "Heat balance, temperature profile, LMTD and F_T", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Kern Ex. 7.3; asked in finals like 2020-21 Q1(a), 2023-24 Q2(a)`,
          text: String.raw`Make the heat balance, sketch the temperature profile and find the true temperature difference.`,
          solution: String.raw`### 1. Heat balance
$$Q = WC(T_1 - T_2) = 60{,}000(0.52)(220 - 140) = 2.496\times10^6\ \mathrm{Btu/h}$$
$$w = \frac{Q}{c(t_2 - t_1)} = \frac{2.496\times10^6}{1.0(30)} = 83{,}200\ \mathrm{lb/h\ water}$$

### 2. Profile (sketch)
Temperature vs. length. The oil line falls from 220°F at the shell inlet to 140°F at the outlet. The water rises from 85 to 115°F in four passes, drawn as a zig-zag of four rising segments below the oil line. Hot-end difference $220 - 115 = 105$°F, cold-end difference $140 - 85 = 55$°F; no temperature cross ($T_2 = 140 > t_2 = 115$).

![Temperature profile: gas oil in one shell pass, water zig-zagging through four tube passes](fig/practice-shell-tube-P6b-sol.svg)

### 3. LMTD and $F_T$
$$\mathrm{LMTD} = \frac{105 - 55}{\ln(105/55)} = 77.3\,°\mathrm{F}$$
$$R = \frac{80}{30} = 2.67,\qquad S = \frac{30}{220 - 85} = 0.222$$
Kern Fig. 18 (1-2 curves, valid for 1-4): $F_T = 0.93$ (analytical 0.927).
$$\Delta t = 0.927(77.3) = 71.7\,°\mathrm{F}$$`,
          answer: String.raw`$Q = 2.50\times10^6$ Btu/h, water 83,200 lb/h; LMTD = 77.3°F, $R = 2.67$, $S = 0.222$, $F_T = 0.93$, $\Delta t = 71.7$°F.` },

        { id: "practice-shell-tube-P6c", label: "(c)", marks: "14", topic: "shell-tube",
          sub: "Kern rating: h_io (Fig. 24) and h_o (Fig. 28) with φ", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Kern Ex. 7.3; asked in finals like 2017-18 Q1(b), 2020-21 Q1(b)`,
          text: String.raw`Determine the tube-side and shell-side film coefficients.`,
          solution: String.raw`**Assumptions:** properties at the arithmetic means (given); water $\phi_t = 1$; chart values read from Kern Fig. 24 (tube side) and Fig. 28 (shell side, curve fit $j_H \approx 0.36Re^{0.55}$).

### Tube side: water
1. $$a_t = \frac{N_ta'_t}{144n} = \frac{128(0.546)}{144(4)} = 0.1213\ \mathrm{ft^2}$$
2. $$G_t = \frac{83{,}200}{0.1213} = 685{,}700\ \mathrm{lb/h\,ft^2},\qquad V = \frac{G_t}{3600(62.5)} = 3.05\ \mathrm{ft/s}$$
3. $D = 0.834/12 = 0.0695$ ft; $\mu = 0.68(2.42) = 1.65$ lb/ft·h.
$$Re_t = \frac{0.0695(685{,}700)}{1.65} = 28{,}960,\qquad L/D = 230$$
4. Kern Fig. 24: $j_H \approx 92$ (the Sieder–Tate line $0.027Re^{0.8}$ gives 100; the chart reads a little lower).
5. $(c\mu/k)^{1/3} = (1.0\times1.65/0.363)^{1/3} = 1.655$
$$h_i = j_H\frac{k}{D}\left(\frac{c\mu}{k}\right)^{1/3} = 92\times\frac{0.363}{0.0695}\times1.655 = 793\ \mathrm{Btu/h\,ft^2\,°F}$$
$$h_{io} = h_i\frac{ID}{OD} = 793(0.834) = 661\ \mathrm{Btu/h\,ft^2\,°F}$$

### Shell side: gas oil
6. $C' = 1.25 - 1.0 = 0.25$ in.
$$a_s = \frac{19.25(0.25)(10)}{144(1.25)} = 0.2674\ \mathrm{ft^2},\qquad G_s = \frac{60{,}000}{0.2674} = 224{,}400\ \mathrm{lb/h\,ft^2}$$
7. $D_e = 0.99/12 = 0.0825$ ft; $\mu = 1.5(2.42) = 3.63$ lb/ft·h.
$$Re_s = \frac{0.0825(224{,}400)}{3.63} = 5100$$
8. Kern Fig. 28: $j_H \approx 39$.
9. $(c\mu/k)^{1/3} = (0.52\times3.63/0.077)^{1/3} = 2.905$
$$\frac{h_o}{\phi_s} = 39.4\times\frac{0.077}{0.0825}\times2.905 = 106.8\ \mathrm{Btu/h\,ft^2\,°F}$$
10. Wall temperature check:
$$t_w = t_c + \frac{h_o/\phi_s}{h_{io} + h_o/\phi_s}(T_c - t_c) = 100 + \frac{106.8}{661 + 106.8}(180 - 100) = 111\,°\mathrm{F}$$
consistent with the given wall viscosity. $\phi_s = (1.5/2.6)^{0.14} = 0.926$.
$$h_o = 106.8(0.926) = 98.9\ \mathrm{Btu/h\,ft^2\,°F}$$

**Why it matters:** the oil film ($h_o \approx 99$) is about seven times weaker than the water film and controls $U$.`,
          answer: String.raw`Tube (water): $a_t = 0.1213$ ft², $G_t = 6.86\times10^5$, $V = 3.05$ ft/s, $Re_t = 28{,}960$, $j_H \approx 92$, $h_i \approx 793$, $h_{io} \approx 661$. Shell (oil): $a_s = 0.267$ ft², $G_s = 2.24\times10^5$, $Re_s = 5100$, $j_H \approx 39$, $t_w \approx 111$°F, $\phi_s = 0.926$, $h_o \approx 99$ Btu/h·ft²·°F.` },

        { id: "practice-shell-tube-P6d", label: "(d)", marks: "6", topic: "shell-tube",
          sub: "U_C, U_D and dirt factor", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Kern Ex. 7.3; asked in finals like 2017-18 Q1(c), 2023-24 Q2(c)`,
          text: String.raw`Calculate the clean and design overall coefficients and the dirt factor.`,
          solution: String.raw`1. $$U_C = \frac{h_{io}h_o}{h_{io} + h_o} = \frac{661(98.9)}{661 + 98.9} = 86.0\ \mathrm{Btu/h\,ft^2\,°F}$$
2. $$A = N_tLa'' = 128(16)(0.2618) = 536\ \mathrm{ft^2}$$
3. $$U_D = \frac{Q}{A\,\Delta t} = \frac{2.496\times10^6}{536(71.7)} = 64.9\ \mathrm{Btu/h\,ft^2\,°F}$$
4. $$R_d = \frac{U_C - U_D}{U_CU_D} = \frac{86.0 - 64.9}{86.0(64.9)} = 0.0038\ \mathrm{h\,ft^2\,°F/Btu}$$
0.0038 > 0.003 required ✓.

**Exam tip:** $R_d$ is sensitive to the chart readings: using the fit $j_H = 100$ on the tube side changes $R_d$ only slightly (0.0039), because the water film is not controlling; a 10% change in $h_o$ moves $R_d$ by about 0.0015.`,
          answer: String.raw`$U_C = 86.0$, $A = 536$ ft², $U_D = 64.9$ Btu/h·ft²·°F, $R_d = 0.0038$ (> 0.003).` },

        { id: "practice-shell-tube-P6e", label: "(e)", marks: "8", topic: "shell-tube",
          sub: "Pressure drops and suitability", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Kern Ex. 7.3; asked in finals like 2017-18 Q1(d), 2018-19 Q1(d)`,
          text: String.raw`Calculate the tube-side and shell-side pressure drops and state whether the exchanger is suitable.`,
          solution: String.raw`### Tube side (water, $s = 1.0$, $n = 4$, $L = 16$ ft)
1. $Re_t = 28{,}960$: Kern Fig. 26, $f \approx 0.000195$ ft²/in² (fit $4[0.0035 + 0.264Re^{-0.42}]/144$).
2. $$\Delta P_t = \frac{fG_t^2Ln}{5.22\times10^{10}Ds\phi_t} = \frac{0.000195(685{,}700)^2(16)(4)}{5.22\times10^{10}(0.0695)(1.0)(1.0)} = 1.6\ \mathrm{psi}$$
3. Return loss: $V = 3.05$ ft/s, $V^2/2g'\times(62.5/144) = 0.063$ psi (Fig. 27).
$$\Delta P_r = \frac{4n}{s}\frac{V^2}{2g'} = \frac{16}{1.0}(0.063) = 1.0\ \mathrm{psi}$$
4. $\Delta P_T = 1.6 + 1.0 = 2.6$ psi < 10 ✓

### Shell side (gas oil, $s = 0.82$)
5. $Re_s = 5100$: Kern Fig. 29, $f \approx 0.0024$ ft²/in².
6. $N + 1 = 12L/B = 12(16)/10 = 19.2$; $D_s = 19.25/12 = 1.604$ ft.
7. $$\Delta P_s = \frac{fG_s^2D_s(N+1)}{5.22\times10^{10}D_es\phi_s} = \frac{0.0024(224{,}400)^2(1.604)(19.2)}{5.22\times10^{10}(0.0825)(0.82)(0.926)} = 1.2\ \mathrm{psi} < 10\ ✓$$

### Verdict
$R_d = 0.0038 \ge 0.003$, $\Delta P_T = 2.6$ psi, $\Delta P_s = 1.2$ psi: **the exchanger is suitable.** Both pressure drops are far below the allowance, so closer baffles (higher $h_o$) could be used if more margin on $R_d$ were wanted.`,
          answer: String.raw`$\Delta P_T = 1.6 + 1.0 = 2.6$ psi; $\Delta P_s \approx 1.2$ psi; $R_d = 0.0038 > 0.003$ → suitable.` },

        { id: "practice-shell-tube-P6f", label: "(f)", marks: "6", topic: "shell-tube",
          sub: "TEMA specification sheet", type: "theory",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Asked in finals like 2018-19 Q1(e), 2022-23 Q5(d)`,
          text: String.raw`Fill in the main entries of a TEMA specification sheet for this exchanger.`,
          solution: String.raw`| Item | Shell side | Tube side |
|---|---|---|
| Size and type | 19¼–192, 1-4, fixed tubesheet (BEM) | |
| Surface per unit | 536 ft² | |
| Fluid | Gas oil | Cooling water |
| Total flow, lb/h | 60,000 | 83,200 |
| Temperature in/out, °F | 220 / 140 | 85 / 115 |
| Specific gravity | 0.82 | 1.0 |
| Viscosity, cP | 1.5 | 0.68 |
| Velocity | — | 3.05 ft/s |
| Passes | 1 | 4 |
| ΔP allowed / calculated, psi | 10 / 1.2 | 10 / 2.6 |
| Film coefficient, Btu/h·ft²·°F | 98.9 | 661 ($h_{io}$) |
| Fouling | 0.003 required (combined); 0.0038 available | |
| Heat exchanged | 2,496,000 Btu/h; corrected MTD 71.7°F | |
| Transfer rate, service / clean | 64.9 / 86.0 Btu/h·ft²·°F | |
| Tubes | 128, 1 in OD, 14 BWG, 16 ft, 1¼ in square pitch | |
| Shell / baffles | 19¼ in ID; segmental, 25% cut, 10 in spacing | |`,
          answer: String.raw`19¼–192 1-4 exchanger, 536 ft²; $Q = 2.50\times10^6$ Btu/h, MTD 71.7°F; $h_o = 98.9$, $h_{io} = 661$; $U_C = 86.0$, $U_D = 64.9$; $R_d$ 0.0038; ΔP 1.2 / 2.6 psi.` }
      ] },

    // ---------------------------------------------------------------- F7
    { id: "practice-shell-tube-P7", q: 7, section: "F", compulsory: true,
      stem: String.raw`70,000 lb/h of a gas oil is to be cooled from 300 to 200°F by 105,000 lb/h of crude oil entering at 100°F. An existing 1-6 exchanger is available: 23¼ in ID shell, 302 tubes of ¾ in OD, 16 BWG (ID 0.620 in, flow area 0.302 in², 0.1963 ft²/ft), 16 ft long on a 1 in square pitch, 6 tube passes, 25% cut baffles at 5 in spacing. Allowable pressure drop 10 psi on each stream; required dirt factor 0.004 h·ft²·°F/Btu. Take $\phi = 1$ for both streams and use the arithmetic mean temperatures.

| Property | Gas oil | Crude |
|---|---|---|
| $c$, Btu/lb·°F | 0.56 | 0.48 |
| $\mu$, cP | 1.2 | 1.5 |
| $k$, Btu/h·ft·°F | 0.075 | 0.077 |
| $s$ | 0.80 | 0.85 |`,
      parts: [
        { id: "practice-shell-tube-P7a", label: "(a)", marks: "8", topic: "shell-tube",
          sub: "Heat balance, outlet temperature, LMTD and F_T (1-6)", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Kern Ex. 7.3; asked in finals like 2020-21 Q1(a)`,
          text: String.raw`Find the crude outlet temperature and the true temperature difference. Which stream goes in the tubes?`,
          solution: String.raw`![1-6 exchanger: crude in the tubes, gas oil in the shell](fig/practice-shell-tube-P7.svg)

1. Heat balance:
$$Q = WC(T_1 - T_2) = 70{,}000(0.56)(100) = 3.92\times10^6\ \mathrm{Btu/h}$$
$$t_2 = t_1 + \frac{Q}{wc} = 100 + \frac{3.92\times10^6}{105{,}000(0.48)} = 177.8\,°\mathrm{F}$$

2. LMTD: hot end $300 - 177.8 = 122.2$°F; cold end $200 - 100 = 100$°F.
$$\mathrm{LMTD} = \frac{122.2 - 100}{\ln(122.2/100)} = 110.7\,°\mathrm{F}$$

3. $$R = \frac{100}{77.8} = 1.29,\qquad S = \frac{77.8}{300 - 100} = 0.389$$
Kern Fig. 18 (1-2 curves hold for 1-6): $F_T \approx 0.88$ (analytical 0.883).
$$\Delta t = 0.883(110.7) = 97.8\,°\mathrm{F}$$

4. **Allocation:** crude in the tubes (larger stream, dirtier, cleanable side); gas oil in the shell.`,
          answer: String.raw`$Q = 3.92\times10^6$ Btu/h, crude leaves at 177.8°F; LMTD = 110.7°F, $R = 1.29$, $S = 0.389$, $F_T \approx 0.88$, $\Delta t = 97.8$°F; crude in the tubes.` },

        { id: "practice-shell-tube-P7b", label: "(b)", marks: "12", topic: "shell-tube",
          sub: "h_io and h_o for a 1-6 exchanger with ¾ in tubes", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Kern Ex. 7.3; asked in finals like 2020-21 Q1(b)`,
          text: String.raw`Determine $h_{io}$ and $h_o$.`,
          solution: String.raw`### Tube side: crude
1. $$a_t = \frac{302(0.302)}{144(6)} = 0.1056\ \mathrm{ft^2},\qquad G_t = \frac{105{,}000}{0.1056} = 994{,}700\ \mathrm{lb/h\,ft^2}$$
$V = G_t/(3600\times62.5\times0.85) = 5.2$ ft/s.
2. $D = 0.620/12 = 0.0517$ ft; $\mu = 1.5(2.42) = 3.63$ lb/ft·h.
$$Re_t = \frac{0.0517(994{,}700)}{3.63} = 14{,}160,\qquad L/D = 310$$
3. Kern Fig. 24: $j_H \approx 50$ (Sieder–Tate line gives 56; the chart is lower near $10^4$).
4. $(c\mu/k)^{1/3} = (0.48\times3.63/0.077)^{1/3} = 2.83$
$$h_i = 50\times\frac{0.077}{0.0517}\times2.83 = 211,\qquad h_{io} = 211\times\frac{0.620}{0.75} = 174\ \mathrm{Btu/h\,ft^2\,°F}$$

### Shell side: gas oil
5. $C' = 1.0 - 0.75 = 0.25$ in.
$$a_s = \frac{23.25(0.25)(5)}{144(1.0)} = 0.2018\ \mathrm{ft^2},\qquad G_s = \frac{70{,}000}{0.2018} = 346{,}800\ \mathrm{lb/h\,ft^2}$$
6. $D_e = 0.95/12 = 0.0792$ ft (¾ in on 1 in square); $\mu = 1.2(2.42) = 2.90$ lb/ft·h.
$$Re_s = \frac{0.0792(346{,}800)}{2.90} = 9460$$
7. Kern Fig. 28: $j_H \approx 55$. $(c\mu/k)^{1/3} = (0.56\times2.90/0.075)^{1/3} = 2.79$
$$h_o = 55.3\times\frac{0.075}{0.0792}\times2.79 = 146\ \mathrm{Btu/h\,ft^2\,°F}$$`,
          answer: String.raw`Tube: $G_t = 9.95\times10^5$, $V = 5.2$ ft/s, $Re_t = 14{,}160$, $j_H \approx 50$, $h_i \approx 211$, $h_{io} \approx 174$; shell: $G_s = 3.47\times10^5$, $Re_s = 9460$, $j_H \approx 55$, $h_o \approx 146$ Btu/h·ft²·°F.` },

        { id: "practice-shell-tube-P7c", label: "(c)", marks: "5", topic: "shell-tube",
          sub: "U_C, U_D and R_d", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Kern Ex. 7.3`,
          text: String.raw`Find $U_C$, $U_D$ and the dirt factor.`,
          solution: String.raw`1. $$U_C = \frac{174(146)}{174 + 146} = 79.4\ \mathrm{Btu/h\,ft^2\,°F}$$
2. $$A = 302(16)(0.1963) = 948.5\ \mathrm{ft^2},\qquad U_D = \frac{3.92\times10^6}{948.5(97.8)} = 42.3\ \mathrm{Btu/h\,ft^2\,°F}$$
3. $$R_d = \frac{79.4 - 42.3}{79.4(42.3)} = 0.011\ \mathrm{h\,ft^2\,°F/Btu}$$
far above the 0.004 required: thermally the exchanger is large for this duty.`,
          answer: String.raw`$U_C = 79.4$, $A = 948.5$ ft², $U_D = 42.3$, $R_d \approx 0.011$ (≫ 0.004).` },

        { id: "practice-shell-tube-P7d", label: "(d)", marks: "8", topic: "shell-tube",
          sub: "Pressure drops: an exchanger that fails on ΔP", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Kern ch. 7 problems; asked in finals like 2020-21 Q1(d)`,
          text: String.raw`Calculate the pressure drops and decide whether the exchanger is suitable.`,
          solution: String.raw`### Tube side (crude, $n = 6$)
1. $Re_t = 14{,}160$: Kern Fig. 26, $f \approx 0.00026$ ft²/in².
2. $$\Delta P_t = \frac{0.00026(994{,}700)^2(16)(6)}{5.22\times10^{10}(0.0517)(0.85)(1)} = 10.8\ \mathrm{psi}$$
3. Return loss: $V = G_t/(3600\times62.5) = 4.42$ ft/s, $V^2/2g'\times62.5/144 = 0.132$ psi (Fig. 27).
$$\Delta P_r = \frac{4(6)}{0.85}(0.132) = 3.7\ \mathrm{psi}$$
4. $\Delta P_T = 10.8 + 3.7 = 14.5$ psi > 10 ✗

### Shell side (gas oil)
5. $Re_s = 9460$: Fig. 29, $f \approx 0.00217$ ft²/in²; $N + 1 = 12(16)/5 = 38.4$; $D_s = 23.25/12 = 1.94$ ft.
$$\Delta P_s = \frac{0.00217(346{,}800)^2(1.94)(38.4)}{5.22\times10^{10}(0.0792)(0.80)(1)} = 5.9\ \mathrm{psi} < 10\ ✓$$

### Verdict
$R_d$ is ample, but the tube-side pressure drop (14.5 psi) exceeds the allowed 10 psi: **the exchanger is not suitable as arranged.** Six passes push the crude to 5.2 ft/s; the surplus $R_d$ shows the velocity can be lowered.`,
          answer: String.raw`$\Delta P_T = 10.8 + 3.7 = 14.5$ psi (> 10) ✗; $\Delta P_s \approx 5.9$ psi ✓; not suitable because of the tube-side ΔP.` },

        { id: "practice-shell-tube-P7e", label: "(e)", marks: "7", topic: "shell-tube",
          sub: "Re-arranging tube passes to meet ΔP", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Kern design step #14 (slides HX Part 1, file 3 p. 18): too high tube ΔP → fewer passes`,
          text: String.raw`The same shell can take a 4-pass bundle of 308 tubes (same tubes). Check whether this arrangement is suitable.`,
          solution: String.raw`$F_T$ and $\Delta t$ are unchanged (1-2 curves); the shell side is unchanged ($h_o = 146$, $\Delta P_s = 5.9$ psi).

1. Tube side:
$$a_t = \frac{308(0.302)}{144(4)} = 0.1615\ \mathrm{ft^2},\quad G_t = 650{,}200,\quad Re_t = \frac{0.0517(650{,}200)}{3.63} = 9250$$
2. Kern Fig. 24 (transition, $L/D = 310$): $j_H \approx 35$.
$$h_i = 35\times\frac{0.077}{0.0517}\times2.83 = 146,\qquad h_{io} = 146(0.827) = 120\ \mathrm{Btu/h\,ft^2\,°F}$$
3. $$U_C = \frac{120(146)}{120 + 146} = 66.0;\quad A = 308(16)(0.1963) = 967\ \mathrm{ft^2};\quad U_D = \frac{3.92\times10^6}{967(97.8)} = 41.4$$
$$R_d = \frac{66.0 - 41.4}{66.0(41.4)} = 0.0090 > 0.004\ ✓$$
4. Pressure drop: $f \approx 0.00028$ ft²/in² at $Re = 9250$;
$$\Delta P_t = \frac{0.00028(650{,}200)^2(16)(4)}{5.22\times10^{10}(0.0517)(0.85)} = 3.3\ \mathrm{psi}$$
$V = 650{,}200/(3600\times62.5) = 2.89$ ft/s, $V^2/2g' = 0.056$ psi, $\Delta P_r = (16/0.85)(0.056) = 1.1$ psi.
$\Delta P_T = 3.3 + 1.1 = 4.4$ psi < 10 ✓

**Conclusion:** with 4 passes the exchanger is suitable ($R_d = 0.009$, $\Delta P_T = 4.4$ psi, $\Delta P_s = 5.9$ psi). $\Delta P_T$ falls roughly as $n^3$ (both $G_t$ and path length scale with $n$), while $h_{io}$ falls only as $n^{0.8}$.`,
          answer: String.raw`4 passes: $Re_t = 9250$, $h_{io} \approx 120$, $U_C = 66.0$, $U_D = 41.4$, $R_d \approx 0.009$; $\Delta P_T = 3.3 + 1.1 = 4.4$ psi → suitable.` }
      ] },

    // ---------------------------------------------------------------- F8
    { id: "practice-shell-tube-P8", q: 8, section: "F", compulsory: true,
      stem: String.raw`Design a shell-and-tube exchanger to cool 100,000 lb/h of naphtha from 200 to 130°F with toluene heated from 80 to 120°F. Allowable pressure drop 10 psi on each side; fouling factors 0.001 h·ft²·°F/Btu for each stream. Use ¾ in OD, 16 BWG steel tubes ($d_i = 0.620$ in, flow area 0.302 in², 0.1963 ft²/ft, $k_w = 26$ Btu/h·ft·°F), 16 ft long, on a 1 in square pitch, one shell pass, 25% cut baffles, $\phi = 1$.

| Property (at the mean temperature) | Naphtha | Toluene |
|---|---|---|
| $c$, Btu/lb·°F | 0.53 | 0.42 |
| $\mu$, cP | 0.45 | 0.50 |
| $k$, Btu/h·ft·°F | 0.075 | 0.085 |
| $s$ | 0.72 | 0.86 |

Tube counts, ¾ in OD on 1 in square pitch (Kern Table 9):

| Shell ID, in | 17¼ | 19¼ | 21¼ | 23¼ | 25 | 27 | 29 |
|---|---|---|---|---|---|---|---|
| 2-P | 166 | 220 | 270 | 324 | 394 | 460 | 526 |
| 4-P | 158 | 204 | 246 | 308 | 370 | 432 | 480 |`,
      parts: [
        { id: "practice-shell-tube-P8a", label: "(a)", marks: "10", topic: "shell-tube",
          sub: "Design: duty, F_T, assumed U, area and first layout", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of the Heat Exchanger Part 2 design example; asked in finals like 2021-22 Q1`,
          text: String.raw`Find the toluene flow, LMTD and $F_T$ for a 1-2 exchanger, the area for an assumed $U_D$ from Kern Table 8, and a first tube count and shell (2 passes). Check the tube-side Reynolds number.`,
          solution: String.raw`![Naphtha in the shell, toluene in the tubes](fig/practice-shell-tube-P8.svg)

### 1. Heat balance
$$Q = WC(T_1 - T_2) = 100{,}000(0.53)(70) = 3.71\times10^6\ \mathrm{Btu/h}$$
$$w = \frac{3.71\times10^6}{0.42(40)} = 220{,}800\ \mathrm{lb/h\ toluene}$$

### 2. LMTD and $F_T$
Ends: $200 - 120 = 80$°F and $130 - 80 = 50$°F.
$$\mathrm{LMTD} = \frac{80 - 50}{\ln(80/50)} = 63.8\,°\mathrm{F}$$
$R = 70/40 = 1.75$, $S = 40/120 = 0.333$; Fig. 10-8: $F_T \approx 0.87$ (analytical 0.871) > 0.75 ✓.
$$\Delta t = 0.871(63.8) = 55.6\,°\mathrm{F}$$

### 3. Assumed U and area
Kern Table 8, light organics–light organics: 40–75. Take $U_{assm} = 50$.
$$A = \frac{Q}{U\,\Delta t} = \frac{3.71\times10^6}{50(55.6)} = 1335\ \mathrm{ft^2}$$

### 4. Tubes and shell
$$n_t = \frac{A}{a''L} = \frac{1335}{0.1963(16)} = 425$$
Table 9, 2-P: the next standard count is 460 tubes in a **27 in shell**. Toluene (larger stream) in the tubes, naphtha in the shell.

### 5. Reynolds check
$$Re = \frac{4w(n_p/n_t)}{\pi d_i\mu} = \frac{4(220{,}800)(2/460)}{\pi(0.620/12)(0.50\times2.42)} = 19{,}550 > 10^4\ ✓$$
$V = 2.4$ ft/s (0.72 m/s), on the low side but acceptable for a first trial.`,
          answer: String.raw`$Q = 3.71\times10^6$ Btu/h, toluene 220,800 lb/h; LMTD = 63.8°F, $F_T = 0.87$, $\Delta t = 55.6$°F; $U = 50$ → $A = 1335$ ft², 425 tubes → 27 in shell, 460 tubes, 2-P; $Re_t = 19{,}550$.` },

        { id: "practice-shell-tube-P8b", label: "(b)", marks: "12", topic: "shell-tube",
          sub: "Design: first-trial h_i, h_o, U_o,cal and overdesign", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of the Heat Exchanger Part 2 design example (Eq. 1.6, steps #10–#12)`,
          text: String.raw`For the first layout with baffles at 11 in ($\approx 0.4D_s$), find $h_i$, $h_o$, $U_{o,cal}$ and the overdesign. Is the first trial acceptable?`,
          solution: String.raw`### Tube side (toluene)
$a_t = 460(0.302)/(144\times2) = 0.482$ ft²; $G_t = 220{,}800/0.482 = 457{,}800$; $Re_t = 19{,}550$.
Kern Fig. 24: $j_H \approx 66$ (Sieder–Tate fit 73). $(c\mu/k)^{1/3} = (0.42\times1.21/0.085)^{1/3} = 1.815$.
$$h_i = 66\times\frac{0.085}{0.0517}\times1.815 = 196\ \mathrm{Btu/h\,ft^2\,°F},\qquad h_{io} = 196(0.620/0.75) = 162$$

### Shell side (naphtha)
$a_s = 27(0.25)(11)/(144\times1.0) = 0.516$ ft²; $G_s = 100{,}000/0.516 = 193{,}900$; $D_e = 0.95/12 = 0.0792$ ft;
$$Re_s = \frac{0.0792(193{,}900)}{0.45\times2.42} = 14{,}100\quad\Rightarrow\quad j_H \approx 69\ \text{(Fig. 28)}$$
$(c\mu/k)^{1/3} = (0.53\times1.089/0.075)^{1/3} = 1.974$
$$h_o = 69\times\frac{0.075}{0.0792}\times1.974 = 129\ \mathrm{Btu/h\,ft^2\,°F}$$

### Calculated U ($A_o/A_i = d_o/d_i = 1.210$)
$$\frac{1}{U_{o,cal}} = \frac{1}{129} + 0.001 + 1.210\frac{(0.75 - 0.62)/12}{2(26)} + \frac{1.210}{196} + 1.210(0.001) = 0.01638$$
$$U_{o,cal} = 61.0\ \mathrm{Btu/h\,ft^2\,°F},\qquad \frac{61.0 - 50}{50} = 22\% < 30\%\ ✓$$

### Overdesign
$A = 460(16)(0.1963) = 1445$ ft²; $A_{reqd} = Q/(U_{o,cal}\Delta t) = 3.71\times10^6/(61.0\times55.6) = 1094$ ft².
$$\text{Overdesign} = \frac{1445 - 1094}{1094} = 32\% > 10\%\ ✗$$

**Verdict:** the U check passes, but the unit is 32% too big. Low velocities on both sides (2.4 ft/s tube side) waste surface. Make the exchanger smaller: fewer tubes (higher $G_t$) and closer baffles.`,
          answer: String.raw`$h_i \approx 196$ ($h_{io}$ 162), $h_o \approx 129$; $U_{o,cal} = 61.0$ (+22%, OK) but overdesign = 32% (> 10%): reject and shrink the exchanger.` },

        { id: "practice-shell-tube-P8c", label: "(c)", marks: "13", topic: "shell-tube",
          sub: "Design: second trial, final check and pressure drops", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of the Heat Exchanger Part 2 design example (iteration 2, steps #11–#14)`,
          text: String.raw`Repeat with $U_{assm} = 80$ Btu/h·ft²·°F and baffles at 9 in. Show that the design converges, find the over-surface and overdesign, and check both pressure drops.`,
          solution: String.raw`### 1. New area and layout
$$A = \frac{3.71\times10^6}{80(55.6)} = 834\ \mathrm{ft^2},\qquad n_t = \frac{834}{0.1963(16)} = 266$$
Table 9, 2-P: **270 tubes in a 21¼ in shell**; $B = 9$ in ($0.42D_s$).

### 2. Tube side
$a_t = 270(0.302)/288 = 0.2831$ ft²; $G_t = 780{,}000$ lb/h·ft²; $V = 4.0$ ft/s (1.23 m/s).
$$Re_t = \frac{0.0517(780{,}000)}{1.21} = 33{,}300\quad\Rightarrow\quad j_H \approx 103\ \text{(fit 112)}$$
$$h_i = 103\times\frac{0.085}{0.0517}\times1.815 = 308,\qquad h_{io} = 308(0.827) = 255\ \mathrm{Btu/h\,ft^2\,°F}$$

### 3. Shell side
$a_s = 21.25(0.25)(9)/144 = 0.332$ ft²; $G_s = 301{,}200$;
$$Re_s = \frac{0.0792(301{,}200)}{1.089} = 21{,}900\quad\Rightarrow\quad j_H \approx 88$$
$$h_o = 88\times\frac{0.075}{0.0792}\times1.974 = 164\ \mathrm{Btu/h\,ft^2\,°F}$$

### 4. Coefficients
$$\frac{1}{U_{o,cal}} = \frac{1}{164} + 0.001 + 0.00025 + \frac{1.210}{308} + 0.00121 = 0.01247\ \Rightarrow\ U_{o,cal} = 80.2$$
Deviation from the assumed 80: +0.2% ✓ (converged).
$$U_C = \frac{255(164)}{255 + 164} = 99.9,\qquad \text{over-surface} = \frac{99.9 - 80.2}{99.9} = 20\%$$

### 5. Overdesign
$A = 270(16)(0.1963) = 848$ ft²; $A_{reqd} = 3.71\times10^6/(80.2\times55.6) = 833$ ft².
$$\text{Overdesign} = \frac{848 - 833}{833} = 1.8\%\ ✓$$

### 6. Pressure drops
Tube: $f \approx 0.00019$ ft²/in² at $Re = 33{,}300$;
$$\Delta P_t = \frac{0.00019(780{,}000)^2(16)(2)}{5.22\times10^{10}(0.0517)(0.86)} = 1.6\ \mathrm{psi}$$
$V^2/2g' = 0.081$ psi at $G_t = 780{,}000$; $\Delta P_r = (4\times2/0.86)(0.081) = 0.75$ psi; $\Delta P_T = 2.3$ psi ✓.
Shell: $f \approx 0.00185$ ft²/in²; $N + 1 = 12(16)/9 = 21.3$; $D_s = 1.771$ ft;
$$\Delta P_s = \frac{0.00185(301{,}200)^2(1.771)(21.3)}{5.22\times10^{10}(0.0792)(0.72)} = 2.1\ \mathrm{psi}\ ✓$$

**Final design:** 1-2 fixed-tubesheet exchanger, 21¼ in shell, 270 tubes ¾ in 16 BWG × 16 ft on 1 in square pitch, toluene in the tubes, 25% cut baffles at 9 in; $A = 848$ ft², $U_{o,cal} = 80$, overdesign 1.8%, $\Delta P_T = 2.3$ psi, $\Delta P_s = 2.1$ psi. (There is room on $\Delta P$ for 4 passes, but then $U$ rises again and the area would be oversized.)`,
          answer: String.raw`$U = 80$ → 834 ft² → 21¼ in shell, 270 tubes, 2-P, B = 9 in: $h_{io} \approx 255$, $h_o \approx 164$, $U_{o,cal} = 80.2$ (converged), $U_C = 99.9$, over-surface 20%, overdesign 1.8%; $\Delta P_T = 2.3$ psi, $\Delta P_s = 2.1$ psi.` }
      ] },

    // ---------------------------------------------------------------- F9
    { id: "practice-shell-tube-P9", q: 9, section: "F", compulsory: false,
      stem: String.raw`In an existing 1-2 exchanger the present performance is: shell side $h_o = 160$ Btu/h·ft²·°F at $Re_s = 2.0\times10^4$ with $\Delta P_s = 2.0$ psi; tube side $h_{io} = 210$ Btu/h·ft²·°F at $Re_t = 2.5\times10^4$ with $\Delta P_T = 3.0$ psi (2.4 psi friction + 0.6 psi return loss). The baffle spacing is 12 in and 10 psi is allowed on each side. Use $j_H \propto Re^{0.55}$ (shell, Fig. 28), $j_H \propto Re^{0.8}$ (tube, Fig. 24), and the friction fits $f_s \propto Re^{-0.19}$ and $f_t \propto 0.0035 + 0.264Re^{-0.42}$.`,
      parts: [
        { id: "practice-shell-tube-P9a", label: "(a)", marks: "7", topic: "shell-tube",
          sub: "Effect of baffle spacing on h_o and ΔP_s", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Kern design step #11 (closer baffles raise h_o, subject to ΔP); style of Kern ch. 7 problems`,
          text: String.raw`Estimate $h_o$, $\Delta P_s$ and $U_C$ if the baffle spacing is halved to 6 in.`,
          solution: String.raw`![Baffle spacing 12 in versus 6 in](fig/practice-shell-tube-P9.svg)

**Scaling:** $a_s \propto B$, so halving $B$ doubles $G_s$ and $Re_s$. Properties unchanged.

1. Film coefficient: $h_o \propto j_H \propto Re_s^{0.55}$:
$$h_o' = 160(2)^{0.55} = 234\ \mathrm{Btu/h\,ft^2\,°F}$$
2. Pressure drop: $\Delta P_s \propto fG_s^2(N+1)$ with $N + 1 = 12L/B$ doubling:
$$\frac{\Delta P_s'}{\Delta P_s} = \underbrace{2^{-0.19}}_{f} \times \underbrace{2^2}_{G_s^2} \times \underbrace{2}_{N+1} = 0.877\times4\times2 = 7.0$$
$$\Delta P_s' = 2.0(7.0) = 14.0\ \mathrm{psi} > 10\ ✗$$
3. Clean coefficient: $U_C = 160(210)/370 = 90.8$ now; with $h_o' = 234$: $U_C' = 234(210)/444 = 110.7$ (+22%).

The thermal gain is real but the shell-side pressure drop rises about $B^{-2.8}$, so 6 in is not allowed.`,
          answer: String.raw`$B$ 12 → 6 in: $h_o$ 160 → 234, $U_C$ 90.8 → 110.7 (+22%), but $\Delta P_s$ 2.0 → 14.0 psi (> 10): not acceptable.` },

        { id: "practice-shell-tube-P9b", label: "(b)", marks: "7", topic: "shell-tube",
          sub: "Effect of doubling tube passes on h_io and ΔP_T", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Kern design steps #6 and #13 (slides HX Part 1, file 3 pp. 13–18)`,
          text: String.raw`Estimate $h_{io}$, $\Delta P_T$ and $U_C$ if the same tubes are re-arranged from 2 to 4 passes (baffles back at 12 in).`,
          solution: String.raw`**Scaling:** $a_t \propto 1/n$, so doubling $n$ doubles $G_t$ and $Re_t$ (to $5\times10^4$); the flow path $Ln$ doubles.

1. $h_{io} \propto Re_t^{0.8}$:
$$h_{io}' = 210(2)^{0.8} = 366\ \mathrm{Btu/h\,ft^2\,°F}$$
2. Friction: $\Delta P_t \propto fG_t^2Ln$:
$$\frac{f(5\times10^4)}{f(2.5\times10^4)} = \frac{0.0035 + 0.264(5\times10^4)^{-0.42}}{0.0035 + 0.264(2.5\times10^4)^{-0.42}} = 0.869$$
$$\Delta P_t' = 2.4(0.869)(4)(2) = 16.7\ \mathrm{psi}$$
3. Return loss $\propto nV^2 \propto nG_t^2$: $\Delta P_r' = 0.6(2)(4) = 4.8$ psi.
4. $\Delta P_T' = 16.7 + 4.8 = 21.5$ psi > 10 ✗
5. $U_C' = 160(366)/(160 + 366) = 111.3$ (+23%).

$\Delta P_T$ rises about 7–8 times while $h_{io}$ rises 1.74 times.`,
          answer: String.raw`2 → 4 passes: $h_{io}$ 210 → 366, $U_C$ → 111 (+23%), but $\Delta P_T$ 3.0 → 21.5 psi (16.7 friction + 4.8 return): not acceptable.` },

        { id: "practice-shell-tube-P9c", label: "(c)", marks: "4", topic: "shell-tube",
          sub: "Choosing the better modification", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Kern design steps #11, #13, #14`,
          text: String.raw`Suggest a modification that improves $U_C$ within the pressure-drop limits, and estimate the result.`,
          solution: String.raw`Both sides have spare $\Delta P$ (2.0 and 3.0 psi used of 10), but each step above overshoots. A moderate change on the shell side, where $\Delta P$ grows more slowly per unit gain, is the better choice.

Try $B = 9$ in ($12/9 = 1.333$):
$$h_o = 160(1.333)^{0.55} = 187,\qquad \Delta P_s = 2.0(1.333)^{-0.19}(1.333)^2(1.333) = 4.5\ \mathrm{psi}\ ✓$$
$$U_C = \frac{187(210)}{187 + 210} = 99.0\ \mathrm{Btu/h\,ft^2\,°F}\ (+9\%)$$

**Comment:** the shell side was the weaker film, so raising $h_o$ gives most of the benefit. If more is needed, add a third or fourth shell-side step (e.g. $B = 8$ in, $\Delta P_s \approx 6.3$ psi) rather than doubling the tube passes.`,
          answer: String.raw`Closing baffles to 9 in: $h_o \approx 187$, $\Delta P_s \approx 4.5$ psi, $U_C$ 90.8 → 99 (+9%) within limits; better than doubling tube passes.` }
      ] },

    // ---------------------------------------------------------------- F10
    { id: "practice-shell-tube-P10", q: 10, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-shell-tube-P10a", label: "(a)", marks: "6", topic: "shell-tube",
          sub: "Tube-side vs shell-side fluid", type: "theory",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Asked in finals like 2015-16 Q4(c), 2020-21 Q2(c); slides Part 2 p. 7 and Ex. 7.3`,
          text: String.raw`List the factors that decide which fluid is placed in the tubes of a shell-and-tube exchanger.`,
          solution: String.raw`**Put in the tubes:**
- the **fouling** or scale-forming fluid (tubes are easy to clean mechanically; the slides' design example puts kerosene in the tubes "because it has the higher fouling tendency");
- the **corrosive** fluid (only tubes, tubesheets and channel need special alloy);
- the **high-pressure** fluid (small tubes hold pressure more cheaply than a large shell);
- the **hotter** or toxic fluid (less heat loss, better containment);
- cooling water, normally;
- the **larger stream** when the flow areas are about equal (Kern Ex. 7.3), to raise the tube velocity.

**Put in the shell:**
- the **viscous** fluid or the one with the low flow rate: baffled cross-flow gives turbulence and a good $h$ at much lower Re;
- the fluid with the **smaller allowable pressure drop** (the shell side can be designed for low $\Delta P$ with wide baffle spacing);
- condensing vapours (large volume, easy drainage).`,
          answer: String.raw`Tubes: fouling, corrosive, high-pressure, hot/toxic, cooling water, larger stream. Shell: viscous or small flow, low allowable ΔP, condensing vapour.` },

        { id: "practice-shell-tube-P10b", label: "(b)", marks: "5", topic: "shell-tube",
          sub: "Square vs triangular pitch; baffles", type: "theory",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Slides HX Part 1, file 1 pp. 21–30; asked in finals like 2012-13 Q8(b)`,
          text: String.raw`Compare square and triangular tube pitch. Why are segmental baffles used, and what limits the baffle spacing?`,
          solution: String.raw`![Square and triangular tube pitch](fig/practice-heat-exchangers-P5a-sol.svg)

| | Square pitch | Triangular pitch |
|---|---|---|
| Cleaning | Easy: straight lanes between rows | Hard: outside only chemically |
| Tubes per shell | Fewer | More (≈ 15% more) |
| Shell-side $h$ | Lower | Higher (more turbulence) |
| Shell-side $\Delta P$ | Lower | Higher |
| Use | Dirty shell fluids, low $\Delta P$ | Clean shell fluids, compact design |

**Baffles** (segmental, usually 20–25% cut) force the shell fluid across the bundle, which raises velocity and turbulence and so $h_o$; they also support the tubes against sagging and vibration.

**Spacing limits:** minimum $0.2D_s$ or 2 in (5 cm), whichever is larger; maximum about $D_s$ (to keep cross-flow and to support the tubes). Closer spacing raises $h_o$ roughly as $B^{-0.55}$ but $\Delta P_s$ as about $B^{-2.8}$.`,
          answer: String.raw`Square: cleanable, low ΔP, fewer tubes; triangular: more tubes, higher h and ΔP, clean fluids only. Segmental baffles create cross-flow (higher $h_o$) and support tubes; $0.2D_s \le B \le D_s$.` },

        { id: "practice-shell-tube-P10c", label: "(c)", marks: "6", topic: "shell-tube",
          sub: "Fixed tubesheet, U-tube and floating head", type: "theory",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Slides HX Part 1, file 1 pp. 16–19; asked in finals like 2011-12 Q3(b)`,
          text: String.raw`Compare fixed-tubesheet, U-tube and floating-head exchangers. Which would you choose for (i) cooling water against a clean oil with a small temperature difference, (ii) a high-pressure clean gas with a large temperature difference, (iii) a dirty crude at 400°F against kerosene?`,
          solution: String.raw`![Fixed tubesheet, U-tube and floating-head constructions](fig/practice-shell-tube-P10c-sol.svg)

| Type | Thermal expansion | Cleaning | Cost / notes |
|---|---|---|---|
| Fixed tubesheet (BEM) | Not absorbed: needs an expansion bellows if the shell–tube ΔT is large | Tube inside mechanical; shell side chemical only | Cheapest, most used |
| U-tube (BEU) | Absorbed: each tube expands freely | Tube inside very difficult (bends); bundle removable | Same price, cheaper at high pressure (one tubesheet); full counterflow only with an F shell |
| Floating head (AES, BES) | Absorbed: one tubesheet floats | Bundle removable, both sides cleanable | Most expensive, most robust; high T and P |

Choices:
1. Water against a clean oil, small ΔT: **fixed tubesheet**, water in the tubes (cleanable inside).
2. High-pressure clean gas, large ΔT: **U-tube**, gas in the tubes (only one tubesheet, expansion free, no need to clean the tube insides).
3. Dirty crude at 400°F: **floating head** (large expansion, both sides must be cleanable), crude in the tubes.`,
          answer: String.raw`Fixed: cheap, no expansion allowance, shell not cleanable. U-tube: free expansion, good at high P, tubes hard to clean. Floating head: free expansion, fully cleanable, costly. Choices: (i) fixed, (ii) U-tube, (iii) floating head.` },

        { id: "practice-shell-tube-P10d", label: "(d)", marks: "5", topic: "shell-tube",
          sub: "F_T below 0.75, temperature cross, over-surface vs overdesign", type: "theory",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Slides HX Part 1, file 3 pp. 6, 13, 17; Part 2 pp. 32–33`,
          text: String.raw`Why should $F_T$ be greater than 0.75? What is a temperature cross? Distinguish over-surface from overdesign.`,
          solution: String.raw`![Temperature cross in a 1-2 exchanger](fig/practice-shell-tube-P10d-sol.svg)

- **$F_T > 0.75$:** on the steep part of the $F_T$ chart a small error in the terminal temperatures (or a small change in operation) changes $F_T$ a lot, so the design is unreliable; a low $F_T$ also means much of the surface is wasted. Below 0.75, add shell passes (2-4, 3-6 or shells in series).
- **Temperature cross:** the cold outlet exceeds the hot outlet, $t_2 > T_2$. In a 1-2 exchanger part of the surface then transfers heat "backwards", and beyond a limit (the vertical end of the $R$ curve) the duty is impossible however large the exchanger.
- **Over-surface** $= (U_C - U_D)/U_C$: the fraction of extra area provided to allow for fouling ($R_d$).
- **Overdesign** $= (A - A_{reqd})/A_{reqd}$: the extra area installed beyond what the calculated design coefficient needs, because standard tube counts and shells come in steps; ≤ 10% is acceptable.`,
          answer: String.raw`$F_T > 0.75$ keeps the design off the steep part of the chart (else add shell passes); a cross is $t_2 > T_2$; over-surface = $(U_C - U_D)/U_C$ (fouling allowance), overdesign = $(A - A_{reqd})/A_{reqd}$ (≤ 10%).` }
      ] }
  ] });
