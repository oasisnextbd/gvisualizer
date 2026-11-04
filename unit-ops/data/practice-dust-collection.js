QB.paper({ year: "Practice", set: "Dust collection: cyclones, scrubbers, fabric filters, ESP", date: "", marks: 0, practice: true,
  rules: String.raw`Gas–solid separation: the slide questions on fabric filters, Ludwig's cyclone-system pressure drop and MSH cyclone problems, and exam-style cyclone design and grade-efficiency, baghouse sizing (air-to-cloth ratio, net and gross cloth area), ESP sizing with the Deutsch equation and its derivation, and theory on ESP charging, baghouse configuration and inertial separators.`,
  questions: [
    { id: "practice-dust-collection-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-dust-collection-P1a", label: "(a)", marks: "", topic: "dust-collection",
          sub: "Slide question: types of fabric filter and when each is used", type: "theory", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Mech. sep. Lecture 1, "Fabric Filtration (Cloth/Bag Filter)" slide question "Types of Fabric Filter? When we will use it?"`,
          text: String.raw`What types of fabric filter are there (bag and cartridge), and when would you use a fabric filter rather than another dust collector?`,
          solution: String.raw`### Types
- **Bag filters (baghouses):** cylindrical or envelope bags of woven or felted fabric in a housing. Classified by cleaning method:
  - *shaker* (low energy, woven bags, A/C 1:1–3:1, off-line compartments);
  - *reverse-air* (low energy, woven glass bags, large boiler units);
  - *pulse-jet* (high energy, felt bags on cages, A/C 5:1–10:1, cleaned on-line).
- **Cartridge filters:** pleated media (cellulose/polyester, often PTFE-membrane coated) packed into compact cylinders; large area in small space, pulse-cleaned; for light loadings, fine dusts and limited space; changed as a unit.

### When to use a fabric filter
- Fine dust (down to ≈ 0.1–1 µm) with very high efficiency required (> 99–99.9%), e.g. strict emission limits.
- Dry, valuable dust to be recovered dry (cement, flour, pigments, pharmaceuticals).
- Gas temperature below the fabric limit (cotton 180°F, wool 200°F, synthetics ≈ 275°F, glass 550–650°F) and above the dew point.
- Moderate loadings (heavy loads first go through a cyclone).

Avoid them for wet, sticky or condensing gas (blinding, mud), very hot gas without cooling, or where a spark could ignite the cake without precautions; then use a wet scrubber or ESP.`,
          answer: String.raw`Bag filters (shaker, reverse-air, pulse-jet; woven or felt) and cartridge filters (pleated, compact). Use for fine dry dust, > 99% efficiency, dry product recovery, gas between its dew point and the fabric temperature limit; not for wet/sticky gas.` },
        { id: "practice-dust-collection-P1b", label: "(b)", marks: "", topic: "dust-collection",
          sub: "Slide question: problems caused by high humidity in a fabric filter", type: "theory", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Mech. sep. Lecture 2_3, "Operating temperature" slide question "What problem can occur due to increased level of humidity?"`,
          text: String.raw`What problem can occur in a fabric filter due to an increased level of humidity, and how is it prevented?`,
          solution: String.raw`- **Condensation and "mudding":** if the gas or the housing falls below the dew point, water (and acid) condenses on the dust and bags. Wetted dust bridges and forms mud that **plugs (blinds) the fabric**; the pressure drop rises steeply, cleaning by shaking or pulsing no longer releases the cake, gas flow falls, and bags may tear.
- **Corrosion:** condensed SO₃/H₂SO₄ or HCl attacks carbon-steel housings and hoppers and some fabrics (hydrolysis of polyester and nylon at high humidity and temperature).
- **Hygroscopic dusts** (salts, fertilisers, sugars) cake and stick even above the dew point.
- **Hopper bridging:** damp dust does not discharge.

Moderate humidity can help: with some dusts and fabrics 60% RH filters better than 20% RH (cake builds faster, less electrostatic charge).

**Prevention:** keep the gas 15–25°C above its dew point: insulate the housing and hoppers, heat the hoppers or the gas, preheat the baghouse with hot dry air before admitting process gas, use warm dry dilution air, eliminate air in-leakage; choose water-repellent or membrane-coated bags; stainless steel only where condensation cannot be avoided.`,
          answer: String.raw`Below the dew point moisture condenses: dust bridges and muds, blinding bags (high ΔP, failed cleaning), corrosion and hopper plugging. Keep the gas above the dew point (insulate/heat, preheat, dry dilution air, stop leaks), use suitable bags.` } ] },

    { id: "practice-dust-collection-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-dust-collection-P2", label: "", marks: "", topic: "dust-collection",
        sub: "Cyclone system pressure drop for a bagging operation fan", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 4-6 "Cyclone System Pressure Drop" (Fig. 4-48)`,
        text: String.raw`A cyclone system is to be installed as part of a bagging operation (Ludwig Fig. 4-48): the fan discharges 4000 ft³/min of air at 70°F (ρ = 0.075 lb/ft³, μ = 0.018 cP) through a 16-in. inlet duct (area 1.398 ft², about 18 ft long, point 1 to 2), a duct-to-cyclone transition (2 to 3), a cyclone of the Fig. 4-41 proportions with inlet area 2.0 ft² (3 to 4), and a 24-in. exit duct 4.5 ft long (area 3.14 ft², 4 to 5) open to the atmosphere. Determine the head required for purchase of the fan.`,
        solution: String.raw`**Given:** Q = 4000 ft³/min = 66.67 ft³/s; ρ = 0.075 lb/ft³; areas 1.398, 2.0, 3.14 ft².

**Find:** total pressure drop (fan static head), in. water.

**Assumptions:** velocity head $h_v = V^2/(4005)^2 \approx V^2/(16\times10^6)$ in. water with V in ft/min (air at 0.075 lb/ft³); smooth duct friction factors (Fanning f = 0.0038 and 0.004); transition loss taken as 1 velocity head (conservative); cyclone loss 8 inlet velocity heads.

1. **Velocities and velocity heads:**

| Section | Area, ft² | V, ft/s | $h_v$, in. water |
|---|---|---|---|
| inlet duct | 1.398 | 47.7 | 0.50 |
| cyclone inlet | 2.0 | 33.3 | 0.25 |
| exit duct | 3.14 | 21.2 | 0.10 |

2. **Duct 1 → 2:** $N_{Re} = \rho VD/\mu = 0.075(47.7)(1.333)/(0.018 \times 6.72\times10^{-4}) = 3.9\times10^5$, f = 0.0038:
$$\frac{4fL}{D} = \frac{4(0.0038)(17.9)}{1.333} = 0.204\ \text{velocity heads} \Rightarrow 0.204(0.50) = 0.102\ \mathrm{in.}$$

3. **Transition 2 → 3:** 1 velocity head of the duct = 0.50 in.

4. **Cyclone 3 → 4:** for the Fig. 4-41 cyclone ($W_c = D_c/4$, $H_c = D_c/2$, $D_e = D_c/2$), $F_{cv} = KW_cH_c/D_e^2 = 16(1/4)(1/2)/(1/2)^2 = 8$ inlet velocity heads:
$$8(0.25) = 2.0\ \mathrm{in.}$$

5. **Exit duct 4 → 5:** $N_{Re} = 2.8\times10^5$, f = 0.004: $4fL/D = 4(0.004)(4.5)/2 = 0.036$ heads → 0.036(0.10) = 0.0036 in.

6. **Total (mechanical-energy balance between fan outlet and atmosphere):**
$$\Delta P = \Sigma\text{friction} + h_{v,5} - h_{v,1} = (0.102 + 0.50 + 2.0 + 0.0036) + 0 - 0.50 = 2.10\ \mathrm{in.\ water}$$
   Point 5 discharges to the atmosphere with no back pressure; its velocity head is lost, so it is counted as zero recovered (Ludwig).

**Result:** the fan must develop about **2.1 in. water** static pressure at 4000 ft³/min (book: 2.10 in. water). The cyclone itself takes 2.0 of the 2.6 in. of friction loss.`,
        answer: String.raw`h_v: duct 0.50, cyclone inlet 0.25, exit 0.10 in.; losses 0.102 + 0.50 + 8(0.25) = 2.0 + 0.0036; ΔP = 2.606 − 0.50 = 2.10 in. water (Ludwig: 2.10).` } ] },

    { id: "practice-dust-collection-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-dust-collection-P3", label: "", marks: "", topic: "dust-collection",
        sub: "600 mm cyclone at 18 m/s: separation factor and removal of 20 µm particles", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Problem 30.11 (p. 1076), with Eq. (30.74) and Fig. 30.39 (collection efficiency of typical cyclones)`,
        text: String.raw`Air carrying particles of density 1800 kg/m³ and an average diameter of 20 µm enters a cyclone at a linear velocity of 18 m/s. The diameter of the cyclone is 600 mm. (a) What is the approximate separation factor for this cyclone? (b) What fraction of the particles would be removed from the gas stream?`,
        solution: String.raw`**Given:** $\rho_p$ = 1800 kg/m³, $D_p$ = 20 µm, $u$ = 18 m/s (59 ft/s), D = 0.60 m (23.6 in.); air μ ≈ 1.8×10⁻⁵ Pa·s.

**Find:** separation factor, fraction removed.

**Assumptions:** tangential velocity near the wall ≈ inlet velocity; Fig. 30.39 curves are for $\rho_p$ = 155 lb/ft³ (2483 kg/m³) and inlet velocity ≈ 59–60 ft/s.

1. **(a) Separation factor** (MSH Eq. 30.74, r = D/2 = 0.30 m):
$$\frac{F_c}{F_g} = \frac{u^2}{rg} = \frac{18^2}{0.30(9.81)} = 110$$
   (MSH's own illustration: 1 ft cyclone at 50 ft/s gives 155.)

2. **(b) Equivalent size on Fig. 30.39:** cyclone separation depends on $\rho_pD_p^2$ (Stokes drift), so a 1800 kg/m³ particle of 20 µm behaves like a chart particle of
$$D_{p,eq} = 20\sqrt{\frac{1800}{2483}} = 17\ \mu\mathrm{m}$$

3. **Read Fig. 30.39:** the inlet velocity (59 ft/s) matches the chart. The cyclone (23.6 in.) lies between curve A (14 in.) and curve B (31 in.). At 17 µm, curve A ≈ 99% and curve B ≈ 97–98%. Interpolating: **about 98%**.

4. **Check with Lapple's cut size** ($B = D/4 = 0.15$ m, $N_t$ = 5):
$$d_{50} = \sqrt{\frac{9\mu B}{2\pi N_tu\rho_p}} = \sqrt{\frac{9(1.8\times10^{-5})(0.15)}{2\pi(5)(18)(1800)}} = 4.9\ \mu\mathrm{m}, \qquad \eta = \frac{1}{1 + (4.9/20)^2} = 94\%$$
   Both estimates give a very high removal for 20 µm dust; the chart value, based on measured commercial cyclones, is preferred.

**Result:** (a) separation factor ≈ 110; (b) about 95–98% removed (Fig. 30.39 ≈ 98%).

> Because the feed is described only by an average diameter, the real overall efficiency will be lower if the dust contains many fines; MSH warns that the overall efficiency is a function of the whole size distribution.`,
        answer: String.raw`(a) u²/(rg) = 18²/(0.3 × 9.81) ≈ 110; (b) equivalent chart size 20√(1800/2483) = 17 µm → Fig. 30.39 (between curves A and B) ≈ 98% (Lapple d₅₀ = 4.9 µm gives 94%).` } ] },

    { id: "practice-dust-collection-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw`A single cyclone of standard proportions (slide figure: inlet width $W = D/4$, inlet height 2.5$W$, gas outlet $D_o = D/2$) is to clean 6000 ft³/min of air at 150°F (ρ = 0.065 lb/ft³, μ = 0.0195 cP) carrying 5 grains/ft³ of limestone dust ($\rho_p$ = 168 lb/ft³). The inlet velocity should be about 3000 ft/min. Use the slide relations
$$(D_p)_{crit} = \left[\frac{9\mu D}{4\pi N_tV(\rho_p - \rho_g)}\right]^{0.5}, \qquad N_t = [0.1079 - 0.00077V + 1.924\times10^{-6}V^2]V\ (V\ \mathrm{in\ ft/s}), \qquad \Delta P = \frac{4\rho V^2}{2g_c}$$
and the chart of percent removed against $D_p/(D_p)_{crit}$. The dust size distribution is:

| Size range, µm | 0–5 | 5–10 | 10–20 | 20–30 | 30–50 | 50–70 |
|---|---|---|---|---|---|---|
| Mean size, µm | 2.5 | 7.5 | 15 | 25 | 40 | 60 |
| Mass fraction | 0.10 | 0.15 | 0.20 | 0.25 | 0.20 | 0.10 |`,
      parts: [
        { id: "practice-dust-collection-P4a", label: "(a)", marks: "10", topic: "dust-collection",
          sub: "Cyclone sizing: barrel diameter, inlet, N_t and critical diameter", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Lecture 2_2 cyclone slides (inlet velocity 1000–4000 ft/min, rectangular inlet, critical particle diameter, N_t); own numbers`,
          text: String.raw`Size the cyclone (barrel diameter, inlet and outlet dimensions), and find the actual inlet velocity, the number of turns $N_t$ and the critical particle diameter.`,
          solution: String.raw`**Given:** Q = 6000 ft³/min = 100 ft³/s; target $V$ = 3000 ft/min = 50 ft/s; μ = 0.0195 × 6.72×10⁻⁴ = 1.310×10⁻⁵ lb/ft·s; $\rho_p - \rho_g$ = 167.9 lb/ft³.

**Find:** D, inlet W × H, $D_o$, V, $N_t$, $(D_p)_{crit}$.

**Assumptions:** slide proportions (W = D/4, H = 2.5W, so inlet area $2.5D^2/16$); other dimensions from the standard figure.

1. **Inlet area and barrel diameter:** $A_i = Q/V = 100/50 = 2.0$ ft² $= 2.5D^2/16$
$$D = \sqrt{\frac{16(2.0)}{2.5}} = 3.58\ \mathrm{ft} \rightarrow \text{take } D = 3.5\ \mathrm{ft}$$
   (the smaller diameter gives slightly higher efficiency).

2. **Dimensions:** W = 3.5/4 = 0.875 ft; H = 2.5(0.875) = 2.19 ft; $A_i$ = 1.914 ft²; gas outlet $D_o = D/2 = 1.75$ ft; cylinder $H_c$ = 2D = 7.0 ft; overall height ≈ 4D = 14 ft; dust outlet ≈ D/4 = 0.875 ft.

3. **Actual inlet velocity:** V = 100/1.914 = 52.2 ft/s = 3130 ft/min (inside 1000–4000 ft/min). Outlet velocity 100/[(π/4)(1.75)²] = 41.6 ft/s.

4. **Number of turns:**
$$N_t = [0.1079 - 0.00077(52.2) + 1.924\times10^{-6}(52.2)^2](52.2) = 0.0729(52.2) = 3.81$$
   Above 1–2, so re-entrainment is not expected (slides: normally ≈ 5).

5. **Critical diameter:**
$$(D_p)_{crit} = \left[\frac{9(1.310\times10^{-5})(3.5)}{4\pi(3.81)(52.2)(167.9)}\right]^{0.5} = 3.13\times10^{-5}\ \mathrm{ft} = 9.6\ \mu\mathrm{m}$$

![Designed cyclone: D = 3.5 ft, inlet 0.875 × 2.19 ft, gas outlet 1.75 ft, cylinder 7 ft, overall about 14 ft](fig/practice-dust-collection-P4a-sol.svg)

**Result:** D = 3.5 ft; inlet 0.875 ft × 2.19 ft; outlet 1.75 ft; V = 52.2 ft/s (3130 ft/min); $N_t$ = 3.8; $(D_p)_{crit}$ ≈ 9.6 µm.`,
          answer: String.raw`A_i = 2.0 ft² = 2.5D²/16 → D = 3.58, use 3.5 ft; inlet 0.875 × 2.19 ft, D_o = 1.75 ft; V = 52.2 ft/s; N_t = 3.81; (D_p)crit = 9.6 µm.` },
        { id: "practice-dust-collection-P4b", label: "(b)", marks: "10", topic: "dust-collection",
          sub: "Cyclone grade efficiency and overall efficiency for a size distribution", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Lecture 2_2 slide chart "Percent removal of particles in a cyclone as a function of their diameters relative to the critical diameter"; own numbers`,
          text: String.raw`Using the chart of percent removed against $D_p/(D_p)_{crit}$, find the collection efficiency of each size fraction and the overall efficiency. What are the outlet loading and the dust collected (lb/h)? Compare with Lapple's curve $\eta = 1/[1 + (d_{50}/d)^2]$.`,
          solution: String.raw`**Given:** $(D_p)_{crit}$ = 9.6 µm (part a); inlet 5 gr/ft³, 6000 ft³/min.

**Find:** grade efficiencies, overall η, outlet loading, mass collected.

**Assumptions:** each size fraction is collected independently (overall η = Σ $x_i\eta_i$); chart read at $D_p/(D_p)_{crit}$ of each mean size.

1. **Grade efficiencies** (chart reading path: enter the ratio on the vertical log axis, go across to the curve, down to percent removed):

| $D_p$, µm | $x_i$ | $D_p/(D_p)_{crit}$ | $\eta_i$ (chart), % | $x_i\eta_i$ | Lapple $\eta_i$, % |
|---|---|---|---|---|---|
| 2.5 | 0.10 | 0.26 | 8 | 0.8 | 6 |
| 7.5 | 0.15 | 0.78 | 42 | 6.2 | 38 |
| 15 | 0.20 | 1.57 | 64 | 12.9 | 71 |
| 25 | 0.25 | 2.62 | 77 | 19.3 | 87 |
| 40 | 0.20 | 4.19 | 87 | 17.3 | 95 |
| 60 | 0.10 | 6.28 | 94 | 9.4 | 97 |
| | | | **overall** | **65.9** | 71 |

2. **Overall efficiency:** η ≈ **66%** (chart); Lapple's curve with $d_{50} = (D_p)_{crit}$ gives 71%.

3. **Outlet loading:** $c_{out} = 5(1 - 0.66) = 1.7$ gr/ft³.

4. **Mass rates:** in $= 5 \times 6000 \times 60/7000 = 257$ lb/h; out = 0.34(257) = 88 lb/h; collected ≈ 169 lb/h.

**Result:** η ≈ 66% overall (Lapple 71%), outlet ≈ 1.7 gr/ft³; 169 lb/h collected and 88 lb/h passed on. The cyclone is a good pre-cleaner but the fines (< 10 µm, 25% of the mass) need a fabric filter or ESP downstream; a smaller-diameter cyclone or multiclone would raise the efficiency.`,
          answer: String.raw`Ratios 0.26–6.3 → η_i ≈ 8, 42, 64, 77, 87, 94%; overall ≈ 66% (Lapple 71%); outlet ≈ 1.7 gr/ft³; 257 lb/h in, ≈ 169 lb/h collected, 88 lb/h out.` },
        { id: "practice-dust-collection-P4c", label: "(c)", marks: "5", topic: "dust-collection",
          sub: "Cyclone pressure drop: slide formula versus Ludwig velocity-head method", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Lecture 2_2 slide "Inlet Velocity" (ΔP = 4ρV²/2g); Ludwig Eqs. 4-53 and 4-56`,
          text: String.raw`Estimate the cyclone pressure drop in inches of water using the slide formula, and compare it with Ludwig's method ($h_{vi} = 0.003\rho V^2$ in. water, $F_{cv} = 16WH/D_o^2$ velocity heads).`,
          solution: String.raw`**Given:** V = 52.2 ft/s, ρ = 0.065 lb/ft³; W = 0.875, H = 2.19, $D_o$ = 1.75 ft.

1. **Slide formula (4 velocity heads):**
$$\Delta P = \frac{4\rho V^2}{2g_c} = \frac{4(0.065)(52.2)^2}{2(32.174)} = 11.0\ \mathrm{lb_f/ft^2} = \frac{11.0}{5.20} = 2.1\ \mathrm{in.\ water}$$

2. **Ludwig:** $h_{vi} = 0.003(0.065)(52.2)^2 = 0.53$ in. water;
$$F_{cv} = \frac{16(0.875)(2.19)}{(1.75)^2} = 10\ \text{heads} \Rightarrow \Delta P = 10(0.53) = 5.3\ \mathrm{in.\ water}$$

3. **Comment:** both lie in the usual 0.5–8 in. water range. The slide value counts only about 4 heads; the Lapple/Ludwig correlation (inlet contraction, solids acceleration, barrel friction, flow reversal, exit contraction) gives 8–10 heads for these proportions and is the safer basis for fan selection. Manufacturers' data are the most reliable.

**Result:** ≈ 2.1 in. water (slide formula); ≈ 5.3 in. water (Ludwig, 10 velocity heads); specify the fan for about 5–6 in. water.`,
          answer: String.raw`Slide: 4ρV²/2g_c = 11.0 lbf/ft² ≈ 2.1 in. water. Ludwig: h_vi = 0.53 in., F_cv = 16WH/D_o² = 10 heads → 5.3 in. water. Use ≈ 5–6 in. for the fan.` } ] },

    { id: "practice-dust-collection-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw`A cement mill vent of 10 Nm³/s (0°C, 1 atm) at 120°C carries 30 g/Nm³ of cement dust to a baghouse. Bags are 0.20 m in diameter and 5 m long. Recommended air-to-cloth ratio for cement mills (Ludwig Table 4-13): 1.5–2 ft³/min per ft² of cloth; slides: 0.010–0.020 m/s for shaker units.`,
      parts: [
        { id: "practice-dust-collection-P5a", label: "(a)", marks: "10", topic: "dust-collection",
          sub: "Shaker baghouse: net and gross cloth area, number of bags, compartments", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Lecture 2_3 slides "Air-to-Cloth Ratio", "Net and Gross Cloth Area", "Bag House Design" (steps 1–4); Ludwig Table 4-13`,
          text: String.raw`Design a shaker baghouse at A/C = 0.010 m/s (≈ 2 ft/min) with six compartments, one off-line for cleaning at any time. Find the actual gas flow, the net cloth area, the gross cloth area, the number of bags (total and per compartment) and the A/C ratio with all compartments on line. How much dust is collected per hour at 99.9% efficiency, and what is the outlet loading?`,
          solution: String.raw`**Given:** $Q_N$ = 10 Nm³/s; T = 393.15 K; A/C = 0.010 m/s; bag 0.20 m × 5 m; 6 compartments.

**Find:** $Q_a$, $A_{nc}$, $A_{tc}$, bags, dust collected.

**Assumptions:** ideal gas at ≈ 1 atm in the baghouse; net area = area on line while one compartment is shaken.

1. **Actual flow:** $Q_a = 10 \times 393.15/273.15 = 14.39$ m³/s (30,500 acfm). The A/C ratio is always based on **actual** flow.

2. **Net cloth area** (slide step 2): $A_{nc} = Q_a/(A/C) = 14.39/0.010 = 1439$ m² (15,500 ft²).

3. **Area of one bag** (step 3): $\pi DL = \pi(0.20)(5) = 3.142$ m². Bags needed on line: 1439/3.142 = 458.

4. **Gross cloth area:** with 6 compartments and 1 off-line, 5 must carry the full flow:
$$A_{tc} = A_{nc}\frac{6}{5} = 1727\ \mathrm{m^2} \Rightarrow \frac{1727}{3.142} = 550\ \text{bags} \Rightarrow 92\ \text{bags per compartment}$$
   Installed: 6 × 92 = 552 bags, 1734 m².

5. **Checks:** during cleaning (5 × 92 = 460 bags on line) A/C = 14.39/(460 × 3.142) = 0.0100 m/s ✓; all on line A/C = 0.0083 m/s.

6. **Dust:** in = 30 g/Nm³ × 10 Nm³/s = 300 g/s = 1080 kg/h; collected at 99.9% ≈ 1079 kg/h; outlet = 30 mg/Nm³ (0.03 g/Nm³).

**Result:** $Q_a$ = 14.4 m³/s; net 1439 m²; gross ≈ 1730 m²; 552 bags (6 × 92); 1079 kg/h collected, 30 mg/Nm³ emitted.

> The housing should be insulated (keep 120°C gas above its dew point) and the bags rated for 120°C (polyester ≈ 135°C max); for a heavier load a cyclone pre-cleaner reduces the cleaning frequency.`,
          answer: String.raw`Q_a = 14.39 m³/s; A_nc = 1439 m²; bag 3.14 m² → 458 on line; gross = 1439 × 6/5 = 1727 m² → 552 bags (6 × 92); A/C all on line 0.0083 m/s; 1080 kg/h in, outlet 30 mg/Nm³.` },
        { id: "practice-dust-collection-P5b", label: "(b)", marks: "6", topic: "dust-collection",
          sub: "Pulse-jet alternative: cloth area, bag type and cleaning comparison", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Lecture 2_3 slides (high-energy pulse-jet, felt vs woven, A/C ratios); own numbers`,
          text: String.raw`The same duty is handled by a pulse-jet baghouse with felt bags 0.15 m × 3 m at A/C = 0.04 m/s (≈ 8 ft/min). Find the cloth area and number of bags, and give three reasons why the pulse-jet unit can run at four times the A/C ratio of the shaker unit, and one disadvantage.`,
          solution: String.raw`1. **Cloth area:** $A = 14.39/0.04 = 360$ m² (cleaned on line, so net ≈ gross; add ≈ 10% for maintenance).

2. **Bags:** one bag = π(0.15)(3) = 1.414 m²; 360/1.414 = 255 bags (≈ 280 with spare area).

3. **Why a higher A/C is possible:**
   - **Felt media** are tighter and act as a true filter; they hold the dust on the surface and resist seepage at high face velocity (woven fabrics are only a support on which the cake filters and are limited to about 1.5–3 ft/min).
   - **On-line, frequent, short pulses** of compressed air remove the cake every few minutes, so the cake stays thin and ΔP stays within 5–20 in. water; no compartment has to be taken off line.
   - **High-energy cleaning** dislodges dust more completely than shaking; residual cake is lower.

4. **Disadvantages:** compressed-air consumption and cost; felt bags on cages wear by flexing and abrasion; very high A/C can blow fines through the fabric (bleed-through) and lower efficiency, and sticky dusts blind felts.

**Result:** about 360 m² and 255 felt bags (vs 1730 m² and 552 bags for the shaker unit): a much smaller housing, at the price of compressed air and bag wear.`,
          answer: String.raw`A = 14.39/0.04 = 360 m²; bag 1.414 m² → ≈ 255 bags. Felt media, on-line frequent pulse cleaning and thin cake allow A/C ≈ 8 ft/min; drawbacks: compressed air, bag wear, possible bleed-through.` } ] },

    { id: "practice-dust-collection-P6", q: 6, section: "S", compulsory: false,
      stem: String.raw`A pulverized-coal boiler produces 200 m³/s of flue gas carrying fly ash at 15 g/m³. An electrostatic precipitator is to reach 99.5% collection. Drift velocities from the slide table (Table 9.2): pulverized coal (fly ash) 0.33–0.44 ft/s.`,
      parts: [
        { id: "practice-dust-collection-P6a", label: "(a)", marks: "12", topic: "dust-collection",
          sub: "ESP collecting area by Deutsch and block-flow models; number of plates", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Lecture 2_3 slides "Design Equations" (η = ωA/Q block flow, η = 1 − exp(−ωA/Q) mixed flow; A = Lh; Q = HhV) and Table 9.2 drift velocities`,
          text: String.raw`Using a drift velocity of 0.36 ft/s, find the collecting area by the mixed-flow (Deutsch) equation and by the block-flow equation, and explain the difference. Plates are 10 m high and 5 m long and collect on both faces; find the number of gas passages. What is the outlet dust concentration?`,
          solution: String.raw`**Given:** Q = 200 m³/s; η = 0.995; ω = 0.36 ft/s = 0.1097 m/s; plate face 10 m × 5 m.

**Find:** A (both models), number of passages, outlet loading.

**Assumptions:** uniform gas distribution; all passages identical; each passage bounded by two collecting faces.

1. **Mixed flow (Deutsch):** $\eta = 1 - e^{-\omega A/Q}$
$$A = -\frac{Q}{\omega}\ln(1 - \eta) = \frac{200}{0.1097}\ln\frac{1}{0.005} = 1823(5.298) = 9660\ \mathrm{m^2}$$

2. **Block (laminar, plug) flow:** $\eta = \omega A/Q$
$$A = \frac{\eta Q}{\omega} = \frac{0.995(200)}{0.1097} = 1814\ \mathrm{m^2}$$

3. **Why they differ:** in block flow every particle moves steadily toward the plate and none is re-mixed, so the area needed rises only linearly with η and 100% removal is possible with finite area. In real precipitators turbulence keeps the uncollected dust uniformly mixed across the passage; only the dust in the thin layer next to the plate is caught in each length element, so penetration falls exponentially and very high efficiencies need large areas. The Deutsch (mixed) model is used for design; drift velocities in Table 9.2 are back-calculated with it.

4. **Passages:** each passage has 2 faces × 50 m² = 100 m²: 9660/100 = 96.6 → **97 passages** (9700 m², 98 plates).

5. **Check and gas velocity:** with 9700 m², η = 1 − exp(−0.1097 × 9700/200) = 99.51%. With 0.30 m plate spacing the flow area is 97 × 0.30 × 10 = 291 m², gas velocity 0.69 m/s (typical 0.6–1.5 m/s; low velocity limits re-entrainment).

6. **Outlet loading:** 15(1 − 0.995) = 0.075 g/m³ = 75 mg/m³.

**Result:** Deutsch area ≈ 9660 m² (97 passages of 10 × 5 m plates); block flow would need only 1814 m² but is optimistic. Outlet 75 mg/m³. Over the table range of ω (0.33–0.44 ft/s) the area is 7900–10,500 m².`,
          answer: String.raw`ω = 0.1097 m/s; Deutsch A = (Q/ω)ln(1/0.005) = 9660 m²; block flow A = ηQ/ω = 1814 m²; 97 passages (2 × 50 m² each, 9700 m²); outlet 75 mg/m³.` },
        { id: "practice-dust-collection-P6b", label: "(b)", marks: "8", topic: "dust-collection",
          sub: "ESP performance at 25% higher gas flow; single-passage length for 99%", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Lecture 2_3 slides "Design Equations" (A = Lh, Q = HhV); own numbers`,
          text: String.raw`(i) The boiler is uprated and the gas flow rises by 25%. What is the new efficiency and outlet loading of the 9700 m² precipitator? (ii) For a single wire-to-plate passage (H = 0.125 m wire-to-plate spacing, average gas velocity 1.5 m/s, ω = 0.10 m/s), find the plate length needed for 90%, 99% and 99.9% removal by the mixed-flow model.`,
          solution: String.raw`1. **(i) Higher flow:**
$$\eta = 1 - \exp\left(-\frac{0.1097(9700)}{1.25(200)}\right) = 1 - e^{-4.26} = 98.6\%$$
   Outlet = 15(0.0141) = 0.21 g/m³ = 212 mg/m³, almost **three times** the original 75 mg/m³ although the flow rose only 25%: penetration is exponential in A/Q. Fixes: add a field, improve resistivity by gas conditioning, or install a pre-cleaner.

2. **(ii) Single passage:** for one plate face of length L and height h facing a row of wires, $A = Lh$ and the gas flow between them is $Q = HhV$, so
$$\eta = 1 - \exp\left(-\frac{\omega L}{HV}\right) \Rightarrow L = \frac{HV}{\omega}\ln\frac{1}{1 - \eta} = \frac{0.125(1.5)}{0.10}\ln\frac{1}{1 - \eta} = 1.875\ln\frac{1}{1-\eta}$$

| η | ln(1/(1 − η)) | L, m |
|---|---|---|
| 90% | 2.303 | 4.3 |
| 99% | 4.605 | 8.6 |
| 99.9% | 6.908 | 13.0 |

   Each extra "nine" costs the same additional length (4.3 m), the signature of the exponential law. (The block-flow model would give only 1.7–1.9 m.)

**Result:** (i) 98.6%, 212 mg/m³; (ii) L = 4.3, 8.6 and 13.0 m.`,
          answer: String.raw`(i) η = 1 − exp(−4.26) = 98.6%, outlet ≈ 212 mg/m³; (ii) L = (HV/ω)ln(1/(1−η)) = 1.875 ln(1/(1−η)): 4.3 m (90%), 8.6 m (99%), 13.0 m (99.9%).` } ] },

    { id: "practice-dust-collection-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-dust-collection-P7", label: "", marks: "10", topic: "dust-collection",
        sub: "Derivation of ESP efficiency: block flow and Deutsch (mixed) flow", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_3 slides "Design Equations" (section between a row of wires and one plate)`,
        text: String.raw`Consider the section between a row of discharge wires and one collecting plate (plate length L, height h, wire-to-plate spacing H, gas velocity V, drift velocity ω). Derive (a) $\eta = \omega A/Q$ for block (laminar) flow and (b) $\eta = 1 - \exp(-\omega A/Q)$ for mixed (turbulent) flow, with A = Lh and Q = HhV. Sketch η against ωA/Q for both.`,
        solution: String.raw`**(a) Block (laminar) flow.** The gas moves as a plug at V; each particle moves at V along the duct and at ω toward the plate. A particle entering at distance y from the plate reaches it after time y/ω, during which it travels Vy/ω along the duct. It is collected if $Vy/\omega \le L$, i.e. if $y \le \omega L/V$. With particles uniform over H:
$$\eta = \frac{\omega L/V}{H} = \frac{\omega Lh}{HhV} = \frac{\omega A}{Q} \quad (\le 1)$$
Complete collection is reached at ωA/Q = 1.

**(b) Mixed (Deutsch) flow.** Turbulence keeps the uncollected particles uniformly mixed over the cross-section; let n(x) be the number concentration at distance x. In a length dx the particles within the layer ω dt of the plate are caught, where dt = dx/V is the time spent in dx:
$$-HhV\,dn = n\,\omega\,h\,dx \quad\Rightarrow\quad \frac{dn}{n} = -\frac{\omega}{HV}dx$$
Integrating from $n_0$ at x = 0 to n at x = L:
$$\ln\frac{n}{n_0} = -\frac{\omega L}{HV} = -\frac{\omega Lh}{HhV} = -\frac{\omega A}{Q}$$
$$\eta = 1 - \frac{n}{n_0} = 1 - \exp\left(-\frac{\omega A}{Q}\right)$$

**Comparison:**

![ESP collection efficiency against ωA/Q: block flow rises linearly to 100% at ωA/Q = 1; Deutsch mixed flow approaches 100% exponentially](fig/practice-dust-collection-P7-sol.svg)

- Block flow is an upper bound (no re-mixing); at ωA/Q = 1 it gives 100% while Deutsch gives 63.2%.
- Deutsch: 90% at ωA/Q = 2.30, 99% at 4.61, 99.9% at 6.91.
- Real ESPs lie close to the Deutsch line; non-uniform gas velocity, sneakage and re-entrainment make them a little worse, which is why effective drift velocities are measured on full-scale units.`,
        answer: String.raw`Block: particle reaches plate if y ≤ ωL/V → η = ωL/(HV) = ωA/Q. Mixed: −HhV dn = nωh dx → ln(n/n₀) = −ωL/(HV) → η = 1 − exp(−ωA/Q). At ωA/Q = 1: 100% vs 63%; Deutsch 99% at ωA/Q = 4.6.` } ] },

    { id: "practice-dust-collection-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-dust-collection-P8", label: "", marks: "10", topic: "dust-collection",
        sub: "ESP particle charging, electrodes, advantages and disadvantages", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_3 slides "Electrostatic Precipitation", "Particle Charging", "Electrodes inside electrostatic precipitator"`,
        text: String.raw`Distinguish between field charging and diffusion charging of particles in an ESP and state the size range where each predominates. Describe the discharge and collecting electrodes. List the advantages and disadvantages of electrostatic precipitators, and explain why an ESP is preferred for a large coal-fired boiler but not for a small batch process with variable gas.`,
        solution: String.raw`### Particle charging
- **Field (impact) charging, ion bombardment:** gas ions produced in the corona move along the field lines of the applied electric field and strike the particles; charge builds up until the particle's own field repels further ions. Saturation charge ∝ $d_p^2E$. **Predominates for $d_p$ > 0.5 µm.**
- **Diffusion charging:** ions in random thermal motion collide with particles irrespective of the field. Charge grows slowly with time, roughly ∝ $d_p$. **Predominates for $d_p$ < 0.1 µm.**
- Between 0.1 and 0.5 µm both are weak, giving the efficiency minimum of ESPs.

### Electrodes
- **Discharge (emitting) electrodes:** small-diameter wires (or rigid spiked frames) at high negative DC voltage, **20–80 kV**; produce the corona that ionises the gas.
- **Collecting electrodes:** earthed (positive) plates or tubes on which charged particles deposit; cleaned by rapping (dry) or flushing (wet); dust falls into hoppers.

### Advantages
1. High removal efficiency for fine particles and droplets (99%+).
2. Very large gas volumes at very low pressure drop.
3. Collects dry powders or wet fumes and mists.
4. Works over a wide temperature range, up to about 700°C.
5. Low operating cost (except at very high efficiencies).

### Disadvantages
1. High capital cost.
2. Cannot collect gaseous pollutants.
3. Large space requirement.
4. Inflexible to changes in operating conditions (flow, temperature, moisture).
5. Efficiency varies with particle properties, especially resistivity (too low: re-entrainment, e.g. carbon black; too high: back-corona, e.g. low-sulfur fly ash).

### Application
A large boiler has a huge, steady, hot flow of fine fly ash: low ΔP saves fan power, capital cost is spread over the volume (economy of scale) and steady conditions suit the fixed electrical design. A small batch process with variable flow and composition gains nothing from the low ΔP, pays a high capital cost and suffers from the inflexibility; a fabric filter or scrubber is cheaper and steadier there.`,
        answer: String.raw`Field charging (ions along field lines, > 0.5 µm) vs diffusion charging (thermal ions, < 0.1 µm). Negative HV wires (20–80 kV) and earthed plates. Pros: fine-particle efficiency, large flow at low ΔP, dry or wet, to 700°C, low running cost. Cons: high capital, no gases, space, inflexible, resistivity-sensitive. Suits large steady boilers, not small variable batches.` } ] },

    { id: "practice-dust-collection-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-dust-collection-P9", label: "", marks: "8", topic: "dust-collection",
        sub: "Baghouse configuration, construction materials and pressure drop", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_3 slides "Engineering Design", "Baghouse Configuration", "Construction Materials", "System Pressure Drop", "Operating pressure"`,
        text: String.raw`Explain the difference between positive-pressure (forced-draft) and negative-pressure (induced-draft) baghouses, with the merits of each. When must stainless steel be used for the housing? What factors determine the system pressure drop, and what are its usual design limits?`,
        solution: String.raw`### Configuration
| | Positive-pressure (forced draft) | Negative-pressure (suction, induced draft) |
|---|---|---|
| Fan | upstream of the bags; pushes dirty gas | downstream; pulls clean gas |
| Housing | open to atmosphere (light, cheap, gas leaves through roof vents) or closed | must be closed (sealed) |
| Fan wear | handles dusty gas: abrasion and imbalance | handles clean gas: lighter, more efficient fan |
| Leaks | dust leaks out (nuisance, easy to locate) | air leaks in: cools gas, condensation risk, extra flow |
| Use | non-toxic dusts at moderate temperature | toxic, hot or valuable dusts; most process units |

Operating range of either type is usually within ±20 in. water (0.508 m).

### Materials
Carbon steel is standard. **Stainless steel** is needed when the gas has high SO₃ concentrations or where liquid–gas contact (condensation) cannot be avoided, because the acid condensate corrodes carbon steel. It is costly, so first keep the gas above its dew point and insulate the baghouse; then carbon steel usually suffices.

### Pressure drop
Depends on: resistance of the clean fabric, the dust cake (grows with time, gas velocity, i.e. A/C ratio, and dust properties), the amount of dust deposited before cleaning, cleaning efficiency, and plugging or blinding of the bags. **Design ΔP: 5–20 in. water.** Efficiency improves if the unit runs to a higher ΔP before cleaning or is cleaned less often; ΔP across the bags is the main monitoring signal for fouling and broken bags (sudden fall).`,
        answer: String.raw`Forced draft: fan before bags, open or closed housing, fan erodes, dust leaks out. Induced draft: fan after bags, closed housing, clean-gas fan, air in-leakage. ±20 in. water. Stainless only for high SO₃ / unavoidable condensation (else insulate, stay above dew point). ΔP from fabric, cake, dust load, cleaning, blinding; design 5–20 in. water.` } ] },

    { id: "practice-dust-collection-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-dust-collection-P10", label: "", marks: "8", topic: "dust-collection",
        sub: "Louver-type inertial separator: sketch, principle and limits", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_2 slides "Inertial Separator"; Ludwig "Inertial Centrifugal Separators"`,
        text: String.raw`With a neat sketch, explain how a louver (baffle) type inertial separator removes dust from a gas. State its typical efficiency, the dust loadings for which it is suitable, and the materials for which it should not be used.`,
        solution: String.raw`![Louver-type inertial separator: dusty gas enters below the louvers, turns sharply through them, dust strikes the blades and falls into the hopper; clean gas leaves at the top](fig/practice-dust-collection-P10-sketch.svg)

**Construction:** a set of louvers or baffles mounted in a plenum chamber above a dust hopper; compact. (Fan-type versions use external power to give a centrifugal action, Ludwig Figs. 4-56 and 4-57.)

**Principle:**
1. Dust-laden air enters beneath the louvers.
2. To pass between the blades the gas must turn sharply (often almost reversing). The flow is diverted and slowed, so it can no longer support the particles.
3. Particles, having much more inertia than the gas, cannot follow the turn; they impinge on the louvers, lose their momentum and fall into the lower chamber, from which they are discharged at the bottom.
4. The "clean" gas leaves at the top of the unit (a small bleed stream carrying concentrated dust is often taken to a small cyclone).

**Performance and limits:**
- Efficiency about **90–99%** for coarse dust, similar to a small high-ΔP cyclone.
- Suitable only for **light inlet loads, usually below 0.5 grain/ft³**; heavier loads quickly plug the louvers.
- **Avoid sticky or tacky materials**, which adhere to the blades and walls and plug the unit (2023-24 case: sticky spray-dryer powder).
- Used as a pre-cleaner or as a fresh-air intake louver.`,
        answer: String.raw`Gas enters below louvers and turns sharply between them; particles' inertia makes them strike the blades and drop to the hopper; clean gas exits on top. 90–99% (coarse dust), loads < 0.5 gr/ft³, not for sticky/tacky dust.` } ] },

    { id: "practice-dust-collection-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-dust-collection-P11", label: "", marks: "", topic: "dust-collection",
        sub: "Why small cyclones are more efficient: separation factor of a multiclone", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Ch. 30 "Separation of solids from gases; cyclones" (Eq. 30.74, Fig. 30.39 and discussion, pp. 1060–1062)`,
        text: String.raw`(a) Compare the separation factor of a 1.5 m cyclone and of a 0.15 m multiclone element, both with a tangential velocity of 18 m/s near the wall. (b) Using MSH Fig. 30.39 (curves A, B, C: 14, 31 and 70 in. diameter at about 59 ft/s inlet velocity), estimate the efficiency of each curve for 5 µm particles and explain the trend. (c) Why are cyclones sometimes used in series, and why does the second cyclone show a lower efficiency than the first?`,
        solution: String.raw`**Given:** u = 18 m/s; r = 0.75 m and 0.075 m.

1. **(a) Separation factor** $u^2/(rg)$:
$$\text{1.5 m: } \frac{18^2}{0.75(9.81)} = 44, \qquad \text{0.15 m: } \frac{18^2}{0.075(9.81)} = 440$$
   At the same inlet velocity (same pressure drop) the small element gives ten times the centrifugal force; MSH notes values up to 2500 for small units. Small elements are grouped in parallel (multiclones) with common headers to handle large flows.

2. **(b) Fig. 30.39 at 5 µm** (read vertically up from 5 µm): curve A (14 in., 1000 ft³/min) ≈ 90%, curve B (31 in., 5000 ft³/min) ≈ 82%, curve C (70 in., 25,000 ft³/min) ≈ 70%. The three cyclones have similar proportions, Δp (≈ 6.5 in. water) and inlet velocity; the larger ones are less efficient mainly because the centrifugal force falls as r increases, and the longer radial path is only partly offset by the greater residence time.

3. **(c) Series cyclones:** cyclones are cheap, rugged and take heavy loads, so two in series raise the overall recovery (or a cyclone precedes a fabric filter/ESP). The second unit receives dust whose coarse fraction has already been removed: its feed has a much smaller mean size, so its efficiency on that feed is lower, even if it is an identical cyclone (MSH: "the efficiency of the second unit is less than the first"). Its grade efficiency is the same; only the size distribution changed.

**Result:** separation factors ≈ 44 and 440; at 5 µm about 90%, 82% and 70% for 14, 31 and 70 in. units (smaller is better at equal Δp); a second cyclone shows lower overall efficiency because its feed is finer.`,
        answer: String.raw`(a) 44 (1.5 m) vs 440 (0.15 m); (b) Fig. 30.39 at 5 µm: A ≈ 90%, B ≈ 82%, C ≈ 70%, efficiency falls with diameter (lower u²/r); (c) series cyclones raise recovery; the second sees finer dust, so its overall efficiency is lower.` } ] }
  ]
});
