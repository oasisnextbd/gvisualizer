QB.paper({ year: "Practice", set: "Compressors", date: "", marks: 0, practice: true,
  rules: String.raw`Compressors, fans and blowers (in the outline, no slides): MSH 5th ed. ch. 8 examples and problems (fan power, multistage adiabatic compression with intercooling, discharge temperature, cooling water), Lieberman on surge and gas molecular weight, and exam-style problems on optimum interstage pressure with a P–V diagram, clearance and volumetric efficiency, polytropic efficiency, centrifugal head and speed, stage pressures with interstage losses and capacity control.`,
  questions: [
    { id: "practice-compressors-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-compressors-P1", label: "", marks: "", topic: "compressors",
        sub: "Three-stage methane compressor: power, stage temperature, intercooler water", type: "numerical", syllabus: "partial", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Example 8.3 (pp. 211–212), Eqs. (8.22), (8.25), (8.29)`,
        text: String.raw`A three-stage reciprocating compressor is to compress 180 std ft³/min (306 m³/h) of methane from 14 to 900 lbf/in.² (0.95 to 61.3 atm) abs. The inlet temperature is 80°F (26.7°C). For the expected temperature range the average properties of methane are $c_p$ = 9.3 Btu/lb mol·°F (38.9 J/g mol·°C), $\gamma$ = 1.31. (a) What is the brake horsepower if the mechanical efficiency is 80 percent? (b) What is the discharge temperature from the first stage? (c) If the temperature of the cooling water is to rise 20°F (11.1°C), how much water is needed in the intercoolers and aftercooler for the compressed gas to leave each cooler at 80°F (26.7°C)? Assume that jacket cooling is sufficient to absorb frictional heat.`,
        solution: String.raw`**Given:** $q_0 = 180$ std ft³/min, $p_a = 14$ psia, $p_b = 900$ psia, $T_a = 540$ °R, $\gamma = 1.31$, $\eta = 0.80$, $c_p = 9.3$ Btu/lb mol·°F, cooling water ΔT = 20°F.

**Assumptions:** ideal-gas adiabatic compression in each stage; perfect intercooling to 80°F; equal stage ratios (minimum total work).

1. **Stage ratio:** total power is a minimum when every stage does the same work, i.e. equal compression ratios:
$$r = \left(\frac{900}{14}\right)^{1/3} = 4.006 \approx 4$$

2. **(a) Power per stage** (Eq. 8.29, $1 - 1/\gamma = 0.2366$):
$$P_B = \frac{0.0643\,T_a\gamma q_0}{520(\gamma - 1)\eta}\left[r^{1-1/\gamma} - 1\right] = \frac{0.0643(540)(1.31)(180)}{520(0.31)(0.80)}\left(4^{0.2366} - 1\right) = 63.5(0.388) = 24.7\ \mathrm{hp}$$
Total for three stages: $3 \times 24.7 = 73.9$ hp (55.1 kW).

3. **(b) First-stage discharge temperature** (Eq. 8.22):
$$T_b = 540(4)^{0.2366} = 750\ \mathrm{°R} = 290\ \mathrm{°F}\ (143\ \mathrm{°C})$$
Because each cooler returns the gas to 80°F and the ratios are equal, every stage discharges at 290°F.

4. **(c) Cooling water:** molar flow $= 180(60)/378.7 = 28.5$ lb mol/h. Heat removed per cooler:
$$Q = 28.5(290 - 80)(9.3) = 55{,}600\ \mathrm{Btu/h}$$
Two intercoolers + one aftercooler: $3 \times 55{,}600 = 166{,}800$ Btu/h. Water: $166{,}800/(1 \times 20) = 8340$ lb/h ≈ 16.7 gal/min (3.79 m³/h).

5. **Comparison (single stage):** one stage from 14 to 900 psia would need about 107 hp and discharge at about 990°F, far beyond lubricant and valve limits; this is why staging with intercooling is used.

**Result:** (a) 73.9 hp (≈ 24.7 hp/stage); (b) 290°F; (c) ≈ 8350 lb/h ≈ 16.7 gal/min of water.

> Book check: MSH gives 24.6 hp per stage, 73.8 hp (55.0 kW), 290°F, 166,980 Btu/h and 16.7 gal/min.`,
        answer: String.raw`r = 4; 24.7 hp/stage → 73.9 hp (55 kW); T₁ = 540(4)^0.2366 = 750 °R = 290°F; 3 × 55,600 Btu/h → ≈ 8340 lb/h ≈ 16.7 gpm water.` } ] },

    { id: "practice-compressors-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-compressors-P2", label: "", marks: "", topic: "compressors",
        sub: "Centrifugal fan for flue gas: power with pressure and velocity heads", type: "numerical", syllabus: "partial", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Example 8.2 (pp. 205–206)`,
        text: String.raw`A centrifugal fan is used to take flue gas at rest and at a pressure of 29.0 in. (737 mm) Hg and a temperature of 200°F (93.3°C) and discharge it at a pressure of 30.1 in. (765 mm) Hg and a velocity of 150 ft/s (45.7 m/s). Calculate the power needed to move 10,000 std ft³/min (16,990 m³/h) of gas. The efficiency of the fan is 65 percent, and the molecular weight of the gas is 31.3.`,
        solution: String.raw`**Given:** $p_a = 29.0$ in. Hg, $p_b = 30.1$ in. Hg, $T_a = 660$ °R, $\bar V_b = 150$ ft/s, $q_0 = 10{,}000$ std ft³/min (60°F, 30 in. Hg, 378.7 ft³/lb mol), $M = 31.3$, $\eta = 0.65$.

**Assumptions:** the density change is small (3.8 %), so the incompressible-flow equations are used with the average density (MSH Eqs. 8.1–8.6); $Z_a = Z_b$, $\bar V_a = 0$.

1. **Densities:**
$$\rho_a = \frac{31.3 \times 29.0(460 + 60)}{378.7 \times 30(460 + 200)} = 0.0629\ \mathrm{lb/ft^3},\qquad \rho_b = 0.0629\frac{30.1}{29.0} = 0.0653\ \mathrm{lb/ft^3}$$
$\bar\rho = 0.0641\ \mathrm{lb/ft^3}$.

2. **Mass flow:** $\dot m = 10{,}000(31.3)/(378.7 \times 60) = 13.78$ lb/s.

3. **Pressure head:**
$$\frac{p_b - p_a}{\bar\rho} = \frac{(30.1 - 29.0)(144)(14.7)}{29.92 \times 0.0641} = 1213\ \mathrm{ft\cdot lbf/lb}$$

4. **Velocity head:** $150^2/(2 \times 32.17) = 349.7$ ft·lbf/lb. In a fan the kinetic energy is a large part of the useful work (29 % here) and must be included.

5. **Work and power:**
$$W_p = \frac{1213 + 349.7}{0.65} = 2405\ \mathrm{ft\cdot lbf/lb},\qquad P_B = \frac{13.78 \times 2405}{550} = 60.2\ \mathrm{hp}\ (44.9\ \mathrm{kW})$$

**Result:** ≈ 60 hp (45 kW).

> Book check: MSH obtains 2406 ft·lbf/lb and 60.3 hp (45.0 kW).`,
        answer: String.raw`ρ̄ = 0.0641 lb/ft³, ṁ = 13.78 lb/s, Δp/ρ̄ = 1213 + V²/2g_c = 350 → W_p = 2405 ft·lbf/lb → P_B ≈ 60.2 hp (45 kW).` } ] },

    { id: "practice-compressors-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw`Air entering at 70°F and atmospheric pressure is to be compressed to 4000 lbf/in.² gauge in a reciprocating compressor at the rate of 125 std ft³/min. For air $\gamma$ = 1.40.`,
      parts: [
        { id: "practice-compressors-P3a", label: "(a)", marks: "", topic: "compressors",
          sub: "Air to 4000 psig: number of stages, ideal work and brake power", type: "numerical", syllabus: "partial", repeats: [],
          origin: "book", ref: String.raw`MSH 5th ed., Problem 8.4`,
          text: String.raw`How many stages should be used? What is the theoretical shaft work per standard cubic foot for frictionless adiabatic compression? What is the brake horsepower if the efficiency of each stage is 85 percent?`,
          solution: String.raw`**Given:** $p_a = 14.7$ psia, $p_b = 4014.7$ psia, $T_a = 530$ °R, $q_0 = 125$ std ft³/min, $\gamma = 1.4$ ($1 - 1/\gamma = 0.2857$), $\eta = 0.85$.

**Assumptions:** equal ratio per stage, perfect intercooling to 70°F, ideal gas; practical limit about 4–5 per stage for air (to keep discharge below ~350°F for the lubricant).

1. **Overall ratio:** $4014.7/14.7 = 273$.

2. **Choice of stages:**

| stages | ratio/stage | discharge T, °F | hp per std ft³/min (η = 1) |
|---|---|---|---|
| 3 | 6.49 | 444 | 0.486 |
| 4 | 4.07 | 331 | 0.452 |
| 5 | 3.07 | 270 | 0.433 |

Three stages give 444°F, too hot. **Four stages** (ratio 4.07, 331°F) is the usual choice; five save a further 4 % power but cost another cylinder and cooler.

3. **Ideal work per std ft³** (Eq. 8.29 with η = 1, per stage):
$$\frac{0.0643(530)(1.4)}{520(0.4)}\left(4.065^{0.2857} - 1\right) = 0.2294(0.4928) = 0.1130\ \mathrm{hp\ per\ std\ ft^3/min}$$
Four stages: 0.452 hp per (std ft³/min) = $0.452 \times 33{,}000 = 14{,}900$ ft·lbf per std ft³ (≈ 20 kJ per std ft³).

4. **Brake power:** $P_B = 125(0.452)/0.85 = 66.5$ hp (49.6 kW).

**Result:** 4 stages, ratio ≈ 4.07; ≈ 14,900 ft·lbf/std ft³; ≈ 66.5 bhp.`,
          answer: String.raw`Ratio 273 → 4 stages of 4.07; ideal work ≈ 0.452 hp per scfm ≈ 14,900 ft·lbf/std ft³; P_B = 125(0.452)/0.85 ≈ 66.5 hp.` },
        { id: "practice-compressors-P3b", label: "(b)", marks: "", topic: "compressors",
          sub: "Discharge temperature of air from the first stage", type: "numerical", syllabus: "partial", repeats: [],
          origin: "book", ref: String.raw`MSH 5th ed., Problem 8.5`,
          text: String.raw`What is the discharge temperature of the air from the first stage in part (a)?`,
          solution: String.raw`**Given:** $T_a = 530$ °R, stage ratio 4.065, $\gamma = 1.4$.

1. **Isentropic relation** (Eq. 8.22):
$$T_b = T_a\left(\frac{p_b}{p_a}\right)^{1 - 1/\gamma} = 530(4.065)^{0.2857} = 530(1.493) = 791\ \mathrm{°R} = 331\ \mathrm{°F}\ (166\ \mathrm{°C})$$

2. **Comment:** with perfect intercooling every stage discharges at the same 331°F. The real (non-ideal) stage, at 85 % efficiency, runs hotter: $T_b ≈ 530 + 261/0.85 = 837$ °R = 377°F, still acceptable for compressor lubricants (< ~400°F) but a reason not to use fewer stages.

**Result:** ≈ 331°F ideal (≈ 377°F with 85 % efficiency).`,
          answer: String.raw`T_b = 530(4.065)^0.2857 = 791 °R = 331°F (≈ 377°F allowing 85 % stage efficiency).` } ] },

    { id: "practice-compressors-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-compressors-P4", label: "", marks: "", topic: "compressors",
        sub: "Why a hot spill-back worsens surge; molecular weight effects on compressors", type: "theory", syllabus: "partial", repeats: [],
        origin: "book", ref: String.raw`Lieberman, Understanding Process Equipment for Operators and Engineers, Ch. 31 "How compressors work" (stopping surge) and Ch. 34 "Reciprocating compressors" (effect of molecular weight)`,
        text: String.raw`(a) List the operating actions that move a centrifugal compressor away from surge and explain each in terms of the head–flow curve. Lieberman opened the discharge-to-suction spill-back on a surging refrigeration compressor and the surging got worse. Why?

(b) A refinery switched a reciprocating compressor from 32-MW fuel gas to 8-MW purge gas and the flow meter reading halved. Explain why the actual volumetric flow had not changed, and contrast the effect of molecular weight on reciprocating and centrifugal compressors.`,
        solution: String.raw`1. **(a) Surge** occurs when the flow falls below the minimum on the head–flow curve: the machine can no longer produce the head the system demands, flow reverses, the rotor shuttles against the thrust bearing and the wheels can touch the casing. A centrifugal compressor develops a fixed *head* (ft·lbf/lb) for a given speed and flow, so the discharge pressure it can make is roughly head × gas density. To leave surge either **lower the head required** or **raise the flow**:
- decrease discharge pressure (less head needed);
- increase suction pressure (higher density, less head for the same pressure ratio);
- decrease suction temperature (higher density);
- increase gas molecular weight (higher density);
- increase flow through the machine (recycle/spill-back, or open a vent).

2. **Hot spill-back:** the spill-back raised the flow, but it had **no cooler**, so recycled hot discharge gas raised the suction temperature, lowered the suction density, increased the head needed for the same pressure ratio, and moved the operating point back toward surge, each pass hotter than the last. A recycle line must return gas through a cooler (or take it downstream of the aftercooler).

3. **(b) Flow meter:** an orifice meter reads $\Delta p ∝ \rho V^2$. With the same volumetric flow, a gas one-quarter as dense gives one-quarter the $\Delta p$; since the indicated flow ∝ $\sqrt{\Delta p}$, the reading halves (it is calibrated for 32 MW). The real volumetric flow was unchanged.

4. **Molecular weight effects:**
- **reciprocating:** a positive-displacement machine; pressure ratio and actual volumetric capacity are set by the cylinders and are almost independent of MW. Only the small valve losses (∝ density) and the compressibility (Z ≈ 1 for light gas vs 0.9 for fuel gas, so ~10 % more power) change.
- **centrifugal:** develops head, not pressure; $\Delta p ∝$ polytropic head × density, so a lighter gas gives a much lower discharge pressure and less flow, and may push the machine into surge; a heavier gas raises discharge pressure and power.

**Result:** stop surge by more flow or less head (lower $p_d$, higher $p_s$, lower $T_s$, higher MW); recycle must be cooled. Recip capacity ≈ independent of MW; centrifugal Δp ∝ MW.`,
        answer: String.raw`Raise flow or lower required head (↓p_d, ↑p_s, ↓T_s, ↑MW, cooled recycle); uncooled spill-back heats suction gas → lower density → more head → deeper surge. Meter reads √(ρ): ¼ density → half reading. Recip: capacity ≈ independent of MW; centrifugal: Δp ∝ head × density.` } ] },

    { id: "practice-compressors-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-compressors-P5", label: "", marks: "20", topic: "compressors",
        sub: "Optimum intermediate pressure for two-stage compression with intercooling", type: "derivation", syllabus: "partial", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; MSH 5th ed. Eqs. (8.25)–(8.27) and Example 8.3 statement that equal stage ratios give minimum work`,
        text: String.raw`(a) For two-stage adiabatic compression of an ideal gas from $p_1$ to $p_3$ with perfect intercooling (gas cooled back to $T_1$ at the intermediate pressure $p_2$), derive the value of $p_2$ that minimizes the total work, and show that the two stages then do equal work.

(b) Air at 1 bar and 300 K is compressed to 9 bar ($\gamma$ = 1.4, $R$ = 0.287 kJ/kg K). Compare the work per kg and the discharge temperature for single-stage adiabatic, two-stage intercooled and isothermal compression.

(c) Show the three paths on a P–V diagram and identify the work saved by intercooling.`,
        solution: String.raw`### (a) Derivation

1. **Work of one adiabatic stage** (MSH Eq. 8.25, per unit mass, with $p_a/\rho_a = RT_a$ and $m = (\gamma - 1)/\gamma$):
$$W = \frac{RT_a}{m}\left[\left(\frac{p_b}{p_a}\right)^m - 1\right]$$

2. **Two stages with perfect intercooling** (both stages start at $T_1$):
$$W = \frac{RT_1}{m}\left[\left(\frac{p_2}{p_1}\right)^m + \left(\frac{p_3}{p_2}\right)^m - 2\right]$$

3. **Minimize:** $dW/dp_2 = 0$:
$$\frac{RT_1}{m}\left[m\frac{p_2^{m-1}}{p_1^m} - m\frac{p_3^m}{p_2^{m+1}}\right] = 0 \Rightarrow p_2^{2m} = (p_1p_3)^m \Rightarrow p_2 = \sqrt{p_1p_3}$$
($d^2W/dp_2^2 > 0$, so it is a minimum.)

4. **Equal work:** then $p_2/p_1 = p_3/p_2 = \sqrt{p_3/p_1}$; both stages have the same ratio and the same inlet temperature, hence the same work and the same discharge temperature. For $N$ stages, $r = (p_{N+1}/p_1)^{1/N}$.

### (b) Numerical ($RT_1 = 86.1$ kJ/kg, $1/m = 3.5$)

1. **Single stage:** $W = 3.5(86.1)(9^{0.2857} - 1) = 301.4(0.873) = 263$ kJ/kg; $T_2 = 300(9)^{0.2857} = 562$ K (289°C).

2. **Two stages:** $p_2 = \sqrt{1 \times 9} = 3$ bar; $W = 2(301.4)(3^{0.2857} - 1) = 602.7(0.369) = 222$ kJ/kg; each stage discharges at $300(3)^{0.2857} = 411$ K (138°C). Saving 41 kJ/kg = **15.6 %** (a numerical search over $p_2$ confirms the minimum at 3.0 bar).

3. **Isothermal limit:** $W = RT_1\ln 9 = 86.1(2.197) = 189$ kJ/kg (infinite number of intercooled stages).

### (c) P–V diagram

For steady-flow compression the work is $\int v\,dp$, the area to the **left** of the path between the suction and discharge pressure lines. The isentrope (steep) encloses the largest area, the isotherm the smallest. With intercooling the path follows the isentrope 1 → 2, moves at constant pressure to the isotherm (2 → 2′, intercooler), then follows a new isentrope 2′ → 3; the shaded area between the single-stage isentrope and the 2′ → 3 curve is the work saved.

![P–V diagram: single-stage isentropic, two-stage intercooled and isothermal compression of air from 1 to 9 bar, with the work saved shaded](fig/practice-compressors-P5-sol.svg)

**Result:** $p_2 = \sqrt{p_1p_3} = 3$ bar; 263 (single) vs 222 (two-stage) vs 189 kJ/kg (isothermal); discharge 562 K vs 411 K.`,
        answer: String.raw`dW/dp₂ = 0 → p₂ = √(p₁p₃) (equal ratios, equal work). Air 1→9 bar: single 263 kJ/kg, T 562 K; two-stage (3 bar) 222 kJ/kg, T 411 K (−15.6 %); isothermal 189 kJ/kg.` } ] },

    { id: "practice-compressors-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-compressors-P6", label: "", marks: "15", topic: "compressors",
        sub: "Reciprocating air compressor: clearance, volumetric efficiency, delivery and power", type: "numerical", syllabus: "partial", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; MSH 5th ed. Eqs. (8.25) and (8.28) (polytropic compression); volumetric efficiency of a reciprocating compressor`,
        text: String.raw`A single-acting, single-cylinder air compressor has a bore of 200 mm and a stroke of 250 mm and runs at 600 rpm. The clearance volume is 5 % of the swept volume. Air is drawn in at 1 bar and 27°C and delivered at 7 bar; both compression and re-expansion are polytropic with $n$ = 1.3.

(a) Derive the volumetric efficiency $\eta_v = 1 - c[(p_2/p_1)^{1/n} - 1]$ from the indicator (P–V) diagram.

(b) Calculate the volumetric efficiency, the free-air delivery (m³/min at suction conditions), the indicated power, the shaft power at 85 % mechanical efficiency and the delivery temperature.

(c) At what pressure ratio would the compressor deliver nothing?`,
        solution: String.raw`**Given:** $V_s = (\pi/4)(0.2)^2(0.25) = 7.854\times10^{-3}\ \mathrm{m^3}$, $c = 0.05$, $N = 600$ rpm (10 strokes/s), $p_1 = 100$ kPa, $T_1 = 300$ K, $r = 7$, $n = 1.3$.

### (a) Volumetric efficiency

1. At the end of delivery the clearance volume $V_c = cV_s$ holds gas at $p_2$. On the return stroke this gas re-expands polytropically to $p_1$ before the suction valve opens, occupying $V_4 = V_c(p_2/p_1)^{1/n}$.
2. Fresh charge drawn in: $V_1 - V_4 = (V_s + V_c) - V_c r^{1/n}$.
3. Dividing by $V_s$:
$$\eta_v = \frac{V_s + cV_s - cV_sr^{1/n}}{V_s} = 1 - c\left(r^{1/n} - 1\right)$$
It falls as the ratio or the clearance rises; it is the reason high ratios need staging, and clearance pockets are used to unload capacity.

### (b) Performance

1. $\eta_v = 1 - 0.05(7^{1/1.3} - 1) = 1 - 0.05(4.468 - 1) = 0.827$.
2. Swept rate $= 7.854\times10^{-3}(10) = 0.0785\ \mathrm{m^3/s}$; free-air delivery $= 0.827(0.0785) = 0.0649\ \mathrm{m^3/s} = 3.90\ \mathrm{m^3/min}$ (0.0754 kg/s).
3. Indicated power (polytropic, per unit volume drawn in; the clearance gas is compressed and re-expanded with no net work):
$$P = \frac{n}{n-1}p_1\dot V_1\left[r^{(n-1)/n} - 1\right] = 4.333(100)(0.0649)(7^{0.2308} - 1) = 4.333(6.49)(0.567) = 15.9\ \mathrm{kW}$$
4. Shaft power $= 15.9/0.85 = 18.8$ kW.
5. Delivery temperature $T_2 = 300(7)^{0.2308} = 470$ K (197°C).

### (c) Zero delivery

$\eta_v = 0$ when $r^{1/n} = 1 + 1/c = 21$: $r = 21^{1.3} = 52$. At that ratio the clearance gas re-expands to fill the whole cylinder.

**Result:** $\eta_v$ = 82.7 %, FAD 3.9 m³/min, 15.9 kW indicated, 18.8 kW shaft, 197°C; zero delivery at $r$ ≈ 52.`,
        answer: String.raw`η_v = 1 − 0.05(7^{1/1.3} − 1) = 0.827; FAD = 0.0649 m³/s (3.9 m³/min); P_ind = 15.9 kW, shaft 18.8 kW; T₂ = 470 K (197°C); η_v = 0 at r = 21^1.3 ≈ 52.` } ] },

    { id: "practice-compressors-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-compressors-P7", label: "", marks: "12", topic: "compressors",
        sub: "Polytropic exponent and efficiencies from measured discharge temperature", type: "numerical", syllabus: "partial", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; MSH 5th ed. pp. 210 (polytropic compression, compressor efficiency)`,
        text: String.raw`An uncooled centrifugal air compressor takes 2 kg/s of air at 1 bar and 25°C and discharges at 6 bar and 250°C. Taking $\gamma$ = 1.4 and $c_p$ = 1.005 kJ/kg K:

(a) find the polytropic exponent $n$ of the actual process and explain why $n > \gamma$;

(b) find the isentropic discharge temperature, the isentropic and the polytropic efficiencies and the power absorbed;

(c) what would $n < \gamma$ indicate for a reciprocating machine?`,
        solution: String.raw`**Given:** $T_1 = 298.15$ K, $T_2 = 523.15$ K, $r = 6$, $\dot m = 2$ kg/s.

1. **(a) Exponent:** for a polytropic path $T_2/T_1 = r^{(n-1)/n}$:
$$\frac{n-1}{n} = \frac{\ln(523.15/298.15)}{\ln 6} = \frac{0.5623}{1.7918} = 0.3138 \Rightarrow n = 1.457$$
$n > \gamma$ = 1.4 because friction and shock losses in the impeller and diffuser are converted to heat that stays in the gas (no cooling), so it ends hotter than isentropic.

2. **(b) Isentropic temperature:** $T_{2s} = 298.15(6)^{0.2857} = 497.5$ K (224°C).

3. **Isentropic efficiency:**
$$\eta_s = \frac{T_{2s} - T_1}{T_2 - T_1} = \frac{199.3}{225.0} = 0.886$$

4. **Polytropic (small-stage) efficiency:**
$$\eta_p = \frac{(\gamma - 1)/\gamma}{(n-1)/n} = \frac{0.2857}{0.3138} = 0.910$$
$\eta_p > \eta_s$ because the preheat of later "small stages" by earlier losses penalizes the isentropic measure; MSH quotes up to 90 % for centrifugal machines.

5. **Power:** $P = \dot mc_p(T_2 - T_1) = 2(1.005)(225) = 452$ kW (isentropic would be 400 kW; isothermal $\dot mRT_1\ln 6 = 307$ kW).

6. **(c) $n < \gamma$:** heat is removed during compression (water jackets, fins): the path lies between the isentrope and the isotherm ($n = 1$), the discharge is cooler and the work less. Typical cooled reciprocating cylinders have $n$ ≈ 1.25–1.35.

**Result:** $n$ = 1.457; $T_{2s}$ = 497.5 K; $\eta_s$ = 88.6 %; $\eta_p$ = 91.0 %; 452 kW.`,
        answer: String.raw`(n−1)/n = ln(523/298)/ln 6 = 0.3138 → n = 1.457 (> γ: friction heat); T₂s = 497.5 K; η_s = 0.886; η_p = 0.910; P = 2(1.005)(225) = 452 kW.` } ] },

    { id: "practice-compressors-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-compressors-P8", label: "", marks: "15", topic: "compressors",
        sub: "Centrifugal compressor head: effect of gas molecular weight and required speed", type: "numerical", syllabus: "partial", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; head relation of MSH Eq. (8.25) with the polytropic exponent; Lieberman Ch. 31–34 (head is fixed by the wheels, Δp by head × density); fan laws H ∝ N²`,
        text: String.raw`A centrifugal compressor at its design speed develops a polytropic head of 40,000 ft·lbf/lb at the operating flow. Suction is 50 psia and 100°F; take $n/(n-1)$ = 3.5 and $Z$ = 1.

(a) Find the discharge pressure when compressing a gas of molecular weight 30 and when the gas becomes 20 (hydrogen-rich).

(b) The downstream unit needs 150 psia. What happens to the machine with the 20-MW gas, and by how much must the speed be raised (head ∝ speed²) to restore a pressure ratio of 3?

(c) Sketch a centrifugal compressor characteristic and mark the surge and stonewall limits.`,
        solution: String.raw`**Given:** $H_p = 40{,}000$ ft·lbf/lb, $p_1 = 50$ psia, $T_1 = 560$ °R, $n/(n-1) = 3.5$, $R = 1545$ ft·lbf/lb mol·°R.

1. **Head equation** (polytropic form of Eq. 8.25):
$$H_p = \frac{n}{n-1}\frac{ZRT_1}{M}\left[r^{(n-1)/n} - 1\right]$$

2. **(a) MW 30:** $ZRT_1/M = 1545(560)/30 = 28{,}840$ ft·lbf/lb;
$$r^{1/3.5} = 1 + \frac{40{,}000}{3.5(28{,}840)} = 1.396,\quad r = 1.396^{3.5} = 3.22,\quad p_2 = 161\ \mathrm{psia}$$
**MW 20:** $ZRT_1/M = 43{,}260$; $r^{1/3.5} = 1.264$, $r = 2.27$, $p_2 = 114$ psia.

3. **(b)** With the light gas the compressor can make only 114 psia at that flow. The system needs 150 psia, so the operating point slides up the head curve to lower flow; if even the peak head is insufficient the flow collapses into **surge** (Lieberman's "molecular weight surge").
**Speed needed** for $r = 3$ with MW 20:
$$H_p = 3.5(43{,}260)\left(3^{1/3.5} - 1\right) = 151{,}400(0.3687) = 55{,}800\ \mathrm{ft\cdot lbf/lb}$$
$N_2/N_1 = \sqrt{55{,}800/40{,}000} = 1.18$: an **18 % speed increase** (usually beyond the driver/rotor limit, so the alternatives are fewer light components, cooling the suction, or raising the suction pressure).

4. **(c) Characteristic:** at constant speed the head (or pressure ratio) curve is flat-topped and falls with increasing flow. At the left end the **surge line** (minimum stable flow, joining the peaks of the speed curves) and at the right end **stonewall** (choke: sonic velocity at the impeller/diffuser throat, head falls steeply). Efficiency islands peak near the middle; operate with a margin (≈ 10 %) to the right of surge with anti-surge recycle.

**Result:** MW 30: r = 3.22, 161 psia; MW 20: r = 2.27, 114 psia (surge risk); +18 % speed for r = 3.`,
        answer: String.raw`MW 30: r = 3.22 → 161 psia; MW 20: r = 2.27 → 114 psia (< 150 → surge); need H = 55,800 ft·lbf/lb → N₂/N₁ = √(55.8/40) = 1.18 (+18 %).` } ] },

    { id: "practice-compressors-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-compressors-P9", label: "", marks: "12", topic: "compressors",
        sub: "Four-stage compression with 5 psi intercooler drops: stage pressures", type: "numerical", syllabus: "partial", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; same method as the past-paper two- and three-stage problems (equal stage ratios with interstage pressure losses)`,
        text: String.raw`Natural gas is compressed in four stages from 0 psig suction to 600 psig final discharge. The pressure drop through each intercooler and its piping is 5 psi. Find the suction and discharge pressure of every cylinder assuming equal compression ratios, and compare the ratio with the value that ignores the interstage losses.`,
        solution: String.raw`**Given:** $p_{s1} = 14.7$ psia, $p_{d4} = 614.7$ psia, three intercoolers each losing 5 psi.

**Assumptions:** equal ratio $R$ in each stage (minimum total work, as for perfect intercooling).

1. **Without losses:** $R_0 = (614.7/14.7)^{1/4} = 2.543$.

2. **With losses:** each stage discharges at $R \times$ its suction, and the next suction is 5 psi lower:
$$p_{d4} = R\Big(R\big(R(14.7R - 5) - 5\big) - 5\Big) = 614.7\ \mathrm{psia}$$
Solve by trial: R = 2.65 gives 583.5 psia, R = 2.70 gives 632.9 psia, **R = 2.682** gives 614.7 psia.

3. **Stage pressures:**

| stage | suction, psia (psig) | discharge, psia (psig) |
|---|---|---|
| 1 | 14.7 (0) | 39.4 (24.7) |
| 2 | 34.4 (19.7) | 92.3 (77.6) |
| 3 | 87.3 (72.6) | 234.2 (219.5) |
| 4 | 229.2 (214.5) | 614.7 (600.0) |

4. **Comment:** the interstage losses raise the ratio from 2.54 to 2.68 per stage, i.e. about 5 % more work per stage and hotter discharges; the effect is largest in the low-pressure stages, where 5 psi is a large fraction of the pressure (stage 2 suction loses 13 % of its pressure).

**Result:** R ≈ 2.68 (vs 2.54); cylinders 14.7→39.4, 34.4→92.3, 87.3→234.2, 229.2→614.7 psia.`,
        answer: String.raw`Equal ratio with 5 psi drops: R = 2.682 (2.543 without); 14.7→39.4, 34.4→92.3, 87.3→234.2, 229.2→614.7 psia.` } ] },

    { id: "practice-compressors-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-compressors-P10", label: "", marks: "12", topic: "compressors",
        sub: "Capacity control of reciprocating and centrifugal compressors; type selection", type: "theory", syllabus: "partial", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; MSH 5th ed. ch. 8 (blowers and compressors), Lieberman Ch. 31–34`,
        text: String.raw`(a) Describe the methods used to control the capacity of (i) a reciprocating compressor and (ii) a centrifugal compressor, and state which are energy-efficient.

(b) Give the approximate ranges of flow and pressure ratio for which reciprocating, rotary (screw/lobe), centrifugal and axial compressors are selected.`,
        solution: String.raw`### (a) Capacity control

**(i) Reciprocating** (capacity is fixed by displacement and speed):
- **suction-valve unloaders**: hold suction valves open on one end of a cylinder, so that end does no work (steps of 0, 50, 75, 100 % in double-acting cylinders); efficient.
- **clearance pockets**: added clearance re-expands gas and lowers volumetric efficiency $\eta_v = 1 - c(r^{1/n} - 1)$; efficient, stepless with variable pockets.
- **speed variation** (engine, turbine or VFD drives); efficient.
- **bypass/recycle** (discharge to suction via a cooler): simple, but wastes all the compression work on the recycled gas.
- suction throttling: lowers mass flow but raises the ratio and discharge temperature; limited use.

**(ii) Centrifugal** (flow set where the head curve meets the system):
- **variable speed** (steam/gas turbine, VFD): best efficiency ($H \propto N^2$, power ≈ $N^3$).
- **adjustable inlet guide vanes** (pre-swirl reduces head): good efficiency down to ~70 % flow.
- **suction throttling**: cheaper than discharge throttling because it reduces inlet density and the power.
- **discharge throttling**: least efficient; moves toward surge.
- **anti-surge recycle/blow-off** below the surge flow: wasteful but essential for protection.

### (b) Selection ranges (typical)

| type | inlet flow | pressure ratio / pressure |
|---|---|---|
| reciprocating | small–moderate, up to ~ 10,000 ft³/min per machine | any; up to several thousand bar with staging (2–4 per stage) |
| rotary screw / lobe (PD blower) | 100–20,000 ft³/min | lobe ≤ 2 per stage; oil-flooded screw up to ~ 15 bar |
| centrifugal | ~ 1000–150,000 ft³/min | ~ 1.5–3.5 per casing (multistage casings for more) |
| axial | very large, > 50,000–1,000,000 ft³/min | ~ 1.1–1.3 per stage, 5–20 overall (gas turbines, air separation) |

High pressure and small flow → reciprocating; large flow, moderate ratio, oil-free continuous service → centrifugal; very large air flow → axial; low-pressure blower service → lobe or centrifugal blower (MSH: PD blowers 0.4–1 atm gauge single stage).`,
        answer: String.raw`Recip: unloaders, clearance pockets, speed (efficient); recycle/throttling (wasteful). Centrifugal: speed, inlet guide vanes, suction throttling; discharge throttling and recycle least efficient (recycle for anti-surge). Recip = high p/low Q; centrifugal = large Q, moderate ratio; axial = very large Q.` } ] }
  ]
});
