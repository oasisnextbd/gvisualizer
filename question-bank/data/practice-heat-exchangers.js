QB.paper({ year: "Practice", set: "Heat exchangers: LMTD, double pipe", date: "", marks: 0, practice: true,
  rules: String.raw`LMTD and its derivation, parallel vs counterflow, the F correction, overall U and fouling, equivalent diameters, double-pipe design by Kern ch. 6 (hairpins and pressure drops), dirt factor from a cleaning cycle and temperature profiles. Slide examples first (S), then potential finals (F).`,
  questions: [

    // ---------------------------------------------------------------- S1
    { id: "practice-heat-exchangers-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-heat-exchangers-P1a", label: "(a)", marks: "", topic: "heat-exchangers",
          sub: "LMTD derivation (parallel flow)", type: "derivation",
          syllabus: "in", repeats: ["2013-14-Q4b", "2017-18-Q2b", "2020-21-Q3a"], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 1 pp. 46–51 (LMTD derivation, parallel flow)`,
          text: String.raw`For a double-pipe heat exchanger in parallel flow, show that the heat transfer rate is $q = UA\,\Delta T_m$, where $\Delta T_m$ is the log mean temperature difference
$$\Delta T_m=\frac{(T_{h2}-T_{c2})-(T_{h1}-T_{c1})}{\ln[(T_{h2}-T_{c2})/(T_{h1}-T_{c1})]}$$
Show also that the same expression holds for counterflow if the temperature differences are taken at the two ends of the exchanger.`,
          solution: String.raw`![Parallel-flow double pipe with the element dA, and the temperature profiles along the area](fig/practice-heat-exchangers-P1a-sol.svg)

**Set-up.** Hot fluid (mass flow $\dot m_h$, specific heat $c_h$) and cold fluid ($\dot m_c$, $c_c$) flow in the same direction. Station 1 is the inlet end and station 2 the outlet end. Let $\Delta T = T_h - T_c$ be the local temperature difference at a position where the heat-transfer area from the inlet is $A$.

1. Energy balance on an element of area $dA$. The hot fluid gives up $dq$ and the cold fluid gains it:
$$dq = -\dot m_h c_h\,dT_h = \dot m_c c_c\,dT_c$$
so
$$dT_h = -\frac{dq}{\dot m_h c_h},\qquad dT_c = \frac{dq}{\dot m_c c_c}$$

2. Subtract to get the change in the local temperature difference:
$$d(T_h - T_c) = dT_h - dT_c = -dq\left(\frac{1}{\dot m_h c_h} + \frac{1}{\dot m_c c_c}\right)$$

3. Rate equation for the same element:
$$dq = U\,(T_h - T_c)\,dA$$

4. Substitute $dq$ from step 3 into step 2:
$$\frac{d(T_h - T_c)}{T_h - T_c} = -U\left(\frac{1}{\dot m_h c_h} + \frac{1}{\dot m_c c_c}\right)dA$$

5. Integrate from end 1 to end 2 with $U$, $c_h$, $c_c$ constant:
$$\ln\frac{T_{h2} - T_{c2}}{T_{h1} - T_{c1}} = -UA\left(\frac{1}{\dot m_h c_h} + \frac{1}{\dot m_c c_c}\right)$$

6. Eliminate the flow terms with the overall balances $\dot m_h c_h = q/(T_{h1} - T_{h2})$ and $\dot m_c c_c = q/(T_{c2} - T_{c1})$:
$$\ln\frac{T_{h2} - T_{c2}}{T_{h1} - T_{c1}} = -\frac{UA}{q}\left[(T_{h1} - T_{h2}) + (T_{c2} - T_{c1})\right] = \frac{UA}{q}\left[(T_{h2} - T_{c2}) - (T_{h1} - T_{c1})\right]$$

7. Solve for $q$:
$$q = UA\,\frac{(T_{h2} - T_{c2}) - (T_{h1} - T_{c1})}{\ln[(T_{h2} - T_{c2})/(T_{h1} - T_{c1})]} = UA\,\Delta T_m$$

**Counterflow.** Now the cold fluid flows the other way, so $dq = -\dot m_h c_h\,dT_h = -\dot m_c c_c\,dT_c$ (both temperatures fall in the direction of increasing $A$). Step 2 becomes $d(T_h-T_c) = -dq\,(1/\dot m_h c_h - 1/\dot m_c c_c)$ and the same steps give
$$q = UA\,\frac{\Delta t_2 - \Delta t_1}{\ln(\Delta t_2/\Delta t_1)}$$
with $\Delta t_1$ and $\Delta t_2$ the hot-minus-cold differences at the two ends ($\Delta t = T_1 - t_2$ at one end, $T_2 - t_1$ at the other). So one formula serves both: take $\Delta T$ at each end.

**Kern's form.** Kern and the slides write $\mathrm{LMTD} = (\Delta t_2 - \Delta t_1)/[2.3\log_{10}(\Delta t_2/\Delta t_1)]$; $2.3\log_{10} x = \ln x$, so it is the same number.

**Exam tip:** the profile of $\Delta T$ along the area is exponential, which is why the arithmetic mean over-estimates the driving force when the end differences are very unequal.`,
          answer: String.raw`$d(\Delta T)/\Delta T = -U(1/\dot m_hc_h + 1/\dot m_cc_c)\,dA$ → integrate and use the overall balances → $q = UA(\Delta T_2 - \Delta T_1)/\ln(\Delta T_2/\Delta T_1)$, valid for counterflow too with end differences.` },

        { id: "practice-heat-exchangers-P1b", label: "(b)", marks: "", topic: "heat-exchangers",
          sub: "Assumptions behind the LMTD", type: "theory",
          syllabus: "in", repeats: ["2013-14-Q4b", "2017-18-Q2b", "2020-21-Q3a"], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 1 p. 51; file 2 p. 50`,
          text: String.raw`List the assumptions made in deriving the LMTD. Which of them is usually the most serious in practice, and why?`,
          solution: String.raw`Assumptions (slides):
1. The exchanger is insulated from the surroundings: heat passes only between the hot and the cold fluid.
2. Axial conduction along the tubes is negligible.
3. Changes in kinetic and potential energy are negligible.
4. The specific heats of both fluids are constant.
5. The overall heat transfer coefficient $U$ is constant along the exchanger.

Also implied: steady state, and each fluid has a single temperature over its cross-section (well mixed) at any position.

**Most serious:** the constant-$U$ assumption. The film coefficients change along the exchanger because viscosity and thermal conductivity change with temperature (strongly for oils), and because of entrance effects. Kern handles the viscosity part by evaluating properties at the **caloric temperature** rather than the arithmetic mean.

**Constant $c_p$** fails when a fluid changes phase within the exchanger (desuperheating, condensing, subcooling in one shell). Then the exchanger is split into zones, each with its own LMTD.`,
          answer: String.raw`Insulated exchanger, no axial conduction, no KE/PE change, constant $c_p$, constant $U$. Constant $U$ is the weakest (temperature-dependent viscosity, entrance effects); Kern uses caloric temperatures to allow for it.` }
      ] },

    // ---------------------------------------------------------------- S2
    { id: "practice-heat-exchangers-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw`Compare parallel flow and counterflow for the terminal temperatures below (slide examples). Use $\mathrm{LMTD} = (\Delta t_2 - \Delta t_1)/\ln(\Delta t_2/\Delta t_1)$.`,
      parts: [
        { id: "practice-heat-exchangers-P2a", label: "(a)", marks: "", topic: "heat-exchangers",
          sub: "LMTD: counterflow vs parallel flow", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 2 pp. 1–5 (300→200°F hot, 100→150°F cold)`,
          text: String.raw`A hot fluid is cooled from 300°F to 200°F and a cold fluid is heated from 100°F to 150°F. Find the LMTD for counterflow and for parallel flow. Which arrangement needs less area for the same $U$ and duty?`,
          solution: String.raw`**Given:** $T_1 = 300$, $T_2 = 200$°F; $t_1 = 100$, $t_2 = 150$°F.

![Profiles for counterflow and parallel flow with the terminal differences](fig/practice-heat-exchangers-P2a-sol.svg)

1. **Counterflow** (hot inlet meets cold outlet):
$\Delta t_2 = T_1 - t_2 = 300 - 150 = 150$°F, $\Delta t_1 = T_2 - t_1 = 200 - 100 = 100$°F.
$$\mathrm{LMTD}_{cf} = \frac{150 - 100}{\ln(150/100)} = \frac{50}{0.4055} = 123.3\,°\mathrm{F}$$

2. **Parallel flow** (both inlets at the same end):
$\Delta t_2 = T_1 - t_1 = 300 - 100 = 200$°F, $\Delta t_1 = T_2 - t_2 = 200 - 150 = 50$°F.
$$\mathrm{LMTD}_{pf} = \frac{200 - 50}{\ln(200/50)} = \frac{150}{1.386} = 108.2\,°\mathrm{F}$$

3. Area ratio for the same $q$ and $U$ ($A = q/U\,\mathrm{LMTD}$):
$$\frac{A_{pf}}{A_{cf}} = \frac{123.3}{108.2} = 1.14$$

Counterflow gives the larger LMTD, so it needs about 12% less area (parallel flow needs 14% more). The slides quote 123.5 and 108°F.`,
          answer: String.raw`Counterflow LMTD = 123.3°F, parallel 108.2°F; counterflow needs ≈ 12% less area.` },

        { id: "practice-heat-exchangers-P2b", label: "(b)", marks: "", topic: "heat-exchangers",
          sub: "When parallel flow is impossible", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 2 pp. 6–8 (150→200°F cold variant)`,
          text: String.raw`The hot fluid is again cooled from 300°F to 200°F, but the cold fluid must now be heated from 150°F to 200°F. Find the LMTD for both arrangements and comment.`,
          solution: String.raw`![With a cold outlet of 200°F, parallel flow needs the outlets to meet (infinite area)](fig/practice-heat-exchangers-P2b-sol.svg)

1. **Counterflow:** $\Delta t_2 = 300 - 200 = 100$°F, $\Delta t_1 = 200 - 150 = 50$°F.
$$\mathrm{LMTD}_{cf} = \frac{100 - 50}{\ln 2} = 72.1\,°\mathrm{F}$$

2. **Parallel flow:** $\Delta t_2 = 300 - 150 = 150$°F, $\Delta t_1 = 200 - 200 = 0$°F.
$$\mathrm{LMTD}_{pf} = \frac{150 - 0}{\ln(150/0)} \to 0$$

An LMTD of zero means infinite area. In parallel flow the two outlets approach each other, and the cold outlet can never exceed (or even reach) the hot outlet. Here the cold fluid must leave at the hot outlet temperature, so **parallel flow is impossible**.

In counterflow the cold outlet faces the hot *inlet*, so $t_2$ can even exceed $T_2$ (a temperature cross is possible).`,
          answer: String.raw`Counterflow 72.1°F; parallel flow LMTD = 0 (infinite area): the duty is impossible in parallel flow.` },

        { id: "practice-heat-exchangers-P2c", label: "(c)", marks: "", topic: "heat-exchangers",
          sub: "Steam heater: does flow direction matter?", type: "numerical",
          syllabus: "in", repeats: ["2018-19-Q4a"], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 2 pp. 9–12 (cold fluid 100→275°F, steam at 300°F)`,
          text: String.raw`A cold fluid is heated from 100°F to 275°F by saturated steam condensing at 300°F. Should the exchanger be arranged for parallel flow or counterflow?`,
          solution: String.raw`![Isothermal condensing steam: both arrangements give the same LMTD](fig/practice-heat-exchangers-P2c-sol.svg)

The steam condenses at constant temperature, $T_1 = T_2 = 300$°F.

1. **Counterflow:** $\Delta t_2 = 300 - 100 = 200$°F, $\Delta t_1 = 300 - 275 = 25$°F.
2. **Parallel flow:** $\Delta t_2 = 300 - 100 = 200$°F, $\Delta t_1 = 300 - 275 = 25$°F.

The end differences are the same pair, so
$$\mathrm{LMTD} = \frac{200 - 25}{\ln(200/25)} = \frac{175}{2.079} = 84.2\,°\mathrm{F}$$
for either arrangement.

**Conclusion:** when one fluid stays at constant temperature, the heat transfer rate does not depend on the flow pattern. For the same reason the correction factor is $F = 1$ for any multipass arrangement when one stream is condensing or boiling isothermally. Choose the arrangement on mechanical grounds (steam in from the top, condensate drained from the bottom).`,
          answer: String.raw`LMTD = 84.2°F for both: with isothermal steam the flow arrangement does not matter ($F = 1$).` }
      ] },

    // ---------------------------------------------------------------- S3
    { id: "practice-heat-exchangers-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-heat-exchangers-P3", label: "", marks: "", topic: "heat-exchangers",
          sub: "LMTD correction factor F (1-2 exchanger)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 3 pp. 1–4 (water 68 kg/min, oil, U = 320 W/m²K; Holman Fig. 10-8)`,
          text: String.raw`Water at 68 kg/min is heated from 35 to 75°C by an oil with specific heat 1.9 kJ/kg·°C. The oil enters at 110°C and leaves at 75°C. The water makes one shell pass and the oil two tube passes, and the overall heat transfer coefficient is 320 W/m²·°C. Calculate the heat-exchanger area.`,
          solution: String.raw`**Given:** water (shell) $\dot m = 68/60 = 1.133$ kg/s, 35 → 75°C; oil (tubes) $c = 1.9$ kJ/kg·°C, 110 → 75°C; 1 shell pass, 2 tube passes; $U = 320$ W/m²·°C.

**Find:** area $A$.

**Assumptions:** $c_{p,water} = 4.18$ kJ/kg·°C (the value implied on the slide); constant $U$; no heat loss.

![1-2 exchanger with water in the shell and oil in the tubes](fig/practice-heat-exchangers-P3.svg)

1. Heat duty from the water side:
$$q = \dot m c_p\,\Delta t = 1.133(4180)(75 - 35) = 1.895\times10^5\ \mathrm{W}$$
(The oil flow follows: $\dot m_{oil} = 1.895\times10^5/[1900(110 - 75)] = 2.85$ kg/s.)

2. LMTD for a counterflow double pipe with the same terminal temperatures: hot end $110 - 75 = 35$°C, cold end $75 - 35 = 40$°C.
$$\Delta T_m = \frac{35 - 40}{\ln(35/40)} = 37.44\,°\mathrm{C}$$

3. Uncorrected area (true counterflow):
$$A_{cf} = \frac{q}{U\,\Delta T_m} = \frac{1.895\times10^5}{320(37.44)} = 15.8\ \mathrm{m^2}$$

4. Correction factor, Holman Fig. 10-8 (one shell pass, 2, 4, … tube passes). Holman's chart labels the shell fluid $T$ and the tube fluid $t$, so as on the slide: $T_1 = 35$, $T_2 = 75$ (water, shell); $t_1 = 110$, $t_2 = 75$ (oil, tubes).
$$P = \frac{t_2 - t_1}{T_1 - t_1} = \frac{75 - 110}{35 - 110} = 0.467,\qquad R = \frac{T_1 - T_2}{t_2 - t_1} = \frac{35 - 75}{75 - 110} = 1.143$$
The chart gives $F \approx 0.81$. (The analytical 1-2 formula gives 0.802. Swapping the roles, $P = 40/75 = 0.533$, $R = 35/40 = 0.875$, gives the same $F$.)

5. Corrected area:
$$A = \frac{q}{U F\,\Delta T_m} = \frac{1.895\times10^5}{320(0.81)(37.44)} = 19.5\ \mathrm{m^2}\ (210\ \mathrm{ft^2})$$

**Check:** $F = 0.81 > 0.75$, so a 1-2 exchanger is acceptable. The multipass arrangement costs about 23% extra area over true counterflow.`,
          answer: String.raw`$q = 1.895\times10^5$ W; LMTD = 37.44°C; $P = 0.467$, $R = 1.143$, $F \approx 0.81$; $A \approx 19.5$ m² (15.8 m² if it were pure counterflow).` }
      ] },

    // ---------------------------------------------------------------- S4
    { id: "practice-heat-exchangers-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-heat-exchangers-P4a", label: "(a)", marks: "", topic: "heat-exchangers",
          sub: "Overall U based on inside and outside areas; h_io", type: "derivation",
          syllabus: "in", repeats: ["2018-19-Q8b"], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 2 pp. 13–17 (resistances, U_i, U_o, h_io, fouling)`,
          text: String.raw`For the inner pipe of a double-pipe exchanger (inside radius $r_i$, outside radius $r_o$, wall conductivity $k$, length $L$), write the thermal resistances in series and obtain $U_i$ and $U_o$. Explain why Kern uses $h_{io} = h_i\,(ID/OD)$ and $U = h_{io}h_o/(h_{io}+h_o)$, and how fouling is added.`,
          solution: String.raw`![Inner pipe cross-section and the series resistance circuit](fig/practice-heat-exchangers-P4a-sol.svg)

1. Resistances in series from the inner fluid A to the outer fluid B:
$$q = \frac{T_A - T_B}{\dfrac{1}{h_iA_i} + \dfrac{\ln(r_o/r_i)}{2\pi kL} + \dfrac{1}{h_oA_o}}$$
with $A_i = 2\pi r_iL$ and $A_o = 2\pi r_oL$.

2. Define $q = U_iA_i\,\Delta T = U_oA_o\,\Delta T$, i.e. $1/(U_iA_i) = 1/(U_oA_o) = R_{total}$:
$$U_i = \frac{1}{\dfrac{1}{h_i} + \dfrac{A_i\ln(r_o/r_i)}{2\pi kL} + \dfrac{A_i}{A_o}\dfrac{1}{h_o}},\qquad U_o = \frac{1}{\dfrac{A_o}{A_i}\dfrac{1}{h_i} + \dfrac{A_o\ln(r_o/r_i)}{2\pi kL} + \dfrac{1}{h_o}}$$
$U_i \ne U_o$, but $U_iA_i = U_oA_o$.

3. **Reference surface.** In double-pipe (and shell-and-tube) work it is customary to use the *outside* surface of the inner pipe. The inside coefficient is then referred to that surface:
$$h_{io} = h_i\frac{A_i}{A_o} = h_i\frac{ID}{OD}$$
so $1/(h_iA_i) = 1/(h_{io}A_o)$.

4. For a metal wall of high $k$ the wall term is negligible, so
$$\frac{1}{U_C} = \frac{1}{h_{io}} + \frac{1}{h_o}\quad\Rightarrow\quad U_C = \frac{h_{io}h_o}{h_{io} + h_o}$$
This is the **clean** coefficient. For a very thin wall $A_i \approx A_o$ and $1/U \approx 1/h_i + 1/h_o$.

5. **Fouling.** Deposits add resistances $R_{di}$ (inside) and $R_{do}$ (outside). Kern lumps them as $R_d = R_{di} + R_{do}$:
$$\frac{1}{U_D} = \frac{1}{U_C} + R_d,\qquad R_d = \frac{U_C - U_D}{U_CU_D}\ \ \mathrm{(h\,ft^2\,°F/Btu)}$$
$U_D$ (design or dirty coefficient) is used to size the area, so the exchanger still meets the duty after deposits build up.`,
          answer: String.raw`$1/(U_oA_o) = 1/(h_iA_i) + \ln(r_o/r_i)/(2\pi kL) + 1/(h_oA_o)$; Kern: $h_{io} = h_i\,ID/OD$, $U_C = h_{io}h_o/(h_{io}+h_o)$, $1/U_D = 1/U_C + R_d$.` },

        { id: "practice-heat-exchangers-P4b", label: "(b)", marks: "", topic: "heat-exchangers",
          sub: "Clean and dirty U for a 1¼ in IPS inner pipe", type: "numerical",
          syllabus: "in", repeats: ["2018-19-Q8b"], origin: "slides",
          ref: String.raw`Variation with fresh numbers of slides HX Part 1, file 2 pp. 13–17`,
          text: String.raw`The inner pipe of a double-pipe exchanger is 1¼ in IPS schedule 40 steel (OD 1.66 in, ID 1.38 in, $k = 26$ Btu/h·ft·°F). The film coefficients are $h_i = 250$ (based on the inside surface) and $h_o = 180$ Btu/h·ft²·°F. A fouling factor of 0.001 h·ft²·°F/Btu is to be provided for each stream. Find (i) $h_{io}$, (ii) the clean coefficient $U_C$ by Kern's method and with the wall resistance included, (iii) the design coefficient $U_D$, and (iv) the percentage loss of $U$ due to fouling.`,
          solution: String.raw`**Given:** $D_o = 1.66/12 = 0.1383$ ft, $D_i = 1.38/12 = 0.1150$ ft; $h_i = 250$, $h_o = 180$; $R_{di} = R_{do} = 0.001$.

1. Inside coefficient referred to the outside surface:
$$h_{io} = h_i\frac{ID}{OD} = 250\times\frac{1.38}{1.66} = 207.8\ \mathrm{Btu/h\,ft^2\,°F}$$

2. Clean coefficient, Kern (wall neglected):
$$U_C = \frac{h_{io}h_o}{h_{io} + h_o} = \frac{207.8(180)}{207.8 + 180} = 96.5\ \mathrm{Btu/h\,ft^2\,°F}$$

3. Wall resistance referred to the outside area:
$$\frac{D_o\ln(D_o/D_i)}{2k} = \frac{0.1383\ln(1.66/1.38)}{2(26)} = 0.00049\ \mathrm{h\,ft^2\,°F/Btu}$$
$$U_o = \left[\frac{1}{207.8} + 0.00049 + \frac{1}{180}\right]^{-1} = 92.1\ \mathrm{Btu/h\,ft^2\,°F}$$
The wall changes $U$ by under 5%, which is why Kern drops it for steel or better.

4. Design coefficient (Kern, $R_d = 0.001 + 0.001 = 0.002$):
$$\frac{1}{U_D} = \frac{1}{96.5} + 0.002\quad\Rightarrow\quad U_D = 80.9\ \mathrm{Btu/h\,ft^2\,°F}$$
(If the inside fouling is also referred to the outside area, $(D_o/D_i)R_{di}$, and the wall is kept: $U_D = 76.6$.)

5. Loss due to fouling:
$$\frac{U_C - U_D}{U_C} = \frac{96.5 - 80.9}{96.5} = 16\%$$
so about 19% more area must be installed ($96.5/80.9 = 1.19$).`,
          answer: String.raw`$h_{io} = 207.8$; $U_C = 96.5$ (92.1 with the wall); $U_D = 80.9$ Btu/h·ft²·°F; fouling costs 16% of $U$ (≈ 19% extra area).` }
      ] },

    // ---------------------------------------------------------------- S5
    { id: "practice-heat-exchangers-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-heat-exchangers-P5a", label: "(a)", marks: "", topic: "heat-exchangers",
          sub: "Shell-side equivalent diameter: square and triangular pitch", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 1 pp. 23–27; Kern Fig. 28 inset`,
          text: String.raw`Derive the shell-side equivalent diameter $D_e = 4\times$(flow area)/(wetted perimeter) for square and triangular tube layouts, and evaluate it for 1 in OD tubes on a 1¼ in pitch (both layouts) and for 1¼ in OD tubes on a $1\tfrac{9}{16}$ in triangular pitch. Compare with the values in the inset of Kern Fig. 28.`,
          solution: String.raw`![Unit cells for square and triangular pitch](fig/practice-heat-exchangers-P5a-sol.svg)

**Square pitch.** The unit cell is a square of side $P_T$ with one tube (four quarter-tubes) in it. Free area $= P_T^2 - \pi d_o^2/4$; wetted perimeter $= \pi d_o$.
$$D_e = \frac{4\left(P_T^2 - \pi d_o^2/4\right)}{\pi d_o}$$

**Triangular pitch.** The unit cell is an equilateral triangle of side $P_T$ (height $0.86P_T$) containing half a tube (three 60° sectors). Free area $= \tfrac12P_T(0.86P_T) - \tfrac12\pi d_o^2/4$; wetted perimeter $= \tfrac12\pi d_o$.
$$D_e = \frac{4\left(\tfrac12P_T\times0.86P_T - \tfrac12\pi d_o^2/4\right)}{\tfrac12\pi d_o}$$

**Numbers** (inches):

| Layout | Calculation | $D_e$ (in) | Kern Fig. 28 |
|---|---|---|---|
| 1 in on 1¼ in square | $4(1.5625 - 0.7854)/\pi(1)$ | 0.99 | 0.99 |
| 1 in on 1¼ in triangular | $4(0.6719 - 0.3927)/(0.5\pi)$ | 0.71 | 0.72 |
| 1¼ in on $1\tfrac{9}{16}$ in triangular | $4(1.0498 - 0.6136)/(0.625\pi)$ | 0.89 | 0.91 |

The small differences for triangular pitch come from using 0.86 for $\sin 60° = 0.866$ and from rounding in Kern's table.

**Why it matters:** for the same tube and pitch, triangular pitch packs more tubes into a shell and gives a smaller $D_e$, higher shell-side $h$ and higher pressure drop; square pitch is easier to clean (straight cleaning lanes).`,
          answer: String.raw`Square: $D_e = 4(P_T^2 - \pi d_o^2/4)/(\pi d_o)$ → 0.99 in; triangular: $4(0.43P_T^2 - \pi d_o^2/8)/(\pi d_o/2)$ → 0.71 in (1 in on 1¼) and 0.89 in (1¼ on $1\tfrac9{16}$).` },

        { id: "practice-heat-exchangers-P5b", label: "(b)", marks: "", topic: "heat-exchangers",
          sub: "Annulus D_e for heat transfer and D'_e for pressure drop", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 2 pp. 22, 25, 32 (Kern Eqs. 6.3, 6.4 and Table 6.2)`,
          text: String.raw`A double-pipe exchanger is made of 3 in × 2 in IPS schedule 40 pipe (3 in pipe ID = 3.068 in; 2 in pipe OD = 2.38 in, ID = 2.067 in). Find the flow areas of the annulus and the inner pipe, the annulus equivalent diameter for heat transfer $D_e$ and for pressure drop $D'_e$, and explain why they differ.`,
          solution: String.raw`**Given:** $D_2 = 3.068$ in (outer pipe ID), $D_1 = 2.38$ in (inner pipe OD), inner pipe ID $D = 2.067$ in.

![Annulus of the 3 in × 2 in IPS double pipe](fig/practice-heat-exchangers-P5b.svg)

1. Flow areas:
$$a_a = \frac{\pi(D_2^2 - D_1^2)}{4} = \frac{\pi(9.413 - 5.664)}{4} = 2.94\ \mathrm{in^2},\qquad a_p = \frac{\pi D^2}{4} = \frac{\pi(2.067)^2}{4} = 3.36\ \mathrm{in^2}$$

2. Heat transfer (only the inner pipe's outer surface is heated, so the heated perimeter is $\pi D_1$):
$$D_e = \frac{4\times\pi(D_2^2 - D_1^2)/4}{\pi D_1} = \frac{D_2^2 - D_1^2}{D_1} = \frac{9.413 - 5.664}{2.38} = 1.57\ \mathrm{in}$$

3. Pressure drop (friction acts on both walls, wetted perimeter $\pi(D_2 + D_1)$):
$$D'_e = \frac{4\times\pi(D_2^2 - D_1^2)/4}{\pi(D_2 + D_1)} = D_2 - D_1 = 3.068 - 2.38 = 0.69\ \mathrm{in}$$

These agree with Kern Table 6.2 for 3 × 2 in pipe (annulus 2.93 in², pipe 3.35 in², $d_e = 1.57$ in, $d'_e = 0.69$ in).

4. **Why they differ:** $D_e$ uses the *heat-transfer* perimeter (the outer pipe wall is insulated and transfers no heat), while $D'_e$ uses the *frictional wetted* perimeter, which includes the outer pipe's inner surface. Use $D_e$ in $Re_a$ for $j_H$ and $h_o$; use $D'_e$ in $Re'_a$ and in the friction equation for $\Delta P_a$.`,
          answer: String.raw`$a_a = 2.94$ in², $a_p = 3.36$ in²; $D_e = (D_2^2 - D_1^2)/D_1 = 1.57$ in (heated perimeter); $D'_e = D_2 - D_1 = 0.69$ in (wetted perimeter).` }
      ] },

    // ---------------------------------------------------------------- S6
    { id: "practice-heat-exchangers-P6", q: 6, section: "S", compulsory: false,
      stem: String.raw`*Kern Example 6.1, as worked in the slides.* 9820 lb/h of cold benzene is to be heated from 80 to 120°F with hot toluene, which is cooled from 160 to 100°F. The specific gravities at 68°F are 0.88 (benzene) and 0.87 (toluene). A fouling factor of 0.001 should be provided for each stream, and the allowable pressure drop on each stream is 10.0 psi. A number of 20-ft hairpins of 2 in × 1¼ in IPS pipe are available.

Properties (Kern charts, as read in the slides):

| | Benzene at 100°F | Toluene at 130°F |
|---|---|---|
| $c$, Btu/lb·°F (Fig. 2) | 0.425 | 0.44 |
| $\mu$, cP (Fig. 14) | 0.50 | 0.41 |
| $k$, Btu/h·ft·°F (Table 4) | 0.091 | 0.085 |

Pipe data (Kern Table 11): 1¼ in IPS OD 1.66 in, ID 1.38 in, 0.435 ft² outside surface per ft; 2 in IPS ID 2.067 in.`,
      parts: [
        { id: "practice-heat-exchangers-P6a", label: "(a)", marks: "", topic: "heat-exchangers",
          sub: "Double pipe (Kern ch. 6): number of hairpins", type: "numerical",
          syllabus: "in", repeats: ["2018-19-Q2"], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 2 pp. 26–44 (Kern Ex. 6.1, thermal design)`,
          text: String.raw`How many hairpins are required? What dirt factor does the selected exchanger actually provide?`,
          solution: String.raw`![Benzene in the inner pipe, toluene in the annulus of a 20 ft hairpin](fig/practice-heat-exchangers-P6.svg)

**Find:** number of 20-ft hairpins, actual $R_d$.

**Assumptions:** counterflow; $\phi = (\mu/\mu_w)^{0.14} = 1$ (both liquids below 1 cP); properties at the arithmetic means, since neither fluid is viscous at the cold terminal and the ranges are moderate.

### 1. Heat balance
$$Q = wc(t_2 - t_1) = 9820(0.425)(120 - 80) = 167{,}000\ \mathrm{Btu/h}$$
$$W = \frac{Q}{C(T_1 - T_2)} = \frac{167{,}000}{0.44(60)} = 6330\ \mathrm{lb/h\ toluene}$$

### 2. LMTD (counterflow)
Hot end $160 - 120 = 40$°F; cold end $100 - 80 = 20$°F.
$$\mathrm{LMTD} = \frac{40 - 20}{\ln(40/20)} = 28.8\,°\mathrm{F}$$

### 3. Which stream where
$D_2 = 2.067/12 = 0.1725$ ft, $D_1 = 1.66/12 = 0.138$ ft, $D = 1.38/12 = 0.115$ ft.
$$a_a = \frac{\pi(D_2^2 - D_1^2)}{4} = 0.00826\ \mathrm{ft^2},\qquad a_p = \frac{\pi D^2}{4} = 0.0104\ \mathrm{ft^2}$$
The inner pipe has the larger flow area, so the larger stream (benzene) goes in the pipe and toluene in the annulus.

### 4. Annulus: hot toluene
$$D_e = \frac{D_2^2 - D_1^2}{D_1} = \frac{0.1725^2 - 0.138^2}{0.138} = 0.0762\ \mathrm{ft}$$
$$G_a = \frac{W}{a_a} = \frac{6330}{0.00826} = 767{,}000\ \mathrm{lb/h\,ft^2},\qquad \mu = 0.41(2.42) = 0.99\ \mathrm{lb/ft\,h}$$
$$Re_a = \frac{D_eG_a}{\mu} = \frac{0.0762(767{,}000)}{0.99} = 59{,}000$$
Kern Fig. 24: $j_H = 167$. $(c\mu/k)^{1/3} = (0.44\times0.99/0.085)^{1/3} = 1.725$.
$$h_o = j_H\frac{k}{D_e}\left(\frac{c\mu}{k}\right)^{1/3}\phi = 167\times\frac{0.085}{0.0762}\times1.725\times1 = 323\ \mathrm{Btu/h\,ft^2\,°F}$$

### 5. Inner pipe: cold benzene
$$G_p = \frac{w}{a_p} = \frac{9820}{0.0104} = 943{,}000,\qquad \mu = 0.50(2.42) = 1.21\ \mathrm{lb/ft\,h}$$
$$Re_p = \frac{DG_p}{\mu} = \frac{0.115(943{,}000)}{1.21} = 89{,}500$$
Kern Fig. 24: $j_H = 236$. $(c\mu/k)^{1/3} = (0.425\times1.21/0.091)^{1/3} = 1.78$.
$$h_i = 236\times\frac{0.091}{0.115}\times1.78 = 333,\qquad h_{io} = h_i\frac{ID}{OD} = 333\times\frac{1.38}{1.66} = 276\ \mathrm{Btu/h\,ft^2\,°F}$$

### 6. Clean and design coefficients
$$U_C = \frac{h_{io}h_o}{h_{io} + h_o} = \frac{276(323)}{276 + 323} = 149\ \mathrm{Btu/h\,ft^2\,°F}$$
$$\frac{1}{U_D} = \frac{1}{U_C} + R_d = \frac{1}{149} + 0.002\quad\Rightarrow\quad U_D = 115\ \mathrm{Btu/h\,ft^2\,°F}$$

### 7. Surface and hairpins
$$A = \frac{Q}{U_D\,\mathrm{LMTD}} = \frac{167{,}000}{115(28.8)} = 50.5\ \mathrm{ft^2}$$
Length $= 50.5/0.435 = 116$ lin ft. One 20-ft hairpin has two 20-ft legs = 40 lin ft, so $116/40 = 2.9$: use **three 20-ft hairpins in series** (120 lin ft).

### 8. Actual dirt factor
Surface supplied $= 120(0.435) = 52.2$ ft².
$$U_D = \frac{167{,}000}{52.2(28.8)} = 111,\qquad R_d = \frac{U_C - U_D}{U_CU_D} = \frac{149 - 111}{149(111)} = 0.0023$$
slightly more than the 0.002 required.

**Exam tip:** with the curve fit $j_H = 0.027Re^{0.8}$ instead of the chart readings you get 176 and 248, $U_C \approx 157$ and $A \approx 48.5$ ft²: still three hairpins.`,
          answer: String.raw`$Q = 167{,}000$ Btu/h, $W = 6330$ lb/h; LMTD = 28.8°F; $h_o = 323$, $h_{io} = 276$, $U_C = 149$, $U_D = 115$; $A = 50.5$ ft² = 116 ft → **3 hairpins**; actual $R_d = 0.0023$.` },

        { id: "practice-heat-exchangers-P6b", label: "(b)", marks: "", topic: "heat-exchangers",
          sub: "Double pipe pressure drops (annulus and pipe)", type: "numerical",
          syllabus: "in", repeats: ["2018-19-Q2"], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 2 pp. 45–48 (Kern Ex. 6.1, pressure drop)`,
          text: String.raw`Calculate the pressure drop of each stream in the three-hairpin exchanger and check it against the allowable 10 psi. Use $f = 0.0035 + 0.264/(DG/\mu)^{0.42}$ and $\Delta F = 4fG^2L/(2g\rho^2D)$ with $g = 4.18\times10^8$ ft/h², and one velocity head per hairpin for the annulus entrance and exit losses.`,
          solution: String.raw`**Given:** total length $L = 120$ ft; $\rho = 62.5s$: toluene $0.87(62.5) = 54.3$ lb/ft³, benzene $0.88(62.5) = 55.0$ lb/ft³.

### Annulus (toluene)
1. Equivalent diameter for friction:
$$D'_e = D_2 - D_1 = 0.1725 - 0.138 = 0.0345\ \mathrm{ft}$$
2. $$Re'_a = \frac{D'_eG_a}{\mu} = \frac{0.0345(767{,}000)}{0.99} = 26{,}700$$
3. $$f = 0.0035 + \frac{0.264}{26{,}700^{0.42}} = 0.0071$$
4. Friction head:
$$\Delta F_a = \frac{4fG_a^2L}{2g\rho^2D'_e} = \frac{4(0.0071)(767{,}000)^2(120)}{2(4.18\times10^8)(54.3)^2(0.0345)} = 23.7\ \mathrm{ft}$$
5. Entrance and exit losses, one velocity head per hairpin:
$$V = \frac{G_a}{3600\rho} = \frac{767{,}000}{3600(54.3)} = 3.92\ \mathrm{ft/s},\qquad F_l = 3\left(\frac{V^2}{2g'}\right) = 3\times\frac{3.92^2}{2(32.2)} = 0.72\ \mathrm{ft}$$
6. $$\Delta P_a = \frac{(\Delta F_a + F_l)\rho}{144} = \frac{(23.7 + 0.7)(54.3)}{144} = 9.2\ \mathrm{psi}$$
below 10 psi ✓ (the slides get 23.5 ft and 9.2 psi).

### Inner pipe (benzene)
1. $Re_p = 89{,}500$:
$$f = 0.0035 + \frac{0.264}{89{,}500^{0.42}} = 0.0057$$
2. $$\Delta F_p = \frac{4(0.0057)(943{,}000)^2(120)}{2(4.18\times10^8)(55.0)^2(0.115)} = 8.4\ \mathrm{ft}$$
3. $$\Delta P_p = \frac{8.4(55.0)}{144} = 3.2\ \mathrm{psi}$$
below 10 psi ✓ (no return loss is added for the inner pipe, as in the slides).

**Conclusion:** three 20-ft hairpins satisfy the heat load ($R_d = 0.0023 \ge 0.002$) and both pressure drops.

**Why it matters:** the annulus uses $D'_e$, about half of $D_e$, so its friction is much higher than you would get with $D_e$; the annulus is the side that limits the design here.`,
          answer: String.raw`Annulus: $Re'_a = 26{,}700$, $f = 0.0071$, $\Delta F_a = 23.7$ ft + 0.7 ft → $\Delta P_a \approx 9.2$ psi; pipe: $f = 0.0057$, $\Delta P_p \approx 3.2$ psi. Both < 10 psi.` }
      ] },

    // ---------------------------------------------------------------- S7
    { id: "practice-heat-exchangers-P7", q: 7, section: "S", compulsory: false,
      stem: String.raw`*Variation of Kern Ex. 6.1 with fresh numbers.* 12,000 lb/h of cooling water is to be heated from 80 to 110°F by cooling 9000 lb/h of a light oil that enters at 175°F. 20-ft hairpins of 3 in × 2 in IPS pipe are available (3 in pipe ID 3.068 in; 2 in pipe OD 2.38 in, ID 2.067 in, outside surface 0.622 ft²/ft). Provide a total dirt factor of 0.003 h·ft²·°F/Btu. The allowable pressure drop is 10 psi on each stream. Take $\phi = 1$ for both streams.

| Property | Water at 95°F | Oil at 135°F |
|---|---|---|
| $c$, Btu/lb·°F | 1.00 | 0.50 |
| $\mu$, cP | 0.72 | 1.20 |
| $k$, Btu/h·ft·°F | 0.36 | 0.078 |
| $s$ | 0.99 | 0.80 |`,
      parts: [
        { id: "practice-heat-exchangers-P7a", label: "(a)", marks: "", topic: "heat-exchangers",
          sub: "Double-pipe design: hairpins (fresh numbers)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Variation of slides HX Part 1, file 2 pp. 20–44 (double-pipe calculation steps)`,
          text: String.raw`Decide which fluid goes in the inner pipe, then find $h_{io}$, $h_o$, $U_C$, $U_D$ and the number of hairpins. What dirt factor does the selected exchanger provide?`,
          solution: String.raw`**Given:** see the table. Water properties are at its mean, $(80+110)/2 = 95$°F (CoolProp: 0.719 cP, 0.359 Btu/h·ft·°F); oil properties at its mean temperature, found below.

**Assumptions:** counterflow; $\phi = 1$; arithmetic-mean properties (moderate ranges, both fluids thin); Kern Fig. 24 read with its turbulent line $j_H \approx 0.027Re^{0.8}$.

![Water in the inner pipe, oil in the annulus of a 3 in × 2 in hairpin](fig/practice-heat-exchangers-P7.svg)

### 1. Heat balance
$$Q = wc(t_2 - t_1) = 12{,}000(1.0)(110 - 80) = 360{,}000\ \mathrm{Btu/h}$$
$$T_2 = T_1 - \frac{Q}{WC} = 175 - \frac{360{,}000}{9000(0.50)} = 95\,°\mathrm{F}$$
Oil mean temperature $= (175 + 95)/2 = 135$°F, as tabulated.

### 2. LMTD (counterflow)
Hot end $175 - 110 = 65$°F; cold end $95 - 80 = 15$°F.
$$\mathrm{LMTD} = \frac{65 - 15}{\ln(65/15)} = 34.1\,°\mathrm{F}$$

### 3. Allocation
$a_p = \pi(2.067/12)^2/4 = 0.0233$ ft² and $a_a = \pi[(3.068/12)^2 - (2.38/12)^2]/4 = 0.0204$ ft². The pipe has the larger area, so the larger stream, **water, goes in the inner pipe** (it is also the fouling stream and the pipe is easier to clean). Oil goes in the annulus.

### 4. Annulus (oil)
$$D_e = \frac{D_2^2 - D_1^2}{D_1} = \frac{0.2557^2 - 0.1983^2}{0.1983} = 0.1312\ \mathrm{ft}$$
$$G_a = \frac{9000}{0.0204} = 4.40\times10^5\ \mathrm{lb/h\,ft^2},\qquad \mu = 1.20(2.42) = 2.90\ \mathrm{lb/ft\,h}$$
$$Re_a = \frac{0.1312(4.40\times10^5)}{2.90} = 19{,}900\quad\Rightarrow\quad j_H \approx 74$$
$(c\mu/k)^{1/3} = (0.50\times2.90/0.078)^{1/3} = 2.65$
$$h_o = 74\times\frac{0.078}{0.1312}\times2.65 = 117\ \mathrm{Btu/h\,ft^2\,°F}$$

### 5. Inner pipe (water)
$$G_p = \frac{12{,}000}{0.0233} = 5.15\times10^5,\qquad \mu = 0.72(2.42) = 1.74\ \mathrm{lb/ft\,h}$$
$$Re_p = \frac{0.1723(5.15\times10^5)}{1.74} = 50{,}900\quad\Rightarrow\quad j_H \approx 157$$
$(c\mu/k)^{1/3} = (1.0\times1.74/0.36)^{1/3} = 1.69$
$$h_i = 157\times\frac{0.36}{0.1723}\times1.69 = 556,\qquad h_{io} = 556\times\frac{2.067}{2.38} = 483\ \mathrm{Btu/h\,ft^2\,°F}$$
Water velocity $V = G_p/(3600\rho) = 5.15\times10^5/(3600\times62.0) = 2.3$ ft/s (reasonable).

### 6. Coefficients
$$U_C = \frac{483(117)}{483 + 117} = 94.1,\qquad \frac{1}{U_D} = \frac{1}{94.1} + 0.003\ \Rightarrow\ U_D = 73.4\ \mathrm{Btu/h\,ft^2\,°F}$$
The oil film controls ($h_o \ll h_{io}$).

### 7. Area and hairpins
$$A = \frac{Q}{U_D\,\mathrm{LMTD}} = \frac{360{,}000}{73.4(34.1)} = 144\ \mathrm{ft^2},\qquad L = \frac{144}{0.622} = 231\ \mathrm{lin\ ft}$$
$231/40 = 5.8$, so use **six 20-ft hairpins** (240 lin ft, 149.3 ft²).

### 8. Actual dirt factor
$$U_D = \frac{360{,}000}{149.3(34.1)} = 70.7,\qquad R_d = \frac{94.1 - 70.7}{94.1(70.7)} = 0.0035 > 0.003\ ✓$$
(With five hairpins $R_d$ would be only 0.0012.)`,
          answer: String.raw`Water in the pipe. $Q = 360{,}000$ Btu/h, oil leaves at 95°F; LMTD = 34.1°F; $h_o \approx 117$, $h_{io} \approx 483$, $U_C = 94.1$, $U_D = 73.4$; $A = 144$ ft² → **6 hairpins**, actual $R_d = 0.0035$.` },

        { id: "practice-heat-exchangers-P7b", label: "(b)", marks: "", topic: "heat-exchangers",
          sub: "Double-pipe pressure drops (fresh numbers)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides",
          ref: String.raw`Variation of slides HX Part 1, file 2 pp. 45–48`,
          text: String.raw`Check the pressure drop of both streams in the six-hairpin exchanger.`,
          solution: String.raw`**Given:** $L = 6\times40 = 240$ ft; $\rho_{oil} = 0.80(62.5) = 50.0$ lb/ft³, $\rho_{water} = 62.0$ lb/ft³; $g = 4.18\times10^8$ ft/h².

### Annulus (oil)
1. $D'_e = D_2 - D_1 = 0.2557 - 0.1983 = 0.0573$ ft.
$$Re'_a = \frac{0.0573(4.40\times10^5)}{2.90} = 8690,\qquad f = 0.0035 + \frac{0.264}{8690^{0.42}} = 0.00935$$
2. $$\Delta F_a = \frac{4fG_a^2L}{2g\rho^2D'_e} = \frac{4(0.00935)(4.40\times10^5)^2(240)}{2(4.18\times10^8)(50.0)^2(0.0573)} = 14.5\ \mathrm{ft}$$
3. $V = 4.40\times10^5/(3600\times50.0) = 2.45$ ft/s; $F_l = 6(2.45^2)/(2\times32.2) = 0.56$ ft.
4. $$\Delta P_a = \frac{(14.5 + 0.56)(50.0)}{144} = 5.2\ \mathrm{psi} < 10\ ✓$$

### Inner pipe (water)
1. $Re_p = 50{,}900$: $f = 0.0035 + 0.264/50{,}900^{0.42} = 0.00628$.
2. $$\Delta F_p = \frac{4(0.00628)(5.15\times10^5)^2(240)}{2(4.18\times10^8)(62.0)^2(0.1723)} = 2.9\ \mathrm{ft},\qquad \Delta P_p = \frac{2.9(62.0)}{144} = 1.2\ \mathrm{psi} < 10\ ✓$$

**Conclusion:** six hairpins of 3 × 2 in IPS meet the duty and both pressure drops, with plenty of margin on the water side. If more oil-side $h$ were wanted, a smaller annulus (for example 2½ × 1¼ in) would raise $G_a$, at the cost of a higher $\Delta P_a$.`,
          answer: String.raw`Oil (annulus): $Re'_a = 8690$, $f = 0.0094$, $\Delta F_a = 14.5$ ft + 0.56 ft → $\Delta P_a \approx 5.2$ psi; water (pipe): $\Delta P_p \approx 1.2$ psi. Both acceptable.` }
      ] },

    // ---------------------------------------------------------------- S8
    { id: "practice-heat-exchangers-P8", q: 8, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-heat-exchangers-P8", label: "", marks: "", topic: "heat-exchangers",
          sub: "Temperature profiles: sensible and phase-change cases", type: "sketch",
          syllabus: "in", repeats: ["2011-12-Q3c", "2014-15-Q5d", "2016-17-Q3b"], origin: "slides",
          ref: String.raw`Slides HX Part 1, file 1 pp. 42–45 (temperature profiles)`,
          text: String.raw`Sketch the temperature profiles (temperature vs. length or area) in a heat exchanger for: (i) parallel flow; (ii) counterflow, without phase change; (iii) a condensing vapour heating a liquid; (iv) a hot liquid boiling a liquid; (v) both fluids changing phase (condensing against evaporating); (vi) a superheated vapour that is desuperheated, condensed and subcooled while heating a cold liquid in counterflow. State what each profile means for the LMTD.`,
          solution: String.raw`![Temperature profiles for the six cases](fig/practice-heat-exchangers-P8-sol.svg)

All sketches: temperature on the vertical axis, length (or area) from 0 to $L$ on the horizontal axis, hot curve above the cold curve.

1. **Parallel flow.** Both fluids enter at $x = 0$. The hot curve falls and the cold curve rises; both are concave and approach each other. The gap is largest at the inlet and smallest at the outlet, and $t_2 < T_2$ always.

2. **Counterflow.** The hot fluid enters at $x = 0$ and the cold fluid at $x = L$. The two curves run roughly parallel. If $WC = wc$ they are straight parallel lines (constant $\Delta T$, LMTD = $\Delta T$). The cold outlet can exceed the hot outlet ($t_2 > T_2$).

3. **Condensing vapour heating a liquid.** Hot line horizontal at $T_{sat}$; the cold curve rises toward it exponentially (concave down). The flow direction does not matter and $F = 1$.

4. **Hot liquid boiling a liquid.** Cold line horizontal at the boiling point; the hot curve falls toward it exponentially. Again $F = 1$.

5. **Both fluids changing phase.** Two horizontal parallel lines, $T_{cond}$ above $T_{boil}$; $\Delta T$ is constant along the exchanger and LMTD = $T_{cond} - T_{boil}$.

6. **Desuperheating–condensing–subcooling** (counterflow against a liquid). Three zones in the hot curve: a short steep fall from the superheated inlet to $T_{sat}$ (desuperheating), a long flat section at $T_{sat}$ (condensing, where most of the heat is transferred), and a short fall below $T_{sat}$ (subcooling). The cold curve rises steadily the other way. A single LMTD over the whole exchanger is wrong here because $c_p$ is not constant; treat each zone separately (zone duties, zone LMTDs, zone areas) and add the areas.

**Exam tip:** label inlets and outlets ($T_1$, $T_2$, $t_1$, $t_2$), the flow directions and the terminal differences $\Delta t_1$, $\Delta t_2$ on every sketch.`,
          answer: String.raw`Parallel: converging curves; counter: near-parallel lines; one fluid isothermal: one horizontal line, other exponential ($F = 1$, arrangement irrelevant); both changing phase: two horizontal lines; desuperheat–condense–subcool: three zones, use zone-by-zone LMTD.` }
      ] },

    // ---------------------------------------------------------------- F9
    { id: "practice-heat-exchangers-P9", q: 9, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-heat-exchangers-P9", label: "", marks: "12", topic: "heat-exchangers",
          sub: "Dirt factor from a cleaning cycle", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Kern ch. 6 problems; asked in finals like 2023-24 Q1(c)`,
          text: String.raw`A double-pipe exchanger (true counterflow) was designed, with no fouling data, to cool 11,000 lb/h of an oil ($c = 0.55$ Btu/lb·°F) from 240 to 150°F by heating 12,100 lb/h of a solvent ($c = 0.50$ Btu/lb·°F) from 80 to 170°F, using $U = 90$ Btu/h·ft²·°F. In service, with the same flows and inlet temperatures, the solvent outlet temperature is found to fall by 2°F per month. What dirt factor should have been specified for a 6-month cleaning cycle, and how much more surface would that have required?`,
          solution: String.raw`**Given:** oil $WC = 11{,}000(0.55) = 6050$ Btu/h·°F, 240 → 150°F; solvent $wc = 12{,}100(0.50) = 6050$ Btu/h·°F, 80 → 170°F; clean $U = 90$; the solvent outlet falls 2°F per month; cycle 6 months.

**Find:** $R_d$ after 6 months; extra area.

**Assumptions:** the design point is the clean start; flows, inlet temperatures and $c$ constant; the area is fixed; counterflow.

1. Clean design:
$$Q_0 = wc(t_2 - t_1) = 6050(170 - 80) = 544{,}500\ \mathrm{Btu/h}$$
End differences $240 - 170 = 70$°F and $150 - 80 = 70$°F. They are equal because $WC = wc$, so $\Delta T$ is constant along the exchanger and LMTD = 70°F (the log formula gives 0/0; its limit is 70).
$$A = \frac{Q_0}{U_0\,\mathrm{LMTD}_0} = \frac{544{,}500}{90(70)} = 86.4\ \mathrm{ft^2}$$

2. After 6 months: $t_2 = 170 - 6(2) = 158$°F.
$$Q_6 = 6050(158 - 80) = 471{,}900\ \mathrm{Btu/h},\qquad T_2 = 240 - \frac{471{,}900}{6050} = 162\,°\mathrm{F}$$
End differences $240 - 158 = 82$°F and $162 - 80 = 82$°F, so LMTD = 82°F.

3. Fouled coefficient (same $A$):
$$U_6 = \frac{Q_6}{A\,\mathrm{LMTD}_6} = \frac{471{,}900}{86.4(82)} = 66.6\ \mathrm{Btu/h\,ft^2\,°F}$$

4. Dirt factor:
$$R_d = \frac{1}{U_6} - \frac{1}{U_0} = \frac{1}{66.6} - \frac{1}{90} = 0.0039\ \mathrm{h\,ft^2\,°F/Btu}$$

Month by month: 0.0006, 0.0012, 0.0018, 0.0025, 0.0032, 0.0039 (roughly linear build-up).

5. Surface needed if $R_d = 0.0039$ had been specified: $U_D = 66.6$, so
$$\frac{A_D}{A_0} = \frac{U_0}{U_D} = \frac{90}{66.6} = 1.35$$
i.e. about 35% more surface (117 ft² instead of 86.4 ft²).

**Exam tip:** you do not need the absolute duty to get $R_d$: $U_6/U_0 = (Q_6/Q_0)(\mathrm{LMTD}_0/\mathrm{LMTD}_6) = (78/90)(70/82)$.`,
          answer: String.raw`Clean: LMTD = 70°F, $A = 86.4$ ft². After 6 months: $t_2 = 158$, $T_2 = 162$°F, LMTD = 82°F, $U = 66.6$ → $R_d \approx 0.004$ h·ft²·°F/Btu; about 35% more area.` }
      ] },

    // ---------------------------------------------------------------- F10
    { id: "practice-heat-exchangers-P10", q: 10, section: "F", compulsory: false,
      stem: String.raw`Engine oil ($c_p = 2.10$ kJ/kg·K) flowing at 0.60 kg/s in the annulus of a double-pipe exchanger is to be cooled from 120 to 70°C by 0.90 kg/s of water ($c_p = 4.18$ kJ/kg·K) entering the inner tube at 25°C. The inner tube is steel ($k = 45$ W/m·K), ID 25 mm, OD 30 mm. The film coefficients are $h_i = 3500$ W/m²·K (water, based on the inside area) and $h_o = 280$ W/m²·K (oil). Fouling resistances: water side 0.0002 and oil side 0.0004 m²·K/W. The exchanger is built from hairpins with two 6 m legs.`,
      parts: [
        { id: "practice-heat-exchangers-P10a", label: "(a)", marks: "8", topic: "heat-exchangers",
          sub: "Overall U_o with wall and fouling (SI)", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Kern Ex. 6.1 / Holman ch. 10; asked in finals like 2023-24 Q4(a), 2018-19 Q8(b)`,
          text: String.raw`Find the clean and the design overall coefficients based on the outside area of the inner tube.`,
          solution: String.raw`**Given:** $d_i = 0.025$ m, $d_o = 0.030$ m, $k = 45$ W/m·K; $h_i = 3500$, $h_o = 280$ W/m²·K; $R_{fi} = 0.0002$, $R_{fo} = 0.0004$ m²·K/W.

**Assumptions:** steady, constant $U$; inside terms referred to the outside area by $A_o/A_i = d_o/d_i = 1.2$.

![Oil in the annulus, water in the inner tube of the hairpin](fig/practice-heat-exchangers-P10.svg)

1. Resistances per unit outside area:

| Term | Expression | m²·K/W |
|---|---|---|
| Inside film | $(d_o/d_i)/h_i = 1.2/3500$ | 0.000343 |
| Inside fouling | $(d_o/d_i)R_{fi} = 1.2(0.0002)$ | 0.000240 |
| Wall | $d_o\ln(d_o/d_i)/(2k) = 0.030\ln1.2/90$ | 0.000061 |
| Outside fouling | $R_{fo}$ | 0.000400 |
| Outside film | $1/h_o = 1/280$ | 0.003571 |
| Sum (dirty) | | 0.004615 |

2. Design (dirty) coefficient:
$$U_o = \frac{1}{0.004615} = 217\ \mathrm{W/m^2K}$$

3. Clean coefficient (drop the two fouling terms):
$$U_{o,C} = \frac{1}{0.000343 + 0.000061 + 0.003571} = 252\ \mathrm{W/m^2K}$$

The oil film alone is 77% of the total resistance.`,
          answer: String.raw`$U_{o,clean} \approx 252$ W/m²K; $U_{o,design} \approx 217$ W/m²K (oil film ≈ 77% of the resistance).` },

        { id: "practice-heat-exchangers-P10b", label: "(b)", marks: "7", topic: "heat-exchangers",
          sub: "Area and hairpins: counterflow vs parallel flow", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Kern ch. 6; asked in finals like 2023-24 Q4(a), 2020-21 Q2(d)`,
          text: String.raw`Find the area and the number of hairpins for counterflow and for parallel flow.`,
          solution: String.raw`1. Duty and water outlet:
$$q = \dot m_oc_o(T_1 - T_2) = 0.60(2100)(120 - 70) = 63{,}000\ \mathrm{W}$$
$$t_2 = 25 + \frac{63{,}000}{0.90(4180)} = 41.7\,°\mathrm{C}$$

2. **Counterflow:** ends $120 - 41.7 = 78.3$°C and $70 - 25 = 45$°C.
$$\Delta T_{lm} = \frac{78.3 - 45}{\ln(78.3/45)} = 60.1\,°\mathrm{C},\qquad A_o = \frac{63{,}000}{217(60.1)} = 4.84\ \mathrm{m^2}$$
Tube length $= A_o/(\pi d_o) = 4.84/(\pi\times0.030) = 51.3$ m. One hairpin holds 12 m, so $51.3/12 = 4.3$: **5 hairpins**.

3. **Parallel flow:** ends $120 - 25 = 95$°C and $70 - 41.7 = 28.3$°C.
$$\Delta T_{lm} = \frac{95 - 28.3}{\ln(95/28.3)} = 55.0\,°\mathrm{C},\qquad A_o = \frac{63{,}000}{217(55.0)} = 5.28\ \mathrm{m^2}$$
Length 56.0 m, $56.0/12 = 4.7$: also **5 hairpins**, but with almost no margin.

**Comment:** parallel flow needs 9% more area. With 5 hairpins (60 m, 5.65 m²) counterflow gives a 17% margin against 7% for parallel flow, so counterflow is chosen.`,
          answer: String.raw`$q = 63$ kW, water leaves at 41.7°C. Counterflow: LMTD 60.1°C, $A = 4.84$ m² (51.3 m) → 5 hairpins; parallel: LMTD 55.0°C, $A = 5.28$ m² (56.0 m) → 5 hairpins with little margin.` },

        { id: "practice-heat-exchangers-P10c", label: "(c)", marks: "5", topic: "heat-exchangers",
          sub: "Controlling resistance", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Asked in finals like 2023-24 Q1(d)`,
          text: String.raw`An operator proposes to double the water velocity to improve the exchanger. Estimate the effect on $U_o$ (take $h \propto V^{0.8}$), and compare it with doubling the oil-side coefficient instead (e.g. by a smaller annulus). Comment.`,
          solution: String.raw`1. Doubling the water velocity: $h_i' = 3500(2^{0.8}) = 6094$ W/m²K, so the inside film term falls from 0.000343 to 0.000197. But doubling the *coefficient* $h_i$ is the more generous case; even then the term only falls to 0.000171:
$$U_o' = \left[0.004615 - 0.000171\right]^{-1} = 225\ \mathrm{W/m^2K}\ (+4\%)$$
With $h \propto V^{0.8}$ the gain is smaller still (about +3%).

2. Doubling $h_o$ (280 → 560): the outside film term falls from 0.003571 to 0.001786:
$$U_o'' = \left[0.004615 - 0.001786\right]^{-1} = 353\ \mathrm{W/m^2K}\ (+63\%)$$

**Comment:** $U$ can never exceed the smallest film coefficient. The oil film is the controlling resistance, so improve the oil side (higher oil velocity in a narrower annulus, or put the oil where its $h$ is higher). Raising the water velocity mainly increases the water pumping cost.`,
          answer: String.raw`Doubling $h_i$: $U_o$ 217 → 225 W/m²K (+4%); doubling $h_o$: 217 → 353 W/m²K (+63%). The oil film controls.` }
      ] },

    // ---------------------------------------------------------------- F11
    { id: "practice-heat-exchangers-P11", q: 11, section: "F", compulsory: false,
      stem: String.raw`Water flowing at 1.5 kg/s in the inner pipe of a double-pipe heater is to be heated from 20 to 80°C by saturated steam condensing at 200 kPa (abs) in the annulus. The inner pipe is 1 in schedule 40 (OD 33.4 mm), and each hairpin has two 5 m effective legs. Take $U = 1500$ W/m²·K based on the outside area.`,
      parts: [
        { id: "practice-heat-exchangers-P11a", label: "(a)", marks: "10", topic: "heat-exchangers",
          sub: "Steam heater: LMTD, area, hairpins, steam rate", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Holman ch. 10 / Kern ch. 6; asked in finals like 2020-21 Q2(d), 2018-19 Q4(a), 2021-22 Q2(a)`,
          text: String.raw`Find the LMTD (does the flow direction matter?), the area, the number of hairpins and the steam consumption.`,
          solution: String.raw`![Water heated by steam condensing in the annulus](fig/practice-heat-exchangers-P11.svg)

**Properties (CoolProp):** saturated steam at 200 kPa: $T_{sat} = 120.2$°C, $h_{fg} = 2201.5$ kJ/kg. Water at the mean 50°C: $c_p = 4.181$ kJ/kg·K.

**Assumptions:** steam condenses at constant $T_{sat}$ (no superheat or subcooling); constant $U$; no losses.

1. Duty:
$$q = \dot mc_p(t_2 - t_1) = 1.5(4181)(80 - 20) = 3.763\times10^5\ \mathrm{W}$$

2. LMTD. The steam stays at 120.2°C, so the end differences are $120.2 - 20 = 100.2$°C and $120.2 - 80 = 40.2$°C for **either** flow direction:
$$\Delta T_{lm} = \frac{100.2 - 40.2}{\ln(100.2/40.2)} = 65.7\,°\mathrm{C}$$
The flow direction does not matter ($F = 1$, since $R = 0$).

3. Area:
$$A = \frac{q}{U\,\Delta T_{lm}} = \frac{3.763\times10^5}{1500(65.7)} = 3.82\ \mathrm{m^2}$$

4. Hairpins. One hairpin has $\pi d_oL = \pi(0.0334)(10) = 1.049$ m²:
$$n = \frac{3.82}{1.049} = 3.64\quad\Rightarrow\quad \mathbf{4\ hairpins}\ (4.20\ \mathrm{m^2})$$

5. Steam consumption:
$$\dot m_s = \frac{q}{h_{fg}} = \frac{3.763\times10^5}{2.2015\times10^6} = 0.171\ \mathrm{kg/s} = 615\ \mathrm{kg/h}$$

**Check:** with the full 4.20 m² installed (and the steam valve open) the water would leave at $t_2 = 120.2 - 100.2\,e^{-UA/\dot mc_p} = 83.5$°C, so in operation the steam pressure is throttled to hold 80°C.`,
          answer: String.raw`$T_{sat} = 120.2$°C; LMTD = 65.7°C for any arrangement; $q = 376$ kW, $A = 3.82$ m² → **4 hairpins**; steam 0.171 kg/s (615 kg/h).` },

        { id: "practice-heat-exchangers-P11b", label: "(b)", marks: "8", topic: "heat-exchangers",
          sub: "Rating with an isothermal stream: new outlet temperature", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential",
          ref: String.raw`Style of Holman ch. 10; asked in finals like 2021-22 Q2(c) (LMTD route)`,
          text: String.raw`The four-hairpin heater is installed and the water flow is later increased by 30%, with the same steam pressure and $U$. Find the new water outlet temperature and the new duty.`,
          solution: String.raw`With an isothermal hot stream, combining $q = \dot mc_p(t_2 - t_1)$ with $q = UA\,\Delta T_{lm}$ gives, for any arrangement,
$$\ln\frac{T_s - t_1}{T_s - t_2} = \frac{UA}{\dot mc_p}\quad\Rightarrow\quad t_2 = T_s - (T_s - t_1)\exp\left(-\frac{UA}{\dot mc_p}\right)$$

1. New flow $\dot m = 1.3(1.5) = 1.95$ kg/s, $A = 4.20$ m²:
$$\frac{UA}{\dot mc_p} = \frac{1500(4.20)}{1.95(4181)} = 0.772$$
$$t_2 = 120.2 - 100.2\,e^{-0.772} = 120.2 - 46.3 = 73.9\,°\mathrm{C}$$

2. New duty:
$$q = 1.95(4181)(73.9 - 20) = 4.40\times10^5\ \mathrm{W}$$

3. Before the change, with the same 4.20 m² fully used, $t_2 = 83.5$°C and $q = 1.5(4181)(63.5) = 3.98\times10^5$ W. So 30% more water gives only about 10% more heat, and the outlet falls by about 10°C. The 80°C specification can no longer be met.

**Why it matters:** the exit temperature approaches $T_s$ exponentially with $UA/\dot mc_p$ (this is $NTU$ in the ε–NTU language); more flow lowers that ratio.`,
          answer: String.raw`$t_2 = T_s - (T_s - t_1)e^{-UA/\dot mc_p}$: with 1.95 kg/s, $t_2 \approx 73.9$°C and $q \approx 440$ kW (about +10%); the 80°C target is lost.` }
      ] },

    // ---------------------------------------------------------------- F12
    { id: "practice-heat-exchangers-P12", q: 12, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-heat-exchangers-P12", label: "", marks: "14", topic: "heat-exchangers",
          sub: "ε–NTU rating: unknown outlet temperatures (textbook)", type: "numerical",
          syllabus: "out", repeats: [], origin: "potential",
          ref: String.raw`Textbook method (Holman ch. 10, Çengel ch. 11); asked in finals like 2016-17 Q3(c), 2021-22 Q2(c)`,
          text: String.raw`Oil ($c_p = 2.2$ kJ/kg·K) at 0.50 kg/s and 160°C is cooled by water ($c_p = 4.18$ kJ/kg·K) at 0.40 kg/s and 25°C in a double-pipe exchanger with $UA = 1500$ W/K. Find the heat transfer rate and both outlet temperatures for (i) counterflow and (ii) parallel flow, and verify the counterflow answer with the LMTD equation.`,
          solution: String.raw`> Not covered in the current CHE 301 slides. The ε–NTU method is from the textbooks (Holman, Çengel); the slides use the LMTD. It is the direct way to rate an exchanger when the outlet temperatures are unknown (the LMTD route would need trial and error).

**Given:** $C_h = 0.50(2200) = 1100$ W/K; $C_c = 0.40(4180) = 1672$ W/K; $T_{h,in} = 160$°C, $T_{c,in} = 25$°C; $UA = 1500$ W/K.

1. Capacity ratio and NTU:
$$C_{min} = 1100\ \mathrm{(oil)},\quad C_r = \frac{1100}{1672} = 0.658,\quad NTU = \frac{UA}{C_{min}} = \frac{1500}{1100} = 1.364$$
$$q_{max} = C_{min}(T_{h,in} - T_{c,in}) = 1100(135) = 148.5\ \mathrm{kW}$$

2. **(i) Counterflow:**
$$\varepsilon = \frac{1 - \exp[-NTU(1 - C_r)]}{1 - C_r\exp[-NTU(1 - C_r)]} = \frac{1 - e^{-0.467}}{1 - 0.658e^{-0.467}} = 0.635$$
$$q = 0.635(148.5) = 94.3\ \mathrm{kW}$$
$$T_{h,out} = 160 - \frac{94{,}300}{1100} = 74.3\,°\mathrm{C},\qquad T_{c,out} = 25 + \frac{94{,}300}{1672} = 81.4\,°\mathrm{C}$$

3. **(ii) Parallel flow:**
$$\varepsilon = \frac{1 - \exp[-NTU(1 + C_r)]}{1 + C_r} = \frac{1 - e^{-2.261}}{1.658} = 0.540$$
$$q = 0.540(148.5) = 80.2\ \mathrm{kW},\quad T_{h,out} = 87.1\,°\mathrm{C},\quad T_{c,out} = 73.0\,°\mathrm{C}$$

4. **LMTD check (counterflow):** ends $160 - 81.4 = 78.6$°C and $74.3 - 25 = 49.3$°C.
$$\Delta T_{lm} = \frac{78.6 - 49.3}{\ln(78.6/49.3)} = 62.8\,°\mathrm{C},\qquad UA\,\Delta T_{lm} = 1500(62.8) = 94.3\ \mathrm{kW}\ ✓$$

**Comment:** counterflow transfers 18% more heat with the same exchanger, and its water outlet (81.4°C) is above the oil outlet (74.3°C), which parallel flow can never achieve.`,
          answer: String.raw`$NTU = 1.36$, $C_r = 0.658$. Counterflow: ε = 0.635, $q = 94.3$ kW, oil out 74.3°C, water out 81.4°C. Parallel: ε = 0.540, $q = 80.2$ kW, oil out 87.1°C, water out 73.0°C.` }
      ] }
  ] });
