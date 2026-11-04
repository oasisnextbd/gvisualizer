QB.paper({ year: "Practice", set: "Drying of solids", date: "", marks: 0, practice: true,
  rules: String.raw`Drying: Dr. Sowgath's rotary-dryer slide problem (MSH Ex. 24.4) with the transfer-unit limit and the slide's practical-range table, MSH 5th ed. chapter 24 worked examples (constant-rate, diffusion and through-circulation drying times) and problems (rotary dryer, batch constant + falling rate, rate-curve integration, continuous countercurrent dryer), and exam-style problems on test-data rate curves, constant-rate prediction, spray and rotary dryer heat balances, dryer selection and drying-time derivations.`,
  questions: [
    { id: "practice-drying-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw`Slide "Math Problem" (Dr. Sowgath, Dryer slides; MSH 5th ed. Example 24.4). Calculate the diameter and length of an adiabatic rotary dryer to dry 2800 lb/h (1270 kg/h) of a heat-sensitive solid from an initial moisture content of 15% to a final moisture content of 0.5%, both dry basis. The solids have a specific heat of 0.52 Btu/lb·°F; they enter at 80°F (26.7°C) and must not be heated above 125°F (51.7°C). Heating air is available at 260°F (126.7°C) and a humidity of 0.01 lb water/lb dry air. The maximum allowable mass velocity of the air is 700 lb/ft²·h (3420 kg/m²·h).`,
      parts: [
        { id: "practice-drying-P1a", label: "(a)", marks: "", topic: "drying",
          sub: "Slide rotary-dryer problem: cocurrent design with N_t = 1.5", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Dr. Sowgath, "Drying of Solids/Dryer in Chemical Process" slides, Math Problem and Solution (cocurrent, N_t = 1.5, T_wb = 102 °F, λ = 1036 Btu/lb); MSH 5th ed. Example 24.4, Eqs. (24.1), (24.8), (24.29). The same data were set in 2019-20 Q6(a), 2022-23 Q3(a) and 2023-24 Q2(d); this part follows the slide's cocurrent route and adds the checks.`,
          text: String.raw`Solve the slide problem as the slide does: cocurrent operation (because the solid is heat sensitive), $N_t$ = 1.5, the solid leaving at its maximum allowable temperature. Give the outlet air temperature and humidity, the heat load, the air rate, the diameter, the volumetric coefficient and the length.`,
          solution: String.raw`**Given:** $\dot m_s = 2800$ lb/h dry solid, $X_a = 0.15$, $X_b = 0.005$, $c_{ps} = 0.52$, $T_{sa} = 80$ °F, $T_{sb} \le 125$ °F, $T_{hb} = 260$ °F, $\mathcal H_b = 0.01$, $G \le 700$ lb/ft²·h.

**Find:** $T_{ha}$, $q_T$, $\dot m_g$, $D$, $L$.

**Assumptions (slide):** adiabatic, cocurrent; $N_t = 1.5$; moisture evaporates at the wet-bulb temperature; $T_{sb} = 125$ °F; $c_{pL} = 1.0$, $c_{pv} = 0.45$ Btu/lb·°F; MSH Eq. (24.29) for $Ua$.

1. **Wet bulb** of the inlet air (humidity chart, 260 °F, $\mathcal H$ = 0.01): $T_w = 102$ °F (a psychrometric calculation gives 102.8 °F). $\lambda(102\ ^\circ\mathrm{F}) = 1036$ Btu/lb.

2. **Outlet air temperature** (Eq. 24.8):
$$N_t = \ln\frac{T_{hb} - T_w}{T_{ha} - T_w} \Rightarrow T_{ha} = 102 + \frac{158}{e^{1.5}} = 137\ ^\circ\mathrm{F}$$
In cocurrent flow the air leaving (137 °F) meets the solid leaving (125 °F): the solid can never exceed the gas temperature, a built-in protection for a heat-sensitive solid.

3. **Heat per lb of dry solid** (Eq. 24.1):
$$\frac{q_T}{\dot m_s} = 0.52(45) + 0.15(1.0)(22) + 0.145(1036) + 0.005(1.0)(23) + 0.145(0.45)(35)$$
$$= 23.4 + 3.3 + 150.2 + 0.1 + 2.3 = 179.3\ \mathrm{Btu/lb};\qquad q_T = 2800(179.3) = 502{,}000\ \mathrm{Btu/h}$$

4. **Air rate:** humid heat $c_s = 0.24 + 0.45(0.01) = 0.2445$;
$$\dot m_g = \frac{502{,}000}{0.2445(260 - 137)} = 16{,}700\ \mathrm{lb/h}$$
Outlet humidity $= 0.01 + 2800(0.145)/16{,}560 = 0.0345$ (below saturation at 137 °F, about 0.12 ✓).

5. **Diameter:** $A = 16{,}700/700 = 23.9$ ft², $D = 5.5$ ft (1.68 m).

6. **Length** (Eq. 24.29, $\Delta\bar T$ = log mean of the wet-bulb depressions 158 and 35 °F = 81.8 °F):
$$L = \frac{q_T}{0.125\pi D G^{0.67}\Delta\bar T} = \frac{502{,}000}{0.125\pi(5.5)(700)^{0.67}(81.8)} = 35\ \mathrm{ft}\ (10.7\ \mathrm{m})$$
$Ua = 0.5G^{0.67}/D = 7.3$ Btu/ft³·h·°F.

**Result:** D ≈ 5.5 ft, L ≈ 35 ft (L/D = 6.4), air 16,700 lb/h leaving at 137 °F and 𝓗 = 0.035; duty 5.0 × 10⁵ Btu/h. (MSH: 5.50 ft and 35.4 ft ✓.)`,
          answer: String.raw`T_w = 102 °F; T_ha = 137 °F; q_T = 179.3 Btu/lb × 2800 = 5.02 × 10⁵ Btu/h; air 16,700 lb/h (𝓗 out 0.035); D = 5.5 ft; ΔT̄ = 81.8 °F; L ≈ 35 ft.` },
        { id: "practice-drying-P1b", label: "(b)", marks: "", topic: "drying",
          sub: "Can N_t = 2.0 be used cocurrently? Maximum transfer units", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slide table "Rotary dryer practical ranges: number of heat transfer units 1.5 to 2"; MSH: dryers are most economical for N_t between 1.5 and 2.5`,
          text: String.raw`The slide table gives 1.5–2 transfer units as the practical range. A colleague proposes $N_t$ = 2.0 to save air. Is this possible for the cocurrent dryer of (a)? Find the largest $N_t$ that can be used, and compare the air rate, diameter and length for $N_t$ = 1.5 and at that limit.`,
          solution: String.raw`**Given:** as in (a).

**Find:** $N_{t,max}$ in cocurrent operation; D and L at the limit.

**Assumptions:** same correlations as (a).

1. **N_t = 2.0:** $T_{ha} = 102 + 158/e^{2.0} = 123.4$ °F. In cocurrent flow the gas leaving must be hotter than the solid leaving (125 °F), and 123.4 °F is below it: **not possible** (the solid would have to give heat back to the gas).

2. **Limit:** $T_{ha} = T_{sb} = 125$ °F gives
$$N_{t,max} = \ln\frac{260 - 102}{125 - 102} = \ln\frac{158}{23} = 1.93$$
(in practice a few degrees of approach are kept, so about 1.8).

3. **Comparison** (same method as (a)):

| $N_t$ | $T_{ha}$, °F | $\dot m_g$, lb/h | D, ft | $\Delta\bar T$, °F | L, ft | L/D |
|---|---|---|---|---|---|---|
| 1.5 | 137.3 | 16,730 | 5.52 | 81.8 | 35.2 | 6.4 |
| 1.93 | 124.9 | 15,140 | 5.25 | 70.0 | 43.0 | 8.2 |

**Result:** cocurrently $N_t$ cannot exceed 1.93; going from 1.5 to 1.93 saves about 10% of the air (and fan power and heat) but needs a 22% longer dryer. $N_t$ = 2 is possible only in countercurrent flow, where the hot inlet gas meets the dry solid — not allowed here because the solid would then approach 260 °F gas.`,
          answer: String.raw`N_t = 2 gives T_ha = 123.4 °F < T_sb = 125 °F: impossible cocurrently. N_t,max = ln(158/23) = 1.93: air 15,140 lb/h, D = 5.25 ft, L ≈ 43 ft (vs 16,730 lb/h, 5.5 ft, 35 ft at 1.5).` } ] },

    { id: "practice-drying-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P2", label: "", marks: "", topic: "drying",
        sub: "Check the rotary dryer against the slide's practical design ranges", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Dr. Sowgath's slide "Rotary dryer practical ranges of dimensions and operating parameters" (after B.K. Dutta, Principles of Mass Transfer and Separation Processes)`,
        text: String.raw`Using the slide table of practical ranges (shell i.d. 1–10 ft; L = 4D–15D; flight height D/12–D/8; flight count 2.4D–3D per circle; peripheral speed 50–100 ft/min; air mass velocity 300–5000 lb/h·ft²; drying capacity 0.4–2.5 lb moisture/h·ft³; hold-up 5–15% of shell volume; retention 5 min–2 h), check the dryer designed in P1(a) (D = 5.5 ft, L = 35.4 ft, 406 lb/h of water evaporated). Specify the flights and the rotational speed, and estimate the solids retention time for a bulk density of 50 lb/ft³.`,
        solution: String.raw`**Given:** D = 5.5 ft, L = 35.4 ft; water evaporated $2800(0.15 - 0.005) = 406$ lb/h; G = 700 lb/h·ft²; bulk density 50 lb/ft³.

**Find:** range checks, flight design, rpm, retention time.

**Assumptions:** hold-up 5–15% (slide range), product rate ≈ 2800(1.005) = 2814 lb/h.

1. **Geometry:** D = 5.5 ft is within 1–10 ft; L/D = 6.4, within 4–15 ✓. Volume $V = (\pi/4)(5.5)^2(35.4) = 841$ ft³.

2. **Air mass velocity** 700 lb/h·ft², within 300–5000 ✓ (at the low end because the solid is fine/heat sensitive and must not be blown out).

3. **Drying capacity:** $406/841 = 0.48$ lb/h·ft³, within 0.4–2.5 ✓ (low, as expected for low gas temperature and small $N_t$).

4. **Flights:** height $D/12$ to $D/8$ = 5.5 to 8.3 in (choose about 7 in); number per circle $2.4D$ to $3D$ = 13 to 16.5 (choose 14 or 16 radial lifting flights).

5. **Speed:** peripheral speed 50–100 ft/min gives $N = v/(\pi D) = 50/(5.5\pi)$ to $100/(5.5\pi)$ = **2.9 to 5.8 rpm** (slide also quotes 4–5 rpm).

6. **Retention time** $\theta = (\text{hold-up fraction} \times V \times \rho_b)/\dot m$:

| hold-up | solids held, lb | θ, h |
|---|---|---|
| 5% | 2100 | 0.75 |
| 10% | 4200 | 1.5 |
| 15% | 6310 | 2.2 |

With about 8% hold-up the retention is about 1.2 h, inside 5 min–2 h ✓; slope and speed are then chosen to give this time (Friedman–Marshall correlation, not required here).

**Result:** every parameter lies inside the slide ranges: L/D 6.4, G 700, capacity 0.48 lb/h·ft³; use about 14–16 flights of 7 in, 3–6 rpm, and a hold-up near 8% for a 1–1.5 h retention.`,
        answer: String.raw`V = 841 ft³; L/D = 6.4 ✓; G = 700 ✓; capacity 0.48 lb/h·ft³ ✓; flights 5.5–8.3 in high, 13–16 per circle; 2.9–5.8 rpm; retention 0.75–2.2 h for 5–15% hold-up (≈ 1.2 h at 8%).` } ] },

    { id: "practice-drying-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P3", label: "", marks: "", topic: "drying",
        sub: "MSH Ex. 24.1: constant-rate drying of a filter cake from both faces", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Example 24.1 (pp. 780–781), Eqs. (24.13), (24.15)`,
        text: String.raw`A filter cake 24 in. (610 mm) square and 2 in. (51 mm) thick, supported on a screen, is dried from both sides with air at a wet-bulb temperature of 80°F (26.7°C) and a dry-bulb temperature of 120°F (48.9°C). The air flows parallel with the faces of the cake at a velocity of 3.5 ft/s (1.07 m/s). The dry density of the cake is 120 lb/ft³ (1922 kg/m³). The equilibrium-moisture content is negligible. Under the conditions of drying the critical moisture is 9 percent, dry basis. (a) What is the drying rate during the constant-rate period? (b) How long would it take to dry this material from an initial moisture content of 20 percent (dry basis) to a final moisture content of 10 percent? Equivalent diameter $D_e$ is equal to 2 ft.`,
        solution: String.raw`**Given:** cake 2 ft × 2 ft × 2/12 ft, drying from both faces; air 120 °F db, 80 °F wb, 3.5 ft/s parallel; $\rho_s = 120$ lb/ft³; $X_c = 0.09$, $X^* = 0$; $X_1 = 0.20$, $X_2 = 0.10$; $D_e = 2$ ft.

**Find:** $R_c$; drying time.

**Assumptions:** surface at the wet-bulb temperature (no radiation or conduction through the screen); MSH Eq. (24.13) in fps form $h = 0.01G^{0.8}/D_e^{0.2}$ (Btu/ft²·h·°F, G in lb/ft²·h).

1. **Air mass velocity:** air density $= \dfrac{29}{359}\dfrac{492}{460 + 120} = 0.0685$ lb/ft³;
$$G = 3.5(3600)(0.0685) = 863\ \mathrm{lb/ft^2\,h}$$

2. **Heat-transfer coefficient:** $h = 0.01(863)^{0.8}/2^{0.2} = 1.94$ Btu/ft²·h·°F.

3. **(a) Constant rate:** $\lambda_i$ at 80 °F = 1049 Btu/lb (Appendix 7);
$$R_c = \frac{h(T - T_i)}{\lambda_i} = \frac{1.94(120 - 80)}{1049} = 0.074\ \mathrm{lb/ft^2\,h}\ (0.36\ \mathrm{kg/m^2\,h})$$

4. **(b) Time:** the whole run (20% → 10%) is above $X_c$ = 9%, so all of it is at the constant rate. Area $A = 2(2)^2 = 8$ ft² (both faces); rate $= 0.074 \times 8 = 0.59$ lb/h. Dry solid $= 120(2)(2)(2/12) = 80$ lb; water removed $= 80(0.20 - 0.10) = 8$ lb.
$$t = \frac{8}{0.59} = 13.5\ \mathrm{h}$$

**Result:** $R_c$ = 0.074 lb/ft²·h; drying time 13.5 h (MSH ✓). Compare with P5 (same cake extruded, through-circulation): 7.3 min.`,
        answer: String.raw`G = 863 lb/ft²h, h = 1.94 Btu/ft²h°F, R_c = 0.074 lb/ft²h; 80 lb solid, 8 lb water, 0.59 lb/h → t = 13.5 h.` } ] },

    { id: "practice-drying-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P4", label: "", marks: "", topic: "drying",
        sub: "MSH Ex. 24.2: diffusion-controlled drying of wood planks", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Example 24.2 (pp. 783–784), Eqs. (24.16), (24.17)`,
        text: String.raw`Planks of wood 25.4 mm thick are dried from an initial moisture content of 25 percent to a final moisture of 5 percent using air of negligible humidity. If $D_v'$ for the wood is 8.3 × 10⁻⁶ cm²/s, how long should it take to dry the wood?`,
        solution: String.raw`**Given:** slab thickness 25.4 mm, drying from both faces, so half-thickness $s = 1.27$ cm; $X_1 = 0.25$, $X = 0.05$; $X^* = 0$ (dry air); $D_v' = 8.3\times10^{-6}$ cm²/s.

**Find:** drying time $t_T$.

**Assumptions:** nonporous-solid behaviour: moisture moves by diffusion with constant diffusivity; the surface is at equilibrium (no constant-rate period).

1. **Ratio:** $X/X_1 = 0.05/0.25 = 0.20$.

2. **Series solution** (Eq. 24.16, first term enough because $\beta > 0.1$):
$$\frac{X}{X_1} = \frac{8}{\pi^2}e^{-\pi^2\beta/4} \Rightarrow \beta = \frac{D_v' t_T}{s^2} = 0.567$$
(MSH reads 0.57 from Fig. 10.6.)

3. **Time:**
$$t_T = \frac{0.567(1.27)^2}{8.3\times10^{-6}} = 1.10\times10^5\ \mathrm{s} = 30.6\ \mathrm{h}$$
Same result from Eq. (24.17):
$$t_T = \frac{4s^2}{\pi^2D_v'}\ln\frac{8X_1}{\pi^2X} = \frac{4(1.27)^2}{\pi^2(8.3\times10^{-6})(3600)}\ln\frac{8(0.25)}{\pi^2(0.05)} = 30.6\ \mathrm{h}$$

**Result:** about 31 h (MSH: 30.8 h from the chart, 30.6 h from Eq. 24.17). Drying time ∝ thickness², so 50 mm planks would take about 4 times as long.`,
        answer: String.raw`s = 1.27 cm, X/X₁ = 0.20 → β = D't/s² = 0.567 → t_T ≈ 1.10 × 10⁵ s ≈ 30.6 h.` } ] },

    { id: "practice-drying-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P5", label: "", marks: "", topic: "drying",
        sub: "MSH Ex. 24.3: through-circulation drying of extruded cylinders", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Example 24.3 (pp. 789–790), Eq. (21.62)`,
        text: String.raw`The filter cake of Example 24.1 (P3) is extruded onto a screen in the form of cylinders 1/4 in. in diameter and 4 in. long. The solids loading is 8 pounds of dry solids per square foot of screen surface. The bed porosity is 60 percent. Air at 120°F (dry-bulb) and with a wet-bulb temperature of 80°F is passed through the bed at a superficial velocity of 3.5 ft/s. How long will it take to dry the solids from 20 to 10 percent moisture?`,
        solution: String.raw`**Given:** cylinders $D_p = 1/4$ in, length 4 in, $\rho_s = 120$ lb/ft³; loading 8 lb/ft² of screen; air 120 °F db / 80 °F wb, 3.5 ft/s superficial; $X$: 0.20 → 0.10.

**Find:** drying time.

**Assumptions:** all drying at constant rate ($X_c = 0.09 < 0.10$), surface at 80 °F, λ = 1049 Btu/lb; ends of the cylinders neglected; air properties at 120 °F: ρ = 0.0685 lb/ft³, μ = 0.019 cP, k = 0.0162 Btu/ft·h·°F, $c_p$ = 0.25.

1. **Heat to be transferred per ft² of screen:** $Q_T = 8(0.20 - 0.10)(1049) = 839$ Btu.

2. **Surface area per ft²:** mass of one cylinder $= \dfrac{\pi(1/4)^2}{4(144)}\dfrac{4}{12}(120) = 0.0136$ lb; area $= \pi(1/4)(4)/144 = 0.0218$ ft²; $A = (8/0.0136)(0.0218) = 12.8$ ft².

3. **Coefficient** (Eq. 21.62, $hD_p/k = 1.17\mathrm{Re}^{0.585}\mathrm{Pr}^{1/3}$):
$$\mathrm{Re} = \frac{(1/48)(3.5)(0.0685)}{0.019(6.72\times10^{-4})} = 391,\quad \mathrm{Pr} = 0.71,\quad h = \frac{0.0162(1.17)(391)^{0.585}(0.71)^{1/3}}{1/48} = 26.7\ \mathrm{Btu/ft^2\,h\,^\circ F}$$

4. **Air temperature drop through the bed** ($\dot m_g c_s dT = hA(T - T_w)dA$, $\dot m_g = 3.5(3600)(0.0685) = 863$ lb/h per ft², $c_s = 0.25$):
$$\ln\frac{T_{hb} - T_w}{T_{ha} - T_w} = \frac{hA}{\dot m_gc_s} = \frac{26.7(12.8)}{863(0.25)} = 1.58 \Rightarrow T_{ha} - T_w = \frac{40}{e^{1.58}} = 8.2\ ^\circ\mathrm{F}$$
$$\overline{\Delta T}_L = \frac{40 - 8.2}{\ln(40/8.2)} = 20.1\ ^\circ\mathrm{F}$$

5. **Rate and time:** $q_T = hA\overline{\Delta T}_L = 26.7(12.8)(20.1) = 6870$ Btu/h;
$$t_T = \frac{839}{6870} = 0.122\ \mathrm{h} = 7.3\ \mathrm{min}$$

**Result:** about 7.3 min (MSH 7.33 min), against 13.5 h for the same cake dried by cross-circulation (P3): extrusion multiplies the area per lb about 300 times and through-flow gives a much larger h. The 7.3 min is a bed average: the top layer dries in about half that time.`,
        answer: String.raw`Q_T = 839 Btu/ft²; A = 12.8 ft²/ft²; Re = 391, h = 26.7; NTU = 1.58 → ΔT_L = 20.1 °F; q = 6870 Btu/h; t = 0.122 h ≈ 7.3 min.` } ] },

    { id: "practice-drying-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P6", label: "", marks: "", topic: "drying",
        sub: "MSH Prob. 24.1: countercurrent fluorspar rotary dryer, N_t = 2.2 and 1.8", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Problem 24.1 (p. 808), Eqs. (24.1), (24.8), (24.29)`,
        text: String.raw`Fluorspar (CaF₂) is to be dried from 6 to 0.4 percent moisture (dry basis) in a countercurrent adiabatic rotary dryer at a rate of 18,000 lb/h of bone-dry solids. The heating air enters at 1000°F with a humidity of 0.03 and a wet-bulb temperature of 150°F. The solids have a specific heat of 0.48 Btu/lb·°F; they enter the dryer at 70°F and leave at 200°F. The maximum allowable mass velocity of the air is 2000 lb/ft²·h. (a) Assuming Eq. (24.8) applies, what would be the diameter and length of the dryer if $N_t$ = 2.2? Is this a reasonable design? (b) Repeat part (a) with $N_t$ = 1.8.`,
        solution: String.raw`**Given:** $\dot m_s = 18{,}000$ lb/h, $X_a = 0.06$, $X_b = 0.004$, $c_{ps} = 0.48$, $T_{sa} = 70$ °F, $T_{sb} = 200$ °F; $T_{hb} = 1000$ °F, $\mathcal H_b = 0.03$, $T_w = 150$ °F; $G = 2000$ lb/ft²·h.

**Find:** D and L for $N_t$ = 2.2 and 1.8.

**Assumptions:** adiabatic, countercurrent; moisture evaporates at 150 °F ($\lambda = 1008$ Btu/lb, steam table); $c_{pL} = 1$, $c_{pv} = 0.45$; $c_s = 0.24 + 0.45(0.03) = 0.2535$ (taken constant, although $c_p$ of air rises at high temperature); MSH Eq. (24.29).

1. **Outlet gas temperature:** $T_{ha} = 150 + 850/e^{N_t}$: 244.2 °F ($N_t$ = 2.2) and 290.5 °F (1.8). Both are above the 200 °F solid-outlet temperature, but in countercurrent flow the gas leaves at the wet (feed) end, where the solid is at 70 °F, so this is acceptable.

2. **Heat per lb solid** (Eq. 24.1):
$$\frac{q_T}{\dot m_s} = 0.48(130) + 0.06(80) + 0.056(1008) + 0.004(50) + 0.056(0.45)(T_{ha} - 150)$$
$= 62.4 + 4.8 + 56.4 + 0.2 + 2.4 = 126.2$ Btu/lb (2.2) and 127.4 Btu/lb (1.8). Heating the dense solid to 200 °F takes half the heat.

3. **Results:**

| | $N_t$ = 2.2 | $N_t$ = 1.8 |
|---|---|---|
| $q_T$, Btu/h | 2.27 × 10⁶ | 2.29 × 10⁶ |
| gas $\dot m_g = q_T/[c_s(1000 - T_{ha})]$, lb/h | 11,860 | 12,750 |
| outlet humidity | 0.118 | 0.111 |
| D = $\sqrt{4\dot m_g/\pi G}$, ft | 2.75 | 2.85 |
| $\Delta\bar T$ (LMTD of 850 and $T_{ha} - 150$), °F | 343.6 | 394.2 |
| $Ua = 0.5G^{0.67}/D$, Btu/ft³·h·°F | 29.6 | 28.6 |
| $L = q_T/(0.125\pi DG^{0.67}\Delta\bar T)$, ft | 37.6 | 31.9 |
| L/D | 13.7 | 11.2 |

**Result:** (a) D ≈ 2.75 ft, L ≈ 38 ft; (b) D ≈ 2.85 ft, L ≈ 32 ft.

**Is it reasonable?** With $N_t$ = 2.2 the dryer is long and slender (L/D ≈ 14, at the top of the 4–15 slide range; 4–10 is usual) and the exit gas is hot enough (244 °F) that heat losses are moderate. With $N_t$ = 1.8 the shape is better (L/D ≈ 11) but 7.5% more gas leaves 46 °F hotter, wasting fuel. A designer would accept $N_t$ ≈ 1.8–2.0, or raise G to shorten the drum. Note: for a 1000 °F inlet gas a fuller design would use a mean $c_p$ (≈ 0.26) and allow for shell heat loss.`,
        answer: String.raw`(a) T_ha = 244 °F, q_T = 2.27 × 10⁶ Btu/h, gas 11,860 lb/h, D ≈ 2.75 ft, L ≈ 37.6 ft (L/D ≈ 14, long); (b) T_ha = 291 °F, gas 12,750 lb/h, D ≈ 2.85 ft, L ≈ 31.9 ft (L/D ≈ 11).` } ] },

    { id: "practice-drying-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P7", label: "", marks: "", topic: "drying",
        sub: "MSH Prob. 24.2: batch dryer, scale-up of constant + falling-rate time", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Problem 24.2 (p. 808), Eqs. (24.21), (24.25), (24.26)`,
        text: String.raw`A porous solid is dried in a batch dryer under constant drying conditions. Seven hours are required to reduce the moisture content from 35 to 10 percent. The critical moisture content was found to be 20 percent and the equilibrium moisture 4 percent. All moisture contents are on the dry basis. Assuming that the rate of drying during the falling-rate period is proportional to the free-moisture content, how long should it take to dry a sample of the same solid from 35 to 5 percent under the same drying conditions?`,
        solution: String.raw`**Given:** total moisture 0.35 → 0.10 in 7 h; $X_c = 0.20$, $X^* = 0.04$; new target 0.05.

**Find:** time for 0.35 → 0.05.

**Assumptions:** same solid, same air and loading, so $K = \dot m_s/(AR_c)$ is the same; falling rate $R = R_c\,X/X_c$ in free moisture.

1. **Free moistures** ($X = X_T - X^*$): $X_1 = 0.31$, $X_c = 0.16$, $X_2 = 0.06$, $X_3 = 0.01$.

2. **Total time** (Eq. 24.26):
$$t_T = K\left[(X_1 - X_c) + X_c\ln\frac{X_c}{X}\right]$$

3. **Find K from the test:** $7 = K[0.15 + 0.16\ln(0.16/0.06)] = K[0.15 + 0.157] = 0.3069K \Rightarrow K = 22.8$ h (constant period 3.42 h, falling 3.58 h).

4. **New run:**
$$t_T = 22.8\left[0.15 + 0.16\ln\frac{0.16}{0.01}\right] = 22.8(0.15 + 0.444) = 13.5\ \mathrm{h}$$

**Result:** about 13.5 h. The last 5% of moisture (10% → 5%) takes 6.5 h, almost as long as the whole first run, because the falling rate approaches zero as $X_T \to X^*$.`,
        answer: String.raw`Free X: 0.31, 0.16, 0.06, 0.01; K = 7/0.3069 = 22.8 h; t = 22.8[0.15 + 0.16 ln 16] ≈ 13.5 h.` } ] },

    { id: "practice-drying-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P8", label: "", marks: "", topic: "drying",
        sub: "MSH Prob. 24.3: drying time by integrating a measured rate table", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Problem 24.3 and Table 24.1 (p. 808), Eq. (24.20)`,
        text: String.raw`A slab with a wet weight of 5 kg originally contains 50 percent moisture (wet basis). The slab is 600 by 900 by 75 mm thick. The equilibrium-moisture content is 5 percent of the total weight when in contact with air of 20°C and 20 percent humidity. The drying rate is given in the table below for contact with air of the above quality at a definite velocity. Drying is from one face. How long will it take to dry the slab to 15 percent moisture content (wet basis)?

| wet-slab weight, kg | 9.1 | 7.2 | 5.3 | 4.2 | 3.3 | 2.9 | 2.7 |
|---|---|---|---|---|---|---|---|
| drying rate, kg/m²·h | 4.9 | 4.9 | 4.4 | 3.9 | 3.4 | 2.0 | 1.0 |`,
        solution: String.raw`**Given:** wet weight 5.0 kg at 50% moisture (wet basis) → dry solid 2.5 kg; area of one face $A = 0.6(0.9) = 0.54$ m²; rate table vs slab weight.

**Find:** time to reach 15% moisture (wet basis).

**Assumptions:** the table applies to this slab (the rates depend on the moisture content, i.e. on the slab weight for 2.5 kg of dry solid; the table covers a wider range than this run); linear interpolation between table points.

1. **End weights:** start 5.0 kg; final weight $W_2 = 2.5/0.85 = 2.94$ kg (equilibrium weight $2.5/0.95 = 2.63$ kg, so the run stays above equilibrium).

2. **Time** (Eq. 24.20 in weight form): $R = -\dfrac{1}{A}\dfrac{dW}{dt} \Rightarrow t = \displaystyle\int_{W_2}^{W_1}\frac{dW}{AR}$

3. **Interpolated rates:** at 5.0 kg $R = 4.26$; at 2.94 kg $R = 2.14$ kg/m²·h.

4. **Integration by segments** (trapezoids on the linear rate):

| W interval, kg | R at ends | t, h |
|---|---|---|
| 5.0 → 4.2 | 4.26 → 3.9 | 0.363 |
| 4.2 → 3.3 | 3.9 → 3.4 | 0.457 |
| 3.3 → 2.94 | 3.4 → 2.14 | 0.244 |
| total | | 1.06 |

**Result:** about 1.06 h (64 min). The last 0.36 kg takes nearly a quarter of the time because the rate falls steeply below 3.3 kg (the falling-rate period).`,
        answer: String.raw`Dry solid 2.5 kg; W: 5.0 → 2.94 kg; A = 0.54 m²; t = ∫dW/(AR) = 0.363 + 0.457 + 0.244 ≈ 1.06 h.` } ] },

    { id: "practice-drying-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P9", label: "", marks: "", topic: "drying",
        sub: "MSH Prob. 24.4: residence time in a continuous countercurrent dryer", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Problem 24.4 (p. 808); constant/falling-rate equations (24.15), (24.24)`,
        text: String.raw`A continuous countercurrent dryer is to be designed to dry 800 lb of wet porous solid per hour from 140 percent moisture to 20 percent, both on the dry basis. Air at 120°F dry bulb and 70°F wet bulb is to be used. The exit humidity is to be 0.012. The average equilibrium-moisture content is 5 percent of the dry weight. The total moisture content (dry basis) at the critical point is 40 percent. The stock may be assumed to remain at a temperature 3°F above that of the wet-bulb temperature of the air throughout the dryer. The heat-transfer coefficient is 12 Btu/ft²·h·°F. The area exposed to the air is 1.1 ft² per pound of dry solids. How long must the solids remain in the dryer?`,
        solution: String.raw`**Given:** wet feed 800 lb/h at $X = 1.40$ → dry solid $\dot m_s = 800/2.4 = 333.3$ lb/h; $X$: 1.40 → 0.20; $X_c = 0.40$, $X^* = 0.05$; air in 120 °F db / 70 °F wb, out $\mathcal H = 0.012$; stock at $70 + 3 = 73$ °F; $h = 12$; $a = 1.1$ ft²/lb dry solid.

**Find:** residence time.

**Assumptions:** adiabatic dryer, so the air follows its adiabatic-saturation (constant wet-bulb) line; $\lambda(73\ ^\circ\mathrm{F}) = 1052$ Btu/lb; falling rate linear in free moisture.

1. **Inlet humidity** (wet-bulb relation, or humidity chart): $\mathcal H_w(70\ ^\circ\mathrm{F}) = 0.0158$, $\lambda_w = 1054$:
$$\mathcal H_{in} = \mathcal H_w - \frac{c_s(120 - 70)}{\lambda_w} = 0.0158 - \frac{0.242(50)}{1054} = 0.0043$$

2. **Air rate:** water removed $= 333.3(1.40 - 0.20) = 400$ lb/h; $\dot m_{air} = 400/(0.012 - 0.0043) = 51{,}900$ lb dry air/h.

3. **Air temperature along the dryer:** air enters at the dry-product end ($X$ = 0.20). At a section where the solid has moisture X,
$$\mathcal H = 0.0043 + \frac{333.3(X - 0.20)}{51{,}900},\qquad T = 120 - \frac{(\mathcal H - 0.0043)(1054)}{0.242}$$
At $X_c$ = 0.40: $T = 114.4$ °F; at the feed end ($X$ = 1.40): $T = 86.4$ °F.

4. **Constant-rate zone** (1.40 → 0.40): local rate per lb solid $= a\,h(T - 73)/\lambda$; the driving force runs from 13.4 to 41.4 °F, log mean 24.8 °F:
$$t_c = \frac{\lambda(X_1 - X_c)}{a\,h\,\Delta T_{lm}} = \frac{1052(1.00)}{1.1(12)(24.8)} = 3.21\ \mathrm{h}$$

5. **Falling-rate zone** (0.40 → 0.20), $R = R_c(X - X^*)/(X_c - X^*)$ with $R_c$ evaluated at the local air temperature (114.4 → 120 °F), integrated numerically:
$$t_f = \int_{0.20}^{0.40}\frac{\lambda\,(X_c - X^*)\,dX}{a\,h\,(T - 73)(X - X^*)} = 0.53\ \mathrm{h}$$
(with T ≈ 117 °F constant: $t_f = \dfrac{1052(0.35)}{1.1(12)(44)}\ln\dfrac{0.35}{0.15} = 0.54$ h).

**Result:** residence time ≈ 3.2 + 0.5 = **3.7 h**. Most of the time is spent at the wet end, where the air has already cooled to 86–114 °F.`,
        answer: String.raw`m_s = 333 lb/h, 400 lb/h water; 𝓗_in ≈ 0.0043 → air 51,900 lb/h; air 120 → 114.4 (at X_c) → 86.4 °F; t_c ≈ 3.21 h (ΔT_lm 24.8 °F), t_f ≈ 0.53 h; total ≈ 3.7 h.` } ] },

    { id: "practice-drying-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P10", label: "", marks: "20", topic: "drying",
        sub: "Tray-dryer test: rate curve, critical moisture and time for a new batch", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; slides "Principles of drying: drying curve, calculation of drying time"; MSH Eqs. (24.19)–(24.26). Past papers ask the rate curve only as theory (2011-12 Q6(b), 2012-13 Q8(c), 2017-18 Q4(c))`,
        text: String.raw`A batch of wet granules containing 3.0 kg of dry solid is spread on a tray of 0.20 m² exposed area and dried under constant conditions. The weights recorded are:

| t, h | 0 | 0.5 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 | 3.5 | 4.0 | 5.0 | 6.0 | 7.0 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| W, kg | 4.80 | 4.64 | 4.48 | 4.32 | 4.16 | 4.00 | 3.84 | 3.71 | 3.60 | 3.44 | 3.33 | 3.26 |

The equilibrium moisture content under these conditions is 0.04 kg/kg dry solid.
(a) Calculate the moisture content X and the drying rate R for each interval and plot the rate curve. Find the constant rate and the critical moisture content.
(b) Sketch the shape of X vs t and R vs X and name the periods.
(c) A new batch of the same material in the same dryer (same depth) starts at X = 0.55. How long will it take to reach X = 0.06? and X = 0.10?`,
        solution: String.raw`**Given:** $m_s = 3.0$ kg, $A = 0.20$ m², weights vs time, $X^* = 0.04$.

**Find:** $R_c$, $X_c$; drying times.

**Assumptions:** constant drying conditions; linear falling rate through $X^*$.

1. **(a) Moisture and rate:** $X = W/3.0 - 1$; $R = -\dfrac{m_s}{A}\dfrac{\Delta X}{\Delta t}$ at the mid-interval moisture:

| interval, h | $X_{mean}$ | R, kg/m²·h |
|---|---|---|
| 0–0.5 … 2.5–3.0 | 0.573 → 0.307 | 1.60 (each interval) |
| 3.0–3.5 | 0.258 | 1.30 |
| 3.5–4.0 | 0.218 | 1.10 |
| 4.0–5.0 | 0.173 | 0.80 |
| 5.0–6.0 | 0.128 | 0.55 |
| 6.0–7.0 | 0.098 | 0.35 |

![Drying-rate curve: R = 1.6 kg/m²h down to X_c = 0.30, then linear toward X* = 0.04](fig/practice-drying-P10-sol.svg)

The rate is constant, $R_c = 1.6$ kg/m²·h, until about $X$ = 0.30, then falls nearly linearly toward $X^* = 0.04$ (the falling points lie on the line $R = 1.6(X - 0.04)/0.26$). So $X_c ≈ 0.30$ (reached at $t = 3.0(0.60 - 0.30)/(0.20 \times 1.6) = 2.8$ h).

2. **(b) Shape:** X falls linearly with t during the constant-rate period (surface wet, evaporation at the wet-bulb temperature, rate fixed by external heat and mass transfer), then curves and flattens toward $X^*$ in the falling-rate period (surface partly dry; internal capillary flow or diffusion controls). R vs X: horizontal line, break at $X_c$, then a line (here) toward zero at $X^*$. A short initial warm-up period is not visible in these data.

3. **(c) New batch** ($m_s/(AR_c) = 3.0/(0.20 \times 1.6) = 9.375$ h per unit X):
$$t = \frac{m_s}{AR_c}\left[(X_1 - X_c) + (X_c - X^*)\ln\frac{X_c - X^*}{X_2 - X^*}\right]$$
To 0.06: $t = 9.375[0.25 + 0.26\ln(0.26/0.02)] = 9.375(0.25 + 0.667) = 8.6$ h.
To 0.10: $t = 9.375[0.25 + 0.26\ln(0.26/0.06)] = 9.375(0.25 + 0.381) = 5.9$ h.

**Result:** $R_c$ = 1.6 kg/m²·h, $X_c$ ≈ 0.30; new batch: 8.6 h to X = 0.06, 5.9 h to X = 0.10. The last 0.04 kg/kg costs 2.7 h, so specifying a drier product than needed is expensive.`,
        answer: String.raw`R_c = 1.6 kg/m²h; X_c ≈ 0.30 (falling rate linear to X* = 0.04); t = 9.375[(0.55 − 0.30) + 0.26 ln(0.26/(X − 0.04))] = 8.6 h to X = 0.06 and 5.9 h to X = 0.10.` } ] },

    { id: "practice-drying-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P11", label: "", marks: "20", topic: "drying",
        sub: "Predicting the constant rate from air conditions; effect of velocity and temperature", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; MSH Eq. (24.13) in SI form h = 8.8G^0.8/D_e^0.2 and Eq. (24.15); psychrometry as in MSH ch. 23`,
        text: String.raw`A wet granular solid is dried in trays 25 mm deep (dry density 1400 kg/m³), from the top surface only, from X = 0.45 to X = 0.05 (dry basis). Critical moisture 0.15, equilibrium moisture 0.02; falling rate linear in free moisture. Air at 70°C and humidity 0.010 kg/kg flows parallel to the surface at 3 m/s; the equivalent diameter of the air channel is 0.15 m. Use $h = 8.8G^{0.8}/D_e^{0.2}$ (W/m²·°C, G in kg/m²·s).
(a) Find the wet-bulb temperature, the constant drying rate and the total drying time.
(b) What drying time would result if the air velocity were doubled? If instead the air were heated to 90°C at the same humidity and 3 m/s?`,
        solution: String.raw`**Given:** depth 25 mm, $\rho_s = 1400$ kg/m³ → $m_s/A = 35$ kg/m²; $X_1 = 0.45$, $X_c = 0.15$, $X^* = 0.02$, $X_2 = 0.05$; air 70 °C, $\mathcal H = 0.010$, 3 m/s, $D_e = 0.15$ m.

**Find:** $T_w$, $R_c$, $t_T$; effect of 6 m/s and of 90 °C.

**Assumptions:** surface at the wet-bulb temperature; radiation and conduction through the tray neglected; Lewis number ≈ 1 for air–water.

1. **Wet bulb:** solve $(\mathcal H_w - \mathcal H)\lambda_w = c_s(T - T_w)$ with $c_s = 1.005 + 1.88(0.010) = 1.024$ kJ/kg·°C: $T_w = 29.8$ °C ($\mathcal H_w = 0.0269$, $\lambda_w = 2430$ kJ/kg). (Humidity chart: about 30 °C.)

2. **Air mass velocity:** humid volume $v_H = (1/28.97 + 0.010/18.02)(8.314)(343.15)/101.3 = 0.988$ m³/kg dry air; density $= 1.010/0.988 = 1.023$ kg/m³; $G = 3(1.023) = 3.07$ kg/m²·s.

3. **Coefficient and constant rate:**
$$h = \frac{8.8(3.07)^{0.8}}{0.15^{0.2}} = 31.5\ \mathrm{W/m^2\,^\circ C},\qquad R_c = \frac{h(T - T_w)}{\lambda_w} = \frac{31.5(40.2)}{2430\times10^3}(3600) = 1.88\ \mathrm{kg/m^2\,h}$$

4. **Drying time** (free moisture: $X_1 - X^* = 0.43$, $X_c - X^* = 0.13$, $X_2 - X^* = 0.03$):
$$t_c = \frac{35(0.45 - 0.15)}{1.88} = 5.6\ \mathrm{h},\qquad t_f = \frac{35(0.13)}{1.88}\ln\frac{0.13}{0.03} = 3.6\ \mathrm{h},\qquad t_T = 9.2\ \mathrm{h}$$

5. **(b) Velocity doubled:** $h \propto G^{0.8}$ → $h = 54.9$, $R_c = 3.27$ kg/m²·h, $t_T = 9.15(1.88/3.27) = 5.3$ h, assuming $X_c$ is unchanged (in reality a faster constant rate raises $X_c$, so the gain is a little smaller).
**Air at 90 °C:** $T_w = 33.7$ °C, G = 2.90 kg/m²·s, $h = 30.1$, $R_c = 2.52$ kg/m²·h, $t_T = 6.8$ h.

**Result:** $T_w$ ≈ 29.8 °C, $R_c$ ≈ 1.9 kg/m²·h, total 9.2 h (5.6 h constant + 3.6 h falling); doubling velocity → 5.3 h, 90 °C air → 6.8 h. Both changes act only through $R_c$; in the falling period (internal control) velocity helps less than these figures suggest.`,
        answer: String.raw`T_w = 29.8 °C; G = 3.07 kg/m²s, h = 31.5 W/m²°C, R_c = 1.88 kg/m²h; t = 5.6 + 3.6 = 9.2 h; at 6 m/s R_c = 3.27 → 5.3 h; at 90 °C R_c = 2.52 → 6.8 h.` } ] },

    { id: "practice-drying-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P12", label: "", marks: "20", topic: "drying",
        sub: "Spray dryer for milk concentrate: air rate, outlet humidity and efficiency", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; slides "Spray dryer: considered as dryers alone, spray dryers are not highly efficient; much heat is lost in the discharged gases"; dryer-selection question 2018-19 Q2(b) (milk powder plant)`,
        text: String.raw`A spray dryer produces milk powder containing 4% moisture (wet basis) from 2000 kg/h of concentrate with 48% solids, fed at 50°C. Ambient air (20°C, humidity 0.008) is heated to 180°C and leaves the dryer at 85°C; the powder leaves at 70°C. Specific heat of milk solids 1.5 kJ/kg·°C.
(a) Find the water evaporated and the dry-air rate needed if the dryer is adiabatic; find the outlet humidity and relative humidity.
(b) Find the heater duty and the thermal efficiency of the dryer. Repeat the air rate if 8% of the heat supplied is lost.
(c) Why is the efficiency of spray drying low, and how can it be improved?`,
        solution: String.raw`**Given:** feed 2000 kg/h, 48% solids, 50 °C; powder 4% water (wb), 70 °C; air 20 °C, $\mathcal H = 0.008$, heated to 180 °C, out at 85 °C.

**Find:** evaporation, air rate, outlet $\mathcal H$ and RH, heater duty, efficiency.

**Assumptions:** humid-air enthalpy $i = (1.005 + 1.88\mathcal H)T + 2501\mathcal H$ kJ/kg dry air (datum 0 °C liquid water); water $c_p$ = 4.18; steady, adiabatic in (a).

1. **Material balance:** solids $= 960$ kg/h; powder $= 960/0.96 = 1000$ kg/h (40 kg water); water evaporated $= 2000 - 1000 = 1000$ kg/h.

2. **Enthalpy balance** $\dot m_a i_1 + H_{feed} = \dot m_a i_2 + H_{powder}$, with $\mathcal H_2 = 0.008 + 1000/\dot m_a$:
$H_{feed} = 960(1.5)(50) + 1040(4.18)(50) = 289{,}400$ kJ/h; $H_{powder} = 960(1.5)(70) + 40(4.18)(70) = 112{,}500$ kJ/h; $i_1 = 1.020(180) + 2501(0.008) = 203.6$ kJ/kg.
Solving: $\dot m_a = 25{,}600$ kg dry air/h, $\mathcal H_2 = 0.047$ kg/kg.

3. **Outlet RH:** $p_v = 0.047(101.3)/(0.622 + 0.047) = 7.1$ kPa; $p_{sat}(85\ ^\circ\mathrm{C}) = 57.9$ kPa; RH ≈ 12% (low, needed so the powder can reach 4% moisture: the equilibrium moisture of milk powder at 12% RH is about 3%).

4. **(b) Heater duty:** $\dot m_a c_s(180 - 20) = 25{,}630(1.020)(160)/3600 = 1162$ kW.
Thermal efficiency (heat to evaporate / heat supplied) $\approx 1000(2400)/(1162 \times 3600) = 57\%$; the usual short form $(T_1 - T_2)/(T_1 - T_0) = 95/160 = 59\%$.
With 8% of the supplied heat lost: $\dot m_a = 29{,}600$ kg/h (16% more air and fuel), $\mathcal H_2 = 0.042$.

5. **(c) Why low and how to improve:** the exhaust leaves hot (85 °C) and in large volume because the product must not overheat and the outlet RH must be low; so 40% of the heat goes up the stack. Improvements: higher inlet temperature (180 → 220 °C, possible because droplets stay at the wet bulb, about 45 °C here), higher feed solids from a multiple-effect evaporator (evaporating water there costs 1/3–1/5 of the energy), exhaust-air heat recovery to preheat inlet air, two-stage drying (spray dryer + fluid-bed after-dryer so the spray dryer can run with a cooler outlet).

**Result:** 1000 kg/h evaporated; about 25,600 kg/h dry air (29,600 with 8% loss); outlet 𝓗 = 0.047, RH ≈ 12%; heater 1160 kW; efficiency ≈ 57–59%.`,
        answer: String.raw`Powder 1000 kg/h, evaporation 1000 kg/h; ṁ_air ≈ 25,600 kg/h, 𝓗_out ≈ 0.047, RH ≈ 12%; heater ≈ 1160 kW; η ≈ 57% ((180 − 85)/(180 − 20) = 59%); with 8% loss ≈ 29,600 kg/h air.` } ] },

    { id: "practice-drying-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P13", label: "", marks: "15", topic: "drying",
        sub: "Direct-fired countercurrent rotary dryer for sand: heat duty, gas and fuel", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; slide table "Efficiency of rotary dryers: countercurrent direct-fired 60%, parallel direct-fired 65%, steam tube 85% …"`,
        text: String.raw`Foundry sand (10,000 kg/h dry basis) is dried from 6% to 0.2% moisture (dry basis) in a countercurrent direct-fired rotary dryer. The sand enters at 25°C and leaves at 100°C; take $c_p$ = 0.84 kJ/kg·°C for sand and 1.10 kJ/kg·°C for the combustion gas, latent heat 2257 kJ/kg (evaporation taken at 100°C). Natural gas has a heating value of 37.3 MJ/m³.
(a) Find the useful heat duty.
(b) Estimate the fuel consumption using the slide's typical efficiency for this type of dryer.
(c) If the combustion gases enter at 600°C and leave at 150°C and the shell loses 10% of the heat supplied, find the gas rate and the actual thermal efficiency, and compare with (b).`,
        solution: String.raw`**Given:** $\dot m_s = 10{,}000$ kg/h, $X$: 0.06 → 0.002; sand 25 → 100 °C.

**Find:** $Q_{use}$, fuel, gas rate, efficiency.

**Assumptions:** water heated from 25 °C to 100 °C and evaporated at 100 °C (conservative); ambient 25 °C; efficiency = useful heat / heat in fuel (gas above ambient).

1. **Water evaporated:** $10{,}000(0.06 - 0.002) = 580$ kg/h.

2. **(a) Useful heat:**
$$Q_{use} = 10{,}000(0.84)(75) + 10{,}000(0.002)(4.18)(75) + 580[4.18(75) + 2257]$$
$$= 630{,}000 + 6{,}300 + 1{,}490{,}900 = 2.127\times10^6\ \mathrm{kJ/h} = 591\ \mathrm{kW}$$
(30% of the heat goes to heating the sand itself.)

3. **(b) Slide efficiency** for countercurrent direct-fired dryers: 60%. Fuel heat $= 591/0.60 = 985$ kW → $985(3600)/37{,}300 = 95$ m³/h of natural gas.

4. **(c) Heat balance on the gas:** heat supplied $= \dot m_gc_p(600 - 25)$; stack loss $= \dot m_gc_p(150 - 25)$; shell loss $= 0.10\,\dot m_gc_p(575)$:
$$Q_{use} = \dot m_gc_p(575 - 125 - 57.5) = 1.10\,\dot m_g(392.5) \Rightarrow \dot m_g = \frac{2.127\times10^6}{431.8} = 4930\ \mathrm{kg/h}$$
$$\eta = \frac{392.5}{575} = 68\%,\qquad \text{fuel} = \frac{591}{0.683} = 866\ \mathrm{kW} \approx 84\ \mathrm{m^3/h}$$

**Result:** duty ≈ 590 kW; about 95 m³/h of gas at the slide's 60%, or about 84 m³/h at the 68% this heat balance gives. The slide figure is a typical plant value; it includes air leakage at the seals, excess air and higher exit temperatures, which this idealised balance leaves out.`,
        answer: String.raw`580 kg/h evaporated; Q_use = 2.13 × 10⁶ kJ/h ≈ 591 kW; at 60% (slide) fuel ≈ 985 kW ≈ 95 m³/h NG; with 600 → 150 °C gas and 10% loss: gas ≈ 4930 kg/h, η ≈ 68%, ≈ 84 m³/h.` } ] },

    { id: "practice-drying-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P14", label: "", marks: "16", topic: "drying",
        sub: "Dryer selection for four products using the slide guidelines", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Slides "Steps of selection of drying equipment", "General guidelines" and the dryer-type slides (tray, vacuum shelf, conveyor, drum, rotary vacuum, rotary, flash, fluidized bed, spray, freeze); past questions 2013-14 Q6(a), 2016-17 Q4(a), 2018-19 Q2(b), 2020-21 Q2(a), 2023-24 Q2(e) used other products`,
        text: String.raw`Using the general guidelines for dryer selection, recommend a dryer for each of the following and justify your choice: (i) PVC wet cake from a centrifuge (25% water, fine free-flowing particles, 10 t/h); (ii) instant coffee extract (concentrated liquid, aroma sensitive); (iii) granulated urea fertiliser (2–3 mm granules, 30 t/h); (iv) a thick, sticky dyestuff paste produced in 500 kg batches.`,
        solution: String.raw`The slides' steps: initial selection (feed form, batch or continuous, heat sensitivity, direct or indirect heating, dust, energy, maintenance, pollution), drying tests, final selection.

| product | key properties | recommended dryer | reasons |
|---|---|---|---|
| (i) PVC cake, 10 t/h | fine, free-flowing after deagglomeration, mostly surface moisture, moderately heat sensitive, large tonnage | **flash dryer** followed by a **fluidized-bed** finishing stage (two-stage) | flash drying removes surface water in seconds (slides: residence a few seconds, small space, low maintenance, handles centrifuge cakes); the fluid bed (30–120 s for surface liquid, up to 15–30 min with internal diffusion) removes the bound moisture with good temperature control; continuous, large capacity; cyclones/bag filters for dust |
| (ii) instant coffee | liquid feed, aroma and flavour sensitive, product must dissolve instantly | **freeze dryer** (premium) or **spray dryer** (standard) | freeze drying sublimes ice at low temperature and keeps the porous structure, colour and aroma (slides: does not alter colour and taste); spray drying gives a free-flowing, hollow, rapidly soluble powder in one step (combines evaporator, dryer, size reduction and classifier) at much lower cost; feed pre-concentrated in a multiple-effect evaporator |
| (iii) urea granules, 30 t/h | coarse granules (1–3 mm), not very heat sensitive, large tonnage, must not break | **fluidized-bed dryer** (or rotary dryer) | slides: fluid beds suit granular solids of 1–3 mm and are used for fertilisers; rapid uniform heat transfer, short time, small floor area; a rotary dryer is the robust alternative (more product attrition, larger) |
| (iv) dyestuff paste, batches | sticky paste, passes through a "plastic" stage, small batches, valuable, dusty when dry, solvent/ odour | **rotary vacuum (paddle) dryer** or **vacuum shelf (tray) dryer** | slides: the rotary vacuum dryer handles slurries that become viscous, then a heavy adhesive mass, then lumps and finally a free-flowing product; batch, indirect heating (no dust carried away by gas, vapour can be condensed), low temperature under vacuum |

**Then:** run drying tests (rate curve, critical moisture, product quality) on the short-listed dryers, and make the final choice on total cost (capital + energy + labour + maintenance + dust/pollution control).`,
        answer: String.raw`(i) Flash + fluid-bed two-stage; (ii) freeze dryer (premium) or spray dryer with pre-evaporation; (iii) fluidized bed (or rotary); (iv) rotary vacuum (paddle) or vacuum shelf batch dryer. Justify by feed form, heat sensitivity, capacity, batch/continuous, dust and energy; confirm with drying tests.` } ] },

    { id: "practice-drying-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-drying-P15", label: "", marks: "12", topic: "drying",
        sub: "Derive drying times for constant and linear falling-rate periods; case hardening", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`MSH 5th ed. Eqs. (24.19)–(24.27) and "Shrinkage and casehardening" (p. 784); slides "Calculation of drying time"`,
        text: String.raw`(a) Starting from the definition of the drying rate, derive the time required to dry a batch of solid from $X_1$ to $X_2$ (free moisture, $X_2 < X_c < X_1$) when the rate is constant down to $X_c$ and then falls linearly to zero at X = 0. Show that when the falling rate is linear in free moisture the total time can be written in terms of $R_c$ and $X_c$ only.
(b) What is case hardening, why does it occur, and how is it prevented?`,
        solution: String.raw`### (a) Derivation
1. **Rate of drying** per unit area (MSH Eq. 24.19), $m_s$ = mass of dry solid, $X$ = free moisture:
$$R = -\frac{m_s}{A}\frac{dX}{dt} \quad\Rightarrow\quad dt = -\frac{m_s}{A}\frac{dX}{R} \quad\Rightarrow\quad t_T = \frac{m_s}{A}\int_{X_2}^{X_1}\frac{dX}{R}$$

2. **Constant-rate period** ($R = R_c$ from $X_1$ to $X_c$):
$$t_c = \frac{m_s}{AR_c}(X_1 - X_c)$$

3. **Falling-rate period**, linear through the origin: $R = R_c X/X_c$:
$$t_f = \frac{m_s}{A}\int_{X_2}^{X_c}\frac{X_c\,dX}{R_cX} = \frac{m_sX_c}{AR_c}\ln\frac{X_c}{X_2}$$
(MSH Eq. 24.25 in general: $R = aX + b$ gives $t_f = \dfrac{m_s(X_c - X')}{A(R_c - R')}\ln\dfrac{R_c}{R_2}$.)

4. **Total:**
$$t_T = \frac{m_s}{AR_c}\left[(X_1 - X_c) + X_c\ln\frac{X_c}{X_2}\right]$$
Only $R_c$ and $X_c$ are needed, both found from one drying test. Since $m_s/A$ = (dry density × thickness) for a tray, the time is proportional to the depth of material when the constant rate is controlled by external conditions. If the moisture contents are total (not free), replace every X by $X_T - X^*$.

### (b) Case hardening
- When bound moisture is removed from a colloidal, nonporous solid (soap, gelatin, glue, wood, clay), the solid **shrinks**. The surface dries first and shrinks against a still-wet, unyielding core, causing warping, cracking and checking.
- Diffusivity falls with moisture content, so the dry surface layer has a much lower diffusivity; this steepens the gradient further. In the extreme the surface forms an almost impervious **skin** that traps moisture inside: **case hardening**.
- **Prevention:** dry more slowly, mainly by **raising the humidity of the drying air** (this raises the surface equilibrium moisture $X^*$, flattens the moisture gradient and keeps the skin plastic), lower air temperature at the start, and humidity schedules (kilns for timber), drying thin pieces.`,
        answer: String.raw`t_T = (m_s/AR_c)[(X₁ − X_c) + X_c ln(X_c/X₂)] (free moisture; derived from R = −(m_s/A)dX/dt with R = R_c then R = R_cX/X_c). Case hardening: surface shrinks and dries to a low-diffusivity skin that seals the wet core; prevent by slower drying with humid air (higher X*) and lower initial temperature.` } ] }
  ]
});
