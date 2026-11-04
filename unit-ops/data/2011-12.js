QB.paper({
  year: "2011-12", date: "19/05/2014", marks: 280,
  rules: String.raw`L-3/T-2 B.Sc. Engineering Examinations 2011-2012 (CHE 311 was then an L-3/T-2 course). Section A: answer any THREE of Q1–Q4; Section B: answer any THREE of Q5–Q8. Separate scripts for each section. Attached to the paper: Table 1, Properties of saturated steam and water (Keenan & Keyes, °F), Fig. 1(a) Dühring lines for NaOH–H₂O, Fig. 1(b) enthalpy–concentration diagram for NaOH solutions (McCabe), all for Q5, and Foust Fig. 21.19, characteristic curves and specific speeds of impellers (Worthington), for Q8.`,
  questions: [
    { id: "2011-12-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q1a", label: "(a)", marks: "14",
          topic: "separator-selection", sub: "Sylvan chart: main features and how to use it",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw "Silvan Chart" showing the main features. Write a short account to show how to use it.`,
          solution: String.raw`The Sylvan chart (Ludwig Fig. 4-3, from the American Air Filter Co.) is a one-page tool for **preliminary selection of dust (gas–solid) collectors**: it relates the particle concentration and mean particle size of typical industrial dusts to the collection-efficiency ranges of the main collector types.

![Layout of the Sylvan chart: concentration–size field with typical dust sources, deviation lines at the upper right, and efficiency bands of the collectors at the bottom](fig/2011-12-Q1a-sketch.svg)

**Main features**

1. **Abscissa:** mean particle size, 0.1–1000 µm (log), divided into ultramicroscopic, microscopic and macroscopic ranges.
2. **Upper ordinate (dust-collecting range):** concentration 0.001–100 grains/ft³ (log). Bands show the typical concentration and size of dusts from common sources: driers, kilns and coolers; abrasive cleaning; foundry shake-out and sand systems; metal grinding; fly ash (pulverised-coal and stoker firing); smelters, cupolas and blast furnaces; pneumatic conveying; etc.
3. **Lower ordinate (air-filter range):** grains per 1000 ft³ for atmospheric dusts (rural, city, industrial districts, ventilation standards) used for air-filter selection.
4. **Deviation lines** (upper right, fanning from a point): "extreme", "high (atmospheric dust)", "ordinary (industrial dusts)", "low (classified)", "uniform". Their slope gives how the mean size of a dust falls as its concentration is reduced by a collector (the coarse particles are removed first).
5. **Efficiency curves** (bottom, with the efficiency scale 0–99.9% at the right): bands for low-resistance cyclones, high-efficiency cyclones (centrifugals), wet collectors, cloth (fabric) arresters and electrostatic precipitators, each plotted against particle size.

**How to use it (Ludwig Example 4-1)**

1. Plot the inlet point: mean particle size and concentration (e.g. lime kiln, 7.5 gr/ft³, 9 µm).
2. Drop vertically to the efficiency bands and read the efficiency of each collector at that size: low-resistance cyclone < 50%, high-efficiency cyclone 60–80%, wet collector, fabric arrester, ESP 97%+.
3. Choose a collector (usually the cheapest that meets the duty, or a pre-cleaner): high-efficiency cyclone at 70% → outlet concentration $c_2 = c_1(1-\eta) = 7.5(0.30) = 2.25$ gr/ft³.
4. Draw a line through the inlet point **parallel to the deviation line** of the dust ("ordinary industrial dust" if unknown) down to the outlet concentration; read the new mean size (6 µm).
5. Repeat for the next collector in series at the new size (wet collector 98% → 0.045 gr/ft³, 1.6 µm), until the required outlet concentration is met.

It is a screening tool only: final selection needs the actual size distribution, gas properties, cost and vendor data.`,
          answer: String.raw`Log–log chart of concentration (gr/ft³, and gr/1000 ft³ for air filters) vs mean particle size (0.1–1000 µm) with typical dust-source bands, deviation lines, and efficiency bands for LR cyclones, HE cyclones, wet collectors, fabric arresters and ESPs. Use: plot inlet point, drop to read collector efficiencies, c_out = c_in(1−η), move parallel to the deviation line to get the new mean size, repeat for the next collector.` },
        { id: "2011-12-Q1b", label: "(b)", marks: "15",
          topic: "dust-collection", sub: "Critical particle diameter and standard cyclone proportions",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`What is critical particle diameter (CPD)? In which mechanical separator CPD concept is applied? Show the dimensional relationship of this mechanical separator with simple diagram.`,
          solution: String.raw`**Critical particle diameter.** The particle size that a separator removes with **50% efficiency** (the "cut size", $D_{pc}$ or $d_{50}$). Particles larger than $D_{pc}$ are mostly collected, smaller ones mostly escape; the efficiency for any other size is read from a fractional-efficiency curve plotted against $D_p/D_{pc}$ (Lapple's curve).

**Where it is applied:** in **cyclone separators** (centrifugal dust collectors), following Lapple. For a cyclone with inlet width B, inlet gas velocity $V_i$ and $N_t$ effective turns of the gas in the vortex:

$$D_{pc} = \left[\frac{9\mu B}{2\pi N_t V_i(\rho_s - \rho)}\right]^{1/2}$$

($N_t$ ≈ 5 normally; if $N_t$ = 1–2 re-entrainment occurs). For example, air (μ = 1.8×10⁻⁵ Pa·s), B = 0.25 m, $V_i$ = 15 m/s, $\rho_s$ = 2000 kg/m³: $D_{pc} = [9(1.8\times10^{-5})(0.25)/(2\pi(5)(15)(1999))]^{1/2} = 6.6$ µm. Smaller B (smaller cyclone) or higher $V_i$ gives a smaller cut size and higher efficiency; inlet velocity is kept at 1000–4000 ft/min (≈ 3000 average) to limit pressure drop and re-entrainment.

**Dimensional relationships (Lapple standard cyclone, all in terms of the barrel diameter $D_c$)**

![Standard (Lapple) cyclone proportions: rectangular tangential inlet D/4 × D/2, gas outlet D/2, barrel and cone each 2D, dust outlet D/4](fig/2011-12-Q1b-sketch.svg)

| Dimension | Ratio |
|---|---|
| Inlet width B | $D_c/4$ |
| Inlet height H | $D_c/2$ (2–3 × width) |
| Gas outlet (vortex finder) diameter $D_e$ | $D_c/2$ |
| Vortex-finder length S | $5D_c/8$ (≥ H, to avoid short-circuiting) |
| Cylinder (barrel) length $L_c$ | $2D_c$ |
| Cone length $Z_c$ | $2D_c$ |
| Dust outlet diameter $J_c$ | $D_c/4$ |

Inlet area $A_i = BH = D_c^2/8$, so the gas flow is $Q = V_i D_c^2/8$ (the slides use a height of 2.5 B: $Q = 2.5D_c^2V_i/16$); choosing $V_i$ and Q fixes $D_c$, and all the other dimensions follow from the ratios.`,
          answer: String.raw`CPD = cut size removed with 50% efficiency; used for cyclones: D_pc = [9μB/(2πN_tV_i(ρ_s−ρ))]^½ (N_t ≈ 5). Lapple proportions: inlet B = D/4, H = D/2; outlet D_e = D/2, vortex finder S = 5D/8; barrel L = 2D, cone 2D, dust outlet D/4.` },
        { id: "2011-12-Q1c", label: "(c)", marks: "17⅔",
          topic: "dust-collection", sub: "Wet scrubber separation mechanisms and scrubber types",
          type: "sketch", syllabus: "in", repeats: ["2019-20-Q4d", "2017-18-Q8d"],
          text: String.raw`Describe briefly the mechanism of separation action of wet scrubbers. Draw simple sketches to show different types of wet scrubbers.`,
          solution: String.raw`**Mechanisms.** A wet scrubber brings the dust-laden gas into intimate contact with a liquid (usually water) as drops, films or bubbles; particles are transferred to the liquid, and the liquid is then separated from the gas (an entrainment separator is always the last element). The particle-capture mechanisms are:

1. **Inertial impaction:** particles (> 1 µm) moving with the gas cannot follow the streamlines around a drop or wetted target and hit it. Efficiency rises with the relative velocity between gas and drops and with particle size and density (impaction parameter $\psi = \rho_p v d_p^2/18\mu d_d$); this is why venturi scrubbers with throat velocities of 60–150 m/s reach 99% on sub-micron dust at high pressure drop.
2. **Interception:** particles following a streamline that passes within one particle radius of the drop touch it.
3. **Brownian diffusion:** very fine particles (< 0.1–0.5 µm) diffuse to the drop surfaces; favoured by long contact time and small drops.
4. **Condensation (flux-force) effects:** when hot, humid gas is cooled, water vapor condenses on particles (they grow and are caught more easily) and diffusiophoresis drives them to cold surfaces.
5. **Gravity settling and centrifugal force** in spray chambers and cyclonic scrubbers; **electrostatic** attraction in charged-drop scrubbers.
6. Soluble gases (SO₂, HCl, NH₃) are absorbed at the same time.

The dust–liquid mixture leaves as a slurry (to a settling pond or clarifier); the gas leaves saturated through a mist eliminator.

![Types of wet scrubbers: spray tower, cyclonic (wet cyclone) scrubber, venturi scrubber with cyclonic separator, impingement-plate (or packed) scrubber](fig/2011-12-Q1c-sketch.svg)

| Type | How contact is made | ΔP, cm water | Typical cut size |
|---|---|---|---|
| Spray tower (chamber) | gas rises through falling spray; entrainment separator at top | 2–5 | ≈ 5–10 µm |
| Cyclonic (wet cyclone) | tangential gas inlet, sprays atomise water into the swirling gas; drops thrown to the wall | 5–15 | 2–5 µm |
| Impingement-plate / sieve-plate tower | gas bubbles through liquid on perforated plates with targets (baffles) above each hole | 5–20 | ≈ 1 µm |
| Packed-bed scrubber | gas and liquid counter-current over packing (gases + coarse dust) | 2–20 | 2–5 µm |
| **Venturi** | liquid injected at the throat; gas accelerated to 60–150 m/s atomises it; followed by a cyclonic separator | 25–150 | 0.2–1 µm |
| Self-induced spray (orifice) | gas impinges on a pool and entrains liquid itself | 10–25 | 1–2 µm |`,
          answer: String.raw`Capture by inertial impaction on drops/targets (main, ψ = ρ_pvd_p²/18μd_d), interception, Brownian diffusion of fines, condensation growth, gravity/centrifugal action; then mist elimination. Types: spray tower, cyclonic scrubber, impingement-plate/packed tower, venturi (highest ΔP and efficiency), self-induced spray.` }
      ] },
    { id: "2011-12-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q2a", label: "(a)", marks: "10",
          topic: "other", sub: "Working principles of impulse and reaction turbines",
          type: "sketch", syllabus: "out", repeats: ["2017-18-Q5b", "2016-17-Q5c", "2015-16-Q5e"],
          text: String.raw`Write down the working principles of reaction and impulse turbines with simple schematics.`,
          solution: String.raw`![Impulse stage (all expansion in the fixed nozzles, constant pressure across the moving blades) vs reaction stage (expansion in both fixed and moving blades), with pressure and velocity along the stage](fig/2011-12-Q2a-sketch.svg)

**Impulse turbine**

- The steam expands only in **stationary nozzles**, where its pressure falls and its enthalpy is converted into a high-velocity jet.
- The jet strikes symmetrical, bucket-shaped **moving blades**; the change in direction of the steam (change of momentum) produces the force on the blades, at **constant pressure** across the moving row ($p_1 = p_2$). Blade passages have constant cross-section.
- Blade force per unit mass flow = change in whirl velocity, $F = \dot m(V_{w1} + V_{w2})$; work = $F \times$ blade speed u. Optimum blade-speed ratio $u/V_1 = \cos\alpha/2 \approx 0.45$–0.5.
- Examples: De Laval (single stage), Curtis, Rateau stages; used as the first (control) stage of large turbines, and in small mechanical-drive turbines. Little axial thrust; partial admission possible.

**Reaction turbine (Parsons)**

- The steam expands **both in the fixed blades** (acting as nozzles) **and in the moving blades**; the moving-blade passages are convergent, so the steam accelerates relative to the blade and the **reaction** of the leaving jet pushes the blade, in addition to the impulse of the entering steam.
- Pressure falls continuously through fixed and moving rows; the degree of reaction $R = \Delta h_{moving}/\Delta h_{stage}$ is usually 50% (symmetrical blading).
- Optimum $u/V_1 = \cos\alpha \approx 0.9$, so each stage handles a smaller enthalpy drop and many stages are needed; higher efficiency, but axial thrust (balanced with a dummy piston) and tip leakage require full admission and close clearances.
- Used in the intermediate- and low-pressure parts of large turbines.

| | Impulse | Reaction |
|---|---|---|
| Expansion | in nozzles only | in fixed and moving blades |
| Pressure across moving blades | constant | falls |
| Blade profile | symmetrical, constant-area passages | aerofoil, convergent passages |
| Velocity per stage | high | lower (more stages) |
| Axial thrust, leakage | small | large (needs balance piston, tight seals) |`,
          answer: String.raw`Impulse: steam expands only in fixed nozzles to a high-velocity jet; moving buckets change its direction at constant pressure (force from momentum change). Reaction: expansion in both fixed and convergent moving blades (50% reaction); the moving blades are driven by impulse plus the reaction of the accelerating steam; pressure falls through both rows; more stages, axial thrust.` },
        { id: "2011-12-Q2b", label: "(b)", marks: "10",
          topic: "other", sub: "Selection guide for steam turbines by steam usage",
          type: "theory", syllabus: "out", repeats: [],
          text: String.raw`Write the selection guides for different types (according to steam usages) of steam turbines.`,
          solution: String.raw`Turbines are classified by what happens to the exhaust (and extracted) steam; the choice follows the plant's heat (process steam) and power balance:

| Type | Arrangement | Select when |
|---|---|---|
| **Condensing** | exhausts at vacuum (0.05–0.15 bar) into a surface condenser | maximum power from the steam; no use for low-pressure process steam (power stations, large drivers); highest power per kg of steam but the latent heat is rejected to cooling water |
| **Non-condensing (back-pressure)** | exhausts at a pressure above atmospheric into a process steam header | the plant needs large amounts of low-pressure process steam (sugar, paper, chemical, textile, fertiliser plants); excellent overall (cogeneration) efficiency; power output is tied to the process steam demand |
| **Extraction (automatic or uncontrolled)** | part of the steam withdrawn at one or more intermediate pressures (controlled by internal valves), the rest condensing or exhausting at back pressure | process steam is needed at one or more pressures but its demand varies independently of the power demand; also regenerative feed-water heating (uncontrolled bleed) |
| **Induction (admission, mixed-pressure)** | surplus low-pressure steam from the process (waste-heat boilers, other back-pressure turbines) is admitted to an intermediate stage | the plant has excess low-pressure steam that would otherwise be vented |
| **Extraction–induction** | can either extract or admit at the same stage | the plant's low-pressure steam balance swings between surplus and deficit |
| **Reheat** | steam returned to the boiler between HP and LP sections | large utility units: higher efficiency and drier exhaust |

**Further selection points:** steam conditions available (inlet P, T), power and speed of the driven machine (direct drive of pumps/compressors vs gear or generator), single-stage (small, low efficiency, cheap, < ≈ 1 MW) vs multistage, variable-speed requirement, reliability/spare-drive duty (e.g. turbine-driven spare pumps for power failure), and the cost of steam vs electricity.`,
          answer: String.raw`Condensing: maximum power, no process-steam need. Back-pressure (non-condensing): large LP process-steam demand, cogeneration. Extraction: process steam at intermediate pressures with independent demand; induction/admission: surplus LP steam available; extraction–induction for swinging balance; reheat for large utility units. Also consider steam conditions, power/speed, staging, cost.` },
        { id: "2011-12-Q2c", label: "(c)", marks: "10",
          topic: "other", sub: "Working principle of a droop (speed) governor",
          type: "sketch", syllabus: "out", repeats: [],
          text: String.raw`With neat sketches explain the working principle of a Droop Governor.`,
          solution: String.raw`A **droop governor** is a proportional speed controller: it opens the steam (governor) valve in proportion to the fall in speed, so that the speed settles at a slightly lower value as the load increases. The steady-state relation between speed and load is a falling straight line — the **speed droop**.

![Droop governor: flyweight speed sensor, linkage with feedback, oil servo-motor and governor valve; speed falls linearly from no load to full load (droop)](fig/2011-12-Q2c-sketch.svg)

**Working**

1. **Speed sensing:** flyweights driven from the turbine shaft are thrown outward by centrifugal force against a **speeder spring**; their position is a measure of speed (in electronic governors a magnetic pickup + controller does the same).
2. **Load increases → speed falls:** the flyweights move in, the pilot valve (connected through a floating lever) moves and admits oil to the **power piston (servo-motor)**.
3. The servo-motor **opens the governor (control) valve**, admitting more steam, so the turbine power rises to meet the load.
4. **Feedback (droop linkage):** the movement of the servo-motor is fed back to the floating lever (or the speeder-spring setting), recentring the pilot valve when the valve has opened by an amount proportional to the speed error. The system therefore comes to rest at a new, slightly lower speed: **each valve position corresponds to one speed**.
5. **Droop:**
$$\text{Droop}\,(\%) = \frac{N_{no\,load} - N_{full\,load}}{N_{rated}}\times100$$
   typically 3–5%. For example with 4% droop, a 3000 r/min turbine runs at 3060 r/min at no load and 2940 r/min at full load (if set to rated at half load).
6. **Speed setting (speed changer/synchroniser)** shifts the droop line up or down, changing the load carried at a given speed.

**Why droop:** stable control without hunting (a purely isochronous mechanical governor without feedback would oscillate), and **load sharing** between generators in parallel on a grid (or turbines driving a common header): each unit takes a share of a load change in inverse proportion to its droop. Isochronous (zero-droop, PI) governors are used only for a single unit on an isolated system.`,
          answer: String.raw`Flyweight speed sensor + speeder spring → pilot valve → oil servo opens the steam valve when speed falls; feedback linkage stops the valve at an opening proportional to the speed error, so steady speed falls linearly with load: droop = (N_NL − N_FL)/N_rated (3–5%). Gives stable control and load sharing between parallel units; the speed changer shifts the droop line.` },
        { id: "2011-12-Q2d", label: "(d)", marks: "16⅔",
          topic: "other", sub: "Recommended combined staging for high-energy multistage impulse turbine",
          type: "sketch", syllabus: "out", repeats: [],
          text: String.raw`What type of combined staging will you recommend for a multistage impulse turbine with high energy difference between inlet and outlet stream? Show the steam flow path and pressure-velocity relationship along the length of the recommended turbine.`,
          solution: String.raw`**Recommendation: pressure–velocity compounding** — a velocity-compounded (Curtis) wheel as the first stage followed by pressure-compounded (Rateau) impulse stages (or several pressure stages each with a two-row Curtis wheel).

**Why**

- With a large enthalpy drop, a single nozzle would give steam velocities of 1000–1500 m/s; the optimum blade speed ($u \approx 0.45V$ for one row) would then be beyond the strength limits of the wheel, and the leaving loss very large.
- **Velocity compounding** alone (one nozzle, several moving rows) absorbs a high velocity at reasonable blade speed ($u/V \approx 0.25$ for two rows), but its efficiency falls with the number of rows (friction losses in each row).
- **Pressure compounding** alone needs many stages (long, costly rotor).
- **Combining** them: the first Curtis stage takes a large pressure and temperature drop in a short length (so the casing downstream sees lower pressure and temperature, and partial admission at the first stage gives good part-load control by nozzle-group governing); the following Rateau stages use the remaining drop efficiently at moderate velocities. Result: fewer stages and a shorter, cheaper machine with good efficiency.

**Steam flow path:** nozzle ring 1 (large pressure drop) → moving row 1 → fixed guide row → moving row 2 (velocity absorbed at constant pressure) → diaphragm nozzle ring 2 (pressure drop) → moving row → nozzle ring 3 → moving row → … → exhaust.

![Pressure–velocity compounded staging: nozzles N, moving blades M, fixed guide blades F; pressure falls only in the nozzle rings, velocity rises in each nozzle and is absorbed in the moving rows (panel c)](fig/2012-13-Q2a-sketch.svg)

Along the length of the turbine: **pressure** falls step-wise, only in the nozzle rings, and stays constant through each moving–fixed–moving group; **absolute velocity** jumps up in each nozzle ring and falls in two steps across the two moving rows of each Curtis group (it stays roughly constant through the fixed guide row except for friction), then in single steps across each Rateau row. Specific volume increases continuously, so blade heights increase toward the exhaust.`,
          answer: String.raw`Pressure–velocity compounding (Curtis two-row wheel first, then Rateau/pressure stages): takes the large drop at acceptable blade speeds with fewer stages. Pressure falls only in each nozzle ring and is constant across moving/guide rows; velocity rises in each nozzle and is absorbed in the moving rows (two steps per Curtis group).` }
      ] },
    { id: "2011-12-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q3a", label: "(a)", marks: "10",
          topic: "size-reduction", sub: "Importance of crushing and grinding in chemical and mining industries",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss the importance of size reduction (crushing and grinding) operations in chemical and mining industries with appropriate examples.`,
          solution: String.raw`Size reduction (comminution) cuts solids into smaller pieces by mechanical forces. It is needed because:

1. **Liberation of valuable constituents** (mining, mineral processing): ores are crushed and ground until the mineral grains are freed from the gangue so that they can be concentrated by flotation, magnetic or gravity separation (copper sulphide ores ground to ≈ 75 µm; iron ore; coal washing).
2. **Increase of surface area** for faster reaction, dissolution, leaching, extraction, drying and heat transfer: limestone and clay for cement kilns, pulverised coal for boiler firing (≈ 75 µm, fast combustion), phosphate rock for fertiliser acidulation, ores for leaching (gold cyanidation), oil-seeds before solvent extraction, ground catalysts.
3. **Required product size specification:** cement (Blaine 3000–4000 cm²/g), pigments and fillers (TiO₂, CaCO₃, talc), pharmaceutical powders and tablets, food products (flour, sugar, spices), detergents, ceramic bodies.
4. **Ease of handling, transport and storage:** large lumps from the quarry (1–2 m) reduced to sizes that conveyors, bins and feeders can handle; mixing and blending of solids needs similar small sizes (uniform mixtures, e.g. cement raw meal, fertiliser blends, pharmaceutical formulations).
5. **Separation and recycling:** grinding of scrap, recycling of plastics, glass and rubber; disintegration of cells (biotechnology).

Size reduction is also one of the largest energy users in industry (a few percent of all electrical power; tens of kWh/t for cement and fine ore grinding), so the right choice of equipment and closed-circuit operation is economically important.`,
          answer: String.raw`Liberates minerals from gangue (ore before flotation), increases surface for reaction/combustion/leaching/extraction (pulverised coal, cement raw meal, phosphate rock), meets product size specs (cement, pigments, pharmaceuticals, flour), eases handling, mixing and transport; a major energy consumer, so equipment choice matters.` },
        { id: "2011-12-Q3b", label: "(b)", marks: "10",
          topic: "size-reduction", sub: "Classifying size-reduction equipment; energy vs product size",
          type: "sketch", syllabus: "in", repeats: ["2014-15-Q1biv"],
          text: String.raw`Classify the size reduction equipment based on feed and product size. Show graphically the energy requirement of different size reduction equipment.`,
          solution: String.raw`**Classification (MSH ch. 29; course slides)**

| Class | Feed size | Product size | Machines (main force) |
|---|---|---|---|
| **A. Coarse (primary) crushers** | 0.1–2 m | 50–250 mm | jaw (Blake) crusher, gyratory crusher (compression) |
| **Intermediate (secondary) crushers** | 25–250 mm | 5–50 mm | smooth crushing rolls, cone crusher (compression), toothed rolls (compression + tearing), impact crushers |
| **B. Grinders (intermediate and fine)** | 5–50 mm | 0.1–5 mm and down to 75 µm | hammer mills and impactors (impact), rolling-compression mills (bowl and roller mills), attrition mills, tumbling mills: rod, ball, pebble, tube mills (impact + attrition) |
| **C. Ultrafine grinders** | < 6 mm | 1–50 µm | hammer mills with internal classification, fluid-energy (jet) mills, agitated (stirred media) mills, colloid mills |
| **D. Cutting machines** | soft/tough materials | definite size or shape, 2–10 mm | knife cutters, dicers, slitters (rubber, plastics, food) |

**Energy requirement.** The energy per tonne rises steeply as the product becomes finer (energy ∝ new surface, Bond's law $E = 10W_i(1/\sqrt{P} - 1/\sqrt{F})$). Computed for a typical work index $W_i$ = 12 kWh/t:

| Stage | F → P | E, kWh/t |
|---|---|---|
| Primary crusher | 500 mm → 100 mm | 0.21 |
| Secondary crusher | 100 mm → 20 mm | 0.47 |
| Intermediate grinder (rod/hammer mill) | 20 mm → 1 mm | 2.9 |
| Fine grinder (ball mill) | 1 mm → 75 µm | 10.1 |
| Ultrafine grinder | 75 µm → 10 µm | 24 (more, as Rittinger's law applies) |

![Specific energy vs product size for successive size-reduction machines (Bond's law, W_i = 12 kWh/t): energy rises steeply for fine and ultrafine grinding](fig/2011-12-Q3b-sol.svg)

So a crusher uses well under 1 kWh/t, while ball-mill grinding and ultrafine grinding use 10 to more than 25 kWh/t; this is why large reduction ratios are divided among several machines and fines are removed continuously (closed circuit).`,
          answer: String.raw`Coarse crushers (jaw, gyratory: 2 m → 50–250 mm), intermediate crushers (rolls, cone: → 5–50 mm), grinders (hammer, roller, rod/ball mills: → 0.1 mm–75 µm), ultrafine grinders (fluid-energy, stirred mills: 1–50 µm), cutters. Energy (Bond, W_i = 12): ≈ 0.2–0.5 kWh/t crushing, ≈ 3 kWh/t intermediate, ≈ 10 kWh/t ball mill, > 24 kWh/t ultrafine.` },
        { id: "2011-12-Q3c", label: "(c)", marks: "10",
          topic: "size-reduction", sub: "Forces in size reduction and how applied energy is used",
          type: "theory", syllabus: "in", repeats: ["2016-17-Q6a"],
          text: String.raw`How do different forces arise during size reduction operation? In how many ways, is the applied energy utilized in size reduction operation?`,
          solution: String.raw`**How the forces arise** (four kinds used in machines, MSH ch. 29):

1. **Compression:** the particle is squeezed slowly between two rigid surfaces (jaws, rolls, gyratory mantle and bowl). Stress builds up at contact points until the weakest flaws (Griffith cracks) propagate; produces a few coarse fragments and some fines. Used for coarse reduction of hard solids.
2. **Impact:** a fast-moving body (hammer, falling ball, the particle itself thrown against a plate) strikes the particle; the kinetic energy is delivered in a very short time as a high local stress wave that shatters the particle into coarse, medium and fine pieces (hammer mills, ball mills, impactors).
3. **Attrition (rubbing, shear):** surfaces rub across the particle (or particles rub on each other), removing material from the surface; produces very fine particles (attrition mills, ball mills, fluid-energy mills).
4. **Cutting:** a sharp edge concentrates the force along a line and cleaves the material into definite sizes and shapes with few fines (knife cutters for rubber, plastics, food).

In each case the applied force produces stress inside the particle; the particle first deforms elastically (and plastically for ductile materials), stores strain energy, and breaks when the stress at the tips of internal flaws exceeds the strength. Fracture usually also creates many fine fragments (the product is a wide size distribution).

**How the applied energy is utilised.** Only a very small fraction (≈ 0.1–2%) appears as new surface energy. The input energy goes into:

1. elastic deformation of the particles before fracture (released as heat);
2. inelastic (plastic) deformation leading to fracture and the **creation of new surface** (surface energy);
3. elastic deformation of the machine parts (jaws, balls, liners);
4. friction between particles and between particles and the machine;
5. **heat** (most of the energy appears finally as heat in the product and the machine);
6. **noise and vibration**;
7. losses in the drive (motor, gears, bearings) and wear of the equipment.

The crushing efficiency $\eta_c = e_s(A_{wb} - A_{wa})/W_n$ (surface energy created ÷ energy absorbed by the solid) and the mechanical efficiency (energy absorbed ÷ energy input) together give the overall efficiency.`,
          answer: String.raw`Forces: compression (between jaws/rolls), impact (hammers, falling balls), attrition/shear (rubbing surfaces), cutting (knives) — they set up internal stress that propagates flaws. Energy goes to elastic and plastic deformation, new surface (only ≈ 0.1–2%), deformation of machine parts, friction, heat, noise/vibration and drive losses.` },
        { id: "2011-12-Q3d", label: "(d)", marks: "16⅔",
          topic: "size-reduction", sub: "Ball mill: construction and how grinding action is obtained",
          type: "sketch", syllabus: "in", repeats: ["2018-19-Q4a"],
          text: String.raw`Describe with neat sketch. How the grinding actions are obtained in a ball mill.`,
          solution: String.raw`**Construction.** A horizontal steel cylinder (shell) lined with wear-resistant liners (manganese steel, rubber, ceramic), rotating slowly on trunnions, about half filled (30–50% by volume) with grinding media: steel or cast-iron balls (25–125 mm), flint pebbles (pebble mill) or rods (rod mill). Feed enters through the hollow trunnion at one end; product leaves through the other trunnion (overflow) or through a grate (grate-discharge). Long tube mills and compartment mills have several chambers with progressively smaller balls. Lifters on the liner raise the charge.

![Ball-mill charge motion: cascading at low speed (attrition), cataracting at the optimum speed (impact), centrifuging at the critical speed (no grinding)](fig/2011-12-Q3d-sketch.svg)

**How the grinding actions are obtained**

1. The rotating shell carries the balls and material up the rising side by friction and the lifters.
2. **Cascading (lower speeds):** the charge rolls and tumbles over itself down the face of the charge; the balls roll over each other and grind the particles caught between them by **attrition (rubbing, shear)** and some compression → fine product.
3. **Cataracting (higher speeds, 65–80% of critical):** the balls are carried higher and are thrown off in parabolic paths, falling onto the charge at the toe: **impact** breaks the larger particles.
4. Both actions occur together in a normal mill: impact at the toe for coarse particles, attrition in the body of the cascading charge for fines. Small balls give more contact points and finer products; large balls give heavier impact for coarse feeds.
5. **Centrifuging (at or above the critical speed** $n_c = \frac{1}{2\pi}\sqrt{\frac{g}{R-r}}$): the balls stick to the shell, there is no relative motion and grinding stops. Hence the operating speed is 50–75% of $n_c$.

**Factors affecting the grinding:** speed, ball size and charge (40–50% of volume), feed rate and material level (low level reduces cushioning), wet or dry grinding (wet: 20–30% less power, no dust), slope and discharge freedom, closed-circuit classification.

**Advantages:** suitable for wet or dry, batch or continuous, open or closed circuit, all hardnesses, inert atmosphere for explosive materials, cheap grinding medium. **Disadvantages:** contamination from wear (0.03–0.1% metal), noise, high energy per tonne, long residence time.`,
          answer: String.raw`Rotating cylinder half full of balls: balls lifted by the shell and lifters, then (i) cascade — roll over each other, grinding by attrition/compression (fines), and (ii) cataract — fall from height onto the charge toe, grinding by impact (coarse); at the critical speed n_c = (1/2π)√(g/(R−r)) they centrifuge and grinding stops, so run at 50–75% n_c.` }
      ] },
    { id: "2011-12-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q4a", label: "(a)", marks: "16⅔",
          topic: "compressors", sub: "Intercooling in multistage reciprocating compressors",
          type: "sketch", syllabus: "partial", repeats: ["2013-14-Q7d"],
          text: String.raw`Why are intercoolers used with multistage reciprocating compressor? How does intercoolers contribute to the efficiency of multistage compressor? — Explain with the help of necessary diagram.`,
          solution: String.raw`**Why multistage with intercooling.** For a high overall pressure ratio a single-stage compression would give (i) a very high discharge temperature (lubricant breakdown, valve damage, risk of explosion with oil vapor, material limits), (ii) a large work input, and (iii) a low volumetric efficiency because the clearance gas re-expands over a large pressure ratio ($\eta_V = 1 - c[(P_2/P_1)^{1/n} - 1]$ falls to zero at high ratios). The compression is therefore split into stages, with the gas cooled in an **intercooler** (water-cooled exchanger, with a moisture separator) between stages, ideally back to the suction temperature.

![P–V diagram of a two-stage compressor with perfect intercooling: compression follows the polytropic line to the intermediate pressure, is cooled back to the isothermal line, then compressed again; the shaded area is the work saved compared with single-stage compression](fig/2011-12-Q4a-sol.svg)

**How intercooling raises the efficiency**

1. After the first stage the gas is cooled at constant pressure from $T_2$ back to $T_1$: its volume shrinks from point 2 to point 2′, which lies on the **isothermal** line through the suction point.
2. The second stage starts from this smaller volume, so its compression line lies to the left of the single-stage polytropic line. The area between the two lines (shaded) is **work saved**; with more stages the actual process approaches isothermal compression, the minimum work.
3. Polytropic work per stage: $W = \frac{n}{n-1}P_1V_1\left[r^{(n-1)/n} - 1\right]$. With perfect intercooling the total work is a **minimum when the stage pressure ratios are equal**: $P_i = \sqrt{P_1P_3}$, $r = (P_3/P_1)^{1/N}$ for N stages.
4. **Example** (n = 1.3, 1 → 9 bar, $T_1$ = 300 K): single stage $W = 4.33P_1V_1(9^{0.231} - 1) = 2.86P_1V_1$, discharge 498 K (225°C); two stages at r = 3 each with intercooling: $W = 2(4.33)(3^{0.231} - 1)P_1V_1 = 2.50P_1V_1$, discharge 387 K (114°C): **13% less work** and a 111 K lower discharge temperature.
5. Other benefits: higher volumetric efficiency (smaller ratio per stage), lower temperature per stage (better lubrication, longer valve life), condensation and removal of moisture in the intercooler, smaller and lighter high-pressure cylinders, better mechanical balance.

So intercooling increases the isothermal efficiency (isothermal work ÷ actual work) of a multistage compressor.`,
          answer: String.raw`Single-stage high ratios give very high discharge T, high work and low volumetric efficiency; intercoolers cool the gas back to suction T between stages, so the next stage starts on the isothermal line and the path approaches isothermal compression (shaded area saved). Minimum work at equal stage ratios r = (P_final/P_1)^(1/N). Example 1→9 bar, n = 1.3: 2.86 vs 2.50 P₁V₁ (13% saved), discharge 498 K → 387 K.` },
        { id: "2011-12-Q4b", label: "(b)", marks: "10",
          topic: "relief", sub: "Set pressure, backpressure and balanced safety valve principle",
          type: "sketch", syllabus: "in", repeats: ["2022-23-Q4b", "2020-21-Q4a", "2012-13-Q4d"],
          text: String.raw`What is set pressure and back pressure of a relief valve? Explain the working principle of a balanced safety valve with neat schematic diagram.`,
          solution: String.raw`**Set pressure:** the inlet (gauge) pressure at which a relief device is adjusted to start opening (pop for a safety valve, begin to lift for a relief valve, burst for a rupture disc) under service conditions. It is set at or below the MAWP of the protected vessel, normally ≈ 10% above the operating pressure; with accumulation the vessel pressure may reach 110% of MAWP (116% with multiple valves, 121% for fire).

**Backpressure:** the pressure at the outlet of the relief device.
- **Superimposed backpressure:** present before the valve opens (from a common flare/scrubber header or other relieving devices); constant or variable.
- **Built-up backpressure:** develops after the valve opens because of flow through the discharge piping.
Backpressure affects the opening pressure and capacity of conventional valves.

**Balanced (bellows) safety valve**

![Conventional vs balanced-bellows valve: in the balanced valve the bellows (effective area = seat area) seals the disc and spring from the outlet and the bonnet is vented](fig/2022-23-Q4b-sketch.svg)

1. A spring holds the disc on the nozzle seat; the process pressure P acts upward on the seat area $A_N$.
2. A **bellows**, whose effective area equals $A_N$, is fitted between the disc holder and the guide; the bonnet (spring chamber) is **vented to atmosphere**.
3. The backpressure $P_b$ acts on the downstream face of the disc and on the outside of the bellows over equal areas, so its upward and downward forces **cancel**. The force balance at opening is simply
$$P A_N = F_{spring}\ \Rightarrow\ P_{open} = P_{set}$$
   independent of the backpressure (compare $P_{open} = P_{set} + P_b$ for a conventional valve).
4. On reaching the set pressure the disc lifts (pop action for gas service, with a huddling chamber), discharges, and reseats at the blowdown pressure.
5. Benefits: constant set point with large or variable backpressure (to ≈ 30–50% of set), spring protected from corrosive or fouling fluid. Drawbacks: higher cost; bellows failure (bonnet vent must be safely routed); capacity still reduced at high backpressure ($K_b$ factor).`,
          answer: String.raw`Set pressure: inlet pressure at which the valve starts to open (≤ MAWP). Backpressure: outlet pressure, superimposed (before opening) or built-up (flow in discharge line). Balanced valve: bellows of seat area with vented bonnet cancels backpressure forces → P_open = P_set regardless of P_b; spring protected; used for variable/high backpressure headers.` },
        { id: "2011-12-Q4c", label: "(c)", marks: "10",
          topic: "dust-collection", sub: "Working principle of an electrostatic precipitator",
          type: "sketch", syllabus: "in", repeats: ["2018-19-Q5a", "2016-17-Q5bi"],
          text: String.raw`Describe the working principle of an ESP with simple diagram.`,
          solution: String.raw`![Plate-type ESP: negative discharge wires between grounded collecting plates; corona charges the particles, which migrate to the plates and are rapped into hoppers](fig/2011-12-Q4c-sketch.svg)

**Components:** discharge (corona) electrodes — thin wires or spiked rods at high negative voltage (30–100 kV DC from a transformer–rectifier set); grounded collecting electrodes — parallel plates (dry ESP) or tubes (wet ESP); gas distribution plates; rappers; hoppers; insulators and casing.

**Working principle (four steps)**

1. **Corona and ionisation:** the strong field near the thin discharge wires ionises the gas; electrons and negative gas ions flow toward the collecting plates.
2. **Particle charging:** the particles in the gas pick up the negative ions — by **field charging** (ion bombardment along field lines; dominant for particles > 0.5 µm) and **diffusion charging** (thermal motion of ions; dominant < 0.1 µm).
3. **Migration and collection:** the charged particles move across the gas stream toward the grounded collecting plates under the electric force, with the **migration (drift) velocity** w (balance of electric force $qE$ and Stokes drag), typically 0.02–0.2 m/s. Collection efficiency (Deutsch–Anderson):
$$\eta = 1 - \exp\left(-\frac{wA}{Q}\right)$$
   with A = collecting area, Q = gas flow (specific collection area A/Q).
4. **Removal:** the deposited layer loses its charge to the plate and is held by electrical and adhesive forces; periodic **rapping** (or water flushing in wet ESPs) drops it into the hoppers.

**Features:** 99–99.9% efficiency on fine particles, very low pressure drop, large gas volumes, high temperatures (to ≈ 700°C), dry or wet (mists) collection; high capital cost and space, sensitive to particle **resistivity** (best 10⁷–10¹⁰ Ω·cm; low-resistivity particles re-entrain, high-resistivity ones cause back-corona), cannot remove gases.`,
          answer: String.raw`High negative DC voltage on discharge wires creates corona; gas ions charge the particles (field charging > 0.5 µm, diffusion < 0.1 µm); charged particles drift to grounded plates (η = 1 − exp(−wA/Q)); deposit is rapped/washed into hoppers. High efficiency on fines, low ΔP, large flows; costly, resistivity-sensitive.` },
        { id: "2011-12-Q4d", label: "(d)", marks: "10",
          topic: "relief", sub: "Guidelines for installing relief devices on pressure vessels",
          type: "theory", syllabus: "in", repeats: ["2013-14-Q4c"],
          text: String.raw`Write the guidelines for installing safety devices on a pressure vessel.`,
          solution: String.raw`Guidelines (Crowl & Louvar ch. 8 installation practice; ASME VIII / API 520 Part II):

**Location and inlet**
1. Every vessel that can be over-pressured needs a relief device; mount it on the **vapor space at the top** of the vessel (or as close as possible), vertical and upright, so that it relieves vapor and does not fill with liquid.
2. The inlet line must be short and at least the size of the valve inlet; **inlet pressure loss < 3% of the set pressure** (otherwise the valve chatters).
3. **No block valve** between the vessel and the relief device unless it is a full-bore valve **car-sealed or locked open** (or interlocked so that one relief path is always open, e.g. two valves with a three-way changeover valve).
4. Avoid locating the valve where pulsation or turbulence occurs (immediately downstream of control valves, elbows, pump discharges); allow straight runs.

**Discharge**
5. Discharge piping at least the size of the valve outlet, as short and straight as possible; built-up backpressure within the limits of the valve type (≤ 10% for conventional, ≈ 30–50% for balanced bellows); use balanced or pilot valves for variable backpressure.
6. Discharge to a **safe location or containment/treatment system** (knock-out drum, scrubber, flare, condenser, incinerator) for toxic or flammable fluids; steam/air may go to atmosphere above roof level away from people, with rain caps and **drain holes** at low points to prevent liquid accumulation.
7. No valves in the discharge line, or car-sealed open if unavoidable (header isolation).

**Mechanical**
8. Support the inlet and discharge lines so that **reaction forces** at opening, weight, thermal expansion and vibration do not load the valve or nozzle (stress analysis per API 520).
9. Rupture disc in series with a relief valve: use a non-fragmenting disc, with a **pressure gauge, try-cock or excess-flow indicator** in the space between them to detect leakage; disc burst pressure and valve set pressure coordinated.
10. Combinations for special cases: two rupture discs in series with a gauge between (toxic materials); rupture disc in parallel with a smaller relief valve set lower (valve handles small upsets, disc the large ones); discs on both sides of a valve.

**Operation and maintenance**
11. Set pressure ≤ MAWP; capacity sized for the worst credible scenario; nameplate and tag; access for testing and removal; periodic inspection, bench-testing and recertification; heat tracing where the fluid can freeze or solidify; keep records.`,
          answer: String.raw`Mount on the vapor space at the top, short inlet (ΔP < 3% of set), no block valve unless locked open, avoid turbulent locations; adequately sized discharge with acceptable backpressure, to a safe place or KO drum/scrubber/flare, drains, no discharge valves; support for reaction forces; gauge between a rupture disc and valve; set ≤ MAWP; regular testing and maintenance.` }
      ] },
    { id: "2011-12-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q5a", label: "(a)", marks: "16⅔",
          topic: "evaporation", sub: "Why multiple effects; merits of forward, backward, mixed, parallel feed",
          type: "sketch", syllabus: "in", repeats: ["2015-16-Q3a"],
          text: String.raw`Why multiple effect evaporators are used? Discuss the merits and demerits of different feeding schemes/arrangements of multiple effect evaporator.`,
          solution: String.raw`**Why multiple effects.** In a single effect about 1 kg of steam evaporates about 1 kg of water (economy ≈ 0.8–1), and the latent heat of the vapor is wasted in the condenser. In a multiple-effect unit the vapor from one effect is the heating steam of the next, which operates at a lower pressure and temperature; the latent heat is reused n times, so the **steam economy is roughly n** (e.g. 2.5–2.8 for three effects). The price is n times the heating surface for about the same capacity (since the total ΔT is shared). Multiple effects are therefore used when evaporation duties are large and steam is costly (sugar, caustic soda, black liquor, salt, desalination, milk).

![Feed arrangements of a triple-effect evaporator: forward, backward, mixed and parallel feed](fig/2011-12-Q5a-sketch.svg)

| Arrangement | Description | Merits | Demerits |
|---|---|---|---|
| **Forward feed** | feed enters effect 1 (hottest, highest P); liquor flows with the vapor to effects 2, 3 | no pumps between effects (liquor flows by the pressure difference); the most concentrated liquor is at the lowest temperature — good for heat-sensitive products; simple | cold feed must be heated to the effect-1 boiling point by the steam (lower economy); the thick, viscous liquor is in the coldest effect with the lowest U |
| **Backward feed** | feed enters the last (coldest) effect; liquor is pumped toward effect 1 against the pressure gradient | cold feed is heated gradually by low-grade vapor → higher economy with cold feed; the concentrated, viscous liquor is in the hottest effect where viscosity is lowest and U is high → higher capacity | pumps (and controls) needed between effects; product exposed to the highest temperature (bad for heat-sensitive liquors) |
| **Mixed feed** | feed enters an intermediate effect, flows forward to the end, then is pumped back to effect 1 for final concentration | combines the advantages: fewer pumps than backward feed, final concentration at high temperature where viscosity is lowest, better economy than forward feed | more complex piping and control |
| **Parallel feed** | fresh feed to every effect, product withdrawn from every effect | used when the feed is nearly saturated and crystals are produced (salt evaporators), or no concentration in series is needed; simple liquor handling | no transfer of liquor between effects; each effect works at the final concentration (BPE in every effect) |`,
          answer: String.raw`Reusing the vapor as heating steam in lower-pressure effects gives economy ≈ n (at the cost of ≈ n× area). Forward feed: no pumps, product at low T (heat-sensitive), but cold feed lowers economy and viscous liquor at low U. Backward: best economy with cold feed and high U for viscous liquor, but pumps and product at high T. Mixed: compromise. Parallel: for saturated feeds/crystallising (salt).` },
        { id: "2011-12-Q5b", label: "(b)", marks: "10",
          topic: "evaporation", sub: "Evaporator for heat-sensitive fruit juice 10% to 50%",
          type: "theory", syllabus: "in", repeats: ["2019-20-Q5a"],
          text: String.raw`A client wants to concentrate a heat sensitive fruit juice from 10% to 50%. What type of evaporator should you be suggesting him to use and why?`,
          solution: String.raw`**Recommendation:** a **falling-film evaporator** operated under **vacuum** (multiple effect or with mechanical/thermal vapor recompression), with a **plate or agitated-film (wiped-film) finisher** for the last, viscous part of the concentration toward 50% solids; aroma recovery from the first-effect vapor.

**Reasons**

- **Short residence time:** the juice passes once through the tubes as a thin film flowing down under gravity, in seconds (5–30 s per pass), so there is very little thermal damage (colour, flavour, vitamin C, browning, caramelisation).
- **Low boiling temperature:** vacuum operation (e.g. 40–70°C) and the absence of a hydrostatic head in falling-film tubes (the film boils at the pressure of the vapor space) keep the juice cool; small ΔT per effect is enough because U is high.
- **High heat-transfer coefficient** even at small ΔT (no hydrostatic suppression of boiling): compact and economical; multiple effects or vapor recompression give good steam economy.
- **Viscosity at 50%:** fruit-juice concentrates become viscous (and pulp can foul); a falling-film unit with good distribution handles moderate viscosity, and for the final stage an **agitated thin-film** evaporator (wiped by rotor blades) gives a high U and very short residence time with viscous, fouling liquids.
- **Hygienic design:** easily cleaned (CIP), stainless steel, no stagnant zones.
- Alternatives (natural circulation, long residence) would over-heat the juice; a rising-film LTV needs a larger ΔT to start the film.`,
          answer: String.raw`A vacuum falling-film evaporator (multiple-effect/vapor-recompression), with an agitated thin-film (or plate) finisher for the viscous 50% end: seconds of residence, low boiling temperature, no hydrostatic head, high U at small ΔT, handles viscosity, hygienic — so flavour, colour and vitamins are preserved.` },
        { id: "2011-12-Q5c", label: "(c)", marks: "20",
          topic: "evaporation", sub: "Single-effect NaOH evaporator 10% to 50%: heating area",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q1d"],
          text: String.raw`Determine the heating area required for the production of 10,000 lb/hr of 50% NaOH solution from a 10% NaOH feed entering at 100°F. Evaporation is to be carried out in a single effect evaporator for which an overall coefficient of 500 Btu/hr.ft² °F is expected. Steam is available saturated at 50 psig, the evaporator can be operated at 10 psi vacuum relative to barometric pressure of 14.7 psia.

Attached (for Q5): Table 1, properties of saturated steam and water; Fig. 1(a) Dühring lines for the NaOH–H₂O system; Fig. 1(b) enthalpy–concentration diagram for aqueous NaOH (reference states: liquid water at 32°F, NaOH infinitely dilute at 68°F). Rows of Table 1 used:

| T, °F | P, psia | $H_L$, Btu/lb | λ, Btu/lb | $H_V$, Btu/lb |
|---|---|---|---|---|
| 150 | 3.718 | 117.89 | 1008.2 | 1126.1 |
| 160 | 4.741 | 127.89 | 1002.3 | 1130.2 |
| 290 | 57.556 | 259.31 | 917.5 | 1176.8 |
| 300 | 67.013 | 269.59 | 910.1 | 1179.7 |`,
          solution: String.raw`Same problem as 2022-23 Q1d (Foust Example 19.1).

**Given:** L = 10,000 lb/h at 50%; $x_F$ = 0.10 at 100°F; U = 500 Btu/h·ft²·°F; steam 50 psig = 64.7 psia; vapor space 4.7 psia.

**Find:** heating area A.

**Assumptions:** no heat losses, no hydrostatic-head effect on the boiling point, condensate leaves saturated.

1. **Steam (Table 1):** at 64.7 psia, $T_s = 290 + 10\frac{64.7-57.556}{67.013-57.556} = 297.6^\circ$F; $\lambda_s = 917.5 - 0.755(7.4) = 911.9$ Btu/lb.

2. **Water boiling point at 4.7 psia:** $T_w = 150 + 10\frac{4.7-3.718}{4.741-3.718} = 159.6 \approx 160^\circ$F.

3. **Liquor boiling point (Fig. 1a, Dühring):** from 160°F on the water axis up to the 50% line: $T_L$ ≈ 233°F; BPR = 73°F.

4. **Material balance:** $F = 10{,}000(0.5)/0.1 = 50{,}000$ lb/h; $V = 40{,}000$ lb/h.

5. **Enthalpies:** Fig. 1(b): $h_F$ (10%, 100°F) ≈ 60 Btu/lb; $h_L$ (50%, 233°F) ≈ 245 Btu/lb. Vapor superheated at 4.7 psia, 233°F: $H_V \approx 1130 + 0.46(73) \approx 1160$ Btu/lb.

6. **Heat load:**
$$q = 40{,}000(1160) + 10{,}000(245) - 50{,}000(60) = 45.85\times10^6\ \mathrm{Btu/h}$$

7. **Steam:** $m_s = 45.85\times10^6/911.9 = 50{,}300$ lb/h; economy 0.80.

8. **Area:** ΔT = 297 − 233 = 64°F:
$$A = \frac{45.85\times10^6}{500(64)} = 1433\ \mathrm{ft^2}$$

**Result:** A ≈ **1430 ft²** (1420 ft² with ΔT = 64.6°F); steam ≈ 50,300 lb/h.`,
          answer: String.raw`F = 50,000, V = 40,000 lb/h; T_w = 160°F, T_L = 233°F (BPR 73°F); q = 45.85×10⁶ Btu/h; steam = 50,300 lb/h (λ = 911.9); A = q/(UΔT) = 45.85×10⁶/(500×64) ≈ 1430 ft².` }
      ] },
    { id: "2011-12-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q6a", label: "(a)", marks: "10",
          topic: "drying", sub: "Bangladeshi industries using spray, flash, drum, tunnel dryers and kilns",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write the names of industries in Bangladesh which use the following types of dryers and kilns. Justify your answer.

(i) Spray dryer (ii) Rotary kiln (iii) Flash dryer (iv) Drum dryer (v) Tunnel dryer.`,
          solution: String.raw`| Dryer / kiln | Industries in Bangladesh (examples) | Justification |
|---|---|---|
| **(i) Spray dryer** | dairy plants making **powdered milk** (e.g. Milk Vita, PRAN dairy, other milk-powder and infant-food plants); instant coffee/tea and beverage powders; detergent powder plants; ceramic tile plants (spray-dried granulated clay body); pharmaceutical excipients | feed is a liquid or slurry; product must be a free-flowing, soluble powder; drying time of seconds protects heat-sensitive proteins and flavour |
| **(ii) Rotary kiln** | **cement clinker** production (Chhatak Cement, LafargeHolcim Bangladesh at Chhatak); lime burning (quicklime for sugar mills, water treatment); ceramic/refractory calcining | high-temperature (1000–1450°C) continuous calcination/burning of granular solids with long residence time and tumbling for uniform heating |
| **(iii) Flash (pneumatic) dryer** | **starch** and flour processing, sugar-mill by-products and **bagasse** drying, fish meal and feed mills, chemical powders (e.g. calcium carbonate, gypsum, PVC/resins), fertiliser intermediates | moist, finely divided, free-flowing solids that dry in seconds while conveyed by hot gas; surface moisture only; heat-sensitive or large throughput |
| **(iv) Drum dryer** | food plants making **instant flakes**: potato flakes, cereal-based **baby food** (rice/wheat flakes), fruit and vegetable powders; glue/starch adhesives; some pharmaceuticals and yeast | thick solutions, slurries and pastes dried to thin flakes on a steam-heated rotating drum by conduction; short contact time, high thermal efficiency, product scraped off as flakes |
| **(v) Tunnel dryer** | **ceramic** and sanitary-ware plants (drying of tiles and ware before firing; tunnel kilns for firing), **brick** industry (modern tunnel dryers and tunnel kilns), food dehydration (vegetables, fruits, fish), tea and tobacco processing | large quantities of material on trucks/trays move slowly through a long tunnel against or with hot air: gentle, controlled drying of shaped items that must not crack, batch-continuous |`,
          answer: String.raw`Spray: milk powder/infant food, instant beverage, detergent, ceramic body granules (liquid feed → soluble powder, seconds of drying). Rotary kiln: cement clinker (Chhatak, LafargeHolcim), lime (high-temperature calcining). Flash: starch, bagasse, fish meal, chemical powders (fine moist solids, seconds). Drum: potato/cereal flakes, baby food, adhesives (pastes to flakes by conduction). Tunnel: ceramics, bricks, food/tea (shaped items on trucks, gentle drying).` },
        { id: "2011-12-Q6b", label: "(b)", marks: "20",
          topic: "drying", sub: "Principle of drying with the constant-conditions rate curve",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Describe the "principle of drying" using drying rate curve for constant drying conditions.`,
          solution: String.raw`(Also asked as 2012-13 Q8c.)

**Drying** removes a relatively small amount of liquid from a solid by **simultaneous heat and mass transfer**: heat flows from the gas (or a hot surface) to the solid to vaporise the moisture, and the vapor diffuses away into the gas.

**Moisture terms** (dry basis X = kg water/kg dry solid): equilibrium moisture $X^*$ (cannot be removed by the given gas), free moisture $X - X^*$, bound moisture (vapor pressure below that of pure water) and unbound moisture, critical moisture $X_c$ (end of the constant-rate period).

**Constant drying conditions:** gas temperature, humidity, velocity and direction fixed (as in a tray dryer with large air flow). A batch test gives X vs t; the rate is $R = -\frac{m_s}{A}\frac{dX}{dt}$ (kg/m²·h).

![Batch drying curves: X vs time, and drying rate vs free moisture with the warm-up, constant-rate and falling-rate periods](fig/2012-13-Q8c-sol.svg)

1. **A–B, warm-up (initial adjustment):** the solid surface comes to the wet-bulb temperature; the rate rises (or falls) to the constant value.
2. **B–C, constant-rate period:** the surface is covered with unbound water, which evaporates like a free liquid surface at $T_w$. The rate is controlled by external heat and mass transfer, independent of the solid:
$$R_c = \frac{h(T - T_w)}{\lambda_w} = k_y M_B(\mathcal{H}_w - \mathcal{H})$$
   It increases with gas velocity ($h \propto G^{0.8}$ for parallel flow), temperature and dryness of the air.
3. **C, critical moisture content $X_c$:** the water can no longer reach the surface fast enough; dry patches appear.
4. **C–D, first falling-rate period:** unsaturated-surface drying; the wetted fraction of the surface shrinks; rate roughly linear in $X - X^*$.
5. **D–E, second falling-rate period:** internal movement controls: **liquid diffusion** (Fick's law; time ∝ thickness²; nonporous solids, soap, glue, clay) or **capillary flow** (porous granular solids, sand, pigments); the solid temperature rises toward the gas temperature; drying stops at $X^*$.

**Drying time:**
$$t_c = \frac{m_s(X_1 - X_c)}{AR_c},\qquad t_f = \frac{m_s(X_c - X^*)}{AR_c}\ln\frac{X_c - X^*}{X_2 - X^*}\ \text{(linear falling rate)}$$
or by graphical integration $t = \frac{m_s}{A}\int_{X_2}^{X_1}\frac{dX}{R}$ of the measured rate curve.`,
          answer: String.raw`Simultaneous heat and mass transfer. Rate curve under constant conditions: warm-up to T_wb; constant-rate period (surface wet, R_c = h(T−T_w)/λ_w, external control); critical moisture X_c; first falling rate (unsaturated surface); second falling rate (internal diffusion/capillary flow) down to X*. Times t_c = m_s(X₁−X_c)/(AR_c), t_f from integration.` },
        { id: "2011-12-Q6c", label: "(c)", marks: "16⅔",
          topic: "drying", sub: "Calculation steps for designing an adiabatic direct-contact dryer",
          type: "theory", syllabus: "in", repeats: ["2014-15-Q8c", "2012-13-Q8d"],
          text: String.raw`Write down the calculation steps in designing an adiabatic direct contact dryer.`,
          solution: String.raw`(Same as 2012-13 Q8d; a worked case is 2022-23 Q3a.) Method of MSH ch. 24:

1. **Specify the duty:** dry-solid rate $m_s$; inlet/outlet moisture $X_a$, $X_b$ (dry basis); solid specific heat, inlet temperature and maximum allowable temperature; inlet gas temperature $T_{hb}$ and humidity $\mathcal{H}_b$; allowable gas mass velocity G.
2. **Flow arrangement:** cocurrent for heat-sensitive solids, countercurrent for best thermal efficiency.
3. **Inlet wet-bulb temperature** $T_w$ from the humidity chart (adiabatic-cooling line).
4. **Outlet gas temperature** from an assumed number of heat-transfer units ($N_t$ = 1.5–2.5):
$$N_t = \ln\frac{T_{hb} - T_w}{T_{ha} - T_w}$$
   and the solid outlet temperature $T_{sb}$.
5. **Water evaporated:** $m_s(X_a - X_b)$.
6. **Heat load per unit dry solid:**
$$\frac{q_T}{m_s} = c_{ps}(T_{sb} - T_{sa}) + X_a c_{pL}(T_w - T_{sa}) + (X_a - X_b)\lambda_w + X_b c_{pL}(T_{sb} - T_w) + (X_a - X_b)c_{pv}(T_{ha} - T_w)$$
7. **Gas rate:** $m_g(1+\mathcal{H}_b) = \frac{q_T}{c_s(T_{hb} - T_{ha})}$, $c_s = 0.24 + 0.45\mathcal{H}$ Btu/lb·°F.
8. **Outlet humidity:** $\mathcal{H}_a = \mathcal{H}_b + m_s(X_a - X_b)/m_g$; check it is well below saturation at $T_{ha}$.
9. **Cross-section and diameter** from G: $A = m_g(1+\mathcal{H})/G$, $D = \sqrt{4A/\pi}$.
10. **Mean temperature difference** $\overline{\Delta T}$ (log mean of $T_{hb} - T_w$ and $T_{ha} - T_w$) and the volumetric coefficient ($U_a = 0.125G^{0.67}/D$ Btu/ft³·h·°F for rotary dryers).
11. **Length:** $L = \frac{q_T}{(\pi D^2/4)U_a\overline{\Delta T}}$; check L/D (4–10), $N_t$, residence time (slope, speed, flights, hold-up), thermal efficiency $(T_{hb} - T_{ha})/(T_{hb} - T_0)$, and dust recovery on the exhaust.`,
          answer: String.raw`Duty → cocurrent/countercurrent → T_w from chart → T_ha from N_t (1.5–2.5), T_sb → water evaporated → q_T/m_s (sensible + latent + superheat) → m_g = q_T/[c_s(T_hb − T_ha)] → H_a → D from G → ΔT_lm and U_a = 0.125G^0.67/D → L = q_T/(AU_aΔT) → checks (L/D, retention, efficiency).` }
      ] },
    { id: "2011-12-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q7a", label: "(a)", marks: "12",
          topic: "crystallization", sub: "Factors to consider in designing a crystallization process",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q2c", "2015-16-Q1b"],
          text: String.raw`What are the factors to be considered in designing crystallization process?`,
          solution: String.raw`(Compare 2022-23 Q2c.)

1. **Solubility and phase diagram:** the slope of the solubility curve decides how supersaturation is made — cooling (steep curve, KNO₃), evaporation (flat curve, NaCl), vacuum flash cooling (intermediate), salting-out or reaction; hydrates and transition points (Na₂SO₄·10H₂O below 32.4°C); eutectics.
2. **Yield:** material (and enthalpy for vacuum units) balances from the feed concentration and the final solubility; mother-liquor recycle and purge of impurities.
3. **Supersaturation level** and **metastable zone**: operate inside the metastable zone to promote growth and avoid excessive nucleation.
4. **Kinetics:** nucleation rate (primary, secondary), growth rate G (ΔL law), their dependence on supersaturation, agitation, impurities; they fix the crystal size distribution (MSMPR: dominant size $L_D = 3G\bar t$).
5. **Product requirements:** size distribution, mean size, shape (habit), purity, caking tendency, bulk density, filtration and washing behaviour.
6. **Heat effects:** heat of crystallization, sensible heat to remove, cooling surface or evaporation load, condenser and vacuum system, energy economy (multiple effect, vapor recompression).
7. **Equipment and hydrodynamics:** batch vs continuous; crystallizer type (tank, Swenson–Walker, forced circulation, DTB, Oslo, vacuum); residence time, magma density, circulation and agitation intensity (suspension vs attrition and secondary nucleation), classification and fines destruction, seeding.
8. **Scale/encrustation** on cooling surfaces and walls (limit ΔT), foaming, corrosion, materials of construction.
9. **Downstream processing:** thickening, centrifuging or filtering, washing, drying, storage.
10. **Control, safety and cost:** temperature, level and density control, capital and operating cost, environmental (effluent mother liquor).`,
          answer: String.raw`Solubility curve and hydrates (cooling/evaporative/vacuum choice), yield, supersaturation and metastable zone, nucleation and growth kinetics, required CSD/habit/purity, heat of crystallization and heat removal, crystallizer type, residence time, magma density, agitation/classification, encrustation, corrosion, downstream separation, control and cost.` },
        { id: "2011-12-Q7b", label: "(b)", marks: "12",
          topic: "crystallization", sub: "Types of nucleation in crystallization",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write a short account on the different types of nucleation in a crystallization process.`,
          solution: String.raw`**Nucleation** is the birth of new crystals (nuclei) in a supersaturated solution; together with growth it determines the crystal size distribution.

**1. Primary nucleation** (no crystals of the solute present)

- **Homogeneous nucleation:** clusters of solute molecules form spontaneously in a clear solution; a cluster survives only if it exceeds a critical size $r_c$, at which the free-energy barrier is overcome (surface energy vs bulk free energy, Gibbs–Kelvin: $\ln(c/c_s) = 2\sigma v_M/(\nu RT r)$). It requires high supersaturation, and its rate rises extremely steeply with supersaturation:
$$B^0 = C\exp\left[-\frac{16\pi\sigma^3 v_M^2}{3k^3T^3(\ln s)^2}\right]$$
  It defines the labile limit of the metastable zone (Miers' supersaturation curve). Rare in industrial practice except in precipitation.
- **Heterogeneous nucleation:** nuclei form on foreign surfaces — dust, impurity particles, vessel walls, agitator — which lower the energy barrier; occurs at lower supersaturation than homogeneous nucleation. Most "primary" nucleation in practice.

**2. Secondary nucleation** (in the presence of crystals of the solute) — the dominant mechanism in industrial crystallizers operating in the metastable zone:

- **Contact (collision) nucleation:** fragments or loosely bound clusters are removed when crystals collide with the impeller, the walls or each other (micro-attrition); rate ∝ agitator speed (tip speed), magma density and supersaturation: $B^0 = k_N n^j M_T^k s^b$.
- **Shear (fluid-shear) nucleation:** fluid flowing past growing crystal surfaces sweeps away clusters/dendrites.
- **Initial breeding (dust breeding):** fine crystalline dust on seed crystals is washed off when seeds are added.
- **Needle/polycrystalline breeding:** dendrites or needles grown at high supersaturation break off.
- **Attrition/fracture:** macroscopic breakage of crystals (gives fragments, not true nuclei).

**Control:** keep supersaturation low (in the metastable zone), seed the solution, moderate agitator tip speed and use soft impellers (to limit contact nucleation), remove fines (fines destruction) and classify the product — this gives larger, uniform crystals.`,
          answer: String.raw`Primary: homogeneous (spontaneous clusters above critical size, high supersaturation, very steep rate) and heterogeneous (on foreign particles/walls, lower supersaturation). Secondary (crystals present, dominant industrially): contact/collision with impeller and walls, fluid shear, initial (dust) breeding from seeds, needle breeding, attrition. Controlled by low supersaturation, seeding, mild agitation, fines removal.` },
        { id: "2011-12-Q7c", label: "(c)", marks: "10",
          topic: "mixing", sub: "Rough graph of power number vs Reynolds number: turbines and propellers",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Show with the help of a rough graph how power number is related to Reynolds Number for mixer with turbines and propellers.`,
          solution: String.raw`By dimensional analysis (2012-13 Q7c) $N_P = P g_c/(\rho n^3 D_a^5) = \psi(N_{Re}, N_{Fr}, \text{shape factors})$ with $N_{Re} = D_a^2 n\rho/\mu$; in baffled tanks there is no vortex, so $N_P = \psi(N_{Re})$ only.

![Rough power-number curves (log–log): six-blade disk turbine with baffles, turbine without baffles, three-blade propeller; laminar slope −1, turbulent plateau](fig/2011-12-Q7c-sol.svg)

**Features of the graph** (MSH Figs. 9.13–9.14):

1. **Laminar region** ($N_{Re}$ < ≈ 10): all curves are straight lines of slope −1, $N_P = K_L/N_{Re}$, i.e. $P = K_L n^2 D_a^3\mu$ — power ∝ viscosity, independent of density and of baffles. $K_L$ ≈ 65–70 for a six-blade disk turbine, ≈ 40 for a three-blade propeller (pitch = diameter).
2. **Transition region** (10 < $N_{Re}$ < 10⁴): $N_P$ falls more slowly, passes a shallow minimum for turbines and rises again to the turbulent value in baffled tanks.
3. **Turbulent region** ($N_{Re}$ > 10⁴): with baffles $N_P$ is constant, $N_P = K_T$, $P = K_T n^3 D_a^5\rho$ — independent of viscosity. $K_T$ ≈ 5–6 for a six-blade disk (Rushton) turbine, ≈ 1.3 for a pitched-blade turbine, ≈ 0.3–0.35 for a marine propeller.
4. **Unbaffled tanks:** above $N_{Re}$ ≈ 300 a vortex forms, the Froude number matters, and $N_P$ keeps falling (dashed curve); much less power is drawn and mixing is poor.
5. **Propeller vs turbine:** at the same $N_{Re}$ the propeller's power number is about 1/15–1/20 of the turbine's: propellers are axial-flow, low-power, high-flow impellers for low-viscosity liquids; turbines are radial-flow, high-shear, high-power impellers.`,
          answer: String.raw`Log–log: laminar (N_Re < 10) slope −1, N_P = K_L/N_Re (K_L ≈ 70 turbine, ≈ 40 propeller); transition; turbulent (N_Re > 10⁴) with baffles N_P = K_T constant (≈ 5–6 Rushton turbine, ≈ 0.35 propeller); unbaffled tanks fall further beyond N_Re ≈ 300 (vortex, Froude effect).` },
        { id: "2011-12-Q7d", label: "(d)", marks: "12⅔",
          topic: "mixing", sub: "Recommended agitated-tank arrangement with sketch",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`What kind of mixing arrangement will you recommend when mixing is taking place in a tank? Draw sketch.`,
          solution: String.raw`**Recommendation: the standard baffled agitated vessel** (MSH ch. 9): a vertical cylindrical tank with a dished (rounded) bottom, a centrally mounted impeller on a vertical shaft driven from above, and **four vertical wall baffles**.

![Standard agitated vessel: dished-bottom tank, four baffles of width D_t/12, six-blade disk turbine at D_a = D_t/3 placed one impeller diameter above the bottom, liquid depth = tank diameter; radial flow pattern with upper and lower circulation loops](fig/2011-12-Q7d-sketch.svg)

**Standard proportions**

| Ratio | Value |
|---|---|
| Impeller diameter $D_a/D_t$ | 1/3 (0.25–0.5) |
| Liquid depth $H/D_t$ | 1 |
| Baffle width $J/D_t$ | 1/12 (or 1/10), four baffles, often set off the wall |
| Impeller height above bottom $E/D_a$ (or $E/D_t$) | 1 (1/3) |
| Blade width $W/D_a$ | 1/5 (disk turbine) |
| Blade length $L/D_a$ | 1/4 |

**Why this arrangement**

- **Baffles** stop the liquid swirling as a body (vortex formation, air entrainment, poor top-to-bottom circulation); they convert the tangential flow into radial and axial circulation, so the power drawn and the mixing are much better (and the power number becomes a function of $N_{Re}$ only).
- **Rounded bottom** eliminates dead corners where solids settle or liquid stagnates.
- **Impeller choice:** six-blade disk (Rushton) or flat-blade turbine (radial flow: two circulation loops above and below the impeller, high shear) for gas dispersion, liquid–liquid dispersion and general mixing; pitched-blade turbine or **marine propeller** (axial flow, top-to-bottom circulation) for blending low-viscosity liquids and suspending solids; for very viscous liquids anchors, helical ribbons or screws in close-clearance arrangements.
- For tall tanks (H > 1.25 $D_t$) use two or more impellers on the same shaft; small tanks can avoid baffles with an off-centre, angled (side-entering or inclined) propeller; draft tubes improve axial circulation for solids suspension or crystallizers.`,
          answer: String.raw`Standard baffled vessel: dished-bottom cylindrical tank, liquid depth = D_t, four baffles J = D_t/12, central six-blade disk turbine (radial flow) or pitched blade/propeller (axial flow) with D_a = D_t/3 placed one D_a above the bottom; baffles prevent vortexing and give top-to-bottom circulation; multiple impellers for tall tanks, anchors/ribbons for viscous liquids.` }
      ] },
    { id: "2011-12-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2011-12-Q8a", label: "(a)", marks: "16⅔",
          topic: "ejectors", sub: "Attractive features of ejectors; motive-steam pickup pressure",
          type: "theory", syllabus: "in", repeats: ["2012-13-Q6e"],
          text: String.raw`What are the features that make ejectors attractive for industrial vacuum applications? What is pickup pressure in a ejector system?`,
          solution: String.raw`**Features (Ludwig ch. 6; also 2012-13 Q6e)**

1. **No moving parts:** only nozzle, suction chamber and diffuser; no lubrication, seals or wear except slow erosion — very reliable, long life, minimum maintenance.
2. **Low first cost**, simple installation, compact and light; can be mounted in any position, directly on the equipment.
3. **Large volumes at very low absolute pressure:** multistage units (with inter- and after-condensers) reach 0.05 mmHg abs or lower; they handle the huge specific volumes of vapor at high vacuum economically.
4. **Handle wet, dirty, corrosive and condensable vapors** and liquid slugs without damage; process vapors condense in the intercondensers (reduces the load on following stages).
5. **Any material of construction:** carbon/stainless steel, Hastelloy, titanium, graphite, porcelain, glass, PTFE-lined plastics for corrosive duties.
6. **Use available motive fluid** (plant steam at low or medium pressure, air, process gas, water).
7. **Easy operation:** quick start-up, hogging ejectors evacuate systems rapidly; stable operation over a range of loads; easily staged to the required vacuum.
8. **Safe** for flammable or explosive vapors (no sparks, no hot moving surfaces).

Disadvantages: low efficiency (high motive-steam and cooling-water use), noise, fixed design point (sensitive to steam pressure and backpressure), contaminated condensate.

**Pickup pressure.** A fixed-capacity steam ejector operates stably only above a minimum motive-steam pressure. If the steam pressure is lowered, the ejector "breaks" (the diffuser shock moves upstream, suction pressure rises suddenly and operation becomes unstable) at the **break pressure**. When the steam pressure is then raised again from the unstable region, the ejector does not recover at the same pressure: it returns to stable operation only at a somewhat higher pressure called the **motive-steam pickup pressure** (Ludwig Fig. 6-13). The difference between pickup and break pressures is a hysteresis effect. Hence the design steam pressure is specified as the minimum expected pressure at the nozzle minus about 10 psi, comfortably above the pickup pressure, so that normal fluctuations of the steam header do not make the ejector unstable.`,
          answer: String.raw`No moving parts (reliable, low maintenance), low cost, compact, any position; handles large volumes at very low pressure and wet/corrosive/condensable vapors; any material; uses plant steam; quick start-up, easy staging; spark-free. Pickup pressure: the motive-steam pressure at which an unstable ("broken") ejector recovers stable operation as the steam pressure is raised — higher than the break pressure; design steam pressure is kept above it.` },
        { id: "2011-12-Q8b", label: "(b)", marks: "3",
          topic: "pumps", sub: "Meaning of centrifugal pump size 1½ × 3 − 13",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is meant by centrifugal pump size $1\frac{1}{2}\times3-13$.`,
          solution: String.raw`In the standard (ANSI/US) designation of a centrifugal pump size, **discharge nozzle × suction nozzle − nominal (maximum) impeller diameter**, all in inches:

- **1½** = discharge nozzle size, 1½ in;
- **3** = suction nozzle size, 3 in (the suction is larger, to keep the inlet velocity low and give enough NPSH margin);
- **13** = maximum impeller diameter that the casing will accept, ≈ 13 in.

So a "1½ × 3 − 13" pump has a 1½-in discharge, a 3-in suction and a casing for a 13-in impeller (the actual impeller can be trimmed smaller to meet the duty). It is a high-head, low-flow size (≈ 50–150 gal/min, a few hundred ft of head at 3500 r/min).`,
          answer: String.raw`Discharge nozzle 1½ in × suction nozzle 3 in − maximum (nominal) impeller diameter 13 in.` },
        { id: "2011-12-Q8c", label: "(c)", marks: "9×2=18",
          topic: "pumps", sub: "Short notes: NPSH and pump characteristic curves",
          type: "sketch", syllabus: "in", repeats: ["2017-18-Q3c"],
          text: String.raw`Write a short notes on followings: (i) NPSH (ii) Characteristics Curves.`,
          solution: String.raw`**(i) Net positive suction head (NPSH)**

The excess of the total head at the pump suction over the vapor-pressure head of the liquid, at the pumping temperature:

$$\mathrm{NPSH_A} = \frac{P_s}{\rho g} + \frac{V_s^2}{2g} - \frac{P_v}{\rho g} = \frac{P_a - P_v}{\rho g} \pm Z_s - h_{fs}$$

($P_a$ = pressure on the liquid surface in the suction vessel, $Z_s$ = static height of the liquid above (+) or below (−) the pump centreline, $h_{fs}$ = friction loss in the suction line).

- **NPSH available (NPSHA)** is a property of the system (calculated by the process engineer).
- **NPSH required (NPSHR)** is a property of the pump (from the vendor's test, the NPSH at which the head drops 3% because of cavitation); it rises with flow (≈ ∝ $Q^{4/3}$) and speed.
- Requirement: **NPSHA > NPSHR** with a margin (≈ 0.6–1.5 m or 10–35%). Otherwise the pressure at the impeller eye falls below $P_v$, vapor bubbles form and collapse on the vanes (**cavitation**): noise, vibration, loss of head and capacity, pitting and erosion of the impeller.
- To raise NPSHA: elevate the suction vessel, raise its pressure, cool the liquid, enlarge and shorten the suction line, use a booster pump, a vertical can pump or an inducer; to lower NPSHR: lower speed, double-suction impeller, larger eye.

**(ii) Characteristic curves**

![Centrifugal pump characteristic curves at constant speed: head, efficiency, brake power and NPSH required vs capacity, with the system curve and operating point](fig/2011-12-Q8c-sol.svg)

Plots, at constant speed (for a given impeller diameter), of **head H, brake horsepower, efficiency η and NPSHR vs capacity Q**, determined by test:

- **H–Q curve:** maximum (shut-off) head at zero flow, falling as Q increases (ideal: straight line for backward-curved vanes; actual curve lower because of slip, friction and shock losses). A "stable" curve rises continuously toward shut-off.
- **Efficiency:** zero at zero flow, maximum at the **best efficiency point (BEP)** (the rated point), falling at high flow.
- **Brake power** $P = \rho g Q H/\eta$: for radial pumps rises with Q (choose a motor for the end-of-curve power); for axial-flow pumps it is highest at shut-off.
- **NPSHR** rises with flow.
- The **operating point** is the intersection with the **system curve** $H_{sys} = \Delta Z + \Delta P/\rho g + kQ^2$; throttling, speed change or impeller trimming move it. Affinity laws: $Q \propto ND$, $H \propto N^2D^2$, $P \propto N^3D^3$.
- The shape depends on specific speed: radial (flat head curve, power rising), mixed and axial flow (steep head curve, power highest at shut-off), as in Foust Fig. 21.19.`,
          answer: String.raw`(i) NPSH_A = (P_a − P_v)/ρg ± Z_s − h_fs must exceed the pump's NPSH_R (rises with Q) by a margin, else cavitation (noise, head loss, impeller pitting); raise NPSH_A by elevating/pressurising/cooling the suction source and reducing suction losses. (ii) H, η, BHP and NPSH_R vs Q at constant speed: head falls from shut-off, η peaks at BEP, power rises (radial); operating point at the system curve; affinity laws.` },
        { id: "2011-12-Q8d", label: "(d)", marks: "9",
          topic: "pumps", sub: "Pump type for 2500 gal/min at 50 ft head via specific speed",
          type: "numerical", syllabus: "in", repeats: ["2017-18-Q3b", "2014-15-Q7b", "2012-13-Q7d"],
          text: String.raw`It is necessary to pump 2500 gal/min against a head of 50 ft. What type of pump might be used?

Figure for Q8 (attached to the paper, Foust Fig. 21.19): characteristic curves and specific speeds for various impellers (Worthington Pumps): radial-flow impellers (standard centrifugal pump) operate at the lowest specific speeds (up to 4200), mixed-flow impellers at higher specific speeds (4200 to 9000), axial-flow impellers at the highest specific speeds (above 9000).`,
          solution: String.raw`Same as 2012-13 Q7d.

**Given:** Q = 2500 gal/min, H = 50 ft. **Find:** pump type.

**Assumptions:** single-stage, single-suction, induction-motor speeds 1150, 1750, 3500 r/min; $N_s = n\sqrt{Q}/H^{3/4}$ (US units, as on Fig. 21.19).

1. $\sqrt{2500} = 50$, $50^{3/4} = 18.80$, so $N_s = 2.66\,n$:

| n, r/min | $N_s$ | Field |
|---|---|---|
| 1150 | 3060 | radial (upper end) |
| 1750 | 4650 | mixed flow (4200–9000) |
| 3500 | 9310 | axial flow (> 9000) |

2. At the common 1750 r/min the specific speed (≈ 4650) lies in the **mixed-flow** range, where the efficiency is high for this large-flow, low-head duty.

**Result:** a single-stage **mixed-flow centrifugal pump** at ≈ 1750 r/min (or a slower 1150 r/min radial double-suction pump); check NPSH.`,
          answer: String.raw`N_s = n√Q/H^0.75 = n(50)/18.8 ≈ 4650 at 1750 rpm (3060 at 1150, 9310 at 3500) → mixed-flow (4200–9000) centrifugal pump.` }
      ] }
  ]
});
