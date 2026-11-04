QB.paper({ year: "Practice", set: "Solid handling machinery", date: "", marks: 0, practice: true,
  rules: String.raw`Mechanical conveyors for bulk solids: MSH notes on storage and flow out of bins, and exam-style questions on screw-conveyor sizing, belt-conveyor capacity and inclination, the Lafarge-Surma overland conveyor, bucket-elevator discharge and capacity, troughing, air-supported belts, chain conveyors and conveyor selection. (The solid-handling slides contain no worked examples.)`,
  questions: [
    { id: "practice-solids-handling-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solids-handling-P1", label: "", marks: "", topic: "solids-handling",
        sub: "Storage of solids: bins and silos, lateral pressure ratio, flow out of bins", type: "theory", syllabus: "partial", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Ch. 28 "Properties, handling and mixing of particulate solids": Eqs. (28.15)–(28.17), "Storage of solids", "Flow out of bins", "Conveyors" (pp. 938–941)`,
        text: String.raw`(a) Distinguish bulk storage from bin storage and define silo, bin and hopper. (b) For a granular solid with an angle of internal friction of 30°, find the ratio $K' = p_L/p_V$ of lateral to vertical pressure. Why does the pressure on the floor of a tall silo stop increasing once the solids height exceeds about three diameters? (c) Explain mass flow, funnel (core) flow and arching in the discharge of a bin, and how the discharge rate depends on the opening diameter. (d) Which conveyors does MSH list for moving granular solids?`,
        solution: String.raw`### (a) Storage
- **Bulk storage:** coarse solids (gravel, coal) in outdoor piles; cheapest for hundreds or thousands of tons; reclaimed by dragline or shovel onto a conveyor. Problems: dusting and leaching (cover the pile, impervious basin).
- **Bin storage:** valuable or soluble solids in bins, hoppers or silos of concrete or metal, loaded from the top by an elevator and discharged from the bottom. A **silo** is tall and relatively small in diameter, a **bin** is not so tall and fairly wide, a **hopper** is a small vessel with a sloping bottom for temporary storage before feeding a process.

### (b) Pressure ratio
$$K' = \frac{1 - \sin\alpha_m}{1 + \sin\alpha_m} = \frac{1 - 0.5}{1 + 0.5} = 0.333$$
(Free-flowing granular solids: K' ≈ 0.35–0.6, $\alpha_m$ = 15–30°; K' → 0 for cohesive solids.)
The lateral pressure produces wall friction that carries part of the weight of each layer. In a tall column this friction grows with height until it carries all additional solid: above about three diameters the extra mass goes to the walls and foundation, not to the floor (Janssen behaviour). Unlike a liquid, higher pressure packs the grains and can make flow harder.

### (c) Flow out of bins
- **Mass flow:** in steep, smooth-walled hoppers the whole contents move down together, first in, first out; no stagnant zones, uniform residence time.
- **Funnel (core) flow:** in flat-bottomed or shallow-cone bins only a central core above the opening moves; the material slides into it from the top surface, forming a cone; solids near the walls stay stagnant (last in, first out), which can cause caking and segregation.
- **Arching (bridging):** cohesive or interlocking solids form a stable arch over the opening and flow stops; also "ratholing" with cohesive solids. Cures: larger outlet, steeper smoother hopper, vibrators, air pads, mass-flow design.
- **Rate:** for free-flowing solids through a circular opening of diameter $D_o$ the mass flow rate is independent of the solid height and varies as $D_o^n$, n ≈ 2.8–3.1 (about 3), so doubling the opening multiplies the flow by about 8.

### (d) Conveyors
Pneumatic conveyors (MSH Ch. 7); belt conveyors, screw conveyors, flight conveyors, closed-belt conveyors with zipperlike fasteners, various drag and flight conveyors, and bucket elevators; vibrating conveyors. All except pneumatic conveyors have a return leg that carries no solids.`,
        answer: String.raw`Bulk piles vs bins/silos/hoppers. K' = (1 − sin30°)/(1 + sin30°) = 1/3; wall friction carries the weight above ≈ 3 diameters. Mass flow vs funnel flow; arching stops flow; rate ∝ D_o^≈3, independent of head. Conveyors: pneumatic, belt, screw, flight/drag, bucket elevators, vibrating.` } ] },

    { id: "practice-solids-handling-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solids-handling-P2", label: "", marks: "12", topic: "solids-handling",
        sub: "Sizing a screw conveyor for 20 t/h of free-flowing granules", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Solid handling slides "Screw conveyor/elevator" (pitch/diameter rules, limits); capacity formula as used in 2016-17 Q8(c); own numbers`,
        text: String.raw`A horizontal screw conveyor must move 20 t/h of a free-flowing granular solid of bulk density 800 kg/m³ over 30 m at 60°C. Trough loading is 45%.
(a) Using $C = \frac{\pi}{4}(D_s^2 - D_p^2)\,p\,K\,N$, with standard pitch p = $D_s$, find the speed needed for screws of 0.25 m (shaft 0.06 m), 0.30 m (shaft 0.075 m) and 0.35 m (shaft 0.075 m) diameter, and choose one (keep N below about 60 r/min).
(b) What pitch would the slide rules recommend for this free-flowing material horizontally, and what speed would the chosen screw then need?
(c) Check the slide limits on temperature, distance and particle size, and state the casing you would use if part of the route rose at 35°.`,
        solution: String.raw`**Given:** $\dot m$ = 20 t/h; $\rho_b$ = 800 kg/m³; K = 0.45; L = 30 m; T = 60°C.

**Find:** N for each screw; recommended pitch; checks.

**Assumptions:** volumetric efficiency already in K; continuous single flight.

1. **Volumetric capacity needed:** $Q = 20{,}000/800 = 25$ m³/h.

2. **(a) Volume per revolution** $V_r = \frac{\pi}{4}(D_s^2 - D_p^2)pK$ and speed $N = Q/(60V_r)$:

| $D_s$, m | $D_p$, m | p, m | $V_r$, m³/rev | N, r/min |
|---|---|---|---|---|
| 0.25 | 0.06 | 0.25 | 0.00520 | 80 |
| 0.30 | 0.075 | 0.30 | 0.00895 | 47 |
| 0.35 | 0.075 | 0.35 | 0.01446 | 29 |

   **Choose the 0.30 m screw at about 47 r/min** (≈ 50 r/min; capacity at 60 r/min would be 32 m³/h = 26 t/h, a 29% margin). The 0.25 m screw runs too fast (wear, power); the 0.35 m screw is heavier and costlier than needed.

3. **(b) Pitch:** slides: for very easy-flowing materials p/D = 1.5 for horizontal conveying (0.67–0.5 for vertical). With p = 0.45 m the same screw needs
$$N = \frac{25}{60\left[\frac{\pi}{4}(0.30^2 - 0.075^2)(0.45)(0.45)\right]} = 31\ \mathrm{r/min}$$

4. **(c) Checks:** feed temperature 60°C < 120°C ✓; distance 30 m < 100 m ✓; the particles must be smaller than the gap between the flight tip and the casing. For an inclined section above 30° use a **circular (tubular) casing** so that the solid cannot fall back over the flight; for a vertical lift use a short pitch (0.5–0.67 D) and higher speed.

**Result:** 0.30 m screw (75 mm shaft): 47 r/min at p = D, or 31 r/min with the recommended p = 1.5D; all slide limits satisfied; tubular casing on any section steeper than 30°.`,
        answer: String.raw`Q = 25 m³/h; N = 80, 47, 29 r/min for 0.25, 0.30, 0.35 m screws → use 0.30 m at ≈ 47 r/min; with p = 1.5D (free-flowing, horizontal) N ≈ 31 r/min; T < 120°C, L < 100 m OK; circular casing above 30°.` } ] },

    { id: "practice-solids-handling-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solids-handling-P3", label: "", marks: "12", topic: "solids-handling",
        sub: "Troughed belt conveyor for loose cement: capacity, incline, length, lift power", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Solid handling slides "Suitability of Troughed Belt Conveyor" (maximum angle, rise per 100 m) and "Limitations"; own numbers`,
        text: String.raw`Loose cement (bulk density 1400 kg/m³) is carried on a 0.8 m wide, 20° troughed belt at 2.0 m/s. Take the load cross-section as $A = k(0.9B - 0.05)^2$ with k = 0.1 for this troughing.
(a) Find the conveying capacity in t/h.
(b) From the slide table the maximum inclination for loose cement is 22° (40.4 m rise per 100 m). The cement must be raised 12 m. Find the minimum horizontal run and belt length on the incline.
(c) Estimate the power needed just to lift the material.
(d) What width of belt would carry 250 t/h at 2.5 m/s?`,
        solution: String.raw`**Given:** B = 0.8 m; v = 2.0 m/s; $\rho_b$ = 1400 kg/m³; k = 0.1; lift H = 12 m.

**Find:** capacity, run lengths, lift power, belt width for 250 t/h.

1. **(a) Capacity:**
$$A = 0.1(0.9 \times 0.8 - 0.05)^2 = 0.1(0.67)^2 = 0.0449\ \mathrm{m^2}$$
$$C = 3600Av\rho_b = 3600(0.0449)(2.0)(1400) = 4.52\times10^5\ \mathrm{kg/h} = 452\ \mathrm{t/h}$$

2. **(b) Inclined run at 22°:** "rise per 100 m" is $100\tan\theta$ = 40.4 m (the table value). For H = 12 m:
$$L_h = \frac{12}{\tan22^\circ} = 29.7\ \mathrm{m}, \qquad L_s = \frac{12}{\sin22^\circ} = 32.0\ \mathrm{m}$$
   A steeper belt would let the cement roll back; with cleats or other non-slip devices up to 45° is possible.

3. **(c) Lift power:**
$$P = \dot mgH = \frac{452{,}000}{3600}(9.81)(12) = 14.8\ \mathrm{kW}$$
   The motor must also cover belt and idler friction (empty-belt and horizontal load terms) and drive efficiency, typically doubling this for a short conveyor.

4. **(d) Width for 250 t/h at 2.5 m/s:**
$$A = \frac{250{,}000}{3600(2.5)(1400)} = 0.0198\ \mathrm{m^2}, \qquad B = \frac{\sqrt{0.0198/0.1} + 0.05}{0.9} = 0.55\ \mathrm{m}$$
   → use the next standard width, **0.65 m** (or 0.6 m).

**Result:** 452 t/h; horizontal run ≥ 29.7 m (belt 32.0 m on the slope); ≈ 15 kW to lift; 0.65 m belt for 250 t/h at 2.5 m/s. Cement at < 80°C is well within the 120°C belt limit.`,
        answer: String.raw`A = 0.1(0.67)² = 0.0449 m² → C = 3600Avρ = 452 t/h; at 22°: L_h = 12/tan22° = 29.7 m, L_s = 32.0 m; lift power ≈ 14.8 kW; 250 t/h at 2.5 m/s needs A = 0.0198 m² → B = 0.55 m → 0.65 m belt.` } ] },

    { id: "practice-solids-handling-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solids-handling-P4", label: "", marks: "10", topic: "solids-handling",
        sub: "Lafarge-Surma 16.5 km overland conveyor: rate, belt section and why a belt", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Solid handling slides "Conveyor belt of Lafarge-Surma Cement Industry" (Meghalaya–Chhatak, 16.5 km, 2.35 million t/yr) and "Applications"; own assumptions`,
        text: String.raw`The Lafarge-Surma conveyor carries 2.35 million tonnes per year of limestone and shale 16.5 km from Meghalaya to Chhatak. (a) Find the average conveying rate in t/h if it runs 7000 h/yr, and the transport work in tonne-km per year. (b) At a belt speed of 4 m/s and a bulk density of 1.4 t/m³, what load cross-section and belt width are needed ($A = 0.1(0.9B - 0.05)^2$)? (c) Give four reasons why a belt conveyor was chosen instead of trucks or another conveyor type for this duty.`,
        solution: String.raw`**Given:** 2.35×10⁶ t/yr; L = 16.5 km; 7000 h/yr; v = 4 m/s; $\rho_b$ = 1.4 t/m³.

1. **(a) Rate:** $\dot m = 2.35\times10^6/7000 = 336$ t/h (268 t/h if it ran all 8760 h). Transport work = 2.35×10⁶ × 16.5 = 3.88×10⁷ t·km/yr.

2. **(b) Belt section:**
$$A = \frac{336}{3600(4)(1.4)} = 0.0167\ \mathrm{m^2}, \qquad B = \frac{\sqrt{0.0167/0.1} + 0.05}{0.9} = 0.51\ \mathrm{m}$$
   A 0.6–0.65 m belt would do on average; in practice a wider belt (and surge capacity for peak rates, lumps and wet-season shutdowns) is used, since lump size is limited by belt width.

3. **(c) Why a belt conveyor:**
   - Handles a **higher capacity at a much lower cost per tonne-km** than any other conveyor or road transport; long distances are covered by one belt or a series of belts.
   - **Continuous, automatic** operation with low labour and no traffic, fuel or road wear across difficult terrain and an international border; can follow horizontal, inclined and declining sections.
   - Handles **abrasive, wet, dirty** run-of-mine rock; solids are below 80°C, so a single long belt is permitted (slide: T < 80°C and distance > 300 m).
   - Screw conveyors are limited to about 100 m, bucket elevators to vertical lifts and chain conveyors to short, slow duties; pneumatic conveying of lump limestone over 16.5 km is impossible economically.
   - Extra functions (weighing, sampling, blending) can be built in.

**Result:** ≈ 336 t/h; 3.9×10⁷ t·km/yr; A ≈ 0.017 m², minimum width ≈ 0.51 m (use ≥ 0.65 m); chosen for capacity, cost per t·km, distance and continuous operation.`,
        answer: String.raw`336 t/h (7000 h/yr), 3.88×10⁷ t·km/yr; A = 336/(3600 × 4 × 1.4) = 0.0167 m² → B ≈ 0.51 m (use ≥ 0.65 m); belt chosen for high capacity, lowest cost per t·km, long distance, continuous operation on any route.` } ] },

    { id: "practice-solids-handling-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solids-handling-P5", label: "", marks: "12", topic: "solids-handling",
        sub: "Bucket elevator: head pulley for centrifugal discharge, capacity, lift power", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Solid handling slides "Bucket Elevator" (centrifugal discharge ≈ 1.5 m/s, gravity discharge ≈ 0.5 m/s); own numbers`,
        text: String.raw`A belt-and-bucket elevator lifts granular fertilizer (bulk density 1600 kg/m³) 25 m. Buckets hold 4 L, are 75% filled and spaced 0.40 m apart.
(a) For centrifugal discharge at a belt speed of 1.5 m/s, find the head-pulley diameter at which the centrifugal force on the bucket contents just balances gravity at the top, and the pulley speed.
(b) Find the capacity in t/h and the power to lift the solids (drive efficiency 70%).
(c) What would the capacity be with gravity (positive/continuous) discharge at 0.5 m/s with the same buckets? Give two reasons why gravity discharge might still be chosen.`,
        solution: String.raw`**Given:** H = 25 m; $V_b$ = 4×10⁻³ m³, φ = 0.75, s = 0.40 m; $\rho_b$ = 1600 kg/m³.

1. **(a) Pulley for centrifugal discharge:** at the top of the pulley the material leaves the bucket when $v^2/r \ge g$:
$$r = \frac{v^2}{g} = \frac{1.5^2}{9.81} = 0.229\ \mathrm{m}, \qquad D = 0.46\ \mathrm{m}, \qquad N = \frac{v}{\pi D} = \frac{1.5}{\pi(0.459)} = 1.04\ \mathrm{r/s} = 62\ \mathrm{r/min}$$
   A smaller pulley (or higher speed) throws the material earlier and farther, so the discharge chute is set to catch the trajectory.

2. **(b) Capacity** (bucket contents × buckets per second):
$$\dot m = \frac{V_b\varphi\rho_bv}{s} = \frac{4\times10^{-3}(0.75)(1600)(1.5)}{0.40} = 18.0\ \mathrm{kg/s} = 64.8\ \mathrm{t/h}$$
   Lift power $\dot mgH = 18.0(9.81)(25) = 4.41$ kW; shaft power ≈ 4.41/0.70 = 6.3 kW (plus digging/boot losses).

3. **(c) Gravity discharge at 0.5 m/s:** $\dot m = 4\times10^{-3}(0.75)(1600)(0.5)/0.40 = 6.0$ kg/s = **21.6 t/h**, one third of the centrifugal unit (continuous closely spaced buckets would recover part of this).
   Reasons to accept it: much **less wear and tear** and breakage of friable granules at low speed; suits **abrasive, lumpy or fragile** materials and sticky ones that do not throw cleanly; quieter, less dust at the head.

**Result:** pulley ≈ 0.46 m at 62 r/min; 64.8 t/h, ≈ 4.4 kW lift (≈ 6.3 kW shaft); gravity discharge 21.6 t/h.`,
        answer: String.raw`(a) r = v²/g = 0.229 m → D ≈ 0.46 m, N ≈ 62 r/min; (b) ṁ = V_bφρv/s = 18 kg/s = 64.8 t/h; lift 4.4 kW, shaft ≈ 6.3 kW; (c) 21.6 t/h at 0.5 m/s (less wear, gentle on friable/abrasive solids).` } ] },

    { id: "practice-solids-handling-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solids-handling-P6", label: "", marks: "8", topic: "solids-handling",
        sub: "Troughed belt conveyor: idlers, troughing angles, correct troughing", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Solid handling slides "Belt Conveyor", "Belt Conveyor: Troughed and Flat Belt Conveyor" (incorrect/correct troughing figure)`,
        text: String.raw`Sketch the cross-section of a troughed belt conveyor on a three-roll idler set, showing the carrying and return sides. State the usual troughing angles and roll arrangements, explain what "correct troughing" means and why it matters, and compare troughed and flat belts.`,
        solution: String.raw`![Three-roll troughed idler (20° side rolls) carrying the load with a surcharge, flat return idler below; incorrect troughing: stiff empty belt bridges the centre roll](fig/practice-solids-handling-P6-sketch.svg)

**Construction:** an endless belt (polyester carcass covered with rubber; woven wire or steel ribbon for heat) runs over a head (drive) pulley and a tail pulley on a conveyor frame. On the carrying side it is supported by **troughed carrier rollers** (idlers) in sets of 5, 3 or 2 rolls; the side rolls are inclined at the troughing angle, commonly **15°, 20°, 25°, 30°, 35°, 40° or 45°**. The return side runs on **straight (flat) return idlers**. Between the last troughing idler and the pulley the belt flattens over the "transition distance".

**Correct troughing:** the empty belt must lie on (make sufficient contact with) the **centre roll** as well as the side rolls. If the belt is too stiff transversely for the troughing angle it bridges across, touching only the side rolls ("incorrect troughing"): it then wanders off the idlers, **does not track**, spills material and wears its edges. Hence belt stiffness (carcass, width) and troughing angle must be matched.

**Troughed vs flat belt:**
| | Troughed | Flat |
|---|---|---|
| Load section | large (2–3 × flat) with surcharge | small |
| Spillage | low; centring of load | edges spill |
| Use | bulk materials, mines, plants | packages, picking/sorting belts |
| Idlers | 2/3/5-roll sets, more maintenance | simple rolls |

Troughing rollers wear heavily and need frequent maintenance (slides).`,
        answer: String.raw`Belt on 3-roll (or 2/5) troughed idlers at 15–45° (often 20–35°), flat return idlers. Correct troughing: empty belt touches the centre roll so it tracks; a stiff belt bridging the side rolls mistracks and spills. Troughed belts carry 2–3× more bulk load with less spillage than flat belts.` } ] },

    { id: "practice-solids-handling-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solids-handling-P7", label: "", marks: "8", topic: "solids-handling",
        sub: "Air-supported belt conveyor: principle, sketch, advantages", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Solid handling slides "Air-supported belt conveyor" (trough, air pocket, film of air; pneumatic floating pipe conveyor)`,
        text: String.raw`With a labelled sketch, explain how an air-supported belt conveyor works. What are its advantages over a conventional idler-supported troughed belt, and what are its limitations?`,
        solution: String.raw`![Air-supported belt conveyor: the loaded belt rides on a film of air supplied by a fan through holes in a closed trough (plenum); covered top, flat return](fig/practice-solids-handling-P7-sketch.svg)

**Principle:** the carrying idlers are replaced by a **closed, formed steel trough (or pipe)** that acts as a plenum. A **fan** blows low-pressure air into the plenum, and the air escapes through a line of small **holes in the trough under the belt**, forming an air pocket and a thin **film of air** that lifts and supports the belt and its load. The belt therefore slides on air instead of rolling over idlers. A cover over the trough encloses the material; the return run may be on rollers or also air-supported. The "pneumatic floating conveyor" is the pipe version, where the belt forms a closed tube.

**Advantages:**
- No carrying idlers: far fewer moving parts and bearings, so much less maintenance (idler wear is the main weakness of troughed belts) and lower noise.
- Lower friction and smooth, vibration-free belt motion: less spillage and degradation of friable products; can run faster.
- Fully enclosed: **dust-free**, weather-protected, suits food, fertiliser, cement and toxic powders.
- Easier tracking (the belt centres itself in the trough).

**Limitations:**
- Continuous fan power and an air supply; the air holes may block with sticky fines.
- Higher capital cost of the trough; limited to moderate inclines like normal belts (no vertical lift) and to belt temperatures < 120°C.
- Very lumpy, heavy material concentrates the load and needs higher air pressure.`,
        answer: String.raw`Fan pressurises a closed trough (plenum); air through holes under the belt forms a supporting air film, replacing carrying idlers. Pros: low maintenance and noise, low friction, enclosed and dust-free, good tracking. Cons: fan power, holes may block, cost, same incline/temperature limits.` } ] },

    { id: "practice-solids-handling-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solids-handling-P8", label: "", marks: "10", topic: "solids-handling",
        sub: "Choosing conveyors for five plant duties from the selection criteria", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Solid handling slides "Selection Criteria", "Limitations", bucket and screw conveyor slides`,
        text: String.raw`Select a mechanical conveyor for each duty and justify it with the selection criteria (capacity, distance, configuration, solid properties): (i) 300 t/h of crushed limestone over 2 km of hilly ground; (ii) 30 t/h of cement raised 40 m into a silo; (iii) 5 t/h of a toxic, dusty pigment powder over 15 m; (iv) hot clinker at 400°C from the cooler, 50 m; (v) metering wet sticky filter cake into a dryer.`,
        solution: String.raw`| Duty | Choice | Justification |
|---|---|---|
| (i) 300 t/h limestone, 2 km, hilly | **troughed belt conveyor** (series of flights) | highest capacity, lowest cost per t·km; long distance; follows inclines up to ≈ 18–22° (40.4 m rise/100 m for crushed rock); abrasive lumps acceptable; T < 80°C |
| (ii) 30 t/h cement, 40 m vertical | **bucket elevator** (centrifugal discharge, ≈ 1.5 m/s) | vertical lift in restricted floor space, belts cannot lift vertically, screw conveyors are poor for 40 m; enclosed casing contains the dust |
| (iii) 5 t/h toxic pigment, 15 m | **screw conveyor** in a closed (tubular) casing | small capacity and short distance (< 100 m); totally enclosed so toxic dust cannot escape; can also mix/meter; fine powder well below the flight gap |
| (iv) hot clinker 400°C, 50 m | **apron (pan) or deep-pan chain conveyor** (steel pans), or a drag-chain conveyor | belts are limited to ≈ 120°C (special belts ≈ 200°C), screws to 120°C; steel chain/pan conveyors take high temperature and abrasive lumps |
| (v) metering sticky cake | **screw feeder** (variable- or constant-pitch, ribbon flight if very sticky) or a belt feeder with scraper | positive volumetric metering at controllable rpm; enclosed; ribbon flights reduce build-up; screws also break lumps |

General points (slides): capacity and distance first fix the class (belt for large/long, screw for small/short, bucket for vertical); then configuration (horizontal, inclined, vertical) and solid properties (bulk density, size, abrasiveness, flowability, toxicity, corrosiveness, explosibility, temperature) decide the details and materials.`,
        answer: String.raw`(i) troughed belt; (ii) bucket elevator; (iii) enclosed screw conveyor; (iv) steel apron/pan or drag-chain conveyor (belts and screws ≤ 120°C); (v) screw feeder (ribbon flight) or belt feeder.` } ] },

    { id: "practice-solids-handling-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solids-handling-P9", label: "", marks: "8", topic: "solids-handling",
        sub: "Uses of mechanical conveyors; chain conveyors and elevators", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Solid handling slides "Mechanical Conveyors" (uses, classification) and "Others conveyors and feeders"`,
        text: String.raw`State the five duties for which mechanical conveyors are used in a bulk-solids plant and name the four classes of mechanical conveyor. Describe chain conveyors (drag, en-masse, flight and apron types): how they work, and where they are preferred to belts and screws.`,
        solution: String.raw`### Uses (slides)
Mechanical conveyors are the workhorses of bulk-solids plants, used for: **transportation, feeding, discharging, metering and proportioning** of bulk solids.

### Classes
1. Belt conveyors; 2. screw conveyors/elevators; 3. bucket elevators; 4. chain conveyors/elevators.

### Chain conveyors
One or two endless chains (or a cable) driven by sprockets carry or drag the solid:
- **Drag-chain conveyor:** a single chain with attached links/flights drags the material along the floor of a closed trough; the chain runs back above or below.
- **En-masse (Redler) conveyor:** skeleton flights move a solid bed through a closed casing; the whole cross-section moves as a mass because internal friction exceeds wall friction. Works horizontally, inclined and vertically in the same casing; gentle on the product; dust-tight.
- **Flight conveyor:** scrapers (flights) at intervals push material along an open or closed trough; can discharge at several points through gates.
- **Apron (pan) conveyor:** overlapping steel pans fixed to the chains form a continuous carrying surface; handles heavy, hot (≈ 400–600°C), abrasive, lumpy material (clinker, ore, castings) and impact at feed points; also used as a heavy-duty feeder under hoppers.

### Where preferred
- Hot or abrasive material beyond belt (120°C) and screw limits; heavy lumps and impact loading.
- Enclosed, dust-tight transport with multiple feed/discharge points and changes of direction (en-masse).
- Short to medium distances at low speed (≈ 0.1–0.5 m/s); higher power and wear than belts, so not for long distances.`,
        answer: String.raw`Uses: transport, feeding, discharging, metering, proportioning. Classes: belt, screw, bucket, chain. Chain types: drag, en-masse (bed moves with flights, any direction, dust-tight), flight (scrapers), apron (steel pans, hot/heavy/abrasive). Preferred for hot, abrasive, lumpy or enclosed multi-point duties over short distances.` } ] },

    { id: "practice-solids-handling-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solids-handling-P10", label: "", marks: "10", topic: "solids-handling",
        sub: "Comparison of belt, screw and bucket conveyors; slide limits in one table", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Solid handling slides "Applications", "Limitations", "Bucket Elevator", "Screw conveyor/elevator"`,
        text: String.raw`Prepare a table comparing belt conveyors, screw conveyors/elevators and bucket elevators under these headings: path, typical capacity and distance, speed, temperature limit, particle size, enclosure/dust, power and wear, extra functions, typical applications.`,
        solution: String.raw`| | Belt conveyor | Screw conveyor/elevator | Bucket elevator |
|---|---|---|---|
| Path | horizontal, gentle incline/decline (≤ 22°; 45° with non-slip devices); no vertical lift | horizontal, inclined (> 30° needs circular casing) or vertical | vertical (restricted floor space) |
| Capacity, distance | highest capacity; km distances (single belt > 300 m if T < 80°C) | small to moderate; ≤ 100 m | moderate to high; lift height of the casing |
| Speed | 1–6 m/s | set by rpm, pitch and fill | 1.5 m/s centrifugal, 0.5 m/s gravity discharge |
| Temperature | < 120°C (rubber-covered); woven wire or steel ribbon for hotter | feed up to 120°C | depends on belt (≤ 120°C) or chain (hotter) |
| Particle size | lump size limited by belt width (belts to 2.5 m wide) | smaller than the flight–casing gap; tapered/variable-pitch for lumps | limited by bucket size |
| Enclosure | open (dust, spillage) unless covered or air-supported | fully enclosed | enclosed casing |
| Power / wear | lowest power per t·km; idlers need frequent maintenance | high power per tonne; flights and trough wear with abrasives | moderate; centrifugal units wear more |
| Extra functions | weighing, sorting, picking, sampling, blending, spraying, cooling, drying | mixing, heating/cooling, metering, feeding | – |
| Applications | mines, quarries, overland (Lafarge-Surma 16.5 km), plant transfer | powders and granules, feeders, toxic dusts | grain, cement, fertilizer, rock to crushers |

**Key slide numbers to remember:** belt T < 120°C, 22° normal incline, 45° with cleats; screw T < 120°C, ≤ 100 m, p/D = 1 (1.5 free-flowing horizontal, 0.5–0.67 vertical, 1.0–0.67 with tapered screw for lumps); bucket centrifugal 1.5 m/s, gravity 0.5 m/s.`,
        answer: String.raw`Belt: horizontal/≤ 22°, km, < 120°C, lowest cost per t·km, open, many extra functions. Screw: any direction (circular casing > 30°), ≤ 100 m, < 120°C, enclosed, high power. Bucket: vertical, 1.5 m/s centrifugal / 0.5 m/s gravity, enclosed.` } ] }
  ]
});
