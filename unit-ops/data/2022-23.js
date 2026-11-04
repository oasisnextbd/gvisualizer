QB.paper({
  year: "2022-23", date: "01/06/2024", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engineering Examinations 2022-2023. Section A: answer any THREE of Q1–Q4. Section B: Q5 is compulsory (45 marks) + any TWO of Q6–Q8. Separate scripts for each section. Attached to the paper: saturated-steam table (Keenan et al., °F), Dühring lines and enthalpy–concentration chart for NaOH–H₂O (Q1), Na₂SO₄ solubility curve and Na₂SO₄–H₂O enthalpy–concentration chart (Q2b), humidity chart and specific heats of gases (Q3a), polymerization-reactor flowsheet (Q4c, to be attached to the script), equations for the three-phase separator (Q5b), power-number curves (Q7b) and the Sylvan chart (Q6a).`,
  questions: [
    { id: "2022-23-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q1a", label: "(a)", marks: "12",
          topic: "evaporation", sub: "Entrainment separators and scale removal in evaporators",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Briefly discuss the Entrainment Separator and Methods of Scale Removal related to the operation and maintenance of evaporator.`,
          solution: String.raw`### Entrainment separators

**Why they are needed.** Vigorous boiling bursts bubbles at the liquid surface and throws droplets of liquor into the vapor (entrainment); foaming liquors (milk, organic solutions, black liquor) carry even more. Entrained liquor causes:

- loss of valuable product (lower yield);
- contamination of the condensate and of the condenser cooling water (effluent load);
- fouling, scaling and corrosion of the heating surface of the next effect, where the vapor is used as heating steam;
- carry-over of solids into the barometric condenser or vacuum ejector.

**How they work.** Droplets are removed from the vapor by three mechanisms, often combined in the vapor head:

| Type | Mechanism | Notes |
|---|---|---|
| Large vapor head / disengaging space | gravity settling | vapor velocity kept low; height above liquid ≈ 1–2 body diameters |
| Baffles, deflector plates, umbrella (hat) baffles | impingement + change of direction | simple, low ΔP, catch coarse drops |
| Wire-mesh pad (demister) | impingement on fine wires; drops coalesce and drain | removes drops down to ≈ 5–10 µm; design velocity $u = K\sqrt{(\rho_L-\rho_V)/\rho_V}$ with $K \approx 0.1$ m/s (0.35 ft/s) |
| Cyclone / tangential-inlet separator (internal or external) | centrifugal force | used with forced-circulation and long-tube vertical evaporators, where the vapor–liquid mixture leaves the tubes at high velocity |

The separated liquid is drained back to the evaporator body. Foam is controlled additionally by antifoam agents, a lower liquid level and steam jets or mechanical foam breakers.

![Vapor heads with entrainment separators: impingement baffle, wire-mesh demister pad and external cyclone separator](fig/2022-23-Q1a-sketch.svg)

### Scale formation and removal

Salts with inverse solubility (CaSO₄, CaCO₃, Na₂SO₄), silica and burnt organics deposit on the heating surface. A thin scale lowers U drastically. For scale building up at a constant rate the course notes give

$$\frac{1}{U^2} = \frac{1}{U_0^2} + \beta\theta$$

($U_0$ = clean coefficient, θ = time since cleaning, β = constant for the service). The evaporator capacity therefore falls with time, and it must be shut down and cleaned periodically. Integrating $dQ/d\theta = UA\,\Delta T$ gives the heat transferred in a cycle, and maximising the average rate including the cleaning time $\theta_c$ gives the **optimum boiling time** $\theta_{opt} = \theta_c + \frac{2}{U_0}\sqrt{\theta_c/\beta}$ (MSH ch. 16).

**Methods of scale removal**

1. **Boiling out the evaporator:** boiling water (or the dilute liquor) through the unit dissolves soft, soluble scale.
2. **Chemical cleaning:** boiling out with dilute acid (inhibited HCl, sulfamic acid, for carbonate scale) or dilute alkali (NaOH/Na₂CO₃ for sulfate and organic deposits, which converts CaSO₄ to the acid-soluble carbonate); chelating agents (EDTA).
3. **Mechanical cleaning:** drilling or reaming out the tubes with a scale-removing tool (turbine-driven cutters), brushing, high-pressure water jetting (hydroblasting). Horizontal-tube and short-tube units are designed with removable heads for this.
4. **Thermal shock:** for curved-tube (bent-tube) evaporators, cold water flushing after heating cracks off brittle scale as the tubes flex.

**Prevention / reduction:** high circulation velocity (forced circulation) with boiling suppressed in the tubes by hydrostatic head, seeding the liquor with crystals so salts deposit on the seeds instead of the wall, pH control and antiscalants, softening of the feed, low wall superheat (low ΔT per effect).`,
          answer: String.raw`Entrainment separators (vapor-head disengaging space, baffles, wire-mesh demisters, cyclones) remove liquor droplets from the vapor to stop product loss and fouling of the next effect/condenser. Scale (1/U² = 1/U₀² + βθ) is removed by boiling out with water or dilute acid/alkali, drilling/reaming the tubes, jetting, and prevented by high circulation velocity, seeding and antiscalants.` },
        { id: "2022-23-Q1b", label: "(b)", marks: "05",
          topic: "evaporation", sub: "Heat flux per effect is 1/n of single-effect flux",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive that: "Heat Flux in each effect of evaporator of a multiple effect evaporator ∝ $\frac{1}{n}$ Heat Flux of a single effect evaporator".`,
          solution: String.raw`**Assumptions:** n effects of equal area A (usual practice, $A_1 = A_2 = \dots = A_n = A$) and roughly equal overall coefficients U; the same steam temperature $T_s$ and the same last-effect (condenser) temperature $T_c$ as the single effect; boiling-point elevation neglected; each effect transfers about the same heat ($q_1 \approx q_2 \approx \dots \approx q_n = q$, since the vapor from one effect condenses in the next).

1. **Single effect.** All the available temperature drop is used in one body:
$$\Delta T = T_s - T_c,\qquad \left(\frac{q}{A}\right)_{single} = U\,\Delta T$$

2. **n effects.** The same overall drop is shared between the effects in series:
$$\Delta T_1 + \Delta T_2 + \dots + \Delta T_n = T_s - T_c = \Delta T$$

3. **Equal heat loads with equal U and A** require equal temperature drops:
$$q = UA\,\Delta T_1 = UA\,\Delta T_2 = \dots \Rightarrow \Delta T_i = \frac{\Delta T}{n}$$

4. **Heat flux in effect i:**
$$\left(\frac{q}{A}\right)_i = U\,\Delta T_i = \frac{U\,\Delta T}{n} = \frac{1}{n}\left(\frac{q}{A}\right)_{single}$$

So the heat flux in each effect is 1/n of the single-effect flux.

**Consequences:** the total heat transferred is $\sum UA\,\Delta T_i = UA\,\Delta T$, the same as one effect of area A, so n effects (n times the area) have about the **same capacity** as one effect; their benefit is **economy** (≈ n lb of water evaporated per lb of steam). With boiling-point elevation the available drop is $\Delta T - \sum BPE$, so the flux per effect is even lower than 1/n.`,
          answer: String.raw`With equal A and U and the same overall ΔT = T_s − T_c shared by n effects, ΔT_i = ΔT/n, so (q/A)_i = UΔT/n = (1/n)(q/A)_single; capacity stays about that of one effect, economy rises ≈ n times.` },
        { id: "2022-23-Q1c", label: "(c)", marks: "07",
          topic: "evaporation", sub: "Strategy to find the optimum number of effects",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`In the chemical industry you have been assigned to determine the optimum number of effects. Explain your strategy. What are the principle results desired?`,
          solution: String.raw`**Strategy (economic balance).** Adding effects saves steam but adds heating surface. For a fixed duty (feed rate, feed and product concentrations, steam pressure and condenser vacuum):

1. Fix the design basis: feed rate, concentrations, feed temperature, steam pressure, last-effect pressure, the liquor's BPE (Dühring lines) and enthalpies, U for each effect, the feed arrangement (forward, backward, mixed) and equal areas per effect.
2. For n = 1, 2, 3, ... solve the material and enthalpy balances and rate equations (trial-and-error method of Badger–McCabe: assume ΔT's, compute the evaporation in each effect, compute the areas, readjust the ΔT's until the areas are equal).
3. For each n compute the **annual cost**:
   - steam cost ∝ steam consumption ≈ (water evaporated)/(economy) ≈ falls like 1/n;
   - fixed charges (depreciation, interest, maintenance) ∝ installed cost, which rises about linearly with n (n bodies, each of about the single-effect area);
   - plus condenser water, pumping, labour (labour rises with n, condenser water falls with n).
4. Plot the costs against n and pick the n at the **minimum total annual cost**. Check constraints: the total available ΔT minus ΣBPE must leave a useful ΔT per effect (typically ≥ 10–15°F), heat sensitivity, scaling, and the maximum economic number (usually 3–6 effects; more for desalination with low BPE).

![Annual cost per unit of water evaporated vs number of effects: steam cost falls ~1/n, fixed charges rise ~n, the total has a minimum](fig/2022-23-Q1c-sol.svg)

**Principal results desired** from the calculation for each n:

- steam consumption (lb/h) and **steam economy** (lb evaporated per lb steam);
- **heating surface** of each effect and the total area (and so the capital cost);
- temperatures and pressures in each effect, ΔT and BPE per effect;
- amount evaporated in each effect, concentration and flow of liquor leaving each effect;
- condenser load (vapor to the condenser, cooling-water requirement);
- capacity, and the resulting annual operating + fixed cost, giving the optimum n.`,
          answer: String.raw`Solve the balances (Badger–McCabe trial method, equal areas) for n = 1, 2, 3…; total annual cost = steam cost (∝ 1/n) + fixed charges (∝ n) + water/labour; choose n at the minimum, subject to ΔT − ΣBPE constraints. Results wanted: steam consumption and economy, area per effect and total area, T, P, evaporation in each effect, condenser load, total cost.` },
        { id: "2022-23-Q1d", label: "(d)", marks: "11",
          topic: "evaporation", sub: "Single-effect NaOH evaporator 10% to 50%: heating area",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine the heating area required for the production of 10,000 lb/h of 50% NaOH solution from a 10% NaOH feed entering at 100°F. Evaporation is to be carried out in a single body standard evaporator for which an overall heat transfer coefficient of 500 Btu/h.ft².°F is expected. Steam is available saturated at 50 psig, and the evaporator can be operated at 10 psi vacuum relative to barometric pressure of 14.7 psia.

Figures for Q1 (attached to the paper): Dühring lines for the NaOH–H₂O system (Foust Fig. 19.11), enthalpy–concentration chart for NaOH–H₂O, and the saturated-steam table. Rows of the steam table used:

| T, °F | P, psia | $H_L$, Btu/lb | λ, Btu/lb | $H_V$, Btu/lb |
|---|---|---|---|---|
| 150 | 3.722 | 117.96 | 1008.1 | 1126.1 |
| 160 | 4.745 | 127.96 | 1002.2 | 1130.1 |
| 290 | 57.53 | 259.44 | 917.8 | 1177.2 |
| 300 | 66.98 | 269.73 | 910.4 | 1180.2 |`,
          solution: String.raw`This is Foust Example 19.1 (worked in the evaporator slides).

**Given:** product L = 10,000 lb/h at $x_L$ = 0.50; feed $x_F$ = 0.10 at 100°F; U = 500 Btu/h·ft²·°F; steam 50 psig = 64.7 psia; vapor space 14.7 − 10 = 4.7 psia.

**Find:** heating area A (and steam rate).

**Assumptions:** no heat losses; no boiling-point rise from hydrostatic head; condensate leaves as saturated liquid.

1. **Steam side (steam table):** interpolating between 290°F (57.53 psia) and 300°F (66.98 psia) at 64.7 psia:
$$T_s = 290 + 10\,\frac{64.7-57.53}{66.98-57.53} = 297.6^\circ\mathrm{F},\qquad \lambda_s = 917.8 - 0.759(7.4) = 912\ \mathrm{Btu/lb}$$

2. **Boiling point of water at 4.7 psia** (between 150°F, 3.722 psia and 160°F, 4.745 psia): $T_w = 159.6 \approx 160^\circ$F.

3. **Boiling point of the 50% liquor (Dühring chart):** enter the abscissa at a water boiling point of 160°F, go up to the 50% NaOH line and read the ordinate: $T_L \approx 233^\circ$F. BPR = 233 − 160 = 73°F.

4. **Material balances:**
$$F = \frac{L x_L}{x_F} = \frac{10{,}000(0.50)}{0.10} = 50{,}000\ \mathrm{lb/h},\qquad V = F - L = 40{,}000\ \mathrm{lb/h}$$

5. **Enthalpies:**
   - feed, 10% NaOH at 100°F (enthalpy–concentration chart): $h_F \approx 60$ Btu/lb;
   - thick liquor, 50% at 233°F (chart): $h_L \approx 245$ Btu/lb;
   - vapor: superheated steam at 4.7 psia and 233°F (73°F of superheat): $H_V \approx 1130 + 0.46(73) \approx 1160$ Btu/lb.

6. **Enthalpy balance on the evaporator:**
$$q = V H_V + L h_L - F h_F = 40{,}000(1160) + 10{,}000(245) - 50{,}000(60)$$
$$q = 46.40\times10^6 + 2.45\times10^6 - 3.00\times10^6 = 45.85\times10^6\ \mathrm{Btu/h}$$

7. **Steam consumption:**
$$m_s = \frac{q}{\lambda_s} = \frac{45.85\times10^6}{912} = 50{,}300\ \mathrm{lb/h}$$
(Foust uses λ = 920 Btu/lb and gets 49,840 lb/h; the area below does not depend on λ.) Economy = 40,000/50,300 = 0.80.

8. **Heating area:** ΔT = 297 − 233 = 64°F,
$$A = \frac{q}{U\,\Delta T} = \frac{45.85\times10^6}{500(64)} = 1433\ \mathrm{ft^2}$$

**Result:** A ≈ 1430 ft² (with ΔT = 297.6 − 233 = 64.6°F, A = 1420 ft²); steam ≈ 50,000 lb/h, evaporation 40,000 lb/h, BPR 73°F.`,
          answer: String.raw`F = 50,000 lb/h, V = 40,000 lb/h; T_w = 160°F, T_L = 233°F (Dühring), q = 45.85×10⁶ Btu/h, steam ≈ 50,300 lb/h (λ = 912), ΔT = 64°F → A ≈ 1430 ft².` }
      ] },
    { id: "2022-23-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q2a", label: "(a)", marks: "6×2=12",
          topic: "ejectors", sub: "Ejector: excess steam pressure and superheated motive steam",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain the following cases:

(i) In a fixed capacity ejector, increase in steam pressure does not increase vapor handling capacity

(ii) Effect of superheated steam in Ejector`,
          solution: String.raw`**(i) Steam pressure above design in a fixed-capacity ejector**

- In a fixed-capacity ejector the nozzle throat and the diffuser throat are proportioned together for one design point (motive pressure, suction pressure, load, discharge pressure). The motive steam pressure is specified as the *lowest* expected pressure at the nozzle (Ludwig: minimum line pressure − 10 psi).
- The nozzle is choked (critical flow), so the motive steam rate rises **in direct proportion to the absolute steam pressure**: $\dot m_s \propto P_s A_{throat}/\sqrt{T}$.
- The diffuser throat has a fixed area and can pass only a fixed volume of mixture at the throat conditions. The extra motive steam takes up this throat capacity, so **less** suction gas can be entrained; the suction capacity stays the same or actually falls (Ludwig Fig. 6-12, "effects of excess steam pressure on ejector capacity"). Steam consumption per lb of load goes up.
- The extra momentum is wasted in shocks; only the discharge-pressure margin (stability against backpressure) improves slightly.
- To get more capacity a larger nozzle *and* diffuser (a different ejector) or a "throttling-type" ejector, which has a family of curves with steam pressure, is needed.

**(ii) Superheated motive steam**

- **Wet steam** is harmful: water drops do not expand in the nozzle, so they carry no kinetic energy, erode the nozzle and diffuser and reduce performance. Steam should be dry, and a **few degrees of superheat (5–15°F)** are recommended to make sure it stays dry; steam separators/traps are fitted ahead of the nozzle.
- **High superheat** increases the available enthalpy drop (energy per lb), but it also lowers the steam density. Through a fixed choked nozzle the mass flow falls ($\propto P/\sqrt{T}$), so the gain in energy is offset by the loss in mass flow: a high superheat gives **no advantage**.
- If superheated steam must be used, the ejector has to be designed for it (larger nozzle throat); a unit designed for saturated steam loses capacity when fed with strongly superheated steam.`,
          answer: String.raw`(i) The choked nozzle passes steam ∝ P_s, but the fixed diffuser throat is sized for the design mixture, so extra steam crowds out suction gas: capacity stays the same or drops. (ii) 5–15°F superheat is useful (dry steam, no erosion); high superheat gives no advantage since the higher available energy is offset by lower steam density/mass flow; the nozzle must be designed for it.` },
        { id: "2022-23-Q2b", label: "(b)", marks: "12",
          topic: "crystallization", sub: "Vacuum crystallizer Na₂SO₄: magma composition and decahydrate recovery",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A 20 weight percent solution of Na₂SO₄ at 200°F is pumped continuously to a vacuum crystallizer from which the product magma is pumped at 60°F. Calculate the composition of this magma, and what percentage of Na₂SO₄ in the feed is recovered as Na₂SO₄·10H₂O crystal after this magma is centrifuged?

Figure for Q2(b) (attached to the paper): solubility of Na₂SO₄ (weight percent vs temperature, °F) and the enthalpy–concentration diagram for the Na₂SO₄–H₂O system at 1 atm (bases: H = 0 for liquid water at 32°F and for solid Na₂SO₄ at 32°F). The paper also gives

$$C = \frac{\left[F(1-x_F') - V\right]X' - F x_F'}{\left(\frac{M_h-M_a}{M_h}\right)X' - \frac{M_a}{M_h}}$$

(symbols have their usual meaning).`,
          solution: String.raw`**Given:** feed F = 100 lb (basis), $x_F$ = 0.20 Na₂SO₄ at 200°F; adiabatic vacuum crystallizer, magma and vapor at 60°F.

**Find:** magma composition; % of the Na₂SO₄ recovered as Na₂SO₄·10H₂O.

**Assumptions:** adiabatic operation; vapor leaves saturated at 60°F (the crystallizer pressure is the vapor pressure of the mother liquor ≈ that of water at 60°F, 0.256 psia; BPE neglected); mother liquor saturated at 60°F; stable solid phase below 90.5°F is the decahydrate.

1. **Data from the charts and tables:**
   - $M_a$ = 142.04 (Na₂SO₄), $M_h$ = 322.2 (Na₂SO₄·10H₂O): $a = M_a/M_h = 0.441$.
   - Solubility at 60°F (decahydrate curve): $x' = 0.122$ (12.2 wt%), i.e. $X' = 0.122/0.878 = 0.139$ lb Na₂SO₄/lb water.
   - Enthalpy–concentration chart: feed, 20% at 200°F: $h_F \approx 136$ Btu/lb; saturated solution at 60°F: $h_{ML} \approx 21$ Btu/lb; Na₂SO₄·10H₂O at 60°F: $h_C \approx -82$ Btu/lb (end of the 60°F isotherm at 44.1%).
   - Saturated water vapor at 60°F (steam table): $H_V$ = 1087.7 Btu/lb.

2. **Balances** (V = vapor, C = crystals, M = mother liquor, lb per 100 lb feed):
$$\text{Total: } V + C + M = 100$$
$$\text{Na}_2\text{SO}_4\text{: } 0.441C + 0.122M = 20$$
$$\text{Enthalpy: } 1087.7V - 82C + 21M = 100(136) = 13{,}600$$

3. **Solve** the three linear equations:
$$V = 13.6\ \mathrm{lb},\qquad C = 29.7\ \mathrm{lb},\qquad M = 56.7\ \mathrm{lb}$$

   Check with the formula on the paper ($x_F'$ = 0.20, $X'$ = 0.139):
$$C = \frac{[100(0.80) - 13.6](0.139) - 100(0.20)}{(0.559)(0.139) - 0.441} = \frac{9.23 - 20}{-0.363} = 29.7\ \mathrm{lb}$$

4. **Magma** (crystals + mother liquor) = 29.7 + 56.7 = 86.4 lb per 100 lb feed:
   - crystals Na₂SO₄·10H₂O: 29.7/86.4 = **34.4 wt%**;
   - mother liquor (12.2% Na₂SO₄): 56.7/86.4 = **65.6 wt%**;
   - overall: 20/86.4 = **23.2 wt% Na₂SO₄** (76.8% water). On the enthalpy chart this point lies on the 60°F isotherm in the solution + Na₂SO₄·10H₂O two-phase region; the lever rule gives the same split.

5. **Recovery** after centrifuging (crystals separated; adhering liquor neglected):
$$\frac{0.441(29.7)}{20} = \frac{13.1}{20} = 0.654$$

**Result:** magma = 34.4% Na₂SO₄·10H₂O crystals + 65.6% saturated liquor (12.2% Na₂SO₄), 23.2% Na₂SO₄ overall; 13.6 lb water flashed per 100 lb feed; **≈ 65% of the Na₂SO₄ is recovered** as the decahydrate.`,
          answer: String.raw`Per 100 lb feed: V = 13.6 lb, crystals 29.7 lb, liquor 56.7 lb (12.2%). Magma 86.4 lb: 34.4% Na₂SO₄·10H₂O, 65.6% mother liquor (23.2% Na₂SO₄ overall); recovery ≈ 65%.` },
        { id: "2022-23-Q2c", label: "(c)", marks: "11",
          topic: "crystallization", sub: "Factors to consider in crystallizer design",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`List the factors that needs to be considered to design a Crystallizer.`,
          solution: String.raw`**1. Phase equilibrium (solubility data)**
- Shape of the solubility curve: steep (KNO₃, copperas) → cooling crystallizer; flat (NaCl) → evaporative crystallizer; intermediate → vacuum (adiabatic flash) crystallizer.
- Hydrates and transition temperatures (e.g. Na₂SO₄·10H₂O below 90.5°F, anhydrous above): fixes the operating temperature and the solid formed.
- Yield from material balance (and enthalpy balance for vacuum units).

**2. Supersaturation and kinetics**
- How supersaturation is generated (cooling, evaporation, flashing, salting out, reaction) and its level; metastable zone width.
- Nucleation rate (primary, secondary/contact nucleation from agitator) and growth rate G; ΔL law; MSMPR relations (dominant size $L_D = 3G\bar t$).

**3. Product specification**
- Crystal size distribution (CSD), mean size and spread, crystal habit/shape, purity, caking tendency, bulk density, filterability.
- Need for fines destruction, classified product removal, seeding.

**4. Heat effects and energy**
- Heat of crystallization, sensible heat to be removed, cooling area or vapor load, condenser/vacuum system (ejectors), multiple-effect evaporation for energy economy.

**5. Hydrodynamics and equipment**
- Magma density (suspension density), residence time, circulation rate and agitation (keep crystals suspended without excessive attrition or secondary nucleation).
- Type: batch vs continuous; tank, scraped-surface (Swenson–Walker), draft-tube-baffle, Oslo (fluidised bed), forced-circulation, vacuum.
- Encrustation/scaling on cooling surfaces (limit ΔT at the wall), foaming, boiling-point elevation.

**6. Operating and practical factors**
- Capacity and turndown, impurities and their effect on growth and habit, corrosion and materials of construction, ease of cleaning, control (temperature, level, density), downstream solid–liquid separation (centrifuge, filter, dryer) and mother-liquor recycle/purge, capital and operating cost, safety.`,
          answer: String.raw`Solubility curve and hydrates (choice of cooling/evaporative/vacuum), yield, supersaturation method and level, nucleation and growth kinetics, required CSD/habit/purity, residence time and magma density, heat of crystallization and heat removal, circulation/agitation, scaling, crystallizer type, impurities, materials, downstream separation, cost and control.` }
      ] },
    { id: "2022-23-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q3a", label: "(a)", marks: "12",
          topic: "drying", sub: "Adiabatic rotary dryer for heat-sensitive solid: thermal efficiency",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate the thermal efficiency of an adiabatic rotary dryer to dry 2800 lb/h of a heat-sensitive solid from an initial moisture content of 15% to a final moisture content of 0.5%, both dry basis. The solids have a specific heat of 0.52 Btu/lb °F; they enter at 80°F and must not be heated to a temperature above 125°F. Heating air is available at 260°F and a humidity of 0.01 lb of water per pound of dry air. The maximum allowable mass velocity of the air is 700 lb/ft²-h.

Figures for Q3(a) (attached to the paper): humidity chart (air–water, 1 atm) and specific heats of gases (Chilton chart).`,
          solution: String.raw`This is the rotary-dryer example of MSH 5th ed. (pp. 796–798), worked in the dryer slides; here the thermal efficiency is asked.

**Given:** $m_s$ = 2800 lb/h dry solid; $X_a$ = 0.15, $X_b$ = 0.005; $c_{ps}$ = 0.52 Btu/lb·°F; solids in at 80°F, out at most 125°F; air in at $T_{hb}$ = 260°F, $\mathcal{H}$ = 0.01; G ≤ 700 lb/ft²·h.

**Find:** thermal efficiency (and the dryer size it implies).

**Assumptions:** **cocurrent** flow (the hot gas meets the wet solid, so the solid stays near the wet-bulb temperature, which protects the heat-sensitive solid); adiabatic; number of heat-transfer units $N_t$ = 1.5 (typical 1.5–2.5); solids leave at the maximum 125°F; fresh air (and ambient) at 80°F, the same as the solids feed.

1. **Wet-bulb temperature of the inlet air** (humidity chart: from 260°F, $\mathcal{H}$ = 0.01, follow the adiabatic-cooling line to the saturation curve): $T_{wb}$ = 102°F, λ at 102°F = 1036 Btu/lb.

2. **Outlet gas temperature** from the transfer-unit definition for an adiabatic dryer:
$$N_t = \ln\frac{T_{hb}-T_{wb}}{T_{ha}-T_{wb}} = 1.5 \Rightarrow T_{ha} = 102 + \frac{260-102}{e^{1.5}} = 102 + 35.3 = 137^\circ\mathrm{F}$$

3. **Water evaporated:** $m_s(X_a - X_b) = 2800(0.145) = 406$ lb/h.

4. **Heat to be transferred per lb dry solid** ($c_{pL}$ = 1.0, $c_{pv}$ = 0.45 Btu/lb·°F): heat the solid and its water to 102°F, evaporate, heat the solid and residual water to 125°F, superheat the vapor to 137°F:
$$\frac{q_T}{m_s} = 0.52(125-80) + 0.15(1.0)(102-80) + 0.145(1036) + 0.005(1.0)(125-102) + 0.145(0.45)(137-102)$$
$$= 23.4 + 3.3 + 150.2 + 0.1 + 2.3 = 179.3\ \mathrm{Btu/lb}$$
$$q_T = 179.3 \times 2800 = 502{,}100\ \mathrm{Btu/h}$$

5. **Air rate** ($c_s = 0.24 + 0.45(0.01) = 0.2445$ Btu/lb dry air·°F, from the humid-heat line of the chart):
$$m_g(1+\mathcal{H}_b) = \frac{q_T}{c_s(T_{hb}-T_{ha})} = \frac{502{,}100}{0.2445(260-137)} = 16{,}700\ \mathrm{lb/h},\quad m_g = 16{,}530\ \mathrm{lb\ dry\ air/h}$$
   Outlet humidity: $\mathcal{H}_a = 0.01 + 406/16{,}530 = 0.0346$ (at 137°F the wet-bulb is still 102°F, as it must be for adiabatic drying).

6. **Thermal efficiency.** For a direct (adiabatic) dryer, the heat put into the air is $m_g c_s (T_{hb} - T_0)$, with $T_0$ = 80°F the ambient air temperature, and the heat given up to the solid is $m_g c_s (T_{hb} - T_{ha})$:
$$\eta_{th} = \frac{T_{hb}-T_{ha}}{T_{hb}-T_0} = \frac{260-137}{260-80} = \frac{123}{180} = 0.683$$
   On the basis of the heat actually used to evaporate water:
$$\eta_{evap} = \frac{406(1036)}{16{,}530(0.2445)(260-80)} = \frac{420{,}600}{727{,}500} = 0.578$$

7. **Dryer size (for completeness):** $D = \sqrt{4(16{,}700)/(700\pi)} = 5.5$ ft; $\overline{\Delta T}_{lm} = \frac{(260-102)-(137-102)}{\ln(158/35)} = 81.6^\circ$F; with $U_a = 0.125G^{0.67}/D$ (MSH Eq. 24.29), $L = \frac{q_T}{0.125\pi D G^{0.67}\overline{\Delta T}} = 35$ ft (L/D ≈ 6.4).

**Result:** $T_{ha}$ = 137°F, $q_T$ = 5.02×10⁵ Btu/h, air 16,530 lb dry air/h; **thermal efficiency ≈ 68%** (58% if only the latent heat of the evaporated water is counted as useful); dryer 5.5 ft × 35 ft.`,
          answer: String.raw`Cocurrent, N_t = 1.5: T_wb = 102°F, T_ha = 137°F, q_T = 5.02×10⁵ Btu/h, m_g = 16,530 lb/h; η = (260−137)/(260−80) ≈ 68% (evaporation basis ≈ 58%); D = 5.5 ft, L ≈ 35 ft.` },
        { id: "2022-23-Q3b", label: "(b)", marks: "11",
          topic: "drying", sub: "Heat transfer mechanism in conveyor dryers",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Briefly describe the heat transfer mechanism of Conveyer Dryer.`,
          solution: String.raw`**Through-circulation screen-conveyor dryer (direct, convective).** A 25–150 mm layer of granular, extruded or preformed solid is carried on a perforated or screen belt through a long chamber divided into sections, each with its own fan and air heater (steam coils). Hot air is blown **through** the bed (upward in the wet end, downward in the dry end so the bed is not lifted), partly recirculated and partly vented.

![Through-circulation screen-conveyor dryer: hot air forced through the permeable bed on the moving screen; up-flow in the wet end, down-flow in the dry end](fig/2022-23-Q3b-sketch.svg)

Mechanism:

1. **Convection from gas to every particle surface.** Because the gas passes through the bed, the whole particle surface (area a per unit bed volume) is exposed, not just the top surface. The particle coefficient follows a packed-bed correlation, e.g. $\frac{hD_p}{k} = 1.17\,\mathrm{Re}^{0.585}\mathrm{Pr}^{1/3}$ (MSH).
2. **Gas temperature falls through the bed.** A heat balance over a bed of depth s with surface temperature $T_s$:
$$G c_s\,dT_h = -h a (T_h - T_s)\,dz \Rightarrow \ln\frac{T_{h1}-T_s}{T_{h2}-T_s} = \frac{h a s}{G c_s}$$
   so the heat delivered is $q = G c_s (T_{h1} - T_{h2})$ per unit screen area; beds are shallow enough that the gas is not saturated.
3. **Simultaneous mass transfer.** In the constant-rate period the surface is at the wet-bulb temperature and the rate is set by heat transfer: $R_c = h(T_h - T_{wb})/\lambda_{wb}$. In the falling-rate period internal diffusion/capillary flow controls and the solid temperature rises toward the gas temperature.
4. **Minor paths:** conduction from the metal belt, radiation from the walls/heaters (in infrared or radiant conveyor dryers radiation is the main path).

Drying times are short (5–120 min) because of the large exposed area; typical consumption ≈ 2 kg steam per kg water evaporated.

**Screw-conveyor dryer (indirect).** A jacketed horizontal trough with a screw: heat flows by **conduction** from the steam/hot-oil jacket (and hollow flights) through the wall to the solids that are continually turned over; U ≈ 15–60 W/m²·°C. Used for fine or sticky solids and for solvent recovery (no carrier gas).`,
          answer: String.raw`Screen-conveyor dryer: hot air forced through the permeable bed (convection to the whole particle surface, h from packed-bed correlation; ln[(T₁−T_s)/(T₂−T_s)] = has/(Gc_s)); constant-rate surface at T_wb, R = h(T−T_wb)/λ; then falling-rate diffusion; minor conduction/radiation. Screw-conveyor dryers heat by conduction from the jacket.` },
        { id: "2022-23-Q3c", label: "(c)", marks: "12",
          topic: "drying", sub: "Freeze-dried products and merits of spray-dried products",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write a short note on (i) Freeze Dried Product and (ii) The merits of Spray Dried Product.`,
          solution: String.raw`**(i) Freeze-dried products**

- **Principle:** the material is frozen, then the ice is removed by **sublimation** under high vacuum (below the triple point of water, 0.006 atm; typically 0.1–1 mmHg, condenser at −40 to −60°C), followed by secondary drying (desorption of bound water). Heat for sublimation is supplied by conduction from heated shelves or by radiation; the vapor is caught on a refrigerated condenser.
- **Product characteristics:** porous, sponge-like structure with the original shape and volume; very low moisture (1–3%); very rapid and nearly complete rehydration; flavour, aroma, colour, vitamins and biological activity are retained because the product never sees high temperature or liquid water; no case hardening, no migration of solutes to the surface; long shelf life at room temperature if packed moisture-proof (they are hygroscopic and oxygen-sensitive, so packed under N₂).
- **Examples:** instant coffee, fruit, meat and seafood for field rations, vaccines, antibiotics, blood plasma, enzymes, bacterial cultures, pharmaceuticals.
- **Limitations:** slow (many hours), high capital and energy cost (vacuum and refrigeration), batch; used only for high-value or very heat-sensitive products.

**(ii) Merits of spray-dried products**

A solution, slurry or paste is atomised (disk, pressure nozzle or two-fluid nozzle) into hot gas; drops dry in seconds.

- **Very short contact time** (2–30 s) and evaporative cooling of the drop (surface at about the wet-bulb temperature): heat-sensitive products (milk, eggs, coffee, enzymes, pharmaceuticals) are dried without damage even with high inlet gas temperatures.
- **Product form:** free-flowing, uniform, nearly spherical, often hollow particles of controlled size (10–500 µm) and bulk density; readily soluble/dispersible (instant products); low dusting when agglomerated.
- **One-step process:** produces a dry powder directly from a liquid, eliminating crystallisation, filtration, drying and grinding steps.
- Continuous, large capacity, easily automated, sterile/hygienic operation possible; composition of the particle is uniform.
- Limitations: high capital cost, low thermal efficiency (large volumes of hot gas, exhaust leaves hot), large chamber, fine powder must be recovered by cyclones/bag filters.`,
          answer: String.raw`(i) Freeze drying: freeze, then sublime ice under high vacuum; product porous, shape-retaining, 1–3% moisture, excellent rehydration and retention of flavour/activity; costly and slow. (ii) Spray-dried: seconds of contact and wet-bulb drop temperature (no heat damage), free-flowing uniform spherical soluble powder, one step from liquid to powder, continuous large capacity.` }
      ] },
    { id: "2022-23-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q4a", label: "(a)", marks: "6×2=12",
          topic: "relief", sub: "Rupture disks and maximum allowable working pressure",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write a short note on (i) Rupture Disk and (ii) Maximum Allowable Pressure.`,
          solution: String.raw`**(i) Rupture disk**

- A thin diaphragm (metal, graphite or plastic) held between flanges, designed to **burst at a specified pressure** and open the full vent area. It is a non-reclosing device.
- Types: forward-acting (tension-loaded, domed toward the outlet, pre-scored or with a vacuum support), **reverse-buckling** (dome toward the process, snaps through and is cut by knives or opens along scores; can be operated near the burst pressure), composite disks, graphite disks for corrosive service.
- **Advantages:** simple and cheap; single, leak-tight seal (no simmering); available in large sizes and can vent much larger rates than spring valves; very fast opening, good for runaway reactions and deflagrations; corrosion-resistant materials.
- **Disadvantages:** does not reclose, so the whole contents can be vented and air can enter; corrosion pinholes and **fatigue from pressure cycling** can make it burst below the nominal pressure; burst pressure depends on temperature.
- **Installation:** often in series **upstream of a spring relief valve** to protect the valve from corrosive/polymerising fluids and give absolute isolation for toxic gases; a pressure gauge or excess-flow indicator in the space between them detects a leaking disk (Crowl & Louvar, ch. 8); burst-indicating wires give an alarm; two disks with a three-way valve allow maintenance on line.

**(ii) Maximum allowable working pressure (MAWP)**

- The **maximum gauge pressure permissible at the top of a vessel in its normal operating position at a designated temperature** (ASME Section VIII). It is calculated from the actual wall thickness (less corrosion allowance), material allowable stress and joint efficiency, and is stamped on the nameplate; it is ≥ the design pressure.
- It is the reference for the relief system: the **set pressure** of the (first) relief device is normally at or below the MAWP; normal operating pressure is usually ≤ 90% of MAWP.
- Allowed **accumulation** above MAWP while relieving (maximum allowable accumulated pressure): 10% for a single relief device, 16% for multiple devices, 21% for external fire.
- Related terms: operating pressure, set pressure, overpressure (pressure increase above set pressure during relief), backpressure, blowdown (difference between set and reseating pressure, ~4–7%), and the hydrostatic test pressure (≈ 1.3–1.5 × MAWP).`,
          answer: String.raw`(i) Rupture disk: non-reclosing diaphragm bursting at set pressure; cheap, leak-tight, large vent area, fast; but cannot reclose, fatigue/corrosion premature bursts; often upstream of a relief valve with a gauge between. (ii) MAWP: maximum gauge pressure at the vessel top at design temperature (ASME); set pressure ≤ MAWP, accumulation 10/16/21% above it.` },
        { id: "2022-23-Q4b", label: "(b)", marks: "07",
          topic: "relief", sub: "Balanced-bellows safety valve offsets backpressure effect",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Justify the statement below- "Balanced safety valve is advantageous to offset back-pressure effect."`,
          solution: String.raw`**Backpressure in a conventional spring valve.** In a conventional valve the bonnet (spring chamber) is open to the discharge side. Backpressure $P_b$ (superimposed from a common flare/scrubber header, or built up by flow in the discharge piping) acts on the **top** of the disc over the nozzle area $A_N$, while the process pressure P acts on the bottom. The valve opens when

$$P A_N = F_{spring} + P_b A_N \Rightarrow P_{open} = P_{set,0} + P_b$$

So the opening pressure rises one-for-one with backpressure, and because the header pressure varies (other valves relieving), the set point is unpredictable. Built-up backpressure also reduces lift and capacity and can cause chattering. Conventional valves are limited to backpressure ≤ about 10% of the set pressure.

**Balanced-bellows valve.** A bellows whose effective area equals the nozzle (seat) area $A_N$ is sealed between the disc holder and the bonnet, and the bonnet is vented to atmosphere. The backpressure now acts on the outside of the bellows and on the disc from both sides with equal area, so its forces **cancel**:

$$P A_N = F_{spring} \Rightarrow P_{open} = P_{set,0}\ \text{(independent of } P_b)$$

![Conventional valve: backpressure adds to the spring force; balanced bellows: backpressure forces cancel and the bonnet is vented](fig/2022-23-Q4b-sketch.svg)

**Why this is advantageous**

1. The valve opens near the set pressure regardless of the backpressure level: predictable set pressure even when discharging into a header with large, variable backpressure (flare, scrubber).
2. Capacity is much less sensitive to backpressure (usable to ~30–50% backpressure, with a capacity correction factor $K_b$).
3. The bellows also isolates the spring, guide and bonnet from corrosive, fouling or polymerising fluids.

Disadvantages: more expensive, the bellows can fail (bonnet vent must be piped safely); flow rate through the valve still depends on the backpressure. Crowl & Louvar recommend it "when a nearly constant relief set pressure is required in the presence of large variation in backpressure" (e.g. PSV-4 venting to the scrubber in their reactor example).`,
          answer: String.raw`In a conventional valve P_open = P_set + P_b because backpressure acts on top of the disc; a bellows of area equal to the seat area with a vented bonnet cancels the backpressure force, so P_open = P_set independent of P_b, capacity is less affected and the spring is protected — hence preferred for variable, high backpressure headers.` },
        { id: "2022-23-Q4c", label: "(c)", marks: "16",
          topic: "relief", sub: "Locate relief devices on polymerization reactor flowsheet",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`See Figure for Q. No. 4(c) and locate relief valve location and attach it with answer scripts. State the reason for your answer.

Figure for Q4(c) (attached to the paper): polymerization reactor R-1 with internal cooling/heating coil (monomer in 5 gpm through V-2; steam 125 psig through V-4; cooling water out through V-5; cooling water in 200 gpm through V-6; steam trap via V-7); positive-displacement pump P-1 feeding base through V-1 and V-8; product out through V-9; overhead condenser E-1 (cooling water in V-10, out V-11, 10 gpm); knock-out drum D-1 (V-12 in, vacuum through V-15, level control LC on pump P-2 with V-13, V-14); nitrogen at 100 psig through a pressure controller PC and check valve to the reactor through V-3.`,
          solution: String.raw`This is the polymerization-reactor example of Crowl & Louvar (Example 8-1/8-2, used in the relief-system slides). Guidelines applied: every vessel needs a relief; positive-displacement pumps, compressors and turbines need relief on the discharge; heat-exchanger sides and coils that can be **blocked in and heated** need relief (thermal expansion of trapped liquid); and lines that can be over-pressured by a high-pressure source (N₂ 100 psig, steam 125 psig) through a failed regulator.

![Relief devices added to the reactor flowsheet: PSV-1a/1b on R-1, PSV-2 on P-1 discharge, PSV-3 on E-1, PSV-4 on D-1, PSV-5 on the reactor coil](fig/2022-23-Q4c-sol.svg)

| Relief | Location | Reason (credible scenario) | Type |
|---|---|---|---|
| PSV-1a, PSV-1b | Top of reactor R-1 | General rule: every process vessel. Scenarios: R-1 full of liquid and P-1 actuated; cooling coil breaks and water enters at 200 gpm, 50 psig; N₂ regulator fails (critical flow in 1-in line); **runaway reaction** on loss of cooling (two-phase flow). | 1a rupture disk (protects 1b from the reactive, polymerising monomer) in series with 1b safety-relief valve (two-phase); gauge between them |
| PSV-2 | Discharge of P-1, upstream of V-1 | Positive-displacement pump dead-headed if V-1 or V-8 is closed: pressure rises until something breaks (100 gpm at 50 psig) | Relief valve (liquid service), discharge back to the suction/base tank |
| PSV-3 | Cooling-water side of condenser E-1, between V-10 and V-11 | Water blocked in (V-10, V-11 closed) while hot reactor vapor (or the 125-psig steam used on the reactor) heats it: liquid thermal expansion ruptures the tubes | Relief valve (liquid only, conventional) |
| PSV-4 | Drum D-1 | General rule: every vessel; D-1 can be pressurised through E-1 from the reactor or by the N₂ regulator failing (critical flow in ½-in line) with the vacuum line V-15 closed | Safety-relief valve (liquid or vapor possible); vents to the scrubber with large backpressure, so **balanced bellows** |
| PSV-5 | Reactor coil, between V-4/V-6 and V-5/V-7 | Water blocked inside the coil (all four valves closed) and heated by the heat of reaction or by steam: thermal expansion | Relief valve (liquid service) |

Other checks: the N₂ line is protected by PSV-1/PSV-4 (its regulator failure is a scenario for both vessels); the reactor relief discharges to a knock-out drum, scrubber or flare, not to atmosphere, because the monomer is reactive and flammable.`,
          answer: String.raw`PSV-1a (rupture disk) + PSV-1b (safety-relief) on reactor R-1 (runaway, coil leak, N₂ regulator failure, overfilling); PSV-2 on P-1 discharge (dead-headed PD pump); PSV-3 on E-1 water side (blocked in and heated); PSV-4 balanced-bellows on drum D-1 (vessel, N₂ failure, scrubber backpressure); PSV-5 on reactor coil (blocked water heated by reaction).` }
      ] },
    { id: "2022-23-Q5", q: 5, section: "B", compulsory: true,
      stem: String.raw`Question 5 is compulsory and carries 45 marks.`,
      parts: [
        { id: "2022-23-Q5a", label: "(a)", marks: "10",
          topic: "dust-collection", sub: "Dust-collector trains for cement plant and coal power plant",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Propose mechanical separator configurations suitable for particle separation from gaseous emission in cement manufacturing industry and coal fired power plant. Why do you propose such configurations for these industries? - Explain.`,
          solution: String.raw`![Proposed collector trains: cement kiln/raw mill and clinker cooler; pulverised-coal boiler](fig/2022-23-Q5a-sol.svg)

**Cement manufacturing.** Sources: rotary kiln + preheater exit gas, raw mill, clinker cooler, cement mill, packing.

- **Configuration:** preheater **cyclones** (they are part of the process: they separate the raw meal from the kiln gas and return it) → gas conditioning (water spray/cooling tower to 150–250°C) → **ESP** or **bag filter** (pulse-jet, glass-fibre or PTFE bags) → stack. Clinker cooler: **multicyclone/gravity chamber** pre-collector (coarse, hot, abrasive clinker dust) → bag filter or ESP. Mills and silos: bag filters (the dust is product and is returned).
- **Why:** very high dust loading (up to 50–100 g/m³ at the preheater) with a wide size range — cyclones cheaply remove the coarse fraction (product recovery) and protect the final collector from abrasion and overload; the remaining fine dust (1–20 µm) needs > 99.9% efficiency to meet emission limits (≤ 30 mg/Nm³), which only fabric filters or ESPs achieve; the dust is dry, so dry collection allows recycling the dust to the process (no sludge); hot gas (≈ 300°C) suits ESP or glass-fibre bags after conditioning; conditioning also lowers the dust resistivity for the ESP.

**Coal-fired power plant.** Source: boiler flue gas carrying fly ash (pulverised-coal firing: ~80% of the ash leaves with the gas, mostly 1–50 µm, 5–20 g/m³, very large gas volume).

- **Configuration:** economiser/air-heater hoppers → (mechanical **multicyclone** pre-collector for stoker or fluidised-bed boilers with coarse ash) → **cold-side ESP** (after the air preheater, 130–180°C) or a **fabric filter** → wet limestone **FGD scrubber** (SO₂, also removes some fine particulate) → stack; SCR for NOx ahead of the air heater.
- **Why:** enormous gas flow at low pressure: the ESP handles large volumes with very low pressure drop (≈ 1–2 cm water) and low operating cost, at 99–99.9% efficiency on fine fly ash, and works at 130–400°C; fabric filters are chosen for low-sulphur coals whose ash resistivity is too high for an ESP, and when PM2.5 limits are strict; multicyclones alone (60–90%) are not enough, but reduce the load and remove coarse, low-resistivity ash that would re-entrain in the ESP; the wet scrubber is placed last because it also needs a low dust load and handles the SO₂.

In both cases the choice follows the Sylvan-chart logic: concentration and particle size fix which collectors can reach the required efficiency, and a cheap pre-collector is used where the loading is high.`,
          answer: String.raw`Cement: preheater cyclones → gas conditioning → ESP or pulse-jet bag filter (clinker cooler: multicyclone → bag filter), because of very high, abrasive, dry loading with fines needing >99.9% and dust recycle. Coal power: (multicyclone) → cold-side ESP or fabric filter → wet FGD scrubber, because of huge gas volume, fine fly ash, low ΔP needed and SO₂ removal.` },
        { id: "2022-23-Q5b", label: "(b)", marks: "5+30",
          topic: "gas-liquid-separation", sub: "Three-phase oil/gas/water separator: schematic and horizontal design",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A separation is generally used to separate or isolate a well stream mixture of oil/gas/water into its constituents. For instance, a gas-liquid separator is utilized to extract and collect entrained fluids from natural gas streams. In oil production, the well contains a mixture of crude oil, water, emulsion, gas, sand and finer solids. One of the first stages of the oil production process is to separate out these various elements. You need to answer the following questions on the above context.

(i) Draw the schematic of a three phase separator with proper labelling. **(5)**

(ii) Design a three-phase horizontal separator with no weir to separate the mixture (specification is given in the Table below). The operating pressure is 165 psia and following data will be necessary for your design. **(30)**

- Use K value of 0.32, 0.163 and 0.33 for vapor, heavy liquid and light liquid velocity calculation.
- Holdup time = 10 min, Surge time = 5 min.
- Initially take L/D value of 3 and start iteration with an increment of 0.1 [Here D is vessel diameter]. Take $H_{LL}$ and $H_{HL}$ value as 1 ft each.
- Consider vapor space height $H_V$ as 1 ft.
- The ratio of vapor phase cross sectional area ($A_V$) to total cross sectional area ($A_T$) is also given:
$$y = \frac{-4.76\times10^{-5} + 0.17x + 5.67x^2 - 4.92x^3 - 0.15x^4}{1 + 3.92x - 6.36x^2 + 4.02x^3 - 1.8x^4}$$
where $y = A_V/A_T$ and $x = H_V/D$.
- You can use the same correlation for finding ratio of total cross section area of light and heavy liquid to total cross sectional area of the separator where $y = (A_{LL}+A_{HL})/A_T$ and $x = (H_{LL}+H_{HL})/D$.

| Name of the stream | Mass Flow, lb/h | Density, lb/ft³ | Viscosity, cP |
|---|---|---|---|
| Hydrocarbon Gas | $W_V$ = 415,000 | $\rho_V$ = 0.6973 | – |
| Hydrocarbon Liquid | $W_{LL}$ = 16,500 | $\rho_L$ = 53.95 | $\mu_L$ = 0.630 |
| Water | $W_{HL}$ = 1300 | $\rho_H$ = 62.11 | $\mu_H$ = 0.764 |

So, for design purpose you need to find out the length and diameter of the three phase horizontal separator. [The notation v = gaseous phase, LL = light liquid and HL = heavy liquid]

Equations for Question 5(b) (given on the paper):

$$D = \left(\frac{4(V_H+V_S)}{0.5\pi(L/D)}\right)^{1/3}\quad V_H = \text{holdup volume},\ V_S = \text{surge volume}$$
$$\phi = \frac{H_v}{U_v}\ (\text{liquid dropout time}),\qquad L = \frac{V_H+V_S}{A_T - A_V - (A_{HL}+A_{LL})}\ (\text{length, liquid control})$$
$$t_{HL} = \frac{12(D - H_V - H_{HL})}{U_{HL}},\qquad t_{LH} = \frac{12 H_{HL}}{U_{LH}},\qquad \theta_{HL} = \frac{A_{HL}L}{Q_{HL}}$$`,
          solution: String.raw`### (i) Schematic

![Horizontal three-phase separator (no weir): inlet diverter, gravity-settling section, oil–water interface, mist eliminator, gas, oil and water outlets with level controls](fig/2022-23-Q5b-sketch.svg)

Sections: **inlet diverter** (momentum breaker, primary gas–liquid separation), **gravity-settling section** (droplets fall out of the gas; water drops settle through oil and oil drops rise through water), **liquid collection section** (holdup and surge volume; oil–water interface held by an interface level controller), **mist extractor** (wire mesh/vanes, coalesces fine mist before the gas outlet), outlets for gas (top, pressure control valve), oil and water (bottom, level-control valves), plus vortex breakers, sand jets/drain, relief valve.

### (ii) Design (Monnery–Svrcek procedure, horizontal vessel without weir)

**Given:** table data, P = 165 psia; $K_V$ = 0.32 ft/s; $k_s$ = 0.163 (heavy drops in light phase) and 0.33 (light drops in heavy phase); $T_H$ = 10 min, $T_S$ = 5 min; $H_V$ = 1 ft, $H_{LL}$ = $H_{HL}$ = 1 ft.

**Find:** D and L.

**Assumptions:** design vapor velocity = 75% of the terminal velocity; liquid hold-up and surge volume lies above the low liquid level $H_{LL}+H_{HL}$ = 2 ft; settling velocities from $U = k_s\Delta\rho/\mu$ (in/min, ρ in lb/ft³, μ in cP).

1. **Volumetric flows:**
$$Q_V = \frac{415{,}000}{3600(0.6973)} = 165.3\ \mathrm{ft^3/s},\quad Q_{LL} = \frac{16{,}500}{60(53.95)} = 5.097\ \mathrm{ft^3/min},\quad Q_{HL} = \frac{1300}{60(62.11)} = 0.349\ \mathrm{ft^3/min}$$

2. **Vapor velocity:**
$$U_T = 0.32\sqrt{\frac{53.95-0.6973}{0.6973}} = 2.796\ \mathrm{ft/s},\qquad U_V = 0.75U_T = 2.097\ \mathrm{ft/s}$$

3. **Holdup and surge volumes:**
$$V_H = 10(5.097+0.349) = 54.46\ \mathrm{ft^3},\qquad V_S = 5(5.446) = 27.23\ \mathrm{ft^3},\qquad V_H+V_S = 81.69\ \mathrm{ft^3}$$

4. **Settling velocities and times** (independent of D except through the light-layer thickness):
$$U_{HL} = \frac{0.163(62.11-53.95)}{0.630} = 2.111\ \mathrm{in/min},\qquad U_{LH} = \frac{0.33(62.11-53.95)}{0.764} = 3.525\ \mathrm{in/min}$$
$$t_{LH} = \frac{12(1)}{3.525} = 3.40\ \mathrm{min},\qquad \phi = \frac{H_V}{U_V} = \frac{1}{2.097} = 0.477\ \mathrm{s}$$

5. **First trial, L/D = 3.0:**
$$D = \left(\frac{4(81.69)}{0.5\pi(3)}\right)^{1/3} = 4.108\ \mathrm{ft},\qquad A_T = \frac{\pi}{4}(4.108)^2 = 13.26\ \mathrm{ft^2}$$
   - $x = H_V/D = 0.243$ → y = 0.1877 → $A_V$ = 2.488 ft²;
   - $x = (H_{LL}+H_{HL})/D = 0.487$ → y = 0.482 → $A_{LL}+A_{HL}$ = 6.392 ft²;
   - liquid-controlled length $L = \frac{81.69}{13.26 - 2.488 - 6.392} = 18.67$ ft;
   - actual vapor velocity $U_{VA} = Q_V/A_V = 165.3/2.488 = 66.4$ ft/s, so the length needed for the drops to fall through $H_V$ is $L_{min} = U_{VA}\phi = 66.4(0.477) = 31.7$ ft.

   L < $L_{min}$: the vapor dropout controls, so increase L/D by 0.1 and repeat (a longer, slimmer vessel for the same liquid volume).

6. **Iterations** (each row recomputes D, A_T, both area ratios, L and L_min):

| L/D | D, ft | $A_T$, ft² | $A_V$, ft² | $A_{LL}+A_{HL}$, ft² | L, ft | $L_{min}$, ft | L ≥ L_min? |
|---|---|---|---|---|---|---|---|
| 3.0 | 4.108 | 13.26 | 2.488 | 6.392 | 18.67 | 31.68 | no |
| 3.2 | 4.021 | 12.70 | 2.457 | 6.293 | 20.69 | 32.08 | no |
| 3.4 | 3.940 | 12.20 | 2.428 | 6.201 | 22.91 | 32.46 | no |
| 3.6 | 3.866 | 11.74 | 2.401 | 6.115 | 25.35 | 32.83 | no |
| 3.8 | 3.797 | 11.32 | 2.375 | 6.034 | 28.03 | 33.18 | no |
| 4.0 | 3.733 | 10.94 | 2.351 | 5.957 | 31.01 | 33.52 | no |
| 4.1 | 3.702 | 10.76 | 2.340 | 5.920 | 32.62 | 33.69 | no |
| **4.2** | **3.672** | **10.59** | **2.329** | **5.884** | **34.33** | **33.85** | **yes** |

7. **Check liquid–liquid separation at L/D = 4.2** (D = 3.672 ft, L = 34.33 ft). Heavy-liquid area for $x = H_{HL}/D = 0.272$: $A_{HL}$ = 0.2198(10.59) = 2.329 ft²; light-liquid area $A_T - A_V - A_{HL}$ = 5.935 ft².
   - Settling of water drops through the oil layer: $t_{HL} = \frac{12(3.672 - 1 - 1)}{2.111} = 9.51$ min;
   - residence time of the water: $\theta_{HL} = \frac{2.329(34.33)}{0.349} = 229$ min ≥ 9.5 min ✔;
   - rising of oil drops through the water layer: $t_{LH}$ = 3.40 min; residence time of the oil $\theta_{LL} = \frac{5.935(34.33)}{5.097} = 40.0$ min ≥ 3.4 min ✔.

**Result:** D ≈ **3.67 ft (44 in)** and L ≈ **34.3 ft** (seam to seam), converged at an assumed L/D = 4.2; the vessel is vapor-controlled, and both liquid–liquid separations are satisfied with a large margin.

> Remark: the actual L/D of the result (34.3/3.67 ≈ 9.3) is above the usual 1.5–6 range and the actual gas velocity (71 ft/s) is very high because $H_V$ was fixed at 1 ft. In a real design $H_V$ (or D) would be increased so that the vapor area, not a long vessel, handles the 165 ft³/s of gas, and the result rounded up to a standard 6-in diameter.`,
          answer: String.raw`Q_V = 165.3 ft³/s, U_V = 2.10 ft/s, V_H + V_S = 81.7 ft³. Iterating L/D from 3.0 in steps of 0.1: at L/D = 4.2, D = 3.67 ft, L = 34.3 ft ≥ L_min = 33.9 ft; t_HL = 9.5 min < θ_HL = 229 min, t_LH = 3.4 min < θ_LL = 40 min → D ≈ 3.7 ft, L ≈ 34.3 ft.` }
      ] },
    { id: "2022-23-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q6a", label: "(a)", marks: "6+6=12",
          topic: "separator-selection", sub: "Sylvan chart: cyclone train outlet and kiln flue-gas collectors",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Use the sylvan chart supplied to select mechanical separation equipment for the following cases:

i. Material leaving a chemical process varies between 20 and 40 grains/cu. ft with 60 to 80 micron range of mean diameter of particle. A low resistance cyclone followed by a high efficiency cyclone would be used. What will be the final concentration and mean particle size of the gaseous stream?

ii. Flue gas leaving a kiln chimney has a particle concentration of 50 grains/cu.ft and a mean size of 8 microns. What is the cheapest equipment that can be used to achieve 70% collection efficiency? What equipment can be used to achieve 98% collection efficiency?

Figure for Question 6(a) (attached to the paper): Sylvan chart (dust-collecting range – concentration in grains/ft³ vs mean particle size in microns, with deviation lines and the efficiency curves of the collectors).`,
          solution: String.raw`**How the Sylvan chart is used (Ludwig ch. 4):** locate the point (mean particle size, concentration) on the upper grid; drop vertically to the efficiency curves at the bottom to read the efficiency of each collector at that size; the outlet concentration is $c_{out} = c_{in}(1-\eta)$; the outlet dust is finer, and its new mean size is found by moving from the inlet point **parallel to the deviation line** ("ordinary industrial dusts") down to the outlet concentration. Ludwig Example 4-1 (also in the slides, lime kiln): 7.5 gr/ft³, 9 µm → high-efficiency cyclone 70% → 2.25 gr/ft³ and 6.0 µm; then a wet collector 98% → 0.045 gr/ft³ and 1.6 µm. On this chart the deviation line moves the mean size by about 0.34 decade per decade of concentration.

**(i) Low-resistance cyclone + high-efficiency cyclone**

1. **Inlet point:** use the mid values, 30 gr/ft³ (range 20–40) and 70 µm (range 60–80).
2. **Low-resistance cyclone:** at 70 µm the low-resistance cyclone band reads ≈ 90%:
$$c_1 = 30(1-0.90) = 3\ \mathrm{gr/ft^3}\ (2\text{–}4\ \text{for the range})$$
   Moving parallel to the deviation line from (70 µm, 30 gr/ft³) to 3 gr/ft³ gives a mean size of ≈ 35 µm.
3. **High-efficiency cyclone:** at 35 µm the high-efficiency cyclone band reads ≈ 99%:
$$c_2 = 3(1-0.99) = 0.03\ \mathrm{gr/ft^3}\ (0.02\text{–}0.04)$$
   Continuing parallel to the deviation line to 0.03 gr/ft³ gives a mean size of ≈ 6 µm (check: 70 µm/10^(0.34×3) ≈ 6.7 µm).

**Result (i):** final stream ≈ **0.03 gr/ft³** (0.02–0.04) with mean particle size ≈ **6 µm**; overall efficiency ≈ 99.9%.

**(ii) Kiln flue gas, 50 gr/ft³, 8 µm**

1. Drop from 8 µm to the efficiency curves (as in Ludwig's 9-µm kiln example): low-resistance cyclones < 50% (useless); **high-efficiency cyclones ≈ 60–80% (average ≈ 70%)**; wet collectors, cloth (fabric) arresters and electrostatic precipitators ≈ 97–99+%.
2. **70% collection:** the cheapest device reaching it is a **high-efficiency cyclone** (multicyclone): outlet 50(0.30) = 15 gr/ft³.
3. **98% collection:** outlet 50(0.02) = 1 gr/ft³. The collectors whose curves reach 98% at 8 µm are a **wet collector (scrubber)**, a **fabric (cloth) arrester (bag filter)** or an **ESP**; the cheapest of these is usually the wet collector, while bag filters/ESPs give 99+%. Because 50 gr/ft³ is a very heavy loading (beyond the normal range of filters and ESPs), the practical arrangement is a high-efficiency cyclone pre-collector (70%, to 15 gr/ft³) followed by a bag filter or ESP (≈ 93% more needed on the finer remaining dust) to reach 98% overall.

**Result (ii):** 70% → high-efficiency cyclone; 98% → wet scrubber, fabric filter or ESP (preferably after a cyclone pre-cleaner).`,
          answer: String.raw`(i) 30 gr/ft³, 70 µm → LR cyclone ≈90% → 3 gr/ft³, ~35 µm → HE cyclone ≈99% → ≈0.03 gr/ft³ (0.02–0.04), mean ≈6 µm. (ii) 70%: high-efficiency cyclone (cheapest); 98%: wet collector/scrubber, fabric filter or ESP (after a cyclone pre-cleaner).` },
        { id: "2022-23-Q6b", label: "(b)", marks: "5+5=10",
          topic: "size-reduction", sub: "Laws of size reduction and their applicability",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Solids may be broken in many different ways, but only four of them are commonly used in size-reduction machines: (1) compression, (2) impact, (3) attrition or rubbing, and (4) cutting. Write short notes on laws of size reduction and applicability of these laws.`,
          solution: String.raw`**General law.** The energy dE needed for a small change dL in the size of unit mass of material is a power function of size (Coulson & Richardson Vol. 2, ch. 2):

$$\frac{dE}{dL} = -C L^{p}$$

**Rittinger's law (p = −2, 1867).** Integrating from feed size $L_1$ to product size $L_2$:
$$E = K_R f_c\left(\frac{1}{L_2} - \frac{1}{L_1}\right)$$
Since the surface per unit mass ∝ 1/L, the energy is proportional to the **new surface created**. $f_c$ = crushing strength, $K_R$ = Rittinger constant.

**Kick's law (p = −1, 1885).**
$$E = K_K f_c \ln\frac{L_1}{L_2}$$
The energy depends only on the **reduction ratio** $L_1/L_2$: crushing 50 mm → 25 mm needs the same energy as 40 mm → 20 mm. It is based on the energy for elastic deformation before fracture.

**Bond's law (p = −3/2, 1952).**
$$E = E_i\left(\sqrt{\frac{100}{L_2}} - \sqrt{\frac{100}{L_1}}\right)\ \ (L\ \text{in µm}),\qquad \frac{P}{\dot m} = 0.3162\,W_i\left(\frac{1}{\sqrt{D_{pb}}} - \frac{1}{\sqrt{D_{pa}}}\right)$$
($D_p$ in mm, P in kW, ṁ in t/h). The **work index** $E_i$ ($W_i$) is the energy (kWh/t) to reduce the material from infinite size to 80% passing 100 µm; tabulated for many materials from laboratory tests.

**Applicability**

| Law | Range | Reason |
|---|---|---|
| Rittinger | fine grinding, ≈ 10–1000 µm (ball, pebble, attrition mills) | large new surface per unit mass; energy ∝ surface created |
| Kick | coarse crushing, > 1000 µm (jaw, gyratory crushers, rolls) | little new surface; energy mainly for elastic deformation; fixed reduction ratio |
| Bond | intermediate crushing and grinding (most practical design, rod and ball mills) | empirical, between the two; most reliable with $W_i$ data |

Hukki showed that the actual energy–size curve is a composite: Kick's law at coarse sizes, Bond's in the middle, Rittinger's at fine sizes. All laws assume constant crushing strength; real efficiency of mills is only ~0.1–2% (most energy goes to heat, noise, elastic deformation and friction), so the constants must come from tests.`,
          answer: String.raw`dE/dL = −CL^p: Rittinger (p = −2) E = K_R f_c(1/L₂ − 1/L₁), energy ∝ new surface, fine grinding 10–1000 µm; Kick (p = −1) E = K_K f_c ln(L₁/L₂), energy ∝ reduction ratio, coarse crushing > 1 mm; Bond (p = −3/2) E = E_i(√(100/L₂) − √(100/L₁)), work index, intermediate range.` },
        { id: "2022-23-Q6c", label: "(c)", marks: "8",
          topic: "dust-collection", sub: "Criteria for choosing dry vs wet scrubbing",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the deciding criteria for choosing dry and wet scrubbing technique? Illustrate with an example`,
          solution: String.raw`**Wet scrubbing:** the gas is contacted with water or a liquid reagent (spray tower, packed tower, venturi, wet cyclone). **Dry (and semi-dry) scrubbing:** a dry powder (lime, sodium bicarbonate, activated carbon) is injected, or a slurry is sprayed so that it dries completely (spray-dryer absorber); the solids are caught in a bag filter or ESP.

| Criterion | Favours wet scrubbing | Favours dry/semi-dry scrubbing |
|---|---|---|
| Removal efficiency required | very high acid-gas removal (> 95–98% SO₂, HCl) | moderate (70–95%) |
| Pollutant | soluble gases, sticky, hygroscopic, flammable/explosive or hot dusts, mists | dry, non-sticky dusts; acid gases at moderate concentration |
| Gas temperature/humidity | hot gas can be quenched; saturated gas acceptable | gas must stay above dew point (no condensation, corrosion) |
| Water availability, wastewater | water available and wastewater/sludge treatment acceptable | water scarce; no liquid effluent wanted; dry by-product easy to landfill or reuse |
| Corrosion, plume | corrosion-resistant materials; wet visible plume accepted (reheat) | less corrosion; no steam plume |
| Cost and energy | higher capital, lower reagent use; pressure drop (venturi) high | lower capital, simpler, but more reagent (excess sorbent) |
| By-product value | gypsum (saleable) from limestone FGD | — |
| Combined removal | gases and particles together | needs a downstream fabric filter (which also gives extra contact) |

**Example: SO₂ from a coal-fired boiler.** For a large unit burning high-sulphur coal (say 2–3% S) that must remove > 95% SO₂, **wet limestone FGD** is chosen: CaCO₃ + SO₂ + ½O₂ + 2H₂O → CaSO₄·2H₂O, giving saleable gypsum. For a small boiler or a municipal-waste incinerator burning low-sulphur fuel in a water-scarce area, **semi-dry (spray-dryer) or dry sorbent injection** with a bag filter is chosen: Ca(OH)₂ (or NaHCO₃) reacts with SO₂/HCl and the dry product is collected together with the fly ash, no wastewater.

A second example: a sticky, hygroscopic fertiliser dust (or a combustible dust with explosion risk) is cleaned in a wet venturi scrubber, whereas dry cement dust that is to be returned to the process is cleaned dry in a bag filter.`,
          answer: String.raw`Choose by required efficiency, pollutant nature (soluble gas, sticky/explosive dust → wet), gas temperature/dew point, water availability and wastewater disposal, corrosion/plume, cost/energy, by-product. Example: >95% SO₂ from high-S coal → wet limestone FGD (gypsum); low-S/small or water-scarce plant → spray-dryer or dry lime injection + bag filter.` }
      ] },
    { id: "2022-23-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q7a", label: "(a)", marks: "18",
          topic: "dust-collection", sub: "Flue-gas cleaning for coal-fired fluidized-bed food dryer",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`The major contribution to global warming potential in food industry is the carbon dioxide (CO₂) emission from combustion of fossil fuel (coal) for drying operation and combustion of diesel use in the generator to operate the electrical motor during the production operation. 93% of CO₂ is emitted from the burning of coal which is used majorly for drying operation while 7% of the total CO₂ emission is from the diesel generator. N₂O and CH₄ emissions from the combustion of diesel fuel and CO emission from coal combustion also contributed to global warming. Thus, the drying method involved in food industries utilize fluidized bed drier and coal as energy source. Propose a flue gas cleaning mechanism using your knowledge of separation technology to release cleaner forms of gases in the atmosphere`,
          solution: String.raw`**What has to be removed**

| Stream | Pollutants |
|---|---|
| Coal furnace (93% of CO₂) | fly ash and unburnt char (PM10, PM2.5), SO₂/SO₃, NOx, **CO**, HCl, Hg, CO₂ |
| Fluidized-bed dryer exhaust | entrained product fines (food dust, valuable), moisture, odour; plus the furnace gas if the dryer is direct-fired |
| Diesel generator (7% of CO₂) | soot (diesel particulate), NOx, **N₂O**, **CH₄**/unburnt hydrocarbons, CO, CO₂ |

**Proposed cleaning train (coal flue gas / dryer exhaust)**

![Proposed flue-gas cleaning: cyclone, catalytic oxidation of CO, SCR, bag filter with sorbent injection, wet scrubber, CO₂ capture by amine absorption; diesel exhaust treated by DOC + DPF + SCR](fig/2022-23-Q7a-sol.svg)

1. **Cyclone (high-efficiency or multicyclone)** directly after the fluidized-bed dryer: recovers the entrained product fines (returned to product) and removes coarse char/ash; protects the downstream units. Mechanism: centrifugal separation, 80–95% for > 10 µm.
2. **Combustion control and CO oxidation:** good air/fuel ratio and residence time in the furnace (or an FBC with staged air) minimise CO and unburnt carbon; residual CO is oxidised to CO₂ in a **catalytic oxidizer** (Pt/Pd, 300–500°C), which removes a toxic, indirectly warming gas.
3. **NOx control:** low-NOx burners/staged air and **SCR** with NH₃/urea over V₂O₅–TiO₂ at 300–400°C (4NO + 4NH₃ + O₂ → 4N₂ + 6H₂O); in a fluidized-bed combustor the low bed temperature (≈ 850°C) already keeps thermal NOx low, but favours N₂O, which is reduced by raising the freeboard temperature or by catalytic decomposition.
4. **SO₂:** limestone added to the fluidized bed (in-bed capture, CaO + SO₂ + ½O₂ → CaSO₄) or dry sorbent (hydrated lime / NaHCO₃) injected ahead of the bag filter; for higher removal, a wet limestone scrubber after the filter.
5. **Fine particulate:** **pulse-jet fabric (bag) filter** (> 99.9% on PM2.5; the cake of sorbent also captures acid gases and, with activated-carbon injection, mercury); an ESP is the alternative for large flows.
6. **Wet scrubber / condenser (optional):** final polishing of SO₂, HCl and odour; also recovers latent heat from the moist dryer exhaust.
7. **CO₂ separation (the main GHG):** chemical absorption in an amine (30% MEA) packed absorber at 40–50°C with steam-stripped regeneration (≈ 90% capture), or physical adsorption (PSA) / membranes for small units; the captured CO₂ can be compressed for food-grade use (carbonation) or storage. Energy-side measures reduce CO₂ at source: heat recovery from the dryer exhaust (recirculation, heat exchanger), switching to biomass or natural gas, heat pumps.

**Diesel generator exhaust:** **diesel oxidation catalyst (DOC)** oxidises CO, CH₄/hydrocarbons; **diesel particulate filter (DPF)** traps soot; **SCR** with urea reduces NOx; N₂O is minimised by avoiding over-dosing of urea and by a catalyst formulation that does not make N₂O; CH₄ slip needs a Pd-based catalyst at high temperature.

**Order of units:** coarse solids first (cyclone), then hot-gas catalytic steps (CO oxidation, SCR) while the gas is hot, then cooling, sorbent injection and fine-particle filtration, then wet scrubbing, then CO₂ absorption (needs clean, cool, SO₂-free gas because SO₂ degrades amines), then the stack.`,
          answer: String.raw`Cyclone (product fines, coarse ash) → combustion control + catalytic oxidizer (CO→CO₂) → SCR (NOx; control N₂O) → lime/sorbent injection + pulse-jet bag filter (PM2.5, SO₂, HCl, Hg) → wet scrubber → amine CO₂ absorber → stack; diesel exhaust: DOC (CO, CH₄, HC) + DPF (soot) + SCR (NOx).` },
        { id: "2022-23-Q7b", label: "(b)", marks: "12",
          topic: "mixing", sub: "Disk turbine power in baffled tank for 50% NaOH",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Calculate the power requirement to mix an aqueous solution of 50% NaOH in a baffled tank, 2 m in diameter. The mixing will be performed in the vertical tank filled to a height of 2 m by a disk turbine with six flat blades. The turbine is 0.67 m in diameter and positioned 0.67 m above the bottom of the tank. The turbine blades are 0.134 m wide, 0.167 m long and turn at 90 r/min. The solution has a viscosity of 0.012 Pa-s and density of 1500 kg/m³.

Figure for Question 7(b) (attached to the paper): standard turbine geometry ($S_1 = D_a/D_t$, $S_2 = E/D_t$, $S_3 = L/D_a$, $S_4 = W/D_a$, $S_5 = J/D_t$, $S_6 = H/D_t$) and the power-number curves $N_P = Pg_c/\rho n^3 D_a^5$ vs $N_{Re} = D_a^2 n\rho/\mu$:

| Curve | $S_1$ | $S_2$ | $S_3$ | $S_4$ | $S_5$ | $S_6$ |
|---|---|---|---|---|---|---|
| A | 0.33 | 0.33 | 0.25 | 0.2 | 0.1 | 1.0 |
| B | 0.33 | 0.33 | 0.25 | 0.125 | 0.1 | 1.0 |
| C | 0.33 | 0.33 | 0.25 | 0.2 | 0.1 | 1.0 |
| D | 0.33 | 0.33 | 0.25 | 0.25 | – (unbaffled) | 1.0 |`,
          solution: String.raw`This is MSH Example 9.3.

**Given:** $D_t$ = 2 m, H = 2 m, $D_a$ = 0.67 m, E = 0.67 m, W = 0.134 m, L = 0.167 m, six-blade disk turbine, n = 90/60 = 1.5 r/s, μ = 0.012 Pa·s, ρ = 1500 kg/m³.

**Find:** power P.

**Assumptions:** four standard baffles, J = $D_t$/10 = 0.2 m ($S_5$ = 0.1); fully baffled, so there is no vortex and no Froude-number correction.

1. **Shape factors:**
$$S_1 = \frac{0.67}{2} = 0.33,\ S_2 = \frac{0.67}{2} = 0.33,\ S_3 = \frac{0.167}{0.67} = 0.25,\ S_4 = \frac{0.134}{0.67} = 0.20,\ S_5 = 0.1,\ S_6 = \frac{2}{2} = 1.0$$
   These match **curve A** (six flat blades, $S_4$ = 0.2, 4 baffles).

2. **Reynolds number:**
$$N_{Re} = \frac{D_a^2 n\rho}{\mu} = \frac{(0.67)^2(1.5)(1500)}{0.012} = 8.42\times10^4$$

3. **Power number:** on curve A at $N_{Re} = 8.4\times10^4$ (turbulent, flat part of the curve): $N_P$ = 5.8.

4. **Power** (SI, $g_c$ = 1):
$$P = N_P\,\rho\,n^3 D_a^5 = 5.8(1500)(1.5)^3(0.67)^5 = 5.8(1500)(3.375)(0.1350) = 3964\ \mathrm{W}$$

**Result:** P ≈ **3.96 kW** (5.3 hp), delivered to the liquid (motor rating higher to cover gear and seal losses).`,
          answer: String.raw`Curve A (S₄ = 0.2, 4 baffles); N_Re = 8.42×10⁴ → N_P = 5.8; P = 5.8×1500×1.5³×0.67⁵ ≈ 3.96 kW (5.3 hp).` }
      ] },
    { id: "2022-23-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2022-23-Q8a", label: "(a)", marks: "2+8=10",
          topic: "size-reduction", sub: "Ball-mill critical speed: definition and derivation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`What is the speed beyond which grinding action in a ball mill is negligible? Establish and prove the mathematical relationship of the speed.`,
          solution: String.raw`**The speed:** the **critical speed** $n_c$, the lowest speed at which the balls are carried right round in contact with the shell (centrifuging). At and above it there is no relative motion between balls and shell, no cascading or cataracting, so the grinding action is negligible (and the lining wears). Mills are run at about 50–75% (typically 65–80% in practice) of $n_c$.

![Forces on a ball in contact with the mill shell: weight mg and centrifugal force mω²(R−r); the ball leaves the wall where the radial component of mg equals the centrifugal force](fig/2022-23-Q8a-sol.svg)

**Derivation**

1. A ball of mass m and radius r rides on the shell of a mill of radius R; its centre moves on a circle of radius (R − r) at angular velocity ω = 2πn.
2. Forces on the ball in the radial direction at the angle α measured from the vertical (top of the mill): the centrifugal force outward $F_c = m\omega^2(R-r)$; the component of the weight toward the centre $mg\cos\alpha$.
3. The ball stays against the wall while $F_c \ge mg\cos\alpha$. It leaves the wall (begins to fall, giving the grinding action) at the angle where
$$m\omega^2(R-r) = mg\cos\alpha \Rightarrow \cos\alpha = \frac{4\pi^2n^2(R-r)}{g}$$
4. As n increases, α decreases: the balls are carried higher before they fall. At the **critical speed** they are carried right to the top, α = 0, cos α = 1:
$$4\pi^2 n_c^2 (R-r) = g$$
5. Hence
$$\boxed{n_c = \frac{1}{2\pi}\sqrt{\frac{g}{R-r}}}$$
   In practical units, with D and d the mill and ball diameters in m, $n_c = \frac{42.3}{\sqrt{D-d}}$ r/min (and $\approx 42.3/\sqrt{D}$ when d ≪ D).

**Example:** a 1.2 m mill with 75 mm balls: $n_c = \frac{1}{2\pi}\sqrt{9.81/(0.6-0.0375)} = 0.665$ r/s = 39.9 r/min; operate at ≈ 26–30 r/min.`,
          answer: String.raw`The critical speed: at the top of the shell centrifugal force = weight, mω²(R−r) = mg, so n_c = (1/2π)√(g/(R−r)) (= 42.3/√(D−d) r/min); above it the balls centrifuge and grinding stops; run at 50–75% of n_c.` },
        { id: "2022-23-Q8b", label: "(b)", marks: "10+5=15",
          topic: "size-reduction", sub: "Gyratory vs Blake jaw crusher as primary crusher",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`What are the criteria that generally influence the choice between Gyratory and Blake Jaw Crusher as Primary crushers? Explain with proper schematic.`,
          solution: String.raw`![Schematics: Blake jaw crusher (fixed anvil jaw, swing jaw driven by pitman and toggle) and gyratory crusher (conical head gyrating eccentrically inside a fixed bowl)](fig/2022-23-Q8b-sketch.svg)

**Blake jaw crusher.** Two jaws form a V open at the top; one (anvil) is fixed and nearly vertical, the other (swing jaw) is pivoted at the top and moved by an eccentric, pitman and toggle plates, reciprocating 250–400 times/min with the largest movement at the bottom (fixed discharge opening). Angle between jaws 20–30°. Crushing is **intermittent** (only on the forward stroke). Large units: 1.8 × 2.4 m feed opening, 1.8 m lumps, ≈ 1200 t/h.

**Gyratory crusher.** A conical crushing head, mounted on a long shaft suspended from a spider and driven eccentrically at the bottom, gyrates (125–425 gyrations/min) inside a funnel-shaped bowl. At every instant some part of the annular gap is closing, so crushing is **continuous**. Largest units handle ≈ 4500 t/h.

**Criteria for the choice**

| Criterion | Blake jaw crusher | Gyratory crusher |
|---|---|---|
| Capacity | small to medium (up to ~1000 t/h) | large (≈ 500–4500 t/h); continuous action gives about 2–3 times the capacity of a jaw of the same gape |
| Feed opening vs capacity | large gape for the capacity: preferred for big lumps at low throughput. Rule of thumb (Taggart): if t/h < 162 × (gape, m)², use a jaw crusher | narrow annular gape for the capacity: preferred when the throughput is high relative to the largest lump |
| Feed arrangement | needs a feeder (apron/grizzly); not choke-fed | can be **choke-fed directly from trucks/railcars** (no feeder), bowl acts as hopper |
| Material | handles sticky, clayey, slabby or very hard and tough rock better (simple, robust; open chamber does not pack) | best for hard, abrasive, slabby-free ore; sticky feed tends to pack in the bowl |
| Power and maintenance | intermittent action: higher power peaks (flywheel), simple to maintain and adjust, low head room | smoother power demand, less power and maintenance per tonne, but complex, very tall (deep pit) |
| Cost and installation | lower capital, lighter foundation, portable versions; easy to transport | high capital, heavy and tall structure; economical only at large tonnage |
| Product | slightly more slabby product, more oversize | more uniform, cubic product |

**Summary:** for low to moderate tonnage with large lumps, sticky or variable feed, limited headroom and low capital, choose the Blake jaw crusher; for high tonnage hard ore in large mines and quarries, fed directly from haul trucks, choose the gyratory crusher.`,
          answer: String.raw`Jaw (Blake): intermittent, large gape for its capacity, lower cost/headroom, needs feeder, good for sticky or tough feed, up to ~1000 t/h; gyratory: continuous, high capacity (to 4500 t/h), choke-fed from trucks, lower power/maintenance per t, tall and costly. Rule: t/h < 162 (gape, m)² → jaw, otherwise gyratory.` },
        { id: "2022-23-Q8c", label: "(c)", marks: "5",
          topic: "dust-collection", sub: "Avoiding particle re-entrainment in electrostatic precipitators",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`How could you avoid particles re-entrainment problem in electrostatic precipitation?`,
          solution: String.raw`Re-entrainment has two causes (course slides, Mech. sep. 2-3):

**1. Low particle resistivity** (large fly-ash particles with unburnt carbon, carbon black). The particle loses its negative charge to the grounded plate, picks up positive charge and is repelled back into the gas.
- Put a **high-efficiency cyclone ahead of the ESP** to remove the coarse, low-resistivity fly ash.
- For carbon black (too fine for cyclones): let the ESP **agglomerate** the particles and collect the agglomerates in **cyclones after the ESP**.
- Condition the gas (temperature, moisture, SO₃/NH₃) to bring the resistivity into the good range, 10⁷–10¹⁰ Ω·cm.

**2. Erosion (scouring) of the deposit from the collecting electrodes** by locally high gas velocity and turbulence.
- Uniform gas distribution with perforated distribution plates and turning vanes; keep the gas velocity low (≈ 1–2 m/s).
- **Baffles** on the collecting plates to shield the deposited dust from the gas stream.
- **Catch pockets** that convey the precipitated dust into a quiescent zone behind the collecting electrode.

**Also:** correct **rapping** (frequency and intensity) so the dust falls as sheets/agglomerates into the hoppers, rapping sections in sequence (not all at once), hopper baffles to stop gas sneakage through the hoppers, and continuous hopper emptying; or use a **wet ESP** (deposit washed off by a water film), which eliminates rapping re-entrainment.`,
          answer: String.raw`Low resistivity: cyclone before the ESP (fly ash), agglomerate then cyclone after (carbon black), gas conditioning. Scouring: uniform low-velocity gas distribution, baffles on plates, catch pockets; plus proper sequential rapping, hopper baffles, or a wet ESP.` }
      ] }
  ]
});
