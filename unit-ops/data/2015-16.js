QB.paper({
  year: "2015-16", date: "16/07/2017", marks: 280,
  rules: String.raw`Section A: four questions, answer any THREE. Section B: Q5 is compulsory (60 marks); answer any TWO of Q6–Q8. Use separate scripts for each section. Figures for Q1(a) (ferrous sulfate solubility), Q2(a) (pumping layout), Q3(c) (mixing-time chart) and Q8(b) (polymerization reactor P&ID) are attached to the paper.`,
  questions: [
    { id: "2015-16-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q1a", label: "(a)", marks: "25",
          topic: "crystallization", sub: "Swenson–Walker copperas crystallizer: cooling water and number of sections",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A Swenson Walker crystallizer is to be used to produce 1 ton/hr of copperas (FeSO₄·7H₂O) crystals by the cooling of a saturated solution which enters the crystallizer at 120 °F. The slurry leaving the crystallizer will be at 80 °F. Solubility data are given in Figure for Q. 1(a). Cooling water enters the crystallizer jacket at 50 °F and leaves at 75 °F. It may be assumed that the overall coefficient of heat transfer for the crystallizer is 35 Btu/(hr)(sq.ft)(°F). There are 3.5 sq.ft of cooling surface per foot of crystallizer length. Average specific heat of initial solution is 0.70 Btu/(lb)(°F) and heat of solution of FeSO₄·7H₂O at 18 °C = −4400 cal/g formula weight.

(i) Estimate the amount of cooling water required in gpm.

(ii) Determine the number of crystallizer sections to be used.

Figure for Q. 1(a) (attached to the paper): solubility of ferrous sulfate vs temperature (30–170 °F). Curves A, B, C as usually plotted (parts FeSO₄ per 100 parts total water, right axis); curve D plotted as parts hydrate FeSO₄·7H₂O per 100 parts excess water (left axis, 30–210).`,
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
        { id: "2015-16-Q1b", label: "(b)", marks: "10",
          topic: "crystallization", sub: "Factors to consider in designing crystallization processes",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss the factors to be considered in designing crystallizer processes.`,
          solution: String.raw`A crystallizer must deliver the required **yield**, **purity**, **crystal size distribution (CSD)** and **habit** at minimum cost. The design factors are:

1. **Solubility data and yield.** The solubility curve (and hydrate forms, e.g. FeSO₄·7H₂O/4H₂O/H₂O transitions) fixes the theoretical yield from the material balance; it also decides the method.
2. **Method of generating supersaturation.** Steep solubility curve → cooling (Swenson–Walker, tank crystallizers); flat curve → evaporation (forced-circulation evaporator–crystallizers); heat-sensitive or both → vacuum (adiabatic flash) cooling; also salting-out/reaction.
3. **Level of supersaturation.** Kept in the metastable zone: high supersaturation gives excessive nucleation (fines), scaling and impure crystals; low supersaturation gives slow growth and a large vessel.
4. **Nucleation and growth kinetics.** Primary/secondary nucleation and growth rate (McCabe ΔL law) set the CSD; continuous MSMPR design uses residence time τ, $L_{pr} = 3.67G\tau$.
5. **Residence time and magma density.** Longer τ and higher suspension density give larger crystals but a bigger vessel; fines destruction and classified product removal control size.
6. **Heat balance.** Sensible heat, heat of crystallization and (for evaporative types) latent heat; area and ΔT of cooling surfaces; scaling of cold surfaces limits ΔT (small ΔT, scraped surfaces).
7. **Agitation and circulation.** Uniform supersaturation, suspension of crystals, without breaking them (attrition makes secondary nuclei).
8. **Purity.** Occlusion of mother liquor, adhering liquor; washing and recrystallization; impurity effect on habit.
9. **Crystal habit and shape.** Affected by solvent, impurities, supersaturation; matters for filtration, drying, caking and flow.
10. **Batch vs continuous** operation, capacity, and staging (multistage cooling or multiple-effect evaporation for economy).
11. **Materials of construction, encrustation and cleaning**, corrosion by the liquor.
12. **Downstream handling:** filterability/centrifuging, drying, storage (caking), recovery of mother liquor (recycle, purge).
13. **Energy and cost:** steam economy (vapor recompression, multiple effect), cooling water, vacuum system.`,
          answer: String.raw`Solubility and yield; method and level of supersaturation; nucleation/growth kinetics and residence time (CSD); heat balance and cooling-surface scaling; agitation; purity and habit; batch vs continuous; materials; downstream handling; energy cost.` },
        { id: "2015-16-Q1c", label: "(c)", marks: "11⅔",
          topic: "mixing", sub: "Standard turbine mixing tank sketch and shape factors",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`With the help of neat sketch of a mixing tank write the different shape factors for turbine design.`,
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
    { id: "2015-16-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q2a", label: "(a)", marks: "32",
          topic: "pumps", sub: "Brine transfer pump: friction losses and power with fittings",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A centrifugal pump takes brine from the bottom of a supply tank and delivers it to the bottom of another tank as shown in Figure for Q. 2(a). The brine level in the discharge tank is 50 m above that in the supply tank. The tanks are connected by 200 m of 18 cm diameter steel pipe. The flow rate is 50 liters/s. The line between the two tanks has two gate valves, four standard tees and two 90° elbows. The pipe has a roughness of 0.04 mm. What is the power requirement for the pump with an overall efficiency of 60%? Make necessary assumptions and state them.

Data: Density of brine = 1180 kg/m³; Viscosity of brine = 1.2 × 10⁻³ kg/m·s

| Pipe fittings | Equivalent L/D |
|---|---|
| Gate valve | 7 |
| 90° Elbow | 32 |
| Tee | 90 |

![Figure for Q. 2(a): supply tank (1) with sharp entrance, pump, pipe rising to a sharp exit into tank (2) whose level is 50 m higher](fig/2015-16-Q2a.svg)`,
          solution: String.raw`**Given:** Q = 0.050 m³/s, D = 0.18 m, L = 200 m, ε = 0.04 mm, Δz = 50 m, ρ = 1180 kg/m³, μ = 1.2 × 10⁻³ Pa·s, η = 0.60.

**Find:** pump power.

**Assumptions:** both tanks open to the atmosphere ($p_1 = p_2$); levels constant, velocity at the free surfaces ≈ 0; isothermal incompressible flow; the 200 m includes all straight pipe; sharp entrance K = 0.5, sharp exit K = 1.0 (as marked on the figure); Darcy friction factor from the Colebrook equation (same as reading the Moody chart).

1. **Velocity and Reynolds number:**
$$A = \frac{\pi}{4}(0.18)^2 = 0.02545\ \mathrm{m^2},\qquad V = \frac{0.050}{0.02545} = 1.965\ \mathrm{m/s}$$
$$Re = \frac{\rho V D}{\mu} = \frac{1180\times1.965\times0.18}{1.2\times10^{-3}} = 3.48\times10^5\ \text{(turbulent)}$$

2. **Friction factor:** $\varepsilon/D = 0.04/180 = 2.22\times10^{-4}$.
$$\frac{1}{\sqrt f} = -2\log\left(\frac{\varepsilon/D}{3.7} + \frac{2.51}{Re\sqrt f}\right)\ \Rightarrow\ f = 0.0162\ \text{(Darcy)}\ \ (f_{Fanning} = 0.00404)$$

3. **Equivalent length of fittings:**
$$\left(\frac{L_e}{D}\right) = 2(7) + 4(90) + 2(32) = 438,\qquad L_e = 438\times0.18 = 78.8\ \mathrm{m}$$

4. **Head losses** ($V^2/2g = 1.965^2/19.62 = 0.197$ m):
$$h_{f,pipe} = f\frac{L}{D}\frac{V^2}{2g} = 0.0162\times\frac{200}{0.18}\times0.197 = 3.53\ \mathrm{m}$$
$$h_{f,fittings} = 0.0162\times438\times0.197 = 1.39\ \mathrm{m}$$
$$h_{entrance+exit} = (0.5 + 1.0)\times0.197 = 0.30\ \mathrm{m}$$
$$\sum h_f = 3.53 + 1.39 + 0.30 = 5.23\ \mathrm{m}$$

5. **Mechanical energy balance, surface (1) to surface (2):**
$$H = (z_2 - z_1) + \frac{p_2-p_1}{\rho g} + \frac{V_2^2-V_1^2}{2g} + \sum h_f = 50 + 0 + 0 + 5.23 = 55.2\ \mathrm{m}$$
(The exit loss K = 1 is the kinetic energy of the jet dissipated in tank 2.)

6. **Power:**
$$P_{fluid} = \rho g Q H = 1180\times9.81\times0.050\times55.2 = 31.96\ \mathrm{kW}$$
$$P_{shaft} = \frac{31.96}{0.60} = 53.3\ \mathrm{kW}\ (\approx 71\ \mathrm{hp})$$

**Result:** developed head ≈ 55.2 m (50 m static + 5.2 m friction); power required ≈ 53 kW.`,
          answer: String.raw`Re = 3.48 × 10⁵, f(Darcy) = 0.0162, ΣL_e = 78.8 m, Σh_f = 5.2 m, H = 55.2 m; fluid power 32.0 kW → pump power ≈ 53.3 kW (≈ 71 hp) at 60%.` },
        { id: "2015-16-Q2b", label: "(b)", marks: "14⅔",
          topic: "pumps", sub: "Common centrifugal pump problems and their prevention",
          type: "theory", syllabus: "in", repeats: [],
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
          answer: String.raw`Main problems: cavitation (keep NPSH_A > NPSH_R), air binding/loss of prime (prime, foot valve, venting), low-flow overheating (min-flow bypass), overload at run-out, water hammer, seal leakage, vibration/bearing failure, wear and corrosion (materials, maintenance).` }
      ] },
    { id: "2015-16-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q3a", label: "(a)", marks: "20",
          topic: "evaporation", sub: "Forward, backward, mixed and parallel feed in multiple effects",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Discuss the applications, relative advantages and disadvantages of different types of feed arrangements to multiple effect evaporator systems. Show the feed arrangements with the help of neat sketch of each type.`,
          solution: String.raw`In every arrangement steam enters effect I and the vapour of each effect heats the next; pressure and boiling point fall from I to the last effect, which goes to the condenser. The arrangements differ in the **path of the liquor**.

![Forward, backward, mixed and parallel feed for a triple effect](fig/2015-16-Q3a-sketch.svg)

| Arrangement | Liquor path | Advantages | Disadvantages | Applications |
|---|---|---|---|---|
| **Forward** | I → II → III (with the steam) | Liquor flows by pressure difference: no pumps between effects, only control valves; concentrated product at the lowest temperature (good for heat-sensitive products); flashing of hot liquor into the next effect gives extra vapour | Thickest liquor in the coldest effect: high viscosity and low U there; a cold feed must be heated to the effect-I temperature by live steam, so economy is low with cold feed | Hot feed, low/moderate viscosity, heat-sensitive products (sugar, milk, fruit juices) |
| **Backward** | III → II → I (against the steam) | Most concentrated (viscous) liquor at the highest temperature, so U stays high; cold feed is heated progressively by the low-grade vapour: better economy with cold feed | Pumps (and their power, maintenance) between every pair of effects; product leaves at the highest temperature (risk of decomposition/charring of organics) | Cold feed, viscous products (e.g. caustic soda, black liquor in pulp mills) |
| **Mixed** | e.g. II → III → I | Combines the advantages: thick liquor finished at high temperature while the dilute feed uses forward flow; fewer pumps than backward | More complex piping and control | Very viscous final products, large multiple-effect plants |
| **Parallel** | Fresh feed to each effect, product drawn from each | Simplest liquor control; each effect separately operable | No heat reuse between liquor streams; each effect handles the full concentration change | Crystallizing evaporators (salt): feed nearly saturated, crystals removed as slurry from each effect |

**Choice:** forward feed if the feed is hot and the product heat-sensitive; backward feed if the feed is cold or the product viscous; mixed feed for very viscous products; parallel feed for crystallizing evaporators.`,
          answer: String.raw`Forward (I→III, no pumps, poor with cold feed/viscous product), backward (III→I, pumps needed, best for cold feed and viscous liquor), mixed (compromise for very viscous products), parallel (feed to each effect, salt crystallizers).` },
        { id: "2015-16-Q3b", label: "(b)", marks: "12",
          topic: "evaporation", sub: "Effect of feed temperature on evaporator capacity",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss the effect of feed state on the evaporator capacity.`,
          solution: String.raw`**Capacity** is the amount of water evaporated per hour. The heat transferred is fixed by the surface: $q = UA\Delta T$, with $\Delta T = T_s - T_b$. The enthalpy balance (Badger–McCabe form, neglecting heat of dilution) is

$$q = F c_p (T_b - T_F) + V\lambda\quad\Rightarrow\quad V = \frac{q - F c_p (T_b - T_F)}{\lambda}$$

- **Feed below its boiling point (cold feed):** part of q is used as sensible heat to bring the feed to $T_b$, so less is left for evaporation: capacity (and economy) fall.
- **Feed at its boiling point:** practically all of q evaporates water: capacity ≈ $q/\lambda$, economy ≈ 1 per effect.
- **Feed above its boiling point** (e.g. a hot feed from a higher-pressure process): on entering the lower-pressure vapour space a part **flashes** without using surface: capacity and economy exceed the "boiling-feed" values.

**Illustration** (single effect, q = 1500 kW, F = 1 kg/s, $c_p$ = 4.0 kJ/kg·K, $T_b$ = 100 °C, λ = 2257 kJ/kg):

| Feed temperature | Evaporation V, kg/s | Change |
|---|---|---|
| 20 °C | 0.523 | −21% |
| 60 °C | 0.594 | −11% |
| 100 °C | 0.665 | base |
| 120 °C (flashing) | 0.700 | +5% |

**In multiple effects** the feed state also decides the best arrangement: a cold feed in forward feed must be heated in effect I by live steam (low economy), so backward feed or feed preheating with vapour bled from later effects is used; a hot feed suits forward feed, where the liquor flashes in each following effect. Preheating the feed with low-grade vapour or condensate is the usual way to raise capacity.`,
          answer: String.raw`V = [UAΔT − F c_p(T_b − T_F)]/λ: a cold feed consumes part of the heat as sensible heat and lowers capacity (≈ −21% for 20 °C vs boiling feed in the example); a feed above its boiling point flashes and raises it; in multiple effects cold feed favours backward feed or preheating.` },
        { id: "2015-16-Q3c", label: "(c)", marks: "14⅔",
          topic: "mixing", sub: "Blending time of a turbine-agitated neutralization vessel",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`An agitated vessel 6 ft in diameter contains a six blade straight-blade turbine 2 ft in diameter, set one impeller diameter above the vessel floor, and rotating at 80 rpm. It is proposed to use this vessel for neutralizing a dilute aqueous solution of NaOH at 70 °F with stoichiometrically equivalent quantity of concentrated nitric acid. The final depth of liquid in the vessel is to be 6 ft. Assuming that all the acid is added to the vessel at one time, how long will it take for the neutralization to be completed?

Figure for Q. 3(c) (attached to the paper): mixing time factor $nt_T$ vs Reynolds number $N_{Re} = nD_a^2\rho/\mu$ (1 to 10⁵, log–log) for a baffled turbine (solid line), unbaffled turbine $D_a/D_t = 1/3$, propellers $D_a/D_t = 1/3$ and 1/6 (dashed) and a helix.`,
          solution: String.raw`This is MSH Example 9.4 (5th ed., Fig. 9.15). Neutralization (an ionic reaction) is instantaneous, so it is complete when the vessel is **blended** to molecular scale: the time is the blending (mixing) time $t_T$.

**Given:** $D_t$ = 6 ft, $D_a$ = 2 ft ($D_a/D_t$ = 1/3), E = $D_a$ (= $D_t$/3), H = 6 ft = $D_t$, n = 80 rpm = 1.333 r/s; dilute aqueous solution at 70 °F.

**Assumptions:** standard geometry, baffled vessel (the "turbine, baffled" solid curve applies, as in MSH; the caption calls the solid line "unbaffled", a misprint copied from the book); properties of water at 70 °F: ρ = 62.3 lb/ft³, μ = 0.982 cP = 0.982 × 6.72 × 10⁻⁴ = 6.60 × 10⁻⁴ lb/ft·s.

1. **Reynolds number:**
$$N_{Re} = \frac{nD_a^2\rho}{\mu} = \frac{1.333\times2^2\times62.3}{6.60\times10^{-4}} = 5.04\times10^5$$

2. **Mixing-time factor from the attached chart:** enter at $N_{Re} = 5.0\times10^5$ (beyond the right edge, where the baffled-turbine line is already flat for $N_{Re}$ > ~2 × 10³), read $nt_T \approx 36$.

3. **Blending time:**
$$t_T = \frac{36}{n} = \frac{36}{1.333} = 27\ \mathrm{s}$$

**Result:** neutralization is complete in about **27 s** (≈ 36 impeller revolutions). In the flat region $nt_T$ is constant, so $t_T \propto 1/n$: doubling the speed would halve it. An unbaffled vessel (dashed turbine curve) would need several times longer.`,
          answer: String.raw`N_Re = 5.0 × 10⁵ → nt_T ≈ 36 (baffled turbine, flat region) → t_T = 36/1.333 ≈ 27 s.` }
      ] },
    { id: "2015-16-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q4a", label: "(a)", marks: "24",
          topic: "drying", sub: "Conveyor dryer, tunnel kiln, rotary dryer and fluidized-bed dryer",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`With the help of simple schematic diagrams discuss the working principle, relative advantages and disadvantages of (i) Conveyor dryer, (ii) Tunnel kiln, (iii) Rotary dryer, and (iv) Fluidized bed dryer.`,
          solution: String.raw`![Schematics of the four dryers](fig/2015-16-Q4a-sketch.svg)

### (i) Conveyor (screen-conveyor, through-circulation) dryer
**Principle:** a layer 25–150 mm thick of granular or preformed solid is carried on an endless perforated belt (wire mesh, minimum ≈ 30 mesh) through a long chamber divided into sections, each with its own fan and steam finned-tube heater. Hot air is blown **through** the bed: upward at the wet end, downward at the dry end (so dry, dusty material is not lifted). Air temperature and humidity can differ section by section; the air can be recirculated or passed countercurrently. Typical size 2 m wide, 4–50 m long, 5–120 min drying time.

- **Advantages:** continuous, gentle handling (little attrition), high drying rates by through-circulation, good control of product quality, low steam use (≈ 2 kg steam/kg water), conditions can be changed along the length.
- **Disadvantages:** high first cost and maintenance of the belt; pastes and filter cakes must be preformed (extruded, granulated); fines can sift through the screen.

### (ii) Tunnel kiln
**Principle:** the wet (or green ceramic) solid is placed on trays or cars that are pushed slowly and progressively through a long refractory-lined tunnel. Hot gas (combustion gas, direct fired, or air heated by steam coils below ≈ 200 °C) flows countercurrent (usual), parallel, or in a combination. Zones: preheating/drying, firing, cooling (the cooling ware preheats the combustion air).

- **Advantages:** continuous large-scale production of large or irregular shaped objects (bricks, sanitary ware, insulators); countercurrent flow gives good heat recovery; each unit can be controlled separately.
- **Disadvantages:** large floor area and capital cost; high labour for loading cars; long heating times; non-uniform heating across a car; refractory maintenance.

### (iii) Rotary dryer
**Principle:** a slightly inclined (up to ≈ 8 cm/m) cylindrical shell (L/D ≈ 4–15) rotating at a few rpm on trunnion rollers and driven by a girth gear. Feed enters at the high end and moves to the low end; lifting flights shower the solid through the hot gas, which flows countercurrent (or co-current for heat-sensitive solids). Heating can be by hot air, direct firing (rotary kiln) or steam tubes (indirect). An exhaust fan and cyclone handle the dusty air.

- **Advantages:** more material is dried in rotary dryers than in any other type; large capacity, simple and robust, low capital cost per unit capacity, handles free-flowing granular solids, good thermal efficiency (≈ 45–65% hot air/direct fired; steam-tube ≈ 85%).
- **Disadvantages:** dusting (needs cyclones/bag filters), attrition of fragile crystals, not suited to sticky pastes, large size, residence time not uniform, hard to seal.

### (iv) Fluidized-bed dryer
**Principle:** hot gas is blown upward through a distributor plate at a velocity between the minimum fluidization and entrainment velocities, so the particles float as a bubbling bed that behaves like a boiling liquid. Wet feed enters at one side; dry product overflows a weir at the other; exhaust goes to a cyclone.

- **Advantages:** intense gas–solid contact and mixing, very high heat and mass transfer rates, uniform bed temperature (no hot spots), short drying times, easy temperature control, compact, continuous, no moving parts.
- **Disadvantages:** only for fluidizable particles (≈ 0.05–5 mm, not sticky or very wide size range); high fan power; elutriation of fines and attrition; back-mixing gives a spread of residence times (multi-stage or plug-flow beds are used to fix this).`,
          answer: String.raw`Conveyor dryer: through-circulation on a perforated belt (gentle, controlled, but costly belt; pastes must be preformed). Tunnel kiln: cars pushed through a countercurrent fired tunnel (large/irregular ware, high capital). Rotary dryer: inclined rotating shell with flights (high capacity, cheap, dusty, attrition). Fluid bed: gas fluidizes particles (fast, uniform, only fluidizable solids, fan power).` },
        { id: "2015-16-Q4b", label: "(b)", marks: "22⅔",
          topic: "compressors", sub: "Compressor performance characteristics: head, power, surge and stonewall",
          type: "sketch", syllabus: "partial", repeats: [],
          text: String.raw`Discuss different compressor performance characteristics with the help of the relevant diagrams.`,
          solution: String.raw`Compressor performance is described by the delivered **pressure ratio (or head), power and efficiency as functions of the inlet volumetric flow** at a given speed.

![Centrifugal compressor map with surge line, stonewall and system curve; and constant-speed curves of different compressor types](fig/2015-16-Q4b-sol.svg)

### 1. Head and power relations
Adiabatic (isentropic) head and power for an ideal gas:
$$H_{ad} = \frac{\gamma}{\gamma-1}\frac{ZRT_1}{M}\left[\left(\frac{p_2}{p_1}\right)^{(\gamma-1)/\gamma}-1\right],\qquad P = \frac{\dot m H_{ad}}{\eta}$$
(polytropic form with n in place of γ). Discharge temperature $T_2 = T_1(p_2/p_1)^{(\gamma-1)/\gamma}$ limits the ratio per stage (≈ 3–4), so multistage machines with intercooling are used.

### 2. Centrifugal (dynamic) compressor
- **Head–capacity curve** (panel a): head is nearly flat, falling as flow rises; at constant speed the head rises gently toward low flow.
- **Surge:** below the flow at the peak of the curve, the delivered pressure cannot be maintained, flow reverses momentarily and oscillates (noise, vibration, thrust-bearing damage). The **surge line** joins these points for all speeds; operation must stay to its right (anti-surge recycle control, ≈ 10% margin).
- **Stonewall (choke):** at maximum flow the gas reaches sonic velocity in the impeller/diffuser passages; head and efficiency fall steeply.
- **Speed lines:** affinity laws: $Q \propto N$, $H \propto N^2$, $P \propto N^3$. The operating point is where the compressor curve meets the **system curve**; speed variation or inlet guide vanes move it.
- **Efficiency** peaks near the design flow (≈ 70–80% polytropic) and falls on either side; power rises with flow.

### 3. Axial compressor
Very steep head–capacity curve with a narrow stable range between surge and choke (panel b); highest efficiency (≈ 85–90%), very large flows, but sensitive to fouling and surge.

### 4. Positive-displacement (reciprocating, rotary screw)
- Capacity is almost **independent of discharge pressure** (near-vertical line): flow is fixed by displacement and speed, $Q = \eta_v \times$ displacement, with volumetric efficiency
$$\eta_v = 1 - c\left[\left(\frac{p_2}{p_1}\right)^{1/k}-1\right]$$
  (c = clearance fraction), so capacity falls slightly as pressure ratio rises.
- Power increases with pressure ratio; no surge; needs a relief valve because discharge pressure rises until something gives.
- Capacity control: speed, clearance pockets, suction-valve unloaders, bypass.

### 5. Comparison
| Characteristic | Reciprocating | Centrifugal | Axial |
|---|---|---|---|
| Flow range | low–moderate | moderate–high | very high |
| Pressure ratio | very high (multistage) | moderate | low per stage |
| Head vs flow | near-vertical (constant flow) | flat | steep |
| Surge | none | yes | yes, narrow range |
| Efficiency | high | 70–80% | 85–90% |`,
          answer: String.raw`Performance = pressure ratio/head, power and efficiency vs inlet flow at each speed. Centrifugal: flat curve limited by surge (low flow) and stonewall (choke) with Q ∝ N, H ∝ N², P ∝ N³; axial: steep, narrow range; reciprocating: nearly constant flow, η_v = 1 − c[(p₂/p₁)^{1/k} − 1], no surge.` }
      ] },
    { id: "2015-16-Q5", q: 5, section: "B", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q5a", label: "(a)", marks: "20",
          topic: "other", sub: "Short answers: relief systems, steam turbines, size reduction",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Answer the following (True/False, fill in the gaps, multiple choice where applicable)

(i) Relief system is required to prevent damage to equipment not to prevent damage to adjoining property. T/F

(ii) All vessels in a process industry need relief system. T/F

(iii) In standard spring operated relief valve, ______ and ______ through the valve are dependent on back pressure.

(iv) What is the function of governor in a steam turbine? (a) Regulate the speed, (b) Regulate the power, (c) Control the steam flow, (d) All the above.

(v) In steam turbine, steam expansion only happens at nozzle. T/F

(vi) In reaction turbine, both ______ drop and ______ rise occurs at blade passages.

(vii) Maximum blade efficiency of a impulse turbine depends only on inlet velocity and mean blade velocity. T/F

(viii) From energy utilization point of view, size reduction is very inefficient. T/F

(ix) Which type of force is used in size reduction? (a) Impact, (b) Shear, (c) Compression, (d) All of the above, (e) None of the above.`,
          solution: String.raw`| No. | Answer | Reason |
|---|---|---|
| (i) | **False** | Relief systems protect personnel, minimise chemical losses, prevent damage to equipment **and to adjoining property**, reduce insurance premiums and meet regulations (Crowl & Louvar Ch. 8). |
| (ii) | **True** | Location guideline: all vessels need relief devices (reactors, storage tanks, towers, drums), as do blocked-in sections of cool liquid lines, positive-displacement pump discharges, etc. |
| (iii) | **set pressure** and **flow rate** | In a conventional spring valve the back pressure acts on the top of the disc, so both the opening (set) pressure and the relieving rate depend on it; a balanced bellows removes the set-pressure dependence. |
| (iv) | **(d) All the above** | The governor keeps the speed constant under changing load by controlling the steam flow admitted, which matches the power output to the load. |
| (v) | **False** | True only for an impulse stage; in reaction stages the steam also expands in the moving blades. |
| (vi) | **pressure** drop and **(relative) velocity** rise | Moving blades act as nozzles: pressure falls and the relative velocity increases across them. |
| (vii) | **False** | $\eta_{b,max} = \frac{\cos^2\alpha}{2}(1 + kC)$ at $\rho = U/V_1 = \cos\alpha/2$: it depends on the nozzle angle α and the blade friction factor k (and blade angle ratio C), not on the values of $V_1$ and U. |
| (viii) | **True** | Only about 0.1–2% of the energy input appears as new surface energy; the rest is heat, noise, elastic deformation and friction. |
| (ix) | **(d) All of the above** | Compression (crushers), impact (hammer mills), shear/attrition (attrition mills); cutting for fibrous solids. |`,
          answer: String.raw`(i) F; (ii) T; (iii) set pressure, flow rate; (iv) (d); (v) F; (vi) pressure, relative velocity; (vii) F; (viii) T; (ix) (d).` },
        { id: "2015-16-Q5b", label: "(b)", marks: "10",
          topic: "size-reduction", sub: "Energy for comminution: Rittinger, Kick and Bond laws",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`How will you estimate energy consumed in a comminution process? Use applicability of laws of size reduction.`,
          solution: String.raw`The energy needed to reduce a particle from size $L_1$ to $L_2$ is obtained by integrating the general differential law (Walker, Lewis and McAdams)

$$\frac{dE}{dL} = -\frac{C}{L^{p}}$$

Different values of p give the three classical laws (E = energy per unit mass, P/ṁ = power per unit feed rate):

| Law | p | Energy relation | Basis | Applies to |
|---|---|---|---|---|
| **Rittinger** (1867) | 2 | $\dfrac{P}{\dot m} = K_R\left(\dfrac{1}{\bar D_{s2}} - \dfrac{1}{\bar D_{s1}}\right)$ | Energy ∝ new surface created | **Fine grinding** (≈ 10–1000 μm), where much new surface per unit mass is produced |
| **Kick** (1885) | 1 | $\dfrac{P}{\dot m} = K_K\ln\dfrac{\bar D_{s1}}{\bar D_{s2}}$ | Energy for elastic deformation before fracture; same energy for the same reduction ratio | **Coarse crushing** (> 1 mm, ≈ 50 mm and up) |
| **Bond** (1952) | 1.5 | $\dfrac{P}{\dot m} = 0.3162\,W_i\left(\dfrac{1}{\sqrt{D_{p2}}} - \dfrac{1}{\sqrt{D_{p1}}}\right)$ | Energy ∝ crack length, $\propto 1/\sqrt{D}$ | **Intermediate crushing and grinding** (most realistic for ball/rod mills) |

In Bond's law P is in kW, ṁ in t/h and $D_p$ in mm, the size through which 80% passes; the **work index** $W_i$ (kWh/t) is the energy to reduce the material from very large to 80% passing 100 μm, tabulated for dry crushing or wet grinding (multiply by 4/3 for dry grinding).

**How to estimate in practice**

1. Measure feed and product size distributions (screen analysis) and find $\bar D_s$ or the 80%-passing sizes.
2. Choose the law for the size range (Kick > 1 mm, Bond intermediate, Rittinger fine); Hukki showed the true curve is a composite of the three.
3. Obtain the constant ($K_R$, $K_K$ or $W_i$) from a laboratory test or from tables for that material, and calculate the power. Correct for open/closed circuit, wet/dry operation and mill efficiency.

Example: Bond with $W_i$ = 13 kWh/t, 80% passing 50 mm → 3 mm: $P/\dot m = 0.3162\times13\,(1/\sqrt3 - 1/\sqrt{50}) = 1.79$ kWh/t.`,
          answer: String.raw`Integrate dE/dL = −C/L^p: Rittinger (p = 2, new surface, fine grinding), Kick (p = 1, reduction ratio, coarse crushing > 1 mm), Bond (p = 1.5, P/ṁ = 0.3162 W_i(1/√D_p2 − 1/√D_p1), intermediate); constants from tests or work-index tables.` },
        { id: "2015-16-Q5c", label: "(c)", marks: "10",
          topic: "size-reduction", sub: "Advantages and disadvantages of wet grinding",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the advantages and disadvantages of wet grinding?`,
          solution: String.raw`Grinding may be carried out wet or dry; wet grinding is generally applicable only with **low-speed mills** (ball, rod, pebble mills) (Coulson & Richardson Vol. 2, Ch. 2).

**Advantages of wet grinding**

1. Power consumption is reduced by about 20–30% (the liquid lowers the strength of the solid and carries fines away from the grinding zone, reducing cushioning).
2. The capacity of the plant is increased.
3. Removal of the product is easier (it flows as a slurry), and classification (hydrocyclones, wet screens) is simple; the amount of over-ground fines is reduced.
4. Dust formation is eliminated: no dust explosion or health hazard; suitable for explosive or toxic materials.
5. The solids are more easily handled (pumped, piped) and fed to wet downstream processes such as flotation or leaching.
6. Better cooling of the mill and charge.

**Disadvantages of wet grinding**

1. Wear of the grinding medium and liners is about 20% greater (1–1.5 kg steel per Mg compared with ≈ 0.3 kg/Mg dry), from corrosion and abrasion.
2. The product may need to be dewatered and **dried** afterwards, which costs energy and equipment.
3. Not possible where the material reacts with, dissolves in or is spoiled by the liquid.
4. Water supply, slurry pumps and effluent treatment are needed; sticky slurries can cake on the mill wall if the solids content is too high.`,
          answer: String.raw`Advantages: 20–30% less power, higher capacity, easy product removal and classification, fewer fines, no dust, easier handling. Disadvantages: ≈ 20% more wear of media, product must be dewatered/dried, not for water-sensitive materials, slurry handling.` },
        { id: "2015-16-Q5d", label: "(d)", marks: "10",
          topic: "solids-handling", sub: "Advantages of mechanical conveyors and belt conveyor limitations",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the advantages of mechanical conveyors? Discuss the limitations of belt conveyors.`,
          solution: String.raw`**Mechanical conveyors** (belt, screw, bucket elevator, chain/apron conveyors) are the workhorses of bulk-solids plants, used for transporting, feeding, discharging, metering and proportioning.

**Advantages**

1. Handle a very wide range of capacities, particle sizes (fine powders to large lumps), and abrasive, wet or sticky solids.
2. Low power per tonne conveyed, far less than pneumatic conveying; no compressor and no gas–solid separation (cyclones, bag filters) at the end.
3. Little attrition of fragile particles and low wear compared with pneumatic transport.
4. Can travel horizontal, inclined or vertical (bucket elevators) paths and cover long distances economically (belts: lowest cost per tonne-km).
5. Accurate feeding and metering (screw and belt feeders, weigh belts); additional duties such as weighing, sorting, picking, blending, cooling or drying on the belt.
6. Simple, reliable, easy to inspect and maintain; low noise.

**Limitations of belt conveyors** (Shamlou)

1. Cannot handle solids hotter than about 120 °C (rubber/polyester belt); below about 80 °C a single belt can run more than 300 m.
2. Cannot normally be used for vertical lift: normal inclination ≤ about 22° (up to ≈ 45° with cleats or non-slip devices), or the material slides back.
3. Lump size limited by belt width.
4. Open belts spill and generate dust, need covers for fine or toxic materials; not suited to hazardous dusts.
5. Only straight-line runs: each change of direction needs a transfer point.
6. Troughing rollers (idlers) and belt wear need frequent maintenance; belt tracking problems; sticky material carries back on the return belt.
7. Material can be contaminated by the belt; cannot easily be sealed or inerted.`,
          answer: String.raw`Mechanical conveyors: wide capacity and material range, low power per tonne, low attrition, no gas–solid separation, can meter and feed, any route. Belt limits: T < ≈ 120 °C, no vertical lift (≤ 22°, 45° with cleats), lump size, spillage/dust, straight runs only, idler and belt maintenance.` },
        { id: "2015-16-Q5e", label: "(e)", marks: "10",
          topic: "other", sub: "Differences between impulse and reaction steam turbines",
          type: "theory", syllabus: "out", repeats: [],
          text: String.raw`How will you differentiate Impulse and reaction turbine?`,
          solution: String.raw`| Point | Impulse turbine | Reaction turbine |
|---|---|---|
| Principle | Force from the change of momentum of a high-velocity jet (impulse) | Force from impulse plus the reaction of steam accelerating through the moving blades |
| Where expansion occurs | Only in the stationary nozzles; pressure constant across the moving blades | Partly in fixed blades, partly in the moving blades (pressure falls in both) |
| Relative velocity across moving blades | Constant (only friction loss, $V_{r2} = kV_{r1}$) | Increases ($V_{r2} > V_{r1}$) |
| Blade profile | Symmetrical, constant-area passages | Aerofoil, converging (nozzle-shaped) passages |
| Degree of reaction | Zero | Usually 50% (Parsons) |
| Steam admission | Partial admission possible | Full admission all round |
| Blade velocity / speed | Optimum $U/V_1 = \cos\alpha/2$; high speed per stage | Optimum $U/V_1 = \cos\alpha$; more stages for the same drop |
| Pressure drop per stage | Large: fewer stages, compact | Small: many stages, larger size |
| Leakage | Little (no pressure difference across moving blades), large clearances | Tip leakage significant; tight clearances, balance piston for axial thrust |
| Efficiency | Lower | Higher |
| Examples | De Laval, Curtis, Rateau | Parsons |`,
          answer: String.raw`Impulse: expansion only in nozzles, constant pressure and relative velocity across symmetrical moving blades, zero reaction, few high-speed stages (De Laval). Reaction: expansion also in moving aerofoil blades, pressure falls and relative velocity rises, 50% reaction, many stages, higher efficiency (Parsons).` }
      ] },
    { id: "2015-16-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q6a", label: "(a)", marks: "10",
          topic: "other", sub: "Major safety elements of a steam turbine",
          type: "theory", syllabus: "out", repeats: [],
          text: String.raw`Discuss the major safety elements of a steam turbine.`,
          solution: String.raw`1. **Overspeed trip (emergency governor):** spring-loaded bolt or electronic trip that closes the stop valve if speed exceeds about 110% of rated, protecting against loss of load; the most important device, tested regularly.
2. **Speed governor and governing (control) valves:** keep the speed constant under load changes by throttling the steam flow.
3. **Main stop / trip (emergency stop) valve:** quick-closing valve upstream of the control valves; closes on any trip signal.
4. **Low lube-oil pressure trip** and auxiliary/emergency oil pumps: bearings must never run dry; also high bearing temperature alarms.
5. **Thrust-bearing (axial displacement) trip** and **vibration monitoring:** detect rotor movement or excessive vibration before rubbing occurs.
6. **Low vacuum / high exhaust pressure trip** (condensing turbines) and **sentinel or relief valve** on the exhaust casing to protect it from over-pressure.
7. **Non-return valves on extraction lines:** prevent reverse flow of steam into the turbine after a trip (overspeed by back-flow).
8. **Casing and steam-line drains:** prevent water induction (water hammer, blade damage) during start-up.
9. **Turning (barring) gear:** rotates the hot rotor slowly after shutdown to prevent bowing.
10. **Steam strainers** before the stop valve, temperature and pressure alarms, and interlocks for start-up sequence.`,
          answer: String.raw`Overspeed trip, governor and control valves, emergency stop valve, low lube-oil trip and backup pumps, thrust/vibration trips, low-vacuum/exhaust relief, extraction non-return valves, drains against water induction, turning gear.` },
        { id: "2015-16-Q6b", label: "(b)", marks: "30",
          topic: "other", sub: "Impulse turbine velocity triangles: blade angle, exit velocity, efficiency",
          type: "numerical", syllabus: "out", repeats: [],
          text: String.raw`The velocity of steam leaving the nozzles of an impulse turbine is 900 m/s and nozzle angle is 20°. The blade velocity coefficient is 0.7 and speed ratio ρ = 1/3. For a mass flow of 1 kg/s and symmetrical blading, calculate

(i) The blade inlet angle

(ii) Exit velocity

(iii) The diagram efficiency`,
          solution: String.raw`**Given:** $V_1$ = 900 m/s, α = 20°, k = $V_{r2}/V_{r1}$ = 0.7, ρ = U/V₁ = 1/3, ṁ = 1 kg/s, symmetrical blades (β₁ = β₂).

**Find:** β₁, $V_2$, $\eta_d$.

**Assumptions:** single-row impulse stage, angles measured from the plane of rotation, no axial-velocity constraint other than the blade angles.

1. **Blade speed:** $U = V_1/3 = 300$ m/s.

2. **Inlet triangle:**
$$V_{w1} = V_1\cos\alpha = 900\cos20^\circ = 845.7\ \mathrm{m/s},\qquad V_{f1} = V_1\sin\alpha = 307.8\ \mathrm{m/s}$$
$$\tan\beta_1 = \frac{V_{f1}}{V_{w1}-U} = \frac{307.8}{545.7} = 0.564\ \Rightarrow\ \beta_1 = 29.4^\circ$$
$$V_{r1} = \sqrt{545.7^2 + 307.8^2} = 626.6\ \mathrm{m/s}$$

3. **Outlet triangle** ($\beta_2 = \beta_1 = 29.4^\circ$):
$$V_{r2} = 0.7\times626.6 = 438.6\ \mathrm{m/s}$$
$$V_{r2}\cos\beta_2 = 382.0\ \mathrm{m/s},\qquad V_{f2} = V_{r2}\sin\beta_2 = 215.5\ \mathrm{m/s}$$
$$V_{w2} = V_{r2}\cos\beta_2 - U = 382.0 - 300 = 82.0\ \mathrm{m/s}\ \text{(opposite to U)}$$
$$V_2 = \sqrt{82.0^2 + 215.5^2} = 230.6\ \mathrm{m/s},\quad\text{at } \tan^{-1}(215.5/82.0) = 69.2^\circ \text{ to the plane of rotation}$$

![Combined inlet and outlet velocity triangles drawn to scale](fig/2015-16-Q6b-sol.svg)

4. **Work and diagram efficiency:** whirl components add because $V_{w2}$ is opposite to U.
$$\Delta V_w = V_{w1} + V_{w2} = 845.7 + 82.0 = 927.7\ \mathrm{m/s}$$
$$W = \dot m\,U\,\Delta V_w = 1\times300\times927.7 = 278.3\ \mathrm{kW}$$
$$\eta_d = \frac{2U\Delta V_w}{V_1^2} = \frac{2\times300\times927.7}{900^2} = 0.687$$
Axial thrust $= \dot m(V_{f1} - V_{f2}) = 1\times(307.8 - 215.5) = 92.3$ N.

**Result:** (i) β₁ = 29.4°; (ii) $V_2$ ≈ 231 m/s; (iii) $\eta_d$ ≈ 68.7% (power 278 kW per kg/s).`,
          answer: String.raw`(i) β₁ = β₂ = 29.4°; (ii) V₂ ≈ 231 m/s (V_w2 = 82 m/s, V_f2 = 215.5 m/s); (iii) ΔV_w = 927.7 m/s, W = 278.3 kW, η_d ≈ 68.7%.` }
      ] },
    { id: "2015-16-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q7a", label: "(a)", marks: "10",
          topic: "dust-collection", sub: "Importance and equipment types for gas–solid separation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss the importance and types of equipment used in gas-solid separation.`,
          solution: String.raw`**Importance**

1. **Air-pollution control** and compliance with emission standards (particulate matter, PM₁₀/PM₂.₅) from boilers, kilns, cement and steel plants.
2. **Product recovery:** valuable dusts (catalyst fines, spray-dried powders, cement, flour, pharmaceuticals) are collected and returned.
3. **Protection of equipment:** clean gas for compressors, turbines, fans, catalysts and downstream processes (erosion, fouling, plugging).
4. **Health and safety:** removal of toxic or respirable dust; prevention of dust explosions.
5. **Process requirement:** e.g. after pneumatic conveying, fluidized beds and dryers.

**Types of equipment** (in order of increasing efficiency for fine particles)

| Equipment | Mechanism | Useful size range | Typical efficiency | Pressure drop |
|---|---|---|---|---|
| Gravity settling chamber | Gravity settling | > 50–100 μm | low (40–60%) | very low |
| Inertial (baffle, louvre) separators | Inertia at changes of direction | > 20 μm | moderate | low |
| Cyclones (single, multiclone) | Centrifugal force | > 5–10 μm | 70–95% | 0.5–2 kPa |
| Wet scrubbers (spray tower, venturi, packed, impingement) | Impaction on droplets, diffusion | > 0.5–1 μm (venturi) | 80–99% | low to high (venturi 5–15 kPa) |
| Fabric filters (baghouses) | Sieving, impaction, interception, diffusion through cake | > 0.1 μm | > 99% | 1–5 kPa |
| Electrostatic precipitators | Electrical force on charged particles | > 0.05–0.1 μm | 95–99.9% | very low |

Cheap mechanical collectors (settling chambers, cyclones) are often used as pre-cleaners ahead of high-efficiency fabric filters or ESPs. Choice depends on particle size, loading, required efficiency, gas temperature and humidity, whether the dust is sticky, explosive or valuable, and cost.`,
          answer: String.raw`Needed for pollution control, product recovery, equipment protection, safety. Equipment: settling chambers, inertial separators, cyclones, wet scrubbers, fabric filters, electrostatic precipitators (in order of rising efficiency for fine dust).` },
        { id: "2015-16-Q7b", label: "(b)", marks: "30",
          topic: "dust-collection", sub: "Classification of fabric filters and factors affecting efficiency",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Classify the gas cleaning fabric filters. What are the factors that affect the efficiency of fabric filters?`,
          solution: String.raw`Fabric filtration: the dusty gas passes through a porous fabric that retains the solids; the dust cake that forms becomes the real filter medium. The cake is removed periodically.

### Classification of gas-cleaning fabric filters
1. **By cleaning energy/method**
   - *High energy* (high filter Δp): **pulse-jet** (reverse-pulse) filters: short blasts of compressed air through venturi nozzles flex the bag outward and dislodge the cake; on-line cleaning, high A/C ratios (≈ 5–15 ft/min).
   - *Low energy* (low Δp): **shaker** filters (mechanical flexing of the bag) and **reverse-air** filters (low-pressure reverse flow), A/C ≈ 1:1–3:1.
2. **By fabric:** *felted (non-woven)* media, tight, act as true filters, used with high-energy pulse-jet cleaning; *woven* media, only a support on which the dust cake forms, used with low-energy cleaning (shaking, reverse air). Fibres: cotton, polyester, polypropylene, Nomex, PTFE, glass fibre (up to ≈ 288 °C).
3. **By operating cycle:** *continuous* (sectionalized: one compartment cleaned while the rest filter; constant Δp and flow) or *intermittent* (gas flow stopped for cleaning; typical cycle 0.25–4 h filtering, 5 min cleaning; flow highest just after cleaning).
4. **By service:** particulate removal (main), or gaseous control by adsorption/chemisorption on the cake (alumina for chlorine, NH₃ or Na/Ca compounds for SO₂/SO₃, activated carbon for odours, organics, mercury).
5. **By application:** gas temperature, dust loading, type of pollutant, moisture, suction or pressure operation, filter size and required efficiency; also **baghouse configuration**: positive-pressure (forced draft, open or closed) or negative-pressure (induced draft, closed).

### Factors affecting efficiency (normally > 99%)
1. **Dust properties:** particle size (0.1–1 μm hardest to capture, the minimum between impaction and diffusion), seepage (small spherical particles escape), inlet dust concentration (cake seals sooner at high loading).
2. **Fabric properties:** surface depth (shallow surfaces form a sealing cake sooner than napped ones), permeability (highly permeable clean fabric gives lower efficiency), weave and fibre.
3. **Dust-cake properties:** residual weight after cleaning (heavier residual cake seals sooner), residual particle size (finer base layer lets fewer particles through).
4. **Gas (fluid) properties:** humidity (60% RH can be much more effective than 20% for some dusts), temperature (keep above the dew point to avoid blinding and mudding), electrostatic charge.
5. **Operating variables:**
   - **Filtration velocity (air-to-cloth ratio):** higher velocity usually lowers efficiency (dust is pushed through, less diffusion time), though impaction improves; excessive velocity blows dust through.
   - **Pressure:** a pressure surge after cake formation can fracture it and cut efficiency until it reseals.
   - **Cleaning:** frequency and intensity; over-cleaning removes the protective cake (lower efficiency just after cleaning), too little raises Δp. Less frequent cleaning at higher Δp raises efficiency.
6. **Mechanical condition:** torn or worn bags, leaks at seals, bag spacing.

Collection mechanisms: inertial impaction (> 1 μm), interception, diffusion (submicron), plus sieving by the cake.`,
          answer: String.raw`Classified by cleaning energy (pulse-jet vs shaker/reverse-air), fabric (felt vs woven), cycle (continuous vs intermittent), service (particulate vs adsorptive) and application/configuration (positive vs negative pressure). Efficiency depends on dust size, loading and shape, fabric depth and permeability, residual cake, humidity/temperature, A/C ratio, pressure and cleaning.` }
      ] },
    { id: "2015-16-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q8a", label: "(a)", marks: "20",
          topic: "relief", sub: "Working principle of spring valves, bellows, pilot valves, rupture discs",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Discuss the working principle of major types of relief devices (with neat sketch).`,
          solution: String.raw`Relief devices fall into two families: **spring-operated (reclosing) valves** and **rupture discs (non-reclosing)**; pilot-operated valves and buckling pins are further types.

![Conventional spring valve, balanced bellows valve, rupture disc and pilot-operated valve](fig/2015-16-Q8a-sketch.svg)

**1. Conventional spring-operated relief valve.** A disc is held on the nozzle seat by a spring whose compression (adjusting screw) sets the **set pressure**, typically about 10% above the normal operating pressure. When the inlet pressure × seat area exceeds the spring force plus the back-pressure force on the disc, the disc lifts and fluid discharges; flow increases with the pressure drop across the seat. The valve recloses when pressure falls by the **blowdown**. Because the back pressure acts on the disc, **both the set pressure and the flow rate depend on the back pressure**.
- *Relief valve* (liquids): opens gradually, fully open at ≈ 25% overpressure.
- *Safety valve* (gases): pops fully open just above set pressure; reseats ≈ 4% below (blowdown).
- *Safety-relief valve*: acts as a relief valve for liquids and a safety valve for gases.

**2. Balanced-bellows valve.** A bellows isolates the spring and the back of the disc from the discharge fluid; the bonnet is vented to the atmosphere, so the effective back-pressure area is cancelled. The valve opens near the set pressure **regardless of back pressure** (flow still depends on it). Also protects the spring from corrosive fluids. More expensive; used when back pressure varies widely (common relief headers, scrubbers).

**3. Rupture disc.** A thin metal (or graphite) membrane clamped between flanges; it bursts at the specified burst pressure and stays open. Simple, cheap, leak-tight, available in large sizes and very high venting rates (runaway reactions, deflagrations). Drawbacks: does not reclose (whole contents may vent), can fail early from corrosion or pressure cycling. Often installed **upstream of a spring valve** to isolate it from corrosive or polymerizing fluid, with a pressure gauge between them to detect leaks.

**4. Pilot-operated relief valve.** The main valve is held shut by system pressure acting on a large piston in the dome; a small spring-loaded pilot senses inlet pressure and, at set pressure, vents the dome so the piston lifts and the main valve opens fully. Tight shut-off up to ≈ 95–98% of set pressure, little blowdown, insensitive to back pressure; not for dirty or polymerizing fluids (pilot plugging).

**Key terms:** MAWP (set pressure ≤ MAWP), overpressure (pressure rise above set, % of set), accumulation (above MAWP: 10% for a single valve, 21% for fire), back pressure, blowdown.`,
          answer: String.raw`Spring valve: spring force on a disc sets the opening; set pressure and flow depend on back pressure (relief, safety, safety-relief types). Balanced bellows: bellows cancels back pressure on set point. Rupture disc: membrane bursts and stays open. Pilot valve: pilot vents a dome to open a piston-operated main valve.` },
        { id: "2015-16-Q8b", label: "(b)", marks: "20",
          topic: "relief", sub: "Relief locations and scenarios on a polymerization reactor",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Specify the location of reliefs in the simple polymerization reactor system shown in fig 8(b) and attach it with the answer script. What are the relief scenarios can be developed in each location?

Figure 8(b) (attached to the paper): polymerization reactor R-1 (1000 gal, max 50 psig) with monomer feed (5 gpm, V-2), internal coil served by steam (125 psig, V-4) and cooling water (in 200 gpm via V-6; out via V-5; steam trap via V-7); nitrogen (100 psig) through a pressure controller PC, check valve and V-3; overhead vapour to condenser E-1 (cooling water 10 gpm, V-10 in, V-11 out), then V-12 to drum D-1 (100 gal, max 50 psig) with vacuum line V-15 and level control LC; centrifugal pump P-2 (max 50 psig, 20 gpm at 50 psig; V-13, V-14) from D-1; gear pump P-1 (max 100 psig, 100 gpm at 50 psig) feeds base to the reactor bottom line through V-1; reactor bottom outlet V-8, product via V-9. Piping: steam and water lines 2 in, nitrogen 1 in, vapour lines 0.5 in.`,
          solution: String.raw`This is Crowl & Louvar Examples 8-1 and 8-2. Location guidelines applied: every vessel needs a relief; positive-displacement pumps (and compressors) need a relief on the discharge; blocked-in liquid lines that can be heated (thermal expansion) need a relief; sources of pressure above the MAWP of downstream equipment must be relieved.

![P&ID with the relief devices located](fig/2015-16-Q8b-sol.svg)

| Relief | Location and reason | Credible relief scenarios |
|---|---|---|
| **PSV-1a** (rupture disc) + **PSV-1b** (spring safety-relief valve) | Reactor R-1 (all vessels need relief; MAWP 50 psig) | (1) Vessel full of liquid and P-1 inadvertently actuated (100 gpm at 50 psig); (2) cooling coil broken, water enters at 200 gpm, 50 psig; (3) N₂ regulator fails, critical flow through the 1 in line from 100 psig; (4) runaway reaction on loss of cooling (two-phase flow) |
| **PSV-2** | Discharge of the gear pump P-1 (positive displacement, deadheads at up to 100 psig) | V-1 inadvertently closed; relieve the pump capacity, 100 gpm at 50 psig |
| **PSV-3** | Reactor cooling coil (can be blocked in by V-4/V-6 and V-5/V-7 while full of water) | Confined water line heated by 125 psig steam (or by the hot reactor contents): thermal expansion |
| **PSV-4** | Drum D-1 (vessel, MAWP 50 psig) | N₂ regulator fails, critical flow through the 0.5 in vapour line from R-1; the other R-1 scenarios are relieved through PSV-1 |
| **PSV-5** | Cooling-water side of condenser E-1 (blocked by V-10 and V-11) | Water blocked inside the exchanger is heated by the reactor vapour: thermal expansion |

**No relief needed** on P-2: it is centrifugal and its shut-off head (50 psig) does not exceed the D-1/line rating.

**Device selection (C&L Ex. 8-2):** PSV-1a is a rupture disc to protect PSV-1b from the reactive monomer (polymer plugging); PSV-1b a safety-relief valve because a runaway gives two-phase flow; PSV-2 and PSV-3 relief valves (liquid only, conventional); PSV-4 a safety-relief valve (liquid or vapour), balanced bellows because it vents to a scrubber with variable back pressure; PSV-5 a relief valve for liquid service. The worst-case scenario at each location (largest vent area) sizes the device.`,
          answer: String.raw`PSV-1a/1b on R-1 (P-1 overfilling, coil rupture 200 gpm, N₂ regulator failure, runaway); PSV-2 on gear pump P-1 discharge (V-1 closed, 100 gpm); PSV-3 on reactor coil (blocked water heated by steam); PSV-4 on D-1 (N₂ via vapour line); PSV-5 on E-1 water side (thermal expansion). P-2 needs none.` }
      ] }
  ]
});
