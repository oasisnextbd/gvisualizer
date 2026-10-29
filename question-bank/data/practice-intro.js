QB.paper({ year: "Practice", set: "Introduction & modes", date: "", marks: 0, practice: true,
  rules: String.raw`Practice set on the three modes of heat transfer: Fourier's law, Newton's law of cooling, the Stefan–Boltzmann law, combined convection–radiation coefficients and thermal diffusivity. S = slide examples and variations, F = exam-style problems.`,
  questions: [
    { id: "practice-intro-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-intro-P1", label: "", marks: "", topic: "intro",
          sub: "Conduction through a concrete roof: heat loss and its cost", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 01 Intro, slides 32–34 (concrete roof of an electrically heated home)`,
          text: String.raw`The roof of an electrically heated house is 6 m long, 8 m wide and 0.25 m thick. It is a flat layer of concrete with $k = 0.8$ W/m·°C. On one night the inner and outer surface temperatures are measured as 15°C and 4°C, and stay at these values for 10 hours. Determine

(a) the rate of heat loss through the roof that night, and

(b) the cost of this heat loss to the home owner if electricity costs 0.08 USD/kWh.`,
          solution: String.raw`**Given:** $A = 6\times8 = 48\ \mathrm{m^2}$, $L = 0.25$ m, $k = 0.8$ W/m·°C, $T_1 = 15$°C, $T_2 = 4$°C, $\Delta t = 10$ h, tariff 0.08 USD/kWh.

**Find:** $\dot Q$ and the cost of $Q = \dot Q\,\Delta t$.

**Assumptions:** steady operation over the 10 h (surface temperatures constant); 1-D conduction through the thickness (roof is large compared with 0.25 m); constant $k$.

### 1. Rate of heat loss (Fourier's law for a plane layer)
$$\dot Q = kA\,\frac{T_1-T_2}{L} = (0.8)(48)\,\frac{15-4}{0.25} = 1690\ \mathrm{W} = 1.69\ \mathrm{kW}$$

### 2. Energy lost in 10 h and its cost
$$Q = \dot Q\,\Delta t = (1.69\ \mathrm{kW})(10\ \mathrm h) = 16.9\ \mathrm{kWh}$$

$$\text{Cost} = (16.9\ \mathrm{kWh})(0.08\ \mathrm{USD/kWh}) = 1.35\ \mathrm{USD}$$

**Check:** heat flux $\dot Q/A = 35.2\ \mathrm{W/m^2}$, a reasonable night-time loss for an uninsulated roof.

**Why it matters:** thermodynamics alone gives only the total $Q$; Fourier's law gives the *rate*, which needs $k$, $A$, $L$ and the temperature difference.`,
          answer: String.raw`$\dot Q \approx 1.69$ kW; $Q = 16.9$ kWh in 10 h, costing about 1.35 USD.` }
      ] },
    { id: "practice-intro-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-intro-P2", label: "", marks: "", topic: "intro",
          sub: "Refrigerator wall: convection then conduction", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 01 Intro, slides 41–42 (refrigerator side wall)`,
          text: String.raw`A refrigerator stands in a room where the air is at 21°C. The outside surface of the refrigerator is at 16°C. The sides are 30 mm thick with an equivalent thermal conductivity of 0.10 W/m·K, and the heat-transfer coefficient on the outside is 10 W/m²·K. Assuming 1-D conduction through the sides, find (i) the net heat flux into the refrigerator and (ii) the inside surface temperature of the side wall.`,
          solution: String.raw`**Given:** $T_\infty = 21$°C, $T_{s,o} = 16$°C, $L = 0.03$ m, $k = 0.10$ W/m·K, $h = 10$ W/m²·K.

**Find:** $q = Q/A$ and $T_{s,i}$.

**Assumptions:** steady state; 1-D conduction through the side; constant $k$; radiation from the room included in $h$ (or neglected).

### 1. Heat flux by convection from room air to the outer surface (Newton's law)
$$q = h\,(T_\infty - T_{s,o}) = 10\,(21-16) = 50\ \mathrm{W/m^2}$$

### 2. The same flux is conducted through the wall (no storage at steady state)
$$q = \frac{k\,(T_{s,o}-T_{s,i})}{L}\ \Rightarrow\ T_{s,i} = T_{s,o} - \frac{qL}{k} = 16 - \frac{(50)(0.03)}{0.10} = 1\ ^\circ\mathrm C$$

**Check:** resistances per unit area are $1/h = 0.1$ and $L/k = 0.3$ m²·K/W; the 5°C drop in air and 15°C drop in the wall are in the same 1 : 3 ratio ✓.

**Exam tip:** heat flows inward (from the warm room into the cold box), so draw the arrow from the room to the inside; the surface "interface" carries the same flux on both sides.`,
          answer: String.raw`(i) $q = 50\ \mathrm{W/m^2}$ (into the refrigerator); (ii) $T_{s,i} = 1$°C.` }
      ] },
    { id: "practice-intro-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw`Two large parallel plates are held at $T_1 = 300$ K and $T_2 = 200$ K and are $L = 1$ cm apart. Both surfaces are black ($\varepsilon = 1$). At the mean temperature of 250 K, $k = 0.0219$ W/m·°C for air and $k = 0.026$ W/m·°C for urethane insulation. Find the rate of heat transfer per unit surface area when the gap is:`,
      parts: [
        { id: "practice-intro-P3a", label: "(a)", marks: "", topic: "intro",
          sub: "Parallel plates: air-filled gap (conduction + radiation)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 01 Intro, slides 48–50 (parallel plates, air gap)`,
          text: String.raw`filled with atmospheric air.`,
          solution: String.raw`**Given:** $T_1 = 300$ K, $T_2 = 200$ K, $L = 0.01$ m, $\varepsilon = 1$, $k_{air} = 0.0219$ W/m·°C; take $A = 1\ \mathrm{m^2}$.

**Assumptions:** steady; plates large (1-D, no edge effects); the thin air layer is stagnant, so heat crosses it by conduction (no natural convection); air does not absorb radiation; black plates exchange radiation directly.

### 1. Conduction through the air layer
$$\dot Q_{cond} = kA\,\frac{T_1-T_2}{L} = (0.0219)(1)\,\frac{300-200}{0.01} = 219\ \mathrm W$$

### 2. Radiation between the black plates
$$\dot Q_{rad} = \varepsilon\sigma A\,(T_1^4-T_2^4) = (1)(5.67\times10^{-8})(1)\left(300^4-200^4\right) = 368\ \mathrm W$$

### 3. Total (the two modes act in parallel)
$$\dot Q_{total} = 219 + 368 = 587\ \mathrm{W\ per\ m^2}$$

**Note:** radiation (63%) exceeds conduction here even at these low temperatures, because a still gas is such a poor conductor.`,
          answer: String.raw`$\dot Q_{cond} = 219$ W, $\dot Q_{rad} = 368$ W, total $\approx 587\ \mathrm{W/m^2}$.` },
        { id: "practice-intro-P3b", label: "(b)", marks: "", topic: "intro",
          sub: "Parallel plates: evacuated gap", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 01 Intro, slide 51 (evacuated gap)`,
          text: String.raw`evacuated.`,
          solution: String.raw`With the gap evacuated there is no medium, so there is **no conduction or convection**; only radiation remains, and radiation needs no medium:

$$\dot Q_{total} = \dot Q_{rad} = \sigma\,(T_1^4-T_2^4) = 368\ \mathrm{W/m^2}$$

**Why it matters:** a vacuum alone is not a good insulator between hot and cold surfaces; the radiation path must also be blocked (low-emissivity or multilayer shields).`,
          answer: String.raw`$\dot Q = \dot Q_{rad} \approx 368\ \mathrm{W/m^2}$.` },
        { id: "practice-intro-P3c", label: "(c)", marks: "", topic: "intro",
          sub: "Parallel plates: urethane insulation", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 01 Intro, slide 52 (urethane insulation)`,
          text: String.raw`filled with urethane insulation.`,
          solution: String.raw`An opaque solid fills the gap, so it **blocks direct radiation** between the plates. Whatever radiation occurs across the pores of the foam is already included in its (effective) thermal conductivity. So only conduction is computed:

$$\dot Q_{total} = \dot Q_{cond} = kA\,\frac{T_1-T_2}{L} = (0.026)(1)\,\frac{100}{0.01} = 260\ \mathrm{W/m^2}$$

**Note:** the urethane ($k = 0.026$) conducts slightly better than still air ($0.0219$), yet the total falls from 587 to 260 W/m² because the radiation path is removed.`,
          answer: String.raw`$\dot Q = 260\ \mathrm{W/m^2}$ (conduction only; radiation blocked).` },
        { id: "practice-intro-P3d", label: "(d)", marks: "", topic: "intro",
          sub: "Parallel plates: superinsulation", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 01 Intro, slide 53 (superinsulation, k = 0.00002 W/m·°C)`,
          text: String.raw`filled with superinsulation of apparent thermal conductivity $0.00002$ W/m·°C.`,
          solution: String.raw`Superinsulation is many evacuated layers of highly reflective foil. The layers stop direct radiation between the plates; the small radiation between the foil sheets and the tiny solid conduction are lumped into the *apparent* conductivity. Hence

$$\dot Q_{total} = kA\,\frac{T_1-T_2}{L} = (2\times10^{-5})(1)\,\frac{100}{0.01} = 0.2\ \mathrm{W/m^2}$$

### Summary

| Gap | Modes | $\dot Q$, W/m² |
|---|---|---|
| Air | conduction + radiation | 587 |
| Vacuum | radiation | 368 |
| Urethane | conduction (effective) | 260 |
| Superinsulation | conduction (apparent) | 0.2 |

**Exam tip:** state which modes act in each case before calculating; that reasoning carries most of the marks.`,
          answer: String.raw`$\dot Q = 0.2\ \mathrm{W/m^2}$, about 3000 times less than with air.` }
      ] },
    { id: "practice-intro-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-intro-P4", label: "", marks: "", topic: "intro",
          sub: "Combined convection–radiation coefficient for a hot plate", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 01 Intro, slide 47 (combined heat-transfer coefficient)`,
          text: String.raw`One face of a 2 m × 1 m hot plate is at 80°C. It faces a large room whose air and walls are both at 25°C. The convection coefficient is 8 W/m²·°C and the surface emissivity is 0.9. Determine (a) the radiation heat-transfer coefficient $h_{rad}$, (b) the combined coefficient $h_{combined}$, (c) the total heat loss from the face and the fraction lost by radiation.`,
          solution: String.raw`**Given:** $A = 2\ \mathrm{m^2}$, $T_s = 80$°C $= 353.15$ K, $T_\infty = T_{surr} = 25$°C $= 298.15$ K, $h_{conv} = 8$ W/m²·°C, $\varepsilon = 0.9$.

**Find:** $h_{rad}$, $h_{combined}$, $\dot Q_{total}$, $\dot Q_{rad}/\dot Q_{total}$.

**Assumptions:** steady; the room is large compared with the plate (small surface enclosed by large surroundings); air does not take part in radiation; temperatures in kelvin for radiation.

### 1. Radiation coefficient
From $\dot Q_{rad} = \varepsilon\sigma A(T_s^4-T_{surr}^4) = h_{rad}A(T_s-T_{surr})$:

$$h_{rad} = \varepsilon\sigma\,(T_s+T_{surr})(T_s^2+T_{surr}^2)$$

$$h_{rad} = 0.9(5.67\times10^{-8})(353.15+298.15)(353.15^2+298.15^2) = 7.10\ \mathrm{W/m^2\,^\circ C}$$

### 2. Combined coefficient
$$h_{combined} = h_{conv} + h_{rad} = 8 + 7.10 = 15.1\ \mathrm{W/m^2\,^\circ C}$$

### 3. Heat loss
$$\dot Q_{conv} = h_{conv}A(T_s-T_\infty) = 8(2)(55) = 880\ \mathrm W$$

$$\dot Q_{rad} = \varepsilon\sigma A(T_s^4-T_{surr}^4) = 0.9(5.67\times10^{-8})(2)(353.15^4-298.15^4) = 781\ \mathrm W$$

$$\dot Q_{total} = h_{combined}A(T_s-T_\infty) = 15.1(2)(55) = 1661\ \mathrm W$$

Fraction by radiation $= 781/1661 = 0.47$.

**Why it matters:** for a surface in still room air, radiation is as large as natural convection; ignoring it halves the predicted loss. Note $h_{combined}$ is used with $T_\infty = T_{surr}$; if they differ, keep the two terms separate.`,
          answer: String.raw`$h_{rad} \approx 7.1$, $h_{combined} \approx 15.1\ \mathrm{W/m^2\,^\circ C}$; $\dot Q \approx 1.66$ kW, of which about 47% is radiation.` }
      ] },
    { id: "practice-intro-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-intro-P5", label: "", marks: "", topic: "intro",
          sub: "Thermal diffusivity of common materials", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 01 Intro, slide 35 (thermal diffusivity α = k/ρc_p)`,
          text: String.raw`Using the property values below (at about 300 K), calculate the heat capacity $\rho c_p$ and the thermal diffusivity $\alpha$ of each material, rank them, and explain why water has a higher conductivity than wood but almost the same diffusivity.

| Material | $k$, W/m·K | $\rho$, kg/m³ | $c_p$, J/kg·K |
|---|---|---|---|
| Copper | 401 | 8933 | 385 |
| Aluminium | 237 | 2702 | 903 |
| Stainless steel | 15.1 | 7900 | 477 |
| Concrete | 1.4 | 2300 | 880 |
| Water | 0.613 | 997 | 4180 |
| Wood (oak) | 0.17 | 545 | 2385 |
| Air (1 atm) | 0.0263 | 1.16 | 1007 |`,
          solution: String.raw`**Definition:** $\alpha = \dfrac{\text{heat conducted}}{\text{heat stored}} = \dfrac{k}{\rho c_p}$ (m²/s); $\rho c_p$ (J/m³·K) is the heat stored per unit volume per degree.

### Results

| Material | $\rho c_p$, J/m³·K | $\alpha$, m²/s |
|---|---|---|
| Copper | $3.44\times10^6$ | $1.17\times10^{-4}$ |
| Aluminium | $2.44\times10^6$ | $9.71\times10^{-5}$ |
| Air | $1.17\times10^3$ | $2.25\times10^{-5}$ |
| Stainless steel | $3.77\times10^6$ | $4.01\times10^{-6}$ |
| Concrete | $2.02\times10^6$ | $6.92\times10^{-7}$ |
| Water | $4.17\times10^6$ | $1.47\times10^{-7}$ |
| Wood (oak) | $1.30\times10^6$ | $1.31\times10^{-7}$ |

Example (copper): $\alpha = 401/(8933\times385) = 1.17\times10^{-4}\ \mathrm{m^2/s}$.

### Interpretation
- Large $\alpha$ means heat propagates quickly into the material (metals). Small $\alpha$ means most of the heat is absorbed (stored) locally and little is passed on.
- Air has a tiny $k$ but an even tinier $\rho c_p$ (it is very light), so its $\alpha$ is higher than that of stainless steel.
- Water conducts 3.6 times better than oak, but it also stores 3.2 times more heat per unit volume ($\rho c_p = 4.17\times10^6$ vs $1.30\times10^6$), so the two diffusivities are almost equal.
- Most solids and liquids have $\rho c_p \approx 1$–$4\times10^6$ J/m³·K, so for them $\alpha$ follows $k$ fairly closely; gases are the exception.`,
          answer: String.raw`$\alpha$: Cu $1.17\times10^{-4}$ > Al $9.7\times10^{-5}$ > air $2.3\times10^{-5}$ > steel $4.0\times10^{-6}$ > concrete $6.9\times10^{-7}$ > water $1.47\times10^{-7}$ ≈ oak $1.31\times10^{-7}$ m²/s.` }
      ] },
    { id: "practice-intro-P6", q: 6, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-intro-P6", label: "", marks: "6+4", topic: "intro",
          sub: "Measuring k with a guarded hot plate", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel ch. 1 thermal-conductivity measurement problems; slide 29 of Slides 01 (simple k apparatus)`,
          text: String.raw`A guarded hot-plate apparatus is used to measure the thermal conductivity of a fibre board. The sample is 30 cm × 30 cm and 2.5 cm thick. At steady state the electric heater supplies 9 W, all of which passes through the sample (the guard heater prevents side and back losses). The hot and cold faces of the sample read 38°C and 22°C.

(a) Find the thermal conductivity of the board and its R-value. **[6]**

(b) The board has density 300 kg/m³ and specific heat 1400 J/kg·K. Find its thermal diffusivity and state what the temperature difference would be if a board of twice the conductivity were tested at the same power. **[4]**`,
          solution: String.raw`**Given:** $A = 0.3\times0.3 = 0.09\ \mathrm{m^2}$, $L = 0.025$ m, $\dot Q = 9$ W, $T_1 = 38$°C, $T_2 = 22$°C; $\rho = 300$ kg/m³, $c_p = 1400$ J/kg·K.

**Assumptions:** steady; 1-D conduction normal to the faces (guard heater removes edge losses); constant $k$ over 22–38°C.

### (a) Thermal conductivity and R-value
Heat flux: $q = \dot Q/A = 9/0.09 = 100\ \mathrm{W/m^2}$.

$$\dot Q = kA\,\frac{T_1-T_2}{L}\ \Rightarrow\ k = \frac{\dot Q\,L}{A\,(T_1-T_2)} = \frac{9(0.025)}{0.09(16)} = 0.156\ \mathrm{W/m\,^\circ C}$$

$$R\text{-value} = \frac{\Delta T}{q} = \frac{L}{k} = \frac{0.025}{0.156} = 0.16\ \mathrm{m^2\,^\circ C/W}$$

(The thermal resistance of this particular sample is $R_{th} = L/(kA) = 1.78$ °C/W; the R-value is per unit area.)

### (b) Diffusivity
$$\alpha = \frac{k}{\rho c_p} = \frac{0.156}{300(1400)} = 3.72\times10^{-7}\ \mathrm{m^2/s}$$

At the same $\dot Q$, $\Delta T = \dot Q L/(kA)$ is inversely proportional to $k$: doubling $k$ halves it to $16/2 = 8$°C.

**Exam tip:** the guard heater is what makes the 1-D Fourier law valid; mention it as the key assumption.`,
          answer: String.raw`$k \approx 0.156$ W/m·°C, R-value $= 0.16$ m²·°C/W; $\alpha \approx 3.7\times10^{-7}$ m²/s; $\Delta T$ would be 8°C.` }
      ] },
    { id: "practice-intro-P7", q: 7, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-intro-P7", label: "", marks: "8+7", topic: "intro",
          sub: "Heater rod: separating convection and radiation", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel ch. 1 (resistance heater in a room); cousin of 2011-12 Q5(b) (person losing heat by convection and radiation)`,
          text: String.raw`A 1 m long, 0.5 cm diameter electric heater rod dissipates 40 W in a room whose air and walls are at 20°C. At steady state its surface temperature is 120°C and its emissivity is 0.85.

(a) Find the radiation heat loss, the convection heat-transfer coefficient and the combined heat-transfer coefficient. **[8]**

(b) The rod is replaced by one with a polished surface ($\varepsilon = 0.1$). With the same power and the same convection coefficient, estimate the new surface temperature. **[7]**`,
          solution: String.raw`**Given:** $D = 0.005$ m, $L = 1$ m, $\dot Q = 40$ W, $T_s = 120$°C $= 393.15$ K, $T_\infty = T_{surr} = 20$°C $= 293.15$ K, $\varepsilon = 0.85$.

**Assumptions:** steady; all electrical power leaves the side surface (end areas neglected); the room is large; uniform surface temperature.

### (a) Split of the 40 W
Surface area: $A_s = \pi DL = \pi(0.005)(1) = 0.01571\ \mathrm{m^2}$.

Radiation (small body in large enclosure):

$$\dot Q_{rad} = \varepsilon\sigma A_s(T_s^4-T_{surr}^4) = 0.85(5.67\times10^{-8})(0.01571)(393.15^4-293.15^4) = 12.5\ \mathrm W$$

Convection takes the rest: $\dot Q_{conv} = 40-12.5 = 27.5$ W.

$$h_{conv} = \frac{\dot Q_{conv}}{A_s(T_s-T_\infty)} = \frac{27.5}{0.01571(100)} = 17.5\ \mathrm{W/m^2\,^\circ C}$$

Combined: $h_{combined} = \dot Q/(A_s\Delta T) = 40/(0.01571\times100) = 25.5\ \mathrm{W/m^2\,^\circ C}$, i.e. $h_{rad} = \varepsilon\sigma(T_s+T_{surr})(T_s^2+T_{surr}^2) = 7.95$ W/m²·°C.

### (b) Polished rod, $\varepsilon = 0.1$
Energy balance on the surface (unknown $T_s$):

$$40 = h_{conv}A_s(T_s-293.15) + 0.1\sigma A_s(T_s^4-293.15^4)$$

Solving by trial (or iteration) with $h_{conv} = 17.5$, $A_s = 0.01571$:

| $T_s$, °C | conv, W | rad, W | total, W |
|---|---|---|---|
| 150 | 35.8 | 2.2 | 38.0 |
| 160 | 38.5 | 2.5 | 41.0 |
| 156.8 | 37.6 | 2.4 | 40.0 |

So $T_s \approx 157$°C, about 37°C hotter than the black rod.

**Why it matters:** radiation carried 31% of the load at $\varepsilon = 0.85$; a shiny surface throws that path away, so the surface must run hotter to reject the same power by convection.`,
          answer: String.raw`(a) $\dot Q_{rad} \approx 12.5$ W, $h_{conv} \approx 17.5$, $h_{combined} \approx 25.5\ \mathrm{W/m^2\,^\circ C}$; (b) $T_s \approx 157$°C.` }
      ] },
    { id: "practice-intro-P8", q: 8, section: "F", compulsory: false,
      stem: String.raw`Write short answers.`,
      parts: [
        { id: "practice-intro-P8a", label: "(a)", marks: "3", topic: "intro",
          sub: "Thermodynamics vs heat transfer", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 01 Intro, slide 11; short-answer style of 2018-19 Q5(a)`,
          text: String.raw`How does the science of heat transfer differ from thermodynamics?`,
          solution: String.raw`- **Thermodynamics** (first law, $Q - W = \Delta E_{sys}$) gives the *total* amount of heat transferred when a system goes from one equilibrium state to another. It says nothing about how long the process takes.
- **Heat transfer** gives the *rate* of energy transfer (W) and the temperature distribution inside the body at any time, using rate laws (Fourier, Newton, Stefan–Boltzmann). These "details" are what sizing and design need (area, time, thickness).
- Example: thermodynamics says a hot can of drink loses $mc\Delta T$ to reach room temperature; heat transfer says whether that takes 10 min or 3 h.`,
          answer: String.raw`Thermodynamics: how much heat between equilibrium states; heat transfer: how fast, and the temperature field, which design needs.` },
        { id: "practice-intro-P8b", label: "(b)", marks: "3", topic: "intro",
          sub: "Why h is not a fluid property", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 01 Intro, slide 39 (Newton's law of cooling, typical h values)`,
          text: String.raw`State Newton's law of cooling. Why is the convection coefficient $h$ not a property of the fluid? Give typical ranges of $h$.`,
          solution: String.raw`Newton's law of cooling: $\dot Q_{conv} = hA_s(T_s - T_\infty)$.

$h$ is an experimentally determined parameter. It depends on everything that affects the flow near the surface: surface geometry, nature of the motion (laminar/turbulent, forced/free), fluid properties ($k$, $\mu$, $\rho$, $c_p$) and the bulk velocity. The same air gives $h \approx 5$ in still air and $h \approx 100$ under a fan, so $h$ is not a property of air.

| Type of convection | $h$, W/m²·°C |
|---|---|
| Free, gases | 2–25 |
| Free, liquids | 10–1000 |
| Forced, gases | 25–250 |
| Forced, liquids | 50–20,000 |
| Boiling and condensation | 2500–100,000 |`,
          answer: String.raw`$\dot Q = hA_s(T_s - T_\infty)$; $h$ depends on geometry, flow type, velocity and properties, so it is a process coefficient, not a property.` },
        { id: "practice-intro-P8c", label: "(c)", marks: "4", topic: "intro",
          sub: "Conduction mechanisms in gases, liquids and solids", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 01 Intro, slides 22 and 30–31; asked in finals like 2018-19 Q5(a) and 2011-12 Q5(a)`,
          text: String.raw`Explain the mechanism of heat conduction in gases, liquids and solids. Why are pure metals better conductors than alloys and non-metals? How does $k$ of copper change with temperature?`,
          solution: String.raw`- **Gases and liquids:** energy passes by collisions and diffusion of molecules in random motion; faster (hotter) molecules give energy to slower ones. In gases the molecules are far apart, so $k$ is small (air ≈ 0.026 W/m·K), and $k$ of a gas rises with temperature.
- **Solids:** energy is carried by (i) lattice vibrations (phonons) and (ii) free electrons. Pure metals have many free electrons, so $k$ is high (Cu ≈ 400 W/m·K). In alloys the foreign atoms scatter electrons and phonons, so $k$ drops sharply (stainless steel ≈ 15). Non-metals rely on the lattice only, so they are lower still (except highly ordered crystals such as diamond).
- **Temperature dependence:** from the slide table, $k_{Cu}$ falls from 482 W/m·K at 100 K to 401 at 300 K and 366 at 800 K: for pure metals $k$ usually decreases as $T$ rises.
- **Ranking:** pure metals > alloys > non-metallic solids > liquids > insulators ≈ gases.`,
          answer: String.raw`Molecular collisions/diffusion in fluids; lattice vibration plus free electrons in solids. Free electrons make pure metals the best conductors; impurities scatter them in alloys.` },
        { id: "practice-intro-P8d", label: "(d)", marks: "4", topic: "intro",
          sub: "Modes inside an insulator; why vacuum multilayer works", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 01 Intro, slide 36 (insulators); cousin of 2011-12 Q6(b) (super insulator)`,
          text: String.raw`Name the modes of energy transfer through a fibrous insulating material at high temperature. Why do evacuated multilayer insulations reach effective conductivities as low as 0.015–0.06 mW/m·°C?`,
          solution: String.raw`Energy crosses a fibrous or porous insulator by:
1. conduction through the solid fibres or the porous solid matrix;
2. conduction (and some convection) through the air trapped in the voids;
3. radiation across the voids, which becomes important at high temperature (it grows with $T^3$).

All three are lumped into one **effective** $k$.

Evacuated multilayer insulation attacks each path: the vacuum removes gas conduction and convection; many thin, highly reflective foils (low $\varepsilon$) cut radiation, since each sheet acts as a radiation shield; and spacers of very low conductivity, touching at only a few points, make solid conduction tiny. Hence effective $k$ falls from 7–36 mW/m·°C (unevacuated foams) to 0.015–0.06 mW/m·°C.`,
          answer: String.raw`Solid conduction, gas conduction in voids, radiation across voids; vacuum plus reflective shields plus low-contact spacers suppress all three.` }
      ] }
  ] });
