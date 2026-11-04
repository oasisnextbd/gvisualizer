QB.paper({ year: "Practice", set: "Pumps", date: "", marks: 0, practice: true,
  rules: String.raw`Pumps (no slides exist; the topic is in Dr. Sowgath's outline): MSH 5th ed. ch. 8 examples and problems (developed head, power, NPSH), Ludwig Vol. 1 ch. 3 worked examples (NPSH available in open, vacuum and pressure systems, NPSHR corrections, type specific speed, system head curves, affinity laws), Lieberman on starting NPSH, and exam-style problems on specific-speed selection, operating point, series/parallel, multistage pumps, cavitation, Euler head, reciprocating pumps and the specification sheet.`,
  questions: [
    { id: "practice-pumps-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P1", label: "", marks: "", topic: "pumps",
        sub: "Benzene pump: developed head, brake power and NPSH available", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Example 8.1 (pp. 192–193), Eqs. (8.1)–(8.7)`,
        text: String.raw`Benzene at 100°F (37.8°C) is pumped through the system of MSH Fig. 8.5 at the rate of 40 gal/min (9.09 m³/h). The reservoir is at atmospheric pressure. The gauge pressure at the end of the discharge line is 50 lbf/in.² (345 kN/m²). The discharge is 10 ft and the pump suction 4 ft above the level in the reservoir. The discharge line is 1½-in. Schedule 40 pipe. The friction in the suction line is known to be 0.5 lbf/in.² (3.45 kN/m²), and that in the discharge line is 5.5 lbf/in.² (37.9 kN/m²). The mechanical efficiency of the pump is 0.60 (60 percent). The density of benzene is 54 lb/ft³ (865 kg/m³), and its vapor pressure at 100°F (37.8°C) is 3.8 lbf/in.² (26.2 kN/m²). Calculate (a) the developed head of the pump and (b) the total power input. (c) If the pump manufacturer specifies a required NPSHR of 10 ft (3.05 m), will the pump be suitable for this service?

(For 1½-in. Schedule 40 pipe, a velocity of 1 ft/s corresponds to 6.34 gal/min.)`,
        solution: String.raw`**Given:** $q = 40$ gal/min benzene, $\rho = 54\ \mathrm{lb/ft^3}$, $p_{a'} = 14.7$ psia (reservoir), $p_{b'} = 14.7 + 50 = 64.7$ psia (end of discharge line), $Z_{b'} = 10$ ft, pump suction 4 ft above the reservoir level, friction 0.5 psi (suction) + 5.5 psi (discharge), $\eta = 0.60$, $p_v = 3.8$ psia, NPSHR = 10 ft.

**Find:** developed head $\Delta H$, brake power $P_B$, NPSH available.

**Assumptions:** station $a'$ = reservoir surface (datum, $\bar V_{a'} = 0$), station $b'$ = end of the discharge line; $\alpha_{b'} = 1$; $g/g_c = 1$ lbf/lb.

1. **Exit velocity:** $\bar V_{b'} = 40/6.34 = 6.31$ ft/s, so the velocity head is $6.31^2/(2 \times 32.17) = 0.62$ ft·lbf/lb.

2. **Mechanical-energy balance between $a'$ and $b'$** (MSH Eq. 4.32 with the pump work):
$$W_p\eta = \frac{p_{b'}}{\rho} + \frac{g}{g_c}Z_{b'} + \frac{\alpha_{b'}\bar V_{b'}^2}{2g_c} + h_f - \frac{p_{a'}}{\rho}$$
$$W_p\eta = \frac{64.7(144)}{54} + 10 + 0.62 + \frac{(5.5 + 0.5)144}{54} - \frac{14.7(144)}{54}$$
$$= 172.5 + 10 + 0.62 + 16.0 - 39.2 = 160.0\ \mathrm{ft\cdot lbf/lb}$$
By Eq. (8.3) $W_p\eta = \Delta H$, so the **developed head is 160 ft·lbf/lb ≈ 160 ft of benzene** (478 J/kg).

3. **Mass flow rate:**
$$\dot m = \frac{40 \times 54}{7.48 \times 60} = 4.81\ \mathrm{lb/s}\ (2.18\ \mathrm{kg/s})$$

4. **Power input** (Eq. 8.4):
$$P_B = \frac{\dot m\,\Delta H}{550\,\eta} = \frac{4.81 \times 160.0}{550 \times 0.60} = 2.33\ \mathrm{hp}\ (1.74\ \mathrm{kW})$$
The fluid power is $\dot m\Delta H/550 = 1.40$ hp; the other 0.93 hp is lost in the pump.

5. **NPSH available** (Eq. 8.7), with $p_{a'}/\rho = 14.7(144)/54 = 39.2$ ft, vapor-pressure head $3.8(144)/54 = 10.13$ ft, suction friction $0.5(144)/54 = 1.33$ ft and $Z_a = +4$ ft (suction lift):
$$\mathrm{NPSH} = \frac{g_c}{g}\left(\frac{p_{a'} - p_v}{\rho} - h_{fs}\right) - Z_a = 39.2 - 10.13 - 1.33 - 4 = 23.7\ \mathrm{ft}\ (7.2\ \mathrm{m})$$

6. **Suitability:** NPSHA = 23.7 ft against NPSHR = 10 ft, a margin of 13.7 ft (well above the usual 2–3 ft or 10–30 % margin). The pump will not cavitate; it is suitable.

**Result:** $\Delta H = 160$ ft·lbf/lb; $P_B = 2.33$ hp (1.74 kW); NPSHA = 23.7 ft > 10 ft, so the pump is suitable.

> Book check: MSH gives 159.9 ft·lbf/lb, 2.33 hp (1.74 kW) and NPSH = 23.77 ft (it rounds the vapor-pressure head to 10.1 ft). The small difference is rounding only.`,
        answer: String.raw`ΔH = 160 ft·lbf/lb (478 J/kg); P_B = 2.33 hp (1.74 kW); NPSHA = 23.7 ft ≫ NPSHR 10 ft → pump suitable.` } ] },

    { id: "practice-pumps-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw`It is proposed to pump 10,000 kg/h of toluene at 114°C and 1.1 atm abs pressure from the reboiler of a distillation tower to a second distillation unit without cooling the toluene before it enters the pump. The density of toluene is 866 kg/m³.`,
      parts: [
        { id: "practice-pumps-P2a", label: "(a)", marks: "", topic: "pumps",
          sub: "Toluene from a reboiler: liquid height needed for NPSH 2.5 m", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`MSH 5th ed., Problem 8.2`,
          text: String.raw`If the friction loss in the line between the reboiler and pump is 7 kN/m², how far above the pump must the liquid level in the reboiler be maintained to give a net positive suction head of 2.5 m?`,
          solution: String.raw`**Given:** toluene, $\rho = 866\ \mathrm{kg/m^3}$, reboiler at 1.1 atm = 111.46 kPa and 114°C, $h_{fs} = 7$ kN/m², NPSH required 2.5 m.

**Find:** static head $Z$ of the reboiler level above the pump.

**Assumptions:** the liquid in a reboiler is at its boiling point, so its vapor pressure equals the reboiler pressure. Check with the Antoine equation for toluene ($\log_{10}p^* = 6.95464 - 1344.8/(219.482 + T)$, mmHg, °C): at 114°C $p^* = 836$ mmHg = 1.10 atm ✓.

1. **NPSH with a flooded suction** (Eq. 8.7 with the level above the pump, $Z_a = -Z$):
$$\mathrm{NPSH} = \frac{p_{a'} - p_v}{\rho g} - \frac{h_{fs}}{\rho g} + Z$$

2. **Pressure term:** $p_{a'} - p_v = 0$ (saturated liquid), so the pressure gives no NPSH at all.

3. **Friction head:** $h_{fs}/(\rho g) = 7000/(866 \times 9.81) = 0.82$ m.

4. **Required elevation:**
$$Z = \mathrm{NPSH} + 0.82 = 2.5 + 0.82 = 3.32\ \mathrm{m}$$

**Result:** keep the reboiler liquid level at least **3.3 m above the pump suction**. For a boiling liquid the whole NPSH must come from static head; this is why reboiler and column-bottoms pumps sit at grade under a tall skirt.`,
          answer: String.raw`p_v = p_reboiler (boiling liquid), h_fs = 0.82 m → Z = 2.5 + 0.82 = 3.32 m above the pump.` },
        { id: "practice-pumps-P2b", label: "(b)", marks: "", topic: "pumps",
          sub: "Toluene transfer pump: developed head and power", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`MSH 5th ed., Problem 8.3`,
          text: String.raw`Calculate the power required to drive the pump in part (a) if the pump is to elevate the toluene 10 m, the pressure in the second unit is atmospheric, and the friction loss in the discharge line is 35 kN/m². The velocity in the pump discharge line is 2 m/s.`,
          solution: String.raw`**Given:** $\dot m = 10{,}000/3600 = 2.78$ kg/s, $p_{a'} = 111.46$ kPa, $p_{b'} = 101.33$ kPa, $Z_{b'} - Z_{a'} = 10$ m, friction 7 kPa (suction) + 35 kPa (discharge), $\bar V_{b'} = 2$ m/s.

**Find:** developed head and brake power.

**Assumptions:** the problem gives no efficiency, so take $\eta = 0.60$ as in MSH Example 8.1 (small pump); $\alpha = 1$; reboiler surface $a'$ has zero velocity.

1. **Energy balance $a' \to b'$:**
$$W_p\eta = \frac{p_{b'} - p_{a'}}{\rho} + g\Delta Z + \frac{\bar V_{b'}^2}{2} + \frac{\Delta p_f}{\rho}$$

| term | value, J/kg |
|---|---|
| pressure $(101.33 - 111.46)\times 10^3/866$ | −11.7 |
| elevation $9.81 \times 10$ | 98.1 |
| velocity head $2^2/2$ | 2.0 |
| friction $(35 + 7)\times 10^3/866$ | 48.5 |
| **total $\Delta H$** | **136.9** (= 13.96 m of toluene) |

2. **Fluid power:** $P_f = \dot m\Delta H = 2.78 \times 136.9 = 380$ W.

3. **Brake power:** $P_B = P_f/\eta = 380/0.60 = 634$ W ≈ **0.63 kW** (0.85 hp). A 1.1 kW (1.5 hp) standard motor would be fitted.

**Result:** developed head ≈ 137 J/kg (14.0 m); power ≈ 0.38 kW to the fluid, ≈ 0.63 kW at 60 % efficiency.`,
          answer: String.raw`ΔH = 136.9 J/kg (14.0 m); P_f = 0.38 kW; P_B ≈ 0.63 kW at an assumed η = 60 %.` } ] },

    { id: "practice-pumps-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw`NPSH available is calculated (Ludwig Eq. 3-10, corrected to the pump centerline) as
$$\mathrm{NPSH_A} = S + (P_a - P_{vp})\frac{2.31}{\mathrm{SpGr}} - h_{SL}$$
where $P_a$ is the absolute pressure on the liquid surface (psia), $P_{vp}$ the vapor pressure at pumping temperature (psia), $S$ the static height of the liquid surface above (+) or below (−) the pump centerline (ft) and $h_{SL}$ the suction-line losses (ft of liquid). Calculate NPSHA for each of the systems below and comment.`,
      parts: [
        { id: "practice-pumps-P3a", label: "(a)", marks: "", topic: "pumps",
          sub: "NPSH available: hot water from an open tank at 1500 ft altitude", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 3-5 (p. 191)`,
          text: String.raw`An open vessel is at an altitude of 1500 ft, where atmospheric pressure is 13.92 psia. The liquid is water at 150°F (vapor pressure 3.718 psia, SpGr 0.982). The vessel liquid level is 12 ft below the centerline of the pump ($S_L = -12$ ft). Friction losses are 1.1 ft of liquid.`,
          solution: String.raw`**Given:** $P_a = 13.92$ psia, $P_{vp} = 3.718$ psia, SpGr = 0.982, $S = -12$ ft, $h_{SL} = 1.1$ ft.

1. **Pressure head above vapor pressure:** $(13.92 - 3.718)(2.31/0.982) = 10.20 \times 2.352 = 24.0$ ft.

2. **NPSHA:**
$$\mathrm{NPSH_A} = -12 + 24.0 - 1.1 = 10.9\ \mathrm{ft}$$

3. **Comment:** altitude has cut the barometer by 0.78 psi (1.8 ft of water) and the hot water has a high vapor pressure; together with a 12 ft lift only 10.9 ft remain. The worst case is the lowest tank level, so use the empty-tank $S$ in design. A pump with NPSHR ≤ about 8 ft at the rated flow is needed.

**Result:** NPSHA ≈ 10.9 ft (book 10.88 ft).`,
          answer: String.raw`NPSHA = −12 + (13.92 − 3.718)(2.31/0.982) − 1.1 = 10.9 ft.` },
        { id: "practice-pumps-P3b", label: "(b)", marks: "", topic: "pumps",
          sub: "NPSH available: boiling water from a vacuum collector", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 3-6 (p. 191)`,
          text: String.raw`A liquid collector operates at 28 in. Hg vacuum (referred to a 30 in. barometer). The liquid is water at 101.2°F, vapor pressure 0.98 psia. The vessel liquid level is 5 ft above the pump centerline (worst case 2 ft). Friction losses are 0.3 ft of liquid. Find NPSHA and comment on the pump selection.`,
          solution: String.raw`**Given:** vacuum 28 in. Hg on a 30 in. barometer → absolute pressure 2 in. Hg; $P_{vp} = 0.98$ psia; $S = +5$ ft (worst +2 ft); $h_{SL} = 0.3$ ft; SpGr ≈ 0.994.

1. **Absolute pressure:** $P_a = (14.7/30)(2) = 0.98$ psia. This equals the vapor pressure: the water is boiling in the collector.

2. **NPSHA:**
$$\mathrm{NPSH_A} = +5 + (0.98 - 0.98)\frac{2.31}{0.994} - 0.3 = 4.7\ \mathrm{ft}$$
At the worst (low) level: $2 - 0.3 = 1.7$ ft.

3. **Comment:** a liquid boiling under vacuum gets its NPSH only from static submergence. 1.7 ft is not a practical design; the pump would need NPSHR below about 3 ft. Raise the vessel (more $S$), keep a higher minimum level, use a low-NPSH (inducer or vertical can) pump, or subcool the liquid.

**Result:** NPSHA = 4.7 ft normally, 1.7 ft at minimum level (not practical).`,
          answer: String.raw`P_a = P_vp = 0.98 psia → NPSHA = S − h_SL = 4.7 ft (1.7 ft at the lowest level: raise the vessel).` },
        { id: "practice-pumps-P3c", label: "(c)", marks: "", topic: "pumps",
          sub: "NPSH available: butane from a pressurized drum, effect of drum pressure", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 3-7 (p. 191) and its note on p. 192`,
          text: String.raw`A vessel contains butane at 90°F and 60 psia. Butane vapor pressure at 90°F is 44 psia, SpGr 0.58. The liquid level is 8 ft below the pump centerline; friction losses are 12 ft of liquid. Find NPSHA. What happens if the system pressure falls to 46 psia?`,
          solution: String.raw`**Given:** $P_a = 60$ psia, $P_{vp} = 44$ psia, SpGr = 0.58, $S = -8$ ft, $h_{SL} = 12$ ft.

1. **NPSHA at 60 psia:**
$$\mathrm{NPSH_A} = -8 + (60 - 44)\frac{2.31}{0.58} - 12 = -8 + 63.7 - 12 = 43.7\ \mathrm{ft}$$
The 16 psi of subcooling is worth 63.7 ft of light butane; no pumping problem.

2. **At 46 psia:**
$$\mathrm{NPSH_A} = -8 + (46 - 44)\frac{2.31}{0.58} - 12 = -8 + 8.0 - 12 = -12.0\ \mathrm{ft}$$
A negative NPSHA is impossible to pump: the butane flashes in the suction line and the eye of the impeller, the pump vapor-locks and loses suction.

3. **Comment:** for volatile liquids NPSHA is extremely sensitive to the margin $(P_a - P_{vp})$, because 1 psi is worth $2.31/0.58 = 4$ ft. A drum at its bubble point (P_a = P_vp) gives only $S - h_{SL}$, so it must be elevated above the pump.

**Result:** 43.7 ft at 60 psia; −12 ft at 46 psia (cannot be pumped).`,
          answer: String.raw`43.7 ft at 60 psia; at 46 psia NPSHA = −12 ft → liquid flashes, cannot be pumped.` },
        { id: "practice-pumps-P3d", label: "(d)", marks: "", topic: "pumps",
          sub: "NPSH available: condensate pump on a steam surface condenser", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 3-8 and Fig. 3-44 (p. 191)`,
          text: String.raw`A closed steam surface condenser operates at 1.5 in. Hg abs (28.42 in. Hg vacuum); the condensate is saturated water at 91.72°F. The condensate level is 10 ft above the pump centerline and the suction-line friction plus entrance losses are 2.92 ft. Find NPSHA and the equivalent suction lift the pump sees (1 in. Hg = 1.13 ft of water at this temperature).`,
          solution: String.raw`**Given:** $p' = 1.5$ in. Hg abs = 1.5(1.13) = 1.71 ft water; condensate saturated at that pressure, so $p'_{vp} = 1.71$ ft; $S = +10$ ft; $h_{SL} = 2.92$ ft.

1. **NPSHA:**
$$\mathrm{NPSH_A} = 10 + (1.71 - 1.71) - 2.92 = 7.08\ \mathrm{ft}$$

2. **Suction head (for the total head calculation, separate from NPSH):** the vacuum is 28.42 in. Hg × 1.137 = 32.31 ft water. Static submergence less friction is $10 - 2.92 = 7.08$ ft, so the pump suction is effectively under a lift of
$$32.31 - 7.08 = 25.23\ \mathrm{ft}$$
This lift (vacuum effect less submergence) must be added to the discharge head to obtain the pump's total head.

3. **Comment:** a vacuum never helps the pump; it only adds to the head it must develop. Condensate pumps are usually vertical can pumps placed in a pit to gain submergence.

**Result:** NPSHA = 7.08 ft; equivalent suction lift 25.2 ft.`,
          answer: String.raw`NPSHA = 10 + 0 − 2.92 = 7.08 ft; equivalent suction lift = 32.31 − 7.08 = 25.2 ft (add to discharge head).` } ] },

    { id: "practice-pumps-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P4", label: "", marks: "", topic: "pumps",
        sub: "Correcting cold-water NPSHR for hot hydrocarbons and boiler feed water", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Examples 3-10 and 3-11, Fig. 3-46 (Hydraulic Institute NPSH reduction chart), pp. 192–194`,
        text: String.raw`Pump manufacturers' NPSHR curves are based on cold water. The Hydraulic Institute chart (Ludwig Fig. 3-46, vapor pressure vs temperature for propane, butanes, refrigerant R-11, methyl alcohol and water, with slant lines giving the NPSH reduction in ft) allows a reduction for hydrocarbons and hot water.

(a) A pump with a cold-water NPSHR of 12 ft is to handle propane at 55°F. Find the corrected NPSHR.

(b) A pump with a cold-water NPSHR of 6 ft handles boiler feed water at 180°F. Find the corrected NPSHR.

(c) State the limitations on using such reductions.`,
        solution: String.raw`**Given:** cold-water NPSHR 12 ft (propane, 55°F) and 6 ft (water, 180°F); Ludwig Fig. 3-46.

**Find:** NPSHR for the real liquid.

1. **(a) Propane, 55°F.** Enter the chart at 55°F, go up to the propane vapor-pressure line, read about 100 psia; follow the slant line to the NPSH-reduction scale: **9.5 ft**. The reduction is limited to half the cold-water value, $0.5 \times 12 = 6$ ft. Since 9.5 ft > 6 ft, use 6 ft:
$$\mathrm{NPSHR_{propane}} = 12 - 6 = 6\ \mathrm{ft}$$

2. **(b) Water, 180°F.** Water vapor pressure at 180°F is 7.5 psia; the chart reads a reduction of **0.45 ft**. Half the cold-water value is 3 ft, so the full 0.45 ft may be taken:
$$\mathrm{NPSHR_{water}} = 6 - 0.45 = 5.55\ \mathrm{ft}$$

3. **(c) Limitations** (Hydraulic Institute, as listed by Ludwig):
- reduction never more than 50 % of the cold-water NPSHR, and never extrapolated beyond 10 ft;
- only for pure liquids without entrained air or non-condensables (released gas needs *more* NPSH, not less);
- use the worst (hottest) actual pumping temperature;
- the chart is only for the liquids shown (hydrocarbons and water), not for other fluids;
- apply a safety factor so NPSHA is never marginal.

**Why a reduction exists:** for a light hydrocarbon a small volume of vapor forms per unit mass evaporated (high vapor density) and the vapor collapses gently, so a little flashing at the impeller eye does less harm than with cold water, which forms large volumes of vapor per kg.

**Result:** (a) 6 ft (reduction capped at 50 %); (b) 5.55 ft.`,
        answer: String.raw`(a) chart 9.5 ft but capped at ½(12) = 6 ft → NPSHR = 6 ft; (b) 0.45 ft → NPSHR = 5.55 ft.` } ] },

    { id: "practice-pumps-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P5", label: "", marks: "", topic: "pumps",
        sub: "Type specific speed of a double-suction pump and impeller type", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 3-12, Eq. (3-11), Figs. 3-47 and 3-50 (pp. 194–197)`,
        text: String.raw`A double-suction, single-stage, 6-in. centrifugal pump operates at 1760 rpm (a standard motor speed under load) and has its maximum efficiency at 1480 gal/min and 132 ft total head. (a) Calculate the "type" specific speed and state the impeller type. (b) Why is specific speed always evaluated at the best-efficiency point, and what would the specific speed be if the same duty were met at 1150 or 3500 rpm?`,
        solution: String.raw`**Given:** $n = 1760$ rpm, $Q = 1480$ gal/min, $H = 132$ ft at the best-efficiency point (BEP).

1. **Specific speed** (Ludwig Eq. 3-11, US units: rpm, gal/min, ft):
$$N_s = \frac{n\sqrt Q}{H^{3/4}} = \frac{1760\sqrt{1480}}{132^{0.75}} = \frac{1760 \times 38.47}{38.94} = 1740$$

2. **Impeller type** (Fig. 3-47 scale): radial-vane impellers cover about 500–1500, Francis-screw (mixed radial) about 1500–4000, mixed-flow 4000–10,000 and axial-flow (propeller) above 10,000. $N_s = 1740$ lies at the low end of the **Francis-vane (radial-flow, wide-eye) field**, a normal centrifugal impeller.

3. **(b) Why the BEP:** $N_s$ along one curve goes from 0 at shutoff to infinity at zero head (Fig. 3-50), so only one point characterizes the design: the BEP. The "type" specific speed is that value; geometrically similar pumps (same $N_s$) have similar efficiency and curve shape, which lets the designer scale known performance.

4. **Other speeds** for the same Q and H ($N_s \propto n$):

| n, rpm | 1150 | 1760 | 3500 |
|---|---|---|---|
| $N_s$ | 1140 | 1740 | 3460 |

At 1150 rpm the impeller becomes a narrow radial type (lower efficiency, larger diameter); at 3500 rpm a mixed-radial Francis impeller, smaller and cheaper but with higher NPSHR (check the Hydraulic Institute suction limits, Fig. 3-48).

**Result:** $N_s = 1740$ → radial/Francis impeller.

> Book check: Ludwig obtains $N_s = 1740$.`,
        answer: String.raw`N_s = 1760√1480/132^0.75 = 1740 → radial-flow (Francis-vane) impeller; 1140 at 1150 rpm, 3460 at 3500 rpm.` } ] },

    { id: "practice-pumps-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P6", label: "", marks: "", topic: "pumps",
        sub: "System head curve for a line with two pipe sizes and a control valve", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 3-13, Fig. 3-53 (p. 199)`,
        text: String.raw`A pump takes suction from an atmospheric tank whose level is 7 ft above the pump (minimum) through 15 ft of 6-in. pipe with two 90° ells and an open gate valve. The discharge is 20 ft of 4-in. pipe (one 4-in. ell) in series with 75 ft of 3-in. pipe (two 3-in. ells, one gate valve), a control valve and block valves, into a bubble-cap column at 15 psig whose inlet is 45 ft above the pump. Water at 60°F. Friction data (Cameron tables):

| | 200 gpm | 300 gpm |
|---|---|---|
| 6-in. pipe, ft/100 ft | 0.584 | 1.24 |
| 4-in. pipe, ft/100 ft | 4.29 | 9.09 |
| 3-in. pipe, ft/100 ft | 16.1 | 34.1 |

Equivalent lengths: 6-in. 90° ell 11.4 ft, 6-in. gate 3.2 ft; 4-in. ell 4.6 ft; 3-in. ell 4 ft, 3-in. gate 1.7 ft. Allow the control valve 60 % of the total friction of each line section. Calculate the total head at 200 and 300 gal/min and explain how the system curve is used.`,
        solution: String.raw`**Given:** static: tank level +7 ft (suction head), column inlet 45 ft, column pressure 15 psig = 15(2.31) = 34.7 ft of water; friction data above.

**Find:** total system head at 200 and 300 gal/min.

**Assumptions:** SpGr = 1; control valve takes 60 % of the total friction of a section, so valve loss = 1.5 × pipe-and-fitting friction of that section.

1. **Total static head:** $45 - 7 + 15(2.31) = 72.6$ ft.

2. **Suction line (6 in.):** equivalent length $15 + 2(11.4) + 3.2 = 41.0$ ft → $0.41 \times 0.584 = 0.24$ ft (200 gpm), $0.41 \times 1.24 = 0.51$ ft (300 gpm).

3. **Discharge friction:**

| | 4-in. at 200 | 4-in. at 300 | 3-in. at 200 | 3-in. at 300 |
|---|---|---|---|---|
| equivalent length, ft | 24.6 | 24.6 | 84.7 | 84.7 |
| pipe + fittings, ft | 1.06 | 2.24 | 13.6 | 28.9 |
| control valve (1.5 ×), ft | 1.58 | 3.35 | 20.5 | 43.3 |
| section total, ft | 2.64 | 5.59 | 34.1 | 72.2 |

4. **Total head:**
$$H_{200} = 72.6 + 0.24 + 2.64 + 34.1 = 109.6\ \mathrm{ft}$$
$$H_{300} = 72.6 + 0.51 + 5.59 + 72.2 = 150.9\ \mathrm{ft}$$

5. **Use of the system curve:** repeat at several flows and plot $H$ against $Q$; it starts at the static head (72.6 ft at Q = 0) and rises roughly with $Q^2$ (a pure $Q^2$ fit through the 200 gpm point would predict 155.6 ft at 300 gpm; turbulent friction factors fall slightly with Re, so the real curve rises a little slower). Superimpose the pump head-capacity curve: the **intersection is the operating point**. Draw the curve for minimum and maximum static head (tank levels, column pressure) to see the range the pump must cover; the 3-in. section dominates, so a larger pipe would flatten the curve and reduce power.

**Result:** $H$ ≈ 110 ft at 200 gpm and ≈ 151 ft at 300 gpm.

> Book check: Ludwig gets 109.49 ft and 150.68 ft (same method, with rounded friction values).`,
        answer: String.raw`Static 72.6 ft; total head ≈ 109.6 ft at 200 gpm and ≈ 150.9 ft at 300 gpm (book 109.5 / 150.7); operating point = intersection with pump curve.` } ] },

    { id: "practice-pumps-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-pumps-P7a", label: "(a)", marks: "", topic: "pumps",
          sub: "Affinity laws: trimming the impeller at fixed speed", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 3-15 and Eqs. (3-23)–(3-25) (p. 203)`,
          text: String.raw`A non-cavitating 9-in. impeller pump produces 125 gal/min at 85 ft total head, pumping kerosene of SpGr 0.8 at 1750 rpm and using 6.2 bhp (not motor nameplate). What impeller diameter should be used to make a permanent change to 85 gal/min at the same speed? Estimate the new head and brake horsepower.`,
          solution: String.raw`**Given:** $d_1 = 9$ in., $Q_1 = 125$ gpm, $H_1 = 85$ ft, $\mathrm{BHP}_1 = 6.2$, $n$ fixed; $Q_2 = 85$ gpm.

**Assumptions:** affinity laws for impeller cut at constant speed (small cut, < 20 %; efficiency unchanged).

1. **Diameter** ($Q \propto d$):
$$d_2 = d_1\frac{Q_2}{Q_1} = 9 \times \frac{85}{125} = 6.12\ \mathrm{in.}$$

2. **Head** ($H \propto d^2$):
$$H_2 = 85\left(\frac{6.12}{9}\right)^2 = 39.3\ \mathrm{ft}$$

3. **Power** ($\mathrm{BHP} \propto d^3$):
$$\mathrm{BHP_2} = 6.2\left(\frac{6.12}{9}\right)^3 = 1.95\ \mathrm{bhp}$$
→ a 2 or 3 hp motor.

4. **Comments:** the head falls to 39 ft, so check that the system needs only ~39 ft at 85 gpm, otherwise the pump will not deliver 85 gpm (it operates where its new curve meets the system curve). A 32 % cut exceeds the ~20 % for which the laws are reliable, and the efficiency will drop; a smaller pump may be better. An impeller can be cut but not enlarged.

**Result:** $d_2 ≈ 6.1$ in., $H_2 ≈ 39$ ft, $\mathrm{BHP}_2 ≈ 1.9$ hp.

> Book check: Ludwig rounds to 6.1 in. and gets 39.0 ft and 1.93 bhp.`,
          answer: String.raw`d₂ = 9(85/125) = 6.1 in.; H₂ = 85(6.12/9)² ≈ 39 ft; BHP₂ = 6.2(6.12/9)³ ≈ 1.9–2.0 hp (2–3 hp motor).` },
        { id: "practice-pumps-P7b", label: "(b)", marks: "", topic: "pumps",
          sub: "Affinity laws: changing pump speed from 1750 to 1450 and 1150 rpm", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Eqs. (3-20)–(3-22) and Fig. 3-55 (p. 202)`,
          text: String.raw`A pump at 1750 rpm delivers 204 gal/min at 64 ft head and takes 6.75 bhp at its best-efficiency point. Predict the corresponding point at 1450 rpm and at 1150 rpm. Within what limits are these predictions valid?`,
          solution: String.raw`**Given:** $n_1 = 1750$ rpm, $Q_1 = 204$ gpm, $H_1 = 64$ ft, $\mathrm{BHP}_1 = 6.75$.

**Assumptions:** same impeller, geometrically similar (constant-efficiency) points: $Q \propto n$, $H \propto n^2$, BHP $\propto n^3$.

1. **1450 rpm** ($n_2/n_1 = 0.8286$):
$$Q_2 = 204(0.8286) = 169\ \mathrm{gpm},\quad H_2 = 64(0.8286)^2 = 43.9\ \mathrm{ft},\quad \mathrm{BHP}_2 = 6.75(0.8286)^3 = 3.84$$

2. **1150 rpm** ($n_2/n_1 = 0.6571$):
$$Q_2 = 134\ \mathrm{gpm},\quad H_2 = 27.6\ \mathrm{ft},\quad \mathrm{BHP}_2 = 1.92$$

3. **Check of efficiency:** water horsepower at 1750 rpm is $QH/3960 = 204(64)/3960 = 3.30$ hp, so $\eta = 3.30/6.75 = 49$ %; the same efficiency holds at the scaled points (they lie on a parabola $H \propto Q^2$ through the origin).

4. **Validity:** the laws hold well for speed ratios up to about 1.5–2; they fail when NPSH becomes limiting (NPSHR rises roughly with $n^2$), and the scaled point is not the actual operating point unless the system curve is a parabola through the origin (no static head).

**Result:** 1450 rpm: 169 gpm, 44 ft, 3.84 bhp; 1150 rpm: 134 gpm, 27.6 ft, 1.92 bhp.

> Book check: Ludwig, Fig. 3-55: 169 gpm, 44 ft, 3.84 bhp at 1450 rpm.`,
          answer: String.raw`1450 rpm: 169 gpm, 43.9 ft, 3.84 bhp; 1150 rpm: 134 gpm, 27.6 ft, 1.92 bhp (Q ∝ n, H ∝ n², P ∝ n³).` } ] },

    { id: "practice-pumps-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P8", label: "", marks: "", topic: "pumps",
        sub: "Starting NPSH: acceleration head in a long suction line", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Lieberman, Understanding Process Equipment for Operators and Engineers, Ch. 30 "Centrifugal pumps: required starting NPSH" (example by E. Lieberman)`,
        text: String.raw`A centrifugal pump takes water ($\rho$ = 62 lb/ft³) from a tank through a 100 ft long, 8-in. diameter suction line which is full but stagnant before start-up. The operator opens the discharge valve so that the line velocity rises uniformly from 0 to 10 ft/s in 100 s. (a) Calculate the extra suction head ("starting NPSH") needed to accelerate the liquid. (b) How does it change if the valve is opened in 10 s or 1 s, and how fast may the valve be opened if this allowance must not exceed 2 ft? (c) List practical ways to avoid cavitation during start-up.`,
        solution: String.raw`**Given:** $L = 100$ ft, $D = 8$ in., $\rho = 62\ \mathrm{lb/ft^3}$, $\Delta V = 10$ ft/s in $t = 100$ s.

**Find:** pressure (head) needed to accelerate the liquid column.

1. **Mass in the line:** $A = (\pi/4)(8/12)^2 = 0.349\ \mathrm{ft^2}$ (50.3 in.²); volume 34.9 ft³; mass $= 62 \times 34.9 = 2164$ lb.

2. **Accelerating force:** $a = 10/100 = 0.1\ \mathrm{ft/s^2}$;
$$F = \frac{ma}{g_c} = \frac{2164 \times 0.1}{32.17} = 6.73\ \mathrm{lbf}$$

3. **Pressure and head:** $\Delta p = 6.73/50.3 = 0.134$ psi, i.e.
$$h_a = \frac{\Delta p}{\rho} = \frac{0.134(144)}{62} = 0.31\ \mathrm{ft}\qquad\left(\text{same as } h_a = \frac{La}{g} = \frac{100 \times 0.1}{32.17}\right)$$

4. **(b) Faster opening** ($h_a = LV/(g t)$):

| opening time, s | 100 | 10 | 5 | 1 |
|---|---|---|---|---|
| $h_a$, ft | 0.31 | 3.1 | 6.2 | 31 |

For $h_a \le 2$ ft: $t \ge LV/(2g) = 100(10)/(2 \times 32.17) = 15.5$ s. A long suction line with a fast-opening valve can easily take more NPSH than the pump curve shows.

5. **(c) Practical measures** (Lieberman): watch the suction pressure (or the idle spare pump's discharge gauge) and open the discharge valve as fast as the suction pressure allows; raise the suction drum pressure a few psi just before start; run at a high drum level; subcool the suction (cold-water spray, subcooled slip-stream); keep suction screens clean; increase flow slowly in service; ramp turbine speed slowly; design with extra NPSHA (vessel elevation), since the extra margin also protects the mechanical seal.

> Book check (please note): the book computes $2164 \times 0.1 = 216$ and treats it as lbf, giving 4.4 psi ≈ 10 ft. That number is in poundals (lb·ft/s²); dividing by $g_c = 32.17$ gives 6.7 lbf, 0.13 psi and 0.31 ft. Lieberman's conclusion (allow for starting NPSH on long suction lines) is right, but his 10 ft corresponds to opening the valve in about 3 s, not 100 s.

**Result:** $h_a$ ≈ 0.31 ft for a 100 s ramp; 3.1 ft (10 s), 31 ft (1 s); open over ≥ 15.5 s to keep it under 2 ft.`,
        answer: String.raw`F = 2164(0.1)/32.17 = 6.7 lbf → 0.134 psi → h_a = 0.31 ft (=La/g); 3.1 ft in 10 s, 31 ft in 1 s; t ≥ 15.5 s for 2 ft. (Book's 10 ft omits g_c.)` } ] },

    { id: "practice-pumps-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P9", label: "", marks: "15", topic: "pumps",
        sub: "Specific speed and suction specific speed: pump type for four duties", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; method of Ludwig Eq. (3-11), Fig. 3-47 and Foust Table 21.1 / Fig. 21.19 (as attached in past papers)`,
        text: String.raw`Standard motor speeds of 1150, 1750 and 3500 rpm are available. Recommend a pump type (and speed) for each duty, justifying with specific speed where relevant:

(i) 1200 gal/min of cooling water against 180 ft; NPSH available 15 ft.

(ii) 9000 gal/min of river water against 25 ft.

(iii) 50 gal/min of boiler feed water against 1500 ft.

(iv) 15 gal/min of a viscous polymer solution that must be metered at 300 psi.

Define suction specific speed and use it to decide the speed in (i) (take its safe upper limit as about 9000).`,
        solution: String.raw`**Given:** four duties; $N_s = n\sqrt Q/H^{3/4}$ (rpm, gal/min, ft); impeller fields: radial up to ≈ 4200, mixed 4200–9000, axial above 9000 (Foust Fig. 21.19).

1. **Specific speeds:**

| duty | 1150 rpm | 1750 rpm | 3500 rpm |
|---|---|---|---|
| (i) 1200 gpm, 180 ft | 811 | 1234 | 2467 |
| (ii) 9000 gpm, 25 ft | 9758 | 14,850 | 29,700 |
| (iii) 50 gpm, 1500 ft (one stage) | 34 | 51 | 103 |

2. **Suction specific speed:** $S = n\sqrt Q/\mathrm{NPSHR}^{3/4}$ (single-suction eye). It plays for the inlet the role $N_s$ plays for the whole pump; above about 9000–11,000 the impeller eye is prone to cavitation and recirculation damage. For (i) with NPSHA = 15 ft (so NPSHR must be ≤ ~12 ft):
- at 3500 rpm: $S = 3500\sqrt{1200}/15^{0.75} = 15{,}900$ (would need NPSHR ≈ 32 ft for $S$ = 9000) ✗
- at 1750 rpm: $S = 7950$ (needs NPSHR ≈ 12.7 ft for $S$ = 9000) ✓

3. **Recommendations:**
- **(i)** single-stage radial-flow centrifugal (end-suction or double-suction split case) at **1750 rpm**, $N_s$ ≈ 1230, impeller in the high-efficiency radial range; water power $1200(180)/3960 = 54.5$ hp, about 68 bhp at 80 %, 75 hp motor. 3500 rpm is ruled out by NPSH.
- **(ii)** $N_s$ ≈ 9800 even at 1150 rpm: an **axial-flow (propeller) pump**, vertical, submerged in the river; high capacity, low head (Foust: propeller up to 60 ft, 100,000 gpm).
- **(iii)** single-stage $N_s$ ≈ 100 is far below any efficient impeller. Even 6 stages at 3500 rpm (250 ft each) give $N_s$ ≈ 390, still low. Use a **reciprocating plunger pump** (high pressure, small flow, clean liquid), or a high-speed multistage diffuser pump; the plunger pump is the efficient choice for 50 gpm at ~650 psi.
- **(iv)** viscous, metered, 300 psi, small flow: a **rotary positive-displacement (gear, screw or lobe) pump** or a metering plunger/diaphragm pump; centrifugal pumps lose head and efficiency badly with viscosity and cannot meter.

**Result:** (i) radial centrifugal, 1750 rpm ($N_s$ 1230, $S$ 7950); (ii) axial-flow propeller ($N_s$ ≈ 9800 at 1150 rpm); (iii) reciprocating plunger (centrifugal $N_s$ < 400); (iv) rotary gear/screw or metering pump.`,
        answer: String.raw`(i) N_s = 1234 at 1750 rpm → radial centrifugal; S = 7950 OK (15,900 at 3500 rpm too high). (ii) N_s ≈ 9760 at 1150 → axial propeller. (iii) N_s ≈ 34–103 → plunger (reciprocating) pump. (iv) rotary PD/metering pump.` } ] },

    { id: "practice-pumps-P10", q: 10, section: "S", compulsory: false,
      stem: String.raw`A centrifugal pump running at 1750 rpm has the following water characteristics (head and efficiency vs capacity):

| Q, gal/min | 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 |
|---|---|---|---|---|---|---|---|---|
| H, ft | 115 | 113.4 | 108.6 | 100.6 | 89.4 | 75.0 | 57.4 | 36.6 |
| η, % | 0 | 28.1 | 49.9 | 65.5 | 74.9 | 78.0 | 74.9 | 65.5 |

(the head data fit $H = 115 - 1.6\times10^{-4}Q^2$). It pumps water through a system whose static head is 40 ft and whose friction is 45 ft at 500 gal/min.`,
      parts: [ { id: "practice-pumps-P10", label: "", marks: "20", topic: "pumps",
        sub: "Pump curve and system curve: operating point, throttling vs speed control", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; MSH ch. 8 (power, affinity laws), Ludwig pp. 197–203 (system curves, affinity laws)`,
        text: String.raw`(a) Find the operating point and the brake horsepower.

(b) The flow must be reduced to 350 gal/min. Find the brake horsepower if this is done (i) by throttling a discharge valve, (ii) by reducing the pump speed (variable-speed drive). Find the required speed.

(c) Sketch the curves and comment on the energy saving (8000 h/yr operation).`,
        solution: String.raw`**Given:** pump $H_p = 115 - 1.6\times10^{-4}Q^2$; system $H_s = 40 + kQ^2$ with $k = 45/500^2 = 1.8\times10^{-4}$; water (SpGr 1).

**Assumptions:** BHP = $QH/(3960\eta)$; efficiency read from the table (smooth curve, BEP 500 gpm, 78 %); affinity laws for the speed change.

1. **(a) Operating point:** $115 - 1.6\times10^{-4}Q^2 = 40 + 1.8\times10^{-4}Q^2$
$$Q = \sqrt{75/3.4\times10^{-4}} = 470\ \mathrm{gpm},\qquad H = 40 + 1.8\times10^{-4}(470)^2 = 79.7\ \mathrm{ft}$$
$\eta(470) ≈ 77.7$ %, so
$$\mathrm{BHP} = \frac{470 \times 79.7}{3960 \times 0.777} = 12.2\ \mathrm{hp}$$

2. **(b)(i) Throttling:** the pump stays on its curve: $H = 115 - 1.6\times10^{-4}(350)^2 = 95.4$ ft, but the system needs only $40 + 1.8\times10^{-4}(350)^2 = 62.1$ ft; the valve burns $95.4 - 62.1 = 33.3$ ft. $\eta(350) ≈ 71.0$ %:
$$\mathrm{BHP} = \frac{350 \times 95.4}{3960 \times 0.710} = 11.9\ \mathrm{hp}$$

3. **(b)(ii) Speed reduction:** with speed ratio $s = n/1750$ the pump curve becomes $H = 115s^2 - 1.6\times10^{-4}Q^2$. Set it through (350, 62.1):
$$s^2 = \frac{62.1 + 1.6\times10^{-4}(350)^2}{115} = 0.710,\quad s = 0.843,\quad n = 1475\ \mathrm{rpm}$$
The point (350 gpm, 62.1 ft) corresponds on the 1750 rpm curve to $Q = 350/0.843 = 415$ gpm, where $\eta ≈ 75.8$ % (similar points keep their efficiency):
$$\mathrm{BHP} = \frac{350 \times 62.1}{3960 \times 0.758} = 7.24\ \mathrm{hp}$$

4. **(c) Comparison:** throttling saves almost nothing (12.2 → 11.9 hp) because the head rises as flow falls; speed control needs 7.2 hp, **4.6 hp (3.5 kW, 39 %) less** than throttling, about 27,700 kWh per year at 8000 h. Speed control loses its advantage when static head is a large part of the total (the system curve then cuts the reduced-speed curve in its low-efficiency region), and too low a speed may not overcome the static head at all ($115s^2 > 40$ requires $n > 1030$ rpm).

![Pump curves at 1750 and 1475 rpm, system curve and throttled system curve with operating points A, B and C](fig/practice-pumps-P10-sol.svg)

**Result:** (a) 470 gpm, 79.7 ft, 12.2 bhp; (b) throttled 11.9 bhp; speed reduced to ≈ 1475 rpm, 7.2 bhp; saving ≈ 4.6 hp.`,
        answer: String.raw`(a) Q = 470 gpm, H = 79.7 ft, ≈ 12.2 bhp. (b) throttle: 95.4 ft, 11.9 bhp; speed: n ≈ 1475 rpm, 62.1 ft, 7.2 bhp → saves ≈ 4.6 hp (39 %, ≈ 28 MWh/yr).` } ] },

    { id: "practice-pumps-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P11", label: "", marks: "15", topic: "pumps",
        sub: "Two identical pumps in series and in parallel on two systems", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; pump-curve combination (Ludwig pp. 197–210, "operating two pumps in parallel")`,
        text: String.raw`A pump has the characteristic $H = 100 - 4\times10^{-4}Q^2$ (H in ft, Q in gal/min). Two such pumps are available. Determine the flow delivered by one pump, two pumps in parallel and two pumps in series into

(a) system A: $H = 5 + 1.5\times10^{-3}Q^2$ (long pipeline, mostly friction);

(b) system B: $H = 60 + 5\times10^{-5}Q^2$ (high static lift, short line).

State which arrangement suits each system and why. Sketch the curves.`,
        solution: String.raw`**Given:** one pump $H = 100 - 4\times10^{-4}Q^2$. Combined curves: **parallel** (same head, flows add) $H = 100 - 4\times10^{-4}(Q/2)^2 = 100 - 1\times10^{-4}Q^2$; **series** (same flow, heads add) $H = 200 - 8\times10^{-4}Q^2$.

1. **System A** ($5 + 1.5\times10^{-3}Q^2$):
- one pump: $95 = 1.9\times10^{-3}Q^2$ → $Q = 224$ gpm, H = 80 ft
- parallel: $95 = 1.6\times10^{-3}Q^2$ → $Q = 244$ gpm, H = 94 ft (+9 %)
- series: $195 = 2.3\times10^{-3}Q^2$ → $Q = 291$ gpm, H = 132 ft (+30 %)

2. **System B** ($60 + 5\times10^{-5}Q^2$):
- one pump: $40 = 4.5\times10^{-4}Q^2$ → $Q = 298$ gpm, H = 64 ft
- parallel: $40 = 1.5\times10^{-4}Q^2$ → $Q = 516$ gpm, H = 73 ft (+73 %)
- series: $140 = 8.5\times10^{-4}Q^2$ → $Q = 406$ gpm, H = 68 ft (+36 %)

3. **Conclusions:**
- A steep (friction-dominated) system needs more *head* to push more flow: **series** wins. Parallel pumps run back up their curves toward shutoff and add little.
- A flat (static-dominated) system needs the same head at any flow: **parallel** wins; it nearly doubles capacity.
- Parallel pumps should have similar shutoff heads (or the weaker one is pushed to shutoff); each needs its own check valve and minimum-flow protection. In series the second pump's casing and seal see the first pump's discharge pressure.

![One pump, two in parallel and two in series with a friction-dominated system A and a static-dominated system B](fig/practice-pumps-P11-sol.svg)

**Result:** A: 224 / 244 (parallel) / 291 gpm (series) → series; B: 298 / 516 (parallel) / 406 gpm (series) → parallel.`,
        answer: String.raw`System A: single 224, parallel 244, series 291 gpm → series. System B: single 298, parallel 516, series 406 gpm → parallel.` } ] },

    { id: "practice-pumps-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P12", label: "", marks: "15", topic: "pumps",
        sub: "Multistage boiler-feed pump: number of stages, specific speed and power", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; MSH 5th ed. p. 203 (multistage centrifugal pumps), Ludwig Eq. (3-11), (3-15)`,
        text: String.raw`Boiler feed water at 200°F (SpGr 0.963) is to be pumped at 250 gal/min from a deaerator at 15 psig to a boiler drum at 1200 psig. Allow 60 ft for friction, control valve and elevation. The pump runs at 3550 rpm.

(a) Calculate the total head and explain why a multistage pump is needed.

(b) Find the head per stage and specific speed per stage for 6, 8, 10, 12 and 14 stages, and recommend a number of stages if the head per stage is limited to about 400 ft and the specific speed should not fall below about 650.

(c) Estimate the brake power at 70 % efficiency.`,
        solution: String.raw`**Given:** $Q = 250$ gpm, $\Delta p = 1200 - 15 = 1185$ psi, SpGr 0.963, other losses 60 ft, $n = 3550$ rpm.

1. **(a) Total head:**
$$H = \frac{1185 \times 2.31}{0.963} + 60 = 2843 + 60 = 2903\ \mathrm{ft}$$
A single impeller is limited by its tip speed: about 100–650 ft per stage (MSH: high-energy pumps give > 650 ft, but above ~100 ft impellers are usually put in series on one shaft). 2900 ft would need an impossible tip speed and a specific speed of about 70, so the duty requires a **multistage pump**: the discharge of each stage feeds the next, the heads add, the flow is the same.

2. **(b) Per-stage values** ($N_s = 3550\sqrt{250}/H_{st}^{0.75}$, specific speed is defined per stage):

| stages | 6 | 8 | 10 | 12 | 14 |
|---|---|---|---|---|---|
| head/stage, ft | 484 | 363 | 290 | 242 | 207 |
| $N_s$ | 544 | 675 | 798 | 915 | 1027 |

6 stages exceed 400 ft/stage; **8 stages** (363 ft, $N_s$ ≈ 675) is the minimum meeting both limits; 10 stages ($N_s$ ≈ 800) would give a slightly better efficiency at the cost of a longer rotor. Recommend an 8–10 stage horizontal barrel (double-casing) diffuser pump with opposed impellers or a balance drum to cancel axial thrust.

3. **(c) Brake power:**
$$\mathrm{BHP} = \frac{QH(\mathrm{SpGr})}{3960\,\eta} = \frac{250 \times 2903 \times 0.963}{3960 \times 0.70} = 252\ \mathrm{hp}\ (188\ \mathrm{kW})$$
→ a 300 hp motor (or steam turbine). Also provide a minimum-flow recirculation line (hot water near saturation heats up quickly at low flow) and check NPSH at the first stage only.

**Result:** H ≈ 2900 ft; 8 stages (≈ 363 ft/stage, $N_s$ ≈ 675) or 10; ≈ 252 bhp.`,
        answer: String.raw`H = 1185(2.31)/0.963 + 60 ≈ 2903 ft; 8 stages → 363 ft/stage, N_s ≈ 675 (10 stages: 290 ft, 798); BHP ≈ 252 hp (188 kW) at 70 %.` } ] },

    { id: "practice-pumps-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P13", label: "", marks: "15", topic: "pumps",
        sub: "Hot-water NPSH in SI units, cavitation at high flow and remedies", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; MSH Eq. (8.7); Lieberman Ch. 30; water properties Çengel Table A-9`,
        text: String.raw`Water at 80°C ($\rho$ = 971.8 kg/m³, $p_v$ = 47.39 kPa) is pumped from an open tank at sea level. The pump centerline is 1.5 m above the minimum tank level and the suction friction is 0.8 m at the design flow. The pump needs NPSHR = 3.0 m at the design flow and 4.5 m at 120 % of design flow.

(a) Find NPSHA at design flow and at 120 % flow and say whether the pump will cavitate.

(b) How must the installation be changed to keep a margin of 1 m at 120 % flow? Give the required tank elevation, and alternatively the maximum water temperature (vapor pressure) if the elevation cannot be changed.

(c) Describe the symptoms and damage of cavitation.`,
        solution: String.raw`**Given:** $p_{a'} = 101.325$ kPa, $p_v = 47.39$ kPa, $\rho = 971.8\ \mathrm{kg/m^3}$, $Z_a = 1.5$ m (lift), $h_{fs} = 0.8$ m at design.

1. **Pressure head above vapor pressure:**
$$\frac{p_{a'} - p_v}{\rho g} = \frac{(101.325 - 47.39)\times10^3}{971.8 \times 9.81} = 5.66\ \mathrm{m}$$

2. **(a) NPSHA** (Eq. 8.7): design flow $5.66 - 1.5 - 0.8 = 3.36$ m against NPSHR 3.0 m: margin only 0.36 m (marginal cavitation likely; recommended margin ≥ 0.6–1 m). At 120 % flow friction rises with $Q^2$: $0.8(1.2)^2 = 1.15$ m → NPSHA = $5.66 - 1.5 - 1.15 = 3.01$ m < NPSHR 4.5 m → **the pump cavitates**.

3. **(b) Required elevation:** NPSHA must be $4.5 + 1.0 = 5.5$ m at 120 % flow:
$$5.66 - Z_a - 1.15 = 5.5 \Rightarrow Z_a = -0.99\ \mathrm{m}$$
i.e. a **flooded suction**: the minimum tank level about 1.0 m *above* the pump centerline (2.5 m higher than now). Alternative: keep the 1.5 m lift and lower the vapor pressure:
$$p_v \le 101.325 - (5.5 + 1.5 + 1.15)(971.8)(9.81)/1000 = 23.6\ \mathrm{kPa}$$
which means cooling the water to about 63°C (Çengel A-9: $p_{sat}$ = 23.6 kPa near 63.5°C). Other measures: larger, shorter suction line (less friction), a low-NPSH pump (larger eye, inducer, lower speed), or limit the flow.

4. **(c) Symptoms:** vapor bubbles form where the pressure at the impeller eye falls below $p_v$ and collapse violently as pressure rises along the vane: crackling "gravel" noise, vibration, erratic and reduced discharge pressure and flow (the head curve "breaks" down), pitting erosion of the vane inlets, and seal and bearing damage. Lieberman notes that "marginal" cavitation can be quiet and steady (the pump simply runs on a lower curve) yet still vaporizes seal-flush liquid and wrecks mechanical seals.

**Result:** NPSHA = 3.36 m (design, marginal) and 3.0 m at 120 % (< 4.5 m, cavitates); need tank ≥ 1.0 m above the pump, or water ≤ ~63°C.`,
        answer: String.raw`(p−p_v)/ρg = 5.66 m; NPSHA = 3.36 m (design), 3.01 m at 120 % < 4.5 m → cavitates. Need Z = −0.99 m (flooded suction, +2.5 m) or p_v ≤ 23.6 kPa (≈ 63°C).` } ] },

    { id: "practice-pumps-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P14", label: "", marks: "15", topic: "pumps",
        sub: "Euler head of an ideal centrifugal pump from the outlet velocity triangle", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; MSH 5th ed. Eqs. (8.10)–(8.21), Fig. 8.10`,
        text: String.raw`(a) Starting from the angular-momentum balance on the impeller, derive the head–flow relation of an ideal centrifugal pump, $\Delta H_r = u_2(u_2 - q_r/A_p\tan\beta_2)/g$, and explain why backward-curved vanes are used. Sketch the outlet velocity triangle.

(b) An impeller of 250 mm outlet diameter and 20 mm outlet width with $\beta_2 = 30°$ runs at 1750 rpm and delivers 0.030 m³/s of water. Find the ideal head, the shutoff head and the ideal power. If the actual head is 70 % of ideal, what is the developed head?`,
        solution: String.raw`### (a) Derivation

1. **Torque from angular momentum:** liquid enters the eye with no whirl (radial entry, $V_{u1} = 0$) and leaves at radius $r_2$ with tangential velocity $V_{u2}$. Torque = rate of change of angular momentum:
$$T g_c = \dot m(r_2V_{u2} - r_1V_{u1}) = \dot m r_2V_{u2}$$

2. **Power and head:** $P = T\omega$, and for an ideal pump $P = \dot m\Delta H_r$ (Eq. 8.5), so with $u_2 = \omega r_2$:
$$\Delta H_r = \frac{\omega r_2V_{u2}}{g_c} = \frac{u_2V_{u2}}{g_c}\quad(\text{per unit mass; divide by } g \text{ for head in m})$$

3. **Velocity triangle:** the absolute velocity $V_2$ is the vector sum of the tip speed $u_2$ and the velocity $v_2$ relative to the vane, which leaves at the vane angle $\beta_2$ (measured from the tangent, backward). The radial component is $V_{r2}$, so $V_{u2} = u_2 - V_{r2}/\tan\beta_2$.

4. **Flow:** $q_r = V_{r2}A_p$ with $A_p = \pi D_2 b_2$, hence
$$\Delta H_r = \frac{u_2\left(u_2 - q_r/(A_p\tan\beta_2)\right)}{g}$$
a straight line in $q_r$: intercept $u_2^2/g$ at shutoff, slope $-u_2/(gA_p\tan\beta_2)$.

5. **Vane angle:** for $\beta_2 < 90°$ (backward-curved) the slope is negative: head falls as flow rises, which gives a stable intersection with a rising system curve and a non-overloading power curve. $\beta_2 = 90°$ (radial) gives a flat line; $\beta_2 > 90°$ (forward-curved) a rising line, unstable in a pump system (two possible intersections, surging). Fans may use forward blades; pumps do not.

![Outlet velocity triangle: tip speed u2, relative velocity along the vane at angle beta2, absolute velocity V2 and its components](fig/practice-pumps-P14-sol.svg)

### (b) Numerical

1. $\omega = 2\pi(1750)/60 = 183.3$ rad/s; $u_2 = 183.3(0.125) = 22.9$ m/s.
2. $A_p = \pi(0.25)(0.020) = 0.01571\ \mathrm{m^2}$; $V_{r2} = 0.030/0.01571 = 1.91$ m/s.
3. $V_{u2} = 22.9 - 1.91/\tan30° = 22.9 - 3.31 = 19.6$ m/s.
4. Ideal head: $\Delta H_r = 22.9(19.6)/9.81 = 45.8$ m; shutoff head $u_2^2/g = 53.5$ m.
5. Ideal power: $\rho gq\Delta H_r = 1000(9.81)(0.030)(45.8) = 13.5$ kW.
6. Actual head ≈ $0.70(45.8) = 32.0$ m; the losses are circulatory (slip) flow, which reduces $V_{u2}$, plus friction and shock losses (MSH "loss of head; circulatory flow").

**Result:** ideal head 45.8 m, shutoff 53.5 m, ideal power 13.5 kW, actual head ≈ 32 m.`,
        answer: String.raw`ΔH_r = u₂V_u2/g with V_u2 = u₂ − q/(A_p tan β₂); u₂ = 22.9 m/s, V_r2 = 1.91, V_u2 = 19.6 m/s → 45.8 m ideal (53.5 m at shutoff), 13.5 kW, ≈ 32 m actual.` } ] },

    { id: "practice-pumps-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P15", label: "", marks: "12", topic: "pumps",
        sub: "Priming, air binding, and why centrifugal pumps push rather than suck", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; MSH 5th ed. p. 204 (pump priming); Lieberman Ch. 30 ("centrifugal pumps push, they do not suck")`,
        text: String.raw`(a) A centrifugal pump develops 30 m of head. Calculate the pressure rise when it is full of water and when it is full of air (1.2 kg/m³), and use the result to explain air binding and the need for priming.

(b) Why can a positive-displacement pump start with an empty suction line but a centrifugal pump cannot? List three ways of priming a centrifugal pump.

(c) Explain Lieberman's statement "centrifugal pumps push, they do not suck".`,
        solution: String.raw`1. **(a) Pressure rise:** the developed head depends only on impeller speed, diameter and vane angle (Eq. 8.21), not on the fluid. The pressure rise is $\rho g\Delta H$:
- water: $1000 \times 9.81 \times 30 = 294$ kPa (2.9 atm)
- air: $1.2 \times 9.81 \times 30 = 0.35$ kPa (0.0035 atm), enough to lift water only $0.35/9.81 = 0.036$ m

So a pump whose casing is full of air (**air-bound**) can neither draw liquid up an empty suction line nor push it along a full discharge line; it delivers nothing until the air is replaced by liquid (**priming**). Vapor or gas pockets that collect in the casing during operation (gas-laden liquids, high points in the suction) cause the same loss of flow.

2. **(b) Positive-displacement pumps** trap a fixed volume each stroke or revolution; they can compress gas to the discharge pressure and draw a vacuum on the suction, so they are self-priming (MSH). A centrifugal pump only imparts velocity; with gas it generates negligible pressure.

**Priming methods:**
- flooded suction (tank above the pump) and venting the casing before start;
- a foot valve in the suction line and filling the casing from the discharge or an auxiliary priming tank;
- an ejector or vacuum pump drawing liquid into the casing;
- a self-priming centrifugal design (built-in priming chamber that recirculates liquid until air is expelled).

3. **(c) "Push, not suck":** the impeller can only lower the pressure at its eye a limited amount; the liquid is pushed into the eye by the pressure on the suction vessel surface plus static head. If that pressure, minus friction and acceleration losses, falls below the vapor pressure (NPSHA < NPSHR), the liquid flashes. Hence the suction pressure, not the pump, decides whether liquid reaches the impeller; long suction lines also need energy (from static head) to accelerate the liquid at start-up (starting NPSH).`,
        answer: String.raw`Water: Δp = 294 kPa; air: 0.35 kPa (lifts water 3.6 cm) → air-bound pump delivers nothing until primed (flooded suction + vent, foot valve, vacuum/ejector, self-priming design). PD pumps compress gas → self-priming. Liquid is pushed into the eye by suction pressure (NPSH).` } ] },

    { id: "practice-pumps-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P16", label: "", marks: "15", topic: "pumps",
        sub: "Duplex double-acting reciprocating pump: capacity, power and relief", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; MSH 5th ed. pp. 193–194 (reciprocating pumps), Crowl & Louvar relief scenario for a dead-headed PD pump`,
        text: String.raw`A duplex double-acting piston pump has cylinders of 150 mm bore and 250 mm stroke, piston rods of 40 mm diameter, and runs at 60 rpm with a volumetric efficiency of 95 %. It raises the pressure of the liquid by 20 bar with a mechanical efficiency of 85 %.

(a) Calculate the delivered capacity (m³/h and gal/min) and the power input.

(b) Compare the characteristic (head–capacity) curve of this pump with that of a centrifugal pump and explain how the flow of each is controlled.

(c) Why must a relief valve be fitted on the discharge of this pump, upstream of any block valve?`,
        solution: String.raw`**Given:** $D = 0.150$ m, $L = 0.250$ m, rod $d = 0.040$ m, 2 cylinders, double acting, $n = 60$ rpm, $\eta_v = 0.95$, $\Delta p = 2.0$ MPa, $\eta_m = 0.85$.

1. **Displacement per revolution per cylinder:** head end $AL$, crank end $(A - a)L$:
$$A = \frac{\pi}{4}(0.15)^2 = 0.01767\ \mathrm{m^2},\quad a = \frac{\pi}{4}(0.04)^2 = 0.00126\ \mathrm{m^2}$$
$$V_{rev} = (2A - a)L = (0.03534 - 0.00126)(0.25) = 0.008522\ \mathrm{m^3}$$

2. **Capacity:** two cylinders at 1 rev/s: $Q_{th} = 2(0.008522)(1) = 0.01704\ \mathrm{m^3/s}$; delivered $Q = 0.95Q_{th} = 0.01619\ \mathrm{m^3/s} = 58.3\ \mathrm{m^3/h} = 257$ gal/min.

3. **Power:**
$$P = \frac{Q\Delta p}{\eta_m} = \frac{0.01619 \times 2.0\times10^6}{0.85} = 38.1\ \mathrm{kW}$$

4. **(b) Characteristics:**

| | reciprocating (PD) | centrifugal |
|---|---|---|
| H–Q curve | nearly vertical line: Q fixed by speed and displacement, almost independent of discharge pressure (small fall from slip/leakage) | falling curve: Q varies strongly with head |
| pressure limit | set by power and casing/rod strength; rises without limit if the outlet is blocked | limited to the shutoff head |
| efficiency | high (70–90 %), almost independent of head | peaks at BEP only |
| flow | pulsating (dampeners needed) | steady |
| flow control | speed or stroke length, or bypass (spill-back) to suction; never throttle the discharge | throttling the discharge valve, speed, or bypass |

5. **(c) Relief valve:** a PD pump delivers its displacement against any pressure. If the discharge is blocked (closed valve, plugged line) the pressure rises until the pipe, casing or driver fails ("dead-headed" PD pump is a standard relief scenario, C&L Ex. 8-2 PSV-2). A relief valve (liquid service, sized for full pump capacity, set below the weakest component's rating) is installed between the pump and the first block valve, usually discharging back to the suction vessel.

**Result:** 58.3 m³/h (257 gpm); 38.1 kW.`,
        answer: String.raw`V_rev = (2A − a)L = 8.52 L per cylinder; Q = 0.95(2)(8.52 L)(1 s⁻¹) = 0.0162 m³/s = 58.3 m³/h (257 gpm); P = 0.0162(2 MPa)/0.85 = 38.1 kW. PD → vertical H–Q, needs discharge relief.` } ] },

    { id: "practice-pumps-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-pumps-P17", label: "", marks: "20", topic: "pumps",
        sub: "Filling the process data of a centrifugal pump specification sheet", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; Ludwig Vol. 1, 3rd ed., Example 3-19 and Fig. 3-61 (centrifugal pump specification sheet), pp. 209–210`,
        text: String.raw`A centrifugal pump is to transfer 20 % caustic soda (SpGr 1.22, 40°C, vapor pressure 6 kPa abs, viscosity 1.8 cP) at a normal rate of 18 m³/h from an atmospheric storage tank to a reactor at 350 kPa gauge. The minimum tank level is 3.0 m above the pump centerline; suction friction is 5 kPa; the reactor inlet is 12 m above the pump and the discharge friction plus control valve is 60 kPa.

(a) Calculate the rated capacity (10 % margin), suction and discharge pressures, differential pressure and head, NPSH available, hydraulic power and an estimate of brake power and motor size.

(b) Show how these and the other entries of the specification sheet would be filled in (service, liquid, construction materials, driver), stating what the process engineer supplies and what the manufacturer supplies.`,
        solution: String.raw`**Given:** $\rho = 1220\ \mathrm{kg/m^3}$, normal $Q = 18\ \mathrm{m^3/h}$, $p_v = 6$ kPa, tank at 101.3 kPa, $S = +3.0$ m, suction friction 5 kPa, reactor 350 kPag, elevation 12 m, discharge losses 60 kPa.

**Assumptions:** rated capacity = 1.1 × normal (Ludwig adds ~10 %); efficiency of a small pump ≈ 55 %.

1. **Rated capacity:** $1.1 \times 18 = 19.8\ \mathrm{m^3/h}$ (87 US gpm).

2. **Suction pressure (at flange):** $101.3 + 1220(9.81)(3.0)/1000 - 5 = 132.2$ kPa abs.

3. **Discharge pressure:** $101.3 + 350 + 1220(9.81)(12)/1000 + 60 = 654.9$ kPa abs.

4. **Differential pressure and head:** $\Delta p = 654.9 - 132.2 = 522.7$ kPa;
$$H = \frac{\Delta p}{\rho g} = \frac{522.7\times10^3}{1220 \times 9.81} = 43.7\ \mathrm{m}\ (143\ \mathrm{ft})$$

5. **NPSHA:** $(132.2 - 6)\times10^3/(1220 \times 9.81) = 10.5$ m. Specify NPSHR ≤ about 8 m.

6. **Power:** hydraulic $= (19.8/3600)(522.7) = 2.87$ kW; brake ≈ $2.87/0.55 = 5.2$ kW → 7.5 kW motor (non-overloading over the curve). Specific speed at 2900 rpm: $N_s = 2900\sqrt{87}/143^{0.75} ≈ 650$ (US units): radial impeller, single stage, end suction.

7. **(b) Specification sheet entries:**

| block | entry |
|---|---|
| service | caustic transfer, tank T-xx to reactor R-xx; number of units 2 (one spare) |
| liquid | 20 % NaOH, SpGr 1.22 at 40°C, $p_v$ 6 kPa, viscosity 1.8 cP, no solids, corrosive |
| capacity | normal 18, rated 19.8 m³/h |
| pressures | suction 132 kPa abs (31 kPag), discharge 655 kPa abs (554 kPag), differential 523 kPa, head 43.7 m |
| NPSH | available 10.5 m (manufacturer states NPSHR) |
| hydraulic | 2.9 kW; manufacturer quotes efficiency, bhp, impeller size, speed |
| construction | casing and impeller: ductile iron or stainless/Alloy 20 for hot caustic; shaft sleeve stainless; mechanical seal with flush (no packing on caustic); flanged connections, ratings |
| driver | electric motor 7.5 kW, 2900 rpm, TEFC, voltage, area classification |
| remarks | minimum-flow bypass, strainer, materials certificates, tests (hydrotest, performance) |

The **process engineer** supplies service, fluid properties, capacities, suction and discharge conditions, NPSHA, materials limitations and driver/utility data; the **manufacturer** selects the pump size, impeller diameter, speed, NPSHR, efficiency and brake power from its curves.

**Result:** 19.8 m³/h, ΔP = 523 kPa, H = 43.7 m, NPSHA = 10.5 m, 2.9 kW hydraulic, ≈ 5.2 kW brake, 7.5 kW motor.`,
        answer: String.raw`Rated 19.8 m³/h; p_s = 132 kPa a, p_d = 655 kPa a, ΔP = 523 kPa, H = 43.7 m; NPSHA = 10.5 m; P_hyd = 2.9 kW, ≈ 5.2 kW shaft (η 55 %) → 7.5 kW motor.` } ] }
  ]
});
