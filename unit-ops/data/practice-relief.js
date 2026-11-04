QB.paper({ year: "Practice", set: "Pressure relief", date: "", marks: 0, practice: true,
  rules: String.raw`Pressure-relieving devices and relief sizing: the worked examples in Dr. Sowgath's two relief decks (Crowl & Louvar ch. 8–9: relief scenarios and device selection Ex. 8-2, "what's wrong" layouts Fig. 8-17, knockout-drum Example 8-3, flare height, the styrene runaway example by DIERS/Leung, all-vapour and Fauske nomograph, correction factors), Ludwig ch. 7 rupture-disc, fire and deflagration-vent examples, Lieberman's practical relief-valve lessons, and exam-style sizing problems (bellows valve with viscous liquid, regulator failure, thermal expansion, fire, runaway with overpressure, deflagration vents, pressure levels, disc–valve combinations).`,
  questions: [
    { id: "practice-relief-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P1", label: "", marks: "", topic: "relief",
        sub: "Relief scenarios and device selection for the polymerization reactor (Ex. 8-2)", type: "theory", syllabus: "in", repeats: ["2023-24-Q4b", "2023-24-Q4c"],
        origin: "slides", ref: String.raw`Relief System slides (Dr. Sowgath), "Ex 8-2 Relief Scenario Examples" and "Ex 8-2 Selection of Relief Device"; Crowl & Louvar, Example 8-2 with Fig. 8-6`,
        text: String.raw`For the polymerization reactor system of Crowl & Louvar Fig. 8-6 (reactor R-1 with cooling coil, PD base pump P-1, nitrogen supply at 100 psig through a regulator, overhead condenser E-1, drum D-1), relief devices PSV-1 to PSV-5 have been located. (a) For each device write the credible overpressure scenario(s). (b) Select and justify the type of relief device for each.`,
        solution: String.raw`![Reactor R-1 system with relief devices PSV-1 to PSV-5 (Crowl & Louvar Fig. 8-6)](fig/2023-24-Q4b-sol.svg)

1. **(a) Credible scenarios** (from a hazard analysis; each device is sized for its worst scenario):

| relief | scenario |
|---|---|
| PSV-1a & PSV-1b (reactor R-1) | vessel full of liquid and P-1 inadvertently actuated; cooling coil broken, water enters at 200 gpm and 50 psig; N₂ regulator fails with critical flow in the 1-in. line; runaway reaction (loss of cooling) |
| PSV-2 (P-1 discharge) | V-1 inadvertently closed: relief needed for the pump at 100 gpm, 50 psig |
| PSV-3 (E-1 water side) | confined water line heated by 125 psig steam |
| PSV-4 (drum D-1) | N₂ regulator fails, critical flow in the ½-in. line; other R-1 scenarios relieve through PSV-1 |
| PSV-5 (reactor coil) | water blocked inside the coil while the heat of reaction causes thermal expansion |

2. **(b) Device selection:**
- **PSV-1a: rupture disc**, to protect PSV-1b from the reactive monomer (polymer would plug or foul a spring valve; disc gives a tight seal).
- **PSV-1b: safety-relief valve**, because a runaway reaction gives two-phase (liquid + vapour) flow; it recloses after the upset, unlike the disc. Disc and valve in series need a pressure gauge (tell-tale) between them.
- **PSV-2: relief valve** (liquid service, opens in proportion to overpressure) on the PD pump line.
- **PSV-3: relief valve**, liquid only; a conventional valve is satisfactory (discharge to atmosphere/drain, no back pressure).
- **PSV-4: safety-relief valve**, because liquid or vapour service is possible; the vent goes to a scrubber with possibly large back pressure, so a **balanced-bellows** valve is specified.
- **PSV-5: relief valve** for liquid service only (thermal expansion of blocked-in water).

3. **Rules used:** gas/vapour → safety valve (pops); liquid → relief valve (proportional lift, fully open at ~25 % overpressure); either/two-phase → safety-relief valve; corrosive, toxic, polymerizing → rupture disc (alone or ahead of a valve); variable or high back pressure → balanced bellows.

**Result:** PSV-1 = rupture disc + safety-relief valve; PSV-2, -3, -5 = liquid relief valves (PSV-3 conventional); PSV-4 = balanced-bellows safety-relief valve.`,
        answer: String.raw`PSV-1a rupture disc (protects valve from monomer) + PSV-1b safety-relief valve (two-phase runaway); PSV-2 relief valve (pump, liquid); PSV-3 conventional relief valve (heated water); PSV-4 balanced-bellows safety-relief valve (N₂ failure, scrubber back pressure); PSV-5 relief valve (thermal expansion).` } ] },

    { id: "practice-relief-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P2", label: "", marks: "", topic: "relief",
        sub: "What is wrong with six relief-valve and rupture-disc layouts (Fig. 8-17)", type: "theory", syllabus: "in", repeats: ["2018-19-Q1c", "2020-21-Q4c"],
        origin: "slides", ref: String.raw`Relief System slides, "Figure 8-17 Relief valve configurations: What's wrong?" (Crowl & Louvar Fig. 8-17); panels d, e, g and j were asked in 2018-19 Q1(c) and 2020-21 Q4(c), the remaining six are here`,
        text: String.raw`The following configurations show what not to do when installing relief valves or rupture discs on process vessels. State what is wrong with each and how it should be corrected.

![Relief configurations a, b, c, f, h and i (Crowl & Louvar Fig. 8-17, redrawn): (a) rupture disc, block valve and relief valve in series on a vessel; (b) rupture disc with a block valve on its outlet; (c) relief valve on the feed line to a vessel; (f) 2-in. inlet with 1-in. discharge pipe; (h) relief valve on a side nozzle with a dead-ended pipe on a polymer vessel; (i) relief valve under a roof with the discharge turned back down](fig/practice-relief-P2.svg)`,
        solution: String.raw`1. **(a) Disc → block valve → relief valve.** No pressure gauge or tell-tale (excess-flow) valve between the disc and the relief valve: a pin-hole leak in the disc lets pressure build up in the space, and since a disc bursts on *differential* pressure, the vessel pressure needed to burst it rises above the set pressure. The block valve can isolate the relief valve. **Fix:** put the disc directly under the relief valve with a pressure gauge/vent between them; any block valve must be car-sealed or locked open.

2. **(b) Disc with a block valve on its outlet.** If the valve is closed (or partly closed) the disc cannot vent: pressure equalizes across it and it will not burst, or it bursts and the flow is blocked. **Fix:** no block valve in the discharge (or locked open), and route the disc outlet to a safe location or containment, with protection against rain entering the vertical outlet.

3. **(c) Relief valve on the feed line, not on the vessel.** The device is separated from the vessel it protects: if the feed is blocked by an upstream valve or the line is closed, the vessel (which may be over-pressured by fire, reaction or another inlet) is unprotected; with flow in the line, the line pressure drop and velocity cause wrong readings and chatter. **Fix:** connect the relief directly to the vessel vapour space with an inlet line short enough that its loss is below 3 % of set pressure.

4. **(f) 2-in. inlet, 1-in. discharge pipe.** The outlet pipe is smaller than the inlet; the built-up back pressure in a small, long tailpipe reduces capacity, can make the valve chatter and may exceed the 10 % limit of a conventional valve. **Fix:** the discharge pipe must be at least the size of the valve outlet (outlet sizes are normally larger than inlet) and sized for the built-up back pressure.

5. **(h) Side nozzle with a dead-ended pipe on a polymer vessel.** Polymer collects in the stagnant dead leg and plugs the relief inlet; the dead-end also traps liquid. **Fix:** mount the device directly on top of the vessel (vapour space), avoid dead legs, use a flush-mounted rupture disc ahead of the valve and/or an inert-gas purge.

6. **(i) Relief valve under a roof, discharge turned down.** The vent discharges inside or onto a building: flammable or toxic vapour accumulates under the roof, endangers people, can ignite, and the downward jet and its reaction force act on the structure. **Fix:** route the discharge vertically upward, above the roof and away from air intakes and platforms (or to a closed containment system: knockout drum, scrubber, flare), with a drain at the low point of the tailpipe.`,
        answer: String.raw`(a) no tell-tale gauge between disc and valve, block valve can isolate; (b) block valve on disc outlet; (c) relief on the feed line, not the vessel; (f) outlet (1 in.) smaller than inlet (2 in.) → back pressure, chatter; (h) dead-ended nozzle plugs with polymer; (i) discharge under a roof/back down onto the building.` } ] },

    { id: "practice-relief-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P3", label: "", marks: "", topic: "relief",
        sub: "Knockout drum: maximum vapour velocity to drop out 300 µm droplets", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Relief System slides, "Design/Sizing of Knockout drum", "Fig. 8.14 Drag coefficient correlation" and "Example 8-3" (Crowl & Louvar Example 8-3, Eqs. 8-1, 8-2, after API 521)`,
        text: String.raw`Determine the maximum vapor velocity in a horizontal knockout drum to drop out liquid particles with diameters of 300 µm, where vapor rate = 170 lb/hr, $\mu_V$ = 0.01 centipoise, $d_p$ = 300 µm, $\rho_V$ = 0.20 lb/ft³, $\rho_L$ = 30 lb/ft³. The dropout velocity is
$$U_d = 1.15\sqrt{\frac{gd_p(\rho_L - \rho_V)}{\rho_VC}}$$
where the drag coefficient $C$ is read from Fig. 8.14 against
$$C(Re)^2 = \left[0.95\times10^8\,\frac{\mathrm{cP^2}}{(\mathrm{lb/ft^3})^2\,\mathrm{ft^3}}\right]\frac{\rho_Vd_p^3(\rho_L - \rho_V)}{\mu_V^2}$$`,
        solution: String.raw`**Given:** $d_p = 300\ \mu$m = $9.843\times10^{-4}$ ft, $\rho_V = 0.20$, $\rho_L = 30\ \mathrm{lb/ft^3}$, $\mu_V = 0.01$ cP, vapour 170 lb/h.

**Find:** dropout (maximum allowable) vapour velocity.

1. **Abscissa of Fig. 8.14:**
$$C(Re)^2 = 0.95\times10^8\frac{0.20(9.843\times10^{-4})^3(29.8)}{(0.01)^2} = 0.95\times10^8\frac{5.68\times10^{-9}}{10^{-4}} = 5.4\times10^3$$

2. **Drag coefficient:** reading the standard sphere-drag curve (Fig. 8.14) at $C\,Re^2 = 5.4\times10^3$ gives $Re ≈ 63$ and **$C ≈ 1.4$** (the Schiller–Naumann fit $C = (24/Re)(1 + 0.15Re^{0.687})$ gives $C$ = 1.37).

3. **Dropout velocity** ($g = 32.17\ \mathrm{ft/s^2}$):
$$U_d = 1.15\sqrt{\frac{32.17(9.843\times10^{-4})(29.8)}{0.20(1.37)}} = 1.15\sqrt{3.44} = 2.1\ \mathrm{ft/s}$$
(2.11 ft/s with $C$ = 1.4.) Check: $Re = d_pU_d\rho_V/\mu_V = 9.843\times10^{-4}(2.13)(0.20)/(0.01 \times 6.72\times10^{-4}) = 62$ ✓ consistent with the chart reading. The factor 1.15 is $\sqrt{4/3}$ from the terminal-velocity balance.

4. **Use:** the vapour must travel slower than $U_d$ across the drum. Volumetric flow $= 170/(3600 \times 0.20) = 0.236\ \mathrm{ft^3/s}$, so the vapour flow area must be at least $0.236/2.1 = 0.11\ \mathrm{ft^2}$ (a vertical drum of only 0.38 ft diameter). Such a small relief load is governed instead by the liquid hold-up volume and nozzle sizes, so a practical drum is much larger; in a horizontal drum the droplet must also fall through the vapour space within the vapour residence time.

**Result:** $C(Re)^2 ≈ 5.4\times10^3$, $C ≈ 1.4$, $U_d ≈ 2.1$ ft/s (0.64 m/s).`,
        answer: String.raw`C(Re)² = 5.4 × 10³ → C ≈ 1.4 (Re ≈ 63) → U_d = 1.15√[g d_p Δρ/(ρ_V C)] ≈ 2.1 ft/s; minimum vapour area ≈ 0.11 ft² for 170 lb/h.` } ] },

    { id: "practice-relief-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P4", label: "", marks: "", topic: "relief",
        sub: "Flare stack height for a given radiant heat intensity at grade", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Relief System slides, "Flare Design" and "Flare Example" (Crowl & Louvar Eq. 8-3)`,
        text: String.raw`Calculate the height of a flare, $H_f$, to give a heat intensity $q_f$ = 2,000 Btu/hr/ft² at $X_f$ = 5 ft from the base of the flare with the following flare configuration: $d_f$ = 2 ft, $Q_m$ = 60,000 lb/hr, $M$ = 30. Use (for a flame height of 120 $d_f$, a heating value of 20,000 Btu/lb and the slide's emissivity)
$$H_f = -60d_f + 0.5\sqrt{(120d_f)^2 - \frac{4\pi q_fX_f^2 - 960Q_m\sqrt M}{\pi q_f}}$$
Repeat for the design criterion of the slides, $q_f$ = 1500 Btu/hr/ft² at the base, and comment.`,
        solution: String.raw`**Given:** $d_f = 2$ ft, $Q_m = 60{,}000$ lb/h, $M = 30$, $X_f = 5$ ft, $q_f = 2000$ (and 1500) Btu/h ft².

1. **Radiation term** ($q_f$ = 2000):
$$\frac{4\pi(2000)(5)^2 - 960(60{,}000)\sqrt{30}}{2000\pi} = \frac{6.283\times10^5 - 3.155\times10^8}{6283} = -5.01\times10^4\ \mathrm{ft^2}$$

2. **Height:**
$$H_f = -60(2) + 0.5\sqrt{(240)^2 + 5.01\times10^4} = -120 + 0.5\sqrt{1.077\times10^5} = -120 + 164.1 = 44\ \mathrm{ft}$$

3. **Criterion $q_f$ = 1500 Btu/h ft²:** the term becomes $(4.712\times10^5 - 3.155\times10^8)/4712 = -6.68\times10^4$, so
$$H_f = -120 + 0.5\sqrt{57{,}600 + 66{,}840} = -120 + 176.4 = 56\ \mathrm{ft}$$

4. **Comment:** the slides' table shows 2000 Btu/h ft² causes blisters in 20 s and 5300 in 5 s, while solar radiation is ~350; the criterion of ≤ 1500 Btu/h ft² at the stack base (personnel escape time) needs a 56 ft stack instead of 44 ft. Heat intensity falls with the square of distance from the flame centre, so height is the main design variable; the flare must also give a stable flame (smokeless, steam-assisted) and a tip velocity that avoids blow-out.

**Result:** $H_f$ ≈ 44 ft for 2000 Btu/h ft² (as on the slide) and ≈ 56 ft for 1500 Btu/h ft².`,
        answer: String.raw`H_f = −120 + 0.5√(57,600 + 50,110) = 44 ft (slide answer); for q_f = 1500 Btu/h ft², H_f ≈ 56 ft.` } ] },

    { id: "practice-relief-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P5", label: "", marks: "", topic: "relief",
        sub: "Styrene runaway: two-phase (Leung), all-vapour and nomograph vent sizes compared", type: "numerical", syllabus: "in", repeats: ["2019-20-Q8a", "2020-21-Q4b"],
        origin: "slides", ref: String.raw`Chapter 9 relief sizing slides, "Ex 9-5, Two-phase relief" (Styrene polymer release 1–5) and "Nomograph 2-f sizing method" (Crowl & Louvar Example 9-5, Eqs. 9-15, 9-19, 9-9, Fig. 9-9)`,
        text: String.raw`Styrene monomer undergoes an adiabatic polymerization after being inadvertently heated to 70°C in a 3,500-gal reactor (V = 13.16 m³) with MAWP = 5 bar. Reaction mass $m_o$ = 9,500 kg; set temperature $T_s$ = 482.5 K, maximum temperature $T_m$ = 492.7 K ($\Delta T$ = 10.2 K); set pressure 4.5 bar, maximum pressure 5.4 bar abs; $(dT/dt)_s$ = 0.493 K/s, $(dT/dt)_m$ = 0.662 K/s. At the set point: $v_f$ = 0.001388 m³/kg, $v_g$ = 0.08553 m³/kg, $C_p$ = 2.470 kJ/kg K, $\Delta H_v$ = 310.6 kJ/kg. For an all-vapour release $M$ = 104, $\gamma$ = 1.32, $C_o$ = 1.

(a) Size the vent for two-phase flow ($\psi$ = 1) by the Leung method. (b) Size it assuming all-vapour relief. (c) Check (a) with the Fauske nomograph (Fig. 9-9 gives 0.013 m² per 1000 kg at 29.6 °C/min and 65 psia; based on L/D = 400, $\psi$ = 0.5, 20 % overpressure). (d) Conclusions.`,
        solution: String.raw`**Given:** data above; $C_V ≈ C_p$ = 2470 J/kg K (conservative, the larger value); $v_{fg} = 0.08553 - 0.001388 = 0.08414\ \mathrm{m^3/kg}$.

1. **Energy input rate** (slide: average of set and maximum heating rates):
$$q = 0.5C_V\left[\left(\frac{dT}{dt}\right)_s + \left(\frac{dT}{dt}\right)_m\right] = 0.5(2470)(0.493 + 0.662) = 1426\ \mathrm{W/kg}$$

2. **(a) Two-phase mass flux** (Eq. 9-15, $\psi$ = 1, L/D = 0):
$$G_T = 0.9\psi\frac{\Delta H_v}{v_{fg}}\sqrt{\frac{g_c}{C_pT_s}} = 0.9\frac{310{,}600}{0.08414}\sqrt{\frac{1}{2470(482.5)}} = 0.9(3.691\times10^6)(9.16\times10^{-4}) = 3043\ \mathrm{kg/m^2s}$$

3. **Leung area** (Eq. 9-19):
$$A = \frac{m_oq}{G_T\left[\left(\frac{V}{m_o}\frac{\Delta H_v}{v_{fg}}\right)^{1/2} + (C_V\Delta T)^{1/2}\right]^2} = \frac{9500(1426)}{3043\left[\sqrt{1.385\times10^{-3}(3.691\times10^6)} + \sqrt{2470(10.2)}\right]^2}$$
$$= \frac{1.355\times10^7}{3043(71.5 + 158.7)^2} = \frac{1.355\times10^7}{3043(52{,}990)} = 0.084\ \mathrm{m^2},\qquad d = \sqrt{4A/\pi} = 0.33\ \mathrm{m}\ (13\ \mathrm{in.})$$

4. **(b) All-vapour:** at the set point $q = C_V(dT/dt)_s = 2470(0.493) = 1218$ W/kg, all used to vaporize:
$$Q_m = \frac{qm_o}{\Delta H_v} = \frac{1218(9500)}{310{,}600} = 37.2\ \mathrm{kg/s}$$
Choked-vapour area (Eq. 9-9, $K_b$ = 1, $z$ = 1, $P$ = 5.4 bar), $\chi = \sqrt{\frac{\gamma}{R_g}\left(\frac{2}{\gamma+1}\right)^{(\gamma+1)/(\gamma-1)}} = \sqrt{\frac{1.32}{8314}(0.862)^{7.25}} = 7.36\times10^{-3}$:
$$A = \frac{Q_m}{C_o\chi P}\sqrt{\frac{Tz}{M}} = \frac{37.2}{1(7.36\times10^{-3})(5.4\times10^5)}\sqrt{\frac{482.5}{104}} = 0.020\ \mathrm{m^2},\qquad d = 0.16\ \mathrm{m}\ (6.3\ \mathrm{in.})$$

5. **(c) Nomograph:** $0.013 \times 9.5 = 0.124\ \mathrm{m^2}$ at $\psi$ = 0.5; for an orifice ($\psi$ = 1) $A = 0.124(0.5/1) = 0.062\ \mathrm{m^2}$, $d$ = 0.28 m (11.1 in.). This is 26 % below the Leung value; the nomograph is a quick consistency check only.

6. **(d) Conclusions:** two-phase relief needs about four times the area of all-vapour relief (0.084 vs 0.020 m²). If the vent were sized for vapour and the runaway foamed (two-phase), the reactor would be badly under-protected. Proper sizing needs calorimeter (VSP/ARSST) data for the specific system.

**Result:** two-phase 0.084 m² (d = 0.33 m, 13 in.); all-vapour 0.020 m² (0.16 m, 6.3 in.); nomograph 0.062 m² (11 in.).`,
        answer: String.raw`q = 1426 W/kg, G_T = 3043 kg/m²s → A = 0.084 m², d = 0.33 m (13 in.); all-vapour Q_m = 37.2 kg/s → A = 0.020 m², d = 0.16 m (6.3 in.); nomograph 0.062 m² (11 in., 26 % low).` } ] },

    { id: "practice-relief-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P6", label: "", marks: "", topic: "relief",
        sub: "Correction factors Kv, Kp, Kb and why overpressure reduces vent area", type: "theory", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Chapter 9 relief sizing slides, "Relief area requirements", "Required vent area, 2-f flow", "Correct area for viscosity: Kv", "Correct A for overpressure: Kp", "Correct area for backpressure: Kb" (Crowl & Louvar Eq. 9-6, Figs. 9-2 to 9-6)`,
        text: String.raw`The API equation for a spring-operated relief valve in liquid service is
$$A = \frac{Q_v}{38.0\,C_oK_vK_pK_b}\sqrt{\frac{\rho/\rho_{ref}}{1.25P_s - P_b}}$$
(A in in², $Q_v$ in gal/min, P in psig). (a) Explain the physical meaning of each correction factor and how it varies. (b) Explain why the required vent area falls as the allowed overpressure rises, and why relief devices are designed for 10–25 % overpressure. (c) Why must a relief valve be neither too small nor too large?`,
        solution: String.raw`1. **(a) Correction factors:**
- **$C_o$ (discharge coefficient):** converts ideal orifice flow to real flow; use 0.61 for liquids when unknown (0.975 for gases).
- **$K_v$ (viscosity, Fig. 9-2):** higher viscosity → more friction in the valve → lower Reynolds number → smaller $K_v$ → larger area. $K_v ≈ 1$ for Re > ~5000; it falls steeply at low Re (roughly 0.4–0.5 at Re ≈ 50). It is found by iteration because Re depends on the area.
- **$K_p$ (overpressure, Fig. 9-3):** the equation assumes a valve fully open at 25 % overpressure ($K_p$ = 1). Below 25 % the valve is only partly lifted, so the effective area depends strongly on overpressure ($K_p$ ≈ 0.6 at 10 %); above 25 % the area is fixed and the flow rises only with ΔP, so $K_p$ is a weak function (slightly above 1 at 50 %).
- **$K_b$ (back pressure, Fig. 9-4):** for a conventional valve back pressure acts on the disc and shifts the set point, so it enters only through the ΔP term ($1.25P_s - P_b$), $K_b$ = 1. For a balanced-bellows valve the set pressure is independent of back pressure but the flow is still reduced, so $K_b$ = 1 up to about 15 % gauge back pressure and falls to ≈ 0.7 at 50 %.
- **$\rho/\rho_{ref}$:** specific gravity (liquid density relative to water).

2. **(b) Overpressure and area:** the slides' curve of two-phase vent area against overpressure falls steeply from 0 to ~10 % and flattens after ~25 %. Allowing the pressure to rise above the set pressure (i) increases the driving pressure (larger flux per unit area), (ii) for a runaway reaction lets the temperature rise $\Delta T$, so sensible heat absorbs part of the energy (term $C_V\Delta T$ in Leung's equation), and (iii) opens a spring valve fully. Holding the pressure at the set point would need a very large vent. Overpressure is therefore designed at 10–25 %, within the code limits (10 % single valve, 16 % multiple valves, 21 % fire for unfired vessels).

3. **(c) Sizing limits:** an **undersized** device cannot hold the pressure below the maximum allowed: the vessel is under-protected. An **oversized** spring valve passes far more than the actual flow; the flow needed to hold the seat open is 25–30 % of maximum, so at low flow the valve opens, the pressure falls, it closes and reopens rapidly (**chatter**), damaging the seat and possibly not relieving; it also discharges more material than necessary.

**Result:** $K_v$, $K_p$, $K_b$ ≤ 1 enlarge the area for viscous liquids, low overpressure and (bellows) back pressure; design overpressure 10–25 %; avoid chatter from oversizing.`,
        answer: String.raw`K_v ↓ with viscosity (Re < 5000); K_p = 1 at 25 % OP, ≈ 0.6 at 10 % (partly lifted valve); K_b = 1 for conventional (P_b in ΔP), < 1 for bellows above ~15 % back pressure. Larger OP → larger ΔP and C_VΔT term → much smaller A; oversized valves chatter.` } ] },

    { id: "practice-relief-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P7", label: "", marks: "", topic: "relief",
        sub: "Rupture disc for liquid toluene relieving 1800 gal/min", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 7-7 "Liquids rupture disk" (p. 466), Eq. (7-46)`,
        text: String.raw`Determine the rupture disk size required to relieve the following operating condition: back pressure 0 psig; toluene flow 1800 gpm, SpGr 0.90; pressure vessel MAWP = 25 psig; relieving pressure: set pressure, use 25 psig; actual relief pressure = 25 + 10 % = 27.5 psig.`,
        solution: String.raw`**Given:** $W_L = 1800$ gpm, SpGr 0.90, $P_1 = 27.5 + 14.7 = 42.2$ psia, $P_2 = 0 + 14.7 = 14.7$ psia.

**Assumptions:** $K_d$ = 0.62 for a rupture disc (API, or from the manufacturer); disc discharging through a short pipe to atmosphere (fixed-area orifice, no $K_p$ or $K_b$ correction).

1. **Liquid relief equation** (Ludwig Eq. 7-46; same form as C&L Eq. 9-3):
$$A = \frac{W_L}{38K_d}\sqrt{\frac{\mathrm{SpGr}}{P_1 - P_2}}$$

2. **Substitute:**
$$A = \frac{1800}{38(0.62)}\sqrt{\frac{0.90}{42.2 - 14.7}} = 76.40\sqrt{0.03273} = 76.40(0.1809) = 13.8\ \mathrm{in^2}$$

3. **Size:** $d = \sqrt{4(13.8)/\pi} = 4.19$ in. → a **5-in. disc** in 5-in. Sch. 40 pipe (20.0 in²) would be chosen; Ludwig suggests checking with the manufacturer and using 6-in. inlet and discharge pipe.

**Result:** required area ≈ 13.8 in² (≈ 4.2 in. diameter) → 5-in. (or 6-in.) disc.

> Book check: Ludwig writes the square root as 0.180 and gets 13.75 in²; with 0.1809 the area is 13.8 in² (rounding only).`,
        answer: String.raw`A = 1800/(38 × 0.62) × √[0.90/(42.2 − 14.7)] = 13.8 in² (book 13.75), d ≈ 4.2 in. → 5–6 in. disc.` } ] },

    { id: "practice-relief-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P8", label: "", marks: "", topic: "relief",
        sub: "Rupture disc for vapour 12,000 scfm: critical flow check and area", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 7-6 "Rupture disk for vapors or gases; non-fire condition" (pp. 465–466), Eq. (7-47)`,
        text: String.raw`Determine the rupture disk size required to relieve the pressure in a process vessel with the following conditions: k = 1.4; vessel MAWP = 85 psig, also = disk set pressure; vapor flow to relieve 12,000 std cu ft/min at 60°F and 14.7 psia; flowing temperature 385°F; vapor mol. wt. 28; backpressure on discharge of disk 30 psig. Determine if conditions on rupture are critical or non-critical, based on 10 % overpressure for primary relief.`,
        solution: String.raw`**Given:** $k = 1.4$, $P_s = 85$ psig, 10 % overpressure, $Q_s = 12{,}000$ scfm, $T = 385 + 460 = 845$ °R, $M = 28$, back pressure 30 psig.

1. **Relieving pressure:** $P_1 = 85(1.10) + 14.7 = 108.2$ psia; downstream $P_2 = 30 + 14.7 = 44.7$ psia.

2. **Critical flow check:**
$$\frac{P_2}{P_1} = \frac{44.7}{108.2} = 0.413 < \left(\frac{2}{k+1}\right)^{k/(k-1)} = \left(\frac{2}{2.4}\right)^{3.5} = 0.528$$
so the flow is **critical (sonic)**; the critical pressure is $0.528(108.2) = 57.1$ psia, above the back pressure, which therefore does not affect the flow.

3. **Area** (Ludwig Eq. 7-47, scfm form):
$$A = \frac{Q_s(MTZ)^{0.5}}{6.32\,C\,K_dP_1}$$
with $C = 520\sqrt{k(2/(k+1))^{(k+1)/(k-1)}} = 356$ for k = 1.4, $K_d$ = 0.62 (rupture disc), $Z$ = 1:
$$A = \frac{12{,}000\sqrt{28(845)(1.0)}}{6.32(356)(0.62)(108.2)} = \frac{12{,}000(153.8)}{150{,}900} = 12.2\ \mathrm{in^2}$$

4. **Size:** 4-in. Sch. 40 pipe has 12.7 in² (ID 4.026 in.), so a **4-in. disc** is adequate (6-in. if the discharge line pressure drop is significant).

**Result:** critical flow ($P_2/P_1$ = 0.413 < 0.528); A ≈ 12.2 in² → 4-in. disc.

> Book check: Ludwig gives A = 12.22 in² and a 4-in. disc.`,
        answer: String.raw`P₁ = 108.2 psia, P₂/P₁ = 0.413 < 0.528 → critical; A = 12,000√(28 × 845)/(6.32 × 356 × 0.62 × 108.2) = 12.2 in² → 4-in. disc.` } ] },

    { id: "practice-relief-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P9", label: "", marks: "", topic: "relief",
        sub: "External fire on a CCl4 storage tank: heat input, vapour load and disc area", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 7-5 "Rupture disk external fire condition" (pp. 463–465), API fire equation Q = 21,000 F A^0.82`,
        text: String.raw`An uninsulated 12-ft × 36-ft horizontal storage tank containing CCl₄ is to be protected from overpressure due to external fire by means of a rupture disk. The tank does not have a sprinkler system. Storage pressure is 5 psig and the tank is assumed to be full; k = 1.13; disk burst pressure 10 psig; MAWP of the vessel 50 psig; discharge-line back pressure 1 psig. Latent heat of CCl₄ 85 Btu/lb; boiling point at 10 psig 202°F; M = 154. Use $F$ = 1.0 (bare vessel), $K_d$ = 0.62, and for subcritical flow
$$A = \frac{W}{735F_2K_d}\sqrt{\frac{ZT}{MP_1(P_1 - P_2)}}$$
with the subcritical coefficient $F_2$ = 0.691 (Ludwig Fig. 7-29).`,
        solution: String.raw`**Given:** $D = 12$ ft, $L = 36$ ft (plus two F&D heads, blank diameter 158 in. = 13.17 ft), full tank (whole surface wetted, below 25 ft), $\lambda = 85$ Btu/lb, disc 10 psig.

1. **Exposed (wetted) area:** shell $\pi(12)(36) = 1357\ \mathrm{ft^2}$; two heads ≈ $2(\pi/4)(13.17)^2 = 272\ \mathrm{ft^2}$; total $A = 1629\ \mathrm{ft^2}$.

2. **Heat input** (API, adequate drainage, F = 1):
$$Q = 21{,}000FA^{0.82} = 21{,}000(1629)^{0.82} = 9.04\times10^6\ \mathrm{Btu/h}$$

3. **Vapour generated:** $W = Q/\lambda = 9.04\times10^6/85 = 106{,}000$ lb/h.

4. **Critical or subcritical:** relieving pressure $P_1 = 10(1.10) + 14.7 = 25.7$ psia (Ludwig's 10 % accumulation; a fire case may use 21 %); $P_2 = 1 + 14.7 = 15.7$ psia. $P_2/P_1 = 0.611$ > critical ratio $(2/2.13)^{1.13/0.13} = 0.578$ → **subcritical** flow.

5. **Area** ($T = 202 + 460 = 662$ °R, $Z$ = 1):
$$A = \frac{106{,}000}{735(0.691)(0.62)}\sqrt{\frac{662}{154(25.7)(25.7 - 15.7)}} = 336.6\sqrt{0.01673} = 43.5\ \mathrm{in^2}$$

6. **Size:** 8-in. Sch. 40 pipe has 50.0 in², so an **8-in. frangible disc** (lead-lined or lead-covered aluminium for CCl₄) is satisfactory.

**Result:** $Q$ ≈ 9.0 × 10⁶ Btu/h, W ≈ 106,000 lb/h, subcritical, A ≈ 43.5 in² → 8-in. disc.

> Book check: Ludwig obtains 9,036,300 Btu/h, 106,000 lb/h and A = 43.52 in².`,
        answer: String.raw`A_wet = 1629 ft² → Q = 21,000(1629)^0.82 = 9.04 × 10⁶ Btu/h → W = 106,000 lb/h; P₂/P₁ = 0.61 > 0.578 (subcritical) → A = 43.5 in² → 8-in. disc.` } ] },

    { id: "practice-relief-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P10", label: "", marks: "", topic: "relief",
        sub: "Deflagration venting of a low-strength warehouse (Swift–Epstein)", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 7-17 "Low strength enclosure venting" (p. 508), Eq. (7-67); same equation as the slides' Swift and Epstein vent area for low-pressure structures`,
        text: String.raw`Design to protect a large warehouse containing plastic materials that can emit ethylene and propylene vapors. The dimensions of the rectangular building with a flat roof are 100 ft long × 50 ft wide × 20 ft tall. The building design has been selected as good for 0.4 psi overpressure. Use $A_v = CA_s/P_{red}^{1/2}$ with C = 0.17 (psi)^½ and state where the vents should be.`,
        solution: String.raw`**Given:** $100 \times 50 \times 20$ ft; $P_{red} = 0.40$ psi (weakest member); $C = 0.17\ \mathrm{psi^{1/2}}$ (gases with burning velocity up to ~1.3 × propane, Ludwig Table 7-27 / C&L Table 9-1).

1. **Internal surface area:**

| surface | area, ft² |
|---|---|
| floor 100 × 50 | 5,000 |
| roof (same) | 5,000 |
| 2 ends 2 × 50 × 20 | 2,000 |
| 2 sides 2 × 100 × 20 | 4,000 |
| **total $A_s$** | **16,000** |

2. **Vent area** (Swift–Epstein / NFPA 68 low-strength equation):
$$A_v = \frac{CA_s}{\sqrt{P_{red}}} = \frac{0.17(16{,}000)}{\sqrt{0.40}} = 4300\ \mathrm{ft^2}$$

3. **Arrangement:** 4300 ft² is 39 % of the roof and walls (11,000 ft²). Use roof bursting panels, side-wall burst panels or hinged blow-out panels distributed so that the vented length-to-perimeter limits are met ($L_3 \le 12A/P_{er}$). The panels must open at a pressure well below the wall strength: set them at about 0.40 − 0.35 = **0.05 psi**, since the code requires the enclosure strength to exceed the vent relief pressure by at least 0.35 psi. Vent to a safe area away from walkways; panels must be light and restrained so they do not become missiles.

**Result:** $A_s$ = 16,000 ft², $A_v$ ≈ 4300 ft², panels relieving at ≈ 0.05 psi.

> Book check: Ludwig gets 4,300 ft².`,
        answer: String.raw`A_s = 16,000 ft²; A_v = 0.17(16,000)/√0.40 = 4300 ft² (≈ 39 % of walls + roof); blow-out panels set ≈ 0.05 psi.` } ] },

    { id: "practice-relief-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P11", label: "", marks: "", topic: "relief",
        sub: "Practical relief-valve lessons: settings, block valves, plugging, thermal reliefs", type: "theory", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Lieberman, Understanding Process Equipment for Operators and Engineers, Ch. 44 "Safety concerns: relief valves, corrosion and safety trips" (44.1 relief-valve plugging, 44.2 relieving to atmosphere) and Ch. 45`,
        text: String.raw`Answer briefly, with reasons:

(a) At what pressure is a relief valve set, how is the setting adjusted, and why may the hydrotest pressure on the nameplate not be used? Why is a relief valve sometimes reset after a vessel is rerated?

(b) When is a block valve under a relief valve legal?

(c) Why do relief valves fail to open in service, and how can this be prevented?

(d) What are the small 1-in. relief valves seen on heat exchangers and loading lines for? Why may a 150-lb flanged exchanger downstream of a pump need one even if the process never exceeds 150 psig?

(e) What lesson does the 2005 Texas City (BP) accident teach about relief discharge?`,
        solution: String.raw`1. **(a) Setting:** a relief valve is set at (not above) the vessel design pressure, the MAWP stamped on the nameplate; setting it higher is illegal. The set (pop) pressure is adjusted in a shop by the threaded spring nut while air pressure is applied, and tagged. The hydrotest pressure (typically 1.3–1.5 × MAWP) proves the vessel but is not a working limit. Vessels can be rerated up (credit for unused corrosion allowance) or derated (age, corrosion) by a formal procedure, and the relief valve must then be reset; the only sure way to know the actual setting is to read the valve's tag.

2. **(b) Block valves** below a relief valve (to remove the valve for testing while the vessel is in service) are legal only if they are **car-sealed or chain-locked open** (or a spare valve with interlocked three-way valve is provided). An unlocked isolating valve is unlawful.

3. **(c) Failure to open:** the inlet connection becomes plugged with corrosion products, salts, coke or polymer (even partial plugging cuts capacity drastically), or the valve is corroded or gummed. Prevention: a rupture disc under the valve, a steam or inert-gas purge below the valve, regular pulling and bench-testing. Valves can also fail to reseat after popping (an operator may need to hammer the body).

4. **(d) Thermal reliefs:** they protect blocked-in, liquid-full equipment from thermal expansion (sun, steam tracing, hot fluid on the other side of an exchanger). They are not sized for process relief. A "150-lb" flange is rated about 220 psig at ambient (300-lb about 430 psig); if the upstream pump's shut-in (dead-head) pressure exceeds the flange rating, a protective relief valve is required downstream.

5. **(e) Texas City:** a naphtha splitter was overfilled during start-up (level and flow instruments misleading, bottoms valve shut), the liquid swelled with heat and the 50 psig relief valve discharged boiling naphtha to an atmospheric blowdown stack instead of a closed flare system; the drum overflowed, a vapour cloud ignited and 15 people died. Relief discharges of flammable materials must go to a closed containment system (knockout drum and flare), sized for liquid carry-over, not to atmosphere near occupied areas.`,
        answer: String.raw`Set at MAWP (nameplate), shop-adjusted, never at test pressure; reset after re-/derating. Block valves only if locked/car-sealed open. Failures: plugged inlet (use disc or purge). 1-in. valves = thermal reliefs; 150# flange ≈ 220 psig limit vs pump shut-off. Texas City: relieve flammables to closed flare, not atmosphere.` } ] },

    { id: "practice-relief-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P12", label: "", marks: "15", topic: "relief",
        sub: "Balanced-bellows liquid relief valve: viscous oil, variable back pressure", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; Crowl & Louvar Eq. 9-6 with Figs. 9-2 (K_v), 9-3 (K_p), 9-4 (K_b); API 520 viscosity correction`,
        text: String.raw`A heavy oil (SpGr 0.90, viscosity 2000 cP at relieving temperature) is relieved at 600 gal/min from a vessel with a relief set pressure of 150 psig. The valve discharges into a closed header in which the superimposed back pressure varies from 0 to 60 psig. The allowed overpressure is 10 % ($K_p$ = 0.6).

(a) Select the type of spring valve and justify.

(b) Calculate the required relief area, including the viscosity correction (Re = $Q(2800\,\mathrm{SpGr})/(\mu\sqrt A)$ with $Q$ in gpm, $\mu$ in cP, $A$ in in²; $K_v$ read from Fig. 9-2), and select a standard API orifice (G 0.503, H 0.785, J 1.287, K 1.838, L 2.853, M 3.60, N 4.34, P 6.38, Q 11.05 in²).`,
        solution: String.raw`**Given:** $Q_v = 600$ gpm, SpGr 0.90, $\mu = 2000$ cP, $P_s = 150$ psig, $P_b$ up to 60 psig (40 % of set), $K_p = 0.6$, $C_o = 0.61$.

1. **(a) Valve type:** in a conventional valve the back pressure acts on the back of the disc and adds to the spring force, so a variable 0–60 psig back pressure would move the opening pressure between 150 and 210 psig: unacceptable. A **balanced-bellows relief valve** (liquid trim) opens at the set pressure regardless of back pressure; the flow still falls with back pressure, which $K_b$ accounts for.

2. **Back-pressure factor:** 40 % gauge back pressure; Fig. 9-4 (liquids, bellows) reads **$K_b$ ≈ 0.79** (1.0 up to ~15 %, ≈ 0.7 at 50 %).

3. **Area without viscosity correction** ($K_v$ = 1):
$$A_0 = \frac{600}{38.0(0.61)(1.0)(0.6)(0.79)}\sqrt{\frac{0.90}{1.25(150) - 60}} = 54.9\sqrt{0.00706} = 4.61\ \mathrm{in^2}$$

4. **Viscosity correction (iterate):**

| trial | A, in² | Re | $K_v$ (Fig. 9-2) | new A = $A_0/K_v$ |
|---|---|---|---|---|
| 1 | 4.61 | 352 | 0.834 | 5.53 |
| 2 | 5.53 | 321 | 0.824 | 5.60 |
| 3 | 5.60 | 319 | 0.823 | 5.60 |

($K_v$ values from the API fit of Fig. 9-2, $K_v = [0.9935 + 2.878/Re^{0.5} + 342.75/Re^{1.5}]^{-1}$.) Required area **≈ 5.6 in²**.

5. **Orifice:** N (4.34 in²) is too small; select **P (6.38 in²)**. With a conventional valve and no back pressure the area would have been only about $600/(38 \times 0.61 \times 0.6)\sqrt{0.9/187.5}/0.82 ≈ 3.6$ in², which shows the cost of the 40 % back pressure and the viscous fluid.

**Result:** balanced-bellows valve; $K_b$ ≈ 0.79, $K_v$ ≈ 0.82, A ≈ 5.6 in² → API "P" orifice.`,
        answer: String.raw`Balanced bellows (back pressure 0–60 psig = up to 40 %); K_b ≈ 0.79; A₀ = 4.61 in²; Re ≈ 320 → K_v ≈ 0.82 → A ≈ 5.6 in² → P orifice (6.38 in²).` } ] },

    { id: "practice-relief-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P13", label: "", marks: "15", topic: "relief",
        sub: "Nitrogen regulator failure: choked inflow and vapour relief valve area", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; scenario of C&L Ex. 8-2 (PSV-4: N₂ regulator fails, critical flow in ½-in. line); C&L Eq. 4-50 (choked gas flow) and Eq. 9-9 (vapour relief area), Fig. 9-6`,
        text: String.raw`A drum with MAWP 50 psig is blanketed with nitrogen from a 200 psig header through a pressure regulator and a ½-in. Schedule 40 line (ID 0.622 in.). The regulator fails wide open.

(a) Calculate the maximum nitrogen inflow (choked flow, $C_o$ = 1, 25°C, $\gamma$ = 1.4).

(b) Size a conventional spring-operated safety valve (set 50 psig, 10 % overpressure, $C_o$ = 0.975, discharge to atmosphere) and select an API orifice (E 0.196, F 0.307, G 0.503, H 0.785, J 1.287 in²).

(c) The vent is instead routed to a scrubber with a back pressure of up to 20 psig. Which valve would you use and what is the new area (Fig. 9-6 gives $K_b$ ≈ 0.88 at 40 % gauge back pressure, 10 % overpressure)?`,
        solution: String.raw`**Given:** supply $P = 214.7$ psia = 1.480 MPa, $T = 298$ K, $M = 28$, $\gamma = 1.4$; orifice = line bore 0.622 in. (15.8 mm), $A_o = 1.96\times10^{-4}\ \mathrm{m^2}$.

1. **(a) Choked inflow** (C&L Eq. 4-50):
$$(Q_m)_{ch} = C_oAP\sqrt{\frac{\gamma g_cM}{R_gT}\left(\frac{2}{\gamma+1}\right)^{(\gamma+1)/(\gamma-1)}} = 1(1.96\times10^{-4})(1.480\times10^6)\sqrt{\frac{1.4(28)}{8314(298)}(0.8333)^6}$$
$$= 290.2 \times 2.301\times10^{-3} = 0.668\ \mathrm{kg/s}\ (5300\ \mathrm{lb/h})$$
The drum pressure (≤ 55 psig) is far below the critical pressure 0.528 × 214.7 = 113 psia, so the flow is choked.

2. **(b) Relieving pressure:** $P = 1.1(50) + 14.7 = 69.7$ psia = 0.4806 MPa. Relief flow is also choked (atmospheric discharge).
$$\chi = \sqrt{\frac{\gamma}{R_g}\left(\frac{2}{\gamma+1}\right)^{(\gamma+1)/(\gamma-1)}} = \sqrt{\frac{1.4}{8314}(0.3349)} = 7.51\times10^{-3}$$
$$A = \frac{Q_m}{C_oK_b\chi P}\sqrt{\frac{Tz}{M}} = \frac{0.668}{0.975(1)(7.51\times10^{-3})(4.806\times10^5)}\sqrt{\frac{298}{28}} = (1.898\times10^{-4})(3.263) = 6.19\times10^{-4}\ \mathrm{m^2} = 0.96\ \mathrm{in^2}$$
(API check: $A = W\sqrt{TZ}/(CKP_1\sqrt M)$ with C = 356, W = 5300 lb/h, T = 537 °R gives 0.96 in² ✓.) H (0.785) is too small → **J orifice (1.287 in²)**.

3. **(c) Scrubber:** back pressure up to 20 psig = 40 % of set and variable: a conventional valve's set pressure would shift by up to 20 psi, so use a **balanced-bellows safety valve**. Flow remains choked ($34.7/69.7 = 0.50 < 0.528$). With $K_b$ ≈ 0.88: $A = 0.96/0.88 = 1.09\ \mathrm{in^2}$ → still a **J orifice**.

**Result:** inflow ≈ 0.67 kg/s (5300 lb/h); A ≈ 0.96 in² (J); with 20 psig scrubber back pressure, bellows valve, A ≈ 1.09 in² (J).`,
        answer: String.raw`Q_m = 0.668 kg/s (5300 lb/h, choked); relief A = 6.19 × 10⁻⁴ m² = 0.96 in² → J; to scrubber: balanced bellows, K_b 0.88 → 1.09 in² → J.` } ] },

    { id: "practice-relief-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P14", label: "", marks: "10", topic: "relief",
        sub: "Thermal-expansion relief for a blocked-in reactor cooling coil", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; relief sizing slides "6 – Reliefs for thermal expansion of process fluids" (C&L Eq. 9-45), scenario PSV-5 of Ex. 8-2`,
        text: String.raw`The cooling coil of a reactor (area 5 m², overall coefficient 500 W/m² K) is blocked in, full of water at 30°C, while the reactor contents are at 120°C. Take the thermal expansion coefficient of water as $\beta$ = 4.5 × 10⁻⁴ K⁻¹, $\rho$ = 990 kg/m³, $c_p$ = 4180 J/kg K.

(a) Calculate the volumetric expansion rate the relief must pass, $Q_v = \beta UA\Delta T/(\rho c_p)$.

(b) Size a liquid relief valve set at 150 psig (25 % overpressure, no back pressure, $C_o$ = 0.61).

(c) Estimate how fast the pressure would rise in the blocked coil without relief (compressibility of water 4.6 × 10⁻¹⁰ Pa⁻¹), and comment.`,
        solution: String.raw`**Given:** $U = 500$, $A = 5\ \mathrm{m^2}$, $\Delta T = 120 - 30 = 90$ K, $\beta = 4.5\times10^{-4}\ \mathrm{K^{-1}}$.

1. **(a) Heat input:** $UA\Delta T = 500(5)(90) = 225$ kW. Expansion rate:
$$Q_v = \frac{\beta UA\Delta T}{\rho c_p} = \frac{4.5\times10^{-4}(2.25\times10^5)}{990(4180)} = 2.45\times10^{-5}\ \mathrm{m^3/s} = 0.39\ \mathrm{gal/min}$$

2. **(b) Relief area** (C&L Eq. 9-6, $K_v = K_p = K_b = 1$):
$$A = \frac{0.39}{38.0(0.61)}\sqrt{\frac{1}{1.25(150) - 0}} = 0.0167(0.0730) = 1.2\times10^{-3}\ \mathrm{in^2}$$
Far below the smallest API orifice (D, 0.110 in²): a standard ¾ × 1 in. thermal relief valve is ample.

3. **(c) Without relief:** for liquid-full confinement $dP/dT = \beta/\kappa = 4.5\times10^{-4}/4.6\times10^{-10} = 9.8\times10^5$ Pa/K ≈ **10 bar per K**. A few kelvin of heating raises the pressure by tens of bar, enough to rupture the coil (and then cooling water leaks into the reactor, another relief scenario). Although the flow is tiny, the relief is essential; it must not be isolated from the coil, and the discharge should go to a drain or back into the cooling system.

**Result:** $Q_v$ ≈ 2.45 × 10⁻⁵ m³/s (0.39 gpm); A ≈ 0.0012 in² → smallest thermal relief valve; blocked coil would gain ~10 bar/K.`,
        answer: String.raw`Q_v = βUAΔT/(ρc_p) = 2.45 × 10⁻⁵ m³/s (0.39 gpm); A = 0.0012 in² → smallest (¾ × 1) thermal relief; without relief dP/dT ≈ β/κ ≈ 10 bar/K.` } ] },

    { id: "practice-relief-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P15", label: "", marks: "15", topic: "relief",
        sub: "Fire relief for a propane bullet: wetted area, heat input and valve size", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; relief sizing slides "5 – Reliefs for fired reactors" and gas-relief equation (P_max = 1.2 P_s for fire); API 520/521 fire heat input as used in Ludwig Example 7-5`,
        text: String.raw`A horizontal propane storage bullet, 2.5 m diameter × 10 m long (take flat heads), stands on grade-level saddles. Its relief valve is set at 250 psig. Take the wetted area as 75 % of the total external area.

(a) Calculate the heat input from an external pool fire, $Q = 21{,}000FA^{0.82}$ (Btu/h, A in ft², F = 1 bare vessel, adequate drainage and fire-fighting), and the propane relieving rate (latent heat 130 Btu/lb at relieving conditions).

(b) Size the vapour relief valve: relieving pressure 1.2 $P_s$ (fire), $T$ = 600 °R, $z$ = 0.80, $M$ = 44.1, $\gamma$ = 1.13, $C_o$ = 0.975, $K_b$ = 1, using $A = W\sqrt{Tz}/(CK P_1\sqrt M)$ with $C = 520\sqrt{\gamma(2/(\gamma+1))^{(\gamma+1)/(\gamma-1)}}$.

(c) Repeat for a site without adequate drainage ($Q = 34{,}500FA^{0.82}$) and comment on fire protection of LPG vessels.`,
        solution: String.raw`**Given:** $D = 2.5$ m, $L = 10$ m, $P_s = 250$ psig, $\lambda = 130$ Btu/lb.

1. **Area:** total $= \pi(2.5)(10) + 2(\pi/4)(2.5)^2 = 78.5 + 9.8 = 88.4\ \mathrm{m^2}$; wetted $= 0.75(88.4) = 66.3\ \mathrm{m^2} = 713\ \mathrm{ft^2}$ (whole vessel lies below 25 ft above grade, so all of it counts).

2. **(a) Heat input:**
$$Q = 21{,}000(1)(713)^{0.82} = 21{,}000(218.6) = 4.59\times10^6\ \mathrm{Btu/h}\ (1.35\ \mathrm{MW})$$
Relieving rate $W = 4.59\times10^6/130 = 35{,}300$ lb/h (4.45 kg/s).

3. **(b) Valve:** $P_1 = 1.2(250) + 14.7 = 314.7$ psia; $C = 520\sqrt{1.13(2/2.13)^{16.38}} = 330$;
$$A = \frac{35{,}300\sqrt{600(0.80)}}{330(0.975)(314.7)\sqrt{44.1}} = \frac{35{,}300(21.9)}{330(0.975)(314.7)(6.64)} = 1.15\ \mathrm{in^2}$$
(The SI form of C&L Eq. 9-9 gives the same.) Select **API J orifice (1.287 in²)**, e.g. a 2J3 valve.

4. **(c) Poor drainage:** $Q = 34{,}500(218.6) = 7.54\times10^6$ Btu/h, $W$ = 58,000 lb/h, $A = 1.15(34{,}500/21{,}000) = 1.89\ \mathrm{in^2}$ → K (1.838) is too small → **L orifice (2.853 in²)**.

5. **Comment:** the relief valve only limits pressure; the unwetted shell above the liquid overheats and can fail below the set pressure, causing a BLEVE (and a fireball/VCE for propane). Protection therefore also includes sloping ground and drainage away from the vessel, water deluge or fireproofing (allowed as an environment factor F < 1), a large vapour space to avoid two-phase relief, and depressuring systems; inherently safer layout and spacing matter most.

**Result:** $A_w$ = 713 ft², Q = 4.59 × 10⁶ Btu/h, W = 35,300 lb/h, A = 1.15 in² (J); without drainage 1.89 in² (L).`,
        answer: String.raw`A_wet = 66.3 m² (713 ft²); Q = 4.59 × 10⁶ Btu/h, W = 35,300 lb/h; P₁ = 314.7 psia, C = 330 → A = 1.15 in² → J; poor drainage: Q = 7.54 × 10⁶, A = 1.89 in² → L.` } ] },

    { id: "practice-relief-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P16", label: "", marks: "20", topic: "relief",
        sub: "Two-phase runaway vent sizing (Leung) and the effect of allowed overpressure", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; relief sizing slides "Two-phase mass discharge" (Clausius–Clapeyron form of Leung's equation), "Thermal reaction behavior", "Required vent area, 2-f flow"; C&L Fig. 9-8 for ψ`,
        text: String.raw`A 6.0 m³ batch reactor holds 5000 kg of a reacting mixture. Calorimeter (VSP) data: set pressure 4.0 bar abs, set temperature 450 K, self-heat rate 0.20 K/s at the set point and 0.30 K/s at the maximum pressure. Properties: $C_V$ = 2.5 kJ/kg K, $\Delta H_v$ = 350 kJ/kg, $v_{fg}$ = 0.10 m³/kg; vapour M = 92, $\gamma$ = 1.10.

(a) Using the Clausius–Clapeyron form of the two-phase method, find the vent area and diameter for 20 % overpressure with a short vent ($\psi$ = 1) and with a discharge line of L/D = 200.

(b) Find the area for an all-vapour relief at the maximum pressure (4.8 bar) and comment.

(c) Calculate the two-phase area for 0, 10, 30 and 50 % overpressure, plot A against overpressure and explain the shape.`,
        solution: String.raw`**Given:** $V = 6.0\ \mathrm{m^3}$, $m_o = 5000$ kg, $P_s = 4.0\times10^5$ Pa, $T_s = 450$ K, $C_V = 2500$ J/kg K, $\Delta H_v = 3.5\times10^5$ J/kg, $v_{fg} = 0.10\ \mathrm{m^3/kg}$.

**Assumptions:** tempered system, homogeneous venting, constant properties; $q$ taken at the 20 % values for all overpressures (slide model assumptions).

1. **Clausius–Clapeyron slope:** $dP/dT = \Delta H_v/(T_sv_{fg}) = 3.5\times10^5/(450 \times 0.10) = 7778$ Pa/K.

2. **Energy rate:** $q = 0.5C_V[(dT/dt)_s + (dT/dt)_m] = 0.5(2500)(0.20 + 0.30) = 625$ W/kg; $m_oq = 3.125\times10^6$ W.

3. **(a) Mass flux** (Eq. 9-17): $G_T = 0.9\psi\frac{dP}{dT}\sqrt{\frac{T_s}{C_p}} = 0.9(1)(7778)\sqrt{450/2500} = 2970\ \mathrm{kg/m^2s}$.

4. **Temperature rise for 20 % overpressure:** $\Delta P = 0.8$ bar, $\Delta T = 80{,}000/7778 = 10.3$ K.

5. **Area:**
$$A = \frac{m_oq}{G_T\left[\sqrt{\frac{V}{m_o}T_s\frac{dP}{dT}} + \sqrt{C_V\Delta T}\right]^2} = \frac{3.125\times10^6}{2970\left[\sqrt{1.2\times10^{-3}(3.5\times10^6)} + \sqrt{2500(10.3)}\right]^2} = \frac{3.125\times10^6}{2970(64.8 + 160.4)^2}$$
$$A = 0.0208\ \mathrm{m^2},\quad d = 0.163\ \mathrm{m}\ (6.4\ \mathrm{in.})$$
With L/D = 200, Fig. 9-8 gives $\psi$ ≈ 0.65: $A = 0.0208/0.65 = 0.0319\ \mathrm{m^2}$, $d$ = 0.20 m (8 in.).

6. **(b) All-vapour:** $Q_m = m_oC_V(dT/dt)_s/\Delta H_v = 5000(2500)(0.20)/3.5\times10^5 = 7.14$ kg/s; $\chi = \sqrt{(1.1/8314)(2/2.1)^{21}} = 6.89\times10^{-3}$;
$$A = \frac{7.14}{1(6.89\times10^{-3})(4.8\times10^5)}\sqrt{\frac{450}{92}} = 0.0048\ \mathrm{m^2}\ (d = 0.078\ \mathrm{m})$$
The two-phase vent is 4.3 times larger. A vent sized for vapour would leave the reactor unprotected if the contents foam.

7. **(c) Effect of overpressure:**

| overpressure, % | 0 | 10 | 20 | 30 | 50 |
|---|---|---|---|---|---|
| ΔT, K | 0 | 5.1 | 10.3 | 15.4 | 25.7 |
| A, m² | 0.251 | 0.0331 | 0.0208 | 0.0154 | 0.0104 |

![Required two-phase vent area against allowed overpressure: steep fall up to about 10 %, flat beyond 25 %](fig/practice-relief-P16-sol.svg)

The sensible-heat term $\sqrt{C_V\Delta T}$ grows with overpressure: allowing the temperature to rise lets the liquid absorb part of the reaction heat, so less must be vented. At zero overpressure only vaporization removes heat and the area is 12 times the 20 % value; beyond ~25 % the gain is small while the vessel limit is approached. Hence the design range of 10–25 % in the slides.

**Result:** 0.0208 m² (d 0.163 m) at ψ = 1, 0.032 m² (0.20 m) at L/D = 200; vapour only 0.0048 m²; area falls from 0.25 m² (0 %) to 0.010 m² (50 %).`,
        answer: String.raw`dP/dT = 7778 Pa/K, q = 625 W/kg, G_T = 2970 kg/m²s, ΔT = 10.3 K → A = 0.0208 m² (d = 0.16 m); ψ = 0.65 → 0.032 m² (0.20 m); vapour 0.0048 m²; A = 0.25, 0.033, 0.021, 0.015, 0.010 m² at 0, 10, 20, 30, 50 %.` } ] },

    { id: "practice-relief-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P17", label: "", marks: "15", topic: "relief",
        sub: "Deflagration vent areas: propane vessel (NFPA) and dust-collector room", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; relief sizing slides "4 – Relief venting for dust and vapor explosions" and "Vents for low-pressure structures"; Ludwig Eq. (7-67) and NFPA 68 Eq. (7-70)`,
        text: String.raw`(a) A 20 m³ vessel (L/D < 5) handles propane–air mixtures. Its vent panel opens at $P_{stat}$ = 0.1 bar g and the vessel can withstand $P_{red}$ = 0.5 bar g. Calculate the vent area from the NFPA 68 correlation $A_v = aV^be^{cP_{stat}}P_{red}^d$ (propane: a = 0.148, b = 0.703, c = 0.942, d = −0.671; A in m², V in m³, pressures in bar g). How does the area change if the vessel can only take 0.3 bar g, or is strengthened to 1.0 bar g?

(b) A dust-collector room 10 m × 6 m × 4 m handles an St-1 dust; its weakest wall withstands 0.5 psi. Using the Swift–Epstein equation ($C$ = 0.10 psi^½ for St-1 dusts) find the vent area.

(c) Explain the principle of deflagration venting and why it does not protect against detonations.`,
        solution: String.raw`1. **(a) Propane vessel:**
$$A_v = 0.148(20)^{0.703}e^{0.942(0.1)}(0.5)^{-0.671} = 0.148(8.215)(1.099)(1.592) = 2.13\ \mathrm{m^2}$$
At $P_{red}$ = 0.3 bar g: $A_v = 3.00\ \mathrm{m^2}$; at 1.0 bar g: $A_v = 1.34\ \mathrm{m^2}$. A weaker vessel needs a much larger vent (the vent must relieve the burning gas earlier).

2. **(b) Dust room** (low-strength enclosure, $P$ < 1.5 psi):
$$A_s = 2(10 \times 6 + 10 \times 4 + 6 \times 4) = 248\ \mathrm{m^2},\qquad A = \frac{CA_s}{\sqrt P} = \frac{0.10(248)}{\sqrt{0.5}} = 35.1\ \mathrm{m^2}$$
(about 19 % of the wall and roof area, 128 + 60 = 188 m²; use roof and wall blow-out panels set well below 0.5 psi).

3. **(c) Principle:** a deflagration is a flame moving at subsonic speed; pressure rises gradually over tens of milliseconds as the burnt gas expands (rate characterized by $K_G$ or $K_{St} = (dP/dt)_{max}V^{1/3}$). A vent (bursting panel, explosion door, rupture membrane) opens at a low static pressure $P_{stat}$ and lets the unburnt and burnt gas escape so that the peak reduced pressure $P_{red}$ stays below the strength of the enclosure. A **detonation** has a supersonic shock front coupled to the flame, with pressures many times higher and rise times of microseconds: a vent cannot open fast enough, so detonations are prevented by inerting, avoiding long pipes/high L/D (> 5) and flame arresters. Vents must discharge to a safe place (fireball, flying panels) and not into buildings.

**Result:** (a) 2.13 m² (3.00 m² at 0.3 bar g, 1.34 m² at 1.0 bar g); (b) 35.1 m².`,
        answer: String.raw`(a) A_v = 0.148(20)^0.703 e^0.0942 (0.5)^−0.671 = 2.13 m² (3.0 m² at 0.3 bar g, 1.34 m² at 1.0 bar g). (b) A_s = 248 m² → A = 0.10(248)/√0.5 = 35.1 m².` } ] },

    { id: "practice-relief-P18", q: 18, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P18", label: "", marks: "12", topic: "relief",
        sub: "Pressure levels around MAWP: set, accumulation, blowdown, back pressure", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; Relief System slides "Relief System Issues: nomenclature" (C&L pp. 356–357, Fig. 8-4), "Spring relief valve types" (blowdown ~4 %), sizing slides (P_max = 1.1, 1.2 P_s); ASME VIII Div. 1`,
        text: String.raw`A vessel has an MAWP of 150 psig and is protected by a conventional spring safety valve. Define and calculate, with a labelled pressure-level sketch: set pressure, maximum allowable accumulated pressure for a single valve, for multiple valves and for the fire case, a suitable maximum operating pressure, the reseating pressure for 7 % blowdown, the maximum built-up back pressure for a conventional valve, and the hydrostatic test pressure.`,
        solution: String.raw`1. **Definitions and values** (MAWP = 150 psig):

| term | meaning | value, psig |
|---|---|---|
| MAWP | highest pressure the vessel may see at its design temperature (nameplate) | 150 |
| set pressure | pressure at which the valve starts to open; at most MAWP for the first valve | 150 |
| accumulation (overpressure) | rise above MAWP (or above set) while relieving | single valve 10 % → **165**; multiple valves 16 % → **174**; fire 21 % → **181.5** |
| operating pressure | normal service pressure, kept ~10 % (or ≥ 25 psi) below set to avoid simmering/leakage | ≤ **135** |
| blowdown | difference between set and reseating pressure, % of set | 7 % → reseats at **139.5** |
| back pressure | pressure at the valve outlet: superimposed (from the header) + built-up (from flow); conventional valve built-up ≤ 10 % of set | ≤ **15 psi** |
| hydrotest | proof test, 1.3 × MAWP (ASME VIII Div. 1) | **195** |

2. **Sketch:**

![Pressure ladder for MAWP 150 psig: operating 135, reseat 139.5, set = MAWP 150, maximum relieving 165 (single), 174 (multiple), 181.5 (fire), hydrotest 195](fig/practice-relief-P18-sol.svg)

3. **Notes:** the relief must be sized so that the pressure never exceeds the accumulated limit at full relieving rate (this is the $P_{max}$ = 1.1 or 1.2 $P_s$ used in the sizing equations, plus 14.7 for absolute). A liquid relief valve reaches full lift at about 25 % overpressure; a gas safety valve pops open near set. If the operating pressure is too close to the set pressure, the valve simmers and leaks; if blowdown is too small, it chatters.

**Result:** set 150; max 165 / 174 / 181.5 psig; operate ≤ 135; reseat 139.5; built-up back pressure ≤ 15 psi; test 195 psig.`,
        answer: String.raw`Set = MAWP = 150 psig; accumulation limits 165 (10 %), 174 (16 %, multiple), 181.5 (21 %, fire); operating ≤ 135; reseat 139.5 (7 % blowdown); built-up back pressure ≤ 15 psi; hydrotest 195 psig.` } ] },

    { id: "practice-relief-P19", q: 19, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P19", label: "", marks: "12", topic: "relief",
        sub: "Rupture disc upstream of a safety valve: combination capacity factor", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; Ludwig Vol. 1, 3rd ed. pp. 463 ("sizing for combination of rupture disk and pressure relief valve", Table 7-12); Relief System slides "Rupture discs – advantages" and "Relief installation examples"`,
        text: String.raw`A vessel in corrosive hydrocarbon vapour service (M = 58, $\gamma$ = 1.10, z = 0.90, relieving temperature 610 °R) must relieve 22,000 lb/h. The safety valve is set at 100 psig with 10 % overpressure; $K$ = 0.975, $K_b$ = 1.

(a) Calculate the required valve orifice area, $A = W\sqrt{Tz}/(CKP_1\sqrt M)$ with $C = 520\sqrt{\gamma(2/(\gamma+1))^{(\gamma+1)/(\gamma-1)}}$, and select an API orifice (J 1.287, K 1.838, L 2.853 in²).

(b) A rupture disc is to be installed under the valve. With no certified combination factor the valve capacity must be derated (ASME: factor 0.9; older practice quoted by Ludwig: 80 %). Recalculate the selection.

(c) Give the reasons for, and the installation requirements of, such a combination.`,
        solution: String.raw`**Given:** W = 22,000 lb/h, M = 58, γ = 1.10, z = 0.90, T = 610 °R, $P_1 = 1.1(100) + 14.7 = 124.7$ psia.

1. **Gas constant:** $C = 520\sqrt{1.10(2/2.10)^{21}} = 520\sqrt{1.10(0.359)} = 327$.

2. **(a) Area:**
$$A = \frac{22{,}000\sqrt{610(0.90)}}{327(0.975)(124.7)\sqrt{58}} = \frac{22{,}000(23.43)}{327(0.975)(124.7)(7.616)} = 1.70\ \mathrm{in^2}$$
→ **K orifice (1.838 in²)**.

3. **(b) With the disc:** required valve area $= 1.70/0.9 = 1.89\ \mathrm{in^2}$ > 1.838 → **L orifice (2.853 in²)**. With the older 80 % rule, $1.70/0.8 = 2.13$ in² → also L. (A manufacturer's tested combination factor, e.g. 0.98 in Ludwig Table 7-12, would allow the K orifice: $1.70/0.98 = 1.74$ in².)

4. **(c) Why combine:** the disc isolates the expensive valve from corrosive, toxic or polymerizing process fluid, gives a leak-tight seal (no fugitive emissions), and the valve recloses after the disc bursts so the whole inventory is not lost.

**Requirements:** disc burst pressure at (or within tolerance of) the valve set pressure; disc mounted close to the valve inlet; a **pressure gauge, try-cock or excess-flow tell-tale** between disc and valve to detect pin-hole leaks (pressure trapped there raises the burst pressure); non-fragmenting disc (reverse-buckling or pre-scored) so fragments cannot jam the valve; inlet loss including the disc within 3 % of set pressure; disc and valve both rated for the relief load.

**Result:** valve alone 1.70 in² (K); with disc and 0.9 factor 1.89 in² (L).`,
        answer: String.raw`C = 327, P₁ = 124.7 psia → A = 1.70 in² → K; with disc (÷0.9) 1.89 in² → L (÷0.8: 2.13 in², L); tell-tale gauge between disc and valve, non-fragmenting disc.` } ] },

    { id: "practice-relief-P20", q: 20, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-relief-P20", label: "", marks: "10", topic: "relief",
        sub: "Why relief valves chatter: inlet loss, built-up back pressure, oversizing", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; relief sizing slides "Relief area requirements" (25–30 % of maximum flow holds the seat open; chattering), API 520 Part II installation rules (3 % inlet loss, 10 % built-up back pressure)`,
        text: String.raw`(a) What is valve chatter and what damage does it cause?

(b) Explain how each of the following causes chatter and give the design rule that prevents it: (i) a long or small inlet line, (ii) a long or small discharge line on a conventional valve, (iii) an oversized valve, (iv) operating pressure close to the set pressure.

(c) A 2-in. inlet line to a gas safety valve set at 100 psig has a calculated pressure drop of 5 psi at rated flow. Is the installation acceptable? What would you change?`,
        solution: String.raw`1. **(a) Chatter** is rapid opening and closing of a spring valve, many times per second. It hammers the disc on the seat (seat damage, leakage afterwards), galls guides, fatigues springs and bellows, shakes piping, and lowers the relieving capacity (valve never stays at full lift).

2. **(b) Causes and rules:**
- **(i) Inlet losses:** when the valve opens, friction in the inlet line drops the pressure at the valve below the reseat pressure; it closes, flow stops, pressure recovers, it reopens. **Rule:** non-recoverable inlet loss ≤ 3 % of set pressure (blowdown must exceed the inlet loss); short, full-bore inlet, at least the valve inlet size.
- **(ii) Built-up back pressure:** flow in a small or long tailpipe raises the outlet pressure, which on a conventional valve adds to the spring force and closes it. **Rule:** built-up back pressure ≤ 10 % of set for conventional valves (≤ 30–50 % with bellows, with $K_b$); outlet pipe at least the valve outlet size.
- **(iii) Oversizing:** the actual flow is too small to hold the disc open (needs ~25–30 % of rated flow), so the valve pops, relieves the vessel quickly, closes, and repeats. **Rule:** size for the credible scenario, use multiple valves with staggered set points when loads vary widely, or modulating pilot-operated valves.
- **(iv) Operating near set:** the valve simmers and pops on small disturbances. **Rule:** operate ≤ 90 % of set (or 25 psi margin).

3. **(c) Check:** 5 psi is 5 % of the 100 psig set pressure, more than the 3 % limit (3 psi), and comparable to a typical 7 % blowdown margin → likely chatter: **not acceptable**. Remedies: enlarge the inlet to 3 in. (loss ∝ $1/D^5$ at fixed flow: about $5(2/3)^5 = 0.66$ psi), shorten it and remove fittings, mount the valve directly on the vessel nozzle, or use a pilot-operated valve with remote sensing.`,
        answer: String.raw`Chatter = rapid open/close → seat damage, loss of capacity. Rules: inlet loss ≤ 3 % of set; built-up back pressure ≤ 10 % (conventional); don't oversize (flow ≥ 25–30 % of capacity); operate ≤ 90 % of set. 5 psi = 5 % > 3 % → enlarge inlet to 3 in. (≈ 0.7 psi).` } ] }
  ]
});
