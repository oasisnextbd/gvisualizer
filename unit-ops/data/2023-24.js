QB.paper({
  year: "2023-24", date: "30/08/2025", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engg. Examination 2023-2024, 3 hours, 210 marks. Section A: answer any THREE of Q1–Q4. Section B: answer any THREE of Q5–Q8. Use separate scripts for each section; assume reasonably if additional data are required. Attached to the paper (and transcribed where needed): saturated steam tables, NaOH–water Dühring lines and enthalpy–concentration chart, specific heats of gases and liquids (Q1d); psychrometric chart, steam tables, specific heats (Q2); vacuum system for distillation and Ludwig Figs. 6-17/6-18 entrainment-ratio curves (Q3b); polymerization reactor flow sheet (Q4b); Sylvan chart (Q5a); drag coefficient vs C_D(Re)² chart (Q5c); cyclone percent-removal curve (Q6b); power number vs Reynolds number chart for six-blade turbines (Q7c).`,
  questions: [
    { id: "2023-24-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q1a", label: "(a)", marks: "6",
          topic: "evaporation", sub: "Low- vs high-pressure steam: latent heat and cost per unit vapour",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate the latent heat difference between 5 psig steam (λ = 960 Btu/lb) and 435 psig steam (λ = 767 Btu/lb). If high-pressure steam costs 20% less per pound, which is more economical per unit of vapor produced?`,
          solution: String.raw`**Given:** 5 psig steam, $\lambda_{LP} = 960$ Btu/lb; 435 psig steam, $\lambda_{HP} = 767$ Btu/lb; price of HP steam = 0.8 × price of LP steam (call the LP price C per lb).

**Find:** $\Delta\lambda$, and the steam cost per lb of vapour for each.

**Assumptions:** the steam gives up only its latent heat (saturated steam in, saturated condensate out), and the evaporator needs the same heat q per lb of vapour whichever steam is used (same feed, same boiling conditions, same economy).

1. **Latent heat difference:**
$$\Delta\lambda = 960 - 767 = 193\ \mathrm{Btu/lb}$$
   A pound of 435 psig steam carries $193/960 = 20.1\%$ less usable (latent) heat than a pound of 5 psig steam.

2. **Steam needed for a duty of $10^6$ Btu:**
$$m_{LP} = \frac{10^6}{960} = 1041.7\ \mathrm{lb}, \qquad m_{HP} = \frac{10^6}{767} = 1303.8\ \mathrm{lb}$$

3. **Cost of that duty:**
$$\text{LP: } 1041.7\,C, \qquad \text{HP: } 0.8 \times 1303.8\,C = 1043.0\,C$$

4. **Per lb of vapour** (say 1 lb of vapour needs about 1000 Btu): LP needs $1000/960 = 1.042$ lb steam (cost $1.042C$); HP needs $1000/767 = 1.304$ lb steam (cost $0.8 \times 1.304C = 1.043C$).

5. **Comparison:**
$$\frac{\text{cost}_{HP}}{\text{cost}_{LP}} = \frac{0.8\,\lambda_{LP}}{\lambda_{HP}} = \frac{0.8 \times 960}{767} = 1.0013$$
   The HP steam is 0.13% *more* expensive per unit of vapour. The break-even discount is $1 - 767/960 = 20.1\%$: HP steam would have to be more than 20.1% cheaper per pound to win on latent heat alone.

**Result:** $\Delta\lambda = 193$ Btu/lb. On a latent-heat basis the two cost practically the same; the 5 psig steam is marginally (≈0.1%) more economical per unit of vapour.

> Engineering note: the price comparison is not the whole story. 435 psig steam condenses at about 457°F against about 227°F for 5 psig, so it gives a far larger ΔT (smaller heating surface) and can drive a thermocompressor (TVR) or a back-pressure turbine whose exhaust then heats the evaporator. Used that way, high-pressure steam is much more economical than using it straight in a single effect. Its hot condensate also carries more sensible heat, which should be recovered by flashing.`,
          answer: String.raw`Δλ = 193 Btu/lb. Cost ratio HP/LP = 0.8 × 960/767 = 1.001: essentially equal, LP (5 psig) steam marginally cheaper per unit vapour; HP must be >20.1% cheaper to pay off unless its higher temperature is used (smaller area, TVR, turbine exhaust).` },
        { id: "2023-24-Q1b", label: "(b)", marks: "6",
          topic: "evaporation", sub: "Multiple-effect temperature drop inversely proportional to U",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`**Derive** that: "Temperature drop of a multiple effect evaporator $\propto \dfrac{1}{\text{Overall Heat Transfer Coefficient}}$".`,
          solution: String.raw`**Assumptions:** n effects in series; feed enters near its boiling point; heat losses, boiling-point elevations' effect on λ and heats of dilution are small; all effects have the same heating area (the usual standard design, identical bodies).

1. **Rate equation for each effect:**
$$q_1 = U_1A_1\Delta T_1,\quad q_2 = U_2A_2\Delta T_2,\quad \ldots,\quad q_n = U_nA_n\Delta T_n$$

2. **Heat load is (nearly) the same in every effect.** The vapour boiled off in effect 1 is the heating steam of effect 2. When it condenses it gives up about the same latent heat that was used to make it, and (feed near its boiling point) almost all of that heat boils off an equal mass of vapour in effect 2, and so on. Hence
$$q_1 \approx q_2 \approx \cdots \approx q_n = q$$

3. **Equal areas:** $A_1 = A_2 = \cdots = A$. Then
$$U_1\Delta T_1 = U_2\Delta T_2 = \cdots = U_n\Delta T_n = \frac{q}{A} = \text{constant}$$

4. **Therefore**
$$\Delta T_i = \frac{q/A}{U_i} \quad\Rightarrow\quad \boxed{\Delta T_i \propto \frac{1}{U_i}}$$

5. **Distributing the available drop.** The total useful drop is $\Sigma\Delta T = T_s - T_{cond} - \Sigma\mathrm{BPR}$. Since $\Delta T_i = k/U_i$ and $\Sigma\Delta T_i = \Sigma\Delta T$,
$$\Delta T_i = \Sigma\Delta T\;\frac{1/U_i}{\sum_j 1/U_j}$$

6. **Illustration:** triple effect, $U = 600, 450, 300$ Btu/h·ft²·°F, $\Sigma\Delta T = 90$°F:
$$\Delta T_1 = 90\,\frac{1/600}{1/600 + 1/450 + 1/300} = 20.8^\circ\mathrm{F},\quad \Delta T_2 = 27.7^\circ\mathrm{F},\quad \Delta T_3 = 41.5^\circ\mathrm{F}$$

**Result:** with equal loads and equal areas, $U_i\Delta T_i$ is the same in each effect, so the temperature drop in an effect is inversely proportional to its overall coefficient. The effect with the most concentrated, most viscous liquor (lowest U, the last effect in forward feed) takes the largest ΔT. This relation is the first trial in the Badger–McCabe trial-and-error method; the ΔTs are then corrected until the calculated areas are equal.`,
          answer: String.raw`q₁ ≈ q₂ ≈ … (vapour of one effect heats the next) and A₁ = A₂ = … ⇒ U₁ΔT₁ = U₂ΔT₂ = … = q/A ⇒ ΔTᵢ ∝ 1/Uᵢ, i.e. ΔTᵢ = ΣΔT (1/Uᵢ)/Σ(1/Uⱼ).` },
        { id: "2023-24-Q1c", label: "(c)", marks: "12",
          topic: "evaporation", sub: "Fruit-juice concentration: limits of natural circulation, better evaporator",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`A food processing company in Bangladesh needs to concentrate a heat-sensitive fruit juice from 10% solids to 50% solids. The product is prone to foaming and scale formation, and the company wants to minimize energy costs due to rising steam prices. The plant is currently using a single-effect natural circulation evaporator but production targets are not being met due to slow evaporation rates, high energy consumption, and frequent shutdowns for cleaning.

You have been hired as a process engineer to evaluate and recommend improvements.

- Identify design limitations of the current evaporator setup based on the product characteristics and process conditions.
- Propose a technically suitable evaporator configuration for this application. Justify your selection.`,
          solution: String.raw`**Duty first.** Concentrating 10% → 50% solids removes $1 - 10/50 = 0.8$ kg water per kg feed (800 kg/h for every 1000 kg/h of juice). In a single effect that needs roughly 880–900 kg/h of steam, so energy is the main operating cost.

### 1. Limitations of the single-effect natural-circulation evaporator
| Product / process feature | Why the present unit fails |
|---|---|
| Heat sensitivity (colour, flavour, vitamin C, browning) | Large liquor hold-up and repeated circulation give a long residence time (tens of minutes); the hydrostatic head raises the boiling point at the bottom of the tubes, so the juice is held hotter than the vapour-space temperature. |
| Rising viscosity from 10% to 50% solids | Circulation is driven only by density difference, so velocity is low (≈0.3–1 m/s) and falls further as the juice thickens; U drops sharply near 40–50% solids, which is the cause of the slow evaporation. |
| Scale formation (pectin, proteins, sugars) | Low velocity and nucleate boiling on the tube wall deposit solids; U falls during the run and the unit must be stopped for cleaning (frequent shutdowns). |
| Foaming | A boiling pool with a free surface foams; foam is carried over with the vapour (product loss, contaminated condensate) and the level must be held low. |
| Energy | Economy of a single effect is at best ≈0.8–1 kg vapour/kg steam; all the latent heat of the vapour is thrown away in the condenser. |
| Aroma | Volatile flavour esters leave with the vapour and are not recovered. |

### 2. Proposed configuration
**A multiple-effect (3–4 effects) falling-film evaporator operated under vacuum, with vapour recompression, an aroma-recovery unit, and a forced-circulation plate (or agitated thin-film) finisher for the last 35 → 50% step, all with CIP.**

- **Falling-film tubes (main concentration 10 → about 35%):** juice is distributed at the top and flows down the tube wall as a thin film; vapour flows down the core. Residence time is seconds, single pass, no hydrostatic head, and it works with small ΔT (3–8°C). U is high (about 1500–3000 W/m²K).
- **Vacuum and feed order:** last effect at about 40–50°C. With forward feed the juice gets cooler as it gets thicker, so the most concentrated product sees the lowest temperature (best for heat sensitivity).
- **Energy:** 3 effects give an economy of about 2.4–2.7; adding TVR on the first effect, or replacing the steam-driven effects with MVR (falling film suits the small ΔT of MVR), gives an equivalent economy of 10–30, using electricity instead of steam.
- **Finisher (35 → 50%):** viscosity is high here, so use a forced-circulation plate evaporator or an agitated (wiped) thin-film evaporator. The high velocity or the wiper blades stop scale and foam, and the short residence time protects the product.
- **Foam and scale control:** cyclonic vapour–liquid separators with demisters (thin films foam far less than a pool); high wetting rate and good distributors; no boiling inside the finisher plates (flash in the separator); automated CIP and a standby finisher so cleaning does not stop production.
- **Aroma recovery** on the first-effect vapour returns the volatile flavour to the concentrate.

### 3. Justification
| Requirement | Feature that meets it |
|---|---|
| Heat-sensitive | Seconds of residence, vacuum, small ΔT, no static head |
| Viscous at 50% | Forced-circulation plate or wiped-film finisher |
| Foaming | Thin film, no free boiling pool, cyclonic separator |
| Scaling | High film velocity, short contact, CIP, standby unit |
| Energy cost | Multiple effects and/or TVR/MVR (steam cut by 60–90%) |
| Capacity | Higher U and no fouling stops: target output is met |

**Limitations to manage:** falling film needs a minimum wetting rate (use recirculation or multi-pass bundles at low loads), good distribution, and a higher capital cost; MVR needs reliable power. These are outweighed by the steam saving and product quality.`,
          answer: String.raw`Current unit: low circulation velocity and U, long residence and hydrostatic head (degradation), wall boiling (scale), boiling pool (foam), single-effect economy ≤ 1. Recommend a 3–4 effect (or MVR/TVR) falling-film vacuum evaporator, forward feed, with a forced-circulation plate or wiped-film finisher for 35→50%, cyclonic separators, aroma recovery and CIP.` },
        { id: "2023-24-Q1d", label: "(d)", marks: "11",
          topic: "evaporation", sub: "Single-effect NaOH evaporator: steam, economy and area (MSH Ex. 16.1)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A single-effect evaporator is to concentrate 20,000 lb/h (9070 kg/h) of a 20 percent solution of sodium hydroxide to 50 percent solids. The gauge pressure of the steam is to be 20 lbf/in.² (1.37 atm); the absolute pressure in the vapor space is to be 100 mm Hg (1.93 lbf/in.²). The overall coefficient is estimated to be 250 Btu/ft²-°F (1400 W/m² °C). The feed temperature is 100°F (37.8°C). **Calculate** the amount of steam consumed, the economy, and the heating surface required.

Figures for Question 1(d) (attached to the paper): saturated steam tables (MSH Appendix 7), Dühring lines for NaOH–water (MSH Fig. 16.3), enthalpy–concentration diagram for NaOH–water (MSH Fig. 16.6), specific heats of gases. Steam-table rows used:

| T, °F | p, lbf/in.² abs | λ, Btu/lb | H (sat. vapour), Btu/lb |
|---|---|---|---|
| 120 | 1.6945 | 1025.5 | 1113.5 |
| 130 | 2.225 | 1019.8 | 1117.8 |
| 250 | 29.82 | 952.3 | 1160.7 |
| 260 | 35.42 | 945.6 | 1164.2 |`,
          solution: String.raw`**Given:** F = 20,000 lb/h, $x_F = 0.20$, $x_L = 0.50$, $T_F = 100$°F; steam 20 lbf/in.² gauge; vapour space 1.93 lbf/in.² abs; U = 250 Btu/h·ft²·°F.

**Find:** steam rate $\dot m_s$, economy, area A.

**Assumptions:** no heat loss, no entrainment; steam saturated, condensate leaves at steam temperature; heat of dilution of NaOH is large, so the enthalpy–concentration chart is used (not specific heats); the vapour leaves superheated at the solution boiling point.

1. **Material balance:**
$$L = \frac{F x_F}{x_L} = \frac{20{,}000 \times 0.20}{0.50} = 8000\ \mathrm{lb/h}, \qquad V = F - L = 12{,}000\ \mathrm{lb/h}$$

2. **Steam temperature and latent heat:** $p = 20 + 14.7 = 34.7$ lbf/in.² abs. Interpolating the steam table between 250°F (29.82) and 260°F (35.42): fraction $= (34.7 - 29.82)/5.60 = 0.871$,
$$T_s = 258.7^\circ\mathrm{F} \approx 259^\circ\mathrm{F}, \qquad \lambda_s = 952.3 - 0.871(952.3 - 945.6) = 946.5\ \mathrm{Btu/lb}$$

3. **Boiling point of water at 1.93 lbf/in.²:** between 120°F (1.6945) and 130°F (2.225): $T_w = 120 + 10(1.93 - 1.6945)/0.5305 = 124.4^\circ$F.

4. **Boiling point of the 50% liquor (Dühring chart):** go up from 124°F on the water axis to the x = 0.50 line and across: **T = 197°F**. BPR = 197 − 124 = 73°F.

5. **Liquor enthalpies (enthalpy–concentration chart):** feed, x = 0.20 at 100°F: $H_F = 55$ Btu/lb; thick liquor, x = 0.50 at 197°F: $H_L = 221$ Btu/lb.

6. **Vapour enthalpy:** saturated vapour at 124.4°F, $H_g = 1113.5 + 0.444(1117.8 - 1113.5) = 1115.4$ Btu/lb; superheat to 197°F with $c_p \approx 0.45$ Btu/lb·°F (specific-heat chart, water vapour):
$$H_V = 1115.4 + 0.45(197 - 124.4) = 1148\ \mathrm{Btu/lb}$$

7. **Enthalpy balance (MSH Eq. 16.4):**
$$q = V H_V + L H_L - F H_F = 12{,}000(1148) + 8000(221) - 20{,}000(55)$$
$$q = 13{,}776{,}000 + 1{,}768{,}000 - 1{,}100{,}000 = 1.444\times10^{7}\ \mathrm{Btu/h}\ (4233\ \mathrm{kW})$$

8. **Steam consumption:**
$$\dot m_s = \frac{q}{\lambda_s} = \frac{1.444\times10^7}{946.5} = 15{,}260\ \mathrm{lb/h}\ (6920\ \mathrm{kg/h})$$

9. **Economy:**
$$\text{Economy} = \frac{V}{\dot m_s} = \frac{12{,}000}{15{,}260} = 0.79$$

10. **Heating surface:** ΔT = 258.7 − 197 = 61.7°F,
$$A = \frac{q}{U\,\Delta T} = \frac{1.444\times10^7}{250 \times 61.7} = 936\ \mathrm{ft^2}\ (87\ \mathrm{m^2})$$

**Result:** steam ≈ 15,300 lb/h (6.9 t/h), economy ≈ 0.79, heating surface ≈ 936 ft² (87 m²).

> MSH Example 16.1 quotes λs = 939 Btu/lb and gets 15,400 lb/h, economy 0.78 and 930 ft²; the attached table gives 946 Btu/lb at 259°F, which is used here. Taking the vapour as saturated (1115 instead of 1148 Btu/lb) would understate q by about 3%. The economy is below 1 because the cold feed must be heated and the large heat of dilution of NaOH must be supplied.`,
          answer: String.raw`T_s ≈ 259°F (λ = 946 Btu/lb); boiling point 197°F (BPR 73°F); q = 1.44×10⁷ Btu/h; steam ≈ 15,300 lb/h (6.9 t/h); economy ≈ 0.79; A ≈ 936 ft² (87 m²). (MSH with λ = 939: 15,400 lb/h, 0.78, 930 ft².)` }
      ] },
    { id: "2023-24-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q2a", label: "(a)", marks: "3×2=6",
          topic: "drying", sub: "Mechanical dewatering first; why steam-tube rotary dryers are efficient",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`**Explain** the following cases

(i) Mechanical dewatering is preferred before thermal drying.

(ii) Steam-tube rotary dryers are thermally efficient`,
          solution: String.raw`### (i) Mechanical dewatering before thermal drying
- Thermal drying must supply at least the latent heat of the water, about 2260–2400 kJ/kg, and real dryers use 3000–6000 kJ per kg of water evaporated (exhaust-gas and wall losses). Filtration, centrifuging, pressing or screw-pressing remove water as liquid at a few kJ/kg up to a few tens of kJ/kg: one to two orders of magnitude cheaper.
- The water load on the dryer falls sharply. Example: a cake at 60% moisture (wet basis) holds 1.5 kg water/kg dry solid; pressing it to 40% leaves 0.67 kg/kg, a 56% cut in the water to be evaporated.
- Consequences: a smaller dryer, less fuel/steam, shorter drying time (less heat damage), less exhaust gas and dust to clean.
- Mechanical methods cannot remove bound or internal moisture, so the order is always: mechanical separation to its practical limit, then thermal drying for the rest.

### (ii) Steam-tube rotary dryers are thermally efficient
- Heat is supplied **indirectly**: steam condenses inside tubes that rotate with the shell and pass through the bed, and the heat reaches the solids by conduction where they touch the tubes.
- No large stream of hot drying gas is needed; only a small purge of air or gas sweeps out the vapour. The main loss of a direct dryer, the sensible heat leaving with the exhaust gas, is therefore very small.
- Condensing steam gives a very high film coefficient and gives up its latent heat at constant temperature; condensate is returned to the boiler.
- Result: about 85% thermal efficiency (slides' table: steam tube 85%, parallel-current direct-fired 65%, counter-current direct-fired 60%, hot air 45–50%, indirect fired 25%). The vapour can also be condensed to recover solvent.`,
          answer: String.raw`(i) Removing water mechanically costs ~1–2 orders of magnitude less energy than evaporating it (≥2260 kJ/kg), so dewater first to shrink the dryer load. (ii) Indirect heating by condensing steam: no large hot-gas stream, so almost no exhaust sensible-heat loss; high h, latent heat fully used, ≈85% efficiency.` },
        { id: "2023-24-Q2b", label: "(b)", marks: "4",
          topic: "drying", sub: "Heat-transfer mechanisms with lifting flights in a rotary dryer",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Describe Heat transfer mechanism using Lifting Flights in Rotary Dryer.`,
          solution: String.raw`Lifting flights are fin-like plates (radial, or with a bent lip) fixed along the inside of the shell. As the shell turns (4–5 r/min), each flight scoops solids from the bed, carries them up, and spills them progressively as it rises over the top, so a **curtain** of falling particles fills the cross-section through which the hot gas flows axially.

![Rotary dryer cross-section: flights lift the solids and shower them as a curtain across the hot gas](fig/2023-24-Q2b-sketch.svg)

**Mechanisms**
1. **Convection (dominant):** the falling particles are dispersed in the gas stream, so the whole particle surface is exposed to hot gas with a large relative velocity. The volumetric coefficient $Ua$ is high; for air-heated dryers MSH gives $Ua = 0.5\,G^{0.67}/D$ Btu/ft³·h·°F. Moisture evaporates at about the wet-bulb temperature while surface water remains.
2. **Conduction:** solids lying in the bed and in the flights touch the shell and flights, which are heated by the gas (and, in steam-tube or indirect units, by steam or flue gas outside).
3. **Radiation:** from the hot shell and flights, and from hot combustion gases in direct-fired units, to the solids.
4. **Mixing:** each lift turns the bed over, renewing the exposed surface and evening out particle temperatures; the slope of the shell moves the material forward.

**Design points:** flight count about 2.4D–3D per circle, radial height D/12–D/8, solids hold-up 5–15% of the shell volume. Too much hold-up overloads the flights and leaves solids in the bed; too little wastes volume. Fine, dusty solids are entrained by the gas, so the gas mass velocity is limited (300–5000 lb/ft²·h).`,
          answer: String.raw`Flights lift solids and shower them as a curtain across the axial hot-gas stream: convection to the dispersed particles dominates (Ua = 0.5G^0.67/D), plus conduction from the hot shell/flights, radiation, and continual bed renewal by mixing.` },
        { id: "2023-24-Q2c", label: "(c)", marks: "5",
          topic: "drying", sub: "Spray dryer powder: variable bulk density and poor flowability",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`A spray dryer is producing inconsistent bulk density, poor flowability in the final powder. The inlet gas temperature, feed solids content, and atomizer speed vary during production. Identify two major causes and propose solutions.`,
          solution: String.raw`The slides note that the bulk density of spray-dried powder "may be highly sensitive to changes in the solids content of the feed, to the inlet gas temperature, and to other variables". Two causes follow from the variables that are drifting.

### Cause 1: unstable atomization (feed solids and atomizer speed vary), giving a changing droplet and particle size
- For a rotary atomizer the mean droplet size falls as the wheel speed rises and as the feed becomes thinner; for a nozzle it depends on pressure and viscosity.
- Low feed solids give more water per particle, so particles puff into thin-walled hollow shells: low bulk density. High solids give dense, larger particles.
- Speed swings widen the size distribution; many fines pack poorly, are cohesive and flow badly.

**Solutions:** hold the feed concentration constant (densitometer or Brix control on the concentrator ahead of the dryer, buffer tank); drive the atomizer with a speed-controlled VFD and alarm deviations; control feed viscosity and temperature; return fines to the atomizing zone so that they agglomerate into larger, free-flowing particles.

### Cause 2: unstable drying conditions (inlet gas temperature varies), giving variable moisture and morphology
- Too hot an inlet: very fast crust formation, ballooning and hollow or cracked particles (low bulk density), and scorched, sticky surfaces.
- Too cool an inlet: under-dried powder with high residual moisture, which is sticky, cakes and flows poorly; hygroscopic products pick up more moisture.

**Solutions:** control the inlet temperature tightly (burner/heater control) and control the **outlet** temperature by trimming the feed rate (the standard spray-dryer loop, which keeps final moisture constant); dehumidify the inlet air in humid seasons; add a vibrating fluid-bed after-dryer/cooler that evens out moisture and agglomerates the powder; cool the product before packing; use a flow aid if allowed.`,
          answer: String.raw`(1) Varying feed solids and atomizer speed change droplet size and particle structure (hollow/fine particles → low, variable bulk density, poor flow): fix feed concentration and atomizer speed (VFD), recycle fines to agglomerate. (2) Varying inlet temperature changes moisture and morphology (ballooning or sticky under-dried powder): tight inlet control, outlet-temperature control by feed rate, dehumidified air, fluid-bed after-dryer/cooler.` },
        { id: "2023-24-Q2d", label: "(d)", marks: "10",
          topic: "drying", sub: "Length of an adiabatic cocurrent rotary dryer (MSH Ex. 24.4 data)",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q3a", "2019-20-Q6a"],
          text: String.raw`Calculate the length of an adiabatic rotary dryer. In a rotary dryer, the air velocity is limited to 700 lb/ft²-h. The cross-sectional area of the dryer is 8 ft². Heating air is available at 260°F and a humidity of 0.01 lb of water per pound of dry air. The solids enter at 80°F and must not be heated to a temperature above 125°F. The outlet air humidity is 0.346 lb of water per pound of dry air.

Figure for Question 2(c) (attached to the paper): psychrometric (humidity) chart for air–water at 1 atm; saturated steam tables; specific heats of gases and liquids.`,
          solution: String.raw`**Given:** G = 700 lb/ft²·h, S = 8 ft², $T_{hb} = 260$°F, $\mathcal{H}_b = 0.01$; solids 80°F in, at most 125°F out; outlet humidity printed as 0.346.

**Find:** dryer length L.

**Assumptions:**
- The printed outlet humidity 0.346 lb/lb is a misprint for **0.0346** lb/lb (the value of MSH Example 24.4, from which these data come). Adiabatic cooling from 260°F and 0.01 can never exceed the saturation humidity at the 102°F wet-bulb temperature, about 0.046 lb/lb, and the attached chart stops at 0.15.
- Cocurrent flow, because the solids are heat-sensitive; adiabatic shell.
- MSH Eq. (24.28): $Ua = 0.5\,G^{0.67}/D$ (Btu/ft³·h·°F, G in lb/ft²·h, D in ft); G is the mass velocity of the entering (moist) air.
- Number of heat-transfer units $N_t = 1.5$, the low end of the economic range 1.5–2.5 (MSH).

1. **Diameter:**
$$D = \sqrt{\frac{4S}{\pi}} = \sqrt{\frac{4 \times 8}{\pi}} = 3.19\ \mathrm{ft}$$

2. **Inlet wet bulb and humid heat (psychrometric chart):** follow the adiabatic-cooling line through (260°F, 0.01) up to the saturation curve: $T_{wb} = 102$°F. Humid heat $c_s = 0.24 + 0.45(0.01) = 0.2445 \approx 0.245$ Btu/lb dry air·°F.

3. **Outlet gas temperature** (MSH Eq. 24.8):
$$N_t = \ln\frac{T_{hb} - T_{wb}}{T_{ha} - T_{wb}} = 1.5 \;\Rightarrow\; T_{ha} = 102 + \frac{260 - 102}{e^{1.5}} = 102 + 35.3 = 137.3^\circ\mathrm{F}$$
   Check on the chart: the point (137°F, 0.0346) lies on the same wet-bulb line, $T_{wa} \approx 101$–102°F, as it must for adiabatic drying. The solids leave at $T_{sa} = 125$°F, below the gas, so cocurrent operation is feasible.

4. **Air rate and heat transferred:** $\dot m_g(1 + \mathcal{H}_b) = GS = 700 \times 8 = 5600$ lb/h, so dry air = 5600/1.01 = 5545 lb/h.
$$q_T = \dot m_g(1 + \mathcal{H}_b)\,c_s\,(T_{hb} - T_{ha}) = 5600 \times 0.2445 \times (260 - 137.3) = 1.681\times10^{5}\ \mathrm{Btu/h}$$
   Check with the given humidity: water evaporated $= 5545(0.0346 - 0.01) = 136$ lb/h, needing $136 \times 1036 = 1.41\times10^5$ Btu/h (λ at 102°F = 1036 Btu/lb), i.e. 84% of $q_T$. The other 16% heats the solids and the vapour, exactly the split in MSH Ex. 24.4 (150 of 179 Btu/lb solid). The data are consistent.

5. **Mean temperature difference** (log mean of the wet-bulb depressions):
$$\overline{\Delta T} = \frac{(260 - 102) - (137.3 - 102)}{\ln(158/35.3)} = \frac{158 - 35.3}{1.50} = 81.8^\circ\mathrm{F}$$

6. **Length** (MSH Eq. 24.29, $q_T = 0.125\pi D L G^{0.67}\overline{\Delta T}$), with $G^{0.67} = 700^{0.67} = 80.6$:
$$L = \frac{q_T}{0.125\pi D G^{0.67}\overline{\Delta T}} = \frac{1.681\times10^5}{0.125\pi \times 3.19 \times 80.6 \times 81.8} = 20.3\ \mathrm{ft}$$
   The same result in compact form: $L = 2c_sG^{0.33}DN_t = 2(0.2445)(8.68)(3.19)(1.5) = 20.3$ ft.

7. **Checks:** $Ua = 0.5(80.6)/3.19 = 12.6$ Btu/ft³·h·°F; L/D = 20.3/3.19 = 6.4, within the usual 4–10. Since L ∝ $N_t$, choosing $N_t = 2.0$ or 2.5 would give 27 ft or 34 ft.

**Result:** L ≈ 20 ft (6.2 m) for the 3.19 ft (0.97 m) diameter dryer; outlet air ≈ 137°F.`,
          answer: String.raw`Taking H_a = 0.0346 (0.346 is a misprint) and N_t = 1.5: D = 3.19 ft, T_wb = 102°F, T_ha = 137°F, q_T = 1.68×10⁵ Btu/h, ΔT_lm = 81.8°F, Ua = 12.6 Btu/ft³h°F → L ≈ 20 ft (L/D ≈ 6.4).` },
        { id: "2023-24-Q2e", label: "(e)", marks: "10",
          topic: "drying", sub: "Dryer selection for a fine, heat-sensitive, hygroscopic pharmaceutical powder",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`You are tasked with selecting a dryer for a continuous pharmaceutical production process. The product is a fine, heat-sensitive, hygroscopic powder that must retain its physical structure and color. Moisture content must be reduced from 20% to less than 1% (dry basis). Justify the most suitable dryer for this application. Include limitations and how they can be mitigated.`,
          solution: String.raw`**Duty:** from X = 0.20 to below 0.01 kg/kg dry solid, i.e. about 19 kg water per 100 kg dry solid. Most of it is surface water (constant-rate period), but the last part, below roughly 3–5%, is in the falling-rate period, and a hygroscopic solid will only reach X < 0.01 if the gas leaving the dryer is very dry (its equilibrium moisture must be below 1%).

### Screening
| Dryer | Verdict |
|---|---|
| Spray dryer | Needs a pumpable liquid feed; the product is already a wet powder. High gas temperatures. Not suitable. |
| Flash (pneumatic) dryer | Continuous, very short contact (seconds) and gentle; removes surface water well but is too short for the falling-rate period down to < 1%. Useful only as a first stage. |
| Direct rotary dryer | Long residence, attrition from lifting flights breaks the particles, dusty; heavy for pharma. Not suitable. |
| Tray, vacuum tray, freeze dryer | Gentle, but batch and labour-intensive (freeze drying is also very costly); does not fit a continuous line. |
| **Continuous vibrated fluid-bed dryer** | Continuous, plug flow, rapid heat and mass transfer, product held near the wet-bulb temperature, residence time adjustable from minutes upward, drying zones plus a cooling zone. **Selected.** |

### Why a continuous vibrated fluid-bed dryer (with dehumidified gas)
- **Heat sensitivity and colour:** intense mixing keeps the particles at the gas exit temperature, and during constant-rate drying near the wet-bulb temperature. Inlet gas can be held at about 50–70°C, and short residence minimizes thermal exposure, so colour and structure are retained.
- **Fine powder:** mechanical vibration helps fluidize fine (Geldart group A/C) powders at low gas velocity and stops channelling; gentle movement means little attrition, so the physical structure is kept.
- **Reaching < 1% for a hygroscopic solid:** the last zone uses dehumidified air (desiccant or chilled-coil dryer, dew point about −10 to −20°C), so the equilibrium moisture is below 1%; a cooling zone with the same dry air prevents moisture pick-up before packing.
- **Continuous and controllable:** plug flow gives a narrow residence-time distribution; outlet product moisture is controlled by the bed temperature in the final zone.

### Limitations and mitigation
| Limitation | Mitigation |
|---|---|
| Fines entrained in the exhaust | Low superficial velocity, vibration, disengaging freeboard; cyclone + bag filter with product return; HEPA on the exhaust |
| Agglomeration / sticking of the hygroscopic wet feed | Back-mix some dry product with the feed, distributed feeding, dehumidified inlet air, controlled first-zone temperature |
| Static charge and dust explosion risk | Earthing, inert (N₂) closed-loop gas if solvent or explosive dust, explosion vents/suppression |
| Moisture regain after drying | Dry-air cooling zone, sealed transfer, packing in low-humidity rooms |
| GMP and cleaning | Sanitary design, polished stainless steel, CIP/WIP, validated cleaning, filtered process air |
| Very cohesive powder that will not fluidize | Two-stage: a short flash (spin-flash) pre-dryer for surface water, then the vibrated fluid bed; or a continuous vacuum belt dryer for extreme heat sensitivity |`,
          answer: String.raw`Choose a continuous vibrated fluid-bed dryer with dehumidified low-temperature air (drying zones + cooling zone), possibly after a flash pre-dryer: gentle, near wet-bulb product temperature, good with fines, reaches < 1% with dry gas. Mitigate fines carry-over (cyclone/bag filter), sticking (back-mixing, dry air), static/explosion (earthing, N₂), regain (dry cooling zone, sealed packing), GMP (sanitary design, CIP).` }
      ] },
    { id: "2023-24-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q3a", label: "(a)", marks: "3×5=15",
          topic: "ejectors", sub: "Ejector steam pressure, intercondensers and back pressure",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q2a", "2018-19-Q2c", "2013-14-Q5c"],
          text: String.raw`**Explain** the following cases

(i) In a fixed capacity ejector, increase in steam pressure does not increase vapor handling capacity

(ii) Intercondenser in multi stage ejector system

(iii) Back Pressure of Ejector`,
          solution: String.raw`### (i) Fixed-capacity ejector: more steam pressure gives no more capacity
- In a fixed (non-throttling) ejector the steam nozzle and the diffuser throat are proportioned for one design motive pressure, suction pressure and load (Ludwig ch. 6). The best steam economy is obtained only at that design point.
- Raising the motive pressure increases the steam flow through the nozzle roughly in proportion to its absolute pressure. The extra steam must also pass the fixed diffuser throat, so it takes up throat area that the suction load would have used; the momentum available for entrainment does not rise in step.
- So capacity at a given suction pressure stays the same or usually **falls** ("the increased pressure usually decreases capacity due to the extra steam in the diffuser"). The extra steam also loads the following intercondenser, whose pressure rises.
- The opposite case is critical: below the design pressure the ejector becomes unstable and "breaks" (loss of vacuum). Hence the design steam pressure is taken as the minimum expected pressure at the nozzle minus about 10 psi, and wet steam must be avoided. Only a *throttling-type* ejector (spindle in the nozzle) has a family of curves for different steam pressures.

### (ii) Intercondenser in a multistage ejector system
![Two-stage ejector with an intercondenser between the stages](fig/2023-24-Q3a-sketch.svg)

- Placed between two stages. It condenses the motive steam of the previous stage and the condensable process vapour, using cooling water.
- The next stage then compresses only the non-condensables plus the vapour that saturates them at the intercondenser temperature. Its load, and so its steam consumption, falls by a large factor; without intercondensers the later stages would have to recompress all the earlier motive steam.
- Types: barometric (direct-contact) condensers with a 34 ft seal leg (cheap, but condensate mixes with water) and surface condensers (shell-and-tube, condensate recovered, no contamination, higher cost).
- Location rule: the intercondenser pressure must be above the vapour pressure of water at the cooling-water temperature plus an approach (for 85–90°F water, at least about 1.5–2 in. Hg abs). This sets the minimum compression of the first stage(s); at a few torr the first stage(s) must be non-condensing boosters.
- The intercondenser pressure is the back pressure of the stage before it, so undersizing it, warm cooling water or fouling make that stage break.

### (iii) Back pressure of an ejector
- The back pressure is the absolute pressure at the ejector discharge: the pressure of the intercondenser or after-condenser, or atmospheric pressure plus the discharge-line losses.
- For a given motive steam pressure and suction pressure, each ejector has a **maximum discharge pressure (MDP)**. As long as the back pressure is below it, the ejector follows its capacity curve. If the back pressure exceeds the MDP, the shock in the diffuser moves upstream and the ejector "breaks": flow reverses momentarily, suction pressure jumps and the vacuum fluctuates (Ludwig Fig. 6-14).
- Causes of high back pressure: warm or insufficient cooling water, fouled condensers, overload of non-condensables or condensables, restrictive discharge piping, a closed system (heater) at high pressure, barometric changes.
- Remedies: design the ejector with an MDP margin above the maximum expected back pressure; keep condensers clean and supplied with cool water; size discharge lines generously; check that the operating curve does not cross the back-pressure line at any load from shut-off to design.`,
          answer: String.raw`(i) Nozzle and diffuser are sized for one steam pressure; extra steam crowds the fixed diffuser throat, so capacity stays the same or falls (and below design it breaks). (ii) Intercondensers condense the previous stage's motive steam and condensables so the next stage handles only gas: large steam saving; barometric or surface type, P must exceed water vapour pressure at CW temperature. (iii) Back pressure = discharge pressure; above the maximum discharge pressure the ejector breaks and vacuum becomes unstable.` },
        { id: "2023-24-Q3b", label: "(b)", marks: "10",
          topic: "ejectors", sub: "Air leakage plus process vapour: 70°F air-equivalent ejector load",
          type: "numerical", syllabus: "in", repeats: ["2019-20-Q7c"],
          text: String.raw`A distillation system is to operate with a horizontal over-head condenser, Figure 3(b), and pressures are as marked. The estimated air leakage into the system is 7 lbs/hr. The molecular weight of the product vapor going out the condenser into the ejector (at 800°F) is 53. The vapor pressure of the condensing vapours is 3 mm Hg. abs at 80°F (See attachment).

Figure Question 3(b), Vacuum System for Distillation (attached to the paper): column → horizontal overhead condenser → receiver; first-stage ejector (with air-bleed valve) → barometric intercondenser (34 ft seal leg) → second-stage ejector → sump or after-condenser. Triangles mark absolute pressures (mm Hg abs) and the hexagon the temperature (80°F) at the condenser vapour outlet, which is at 5 mm Hg abs. Also attached: Ludwig Fig. 6-18 (molecular weight entrainment ratio curve) and Fig. 6-17 (temperature entrainment ratio curve).`,
          solution: String.raw`This is Ludwig Example 6-5. The question does not state what to find; the standard result is the **ejector load**: the total mixture leaving the condenser and its 70°F dry-air equivalent, the figure used to specify the first-stage ejector against the manufacturer's curves.

**Given:** air leakage $W_a = 7$ lb/h; condenser vapour outlet at 5 mm Hg abs and 80°F (from the figure); vapour pressure of condensing product 3 mm Hg at 80°F; product vapour M = 53.

**Assumptions:** the "800°F" in the text is a misprint for 80°F (the temperature marked on the figure and used for the vapour pressure); gas leaving the condenser is saturated with product vapour at 80°F; ideal-gas mixture (Dalton's law).

1. **Partial pressures:** $p_{air} = 5 - 3 = 2$ mm Hg, $p_v = 3$ mm Hg.

2. **Process vapour carried with the air** (mole ratio = pressure ratio):
$$W_v = W_a\,\frac{p_v}{p_{air}}\,\frac{M_v}{M_{air}} = 7 \times \frac{3}{2} \times \frac{53}{29} = 19.2\ \mathrm{lb/h}$$

3. **Mixture:** air 7 lb/h = 7/29 = 0.241 lbmol/h; vapour 19.2/53 = 0.362 lbmol/h. Total 26.2 lb/h = 0.603 lbmol/h.
$$\bar M = \frac{26.2}{0.603} = 43.4$$

4. **Molecular-weight entrainment ratio (Fig. 6-18):** go up from M = 43.4 to the curve and across: ratio = 1.18.
$$\text{air equivalent at }80^\circ\mathrm{F} = \frac{26.2}{1.18} = 22.2\ \mathrm{lb/h}$$

5. **Temperature correction (Fig. 6-17, air curve):** at 80°F the ratio is 0.999.
$$\text{70°F air equivalent} = \frac{22.2}{0.999} = 22.2\ \mathrm{lb/h}$$

**Result:** the ejector must handle 26.2 lb/h of mixture (7 lb/h air + 19.2 lb/h product vapour, M = 43.4) at about 5 mm Hg abs, equivalent to **22.2 lb/h of 70°F dry air**. This is the figure compared with the manufacturer's test or performance curve. The air-bleed valve on the first stage keeps the suction condition constant at loads below design.`,
          answer: String.raw`Taking 80°F (not 800°F): p_air = 5 − 3 = 2 mm Hg; process vapour = 7(3/2)(53/29) = 19.2 lb/h; mixture 26.2 lb/h, M = 43.4; Fig. 6-18 ratio 1.18 → 22.2 lb/h; Fig. 6-17 at 80°F 0.999 → 70°F air equivalent ≈ 22.2 lb/h.` },
        { id: "2023-24-Q3c", label: "(c)", marks: "10",
          topic: "ejectors", sub: "Vacuum column at 5 torr with 50% more condensables: ejector retrofit",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`A chemical plant operates a vacuum distillation column at 5 torr absolute pressure using a multi-stage steam jet ejector system. Due to process changes, the column now required handling 50% more condensable vapors (mainly water and organics) while maintaining the same vacuum level. The existing ejector system struggles to meet the new demand, causing pressure fluctuations. Suggest and Evaluate the modification for the case.`,
          solution: String.raw`### Diagnosis
- A fixed-capacity ejector follows its capacity curve: when the load rises above design, the suction pressure rises, so the column cannot be held at 5 torr.
- Water cannot be condensed at 5 torr with cooling water (the saturation temperature of water at 5 torr is about 1°C), so the first stage (or two) are non-condensing boosters that carry all the extra vapour to the first intercondenser.
- 50% more condensables overloads the **first intercondenser**: its pressure rises, exceeding the maximum discharge pressure of the booster, which then breaks. Breaking and recovering alternately is exactly the observed **pressure fluctuation** (unstable operation, Ludwig Fig. 6-13/6-14). Raising the motive steam pressure will not help a fixed ejector (part (a)(i)).

### Modifications and evaluation
| Option | Effect | Evaluation |
|---|---|---|
| 1. Reduce the load at the source: colder column overhead condenser (chilled water/brine), subcooled reflux, find and stop air leaks | Fewer condensables and less inert gas reach the ejector, and each lb of inert carries less saturated vapour | Cheapest first step; may not recover a full 50% |
| 2. Larger (re-nozzled) first-stage booster, or a second booster element in parallel | Restores capacity at 5 torr; two parallel 50–100% elements also give turndown and a spare | Needed: the booster takes the whole extra vapour; more motive steam |
| 3. Larger first intercondenser (more area, more or colder cooling water) | Keeps the intercondenser pressure below the booster's maximum discharge pressure, so the booster no longer breaks; condenses the extra water and organics | Essential together with option 2, otherwise the instability remains |
| 4. Hybrid system: liquid-ring vacuum pump replacing the last ejector stage(s) | Handles condensable surges and saturated gas well; much lower steam use | Higher capital cost, sealing-liquid cooling and possible organic contamination of the ring liquid |
| 5. Stable pressure control: suction-pressure control by air bleed or recycle of ejector discharge (load spill-back), dry motive steam at or above design pressure | Keeps the ejectors on the stable part of their curves at all loads | Low cost; does not add capacity by itself |

### Recommendation
Combine (1) and (5) with (2)+(3): redesign or parallel the first-stage booster for the 1.5× condensable load at 5 torr, enlarge the first intercondenser (and consider chilled water for the organics), and add a liquid-ring pump as the final stage if steam cost matters. Check the new operating curve against the maximum back-pressure line from shut-off to 150% load so the system stays stable; the steam and cooling-water demand rises roughly in proportion to the load handled by the boosters.`,
          answer: String.raw`Extra condensables overload the booster and first intercondenser; intercondenser pressure exceeds the booster's maximum discharge pressure → breaking/fluctuations. Fix: cut load (colder overhead condenser, leaks), bigger or parallel first-stage booster plus larger intercondenser (chilled water for organics), optional liquid-ring final stage, air-bleed/recycle pressure control and dry steam at design pressure.` }
      ] },
    { id: "2023-24-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q4a", label: "(a)", marks: "5×2=10",
          topic: "relief", sub: "Credible overpressure scenarios; total containment systems",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`**Write** a short note on

(i) Identification of credible overpressure scenario

(ii) Total Containment Systems.`,
          solution: String.raw`### (i) Identifying credible overpressure scenarios
- A relief device is sized for a **scenario**: a specific, realistic way the pressure can exceed the MAWP. Each relief location may have several scenarios; the vent area is calculated for each and the **worst case (largest area)** fixes the size (Crowl & Louvar ch. 8).
- Scenarios are found by a systematic process hazard analysis: HAZOP (guide words: more flow, no flow, reverse flow, more temperature …), what-if, checklists (API 521 list of causes), and by reviewing every unit and operating step.
- Typical causes: blocked outlet with a pump or compressor running; positive-displacement pump dead-headed; control-valve or regulator failure (e.g. N₂ regulator fails open); utility failure (cooling water, power, instrument air); runaway reaction or loss of agitation/cooling; heat-exchanger tube rupture; fire exposure; thermal expansion of blocked-in liquid; inadvertent valve opening or closing; overfilling.
- **Credible** means physically possible and reasonably likely: normally single failures (single jeopardy). Two independent simultaneous failures are not usually designed for, unless they share a common cause.
- Output: a table of relief location → scenario → required relief rate and phase (vapour, liquid, two-phase). Example (C&L Ex. 8-2): reactor R-1: vessel full and pump P-1 actuated; cooling coil broken with water entering at 200 gpm/50 psig; N₂ regulator failure (critical flow in a 1 in. line); runaway reaction.

### (ii) Total containment systems
- Relief discharge is not released to the atmosphere; it goes through a closed relief header to a containment and treatment train.
- **Knockout (blowdown) drum:** separates liquid from the vapour, horizontal or tangential-inlet type, sized so that droplets settle (drag-coefficient method); it may contain a quench liquid for hot or reactive discharge. Collected liquid is recovered or incinerated.
- **Vapour treatment:** condenser (high-boiling material), scrubber (toxic: caustic for H₂S or HCl, water for NH₃ or NO₂), flare (combustible or toxic gas burned to CO₂ and H₂O; stack height set so that radiation at the base is ≤ 1500 Btu/h·ft²), incinerator, or a combination.
- Design points: the header and drum must take the worst-case (often two-phase runaway) flow; the **built-up back pressure** in the header must stay within the limits of the relief valves (hence balanced-bellows valves); purge and liquid-seal the flare to prevent flashback; materials suitable for corrosive or cold flashing fluids.`,
          answer: String.raw`(i) Find realistic single-failure overpressure causes by PHA/HAZOP (blocked outlet, dead-headed pump, regulator failure, cooling loss/runaway, tube rupture, fire, thermal expansion); size each and use the worst (largest vent area). (ii) Relief goes via closed header to a knockout/blowdown drum (liquid removal), then condenser, scrubber, flare or incinerator, with header back pressure and two-phase flow considered.` },
        { id: "2023-24-Q4b", label: "(b)", marks: "10",
          topic: "relief", sub: "Relief device locations on a polymerization reactor system (C&L Ex. 8-1)",
          type: "sketch", syllabus: "in", repeats: ["2022-23-Q4c", "2019-20-Q8b", "2015-16-Q8b"],
          text: String.raw`**Identify** relief valve location (attached figure Q. 4(b)) and attach it with answer scripts. **Justify** for your answer.

Figure for Q. 4(b) (attached to the paper): polymerization reactor R-1 with agitator and internal coil; monomer in (5 gpm) through V-2; steam (125 psig) through V-4 and cooling water out through V-5 on the coil inlet side; cooling water in (200 gpm) through V-6 and a steam trap through V-7 on the coil outlet side; base fed by positive-displacement pump P-1 through V-1; product out through V-8, V-9; nitrogen (100 psig) through pressure controller PC, check valve and V-3; overhead condenser E-1 (cooling water V-10 in, V-11 out, 10 gpm) → V-12 → drum D-1 with level control (LC), vacuum through V-15, and pump P-2 (V-13, V-14).`,
          solution: String.raw`Rule (Crowl & Louvar, relief location guidelines): every process vessel gets a relief; every positive-displacement pump discharge gets one; every liquid space that can be **blocked in and heated** (exchanger water sides, coils, jackets) gets one. Applying it to the figure gives five relief devices:

![Relief locations PSV-1 to PSV-5 marked on the polymerization reactor flow sheet](fig/2023-24-Q4b-sol.svg)

| Relief | Location | Justification (credible scenario) |
|---|---|---|
| **PSV-1** (PSV-1a rupture disc + PSV-1b safety relief valve) | Top of reactor R-1 | All vessels need protection. Scenarios: runaway polymerization on loss of cooling; vessel full while P-1 keeps pumping; coil rupture admitting 200 gpm water at 50 psig; N₂ regulator failing open (100 psig). The disc protects the valve from the reactive monomer (no polymer plugging the seat); the safety relief valve suits a runaway that gives two-phase flow. |
| **PSV-2** | Discharge of positive-displacement pump P-1 (between P-1 and V-1) | A PD pump dead-headed (V-1 or V-8 closed) builds pressure until it bursts the line or wrecks the pump. Liquid service: relief valve, discharge returned to the pump suction / feed tank. |
| **PSV-3** | Cooling-water side of condenser E-1 (between V-10 and V-11) | If V-10 and V-11 are both closed and hot vapour keeps flowing, the trapped water heats and expands (or boils) and ruptures the tubes. Liquid-only relief valve, conventional type. |
| **PSV-4** | Drum D-1 | Every vessel: e.g. the N₂ regulator fails and gas flows through R-1 and E-1 into D-1, or the vacuum line is closed while vapour enters. Liquid or vapour possible: safety relief valve (balanced bellows if it vents into a header with back pressure). |
| **PSV-5** | Reactor coil (between V-4/V-5 and V-6/V-7) | Water blocked in the coil (V-4 to V-7 closed) is heated by the reaction (or steam, or even the sun); thermal expansion ruptures the coil. Liquid relief valve. |

Not needed: P-2 is a centrifugal pump (its shut-off head cannot exceed the system design pressure), and the lines open to the reactor are protected by PSV-1. Relief discharges go to a containment system (knockout drum → flare/scrubber), not to the atmosphere, because of the monomer.`,
          answer: String.raw`PSV-1 on reactor R-1 (rupture disc + safety relief valve: runaway, overfilling, coil leak, N₂ failure); PSV-2 on P-1 discharge (dead-headed PD pump, return to suction); PSV-3 on E-1 cooling-water side (blocked-in heated water); PSV-4 on drum D-1 (vessel, N₂ breakthrough); PSV-5 on the reactor coil (blocked-in water heated by reaction).` },
        { id: "2023-24-Q4c", label: "(c)", marks: "15",
          topic: "relief", sub: "Relief system for a reactive-monomer batch reactor with variable back pressure",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`**Justify** your selection of an appropriate overpressure protection system for a batch reactor handling a reactive monomer, considering the specified relief scenarios. The reactor operates at 4 bar(g), and relief scenarios include:

- Corrosive contents and potential polymerization in dead zones.
- Atmospheric discharge to a knockout drum and flare.
- Backpressure from the downstream flare line is variable (up to 1.5 bar).`,
          solution: String.raw`### Requirements set by the scenarios
1. **Runaway polymerization** of a reactive monomer is the governing case: fast pressure rise and **two-phase (foamy) flow** through the vent (DIERS). A large, fast-opening area is needed.
2. **Corrosive, polymerizing fluid:** a spring valve exposed continuously to the monomer will corrode, and polymer will form in the inlet nozzle (a dead zone) and on the seat, guides and spring, so the valve may not open at its set pressure or may not reseat.
3. **Discharge to knockout drum and flare:** a closed header, so the valve sees back pressure, and the system must not release monomer to the atmosphere.
4. **Variable superimposed back pressure up to 1.5 bar:** with a set pressure of about 4.4–5 bar(g) (≈10% above the 4 bar(g) operating pressure and ≤ MAWP), this is about 30–35% of the set pressure.

### Options
| Device | Assessment |
|---|---|
| Conventional spring valve | Set pressure and capacity change with back pressure; acceptable only up to about 10% back pressure. With variable 1.5 bar the opening point would drift. **Rejected.** |
| Pilot-operated valve | Tolerates high back pressure, but the small pilot passages would plug with polymer and corrode. **Rejected** for this service. |
| Rupture disc alone | Simple, cheap, corrosion-resistant (graphite, Hastelloy, PTFE-lined), very large area, no dead space if flush-mounted, opens almost instantly: good for runaway. But it does not reclose, so the whole batch of monomer would be discharged even after the pressure falls; and a standard disc bursts on differential pressure, so variable back pressure shifts the burst point. Acceptable only as part of the system. |
| **Balanced-bellows safety relief valve** | The bellows isolates the bonnet, spring and guides from the process fluid and cancels the effect of back pressure on the set pressure; usable to about 30–50% back pressure with a capacity correction factor $K_b$ (API 520). Recloses after the upset. **Selected, with a disc ahead of it.** |

### Selected system
**A corrosion-resistant, flush-mounted rupture disc (PSV-1a) directly on the reactor nozzle, in series with a balanced-bellows safety relief valve (PSV-1b) rated for two-phase service, discharging through a closed header to the knockout drum and flare.**

- The disc protects the valve from corrosion and polymer; mounted flush with the vessel there is no dead leg where monomer can sit and polymerize.
- The space between disc and valve has a pressure gauge or excess-flow indicator with a vent (tell-tale) so that a pin-hole or burst disc is detected (ASME requirement); disc burst pressure ≤ valve set pressure ≤ MAWP.
- The bellows valve opens at its set pressure regardless of the 0–1.5 bar flare back pressure and **recloses** when the pressure falls, so only part of the batch is lost. The bonnet vent must go to a safe place in case the bellows leaks.
- Size the combination for the two-phase runaway (DIERS / Leung method) with a disc combination factor (e.g. 0.9) and $K_b$ for the maximum back pressure; check the built-up back pressure of the header at full flow.
- For maintenance on a batch unit, install two assemblies with a three-way change-over valve, or accept periodic inspection between batches.
- Supporting measures: heat-traced, self-draining relief line sloping to the knockout drum; inert purge of the header; inhibitor (short-stop) injection and emergency cooling as earlier layers of protection; knockout drum sized for the two-phase discharge with a quench if needed.`,
          answer: String.raw`Use a flush-mounted corrosion-resistant rupture disc in series with a balanced-bellows safety relief valve (two-phase rated), tell-tale gauge between them, discharging via closed header to knockout drum and flare. Disc: protects valve from corrosion/polymer, no dead zone; bellows: set pressure independent of 0–1.5 bar back pressure (≈30% of set), recloses. Conventional and pilot valves rejected; size for two-phase runaway (DIERS) with K_b.` }
      ] },
    { id: "2023-24-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q5a", label: "(a)", marks: "12",
          topic: "separator-selection", sub: "Sylvan chart: upgrading a cyclone for bimodal fertilizer dust at 97%",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`A phosphate fertilizer manufacturing plant operates a granulation and drying section that produces a dust-laden exhaust stream at a concentration 10 grains/ft³. A recent analysis of the particulate emissions shows a bimodal distribution of particle sizes in the exhaust stream: one set of particles are in the 1-3 micron range (majority 2 micron sized), whereas the other set of particles are in the 10-30 micron range (majority 20 micron sized).

The plant must comply with new emission regulations that required a minimum overall dust collection efficiency of 97% for both set of particles.

The current setup uses a low-resistance cyclone separator, which meets very low overall efficiency. A capital expenditure budget is available for system upgrade or replacement. Three options being considered include:

(i) Replacing the cyclone with a high efficiency cyclone separator

(ii) Replacing the cyclone with a high efficiency cyclone separator and another separating unit

(iii) Adding another separation unit with the existing low-resistance cyclone separator.

Using the Sylvan Chart, identify which option offers the most technically feasible solution based on the operational requirements and emission regulation constraints. Sylvan chart is provided in Figure for Q. 5(a) (attached to the paper).`,
          solution: String.raw`**Method (slides, "Workout example"):** locate the mean particle size on the bottom axis and go vertically down through the collector efficiency bands; read each band's efficiency on the right-hand "scale of efficiencies". The top of the chart (dust-collecting range) shows that 10 grains/ft³ is a heavy loading, typical of dryers, kilns and coolers.

### 1. Sylvan chart readings
| Collector | 2 µm (fine mode) | 20 µm (coarse mode) |
|---|---|---|
| Low-resistance cyclone | ≈ 0 (left of its band) | ≈ 60–70% |
| High-efficiency cyclone | < 50% (left of its band; take ≈ 30%) | ≈ 95–98% (take 97%) |
| Wet collector (scrubber) | ≈ 90–95% | > 99% |
| Cloth arrester (fabric filter) | ≈ 98–99% | > 99.9% |
| Electrostatic precipitator | ≈ 98–99% | > 99% |

### 2. Efficiency of units in series
For collectors in series, $\eta = 1 - \prod(1 - \eta_i)$, applied to each size fraction separately. The regulation (97% for each set) must be met for both the 2 µm and the 20 µm fraction. Take a fabric filter at 99% as the second unit.

| Option | 2 µm | 20 µm | Meets 97% for both? |
|---|---|---|---|
| (i) HE cyclone alone | ≈ 30% | ≈ 97% (marginal) | **No**: fines escape |
| (ii) HE cyclone + fabric filter | $1 - 0.70 \times 0.01 = 99.3\%$ | $1 - 0.03 \times 0.01 = 99.97\%$ | **Yes**, with margin |
| (iii) LR cyclone + fabric filter | $1 - 1.0 \times 0.01 = 99.0\%$ | $1 - 0.35 \times 0.01 = 99.65\%$ | Yes, on efficiency alone |

### 3. Operational comparison of (ii) and (iii)
- **Dust load on the filter** (assume, for illustration, half the mass in each mode): (ii) $10[0.5(0.70) + 0.5(0.03)] = 3.7$ grains/ft³; (iii) $10[0.5(1.0) + 0.5(0.35)] = 6.8$ grains/ft³, nearly twice as much.
- In (iii) a third or more of the coarse, abrasive fertilizer granules reach the bags: faster bag abrasion, more frequent cleaning pulses, higher and rising pressure drop, larger hoppers, and if a bag fails the emission jumps because the precleaner removes little. In (ii) the HE cyclone takes almost all the coarse mode (and returns it as product), and the filter only polishes the fines.
- The HE cyclone has a higher pressure drop than the LR cyclone, but this is small compared with the gain; the budget allows the replacement.
- Choice of second unit: a pulse-jet fabric filter (cloth arresters ≈ 98–99% at 2 µm on the Sylvan chart) is the usual choice for dry fertilizer dust. Because the dust is hygroscopic, keep the gas well above its dew point (insulated housing). A wet collector would need a high-energy venturi to reach 97% at 2 µm. An ESP also qualifies but costs more and is sensitive to load and resistivity.

**Conclusion:** Option (i) is not feasible (≈ 30% for the 2 µm fraction). Option (iii) can meet 97% but overloads the second unit. **Option (ii), a high-efficiency cyclone followed by a fabric filter (or ESP), is the most technically feasible solution:** ≥ 99% for both modes, robust to load swings, and the coarse product is recovered.`,
          answer: String.raw`Sylvan chart: HE cyclone ≈ 97% at 20 µm but < 50% at 2 µm; LR cyclone ≈ 60–70% at 20 µm, ~0 at 2 µm; fabric filter/ESP ≈ 98–99% at 2 µm. (i) fails for fines; (iii) passes but overloads the filter; (ii) HE cyclone + fabric filter gives ≈ 99.3% (2 µm) and ≈ 99.97% (20 µm): best option.` },
        { id: "2023-24-Q5b", label: "(b)", marks: "7",
          topic: "separator-selection", sub: "Why Si and C nanoparticles bond but larger particles separate easily",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`During the production of a novel battery at Polashi Energy Solution Company Limited, it was found essential to keep silicon and carbon nanoparticles separated. When moderately sized silicon and carbon nanoparticles were used, unwanted molecular interactions occurred between the two types of particles, forming bonded structures that required high mechanical energy to separate. However, when larger particles were used, separation was significantly easier. Explain why this phenomenon occurred using the properties of powders.`,
          solution: String.raw`### Interparticle forces versus particle weight
The behaviour of a powder depends on the balance between **surface (interparticle) forces**, which scale with particle size d, and **body forces** (weight, inertia), which scale with $d^3$.

- Van der Waals attraction between two spheres in contact (separation z ≈ 0.4 nm, Hamaker constant A ≈ $10^{-19}$ J): $F_{vdW} = \dfrac{A\,d}{24z^2}$, proportional to d.
- Weight: $W = \dfrac{\pi}{6}d^3\rho_p g$, proportional to $d^3$.
- Ratio: $F_{vdW}/W \propto 1/d^2$.

For silicon ($\rho_p$ = 2330 kg/m³):

| d | $F_{vdW}$ | W | $F_{vdW}/W$ |
|---|---|---|---|
| 50 nm | $1.3\times10^{-9}$ N | $1.5\times10^{-18}$ N | $\sim10^{9}$ |
| 50 µm | $1.3\times10^{-6}$ N | $1.5\times10^{-9}$ N | $\sim10^{3}$ |
| 500 µm | $1.3\times10^{-5}$ N | $1.5\times10^{-6}$ N | $\sim10$ |

So nanoparticles are dominated completely by surface forces; their weight, inertia and the forces of normal handling (sieving, air classification) cannot pull them apart.

### Powder properties behind the bonding
1. **Specific surface area** $S = 6/(\rho_p d)$ grows as d falls. Nanopowders have tens to hundreds of m²/g, with a large fraction of atoms at the surface, so the surface energy is high and the particles lower it by sticking together (agglomeration, Geldart group C, very cohesive behaviour).
2. **Contact number and contact area:** fine particles pack with many contacts per unit mass; under any pressure the contacts flatten, increasing the van der Waals area. Between dissimilar Si and C surfaces this can go on to chemical bonding (Si–O–C or Si–C bonds via surface oxide and dangling bonds), which is why high mechanical energy is needed.
3. **Electrostatic charge:** silicon and carbon have different work functions, so triboelectric charging on contact gives oppositely charged particles that attract (heteroaggregation).
4. **Moisture:** adsorbed water forms liquid bridges (capillary forces ∝ d), again important only for small particles.
5. **Mobility:** nanoparticles follow gas eddies and Brownian motion rather than gravity, collide often and stick on contact.

### Why larger particles separate easily
For larger particles the surface force per unit mass is $10^3$–$10^8$ times smaller, so gravity, inertia and the forces in screens, classifiers or cyclones exceed the adhesion. The particles flow freely, collide without bonding, and separate by size or density with little energy.`,
          answer: String.raw`Adhesive forces (van der Waals, electrostatic, capillary) scale with d, weight and inertia with d³, so adhesion/weight ∝ 1/d² (≈10⁹ at 50 nm, ≈10 at 500 µm). Nanoparticles have huge specific surface and surface energy, many contacts and opposite tribo-charges, so Si and C agglomerate and even bond chemically; larger particles are dominated by gravity and inertia and separate easily.` },
        { id: "2023-24-Q5c", label: "(c)", marks: "16",
          topic: "gas-liquid-separation", sub: "Horizontal gravity separator for 3.5 Mm³/day gas, 200 µm droplets",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A horizontal gravity separator (without mist extractor) is required with the following specifications:

| Parameter | Value |
|---|---|
| Gas flow rate | 3.5 Mm³/day |
| Gas relative density | 0.80 |
| Gas molecular weight (MW) | 25.4 |
| Operating pressure | 4200 kPa(g) |
| Operating temperature | 55 °C |
| Gas compressibility factor (Z) | 0.95 |
| Gas viscosity | 0.018 mPa·s |
| Liquid relative density | 0.70 |
| Droplet size to be removed | 200 µm |
| Liquid surge | None required |

It is desired to remove all entrainment greater than 200 µm in diameter. Calculate the required dimensions of the horizontal gravity separator.

Additional Information:
$$V_t = \sqrt{\frac{4gD_p(\rho_l - \rho_g)}{3\rho_g C_D}}, \qquad C_D(\mathrm{Re})^2 = \frac{1.31\times10^{7}\,\rho_g D_p^3(\rho_l - \rho_g)}{\mu^2}$$

Figure for Q. 5(c) (attached to the paper): drag coefficient $C_D$ versus $C_D(\mathrm{Re})^2$.`,
          solution: String.raw`**Given:** $Q_{std}$ = 3.5×10⁶ m³/day (standard 101.325 kPa, 15°C); M = 25.4; P = 4200 kPa(g); T = 55°C; Z = 0.95; μ = 0.018 mPa·s; liquid relative density 0.70; $D_p$ = 200 µm; no surge volume.

**Find:** vessel diameter $D_v$ and length $L_v$.

**Assumptions:** vessel half full of liquid (gas flows in the upper half); 20% design margin on gas flow (slides: Q + 15–25%); $\rho_l = 0.70 \times 1000 = 700$ kg/m³. The relative density 0.80 does not agree with M = 25.4 (25.4/28.96 = 0.88); M is used for the density. In the $C_D\mathrm{Re}^2$ formula $D_p$ is in m, μ in mPa·s, ρ in kg/m³.

1. **Gas density:**
$$\rho_g = \frac{PM}{ZRT} = \frac{(4200 + 101.3)(25.4)}{0.95 \times 8.314 \times 328.15} = 42.2\ \mathrm{kg/m^3}$$

2. **Drag parameter:**
$$C_D\mathrm{Re}^2 = \frac{1.31\times10^7 \times 42.15 \times (200\times10^{-6})^3 \times (700 - 42.15)}{0.018^2} = 8.97\times10^{3}$$

3. **Drag coefficient (attached chart):** go up from $C_D\mathrm{Re}^2 = 9.0\times10^3$ to the curve and across: $C_D \approx 1.2$.

4. **Terminal velocity:**
$$V_t = \sqrt{\frac{4 \times 9.81 \times 200\times10^{-6} \times 657.9}{3 \times 42.15 \times 1.2}} = 0.184\ \mathrm{m/s}$$
   Check: Re = $\rho_g V_t D_p/\mu = 42.15 \times 0.184 \times 2\times10^{-4}/1.8\times10^{-5} = 86$, the intermediate regime, which is why the chart is used (Stokes' law would give 0.80 m/s, far too high).

5. **Actual gas flow at operating conditions:**
$$Q_{op} = Q_{std}\,\frac{P_{std}}{P}\,\frac{T}{T_{std}}\,Z = \frac{3.5\times10^6}{86{,}400} \times \frac{101.325}{4301.3} \times \frac{328.15}{288.15} \times 0.95 = 1.032\ \mathrm{m^3/s}$$
   Design flow with 20% margin: $Q_{max} = 1.2 \times 1.032 = 1.239$ m³/s.

6. **Gas-capacity criterion (IPS method in the slides):** the density-corrected flow must satisfy $Q/A \le 0.1$ m/s, with $Q = Q_{max}\sqrt{\rho_g/(\rho_l - \rho_g)}$ and A the gas area above the liquid:
$$Q = 1.239\sqrt{\frac{42.15}{657.9}} = 0.314\ \mathrm{m^3/s} \;\Rightarrow\; A \ge \frac{0.314}{0.1} = 3.14\ \mathrm{m^2}$$
   Half full: $A = \pi D_v^2/8$, so $D_v \ge \sqrt{8(3.14)/\pi} = 2.83$ m. **Take $D_v$ = 2.9 m** ($A$ = 3.30 m², $Q/A$ = 0.095 m/s).

7. **Droplet-settling criterion (length):** a 200 µm drop entering at the top must fall $D_v/2$ while the gas travels the effective length:
$$\frac{D_v/2}{V_t} \le \frac{L_{eff}}{u_g},\quad u_g = \frac{8Q_{max}}{\pi D_v^2} \;\Rightarrow\; D_vL_{eff} = \frac{4Q_{max}}{\pi V_t} = \frac{4 \times 1.239}{\pi \times 0.184} = 8.55\ \mathrm{m^2}$$
   With $D_v$ = 2.9 m: $L_{eff} \ge 2.95$ m.

8. **Length:** start with the suggested $L_v/D_v = 3$: $L_v = 3 \times 2.9 = 8.7$ m (> 2.95 m, satisfied). Gas velocity $u_g$ = 1.239/3.30 = 0.375 m/s; gas residence time 8.7/0.375 = 23 s against a settling time of 1.45/0.184 = 7.9 s.

**Result:** horizontal separator about **2.9 m ID × 8.7 m tangent-to-tangent**, half full of liquid ($L/D$ = 3).

> Notes: (1) If the density correction in step 6 is left out ($A = Q_{max}/0.1 = 12.4$ m²) the diameter comes out 5.6 m, which is over-conservative (gas velocity 0.1 m/s against $V_t$ = 0.18 m/s). (2) Sizing on settling alone gives $D_v \approx 1.7$ m, $L_v \approx 5.1$ m at L/D = 3, but then the density-corrected velocity is 0.28 m/s > 0.1 m/s and re-entrainment from the liquid surface is likely, so the capacity criterion governs here.`,
          answer: String.raw`ρ_g = 42.2 kg/m³; C_D Re² = 9.0×10³ → C_D ≈ 1.2; V_t = 0.184 m/s; Q_op = 1.03 m³/s (design 1.24); capacity Q√(ρg/(ρl−ρg))/A ≤ 0.1 m/s → A ≥ 3.14 m² → D ≈ 2.9 m; settling needs D·L_eff ≥ 8.6 m² (L_eff ≥ 3.0 m); choose L = 3D ≈ 8.7 m.` }
      ] },
    { id: "2023-24-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q6a", label: "(a)", marks: "5×4=20",
          topic: "dust-collection", sub: "Troubleshooting inertial separator, baghouse, shaker filter and ESP",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Assess the following scenarios:

(i) A chemical manufacturing plant processes a high-temperature gas stream carrying fine, very sticky particulate matter produced during a spray-drying step. The gas stream exits the dryer at 90 °C and atmospheric pressure and contains particles with a mean diameter of 250 µm. The plant originally installed an inertial separator to remove these particles. Analyze whether the selected separation method is appropriate for the given process conditions. If not, recommend an effective alternative with proper justification.

(ii) A gas cleaning system uses a baghouse filter to remove fine (2-30 µm) dust particles from a moist flue gas stream exiting a combustion process. The gas enters the filter unit at 70°C with 10% water vapor by volume at atmospheric pressure. However, during colder seasons, ambient conditions can cause the gas or filter housing to drop below even 50 °C. The dew point of the gas is approximately 57 °C. The filter has recently been experiencing several operational issues, including mud formation and severe plugging or clogging. Explain the most likely cause of these operational issues. How can they be resolved without replacing the existing filter system?

(iii) In a chocolate manufacturing facility, a shaker-type fabric filter is used for filtration of a gas stream consisting of fine particles. The filter operates at 1 atm and 45°C with an air-to-cloth (A/C) ratio of 10:1. However, the filter is currently experiencing low efficiency. Explain the possible cause of this issue and suggest how it can be resolved.

(iv) A factory uses an Electrostatic Precipitator (ESP) to remove carbon black particles from its exhaust gas. Despite operating the ESP under standard conditions, the collection efficiency remains unexpectedly low, and the use of multiple cyclone separators prior to the ESP has not resolved the problem. Engineers measured the gas velocity at various points within the ESP and found that some sections of the ESP are experiencing higher velocities than other. Identify the phenomenon responsible for the reduced efficiency, explain its underlying causes, and analyze possible solutions to resolve the issue effectively.`,
          solution: String.raw`### (i) Sticky spray-dryer particles in an inertial separator
- **Size:** a 250 µm mean size is in the "macroscopic" range of the Sylvan chart, where inertial separators and cyclones are highly efficient, so on size alone the choice looks right.
- **Stickiness is the problem:** an inertial separator works by making the particles strike baffles or walls and slide into a hopper. Sticky particles adhere where they hit, build up on baffles, walls and the hopper outlet, change the flow passages, reduce efficiency and finally plug the unit. At 90°C the material (often sugars, resins or hygroscopic salts) may be above its sticky-point temperature.
- **Assessment:** not appropriate as a dry device.
- **Alternative: a wet scrubber** (wet cyclone/cyclonic spray scrubber or impingement scrubber; venturi if fines are also present). The particles are captured in liquid, so nothing sticks to dry walls; the walls are continuously flushed; the gas is also cooled. For 250 µm particles a low-energy wet cyclone gives > 99%. If the product must be recovered dry, use a scrubber liquid that is the product's own feed solution (returned to the spray dryer), or a cyclone with hot, smooth, steeply-coned walls kept above the sticky-point temperature with air sweeps or wall knockers, but the wet route is more robust.

### (ii) Baghouse on moist flue gas: mud and plugging
- **Cause:** condensation. The gas dew point is 57°C; at 70°C the margin is only 13°C, and in cold weather the housing, hopper walls and bags drop below 50°C, so water condenses on the cold surfaces and in the dust cake. Wet dust turns into mud that blinds the fabric (pressure drop rises, flow falls), cakes in hoppers and may also form acids (SO₃/HCl) that attack the bags.
- **Resolution without replacing the filter:**
  1. Insulate (and clad) the housing, ducts and hoppers; add hopper heaters and trace heating.
  2. Keep the gas at least 15–25°C above the dew point (above about 75–80°C): reduce upstream cooling, use a gas–gas reheater or hot-air bypass, or mix in hot dry air.
  3. Preheat the baghouse with hot air before admitting flue gas; purge with hot air at shutdown so no moist gas is left to condense.
  4. Stop cold air in-leakage (doors, rotary valves, hopper seals).
  5. Clean or replace the blinded bags with the same housing, using a hydrophobic or PTFE-membrane fabric; adjust the cleaning cycle; empty hoppers continuously.
  6. Optionally precoat the bags with a dry powder (lime, limestone) to protect them and neutralize acids.

### (iii) Shaker filter at A/C = 10:1 in a chocolate plant
- **Cause:** the air-to-cloth ratio is far too high. Shaker (and reverse-air) baghouses are designed for about 2–4 ft/min (0.6–1.2 m/min, i.e. A/C ≈ 2:1 to 4:1); 10:1 is in the range of pulse-jet filters. At high face velocity the fine particles are driven through the cloth (bleed-through/seepage), the dust cake that does the actual fine filtration is compressed and cracked, the pressure drop rises, and gentle shaking cannot clean the bags, so efficiency falls.
- Contributing factor: cocoa and chocolate dust contains fat (cocoa butter melts at about 34–38°C); at 45°C it is soft and smears into the fabric, blinding parts of the cloth and forcing the remaining area to run at an even higher velocity.
- **Resolution:** reduce A/C to about 2–3:1 by adding compartments or bags (more cloth area) or by reducing the air flow; or convert to a pulse-jet design that is rated for higher A/C; precoat new bags to build a stable initial cake; use a suitable fabric (PTFE membrane, anti-static); cool the gas below the fat softening temperature (about 30°C) or lower the inlet dust temperature; adjust the shaking frequency and duration.

### (iv) Low ESP efficiency on carbon black with uneven velocities
- **Phenomenon:** poor **gas flow distribution** (maldistribution, channelling and sneakage). The Deutsch equation, $\eta = 1 - \exp(-wA/Q)$, holds for each lane. Lanes that carry more than their share of the gas have a lower specific collecting area $A/Q$, and because the dependence is exponential, the extra penetration from the fast lanes is much more than the gain in the slow lanes. Example: design $wA/Q = 4.6$ (99%); if half of the cross-section carries gas at 1.5× and half at 0.5× the mean velocity (75% and 25% of the flow), $\eta = 0.75(1 - e^{-3.07}) + 0.25(1 - e^{-9.2}) = 96.5\%$: the penetration rises from 1% to 3.5%.
- **Underlying causes:** abrupt duct expansion at the inlet, bends just upstream, damaged or missing perforated distribution plates, gas bypassing (sneakage) through the hoppers or above or below the plates, and inlet ducts plugged with deposits. High local velocity also **re-entrains** dust during rapping. Carbon black makes this worse: it has low resistivity, so a collected particle quickly loses its charge, takes the charge of the plate and is repelled back into the gas, and it is fine, light and fluffy, so it re-entrains easily. That is also why the upstream cyclones (which only remove coarse particles) did not help.
- **Solutions:**
  1. Correct the flow: install or repair perforated distribution plates and turning vanes; use a flow model (physical or CFD) to aim for a uniform velocity profile (e.g. 85% of points within ±15% of the mean); fit anti-sneakage baffles in hoppers and above or below the fields.
  2. Lower the velocity: add fields or sections or reduce the gas flow so that the velocity is about 1–1.5 m/s with an adequate A/Q.
  3. Control re-entrainment: sequential, lower-intensity rapping, rapping one field at a time, and avoid rapping the outlet field during high flow.
  4. Because carbon black is a low-resistivity, re-entraining dust, consider a wet ESP or, as is common in carbon-black plants, a fabric filter after the ESP or instead of it.`,
          answer: String.raw`(i) 250 µm is large enough for an inertial separator but sticky particles coat and plug it: use a wet scrubber/wet cyclone (or heated smooth cyclone). (ii) Gas cools below its 57°C dew point → condensation, mud, blinding: insulate/heat housing and hoppers, keep gas ≥15–25°C above dew point, preheat and purge, stop air leaks, membrane bags. (iii) A/C 10:1 is far above the 2–4:1 for shaker filters (bleed-through, cake cracking; fat smearing at 45°C): add cloth area or switch to pulse-jet, precoat, cool gas. (iv) Gas maldistribution/sneakage plus re-entrainment of low-resistivity carbon black: distribution plates, turning vanes, baffles, lower velocity, rapping control, wet ESP or fabric filter.` },
        { id: "2023-24-Q6b", label: "(b)", marks: "15",
          topic: "dust-collection", sub: "Cyclone inlet velocity for 90% removal of 10 µm particles with N_t ≥ 2",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A gas-solid cyclone separator is designed for the removal of fine particles from a hot gas stream. The system must be optimized to ensure at least 90% removal of particles with a diameter of 10 µm. The gas stream enters the cyclone tangentially with an average linear velocity V, and the flow induces swirling motion resulting in centrifugal separation. The critical particle diameter $(D_p)_{crit}$ is defined as the particle diameter at which 50% of the particles are removed. The critical particle diameter is calculated as:
$$(D_p)_{crit} = \left(\frac{9\mu D}{4\pi N_t V(\rho - \rho_g)}\right)^{0.5}$$
where the gas dynamic viscosity, μ, is 1.8 × 10⁻⁵ lb/ft.s, and the cyclone diameter, D, is 2.0 feet. The inlet velocity is represented by V, measured in feet per second (ft/s). The particle density, ρ, is 1500 lb/ft³, while the gas density, $\rho_g$, is 0.075 lb/ft³. Finally, $N_t$ denotes the number of effective turns made by the gas within the cyclone separator. The number of turns is velocity-dependent and given by:
$$N_t = \left[0.1079 - 0.00077V + 1.924\times10^{-6}V^2\right]V$$
The cyclone must operate continuously, and re-entrainment must be avoided. Apply the relevant principles and equations to determine the maximum inlet velocity $V_{max}$ that would ensure at least 90% removal of 10 µm particles, while also preventing re-entrainment (i.e. $N_t \ge 2$) [See Figure for Q. 6(b)].

Figure for Q. 6(b) (attached to the paper): percent removal of particles in a cyclone as a function of $D_p/(D_p)_{crit}$.`,
          solution: String.raw`**Given:** $D_p$ = 10 µm, η ≥ 90%; μ = 1.8×10⁻⁵ lb/ft·s; D = 2.0 ft; ρ = 1500 lb/ft³ (as printed); $\rho_g$ = 0.075 lb/ft³; $N_t(V)$ as given.

**Find:** the inlet velocity V that gives 90% removal of 10 µm particles, with $N_t \ge 2$.

**Assumptions:** the printed particle density 1500 lb/ft³ is used. (If it were meant as 1500 kg/m³ = 93.6 lb/ft³, step 4 would require V ≈ 310 ft/s, which no cyclone can use, so the printed value is kept.)

1. **Chart reading:** on the attached curve, 90% removal corresponds to $D_p/(D_p)_{crit} \approx 4.5$ (go up from 90% on the percent-removed axis to the curve and across).

2. **Required critical diameter:**
$$(D_p)_{crit} \le \frac{10}{4.5} = 2.22\ \mu\mathrm{m} = 2.22\times10^{-6}/0.3048 = 7.29\times10^{-6}\ \mathrm{ft}$$

3. **Required product $N_tV$** (square the given equation and rearrange):
$$N_tV = \frac{9\mu D}{4\pi (D_p)_{crit}^2(\rho - \rho_g)} = \frac{9 \times 1.8\times10^{-5} \times 2.0}{4\pi \times (7.29\times10^{-6})^2 \times 1499.9} = 323\ \mathrm{ft/s}$$

4. **Solve for V:** $N_tV = (0.1079 - 0.00077V + 1.924\times10^{-6}V^2)V^2 = 323$.

| V, ft/s | 60 | 70 | 72 |
|---|---|---|---|
| $N_tV$ | 247 | 311 | 323 |

   So **V = 72 ft/s**, with $N_t = (0.1079 - 0.00077 \times 72 + 1.924\times10^{-6} \times 72^2)(72) = 4.49$.

5. **Re-entrainment condition $N_t \ge 2$:** solving $N_t(V) = 2$ gives V = 21.7 ft/s, and $N_t$ rises steadily with V (its derivative has no real root). At 72 ft/s, $N_t$ = 4.5 ≥ 2, satisfied.

6. **Meaning of $V_{max}$:** $(D_p)_{crit} \propto (N_tV)^{-1/2}$, so the cut size falls as V rises; 72 ft/s is the velocity at which 10 µm particles are removed exactly at 90%. Going faster gives no needed gain but raises the pressure drop (∝ V²) and causes re-entrainment of collected dust from the wall and cone (saltation, erosion). About 70–80 ft/s is also the practical upper limit for cyclone inlets. So the design (maximum) inlet velocity is $V_{max} \approx 72$ ft/s.

**Result:** $V_{max} \approx 72$ ft/s (≈ 22 m/s), giving $(D_p)_{crit}$ = 2.2 µm and $N_t$ ≈ 4.5 (> 2).

> If Lapple's equation $\eta = 1/[1 + (D_{pc}/D_p)^2]$ is used instead of the attached curve, 90% corresponds to $D_p/D_{pc} = 3.0$, $D_{pc}$ = 3.33 µm, $N_tV$ = 144 ft/s and V = 42.8 ft/s ($N_t$ = 3.4).`,
          answer: String.raw`Chart: 90% at D_p/D_pc ≈ 4.5 → D_pc = 2.22 µm; N_t V = 9μD/[4πD_pc²(ρ−ρg)] = 323 ft/s → V ≈ 72 ft/s, N_t ≈ 4.5 ≥ 2 (N_t = 2 at 21.7 ft/s). V_max ≈ 72 ft/s.` }
      ] },
    { id: "2023-24-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q7a", label: "(a)", marks: "12",
          topic: "crystallization", sub: "Oslo crystallizer for coarse MAP crystals: supersaturation control",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`A fertilizer manufacturing plant utilizes an Oslo-type crystallizer to produce large, coarse crystals of mono ammonium phosphate (MAP). With the help of a clearly labeled diagram, describe the working principle of the Oslo crystallizer. Explain how crystallization is carried out in this unit, focusing specifically on how supersaturation is developed and controlled during the process. Additionally, discuss the design features of the Oslo crystallizer that promote the growth of large crystals while minimizing the formation of fines.`,
          solution: String.raw`The Oslo (Krystal) crystallizer is a **classified-suspension** (fluidized-bed) crystallizer: supersaturation is generated in one place, where there are no crystals, and released in another, a fluidized bed of growing crystals. Separating the two is what gives large, uniform crystals.

![Oslo evaporative crystallizer: heater, vaporizer, downcomer and classified crystal bed](fig/2023-24-Q7a-sketch.svg)

### Working principle and flow path
1. **Circulation loop:** clear mother liquor is drawn from the upper, crystal-free zone of the suspension vessel. Fresh feed (MAP solution) is added, and a circulating pump sends it through an external **heater**, where it is warmed a few degrees but does not boil (it stays slightly undersaturated, so no scale forms on the tubes).
2. **Vaporizer (flash chamber):** the heated liquor enters a vessel under reduced pressure. Solvent flashes off and the liquor cools to its boiling point at that pressure. The loss of water and the cooling make the liquor **supersaturated**, but only mildly (inside the metastable zone), so few new nuclei form. There are no crystals here, so the supersaturation is not consumed in the vaporizer.
3. **Downcomer:** the supersaturated liquor flows down a central pipe to the bottom of the suspension vessel.
4. **Fluidized, classified bed:** the liquor rises through a bed of crystals. The supersaturation is released by **growth** on the crystals already present (not by new nucleation). Large, heavy crystals stay near the bottom, where the liquor is most supersaturated; small crystals are carried higher. By the time the liquor reaches the top it is close to saturation and returns to the pump.
5. **Product:** crystals that have grown large enough to settle against the up-flow are withdrawn from the bottom as a slurry of coarse, uniform crystals.

(For cooling-type Oslo units the heater is replaced by a cooler and the vaporizer is omitted; the principle is the same.)

### How supersaturation is developed and controlled
- **Generated** by evaporation and adiabatic flash cooling in the vaporizer (evaporative type) or by the external cooler (cooling type).
- **Limited** by the large circulation rate: the heat (or cooling) duty per pass is spread over a large flow, so the temperature change per pass is small (a few °C) and the supersaturation stays within the metastable zone.
- **Released** in the bed, where the large crystal surface area consumes it by growth.
- **Controlled** by the circulation rate, the heater duty (steam rate), the vaporizer pressure (temperature), the feed rate and the crystal content (suspension density) of the bed.

### Design features that give large crystals and few fines
- Supersaturation is created **away from the crystals** (vaporizer) and released **in contact with a large crystal surface**: growth wins over nucleation.
- **Classification by up-flow velocity:** crystals stay in the bed until they are large enough to resist the up-flow, so the product is coarse and uniform.
- **Low supersaturation, inside the metastable zone,** thanks to the high circulation ratio and small ΔT per pass: little primary nucleation.
- **No crystals go through the pump or heater:** clear liquor is circulated, so there is little attrition or secondary nucleation from impeller contact, and no scaling.
- **Fines removal (fines trap / dissolver):** a bleed of liquor carrying small crystals from the top of the bed is heated or diluted to dissolve the fines, so the number of crystals stays controlled.
- **Long residence time** in a large bed, and gentle fluidization rather than mechanical agitation.

For MAP this gives the coarse, free-flowing crystals required for fertilizer handling and storage (no caking, less dust).`,
          answer: String.raw`Clear liquor + feed is pumped through a heater, flashed in a vaporizer (evaporation/cooling makes it mildly supersaturated with no crystals present), sent down a central downcomer and up through a fluidized, classified crystal bed where supersaturation is relieved by growth; coarse crystals are withdrawn at the bottom. Large crystals because supersaturation is generated away from crystals and kept low (high circulation), the bed classifies by size, no crystals pass the pump (low secondary nucleation), and fines are trapped and dissolved.` },
        { id: "2023-24-Q7b", label: "(b)", marks: "8",
          topic: "crystallization", sub: "NaCl crystallization: solvent, time and vessel for large pure crystals",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`A chemical engineering team is optimizing the crystallization process of sodium chloride to produce large, uniform crystals suitable for industrial applications. They conducted several experiments using different solvent systems- pure water, water mixed with benzene, and water mixed with acetone. Additionally, various crystallization times and crystal growth vessel configurations were tested to determine their effects on crystal growth. Analyze which combinations of this factors will give best results in terms of crystal size, uniformity and purity in sodium chloride crystallization.`,
          solution: String.raw`Crystal size depends on keeping the **supersaturation low and steady** so that growth dominates nucleation; uniformity needs a narrow residence-time and size distribution; purity needs slow growth (little occlusion of mother liquor) and a clean solvent.

### Solvent systems
| Solvent | Behaviour with NaCl | Effect |
|---|---|---|
| **Pure water** | Good solvent; solubility about 36 g/100 g water and nearly independent of temperature, so crystals are formed by **slow evaporation** (evaporative crystallization), not by cooling | Supersaturation is controlled precisely by the evaporation rate: large, cubic, uniform, pure crystals. **Best.** |
| Water + benzene | Benzene is immiscible with water and does not dissolve NaCl: two liquid phases, no change in solubility in the aqueous phase | No benefit; benzene droplets can be occluded in the crystals (impurity), it is toxic and flammable. Reject. |
| Water + acetone | Acetone is miscible with water and an anti-solvent for NaCl: adding it lowers the solubility sharply (drowning-out) | Local high supersaturation where acetone mixes in, so many nuclei: fine, non-uniform crystals with entrapped liquor. Gives high yield, but not large crystals; only useful with very slow, controlled acetone addition, or for washing. |

### Crystallization time
- **Longer time at low supersaturation** (slow evaporation, seeded) gives larger crystals: for growth rate G, the dominant size of an MSMPR product is about 3Gτ, proportional to the residence time τ.
- Short times need high supersaturation to give the same yield, so more nucleation, smaller crystals and more inclusions. Very long times give little extra benefit and may cause ripening or agglomeration, so choose the time at which the size target is met.

### Growth-vessel configuration
- **Classified-bed (Oslo) or draft-tube baffle (DTB) crystallizer with fines destruction:** supersaturation is released on a large crystal surface, the product is classified (or fines are removed and redissolved), and crystals are not ground by the pump. This gives the largest, most uniform crystals.
- A simple stirred tank (MSMPR) gives a broad size distribution, and high-speed impellers break crystals (secondary nucleation, fines).
- Seeding with sized NaCl crystals, gentle agitation, and a uniform temperature (no cold walls) improve uniformity.

### Best combination
**Pure water + slow (controlled) evaporation at low, constant supersaturation + long enough residence time with seeding + a classified-suspension (Oslo) or DTB vessel with fines removal and gentle circulation.** This gives large, uniform cubic crystals of high purity. Benzene gives no benefit and contaminates; acetone gives high yield but small crystals unless added very slowly.`,
          answer: String.raw`Best: pure water with slow evaporative crystallization (NaCl solubility hardly changes with T) at low supersaturation, longer seeded residence time, in an Oslo/DTB classified vessel with fines destruction and gentle circulation. Benzene is immiscible (no effect, contamination); acetone is an anti-solvent giving rapid nucleation, fine crystals and occlusions.` },
        { id: "2023-24-Q7c", label: "(c)", marks: "15",
          topic: "mixing", sub: "Six-blade turbine in 70% NaOH: power needed vs 0.11 kW motor",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q7b", "2020-21-Q8a", "2016-17-Q3d"],
          text: String.raw`A flat-blade turbine with six blades is installed centrally in a vertical tank. The tank is 1.08 m in diameter and 1.08 m in height; the turbine is 0.36 m in diameter and is positioned 0.36 m from the bottom of the tank. The turbine blades are 0.045 m wide. The tank is filled with a solution of 70% caustic soda, at 80 °C, which has a viscosity of 19 cP and a density of 1700 kg/m³. The turbine is operated at 100 r/min. The tank is baffled. The motor available develops 0.11 kW. Analyze if the motor is adequate to drive the agitator at a speed of 100 r/min.

Figure for Q. 7(c) (attached to the paper): power number $N_P = Pg_c/\rho n^3D_a^5$ versus $N_{Re} = D_a^2n\rho/\mu$ for six-blade turbines (MSH Fig. 9.12), with shape factors $S_1 = D_a/D_t$, $S_2 = E/D_t$, $S_3 = L/D_a$, $S_4 = W/D_a$, $S_5 = J/D_t$, $S_6 = H/D_t$:

| Curve | S₁ | S₂ | S₃ | S₄ | S₅ | S₆ |
|---|---|---|---|---|---|---|
| A | 0.33 | 0.33 | 0.25 | 0.2 | 0.1 | 1.0 |
| B | 0.33 | 0.33 | 0.25 | 0.125 | 0.1 | 1.0 |
| C | 0.33 | 0.33 | 0.25 | 0.2 | 0.1 | 1.0 |
| D (unbaffled) | 0.33 | 0.33 | 0.25 | 0.25 | – | 1.0 |`,
          solution: String.raw`**Given:** $D_t$ = 1.08 m, H = 1.08 m (tank full), $D_a$ = 0.36 m, E = 0.36 m, W = 0.045 m; μ = 19 cP = 0.019 Pa·s; ρ = 1700 kg/m³; n = 100 r/min = 1.667 r/s; baffled; motor 0.11 kW.

**Find:** shaft power P, and compare with 0.11 kW.

**Assumptions:** standard four baffles of width $J = D_t/10$ ($S_5$ = 0.1); blade length $L = D_a/4$ ($S_3$ = 0.25), as for the standard turbine; Newtonian liquid; SI units, so $g_c$ = 1.

1. **Shape factors:**
$$S_1 = \frac{0.36}{1.08} = 0.33,\quad S_2 = \frac{0.36}{1.08} = 0.33,\quad S_4 = \frac{W}{D_a} = \frac{0.045}{0.36} = 0.125,\quad S_6 = \frac{1.08}{1.08} = 1.0$$
   These match **curve B** (narrow blades, W/D_a = 1/8, four baffles).

2. **Reynolds number:**
$$N_{Re} = \frac{D_a^2 n\rho}{\mu} = \frac{0.36^2 \times 1.667 \times 1700}{0.019} = 1.93\times10^{4}$$
   Turbulent: the baffled curve is flat here, and the Froude number has no effect.

3. **Power number (curve B):** at $N_{Re} = 1.9\times10^4$, $N_P \approx 2.8$ (on the same chart curve A reads about 5.7–5.8, consistent with MSH Example 9.1).

4. **Power:**
$$P = N_P\,\rho\,n^3D_a^5 = 2.8 \times 1700 \times 1.667^3 \times 0.36^5 = 2.8 \times 1700 \times 4.630 \times 6.047\times10^{-3} = 133\ \mathrm{W}$$

5. **Comparison:** P = 0.133 kW > 0.11 kW available, about 21% short, and this is shaft power before motor and gearbox losses (with about 85% drive efficiency the motor must deliver about 0.16 kW).
   - The motor would be just adequate only if $N_P \le 110/(1700 \times 4.630 \times 6.047\times10^{-3}) = 2.31$, below the curve-B value.
   - The highest speed this motor can drive: $n = [110/(2.8 \times 1700 \times 0.36^5)]^{1/3} = 1.56$ r/s = **94 r/min**.

**Result:** the agitator needs about 0.13 kW at the shaft at 100 r/min ($N_{Re}$ = 1.9×10⁴, $N_P$ ≈ 2.8), so the **0.11 kW motor is not adequate**. Use a motor of at least 0.18–0.2 kW (next standard size, about 0.25 kW), or run at no more than about 94 r/min at the shaft (lower allowing for losses).`,
          answer: String.raw`S₄ = 0.125 → curve B; N_Re = 1.93×10⁴; N_P ≈ 2.8; P = N_P ρ n³ D_a⁵ ≈ 133 W > 110 W → the 0.11 kW motor is inadequate (≈21% short before drive losses; max ≈ 94 r/min). Fit ≥ 0.2 kW (0.25 kW standard).` }
      ] },
    { id: "2023-24-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2023-24-Q8a", label: "(a)", marks: "13",
          topic: "solids-handling", sub: "Bucket elevator for lifting phosphate rock to a crusher",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`In a processing plant, phosphate rock needs to be transported from the ground level to the top of a crusher unit. Identify one suitable type of solids-handling elevator that can be used for this vertical transfer. Describe its working principle and mechanism.`,
          solution: String.raw`**Selection: bucket elevator.** It lifts bulk solids vertically (or steeply) in a small floor area. It suits lumpy, abrasive, free-flowing material such as phosphate rock and is the standard way to feed a crusher or bin above ground level. Belt conveyors are limited to about 15–20° of incline, and screw conveyors and pneumatic conveyors wear quickly with abrasive rock.

![Centrifugal-discharge bucket elevator: boot, buckets on a belt or chain, head pulley and discharge chute](fig/2023-24-Q8a-sketch.svg)

### Construction (mechanism)
- **Endless belt or chain** carrying buckets at fixed spacing, running over a driven **head pulley/sprocket** at the top and a **boot pulley** at the bottom.
- **Boot:** the feed inlet and the pit where buckets fill; it has the **take-up** (screw or gravity) that keeps the belt or chain tight.
- **Head:** the drive (motor, gear reducer, **backstop** to prevent the loaded leg running back) and the **discharge chute** to the crusher.
- **Casing:** enclosed steel legs (single- or double-leg) that keep dust in and support the run; inspection doors.
- For abrasive phosphate rock: steel or wear-resistant buckets bolted to a chain (or a steel-cord belt), and replaceable liners in the boot and chute.

### Working principle
1. Rock is fed into the boot through the inlet chute. In the **centrifugal-discharge** type (spaced buckets, about 1.2–1.6 m/s) the buckets dig the material from the boot and are also filled by the feed stream.
2. Loaded buckets rise on the up-going leg; empty buckets return down the other leg.
3. At the head, the buckets turn over the pulley. When the centrifugal force on the contents exceeds the radial component of gravity, the material is **thrown out** of the bucket in a trajectory into the discharge chute. The condition at the top of the pulley is
$$\frac{v^2}{r} \ge g \quad\Rightarrow\quad v \ge \sqrt{gr}$$
   For example, an effective radius of 0.3 m needs v ≥ 1.7 m/s at the bucket's centre of mass.
4. **Capacity:**
$$\dot m = \frac{V_b\,\phi\,\rho_b\,v}{s}$$
   ($V_b$ bucket volume, φ fill fraction ≈ 0.6–0.8, $\rho_b$ bulk density, v belt speed, s bucket spacing). The power is roughly the lift work $\dot m gH$ plus boot digging and friction losses.

### Alternative for large lumps
For large, heavy or friable lumps a **continuous-bucket** elevator is used: closely spaced buckets at low speed (about 0.5–0.8 m/s). The material slides out by gravity over the back of the preceding bucket, which acts as a chute, with less impact, wear and breakage. A **positive-discharge** type (buckets inverted by snub sprockets) handles sticky material.`,
          answer: String.raw`Bucket elevator: an endless belt/chain with buckets over a driven head pulley and a boot pulley with take-up, in an enclosed casing. Buckets dig/fill in the boot, rise, and at the head discharge by centrifugal force (v²/r ≥ g, ≈1.2–1.6 m/s) into the chute to the crusher; continuous-bucket (slow, gravity discharge) for large abrasive lumps. Capacity = V_b φ ρ_b v/s.` },
        { id: "2023-24-Q8b", label: "(b)", marks: "7",
          topic: "size-reduction", sub: "Blake jaw crusher energy by Rittinger's and Kick's laws",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A material is crushed in a Blake jaw crusher such that the average size of particle is reduced from 50 mm to 10 mm with the consumption of energy of 13.0 kW/(kg/s). Determine the consumption of energy needed to crush the same material of average size 75 mm to an average size of 25 mm: (i) assuming Ritting's law applies (ii) assuming Kick's law applies. Explain which of these results would be regarded as being more reliable and why.

Ritting's Law: $E = K_Rf_c\left(\dfrac{1}{L_2} - \dfrac{1}{L_1}\right)$

Kick's Law: $E = K_Kf_c\log\left(\dfrac{L_1}{L_2}\right)$`,
          solution: String.raw`**Given:** 50 → 10 mm needs 13.0 kW/(kg/s), i.e. 13.0 kJ/kg; new duty 75 → 25 mm; same material ($f_c$ the same).

**Find:** E for 75 → 25 mm by Rittinger's law and by Kick's law.

1. **Rittinger constant** from the first duty:
$$K_Rf_c = \frac{13.0}{\frac{1}{10} - \frac{1}{50}} = \frac{13.0}{0.08} = 162.5\ \mathrm{kW\,mm/(kg/s)}$$

2. **Rittinger, 75 → 25 mm:**
$$E = 162.5\left(\frac{1}{25} - \frac{1}{75}\right) = 162.5 \times 0.02667 = 4.33\ \mathrm{kW/(kg/s)}$$

3. **Kick's law**, where the energy depends only on the reduction ratio. The ratio of the two duties removes the constant (and the base of the logarithm):
$$\frac{E_2}{E_1} = \frac{\log(75/25)}{\log(50/10)} = \frac{\log 3}{\log 5} = \frac{0.4771}{0.6990} = 0.6826$$
$$E_2 = 13.0 \times 0.6826 = 8.87\ \mathrm{kW/(kg/s)}$$
   (With natural logarithms, $K_Kf_c = 13.0/\ln 5 = 8.08$ kW/(kg/s) and $E = 8.08\ln 3 = 8.87$ kW/(kg/s), the same.)

4. **Which is more reliable:** **Kick's law (8.87 kW/(kg/s)).** A Blake jaw crusher does coarse crushing (feed 50–75 mm, product 10–25 mm). In coarse crushing the energy goes mainly into elastic and plastic deformation of the lumps up to fracture, which is proportional to the volume, so equal reduction *ratios* need equal energy (Kick). Rittinger's law (energy proportional to new surface created) holds for fine grinding, where the new surface is large; applied to coarse crushing it badly underestimates the energy. Bond's law lies between the two.

**Result:** (i) Rittinger: 4.33 kW/(kg/s); (ii) Kick: 8.87 kW/(kg/s); the Kick value is the more reliable for this coarse-crushing duty (Coulson & Richardson Vol. 2, Example 2.1).`,
          answer: String.raw`K_R f_c = 162.5 kW·mm/(kg/s): Rittinger E = 4.33 kW/(kg/s); Kick E = 13.0 log3/log5 = 8.87 kW/(kg/s). Kick's law is more reliable: a jaw crusher does coarse crushing, where energy depends on reduction ratio, not on new surface.` },
        { id: "2023-24-Q8c", label: "(c)", marks: "9",
          topic: "size-reduction", sub: "Ball mill critical speed N_c = (1/2π)√(g/(R − r)) derivation",
          type: "derivation", syllabus: "in", repeats: ["2018-19-Q4a", "2012-13-Q3c"],
          text: String.raw`The following expression is commonly associated with the operation of ball mills:
$$N_c = \frac{1}{2\pi}\times\sqrt{\frac{g}{R - r}}$$
What does $N_c$ represent in the context of ball mill operation? Derive this expression step by step, clearly explaining the meaning of each symbol involved.`,
          solution: String.raw`**Meaning:** $N_c$ is the **critical speed** of the mill: the rotational speed at which a ball just stays in contact with the shell all the way round (it is carried over the top instead of falling). Above $N_c$ the charge **centrifuges**, there is no tumbling, impact or attrition, and grinding stops. Mills are therefore run below it, typically at 65–80% of $N_c$ (cascading/cataracting).

**Symbols:** $N_c$ = critical speed, rev/s; g = acceleration due to gravity, 9.81 m/s²; R = inside radius of the mill shell, m; r = radius of the ball, m; R − r = radius of the circle followed by the ball's centre; ω = angular velocity, rad/s; m = mass of the ball; α = angle between the radius to the ball and the vertical.

![Forces on a ball in the mill: weight and centrifugal force](fig/2023-24-Q8c-sketch.svg)

**Assumptions:** the ball rotates with the shell without slipping until it leaves the wall; the ball is treated as a point mass at its centre; the other balls are ignored.

1. **Path of the ball's centre:** a ball touching the shell has its centre at distance (R − r) from the mill axis O, and moves on a circle of radius (R − r) with angular velocity ω = 2πN.

2. **Forces at a position α from the top vertical:**
   - centrifugal force (in the rotating frame), radially outward: $F_c = m\omega^2(R - r)$;
   - weight mg, vertically down, whose radial (inward) component is $mg\cos\alpha$.

3. **Condition for staying on the wall:** the ball stays pressed against the shell as long as the outward centrifugal force is at least the inward component of the weight:
$$m\omega^2(R - r) \ge mg\cos\alpha$$
   It leaves the shell where $\cos\alpha = \omega^2(R - r)/g$.

4. **Critical condition:** the most demanding point is the top of the mill, α = 0, cos α = 1. At the critical speed the ball is just held there:
$$m\omega_c^2(R - r) = mg \quad\Rightarrow\quad \omega_c = \sqrt{\frac{g}{R - r}}$$

5. **Convert to revolutions:** $\omega_c = 2\pi N_c$, so
$$\boxed{N_c = \frac{1}{2\pi}\sqrt{\frac{g}{R - r}}}\ \ \mathrm{rev/s}$$

6. **Practical forms:** in r/min, $N_c = \frac{60}{2\pi}\sqrt{\frac{9.81}{R - r}} = \frac{29.9}{\sqrt{R - r}} = \frac{42.3}{\sqrt{D - d}}$ (D, d = mill and ball diameters in m). Example: a 1.2 m mill with 80 mm balls: $N_c = 42.3/\sqrt{1.12} = 40$ r/min, so operate at about 26–32 r/min.`,
          answer: String.raw`N_c is the critical speed at which the balls just centrifuge (no grinding). Ball centre moves on radius R − r; it stays on the wall while mω²(R − r) ≥ mg cos α; at the top (α = 0) the critical condition ω_c²(R − r) = g gives N_c = ω_c/2π = (1/2π)√(g/(R − r)) rev/s (= 42.3/√(D − d) r/min). Operate at 65–80% of N_c.` },
        { id: "2023-24-Q8d", label: "(d)", marks: "6",
          topic: "size-reduction", sub: "Wet slippery limestone in a jaw crusher: nip failure and packing",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`While crushing wet limestone, which has a high moisture content and a naturally slippery texture, using a jaw crusher, it was observed that the crusher was not operating effectively. Explain the phenomenon responsible for this issue, and describe how it affects the crushing mechanism of the jaw crusher.`,
          solution: String.raw`### Phenomenon: loss of nip (slippage), plus packing/choking of wet fines
A jaw crusher works by **nipping** a lump between the fixed and the moving (swing) jaw and squeezing it until it breaks. A lump is held only if friction can resist the upward force produced by the inclined jaw faces. With a nip angle θ between the jaws (each face exerting a normal force N and friction μN), the lump is gripped only when
$$\mu \ge \tan\frac{\theta}{2}$$
i.e. the angle of nip must not exceed twice the angle of friction. Typical nip angles are about 20–25°, needing μ ≥ about 0.18–0.22.

**Effect of wet, slippery limestone:**
1. Water and the clayey, slippery surface lower the coefficient of friction between rock and jaw plates. When μ < tan(θ/2) the lump is not gripped; each closing stroke squeezes it **upward** (the lump "rides" or is ejected) instead of breaking it. Energy goes into rubbing and wear, the throughput falls, and large lumps bounce in the crushing chamber.
2. The wet fines and clay form a **plastic, sticky mass** that **packs** in the lower crushing zone and the discharge opening (choke packing). The moving jaw then compresses a cushion of wet material instead of individual lumps, so the effective stroke is lost and the product becomes coarser. The pressure on the packed material can also overload the toggle and bearings (toggle failure or tripping).
3. Material sticks to the jaw plates, smoothing the corrugations that normally help the grip.

### Remedies
- Scalp out the wet fines and clay before the crusher (vibrating grizzly) and wash or drain the feed.
- Reduce the nip angle (adjust the setting and throw, or use longer or steeper jaws) and use deeply corrugated or toothed jaw plates for better grip.
- Feed evenly (choke feeding of a controlled rate, not overloading).
- For persistently wet, sticky limestone use a machine that does not depend on nip: an impact crusher or hammer mill (if the material is not too wet), or a toothed roll crusher or sizer, which handle sticky feed better.`,
          answer: String.raw`Wet, slippery limestone lowers the rock–jaw friction below the nip condition μ ≥ tan(θ/2), so lumps slip and are squeezed upward instead of being broken; wet fines pack the discharge zone (choking), cushioning the stroke and overloading the toggle. Remedies: scalp/wash fines, smaller nip angle, corrugated jaws, controlled feed, or use an impact/toothed-roll crusher.` }
      ] }
  ]
});
