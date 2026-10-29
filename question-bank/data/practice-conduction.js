QB.paper({ year: "Practice", set: "Steady conduction", date: "", marks: 0, practice: true,
  rules: String.raw`Practice set on steady 1-D conduction: plane and composite (series–parallel) walls, temperature-dependent k, thermal resistance vs R-value, cylinders and spheres, multilayer pipes, boundary conditions and the overall coefficient U. S = slide examples and variations, F = exam-style problems.`,
  questions: [
    { id: "practice-conduction-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P1", label: "", marks: "", topic: "conduction",
          sub: "Composite wall A–D (series–parallel resistances)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 02 Conduction I, slides 9–12 (composite wall A–D)`,
          text: String.raw`Find the heat flow through the composite wall shown. Thermal conductivities: $k_A = 150$, $k_B = 30$, $k_C = 65$, $k_D = 50$ W/m·°C. The left face is at 400°C and the right face at 60°C.

![Composite wall: A (3 cm), B over C (8 cm; 3 cm and 7 cm high), D (5 cm); 10 cm high and deep](fig/practice-conduction-P1.svg)`,
          solution: String.raw`**Given:** depth 0.1 m; $L_A = 0.03$, $L_B = L_C = 0.08$, $L_D = 0.05$ m; heights 0.1 (A, D), 0.03 (B), 0.07 (C) m; $T_1 = 400$°C, $T_4 = 60$°C.

**Find:** $Q$.

![Thermal circuit: R_A in series with (R_B ∥ R_C) and R_D](fig/practice-conduction-P1-sol.svg)

**Assumptions:** steady; 1-D flow left to right (faces of B and C isothermal at the junctions, so B and C act in parallel); constant $k$; perfect contact.

### 1. Areas normal to the flow
$A_A = A_D = 0.1\times0.1 = 0.01\ \mathrm{m^2}$, $A_B = 0.1\times0.03 = 0.003\ \mathrm{m^2}$, $A_C = 0.1\times0.07 = 0.007\ \mathrm{m^2}$.

### 2. Resistances $R = L/(kA)$
$$R_A = \frac{0.03}{150(0.01)} = 0.020,\quad R_B = \frac{0.08}{30(0.003)} = 0.889,\quad R_C = \frac{0.08}{65(0.007)} = 0.176,\quad R_D = \frac{0.05}{50(0.01)} = 0.100\ \ ^\circ\mathrm{C/W}$$

### 3. Parallel pair B–C
$$\frac{1}{R_{eq}} = \frac{1}{0.889} + \frac{1}{0.176} = 6.81\ \Rightarrow\ R_{eq} = 0.147\ ^\circ\mathrm{C/W}$$

### 4. Total resistance and heat flow
$$R_{total} = R_A + R_{eq} + R_D = 0.020 + 0.147 + 0.100 = 0.267\ ^\circ\mathrm{C/W}$$

$$Q = \frac{T_1-T_4}{R_{total}} = \frac{400-60}{0.267} = 1274\ \mathrm W$$

(The slides round the resistances and quote 1273.4 W; unrounded values give 1274 W.)

### 5. Junction temperatures and split (check)
$T_2 = 400 - 1274(0.020) = 374.5$°C, $T_3 = 60 + 1274(0.100) = 187.4$°C. Through B: $(374.5-187.4)/0.889 = 210$ W; through C: $187.1/0.176 = 1064$ W; sum 1274 W ✓.

**Exam tip:** draw the circuit first ($R_A$ in series with [$R_B \parallel R_C$] in series with $R_D$); most marks go to the network and the areas.`,
          answer: String.raw`$R_{total} \approx 0.267$ °C/W, $Q \approx 1274$ W (slides: 1273 W); $T_2 \approx 375$°C, $T_3 \approx 187$°C.` }
      ] },
    { id: "practice-conduction-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P2", label: "", marks: "", topic: "conduction",
          sub: "Plane wall with k = k0(1 + βT)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation using Slides 02 Conduction I, slide 3 (plane wall with temperature-dependent k)`,
          text: String.raw`A 20 cm thick refractory wall has faces at 900°C and 100°C. Its conductivity varies as $k = 0.8(1 + 0.0007\,T)$ W/m·°C with $T$ in °C. Find (a) the heat flux, (b) the mean conductivity that would give the same answer with the constant-$k$ formula, and (c) the temperature at the mid-plane, compared with the linear-profile value.`,
          solution: String.raw`**Given:** $\Delta x = 0.2$ m, $T_1 = 900$°C, $T_2 = 100$°C, $k_0 = 0.8$ W/m·°C, $\beta = 0.0007\ \mathrm{°C^{-1}}$.

![Refractory wall with k = k0(1 + βT): the profile bows above the straight line](fig/practice-conduction-P2.svg)

**Assumptions:** steady, 1-D, no generation; $k$ linear in $T$.

### (a) Heat flux
Fourier's law $q = -k_0(1+\beta T)A\,dT/dx$, integrated from face 1 to face 2 (slide result):

$$\frac{q}{A} = \frac{k_0}{\Delta x}\left[(T_1-T_2) + \frac{\beta}{2}(T_1^2-T_2^2)\right] = \frac{0.8}{0.2}\left[800 + \frac{0.0007}{2}(900^2-100^2)\right]$$

$$\frac{q}{A} = 4[800 + 280] = 4320\ \mathrm{W/m^2}$$

### (b) Mean conductivity
$$k_m = k_0\left[1 + \beta\,\frac{T_1+T_2}{2}\right] = 0.8[1 + 0.0007(500)] = 1.08\ \mathrm{W/m\,^\circ C}$$

Check: $k_m(T_1-T_2)/\Delta x = 1.08(800)/0.2 = 4320\ \mathrm{W/m^2}$ ✓. For linear $k(T)$ the exact answer equals the constant-$k$ formula with $k$ at the arithmetic-mean temperature.

### (c) Mid-plane temperature
Integrate from face 1 to the plane at $x = 0.1$ m, where the same $q/A$ flows:

$$k_0\left[(T_1-T) + \frac{\beta}{2}(T_1^2-T^2)\right] = \frac{q}{A}\,x = 4320(0.1) = 432$$

This is a quadratic in $T$; its root is

$$T = -\frac1\beta + \sqrt{\left(\frac1\beta + T_1\right)^2 - \frac{2(q/A)x}{k_0\beta}} = 541\ ^\circ\mathrm C$$

A constant-$k$ wall would give 500°C. Since $k$ is larger on the hot side, a smaller gradient is needed there; the profile is curved (convex upward) and the mid-plane runs 41°C hotter.

**Exam tip:** for $\beta > 0$ the profile bulges above the straight line; for $\beta < 0$ it sags below.`,
          answer: String.raw`$q/A = 4320\ \mathrm{W/m^2}$; $k_m = 1.08$ W/m·°C; mid-plane $\approx 541$°C (vs 500°C if $k$ were constant).` }
      ] },
    { id: "practice-conduction-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P3", label: "", marks: "", topic: "conduction",
          sub: "Stainless tube with asbestos: heat loss and interface temperature", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 02 Conduction I, slides 16–18 (stainless-steel tube with asbestos)`,
          text: String.raw`A thick-walled stainless-steel tube (18% Cr, 8% Ni, $k = 19$ W/m·°C) of 2 cm ID and 4 cm OD is covered with a 3 cm layer of asbestos insulation ($k = 0.2$ W/m·°C). The inside wall is at 600°C and the outside of the insulation is at 100°C. Calculate the heat loss per metre of length and the tube–insulation interface temperature.`,
          solution: String.raw`**Given:** $r_1 = 1$ cm, $r_2 = 2$ cm, $r_3 = 2 + 3 = 5$ cm; $k_s = 19$, $k_a = 0.2$ W/m·°C; $T_1 = 600$°C, $T_3 = 100$°C.

![Stainless tube with asbestos insulation and its two cylindrical resistances](fig/practice-conduction-P3.svg)

**Assumptions:** steady, radial 1-D conduction (long tube); constant $k$; perfect contact at the interface.

### 1. Series cylindrical resistances (per metre)
$$R_s = \frac{\ln(r_2/r_1)}{2\pi k_s L} = \frac{\ln 2}{2\pi(19)} = 5.81\times10^{-3},\qquad R_a = \frac{\ln(r_3/r_2)}{2\pi k_a L} = \frac{\ln 2.5}{2\pi(0.2)} = 0.729\ \ ^\circ\mathrm{C/W}$$

### 2. Heat loss
$$\frac qL = \frac{2\pi(T_1-T_3)}{\ln(r_2/r_1)/k_s + \ln(r_3/r_2)/k_a} = \frac{2\pi(600-100)}{(\ln 2)/19 + (\ln 2.5)/0.2} = 680\ \mathrm{W/m}$$

### 3. Interface temperature
Across the asbestos alone:

$$\frac qL = \frac{T_a - T_3}{\ln(r_3/r_2)/(2\pi k_a)}\ \Rightarrow\ T_a = 100 + 680(0.729) = 596\ ^\circ\mathrm C$$

(Check across the steel: $600 - 680(0.00581) = 596.0$°C ✓. The slides print 595.8°C; unrounded arithmetic gives 596.0°C.)

**Why it matters:** the steel takes only 4°C of the 500°C drop; the insulation is the controlling resistance (99% of the total).`,
          answer: String.raw`$q/L \approx 680$ W/m; interface $T_a \approx 596$°C.` }
      ] },
    { id: "practice-conduction-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P4", label: "", marks: "", topic: "conduction",
          sub: "Steam in a cast-iron pipe with glass wool (convection both sides)", type: "numerical",
          syllabus: "in", repeats: ["2015-16-Q6b"], origin: "slides", ref: String.raw`Slides 02 Conduction I, slides 30–33 (steam in cast-iron pipe with glass wool); also set as 2015-16 Q6(b)`,
          text: String.raw`Steam at 320°C flows in a cast-iron pipe ($k = 80$ W/m·°C) with inner and outer diameters 5 cm and 5.5 cm. The pipe is covered with 3 cm thick glass-wool insulation ($k = 0.05$ W/m·°C). Heat is lost to surroundings at 5°C by natural convection and radiation with a combined coefficient $h_2 = 18$ W/m²·°C; the inside coefficient is $h_1 = 60$ W/m²·°C. Determine the heat loss per metre of pipe and the temperature drops across the pipe shell and the insulation.`,
          solution: String.raw`**Given:** $r_1 = 0.025$, $r_2 = 0.0275$, $r_3 = 0.0575$ m; $k_1 = 80$, $k_2 = 0.05$ W/m·°C; $h_1 = 60$, $h_2 = 18$ W/m²·°C; $T_{\infty1} = 320$°C, $T_{\infty2} = 5$°C; $L = 1$ m.

![Steam pipe with glass wool: geometry and the four series resistances](fig/practice-conduction-P4.svg)

**Assumptions:** steady, radial 1-D; constant properties; perfect contact; $h_2$ already includes radiation.

### 1. Convection areas
$A_1 = 2\pi r_1L = 0.157\ \mathrm{m^2}$, $A_3 = 2\pi r_3L = 0.361\ \mathrm{m^2}$.

### 2. Resistances
$$R_i = \frac{1}{h_1A_1} = \frac{1}{60(0.157)} = 0.106\ ^\circ\mathrm{C/W}$$

$$R_{pipe} = \frac{\ln(r_2/r_1)}{2\pi k_1L} = \frac{\ln(2.75/2.5)}{2\pi(80)} = 0.0002\ ^\circ\mathrm{C/W}$$

$$R_{ins} = \frac{\ln(r_3/r_2)}{2\pi k_2L} = \frac{\ln(5.75/2.75)}{2\pi(0.05)} = 2.35\ ^\circ\mathrm{C/W}$$

$$R_o = \frac{1}{h_2A_3} = \frac{1}{18(0.361)} = 0.154\ ^\circ\mathrm{C/W}$$

$$R_{total} = 0.106 + 0.0002 + 2.35 + 0.154 = 2.61\ ^\circ\mathrm{C/W}$$

### 3. Heat loss
$$\dot Q = \frac{T_{\infty1}-T_{\infty2}}{R_{total}} = \frac{320-5}{2.61} = 121\ \mathrm{W\ (per\ m)}$$

### 4. Temperature drops
$$\Delta T_{pipe} = \dot QR_{pipe} = 121(0.0002) = 0.02\ ^\circ\mathrm C,\qquad \Delta T_{ins} = \dot QR_{ins} = 121(2.35) = 284\ ^\circ\mathrm C$$

Also: inside film drop $121(0.106) = 12.8$°C, outer surface at $5 + 121(0.154) = 23.6$°C.

**Exam tip:** the metal wall resistance is negligible next to insulation; it may be dropped, but say so.`,
          answer: String.raw`$R_{total} \approx 2.61$ °C/W; $\dot Q \approx 121$ W/m; $\Delta T_{pipe} \approx 0.02$°C, $\Delta T_{ins} \approx 284$°C.` }
      ] },
    { id: "practice-conduction-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P5", label: "", marks: "", topic: "conduction",
          sub: "Overall U of a thin tube; controlling resistance", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 02 Conduction II, slides 1–4 (water in a 2.5 cm tube, free convection outside)`,
          text: String.raw`Water at 50°C flows inside a tube of 2.5 cm ID with $h_i = 3500$ W/m²·°C. The tube wall is 0.8 mm thick with $k = 16$ W/m·°C. The outside loses heat by free convection to air at 20°C with $h_o = 7.6$ W/m²·°C. Calculate the overall heat-transfer coefficient (based on the outside area) and the heat loss per unit length.`,
          solution: String.raw`**Given:** $d_i = 0.025$ m, $d_o = 0.025 + 2(0.0008) = 0.0266$ m, $L = 1$ m; $h_i = 3500$, $h_o = 7.6$ W/m²·°C; $k = 16$ W/m·°C; $\Delta T = 50 - 20 = 30$°C.

![Thin tube with water inside and free convection outside; the outside film controls](fig/practice-conduction-P5.svg)

**Assumptions:** steady; radial 1-D; constant properties; no fouling.

### 1. Three resistances in series
$$R_i = \frac{1}{h_i\pi d_iL} = \frac{1}{3500\,\pi(0.025)(1)} = 0.00364\ ^\circ\mathrm{C/W}$$

$$R_t = \frac{\ln(d_o/d_i)}{2\pi kL} = \frac{\ln(0.0266/0.025)}{2\pi(16)(1)} = 0.00062\ ^\circ\mathrm{C/W}$$

$$R_o = \frac{1}{h_o\pi d_oL} = \frac{1}{7.6\,\pi(0.0266)(1)} = 1.575\ ^\circ\mathrm{C/W}$$

$\sum R = 1.579$ °C/W. The outside convection resistance is 99.7% of the total: it **controls** the heat transfer.

### 2. Overall coefficient on the outside area
$$U_o = \frac{1}{A_o\sum R} = \frac{1}{\pi(0.0266)(1)(1.579)} = 7.58\ \mathrm{W/m^2\,^\circ C}$$

(very close to $h_o = 7.6$, as expected). On the inside area, $U_i = 1/(A_i\sum R) = 8.06$ W/m²·°C; note $U_iA_i = U_oA_o$.

### 3. Heat loss
$$q = U_oA_o\Delta T = 7.58\,\pi(0.0266)(1)(30) = 19\ \mathrm{W\ per\ m}$$

**Why it matters:** improving $h_i$ or the wall would change nothing; only the outside (e.g. fins or forced air) can raise $q$.`,
          answer: String.raw`$U_o \approx 7.58\ \mathrm{W/m^2\,^\circ C}$ ($U_i \approx 8.06$); $q \approx 19$ W/m.` }
      ] },
    { id: "practice-conduction-P6", q: 6, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P6", label: "", marks: "", topic: "conduction",
          sub: "Series–parallel wall A, B/C/D, E, F/G; R-value", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 02 Conduction I, slide 8 (series–parallel network A–G)`,
          text: String.raw`A building wall section 0.6 m high and 1 m deep has the layer arrangement of the slide figure (heat flows left to right):

- A: plaster, 2 cm thick, full height, $k = 0.5$ W/m·K;
- a 10 cm layer split into three 0.2 m high strips: B (top) and D (bottom) are insulation, $k = 0.04$; C (middle) is a brick bond course, $k = 1.2$ W/m·K;
- E: cement board, 3 cm, full height, $k = 0.8$ W/m·K;
- a 2 cm cladding split into two 0.3 m strips: F (top) $k = 0.2$, G (bottom) $k = 0.6$ W/m·K.

![Wall section A, B/C/D, E, F/G and its series–parallel network](fig/practice-conduction-P6.svg)

The inner face is at 25°C and the outer face at −5°C. Find (a) the heat flow, the interface temperatures and the share carried by the brick strip C; (b) the R-value and U of the wall section, also in British units; (c) the heat flow if C were replaced by insulation.`,
          solution: String.raw`**Assumptions:** steady; 1-D (each parallel group has common isothermal faces); constant $k$; perfect contact. Areas per strip: full height $0.6\ \mathrm{m^2}$, B/C/D $0.2\ \mathrm{m^2}$ each, F/G $0.3\ \mathrm{m^2}$ each.

### (a) Network $R_A + (R_B\parallel R_C\parallel R_D) + R_E + (R_F\parallel R_G)$

| Element | $R = L/(kA)$, K/W |
|---|---|
| A | $0.02/(0.5\times0.6) = 0.0667$ |
| B = D | $0.10/(0.04\times0.2) = 12.5$ |
| C | $0.10/(1.2\times0.2) = 0.417$ |
| B∥C∥D | $1/(2/12.5 + 1/0.417) = 0.391$ |
| E | $0.03/(0.8\times0.6) = 0.0625$ |
| F | $0.02/(0.2\times0.3) = 0.333$ |
| G | $0.02/(0.6\times0.3) = 0.111$ |
| F∥G | $1/(1/0.333 + 1/0.111) = 0.0833$ |

$$R_{total} = 0.0667 + 0.391 + 0.0625 + 0.0833 = 0.603\ \mathrm{K/W}$$

$$Q = \frac{25-(-5)}{0.603} = 49.7\ \mathrm W$$

Interface temperatures: $T_2 = 25 - 49.7(0.0667) = 21.7$°C, $T_3 = 21.7 - 49.7(0.391) = 2.3$°C, $T_4 = 2.3 - 49.7(0.0625) = -0.9$°C, and $T_5 = -0.9 - 49.7(0.0833) = -5.0$°C ✓.

Through C: $(21.7-2.3)/0.417 = 46.6$ W, i.e. **94%** of the heat; B and D carry only 1.55 W each.

### (b) R-value and U
R-value is per unit area: $R\text{-value} = R_{total}\,A = 0.603(0.6) = 0.362\ \mathrm{m^2\,K/W}$, so $U = 1/R\text{-value} = 2.76\ \mathrm{W/m^2K}$.

In British units ($1\ \mathrm{m^2K/W} = 5.678\ \mathrm{h\,ft^2\,^\circ F/Btu}$): $R = 2.05\ \mathrm{h\,ft^2\,^\circ F/Btu}$.

### (c) No brick bridge
With C as insulation, $R_{B\parallel C\parallel D} = 12.5/3 = 4.17$ K/W, $R_{total} = 4.38$ K/W and $Q = 30/4.38 = 6.9$ W, about a seventh of (a).

**Why it matters:** a narrow conducting path in parallel (a thermal bridge) short-circuits the insulation. $R_{th}$ (K/W) belongs to a given piece; the R-value (m²K/W) is per unit area and is what insulation is rated by.`,
          answer: String.raw`$R_{total} \approx 0.603$ K/W, $Q \approx 49.7$ W, of which 94% goes through brick C; R-value $\approx 0.36$ m²K/W ($U \approx 2.76$ W/m²K, $R \approx 2.05$ h·ft²·°F/Btu); without the bridge $Q \approx 6.9$ W.` }
      ] },
    { id: "practice-conduction-P7", q: 7, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P7", label: "", marks: "", topic: "conduction",
          sub: "Two-layer insulated oil pipe: U_i, U_o and interface temperatures", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 02 Conduction I, slides 15 and 30–37 (multilayer cylinder, U_i and U_o)`,
          text: String.raw`Hot oil at 200°C flows in a steel pipe ($k = 45$ W/m·°C) of 10 cm ID and 11.4 cm OD; $h_i = 150$ W/m²·°C. The pipe is covered with 4 cm of calcium silicate ($k = 0.06$ W/m·°C) and then 2 cm of mineral wool ($k = 0.04$ W/m·°C). The outside is in air at 25°C with a combined coefficient $h_o = 10$ W/m²·°C. Find (a) the heat loss per metre, (b) all interface temperatures, (c) $U_i$ and $U_o$, and (d) the loss from the bare pipe for comparison.`,
          solution: String.raw`**Given:** $r_1 = 0.05$, $r_2 = 0.057$, $r_3 = 0.097$, $r_4 = 0.117$ m; $L = 1$ m; $T_A = 200$°C, $T_B = 25$°C.

![Oil pipe with two insulation layers and five resistances in series](fig/practice-conduction-P7.svg)

**Assumptions:** steady, radial 1-D; constant $k$; perfect contact; $h_o$ includes radiation.

### (a) Resistances and heat loss

| Resistance | Expression | °C/W |
|---|---|---|
| Inside film | $1/(h_i2\pi r_1L)$ | 0.0212 |
| Steel | $\ln(r_2/r_1)/(2\pi k_sL)$ | 0.00046 |
| Calcium silicate | $\ln(r_3/r_2)/(2\pi k_1L)$ | 1.410 |
| Mineral wool | $\ln(r_4/r_3)/(2\pi k_2L)$ | 0.746 |
| Outside film | $1/(h_o2\pi r_4L)$ | 0.136 |
| **Total** | | **2.314** |

$$\frac qL = \frac{T_A-T_B}{\sum R} = \frac{175}{2.314} = 75.6\ \mathrm{W/m}$$

### (b) Temperatures (subtract $qR$ step by step)
Inner wall $200 - 75.6(0.0212) = 198.4$°C; steel/silicate interface $198.4$°C; silicate/wool interface $198.4 - 75.6(1.410) = 91.7$°C; outer surface $91.7 - 75.6(0.746) = 35.3$°C; air $35.3 - 75.6(0.136) = 25.0$°C ✓.

### (c) Overall coefficients ($UA = 1/\sum R$)
$$U_o = \frac{1}{2\pi r_4L\sum R} = \frac{1}{2\pi(0.117)(2.314)} = 0.588\ \mathrm{W/m^2\,^\circ C}$$

$$U_i = \frac{1}{2\pi r_1L\sum R} = \frac{1}{2\pi(0.05)(2.314)} = 1.38\ \mathrm{W/m^2\,^\circ C}$$

### (d) Bare pipe
$\sum R = 0.0212 + 0.00046 + 1/(10\cdot2\pi\cdot0.057) = 0.301$ °C/W, so $q/L = 175/0.301 = 582$ W/m. The insulation cuts the loss by 87%.

**Exam tip:** always state which area a U refers to; $U_i \ne U_o$ but $U_iA_i = U_oA_o$.`,
          answer: String.raw`$q/L \approx 75.6$ W/m; interfaces 198.4, 91.7°C, outer surface 35.3°C; $U_o \approx 0.59$, $U_i \approx 1.38\ \mathrm{W/m^2\,^\circ C}$; bare pipe $\approx 582$ W/m.` }
      ] },
    { id: "practice-conduction-P8", q: 8, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P8a", label: "(a)", marks: "6", topic: "conduction",
          sub: "Thermal resistance of a spherical shell", type: "derivation",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Sec. 2-4 (sphere); cousin of 2013-14 Q5(a) and 2015-16 Q5(b)`,
          text: String.raw`Show that the conduction resistance of a spherical shell of radii $r_1$ and $r_2$ and constant conductivity $k$ is $R = (r_2 - r_1)/(4\pi k r_1 r_2)$.`,
          solution: String.raw`**Assumptions:** steady; radial 1-D; no generation; constant $k$.

1. Area normal to radial flow: $A_r = 4\pi r^2$. Fourier's law: $q = -k\,4\pi r^2\,\dfrac{dT}{dr}$.
2. At steady state with no generation, $q$ is the same at every radius. Separate variables:
$$\frac{q}{4\pi k}\,\frac{dr}{r^2} = -dT$$
3. Integrate from $r_1$ ($T_1$) to $r_2$ ($T_2$):
$$\frac{q}{4\pi k}\left(\frac1{r_1} - \frac1{r_2}\right) = T_1 - T_2$$
4. Hence
$$q = \frac{4\pi k\,(T_1-T_2)}{1/r_1 - 1/r_2} = \frac{T_1-T_2}{R},\qquad R = \frac{r_2-r_1}{4\pi k\,r_1r_2}$$
A convection surface adds $1/(h\,4\pi r^2)$ in series.`,
          answer: String.raw`$q = 4\pi k(T_1-T_2)/(1/r_1-1/r_2)$, so $R_{sphere} = (r_2-r_1)/(4\pi k r_1 r_2)$.` },
        { id: "practice-conduction-P8b", label: "(b)", marks: "12", topic: "conduction",
          sub: "Insulated spherical ice-water tank: heat gain and melting rate", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel ch. 3 (spherical tank of iced water); cousin of 2018-19 Q5(b) and 2021-22 Q6(b) boil-off problems`,
          text: String.raw`A spherical steel tank ($k = 15$ W/m·°C) of 3 m inner diameter and 2 cm wall thickness stores ice-water at 0°C. It is covered with 5 cm of insulation ($k = 0.04$ W/m·°C). The surroundings are at 25°C with a combined outside coefficient of 12 W/m²·°C. Taking the inner steel surface at 0°C and the latent heat of fusion of ice as 333.7 kJ/kg, find the rate of heat gain, the mass of ice that melts per day, and the outer surface temperature. How much ice would melt per day without insulation?`,
          solution: String.raw`**Given:** $r_1 = 1.50$, $r_2 = 1.52$, $r_3 = 1.57$ m; $k_s = 15$, $k_i = 0.04$ W/m·°C; $h_o = 12$ W/m²·°C; $T_1 = 0$°C, $T_\infty = 25$°C; $h_{if} = 333.7$ kJ/kg.

![Insulated spherical ice-water tank and its resistance circuit](fig/practice-conduction-P8b.svg)

**Assumptions:** steady; radial 1-D; constant $k$; perfect contact; inner surface held at 0°C by the ice–water mixture.

### 1. Resistances (using part (a))
$$R_s = \frac{r_2-r_1}{4\pi k_sr_1r_2} = \frac{0.02}{4\pi(15)(1.50)(1.52)} = 4.65\times10^{-5}\ ^\circ\mathrm{C/W}$$

$$R_{ins} = \frac{r_3-r_2}{4\pi k_ir_2r_3} = \frac{0.05}{4\pi(0.04)(1.52)(1.57)} = 0.04168\ ^\circ\mathrm{C/W}$$

$$R_o = \frac{1}{h_o4\pi r_3^2} = \frac{1}{12(4\pi)(1.57)^2} = 0.00269\ ^\circ\mathrm{C/W}$$

$$\sum R = 0.04442\ ^\circ\mathrm{C/W}$$

### 2. Heat gain and melting
$$\dot Q = \frac{25-0}{0.04442} = 563\ \mathrm W$$

$$\dot m = \frac{\dot Q}{h_{if}} = \frac{563}{333{,}700} = 1.69\times10^{-3}\ \mathrm{kg/s} = 146\ \mathrm{kg/day}$$

### 3. Outer surface temperature
$$T_3 = T_\infty - \dot QR_o = 25 - 563(0.00269) = 23.5\ ^\circ\mathrm C$$

### 4. Without insulation
$\sum R = R_s + 1/(h_o4\pi r_2^2) = 4.65\times10^{-5} + 0.00287 = 0.00292$ °C/W, so $\dot Q = 8570$ W and about 2220 kg/day would melt, 15 times more.

**Exam tip:** with thin metal walls the steel resistance is negligible; the insulation dominates (94% of $\sum R$).`,
          answer: String.raw`$\dot Q \approx 563$ W, ice melts at $\approx 146$ kg/day, outer surface $\approx 23.5$°C; uninsulated $\approx 8.6$ kW ($\approx 2200$ kg/day).` }
      ] },
    { id: "practice-conduction-P9", q: 9, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P9", label: "", marks: "10+5", topic: "conduction",
          sub: "Cold-store wall: insulation thickness for a target heat gain", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Ex. 2-1 / Çengel ch. 3 composite walls; cousin of 2018-19 Q6(a) (find the insulation thickness)`,
          text: String.raw`The wall of a cold-storage room is made of 10 cm brick ($k = 0.7$ W/m·°C) on the outside, a layer of polyurethane foam ($k = 0.025$ W/m·°C) and 1.5 cm cement plaster ($k = 0.5$ W/m·°C) on the inside. The room is kept at −20°C ($h_i = 8$ W/m²·°C) and the outside air is at 30°C ($h_o = 15$ W/m²·°C).

(a) Find the foam thickness that limits the heat gain to 10 W/m², and the inner and outer wall-surface temperatures. **[10]**

(b) Give the R-value of the wall (surface to surface) in SI and British units and the overall U. If foam is available only in whole centimetres, what heat gain results? **[5]**`,
          solution: String.raw`**Given:** $T_o = 30$°C, $T_i = -20$°C, $\Delta T = 50$°C; $q_{max} = 10\ \mathrm{W/m^2}$.

![Cold-store wall layers and the five series resistances per m²](fig/practice-conduction-P9.svg)

**Assumptions:** steady, 1-D; constant $k$; perfect contact; radiation lumped into $h$.

### (a) Required foam thickness
Per unit area the resistances are in series:

$$\frac{\Delta T}{q} = \frac1{h_o} + \frac{L_b}{k_b} + \frac{L_f}{k_f} + \frac{L_p}{k_p} + \frac1{h_i}$$

Required total: $50/10 = 5.0\ \mathrm{m^2\,^\circ C/W}$.

Known part: $\dfrac1{15} + \dfrac{0.10}{0.7} + \dfrac{0.015}{0.5} + \dfrac18 = 0.0667 + 0.1429 + 0.0300 + 0.1250 = 0.3645\ \mathrm{m^2\,^\circ C/W}$.

$$L_f = k_f(5.0 - 0.3645) = 0.025(4.635) = 0.116\ \mathrm m = 11.6\ \mathrm{cm}$$

Surface temperatures:
$$T_{s,o} = 30 - \frac{q}{h_o} = 30 - \frac{10}{15} = 29.3\ ^\circ\mathrm C,\qquad T_{s,i} = -20 + \frac{q}{h_i} = -20 + \frac{10}{8} = -18.75\ ^\circ\mathrm C$$

### (b) R-value and U
Surface to surface: $R = 5.0 - 1/15 - 1/8 = 4.81\ \mathrm{m^2\,^\circ C/W} = 4.81(5.678) = 27.3\ \mathrm{h\,ft^2\,^\circ F/Btu}$.

Overall (air to air): $U = 1/5.0 = 0.20\ \mathrm{W/m^2\,^\circ C}$.

With 12 cm of foam: $\sum R = 0.3645 + 0.12/0.025 = 5.165$, so $q = 50/5.165 = 9.68\ \mathrm{W/m^2}$ (meets the limit).

**Exam tip:** R-values of layers in series simply add, which is why insulation is sold by R-value. The foam is 93% of the total resistance.`,
          answer: String.raw`Foam $\approx 11.6$ cm (use 12 cm, $q \approx 9.7\ \mathrm{W/m^2}$); surfaces 29.3°C and −18.75°C; R-value $\approx 4.81$ m²·°C/W (27.3 h·ft²·°F/Btu); $U = 0.20$ W/m²·°C.` }
      ] },
    { id: "practice-conduction-P10", q: 10, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P10", label: "", marks: "12", topic: "conduction",
          sub: "Derivation: plane wall with k = k0(1 + βT)", type: "derivation",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 02 Conduction I, slide 3; style of Holman Sec. 2-4 (variable conductivity)`,
          text: String.raw`The thermal conductivity of a plane wall of thickness $L$ varies with temperature as $k = k_0(1 + \beta T)$. Its faces are held at $T_1$ ($x = 0$) and $T_2$ ($x = L$). Derive expressions for (i) the heat flux and (ii) the temperature distribution $T(x)$. Sketch the profile for $\beta > 0$, $\beta = 0$ and $\beta < 0$.`,
          solution: String.raw`**Assumptions:** steady; 1-D; no heat generation; $k$ linear in $T$.

### (i) Heat flux
At steady state with no generation, $q'' = -k\,dT/dx$ is constant through the wall.

$$q'' = -k_0(1+\beta T)\frac{dT}{dx}\ \Rightarrow\ q''\int_0^L dx = -k_0\int_{T_1}^{T_2}(1+\beta T)\,dT$$

$$q''L = k_0\left[(T_1-T_2) + \frac{\beta}{2}(T_1^2-T_2^2)\right]$$

$$q'' = \frac{k_0}{L}\left[1 + \beta\,\frac{T_1+T_2}{2}\right](T_1-T_2) = \frac{k_m(T_1-T_2)}{L}$$

So the constant-$k$ formula holds exactly if $k$ is taken at the mean temperature, $k_m = k_0[1 + \beta(T_1+T_2)/2]$.

### (ii) Temperature distribution
Integrate from 0 to a general $x$:

$$k_0\left[(T_1-T) + \frac{\beta}{2}(T_1^2-T^2)\right] = q''x$$

which is a quadratic in $T$: $\frac{\beta}{2}T^2 + T - \left[T_1 + \frac{\beta}{2}T_1^2 - \frac{q''x}{k_0}\right] = 0$. Taking the physical root:

$$T(x) = -\frac1\beta + \sqrt{\left(\frac1\beta + T_1\right)^2 - \frac{2q''x}{\beta k_0}}$$

### Sketch (in words)
Axes: $T$ (vertical) against $x$ from 0 to $L$, from $T_1$ down to $T_2$.
- $\beta = 0$: straight line.
- $\beta > 0$ ($k$ rises with $T$): the hot side conducts better, so the slope is gentle near $x = 0$ and steep near $x = L$; the curve lies **above** the straight line (convex upward).
- $\beta < 0$: the opposite; the curve lies **below** the straight line.

![T(x) across the wall for β > 0, β = 0 and β < 0](fig/practice-conduction-P10-sol.svg)

Reason: $q'' = -k\,dT/dx$ is constant, so $|dT/dx| \propto 1/k$.`,
          answer: String.raw`$q'' = k_m(T_1-T_2)/L$ with $k_m = k_0[1+\beta(T_1+T_2)/2]$; $T(x) = -1/\beta + \sqrt{(1/\beta+T_1)^2 - 2q''x/(\beta k_0)}$; curve above the straight line for $\beta>0$, below for $\beta<0$.` }
      ] },
    { id: "practice-conduction-P11", q: 11, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P11a", label: "(a)", marks: "8", topic: "conduction",
          sub: "Writing boundary conditions", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 02 Conduction I, slides 20–28 (specified T, flux, insulated, convection, radiation, interface boundary conditions)`,
          text: String.raw`Write the mathematical boundary conditions for the following cases (1-D, $x$ measured into the solid from the left face):

(i) the left face of a plate is perfectly insulated;

(ii) the left face of a plate of thickness $L$ absorbs a solar flux of 600 W/m², and the right face loses heat by convection to air at 25°C with $h = 10$ W/m²·°C;

(iii) the outer surface ($r = r_2$) of a pipe loses heat by convection to $T_\infty$ and by radiation to surroundings at $T_{surr}$;

(iv) two layers A and B are in perfect contact at $x = x_0$.`,
          solution: String.raw`(i) **Insulated (zero flux):** $\;-k\,\dfrac{dT(0)}{dx} = 0\;\Rightarrow\;\dfrac{dT(0)}{dx} = 0$.

(ii) **Specified flux and convection:**

$$-k\frac{dT(0)}{dx} = 600\ \mathrm{W/m^2}\qquad\text{(flux into the medium, in }+x)$$

$$-k\frac{dT(L)}{dx} = h\,[T(L) - 25]\qquad\text{(conduction to the face = convection away)}$$

(iii) **Combined convection and radiation** (conduction arriving = heat leaving; $T$ in kelvin):

$$-k\frac{dT(r_2)}{dr} = h\,[T(r_2) - T_\infty] + \varepsilon\sigma\,[T(r_2)^4 - T_{surr}^4]$$

(iv) **Interface:** same temperature and same flux, since a surface stores no energy:

$$T_A(x_0) = T_B(x_0),\qquad -k_A\frac{dT_A(x_0)}{dx} = -k_B\frac{dT_B(x_0)}{dx}$$

**Exam tip:** write every BC as an energy balance on the surface: what is conducted in equals what leaves by the other mode.`,
          answer: String.raw`Insulated: $dT/dx = 0$; flux: $-k\,dT/dx = \dot q_0$; convection: $-k\,dT/dx = h(T_s - T_\infty)$; radiation adds $\varepsilon\sigma(T_s^4 - T_{surr}^4)$; interface: equal $T$ and equal $k\,dT/dx$.` },
        { id: "practice-conduction-P11b", label: "(b)", marks: "6", topic: "conduction",
          sub: "Solve: plate with absorbed flux on one face, convection on the other", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel ch. 2 (solar-heated plate); uses the BCs of part (a)(ii)`,
          text: String.raw`For case (ii) of part (a), the plate is 2 cm thick with $k = 0.8$ W/m·°C. Solve $d^2T/dx^2 = 0$ with those boundary conditions and find the temperatures of both faces.`,
          solution: String.raw`**Assumptions:** steady; 1-D; no generation; constant $k$; all 600 W/m² absorbed at $x = 0$ and no other loss from the left face.

![Plate with absorbed solar flux on the left face and convection on the right: linear profile](fig/practice-conduction-P11b.svg)

1. $d^2T/dx^2 = 0 \Rightarrow T = C_1x + C_2$, so $dT/dx = C_1$.
2. BC at $x = 0$: $-kC_1 = 600 \Rightarrow C_1 = -600/0.8 = -750$ °C/m.
3. BC at $x = L$: $-kC_1 = h[T(L) - 25] \Rightarrow 600 = 10[T(L) - 25] \Rightarrow T(L) = 85$°C.
4. Then $T(0) = T(L) - C_1L = 85 + 750(0.02) = 100$°C, so

$$T(x) = 100 - 750x\ \ (^\circ\mathrm C,\ x\ \mathrm{in\ m})$$

**Check:** all 600 W/m² must leave by convection at steady state: $10(85 - 25) = 600$ ✓.`,
          answer: String.raw`$T(x) = 100 - 750x$: left face 100°C, right face 85°C.` }
      ] },
    { id: "practice-conduction-P12", q: 12, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-conduction-P12", label: "", marks: "15", topic: "conduction",
          sub: "Insulation thickness to keep a steam-pipe surface below 40°C", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel ch. 3 (insulating for a safe surface temperature); cousin of 2018-19 Q8(a)`,
          text: String.raw`Steam at 180°C flows in a 2-in schedule-40 steel pipe (ID 5.25 cm, OD 6.03 cm, $k = 50$ W/m·°C) with $h_i = 2000$ W/m²·°C. The room air is at 30°C and the combined outside coefficient is 10 W/m²·°C. For safety the outer surface must not exceed 40°C. Using insulation with $k = 0.045$ W/m·°C, find the minimum thickness, the heat loss per metre with that thickness, and the loss and surface temperature of the bare pipe. Is the critical radius a concern here?`,
          solution: String.raw`**Given:** $r_1 = 0.02625$ m, $r_2 = 0.03015$ m; $h_i = 2000$, $h_o = 10$ W/m²·°C; $T_s = 180$°C, $T_\infty = 30$°C; $T_{surf} \le 40$°C.

![Insulated steam pipe: find the thickness for a 40°C outer surface](fig/practice-conduction-P12.svg)

**Assumptions:** steady, radial 1-D; constant $k$; $h_o$ independent of the outer radius.

### 1. Condition at the outer surface
With outer radius $r_3$, the surface temperature is $T_{surf} = T_\infty + q'R_o$, with $q' = 150/\sum R$ and

$$\sum R = \frac{1}{h_i2\pi r_1} + \frac{\ln(r_2/r_1)}{2\pi k_s} + \frac{\ln(r_3/r_2)}{2\pi k} + \frac{1}{h_o2\pi r_3}$$

where $R_i = 0.00303$ and $R_{pipe} = 0.00044$ m·°C/W. Since $r_3$ appears in a logarithm and in $1/r_3$, solve by trial:

| $t$, cm | $R_{ins}$ | $R_o$ | $q'$, W/m | $T_{surf}$, °C |
|---|---|---|---|---|
| 2 | 1.80 | 0.317 | 70.7 | 52.4 |
| 3 | 2.44 | 0.265 | 55.3 | 44.6 |
| 4 | 2.99 | 0.227 | 46.6 | 40.6 |
| 4.2 | 3.09 | 0.221 | 45.3 | 40.0 |

So the minimum thickness is $t \approx 4.2$ cm ($r_3 = 7.21$ cm).

### 2. Heat loss at that thickness
$$q' = \frac{150}{0.00303 + 0.00044 + 3.085 + 0.221} = 45.3\ \mathrm{W/m}$$

### 3. Bare pipe
$$q'_{bare} = \frac{150}{0.00303 + 0.00044 + 1/(10\cdot2\pi\cdot0.03015)} = \frac{150}{0.531} = 282\ \mathrm{W/m},\qquad T_{surf} = 30 + 282(0.528) = 179\ ^\circ\mathrm C$$

The insulation cuts the loss by 84% and makes the pipe safe to touch.

### 4. Critical radius
$r_c = k/h_o = 0.045/10 = 4.5$ mm, much smaller than $r_2 = 30$ mm, so any added insulation reduces the loss.

**Exam tip:** a "surface must not exceed" condition fixes the flux through the outer film ($q' = h_o2\pi r_3\Delta T$); set it equal to the series-resistance expression and iterate on $r_3$.`,
          answer: String.raw`Minimum insulation $\approx 4.2$ cm, $q' \approx 45$ W/m; bare pipe $\approx 282$ W/m with a surface at $\approx 179$°C; $r_c = 4.5$ mm $\ll r_2$, so no critical-radius problem.` }
      ] }
  ] });
