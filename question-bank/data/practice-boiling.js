QB.paper({ year: "Practice", set: "Boiling", date: "", marks: 0, practice: true,
  rules: String.raw`Pool boiling: boiling curve and regimes, burnout and the Leidenfrost point, Rohsenow nucleate-boiling correlation, maximum (critical) heat flux with C_cr, minimum heat flux, film boiling on cylinders and spheres with the ¾ radiation rule, and flow boiling (qualitative). Slide examples first (section S), then exam-style problems (section F).`,
  questions: [

    { id: "practice-boiling-P1", q: 1, section: "S", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-boiling-P1", label: "", marks: "", topic: "boiling",
          sub: "Film boiling on a horizontal wire with radiation", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 08, pp. 73–79 (5 mm polished copper heater at 350°C; Çengel Ex. 10-3 style)`,
          text: String.raw`Water is boiled at atmospheric pressure by a horizontal polished copper heating element of diameter D = 5 mm and emissivity $\varepsilon = 0.05$ immersed in the water. If the surface temperature of the heating wire is 350°C, determine the rate of heat transfer from the wire to the water per unit length of the wire.`,
          solution: String.raw`**Given:** $D = 0.005\,\mathrm{m}$, $T_s = 350^\circ\mathrm{C}$, $T_{sat} = 100^\circ\mathrm{C}$, $\varepsilon = 0.05$, $L = 1\,\mathrm{m}$.

**Assumptions:** steady; stable film boiling over the whole surface; vapour film properties at the film temperature.

![Horizontal wire in stable film boiling with radiation across the vapour film](fig/practice-boiling-P1.svg)

1. **Regime:** $\Delta T_{excess} = T_s - T_{sat} = 350 - 100 = 250^\circ\mathrm{C}$. This is far above the roughly 30°C of the critical point, and above the Leidenfrost point (about 120°C), so the wire is in **film boiling**.

2. **Properties** (as on the slide). Water at 100°C: $h_{fg} = 2257\times10^3\,\mathrm{J/kg}$, $\rho_l = 957.9\,\mathrm{kg/m^3}$. Vapour at $T_f = (350 + 100)/2 = 225^\circ\mathrm{C}$ (498 K): $\rho_v = 0.441\,\mathrm{kg/m^3}$, $c_{pv} = 1977\,\mathrm{J/kg\,K}$, $\mu_v = 1.73\times10^{-5}\,\mathrm{kg/m\,s}$, $k_v = 0.0357\,\mathrm{W/m\,K}$.

3. **Film-boiling flux** (horizontal cylinder, $C_{film} = 0.62$)

$$\dot q_{film} = 0.62\left[\frac{gk_v^3\rho_v(\rho_l - \rho_v)[h_{fg} + 0.4c_{pv}\Delta T]}{\mu_vD\Delta T}\right]^{1/4}\Delta T$$

$$= 0.62\left[\frac{9.81\times0.0357^3\times0.441\times(957.9 - 0.441)\times[2257\times10^3 + 0.4\times1977\times250]}{1.73\times10^{-5}\times0.005\times250}\right]^{1/4}\times250 = 5.93\times10^4\,\mathrm{W/m^2}$$

4. **Radiation across the vapour film**

$$\dot q_{rad} = \varepsilon\sigma(T_s^4 - T_{sat}^4) = 0.05\times5.67\times10^{-8}\times(623^4 - 373^4) = 372\,\mathrm{W/m^2}$$

5. **Combined flux** (valid since $\dot q_{rad} < \dot q_{film}$)

$$\dot q_{total} = \dot q_{film} + \tfrac{3}{4}\dot q_{rad} = 5.928\times10^4 + 0.75\times372 = 5.96\times10^4\,\mathrm{W/m^2}$$

6. **Heat transfer per metre**

$$\dot Q = \pi DL\,\dot q_{total} = \pi\times0.005\times1\times5.956\times10^4 = 936\,\mathrm{W}$$

> **Slide check:** the slide computes $\dot q_{rad} = 372.2\,\mathrm{W/m^2}$ but then adds $\tfrac{3}{4}\times157$ and gets 933 W. With 372 W/m² the answer is 936 W; the difference is negligible, because a polished surface radiates very little.

> **Why ¾?** The radiation heats the vapour film, which thickens it and slightly reduces the conduction (film) term. Adding the full $\dot q_{rad}$ would double-count, so only about three quarters is added.`,
          answer: String.raw`Film boiling ($\Delta T = 250^\circ\mathrm{C}$): $\dot q_{film} = 5.93\times10^4\,\mathrm{W/m^2}$, $\dot q_{rad} = 372\,\mathrm{W/m^2}$, $\dot q_{total} = 5.96\times10^4\,\mathrm{W/m^2}$; $\dot Q \approx 936\,\mathrm{W}$ per m (slide: 933 W).` }
      ] },

    { id: "practice-boiling-P2", q: 2, section: "S", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-boiling-P2", label: "", marks: "", topic: "boiling",
          sub: "Rohsenow: scaling with C_sf (brass vs platinum)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 08, pp. 89–94 (heated brass plate at 242°F; Holman Ex. 9-4 style)`,
          text: String.raw`A heated brass plate is submerged in a container of water at atmospheric pressure. The plate temperature is 242°F. Calculate the heat transfer per unit area of the plate, using the measured boiling data for water on a platinum wire (Holman Fig. 9-8) and the $C_{sf}$ values $0.013$ (water–platinum) and $0.006$ (water–brass).`,
          solution: String.raw`**Given:** $T_w = 242^\circ\mathrm{F}$, $T_{sat} = 212^\circ\mathrm{F}$ (1 atm), $C_{sf,Pt} = 0.013$, $C_{sf,brass} = 0.006$.

**Assumptions:** nucleate pool boiling; same fluid, pressure and $\Delta T$ for both surfaces.

1. **Excess temperature**

$$\Delta T_x = T_w - T_{sat} = 242 - 212 = 30^\circ\mathrm{F}\;(16.7^\circ\mathrm{C})$$

2. **Platinum data:** from Fig. 9-8 (curve for 14.7 psia, i.e. 0.101 MPa) at $\Delta T_x = 30^\circ\mathrm{F}$:

$$(q/A)_{Pt} = 3\times10^5\,\mathrm{Btu/h\,ft^2}\;[946\,\mathrm{kW/m^2}]$$

3. **Rohsenow correlation**

$$\frac{C_l\Delta T_x}{h_{fg}\mathrm{Pr}_l^s} = C_{sf}\left[\frac{q/A}{\mu_lh_{fg}}\sqrt{\frac{g_c\sigma}{g(\rho_l - \rho_v)}}\right]^{0.33}$$

For the same liquid, pressure and $\Delta T_x$, the left side and all the properties are the same. So $C_{sf}(q/A)^{1/3}$ = constant, i.e. $q/A \propto C_{sf}^{-3}$:

$$\frac{(q/A)_{brass}}{(q/A)_{Pt}} = \left(\frac{C_{sf,Pt}}{C_{sf,brass}}\right)^3 = \left(\frac{0.013}{0.006}\right)^3 = 10.17$$

4. **Brass plate**

$$(q/A)_{brass} = 3\times10^5\times10.17 = 3.05\times10^6\,\mathrm{Btu/h\,ft^2}\;[9.6\times10^6\,\mathrm{W/m^2}]$$

> **Slide check:** the slide prints $3.4\times10^6\,\mathrm{Btu/h\,ft^2}$ [$1.072\times10^7\,\mathrm{W/m^2}$]. But $(0.013/0.006)^3 = 10.17$, which gives $3.05\times10^6$. Use the corrected value.

> **Physical check:** the critical heat flux for water at 1 atm on a large flat heater is $\dot q_{max} = 0.149h_{fg}[\sigma g\rho_v^2(\rho_l - \rho_v)]^{1/4} \approx 1.26\times10^6\,\mathrm{W/m^2}$. The predicted flux is about 8 times larger, which is impossible in nucleate boiling. A brass plate at 242°F would already have passed the burnout point. The example shows how strongly the surface ($C_{sf}^{-3}$) affects Rohsenow's prediction, and why every Rohsenow answer should be compared with $\dot q_{max}$.`,
          answer: String.raw`$\Delta T_x = 30^\circ\mathrm{F}$; $(q/A)_{Pt} = 3\times10^5\,\mathrm{Btu/h\,ft^2}$; $q \propto C_{sf}^{-3}$ gives $(q/A)_{brass} = 10.17\times3\times10^5 \approx 3.05\times10^6\,\mathrm{Btu/h\,ft^2}$ ($9.6\,\mathrm{MW/m^2}$; slide misprints 3.4e6). This exceeds $\dot q_{max} \approx 1.26\,\mathrm{MW/m^2}$, so it is not physically attainable.` }
      ] },

    { id: "practice-boiling-P3", q: 3, section: "S", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-boiling-P3a", label: "(a)", marks: "", topic: "boiling",
          sub: "Boiling curve and regimes I–VI", type: "sketch",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 08, pp. 52–63 (boiling curve, regions I–VI; asked in many finals, e.g. 2015-16 Q2a, 2021-22 Q4a, 2022-23 Q8a)`,
          text: String.raw`Sketch the pool-boiling curve for water at 1 atm and describe each region (I to VI), giving typical excess temperatures.`,
          solution: String.raw`![Pool boiling curve for water at 1 atm with regimes I to VI and points A to E](fig/common-boiling-curve.svg)

**Sketch:** log heat flux $\dot q$ (W/m², $10^3$ to $10^7$) against log excess temperature $\Delta T_{excess} = T_s - T_{sat}$ (1 to 1000°C). The curve rises gently to A (about 5°C), then steeply through B (about 10°C) to the peak C ($\dot q_{max} \approx 1\,\mathrm{MW/m^2}$ at about 30°C). It falls to the minimum D (Leidenfrost point, about 120°C, $\dot q_{min} \approx 2\times10^4\,\mathrm{W/m^2}$), then rises again through E (film boiling, where radiation grows at high $\Delta T$). Label the regions above the curve.

| Region | $\Delta T_{excess}$ (water, 1 atm) | What happens |
|---|---|---|
| I. Natural-convection boiling (interface evaporation) | 0 to about 5°C | Liquid near the wall is slightly superheated (metastable). Free-convection currents carry it to the free surface, where it evaporates. No bubbles; use natural-convection correlations. |
| II. Nucleate boiling, isolated bubbles | 5–10°C | Bubbles form at nucleation sites and collapse in the cooler liquid or rise. Stirring and agitation raise h sharply. |
| III. Nucleate boiling, jets and columns | 10–30°C | Bubbles form rapidly and rise as continuous vapour columns to the surface. Entrainment plus evaporation give the highest h (2000 to 30,000 W/m²K across the nucleate range). The rise in flux slows and peaks at C, the critical (maximum) heat flux. |
| IV. Transition (partial film) boiling | 30 to about 120°C | Vapour patches blanket parts of the surface and act as insulation. The film is unstable and alternates with nucleate spots, so $\dot q$ falls as $\Delta T$ rises. |
| V. Stable film boiling | above about 120°C | A continuous vapour film covers the surface. The minimum flux at D is the Leidenfrost point; regions IV and part of V together are called transition boiling. |
| VI. Film boiling with radiation | very high $\Delta T$ (more than about 300–500°C) | Radiation across the vapour film becomes a major part of the heat transfer, and $\dot q$ rises steeply again. |`,
          answer: String.raw`I free convection (to about 5°C); II–III nucleate (5–30°C, peak $\dot q_{max}$ at C); IV transition (falling flux, to the Leidenfrost minimum at about 120°C); V stable film; VI film plus radiation.` },
        { id: "practice-boiling-P3b", label: "(b)", marks: "", topic: "boiling",
          sub: "Burnout and hysteresis of an electrically heated wire", type: "theory",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 08, pp. 63–65 (points a and b, burnout; C to E jump, D on cooling)`,
          text: String.raw`Explain why an electrically heated (heat-flux-controlled) wire "burns out" when the heat flux is raised just above the critical value, and what happens when the power is then reduced.`,
          solution: String.raw`![Heat-flux-controlled heater: burnout jump C → E and the return D → nucleate branch](fig/practice-boiling-P3b-sol.svg)

- With electric heating, the **heat flux** is the controlled variable and the wall temperature adjusts to it.
- Up to point C (or a), raising the power moves the wire up the nucleate-boiling branch.
- Just beyond C, a small rise in $\Delta T$ *reduces* the flux the liquid can remove (transition branch). The wire must still dissipate the electrical power, so its temperature keeps rising. The operating point **jumps** horizontally at constant $\dot q \approx \dot q_{max}$ to point E (or b) on the film-boiling branch.
- For water, $T_s$ at E is often above 1000°C, beyond the melting point of most wire materials, so the wire melts. This is **burnout**, and $\dot q_{max}$ is also called the burnout heat flux.
- If the wire survives and the power is reduced, it cools along the film-boiling branch down to the minimum D (Leidenfrost point). There the vapour film collapses, and $T_s$ **drops suddenly** back to the nucleate branch at the same $\dot q_{min}$.
- The transition branch C–D is bypassed in both directions (hysteresis). It can be observed only with temperature-controlled heating, for example condensing-vapour heating.

**Design consequence:** heat-flux-controlled equipment (electric heaters, nuclear fuel, fired boiler tubes) is run well below $\dot q_{max}$, typically below 75–90% of it.`,
          answer: String.raw`Under flux control, exceeding $\dot q_{max}$ makes $T_s$ jump from C to E on the film branch (often above the melting point), which is burnout. On reducing the power, T falls along the film branch to D (Leidenfrost) and then drops to the nucleate branch (hysteresis).` }
      ] },

    { id: "practice-boiling-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw`Water is boiled at 1 atm in a 30-cm-diameter mechanically polished stainless-steel pan placed on an electric burner. The inner bottom surface is at 108°C. Water at 100°C: $\rho_l = 957.9\,\mathrm{kg/m^3}$, $\rho_v = 0.60\,\mathrm{kg/m^3}$, $h_{fg} = 2257\,\mathrm{kJ/kg}$, $\mu_l = 2.82\times10^{-4}\,\mathrm{kg/m\,s}$, $c_{pl} = 4217\,\mathrm{J/kg\,K}$, $\mathrm{Pr}_l = 1.75$, $\sigma = 0.0589\,\mathrm{N/m}$. $C_{sf} = 0.0130$, $n = 1.0$.`,
      parts: [
        { id: "practice-boiling-P4a", label: "(a)", marks: "", topic: "boiling",
          sub: "Rohsenow nucleate boiling in a pan", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation on Slides 08, pp. 66–69 (Rohsenow, C_sf table); cousin of finals 2017-18 Q4a, 2011-12 Q4c (new numbers)`,
          text: String.raw`Determine the boiling heat flux, the rate of heat transfer to the water and the rate of evaporation.`,
          solution: String.raw`**Given:** $D = 0.3\,\mathrm{m}$, $\Delta T_{excess} = 108 - 100 = 8^\circ\mathrm{C}$.

**Assumptions:** steady; uniform bottom temperature; only the bottom transfers heat; nucleate boiling, since $\Delta T$ is between 5 and 30°C.

![Water boiling in the 30 cm pan](fig/practice-boiling-P4.svg)

1. **Rohsenow correlation** (SI form on the slide)

$$\dot q_{nucleate} = \mu_lh_{fg}\left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2}\left[\frac{c_{pl}(T_s - T_{sat})}{C_{sf}h_{fg}\mathrm{Pr}_l^n}\right]^3$$

2. **Evaluate each group**

$$\left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2} = \left[\frac{9.81\times(957.9 - 0.6)}{0.0589}\right]^{1/2} = 399.3\,\mathrm{m^{-1}}$$

$$\mu_lh_{fg}\times399.3 = 2.82\times10^{-4}\times2.257\times10^6\times399.3 = 2.541\times10^5\,\mathrm{W/m^2}$$

$$\frac{c_{pl}\Delta T}{C_{sf}h_{fg}\mathrm{Pr}_l} = \frac{4217\times8}{0.0130\times2.257\times10^6\times1.75} = 0.6570,\qquad (0.6570)^3 = 0.2836$$

$$\dot q = 2.541\times10^5\times0.2836 = 7.21\times10^4\,\mathrm{W/m^2}$$

3. **Heat transfer rate**

$$A = \frac{\pi D^2}{4} = 0.07069\,\mathrm{m^2},\qquad \dot Q = \dot qA = 7.21\times10^4\times0.07069 = 5.10\,\mathrm{kW}$$

4. **Evaporation rate**

$$\dot m = \frac{\dot Q}{h_{fg}} = \frac{5095}{2.257\times10^6} = 2.26\times10^{-3}\,\mathrm{kg/s} = 8.1\,\mathrm{kg/h}$$

The boiling coefficient is $h = \dot q/\Delta T = 9.0\,\mathrm{kW/m^2K}$, inside the 2000 to 30,000 W/m²K nucleate range on the slide.

> **Exam tip:** $\dot q \propto \Delta T^3$, so a 10% error in the measured wall temperature gives about a 30% error in $\dot q$.`,
          answer: String.raw`$\dot q \approx 7.21\times10^4\,\mathrm{W/m^2}$, $\dot Q \approx 5.1\,\mathrm{kW}$, $\dot m \approx 2.26\times10^{-3}\,\mathrm{kg/s}$ (8.1 kg/h); $h \approx 9\,\mathrm{kW/m^2K}$.` },
        { id: "practice-boiling-P4b", label: "(b)", marks: "", topic: "boiling",
          sub: "Critical heat flux (C_cr, L*) and safety margin", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation on Slides 08, pp. 70–71 (q_max = C_cr h_fg[σgρ_v²(ρ_l − ρ_v)]^(1/4), C_cr table)`,
          text: String.raw`Calculate the maximum (critical) heat flux for this pan and the fraction of it at which the pan operates.`,
          solution: String.raw`1. **Dimensionless heater size** (characteristic length = diameter for a flat heater)

$$L^* = L\left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2} = 0.3\times399.3 = 120 > 27$$

So it is a **large horizontal flat heater** and $C_{cr} = 0.149$.

2. **Critical heat flux**

$$\dot q_{max} = C_{cr}h_{fg}[\sigma g\rho_v^2(\rho_l - \rho_v)]^{1/4} = 0.149\times2.257\times10^6\times[0.0589\times9.81\times0.60^2\times957.3]^{1/4}$$

$$\dot q_{max} = 1.26\times10^6\,\mathrm{W/m^2}$$

3. **Operating fraction**

$$\frac{\dot q}{\dot q_{max}} = \frac{7.21\times10^4}{1.26\times10^6} = 0.057\;(5.7\%)$$

The pan is far from burnout. The maximum burner power the bottom could handle in nucleate boiling is $\dot q_{max}A = 1.26\times10^6\times0.0707 \approx 89\,\mathrm{kW}$.`,
          answer: String.raw`$L^* = 120$, so $C_{cr} = 0.149$; $\dot q_{max} \approx 1.26\,\mathrm{MW/m^2}$; the pan runs at about 5.7% of it.` }
      ] },

    { id: "practice-boiling-P5", q: 5, section: "S", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-boiling-P5", label: "", marks: "", topic: "boiling",
          sub: "Quenching a sphere: film boiling with radiation", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation on Slides 08, p. 73 (film boiling on a sphere, C = 0.67, ¾ radiation rule) and p. 72 (q_min)`,
          text: String.raw`A 2-cm-diameter steel ball bearing ($\varepsilon = 0.8$) at 500°C is plunged into saturated water at 1 atm during heat treatment. Find the initial rate of heat transfer from the ball, and confirm that it is in stable film boiling by comparing with the minimum heat flux.

Water at 100°C: $\rho_l = 957.9\,\mathrm{kg/m^3}$, $h_{fg} = 2257\,\mathrm{kJ/kg}$, $\sigma = 0.0589\,\mathrm{N/m}$, $\rho_{v,sat} = 0.60\,\mathrm{kg/m^3}$. Steam at 300°C, 1 atm: $\rho_v = 0.384\,\mathrm{kg/m^3}$, $c_{pv} = 2013\,\mathrm{J/kg\,K}$, $\mu_v = 2.031\times10^{-5}\,\mathrm{kg/m\,s}$, $k_v = 0.04353\,\mathrm{W/m\,K}$.`,
          solution: String.raw`**Given:** $D = 0.02\,\mathrm{m}$, $T_s = 500^\circ\mathrm{C}$, $\Delta T = 400^\circ\mathrm{C}$, $\varepsilon = 0.8$.

**Assumptions:** uniform surface temperature at the instant considered; vapour properties at $T_f = 300^\circ\mathrm{C}$ (CoolProp/IAPWS); saturated pool.

![Steel ball quenched in saturated water, surrounded by a vapour film](fig/practice-boiling-P5.svg)

1. **Film-boiling flux on a sphere** ($C_{film} = 0.67$)

$$\dot q_{film} = 0.67\left[\frac{9.81\times0.04353^3\times0.384\times(957.9 - 0.384)\times[2.257\times10^6 + 0.4\times2013\times400]}{2.031\times10^{-5}\times0.02\times400}\right]^{1/4}\times400 = 7.03\times10^4\,\mathrm{W/m^2}$$

2. **Radiation**

$$\dot q_{rad} = 0.8\times5.67\times10^{-8}\times(773.15^4 - 373.15^4) = 1.53\times10^4\,\mathrm{W/m^2}$$

3. **Total** ($\dot q_{rad} < \dot q_{film}$, so the ¾ rule applies)

$$\dot q_{total} = 7.03\times10^4 + 0.75\times1.53\times10^4 = 8.18\times10^4\,\mathrm{W/m^2}$$

$$A = \pi D^2 = 1.257\times10^{-3}\,\mathrm{m^2},\qquad \dot Q = 8.18\times10^4\times1.257\times10^{-3} = 103\,\mathrm{W}$$

The effective coefficient is $\dot q_{total}/\Delta T = 204\,\mathrm{W/m^2K}$, of which radiation contributes about 14%.

4. **Stability check**

$$\dot q_{min} = 0.09\rho_vh_{fg}\left[\frac{\sigma g(\rho_l - \rho_v)}{(\rho_l + \rho_v)^2}\right]^{1/4} = 0.09\times0.60\times2.257\times10^6\left[\frac{0.0589\times9.81\times957.3}{958.5^2}\right]^{1/4} = 1.9\times10^4\,\mathrm{W/m^2}$$

(using $\rho_v$ at $T_{sat}$; this is the large-horizontal-plate formula, used here as an estimate). $\dot q_{film} \approx 7\times10^4 > \dot q_{min}$, and $\Delta T = 400^\circ\mathrm{C}$ is far beyond the Leidenfrost point (about 120°C). So the ball starts in stable film boiling. As it cools it will pass D, the vapour film will collapse, and the cooling rate will jump sharply (transition, then nucleate boiling). This is the familiar sudden "hiss" during quenching.`,
          answer: String.raw`$\dot q_{film} \approx 7.0\times10^4$, $\dot q_{rad} \approx 1.5\times10^4$, $\dot q_{total} \approx 8.2\times10^4\,\mathrm{W/m^2}$, so $\dot Q \approx 103\,\mathrm{W}$; $\dot q_{min} \approx 1.9\times10^4\,\mathrm{W/m^2}$, confirming stable film boiling.` }
      ] },

    { id: "practice-boiling-P6", q: 6, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-boiling-P6a", label: "(a)", marks: "6", topic: "boiling",
          sub: "Critical heat flux: what affects it", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of finals 2016-17 Q1(b), 2020-21 Q4(a); Slides 08, pp. 70–71`,
          text: String.raw`What is the critical heat flux? On what does it depend, and on what does it not depend? Why is it of prime engineering importance?`,
          solution: String.raw`**Definition:** the maximum heat flux attainable in nucleate pool boiling (point C on the boiling curve). Beyond it, vapour leaves the surface so fast that it blankets it and blocks the liquid supply.

$$\dot q_{max} = C_{cr}h_{fg}[\sigma g\rho_v^2(\rho_l - \rho_v)]^{1/4}\quad(\text{Zuber: } C_{cr} = \pi/24 \approx 0.131;\ \text{Lienhard: about } 0.15)$$

**Depends on:**
- $h_{fg}$ (proportional to it), which is why water, with its large $h_{fg}$, has a high CHF;
- surface tension, vapour and liquid densities, and gravity ($\dot q_{max} \propto g^{1/4}$, so it is lower in reduced gravity);
- **pressure**, through $\rho_v$ and $h_{fg}$: it rises up to about one third of the critical pressure, then falls to zero at the critical point;
- heater **geometry and size**, through $C_{cr}(L^*)$: 0.149 for a large flat heater, 0.12 for a large cylinder, 0.11 for a large sphere;
- subcooling and forced flow (both increase it).

**Does not depend on:** the fluid–surface combination ($C_{sf}$), or the liquid's viscosity, thermal conductivity and specific heat.

**Importance:** in heat-flux-controlled systems (electric heaters, nuclear fuel rods, fired boiler tubes), exceeding $\dot q_{max}$ makes the surface temperature jump to the film-boiling branch, often above the melting point (burnout). Designs therefore stay safely below CHF.`,
          answer: String.raw`CHF is the nucleate-boiling peak. It scales with $h_{fg}[\sigma g\rho_v^2(\rho_l - \rho_v)]^{1/4}$, peaks at about $P_{cr}/3$, and depends on heater geometry ($C_{cr}$) but not on $C_{sf}$, $\mu$, k or $c_p$. Exceeding it causes burnout in flux-controlled heaters.` },
        { id: "practice-boiling-P6b", label: "(b)", marks: "4", topic: "boiling",
          sub: "Why only ¾ of the radiation is added in film boiling", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of finals 2016-17 Q1(g), 2020-21 Q4(b); Slides 08, p. 73`,
          text: String.raw`In film boiling, the total heat flux is taken as $\dot q_{total} = \dot q_{film} + \tfrac{3}{4}\dot q_{rad}$. Explain why the radiation flux is not simply added, and when radiation must be included.`,
          solution: String.raw`- Conduction and convection across the vapour film ($\dot q_{film}$) and radiation from the hot wall to the liquid ($\dot q_{rad} = \varepsilon\sigma(T_s^4 - T_{sat}^4)$) act in parallel, but they are **not independent**.
- Radiation absorbed at the liquid interface produces more vapour, which **thickens the film**. A thicker film lowers the conduction term. Simply adding the two would overestimate the total.
- Bromley's analysis shows that the interaction is equivalent to adding about three quarters of the radiation flux (valid when $\dot q_{rad} < \dot q_{film}$).
- Radiation becomes significant at high surface temperatures (typically above about 300°C) and high emissivity. For a polished low-$\varepsilon$ surface it is small even at 350°C (in Problem 1 it is less than 1% of the total).`,
          answer: String.raw`Radiation thickens the vapour film and so reduces the film-conduction term; the net effect is about $\tfrac{3}{4}\dot q_{rad}$ (for $\dot q_{rad} < \dot q_{film}$). It matters above about 300°C and for high emissivity.` },
        { id: "practice-boiling-P6c", label: "(c)", marks: "6", topic: "boiling",
          sub: "Flow boiling regimes in a heated tube", type: "sketch",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of final 2023-24 Q1(b) (flow vs pool boiling); Slides 08, pp. 82–88`,
          text: String.raw`Sketch the flow regimes, and the variation of the heat-transfer coefficient, along a uniformly heated vertical tube in which a subcooled liquid enters and superheated vapour leaves. How does external flow boiling differ from pool boiling?`,
          solution: String.raw`![Flow regimes along a heated vertical tube and the variation of h](fig/practice-boiling-P6c-sol.svg)

**Sketch:** a vertical tube with flow upward. Beside it, mark the regimes in order and plot h against the length (or vapour quality).

1. **Single-phase liquid (subcooled) forced convection:** h is modest and roughly constant.
2. **Bubbly flow:** bubbles form at the wall (subcooled, then saturated nucleate boiling) and are swept into the core. h rises.
3. **Slug flow:** bubbles coalesce into large vapour slugs, occupying up to half the volume. h is high.
4. **Annular flow:** a vapour core with a thin liquid film on the wall; evaporation from the film gives the **highest h**.
5. **Transition:** dry spots appear as the film thins (dry-out), and h falls sharply.
6. **Mist flow:** the wall is dry and droplets are carried in the vapour; h is low (vapour convection).
7. **Single-phase vapour (superheated):** h is lowest.

**External flow boiling vs pool boiling:** the boiling curve has the same shape, but the forced motion increases both the nucleate-boiling heat flux and the critical heat flux. The higher the velocity, the higher both are; CHF values up to about 35 MW/m² have been reached with water. Internal flow boiling is more complex, because there is no free surface and the liquid and vapour must flow together.`,
          answer: String.raw`Liquid, then bubbly, slug, annular (h maximum), transition or dry-out (h falls), mist, and vapour. Forced flow raises both the nucleate flux and CHF compared with pool boiling.` },
        { id: "practice-boiling-P6d", label: "(d)", marks: "4", topic: "boiling",
          sub: "Pool vs flow, subcooled vs saturated boiling", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of final 2012-13 Q7(b); Slides 08, pp. 47–51`,
          text: String.raw`Distinguish between (i) boiling and evaporation, (ii) pool and flow boiling, and (iii) subcooled and saturated boiling.`,
          solution: String.raw`- **Evaporation vs boiling:** evaporation occurs at a liquid–vapour interface when the vapour pressure is below the saturation pressure of the liquid; no bubbles form. Boiling occurs at a **solid–liquid** interface heated sufficiently above $T_{sat}$, with bubbles forming at the surface.
- **Pool vs flow boiling:** in pool boiling the liquid is stagnant, and motion comes only from natural convection and the rise of bubbles (for example a kettle). In flow (forced-convection) boiling a pump or external flow moves the liquid over or through the heated surface (for example boiler tubes).
- **Subcooled (local) vs saturated (bulk):** in subcooled boiling the bulk liquid is below $T_{sat}$, so bubbles form at the wall and collapse in the cooler liquid. In saturated boiling the bulk is at $T_{sat}$, and bubbles rise and escape at the free surface.`,
          answer: String.raw`Evaporation happens at a free interface without bubbles, boiling at a heated wall with bubbles; pool boiling has stagnant liquid, flow boiling forced motion; in subcooled boiling the bulk is below $T_{sat}$ (bubbles collapse), in saturated boiling it is at $T_{sat}$.` }
      ] },

    { id: "practice-boiling-P7", q: 7, section: "F", compulsory: false,
      stem: String.raw`A 1-cm-diameter horizontal electric heater with a mechanically polished stainless-steel sheath ($C_{sf} = 0.013$, $n = 1$) is immersed in saturated water at 1 atm. Use the water properties of Problem 4 ($\rho_l = 957.9$, $\rho_v = 0.60\,\mathrm{kg/m^3}$, $h_{fg} = 2257\,\mathrm{kJ/kg}$, $\mu_l = 2.82\times10^{-4}\,\mathrm{kg/m\,s}$, $c_{pl} = 4217\,\mathrm{J/kg\,K}$, $\mathrm{Pr}_l = 1.75$, $\sigma = 0.0589\,\mathrm{N/m}$).`,
      parts: [
        { id: "practice-boiling-P7a", label: "(a)", marks: "8", topic: "boiling",
          sub: "Burnout power of a cylindrical heater (C_cr from L*)", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Close cousin of final 2015-16 Q2(b) (heater burnout), new numbers; C_cr table on Slides 08, p. 71`,
          text: String.raw`Determine the maximum heat flux and the maximum electrical power per metre the heater can dissipate in nucleate boiling.`,
          solution: String.raw`1. **Heater size parameter** (characteristic length = **radius** for a cylinder)

$$L^* = r\left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2} = 0.005\times399.3 = 2.0 > 1.2$$

So it is a **large horizontal cylinder** and $C_{cr} = 0.12$.

2. **Maximum heat flux**

$$\dot q_{max} = 0.12\times2.257\times10^6\times[0.0589\times9.81\times0.60^2\times957.3]^{1/4} = 1.02\times10^6\,\mathrm{W/m^2}$$

3. **Maximum power per metre**

$$\dot Q_{max}/L = \dot q_{max}\pi D = 1.017\times10^6\times\pi\times0.01 = 3.20\times10^4\,\mathrm{W/m} = 32\,\mathrm{kW/m}$$`,
          answer: String.raw`$L^* = 2.0$, so $C_{cr} = 0.12$; $\dot q_{max} \approx 1.02\,\mathrm{MW/m^2}$; $\dot Q_{max} \approx 32\,\mathrm{kW}$ per m.` },
        { id: "practice-boiling-P7b", label: "(b)", marks: "7", topic: "boiling",
          sub: "Surface temperature at CHF (Rohsenow inverted)", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel boiling problems ("surface temperature at the critical point")`,
          text: String.raw`Estimate the heater surface temperature when it operates at the critical heat flux. If the power is raised slightly above this value, what happens?`,
          solution: String.raw`**Invert Rohsenow** for $\Delta T$:

$$\Delta T = \frac{C_{sf}h_{fg}\mathrm{Pr}_l}{c_{pl}}\left[\frac{\dot q}{\mu_lh_{fg}\sqrt{g(\rho_l - \rho_v)/\sigma}}\right]^{1/3}$$

$$\frac{C_{sf}h_{fg}\mathrm{Pr}_l}{c_{pl}} = \frac{0.013\times2.257\times10^6\times1.75}{4217} = 12.18^\circ\mathrm{C},\qquad \mu_lh_{fg}\sqrt{g\Delta\rho/\sigma} = 2.541\times10^5\,\mathrm{W/m^2}$$

$$\Delta T = 12.18\times\left[\frac{1.017\times10^6}{2.541\times10^5}\right]^{1/3} = 12.18\times1.587 = 19.3^\circ\mathrm{C}$$

$$T_s = 100 + 19.3 \approx 119^\circ\mathrm{C}$$

**Above CHF:** the heater is flux-controlled, so the extra power cannot be removed in nucleate boiling. A vapour blanket forms and $T_s$ jumps along the line $\dot q \approx \dot q_{max}$ to the film-boiling branch. That new temperature can exceed 1000°C for water, far above the sheath's safe limit, so the heater burns out. In practice the design flux is kept to about 75–80% of $\dot q_{max}$ (here about 0.8 MW/m², i.e. 25 kW/m).`,
          answer: String.raw`$\Delta T_{cr} \approx 19.3^\circ\mathrm{C}$, so $T_s \approx 119^\circ\mathrm{C}$ at CHF. Slightly more power makes $T_s$ jump to the film-boiling branch (more than 1000°C), which is burnout.` }
      ] },

    { id: "practice-boiling-P8", q: 8, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-boiling-P8", label: "", marks: "15", topic: "boiling",
          sub: "Boiler tube at 200 kPa: wall temperature from Rohsenow", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Close cousin of finals 2016-17 Q4(b) / 2023-24 Q8(b) (boiler tubes), new numbers; properties from CoolProp`,
          text: String.raw`In a small fire-tube boiler, water boils at 200 kPa on the outside of a horizontal 4-cm-OD, 3-m-long mechanically polished stainless-steel tube ($C_{sf} = 0.013$, $n = 1$). The tube transfers 30 kW to the water. Determine (i) the outer surface temperature of the tube, (ii) the boiling heat-transfer coefficient, and (iii) the fraction of the critical heat flux at which it operates.

Saturated water at 200 kPa: $T_{sat} = 120.2^\circ\mathrm{C}$, $\rho_l = 942.9\,\mathrm{kg/m^3}$, $\rho_v = 1.129\,\mathrm{kg/m^3}$, $h_{fg} = 2201.5\,\mathrm{kJ/kg}$, $\mu_l = 2.316\times10^{-4}\,\mathrm{kg/m\,s}$, $c_{pl} = 4244\,\mathrm{J/kg\,K}$, $\mathrm{Pr}_l = 1.441$, $\sigma = 0.0549\,\mathrm{N/m}$.`,
          solution: String.raw`**Given:** $D = 0.04\,\mathrm{m}$, $L = 3\,\mathrm{m}$, $\dot Q = 30\,\mathrm{kW}$, $P = 200\,\mathrm{kPa}$.

**Assumptions:** steady; uniform flux over the outer surface; saturated nucleate pool boiling (checked below).

1. **Heat flux**

$$\dot q = \frac{\dot Q}{\pi DL} = \frac{30{,}000}{\pi\times0.04\times3} = 7.96\times10^4\,\mathrm{W/m^2}$$

2. **(i) Excess temperature from Rohsenow**

$$\mu_lh_{fg}\left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2} = 2.316\times10^{-4}\times2.2015\times10^6\times\left[\frac{9.81\times941.8}{0.0549}\right]^{1/2} = 2.092\times10^5\,\mathrm{W/m^2}$$

$$\Delta T = \frac{C_{sf}h_{fg}\mathrm{Pr}_l}{c_{pl}}\left[\frac{\dot q}{2.092\times10^5}\right]^{1/3} = \frac{0.013\times2.2015\times10^6\times1.441}{4244}\left[\frac{7.96\times10^4}{2.092\times10^5}\right]^{1/3} = 9.72\times0.725 = 7.04^\circ\mathrm{C}$$

$$T_s = 120.2 + 7.0 = 127.2^\circ\mathrm{C}$$

$\Delta T = 7^\circ\mathrm{C}$ lies in the nucleate range (5–30°C) ✓.

3. **(ii) Boiling coefficient**

$$h = \frac{\dot q}{\Delta T} = \frac{7.96\times10^4}{7.04} = 1.13\times10^4\,\mathrm{W/m^2K}$$

4. **(iii) Critical heat flux.** $L^* = r\sqrt{g\Delta\rho/\sigma} = 0.02\times410.2 = 8.2 > 1.2$, so it is a large cylinder and $C_{cr} = 0.12$:

$$\dot q_{max} = 0.12\times2.2015\times10^6\times[0.0549\times9.81\times1.129^2\times941.8]^{1/4} = 1.33\times10^6\,\mathrm{W/m^2}$$

$$\frac{\dot q}{\dot q_{max}} = \frac{7.96\times10^4}{1.33\times10^6} = 0.060\;(6\%)$$

> At 200 kPa the CHF (1.33 MW/m²) is about 31% higher than at 1 atm (1.02 MW/m² for the same geometry), because $\rho_v$ rises faster than $h_{fg}$ falls. This illustrates that CHF increases with pressure up to about $P_{cr}/3$.`,
          answer: String.raw`$\dot q = 79.6\,\mathrm{kW/m^2}$; $\Delta T \approx 7.0^\circ\mathrm{C}$, so $T_s \approx 127^\circ\mathrm{C}$; $h \approx 11.3\,\mathrm{kW/m^2K}$; $\dot q_{max} \approx 1.33\,\mathrm{MW/m^2}$ ($C_{cr} = 0.12$), so it operates at about 6% of CHF.` }
      ] },

    { id: "practice-boiling-P9", q: 9, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-boiling-P9", label: "", marks: "12", topic: "boiling",
          sub: "Film boiling on a hot rod with significant radiation", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Close cousin of finals 2018-19 Q3(b), 2014-15 Q7(b) (film boiling with radiation), new numbers`,
          text: String.raw`An oxidised 8-mm-diameter steel rod ($\varepsilon = 0.6$) is held horizontally in saturated water at 1 atm with its surface at 550°C. Calculate the heat-transfer rate per metre, and the share of it due to radiation.

Water at 100°C: $\rho_l = 957.9\,\mathrm{kg/m^3}$, $h_{fg} = 2257\,\mathrm{kJ/kg}$. Steam at 325°C, 1 atm: $\rho_v = 0.3678\,\mathrm{kg/m^3}$, $c_{pv} = 2026\,\mathrm{J/kg\,K}$, $\mu_v = 2.135\times10^{-5}\,\mathrm{kg/m\,s}$, $k_v = 0.04622\,\mathrm{W/m\,K}$.`,
          solution: String.raw`**Given:** $D = 0.008\,\mathrm{m}$, $T_s = 550^\circ\mathrm{C}$, $\Delta T = 450^\circ\mathrm{C}$, $\varepsilon = 0.6$.

**Assumptions:** stable film boiling (since $\Delta T$ is far above the Leidenfrost point); vapour properties at $T_f = (550 + 100)/2 = 325^\circ\mathrm{C}$; uniform surface temperature.

1. **Film-boiling flux** (horizontal cylinder, C = 0.62)

$$\dot q_{film} = 0.62\left[\frac{9.81\times0.04622^3\times0.3678\times(957.9 - 0.368)\times[2.257\times10^6 + 0.4\times2026\times450]}{2.135\times10^{-5}\times0.008\times450}\right]^{1/4}\times450 = 9.16\times10^4\,\mathrm{W/m^2}$$

2. **Radiation flux**

$$\dot q_{rad} = 0.6\times5.67\times10^{-8}\times(823.15^4 - 373.15^4) = 1.50\times10^4\,\mathrm{W/m^2}$$

3. **Total** ($\dot q_{rad} < \dot q_{film}$)

$$\dot q_{total} = 9.16\times10^4 + 0.75\times1.50\times10^4 = 1.029\times10^5\,\mathrm{W/m^2}$$

4. **Per metre of rod**

$$\dot Q = \pi D\,\dot q_{total} = \pi\times0.008\times1.029\times10^5 = 2.58\,\mathrm{kW/m}$$

5. **Radiation share**

$$\frac{0.75\dot q_{rad}}{\dot q_{total}} = \frac{1.12\times10^4}{1.029\times10^5} = 11\%$$

The effective coefficients are $h_{film} = 204\,\mathrm{W/m^2K}$ and $h_{total} = 229\,\mathrm{W/m^2K}$. Even at 550°C, film boiling transfers only about 0.1 MW/m², an order of magnitude below the nucleate peak, because the vapour film is a poor conductor.`,
          answer: String.raw`$\dot q_{film} \approx 9.16\times10^4$, $\dot q_{rad} \approx 1.50\times10^4$, $\dot q_{total} \approx 1.03\times10^5\,\mathrm{W/m^2}$; $\dot Q \approx 2.58\,\mathrm{kW/m}$; radiation contributes about 11%.` }
      ] },

    { id: "practice-boiling-P10", q: 10, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-boiling-P10", label: "", marks: "12", topic: "boiling",
          sub: "Nucleate boiling of an organic liquid (n = 1.7)", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman/Çengel non-aqueous boiling problems; C_sf = 0.0154, n = 1.7 for n-pentane on polished copper (Slides 08, p. 69)`,
          text: String.raw`n-Pentane boils at 1 atm ($T_{sat} = 36.1^\circ\mathrm{C}$) on a 10-cm-square polished copper plate held at 51.1°C. Calculate (i) the nucleate boiling heat flux and coefficient, and (ii) the critical heat flux. Comment on the comparison with water at the same excess temperature.

Saturated n-pentane at 1 atm: $\rho_l = 610.0\,\mathrm{kg/m^3}$, $\rho_v = 2.975\,\mathrm{kg/m^3}$, $h_{fg} = 357.7\,\mathrm{kJ/kg}$, $\mu_l = 1.609\times10^{-4}\,\mathrm{kg/m\,s}$, $c_{pl} = 2368\,\mathrm{J/kg\,K}$, $\mathrm{Pr}_l = 3.53$, $\sigma = 0.01424\,\mathrm{N/m}$. $C_{sf} = 0.0154$, $n = 1.7$.`,
          solution: String.raw`**Given:** $\Delta T = 51.1 - 36.1 = 15^\circ\mathrm{C}$, $L = 0.1\,\mathrm{m}$.

**Assumptions:** nucleate pool boiling on a clean surface; properties at $T_{sat}$ (CoolProp).

1. **Rohsenow** (for non-aqueous liquids the Prandtl exponent is n = 1.7)

$$\left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2} = \left[\frac{9.81\times607.0}{0.01424}\right]^{1/2} = 646.7\,\mathrm{m^{-1}},\qquad \mu_lh_{fg}\times646.7 = 3.722\times10^4\,\mathrm{W/m^2}$$

$$\frac{c_{pl}\Delta T}{C_{sf}h_{fg}\mathrm{Pr}_l^{1.7}} = \frac{2368\times15}{0.0154\times3.577\times10^5\times3.53^{1.7}} = \frac{35{,}520}{0.0154\times3.577\times10^5\times8.535} = 0.7555$$

$$\dot q = 3.722\times10^4\times0.7555^3 = 1.60\times10^4\,\mathrm{W/m^2},\qquad h = \frac{\dot q}{\Delta T} = 1070\,\mathrm{W/m^2K}$$

2. **(ii) CHF.** $L^* = 0.1\times646.7 = 64.7 > 27$, so it is a large flat heater and $C_{cr} = 0.149$:

$$\dot q_{max} = 0.149\times3.577\times10^5\times[0.01424\times9.81\times2.975^2\times607.0]^{1/4} = 2.79\times10^5\,\mathrm{W/m^2}$$

The plate runs at 5.8% of CHF. Rohsenow inverted at $\dot q_{max}$ gives $\Delta T_{cr} \approx 39^\circ\mathrm{C}$.

3. **Comparison with water** (polished copper, $C_{sf} = 0.013$, same $\Delta T = 15^\circ\mathrm{C}$): Rohsenow gives about $4.8\times10^5\,\mathrm{W/m^2}$, roughly 30 times the pentane flux, and the water CHF (about 1.26 MW/m²) is about 4.5 times higher. Organic liquids have much smaller $h_{fg}$ and $\sigma$, and a larger $\mathrm{Pr}^{1.7}$ penalty. They boil far less effectively, so reboilers for hydrocarbons need much more area per kW.`,
          answer: String.raw`$\dot q \approx 1.6\times10^4\,\mathrm{W/m^2}$, $h \approx 1.07\,\mathrm{kW/m^2K}$; $\dot q_{max} \approx 2.8\times10^5\,\mathrm{W/m^2}$ ($L^* = 65$, $C_{cr} = 0.149$). Water at the same $\Delta T$ gives about 30 times the flux and about 4.5 times the CHF.` }
      ] }
  ] });
