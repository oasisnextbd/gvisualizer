QB.paper({
  year: "2018-19", date: "24/01/2021", marks: 240,
  rules: String.raw`Time 2 hours. Section A: answer any TWO of Q1–Q3. Section B: answer any TWO of Q4–Q6. Use separate scripts for each section. Symbols have their usual meaning. The pump characteristics table (Foust Table 21.1) and the centrifugal-pump operating-range chart (Foust Fig. 21.23) are attached for Q2(d).`,
  questions: [
    { id: "2018-19-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q1a", label: "(a)", marks: "12×2",
          topic: "relief", sub: "Short notes: total containment system and runaway reaction",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write short notes on (i) Total Containment System and (ii) Runaway reaction.`,
          solution: String.raw`### (i) Total containment system

A relief device only moves the problem from the vessel to the discharge line. Toxic, flammable or two-phase reliefs must not go straight to the atmosphere, so they are sent to a **total containment and treatment system** (Crowl & Louvar ch. 8).

![Relief header to a knockout drum and catch tank; vapor to condenser, scrubber, flare or incinerator](fig/2018-19-Q1a-sol.svg)

**Components**

| Unit | Function |
|---|---|
| Relief header | collects discharges from several PSVs/rupture discs; sized for the largest simultaneous relief and allowable back-pressure |
| Knockout / blowdown drum (horizontal, or tangential-entry when space is limited) | separates liquid from vapor by gravity; sized so droplets settle (drag-coefficient method, C&L Fig. 8-14) at the vapor velocity; may contain a coolant for high-boiling material |
| Catch tank / quench tank | holds the liquid (often a runaway-reaction mass); liquid is later transferred, recycled or incinerated |
| Condenser | recovers high-boiling vapors |
| Scrubber | absorbs toxic or acid gases (caustic for $\mathrm{H_2S}$, $\mathrm{Cl_2}$; water for $\mathrm{NO_2}$, $\mathrm{NH_3}$) |
| Flare | burns flammable/toxic vapors to $\mathrm{CO_2}$ and $\mathrm{H_2O}$; height chosen so radiation at grade is ≤ 1500 Btu/h ft² |
| Incinerator | destroys combustible or toxic vapors and liquids under controlled conditions |

**Design points:** containment capacity for the worst-case relief (often two-phase runaway flow); materials compatible with the discharged fluid; back-pressure on the relief devices kept within limits (use balanced-bellows valves on a header with variable back-pressure); no liquid pockets in the header (slope to the drum); flame arresters/purge gas to keep air out of a flare header.

### (ii) Runaway reaction

A **runaway** is a loss of thermal control of an exothermic reaction: heat generation, which rises **exponentially** with temperature (Arrhenius), exceeds the heat removal, which rises only **linearly** with temperature. The temperature then accelerates, the vapor pressure of the contents and any non-condensable gas generated drive the pressure up, and the vessel can rupture.

![Temperature (or pressure) history: normal operation, runaway after loss of cooling, and the tempered course with relief](fig/2018-19-Q1a-sol2.svg)

- **Causes:** loss of cooling (coolant failure, fouled jacket), agitator failure (local hot spots, then sudden reaction of accumulated reactant), wrong charge or too fast monomer addition, contamination/catalyst error, external fire.
- **Characterisation:** calorimeters (ARC, VSP, RSST) give onset temperature, maximum self-heat rate $dT/dt$, maximum pressure rate $dP/dt$ and non-condensable gas formed.
- **Relief behavior:** venting usually gives **two-phase (foamy) flow**, so the vent area is much larger than for vapor-only relief. DIERS methods are used, e.g. Leung's method for a tempered system:
$$A = \frac{m_0\,q}{G_T\left[\left(\dfrac{V}{m_0}\dfrac{\Delta H_v}{v_{fg}}\right)^{1/2} + \left(C_V\,\Delta T\right)^{1/2}\right]^2}$$
  where $q$ is the heat release per unit mass, $G_T$ the two-phase mass flux and $\Delta T = T_m - T_s$.
- **Prevention** (slides, polymerization reactor): coolant-flow gauge with low-flow alarm; stirrer rpm alarm; stirrer–coolant interlock that stops monomer addition; stop addition when the coolant valve approaches 100 % open; temperature sensors along the reactor; then a correctly sized relief to a containment system as the last layer.`,
          answer: String.raw`(i) Relief header → knockout/blowdown drum (liquid to catch tank) → vapor to condenser, scrubber, flare or incinerator. (ii) Runaway: exponential heat generation beats linear heat removal; T and P accelerate; vented as two-phase flow (DIERS/Leung sizing); prevented by alarms, interlocks and feed control.` },
        { id: "2018-19-Q1b", label: "(b)", marks: "15",
          topic: "relief", sub: "Why a balanced-bellows safety valve offsets back-pressure",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Justify the statement – "Balanced safety valve is advantageous to offset back-pressure effect."`,
          solution: String.raw`![Conventional valve: back-pressure acts on top of the disc; balanced-bellows valve: the bellows isolates the disc top from back-pressure](fig/2018-19-Q1b-sol.svg)

**Force balance at the moment of opening** (disc just lifting; $A_N$ = nozzle seat area, $A_D$ = disc area, $F_s$ = spring force, $P_1$ = inlet pressure, $P_b$ = back-pressure, all gauge).

1. **Conventional valve** (bonnet communicates with the outlet). Up: $P_1A_N + P_b(A_D - A_N)$. Down: $F_s + P_bA_D$.
$$P_1A_N = F_s + P_bA_N \;\Rightarrow\; P_{1,open} = \frac{F_s}{A_N} + P_b$$
   A **superimposed** back-pressure adds directly to the set pressure. If $P_b$ varies (common header, flare), the opening pressure varies with it: the vessel can exceed its MAWP before the valve opens. Built-up back-pressure (from flow) also reduces lift and capacity, so conventional valves are limited to about 10 % built-up back-pressure.
2. **Balanced-bellows valve.** A bellows of effective area $A_B = A_N$ is fixed between the disc and the bonnet; the bonnet is vented to atmosphere. Up: $P_1A_N + P_b(A_D - A_N)$. Down: $F_s + P_b(A_D - A_B)$.
$$P_1A_N = F_s + P_b(A_N - A_B) = F_s \;\;(A_B = A_N)\;\Rightarrow\; P_{1,open} = \frac{F_s}{A_N}$$
   The opening pressure is **independent of back-pressure**.

**Advantages that follow**
- Predictable set pressure with large or variable back-pressure (common relief header, vent to a scrubber, as for PSV-4 in C&L Example 8-2).
- The bellows protects the spring and guide from corrosive/fouling process fluid.
- Back-pressure up to about 30–50 % of set can be handled; capacity is corrected with the factor $K_b$ (C&L Fig. 9-4 for liquids), still giving a smaller valve than a conventional valve in the same service.

**Cost:** more expensive, the bellows can fail (the bonnet vent then leaks, so it must go to a safe place). Use it when a nearly constant set point is needed with large variation in back-pressure.`,
          answer: String.raw`Conventional: P_open = F_s/A_N + P_b (set pressure shifts with back-pressure). Bellows with A_B = A_N: P_open = F_s/A_N, independent of P_b; also protects spring from process fluid; capacity corrected by K_b.` },
        { id: "2018-19-Q1c", label: "(c)", marks: "7×3",
          topic: "relief", sub: "What is wrong with three relief-valve and rupture-disc layouts",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`The following configurations provide us with the information on what not to do while placing relief valves or rupture disk on process vessels. What are the wrongs with the given configurations?

![Figure for Q1(c) (attached to the paper): (i) two vessels, one relief valve on the corrosive-liquid vessel, block valve in the connecting line; (ii) vessel fed by two 100 gpm pumps, emptied by one 100 gpm pump, relief sized for 100 gpm; (iii) rupture disc set at 110 psig and relief valve set at 100 psig, valve discharge tied into the disc outlet](fig/2018-19-Q1c.svg)`,
          solution: String.raw`**Figure (i): relief valve protecting two vessels through a block valve, in corrosive service**

- The large vessel is protected only through the connecting line, and that line has a **block valve**. If it is closed, the large vessel has no overpressure protection. Code rule: no stop valve between a vessel and its relief device unless it is car-sealed/locked open under an administrative procedure (ASME VIII Appendix M). Give each vessel its own device, or remove the valve.
- The spring valve sits directly on the **corrosive liquid** vessel. Corrosion of the seat, spring and guide makes it stick or leak. Put a **rupture disc upstream** of the valve (with a pressure gauge or tell-tale between them to detect a leaking disc), or use a corrosion-resistant valve.

**Figure (ii): relief undersized for the credible scenario**

The vessel can receive **200 gpm** (both inlet pumps running) when the 100 gpm outlet pump stops or its line is blocked. The relief is sized for only 100 gpm, so pressure keeps rising while it is open. Size the relief for the **worst credible scenario** (200 gpm of liquid, or two-phase if it can be), or interlock the inlet pumps with the outlet pump.

**Figure (iii): relief valve discharging into the rupture-disc outlet**

- The relief valve (100 psig) and rupture disc (110 psig) are in parallel, which is fine, but the **valve discharge is piped into the outlet of the disc**. When the valve lifts, its flow pressurises the downstream face of the disc. A disc bursts on **differential** pressure, so its effective burst pressure rises above 110 psig, and a reverse pressure can damage or collapse a disc not built for it. Each device must discharge through its own line (or the disc must be rated for the back-pressure and a vacuum support fitted).
- Check the set pressures against MAWP: if MAWP = 100 psig, a second (additional) device may be set at no more than 105 % of MAWP for process relief; 110 % is allowed only for a supplementary fire-case device.`,
          answer: String.raw`(i) Block valve can isolate the large vessel; spring valve exposed to corrosive liquid (needs upstream rupture disc + tell-tale). (ii) Inflow can be 200 gpm, relief sized for 100 gpm → undersized. (iii) Valve discharges onto the downstream side of the disc: back-pressure raises the disc's burst pressure / reverses it; separate discharges and check 105 %/110 % limits.` }
      ] },
    { id: "2018-19-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q2a", label: "(a)", marks: "10",
          topic: "drying", sub: "Drying is a relative term: equilibrium moisture curves",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain the statement with example and chart – "Drying is a relative term".`,
          solution: String.raw`**Drying** is the removal of relatively small amounts of water (or other liquid) from a solid to reduce the residual liquid to an **acceptably low value**, not to zero.

- Every solid in contact with air of a given humidity and temperature approaches an **equilibrium moisture content** $X^*$; it cannot be dried below $X^*$ with that air. $X^*$ depends on the solid and on the relative humidity (MSH Fig. 25.3 / 24.x, equilibrium-moisture curves at 25 °C).

![Equilibrium-moisture curves: at the same relative humidity different solids hold very different amounts of water](fig/2018-19-Q2a-sol.svg)

- Commercially "dry" products still contain liquid (slide examples):

| Product | Moisture when "dry" |
|---|---|
| table salt | ≈ 0.5 % |
| coal | ≈ 4 % |
| paper | 6–10 % |
| bone-dry product | 0 (only by heating under very dry conditions) |

- Hygroscopic organic solids (wool, leather, paper) have high $X^*$; inorganic insoluble solids (sand, glass, kaolin) have $X^*$ close to zero. Drying further than needed wastes energy and can damage the product (overdried paper becomes brittle; overdried foods lose quality).

So "dry" means **reduced from an initial value to some acceptable final value** set by the product specification and the drying air, which is why drying is a relative term.`,
          answer: String.raw`A solid can only be dried to its equilibrium moisture X* (which depends on the solid and the air RH); "dry" products still hold water (salt 0.5 %, coal 4 %, paper 6–10 %), so drying means reduction to an acceptable final value.` },
        { id: "2018-19-Q2b", label: "(b)", marks: "25",
          topic: "drying", sub: "Dryer selection for a dairy (milk powder) plant",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`In a chemical industry you have been assigned to select an industrial dryer for dairy industry. Based on the General Guidelines of Dryer Selection, discuss the selection criteria of dryer for dairy industry.`,
          solution: String.raw`**Selection procedure** (slides): (1) initial selection of two or three dryer types that can handle the material at the required rate and quality; (2) drying tests on those types to fix operating conditions and product properties, which also form the basis of vendor quotations; (3) final selection on product quality, capital and operating cost.

**The material:** liquid milk (or whey) concentrated in a falling-film evaporator to about 45–50 % solids; product a free-flowing powder with 2.5–4 % moisture; proteins, lactose and fat are heat-sensitive (browning, denaturation, loss of solubility); food hygiene is mandatory.

**Applying the general guidelines**

| Guideline | Dairy situation | Consequence |
|---|---|---|
| Batch or continuous | a dairy dries several t/h; batch dryers suit < 150–200 kg/h | continuous; for large rates the slides point to rotary or spray dryers |
| Feed and product handling | feed is a pumpable liquid concentrate | spray or drum dryer (dryers that take liquids); not tray, conveyor or rotary |
| Thermally sensitive material | must be dried in a very short contact time or at low temperature | **spray dryer**: droplets dry in seconds and stay near the wet-bulb temperature; inlet air 180–220 °C, outlet 80–95 °C. A drum dryer holds the film on a hot surface → scorched, poorly soluble powder (only for feed-grade). Freeze drying preserves best but is far too costly for bulk milk (used for probiotics, colostrum) |
| Adiabatic or non-adiabatic | direct contact with hot air is acceptable; fine particles | adiabatic (direct) spray dryer; air heated **indirectly** (steam coils or gas-fired indirect heater) so combustion products do not contact food |
| Operation | reliable, safe, no unplanned shutdowns | automatic control of outlet temperature (sets moisture); CIP cleaning |
| Dust problem | fine, sticky, combustible milk powder | cyclones + bag filter (or wet scrubber) on exhaust; explosion vents and fire detection |
| Energy efficiency | spray dryers alone are not efficient (hot exhaust) | concentrate as far as possible in the evaporator first (evaporation is ~10× cheaper per kg water); two-stage drying (spray + integrated or external vibrating fluid bed) allows lower outlet temperature; exhaust heat recovery |
| Type of fuel | clean heat needed | natural gas/LPG or steam, never coal or heavy oil in direct contact |
| Maintenance cost | deposits in chamber and ducts | stainless steel 316, hygienic design, CIP nozzles, easily cleaned atomizer |
| Labour cost | continuous automated plant | low labour per tonne |
| Pollution | powder emission, wash water | bag filters to meet emission limits; treat CIP effluent |

**Selection:** a **continuous co-current spray dryer** (rotary-disc or pressure-nozzle atomizer) with an integrated **fluid-bed after-dryer/cooler** (two-stage) for instant, agglomerated milk powder, indirect air heating, cyclones plus bag filter, in stainless hygienic construction. Confirm with pilot drying tests (outlet temperature, residual moisture, bulk density, solubility index) before buying.

**Merits that decide it** (slides): the spray dryer combines the functions of an evaporator, crystallizer, dryer, size-reduction unit and classifier; gives spherical, porous, free-flowing, readily soluble particles; short residence time protects heat-sensitive solids. Drawbacks to accept: bulky (often 25 m tall), less thermally efficient, bulk density sensitive to feed solids and inlet temperature.`,
          answer: String.raw`Liquid, heat-sensitive, large-tonnage, hygienic food feed → continuous co-current spray dryer with fluid-bed after-dryer, indirect air heating, cyclone + bag filter, SS316 CIP design; drum dryer only for feed grade, freeze dryer only for specialty products.` },
        { id: "2018-19-Q2c", label: "(c)", marks: "10",
          topic: "ejectors", sub: "Fixed-capacity ejector: higher steam pressure does not raise capacity",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"In a fixed capacity ejector, increase in steam pressure does not increase vapor handling capacity" – explain the statement.`,
          solution: String.raw`**How the ejector is built.** In a fixed-capacity (non-throttling) ejector the steam nozzle throat and the diffuser throat are proportioned for one design point: a set motive-steam pressure, suction load and discharge pressure. The best steam economy is obtained only when nozzle and diffuser are matched to that duty (Ludwig ch. 6).

**What happens when steam pressure rises above design**

1. The nozzle is choked, so steam flow is proportional to the absolute steam pressure: $\dot m_s \propto P_s A_t\sqrt{M/(RT)}$. Raising $P_s$ only pushes **more steam** through the same nozzle.
2. The diffuser throat area is fixed. The extra steam occupies more of the diffuser's flow capacity and must itself be compressed to the discharge pressure, leaving **no more room for suction vapor**. The suction flow (entrained load) therefore does not increase; usually it **decreases** slightly because of the extra steam in the diffuser (Ludwig Fig. 6-12: effect of excess steam pressure on capacity).
3. The extra momentum improves stability against high back-pressure (the maximum discharge pressure the unit can work against rises), but not the vapor capacity, and steam consumption per kg of load rises.

**Consequences for practice**
- Design steam pressure is taken as the **lowest** pressure expected at the nozzle (line pressure minus about 10 psi); the ejector will not operate stably below it, and gains nothing above it.
- To get more capacity, a new (larger) ejector or a re-sized nozzle/diffuser is needed; a **throttling-type** ejector has a family of curves with motive pressure, but a lower compression ratio.`,
          answer: String.raw`Nozzle and diffuser are sized for one duty; more steam pressure only sends more steam (∝ P_s) through the choked nozzle, which loads the fixed diffuser throat, so entrained vapor does not rise (often falls); only stability against back-pressure improves.` },
        { id: "2018-19-Q2d", label: "(d)", marks: "15",
          topic: "pumps", sub: "Select pump type and size for 300 gal/min at 70 ft",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`It is necessary to pump water at a rate of 300 gal/min against a head of 70 ft. Recommend a pump type and size. *See attachment.*

Attachment (Foust Table 21.1, pump characteristics):

| | Centrifugal standard (radial flow) | Centrifugal turbine (mixed flow) | Centrifugal propeller (axial flow) | Rotary (gear or screw) | Reciprocating (piston or plunger) |
|---|---|---|---|---|---|
| Head (or discharge pressure) | high; single stage up to 600 ft; multistage up to 6000 psi | intermediate, up to 200 ft | low, up to 60 ft | intermediate, up to 600 psi | highest available, up to 100,000 psi |
| Capacity | low (100 gal/min) to very high (200,000 gal/min) | intermediate, up to 16,000 gal/min | high, up to 100,000 gal/min | low (1 gal/min) to intermediate (500 gal/min) | intermediate, up to 500 gal/min |
| Liquids handled | clean or dirty | high solids content | abrasive | up to high viscosity, nonabrasive | clean, no solids |
| Metering / flow-control capability | no | no | no | yes | yes |

Figure for Q2(d) (attached to the paper): Foust Fig. 21.23, operating ranges (total head vs capacity, 1750 rpm) of a series of Goulds centrifugal pumps labelled discharge × suction − maximum impeller diameter (in.), e.g. 1×1½−6 … 3×4−8, 3×4−8G, 3×4−10, 3×4−13, 4×6−10, 4×6−13.`,
          solution: String.raw`**Given:** water, $Q$ = 300 gal/min, total head $H$ = 70 ft.
**Find:** pump type and model/size.
**Assumptions:** clean water at ambient temperature (s.g. = 1), 1750 rpm motor speed as on the chart, pump efficiency about 70 % for the power estimate.

1. **Pump type (Table 21.1).** 300 gal/min and 70 ft are well inside the standard radial-flow centrifugal range (100–200,000 gal/min, up to 600 ft single stage). No metering is needed and the liquid is clean water, so a positive-displacement pump has no advantage (and a reciprocating pump tops out at 500 gal/min). A propeller pump is limited to 60 ft. → **single-stage standard (radial-flow) centrifugal pump**.
2. **Size (Fig. 21.23).** Enter at 300 gal/min, go up to 70 ft. At 300 gal/min the line separating the **3×4−8** area (below) from the **3×4−10** area (above) lies at about 71 ft, so the duty point sits on the top edge of the 3×4−8 range, i.e. it needs that pump's maximum (8 in.) impeller, with no margin for wear or future head.
3. **Choice.** Select the **Goulds 3×4−10** at 1750 rpm (3 in. discharge, 4 in. suction, 10 in. casing) with a **trimmed impeller**. Its full-diameter curve gives about 88 ft at 300 gal/min; with the affinity laws for impeller trimming ($Q\propto D$, $H\propto D^2$) the diameter that passes through (300 gal/min, 70 ft) is
$$\left(\frac{D}{10}\right)^2 H_{10}\!\left(\frac{300}{D/10}\right) = 70 \;\Rightarrow\; D \approx 9.1\ \mathrm{in.}$$
   so an impeller of about **9 in.** leaves room to fit a larger one later. (The 3×4−8 with its full 8 in. impeller, ≈ 7.9 in. by the same calculation, is the acceptable minimum-cost alternative.)
4. **Power.**
$$\text{water hp} = \frac{Q\,H\,(\mathrm{s.g.})}{3960} = \frac{300 \times 70 \times 1}{3960} = 5.30\ \mathrm{hp}$$
$$\text{brake hp} \approx \frac{5.30}{0.70} = 7.6\ \mathrm{hp} \;\Rightarrow\; \text{use a 10 hp motor}$$

**Result:** standard single-stage centrifugal pump, Goulds 3×4−10 at 1750 rpm with an impeller trimmed to about 9 in. (3×4−8 with full 8 in. impeller is borderline), about 7.6 bhp, 10 hp motor. Final impeller size is confirmed on the manufacturer's detailed curve (Foust Fig. 21.17a) together with NPSH available.`,
          answer: String.raw`Standard radial-flow centrifugal, 1750 rpm; point lies on the 3×4−8/3×4−10 boundary (≈71 ft at 300 gpm) → 3×4−10 with ≈9 in. impeller (3×4−8 at full 8 in. borderline); ≈5.3 water hp, ≈7.6 bhp, 10 hp motor.` }
      ] },
    { id: "2018-19-Q3", q: 3, section: "A",
      stem: String.raw`Write short notes on (10×6 = 60):`,
      parts: [
        { id: "2018-19-Q3a", label: "(a)", marks: "10",
          topic: "ejectors", sub: "Motive-steam pick-up pressure of an ejector",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Pick up pressure of Ejector.`,
          solution: String.raw`An ejector operates stably only when the motive steam pressure is above a minimum. That minimum depends on the direction of change (Ludwig ch. 6, Fig. 6-13):

![Suction pressure vs motive steam pressure: falling steam pressure breaks at point 1, rising steam pressure picks up only at point 4](fig/2018-19-Q3a-sol.svg)

- **Break pressure (point 1):** as steam pressure is lowered along 5–3–1 the ejector holds the design suction pressure until point 1; below it the jet can no longer compress the load to the discharge pressure, capacity collapses (line 1–2) and the system **loses vacuum**.
- **Pick-up pressure (point 4):** when steam pressure is raised again from the unstable region, stable operation does **not** return at point 1; the steam pressure must rise to the higher value at point 4 before the jet "picks up" the load and suction pressure drops back (4–3). This minimum motive pressure, approached from the unstable side, is the **motive steam pick-up pressure**.
- The band 3–1 is a **hysteresis (unstable) region**: the smallest drop in steam pressure can make the system lose vacuum. Operation must stay to the right of point 4 (region 3–5).
- The positions of points 1 and 4 depend on ejector design and on discharge (back) pressure; ejectors with low compression ratios may show no break at all.
- **Practice:** design steam pressure = lowest expected line pressure at the nozzle minus about 10 psi, so normal fluctuations never fall into the break region; single-stage ejectors for < 200 mm Hg abs need at least about 25 psig steam.`,
          answer: String.raw`Pick-up pressure = minimum motive steam pressure at which an ejector regains stable vacuum when steam pressure is raised from the unstable region; it is higher than the break pressure (hysteresis), so design steam pressure is set above it (line pressure − 10 psi).` },
        { id: "2018-19-Q3b", label: "(b)", marks: "10",
          topic: "ejectors", sub: "Effect of superheated (and wet) motive steam in an ejector",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Effect of superheated steam in Ejector.`,
          solution: String.raw`- **Recommended condition:** dry steam with a **few degrees of superheat (5–15 °F)** at the nozzle. This prevents condensation in the nozzle, where the steam expands and cools sharply, so no droplets form.
- **High superheat is of no advantage.** Superheat raises the available (isentropic) enthalpy drop per kg, so jet velocity rises; but it lowers the steam **density**. The nozzle throat is sized for a mass flow, and the choked mass flow $\dot m \propto P_sA_t/\sqrt{T_s}$ falls as $T_s$ rises. The gain in energy per kg is offset by the smaller mass of motive steam, so entrainment capacity does not improve (Ludwig: "the increase in available energy is offset by the decrease in steam density"). If superheated steam must be used, the nozzle has to be designed for it.
- **Highly superheated steam** also raises the mixture temperature, increases the load on intercondensers and can overheat parts.
- **Wet steam (the opposite case)** is harmful: water droplets erode the nozzle and diffuser, partly clog the nozzle, and cause a fluctuating vacuum. Use separators/traps ahead of the ejector and insulate the steam line.`,
          answer: String.raw`Slight superheat (5–15 °F) is recommended to avoid condensation/erosion; large superheat gives no benefit because the higher available energy is offset by lower steam density (less mass through the fixed nozzle) unless the nozzle is designed for it; wet steam erodes and destabilises the ejector.` },
        { id: "2018-19-Q3c", label: "(c)", marks: "10",
          topic: "drying", sub: "Freeze drying: principle, steps and applications",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Freeze Drying.`,
          solution: String.raw`**Principle:** water is removed by **sublimation**, liquid → solid → vapor. The material is frozen, then held below the triple point of water (0.01 °C, 611 Pa) while heat is supplied, so ice turns directly into vapor without passing through the liquid state.

![Freeze-drying path on the water phase diagram: freeze, pull vacuum below 611 Pa, heat gently so ice sublimes](fig/2018-19-Q3c-sol.svg)

**Steps**
1. **Freezing** (−20 to −50 °C), quickly enough to give small ice crystals that do not damage the cell structure.
2. **Primary drying:** chamber pressure reduced to about 10–100 Pa; shelves heated gently (radiation/conduction) to supply the latent heat of sublimation (≈ 2.8 MJ/kg); the vapor is collected on a refrigerated condenser at −50 to −80 °C (or pumped by an ejector system). The sublimation front moves into the solid.
3. **Secondary drying (desorption):** temperature raised a little to remove bound water to 1–4 %.
4. Break vacuum with dry inert gas; pack in moisture-proof containers.

**Equipment:** batch vacuum tray (shelf) dryers (slides: "tray dryer or active drying"), continuous tunnel freeze dryers for food.

**Advantages:** very low temperature, so no change in colour, taste or biological activity; porous structure that rehydrates quickly; uniform, consistent quality of delicate structures; can handle ultrafine materials. **Uses:** antibiotics, vaccines, proteins, vitamins, blood plasma, living micro-organisms, instant coffee, fruit pieces, specialty foods.

**Disadvantages:** high capital and energy cost (refrigeration and vacuum), long cycle times (many hours), low throughput, so used only for high-value heat-sensitive products.`,
          answer: String.raw`Freeze, then reduce pressure below the triple point (611 Pa) and heat gently so ice sublimes (primary), then desorb bound water (secondary); vapor caught on a cold condenser; preserves heat-sensitive products (drugs, plasma, foods) but slow and costly.` },
        { id: "2018-19-Q3d", label: "(d)", marks: "10",
          topic: "evaporation", sub: "Entrainment separators in evaporators",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Entrainment Separator.`,
          solution: String.raw`**Why needed.** Vigorous boiling throws droplets of liquor into the vapor. Entrainment (i) loses product, (ii) contaminates the condensate or the next effect's steam chest (fouling, corrosion), and (iii) foaming organic liquors (milk, fatty acids) make it much worse. The vapor head therefore carries an **entrainment separator**: a disengaging space plus a device that removes droplets by impingement, change of direction or centrifugal force.

![Three entrainment separators: wire-mesh pad, chevron baffles and a tangential (cyclone) separator](fig/2018-19-Q3d-sol.svg)

| Type | Working principle | Notes |
|---|---|---|
| Disengaging space | vapor velocity in the head kept low so large drops fall back by gravity | needs height; first defence |
| Knitted wire-mesh pad (demister) | droplets impinge on the fine wires, coalesce and drain back | removes drops down to a few μm; 0.1–0.15 m thick; can foul with solids |
| Baffles / chevron (zig-zag) vanes | sharp changes of direction; drops hit the plates and drain | handles some solids; larger pressure drop than mesh |
| Centrifugal (cyclone) separator, tangential vapor inlet or vortex in the head | rotation throws drops to the wall | used for high vapor rates or foaming liquors; liquid returned to the body |

**Design rule:** size the vapor head on an allowable velocity $u = K\sqrt{(\rho_L - \rho_V)/\rho_V}$ (Souders–Brown, K ≈ 0.1 m/s for mesh pads); too high a velocity re-entrains liquid from the pad, too low wastes vessel size.`,
          answer: String.raw`Removes liquor droplets from evaporator vapor to prevent product loss and contaminated condensate; works by gravity disengagement, impingement on wire mesh, direction change on chevron baffles, or centrifugal action; sized on Souders–Brown velocity.` },
        { id: "2018-19-Q3e", label: "(e)", marks: "10",
          topic: "evaporation", sub: "Optimum boiling time between evaporator cleanings",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Optimum maintenance schedule of Evaporator.`,
          solution: String.raw`Scale builds up on the heating surface, so the overall coefficient falls with boiling time θ. The slides give the scale law

$$\frac{1}{U^2} = \frac{1}{U_0^2} + \beta\theta$$

with $U_0$ the clean coefficient and β a constant for the service. Shutting down to clean (boiling out with water or dilute acid/alkali, or drilling out tubes) takes a fixed time $\theta_c$. Long runs lose heat-transfer rate; short runs lose time in cleaning. Find the boiling time that maximises the **average** rate.

1. **Heat transferred in a run of length θ** (constant ΔT and area A):
$$\frac{dQ}{d\theta} = UA\,\Delta T = \frac{A\,\Delta T}{\sqrt{1/U_0^2 + \beta\theta}}$$
$$Q = \frac{2A\,\Delta T}{\beta}\left[\sqrt{\frac{1}{U_0^2} + \beta\theta} - \frac{1}{U_0}\right]$$
2. **Average rate over one cycle:** $\bar q = Q/(\theta + \theta_c)$. Set $d\bar q/d\theta = 0$:
$$\frac{dQ}{d\theta}(\theta + \theta_c) = Q$$
   Geometrically: the optimum is where a line from $(-\theta_c, 0)$ is **tangent** to the Q–θ curve.

![Optimum boiling time where the line from (−θc, 0) touches the cumulative-heat curve](fig/2018-19-Q3e-sol.svg)

3. **Solve.** Let $a = 1/U_0^2$, $f = \sqrt{a + \beta\theta}$. The condition becomes $\beta(\theta + \theta_c) = 2f(f - \sqrt a)$, which squares to $(\beta\theta - \beta\theta_c)^2 = 4a\beta\theta_c$:
$$\boxed{\theta_{opt} = \theta_c + \frac{2}{U_0}\sqrt{\frac{\theta_c}{\beta}}}$$
4. **Schedule:** boil for $\theta_{opt}$, then clean for $\theta_c$; number of cycles in a period $t$ is $t/(\theta_{opt} + \theta_c)$. A longer cleaning time or slower fouling (small β) means longer runs.

**Good maintenance practice besides scheduling:** high circulation velocity (forced circulation) to slow scaling, anti-scale additives/seeding, feed pre-treatment, regular inspection of tubes, steam traps, vents for non-condensables, vacuum system and entrainment separator.`,
          answer: String.raw`With 1/U² = 1/U₀² + βθ, Q = (2AΔT/β)[√(1/U₀² + βθ) − 1/U₀]; maximising Q/(θ + θc) gives θ_opt = θc + (2/U₀)√(θc/β) (tangent from (−θc, 0)).` },
        { id: "2018-19-Q3f", label: "(f)", marks: "10",
          topic: "compressors", sub: "Surge and its control in centrifugal compressors",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Surge control in centrifugal compressors.`,
          solution: String.raw`**Surge.** On each speed line the head (pressure ratio) of a centrifugal compressor rises as flow falls, up to a maximum. At lower flow the impeller can no longer produce the head the system demands: flow separates, momentarily reverses from the discharge, the pressure drops, flow re-establishes, and the cycle repeats every second or so. Surge causes violent vibration and noise, thrust-bearing and seal damage, high temperature and loss of throughput. The locus of the maximum-head points on the map is the **surge line**.

![Compressor map with surge line and control line; recycle (anti-surge) valve loop](fig/2018-19-Q3f-sol.svg)

**Control methods**

1. **Anti-surge recycle (spill-back):** measure flow (FT) and pressure ratio or head (PT); the anti-surge controller (UIC) compares the operating point with a **surge-control line** set about 10 % flow to the right of the surge line and opens a **recycle valve** from the cooled discharge back to suction, keeping the compressor flow above the minimum while the process takes less. Recycle must be cooled (after the aftercooler) or suction temperature climbs.
2. **Blow-off to atmosphere** instead of recycle, for air compressors.
3. **Speed control** (steam-turbine or variable-speed motor drive): lower speed moves the surge point to lower flow, allowing turndown with less recycle.
4. **Adjustable inlet guide vanes / suction throttling:** shift the map to lower flow at the same head; throttling the suction is cheaper than discharge throttling and moves the point away from surge.
5. **Operating practice:** avoid sudden closure of downstream valves, keep a non-return valve on the discharge, fast-acting valves and surge detection (rapid flow/pressure fluctuation, temperature rise at suction) with automatic opening of the recycle valve.`,
          answer: String.raw`Surge = unstable flow reversal at low flow left of the surge line; controlled by an anti-surge controller that opens a cooled recycle (or blow-off) valve before the operating point reaches a control line ~10 % from surge, helped by speed variation, inlet guide vanes or suction throttling.` }
      ] },
    { id: "2018-19-Q4", q: 4, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q4a", label: "(a)", marks: "15",
          topic: "size-reduction", sub: "Critical speed of a ball mill: derivation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`What is the speed beyond which grinding action in a ball mill is negligible? Establish the mathematical relationship of that speed.`,
          solution: String.raw`The speed is the **critical speed** $n_c$: above it the balls are carried round pinned to the shell by centrifugal force, they never fall, there is no relative motion, and grinding stops. Below it the balls are lifted and cascade or cataract onto the charge.

![Forces on a ball at the top of the mill](fig/2018-19-Q4a-sol.svg)

**Derivation.** Mill radius R, ball radius r; the ball centre moves on a circle of radius $R - r$ at angular speed $\omega = 2\pi n$.

1. **Forces on a ball at angle α from the vertical** (above the centre): centrifugal force outward $m\omega^2(R - r)$; the radial component of gravity, $mg\cos\alpha$, pulls it inward.
2. **Ball stays on the wall while** $m\omega^2(R - r) \ge mg\cos\alpha$. It leaves the wall where $\cos\alpha = \omega^2(R - r)/g$.
3. **Critical condition:** the ball is held even at the top, α = 0, $\cos\alpha = 1$:
$$\omega_c^2(R - r) = g \;\Rightarrow\; n_c = \frac{1}{2\pi}\sqrt{\frac{g}{R - r}}$$
4. **In practical units** with $D - d = 2(R - r)$:
$$n_c = \frac{60}{2\pi}\sqrt{\frac{2g}{D - d}} = \frac{42.3}{\sqrt{D - d}}\ \mathrm{rpm}\ (D, d\ \mathrm{in\ m}) = \frac{76.6}{\sqrt{D - d}}\ \mathrm{rpm}\ (\mathrm{ft})$$

**Comments.** The critical speed depends only on the mill and ball diameters (not on ball density or feed). Mills are run at **50–75 % of $n_c$** (slides), where the balls are carried well up the shell and fall onto the charge. For example a 1.2 m mill with 0.1 m balls has $n_c = 42.3/\sqrt{1.1} = 40.3$ rpm, so it would run at about 20–30 rpm. Rubber linings or lifter bars carry balls higher at a given speed.`,
          answer: String.raw`Critical speed: ω_c²(R − r) = g, n_c = (1/2π)√[g/(R − r)] = 42.3/√(D − d) rpm (m) = 76.6/√(D − d) rpm (ft); operate at 50–75 % of n_c.` },
        { id: "2018-19-Q4b", label: "(b)", marks: "15",
          topic: "mixing", sub: "Dimensional analysis: power number a function of Reynolds number",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Prove that Power number is a function of Reynold's Number for mechanically agitated adequately baffled vessel.`,
          solution: String.raw`**Variables.** For a given impeller type the power P depends on impeller diameter $D_a$, speed n, liquid density ρ and viscosity μ, gravity g (through the vortex) and the tank geometry, expressed by the shape factors $S_1 = D_a/D_t$, $S_2 = E/D_a$, $S_3 = L/D_a$, $S_4 = W/D_a$, $S_5 = J/D_t$, $S_6 = H/D_t$:
$$P = f(n, D_a, \rho, \mu, g, S_1, \ldots, S_6)$$

1. **Dimensions (M, L, T):** P: $ML^2T^{-3}$; n: $T^{-1}$; $D_a$: L; ρ: $ML^{-3}$; μ: $ML^{-1}T^{-1}$; g: $LT^{-2}$. Six dimensional variables, three dimensions → three π groups (plus the dimensionless shape factors). Repeating variables: n, $D_a$, ρ.
2. **π₁** $= P\,n^a D_a^b \rho^c$: M: $1 + c = 0$; L: $2 + b - 3c = 0$; T: $-3 - a = 0$ → $c = -1$, $b = -5$, $a = -3$:
$$\pi_1 = \frac{P}{\rho n^3 D_a^5} = N_P\quad(\text{in fps units } N_P = Pg_c/\rho n^3D_a^5)$$
3. **π₂** $= \mu\,n^a D_a^b \rho^c$: M: $1 + c = 0$; L: $-1 + b - 3c = 0$; T: $-1 - a = 0$ → $\pi_2 = \mu/(\rho n D_a^2) = 1/N_{Re}$, with $N_{Re} = D_a^2 n\rho/\mu$.
4. **π₃** $= g\,n^a D_a^b \rho^c$: $c = 0$, $b = -1$, $a = -2$ → $\pi_3 = g/(n^2D_a) = 1/N_{Fr}$, with $N_{Fr} = n^2D_a/g$.
5. **General relation:**
$$N_P = \psi(N_{Re}, N_{Fr}, S_1, S_2, \ldots, S_6)$$
6. **Geometrically similar systems:** all $S_i$ are equal, so they drop out: $N_P = \psi(N_{Re}, N_{Fr})$.
7. **Adequately baffled vessel:** baffles (four, $J/D_t$ = 1/12) prevent the central vortex. Gravity only matters through the vortex shape (the free surface), so without a vortex the Froude number has no effect:
$$\boxed{N_P = \psi(N_{Re})}$$

**Limits of the curve (MSH Fig. 9.13/9.14):** laminar range ($N_{Re} < 10$): $N_P = K_L/N_{Re}$, i.e. $P = K_L n^2 D_a^3\mu$, independent of baffles; turbulent baffled range ($N_{Re} > 10^4$): $N_P = K_T$ = constant (≈ 5–6 for a six-blade disc turbine), $P = K_T n^3 D_a^5\rho$, independent of viscosity. In unbaffled vessels at high Re the vortex forms and $N_P = \psi(N_{Re})\,N_{Fr}^m$.`,
          answer: String.raw`P = f(n, D_a, ρ, μ, g, S_i) → N_P = P/(ρn³D_a⁵) = ψ(Re, Fr, S₁…S₆); geometric similarity removes S_i, baffles remove the vortex so Fr drops out → N_P = ψ(Re) (= K_L/Re laminar, K_T turbulent).` },
        { id: "2018-19-Q4c", label: "(c)", marks: "30",
          topic: "size-reduction", sub: "Schematics of crushers and grinders with the forces they use",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw a schematic diagram of basic types of crushing and grinding equipment mentioning the type of forces involved in size reduction.`,
          solution: String.raw`**Forces used in size reduction** (slides): **compression** (particle squeezed between two rigid surfaces), **impact** (particle struck by a single rigid force at high speed), **attrition** (rubbing between particles or against a surface) and **shear/cutting** (particle–particle or edge action, tearing fibrous material).

![Jaw, gyratory, roll crushers, hammer mill, ball mill, attrition mill and fluid-energy mill with their dominant forces](fig/2018-19-Q4c-sol.svg)

| Machine | Duty | How it works | Main force |
|---|---|---|---|
| **Jaw (Blake) crusher** | primary, coarse (feed up to 1.8 m) | swing jaw reciprocates (250–400 strokes/min) against a fixed jaw; V-gap 20–30°; product leaves at the bottom gap | compression |
| **Gyratory crusher** | primary/secondary, high capacity (to 4500 t/h) | conical head gyrates inside a conical bowl ("circular jaw"); continuous discharge | compression |
| **Smooth crushing rolls** | secondary (75→12 mm) | two rolls rotate toward each other (50–300 rpm); one spring-mounted to pass tramp iron; reduction ratio 3–4 | compression |
| **Toothed rolls** | softer materials: coal, bone, shale | corrugated/toothed rolls | compression + shear + tearing |
| **Hammer mill / impactor** | intermediate grinding (product ≤ 25 mm) | swing hammers on a high-speed rotor strike the feed; grate retains oversize | impact (+ attrition) |
| **Ball / rod / pebble (tumbling) mill** | intermediate and fine grinding | rotating shell (50–75 % of critical speed) with grinding media that cascade and cataract | impact + attrition (+ compression) |
| **Roller / bowl mill** | coal pulverising | spring-loaded rolls on a rotating bowl, air classification | compression + attrition |
| **Attrition (disc) mill** | soft solids, fine | grooved discs, one or both rotating (350–7000 rpm) | shear / attrition |
| **Fluid-energy (jet) mill** | ultrafine (1–10 μm) | tangential steam/air jets; particles collide and rub; fines leave at the centre | particle–particle impact + attrition |

**Classification by size:** crushers (compression; coarse) → grinders (impact, attrition; intermediate and fine) → ultrafine grinders (hammer mill with internal classification, fluid-energy mill, agitated mills; attrition) → cutting machines (knife cutters for tough or fibrous material).`,
          answer: String.raw`Compression: jaw, gyratory, smooth-roll crushers; compression + shear: toothed rolls; impact: hammer mills; impact + attrition: ball/tumbling mills; attrition/shear: disc mills; particle impact/attrition: fluid-energy mills.` }
      ] },
    { id: "2018-19-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q5a", label: "(a)", marks: "15",
          topic: "dust-collection", sub: "Working of an electrostatic precipitator with sketch",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`How does electrostatic precipitator work? Explain with a neat sketch.`,
          solution: String.raw`An **electrostatic precipitator (ESP)** removes charged solid particles or liquid droplets from a gas by electrostatic force.

![Wire-and-plate ESP: corona wires charge the particles, which drift to earthed plates; rapped dust falls into hoppers](fig/2018-19-Q5a-sol.svg)

**Electrodes:** small-diameter **discharge electrodes** (wires, negative, 30–100 kV dc) hang midway between earthed **collecting electrodes** (plates or tubes, positive).

**Steps**
1. **Corona and ionisation:** the very high field near the thin wires ionises the gas (corona discharge); negative ions stream toward the plates.
2. **Particle charging:** field (ion-bombardment) charging dominates for particles > 0.5 μm; diffusion charging (thermal motion of ions) for particles < 0.1 μm.
3. **Migration:** the charged particle drifts across the gas flow to the collecting plate at the migration velocity w.
4. **Collection and removal:** particles lose charge on the plate and form a layer; plates are periodically **rapped** (dry ESP) or **flushed** with water (wet ESP), and the dust falls into hoppers.

**Performance (Deutsch–Anderson):**
$$\eta = 1 - \exp\left(-\frac{wA}{Q}\right)$$
with A the collecting area and Q the gas flow; efficiency rises with plate area and migration velocity.

**Advantages:** very high efficiency (99 %+) for fine particles, very low pressure drop, large gas volumes, dry or wet (mists), gas temperatures up to about 700 °C, low operating cost. **Disadvantages:** high capital cost and space, cannot remove gases, inflexible to changes, efficiency depends on particle resistivity (too low → re-entrainment; too high → back corona).`,
          answer: String.raw`Corona at high-voltage negative wires ionises the gas, ions charge the particles, the charged particles migrate to earthed plates, and rapping/flushing drops the dust into hoppers; η = 1 − exp(−wA/Q).` },
        { id: "2018-19-Q5b", label: "(b)", marks: "15",
          topic: "crystallization", sub: "Crystallization mechanism on solubility–supersolubility diagram; importance",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain the mechanism of crystallization with the help of a solubility curve. Why is crystallization important for chemical industries?`,
          solution: String.raw`**Mechanism.** Crystallization proceeds in two steps: **nucleation** (birth of new crystals) and **growth** of the nuclei. Both are driven by **supersaturation**, the excess of concentration over the solubility at the same temperature, $\Delta c = c - c^*$ (or $s = c/c^*$).

![Cooling path A→B→C enters the metastable zone and reaches the supersolubility curve, where nucleation starts; growth then brings the mother liquor back toward saturation (D)](fig/2018-19-Q5b-sol.svg)

1. **A → B (unsaturated):** a hot unsaturated solution is cooled; nothing happens until it reaches the **solubility (saturation) curve** at B.
2. **B → C (metastable zone):** the solution becomes supersaturated but does not nucleate spontaneously; existing crystals (seeds) grow here, and secondary nucleation by contact with crystals, the agitator or walls can occur. Well-run crystallizers operate in this zone.
3. **At C (supersolubility curve) → labile zone:** spontaneous (primary, homogeneous) nucleation occurs; a shower of nuclei forms.
4. **C → D (growth):** solute deposits on the nuclei and crystals grow; the concentration of the mother liquor falls back toward the solubility curve. At the end the magma is crystals + saturated mother liquor; the yield follows from the material balance between feed concentration and the solubility at the final temperature.

Supersaturation is produced by **cooling** (agitated tank, Swenson–Walker), **evaporation** (Krystal/Oslo, salting evaporators) or **adiabatic flash cooling** (vacuum, DTB crystallizers), or by adding a reactant or anti-solvent.

**Importance in chemical industries**
- Produces a **very pure** solid from an impure solution in one step (a well-formed crystal is nearly pure).
- Gives a product of controlled shape and **crystal size distribution** that is easy to filter, wash, dry, handle and package and does not cake (salt, sugar, fertilisers, MgSO₄·7H₂O, copperas).
- Requires far less energy than evaporating to dryness (latent heat of crystallization ≪ latent heat of vaporization) and works at low temperature for heat-sensitive solids.
- Used for separation/purification of pharmaceuticals, foods, fine chemicals, polymers and for recovering salts from waste streams.`,
          answer: String.raw`Supersaturation (cooling past the solubility curve into the metastable zone, then the labile zone beyond the supersolubility curve) causes nucleation, then growth returns the liquor toward saturation; crystallization gives pure, uniform, easily handled solids at low energy.` },
        { id: "2018-19-Q5c", label: "(c)", marks: "30",
          topic: "other", sub: "Steam turbines by steam path: schematics and selection",
          type: "sketch", syllabus: "out", repeats: [],
          text: String.raw`Classify turbines based on steam path arrangements and draw their schematics showing steam flow path. Also describe their selection criteria for process.`,
          solution: String.raw`*Steam turbines have no slides in the current course; answer from Perry/Lieberman (process drivers).*

**Classification by steam path (exhaust and extraction arrangement)**

![Straight condensing, back-pressure, extraction and induction turbines with their steam paths](fig/2018-19-Q5c-sol.svg)

| Type | Steam path | Use |
|---|---|---|
| **Straight condensing** | HP steam expands through all stages to a vacuum (2–4 in Hg abs) in a surface condenser | maximum power per kg steam; generators and large drivers where no process steam is needed |
| **Back-pressure (non-condensing)** | exhausts at a pressure above atmosphere into an LP steam header used for process heating | cogeneration; pump/compressor drives in plants with a large LP steam demand |
| **Extraction (bleeder)** | part of the steam is withdrawn between HP and LP sections; controlled (automatic) extraction holds the extraction pressure, uncontrolled bleed is for feedwater heating | supplies MP process steam and power from one machine; the rest condenses or exhausts at back-pressure |
| **Induction (mixed-pressure, admission)** | surplus LP steam is admitted to the later stages in addition to the HP inlet | uses waste/flash steam to make power |
| **Extraction–induction / reheat** | combinations; reheat between HP and IP casings in utility plants | large power plants |

Other classifications: by blading principle (impulse, reaction); by flow direction (axial, radial—Ljungström, tangential—Terry); by number of stages (single-stage, multistage) and casings; general-purpose (API 611) or special-purpose (API 612).

**Selection criteria for process service**
1. **Plant steam balance:** if LP steam is needed for heating, choose back-pressure or extraction; condensing only if exhaust heat has no use.
2. **Inlet and exhaust conditions** (pressure, temperature, superheat) and the resulting theoretical steam rate; available enthalpy drop.
3. **Power and speed of the driven machine:** small loads (< ~ 500–1000 kW) → single-stage general-purpose turbine (simple, cheap, lower efficiency); large compressors → multistage special-purpose turbine; turbines give variable speed directly (compressor capacity/surge control) without gears.
4. **Efficiency vs capital:** multistage and condensing machines save steam but cost more (condenser, cooling water, vacuum ejectors).
5. **Reliability:** turbine drivers for critical spares (cooling water, boiler feed, lube oil pumps) keep running during power failure.
6. **Control needs:** governor type, extraction-pressure control, overspeed trip.
7. **Steam quality, maintenance, space, noise** and available utilities (cooling water for a condenser).`,
          answer: String.raw`Steam-path types: straight condensing, back-pressure, extraction (controlled/uncontrolled), induction (mixed-pressure), combinations/reheat; select on plant steam balance, inlet/exhaust conditions and steam rate, power/speed (single- vs multistage), efficiency vs cost, reliability, control.` }
      ] },
    { id: "2018-19-Q6", q: 6, section: "B",
      stem: String.raw`Write short notes on:`,
      parts: [
        { id: "2018-19-Q6a", label: "(a)", marks: "12",
          topic: "size-reduction", sub: "Factors (feed properties) affecting size reduction",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Factors affecting size reduction.`,
          solution: String.raw`The choice of machine and the energy used depend on the product wanted, the quantity and size of feed, and the **properties of the feed** (slides, C&R Vol. 2 ch. 2):

| Factor | Effect |
|---|---|
| **Hardness** (Mohs scale: talc 1 … diamond 10; 1–4 soft) | harder material needs more power and wears the machine; use low-speed machines and pressure lubrication for hard, abrasive solids |
| **Structure** | granular solids (coal, ores, rock) break by compression/impact; fibrous materials need tearing or cutting |
| **Moisture content** | 5–50 % moisture makes material cake and ball up; grind below or above this range (wet grinding saves 20–30 % power) |
| **Crushing strength** | power is roughly proportional to crushing strength; apply force only slightly above it |
| **Friability** | tendency to fracture during handling; crystalline solids break on cleavage planes, and smaller particles are stronger (flaws eliminated) |
| **Stickiness** | sticky material clogs; use machines with easily cleaned surfaces |
| **Soapiness** (low surface friction) | makes crushing more difficult |
| **Explosiveness** | grind wet or in inert atmosphere |
| **Dustiness / toxicity** | closed systems so harmful dust cannot escape |
| **Bulk density** | batch mills are limited by volume, so output depends on bulk density |
| **Feed/product size ratio** | large reduction ratios need several stages (crush, coarse grind, fine grind) |
| **Softening temperature, heat sensitivity** | waxy or fatty substances soften from heat generated; cool the mill |
| **Abrasiveness, toughness** | limit machine choice; metal contamination (> 0.1 %) from very abrasive solids |

**Operating factors:** method of feeding (free crushing vs choke feeding), open or closed circuit (removing fines saves energy), wet or dry grinding, residence time and rate of force application.`,
          answer: String.raw`Hardness, structure, moisture (5–50 % cakes), crushing strength, friability, stickiness, soapiness, explosiveness, dustiness, bulk density, reduction ratio, softening temperature, abrasiveness/toughness, plus feeding method, open/closed circuit and wet/dry operation.` },
        { id: "2018-19-Q6b", label: "(b)", marks: "12",
          topic: "other", sub: "Velocity, pressure and pressure–velocity compounding of turbines",
          type: "sketch", syllabus: "out", repeats: [],
          text: String.raw`Compounding of steam turbines.`,
          solution: String.raw`*Not in the current slides; answer from turbine textbooks.*

If the whole enthalpy drop of steam (say 40 bar → 0.1 bar) is converted in a single nozzle, the jet velocity is about 1200–1500 m/s. For good blade efficiency the blade speed must be about half the jet speed (impulse), which gives impractically high rotor speeds (De Laval turbine, ~30,000 rpm) and large leaving losses. **Compounding** splits the energy conversion over several rows of blades so that blade speed and rotational speed are reasonable.

![Pressure (solid) and absolute velocity (dashed) through velocity-, pressure- and pressure–velocity-compounded turbines](fig/2018-19-Q6b-sol.svg)

1. **Velocity compounding (Curtis stage):** one set of nozzles expands the steam through the whole pressure drop to a high velocity. The velocity is absorbed in two or three rows of moving blades with **fixed guide blades** between them that redirect the steam without changing pressure. Short, cheap, few stages, but friction losses are high and efficiency lower; used as the first (control) stage of many turbines.
2. **Pressure compounding (Rateau stage):** the pressure drop is split among several stages, each a row of nozzles followed by a row of moving blades. Each nozzle gives only a moderate velocity, so blade speed is low and efficiency high; long machine with many diaphragms and stages.
3. **Pressure–velocity compounding:** several Curtis stages in series; each nozzle row takes part of the pressure drop and its velocity is absorbed in two moving rows. Fewer stages than pure pressure compounding, handles large drops compactly.

(Reaction turbines are inherently pressure-compounded, since the pressure falls in both fixed and moving rows.)`,
          answer: String.raw`Splits the steam energy over several rows to limit blade speed: velocity compounding (one nozzle row, 2–3 moving rows with guide blades — Curtis), pressure compounding (nozzle + moving row repeated — Rateau), pressure–velocity compounding (Curtis stages in series).` },
        { id: "2018-19-Q6c", label: "(c)", marks: "12",
          topic: "crystallization", sub: "Draft-tube-baffle (DTB) crystallizer",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draft tube baffle crystallizer.`,
          solution: String.raw`![DTB crystallizer: draft tube with propeller, skirt baffle forming a settling zone, fines removal and dissolving loop, vapor to vacuum](fig/2018-19-Q6c-sol.svg)

**Construction**
- Vacuum body with a central **draft tube**; a slow, large **propeller agitator** at the bottom circulates magma **up the draft tube** to the boiling surface and **down the annulus**.
- A cylindrical **skirt baffle** around the draft tube forms an outer **settling (classifying) zone** where the upward velocity is low.
- A **fines-removal loop**: liquor with small crystals is drawn from the settling zone, heated (or diluted) to **dissolve the fines**, mixed with the feed and returned to the bottom of the draft tube.
- Vapor leaves the top to a condenser/ejector system; **product magma** is withdrawn from the bottom (sometimes through an elutriation leg).

**Working principle**
1. Magma reaches the surface, where the pressure is low; it boils (flash/evaporative cooling) and becomes **slightly supersaturated** in a thin layer.
2. The supersaturation is relieved by **growth** on the large circulating crystal mass as the magma descends; the high crystal density keeps it within the metastable zone, so little spontaneous nucleation occurs.
3. Excess nuclei (fines) settle slowly in the baffle zone and are removed and dissolved, so nucleation is controlled and the remaining crystals grow larger.

**Salient features:** large, uniform crystals with controlled CSD; high circulation with low shear (little secondary nucleation, crystal breakage); minimal scaling (boiling at the surface, not on heating tubes); operates continuously under vacuum; widely used for KCl, (NH₄)₂SO₄, NaCl and organic crystals where excessive nucleation would otherwise occur.`,
          answer: String.raw`Vacuum crystallizer with propeller-driven draft tube (magma up to the boiling surface, down the annulus), skirt baffle forming a settling zone, fines withdrawn and dissolved and returned with feed; gives large uniform crystals, low nucleation and little scaling.` },
        { id: "2018-19-Q6d", label: "(d)", marks: "12",
          topic: "dust-collection", sub: "Fabric filtration: mechanisms, types and design",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Fabric filtration.`,
          solution: String.raw`**Fabric filtration** is a physical separation in which dusty gas passes through a porous fabric that retains the solids; the cake is removed periodically (batch or semi-continuous).

![Pulse-jet baghouse: dust collects on the outside of the bags, compressed-air pulses dislodge it into the hopper](fig/2018-19-Q6d-sol.svg)

**Collection mechanisms:** inertial impaction (particles > ~1 μm leave the streamlines and hit fibres), interception (particle following a streamline touches a fibre), diffusion (Brownian motion; submicron). After the first minutes the **dust cake** itself becomes the main filter, so efficiency exceeds 99 %; particles of 0.1–1 μm are the hardest to catch.

**Classification** (slides) by: (1) cleaning energy — high energy (pulse-jet, felt bags, higher A/C ratio) or low energy (shaker, reverse air; woven bags); (2) fabric — felt (true filter medium) or woven (support for the cake); (3) cycle — continuous (compartments cleaned in turn) or intermittent (operate 0.25–4 h, clean ~5 min); (4) service — particulate, or gaseous control by adsorption/chemisorption (lime for SO₂, activated carbon for odours, alumina for Cl₂); (5) application — temperature, loading, moisture, pressure.

**Design variables:** filter material (glass fibre up to about 288 °C), cleaning method, **air-to-cloth ratio** (actual gas flow / net cloth area: 1–3 ft/min shaker, ~6 ft/min and more pulse-jet), net cloth area $A_{nc} = Q/(A/C)$, forced- or induced-draft baghouse, materials of construction (carbon steel, stainless when SO₃ or condensation), pressure drop 5–20 in. water.

**Operating precautions:** keep gas above its dew point (wet dust blinds bags); reduce heavy loading with a cyclone pre-cleaner; control humidity and temperature; replace leaking bags.`,
          answer: String.raw`Dusty gas passes through fabric bags; impaction, interception and diffusion, then the dust cake, give > 99 % collection; bags cleaned by shaking, reverse air or pulse jet; designed on air-to-cloth ratio, fabric, cleaning method, ΔP 5–20 in. water, kept above dew point.` },
        { id: "2018-19-Q6e", label: "(e)", marks: "12",
          topic: "solids-handling", sub: "Screw conveyor: construction, capacity, limits",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Screw conveyor.`,
          solution: String.raw`![Screw conveyor: helical flight on a shaft rotating in a U-trough](fig/2018-19-Q6e-sol.svg)

**Construction:** a helical **flight (screw)** on a shaft, supported by end bearings and intermediate hangers, rotating in a U-shaped (or circular, square) **trough** with a cover; feed inlet spout, discharge spout, drive at one end.

**Mechanism:** rotation of the helix pushes the solids along the trough; the material slides on the trough and does not rotate with the screw (gravity and trough friction).

**Capacity**
$$C = \frac{\pi}{4}(D_s^2 - D_p^2)\,p\,K\,N$$
($D_s$ screw diameter, $D_p$ shaft/pipe diameter, p pitch, K trough loading fraction, N rpm). Slides in inch units: $C/\mathrm{rpm} = 0.7854(D_s^2 - D_p^2)PK\cdot 60/1728$ ft³/h.

**Design guidelines (slides, Shamlou):**
- Particle size smaller than the gap between flight tip and casing; feed temperature up to about 120 °C; distance usually ≤ 100 m.
- Most duties: single screw, continuous flight, pitch/diameter = 1. Very free-flowing materials: p/D ≈ 1.5 horizontal, 0.5–0.67 vertical; lumpy feeds: tapered screw with p/D 1.0–0.67.
- Inclination above about 30°: use a circular casing (screw elevator).
- Variable-pitch or tapered screws as feeders draw evenly from the whole length of a hopper.
- Power depends on length, screw geometry, rpm, degree of fill and bulk properties.

**Advantages:** simple, compact, cheap, totally enclosed (dust-free), can mix, heat/cool (jacketed troughs) or meter while conveying. **Limitations:** high power per tonne and wear for abrasive solids, degradation of fragile materials, short distances only.`,
          answer: String.raw`Helical flight rotating in a trough pushes solids; capacity C = (π/4)(D_s² − D_p²) p K N; p/D ≈ 1 normally (1.5 free-flowing horizontal), ≤ 120 °C, ≤ 100 m, circular casing above 30°; enclosed and cheap but power-hungry and abrasive-sensitive.` }
      ] }
  ]
});
