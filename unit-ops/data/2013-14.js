QB.paper({
  year: "2013-14", date: "17/01/2016", marks: 280,
  rules: String.raw`Section A: four questions, answer any THREE. Section B: four questions, answer any THREE. Use separate scripts for each section. Ludwig Figs. 6-17 (temperature entrainment ratio) and 6-18 (molecular-weight entrainment ratio) are attached for Q5(b). (The Section B page header misprints the course as "CHE 111".)`,
  questions: [
    { id: "2013-14-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q1a", label: "(a)", marks: "5",
          topic: "size-reduction", sub: "Main purposes of size reduction",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the main purposes of size reduction?`,
          solution: String.raw`Size reduction (comminution) is carried out to:

1. **Increase the specific surface** of the solid: faster chemical reaction, dissolution, leaching/extraction, drying, adsorption and combustion (pulverized coal burns like a gas).
2. **Liberate** valuable constituents from the gangue (ore dressing) or separate components that are locked together (e.g. oil from seeds, sugar from cane).
3. **Meet product specifications** of size and size distribution: cement, pigments, fillers, flour, pharmaceuticals (tablets, inhalers), fertilizers.
4. **Improve mixing and blending** of solids (more uniform mixtures with finer particles) and the strength of formed or fired products (ceramics, cement concrete).
5. **Make handling, transport and storage easier**: reduce lumps to a size suitable for conveying, feeding and further processing; reduce bulk (e.g. waste, scrap).
6. **Improve heat transfer** and colour, taste or appearance (food, paints).`,
          answer: String.raw`To increase surface area (reaction, dissolution, drying, combustion), liberate valuable components, meet product size specifications, improve mixing and product properties, and ease handling, transport and further processing.` },
        { id: "2013-14-Q1b", label: "(b)", marks: "7",
          topic: "size-reduction", sub: "Flow diagram of closed-circuit grinding",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw a typical flow diagram for a close circuit grinding system.`,
          solution: String.raw`![Closed-circuit grinding: mill and classifier with oversize recycle](fig/2013-14-Q1b-sketch.svg)

**Working:** fresh feed F and the recycled oversize R enter the mill, which is operated with **free crushing** (low feed rate, short residence time). The mill discharge goes to a classifier (screen, hydrocyclone, rake/spiral classifier for wet grinding; air classifier for dry grinding). Fines (product, = F at steady state) are removed as soon as they reach the required size; the oversize is returned to the mill. The circulating load R/F is typically 1–4 (up to 5–6 in cement mills).

**Compared with open circuit** (choke feeding, single pass): less over-grinding and fewer slimes, a narrower size distribution, higher capacity and lower energy per tonne; preferred whenever a large reduction ratio or a closely sized product is needed.`,
          answer: String.raw`Feed + recycle → mill (free crushing) → classifier/screen → fines as product; oversize returned to the mill (circulating load ≈ 1–4).` },
        { id: "2013-14-Q1c", label: "(c)", marks: "20",
          topic: "size-reduction", sub: "Size reduction steps for ceramic sanitary ware manufacture",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Give an outline of the size reduction steps and equipment employed in Bangladesh Insulator and Sanitary Ware Factory Ltd. at Mirpur for the production of ceramic sanitary ware.`,
          solution: String.raw`> The outline below is the standard vitreous-china (sanitary ware) body and glaze preparation route used by plants such as BISF, Mirpur; individual equipment sizes at the factory may differ.

**Raw materials:** plastic materials (ball clay, kaolin/china clay) and non-plastic hard materials (feldspar and quartz/silica sand as lumps or coarse grits); glaze materials (feldspar, quartz, zircon opacifier, frits, colorants).

| Step | Equipment | Force | Size |
|---|---|---|---|
| 1. Sorting, washing of lumpy feldspar and quartz | Hand picking, washing | – | lumps up to ≈ 150–300 mm |
| 2. **Primary crushing** of hard rocks | **Jaw crusher** | Compression | → 25–50 mm |
| 3. **Secondary crushing** | **Edge-runner (pan) mill**, roll crusher or hammer mill | Compression + attrition / impact | → 1–6 mm (grits) |
| 4. **Fine wet grinding** of non-plastics (feldspar + quartz, some clay) with water | **Ball mills** lined with alumina or flint (silex) blocks and charged with alumina or flint pebbles (iron-free), batch, several hours | Impact + attrition | slip with residue ≈ 1–2% on 325 mesh (≈ 45 μm) |
| 5. **Blunging** (dispersing) of ball clay and kaolin in water with deflocculant (sodium silicate, soda ash) | **Blungers** (high-speed agitated tanks) | Shear | clay broken to primary particles (< 2–10 μm) |
| 6. Mixing of ground slip and clay slip | Agitated slip tanks | – | – |
| 7. **Screening** and **iron removal** | Vibrating screens (≈ 80–120 mesh), magnetic separators | – | removes oversize, grit and iron |
| 8. Storage and ageing of the casting slip, density and viscosity control | Agitated storage tanks | – | – |
| 9. **Glaze preparation** | **Ball mills** (smaller, alumina-lined) grinding the glaze batch very fine | Impact + attrition | ≈ 10–20 μm, residue < 0.1% on 325 mesh |

The prepared slip is then cast in plaster (or pressure-cast in resin) moulds, the green ware is dried, sprayed with glaze and fired in a tunnel kiln at about 1200–1250 °C, sorted and packed.

**Why this sequence:** hard non-plastics need staged reduction (jaw → roll/edge runner → ball mill) because one machine cannot give a large reduction ratio; wet grinding in ball mills gives a fine, dust-free, easily handled slip; flint or alumina media and linings avoid iron contamination that would discolour the white ware.`,
          answer: String.raw`Hard feldspar/quartz: jaw crusher → edge-runner/roll crusher or hammer mill → wet ball mill (alumina/flint-lined, pebble media) to slip ≈ 45 μm; clays blunged in water; slips mixed, screened, de-ironed, aged; glaze ground fine in ball mills; then casting, drying, glazing, tunnel-kiln firing.` },
        { id: "2013-14-Q1d", label: "(d)", marks: "14⅔",
          topic: "size-reduction", sub: "Conical ball mill: peripheral speed, ball size and ball-to-material ratio",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw a cut view of a ball mill showing its peripheral speed, ball size, sizes of the materials to be crushed and ball to material ratio at each section.`,
          solution: String.raw`The figure is the conical (Hardinge) ball mill of Coulson & Richardson Vol. 2 (course slides), which shows "how energy is proportioned to the work required".

![Conical ball mill cut view with peripheral speed, ball size, material size and ball/material ratio in each section](fig/2013-14-Q1d-sketch.svg)

| Section | Shell diameter | Peripheral speed | Ball size | Material size | Ball : material volume |
|---|---|---|---|---|---|
| Feed (cylindrical) section | largest | 3.3 m/s | 125 mm | 50 mm | 15.6 : 1 |
| Middle of cone | medium | 2.0 m/s | 90 mm | 25 mm | 47 : 1 |
| Discharge end of cone | smallest | 1.3 m/s | 64 mm | 12 mm | 150 : 1 |

**How it works:** the balls classify themselves by size along the mill: the large balls move to the large-diameter feed end, where they fall from the greatest height at the highest peripheral speed and deliver the large impact needed to break the coarse feed. Moving toward the discharge cone the diameter, peripheral speed and ball size fall, and the number of balls per unit volume of material rises, so the finer material receives many smaller blows (more attrition). Energy is thus matched to the particle size at each section, giving efficient grinding with less over-grinding. Overall mill speed is kept at about 50–75% of the critical speed $n_c = \frac{1}{2\pi}\sqrt{\frac{g}{R-r}}$.`,
          answer: String.raw`Conical mill: feed section 3.3 m/s, 125 mm balls on 50 mm material (15.6:1); middle 2.0 m/s, 90 mm balls on 25 mm (47:1); discharge 1.3 m/s, 64 mm balls on 12 mm (150:1).` }
      ] },
    { id: "2013-14-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q2a", label: "(a)", marks: "11",
          topic: "other", sub: "Major steam turbine types and selection guides for process plants",
          type: "theory", syllabus: "out", repeats: [],
          text: String.raw`What are the major types of turbines and their section guides for process industries?`,
          solution: String.raw`**Major types**

| Basis | Types |
|---|---|
| Principle of energy conversion | Impulse (De Laval, Curtis, Rateau); reaction (Parsons); impulse–reaction combinations |
| Exhaust / steam path | Condensing; back-pressure (non-condensing); extraction (automatic, bleed); induction (mixed pressure); extraction–induction; reheat |
| Number of stages | Single-stage (single-valve, solid-wheel; small drives) ; multistage (multi-valve) |
| Flow direction | Axial (most), radial (Ljungström) |
| Casing / shaft | Single casing; tandem compound; cross compound |
| Service (API) | General purpose, API 611 (non-critical, usually spared drives: pumps, fans, small compressors); special purpose, API 612 (critical, unspared: large compressors, generators) |

**Selection guides for process industries**

1. **Power and speed:** single-stage turbines for small drives (to about 1–2 MW, 3000–6000 rpm), multistage for larger power and higher efficiency; direct drive of high-speed centrifugal compressors avoids gears; variable speed gives easy capacity control.
2. **Plant steam balance:** if the plant needs low-pressure process steam, use back-pressure turbines (the turbine is a "letdown station" that produces power); extraction types when steam is needed at an intermediate pressure in varying amounts; induction types to use surplus steam; condensing types only when power alone is needed.
3. **Steam conditions** (inlet pressure, superheat; exhaust pressure) and **availability of cooling water** for a condenser.
4. **Efficiency vs cost:** single-stage turbines are cheap but inefficient (≈ 20–50%); multistage 60–80%; justify by steam cost.
5. **Reliability and sparing:** turbines for essential spare pumps (run during a power failure), critical service needs API 612 design, monitoring and trips.
6. **Control requirements:** governor type (mechanical-hydraulic, electronic), extraction or back-pressure control, start-up and warm-up needs.`,
          answer: String.raw`Types: impulse/reaction; condensing, back-pressure, extraction, induction, reheat; single- or multistage; axial/radial; single/tandem/cross-compound; API 611 general-purpose vs API 612 special-purpose. Select by power and speed, plant steam balance, steam conditions and cooling water, efficiency vs cost, reliability/sparing and control.` },
        { id: "2013-14-Q2b", label: "(b)", marks: "20",
          topic: "other", sub: "Pressure, velocity and pressure–velocity compounding of impulse turbines",
          type: "sketch", syllabus: "out", repeats: ["2018-19-Q6b", "2012-13-Q2a"],
          text: String.raw`What are the different types of staging of impulse turbine? Schematically show the steam flow through different types of impulse staging and also show the pressure and steam velocity profiles for the impulse staging.`,
          solution: String.raw`A single impulse stage (De Laval) that expands steam from boiler to condenser pressure gives a very high jet velocity (≈ 1000–1500 m/s), so the optimum blade speed ($U \approx V_1\cos\alpha/2$) would be excessive and the leaving loss large. **Compounding** splits the energy over several rows.

![Pressure-compounded, velocity-compounded and pressure-velocity compounded impulse staging with pressure and velocity profiles](fig/2013-14-Q2b-sketch.svg)

**1. Pressure compounding (Rateau staging).** Several simple impulse stages in series, each a row of nozzles followed by a row of moving blades. The total pressure drop is divided among the nozzle rows; pressure is constant across each moving row. Velocity rises in each nozzle and falls in the following moving blades (a saw-tooth profile), so blade speeds are moderate.
- High efficiency, moderate speed; but many stages, longer and costlier machine; nozzle diaphragms between wheels with labyrinth seals.

**2. Velocity compounding (Curtis staging).** One nozzle row expands the steam through the whole pressure drop to a very high velocity; this velocity is absorbed in two (or three) rows of moving blades separated by **fixed guide blades**, which only redirect the steam into the next moving row (no expansion, pressure constant after the nozzle). Velocity falls stepwise in each moving row.
- Compact, short, few stages, cheap, low speed for a large enthalpy drop; low efficiency (friction in many rows); used as the first (control) stage of large turbines and in small drive turbines.

**3. Pressure–velocity compounding.** Several Curtis (velocity-compounded) stages in series, each preceded by its own nozzle row that takes part of the total pressure drop. Combines a large drop per stage with reasonable efficiency and length.

**Profiles (impulse stage):** pressure falls only in nozzles (constant in moving and guide rows); absolute velocity rises in nozzles and falls in moving rows (constant, minus friction, in guide rows).`,
          answer: String.raw`Pressure compounding (Rateau: N–M repeated, pressure drops in each nozzle row, velocity rises and falls per stage), velocity compounding (Curtis: one nozzle, M–G–M rows absorb velocity stepwise, pressure constant after nozzle), and pressure–velocity compounding (Curtis stages in series).` },
        { id: "2013-14-Q2c", label: "(c)", marks: "15⅔",
          topic: "other", sub: "Health-monitoring configuration of a steam turbine",
          type: "sketch", syllabus: "out", repeats: [],
          text: String.raw`Schematically show the health monitoring configuration of a steam turbine.`,
          solution: String.raw`Health (condition) monitoring uses permanently installed transducers wired to a machinery protection system (API 670) that alarms, trips and trends the data for diagnosis.

![Monitoring points on a steam turbine train](fig/2013-14-Q2c-sketch.svg)

| Measurement | Transducer and location | Detects |
|---|---|---|
| Radial shaft vibration | Two non-contacting eddy-current proximity probes (X and Y, 90° apart) at each journal bearing | Unbalance, misalignment, rubs, oil whirl, cracked shaft |
| Axial position (thrust) | Two proximity probes facing the thrust collar | Thrust-bearing wear or failure |
| Keyphasor (phase reference) | Proximity probe on a notch of the shaft | Phase angle, speed; used for orbit and Bode plots |
| Speed / overspeed | Magnetic or proximity speed pickups (often 3, 2-out-of-3 voting) | Overspeed → trip of stop valve |
| Casing (seismic) vibration | Velocity or acceleration transducers on bearing housings | Structural vibration |
| Bearing metal and oil temperatures | RTDs/thermocouples in journal and thrust pads, oil drain | Bearing distress, lubrication failure |
| Lube-oil system | Pressure, temperature, level, filter ΔP switches | Low oil pressure trip, auxiliary pump start |
| Thermal expansion | Casing expansion and differential (rotor–casing) expansion probes, eccentricity | Rubbing during start-up and load change |
| Process | Inlet steam P, T, flow; stage and exhaust P, T; valve positions; gland steam; condenser vacuum | Fouling (rising stage pressures), efficiency loss, water induction, low vacuum |

**Configuration:** transducers → proximitor/transmitters → monitor rack (alarm and danger set points, 2-out-of-2 or 2-out-of-3 voting) → trip relays acting on the emergency stop valve; buffered outputs → DCS and a condition-monitoring computer (trend, spectrum, orbit, waterfall and Bode plots) for predictive maintenance.`,
          answer: String.raw`X–Y proximity probes at each bearing, axial-position probes at the thrust collar, keyphasor and overspeed pickups, casing vibration, bearing temperature RTDs, lube-oil P/T, casing and differential expansion, process P/T/flow; all to an API 670 monitor rack with alarms/trips and a diagnostic system.` }
      ] },
    { id: "2013-14-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q3a", label: "(a)", marks: "30",
          topic: "dust-collection", sub: "Size ranges and separation mechanisms of cyclone, ESP, fabric filter",
          type: "sketch", syllabus: "in", repeats: ["2014-15-Q1bi"],
          text: String.raw`What are solid particle size ranges that can be effectively separated from gaseous medium by cyclone separator, ESP and fabric filter? Also describe their particle separation mechanism with neat sketches.`,
          solution: String.raw`| Collector | Effective size range | Typical efficiency | Pressure drop |
|---|---|---|---|
| Cyclone | ≈ 5–200 μm (high-efficiency units down to ≈ 5 μm; > 10–20 μm for conventional) | 50–95% (≈ 99% above 40 μm) | 0.5–2 kPa (2–8 in water) |
| Electrostatic precipitator | ≈ 0.05 (0.01)–50 μm; > 0.25 μm at high efficiency (Ludwig Table 4-6) | 95–99.9% | very low, 0.1–0.5 kPa |
| Fabric filter | ≈ 0.1–100 μm (> 0.25–0.4 μm at high efficiency) | > 99–99.9% | 1–5 kPa |

![Separation mechanisms: cyclone, ESP, fabric filter](fig/2013-14-Q3a-sketch.svg)

**Cyclone: centrifugal force.** Dusty gas enters tangentially at the top of a cylinder–cone body and spirals downward in an outer vortex. The centrifugal force on a particle, $F = mv_t^2/r$, is hundreds of times gravity; particles migrate across the streamlines to the wall, lose momentum and slide down the cone into the dust hopper. The gas reverses near the cone apex and leaves upward through the central vortex finder (inner vortex). The cut size (50% efficiency) from the Lapple model is
$$d_{50} = \sqrt{\frac{9\mu W}{2\pi N_e V_i(\rho_p - \rho)}}$$
(W = inlet width, $N_e$ = effective turns ≈ 5, $V_i$ = inlet velocity), so small diameters and high velocities catch finer dust at higher ΔP.

**ESP: electrical force.** A high negative DC voltage (30–75 kV) on discharge wires between grounded collecting plates creates a corona: gas ions charge the particles (field charging > 1 μm, diffusion charging < 0.2 μm). The electric field drives the charged particles to the plates at a migration velocity w, where they lose charge and form a layer removed by rapping into hoppers (or washed in wet ESPs). Efficiency follows the Deutsch equation
$$\eta = 1 - \exp\!\left(-\frac{wA}{Q}\right)$$
(A = plate area, Q = gas flow). Performance depends strongly on dust resistivity ($10^4$–$10^{10}$ Ω·cm best).

**Fabric filter: filtration through a fabric and dust cake.** Gas passes through woven or felted bags; particles are caught by **inertial impaction** (> 1 μm), **interception**, **Brownian diffusion** (< 0.5 μm) and electrostatic attraction on the fibres; the dust cake that builds up then acts as the main filter by **sieving**, raising efficiency to > 99.9%. The cake is removed periodically by shaking, reverse air or pulse jets. Design variable: air-to-cloth ratio (filtration velocity).`,
          answer: String.raw`Cyclone ≈ 5–200 μm by centrifugal force (d₅₀ from the Lapple equation); ESP ≈ 0.05–50 μm (> 0.25 μm at high efficiency) by corona charging and electric-field migration (η = 1 − e^{−wA/Q}); fabric filter ≈ 0.1–100 μm by impaction, interception, diffusion and sieving by the dust cake (> 99.9%).` },
        { id: "2013-14-Q3b", label: "(b)", marks: "16⅔",
          topic: "separator-selection", sub: "Air-to-cloth ratio, simplified Sylvan chart and separator selection steps",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`What does 'A/C' ratio signify in fabric filtration? Draw a simplified "Syfvan Chart" [Sylvan chart] and outline the steps for "preliminary selection of the separator type" to be used for a given gas-solid separation problem.`,
          solution: String.raw`**Air-to-cloth (A/C) ratio** = actual volumetric gas flow / net cloth area (acfm per ft², i.e. ft/min, or m³/min per m² = m/min): it is the **superficial filtration velocity** through the fabric. It fixes the cloth area ($A_{nc} = Q/(A/C)$), hence the size and cost of the bag house, and governs performance:
- low-energy shaker and reverse-air units run at 1:1–3:1 (≈ 0.3–1 m/min); pulse-jet units at 5:1–15:1;
- a higher A/C favours capture by impaction but raises the pressure drop, shortens bag life and can blow dust through (lower efficiency); for diffusion capture it shortens the residence time. "Normal" ≈ 3:1, "high" ≥ 6:1.

**Simplified Sylvan chart** (Ludwig Ch. 4; course slides): for each collector type the particle-size range over which it is effective, with the dust loading on the vertical scale (dust collectors for loadings above ≈ 0.1 grain/ft³, air filters for very light loadings).

![Simplified Sylvan-type chart with the kiln-dust example line](fig/2013-14-Q3b-sketch.svg)

**Steps for preliminary selection of the separator type**

1. Define the problem: gas flow rate and temperature, dust **concentration** (grains/ft³ or g/m³), **particle size distribution** (mean size), required outlet loading or efficiency (emission limit).
2. Locate the point (mean particle size, concentration) on the Sylvan chart.
3. **Move vertically downward** from this point: every collector band crossed can handle that size, and the chart gives its approximate efficiency (low-resistance cyclone, high-efficiency centrifugal, wet collector, fabric arrester, ESP).
4. Choose the collectors whose efficiency meets the requirement; if the loading is heavy, select a cheap **pre-collector** (e.g. high-efficiency cyclone) and calculate its outlet loading.
5. Re-enter the chart with the reduced loading (and finer mean size) to choose the **final collector**.
6. Check practical limits: temperature, humidity and dew point, stickiness, corrosiveness, explosion hazard, value of the dust (dry recovery), water availability and sludge disposal, pressure drop, space and cost; confirm with Perry's chart, fractional-efficiency data and vendors.

**Course example:** kiln dust 7.5 grains/ft³, mean size 9 μm: low-resistance cyclone < 50%, high-efficiency centrifugal 60–80%, wet collector, fabric arrester or ESP > 96%. Use a high-efficiency cyclone pre-collector (70%): outlet 7.5 × (1 − 0.70) = 2.25 grains/ft³, then a fabric filter or ESP as final collector.`,
          answer: String.raw`A/C = gas flow/net cloth area = filtration velocity (1–3 ft/min shaker, 5–15 pulse-jet); sets cloth area, ΔP and efficiency. Sylvan chart: collector bands vs particle size (and loading); selection: locate size and loading, go down to find suitable collectors and efficiencies, add a pre-collector for heavy loads (e.g. 7.5 → 2.25 gr/ft³ with a 70% cyclone), re-enter for the final collector, check T, humidity, stickiness, cost.` }
      ] },
    { id: "2013-14-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q4a", label: "(a)", marks: "10",
          topic: "solids-handling", sub: "Types and selection criteria of mechanical conveyors",
          type: "theory", syllabus: "in", repeats: ["2014-15-Q1bvi"],
          text: String.raw`What are the major types and general selection criteria of mechanical conveyers?`,
          solution: String.raw`**Uses:** transporting bulk solids, feeding, discharging, metering and proportioning (Shamlou, *Handling of Bulk Solids*).

**Types**

| Type | Principle | Typical use |
|---|---|---|
| **Belt conveyors** (flat or troughed, 15–45° troughing idlers) | Endless belt over carrying and return idlers | Large tonnages over long horizontal or gently inclined (≤ 22°) paths; abrasive, wet or dry material |
| **Screw conveyors / elevators** | Rotating helical screw in a trough or tube | Short distances (< 100 m), feeding/metering, mixing in transit, enclosed (dusty) duty; T up to ≈ 120 °C |
| **Bucket elevators** (centrifugal or gravity discharge) | Buckets on a chain or belt | Vertical lifting with small floor area |
| **Chain conveyors / elevators** (drag, flight, en-masse, apron) | Chain with flights or plates drags the material | Hot, lumpy or abrasive solids, enclosed conveying, inclined or vertical paths |
| Also: vibratory conveyors, roller conveyors, air-supported belts | | |

**General selection criteria**

1. **Capacity** (t/h, m³/h).
2. **Conveying distance.**
3. **Configuration of the path:** horizontal, inclined, vertical, or a combination; number of loading and discharge points.
4. **Properties of the bulk solid:** bulk density, particle size and lump size, abrasiveness, flowability (stickiness, cohesiveness), friability (degradation), toxicity, corrosiveness, explosibility (dust) and temperature, moisture.
5. Need for enclosure (dust, contamination), cleaning and hygiene.
6. Power consumption, capital and maintenance cost, space and noise.
7. Additional functions in transit: weighing, mixing, cooling, drying, sorting.`,
          answer: String.raw`Types: belt, screw, bucket elevator, chain (drag/flight/apron) conveyors (plus vibratory). Selection by capacity, distance, path configuration (horizontal/inclined/vertical) and solid properties (bulk density, size, abrasiveness, flowability, toxicity, corrosiveness, explosibility, temperature), plus enclosure, cost and power.` },
        { id: "2013-14-Q4b", label: "(b)", marks: "10",
          topic: "relief", sub: "Force balance showing why balanced-bellows valves resist back pressure",
          type: "derivation", syllabus: "in", repeats: ["2014-15-Q4a"],
          text: String.raw`Show mathematically (with neat sketch) the advantages of balanced safety valve over traditional safety valve.`,
          solution: String.raw`![Forces on the disc of a conventional and of a balanced-bellows valve](fig/2014-15-Q4a-sketch.svg)

**Notation:** $P_1$ = inlet (vessel) pressure acting on the nozzle area $A_N$; $P_b$ = back pressure in the valve body/outlet; $A_D$ = disc area; $F_s$ = spring force; $A_B$ = effective area of the bellows. Gauge pressures.

1. **Conventional valve** (bonnet vented to the outlet, so $P_b$ acts on the whole top of the disc):
$$\text{upward} = P_1A_N + P_b(A_D - A_N),\qquad \text{downward} = F_s + P_bA_D$$
The valve opens when upward ≥ downward:
$$P_1A_N \ge F_s + P_bA_N\ \Rightarrow\ P_{set} = \frac{F_s}{A_N} + P_b$$
The opening pressure **rises one-for-one with the back pressure**; a variable (built-up) back pressure also changes the lift and capacity and can cause chatter.

2. **Balanced-bellows valve:** a bellows of effective area $A_B \approx A_N$ is sealed to the disc; its inside (and the bonnet) is vented to the atmosphere, so $P_b$ acts only on the annulus $A_D - A_B$ on top:
$$\text{upward} = P_1A_N + P_b(A_D - A_N),\qquad \text{downward} = F_s + P_b(A_D - A_B)$$
$$P_1A_N \ge F_s + P_b(A_N - A_B)\ \xrightarrow{A_B = A_N}\ P_{set} = \frac{F_s}{A_N}$$
The set pressure is **independent of the back pressure**.

3. **Example:** spring set for $F_s/A_N$ = 100 psig on a vessel with MAWP 100 psig; the flare header back pressure varies 0–30 psig. Conventional valve opens at 100–130 psig, i.e. up to 30% above MAWP (unsafe); balanced valve always opens at 100 psig.

**Advantages of the balanced valve:** constant set pressure with variable back pressure (common relief headers, flares, scrubbers); capacity is much less affected (usable to ≈ 30–50% back pressure with the $K_b$ correction, vs ≈ 10% for conventional valves); the bellows protects the spring, guide and bonnet from corrosive or fouling fluids. Disadvantages: higher cost, the bellows can fail (bonnet vent must be kept open and piped safely).`,
          answer: String.raw`Conventional: P_set = F_s/A_N + P_b (set pressure rises with back pressure). Balanced bellows (A_B = A_N, bonnet vented): P_set = F_s/A_N, independent of P_b; also less capacity loss and spring protection.` },
        { id: "2013-14-Q4c", label: "(c)", marks: "10",
          topic: "relief", sub: "Guidelines for installing relief devices on pressure vessels",
          type: "theory", syllabus: "in", repeats: ["2011-12-Q4d"],
          text: String.raw`Write the guidelines for installing safety devices on a pressure vessel.`,
          solution: String.raw`(Ludwig Ch. 7, ASME VIII UG-125 to UG-136, API RP 520 Part II; Crowl & Louvar Ch. 8.)

**Inlet side**
1. Mount the device **directly on the vessel** (vapour space, top nozzle) or on a short, straight, large inlet pipe; inlet pipe at least the size of the valve inlet.
2. Total inlet pressure loss (friction + velocity head) at the relieving rate **≤ 3% of set pressure**, to avoid chatter.
3. **No block valve** between the vessel and the device, unless it is a full-port valve car-sealed or locked open, or interlocked with a spare device (dual valves on a three-way changeover valve) so that protection is never lost during maintenance.
4. Avoid turbulence at the inlet: keep the valve 8–10 pipe diameters away from elbows, tees, control valves and pulsating sources.
5. Mount spring valves **vertically upright**; keep inlet lines free of pockets and self-draining to the vessel.
6. A rupture disk under a relief valve must be non-fragmenting, close to the valve, with a pressure gauge, try-cock or excess-flow indicator in the space between to detect a leak or burst.

**Outlet side**
7. Discharge to a **safe location**: closed systems (knockout drum, flare, scrubber, condenser) for toxic or flammable fluids; atmospheric vents at least 3 m above platforms and away from air intakes and ignition sources.
8. Limit back pressure: ≤ 10% of set pressure for conventional valves (use balanced bellows or pilot valves for higher or variable back pressure); vent the bellows bonnet to a safe place.
9. Discharge piping self-draining (no liquid pockets), with a weep hole or drain at the low point of atmospheric vents; rain caps that do not add back pressure.
10. **Support** the piping independently of the valve for weight, thermal expansion and the **reaction force** of the discharge jet; avoid stressing the valve body.
11. Size outlet piping and headers for the maximum simultaneous relief; no reduction in size below the valve outlet.

**General**
12. Set pressure ≤ MAWP (single device; additional devices up to 105%); accumulation 10% (16% multiple devices, 21% fire).
13. Provide access for inspection, testing and removal; tag set pressure and service; test periodically.
14. Heat-trace or purge where the fluid can freeze, polymerize or plug; use corrosion-resistant materials.`,
          answer: String.raw`Mount directly on the vessel with short, full-size inlet (ΔP ≤ 3% of set), no unlocked block valves, upright, away from turbulence; rupture disk below valve with leak tell-tale; discharge to a safe location or closed system, back pressure within limits, self-draining, supported for reaction forces; set ≤ MAWP; accessible for testing.` },
        { id: "2013-14-Q4d", label: "(d)", marks: "10",
          topic: "solids-handling", sub: "Schematics of belt feeders and screw feeders",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Show schematically different types of belt and screw feeders.`,
          solution: String.raw`Feeders deliver bulk solids from a hopper or bin at a controlled rate; they are short conveyors designed to carry the bin head load.

![Belt feeder with gate, weigh-belt feeder, constant-pitch and variable-pitch screw feeders](fig/2013-14-Q4d-sketch.svg)

**Belt feeders**
1. **Flat belt feeder with adjustable gate (volumetric):** a short, wide belt under the hopper outlet with side skirts; the gate height sets the bed depth, so rate = bulk density × bed area × belt speed. Good for friable, lumpy or abrasive solids and long slot outlets (belt widens in the flow direction to avoid shear).
2. **Weigh-belt (gravimetric) feeder:** a load cell under a weighing idler measures the belt load; a controller adjusts belt speed so that kg/s = load per metre × speed. Accuracy ≈ ±0.5–1%.
3. **Apron feeder** (steel pans on chains) for heavy, hot or lumpy material from crushers.

**Screw feeders**
1. **Constant-pitch screw feeder** (with a choke section of reduced pitch or a tube at the outlet): simple, enclosed, metering by speed. Under a long hopper it draws material mainly from the rear end of the slot (dead zones elsewhere).
2. **Variable (increasing) pitch screw feeder:** pitch increases along the hopper outlet (or the shaft diameter decreases: tapered/stepped shaft), so each turn takes a fresh increment and material is drawn evenly over the whole outlet: mass flow, no stagnant zones.
3. **Twin-screw (and multiple-screw) feeders** for sticky or floodable powders and for wide bins; **live-bottom** screw feeders for large bin outlets.
4. Volumetric screw feeders combined with loss-in-weight control (whole feeder on load cells) for gravimetric metering.`,
          answer: String.raw`Belt: gated volumetric belt feeder, weigh-belt (load cell + speed control), apron feeder. Screw: constant-pitch with choke, variable-pitch or tapered-shaft screw for even draw-down from long outlets, twin/multiple screws, loss-in-weight screw feeders.` },
        { id: "2013-14-Q4e", label: "(e)", marks: "6⅔",
          topic: "solids-handling", sub: "Choosing constant-pitch or variable-pitch screw flights",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Where will you choose the following screw flights for your screw conveyors/elevators?

(i) constant pitch

(ii) variable pitch`,
          solution: String.raw`**(i) Constant pitch**
- **Standard pitch** (pitch = screw diameter): normal horizontal or slightly inclined screw **conveyors** where the material is already fed at a controlled rate (from a feeder, rotary valve or another conveyor) and only has to be transported; most conveying applications, simplest and cheapest.
- **Short pitch** (≈ 2/3 or 1/2 of the diameter): inclined conveyors above about 20°, **vertical screw elevators**, and the choke section of feeders, where the smaller pitch reduces fall-back and gives better control.
- **Long pitch** (1.5 D): fast transport of free-flowing, light materials (agitating).

**(ii) Variable (graduated) pitch**
- **Screw feeders under hoppers or bins with long slotted outlets:** the pitch increases in the direction of flow (short pitch at the rear, longer toward the discharge) so each turn has room for additional material and the solid is withdrawn uniformly along the whole outlet; this gives mass flow in the bin, avoids dead zones, segregation and arching, and prevents packing at the rear.
- Feeding sticky or floodable powders evenly into a conveyor.
- **Decreasing pitch** (opposite) is used where the material must be compressed, densified or dewatered (screw presses, extruders, plug-forming feeders against a pressure).`,
          answer: String.raw`(i) Constant pitch: ordinary conveyors with metered feed (standard pitch = D); short pitch for inclined/vertical elevators and feeder choke sections. (ii) Variable (increasing) pitch: feeders under long hopper slots for uniform draw-down and mass flow; decreasing pitch for compressing/dewatering screws.` }
      ] },
    { id: "2013-14-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q5a", label: "(a)", marks: "26",
          topic: "ejectors", sub: "Industrial uses of steam ejectors and types of vacuum producers",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Name the variety of industrial applications of steam ejector. Describe different types of vacuum producing devices.`,
          solution: String.raw`**Steam-jet ejector principle** (Ludwig Ch. 6): high-pressure motive steam expands in a converging–diverging nozzle to a supersonic jet at low pressure; the jet entrains the suction gas in the suction chamber; the mixture is compressed in the converging diffuser, throat and diverging diffuser, where kinetic energy is converted back to pressure. No moving parts.

![Steam-jet ejector with pressure and velocity profiles](fig/2013-14-Q5a-sketch.svg)

**Industrial applications**
1. **Vacuum distillation and fractionation** (crude vacuum towers, heat-sensitive organics), vacuum stripping and deodorizing of edible oils.
2. **Evaporators and vacuum crystallizers**; vacuum pans in sugar refineries.
3. **Removal of air and non-condensables from steam-turbine surface condensers** (maintaining condenser vacuum).
4. **Vacuum drying, filtration, impregnation, degassing and deaeration**; vacuum packing.
5. **Steam-jet refrigeration** (chilling water by flash evaporation), vacuum cooling of foods.
6. **Evacuating** vessels and priming pumps and siphons.
7. Non-vacuum: **thermocompressors** (boosting LP steam), jet heaters, mixing, pumping liquids (eductors), conveying solids, fume scrubbing.

**Types of vacuum-producing devices** (Ludwig Table 6-1)

| Device | Principle | Lowest practical suction pressure | Remarks |
|---|---|---|---|
| Steam-jet ejectors, 1 to 6 stages (with inter- and after-condensers) | Momentum of steam jet | 1 stage ≈ 75 torr; 2 stages ≈ 12; 3 stages ≈ 1 torr; 4 ≈ 200 μm; 5 ≈ 20 μm; 6 ≈ 3 μm Hg | No moving parts, handle corrosive/wet vapours and large volumes, cheap; high steam and cooling-water use |
| Liquid (water) jet ejectors | Momentum of liquid jet | ≈ 50–75 torr | Simple, also condense vapours |
| Liquid-ring pumps | Rotating eccentric impeller forms a liquid ring that acts as pistons | 1 stage ≈ 75 torr (water at 60 °F), 2 stages ≈ 40 torr; oil-sealed 10 torr | Handle wet and condensable loads; limited by seal-liquid vapour pressure; often combined with an ejector first stage |
| Reciprocating (piston) vacuum pumps | Positive displacement | ≈ 10 torr (two-stage ≈ 1 torr) | Older type, large, high maintenance |
| Rotary-vane pumps (oil-sealed) | Sliding vanes | ≈ 1 torr; spring-loaded 20 μm, 2-stage 1 μm | Small capacity, clean gases |
| Rotary-piston pumps | Eccentric piston, oil-sealed | 20 μm (1 stage), 1 μm (2 stage) | |
| Rotary lobe (Roots) blowers | Two lobed rotors | ≈ 300 torr (1 stage), 60 torr (2 stage); as boosters far lower | Large capacity, used as boosters ahead of other pumps |
| Dry screw / claw pumps | Positive displacement without seal fluid | < 1 torr | No contamination, solvent recovery |
| Diffusion pumps, turbomolecular pumps | Vapour jets / high-speed blades | high vacuum, < 10⁻³ torr | Laboratory and special processes |

Positive-displacement pumps hold vacuum under capacity overload; ejectors cannot. Combination systems (ejector + liquid ring, Roots blower + liquid ring or rotary piston) give low pressures economically.`,
          answer: String.raw`Applications: vacuum distillation/deodorization, evaporators and crystallizers, condenser air removal, vacuum drying/filtration/degassing, steam-jet refrigeration, evacuation and priming; also thermocompression, heating, mixing, pumping. Devices: steam-jet ejectors (1–6 stages, 75 torr to 3 μm), liquid jets, liquid-ring pumps (≈ 40–75 torr), reciprocating, rotary-vane, rotary-piston, Roots blowers, dry screw, diffusion/turbomolecular pumps.` },
        { id: "2013-14-Q5b", label: "(b)", marks: "10⅔",
          topic: "ejectors", sub: "Ejector capacity at 600 °F for an air–water vapour mixture",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`What is the expected actual capacity at 600 °F of a mixture rated at 70 °F?

Air = 225 lbs./hr.; Water Vapor = 300 lbs./hr.; Total = 525 lbs./hr.

Figures for Question 5(b) (attached to the paper): Fig. 6-18, molecular-weight entrainment ratio vs molecular weight (0–150; based on gases at 70–80 °F); Fig. 6-17, temperature entrainment ratio vs gas temperature (0–1000 °F) for air and steam (ratio 1.00 at 70 °F, falling to ≈ 0.78 for air and 0.69 for steam at 1000 °F).`,
          solution: String.raw`This is Ludwig Example 6-3, at 600 °F instead of 500 °F.

**Given:** ejector rated for 225 lb/h air + 300 lb/h water vapour at 70 °F. **Find:** the mass of the same mixture it can handle at 600 °F.

**Assumptions:** same ejector, same suction and discharge pressures and motive steam; the temperature entrainment ratio of Fig. 6-17, defined as (weight of air or steam handled at the actual temperature)/(weight handled at 70 °F), applies to each component separately. No molecular-weight correction is needed, because the rating is already for the actual components (air and water vapour), not a 70 °F air equivalent.

1. **Read Fig. 6-17 at 600 °F:** enter at 600 °F on the temperature axis, go up to the air line and across: ratio ≈ 0.875; up to the steam line: ratio ≈ 0.825. (Check: at 500 °F Ludwig reads 0.897 for air and 0.859 for steam; both lines are nearly straight, so 600 °F gives 0.873 and 0.826.)

2. **Air capacity:** $225\times0.875 = 197\ \mathrm{lb/h}$

3. **Water-vapour capacity:** $300\times0.825 = 248\ \mathrm{lb/h}$

4. **Total:** $197 + 248 = 445\ \mathrm{lb/h}$ (vs 525 lb/h at 70 °F, i.e. about 15% less).

**Why lower:** hot gas has a larger specific volume, so the fixed nozzle–diffuser geometry entrains a smaller mass; the effect is larger for steam (lower molecular weight, larger change of density) than for air.

**Result:** expected capacity at 600 °F ≈ **197 lb/h air + 248 lb/h water vapour ≈ 445 lb/h**.`,
          answer: String.raw`Fig. 6-17 at 600 °F: air ratio ≈ 0.875, steam ≈ 0.825 → 225 × 0.875 = 197 lb/h air + 300 × 0.825 = 248 lb/h vapour ≈ 445 lb/h total.` },
        { id: "2013-14-Q5c", label: "(c)", marks: "10",
          topic: "ejectors", sub: "Why higher motive steam pressure does not raise fixed ejector capacity",
          type: "theory", syllabus: "in", repeats: ["2023-24-Q3a", "2022-23-Q2a", "2018-19-Q2c", "2016-17-Q4d"],
          text: String.raw`Explain the following facts below: "An increase in steam pressure over design will not increase vapor handling capacity for the usual fixed capacity ejector".`,
          solution: String.raw`(Ludwig Ch. 6, "Performance factors: steam pressure".)

1. **Ejector proportions are fixed for one design point.** The nozzle throat, mixing section and diffuser throat of a "fixed-capacity" ejector are sized for a specified motive steam pressure, suction load and compression ratio. The best steam economy is obtained only when nozzle and diffuser are proportioned for that performance.

2. **More steam pressure means more steam, not more entrainment.** The steam flow through a choked nozzle is proportional to the absolute motive pressure: $w_s \propto p_{abs}A_{throat}$. Raising the pressure above design therefore pushes more motive steam through the nozzle.

3. **The diffuser throat becomes the bottleneck.** The diffuser throat has a fixed area and can pass only a certain mass of mixture at the sonic condition. The extra motive steam occupies this capacity, so there is no room for more suction gas: the entrained load stays the same and usually **decreases** ("the increased pressure usually decreases capacity due to the extra steam in the diffuser").

4. **Jet expansion:** at higher pressure the jet is under-expanded and spreads after leaving the nozzle, disturbing the mixing and shock pattern in the diffuser, which also lowers efficiency.

5. **Consequences:** steam consumption rises with no gain (worse economy, more condenser load). Ejectors should be designed for the **minimum** expected steam pressure (line pressure minus ≈ 10 psi) and operated at it; below design pressure they become unstable (break pressure), above it they waste steam. Only a "throttling-type" ejector (spindle in the nozzle) has a family of curves with motive pressure.`,
          answer: String.raw`Nozzle and diffuser are sized for one design point; higher steam pressure only raises motive steam flow (∝ p_abs), which fills the fixed diffuser throat and leaves no room for more suction gas (capacity often falls) while steam consumption rises. Design for the minimum steam pressure.` }
      ] },
    { id: "2013-14-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q6a", label: "(a)", marks: "18",
          topic: "drying", sub: "General guidelines for selecting industrial drying equipment",
          type: "theory", syllabus: "in", repeats: ["2020-21-Q2a", "2016-17-Q4a"],
          text: String.raw`Describe briefly general guidelines for selection of industrial drying equipment.`,
          solution: String.raw`**Steps of selection** (course slides): (1) **initial selection** from the feed and product characteristics, (2) **drying tests** in laboratory or pilot dryers of the candidate types (drying-rate curves, product quality), (3) **final selection** with an economic comparison and vendor quotations.

**General guidelines**

1. **Physical form of the feed and handling:** solution or slurry (spray, drum dryers), paste or filter cake (rotary, through-circulation after preforming, agitated vacuum, flash dryers), granular or crystalline free-flowing solids (rotary, fluid-bed, flash, conveyor), sheets and films (cylinder dryers), large or formed objects (tray, tunnel dryers and kilns).
2. **Batch or continuous:** batch (tray, vacuum shelf, agitated vacuum, freeze) for small outputs (< ≈ 50–100 kg/h), many products or long drying times; continuous (rotary, fluid bed, spray, conveyor) for large steady production.
3. **Heat sensitivity of the material:** low temperature, vacuum or short residence time (spray, flash, freeze, vacuum dryers); co-current flow for heat-sensitive solids.
4. **Mode of heat transfer: adiabatic (direct contact)** dryers (hot gas in contact with the solid: rotary, fluid-bed, spray, tunnel) or **non-adiabatic (indirect contact)** dryers (heat through a wall: drum, steam-tube, vacuum, jacketed agitated dryers), the latter for solvent recovery, dusty or oxygen-sensitive products.
5. **Product quality requirements:** final moisture, size and shape, bulk density, dust, colour, flavour, case hardening, contamination.
6. **Dust problems** and fines carry-over (cyclones, bag filters), and **pollution** (odours, solvent vapours, particulates).
7. **Energy efficiency** and **type of fuel** available (steam, gas, oil, electricity); heat recovery.
8. Safety: flammable solvents, explosive dusts (inert-gas circulation), toxicity.
9. **Operation, maintenance and labour costs**, space, noise; capital cost.

| Feed | Typical dryers |
|---|---|
| Solution, slurry | Spray, drum, agitated vacuum |
| Paste, filter cake | Rotary vacuum, flash (with disintegrator), through-circulation (preformed), tray |
| Granular, crystalline | Rotary, fluid bed, conveyor, flash |
| Sheets, films | Cylinder (can) dryers, festoon |
| Formed pieces, ceramics | Tunnel dryer, kiln, tray |`,
          answer: String.raw`Select by: initial choice → drying tests → final economic choice; consider feed form and handling, batch vs continuous, heat sensitivity, direct (adiabatic) vs indirect heating, product quality, dust and pollution, energy/fuel, safety, operating, maintenance and labour costs.` },
        { id: "2013-14-Q6b", label: "(b)", marks: "12⅔",
          topic: "drying", sub: "Drying heavy slurries and pastes in a rotary vacuum dryer",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Describe the drying of heavy slurries and pastes in a Rotary vacuum dryer.`,
          solution: String.raw`**Equipment:** a stationary horizontal steam-jacketed cylinder (or a rotating double-cone/drum) with a slow-moving agitator (paddles, ribbons or scrapers on a central shaft) that continually turns over the charge and scrapes the heated wall; connected to a dust filter, condenser and vacuum pump/ejector. Operated **batchwise**.

**Stages of drying of a slurry or paste** (course slides):
1. At high moisture the slurry is **relatively free moving**; heat transfer from the wall is good and water or solvent boils at the low temperature set by the vacuum.
2. As drying proceeds it becomes **viscous and pasty**.
3. Then it becomes a **heavy, adhesive (sticky) mass** that is difficult to move: agitator torque and power reach their maximum in this "plastic" stage; the agitator must be strong enough and is sometimes reversed periodically.
4. As drying continues the mass **breaks up into lumps**.
5. The lumps break up continuously until a **free-flowing granular product** is obtained; the remaining moisture is removed in the falling-rate period.
6. The dry product is discharged through a bottom door while the agitator runs; vapours are condensed and the solvent recovered.

**Features:** low drying temperature (vacuum) for heat-sensitive products; indirect heating, so solvents can be recovered and toxic or flammable materials handled safely; low air flow, little dust; good for pastes and slurries that cannot be dried in through-circulation or rotary air dryers. Disadvantages: batch, small capacity, long cycles, high cost per unit capacity, mechanical stress during the sticky phase.`,
          answer: String.raw`Batch jacketed horizontal vacuum dryer with agitator: the charge passes from free-moving slurry → viscous paste → heavy adhesive mass (maximum torque) → lumps → free-flowing granules; vapour condensed under vacuum; suits heat-sensitive, solvent-wet or toxic materials.` },
        { id: "2013-14-Q6c", label: "(c)", marks: "16",
          topic: "drying", sub: "Spray dryer components and advantages of spray drying",
          type: "sketch", syllabus: "in", repeats: ["2016-17-Q4c"],
          text: String.raw`What are the major parts of spray drying system? What are the advantages of spray drying?`,
          solution: String.raw`![Spray-drying system](fig/2013-14-Q6c-sketch.svg)

**Major parts**
1. **Feed system:** feed tank, filter and pump delivering the solution, slurry or paste at constant rate.
2. **Atomizer:** rotary (spinning) disc or wheel (5000–25000 rpm), single-fluid pressure nozzle, or two-fluid (pneumatic) nozzle, producing droplets of about 10–500 μm.
3. **Air supply:** inlet filter, fan, **air heater** (steam coils, direct gas or oil burner, indirect furnace) heating the air to 150–600 °C, and an **air disperser** that mixes the hot air with the spray (co-current, countercurrent or mixed flow).
4. **Drying chamber:** large cylindrical vessel with a conical bottom, sized for the droplet drying time (seconds) and to keep wet droplets off the walls.
5. **Product collection:** dry powder from the cone bottom, and fines separated from the exhaust air in **cyclones**, **bag filters** or wet scrubbers.
6. **Exhaust fan** (induced draft), stack; instrumentation for inlet/outlet temperature control; optional fluid-bed after-dryer/cooler and agglomerator.

**Advantages of spray drying**
1. Very short drying time (5–30 s) and the droplets stay near the wet-bulb temperature: suitable for **heat-sensitive** products (milk, coffee, eggs, enzymes, pharmaceuticals, detergents).
2. Goes **directly from a liquid to a dry powder**, eliminating filtration, drying of cakes and grinding.
3. Product consists of small, hollow, nearly **spherical, free-flowing particles** of controllable size and bulk density, dissolving readily (instant products).
4. Continuous, automatic, very large capacities, low labour.
5. Corrosive or abrasive liquids contact only the atomizer and chamber; sanitary and closed operation possible (inert-gas closed cycle for solvents).

Disadvantages: high capital cost and large chamber; low thermal efficiency (large exhaust volume, unless high inlet temperatures); dust collection needed; not suitable for coarse or dense products.`,
          answer: String.raw`Parts: feed pump, atomizer (disc or nozzle), air filter-fan-heater and disperser, drying chamber, cyclone/bag filter, exhaust fan. Advantages: seconds of drying (heat-sensitive products), liquid to powder in one step, spherical free-flowing powder of controlled size, continuous and large capacity, low labour.` }
      ] },
    { id: "2013-14-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q7a", label: "(a)", marks: "15",
          topic: "pumps", sub: "Contents of a centrifugal pump specification sheet",
          type: "theory", syllabus: "in", repeats: ["2012-13-Q7a"],
          text: String.raw`Discuss the specification sheet of pump.`,
          solution: String.raw`A pump specification (data) sheet (Ludwig Ch. 3, API 610 data sheet) tells the vendor everything needed to select and guarantee the pump.

**1. Service and identification:** item number, service name, number of pumps (operating + spare), parallel/series operation, continuous or intermittent duty.

**2. Liquid and its properties (at pumping temperature):** name and composition, pumping temperature (normal, max), specific gravity, viscosity, **vapour pressure**, specific heat; corrosive or erosive components, solids (size, %), toxicity, flammability, tendency to polymerize or crystallize.

**3. Operating conditions:**
- Capacity: normal, rated (design, usually 10–20% above normal) and minimum flow (gpm or m³/h at pumping temperature).
- Suction pressure (max/rated), discharge pressure, **differential pressure and total head**.
- **NPSH available** (with the basis: liquid level, elevation, vapour pressure).
- Hydraulic power; system resistance curve if available.

**4. Site and utility data:** location (indoor/outdoor, elevation, ambient temperature, hazardous area classification), electrical supply, cooling water, steam (for turbine drivers), flushing liquids.

**5. Construction requirements:** pump type (horizontal/vertical, single/multistage, end-suction, split case, canned, magnetic drive), casing pressure rating and connections (size, rating, facing, orientation), impeller type, bearings and lubrication, **shaft seal** (packing, single/double mechanical seal, flushing plan), materials of construction (casing, impeller, shaft, wear rings), coupling and baseplate, heating/cooling jackets.

**6. Driver:** motor (kW, rpm, enclosure, voltage) or steam turbine; speed; variable speed drive.

**7. Codes, tests and inspection:** API 610, ANSI, Hydraulic Institute standards; performance test, NPSH test, hydrostatic test, witness inspection; noise limit.

**8. Vendor to supply:** pump curve (head, efficiency, power, NPSH required vs flow) for the selected impeller and the maximum/minimum impeller sizes, rated efficiency and bhp, shut-off head, minimum continuous flow, specific speed, weight, dimensions, spare parts, price and delivery.`,
          answer: String.raw`Service and number of pumps; liquid properties (SG, viscosity, vapour pressure, solids, corrosiveness) at pumping T; capacities (normal/rated/min), suction and discharge pressures, head, NPSH available; site and utilities; construction (type, seals, materials, ratings); driver; codes/tests; vendor data (curves, efficiency, NPSH required).` },
        { id: "2013-14-Q7b", label: "(b)", marks: "12",
          topic: "mixing", sub: "Dimensional analysis: power number a function of Reynolds number",
          type: "derivation", syllabus: "in", repeats: ["2018-19-Q4b", "2017-18-Q2d", "2016-17-Q3b", "2012-13-Q7c"],
          text: String.raw`Prove that Power Number is a function of Reynold's Number for mechanically agitated adequately baffled vessel.`,
          solution: String.raw`**Variables that affect the power P drawn by an impeller** (MSH Sec. 9): impeller diameter $D_a$, speed n, liquid density ρ and viscosity μ, gravity g, and the geometry: $D_t$, H, E, W, L, J, number of blades and baffles.

1. **Dimensional analysis.** Write $P = f(n, D_a, \rho, \mu, g, D_t, H, \ldots)$. The geometry is expressed by the shape factors $S_1 = D_a/D_t$, $S_2 = E/D_t$, $S_3 = L/D_a$, $S_4 = W/D_a$, $S_5 = J/D_t$, $S_6 = H/D_t$. The remaining dimensional variables are P [ML²T⁻³], n [T⁻¹], $D_a$ [L], ρ [ML⁻³], μ [ML⁻¹T⁻¹], g [LT⁻²]: 6 variables, 3 dimensions → 3 π groups. With n, $D_a$, ρ as repeating variables:
$$\pi_1 = \frac{P}{\rho n^3D_a^5} = N_P,\qquad \pi_2 = \frac{nD_a^2\rho}{\mu} = N_{Re},\qquad \pi_3 = \frac{n^2D_a}{g} = N_{Fr}$$
$$N_P = \psi(N_{Re}, N_{Fr}, S_1, S_2, \ldots, S_n)$$
(check $\pi_1$: $\frac{ML^2T^{-3}}{ML^{-3}\,T^{-3}\,L^5} = 1$.)

2. **Geometric similarity.** For a given impeller type in vessels of the same proportions (e.g. the standard turbine), all shape factors are fixed, so $N_P = \psi(N_{Re}, N_{Fr})$.

3. **Effect of baffles.** The Froude number represents the ratio of inertial to gravitational forces; it matters only when the liquid surface is deformed, i.e. when a **vortex** forms (unbaffled vessels at $N_{Re}$ > ~300). In an adequately baffled vessel (four baffles, $J = D_t/12$) or one with off-centre agitator, the vortex is suppressed and the surface stays flat; gravity no longer affects the flow and $N_{Fr}$ drops out. Hence
$$N_P = \frac{P}{\rho n^3 D_a^5} = \phi(N_{Re})\qquad\blacksquare$$

4. **Limiting forms:**
- Laminar ($N_{Re}$ < 10): $N_P = K_L/N_{Re}$, i.e. $P = K_L n^2D_a^3\mu$ (power independent of density).
- Fully turbulent baffled ($N_{Re}$ > 10⁴): $N_P = K_T$ = constant (≈ 5.75 for a six-blade disk turbine), $P = K_T n^3D_a^5\rho$ (independent of viscosity).
(For unbaffled vessels at high $N_{Re}$, $N_P = \phi(N_{Re})\,N_{Fr}^m$ with $m = (a - \log_{10}N_{Re})/b$.)`,
          answer: String.raw`Dimensional analysis gives N_P = P/(ρn³D_a⁵) = ψ(N_Re, N_Fr, S₁…S_n); geometric similarity fixes the S's, and baffles suppress the vortex so the Froude number (gravity) drops out: N_P = φ(N_Re) (laminar N_P = K_L/Re, turbulent N_P = K_T).` },
        { id: "2013-14-Q7c", label: "(c)", marks: "6⅔",
          topic: "mixing", sub: "Examples of industrial mixing operations",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Give some example of Mixing Operation.`,
          solution: String.raw`| Purpose of mixing | Examples |
|---|---|
| Blending miscible liquids | Mixing gasoline components, dilution of acids, preparing solutions, neutralization (e.g. NaOH + HNO₃ in an agitated tank) |
| Dissolving solids in liquids | Sugar or salt solutions, dissolving reactants, leaching |
| Suspending solids (solid–liquid) | Slurry reactors, catalytic hydrogenation, crystallizers, ceramic slip, cement slurry, ore pulp in flotation and leaching tanks |
| Dispersing a gas in a liquid | Aeration in fermentation and waste-water treatment, hydrogenation, chlorination, oxidation |
| Dispersing immiscible liquids | Liquid–liquid extraction (mixer-settlers), emulsions (mayonnaise, cosmetics, emulsion polymerization) |
| Promoting heat transfer | Jacketed or coil-heated reactors and kettles |
| Mixing pastes and viscous materials | Dough kneading, rubber compounding (Banbury mixer), polymer melts, greases, adhesives |
| Mixing dry solids | Blending fertilizers, pharmaceutical powders, cement raw meal, animal feed (tumbling, ribbon blenders, muller mixers) |`,
          answer: String.raw`Blending liquids and neutralization, dissolving solids, suspending solids (slurries, crystallizers), gas dispersion (aeration, hydrogenation), liquid–liquid dispersion (extraction, emulsions), heat transfer in agitated vessels, kneading pastes and polymers, blending dry powders.` },
        { id: "2013-14-Q7d", label: "(d)", marks: "13",
          topic: "compressors", sub: "Intercooling in multistage compression shown on a P–V diagram",
          type: "sketch", syllabus: "partial", repeats: ["2011-12-Q4a"],
          text: String.raw`Why is intercooling of multistage compression system used? — Discuss with a 'P-V' diagram.`,
          solution: String.raw`**Illustration:** air compressed from 1 to 9 bar, polytropic n = 1.3, suction 1 m³ at 300 K (clearance neglected).

1. **Single stage:**
$$W_1 = \frac{n}{n-1}p_1V_1\left[\left(\frac{p_2}{p_1}\right)^{(n-1)/n}-1\right] = \frac{1.3}{0.3}(100)(1)\left[9^{0.2308}-1\right] = 286\ \mathrm{kJ}$$
$$T_2 = 300\times9^{0.2308} = 498\ \mathrm{K}\ (225\ ^\circ\mathrm{C})$$

2. **Two stages with perfect intercooling** (back to 300 K) at the optimum intermediate pressure $p_i = \sqrt{p_1p_2} = 3$ bar (equal ratio and equal work per stage):
$$W_2 = 2\times\frac{1.3}{0.3}(100)(1)\left[3^{0.2308}-1\right] = 250\ \mathrm{kJ},\qquad T_{out} = 300\times3^{0.2308} = 387\ \mathrm{K}\ (114\ ^\circ\mathrm{C})$$

3. **Isothermal (ideal limit):** $W = p_1V_1\ln(p_2/p_1) = 100\ln9 = 220$ kJ.

![P-V diagram: single-stage polytropic, two stages with intercooling, isothermal; shaded area is the work saved](fig/2013-14-Q7d-sol.svg)

On the P–V diagram the work is the area between the compression curve and the P axis (between suction and discharge lines). After stage 1 (1 → 3 bar) the gas is cooled at constant pressure, so its volume falls from 0.43 to 0.33 m³ (back onto the isotherm); stage 2 starts from this smaller volume, so the second compression curve lies to the left of the single-stage curve. The **shaded area** between them is the work saved (36 kJ, 12.6% here); with more stages the path approaches the isotherm.

**Reasons for intercooling**
- **Less work and power** (closer to isothermal compression); equal pressure ratios per stage minimize the total.
- **Lower discharge temperatures:** protects valves, lubricants (oil degradation, carbon deposits, risk of fire/explosion in air compressors), packing and seals; limits thermal stresses; avoids polymerization or decomposition of the gas.
- **Higher volumetric efficiency** of the later stages (reciprocating), since each stage has a smaller pressure ratio, $\eta_v = 1 - c[(p_2/p_1)^{1/n} - 1]$, and smaller cylinders are needed for the cooled gas.
- **Condensation and removal of moisture** (and condensable vapours) between stages in the intercooler separators.
- Allows very high overall pressure ratios that would be impossible in one stage.`,
          answer: String.raw`Intercooling to the inlet temperature between stages moves compression toward the isotherm: for 1 → 9 bar (n = 1.3) work falls from 286 to 250 kJ/m³ (isothermal 220), and outlet T from 225 °C to 114 °C. It saves power, limits temperature (lubricant, valves, safety), raises volumetric efficiency and removes condensate.` }
      ] },
    { id: "2013-14-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2013-14-Q8a", label: "(a)", marks: "28",
          topic: "crystallization", sub: "Advantages of crystallization and design criteria of crystallizers",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the advantages of crystallisation over the other separation process? What are the design criteria of crystallization process?`,
          solution: String.raw`**Advantages of crystallization over other separation processes**

1. **High purity in a single step:** a pure crystalline solid (often > 99%) can be obtained from an impure solution, since impurities stay in the mother liquor; recrystallization gives ultra-pure products.
2. **Attractive, finished product form:** uniform crystals of controlled size and shape that are easy to filter, wash, dry, package, store and sell (free-flowing, non-caking, good appearance), e.g. sugar, salt, fertilizers, pharmaceuticals.
3. **Low energy:** the heat of crystallization is much smaller than the latent heat of vaporization (typically 1/3–1/10), so it uses less energy than distillation or evaporation to dryness.
4. **Low operating temperature:** suitable for heat-sensitive materials (pharmaceuticals, foods).
5. **Separates what distillation cannot:** close-boiling or azeotropic mixtures and isomers (p-xylene from m-xylene, fatty acids), and non-volatile solids.
6. Simultaneous separation and particle formation, often with simple equipment.

**Design criteria of a crystallization process**

1. **Solubility and phase data:** solubility curve, hydrates and transition temperatures, metastable limit; these fix the **yield** from the material balance (e.g. copperas from curve D) and the operating temperatures.
2. **Method of producing supersaturation:** cooling (steep solubility curve), evaporation (flat curve), vacuum (adiabatic) cooling, salting out or reaction; determines the crystallizer type (Swenson–Walker, tank, forced-circulation evaporator, draft-tube baffle, Oslo/Krystal, vacuum crystallizer).
3. **Supersaturation level and kinetics:** nucleation and growth rates; operate in the metastable zone to avoid excessive nucleation (fines, scaling); seeding.
4. **Crystal size distribution and habit:** residence time and magma density (MSMPR: $L_{pr} = 3.67G\tau$), McCabe ΔL law, fines destruction, classified product removal; habit modifiers.
5. **Heat balance:** sensible heat, heat of crystallization and (evaporative types) latent heat; cooling or heating surface area, ΔT limited to avoid encrustation (scraped surfaces).
6. **Circulation and agitation:** keep crystals suspended and supersaturation uniform without attrition.
7. **Purity:** mother-liquor occlusion, washing, recrystallization, purge of impurities.
8. **Capacity and mode:** batch or continuous; staging; multiple-effect or vapour recompression for evaporative crystallizers.
9. **Materials of construction, scaling and cleaning;** downstream filtration, centrifuging and drying; recycle of mother liquor.
10. **Economics:** yield, energy, capital and operating cost.`,
          answer: String.raw`Advantages: high purity in one step, attractive uniform solid product, low energy (heat of crystallization ≪ latent heat), low temperature, separates close-boiling/isomer mixtures. Design criteria: solubility data and yield, supersaturation method and level, kinetics and CSD (residence time, magma density), heat balance and scaling, agitation, purity, batch/continuous, materials, downstream handling, cost.` },
        { id: "2013-14-Q8b", label: "(b)", marks: "18⅔",
          topic: "evaporation", sub: "Optimum number of effects and optimum boiling time between cleanings",
          type: "derivation", syllabus: "in", repeats: ["2022-23-Q1c", "2018-19-Q3e", "2014-15-Q5a"],
          text: String.raw`In a chemical industry you have been assigned to determine the optimum number of multiple effect evaporation system and optimum time of operation. How do you find the optimum number of effect and optimum time of operation of multiple effect evaporator? Explain it.`,
          solution: String.raw`### 1. Optimum number of effects (economic balance)

- Steam consumption per kg of water evaporated falls almost in proportion to 1/n (economy ≈ 0.8n), so the annual **steam cost** falls with n, with diminishing returns.
- Each effect needs about the same area as a single effect doing the whole job (the heat flux per effect is about 1/n of the single-effect flux), so the **fixed charges** on the heating surface, piping, pumps and instruments rise roughly in proportion to n. Boiling-point elevations also add up (useful ΔT = ΔT_total − ΣBPE).
- Calculate the design (areas, steam) for n = 1, 2, 3, … and plot the annual costs:
$$C_T(n) = \underbrace{\frac{C_s\,V}{E(n)}}_{\text{steam}} + \underbrace{n\,A_1 C_A\,f}_{\text{fixed charges}} + C_{other}$$
- The optimum is the n at the **minimum of the total-cost curve** (typically 3–6; see the cost figure of 2014-15 Q5(a)).

![Annual cost vs number of effects](fig/2014-15-Q5a-sol.svg)

### 2. Optimum time of operation (boiling time between cleanings)

Scale builds up on the heating surface, so the overall coefficient falls with operating (boiling) time. For many scale-forming liquors the scale thickness grows such that (MSH Sec. 16)
$$\frac{1}{U^2} = a\,t + b\qquad (b = 1/U_0^2,\ a = \text{scaling constant from plant data})$$

1. **Heat transferred in a boiling period $t_b$** (constant ΔT and area A):
$$Q = \int_0^{t_b} UA\Delta T\,dt = A\Delta T\int_0^{t_b}\frac{dt}{\sqrt{at+b}} = \frac{2A\Delta T}{a}\left[\sqrt{at_b+b}-\sqrt b\right]$$
(water evaporated ≈ Q/λ).

2. **Average rate over a whole cycle**, including the cleaning time $t_c$ (evaporator shut down):
$$\bar q = \frac{Q}{t_b + t_c} = \frac{2A\Delta T}{a}\,\frac{\sqrt{at_b+b}-\sqrt b}{t_b+t_c}$$

3. **Maximize:** $d\bar q/dt_b = 0$ gives $a(t_b+t_c) = 2(at_b + b) - 2\sqrt{b(at_b+b)}$; solving,
$$\boxed{t_{b,opt} = t_c + 2\sqrt{\frac{b\,t_c}{a}}}$$
For a heavily scaling liquor with a clean coefficient that is soon lost (b → 0), $t_{b,opt} \to t_c$: boil as long as you clean.

4. **Example:** $U_0$ = 2500 W/m²K (b = 1.6 × 10⁻⁷), U halves in 100 h (a = 3b/100 = 4.8 × 10⁻⁹ per h), cleaning takes $t_c$ = 8 h:
$$t_{b,opt} = 8 + 2\sqrt{\frac{1.6\times10^{-7}\times8}{4.8\times10^{-9}}} = 8 + 32.7 = 40.7\ \mathrm{h}$$
(a direct numerical search of $\bar q$ gives 41 h).

If cleaning cost (labour, chemicals) rather than lost production dominates, minimise the total cost per kg evaporated instead; the same integrated balance is used. Graphical method: plot cumulative Q vs t from plant data, draw a tangent from the point $(-t_c, 0)$: the tangent point is $t_{b,opt}$.`,
          answer: String.raw`Optimum n: minimum of total annual cost = steam cost (∝ 1/economy) + fixed charges on surface (∝ n), typically 3–6. Optimum boiling time: with 1/U² = at + b, maximizing Q/(t_b + t_c) gives t_b,opt = t_c + 2√(b t_c/a) (≈ t_c for heavy scaling); e.g. 40.7 h for t_c = 8 h, U₀ = 2500 W/m²K halving in 100 h.` }
      ] }
  ]
});
