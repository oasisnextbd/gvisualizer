QB.paper({
  year: "2016-17", date: "18/02/2018", marks: 280,
  rules: String.raw`Time 3 hours. Section A: answer any THREE of Q1–Q4. Section B: answer any THREE of Q5–Q8. Use separate scripts for each section. Attached with the paper: power number vs Reynolds number chart for six-blade turbines (Q3(d)), Foust Table 21.1 and Fig. 21.23 pump charts (Q4(b)), and the Sylvan chart (Q5(a)); attach the diagrams with the answer scripts.`,
  questions: [
    { id: "2016-17-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q1a", label: "(a)", marks: "22",
          topic: "compressors", sub: "Performance characteristics of reciprocating compressors",
          type: "theory", syllabus: "partial", repeats: ["2015-16-Q4b"],
          text: String.raw`Discuss briefly the different performance characteristics of reciprocating compressor.`,
          solution: String.raw`*Compressors are in the course outline but have no slides; answer from MSH ch. 8 and compressor texts.*

![Indicator diagram with clearance re-expansion, and volumetric efficiency falling with pressure ratio and clearance](fig/2016-17-Q1a-sol.svg)

**1. Indicator (P–V) diagram.** 4→1 suction at $P_1$; 1→2 polytropic compression $PV^n$ = C; 2→3 discharge at $P_2$; 3→4 re-expansion of the gas left in the **clearance volume** $V_c$. Only the volume 4→1 is drawn in each stroke.

**2. Capacity and volumetric efficiency.** With clearance fraction $C = V_c/V_{swept}$ and pressure ratio $r = P_2/P_1$:
$$\eta_v = 1 - L - C\left(r^{1/n} - 1\right)$$
(L ≈ 2–5 % for valve/ring leakage, suction heating and pressure drop). Capacity = $\eta_v \times$ displacement (piston area × stroke × strokes/min). $\eta_v$ falls as r or C rises; at $r = (1 + 1/C)^n$ no gas is delivered. Hence single-stage ratios are limited to about 3–5 (up to ~8 for small machines).

**3. Discharge temperature.** $T_2 = T_1 r^{(n-1)/n}$ (adiabatic $n = \gamma$). Limited to about 150–175 °C by lubricant, valve life and safety; this is the main reason for **staging** with intercoolers.

**4. Power.** Ideal adiabatic work per cycle
$$W = \frac{n}{n-1}P_1V_1\left[r^{(n-1)/n} - 1\right]$$
(MSH: $P_B = \dfrac{0.371\,T_a\gamma q_0}{(\gamma - 1)\eta}\left[(p_b/p_a)^{1 - 1/\gamma} - 1\right]$ kW, $q_0$ in std m³/s, $T_a$ in K). Brake power = ideal/overall efficiency (compression efficiency 75–90 %, mechanical 90–95 %). Power rises with r up to a maximum and falls only when capacity collapses.

**5. Multistaging.** Equal ratios per stage, $r_{stage} = r^{1/N}$, with intercooling to the suction temperature give minimum total power, lower discharge temperature and higher $\eta_v$.

**6. Effect of operating variables.**
- Suction pressure ↓ → r ↑ → capacity (mass) ↓, temperature ↑.
- Suction temperature ↑ → density ↓ → mass capacity ↓.
- Speed: capacity ∝ rpm; valve losses rise at high speed.
- Gas properties: γ (temperature rise), molecular weight hardly matters (positive displacement: same volume at any MW, unlike centrifugals).

**7. Characteristic behaviour vs centrifugal:** nearly constant volumetric capacity at any discharge pressure (steep "head–capacity" line), so the pressure rises until something opens: a relief valve is mandatory. No surge; pulsating flow (pulsation dampeners); high efficiency at high ratios and low flows.

**8. Capacity control:** suction-valve unloaders, clearance pockets, variable speed, step unloading, bypass (spill-back) — never discharge throttling.`,
          answer: String.raw`Characteristics: P–V cycle with clearance re-expansion; η_v = 1 − L − C(r^(1/n) − 1) falls with ratio and clearance; T₂ = T₁ r^((n−1)/n) limits stage ratio (≈3–5) → multistaging with intercooling; W = n/(n−1)P₁V₁[r^((n−1)/n) − 1]; constant-volume delivery regardless of pressure (needs relief), pulsating, no surge; control by unloaders, clearance pockets, speed.` },
        { id: "2016-17-Q1b", label: "(b)", marks: "16",
          topic: "compressors", sub: "Three-stage compression with 3 psi interstage drops",
          type: "numerical", syllabus: "partial", repeats: ["2019-20-Q7b", "2017-18-Q3a"],
          text: String.raw`For three stage compression, what should be pressure across the cylinder if the intercooler and piping pressure is 3 psi? Discharge from last stage is at 165 psia and suction to the first stage is at 0 psig.`,
          solution: String.raw`**Given:** suction 0 psig = 14.7 psia; final discharge 165 psia; drop through each intercooler and its piping = 3 psi (two interstages).
**Find:** suction and discharge pressure of each cylinder.
**Assumptions:** equal compression ratio R in every stage (minimum power with equal intercooling).

1. **Ideal ratio without drops:** $R_0 = (165/14.7)^{1/3} = 2.239$.
2. **With drops:** stage 1: 14.7 → 14.7R; stage 2: (14.7R − 3) → R(14.7R − 3); stage 3: [R(14.7R − 3) − 3] → 165 psia:
$$R\left[R(14.7R - 3) - 3\right] = 165$$
   Solved by trial: R = 2.30 gives 158.3; R = 2.35 gives 166.8; **R = 2.340** gives 165.0 psia.
3. **Stage pressures:**

| Stage | Suction, psia (psig) | Discharge, psia (psig) | Ratio |
|---|---|---|---|
| 1 | 14.7 (0) | 34.4 (19.7) | 2.340 |
| intercooler 1 | 34.4 → 31.4 | | |
| 2 | 31.4 (16.7) | 73.5 (58.8) | 2.340 |
| intercooler 2 | 73.5 → 70.5 | | |
| 3 | 70.5 (55.8) | 165.0 (150.3) | 2.340 |

**Result:** cylinders operate at 14.7 → 34.4, 31.4 → 73.5 and 70.5 → 165 psia, ratio ≈ 2.34 per stage (vs 2.24 if the 3 psi drops were ignored).`,
          answer: String.raw`Equal ratio R from R[R(14.7R − 3) − 3] = 165 → R = 2.34: stage 1 14.7 → 34.4 psia, stage 2 31.4 → 73.5 psia, stage 3 70.5 → 165 psia.` },
        { id: "2016-17-Q1c", label: "(c)", marks: "8⅔",
          topic: "compressors", sub: "How surge is controlled in centrifugal compressors",
          type: "theory", syllabus: "partial", repeats: ["2018-19-Q3f", "2014-15-Q6b", "2012-13-Q6b"],
          text: String.raw`How surge is controlled in centrifugal compressors?`,
          solution: String.raw`**Surge:** at low flow the compressor can no longer develop the head the system demands; flow reverses momentarily, pressure drops, flow resumes, and the cycle repeats violently (noise, vibration, thrust-bearing and seal damage, overheating).

![Compressor map with surge line, control line and anti-surge recycle loop](fig/2018-19-Q3f-sol.svg)

**Control:**
1. **Anti-surge recycle (spill-back) control:** flow and pressure-ratio transmitters locate the operating point; when it reaches a **surge-control line** set ~10 % in flow away from the surge line, the controller opens a fast recycle valve returning **cooled** discharge gas to suction, keeping compressor flow above the surge limit while process demand is low.
2. **Blow-off** to atmosphere (air compressors) instead of recycle.
3. **Speed reduction** (turbine or variable-speed drive) moves the surge point to lower flow.
4. **Variable inlet guide vanes** or **suction throttling** to shift the characteristic.
5. Safeguards: discharge check valve, avoid sudden closure of downstream valves, surge detection (rapid flow/pressure oscillation, rising suction temperature) with automatic opening of the recycle valve.`,
          answer: String.raw`Keep flow above the surge line: anti-surge controller opens a cooled recycle (or blow-off) valve at a control line ~10 % from surge; plus speed control, inlet guide vanes/suction throttling, check valve and fast surge detection.` }
      ] },
    { id: "2016-17-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q2a", label: "(a)", marks: "12×2",
          topic: "evaporation", sub: "Short notes: entrainment separator, optimum operating time, BPR and capacity",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write a short note on any two of the following:
(i) Entrainment separator
(ii) Optimum operation time of Evaporator.
(iii) Effect at boiling point elevation on capacity of evaporators.`,
          solution: String.raw`(All three are answered; any two earn full marks.)

### (i) Entrainment separator

Boiling liquor sprays droplets into the vapor; carried over, they lose product and contaminate the condensate or the next effect. The vapor head therefore contains a separator:

![Wire-mesh pad, chevron baffles and centrifugal separator](fig/2018-19-Q3d-sol.svg)

- **Gravity disengagement** in a large head (vapor velocity below $K\sqrt{(\rho_L - \rho_V)/\rho_V}$).
- **Impingement** on knitted wire-mesh pads (demisters): droplets hit the wires, coalesce and drain.
- **Change of direction** on chevron/zig-zag baffles.
- **Centrifugal** action (tangential inlet, cyclone in the head); foaming liquors need extra height or anti-foam.

### (ii) Optimum operation time (cleaning cycle)

Scale reduces U with time: $1/U^2 = 1/U_0^2 + \beta\theta$. Total heat in a boiling time θ:
$$Q = \frac{2A\Delta T}{\beta}\left[\sqrt{\frac{1}{U_0^2} + \beta\theta} - \frac{1}{U_0}\right]$$
With cleaning time $\theta_c$ per cycle, the average rate $Q/(\theta + \theta_c)$ is maximum when $\dfrac{dQ}{d\theta}(\theta + \theta_c) = Q$ (tangent from $-\theta_c$), giving

$$\theta_{opt} = \theta_c + \frac{2}{U_0}\sqrt{\frac{\theta_c}{\beta}}$$

![Optimum boiling time by the tangent construction](fig/2018-19-Q3e-sol.svg)

Scale is removed by boiling out with water or dilute acid/alkali, or drilling out tubes.

### (iii) Effect of boiling-point elevation on capacity

Capacity ∝ q = UAΔT, and the useful ΔT is (steam temperature − **solution** boiling point). The BPR therefore subtracts from ΔT in every effect: $\sum\Delta T = T_s - T_{cond} - \sum\mathrm{BPR}$. For strong electrolytes (50 % NaOH, BPR ≈ 70–80 °F) a multiple-effect unit can have a smaller capacity than a single effect with the same total area, so fewer effects are used. Liquid head acts the same way (higher boiling point at depth, large under vacuum). Economy is affected much less than capacity.`,
          answer: String.raw`(i) Gravity, wire-mesh impingement, chevron baffles or centrifugal separators remove droplets from vapor. (ii) With 1/U² = 1/U₀² + βθ, θ_opt = θc + (2/U₀)√(θc/β). (iii) BPR is lost from ΔT in every effect (ΣΔT = T_s − T_cond − ΣBPR), lowering capacity; with large BPR more effects may give less capacity.` },
        { id: "2016-17-Q2b", label: "(b)", marks: "10⅔",
          topic: "evaporation", sub: "Backward-feed multiple-effect evaporator: working principle",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`With help of schematic diagram, discuss the working principle of backward feed multiple effect evaporator.`,
          solution: String.raw`![Backward feed: steam to effect I, vapor I heats II, vapor II heats III; dilute feed enters III and is pumped back to II and I](fig/2016-17-Q2b-sol.svg)

**Working principle**
- **Steam** is supplied to the first effect (highest pressure and temperature). The vapor boiled off in effect I is the heating medium for effect II, and so on; the last effect is connected to a condenser and vacuum system, so pressure and boiling temperature fall from effect I to the last. Each kg of steam evaporates nearly one kg in each effect (economy ≈ number of effects × 0.8).
- In **backward feed** the **dilute (cold) feed enters the last (coldest) effect**, and the liquor is **pumped** from each effect to the previous, higher-pressure one, so it flows against the pressure gradient. The **thick product leaves the first (hottest) effect**.

**Features**
- The most concentrated, most viscous liquor is boiled at the **highest temperature**, where its viscosity is lowest, so U in the first effect stays high: capacity is greater than forward feed for viscous products.
- A cold feed is heated progressively as it moves to hotter effects, so less of the steam's heat goes into sensible heating in effect I: **better economy than forward feed when the feed is cold**.
- Needs a **pump between every pair of effects** (forward feed flows by pressure difference), plus more control.
- Product leaves at the highest temperature, which may harm heat-sensitive products (forward feed preferred there).

**Calculation** (Badger–McCabe trial): assume ΔT's ∝ 1/U, make enthalpy balances on each effect from the last (where the feed enters) to the first, compute areas, adjust ΔT's until areas (or q's) satisfy the design condition.`,
          answer: String.raw`Steam to effect I; each effect's vapor heats the next (lower-pressure) one; dilute cold feed enters the last effect and is pumped back toward effect I, from which the thick product leaves; good for cold feeds and viscous products (high T where liquor is thickest), but needs interstage pumps.` },
        { id: "2016-17-Q2c", label: "(c)", marks: "12",
          topic: "evaporation", sub: "Triple effect without BPR: boiling temperatures in effects I and II",
          type: "numerical", syllabus: "in", repeats: ["2012-13-Q5e"],
          text: String.raw`A triple effect evaporator is concentrating a liquid that has no appreciable elevation in boiling point. The temperature of the first effect is 108° C and boiling point of solution in the last effect is 52° C. The overall heat transfer coefficients in W/m²°C are 2500 in the first, 2000 in the second and 1500 in the third effect. At what temperatures will the liquid boil in the first and second effect?`,
          solution: String.raw`**Given:** no BPR; temperature of the steam to the first effect $T_s$ = 108 °C (the "temperature of the first effect" is taken as the steam/heating-side temperature, because the boiling points of effects I and II are asked); last-effect boiling point $T_3$ = 52 °C; $U_1$ = 2500, $U_2$ = 2000, $U_3$ = 1500 W/m² °C.
**Find:** boiling temperatures $T_1$ and $T_2$.
**Assumptions:** equal heating areas and equal heat loads in the three effects (feed near its boiling point, sensible-heat effects and latent-heat differences neglected), so $U_1\Delta T_1 = U_2\Delta T_2 = U_3\Delta T_3$ (Coulson & Richardson Vol. 2 method).

1. **Total temperature drop:** $\sum\Delta T = 108 - 52 = 56$ °C (no BPR, so all of it is available).
2. **Distribute inversely as U:**
$$\Delta T_i = \sum\Delta T\,\frac{1/U_i}{\sum 1/U}$$
$$\sum\frac{1}{U} = \frac{1}{2500} + \frac{1}{2000} + \frac{1}{1500} = (4.000 + 5.000 + 6.667)\times10^{-4} = 1.5667\times10^{-3}$$
$$\Delta T_1 = 56\,\frac{4.000}{15.667} = 14.3\ ^\circ\mathrm{C},\quad \Delta T_2 = 56\,\frac{5.000}{15.667} = 17.9\ ^\circ\mathrm{C},\quad \Delta T_3 = 56\,\frac{6.667}{15.667} = 23.8\ ^\circ\mathrm{C}$$
3. **Boiling temperatures** (vapor from each effect condenses at the boiling temperature of that effect, since there is no BPR):
$$T_1 = 108 - 14.3 = 93.7\ ^\circ\mathrm{C}$$
$$T_2 = 93.7 - 17.9 = 75.8\ ^\circ\mathrm{C}$$
$$T_3 = 75.8 - 23.8 = 52.0\ ^\circ\mathrm{C}\ \checkmark$$

**Result:** the liquid boils at about **93.7 °C in the first effect** and **75.8 °C in the second effect** (ΔT's 14.3, 17.9 and 23.8 °C).`,
          answer: String.raw`ΔT ∝ 1/U: ΔT₁ = 14.3, ΔT₂ = 17.9, ΔT₃ = 23.8 °C (total 56) → T₁ ≈ 93.7 °C, T₂ ≈ 75.8 °C.` }
      ] },
    { id: "2016-17-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q3a", label: "(a)", marks: "6⅔",
          topic: "crystallization", sub: "Steps of crystallization on a concentration–temperature graph",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write down the steps of crystallization and discuss with the help of concentration vs temperature graph.`,
          solution: String.raw`![Cooling path through the unsaturated, metastable and labile zones](fig/2018-19-Q5b-sol.svg)

**Steps** (slides):
1. **Supersaturation** — the first step and the driving force. The feed (point A, unsaturated) is cooled (or evaporated) to the **solubility curve** (B, saturated) and beyond, into the **metastable zone**, where the solution is supersaturated but stable without seeds.
2. **Nucleation** — at the **supersolubility curve** (C) the solution enters the **labile zone** and nuclei form spontaneously (primary nucleation); seeds or contact with crystals, agitator and walls cause **secondary nucleation** at lower supersaturation.
3. **Crystal growth** — solute diffuses to the nuclei and is built into the lattice during the main cooling; the mother-liquor concentration falls back toward the solubility curve (D).
4. **End:** the magma (crystals + saturated mother liquor) leaves; crystals are separated, washed and dried. Yield = (feed concentration − solubility at the final temperature) × solvent, by material balance.

Good crystallizers keep the solution in the metastable zone (controlled growth, few nuclei) to obtain large, uniform crystals.`,
          answer: String.raw`Supersaturation (cool from unsaturated A past saturation B into the metastable zone) → nucleation (at the supersolubility curve C / labile zone, or secondary) → growth (liquor falls back toward saturation D) → separation of magma.` },
        { id: "2016-17-Q3b", label: "(b)", marks: "12",
          topic: "mixing", sub: "Power number as function of Re in a baffled agitated vessel",
          type: "derivation", syllabus: "in", repeats: ["2018-19-Q4b", "2017-18-Q2d", "2013-14-Q7b", "2012-13-Q7c"],
          text: String.raw`Prove that Power number is a function of Reynold's Number for mechanically agitated adequately baffled vessel.`,
          solution: String.raw`1. **Variables:** $P = f(n, D_a, \rho, \mu, g, S_1, \ldots, S_6)$ with shape factors $S_1 = D_a/D_t$, $S_2 = E/D_a$, $S_3 = L/D_a$, $S_4 = W/D_a$, $S_5 = J/D_t$, $S_6 = H/D_t$.
2. **Dimensions:** P $ML^2T^{-3}$, n $T^{-1}$, $D_a$ L, ρ $ML^{-3}$, μ $ML^{-1}T^{-1}$, g $LT^{-2}$ → 6 − 3 = 3 dimensionless groups; repeating variables n, $D_a$, ρ.
3. **Groups:**
   - $P\,n^aD_a^b\rho^c$: M $1 + c = 0$, L $2 + b - 3c = 0$, T $-3 - a = 0$ → $a = -3$, $b = -5$, $c = -1$: $N_P = \dfrac{P}{\rho n^3D_a^5}$ (fps units: $\dfrac{Pg_c}{\rho n^3D_a^5}$).
   - $\mu\,n^aD_a^b\rho^c$ → $\dfrac{\mu}{\rho nD_a^2} = \dfrac{1}{N_{Re}}$, $N_{Re} = \dfrac{D_a^2n\rho}{\mu}$.
   - $g\,n^aD_a^b$ → $\dfrac{g}{n^2D_a} = \dfrac{1}{N_{Fr}}$, $N_{Fr} = \dfrac{n^2D_a}{g}$.
4. **Hence** $N_P = \psi(N_{Re}, N_{Fr}, S_1, \ldots, S_6)$.
5. **Geometrically similar vessels:** the shape factors are fixed → $N_P = \psi(N_{Re}, N_{Fr})$.
6. **Adequately baffled:** no vortex forms; gravity acts only through the vortex (free-surface shape), so $N_{Fr}$ has no effect and
$$N_P = \psi(N_{Re})$$
7. Limiting forms: laminar ($N_{Re} < 10$) $N_P = K_L/N_{Re}$; fully turbulent ($N_{Re} > 10^4$) $N_P = K_T$ (≈ 5–6 for a six-blade turbine). Unbaffled at high Re: $N_P = \psi(N_{Re})N_{Fr}^m$.`,
          answer: String.raw`Dimensional analysis: N_P = P/(ρn³D_a⁵) = ψ(Re, Fr, S₁…S₆); geometric similarity removes S_i, baffles prevent the vortex so Fr drops out → N_P = ψ(Re).` },
        { id: "2016-17-Q3c", label: "(c)", marks: "6",
          topic: "mixing", sub: "Shape factors of a turbine agitator",
          type: "theory", syllabus: "in", repeats: ["2017-18-Q2d", "2015-16-Q1c", "2014-15-Q7d"],
          text: String.raw`Write different shape factors for turbine.`,
          solution: String.raw`Shape factors are the dimensionless ratios that fix the geometry of an agitated vessel (MSH ch. 9; $D_t$ tank diameter, $D_a$ impeller diameter, E impeller height above the bottom, L blade length, W blade width, J baffle width, H liquid depth):

| Shape factor | Ratio | Standard flat-blade turbine |
|---|---|---|
| $S_1$ | $D_a/D_t$ | 1/3 |
| $S_2$ | $E/D_a$ | 1 (E/D_t = 1/3) |
| $S_3$ | $L/D_a$ | 1/4 |
| $S_4$ | $W/D_a$ | 1/5 |
| $S_5$ | $J/D_t$ | 1/12 (four baffles; 0.1 on some charts) |
| $S_6$ | $H/D_t$ | 1 |

Plus the number of blades (6) and baffles (4) and the blade type. Geometrically similar systems have all shape factors equal, so one $N_P$–$N_{Re}$ curve applies to all of them (the attached chart lists curves A–D for different $S_4$, $S_5$).`,
          answer: String.raw`S₁ = D_a/D_t = 1/3, S₂ = E/D_a = 1, S₃ = L/D_a = 1/4, S₄ = W/D_a = 1/5, S₅ = J/D_t = 1/12, S₆ = H/D_t = 1 (six blades, four baffles).` },
        { id: "2016-17-Q3d", label: "(d)", marks: "12",
          topic: "mixing", sub: "Power for a six-blade turbine in 50 % caustic soda",
          type: "numerical", syllabus: "in", repeats: ["2023-24-Q7c", "2022-23-Q7b", "2020-21-Q8a"],
          text: String.raw`A flat blade turbine with six blades is installed centrally in a vertical tank. The tank is 6 ft in diameter, the turbine is 2 ft in diameter and is positioned at 2 ft from the bottom of the tank. The turbine blades are 5 in wide. The tank is filled to a depth of 6 ft with a solution of 50 percent caustic soda at 150° F, which has a viscosity of 12 cP and density of 93.5 lb/ft³. The turbine is operated at 90 r/min. The tank is baffled. What power will be required to operate the mixer?

Figure for Q3(d) (attached to the paper): power number $N_P = Pg_c/\rho n^3D_a^5$ versus $N_{Re} = D_a^2n\rho/\mu$ for six-blade turbines (after Chudacek; Oldshue), curves:

| Curve | $S_1$ | $S_2$ | $S_3$ | $S_4$ | $S_5$ | $S_6$ |
|---|---|---|---|---|---|---|
| A (4 baffles) | 0.33 | 0.33 | 0.25 | 0.2 | 0.1 | 1.0 |
| B (4 baffles) | 0.33 | 0.33 | 0.25 | 0.125 | 0.1 | 1.0 |
| C (4 baffles, pitched blade) | 0.33 | 0.33 | 0.25 | 0.2 | 0.1 | 1.0 |
| D (unbaffled) | 0.33 | 0.33 | 0.25 | 0.25 | — | 1.0 |`,
          solution: String.raw`**Given:** $D_t$ = 6 ft, $D_a$ = 2 ft, E = 2 ft, W = 5 in, H = 6 ft; ρ = 93.5 lb/ft³, μ = 12 cP; n = 90 rpm = 1.5 r/s; baffled.
**Find:** power P.
**Assumptions:** standard four baffles; blade length $L = D_a/4$; chart curve A applies.

1. **Shape factors:** $S_1 = D_a/D_t = 2/6 = 0.33$; $S_2$ = E/D_t = 2/6 = 0.33; $S_4 = W/D_a = (5/12)/2 = 0.208 ≈ 0.2$; $S_6 = H/D_t = 6/6 = 1.0$ → **curve A**.
2. **Reynolds number** (μ = 12 × 6.72 × 10⁻⁴ = 8.064 × 10⁻³ lb/ft s):
$$N_{Re} = \frac{D_a^2n\rho}{\mu} = \frac{2^2(1.5)(93.5)}{8.064\times10^{-3}} = 6.96\times10^4$$
3. **Power number:** at $N_{Re}$ = 7 × 10⁴ the flow is fully turbulent; reading up from 7 × 10⁴ to curve A and across to the $N_P$ axis gives **$N_P$ ≈ 5.8** (flat part of curve A).

![How to read the power-number chart: Re = 6.96×10⁴ → curve A → N_P ≈ 5.8](fig/2016-17-Q3d-read.svg)

4. **Power:**
$$P = \frac{N_P\,\rho\,n^3D_a^5}{g_c} = \frac{5.8(93.5)(1.5)^3(2)^5}{32.174} = 1820\ \mathrm{ft\,lb_f/s}$$
$$P = \frac{1820}{550} = 3.31\ \mathrm{hp}\ (2.47\ \mathrm{kW})$$

**Result:** about **3.3 hp (2.5 kW)** delivered to the liquid (motor larger to cover drive losses).`,
          answer: String.raw`Re = 6.96 × 10⁴ (turbulent), curve A gives N_P ≈ 5.8 → P = 5.8 × 93.5 × 1.5³ × 2⁵/32.174 = 1820 ft lbf/s ≈ 3.3 hp (2.5 kW).` },
        { id: "2016-17-Q3e", label: "(e)", marks: "10",
          topic: "crystallization", sub: "Draft-tube-baffle vacuum crystallizer: working principle",
          type: "sketch", syllabus: "in", repeats: ["2019-20-Q4a", "2018-19-Q6c"],
          text: String.raw`Discuss the working principle of draft tube baffled vacuum crystallizer with the help of schematic diagram.`,
          solution: String.raw`![DTB vacuum crystallizer: draft tube and propeller, skirt baffle and settling zone, fines dissolving loop](fig/2018-19-Q6c-sol.svg)

1. **Vacuum and flash cooling:** the body is held under vacuum by a condenser/ejector system. Hot feed mixed with circulating magma is carried up the **draft tube** by a slow bottom **propeller**; at the boiling surface the liquid flashes, cooling adiabatically and evaporating solvent, so it becomes slightly **supersaturated**.
2. **Growth:** the supersaturated magma flows down the annulus around the draft tube; the large surface of suspended crystals relieves the supersaturation by **growth**, keeping the solution in the metastable zone (little new nucleation).
3. **Fines destruction:** a **skirt baffle** forms an outer quiet settling zone. Liquor drawn from it carries only fine crystals, which are **dissolved** in an external heater and returned with the feed to the draft-tube inlet. Removing excess nuclei lets the remaining crystals grow large.
4. **Product:** magma of large, uniform crystals is withdrawn from the bottom (sometimes classified in an elutriation leg); vapor goes to the condenser.

**Advantages:** controlled nucleation and narrow size distribution, large crystals, high circulation with low shear, little scaling (no boiling on heat-transfer surfaces), continuous operation (KCl, (NH₄)₂SO₄, NaCl).`,
          answer: String.raw`Under vacuum, propeller lifts magma up the draft tube; it flashes at the surface (supersaturation), crystals grow as it descends; skirt baffle settling zone removes fines, which are dissolved and recycled with feed; large uniform crystals withdrawn at the bottom.` }
      ] },
    { id: "2016-17-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q4a", label: "(a)", marks: "18",
          topic: "drying", sub: "General guidelines for selecting an industrial dryer",
          type: "theory", syllabus: "in", repeats: ["2020-21-Q2a", "2018-19-Q2b", "2013-14-Q6a"],
          text: String.raw`In a chemical industry you have been assigned to select an industrial dryer. Discuss the general guidelines for selecting such dryers.`,
          solution: String.raw`**Steps of selection** (slides)
1. **Initial selection:** the dryer must first be **operable** — produce a product of the desired physical properties at the desired rate. Dryer types are largely complementary, not competitive; the nature of the material usually limits the choice to two or three types.
2. **Drying tests** in the dryers still under consideration fix optimum operating conditions and product characteristics and are the basis for vendor quotations.
3. **Final selection:** from test results and quotations, the most economical dryer on product quality, capital and operating cost.

**General guidelines**

| Guideline | What to consider |
|---|---|
| **Batch or continuous** | batch dryers (tray, vacuum shelf, agitated batch) for production < 150–200 kg/h; continuous for 1–2 t/h and more; for large rates rotary or spray dryers, though for small plants other types may be cheaper |
| **Feed and product handling** | choose the dryer that best handles the wet feed and the dry product: liquids → spray or drum dryer (or special dryers adapted to liquids); sticky feeds → rotary vacuum dryer with scrapers, or back-mix dry product; granular → rotary, fluid-bed, conveyor; sheets → cylinder dryers |
| **Thermally sensitive materials** | dry at low temperature under vacuum with a low-temperature heating medium, or very rapidly in flash or spray dryers (short contact time); freeze drying for the most delicate |
| **Adiabatic vs non-adiabatic** | adiabatic (direct-contact) dryers are cheaper but have lower thermal efficiency and dusting problems; non-adiabatic (indirect) dryers use little or no gas and are chosen for very fine particles, solids that react with the gas, and **solvent recovery** |
| **Operation** | reliable, safe and economic; must not cause plant shutdowns |
| **Dust problem** | steam-tube units have minor dust problems; direct-contact dryers may need stack dust collectors that cost more than the dryer itself |
| **Energy efficiency** | minimise energy and maximise thermal efficiency, but judge on the whole system: a steam-tube rotary dryer (85 %) vs a plain direct rotary (50 %) — producing steam has its own cost; higher inlet gas temperature raises efficiency but heat-sensitive solids need low inlet temperature |
| **Type of fuel** | direct heating is most efficient; natural gas and LPG best, then light oil (clean stack); heavy oil needs special burners; coal is dusty and hard to handle |
| **Maintenance cost** | moving parts that wear or break, material "balling-up" or sticking cause shutdowns and repair cost |
| **Labour cost** | tray dryers have high labour cost but are best for small amounts |
| **Pollution** | dust, solvent vapors and odours must be controlled |

**Other data needed:** feed rate and moisture (initial/final, free vs bound, equilibrium moisture), particle size and shape, drying-rate curve, maximum allowable temperature, toxicity/flammability of solvent, space and utilities.`,
          answer: String.raw`Initial selection → drying tests → final economic choice; guidelines: batch (< 150–200 kg/h) vs continuous, feed/product handling, heat sensitivity (vacuum, flash/spray), adiabatic vs non-adiabatic, operability, dust, energy efficiency, fuel, maintenance, labour, pollution.` },
        { id: "2016-17-Q4b", label: "(b)", marks: "12",
          topic: "pumps", sub: "Pump type and size for 300 gal/min at 70 ft",
          type: "numerical", syllabus: "in", repeats: ["2018-19-Q2d", "2017-18-Q3b"],
          text: String.raw`It is necessary to pump a liquid with properties similar to water at a rate of 300 gal/min against a head of 70 ft. Recommend a pump type and size. Make necessary assumptions.

Figure for Q4(b) (attached to the paper): Foust Table 21.1 (pump characteristics: standard radial-flow centrifugal — high head, single stage up to 600 ft, capacity 100–200,000 gal/min, clean or dirty liquids, no metering; turbine mixed-flow — up to 200 ft, 16,000 gal/min; propeller axial-flow — up to 60 ft, 100,000 gal/min; rotary — up to 600 psi, 1–500 gal/min, viscous non-abrasive, metering; reciprocating — up to 100,000 psi, up to 500 gal/min, clean, metering) and Foust Fig. 21.23 (operating ranges of Goulds centrifugal pumps at 1750 rpm).`,
          solution: String.raw`**Given:** Q = 300 gal/min, H = 70 ft, water-like liquid.
**Find:** type and size of pump.
**Assumptions:** s.g. = 1.0, clean liquid at ambient temperature; 1750 rpm 4-pole motor (chart speed); efficiency ≈ 70 %; adequate NPSH available.

1. **Type (Table 21.1):** 300 gal/min at 70 ft lies within the **standard radial-flow centrifugal** range (≥ 100 gal/min, ≤ 600 ft single stage); no metering is required. Specific speed $N_s = 1750\sqrt{300}/70^{3/4} = 1253$ (< 4200, radial flow) confirms it. Propeller pumps are limited to 60 ft; positive-displacement pumps offer nothing for water at this duty.
2. **Size (Fig. 21.23):** entering at 300 gal/min and 70 ft, the point falls on the line (≈ 71 ft at 300 gal/min) that separates the **3×4−8** and **3×4−10** areas.

![How to read Fig. 21.23: 300 gpm, 70 ft → lower edge of the 3×4-10 field](fig/2016-17-Q4b-read.svg)

3. **Recommendation:** Goulds **3×4−10** (3 in. discharge, 4 in. suction, 10 in. maximum impeller) at 1750 rpm with an impeller trimmed to about **9 in.** (affinity laws $Q \propto D$, $H \propto D^2$ applied to its full-diameter curve of ≈ 88 ft at 300 gal/min give D ≈ 9.1 in.); the 3×4−8 is acceptable only at its full 8 in. impeller, with no head margin.
4. **Power:** water hp = 300 × 70/3960 = 5.3 hp; brake hp ≈ 5.3/0.70 = 7.6 hp → 10 hp motor.

**Result:** single-stage standard centrifugal pump, 3×4−10 at 1750 rpm with ≈ 9 in. impeller, ≈ 7.6 bhp (10 hp motor).`,
          answer: String.raw`Standard radial-flow centrifugal (N_s ≈ 1250); duty on the 3×4−8/3×4−10 boundary → 3×4−10 at 1750 rpm, impeller ≈ 9 in. (3×4−8 only at full 8 in.); ≈ 5.3 water hp, ≈ 7.6 bhp, 10 hp motor.` },
        { id: "2016-17-Q4c", label: "(c)", marks: "10",
          topic: "drying", sub: "Advantages of spray drying",
          type: "theory", syllabus: "in", repeats: ["2013-14-Q6c"],
          text: String.raw`Write the advantages of spray drying.`,
          solution: String.raw`A spray dryer atomizes a solution, slurry or paste (nozzle or spinning disc) into hot gas in a tall chamber; the droplets dry in seconds and the powder is separated in cyclones or bag filters.

**Advantages**
1. **Liquid to dry powder in one step:** it combines the functions of an evaporator, crystallizer, dryer, size-reduction unit and classifier.
2. **Very short drying time** (5–30 s) and evaporative cooling keep the particle near the wet-bulb temperature: suitable for **heat-sensitive** products (milk, eggs, coffee, enzymes, pharmaceuticals) even with hot inlet gas.
3. **Product quality:** spherical, porous, free-flowing, dust-free particles of fairly uniform size that dissolve readily (instant products).
4. **Controllable properties:** particle size, moisture and bulk density set by atomizer, feed solids and gas temperatures.
5. **Continuous, high capacity** with simple, automatic control and low labour.
6. **Hygienic and closed:** product does not touch hot surfaces while wet; suitable for food and toxic materials; corrosive feeds handled since only the chamber contacts them.
7. **Handles a wide range of feeds:** solutions, emulsions, slurries, pastes of any viscosity that can be pumped and atomized.

**Disadvantages (for balance):** low thermal efficiency (hot exhaust), large and tall (≈ 25 m), high capital cost, bulk density sensitive to feed conditions.`,
          answer: String.raw`One-step liquid-to-powder, seconds of contact at near wet-bulb temperature (heat-sensitive products), spherical porous free-flowing soluble particles, controllable size/density, continuous high capacity, hygienic, handles many feeds.` },
        { id: "2016-17-Q4d", label: "(d)", marks: "6⅔",
          topic: "ejectors", sub: "Why higher motive pressure does not raise fixed-ejector capacity",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q2a", "2018-19-Q2c", "2013-14-Q5c"],
          text: String.raw`"An increase in steam pressure over design will not increase vapor handling capacity for a fixed capacity ejector – why? Explain.`,
          solution: String.raw`- A fixed-capacity ejector has its steam nozzle and diffuser **proportioned for one design point** (motive pressure, suction load, discharge pressure); that matching gives the best steam economy.
- The nozzle is choked, so the steam flow rises **in direct proportion to the absolute motive pressure**. Above design pressure more steam enters the same, fixed **diffuser throat**.
- The extra steam must itself be compressed to the discharge pressure and occupies diffuser capacity; the entrained (suction) vapor therefore does not increase and usually **decreases** slightly because of the extra steam in the diffuser (Ludwig Fig. 6-12). Steam consumption per kg of load rises.
- Only the ability to work against a higher back-pressure (stability) improves.
- Hence the design pressure is taken as the minimum expected at the nozzle (line pressure − 10 psi); more capacity requires a re-sized ejector (or a throttling-type ejector, whose performance varies with motive pressure).`,
          answer: String.raw`Nozzle and diffuser are matched to the design duty; extra pressure only sends proportionally more steam through the choked nozzle into the fixed diffuser throat, which crowds out suction vapor (capacity same or lower), wasting steam; only stability improves.` }
      ] },
    { id: "2016-17-Q5", q: 5, section: "B",
      stem: String.raw`(a) Use the Sylvan chart supplied to select mechanical separation equipment for the following.`,
      parts: [
        { id: "2016-17-Q5ai", label: "(a)(i)", marks: "9⅔",
          topic: "separator-selection", sub: "Sylvan chart: low-resistance cyclone then high-efficiency cyclone",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q6a", "2019-20-Q1a1"],
          text: String.raw`Material leaving a chemical process varies between 20 and 40 grains/cu. ft. with 60 to 80 micron range of mass mean diameter of particles. A low resistance cyclone followed by a high efficiency cyclone would be used. What will be the final concentration and mean particle size of the gaseous stream?

Figure for Q5(a) (attached to the paper): the Sylvan chart (range of particle sizes, concentration and collector performance: dust concentration in grains/ft³ vs mean particle size in microns, collector efficiency bands for electrostatic precipitators, cloth arresters, wet collectors, high-efficiency cyclones and low-resistance cyclones, and size-deviation lines for "ordinary industrial dust").`,
          solution: String.raw`**Given:** inlet 20–40 gr/ft³, mass-mean size 60–80 μm; train: low-resistance cyclone → high-efficiency cyclone.
**Find:** concentration and mean size after the train.
**Method** (Ludwig Example 4-1, Sylvan chart): take the average inlet point, read each collector's efficiency vertically below the point, compute the outlet loading, and find the outlet mean size where a line through the inlet point drawn parallel to the "ordinary industrial dust" deviation lines meets the outlet-concentration line. Those lines have a slope of about 3 on the log–log grid (concentration ∝ size³; Ludwig's example: 7.5 gr/ft³, 9 μm → 2.25 gr/ft³, 6.0 μm → 0.045 gr/ft³, 1.6 μm), so $d_{out} = d_{in}(c_{out}/c_{in})^{1/3}$.
**Assumptions:** average inlet 30 gr/ft³ and 70 μm; average line of each efficiency band.

1. **Low-resistance cyclone at 70 μm:** projecting down from 70 μm, the low-resistance-cyclone band lies at about 86–91 % (≈ 82–91 % at 60 μm, 88–95 % at 80 μm); average **≈ 89 %**.
$$c_1 = 30(1 - 0.89) = 3.3\ \mathrm{gr/ft^3}$$
2. **Mean size leaving it** (deviation line):
$$d_1 = 70\left(\frac{3.3}{30}\right)^{1/2.97} = 70(0.476) = 33\ \mu\mathrm{m}$$
3. **High-efficiency cyclone at 33 μm:** projecting down from 33 μm, the high-efficiency-cyclone band is at about 98–99 %; take **98.5 %**.

![How to read the Sylvan chart: 30 gr/ft³, 70 µm → LR cyclone 89% → 3.3 gr/ft³, 33 µm → HE cyclone 98.5% → 0.050 gr/ft³, 8 µm](fig/2016-17-Q5ai-read.svg)

$$c_2 = 3.3(1 - 0.985) = 0.050\ \mathrm{gr/ft^3}$$
4. **Final mean size:**
$$d_2 = 33\left(\frac{0.050}{3.3}\right)^{1/2.97} = 33(0.244) = 8\ \mu\mathrm{m}$$
5. **Range check:** with 20 gr/ft³ at 80 μm or 40 gr/ft³ at 60 μm the first cyclone leaves 1.6–5.6 gr/ft³ at about 31–34 μm, so the final loading spans roughly 0.02–0.08 gr/ft³.

**Result:** final gas about **0.05 gr/ft³** (≈ 0.02–0.08 over the stated range) with a mean particle size of about **8 μm**; overall efficiency ≈ 99.8 %.`,
          answer: String.raw`Low-resistance cyclone ≈ 89 % at 70 μm → 3.3 gr/ft³, ≈ 33 μm; high-efficiency cyclone ≈ 98.5 % at 33 μm → ≈ 0.05 gr/ft³ (0.02–0.08 over the range), mean size ≈ 8 μm.` },
        { id: "2016-17-Q5aii", label: "(a)(ii)", marks: "5½+5½",
          topic: "separator-selection", sub: "Sylvan chart: cheapest collector for 70 % and for 98 % (kiln gas)",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q6a", "2019-20-Q1a2"],
          text: String.raw`Flue gas leaving a kiln chimney has a particle concentration of 50 grains/cu. ft and a mean size of 8 microns. What is the cheapest equipment that can be used to achieve 70% collection efficiency? What equipment can be used to achieve 98% collection efficiency?`,
          solution: String.raw`**Given:** 50 gr/ft³, mean size 8 μm. **Find:** cheapest collector for 70 %; collector for 98 %.

1. **Read the bands vertically below 8 μm (Sylvan chart):**

| Collector | Efficiency at 8 μm | Relative cost |
|---|---|---|
| low-resistance cyclone | < 50 % | lowest |
| high-efficiency cyclone | ≈ 52–71 % | low |
| wet collector | ≈ 95–98 % | medium |
| cloth arrester (fabric filter) | ≈ 99 %+ | high |
| electrostatic precipitator | ≈ 99 %+ | highest first cost |

![How to read the Sylvan chart: 50 gr/ft³, 8 µm → drop to the bands: HE cyclone ≈ 52–71%, wet ≈ 95–98%](fig/2016-17-Q5aii-read.svg)

2. **70 %:** the **high-efficiency cyclone** is the cheapest unit whose band reaches 70 % at 8 μm (upper part of its band, choose a small-diameter or multi-cyclone unit). Outlet: 50 × 0.30 = 15 gr/ft³, mean size ≈ 8 × 0.3^(1/3) ≈ 5.3 μm.
3. **98 %:** a single cyclone cannot do it. A **good wet collector (venturi-type scrubber)** reaches ≈ 98 % at 8 μm and is the cheapest choice that does (outlet 50 × 0.02 = 1.0 gr/ft³, mean ≈ 2 μm). With 50 gr/ft³ loading it is normal practice (Ludwig) to put the **high-efficiency cyclone ahead as a pre-cleaner**: 70 % in the cyclone, then a wet collector or **fabric filter/ESP** at ≈ 5 μm (≥ 95 %) gives an overall 1 − 0.30 × 0.05 ≈ 98.5 % or better. For a hot, dry kiln gas a fabric filter (glass-fibre bags) or ESP after the cyclone is preferred if a wet effluent is not wanted.

**Result:** 70 % — high-efficiency cyclone; 98 % — wet collector (venturi scrubber), or high-efficiency cyclone + fabric filter/ESP.`,
          answer: String.raw`At 8 μm: low-resistance cyclone < 50 %, high-efficiency cyclone ≈ 52–71 % → cheapest for 70 % is the high-efficiency cyclone (15 gr/ft³ out). For 98 %: wet collector (≈ 98 %), or HE cyclone pre-cleaner + fabric filter/ESP (≥ 99 %).` },
        { id: "2016-17-Q5bi", label: "(b)(i)", marks: "7",
          topic: "dust-collection", sub: "How an electrostatic precipitator works",
          type: "sketch", syllabus: "in", repeats: ["2018-19-Q5a", "2011-12-Q4c"],
          text: String.raw`How does electrostatic precipitator work? – Explain with a neat sketch.`,
          solution: String.raw`![Wire-and-plate ESP: corona charging, migration to earthed plates, rapping into hoppers](fig/2018-19-Q5a-sol.svg)

1. **Corona:** high-voltage (30–100 kV dc) negative **discharge wires** between earthed **collecting plates** ionise the gas near the wires.
2. **Charging:** gas ions attach to the particles — field (bombardment) charging for > 0.5 μm, diffusion charging for < 0.1 μm.
3. **Migration:** charged particles drift across the gas stream to the plates at velocity w.
4. **Removal:** the dust layer is rapped (or washed in a wet ESP) into hoppers.

Efficiency $\eta = 1 - \exp(-wA/Q)$. High efficiency for fine particles, low pressure drop, large gas volumes, hot gases up to ≈ 700 °C; high capital cost, sensitive to particle resistivity.`,
          answer: String.raw`Corona at negative HV wires charges the particles, which migrate to earthed plates and are rapped into hoppers; η = 1 − exp(−wA/Q).` },
        { id: "2016-17-Q5bii", label: "(b)(ii)", marks: "6",
          topic: "dust-collection", sub: "Dust-collection trains for cement plants and coal-fired power plants",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q5a", "2014-15-Q1bii"],
          text: String.raw`Propose mechanical separator configurations suitable for particle separation from gaseous emission in cement manufacturing industry and coal fired power plant. Why do you propose such configurations for these industries? – Explain.`,
          solution: String.raw`![Cement kiln train and pulverised-coal boiler train](fig/2016-17-Q5b-sol.svg)

**Cement plant** (kiln, raw mill, clinker cooler, cement mill)
- **Configuration:** gas conditioning (cooling tower/dilution) → **high-efficiency cyclones** (often the preheater cyclones themselves, or multicyclones on the cooler) → **fabric filter** (glass-fibre/PTFE bags) **or ESP** → stack.
- **Why:** dust loadings are very high (tens of gr/ft³) and the dust is valuable product (raw meal, clinker, cement) that is returned to the process; a cyclone removes the coarse bulk cheaply and protects the final collector from abrasion and overload; the remaining fine dust (1–10 μm) needs ≥ 99.5 % to meet emission limits, which only fabric filters or ESPs achieve dry (dry collection avoids slurry, as cement dust sets when wet). Hot gas (≈ 200–350 °C) must be conditioned for bags.

**Coal-fired power plant** (pulverised-coal boiler)
- **Configuration:** boiler → economiser/air heater (≈ 130–150 °C) → (mechanical cyclone pre-collector optional) → **ESP or pulse-jet fabric filter** → wet limestone **FGD scrubber** (SO₂, residual dust) → stack.
- **Why:** gas volumes are enormous, so the collector must have a very low pressure drop: the ESP (or fabric filter) handles huge flows at 99.5–99.9 % efficiency for fine fly ash (5–20 μm and submicron). Cyclones alone are too inefficient for fine ash; a cyclone ahead removes coarse, low-resistivity ash that would re-entrain in the ESP. Wet scrubbing is used mainly for SO₂ and finishes the particulate cleaning; fly ash is collected dry for sale/disposal.`,
          answer: String.raw`Cement: (conditioning) → HE cyclones → fabric filter or ESP, because loadings are very high, dust is product to recover dry, cyclones relieve the fine collector, which gives ≥ 99.5 %. Coal power: air heater → (cyclone) → ESP or fabric filter → FGD scrubber, because huge gas volumes need low ΔP and ≥ 99.5 % for fine fly ash, plus SO₂ removal.` },
        { id: "2016-17-Q5c", label: "(c)", marks: "13",
          topic: "other", sub: "Impulse and reaction turbines with pressure–velocity diagrams",
          type: "sketch", syllabus: "out", repeats: ["2011-12-Q2a"],
          text: String.raw`With P-V diagram explain the basic working principles of two types of turbines used in industry.`,
          solution: String.raw`*Not in the current slides. "P-V" here is the pressure–velocity diagram along the steam path.*

![Pressure and absolute velocity through impulse and reaction stages](fig/2016-17-Q5c-sol.svg)

**1. Impulse turbine** (De Laval, Curtis, Rateau)
- The **entire pressure drop of a stage takes place in the fixed nozzles**: enthalpy is converted to kinetic energy, so steam velocity rises sharply while pressure falls.
- In the **moving blades the pressure stays constant**; the blades (symmetrical, constant passage area) only change the direction of the high-velocity jet. The change of momentum produces the force (impulse) that turns the rotor, and the absolute velocity falls.
- Blade work per kg $= U(V_{w1} + V_{w2})$; maximum blade efficiency $\cos^2\alpha$ at $U/V_1 = \cos\alpha/2$. Compounding (velocity, pressure, pressure–velocity) keeps blade speeds reasonable.

**2. Reaction turbine** (Parsons)
- The pressure drops **in both the fixed and the moving blades** (typically half in each, 50 % reaction). Fixed blades act as nozzles and raise the velocity; the moving blade passages are also converging nozzles, so the steam **accelerates relative to the blade** as it leaves.
- The rotor is driven by the **impulse** of the incoming steam plus the **reaction** of the steam accelerating out of the moving passages (like a jet). Absolute velocity rises in fixed rows and falls in moving rows; pressure falls continuously along the machine.
- Many stages with small drops; full admission; large axial thrust balanced by a dummy piston; optimum $U/V_1 \approx \cos\alpha$; high efficiency in large machines and LP sections.

| | Impulse | Reaction |
|---|---|---|
| pressure in moving row | constant | falls |
| relative velocity | $V_{r2} = V_{r1}$ | $V_{r2} > V_{r1}$ |
| blade shape | symmetric | aerofoil, converging |
| stages | few | many |`,
          answer: String.raw`Impulse: pressure drops only in nozzles (velocity rises), moving blades at constant pressure just turn the jet (velocity falls); reaction: pressure drops in fixed and moving rows, steam accelerates through moving passages giving impulse + reaction force; P falls stepwise vs continuously on the P–V diagram.` }
      ] },
    { id: "2016-17-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q6a", label: "(a)", marks: "6",
          topic: "size-reduction", sub: "How applied energy is used in size reduction",
          type: "theory", syllabus: "in", repeats: ["2011-12-Q3c"],
          text: String.raw`How is the applied energy utilized in size reduction operation? State briefly.`,
          solution: String.raw`Size reduction is very inefficient: only about **0.1–2 %** of the energy supplied to the machine appears as new surface energy. The applied energy is used (slides, C&R Vol. 2):

1. in producing **elastic deformation** of the particles before fracture (released as heat if the particle does not break);
2. in producing **inelastic deformation**, which results in size reduction (the useful part);
3. in causing **elastic distortion of the equipment**;
4. in **friction** between particles and between particles and the machine;
5. in **noise, heat and vibration** in the plant;
6. in **friction losses** in the plant itself (bearings, drives).

To use energy well, the applied force should be only slightly above the crushing strength, the product should be removed as soon as it is formed (free crushing, closed circuit), and the method of force (compression, impact, attrition, shear) should suit the material.`,
          answer: String.raw`Elastic deformation of particles (lost as heat), inelastic deformation that breaks them (useful), elastic distortion of the machine, particle–particle and particle–machine friction, noise/heat/vibration, mechanical friction losses; only 0.1–2 % ends as new surface.` },
        { id: "2016-17-Q6b", label: "(b)", marks: "16",
          topic: "size-reduction", sub: "Crusher power for new capacity and product size (Rittinger)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A certain crusher accepts a rock feed having a volume-surface mean diameter of 19 mm and discharges a product of volume-surface mean diameter of 5 mm. The power required to crush 3 kg/s is 7 kW. What should be the power consumption if the capacity of the crusher is reduced to 2.5 kg/s and the volume-surface mean diameter to 3.5 mm? Assume that the mechanical efficiency of the crusher remains constant.`,
          solution: String.raw`**Given:** $\bar D_{sa}$ = 19 mm → 5 mm at 3 kg/s needs 7 kW; new duty 2.5 kg/s, 19 mm → 3.5 mm.
**Find:** new power.
**Assumptions:** same feed; constant mechanical efficiency; **Rittinger's law**, because the sizes are volume-surface means, so $1/\bar D_{sa}$ measures the specific surface and the energy is proportional to new surface (this is MSH Example 28.x in SI units).

1. **Rittinger's law:**
$$\frac{P}{\dot m} = K_R\left(\frac{1}{\bar D_{sb}} - \frac{1}{\bar D_{sa}}\right)$$
2. **Constant from the first duty:**
$$K_R = \frac{7/3}{1/5 - 1/19} = \frac{2.333}{0.2000 - 0.05263} = \frac{2.333}{0.14737} = 15.83\ \mathrm{kW\,s\,mm/kg}$$
3. **New duty:**
$$P = 2.5(15.83)\left(\frac{1}{3.5} - \frac{1}{19}\right) = 2.5(15.83)(0.28571 - 0.05263) = 2.5(15.83)(0.23308)$$
$$P = 9.23\ \mathrm{kW}$$
4. **Check with other laws (for comparison):** Kick's law, $P/\dot m = K_K\ln(D_a/D_b)$: $K_K = 2.333/\ln(19/5) = 1.748$, $P = 2.5(1.748)\ln(19/3.5) = 7.39$ kW. Bond's law with these sizes gives 8.17 kW. Rittinger's law is the appropriate one here (surface-based diameters, finer product).

**Result:** about **9.2 kW** (Rittinger); a finer product needs more power even though the throughput is lower.`,
          answer: String.raw`Rittinger: K_R = (7/3)/(1/5 − 1/19) = 15.83; P = 2.5 × 15.83 × (1/3.5 − 1/19) = 9.23 kW (Kick would give 7.4 kW, Bond 8.2 kW).` },
        { id: "2016-17-Q6c", label: "(c)", marks: "12",
          topic: "size-reduction", sub: "Ball-mill critical speed: derivation and its parameters",
          type: "derivation", syllabus: "in", repeats: ["2022-23-Q8a", "2019-20-Q3b", "2018-19-Q4a", "2012-13-Q3c"],
          text: String.raw`What is the speed beyond which grinding action in a ball mill is negligible? Establish the mathematical relationship of that speed and hence comment on the variable parameters of the relationship.`,
          solution: String.raw`The **critical speed** $n_c$: at and above it the balls are held against the shell by centrifugal force all the way round, there is no relative motion and no grinding.

![Forces on a ball at the top of a rotating mill](fig/2018-19-Q4a-sol.svg)

1. Ball of radius r in a mill of radius R; its centre moves on radius $R - r$. At angle α from the vertical (above the axis) the ball stays on the wall while $m\omega^2(R - r) \ge mg\cos\alpha$.
2. The ball just stays on the wall at the top (α = 0) when
$$\omega_c^2(R - r) = g \;\Rightarrow\; n_c = \frac{1}{2\pi}\sqrt{\frac{g}{R - r}}\ \ \mathrm{r/s}$$
3. With D = 2R, d = 2r: $n_c = \dfrac{42.3}{\sqrt{D - d}}$ rpm (m) $= \dfrac{76.6}{\sqrt{D - d}}$ rpm (ft).

**Comments on the parameters**
- $n_c$ depends **only on the mill diameter D and ball diameter d** (and g). It is independent of ball density, ball mass, charge volume and feed material, because both centrifugal force and weight are proportional to the ball mass.
- $n_c \propto 1/\sqrt{D - d}$: large mills turn slowly (e.g. a 2 m mill with 0.1 m balls: 30.7 rpm; a 1 m mill: 43.4 rpm). For D ≫ d, $n_c \approx 42.3/\sqrt D$.
- Larger balls raise $n_c$ slightly (smaller D − d).
- The derivation assumes no slip; in practice slip on smooth linings means balls are lifted less, and lifter bars/rubber linings raise them higher.
- **Operating speed** is 50–75 % of $n_c$: below it balls just roll (cascade, attrition); near 75 % they cataract (impact); at $n_c$ grinding stops and lining wear is high.`,
          answer: String.raw`Critical speed from ω_c²(R − r) = g: n_c = (1/2π)√[g/(R − r)] = 42.3/√(D − d) rpm (m); depends only on D and d (∝ 1/√(D − d)), not on ball density or charge; operate at 50–75 % of n_c.` },
        { id: "2016-17-Q6di", label: "(d)(i)", marks: "6⅔",
          topic: "gas-liquid-separation", sub: "Plate-type zig-zag (chevron) impingement separator",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`What is the separation principle of a plate type zig-zag impingement separator? – Explain briefly with a neat sketch.`,
          solution: String.raw`![Chevron (zig-zag) plates: gas turns easily, drops impinge, coalesce and drain](fig/2016-17-Q6d-sol.svg)

- **Principle: inertial impingement.** Gas carrying droplets (or fine solids) flows between closely spaced **zig-zag (chevron) plates**. The gas easily makes the sharp turns, but the heavier droplets, by their inertia, cannot follow the streamlines; they **strike the plate walls**, **coalesce** into a liquid film and drops large enough to drain down (often collected in hooks or pockets on the vanes) to the sump, counter-current to up-flowing gas or across horizontal flow.
- **Design (Ludwig ch. 4):** allowable face velocity $V_{max} = k\sqrt{(\rho_L - \rho_V)/\rho_V}$ with k ≈ 0.40 ft/s for up-flow and 0.65 ft/s for horizontal flow; flow area $A = Q/V_D$. Plate spacing, angle and number of passes from manufacturers' data.
- **Performance:** removes droplets of about 12–15 μm and larger efficiently (97–99 % for ≥ 15 μm); tolerates higher gas velocities, high liquid loads, viscous liquids and some solids better than wire mesh, with low pressure drop; turndown 3–6.
- Uses: vapor heads of evaporators, knockout drums, scrubber outlets, gas–liquid separators, steam drums.`,
          answer: String.raw`Gas passes between zig-zag plates; droplets cannot follow the sharp turns, impinge on the plates, coalesce and drain; V_max = k√((ρ_L − ρ_V)/ρ_V), k ≈ 0.40 (up-flow)/0.65 ft/s (horizontal); good for ≥ 12–15 μm, high liquid loads, low ΔP.` },
        { id: "2016-17-Q6dii", label: "(d)(ii)", marks: "6",
          topic: "solids-handling", sub: "Limitations of a normal belt conveyor and remedies",
          type: "theory", syllabus: "in", repeats: ["2015-16-Q5d"],
          text: String.raw`What are the major limitations of a normal belt conveyor? How can you overcome these limitations in case of a normal belt conveyor?`,
          solution: String.raw`**Limitations** (slides, Shamlou)
1. **Temperature:** ordinary rubber-covered belts cannot handle solids above about **120 °C** (and long single belts > 300 m only for solids below about 80 °C).
2. **Inclination:** normally limited to about **22°** (≈ 15–23° depending on material, e.g. wet concrete 15°, coal 16–18°, cement 22°) because material rolls back; **no vertical lift**.
3. **Open conveying:** dust, spillage and contamination; weather exposure.
4. **Maintenance:** troughing (idler) rollers wear quickly and need frequent maintenance; belt tracking problems; belt wear with sharp/abrasive lumps.
5. Lump size limited by belt width; sticky materials carry back on the return belt.

**Remedies**
- **High temperature:** heat-resistant belts (EPDM, silicone), woven-wire or **steel-ribbon** belts; cool the solids first.
- **Steep or vertical lift:** non-slip cleats/chevron or corrugated-sidewall (pocket) belts allow up to about **45°**; **sandwich (air-supported) belt elevators** or belt-bucket elevators for vertical lift.
- **Dust and spillage:** covered or enclosed belts, **pipe (tubular) conveyors**, **air-supported belt conveyors** (belt rides on an air film in a closed trough).
- **Roller wear:** air-supported belts eliminate carrying idlers; good alignment, impact idlers at loading points, belt cleaners/scrapers.`,
          answer: String.raw`Limits: ≤ ~120 °C, ≤ ~22° slope (no vertical lift), dust/spillage, idler wear and tracking, lump size. Remedies: steel/woven-wire or heat-resistant belts, cleated/sidewall belts (to 45°), sandwich belt or bucket elevators for vertical, covered/pipe/air-supported conveyors, better idlers and cleaners.` }
      ] },
    { id: "2016-17-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q7a", label: "(a)", marks: "10",
          topic: "relief", sub: "Inspection criteria for final acceptance of a rupture disc",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What will be your inspection criteria for final acceptance of rupture disc? – Explain.`,
          solution: String.raw`Before a rupture disc is accepted and installed, check that it is the disc specified, undamaged and correctly installed:

1. **Specification and stamping (ASME VIII / manufacturer's tag):** manufacturer, lot number, size, type (forward-acting, reverse-buckling, composite, graphite), material, **marked (stamped) burst pressure at the specified coincident temperature**, manufacturing range and burst tolerance (e.g. ±5 %), flow resistance $K_R$ or minimum net flow area, ASME "UD" certification. Burst pressure (at the highest value of its range plus tolerance) must not exceed the vessel MAWP (or the allowed 105/110 % for additional/fire devices).
2. **Lot burst-test certificate:** discs from the same lot burst within the rated tolerance in destructive tests (at least two per lot, as per code).
3. **Visual inspection:** no dents, scratches, creases, pinholes, corrosion, or bulge damage; prebulged dome intact; seating surfaces clean; no damage from handling (discs must be handled by the edges only).
4. **Holder and orientation:** correct holder type and size; the **flow-direction arrow** on the disc/holder points away from the vessel; reverse-buckling discs with their knife blades in place; torque on holder bolts per manufacturer; gaskets compatible.
5. **Accessories:** vacuum support fitted where vacuum or back-pressure can occur; burst indicator/alarm wire; when installed ahead of a relief valve, a **pressure gauge, try-cock or excess-flow tell-tale** between disc and valve to detect leakage; the disc must not fragment in a way that could block the valve.
6. **Operating ratio:** operating pressure within the allowed fraction of burst pressure (≈ 70 % for conventional tension discs, up to 90 % for reverse-buckling) and compatibility with temperature and pressure cycling.
7. **Documentation:** disc data recorded in the relief-device register; replacement interval and inspection schedule set.`,
          answer: String.raw`Accept only if tag/stamp (type, size, material, lot, burst pressure at coincident temperature, tolerance, K_R, ASME UD) matches the spec and burst ≤ MAWP; lot burst-test certificate; no visible damage/corrosion; correct holder, flow-direction arrow, torque; vacuum support, burst indicator and tell-tale gauge if ahead of a valve; acceptable operating ratio; documented.` },
        { id: "2016-17-Q7b", label: "(b)", marks: "14",
          topic: "relief", sub: "Balanced safety valve offsets back-pressure: force-balance proof",
          type: "derivation", syllabus: "in", repeats: ["2022-23-Q4b", "2018-19-Q1b"],
          text: String.raw`"Balance safety valve is advantages to offset back-pressure effect." – Justify the statement with some mathematical proof.`,
          solution: String.raw`![Force balance on a conventional and a balanced-bellows disc](fig/2018-19-Q1b-sol.svg)

Let $A_N$ = nozzle (seat) area, $A_D$ = disc area exposed, $F_s$ = spring force, $P_1$ = inlet pressure, $P_b$ = back-pressure (gauge).

1. **Conventional valve** (bonnet connected to the outlet, so $P_b$ acts on top of the disc over $A_D$):
   - upward: $P_1A_N + P_b(A_D - A_N)$; downward: $F_s + P_bA_D$
$$P_1A_N = F_s + P_bA_N \;\Rightarrow\; P_{set,actual} = \frac{F_s}{A_N} + P_b = P_{set,bench} + P_b$$
   The opening pressure rises one-for-one with superimposed back-pressure; with variable back-pressure (common header) the vessel may be overpressured before the valve opens, and built-up back-pressure reduces lift and capacity (limit ≈ 10 %).
2. **Balanced-bellows valve:** a bellows of effective area $A_B$ seals the disc top from the outlet; the bonnet inside the bellows is vented to atmosphere.
   - upward: $P_1A_N + P_b(A_D - A_N)$; downward: $F_s + P_b(A_D - A_B)$
$$P_1A_N = F_s + P_b(A_N - A_B)$$
   With $A_B = A_N$: $P_1 = F_s/A_N$, **independent of $P_b$**.
3. **Example:** bench set 100 psig, back-pressure varying 0–30 psig. Conventional valve opens anywhere between 100 and 130 psig; balanced valve always at 100 psig.

**Therefore** the balanced valve offsets the back-pressure effect on set pressure; its capacity is corrected by $K_b$ (C&L Fig. 9-4), allowing back-pressures up to 30–50 % of set, and the bellows also protects spring and guides from corrosive fluids. Cost is higher and the bellows/bonnet vent must be maintained.`,
          answer: String.raw`Conventional: P₁A_N = F_s + P_bA_N → P_open = F_s/A_N + P_b. Bellows with A_B = A_N: P₁A_N = F_s + P_b(A_N − A_B) = F_s → P_open = F_s/A_N independent of back-pressure (e.g. 100 psig always vs 100–130 psig).` },
        { id: "2016-17-Q7c", label: "(c)", marks: "8",
          topic: "relief", sub: "ASME Section VIII requirements for pressure-relief installation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the requirements for installing pressure relieving devices as per codes such as ASME section VIII, Div. 1 or 2?`,
          solution: String.raw`Key provisions of ASME VIII (Div. 1, UG-125 to UG-137; Div. 2 similar) as summarised by Ludwig ch. 7:

1. **Every vessel** within the code scope must be protected by pressure-relief devices (exceptions per U-1: e.g. ≤ 15 psig, ≤ 6 in. ID, small water vessels, > 3000 psi vessels outside Div. 1). Unfired steam boilers must be protected.
2. **Set pressure:** at least one device set at or below the **MAWP**; additional devices up to **105 %** of MAWP; supplementary fire devices up to **110 %**.
3. **Allowable accumulation:** pressure must not rise more than **10 % (or 3 psi) above MAWP** with a single device, **16 % (or 4 psi)** with multiple devices, **21 %** for external fire.
4. **Device type and certification:** direct spring-loaded safety/relief valves (or pilot-operated), capacity-certified and stamped "UV" (rupture discs "UD"), set-pressure tolerance ±2 psi up to 70 psi and ±3 % above; liquid relief valves for vessels that run full of liquid; rupture discs where corrosion, polymer or leakage would make a valve inoperative, or in combination with a valve (space between them monitored by gauge/tell-tale).
5. **Location and connection:** connected to the vessel's vapor space (or close to it), as close as possible; inlet piping at least the size of the valve inlet; **inlet pressure loss ≤ 3 %** of set pressure (avoid chatter).
6. **No intervening stop valves** between vessel and device (or in the discharge) except as permitted by Appendix M — car-sealed/locked open, interlocked dual-valve arrangements.
7. **Discharge piping:** at least the outlet size, routed to a safe place, drained (no liquid pockets), supported against reaction forces; back-pressure must not reduce capacity below that required (use balanced valves where needed).
8. **Accessibility and maintenance:** devices installed vertically (spring valves), accessible for inspection, testing and removal; lifting levers on air/steam/hot-water service; sealed after setting.`,
          answer: String.raw`Every vessel protected; set ≤ MAWP (additional ≤ 105 %, fire ≤ 110 %); accumulation ≤ 10 % single, 16 % multiple, 21 % fire; certified UV/UD devices with set tolerance; close to vapor space, inlet loss ≤ 3 %; no stop valves except car-sealed/Appendix M; safe, drained, supported discharge with acceptable back-pressure; accessible, vertical, sealed.` },
        { id: "2016-17-Q7d", label: "(d)", marks: "9⅔",
          topic: "dust-collection", sub: "How a fabric filter separates particulates from gas",
          type: "theory", syllabus: "in", repeats: ["2019-20-Q2a"],
          text: String.raw`How does a fabric filter separate particulate for gaseous emission? – Explain.`,
          solution: String.raw`![Pulse-jet baghouse: dust caught on bags, cleaned by air pulses into the hopper](fig/2018-19-Q6d-sol.svg)

- Dusty gas is drawn (induced draft) or pushed (forced draft) through **tubular bags or envelopes of fabric**; clean gas passes through and the solids are retained on the fabric surface.
- **Capture mechanisms** on the fibres: **inertial impaction** (particles > ~1 μm cannot follow the gas around a fibre and hit it), **interception** (a particle following a streamline touches a fibre), **diffusion** (Brownian motion of submicron particles to fibres); electrostatic attraction may help.
- After a short time a **dust cake** forms; the cake itself becomes the main filter medium, so efficiency rises to > 99 % even for fine dust (0.1–1 μm particles are the hardest to catch; woven fabrics act mostly as a support for the cake, felts as true filters).
- As the cake grows, pressure drop rises (design 5–20 in. water); the bags are **cleaned** periodically by shaking, reverse air or compressed-air **pulse jets**, and the dust falls into hoppers.
- **Operating factors:** air-to-cloth ratio (1–3 ft/min shaker, ≥ 6 pulse-jet), fabric (glass fibre to ≈ 288 °C), humidity (moderate RH helps; condensation blinds bags — keep above dew point), inlet loading (pre-cleaner), cleaning frequency.`,
          answer: String.raw`Gas passes through fabric bags; particles are caught by impaction, interception and diffusion, then by the dust cake (> 99 %); bags are cleaned by shaking, reverse air or pulse jets into hoppers; design on air-to-cloth ratio, fabric/temperature, ΔP, dew point.` },
        { id: "2016-17-Q7e", label: "(e)", marks: "5",
          topic: "relief", sub: "Set and operating pressure for unfired and fired vessels",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain 'Set pressure' and 'operating pressure' of a non-fired and a fired vessel.`,
          solution: String.raw`- **Set pressure:** the inlet gauge pressure at which a relief valve is adjusted to start opening (rupture disc: marked burst pressure) under service conditions.
- **Operating pressure:** the pressure to which the vessel is normally subjected (maximum expected in normal and upset operation); it must be kept far enough below the set pressure that the valve does not simmer, leak or open in normal operation.

| | Non-fired (unfired) pressure vessel, ASME VIII | Fired vessel (boiler), ASME Section I |
|---|---|---|
| Set pressure | one valve ≤ MAWP; additional valves ≤ 105 % MAWP; fire-case supplementary ≤ 110 % | at least one valve ≤ MAWP; others within 3 % above MAWP (total spread of set pressures ≤ 10 %) |
| Accumulation allowed | 10 % (single), 16 % (multiple), 21 % (fire) | 6 % of MAWP with all valves open |
| Operating pressure | typically ≤ 90 % of set pressure (design pressure 10 % or 25 psi above maximum operating, whichever greater, Ludwig) | kept a few % (≈ 5 %, at least ~5 psi) below the lowest set pressure; blowdown 2–4 % |

The tighter limits for fired vessels reflect the hazard of overheating and steam explosion.`,
          answer: String.raw`Set = pressure at which the device starts to open; operating = normal maximum working pressure, kept below set. Unfired (ASME VIII): set ≤ MAWP (105/110 % for additional/fire), accumulation 10/16/21 %, operating ≲ 90 % of set. Fired (ASME I): one valve ≤ MAWP, others ≤ 3 % above, accumulation ≤ 6 %, operating a few % below set.` }
      ] },
    { id: "2016-17-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q8a", label: "(a)", marks: "12",
          topic: "other", sub: "Factors influencing the selection of a steam turbine",
          type: "theory", syllabus: "out", repeats: [],
          text: String.raw`What are the factors that influence the selection of a steam turbine.`,
          solution: String.raw`*Not in the current slides; from Lieberman and turbine practice.*

1. **Plant steam and power balance:** whether exhaust/extraction steam is needed for process heating (back-pressure or extraction machines) or wasted (condensing).
2. **Inlet steam conditions:** pressure, temperature, superheat; available enthalpy drop to the exhaust → **theoretical and actual steam rate** (kg/kWh).
3. **Exhaust conditions:** back-pressure header pressure or condenser vacuum (cooling-water temperature and availability).
4. **Power required** and its variation; normal and maximum load, part-load efficiency.
5. **Speed of the driven machine:** direct drive of centrifugal compressors/pumps at high speed; gearbox for low-speed machines; need for **variable speed** (compressor capacity and surge control).
6. **Efficiency vs cost:** single-stage general-purpose turbines (API 611) are cheap and simple but inefficient; multistage special-purpose (API 612) for large drives; steam cost decides.
7. **Reliability and service:** critical services (boiler-feed, cooling-water, lube-oil pumps) use turbine drivers that work during power failure; spare philosophy; starting time.
8. **Control requirements:** governor type, extraction-pressure control, overspeed protection, remote start.
9. **Steam quality:** wet steam erodes blades; deposits from poor boiler water.
10. **Space, weight, noise, maintenance, installation and capital cost**, hazardous-area classification (spark-free driver).`,
          answer: String.raw`Steam/power balance (need for exhaust or extraction steam), inlet and exhaust conditions and steam rate, power and its variation, driven-machine speed and variable-speed need, efficiency vs capital (single- vs multistage), reliability for critical services, control, steam quality, space, maintenance, cost, area classification.` },
        { id: "2016-17-Q8b", label: "(b)", marks: "7",
          topic: "solids-handling", sub: "Converting a belt conveyor into a vertical elevator",
          type: "sketch", syllabus: "in", repeats: ["2019-20-Q3c"],
          text: String.raw`How can you convert a belt conveyor into a vertical elevator? – Explain with a schematic diagram.`,
          solution: String.raw`A normal belt cannot lift vertically (material slides back above about 22°, 45° with cleats). Two ways to make a belt lift vertically:

![Air-supported sandwich belt elevator and belt-bucket elevator](fig/2016-17-Q8b-sol.svg)

1. **Sandwich (air-supported) belt elevator** (Shamlou Fig. 7.12): the solids are loaded on the carrying belt on the horizontal run and then **trapped between the carrying belt and a second (cover) belt**. The two belts run together round the bend and up the vertical leg; **air pressure** in the enclosed casing (or spring-loaded rollers) presses the belts together so the friction holds the material; at the top the belts separate and the solids discharge. Continuous, gentle, any angle up to vertical, with the same belt technology.
2. **Belt-bucket elevator:** **buckets are bolted to a vertical belt** running between a head pulley and a boot pulley. Buckets dig or receive the feed in the boot and discharge at the head by **centrifugal** throw (≈ 1.5 m/s, higher capacity, more wear) or **gravity/positive** discharge (≈ 0.5 m/s, gentle). Used where floor space is restricted.

Corrugated-sidewall belts with deep cleats (pocket belts) are a third, intermediate option for steep to vertical lifts.`,
          answer: String.raw`Either trap the solids between the carrying belt and a cover belt pressed together by air pressure (sandwich/air-supported belt elevator), or bolt buckets to a vertical belt (belt-bucket elevator with centrifugal or gravity discharge); deep-cleated sidewall belts are a further option.` },
        { id: "2016-17-Q8c", label: "(c)", marks: "5+8",
          topic: "solids-handling", sub: "Screw specification for free-flowing solids; conveyor capacity",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`What will be the specification of a screw used for conveying free flowing materials? A screw conveyor has the following specification:

Screw dia: 1 foot; shaft dia: 0.5 foot; Screw pitch: 1 foot; Trough loading: 50%; the screw rotates at a speed of 30 rpm. Determine the capacity of the screw conveyor.

(The printed question repeats the phrase "A screw used for conveying free flowing materials?"; it is read as above.)`,
          solution: String.raw`**Specification of a screw for free-flowing materials** (slides, Shamlou)
- Single screw with continuous (full) flight; standard pitch = diameter for most duties, but for **very easy-flowing materials pitch/diameter ≈ 1.5 for horizontal** conveying and **0.5–0.67 for vertical** conveying (screw elevator).
- Particle size smaller than the gap between flight tip and casing; feed temperature up to about 120 °C; length ≤ ~100 m.
- U-trough for horizontal/gently inclined runs; circular casing above about 30° inclination; trough loading up to ~45–50 % for free-flowing, non-abrasive solids.
- Constant-pitch screw for conveying; variable-pitch or tapered screw when feeding from a hopper.

**Capacity**

**Given:** $D_s$ = 1 ft, $D_p$ = 0.5 ft, p = 1 ft, K = 0.5, N = 30 rpm.
**Assumption:** material moves one pitch per revolution (no slip).

1. **Free annular area:** $\dfrac{\pi}{4}(D_s^2 - D_p^2) = 0.7854(1 - 0.25) = 0.589\ \mathrm{ft^2}$.
2. **Volume per revolution** at 50 % loading: $0.589 \times 1 \times 0.5 = 0.2945\ \mathrm{ft^3/rev}$.
3. **Capacity:**
$$C = 0.2945 \times 30 = 8.84\ \mathrm{ft^3/min} = 530\ \mathrm{ft^3/h} = 15.0\ \mathrm{m^3/h}$$
   (Slide formula in inches: $C/\mathrm{rpm} = 0.7854(12^2 - 6^2)(12)(0.5)(60)/1728 = 17.67$ ft³/h per rpm → 530 ft³/h.)
4. For a bulk density of, say, 50 lb/ft³ this is about 26,500 lb/h (≈ 12 t/h).

**Result:** volumetric capacity ≈ **530 ft³/h (15 m³/h)**.`,
          answer: String.raw`Free-flowing: continuous single flight, p/D ≈ 1.5 horizontal (0.5–0.67 vertical), ≤ 120 °C, ≤ 100 m, circular casing above 30°. Capacity = 0.7854(1 − 0.25)(1)(0.5)(30) = 8.84 ft³/min ≈ 530 ft³/h (15 m³/h).` },
        { id: "2016-17-Q8d", label: "(d)", marks: "14⅔",
          topic: "relief", sub: "Relief devices for low-pressure refinery storage tanks",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`What types of the pressure relieving devices are used for low-pressure storage tank in refinery? – Show their working mechanism with diagram.`,
          solution: String.raw`Atmospheric and low-pressure tanks (design a few in. of water to 15 psig; API 650/620) are very weak: a small pressure or vacuum can rupture the roof or collapse the shell. Venting is sized per **API 2000** for normal breathing (liquid in/out-flow and thermal breathing) and emergency (fire) cases.

![Pressure–vacuum conservation vent, emergency vent cover and flame arrester on a cone-roof tank, with pallet-vent detail](fig/2016-17-Q8d-sol.svg)

1. **Pressure–vacuum (P/V) conservation (breather) vents.** Two **weight-loaded (or spring-loaded) pallets** in one housing:
   - *Pressure pallet:* when vapor-space pressure exceeds the pallet weight per area (set typically ½–1 oz/in², a few in. of water), it lifts and vapor flows out — during filling or daytime heating.
   - *Vacuum pallet:* when pressure falls below atmosphere (pumping out, night cooling, rain shower), atmospheric air lifts it and flows in, preventing implosion.
   - They stay closed in between, **conserving** product vapor (less evaporation loss and emission). Sized from performance curves (flow vs overpressure).
2. **Open vents** (with screens) for non-volatile stocks, where losses do not matter.
3. **Flame arresters** in the vent line of tanks holding flammable volatile liquids: banks of narrow passages or crimped metal ribbon that cool and quench a flame front so an external ignition cannot flash back into the tank.
4. **Emergency vents:** large hinged or weighted **emergency manhole covers**, or pressure-relief covers that lift at a higher set pressure to discharge the large vapor flow generated by an external fire (sized per API 2000 on wetted area).
5. **Frangible roof-to-shell seam** (weak seam) on cone-roof atmospheric tanks: in an overpressure or internal explosion the roof seam fails first and the roof lifts, so the shell–bottom joint holds and the liquid is not released.
6. **Rupture discs / relief valves** for low-pressure (API 620) tanks up to 15 psig, and pilot-operated P/V valves for tight set pressures; vents may discharge to a vapor-recovery system or flare (with **gas blanketing** to keep a positive pressure).
7. **Liquid seals/hydraulic vents** (rarely) where a liquid column provides the relief.`,
          answer: String.raw`Weight- or spring-loaded P/V conservation vents (pressure pallet out, vacuum pallet in), open vents, flame arresters, emergency vent covers/manholes for fire, frangible roof seams, plus rupture discs/pilot P/V valves for API 620 tanks; sized per API 2000.` }
      ] }
  ]
});
