QB.paper({
  year: "2012-13", date: "06/01/2015", marks: 280,
  rules: String.raw`L-3/T-2 B.Sc. Engineering Examinations 2012-2013 (CHE 311 was then an L-3/T-2 course). Section A: answer any THREE of Q1–Q4; Section B: answer any THREE of Q5–Q8. Separate scripts for each section. If you answer Q2(b) you must attach the Mollier diagram (h–s diagram for water, attached to the paper) with the answer script. Also attached: the reheat-cycle figure for Q2(b) and Worthington's characteristic curves and specific speeds of impellers (for Q7d). Q7 has parts (a), (c), (d) only, as printed.`,
  questions: [
    { id: "2012-13-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q1a", label: "(a)", marks: "10",
          topic: "separator-selection", sub: "Mechanical separation and the material properties it exploits",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is mechanical separation? What are the basic properties of the materials that lead to mechanical separation? - Explain with example.`,
          solution: String.raw`**Definition.** Mechanical separation is the group of operations in which the components of a **heterogeneous (poly-phase) mixture** are separated by mechanical means (gravity, centrifugal force, impingement, filtration through a medium, electrostatic or magnetic forces) into two or more fractions of different mechanical characteristics. It acts on **phases** already present (gas–liquid, gas–solid, liquid–liquid, liquid–solid, solid–solid); it does not separate a homogeneous solution (that needs a diffusional operation such as distillation or absorption).

**Properties that make mechanical separation possible**

| Property difference | Principle | Typical equipment | Example |
|---|---|---|---|
| **Density** | different settling velocity under gravity or centrifugal force | gravity settlers, decanters, thickeners, cyclones, centrifuges | sand from water in a settling tank; oil–water decanter; fly ash in a cyclone |
| **Size (and shape)** | particles larger than an opening are retained; size also sets the settling/inertial behaviour | screens, sieves, filters, bag filters, wire-mesh demisters | screening crushed limestone; bag filter for cement dust |
| **Inertia (momentum)** | drops/particles cannot follow the gas around an obstacle and hit it | impingement baffles, wire mesh, venturi scrubbers | ethylene mist removed in a mesh pad |
| **Surface properties (wettability)** | hydrophobic particles attach to air bubbles | froth flotation | separating copper sulphide ore from gangue |
| **Electrical charge / conductivity** | charged particles migrate in an electric field | electrostatic precipitator, electrostatic separators | fly ash in a power-plant ESP |
| **Magnetic susceptibility** | magnetic particles are pulled out of the stream | magnetic separators, drum magnets | tramp iron from coal; magnetite from sand |
| **Fluidity / phase (solid, liquid, gas)** | the phases flow differently | filters, centrifuges, entrainment separators | slurry dewatering |

Selection then depends on the particle size distribution, the concentration and the degree of removal required (e.g. Sylvan chart for dust collectors).`,
          answer: String.raw`Separation of the phases of a heterogeneous mixture by mechanical forces (gravity, centrifugal, impingement, filtration, electrostatic, magnetic). It exploits differences in density, size/shape, inertia, surface wettability, electrical charge and magnetic properties — e.g. settlers/cyclones (density), screens/filters (size), mesh pads (inertia), flotation (surface), ESP (charge), magnetic separators.` },
        { id: "2012-13-Q1b", label: "(b)", marks: "6⅔",
          topic: "dust-collection", sub: "Cost comparison graph: ESP, wet scrubber and bag filter",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Graphically show the cost comparison of Electrostatic precipitator, wet scrubber and bag filter.`,
          solution: String.raw`![Typical installed and annual operating cost trends vs gas flow for ESP, fabric filter and wet (venturi) scrubber (illustrative; order-of-magnitude US EPA cost-manual trends)](fig/2012-13-Q1b-sol.svg)

**Reading the graph**

- **Installed (capital) cost:** the wet scrubber is the cheapest to buy and install at all flows (simple vessel, no large casing); the bag filter is intermediate; the **ESP has the highest capital cost**, especially at small gas flows, because of its large casing, transformer–rectifier sets and electrodes. ESP cost rises less than proportionally with flow (strong economy of scale), so for very large flows (power plants) its cost per unit gas approaches that of the bag filter.
- **Operating cost:** the **wet scrubber has the highest operating cost**: a high pressure drop (venturi 25–150 cm water → large fan power), water and pumping, sludge/wastewater treatment, corrosion. The bag filter has a moderate pressure drop (10–20 cm water) plus bag replacement and compressed air for cleaning. The **ESP has the lowest operating cost** (pressure drop ≈ 1–2 cm water, small electrical power), apart from very high efficiencies.
- **Total annual cost** therefore favours: scrubbers for small, intermittent or sticky/explosive duties; bag filters for medium flows and fine dust; ESPs for very large, continuous gas flows (utility boilers, cement kilns).

| Device | Capital cost | Operating cost | Pressure drop |
|---|---|---|---|
| Wet (venturi) scrubber | low | high | high |
| Bag (fabric) filter | medium | medium | medium |
| ESP | high | low | very low |`,
          answer: String.raw`Capital cost: wet scrubber < bag filter < ESP (ESP highest, with strong economy of scale); operating cost: ESP < bag filter < wet scrubber (scrubber has high ΔP, water and sludge). ESPs win for large continuous flows, scrubbers for small duties.` },
        { id: "2012-13-Q1c", label: "(c)", marks: "10",
          topic: "gas-liquid-separation", sub: "Impingement separators: principle and wire-mesh velocity limits",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is the working principle of impingement separators? What are the velocity limitations of wire mesh impingement separator?`,
          solution: String.raw`**Principle.** The gas carrying droplets (or particles) is made to flow around obstacles: baffles, chevron (zig-zag) vanes, or the fine wires of a knitted mesh pad. The gas streamlines bend around each target, but the droplets, having much greater inertia, cannot follow them and **impinge** on the surface (inertial impaction; small drops also by interception and Brownian diffusion). On the surface the drops are retained, **coalesce** into larger drops, drain down the wires/vanes and fall back against the rising gas as large drops that are too heavy to be re-entrained. Efficiency rises with gas velocity (more momentum, higher impaction parameter $\psi = \rho_p v d_p^2/18\mu D_t$) until the liquid begins to be stripped off and carried through.

![Impingement: gas streamlines bend around the wire, drops with high inertia hit it, coalesce and drain](fig/2012-13-Q1c-sketch.svg)

**Velocity limitations of wire-mesh separators (Ludwig ch. 4)**

The maximum allowable superficial vapor velocity across the face of a horizontal pad is

$$V_a = k\sqrt{\frac{\rho_L - \rho_V}{\rho_V}}\quad(\mathrm{ft/s})$$

with k ≈ 0.35 for clean, free-flowing systems with 9–12 lb/ft³ mesh at pressures below 30 psig (0.4 for 5 lb/ft³ high-capacity mesh, 0.3 for plastic mesh; k falls with pressure: ≈ 0.30 at 250 psig, 0.275 at 800 psig; lower for vacuum, viscous or dirty service).

- **Design velocity:** $V_D = 0.75V_a$ for new separators, to allow for surges and variations in liquid load.
- **Good operation:** 30% to 100% of $V_a$; efficiency 98–99%+, drops down to 4–6 µm removed.
- **Lower limit:** about **10% of $V_a$**. Below it the drops do not impinge (too little momentum) and pass through the mesh with the gas.
- **Upper limit:** above $V_a$ the liquid is held up in the pad, carried to its top and **re-entrained**; **flooding** occurs at about 120–140% of $V_a$.
- A vertical or inclined pad is limited to about 0.67 times the horizontal value; the bottom of the pad should be at least 12 in above the liquid surface. Pressure drop is small (≈ 1 in water or less).`,
          answer: String.raw`Drops cannot follow the gas streamlines around wires/baffles, impinge, coalesce and drain off. Wire mesh: V_a = k√((ρ_L−ρ_V)/ρ_V), k ≈ 0.35; design at 0.75V_a; good from 30–100% V_a; minimum ≈ 10% V_a (no impingement); above V_a re-entrainment, flooding at 120–140% V_a; vertical pads ≈ 0.67V_a.` },
        { id: "2012-13-Q1d", label: "(d)", marks: "20",
          topic: "gas-liquid-separation", sub: "Wire-mesh flash drum for liquid ethylene entrainment",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Design a flash drum with wire mesh to separate liquid ethylene entrainment for the following conditions:

Volume of vapor : 465 CFM at 110°F and 35 psig

Density of vapor : 0.30 lb/ft³

Density of liquid ethylene : 33 lb/ft³

It is assumed that the vessel wall thickness will be ¾ inch and the thickness of the support ring inside the vessel is 2 inch. It is also assumed that the heads normally available for such vessels run in 6-inch increments (either O.D. or I.D.)`,
          solution: String.raw`This is Ludwig Example 4-5 (Applied Process Design Vol. 1, ch. 4).

**Given:** $Q_V$ = 465 ft³/min; $\rho_V$ = 0.30 lb/ft³; $\rho_L$ = 33 lb/ft³; wall ¾ in; support ring 2 in wide; heads in 6-in steps.

**Find:** vessel diameter (and the mesh arrangement).

**Assumptions:** clean service, moderate liquid loading, standard 9–12 lb/ft³ mesh: k = 0.35; design velocity 75% of the allowable; the vapor is at −110°F (liquid ethylene cannot exist at +110°F, 35 psig; the minus sign is lost in the print, Ludwig gives −110°F).

1. **Allowable (maximum) velocity:**
$$V_a = 0.35\sqrt{\frac{33-0.3}{0.3}} = 0.35(10.44) = 3.65\ \mathrm{ft/s}$$

2. **Design velocity:** $V_D = 0.75(3.65) = 2.74$ ft/s.

3. **Required cross-section and diameter:**
$$A = \frac{465}{60(2.74)} = 2.83\ \mathrm{ft^2},\qquad D = \sqrt{\frac{4(2.83)}{\pi}} = 1.90\ \mathrm{ft} = 22.8\ \mathrm{in}$$

4. **First try, 24-in vessel (2 ft 0 in).** The 2-in support ring reduces the free diameter at the mesh by 4 in: 24 − 4 = 20 in (taking 24 in as the inside diameter, as Ludwig does).
$$A_{net} = \frac{\pi(20)^2}{4(144)} = 2.18\ \mathrm{ft^2},\qquad V = \frac{465}{60(2.18)} = 3.55\ \mathrm{ft/s} = 97\%\ \text{of}\ V_a$$
   Too close to the maximum (and above it if 24 in were the O.D.): rejected.

5. **Second try, next standard size, 30 in (2 ft 6 in) O.D.** Inside diameter = 30 − 2(¾) = 28.5 in; free diameter at the ring = 28.5 − 4 = 24.5 in:
$$A_{net} = \frac{\pi(24.5)^2}{4(144)} = 3.27\ \mathrm{ft^2},\qquad V = \frac{465}{60(3.27)} = 2.37\ \mathrm{ft/s}$$
$$\frac{V}{V_a} = \frac{2.37}{3.65} = 65\%$$
   This lies in the 30–100% band of good mesh operation and below the 75% design value: **acceptable**. (Ludwig's text deducts the wall only once, 30 − 4 − ¾ = 25¼ in, $A_{net}$ = 3.46 ft², V = 2.24 ft/s = 61%; with a 30-in I.D. shell, 26-in free diameter, V = 2.10 ft/s, 57%. All are acceptable.)

6. **Mesh and vessel details:**
   - Mesh pad 6 in thick (4 in minimum), 9–12 lb/ft³, **type 304 stainless steel** (carbon steel wire is brittle at −110°F), wired to bottom support grid on the 2-in ring, with hold-down bars on top to prevent blow-out on surges.
   - Pressure drop ≈ 0.1–0.5 in water.
   - The drum operates as a flash drum with the liquid level at about ⅓ of the height: inlet nozzle at about mid-height, bottom of the mesh at least 12 in above the inlet/liquid surface, 6–12 in vapor space above the mesh to the outlet; vapor outlet nozzle on the top head, liquid outlet at the bottom.

![Flash drum with wire-mesh pad: 30-in O.D. shell, 2-in support ring, 6-in mesh, inlet at mid-height](fig/2012-13-Q1d-sol.svg)

**Result:** vessel **2 ft 6 in (30 in) O.D.**, ¾-in wall, 6-in stainless mesh on a 2-in ring; actual velocity through the pad ≈ 2.3 ft/s, ≈ 61–65% of the allowable 3.65 ft/s.`,
          answer: String.raw`V_a = 0.35√(32.7/0.3) = 3.65 ft/s, V_D = 2.74 ft/s, A = 2.83 ft² (D = 22.8 in). 24-in drum gives 3.55 ft/s (97%, rejected); 30-in O.D. drum (24.5-in free diameter at the ring) gives 2.37 ft/s ≈ 65% of V_a (Ludwig: 2.24 ft/s, 61%) → use 2 ft 6 in drum with 6-in SS mesh.` }
      ] },
    { id: "2012-13-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q2a", label: "(a)", marks: "15",
          topic: "other", sub: "Impulse turbine staging: velocity, pressure and pressure–velocity compounding",
          type: "sketch", syllabus: "out", repeats: ["2018-19-Q6b", "2013-14-Q2b"],
          text: String.raw`What are the types of impulse turbine staging? Briefly state their configuration. Also draw the schematic of impulse turbine staging showing their pressure and velocity profile along the steam flow path inside the turbine.`,
          solution: String.raw`In an impulse stage the whole pressure drop of the stage takes place in the **stationary nozzles**; the steam leaves them at high velocity and gives up its kinetic energy to the moving blades at constant pressure. A single-stage (De Laval) turbine expanding the whole pressure range in one nozzle gives very high steam and blade speeds (≈ 1000–1200 m/s), so the energy is divided by **compounding (staging)**:

**1. Velocity compounding (Curtis stage).** One set of nozzles expands the steam through the whole (or most of the) pressure drop; the high-velocity jet then passes through two or three rows of moving blades with rows of **fixed guide blades** between them, which only reverse the direction of the steam. The velocity is absorbed in steps; the pressure stays constant after the nozzle. Short, cheap, few stages; lower efficiency (friction in many blade rows). Used as the first (control) stage of large turbines and for small mechanical-drive turbines.

**2. Pressure compounding (Rateau stage).** A series of simple impulse stages, each a nozzle ring (in a diaphragm) followed by one moving row. The total pressure drop is divided among the stages; in each nozzle the pressure drops a little and the velocity rises, then the velocity falls across the moving row at constant pressure. The velocity profile is a saw-tooth with moderate peaks; the pressure falls stepwise. High efficiency, moderate blade speed, but long and more costly.

**3. Pressure–velocity compounding.** A combination: the pressure drop is divided among a few nozzle sets (pressure stages), and each pressure stage is a velocity-compounded (Curtis) wheel with two moving rows. Fewer stages than pure pressure compounding, better efficiency than pure velocity compounding.

![Impulse staging: arrangement of nozzles (N), moving blades (M) and fixed guide blades (F), with the steam pressure and absolute velocity along the flow path](fig/2012-13-Q2a-sketch.svg)

| Type | Pressure drop occurs in | Velocity profile | Feature |
|---|---|---|---|
| Velocity compounded (Curtis) | first nozzle only | high peak, absorbed in 2–3 moving rows | short, cheap, lower η |
| Pressure compounded (Rateau) | each of many nozzle rings | several small peaks | high η, long |
| Pressure–velocity compounded | each of a few nozzle rings | a few high peaks, each absorbed in 2 rows | compromise |`,
          answer: String.raw`(1) Velocity-compounded (Curtis): one nozzle, then moving–fixed–moving rows, P drops once, V absorbed in steps. (2) Pressure-compounded (Rateau): nozzle + moving row repeated, P drops stepwise, V saw-tooth. (3) Pressure–velocity compounded: few nozzle stages each followed by a two-row Curtis wheel.` },
        { id: "2012-13-Q2b", label: "(b)", marks: "12⅔",
          topic: "other", sub: "Reheat cycle: isentropic efficiencies of HP and LP turbines",
          type: "numerical", syllabus: "out", repeats: ["2019-20-Q2c"],
          text: String.raw`In the figure (see attachment) you are required to evaluate the efficiency of HP and LP steam turbines of the system both of which are assumed to be adiabatic. Following data are given:

| State | Enthalpy |
|---|---|
| Steam at $P_1$ and $T_1$ | 3,330 kJ/kg |
| 4 MPa and 300°C | 2962 kJ/kg |
| $P_3$ and 550°C | 3561 kJ/kg |

Note: you must attach the Mollier diagram with your answer script.

Figure for Qs. 2(b) (attached to the paper): reheat Rankine cycle. Steam generator → state 1: $P_1 = P_7$ = 25 MPa, $T_1$ = 550°C, ṁ = 7 kg/s → HP turbine → state 2: 4 MPa, 300°C → reheat in the steam generator → state 3: $P_3 = P_2$, 550°C → LP turbine → state 4: $P_4$ = 10 kPa, quality x = 0.93 → condenser (cooling water from the Hocking River, ΔT < 10°C) → state 5: $P_5 = P_4$, $T_5$ = 40°C → condensate pump → de-aerator (800 kPa) → state 6: $T_6 = T_5$ → feedwater pump → state 7: $P_7$ = 25 MPa, $T_7$ = 41°C. The h–s (Mollier) diagram for water is attached.`,
          solution: String.raw`**Given:** $h_1$ = 3330 kJ/kg (25 MPa, 550°C); $h_2$ = 2962 kJ/kg (4 MPa, 300°C); $h_3$ = 3561 kJ/kg (4 MPa, 550°C); state 4: 10 kPa, x = 0.93; ṁ = 7 kg/s.

**Find:** isentropic efficiencies of the HP and LP turbines.

**Assumptions:** adiabatic turbines, kinetic and potential energy changes neglected; isentropic efficiency $\eta = (h_{in} - h_{out})/(h_{in} - h_{out,s})$.

1. **HP turbine, isentropic end point (Mollier):** locate state 1 at 25 MPa, 550°C ($s_1$ ≈ 6.18 kJ/kg·K); drop vertically (constant s) to the 4 MPa isobar: $h_{2s}$ ≈ 2860 kJ/kg (just superheated, ≈ 267°C; the saturation temperature at 4 MPa is 250°C).

![How to read the Mollier chart: 25 MPa, 550 °C (s ≈ 6.18) → vertically down to 4 MPa → h₂ₛ ≈ 2860 kJ/kg](fig/2012-13-Q2b-read.svg)

2. **HP efficiency:**
$$\eta_{HP} = \frac{h_1 - h_2}{h_1 - h_{2s}} = \frac{3330 - 2962}{3330 - 2860} = \frac{368}{470} = 0.78$$

3. **LP turbine, actual exit enthalpy** (saturated-steam table at 10 kPa: $h_f$ = 191.8, $h_{fg}$ = 2392.8 kJ/kg; Mollier: 10 kPa isobar at x = 0.93):
$$h_4 = 191.8 + 0.93(2392.8) = 2417\ \mathrm{kJ/kg}$$

4. **LP turbine, isentropic end point:** state 3 at 4 MPa, 550°C ($s_3$ ≈ 7.23 kJ/kg·K); vertically down to 10 kPa: $x_{4s} = (7.23 - 0.649)/7.501 = 0.878$, $h_{4s}$ ≈ 2290 kJ/kg.

![How to read the Mollier chart: 4 MPa, 550 °C (s ≈ 7.23) → down to 10 kPa → h₄ₛ ≈ 2290; actual 10 kPa, x = 0.93 → h₄ ≈ 2417 kJ/kg](fig/2012-13-Q2b-read2.svg)

5. **LP efficiency:**
$$\eta_{LP} = \frac{h_3 - h_4}{h_3 - h_{4s}} = \frac{3561 - 2417}{3561 - 2290} = \frac{1144}{1271} = 0.90$$

6. **Powers (for completeness):** $\dot W_{HP} = 7(368) = 2.58$ MW; $\dot W_{LP} = 7(1144) = 8.01$ MW; total 10.6 MW. With pump work ≈ 7(193.7 − 167.5) = 0.18 MW and heat input 7[(3330 − 193.7) + (3561 − 2962)] = 26.1 MW, the cycle efficiency is ≈ 40%.

**Result:** **η_HP ≈ 78%**, **η_LP ≈ 90%** (IAPWS-97 values: $h_{2s}$ = 2860, $h_{4s}$ = 2292 kJ/kg give 78% and 90%).`,
          answer: String.raw`Mollier: h₂s ≈ 2860 kJ/kg, h₄s ≈ 2290 kJ/kg; h₄ = 191.8 + 0.93(2392.8) = 2417 kJ/kg. η_HP = 368/470 ≈ 0.78; η_LP = 1144/1271 ≈ 0.90 (W_HP = 2.58 MW, W_LP = 8.0 MW).` },
        { id: "2012-13-Q2c", label: "(c)", marks: "19",
          topic: "other", sub: "Steam-turbine health (condition) monitoring system",
          type: "sketch", syllabus: "out", repeats: [],
          text: String.raw`Draw a complete health monitoring system of a steam turbine and explain the function of each component of that system.`,
          solution: String.raw`A turbine supervisory instrumentation (TSI) / condition-monitoring system measures the mechanical and thermal condition of the machine continuously, alarms and trips it before damage, and stores data for diagnosis.

![Steam-turbine health monitoring: sensors on the rotor, bearings, casing and steam/oil systems feeding the monitoring rack, which drives alarms, the trip system and the diagnostic computer](fig/2012-13-Q2c-sketch.svg)

**Sensors and their functions**

| Component | Measures | Why |
|---|---|---|
| Proximity (eddy-current) probes, two at 90° at each journal bearing | shaft **radial vibration** (displacement, µm pk–pk) and orbit | unbalance, misalignment, rubs, oil whirl, cracked shaft; alarm and trip on high vibration |
| Keyphasor probe | one pulse per revolution | phase reference for vibration analysis, speed |
| Seismic (velocity/accelerometer) pickups on bearing housings | **casing/bearing-housing vibration** | bearing defects, looseness, blade problems at high frequency |
| Axial-position (thrust) probes at the thrust collar | **rotor axial position** | thrust-bearing wear; trip before the rotor touches the stationary parts |
| Eccentricity probe | shaft bow at low speed (turning gear) | prevents start-up with a bowed (thermally bent) rotor |
| Differential-expansion probes | rotor vs casing axial growth | axial clearance during start-up and load changes |
| Casing-expansion (LVDT) transducers | shell thermal growth | sticking of the sliding feet |
| RTDs/thermocouples in bearing pads and thrust pads | **bearing metal temperatures** | lubrication failure, overload |
| Speed pickups (magnetic, 2-out-of-3) | **rotor speed** | governor control and independent **overspeed trip** (≈ 110% rated) |
| Lube-oil pressure, temperature, filter ΔP, tank level | oil system health | loss of oil trips the machine; start of auxiliary/emergency pumps |
| Steam pressure and temperature at inlet, extraction, exhaust; condenser vacuum | thermodynamic condition | detects fouled or eroded blades (stage pressure/efficiency changes), low vacuum trip, high exhaust temperature |
| Valve-position (stop and control valve) transducers | valve stroke | governing performance, valve testing |
| Water-induction detection (drain thermocouples, level in drains) | water/cold steam entering | prevents blade and casing damage |
| Gland-steam pressure, metal temperatures of casing and rotor (stress) | thermal stress | controls start-up rate |

**Signal chain**

1. **Monitoring rack** (TSI, e.g. a protection system with monitor cards): conditions each signal, compares it with alert and danger set points and gives the 4–20 mA/digital outputs.
2. **Alarm annunciation** in the control room (DCS): first-level alarms for the operator.
3. **Trip system** (emergency trip solenoids, overspeed trip, low oil-pressure trip, low vacuum trip, high axial displacement/vibration trip) closes the stop and control valves.
4. **Condition-monitoring/diagnostic computer**: trends, spectra (FFT), orbit, Bode/polar plots during run-up and coast-down, oil analysis results, performance (efficiency) calculations; used for predictive maintenance.`,
          answer: String.raw`Proximity probes (radial vibration, orbit), keyphasor, seismic casing pickups, axial-position/thrust probes, eccentricity, differential and casing expansion, bearing RTDs, redundant speed probes (overspeed trip), lube-oil P/T/level, steam P/T and vacuum, valve position, water-induction detection → TSI monitoring rack → DCS alarms, trip system (stop valves) and diagnostic computer for trends/spectra.` }
      ] },
    { id: "2012-13-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q3a", label: "(a)", marks: "10",
          topic: "size-reduction", sub: "Factors in choosing size-reduction equipment",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the factors you would consider in choosing size reduction equipment? Describe these factions in brief.`,
          solution: String.raw`The choice of a machine depends on the **product required** (size and size distribution, shape, amount of fines allowed), the **quantity and feed size** of material, and the **properties of the feed** (Coulson & Richardson Vol. 2; course slides):

1. **Feed size and product size (reduction ratio):** coarse crushers (jaw, gyratory) for > 50 mm feed, intermediate (rolls, hammer mills) and fine grinders (ball, rod mills) and ultrafine grinders (fluid-energy mills) for µm products; a large reduction ratio is split between several machines in series, often in closed circuit.
2. **Capacity:** gyratory for very high tonnage, jaw for moderate; batch vs continuous.
3. **Hardness (Mohs scale):** talc, gypsum, calcite, fluorspar are soft; apatite and above are hard. Hard, abrasive feeds need low-speed machines (compression crushers, tumbling mills) to limit wear, protection of bearings from abrasive dust, pressure lubrication.
4. **Structure:** granular materials (coal, ores, rocks) are crushed by compression and impact; **fibrous** materials (wood, asbestos) need tearing/cutting (knife or toothed-roll mills).
5. **Moisture content:** materials with about 5–50% moisture tend to cake and form balls; grind either dry (< 5%) or wet (> 50%, wet grinding in ball mills).
6. **Crushing strength:** power required is almost proportional to it.
7. **Friability:** tendency to fracture during handling; crystalline materials break along cleavage planes, and the power required increases as the size falls.
8. **Stickiness:** sticky materials clog the machine, so use equipment that is easily cleaned.
9. **Soapiness (low coefficient of friction):** makes crushing by compression difficult (material slips).
10. **Explosive materials:** grind wet or under an inert atmosphere.
11. **Harmful or toxic dust:** enclosed equipment, dust extraction, wet grinding.
12. **Heat sensitivity:** avoid high-energy fine grinding or cool the mill (cryogenic grinding).

Economic factors (power, wear of liners and media, maintenance, capital cost) and the need to avoid contamination of the product (e.g. iron from balls) complete the choice.`,
          answer: String.raw`Feed and product size (reduction ratio), capacity, hardness and abrasiveness, structure (granular/fibrous), moisture (5–50% causes caking), crushing strength, friability, stickiness, soapiness, explosiveness, toxic dust, heat sensitivity, plus power, wear, cost and contamination.` },
        { id: "2012-13-Q3b", label: "(b)", marks: "15⅔",
          topic: "size-reduction", sub: "Derive Rittinger, Kick and Bond laws; range of applicability",
          type: "derivation", syllabus: "in", repeats: ["2020-21-Q8c2", "2015-16-Q5b"],
          text: String.raw`Starting from the basic differential equation derive the different laws for estimating energy for size reduction. Discuss the range of applicability of these laws.`,
          solution: String.raw`**Basic differential equation.** The energy dE needed to produce a small change dL in the size of unit mass of material is a simple power function of the size:

$$\frac{dE}{dL} = -C L^{p}$$

where L is the particle size and C, p are constants. Integrating from the feed size $L_1$ to the product size $L_2$ for different p:

**1. Rittinger's law (p = −2):**
$$E = -C\int_{L_1}^{L_2}\frac{dL}{L^2} = C\left(\frac{1}{L_2} - \frac{1}{L_1}\right)$$
With $C = K_R f_c$ ($f_c$ = crushing strength, $K_R$ = Rittinger's constant):
$$E = K_R f_c\left(\frac{1}{L_2} - \frac{1}{L_1}\right)$$
Since the surface per unit mass is $\propto 1/L$ (for similar shapes, $S = 6/(\phi\rho L)$), the energy is **directly proportional to the new surface created**.

**2. Kick's law (p = −1):**
$$E = -C\int_{L_1}^{L_2}\frac{dL}{L} = C\ln\frac{L_1}{L_2} = K_K f_c\ln\frac{L_1}{L_2}$$
The energy depends only on the **reduction ratio**: reducing 50 mm → 25 mm needs the same energy as 40 mm → 20 mm. It corresponds to the energy for elastic deformation of geometrically similar particles before fracture.

**3. Bond's law (p = −3/2):**
$$E = -C\int_{L_1}^{L_2} L^{-3/2}dL = 2C\left(\frac{1}{\sqrt{L_2}} - \frac{1}{\sqrt{L_1}}\right)$$
Bond writes $2C = \sqrt{100}\,E_i$ with sizes in µm, where the **work index** $E_i$ is the energy to reduce unit mass from infinite size ($L_1 = \infty$) to $L_2$ = 100 µm (80% passing):
$$E = E_i\left(\sqrt{\frac{100}{L_2}} - \sqrt{\frac{100}{L_1}}\right)$$
In MSH form: $P/\dot m = 0.3162\,W_i\,(1/\sqrt{D_{pb}} - 1/\sqrt{D_{pa}})$, P in kW, ṁ in t/h, D in mm.

**Range of applicability**

- **Rittinger:** fine grinding, about **10–1000 µm**, where the new surface per unit mass is large (ball, pebble, attrition mills).
- **Kick:** coarse crushing, sizes **> 1000 µm (≈ > 1 cm)**, where little surface is produced and the energy goes mainly into elastic deformation (jaw, gyratory crushers, crushing rolls).
- **Bond:** intermediate crushing and grinding (and in practice the most widely used for rod and ball mill design, with tabulated work indices).
- Hukki: the real energy–size relation is a composite: Kick's law at coarse sizes, Bond's in the middle, Rittinger's at fine sizes; all assume a constant crushing strength.`,
          answer: String.raw`dE/dL = −CL^p. p = −2: Rittinger E = K_R f_c(1/L₂ − 1/L₁) (∝ new surface, fine grinding 10–1000 µm); p = −1: Kick E = K_K f_c ln(L₁/L₂) (∝ reduction ratio, coarse > 1 mm); p = −3/2: Bond E = E_i(√(100/L₂) − √(100/L₁)) (intermediate; work index).` },
        { id: "2012-13-Q3c", label: "(c)", marks: "7",
          topic: "size-reduction", sub: "Critical speed of a ball mill: derivation",
          type: "derivation", syllabus: "in", repeats: ["2023-24-Q8c", "2022-23-Q8a", "2019-20-Q3b", "2018-19-Q4a", "2016-17-Q6c"],
          text: String.raw`Derive the formula for the critical speed of a ball mill.`,
          solution: String.raw`![Forces on a ball riding on the shell of a mill of radius R](fig/2022-23-Q8a-sol.svg)

1. A ball of mass m and radius r rides on the lining of a mill of radius R rotating at n r/s; its centre moves on a circle of radius (R − r) with angular velocity ω = 2πn.
2. Radial forces on the ball at angle α from the vertical: centrifugal force $m\omega^2(R-r)$ outward, weight component $mg\cos\alpha$ toward the centre (the friction/normal force holds it to the wall while the net force is outward).
3. The ball leaves the shell (and falls, producing grinding by impact and attrition) where the two are equal:
$$\cos\alpha = \frac{4\pi^2 n^2 (R-r)}{g}$$
4. As n rises, the ball is carried higher. At the **critical speed** $n_c$ it is carried right over the top without leaving the shell: α = 0, cos α = 1:
$$4\pi^2 n_c^2(R-r) = g\ \Rightarrow\ \boxed{n_c = \frac{1}{2\pi}\sqrt{\frac{g}{R-r}}}$$
5. With D and d the mill and ball diameters in metres, $n_c = \frac{42.3}{\sqrt{D-d}}$ r/min.

At and above $n_c$ the charge centrifuges and grinding stops; mills are operated at 50–75% of $n_c$ (cascading/cataracting regime).`,
          answer: String.raw`At the top of the shell mω²(R−r) = mg (α = 0), so n_c = (1/2π)√(g/(R−r)) = 42.3/√(D−d) r/min (D, d in m); operate at 50–75% of n_c.` },
        { id: "2012-13-Q3d", label: "(d)", marks: "14",
          topic: "size-reduction", sub: "Size-reduction steps in wet-process Portland cement (Chhatak)",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Give an outline of size reduction steps and equipment employed in Chhatak Cement Co. Ltd. for the production of Portland cement by wet process.`,
          solution: String.raw`Chhatak Cement (Sunamganj, Sylhet; BCIC, the country's oldest cement plant, est. 1937–41) makes ordinary Portland cement by the **wet process**: limestone and clay are ground with water into a slurry that is burnt in a long rotary kiln. The size-reduction sequence (typical of wet-process plants):

![Wet-process flow sheet with the size-reduction steps and machines](fig/2012-13-Q3d-sol.svg)

| Step | Material | Equipment (force) | Size |
|---|---|---|---|
| 1. Primary crushing | quarried limestone (lumps up to ≈ 1 m) | **jaw crusher** (or gyratory) — compression | → 100–150 mm |
| 2. Secondary crushing | limestone | **hammer mill / impact crusher** or cone crusher — impact | → 10–25 mm |
| 3. Clay preparation | clay/shale with water | **wash mill** (rotating harrows in a basin) — attrition/disintegration; clay slurry screened | slurry |
| 4. Raw (slurry) grinding | limestone + clay slurry + water (≈ 35–40% water) | **ball mill / tube mill** (compartment mill with steel balls), closed circuit with screens or hydrocyclones — impact + attrition (wet grinding: ≈ 20–30% less power, no dust) | ≈ 85–90% passing 90 µm |
| 5. Slurry homogenising and correction | slurry tanks/basins with agitators and compressed-air mixing | (mixing, no size reduction) | — |
| 6. Burning | slurry fed to a long **wet-process rotary kiln** (chain zone dries the slurry), ≈ 1450°C | — | clinker nodules 5–25 mm |
| 7. Clinker cooling and crushing | hot clinker | grate/rotary cooler, **clinker breaker (hammer crusher)** | → < 25 mm |
| 8. Cement (finish) grinding | clinker + 4–5% gypsum | **ball (tube) mill**, 2–3 compartments, closed circuit with an **air separator (classifier)** — impact + attrition (Bond's law) | Blaine ≈ 3000–3500 cm²/g, ≈ 90% < 45–90 µm |
| 9. Coal (fuel) preparation, if coal-fired | coal | crusher + ball or roller (bowl) mill | pulverised coal, ≈ 85% < 75 µm |

Then: cement silos, packing and despatch. Dust collectors (cyclones, ESPs, bag filters) are fitted at the kiln, cooler, mills and packing plant. (Recently the plant has been converting to the dry process to cut fuel consumption, which is high in the wet process because the slurry water must be evaporated in the kiln.)`,
          answer: String.raw`Limestone: jaw crusher (primary) → hammer/impact crusher (secondary); clay: wash mill; limestone + clay wet-ground in ball/tube mills to slurry (closed circuit) → homogenising basins → long wet rotary kiln → clinker cooler + hammer clinker breaker → clinker + gypsum ground in closed-circuit ball (tube) mill with air separator → silos/packing (coal: crusher + ball/bowl mill).` }
      ] },
    { id: "2012-13-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q4a", label: "(a)", marks: "10",
          topic: "solids-handling", sub: "Considerations for selecting solids-handling equipment",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What would be your considerations for selecting a solid handling equipment for a process industry?`,
          solution: String.raw`Selection criteria (course slides, Shamlou *Handling of Bulk Solids*):

**1. Duty**
- **Capacity** (t/h or m³/h), continuous or intermittent, feed-rate control/metering needed.
- **Conveying distance** and **path configuration**: horizontal, inclined (belt ≤ ≈ 22°, ≈ 45° with cleats), vertical (bucket elevators, screw elevators, pneumatic), routing around obstacles (pneumatic, chain).
- Number of loading and discharge points, need for feeding, discharging, metering, proportioning, weighing, blending, cooling or drying during transport.

**2. Properties of the bulk solid**
- **Particle size** and size distribution, lump size (belt width limits lumps), shape.
- **Bulk density.**
- **Flowability** (angle of repose, cohesiveness, stickiness, tendency to arch or bridge in hoppers, aeratability for pneumatic conveying).
- **Abrasiveness** (wear of belts, screws, pipe bends), **friability** (degradation, e.g. in pneumatic or screw conveyors).
- **Moisture content**, **temperature** (rubber belts limited to ≈ 120°C), **corrosiveness**, **toxicity** and dust (need enclosed conveyors), **explosibility** (inert-gas pneumatic conveying, spark-free equipment), hygroscopicity, contamination sensitivity (food, pharmaceuticals).

**3. Plant and economic factors**
- Space and layout, environmental (dust, noise), safety.
- Power consumption (pneumatic highest per tonne, belt lowest), capital cost, maintenance, reliability, labour, flexibility for future changes.

**Typical matches:** belt conveyors for high tonnage over long, horizontal or gently inclined distances (ores, coal); screw conveyors for short distances, fine/sticky material, enclosed and with mixing; bucket elevators for vertical lift of free-flowing granules; chain/drag (en-masse) conveyors for hot or abrasive solids; pneumatic conveyors for fine, dry powders along complex routes, dust-free.`,
          answer: String.raw`Capacity, distance and path (horizontal/inclined/vertical), feeding/metering points; solid properties: size, bulk density, flowability/stickiness, abrasiveness, friability, moisture, temperature, corrosiveness, toxicity, explosibility; plus space, dust, power, capital/maintenance cost and flexibility.` },
        { id: "2012-13-Q4b", label: "(b)", marks: "13",
          topic: "relief", sub: "Causes of process-vessel overpressure and its consequences",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the reasons for a process vessel to get pressurized and what might that lead to?`,
          solution: String.raw`**Causes of overpressure** (Crowl & Louvar ch. 8; course slides)

1. **Over-pressurisation from a high-pressure source** upstream or downstream: compressed-gas supply (failed regulator on an N₂ or steam line), high-pressure liquid, a **dead-headed positive-displacement pump** or compressor, control-valve failure wide open, gas blow-by from a high-pressure vessel when a level control fails.
2. **Blocked outlet:** a closed valve on the vapor or liquid outlet while feed continues.
3. **Operator error** (wrong valve line-up, wrong sequence).
4. **External fire:** heats the contents, raises the vapor pressure and generates vapor; also weakens the steel.
5. **Overfilling and hydraulic compression**: a liquid-full vessel or line with continued feed.
6. **Thermal expansion** of liquid in a **blocked-in** system (exchanger tubes, coils, pipelines heated by sun or steam).
7. **Runaway exothermic reaction** and self-heating: loss of cooling or agitation, wrong charge; it raises the vapor pressure and may generate **non-condensable gases** (N₂, CO₂) and two-phase flow.
8. **Utility failures:** loss of cooling water or reflux to a condenser, power failure, instrument-air failure.
9. **Heat-exchanger tube rupture** (high-pressure side leaking into the low-pressure side); entry of a volatile liquid into a hot vessel (water into hot oil: explosive boiling).
10. **Internal explosion/deflagration** of a flammable mixture or dust; chemical decomposition.

**What it may lead to**

- Pressure above the MAWP → plastic deformation, leaking flanges, and finally **rupture** of the vessel or piping.
- **Release** of toxic or flammable material → **fires, explosions** (vapor-cloud explosion, BLEVE if a vessel of liquefied gas is engulfed by fire), toxic exposure of personnel and the public.
- Fragments (missiles), blast waves and domino effects on neighbouring equipment.
- Injuries and fatalities, environmental damage, property loss, production loss, legal and insurance consequences.

Hence every vessel is protected by a properly sized relief device (set at or below MAWP) discharging to a safe containment/treatment system (knock-out drum, scrubber, flare).`,
          answer: String.raw`Causes: high-pressure source/failed regulator, dead-headed PD pump/compressor, blocked outlet, operator error, external fire, overfilling, thermal expansion of blocked-in liquid, runaway reaction and non-condensable generation, utility (cooling/reflux) failure, tube rupture, internal explosion. Consequences: exceeding MAWP → rupture, toxic/flammable release, fire, explosion/BLEVE, missiles, injury/fatality, environmental and economic loss.` },
        { id: "2012-13-Q4c", label: "(c)", marks: "10",
          topic: "relief", sub: "Reverse-buckling rupture disc under a safety valve",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`What type of rupture disc will you consider to install underneath the safety valve? Show the operating principle of this rupture disc with diagram.`,
          solution: String.raw`**Choice: a non-fragmenting reverse-buckling (reverse-acting) rupture disc.** A disc installed upstream of a spring safety valve (to isolate the valve from corrosive, toxic or polymerising process fluid, or to give zero leakage) must:

- open fully and **not fragment**, because pieces of a conventional forward-acting disc could lodge in the valve seat and stop it reclosing or reduce its capacity;
- have a burst pressure that is reliable close to the operating pressure (reverse-buckling discs can be run at up to ≈ 90–95% of the burst pressure and resist pressure cycling and fatigue);
- be listed with the valve (combination capacity factor, typically 0.9 if not tested);
- have a **pressure gauge, try-cock or excess-flow indicator** in the space between disc and valve, because a pinhole would let pressure build up there and raise the disc burst pressure (the disc responds to differential pressure).

![Reverse-buckling rupture disc: dome convex toward the process; at the set pressure the dome snaps through, is cut by the knife blades (or opens along scores) and the petals fold back without fragments](fig/2012-13-Q4c-sketch.svg)

**Operating principle**

1. The dome faces **convex toward the process** pressure, so the metal is in **compression** (not tension as in a forward-acting disc).
2. At the set (burst) pressure the dome becomes elastically unstable and **buckles (snaps) reversed**.
3. The inverted dome is driven onto **knife blades** in the outlet holder, or tears along **pre-scored lines** (scored type), and opens as petals hinged at the rim, which fold back against the holder; no fragments are released.
4. Because buckling depends on the dome geometry rather than on the tensile strength of a thin membrane, the burst pressure is accurate, the disc tolerates vacuum without a support and pressure cycling up to high operating ratios.

The relief valve then opens and recloses normally; the disc must be replaced after bursting.`,
          answer: String.raw`A non-fragmenting reverse-buckling disc: dome convex to the process (metal in compression) snaps through at the burst pressure and is cut by knife blades or opens along scores, petals fold back without fragments; high operating ratio (90%), fatigue-resistant; use a pressure gauge/tell-tale between disc and valve.` },
        { id: "2012-13-Q4d", label: "(d)", marks: "13⅔",
          topic: "relief", sub: "Relief device types; backpressure on conventional vs balanced valves",
          type: "sketch", syllabus: "in", repeats: ["2011-12-Q4b"],
          text: String.raw`What are the basic differences among the pressure relief devices? Why does conventional safety valve suffer more from back pressure than balanced safety valve? - Explain with diagram.`,
          solution: String.raw`**Differences among the pressure-relief devices**

| Device | Construction / action | Service | Features |
|---|---|---|---|
| **Relief valve** (spring) | opens gradually in proportion to overpressure; fully open at ≈ 25% overpressure | liquids | reseats ≈ 4% below set (blowdown) |
| **Safety valve** (spring) | **pops** fully open just above set pressure (huddling chamber) | gases and vapors (steam) | flow keeps it open; blowdown 4–7% |
| **Safety-relief valve** | acts as relief valve for liquids and as safety valve for gases | liquid, vapor or two-phase | most common in process plants |
| **Conventional spring valve** | bonnet open to the discharge | small, constant backpressure (≤ 10% of set) | set pressure and capacity change with backpressure |
| **Balanced-bellows valve** | bellows of seat area isolates disc top and spring; bonnet vented | variable or high backpressure (to 30–50%), corrosive/fouling fluids | set pressure independent of backpressure; costlier |
| **Pilot-operated valve** | main piston held shut by process pressure, released by a pilot | clean services, operating close to set pressure, large sizes | tight shut-off up to ≈ 95% of set; sensitive to dirt |
| **Rupture disc** | non-reclosing membrane bursts at set pressure | runaway reactions, deflagrations, toxic/corrosive service, in series with valves | cheap, leak-tight, large area, fast; cannot reclose; fatigue |
| Others | buckling (rupture) pins, vacuum breakers, weighted pallet vents (tanks), explosion panels | — | — |

**Why the conventional valve suffers from backpressure**

![Conventional valve: backpressure acts on top of the disc and adds to the spring force; balanced bellows: backpressure forces cancel](fig/2022-23-Q4b-sketch.svg)

- In a **conventional** valve the spring bonnet communicates with the outlet, so the backpressure $P_b$ acts on the top of the disc over the seat area $A_N$ and adds to the spring force. Force balance at opening:
$$P A_N = F_s + P_b A_N\ \Rightarrow\ P_{open} = P_{set} + P_b$$
  A **superimposed** backpressure (from other valves relieving into a common flare/scrubber header) therefore raises the opening pressure unpredictably, and **built-up** backpressure (friction in the discharge line) reduces the lift and capacity and causes chattering and seat damage. Its use is limited to backpressures ≤ ≈ 10% of set pressure.
- In a **balanced-bellows** valve the bellows, with an effective area equal to $A_N$, seals the disc holder from the outlet and the bonnet is vented to atmosphere. The backpressure now acts on equal and opposite areas and **cancels**:
$$P A_N = F_s\ \Rightarrow\ P_{open} = P_{set}\ \text{(independent of } P_b)$$
  So the set point stays constant and the capacity reduction with backpressure is much smaller. (The flow rate through the valve still depends on the backpressure, via a correction factor $K_b$.)`,
          answer: String.raw`Relief valve (liquids, gradual), safety valve (gases, pop), safety-relief (both); conventional vs balanced-bellows vs pilot-operated spring valves; rupture disc (non-reclosing). Conventional: P_b acts on top of the disc → P_open = P_set + P_b and reduced lift; balanced bellows (area = seat area, vented bonnet) cancels P_b → P_open = P_set.` }
      ] },
    { id: "2012-13-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q5a", label: "(a)", marks: "9",
          topic: "evaporation", sub: "Three reasons for operating evaporators under vacuum",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Give three reasons of using vacuum in Evaporator.`,
          solution: String.raw`1. **Larger temperature difference / smaller area.** Under vacuum the liquor boils at a lower temperature (e.g. water at 4.7 psia boils at 160°F instead of 212°F), so with the same steam the driving force ΔT is larger and the heating surface $A = q/(U\Delta T)$ is smaller; alternatively low-pressure (exhaust) steam can be used.
2. **Heat-sensitive materials.** Foods (milk, fruit juice), pharmaceuticals and organic chemicals can be concentrated at low temperature without thermal degradation, colour or flavour change.
3. **Multiple-effect operation.** The last effect is held under vacuum (condenser + ejector or vacuum pump) so that the total available ΔT between the steam and the last effect is large enough to be shared by several effects; this is what makes multiple-effect economy possible.

Further benefits: lower heat losses to the surroundings, less corrosion and scaling at lower temperature, and the vapor can be condensed in a barometric condenser with cooling water.`,
          answer: String.raw`(1) Lower boiling point → larger ΔT → less area, or use of low-pressure steam; (2) concentration of heat-sensitive products at low temperature; (3) a vacuum last effect provides the overall ΔT needed for multiple-effect operation (also less heat loss, corrosion, scaling).` },
        { id: "2012-13-Q5b", label: "(b)", marks: "3+5",
          topic: "evaporation", sub: "Typical U values; temperature drop per effect ∝ 1/U",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`(i) What are the values of overall transfer coefficient of following evaporator types: Agitated film evaporator, Long tube vertical evaporator, Horizontal tube. **(3)**

(ii) Prove that: (Temperature drop in a multiple effect evaporator) ∝ $\frac{1}{\text{overall heat transfer coefficient}}$ **(5)**`,
          solution: String.raw`**(i) Typical overall coefficients** (course slides, MSH ch. 16)

| Type | U, Btu/h·ft²·°F | U, W/m²·°C |
|---|---|---|
| Agitated-film (wiped-film), for viscous liquids | ≈ 350 at μ = 1 P (≈ 100 at 100 P) | ≈ 2000 at 1 P (600 at 100 P) |
| Long-tube vertical (natural circulation, rising film) | 200–800 | 1100–4000 |
| Horizontal-tube (boiling outside tubes) | 200–400 | 1100–2300 |

(Forced circulation 200–1200 Btu/h·ft²·°F, falling film higher.)

**(ii) ΔT of an effect ∝ 1/U**

**Assumptions:** effects of equal area (usual practice, $A_1 = A_2 = A_3 = A$); feed near its boiling point and negligible BPE and sensible-heat effects, so the vapor from each effect condenses in the next and every effect transfers about the same heat: $q_1 \approx q_2 \approx q_3 = q$.

1. Rate equations for each effect:
$$q_1 = U_1 A_1\Delta T_1,\quad q_2 = U_2 A_2\Delta T_2,\quad q_3 = U_3 A_3\Delta T_3$$
2. With $q_1 = q_2 = q_3$ and $A_1 = A_2 = A_3$:
$$U_1\Delta T_1 = U_2\Delta T_2 = U_3\Delta T_3 = \frac{q}{A} = \text{const}$$
3. Therefore
$$\Delta T_i = \frac{q/A}{U_i}\ \Rightarrow\ \Delta T_i \propto \frac{1}{U_i}$$
4. With $\sum\Delta T_i = \Delta T_{total}$ (steam temperature − last-effect temperature − ΣBPE):
$$\Delta T_i = \Delta T_{total}\,\frac{1/U_i}{\sum_j 1/U_j}$$

The effect with the lowest coefficient (usually the last, most viscous, or a fouled effect) takes the largest share of the temperature drop.`,
          answer: String.raw`(i) Agitated film ≈ 350 Btu/h·ft²·°F (≈ 2000 W/m²·°C at 1 P); long-tube vertical 200–800; horizontal tube 200–400. (ii) Equal q and A in each effect → U₁ΔT₁ = U₂ΔT₂ = U₃ΔT₃ = q/A → ΔT_i ∝ 1/U_i; ΔT_i = ΔT_total(1/U_i)/Σ(1/U_j).` },
        { id: "2012-13-Q5c", label: "(c)", marks: "8⅔",
          topic: "evaporation", sub: "Why evaporators need periodic cleaning",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why evaporators need periodic cleaning?`,
          solution: String.raw`- **Scale and fouling build up on the heating surface.** Salts of inverse solubility (CaSO₄, CaCO₃, Na₂SO₄), silica, corrosion products, burnt organic matter, proteins (milk), fibres (black liquor) and crystals deposit on the tubes as the liquor is concentrated, especially where the wall temperature is high.
- **The overall coefficient falls with time.** Even a thin scale adds a large resistance; for scale forming at a constant rate (course notes, MSH):
$$\frac{1}{U^2} = \frac{1}{U_0^2} + \beta\theta$$
  so U, and with it the capacity $q = UA\Delta T$ at fixed steam pressure and vacuum, fall continuously; to hold capacity the steam pressure must be raised until the limit is reached.
- **Economy and product quality:** fouled surfaces need hotter steam, raise operating cost, overheat heat-sensitive products, can block tubes completely (loss of circulation, uneven distribution in falling-film units), and deposits promote under-deposit corrosion and contamination of the product (sanitary duty in food plants requires cleaning anyway).
- **Optimum cycle:** integrating the rate equation gives the heat transferred in a run; the boiling time that maximises the average capacity, allowing a cleaning time $\theta_c$, is
$$\theta_{opt} = \theta_c + \frac{2}{U_0}\sqrt{\frac{\theta_c}{\beta}}$$
  so evaporators are shut down and cleaned periodically at about this interval: by boiling out with water or dilute acid/alkali, chemical cleaning (CIP), or mechanical cleaning (drilling/reaming tubes, hydroblasting).`,
          answer: String.raw`Scale and fouling deposit on the tubes, so U falls with time (1/U² = 1/U₀² + βθ) and capacity, economy and product quality drop and tubes may plug or corrode; the unit is cleaned at the optimum cycle θ_opt = θ_c + (2/U₀)√(θ_c/β) by boiling out, chemical or mechanical cleaning.` },
        { id: "2012-13-Q5d", label: "(d)", marks: "10",
          topic: "evaporation", sub: "Evaporator for corrosive black liquor, small range, no salting",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Corrosive "black liquor" used in sulfate pulp mills is to be concentrated through a small range. No salting. No foam. Recommend a type of evaporator and briefly give the reason.`,
          solution: String.raw`**Recommendation: a long-tube vertical (LTV) evaporator** (natural-circulation rising-film, or its falling-film version), with the tubes in a corrosion-resistant alloy (stainless steel) — the standard multiple-effect black-liquor evaporator of kraft (sulfate) mills.

**Reasons**

- **Small concentration range:** the liquor passes through the tubes once (or with little recirculation); a long-tube unit gives a high coefficient (200–800 Btu/h·ft²·°F) at low ΔT and is ideal for once-through concentration over a modest range, in multiple effects for economy.
- **No salting:** no crystals deposit, so forced circulation (needed to suppress boiling and keep crystals in suspension for salting liquors) is not necessary; natural circulation in long tubes is enough, and no circulating pump is needed (low cost).
- **No foam:** foaming is no problem (LTV units would even break foam with the high vapor velocity and the vapor-head baffle).
- **Corrosive liquor:** the long-tube unit has a simple tubular heating element and a small body, so only the tubes, tube sheets and vapor head need to be made of expensive corrosion-resistant material (stainless steel / special alloys); cheaper than a corrosion-resistant forced-circulation unit with its pump and large circulating piping.
- **Moderate viscosity and heat sensitivity:** the liquor is in the tubes for a short time.

(When black liquor is taken to very high solids, near its salting point, forced-circulation or falling-film concentrators are used for the final step; that is not required here.)`,
          answer: String.raw`Long-tube vertical (rising- or falling-film) evaporator in stainless steel: high U and once-through operation suit a small concentration range; no salting so forced circulation is unnecessary; no foam problem; simple tubular element keeps the amount of costly corrosion-resistant alloy small.` },
        { id: "2012-13-Q5e", label: "(e)", marks: "11",
          topic: "evaporation", sub: "Triple-effect: boiling point in the second effect",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q2c"],
          text: String.raw`A triple effect evaporator is concentrating liquid that has no appreciable elevation in boiling point. The temperature of heating steam in the 1st effect is 230°F, the boiling point of solution in the last effect is 125°F. The overall heat transfer coefficients are:

1st effect: $U_1$ = 500 Btu/h/ft²°F. 2nd effect: $U_2$ = 300 Btu/h/ft²°F and 3rd effect: $U_1$ = 500 Btu/h/ft²°F.

At what temperature will the liquid boil in the 2nd effect?`,
          solution: String.raw`**Given:** $T_s$ = 230°F, $T_3$ = 125°F, no BPE; $U_1$ = 500, $U_2$ = 300, $U_3$ = 500 Btu/h·ft²·°F (the printed "$U_1$" for the 3rd effect is taken as $U_3$).

**Find:** $T_2$.

**Assumptions:** equal heating areas; equal heat transferred in each effect (feed near its boiling point, latent heats about equal), so $\Delta T_i \propto 1/U_i$ (part b-ii).

1. **Total available temperature drop:** $\Sigma\Delta T = 230 - 125 = 105^\circ$F.

2. **Distribute in proportion to 1/U:**
$$\sum\frac{1}{U} = \frac{1}{500} + \frac{1}{300} + \frac{1}{500} = 0.002 + 0.00333 + 0.002 = 0.00733$$
$$\Delta T_1 = 105\,\frac{0.002}{0.00733} = 28.6^\circ\mathrm{F},\quad \Delta T_2 = 105\,\frac{0.00333}{0.00733} = 47.7^\circ\mathrm{F},\quad \Delta T_3 = 28.6^\circ\mathrm{F}$$

3. **Boiling temperatures:**
$$T_1 = 230 - 28.6 = 201.4^\circ\mathrm{F},\qquad T_2 = 201.4 - 47.7 = 153.6^\circ\mathrm{F}$$
   Check: $T_3 = 153.6 - 28.6 = 125^\circ$F ✔.

**Result:** the liquid boils in the second effect at about **154°F** (first effect 201°F).`,
          answer: String.raw`ΔT ∝ 1/U: ΔT₁ = 28.6, ΔT₂ = 47.7, ΔT₃ = 28.6°F (sum 105°F) → T₁ = 201.4°F, T₂ ≈ 153.6°F ≈ 154°F.` }
      ] },
    { id: "2012-13-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q6a", label: "(a)", marks: "11",
          topic: "compressors", sub: "Centrifugal compressor characteristic curves explained",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Draw a typical centrifugal compressor characteristic curve and explain it.`,
          solution: String.raw`![Centrifugal compressor map: pressure ratio (head) vs inlet flow at several speeds, surge line, stonewall (choke) limit, efficiency contours and a system curve](fig/2012-13-Q6a-sol.svg)

**Explanation**

- **Axes:** head (or discharge pressure, pressure ratio) against inlet volumetric (or corrected mass) flow; one curve for each speed (or inlet-guide-vane setting); power and efficiency are often plotted below.
- **Shape of each speed line:** from the right, as flow decreases the head rises (fairly flat curve, typical of backward-curved impellers), reaches a maximum and then flattens or falls. Head at a given flow ∝ (tip speed)², so the curves move up with speed ($Q \propto N$, $H \propto N^2$, $P \propto N^3$ — fan laws).
- **Surge limit (left):** the locus of the peaks of the speed lines. To the left of it the flow is unstable: the compressor cannot hold the discharge pressure, flow reverses and oscillates (surge). Operation is kept to the right of a **surge control line** about 10% away.
- **Stonewall / choke (right):** at high flow the gas reaches sonic velocity in the impeller or diffuser throat; head and efficiency drop steeply and the flow cannot be increased further.
- **Efficiency:** maximum near the middle of the stable range (best-efficiency point), falling toward surge and choke; contours of constant efficiency (islands) are drawn on the map.
- **Operating point:** intersection of the compressor curve with the **system (resistance) curve**; changing speed, inlet guide vanes or suction throttling moves the operating point. The stable operating range (turndown) between surge and stonewall is typically 70–100% of design flow at constant speed.
- Unlike a reciprocating compressor (nearly constant flow, any pressure), the centrifugal machine delivers a large flow change for a small pressure change near the rated point, so the delivered flow is very sensitive to the system resistance and gas molecular weight (head ∝ $ZRT/M$ for a given pressure ratio).`,
          answer: String.raw`Head/pressure ratio vs inlet flow at several speeds (H ∝ N², Q ∝ N): rising head as flow falls to a peak; surge line through the peaks (unstable to the left, operate ≥ 10% away), stonewall/choke at high flow (sonic), efficiency islands with BEP mid-range; operating point where it meets the system curve.` },
        { id: "2012-13-Q6b", label: "(b)", marks: "10⅔",
          topic: "compressors", sub: "Surge in centrifugal compressors: causes, detection, control",
          type: "theory", syllabus: "partial", repeats: ["2018-19-Q3f", "2016-17-Q1c", "2014-15-Q6b"],
          text: String.raw`What do you mean by "Surge" for a centrifugal compressor? State its causes and how it can be identified and controlled?`,
          solution: String.raw`**Surge** is the unstable operation of a centrifugal (or axial) compressor at low flow, to the left of the peak of its head–flow curve. The compressor can no longer develop the pressure existing in the discharge system; the flow momentarily **reverses** through the impeller, the discharge pressure falls, forward flow resumes, pressure builds up again, and the cycle repeats at a frequency of about 0.5–10 Hz (large pressure and flow oscillations). It can damage the thrust bearing, seals, impeller and blades and overheat the gas.

**Causes**

- Flow through the machine reduced below the surge flow at the operating speed: throttled discharge or suction, reduced process demand, a blocked or closed downstream valve, fouled downstream equipment.
- Increase in discharge (system) pressure or resistance above the maximum head the machine can give.
- Change of gas properties: lower molecular weight or higher suction temperature (head required rises for the same pressure ratio), lower suction pressure.
- Reduction of speed (driver trip, steam-turbine slowdown) while the system pressure stays high.
- Fouled impellers/diffusers, faulty or slow anti-surge control, start-up and shut-down transients, parallel compressors badly load-shared.

**Identification**

- Loud periodic **noise** (roaring, "whoosh", knocking).
- Large **fluctuations of discharge pressure and flow** (flow meter swinging, even negative), motor **current/power swings**.
- High **vibration** and **axial (thrust) displacement**, rising thrust-bearing temperature.
- **Temperature rise at the suction** (hot gas flowing back) and at the discharge.
- On the performance map: operating point at or to the left of the surge line.

**Control**

- **Anti-surge control:** measure flow (ΔP across an orifice/venturi at suction) and pressure ratio; keep the operating point to the right of a **surge control line** set about 10% to the right of the surge line by opening a **recycle (spill-back) valve** from discharge (via a cooler) to suction, or a **blow-off valve** to atmosphere for air.
- Fast-acting valve, controller with margin and derivative action; hot-gas bypass for fast transients.
- Change the compressor curve: **variable speed** drive, **inlet guide vanes**, suction throttling (moves the surge point to lower flow).
- Good design: adequate turndown (number of impeller stages, vaned/vaneless diffusers), avoiding operation of parallel units at low load, check valves on the discharge, proper start-up procedures.`,
          answer: String.raw`Surge = flow reversal and oscillation at low flow left of the head-curve peak, when the machine cannot overcome the discharge pressure. Causes: low throughput, high system resistance, low MW/high suction T, speed drop, fouling. Signs: noise, swinging pressure/flow/amps, vibration, thrust movement, suction temperature rise. Control: anti-surge recycle/blow-off valve with a 10% margin control line, variable speed, IGVs, suction throttling.` },
        { id: "2012-13-Q6c", label: "(c)", marks: "6",
          topic: "ejectors", sub: "Uses of ejectors other than creating vacuum",
          type: "theory", syllabus: "in", repeats: ["2014-15-Q6d"],
          text: String.raw`Other than creating vacuum, ejectors are used for many purposes. Explain it.`,
          solution: String.raw`An ejector uses the momentum of a high-velocity motive jet (steam, air, gas or liquid) to entrain and pump a second fluid. Besides producing vacuum it is used as:

- **Thermocompressor (vapor recompression):** low-pressure vapor (e.g. from an evaporator effect) is compressed by high-pressure steam to a useful pressure and reused as heating steam: saves steam in evaporators, dryers and paper machines.
- **Compressor / booster** for gases: raising a low-pressure gas stream to a header pressure, flare-gas recovery, gas mixing and transfer.
- **Liquid jet pump / eductor:** pumping liquids (well water, sump drainage, boiler feed in locomotive injectors), transferring corrosive acids and slurries where pumps would corrode or wear.
- **Mixer:** blending gases (burner air–gas mixers, inspirators), mixing liquids in tanks (tank eductors), adding chemicals in dosing systems.
- **Heater:** steam-jet heaters warm a liquid by direct steam injection (sparging); desuperheaters.
- **Solids conveying:** pneumatic conveying of powders and granules (venturi feeders), sandblasting.
- **Scrubbing and gas cleaning:** venturi/ejector scrubbers that both move the gas and absorb or remove particles with the motive liquid (fume scrubbers, the jet itself provides the draft).
- **Priming** of centrifugal pumps and siphons, evacuation of condensers at start-up ("hogging" ejectors), ventilation of hazardous spaces.`,
          answer: String.raw`Thermocompressors (vapor recompression in evaporators), gas boosters/compressors, liquid jet pumps and eductors, mixers (gas or liquid), steam-jet heaters/desuperheaters, pneumatic conveying of solids, venturi ejector scrubbers, pump priming and start-up hogging.` },
        { id: "2012-13-Q6d", label: "(d)", marks: "9",
          topic: "compressors", sub: "Actual vs ideal P–V diagram of reciprocating compressor",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Draw the P-V diagram of an actual reciprocating compressor and compare it with that an ideal one.`,
          solution: String.raw`![P–V diagrams of a single-stage reciprocating compressor: ideal cycle with clearance (sharp corners, polytropic lines) and actual indicator diagram (suction below and discharge above line pressure, valve flutter, rounded corners)](fig/2012-13-Q6d-sol.svg)

**Ideal cycle (with clearance)**

1. 1→2 **compression** along a polytropic (or isentropic) line $PV^n$ = const from suction pressure $P_1$ to discharge pressure $P_2$.
2. 2→3 **discharge** at constant $P_2$ as the piston moves to the end of the stroke (the clearance volume $V_3$ remains).
3. 3→4 **re-expansion** of the gas trapped in the clearance from $P_2$ to $P_1$.
4. 4→1 **suction** at constant $P_1$; volume drawn in = $V_1 - V_4$.

Work per cycle $W = \frac{n}{n-1}P_1(V_1 - V_4)\left[(P_2/P_1)^{(n-1)/n} - 1\right]$; volumetric efficiency $\eta_V = 1 - c\left[(P_2/P_1)^{1/n} - 1\right]$ (c = clearance fraction).

**Actual (indicator) diagram — differences**

| Feature | Ideal | Actual |
|---|---|---|
| Suction line | at line pressure $P_1$ | **below** $P_1$: pressure drop through suction valve and passages, wavy due to valve flutter |
| Discharge line | at $P_2$ | **above** $P_2$: discharge-valve spring force and passage losses; overshoot at valve opening |
| Corners | sharp | rounded: valves do not open/close instantly; leakage |
| Compression/expansion | reversible polytropic | heat transfer with the cylinder walls, gas heated during suction (lower density) |
| Area (work) | minimum for the duty | larger (extra areas above $P_2$ and below $P_1$ = valve losses) |
| Capacity | $V_1 - V_4$ at $P_1$, $T_1$ | lower: suction pressure drop, suction heating, leakage past rings and valves |

So the actual machine needs more power and delivers less gas than the ideal; the ratio of ideal to actual work is the compression efficiency, and the ratio of actual to swept volume the actual volumetric efficiency.`,
          answer: String.raw`Ideal: compression 1→2 (PVⁿ), discharge at P₂, clearance re-expansion 3→4, suction at P₁ with sharp corners. Actual: suction below and discharge above line pressure (valve and passage losses, flutter), rounded corners, heat transfer and leakage → larger area (more work) and smaller delivered volume (lower volumetric efficiency).` },
        { id: "2012-13-Q6e", label: "(e)", marks: "10",
          topic: "ejectors", sub: "Features that make ejectors attractive industrially",
          type: "theory", syllabus: "in", repeats: ["2011-12-Q8a"],
          text: String.raw`Write the features of ejectors that make it attractive for industrial application.`,
          solution: String.raw`**Attractive features (Ludwig ch. 6)**

1. **No moving parts:** nozzle, suction chamber and diffuser only; no lubrication, no seals, no wear except slow nozzle/diffuser erosion; very reliable and long-lived, little maintenance.
2. **Low capital cost** and simple installation; small and light for the capacity; can be mounted in any position (directly on the vessel or condenser).
3. **Handles very large volumes at low absolute pressure** (to below 0.05 mmHg abs with 5–7 stages), which mechanical pumps do only with very large machines.
4. **Handles condensable vapors, wet, dirty, corrosive or slug-containing gases** without damage: process vapors condense in the intercondensers.
5. **Can be made of almost any material:** cast iron, carbon and stainless steel, special alloys, graphite, porcelain, glass, plastics (PVDF, PTFE-lined) for corrosive service.
6. **Uses available utilities:** low or medium pressure steam (or plant air, gas, or liquid) as the motive fluid; the motive steam can be condensed and recovered.
7. **Simple operation and control:** quick start-up (hogging ejectors evacuate a system rapidly), stable operation over a wide range, easy staging (one, two or more stages with inter- and after-condensers) to fit the required vacuum.
8. **Safe for flammable or explosive gases:** no sparks, no hot surfaces.

**Limitations:** low thermodynamic efficiency (high steam and cooling-water consumption), noise, performance is fixed by the design point (sensitive to steam pressure and backpressure), contamination of the condensate with process vapors.`,
          answer: String.raw`No moving parts (reliable, no lubrication, low maintenance), low cost, compact, any mounting; handles large volumes at very low pressures and wet, dirty, corrosive or condensable gases; any material of construction (graphite, plastics, alloys); uses plant steam/air; easy staging and quick start-up; spark-free. Drawback: low efficiency, steam use.` }
      ] },
    { id: "2012-13-Q7", q: 7, section: "B",
      stem: String.raw`Q7 is printed with parts (a), (c) and (d) only.`,
      parts: [
        { id: "2012-13-Q7a", label: "(a)", marks: "20",
          topic: "pumps", sub: "Contents of a centrifugal pump specification (data) sheet",
          type: "theory", syllabus: "in", repeats: ["2013-14-Q7a"],
          text: String.raw`Discuss the Specification sheet of Pump.`,
          solution: String.raw`A pump specification (data) sheet is the document the process engineer fills in to define the duty so that vendors can quote and select a pump; vendors complete the performance and construction sections (Ludwig ch. 3, API 610 data sheet).

**1. General / identification**
- Plant, item (tag) number, service (e.g. "reactor feed pump"), number required (operating + spare), driven by (motor, steam turbine), operation (continuous, intermittent, parallel/series).

**2. Liquid and operating conditions (process engineer)**
- Liquid name and composition; corrosive/erosive components, solids (size, %), toxicity, flammability.
- **Pumping temperature** (normal, max, min), **specific gravity** at pumping temperature, **vapor pressure**, **viscosity**, specific heat.
- **Capacity**: normal, rated (design, usually 110–120% of normal), minimum flow.
- **Suction pressure** (normal, max), **discharge pressure**, **differential pressure and head** (ft or m of liquid); calculation from the system (static heads, line and equipment losses, control-valve ΔP).
- **NPSH available** (with the basis: liquid level, vessel pressure, line losses), hydraulic power.
- Site data: indoor/outdoor, ambient, electrical area classification, utilities available.

**3. Performance (vendor)**
- Pump type and size (e.g. 3 × 4 × 13 = discharge × suction × max impeller), number of stages, speed (rpm), rated impeller and maximum/minimum impeller diameters, **efficiency**, **brake horsepower** at rated and at end of curve, **NPSH required**, shut-off head, minimum continuous stable flow, rotation, proposal curve number, specific speed, suction specific speed.

**4. Construction**
- Casing type (horizontal/vertical, end-suction, between-bearings, radially/axially split, volute/diffuser), mounting (centreline, foot), nozzle sizes, ratings and facings, casing design pressure and hydrotest pressure, impeller type (closed, open, semi-open), wear rings, bearings and lubrication, couplings, baseplate.
- **Shaft seal**: packing or mechanical seal (single/double/tandem), seal flush plan (API plan number), quench, cooling.

**5. Materials of construction**
- Casing, impeller, shaft, sleeves, wear rings, seal faces; chosen for corrosion/erosion (e.g. API material class).

**6. Driver**
- Motor kW/hp, voltage, phase, frequency, enclosure, speed; or steam turbine data (steam conditions, speed range).

**7. Inspection, testing and miscellaneous**
- Performance test, NPSH test, hydrotest, witness/observed tests, painting, shipment, weights, accessories (strainers, gauges), standards (API 610, ANSI/ASME B73), and notes (heating/cooling jackets, special requirements).`,
          answer: String.raw`Identification/service; liquid properties (temperature, SG, vapor pressure, viscosity, corrosive/solids); capacity (normal, rated, min), suction/discharge pressure, differential head, NPSH available; vendor performance (type/size, speed, impeller, efficiency, BHP, NPSHr, shut-off head, min flow); construction (casing, impeller, bearings, seals/flush plan); materials; driver; tests and standards.` },
        { id: "2012-13-Q7c", label: "(c)", marks: "20",
          topic: "mixing", sub: "Dimensional analysis: power number as function of Reynolds number",
          type: "derivation", syllabus: "in", repeats: ["2018-19-Q4b", "2017-18-Q2d", "2016-17-Q3b", "2013-14-Q7b"],
          text: String.raw`Prove that Power Number is a function of Reynolds Number.`,
          solution: String.raw`**Variables.** For a given impeller type and geometrically similar tanks (all lengths expressed through shape factors $S_1 = D_a/D_t$, $S_2 = E/D_t$, ... fixed), the power P drawn by the impeller depends on

$$P = f(n, D_a, \rho, \mu, g)$$

(n = speed, r/s; $D_a$ = impeller diameter; ρ, μ = liquid density and viscosity; g, because the free surface/vortex is shaped by gravity).

**Dimensional analysis (Rayleigh / Buckingham π).** Six variables, three dimensions (M, L, T), so 6 − 3 = 3 dimensionless groups. Write

$$P = K\,n^a D_a^b \rho^c \mu^d g^e$$

Dimensions: P [M L² T⁻³], n [T⁻¹], $D_a$ [L], ρ [M L⁻³], μ [M L⁻¹ T⁻¹], g [L T⁻²].

| Dimension | Equation |
|---|---|
| M | 1 = c + d |
| L | 2 = b − 3c − d + e |
| T | −3 = −a − d − 2e |

Solving for a, b, c in terms of d and e: c = 1 − d; a = 3 − d − 2e; b = 2 + 3c + d − e = 5 − 2d − e. Hence

$$P = K\,n^{3-d-2e} D_a^{5-2d-e}\rho^{1-d}\mu^{d}g^{e}$$

Grouping terms with the same exponent:

$$\frac{P}{\rho n^3 D_a^5} = K\left(\frac{\mu}{D_a^2 n\rho}\right)^{d}\left(\frac{g}{n^2 D_a}\right)^{e}$$

i.e. (with $g_c$ in engineering units)

$$N_P = \frac{P g_c}{\rho n^3 D_a^5} = \psi\left(N_{Re}, N_{Fr}\right),\qquad N_{Re} = \frac{D_a^2 n\rho}{\mu},\ N_{Fr} = \frac{n^2 D_a}{g}$$

For a family of geometrically similar systems the shape factors enter as additional parameters: $N_P = \psi(N_{Re}, N_{Fr}, S_1, S_2, \dots, S_n)$.

**Elimination of the Froude number.** The Froude number accounts only for the vortex (gravity acting on the free surface). In **baffled** tanks (or with off-centre/side-entering impellers, or at $N_{Re}$ < 300 in unbaffled tanks) no vortex forms, so gravity has no effect and the exponent e = 0:

$$\boxed{N_P = \psi(N_{Re})}\quad\text{(for fixed geometry)}$$

This is the power-number curve used for design (MSH Fig. 9.13/9.14).

**Limiting forms**
- Laminar region ($N_{Re}$ < 10): viscous forces dominate, P is independent of ρ (c = 0, so d = 1): $N_P = K_L/N_{Re}$, i.e. $P = K_L n^2 D_a^3\mu$.
- Fully turbulent region ($N_{Re}$ > 10⁴ in baffled tanks): P independent of μ (d = 0): $N_P = K_T$ = constant, $P = K_T n^3 D_a^5\rho$ (e.g. $K_T$ ≈ 5.8 for a six-blade disk turbine with four baffles).
- In unbaffled tanks at high $N_{Re}$ the Froude effect is kept by plotting $\Phi = N_P/N_{Fr}^m$ with $m = (a - \log N_{Re})/b$.`,
          answer: String.raw`P = f(n, D_a, ρ, μ, g) → by dimensional analysis P/(ρn³D_a⁵) = ψ(D_a²nρ/μ, n²D_a/g, shape factors). In baffled tanks there is no vortex, so the Froude number drops out: N_P = ψ(N_Re) (laminar N_P = K_L/N_Re, turbulent N_P = K_T).` },
        { id: "2012-13-Q7d", label: "(d)", marks: "6⅔",
          topic: "pumps", sub: "Pump type for 2500 gal/min at 50 ft head via specific speed",
          type: "numerical", syllabus: "in", repeats: ["2017-18-Q3b", "2014-15-Q7b", "2011-12-Q8d"],
          text: String.raw`It is necessary to pump 2500 gal/min against a head of 50 ft. What type of pump might be used?

Figure for Q7(d) (attached to the paper): characteristic curves and specific speeds for various impellers (Worthington Pumps): radial-flow impellers (standard centrifugal pump) operate at the lowest specific speeds (up to 4200); mixed-flow impellers, which produce both axial and radial flow, at higher specific speeds (4200 to 9000); axial-flow impellers at the highest specific speeds (above 9000). Scale of specific speed 500–20,000.`,
          solution: String.raw`**Given:** Q = 2500 gal/min, H = 50 ft.

**Find:** a suitable pump type.

**Assumptions:** single-stage, single-suction pump driven by a standard induction motor (60 Hz: 3500, 1750, 1150 r/min); specific speed in US units $N_s = n\sqrt{Q}/H^{3/4}$ (n in r/min, Q in gal/min, H in ft), as on the attached Worthington chart.

1. **Specific speed:** $\sqrt{Q} = \sqrt{2500} = 50$; $H^{3/4} = 50^{0.75} = 18.80$.

| n, r/min | $N_s = n(50)/18.80$ | Range on the chart |
|---|---|---|
| 1150 | 3060 | radial (upper end) |
| 1750 | 4650 | **mixed flow** (4200–9000) |
| 3500 | 9310 | axial flow (> 9000) |

2. **Choice.** A large flow at a low head gives a high specific speed. At the usual 1750 r/min, $N_s$ ≈ 4650 falls in the **mixed-flow** field of the chart, where the impeller produces both axial and radial flow and the efficiency is high (≈ 85–90% for this size). A slower 1150 r/min radial (Francis-vane) centrifugal pump would need a large impeller near the top of its range; a 3500 r/min unit would be an axial (propeller) pump with poor suction performance (high NPSH required) at this head.

![How to read the specific-speed chart: Ns ≈ 4650 at 1750 rpm → mixed-flow field (4200–9000)](fig/2012-13-Q7d-read.svg)

**Result:** a single-stage **mixed-flow centrifugal pump** at about 1750 r/min ($N_s$ ≈ 4650) — e.g. a vertical mixed-flow (or a large double-suction volute) pump; check NPSH available.`,
          answer: String.raw`N_s = n√Q/H^0.75 = n(50)/18.8: 3060 at 1150 rpm, 4650 at 1750 rpm, 9310 at 3500 rpm → at 1750 rpm N_s ≈ 4650 lies in the 4200–9000 mixed-flow field → use a mixed-flow centrifugal pump.` }
      ] },
    { id: "2012-13-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q8a", label: "(a)", marks: "10⅔",
          topic: "crystallization", sub: "Solubility curve and crystallizer choice for table salt",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Explain with the help of solubility curve the selection of crystallizer for producing table salt from aqueous solution.`,
          solution: String.raw`![Solubility curves (g per 100 g water vs °C): the NaCl curve is almost flat, KNO₃ rises steeply (data from Perry's Handbook)](fig/2012-13-Q8a-sol.svg)

**Solubility of NaCl.** NaCl dissolves to 35.7 g/100 g water at 0°C and only 39.2 g/100 g water at 100°C: the curve is **almost flat** (solubility nearly independent of temperature). Contrast KNO₃ (13 → 246 g/100 g water over the same range) or Na₂SO₄·10H₂O, whose solubility rises steeply.

**Consequence for the method of producing supersaturation**

1. **Cooling is useless for NaCl.** Cooling 100 kg of brine saturated at 100°C (28.2 wt% NaCl, 71.8 kg water) to 20°C (35.9 g/100 g):
$$\text{crystals} = 71.8\left(\frac{39.2 - 35.9}{100}\right) = 2.4\ \mathrm{kg} \approx 8\%\ \text{of the dissolved salt}$$
   Cooling crystallizers (tank, Swenson–Walker, scraped-surface) are therefore chosen only for steep-curve solutes like KNO₃ or copperas.
2. **Supersaturation must be created by evaporating the solvent.** Each kg of water evaporated deposits ≈ 0.36–0.39 kg NaCl at any temperature, so table salt is made in **evaporative crystallizers**: multiple-effect vacuum evaporator-crystallizers (forced-circulation "salting" evaporators with a salt-settling leg/elutriation leg), **Oslo (Krystal) evaporative crystallizers** or **draft-tube-baffle (DTB)** units, giving uniform cubic crystals of controlled size; or solar salt pans for sea salt.
3. Forced circulation is used because the heating surface would otherwise be covered with salt (salting): the liquor is heated in an external exchanger without boiling and flashes in the body; the crystals grow in a suspension that is kept agitated, and the product is classified and removed from the bottom, washed and centrifuged, then dried.
4. Vacuum operation lowers the boiling temperature, allows multiple effects (economy) and some flashing (adiabatic) yield.

**Summary:** flat solubility curve → evaporative (vacuum, forced-circulation, Oslo or DTB) crystallizer; steep curve → cooling crystallizer; intermediate → vacuum (adiabatic flash-cooling) crystallizer.`,
          answer: String.raw`NaCl solubility is almost flat (35.7 → 39.2 g/100 g water, 0–100°C): cooling from 100 to 20°C recovers only ≈ 8% of the salt, so supersaturation must be made by evaporation → multiple-effect vacuum forced-circulation evaporator-crystallizers / Oslo or DTB evaporative crystallizers (cooling crystallizers only for steep-curve solutes such as KNO₃).` },
        { id: "2012-13-Q8b", label: "(b)", marks: "12",
          topic: "crystallization", sub: "Oslo evaporative crystallizer: labelled schematic",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the schematic diagram of Oslo evaporative crystallizer and identify each part.`,
          solution: String.raw`![Oslo (Krystal) evaporative crystallizer: vaporizer (flash chamber), central downcomer, fluidised-bed suspension chamber, circulating pump, external heater, feed, product and vapor connections](fig/2012-13-Q8b-sketch.svg)

**Parts and their functions**

1. **Heater (external shell-and-tube exchanger):** steam heats the circulating mother liquor a few degrees. The liquor is under enough hydrostatic head that it does **not boil** in the tubes, so no salt deposits on the heating surface.
2. **Vaporizer / flash chamber (upper vessel):** the heated liquor rises and partly flashes; the evaporated water leaves through the **vapor outlet with entrainment separator** to the condenser and vacuum system. Evaporation makes the liquor **supersaturated** (no crystals present in this chamber).
3. **Central downcomer (barometric leg/tube):** carries the supersaturated liquor down to the bottom of the suspension chamber.
4. **Crystallizing (suspension) chamber with fluidised bed:** the supersaturated liquor flows upward through a bed of growing crystals kept in **classified fluidised suspension**; the supersaturation is released by **growth** on the crystals (little nucleation), the largest crystals stay at the bottom, the small ones higher up.
5. **Mother-liquor (circulation) outlet** near the top of the suspension chamber: nearly saturated, crystal-free liquor is drawn off.
6. **Circulating pump:** returns this liquor, together with the **feed** that is added to the circulation line, through the heater to the vaporizer.
7. **Product outlet (bottom of the suspension chamber):** a slurry of large, uniform crystals is withdrawn, then thickened, centrifuged and dried.
8. **Fines trap / overflow** (optional) to remove excess small crystals.

**Features:** separation of the zones of supersaturation and crystal growth gives large, uniform, classified crystals (NaCl, ammonium sulphate, sodium nitrate); low secondary nucleation; heater kept free of scale.`,
          answer: String.raw`Parts: feed into the circulation line, circulating pump, external steam heater (no boiling), vaporizer/flash chamber with vapor outlet to condenser (supersaturation generated), central downcomer, fluidised suspension (growth) chamber with classified crystal bed, mother-liquor outlet near the top back to the pump, product crystal outlet at the bottom.` },
        { id: "2012-13-Q8c", label: "(c)", marks: "15",
          topic: "drying", sub: "Principle of drying: moisture terms and drying-rate curve",
          type: "theory", syllabus: "in", repeats: ["2017-18-Q4c"],
          text: String.raw`Describe the "Principle of Drying"`,
          solution: String.raw`**Drying** is the removal of relatively small amounts of water (or other liquid) from a solid by **simultaneous heat and mass transfer**: heat is supplied to the wet solid (by convection from hot gas, conduction from hot surfaces, or radiation) to vaporise the liquid, and the vapor is carried away by the gas or a vacuum.

**Moisture terms** (dry basis, X = kg water/kg dry solid)

- **Equilibrium moisture $X^*$:** moisture in equilibrium with gas of given humidity and temperature; cannot be removed by that gas.
- **Free moisture $X - X^*$:** removable by the gas.
- **Bound moisture:** exerts a vapor pressure less than that of pure water (held in capillaries, adsorbed, in cell walls, in solution); **unbound moisture:** exerts the full vapor pressure of water.
- **Critical moisture $X_c$:** where the constant-rate period ends.

**Drying-rate curve** (constant drying conditions: gas T, humidity, velocity fixed)

![Typical batch drying curves: moisture vs time and drying rate vs free moisture, showing the initial adjustment, constant-rate period, critical moisture and the falling-rate periods](fig/2012-13-Q8c-sol.svg)

1. **Initial adjustment (A–B):** the solid heats up (or cools) to the wet-bulb temperature.
2. **Constant-rate period (B–C):** the surface is wet with unbound water; evaporation is like that from a free water surface at the **wet-bulb temperature** $T_w$. The rate is controlled by **external** heat and mass transfer and is independent of the solid:
$$R_c = \frac{h(T - T_w)}{\lambda_w} = k_y M_B(\mathcal{H}_w - \mathcal{H})$$
3. **Critical point C** ($X_c$): the surface begins to dry out.
4. **First falling-rate period (C–D):** unsaturated surface drying; the wetted area decreases, the rate falls roughly linearly with X.
5. **Second falling-rate period (D–E):** internal movement of moisture controls — **liquid diffusion** (Fick's law, $X$ varies with depth; rate ∝ $1/s^2$ of thickness), **capillary flow** in porous granular solids, or vapor diffusion; the solid temperature rises toward the gas temperature; drying stops at $X^*$.

**Drying time** (constant conditions): constant-rate period $t_c = \frac{m_s(X_1 - X_c)}{A R_c}$; falling-rate period with a linear rate $t_f = \frac{m_s(X_c - X^*)}{A R_c}\ln\frac{X_c - X^*}{X_2 - X^*}$.

**Factors affecting drying:** gas temperature, humidity and velocity; area of the solid exposed (thin layers, particles in through-circulation); thickness; nature of the solid (porous, colloidal, crystalline); case hardening; heat sensitivity — these govern the choice of dryer (tray, rotary, spray, fluid-bed, drum, freeze).`,
          answer: String.raw`Drying = simultaneous heat and mass transfer removing liquid from a solid. Equilibrium, free, bound/unbound and critical moisture; drying-rate curve: warm-up, constant-rate period at T_wb (R_c = h(T−T_w)/λ_w, external control), critical moisture, falling-rate periods controlled by internal diffusion/capillary flow down to X*; drying times t_c = m_s(X₁−X_c)/(AR_c) and t_f by integration.` },
        { id: "2012-13-Q8d", label: "(d)", marks: "12",
          topic: "drying", sub: "Calculation steps for designing an adiabatic direct-contact dryer",
          type: "theory", syllabus: "in", repeats: ["2014-15-Q8c", "2011-12-Q6c"],
          text: String.raw`Write down the calculation steps in designing an adiabatic direct contact dryer.`,
          solution: String.raw`Method of MSH ch. 24 (used in the rotary-dryer example of the slides; see 2022-23 Q3a for a worked case).

1. **Specify the duty:** dry-solid rate $m_s$, inlet and outlet moisture $X_a$, $X_b$ (dry basis), solid specific heat, solid inlet temperature and the maximum allowable solid temperature; inlet gas temperature $T_{hb}$ and humidity $\mathcal{H}_b$; allowable gas mass velocity G.
2. **Choose the flow arrangement:** cocurrent for heat-sensitive solids (hot gas meets wet solid), countercurrent for best thermal efficiency.
3. **Wet-bulb temperature** $T_w$ of the inlet gas from the humidity chart (adiabatic-cooling line); the solid stays near $T_w$ while unbound water evaporates.
4. **Outlet gas temperature** from an assumed number of heat-transfer units (economic range $N_t$ = 1.5–2.5):
$$N_t = \ln\frac{T_{hb} - T_w}{T_{ha} - T_w}\ \Rightarrow\ T_{ha} = T_w + (T_{hb} - T_w)e^{-N_t}$$
   and fix the solid outlet temperature $T_{sb}$ (at most the allowable value).
5. **Water evaporated:** $m_s(X_a - X_b)$.
6. **Heat load per unit dry solid:** heat solid and its water to $T_w$, vaporise, heat the dry solid and residual water to $T_{sb}$, superheat the vapor to $T_{ha}$:
$$\frac{q_T}{m_s} = c_{ps}(T_{sb} - T_{sa}) + X_a c_{pL}(T_w - T_{sa}) + (X_a - X_b)\lambda_w + X_b c_{pL}(T_{sb} - T_w) + (X_a - X_b)c_{pv}(T_{ha} - T_w)$$
7. **Gas rate** from the gas-side heat balance (adiabatic):
$$m_g(1+\mathcal{H}_b) = \frac{q_T}{c_s(T_{hb} - T_{ha})},\qquad c_s = 1.005 + 1.88\mathcal{H}\ \mathrm{kJ/kg\,K}\ (0.24 + 0.45\mathcal{H}\ \mathrm{Btu/lb\,°F})$$
8. **Outlet humidity:** $\mathcal{H}_a = \mathcal{H}_b + m_s(X_a - X_b)/m_g$; check that the exit gas is not near saturation (no condensation in ducts, cyclones).
9. **Dryer cross-section and diameter** from the allowable gas mass velocity: $A = m_g(1+\mathcal{H})/G$, $D = \sqrt{4A/\pi}$.
10. **Mean temperature difference** (log mean of $T_{hb} - T_w$ and $T_{ha} - T_w$ for the constant-rate region) and **volumetric coefficient** $U_a$ (rotary dryer: $U_a = 0.5G^{0.67}/D$ W/m³·°C, or $0.125G^{0.67}/D$ Btu/ft³·h·°F).
11. **Length / volume:** $L = \frac{q_T}{(\pi D^2/4)U_a\overline{\Delta T}}$; check L/D (4–10 for rotary dryers) and $N_t$.
12. **Other checks:** solid retention time (from slope, speed, flights, hold-up 10–15%), power, thermal efficiency, dust recovery (cyclone/bag filter on the exhaust).`,
          answer: String.raw`Specify duty → choose cocurrent/countercurrent → T_wb from chart → T_ha from N_t = ln[(T_hb−T_w)/(T_ha−T_w)] (1.5–2.5) and T_sb → water evaporated → q_T/m_s (sensible + latent + superheat) → gas rate m_g = q_T/[c_s(T_hb−T_ha)] → outlet humidity → D from allowable G → ΔT_lm and U_a = 0.125G^0.67/D → L = q_T/(A U_a ΔT); check L/D, retention, efficiency.` }
      ] }
  ]
});
