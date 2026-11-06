QB.paper({
  year: "2019-20", date: "22/03/2022", marks: 280,
  rules: String.raw`Section A: four questions, answer any three. Section B: four questions, answer any three. Use separate scripts for each section. Attached to the paper: Sylvan chart (Q1a), supercritical reheat plant and h–s (Mollier) chart (Q2c), I.C.T. vapour pressures of NaNO₃ solutions (Q5c), air–water humidity chart (Q6a), Goulds pump operating ranges and specific-speed chart (Q7a), vacuum system and HEI entrainment-ratio curves (Q7c), Fauske vent-sizing nomograph (Q8a), reactor P&ID (Q8b).`,
  questions: [
    { id: "2019-20-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw`Use the Sylvan chart supplied (Figure for Question no. 1(a), Ludwig Fig. 4-3: range of particle sizes, concentration and collector performance) to select mechanical separation equipment for the following:`,
      parts: [
        { id: "2019-20-Q1a1", label: "(a)(i)", marks: "9⅔",
          topic: "separator-selection", sub: "Sylvan chart: low-resistance then high-efficiency cyclone, 60–80 μm dust",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q6a", "2016-17-Q5ai"],
          text: String.raw`(i) Material leaving a chemical process varies between 20 and 40 grains/cu. ft. with 60 to 80 micron range of mean diameter of particles. A low resistance cyclone followed by a high efficiency cyclone would be used. What will be the final concentration and mean particle size of the gaseous stream?`,
          solution: String.raw`**Given:** inlet 20–40 gr/ft³, mean size 60–80 μm; low-resistance (LR) cyclone followed by a high-efficiency (HE) cyclone.

**Find:** outlet concentration and mean particle size.

**Assumptions:** design point at the middle of the ranges, $c_0$ = 30 gr/ft³ and $d_0$ = 70 μm; the dust follows the "ordinary industrial dust" deviation line of the chart (Ludwig Example 4-1 method); efficiencies read on the average line of each collector band.

1. **Locate the inlet point** (30 gr/ft³ on the dust-collecting concentration scale, 70 μm on the size scale) and project it down to the efficiency scale.

2. **LR cyclone at 70 μm:** the LR band gives ≈ 90 % (≈ 88 % at 60 μm, ≈ 93 % at 80 μm).

$$c_1 = 30(1-0.90) = 3.0\ \mathrm{gr/ft^3}$$

3. **Mean size leaving the LR cyclone.** Draw through the inlet point a line parallel to the "ordinary industrial dust" deviation lines; it meets the 3.0 gr/ft³ line at the effluent mean size. These lines correspond to $c \propto d^3$ (in Ludwig's example 7.5 → 2.25 gr/ft³ takes 9 μm → 6.0 μm), so

$$d_1 = d_0\left(\frac{c_1}{c_0}\right)^{1/3} = 70(0.10)^{1/3} = 32.5\ \mu\mathrm{m}$$

4. **HE cyclone at ≈ 32 μm:** the HE band reads ≈ 98 %.

![How to read the Sylvan chart: 30 gr/ft³, 70 µm → LR cyclone 90% → 3.0 gr/ft³, 32 µm → HE cyclone 98% → 0.06 gr/ft³, 9 µm](fig/2019-20-Q1a1-read.svg)

$$c_2 = 3.0(1-0.98) = 0.06\ \mathrm{gr/ft^3}$$

5. **Final mean size:**

$$d_2 = 32.5\left(\frac{0.06}{3.0}\right)^{1/3} = 32.5 \times 0.271 = 8.8\ \mu\mathrm{m} \approx 9\ \mu\mathrm{m}$$

6. **Over the stated ranges** (same efficiencies): 20 gr/ft³ → 0.04 gr/ft³; 40 gr/ft³ → 0.08 gr/ft³; final mean size ≈ 8–10 μm. Overall efficiency 1 − 0.06/30 = 99.8 %.

| stage | efficiency | outlet, gr/ft³ | mean size, μm |
|---|---|---|---|
| inlet | – | 30 (20–40) | 70 (60–80) |
| LR cyclone | ≈ 90 % | 3.0 | ≈ 32 |
| HE cyclone | ≈ 98 % | 0.06 (0.04–0.08) | ≈ 9 |

**Result:** final stream ≈ **0.06 gr/ft³ (0.04–0.08)** with mean particle size ≈ **9 μm**: the coarse dust is removed almost completely; what remains is the fine fraction (a fabric filter would be needed if lower emission is required).`,
          answer: String.raw`LR cyclone ≈ 90 % at 70 μm: 30 → 3.0 gr/ft³, mean size ≈ 32 μm; HE cyclone ≈ 98 %: → 0.06 gr/ft³ (0.04–0.08 for 20–40 inlet), final mean size ≈ 9 μm.` },
        { id: "2019-20-Q1a2", label: "(a)(ii)", marks: "5½+5½=11",
          topic: "separator-selection", sub: "Kiln flue gas 50 gr/ft³, 8 μm: cheapest for 70 %, choice for 98 %",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q6a", "2016-17-Q5aii"],
          text: String.raw`(ii) Flue gas leaving a kiln chimney has a particle concentration of 50 grains/ cu. ft. and a mean size of 8 microns. What is the cheapest equipment that can be used to achieve 70% collection efficiency? What equipment can be used to achieve 98% collection efficiency?`,
          solution: String.raw`**Given:** $c_0$ = 50 gr/ft³, mean size 8 μm (kiln flue gas, hot, dry).

1. **Read the collectors at 8 μm** (project the point down to the efficiency scale):

| collector | efficiency at 8 μm | relative cost |
|---|---|---|
| low-resistance cyclone | < 50 % | lowest |
| high-efficiency cyclone | ≈ 70 % (upper part of its 60–80 % band) | low |
| wet collector (scrubber) | ≈ 98 % | medium |
| electrostatic precipitator | ≈ 98–99 % | high capital |
| cloth (fabric) arrester | ≈ 99 %+ | medium–high |

![How to read the Sylvan chart: 50 gr/ft³, 8 µm → HE cyclone ≈ 70%, wet collector ≈ 98%](fig/2019-20-Q1a2-read.svg)

2. **70 % efficiency: high-efficiency cyclone.** The LR cyclone cannot reach 70 % at 8 μm; the HE cyclone is the cheapest device that does (no moving parts, low pressure drop, tolerates hot gas):

$$c_1 = 50(1-0.70) = 15\ \mathrm{gr/ft^3},\qquad d_1 \approx 8(0.30)^{1/3} = 5.4\ \mu\mathrm{m}$$

3. **98 % efficiency:** a wet collector (venturi or cyclonic scrubber), a fabric filter (glass-fibre or PTFE bags for hot gas) or an ESP. Alone each gives

$$c = 50(1-0.98) = 1.0\ \mathrm{gr/ft^3}$$

   The wet collector is the cheapest of the three in first cost, but it creates a slurry and a wet plume; for a hot kiln gas the usual choice is an **ESP or fabric filter preceded by the HE cyclone** as pre-cleaner (as in the chart's own kiln example). With the cyclone first, the second unit sees 15 gr/ft³ of 5.4 μm dust; at ≈ 97 %:

$$c_2 = 15(1-0.97) = 0.45\ \mathrm{gr/ft^3}\quad(\text{overall } 99.1\ \%)$$

**Result:** cheapest for 70 %: **high-efficiency cyclone** (50 → 15 gr/ft³). For 98 %: **wet collector, fabric filter or ESP** (→ 1.0 gr/ft³); HE cyclone + ESP/fabric filter gives > 99 %.`,
          answer: String.raw`70 %: high-efficiency cyclone (LR cyclone < 50 % at 8 μm); outlet 15 gr/ft³. 98 %: wet collector, fabric arrester or ESP (≈98–99 % at 8 μm), outlet 1.0 gr/ft³; cyclone pre-cleaner + ESP/bag filter gives ≈ 99 %.` },
        { id: "2019-20-Q1b", label: "(b)", marks: "26",
          topic: "size-reduction", sub: "Schematics of crushers and grinders with the forces they use",
          type: "sketch", syllabus: "in", repeats: ["2018-19-Q4c", "2014-15-Q3b"],
          text: String.raw`Draw the schematic diagram of basic types of crushing and grinding equipment mentioning the type of forces involved in size reduction.`,
          solution: String.raw`**Forces used in size reduction:** (1) **compression** (slow squeezing between two surfaces: coarse crushing of hard solids), (2) **impact** (a fast blow by a hammer or a falling ball, or particle hitting a wall), (3) **attrition / rubbing** (particles rubbed between surfaces or against each other: fine grinding), (4) **cutting / shear** (knives, for tough fibrous materials).

![Jaw, gyratory and roll crushers (compression); hammer mill (impact); ball mill (impact + attrition); attrition (disk) mill (shear)](fig/2019-20-Q1b-sketch.svg)

| class | machine | how it works | main force | feed → product |
|---|---|---|---|---|
| coarse crusher | **jaw crusher** (Blake) | a swing jaw, pivoted at the top, moves to and fro against a fixed jaw; lumps are nipped in the V-shaped gap and crushed as they fall | compression | 1500 → 50–250 mm |
| coarse crusher | **gyratory crusher** | a conical crushing head on an eccentric spindle gyrates inside a conical bowl; continuous discharge | compression | similar, larger capacity (to ~4500 t/h) |
| intermediate | **smooth-roll crusher** | two rolls turn towards each other; particles are nipped and pulled through the gap (angle of nip ≈ 32°) | compression (+ shear for toothed rolls) | 50 → 10–1 mm |
| intermediate | **hammer mill** | swing hammers on a high-speed rotor (rotor disk 150–450 mm, 4–8 hammers) shatter particles, which then pass a grate | impact (+ rubbing) | → ≤ 25 mm or fine |
| fine grinder | **tumbling (ball, rod, pebble) mill** | a rotating shell partly filled with balls; balls are lifted and cascade onto the charge | impact + attrition | 5 mm → 75–10 μm |
| fine grinder | **attrition (disk) mill** | material passes between a stationary and a rotating grooved disk (or two counter-rotating disks) | shear / rubbing | → fine powders |
| ultrafine | fluid-energy (jet) mill, agitated (bead) mill | particles collide in high-velocity gas jets / with beads | impact, attrition | → 1–10 μm |
| cutting | knife cutter, dicer | rotating knives against a bed knife | cutting | fibrous solids |

**Selection rule:** compression machines for hard, coarse feeds; impact for friable, medium-hard solids; attrition for fine grinding of soft or medium solids; cutting for tough, fibrous materials. Crushers (compression) take large lumps; grinders (impact/attrition) give powders.`,
          answer: String.raw`Compression: jaw, gyratory and roll crushers (coarse/intermediate); impact: hammer mill, impactor; impact + attrition: ball/rod/pebble tumbling mills; shear/attrition: disk (attrition) mill; cutting: knife cutters; ultrafine: jet and bead mills.` }
      ] },
    { id: "2019-20-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2019-20-Q2a", label: "(a)", marks: "9⅔",
          topic: "dust-collection", sub: "How a fabric filter captures particulates (with sketches)",
          type: "sketch", syllabus: "in", repeats: ["2016-17-Q7d"],
          text: String.raw`How does a fabric filter separate particulates from gaseous emission? Explain with neat sketches.`,
          solution: String.raw`**Principle.** Dusty gas is drawn (or pushed) through a porous fabric (woven or felted bags, envelopes or cartridges). Particles are retained on and in the fabric; after a short initial period a **dust cake** builds up on the fabric, and the cake itself becomes the main, very efficient filter medium (> 99 %). The cake is removed periodically by cleaning, and the dust falls to a hopper.

![Pulse-jet bag house and the capture mechanisms at a single fibre](fig/2019-20-Q2a-sketch.svg)

**Capture mechanisms**
1. **Inertial impaction:** large/heavy particles (> ~1 μm) cannot follow the gas around a fibre and strike it; increases with velocity and particle size.
2. **Interception:** a particle following a streamline that passes within one particle radius of the fibre touches and sticks.
3. **Brownian diffusion:** very small particles (< ~0.5 μm) wander off the streamlines by random motion and reach the fibre; favoured by low velocity. Hence particles of 0.1–1 μm (where both impaction and diffusion are weak) are the hardest to capture.
4. **Sieving (straining):** particles larger than the openings of the fabric or cake are stopped at the surface; dominant once the cake has formed.
5. **Electrostatic attraction:** charged particles are attracted to the fibres.

**Operation cycle (bag house)**
- Gas enters the dirty-gas plenum/hopper, flows through the bags (outside-in in pulse-jet units, inside-out in shaker and reverse-air units) and leaves through the clean-gas plenum.
- Pressure drop rises as the cake grows (Δp ≈ 5–20 in. H₂O).
- **Cleaning:** shaking (low energy, woven bags), reverse air, or compressed-air **pulse jets** through venturis at the bag tops (high energy, felts, on-line cleaning).
- Key design number: air-to-cloth ratio (1–3 ft/min shaker, 5–10 ft/min pulse jet). Gas must stay above its dew point and below the fabric's temperature limit.`,
          answer: String.raw`Gas passes through fabric bags; particles are caught by impaction, interception, diffusion, sieving and electrostatic attraction, forming a dust cake that then filters at > 99 %; the cake is removed by shaking, reverse air or pulse jets into a hopper.` },
        { id: "2019-20-Q2b", label: "(b)", marks: "25",
          topic: "other", sub: "Steam turbines by steam-path arrangement and their selection",
          type: "sketch", syllabus: "out", repeats: ["2018-19-Q5c", "2014-15-Q2b"],
          text: String.raw`Classify turbines based on steam path arrangements and draw their schematic showing steam flow path. Also describe their selection criteria for process.`,
          solution: String.raw`![Steam-path arrangements: straight condensing, back-pressure, extraction-condensing, induction, reheat and double-flow](fig/2019-20-Q2b-sketch.svg)

### Classification by steam path

| arrangement | steam path | typical use |
|---|---|---|
| **(a) Straight (full) condensing** | all steam enters at inlet, expands to vacuum (0.05–0.1 bar) in a surface condenser | maximum power per kg of steam; power stations, compressor drives where no process steam is needed |
| **(b) Back-pressure (non-condensing)** | all steam expands only to a process header pressure (2–20 bar), exhaust used for heating | cogeneration in refineries, sugar, paper; very high overall energy efficiency; power output fixed by steam demand |
| **(c) Extraction (pass-out), controlled or uncontrolled** | part of the steam is withdrawn at one or two intermediate pressures for process or feed-water heating; the rest continues to condenser or back-pressure | plants needing both power and steam at several levels; controlled extraction holds the extraction pressure constant |
| **(d) Induction (admission / mixed-pressure)** | surplus low-pressure steam from the plant is admitted at an intermediate stage and expands with the main flow | using waste/flash steam; combined extraction–induction machines balance plant steam headers |
| **(e) Reheat** | after the HP section the steam returns to the boiler, is reheated, then expands in IP/LP sections | large power units: higher efficiency, drier exhaust |
| **(f) Double-flow** | steam enters at the centre and divides into two opposite flows | large LP sections (big volume flow), axial thrust balanced |
| Tandem / cross compound | HP, IP, LP casings on one shaft (tandem) or two shafts (cross) | very large outputs |

### Selection criteria for process use
1. **Plant steam balance:** if the process needs low-pressure steam, a **back-pressure** or **extraction** turbine recovers power almost free (the heat of the exhaust is used); if no process steam is needed, a **condensing** machine.
2. **Power and speed** of the driven machine (pump, compressor, generator); direct drive or gear; variable-speed capability.
3. **Inlet steam conditions** available (pressure, temperature) and exhaust pressure: they fix the enthalpy drop, steam rate (kg/kWh), number of stages and exhaust moisture (≤ 10–12 %).
4. **Load variation:** controlled-extraction and induction machines handle varying steam/power demands; back-pressure turbines follow the steam demand only.
5. **Efficiency vs cost:** more stages and condensing operation raise efficiency and capital cost; single-stage turbines are cheap, rugged, used for spare/standby drives.
6. **Reliability and standards:** critical service (API 612 special-purpose) or general-purpose (API 611); start-up time; availability of cooling water for a condenser; space and maintenance.`,
          answer: String.raw`By steam path: straight condensing, back-pressure (non-condensing), extraction (controlled/uncontrolled), induction (mixed pressure), reheat, double-flow, tandem/cross compound. Choose from the plant steam balance (process steam → back-pressure/extraction), power and speed, inlet/exhaust conditions, load variation, efficiency vs cost and reliability.` },
        { id: "2019-20-Q2c", label: "(c)", marks: "12",
          topic: "other", sub: "Supercritical reheat plant: HP and LP turbine efficiencies on h–s",
          type: "numerical", syllabus: "out", repeats: ["2012-13-Q2b"],
          text: String.raw`Consider a supercritical steam power plant with reheat as shown in Figure for Question no. 2(c). Plot the two turbine processes on the enthalpy-entropy h-s "Mollier" diagram. Plot also the equivalent isentropic turbine processes on the diagram, and indicate the actual turbine specific work as well as the isentropic turbine specific work for both turbine on the h-s diagram. Finally, determine the turbine adiabatic efficiency $\eta_T$ of both turbines.

Figure data (attached to the paper): state 1 (HP inlet) $P_1 = P_7$ = 25 MPa, $T_1$ = 550 °C, ṁ = 7 kg/s; state 2 (HP exit) 4 MPa, 300 °C, to reheat; state 3 (LP inlet) $P_3 = P_2$ = 4 MPa, 550 °C; state 4 (LP exit) 10 kPa, quality x = 0.93; condenser exit 5: 10 kPa, 40 °C; deaerator 800 kPa; feed pump to 7: 25 MPa, 41 °C. An h–s diagram for water is attached.`,
          solution: String.raw`**Given:** HP turbine 1 → 2: 25 MPa, 550 °C → 4 MPa, 300 °C. LP turbine 3 → 4: 4 MPa, 550 °C → 10 kPa, x = 0.93. ṁ = 7 kg/s.

**Find:** isentropic end states, actual and isentropic works, $\eta_T$ of each turbine.

**Assumptions:** adiabatic turbines, negligible KE/PE changes; property values from the steam tables (IAPWS formulation), which agree with the readings on the attached chart.

1. **State points:**

| state | P | T or x | h, kJ/kg | s, kJ/kg K |
|---|---|---|---|---|
| 1 | 25 MPa | 550 °C | 3339.2 | 6.1816 |
| 2 | 4 MPa | 300 °C | 2961.7 | 6.3639 |
| 2s | 4 MPa | s = s₁ → 266.7 °C (superheated) | 2860.4 | 6.1816 |
| 3 | 4 MPa | 550 °C | 3560.3 | 7.2355 |
| 4 | 10 kPa | x = 0.93 | 191.8 + 0.93(2392.1) = 2416.4 | 7.6238 |
| 4s | 10 kPa | s = s₃ → x = (7.2355 − 0.6492)/7.4996 = 0.878 | 2292.5 | 7.2355 |

2. **Plot on the Mollier chart.** Point 1 at 250 bar/550 °C; drop **vertically** (constant s = 6.18) to the 40 bar line → 2s; the actual end 2 lies on the same 40 bar line to the right (300 °C, higher s). Reheat moves along the 40 bar line up to 550 °C → 3. From 3 drop vertically (s = 7.24) to the 0.1 bar line → 4s (x ≈ 0.88); the actual end 4 is on the 0.1 bar line at x = 0.93. On each turbine the vertical drop $h_{in} - h_{s}$ is the isentropic work and $h_{in} - h_{out}$ the actual work (the actual line is drawn sloping to the right because entropy increases).

![Both turbine expansions on the Mollier chart: 1 → 2s, 2 and 3 → 4s, 4 with actual and isentropic works](fig/2019-20-Q2c-read.svg)

3. **HP turbine:**

$$w_{HP} = h_1 - h_2 = 3339.2 - 2961.7 = 377.5\ \mathrm{kJ/kg},\qquad w_{HP,s} = h_1 - h_{2s} = 478.8\ \mathrm{kJ/kg}$$

$$\eta_{HP} = \frac{377.5}{478.8} = 0.788$$

4. **LP turbine:**

$$w_{LP} = h_3 - h_4 = 3560.3 - 2416.4 = 1143.9\ \mathrm{kJ/kg},\qquad w_{LP,s} = h_3 - h_{4s} = 1267.8\ \mathrm{kJ/kg}$$

$$\eta_{LP} = \frac{1143.9}{1267.8} = 0.902$$

5. **Power:** $\dot W = 7(377.5 + 1143.9) = 10{,}650$ kW ≈ 10.65 MW.

**Result:** $\eta_{T,HP}$ ≈ **79 %**, $\eta_{T,LP}$ ≈ **90 %** (actual works 377.5 and 1143.9 kJ/kg vs isentropic 478.8 and 1267.8 kJ/kg; total ≈ 10.7 MW).`,
          answer: String.raw`HP: w = 377.5, w_s = 478.8 kJ/kg → η_T ≈ 0.79; LP: w = 1143.9, w_s = 1267.8 kJ/kg (x₄s = 0.878) → η_T ≈ 0.90; turbine power ≈ 10.65 MW.` }
      ] },
    { id: "2019-20-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2019-20-Q3a", label: "(a)", marks: "16",
          topic: "crystallization", sub: "Importance of crystallization; mechanism on the solubility curve",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q5b"],
          text: String.raw`Why is crystallization important for chemical industries? Explain the mechanism of crystallization with the help of a solubility curve.`,
          solution: String.raw`### Importance
- **Separation and purification in one step:** a nearly pure solid is obtained from an impure solution (impurities stay in the mother liquor); used for salts, sugar, fertilizers, pharmaceuticals, fine chemicals.
- **Product form:** gives a solid of controlled crystal size distribution, shape and purity, which governs filtration, washing, drying, flow, caking, dissolution and appearance (e.g. sugar, NaCl, ammonium sulphate, urea, APIs).
- **Low energy:** heat of crystallization is far smaller than heat of vaporization, so it is cheaper than distillation or evaporation to dryness; works at low temperature (heat-sensitive substances).
- **Recovery** of valuable solutes from waste or process streams; a key step in producing high-purity materials (silicon, proteins).

### Mechanism with the solubility curve

![Solubility (solid) and supersolubility (dashed) curves with stable, metastable and labile zones](fig/2019-20-Q3a-sketch.svg)

- **Solubility curve:** concentration of a saturated solution at each temperature (equilibrium). Below/right of it the solution is **undersaturated (stable)**: crystals dissolve, none form.
- **Supersolubility curve:** limit beyond which spontaneous nucleation occurs. Between the two curves is the **metastable zone**: the solution is supersaturated, existing crystals (seeds) grow, but new nuclei form only slowly (by shock, friction or seeds). Above the supersolubility curve is the **labile zone**: spontaneous, rapid (primary) nucleation.
- **Driving force:** supersaturation $\Delta c = c - c^*$ (or $S = c/c^*$).

**Two steps:**
1. **Nucleation:** formation of new crystals. *Primary* nucleation (homogeneous in a clear solution, or heterogeneous on foreign particles) needs high supersaturation (labile zone). *Secondary* nucleation is caused by existing crystals (contact with impeller, walls, other crystals) and dominates in industrial crystallizers.
2. **Crystal growth:** solute diffuses through the liquid film to the crystal face and is incorporated in the lattice (surface reaction); the rate is proportional to the supersaturation.

**Paths on the diagram:**
- **ABC, cooling** at constant concentration: A (undersaturated) → B (saturated) → into the metastable zone (growth on seeds) → C (supersolubility limit, shower of nuclei). Used when solubility rises steeply with temperature (Swenson–Walker, cooling crystallizers).
- **ADE, evaporation** at constant temperature: solvent is removed so the concentration rises from A through D (saturated) to E. Used when solubility hardly changes with T (NaCl): evaporative/vacuum crystallizers. Vacuum (adiabatic) crystallizers combine cooling and evaporation.

**Control:** operate in the **metastable zone** with seeding and moderate supersaturation, so that growth dominates over nucleation → large, uniform, pure crystals; operating in the labile zone gives many fine crystals.`,
          answer: String.raw`Crystallization purifies and gives a solid product of controlled size in one low-energy step. Solubility curve = equilibrium; supersolubility curve = onset of spontaneous nucleation; between them the metastable zone where seeds grow. Supersaturation (by cooling ABC or evaporation ADE) drives nucleation then growth; operate in the metastable zone for large uniform crystals.` },
        { id: "2019-20-Q3b", label: "(b)", marks: "15⅔",
          topic: "size-reduction", sub: "Ball-mill critical speed: derivation",
          type: "derivation", syllabus: "in", repeats: ["2022-23-Q8a", "2018-19-Q4a", "2016-17-Q6c", "2012-13-Q3c"],
          text: String.raw`What is the speed beyond which grinding action in a ball mill is negligible? Establish the mathematical relationship of that speed.`,
          solution: String.raw`**The critical speed** $n_c$: the speed at which the balls are just carried round with the shell (centrifuged) and never fall. Above it there is no cascading or cataracting, hence no impact and little attrition: grinding becomes negligible.

![Forces on a ball at the shell of a rotating mill](fig/2019-20-Q3b-sketch.svg)

**Derivation.** Consider a ball of mass m and radius r in a mill of radius R, rotating at n rev/s (ω = 2πn). The ball's centre moves on a circle of radius R − r. At a position where the radius makes angle α with the vertical (ball above the centre):

1. **Forces along the radius (toward the centre):** the weight component $mg\cos\alpha$; the required centripetal force is $m\omega^2(R-r)$, supplied by the weight component plus the wall reaction N:

$$N + mg\cos\alpha = m\omega^2(R-r)$$

2. **Ball leaves the wall** when N = 0:

$$\cos\alpha = \frac{\omega^2(R-r)}{g} = \frac{4\pi^2 n^2 (R-r)}{g}$$

   As n increases, α decreases: the ball is carried higher before it falls.

3. **Critical speed:** the ball just stays on the wall at the very top, α = 0 (cos α = 1):

$$4\pi^2 n_c^2 (R-r) = g\quad\Rightarrow\quad n_c = \frac{1}{2\pi}\sqrt{\frac{g}{R-r}}\ \ \mathrm{r/s}$$

4. **Practical forms:** with diameters D and d in metres, $n_c = \frac{60}{2\pi}\sqrt{\frac{2g}{D-d}} = \frac{42.3}{\sqrt{D-d}}$ r/min; in ft, $n_c = 76.6/\sqrt{D-d}$ r/min.

**Example:** D = 1.2 m mill, d = 80 mm balls: $n_c = (1/2\pi)\sqrt{9.81/0.56}$ = 0.666 r/s = 40 r/min.

**Operating speed:** mills run at **65–80 % of $n_c$** (lower for wet grinding of viscous slurries); at low speed the balls only roll (cascade, attrition, slow), near 75 % they cataract (impact), and at or above $n_c$ they centrifuge (no grinding).`,
          answer: String.raw`Critical speed, when balls centrifuge: from mω²(R − r) = mg at the top, n_c = (1/2π)√(g/(R − r)) r/s = 42.3/√(D − d) r/min (m). Operate at 65–80 % of n_c.` },
        { id: "2019-20-Q3c", label: "(c)", marks: "15",
          topic: "solids-handling", sub: "Turning a belt conveyor into a vertical (bucket) elevator",
          type: "sketch", syllabus: "in", repeats: ["2016-17-Q8b"],
          text: String.raw`How can you convert a belt conveyor into a vertical elevator? Explain with schematic diagram.`,
          solution: String.raw`A plain troughed belt can only climb about 15–20° (bulk solids slide back). To lift vertically the belt must carry the material in **containers fixed to it**: this is the **belt-and-bucket elevator**.

![Belt-and-bucket elevator: head pulley drive, boot pulley, buckets on the belt, feed at the boot and discharge at the head](fig/2019-20-Q3c-sketch.svg)

**Conversion and construction**
1. **Turn the belt to vertical** between a **head pulley** (top, driven) and a **boot (tail) pulley** (bottom, with a take-up to keep the belt tight).
2. **Bolt buckets** (steel, plastic) at regular spacing on the belt (or on one/two chains for hot, heavy or abrasive solids).
3. **Enclose** the belt in a casing (the "leg") with a boot hopper at the bottom and a discharge chute at the head.
4. **Feed** enters the boot: buckets dig (scoop) the solid or are filled directly from an inlet chute.
5. **Discharge** at the head: (a) **centrifugal discharge**: fast belt (1–1.5 m/s), spaced buckets; the solid is thrown out by centrifugal force as the bucket turns round the head pulley (free-flowing grains, sand); (b) **continuous (gravity) discharge**: slow belt, buckets touching; each bucket empties onto the back of the one in front and down a chute (fragile or sluggish materials); (c) **positive discharge**: buckets snubbed under the head to empty sticky solids.
6. A **backstop** (anti-runback) on the head shaft prevents reverse running when loaded.

**Alternatives for steep/vertical belt conveying:** pocket (corrugated-sidewall) belts with cleats, and sandwich belts (material held between two belts).

**Features:** high lift (up to 50–70 m), small floor area, enclosed (dust-free); capacity set by bucket volume × spacing × speed × fill (≈ 75 %); not for very sticky or fibrous solids.`,
          answer: String.raw`Mount buckets on a vertical belt between a driven head pulley and a boot pulley with take-up, enclosed in a casing: feed at the boot, buckets lift the solid and discharge it at the head by centrifugal or gravity (continuous) action into a chute (belt-and-bucket elevator); sidewall/pocket or sandwich belts are alternatives.` }
      ] },
    { id: "2019-20-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw`Write short notes on`,
      parts: [
        { id: "2019-20-Q4a", label: "a)", marks: "9⅔",
          topic: "crystallization", sub: "Short note: draft-tube-baffle crystallizer",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q6c", "2016-17-Q3e"],
          text: String.raw`a) Draft tube baffle crystallizer`,
          solution: String.raw`![DTB crystallizer with draft tube, propeller, annular baffle, settling zone and fines-dissolution loop](fig/2020-21-Q8b-sketch.svg)

- **Purpose:** a growth-type vacuum crystallizer used where **excessive nucleation** occurs; controls crystal size by removing and destroying fines.
- **Construction:** vessel with a central **draft tube** and slow low-shear **propeller**; an **annular baffle (skirt)** makes a quiet **settling zone** near the wall; external fines loop with a **heater**; vapour to a condenser/vacuum; product slurry withdrawn from the bottom (elutriation leg).
- **Operation:** the propeller circulates the slurry up the draft tube to the boiling surface (1–4 turnovers/min), where flashing/evaporation creates mild supersaturation in a crystal-rich zone, so it is consumed by **growth**. In the settling zone only fines are carried up and out; they are redissolved in the heater (which also supplies heat) and returned with the feed. Large crystals settle and are removed; residence time 4–6 h.
- **Advantages:** large (0.5–1.5 mm), uniform crystals; maximum recovery; low secondary nucleation; little scaling; continuous, large capacity.
- **Disadvantages:** large vessel and long residence time, extra heater and vacuum energy, more complex control.
- **Uses:** ammonium sulphate, KCl, NaCl, organic chemicals.`,
          answer: String.raw`Vacuum crystallizer with draft tube + slow propeller and an annular baffle creating a settling zone; fines are withdrawn, redissolved in a heater and recycled, so supersaturation goes into growth: large uniform crystals (ammonium sulphate, KCl); costlier, 4–6 h residence.` },
        { id: "2019-20-Q4b", label: "b)", marks: "9",
          topic: "size-reduction", sub: "Short note: factors affecting size reduction",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q6a"],
          text: String.raw`b) Factors affecting size reduction`,
          solution: String.raw`**Material properties**
- **Hardness and abrasiveness** (Mohs scale): hard materials need compression crushers and wear the machine; soft ones suit impact/attrition mills.
- **Toughness / brittleness:** brittle solids fracture easily; tough, fibrous or rubbery ones need cutting or cryogenic grinding.
- **Crushing strength and structure:** cleavage planes, flaws and crystal structure make breakage easier; energy laws use the crushing strength $f_c$ or work index $E_i$.
- **Moisture content:** < 3–4 % (dry grinding) or > 50 % water (wet grinding) is easy; 4–50 % moisture makes solids sticky, agglomerate and clog.
- **Stickiness, softening/melting temperature, heat sensitivity:** heat generated in grinding may melt or degrade; cooling or cryogenic grinding required.
- **Bulk density and particle shape**, friability, explosibility and toxicity (dust explosion: inert gas).

**Process / machine factors**
- **Feed size and reduction ratio** (crushers ≈ 3–7, fine grinders up to 100): fixes the type and number of stages.
- **Required product size and distribution** (energy rises steeply as size falls: Rittinger, Bond, Kick).
- **Feed rate and mode of feeding:** *free crushing* (product removed quickly) vs *choke feeding* (more fines, more energy).
- **Open vs closed circuit** with classifiers (prevents over-grinding, saves energy).
- **Machine speed, media size and loading** (ball mill at 65–80 % of critical speed).
- **Wet or dry grinding:** wet grinding gives less dust and lower energy but more wear of media.
- **Temperature and humidity** of the operation; cost of power and maintenance.`,
          answer: String.raw`Material: hardness/abrasiveness, toughness, crushing strength and structure, moisture (sticky between ~4 and 50 %), softening point/heat sensitivity, shape, explosibility. Process: feed size and reduction ratio, product size, feed rate (free vs choke crushing), open/closed circuit, speed and media, wet vs dry.` },
        { id: "2019-20-Q4c", label: "c)", marks: "10",
          topic: "other", sub: "Short note: compounding of steam turbines",
          type: "theory", syllabus: "out", repeats: ["2020-21-Q5e", "2018-19-Q6b"],
          text: String.raw`c) Compounding of steam turbines`,
          solution: String.raw`**Why compound.** If the whole enthalpy drop is used in one row of nozzles, the steam velocity is ≈ 1000–1200 m/s and the optimum blade speed ($u \approx V_1\cos\alpha/2$) needs about 30,000 rpm, with large exit losses. Compounding uses **several rows** so that each handles only part of the energy, giving practical rotor speeds and better efficiency.

![Pressure and velocity through simple impulse, pressure-compounded, velocity-compounded and reaction stages](fig/2020-21-Q6a-sketch.svg)

1. **Pressure compounding (Rateau):** a series of impulse stages, each a row of nozzles followed by a row of moving blades. The pressure drops in steps in each nozzle row; the velocity rises in each nozzle and is absorbed in the following moving row. Moderate velocities, high efficiency, but a long machine with many diaphragms.
2. **Velocity compounding (Curtis):** one nozzle row takes the whole pressure drop; the high-velocity jet is absorbed in two or three moving rows separated by fixed guide blades (no pressure drop in blades). Optimum $u/V_1 = \cos\alpha/(2n)$. Short and cheap, lower efficiency; used as first (control) stage or for small drives.
3. **Pressure–velocity compounding:** several Curtis stages in series (pressure drops in steps, each step absorbed in two moving rows); combines compactness with reasonable efficiency.
4. **Reaction turbines (Parsons)** are inherently pressure compounded: pressure drops in both fixed and moving rows of many stages.`,
          answer: String.raw`Compounding splits the steam energy over several rows to cut rotor speed and losses: pressure compounding (Rateau, nozzle + moving row stages, Δp in steps), velocity compounding (Curtis, one nozzle, 2–3 moving rows with guide blades, u/V = cosα/2n), pressure–velocity compounding; reaction turbines are inherently pressure compounded.` },
        { id: "2019-20-Q4d", label: "d)", marks: "9",
          topic: "dust-collection", sub: "Short note: wet scrubbers",
          type: "theory", syllabus: "in", repeats: ["2017-18-Q8d", "2011-12-Q1c"],
          text: String.raw`d) Wet scrubbers`,
          solution: String.raw`**Principle.** A liquid (usually water) is used to form drops, films or bubbles that capture particles (mainly by **inertial impaction** on drops, plus interception and diffusion) and absorb soluble gases. The particle-laden liquid is then separated from the gas. Wet scrubbers overcome the cyclone's problem of fine dust being swept back into the outlet gas.

![Spray tower and venturi scrubber with a cyclonic separator](fig/2019-20-Q4d-sketch.svg)

**Main types**
- **Spray tower (chamber):** dusty gas rises through sprays from nozzles; dust–water slurry leaves at the bottom; an entrainment separator at the top stops carry-over. Low Δp (1–2 in. H₂O), effective for > 5–10 μm.
- **Wet cyclone scrubber:** tangential gas entry with water sprays; centrifugal force throws wetted particles to the wall; nozzle plugging is the main maintenance item.
- **Venturi scrubber:** gas accelerated to 60–120 m/s at the throat atomizes injected water into fine drops; high relative velocity gives > 95–99 % capture down to ≈ 0.5–1 μm; high Δp (10–60 in. H₂O); followed by a cyclonic separator.
- **Packed/plate (impingement) scrubbers, orifice and self-induced spray scrubbers.**

**Advantages:** handle hot, humid, sticky and explosive/combustible dusts (no fire hazard); collect particles and gases (SO₂, HCl) together; compact; cool the gas.

**Disadvantages:** produce slurry/wastewater that must be treated; corrosion; visible steam plume; high energy for fine particles (venturi); freezing; the dust is recovered wet.`,
          answer: String.raw`Liquid drops/films capture particles mainly by impaction (and absorb gases); types: spray tower, wet cyclone, venturi (60–120 m/s throat, > 95 % to ~1 μm, high Δp), packed/impingement. Good for hot, sticky, explosive dusts and gases; drawbacks: slurry/wastewater, corrosion, plume, energy.` },
        { id: "2019-20-Q4e", label: "e)", marks: "9",
          topic: "solids-handling", sub: "Short note: screw conveyor",
          type: "theory", syllabus: "in", repeats: ["2020-21-Q8c1", "2018-19-Q6e", "2017-18-Q8e"],
          text: String.raw`e) Screw conveyor`,
          solution: String.raw`![Screw conveyor in a U-trough](fig/2020-21-Q8c-sketch.svg)

- **Mechanism:** a rotating helical screw (flight) on a shaft pushes the bulk solid along a stationary trough or tube.
- **Casing:** U-shaped (usual), square, rectangular or circular trough, open or with quick-release cover; circular casing for inclinations above about 30° and for vertical screw elevators.
- **Geometry:** single screw with continuous flight, pitch/diameter ≈ 1 for most duties; ≈ 1.5 for very free-flowing solids (horizontal); 0.5–0.67 for vertical flow; tapered or variable-pitch screws for lumpy feeds and feeders.
- **Limits:** particles smaller than the flight–casing gap, feed temperature up to ≈ 120 °C, distance not more than about 100 m.
- **Capacity and power** depend on conveying distance, screw size, pitch and length, rpm, degree of fill (15–45 %) and bulk-solid properties.
- **Advantages:** simple, compact, enclosed (dust-tight), can mix, feed, heat or cool while conveying; many inlets/outlets.
- **Disadvantages:** high power per tonne, wear with abrasive solids, degradation of fragile solids, short distances only.`,
          answer: String.raw`Helical flight rotating in a U-trough pushes solids; P/D ≈ 1 (1.5 free-flowing horizontal, 0.5–0.67 vertical); particle size < gap, ≤ 120 °C, ≤ 100 m; enclosed, simple, can mix/heat; high power and wear.` }
      ] },
    { id: "2019-20-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2019-20-Q5a", label: "(a)", marks: "10⅔",
          topic: "evaporation", sub: "Evaporator for fruit juice: falling film under vacuum",
          type: "theory", syllabus: "in", repeats: ["2011-12-Q5b"],
          text: String.raw`Recommend a type of evaporator for the following case? Fruit juice. State the reasons.`,
          solution: String.raw`**Recommendation: a multiple-effect falling-film (long-tube) evaporator operated under vacuum**, often with aroma (essence) recovery and/or mechanical vapour recompression; for very viscous final concentrates an agitated thin-film or plate evaporator for the last stage.

![Falling-film evaporator for fruit juice](fig/2019-20-Q5a-sketch.svg)

**Reasons (properties of fruit juice → evaporator features)**
1. **Heat-sensitive** (vitamin C, colour, flavour, browning/caramelization): a falling film gives a **very short residence time** (seconds to a minute) and no hydrostatic head, so boiling occurs at the low vapour-space temperature. Under vacuum the juice boils at 40–70 °C.
2. **Volatile aroma compounds:** the vapour from the first effect is passed to an **essence-recovery** column and the aroma added back to the concentrate.
3. **Small ΔT is enough:** high film coefficients (U ≈ 1000–2500 W/m² K) allow low-temperature steam or vapour from another effect, so **multiple effects or MVR** give high steam economy.
4. **Viscosity rises** as the juice concentrates (to 45–65 °Brix): the thin flowing film still transfers heat well; an agitated-film finisher handles the most viscous stage.
5. **Hygiene:** stainless steel, easy CIP cleaning, low hold-up (little product loss at change-over).
6. **Fouling/foaming:** the thin, fast film reduces fouling; no pool of liquid to foam.

**Not recommended:** short-tube (calandria) or forced-circulation evaporators: long residence and high liquid hold-up at high temperature damage the juice.`,
          answer: String.raw`Multiple-effect falling-film (long-tube) evaporator under vacuum (with aroma recovery; agitated-film/plate finisher for viscous concentrate): short residence, low boiling temperature, no hydrostatic head, high U at small ΔT, low hold-up and hygienic, preserving flavour, colour and vitamins.` },
        { id: "2019-20-Q5b", label: "(b)", marks: "18⅔",
          topic: "evaporation", sub: "Working principles of mechanical, thermostatic and thermodynamic steam traps",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Briefly discuss the working principle of the three different steam traps. ("stream traps" in the printed paper.)`,
          solution: String.raw`A **steam trap** is an automatic valve on the condensate outlet of steam-heated equipment (evaporator steam chests, heaters, jackets, steam mains). It discharges condensate and air/non-condensables but closes against live steam, so the heating surface does not flood (lower U) and steam is not wasted. Traps are grouped by the property they sense.

![Float, bellows and disc traps](fig/2019-20-Q5b-sketch.svg)

### 1. Mechanical traps: density difference (steam vs condensate)
- **Ball-float trap:** a float rises with the condensate level and opens the outlet valve through a lever; with no condensate the float falls and closes it. Discharges continuously at steam temperature; usually has a thermostatic air vent. Best for heat exchangers and evaporators with large, variable loads.
- **Inverted-bucket trap:** steam entering an inverted bucket makes it buoyant and closes the valve; when condensate replaces the steam (which bleeds through a vent hole and condenses), the bucket sinks and opens the valve. Robust, resists water hammer; intermittent discharge.

### 2. Thermostatic traps: temperature difference
- **Balanced-pressure bellows (or capsule):** a capsule filled with a liquid boiling slightly below water; at steam temperature it expands and closes the valve; cooler condensate or air lets it contract and open. Excellent air venting.
- **Bimetallic trap:** bimetal strips bend with temperature to close the valve when hot.
- Condensate is discharged a few degrees **below** steam temperature (some sub-cooling/back-up); used on tracers, start-up air venting.

### 3. Thermodynamic traps: velocity/pressure (Bernoulli)
- **Disc trap:** cold condensate and air lift a flat disc and flow out. When hot condensate reaches the trap it partly flashes; the high-velocity vapour under the disc lowers the static pressure there (Bernoulli), while flash steam above the disc in the control chamber pushes it down: the disc snaps shut. The chamber steam later condenses (heat loss through the cap), pressure falls, and the trap reopens. Small, cheap, robust, suits high-pressure steam mains; noisy, cycling, not for low pressure or high back-pressure.

**Selection:** float/bucket for process equipment (evaporators, heat exchangers), thermostatic for tracing and air venting, thermodynamic for mains drainage.`,
          answer: String.raw`Mechanical (float, inverted bucket): density difference, float/bucket opens the valve on condensate; thermostatic (bellows, bimetal): temperature difference, element expands at steam T and closes; thermodynamic (disc): flash-steam velocity lowers pressure under the disc and chamber pressure closes it.` },
        { id: "2019-20-Q5c", label: "(c)", marks: "18",
          topic: "evaporation", sub: "Construct Dühring lines for NaNO₃–water from I.C.T. data",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The data given concern NaNO₃ solutions and were taken from the international Critical Tables (See attachment). From it construct a Dühring line plot for the NaNO₃-H₂O system.

**Vapour pressures of aqueous solutions of NaNO₃, mm Hg** (I.C.T. III, p. 372; * = supersaturated solution)

| g NaNO₃/100 g H₂O | 0 °C | 25 °C | 50 °C | 75 °C | 100 °C | 125 °C |
|---|---|---|---|---|---|---|
| 0 | 4.58 | 23.76 | 92.54 | 289.32 | 760.0 | 1740.5 |
| 6 | 4.50 | 23.34 | 90.9 | 284.1 | 746.3 | 1709 |
| 10 | 4.42 | 22.93 | 89.2 | 278.9 | 732.5 | 1677 |
| 20 | 4.28 | 22.14 | 86.1 | 268.8 | 705.6 | 1615 |
| 30 | 4.15 | 21.39 | 83.1 | 259.1 | 679.6 | 1554 |
| 40 | 4.04 | 20.69 | 79.6 | 249.9 | 654.8 | 1496 |
| 50 | 3.93 | 20.04 | 77.5 | 241.1 | 631.3 | 1442 |
| 60 | 3.83 | 19.42 | 74.9 | 232.9 | 609.0 | 1390 |
| 70 | 3.73 | 18.83 | 72.56 | 225.1 | 588.1 | 1341 |
| 80 | 3.64* | 18.29 | 70.25 | 217.8 | 568.2 | 1294 |
| 90 | | 17.77 | 68.1 | 210.8 | 549.4 | 1250 |
| 100 | | 17.29* | 66.1 | 204.3 | 531.6 | 1209 |
| 110 | | | 64.2 | 199.4 | 514.8 | 1170 |
| 120 | | | | 192.1 | 498.9 | 1135 |
| 130 | | | | 186.5 | 483.7 | 1097 |
| 140 | | | | 181.2* | 469.4 | 1064 |
| 150 | | | | | 455.7 | 1032 |
| 160 | | | | | 442.6 | 1002 |
| 170 | | | | | 430.1 | 973 |
| 180 | | | | | 418.3* | 945 |
| 190 | | | | | | 919 |
| 200 | | | | | | 893 |
| 210 | | | | | | 869 |
| 220 | | | | | | 846 |
| 230 | | | | | | 824 |`,
          solution: String.raw`**Principle (Dühring's rule).** For a given concentration, the boiling point of the solution plotted against the boiling point of pure water **at the same pressure** is (nearly) a straight line. Each table entry says: at solution temperature T the solution's vapour pressure is p; so the solution boils at T under pressure p, and pure water boils under p at its saturation temperature $T_w(p)$. Each entry gives one point ($T_w$, T).

**Method**
1. For every vapour pressure p in the table find the water saturation temperature $T_w$ at p (steam tables or Antoine; the 0 concentration row reproduces the water table). E.g. 50 g/100 g at 100 °C: p = 631.3 mm Hg → water boils at 94.9 °C under 631.3 mm Hg, so the point is (94.9, 100).
2. Tabulate ($T_w$, T) for each concentration, plot T (solution) against $T_w$, and draw the best straight line through the points of each concentration.

**Water boiling points $T_w$ (°C) corresponding to each table entry** (column heading = solution temperature T):

| g NaNO₃/100 g H₂O | 0 °C | 25 °C | 50 °C | 75 °C | 100 °C | 125 °C |
|---|---|---|---|---|---|---|
| 0 | 0.0 | 25.0 | 50.0 | 75.0 | 100.0 | 125.0 |
| 10 | −0.5 | 24.4 | 49.2 | 74.1 | 98.9 | 123.8 |
| 20 | −0.9 | 23.8 | 48.5 | 73.2 | 97.9 | 122.6 |
| 30 | −1.4 | 23.2 | 47.8 | 72.4 | 96.9 | 121.3 |
| 40 | −1.7 | 22.7 | 47.0 | 71.5 | 95.8 | 120.1 |
| 50 | −2.1 | 22.2 | 46.5 | 70.7 | 94.9 | 119.0 |
| 60 | −2.5 | 21.6 | 45.8 | 69.9 | 93.9 | 117.8 |
| 70 | −2.8 | 21.1 | 45.2 | 69.1 | 93.0 | 116.7 |
| 80 | −3.1 | 20.7 | 44.5 | 68.3 | 92.0 | 115.6 |
| 90 | – | 20.2 | 43.9 | 67.6 | 91.1 | 114.5 |
| 100 | – | 19.8 | 43.4 | 66.9 | 90.3 | 113.5 |
| 110 | – | – | 42.8 | 66.3 | 89.4 | 112.5 |
| 120 | – | – | – | 65.5 | 88.6 | 111.6 |
| 130 | – | – | – | 64.8 | 87.8 | 110.6 |
| 140 | – | – | – | 64.2 | 87.0 | 109.7 |
| 150 | – | – | – | – | 86.2 | 108.8 |
| 160 | – | – | – | – | 85.5 | 107.9 |
| 170 | – | – | – | – | 84.8 | 107.0 |
| 180 | – | – | – | – | 84.1 | 106.2 |
| 190–230 | – | – | – | – | – | 105.4, 104.6, 103.8, 103.0, 102.3 |

3. **Plot** (selected concentrations shown; every concentration gives its own line in the same way):

![Dühring lines for NaNO₃–H₂O: solution boiling point against water boiling point at the same pressure](fig/2019-20-Q5c-sol.svg)

4. **Line parameters** (least squares through the data):

| g NaNO₃/100 g H₂O | slope | BPE at 100 °C water, °C |
|---|---|---|
| 20 | 1.012 | 2.2 |
| 60 | 1.039 | 6.5 |
| 100 | 1.067 | 10.6 |
| 140 | 1.099 | 14.4 |
| 180 | 1.130 | 18.0 |

   The lines are straight (Dühring's rule holds); their slope increases slightly with concentration, so the boiling-point elevation grows with pressure. For 190–230 g/100 g only one point (125 °C) exists; their lines are drawn through that point with the slope extrapolated (≈ 1 + 0.00072 × concentration).

**Use:** for an evaporator at a known pressure, read the water boiling point, go up to the line of the liquor concentration and read the solution boiling point (BPE = difference). Example: 100 g NaNO₃/100 g H₂O at 1 atm (water 100 °C): solution boils at ≈ 110.6 °C.`,
          answer: String.raw`For each entry, find the water boiling point at the solution's vapour pressure (e.g. 50 g/100 g, 100 °C, 631.3 mm Hg → 94.9 °C) and plot solution T vs that water T: straight lines (slopes 1.01–1.13 for 20–180 g/100 g; BPE at 100 °C water ≈ 2.2, 6.5, 10.6, 14.4, 18 °C for 20, 60, 100, 140, 180 g/100 g).` }
      ] },
    { id: "2019-20-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2019-20-Q6a", label: "(a)", marks: "26",
          topic: "drying", sub: "Adiabatic countercurrent rotary dryer: diameter and length",
          type: "numerical", syllabus: "in", repeats: ["2023-24-Q2d", "2022-23-Q3a"],
          text: String.raw`Calculate the diameter and length of an adiabatic rotary dryer to dry 2800 lb/h of a heat-sensitive solid from an initial moisture content of 15% to a final moisture content of 0.5%, both dry basis. The solids have a specific heat of 0.52 Btu/lb °F; they enter at 80°F and must not be heated to a temperature above 125°F. Heating air is available at 260°F and a humidity of 0.01 lb of water per pound of dry air. The maximum allowable mass velocity of the air is 700 lb/ft²-h. (Figure 6(a)).

Figure 6(a) (attached to the paper): humidity chart, air–water at 1 atm (Foust Fig. 19.2).`,
          solution: String.raw`This is MSH Example 24.3, solved in the lecture slides.

**Given:** $\dot m_s$ = 2800 lb/h dry solid; $X_a$ = 0.15, $X_b$ = 0.005; $c_{ps}$ = 0.52 Btu/lb °F; solid in at $T_{sa}$ = 80 °F, out at most 125 °F; air in at $T_{hb}$ = 260 °F, $\mathcal{H}_b$ = 0.01; $G_{max}$ = 700 lb/ft² h.

**Find:** dryer diameter D and length L.

**Assumptions:** adiabatic dryer, countercurrent flow (air enters at the dry-solid end); number of heat-transfer units $N_t$ = 1.5 (economic range 1.5–2.5); solid leaves at the maximum allowed 125 °F; moisture evaporates at the wet-bulb temperature; $c_{pL}$ = 1.0, $c_{pv}$ = 0.45 Btu/lb °F; MSH correlation $Ua = 0.5\,G^{0.67}/D$ Btu/ft³ h °F.

1. **Wet-bulb temperature** of the inlet air (humidity chart, 260 °F and 𝓗 = 0.01, along the adiabatic-saturation line): $T_w$ ≈ 102 °F.

![How to read the humidity chart: 260 °F, 𝓗 = 0.01 → adiabatic-saturation line → T_w ≈ 102 °F](fig/2019-20-Q6a-read.svg)

2. **Air outlet temperature** from the definition of $N_t$ (gas cools toward the wet bulb):

$$N_t = \ln\frac{T_{hb}-T_w}{T_{ha}-T_w}\quad\Rightarrow\quad T_{ha} = 102 + \frac{260-102}{e^{1.5}} = 102 + \frac{158}{4.48} = 137\ ^\circ\mathrm{F}$$

3. **Heat load per lb of dry solid** (heat the solid, heat the water to $T_w$, vaporize it at λ(102 °F) = 1036 Btu/lb, heat the remaining water and the vapour):

$$\frac{q_T}{\dot m_s} = c_{ps}(T_{sb}-T_{sa}) + X_a c_{pL}(T_w - T_{sa}) + (X_a-X_b)\lambda + X_b c_{pL}(T_{sb}-T_w) + (X_a-X_b)c_{pv}(T_{ha}-T_w)$$

$$= 0.52(45) + 0.15(22) + 0.145(1036) + 0.005(23) + 0.145(0.45)(35)$$

$$= 23.4 + 3.3 + 150.2 + 0.1 + 2.3 = 179.3\ \mathrm{Btu/lb}$$

$$q_T = 2800 \times 179.3 = 502{,}000\ \mathrm{Btu/h}$$

4. **Air flow** (humid heat $c_s$ = 0.24 + 0.45 × 0.01 = 0.2445 Btu/lb dry air °F):

$$\dot m_g = \frac{q_T}{c_s(T_{hb}-T_{ha})} = \frac{502{,}000}{0.2445(260-137)} = 16{,}700\ \mathrm{lb\ dry\ air/h}$$

   Outlet humidity = 0.01 + 2800 × 0.145/16,700 = 0.034, well below saturation at 137 °F (check on the chart).

5. **Diameter** at the maximum mass velocity:

$$A = \frac{16{,}700}{700} = 23.9\ \mathrm{ft^2},\qquad D = \sqrt{\frac{4 \times 23.9}{\pi}} = 5.5\ \mathrm{ft}$$

6. **Volumetric coefficient:**

$$Ua = \frac{0.5\,G^{0.67}}{D} = \frac{0.5(700)^{0.67}}{5.5} = \frac{0.5 \times 80.6}{5.5} = 7.3\ \mathrm{Btu/ft^3\,h\,^\circ F}$$

7. **Mean temperature difference** (gas to wet bulb): $\Delta\bar T = (T_{hb}-T_{ha})/N_t = 123/1.5 = 82$ °F (LMTD of 158 and 35 °F).

8. **Length:**

$$L = \frac{q_T}{Ua\,A\,\Delta\bar T} = \frac{502{,}000}{7.3 \times 23.9 \times 82} = 35\ \mathrm{ft}$$

   Check L/D = 35/5.5 = 6.4, inside the usual 4–10 range.

**Result:** rotary dryer **D ≈ 5.5 ft (1.7 m), L ≈ 35 ft (10.7 m)**; air 16,700 lb/h leaving at 137 °F; duty 5.0 × 10⁵ Btu/h.`,
          answer: String.raw`T_w ≈ 102 °F, N_t = 1.5 → air out 137 °F; q_T = 2800 × 179.3 = 5.02 × 10⁵ Btu/h; air 16,700 lb/h → A = 23.9 ft², D = 5.5 ft; Ua = 7.3 Btu/ft³h°F, ΔT = 82 °F → L ≈ 35 ft.` },
        { id: "2019-20-Q6b", label: "(b)", marks: "20⅔",
          topic: "drying", sub: "Short notes: tunnel kiln dryer; merits of spray-dried product",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q3c", "2017-18-Q4c", "2017-18-Q4b"],
          text: String.raw`Write a short note on

(i) Tunnel Kiln Dryer (ii) The Merits of Spray Dried Product`,
          solution: String.raw`### (i) Tunnel kiln (tunnel dryer)

![Tunnel dryer/kiln with trucks moving countercurrent to the gas](fig/2019-20-Q6b-sketch.svg)

- **Construction:** a long refractory-lined tunnel; wet solids are placed on trays or shelves on **trucks (cars)** that move progressively (pushed step by step or continuously on rails) from one end to the other.
- **Heating:** hot combustion gases or hot air, heated directly or indirectly by combustion, or by finned steam coils below about 200 °C; kilns are usually direct fired (natural gas).
- **Flow arrangements:** (i) **parallel (co-current):** hot gas meets the wet charge, fast initial drying, low final temperature: for heat-sensitive or crack-sensitive ware; (ii) **countercurrent:** hottest, driest gas meets the driest product: lowest final moisture, best thermal efficiency; (iii) **combination** (centre exhaust, both ends fed).
- **Ceramic tunnel kilns** (e.g. BISF, Dhaka: one for sanitary ware, one for insulators): several units/zones (preheating, firing, cooling), each with its own burners and computer control; continuous operation.
- **Merits:** continuous, large production, uniform treatment, good heat economy (heat recovered from cooling ware), lower labour than tray/batch dryers. **Limits:** large floor space, high capital cost, slow change of product.
- **Uses:** bricks, tiles, sanitary ware, insulators, refractories, foundry moulds, lumber, food products on trays.

### (ii) Merits of spray-dried product
1. **Uniform, hollow, spherical particles** of narrow size distribution and low bulk density (controllable by atomization and inlet temperature).
2. **High solubility, dispersibility and reactivity:** porous, uniformly sized particles dissolve or react quickly (instant milk and coffee, detergents, dyes).
3. **Quality preserved:** drying takes seconds and, especially in co-current flow, droplets stay near the wet-bulb temperature while wet, so heat-sensitive products (milk, eggs, enzymes, pharmaceuticals, flavours) are not damaged.
4. **Free-flowing, dust-free (agglomerated) powder** that is easy to pack and handle; no grinding needed (the dryer also acts as size reducer and classifier).
5. **Product properties adjustable:** final moisture, particle size, bulk density by changing temperatures, feed solids and atomizer.
6. **Clean, uncontaminated product:** short contact, little hold-up, the product does not touch hot surfaces until dry.

*(Drawback: spray dryers are thermally inefficient, bulky (often > 25 m) and the bulk density can drift with feed solids and gas temperature.)*`,
          answer: String.raw`(i) Trucks of wet ware move through a long refractory tunnel against (or with) hot gas; co-current, countercurrent or combined; continuous, large capacity, good heat economy (bricks, ceramics, sanitary ware). (ii) Spray-dried product: uniform hollow spheres, low bulk density, high solubility, heat-sensitive quality kept (wet-bulb drying), free-flowing, adjustable properties.` }
      ] },
    { id: "2019-20-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2019-20-Q7a", label: "(a)", marks: "15",
          topic: "pumps", sub: "Select a centrifugal pump for 400 gpm, 70 ft at 1750 rpm",
          type: "numerical", syllabus: "in", repeats: ["2018-19-Q2d", "2017-18-Q3b", "2014-15-Q7b"],
          text: String.raw`Suggest a centrifugal pump of the type to supply water at 1750 rpm and rate of 400 gal/min against a 70 ft head. (See attachment)

Attachments: Foust Fig. 21.23, operating ranges of a series of Goulds centrifugal pumps at 1750 rpm (model a × b − c: discharge diameter × suction diameter − maximum impeller diameter, inches); Foust Fig. 21.19, characteristic curves and specific speeds of radial, mixed and axial impellers (radial up to 4200, mixed 4200–9000, axial above 9000).`,
          solution: String.raw`**Given:** water, Q = 400 gal/min, H = 70 ft, N = 1750 rpm.

**Find:** impeller type and pump size.

1. **Specific speed** (US units, as in Fig. 21.19):

$$N_s = \frac{N\sqrt{Q}}{H^{3/4}} = \frac{1750\sqrt{400}}{70^{0.75}} = \frac{1750 \times 20}{24.2} = 1450$$

   $N_s$ = 1450 < 4200, so the duty calls for a **radial-flow (standard centrifugal) impeller**, in the middle of the radial range (500–4200), where efficiency is good and the head curve is stable and rising to shut-off.

![How to read the specific-speed chart: Ns ≈ 1450 → radial-flow field](fig/2019-20-Q7a-read2.svg)

2. **Pump size from the operating-range chart.** Locate 400 gal/min and 70 ft on Fig. 21.23: the point falls in (at the right-hand, high-capacity tip of) the field marked **3 × 4 − 10**, just above the 3 × 4 × 8 field and to the left of the 3 × 4 − 13 field.

![How to read Fig. 21.23: 400 gpm, 70 ft → right-hand tip of the 3×4-10 field](fig/2019-20-Q7a-read.svg)

   So use a **Goulds 3 × 4 − 10** pump: 3-in discharge, 4-in suction, casing for impellers up to 10 in. This is the same pump whose full characteristics are in Fig. 21.17 (used in 2020-21 Q3a).

3. **Impeller and power check.** By the affinity laws the 1750 rpm duty corresponds at 3550 rpm to $Q = 400(3550/1750)$ = 811 gal/min and $H = 70(3550/1750)^2$ = 288 ft, which lies just under the 10-in curve of Fig. 21.17(b): a **10-in (full-size) impeller** is needed. With η ≈ 65 %:

$$P_B = \frac{QH}{3960\,\eta} = \frac{400 \times 70}{3960 \times 0.65} = 10.9\ \mathrm{hp}$$

   → a 15 hp, 1750 rpm motor.

**Result:** a radial-flow centrifugal pump ($N_s$ ≈ 1450), size **3 × 4 − 10** with a ≈ 10-in impeller, ≈ 11 bhp (15 hp motor).`,
          answer: String.raw`N_s = 1750√400/70^0.75 ≈ 1450 → radial-flow impeller; on the Goulds range chart (400 gpm, 70 ft) → 3 × 4 − 10 pump (≈10-in impeller), ≈ 11 bhp at η ≈ 65 % → 15 hp motor.` },
        { id: "2019-20-Q7b", label: "(b)", marks: "15",
          topic: "compressors", sub: "Two-stage compression with 3 psi interstage drop: stage pressures",
          type: "numerical", syllabus: "partial", repeats: ["2017-18-Q3a", "2016-17-Q1b"],
          text: String.raw`For two stage of compression, what should be the pressure across the cylinders if the intercooler and piping pressure drop is 3 psi? Given Suction to the first stage is 0 psig and discharge from second stage is 150 psig.`,
          solution: String.raw`**Given:** $p_1$ = 0 psig = 14.7 psia; final discharge $p_4$ = 150 psig = 164.7 psia; interstage (intercooler + piping) drop Δp = 3 psi.

**Find:** suction and discharge pressure of each cylinder.

**Assumptions:** equal compression ratio r in both stages (minimum total work with perfect intercooling); atmospheric pressure 14.7 psia.

1. **Without the drop** the ideal ratio would be $r = \sqrt{164.7/14.7}$ = 3.347.

2. **With the drop:** stage 1 discharges at $p_2 = 14.7r$; stage 2 suction is $p_3 = p_2 - 3$; stage 2 discharges at $p_3 r = 164.7$:

$$(14.7r - 3)\,r = 164.7\quad\Rightarrow\quad 14.7r^2 - 3r - 164.7 = 0$$

$$r = \frac{3 + \sqrt{9 + 4(14.7)(164.7)}}{2(14.7)} = \frac{3 + 98.46}{29.4} = 3.451$$

3. **Pressures:**

| | suction | discharge | ratio | Δp across cylinder |
|---|---|---|---|---|
| 1st stage | 14.7 psia (0 psig) | 14.7 × 3.451 = 50.7 psia (36.0 psig) | 3.45 | 36.0 psi |
| intercooler + piping | 50.7 psia | 47.7 psia | – | 3.0 psi |
| 2nd stage | 47.7 psia (33.0 psig) | 164.7 psia (150 psig) | 3.45 | 117.0 psi |

   Check: 47.7 × 3.451 = 164.7 psia.

**Result:** first cylinder 0 → **36.0 psig**, second cylinder **33.0 → 150 psig**, each at ratio ≈ 3.45 (slightly above the 3.35 of the no-loss case because the 3 psi drop must be made up).`,
          answer: String.raw`Equal ratios with the 3 psi loss: 14.7r² − 3r − 164.7 = 0 → r = 3.45; stage 1: 14.7 → 50.7 psia (0 → 36.0 psig); stage 2: 47.7 → 164.7 psia (33.0 → 150 psig).` },
        { id: "2019-20-Q7c", label: "(c)", marks: "16⅔",
          topic: "ejectors", sub: "Ejector load: air leakage plus saturated process vapour (70 °F air equivalent)",
          type: "numerical", syllabus: "in", repeats: ["2023-24-Q3b"],
          text: String.raw`A distillation system is to operate with a horizontal over-head condenser, Figure 7(c), and pressures are as marked. The estimated air leakage into the system is 7 lbs./hr. The molecular weight of the product vapor going out the condenser into the ejector (at 80 °F) is 53. The vapor pressure of the condensing vapours is 3 mm Hg. (abs). at 80 °F. (See attachment)

Figure Question 7(c) (Ludwig Fig. 6-19): vacuum system for distillation: column top 8 mm Hg abs, column bottoms 19 mm Hg abs, condenser outlet 5 mm Hg abs at 80 °F, first-stage ejector suction 4 mm Hg abs, barometric intercondenser with 34 ft seal leg, second-stage ejector. Attachments: HEI molecular-weight entrainment-ratio curve (Ludwig Fig. 6-18) and temperature entrainment-ratio curves for air and steam (Ludwig Fig. 6-17).`,
          solution: String.raw`**Find (assumed, the printed question stops at the data):** the total load leaving the condenser to the first-stage ejector and its **70 °F air equivalent**, the quantity used to select the ejector from standard performance curves (Ludwig Example 6-5). The "800 °F" in the printed text is a misprint for 80 °F (the figure and the next sentence give 80 °F).

**Given:** air leakage $W_a$ = 7 lb/h (M = 29); process vapour M = 53, vapour pressure 3 mm Hg at 80 °F; condenser outlet total pressure 5 mm Hg abs at 80 °F.

**Assumptions:** the gas leaving the condenser is saturated with process vapour at 80 °F; Dalton's law.

1. **Partial pressure of air** at the condenser outlet:

$$p_a = P - p_v = 5 - 3 = 2\ \mathrm{mm\ Hg}$$

2. **Process vapour carried with the air** (saturated mixture):

$$W_v = W_a\,\frac{M_v}{M_a}\,\frac{p_v}{p_a} = 7 \times \frac{53}{29} \times \frac{3}{2} = 19.2\ \mathrm{lb/h}$$

3. **Mixture:**

| component | lb/h | lb mol/h |
|---|---|---|
| air | 7.0 | 7/29 = 0.241 |
| process vapour | 19.2 | 19.2/53 = 0.362 |
| total | 26.2 | 0.603 |

$$\bar M = \frac{26.2}{0.603} = 43.4$$

4. **Molecular-weight entrainment ratio** (HEI curve, Fig. 6-18) at M = 43.4: ≈ 1.18 (the ratio of the mass of this gas to the mass of air the same ejector would handle).

![How to read HEI Fig. 6-18: M = 43.4 → ratio ≈ 1.18](fig/2019-20-Q7c-read.svg)

$$\text{air equivalent at }80\ ^\circ\mathrm{F} = \frac{26.2}{1.18} = 22.2\ \mathrm{lb/h}$$

5. **Temperature correction** (Fig. 6-17, air curve) at 80 °F: entrainment ratio ≈ 0.999:

![How to read HEI Fig. 6-17: 80 °F → air line → ratio ≈ 0.999](fig/2019-20-Q7c-read2.svg)

$$\text{70 °F air equivalent} = \frac{22.2}{0.999} = 22.2\ \mathrm{lb/h}$$

**Result:** the first-stage ejector must handle **26.2 lb/h** of mixture (7 lb/h air + 19.2 lb/h vapour, M = 43.4), equivalent to **22.2 lb/h of 70 °F dry air** at 4–5 mm Hg abs suction; this value is compared with the manufacturer's standard 70 °F air curves to choose the ejector (a two-stage unit with barometric intercondenser, possibly three stages).`,
          answer: String.raw`p_air = 5 − 3 = 2 mm Hg; W_v = 7(53/29)(3/2) = 19.2 lb/h; total 26.2 lb/h, M = 43.4; MW ratio 1.18 → 22.2 lb/h air equivalent; temperature factor 0.999 → 22.2 lb/h of 70 °F air.` }
      ] },
    { id: "2019-20-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2019-20-Q8a", label: "(a)", marks: "10",
          topic: "relief", sub: "Styrene runaway: vent area by Fauske nomograph (and Leung check)",
          type: "numerical", syllabus: "in", repeats: ["2020-21-Q4b"],
          text: String.raw`Leung reported on the data of Huff involving a 3500-gal reactor with styrene monomer undergoing adiabatic polymerization after being heated inadvertently to 70°C. The maximum allowable working pressure (MAWP) of the vessel is 5 bar. Given the following data, determine the diameter required for relief vent. Assume a set pressure of 4.5 bar and a maximum pressure of 5.4 bar absolute:

**Data:** Volume (V): 3500 gal = 13.16 m³; reaction mass ($m_o$): 9500 kg; set temperature ($T_s$): 209.4 °C = 482.5 K. Data from VSP: maximum temperature ($T_m$): 219.5 °C = 492.7 K; $(dT/dt)_s$ = 0.493 K/s; $(dT/dt)_m$ = 0.662 K/s.

| | 4.5-bar set | 5.4-bar peak |
|---|---|---|
| $v_f$ (m³/kg) | 0.001388 | 0.001414 |
| $v_g$ (m³/kg) | 0.08553 | 0.07278 |
| $C_p$ (kJ/kg K) | 2.470 | 2.514 |
| $\Delta H_v$ (kJ/kg) | 310.6 | 302.3 |

Estimate the relief vent area using the Fauske nomograph approach. (see attachment)

Figure for Question 8(a) (attached): Crowl & Louvar Fig. 9-9, Fauske nomograph for two-phase reactor reliefs: vent size area per 1000 kg of reactants against self-heat rate (°C/min) for relief set pressures in psia; based on L/D = 400 (ψ = 0.5) and 20 % overpressure.`,
          solution: String.raw`**Given:** $m_o$ = 9500 kg; set pressure 4.5 bar abs = 65 psia; maximum 5.4 bar → overpressure (5.4 − 4.5)/4.5 = 20 %; self-heat rate at set $(dT/dt)_s$ = 0.493 K/s = 29.6 °C/min.

**Find:** two-phase vent area and diameter by Fauske's nomograph.

**Assumptions:** the nomograph is built for discharge piping L/D = 400 (ψ = 0.5) and 20 % overpressure; the real vent is a short nozzle/rupture disc, L/D = 0 (ψ = 1), so the area is scaled by ψ (A ∝ 1/ψ).

1. **Read the nomograph:** self-heat rate 29.6 °C/min on the x-axis, up to the 65 psia set-pressure line, across to the area scale: ≈ **0.013 m² per 1000 kg** of reactants.

![How to read the Fauske nomograph: 29.6 °C/min → 65 psia line → ≈ 0.013 m² per 1000 kg](fig/2019-20-Q8a-read.svg)

2. **Area for 9500 kg at the nomograph conditions** (ψ = 0.5, 20 % OP):

$$A_{0.5} = 0.013 \times \frac{9500}{1000} = 0.124\ \mathrm{m^2}$$

3. **Correct to ψ = 1** (no discharge pipe):

$$A = 0.124\left(\frac{0.5}{1}\right) = 0.062\ \mathrm{m^2},\qquad d = \sqrt{\frac{4(0.062)}{\pi}} = 0.28\ \mathrm{m} = 11.1\ \mathrm{in}$$

   (With an L/D ≈ 400 discharge line, keep A = 0.124 m², d = 0.40 m.)

4. **Check with the detailed two-phase (Leung) method** (Crowl & Louvar Ex. 9-5), using set-point properties, $C_v ≈ C_p$ = 2.470 kJ/kg K, ΔT = 492.7 − 482.5 = 10.2 K:

$$q = \tfrac{1}{2}C_v\left[\left(\tfrac{dT}{dt}\right)_s + \left(\tfrac{dT}{dt}\right)_m\right] = 0.5(2470)(0.493+0.662) = 1426\ \mathrm{W/kg}$$

$$G_T = 0.9\,\psi\,\frac{\Delta H_v}{v_{fg}}\sqrt{\frac{g_c}{C_p T_s}} = 0.9\frac{310{,}600}{0.08414}\sqrt{\frac{1}{2470 \times 482.5}} = 3043\ \mathrm{kg/m^2 s}$$

$$A = \frac{m_o q}{G_T\left[\left(\frac{V}{m_o}\frac{\Delta H_v}{v_{fg}}\right)^{1/2} + (C_v\Delta T)^{1/2}\right]^2} = \frac{9500 \times 1426}{3043\,(71.5 + 158.7)^2} = 0.084\ \mathrm{m^2}$$

   d = 0.33 m (13 in). The nomograph result is about 26 % smaller: it is a quick estimate and consistency check for the detailed method.

**Result:** Fauske nomograph: **A ≈ 0.062 m², d ≈ 0.28 m (11 in)** for a short vent (ψ = 1); detailed two-phase method 0.084 m² (0.33 m), which should be used for the final design.`,
          answer: String.raw`Nomograph (29.6 °C/min, 65 psia) → 0.013 m²/1000 kg → 0.124 m² at ψ = 0.5 → 0.062 m² at ψ = 1, d ≈ 0.28 m (11 in); Leung check: 0.084 m², d = 0.33 m.` },
        { id: "2019-20-Q8b", label: "(b)", marks: "20",
          topic: "relief", sub: "Locate relief devices on a polymerization reactor P&ID",
          type: "sketch", syllabus: "in", repeats: ["2023-24-Q4b", "2022-23-Q4c", "2015-16-Q8b"],
          text: String.raw`Locate relief valve location and state the reason for answer.

Figure (attached to the paper; Crowl & Louvar Example 8-1): polymerization reactor R-1 with agitator and internal cooling coil; monomer in (5 gpm) through V-2; steam (125 psig) through V-4 and cooling water in (200 gpm) through V-6 to the coil, cooling water out through V-5, steam trap through V-7; base pumped by P-1 through V-1 into the bottom line, product out through V-8 and V-9; overhead condenser E-1 (cooling water out 10 gpm via V-11, in via V-10), V-12 to drum D-1 with level control, vacuum through V-15 and pump P-2 (V-13, V-14); nitrogen (100 psig) through PC and V-3 to the reactor.`,
          solution: String.raw`**Method (Crowl & Louvar ch. 8):** examine every vessel and line segment that can be **blocked in** (isolated by valves) or **over-pressured by a source** (pump, steam, nitrogen, reaction, fire, thermal expansion), and place a relief device on each, naming the worst scenario that sizes it.

![The reactor system with relief devices located](fig/2019-20-Q8b-sol.svg)

| relief | location | reason / sizing scenario | device type |
|---|---|---|---|
| **PSV-1a + PSV-1b** | top of reactor R-1 | (1) vessel full of liquid and pump P-1 started inadvertently; (2) cooling coil ruptures, water enters at 200 gpm and 50 psig; (3) N₂ regulator fails, critical flow through the 1-in N₂ line; (4) **runaway reaction** after loss of cooling (largest load) | rupture disc (1a) to protect the valve from the reactive, polymerizing monomer, in series with a **safety relief valve** (1b) because a runaway gives two-phase flow |
| **PSV-2** | discharge of pump P-1, between the pump and V-1 | V-1 closed inadvertently while P-1 runs: dead-heading, relieve 100 gpm at 50 psig | liquid **relief valve** (back to the suction/base tank) |
| **PSV-3** | cooling-water line to the coil, between V-6 and the coil | the water-filled line is blocked in (V-6 and V-5 closed) and heated by 125 psig steam: thermal expansion/vaporization | **relief valve** (liquid; conventional) |
| **PSV-4** | drum D-1 (overhead receiver) | N₂ regulator failure gives critical flow (½-in line) through the overhead system to D-1, which can be isolated by V-12/V-15/V-13; the other R-1 scenarios are relieved by PSV-1. Vent to a scrubber with possibly large backpressure | **safety relief valve**, balanced bellows (liquid or vapour, variable backpressure) |
| **PSV-5** | cooling coil, between the coil and V-5 | water blocked inside the coil while the heat of reaction heats it: thermal expansion | **relief valve** (liquid only) |

**Reasons in general:** each relief protects one equipment item or line that can be isolated and still have a pressure source; liquid services get relief valves, gas/two-phase services safety relief valves; a rupture disc is placed ahead of a valve that would be fouled or plugged by the reacting monomer; vents go to a containment/treatment system (knock-out drum, scrubber, flare), which is why a balanced-bellows valve is chosen where the backpressure varies.`,
          answer: String.raw`PSV-1a (rupture disc) + PSV-1b (safety relief) on R-1 for pump/coil-leak/N₂/runaway (two-phase); PSV-2 relief valve on P-1 discharge (V-1 closed); PSV-3 on the water line heated by steam; PSV-4 balanced-bellows safety relief on D-1 (N₂ failure, scrubber backpressure); PSV-5 on the coil (blocked water, thermal expansion).` },
        { id: "2019-20-Q8c", label: "(c)", marks: "16⅔",
          topic: "compressors", sub: "Materials of construction of reciprocating compressor parts",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Write the different Materials of Construction of different parts of the Reciprocating Compressor.`,
          solution: String.raw`Materials depend on pressure, temperature, gas (corrosive, H₂S, H₂, O₂, wet), and whether the cylinder is lubricated (API 618 practice):

| part | usual materials | notes |
|---|---|---|
| **Frame (crankcase)** | grey cast iron; fabricated or cast steel for large frames | rigidity, damping |
| **Crankshaft** | forged carbon or alloy steel (AISI 1040/4140) | fatigue strength |
| **Connecting rod** | forged steel; ductile iron | |
| **Crosshead** | cast iron, ductile iron or cast steel, with babbitt/bronze shoes | |
| **Main and crankpin bearings** | babbitt (white metal) lined steel shells, tri-metal, bronze bushings | |
| **Cylinder** | cast iron (to ≈ 1000 psig), nodular (ductile) iron (to ≈ 1500 psig), cast steel (to ≈ 2500 psig), forged steel (higher); stainless steel for corrosive or wet gases | water-jacketed |
| **Cylinder liner** | close-grained cast iron, Ni-resist; hard-chrome or ceramic coated | replaceable wear surface |
| **Piston** | cast iron, aluminium alloy (lightweight, large bores), steel or stainless | |
| **Piston rings and rider (wear) bands** | cast iron, bronze (lubricated); filled PTFE (glass, carbon, bronze), PEEK for non-lubricated service | |
| **Piston rod** | carbon or alloy steel (AISI 4140), 17-4 PH stainless; surface hardened or coated (tungsten carbide, chrome, ceramic) at the packing | |
| **Rod packing** | filled PTFE, carbon, bronze, cast-iron rings in a steel case | vented/purged for toxic gases |
| **Valves** | seats and guards: steel, ductile iron, stainless; plates/rings: hardened stainless (410, 17-4 PH) or thermoplastics (PEEK, nylon); springs: stainless or Inconel | |
| **Distance piece, bolting** | steel; alloy bolting (B7) | |
| **Pulsation dampeners, intercoolers, separators** | carbon steel (ASME VIII), stainless where wet/corrosive; cooler tubes copper alloys or stainless | |
| **Gaskets / O-rings** | spiral-wound stainless/graphite, Viton, PTFE | |

**Special services:** sour gas (H₂S): NACE MR0175 materials, hardness ≤ 22 HRC; hydrogen: steels with limited strength/hardness to avoid embrittlement; oxygen: oil-free cylinders, bronze/stainless parts, PTFE rings, no aluminium; chlorine/HCl: dry gas with special alloys; oil-free (food, instrument air): non-lube rings and packing.`,
          answer: String.raw`Frame cast iron/steel; crankshaft and rods forged steel; bearings babbitt/tri-metal; cylinders cast iron, ductile iron, cast/forged steel or stainless with cast-iron liners; pistons cast iron/aluminium/steel; rings and riders cast iron, bronze or filled PTFE/PEEK; rods alloy or 17-4 PH steel, coated; packing PTFE/bronze; valves stainless plates or PEEK; special rules for H₂S, H₂, O₂.` }
      ] }
  ]
});
