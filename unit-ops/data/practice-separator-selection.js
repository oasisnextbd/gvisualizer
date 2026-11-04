QB.paper({ year: "Practice", set: "Particle size & separator selection", date: "", marks: 0, practice: true,
  rules: String.raw`Mechanical separation principles, particle size and concentration, and preliminary separator selection with the Sylvan chart: the slide workout (lime kiln, Ludwig Example 4-1) and slide questions, Ludwig chapter 4 tables and MSH differential settling, and exam-style Sylvan-chart, emission-limit and selection questions.`,
  questions: [
    { id: "practice-separator-selection-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw`The concentration and mean particle size of the particles leaving a lime kiln are 7.5 grains/ft³ and 9 microns. Use the Sylvan chart (Ludwig Fig. 4-3, shown on the slides).`,
      parts: [
        { id: "practice-separator-selection-P1a", label: "(a)", marks: "", topic: "separator-selection",
          sub: "Lime kiln dust 7.5 gr/ft³, 9 µm: first collector from the Sylvan chart", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Mech. sep. Lecture 2_1, "Workout Example" and "Answer" slides (Sylvan chart)`,
          text: String.raw`Recommend suitable separator(s) for this operation and find the concentration leaving the first collector.`,
          solution: String.raw`**Given:** $c_0 = 7.5$ gr/ft³, mean size $d_0 = 9$ µm (kiln range 3–10 gr/ft³, 5–10 µm).

**Find:** suitable collectors, the efficiency of the chosen pre-collector and the effluent concentration.

**Assumptions:** "ordinary industrial dust" size deviation; average line of each efficiency band.

1. **Locate the inlet point:** on the Sylvan chart mark 7.5 gr/ft³ on the concentration scale (upper part, "dust collecting range") and 9 µm on the mean-particle-size axis. The point lies inside the "driers, kilns, coolers" band, so the chart confirms the source type.

2. **Drop vertically to the efficiency curves** (lower part of the chart, read on the right-hand "scale of efficiencies"):

| Collector | Efficiency at 9 µm |
|---|---|
| Low-resistance cyclone | < 50% |
| High-efficiency centrifugal (cyclone) | 60–80% |
| Wet collector, fabric (cloth) arrester, electrostatic precipitator | 96–97% plus |

3. **Choose the arrangement:** the last three collectors give the required cleaning but are expensive and are normally protected by a pre-cleaner at this heavy loading. A low-resistance cyclone is useless at 9 µm, so the **high-efficiency cyclone** is the pre-collector. Using the average line of its band, $\eta_1 = 70\%$.

4. **Effluent concentration:**
$$c_1 = c_0(1 - \eta_1) = 7.5(1 - 0.70) = 2.25\ \mathrm{gr/ft^3}$$

**Result:** high-efficiency cyclone (≈ 70%) as pre-cleaner, leaving 2.25 gr/ft³; a wet collector, fabric arrester or ESP (> 96%) is then needed as the final collector.

> Unit check: 7.5 gr/ft³ = 7.5 × 64.8 mg / 0.02832 m³ = 17.2 g/m³, a heavy kiln loading.`,
          answer: String.raw`At 9 µm: LR cyclone < 50%, HE cyclone 60–80%, wet/fabric/ESP 96%+. Use a HE cyclone (70%) as pre-collector: 7.5(1 − 0.70) = 2.25 gr/ft³, followed by a final high-efficiency collector.` },
        { id: "practice-separator-selection-P1b", label: "(b)", marks: "", topic: "separator-selection",
          sub: "Lime kiln train: effluent mean size and final collector (Ludwig Ex. 4-1)", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 4-1 "Basic Separator Type Selection" (pp. 225–228), the full version of the slide example`,
          text: String.raw`Find the mean particle size leaving the high-efficiency cyclone, select the second collector, and find the final concentration and mean particle size. What is the overall efficiency of the train?`,
          solution: String.raw`**Given:** after the HE cyclone $c_1 = 2.25$ gr/ft³ (part a); inlet point (7.5 gr/ft³, 9 µm).

**Find:** $d_1$, the second collector, $c_2$, $d_2$, $\eta_{overall}$.

**Assumptions:** size deviation of "ordinary industrial dust" (deviation not measured).

1. **Deviation line:** through the inlet point draw a line parallel to the "ordinary industrial dust" lines in the deviation box (top right of the chart). Moving along it, a collector that removes mass also removes the coarse end, so the mean size drops as the concentration drops.

2. **Mean size after the HE cyclone:** where the line cuts the horizontal 2.25 gr/ft³, drop vertically: $d_1 \approx 6.0$ µm.
   (The line has a slope of about 3 on the log–log grid, $c \propto d^3$: $9(2.25/7.5)^{1/3} = 6.0$ µm, the same value.)

3. **Second collector:** from (2.25 gr/ft³, 6 µm) drop to the efficiency curves: a second HE cyclone is < 50% efficient; a wet collector, fabric arrester or ESP is not less than 93%. Ludwig selects a good **wet collector at 98%**.

4. **Final concentration:**
$$c_2 = 2.25(1 - 0.98) = 0.045\ \mathrm{gr/ft^3}$$

5. **Final mean size:** where the deviation line cuts 0.045 gr/ft³: $d_2 \approx 1.6$ µm (check: $6.0(0.045/2.25)^{1/3} = 1.63$ µm).

6. **Overall efficiency:**
$$\eta = 1 - (1 - 0.70)(1 - 0.98) = 1 - 0.006 = 99.4\%$$
   Check: $1 - 0.045/7.5 = 0.994$. The stack loading is 0.045 gr/ft³ ≈ 103 mg/m³.

**Result:** HE cyclone (70%, 2.25 gr/ft³, 6.0 µm) → wet collector (98%, 0.045 gr/ft³, 1.6 µm); overall 99.4%.

> Exam tip: write the three numbers of each stage (concentration, mean size, efficiency) in a small table next to the chart; examiners mark the path 1 → 2 → 3 drawn on the attached chart.`,
          answer: String.raw`d after HE cyclone ≈ 6.0 µm; second stage wet collector 98% → 0.045 gr/ft³, d ≈ 1.6 µm; overall 99.4%.` } ] },

    { id: "practice-separator-selection-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-separator-selection-P2", label: "", marks: "", topic: "separator-selection",
        sub: "Mechanical separation techniques: feed, separating agent and principle", type: "theory", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Mech. sep. Lecture 1 (slides 3–21), including the slide question "Can you suggest a name of centrifuge that you used in daily life?"`,
        text: String.raw`For each of the following, state the feed, the separating agent, the products and the principle of separation: settling tank, centrifuge, cyclone, mesh demister, fabric filter, centrifugal filter, flotation, scrubber, electrostatic precipitator and magnetic separator. Group them by the property difference they exploit. Name a centrifuge you use in daily life.`,
        solution: String.raw`Mechanical separation applies only to **heterogeneous** (poly-phase) mixtures: the phases are split into fractions of different mechanical characteristics without a phase change.

| Technique | Feed | Separating agent | Products | Principle |
|---|---|---|---|---|
| Settling / sedimentation / decantation | liquid + solid or immiscible liquid | gravity | clear liquid + sludge (or two liquids) | density difference |
| Centrifuge | liquid + solid or immiscible liquid | centrifugal force | as above, faster and finer | density difference |
| Cyclone | gas + solid or liquid | flow (inertia, spinning gas) | clean gas + dust/liquid | density difference (inertia) |
| Impingement (mesh demister) | gas + liquid droplets | pressure drop + wire mesh | gas + liquid | droplets larger than the openings strike and wet the wires |
| Fabric (bag/cartridge) filter | gas + dust | pressure drop + fabric | clean gas + dust | particles larger than the pores (and the dust cake) |
| Centrifugal filtration | liquid + solid | centrifugal force + filter medium | filtrate + cake | size larger than the medium pores |
| Flotation | powdered solids in liquid | surfactants + rising air bubbles | two solids + clear liquid | bubbles attach preferentially to one solid (surface property) |
| Scrubbing | solids (or gases) in gas | water/oil | clean gas + slurry | wettability of the particles |
| Electrostatic precipitation | gas + fine solids/mists | electric field | clean gas + dust | charge acquired by the particles |
| Magnetic separation | mixed powdered solids | magnetic field | two solids | magnetic attraction |

**Grouping by property:**
- density: settling tank, centrifuge, cyclone;
- size: screens, filters, fabric filters, centrifugal filters, mesh pads;
- surface properties (wettability): flotation, scrubbing;
- electrical charge: ESP;
- magnetic properties: magnetic separator.

**Centrifuge in daily life:** the spin cycle of a washing machine (perforated drum: centrifugal filtration of water from clothes); also a salad spinner, a cream separator (disk centrifuge separating cream from milk) and the blood/urine centrifuge in a clinical laboratory.`,
        answer: String.raw`Density: settler, centrifuge, cyclone; size: filters, fabric filter, mesh; surface: flotation, scrubber; charge: ESP; magnetism: magnetic separator. Daily-life centrifuge: washing-machine spin dryer (also cream separator, salad spinner).` } ] },

    { id: "practice-separator-selection-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-separator-selection-P3a", label: "(a)", marks: "", topic: "separator-selection",
          sub: "Non-spherical particle size and the standard PSD measurement technique", type: "theory", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Mech. sep. Lecture 2_1, slide questions "What about shapes other than spherical?" and "Can you suggest most widely used technique for determining particle size distribution?"`,
          text: String.raw`Particle size is quoted as the average diameter. (i) How is the "diameter" of a non-spherical particle defined? (ii) Which technique is most widely used to determine a particle size distribution? Name two others.`,
          solution: String.raw`### (i) Non-spherical particles
A non-spherical particle is described by an **equivalent diameter**, the diameter of a sphere that behaves the same way in the property that matters for the process:
- **Volume-equivalent diameter** $D_v$: sphere of the same volume.
- **Surface (or volume–surface, Sauter) diameter**: sphere with the same surface-to-volume ratio, $D_s = 6/(a\,\rho)$ per unit mass. Combined with the **sphericity** $\Phi_s = 6/(D_v\,s_p/v_p)$ (1 for a sphere, < 1 otherwise; crushed solids ≈ 0.6–0.8).
- **Stokes (aerodynamic) diameter**: sphere with the same terminal settling velocity. This is the most useful one for gravity settlers, cyclones and scrubbers because these devices act on the settling behaviour.
- **Sieve diameter**: the opening of the finest screen the particle passes; **projected-area diameter**: from a microscope image.

The equivalent diameter must match the separation mechanism; plates and needles need two dimensions.

### (ii) PSD measurement
- **Laser diffraction** (light scattering) is the most widely used method today: fast, 0.05–3000 µm, gives a volume distribution.
- **Sieve (screen) analysis** with Tyler/ASTM screens: the classical method for particles above about 40 µm (325 mesh = 43 µm).
- Others: sedimentation/elutriation (Stokes diameters, e.g. Ludwig Table 4-2), microscopy and image analysis, electrical sensing zone (Coulter counter), cascade impactors for airborne dusts, dynamic light scattering for submicron sizes.`,
          answer: String.raw`(i) Use an equivalent-sphere diameter (volume, surface/Sauter, Stokes/aerodynamic, sieve) plus sphericity. (ii) Laser diffraction is most widely used; also sieving, sedimentation/elutriation, microscopy, Coulter counter, impactors.` },
        { id: "practice-separator-selection-P3b", label: "(b)", marks: "", topic: "separator-selection",
          sub: "Units of particle size and concentration: microns, grains per cubic foot", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Mech. sep. Lecture 2_1, "Particle size and concentration" slide (1 µ = 10⁻⁶ m = 1/25,400 in; 1 grain = 1/7000 lb)`,
          text: String.raw`(i) Express 1 µm in inches and 1 mµ in µm and nm. (ii) Convert a dust loading of 7.5 grains/ft³ to g/m³ and an emission limit of 50 mg/m³ to grains/ft³. (iii) A kiln exhausts 20,000 ft³/min at 7.5 grains/ft³. How many lb/h and kg/h of dust leave the kiln?`,
          solution: String.raw`**Given:** 1 µ = 10⁻⁶ m; 1 in = 0.0254 m; 1 grain = 1/7000 lb = 64.80 mg; 1 ft³ = 0.028317 m³.

1. **Size units:**
$$1\ \mu\mathrm{m} = \frac{10^{-6}}{0.0254} = 3.94\times10^{-5}\ \mathrm{in} = \frac{1}{25{,}400}\ \mathrm{in}$$
$$1\ \mathrm{m}\mu = 10^{-9}\ \mathrm{m} = 10^{-3}\ \mu\mathrm{m} = 1\ \mathrm{nm}$$

2. **Loading conversion:** 1 gr/ft³ = 64.80 mg / 0.028317 m³ = 2.288 g/m³, so
$$7.5\ \mathrm{gr/ft^3} = 7.5 \times 2.288 = 17.2\ \mathrm{g/m^3}$$
$$50\ \mathrm{mg/m^3} = \frac{0.050}{2.288} = 0.0219\ \mathrm{gr/ft^3} = 21.9\ \mathrm{gr/1000\ ft^3}$$
   (Emission limits fall in the "gr/1000 ft³" air-filter range at the bottom of the Sylvan chart.)

3. **Mass rate:**
$$\dot m = \frac{7.5 \times 20{,}000 \times 60}{7000} = 1286\ \mathrm{lb/h} = 583\ \mathrm{kg/h}$$

**Result:** 1 µm = 1/25,400 in; 1 mµ = 1 nm; 7.5 gr/ft³ = 17.2 g/m³; 50 mg/m³ = 0.022 gr/ft³; 1286 lb/h (583 kg/h) of dust.`,
          answer: String.raw`1 µm = 3.94×10⁻⁵ in; 1 mµ = 10⁻³ µm = 1 nm; 7.5 gr/ft³ = 17.2 g/m³; 50 mg/m³ = 0.0219 gr/ft³; 1286 lb/h = 583 kg/h.` } ] },

    { id: "practice-separator-selection-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-separator-selection-P4", label: "", marks: "", topic: "separator-selection",
        sub: "Cement-kiln dust analysis: Stokes sizes from elutriation data, median size", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Table 4-2 "Typical Dust Size Analysis" (cement kiln exhaust) and Table 4-3 (screen sizes), with the Sylvan chart Fig. 4-3`,
        text: String.raw`Ludwig Table 4-2 gives for cement kiln exhaust dust: specific gravity 2.76; screen analysis (percent passing) 100 mesh 99.6, 200 mesh 92.2, 325 mesh 80.8, 400 mesh 73.2; elutriation analysis in air (percent under terminal velocity) 320 in./min 78.0, 80 in./min 61.0, 20 in./min 40.8, 5 in./min 23.0.

(a) Convert the elutriation velocities to Stokes diameters (air at 20°C, μ = 1.81×10⁻⁵ Pa·s) and check that Stokes' law applies.
(b) Estimate the mass median diameter and compare the elutriation and screen data.
(c) Using the median size, which collectors on the Sylvan chart would remove more than 90% of this dust?`,
        solution: String.raw`**Given:** $\rho_p = 2760$ kg/m³; air μ = 1.81×10⁻⁵ Pa·s, ρ ≈ 1.2 kg/m³; Tyler openings (Ludwig Table 4-3): 100 mesh 146 µm, 200 mesh 74 µm, 325 mesh 43 µm, 400 mesh ≈ 37 µm.

**Find:** Stokes diameters, median size, suitable collectors.

**Assumptions:** spheres, free settling, $\rho_p \gg \rho$.

1. **Stokes diameter for a terminal velocity $u_t$:**
$$D_p = \sqrt{\frac{18\mu u_t}{g\rho_p}}$$
   For 320 in./min: $u_t = 320 \times 0.0254/60 = 0.1355$ m/s,
$$D_p = \sqrt{\frac{18(1.81\times10^{-5})(0.1355)}{9.81 \times 2760}} = 40.4\ \mu\mathrm{m}$$
   Since $D_p \propto \sqrt{u_t}$, each fourfold drop in velocity halves the size:

| $u_t$, in./min | $u_t$, m/s | $D_p$, µm | $Re_p = \rho u_t D_p/\mu$ | % under |
|---|---|---|---|---|
| 320 | 0.1355 | 40.4 | 0.36 | 78.0 |
| 80 | 0.0339 | 20.2 | 0.045 | 61.0 |
| 20 | 0.00847 | 10.1 | 0.0057 | 40.8 |
| 5 | 0.00212 | 5.05 | 0.0007 | 23.0 |

   All $Re_p < 1$ (Stokes' law valid; Cunningham correction negligible above 3 µm).

2. **Median size:** 50% lies between 10.1 µm (40.8%) and 20.2 µm (61.0%). Interpolating on a log size scale:
$$D_{50} = 10.1 \times 2^{(50-40.8)/(61.0-40.8)} = 10.1 \times 2^{0.455} = 13.8\ \mu\mathrm{m} \approx 14\ \mu\mathrm{m}$$

3. **Consistency check:** the screen data give 80.8% below 43 µm (325 mesh); the elutriation data give 78.0% below 40.4 µm. The two analyses agree.

4. **Selection (Sylvan chart, vertical line at 14 µm):** low-resistance cyclone well below 90% (about 50%); high-efficiency cyclone about 90–95%; wet collector, cloth arrester and ESP above 98%. With 23% of the mass below 5 µm, a cyclone alone leaves most of the fines, so the usual cement-kiln train is a cyclone pre-cleaner followed by an ESP or fabric filter (Ludwig Table 4-5, cement kiln: "considerable" use of high-voltage electrostatic, "frequent" high-efficiency centrifugals).

**Result:** Stokes sizes 40.4, 20.2, 10.1, 5.05 µm; mass median ≈ 14 µm; > 90%: high-efficiency cyclone (marginal), wet collector, fabric arrester, ESP.`,
        answer: String.raw`D_p = √(18μu_t/gρ_p): 40.4, 20.2, 10.1, 5.05 µm (Re < 0.4, Stokes valid); D₅₀ ≈ 14 µm; screen (80.8% < 43 µm) agrees with elutriation (78% < 40 µm). > 90%: HE cyclone (≈ 90–95%), wet collector, cloth arrester, ESP (> 98%).` } ] },

    { id: "practice-separator-selection-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-separator-selection-P5", label: "", marks: "12", topic: "separator-selection",
        sub: "Stoker fly ash 4 gr/ft³, 20 µm: collector train for a 0.1 gr/ft³ limit", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Method of Ludwig Example 4-1 / Lecture 2_1 workout; own numbers`,
        text: String.raw`Flue gas from a stoker-fired boiler (50,000 ft³/min) carries fly ash at 4 grains/ft³ with a mean particle size of 20 microns. The permitted stack loading is 0.1 grain/ft³.

(a) Using the Sylvan chart, can a low-resistance cyclone or a high-efficiency cyclone alone meet the limit?
(b) Propose a two-stage train, and find the concentration and mean particle size after each stage and the overall efficiency.
(c) How much ash (lb/h) is collected and how much is emitted?`,
        solution: String.raw`**Given:** $c_0 = 4$ gr/ft³, $d_0 = 20$ µm, Q = 50,000 ft³/min, limit 0.1 gr/ft³.

**Find:** feasibility of single cyclones; train; $c$, $d$, $\eta$; collected and emitted ash.

**Assumptions:** "ordinary industrial dust" deviation, which on the log–log chart behaves as $c \propto d^3$ (slope of Ludwig's example: 7.5 → 2.25 gr/ft³ at 9 → 6 µm); average lines of the efficiency bands.

1. **Required efficiency:** $\eta_{req} = 1 - 0.1/4 = 97.5\%$.

2. **(a) Vertical line at 20 µm:** low-resistance cyclone ≈ 60–70% (take 65%); high-efficiency cyclone ≈ 95–98% (take 97%).
   - LR cyclone: $c = 4(0.35) = 1.4$ gr/ft³, far above the limit.
   - HE cyclone: $c = 4(0.03) = 0.12$ gr/ft³, still above 0.1 gr/ft³ (and the efficiency is at the edge of its band, so no margin). Neither works alone.

3. **(b) Train: HE cyclone → fabric filter.** After the HE cyclone, along the deviation line:
$$d_1 = 20\left(\frac{0.12}{4}\right)^{1/3} = 6.2\ \mu\mathrm{m}$$
   From (0.12 gr/ft³, 6.2 µm) drop to the curves: cloth arrester ≈ 99% (wet collector ≈ 98%, ESP ≈ 98%). Choose the **fabric filter** (dry ash, no sludge):
$$c_2 = 0.12(1 - 0.99) = 0.0012\ \mathrm{gr/ft^3}, \qquad d_2 = 6.2\left(\frac{0.0012}{0.12}\right)^{1/3} = 1.3\ \mu\mathrm{m}$$
$$\eta = 1 - (0.03)(0.01) = 99.97\%$$

| Stage | η | c out, gr/ft³ | mean size out, µm |
|---|---|---|---|
| inlet | – | 4.0 | 20 |
| HE cyclone | 97% | 0.12 | 6.2 |
| fabric filter | 99% | 0.0012 | 1.3 |

4. **(c) Mass rates** ($\dot m = cQ \times 60/7000$ lb/h):
$$\dot m_{in} = \frac{4 \times 50{,}000 \times 60}{7000} = 1714\ \mathrm{lb/h}, \qquad \dot m_{out} = \frac{0.0012 \times 50{,}000 \times 60}{7000} = 0.51\ \mathrm{lb/h}$$
   Collected: 1714 − 0.5 ≈ 1714 lb/h (1663 lb/h in the cyclone, 51 lb/h in the bags).

**Result:** neither cyclone alone meets 0.1 gr/ft³ (LR 1.4, HE 0.12 gr/ft³). HE cyclone + fabric filter: 0.12 gr/ft³ (6.2 µm) → 0.0012 gr/ft³ (1.3 µm), η = 99.97%, 0.5 lb/h emitted.

> The cyclone takes 97% of the load off the bags, so the filter can run at a normal air-to-cloth ratio with long cleaning intervals; the fabric must suit the flue-gas temperature (glass fibre up to about 290°C) and be kept above the acid dew point.`,
        answer: String.raw`η_req = 97.5%. LR cyclone 65% → 1.4 gr/ft³; HE cyclone 97% → 0.12 gr/ft³ (> limit). HE cyclone + fabric filter (99%): 0.12 gr/ft³, 6.2 µm → 0.0012 gr/ft³, 1.3 µm; η = 99.97%; 1714 lb/h in, 0.5 lb/h out.` } ] },

    { id: "practice-separator-selection-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-separator-selection-P6", label: "", marks: "15", topic: "separator-selection",
        sub: "Cement kiln 15 g/Nm³ at 9 µm: trains meeting a 50 mg/Nm³ limit", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Sylvan chart readings of the slide workout (9 µm, 6 µm); series-collector efficiency; own numbers`,
        text: String.raw`A cement kiln emits dust of mass mean size 9 µm at 15 g/Nm³. The new emission limit is 50 mg/Nm³.

(a) Express the inlet loading in grains/ft³ and find the overall collection efficiency required.
(b) Using the Sylvan chart readings at 9 µm and 6 µm, evaluate these options: (i) fabric filter alone, (ii) ESP alone, (iii) high-efficiency cyclone + wet collector, (iv) high-efficiency cyclone + ESP, (v) high-efficiency cyclone + fabric filter. Which meet the limit?
(c) Recommend one train and justify it.`,
        solution: String.raw`**Given:** $c_0 = 15$ g/Nm³, $d_0 = 9$ µm, limit 50 mg/Nm³.

**Find:** loading in gr/ft³, $\eta_{req}$, overall efficiency of each option, recommendation.

**Assumptions:** chart readings (average lines) at 9 µm: HE cyclone 70%, cloth arrester 99%, ESP 97%; after the cyclone the mean size is 6 µm (deviation line, $9(0.3)^{1/3} = 6.0$ µm), where wet collector 98%, ESP 98%, cloth arrester ≥ 99.5% (top of the efficiency scale).

1. **(a) Loading:** 1 gr/ft³ = 2.288 g/m³, so $c_0 = 15/2.288 = 6.6$ gr/ft³ (inside the "driers, kilns" band).
$$\eta_{req} = 1 - \frac{0.050}{15} = 0.99667 = 99.67\%$$

2. **(b) Series efficiency:** for collectors in series the penetrations multiply, $P = \prod(1 - \eta_i)$, $\eta = 1 - P$:

| Option | Stage efficiencies | Overall η | Outlet, mg/Nm³ | Meets 50? |
|---|---|---|---|---|
| (i) fabric filter alone | 0.99 | 99.0% | 150 | no |
| (ii) ESP alone | 0.97 | 97.0% | 450 | no |
| (iii) HE cyclone + wet collector | 0.70, 0.98 | 99.4% | 90 | no |
| (iv) HE cyclone + ESP | 0.70, 0.98 | 99.4% | 90 | no |
| (v) HE cyclone + fabric filter | 0.70, 0.995 | 99.85% | 22.5 | **yes** |

3. **ESP option revisited:** an ESP can be made more efficient by adding collecting area (Deutsch, $\eta = 1 - e^{-wA/Q}$). Going from 98% to 99% after the cyclone needs $\ln(100)/\ln(50) = 1.18$ times the area and gives 1 − 0.3(0.01) = 99.7% → 45 mg/Nm³, just inside the limit with no margin.

4. **(c) Recommendation: HE cyclone + pulse-jet fabric filter.** It is the only option with a comfortable margin (22.5 mg/Nm³); the dust is dry and is product (returned to the kiln feed), so wet collection (sludge, lost product, corrosive wet gas) is unattractive; bag filters keep their efficiency on fine particles and with changing loads. Cautions: glass-fibre or PTFE bags for the gas temperature, keep the gas above its dew point, and use the cyclone to protect the bags from the heavy loading (it removes 70% of 15 g/Nm³).

**Result:** 6.6 gr/ft³, η_req = 99.67%; only HE cyclone + fabric filter (99.85%, 22.5 mg/Nm³) meets the limit with margin; HE cyclone + ESP needs about 18% more plate area to reach 99.7%.`,
        answer: String.raw`c₀ = 6.6 gr/ft³; η_req = 99.67%. Filter alone 150, ESP alone 450, cyclone + wet 90, cyclone + ESP 90, cyclone + fabric filter 22.5 mg/Nm³ → recommend HE cyclone + fabric filter (99.85%).` } ] },

    { id: "practice-separator-selection-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-separator-selection-P7", label: "", marks: "8", topic: "separator-selection",
        sub: "Sylvan deviation line: why mean size falls, slope 3 from Ludwig's example", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Ludwig Example 4-1 numbers; Sylvan chart deviation box`,
        text: String.raw`Explain why the mean particle size of the dust leaving a collector is smaller than at its inlet. Using the numbers of the lime-kiln example (7.5 gr/ft³, 9 µm → 2.25 gr/ft³, 6.0 µm → 0.045 gr/ft³, 1.6 µm), show that the "ordinary industrial dust" deviation line corresponds to $c \propto d^3$ on the log–log chart, and use the rule to predict the mean size after a collector of 90% efficiency acting on 10 gr/ft³ of 30 µm dust.`,
        solution: String.raw`1. **Why the size falls:** every mechanical collector has a grade-efficiency curve that rises with particle size. It removes nearly all of the coarse fraction and little of the fine fraction, so the dust that escapes is enriched in fines and its mass mean diameter is smaller. The more of the mass removed, the further the mean moves toward the fine end of the distribution.

2. **Slope of the deviation line:** on log–log axes a straight line is $\log c = n\log d + \text{const}$, i.e. $c \propto d^n$. Between the two points of the example:
$$n = \frac{\ln(7.5/2.25)}{\ln(9/6.0)} = \frac{1.204}{0.405} = 2.97, \qquad n = \frac{\ln(2.25/0.045)}{\ln(6.0/1.6)} = \frac{3.91}{1.32} = 2.96$$
   So $n \approx 3$: the remaining mass concentration varies as the cube of the mean size, as if the dust keeps the same number of particles per unit volume and only their size (mass ∝ $d^3$) changes. A wider distribution (the "high" deviation lines) has a smaller slope; a classified dust ("low"/uniform) has a steeper or vertical line.

3. **Prediction:** with $\eta = 0.90$, $c_1 = 10(0.10) = 1.0$ gr/ft³ and
$$d_1 = d_0\left(\frac{c_1}{c_0}\right)^{1/3} = 30(0.10)^{1/3} = 13.9\ \mu\mathrm{m}$$

**Result:** collectors preferentially remove coarse particles; Ludwig's numbers give a slope of 2.97 ≈ 3 ($c \propto d^3$); 10 gr/ft³, 30 µm at 90% → 1.0 gr/ft³, about 14 µm.

> On the attached chart this is the same as sliding along a line parallel to the "ordinary industrial dust" fan; the cube rule is only a convenient check of the chart reading.`,
        answer: String.raw`Collectors take the coarse end, so the escaping dust is finer. n = ln(7.5/2.25)/ln(9/6) = 2.97 and ln(2.25/0.045)/ln(6/1.6) = 2.96 → c ∝ d³. 30 µm, 90% → 1.0 gr/ft³, d = 30(0.1)^{1/3} ≈ 14 µm.` } ] },

    { id: "practice-separator-selection-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-separator-selection-P8", label: "", marks: "10", topic: "separator-selection",
        sub: "Sylvan chart versus Perry's chart and the Vandegrift comparison chart", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_1 slides "Basic separator type selection", "Sylvan Chart vs. Perry's Chart", Fig. 4-4 and Fig. 4-5`,
        text: String.raw`What three pieces of information about a particle-laden stream are needed before a separator can be selected, and why? Compare the purpose, use and limitations of the Sylvan chart and Perry's chart of particle characteristics. What extra information do the comparison chart of Vandegrift (Ludwig Fig. 4-4) and the efficiency curves of Fig. 4-5 give?`,
        solution: String.raw`### Information needed
1. **Range and distribution of particle sizes**: the efficiency of every collector depends on size; a mean size alone hides the fines that control the outlet loading.
2. **Concentration of entrained particles** (gr/ft³, mg/m³): decides whether a pre-cleaner is needed, the cleaning frequency of filters, plugging of inertial separators (< 0.5 gr/ft³) and the absolute outlet loading.
3. **Extent of removal desired**: set by emission limits, product value or downstream protection; it decides how many stages are needed.
Also: gas flow and temperature, dew point, stickiness, abrasiveness, resistivity, explosibility and the value of the dust.

### Sylvan chart vs. Perry's chart

| | Sylvan chart | Perry's chart (Ludwig Fig. 4-1) |
|---|---|---|
| Purpose | compares collection efficiency of specific equipment (cyclones, wet collectors, cloth arresters, ESPs) over particle size and concentration | master reference linking particle size to classification (dust, fume, mist), measuring methods, collection equipment and settling laws |
| Best for | preliminary equipment selection and staging | fundamental understanding and design calculations (terminal velocity, Stokes/intermediate/Newton ranges, Cunningham, Brownian motion) |
| Answers | "Will this equipment work for my particle size and loading?" | "Why does the particle behave this way and how do I calculate it?" |
| Limitation | no physics, no settling velocities; average curves; dust (gas–solid) oriented | more complex, no direct efficiency pick |

Use them together: Perry's chart for the physics, the Sylvan chart to shortlist equipment by efficiency.

### Fig. 4-4 and Fig. 4-5
- **Fig. 4-4 (Vandegrift)**: penetration and collection efficiency (99.99–0.01%) against particle diameter 0.01–10 µm for cyclones, scrubbers, venturi, ESPs (low/medium/high efficiency) and fabric filters. It shows the fine-particle range, the minimum-efficiency region near 0.1–1 µm and that fabric filters and high-efficiency ESPs are the only devices above 99% for submicron dust.
- **Fig. 4-5 (Sargent)**: separate grade-efficiency curves for cellular, high-throughput, high-efficiency and multiple cyclones, spray tower, impingement, wet dynamic, orifice and venturi scrubbers, dry and irrigated ESPs and fabric filters, so a size distribution can be integrated to an overall efficiency.`,
        answer: String.raw`Need PSD, concentration and required removal. Sylvan: preliminary equipment efficiency vs size and loading, no physics. Perry: particle classification, measurement and settling laws for calculation. Fig. 4-4/4-5: penetration and grade-efficiency curves of each device down to 0.01 µm.` } ] },

    { id: "practice-separator-selection-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-separator-selection-P9", label: "", marks: "7", topic: "separator-selection",
        sub: "Fog, mist and dust; why particle size distribution matters in industry", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_1 slides "Fog, Mist and Dust", "Sizes of common dusts and mists", "Particle Size Distribution (PSD)"`,
        text: String.raw`Distinguish between fog, mist and dust and give typical particle sizes. List four industrial properties that depend on the particle size distribution of a powder.`,
        solution: String.raw`### Fog, mist and dust
- **Fog**: a cloud of water droplets in contact with the ground that cuts visibility to **less than 1 km**. Atmospheric fog droplets are about 2–15 µm (Ludwig Table 4-1).
- **Mist**: the same kind of droplet cloud but thinner, visibility **1–2 km**; mists in process plants are condensed droplets, e.g. sulfuric acid mist 0.5–15 µm. Fog and mist differ only in density and its effect on visibility.
- **Dust**: solid particles generated by natural or human activity (crushing, grinding, conveying, combustion): e.g. cement 0.5–55 µm, coal 5–10 µm, flour mill 15 µm, fly ash 0.1–3 µm; for comparison human hair 50–200 µm and the limit of naked-eye visibility 10–40 µm.

### Why PSD matters (slide examples)
1. **Setting time of cement**: finer cement has more surface, hydrates and sets faster and develops early strength.
2. **Hiding power of pigments**: depends on light scattering, which peaks at a particular size (about half the wavelength of light).
3. **Activity of catalysts**: activity is proportional to accessible surface area, and the size controls pressure drop and attrition.
4. **Pharmaceuticals**: stability, appearance, dissolution rate and bioavailability of the drug.
5. Also the taste and texture of food and the sintering shrinkage of powder-metallurgy parts.

The same PSD is needed to choose a dust collector, because collection efficiency is a function of size.`,
        answer: String.raw`Fog: droplet cloud at ground, visibility < 1 km (2–15 µm); mist: same, visibility 1–2 km; dust: solid particles (e.g. cement 0.5–55 µm, fly ash 0.1–3 µm). PSD controls cement setting time, pigment hiding power, catalyst activity, drug bioavailability, food taste, sintering shrinkage.` } ] },

    { id: "practice-separator-selection-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-separator-selection-P10", label: "", marks: "", topic: "separator-selection",
        sub: "Galena–quartz differential settling: equal-settling ratio and pure fractions", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Ch. 30 "Differential settling methods", Eqs. (30.64)–(30.67) and Fig. 30.31 (galena, sp. gr. 7.5, and quartz, sp. gr. 2.65, are the text's own example); numbers for the size range added`,
        text: String.raw`A mixture of galena (sp. gr. 7.5) and quartz (sp. gr. 2.65) particles, both in the size range 20–60 µm, is separated by differential settling in water at 20°C (μ = 1.0 cP).

(a) Find the ratio of the diameters of equal-settling particles, and show that Stokes' law applies.
(b) Which size ranges come out as pure galena, pure quartz and a mixed fraction?
(c) What is the largest ratio of maximum to minimum size of the feed that still allows complete separation? How does a sorting medium of specific gravity 1.6 change this?`,
        solution: String.raw`**Given:** $\rho_A = 7500$, $\rho_B = 2650$, $\rho = 1000$ kg/m³; $D_p$ = 20–60 µm for both; μ = 10⁻³ Pa·s.

**Find:** equal-settling ratio, pure and mixed fractions, limiting size ratio.

**Assumptions:** free settling of spheres.

1. **Regime check:** the fastest particle is 60 µm galena:
$$u_t = \frac{gD_p^2(\rho_p - \rho)}{18\mu} = \frac{9.81(60\times10^{-6})^2(6500)}{18\times10^{-3}} = 0.0128\ \mathrm{m/s}, \quad Re_p = \frac{1000(0.0128)(60\times10^{-6})}{10^{-3}} = 0.77 < 1$$
   Stokes' law applies to all particles.

2. **(a) Equal settling** ($u_{tA} = u_{tB}$, Eq. 30.66):
$$\frac{D_{pA}}{D_{pB}} = \left(\frac{\rho_B - \rho}{\rho_A - \rho}\right)^{1/2} = \left(\frac{1.65}{6.5}\right)^{1/2} = 0.504$$
   A galena particle settles like a quartz particle about twice its size. (In the Newton range the exponent is 1, giving 0.254.)

3. **(b) Fractions:**
   - The slowest galena (20 µm) settles like quartz of 20/0.504 = 39.7 µm. Quartz finer than 39.7 µm settles slower than any galena: **pure quartz, 20–39.7 µm** (light, overflow fraction).
   - The fastest quartz (60 µm) settles like galena of 60 × 0.504 = 30.2 µm. Galena coarser than 30.2 µm settles faster than any quartz: **pure galena, 30.2–60 µm** (heavy fraction).
   - **Mixed fraction:** galena 20–30.2 µm together with quartz 39.7–60 µm.

![Stokes terminal velocity of galena and quartz in water: equal-settling sizes and the pure and mixed fractions](fig/practice-separator-selection-P10-sol.svg)

4. **(c) Complete separation** needs the slowest galena to settle faster than the fastest quartz: $D_{max}/D_{min} < 1/0.504 = 1.98$. The 20–60 µm feed (ratio 3) must first be screened into narrower cuts, e.g. 20–39 µm and 39–60 µm (each ratio < 1.98).
   With a medium of sp. gr. 1.6 (a heavy suspension, still lighter than both solids):
$$\frac{D_{pA}}{D_{pB}} = \left(\frac{2.65 - 1.6}{7.5 - 1.6}\right)^{1/2} = 0.422 \;\Rightarrow\; \frac{D_{max}}{D_{min}} < 2.37$$
   A denser medium improves the sharpness (MSH: "the significance ... improved if the density of the medium is increased"), but 20–60 µm still cannot be split completely in one step.

**Result:** $D_{pA}/D_{pB} = 0.504$; pure quartz 20–39.7 µm, pure galena 30.2–60 µm, mixed galena 20–30.2 + quartz 39.7–60 µm; complete separation needs a size ratio < 1.98 in water (< 2.37 in a 1.6 medium).`,
        answer: String.raw`Re ≤ 0.77 (Stokes). D_galena/D_quartz = √(1.65/6.5) = 0.504. Pure quartz 20–39.7 µm; pure galena 30.2–60 µm; mixed: galena 20–30.2, quartz 39.7–60 µm. Complete separation if D_max/D_min < 1.98 (2.37 with a 1.6 sp. gr. medium).` } ] },

    { id: "practice-separator-selection-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-separator-selection-P11", label: "", marks: "10", topic: "separator-selection",
        sub: "Choosing liquid-particle separators for five process services", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_1 slide "General Applications of Liquid Particle Separators" (Ludwig Table 4-7) and Lecture 2_2 impingement/cyclone slides`,
        text: String.raw`Recommend a liquid-particle separator (impingement, cyclone, scrubber or electrical) for each service and give one reason: (i) liquid entrained in a natural-gas pipeline, (ii) oil haze in compressed air downstream of a lubricated compressor, (iii) vapour from a flashing condensate drum, (iv) a boiling evaporator overhead carrying droplets and some solids, (v) sulfuric acid mist (0.5–3 µm) from an absorber.`,
        solution: String.raw`The slide table rates each collector type against service, concentration, particle size and the effect of gravity.

| Service | Concentration / size | Recommended | Reason |
|---|---|---|---|
| (i) Pipeline entrained liquid | light, fine to coarse; slugs possible | **impingement** (vane/mesh) in a knock-out drum; cyclone also used | "frequent" for impingement; handles slugs in the vessel volume, low ΔP |
| (ii) Compressor oil haze | very light, very fine (≈ 1 µm) | **impingement: fibre-bed / coalescing filter**; electrical occasional | mesh pads miss < 3–5 µm; fibre beds catch 0.1–3 µm by interception and diffusion |
| (iii) Flashing liquid | light to moderate, fine to medium | **impingement mesh pad** or **cyclone** | both "frequent"; mesh removes down to ≈ 5 µm at 98–99% with ≈ 1 in. water ΔP |
| (iv) Boiling/bubbling with solids | light to heavy, fine to coarse | **cyclone** (or chevron vanes) | solids would plug a mesh; cyclones tolerate solids and heavy loads |
| (v) Sulfuric acid mist 0.5–3 µm | light, submicron | **fibre-bed impingement eliminator** (or wet ESP) | 99.97% on 0.1–3 µm; glass or PTFE fibres resist the acid |

General points: impingement separators are effective at high pressure and turbulent flow, not for streamline flow; cyclones are preferred for heavy liquid loads and dirty service; scrubbers when the gas must also be washed or cooled; electrical precipitators only for very fine mists where pressure drop must be minimal.`,
        answer: String.raw`(i) vane/mesh impingement in a KO drum (or cyclone); (ii) fibre-bed coalescer; (iii) mesh pad or cyclone; (iv) cyclone or chevron vanes (solids plug mesh); (v) fibre-bed mist eliminator or wet ESP.` } ] },

    { id: "practice-separator-selection-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-separator-selection-P12", label: "", marks: "10", topic: "separator-selection",
        sub: "Dust collectors for five industrial operations from Ludwig Table 4-5", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_1 slides "Applications of dust collectors in industry" and Remarks (Ludwig Table 4-5)`,
        text: String.raw`Using the table of applications of dust collectors in industry, recommend a collector arrangement for: (i) grain handling in an elevator, (ii) foundry shake-out, (iii) pneumatic conveying of a powder, (iv) rubber mixers, (v) woodworking machines. Give the typical concentration and particle size for each and the reason for your choice.`,
        solution: String.raw`| Operation | Concentration / size (Table 4-5) | Usual collectors | Recommended arrangement and reason |
|---|---|---|---|
| (i) Grain handling | light; medium | cyclone usual, fabric arrester frequent | **cyclone**, with a fabric arrester where dust must not escape; grain dust is coarse and dry, but explosive, so vent and ground the units |
| (ii) Foundry shake-out | light to moderate; fine | wet collector usual | **wet collector**: hot, fine, abrasive sand dust with smoke; wet units also cool the gas (remark 15: hot gases and steam usually involved) |
| (iii) Pneumatic conveying | very heavy; fine to coarse | cyclone usual + fabric arrester usual | **cyclone as product collector followed by a fabric arrester** for high overall collection (remark 6) |
| (iv) Rubber mixers | moderate; fine | wet frequent, fabric usual | **fabric arrester**: fine dry compounding dusts (carbon black, talc) recovered dry and returned to the batch |
| (v) Woodworking machines | moderate; varied | cyclone usual, fabric frequent | **cyclone**, plus a fabric arrester on sanding lines (remark 47: bulky material, large storage, bridging of splinters; remark 48: sanding fines are too fine for cyclones; remark 46: fire hazard) |

Points used from the remarks: cyclones and high-efficiency centrifugals often act as primary collectors followed by fabric or wet types (remark 5); concentration decides the need for a dry centrifugal, while plant location and product value decide the final collector (remark 7); salvage value of the collected material often dictates the type of collector.`,
        answer: String.raw`(i) cyclone (+ fabric arrester); (ii) wet collector; (iii) product cyclone + fabric arrester; (iv) fabric arrester (dry recovery); (v) cyclone (+ fabric arrester for sanding fines).` } ] }
  ]
});
