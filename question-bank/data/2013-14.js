QB.paper({
  year: "2013-14", date: "05/07/2015", marks: 210,
  rules: String.raw`Section A: any three of Q1–Q4. Section B: any three of Q5–Q8. Data-table booklet provided; forced-convection summary tables attached.`,
  questions: [
    { id: "2013-14-Q1", q: 1, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2013-14-Q1a", label: "(a)", marks: "14",
          topic: "natural-convection", sub: "Average h from a local laminar correlation",
          type: "derivation", syllabus: "partial", repeats: [],
          text: String.raw`Natural convection heat transfer from a vertical flat rectangular plate is given by
$$\mathrm{Nu}_x = 0.508\,\mathrm{Pr}^{1/2}(0.952+\mathrm{Pr})^{-1/4}\mathrm{Gr}_x^{1/4},\qquad \mathrm{Gr}_x = \frac{g\beta(T_w-T_\infty)x^3}{\nu^2}$$
The above equation gives the local heat-transfer coefficient along the vertical direction. Show that the average heat-transfer coefficient is given by
$$\bar h = \frac{4}{3}h_{x=L}$$`,
          solution: String.raw`**Assumptions:** isothermal plate ($T_w$ constant), laminar flow over the whole height, constant properties.

1. Write the local coefficient explicitly. Let $C = 0.508\,\mathrm{Pr}^{1/2}(0.952+\mathrm{Pr})^{-1/4}$ (a constant for a given fluid):
$$\frac{h_x x}{k} = C\left[\frac{g\beta(T_w-T_\infty)}{\nu^2}\right]^{1/4}x^{3/4}$$
$$h_x = kC\left[\frac{g\beta(T_w-T_\infty)}{\nu^2}\right]^{1/4}x^{-1/4} = B\,x^{-1/4}$$
where $B$ collects all constants.

2. Average over the height $L$:
$$\bar h = \frac{1}{L}\int_0^L h_x\,dx = \frac{B}{L}\int_0^L x^{-1/4}dx = \frac{B}{L}\cdot\frac{x^{3/4}}{3/4}\Big|_0^L = \frac{4}{3}B L^{-1/4}$$

3. Since $h_{x=L} = B L^{-1/4}$:
$$\boxed{\bar h = \frac{4}{3}h_{x=L}}$$
Equivalently $\overline{\mathrm{Nu}}_L = \frac{4}{3}\mathrm{Nu}_{x=L}$.

**Why it matters:** any laminar free-convection law with $\mathrm{Nu}_x \propto \mathrm{Gr}_x^{1/4}$ gives $h \propto x^{-1/4}$ and hence the factor 4/3 (compare $h \propto x^{-1/2}$ and factor 2 for a laminar forced-convection plate).`,
          answer: String.raw`$h_x \propto x^{-1/4}$, so $\bar h = (1/L)\int_0^L h_x dx = \tfrac43 h_L$.` },
        { id: "2013-14-Q1b", label: "(b)", marks: "11",
          topic: "natural-convection", sub: "Vertical plate in water, both sides",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`A 20-cm-square steel plate is maintained at 80°C. The plate is submerged vertically in a big pool of water at 30°C. Calculate heat transfer rate from both sides of the plate. Use the equation from part (a) of this question.`,
          solution: String.raw`**Given:** $L = 0.2$ m (height and width), $T_w = 80$°C, $T_\infty = 30$°C, both faces.
**Find:** $q$.
**Assumptions:** steady; isothermal plate; properties at film temperature; correlation of part (a) used as instructed.

1. Film temperature $T_f = (80+30)/2 = 55$°C. Water at 55°C (Çengel Table A-9): $\rho = 985.2$ kg/m³, $k = 0.649$ W/m·K, $\mu = 0.504\times10^{-3}$ kg/m·s → $\nu = 5.12\times10^{-7}$ m²/s, $\mathrm{Pr} = 3.25$, $\beta = 0.484\times10^{-3}$ K⁻¹.

2. Grashof number at $x = L$:
$$\mathrm{Gr}_L = \frac{9.81(0.484\times10^{-3})(50)(0.2)^3}{(5.12\times10^{-7})^2} = 7.26\times10^9$$
($\mathrm{Ra}_L = 2.36\times10^{10}$ — strictly beyond the laminar limit ≈ 10⁹, but the question asks for the part (a) equation.)

3. Local Nusselt number at $x = L$:
$$\mathrm{Nu}_L = 0.508(3.25)^{1/2}(0.952+3.25)^{-1/4}(7.26\times10^9)^{1/4} = 186.7$$
$$h_{x=L} = \frac{186.7(0.649)}{0.2} = 606\ \mathrm{W/m^2K}$$

4. Average coefficient (part a):
$$\bar h = \frac43(606) = 808\ \mathrm{W/m^2K}$$

5. Heat transfer from both sides:
$$q = \bar h(2L^2)(T_w-T_\infty) = 808(2\times0.04)(50) = 3.23\times10^3\ \mathrm{W}$$

**Exam tip:** "both sides" doubles the area; forgetting it is the commonest error.`,
          answer: String.raw`$\mathrm{Gr}_L = 7.3\times10^9$, $h_L \approx 606$, $\bar h \approx 808$ W/m²K, $q \approx 3.2$ kW (both sides).` },
        { id: "2013-14-Q1c", label: "(c)", marks: "10",
          topic: "condensation", sub: "Heat pipe (short note)",
          type: "theory", syllabus: "out", repeats: [],
          text: String.raw`Write a short note on heat pipe.`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

**Heat pipe:** a sealed tube, evacuated and partly filled with a working fluid (water, ammonia, methanol, liquid metals for high T), whose inner wall is lined with a **wick** (mesh, grooves or sintered powder). It transports large heat loads over a distance with a very small temperature difference.

**Operation (three sections)**
1. **Evaporator:** heat input boils the liquid in the wick; vapour forms at $T_{sat}$.
2. **Adiabatic section:** vapour flows along the core, driven by the small pressure difference, to the cold end.
3. **Condenser:** vapour condenses on the wick, releasing $h_{fg}$; heat leaves to the sink.
The condensate returns to the evaporator by **capillary action** in the wick (or by gravity in a wickless thermosyphon).

**Features**
- Effective conductivity hundreds of times that of copper, because latent heat is used.
- Nearly isothermal; no moving parts, no pump; works in any orientation (wicked type).
- Limits: capillary (wicking) limit, sonic, entrainment, boiling (burnout) limits; operating range set by the fluid's triple and critical points.

**Uses:** electronics and laptop CPU cooling, spacecraft thermal control, solar collectors, heat-recovery exchangers, permafrost stabilisation of pipelines.`,
          answer: String.raw`Sealed, wicked tube: evaporation at the hot end, vapour flow, condensation at the cold end and capillary return of liquid — moves large heat with a tiny ΔT and no moving parts.` },
      ] },

    { id: "2013-14-Q2", q: 2, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2013-14-Q2a", label: "(a)", marks: "5",
          topic: "other", sub: "View factor algebra (composite surface)",
          type: "derivation", syllabus: "out", repeats: [],
          text: String.raw`Show that $A_{1,2}F_{1,2-3} = A_1F_{1-3} + A_2F_{2-3}$ in the Figure.

*[Figure for Q2(a): two adjacent rectangles $A_1$ and $A_2$ forming one plane surface $A_{1,2}$, with a separate tilted rectangle $A_3$ above them.]*`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

Let $J$ be uniform radiosity. Radiation leaving the composite surface $A_{1,2} = A_1 + A_2$ that reaches $A_3$ is the sum of what leaves $A_1$ and reaches $A_3$ and what leaves $A_2$ and reaches $A_3$:
$$A_{1,2}F_{1,2-3}\,J = A_1F_{1-3}\,J + A_2F_{2-3}\,J$$
Cancelling $J$:
$$A_{1,2}F_{1,2-3} = A_1F_{1-3} + A_2F_{2-3}$$
(By reciprocity this is the same as $A_3F_{3-1,2} = A_3F_{3-1} + A_3F_{3-2}$, i.e. $F_{3-1,2} = F_{3-1} + F_{3-2}$: the view factor *to* a composite surface is the sum of the parts.)`,
          answer: String.raw`Energy from $A_{1,2}$ reaching $A_3$ = sum of contributions of $A_1$ and $A_2$ → $A_{1,2}F_{1,2-3} = A_1F_{1-3} + A_2F_{2-3}$.` },
        { id: "2013-14-Q2b", label: "(b)", marks: "12",
          topic: "other", sub: "View factor between non-adjacent perpendicular rectangles",
          type: "derivation", syllabus: "out", repeats: [],
          text: String.raw`Determine the shape factor $F_{1-4}$ in the Figure in terms of known shape factors for perpendicular rectangles with a common edge.

*[Figure for Q2(b): a vertical surface made of $A_1$ (top) above $A_2$; $A_2$ meets, at a 90° common edge, a perpendicular surface made of $A_3$ (next to the edge) and $A_4$ (farther away).]*`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

Known (common-edge) pairs: $(1,2)$–$(3,4)$, $(1,2)$–$3$, $2$–$(3,4)$, $2$–$3$.

1. Composite emitter (as in part a):
$$A_{1,2}F_{1,2-3,4} = A_1F_{1-3,4} + A_2F_{2-3,4}$$
2. Composite receiver: $F_{1-3,4} = F_{1-3} + F_{1-4}$, so
$$A_1F_{1-4} = A_{1,2}F_{1,2-3,4} - A_2F_{2-3,4} - A_1F_{1-3}$$
3. $A_1F_{1-3}$ is not a common-edge pair either; again by part (a):
$$A_1F_{1-3} = A_{1,2}F_{1,2-3} - A_2F_{2-3}$$
4. Substitute:
$$\boxed{F_{1-4} = \frac{1}{A_1}\left[A_{1,2}F_{1,2-3,4} - A_{1,2}F_{1,2-3} - A_2F_{2-3,4} + A_2F_{2-3}\right]}$$
Each of the four F's is read from the perpendicular-rectangles-with-common-edge chart.`,
          answer: String.raw`$A_1F_{1-4} = A_{12}F_{12-34} - A_{12}F_{12-3} - A_2F_{2-34} + A_2F_{2-3}$.` },
        { id: "2013-14-Q2c", label: "(c)", marks: "12",
          topic: "other", sub: "Radiation shield between parallel planes",
          type: "derivation", syllabus: "out", repeats: [],
          text: String.raw`Show that a radiation shield placed between two parallel infinite planes will reduce the heat flow by one-half (assume all the surfaces have the same emissivity).`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

**Assumptions:** infinite parallel grey diffuse planes ($F = 1$), all emissivities $\varepsilon$, thin shield (same $\varepsilon$ on both faces), steady state, no convection.

1. Without shield:
$$\frac{q}{A} = \frac{\sigma(T_1^4 - T_2^4)}{\dfrac1\varepsilon + \dfrac1\varepsilon - 1} = \frac{\sigma(T_1^4-T_2^4)}{2/\varepsilon - 1}$$
2. With shield 3, steady state means the same flux crosses both gaps:
$$\frac{q}{A} = \frac{\sigma(T_1^4-T_3^4)}{2/\varepsilon-1} = \frac{\sigma(T_3^4-T_2^4)}{2/\varepsilon-1}$$
Hence $T_3^4 = \tfrac12(T_1^4+T_2^4)$, and adding the two gap resistances in series:
$$\left(\frac{q}{A}\right)_{shield} = \frac{\sigma(T_1^4-T_2^4)}{2(2/\varepsilon-1)} = \frac12\left(\frac{q}{A}\right)_{no\ shield}$$
(In general, $n$ shields of equal emissivity reduce the flux to $1/(n+1)$.)`,
          answer: String.raw`Two identical radiative resistances in series replace one → $q_{shield} = \tfrac12 q$; $T_3^4 = (T_1^4+T_2^4)/2$.` },
        { id: "2013-14-Q2d", label: "(d)", marks: "6",
          topic: "heat-exchangers", sub: "Fouling factor",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write a few words on fouling factor and its use in heat exchange design.`,
          solution: String.raw`**Fouling:** in service, deposits build up on heat-transfer surfaces — scale (CaCO₃ from hard water), corrosion products, sediment, biological growth, coke/polymer from hydrocarbons. They add a thermal resistance that grows with time.

**Fouling factor (dirt factor)** $R_f$ or $R_d$ (m²K/W or h·ft²·°F/Btu) is that extra unit resistance. It is added in series to the clean resistances:
$$\frac{1}{U_D} = \frac{1}{U_C} + R_d,\qquad R_d = R_{di}\frac{d_o}{d_i} + R_{do},\qquad R_d = \frac{U_C - U_D}{U_C U_D}$$

**Use in design**
- Design is based on the *dirty* coefficient $U_D < U_C$, so extra area is provided: the exchanger still meets duty at the end of the cleaning cycle.
- Values are taken from TEMA / Kern tables (e.g. treated cooling water ≈ 0.001–0.002, crude oil ≈ 0.003–0.005 h·ft²·°F/Btu).
- In rating (Kern method), the calculated $R_d$ must be ≥ the required $R_d$ for the exchanger to be acceptable.
- Affects allocation: the fouling fluid is placed in the tubes (easier cleaning); higher velocities reduce fouling.
- Too large an allowance over-sizes the unit and lowers velocity, which can itself increase fouling.`,
          answer: String.raw`$R_d$ is the deposit resistance, $1/U_D = 1/U_C + R_d$; it is used to add surface so the exchanger still meets duty when dirty, and $R_{d,calc} \ge R_{d,req}$ is the acceptance check.` },
      ] },

    { id: "2013-14-Q3", q: 3, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2013-14-Q3a", label: "(a)", marks: "20",
          topic: "condensation", sub: "Nusselt analysis of laminar film condensation, vertical plate",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Analyze mathematically the film condensation on a vertical plate (condensate flow is laminar) and show that
$$\mathrm{Nu}_x = \left[\frac{\rho(\rho-\rho_v)g h_{fg}x^3}{4\mu k(T_g-T_w)}\right]^{1/4}$$`,
          solution: String.raw`**Set-up:** vertical plate at $T_w$ in saturated vapour at $T_g$ ($T_w < T_g$). $x$ is measured downward from the top, $y$ normal to the plate; film thickness $\delta(x)$.

**Assumptions (Nusselt)**
1. Steady, laminar film flow; constant liquid properties.
2. Pure vapour at $T_g$; no shear at the liquid–vapour interface ($du/dy = 0$ at $y = \delta$).
3. Momentum changes (inertia) in the film negligible: gravity, buoyancy and viscous forces balance.
4. Heat transfer across the film by conduction only → linear temperature profile from $T_w$ to $T_g$.
5. Subcooling of the condensate neglected (latent heat only).

### 1. Velocity profile
Force balance on the element of film between $y$ and $\delta$, length $dx$, unit width:
$$\rho g(\delta-y)dx = \mu\frac{du}{dy}dx + \rho_v g(\delta-y)dx$$
$$\frac{du}{dy} = \frac{(\rho-\rho_v)g}{\mu}(\delta-y)$$
Integrating with $u = 0$ at $y = 0$:
$$u = \frac{(\rho-\rho_v)g}{\mu}\left(\delta y - \frac{y^2}{2}\right)$$

### 2. Mass flow in the film (per unit width)
$$\dot m = \int_0^\delta \rho u\,dy = \frac{\rho(\rho-\rho_v)g}{\mu}\left(\frac{\delta^3}{2} - \frac{\delta^3}{6}\right) = \frac{\rho(\rho-\rho_v)g\delta^3}{3\mu}$$
Increase over $dx$:
$$d\dot m = \frac{\rho(\rho-\rho_v)g\delta^2}{\mu}d\delta$$

### 3. Energy balance
Heat released by condensing $d\dot m$ is conducted through the film to the wall:
$$h_{fg}\,d\dot m = k\,dx\,\frac{T_g - T_w}{\delta}$$
$$h_{fg}\frac{\rho(\rho-\rho_v)g\delta^2}{\mu}d\delta = \frac{k(T_g-T_w)}{\delta}dx$$
$$\delta^3 d\delta = \frac{\mu k(T_g-T_w)}{\rho(\rho-\rho_v)g h_{fg}}dx$$

### 4. Film thickness
Integrate with $\delta = 0$ at $x = 0$:
$$\delta = \left[\frac{4\mu k(T_g-T_w)x}{\rho(\rho-\rho_v)g h_{fg}}\right]^{1/4}$$

### 5. Local coefficient and Nusselt number
Wall heat flux: $q'' = k(T_g-T_w)/\delta = h_x(T_g-T_w)$ → $h_x = k/\delta$.
$$\mathrm{Nu}_x = \frac{h_x x}{k} = \frac{x}{\delta} = \left[\frac{\rho(\rho-\rho_v)g h_{fg}x^4}{4\mu k(T_g-T_w)x}\right]^{1/4}$$
$$\boxed{\mathrm{Nu}_x = \left[\frac{\rho(\rho-\rho_v)g h_{fg}x^3}{4\mu k(T_g-T_w)}\right]^{1/4}}$$

**Average:** since $h_x \propto x^{-1/4}$, $\bar h = \frac43 h_{x=L}$:
$$\bar h = 0.943\left[\frac{\rho(\rho-\rho_v)g h_{fg}k^3}{L\mu(T_g-T_w)}\right]^{1/4}$$
(Use $h^*_{fg} = h_{fg} + 0.68c_p(T_g-T_w)$ to allow for subcooling; valid for $\mathrm{Re}_f = 4\dot m/\mu < 30$, wavy above.)`,
          answer: String.raw`$u = \frac{(\rho-\rho_v)g}{\mu}(\delta y - y^2/2)$, $\delta^4 = \frac{4\mu k\Delta T x}{\rho(\rho-\rho_v)g h_{fg}}$, $h_x = k/\delta$ → $\mathrm{Nu}_x = x/\delta$ as required; $\bar h = 0.943[\dots]^{1/4}$.` },
        { id: "2013-14-Q3b", label: "(b)", marks: "15",
          topic: "boiling", sub: "Boiling curve and regimes",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the "Heat flux" vs. "Temperature excess" curve and explain the different regimes of boiling.`,
          solution: String.raw`**Sketch:** log heat flux $q''$ (vertical, W/m²) vs log excess temperature $\Delta T_e = T_s - T_{sat}$ (horizontal, °C) for water at 1 atm. Mark: A ≈ 5°C (onset of nucleate boiling), B ≈ 10°C, C ≈ 30°C (peak, $q''_{max} \approx 10^6$ W/m²), D ≈ 120°C (minimum, Leidenfrost, $q''_{min}$), E ≈ 1000°C in film boiling at the same flux as C. Show a dashed arrow C→E (jump when heat flux is controlled) and D→ back to nucleate on cooling (hysteresis).

**Regimes (Nukiyama curve)**
1. **Natural (free) convection boiling, I ($\Delta T_e \lesssim 5$°C):** liquid near the surface is slightly superheated; no bubbles; heat removed by natural convection; vapour forms only at the free surface. $q'' \propto \Delta T_e^{5/4}$.
2. **Nucleate boiling ($5 \lesssim \Delta T_e \lesssim 30$°C):**
   - II, isolated bubbles (A–B): bubbles form at nucleation sites and detach; they collapse in subcooled liquid or rise; intense stirring.
   - III, jets and columns (B–C): bubbles coalesce into vapour columns; very high $h$; Rohsenow correlation applies. The most desirable regime for equipment.
3. **Critical heat flux, C:** maximum flux $q''_{max}$ (Zuber/Lienhard). Beyond it vapour hinders liquid supply — burnout risk for flux-controlled heaters.
4. **Transition boiling, IV (C–D, 30–120°C):** unstable, the surface is alternately covered by vapour film and liquid; $q''$ *decreases* as $\Delta T_e$ increases.
5. **Leidenfrost point, D:** minimum flux $q''_{min}$; a stable vapour film is first established.
6. **Film boiling, V–VI ($\Delta T_e > 120$°C):** surface covered by a continuous vapour blanket; heat crosses it by conduction and, at high temperatures, radiation ($h = h_{film} + \tfrac34 h_{rad}$); $q''$ rises again with $\Delta T_e$.`,
          answer: String.raw`Natural convection → nucleate (isolated bubbles, jets/columns) → $q''_{max}$ (burnout) → transition (falling $q''$) → $q''_{min}$ (Leidenfrost) → stable film boiling.` },
      ] },

    { id: "2013-14-Q4", q: 4, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2013-14-Q4a", label: "(a)", marks: "12",
          topic: "shell-tube", sub: "Multipass shell-and-tube exchanger components",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw a simple diagram of a multipass shell-and-tube heat exchanger and label its different components.`,
          solution: String.raw`**Sketch (1-2 exchanger, floating head):** a horizontal cylindrical shell with the tube bundle inside. From left to right:
- **Channel (stationary head)** with **channel cover** and a horizontal **pass-partition plate**; **tube-side inlet nozzle** on the lower half and **outlet nozzle** on the upper half.
- **Stationary tube sheet** into which the tubes are rolled/welded.
- **Tubes** running the length of the shell (first pass in the lower half, return pass in the upper half).
- **Shell** with **shell-side inlet nozzle** (top, one end) and **outlet nozzle** (bottom, other end); **impingement plate** under the inlet nozzle.
- **Segmental (transverse) baffles** alternately cut top and bottom, held by **tie rods and spacers**, forcing the shell fluid across the tubes.
- **Floating tube sheet** and **floating head cover** (allows thermal expansion), inside the **shell cover**.
- **Saddle supports**, **vent** (top) and **drain** (bottom).

Names follow the slides' parts list (TEMA numbering): e.g. 1 channel, 4 channel cover, 5 stationary head nozzle, 6 stationary tube sheet, 7 tubes, 8 shell, 12 shell nozzle, 15/16 floating tube sheet and floating head cover, 27 tie rods and spacers, 28 transverse baffles, 29 impingement baffle, 31 pass partition, 32 vent connection.

Arrows: tube fluid in → pass 1 → turns in the floating head → pass 2 → out of the same channel; shell fluid zig-zags around the baffles from inlet to outlet.

| Component | Function |
|---|---|
| Shell | contains shell-side fluid |
| Tubes | heat-transfer surface, carry tube-side fluid |
| Tube sheets | hold tubes, separate the two fluids |
| Channel / bonnet, pass partitions | distribute and route tube fluid for multiple passes |
| Baffles | support tubes, create cross-flow, raise $h_o$ |
| Floating head / U-tubes / expansion joint | allow differential thermal expansion |
| Tie rods, spacers | hold baffles in place |
| Nozzles | inlet and outlet connections |`,
          answer: String.raw`Shell, tube bundle, stationary and floating tube sheets, channel with pass partition, floating head, baffles, tie rods, nozzles, supports.` },
        { id: "2013-14-Q4b", label: "(b)", marks: "10",
          topic: "heat-exchangers", sub: "LMTD derivation (double pipe)",
          type: "derivation", syllabus: "in", repeats: ["2017-18-Q2b"],
          text: String.raw`In a double-pipe heat exchanger the temperature difference between hot fluid and cold fluid varies continuously along the length of the exchanger. Therefore, some kind of mean temperature difference is to be used for heat transfer calculations. Show mathematically that log-mean temperature difference is appropriate for this.`,
          solution: String.raw`**Assumptions (slides):**
1. The exchanger is insulated from its surroundings, so heat is exchanged only between the hot and cold fluids.
2. Axial conduction along the tubes is negligible.
3. Potential and kinetic energy changes are negligible.
4. The fluid specific heats are constant.
5. The overall heat transfer coefficient $U$ is constant.

(Also implied: steady state, and each fluid has one bulk temperature at any cross-section.)

Take **parallel flow** (counter-flow is identical with signs changed). Hot fluid $\dot m_h c_h$, temperature $T_h$; cold fluid $\dot m_c c_c$, temperature $T_c$; local $\Delta T = T_h - T_c$.

1. Element $dA$:
$$dq = -\dot m_h c_h\,dT_h = \dot m_c c_c\,dT_c = U\,dA\,(T_h - T_c)$$
2. Change of $\Delta T$:
$$d(\Delta T) = dT_h - dT_c = -dq\left(\frac{1}{\dot m_h c_h} + \frac{1}{\dot m_c c_c}\right)$$
3. Substitute $dq = U\,dA\,\Delta T$:
$$\frac{d(\Delta T)}{\Delta T} = -U\left(\frac{1}{\dot m_h c_h} + \frac{1}{\dot m_c c_c}\right)dA$$
4. Integrate from inlet ($\Delta T_1 = T_{h1} - T_{c1}$) to outlet ($\Delta T_2 = T_{h2} - T_{c2}$):
$$\ln\frac{\Delta T_2}{\Delta T_1} = -UA\left(\frac{1}{\dot m_h c_h} + \frac{1}{\dot m_c c_c}\right)$$
5. From overall balances, $\dfrac{1}{\dot m_h c_h} = \dfrac{T_{h1}-T_{h2}}{q}$ and $\dfrac{1}{\dot m_c c_c} = \dfrac{T_{c2}-T_{c1}}{q}$, so the bracket equals $\dfrac{\Delta T_1 - \Delta T_2}{q}$.
6. Hence
$$q = UA\,\frac{\Delta T_2 - \Delta T_1}{\ln(\Delta T_2/\Delta T_1)} = UA\,\Delta T_{lm}$$

So the mean temperature difference that makes $q = UA\,\Delta T_m$ exact is the **logarithmic mean** of the end differences, because $\Delta T$ varies exponentially (not linearly) with area. For counter-flow, $\Delta T_1 = T_{h1} - T_{c2}$, $\Delta T_2 = T_{h2} - T_{c1}$. The arithmetic mean is always ≥ LMTD and is acceptable only when $\Delta T_1/\Delta T_2$ is close to 1.`,
          answer: String.raw`$d(\Delta T)/\Delta T \propto -dA$ → exponential variation → $q = UA(\Delta T_1-\Delta T_2)/\ln(\Delta T_1/\Delta T_2)$.` },
        { id: "2013-14-Q4c", label: "(c)", marks: "13",
          topic: "heat-exchangers", sub: "Overall U of a water–water double-pipe exchanger",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Hot water at 90°C flows through the inside of a 2.5-cm-ID steel tube with 0.8-mm wall thickness at a velocity of 4 m/s. This tube forms the inside of a double-pipe heat exchanger. The outer pipe has a 3.75-cm ID and water at 20°C flows in the annular space at a velocity of 6 m/s. Calculate the overall heat transfer coefficient for this arrangement. The tube length is 6.0 m.`,
          solution: String.raw`**Given:** $d_i = 0.025$ m, wall 0.8 mm → $d_o = D_1 = 0.0266$ m; $V_i = 4$ m/s at 90°C; annulus $D_2 = 0.0375$ m, $V_a = 6$ m/s at 20°C; $L = 6$ m.
**Find:** $U_o$ (based on the outside area of the inner tube, the reference surface the slides use for double pipes).
**Assumptions:** properties at the given temperatures (taken as bulk); clean surfaces; steel $k \approx 54$ W/m·K (mild steel); Dittus–Boelter for both streams; $(\mu/\mu_w)$ effects neglected.

Water properties (Çengel Table A-9):
| | 90°C (tube) | 20°C (annulus) |
|---|---|---|
| ρ (kg/m³) | 965.3 | 998.0 |
| μ (kg/m·s) | 3.15×10⁻⁴ | 1.002×10⁻³ |
| k (W/m·K) | 0.675 | 0.598 |
| Pr | 1.96 | 7.01 |

### 1. Inside (hot water, being cooled, n = 0.3)
$$\mathrm{Re} = \frac{\rho V d_i}{\mu} = \frac{965.3(4)(0.025)}{3.15\times10^{-4}} = 3.06\times10^5\ (\text{turbulent})$$
$L/d_i = 240 > 60$ → fully developed.
$$\mathrm{Nu} = 0.023\mathrm{Re}^{0.8}\mathrm{Pr}^{0.3} = 0.023(3.06\times10^5)^{0.8}(1.96)^{0.3} = 689$$
$$h_i = \frac{689(0.675)}{0.025} = 1.86\times10^4\ \mathrm{W/m^2K}$$

### 2. Annulus (cold water, being heated, n = 0.4)
For **heat transfer** the slides (Kern Eq. 6.3) use the heated perimeter $\pi D_1$ only:
$$D_e = \frac{D_2^2 - D_1^2}{D_1} = \frac{0.0375^2 - 0.0266^2}{0.0266} = 0.0263\ \mathrm{m}$$
($D'_e = D_2 - D_1 = 0.0109$ m would be used only for the annulus pressure drop.)
$$\mathrm{Re}_a = \frac{\rho V D_e}{\mu} = \frac{998(6)(0.0263)}{1.002\times10^{-3}} = 1.57\times10^5,\quad L/D_e = 228$$
$$\mathrm{Nu} = 0.023(1.57\times10^5)^{0.8}(7.01)^{0.4} = 719$$
$$h_o = \frac{719(0.598)}{0.0263} = 1.64\times10^4\ \mathrm{W/m^2K}$$

### 3. Overall coefficient (outer area)
$$\frac{1}{U_o} = \frac{d_o}{d_i h_i} + \frac{d_o\ln(d_o/d_i)}{2k} + \frac{1}{h_o}$$
$$= \frac{0.0266}{0.025(18{,}614)} + \frac{0.0266\ln(1.064)}{2(54)} + \frac{1}{16{,}367}$$
$$= 5.72\times10^{-5} + 1.53\times10^{-5} + 6.11\times10^{-5} = 1.335\times10^{-4}\ \mathrm{m^2K/W}$$
$$U_o \approx 7.5\times10^3\ \mathrm{W/m^2K}\qquad (U_i = U_o d_o/d_i \approx 8.0\times10^3)$$

(With $k = 43$ W/m·K for 1% C steel, $U_o = 7.3\times10^3$ W/m²K. Neglecting the wall, the slides' form $U = h_{io}h_o/(h_{io}+h_o)$ with $h_{io} = h_i d_i/d_o = 1.75\times10^4$ gives $8.5\times10^3$. Holman's hydraulic diameter $D_2 - D_1$ in place of $D_e$ would give $h_o = 1.95\times10^4$ and $U_o = 8.1\times10^3$.)

**Why it matters:** with high water velocities on both sides, the wall resistance is no longer negligible (about 11% of the total).`,
          answer: String.raw`$h_i \approx 1.86\times10^4$ W/m²K; annulus with $D_e = (D_2^2-D_1^2)/D_1 = 0.0263$ m gives $h_o \approx 1.64\times10^4$ W/m²K; $U_o \approx 7.5\times10^3$ W/m²K (outer area).` },
      ] },

    { id: "2013-14-Q5", q: 5, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2013-14-Q5a", label: "(a)", marks: "15",
          topic: "conduction", sub: "Conduction through a hollow sphere",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive an expression for the heat flow rate through a hollow sphere with inside radius $r_i$, outside radius $r_o$ and constant thermal conductivity $k$. The inside and outside surfaces of the hollow sphere are held at constant temperature $T_i$ and $T_o$, respectively. State the assumptions, if any.`,
          solution: String.raw`**Assumptions:** steady state; 1-D radial conduction ($T = T(r)$ only, uniform surface temperatures); constant $k$; no heat generation; homogeneous isotropic material.

**Method 1 – Fourier's law directly.** In steady state with no generation, the same $q$ crosses every spherical shell of area $4\pi r^2$:
$$q = -k(4\pi r^2)\frac{dT}{dr}$$
Separate and integrate from $r_i$ ($T_i$) to $r_o$ ($T_o$):
$$q\int_{r_i}^{r_o}\frac{dr}{r^2} = -4\pi k\int_{T_i}^{T_o}dT$$
$$q\left(\frac{1}{r_i} - \frac{1}{r_o}\right) = 4\pi k(T_i - T_o)$$
$$\boxed{q = \frac{4\pi k(T_i - T_o)}{\dfrac{1}{r_i} - \dfrac{1}{r_o}} = \frac{4\pi k\,r_i r_o(T_i-T_o)}{r_o - r_i}}$$

**Method 2 – heat equation (check).** $\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dT}{dr}\right) = 0$ → $T = -C_1/r + C_2$. With the boundary conditions,
$$\frac{T - T_i}{T_o - T_i} = \frac{1/r_i - 1/r}{1/r_i - 1/r_o}$$
and $q = -4\pi r^2 k\,dT/dr$ gives the same result.

**Thermal resistance:**
$$R_{sph} = \frac{r_o - r_i}{4\pi k r_i r_o}$$
Note that $q$ is constant with $r$ but the flux $q/4\pi r^2$ falls as $1/r^2$, and $T(r)$ is hyperbolic, not linear.`,
          answer: String.raw`$q = 4\pi k r_i r_o(T_i-T_o)/(r_o-r_i)$; $R = (r_o-r_i)/(4\pi k r_i r_o)$.` },
        { id: "2013-14-Q5b", label: "(b)", marks: "10+10",
          topic: "conduction", sub: "Spherical reactor: heat loss and effect of thin insulation",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A spherical vessel used as a reactor for producing pharmaceuticals has a 10 mm thick stainless steel wall ($k = 17$ W/m·K) and an inner diameter of 1 m. The exterior surface of the vessel is exposed to ambient air ($T_\infty = 25$°C) for which a convection coefficient of 6 W/m²·K may be assumed.

(i) During steady-state operation, an inner surface temperature of 50°C is maintained by energy generated within the reactor. What is the heat loss from the vessel? **[10]**

(ii) If a 2-mm-thick layer of fiberglass insulation ($k = 0.040$ W/m·K) is applied to the exterior of the vessel and the rate of thermal energy generation is unchanged, what is the inner surface temperature of the vessel? **[10]**`,
          solution: String.raw`**Given:** $r_1 = 0.50$ m, $r_2 = 0.51$ m, $k_s = 17$ W/m·K, $h = 6$ W/m²K, $T_\infty = 25$°C, $T_{s,i} = 50$°C; insulation $r_3 = 0.512$ m, $k_{ins} = 0.040$ W/m·K.
**Assumptions:** steady, radial conduction; constant $k$; radiation neglected; negligible contact resistance.

### (i) Heat loss
$$R_{wall} = \frac{1}{4\pi k_s}\left(\frac{1}{r_1} - \frac{1}{r_2}\right) = \frac{1}{4\pi(17)}\left(\frac{1}{0.50} - \frac{1}{0.51}\right) = 1.84\times10^{-4}\ \mathrm{K/W}$$
$$R_{conv} = \frac{1}{h\,4\pi r_2^2} = \frac{1}{6(4\pi)(0.51)^2} = 0.0510\ \mathrm{K/W}$$
$$q = \frac{T_{s,i} - T_\infty}{R_{wall} + R_{conv}} = \frac{50-25}{0.05118} = 489\ \mathrm{W}$$

### (ii) With 2 mm of fibreglass (same $q = 489$ W)
$$R_{ins} = \frac{1}{4\pi(0.040)}\left(\frac{1}{0.51} - \frac{1}{0.512}\right) = 0.01524\ \mathrm{K/W}$$
$$R'_{conv} = \frac{1}{6(4\pi)(0.512)^2} = 0.05059\ \mathrm{K/W}$$
$$R_{tot} = 1.84\times10^{-4} + 0.01524 + 0.05059 = 0.06602\ \mathrm{K/W}$$
$$T_{s,i} = T_\infty + qR_{tot} = 25 + 488.5(0.06602) = 57.2\,°\mathrm{C}$$

**Why it matters:** even 2 mm of insulation raises the inner wall temperature by about 7°C for the same generation; the steel wall resistance is negligible (< 0.4%).`,
          answer: String.raw`(i) $q \approx 489$ W; (ii) inner surface ≈ 57.2°C.` },
      ] },

    { id: "2013-14-Q6", q: 6, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2013-14-Q6a", label: "(a)", marks: "7",
          topic: "boundary-layer", sub: "Hydrodynamic vs thermal boundary layers",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`With the help of schematics, explain the differences between hydrodynamic and thermal boundary layers.`,
          solution: String.raw`**Schematic 1 (hydrodynamic):** flat plate with uniform approaching velocity $u_\infty$; velocity profiles at several $x$ rising from $u = 0$ at the wall to $u_\infty$; the edge line $\delta(x)$ (where $u = 0.99u_\infty$) grows from the leading edge (laminar, then transition and turbulent with a viscous sublayer).

**Schematic 2 (thermal):** same plate at $T_w$, fluid at $T_\infty$; temperature profiles from $T_w$ at the wall to $T_\infty$; edge line $\delta_t(x)$ (where $(T-T_w)/(T_\infty-T_w) = 0.99$).

| | Hydrodynamic (velocity) BL | Thermal BL |
|---|---|---|
| Cause | no-slip + viscosity | wall–fluid temperature difference + conduction |
| Region where | velocity varies from 0 to $u_\infty$ | temperature varies from $T_w$ to $T_\infty$ |
| Thickness defined by | $u = 0.99u_\infty$ | $\Delta T = 0.99\Delta T_\infty$ |
| Governed by | momentum diffusivity ν | thermal diffusivity α |
| Wall quantity | shear $\tau_w = \mu(\partial u/\partial y)_0$ | heat flux $q'' = -k(\partial T/\partial y)_0$ |
| Exists | whenever fluid flows over a surface | only when $T_w \ne T_\infty$ |
| Laminar thickness | $\delta = 4.64x/\sqrt{\mathrm{Re}_x}$ | $\delta_t = \delta\,\mathrm{Pr}^{-1/3}/1.026$ |

Relative size is set by Pr: $\delta_t \approx \delta$ for gases, $\delta_t < \delta$ for water and oils, $\delta_t \gg \delta$ for liquid metals.`,
          answer: String.raw`Velocity BL: $u$ from 0 to $u_\infty$, set by ν; thermal BL: $T$ from $T_w$ to $T_\infty$, set by α; $\delta_t/\delta \approx \mathrm{Pr}^{-1/3}$.` },
        { id: "2013-14-Q6b", label: "(b)", marks: "28",
          topic: "boundary-layer", sub: "Integral derivation of δ = 4.64√(νx/u∞)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Starting from the given simplified continuity and momentum equations, derive the expression for the laminar boundary layer thickness for a fluid flowing past a flat plate:
$$\delta = 4.64\sqrt{\frac{\nu x}{u_\infty}}$$
where $u_\infty$ is the fluid velocity outside the boundary layer. Other symbols have their usual meanings. Also state the assumptions you make to derive the equation.

Continuity: $\dfrac{\partial u}{\partial x} + \dfrac{\partial v}{\partial y} = 0$

Momentum: $\rho\left(u\dfrac{\partial u}{\partial x} + v\dfrac{\partial u}{\partial y}\right) = \mu\dfrac{\partial^2 u}{\partial y^2} - \dfrac{\partial p}{\partial x}$

*(The paper prints $\partial v/\partial x$ and $v\,\partial u/\partial x$; these are misprints for $\partial v/\partial y$ and $v\,\partial u/\partial y$.)*`,
          solution: String.raw`**Assumptions**
1. Steady, 2-D, incompressible, laminar flow; constant properties.
2. Boundary-layer approximations ($\delta \ll x$, $\partial^2u/\partial x^2 \ll \partial^2u/\partial y^2$).
3. Zero pressure gradient: outside the layer $u = u_\infty$ = const, so $dp/dx = 0$ (flat plate).
4. No body forces; no-slip, impermeable wall ($u = v = 0$ at $y = 0$).
5. Velocity profile is a cubic polynomial in $y/\delta$ of the same shape at all $x$.

### 1. Momentum integral equation
With $dp/dx = 0$, divide the momentum equation by ρ and integrate from $y = 0$ to a height $H > \delta$ (where $u = u_\infty$, $\partial u/\partial y = 0$):
$$\int_0^H u\frac{\partial u}{\partial x}dy + \int_0^H v\frac{\partial u}{\partial y}dy = \nu\left[\frac{\partial u}{\partial y}\right]_0^H = -\nu\left(\frac{\partial u}{\partial y}\right)_{y=0}$$
From continuity, $v = -\int_0^y \frac{\partial u}{\partial x}dy$, so $v_H = -\int_0^H\frac{\partial u}{\partial x}dy$. Integrate the second term by parts:
$$\int_0^H v\frac{\partial u}{\partial y}dy = [uv]_0^H - \int_0^H u\frac{\partial v}{\partial y}dy = -u_\infty\int_0^H\frac{\partial u}{\partial x}dy + \int_0^H u\frac{\partial u}{\partial x}dy$$
Adding:
$$\int_0^H\left(2u\frac{\partial u}{\partial x} - u_\infty\frac{\partial u}{\partial x}\right)dy = \frac{d}{dx}\int_0^H(u^2 - u_\infty u)\,dy = -\nu\left(\frac{\partial u}{\partial y}\right)_0$$
Since the integrand vanishes for $y > \delta$:
$$\boxed{\frac{d}{dx}\int_0^\delta (u_\infty - u)\,u\,dy = \nu\left(\frac{\partial u}{\partial y}\right)_{y=0} = \frac{\tau_w}{\rho}}$$
(The same result follows from a momentum balance on a control volume of height $H$: the mass entering through the top carries momentum $u_\infty$.)

### 2. Velocity profile
Assume $u = a + by + cy^2 + dy^3$ with the conditions
- $y = 0$: $u = 0$
- $y = 0$: $\partial^2u/\partial y^2 = 0$ (momentum equation at the wall with $u = v = 0$, $dp/dx = 0$)
- $y = \delta$: $u = u_\infty$
- $y = \delta$: $\partial u/\partial y = 0$

These give $a = 0$, $c = 0$, $b = \frac{3u_\infty}{2\delta}$, $d = -\frac{u_\infty}{2\delta^3}$:
$$\frac{u}{u_\infty} = \frac32\frac{y}{\delta} - \frac12\left(\frac{y}{\delta}\right)^3$$

### 3. Evaluate both sides
Let $\eta = y/\delta$, $f = \tfrac32\eta - \tfrac12\eta^3$:
$$\int_0^\delta(u_\infty-u)u\,dy = u_\infty^2\delta\int_0^1 f(1-f)\,d\eta = u_\infty^2\delta\left(\frac58 - \frac{17}{35}\right) = \frac{39}{280}u_\infty^2\delta$$
(using $\int_0^1 f\,d\eta = 5/8$ and $\int_0^1 f^2 d\eta = 17/35$).
Wall gradient:
$$\left(\frac{\partial u}{\partial y}\right)_0 = \frac{3u_\infty}{2\delta}$$

### 4. Solve for δ
$$\frac{39}{280}u_\infty^2\frac{d\delta}{dx} = \frac{3\nu u_\infty}{2\delta}\ \Rightarrow\ \delta\,d\delta = \frac{140}{13}\frac{\nu}{u_\infty}dx$$
Integrate with $\delta = 0$ at $x = 0$:
$$\frac{\delta^2}{2} = \frac{140}{13}\frac{\nu x}{u_\infty}\ \Rightarrow\ \delta = \sqrt{\frac{280}{13}}\sqrt{\frac{\nu x}{u_\infty}}$$
$$\boxed{\delta = 4.64\sqrt{\frac{\nu x}{u_\infty}}\quad\text{or}\quad\frac{\delta}{x} = \frac{4.64}{\mathrm{Re}_x^{1/2}}}$$

**Check:** the exact Blasius solution gives $\delta/x = 5.0/\mathrm{Re}_x^{1/2}$ (99% thickness); the integral method is within about 7%. Valid for $\mathrm{Re}_x < 5\times10^5$.`,
          answer: String.raw`Momentum integral $\frac{d}{dx}\int_0^\delta(u_\infty-u)u\,dy = \nu(\partial u/\partial y)_0$ + cubic profile → $\frac{39}{280}u_\infty^2 d\delta/dx = \frac{3\nu u_\infty}{2\delta}$ → $\delta = \sqrt{280/13}\sqrt{\nu x/u_\infty} = 4.64\sqrt{\nu x/u_\infty}$.` },
      ] },

    { id: "2013-14-Q7", q: 7, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2013-14-Q7a", label: "(a)", marks: "20",
          topic: "boundary-layer", sub: "Reynolds analogy for turbulent tube flow, St = f/8",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`It is suggested that eddy diffusivity plays a significant role during turbulent fluid flow inside a tube. For a scenario where heat and momentum transport rates are same and Pr = 1.0, derive the Reynolds analogy:
$$\mathrm{St} = \frac{f}{8}$$
HINT: Assume no slip condition at the wall and maximum fluid velocity at the tube center is $u_m$. Also given, $q_w = hA_w(T_w - T_b)$ and $\tau_w = \frac{f}{8}\rho u_m^2$.`,
          solution: String.raw`**Assumptions**
1. Steady, fully developed turbulent flow in a tube.
2. Momentum and heat are carried by both molecular and eddy transport, with $\nu = \alpha$ (Pr = 1) and $\varepsilon_M = \varepsilon_H$ (turbulent Prandtl number 1).
3. The ratio of heat flux to shear stress is the same at every radius as at the wall: $\dfrac{q}{A\tau} = \dfrac{q_w}{A_w\tau_w}$.
4. No slip at the wall ($u = 0$, $T = T_w$); at the centre $u = u_m$ and $T \approx T_b$.
5. Constant properties.

### 1. Transport equations with eddy diffusivity
Shear stress:
$$\tau = \rho(\nu + \varepsilon_M)\frac{du}{dy}$$
Heat flux (y measured from the wall):
$$\frac{q}{A} = -\rho c_p(\alpha + \varepsilon_H)\frac{dT}{dy}$$

### 2. Divide
With $\nu = \alpha$ and $\varepsilon_M = \varepsilon_H$, the diffusivities cancel:
$$\frac{q/A}{\tau} = -c_p\frac{dT}{du}\ \Rightarrow\ \frac{q}{A\tau c_p}\,du = -dT$$

### 3. Use assumption 3 and integrate
Replace $q/(A\tau)$ by its wall value and integrate from the wall ($u = 0$, $T = T_w$) to the centre ($u = u_m$, $T = T_b$):
$$\frac{q_w}{A_w\tau_w c_p}\int_0^{u_m}du = -\int_{T_w}^{T_b}dT$$
$$\frac{q_w\,u_m}{A_w\tau_w c_p} = T_w - T_b$$

### 4. Substitute the definitions
$q_w = hA_w(T_w-T_b)$ and $\tau_w = \frac{f}{8}\rho u_m^2$:
$$\frac{hA_w(T_w-T_b)\,u_m}{A_w\,\frac{f}{8}\rho u_m^2\,c_p} = T_w - T_b$$
$$\frac{h}{\rho c_p u_m} = \frac{f}{8}$$
$$\boxed{\mathrm{St} = \frac{\mathrm{Nu}}{\mathrm{Re\,Pr}} = \frac{h}{\rho c_p u_m} = \frac{f}{8}}$$
with $f$ the Darcy friction factor ($\Delta p = f\frac{L}{d}\frac{\rho u_m^2}{2}$).

**Why it matters:** heat transfer can be predicted from friction data. For Pr ≠ 1 the Colburn form $\mathrm{St\,Pr}^{2/3} = f/8$ is used; with the Blasius $f = 0.316\mathrm{Re}^{-1/4}$ it gives a Dittus–Boelter-like result.`,
          answer: String.raw`With $\nu = \alpha$, $\varepsilon_M = \varepsilon_H$: $q_w u_m/(A_w\tau_w c_p) = T_w - T_b$ → $h/(\rho c_p u_m) = f/8$, i.e. $\mathrm{St} = f/8$.` },
        { id: "2013-14-Q7b", label: "(b)", marks: "15",
          topic: "forced-convection", sub: "Required tube length, turbulent water heating",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Water is heated from 15°C to 60°C by passing it through a 1.91 cm-diameter thin-walled copper tube at 121°C. For a water flow rate of 0.181 kg/s, determine the tube length required to achieve the desired heat transfer. Assume fully developed turbulent flow inside the tube and use LMTD for convective heat transfer calculation. At bulk mean temperature water properties:

| Property | Value |
|---|---|
| ρ | 993.2 kg/m³ |
| k | 0.628 W/m·K |
| ν | 0.686×10⁻⁶ m²/s |
| $c_p$ | 4183 J/kg·K |`,
          solution: String.raw`**Given:** $T_{b1} = 15$°C, $T_{b2} = 60$°C, $T_w = 121$°C, $D = 0.0191$ m, $\dot m = 0.181$ kg/s, properties as tabulated.
**Find:** $L$.
**Assumptions:** fully developed turbulent flow; thin wall at 121°C; Dittus–Boelter (heating, $n = 0.4$).

1. Derived properties:
$$\mu = \rho\nu = 993.2(0.686\times10^{-6}) = 6.81\times10^{-4}\ \mathrm{kg/m\,s},\qquad \mathrm{Pr} = \frac{\mu c_p}{k} = \frac{6.81\times10^{-4}(4183)}{0.628} = 4.54$$

2. Reynolds number:
$$\mathrm{Re} = \frac{4\dot m}{\pi D\mu} = \frac{4(0.181)}{\pi(0.0191)(6.81\times10^{-4})} = 1.77\times10^4\ (\text{turbulent})$$

3. Dittus–Boelter:
$$\mathrm{Nu} = 0.023(17{,}709)^{0.8}(4.54)^{0.4} = 105.4,\qquad h = \frac{105.4(0.628)}{0.0191} = 3467\ \mathrm{W/m^2K}$$

4. Heat duty:
$$q = \dot m c_p\Delta T_b = 0.181(4183)(60-15) = 3.41\times10^4\ \mathrm{W}$$

5. LMTD (constant wall temperature):
$$\Delta T_1 = 121-15 = 106\,°\mathrm{C},\quad \Delta T_2 = 121-60 = 61\,°\mathrm{C}$$
$$\Delta T_{lm} = \frac{106-61}{\ln(106/61)} = 81.4\,°\mathrm{C}$$

6. Length:
$$L = \frac{q}{h\pi D\,\Delta T_{lm}} = \frac{34{,}071}{3467\pi(0.0191)(81.4)} = 2.01\ \mathrm{m}$$
Check: $L/D = 105 > 10$, so the fully developed assumption is reasonable.

**Exam tip:** the wall-to-bulk ΔT here (60–100°C) is large for Dittus–Boelter; Sieder–Tate would give a somewhat higher $h$ (shorter tube).`,
          answer: String.raw`Re = 1.77×10⁴, Pr = 4.54, $h \approx 3470$ W/m²K, $q = 34.1$ kW, LMTD = 81.4°C → $L \approx 2.0$ m.` },
      ] },

    { id: "2013-14-Q8", q: 8, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2013-14-Q8a", label: "(a)", marks: "15",
          topic: "forced-convection", sub: "Laminar entrance region, sugar slurry outlet temperature",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`In a food industry, sugar slurry flows through a 25-mm-diameter tube at a rate of 0.5 kg/s. The slurry enters the tube at a temperature of 25°C, while the tube surface temperature is maintained at 100°C. Determine the slurry outlet temperature for a 5-m long tube. Assume that the entrance region prevails in the entire tube length.

Sugar slurry properties at average temperature:

| Property | Value |
|---|---|
| $c_p$ | 2035 J/kg·K |
| μ | 0.0836 N·s/m² |
| k | 0.141 W/m·K |`,
          solution: String.raw`**Given:** $D = 0.025$ m, $L = 5$ m, $\dot m = 0.5$ kg/s, $T_i = 25$°C, $T_s = 100$°C.
**Find:** $T_o$.
**Assumptions:** steady; constant wall temperature; laminar entrance region over the whole length (given); $\mu_w$ not given, so $(\mu/\mu_w)^{0.14} \approx 1$.

1. Reynolds and Prandtl numbers:
$$\mathrm{Re} = \frac{4\dot m}{\pi D\mu} = \frac{4(0.5)}{\pi(0.025)(0.0836)} = 305\ (\text{laminar})$$
$$\mathrm{Pr} = \frac{c_p\mu}{k} = \frac{2035(0.0836)}{0.141} = 1207$$

2. Graetz parameter:
$$\mathrm{Re\,Pr}\frac{D}{L} = 305(1207)\frac{0.025}{5} = 1838\ (> 10)$$

3. Sieder–Tate laminar (entrance region, constant $T_s$):
$$\overline{\mathrm{Nu}} = 1.86\left(\mathrm{Re\,Pr}\frac{D}{L}\right)^{1/3}\left(\frac{\mu}{\mu_w}\right)^{0.14} = 1.86(1838)^{1/3}(1) = 22.8$$
$$\bar h = \frac{22.8(0.141)}{0.025} = 128.5\ \mathrm{W/m^2K}$$
Validity: $0.48 < \mathrm{Pr} < 16{,}700$ ✓, $\mathrm{Nu} > 2$ ✓.

4. Outlet temperature:
$$\frac{T_s - T_o}{T_s - T_i} = \exp\left(-\frac{\bar h\pi DL}{\dot m c_p}\right) = \exp\left(-\frac{128.5\pi(0.025)(5)}{0.5(2035)}\right) = e^{-0.0496} = 0.9516$$
$$T_o = 100 - 75(0.9516) = 28.6\,°\mathrm{C}$$
(The arithmetic-mean ΔT form that Sieder–Tate is strictly based on gives the same 28.6°C because the temperature rise is small; Hausen gives Nu = 21.2 and $T_o$ = 28.4°C.)

5. Heat rate: $q = 0.5(2035)(3.6) \approx 3.7$ kW.

**Why it matters:** the very viscous slurry is laminar with a huge Pr, so only a thin thermal layer forms and the bulk heats by just ~3.6°C in 5 m.`,
          answer: String.raw`Re ≈ 305, Pr ≈ 1207, Gz ≈ 1840, Nu ≈ 22.8, $\bar h \approx 128$ W/m²K → $T_o \approx 28.6$°C.` },
        { id: "2013-14-Q8b", label: "(b)", marks: "20",
          topic: "forced-convection", sub: "Concentric-pipe oil cooler: water (turbulent) and oil annulus (laminar)",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`A concentric pipe heat exchanger is used to cool lubricating oil for a large diesel engine. The inner pipe is of radius 3 cm and has water flowing through it at a rate of 0.3 kg/s. The hot oil is flowing at a rate of 0.15 kg/s through the annular region. The outer pipe radius is 5 cm. Assuming fully developed flow in both pipes, calculate the heat transfer coefficients for water and oil sides. For the calculation purpose, consider that the average temperatures of oil and water were 80°C and 35°C, respectively. *(Marks not printed; 20 by difference.)*

| Property | Oil at 80°C | Water at 35°C |
|---|---|---|
| $c_p$ | 2131 J/kg·K | 4178 J/kg·K |
| μ | 3.25×10⁻² N·s/m² | 7.25×10⁻⁴ N·s/m² |
| k | 0.138 W/m·K | 0.625 W/m·K |`,
          solution: String.raw`**Given:** inner pipe $D_i = 0.06$ m (thin wall), outer pipe $D_o = 0.10$ m; $\dot m_w = 0.3$ kg/s, $\dot m_{oil} = 0.15$ kg/s; properties as tabulated.
**Find:** $h_{water}$, $h_{oil}$.
**Assumptions:** fully developed flow; inner wall thickness neglected; outer pipe insulated; properties at the stated mean temperatures.

### Water side (inside the inner pipe)
$$\mathrm{Re} = \frac{4\dot m}{\pi D_i\mu} = \frac{4(0.3)}{\pi(0.06)(7.25\times10^{-4})} = 8.78\times10^3$$
$$\mathrm{Pr} = \frac{4178(7.25\times10^{-4})}{0.625} = 4.85$$
Re is slightly below 10⁴ (lower edge of the turbulent range); Dittus–Boelter (water heated, $n = 0.4$) is used as instructed ("fully developed"):
$$\mathrm{Nu} = 0.023(8781)^{0.8}(4.85)^{0.4} = 61.8$$
$$h_w = \frac{61.8(0.625)}{0.06} = 643\ \mathrm{W/m^2K}$$

### Oil side (annulus)
Flow area and hydraulic diameter:
$$A_c = \frac{\pi}{4}(D_o^2 - D_i^2) = \pi(0.05^2 - 0.03^2) = 5.03\times10^{-3}\ \mathrm{m^2},\qquad D_h = D_o - D_i = 0.04\ \mathrm{m}$$
$$\mathrm{Re} = \frac{\dot m D_h}{A_c\mu} = \frac{0.15(0.04)}{5.03\times10^{-3}(0.0325)} = 36.7\ (\text{laminar})$$
($\mathrm{Pr} = 2131(0.0325)/0.138 = 502$.)

For fully developed laminar flow in an annulus with the inner surface heated (outer insulated), Nu depends only on $D_i/D_o = 0.6$. From the attached laminar-duct table (Incropera Table 8.2): $D_i/D_o = 0.50 \to \mathrm{Nu}_i = 5.74$; $1.00 \to 4.86$; linear interpolation at 0.6:
$$\mathrm{Nu}_i \approx 5.74 + \frac{0.1}{0.5}(4.86 - 5.74) = 5.56$$
$$h_{oil} = \frac{\mathrm{Nu}_i\,k}{D_h} = \frac{5.56(0.138)}{0.04} = 19.2\ \mathrm{W/m^2K}$$

**Why it matters:** the oil side ($h \approx 19$) controls overall $U$ ($U \approx 18.6$ W/m²K for a thin clean wall); enhancing it (higher oil velocity, fins) is the effective design change.`,
          answer: String.raw`Water: Re ≈ 8.8×10³, Nu ≈ 62, $h_w \approx 643$ W/m²K; oil: Re ≈ 37 (laminar), $\mathrm{Nu}_i \approx 5.56$, $h_{oil} \approx 19$ W/m²K.` },
      ] },
  ]
});
