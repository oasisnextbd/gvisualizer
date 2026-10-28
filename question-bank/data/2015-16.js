QB.paper({
  year: "2015-16", date: "24/01/2017", marks: 210,
  rules: String.raw`Section A: Q1 compulsory (45 marks) + any two of Q2–Q4. Section B: any three of Q5–Q8.`,
  questions: [
    { id: "2015-16-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw`20,160 lb/hr of a 30% $\mathrm{K_3PO_4}$ solution is to be cooled from 150 to 90°F using well water from 68 to 90°F. Pressure drops of 10 psi are allowable on both streams, and a total dirt factor of 0.002 is required. A 1-2 shell-and-tube heat exchanger is being used for this process.

| Shell side | Tube side |
|---|---|
| ID = 10.02 in | BWG 16 |
| Baffle spacing = 2 in | Number of tubes = 52; tube length = 16 ft |
| $a_s = 0.0347\,\mathrm{ft^2}$ | Tube OD = 0.75 in; tube ID = 0.62 in |
| | Pitch = 1 in square |

Physical properties at the caloric temperature:

| Property | Phosphate solution | Water |
|---|---|---|
| Viscosity, lb/ft·h | 2.90 | 2.20 |
| Thermal conductivity, Btu/h·ft·°F | 0.33 | 0.386 |
| Specific heat, Btu/lb·°F | 0.757 | 1.0 |

(Specific gravity of the phosphate solution at 120°F = 1.30, as in the original problem.)`,
      parts: [
        { id: "2015-16-Q1a", label: "(a)", marks: "5",
          topic: "shell-tube", sub: "K₃PO₄ cooler – temperature profile and LMTD",
          type: "numerical", syllabus: "in", repeats: ["2012-13-Q5a"],
          text: String.raw`Draw a temperature profile along the heat exchanger length, and find the log mean temperature difference.`,
          solution: String.raw`**Given:** hot (phosphate, shell) $T_1 = 150 \to T_2 = 90^\circ$F; cold (water, tubes) $t_1 = 68 \to t_2 = 90^\circ$F; 1 shell pass, 2 tube passes.

**Sketch (1-2 exchanger):** x-axis = length from the shell-inlet end (0) to the far end (L); y-axis = temperature, °F.
- Shell fluid: one curve falling from 150 °F at x = 0 to 90 °F at x = L (steepest near the hot end).
- Water, pass 1 (enters at the end where the shell fluid leaves, x = L): rises from 68 °F at x = L to an intermediate temperature at x = 0 (parallel-flow-like with respect to the shell fluid for this pass).
- Water, pass 2: returns from x = 0 to x = L, rising further to 90 °F at the outlet (counter-flow pass).
- The two tube-side curves meet at the return end (x = 0); none of the water curves crosses the shell curve. Note $t_2 = T_2 = 90^\circ$F, so the outlet ends approach each other closely; this is why $F_T$ falls to ≈ 0.81.

**LMTD (counter-flow basis):**
$$\Delta t_1 = T_1 - t_2 = 150 - 90 = 60^\circ\mathrm{F}, \qquad \Delta t_2 = T_2 - t_1 = 90 - 68 = 22^\circ\mathrm{F}$$
$$\mathrm{LMTD} = \frac{60 - 22}{\ln(60/22)} = 37.9^\circ\mathrm{F}$$

**Correction for 1-2:** $R = \dfrac{150-90}{90-68} = 2.73$, $S = \dfrac{90-68}{150-68} = 0.268$ → $F_T = 0.81$ (Holman Fig. 10-8 / exact 1-2 formula gives 0.808)
$$\Delta t = F_T\,\mathrm{LMTD} = 0.808(37.9) = 30.6^\circ\mathrm{F}$$

**Caloric temperatures:** arithmetic means (aqueous streams, $K_c$ chart not needed): $T_c = 120^\circ$F, $t_c = 79^\circ$F – the temperatures at which the given properties apply.`,
          answer: String.raw`LMTD = 37.9 °F; with R = 2.73, S = 0.268, $F_T$ = 0.81 → Δt = 30.6 °F.` },
        { id: "2015-16-Q1b", label: "(b)", marks: "3",
          topic: "shell-tube", sub: "Which fluid in the tubes",
          type: "theory", syllabus: "in", repeats: ["2012-13-Q5a"],
          text: String.raw`Which liquid would you place in the tube side and why?`,
          solution: String.raw`**Well water in the tubes, phosphate solution in the shell.**
- Well (raw) water is the fouling, scale-forming stream; deposits inside straight tubes are easily removed mechanically, whereas the shell side is hard to clean.
- Water has the larger flow (41 600 lb/h vs 20 160 lb/h): through 26 tubes per pass it gives a good velocity (≈ 3.4 ft/s) and turbulent flow (Re ≈ 18 000) without exceeding the allowed ΔP.
- Cooling water is also corrosive; only tubes and channels then need corrosion-resistant material.
- The phosphate solution is more viscous (2.90 vs 2.20 lb/ft·h) and has the smaller flow; on the shell side the close (2 in) baffles produce cross-flow turbulence at a lower Re, giving a good $h_o$.`,
          answer: String.raw`Water in the tubes (fouling, cleanable, larger flow, corrosion); phosphate in the shell (smaller, more viscous stream benefits from baffled cross-flow).` },
        { id: "2015-16-Q1c", label: "(c)", marks: "14",
          topic: "shell-tube", sub: "K₃PO₄ cooler – h_i and h_o (Kern)",
          type: "numerical", syllabus: "in", repeats: ["2012-13-Q5a"],
          text: String.raw`Determine the tube-side and shell-side heat transfer coefficients, $h_i$ and $h_o$, respectively.`,
          solution: String.raw`**Assumptions:** $\phi = (\mu/\mu_w)^{0.14} = 1$ on both sides (no wall viscosities given); 25% cut segmental baffles; properties as given at $T_c = 120^\circ$F, $t_c = 79^\circ$F.

### Heat balance
$$Q = Wc(T_1 - T_2) = 20\,160(0.757)(60) = 915\,700\ \mathrm{Btu/h}$$
$$w = \frac{Q}{c(t_2 - t_1)} = \frac{915\,700}{1.0(22)} = 41\,620\ \mathrm{lb/h}$$

### Shell side – phosphate solution
1. $a_s = \dfrac{ID\,C'\,B}{144P_T} = \dfrac{10.02(0.25)(2)}{144(1)} = 0.0347\ \mathrm{ft^2}$ (as given)
2. $G_s = W/a_s = 20\,160/0.0347 = 581\,000\ \mathrm{lb/h\,ft^2}$
3. Square pitch: $D_e = \dfrac{4(P_T^2 - \pi d_o^2/4)}{\pi d_o} = \dfrac{4(1^2 - \pi(0.75)^2/4)}{\pi(0.75)} = 0.95\ \mathrm{in} = 0.0792\ \mathrm{ft}$
4. $\mathrm{Re}_s = \dfrac{D_eG_s}{\mu} = \dfrac{0.0792(581\,000)}{2.90} = 15\,860$
5. $j_H \approx 73.5$ (Kern Fig. 28 at Re = $1.59\times10^4$ reads ≈ 70–75; curve fit $0.36\,\mathrm{Re}^{0.55} = 73.5$ used)
6. $\left(\dfrac{c\mu}{k}\right)^{1/3} = \left(\dfrac{0.757(2.90)}{0.33}\right)^{1/3} = 1.881$
7. $$h_o = j_H\frac{k}{D_e}\left(\frac{c\mu}{k}\right)^{1/3}\phi_s = 73.5\left(\frac{0.33}{0.0792}\right)(1.881)(1) = 576\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

### Tube side – water
1. Flow area per tube $a_t' = \pi(0.62)^2/4 = 0.302\ \mathrm{in^2}$; $a_t = \dfrac{N_ta_t'}{144n} = \dfrac{52(0.302)}{144(2)} = 0.0545\ \mathrm{ft^2}$
2. $G_t = w/a_t = 41\,620/0.0545 = 763\,300\ \mathrm{lb/h\,ft^2}$; velocity $V = G_t/(3600\rho) = 763\,300/(3600\times62.5) = 3.39$ ft/s
3. $D = 0.62/12 = 0.0517$ ft; $\mathrm{Re}_t = DG_t/\mu = 0.0517(763\,300)/2.20 = 17\,930$ (turbulent); $L/D = 16/0.0517 = 310$
4. $j_H \approx 68$ (Kern Fig. 24, turbulent line; fit $0.027\,\mathrm{Re}^{0.8} = 68.3$)
5. $\left(\dfrac{c\mu}{k}\right)^{1/3} = \left(\dfrac{1.0(2.20)}{0.386}\right)^{1/3} = 1.786$
6. $$h_i = j_H\frac{k}{D}\left(\frac{c\mu}{k}\right)^{1/3}\phi_t = 68.3\left(\frac{0.386}{0.0517}\right)(1.786) = 911\ \mathrm{Btu/h\,ft^2\,^\circ F}$$
7. Referred to the tube OD: $h_{io} = h_i\dfrac{ID}{OD} = 911\left(\dfrac{0.62}{0.75}\right) = 753\ \mathrm{Btu/h\,ft^2\,^\circ F}$

**Exam tip:** Kern's water chart (Fig. 25) at 3.39 ft/s and 79 °F gives $h_i \approx 800$ ($h_{io} \approx 660$); either reading is acceptable if you name the chart.`,
          answer: String.raw`Q = 915 700 Btu/h, w = 41 620 lb/h; shell Re = 15 860, $h_o \approx 576$; tube Re = 17 930, $h_i \approx 911$ ($h_{io} \approx 753$) Btu/h·ft²·°F.` },
        { id: "2015-16-Q1d", label: "(d)", marks: "4",
          topic: "shell-tube", sub: "Clean overall coefficient U_C",
          type: "numerical", syllabus: "in", repeats: ["2012-13-Q5a"],
          text: String.raw`Find the clean overall coefficient for the exchanger.`,
          solution: String.raw`Clean coefficient (tube-wall resistance neglected, both h referred to the outside area):
$$U_C = \frac{h_{io}h_o}{h_{io} + h_o} = \frac{753(576)}{753 + 576} = 326.5\ \mathrm{Btu/h\,ft^2\,^\circ F}$$
(Neither film dominates: $1/h_o = 0.00174$, $1/h_{io} = 0.00133$.)`,
          answer: String.raw`$U_C \approx 327\ \mathrm{Btu/h\,ft^2\,^\circ F}$.` },
        { id: "2015-16-Q1e", label: "(e)", marks: "12",
          topic: "shell-tube", sub: "U_D, dirt factor, pressure drops – suitability",
          type: "numerical", syllabus: "in", repeats: ["2012-13-Q5a"],
          text: String.raw`Calculate the design overall coefficient. Perform all the necessary calculations and check whether the exchanger is suitable for use.`,
          solution: String.raw`### Design coefficient and dirt factor
1. External surface per ft of ¾ in tube: $a'' = \pi(0.75)/12 = 0.1963\ \mathrm{ft^2/ft}$
2. $A = N_t a'' L = 52(0.1963)(16) = 163.3\ \mathrm{ft^2}$
3. $$U_D = \frac{Q}{A\,\Delta t} = \frac{915\,700}{163.3(30.6)} = 183\ \mathrm{Btu/h\,ft^2\,^\circ F}$$
4. $$R_d = \frac{U_C - U_D}{U_CU_D} = \frac{326.5 - 183.1}{326.5(183.1)} = 0.0024\ \mathrm{h\,ft^2\,^\circ F/Btu}$$
5. Required: 0.002 → $R_d$(calc) > $R_d$(req). With $R_d = 0.002$ the required $U_D = 1/(1/326.5 + 0.002) = 197.5$, required $A = 915\,700/(197.5\times30.6) = 151\ \mathrm{ft^2}$ → about 8% excess surface.

### Shell-side pressure drop
1. $\mathrm{Re}_s = 15\,860$ → $f \approx 0.00197\ \mathrm{ft^2/in^2}$ (Kern Fig. 29 ≈ 0.0019; fit $\exp(0.576 - 0.19\ln\mathrm{Re})/144$)
2. Crossings $N + 1 = 12L/B = 12(16)/2 = 96$; $D_s = 10.02/12 = 0.835$ ft; s = 1.30
3. $$\Delta P_s = \frac{fG_s^2D_s(N+1)}{5.22\times10^{10}D_e s\phi_s} = \frac{0.00197(581\,000)^2(0.835)(96)}{5.22\times10^{10}(0.0792)(1.30)(1)} = 9.9\ \mathrm{psi}$$

### Tube-side pressure drop
1. $\mathrm{Re}_t = 17\,930$ → $f \approx 0.00023\ \mathrm{ft^2/in^2}$, read from Kern Fig. 26 (the fit $4(0.0035 + 0.264\,\mathrm{Re}^{-0.42})/144 = 0.000217$ runs slightly low)
2. $$\Delta P_t = \frac{fG_t^2Ln}{5.22\times10^{10}Ds\phi_t} = \frac{0.00023(763\,300)^2(16)(2)}{5.22\times10^{10}(0.0517)(1)(1)} = 1.59\ \mathrm{psi}$$
(same as the slides' form $f' G_t^2 L n/(7.5\times10^{12} D s)$ with $f' = 144f$.)
3. Return loss: $\dfrac{V^2}{2g'} = \dfrac{(3.39)^2}{2(32.2)}\cdot\dfrac{62.5}{144} = 0.078$ psi (Kern Fig. 27 ≈ 0.075); $\Delta P_r = \dfrac{4n}{s}\dfrac{V^2}{2g'} = \dfrac{4(2)}{1}(0.078) = 0.62$ psi
4. $\Delta P_T = 1.59 + 0.62 = 2.2$ psi

### Verdict
| | Calculated | Allowed / required |
|---|---|---|
| $U_C$ / $U_D$ | 327 / 183 | – |
| $R_d$ | 0.0024 | 0.002 |
| $\Delta P$ shell (phosphate) | 9.9 psi | 10 psi |
| $\Delta P$ tube (water) | 2.2 psi | 10 psi |

The dirt factor exceeds the requirement and both pressure drops are within 10 psi, so **the exchanger is suitable** – but the shell side is at its pressure-drop limit; wider baffle spacing would cut $\Delta P_s$ but also $h_o$.

**Exam tip:** with Kern's water chart ($h_{io} \approx 660$) you get $U_C \approx 283$, $R_d \approx 0.0019$ ≈ 0.002 – the same conclusion (acceptable, little margin).`,
          answer: String.raw`A = 163 ft², $U_D \approx 183$, $R_d \approx 0.0024 > 0.002$; ΔP_s ≈ 9.9 psi, ΔP_t ≈ 2.2 psi (≤ 10) → suitable.` },
        { id: "2015-16-Q1f", label: "(f)", marks: "7",
          topic: "shell-tube", sub: "TEMA sheet – K₃PO₄ cooler",
          type: "numerical", syllabus: "in", repeats: ["2012-13-Q5a"],
          text: String.raw`Fill in the attached TEMA sheet and attach it to your answer script.`,
          solution: String.raw`| Item | Shell side | Tube side |
|---|---|---|
| Size and type | 10.02 in ID × 192 in (16 ft), 1-2 exchanger, one shell | |
| Surface per unit | 163 ft² (outside) | |
| Fluid | 30% K₃PO₄ solution | Well water |
| Total flow, lb/h | 20 160 | 41 620 |
| Temperature in / out, °F | 150 / 90 | 68 / 90 |
| Specific gravity | 1.30 | 1.0 |
| Viscosity, lb/ft·h | 2.90 | 2.20 |
| Specific heat, Btu/lb·°F | 0.757 | 1.0 |
| Thermal conductivity, Btu/h·ft·°F | 0.33 | 0.386 |
| Velocity | – (mass velocity 581 000 lb/h·ft²) | 3.39 ft/s |
| Number of passes | 1 | 2 |
| Pressure drop allowed / calculated, psi | 10 / 9.9 | 10 / 2.2 |
| Film coefficient, Btu/h·ft²·°F | $h_o = 576$ | $h_{io} = 753$ ($h_i = 911$) |
| Fouling resistance | 0.002 total required; 0.0024 available | |
| Heat exchanged | 915 700 Btu/h | |
| MTD (corrected) | 30.6 °F (LMTD 37.9, $F_T$ = 0.81) | |
| Transfer rate | $U_D = 183$ (service), $U_C = 327$ (clean) Btu/h·ft²·°F | |
| Tubes | 52, ¾ in OD, 16 BWG (0.065 in wall, 0.62 in ID), 16 ft, 1 in square pitch | |
| Shell | 10.02 in ID | |
| Baffles | segmental, 25% cut, 2 in spacing (96 crossings) | |`,
          answer: String.raw`TEMA sheet: 10.02 in × 16 ft 1-2, 163 ft², Q = 915 700 Btu/h, Δt = 30.6 °F, $h_o$ 576 / $h_{io}$ 753, $U_C$ 327, $U_D$ 183, $R_d$ 0.0024, ΔP 9.9 / 2.2 psi.` },
      ] },
    { id: "2015-16-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q2a", label: "(a)", marks: "15",
          topic: "boiling", sub: "Leidenfrost point; pool boiling curve",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`What is the Leidenfrost point? With the help of a neat sketch of the pool boiling curve, discuss the main regimes of the curve.`,
          solution: String.raw`**Leidenfrost point:** the point of **minimum heat flux** $q_{min}$ on the boiling curve (water at 1 atm: $\Delta T_e \approx 120^\circ$C), where a stable vapour film first covers the whole surface. Beyond it the liquid no longer wets the surface (e.g. water droplets "dance" on a very hot pan, floating on their own vapour).

**Sketch:** log–log plot of heat flux $q''$ (W/m², ≈ $10^3$–$10^7$) versus excess temperature $\Delta T_e = T_s - T_{sat}$ (≈ 1–1000 °C). The curve rises slowly (A–B), then steeply (B–C) to a peak C ($q_{max}$, ≈ 1 MW/m² for water at $\Delta T_e \approx 30^\circ$C), falls (C–D) to a minimum D (Leidenfrost, $\Delta T_e \approx 120^\circ$C), and then rises again (D–E). A dashed horizontal arrow from C to the far right (ΔT ≈ 1000 °C) shows the burnout jump under heat-flux control.

**Regimes:**
1. **Natural convection boiling** ($\Delta T_e \lesssim 5^\circ$C, to point A): liquid slightly superheated; motion by natural convection; evaporation at the free surface; no bubbles at the wall.
2. **Nucleate boiling** (A–C, $5 \lesssim \Delta T_e \lesssim 30^\circ$C):
   - A–B, isolated bubbles: bubbles form at nucleation sites and collapse/detach; strong stirring raises h.
   - B–C, jets and columns: bubbles merge into continuous vapour columns; highest h; most desirable regime (Rohsenow correlation).
3. **Critical heat flux** at C ($q_{max}$, burnout point): vapour leaves so fast that liquid cannot reach the surface (Zuber/Lienhard correlation).
4. **Transition boiling** (C–D, $30 \lesssim \Delta T_e \lesssim 120^\circ$C): unstable, partly nucleate and partly film; patches of vapour film form and collapse; q falls as ΔT rises – negative slope; reached only under temperature control.
5. **Film boiling** (beyond D): continuous vapour blanket; heat by conduction through vapour and, at high T, radiation; q rises again with ΔT.

**Why it matters:** with an electric (flux-controlled) heater, raising q beyond $q_{max}$ makes the surface jump from C to E at the same flux – temperature can exceed the melting point (burnout). Hence design heat flux is kept well below $q_{max}$.`,
          answer: String.raw`Leidenfrost point = $q_{min}$, onset of stable film boiling; regimes: natural convection → nucleate (isolated bubbles, columns) → CHF ($q_{max}$) → transition → film boiling.` },
        { id: "2015-16-Q2b", label: "(b)", marks: "15",
          topic: "boiling", sub: "CHF on a polished steel heater; burnout temperature",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Water is to be boiled at atmospheric pressure on a 3-cm-diameter mechanically polished steel heater. Determine the maximum heat flux that can be attained in the nucleate boiling regime and the temperature at which burnout will occur.

At 100°C: $\rho_v = 0.6\,\mathrm{kg/m^3}$, $\sigma = 0.0589$ N/m and $h_{fg} = 2257\times10^3$ J/kg.`,
          solution: String.raw`**Given:** water at 1 atm, $T_{sat} = 100^\circ$C, horizontal cylinder D = 0.03 m, mechanically polished (stainless) steel. Remaining liquid properties at 100 °C (Çengel Table A-9): $\rho_l = 957.9\,\mathrm{kg/m^3}$, $\mu_l = 0.282\times10^{-3}\,\mathrm{kg/m\,s}$, $c_{pl} = 4217\,\mathrm{J/kg\,K}$, $\mathrm{Pr}_l = 1.75$.

**Find:** $q_{max}$ and the surface temperature at that point.

1. Dimensionless size (Lienhard): $L^* = \dfrac{D}{2}\left[\dfrac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2} = 0.015\left[\dfrac{9.81(957.3)}{0.0589}\right]^{1/2} = 5.99$
Large horizontal cylinder ($L^* > 1.2$) → $C_{cr} = 0.12$ (slides' table).
2. Critical heat flux:
$$q_{max} = C_{cr}h_{fg}\left[\sigma g\rho_v^2(\rho_l - \rho_v)\right]^{1/4} = 0.12(2257\times10^3)\left[0.0589(9.81)(0.6)^2(957.3)\right]^{1/4}$$
$$q_{max} = 1.02\times10^6\,\mathrm{W/m^2} \approx 1017\,\mathrm{kW/m^2}$$
3. Surface temperature at $q_{max}$ from Rohsenow (nucleate boiling holds up to C); water–mechanically polished stainless steel: $C_{sf} = 0.0130$, $n = 1.0$ (Çengel Table 10-3):
$$q'' = \mu_lh_{fg}\left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2}\left[\frac{c_{pl}\Delta T_e}{C_{sf}h_{fg}\mathrm{Pr}_l^n}\right]^3$$
$$1.017\times10^6 = (0.282\times10^{-3})(2257\times10^3)(399.3)\left[\frac{4217\,\Delta T_e}{0.0130(2257\times10^3)(1.75)}\right]^3$$
$\Rightarrow \Delta T_e = 19.3^\circ$C
4. $T_s = 100 + 19.3 = 119.3^\circ\mathrm{C} \approx 119^\circ$C.

**Why it matters:** if the heater flux is pushed above ≈ 1 MW/m² (temperature ≈ 119 °C), the surface jumps to film boiling at ≈ 1000 °C and may burn out.`,
          answer: String.raw`$L^* = 6.0$, $C_{cr} = 0.12$, $q_{max} \approx 1.02\,\mathrm{MW/m^2}$; Rohsenow gives $\Delta T_e \approx 19^\circ$C → $T_s \approx 119^\circ$C.` },
      ] },
    { id: "2015-16-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q3a", label: "(a)", marks: "15",
          topic: "condensation", sub: "Steam condenser, 3 × 4 horizontal tube bank",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q7d"],
          text: String.raw`The condenser of a steam power plant operates at a pressure of 7.38 kPa. Steam at this pressure condenses on the outer surfaces of 12 horizontal tubes (arranged in a rectangular array of 3 tubes high and 4 tubes wide) through which cooling water circulates. The outer diameter of the pipes is 3 cm, and the outer surfaces of the pipes are maintained at 30°C. Determine (a) the rate of heat transfer to the cooling water circulating in the pipes and (b) the rate of condensation of steam per unit length of a horizontal pipe.

The properties of water at the saturation temperature of 40°C corresponding to 7.38 kPa are $h_{fg} = 2407\times10^3$ J/kg and $\rho_v = 0.05\,\mathrm{kg/m^3}$.`,
          solution: String.raw`**Given:** $T_{sat} = 40^\circ$C, $T_s = 30^\circ$C, ΔT = 10 K, D = 0.03 m, N = 3 tubes per column, 12 tubes; $h_{fg} = 2407$ kJ/kg, $\rho_v = 0.05\,\mathrm{kg/m^3}$.

**Find:** Q and $\dot m$ per metre of tube length.

**Assumptions:** steady laminar film condensation; condensate from upper tubes falls onto lower ones; liquid properties at $T_f = 35^\circ$C (Çengel Table A-9): $\rho_l = 994.0\,\mathrm{kg/m^3}$, $\mu_l = 0.720\times10^{-3}\,\mathrm{kg/m\,s}$, $k_l = 0.623\,\mathrm{W/m\,K}$, $c_{pl} = 4178\,\mathrm{J/kg\,K}$. Basis L = 1 m.

1. Modified latent heat: $h_{fg}^* = h_{fg} + 0.68c_{pl}(T_{sat} - T_s) = 2407\times10^3 + 0.68(4178)(10) = 2435\times10^3$ J/kg.
2. Single horizontal tube:
$$h_{horiz} = 0.729\left[\frac{g\rho_l(\rho_l - \rho_v)h_{fg}^*k_l^3}{\mu_l(T_{sat} - T_s)D}\right]^{1/4} = 0.729\left[\frac{9.81(994)(994 - 0.05)(2435\times10^3)(0.623)^3}{(0.720\times10^{-3})(10)(0.03)}\right]^{1/4}$$
$$h_{horiz} = 9295\,\mathrm{W/m^2K}$$
3. Vertical tier of N = 3 tubes: $h_{3} = h_{horiz}N^{-1/4} = 9295(3)^{-1/4} = 7062\,\mathrm{W/m^2K}$.
4. Surface per metre: $A = 12\pi DL = 12\pi(0.03)(1) = 1.131\,\mathrm{m^2}$.
5. **(a)** $Q = h_3A(T_{sat} - T_s) = 7062(1.131)(10) = 7.99\times10^4$ W per m length (≈ 80 kW/m).
6. **(b)** Total condensation: $\dot m = Q/h_{fg}^* = 79\,870/2.435\times10^6 = 0.0328$ kg/s per m; per tube: $0.0328/12 = 2.73\times10^{-3}$ kg/s per m of tube.`,
          answer: String.raw`$h_1 = 9295$, $h_{3\,tubes} = 7062\,\mathrm{W/m^2K}$; Q ≈ 79.9 kW per m; $\dot m$ ≈ 0.0328 kg/s per m (≈ 0.00273 kg/s per tube per m).` },
        { id: "2015-16-Q3b", label: "(b)", marks: "15",
          topic: "natural-convection", sub: "Fine heated wire in air (horizontal cylinder)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`What is the significance of the Grashof number in natural convection? A fine wire having a diameter of 0.02 mm is maintained at a constant temperature of 54°C by an electric current. The wire is exposed to air at 1 atm and 0°C. Calculate the electric power necessary to maintain the wire temperature if the length is 50 cm.`,
          solution: String.raw`**Significance of Gr:** $\mathrm{Gr} = g\beta\Delta TL^3/\nu^2$ is the ratio of buoyancy to viscous forces. It plays the role that Re plays in forced convection: it sets the flow strength and the laminar/turbulent transition (vertical plate ≈ $10^9$), and with Pr it forms Ra = Gr·Pr in $\mathrm{Nu} = C\,\mathrm{Ra}^n$. Gr/Re² tells whether natural convection matters in a forced flow.

**Given:** d = $2\times10^{-5}$ m, L = 0.5 m, $T_w = 54^\circ$C, $T_\infty = 0^\circ$C, air at 1 atm.

**Find:** electric power = convective heat loss.

**Assumptions:** horizontal wire, still air, radiation negligible (tiny area), steady.

1. Film temperature $T_f = 27^\circ$C = 300 K; $\beta = 1/300\,\mathrm{K^{-1}}$. Air at 300 K (Holman Table A-5): $\nu = 15.69\times10^{-6}\,\mathrm{m^2/s}$, $k = 0.02624\,\mathrm{W/m\,K}$, Pr = 0.708.
2. $$\mathrm{Gr}_d\mathrm{Pr} = \frac{g\beta\Delta Td^3}{\nu^2}\mathrm{Pr} = \frac{9.81(1/300)(54)(2\times10^{-5})^3}{(15.69\times10^{-6})^2}(0.708) = 4.06\times10^{-5}$$
3. Horizontal cylinder, Holman Table 9-1 range $10^{-10} < \mathrm{Gr}\,\mathrm{Pr} < 10^{-2}$: C = 0.675, n = 0.058
$$\mathrm{Nu}_d = 0.675(4.06\times10^{-5})^{0.058} = 0.376$$
4. $h = \mathrm{Nu}\,k/d = 0.376(0.02624)/(2\times10^{-5}) = 493\,\mathrm{W/m^2K}$
5. $$q = h\pi dL(T_w - T_\infty) = 493\,\pi(2\times10^{-5})(0.5)(54) = 0.84\,\mathrm{W}$$

(Churchill–Chu for horizontal cylinders gives Nu ≈ 0.435, q ≈ 0.97 W; the Holman Table 9-1 value is the textbook answer.)

**Exam tip:** h is large (≈ 500 W/m²K) only because d is tiny – Nu itself is below 1, i.e. conduction-dominated.`,
          answer: String.raw`Gr·Pr = $4.06\times10^{-5}$, Nu = 0.376, h ≈ 493 W/m²K → power ≈ 0.84 W.` },
      ] },
    { id: "2015-16-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q4a", label: "(a)", marks: "6",
          topic: "heat-exchangers", sub: "Why counter-flow is preferred",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why is counter flow preferred to parallel flow? Explain.`,
          solution: String.raw`- **Larger mean ΔT:** for the same terminal temperatures, $\mathrm{LMTD}_{counter} > \mathrm{LMTD}_{parallel}$ (ΔT is nearly uniform along a counter-flow exchanger, while in parallel flow it is large at the inlet and collapses at the outlet). Less area is needed for the same duty: $A = Q/(U\,\Delta T_{lm})$.
  Example: hot 150→90, cold 68→90 °F: counter-flow LMTD = 37.9 °F; parallel flow is impossible because the cold outlet (90) cannot reach the hot outlet (90).
- **Wider temperature range:** in counter flow the cold-fluid outlet can exceed the hot-fluid outlet ($t_2 > T_2$, temperature cross); in parallel flow $t_2 < T_2$ always.
- **Higher effectiveness:** for the same NTU, ε(counter) > ε(parallel); counter-flow ε → 1 as NTU → ∞, parallel flow is limited to $1/(1+C_r)$.
- **More uniform wall temperatures and thermal stresses** (smaller local ΔT variations).
- Parallel flow is used only when the cold fluid must not overheat, or a rapid initial temperature change is needed (e.g. viscous fluids, heat-sensitive materials).`,
          answer: String.raw`Counter flow gives a larger, more uniform LMTD (less area), allows $t_2 > T_2$ and higher effectiveness.` },
        { id: "2015-16-Q4b", label: "(b)", marks: "10",
          topic: "heat-exchangers", sub: "Shell-side D_e: square and triangular pitch",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate the equivalent diameter for square-pitch and triangular-pitch tube arrangements of a shell-and-tube heat exchanger where the tube OD is 0.75 inch and the clearance is 0.25 inch.`,
          solution: String.raw`**Given:** $d_o = 0.75$ in, $C' = 0.25$ in → pitch $P_T = d_o + C' = 1.0$ in.

$D_e = 4 \times$ (free flow area) / (wetted perimeter), taken over the unit cell of the layout (Kern).

**Square pitch** (unit cell = square $P_T \times P_T$ containing one tube):
$$D_e = \frac{4\left(P_T^2 - \dfrac{\pi d_o^2}{4}\right)}{\pi d_o} = \frac{4\left(1^2 - \dfrac{\pi(0.75)^2}{4}\right)}{\pi(0.75)} = \frac{4(1 - 0.4418)}{2.356} = 0.948\,\mathrm{in} \;(0.079\,\mathrm{ft})$$

**Triangular pitch** (unit cell = equilateral triangle of side $P_T$, height $0.86P_T$, containing half a tube):
$$D_e = \frac{4\left(\dfrac12P_T\times0.86P_T - \dfrac12\dfrac{\pi d_o^2}{4}\right)}{\dfrac12\pi d_o} = \frac{4(0.430 - 0.2209)}{1.178} = 0.710\,\mathrm{in} \;(0.059\,\mathrm{ft})$$

(Kern Fig. 28 tabulates 0.95 in and 0.73 in; the 0.73 uses slightly different rounding of the triangle height.) Triangular pitch packs tubes more tightly, so $D_e$ is smaller.`,
          answer: String.raw`$P_T = 1$ in: square $D_e = 0.95$ in; triangular $D_e = 0.71$ in (Kern table 0.73).` },
        { id: "2015-16-Q4c", label: "(c)", marks: "6",
          topic: "shell-tube", sub: "Factors for shell-side vs tube-side fluid",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`List some factors that should be considered during the selection of fluid for the shell side and the tube side.`,
          solution: String.raw`Put in the **tubes**:
- **Corrosive** fluid – only tubes, tube sheets and channels need expensive alloy.
- **Fouling / scaling** fluid (cooling water, dirty streams) – tubes are easy to clean mechanically.
- **High-pressure** fluid – small-diameter tubes are cheaper to make thick than a large shell.
- **High-temperature** fluid – fewer parts at high temperature, less heat loss and stress on the shell.
- **Toxic or expensive** fluid – fewer leak paths.
- The fluid with the **larger flow** often goes in the tubes (passes can be arranged to set velocity).

Put in the **shell**:
- **Viscous** fluid or the one with **low flow rate / low h** – baffled cross-flow becomes turbulent at Re ≈ 100–200 and raises h.
- **Condensing vapours** (more area for vapour flow, condensate drains easily).
- The stream with the **lower allowable pressure drop** (shell ΔP can be tuned by baffle spacing).`,
          answer: String.raw`Tubes: corrosive, fouling, high-pressure, high-temperature, toxic streams (and cooling water); shell: viscous/low-flow streams, condensing vapours, low allowable ΔP.` },
        { id: "2015-16-Q4d", label: "(d)", marks: "8",
          topic: "heat-exchangers", sub: "Annulus D_e (heat transfer) vs D_e′ (pressure drop)",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`What are the two equivalent diameters used in heat exchanger calculations? Explain the differences with examples.`,
          solution: String.raw`> The slides use the shell-side $D_e$; the double-pipe annulus pair below is from Kern ch. 6.

For an annulus (inner pipe OD $D_1$, outer pipe ID $D_2$), the flow area is $\pi(D_2^2 - D_1^2)/4$ in both cases, but the **perimeter** used differs:

| | Heat transfer: $D_e$ | Pressure drop (friction): $D_e'$ |
|---|---|---|
| Perimeter | **heated** perimeter only, $\pi D_1$ (heat passes only through the inner pipe) | **wetted** perimeter, $\pi(D_1 + D_2)$ (friction acts on both walls) |
| Formula | $D_e = \dfrac{4\cdot\pi(D_2^2 - D_1^2)/4}{\pi D_1} = \dfrac{D_2^2 - D_1^2}{D_1}$ | $D_e' = \dfrac{4\cdot\pi(D_2^2 - D_1^2)/4}{\pi(D_1 + D_2)} = D_2 - D_1$ |
| Used in | $\mathrm{Re}$ and $h_o = j_H(k/D_e)(c\mu/k)^{1/3}$ | $\mathrm{Re}'$ and $\Delta F_a = 4fG_a^2L/(2g\rho^2D_e')$ |

**Example:** 2 × 1¼ in IPS double pipe: $D_2 = 2.067$ in, $D_1 = 1.66$ in.
- $D_e = (2.067^2 - 1.66^2)/1.66 = 0.914$ in
- $D_e' = 2.067 - 1.66 = 0.407$ in

$D_e > D_e'$ always. For shell-side flow (Kern), $D_e$ is based on the unit cell: square pitch $4(P_T^2 - \pi d_o^2/4)/(\pi d_o)$ – e.g. 0.95 in for ¾ in tubes on 1 in square – and the same $D_e$ is used for both h and ΔP there.`,
          answer: String.raw`Annulus: $D_e = (D_2^2 - D_1^2)/D_1$ (heated perimeter, for h) and $D_e' = D_2 - D_1$ (wetted perimeter, for ΔP); 2 × 1¼ in IPS: 0.914 in and 0.407 in.` },
      ] },
    { id: "2015-16-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q5a", label: "(a)", marks: "14",
          topic: "conduction", sub: "General 3-D heat conduction equation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Starting from Fourier's law of heat conduction, develop the general three-dimensional heat-conduction equation.`,
          solution: String.raw`**Assumptions:** Cartesian coordinates, stationary solid, uniform volumetric generation $\dot q$ (W/m³) allowed, properties may vary with position, no bulk motion.

1. **Control volume:** element $dx\,dy\,dz$ at $(x, y, z)$.
2. **Fourier's law:** heat entering the x-face: $q_x = -k\,dy\,dz\,\dfrac{\partial T}{\partial x}$. Heat leaving the opposite face (Taylor series):
$$q_{x+dx} = q_x + \frac{\partial q_x}{\partial x}dx$$
Net conduction into the element in x:
$$q_x - q_{x+dx} = -\frac{\partial q_x}{\partial x}dx = \frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right)dx\,dy\,dz$$
Similarly in y and z.
3. **Generation:** $\dot q\,dx\,dy\,dz$.
4. **Energy stored:** $\rho c\,\dfrac{\partial T}{\partial t}\,dx\,dy\,dz$.
5. **Energy balance:** (net in by conduction) + (generated) = (rate of storage); divide by $dx\,dy\,dz$:
$$\boxed{\frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\left(k\frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \dot q = \rho c\frac{\partial T}{\partial t}}$$
6. **Constant k:**
$$\frac{\partial^2T}{\partial x^2} + \frac{\partial^2T}{\partial y^2} + \frac{\partial^2T}{\partial z^2} + \frac{\dot q}{k} = \frac{1}{\alpha}\frac{\partial T}{\partial t}, \qquad \alpha = \frac{k}{\rho c}$$
7. **Special cases:**
- Steady with generation (Poisson): $\nabla^2T + \dot q/k = 0$
- Transient, no generation (Fourier/diffusion): $\nabla^2T = \dfrac{1}{\alpha}\dfrac{\partial T}{\partial t}$
- Steady, no generation (Laplace): $\nabla^2T = 0$

(Cylindrical form: $\dfrac{1}{r}\dfrac{\partial}{\partial r}\left(kr\dfrac{\partial T}{\partial r}\right) + \dfrac{1}{r^2}\dfrac{\partial}{\partial\phi}\left(k\dfrac{\partial T}{\partial\phi}\right) + \dfrac{\partial}{\partial z}\left(k\dfrac{\partial T}{\partial z}\right) + \dot q = \rho c\dfrac{\partial T}{\partial t}$.)`,
          answer: String.raw`$\nabla\cdot(k\nabla T) + \dot q = \rho c\,\partial T/\partial t$; constant k: $\nabla^2T + \dot q/k = (1/\alpha)\partial T/\partial t$.` },
        { id: "2015-16-Q5b", label: "(b)", marks: "16",
          topic: "conduction", sub: "Hollow sphere – heat flow",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive an expression for the heat flow from a hollow sphere. The inside and outside surfaces of the hollow sphere are maintained at $T_i$ and $T_o$ temperatures respectively.`,
          solution: String.raw`**Assumptions:** steady state, radial (1-D) conduction only, constant k, no heat generation; inner radius $r_i$ at $T_i$, outer radius $r_o$ at $T_o$.

1. **Governing equation** (spherical, steady, no generation):
$$\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dT}{dr}\right) = 0 \;\Rightarrow\; r^2\frac{dT}{dr} = C_1 \;\Rightarrow\; T = -\frac{C_1}{r} + C_2$$
2. **Boundary conditions:** $T(r_i) = T_i$, $T(r_o) = T_o$:
$$C_1 = \frac{T_i - T_o}{1/r_o - 1/r_i} = -\frac{T_i - T_o}{1/r_i - 1/r_o}$$
3. **Temperature profile:**
$$\frac{T - T_i}{T_o - T_i} = \frac{1/r_i - 1/r}{1/r_i - 1/r_o}$$
(hyperbolic, not linear or logarithmic).
4. **Heat flow** (Fourier, area $4\pi r^2$):
$$Q = -k(4\pi r^2)\frac{dT}{dr} = -4\pi kC_1 = \frac{4\pi k(T_i - T_o)}{\dfrac{1}{r_i} - \dfrac{1}{r_o}}$$
$$\boxed{Q = \frac{4\pi k\,r_ir_o(T_i - T_o)}{r_o - r_i}}$$
Q is independent of r (steady, no generation) though the flux $Q/(4\pi r^2)$ falls with r.
5. **Thermal resistance:** $R_{sph} = \dfrac{r_o - r_i}{4\pi k r_i r_o}$ (for composite spheres add in series, plus $1/(h4\pi r^2)$ for convection).
6. **Alternative (direct integration):** $Q = -k4\pi r^2\,dT/dr$ with Q constant → $Q\int_{r_i}^{r_o}dr/r^2 = -4\pi k\int_{T_i}^{T_o}dT$ → same result. Also $Q = kA_m(T_i - T_o)/(r_o - r_i)$ with geometric-mean area $A_m = 4\pi r_ir_o = \sqrt{A_iA_o}$.`,
          answer: String.raw`$Q = 4\pi k r_ir_o(T_i - T_o)/(r_o - r_i)$; $R = (r_o - r_i)/(4\pi kr_ir_o)$.` },
        { id: "2015-16-Q5c", label: "(c)", marks: "5",
          topic: "conduction", sub: "Thermal contact resistance",
          type: "theory", syllabus: "out", repeats: [],
          text: String.raw`Write a few words on "thermal contact resistance".`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

- Real surfaces are rough; when two solids are pressed together they touch only at discrete peaks (a few % of the nominal area). The gaps are filled with air or another fluid of low k.
- Heat crosses the interface by conduction through the contact spots and by conduction (plus radiation) across the gaps; this causes a finite **temperature drop** $\Delta T_{interface}$ at the joint, unlike the ideal "perfect contact" boundary condition.
- Defined per unit area: $R_c'' = \dfrac{\Delta T_{interface}}{q''}$ (m²·K/W); thermal contact conductance $h_c = 1/R_c''$. Typical $R_c'' \approx 10^{-5}$–$10^{-3}$ m²K/W (metals in air).
- It is treated as an extra resistance in series in composite-wall networks: $R_c = R_c''/A$.
- Decreases with: higher contact pressure, smoother surfaces, softer materials, a gap fluid of higher k (helium, thermal grease, oil), metallic foils (Al, Cu, In) inserted between the surfaces.
- Important for thin, high-k layers (electronics, bolted joints) where $R_c$ can be comparable to the wall resistance.`,
          answer: String.raw`Imperfect contact at rough interfaces gives a temperature jump; $R_c'' = \Delta T/q''$, reduced by pressure, smoothness and conductive fillers.` },
      ] },
    { id: "2015-16-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q6a", label: "(a)", marks: "5+8",
          topic: "insulation", sub: "Critical insulation thickness – cylinder",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Discuss the phenomenon called "critical insulation thickness". Derive the equation for the critical insulation thickness for a pipe.`,
          solution: String.raw`**Phenomenon:** adding insulation of outer radius r to a pipe of radius $r_1$ adds conduction resistance $\ln(r/r_1)/(2\pi kL)$, but at the same time enlarges the outer surface, which *reduces* the convection resistance $1/(2\pi rLh)$. For small pipes (or poor h, i.e. low-h surroundings) the second effect wins at first: heat loss **increases** with insulation up to a maximum at $r = r_c$, then decreases. Insulation reduces heat loss only if $r_1 \ge r_c$ or if enough is added to go well beyond $r_c$. Electric wires use this to dissipate more heat through thin insulation.

**Derivation** (steady, radial, constant k, uniform h and $T_\infty$, pipe surface at $T_1$):
1. $$Q = \frac{T_1 - T_\infty}{\dfrac{\ln(r/r_1)}{2\pi kL} + \dfrac{1}{2\pi rLh}} = \frac{T_1 - T_\infty}{R_{tot}(r)}$$
2. Maximum Q ⇔ minimum $R_{tot}$:
$$\frac{dR_{tot}}{dr} = \frac{1}{2\pi kL}\frac{1}{r} - \frac{1}{2\pi Lh}\frac{1}{r^2} = 0 \;\Rightarrow\; \boxed{r_c = \frac{k}{h}}$$
3. Check: $\dfrac{d^2R_{tot}}{dr^2} = -\dfrac{1}{2\pi kLr^2} + \dfrac{2}{2\pi Lhr^3}$; at $r = k/h$: $\dfrac{h^2}{2\pi Lk^3} > 0$ → minimum resistance (maximum heat loss).
4. Critical thickness $= r_c - r_1 = k/h - r_1$ (exists only if $r_1 < k/h$).

**Example:** k = 0.05 W/m·K, h = 10 W/m²K → $r_c = 5$ mm; most steam pipes are larger, so insulation always helps them.`,
          answer: String.raw`$r_c = k/h$ (cylinder); below $r_c$, insulation increases heat loss.` },
        { id: "2015-16-Q6b", label: "(b)", marks: "22",
          topic: "conduction", sub: "Insulated steam pipe – resistance network",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Steam at 320°C flows in a cast iron pipe (k = 80 W/m·°C) whose inner and outer diameters are 5 cm and 5.5 cm, respectively. The pipe is covered with 3-cm-thick glass wool insulation with k = 0.05 W/m·°C. Heat is lost to the surroundings at 5°C by natural convection and radiation, with a combined heat transfer coefficient of $18\,\mathrm{W/m^2\,^\circ C}$. Taking the heat transfer coefficient inside the pipe to be $60\,\mathrm{W/m^2\,^\circ C}$, determine the rate of heat loss from the steam per unit length of the pipe. Also determine the temperature drops across the pipe shell and the insulation.`,
          solution: String.raw`**Given:** $r_1 = 0.025$ m, $r_2 = 0.0275$ m, $r_3 = r_2 + 0.03 = 0.0575$ m; $k_p = 80$, $k_{ins} = 0.05$ W/m·°C; $h_i = 60$, $h_o = 18\,\mathrm{W/m^2\,^\circ C}$; $T_{\infty1} = 320^\circ$C, $T_{\infty2} = 5^\circ$C; L = 1 m.

**Find:** $\dot Q$ per metre, $\Delta T_{pipe}$, $\Delta T_{ins}$.

**Assumptions:** steady, 1-D radial, constant k, perfect contact between pipe and insulation.

1. Resistances in series (per metre):
- Inside convection: $R_i = \dfrac{1}{h_i 2\pi r_1L} = \dfrac{1}{60(2\pi)(0.025)} = 0.1061\,^\circ\mathrm{C/W}$
- Pipe wall: $R_p = \dfrac{\ln(r_2/r_1)}{2\pi k_pL} = \dfrac{\ln(2.75/2.5)}{2\pi(80)} = 0.00019\,^\circ\mathrm{C/W}$
- Insulation: $R_{ins} = \dfrac{\ln(r_3/r_2)}{2\pi k_{ins}L} = \dfrac{\ln(5.75/2.75)}{2\pi(0.05)} = 2.3479\,^\circ\mathrm{C/W}$
- Outside (combined): $R_o = \dfrac{1}{h_o 2\pi r_3L} = \dfrac{1}{18(2\pi)(0.0575)} = 0.1538\,^\circ\mathrm{C/W}$
2. $R_{tot} = 0.1061 + 0.0002 + 2.3479 + 0.1538 = 2.6079\,^\circ\mathrm{C/W}$
3. $$\dot Q = \frac{T_{\infty1} - T_{\infty2}}{R_{tot}} = \frac{320 - 5}{2.6079} = 120.8\,\mathrm{W}\ \text{per m}$$
4. Temperature drops ($\Delta T = \dot QR$):
- Pipe shell: $\Delta T_p = 120.8(0.00019) = 0.023^\circ$C
- Insulation: $\Delta T_{ins} = 120.8(2.3479) = 283.6^\circ$C
- (Inside film 12.8 °C, outside film 18.6 °C.)

**Why it matters:** the metal wall is negligible (0.007% of $R_{tot}$); the insulation carries 90% of the total temperature drop.`,
          answer: String.raw`$R_{tot} = 2.61\,^\circ$C/W, $\dot Q \approx 121$ W/m; ΔT pipe ≈ 0.02 °C, ΔT insulation ≈ 284 °C.` },
      ] },
    { id: "2015-16-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q7a", label: "(a)", marks: "22",
          topic: "boundary-layer", sub: "Integral method: δ = 4.64√(νx/u∞)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`An incompressible fluid is flowing past a smooth flat plate. Starting from the continuity and momentum equations for the system, show that the approximate thickness of the boundary layer is given by
$$\delta = 4.64\sqrt{\frac{\nu x}{u_\infty}}$$
The notations have their usual meanings. Notes for Q.7(a), for incompressible flow past a smooth flat plate:
- Continuity: $\dfrac{\partial u}{\partial x} + \dfrac{\partial v}{\partial y} = 0$
- Momentum: $\rho\left(u\dfrac{\partial u}{\partial x} + v\dfrac{\partial u}{\partial y}\right) = \mu\dfrac{\partial^2u}{\partial y^2} - \dfrac{\partial p}{\partial x}$
- Energy: $u\dfrac{\partial T}{\partial x} + v\dfrac{\partial T}{\partial y} = \alpha\dfrac{\partial^2T}{\partial y^2} + \dfrac{\mu}{\rho c_p}\left(\dfrac{\partial u}{\partial y}\right)^2$`,
          solution: String.raw`**Assumptions:** steady, 2-D, laminar, incompressible, constant properties; flat plate so $u_\infty$ = const and $\partial p/\partial x = 0$; at $y = \delta$, $u = u_\infty$ and $\partial u/\partial y = 0$.

**Step 1 – integrate the momentum equation across the layer** ($y = 0$ to $H > \delta$), with $\partial p/\partial x = 0$:
$$\int_0^H u\frac{\partial u}{\partial x}dy + \int_0^H v\frac{\partial u}{\partial y}dy = \nu\int_0^H\frac{\partial^2u}{\partial y^2}dy = \nu\left[\frac{\partial u}{\partial y}\right]_0^H = -\nu\left.\frac{\partial u}{\partial y}\right|_0$$

**Step 2 – eliminate v using continuity:** $v = -\int_0^y\dfrac{\partial u}{\partial x}dy$. Integrating the second term by parts:
$$\int_0^H v\frac{\partial u}{\partial y}dy = [uv]_0^H - \int_0^H u\frac{\partial v}{\partial y}dy = -u_\infty\int_0^H\frac{\partial u}{\partial x}dy + \int_0^H u\frac{\partial u}{\partial x}dy$$

**Step 3 – combine:**
$$\int_0^H\left(2u\frac{\partial u}{\partial x} - u_\infty\frac{\partial u}{\partial x}\right)dy = -\nu\left.\frac{\partial u}{\partial y}\right|_0 \;\Rightarrow\; \frac{d}{dx}\int_0^\delta u(u_\infty - u)\,dy = \nu\left.\frac{\partial u}{\partial y}\right|_0 = \frac{\tau_w}{\rho}$$
(the integrand is zero for $y > \delta$). This is the **von Kármán integral momentum equation**.

**Step 4 – assume a cubic profile** $u = a + by + cy^2 + dy^3$ with:
- $y = 0$: $u = 0$ → $a = 0$
- $y = 0$: $\partial^2u/\partial y^2 = 0$ (momentum eq. at the wall, $u = v = 0$, $dp/dx = 0$) → $c = 0$
- $y = \delta$: $u = u_\infty$ and $\partial u/\partial y = 0$ → $b = \dfrac{3u_\infty}{2\delta}$, $d = -\dfrac{u_\infty}{2\delta^3}$
$$\frac{u}{u_\infty} = \frac32\frac{y}{\delta} - \frac12\left(\frac{y}{\delta}\right)^3$$

**Step 5 – evaluate both sides** (η = y/δ):
$$\int_0^\delta u(u_\infty - u)dy = u_\infty^2\delta\int_0^1\left(\tfrac32\eta - \tfrac12\eta^3\right)\left(1 - \tfrac32\eta + \tfrac12\eta^3\right)d\eta = \frac{39}{280}u_\infty^2\delta$$
$$\nu\left.\frac{\partial u}{\partial y}\right|_0 = \frac{3}{2}\frac{\nu u_\infty}{\delta}$$

**Step 6 – solve:**
$$\frac{39}{280}u_\infty^2\frac{d\delta}{dx} = \frac{3\nu u_\infty}{2\delta} \;\Rightarrow\; \delta\,d\delta = \frac{140}{13}\frac{\nu}{u_\infty}dx$$
With $\delta = 0$ at $x = 0$:
$$\frac{\delta^2}{2} = \frac{140}{13}\frac{\nu x}{u_\infty} \;\Rightarrow\; \delta = \sqrt{\frac{280}{13}}\sqrt{\frac{\nu x}{u_\infty}} = 4.64\sqrt{\frac{\nu x}{u_\infty}}$$
i.e. $\delta/x = 4.64/\sqrt{\mathrm{Re}_x}$ (exact Blasius: 5.0). The energy equation is not needed for δ (it gives $\delta_t$). Valid for laminar flow, $\mathrm{Re}_x < 5\times10^5$.`,
          answer: String.raw`Integral momentum eq. + cubic profile → $\delta\,d\delta = (140/13)(\nu/u_\infty)dx$ → $\delta = 4.64\sqrt{\nu x/u_\infty}$.` },
        { id: "2015-16-Q7b", label: "(b)", marks: "13",
          topic: "boundary-layer", sub: "Air at 2 m/s – δ at 20 and 40 cm",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q7d", "2017-18-Q7b"],
          text: String.raw`Atmospheric air at 300 K flows over a flat plate at a speed of 2 m/s. If the viscosity of air at 300 K is $1.85\times10^{-5}$ kg/m·s, calculate the boundary layer thickness at distances of 20 cm and 40 cm from the leading edge of the plate.`,
          solution: String.raw`**Given:** air, p = 1 atm = 101 325 Pa, T = 300 K, $u_\infty = 2$ m/s, $\mu = 1.85\times10^{-5}$ kg/m·s; x = 0.2 and 0.4 m.

**Find:** δ at both x.

**Assumptions:** ideal gas, laminar boundary layer (checked), integral-method result.

1. Density: $\rho = \dfrac{p}{RT} = \dfrac{101\,325}{287(300)} = 1.177\,\mathrm{kg/m^3}$; $\nu = \mu/\rho = 1.85\times10^{-5}/1.177 = 1.572\times10^{-5}\,\mathrm{m^2/s}$.
2. x = 0.20 m: $\mathrm{Re}_x = \dfrac{u_\infty x}{\nu} = \dfrac{2(0.2)}{1.572\times10^{-5}} = 25\,445$ (laminar, < $5\times10^5$)
$$\delta = \frac{4.64x}{\sqrt{\mathrm{Re}_x}} = \frac{4.64(0.2)}{\sqrt{25\,445}} = 5.82\times10^{-3}\,\mathrm{m} = 5.8\,\mathrm{mm}$$
3. x = 0.40 m: $\mathrm{Re}_x = 50\,890$ (laminar)
$$\delta = \frac{4.64(0.4)}{\sqrt{50\,890}} = 8.23\times10^{-3}\,\mathrm{m} = 8.2\,\mathrm{mm}$$
4. Check: $\delta_{40}/\delta_{20} = \sqrt2 = 1.41$, as $\delta \propto \sqrt x$.`,
          answer: String.raw`ν = $1.57\times10^{-5}$ m²/s; δ(20 cm) ≈ 5.8 mm (Re = 25 400), δ(40 cm) ≈ 8.2 mm (Re = 50 900).` },
      ] },
    { id: "2015-16-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q8a", label: "(a)", marks: "11",
          topic: "boundary-layer", sub: "Reynolds–Colburn analogy",
          type: "derivation", syllabus: "in", repeats: ["2011-12-Q7a", "2014-15-Q3a", "2016-17-Q8a", "2017-18-Q8a", "2020-21-Q7a", "2022-23-Q3a"],
          text: String.raw`Derive the relation known as the Reynolds–Colburn analogy. Write a few words on its applicability.`,
          solution: String.raw`**Assumptions:** laminar flow over a flat plate, constant properties, $dp/dx = 0$, negligible viscous dissipation.

1. **Laminar flat-plate results** (integral method, slides):
- Local skin friction: $\tau_w = \mu\left.\dfrac{\partial u}{\partial y}\right|_0 = \dfrac{3\mu u_\infty}{2\delta}$ with $\delta = 4.64x\,\mathrm{Re}_x^{-1/2}$ →
$$C_{fx} = \frac{\tau_w}{\tfrac12\rho u_\infty^2} = 0.646\,\mathrm{Re}_x^{-1/2} \;(\text{exact } 0.664)$$
- Local heat transfer: $\mathrm{Nu}_x = 0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$.
2. **Stanton number:**
$$\mathrm{St}_x = \frac{h_x}{\rho c_pu_\infty} = \frac{\mathrm{Nu}_x}{\mathrm{Re}_x\mathrm{Pr}} = 0.332\,\mathrm{Re}_x^{-1/2}\mathrm{Pr}^{-2/3}$$
3. Multiply by $\mathrm{Pr}^{2/3}$:
$$\mathrm{St}_x\mathrm{Pr}^{2/3} = 0.332\,\mathrm{Re}_x^{-1/2}$$
4. Compare with $C_{fx}/2 = 0.332\,\mathrm{Re}_x^{-1/2}$ (Blasius):
$$\boxed{\mathrm{St}_x\mathrm{Pr}^{2/3} = \frac{C_{fx}}{2}}$$
This is the **Reynolds–Colburn analogy**. Since both sides vary as $x^{-1/2}$, it also holds for the averages: $\overline{\mathrm{St}}\,\mathrm{Pr}^{2/3} = \bar C_f/2$.
5. **Pr = 1:** St = $C_f/2$ – Reynolds' original analogy (velocity and temperature profiles identical when $\nu = \alpha$).
6. **Turbulent flow:** with $C_{fx} = 0.0592\,\mathrm{Re}_x^{-1/5}$ gives $\mathrm{Nu}_x = 0.0296\,\mathrm{Re}_x^{4/5}\mathrm{Pr}^{1/3}$; in tubes $\mathrm{St}\,\mathrm{Pr}^{2/3} = f/8$.

**Applicability:**
- Valid for $0.6 < \mathrm{Pr} < 60$; not for liquid metals (very low Pr) or very viscous oils.
- Requires $dp/dx \approx 0$ (flat plates, fully developed tube flow). Not valid where form drag is present – flow over cylinders, spheres, separated flows – because form drag does not transfer heat.
- Lets h be estimated from friction (pressure-drop) measurements.`,
          answer: String.raw`$\mathrm{St}\,\mathrm{Pr}^{2/3} = C_f/2$ (= $f/8$ in tubes), valid for 0.6 < Pr < 60 with no form drag; Pr = 1 → St = $C_f/2$.` },
        { id: "2015-16-Q8b", label: "(b)", marks: "11",
          topic: "forced-convection", sub: "Dittus–Boelter: range and modifications",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write the equation known as the Dittus–Boelter equation. Write its applicability ranges. Write a few modifications of this equation as suggested by different researchers.`,
          solution: String.raw`**Dittus–Boelter (fully developed turbulent flow in smooth tubes):**
$$\mathrm{Nu}_d = 0.023\,\mathrm{Re}_d^{0.8}\mathrm{Pr}^n, \qquad n = 0.4 \text{ (fluid heated)}, \; n = 0.3 \text{ (fluid cooled)}$$
Properties at the mean bulk temperature.

**Applicability:**
- $\mathrm{Re}_d > 10\,000$ (fully turbulent)
- $0.6 < \mathrm{Pr} < 160$ (some texts 0.7–100)
- $L/d > 10$ (fully developed; 60 for best accuracy)
- Moderate wall-to-bulk temperature differences (property variation small); smooth tubes. Errors up to ≈ 25%.

**Modifications:**
1. **Sieder–Tate** – large property variation: $\mathrm{Nu}_d = 0.027\,\mathrm{Re}_d^{0.8}\mathrm{Pr}^{1/3}(\mu/\mu_w)^{0.14}$, 0.7 < Pr < 16 700, Re > 10 000; laminar version $\mathrm{Nu} = 1.86(\mathrm{Re}\,\mathrm{Pr}\,d/L)^{1/3}(\mu/\mu_w)^{0.14}$.
2. **Nusselt entrance correction** – short tubes: $\mathrm{Nu}_d = 0.036\,\mathrm{Re}_d^{0.8}\mathrm{Pr}^{1/3}(d/L)^{0.055}$ for $10 < L/d < 400$.
3. **Colburn** – j-factor form: $\mathrm{St}\,\mathrm{Pr}^{2/3} = 0.023\,\mathrm{Re}^{-0.2}$.
4. **Petukhov** – higher accuracy (≈ 6%): $\mathrm{Nu}_d = \dfrac{(f/8)\mathrm{Re}_d\mathrm{Pr}}{1.07 + 12.7(f/8)^{1/2}(\mathrm{Pr}^{2/3} - 1)}(\mu_b/\mu_w)^n$, $10^4 < \mathrm{Re} < 5\times10^6$, 0.5 < Pr < 2000.
5. **Gnielinski** – extends to the transition region: $\mathrm{Nu}_d = \dfrac{(f/8)(\mathrm{Re}_d - 1000)\mathrm{Pr}}{1 + 12.7(f/8)^{1/2}(\mathrm{Pr}^{2/3} - 1)}$, 2300 < Re < $5\times10^6$.
6. Non-circular ducts: use the hydraulic diameter $D_h = 4A_c/P$.`,
          answer: String.raw`$\mathrm{Nu} = 0.023\mathrm{Re}^{0.8}\mathrm{Pr}^n$ (n = 0.4 heating, 0.3 cooling), Re > $10^4$, 0.6 < Pr < 160, L/d > 10; modified by Sieder–Tate, Nusselt $(d/L)^{0.055}$, Petukhov, Gnielinski.` },
        { id: "2015-16-Q8c", label: "(c)", marks: "5",
          topic: "forced-convection", sub: "Distortion of the laminar velocity profile",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`We know that the laminar velocity profile in a tube is parabolic. For heating or cooling, this parabolic velocity profile is changed to some extent. Draw a few of those profiles.`,
          solution: String.raw`**Sketch:** radial position r/R (−1 to +1, vertical axis) versus axial velocity u (horizontal axis) for laminar flow in a tube; three curves with the same mean velocity:
1. **Isothermal flow** – the standard parabola $u/u_{max} = 1 - (r/R)^2$, $u_{max} = 2u_m$.
2. **Liquid being heated** (or gas being cooled) – the fluid near the wall is hotter, so its viscosity is **lower** (liquid); velocity near the wall increases and the centre-line velocity falls → a **flatter, blunter** profile.
3. **Liquid being cooled** (or gas being heated) – fluid near the wall is colder and more viscous (liquid; for gases μ rises with T); flow near the wall slows and the centre-line velocity rises → a **more peaked (pointed)** profile.

**Consequence:** heating a liquid gives a higher h than cooling it at the same Re; this is why Sieder–Tate include $(\mu/\mu_w)^{0.14}$ and Dittus–Boelter uses n = 0.4 vs 0.3.`,
          answer: String.raw`Isothermal: parabola; liquid heated: flatter (lower wall viscosity); liquid cooled: more peaked – reversed for gases.` },
        { id: "2015-16-Q8d", label: "(d)", marks: "8",
          topic: "convection-basics", sub: "Physical significance of Nu and Pr",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain the physical significance of the Nusselt and Prandtl numbers.`,
          solution: String.raw`**Nusselt number** $\mathrm{Nu} = \dfrac{hL}{k_f}$
- Ratio of convective to conductive heat transfer across the same fluid layer of thickness L: $\dfrac{q_{conv}}{q_{cond}} = \dfrac{h\Delta T}{k\Delta T/L}$.
- Equals the dimensionless temperature gradient at the wall: $\mathrm{Nu} = \left.\dfrac{\partial\theta}{\partial(y/L)}\right|_{y=0}$.
- Nu = 1: pure conduction (stagnant fluid layer); larger Nu → more effective convection (turbulent flow: Nu ~ 100–1000).
- It is the dimensionless h; correlations give Nu = f(Re, Pr) or f(Gr, Pr).

**Prandtl number** $\mathrm{Pr} = \dfrac{\nu}{\alpha} = \dfrac{c_p\mu}{k}$
- Ratio of molecular diffusivity of momentum to that of heat; a fluid property only.
- Controls the relative thickness of the velocity and thermal boundary layers: $\delta_t/\delta \approx \mathrm{Pr}^{-1/3}$ (laminar plate).
- Pr ≈ 1 (gases 0.7): δ ≈ δ_t; Pr ≫ 1 (oils, 100–10⁵): heat diffuses slowly, $\delta_t \ll \delta$; Pr ≪ 1 (liquid metals, 0.01): $\delta_t \gg \delta$.
- Appears in every convection correlation (exponent usually 1/3 or 0.4).`,
          answer: String.raw`Nu = hL/k = convection ÷ conduction (dimensionless wall gradient); Pr = ν/α = momentum ÷ thermal diffusivity, sets $\delta_t/\delta \approx \mathrm{Pr}^{-1/3}$.` },
      ] },
  ]
});
