QB.paper({
  year: "2020-21", date: "29/03/2023", marks: 280,
  rules: String.raw`Section A: four questions, answer any three. Section B: four questions, Q5 is compulsory + any two of Q6–Q8. Use separate scripts for each section. Assume reasonably if additional data/information is required. Attached to the paper: steam table (32–450 °F), NaOH enthalpy–concentration chart and Dühring lines (Q1c), centrifugal pump characteristics (Q3a), relief layouts (Q4c), Sylvan chart (Q5b), Mollier chart (Q6b), power-number chart for turbines (Q8a).`,
  questions: [
    { id: "2020-21-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q1a", label: "(a)", marks: "10⅔",
          topic: "evaporation", sub: "Heat flux per effect is 1/n of single-effect flux",
          type: "derivation", syllabus: "in", repeats: ["2022-23-Q1b", "2014-15-Q5b"],
          text: String.raw`Validate: "Heat flux in each effect of evaporator of a multiple effect evaporator $\propto \frac{1}{n}$ Heat flux of a single effect evaporator".`,
          solution: String.raw`**Assumptions:** same steam temperature $T_s$ and same condenser temperature $T_c$ for both plants; each effect has the same area A and the same overall coefficient U; negligible boiling-point elevation (BPE) at first; feed near its boiling point.

1. **Single effect.** The whole available temperature drop is used across one heating surface:

$$\Delta T_{tot} = T_s - T_c,\qquad \left(\frac{q}{A}\right)_{single} = U\,\Delta T_{tot}$$

2. **n effects in series.** The vapour of effect i is the heating medium of effect i+1, so the drops add up to the same terminal difference:

$$\Delta T_1 + \Delta T_2 + \dots + \Delta T_n = T_s - T_c = \Delta T_{tot}$$

3. **Equal duties.** Each kilogram of vapour condensed in effect i boils about one kilogram in effect i+1, so $q_1 \approx q_2 \approx \dots \approx q_n$. With equal U and A, $U A \Delta T_i$ = constant, hence

$$\Delta T_i = \frac{\Delta T_{tot}}{n}$$

4. **Flux in each effect.**

$$\left(\frac{q}{A}\right)_i = U\,\Delta T_i = \frac{U\,\Delta T_{tot}}{n} = \frac{1}{n}\left(\frac{q}{A}\right)_{single}$$

   So the statement is **valid**: each effect works with about one n-th of the flux (and of the ΔT) of a single effect between the same terminal temperatures.

5. **Consequences.** Total heat transferred $= \sum U A\,\Delta T_i = U A\,\Delta T_{tot}$, the same as **one** body of area A. An n-effect plant has n times the area but about the **same capacity** (kg evaporated per hour) as one effect of the same area; what it gains is **economy**: about n kg of water per kg of steam. Area per unit capacity rises roughly n-fold, steam per unit capacity falls n-fold.

6. **Why the flux is usually even lower than 1/n.** With BPE in each effect the useful drop is

$$\sum \Delta T_i = T_s - T_c - \sum_i \mathrm{BPE}_i$$

   and every extra effect adds one more BPE (and liquid-head) loss, so $(q/A)_i < (q/A)_{single}/n$. U also falls in the cooler, more viscous effects.

**Example:** $T_s$ = 250 °F, $T_c$ = 125 °F, U = 500 Btu/h ft² °F. Single effect: q/A = 500 × 125 = 62,500 Btu/h ft². Triple effect: ΔT ≈ 41.7 °F per effect, q/A ≈ 20,800 Btu/h ft² = 1/3 of the single-effect value (less if BPE is present).`,
          answer: String.raw`Valid: ΣΔT_i = T_s − T_c and equal duties/areas give ΔT_i = ΔT_tot/n, so (q/A)_i = UΔT_tot/n = (1/n)(q/A)_single; capacity ≈ that of one effect, economy ≈ n. With BPE the flux is even below 1/n.` },
        { id: "2020-21-Q1b", label: "(b)", marks: "16",
          topic: "evaporation", sub: "Entrainment separator in evaporators: working principle with sketch",
          type: "sketch", syllabus: "in", repeats: ["2018-19-Q3d", "2017-18-Q1c"],
          text: String.raw`Illustrate the working principle of Entrainment separator with the help of a neat sketch.`,
          solution: String.raw`**Why it is needed.** Vigorous boiling in an evaporator throws up a spray of liquor drops; fine drops are carried with the vapour (**entrainment**). This causes loss of product, contaminates the condensate (or the steam chest of the next effect) and fouls downstream equipment. An entrainment separator (de-entrainer, catchall) is placed in the vapour head or in the vapour line to strip the drops and return them to the liquor.

![Evaporator body with impingement baffle and wire-mesh pad in the vapour head and an external cyclone separator returning the liquid](fig/2020-21-Q1b-sketch.svg)

**Working principle.** A drop follows the vapour only as long as the drag on it exceeds its inertia and weight. The separator makes the drop leave the gas streamlines by one or more of these mechanisms:

1. **Gravity settling (vapour head).** A tall vapour space of large cross-section lowers the vapour velocity below the terminal velocity of most drops, so they fall back. The allowable velocity is of the Souders–Brown form $u_{max} = K\sqrt{(\rho_L-\rho_V)/\rho_V}$.
2. **Impingement / change of direction.** Baffle plates, louvres or a **knitted wire-mesh pad** force the vapour to turn sharply; drops, being denser, cannot turn and hit the surface (inertial impaction), coalesce into a film and drain back. A mesh pad removes drops down to about 5–10 μm.
3. **Centrifugal action (cyclone separator).** The vapour enters tangentially and swirls; the centrifugal force $m u_t^2/r$, many times gravity, throws drops to the wall, where they run down to the cone and back to the evaporator through a seal leg. Dry vapour leaves through the central outlet (vortex finder).

**Typical arrangements:** a deflector or umbrella baffle just above the boiling liquid (coarse spray), a mesh pad near the top of the vapour head (fine mist), and an external cyclone in the vapour line (high-capacity or foaming duties). Separated liquid is always returned to the body below the liquor level.

**Design/operating points:** keep vapour velocity within the separator's range (too high re-entrains, too low gives poor impaction in a mesh); allow drainage; avoid fouling solids that can plug a mesh pad (wash sprays or use vane separators); pressure drop is small (a few mm water) but matters in the last, low-pressure effect.`,
          answer: String.raw`Drops in the vapour are removed by gravity (low velocity in a tall vapour head), impingement/sudden change of direction (baffles, wire-mesh pad) and centrifugal force (tangential cyclone); the collected liquid drains back to the body and dry vapour goes to the condenser or next effect.` },
        { id: "2020-21-Q1c", label: "(c)", marks: "20",
          topic: "evaporation", sub: "Double-effect backward-feed NaOH evaporator: maximum production",
          type: "numerical", syllabus: "in", repeats: ["2017-18-Q1a"],
          text: String.raw`A basket type double effect evaporator connected for backward feed will concentrate a NaOH solution. Each evaporator body has a 2000 ft² heating area. The caustic solution enters at 80°F and is 5 weight percent NaOH. It is to be concentrated to 50 weight percent. Previous operation indicates that overall coefficients of 400 Btu/hr ft²°F [and 550 Btu/hr ft²°F] may be obtained in the first and second effects, respectively. Saturated steam at 150 psia is available, and a vacuum of 2 in. Hg absolute may obtained with existing ejectors. Estimate the maximum production obtainable.

Steam table (Keenan et al.), NaOH enthalpy–concentration chart (Foust Fig. 19.13) and Dühring lines for NaOH–H₂O (Foust Fig. 19.11) are attached to the paper. Extract of the steam table:

| T, °F | p, psia | $H_L$, Btu/lb | λ, Btu/lb | $H_V$, Btu/lb |
|---|---|---|---|---|
| 100 | 0.9503 | 68.05 | 1037.0 | 1105.0 |
| 110 | 1.2763 | 78.02 | 1031.4 | 1109.3 |
| 170 | 5.996 | 137.97 | 996.2 | 1134.2 |
| 180 | 7.515 | 147.99 | 990.2 | 1138.2 |
| 350 | 134.53 | 321.80 | 871.3 | 1193.1 |
| 360 | 152.92 | 332.35 | 862.9 | 1195.2 |`,
          solution: String.raw`**Given:** two bodies, A = 2000 ft² each; backward feed (feed to effect II, liquor pumped to effect I); F at 5 % NaOH, 80 °F; product 50 %; $U_1$ = 400, $U_2$ = 550 Btu/h ft² °F; steam 150 psia; last effect at 2 in Hg abs.

**Find:** the largest feed (and product) rate the two fixed areas can handle.

**Assumptions:** $U_2$ = 550 Btu/h ft² °F (the second value is missing from the printed question; 550 is the value given in the 2017-18 version of the same problem); no heat losses; condensate leaves at saturation; vapour from a boiling solution is superheated by the BPE ($c_p$ = 0.46 Btu/lb °F); liquid-head effect neglected. Method: Badger–McCabe trial-and-error (assume ΔT split → balances → areas → adjust).

1. **Terminal temperatures (steam table).** 150 psia lies between 350 °F (134.53) and 360 °F (152.92): $T_s$ = 358.4 °F, λ_s = 864.2 Btu/lb. 2 in Hg = 2 × 0.4912 = 0.982 psia → water boils at $T_c$ = 101.0 °F, $H_V$ = 1105.4 Btu/lb.

2. **Material balance.** NaOH: 0.05F = 0.50 L₁ → $L_1$ = 0.1F; total evaporation $V_1 + V_2$ = 0.9F. In backward feed $L_2 = F - V_2$ and $x_2 = 0.05F/L_2$.

3. **Boiling-point rises (Dühring chart).** Effect I holds 50 % NaOH: BPE ≈ 75 °F (the 50 % line gives 197 °F at 124 °F water and 289 °F at 212 °F water). Effect II holds weak liquor (≈ 9 %): BPE ≈ 5 °F.

   Available ΔT = 358.4 − 101.0 − 75 − 5 ≈ 177 °F.

4. **Trial 1.** With equal duties and equal areas, ΔT ∝ 1/U: ΔT₁ = 177 × 550/950 = 102.2 °F, ΔT₂ = 75 °F. Then $T_1$ = 256.2 °F, vapour space of effect I at 180.8 °F, $T_2$ = 105.7 °F. Enthalpy balances (below) per lb of feed give $q_1$ = 533 and $q_2$ = 476 Btu/lb feed, so

$$\frac{A_1}{F} = \frac{533}{400\times102.2} = 0.01308,\qquad \frac{A_2}{F} = \frac{476}{550\times75.1} = 0.01151\ \mathrm{ft^2\,h/lb}$$

   Unequal: effect I would limit F to 152,900 lb/h while effect II could take 173,800 lb/h. Give effect I more ΔT ($\Delta T_i' = \Delta T_i A_i/\bar A$): ΔT₁ ≈ 107.7, ΔT₂ ≈ 69.7 °F.

5. **Trial 2 (converged).** Vapour space of effect I at 175.7 °F (p = 6.86 psia): Dühring 50 % → $T_1$ = 251.1 °F, BPE₁ = 75.4 °F, ΔT₁ = 358.4 − 251.1 = **107.3 °F**. Effect II: $x_2$ = 8.9 %, $T_2$ = 101.0 + 4.7 = 105.7 °F, ΔT₂ = 175.7 − 105.7 = **70.0 °F**. Check: 107.3 + 70.0 = 177.3 = 358.4 − 101.0 − 75.4 − 4.7.

6. **Enthalpies (chart readings).** Feed 5 %, 80 °F: $h_F$ ≈ 45 Btu/lb. Effect-II liquor 8.9 %, 105.7 °F: $h_2$ ≈ 68 Btu/lb. Product 50 %, 251 °F: $h_1$ ≈ 264 Btu/lb. Vapours: $H_{V1}$ = $H_g$(175.7 °F) + 0.46 × 75.4 = 1136.5 + 34.7 = 1171.2 Btu/lb; it condenses in effect II giving $H_{V1} - h_f$ = 1171.2 − 143.7 = 1027.4 Btu/lb. $H_{V2}$ = 1105.4 + 0.46 × 4.7 = 1107.6 Btu/lb.

7. **Effect II balance** (heated by V₁; feed in, $L_2$ out):

$$V_1(1027.4) = V_2(1107.6) + L_2(68) - F(45),\quad V_2 = 0.9F - V_1,\ L_2 = 0.1F + V_1$$

   gives $V_1$ = 0.4637F, $V_2$ = 0.4363F, $L_2$ = 0.5637F ($x_2$ = 0.05/0.5637 = 8.9 %, as assumed).

8. **Effect I balance and duties per lb feed:**

$$q_1 = V_1 H_{V1} + L_1 h_1 - L_2 h_2 = 0.4637(1171.2) + 0.1(264) - 0.5637(68) = 531.2\ \mathrm{Btu/lb\,F}$$

$$q_2 = V_1(1027.4) = 476.4\ \mathrm{Btu/lb\,F}$$

9. **Areas per unit feed:**

$$\frac{A_1}{F} = \frac{531.2}{400\times107.3} = 0.01237,\qquad \frac{A_2}{F} = \frac{476.4}{550\times70.0} = 0.01237\ \mathrm{ft^2\,h/lb}$$

   Equal, so the trial is converged. Maximum feed: F = 2000/0.01237 = **161,600 lb/h**.

10. **Streams and steam.**

| quantity | value |
|---|---|
| feed F (5 %) | 161,600 lb/h |
| $V_1$ / $V_2$ | 74,950 / 70,530 lb/h |
| $L_2$ to effect I (8.9 %) | 91,110 lb/h |
| product $L_1$ (50 %) | 16,160 lb/h (8,080 lb/h NaOH) |
| $q_1$ / $q_2$ | 85.9 × 10⁶ / 77.0 × 10⁶ Btu/h |
| steam S = q₁/λ_s | 85.9 × 10⁶/864.2 = 99,400 lb/h |
| economy | 145,480/99,400 = 1.46 |

![Converged backward-feed double effect with all streams](fig/2020-21-Q1c-sol.svg)

**Result:** the evaporator can concentrate about 1.62 × 10⁵ lb/h of 5 % feed, i.e. produce about **16,200 lb/h of 50 % NaOH** (≈ 8,100 lb/h NaOH) using ≈ 99,000 lb/h of steam (economy ≈ 1.46).`,
          answer: String.raw`Maximum production ≈ 16,200 lb/h of 50 % NaOH (8,080 lb/h NaOH) from 161,600 lb/h of 5 % feed; ΔT₁ = 107.3 °F, ΔT₂ = 70.0 °F, T₁ = 251 °F, steam ≈ 99,400 lb/h, economy ≈ 1.46 (U₂ = 550 assumed).` }
      ] },
    { id: "2020-21-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q2a", label: "(a)", marks: "26⅔",
          topic: "drying", sub: "Dryer selection for the cement industry by the general guidelines",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q2b", "2016-17-Q4a", "2013-14-Q6a"],
          text: String.raw`Based on the General Guidelines of Dryer Selection, recommend the dryer type for the cement industry.`,
          solution: String.raw`**What has to be dried in a cement plant.** Raw materials (limestone, clay/shale, laterite, iron ore), additives (blast-furnace slag, fly ash, natural pozzolana, gypsum) and fuel (coal/pet coke). Feed moisture is typically 5–20 % (clay and slag up to 25 %), required product moisture ≤ 1 %, at tens to hundreds of tonnes per hour. Hot kiln exit gas and clinker-cooler air (250–400 °C) are available free.

**Applying the guidelines (Dr. Sowgath's list):**

| guideline | cement-plant situation | consequence |
|---|---|---|
| Batch or continuous (batch < 150–200 kg/h; continuous > 1–2 t/h; rotary or spray for large rates) | 50–500 t/h, round-the-clock | continuous, **rotary** class |
| Feed and product handling | lumpy to granular, free-flowing to sticky (clay), abrasive; not a liquid | rotary drum or flash/grinding dryer; not spray/drum dryers |
| Thermal sensitivity | mineral, not heat-sensitive (except gypsum > 80 °C → hemihydrate; coal: fire risk) | high inlet gas temperature allowed, co-current flow |
| Adiabatic (direct) vs non-adiabatic (indirect) | coarse solids, inert to flue gas, no solvent recovery | **direct-contact (adiabatic)**, cheapest |
| Operation | must be reliable; plant stops if the dryer stops | simple, robust rotary drum |
| Dust | direct contact makes dust | cyclone + bag filter / ESP after the dryer |
| Energy efficiency | higher inlet gas T → higher efficiency; waste heat available | use kiln/cooler gas, co-current, high inlet T |
| Fuel | direct firing; natural gas best, oil next, coal dusty | gas or kiln exhaust gas; auxiliary burner |
| Maintenance | abrasive limestone, sticky clay ("balling-up") | heavy flights, chain curtains for sticky clay |
| Labour | tray dryers labour-intensive | continuous automatic unit |
| Pollution | dust and stack emission control | bag house at dryer exit |

![Direct-fired co-current rotary dryer with dust collection](fig/2020-21-Q2a-sketch.svg)

**Recommendation**

1. **Raw materials, slag, clay, coal (separate drying): direct-heated rotary dryer**, co-current (hot gas enters with the wet feed), heated by kiln exit gas or a gas/oil burner. Reasons: very high continuous capacity, handles lumpy, abrasive and somewhat sticky solids, tolerates high gas temperature (600–800 °C at inlet), low cost per tonne, simple and reliable; co-current flow cools the gas quickly so the shell and solids do not overheat. Typical: 2–5 rpm, 2–5 % slope, L/D 5–8, residence 10–40 min.
2. **Raw meal and coal in modern plants: flash (pneumatic) drying combined with grinding** (vertical roller mill or ball mill swept with hot kiln/cooler gas). The fine particles dry in seconds in the hot gas stream; drying and grinding happen in one unit, using waste heat, and the product is collected in a cyclone/bag filter.
3. Gypsum (heat-sensitive) is dried with cooler gas or added with clinker in the cement mill; coal mills use inerted (low-O₂) gas because of fire risk.

**Conclusion:** the cement industry uses **continuous, direct-contact (adiabatic) rotary dryers** for raw materials and additives, and **flash drying in air-swept mills** for raw meal and coal, both fed by kiln waste gas and followed by cyclones and bag filters.`,
          answer: String.raw`Large continuous throughput of non-heat-sensitive, abrasive, granular solids with free waste heat → direct-fired (kiln-gas) co-current rotary dryer for raw materials/slag/clay; flash drying in air-swept grinding mills for raw meal and coal; cyclone + bag filter for dust.` },
        { id: "2020-21-Q2b", label: "(b)", marks: "10×2=20",
          topic: "drying", sub: "Short notes: fluidized bed dryer; merits of freeze-dried product",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q3c"],
          text: String.raw`Write short notes on following:

(i) Fluidized bed dryer (ii) The merits of freeze dried product`,
          solution: String.raw`### (i) Fluidized bed dryer

![Continuous fluidized-bed dryer with distributor, overflow weir and cyclone](fig/2020-21-Q2b-sketch.svg)

- **Principle:** hot gas is blown up through a perforated distributor plate at a velocity above the minimum fluidization velocity, so the granular bed behaves like a boiling liquid. Every particle is surrounded by hot gas, giving very high heat- and mass-transfer rates.
- **Construction/operation:** plenum and distributor at the bottom, bed of solids, freeboard (disengaging space) above. Wet feed enters the bed (screw or rotary valve); dry product overflows a weir near the bottom; exhaust gas passes a cyclone (fines returned) and bag filter. Continuous or batch (pharmaceutical granules).
- **Suitable feed:** granular and crystalline solids of about 1–3 mm (0.05–15 mm possible), not too sticky, not too fine.
- **Residence time:** random distribution; mean 30–120 s when only surface moisture is removed, 15–30 min if internal diffusion controls (deep bed or multistage units for narrow distribution).
- **Advantages:** rapid, uniform drying; good temperature control (bed is isothermal, no hot spots); short drying time; small floor area; few moving parts; can combine drying with cooling or classification.
- **Disadvantages:** high power (fan, pressure drop through distributor and bed); attrition and dust; not for sticky, very fine or wide-size-range solids; particles reach the exit gas temperature, so heat-sensitive solids need a cool gas.
- **Uses:** fertilizers, plastics (PVC), foundry sand, inorganic salts, coal, food granules, pharmaceutical granulations.

### (ii) Merits of freeze-dried product

Freeze drying (lyophilization): the material is frozen and the ice is **sublimed** under high vacuum (below the triple point of water, < 0.6 kPa), followed by desorption of bound water.

1. **Quality preserved:** low temperature, no liquid phase, so heat-sensitive proteins, enzymes, vitamins, antibiotics, blood plasma, vaccines and living micro-organisms keep their activity.
2. **Structure and appearance kept:** the frozen skeleton does not shrink or collapse; colour, shape, flavour and aroma retained (coffee, fruit, ready meals).
3. **Porous product, rapid and complete rehydration** (instant products, injectable powders reconstituted in seconds).
4. **Very low final moisture (1–3 %)**: long shelf life at room temperature without refrigeration or preservatives.
5. **Light weight** (water removed): cheap storage and transport (military, space and camping food).
6. **No case hardening, no migration of solutes** to the surface, minimal oxidation (vacuum, low T) and no contamination.
7. **Uniform, consistent quality**; handles very fine (nano) and delicate materials; sterile processing possible.

*(Limitation: slow and the most expensive drying method: refrigeration, vacuum and long cycles; used for high-value products.)*`,
          answer: String.raw`(i) Gas fluidizes a granular bed above a distributor: rapid uniform drying, short time, good control, small area; high power, attrition, granular 1–3 mm feed only. (ii) Freeze-dried products keep activity, structure, colour, flavour; porous and rehydrate fast; 1–3 % moisture, long shelf life, light.` }
      ] },
    { id: "2020-21-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q3a", label: "(a)", marks: "10",
          topic: "pumps", sub: "Impeller size and power from Goulds pump curves (350 gpm, 300 ft)",
          type: "numerical", syllabus: "in", repeats: ["2017-18-Q3b", "2014-15-Q7b"],
          text: String.raw`A centrifugal pump with the characteristics shown in Figure for Question No. 3(a) delivers 350 gal/min at a head of 300 ft. Find the size of the impeller and required power and justify your answer.

Figure for Q3(a) (attached to the paper): Foust Fig. 21.17(b), Goulds centrifugal pump characteristics at 3550 rpm; inlet 4 in, outlet 3 in, 10-in casing that can take 6, 7, 8, 9 or 10 in impellers; curves of head against capacity for each impeller with efficiency contours (40–68 %), brake-horsepower lines (15–100 hp) and NPSH lines (7–35 ft).`,
          solution: String.raw`**Given:** duty Q = 350 gal/min, H = 300 ft; the 3550 rpm characteristic chart.

**Find:** impeller diameter and power.

**Assumptions:** liquid is water (sp. gr. 1.0, 8.34 lb/gal); the chart is at 3550 rpm.

1. **Locate the duty point.** On the chart go up the 350 gal/min line to 300 ft. At 350 gal/min the 8-in impeller curve gives only ≈ 255 ft and the 9-in curve ≈ 335 ft, so the point lies between them, a little more than half-way to the 9-in curve.

2. **Choose the impeller.** An 8-in impeller cannot develop 300 ft at 350 gal/min, so the **9-in impeller** is the smallest standard size that meets the duty. It runs at ≈ 335 ft; the extra ≈ 35 ft is taken by throttling the discharge valve (or the impeller is trimmed: at constant speed H ∝ D², so $D \approx 9\sqrt{300/335}$ ≈ 8.5 in). The 9-in curve is also reasonably flat and stable in this region.

3. **Efficiency and NPSH (chart).** The point lies between the 60 % and 65 % efficiency contours: η ≈ 0.62. NPSH required ≈ 12 ft (between the 10 ft and 15 ft lines); the suction system must supply more than this.

4. **Hydraulic (water) power at the duty:**

$$P_w = \frac{Q H\, s}{3960} = \frac{350 \times 300 \times 1.0}{3960} = 26.5\ \mathrm{hp}$$

5. **Brake power.** With the 9-in impeller throttled to 350 gal/min the pump actually develops 335 ft:

$$P_B = \frac{350 \times 335}{3960 \times 0.62} = 47.8\ \mathrm{hp}\ (35.6\ \mathrm{kW})$$

   which agrees with the bhp lines on the chart (just under the 50 hp line). With a trimmed 8.5-in impeller (exactly 300 ft): $P_B = 26.5/0.62$ ≈ 43 hp.

**Justification:** the impeller must be the smallest one whose H–Q curve lies above the duty point; the point is near the best-efficiency region (≈ 62 %), and a 50 hp motor covers the brake power (a 60 hp motor if the pump can run out to the end of its curve).

**Result:** 9-in impeller (trim to ≈ 8.5 in or throttle), η ≈ 62 %, brake power ≈ 48 hp → 50 hp motor.`,
          answer: String.raw`Point (350 gpm, 300 ft) lies between the 8-in (≈255 ft) and 9-in (≈335 ft) curves → use the 9-in impeller (throttle, or trim to ≈8.5 in); η ≈ 62 %, brake power ≈ 48 hp (≈ 43 hp if trimmed); 50 hp motor.` },
        { id: "2020-21-Q3b", label: "(b)", marks: "10+8=18",
          topic: "ejectors", sub: "Steam pressure and fixed-capacity ejectors; eight reasons ejectors are attractive",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q2c", "2017-18-Q4a"],
          text: String.raw`"In a fixed capacity ejector, an increase in steam pressure does not increase vapor handling capacity" - Evaluate the statement. Why is Ejector attractive for industrial application? Write eight reasons.`,
          solution: String.raw`### Evaluation of the statement (true)

1. **Fixed geometry.** In a "fixed capacity" ejector the steam nozzle throat and the diffuser throat are sized for one design point (motive steam pressure, suction load and pressure, discharge pressure). The suction capacity is set by the diffuser throat area, which is fixed.
2. **More pressure means more steam, not more suction.** The motive nozzle chokes, so steam flow rises roughly in proportion to absolute steam pressure: $\dot m_s \propto p_s$. The extra steam must also pass the fixed diffuser throat, so it takes up throat area that would otherwise carry suction vapour.
3. **Result (Ludwig ch. 6):** "An increase in steam pressure over design will not increase vapor handling capacity for the usual fixed capacity ejector. The increased pressure usually *decreases* capacity due to the extra steam in the diffuser." Steam consumption and condenser load rise while the economy falls.
4. **What steam pressure does matter:** the ejector is unstable below its design pressure (below the "break" pressure, capacity collapses and does not recover until the higher "pick-up" pressure is reached). So the design pressure is chosen as the **minimum** expected line pressure minus ≈ 10 psi; a little excess pressure is harmless, a deficit is not.
5. **Exception:** a *throttling-type* ejector (adjustable spindle nozzle) has a family of curves and can vary capacity with steam pressure, at a lower compression ratio. Capacity of a fixed ejector is raised only by a bigger unit or ejectors in parallel.

**Conclusion:** the statement is correct for fixed-capacity ejectors; raising motive pressure wastes steam and may reduce suction capacity.

### Eight reasons ejectors are attractive (Ludwig)

1. Handle wet, dry, condensable, corrosive or dirty vapour mixtures.
2. Develop any reasonable vacuum needed industrially (to about 0.01–0.05 mm Hg with 5–6 stages).
3. Available in all sizes, from very small to very large capacities.
4. **No moving parts**: low maintenance, long life, steady operation when corrosion is not a problem.
5. Low first cost and low installation cost compared with mechanical vacuum pumps; small space requirement.
6. Simple to operate and control; quick start-up (also used to evacuate the system at start-up).
7. Quiet, stable operation within the design range.
8. Can be made of almost any corrosion-resistant material (cast iron, stainless, Hastelloy, graphite, glass, PTFE-lined), and use available low-cost motive steam (or air/water); also serve as mixers, heaters and liquid lifters.`,
          answer: String.raw`True: nozzle and diffuser are fixed, so higher steam pressure only passes more steam (∝ p_s) through the fixed diffuser throat and can even lower suction capacity; design at minimum available pressure (below it the ejector is unstable). Reasons: no moving parts, low cost, any vacuum, any size, handles wet/corrosive gases, simple, quiet/stable, any material.` },
        { id: "2020-21-Q3c", label: "(c)", marks: "18⅔",
          topic: "compressors", sub: "Key items in a reciprocating compressor specification sheet",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Write the key components in the Specification Sheet of the Reciprocating Compressor.`,
          solution: String.raw`A reciprocating compressor data/specification sheet (API 618 style, Ludwig Vol. 3) is filled by the purchaser (process data) and completed by the vendor (mechanical data). Key components:

**1. General / identification**
- Item (tag) number, service, plant location, number of units (operating + spare), applicable codes (API 618, ASME VIII for vessels, API 670 etc.).

**2. Operating conditions (purchaser)**
- Gas handled and composition (mol %), molecular weight, $k = c_p/c_v$, compressibility Z at suction and discharge, corrosive/toxic components (H₂S, moisture).
- Capacity: SCFM (14.7 psia, 60 °F), ICFM/ACFM at inlet, lb/h; normal, rated and minimum cases.
- Inlet pressure and temperature (and relative humidity), discharge pressure; allowable discharge temperature (usually ≤ 300 °F); intermediate pressures for multistage.
- Site data: altitude, ambient range, cooling-water temperature and pressure, electrical supply, steam/air available.

**3. Performance (vendor)**
- Number of stages, compression ratio per stage, interstage pressures and temperatures.
- Volumetric efficiency, clearance (%), piston displacement (ft³/min) per cylinder.
- Brake horsepower per stage and total; guaranteed capacity and power tolerance.
- Speed (rpm) and average piston speed (ft/min).

**4. Cylinder data**
- Number of cylinders, single- or double-acting, bore, stroke, rod diameter.
- Cylinder material, liner, cooling (water-jacketed/air), design (MAWP) and test pressures.
- Valves: type (plate, ring, poppet), number, lift, material, velocity.
- Piston and rings/rider bands, piston rod (material, coating), packing (type, vented/purged), distance piece type.
- Lubricated or non-lubricated (oil-free) cylinders; lube system.

**5. Capacity control**
- Suction-valve unloaders, clearance pockets (fixed/variable), speed control, bypass; steps (0–25–50–75–100 %).

**6. Frame and running gear**
- Frame rating (rod load, hp), crankshaft, connecting rods, crossheads, bearings; frame lubrication (pump, filters, coolers).

**7. Driver and transmission**
- Driver type (induction/synchronous motor, gas engine, steam turbine), rated power and service factor, speed, coupling or belt/gear drive, flywheel.

**8. Auxiliaries**
- Suction strainers, knock-out drums, pulsation dampeners/bottles (acoustic study), intercoolers and aftercooler, moisture separators, relief valves on each stage, cooling-water system, instrumentation and shutdowns (high discharge T, low oil pressure, vibration).

**9. Materials, testing, documentation**
- Materials of construction for all wetted parts; shop tests (hydrotest, mechanical run), noise limit, painting, weights and dimensions, foundation and skid, drawings and spare parts.`,
          answer: String.raw`General data (tag, service, codes); gas properties (composition, M, k, Z); capacity (SCFM/ACFM), suction/discharge P and T; stages, ratios, bhp, speed, piston speed; cylinder data (bore, stroke, single/double acting, clearance, valves, packing, lubrication); capacity control; frame; driver; intercoolers, dampeners, relief valves, instruments; materials and tests.` }
      ] },
    { id: "2020-21-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q4a", label: "(a)", marks: "14⅔",
          topic: "relief", sub: "Balanced-bellows safety valve and backpressure",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q4b", "2018-19-Q1b", "2011-12-Q4b"],
          text: String.raw`Evaluate the statement - "Balanced safety valve is advantageous to offset backpressure effect."`,
          solution: String.raw`**Backpressure** is the pressure at the valve outlet: *superimposed* (present before the valve opens, from a common header, scrubber or flare) and *built-up* (created by flow in the discharge piping once the valve opens).

**Conventional spring valve.** The bonnet is vented to the outlet, so backpressure $p_b$ acts on the back of the disc over area $(A_N - A_s)$ where it adds to the spring force (and the body side sees the outlet too). The force balance at lift-off is approximately

$$p_{set} A_s = F_{spring} + p_b\,(A_N - A_s)\quad\Rightarrow\quad p_{set} \text{ shifts with } p_b$$

- A **variable** superimposed backpressure changes the opening pressure; a constant one can be compensated in the spring setting (cold differential test pressure) only if it never varies.
- Built-up backpressure above about **10 %** of set pressure causes chattering, loss of lift and reduced capacity (and can stop reseating properly).

**Balanced-bellows valve.** A bellows with effective area equal to the seat area is fitted between disc and spring; the spring and the back of the disc are isolated from the outlet fluid and the bonnet is **vented to atmosphere**. Backpressure now acts equally on both sides of the bellows-disc assembly and its forces cancel:

$$p_{set} A_s = F_{spring}\quad(\text{independent of }p_b)$$

**Advantages (statement valid):**
1. Opens at (near) the set pressure **regardless of backpressure**: predictable set point with a variable backpressure (common flare/scrubber header). In Crowl & Louvar Example 8-2, PSV-4 venting to a scrubber with a possibly large backpressure is specified as a balanced-bellows valve.
2. Tolerates built-up backpressure up to about 30–50 % of set pressure (vs ~10 % for a conventional valve), so smaller discharge piping can be used.
3. The bellows also protects the spring, guide and bonnet from corrosive, sticky or fouling fluids.

**Limitations (why "advantageous", not "cures everything"):**
- The *flow rate* still depends on backpressure; at high backpressure a capacity correction factor $K_b$ is needed in sizing.
- More expensive; bellows can fatigue/crack, and the bonnet vent must stay open to atmosphere (a leak there releases process fluid; route the vent safely). Bellows pressure rating limits the backpressure.

**Conclusion:** the statement is correct: a balanced (bellows) safety valve removes the effect of backpressure on the set (opening) pressure and greatly reduces its effect on lift and capacity, which is why it is used whenever backpressure is large or variable.`,
          answer: String.raw`Valid: in a conventional valve p_b adds to the spring force so set pressure and capacity vary (chatter above ~10 % built-up p_b); a bellows with area = seat area cancels the p_b forces (bonnet vented to atmosphere), giving a constant set point and tolerating p_b to ~30–50 %; costs more and capacity still needs K_b.` },
        { id: "2020-21-Q4b", label: "(b)", marks: "20",
          topic: "relief", sub: "Styrene runaway (Huff/Leung): all-vapour rupture-disc vent diameter",
          type: "numerical", syllabus: "in", repeats: ["2019-20-Q8a"],
          text: String.raw`Leung reported on the data of Huff involving a 3500-gal reactor with styrene monomer undergoing adiabatic polymerization after being heated inadvertently to 70°C. The vessel's maximum allowable working pressure (MAWP) is 5 bar. Given the following data, determine the relief vent diameter required for the rupture disc. Suppose that all vapor relief was assumed. Assume a set pressure of 4.5 bar and a maximum pressure of 5.4 bar absolute:

**Data:** Volume (V): 3500 gal = 13.16 m³; reaction mass ($m_o$): 9500 kg; set temperature ($T_s$): 209.4 °C = 482.5 K. Data from VSP: maximum temperature ($T_m$): 219.5 °C = 492.7 K; $(dT/dt)_s$ = 29.6 °C/min = 0.493 K/s; $(dT/dt)_m$ = 39.7 °C/min = 0.662 K/s; γ = 1.32 and $C_o$ = 1.0.

**Physical property data**

| | 4.5-bar set | 5.4-bar peak |
|---|---|---|
| $v_f$ (m³/kg) | 0.001388 | 0.001414 |
| $v_g$ (m³/kg) | 0.08553 | 0.07278 |
| $C_p$ (kJ/kg K) | 2.470 | 2.514 |
| $\Delta H_v$ (kJ/kg) | 310.6 | 302.3 |

**Necessary equations**

$$A = \frac{Q_m}{C_o P}\sqrt{\frac{R_g T}{\gamma g_c M}\left(\frac{2}{\gamma+1}\right)^{(\gamma+1)/(1-\gamma)}}\qquad q = C_v\left(\frac{dT}{dt}\right)_s\qquad Q_m = \frac{q\,m_o}{\Delta H_v}$$`,
          solution: String.raw`**Given:** $m_o$ = 9500 kg, $(dT/dt)_s$ = 0.493 K/s, set-point properties $C_p$ = 2.470 kJ/kg K, $\Delta H_v$ = 310.6 kJ/kg; γ = 1.32, $C_o$ = 1.0, M = 104 (styrene), P = 5.4 bar abs (maximum), T = 482.5 K.

**Find:** rupture-disc diameter for all-vapour relief.

**Assumptions (Crowl & Louvar Example 9-5):** the heat generated at the set point vaporizes liquid, and only vapour leaves; $C_v$ is taken (conservatively) as the larger $C_p$ value at the set point; ideal gas (z = 1); $K_b$ = 1 (L/D = 0). The printed exponent means $(\gamma+1)/(1-\gamma)$, i.e. $\left(\frac{\gamma+1}{2}\right)^{(\gamma+1)/(\gamma-1)}$.

1. **Energy input rate at the set point:**

$$q = C_v\left(\frac{dT}{dt}\right)_s = 2.470 \times 0.493 = 1.218\ \mathrm{kJ/kg\,s}$$

2. **Vapour mass flow that must be vented:**

$$Q_m = \frac{q\,m_o}{\Delta H_v} = \frac{1.218 \times 9500}{310.6} = 37.2\ \mathrm{kg/s}$$

3. **Choked-flow term** (γ = 1.32):

$$\left(\frac{\gamma+1}{2}\right)^{\frac{\gamma+1}{\gamma-1}} = (1.16)^{7.25} = 2.931$$

$$\frac{R_g T}{\gamma M} \times 2.931 = \frac{8314 \times 482.5}{1.32 \times 104} \times 2.931 = 2.922\times10^4 \times 2.931 = 8.565\times10^4\ \mathrm{m^2/s^2}$$

   (SI units, $g_c$ = 1), square root = 292.7 m/s.

4. **Vent area** at the maximum pressure P = 5.4 bar = 5.4 × 10⁵ Pa:

$$A = \frac{Q_m}{C_o P}\sqrt{\cdots} = \frac{37.2}{1.0 \times 5.4\times10^5} \times 292.7 = 0.0202\ \mathrm{m^2}$$

5. **Diameter:**

$$d = \sqrt{\frac{4A}{\pi}} = \sqrt{\frac{4 \times 0.0202}{\pi}} = 0.160\ \mathrm{m} = 6.3\ \mathrm{in}$$

   (Using T = 492.7 K gives A = 0.0204 m², d = 0.161 m: practically the same.)

**Comment:** the two-phase (DIERS) calculation for the same runaway gives A = 0.084 m², d = 0.33 m (13 in). If the vent were sized for all-vapour flow but a two-phase (froth) release occurred, the 6.3-in disc would be badly undersized and the reactor would not be protected.

**Result:** all-vapour rupture disc A ≈ 0.020 m², **d ≈ 0.16 m (≈ 6.3 in)**.`,
          answer: String.raw`q = 1.218 kJ/kg s, Q_m = 37.2 kg/s, A = 0.0202 m², d = 0.16 m (6.3 in) for all-vapour relief (vs 0.33 m/13 in for two-phase).` },
        { id: "2020-21-Q4c", label: "(c)", marks: "6×2=12",
          topic: "relief", sub: "What is wrong with two relief layouts (pumps, supply tanks)",
          type: "theory", syllabus: "in", repeats: ["2018-19-Q1c"],
          text: String.raw`The following configurations provide us with the information on what not to do while placing relief valves or rupture disk on process vessels. What are the wrongs with the given configurations and justify with appropriate reasons?

Figure a: a vessel fed by three 100 gpm pumps, with a relief "sized for 100 gpm". Figure b: three supply tanks, each connected through a block valve (one closed, two open) to a common line with one relief "sized for two tanks" (Figure for Question no. 4(c), Crowl & Louvar, redrawn).

![Figure for Q4(c), redrawn: (a) three 100 gpm pumps on one vessel with a relief sized for 100 gpm; (b) three supply tanks on one relief sized for two tanks, one block valve closed](fig/2020-21-Q4c.svg)`,
          solution: String.raw`**Figure a: relief undersized for the pump scenario.**
- What is wrong: the vessel can receive liquid from **three** 100 gpm pumps, but the relief is sized for only 100 gpm.
- Why it matters: relief must be sized for the **worst credible scenario**. If the outlet is blocked (or the vessel overfills) while all pumps run, up to 3 × 100 = 300 gpm must be relieved; at 300 gpm the 100 gpm relief cannot pass the flow and the pressure rises above MAWP (vessel rupture).
- Correct practice: size the relief for the combined capacity of all pumps that can run at the same time (300 gpm at the pumps' deadhead pressure), or provide interlocks/one relief per source; check the pump curves at the relief pressure.

**Figure b: relief protection depends on valve positions.**
- What is wrong: three tanks share one relief "sized for two tanks", which is acceptable only while one block valve stays closed; and the closed block valve **isolates** one tank from its relief.
- Why it matters: (1) the isolated tank has **no overpressure protection** (fire exposure, overfilling, thermal expansion); (2) if someone opens the third valve (all three tanks connected) and an overpressure event involves all of them, the relief is **undersized** by one-third. Safety should never depend on an operator keeping a valve in a given position.
- Correct practice: no block valve between a vessel and its relief device unless it is car-sealed/locked open (and administratively controlled); either give **each tank its own relief**, or size the common relief for **all three tanks** with locked-open valves.

**General lesson:** relief devices are sized for the maximum flow from all sources acting together, and every vessel must stay connected to a relief whatever the valve line-up.`,
          answer: String.raw`(a) Three 100 gpm pumps can feed the vessel at 300 gpm, but the relief is sized for 100 gpm → undersized; size for 300 gpm. (b) A closed block valve isolates one tank (unprotected) and if opened the relief (sized for two) is too small; each tank needs its own relief or one sized for all three with locked-open valves.` }
      ] },
    { id: "2020-21-Q5", q: 5, section: "B", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q5a", label: "(a)", marks: "5⅔",
          topic: "separator-selection", sub: "Primary particles, aggregates, agglomerates: energy for separation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Which form of powder needs more energy for separation? Describe it on the basis of powder properties.`,
          solution: String.raw`A powder exists in three forms (Mech. Sep. lecture 2_1, "Powder properties"):

| form | what it is | bonding | energy to separate |
|---|---|---|---|
| **Primary particles** | the fundamental single particles (crystallites, grains) | the solid's own chemical/crystal bonds inside the particle | **ultra-high**: separating means breaking the particle itself |
| **Aggregates** | primary particles fused or bonded at their faces | strong chemical bonds, sinter necks, solid bridges | high force (milling) |
| **Agglomerates** | loose clusters of primary particles/aggregates | weak van der Waals, electrostatic, liquid bridges (moisture) | low: shaking, ultrasound, mild dispersion |

**Answer: primary particles need the most energy**, followed by aggregates; agglomerates need the least.

**Reasoning from powder properties:**
- **Particle size and surface area:** the smaller the particle, the larger the specific surface ($6/(\phi d)$ per unit volume) and the more surface energy must be created to break it further (Rittinger: energy ∝ new surface). Fine primary particles also have very small settling and inertial forces, so collecting them needs high-energy devices (venturi scrubbers, fabric filters, ESP).
- **Bond strength:** intraparticle chemical bonds ≫ interparticle bonds in aggregates ≫ van der Waals forces in agglomerates.
- **Cohesion and moisture:** fine, cohesive, moist or charged powders form agglomerates easily; these break with little energy but re-form.
- **Shape and hardness:** irregular, hard, tough particles need more energy than friable, spherical ones.
- **Density:** low-density fine particles follow the gas and are hardest to separate mechanically.`,
          answer: String.raw`Primary particles (fundamental particles: separating means breaking intraparticle bonds) need ultra-high energy; aggregates (chemically bonded) need high force; agglomerates (van der Waals bonded) need little energy. Smaller size, larger surface area, stronger bonds and hardness raise the energy.` },
        { id: "2020-21-Q5b", label: "(b)", marks: "10⅔",
          topic: "separator-selection", sub: "Sylvan chart: collectors for 4 μm ceramic fines at 10 gr/ft³",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Fines are produced from raw materials' handling unit in ceramics operation at the rate of 10 grains/cu.ft. with the mean diameter of 4 micron. Propose at least two suitable equipment to achieve the highest collection efficiency and calculate the final flowrate and concentration of the fines. Use Sylvan chart, locate the points and attach the figure with your answer script.

Figure for question no 5b (attached to the paper): Sylvan chart of dust-collector efficiency against mean particle size, with dust-concentration ranges (grains/ft³) and typical industrial dust sources.`,
          solution: String.raw`**Given:** inlet loading $c_0$ = 10 gr/ft³, mean particle size 4 μm, dry ceramic raw-material dust.

**Find:** suitable collectors, outlet concentration and dust flow.

**Assumptions:** no gas flow rate is given, so the dust flow is worked per 10,000 ft³/min (SCFM) of gas (scale linearly); the same mean size is used to read the second stage (conservative practice is to read a slightly finer size); 7000 grains = 1 lb.

1. **Locate the point** on the Sylvan chart: 10 gr/ft³ on the dust-collecting concentration scale (top, "ordinarily visible effluents", the range of abrasive cleaning and ceramic/sand handling) and 4 μm on the mean-particle-size scale (microscopic range).

2. **Read the efficiencies** where the 4 μm line crosses the collector bands:

| collector | efficiency at 4 μm (chart) |
|---|---|
| low-resistance cyclone | well below 50 % (off scale) |
| high-efficiency cyclone | ≈ 50 % |
| wet collector (scrubber) | ≈ 93 % |
| electrostatic precipitator | ≈ 97 % |
| cloth (fabric) arrester | ≈ 99 % |

   Cyclones alone are unsuitable for 4 μm dust; fabric filters, ESPs and wet collectors are the candidates.

3. **Proposal 1: high-efficiency cyclone (pre-cleaner) + fabric filter.** The cyclone removes the coarse fraction and cuts the load on the bags (as in the slide kiln example: cyclone first, then a high-efficiency collector):

$$c_1 = 10(1-0.50) = 5.0\ \mathrm{gr/ft^3},\qquad c_2 = 5.0(1-0.99) = 0.050\ \mathrm{gr/ft^3}$$

   overall efficiency = 1 − 0.05/10 = **99.5 %**.

4. **Proposal 2: high-efficiency cyclone + ESP:**

$$c_2 = 10(0.50)(1-0.97) = 0.15\ \mathrm{gr/ft^3}\quad(98.5\ \%)$$

   (A fabric filter alone: 10 × 0.01 = 0.10 gr/ft³; a wet scrubber alone: 0.70 gr/ft³ and it produces a slurry that ceramic plants want to avoid.)

5. **Dust flows** per 10,000 ft³/min:

$$\dot m_{in} = \frac{10 \times 10{,}000 \times 60}{7000} = 857\ \mathrm{lb/h}$$

| scheme | outlet gr/ft³ | fines leaving, lb/h | fines collected, lb/h |
|---|---|---|---|
| cyclone + fabric filter | 0.050 | 4.3 | 852.9 |
| cyclone + ESP | 0.15 | 12.9 | 844.3 |

**Recommendation:** for dry, non-sticky ceramic dust at near-ambient temperature, **high-efficiency cyclone + fabric (bag) filter** gives the highest efficiency (99.5 %), dry product that can be returned to the process, and an outlet of 0.05 gr/ft³; ESP is the second choice (higher cost, resistivity-dependent).`,
          answer: String.raw`At 4 μm: HE cyclone ≈ 50 %, wet ≈ 93 %, ESP ≈ 97 %, fabric ≈ 99 %. Cyclone + bag filter: 10 → 5 → 0.05 gr/ft³ (99.5 %), ≈ 4.3 lb/h emitted per 10,000 cfm (857 lb/h in); cyclone + ESP: 0.15 gr/ft³ (12.9 lb/h). Recommend cyclone + fabric filter.` },
        { id: "2020-21-Q5c", label: "(c)", marks: "6⅔",
          topic: "dust-collection", sub: "Cyclone as primary collector; critical (cut) diameter",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why cyclone separator is called primary collector? Define the concept of critical diameter in operating cyclone separation.`,
          solution: String.raw`**Why "primary collector"**
- A cyclone removes particles by centrifugal force; it captures nearly all particles above about 20–30 μm, but its efficiency falls steeply for fine dust (typically 70–90 % overall, < 50 % at a few μm).
- It is cheap, has no moving parts, handles high dust loadings and high temperatures, and has a modest pressure drop.
- So it is placed **first** in a gas-cleaning train, to take out the bulk and coarse fraction, reduce abrasion and loading, and protect the high-efficiency **secondary** collector (fabric filter, ESP, scrubber) that removes the fines. Hence it is called a primary collector (pre-cleaner).

**Critical (cut) diameter**
- The critical particle diameter $d_{pc}$ (cut size, $d_{50}$) is the particle size that the cyclone removes with **50 % efficiency**. Larger particles are collected with higher efficiency, smaller ones mostly escape.
- Lapple's equation (balancing centrifugal migration across the inlet width B during $N_t$ turns):

$$d_{pc} = \left[\frac{9\,\mu\,B}{2\pi\,N_t\,V_i\,(\rho_p-\rho_g)}\right]^{1/2}$$

  μ gas viscosity, B inlet width (≈ D/4), $N_t$ number of effective turns (normally 5; 1–2 gives re-entrainment), $V_i$ inlet velocity (1000–4000 ft/min, average 3000).
- The efficiency of any size follows from it, e.g. Lapple: $\eta = 1/[1+(d_{pc}/d_p)^2]$.
- Example: B = 0.25 m, $V_i$ = 15 m/s, $N_t$ = 5, μ = 1.8 × 10⁻⁵ Pa s, $\rho_p$ = 2500 kg/m³ gives $d_{pc}$ ≈ 5.9 μm.
- Smaller cut size (better cyclone): smaller diameter/inlet width, higher inlet velocity, more turns, denser particles.`,
          answer: String.raw`Cyclones are cheap, rugged, take high loads but are efficient only for coarse (> 20–30 μm) dust, so they come first as pre-cleaners before a fine collector. Critical diameter = size collected with 50 % efficiency: d_pc = [9μB/(2πN_tV_i(ρ_p − ρ_g))]^½.` },
        { id: "2020-21-Q5d", label: "(d)", marks: "6⅔",
          topic: "dust-collection", sub: "Choosing dry or wet scrubbing, with an example",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q6c"],
          text: String.raw`What are the deciding criteria of choosing dry and wet scrubbing technique? Illustrate with an example.`,
          solution: String.raw`**Wet scrubbing** contacts the gas with a liquid (usually water or an alkaline slurry); **dry (and semi-dry) scrubbing** uses a dry powder or a slurry that dries in the gas (spray-dryer absorber), followed by a fabric filter or ESP.

**Deciding criteria**

| criterion | favours wet | favours dry/semi-dry |
|---|---|---|
| pollutant and required removal | high removal (> 95 %) of soluble gases (SO₂, HCl, NH₃), sticky or hygroscopic particles, mists | moderate removal (70–95 %), acid gases plus dust in one step |
| gas temperature/humidity | hot gases are quenched (also cools the gas); saturated gases are fine | gas must stay above dew point; hot dry gas helps evaporate slurry |
| particle nature | sticky, combustible/explosive dust (wet is safe), fine mists | dry, free-flowing dust that is valuable when recovered dry |
| water and wastewater | water available, wastewater/sludge treatment acceptable | water scarce, no liquid effluent allowed (dry waste) |
| corrosion and plume | corrosion-resistant materials, visible steam plume, reheat may be needed | less corrosion, no plume |
| cost and energy | higher operating cost (pumps, high Δp in venturi), lower capital for small units | lower operating cost, higher sorbent use; simple |
| by-product | saleable gypsum (limestone FGD) | dry, mixed waste |

**Example: SO₂ removal from a coal-fired boiler.**
- High-sulphur coal, large power plant, > 95 % SO₂ removal required, water available: **wet limestone scrubber** (CaCO₃ + SO₂ + ½O₂ + 2H₂O → CaSO₄·2H₂O, saleable gypsum).
- Low-sulphur coal or a small industrial boiler/incinerator, 80–90 % removal, no wastewater allowed: **spray-dryer (semi-dry) lime scrubber** or dry sorbent (lime/sodium bicarbonate) injection, followed by a **fabric filter** that collects fly ash and reacted sorbent together.

(For dust alone: sticky or explosive dust from a dryer → wet scrubber; dry, valuable dust → dry collection in a bag house.)`,
          answer: String.raw`Choose by pollutant and required efficiency, gas temperature/dew point, particle stickiness/explosibility, water and wastewater availability, corrosion/plume, cost and by-product. Example: high-S coal boiler → wet limestone FGD (> 95 %, gypsum); low-S/small unit with no wastewater → spray-dryer/dry lime + bag filter.` },
        { id: "2020-21-Q5e", label: "(e)", marks: "6⅔",
          topic: "other", sub: "Velocity compounding in steam turbines; why reaction turbines lack it",
          type: "theory", syllabus: "out", repeats: ["2019-20-Q4c", "2018-19-Q6b"],
          text: String.raw`Explain velocity compounding in steam turbine and give proper reasoning of its absence in reaction turbine.`,
          solution: String.raw`**The problem compounding solves.** In a simple impulse (de Laval) turbine the whole pressure drop occurs in one set of nozzles, so the steam leaves at a very high velocity (≈ 1000–1200 m/s). For maximum blade efficiency the blade speed should be $u \approx \frac{V_1\cos\alpha}{2}$ (several hundred m/s), which needs impractically high rotor speeds (≈ 30,000 rpm) and large carry-over (exit) losses. Compounding splits the energy among several rows.

**Velocity compounding (Curtis stage)**

![Curtis stage: all pressure drop in the nozzle; the velocity is absorbed in two moving rows with a fixed guide row between them](fig/2020-21-Q5e-sketch.svg)

- One set of nozzles expands the steam through the **whole** pressure drop of the stage: pressure falls once, velocity rises to its maximum.
- The jet then passes **two (or three) rows of moving blades** on the same wheel, with a row of **fixed guide blades** between them. Each moving row absorbs part of the kinetic energy; the guide blades only reverse the direction of the steam so that it enters the next moving row correctly. There is no pressure drop in the moving or guide blades (pure impulse); the velocity drops in steps.
- Optimum blade-speed ratio for n moving rows: $u/V_1 = \cos\alpha/(2n)$, so with two rows the rotor speed is halved for the same steam velocity.
- Features: short, compact, few stages, used as the first (control) stage of large turbines and in small mechanical-drive turbines; efficiency lower than pressure compounding because of high-velocity friction losses in several rows.

**Why there is no velocity compounding in a reaction turbine**
1. In a reaction (Parsons) stage the pressure drops in **both** the fixed and the moving blades (degree of reaction ≈ 50 %). The fixed blades act as nozzles and the moving blades also accelerate the steam relative to themselves, so the total enthalpy drop is shared among many stages: the turbine is inherently **pressure compounded**.
2. Because each row handles only a small pressure drop, steam velocities are moderate everywhere and the optimum blade speed ($u \approx V_1\cos\alpha$) is reached at normal rotor speeds. There is no single very high-velocity jet that must be absorbed in several rows, so velocity compounding has nothing to do.
3. Velocity compounding requires guide rows with **no** pressure drop; in a reaction turbine every fixed row is an expanding (nozzle) row, so the concept is contradictory. Also, with a pressure difference across moving blades, extra rows at constant pressure would only add tip leakage and friction losses.`,
          answer: String.raw`Velocity compounding (Curtis): all Δp in one nozzle, then 2–3 moving rows with fixed guide blades between them absorb the high velocity in steps (u/V = cosα/2n), lowering rotor speed. Reaction turbines expand steam in both fixed and moving rows over many stages, so velocities stay moderate (inherently pressure-compounded) and pressure-free guide rows do not exist.` },
        { id: "2020-21-Q5f", label: "(f)", marks: "10⅔",
          topic: "dust-collection", sub: "Fabric filter design criteria; effect of humidity and temperature",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write the successful design criteria of fabric filter and describe the effect of humidity and temperature during operating fabric filter.`,
          solution: String.raw`### Design criteria for a successful fabric filter (bag house)

1. **Air-to-cloth (A/C) ratio** (filtration velocity): actual gas flow ÷ net cloth area. Shaker/reverse-air (low-energy) 1:1–3:1 ft/min; pulse-jet (high-energy) 5:1–10:1. Too high a ratio blows dust through and blinds the fabric; too low makes the unit large and costly.
2. **Net and gross cloth area:** $A_{nc} = Q_{actual}/(A/C)$; gross area adds the compartments off-line for cleaning and maintenance.
3. **Pressure drop:** design 5–20 in. H₂O across bags and cake; sets fan power and cleaning frequency.
4. **Fabric selection:** temperature limit, chemical resistance (acid, alkali, SO₃), abrasion, permeability, woven (low-energy cleaning, cake does the filtering) or felted (pulse-jet), surface treatments (PTFE membrane, singeing).
5. **Cleaning method and cycle:** shaking, reverse air or pulse jet; cleaning interval matched to cake build-up; cleaning must not over-clean (lower efficiency until the cake reforms).
6. **Dust properties and loading:** particle size (0.1–1 μm hardest), stickiness, abrasiveness, explosibility; reduce high loadings with a cyclone pre-collector.
7. **Configuration:** positive-pressure (forced-draft fan, open or closed) or negative-pressure (induced draft, closed); operating pressure usually within ±20 in. H₂O; compartments for on-line cleaning.
8. **Materials and housing:** carbon steel normally, stainless where SO₃ or condensation occurs; insulation; hopper design with dust discharge (rotary valve), access for bag change; fire/explosion protection.
9. **Efficiency target:** > 99 % is normal; depends on A/C, fabric, cake and cleaning.

### Effect of humidity
- **Moderate humidity helps:** with many dusts 60 % RH gives much better efficiency than 20 % RH; moisture lowers electrostatic charging and resistivity, so the cake forms quickly and holds fine particles.
- **High humidity / condensation harms:** if the gas reaches its dew point, hygroscopic dust becomes wet, **bridges and "muds" (blinds) the bags**, pressure drop rises sharply, cleaning fails, hoppers plug and the housing corrodes (acid condensation with SO₃, HCl).

### Effect of temperature
- **Lower limit: dew point.** Operate 25–50 °F (15–30 °C) above the water/acid dew point; insulate the housing, heat it or dilute with warm dry gas during start-up.
- **Upper limit: fabric.** Above the fabric's limit bags degrade quickly (cotton ≈ 80 °C, polypropylene ≈ 90 °C, polyester ≈ 135 °C, Nomex ≈ 200 °C, PPS ≈ 190 °C, glass fibre and PTFE ≈ 260 °C). Hot gases need cooling (dilution air, water spray, heat exchanger) and temperature alarms; sparks can cause bag fires.
- **Gas volume and viscosity** rise with temperature: more cloth area for the same A/C ratio and higher pressure drop ($\Delta p \propto \mu V$).`,
          answer: String.raw`Design: A/C ratio (1–3:1 shaker, 5–10:1 pulse jet), net/gross cloth area, Δp 5–20 in. H₂O, fabric (T, chemical), cleaning method, dust loading (pre-collector), ±20 in. H₂O housing, materials. Moderate humidity improves cake/efficiency; condensation blinds bags and corrodes. Keep T above dew point and below fabric limit; higher T raises gas volume and Δp.` }
      ] },
    { id: "2020-21-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q6a", label: "(a)", marks: "20",
          topic: "other", sub: "Types of steam turbines and selection criteria",
          type: "sketch", syllabus: "out", repeats: [],
          text: String.raw`Describe different types of steam turbine with major selecting criteria. Sketch proper diagram where necessary.`,
          solution: String.raw`### Types of steam turbines

**1. By action of steam**
- **Impulse turbine:** steam expands only in stationary nozzles; moving blades are symmetrical and only change the direction of the jet (no pressure drop across them). Examples: de Laval (single stage), Curtis, Rateau.
- **Reaction turbine:** steam expands in both fixed and moving blades (Parsons, ≈ 50 % reaction); the moving blades are shaped like nozzles and are driven by the reaction of the accelerating jet. Needs balancing pistons for end thrust and close tip clearances.

**2. By compounding (impulse machines)**
- **Simple (single-stage) impulse** (de Laval): very high speed, small power.
- **Pressure-compounded (Rateau):** several nozzle + moving-row stages in series, the pressure drop is split; moderate velocities, high efficiency, long machine.
- **Velocity-compounded (Curtis):** one nozzle, two or three moving rows with guide blades; compact, used as the first stage.
- **Pressure–velocity compounded:** Curtis first stage followed by Rateau or reaction stages (large turbines).

![Pressure and velocity through the rows of the four stage types](fig/2020-21-Q6a-sketch.svg)

**3. By direction of flow:** axial (most common), radial (Ljungström, counter-rotating), tangential (helical).

**4. By exhaust / steam use (most important for process plants)**
- **Condensing turbine:** exhausts to a vacuum condenser (0.05–0.1 bar) for maximum work per kg; power generation.
- **Back-pressure (non-condensing) turbine:** exhausts at a process steam pressure (2–20 bar) that is then used for heating; very high overall (cogeneration) efficiency; power tied to process steam demand.
- **Extraction (pass-out) turbine:** steam is withdrawn at one or two intermediate pressures (controlled or uncontrolled) for process use, the rest goes on to exhaust (as in Q6(b)).
- **Induction (mixed-pressure) turbine:** low-pressure surplus steam is admitted at an intermediate stage.
- **Reheat turbine:** steam returned to the boiler between HP and IP sections.

**5. By application and speed:** generator drives (constant speed 3000/3600 rpm), mechanical drives for pumps, compressors and fans (variable speed), marine propulsion; single- or multi-casing (HP, IP, LP), single- or double-flow LP.

### Major selection criteria
1. **Power required** and **speed** of the driven machine (direct drive or gearbox).
2. **Steam conditions available:** inlet pressure and temperature (superheat), and the **exhaust pressure** needed: condensing for maximum power, back-pressure/extraction when the plant needs process steam (heat balance of the site).
3. **Efficiency and steam rate** (kg/kWh) at design and part load; number of stages (cost vs efficiency).
4. **Load variation and control:** constant or variable speed, governor type, extraction control.
5. **Reliability and spare philosophy** (critical drives, API 611/612 for general/special purpose turbines).
6. **Capital, operating and maintenance cost; size and weight; start-up time.**
7. **Steam quality at exhaust** (moisture < 10–12 % to limit blade erosion) and condenser cooling water availability.

**Typical choice:** large power stations: multi-casing reheat condensing reaction/impulse turbines; chemical plants: back-pressure or extraction-condensing turbines driving compressors/pumps and supplying process steam; small drives: single-stage Curtis impulse turbines.`,
          answer: String.raw`Impulse vs reaction; simple, pressure (Rateau), velocity (Curtis) and pressure–velocity compounded; axial/radial; condensing, back-pressure, extraction, induction, reheat; generator or mechanical drive. Select by power and speed, inlet steam and exhaust (process steam) needs, efficiency/steam rate, load control, reliability and cost.` },
        { id: "2020-21-Q6b", label: "(b)", marks: "26⅔",
          topic: "other", sub: "HP–LP turbine with extraction: inlet state from Mollier chart",
          type: "numerical", syllabus: "out", repeats: [],
          text: String.raw`Steam is to be supplied from a boiler to a high-pressure turbine whose isentropic efficiency is 85 percent at conditions to be determined. The steam is to leave the high-pressure turbine as a saturated vapor at 1.4 MPa pressure, and the turbine is to produce 5.5 MW of power. Steam at the turbine exit is extracted at a rate of 1000 kg/min and routed to a process heater while the rest of the steam is supplied to a low-pressure turbine whose isentropic efficiency is 80 percent. The low-pressure turbine allows the steam to expand to 10 kPa pressure and produces 1.5 MW of power. Evaluate the temperature, pressure, and the flow rate of steam at the inlet of the high-pressure turbine using Mollier diagram. (Attach the diagram with your answer script)

Figure for question no 6(b) (attached to the paper): Mollier (h–s) chart for steam, 2000–4000 kJ/kg, s = 5–9 kJ/kg K.`,
          solution: String.raw`**Given:** HP turbine $\eta_{HP}$ = 0.85, exit (state 2) saturated vapour at 1.4 MPa, $\dot W_{HP}$ = 5.5 MW; extraction 1000 kg/min = 16.67 kg/s; LP turbine $\eta_{LP}$ = 0.80, 1.4 MPa → 10 kPa, $\dot W_{LP}$ = 1.5 MW.

**Find:** $P_1$, $T_1$, $\dot m_1$ at the HP inlet.

**Assumptions:** steady flow, adiabatic turbines, negligible kinetic/potential energy changes. Values read on the Mollier chart are checked with the steam tables (Çengel Tables A-5, A-6).

1. **State 2 (HP exit = LP inlet), saturated vapour at 1.4 MPa:** $T_2$ = 195.0 °C, $h_2$ = 2788.9 kJ/kg, $s_2$ = 6.4675 kJ/kg K (on the chart: the point where the 14 bar line meets the saturation line x = 1).

2. **LP turbine, isentropic end state 3s** at 10 kPa, $s_{3s} = s_2$ (go vertically down from point 2 to the 0.1 bar line):

$$x_{3s} = \frac{6.4675 - 0.6492}{7.4996} = 0.776,\qquad h_{3s} = 191.8 + 0.776(2392.1) = 2047.6\ \mathrm{kJ/kg}$$

$$h_3 = h_2 - \eta_{LP}(h_2 - h_{3s}) = 2788.9 - 0.80(741.3) = 2195.8\ \mathrm{kJ/kg}\ (x_3 = 0.838)$$

3. **LP flow from its power:**

$$\dot m_{LP} = \frac{1500}{h_2 - h_3} = \frac{1500}{593.0} = 2.53\ \mathrm{kg/s}$$

4. **HP flow** (all steam passes the HP turbine):

$$\dot m_1 = 16.67 + 2.53 = 19.20\ \mathrm{kg/s}\ (= 1152\ \mathrm{kg/min} = 69.1\ \mathrm{t/h})$$

5. **HP actual work and inlet enthalpy:**

$$w_{HP} = \frac{5500}{19.20} = 286.5\ \mathrm{kJ/kg},\qquad h_1 = h_2 + w_{HP} = 3075.4\ \mathrm{kJ/kg}$$

6. **HP isentropic end state.** $h_1 - h_{2s} = w_{HP}/\eta_{HP} = 286.5/0.85 = 337.1$ kJ/kg, so $h_{2s}$ = 2738.3 kJ/kg at 1.4 MPa (slightly wet):

$$x_{2s} = \frac{2738.3 - 830.1}{1958.9} = 0.974,\qquad s_{2s} = 2.2835 + 0.974(4.1840) = 6.3595\ \mathrm{kJ/kg\,K}$$

7. **State 1 on the Mollier chart:** since $s_1 = s_{2s}$, go vertically up from point 2s (s = 6.36) to h = 3075 kJ/kg. The point lies between the 60 and 70 bar lines and close to the 350–400 °C isotherms. Superheated tables: at 6 MPa, 350 °C h = 3043.9, s = 6.3357; at 7 MPa, 400 °C h = 3159.2, s = 6.4502; interpolating in P and T for h = 3075.4, s = 6.3595:

$$P_1 \approx 6.4\ \mathrm{MPa},\qquad T_1 \approx 365\ ^\circ\mathrm{C}$$

| state | P | T, °C | h, kJ/kg | s, kJ/kg K |
|---|---|---|---|---|
| 1 HP inlet | 6.4 MPa | 365 | 3075 | 6.36 |
| 2s | 1.4 MPa | 195 (x = 0.974) | 2738 | 6.36 |
| 2 HP exit | 1.4 MPa | 195 (x = 1) | 2789 | 6.47 |
| 3s | 10 kPa | 45.8 (x = 0.776) | 2048 | 6.47 |
| 3 LP exit | 10 kPa | 45.8 (x = 0.838) | 2196 | 6.61 |

**Result:** steam must enter the HP turbine at about **6.4 MPa and 365 °C**, at **19.2 kg/s** (≈ 1150 kg/min).`,
          answer: String.raw`ṁ_LP = 1500/593 = 2.53 kg/s, ṁ = 16.67 + 2.53 = 19.2 kg/s; h₁ = 2788.9 + 286.5 = 3075 kJ/kg with s₁ = s₂s = 6.36 kJ/kg K → P₁ ≈ 6.4 MPa, T₁ ≈ 365 °C.` }
      ] },
    { id: "2020-21-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q7a", label: "(a)", marks: "6⅔",
          topic: "gas-liquid-separation", sub: "Schematic of a three-phase separator",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the schematic of a three phase separator with proper labelling.`,
          solution: String.raw`![Horizontal three-phase separator: inlet diverter, gravity settling section, oil and water layers, weir, mist extractor and controls](fig/2020-21-Q7a-sketch.svg)

**Sections and parts**
1. **Inlet diverter** (baffle, half-pipe or cyclone inlet): absorbs the momentum of the feed and makes the bulk gas–liquid split.
2. **Gravity settling section (gas space):** low gas velocity lets liquid drops (≈ 100–150 μm and larger) fall out.
3. **Mist extractor** (wire mesh or vane pack) before the gas outlet: removes the remaining fine mist (≈ 10 μm).
4. **Liquid collection section:** gives the residence (retention) time for the oil–water separation: water drops fall out of the oil layer and oil drops rise out of the water layer.
5. **Weir (or bucket and weir):** the clean oil overflows into the oil compartment; water is drawn off before the weir.
6. **Outlets:** gas (top, with pressure controller PC), oil (after the weir, with level controller LC) and water (bottom, with interface level controller LIC).
7. Also: vortex breakers on the liquid outlets, relief valve, sand jets/drains, manway.`,
          answer: String.raw`Horizontal vessel: inlet diverter → gas settling section → mist extractor → gas outlet (PC); liquid section with oil layer over water, weir, oil outlet (LC) and water outlet (interface LIC).` },
        { id: "2020-21-Q7b", label: "(b)", marks: "16",
          topic: "gas-liquid-separation", sub: "Slug catcher, mist eliminator, hold-up and surge, viscous settling",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Describe the purpose of following parts and terms in a separator.

i. Slug catcher
ii. Mist eliminator
iii. Hold up and Surge
iv. You have high and low viscous fluids. Which one will be difficult to settle?`,
          solution: String.raw`**i. Slug catcher.** A large vessel (or a bank of inclined pipe "fingers") at the end of a two-phase pipeline, ahead of the separators. Multiphase pipelines deliver liquid intermittently as **slugs** (terrain, pigging or flow-rate changes). The slug catcher receives the slug volume, separates the bulk gas and liquid, and releases the liquid at a steady rate, so downstream separators and compressors are not flooded or tripped. It is sized for the largest expected slug (pigging slug) plus normal hold-up.

**ii. Mist eliminator (demister).** A wire-mesh pad, vane (chevron) pack or fibre bed fitted below the gas outlet. Fine drops (down to ≈ 5–10 μm) that gravity cannot remove strike the wires or vanes by inertial impaction, coalesce and drain back. It lets the vessel be designed for a higher gas velocity (K ≈ 0.35 ft/s with a mesh pad vs ≈ 0.1–0.2 without), protects compressors and reduces liquid carry-over. It must be kept within its velocity range (flooding/re-entrainment at high velocity, poor capture at low velocity) and can foul with solids or wax.

**iii. Hold-up and surge.**
- **Hold-up (liquid retention) time:** the time the liquid stays in the vessel between the normal liquid level and the bottom (normal liquid volume ÷ liquid flow). It provides (a) time for gas bubbles to disengage and for oil–water drops to settle (typically 3–5 min for light oil–water, 5–10 min or more for heavy/emulsions) and (b) a buffer for the downstream pump/control loop.
- **Surge time/volume:** extra volume between the normal and high (or high and low) liquid levels to absorb flow upsets or slugs without the level reaching the alarm/shutdown points (often 2–3 min, or ≈ 50 % of hold-up). Hold-up + surge set the liquid height and therefore the vessel size.

**iv. High- vs low-viscosity fluid.** Settling of drops in a liquid follows Stokes' law:

$$v_t = \frac{g\,d^2(\rho_d-\rho_c)}{18\,\mu_c}$$

The terminal velocity is inversely proportional to the viscosity of the continuous phase, so drops (and bubbles) move much more slowly through a **high-viscosity** fluid. High-viscosity liquids are therefore **more difficult to settle**: they need longer retention time, heating (to lower μ), larger vessels or coalescers/chemicals (in this paper's Q7(c), drops fall at 4.3 in/min through the 0.63 cP oil but only 1.7 in/min rise through the 0.76 cP water).`,
          answer: String.raw`(i) Absorbs liquid slugs from pipelines and delivers steady flows; (ii) wire-mesh/vane pad removing fine mist (≈10 μm) before the gas outlet; (iii) hold-up = liquid retention for degassing/settling and control, surge = extra volume for upsets; (iv) the high-viscosity fluid, since v_t ∝ 1/μ (Stokes).` },
        { id: "2020-21-Q7c", label: "(c)", marks: "24",
          topic: "gas-liquid-separation", sub: "Vertical three-phase separator: diameter and liquid residence times",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`You want to design a vertical three phase separator. During performing this task, you need to check whether separation of light liquid and heavy liquids are possible with the proposed dimensions. A three phase mixture having following specifications is available.

| Phase | Mass Flow, lb/h | Density, ρ lb/ft³ | Viscosity, μ (cP) |
|---|---|---|---|
| Hydrocarbon Gas | 415,000 | 0.6973 | - |
| Hydrocarbon Liquid | 16,500 | 53.95 | 0.630 |
| Water | 1,300 | 62.11 | 0.764 |

i. You need to calculate the internal diameter of the vertical separator.

ii. Calculate the residence time of the light and heavy liquids and state whether separation is possible with this value. Use k values = 0.35.`,
          solution: String.raw`**Given:** gas 415,000 lb/h (ρ_g = 0.6973 lb/ft³), light liquid (hydrocarbon) 16,500 lb/h (53.95 lb/ft³, 0.630 cP), heavy liquid (water) 1,300 lb/h (62.11 lb/ft³, 0.764 cP); K = 0.35 ft/s.

**Find:** vessel diameter; residence times of the two liquids and whether they separate.

**Assumptions:** mist pad fitted (K = 0.35 ft/s, gas velocity allowed up to $V_t$); light- and heavy-liquid layer heights $H_L$ = $H_H$ = 1 ft (12 in, the usual minimum); design drop sizes 127 μm water drops in oil and 89 μm oil drops in water; Stokes settling with $V_s = K_s\Delta\rho/\mu$, $K_s = 2.06151\times10^{-5}d_p^2$ (in/min, $d_p$ in μm), Monnery–Svrcek method.

1. **Allowable gas velocity (Souders–Brown):**

$$V_t = K\sqrt{\frac{\rho_L-\rho_g}{\rho_g}} = 0.35\sqrt{\frac{53.95-0.6973}{0.6973}} = 0.35 \times 8.739 = 3.06\ \mathrm{ft/s}$$

2. **Gas volumetric flow:**

$$Q_g = \frac{415{,}000}{3600 \times 0.6973} = 165.3\ \mathrm{ft^3/s}$$

3. **Diameter:**

$$D_{min} = \sqrt{\frac{4Q_g}{\pi V_t}} = \sqrt{\frac{4 \times 165.3}{\pi \times 3.06}} = 8.30\ \mathrm{ft}$$

   Round up to **D = 8.5 ft (102 in)**: A = π(8.5)²/4 = 56.7 ft², actual gas velocity 2.91 ft/s < 3.06 ft/s.

4. **Liquid flows:**

$$Q_L = \frac{16{,}500}{53.95 \times 60} = 5.10\ \mathrm{ft^3/min},\qquad Q_H = \frac{1{,}300}{62.11\times60} = 0.349\ \mathrm{ft^3/min}$$

5. **Settling velocities** (Δρ = 62.11 − 53.95 = 8.16 lb/ft³):

$$V_{s,H} = \frac{2.06151\times10^{-5}(127)^2(8.16)}{0.630} = 4.31\ \mathrm{in/min}\quad(\text{water drops falling through oil})$$

$$V_{s,L} = \frac{2.06151\times10^{-5}(89)^2(8.16)}{0.764} = 1.74\ \mathrm{in/min}\quad(\text{oil drops rising through water})$$

   Both are below the 10 in/min limit, so Stokes' law applies.

6. **Residence times** with 1 ft layers:

$$\theta_L = \frac{H_L A}{Q_L} = \frac{1 \times 56.7}{5.10} = 11.1\ \mathrm{min},\qquad \theta_H = \frac{1 \times 56.7}{0.349} = 163\ \mathrm{min}$$

7. **Time needed for the drops to cross each layer:**

$$t_{L} = \frac{12\,H_L}{V_{s,H}} = \frac{12}{4.31} = 2.8\ \mathrm{min},\qquad t_{H} = \frac{12\,H_H}{V_{s,L}} = \frac{12}{1.74} = 6.9\ \mathrm{min}$$

   Check: θ_L = 11.1 min > 2.8 min and θ_H = 163 min > 6.9 min. Equivalent check: the light liquid moves down at $Q_L/A$ = 1.08 in/min, slower than the 4.31 in/min fall of the water drops.

![Vertical three-phase separator, D = 8.5 ft, with 1 ft liquid layers and their residence times](fig/2020-21-Q7c-sol.svg)

**Result:** ID = 8.30 ft minimum, use **8.5 ft**; residence times **11.1 min** (hydrocarbon liquid) and **163 min** (water), both larger than the 2.8 and 6.9 min needed for 127 μm and 89 μm drops, so **separation of the light and heavy liquids is possible** (the 11 min oil hold-up also exceeds the usual 3–5 min guideline).`,
          answer: String.raw`V_t = 3.06 ft/s, Q_g = 165.3 ft³/s → D = 8.30 ft (use 8.5 ft). With 1-ft layers: θ_L = 11.1 min vs 2.8 min needed, θ_H = 163 min vs 6.9 min needed → separation possible.` }
      ] },
    { id: "2020-21-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q8a", label: "(a)", marks: "16⅔",
          topic: "mixing", sub: "Power for a six-blade disk turbine mixing 50 % NaOH",
          type: "numerical", syllabus: "in", repeats: ["2023-24-Q7c", "2022-23-Q7b", "2016-17-Q3d"],
          text: String.raw`Calculate the power requirement to mix an aqueous solution of 50% NaOH in a baffled tank, 2 m in diameter. The mixing will be performed in the vertical tank filled to a height of 2 m by a disk turbine with six flat blades. The turbine is 0.67 m in diameter and positioned 0.67 m above the bottom of the tank. The turbine blades are 0.134 m wide, 0.167 m long and turn at 90 r/min. The solution has a viscosity of 0.012 Pa-s and density of 1500 kg/m³.

Figure for question no 8(a) (attached to the paper): standard turbine geometry ($S_1 = D_a/D_t$, $S_2 = E/D_t$, $S_3 = L/D_a$, $S_4 = W/D_a$, $S_5 = J/D_t$, $S_6 = H/D_t$) and the $N_P$–$N_{Re}$ chart (MSH Fig. 9.13) with curves A (0.33, 0.33, 0.25, 0.2, 0.1, 1.0; 4 baffles), B (S₄ = 0.125, 4 baffles), C (4 baffles) and D (unbaffled).`,
          solution: String.raw`**Given:** $D_t$ = 2 m, H = 2 m, $D_a$ = 0.67 m, E = 0.67 m, W = 0.134 m, L = 0.167 m, n = 90 r/min = 1.5 r/s, μ = 0.012 Pa s, ρ = 1500 kg/m³; baffled tank.

**Find:** power P.

**Assumptions:** four standard baffles, J/D_t = 0.1; Newtonian liquid.

1. **Shape factors:**

| $S_1 = D_a/D_t$ | $S_2 = E/D_t$ | $S_3 = L/D_a$ | $S_4 = W/D_a$ | $S_6 = H/D_t$ |
|---|---|---|---|---|
| 0.335 | 0.335 | 0.25 | 0.20 | 1.0 |

   These match **curve A** (0.33, 0.33, 0.25, 0.2, 0.1, 1.0; four baffles).

2. **Reynolds number:**

$$N_{Re} = \frac{D_a^2 n \rho}{\mu} = \frac{0.67^2 \times 1.5 \times 1500}{0.012} = 8.42\times10^4$$

3. **Power number (chart):** curve A at $N_{Re}$ = 8.4 × 10⁴ is in the flat, fully turbulent region: $N_P$ ≈ 5.8 (MSH Table 9.3: $K_T$ = 5.75 for a six-blade disk turbine). In a baffled tank the Froude number has no effect.

4. **Power:**

$$P = N_P\,\rho\,n^3 D_a^5 = 5.8 \times 1500 \times 1.5^3 \times 0.67^5$$

$$= 5.8 \times 1500 \times 3.375 \times 0.1350 = 3964\ \mathrm{W}$$

**Result:** P ≈ **3.96 kW (≈ 5.3 hp)** delivered to the liquid (the motor must be somewhat larger to cover drive losses).`,
          answer: String.raw`N_Re = 8.4 × 10⁴, curve A → N_P ≈ 5.8; P = 5.8 × 1500 × 1.5³ × 0.67⁵ ≈ 3.96 kW (5.3 hp).` },
        { id: "2020-21-Q8b", label: "(b)", marks: "16",
          topic: "crystallization", sub: "Draft-tube-baffle crystallizer for excessive nucleation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`In case excessive of nucleation, which type of crystallizer equipment is used? Briefly describe about the crystallizer, its principle of operation, advantages and disadvantages of using it.`,
          solution: String.raw`**Equipment: the draft-tube-baffle (DTB) crystallizer** (a growth-type, classified-suspension vacuum crystallizer with fines destruction). DTB crystallizers are used where excessive nucleation occurs: the small unwanted crystals (fines) are removed by gravity settling, redissolved and recycled, so the remaining crystals grow large.

![DTB crystallizer: draft tube with slow propeller, annular baffle and settling zone, fines dissolution loop and product withdrawal](fig/2020-21-Q8b-sketch.svg)

**Construction**
- Cylindrical vessel with a conical bottom, operated under vacuum (vapour to a condenser).
- A central **draft tube** with a slow, low-shear **propeller** that circulates the slurry upward to the boiling surface and down the annulus (1–4 turnovers per minute).
- An **annular baffle (skirt)** around the draft tube creates a quiet **settling zone** between the baffle and the wall.
- A **fines-removal loop**: liquor with fines is withdrawn from the settling zone, heated (fines dissolve) and returned with the feed; product slurry is taken from the bottom (sometimes through an elutriation leg).

**Principle of operation**
1. Hot feed and the recycle stream enter the bottom and are carried up the draft tube.
2. At the surface, solvent flashes/evaporates under vacuum; the liquor cools and becomes supersaturated in a thin layer where crystals are plentiful, so the supersaturation is relieved by **growth** on existing crystals rather than by new nuclei.
3. The slurry returns down the annulus; vigorous but gentle circulation keeps the suspension uniform and supersaturation low (in the metastable zone).
4. In the settling zone the upward velocity is so low that only **fines** are carried out; large crystals settle back. Fines are dissolved in the heater: this destroys excess nuclei and also adds heat.
5. Large crystals are withdrawn as product slurry; residence time 4–6 h.

**Advantages**
- Controls crystal size distribution: large (0.5–1.5 mm), uniform crystals with fewer fines, even with high nucleation rates.
- Fines destruction gives maximum crystal recovery.
- Low-shear propeller reduces secondary (contact) nucleation and crystal breakage.
- Low supersaturation at the boiling surface reduces scaling; long operating runs; continuous, high capacity.
- Uses: ammonium sulphate, KCl, NaCl, organic compounds.

**Disadvantages**
- Large vessel and long residence time (4–6 h), higher capital cost.
- Extra energy for the fines-dissolving heater and vacuum system; more complex control (fines flow, level, vacuum).
- Not suitable for very heat-sensitive solutes or products that need very small crystals; crystals can still break at high circulation rates; scaling can occur on the draft tube and heater.`,
          answer: String.raw`Draft-tube-baffle (DTB) crystallizer: vacuum body with draft tube and slow propeller; an annular baffle makes a settling zone from which fines are withdrawn, redissolved in a heater and recycled, so supersaturation is relieved by growth. Advantages: large uniform crystals, fewer fines, low scaling, continuous; disadvantages: large vessel, 4–6 h residence, extra heater/vacuum cost, complex control.` },
        { id: "2020-21-Q8c1", label: "(c)(1)", marks: "7",
          topic: "solids-handling", sub: "Short note: screw conveyor",
          type: "theory", syllabus: "in", repeats: ["2019-20-Q4e", "2018-19-Q6e", "2017-18-Q8e"],
          text: String.raw`Write short notes on: 1. Screw conveyor`,
          solution: String.raw`![Screw conveyor in a U-trough: helical flight, inlet, discharge and drive](fig/2020-21-Q8c-sketch.svg)

- **Mechanism:** a helical screw (flight) welded on a shaft rotates inside a stationary trough or tube; the solid is pushed along the trough by the flight (it moves like a nut on a bolt because friction with the trough stops it rotating with the screw).
- **Casing:** U-shaped (most common), square, rectangular or circular trough, open or with a quick-release cover; a circular (tubular) casing is used for inclinations above about 30° and for vertical screw elevators.
- **Flight geometry:** single screw with continuous flight and pitch/diameter ≈ 1 for most duties; P/D ≈ 1.5 for very free-flowing solids (horizontal) and 0.5–0.67 for vertical flow; variable-pitch or tapered screws for lumpy materials and feeders (uniform draw-off from hoppers). Ribbon, cut-flight or paddle flights mix while conveying.
- **Limits:** particle size smaller than the gap between flight tip and casing; feed temperature up to ≈ 120 °C; length normally not more than about 100 m (usually much less).
- **Capacity and power** depend on conveying distance, screw diameter, pitch and length, speed (rpm), degree of fill (15–45 % of the trough) and the bulk-solid properties (density, abrasiveness, flowability).
- **Advantages:** simple, compact, cheap, totally enclosed (dust-free), can feed, mix, heat or cool (jacketed) while conveying, many intermediate inlets/outlets.
- **Disadvantages:** high power per tonne (friction), wear with abrasive solids, degradation of fragile solids, short distances only.
- **Uses:** cement, flour, grain, coal, chemicals, wet cakes, feeders under bins.`,
          answer: String.raw`Rotating helical flight in a U-trough pushes solids along; P/D ≈ 1 (1.5 easy-flowing, 0.5–0.67 vertical); particle size < flight–casing gap, ≤ 120 °C, ≤ 100 m; capacity/power depend on length, diameter, pitch, rpm, fill and solid properties; enclosed, simple, can mix/heat, but high power and wear.` },
        { id: "2020-21-Q8c2", label: "(c)(2)", marks: "7",
          topic: "size-reduction", sub: "Short note: laws of size reduction and their applicability",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q6b", "2012-13-Q3b"],
          text: String.raw`Write short notes on: 2. Laws of size reduction and applicability of these laws.`,
          solution: String.raw`**General law.** The energy dE needed to make a small change dL in the size of a unit mass of material is a power function of the size:

$$\frac{dE}{dL} = -\frac{C}{L^{p}}$$

**Rittinger's law (p = 2):** energy is proportional to the new surface created:

$$E = K_R f_c\left(\frac{1}{L_2} - \frac{1}{L_1}\right)$$

**Kick's law (p = 1):** energy depends only on the reduction ratio (elastic deformation before fracture):

$$E = K_K f_c \ln\frac{L_1}{L_2}$$

so crushing 50 mm → 25 mm needs the same energy as 40 mm → 20 mm.

**Bond's law (p = 3/2):** intermediate; with the work index $E_i$ (energy, kWh/t, to reduce unit mass from infinite size to 80 % passing 100 μm):

$$E = E_i\left(\sqrt{\frac{100}{L_2}} - \sqrt{\frac{100}{L_1}}\right),\ L\text{ in }\mu\mathrm{m}\qquad\text{or}\qquad E = 0.3162\,E_i\left(\frac{1}{\sqrt{L_2}} - \frac{1}{\sqrt{L_1}}\right),\ L\text{ in mm}$$

$f_c$ is the crushing strength; $K_R$, $K_K$ are constants for the machine and material.

![Composite (Hukki) energy–size curve with the regions where each law applies](fig/2020-21-Q8c-sol.svg)

**Applicability**
- **Rittinger:** fine grinding, about 10–1000 μm, where a large new surface per unit mass is produced (ball, rod and fluid-energy mills).
- **Kick:** coarse crushing, particles above about 1000 μm (1 mm), where little surface is created and most energy goes into elastic/plastic deformation (jaw and gyratory crushers).
- **Bond:** intermediate crushing and grinding; most widely used in practice (work-index tables for ores, cement clinker, coal) for sizing crushers and mills.
- **Hukki:** the real energy–size relation is a composite of the three, Kick in the coarse range, Bond in the middle and Rittinger in the fine range; none of the laws holds over the whole range. All laws give only the useful energy; actual mill efficiency is low (often < 2 % of the energy creates new surface).`,
          answer: String.raw`dE/dL = −C/L^p: Rittinger p = 2, E ∝ (1/L₂ − 1/L₁) (fine grinding 10–1000 μm); Kick p = 1, E ∝ ln(L₁/L₂) (coarse crushing > 1 mm); Bond p = 1.5, E = E_i(√(100/L₂) − √(100/L₁)) (intermediate, most used); Hukki: composite of all three.` }
      ] }
  ]
});
