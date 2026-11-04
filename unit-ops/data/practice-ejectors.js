QB.paper({ year: "Practice", set: "Ejectors & vacuum systems", date: "", marks: 0, practice: true,
  rules: String.raw`Steam-jet ejectors and vacuum systems: the 70°F air-equivalent example from Dr. Sowgath's slides, Ludwig Vol. 1 (3rd ed.) chapter 6 worked examples (pressure units, saturated mixture weight and volume, mixture temperature, surface-condenser load, single- and two-stage size and steam consumption, barometric condenser water, pump-down and evacuation time), and exam-style problems on air-leakage design loads, the ejector pressure–velocity profile, intercondenser cooling-water trouble and the choice of vacuum equipment.`,
  questions: [
    { id: "practice-ejectors-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-ejectors-P1", label: "", marks: "", topic: "ejectors",
        sub: "70°F air equivalent of a hot air–water vapour mixture (Ludwig Ex. 6-2)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Dr. Sowgath, Ejector 2023 slides ("Example 6-2: 70 °F air equivalent for air–water vapor mixture", with Ludwig Figs. 6-17 and 6-18); Ludwig Vol. 1, 3rd ed., Example 6-2 (p. 360). Past paper 2013-14 Q5(b) asked the reverse conversion (Ludwig Ex. 6-3).`,
        text: String.raw`What is the 70°F air equivalent for 500 lb/h of a mixture containing 150 lb/h of air and 350 lb/h of water vapour at 350°F? Use the HEI temperature entrainment-ratio curves (Ludwig Fig. 6-17) and the molecular-weight entrainment-ratio curve (Fig. 6-18). Explain why ejector loads are converted to this basis.`,
        solution: String.raw`**Given:** 150 lb/h air + 350 lb/h steam at 350 °F.

**Find:** equivalent load of dry air at 70 °F.

**Assumptions:** HEI standard curves apply (ratios relative to 70 °F).

1. **Air, temperature correction:** Fig. 6-17, air curve at 350 °F: entrainment ratio = 0.93 (lb air at 70 °F per lb air at 350 °F).
$$\text{70 °F air equivalent} = \frac{150}{0.93} = 161.3\ \mathrm{lb/h}$$

2. **Steam, temperature correction:** Fig. 6-17, steam curve at 350 °F: 0.908.
$$\text{70 °F steam equivalent} = \frac{350}{0.908} = 385.5\ \mathrm{lb/h}$$

3. **Steam, molecular-weight correction:** Fig. 6-18 at M = 18: ratio 0.81 (an ejector entrains less mass of a light gas than of air).
$$\text{70 °F air equivalent of the steam} = \frac{385.5}{0.81} = 475.9\ \mathrm{lb/h}$$

4. **Mixture:** $161.3 + 475.9 = 637.2$ lb/h of 70 °F air.

**Result:** the ejector must be selected for about **637 lb/h of 70 °F air** (Ludwig: 637.3 lb/h ✓).

**Why:** the Heat Exchange Institute rates and tests every ejector on dry air at 70 °F. A hot gas has a larger volume per lb, and a light gas (or steam) has a higher sonic velocity, so the ejector handles a smaller mass; converting the real load to its 70 °F air equivalent lets it be compared directly with the manufacturer's standard performance curve. For the reverse (actual capacity at temperature, from a 70 °F rating) multiply by the ratios instead (past paper 2013-14 Q5(b)).`,
        answer: String.raw`Air 150/0.93 = 161.3; steam 350/0.908 = 385.5 → /0.81 = 475.9; total ≈ 637 lb/h of 70 °F air.` } ] },

    { id: "practice-ejectors-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-ejectors-P2a", label: "(a)", marks: "", topic: "ejectors",
          sub: "Ludwig Ex. 6-1: inches of vacuum to absolute pressure", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 6-1 and "Absolute measurement relations" (p. 350)`,
          text: String.raw`A distillation column is operating at 27.5 inches mercury vacuum, referenced to a 30-inch barometer. This is the pressure at the inlet to the ejector. Due to pressure drop through a vapour condenser and the trays, the column bottoms pressure is 23 inches vacuum. Express both pressures in in. Hg abs, mm Hg abs and psia. Which stage arrangement (Table 6-2) would serve the ejector suction?`,
          solution: String.raw`**Given:** barometer 30 in Hg; ejector inlet 27.5 in Hg vacuum; bottoms 23 in Hg vacuum.

**Find:** absolute pressures; ejector type.

**Assumptions:** 1 in Hg = 25.4 mm Hg = 0.491 psi.

1. **Ejector inlet:** $30 - 27.5 = 2.5$ in Hg abs $= 63.5$ mm Hg abs $= 1.23$ psia.

2. **Column bottoms:** $30 - 23 = 7.0$ in Hg abs $= 177.8$ mm Hg abs $= 3.44$ psia.

3. **Stages:** Table 6-2: the first of two stages (Y) handles 0.5–4 in Hg abs suction; a single atmospheric stage (Z) only 3–12 in Hg. So a **two-stage ejector** (Y + Z, with an intercondenser) is needed for 2.5 in Hg abs.

**Result:** 2.5 in Hg abs (63.5 mm Hg, 1.23 psia) at the ejector; 7.0 in Hg abs (177.8 mm Hg, 3.44 psia) at the bottoms; the column pressure drop is 4.5 in Hg. Always design on absolute pressure: "inches of vacuum" changes with the barometer.`,
          answer: String.raw`Ejector inlet 2.5 in Hg abs = 63.5 mm Hg = 1.23 psia; bottoms 7.0 in Hg abs = 177.8 mm Hg = 3.44 psia; two-stage (Y–Z) ejector.` },
        { id: "practice-ejectors-P2b", label: "(b)", marks: "", topic: "ejectors",
          sub: "Ludwig Ex. 6-7: total weight of air saturated with water vapour", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 6-7 (p. 363), Eq. (6-4)`,
          text: String.raw`Calculate the total weight of mixture to be handled when evacuating 25 pounds per hour of air from 28.5 inches vacuum with a mixture temperature of 80°F. Barometer = 30 inches Hg. The air is saturated with water vapour.`,
          solution: String.raw`**Given:** $W_a = 25$ lb/h air; $p = 30 - 28.5 = 1.5$ in Hg abs; saturated at 80 °F.

**Find:** total mixture rate $W_m$.

**Assumptions:** ideal-gas mixture (Dalton's law); vapour pressure of water at 80 °F = 1.034 in Hg abs.

1. **Partial pressures:** $p_v = 1.034$, $p_a = 1.50 - 1.034 = 0.466$ in Hg.

2. **Vapour carried** (Eq. 6-4, $M_v/M_a = 18/29 = 0.62$):
$$W_v = W_a\frac{M_v}{M_a}\frac{p_v}{p_a} = 25(0.62)\frac{1.034}{0.466} = 34.4\ \mathrm{lb/h}$$

3. **Total:** $W_m = 25 + 34.4 = 59.4$ lb/h.

**Result:** about 59.4 lb/h (Ludwig ✓), more than twice the air alone. At 1.5 in Hg the water vapour is 69% of the total pressure; cooling the mixture before the ejector (precondenser) lowers $p_v$ and cuts the load sharply.`,
          answer: String.raw`p = 1.5 in Hg abs; p_a = 1.5 − 1.034 = 0.466; W_v = 25(0.62)(1.034/0.466) = 34.4 lb/h; total 59.4 lb/h.` } ] },

    { id: "practice-ejectors-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-ejectors-P3a", label: "(a)", marks: "", topic: "ejectors",
          sub: "Ludwig Ex. 6-6: water vapour with 50 lb/h of saturated air", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 6-6 (p. 363) and Fig. 6-20 (air–water vapour mixture data, Dalton's law)`,
          text: String.raw`A system handles 50 lb/h of air that is saturated with water vapour at 3 inch Hg abs and 95°F. Find the total amount of water vapour, using Fig. 6-20 and checking by Dalton's law.`,
          solution: String.raw`**Given:** $W_a = 50$ lb/h, $p = 3$ in Hg abs, saturated at 95 °F.

**Find:** $W_v$ and the total.

1. **Chart:** Fig. 6-20 at 95 °F and 3 in Hg abs: 0.77 lb water vapour per lb air.

2. **Check by Dalton:** $p_v(95\ ^\circ\mathrm{F}) = 1.662$ in Hg, $p_a = 3 - 1.662 = 1.338$ in Hg;
$$\frac{W_v}{W_a} = 0.622\,\frac{1.662}{1.338} = 0.773\ \mathrm{lb/lb}$$

3. **Totals:** $W_v = 50(0.77) = 38.5$ lb/h; mixture 88.5 lb/h.

**Result:** 38.5 lb/h water vapour, 88.5 lb/h total (Ludwig ✓).`,
          answer: String.raw`0.77 lb vapour/lb air (Dalton 0.773) → 38.5 lb/h vapour; 88.5 lb/h total.` },
        { id: "practice-ejectors-P3b", label: "(b)", marks: "", topic: "ejectors",
          sub: "Ludwig Ex. 6-8: volume of a saturated air–water vapour mixture", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 6-8 (p. 363), Eqs. (6-5), (6-6), Table 6-12`,
          text: String.raw`An air–water vapour mixture is saturated with water vapour at 80°F and 2 in. Hg abs total pressure. The air in the mixture is 60 lb/h. Determine the weight of the mixture and its volume at these conditions; check the volume with the steam-table specific volume of water vapour.`,
          solution: String.raw`**Given:** $W_a = 60$ lb/h; $p = 2.0$ in Hg abs; 80 °F, saturated.

**Find:** $W_m$ and volumetric flow.

1. **Partial pressures:** $p_v = 1.034$, $p_a = 0.966$ in Hg.

2. **Weight:** $W_m = 60 + 0.62(60)(1.034/0.966) = 60 + 39.8 = 99.8$ lb/h.

3. **Volume** (all components occupy the same volume; use the air at its partial pressure, Eq. 6-5 with p in in Hg, $R = 1544/29 = 53.3$):
$$V = \frac{W_aRT}{70.73\,p_a} = \frac{60(53.3)(540)}{70.73(0.966)} = 25{,}300\ \mathrm{ft^3/h} = 421\ \mathrm{ft^3/min}$$
(70.73 = 144 × 0.491 converts in Hg to lb/ft².)

4. **Check:** specific volume of saturated vapour at 80 °F = 633.8 ft³/lb: $39.8(633.8) = 25{,}200$ ft³/h ✓.

**Result:** 99.8 lb/h of mixture occupying about 421 ft³/min at 80 °F and 2 in Hg abs (Ludwig ✓). This actual volume, not the weight, fixes the size of a mechanical vacuum pump.`,
          answer: String.raw`W_m = 60 + 39.8 = 99.8 lb/h; V = 60(53.3)(540)/(70.73 × 0.966) ≈ 25,300 ft³/h ≈ 421 cfm (check 39.8 × 633.8 = 25,200 ft³/h).` } ] },

    { id: "practice-ejectors-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-ejectors-P4", label: "", marks: "", topic: "ejectors",
        sub: "Ludwig Ex. 6-4: steam–air mixture temperature in the ejector", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 6-4 (p. 362), HEI mixture-temperature equation`,
        text: String.raw`Steam used to draw air out of a vessel is at 240 psig (255 psia) and 440°F total temperature. Temperature of the air from the vessel: 75°F. Steam flow 475 lb/h; air flow 175 lb/h; ejector suction pressure 1.5 in Hg abs. Calculate the temperature of the mixture in the ejector mixing chamber, using $t_m = (W_sc_{ps}t_s + W_ac_{pa}t_a)/(W_sc_{ps} + W_ac_{pa})$, where $t_s$ is the steam temperature on the downstream side of the nozzle found at constant enthalpy.`,
        solution: String.raw`**Given:** steam 255 psia, 440 °F (saturation 402 °F, so 38 °F superheat), 475 lb/h; air 175 lb/h at 75 °F; suction 1.5 in Hg abs = 0.737 psia.

**Find:** mixture temperature $t_m$.

**Assumptions:** the expansion is treated as isenthalpic (the kinetic energy is recovered as heat on mixing); $c_{ps}$ = 0.45, $c_{pa}$ = 0.24 Btu/lb·°F.

1. **Steam enthalpy** (superheat tables, 255 psia, 440 °F): $h = 1226.5$ Btu/lb (IAPWS: 1227.0).

2. **Steam temperature after the nozzle:** superheated steam at 0.737 psia with $h = 1226.5$ Btu/lb: $t_s = 366$ °F (interpolation in the superheat table; IAPWS 368 °F).

3. **Mixture:**
$$t_m = \frac{475(0.45)(366) + 175(0.24)(75)}{475(0.45) + 175(0.24)} = \frac{78{,}230 + 3150}{213.8 + 42.0} = 318\ ^\circ\mathrm{F}$$

**Result:** about 318 °F (Ludwig ✓). The suction gas is therefore far hotter than the vessel; this temperature (with the air curve of Fig. 6-17) is used when correcting the air load to its 70 °F equivalent.`,
        answer: String.raw`h = 1226.5 Btu/lb → t_s ≈ 366 °F at 1.5 in Hg; t_m = (475·0.45·366 + 175·0.24·75)/(475·0.45 + 175·0.24) ≈ 318 °F.` } ] },

    { id: "practice-ejectors-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-ejectors-P5", label: "", marks: "", topic: "ejectors",
        sub: "Ludwig Ex. 6-9: ejector load for a turbine steam surface condenser", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 6-9 (pp. 367–368), Table 6-6 (HEI air-leakage allowances for surface condensers), Eq. (6-8); Ejector slides: surface-condenser air outlet about 7.5 °F below steam saturation`,
        text: String.raw`A surface condenser condensing the steam from a process turbine drive operates at 1.0 in Hg abs. The condensing load is 85,000 lb/h of steam. What is the capacity of the ejector? (HEI Table 6-6: for 50,001–100,000 lb/h of steam condensed, dry air 5.0 scfm for condensers serving turbines.)`,
        solution: String.raw`**Given:** condenser 1.0 in Hg abs; 85,000 lb/h steam; Table 6-6 → 5.0 scfm dry air.

**Find:** ejector design load.

**Assumptions:** air outlet 7.5 °F below the steam saturation temperature (slide/Ludwig rule); air density 0.075 lb/ft³ at standard conditions.

1. **Saturation temperature** at 1.0 in Hg abs: 79 °F. Air outlet temperature $= 79 - 7.5 = 71.5$ °F; vapour pressure at 71.5 °F = 0.78 in Hg abs.

2. **Vapour per lb air** (Eq. 6-8, $p_a = 1.0 - 0.78 = 0.22$ in Hg):
$$\frac{W_v}{W_a} = 0.62\,\frac{0.78}{0.22} = 2.19\ \mathrm{lb/lb}$$

3. **Air:** $5.0(60)(0.075) = 22.5$ lb/h; vapour $= 2.19(22.5) = 49.4$ lb/h; total $= 71.9$ lb/h.

4. **Design:** Ludwig recommends 1.25 × this value: about 90 lb/h of mixture at 71.5 °F and 1.0 in Hg abs.

**Result:** 71.9 lb/h (22.5 air + 49.4 water vapour), design ≈ 90 lb/h.

> Book check: Ludwig's Eq. (6-8) line prints "(0.62)(0.78)/(1 − 0.78)"; the "1" is the 1.0 in Hg total pressure, so the expression is consistent. The OCR of the text shows "79° − 75 °F"; it is 79 − 7.5 = 71.5 °F.`,
        answer: String.raw`T_sat = 79 °F, vent at 71.5 °F (p_v = 0.78 in Hg); 0.62(0.78/0.22) = 2.19 lb/lb; air 22.5 + vapour 49.4 = 71.9 lb/h; design × 1.25 ≈ 90 lb/h.` } ] },

    { id: "practice-ejectors-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-ejectors-P6", label: "", marks: "", topic: "ejectors",
        sub: "Ludwig Ex. 6-10: single-stage ejector size, steam and evacuation time", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 6-10 (p. 371), Figs. 6-26A, 6-26B, Table 6-9, Eqs. (6-20), (6-21)`,
        text: String.raw`Select a single-stage ejector and find its utilities and evacuation time. Total mixture to be handled = 60 lb/h; suction pressure 4 in Hg abs; motive steam 125 psig; system volume 300 ft³. (Fig. 6-26A gives the size and the steam consumption $W_{s90}$ at 90 psig; Fig. 6-26B the steam-pressure factor F; Table 6-9 the evacuation factor E = 1.3 for this unit.)`,
        solution: String.raw`**Given:** $W_m = 60$ lb/h at 4 in Hg abs; 125 psig steam; $V = 300$ ft³.

**Find:** size, steam rate, evacuation time.

1. **Size:** Fig. 6-26A, at 4 in Hg abs and 60 lb/h: the point falls in the **2-in. L** band; the steam line through it reads $W_{s90} = 440$ lb/h at 90 psig.

2. **Steam at 125 psig** (Eq. 6-20, Fig. 6-26B: F = 0.88 at 125 psig — higher pressure steam carries more energy per lb, so less is needed):
$$W_s = W_{s90}F = 440(0.88) = 387\ \mathrm{lb/h}$$

3. **Evacuation** (Eq. 6-21, $W'_m = EV/t$ with E = 1.3):
$$t = \frac{EV}{W'_m} = \frac{1.3(300)}{60} = 6.5\ \mathrm{min}$$

**Result:** 2-in. L ejector, about 387 lb/h of 125 psig steam (7 lb steam per lb of mixture), 6.5 min to evacuate 300 ft³.

> Book check: Ludwig prints "W_s = 440(0.88) = 397 lb/hr"; the product is 387 lb/h (a small arithmetic slip in the book).`,
        answer: String.raw`Fig. 6-26A → 2-in. L, W_s90 = 440 lb/h; F = 0.88 → W_s = 387 lb/h (book prints 397, an arithmetic slip); t = 1.3 × 300/60 = 6.5 min.` } ] },

    { id: "practice-ejectors-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-ejectors-P7", label: "", marks: "", topic: "ejectors",
        sub: "Ludwig Ex. 6-11: two-stage ejector with barometric intercondenser: steam and water", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 6-11 (pp. 372–373), Figs. 6-28A–D, Eq. (6-22)`,
        text: String.raw`Select a two-stage ejector with a barometric intercondenser and find its steam and water consumption. Total mixture to be handled = 40 lb/h; air in the mixture = 15 lb/h; suction pressure 1.5 in Hg abs; steam pressure at the nozzle 150 psig. (Fig. 6-28A size; Fig. 6-28B base steam $W'_s$ per lb of mixture; Fig. 6-28C non-condensable load factor K vs $W_A/W_M$; Fig. 6-28D steam-pressure factor F; water GPM ≈ 0.06 $W_s$, minimum 10 gpm.)`,
        solution: String.raw`**Given:** $W_m = 40$ lb/h, $W_a = 15$ lb/h, 1.5 in Hg abs, 150 psig steam.

**Find:** size, $W_s$, cooling water.

1. **Size:** Fig. 6-28A at 1.5 in Hg abs and 40 lb/h: **2-inch** inlet and outlet connections.

2. **Base steam:** Fig. 6-28B at 1.5 in Hg abs: $W'_s = 5.55$ lb steam per lb mixture.

3. **Load factor:** $W_A/W_M = 15/40 = 0.375$ → Fig. 6-28C: K = 0.67 (condensable vapour is condensed in the intercondenser, so the second stage handles less: the higher the condensable fraction, the lower K).

4. **Pressure factor:** Fig. 6-28D at 150 psig: F = 0.88.

5. **Steam** (Eq. 6-22):
$$W_s = W'_sW_mKF = 5.55(40)(0.67)(0.88) = 131\ \mathrm{lb/h}$$

6. **Water:** $\mathrm{GPM} = 0.06(131) = 7.9$ → use the **10 gpm** minimum.

**Result:** 2-in. two-stage unit, about 131 lb/h of 150 psig steam (3.3 lb per lb of mixture, half that of the single stage in P6 at a lower pressure) and 10 gpm of intercondenser water (Ludwig ✓).`,
        answer: String.raw`2-in. unit; W'_s = 5.55, K = 0.67 (W_A/W_M = 0.375), F = 0.88 → W_s = 5.55 × 40 × 0.67 × 0.88 ≈ 131 lb/h; water 0.06 × 131 = 7.9 → 10 gpm minimum.` } ] },

    { id: "practice-ejectors-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-ejectors-P8", label: "", marks: "", topic: "ejectors",
        sub: "Ludwig Ex. 6-12: barometric condenser temperatures and cooling water", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 6-12 (pp. 376–378), Eq. (6-23); Ejector slides: barometric-condenser air outlet 5 °F above the cooling-water inlet`,
        text: String.raw`A barometric condenser is to condense 8500 lb/h of steam at 3.5 in Hg abs using 85°F water. The non-condensables are 43 lb/h. Find the outlet water temperature (terminal difference 5°F), the temperature of the air leaving the condenser, and the cooling water required.`,
        solution: String.raw`**Given:** $W_s = 8500$ lb/h at 3.5 in Hg abs; water in at 85 °F; non-condensables 43 lb/h (0.5% of the steam).

**Find:** water outlet and air outlet temperatures, GPM.

**Assumptions:** L = 1000 Btu/lb for process vapour (Ludwig); 1 gpm = 500 lb/h.

1. **Steam saturation** at 3.5 in Hg abs: 120.6 °F.

2. **Outlet water:** $120.6 - 5 = 115.6$ °F; rise $= 115.6 - 85 = 30.6$ °F.

3. **Air outlet:** $85 + 5 = 90$ °F (cooled by the incoming water at the top of the counter-current condenser).

4. **Water** (Eq. 6-23):
$$\mathrm{GPM} = \frac{W_sL}{500\,\Delta t_w} = \frac{8500(1000)}{500(30.6)} = 556\ \mathrm{gal/min}$$

**Result:** water out at 115.6 °F, air out at 90 °F, about 556 gpm (Ludwig ✓). The 90 °F vent gas, saturated at 3.5 in Hg, is the load for the next ejector stage. (For turbine exhaust steam Ludwig takes L = 950 Btu/lb.)`,
        answer: String.raw`T_sat = 120.6 °F; water out 115.6 °F (rise 30.6 °F); air out 90 °F; GPM = 8500 × 1000/(30.6 × 500) ≈ 556 gpm.` } ] },

    { id: "practice-ejectors-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-ejectors-P9a", label: "(a)", marks: "", topic: "ejectors",
          sub: "Ludwig Ex. 6-13: pump-down time with a mechanical vacuum pump", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 6-13 (pp. 380–381), Eq. (6-26)`,
          text: String.raw`Calculate the pump-down time for a system of vessels and piping with a volume of 500 litres. The final pressure is to be 0.01 torr, starting at atmospheric. From the manufacturer's data the pump speed is 2.0 L/s at 0.01 torr and 2.75 L/s at 760 torr; $R_{ps}$ = 15 rotations per second and the pump chamber volume $V'_o$ = 0.5 L. Use $t = \ln(P''_n/P''_o)/[R_{ps}\ln(V'/(V' + V'_o))]$.`,
          solution: String.raw`**Given:** $V' = 500$ L, $V'_o = 0.5$ L, $R_{ps} = 15$ s⁻¹, $P''_o = 760$ torr, $P''_n = 0.01$ torr.

**Find:** pump-down time.

**Assumptions:** no leakage or outgassing (Eq. 6-26 is ideal; each stroke removes the fraction $V'_o/(V' + V'_o)$ of the gas).

1. **Numerator:** $\ln(0.01/760) = \ln(1.316\times10^{-5}) = -11.238$.

2. **Denominator:** $15\ln(500/500.5) = 15(-0.0009995) = -0.014993$.

3. **Time:** $t = 11.238/0.014993 = 750$ s = **12.5 min** (Ludwig ✓).

In practice multiply by 2–3 for leakage, outgassing and the fall-off of pump speed at low pressure (2.0 instead of 2.75 L/s here).`,
          answer: String.raw`t = ln(0.01/760)/[15 ln(500/500.5)] = (−11.238)/(−0.014993) ≈ 750 s ≈ 12.5 min (ideal).` },
        { id: "practice-ejectors-P9b", label: "(b)", marks: "", topic: "ejectors",
          sub: "Ludwig Ex. 6-14: evacuating a 3000 ft³ vessel with a steam jet (Penberthy tables)", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 6-14 and Tables 6-15, 6-16 (pp. 381–382)`,
          text: String.raw`A 3000 ft³ vessel full of air at atmospheric pressure is to be evacuated to 5 in Hg abs in 2.5 h with 100 psig steam, discharging to atmosphere. Penberthy data at 5 in Hg abs (evacuation time, min per 100 ft³): U-1H 8.10, U-2H 5.33, U-3H 3.42, U-4H 2.37, U-5H 1.74. Steam consumption: U-1 85, U-2 125, U-3 195, U-4 270, U-5 370 lb/h. Select the unit and its steam consumption. Compare with the rough estimate $t = [2.3 - 0.003P'_s]V/w_j$ (t min, $P'_s$ torr, $w_j$ = design capacity, lb/h of 70°F air) for a unit of 100 lb/h capacity.`,
          solution: String.raw`**Given:** $V = 3000$ ft³; final 5 in Hg abs; 2.5 h allowed; 100 psig steam.

**Find:** ejector model and steam.

1. **Allowed time per 100 ft³:** $2.5(60)/30 = 5.0$ min/100 ft³.

2. **Table 6-15 at 5 in Hg:** U-2H takes 5.33 min (too slow: $5.33 \times 30 = 160$ min > 150 min); **U-3H takes 3.42 min** → $3.42 \times 30 = 103$ min ✓.

3. **Steam:** Table 6-16: U-3 uses **195 lb/h**.

4. **Rough check** (Eq. 6-27): $P'_s = 5 \times 25.4 = 127$ torr; for $w_j$ = 100 lb/h: $t = [2.3 - 0.003(127)](3000)/100 = 57.6$ min. This assumes the ejector handles about twice its design capacity during evacuation; it only gives the order of magnitude.

**Result:** select the U-3 (H) unit: about 1.7 h to evacuate, 195 lb/h of 100 psig steam (Ludwig ✓).`,
          answer: String.raw`Allowed 5.0 min/100 ft³; U-2 (5.33) too slow, U-3 (3.42 → 103 min) chosen; steam 195 lb/h. Rough Eq. 6-27 with w_j = 100 lb/h: ≈ 58 min (order of magnitude only).` } ] },

    { id: "practice-ejectors-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-ejectors-P10", label: "", marks: "20", topic: "ejectors",
        sub: "Design load from a fittings air-leakage estimate: air equivalent and steam", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; Ludwig Table 6-7 (estimated air leakage by fitting), Eq. (6-4), Figs. 6-17, 6-18, 6-25; Ejector slides "Types of load", "Total capacity". Past papers 2019-20 Q7(c) and 2023-24 Q3(b) gave the leakage directly`,
        text: String.raw`A vacuum distillation system operates at 2.0 in Hg abs at the ejector suction. Its fittings are: 20 flanged joints up to 6 in (0.5 lb/h each), 8 flanged joints 6–24 in including manholes (0.8), 2 flanged joints 24 in–6 ft (1.1), 10 screwed joints up to 2 in (0.1), 6 packed valves up to 1/2 in stem (0.5), 2 sight glasses (1.0), 1 gauge glass with cocks (2.0) and a 3 in safety valve (1.0 per inch). The gas leaves the overhead condenser saturated with water vapour at 85°F.
(a) Estimate the air leakage and the total mixture load.
(b) Convert the load to 70°F air equivalent.
(c) Estimate the motive steam for a two-stage barometric unit from Ludwig Fig. 6-25, and list the other loads that should be checked.`,
        solution: String.raw`**Given:** fitting counts and Table 6-7 rates; suction 2.0 in Hg abs; vent saturated at 85 °F.

**Find:** air leakage, mixture load, 70 °F air equivalent, steam.

**Assumptions:** Table 6-7 values used without a multiplier (Ludwig calls them conservative); water is the only condensable.

1. **(a) Air leakage:**

| item | n | lb/h each | lb/h |
|---|---|---|---|
| flanges ≤ 6 in | 20 | 0.5 | 10.0 |
| flanges 6–24 in, manholes | 8 | 0.8 | 6.4 |
| flanges 24 in–6 ft | 2 | 1.1 | 2.2 |
| screwed ≤ 2 in | 10 | 0.1 | 1.0 |
| packed valves | 6 | 0.5 | 3.0 |
| sight glasses | 2 | 1.0 | 2.0 |
| gauge glass | 1 | 2.0 | 2.0 |
| safety valve 3 in | 1 | 3.0 | 3.0 |
| total | | | 29.6 |

(Ludwig's experience table gives 10–20 lb/h at 1–3 in Hg abs; 30 lb/h is a safe design figure.)

2. **Water vapour with the air:** $p_v(85\ ^\circ\mathrm{F}) = 1.215$ in Hg, $p_a = 2.0 - 1.215 = 0.785$ in Hg;
$$W_v = 29.6(0.62)\frac{1.215}{0.785} = 28.4\ \mathrm{lb/h},\qquad W_m = 58.0\ \mathrm{lb/h}\ (51\%\ \mathrm{air})$$

3. **(b) 70 °F air equivalent:** Fig. 6-17 at 85 °F: air ratio ≈ 0.998, steam ≈ 0.997; Fig. 6-18 at M = 18: 0.81.
$$\frac{29.6}{0.998} + \frac{28.4}{0.997(0.81)} = 29.7 + 35.2 = 64.9\ \mathrm{lb/h}$$

4. **(c) Steam:** Fig. 6-25 at 2 in Hg abs = 51 mm Hg, two-stage barometric curves: about 4.2 lb steam/lb mixture for 100% air and 1.8 for 10% air; interpolating by the air fraction (51%): ≈ 2.9 lb/lb. Steam ≈ 2.9 × 58 ≈ **170 lb/h** at 100 psig (estimate only; the vendor's curve is used for the final figure).

5. **Other loads to check** (slides "Total capacity"): non-condensables released from the process (dissolved gases, reaction products), non-condensables and air released from the barometric condenser water, condensable process vapours not condensed (organics at their vapour pressure), and the start-up evacuation duty.

**Result:** leakage ≈ 30 lb/h; mixture ≈ 58 lb/h; ≈ 65 lb/h of 70 °F air; ≈ 170 lb/h of motive steam.`,
        answer: String.raw`(a) leakage 29.6 lb/h; W_v = 29.6 × 0.62 × 1.215/0.785 = 28.4 lb/h → 58 lb/h mixture; (b) 29.7 + 35.2 ≈ 65 lb/h of 70 °F air; (c) Fig. 6-25 ≈ 2.9 lb/lb → ≈ 170 lb/h steam.` } ] },

    { id: "practice-ejectors-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-ejectors-P11", label: "", marks: "15", topic: "ejectors",
        sub: "Ejector parts with the pressure and velocity profile; role of intercondensers", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Ejector 2023 slides (Fig. 6-1 basic ejector components and energy conversion; "Arrangement of condenser": precondenser, intercondenser, aftercondenser); Ludwig Fig. 6-1`,
        text: String.raw`(a) Sketch a single-stage steam-jet ejector, name its parts and show how the pressure and the velocity change along the axis. Explain the energy conversions.
(b) Why are two-stage ejectors fitted with an intercondenser, and what are the pre- and aftercondenser for?
(c) Why must an ejector not be throttled on its suction line to control the vacuum? How is the vacuum controlled instead?`,
        solution: String.raw`### (a) Parts and profiles

![Steam-jet ejector cross-section (motive nozzle, suction chamber, converging diffuser, throat, diverging diffuser) with schematic pressure and velocity profiles](fig/practice-ejectors-P11-sketch.svg)

- **Motive nozzle** (converging–diverging): high-pressure steam expands to below the suction pressure; its pressure energy becomes kinetic energy, and it leaves at supersonic velocity (about 1000 m/s).
- **Suction chamber:** the low-pressure jet entrains the process gas by momentum exchange and turbulent mixing.
- **Converging diffuser and throat:** the mixed stream is slowed; a shock near the throat raises the pressure abruptly.
- **Diverging diffuser:** the remaining kinetic energy is converted back to pressure, so the mixture leaves at the discharge pressure (atmosphere or an intercondenser).
Velocity peaks at the nozzle exit; pressure has its minimum there (≈ suction pressure) and rises through the diffuser. The compression ratio is discharge/suction pressure; one stage gives at most about 6–10.

### (b) Condensers
- An **intercondenser** between stages condenses the motive steam of the first stage and the condensable process vapour. The second stage then compresses only the non-condensables (and their saturation vapour), so its steam use falls greatly (Ludwig Fig. 6-25: two-stage condensing units need a fraction of the steam of non-condensing ones).
- A **precondenser** before the first stage condenses process vapour at the lowest pressure so the first stage is smaller.
- An **aftercondenser** after the last stage condenses the exhaust steam at atmospheric pressure: it acts as a silencer and removes odours and pollutants.

### (c) Control
An ejector is a fixed-capacity, fixed-geometry device: it works stably only above the critical flow in its diffuser. Throttling the suction or the steam (below the pick-up pressure) makes it break and the suction pressure jumps. Control is by **adding load**: an **air bleed** or recycle of discharge gas into the suction through a control valve keeps the ejector on its design curve while the process pressure is held (Ludwig Figs. 6-30, 6-31). Several ejectors in parallel are switched for large load changes.`,
        answer: String.raw`Nozzle: pressure → velocity (supersonic, lowest p at nozzle exit); suction chamber: entrainment; converging diffuser + throat (shock) and diverging diffuser: velocity → pressure. Intercondensers remove motive steam and condensables so later stages handle only non-condensables (much less steam); pre-/aftercondensers reduce first-stage load and exhaust steam/noise. Control by air bleed/recycle, not by throttling.` } ] },

    { id: "practice-ejectors-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-ejectors-P12", label: "", marks: "12", topic: "ejectors",
        sub: "Hot summer cooling water: intercondenser pressure rise and first-stage break", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style, built on Ludwig Ex. 6-12 (8500 lb/h at 3.5 in Hg abs, 556 gpm); slides "back pressure", "fixed-capacity ejector"; 2023-24 Q3(a)/(c) asked the theory`,
        text: String.raw`The barometric intercondenser of Ludwig Example 6-12 (8500 lb/h of steam at 3.5 in Hg abs, 556 gpm of 85°F water, terminal difference 5°F) serves as the discharge of a first-stage ejector whose maximum discharge (break) pressure is 4.0 in Hg abs. In summer the cooling water arrives at 95°F with the same flow.
(a) Estimate the new intercondenser pressure and say what happens to the first stage.
(b) What water flow would keep 3.5 in Hg abs?
(c) List two other remedies.`,
        solution: String.raw`**Given:** 8500 lb/h, 556 gpm, water rise 30.6 °F at design; terminal difference 5 °F; break pressure 4.0 in Hg abs; summer water 95 °F.

**Find:** new condenser pressure; water needed.

**Assumptions:** same heat load (L = 1000 Btu/lb) and terminal difference; the condenser pressure is the saturation pressure at (water outlet + 5 °F).

1. **(a)** Same flow → same rise 30.6 °F: outlet $95 + 30.6 = 125.6$ °F; condensing temperature $125.6 + 5 = 130.6$ °F → saturation pressure **4.6 in Hg abs**.
The intercondenser pressure (4.6) is above the first stage's maximum discharge pressure (4.0): the first stage **breaks** (the diffuser shock moves upstream, flow becomes unstable) and the suction pressure of the process rises sharply — the plant loses vacuum. More motive steam does not help: a fixed ejector's capacity does not increase with steam pressure above design.

2. **(b) Water to hold 3.5 in Hg abs:** the outlet must stay at 115.6 °F, so the rise is $115.6 - 95 = 20.6$ °F:
$$\mathrm{GPM} = \frac{8500(1000)}{500(20.6)} = 825\ \mathrm{gal/min}\quad(+48\%)$$

3. **(c) Other remedies:** chilled or cooling-tower water with a lower approach; an extra (booster) stage or a first stage designed for a higher discharge pressure; a larger intercondenser (surface type with more area); reducing the load (precondenser, fixing air leaks).

**Result:** about 4.6 in Hg abs > 4.0: first stage breaks; about 825 gpm of 95 °F water is needed to hold 3.5 in Hg abs.`,
        answer: String.raw`(a) water out 125.6 °F, condensing 130.6 °F → ≈ 4.6 in Hg abs > 4.0 break pressure: first stage breaks, vacuum lost; (b) 8500 × 1000/(500 × 20.6) ≈ 825 gpm (+48%); (c) colder water, booster/redesigned stage, bigger condenser, cut load.` } ] },

    { id: "practice-ejectors-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-ejectors-P13", label: "", marks: "12", topic: "ejectors",
        sub: "Choosing vacuum equipment and the number of ejector stages", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Ejector 2023 slides (types of vacuum equipment and lowest vacuum: centrifugal 250, reciprocating 10, water-sealed rotary 100, oil-sealed 0.1 mm Hg, diffusion 0.001; steam jet 0.05 mm Hg; ejector advantages); Ludwig Table 6-2 (stage designations), Table 6-17 and Fig. 6-9 (operating ranges)`,
        text: String.raw`(a) Using the operating ranges of vacuum equipment, recommend a vacuum producer and, for ejectors, the number of stages for: (i) a vacuum evaporator last effect at 100 mm Hg abs, (ii) a vacuum distillation column at 5 mm Hg abs with large amounts of condensable vapour, (iii) a steam deodoriser for edible oil at 3 mm Hg abs, (iv) a freeze dryer at 0.1 mm Hg abs.
(b) Compare steam-jet ejectors and mechanical vacuum pumps (energy, cost, reliability, handling of wet or corrosive gases).`,
        solution: String.raw`### (a) Selection
| duty | pressure | recommendation | reason |
|---|---|---|---|
| (i) evaporator last effect | 100 mm Hg ≈ 3.9 in Hg | barometric condenser + **two-stage ejector** (or a liquid-ring pump) | most vapour is condensed in the condenser; only air goes to the ejector; one atmospheric stage covers 3–12 in Hg suction but a two-stage unit is more economical near its lower limit |
| (ii) column at 5 mm Hg, heavy condensables | 5 mm Hg | precondenser + **three- or four-stage ejector with barometric intercondensers** | Table 6-2: first of four stages 0.2–4 mm, first of three 0.1–1 in Hg (2.5–25 mm); ejectors handle wet, corrosive vapours and large volumes |
| (iii) oil deodoriser | 3 mm Hg | **four-stage ejector** (often with booster) | steam ejectors are standard in edible-oil deodorising (slide: steam-ejector applications include oil deodorizers); handles fatty-acid vapour |
| (iv) freeze dryer | 0.1 mm Hg | **refrigerated condenser + oil-sealed rotary pump** (or 5–6-stage ejector) | oil-sealed rotary reaches about 0.1 mm Hg (slide table); water vapour is first frozen out on a cold condenser so the pump handles only non-condensables |

### (b) Ejectors vs mechanical pumps
- **Ejectors:** no moving parts, low capital cost, reliable, small space, handle wet, dirty and corrosive vapours (built in corrosion-resistant materials), any size; but they use a lot of steam and cooling water (mechanical pumps are 8–10 times more energy efficient), produce contaminated condensate, and work stably only near their design point.
- **Mechanical pumps** (reciprocating, liquid-ring, rotary vane/piston, blowers): low energy, no steam; but higher capital and maintenance, need seals, are damaged by condensate, solids or corrosion; liquid-ring pumps are limited by the vapour pressure of the seal liquid.
- **Hybrids:** an ejector booster in front of a liquid-ring pump combines the deep vacuum of the jet with the efficiency of the pump.`,
        answer: String.raw`(i) condenser + two-stage ejector or liquid ring; (ii) precondenser + 3–4-stage condensing ejector; (iii) 4-stage ejector; (iv) cold trap + oil-sealed rotary pump (or 5–6-stage ejector). Ejectors: cheap, no moving parts, handle wet/corrosive gas, but heavy steam/water use; pumps: 8–10 × more energy efficient but costlier and sensitive to condensate.` } ] }
  ]
});
