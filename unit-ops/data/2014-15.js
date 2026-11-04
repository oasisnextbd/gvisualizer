QB.paper({
  year: "2014-15", date: "17/07/2016", marks: 280,
  rules: String.raw`Section A: four questions; Q1 is COMPULSORY (60 marks), answer any TWO of Q2–Q4. Section B: four questions, answer any THREE. Use separate scripts for each section. Attached: ferrous sulfate solubility chart (Figure for Q8(a), Badger & Banchero Fig. 11-9) and Foust Figs. 21.17 (Goulds centrifugal pump characteristics at 1750 and 3550 rpm) and 21.19 (characteristic curves and specific speeds of impellers) for Q7(b).`,
  questions: [
    { id: "2014-15-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q1a", label: "(a)", marks: "15",
          topic: "relief", sub: "Short answers: mechanical separation, relief valves, rupture disks, size reduction",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Answer the following (True or False; fill in the gaps, multiple choice where applicable)

(i) Mechanical separation is applicable for homogeneous and heterogeneous mixtures (T/F).

(ii) Sedimentation and decantation are the separation processes based on size differences of the particles in the phases (T/F).

(iii) Separating principal for impingement separation is: 1. Gravity, 2. Inertia, 3. Pressure reduction, 4. Centrifugal force.

(iv) A safety relief valve shows POP or non-POP action during pressure relief of an over pressure system (T/F).

(v) Blowdown is the difference between ______ pressure and ______ pressure of a safety valve and expressed as % of the ______ pressure.

(vi) It is customary to maintain a margin between maximum allowable set pressure and maximum relieving pressure for single valve which is ______ % higher than ______ pressure.

(vii) Only ______ type rupture disks are placed below a safety valve to prevent corrosive, tarring or other material from entering the valve nozzle.

(viii) During pressure relief, velocity head loss should not over ______ % of allowable pressure for capacity relief.

(ix) For fire exposed pressure vessel maximum allowable accumulated pressure is ______ % of the ______ pressure.

(x) From utilization point of view, size reduction of solids is very inefficient. Only ______ % energy supplied to the machine appears as increased surface.

(xi) API standard 611 is followed for designing steam turbines that are used in non-critical service (T/F).`,
          solution: String.raw`| No. | Answer | Reason |
|---|---|---|
| (i) | **False** | Mechanical separation applies only to the separation of phases in a **heterogeneous** mixture (Ludwig Ch. 4); homogeneous solutions need diffusional operations (distillation, absorption, extraction). |
| (ii) | **False** | Settling, sedimentation and decantation separate by **density difference** under gravity; size difference is the basis of screening and filtration. |
| (iii) | **2. Inertia** | Droplets or particles cannot follow the gas streamlines around the wires, baffles or vanes and impinge on them by inertia. (The course slide lists the "separating agent" of a mesh demister as the pressure drop across the mesh, i.e. the energy that drives the gas, but the separating mechanism is inertial impaction.) |
| (iv) | **True** | A safety-relief valve is adjusted to give either a "pop" (gas, vapour) or a "non-pop" (liquid, proportional lift) action and reseats as the pressure falls (Ludwig Ch. 7). |
| (v) | **set** pressure and **reseating (closing)** pressure, % of the **set** pressure | Ludwig's definition of blowdown. |
| (vi) | **10%** higher than the **MAWP (maximum allowable working / set)** pressure | ASME VIII: a single relieving device must keep the pressure from rising more than 10% above the MAWP (16% with multiple devices). |
| (vii) | **Non-fragmenting** (disks that do not disintegrate when they burst, e.g. reverse-buckling or scored types) | Fragments entering the valve could keep it from reseating or jam it. |
| (viii) | **3%** | The total inlet pressure loss (including the velocity head) to a relief valve should not exceed 3% of the set pressure at the maximum relieving flow, otherwise the valve chatters. |
| (ix) | **121%** of the **MAWP** | Fire case: accumulation of 21% above MAWP is allowed. |
| (x) | **0.1 to 2%** | The rest becomes heat, noise, elastic deformation of particles and machine, and friction. |
| (xi) | **True** | API 611: general-purpose steam turbines (non-critical, usually spared services); API 612 covers special-purpose (critical, unspared) turbines. |`,
          answer: String.raw`(i) F; (ii) F (density difference); (iii) inertia; (iv) T; (v) set, reseating, set; (vi) 10%, MAWP; (vii) non-fragmenting; (viii) 3%; (ix) 121% of MAWP; (x) 0.1–2%; (xi) T.` },
        { id: "2014-15-Q1bi", label: "(b)(i)", marks: "4",
          topic: "dust-collection", sub: "Particle size ranges for cyclones and wet scrubbers",
          type: "theory", syllabus: "in", repeats: ["2013-14-Q3a"],
          text: String.raw`What are the solid particle size ranges that can be effectively separated from gaseous medium by cyclone separator and wet scrubber?`,
          solution: String.raw`| Collector | Effective particle size range | Notes (Ludwig Tables 4-6, 4-7) |
|---|---|---|
| Low-resistance cyclone | > 20–40 μm (efficiency < 50% for finer dust) | ΔP 0.5–1 in water |
| High-efficiency cyclone (small diameter, multiclone) | > 5–10 μm; high efficiency on particles > 10–30 μm (≈ 70–85% at 10 μm, 99% at 40 μm and larger) | ΔP 3–6 in water |
| Wet scrubbers (spray tower, wet centrifugal, packed, orifice) | ≈ 1–5 μm and larger | ΔP 1.5–6 in water |
| High-energy (venturi, nozzle) scrubbers | down to ≈ 0.5–2 μm | ΔP 12–20 in water |

So a cyclone is effective for roughly **5–200 μm** (coarse to medium dust), whereas a wet scrubber covers about **0.5–100 μm**, the finer end only with high-energy (venturi) designs.`,
          answer: String.raw`Cyclones: about 5–200 μm (high efficiency only above ≈ 10 μm; low-resistance types > 20–40 μm). Wet scrubbers: about 1–100 μm, down to ≈ 0.5 μm with venturi scrubbers.` },
        { id: "2014-15-Q1bii", label: "(b)(ii)", marks: "8",
          topic: "dust-collection", sub: "Dust collector choice for cement grinding and coal-fired power plants",
          type: "theory", syllabus: "in", repeats: ["2016-17-Q5bii"],
          text: String.raw`Which type of dust collector is used frequently for the following industrial operations? Why?

- Cement grinding
- Coal fired power plant.`,
          solution: String.raw`From Ludwig Table 4-5 (application of dust collectors in industry):

**Cement grinding → fabric filter (bag house)** ("frequent"; cyclone and ESP rare, wet collector "no").
- Dust is fine (≈ 0.5–55 μm, much of it below 10 μm) at moderate concentration: cyclones alone are not efficient enough.
- The collected cement has **high salvage value** and must be recovered **dry**; a wet scrubber would hydrate (set) the cement and create a sludge.
- Gas is dry and near ambient temperature (well below the ≈ 130–290 °C fabric limits); fabric filters give > 99.9% efficiency, easily meeting emission limits. The same equipment is used on raw grinding before calcining.

**Coal-fired (pulverized-fuel) power plant → electrostatic precipitator** ("frequent", often with a dry centrifugal pre-collector; fabric filters increasingly).
- Very large gas volumes (hundreds of m³/s) at high temperature (≈ 150–400 °C) with heavy loadings of fine fly ash (≈ 0.1–3 μm fraction important).
- An ESP gives 99–99.9% collection with a very **low pressure drop** (≈ 0.1–0.5 in water), so fan power is small for the huge flow; it tolerates high temperature, and the dry ash can be sold or disposed.
- Multicyclones ahead remove the coarse ash and reduce ESP load. Fabric filters are chosen where the ash resistivity is too high for an ESP (low-sulfur coal) or very low emission limits apply.`,
          answer: String.raw`Cement grinding: fabric filter (fine dry valuable dust, recovered dry, no wetting, > 99.9%). Coal-fired power plant: electrostatic precipitator, often after a cyclone pre-cleaner (huge hot gas flow, fine fly ash, 99%+ at very low ΔP).` },
        { id: "2014-15-Q1biii", label: "(b)(iii)", marks: "8",
          topic: "dust-collection", sub: "Grade-efficiency curves of ESP versus fabric filter",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Compare the separation efficiency curves for ESP and fabric filter.`,
          solution: String.raw`The **fractional (grade) efficiency curve** plots the collection efficiency for each particle size.

![Typical grade-efficiency curves of a fabric filter and an ESP](fig/2014-15-Q1biii-sol.svg)

| Feature | Fabric filter | Electrostatic precipitator |
|---|---|---|
| Level of curve | Very high and flat: ≈ 99–99.9% for practically all sizes once the dust cake has formed | High for > 1–2 μm (99%+) but lower in the submicron range |
| Minimum | Shallow minimum around 0.1–0.5 μm (between impaction/interception and diffusion) | Deeper minimum around 0.2–0.5 μm, where neither field charging (large particles) nor diffusion charging (very fine) is effective; may fall to ≈ 90% |
| Large particles | Captured by sieving, impaction, interception | Field charging gives high migration velocity: very high efficiency |
| Effect of operation | Efficiency is lowest just after cleaning; depends on air-to-cloth ratio, cake | Depends strongly on dust resistivity, specific collection area (A/Q), gas velocity; Deutsch: $\eta = 1 - e^{-wA/Q}$ |
| Sensitivity to flow changes | Efficiency nearly independent of flow (Δp rises with flow) | Efficiency falls as Q rises |

**Conclusion:** both are high-efficiency collectors, but the fabric filter keeps a flatter, higher curve in the 0.1–1 μm range; the ESP curve dips more in that range and depends on resistivity, while the ESP has a much lower pressure drop.`,
          answer: String.raw`Fabric filter: flat, ≈ 99–99.9% at all sizes with a shallow minimum near 0.1–0.5 μm. ESP: > 99% for coarse particles but a deeper minimum (≈ 90%) around 0.2–0.5 μm, and efficiency depends on resistivity and A/Q.` },
        { id: "2014-15-Q1biv", label: "(b)(iv)", marks: "5",
          topic: "size-reduction", sub: "Size-reduction equipment classified by feed and product size",
          type: "theory", syllabus: "in", repeats: ["2011-12-Q3b"],
          text: String.raw`Classify size reduction equipment based on feed and product size.`,
          solution: String.raw`| Class | Feed size | Product size | Equipment |
|---|---|---|---|
| **A. Crushers (coarse and fine)** | | | |
| Primary (coarse) crushers | up to 1.5–2 m | ≈ 50–250 mm | Jaw (Blake) crusher, gyratory crusher |
| Secondary (fine) crushers | ≈ 50–150 mm | ≈ 3–6 mm (to 50 mm) | Crushing rolls (smooth, toothed), cone crushers, hammer mills (impactors) |
| **B. Grinders (intermediate and fine)** | ≈ 5–50 mm | ≈ 0.1 mm (intermediate: passes 40 mesh; fine: 200 mesh, 74 μm) | Hammer mills, rolling-compression mills (bowl, roller mills), attrition mills, tumbling mills (rod, ball, pebble, tube, compartment mills) |
| **C. Ultrafine grinders** | < 6 mm | 1–50 μm | Hammer mills with internal classification, fluid-energy (jet) mills, agitated (sand/bead) mills, colloid mills |
| **D. Cutting machines** | soft, tough or fibrous solids | definite size and shape, 2–10 mm | Knife cutters, dicers, slitters |

The reduction ratio per machine is limited (≈ 4–8 for crushers), so large reductions are done in stages: primary crushing → secondary crushing → grinding → fine grinding, usually in closed circuit with screens or classifiers.`,
          answer: String.raw`Crushers (primary: jaw, gyratory, feed to 2 m → ~0.1–0.25 m; secondary: rolls, cone, hammer → 3–50 mm); grinders (hammer, roller, attrition, ball/rod mills → ~0.1 mm to 74 μm); ultrafine grinders (fluid-energy, agitated, classifying hammer mills → 1–50 μm); cutting machines (knife cutters, dicers).` },
        { id: "2014-15-Q1bv", label: "(b)(v)", marks: "10",
          topic: "other", sub: "Steam turbine classes by casing and shaft arrangement",
          type: "sketch", syllabus: "out", repeats: [],
          text: String.raw`Draw the free body diagram of turbine classes based on casing or shaft arrangement.`,
          solution: String.raw`![Single casing, tandem-compound and cross-compound arrangements](fig/2014-15-Q1bv-sketch.svg)

1. **Single-casing (single-cylinder) turbine:** all stages (HP to LP) in one casing on one shaft driving one load. Most common for mechanical drives (pumps, compressors, fans) and small to medium generators. Simple, compact, cheapest.
2. **Tandem-compound turbine:** two or more casings (e.g. HP and LP, or HP–IP–LP) arranged **in line on a single shaft**, connected by crossover piping, driving one generator. Used when the volume flow at the exhaust is too large for one casing (large condensing units, often with double-flow LP casings). One speed, one generator, long rotor train.
3. **Cross-compound turbine:** two or more casings on **separate shafts**, each driving its own generator (or load), possibly at different speeds (e.g. HP at 3600 rpm, LP at 1800 rpm). Steam passes in series through the casings. Used for the largest power plants; allows optimum speed for each section and shorter rotor trains, but needs two generators and is costlier.

Other descriptions of casings: **single-flow** vs **double-flow** (steam enters at the centre and flows both ways, balancing axial thrust and halving the last-stage blade length).`,
          answer: String.raw`Single casing (all stages, one shaft, one load); tandem compound (several casings in line on one shaft, one generator); cross compound (casings on separate shafts each with its own generator, steam in series).` },
        { id: "2014-15-Q1bvi", label: "(b)(vi)", marks: "10",
          topic: "solids-handling", sub: "Types and selection criteria of mechanical conveyors",
          type: "theory", syllabus: "in", repeats: ["2013-14-Q4a"],
          text: String.raw`What are the types and general selection criteria of mechanical conveyers?`,
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
          answer: String.raw`Types: belt, screw, bucket elevator, chain (drag/flight/apron) conveyors (plus vibratory). Selection by capacity, distance, path configuration (horizontal/inclined/vertical) and solid properties (bulk density, size, abrasiveness, flowability, toxicity, corrosiveness, explosibility, temperature), plus enclosure, cost and power.` }
      ] },
    { id: "2014-15-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q2a", label: "(a)", marks: "10",
          topic: "other", sub: "Basic operating principles of a steam turbine",
          type: "sketch", syllabus: "out", repeats: [],
          text: String.raw`What are the basic operating principles of steam turbine? Explain with simple schematic diagram.`,
          solution: String.raw`A steam turbine converts the **enthalpy of steam into shaft work** in two steps (Rankine cycle expansion):

1. **Expansion in nozzles (stationary blades):** steam at high pressure $p_1$ and enthalpy $h_1$ expands to a lower pressure; the enthalpy drop becomes kinetic energy:
$$V_1 = \sqrt{2\Delta h + V_0^2}\ \approx 44.72\sqrt{\Delta h\,(\mathrm{kJ/kg})}\ \ \mathrm{m/s}$$
2. **Energy transfer in moving blades (buckets):** the high-velocity jet is turned by the curved blades on the rotor; the change of momentum in the direction of rotation produces a tangential force, and with blade speed U, power:
$$F = \dot m\,\Delta V_w,\qquad P = \dot m\,U\,\Delta V_w$$

![Nozzle and moving blades; pressure and velocity through impulse and reaction stages](fig/2014-15-Q2a-sketch.svg)

- **Impulse principle** (De Laval, Curtis, Rateau): all the pressure drop occurs in the nozzles; pressure is constant across the moving blades, which only turn the jet (force by impulse).
- **Reaction principle** (Parsons): the moving blades are also shaped as nozzles; steam expands further in them, and its acceleration produces a reaction force in addition to the impulse.
- **Staging:** a large enthalpy drop is split over many stages (pressure compounding, velocity compounding with Curtis wheels) to keep blade speeds and leaving losses reasonable.
- **Exhaust:** to a condenser under vacuum (condensing turbine, maximum work) or to a process steam header (back-pressure turbine).
- **Control:** a governor regulates the steam admitted through the governing valves to hold the speed under varying load; trip valves protect against overspeed.`,
          answer: String.raw`Steam expands in nozzles (enthalpy → kinetic energy, V₁ ≈ 44.72√Δh); the jet's momentum change on moving blades gives a force ṁΔV_w and power ṁUΔV_w. Impulse: all expansion in nozzles; reaction: expansion also in moving blades; many stages; exhaust to condenser or process.` },
        { id: "2014-15-Q2b", label: "(b)", marks: "30",
          topic: "other", sub: "Steam path arrangements of turbines and their process selection",
          type: "sketch", syllabus: "out", repeats: ["2019-20-Q2b", "2018-19-Q5c"],
          text: String.raw`Classify turbines based on steam path arrangements and draw their schematics showing steam flow path. Also describe their selection criteria for process.`,
          solution: String.raw`![Steam path arrangements](fig/2014-15-Q2b-sketch.svg)

| Arrangement | Steam path | Features | Select when |
|---|---|---|---|
| **(a) Straight condensing** | Inlet steam expands through all stages to a condenser at high vacuum (≈ 0.05–0.15 bar) | Largest enthalpy drop, highest power per kg of steam; needs condenser, cooling water, vacuum system (ejectors); 30–40% of the heat leaves in the condenser | Power or mechanical drive is the only need; no use for low-pressure steam; cooling water available |
| **(b) Back-pressure (non-condensing)** | Expands to a positive exhaust pressure and the exhaust goes to the process steam header | Very high overall (cogeneration) efficiency because the exhaust heat is used; cheap, compact; power output tied to process steam demand | The plant needs large, steady amounts of LP process steam (refineries, sugar, paper, chemical plants); also as letdown in place of a reducing valve |
| **(c) Extraction (automatic or bleed)** | Part of the steam is withdrawn at an intermediate pressure (controlled by an internal valve) for process; remainder continues to the condenser or back-pressure exhaust | Power and process steam can be varied independently within limits; bleed (uncontrolled) extraction is used for feed-water heating | Process needs steam at one or two pressures, varying independently of power demand |
| **(d) Induction (admission, mixed-pressure)** | Surplus LP steam from the process (waste-heat boilers, flash steam) is admitted to the turbine at an intermediate stage | Recovers power from surplus steam that would otherwise be vented or condensed | Plant has excess low- or medium-pressure steam |
| **(e) Extraction–induction** | The intermediate connection can either extract or admit steam, depending on the header balance | Balances a steam header that swings between surplus and deficit | Fluctuating steam balance |
| **(f) Reheat** | After the HP section steam returns to the boiler for reheating, then expands in the IP/LP sections | Higher cycle efficiency, drier LP exhaust (less blade erosion) | Large utility units (high pressures) |

**General selection criteria for a process plant**

1. **Plant steam balance:** quantities and pressures of process steam needed; surplus steam available → back-pressure, extraction or induction types; otherwise condensing.
2. **Power or driver requirement** and speed of the driven machine (pumps, compressors, generators); variable-speed ability is an advantage over motors.
3. **Inlet steam conditions** (pressure, superheat) and exhaust conditions; available cooling water for a condenser.
4. **Efficiency and fuel cost** versus capital cost; general-purpose (API 611) or special-purpose (API 612) service; reliability, sparing and start-up needs (e.g. turbine drives for spare pumps that must run in a power failure).
5. Control requirements: speed, extraction pressure and back-pressure control.`,
          answer: String.raw`Condensing (max power, needs condenser), back-pressure (exhaust to process header), extraction (controlled withdrawal at intermediate pressure), induction (admits surplus LP steam), extraction–induction (both), reheat. Choice by plant steam balance, power/speed needed, steam conditions, cooling water, efficiency vs cost, control.` }
      ] },
    { id: "2014-15-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q3a", label: "(a)", marks: "10",
          topic: "size-reduction", sub: "Progressive grinding: transitory and persistent modes of size distribution",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Briefly explain the size reduction mechanism of solids based on progressive grinding on size distribution.`,
          solution: String.raw`**Single fracture.** A sudden impact on a particle gives a few large particles, a few intermediate ones and a large number of fines. With more energy the large pieces become smaller, and the **number** of fines increases appreciably while their **size changes little**: the size of the fine particles is set by the internal structure of the material (grain boundaries, flaws), the size of the large ones by the process used.

**Progressive grinding** (Coulson & Richardson Vol. 2):

![Evolution of the size distribution with grinding time](fig/2014-15-Q3a-sol.svg)

1. The initial size distribution has a single mode at a relatively coarse size.
2. As grinding continues this mode decreases in magnitude and a **second mode develops at a particular fine size**.
3. The second mode grows until the first has completely disappeared. The first is called the **transitory mode** (it disappears), the second the **persistent mode** (it is characteristic of the material, not of the machine).
4. Eventually there is a **grind limit**: further grinding changes the size very little, because fine particles have fewer flaws, are stronger, and may agglomerate.

**Mechanism of fracture:** energy is used first to open small fissures already present (e.g. cracks in coal, so large lumps break more easily than small ones) and then to form new surface. Only about 0.1–2% of the energy supplied appears as new surface; the rest goes into elastic and inelastic deformation, friction, heat and noise.`,
          answer: String.raw`On progressive grinding the coarse (transitory) mode of the size distribution shrinks and a fine (persistent) mode, characteristic of the material's structure, grows until the coarse mode vanishes; a grind limit is finally reached.` },
        { id: "2014-15-Q3b", label: "(b)", marks: "30",
          topic: "size-reduction", sub: "Schematics of crushers and grinders with the forces they use",
          type: "sketch", syllabus: "in", repeats: ["2019-20-Q1b", "2018-19-Q4c"],
          text: String.raw`Draw the schematic diagram of basic types of crushing and grinding equipment mentioning the type of forces involved in size reduction.`,
          solution: String.raw`**Forces used in size reduction:** compression (two rigid surfaces), impact (single rigid force, collision at high speed), attrition (rubbing of particles against each other or a surface), shear (particle–particle interaction, cutting).

![Jaw and gyratory crushers, crushing rolls, hammer mill, ball mill, attrition mill](fig/2014-15-Q3b-sketch.svg)

| Equipment | Working | Force | Size range |
|---|---|---|---|
| **Jaw crusher (Blake)** | Fixed vertical jaw (anvil) and swing jaw forming a V (20–30°); the swing jaw reciprocates 250–400 times/min by an eccentric and toggle; lumps are nipped and squeezed | Compression | Primary: feed up to ≈ 1.8 m, product ≈ 250 mm (secondary 6–50 mm) |
| **Gyratory crusher** | A conical crushing head gyrates (125–425 gyrations/min) inside a conical bowl (concave); continuous discharge | Compression | Primary, large capacity (to 4500 t/h) |
| **Crushing rolls** | Two rolls rotate toward each other; particles nipped in the gap are crushed (toothed rolls also tear) | Compression (toothed: + shear) | Secondary: feed 12–75 mm → 1–12 mm |
| **Hammer mill (impactor)** | Hammers pivoted on a high-speed rotor strike the feed; fragments are thrown against a breaker plate and pass a grate | Impact | Intermediate/fine grinding |
| **Ball (tumbling) mill** | Horizontal rotating drum 30–50% full of balls, run at 50–75% of critical speed $n_c = \frac{1}{2\pi}\sqrt{g/(R-r)}$; balls cascade and cataract | Impact + attrition | Fine grinding (to ≈ 75 μm and below) |
| **Attrition (disc) mill** | Material is rubbed between a rotating and a stationary grooved disc (or two discs rotating in opposite directions) | Attrition / shear | Fine grinding of soft materials |
| **Fluid-energy (jet) mill** | Particles collide in high-velocity jets of steam or air | Attrition (particle–particle impact) | Ultrafine, 1–10 μm |
| **Knife cutter** | Rotating knives against a stationary bed knife | Cutting (shear) | Fibrous, tough materials |`,
          answer: String.raw`Jaw, gyratory crushers and rolls: compression; hammer mill: impact; ball/tumbling mill: impact + attrition; attrition (disc) mill and fluid-energy mill: attrition/shear; knife cutters: cutting.` }
      ] },
    { id: "2014-15-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q4a", label: "(a)", marks: "10",
          topic: "relief", sub: "Force balance showing why balanced-bellows valves resist back pressure",
          type: "derivation", syllabus: "in", repeats: ["2013-14-Q4b"],
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
        { id: "2014-15-Q4b", label: "(b)", marks: "30",
          topic: "relief", sub: "Rupture disk purpose, types and selection criteria",
          type: "sketch", syllabus: "in", repeats: ["2022-23-Q4a"],
          text: String.raw`What are rupture disks? Why and when are they used in pressure vessels? What are the basic types of rupture disks? Explain them with neat diagram? Also write down the selection criteria of basic types of rupture disks for process vessels.`,
          solution: String.raw`**What:** a rupture (bursting) disk is a non-reclosing pressure-relief device: a thin diaphragm of metal (stainless steel, nickel, Monel, Inconel, aluminium), metal with plastic seals, or graphite, held between special holder flanges, that **bursts at a predetermined pressure** (at a stated temperature) and opens the full vent area.

**Why and when used**
- Very fast opening and large vent area: runaway reactions, deflagrations, rapid pressure rise where a spring valve is too slow.
- Leak-tight seal: toxic, valuable or flammable fluids (no simmering leakage).
- Corrosive, fouling, polymerizing or viscous fluids that would ruin a relief valve: disk **upstream of a safety valve** to protect it (with a pressure gauge or tell-tale between them to detect leaks).
- Secondary relief in parallel with a smaller valve set lower (fire case, extreme scenarios); also downstream of a valve to isolate it from a corrosive header.
- Cheap for very large sizes and very high or very low pressures.
- Not used where the vessel contents must not be lost or the process must keep running (it does not reclose).

![Basic rupture disk types](fig/2014-15-Q4b-sketch.svg)

**Basic types**
1. **Forward-acting solid (conventional, pre-bulged, tension-loaded) disk:** domed with the concave side toward the pressure; bursts in tension when the stress exceeds the metal's strength. Simple and cheap; operating ratio about 70% of burst pressure; may fragment; affected by pressure cycling; needs vacuum support if vacuum can occur.
2. **Scored forward-acting disk:** score lines (cross pattern) on the dome make it open in petals along the scores; non-fragmenting, operating ratio ≈ 85%, better cycle life.
3. **Composite disk:** a slotted metal top section with a thin seal membrane (PTFE or metal foil) and often a vacuum support; low burst pressures, corrosion resistance from the seal, operating ratio ≈ 80%.
4. **Reverse-buckling (reverse-acting) disk:** domed with the convex side toward the pressure; it is loaded in compression and snaps through (buckles) at the set pressure, then is cut open by knife blades or opens along scores. Operating ratio up to ≈ 90%, excellent cycling life, non-fragmenting, accurate; best below relief valves. Not suitable for full-liquid service (needs gas to snap through) or if the dome is damaged.
5. **Graphite (flat) disk:** a flat disk of impregnated graphite that shears/shatters at burst; very corrosion resistant, cheap; fragments (not below valves), operating ratio ≈ 80%.

**Selection criteria**
1. **Operating ratio** (max operating pressure / burst pressure): 70% conventional, 80% composite/graphite, 85% scored, 90% reverse-buckling; choose the type that lets the vessel operate close to its MAWP.
2. **Pressure cycling or pulsation and vacuum:** reverse-buckling or scored types; vacuum supports where needed.
3. **Fragmentation:** only non-fragmenting disks (scored, reverse-buckling) under a relief valve or into small headers.
4. **Temperature:** burst pressure falls with temperature; specify at the coincident temperature; materials and seals within their limits.
5. **Corrosion and product compatibility:** material selection, plastic linings, graphite.
6. **Fluid phase:** liquid-full systems need forward-acting disks; reverse-buckling needs gas/vapour.
7. **Burst tolerance and manufacturing range** (e.g. ±5% above 15 psig), size, cost and ease of replacement; holder design and orientation.
8. **Code requirement:** burst pressure not above MAWP (single device), area sized for the worst relief scenario.`,
          answer: String.raw`Non-reclosing diaphragm that bursts at set pressure; used for fast, large or leak-tight relief, corrosive/polymerizing service, ahead of relief valves, or as secondary relief. Types: forward-acting solid (≈ 70% op. ratio), scored (85%), composite (80%), reverse-buckling (90%, non-fragmenting), graphite (80%). Select by operating ratio, cycling/vacuum, fragmentation, temperature, corrosion, fluid phase, tolerance and cost.` }
      ] },
    { id: "2014-15-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q5a", label: "(a)", marks: "18",
          topic: "evaporation", sub: "Multiple-effect design: results desired and optimum number of effects",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q1c", "2013-14-Q8b"],
          text: String.raw`In a chemical industry you have been assigned the task of designing a multiple effect evaporator system.

(i) What are the principle result desired?

(ii) How would you determine the optimum number of effects?`,
          solution: String.raw`**(i) Principal results desired** (Badger & Banchero; MSH Ch. 16). Given the feed rate, feed concentration and temperature, the required product concentration, steam pressure and the condenser pressure (cooling-water temperature), the calculation must give:

1. **Heating surface** required in each effect (usually equal areas are specified, for standardised construction): the main capital item.
2. **Steam consumption** and hence the **steam economy** (kg evaporated per kg steam): the main operating cost.
3. The **temperatures and pressures** (boiling points with BPE) in each effect and the temperature drops.
4. The **amount evaporated in each effect**, the concentrations between effects, and the vapour going to the condenser (cooling-water requirement).

Method: material balances, Dühring/BPE data, enthalpy balances for each effect and $q_i = U_iA_i\Delta T_i$, solved by the Badger–McCabe trial method (assume ΔTs, solve, adjust until the areas are equal).

**(ii) Optimum number of effects: economic balance.**

- **Steam cost** falls as the economy rises roughly in proportion to n (≈ 0.8n for n effects), so it varies about as 1/n with diminishing returns.
- **Capital cost**: for the same total temperature drop each effect needs about the **same area as a single effect** doing the whole duty (heat flux per effect falls as 1/n, see part b), so the total surface, and its fixed charges (depreciation, interest, maintenance), rises about in proportion to n. Pumps, piping, instruments and condenser also grow with n.
- Also: each added effect reduces the ΔT available per effect; boiling-point elevation losses accumulate (n × BPE), so with high-BPE liquors the useful ΔT can vanish.

Annual total cost:
$$C_T(n) = \frac{C_{steam}}{\text{economy}(n)} + n\,C_{surface} + C_{other}\ \Rightarrow\ \frac{dC_T}{dn} = 0$$

![Steam cost, surface cost and total annual cost vs number of effects](fig/2014-15-Q5a-sol.svg)

Calculate the design (areas, steam) for n = 1, 2, 3, …, evaluate the annual costs, and choose the n at minimum total cost (in the illustration the optimum is ≈ 3). In practice 3–6 effects are common; more when steam is expensive and the BPE is small (e.g. 6–7 effects for black liquor or sugar), fewer for high-BPE caustic liquors or cheap steam; vapour recompression is an alternative.`,
          answer: String.raw`(i) Heating surface per effect, steam consumption/economy, temperatures/pressures and evaporation in each effect (and vapour to condenser). (ii) Economic balance: steam cost ∝ 1/economy falls with n, surface cost ∝ n rises; calculate both for n = 1, 2, 3… and choose the minimum total annual cost (typically 3–6 effects).` },
        { id: "2014-15-Q5b", label: "(b)", marks: "10⅔",
          topic: "evaporation", sub: "Heat flux per effect is 1/n of single-effect flux",
          type: "derivation", syllabus: "in", repeats: ["2022-23-Q1b", "2020-21-Q1a"],
          text: String.raw`Prove that

$$(\text{Heat flux in each of a multiple effect evaporator}) = \frac{1}{n}\,\frac{1}{\text{Heat flux in a single effect evaporator}}$$`,
          solution: String.raw`> The printed relation has an extra "1/": dimensionally a heat flux cannot equal the reciprocal of a heat flux. The intended result (MSH Sec. 16) is: heat flux in each effect = (1/n) × heat flux in a single effect. This is proved below.

**Assumptions:** the same overall temperature drop $\Delta T = T_s - T_c$ (steam to condenser, with boiling-point elevation neglected or already subtracted) is available in both cases; all effects have the same area A and the same coefficient U; feed near its boiling point, so each effect transfers about the same heat.

1. **Single effect:** the whole ΔT is used by one surface:
$$\left(\frac{q}{A}\right)_1 = U\,\Delta T$$

2. **n effects in series:** the same ΔT is divided among the n effects:
$$\Delta T = \Delta T_1 + \Delta T_2 + \cdots + \Delta T_n$$
The vapour from effect i condenses in effect i + 1, so the heat transferred is (nearly) the same in each effect, $q_1 = q_2 = \cdots = q$. With equal U and A:
$$q = UA\Delta T_1 = UA\Delta T_2 = \cdots\ \Rightarrow\ \Delta T_i = \frac{\Delta T}{n}$$

3. **Heat flux in each effect:**
$$\left(\frac{q}{A}\right)_i = U\Delta T_i = \frac{U\Delta T}{n} = \frac{1}{n}\left(\frac{q}{A}\right)_1\qquad\blacksquare$$

**Consequences:**
- Each effect has the same area as the single effect but transfers only 1/n of the heat; total heat $\sum q_i = nUA\frac{\Delta T}{n} = UA\Delta T$: the **capacity** of the n-effect system (≈ water evaporated) equals that of a single effect with the same area per effect, although the **surface is n times larger**.
- What is gained is **economy** (≈ n kg vapour per kg steam), not capacity. With boiling-point elevations the available ΔT is $\Delta T - \sum BPE_i$, so the capacity of multiple effects is actually lower than that of a single effect.`,
          answer: String.raw`With equal U and A and the same overall ΔT shared equally (ΔT_i = ΔT/n), (q/A)_i = UΔT/n = (1/n)(q/A)_single. Hence capacity ≈ single effect, area n times, economy ≈ n. (The printed 1/(flux) is a misprint.)` },
        { id: "2014-15-Q5c", label: "(c)", marks: "18",
          topic: "evaporation", sub: "Liquid characteristics that govern evaporator design",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Describe the liquid characteristics to be considered in evaporator design.`,
          solution: String.raw`The practical solution of an evaporation problem is profoundly affected by the character of the liquor (MSH Sec. 16.1):

1. **Concentration.** A dilute feed behaves like water, but as concentration rises: density and **viscosity increase**, so the heat-transfer coefficient falls (circulation slows); the **boiling-point elevation** increases, reducing the useful ΔT; the solution may become saturated and **crystals** form (salting, needing forced circulation or crystallizing evaporators).
2. **Foaming.** Organic materials (skim milk, fatty-acid solutions) foam during vaporization; foam leaves with the vapour (entrainment, product loss, fouling of condensers). Needs a large vapour head, foam breakers or antifoam, controlled boiling.
3. **Temperature sensitivity.** Fine chemicals, pharmaceuticals and foods degrade at moderate temperatures or with long exposure: operate under vacuum (low boiling point) and with short residence time (falling-film, agitated-film, single-pass evaporators).
4. **Scale formation.** Deposits (CaSO₄, CaCO₃, silica, organic char) on the heating surface reduce U progressively and force shutdowns for cleaning: choose high-velocity forced circulation, easy-to-clean tubes, seeding, chemical treatment.
5. **Materials of construction / corrosion.** The liquor must not attack or be contaminated by the metal: cast iron or steel where possible; copper, nickel, stainless steel, graphite or titanium for corrosive liquors (cost).
6. **Other properties:** specific heat and heat of concentration (enthalpy-concentration effects, e.g. NaOH), freezing point (crystallization on cooling), release of dissolved gases, toxicity, explosion hazards, radioactivity, sterility requirements; viscosity behaviour (non-Newtonian slurries); volatility of the product (loss of flavour or aroma, need for essence recovery); solids content and abrasiveness.

These characteristics decide the evaporator **type** (natural or forced circulation, long-tube vertical, falling film, agitated film), the operating pressure, the number of effects and the feed arrangement.`,
          answer: String.raw`Concentration (viscosity, BPE, crystal formation), foaming, temperature sensitivity, scale formation, corrosion/materials, plus specific heat, heat of concentration, freezing point, gas release, toxicity/explosion hazard, sterility and volatility of product.` }
      ] },
    { id: "2014-15-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q6a", label: "(a)", marks: "14",
          topic: "compressors", sub: "Reciprocating compressor sketch and description of its parts",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Draw a typical reciprocating compressor and describe the different parts.`,
          solution: String.raw`![Double-acting reciprocating compressor](fig/2014-15-Q6a-sketch.svg)

| Part | Description / function |
|---|---|
| **Cylinder** (with head-end and crank-end chambers) | Cast iron, steel or forged steel bore in which gas is compressed; often water-jacketed (or finned for air cooling) to remove heat of compression; may have a replaceable liner. Clearance pockets adjust capacity. |
| **Piston and piston rings** | Reciprocating piston; rings (cast iron, carbon, PTFE for non-lubricated service) seal against the bore; rider bands support the piston. |
| **Suction and discharge valves** | Automatic spring-loaded plate, ring or poppet valves opened by the pressure difference; suction valves admit gas when cylinder pressure falls below suction pressure, discharge valves open when it exceeds discharge pressure. |
| **Piston rod and packing** | Connects piston to crosshead; the packing (stuffing box) with rings seals the rod where it leaves the cylinder. |
| **Distance piece** | Space between cylinder and frame that separates gas packing leakage from the crankcase oil (vented, purged for toxic gases). |
| **Crosshead and guides** | Converts the angular motion of the connecting rod into straight-line motion of the rod, taking the side thrust. |
| **Connecting rod and crankshaft** | Transmit power from the driver; crank converts rotation into reciprocation. |
| **Frame (crankcase), bearings, flywheel** | Support the running gear; lubrication system (splash or forced feed), cylinder lubricators. |
| **Auxiliaries** | Suction filter, pulsation dampers (bottles), intercoolers and aftercoolers with moisture separators (multistage), unloaders for capacity control, relief valves, driver (motor, engine, turbine). |

Operation (double acting): while one side of the piston draws in gas, the other compresses and discharges, giving two deliveries per revolution.`,
          answer: String.raw`Cylinder (water-jacketed, clearance pockets), piston and rings, automatic suction and discharge valves, piston rod and packing, distance piece, crosshead and guides, connecting rod, crankshaft, frame and bearings, plus coolers, dampers, unloaders, relief valves and driver.` },
        { id: "2014-15-Q6b", label: "(b)", marks: "10⅔",
          topic: "compressors", sub: "Surge in centrifugal compressors: causes, detection, control",
          type: "theory", syllabus: "partial", repeats: ["2018-19-Q3f", "2016-17-Q1c", "2012-13-Q6b"],
          text: String.raw`What do you mean by "Surge" for a centrifugal compressor? State its causes and how it can be identified and control?`,
          solution: String.raw`**Surge** is the unstable operation of a centrifugal (or axial) compressor at low flow. On the head–capacity curve, below the flow at the peak of the curve (the **surge point**), the compressor can no longer produce the pressure the downstream system holds; flow momentarily **reverses** from discharge to suction, the discharge pressure drops, forward flow resumes, pressure builds again, and the cycle repeats (typically 0.5–2 s per cycle). The surge points at different speeds form the **surge line** of the compressor map (see 2015-16 Q4(b)).

**Causes**
- Throughput reduced below the surge flow (low process demand, closed or throttled valve, blocked outlet).
- Rise in discharge (system) pressure: fouled or blocked downstream equipment, high back pressure.
- Change of gas properties: lower molecular weight, higher suction temperature, lower suction pressure (head required rises or developed head falls).
- Fouled impellers, damaged internals, speed reduction (turbine driver).
- Rapid shutdown or trip when the check valve is slow.

**Identification (symptoms)**
- Loud periodic noise ("whoosh", bangs), heavy vibration;
- Cyclic fluctuation of suction and discharge pressure, flow and motor current;
- Rising suction and discharge temperatures (hot gas recirculating);
- Axial shaft movement and thrust-bearing temperature rise; possible seal and impeller damage.

**Control / prevention**
- **Anti-surge control:** measure flow and pressure ratio (or head); when the operating point approaches the surge control line (≈ 10% margin to the right of the surge line) open a **recycle (bypass) valve** from discharge, through a cooler, back to suction (or blow off to atmosphere for air) so the compressor flow stays above surge.
- Variable speed or adjustable inlet guide vanes to move the surge line.
- Avoid throttling on the discharge; correct design for the gas MW range; parallel compressors with load-sharing control; fast check valves on the discharge.`,
          answer: String.raw`Surge: flow reversal and oscillation when flow falls below the peak of the head curve. Causes: low flow, high back pressure, lower MW/higher suction T, fouling, speed drop. Signs: noise, vibration, pressure/flow/current swings, rising temperatures, thrust movement. Control: anti-surge recycle valve with flow/ΔP control, speed or inlet-guide-vane control.` },
        { id: "2014-15-Q6c", label: "(c)", marks: "16",
          topic: "compressors", sub: "Specification sheet data for a centrifugal compressor enquiry",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Prepare a list of information that is to be provided in a specification sheet for requesting recommendation from an centrifugal compressor manufacturer.`,
          solution: String.raw`Information the process engineer must give (API 617 style data sheet):

**1. Gas and flow data (for each operating case: normal, rated, minimum, start-up)**
- Gas name and **composition** (mol%), molecular weight, presence of corrosive (H₂S, Cl₂, CO₂ + water) or fouling components, solids or liquid droplets.
- **Flow rate**: mass flow and standard volumetric flow; inlet actual volume flow (acfm).
- **Inlet pressure and temperature**, relative humidity or water content.
- **Discharge pressure** required (and allowable temperature).
- Ratio of specific heats $k = c_p/c_v$ and compressibility Z at inlet and discharge (or full property data/equation of state).
- Range of operation (turndown), surge margin wanted, side-stream (extraction/induction) flows and pressures, number of process stages.

**2. Driver and utilities**
- Type of driver (electric motor, steam turbine, gas turbine), speed (fixed or variable) and gear.
- Steam conditions, electrical supply (voltage, frequency), cooling-water temperature and pressure, instrument air, nitrogen for seals.

**3. Mechanical and construction requirements**
- Intercooling between stages (allowed discharge temperatures), coolers by vendor or purchaser.
- Shaft seal type (labyrinth, oil film, dry gas seals) and allowable leakage; lube- and seal-oil system.
- Materials of construction for casing, impellers and shaft; casing type (horizontally or vertically split, barrel for high pressure/hydrogen).
- Applicable codes and standards (API 617, 614, 670), pressure rating, nozzle sizes and orientation.

**4. Site and operating conditions**
- Location (indoor/outdoor), elevation, ambient temperature range, area classification (hazardous area), noise limits.
- Continuous or intermittent service, parallel operation with other compressors, spare requirement.

**5. Control and instrumentation**
- Capacity control method (speed, suction throttling, inlet guide vanes), anti-surge system, vibration and axial-position monitoring, alarms and trips.

**6. Commercial / vendor information requested**
- Performance curves (head, efficiency, power vs flow at several speeds) with surge and stonewall, guaranteed power, efficiency, rated speed, critical speeds, dimensions and weights, delivery and price, spare parts and testing.`,
          answer: String.raw`Gas composition, MW, k, Z, corrosives; mass and inlet volume flow (all cases), inlet P/T/humidity, discharge P; turndown and side streams; driver, speed and utilities; seals, materials, cooling, codes; site conditions; control/anti-surge; requested curves and guarantees.` },
        { id: "2014-15-Q6d", label: "(d)", marks: "6",
          topic: "ejectors", sub: "Uses of ejectors other than producing vacuum",
          type: "theory", syllabus: "in", repeats: ["2012-13-Q6c"],
          text: String.raw`Other than creating vacuum, ejectors are used for many purposes, write the purposes.`,
          solution: String.raw`Ejectors (jet pumps: a high-pressure motive fluid entrains a low-pressure fluid; Ludwig Fig. 6-2) are also used as:

1. **Thermocompressors (jet compressors):** boost low-pressure or waste steam to an intermediate pressure for re-use (evaporator vapour recompression, dryer rolls).
2. **Jet pumps / syphons (eductors):** pumping, lifting and transferring liquids (sump emptying, tank transfer, acid handling with no moving parts).
3. **Mixing and blending:** mixing two liquids or gases, in-line blending, tank agitation by liquid jets.
4. **Steam-jet heaters:** direct heating of water or liquids by injected steam.
5. **Jet blowers / exhausters / fume scrubbers:** moving and ventilating air, fumes or gases; water-jet ejectors that simultaneously scrub gases.
6. **Conveying solids:** pneumatic or hydraulic transport of granular solids or slurries.
7. **Priming** centrifugal pumps and condenser starting; **desuperheating** steam; **sampling** and spraying; boiler-feed injectors.`,
          answer: String.raw`Thermocompression of LP steam, pumping/transfer of liquids (eductors, syphons), mixing/blending, steam-jet heating, ventilating and fume scrubbing (jet blowers), conveying solids, priming pumps, desuperheating, sampling.` }
      ] },
    { id: "2014-15-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q7a", label: "(a)", marks: "16",
          topic: "pumps", sub: "Common centrifugal pump problems and their prevention",
          type: "theory", syllabus: "in", repeats: ["2015-16-Q2b"],
          text: String.raw`What are the common problems of a centrifugal pump and how are they prevented?`,
          solution: String.raw`| Problem | Cause / symptom | Prevention |
|---|---|---|
| **Cavitation** | Suction pressure falls below vapour pressure (NPSH available < NPSH required): vapour bubbles collapse on the impeller → noise, vibration, pitting, drop in head and flow | Keep $NPSH_A \ge NPSH_R$ + margin (0.5–1 m): raise the suction tank or lower the pump, short, large-diameter suction line with few fittings, cool the liquid, avoid throttling the suction, run near BEP |
| **Air binding / loss of prime** | Pump casing full of air or vapour; a centrifugal pump cannot pump gas, so no delivery | Prime before starting, foot valve on suction lift, vent the casing, keep suction joints airtight, self-priming design or flooded suction |
| **Vapour lock / gas entrainment** | Dissolved gas or vortexing at the suction draws in gas | Adequate submergence, vortex breakers, degassing, suction below the tank liquid level |
| **Operation at low flow / shut-off** | Recirculation, temperature rise of trapped liquid, radial thrust, vibration | Minimum-flow bypass (recirculation line), do not run long against a closed discharge valve |
| **Run-out (very high flow)** | Motor overload, high NPSH_R, cavitation | Size for the system curve, throttle the discharge, correct impeller trim |
| **Water hammer** | Sudden valve closure or pump trip | Slow-closing valves, check valves, surge tanks |
| **Seal / packing leakage** | Worn packing or mechanical seal, dry running | Correct flushing, seal pots, do not run dry; mechanical seals for hazardous fluids |
| **Bearing failure, vibration** | Misalignment, unbalance, pipe strain, poor lubrication | Alignment, balanced impeller, pipe supports, lubrication schedule, vibration monitoring |
| **Wear, erosion, corrosion** | Abrasive solids, corrosive fluid; worn wear rings reduce efficiency | Proper materials (stainless, rubber lining), open impellers for slurries, replace wear rings |
| **Low head / capacity** | Wrong rotation, speed too low, clogged impeller or strainer | Check rotation and speed, clean suction strainers |
| **Parallel/series mismatch** | Unequal pumps in parallel: one pump runs near shut-off | Match pump curves; check combined curve against the system curve |

The two most common are **cavitation** (check NPSH) and **loss of prime/air binding**.`,
          answer: String.raw`Main problems: cavitation (keep NPSH_A > NPSH_R), air binding/loss of prime (prime, foot valve, venting), low-flow overheating (min-flow bypass), overload at run-out, water hammer, seal leakage, vibration/bearing failure, wear and corrosion (materials, maintenance).` },
        { id: "2014-15-Q7b", label: "(b)", marks: "16",
          topic: "pumps", sub: "Specific speed: pump type and impeller for 600 gpm at 50 ft",
          type: "numerical", syllabus: "in", repeats: ["2020-21-Q3a", "2019-20-Q7a", "2017-18-Q3b", "2012-13-Q7d", "2011-12-Q8d"],
          text: String.raw`Define the specific speed of a centrifugal pump. It is necessary to pump 600 gal/min against a head of 50 ft. What type of pump might be used? If the pump is in proper region select the impeller size.

Figures attached to the paper: Foust Fig. 21.17, characteristics of a Goulds centrifugal pump (4 in inlet, 3 in outlet, 10 in casing taking 6, 7, 8, 9 or 10 in impellers): total head (ft), efficiency (%), brake horsepower and NPSH vs capacity (gal/min), (a) at 1750 rpm (0–450 gpm, head to 110 ft), (b) at 3550 rpm (0–900 gpm, head to 500 ft). Foust Fig. 21.19, characteristic curves and specific speeds of radial-flow (up to 4200), mixed-flow (4200–9000) and axial-flow (above 9000) impellers.`,
          solution: String.raw`**Definition.** The specific speed is the speed (rpm) of a geometrically similar impeller that would deliver 1 gal/min against 1 ft of head; at the best-efficiency point it identifies the impeller type:
$$N_s = \frac{N\sqrt{Q}}{H^{3/4}}\qquad (N\ \mathrm{rpm},\ Q\ \mathrm{gal/min},\ H\ \mathrm{ft\ per\ stage})$$
Low $N_s$ = high head, low flow (radial impellers); high $N_s$ = low head, high flow (axial).

**Given:** Q = 600 gal/min, H = 50 ft. **Find:** pump type and impeller.

**Assumptions:** single-stage, single-suction pump; standard motor speeds 1750 and 3550 rpm (60 Hz, as in Fig. 21.17).

1. **Specific speed at the two motor speeds:**
$$N_s(1750) = \frac{1750\sqrt{600}}{50^{0.75}} = \frac{1750\times24.49}{18.80} = 2280$$
$$N_s(3550) = \frac{3550\times24.49}{18.80} = 4620$$

2. **Type (Fig. 21.19):** $N_s$ = 2280 lies in the **radial-flow (standard volute centrifugal) field**, which extends up to ≈ 4200, near the middle of the range where efficiency is high. At 3550 rpm, 4620 would call for a mixed-flow impeller. So a **standard single-stage radial-flow centrifugal pump at 1750 rpm** should be used.

3. **Is the pump of Fig. 21.17 in the proper region?** Its best-efficiency point (67% island) is at about 330 gpm and 72 ft at 1750 rpm (≈ 640 gpm, 290 ft at 3550 rpm):
$$N_s = \frac{1750\sqrt{330}}{72^{0.75}} \approx 1300$$
   - At 1750 rpm the curves end at about 460 gpm (10 in impeller at ≈ 58 ft): it **cannot deliver 600 gpm**.
   - At 3550 rpm even the smallest (6 in) impeller develops about 80 ft at 600 gpm, so ≈ 30 ft would have to be throttled away, well below the 68% peak efficiency, far from the BEP.
   So this Goulds pump (a lower-specific-speed, higher-head design) is **not in the proper region** for the duty; a pump with $N_s$ ≈ 2300 at 1750 rpm (larger eye and impeller width, BEP near 600 gpm and 50 ft) should be bought.

4. **If this pump must be used:** two units in **parallel** at 1750 rpm, each 300 gpm at 50 ft. On Fig. 21.17(a) at 300 gpm the 8 in impeller gives about 55 ft (7 in only ≈ 38 ft), at about 65% efficiency and ≈ 6 bhp per pump (check: $300\times55/(3960\times0.65) = 6.4$ hp). Select the **8 in impeller** (trimmed slightly, ≈ 7¾ in, to hit 50 ft), NPSH required ≈ 4–5 ft.

**Result:** $N_s$ ≈ 2280 at 1750 rpm → radial-flow centrifugal pump at 1750 rpm. The Fig. 21.17 pump is outside its proper range for 600 gpm; with two of them in parallel the 8 in impeller (≈ 55 ft at 300 gpm each) would be chosen.`,
          answer: String.raw`N_s = N√Q/H^0.75 = 2280 at 1750 rpm (4620 at 3550) → standard radial-flow centrifugal at 1750 rpm. The Fig. 21.17 pump (N_s ≈ 1300) cannot give 600 gpm at 1750 rpm and gives ~80 ft at 3550 rpm, so it is not in the proper region; two in parallel (300 gpm each) would use the 8 in impeller (≈ 55 ft, 65%).` },
        { id: "2014-15-Q7c", label: "(c)", marks: "6⅔",
          topic: "pumps", sub: "Multistage centrifugal pump sketch and comparison with single stage",
          type: "sketch", syllabus: "in", repeats: ["2017-18-Q3c"],
          text: String.raw`Draw a typical multistage centrifugal pump. How they differ from single stage pump?`,
          solution: String.raw`![Multistage centrifugal pump with four impellers in series](fig/2014-15-Q7c-sketch.svg)

In a multistage pump two or more impellers are mounted on one shaft in a common casing and connected **in series**: the discharge of each impeller is led through diffuser vanes or crossover passages to the eye of the next.

| Feature | Single-stage | Multistage |
|---|---|---|
| Head | Limited by tip speed of one impeller (≈ up to 100–150 m) | Sum of stage heads: high pressure (boiler feed, reverse osmosis, pipeline, high-pressure injection) |
| Flow | Same | Same flow through every stage |
| Construction | One impeller, volute casing, overhung or between bearings | Several impellers, diffusers or crossovers, horizontally split or barrel casing, between-bearings design |
| Axial thrust | Balance holes or back vanes | Large; balanced by opposed impellers or a balance drum/disc |
| Efficiency at high head | Low (very low specific speed impeller) | Higher: each stage runs at a better specific speed |
| Cost and maintenance | Lower, simpler | Higher, close clearances, more wear parts |
| Specific speed | Based on total head | Based on head per stage |`,
          answer: String.raw`Impellers in series on one shaft in a common casing; heads add (same flow), giving high pressure at good efficiency; needs diffusers/crossovers, thrust balancing (balance drum, opposed impellers) and costs more than a single-stage pump.` },
        { id: "2014-15-Q7d", label: "(d)", marks: "8",
          topic: "mixing", sub: "Shape factors of the standard turbine agitator",
          type: "theory", syllabus: "in", repeats: ["2017-18-Q2d", "2016-17-Q3c", "2015-16-Q1c"],
          text: String.raw`Write the different shape factors for turbine design.`,
          solution: String.raw`**Standard turbine design** (MSH Sec. 9; Rushton): a flat-bottomed cylindrical tank with four wall baffles and a six-blade disk (Rushton) turbine on a centre shaft.

![Standard agitated vessel with a six-blade disk turbine: Dt, H, Da, E, W, L and J](fig/2015-16-Q1c-sketch.svg)

| Shape factor | Ratio | Standard value |
|---|---|---|
| $S_1$ | $D_a/D_t$ (impeller/tank diameter) | 1/3 |
| $S_2$ | $E/D_t$ (clearance above floor) | 1/3 |
| $S_3$ | $L/D_a$ (blade length) | 1/4 |
| $S_4$ | $W/D_a$ (blade width) | 1/5 |
| $S_5$ | $J/D_t$ (baffle width) | 1/12 |
| $S_6$ | $H/D_t$ (liquid depth) | 1 |

Also: number of blades = 6, number of baffles = 4 (at 90°), disk diameter ≈ $2D_a/3$.

**Why they matter:** the dimensionless power correlation is
$$N_P = \frac{P}{\rho n^3 D_a^5} = f\!\left(N_{Re}, N_{Fr}, S_1, S_2, \ldots, S_n\right)$$
For geometrically similar vessels (same S values) $N_P$ depends only on $N_{Re}$ (and $N_{Fr}$ if unbaffled), so one power-number curve can be used for scale-up. In general $D_a/D_t$ is 0.3–0.5 for turbines and the depth H is about $D_t$.`,
          answer: String.raw`Standard turbine: Da/Dt = 1/3, E/Dt = 1/3, L/Da = 1/4, W/Da = 1/5, J/Dt = 1/12, H/Dt = 1 (6 blades, 4 baffles); N_P = f(Re, Fr, S1…S6).` }
      ] },
    { id: "2014-15-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q8a", label: "(a)", marks: "20",
          topic: "crystallization", sub: "Swenson–Walker copperas crystallizer: cooling water and number of sections",
          type: "numerical", syllabus: "in", repeats: ["2015-16-Q1a"],
          text: String.raw`A Swenson Walker crystallizer is to be used to produce 1 ton/hr of copperas (FeSO₄·7H₂O) crystals by the cooling of a saturated solution which enters the crystallizer at 120 °F. The slurry leaving the crystallizer will be at 80 °F. Solubility data are given in Figure for Q. 8(a). Cooling water enters the crystallizer jacket at 50 °F and leaves at 75 °F. It may be assumed that the over-all coefficient of heat transfer for crystallizer is 35 Btu/(hr)(sq ft)(°F). There are 3.5 sq ft of cooling surface per foot of crystallizer length. Average specific heat of initial solution is 0.70 Btu/(lb)(°F) and heat of solution of FeSO₄·7H₂O at 18 °C = −4400 cal/g formula weight.

(i) Estimate the cooling water required in gpm.

(ii) Determine the number of crystallizer sections to be used.

Figure for Q. 8(a) (attached to the paper): Badger & Banchero Fig. 11-9, solubility of ferrous sulfate; curves A, B, C as usually plotted (parts FeSO₄ per 100 parts total water), curve D plotted as parts hydrate FeSO₄·7H₂O per 100 parts excess water.`,
          solution: String.raw`**Given:** P = 1 ton/h = 2000 lb/h FeSO₄·7H₂O; saturated feed at 120 °F, slurry out at 80 °F; cooling water 50 → 75 °F; U = 35 Btu/h·ft²·°F; 3.5 ft² per ft length; $c_p$ = 0.70 Btu/lb·°F; heat of solution −4400 cal/g mol.

**Find:** (i) cooling water, gpm; (ii) number of sections.

**Assumptions:** mother liquor leaves saturated at 80 °F (no supersaturation left); countercurrent flow of water and magma (the normal arrangement in a Swenson–Walker trough); standard sections 10 ft long; heat of crystallization = −(heat of solution); no evaporation, heat losses neglected.

1. **Solubility (curve D, parts hydrate per 100 parts excess water):** at 120 °F, 140; at 80 °F, 74. Curve D is used because "excess water" (water beyond the 7 H₂O of the hydrate) is not removed by the crystals, so it is a conserved basis. Crystals formed = 140 − 74 = 66 lb FeSO₄·7H₂O per 100 lb excess water.

2. **Feed rate:**
$$W_{excess} = 2000\times\frac{100}{66} = 3030\ \mathrm{lb/h},\qquad \text{hydrate in feed} = 3030\times1.40 = 4242\ \mathrm{lb/h}$$
$$F = 3030 + 4242 = 7273\ \mathrm{lb/h}$$

3. **Sensible heat removed:**
$$Q_s = F c_p \Delta T = 7273\times0.70\times(120-80) = 203{,}600\ \mathrm{Btu/h}$$

4. **Heat of crystallization:** M(FeSO₄·7H₂O) = 278.
$$\Delta H_c = \frac{4400}{278} = 15.83\ \mathrm{cal/g} = 15.83\times1.8 = 28.5\ \mathrm{Btu/lb}$$
$$Q_c = 2000\times28.5 = 57{,}000\ \mathrm{Btu/h}$$

5. **Total duty:** $Q = 203{,}600 + 57{,}000 = 260{,}600\ \mathrm{Btu/h}$

6. **(i) Cooling water:** rise 75 − 50 = 25 °F, $c_p$ = 1 Btu/lb·°F.
$$\dot m_w = \frac{260{,}600}{1\times25} = 10{,}420\ \mathrm{lb/h}$$
$$\text{gpm} = \frac{10{,}420}{8.34\times60} = 20.8\ \mathrm{gpm}$$

7. **LMTD (countercurrent):** ΔT₁ = 120 − 75 = 45 °F (feed end), ΔT₂ = 80 − 50 = 30 °F (discharge end).
$$\Delta T_{lm} = \frac{45-30}{\ln(45/30)} = 37.0\ ^\circ\mathrm{F}$$

8. **Area and length:**
$$A = \frac{Q}{U\Delta T_{lm}} = \frac{260{,}600}{35\times37.0} = 201\ \mathrm{ft^2},\qquad L = \frac{201}{3.5} = 57.5\ \mathrm{ft}$$

9. **(ii) Sections:** 57.5/10 = 5.75, so use **6 sections** of 10 ft (60 ft, about 4% extra area).

> If the water ran co-current (in at the feed end), ΔT would be 70 and 5 °F, ΔT_lm = 24.6 °F, A = 302 ft², 86 ft, i.e. 9 sections: countercurrent is clearly better.

**Result:** feed 7270 lb/h; Q = 2.61 × 10⁵ Btu/h; cooling water ≈ 20.8 gpm; A ≈ 201 ft², L ≈ 57.5 ft → 6 ten-foot sections.`,
          answer: String.raw`(i) Q = 2.61 × 10⁵ Btu/h → ≈ 20.8 gpm of cooling water. (ii) ΔT_lm = 37.0 °F, A ≈ 201 ft², L ≈ 57.5 ft → 6 sections of 10 ft.` },
        { id: "2014-15-Q8b", label: "(b)", marks: "10⅔",
          topic: "drying", sub: "Drying behaviour of granular, porous and colloidal solids",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss the comparison of drying behavior based on the classes of materials.`,
          solution: String.raw`Solids fall into classes according to how the moisture is held, and each class gives a characteristic drying-rate curve (rate R vs free moisture X).

![Typical drying-rate curves of the three classes](fig/2014-15-Q8b-sol.svg)

| Feature | Granular / crystalline, non-porous (sand, salt crystals, pigments, ores) | Porous bodies (ceramics, clay, catalysts, filter cakes) | Colloidal, fibrous, amorphous (gelatin, glue, soap, starch, wood, leather, textiles, paper) |
|---|---|---|---|
| How water is held | In open interstices between particles and on the surface; mostly unbound | In capillaries and pores; part bound | Inside the solid structure (bound, in cell walls, gels); hygroscopic |
| Constant-rate period | Long, lasting to low moisture; rate = surface evaporation like a free water surface | Present; ends at a fairly high critical moisture | Short or absent; rate lower |
| Critical moisture $X_c$ | Low | Moderate to high | High |
| Falling-rate period | Short, nearly linear (unsaturated surface) | Two zones: first falling (dry patches on the surface) then second falling (internal capillary flow/vapour diffusion), concave | Long, controlled by internal liquid diffusion (Fick's law, rate ∝ X, curve concave up) |
| Equilibrium moisture | Near zero | Low | High |
| Effect of air conditions | Rate depends on air velocity, humidity, temperature | Mostly in the constant and first falling periods | Little effect of air velocity; temperature and thickness ($t \propto L^2$) control |
| Problems | Few; dusting | Cracking if dried too fast | Shrinkage, warping, case hardening, cracking: need controlled humidity (gentle drying) |

**Conclusion:** granular solids dry quickly under surface (external) control, porous solids show a mixed behaviour, and colloidal/fibrous materials dry slowly under internal-diffusion control, so dryer choice and drying conditions differ for each class.`,
          answer: String.raw`Granular/non-porous: long constant-rate period, low X_c, short linear falling rate (external control). Porous: constant rate then two falling-rate zones (capillary flow). Colloidal/fibrous: little or no constant rate, high X_c and equilibrium moisture, long diffusion-controlled falling rate, shrinkage and case hardening.` },
        { id: "2014-15-Q8c", label: "(c)", marks: "16",
          topic: "drying", sub: "Calculation steps for designing an adiabatic rotary (direct-contact) dryer",
          type: "theory", syllabus: "in", repeats: ["2012-13-Q8d", "2011-12-Q6c"],
          text: String.raw`Write down the calculation steps in designing an adiabatic direct contact dryer.`,
          solution: String.raw`For a continuous adiabatic (direct-heat, air-heated) dryer such as a rotary dryer (MSH Sec. 24, the course rotary-dryer example), the steps are:

1. **Specify the duty:** dry-solid rate $\dot m_s$, inlet and outlet moisture $X_a$, $X_b$ (dry basis), solid inlet temperature and maximum allowable solid temperature, solid and liquid specific heats, heating-air temperature $T_{hb}$ and humidity $H_b$, maximum allowable air mass velocity G.

2. **Moisture balance:** water evaporated $\dot m_v = \dot m_s(X_a - X_b)$.

3. **Choose the flow arrangement:** countercurrent (best efficiency) or co-current (heat-sensitive solids, since the wettest solid meets the hottest gas).

4. **Wet-bulb temperature** $T_{wb}$ of the inlet air from the psychrometric chart (constant for adiabatic operation: the gas follows its adiabatic-saturation line).

5. **Outlet air temperature** from an assumed number of heat-transfer units (economical $N_t$ = 1.5–2.5):
$$N_t = \ln\frac{T_{hb} - T_{wb}}{T_{ha} - T_{wb}}\ \Rightarrow\ T_{ha}$$

6. **Solid discharge temperature** $T_{sb}$: fix at (or below) the maximum allowed, or estimate a few degrees below the gas outlet (countercurrent).

7. **Heat load per unit mass of dry solid** (preheat, vaporization, superheat of vapour, heating of dry solid and residual moisture):
$$\frac{q_T}{\dot m_s} = c_{ps}(T_{sb}-T_{sa}) + X_bc_{pL}(T_{sb}-T_{sa}) + (X_a - X_b)\left[c_{pL}(T_v - T_{sa}) + \lambda_v + c_{pv}(T_{va} - T_v)\right]$$
with λ at the wet-bulb (vaporization) temperature.

8. **Air rate** from the heat balance on the gas: $q_T = \dot m_g\,c_s\,(T_{hb} - T_{ha})$, $c_s = 1.005 + 1.88H$ kJ/kg·K (0.24 + 0.45H Btu/lb·°F). Check the outlet humidity $H_a = H_b + \dot m_v/\dot m_g$ against saturation at $T_{ha}$ (no condensation).

9. **Diameter:** cross-section $S = \dot m_g/G$, $D = \sqrt{4S/\pi}$ (using G at or below the allowable value to limit dusting).

10. **Volumetric heat-transfer coefficient** (rotary dryers): $Ua = 0.5\,G^{0.67}/D$ Btu/ft³·h·°F (G in lb/ft²·h, D in ft).

11. **Length:** from the heat-transfer equation with the log-mean of (gas − wet-bulb) temperature differences,
$$L = \frac{q_T}{Ua\,S\,\Delta\bar T},\quad\text{or } L = N_t\,H_t\ \text{with } H_t = \frac{G\,c_s}{Ua}$$

12. **Check:** L/D (4–10), residence time and holdup (5–15% of volume), slope, speed (peripheral 0.2–0.5 m/s), flights, fan power and dust collection; repeat with another $N_t$ if necessary.`,
          answer: String.raw`Balance (water evaporated) → choose flow → T_wb of inlet air → assume N_t (1.5–2.5) for T_ha → set T_sb → heat load q_T/m_s → air rate and outlet humidity → D from allowable G → Ua = 0.5G^0.67/D → L = q_T/(Ua S ΔT_lm) = N_t H_t → check L/D, residence time.` }
      ] }
  ]
});
