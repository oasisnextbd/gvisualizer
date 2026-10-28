QB.paper({
  year: "2016-17", date: "15/07/2017", marks: 210,
  rules: String.raw`Section A: Q1 is compulsory (45 marks) + any two of Q2–Q4. Section B: any three of Q5–Q8. Heat Transfer Data Booklet supplied.`,
  questions: [
    { id: "2016-17-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q1a", label: "(a)", marks: "9",
          topic: "shell-tube", sub: "TEMA component naming",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Identify the following labeled sections of a shell and tube heat exchanger from Figure 1(a).

*[Figure 1(a): cut-away of a TEMA type AES (removable channel and cover, one shell pass, pull-through/split-ring floating head) shell-and-tube exchanger. Numbered balloons: 36, 4, 3, 34, 5, 31, 6, 34, 12, 29, 7, 8, 27, 28, 18, 36, 32, 9, 15, 16 along the top and right; 1, 5, 34, 3, 10, 35, 35, 12, 34, 11, 13, 17, 33 along the bottom.]*`,
          solution: String.raw`The figure is the standard TEMA nomenclature drawing of an **AES** exchanger (A = channel with removable cover, E = one-pass shell, S = floating head with backing device). The numbers are the TEMA part numbers:

| No. | Part | No. | Part |
|---|---|---|---|
| 1 | Stationary head – channel | 15 | Floating tubesheet |
| 3 | Stationary head flange – channel | 16 | Floating head cover |
| 4 | Channel cover | 17 | Floating head cover flange |
| 5 | Stationary head nozzle (tube-side inlet/outlet) | 18 | Floating head backing device (split ring) |
| 6 | Stationary tubesheet | 27 | Tie rods and spacers |
| 7 | Tubes | 28 | Transverse baffles or support plates |
| 8 | Shell | 29 | Impingement plate (baffle) |
| 9 | Shell cover | 31 | Pass partition (channel) |
| 10 | Shell flange – stationary head end | 32 | Vent connection |
| 11 | Shell flange – rear head end | 33 | Drain connection |
| 12 | Shell nozzle (shell-side inlet/outlet) | 34 | Instrument connection (thermometer/pressure gauge) |
| 13 | Shell cover flange | 35 | Support saddle |
| | | 36 | Lifting lug (ring) |

**Exam tip:** learn the parts in flow order: tube-side fluid enters nozzle 5 → channel 1 (split by pass partition 31) → stationary tubesheet 6 → tubes 7 → floating tubesheet 15 → floating head cover 16 → back. Shell-side fluid enters nozzle 12, hits impingement plate 29 and is guided by baffles 28 (held by tie rods 27).`,
          answer: String.raw`TEMA AES exchanger: 1 channel, 3 channel flange, 4 channel cover, 5 channel nozzle, 6 stationary tubesheet, 7 tubes, 8 shell, 9 shell cover, 10/11 shell flanges, 12 shell nozzle, 13 shell cover flange, 15 floating tubesheet, 16 floating head cover, 17 its flange, 18 backing device, 27 tie rods, 28 baffles, 29 impingement plate, 31 pass partition, 32 vent, 33 drain, 34 instrument connection, 35 saddle, 36 lifting lug.` },
        { id: "2016-17-Q1b", label: "(b)", marks: "6",
          topic: "boiling", sub: "Critical heat flux",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is the critical heat flux of a pool boiling curve? List the factors that can influence the critical heat flux.`,
          solution: String.raw`**Critical (maximum, burnout) heat flux** $\dot q_{max}$ is the peak of the pool boiling curve, reached at the end of the nucleate boiling regime (end of region III, point C or "a"). Beyond it bubbles form so fast that they merge into a vapour blanket that insulates the surface, so any further rise in $\Delta T_{excess}$ *lowers* the heat flux (transition boiling). For a heat-flux-controlled heater (electric element, nuclear rod), exceeding $\dot q_{max}$ even slightly makes the surface jump to the film boiling curve at a very high temperature (point E), which usually melts it: **burnout**. For water at 1 atm, $\dot q_{max} \approx 1.1$–$1.3\,\mathrm{MW/m^2}$ at $\Delta T_{excess} \approx 30^\circ\mathrm{C}$.

Zuber–Lienhard relation (slides):
$$\dot q_{max} = C_{cr}\,h_{fg}\left[\sigma g \rho_v^2(\rho_l-\rho_v)\right]^{1/4}$$

**Factors that influence the CHF**
- **Pressure** (through $\rho_v$, $h_{fg}$, $\sigma$): CHF rises with pressure up to about one-third of the critical pressure, then falls to zero at the critical point.
- **Fluid properties**: $h_{fg}$ (CHF ∝ $h_{fg}$, so water gives high CHF), surface tension $\sigma$, densities $\rho_l$ and $\rho_v$.
- **Heater geometry and size** through $C_{cr}$ and $L^* = L[g(\rho_l-\rho_v)/\sigma]^{1/2}$ (large flat plate 0.149, large cylinder 0.12, large sphere 0.11, smaller for small heaters).
- **Gravity / orientation** ($\dot q_{max} \propto g^{1/4}$).
- **Liquid subcooling**: a subcooled pool raises CHF.
- **Forced flow / agitation**: flow boiling raises CHF a lot (up to ~35 MW/m² for water).
- **Surface condition**: wettability, coatings, fins and enhanced surfaces can raise CHF by up to ~3×.

By the Zuber relation, CHF does *not* depend on the fluid–surface combination or on $\mu_l$, $k_l$, $c_{pl}$.`,
          answer: String.raw`CHF = the maximum heat flux at the end of nucleate boiling, where a vapour blanket starts to form (burnout point). It depends on pressure, $h_{fg}$, $\sigma$, $\rho_l$, $\rho_v$, gravity, heater geometry/size ($C_{cr}$), subcooling, flow velocity and surface wettability or enhancement.` },
        { id: "2016-17-Q1c", label: "(c)", marks: "6",
          topic: "heat-exchangers", sub: "Shell-side equivalent diameter (triangular pitch)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate the equivalent diameter of a tube bundle (2″ ID) arranged in a triangular pitch arrangement with 0.5″ clearance.`,
          solution: String.raw`**Given:** tube diameter $d = 2$ in, clearance $C' = 0.5$ in, triangular pitch.

**Find:** shell-side equivalent diameter $D_e$.

**Assumption:** the shell-side $D_e$ is based on the tube *outside* diameter; the printed "2″ ID" is taken as the tube diameter $d_o = 2$ in (one-line assumption, since only one diameter is given).

1. Tube pitch:
$$P_T = d_o + C' = 2 + 0.5 = 2.5\ \mathrm{in}$$

2. For triangular pitch the unit cell is half a tube in an equilateral triangle of side $P_T$ (height $0.86P_T$). Kern (slides):
$$D_e = \frac{4\left(\tfrac{1}{2}P_T \times 0.86P_T - \tfrac{1}{2}\,\tfrac{\pi d_o^2}{4}\right)}{\tfrac{1}{2}\pi d_o}$$

3. Substitute:
$$\tfrac{1}{2}(2.5)(0.86)(2.5) = 2.6875\ \mathrm{in^2},\qquad \tfrac{1}{2}\,\tfrac{\pi (2)^2}{4} = 1.5708\ \mathrm{in^2}$$
$$D_e = \frac{4(2.6875 - 1.5708)}{\tfrac{1}{2}\pi(2)} = \frac{4.467}{3.1416} = 1.42\ \mathrm{in} = 0.118\ \mathrm{ft}$$

**Exam tip:** $D_e = 4\times$(free flow area)/(wetted perimeter); only the tube perimeter counts as wetted (the shell is ignored). For square pitch use $D_e = 4(P_T^2 - \pi d_o^2/4)/(\pi d_o)$.`,
          answer: String.raw`$P_T = 2.5$ in, $D_e \approx 1.42$ in ($0.118$ ft).` },
        { id: "2016-17-Q1d", label: "(d)", marks: "6",
          topic: "forced-convection", sub: "Velocity-profile distortion on heating/cooling",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`How does the velocity profile of a fluid deviate from the isothermal condition during cooling and heating? Show the typical velocity profiles for liquid and gas for these conditions.`,
          solution: String.raw`With a large wall-to-fluid temperature difference, the viscosity near the wall differs from that in the core, so the laminar profile is no longer the isothermal parabola.

- **Liquids**: $\mu$ falls as $T$ rises. **Gases**: $\mu$ rises as $T$ rises.
- **Liquid being heated** (wall hotter): fluid near the wall is less viscous, so it moves faster near the wall; the profile is flatter (blunter) with a lower centre velocity.
- **Liquid being cooled** (wall colder): fluid near the wall is more viscous and slower; the profile is more peaked with a higher centre velocity.
- **Gas being heated**: wall fluid is more viscous, so the profile is peaked, the same as a *cooled liquid*.
- **Gas being cooled**: the profile is flattened, the same as a *heated liquid*.

**Sketch** (radius $r$ on the vertical axis from $-r_0$ to $+r_0$, velocity $u$ horizontal, all curves with the same mean velocity):
- Curve A: isothermal parabola.
- Curve B: *liquid heating / gas cooling*: fuller near the wall, flatter centre, lower peak than A.
- Curve C: *liquid cooling / gas heating*: thinner near the wall, sharper and higher peak than A.

| Case | Near-wall velocity | Centre-line velocity |
|---|---|---|
| Liquid heated, gas cooled (curve B) | higher than isothermal | lower |
| Liquid cooled, gas heated (curve C) | lower than isothermal | higher |

**Why it matters:** the near-wall velocity controls heat transfer. This is why Sieder–Tate adds the factor $(\mu/\mu_w)^{0.14}$ and Dittus–Boelter uses a different exponent $n$ for heating (0.4) and cooling (0.3).`,
          answer: String.raw`Heated liquid or cooled gas: flatter profile, faster near the wall. Cooled liquid or heated gas: more peaked profile, slower near the wall. This is handled by the $(\mu/\mu_w)^{0.14}$ correction.` },
        { id: "2016-17-Q1e", label: "(e)", marks: "6",
          topic: "conduction", sub: "Thermal resistance vs R-value",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is the difference between Thermal resistance and R value? Explain with relevant equations.`,
          solution: String.raw`**Thermal resistance.** Fourier's law for a plane wall, written in Ohm's-law form:
$$q = \frac{T_1 - T_2}{\Delta x/(kA)} = \frac{\Delta T}{R_{th}},\qquad R_{th} = \frac{\Delta x}{kA}\ \ \left[\mathrm{^\circ C/W}\ \text{or}\ \mathrm{^\circ F\,h/Btu}\right]$$
It belongs to a particular piece of material of a given area, so it depends on $A$. Resistances in series add: $q = \Delta T_{overall}/\sum R_{th}$. Convection gives $R = 1/(hA)$, and a cylinder gives $R = \ln(r_o/r_i)/(2\pi k L)$.

**R-value.** This is used to classify insulation, and is defined per unit area:
$$R = \frac{\Delta T}{q/A} = \frac{\Delta x}{k}\ \ \left[\mathrm{^\circ C\,m^2/W}\ \text{or}\ \mathrm{^\circ F\,ft^2\,h/Btu}\right]$$

| | Thermal resistance $R_{th}$ | R-value |
|---|---|---|
| Definition | $\Delta x/(kA)$ | $\Delta x/k$ |
| Basis | the whole body (total $q$) | unit area (heat flux $q/A$) |
| Units | °C/W | °C·m²/W |
| Use | circuit analysis of walls, pipes, convection | rating or comparing insulating materials |

They are related by $R_{th} = R/A$. Example: 10 cm of insulation with $k = 0.04$ W/m·°C has $R = 2.5$ °C·m²/W whatever its area, but on 4 m² $R_{th} = 0.625$ °C/W.`,
          answer: String.raw`$R_{th} = \Delta x/(kA)$ (°C/W) is the resistance of the whole wall; the R-value $= \Delta x/k$ (°C·m²/W) is the resistance per unit area used to rate insulation. $R_{th} = R/A$.` },
        { id: "2016-17-Q1f", label: "(f)", marks: "6",
          topic: "convection-basics", sub: "Nusselt number as dimensionless h",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"Nusselt number is also considered as dimensionless heat transfer coefficient" – explain.`,
          solution: String.raw`1. At the wall the fluid is at rest, so the heat leaves by conduction into the fluid and is carried away by convection:
$$q'' = -k\left.\frac{\partial T}{\partial y}\right|_{y=0} = h\,(T_w - T_\infty)\quad\Rightarrow\quad h = \frac{-k\,(\partial T/\partial y)_{0}}{T_w - T_\infty}$$

2. Non-dimensionalise with $y^* = y/L$ and $\theta^* = (T - T_w)/(T_\infty - T_w)$:
$$\mathrm{Nu} = \frac{hL}{k} = \left.\frac{\partial \theta^*}{\partial y^*}\right|_{y^*=0}$$
So Nu is the **dimensionless temperature gradient at the surface**, i.e. $h$ scaled by $k/L$.

3. Ratio form for a fluid layer of thickness $L$ with $\Delta T$ across it:
$$\mathrm{Nu} = \frac{q''_{conv}}{q''_{cond}} = \frac{h\,\Delta T}{k\,\Delta T/L} = \frac{hL}{k}$$
It is the factor by which fluid motion increases heat transfer over pure conduction through the same layer.

**Interpretation:** Nu = 1 means pure conduction (stagnant layer). Larger Nu means more effective convection (laminar flows have Nu of order 1–10, turbulent flows 100–1000). A correlation $\mathrm{Nu} = f(\mathrm{Re},\mathrm{Pr})$ or $f(\mathrm{Gr},\mathrm{Pr})$ is therefore just a dimensionless way of giving $h$: $h = \mathrm{Nu}\,k/L$.`,
          answer: String.raw`$\mathrm{Nu} = hL/k = (\partial\theta^*/\partial y^*)_{wall}$, i.e. $h$ made dimensionless by $k/L$. It equals convective flux ÷ conductive flux across the same layer, and Nu = 1 means pure conduction.` },
        { id: "2016-17-Q1g", label: "(g)", marks: "6",
          topic: "boiling", sub: "Film boiling: why ¾ of radiation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why does total heat transfer during film boiling consider only 75% of radiation heat transfer? Explain the reason for not considering total radiation heat transfer.`,
          solution: String.raw`In stable film boiling the surface is covered by a continuous vapour film. Heat crosses the film by (1) conduction/convection through the vapour and (2) radiation from the hot surface (above about 300°C) straight to the liquid.

$$\dot q_{total} = \dot q_{film} + \tfrac{3}{4}\,\dot q_{rad},\qquad \dot q_{rad} = \varepsilon\sigma\,(T_s^4 - T_{sat}^4)$$
$$\dot q_{film} = C\left[\frac{g k_v^3 \rho_v(\rho_l-\rho_v)[h_{fg}+0.4c_{pv}(T_s-T_{sat})]}{\mu_v D (T_s - T_{sat})}\right]^{1/4}(T_s - T_{sat}),\quad C = 0.62\ (\text{cylinder}),\ 0.67\ (\text{sphere})$$

**Why only ¾ of the radiation:**
- The two mechanisms are **not independent**, so they cannot simply be added.
- Radiation absorbed at the liquid–vapour interface evaporates more liquid, so the **vapour film gets thicker**.
- A thicker film has a larger conduction resistance, so $\dot q_{film}$ falls below its value without radiation.
- Bromley's analysis gives $h^{4/3} = h_{film}^{4/3} + h_{rad}\,h^{1/3}$. When $h_{rad} < h_{film}$ this is closely approximated by $h \approx h_{film} + \tfrac{3}{4}h_{rad}$.

So the factor ¾ is not "75% of the radiation is lost". It is the net gain left after radiation has partly reduced the film-conduction term. Adding 100% of $\dot q_{rad}$ would overpredict the heat flux.

**Exam tip:** in the slides' copper-wire example ($T_s = 350^\circ$C, $\varepsilon = 0.05$), $\dot q_{rad}$ is small, but at 1000°C+ the radiation term dominates.`,
          answer: String.raw`Radiation thickens the vapour film (extra evaporation), which cuts film conduction. The two effects interact (Bromley: $h^{4/3} = h_f^{4/3} + h_r h^{1/3}$), and their net is $h \approx h_{film} + \tfrac34 h_{rad}$.` },
      ] },
    { id: "2016-17-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q2a", label: "(a)", marks: "13",
          topic: "natural-convection", sub: "Velocity/temperature profiles, Gr, Pr, Ra",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`With the help of schematics show the typical velocity and temperature profiles for a natural convection system where the vertical plate is (i) hotter and (ii) cooler than the ambient temperature. How do they differ from the forced convection system? Also explain the important dimensionless numbers involved in natural convection process.`,
          solution: String.raw`### (i) Hot vertical plate ($T_w > T_\infty$)
- Fluid next to the plate is heated, becomes lighter and rises. The boundary layer starts at the **bottom** (leading edge) and thickens **upward**.
- **Velocity profile** (u vs y): $u = 0$ at the wall (no slip). It rises to a maximum close to the wall, then falls back to **zero** at the outer edge of the boundary layer, because the fluid far away is quiescent.
- **Temperature profile**: $T = T_w$ at the wall, falling monotonically to $T_\infty$ at the edge of the thermal layer.

### (ii) Cold vertical plate ($T_w < T_\infty$)
- Fluid near the plate is cooled, becomes heavier and **sinks**. The boundary layer starts at the **top** and thickens downward.
- The profiles have the same shapes but **reversed direction**: downward velocity (zero at the wall and at the edge, maximum in between), and temperature rising from $T_w$ at the wall to $T_\infty$.

*Sketch:* a vertical plate with $x$ along it and $y$ normal to it; a thin layer drawn growing in the flow direction. At one height draw the hump-shaped $u(y)$ (0 → max → 0) and the decaying $T(y)$ curve from $T_w$ to $T_\infty$. For the cold plate draw everything mirrored with arrows pointing down.

### Difference from forced convection
| | Natural convection | Forced convection |
|---|---|---|
| Driving force | buoyancy from density differences ($\rho g\beta\Delta T$) | external pressure difference (pump, fan) |
| Velocity at the BL edge | zero (quiescent fluid) | $u_\infty$ (free stream) |
| Velocity profile | 0 → maximum → 0 | 0 → $u_\infty$ (monotonic) |
| Coupling | velocity and temperature fields are coupled: no $\Delta T$, no flow | flow exists without heat transfer |
| Typical velocities, h | < 1 m/s, low h | higher h |
| Governing groups | Gr (or Ra), Pr | Re, Pr |

### Dimensionless numbers
- **Grashof number**: ratio of buoyancy to viscous forces. It plays the role of Re, and the vertical plate becomes turbulent at about $\mathrm{Gr} \approx 10^9$.
$$\mathrm{Gr}_L = \frac{g\beta(T_s - T_\infty)L^3}{\nu^2},\qquad \beta = -\frac{1}{\rho}\left(\frac{\partial\rho}{\partial T}\right)_p\ \ (=1/T\ \text{for an ideal gas})$$
- **Prandtl number** $\mathrm{Pr} = \nu/\alpha = c_p\mu/k$: momentum diffusivity ÷ thermal diffusivity. It sets the relative thickness of the velocity and thermal layers.
- **Rayleigh number** $\mathrm{Ra} = \mathrm{Gr}\,\mathrm{Pr} = g\beta\Delta T L^3/(\nu\alpha)$: the correlating group, $\mathrm{Nu} = C\,\mathrm{Ra}^n$ ($n = 1/4$ laminar, $1/3$ turbulent). Properties are taken at the film temperature.
- **Nusselt number** $\mathrm{Nu} = hL/k$: the dimensionless h.
- **$\mathrm{Gr}/\mathrm{Re}^2$** (Archimedes number): measures how important natural convection is when there is also an external flow. Natural convection is negligible if it is ≪ 1, forced convection is negligible if it is ≫ 1, and both matter (mixed convection) if it is ≈ 1.`,
          answer: String.raw`Natural convection: $u$ is zero at the wall and at the BL edge with a maximum in between; $T$ decays from $T_w$ to $T_\infty$. A hot plate's BL grows upward and a cold plate's downward. Governing groups: Gr, Pr, Ra = GrPr (and Gr/Re² for mixed convection) instead of Re.` },
        { id: "2016-17-Q2b", label: "(b)", marks: "17",
          topic: "natural-convection", sub: "Sphere: free vs forced convection at low pressure",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`A spherical balloon gondola (2.4 m in diameter) rises to an altitude where the ambient pressure is 1.4 kPa and the ambient temperature is −50°C. The outside surface of the sphere is at approximately 0°C. Estimate the free-convection heat loss from the outside of the sphere. How does this compare with the forced-convection loss from such a sphere with a low free-stream velocity of approximately 30 cm/s?`,
          solution: String.raw`**Given:** $D = 2.4$ m, $p = 1.4$ kPa, $T_\infty = -50^\circ$C (223.15 K), $T_s = 0^\circ$C (273.15 K), $u_\infty = 0.3$ m/s.

**Find:** $q_{free}$ and $q_{forced}$.

**Assumptions:** steady state; air is an ideal gas; $\mu$, $k$ and Pr do not depend on pressure, while $\rho$ (and so $\nu$) scales with $p$; radiation is ignored; $\beta = 1/T_f$.

### Free convection
1. Film temperature: $T_f = (223.15 + 273.15)/2 = 248.15$ K.

2. Air properties (Holman Table A-5, interpolated between 200 and 250 K): $\mu = 1.589\times10^{-5}$ kg/m·s, $k = 0.02212$ W/m·°C, $\mathrm{Pr} = 0.723$. Density at 1.4 kPa:
$$\rho = \frac{p}{RT_f} = \frac{1400}{287 \times 248.15} = 0.01966\ \mathrm{kg/m^3},\qquad \nu = \frac{\mu}{\rho} = 8.08\times10^{-4}\ \mathrm{m^2/s}$$

3. Grashof and Rayleigh numbers, with $\beta = 1/248.15$ K⁻¹ and $\Delta T = 50$ K:
$$\mathrm{Gr} = \frac{g\beta\Delta T D^3}{\nu^2} = \frac{9.81 \times (1/248.15) \times 50 \times 2.4^3}{(8.08\times10^{-4})^2} = 4.18\times10^{7}$$
$$\mathrm{Ra} = \mathrm{Gr}\,\mathrm{Pr} = 3.02\times10^{7}$$

4. Sphere correlation (Churchill, slides Eq. 9-26; valid for $\mathrm{Ra} \le 10^{11}$, $\mathrm{Pr} \ge 0.7$, satisfied):
$$\mathrm{Nu} = 2 + \frac{0.589\,\mathrm{Ra}^{1/4}}{[1 + (0.469/\mathrm{Pr})^{9/16}]^{4/9}} = 2 + \frac{0.589\,(3.02\times10^7)^{1/4}}{[1 + (0.469/0.723)^{9/16}]^{4/9}} = 35.8$$

5. Heat transfer coefficient, area and heat loss:
$$h = \frac{\mathrm{Nu}\,k}{D} = \frac{35.8 \times 0.02212}{2.4} = 0.330\ \mathrm{W/m^2\,^\circ C}$$
$$A = \pi D^2 = 18.10\ \mathrm{m^2}$$
$$q_{free} = hA\Delta T = 0.330 \times 18.10 \times 50 \approx 298\ \mathrm{W}$$

### Forced convection at 0.3 m/s
6. Whitaker's sphere correlation (Holman Eq. 6-25; *not in the slides*), with properties at $T_\infty = 223$ K: $\mu_\infty = 1.454\times10^{-5}$, $k = 0.02003$, $\mathrm{Pr} = 0.731$, $\rho_\infty = 1400/(287\times223.15) = 0.02186$ kg/m³; and $\mu_w$ at 273 K $= 1.713\times10^{-5}$ kg/m·s.
$$\mathrm{Re} = \frac{\rho u_\infty D}{\mu} = \frac{0.02186 \times 0.3 \times 2.4}{1.454\times10^{-5}} = 1083\quad(3.5 < \mathrm{Re} < 7.6\times10^4\ \checkmark)$$
$$\mathrm{Nu} = 2 + (0.4\,\mathrm{Re}^{1/2} + 0.06\,\mathrm{Re}^{2/3})\,\mathrm{Pr}^{0.4}\left(\frac{\mu_\infty}{\mu_w}\right)^{1/4} = 18.5$$

7. Heat transfer coefficient and heat loss:
$$h = \frac{18.5 \times 0.02003}{2.4} = 0.154\ \mathrm{W/m^2\,^\circ C}$$
$$q_{forced} = 0.154 \times 18.10 \times 50 \approx 140\ \mathrm{W}$$

8. Which mode dominates:
$$\frac{\mathrm{Gr}}{\mathrm{Re}^2} = \frac{4.18\times10^7}{1083^2} \approx 36 \gg 1$$
At 30 cm/s, natural convection dominates.

**Comparison:** the free-convection loss (≈ 300 W) is about **twice** the forced-convection estimate (≈ 140 W). A 0.3 m/s drift is too weak to matter, so the free-convection value is the better estimate. Both values are tiny because the thin air at 1.4 kPa has $\nu$ about 70 times larger than at sea level.`,
          answer: String.raw`$\mathrm{Ra} \approx 3.0\times10^7$, $h \approx 0.33$ W/m²°C, $q_{free} \approx 300$ W. Forced (Re ≈ 1080): $h \approx 0.15$ W/m²°C, $q \approx 140$ W. Gr/Re² ≈ 36, so free convection dominates (about 2× the forced loss).` },
      ] },
    { id: "2016-17-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q3a", label: "(a)", marks: "10",
          topic: "heat-exchangers", sub: "Plate and frame heat exchanger",
          type: "sketch", syllabus: "out", repeats: [],
          text: String.raw`Using a neat schematic describe the working principle of plate and frame heat exchanger.`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

**Construction (schematic in words):** a fixed **frame plate** (head) and a movable **pressure plate** (follower) hang from an upper **carrying bar** and are located by a lower **guide bar**. Between them is a pack of thin (0.5–1 mm) corrugated metal **plates** (stainless steel, titanium) clamped together by **tightening bolts**. Each plate has a **port hole** at each of its four corners and a peripheral **gasket**. The gaskets seal each channel and route the hot and cold fluids into **alternate channels**. The four inlet/outlet nozzles are on the frame plate. *Sketch:* exploded view of a plate pack with hot (red) and cold (blue) arrows entering through diagonally opposite corner ports and flowing in alternate gaps, usually counter-current.

**Working principle**
- The hot fluid enters a corner port and is distributed by the gaskets into every second gap. The cold fluid fills the gaps in between, usually flowing in the opposite direction (counterflow).
- Heat passes through the thin plate from each hot channel to the cold channels on both sides.
- The chevron (herringbone) corrugations make the flow turbulent at low Re (10–500), stiffen the plates and give many contact points. The result is very high $h$ (U up to 3000–7000 W/m²K for water–water) and low fouling.
- Passes are arranged by blanking ports. Capacity is changed by adding or removing plates.

**Advantages:** compact (large area per volume), high U, close temperature approach (~1°C), easy to open for cleaning and inspection, flexible.

**Limitations:** gaskets limit temperature (~150–250°C) and pressure (~25 bar); not suitable for very viscous or particle-laden fluids or large vapour volumes; possible leakage at gaskets. Used in food, dairy, pharmaceutical and HVAC duties.`,
          answer: String.raw`A pack of gasketed corrugated plates is clamped in a frame. Corner ports and gaskets send the hot and cold streams through alternate channels (usually counterflow), and the corrugations give high turbulence and high U. The unit is compact and easy to clean, but limited in pressure and temperature by the gaskets.` },
        { id: "2016-17-Q3b", label: "(b)", marks: "6",
          topic: "heat-exchangers", sub: "Temperature profiles with phase change",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Draw the temperature profiles of the hot and cold streams for the following situations:

(i) cold fluid is evaporating and hot fluid is saturated steam

(ii) cold fluid is gaining sensible heat and hot fluid is superheated steam that eventually condenses.`,
          solution: String.raw`*Axes for both sketches:* temperature $T$ (vertical) vs length along the exchanger, or fraction of heat transferred (horizontal).

**(i) Condensing saturated steam / boiling cold fluid**
- Hot line: **horizontal** at $T_{sat,steam}$, because condensation is isothermal.
- Cold line: **horizontal** at the boiling point $T_{boil}$ (below $T_{sat,steam}$), because evaporation of a pure fluid is isothermal.
- $\Delta T$ = constant along the whole length, so $\Delta T_{lm} = T_{sat,steam} - T_{boil}$. The flow direction (co- or counter-current) makes no difference.

**(ii) Superheated steam that desuperheats and then condenses / cold fluid with sensible heating**
- Hot line in two zones. (1) **Desuperheating zone** at the steam inlet: the temperature falls fairly steeply from $T_{in}$ to $T_{sat}$, as sensible heat of the vapour is removed (low $c_p$, small share of the duty). (2) **Condensing zone**: a long **horizontal** line at $T_{sat}$ carrying most of the heat (latent). If the condensate is subcooled, a short falling line follows at the outlet.
- Cold line: a **straight rising line** from $t_1$ to $t_2$ (constant $c_p$). In counterflow its hot end ($t_2$) faces the desuperheater.
- Because of the break in slope of the hot curve, a single LMTD across the whole unit is not valid. Each zone is handled with its own $\Delta T_{lm}$ (or a weighted $\Delta T$).

**Exam tip:** label $T_{sat}$, both terminal temperature differences and the two zones. Examiners look for the flat line during phase change.`,
          answer: String.raw`(i) Two horizontal parallel lines: constant ΔT. (ii) Hot curve falls in a short desuperheating section, then stays flat at $T_{sat}$ while condensing; the cold curve is a rising straight line. Treat the zones separately.` },
        { id: "2016-17-Q3c", label: "(c)", marks: "14",
          topic: "heat-exchangers", sub: "Choosing a double-pipe exchanger (LMTD / ε–NTU)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`It is desired to heat 230 kg/h of water from 35°C to 93°C with oil ($c_p$ = 2.1 kJ/kg·°C) having an initial temperature of 175°C. The mass flow of oil is also 230 kg/h. Two double-pipe heat exchangers are available:

| | U (W/m²·°C) | A (m²) |
|---|---|---|
| Exchanger 1 | 570 | 0.47 |
| Exchanger 2 | 370 | 0.94 |

Which exchanger should be used?`,
          solution: String.raw`**Given:** $\dot m_w = \dot m_o = 230$ kg/h $= 0.0639$ kg/s; water 35 → 93°C; oil inlet 175°C, $c_{p,o} = 2100$ J/kg·°C.

**Find:** which exchanger can deliver the duty.

**Assumptions:** counterflow double pipe; $c_{p,w} = 4180$ J/kg·°C at the mean 64°C (Çengel Table A-9); no heat loss; U constant.

1. Capacity rates and duty:
$$C_w = 0.0639 \times 4180 = 267.1\ \mathrm{W/^\circ C},\qquad C_o = 0.0639 \times 2100 = 134.2\ \mathrm{W/^\circ C}\ (= C_{min})$$
$$q = C_w(93 - 35) = 267.1 \times 58 = 15{,}490\ \mathrm{W}$$

2. Oil outlet temperature:
$$T_{o,out} = 175 - \frac{15{,}490}{134.2} = 59.6^\circ\mathrm{C}$$

3. Required LMTD (counterflow). $\Delta T_1 = 175 - 93 = 82^\circ$C, $\Delta T_2 = 59.6 - 35 = 24.6^\circ$C.
$$\Delta T_{lm} = \frac{82 - 24.6}{\ln(82/24.6)} = 47.6^\circ\mathrm{C}$$

4. Required UA:
$$(UA)_{req} = \frac{q}{\Delta T_{lm}} = \frac{15{,}490}{47.6} = 325\ \mathrm{W/^\circ C}$$

5. Available UA:

| | UA (W/°C) | Meets the 325 W/°C needed? |
|---|---|---|
| Exchanger 1 | 570 × 0.47 = 268 | No |
| Exchanger 2 | 370 × 0.94 = 348 | Yes (about 7% margin) |

6. Check by ε–NTU, with $C_r = 134.2/267.1 = 0.502$ and required $\varepsilon = q/[C_{min}(175 - 35)] = 0.825$. Counterflow effectiveness:
$$\varepsilon = \frac{1 - e^{-\mathrm{NTU}(1 - C_r)}}{1 - C_r\,e^{-\mathrm{NTU}(1 - C_r)}}$$
   - Exchanger 1: NTU = 268/134.2 = 2.00, so ε = 0.774 and the water leaves at only **89.4°C** (< 93°C).
   - Exchanger 2: NTU = 2.59, so ε = 0.841 and the water leaves at **94.2°C** (≥ 93°C).

**Decision:** use **Exchanger 2**. Exchanger 1 has the higher U, but its smaller area gives the lower UA, which is what fixes performance.

**Exam tip:** compare **UA (or NTU)**, never U alone. In parallel flow neither unit would work (ε_max ≈ 0.65).`,
          answer: String.raw`$q = 15.5$ kW and UA required ≈ 325 W/°C. Exchanger 1 has UA = 268 (water out ≈ 89°C, not enough); Exchanger 2 has UA = 348 (water out ≈ 94°C). Use **Exchanger 2**.` },
      ] },
    { id: "2016-17-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q4a", label: "(a)", marks: "15",
          topic: "condensation", sub: "Horizontal tube bank condenser length",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A heat exchanger is to be designed to condense 600 kg/h of steam at atmospheric pressure. A square array of four hundred 1.0-cm-diameter tubes is available for the task, and the tube wall temperature is to be maintained at 97°C. Estimate the length of tubes required.`,
          solution: String.raw`**Given:** $\dot m = 600$ kg/h $= 0.1667$ kg/s; $T_{sat} = 100^\circ$C; $T_w = 97^\circ$C; 400 tubes in a square array, so $N = \sqrt{400} = 20$ tubes per vertical column; $D = 0.01$ m.

**Find:** tube length $L$.

**Assumptions:** laminar film condensation on horizontal tubes; pure saturated vapour; Nusselt tube-bank relation $h_N = h_1 N^{-1/4}$.

1. Properties of liquid water at $T_f = (100 + 97)/2 = 98.5^\circ$C (Çengel Table A-9, interpolated): $\rho_l = 959.0$ kg/m³, $\mu_l = 2.865\times10^{-4}$ kg/m·s, $k_l = 0.678$ W/m·°C, $c_{pl} = 4216$ J/kg·°C. At 100°C: $h_{fg} = 2257$ kJ/kg and $\rho_v = 0.598$ kg/m³.

2. Modified latent heat:
$$h^*_{fg} = h_{fg} + 0.68\,c_{pl}(T_{sat} - T_w) = 2257\times10^3 + 0.68 \times 4216 \times 3 = 2.266\times10^6\ \mathrm{J/kg}$$

3. Heat transfer coefficient for a column of $N = 20$ tubes:
$$h = 0.729\left[\frac{g\rho_l(\rho_l - \rho_v)h^*_{fg}k_l^3}{\mu_l(T_{sat} - T_w)\,N D}\right]^{1/4}$$
$$h = 0.729\left[\frac{9.81 \times 959.0 \times 958.4 \times 2.266\times10^6 \times 0.678^3}{2.865\times10^{-4} \times 3 \times 20 \times 0.01}\right]^{1/4} = 10{,}120\ \mathrm{W/m^2\,^\circ C}$$
For a single tube, $h_1 = 21{,}400$ W/m²°C, and $h_1/20^{1/4} = 10{,}120$ ✓.

4. Heat duty:
$$q = \dot m\,h^*_{fg} = 0.1667 \times 2.266\times10^6 = 3.78\times10^5\ \mathrm{W}$$

5. Area and tube length:
$$A = \frac{q}{h(T_{sat} - T_w)} = \frac{3.78\times10^5}{10{,}120 \times 3} = 12.44\ \mathrm{m^2}$$
$$L = \frac{A}{n\pi D} = \frac{12.44}{400 \times \pi \times 0.01} = 0.99\ \mathrm{m}$$

**Answer:** tubes about **1.0 m** long. With Holman's constant 0.725 instead of 0.729 the answer changes by less than 1%.

**Exam tip:** N is the number of tubes in a *vertical column* (here 20), not the total 400. The condensate from upper tubes thickens the film on the lower ones.`,
          answer: String.raw`$N = 20$, $h \approx 1.01\times10^4$ W/m²°C, $q \approx 378$ kW, $A \approx 12.4$ m², so $L \approx 1.0$ m.` },
        { id: "2016-17-Q4b", label: "(b)", marks: "15",
          topic: "boiling", sub: "Nucleate boiling (Rohsenow): boiler tubes",
          type: "numerical", syllabus: "in", repeats: ["2023-24-Q8b"],
          text: String.raw`In a gas-fired boiler, water is boiled at 150°C by hot gases flowing through 50-m-long, 5-cm-outer-diameter mechanically polished stainless steel pipes submerged in water. If the outer surface temperature of the pipes is 165°C, determine (i) the rate of heat transfer from the hot gases to water, and (ii) the rate of evaporation.`,
          solution: String.raw`**Given:** $T_{sat} = 150^\circ$C, $T_s = 165^\circ$C, so $\Delta T_{excess} = 15^\circ$C; $L = 50$ m, $D = 0.05$ m; water on mechanically polished stainless steel.

**Find:** $\dot Q$ and $\dot m_{evap}$.

**Assumptions:** steady state; nucleate pool boiling (5°C < ΔT_excess < 30°C for water); the outer surface is uniformly at 165°C.

1. Properties of saturated water at 150°C (Çengel Table A-9): $\rho_l = 916.6$ kg/m³, $\rho_v = 2.55$ kg/m³, $h_{fg} = 2114$ kJ/kg, $\mu_l = 1.83\times10^{-4}$ kg/m·s, $c_{pl} = 4311$ J/kg·°C, $\mathrm{Pr}_l = 1.16$, $\sigma = 0.0488$ N/m. From Table 10-3 (water–mechanically polished stainless steel): $C_{sf} = 0.0130$, $n = 1.0$.

2. Rohsenow correlation, term by term:
$$\dot q = \mu_l h_{fg}\left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2}\left[\frac{c_{pl}\,\Delta T_{excess}}{C_{sf}\,h_{fg}\,\mathrm{Pr}_l^{\,n}}\right]^3$$
$$\left[\frac{9.81 \times 914.1}{0.0488}\right]^{1/2} = 428.6\ \mathrm{m^{-1}}$$
$$\frac{4311 \times 15}{0.0130 \times 2.114\times10^6 \times 1.16} = 2.028$$
$$\dot q = 1.83\times10^{-4} \times 2.114\times10^6 \times 428.6 \times (2.028)^3 = 1.38\times10^6\ \mathrm{W/m^2}$$

3. Check against the critical heat flux (large horizontal cylinder; $L^* = r\sqrt{g(\rho_l - \rho_v)/\sigma} = 0.025 \times 428.6 = 10.7 > 1.2$, so $C_{cr} = 0.12$):
$$\dot q_{max} = 0.12 \times 2.114\times10^6\,[0.0488 \times 9.81 \times 2.55^2 \times 914.1]^{1/4} = 1.85\times10^6\ \mathrm{W/m^2}$$
$\dot q < \dot q_{max}$ (≈ 0.75 of CHF), so the nucleate regime is confirmed.

4. **(i) Heat transfer rate.** Area $A = \pi D L = \pi \times 0.05 \times 50 = 7.854$ m².
$$\dot Q = \dot q\,A = 1.38\times10^6 \times 7.854 = 1.09\times10^7\ \mathrm{W} \approx 10.9\ \mathrm{MW}$$

5. **(ii) Rate of evaporation:**
$$\dot m_{evap} = \frac{\dot Q}{h_{fg}} = \frac{1.087\times10^7}{2.114\times10^6} = 5.14\ \mathrm{kg/s}\ (\approx 18.5\ \mathrm{t/h})$$

**Exam tip:** the Rohsenow flux goes as $\Delta T^3$. A 10% error in $T_s$ gives about 30% error in $\dot q$, so always check the answer against $\dot q_{max}$.`,
          answer: String.raw`$\dot q \approx 1.38$ MW/m² (below $\dot q_{max} \approx 1.85$ MW/m²); (i) $\dot Q \approx 10.9$ MW; (ii) $\dot m_{evap} \approx 5.14$ kg/s.` },
      ] },
    { id: "2016-17-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q5a", label: "(a)", marks: "14",
          topic: "conduction", sub: "General 3-D conduction equation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Starting from the Fourier's law of heat conduction, develop the general three dimensional heat-conduction equation.`,
          solution: String.raw`**Assumptions:** a stationary solid element of volume $dx\,dy\,dz$ in Cartesian coordinates; conductivity $k$ may vary with position; uniform volumetric heat generation $\dot q$ (W/m³); density $\rho$ and specific heat $c$ constant; no mass flow.

1. **Fourier's law** for the heat entering the face at $x$ (area $dy\,dz$):
$$q_x = -k\,dy\,dz\,\frac{\partial T}{\partial x}$$

2. **Heat leaving at $x + dx$** (Taylor expansion):
$$q_{x+dx} = q_x + \frac{\partial q_x}{\partial x}dx$$
Net conduction into the element in the $x$ direction:
$$q_x - q_{x+dx} = -\frac{\partial q_x}{\partial x}dx = \frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right)dx\,dy\,dz$$
In the same way, $\frac{\partial}{\partial y}\left(k\frac{\partial T}{\partial y}\right)dx\,dy\,dz$ in $y$ and $\frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right)dx\,dy\,dz$ in $z$.

3. **Generation** inside the element: $\dot q\,dx\,dy\,dz$.

4. **Rate of change of stored energy**: $\rho c\,\dfrac{\partial T}{\partial t}\,dx\,dy\,dz$.

5. **Energy balance**: net conduction in + generation = rate of storage. Divide by $dx\,dy\,dz$:
$$\frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\left(k\frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \dot q = \rho c\,\frac{\partial T}{\partial t}$$

6. **Constant k**, with $\alpha = k/(\rho c)$:
$$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} + \frac{\dot q}{k} = \frac{1}{\alpha}\frac{\partial T}{\partial t}\qquad\left(\nabla^2 T + \frac{\dot q}{k} = \frac{1}{\alpha}\frac{\partial T}{\partial t}\right)$$

**Special cases**
- Steady state with generation (**Poisson**): $\nabla^2 T + \dot q/k = 0$
- Transient without generation (**diffusion / Fourier equation**): $\nabla^2 T = \frac{1}{\alpha}\frac{\partial T}{\partial t}$
- Steady state without generation (**Laplace**): $\nabla^2 T = 0$
- 1-D steady plane wall: $d^2T/dx^2 = 0$, which gives a linear $T(x)$.

**Cylindrical form**, for reference: $\frac{1}{r}\frac{\partial}{\partial r}\left(kr\frac{\partial T}{\partial r}\right) + \frac{1}{r^2}\frac{\partial}{\partial\phi}\left(k\frac{\partial T}{\partial\phi}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \dot q = \rho c\frac{\partial T}{\partial t}$.`,
          answer: String.raw`$\nabla\cdot(k\nabla T) + \dot q = \rho c\,\partial T/\partial t$; for constant $k$: $\nabla^2 T + \dot q/k = (1/\alpha)\,\partial T/\partial t$ (reduces to the Poisson, Fourier and Laplace forms).` },
        { id: "2016-17-Q5b", label: "(b)", marks: "8",
          topic: "conduction", sub: "Hollow cylinder: resistance network and U",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`For a hollow cylinder exposed to a convection environment on its inner and outer surfaces, write down (i) Electric-resistance analogy and (ii) Overall heat transfer coefficient relationships based on outside and inside area of the tube.`,
          solution: String.raw`Set-up: inner fluid at $T_A$ with $h_i$ on radius $r_i$; wall of conductivity $k$ between $r_i$ and $r_o$; outer fluid at $T_B$ with $h_o$; length $L$; $A_i = 2\pi r_i L$, $A_o = 2\pi r_o L$.

**(i) Electric-resistance analogy.** Three resistances in series:

$T_A$ —[ $\dfrac{1}{h_iA_i}$ ]— $T_1$ —[ $\dfrac{\ln(r_o/r_i)}{2\pi kL}$ ]— $T_2$ —[ $\dfrac{1}{h_oA_o}$ ]— $T_B$

$$q = \frac{T_A - T_B}{\dfrac{1}{h_i 2\pi r_i L} + \dfrac{\ln(r_o/r_i)}{2\pi k L} + \dfrac{1}{h_o 2\pi r_o L}}$$

**(ii) Overall heat transfer coefficient**, defined by $q = U_iA_i(T_A - T_B) = U_oA_o(T_A - T_B)$.

Based on the **inside** area:
$$U_i = \frac{1}{\dfrac{1}{h_i} + \dfrac{A_i\ln(r_o/r_i)}{2\pi kL} + \dfrac{A_i}{A_o}\dfrac{1}{h_o}} = \frac{1}{\dfrac{1}{h_i} + \dfrac{r_i\ln(r_o/r_i)}{k} + \dfrac{r_i}{r_o}\dfrac{1}{h_o}}$$

Based on the **outside** area:
$$U_o = \frac{1}{\dfrac{A_o}{A_i}\dfrac{1}{h_i} + \dfrac{A_o\ln(r_o/r_i)}{2\pi kL} + \dfrac{1}{h_o}} = \frac{1}{\dfrac{r_o}{r_i}\dfrac{1}{h_i} + \dfrac{r_o\ln(r_o/r_i)}{k} + \dfrac{1}{h_o}}$$

They are linked by $U_iA_i = U_oA_o = 1/\sum R$. Fouling resistances, if present, add $R_{fi}/A_i$ and $R_{fo}/A_o$ to the series.`,
          answer: String.raw`$q = (T_A - T_B)/[1/(h_iA_i) + \ln(r_o/r_i)/(2\pi kL) + 1/(h_oA_o)]$; $U_o = [r_o/(r_ih_i) + r_o\ln(r_o/r_i)/k + 1/h_o]^{-1}$, $U_i = [1/h_i + r_i\ln(r_o/r_i)/k + r_i/(r_oh_o)]^{-1}$, with $U_iA_i = U_oA_o$.` },
        { id: "2016-17-Q5c", label: "(c)", marks: "13",
          topic: "conduction", sub: "Glass window with convection both sides",
          type: "numerical", syllabus: "in", repeats: ["2017-18-Q6d"],
          text: String.raw`Consider a 0.8-m-high and 1.5-m-wide glass window with a thickness of 8 mm and a thermal conductivity of k = 0.78 W/m·°C. Determine the steady rate of heat transfer through this glass window and the temperature of its inner surface for a day during which the room is maintained at 20°C while the outdoor temperature is −10°C. Take the heat transfer coefficients on inner and outer surfaces of the window to be $h_1$ = 10 W/m²·°C and $h_2$ = 40 W/m²·°C, which includes the effects of radiation.`,
          solution: String.raw`**Given:** $A = 0.8 \times 1.5 = 1.2$ m², $L = 0.008$ m, $k = 0.78$ W/m·°C, $T_{\infty1} = 20^\circ$C, $T_{\infty2} = -10^\circ$C, $h_1 = 10$, $h_2 = 40$ W/m²·°C.

**Find:** $\dot Q$ and the inner surface temperature $T_1$.

**Assumptions:** steady, 1-D conduction; constant $k$; the given $h$ values include radiation.

1. Resistances:
$$R_{conv,1} = \frac{1}{h_1A} = \frac{1}{10 \times 1.2} = 0.08333\ \mathrm{^\circ C/W}$$
$$R_{glass} = \frac{L}{kA} = \frac{0.008}{0.78 \times 1.2} = 0.00855\ \mathrm{^\circ C/W}$$
$$R_{conv,2} = \frac{1}{h_2A} = \frac{1}{40 \times 1.2} = 0.02083\ \mathrm{^\circ C/W}$$
$$R_{total} = 0.11271\ \mathrm{^\circ C/W}$$

2. Heat transfer rate:
$$\dot Q = \frac{T_{\infty1} - T_{\infty2}}{R_{total}} = \frac{20 - (-10)}{0.11271} = 266\ \mathrm{W}$$

3. Inner surface temperature:
$$T_1 = T_{\infty1} - \dot Q R_{conv,1} = 20 - 266.2 \times 0.08333 = -2.2^\circ\mathrm{C}$$
The outer surface is at $T_2 = T_1 - \dot Q R_{glass} = -4.5^\circ$C.

**Why it matters:** the glass itself gives only 8% of the resistance; the inside air film controls the heat loss. Since the inner surface is below 0°C, frost forms on it. This is why double glazing (with a trapped air gap) is used.`,
          answer: String.raw`$R_{total} = 0.1127$ °C/W, $\dot Q \approx 266$ W, inner surface $T_1 \approx -2.2^\circ$C.` },
      ] },
    { id: "2016-17-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q6a", label: "(a)", marks: "5+10",
          topic: "insulation", sub: "Critical radius of insulation (cylinder)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`What is the significance of "critical thickness of insulation"? Derive the equation for critical thickness of insulation for a cylindrical pipe.`,
          solution: String.raw`### Significance
Adding insulation to a small pipe or wire does two opposite things:
- It **adds conduction resistance** $\ln(r_o/r_i)/(2\pi kL)$, which reduces heat loss.
- It **increases the outer surface area**, which reduces the convection resistance $1/(2\pi r_o L h)$ and increases heat loss.

The **critical radius** $r_c$ is the outer radius at which heat loss is a *maximum*. If the bare radius is below $r_c$, adding insulation *increases* heat loss until $r_o = r_c$, and loss returns to the bare value only at a larger radius. Consequences:
- For **electric wires** (cooling wanted), insulating up to $r_c$ improves cooling and allows a higher current.
- For **small steam or refrigerant lines** (insulation for saving heat), the thickness must be chosen well beyond $r_c$, or the insulation will make things worse.
- For large pipes $r_i > r_c$ already, so any insulation reduces the loss.

### Derivation (cylinder)
**Assumptions:** steady, 1-D radial conduction; constant $k$ of the insulation; constant outside $h$; inner insulation surface held at $T_i$; the radiation effect is lumped into $h$.

1. Heat loss through the insulation and outer film in series:
$$q = \frac{2\pi L(T_i - T_\infty)}{\dfrac{\ln(r_o/r_i)}{k} + \dfrac{1}{r_o h}}$$

2. Set $dq/dr_o = 0$. The numerator is constant, so the denominator $D(r_o) = \frac{\ln(r_o/r_i)}{k} + \frac{1}{r_o h}$ must be stationary:
$$\frac{dq}{dr_o} = -\frac{2\pi L(T_i - T_\infty)\left(\dfrac{1}{kr_o} - \dfrac{1}{hr_o^2}\right)}{\left[\dfrac{\ln(r_o/r_i)}{k} + \dfrac{1}{r_o h}\right]^2} = 0$$
$$\frac{1}{kr_o} - \frac{1}{hr_o^2} = 0\quad\Rightarrow\quad \boxed{r_{c} = \frac{k}{h}}$$

3. Nature of the stationary point:
$$\frac{d^2D}{dr_o^2} = -\frac{1}{kr_o^2} + \frac{2}{hr_o^3}$$
At $r_o = k/h$ this equals $\frac{h^2}{k^3} > 0$, so $D$ is a minimum and $q$ is a **maximum**.

4. Critical thickness: $t_c = r_c - r_i = k/h - r_i$, which exists only if $r_i < k/h$.

For a sphere the same steps give $r_c = 2k/h$.`,
          answer: String.raw`$r_c = k/h$ (cylinder), where heat loss is a **maximum**. Insulation on a pipe with $r_i < r_c$ increases the loss up to $r_c$; this helps cool wires and warns against thin insulation on small pipes.` },
        { id: "2016-17-Q6b", label: "(b)", marks: "12",
          topic: "insulation", sub: "Insulated electric wire: interface temperature",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A 3-mm-diameter and 5-m-long electric wire is tightly wrapped with a 2-mm-thick plastic cover whose thermal conductivity is 0.15 W/m·°C. Electrical measurements indicate that a current of 10 A passes through the wire and there is a voltage drop of 8 V along the wire. If the insulated wire is exposed to a medium at 30°C with a heat transfer coefficient 12 W/m²·°C, determine the temperature at the interface of the wire and the plastic cover in steady operation. Also determine whether doubling the thickness of the plastic cover will increase or decrease this interface temperature.`,
          solution: String.raw`**Given:** $r_1 = 1.5$ mm, $r_2 = 3.5$ mm, $L = 5$ m, $k = 0.15$ W/m·°C, $I = 10$ A, $V = 8$ V, $T_\infty = 30^\circ$C, $h = 12$ W/m²·°C.

**Find:** the interface temperature $T_1$, and the effect of a 4 mm cover.

**Assumptions:** steady state; 1-D radial conduction; constant properties; all electrical heat is dissipated through the cover; radiation is included in $h$.

1. Heat generated:
$$\dot Q = VI = 8 \times 10 = 80\ \mathrm{W}$$

2. Resistances:
$$R_{plastic} = \frac{\ln(r_2/r_1)}{2\pi kL} = \frac{\ln(3.5/1.5)}{2\pi \times 0.15 \times 5} = 0.1798\ \mathrm{^\circ C/W}$$
$$R_{conv} = \frac{1}{h\,2\pi r_2 L} = \frac{1}{12 \times 2\pi \times 0.0035 \times 5} = 0.7579\ \mathrm{^\circ C/W}$$
$$R_{total} = 0.9377\ \mathrm{^\circ C/W}$$

3. Interface temperature:
$$T_1 = T_\infty + \dot Q R_{total} = 30 + 80 \times 0.9377 = 105.0^\circ\mathrm{C}$$

4. Critical radius:
$$r_c = \frac{k}{h} = \frac{0.15}{12} = 0.0125\ \mathrm{m} = 12.5\ \mathrm{mm}$$

5. Doubling the thickness gives $r_2 = 1.5 + 4 = 5.5$ mm, which is still below $r_c$:
$$R_{plastic} = \frac{\ln(5.5/1.5)}{2\pi \times 0.15 \times 5} = 0.2757\ \mathrm{^\circ C/W}$$
$$R_{conv} = \frac{1}{12 \times 2\pi \times 0.0055 \times 5} = 0.4823\ \mathrm{^\circ C/W}$$
$$T_1 = 30 + 80 \times 0.7580 = 90.6^\circ\mathrm{C}$$

**Conclusion:** because $r_2 < r_c$, a thicker cover *reduces* the total resistance, so the interface temperature **decreases** (105.0 → 90.6°C). The wire runs cooler, and it would keep doing so until $r_2 = 12.5$ mm.`,
          answer: String.raw`$\dot Q = 80$ W, $T_1 \approx 105^\circ$C. $r_c = 12.5$ mm > 5.5 mm, so doubling the cover **decreases** $T_1$ to ≈ 90.6°C.` },
        { id: "2016-17-Q6c", label: "(c)", marks: "8",
          topic: "intro", sub: "Radiation effect: winter vs summer",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`It is common experience to feel "chilly" in winter and "warm" in summer in our homes even when the thermostat setting is kept the same. This is due to so called "radiation effect" resulting from radiation heat exchange between our bodies and the surrounding surfaces of the walls and the ceiling. Consider a person standing in a room maintained at 22°C at all times. The inner surfaces of the walls, floors and the ceiling of the house are observed to be at an average temperature of 10°C in winter and 25°C in summer. Now validate the "radiation effect" with this information. [See Fig. 6(c)].

*[Figure 6(c): person in a room; body surface 30°C, area 1.4 m², emissivity of human body = 0.95; radiation $\dot Q_{rad}$ to the room surfaces at $T_{surr}$.]*`,
          solution: String.raw`**Given:** $A_s = 1.4$ m², $\varepsilon = 0.95$, $T_s = 30^\circ$C = 303 K; $T_{surr} = 10^\circ$C = 283 K (winter) and 25°C = 298 K (summer). Air is at 22°C in both cases.

**Find:** the radiation loss from the body in winter and summer.

**Assumptions:** the person is a small body enclosed by large surroundings; steady state; convection to the air is the same in both seasons (air is at 22°C both times), so only radiation differs.

1. Net radiation exchange:
$$\dot Q_{rad} = \varepsilon\sigma A_s\left(T_s^4 - T_{surr}^4\right),\qquad \sigma = 5.67\times10^{-8}\ \mathrm{W/m^2K^4}$$

2. **Winter:**
$$\dot Q_{rad} = 0.95 \times 5.67\times10^{-8} \times 1.4 \times (303^4 - 283^4) = 152\ \mathrm{W}$$

3. **Summer:**
$$\dot Q_{rad} = 0.95 \times 5.67\times10^{-8} \times 1.4 \times (303^4 - 298^4) = 40.9\ \mathrm{W}$$

**Validation:** with the same thermostat setting (same air temperature, so the same convection loss), the body loses about **3.7 times** more heat by radiation in winter (≈ 152 W) than in summer (≈ 41 W). The cold walls "pull" heat from us, so we feel chilly in winter and warm in summer. This confirms the "radiation effect". Warmer walls (better wall insulation) or a higher winter thermostat setting compensate for it.`,
          answer: String.raw`$\dot Q_{rad} \approx 152$ W in winter vs ≈ 41 W in summer (≈ 3.7×) at the same air temperature, so the cold walls cause the chilly feeling.` },
      ] },
    { id: "2016-17-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q7a", label: "(a)", marks: "5",
          topic: "forced-convection", sub: "Dittus–Boelter equation and range",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write down Dittus–Boelter equation with its applicability ranges.`,
          solution: String.raw`$$\mathrm{Nu}_d = \frac{hd}{k} = 0.023\,\mathrm{Re}_d^{0.8}\,\mathrm{Pr}^{\,n},\qquad n = \begin{cases}0.4 & \text{heating of the fluid } (T_w > T_b)\\ 0.3 & \text{cooling of the fluid } (T_w < T_b)\end{cases}$$

**Applicability:**
- Fully developed **turbulent** flow in **smooth** circular tubes: $\mathrm{Re}_d \gtrsim 10{,}000$.
- $0.6 \lesssim \mathrm{Pr} \lesssim 100$ (slides; some texts quote up to 160).
- Long tubes, $L/d \gtrsim 10$ (60 in Holman), so entrance effects are negligible.
- **Moderate** wall-to-bulk temperature differences, i.e. small property variation. For large ΔT use Sieder–Tate with $(\mu/\mu_w)^{0.14}$.
- All properties at the **mean bulk temperature** $(T_{b,in} + T_{b,out})/2$.
- Non-circular ducts: use the hydraulic diameter $D_h = 4A_c/P$.

It is not valid for liquid metals (Pr ≪ 1), laminar or transitional flow, or rough tubes. Accuracy is about ±25%.`,
          answer: String.raw`$\mathrm{Nu} = 0.023\,\mathrm{Re}^{0.8}\mathrm{Pr}^n$ ($n = 0.4$ heating, 0.3 cooling), for smooth tubes with Re > 10⁴, 0.6 < Pr < 100, L/d > 10, moderate ΔT, and properties at bulk temperature.` },
        { id: "2016-17-Q7b", label: "(b)", marks: "8",
          topic: "convection-basics", sub: "Nusselt and Prandtl numbers",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Define Nusselt number and Prandtl number. Explain their physical significance.`,
          solution: String.raw`**Nusselt number**
$$\mathrm{Nu} = \frac{hL_c}{k} = \frac{h\,\Delta T}{k\,\Delta T/L_c} = \frac{\text{convective heat flux}}{\text{conductive heat flux across the same fluid layer}}$$
- It is the dimensionless heat transfer coefficient, equal to the dimensionless temperature gradient at the wall, $(\partial\theta^*/\partial y^*)_0$.
- Nu = 1 means heat moves through the layer by pure conduction. The larger Nu, the more convection enhances heat transfer.
- $L_c$ is the characteristic length: $x$ or $L$ for a plate, $d$ for a tube, $D_h$ for a duct.

**Prandtl number**
$$\mathrm{Pr} = \frac{\nu}{\alpha} = \frac{\mu/\rho}{k/(\rho c_p)} = \frac{c_p\mu}{k} = \frac{\text{molecular diffusivity of momentum}}{\text{molecular diffusivity of heat}}$$
- It is a fluid **property** (depends on temperature only), not a flow parameter.
- It fixes the relative thickness of the velocity and thermal boundary layers. For a laminar flat plate $\delta_t/\delta \approx \mathrm{Pr}^{-1/3}/1.026$.
- Typical values: liquid metals 0.004–0.03 (thick thermal layer, $\delta_t \gg \delta$); gases about 0.7–1 ($\delta_t \approx \delta$); water 1.7–13; oils 50–100,000 (very thin thermal layer).

Together they form correlations $\mathrm{Nu} = f(\mathrm{Re},\mathrm{Pr})$ for forced convection and $f(\mathrm{Gr},\mathrm{Pr})$ for natural convection.`,
          answer: String.raw`Nu = hL/k = convection ÷ conduction (dimensionless h). Pr = ν/α = c_pμ/k = momentum ÷ heat diffusivity, which sets δ_t/δ (liquid metals ≪ 1, gases ≈ 0.7, oils ≫ 1).` },
        { id: "2016-17-Q7c", label: "(c)", marks: "8",
          topic: "convection-basics", sub: "Pr of liquid metals vs gases",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"Prandtl number for liquid metal is less than that of gas" – Do you agree with this statement? Justify your answer.`,
          solution: String.raw`**Yes, I agree.**

$$\mathrm{Pr} = \frac{\nu}{\alpha} = \frac{c_p\mu}{k}$$

- **Gases:** momentum and energy are both carried by the same random molecular motion, so $\nu$ and $\alpha$ are of the same order. Kinetic theory gives Pr ≈ 0.7–1 (air ≈ 0.71).
- **Liquid metals** (Hg, Na, NaK, Pb–Bi): their **thermal conductivity is extremely high** because free electrons carry heat. For example $k_{Na} \approx 70$ W/m·K vs 0.026 for air. Their kinematic viscosity is similar to that of water. So $\alpha \gg \nu$ and Pr ≈ 0.004–0.03. Mercury at 20°C has Pr ≈ 0.025; sodium at 400°C has Pr ≈ 0.005.

| Fluid | Typical Pr | Thermal vs velocity BL |
|---|---|---|
| Liquid metals | 0.004–0.03 | $\delta_t \gg \delta$ |
| Gases | 0.7–1.0 | $\delta_t \approx \delta$ |
| Water | 1.7–13.7 | $\delta_t < \delta$ |
| Oils | 50–10⁵ | $\delta_t \ll \delta$ |

**Consequences:** in liquid metals heat diffuses far faster than momentum. The thermal boundary layer is much thicker than the velocity layer, and the velocity profile is almost uniform (slug flow) across it. Correlations such as Dittus–Boelter (Pr ≥ 0.6) and $\delta_t/\delta = \mathrm{Pr}^{-1/3}/1.026$ (which assumes $\delta_t < \delta$) fail. Liquid-metal relations of the form $\mathrm{Nu} = a + b\,\mathrm{Pe}^m$ (Pe = RePr) are used instead.`,
          answer: String.raw`Agree. The free-electron conduction gives liquid metals a very high k, so α ≫ ν and Pr ≈ 0.004–0.03, versus ≈ 0.7 for gases (where ν ≈ α). Their thermal BL is far thicker than the velocity BL.` },
        { id: "2016-17-Q7d", label: "(d)", marks: "14",
          topic: "boundary-layer", sub: "Laminar δ on a flat plate",
          type: "numerical", syllabus: "in", repeats: ["2015-16-Q7b", "2017-18-Q7b"],
          text: String.raw`Atmospheric air at 300 K flows over a flat plate at a speed of 2 m/s. If the viscosity of air at 300 K is 1.85 × 10⁻⁵ kg/m·s, calculate the boundary layer thickness at distances of 20 cm and 40 cm from the leading edge of the plate.`,
          solution: String.raw`**Given:** air at 1 atm and 300 K, $u_\infty = 2$ m/s, $\mu = 1.85\times10^{-5}$ kg/m·s; $x = 0.2$ and $0.4$ m.

**Find:** $\delta$ at both positions.

**Assumptions:** ideal gas; steady, incompressible, laminar flow over a smooth plate; integral-method (cubic profile) result.

1. Density:
$$\rho = \frac{p}{RT} = \frac{101{,}325}{287 \times 300} = 1.177\ \mathrm{kg/m^3}$$

2. Reynolds numbers:
$$\mathrm{Re}_x = \frac{\rho u_\infty x}{\mu}$$
$$\mathrm{Re}_{0.2} = \frac{1.177 \times 2 \times 0.2}{1.85\times10^{-5}} = 25{,}445$$
$$\mathrm{Re}_{0.4} = 50{,}890$$
Both are below $5\times10^5$, so the flow is laminar and the formula applies.

3. Boundary-layer thickness:
$$\delta = \frac{4.64\,x}{\mathrm{Re}_x^{1/2}}$$
$$\delta_{0.2} = \frac{4.64 \times 0.2}{\sqrt{25{,}445}} = 5.82\times10^{-3}\ \mathrm{m} = 5.8\ \mathrm{mm}$$
$$\delta_{0.4} = \frac{4.64 \times 0.4}{\sqrt{50{,}890}} = 8.23\times10^{-3}\ \mathrm{m} = 8.2\ \mathrm{mm}$$

**Check:** $\delta \propto \sqrt{x}$, and $8.23/5.82 = 1.414 = \sqrt{2}$ ✓. The Blasius exact solution ($5.0x/\sqrt{\mathrm{Re}}$) gives 6.3 and 8.9 mm.`,
          answer: String.raw`$\rho = 1.177$ kg/m³; $\mathrm{Re}_{20} = 2.54\times10^4$, $\delta_{20\,cm} \approx 5.8$ mm; $\mathrm{Re}_{40} = 5.09\times10^4$, $\delta_{40\,cm} \approx 8.2$ mm.` },
      ] },
    { id: "2016-17-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q8a", label: "(a)", marks: "18",
          topic: "boundary-layer", sub: "Reynolds–Colburn analogy derivation",
          type: "derivation", syllabus: "in", repeats: ["2011-12-Q7a", "2014-15-Q3a", "2015-16-Q8a", "2017-18-Q8a", "2020-21-Q7a", "2022-23-Q3a"],
          text: String.raw`Consider a fluid flowing past a rough flat plate where the friction coefficient is $C_f$. The velocity distribution and the laminar boundary layer thickness for the fluid can be expressed by the following equations respectively

$$\frac{u}{u_\infty} = \frac{3}{2}\frac{y}{\delta} - \frac{1}{2}\left(\frac{y}{\delta}\right)^3,\qquad \delta = 4.64\sqrt{\frac{\nu x}{u_\infty}}$$

where $u_\infty$ is the fluid velocity outside the boundary layer and other symbols have their usual meanings. Derive Reynolds–Colburn analogy.`,
          solution: String.raw`**Assumptions:** steady, incompressible, laminar 2-D flow; constant properties; zero pressure gradient; negligible viscous dissipation; plate at uniform $T_w$ and heated from the leading edge ($x_0 = 0$); $\delta_t \le \delta$ ($\mathrm{Pr} \gtrsim 0.7$).

### Step 1: Friction coefficient from the velocity profile
$$\tau_w = \mu\left.\frac{\partial u}{\partial y}\right|_{y=0} = \mu\,\frac{3u_\infty}{2\delta}$$
$$C_{fx} = \frac{\tau_w}{\tfrac{1}{2}\rho u_\infty^2} = \frac{3\nu}{u_\infty\delta} = \frac{3\nu}{u_\infty \times 4.64\sqrt{\nu x/u_\infty}} = \frac{3}{4.64}\left(\frac{\nu}{u_\infty x}\right)^{1/2}$$
$$\boxed{\frac{C_{fx}}{2} = 0.323\,\mathrm{Re}_x^{-1/2}}$$

### Step 2: Temperature profile
Let $\theta = T - T_w$, $\theta_\infty = T_\infty - T_w$. Use a cubic $\theta/\theta_\infty = a + by + cy^2 + dy^3$ with the conditions:
- $y = 0$: $\theta = 0$.
- $y = 0$: $\partial^2 T/\partial y^2 = 0$ (the energy equation with $u = v = 0$ at the wall).
- $y = \delta_t$: $\theta = \theta_\infty$ and $\partial\theta/\partial y = 0$.

These give
$$\frac{\theta}{\theta_\infty} = \frac{3}{2}\frac{y}{\delta_t} - \frac{1}{2}\left(\frac{y}{\delta_t}\right)^3$$

### Step 3: Integral energy equation
$$\frac{d}{dx}\int_0^{\delta_t}(T_\infty - T)\,u\,dy = \alpha\left.\frac{\partial T}{\partial y}\right|_{0}\quad\text{or}\quad \frac{d}{dx}\int_0^{\delta_t}(\theta_\infty - \theta)\,u\,dy = \alpha\left.\frac{\partial\theta}{\partial y}\right|_{0}$$
Substitute both profiles with $\zeta = \delta_t/\delta$:
$$\int_0^{\delta_t}(\theta_\infty - \theta)u\,dy = \theta_\infty u_\infty\delta\left(\frac{3}{20}\zeta^2 - \frac{3}{280}\zeta^4\right) \approx \frac{3}{20}\theta_\infty u_\infty\delta\zeta^2\quad(\zeta < 1)$$
$$\alpha\left.\frac{\partial\theta}{\partial y}\right|_0 = \frac{3\alpha\theta_\infty}{2\delta_t} = \frac{3\alpha\theta_\infty}{2\zeta\delta}$$
So
$$\frac{1}{10}u_\infty\left[\zeta^3\delta\frac{d\delta}{dx} + 2\delta^2\zeta^2\frac{d\zeta}{dx}\right] = \alpha$$

### Step 4: Use the given δ(x)
$$\delta^2 = 21.53\frac{\nu x}{u_\infty},\qquad \delta\frac{d\delta}{dx} = 10.76\frac{\nu}{u_\infty}$$
Substituting:
$$\zeta^3 + 4x\zeta^2\frac{d\zeta}{dx} = \frac{13}{14}\frac{\alpha}{\nu}$$
For heating from the leading edge, $\zeta$ is constant, so $d\zeta/dx = 0$:
$$\zeta = \frac{\delta_t}{\delta} = \left(\frac{13}{14}\right)^{1/3}\mathrm{Pr}^{-1/3} = \frac{1}{1.026}\mathrm{Pr}^{-1/3}$$
(With an unheated starting length: $\zeta = \frac{1}{1.026}\mathrm{Pr}^{-1/3}[1 - (x_0/x)^{3/4}]^{1/3}$.)

### Step 5: Local heat transfer coefficient
$$h_x = \frac{-k(\partial T/\partial y)_0}{T_w - T_\infty} = \frac{3k}{2\delta_t} = \frac{3k}{2\zeta\delta}$$
$$\mathrm{Nu}_x = \frac{h_x x}{k} = \frac{3}{2}\cdot\frac{1.026\,\mathrm{Pr}^{1/3}\,x}{4.64\sqrt{\nu x/u_\infty}} = 0.332\,\mathrm{Pr}^{1/3}\mathrm{Re}_x^{1/2}$$

### Step 6: Stanton number and the analogy
$$\mathrm{St}_x = \frac{h_x}{\rho c_p u_\infty} = \frac{\mathrm{Nu}_x}{\mathrm{Re}_x\mathrm{Pr}} = 0.332\,\mathrm{Re}_x^{-1/2}\mathrm{Pr}^{-2/3}$$
$$\mathrm{St}_x\,\mathrm{Pr}^{2/3} = 0.332\,\mathrm{Re}_x^{-1/2}$$
Compare with Step 1: $C_{fx}/2 = 0.323\,\mathrm{Re}_x^{-1/2}$. The exact Blasius value is $0.332\,\mathrm{Re}_x^{-1/2}$; the integral profile gives 0.323, within 3%. Hence
$$\boxed{\mathrm{St}_x\,\mathrm{Pr}^{2/3} = \frac{C_{fx}}{2}}\qquad\text{(Reynolds–Colburn analogy)}$$
The same relation holds for average values: $\overline{\mathrm{St}}\,\mathrm{Pr}^{2/3} = \bar C_f/2$.

**Meaning:** heat transfer can be found from a measured friction (drag) coefficient alone, which is why the question starts from a known $C_f$ for the (rough) plate. Valid for $0.6 < \mathrm{Pr} < 60$, laminar flat plate (and turbulent flat plate when there is no form drag). For Pr = 1 it reduces to Reynolds' analogy $\mathrm{St} = C_f/2$.`,
          answer: String.raw`$C_{fx}/2 = 0.323\,\mathrm{Re}_x^{-1/2}$ (Blasius 0.332); $\delta_t/\delta = \mathrm{Pr}^{-1/3}/1.026$; $\mathrm{Nu}_x = 0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$, so $\mathrm{St}_x\mathrm{Pr}^{2/3} = 0.332\,\mathrm{Re}_x^{-1/2} = C_{fx}/2$.` },
        { id: "2016-17-Q8b", label: "(b)", marks: "17",
          topic: "forced-convection", sub: "Turbulent tube flow, constant heat flux (Dittus–Boelter)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Air at 2 atm and 473 K is heated as it flows through a tube with a diameter of 1 inch at a velocity of 10 m/s. Calculate the heat transfer per unit length of tube if a constant-heat-flux condition is maintained at the wall and the wall temperature is 20°C above the air temperature, all along the length of the tube. You can use the following correlation,

$$\mathrm{Nu} = 0.023\,\mathrm{Re}^{0.8}\,\mathrm{Pr}^{0.4}$$

Physical properties of air at a bulk temperature of 473 K:

| Property | Value |
|---|---|
| Viscosity, μ | 2.57 × 10⁻⁵ kg/m·s |
| Thermal conductivity, k | 0.0386 W/m·°C |
| Heat capacity, $c_p$ | 1.025 kJ/kg·°C |`,
          solution: String.raw`**Given:** $p = 2$ atm, $T_b = 473$ K, $d = 1$ in $= 0.0254$ m, $u_m = 10$ m/s, $T_w - T_b = 20^\circ$C (constant along the tube, which is the constant-flux case); μ, k and $c_p$ as given.

**Find:** $q/L$.

**Assumptions:** ideal gas; fully developed turbulent flow in a smooth tube; Dittus–Boelter with $n = 0.4$ (air is being heated).

1. Density:
$$\rho = \frac{p}{RT} = \frac{2 \times 101{,}325}{287 \times 473} = 1.493\ \mathrm{kg/m^3}$$

2. Reynolds number:
$$\mathrm{Re}_d = \frac{\rho u_m d}{\mu} = \frac{1.493 \times 10 \times 0.0254}{2.57\times10^{-5}} = 14{,}750$$
This is above $10^4$, so the flow is turbulent and Dittus–Boelter applies.

3. Prandtl number:
$$\mathrm{Pr} = \frac{c_p\mu}{k} = \frac{1025 \times 2.57\times10^{-5}}{0.0386} = 0.682\quad(> 0.6\ \checkmark)$$

4. Nusselt number:
$$\mathrm{Nu}_d = 0.023\,(14{,}750)^{0.8}(0.682)^{0.4} = 42.7$$

5. Heat transfer coefficient:
$$h = \frac{\mathrm{Nu}_d\,k}{d} = \frac{42.7 \times 0.0386}{0.0254} = 64.9\ \mathrm{W/m^2\,^\circ C}$$

6. Heat transfer per unit length:
$$\frac{q}{L} = h\,\pi d\,(T_w - T_b) = 64.9 \times \pi \times 0.0254 \times 20 = 103.6\ \mathrm{W/m}$$

**Exam tip:** pressure enters only through ρ (and so Re). μ, k and $c_p$ of a gas are nearly independent of pressure.`,
          answer: String.raw`$\rho = 1.49$ kg/m³, Re ≈ 14,750, Pr = 0.682, Nu ≈ 42.7, $h \approx 64.9$ W/m²°C, $q/L \approx 104$ W/m.` },
      ] },
  ]
});
