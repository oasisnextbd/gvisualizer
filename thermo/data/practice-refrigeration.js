QB.paper({ year: "Practice", set: "Refrigeration and liquefaction", date: "", marks: 0, practice: true,
  rules: String.raw`Refrigeration and liquefaction (SVNA ch. 9; Dr. Kawnish Kirtania): the slide material (Carnot refrigerator, vapour-compression cycle with the slide's R-134a table, cascading, heat pumps), SVNA Examples 9.1 and 9.3 and chapter-9 problems not already set in past papers (9.1–9.5, 9.7, 9.9(e), 9.17, 9.18), and new exam-style problems (superheat and subcooling, heat pump versus resistance heating, short conceptual questions). R-134a data: SVNA Table 9.1 (saturated, p. 299) or Çengel & Boles Tables A-11 and A-13 where superheated-vapour data are needed.`,
  questions: [
    { id: "practice-refrigeration-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P1", label: "", marks: "", topic: "refrigeration",
        sub: "Carnot refrigerator: derive ω = T_C/(T_H − T_C) and its meaning", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, Refrigeration and Liquefaction, slide 10 ("Carnot's refrigerator"); SVNA 6th ed. SI §9.1`,
        text: String.raw`Define the coefficient of performance ω of a refrigerator and derive its value for a Carnot refrigerator operating between a cold reservoir at $T_C$ and a hot reservoir at $T_H$. Calculate ω for $T_C$ = −10 °C and $T_H$ = 30 °C, and state what limits it in practice.`,
        solution: String.raw`1. **Definition.** A refrigerator absorbs heat $|Q_C|$ at the low temperature, receives work W and rejects $|Q_H|$ at the high temperature. By the first law (cyclic, ΔU = 0): $W = |Q_H| - |Q_C|$. The coefficient of performance is
$$\omega \equiv \frac{\text{heat absorbed at the lower temperature}}{\text{net work}} = \frac{|Q_C|}{W}$$

2. **Write W/|Q_C|:**
$$\frac{W}{|Q_C|} = \frac{|Q_H|}{|Q_C|} - 1$$

3. **Carnot (reversible) cycle.** Heat is exchanged isothermally and reversibly, so the entropy changes of the two reservoirs cancel: $|Q_H|/T_H = |Q_C|/T_C$, i.e. $|Q_H|/|Q_C| = T_H/T_C$. Hence
$$\frac{W}{|Q_C|} = \frac{T_H}{T_C} - 1 = \frac{T_H - T_C}{T_C} \;\Rightarrow\; \boxed{\omega = \frac{T_C}{T_H - T_C}}$$

4. **Example:** $T_C$ = 263.15 K, $T_H$ = 303.15 K: ω = 263.15/40 = 6.58. Lowering $T_C$ to −40 °C (233.15 K) gives ω = 233.15/70 = 3.33.

5. **Meaning and limits.**
   - ω is the maximum possible for the two temperatures, whatever the refrigerant (any reversible cycle between two reservoirs has the same ω).
   - ω falls as $T_C$ falls or $T_H$ rises; ω → 0 as $T_C$ → 0 K.
   - Real cycles reach only about 50–70% of it: heat must be transferred across finite temperature differences (the refrigerant evaporates below $T_C$ and condenses above $T_H$), and the throttle and compressor are irreversible.`,
        answer: String.raw`ω = |Q_C|/W, W = |Q_H| − |Q_C|; reversible: |Q_H|/|Q_C| = T_H/T_C ⇒ ω = T_C/(T_H − T_C). For −10/30 °C, ω = 6.58. Real cycles: 50–70% of this (finite ΔT in exchangers, irreversible throttle and compressor).` } ] },
    { id: "practice-refrigeration-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P2", label: "", marks: "", topic: "refrigeration",
        sub: "Vapour-compression cycle equations and a circulation rate from the slide's R-134a table", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, slides 8–9 ("Vapor compression refrigeration cycle": $Q_C = H_2 - H_1$, $Q_H = H_4 - H_3$, $\omega = (H_2 - H_1)/(H_3 - H_2)$, $\dot m = \dot Q_C/(H_2 - H_1)$) and slide 19 (SVNA Table 9.1)`,
        text: String.raw`(a) Using the state numbering 1 = evaporator inlet, 2 = evaporator exit (saturated vapour), 3 = compressor exit, 4 = condenser exit (saturated liquid), derive the energy-balance expressions for $Q_C$, $Q_H$, the work W, the coefficient of performance ω and the refrigerant circulation rate $\dot m$ of a vapour-compression cycle.

(b) An R-134a refrigerator evaporates at −20 °C and condenses at 24 °C. Using SVNA Table 9.1, find the refrigeration per kg and the circulation rate for a 10 kW refrigeration load.`,
        solution: String.raw`**(a) Energy balances** (steady flow, kinetic and potential energy neglected, $\Delta H = Q + W_s$ per kg):

1. **Evaporator 1 → 2** (no work): $Q_C = H_2 - H_1$, heat absorbed from the cold space.
2. **Compressor 2 → 3** (adiabatic): $W = H_3 - H_2$. Isentropic: $W_s = H_3' - H_2$; real: $W = W_s/\eta$.
3. **Condenser 3 → 4** (no work): $Q_H = H_4 - H_3$ (negative: heat rejected).
4. **Throttle 4 → 1** (adiabatic, no work): $H_1 = H_4$, isenthalpic expansion.
5. **Coefficient of performance and circulation rate:**
$$\omega = \frac{Q_C}{W} = \frac{H_2 - H_1}{H_3 - H_2}, \qquad \dot m = \frac{\dot Q_C}{H_2 - H_1}$$
   Check: $Q_C + W + Q_H = 0$ over the cycle.

**(b) Numbers** (SVNA Table 9.1, p. 299):
- −20 °C: $P^{sat}$ = 0.132 68 MPa, $H^v$ = 386.66 kJ/kg, so $H_2$ = 386.66.
- 24 °C: $P^{sat}$ = 0.645 66 MPa, $H^l$ = 233.05 kJ/kg, so $H_4 = H_1$ = 233.05.

6. **Refrigeration per kg:**
$$Q_C = H_2 - H_1 = 386.66 - 233.05 = 153.61\ \mathrm{kJ/kg}$$

7. **Circulation rate:**
$$\dot m = \frac{10}{153.61} = 0.0651\ \mathrm{kg/s}\ (234\ \mathrm{kg/h})$$
   The throttle exit quality follows from $H_1 = H^l + x(H^v - H^l)$ at −20 °C: $x = (233.05 - 173.82)/(386.66 - 173.82) = 0.278$, so 28% of the liquid flashes in the valve and does no refrigeration.

**Result:** $Q_C$ = 153.6 kJ/kg; $\dot m$ = 0.0651 kg/s. (W and ω need the superheated compressor-exit enthalpy from the P–H chart, Fig. G.2.)`,
        answer: String.raw`Q_C = H₂ − H₁, W = H₃ − H₂, Q_H = H₄ − H₃, H₁ = H₄, ω = (H₂ − H₁)/(H₃ − H₂), ṁ = Q̇_C/(H₂ − H₁). R-134a −20/24 °C (Table 9.1): Q_C = 386.66 − 233.05 = 153.6 kJ/kg, ṁ = 0.0651 kg/s for 10 kW (throttle flash 28%).` } ] },
    { id: "practice-refrigeration-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P3", label: "", marks: "", topic: "refrigeration",
        sub: "Cascade refrigeration: arrangement, why it is used, and its overall coefficient of performance", type: "sketch", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, slide 12 ("Cascading"); SVNA 6th ed. SI §9.3, Fig. 9.3`,
        text: String.raw`With a sketch, explain a two-stage cascade refrigeration system. Derive the overall coefficient of performance in terms of the stage values ω₁ (low-temperature stage) and ω₂ (high-temperature stage), and show that for reversible stages it equals the Carnot value between the extreme temperatures.`,
        solution: String.raw`### Arrangement
![Two-stage cascade refrigeration: the low-temperature cycle 1 rejects heat to the evaporator of cycle 2 in an interchanger](fig/practice-refrigeration-P3-sketch.svg)

1. **Cycle 1 (low stage)** absorbs $Q_C$ from the cold space at $T_C$ and rejects heat at $T_H'$ in the **interchanger** (its condenser).
2. **Cycle 2 (high stage)** evaporates at $T_C' < T_H'$ in the same interchanger, absorbing the heat rejected by cycle 1, and rejects $Q_H$ to the surroundings at $T_H$.
3. Each stage has its own compressor, valve and refrigerant, chosen for its temperature range (e.g. ethane or ethylene in the low stage, ammonia or R-134a in the high stage).

### Why cascade
- With a large overall temperature lift, a single refrigerant would need an evaporator pressure below atmospheric (air leaks in) and a condenser pressure that is very high, with a very large compression ratio. Discharge temperatures would be high and the compressor efficiency poor.
- Flashing in a single throttle across a large ΔT turns much of the liquid to vapour. Splitting the lift reduces this loss.
- Each refrigerant works where its vapour pressure is convenient.

### Overall coefficient of performance
4. **Stage 1:** $W_1 = Q_C/\omega_1$; heat rejected to the interchanger $Q_C + W_1 = Q_C(1 + 1/\omega_1)$.
5. **Stage 2** absorbs this heat: $W_2 = Q_C(1 + 1/\omega_1)/\omega_2$.
6. **Overall:**
$$\omega = \frac{Q_C}{W_1 + W_2} = \frac{1}{\dfrac1{\omega_1} + \dfrac{1}{\omega_2}\left(1 + \dfrac1{\omega_1}\right)} = \frac{\omega_1\omega_2}{1 + \omega_1 + \omega_2}$$
7. **Reversible stages with no interchanger ΔT** ($T_H' = T_C' = T_M$): $\omega_1 = T_C/(T_M - T_C)$ and $\omega_2 = T_M/(T_H - T_M)$. Then $1 + \omega_1 = T_M/(T_M - T_C)$ and
$$\frac{1}{\omega} = \frac{T_M - T_C}{T_C} + \frac{T_H - T_M}{T_M}\cdot\frac{T_M}{T_C} = \frac{T_H - T_C}{T_C} \;\Rightarrow\; \omega = \frac{T_C}{T_H - T_C}$$
   This is the Carnot value. The cascade does not raise the ideal limit, but it lets real equipment approach it more closely. The temperature difference needed in the interchanger ($T_H' > T_C'$) is an extra irreversibility.`,
        answer: String.raw`Low-T cycle rejects heat into the evaporator of a high-T cycle via an interchanger; each refrigerant works in its convenient pressure range, avoiding vacuum, high P and huge compression ratios. ω = ω₁ω₂/(1 + ω₁ + ω₂); with reversible stages and no interchanger ΔT it reduces to T_C/(T_H − T_C).` } ] },
    { id: "practice-refrigeration-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P4", label: "", marks: "", topic: "refrigeration",
        sub: "Heat pump: operation in winter and summer, ground coils, and φ = ω + 1", type: "theory", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Kirtania, slides 14–16 ("Heat Pump", "How does heat pump work?")`,
        text: String.raw`Explain how a heat pump heats a house in winter and cools it in summer. Why are its outdoor coils sometimes buried underground? Show that the coefficient of performance for heating is one more than that for cooling between the same temperatures, and explain why a heat-pump heater is better than an electric-resistance heater.`,
        solution: String.raw`1. **Principle.** A heat pump is a refrigerator (a reversed heat engine) whose useful output is the heat rejected at the high temperature. Work moves heat from a low-temperature source to a high-temperature sink.

2. **Winter (heating).** The indoor coil is the **condenser**: hot compressed refrigerant condenses and releases heat into the house. The outdoor coil is the **evaporator**: the refrigerant evaporates below the outdoor temperature and absorbs heat from the air (even at 0 °C or below) or from the ground.

3. **Summer (cooling).** A **reversing valve** swaps the roles: the indoor coil becomes the evaporator and absorbs heat from the house; the outdoor coil becomes the condenser and rejects it outside. The unit then works like an air conditioner.

4. **Ground coils.** The ground a few metres down stays at a nearly constant temperature (e.g. 10–15 °C) all year. It is warmer than winter air and cooler than summer air, so the temperature lift, and hence the work, is smaller in both seasons. There is also no frosting of outdoor coils.

5. **φ = ω + 1.** For heating, the measure is "what you get/what you pay for": $\varphi = |Q_H|/W$. Since $|Q_H| = |Q_C| + W$,
$$\varphi = \frac{|Q_C| + W}{W} = \omega + 1, \qquad \varphi_{Carnot} = \frac{T_H}{T_H - T_C}$$

6. **Comparison with resistance heating.** A resistance heater gives 1 kJ of heat per kJ of electricity (φ = 1). A heat pump always gives φ > 1: the extra heat is drawn from the surroundings, not created. For example, with $T_H$ = 30 °C and $T_C$ = 0 °C, $\varphi_{Carnot}$ = 303.15/30 = 10.1; a real unit might reach 3–4, i.e. 3–4 times less electricity. This does not violate the first law, because $|Q_H| = |Q_C| + W$ with $|Q_C|$ from the cold source.`,
        answer: String.raw`Winter: indoor coil = condenser, outdoor (air/ground) coil = evaporator; summer: reversing valve swaps them. Ground stays ≈ 10–15 °C all year, reducing the lift. φ = |Q_H|/W = ω + 1 (Carnot T_H/(T_H − T_C)); φ > 1 always, so it beats resistance heating (φ = 1).` } ] },
    { id: "practice-refrigeration-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P5", label: "", marks: "", topic: "refrigeration",
        sub: "HFC-134a refrigerator at 261.15 K with cooling water at 294.15 K, 35.2 kW: Carnot ω, real ω and ṁ", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Example 9.1 (pp. 297–298), with Table 9.1 and Fig. G.2`,
        text: String.raw`A refrigerated space is maintained at 261.15 K (−12°C) and cooling water is available at 294.15 K (21°C). Refrigeration capacity is 35.2 kW. The evaporator and condenser are of sufficient size that a 5.6 K (5.6°C) minimum-temperature difference for heat transfer can be realized in each. The refrigerant is tetrafluoroethane (HFC-134a), for which data are given in Table 9.1 and Fig. G.2 (App. G).

(a) What is the value of ω for a Carnot refrigerator?

(b) Calculate ω and $\dot m$ for the vapor-compression cycle of Fig. 9.1 if the compressor efficiency is 0.80.`,
        solution: String.raw`**Given:** space 261.15 K, cooling water 294.15 K, ΔT_min = 5.6 K, $\dot Q_C$ = 35.2 kW, η = 0.80.

**Assumptions:** refrigerant evaporates at 261.15 − 5.6 = 255.55 K and condenses at 294.15 + 5.6 = 299.75 K; saturated vapour leaves the evaporator and saturated liquid the condenser; isenthalpic throttle.

1. **(a) Carnot refrigerator** between the refrigerant temperatures:
$$\omega = \frac{T_C}{T_H - T_C} = \frac{255.55}{299.75 - 255.55} = \frac{255.55}{44.2} = 5.78$$

2. **(b) States** (SVNA numbering: 1 evaporator inlet, 2 compressor inlet, 3 compressor exit, 4 condenser exit). From Table 9.1, at 255.55 K the refrigerant evaporates at 1.47 bar:
$$H_2 = 388.13\ \mathrm{kJ/kg}, \qquad S_2 = 1.7396\ \mathrm{kJ/(kg\,K)}$$
   At 299.75 K it condenses at 7 bar: $H_4 = H_1 = 236.76$ kJ/kg (saturated liquid).

3. **Isentropic compression** to 7 bar at $S_3' = 1.7396$: reading the P–H chart (Fig. G.2) along the constant-entropy line through state 2 up to the 7-bar isobar gives $H_3' = 420.27$ kJ/kg (book value). Then
$$(\Delta H)_S = 420.27 - 388.13 = 32.14\ \mathrm{kJ/kg}, \qquad \Delta H = \frac{32.14}{0.80} = 40.18\ \mathrm{kJ/kg}$$

4. **Coefficient of performance:**
$$\omega = \frac{H_2 - H_1}{H_3 - H_2} = \frac{388.13 - 236.76}{40.18} = \frac{151.37}{40.18} = 3.77$$

5. **Circulation rate:**
$$\dot m = \frac{\dot Q_C}{H_2 - H_1} = \frac{35.2}{151.37} = 0.2325\ \mathrm{kg/s}$$
   Compressor power = 0.2325 × 40.18 = 9.34 kW; heat rejected = 35.2 + 9.34 = 44.5 kW.

**Result:** (a) ω_Carnot = 5.78; (b) ω = 3.77 (65% of Carnot), $\dot m$ = 0.2325 kg/s. These agree with the book.`,
        answer: String.raw`(a) ω = 255.55/44.2 = 5.78. (b) Table 9.1: H₂ = 388.13, S₂ = 1.7396, H₁ = H₄ = 236.76; Fig. G.2: H₃′ = 420.27 ⇒ ΔH = 32.14/0.80 = 40.18 kJ/kg; ω = 151.37/40.18 = 3.77, ṁ = 35.2/151.37 = 0.2325 kg/s.` } ] },
    { id: "practice-refrigeration-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P6", label: "", marks: "", topic: "refrigeration",
        sub: "Claude liquefaction of methane at 60 bar with 25% draw-off to the expander: z and throttle-inlet state", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Example 9.3 (pp. 307–309), Eqs. 9.7–9.8`,
        text: String.raw`Natural gas, assumed here to be pure methane, is liquefied in a Claude process. Compression is to 60 bar and precooling is to 300 K. The expander and throttle exhaust to a pressure of 1 bar. Recycle methane at this pressure leaves the exchanger system (point 15, Fig. 9.7) at 295 K. Assume no heat leaks into the system from the surroundings, an expander efficiency of 75%, and an expander exhaust of saturated vapor. For a draw-off to the expander of 25% of the methane entering the exchanger system (x = 0.25), what fraction z of the methane is liquefied, and what is the temperature of the high-pressure stream entering the throttle valve?

Methane data (Perry's tables, as quoted by SVNA): $H_4$ = 1140.0 kJ/kg (300 K, 60 bar); $H_{15}$ = 1188.9 kJ/kg (295 K, 1 bar); at 1 bar, $T^{sat}$ = 111.5 K, $H_9$ = 285.4 kJ/kg (saturated liquid), $H_{12}$ = 796.9 kJ/kg (saturated vapour). The expander-inlet state that satisfies η = 0.75 with a saturated-vapour exhaust (found by trial in the tables) is $T_5$ = 253.6 K, $H_5$ = 1009.8 kJ/kg.`,
        solution: String.raw`**Given:** x = 0.25; enthalpies above (kJ/kg); 1 kg entering the exchanger system.

![Linde and Claude liquefaction schematics: compressor, heat exchanger, throttle, separator, and in Claude an expansion engine](fig/2022-23-Q2a-sketch.svg)

1. **Overall energy balance** (exchangers, expander, throttle, separator; adiabatic). In: 1 kg at $H_4$. Out: z kg liquid at $H_9$, (1 − z) kg gas at $H_{15}$, and the expander work $x(H_5 - H_{12})$:
$$zH_9 + (1 - z)H_{15} - H_4 = x(H_{12} - H_5) \;\Rightarrow\; z = \frac{x(H_{12} - H_5) + H_4 - H_{15}}{H_9 - H_{15}} \quad\text{(SVNA eq. 9.7)}$$

2. **Fraction liquefied:**
$$z = \frac{0.25(796.9 - 1009.8) + 1140.0 - 1188.9}{285.4 - 1188.9} = \frac{-53.23 - 48.90}{-903.5} = 0.1130$$
   11.3% of the methane is liquefied. For x = 0 (Linde), eq. 9.8 gives z = (1140.0 − 1188.9)/(285.4 − 1188.9) = 0.0541, so the expander doubles the yield. The expander delivers 53.2 kJ per kg of gas entering.

3. **Exchanger I** (high-pressure stream 4 → 5; return stream 14 → 15, flow 1 − z):
$$H_5 - H_4 + (1 - z)(H_{15} - H_{14}) = 0 \;\Rightarrow\; H_{14} = \frac{H_5 - H_4}{1 - z} + H_{15} = \frac{1009.8 - 1140.0}{0.8870} + 1188.9 = 1042.1\ \mathrm{kJ/kg}$$
   (T₁₄ = 227.2 K at 1 bar from the tables.)

4. **Exchanger II** (high-pressure stream 5 → 7, flow 1 − x; return stream 12 → 14, flow 1 − z):
$$(1 - x)(H_7 - H_5) + (1 - z)(H_{14} - H_{12}) = 0 \;\Rightarrow\; H_7 = H_5 - \frac{1 - z}{1 - x}(H_{14} - H_{12})$$
$$H_7 = 1009.8 - \frac{0.8870}{0.75}(1042.1 - 796.9) = 719.8\ \mathrm{kJ/kg}$$
   From the 60-bar methane table this corresponds to **T₇ = 197.6 K**.

5. **Effect of x:** as x increases, z rises but T₇ falls toward the separator temperature, and exchanger II needs an ever larger area. The upper limit on x is economic; x = 0 is the Linde limit.

**Result:** z = 0.113 (vs 0.054 for Linde); $H_7$ = 719.8 kJ/kg, $T_7$ ≈ 197.6 K.`,
        answer: String.raw`z = [x(H₁₂ − H₅) + H₄ − H₁₅]/(H₉ − H₁₅) = [0.25(796.9 − 1009.8) + 1140.0 − 1188.9]/(285.4 − 1188.9) = 0.113 (Linde x = 0: 0.054). H₁₄ = 1042.1, H₇ = H₅ − [(1 − z)/(1 − x)](H₁₄ − H₁₂) = 719.8 kJ/kg ⇒ T₇ ≈ 197.6 K.` } ] },
    { id: "practice-refrigeration-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P7", label: "", marks: "", topic: "refrigeration",
        sub: "Coefficient of performance φ of a heat pump and its Carnot value", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 9.1 (p. 310)`,
        text: String.raw`An easy way to rationalize definitions of cycle performance is to think of them as: Measure of performance = What you get / What you pay for. Thus, for an engine, thermal efficiency is η = |W|/|Q_H|; for a refrigerator, the coefficient of performance is ω = |Q_C|/|W|. Define a coefficient of performance φ for a heat pump. What is φ for a Carnot heat pump?`,
        solution: String.raw`1. **What you get** from a heat pump is the heat delivered at the high temperature, $|Q_H|$. **What you pay for** is the work |W|. So
$$\varphi \equiv \frac{|Q_H|}{|W|}$$

2. **First law** for the cycle: $|Q_H| = |Q_C| + |W|$. Hence
$$\varphi = \frac{|Q_C| + |W|}{|W|} = \omega + 1 \ge 1$$

3. **Carnot heat pump:** $|Q_H|/|Q_C| = T_H/T_C$, so $|W| = |Q_H| - |Q_C| = |Q_H|(1 - T_C/T_H)$ and
$$\boxed{\varphi_{Carnot} = \frac{T_H}{T_H - T_C}}$$
   It is the reciprocal of the Carnot engine efficiency, $\eta = 1 - T_C/T_H$.

4. **Example:** delivering heat at 35 °C from outdoor air at 5 °C: $\varphi_{Carnot}$ = 308.15/30 = 10.3. The smaller the temperature lift, the higher φ.`,
        answer: String.raw`φ = |Q_H|/|W| = ω + 1; Carnot: φ = T_H/(T_H − T_C) = 1/η_Carnot engine (e.g. 10.3 for 5 → 35 °C).` } ] },
    { id: "practice-refrigeration-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P8", label: "", marks: "", topic: "refrigeration",
        sub: "Home freezer at −20 °C in a 20 °C kitchen: yearly electricity cost at 60% of Carnot", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 9.2 (p. 310)`,
        text: String.raw`The contents of the freezer in a home refrigerator are maintained at 253.15 K (−20°C). The kitchen temperature is 293.15 K (20°C). If heat leaks amount to 125 000 kJ per day, and if electricity costs USD 0.08/kWh, estimate the yearly cost of running the refrigerator. Assume a coefficient of performance equal to 60% of the Carnot value.`,
        solution: String.raw`**Given:** $T_C$ = 253.15 K, $T_H$ = 293.15 K; heat leak (= refrigeration load) 125 000 kJ/day; ω = 0.6 ω_Carnot; USD 0.08/kWh.

**Assumptions:** steady load all year (365 days); the cycle temperatures are taken as the freezer and kitchen temperatures (the book's intent; real evaporator/condenser approach temperatures would raise the cost).

1. **Carnot ω:** $\omega_{Carnot} = 253.15/(293.15 - 253.15) = 6.329$.

2. **Actual ω:** $0.6 \times 6.329 = 3.797$.

3. **Work per day:**
$$W = \frac{Q_C}{\omega} = \frac{125\,000}{3.797} = 32\,920\ \mathrm{kJ/day} = \frac{32\,920}{3600} = 9.144\ \mathrm{kWh/day}$$

4. **Yearly energy and cost:** 9.144 × 365 = 3338 kWh/yr; cost = 3338 × 0.08 = **USD 267 per year**. (Average power 0.38 kW.)

**Result:** about USD 267 per year.`,
        answer: String.raw`ω_Carnot = 253.15/40 = 6.33; ω = 3.80; W = 125 000/3.80 = 32 920 kJ/day = 9.14 kWh/day ⇒ 3338 kWh/yr ⇒ ≈ USD 267/yr.` } ] },
    { id: "practice-refrigeration-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P9", label: "", marks: "", topic: "refrigeration",
        sub: "Refrigerator start-up: minimum work to cool contents of heat capacity Cᵗ from T_H to T_C", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 9.3 (p. 310)`,
        text: String.raw`Consider the startup of a refrigerator. Initially, the contents are at the same temperature as the surroundings: $T_{C_0} = T_H$, where $T_H$ is the (constant) surroundings temperature. With the passage of time, owing to work input, the contents temperature is reduced from $T_{C_0}$ to its design value $T_C$. Modeling the process as a Carnot refrigerator operating between an infinite hot reservoir and a finite cold reservoir of total heat capacity $C^t$, determine an expression for the minimum work required to decrease the contents temperature from $T_{C_0}$ to $T_C$.`,
        solution: String.raw`**Assumptions:** reversible (Carnot) operation at every instant; $C^t$ constant; the contents are at uniform temperature T, which falls from $T_H$ to $T_C$.

1. **Heat removed** from the contents when their temperature falls by dT (dT < 0): $dQ_C = -C^t\,dT$ (positive).

2. **Instantaneous Carnot work** between T and $T_H$:
$$dW = dQ_C\,\frac{T_H - T}{T} = -C^t\left(\frac{T_H}{T} - 1\right)dT$$

3. **Integrate** from $T_H$ to $T_C$:
$$W_{min} = -C^t\int_{T_H}^{T_C}\left(\frac{T_H}{T} - 1\right)dT = C^t\left[T_H\ln\frac{T_H}{T_C} - (T_H - T_C)\right]$$

4. **Check by entropy:** the contents lose entropy $C^t\ln(T_H/T_C)$; the surroundings gain $Q_H/T_H$ with $Q_H = C^t(T_H - T_C) + W$. Zero total entropy change gives $W = C^tT_H\ln(T_H/T_C) - C^t(T_H - T_C)$ ✓. It is also $W_{min} = T_H\Delta S^t_{contents} - \Delta H^t_{contents}$, i.e. minus the change in availability.

5. **Example:** $C^t$ = 50 kJ/K, $T_H$ = 298.15 K, $T_C$ = 273.15 K: $W_{min}$ = 50[298.15 ln(1.0915) − 25] = 50(26.11 − 25) = 55.5 kJ, far less than the 1250 kJ of heat removed.

**Result:** $W_{min} = C^t[T_H\ln(T_H/T_C) - (T_H - T_C)]$.`,
        answer: String.raw`dW = −Cᵗ(T_H/T − 1)dT integrated from T_H to T_C ⇒ W_min = Cᵗ[T_H ln(T_H/T_C) − (T_H − T_C)] (= T_HΔS − ΔH of the contents).` } ] },
    { id: "practice-refrigeration-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P10", label: "", marks: "", topic: "refrigeration",
        sub: "Carnot refrigerator using R-134a between −12 °C and 38 °C: pressures, qualities, heat, work and ω", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 9.4 (p. 310), with Table 9.1`,
        text: String.raw`A Carnot refrigerator has tetrafluoroethane as the working fluid. The cycle is the same as that shown by Fig. 8.2, except the directions are reversed. For $T_C$ = 261.15 K (−12°C) and $T_H$ = 311.15 K (38°C), determine:

(a) The pressures at states 1, 2, 3, and 4.

(b) The quality $x^v$ at states 3 and 4.

(c) The heat addition per kg of fluid.

(d) The heat rejection per kg of fluid.

(e) The mechanical power per kg of fluid for each of the four steps.

(f) The coefficient of performance ω for the cycle.`,
        solution: String.raw`**Data** (SVNA Table 9.1; 38 °C interpolated midway between 36 and 40 °C):

| T | P / MPa | $H^l$ | $H^v$ | $S^l$ | $S^v$ |
|---|---|---|---|---|---|
| −12 °C | 0.185 16 | 184.16 | 391.55 | 0.9410 | 1.7351 |
| 38 °C | 0.964 11 | 253.38 | 418.68 | 1.1809 | 1.7122 |

(H in kJ/kg, S in kJ/(kg K).)

**Cycle** (Carnot inside the two-phase dome, reversed): 1 = saturated liquid at $T_H$; 1 → 4 isentropic expansion (turbine) to $T_C$; 4 → 3 evaporation at $T_C$ (heat addition); 3 → 2 isentropic compression to saturated vapour at $T_H$; 2 → 1 condensation at $T_H$ (heat rejection).

![Carnot refrigeration cycle for R-134a on a T–S diagram between −12 °C and 38 °C](fig/practice-refrigeration-P10-sketch.svg)

1. **(a) Pressures:** states 1 and 2 at $P^{sat}$(38 °C) = 0.964 MPa; states 3 and 4 at $P^{sat}$(−12 °C) = 0.185 MPa.

2. **(b) Qualities** from $S = S^l + x(S^v - S^l)$ at −12 °C:
$$x_4 = \frac{1.1809 - 0.9410}{1.7351 - 0.9410} = 0.302, \qquad x_3 = \frac{1.7122 - 0.9410}{0.7941} = 0.971$$
   Enthalpies: $H_4 = 184.16 + 0.302(207.39) = 246.81$ and $H_3 = 184.16 + 0.971(207.39) = 385.57$ kJ/kg.

3. **(c) Heat addition** (4 → 3, at $T_C$): $Q_C = H_3 - H_4 = 138.76$ kJ/kg. Check: $T_C(S_3 - S_4) = 261.15(0.5313) = 138.75$ ✓.

4. **(d) Heat rejection** (2 → 1, at $T_H$): $Q_H = H_1 - H_2 = 253.38 - 418.68 = -165.30$ kJ/kg. Check: $T_H\Delta S = 311.15(0.5313) = 165.31$ ✓.

5. **(e) Work of each step** ($W = \Delta H$ for adiabatic steps):
   - compressor 3 → 2: $W = 418.68 - 385.57 = +33.11$ kJ/kg (input);
   - turbine 1 → 4: $W = 246.81 - 253.38 = -6.57$ kJ/kg (output);
   - evaporator and condenser: W = 0.
   Net work = 33.11 − 6.57 = 26.54 kJ/kg = |Q_H| − Q_C ✓.

6. **(f)** $\omega = Q_C/W_{net} = 138.76/26.54 = 5.23$. Check: $T_C/(T_H - T_C) = 261.15/50 = 5.22$ ✓ (difference from table interpolation).

**Result:** P = 0.964 and 0.185 MPa; $x_4$ = 0.302, $x_3$ = 0.971; $Q_C$ = 138.8 kJ/kg; $Q_H$ = −165.3 kJ/kg; W = +33.1 (compressor), −6.6 (turbine) kJ/kg; ω = 5.22.`,
        answer: String.raw`P₁ = P₂ = 0.964 MPa, P₃ = P₄ = 0.185 MPa; x₄ = 0.302, x₃ = 0.971; Q_C = 138.8 kJ/kg, Q_H = −165.3 kJ/kg; W_comp = 33.1, W_turb = −6.6, net 26.5 kJ/kg; ω = 5.22 = T_C/(T_H − T_C).` } ] },
    { id: "practice-refrigeration-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P11", label: "", marks: "", topic: "refrigeration",
        sub: "Raising T_C or lowering T_H: which improves the Carnot ω more?", type: "theory", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 9.5 (p. 310)`,
        text: String.raw`Which is the more effective way to increase the coefficient of performance of a Carnot refrigerator: to increase $T_C$ with $T_H$ constant, or to decrease $T_H$ with $T_C$ constant? For a real refrigerator, does either of these strategies make sense?`,
        solution: String.raw`1. **Sensitivities** of $\omega = T_C/(T_H - T_C)$:
$$\left(\frac{\partial\omega}{\partial T_C}\right)_{T_H} = \frac{T_H}{(T_H - T_C)^2}, \qquad \left(\frac{\partial\omega}{\partial T_H}\right)_{T_C} = -\frac{T_C}{(T_H - T_C)^2}$$
   Since $T_H > T_C$, $|\partial\omega/\partial T_C| > |\partial\omega/\partial T_H|$: **raising $T_C$ is more effective** than lowering $T_H$ by the same amount.

2. **Example:** $T_C$ = 261.15 K, $T_H$ = 311.15 K gives ω = 5.22. Raising $T_C$ by 5 K gives 266.15/45 = 5.91; lowering $T_H$ by 5 K gives 261.15/45 = 5.80.

3. **Real refrigerators.** $T_C$ is fixed by the purpose (the temperature of the cold space) and $T_H$ by the available sink (air or cooling water), so neither can be chosen freely. What the designer can do is reduce the approach temperature differences in the evaporator and condenser. A larger evaporator lets the refrigerant evaporate closer to the space temperature (raising the effective $T_C$, the more valuable change); a larger condenser or colder cooling water lowers the effective $T_H$. The cost of larger heat exchangers is traded against the power saved.`,
        answer: String.raw`∂ω/∂T_C = T_H/(T_H − T_C)² > |∂ω/∂T_H| = T_C/(T_H − T_C)², so raising T_C helps more (e.g. 5.22 → 5.91 vs 5.80 for 5 K). In practice T_C and T_H are set by the duty and the sink; one reduces evaporator/condenser approach ΔT instead.` } ] },
    { id: "practice-refrigeration-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P12", label: "", marks: "", topic: "refrigeration",
        sub: "Carnot engine at 523 K driving a Carnot refrigerator extracting 35 kW at 273 K; then at 60% of Carnot", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 9.7 (pp. 310–311)`,
        text: String.raw`A Carnot engine is coupled to a Carnot refrigerator so that all of the work produced by the engine is used by the refrigerator in extraction of heat from a heat reservoir at 273.15 K (0°C) at the rate of 35 kW. The source of energy for the Carnot engine is a heat reservoir at 523.15 K (250°C). If both devices discard heat to the surroundings at 298.15 K (25°C), how much heat does the engine absorb from its heat-source reservoir?

If the actual coefficient of performance of the refrigerator is ω = 0.6 ω_Carnot and if the thermal efficiency of the engine is η = 0.6 η_Carnot, how much heat does the engine absorb from its heat-source reservoir?`,
        solution: String.raw`**Given:** $T_H$ = 523.15 K (engine source), $T_S$ = 298.15 K (surroundings), $T_C$ = 273.15 K; $\dot Q_C$ = 35 kW.

1. **Carnot refrigerator:** $\omega = 273.15/25 = 10.93$; work $W = 35/10.93 = 3.203$ kW.

2. **Carnot engine:** $\eta = 1 - 298.15/523.15 = 0.4301$; heat absorbed $\dot Q_H = W/\eta = 3.203/0.4301 = 7.45$ kW.
   (This is the absorption-refrigeration limit: $Q_H/Q_C = 7.45/35 = 0.213$.)

3. **Real devices:** $\omega = 0.6(10.93) = 6.556$, so $W = 35/6.556 = 5.339$ kW; $\eta = 0.6(0.4301) = 0.2581$, so
$$\dot Q_H = \frac{5.339}{0.2581} = 20.7\ \mathrm{kW}$$
   The source heat rises by a factor 1/0.36 = 2.78, because both inefficiencies multiply.

**Result:** 7.45 kW (Carnot devices); 20.7 kW (at 60% of Carnot).`,
        answer: String.raw`Carnot: ω = 10.93 ⇒ W = 3.20 kW; η = 0.430 ⇒ Q_H = 7.45 kW. Real: ω = 6.56 ⇒ W = 5.34 kW; η = 0.258 ⇒ Q_H = 20.7 kW.` } ] },
    { id: "practice-refrigeration-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P13", label: "", marks: "", topic: "refrigeration",
        sub: "R-134a cycle evaporating at −23 °C, condensing at 27 °C, η = 0.75, 211 kW: ṁ, condenser duty, power, COP", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 9.9(e) (p. 311); properties from Çengel & Boles Tables A-11 and A-13`,
        text: String.raw`A vapor-compression refrigeration system operates on the cycle of Fig. 9.1. The refrigerant is tetrafluoroethane. For the following operating conditions, determine the circulation rate of the refrigerant, the heat-transfer rate in the condenser, the power requirement, the coefficient of performance of the cycle, and the coefficient of performance of a Carnot refrigeration cycle operating between the same temperature levels:

(e) Evaporation T/t = 250.15 K (−23°C); condensation T/t = 300.15 K (27°C); η(compressor) = 0.75; refrigeration rate = 211 kW.`,
        solution: String.raw`**Data:** superheated-vapour values are needed, so Çengel & Boles tables are used (Table A-11 saturated, A-13 superheated; kJ/kg, kJ/(kg K)). With SVNA Table 9.1 and Fig. G.2 the enthalpy basis differs, but the differences, and hence the answers, are the same within chart-reading accuracy.
- −23 °C (between −24 and −22 °C): $P^{sat}$ = 116.5 kPa, $H_2 = h_g$ = 236.57, $S_2 = s_g$ = 0.94854.
- 27 °C (between 26 and 28 °C): $P^{sat}$ = 706.6 kPa, $H_4 = h_f$ = 89.27.

**Assumptions:** saturated vapour to the compressor, saturated liquid from the condenser, isenthalpic throttle, no pressure drops.

1. **Refrigeration per kg:** $Q_C = H_2 - H_1 = 236.57 - 89.27 = 147.30$ kJ/kg.

2. **Circulation rate:** $\dot m = 211/147.30 = 1.432$ kg/s.

3. **Isentropic compression** to 706.6 kPa at S = 0.94854 (A-13):
   - 0.7 MPa: between 30 °C (0.9314, 268.47) and 40 °C (0.9642, 278.59), H = 273.76.
   - 0.8 MPa: between 40 °C (0.9481, 276.46) and 50 °C (0.9803, 286.71), H = 276.60.
   - At 0.7066 MPa: $H_3' = 273.76 + 0.066(276.60 - 273.76) = 273.95$ kJ/kg.
$$(\Delta H)_S = 273.95 - 236.57 = 37.38\ \mathrm{kJ/kg}, \qquad \Delta H = \frac{37.38}{0.75} = 49.84\ \mathrm{kJ/kg}$$

4. **Power:** $\dot W = 1.432 \times 49.84 = 71.4$ kW.

5. **Condenser duty:** $\dot Q_H = \dot Q_C + \dot W = 211 + 71.4 = 282.4$ kW (rejected).

6. **COP:** $\omega = 147.30/49.84 = 2.96$; Carnot: $\omega = 250.15/50 = 5.00$. The real cycle reaches 59% of Carnot.

**Result:** $\dot m$ = 1.43 kg/s; $\dot Q_H$ = 282 kW; $\dot W$ = 71.4 kW; ω = 2.96; ω_Carnot = 5.00.`,
        answer: String.raw`Çengel A-11/A-13: H₂ = 236.57, H₁ = 89.27 ⇒ Q_C = 147.3 kJ/kg, ṁ = 1.43 kg/s; H₃′ = 273.95 ⇒ ΔH = 37.38/0.75 = 49.84 kJ/kg ⇒ Ẇ = 71.4 kW, Q̇_H = 282 kW; ω = 2.96 vs Carnot 5.00.` } ] },
    { id: "practice-refrigeration-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P14", label: "", marks: "", topic: "refrigeration",
        sub: "Dairy-barn heat-pump milk cooler and water heater versus conventional refrigerator plus electric heater", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 9.17 (pp. 312–313)`,
        text: String.raw`An advertisement is noted in a rural newspaper for a dairy-barn unit that combines a milk cooler with a water heater. Milk must be refrigerated, and hot water is required for washing purposes. The usual barn is equipped with a conventional air-cooled electric refrigerator and an electric-resistance water heater. The new unit is said to provide both the necessary refrigeration and the required hot water at a cost for electricity about the same as the cost of running just the refrigerator in the usual installation. To assess this claim, compare two refrigeration units: The advertised unit takes 14.65 kW from a milk cooler at 272.15 K (−1°C), and discards heat through a condenser at 338.15 K (66°C) to raise the temperature of water from 286.15 K (13°C) to 336.15 K (63°C). The conventional unit takes the same amount of heat from the same milk cooler at 272.15 K (−1°C) and discards heat through an air-cooled condenser at 322.15 K (49°C); in addition, the same amount of water is heated electrically from 286.15 K (13°C) to 336.15 K (63°C). Estimate the total electric power requirements for the two cases, assuming that the actual work in both is 50% greater than required by Carnot refrigerators operating between the given temperatures.`,
        solution: String.raw`**Given:** $\dot Q_C$ = 14.65 kW at 272.15 K; actual work = 1.5 × Carnot work.

1. **Advertised unit** (condenser at 338.15 K):
$$\omega_{Carnot} = \frac{272.15}{338.15 - 272.15} = 4.123, \qquad \dot W = 1.5\frac{14.65}{4.123} = 5.33\ \mathrm{kW}$$
   Heat delivered to the water: $\dot Q_H = 14.65 + 5.33 = 19.98$ kW. This heats $19.98/(4.18 \times 50) = 0.0956$ kg/s of water from 13 to 63 °C.

2. **Conventional unit** (condenser at 322.15 K):
$$\omega_{Carnot} = \frac{272.15}{50} = 5.443, \qquad \dot W = 1.5\frac{14.65}{5.443} = 4.04\ \mathrm{kW}$$
   The same amount of water must be heated electrically: 19.98 kW.
   Total: 4.04 + 19.98 = 24.0 kW.

3. **Comparison:** advertised 5.33 kW against conventional 24.0 kW. The new unit uses only 32% more electricity than the conventional refrigerator alone (5.33 vs 4.04 kW) and supplies the hot water as well. The advertisement's claim is essentially correct: the condenser heat that would otherwise be wasted to air is upgraded to 66 °C, at the cost of a somewhat lower COP.

**Result:** advertised unit ≈ 5.3 kW; conventional installation ≈ 24.0 kW (4.0 kW refrigerator + 20.0 kW water heater).`,
        answer: String.raw`Advertised: ω_C = 4.12, W = 1.5(14.65/4.12) = 5.33 kW, heat to water 19.98 kW. Conventional: ω_C = 5.44, W = 4.04 kW + 19.98 kW electric heating = 24.0 kW. Claim essentially valid.` } ] },
    { id: "practice-refrigeration-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P15", label: "", marks: "", topic: "refrigeration",
        sub: "Two-stage cascade between 210 K and 305 K with stages at 65% of Carnot: overall ω", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. (SI), Problem 9.18 (p. 313), Fig. 9.3`,
        text: String.raw`A two-stage cascade refrigeration system (see Fig. 9.3) operates between $T_C$ = 210 K and $T_H$ = 305 K. Intermediate temperatures are $T_C'$ = 255 K and $T_H'$ = 260 K. Coefficients of performance ω of each stage are 65% of the corresponding values for a Carnot refrigerator. Determine ω for the real cascade, and compare it with that for a Carnot refrigerator operating between $T_C$ and $T_H$.`,
        solution: String.raw`**Given:** lower stage between $T_C$ = 210 K and $T_H'$ = 260 K; upper stage between $T_C'$ = 255 K and $T_H$ = 305 K (5 K interchanger approach).

1. **Stage coefficients of performance:**
$$\omega_1 = 0.65\frac{210}{260 - 210} = 0.65(4.2) = 2.730, \qquad \omega_2 = 0.65\frac{255}{305 - 255} = 0.65(5.1) = 3.315$$

2. **Energy chain** (basis $Q_C$ = 1): $W_1 = 1/2.730 = 0.3663$; heat into stage 2 = 1.3663; $W_2 = 1.3663/3.315 = 0.4122$.

3. **Overall:**
$$\omega = \frac{Q_C}{W_1 + W_2} = \frac{1}{0.3663 + 0.4122} = 1.285 \qquad\left(= \frac{\omega_1\omega_2}{1 + \omega_1 + \omega_2}\right)$$

4. **Carnot between 210 and 305 K:** $\omega = 210/95 = 2.211$.
   The real cascade achieves 58% of the overall Carnot value. Of the loss, the 65% stage efficiencies cost most; the 5 K interchanger difference costs a little more (ideal stages with this approach give ω = 2.08).

**Result:** ω_cascade ≈ 1.28; ω_Carnot = 2.21.`,
        answer: String.raw`ω₁ = 0.65(210/50) = 2.73, ω₂ = 0.65(255/50) = 3.315; ω = 1/[1/ω₁ + (1 + 1/ω₁)/ω₂] = 1.285 vs Carnot 210/95 = 2.21.` } ] },
    { id: "practice-refrigeration-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P16", label: "", marks: "", topic: "refrigeration",
        sub: "R-134a refrigerator with 10 K superheat and liquid subcooled to 30 °C: effect on COP", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (vapour-compression cycle; properties from Çengel & Boles Tables A-11 to A-13)`,
        text: String.raw`An R-134a refrigerator with a 10 kW load evaporates at 0.20 MPa and condenses at 1.0 MPa. Compressor efficiency is 80%.

(a) Find ω, the circulation rate and the compressor power for the standard cycle (saturated vapour to the compressor, saturated liquid from the condenser).

(b) Repeat when the vapour leaves the evaporator superheated to 0 °C and the liquid leaves the condenser subcooled to 30 °C.

(c) Comment.`,
        solution: String.raw`**Data** (Çengel & Boles A-12 and A-13, kJ/kg and kJ/(kg K)):
- 0.20 MPa: $T^{sat}$ = −10.09 °C, $h_g$ = 244.50, $s_g$ = 0.93788; superheated at 0 °C: h = 253.07, s = 0.9699.
- 1.0 MPa: $T^{sat}$ = 39.37 °C, $h_f$ = 107.34; compressed liquid at 30 °C taken as saturated liquid at 30 °C: h ≈ $h_f$(30 °C) = 93.58.
- 1.0 MPa superheated: 40 °C (s 0.9180, h 271.73), 50 °C (0.9526, 282.76), 60 °C (0.9851, 293.40).

**Assumptions:** superheating takes place inside the evaporator (so it is useful refrigeration); isenthalpic throttle; no pressure drops.

1. **(a) Standard cycle.** $H_2$ = 244.50, $H_4 = H_1$ = 107.34: $Q_C$ = 137.16 kJ/kg. Isentropic exit at 1.0 MPa, s = 0.93788 (between 40 and 50 °C): $H_3'$ = 278.07. So $W = (278.07 - 244.50)/0.80 = 41.96$ kJ/kg.
$$\omega = \frac{137.16}{41.96} = 3.27, \qquad \dot m = \frac{10}{137.16} = 0.0729\ \mathrm{kg/s}, \qquad \dot W = 3.06\ \mathrm{kW}$$

2. **(b) Superheat and subcooling.** $H_2$ = 253.07, s = 0.9699; $H_4 = H_1$ = 93.58: $Q_C$ = 159.49 kJ/kg. Isentropic exit at 1.0 MPa, s = 0.9699 (between 50 and 60 °C): $H_3'$ = 288.42. So $W = (288.42 - 253.07)/0.80 = 44.19$ kJ/kg.
$$\omega = \frac{159.49}{44.19} = 3.61, \qquad \dot m = \frac{10}{159.49} = 0.0627\ \mathrm{kg/s}, \qquad \dot W = 2.77\ \mathrm{kW}$$
   Condenser duty 10 + 2.77 = 12.77 kW; discharge enthalpy 297.3 kJ/kg (about 64 °C).

3. **(c) Comment.**
   - **Subcooling** lowers the enthalpy entering the valve, so less liquid flashes and each kg gives more refrigeration, at no extra work: always beneficial.
   - **Superheating** in the evaporator adds a little refrigeration but raises the specific volume and the compression work per kg. Here the net effect of both changes is +10% in ω and −14% in circulation rate. Superheat is used mainly to protect the compressor from liquid droplets.
   - If the superheat happened in the suction line (outside the cold space), it would not count as refrigeration and would lower ω.

**Result:** (a) ω = 3.27, ṁ = 0.0729 kg/s, Ẇ = 3.06 kW; (b) ω = 3.61, ṁ = 0.0627 kg/s, Ẇ = 2.77 kW.`,
        answer: String.raw`(a) Q_C = 137.16 kJ/kg, W = (278.07 − 244.50)/0.8 = 41.96 ⇒ ω = 3.27, ṁ = 0.0729 kg/s, 3.06 kW. (b) Q_C = 253.07 − 93.58 = 159.49, W = (288.42 − 253.07)/0.8 = 44.19 ⇒ ω = 3.61, ṁ = 0.0627 kg/s, 2.77 kW; subcooling helps, superheat mainly protects the compressor.` } ] },
    { id: "practice-refrigeration-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P17", label: "", marks: "", topic: "refrigeration",
        sub: "Heat pump versus electric-resistance heating for a 15 kW winter load: power and seasonal saving", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style problem (heat pumps, Kirtania slides 14–16; SVNA §9.5)`,
        text: String.raw`A house needs 15 kW of heat to stay at 21 °C when the outdoor air is 0 °C. An air-source heat pump uses a 10 K temperature difference in each coil, and its coefficient of performance is 50% of the Carnot value at the refrigerant temperatures.

(a) Find the electric power drawn by the heat pump and compare it with resistance heating.

(b) Electricity costs Tk 10 per kWh. Estimate the saving over a winter of 90 days with 12 hours of heating per day.

(c) What is the minimum work if the heat pump were reversible and the coils had no temperature difference?`,
        solution: String.raw`**Given:** $\dot Q_H$ = 15 kW; house 21 °C, outdoor 0 °C; ΔT = 10 K per coil; φ = 0.5 φ_Carnot.

1. **Refrigerant temperatures:** condensing at 21 + 10 = 31 °C (304.15 K); evaporating at 0 − 10 = −10 °C (263.15 K).

2. **(a) COP:** $\varphi_{Carnot} = T_H/(T_H - T_C) = 304.15/41 = 7.42$; actual φ = 3.71.
$$\dot W = \frac{\dot Q_H}{\varphi} = \frac{15}{3.71} = 4.04\ \mathrm{kW}$$
   A resistance heater needs the full 15 kW, so the heat pump uses 27% of the electricity. The other 10.96 kW is taken from the outside air.

3. **(b) Seasonal saving:** $(15 - 4.04)\ \mathrm{kW} \times 12\ \mathrm h \times 90 = 11\,830$ kWh, i.e. about **Tk 118 000** per winter.

4. **(c) Reversible limit** between 294.15 K and 273.15 K: $\varphi = 294.15/21 = 14.0$, $\dot W_{min} = 15/14.0 = 1.07$ kW. The coil temperature differences and the 50% factor together raise the power almost fourfold. Larger coils (smaller ΔT) or a ground-source evaporator (warmer than 0 °C) cut the work substantially.

**Result:** (a) 4.04 kW vs 15 kW; (b) ≈ 11 800 kWh, Tk 118 000 saved; (c) 1.07 kW minimum.`,
        answer: String.raw`Refrigerant 31 °C/−10 °C: φ_Carnot = 304.15/41 = 7.42, φ = 3.71 ⇒ Ẇ = 4.04 kW vs 15 kW resistance; saving ≈ 11 830 kWh ≈ Tk 118 000 per winter; reversible limit 15/14.0 = 1.07 kW.` } ] },
    { id: "practice-refrigeration-P18", q: 18, section: "S", compulsory: false, stem: String.raw``,
      parts: [
      { id: "practice-refrigeration-P18", label: "", marks: "", topic: "refrigeration",
        sub: "Short conceptual questions on vapour-compression refrigeration and liquefaction", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New exam-style short questions (format of 2018-19 Q5 and 2021-22 Q5)`,
        text: String.raw`Answer briefly, with reasons:

(i) Why is the expansion in a vapour-compression refrigerator done in a throttle valve rather than a turbine?

(ii) Why is compression carried out on dry vapour rather than inside the two-phase region as in a Carnot cycle?

(iii) Why does ω of a real refrigerator fall in hot weather?

(iv) A heat pump delivers 4 kJ of heat for each 1 kJ of electricity. Does this violate the first law?

(v) Why must hydrogen and helium be precooled before a Linde (throttling) liquefier works?`,
        solution: String.raw`1. **(i) Throttle instead of turbine.** The work recoverable from expanding a liquid (mostly liquid, small volume) is small, for R-134a between −12 and 38 °C the reversible expansion of the saturated liquid gives 6.6 kJ/kg against 33.1 kJ/kg of compression work (Problem 9.4). An expander for a two-phase liquid stream is costly and unreliable. A valve is simple, cheap and easily controlled; the price is a small loss of refrigeration (more flash vapour). SVNA Pb. 9.11(b) quantifies the gain from a turbine.

2. **(ii) Dry compression.** Compressors are damaged by liquid droplets ("liquid slugging"), and wet compression is hard to control. So the cycle departs from Carnot by compressing saturated or slightly superheated vapour, and accepts some superheat in the discharge and some extra work.

3. **(iii) Hot weather.** The condensing temperature (and pressure) rises with the ambient temperature. The compression ratio and the work per kg increase, and the hotter liquid flashes more in the valve, so $Q_C$ per kg falls. Both effects reduce ω (e.g. for R-134a at −12 °C, ω falls from 5.55 to 4.02 when condensation rises from 27 to 38 °C).

4. **(iv) No.** $|Q_H| = |Q_C| + W$: 3 kJ of the 4 kJ is taken from the cold surroundings, and only 1 kJ comes from electricity. Energy is conserved. The second law is satisfied as long as φ ≤ $T_H/(T_H - T_C)$.

5. **(v) Precooling H₂ and He.** Throttling cools a gas only below its inversion temperature (μ_JT > 0). H₂ (inversion ≈ 200 K) and He (≈ 40 K) warm on throttling from room temperature. They must be precooled by liquid nitrogen (H₂) or by liquid hydrogen or an expander (He) before the Linde stage can work.`,
        answer: String.raw`(i) Liquid expansion work is small, expanders for two-phase flow are costly; a valve is simple (small loss). (ii) Avoid liquid in compressor. (iii) Higher condensing T ⇒ more work and more flash ⇒ lower ω. (iv) No: Q_H = Q_C + W; only 1 of 4 kJ is electrical. (v) Above inversion T throttling warms H₂/He, so they need precooling.` } ] }
  ]
});
