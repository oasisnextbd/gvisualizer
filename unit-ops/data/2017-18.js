QB.paper({
  year: "2017-18", date: "25/03/2019", marks: 280,
  rules: String.raw`Time 3 hours. Section A: answer any THREE of Q1–Q4. Section B: answer any THREE of Q5–Q8. Use separate scripts for each section. Assume reasonably if additional data/information is required. Figures attached for Q1(a) (saturated-steam table, Dühring lines and enthalpy–concentration chart for NaOH–H₂O), Q2(a) (MgSO₄–H₂O phase diagram and enthalpy–concentration chart) and Q3(b) (Foust Fig. 21.19 and 21.23); attach them with the answer script.`,
  questions: [
    { id: "2017-18-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q1a", label: "(a)", marks: "30",
          topic: "evaporation", sub: "Double-effect backward-feed NaOH evaporator: maximum production",
          type: "numerical", syllabus: "in", repeats: ["2020-21-Q1c"],
          text: String.raw`A basket type of double effect evaporator connected for backward feed is to be used to concentrate a NaOH solution. Each evaporator body has a 2000 ft² heating area. The caustic solution enters at 80°F and is 5 weight percent NaOH. It is to be concentrated to 50 weight percent. Previous operation indicates that overall coefficients of 400 Btu/hr ft² °F and 550 Btu/hr ft² °F may be obtained in the first and second effects, respectively. Saturated steam at 150 psia is available, and a vacuum of 2 in. Hg absolute may be obtained with existing ejectors. What is the maximum production rate obtainable?

Figures for Q1(a) (attached to the paper): saturated steam and water table (Keenan & Keyes; e.g. 350 °F: 134.53 psia, λ = 871.3 Btu/lb; 360 °F: 152.92 psia, λ = 862.9; 100 °F: 0.9503 psia, H_v = 1105.0; 110 °F: 1.2763 psia), Foust Fig. 19.11 Dühring lines for NaOH–H₂O, and Foust Fig. 19.13 enthalpy–concentration diagram for aqueous NaOH (reference: liquid water at 32 °F, infinitely dilute NaOH at 68 °F).`,
          solution: String.raw`**Given:** double effect, backward feed (feed enters effect II, liquor pumped to effect I); A = 2000 ft² each; $U_1$ = 400, $U_2$ = 550 Btu/h ft² °F; feed 5 % NaOH at 80 °F; product 50 % NaOH; steam saturated at 150 psia; last effect 2 in. Hg abs.
**Find:** the maximum feed and product rates the two bodies can handle.
**Assumptions:** the full areas are used (that fixes the maximum capacity); no heat losses; liquid-head and friction effects on boiling point neglected; vapor leaving each effect is superheated by the BPR ($c_p$ = 0.46 Btu/lb °F) and condenses at its saturation temperature in the next steam chest; condensate leaves at saturation; enthalpies of solutions from the NaOH enthalpy–concentration chart.

1. **Steam and condenser conditions** (attached steam table, interpolated):
   - Steam 150 psia: $T_s$ = 358.5 °F, λ_s = 864.2 Btu/lb.
   - 2 in. Hg = 2 × 0.4912 = 0.982 psia: water boils at $T_{w2}$ = 101.1 °F; $H_g$ = 1105.5 Btu/lb.
2. **Material balance** (NaOH): $0.05F = 0.50L_1 = x_2L_2$ → $L_1 = 0.1F$; total evaporation $V_1 + V_2 = 0.9F$; $V_1 = L_2 - L_1$, $V_2 = F - L_2$. Unknowns: F, $x_2$ (concentration leaving effect II), $T_{w1}$ (pressure in effect I) and S.
3. **Boiling points (Dühring chart):**
   - Effect II, dilute liquor (≈ 9 %): BPR ≈ 4–5 °F at 101 °F, so $T_2 = 101.1 + 4.4 = 105.6$ °F.
   - Effect I, 50 % NaOH: the 50 % Dühring line (through about 197 °F at a water temperature of 124 °F and 219 °F at 144 °F, slope 1.07) gives $T_1 = 218.6 + 1.072(T_{w1} - 143.8)$, i.e. BPR ≈ 77 °F.

![How to read the Dühring chart: 174.9 °F → 50 % line → T₁ ≈ 252 °F; 101.1 °F → 8.9 % → T₂ ≈ 105.6 °F](fig/2017-18-Q1a-read.svg)

4. **Trial (Badger–McCabe method).** Total available ΔT = 358.5 − 101.1 − 77 − 4.4 ≈ 176 °F. First trial with equal heat loads, ΔT ∝ 1/U: ΔT₁ = 176 × (1/400)/(1/400 + 1/550) = 102 °F, ΔT₂ = 74 °F. The enthalpy balances below then give $q_1 > q_2$ by about 10 % (effect I also has to heat the liquor from 106 °F to 252 °F and supply the heat of concentration), so ΔT₁ is raised and ΔT₂ lowered and the balances are repeated until the two rate equations and the two enthalpy balances are satisfied together. Converged values:

| Quantity | Effect I | Effect II |
|---|---|---|
| saturation temperature of vapor space | $T_{w1}$ = 174.9 °F (6.7 psia) | 101.1 °F (0.98 psia) |
| boiling liquor temperature | $T_1$ = 252.0 °F (BPR 77.0 °F) | $T_2$ = 105.6 °F (BPR 4.4 °F) |
| ΔT | 358.5 − 252.0 = 106.5 °F | 174.9 − 105.6 = 69.4 °F |
| liquor out | 50 % NaOH, $H_1$ = 262 Btu/lb | 8.9 % NaOH, $H_2$ = 65.7 Btu/lb |
| vapor enthalpy | $H_{V1}$ = 1136.2 + 0.46(77.0) = 1171.6 Btu/lb | $H_{V2}$ = 1105.5 + 0.46(4.4) = 1107.5 Btu/lb |

   Chart readings used: feed 5 % at 80 °F, $H_F$ = 44.5 Btu/lb; 8.9 % at 105.6 °F, 65.7 Btu/lb; 50 % at 252 °F, 262 Btu/lb. Steam table: $H_g$(174.9 °F) = 1136.2, $h_f$(174.9 °F) = 142.9 Btu/lb.

![How to read the NaOH enthalpy–concentration chart: 5 % at 80 °F → 44.5; 8.9 % at 105.6 °F → 65.7; 50 % at 252 °F → 262 Btu/lb](fig/2017-18-Q1a-read2.svg)

5. **Rate equations:**
$$q_1 = U_1A\,\Delta T_1 = 400(2000)(106.5) = 85.2\times10^6\ \mathrm{Btu/h} = S\lambda_s \Rightarrow S = \frac{85.2\times10^6}{864.2} = 98{,}600\ \mathrm{lb/h}$$
$$q_2 = U_2A\,\Delta T_2 = 550(2000)(69.4) = 76.3\times10^6\ \mathrm{Btu/h} = V_1(H_{V1} - h_{f1}) = V_1(1171.6 - 142.9)$$
$$\Rightarrow V_1 = 74{,}190\ \mathrm{lb/h}$$
6. **Enthalpy balance, effect I:** $S\lambda_s + L_2H_2 = V_1H_{V1} + L_1H_1$
$$85.20\times10^6 + 90{,}210(65.7) = 74{,}190(1171.6) + 16{,}020(262.2)$$
$$91.13\times10^6 = 91.13\times10^6\ \mathrm{Btu/h}\ \checkmark$$
7. **Enthalpy balance, effect II:** $V_1(H_{V1} - h_{f1}) + FH_F = V_2H_{V2} + L_2H_2$
$$76.32\times10^6 + 160{,}210(44.5) = 70{,}000(1107.5) + 90{,}210(65.7)$$
$$83.45\times10^6 = 83.45\times10^6\ \mathrm{Btu/h}\ \checkmark$$
8. **Flows:** F = 160,200 lb/h; $L_2$ = 90,200 lb/h at $x_2$ = 0.089; $L_1$ = 0.1F = 16,020 lb/h; $V_1$ = 74,190 lb/h; $V_2$ = 70,000 lb/h; NaOH = 8,010 lb/h. Economy = (74,190 + 70,000)/98,600 = 1.46 lb/lb.

![Converged flows, temperatures and ΔT's of the double-effect backward-feed evaporator](fig/2017-18-Q1a-sol.svg)

**Result:** the maximum production is about **16,000 lb/h of 50 % NaOH solution** (≈ 8,000 lb/h NaOH) from 160,000 lb/h of 5 % feed, using about 98,600 lb/h of 150 psia steam (economy 1.46). (Chart readings are approximate; answers within a few per cent are equivalent.)`,
          answer: String.raw`T₁ = 252 °F (BPR 77), T₂ = 105.6 °F, ΔT₁ = 106.5, ΔT₂ = 69.4 °F; F ≈ 160,200 lb/h, product ≈ 16,000 lb/h of 50 % NaOH (≈ 8,000 lb/h NaOH), S ≈ 98,600 lb/h, economy ≈ 1.46.` },
        { id: "2017-18-Q1b", label: "(b)", marks: "8⅔",
          topic: "evaporation", sub: "Effect of liquid head and boiling-point elevation on capacity",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss the effects of liquid head and boiling point elevation on the capacity of the evaporator.`,
          solution: String.raw`**Capacity** = rate of evaporation ≈ $q/\lambda = UA\,\Delta T/\lambda$; anything that lowers the **effective** temperature drop lowers capacity.

**Boiling-point elevation (BPR)**
- A solution boils above the saturation temperature of water at the vapor-space pressure (Dühring's rule). The useful ΔT is (condensing steam temperature − **solution** boiling point), so ΔT falls by the BPR.
- In a multiple-effect unit the BPR is lost **in every effect**: $\sum\Delta T = T_s - T_{\text{condenser}} - \sum \mathrm{BPR}$. With large BPRs (50 % NaOH ≈ 77 °F in the problem above) a triple or quadruple effect can have so little ΔT left that its capacity falls below that of a single effect, and the extra effects are not worthwhile.
- The vapor leaves superheated by the BPR, but its superheat contributes little to heat transfer in the next steam chest.

**Liquid head (hydrostatic head)**
- Liquor at the bottom of the tubes is under the pressure of the vapor space **plus** its hydrostatic head, so it boils at a higher temperature than at the surface. The average liquid temperature rises and ΔT falls.
- The effect is large under vacuum, where saturation temperature changes fast with pressure. Example: last effect at 2 in. Hg abs (101 °F); 5 ft of liquor (s.g. 1.1) adds 2.38 psi, so the bottom is at 3.37 psia and would boil at about 146 °F, an elevation of ~45 °F at the bottom (≈ 28 °F at mid-depth), compared with a few °F at atmospheric pressure.
- Friction in tubes (long-tube, forced circulation) adds a similar loss.

**Reducing the effects:** keep liquid levels low (long-tube vertical, falling-film evaporators); use forced circulation with boiling suppressed in the tubes and flashing in the separator; use fewer effects for high-BPR solutions; choose feed arrangement (backward feed puts the strongest, highest-BPR liquor in the hottest effect where viscosity is lower).`,
          answer: String.raw`Both reduce the effective ΔT and so q = UAΔT: BPR is lost in every effect (ΣΔT = T_s − T_cond − ΣBPR), liquid head raises the boiling point at depth (large under vacuum, e.g. ~45 °F at the bottom of 5 ft liquor at 2 in Hg); reduce with low levels, falling-film/forced circulation and fewer effects.` },
        { id: "2017-18-Q1c", label: "(c)", marks: "8",
          topic: "evaporation", sub: "Working principle of entrainment separators",
          type: "theory", syllabus: "partial", repeats: ["2020-21-Q1b", "2018-19-Q3d"],
          text: String.raw`Discuss the working principle of Entrainment separator.`,
          solution: String.raw`Boiling liquor throws droplets into the vapor; the **entrainment separator** in the vapor head removes them so that product is not lost and condensate or the next effect's steam chest is not contaminated.

![Wire-mesh pad, chevron baffles and centrifugal separator in an evaporator vapor head](fig/2018-19-Q3d-sol.svg)

**Principles used**
1. **Gravity disengagement:** a large vapor head keeps the vapor velocity low, so drops whose settling velocity exceeds the upward velocity fall back. Allowable velocity: $u = K\sqrt{(\rho_L - \rho_V)/\rho_V}$.
2. **Impingement:** knitted wire-mesh pads (demisters): droplets, by inertia, cannot follow the gas around the wires; they hit, coalesce into larger drops and drain back. Efficient down to a few μm.
3. **Change of direction:** chevron (zig-zag) vane packs or baffles force the vapor to turn sharply; drops strike the vanes and drain in hooks/pockets.
4. **Centrifugal action:** tangential vapor entry or a cyclone separator spins the vapor; drops are thrown to the wall and flow down to the liquor.

Foaming liquors (milk, organics) need extra disengaging height, anti-foam or mechanical foam breakers.`,
          answer: String.raw`Removes liquor droplets from evaporator vapor by gravity settling in a large head, impingement on wire mesh, sharp changes of direction on chevron baffles, or centrifugal force in a cyclone; liquid drains back to the body.` }
      ] },
    { id: "2017-18-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q2a", label: "(a)", marks: "10",
          topic: "crystallization", sub: "Heat removed per ton of MgSO₄·7H₂O crystals (H–x chart)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A 32.5 percent solution of MgSO₄ at 120 °F (48.9 °C) is cooled, without appreciable evaporation, to 70 °F (21.1 °C) in a batch water cooled crystallizer. How much heat must be removed from the solution per ton of crystals?

Figures for Q2(a) (attached to the paper): MSH Fig. 27.3 phase diagram of MgSO₄–H₂O and Fig. 27.4 enthalpy–concentration diagram of MgSO₄–H₂O (datum: liquid water at 32 °F).`,
          solution: String.raw`**Given:** 32.5 % MgSO₄ solution, 120 °F → 70 °F, no evaporation. **Find:** heat removed per ton of crystals. **Basis:** 100 lb of original solution.
**Assumptions:** batch cooling ends at equilibrium at 70 °F; the crystals at 70 °F are MgSO₄·7H₂O (phase diagram, Fig. 27.3).

1. **Initial enthalpy** (Fig. 27.4): the point x = 0.325 on the 120 °F isotherm lies in the undersaturated-solution field: $H_1$ = −33.0 Btu/lb.
2. **Final enthalpy:** the final magma lies on the 70 °F isotherm in the area *cihb* (MgSO₄·7H₂O + mother liquor) at the same overall concentration 0.325: $H_2$ = −78.4 Btu/lb.

![How to read the MgSO₄–H₂O enthalpy–concentration chart: x = 0.325 at 120 °F → H₁ = −33.0; on the 70 °F tie line → H₂ = −78.4 Btu/lb](fig/2017-18-Q2a-read.svg)

3. **Heat removed** per 100 lb solution:
$$Q = 100(H_1 - H_2) = 100(-33.0 + 78.4) = 4540\ \mathrm{Btu}$$
4. **Crystal yield** by the lever (centre-of-gravity) rule on the 70 °F isotherm: mother liquor x = 0.259 (Fig. 27.3); crystals MgSO₄·7H₂O, x = 120.4/246.5 = 0.488:
$$m_c = 100\,\frac{0.325 - 0.259}{0.488 - 0.259} = 28.8\ \mathrm{lb\ crystals}$$
5. **Per ton (2000 lb) of crystals:**
$$\frac{Q}{m_c} \times 2000 = \frac{4540}{28.8}\times 2000 = 3.16\times10^5\ \mathrm{Btu/ton}$$

**Result:** about **315,000 Btu per ton of MgSO₄·7H₂O crystals** (≈ 3.67 × 10⁵ kJ per tonne); 28.8 lb crystals per 100 lb solution.`,
          answer: String.raw`H(32.5 %, 120 °F) = −33.0, H(magma, 70 °F) = −78.4 Btu/lb → 4540 Btu/100 lb; crystals 28.8 lb/100 lb (liquor 0.259, crystals 0.488) → ≈ 3.15 × 10⁵ Btu/ton crystals.` },
        { id: "2017-18-Q2b", label: "(b)", marks: "10",
          topic: "crystallization", sub: "Homogeneous versus heterogeneous nucleation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is the difference between homogeneous and heterogeneous nucleation?`,
          solution: String.raw`**Nucleation** is the birth of new crystals. **Primary nucleation** occurs without crystals of the solute present; it is homogeneous or heterogeneous. (**Secondary** nucleation is caused by existing crystals: contact with other crystals, the impeller or walls; it dominates in industrial crystallizers at low supersaturation.)

| | Homogeneous nucleation | Heterogeneous nucleation |
|---|---|---|
| Where | spontaneously in the bulk of a perfectly clean solution | on foreign surfaces: dust, insoluble impurities, vessel walls, colloids |
| Mechanism | molecular clusters (embryos) form by random fluctuations; those exceeding the critical size grow | foreign surface lowers the interfacial energy needed to form the nucleus |
| Energy barrier | $\Delta G^*_{hom} = \dfrac{16\pi\sigma^3 v_m^2}{3(kT\ln s)^2}$, critical radius $r^* = \dfrac{2\sigma v_m}{kT\ln s}$ | $\Delta G^*_{het} = \phi\,\Delta G^*_{hom}$, $\phi = \dfrac{(2+\cos\theta)(1-\cos\theta)^2}{4} < 1$ (θ contact angle) |
| Supersaturation needed | high: occurs only in the **labile** zone, beyond the supersolubility curve | lower: can occur in the metastable zone |
| Rate | $B = A\exp(-\Delta G^*/kT)$: extremely sensitive to supersaturation (shower of fine crystals) | moderate; depends on number and nature of foreign particles |
| Practice | rare in industry (solutions are never free of foreign particles); gives uncontrolled fines | the usual "primary" nucleation; controlled by filtering feed and by seeding |`,
          answer: String.raw`Homogeneous: spontaneous in a clean bulk solution, high barrier ΔG* ∝ σ³/(ln s)², needs labile-zone supersaturation. Heterogeneous: on foreign surfaces (dust, walls), barrier reduced by φ(θ) < 1, occurs at lower supersaturation; both are primary (no solute crystals).` },
        { id: "2017-18-Q2c", label: "(c)", marks: "10⅔",
          topic: "crystallization", sub: "Draft-tube-baffle crystallizer: schematic and salient features",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw a schematic diagram of Draft tube-baffle crystallizer and discuss the salient features.`,
          solution: String.raw`![DTB crystallizer: draft tube and propeller, skirt baffle forming a settling zone, fines dissolving loop, vacuum vapor outlet](fig/2018-19-Q6c-sol.svg)

**Construction and operation**
- A vacuum crystallizer body with a central **draft tube** and a slow, large **propeller** at its bottom that circulates the magma up the tube to the boiling surface and down the annulus.
- At the surface the magma **flashes** (adiabatic evaporative cooling under vacuum), becomes slightly supersaturated and the supersaturation is relieved by **growth** on the dense circulating crystal suspension.
- A **skirt baffle** around the draft tube creates a quiet **settling zone**; small crystals (fines) rise with a stream of mother liquor drawn from this zone, are **dissolved** in an external heater (or by dilution) and returned with the feed to the bottom of the draft tube.
- Product magma is withdrawn from the bottom (sometimes through an elutriation leg for classification); vapor goes to a condenser/ejector system.

**Salient features**
1. Controlled nucleation by **fines destruction** → large, uniform crystals with a narrow CSD.
2. Supersaturation is generated at the boiling surface, not on a heating surface → little scaling, long runs.
3. High circulation at low tip speed → low secondary nucleation and little crystal breakage.
4. Continuous, high capacity; used for KCl, ammonium sulphate, NaCl and other salts where excessive nucleation would occur in a simple vacuum crystallizer.`,
          answer: String.raw`Vacuum body with propeller-driven draft tube (up the tube, flash at surface, down the annulus), skirt baffle forming a settling zone, external fines-dissolving loop with feed return; gives large uniform crystals, controlled nucleation, little scaling.` },
        { id: "2017-18-Q2d", label: "(d)", marks: "16",
          topic: "mixing", sub: "Standard turbine shape factors; power number as function of Re",
          type: "derivation", syllabus: "in", repeats: ["2018-19-Q4b", "2016-17-Q3c", "2016-17-Q3b", "2014-15-Q7d", "2013-14-Q7b", "2012-13-Q7c"],
          text: String.raw`Write the values of shape factor standard turbine. Prove that Power Number is proportional to the Reynolds Number for an adequately baffled, geometrically similar systems.`,
          solution: String.raw`**Standard turbine design (MSH):** six-blade flat-blade disc (Rushton) turbine, four baffles, flat-bottomed tank filled to a depth equal to its diameter.

| Shape factor | Definition | Standard value |
|---|---|---|
| $S_1$ | $D_a/D_t$ (impeller/tank diameter) | 1/3 |
| $S_2$ | $E/D_a$ (clearance off bottom/impeller dia.) | 1 (E/D_t = 1/3) |
| $S_3$ | $L/D_a$ (blade length) | 1/4 |
| $S_4$ | $W/D_a$ (blade width) | 1/5 |
| $S_5$ | $J/D_t$ (baffle width) | 1/12 |
| $S_6$ | $H/D_t$ (liquid depth) | 1 |

**Proof** (the statement means $N_P$ is a **function** of $N_{Re}$ only; it is inversely proportional to Re in laminar flow):

1. $P = f(n, D_a, \rho, \mu, g, S_1 \ldots S_6)$. Dimensions: P $ML^2T^{-3}$, n $T^{-1}$, $D_a$ L, ρ $ML^{-3}$, μ $ML^{-1}T^{-1}$, g $LT^{-2}$; 6 variables − 3 dimensions = 3 groups (repeating n, $D_a$, ρ).
2. $P n^aD_a^b\rho^c$ dimensionless: M: $1 + c = 0$, L: $2 + b - 3c = 0$, T: $-3 - a = 0$ → $N_P = P/(\rho n^3D_a^5)$ (fps: $Pg_c/\rho n^3D_a^5$).
3. Similarly $\mu/(\rho nD_a^2) = 1/N_{Re}$ and $g/(n^2D_a) = 1/N_{Fr}$.
4. Hence $N_P = \psi(N_{Re}, N_{Fr}, S_1, \ldots, S_6)$.
5. Geometric similarity: all $S_i$ constant → $N_P = \psi(N_{Re}, N_{Fr})$.
6. Adequate baffling suppresses the vortex; gravity (Froude number) only acts through the vortex, so it drops out:
$$N_P = \psi(N_{Re})$$
7. Laminar ($N_{Re} < 10$): $N_P = K_L/N_{Re}$, i.e. $N_P \propto N_{Re}^{-1}$, $P = K_Ln^2D_a^3\mu$ ($K_L$ ≈ 65 for a six-blade turbine). Turbulent ($N_{Re} > 10^4$): $N_P = K_T$ ≈ 5.75, $P = K_Tn^3D_a^5\rho$.`,
          answer: String.raw`Standard turbine: D_a/D_t = 1/3, E/D_a = 1, L/D_a = 1/4, W/D_a = 1/5, J/D_t = 1/12, H/D_t = 1. Dimensional analysis gives N_P = ψ(Re, Fr, S_i); similarity removes S_i and baffles remove Fr → N_P = ψ(Re) (∝ 1/Re laminar, constant turbulent).` }
      ] },
    { id: "2017-18-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q3a", label: "(a)", marks: "12",
          topic: "compressors", sub: "Two-stage compression with 3 psi interstage drop: stage pressures",
          type: "numerical", syllabus: "partial", repeats: ["2019-20-Q7b", "2016-17-Q1b"],
          text: String.raw`For two stages of compression, what should be the pressure across the cylinders if the intercooler and piping pressure drop is 3 psi? Given Suction to the first stage is 0 psig and discharge from the second stage is 150 psig.`,
          solution: String.raw`**Given:** $P_1$ = 0 psig = 14.7 psia; final discharge 150 psig = 164.7 psia; intercooler + piping drop Δp = 3 psi.
**Find:** suction and discharge pressure of each cylinder.
**Assumptions:** equal compression ratio R in both stages (minimum total work with intercooling to the original temperature), so the 3 psi loss is shared by raising both ratios slightly.

1. **Without the drop:** $R = \sqrt{164.7/14.7} = 3.347$; first-stage discharge would be 49.2 psia.
2. **With the drop:** stage 1: 14.7 → $14.7R$; stage 2 suction: $14.7R - 3$; stage 2 discharge: $R(14.7R - 3) = 164.7$
$$14.7R^2 - 3R - 164.7 = 0 \;\Rightarrow\; R = \frac{3 + \sqrt{9 + 4(14.7)(164.7)}}{2(14.7)} = 3.451$$
3. **Pressures:**

| | Suction | Discharge | Ratio |
|---|---|---|---|
| Stage 1 | 14.7 psia (0 psig) | 14.7 × 3.451 = 50.7 psia (36.0 psig) | 3.451 |
| Intercooler + piping | 50.7 → 47.7 psia | (−3 psi) | |
| Stage 2 | 47.7 psia (33.0 psig) | 164.7 psia (150 psig) | 3.451 |

**Result:** first cylinder 0 → 36.0 psig (14.7 → 50.7 psia), second cylinder 33.0 → 150 psig (47.7 → 164.7 psia); ratio 3.45 per stage instead of 3.35.`,
          answer: String.raw`Equal ratios: 14.7R² − 3R − 164.7 = 0 → R = 3.45; stage 1: 14.7 → 50.7 psia (0 → 36 psig); stage 2: 47.7 → 164.7 psia (33 → 150 psig).` },
        { id: "2017-18-Q3b", label: "(b)", marks: "20⅔",
          topic: "pumps", sub: "Pump type and impeller size for 300 gal/min at 70 ft",
          type: "numerical", syllabus: "in", repeats: ["2020-21-Q3a", "2019-20-Q7a", "2018-19-Q2d", "2016-17-Q4b", "2014-15-Q7b", "2012-13-Q7d", "2011-12-Q8d"],
          text: String.raw`It is necessary to pump a liquid with properties similar to the water at a rate of 300 gal/min against a head of 70 ft. Recommend the type of pump and select the appropriate size of the impeller.

Figures for Q3(b) (attached to the paper): Foust Fig. 21.19 (characteristic curves and specific speeds for radial-, mixed- and axial-flow impellers: radial up to $N_s$ ≈ 4200, mixed 4200–9000, axial above 9000) and Foust Fig. 21.23 (operating ranges of a series of Goulds centrifugal pumps at 1750 rpm, labelled discharge × suction − maximum impeller diameter in inches).`,
          solution: String.raw`**Given:** Q = 300 gal/min, H = 70 ft, water-like liquid.
**Find:** pump type, model and impeller diameter.
**Assumptions:** 1750 rpm (chart speed), s.g. = 1, efficiency ≈ 70 %.

1. **Specific speed** (US units, Fig. 21.19):
$$N_s = \frac{n\sqrt{Q}}{H^{3/4}} = \frac{1750\sqrt{300}}{70^{3/4}} = \frac{1750 \times 17.32}{24.2} = 1253$$
   $N_s$ < 4200 → **radial-flow (standard) centrifugal** impeller. Table 21.1 agrees: standard centrifugal pumps cover 100–200,000 gal/min and up to 600 ft single stage, and water needs no metering.

![How to read the specific-speed chart: Ns ≈ 1253 → radial-flow field](fig/2017-18-Q3b-read2.svg)

2. **Pump size (Fig. 21.23):** at 300 gal/min the boundary between the **3×4−8** and **3×4−10** areas is at about 71 ft; the duty point (70 ft) is on that boundary, at the top of the 3×4−8 range.

![How to read Fig. 21.23: 300 gpm, 70 ft → edge of the 3×4-10 field](fig/2017-18-Q3b-read.svg)

3. **Impeller size by the affinity laws for trimming** ($Q \propto D$, $H \propto D^2$ at the same speed):
   - 3×4−10: full 10 in. impeller gives about 88 ft at 300 gal/min; the trimmed diameter through (300, 70) satisfies $(D/10)^2H_{10}(300\cdot10/D) = 70$ → **D ≈ 9.1 in.**, i.e. a **9 in. impeller**.
   - 3×4−8: needs D ≈ 7.9 in., essentially its maximum 8 in. impeller (no margin).
4. **Power:** water hp = 300 × 70/3960 = 5.30 hp; brake hp ≈ 5.30/0.70 = 7.6 hp → 10 hp motor.

**Result:** single-stage standard radial-flow centrifugal pump ($N_s$ ≈ 1250), Goulds **3×4−10 at 1750 rpm with a ≈ 9 in. impeller** (the 3×4−8 would need its full 8 in. impeller); about 7.6 bhp, 10 hp motor. Check NPSH available against the pump's curve.`,
          answer: String.raw`N_s ≈ 1250 → radial-flow centrifugal; on Fig. 21.23 the point is on the 3×4−8/3×4−10 boundary → 3×4−10, 1750 rpm, impeller ≈ 9 in. (3×4−8 would need its full 8 in.); ≈ 7.6 bhp, 10 hp motor.` },
        { id: "2017-18-Q3c", label: "(c)", marks: "7+7",
          topic: "pumps", sub: "Multistage centrifugal pump; centrifugal pump characteristic curves",
          type: "sketch", syllabus: "in", repeats: ["2014-15-Q7c", "2011-12-Q8c"],
          text: String.raw`Write a short note on
i. Multistage Centrifugal pump
ii. Characteristics Curves of Centrifugal pump.`,
          solution: String.raw`![Multistage pump with impellers in series; head, efficiency, brake power and NPSHr versus capacity](fig/2017-18-Q3c-sol.svg)

**(i) Multistage centrifugal pump**
- Two or more impellers in **series** on one shaft in one casing; liquid leaving one impeller is led by crossover passages/diffusers to the eye of the next. The **same flow** passes every stage and the **heads add**: $H \approx n_{stages} \times H_{stage}$.
- Used when the head is too high for one impeller at acceptable speed and diameter: boiler feed, high-pressure process injection, pipeline, RO and mine-dewatering service (standard centrifugals reach about 600 ft per stage; multistage up to ~6000 psi).
- Construction: horizontal axially split, ring-section (segmental) or barrel casings; vertical can pumps. Impellers may be arranged back-to-back, or a **balancing drum/disc** is used, to cancel axial thrust.
- NPSH required is set by the first stage (often a double-suction or inducer first stage). Parallel arrangement (double-suction or two impellers in parallel) is used instead for high flow.

**(ii) Characteristic curves** (at constant speed and impeller diameter, from tests)
- **H–Q:** head is highest at zero flow (**shut-off head**) and falls as flow rises; a steady falling (stable) curve is needed for parallel operation.
- **η–Q:** zero at zero flow, rises to a maximum at the **best efficiency point (BEP)**, then falls; select pumps near BEP (70–110 % of BEP flow).
- **Brake power–Q:** $P = \rho gQH/\eta$; for radial pumps it rises with flow (motor sized for end-of-curve, "run-out"); axial pumps (Fig. 21.19) have highest power at shut-off.
- **NPSHr–Q:** rises with flow; NPSH available must exceed it with margin to avoid cavitation.
- Operating point = intersection with the **system curve** $H_{sys} = \Delta z + \Delta P/\rho g + KQ^2$; changes with speed/diameter follow the affinity laws $Q \propto nD$, $H \propto n^2D^2$, $P \propto n^3D^3$.`,
          answer: String.raw`(i) Impellers in series on one shaft: same flow, heads add; for high heads (boiler feed etc.); thrust balanced by opposed impellers or balancing drum. (ii) H falls from shut-off, η peaks at BEP, power rises with Q (radial), NPSHr rises; operating point at the system-curve intersection; affinity laws.` }
      ] },
    { id: "2017-18-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q4a", label: "(a)", marks: "16",
          topic: "ejectors", sub: "Fixed-capacity ejector and steam pressure; eight advantages of ejectors",
          type: "theory", syllabus: "in", repeats: ["2020-21-Q3b", "2018-19-Q2c"],
          text: String.raw`"In a fixed capacity ejector, increase in steam pressure do not increase vapor handling capacity" – explain the statement. Why Ejector is attractive for industrial application? State 8 reasons.`,
          solution: String.raw`**Explanation.** The steam nozzle and diffuser of a fixed-capacity ejector are proportioned for one design duty (motive pressure, load, discharge pressure). The nozzle is choked, so steam flow rises in direct proportion to the absolute steam pressure. Extra steam must pass the same fixed diffuser throat and be compressed to the discharge pressure; it takes up diffuser capacity that the suction load would otherwise use. The entrained vapor flow therefore does not rise and usually falls a little (Ludwig Fig. 6-12), while steam consumption rises. Higher pressure only improves stability against back-pressure. That is why design steam pressure is taken as the minimum expected at the nozzle (line pressure − 10 psi); throttling-type ejectors, with lower compression ratio, are the only kind with a family of curves vs motive pressure.

**Why ejectors are attractive (eight reasons)**
1. **No moving parts:** no rotating or sliding parts to wear, so very reliable and low maintenance.
2. **Low first cost** and simple, quick installation; little floor space (can be mounted outdoors, in any position).
3. **Handle corrosive, wet and dirty gases:** can be made of any machinable material (cast iron, stainless, Hastelloy, graphite, glass, plastics).
4. **Handle condensable vapors and liquid slugs** without damage (a mechanical pump would be wrecked).
5. **Large volumes at low absolute pressure**, and by staging (with intercondensers) down to a few μm Hg.
6. **Use plant steam** (or other available motive fluid) directly; no electric drive, no sparking in hazardous areas.
7. **No lubrication** and no contamination of the process by oil.
8. **Easy operation and control**, quiet start-up and shut-down, long life; can be standardised and combined with mechanical pumps (ejector ahead of a liquid-ring pump).

(Main drawback: low thermodynamic efficiency → high steam and cooling-water consumption.)`,
          answer: String.raw`Choked nozzle: more pressure → more steam (∝ P_s) through a diffuser sized for the design duty, so no gain (often a loss) in entrained vapor. Attractive: no moving parts, low cost, small, corrosion-resistant materials, handle condensables/slugs, large volumes at deep vacuum by staging, use plant steam, no lubrication, simple and reliable.` },
        { id: "2017-18-Q4b", label: "(b)", marks: "12⅔",
          topic: "drying", sub: "Merits of spray-dried products",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q3c", "2019-20-Q6b"],
          text: String.raw`Discuss the merits of Spray dried product.`,
          solution: String.raw`In a spray dryer the feed (solution, slurry or paste) is atomized by a nozzle or spinning disc into hot gas; drops dry in seconds and the powder is collected in cyclones/bag filters. The product has these merits:

1. **Spherical, hollow/porous particles** of fairly uniform size: free-flowing, non-dusty, easy to package and meter.
2. **Excellent solubility/dispersibility** (instant milk, coffee, detergents) because the particles are porous and can be agglomerated.
3. **Heat-sensitive material is protected:** contact time is a few seconds and evaporative cooling keeps the droplet near the wet-bulb temperature even with hot inlet gas, so colour, flavour, vitamins and enzymes are preserved (milk, eggs, pharmaceuticals, blood products).
4. **Direct from liquid to finished powder:** one operation replaces evaporation, crystallization, filtration, drying, size reduction and classification, so the product is not handled while wet and contamination is low.
5. **Controllable properties:** particle size, bulk density and moisture are adjusted by atomizer speed/pressure, feed solids and gas temperatures.
6. **Consistent quality and hygiene** from continuous, automated operation in closed stainless equipment.
7. **Low residual moisture** with uniform distribution; good storage stability.

(Limitations: lower thermal efficiency and large equipment; bulk density sensitive to feed solids and inlet temperature.)`,
          answer: String.raw`Spherical porous free-flowing uniform particles, high solubility/instant properties, minimal heat damage (seconds of contact at near wet-bulb temperature), liquid to finished powder in one step, controllable size and density, hygienic uniform low-moisture product.` },
        { id: "2017-18-Q4c", label: "(c)", marks: "9+9",
          topic: "drying", sub: "Tunnel kiln dryer; principle of drying and drying-rate curve",
          type: "theory", syllabus: "in", repeats: ["2019-20-Q6b", "2015-16-Q4a", "2012-13-Q8c"],
          text: String.raw`Write a short note on
i. Tunnel Kiln Dryer
ii. Principle of Drying.`,
          solution: String.raw`**(i) Tunnel kiln dryer**

![Tunnel kiln: trucks of wet solids move through a refractory tunnel countercurrent to hot gas](fig/2017-18-Q4c-sol.svg)

- A long refractory-lined tunnel; the wet solids are loaded on trays or **trucks** that move progressively from the wet end to the dry end, in contact with hot combustion gases or air.
- Gas and solids may flow **countercurrent** (highest thermal efficiency; driest air meets driest solid), **parallel** (wet solids meet hottest gas, good for heat-sensitive or crack-prone articles) or a **combination** (centre exhaust).
- Usually direct-fired; air below about 200 °C can be heated by finned steam coils. The tunnel is built of several **units/zones, each with its own burners and controls** (e.g. the two computer-controlled natural-gas tunnel kilns at BISF, Dhaka, for sanitary ware and insulators).
- Used for large quantities and large irregular objects: ceramics, bricks, refractories, lumber; continuous, low labour, good control; high capital cost.

**(ii) Principle of drying**

Drying is simultaneous **heat transfer** (to supply latent heat) and **mass transfer** (vapor from the surface to the gas). Under constant drying conditions, the rate per unit area, $R = -\dfrac{m_s}{A}\dfrac{dX}{dt}$, follows the drying-rate curve:

![Drying-rate curve: warm-up, constant-rate period to the critical moisture, falling-rate period to equilibrium](fig/2017-18-Q4c-sol2.svg)

1. **Warm-up (A–B):** solid heats to the wet-bulb temperature.
2. **Constant-rate period (B–C):** the surface is covered with free water; it evaporates like a free water surface at $T_{wb}$; rate fixed by external conditions: $R_c = h(T - T_{wb})/\lambda_{wb} = k_y(Y_{wb} - Y)$; depends on gas velocity, temperature and humidity.
3. **Critical moisture content $X_c$ (C):** the surface can no longer be kept wet.
4. **Falling-rate period (C–E):** first unsaturated surface drying, then **internal** movement controls (liquid diffusion or capillary flow); rate falls toward zero as X → $X^*$ (equilibrium moisture).
5. **Drying time:** $t = \dfrac{m_s}{A}\left[\dfrac{X_1 - X_c}{R_c} + \displaystyle\int_{X_2}^{X_c}\dfrac{dX}{R}\right]$; for a linear falling rate $t_f = \dfrac{m_s(X_c - X^*)}{AR_c}\ln\dfrac{X_c - X^*}{X_2 - X^*}$.`,
          answer: String.raw`(i) Trucks of wet solids move through a zoned, refractory-lined, usually direct-fired tunnel, countercurrent/parallel/combined with hot gas; for ceramics, bricks, large articles. (ii) Combined heat and mass transfer: warm-up, constant-rate period at T_wb (external control) to X_c, falling-rate period (internal diffusion) to X*; t from the rate curve.` }
      ] },
    { id: "2017-18-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q5a", label: "(a)", marks: "10",
          topic: "other", sub: "Merits and demerits of steam turbines",
          type: "theory", syllabus: "out", repeats: [],
          text: String.raw`Discuss the merits and demerits of steam Turbine.`,
          solution: String.raw`*Steam turbines are not in the current slides; answer from Lieberman / standard texts.*

**Merits**
- Pure rotary motion: smooth, balanced, little vibration; no reciprocating parts, small foundations.
- High power from a compact, light machine; high speed suits centrifugal compressors and pumps directly.
- **Variable speed** easily by the governor, a natural way to control compressor capacity and avoid surge.
- High efficiency in large sizes (multistage condensing); exhaust or extracted steam can supply process heat (**cogeneration**), giving very high overall energy use.
- Reliable, long life, low maintenance; no internal lubrication, so exhaust steam is oil-free.
- Spark-free driver for hazardous (flammable) areas; keeps critical pumps running during power failure.
- Wide range of power (a few kW to > 1000 MW), uses steam from waste-heat boilers.

**Demerits**
- Needs a boiler, water treatment, steam piping and (for condensing types) a condenser, cooling water and vacuum system.
- Small single-stage turbines have poor efficiency (high steam rate).
- Very high speeds need reduction gears for low-speed loads.
- Slow start-up (warm-up to avoid thermal stress), poor efficiency at part load (throttling), sensitive to wet steam (blade erosion) and to deposits.
- Noise; erosion/corrosion of LP blades; high first cost of large units.`,
          answer: String.raw`Merits: smooth rotary, compact, high speed, variable-speed control, high efficiency in large/multistage units, cogeneration, reliable, oil-free exhaust, spark-free. Demerits: needs boiler/condenser/water treatment, poor efficiency when small or at part load, gears for low speed, slow start, blade erosion, noise.` },
        { id: "2017-18-Q5b", label: "(b)", marks: "11",
          topic: "other", sub: "Comparison of impulse and reaction turbines",
          type: "theory", syllabus: "out", repeats: ["2015-16-Q5e", "2011-12-Q2a"],
          text: String.raw`Make comparison between Impulse turbine and Reaction Turbine.`,
          solution: String.raw`| Point | Impulse turbine | Reaction turbine |
|---|---|---|
| Pressure drop | only in the fixed **nozzles**; pressure constant across moving blades | in both fixed and moving blades (degree of reaction ≈ 50 % in Parsons) |
| Blade passages | moving blades have constant cross-section (symmetrical profile) | moving blades form converging nozzles (aerofoil profile) |
| Force on blades | change of momentum (impulse) only | impulse + reaction of the steam accelerating in the moving passages |
| Relative velocity | $V_{r2} = V_{r1}$ (no friction) | $V_{r2} > V_{r1}$ |
| Steam admission | partial admission possible (nozzles over part of the circumference) | full admission all round |
| Blade-speed ratio for max efficiency | $U/V_1 = \cos\alpha/2$ | $U/V_1 \approx \cos\alpha$ (50 % reaction) |
| Stages for a given drop | fewer stages; compounded (Curtis, Rateau) | more stages (smaller drop per stage) |
| Axial thrust | small (no pressure difference across moving row) | large; needs balance piston/dummy |
| Leakage | little; tip clearance not critical | tip leakage significant; tight clearances |
| Efficiency | lower at small blade heights; good for HP end and small units | higher in LP sections and large units |
| Size and cost | compact, cheaper, used for small drivers and the HP control stage | longer, costlier; used in large power turbines |
| Example | De Laval, Curtis, Rateau | Parsons |`,
          answer: String.raw`Impulse: pressure drops only in nozzles, symmetric blades, V_r2 = V_r1, partial admission, small thrust, optimum U/V₁ = cos α/2, compact. Reaction: drop in fixed and moving rows, aerofoil converging blades, V_r2 > V_r1, full admission, large thrust, optimum U/V₁ ≈ cos α, more stages, higher efficiency in large units.` },
        { id: "2017-18-Q5c", label: "(c)", marks: "25⅔",
          topic: "other", sub: "Maximum blade efficiency cos²α for symmetric impulse blade",
          type: "derivation", syllabus: "out", repeats: [],
          text: String.raw`If the friction over blade surface is neglected for impulse turbine, show that the maximum value of blade efficiency

$$(\eta_b)_{max} = \cos^2\alpha$$

where the blades are symmetrical.`,
          solution: String.raw`**Notation:** $V_1$ absolute steam velocity leaving the nozzle at angle α to the blade motion; U blade speed; $V_{r1}, V_{r2}$ relative velocities at inlet and exit at blade angles $\beta_1, \beta_2$; $V_{w1}, V_{w2}$ whirl (tangential) components of absolute velocity.

![Inlet and exit velocity triangles for a symmetrical impulse blade, and η_b versus U/V₁](fig/2017-18-Q5c-sol.svg)

1. **Work per kg of steam** (Euler): $W = U(V_{w1} + V_{w2})$ ($V_{w2}$ counted positive when opposite to U).
2. **Energy supplied per kg:** kinetic energy of the jet, $V_1^2/2$. Blade efficiency:
$$\eta_b = \frac{U(V_{w1} + V_{w2})}{V_1^2/2} = \frac{2U\,\Delta V_w}{V_1^2}$$
3. **Inlet triangle:** $V_{w1} = V_1\cos\alpha$; $V_{r1}\cos\beta_1 = V_1\cos\alpha - U$.
4. **Exit triangle:** for an impulse blade the pressure is constant across the blades; with **no friction** $V_{r2} = V_{r1}$, and for **symmetrical blades** $\beta_2 = \beta_1$, so $V_{r2}\cos\beta_2 = V_{r1}\cos\beta_1$. The whirl component at exit (opposite to U) is $V_{w2} = V_{r2}\cos\beta_2 - U$.
5. **Change of whirl:**
$$\Delta V_w = V_{w1} + V_{w2} = (V_{r1}\cos\beta_1 + U) + (V_{r1}\cos\beta_1 - U) = 2V_{r1}\cos\beta_1 = 2(V_1\cos\alpha - U)$$
6. **Efficiency in terms of ρ = U/V₁:**
$$\eta_b = \frac{2U \cdot 2(V_1\cos\alpha - U)}{V_1^2} = 4\rho(\cos\alpha - \rho)$$
7. **Maximise:** $\dfrac{d\eta_b}{d\rho} = 4\cos\alpha - 8\rho = 0 \Rightarrow \rho_{opt} = \dfrac{\cos\alpha}{2}$; $\dfrac{d^2\eta_b}{d\rho^2} = -8 < 0$ (maximum).
8. **Maximum value:**
$$(\eta_b)_{max} = 4\cdot\frac{\cos\alpha}{2}\left(\cos\alpha - \frac{\cos\alpha}{2}\right) = \cos^2\alpha \qquad\blacksquare$$

**Remarks:** the optimum blade speed is half the whirl component of the jet; at that point $V_2$ is axial (minimum leaving loss). For α = 20°, $(\eta_b)_{max} = 0.883$ at U/V₁ = 0.47. With friction ($V_{r2} = kV_{r1}$) and unsymmetrical blades ($c = \cos\beta_2/\cos\beta_1$): $\eta_b = 2\rho(\cos\alpha - \rho)(1 + kc)$, maximum $\tfrac{1}{2}\cos^2\alpha\,(1 + kc)$, which reduces to $\cos^2\alpha$ for k = c = 1.`,
          answer: String.raw`η_b = 2UΔV_w/V₁² with ΔV_w = 2(V₁cos α − U) (V_r2 = V_r1, β₂ = β₁) → η_b = 4ρ(cos α − ρ); dη/dρ = 0 at ρ = cos α/2 → (η_b)max = cos²α.` }
      ] },
    { id: "2017-18-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q6a", label: "(a)", marks: "15",
          topic: "relief", sub: "Major types of relief devices with sketches",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`With neat sketch, discuss the major types of relief devices.`,
          solution: String.raw`![Conventional spring valve, balanced-bellows valve, pilot-operated valve and rupture disc](fig/2017-18-Q6a-sol.svg)

Two general categories (Crowl & Louvar ch. 8): **spring-operated (reclosing) valves** and **rupture discs (non-reclosing)**; plus pilot-operated valves and special devices.

1. **Conventional spring-operated valve.** A spring holds the disc on the nozzle seat; the valve opens when $P_1A_N$ exceeds the spring force. Set pressure is adjusted by the spring (≈ 10 % above normal operating pressure). Opening pressure and flow both depend on back-pressure (bonnet open to the outlet). Service names:
   - *Relief valve* (liquids): begins to open at the set pressure, fully open at 25 % overpressure, reseats.
   - *Safety valve* (gases): pops fully open just above set; reseats about 4 % below set (blowdown).
   - *Safety-relief valve*: works as a relief valve for liquids and a safety valve for gases.
2. **Balanced-bellows valve.** A bellows (area = nozzle area) isolates the top of the disc and the spring from the outlet; bonnet vented to atmosphere. Opens at the set pressure regardless of back-pressure; spring protected from corrosive fluid. Costlier; used where back-pressure is large or variable (common headers, scrubbers, flares).
3. **Pilot-operated valve.** Process pressure acts on top of a large main piston/dome and holds it shut; a small pilot valve senses the inlet pressure and, at set, vents the dome so the main valve opens fully. Tight seating up to ~95–98 % of set, little blowdown, large capacities, insensitive to back-pressure (with backflow preventer); not for dirty/polymerising fluids that plug the pilot.
4. **Rupture (bursting) disc.** A thin metal (or graphite) membrane in a holder bursts at a designed pressure. Forms: forward-acting tension (prebulged), scored, reverse-buckling with knife blades, composite. *Advantages:* simple, cheap, leak-tight, very large vent areas, fast (explosions, runaways), corrosion-proof materials; often used upstream of a spring valve to protect it (with a pressure gauge between them). *Disadvantages:* does not reclose (all contents can be lost, air can enter), can fail early by corrosion or pressure cycling (operate below about 70–90 % of burst pressure).
5. **Others:** rupture (buckling) pins, weight-loaded pressure/vacuum vents and emergency covers for storage tanks, explosion panels/doors for deflagrations, fusible plugs.`,
          answer: String.raw`Conventional spring valves (relief/safety/safety-relief; set depends on back-pressure), balanced-bellows valves (set independent of back-pressure), pilot-operated valves (tight, low blowdown, large capacity), rupture discs (non-reclosing, cheap, large area, often ahead of a valve); plus pins, tank P/V vents, explosion panels.` },
        { id: "2017-18-Q6b", label: "(b)", marks: "8",
          topic: "relief", sub: "Why relief sizing matters in petrochemical plants",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why do you think that relief sizing is important in petrochemical industry.`,
          solution: String.raw`- **Last layer of protection:** a relief device is the final engineered safeguard against vessel rupture; it only works if it can pass the **worst credible relief load** at a pressure within code limits (10 % overpressure single valve, 16 % multiple, 21 % fire).
- **Undersized relief:** pressure keeps rising after it opens → vessel rupture, explosion, fire, toxic release (Flixborough-type consequences in plants holding large inventories of flammable hydrocarbons at high pressure and temperature).
- **Oversized relief:** a spring valve passing less than 25–30 % of its capacity **chatters** (rapid open/close), damaging seat and piping and causing leaks; larger releases than needed, bigger and costlier headers, flares and containment.
- **Correct physics:** petrochemical reliefs include vapor, liquid and **two-phase** (runaway, foamy) flow; using the wrong equation can underestimate the area several-fold, so scenarios, data (calorimetry) and the right model (DIERS) are essential.
- **Downstream design depends on it:** header size, back-pressure (choice of conventional vs bellows), knockout drum, flare and scrubber capacity are all fixed by the relief rates.
- **Codes, regulation and insurance:** ASME VIII, API 520/521, OSHA PSM require documented sizing for every scenario; correct sizing protects personnel, environment, equipment, production, neighbouring property and lowers insurance cost.`,
          answer: String.raw`It is the last protection layer: undersizing allows rupture/explosion, oversizing causes chattering, leaks and oversized headers/flares; two-phase/runaway reliefs need correct models; downstream containment depends on the rates; codes (ASME, API 520/521, PSM) require it.` },
        { id: "2017-18-Q6c", label: "(c)", marks: "11⅔",
          topic: "relief", sub: "Types of relief containment and treatment systems",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss different types of relief containment system.`,
          solution: String.raw`Material discharged by relief devices is vented to **total containment and treatment** systems rather than to the atmosphere (C&L ch. 8), except harmless fluids such as steam, air or water.

![Relief header, knockout drum and catch tank, with vapor routed to condenser, scrubber, flare or incinerator](fig/2018-19-Q1a-sol.svg)

1. **Direct discharge to atmosphere:** only for non-toxic, non-flammable vapors (steam, air, N₂), through a vent stack at a safe height.
2. **Knockout (blowdown) drums:** horizontal or vertical vessels that separate liquid from the relieved two-phase stream by gravity; sized so the vapor velocity is below the settling velocity of the design droplet (drag-coefficient correlation); **tangential (cyclone) knockout drums** when space is limited. May contain a coolant to quench high-boiling material.
3. **Catch tanks / quench tanks:** receive and hold the liquid (e.g. a runaway reactor's contents); quench tanks contain cold liquid into which the discharge is sparged, condensing vapor and stopping reaction. Liquid is then recycled, treated or incinerated.
4. **Condensers:** recover condensable (high-boiling) vapors.
5. **Scrubbers (absorbers):** packed or spray columns that absorb/neutralise toxic or acid vapors (caustic for H₂S, Cl₂, HCl; water for NH₃, NO₂).
6. **Flares:** elevated or ground flares burn flammable or toxic hydrocarbons to CO₂ and H₂O; designed for stable flame and radiation ≤ 1500 Btu/h ft² at the base (flare height from C&L equation).
7. **Incinerators / thermal oxidisers:** destroy combustible or toxic vapors and liquids under controlled combustion.
8. **Combinations:** e.g. knockout drum → scrubber → flare for a toxic, flammable runaway release.`,
          answer: String.raw`Atmospheric vent (harmless only), knockout/blowdown drums (incl. tangential), catch and quench tanks, condensers, scrubbers, flares, incinerators, and combinations of these.` },
        { id: "2017-18-Q6d", label: "(d)", marks: "12",
          topic: "relief", sub: "Relief area for a dead-headed PD pump: 400 gpm, 400 psig",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A positive displacement pump can pump water at 400 gpm at a pressure of 400 psig. Because a dead headed Pump can be easily damaged, compute the area required to relieve the Pump. Assume a backpressure of 20 psig and 10% overpressure ($k_p$ = 0.6). Make appropriate assumption if necessary.`,
          solution: String.raw`**Given:** water, $Q_v$ = 400 gpm, set pressure $P_s$ = 400 psig (pump discharge pressure), $P_b$ = 20 psig, 10 % overpressure → $K_p$ = 0.6.
**Find:** required relief area.
**Assumptions:** conventional spring-operated liquid relief valve; $C_o$ = 0.61 (conservative); water at ambient temperature, Re > 5000 so $K_v$ = 1.0; $K_b$ = 1.0 (conventional valve; back-pressure enters through the ΔP term; 20/400 = 5 % back-pressure would also give $K_b$ ≈ 1 for a bellows valve); $\rho/\rho_{ref}$ = 1.

1. **API liquid relief equation** (C&L Eq. 9-6, English units):
$$A = \frac{Q_v}{38.0\,C_oK_vK_pK_b}\sqrt{\frac{\rho/\rho_{ref}}{1.25P_s - P_b}}$$
2. **Substitute:**
$$A = \frac{400}{38.0(0.61)(1.0)(0.6)(1.0)}\sqrt{\frac{1.0}{1.25(400) - 20}} = 28.76\sqrt{\frac{1}{480}} = 28.76(0.04564)$$
$$A = 1.31\ \mathrm{in^2}$$
3. **Diameter:** $d = \sqrt{4A/\pi} = \sqrt{4(1.31)/\pi} = 1.29$ in.
4. **Selection:** the standard API orifice J (1.287 in²) is just below the requirement, so the next size, **K (1.838 in²)**, would be specified.

**Result:** required relief area ≈ **1.31 in²** (≈ 1.3 in. diameter); select an API "K" orifice valve.`,
          answer: String.raw`A = 400/(38 × 0.61 × 1 × 0.6 × 1) × √[1/(1.25 × 400 − 20)] = 1.31 in² (d ≈ 1.29 in.); choose API orifice K (1.838 in²).` }
      ] },
    { id: "2017-18-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q7a", label: "(a)", marks: "12",
          topic: "size-reduction", sub: "Factors influencing ball-mill product size",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss the factors that influencing the size of the product of a Ball mill.`,
          solution: String.raw`(Coulson & Richardson Vol. 2, slides)

1. **Rate of feed:** a high feed rate shortens the residence time → coarser product.
2. **Properties of the feed:** larger feed gives a larger product; hard material gives smaller reduction under the same conditions.
3. **Weight of balls:** a heavier charge gives a finer product. Weight is raised by more balls or denser balls (steel instead of flint); because the best grinding occurs with the ball bulk volume ≈ 50 % of the mill volume, weight is usually changed through ball density.
4. **Diameter of balls:** small balls give a fine product but cannot break large feed; optimum ball size ∝ √(feed size); a mixture of sizes (12–125 mm) is used.
5. **Slope of the mill:** a steeper slope increases capacity (shorter retention) but gives a coarser product.
6. **Discharge freedom:** freer discharge (openings in the lining, grate discharge) acts like a steeper slope → coarser product, more capacity.
7. **Speed of rotation:** at low speed balls only roll over each other (little grinding); at 50–75 % of the critical speed they cascade/cataract and grind well; at and above the critical speed $n_c = 42.3/\sqrt{D-d}$ rpm they centrifuge and grinding stops.
8. **Level of material in the mill:** a low level reduces power; a high level cushions the balls, wastes power and gives excessive undersize.
9. **Wet or dry grinding and circuit:** wet grinding (20–30 % less power, fewer fines) and closed-circuit operation with a classifier give a more controlled product size.`,
          answer: String.raw`Feed rate, feed size and hardness, ball weight (density, 50 % ball volume), ball diameter, mill slope, freedom of discharge, speed (50–75 % of critical), material level, plus wet/dry and open/closed circuit.` },
        { id: "2017-18-Q7b", label: "(b)", marks: "8",
          topic: "size-reduction", sub: "Rittinger's law for fine grinding: true or false",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`For fine grinding, the energy required for size reduction is directly proportional to the increase in surface. True/False – Explain your answer.`,
          solution: String.raw`**True.** This is **Rittinger's law**, which holds best for fine grinding (about 10–1000 μm).

1. General law: $\dfrac{dE}{dL} = -C L^{p}$.
2. Rittinger: p = −2. Integrating from feed size $L_1$ to product size $L_2$:
$$E = C\left(\frac{1}{L_2} - \frac{1}{L_1}\right) = K_Rf_c\left(\frac{1}{L_2} - \frac{1}{L_1}\right)$$
3. Specific surface of particles of a given shape is $S = 6/(\phi_sL)$, i.e. ∝ 1/L, so
$$E \propto (S_2 - S_1)$$
   the energy is directly proportional to the **new surface created**.

**Why it applies to fine grinding:** in fine grinding a very large area is generated per unit mass and most of the useful energy goes into breaking bonds to create surface. In coarse crushing (> ~1 mm) little surface is created and the energy mainly produces elastic deformation before fracture, so **Kick's law** ($E = K_Kf_c\ln(L_1/L_2)$, p = −1) fits better; **Bond's law** (p = −3/2, $E = 0.3162\,E_i(1/\sqrt{L_2} - 1/\sqrt{L_1})$, L in mm, $E_i$ work index) covers the intermediate range. Note that only 0.1–2 % of the energy actually appears as surface energy.`,
          answer: String.raw`True — Rittinger's law, E = K_R f_c(1/L₂ − 1/L₁) ∝ (S₂ − S₁) since specific surface ∝ 1/L; valid for fine grinding where much new surface is made (Kick for coarse, Bond intermediate).` },
        { id: "2017-18-Q7c", label: "(c)", marks: "10",
          topic: "dust-collection", sub: "Avoiding particle re-entrainment in an ESP",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q8c"],
          text: String.raw`How could you avoid particles re-entrainment problem in electrostatic precipitation?`,
          solution: String.raw`Re-entrainment returns collected dust to the gas and lowers efficiency. Its causes and remedies (slides):

**1. Low particle resistivity** (large fly-ash particles, carbon black). The particle loses its negative charge on the plate, picks up positive charge from the collecting electrode and is repelled back into the gas.
- **Fly ash:** remove the coarse low-resistivity fraction with **high-efficiency cyclones ahead of the ESP**.
- **Carbon black:** too fine for a cyclone ahead; the ESP is used as an **agglomerator**, and the coarser agglomerates that are re-entrained are caught by **cyclones after the ESP**.
- Condition the gas (temperature, humidity, SO₃/NH₃ injection) to bring resistivity into the favourable range ($10^{7}$–$10^{10}$ Ω cm); or use a wet ESP that flushes the plates.

**2. Erosion (scouring) of the deposit by the gas.** Non-uniform velocity gives high local velocities and turbulence that tear dust off the plates.
- **Uniform gas distribution:** perforated distribution plates, turning vanes, inlet diffusers; keep the average velocity low (≈ 1–2 m/s).
- **Baffles** on the collecting plates that shield the deposited layer from the gas stream.
- **Catch pockets** that convey precipitated dust into a quiescent zone behind the plate.

**3. Rapping and hopper losses.**
- Correct rapping intensity and frequency; rap one section at a time (or with the field de-energised briefly) so the dust falls as sheets, not a cloud.
- Hopper baffles to stop gas sneaking through hoppers; empty hoppers continuously so dust does not build up and get picked up again.`,
          answer: String.raw`Low resistivity: HE cyclones before the ESP (fly ash) or cyclones after it (carbon black agglomerates), gas conditioning or wet ESP. Erosion: uniform low gas velocity (distribution plates), shielding baffles, catch pockets. Also proper sectional rapping and hopper baffles/emptying.` },
        { id: "2017-18-Q7d", label: "(d)", marks: "16⅔",
          topic: "dust-collection", sub: "Classification of gas-cleaning fabric filters",
          type: "theory", syllabus: "in", repeats: ["2015-16-Q7b"],
          text: String.raw`Discuss the classification of gas cleaning fabric filters.`,
          solution: String.raw`Gas-cleaning fabric filters are classified in five ways (slides):

![Pulse-jet baghouse with bags cleaned by compressed-air pulses](fig/2018-19-Q6d-sol.svg)

**1. Cleaning energy (and method)**
- *High-energy* systems (high filter pressure drop): **pulse-jet** — short blasts of compressed air through nozzles and a venturi at the bag mouth flex the bag and free the cake; bags cleaned on-line, high air-to-cloth ratio (≥ 6:1).
- *Low-energy* systems (low pressure drop): **shaker** (mechanically flexing the bag) and **reverse-air** (gentle backflow); A/C ratio 1:1–3:1.

**2. Fabric**
- **Felt (unwoven):** tight, true filter medium; used in high-energy (pulse-jet) units; must be kept clean.
- **Woven:** mainly a support on which the dust cake forms and does the filtering; used in low-energy (shaker, reverse-air) units.
- Materials: cotton, polyester, Nomex, PTFE, glass fibre (up to about 288 °C/550 °F).

**3. Type of cycle**
- **Continuous:** filter divided into compartments; one is cleaned while the others operate, so gas flow and ΔP are almost constant.
- **Intermittent:** flow interrupted for cleaning; flow is highest just after cleaning and falls as cake builds up (typical: operate 0.25–4 h, clean ~5 min).

**4. Service**
- **Particulate removal** (main service).
- **Gaseous control** by adsorption/chemisorption on the cake: alumina adsorbing chlorine; ammonia injected to react with SOₓ to form a filterable solid; sodium/calcium compounds as pre-coats for SOₓ; activated carbon for odours, organics, heavy metals.

**5. Application** (operating conditions): inlet temperature, solids concentration (dust loading; a mechanical pre-collector reduces heavy loads), type of pollutant, moisture content (operate above the dew point), suction/positive pressure (forced- or induced-draft baghouse, ±20 in. water), filter size and required efficiency.`,
          answer: String.raw`By (1) cleaning energy: high (pulse-jet) vs low (shaker, reverse-air); (2) fabric: felt vs woven; (3) cycle: continuous (compartments) vs intermittent; (4) service: particulate vs gaseous (adsorption/chemisorption); (5) application: temperature, loading, pollutant, moisture, pressure, size, efficiency.` }
      ] },
    { id: "2017-18-Q8", q: 8, section: "B",
      stem: String.raw`Write short notes on:`,
      parts: [
        { id: "2017-18-Q8a", label: "(a)", marks: "10⅔",
          topic: "relief", sub: "Deflagration venting for dust and vapor explosions",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Deflagration venting for dust and vapor explosions.`,
          solution: String.raw`A **deflagration** is a combustion wave travelling slower than sound through a flammable gas or dust cloud. In a closed vessel it raises the pressure to 7–10 times the initial absolute pressure in a fraction of a second, which few vessels can withstand. **Deflagration vents** (rupture panels, explosion doors, burst diaphragms) open early and release the burning mixture so the pressure peaks at a tolerable reduced pressure $P_{red}$ (Crowl & Louvar ch. 9, NFPA 68).

**Explosion severity:** cubic law $K = (dP/dt)_{max}V^{1/3}$; $K_G$ for gases, $K_{St}$ for dusts (St-1: < 200, St-2: 200–300, St-3: > 300 bar m/s).

**Vent sizing**
- **Low-strength enclosures** (buildings, $P_{red}$ ≤ 0.1 bar g):
$$A_v = \frac{C\,A_s}{P_{red}^{1/2}}$$
  $A_s$ internal surface area; C (bar^1/2) depends on the fuel (≈ 0.013 ammonia, 0.037 methane, 0.045 gases with $K_G$ < 100 bar m/s; 0.026 St-1, 0.030 St-2, 0.051 St-3 dusts).
- **High-strength enclosures** (vessels, $P_{red}$ > 0.1 bar g): empirical correlations (NFPA 68) of the form $A_v = a\,V^{2/3}K^{b}P_{red}^{c}$ with a, b, c functions of the vent static burst pressure $P_{stat}$ (or the corresponding nomographs).

**Design points:** vent set ($P_{stat}$) low and $P_{red}$ below the enclosure strength; vents located to discharge to a safe area (flame and pressure wave extend far outside); vent ducts reduce effectiveness (larger area needed); panels light, restrained (tethered) so they do not become missiles; keep vents clear; alternatives where venting is impossible: explosion suppression, inerting, containment design.`,
          answer: String.raw`Vent panels/doors open early so a deflagration peaks at P_red below the vessel strength; severity K = (dP/dt)max V^1/3 (K_G, K_St classes); low-strength: A_v = C A_s/√P_red; high-strength: NFPA 68 correlations A_v = aV^2/3 K^b P_red^c; vent to a safe place.` },
        { id: "2017-18-Q8b", label: "(b)", marks: "9",
          topic: "other", sub: "Extraction steam turbine",
          type: "theory", syllabus: "out", repeats: [],
          text: String.raw`Extraction turbine.`,
          solution: String.raw`![Extraction (bleeder) turbine among other steam-path arrangements](fig/2018-19-Q5c-sol.svg)

- An **extraction turbine** removes part of the steam from an intermediate stage, between the HP and LP sections, at a pressure suited to process heating, while the remainder continues to expand to the exhaust (condensing or back-pressure).
- **Controlled (automatic) extraction:** an internal valve (grid valve) between sections, governed by an extraction-pressure controller, holds the extraction pressure constant while the speed governor matches power; one or two controlled extractions are common (single/double automatic extraction).
- **Uncontrolled (bleed) extraction:** fixed openings; pressure varies with load; used for feedwater heating.
- **Advantages:** one machine supplies both shaft power and medium-pressure process steam, balancing the plant's steam and power demands flexibly (cogeneration); more efficient than producing MP steam through a pressure-reducing valve.
- **Limitations:** more complex and expensive than straight condensing/back-pressure machines; minimum flow through the LP section must be kept for cooling; control interaction between power and extraction pressure.
- Variants: extraction–condensing, extraction–back-pressure, extraction–induction.`,
          answer: String.raw`Steam withdrawn at an intermediate stage (controlled by a grid valve and pressure controller, or uncontrolled bleed) for process heating while the rest expands to condensing/back-pressure exhaust; supplies power and MP steam from one machine.` },
        { id: "2017-18-Q8c", label: "(c)", marks: "9",
          topic: "relief", sub: "Relief of runaway reactions (two-phase, DIERS)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Runway reaction relief.`,
          solution: String.raw`![Runaway after loss of cooling, and the tempered course when relieved](fig/2018-19-Q1a-sol2.svg)

- **Behaviour:** after loss of cooling or agitation the exothermic reaction self-heats; the rate grows exponentially and vapor pressure and gas generation push the pressure up. Relief must remove mass fast enough to stop the pressure rise.
- **Types of system:** *tempered* (vapor-pressure systems: boiling removes heat, temperature stays near the boiling point at relief pressure), *gassy* (non-condensable gas generated; no tempering) and *hybrid*.
- **Two-phase flow:** in most runaways the contents swell and foam, so the vent carries a gas–liquid mixture. Vapor-only sizing underestimates the area by a factor of 2–10. **DIERS** (Design Institute for Emergency Relief Systems, AIChE) methods and data from adiabatic calorimeters (VSP, ARC, RSST: onset temperature, $dT/dt$, $dP/dt$) are used.
- **Leung's method** (tempered system, Crowl & Louvar ch. 9):
$$A = \frac{m_0\,q}{G_T\left[\left(\dfrac{V}{m_0}\dfrac{\Delta H_v}{v_{fg}}\right)^{1/2} + (C_V\Delta T)^{1/2}\right]^2}, \qquad G_T \approx 0.9\,\frac{\Delta H_v}{v_{fg}}\sqrt{\frac{g_c}{C_PT_s}}$$
  q = heat release rate per unit mass (from $C_V\,dT/dt$ at set and maximum temperatures), $G_T$ two-phase mass flux (Fauske), ΔT = $T_m - T_s$.
- **Device:** usually a rupture disc (fast, large area) protecting a safety-relief valve, discharging to a **total containment system** (knockout drum, catch/quench tank, scrubber, flare).
- **Prevention first:** coolant low-flow alarm, agitator interlocks, controlled monomer addition (stop when coolant valve ≈ 100 % open), temperature profile monitoring.`,
          answer: String.raw`Runaway reliefs are usually two-phase (foaming), so DIERS methods with calorimeter data are used (tempered/gassy/hybrid; Leung: A = m₀q/{G_T[(V/m₀ · ΔH_v/v_fg)^½ + (C_VΔT)^½]²}); rupture disc + safety-relief valve to a containment system; prevention by alarms/interlocks.` },
        { id: "2017-18-Q8d", label: "(d)", marks: "9",
          topic: "dust-collection", sub: "Wet scrubbers: types and working",
          type: "sketch", syllabus: "in", repeats: ["2019-20-Q4d", "2011-12-Q1c"],
          text: String.raw`Wet Scrubbers.`,
          solution: String.raw`Wet scrubbers use a liquid (usually water) to capture particles (and absorb soluble gases). They overcome a weakness of cyclones and inertial collectors, in which collected dust is often swept back into the gas: wetted particles cannot be re-entrained.

![Spray tower and venturi scrubber with cyclonic separator](fig/2017-18-Q8d-sol.svg)

| Type | Working | Notes |
|---|---|---|
| **Spray tower (spray chamber)** | dusty gas rises through an empty chamber against sprays; drops knock down the dust; slurry leaves the bottom; entrainment separator at the top | low ΔP, coarse dust (> 5–10 μm), simple |
| **Wet cyclone scrubber** | tangential gas entry spirals up through atomised water from central nozzles; centrifugal force throws wet dust to the wall; central baffle breaks the swirl | nozzle plugging is the main maintenance item |
| **Venturi scrubber** | gas accelerated to 60–120 m/s in a throat atomises injected water; particles impact on the fine drops; drops removed in a cyclonic separator | highest efficiency (to < 1 μm), high ΔP (25–150 cm water) |
| **Packed / plate / impingement scrubbers** | gas passes through wetted packing or perforated impingement plates | also absorb gases; plug with heavy dust |

**Mechanisms:** inertial impaction on drops, interception, diffusion (submicron), plus condensation growth. **Advantages:** handle hot, moist, sticky and flammable/explosive dusts; absorb gases (SO₂, HCl) simultaneously; compact; no re-entrainment. **Disadvantages:** water treatment and sludge disposal, corrosion, visible plume, high power for venturis, freezing.`,
          answer: String.raw`Liquid captures particles by impaction/interception/diffusion: spray towers (low ΔP, coarse), wet cyclones, venturi scrubbers (60–120 m/s throat, submicron, high ΔP), packed/impingement units; no re-entrainment, also absorb gases, but create sludge and corrosion.` },
        { id: "2017-18-Q8e", label: "(e)", marks: "9",
          topic: "solids-handling", sub: "Screw conveyor",
          type: "theory", syllabus: "in", repeats: ["2020-21-Q8c1", "2019-20-Q4e", "2018-19-Q6e"],
          text: String.raw`Screw conveyor.`,
          solution: String.raw`![Screw conveyor: helical flight on a shaft rotating in a U-trough](fig/2018-19-Q6e-sol.svg)

- **Mechanism:** a helical flight (screw) on a shaft rotates in a U-shaped, circular or rectangular trough (open or covered); the solids, held back by gravity and trough friction, are pushed along. Components: screw, hangers and bearings, trough and cover, inlet and discharge spouts, drive.
- **Capacity:** $C = \dfrac{\pi}{4}(D_s^2 - D_p^2)\,p\,K\,N$ (trough loading K typically 0.15–0.45, up to 0.5 for free-flowing solids).
- **Limits (Shamlou, slides):** particles smaller than the flight–casing gap; feed temperature up to ≈ 120 °C; distance ≤ ~100 m; above ≈ 30° inclination use a circular casing (screw elevator).
- **Screw geometry:** usually a single, continuous-flight screw with pitch = diameter; free-flowing solids p/D ≈ 1.5 (horizontal), 0.5–0.67 (vertical); lumpy feeds: tapered screw, p/D 1.0–0.67; variable-pitch or tapered screws as feeders under hoppers.
- **Power** depends on length, screw size/pitch, speed, degree of fill and the bulk solid (friction, abrasiveness).
- **Merits:** simple, compact, cheap, dust-tight, can mix, heat, cool or meter while conveying. **Demerits:** high power per tonne, wear with abrasives, particle breakage, short distances.`,
          answer: String.raw`Rotating helical flight in a trough pushes solids; C = (π/4)(D_s² − D_p²)pKN; ≤ 120 °C, ≤ 100 m, circular casing above 30°, p/D ≈ 1 (1.5 free-flowing); enclosed, cheap, can mix/meter; power-hungry and wears with abrasives.` }
      ] }
  ]
});
