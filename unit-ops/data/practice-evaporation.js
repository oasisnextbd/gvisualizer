QB.paper({ year: "Practice", set: "Evaporators", date: "", marks: 0, practice: true,
  rules: String.raw`Evaporators: Dr. Sowgath's slide and handwritten-note examples (Foust Ex. 19.1, MSH Ex. 16.1 as worked in the notes, vacuum and BPE effects, the two Badger–McCabe triple-effect problems, scale formation from the Fig. 5-30 slide), MSH 5th ed. chapter 16 examples and problems, the outline's auxiliary equipment (steam traps, barometric and surface condensers, condensate discharge, entrainment separators) and exam-style problems on cleaning cycles, double effects with BPE, vapour recompression, the optimum number of effects, Dühring lines and liquid head.`,
  questions: [
    { id: "practice-evaporation-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw`Slide example (Foust Example 19.1, worked in Dr. Sowgath's evaporator slides). Determine the heating area required for the production of 10,000 lb/h of 50% NaOH solution from a 10% NaOH feed entering at 100°F. Evaporation is to be carried out in a single-body standard evaporator for which an overall coefficient of 500 Btu/h·ft²·°F is expected. Steam is available saturated at 50 psig, and the evaporator can be operated at 10 psi vacuum relative to a barometric pressure of 14.7 psia.

Charts used on the slides: Dühring lines for NaOH–H₂O (Foust Fig. 19.11) and the NaOH–H₂O enthalpy–concentration chart (Foust Fig. 19.13); saturated and superheated steam tables.`,
      parts: [
        { id: "practice-evaporation-P1a", label: "(a)", marks: "", topic: "evaporation",
          sub: "Foust Ex. 19.1: single-effect NaOH area, steam and economy (slide method)", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Dr. Sowgath, 2025 Evaporator Presentation, "Example 19.1" slides (Foust 2nd ed., Example 19.1, Fig. 19.12). The same data were set in 2011-12 Q5(c) and 2022-23 Q1(d); this part follows the slide's own route and checks its numbers.`,
          text: String.raw`Solve the slide example step by step exactly as the slide lays it out: (i) boiling point of water at the vapour-space pressure, (ii) boiling point of the 50% solution from the Dühring plot and the BPR, (iii) enthalpies of feed, product and vapour, (iv) material and heat balances for the steam rate, (v) heating area. Then comment on the steam latent heat used on the slide (920 Btu/lb) and on the economy.`,
          solution: String.raw`**Given:** $L_1 = 10{,}000$ lb/h at $x_1 = 0.50$; feed $x_F = 0.10$ at $T_F = 100$ °F; $U = 500$ Btu/h·ft²·°F; steam saturated at 50 psig = 64.7 psia; vapour space $14.7 - 10 = 4.7$ psia.

**Find:** steam rate $V_0$, economy, heating area $A$.

**Assumptions:** the liquor in the body is well mixed, so it is everywhere 50% NaOH at its boiling point (Foust assumption a); condensate leaves at the steam saturation temperature; no heat losses; vapour leaves superheated at the solution boiling point.

1. **Boiling point of water at 4.7 psia** (steam table): $T_w = 160$ °F (159.6 °F).

2. **Boiling point of the solution:** on the Dühring chart go up from 160 °F on the water axis to the 50% line and across: $T_1 = 233$ °F.
$$\mathrm{BPR} = 233 - 160 = 73\ ^\circ\mathrm{F}$$

3. **Steam side:** 64.7 psia saturated steam is at $T_0 = 297.7$ °F (the slide rounds to 297 °F).

4. **Enthalpies** (enthalpy–concentration chart, datum water at 32 °F): feed 10% at 100 °F, $h_F = 60$ Btu/lb; product 50% at 233 °F, $h_1 = 245$ Btu/lb. Vapour: superheated steam at 4.7 psia and 233 °F, $H_1 = 1130 + 0.45(233-160) \approx 1160$ Btu/lb (the slide reads 1160 from the superheat table).

5. **Material balances:**
$$F x_F = L_1 x_1 \Rightarrow F = \frac{10{,}000(0.50)}{0.10} = 50{,}000\ \mathrm{lb/h},\qquad V_1 = F - L_1 = 40{,}000\ \mathrm{lb/h}$$

6. **Heat balance** $V_0\lambda_0 + F h_F = V_1 H_1 + L_1 h_1$:
$$q = V_0\lambda_0 = 40{,}000(1160) + 10{,}000(245) - 50{,}000(60) = 45.85\times10^6\ \mathrm{Btu/h}$$
With the slide's $\lambda_0 = 920$ Btu/lb: $V_0 = 45.85\times10^6/920 = 49{,}840$ lb/h.

7. **Area** from $q = UA\Delta T$ with $\Delta T = T_0 - T_1 = 297 - 233 = 64$ °F:
$$A = \frac{45.85\times10^6}{500 \times 64} = 1433\ \mathrm{ft^2}\ (133\ \mathrm{m^2})$$

8. **Economy** $= V_1/V_0 = 40{,}000/49{,}840 = 0.80$.

**Result:** $A \approx 1430$ ft², steam ≈ 49,800 lb/h, economy 0.80.

> Slide check: the area 1433 ft² on the slide is correct for $\Delta T = 64$ °F; Foust prints "A = 1400 ft²", a rounded value. The latent heat of 50 psig steam in current steam tables is 912 Btu/lb, not 920; with 912 the steam rate becomes 45.85 × 10⁶/912 = 50,280 lb/h and the economy 0.796. The area does not change, because it depends on $q$, not on $\lambda_0$.

**Exam tip:** with a strong NaOH solution never use $c_p\Delta T$; the heat of dilution is large, so the enthalpy–concentration chart must give $h_F$ and $h_1$.`,
          answer: String.raw`$T_w = 160$ °F, $T_1 = 233$ °F (BPR 73 °F); F = 50,000, V = 40,000 lb/h; q = 45.85 × 10⁶ Btu/h; steam ≈ 49,800 lb/h (50,300 with λ = 912); economy ≈ 0.80; A = 1433 ft².` },
        { id: "practice-evaporation-P1b", label: "(b)", marks: "", topic: "evaporation",
          sub: "Same evaporator with 20 psig steam: effect of steam pressure on area", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Extension of the slide example using the slide "Choice of steam pressure" (process steam 0–50 psig, 20 psig common)`,
          text: String.raw`The slides say that 20 psig is the most common process-steam pressure. If only 20 psig saturated steam were available for the duty of part (a), what heating area and steam rate would be needed? What does this show about the choice of steam pressure for a strong NaOH evaporator?`,
          solution: String.raw`**Given:** duty from (a), $q = 45.85\times10^6$ Btu/h (unchanged: same feed, product and vapour-space pressure); steam 20 psig = 34.7 psia.

**Find:** $A$ and $V_0$ with 20 psig steam.

**Assumptions:** $U$ = 500 Btu/h·ft²·°F unchanged; solution still boils at 233 °F.

1. **Steam properties** (steam table, 34.7 psia): $T_0 = 258.7$ °F, $\lambda_0 = 939.5$ Btu/lb.

2. **Temperature driving force:** $\Delta T = 258.7 - 233 = 25.7$ °F (against 64.7 °F with 50 psig steam).

3. **Area:**
$$A = \frac{45.85\times10^6}{500 \times 25.7} = 3560\ \mathrm{ft^2}$$

4. **Steam rate:** $V_0 = 45.85\times10^6/939.5 = 48{,}800$ lb/h; economy $40{,}000/48{,}800 = 0.82$.

**Result:** about 3560 ft², 2.5 times the area of part (a), for only 3% less steam.

**Comment:** low-pressure steam carries a little more latent heat per pound (939.5 against 912 Btu/lb), but with a BPR of 73 °F most of its temperature is "used up" by the boiling-point elevation, so the area (capital cost) rises steeply. For strong electrolytes the steam must be hot enough to leave a reasonable net $\Delta T$; for dilute liquors with small BPR, 20 psig steam is the better choice.`,
          answer: String.raw`ΔT = 25.7 °F → A ≈ 3560 ft² (2.5 × part (a)); steam ≈ 48,800 lb/h, economy 0.82. High BPR liquors need higher-pressure steam.` } ] },

    { id: "practice-evaporation-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw`Handwritten note example (MSH 5th ed. Example 16.1, worked on page 5 of "Evaporator in details"). A single-effect evaporator is to concentrate 20,000 lb/h of a 20 percent solution of sodium hydroxide to 50 percent solids. The gauge pressure of the steam is 20 lbf/in.²; the absolute pressure in the vapor space is 100 mm Hg (1.93 lbf/in.²). The overall coefficient is estimated to be 250 Btu/ft²·h·°F. The feed temperature is 100°F.`,
      parts: [
        { id: "practice-evaporation-P2a", label: "(a)", marks: "", topic: "evaporation",
          sub: "MSH Ex. 16.1 as worked in the notes: check of the note's numbers", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Dr. Sowgath's handwritten notes "Evaporator in details", p. 5, and the slides "Dühring's rule, P = 100 mm Hg" and the steam-table interpolation slide (1.6945 psia → 120 °F, 2.225 psia → 130 °F); MSH 5th ed. Example 16.1 (pp. 480–481). The same example was set in 2023-24 Q1(d).`,
          text: String.raw`Re-work the note's solution: find the boiling point of water at 1.93 psia by interpolating the steam table as on the slide, the solution boiling point and BPR, the steam consumption, the economy and the heating surface. Compare the note's chart readings and answers with MSH.`,
          solution: String.raw`**Given:** $F = 20{,}000$ lb/h, $x_F = 0.20$, $x_L = 0.50$, $T_F = 100$ °F; steam 20 psig = 34.7 psia; vapour space 1.93 psia; $U = 250$ Btu/ft²·h·°F.

**Find:** steam rate $\dot m_s$, economy, area $A$.

**Assumptions:** as in MSH: well-mixed body at 50%, condensate leaves at the steam temperature, no losses.

1. **Water boiling point at 1.93 psia** (slide interpolation between 120 °F, 1.6945 psia and 130 °F, 2.225 psia):
$$T_w = 120 + 10\,\frac{1.93 - 1.6945}{2.225 - 1.6945} = 124.4\ ^\circ\mathrm{F}\ (\approx 124\ ^\circ\mathrm{F})$$

2. **Solution boiling point** (Dühring chart, MSH Fig. 16.4, 50% line at 124 °F): $T = 197$ °F, BPE $= 197 - 124 = 73$ °F.

3. **Material balance:** $L = 20{,}000(0.20)/0.50 = 8000$ lb/h, $V = 12{,}000$ lb/h.

4. **Enthalpies:** steam at 34.7 psia: $T_s = 259$ °F, $\lambda_s = 939$ Btu/lb. Vapour at 1.93 psia and 197 °F (superheated 73 °F): $H_v = 1149$ Btu/lb (the slide converts it: 1149 × 2.326 = 2672.6 kJ/kg). From the enthalpy–concentration chart: MSH reads $h_F = 55$ Btu/lb (20%, 100 °F) and $h_L = 221$ Btu/lb (50%, 197 °F); the notes read 58 and 220.

5. **Heat load** $q = VH_v + Lh_L - Fh_F$:

| | notes ($h_F$ = 58, $h_L$ = 220) | MSH ($h_F$ = 55, $h_L$ = 221) |
|---|---|---|
| $q$, Btu/h | 12,000(1149) + 8000(220) − 20,000(58) = 14.388 × 10⁶ | 14.456 × 10⁶ |
| $\dot m_s = q/939$, lb/h | 15,323 | 15,395 (MSH: 15,400) |
| economy $V/\dot m_s$ | 0.783 | 0.779 (MSH: 0.78) |
| $A = q/[250(259-197)]$, ft² | 928 | 933 (MSH: 930) |

**Result:** steam ≈ 15,400 lb/h (6990 kg/h), economy 0.78, area ≈ 930 ft² (86.6 m²).

> Note check: the notes' working is correct; the small differences (0.5%) come only from reading the enthalpy chart (58 instead of 55 Btu/lb for the feed). Both sets round to the MSH answers. MSH also notes that using saturated instead of superheated vapour enthalpy (1116 Btu/lb) would understate $q$ by about 3%.`,
          answer: String.raw`T_w = 124.4 °F, T = 197 °F, BPE 73 °F; L = 8000, V = 12,000 lb/h; q ≈ 14.4–14.5 × 10⁶ Btu/h; steam ≈ 15,300–15,400 lb/h; economy 0.78; A ≈ 930 ft².` },
        { id: "practice-evaporation-P2b", label: "(b)", marks: "", topic: "evaporation",
          sub: "Why the same NaOH evaporator cannot work at atmospheric pressure", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides "Dühring's rule, example P = 1 atm: 50% NaOH b.p. 293 °F, BPE 81 °F" and "Why use vacuum"`,
          text: String.raw`The slide states that at 1 atm a 50% NaOH solution boils at 293°F. Show that the evaporator of part (a) cannot be operated with its vapour space at atmospheric pressure, and estimate the highest vapour-space pressure at which it could work at all (zero driving force), assuming the 50% Dühring line is straight between the two slide points (124°F → 197°F and 212°F → 293°F).`,
          solution: String.raw`**Given:** steam at 20 psig, $T_s = 259$ °F; Dühring points for 50% NaOH: (124 °F, 197 °F) and (212 °F, 293 °F).

**Find:** whether operation at 1 atm is possible; the limiting vapour-space pressure.

**Assumptions:** straight Dühring line between the two points.

1. **At 1 atm:** the solution boils at 293 °F, above the 259 °F steam. $\Delta T = 259 - 293 = -34$ °F: heat would flow from the liquor to the steam. The evaporator cannot work.

2. **Dühring line:** slope $= (293-197)/(212-124) = 1.091$, so
$$T_{soln} = 197 + 1.091\,(T_w - 124)$$

3. **Zero driving force** when $T_{soln} = 259$ °F:
$$T_w = 124 + \frac{259 - 197}{1.091} = 180.6\ ^\circ\mathrm{F}$$
Steam table: water boils at 180.6 °F at **7.6 psia** (about 14.4 in Hg vacuum).

4. Any useful design needs a pressure well below 7.6 psia. At 1.93 psia (part a) $\Delta T = 62$ °F.

**Result:** at atmospheric pressure $\Delta T$ is negative; the vapour space must be below about 7.6 psia just to reach $\Delta T = 0$.

This is the slide's point (c) under "Why use vacuum": vacuum makes it possible to concentrate solutions with a large boiling-point elevation using low-pressure steam.`,
          answer: String.raw`At 1 atm the 50% liquor boils at 293 °F > 259 °F steam (ΔT = −34 °F): impossible. ΔT = 0 at T_w = 180.6 °F, i.e. 7.6 psia; practical operation needs much lower pressure (1.93 psia gives ΔT = 62 °F).` } ] },

    { id: "practice-evaporation-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-evaporation-P3a", label: "(a)", marks: "", topic: "evaporation",
          sub: "Why use vacuum: driving force and capacity with 5 psig steam", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Dr. Sowgath's slide "Why use vacuum" (5 psig steam at 227 °F; vacuum 26 in Hg against a 30 in Hg barometer gives b.p. 125 °F)`,
          text: String.raw`An evaporator heated with 5 psig steam concentrates a dilute aqueous solution with negligible BPE. Compare the temperature driving force and the capacity when the vapour space is (i) at 1 atm, (ii) at a vacuum of 26 in Hg referred to a 30 in Hg barometer. Assume U and A do not change. Check the steam-table temperatures quoted on the slide.`,
          solution: String.raw`**Given:** steam 5 psig = 19.7 psia; vapour space (i) 14.7 psia, (ii) $30 - 26 = 4$ in Hg abs $= 4 \times 0.491 = 1.96$ psia.

**Find:** $\Delta T$ in each case and the capacity ratio.

**Assumptions:** negligible BPE and liquid head; feed at its boiling point, so capacity $\propto q = UA\Delta T$.

1. **Steam:** 19.7 psia → $T_s = 227$ °F (227.1 °F) ✓.

2. **(i) 1 atm:** $T_b = 212$ °F, $\Delta T = 227 - 212 = 15$ °F.

3. **(ii) 4 in Hg abs:** steam table gives $T_b = 125.4$ °F ≈ 125 °F ✓, $\Delta T = 227 - 125 = 102$ °F.

4. **Capacity ratio** (same $U$, $A$):
$$\frac{q_{vac}}{q_{atm}} = \frac{102}{15} = 6.8$$

**Result:** the vacuum raises the driving force from 15 to 102 °F and the capacity about 6.8 times (or, for the same duty, cuts the area to 1/6.8).

> Slide check: on the slide the line "ΔT = 227 − 125 = 102 °F" is printed under the 1 atm case; it belongs to the vacuum case. At 1 atm the slide's own numbers give ΔT = 15 °F.

Other reasons on the slide: heat-sensitive materials boil at a lower temperature, and liquors with a large BPE can be concentrated with low-pressure steam. Against this, a vacuum needs a condenser and an ejector or pump, and the liquor's viscosity is higher at the lower temperature, which lowers $U$.`,
          answer: String.raw`5 psig steam 227 °F; ΔT = 15 °F at 1 atm, 102 °F at 4 in Hg abs (125 °F); capacity ratio ≈ 6.8. (The slide's "227 − 125" belongs to the vacuum case.)` },
        { id: "practice-evaporation-P3b", label: "(b)", marks: "", topic: "evaporation",
          sub: "BPE losses in single, double and triple effects (slide Fig. 16.11 numbers)", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slide "Effect of BPR/BPE on different evaporators" (MSH 5th ed. Fig. 16.11: total drop 181 °F, net 105, 85 and 79 °F)`,
          text: String.raw`The slide shows the effect of boiling-point elevation for the same terminal conditions (total temperature drop 181°F between the steam and the saturation temperature of the vapour from the last effect). The net (useful) temperature drops are 105°F for a single effect, 85°F for a double effect and 79°F for a triple effect. (i) Find the total BPE lost in each case. (ii) If each effect has the same area as the single effect and the same U, compare the capacities and estimate the steam per pound of water evaporated. (iii) Explain the trend.`,
          solution: String.raw`**Given:** $\Delta T_{total} = 181$ °F; net $\Sigma\Delta T$ = 105, 85, 79 °F for N = 1, 2, 3.

**Find:** ΣBPE, relative capacity, approximate steam consumption.

**Assumptions:** capacity $\propto q_T = UA\,\Sigma\Delta T$ (MSH Eq. 16.16) with $A$ the area of one effect and the same $U$; economy roughly 0.8–0.9 N.

1. **BPE lost:** single $181 - 105 = 76$ °F; double $181 - 85 = 96$ °F; triple $181 - 79 = 102$ °F.

2. **Capacity relative to the single effect:**

| N | net ΔT, °F | capacity / single | approx. steam per lb water |
|---|---|---|---|
| 1 | 105 | 1.00 | ≈ 1.1 lb |
| 2 | 85 | 0.81 | ≈ 0.55–0.6 lb |
| 3 | 79 | 0.75 | ≈ 0.4 lb |

3. **Trend:** every effect boils a solution with its own BPE, and each BPE is lost from the available drop, so the useful ΣΔT falls as N rises. With equal area per effect, the double effect has about 81% and the triple about 75% of the single-effect capacity, although it has 2 or 3 times the heating surface. The gain from more effects is steam economy, not capacity. With very large BPE the sum of the BPEs can approach the total drop, which limits the possible number of effects.`,
          answer: String.raw`ΣBPE = 76, 96, 102 °F; capacities 1 : 0.81 : 0.75 (same area per effect); steam per lb water ≈ 1.1, 0.55–0.6, 0.4. Multiple effects buy economy, not capacity.` } ] },

    { id: "practice-evaporation-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P4", label: "", marks: "", topic: "evaporation",
        sub: "Badger–McCabe trial: triple-effect forward feed, 50,000 lb/h, U = 500/300/200", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Dr. Sowgath's handwritten notes "Evaporator Notes with methods (IIT)", pp. 6–9: specifications, Badger–McCabe method and the solved triple-effect example; the method also on "Evaporator in details", pp. 4–5`,
        text: String.raw`A triple-effect forward-feed evaporator with equal heating areas concentrates 50,000 lb/h of a solution from 10% to 50% solids. The feed enters at 100°F. Saturated steam at 250°F is fed to the first effect and the boiling point in the last effect is 125°F. Take $c_p$ = 1 Btu/lb·°F for all liquors, $\lambda$ = 1000 Btu/lb for all steam and vapour, and neglect BPE. The overall coefficients are $U_1$ = 500, $U_2$ = 300 and $U_3$ = 200 Btu/h·ft²·°F. Find the boiling temperature in each effect, the evaporation in each effect, the steam consumption, the steam economy and the heating area per effect by the Badger–McCabe trial method.`,
        solution: String.raw`**Given:** $F = 50{,}000$ lb/h, $x_F = 0.10$, $x_3 = 0.50$, $T_F = 100$ °F, $T_0 = 250$ °F, $T_3 = 125$ °F, $c_p = 1$, $\lambda = 1000$ Btu/lb, $U$ = 500, 300, 200.

**Find:** $T_1$, $T_2$, $V_1$–$V_3$, $V_0$, economy, $A$.

**Assumptions:** no BPE, so each vapour condenses in the next chest at the boiling temperature of the effect it came from; condensates leave at the condensing temperature; no losses; areas equal (the notes' specification).

1. **Overall balance:** $L_3 = 50{,}000(0.10)/0.50 = 10{,}000$ lb/h, total evaporation $V_1 + V_2 + V_3 = 40{,}000$ lb/h.

2. **First trial temperatures** (notes: assume $q_1 = q_2 = q_3$ and $A_1 = A_2 = A_3$, so $U_1\Delta T_1 = U_2\Delta T_2 = U_3\Delta T_3$):
$$\Sigma\Delta T = 250 - 125 = 125\ ^\circ\mathrm{F},\qquad \Delta T_1 : \Delta T_2 : \Delta T_3 = \frac1{500} : \frac1{300} : \frac1{200}$$
$$\Delta T_1 = \frac{125}{1 + 5/3 + 5/2} = 24.19,\quad \Delta T_2 = 40.32,\quad \Delta T_3 = 60.48\ ^\circ\mathrm{F}$$
so $T_1 = 225.8$ °F and $T_2 = 185.5$ °F.

3. **Enthalpy balances** (notes' form, $h_F - h_1 = c_p(T_F - T_1)$), with $L_1 = F - V_1$, $L_2 = L_1 - V_2$:
$$\text{I: } F c_p(T_F - T_1) + V_0\lambda = V_1\lambda$$
$$\text{II: } L_1 c_p(T_1 - T_2) + V_1\lambda = V_2\lambda$$
$$\text{III: } L_2 c_p(T_2 - T_3) + V_2\lambda = V_3\lambda$$
Effect I: $V_1 = V_0 - 50{,}000(125.8)/1000 = V_0 - 6290$ (the cold feed must first be heated). Effects II and III add flash evaporation of the liquor entering each lower-pressure effect. Solving the four linear equations with $\Sigma V = 40{,}000$:
$$V_0 = 18{,}096,\quad V_1 = 11{,}806,\quad V_2 = 13{,}346,\quad V_3 = 14{,}849\ \mathrm{lb/h}$$

4. **Areas, trial 1** ($q_1 = V_0\lambda$, $q_2 = V_1\lambda$, $q_3 = V_2\lambda$):
$$A_1 = \frac{18.10\times10^6}{500(24.19)} = 1496,\quad A_2 = \frac{11.81\times10^6}{300(40.32)} = 976,\quad A_3 = \frac{13.35\times10^6}{200(60.48)} = 1103\ \mathrm{ft^2}$$
Not equal, so (notes) use the weighted mean
$$\bar A = \frac{A_1\Delta T_1 + A_2\Delta T_2 + A_3\Delta T_3}{\Delta T} = 1138\ \mathrm{ft^2},\qquad \Delta T_i' = \frac{A_i\,\Delta T_i}{\bar A}$$
giving $\Delta T' = 31.80,\ 34.57,\ 58.63$ °F (sum 125 °F).

5. **Trial 2:** $T_1 = 218.2$, $T_2 = 183.6$ °F; balances give $V_0 = 17{,}883$, $V_1 = 11{,}973$, $V_2 = 13{,}288$, $V_3 = 14{,}738$ lb/h; areas 1125, 1154, 1133 ft² (within 2.6%). One more correction gives $\Delta T = 31.46,\ 35.10,\ 58.44$ °F and areas 1137, 1136, 1138 ft² — converged.

6. **Final values:**

| effect | ΔT, °F | T, °F | V (vapour out), lb/h | liquor out, lb/h | x out |
|---|---|---|---|---|---|
| steam | | 250 | $V_0$ = 17,890 | | |
| I | 31.5 | 218.5 | 11,960 | 38,040 | 0.131 |
| II | 35.1 | 183.5 | 13,300 | 24,740 | 0.202 |
| III | 58.5 | 125.0 | 14,740 | 10,000 | 0.50 |

**Result:** $T_1 \approx 218.5$ °F, $T_2 \approx 183.5$ °F; steam 17,890 lb/h; economy $= 40{,}000/17{,}890 = 2.24$; area 1137 ft² in each effect (about 3410 ft² in all).

**Comment:** the first effect evaporates least because the cold 100 °F feed takes about 6300 lb/h of the steam's latent heat to reach its boiling point; that is why forward feed has a low economy with a cold feed (notes, p. 3). In the notes the ΔT ratios are written as $U_1/U_2 = \Delta T_2/\Delta T_1 = 5/3$ and $U_2/U_3 = 3/2$, exactly the ratios used in step 2.`,
        answer: String.raw`First trial ΔT = 24.2/40.3/60.5 °F → A = 1496/976/1103 ft²; corrected ΔT = 31.5/35.1/58.5 °F; T₁ = 218.5 °F, T₂ = 183.5 °F; V₁/V₂/V₃ = 11,960/13,300/14,740 lb/h; steam 17,890 lb/h; economy 2.24; A = 1137 ft² per effect.` } ] },

    { id: "practice-evaporation-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P5", label: "", marks: "", topic: "evaporation",
        sub: "Badger–McCabe trial: triple-effect backward feed, 25,000 kg/h, 8% to 35%", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Dr. Sowgath's handwritten notes "Evaporator Notes with methods (IIT)", pp. 12–13 (backward-feed example; the notes set up the balances and the first ΔT split, ΔT₁ = 54.19 °C, T₁ = 110.81 °C)`,
        text: String.raw`A triple-effect backward-feed evaporator with equal heating areas concentrates F = 25,000 kg/h of an aqueous solution from $x_F$ = 0.08 to $x_1$ = 0.35 (the product leaves the first effect). The feed enters the third effect at 110°C. Steam to the first effect condenses at $T_0$ = 165°C and the liquor in the third effect boils at $T_3$ = 53°C. Take $c_p$ = 3 kJ/kg·°C for all liquors and $\lambda$ = 2000 kJ/kg throughout; neglect BPE. $U_1$ = 200, $U_2$ = 300, $U_3$ = 500 W/m²·°C. Complete the notes' solution: find the temperatures, flows, steam consumption, economy and the area per effect.`,
        solution: String.raw`**Given:** $F = 25{,}000$ kg/h, $x_F = 0.08$, $x_1 = 0.35$, $T_F = 110$ °C, $T_0 = 165$ °C, $T_3 = 53$ °C, $c_p = 3$ kJ/kg·°C, $\lambda = 2000$ kJ/kg, $U$ = 200, 300, 500 W/m²·°C.

**Find:** $T_1$, $T_2$, all flows, $V_0$, economy, $A$.

**Assumptions:** no BPE; condensates at condensing temperature; equal areas; no losses. Liquor flows III → II → I (pumps between effects).

1. **Overall balance:** $L_1 = 25{,}000(0.08)/0.35 = 5714$ kg/h; total evaporation $= 19{,}286$ kg/h.

2. **First trial** (notes): $\Delta T = 165 - 53 = 112$ °C, $\Delta T_2/\Delta T_1 = U_1/U_2 = 2/3$, $\Delta T_3/\Delta T_1 = U_1/U_3 = 2/5$:
$$\Delta T_1 = \frac{112}{1 + 2/3 + 2/5} = 54.19\ ^\circ\mathrm{C},\quad \Delta T_2 = 36.13,\quad \Delta T_3 = 21.68\ ^\circ\mathrm{C}$$
$T_1 = 110.81$ °C ✓ (notes), $T_2 = 74.68$ °C.

3. **Enthalpy balances** (notes' backward-feed form, $L_3 = F - V_3$, $L_2 = L_3 - V_2$, $L_1 = L_2 - V_1$):
$$\text{III: } F c_p(T_F - T_3) + V_2\lambda = V_3\lambda$$
$$\text{II: } L_3 c_p(T_3 - T_2) + V_1\lambda = V_2\lambda$$
$$\text{I: } L_2 c_p(T_2 - T_1) + V_0\lambda = V_1\lambda$$
(the notes write effect I as $V_0\lambda_0 + L_2c_p(T_2 - T_1) + \lambda_1(L_1 - L_2) = 0$, the same equation). The feed at 110 °C entering an effect at 53 °C partly flashes: $25{,}000(3)(57)/2000 = 2138$ kg/h of free evaporation in effect III. Solving with $\Sigma V = 19{,}286$:
$$V_0 = 6732,\quad V_1 = 6092,\quad V_2 = 5528,\quad V_3 = 7666\ \mathrm{kg/h}$$

4. **Areas, trial 1** ($q = V\lambda/3.6$ in W with V in kg/h and λ in kJ/kg):
$$A_1 = \frac{3.740\times10^6}{200(54.19)} = 345.0,\quad A_2 = \frac{3.384\times10^6}{300(36.13)} = 312.3,\quad A_3 = \frac{3.071\times10^6}{500(21.68)} = 283.4\ \mathrm{m^2}$$
$\bar A = \Sigma A_i\Delta T_i/\Delta T = 322.5$ m², new $\Delta T_i = A_i\Delta T_i/\bar A$ = 57.98, 34.98, 19.04 °C.

5. **Trial 2:** areas 319.2, 320.1, 323.9 m²; corrected $\Delta T$ = 57.79, 34.96, 19.26 °C; trial 3 gives 320.4 m² in each effect.

6. **Final values:**

| effect | ΔT, °C | T, °C | vapour out, kg/h | liquor out, kg/h | x out |
|---|---|---|---|---|---|
| steam | | 165 | $V_0$ = 6670 | | |
| I | 57.8 | 107.2 | 6050 | 5714 (product) | 0.35 |
| II | 35.0 | 72.2 | 5550 | 11,760 | 0.170 |
| III | 19.2 | 53.0 | 7690 | 17,310 | 0.116 |

**Result:** $T_1 = 107.2$ °C, $T_2 = 72.2$ °C; steam 6670 kg/h; economy $19{,}286/6666 = 2.89$; area 320 m² per effect.

> Note check: the handwritten data read "T₃ = 53 °C" and the notes use ΔT = 165 − 53 = 112 °C, so 53 °C is used here. If the last effect were at 55 °C (ΔT = 110 °C) the same method gives 327 m² per effect and economy 2.89. The feed temperature reads 110 °C; a hot feed into the coldest effect flashes, which is why the economy (2.89) is close to 3 even though the liquor has to be heated from 53 °C to 107 °C on its way to the first effect.

**Exam tip:** in backward feed the liquor goes "uphill" in temperature, so the sensible-heat terms $L c_p(T_{in} - T_{out})$ in effects I and II are negative (they consume heat), while in forward feed they are positive (flash).`,
        answer: String.raw`First trial ΔT = 54.19/36.13/21.68 °C (T₁ = 110.81 °C as in the notes) → A = 345/312/283 m²; converged ΔT = 57.8/35.0/19.2 °C, T₁ = 107.2 °C, T₂ = 72.2 °C; steam 6670 kg/h; V₁/V₂/V₃ = 6050/5550/7690 kg/h; economy 2.89; A ≈ 320 m² per effect.` } ] },

    { id: "practice-evaporation-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P6", label: "", marks: "", topic: "evaporation",
        sub: "Scale formation from the Fig. 5-30 slide: U₀, β and the optimum boiling time", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Dr. Sowgath's slides "Maintenance: scaling, 1/U² = 1/U₀² + βθ" and "Fig. 5-30 Rate of scale formation in evaporator" (Badger & Banchero); handwritten notes p. 6`,
        text: String.raw`The slide figure (Fig. 5-30) plots, for a scaling evaporator, U (Btu/h·ft²·°F) and $1/U^2$ against the time θ (minutes) since the start of boiling. The straight line through the $1/U^2$ points runs from 0.36 at θ = 0 to 4.9 at θ = 400 min (right-hand scale, units of $10^{-5}$).

(a) Find $U_0$ and β in $1/U^2 = 1/U_0^2 + \beta\theta$ and check the equation against the U curve at 100 and 400 min.
(b) Cleaning takes 2 h. Find the boiling time per cycle that gives the largest average heat-transfer rate, and the average $U$ for the whole cycle (boiling + cleaning) at the optimum and for a cycle of 400 min boiling. Assume constant ΔT.`,
        solution: String.raw`**Given:** line through $(0,\ 0.36\times10^{-5})$ and $(400,\ 4.9\times10^{-5})$; cleaning time $t_c = 120$ min.

**Find:** $U_0$, β; $\theta_{opt}$; cycle-average $U$.

**Assumptions:** the straight line represents the data; ΔT and A constant during boiling; nothing is evaporated while cleaning.

1. **Reading the chart:** the right-hand axis label on the slide says "×10³", but $1/U^2$ for $U$ = 130–600 lies between $3\times10^{-6}$ and $6\times10^{-5}$, so the scale is in units of $10^{-5}$ (the label should read $1/U^2 \times 10^5$).

2. **Constants:**
$$\frac1{U_0^2} = 0.36\times10^{-5} \Rightarrow U_0 = 527\ \mathrm{Btu/h\,ft^2\,^\circ F}$$
$$\beta = \frac{(4.9 - 0.36)\times10^{-5}}{400} = 1.135\times10^{-7}\ (\mathrm{Btu/h\,ft^2\,^\circ F})^{-2}\ \mathrm{min^{-1}}$$

3. **Check:** $U(100) = (0.36\times10^{-5} + 100\beta)^{-1/2} = 259$ (curve ≈ 250); $U(400) = 143$ (curve ≈ 130). The fitted line reproduces the curve within about 5–10%.

4. **Heat transferred in a boiling period** θ (per unit area and per °F):
$$\frac{Q}{A\Delta T} = \int_0^{\theta}U\,d\theta = \int_0^{\theta}\frac{d\theta}{\sqrt{b + \beta\theta}} = \frac{2}{\beta}\left[\sqrt{b + \beta\theta} - \sqrt b\right],\qquad b = \frac1{U_0^2}$$

5. **Optimum:** maximise $Q/(\theta + t_c)$. Setting the derivative to zero gives (see 2013-14 Q8(b) for the derivation)
$$\theta_{opt} = t_c + 2\sqrt{\frac{b\,t_c}{\beta}} = 120 + 2\sqrt{\frac{0.36\times10^{-5}(120)}{1.135\times10^{-7}}} = 120 + 2(61.7) = 243\ \mathrm{min}$$
Graphically: draw the tangent to the $\int U\,d\theta$ curve from the point $(-t_c, 0)$; it touches at θ_opt.

![Cumulative ∫U dθ against boiling time with the tangent from (−120, 0) touching at 243 min](fig/practice-evaporation-P6-sol.svg)

6. **Cycle-average U:**
$$\bar U = \frac{(2/\beta)\left[\sqrt{b + \beta\theta} - \sqrt b\right]}{\theta + t_c}$$
At θ = 243 min: $\int U d\theta = 65{,}000$, $\bar U = 65{,}000/363 = 179$ Btu/h·ft²·°F. At θ = 400 min: $\bar U = 173$. (A neat property: at the optimum the cycle-average $U$ equals the instantaneous $U$ at the moment of shutdown, 179.)

**Result:** $U_0 \approx 527$, $\beta \approx 1.14\times10^{-7}$; boil about 243 min (4 h) and then clean; the cycle-average coefficient is 179, against 173 for 400-min runs (3.5% more throughput) and 527 for a clean surface.

If cleaning took only 1 h, $\theta_{opt}$ = 147 min and $\bar U$ = 222: shortening the cleaning time is worth more than fine-tuning the run length.`,
        answer: String.raw`U₀ ≈ 527, β ≈ 1.14 × 10⁻⁷ (Btu/h·ft²·°F)⁻² min⁻¹ (right-hand scale is ×10⁻⁵); θ_opt = t_c + 2√(t_c/(βU₀²)) ≈ 243 min; cycle-average U = 179 (173 for 400-min runs).` } ] },

    { id: "practice-evaporation-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P7", label: "", marks: "", topic: "evaporation",
        sub: "MSH Ex. 16.2: triple effect, boiling points from 1/U temperature drops", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Example 16.2 (p. 484), Eq. (16.13)`,
        text: String.raw`A triple-effect evaporator is concentrating a liquid that has no appreciable elevation in boiling point. The temperature of the steam to the first effect is 108°C; the boiling point of the solution in the last effect is 52°C. The overall heat-transfer coefficients, in W/m²·°C, are 2500 in the first effect, 2000 in the second effect, and 1000 in the third effect. At what temperatures will the liquid boil in the first and second effects?`,
        solution: String.raw`**Given:** $T_s = 108$ °C, $T_3 = 52$ °C, $U$ = 2500, 2000, 1000 W/m²·°C.

**Find:** $T_1$, $T_2$.

**Assumptions:** equal areas and approximately equal heat loads, so $U_1\Delta T_1 = U_2\Delta T_2 = U_3\Delta T_3$ (MSH Eq. 16.13); no BPE.

1. **Total drop:** $\Sigma\Delta T = 108 - 52 = 56$ °C.

2. **Split in proportion to 1/U:**
$$\Delta T_1 = \frac{1/2500}{1/2500 + 1/2000 + 1/1000}\,(56) = \frac{0.0004}{0.0019}(56) = 11.8\ ^\circ\mathrm{C}$$
$$\Delta T_2 = \frac{0.0005}{0.0019}(56) = 14.7\ ^\circ\mathrm{C},\qquad \Delta T_3 = \frac{0.001}{0.0019}(56) = 29.5\ ^\circ\mathrm{C}$$

3. **Boiling points:** $T_1 = 108 - 11.8 = 96.2$ °C; $T_2 = 96.2 - 14.7 = 81.5$ °C.

**Result:** first effect 96.2 °C, second effect 81.5 °C (MSH: 96.2 °C and 81.5 °C ✓).

This is only the first trial of the Badger–McCabe method; the energy balances then correct the split (see P4, P5).`,
        answer: String.raw`ΔT = 11.8, 14.7, 29.5 °C → T₁ = 96.2 °C, T₂ = 81.5 °C (agrees with MSH).` } ] },

    { id: "practice-evaporation-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P8", label: "", marks: "", topic: "evaporation",
        sub: "MSH Ex. 16.3: mixed-feed triple-effect NaOH evaporator, check of Table 16.4", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Example 16.3 (pp. 489–490), Tables 16.2–16.4`,
        text: String.raw`A triple-effect forced-circulation evaporator is to be fed with 60,000 lb/h of 10 percent caustic soda solution at 180°F. The concentrated liquor is to be 50 percent NaOH. Saturated steam at 50 lbf/in.² abs is to be used, and the condensing temperature of vapor from the third effect is to be 100°F. The feed order is II, III, I. Radiation and undercooling of condensate may be neglected. Overall coefficients corrected for BPE are 700, 1000 and 800 Btu/ft²·h·°F in effects I, II and III. MSH gives the converged results in Table 16.4:

| stream | T, °F | sat. T, °F | x | H, Btu/lb | flow, lb/h |
|---|---|---|---|---|---|
| steam to I | 281 | 281 | | 1174 | 19,370 |
| feed to I (from III) | 113 | | 0.228 | 68 | 26,300 |
| vapour from I | 245 | 170 | | 1170 | 14,300 |
| condensate from I | 281 | | | 249 | 19,370 |
| thick liquor from I | 246 | | 0.50 | 249 | 12,000 |
| raw feed to II | 180 | | 0.10 | 135 | 60,000 |
| vapour from II | 149 | 142 | | 1126 | 16,340 |
| liquid from II | 149 | | 0.137 | 101 | 43,660 |
| condensate from II | 170 | | | 138 | 14,300 |
| vapour from III | 114 | 100 | | 1111 | 17,360 |
| condensate from III | 142 | | | 110 | 16,340 |

Using these values, (a) verify the material and enthalpy balances of each effect, (b) calculate the heating surface in each effect and compare with the book answer of 719 ft² per effect, (c) find the steam economy, and (d) find the BPE in each effect and the net temperature drop.`,
        solution: String.raw`**Given:** Table 16.4 and $U_I = 700$, $U_{II} = 1000$, $U_{III} = 800$ Btu/ft²·h·°F.

**Find:** balance checks, $A_I$–$A_{III}$, economy, BPEs.

**Assumptions:** each chest condenses saturated vapour and the condensate leaves at the saturation temperature (so heat given = flow × (H − h_condensate)).

1. **Material balances:** II: $60{,}000 - 16{,}340 = 43{,}660$ ✓; III: $43{,}660 - 17{,}360 = 26{,}300$ ✓; I: $26{,}300 - 14{,}300 = 12{,}000$ ✓. Solids: $60{,}000(0.10) = 6000 = 12{,}000(0.50)$ ✓; total water evaporated $14{,}300 + 16{,}340 + 17{,}360 = 48{,}000$ lb/h.

2. **Heat given up in each chest:**
$$q_I = 19{,}370(1174 - 249) = 17.92\times10^6,\quad q_{II} = 14{,}300(1170 - 138) = 14.76\times10^6,\quad q_{III} = 16{,}340(1126 - 110) = 16.60\times10^6\ \mathrm{Btu/h}$$

3. **Enthalpy balances on the liquor side** (in = out):

| effect | in: $q$ + liquor in | out: vapour + liquor out | difference |
|---|---|---|---|
| I | 17.92 + 26,300(68) = 19.71 × 10⁶ | 14,300(1170) + 12,000(249) = 19.72 × 10⁶ | 0.07% |
| II | 14.76 + 60,000(135) = 22.86 × 10⁶ | 16,340(1126) + 43,660(101) = 22.81 × 10⁶ | 0.2% |
| III | 16.60 + 43,660(101) = 21.01 × 10⁶ | 17,360(1111) + 26,300(68) = 21.08 × 10⁶ | 0.3% |

The table is self-consistent within chart-reading accuracy.

4. **Areas** ($\Delta T$ = condensing temperature − boiling liquor temperature):
$$A_I = \frac{17.92\times10^6}{700(281 - 246)} = 731,\quad A_{II} = \frac{14.76\times10^6}{1000(170 - 149)} = 703,\quad A_{III} = \frac{16.60\times10^6}{800(142 - 114)} = 741\ \mathrm{ft^2}$$
Mean 725 ft², within 2–3% of each value and 0.8% of the book's 719 ft² (66.8 m²), so the trial has converged.

5. **Economy:** $48{,}000/19{,}370 = 2.48$ (book 2.48 ✓).

6. **BPE and net ΔT:** BPE$_I = 246 - 170 = 76$ °F, BPE$_{II} = 149 - 142 = 7$ °F, BPE$_{III} = 114 - 100 = 14$ °F. Net drop $= 35 + 21 + 28 = 84$ °F, out of $281 - 100 = 181$ °F: 97 °F is lost to BPE.

**Result:** balances close within 0.3%; areas 731, 703, 741 ft² (book 719); steam 19,370 lb/h; economy 2.48; ΣBPE = 97 °F.

**Why II, III, I?** The dilute feed at 180 °F is near the boiling point of effect II (149 °F), so it flashes there; the 50% liquor, which is very viscous and has a 76 °F BPE, is finished in effect I at the highest temperature, where its viscosity is lowest (mixed feed). The terminal temperatures (281 °F steam, 100 °F last vapour, 181 °F total) are those of slide Fig. 16.11.`,
        answer: String.raw`q = 17.92/14.76/16.60 × 10⁶ Btu/h; A = 731/703/741 ft² (mean 725 vs book 719); economy 48,000/19,370 = 2.48; BPE 76/7/14 °F, net ΔT 84 of 181 °F.` } ] },

    { id: "practice-evaporation-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P9", label: "", marks: "", topic: "evaporation",
        sub: "MSH Prob. 16.1: organic colloid evaporator at three feed temperatures", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Problem 16.1 (p. 492)`,
        text: String.raw`A solution of organic colloids in water is to be concentrated from 8 to 45 percent solids in a single-effect evaporator. Steam is available at a gauge pressure of 1.03 atm (120.5°C). A pressure of 102 mm Hg abs is to be maintained in the vapor space; this corresponds to a boiling point for water of 51.7°C. The feed rate to the evaporator is 20,000 kg/h. The overall heat-transfer coefficient can be taken as 2800 W/m²·°C. The solution has a negligible elevation in boiling point and a negligible heat of dilution. Calculate the steam consumption, the economy, and the heating surface required if the temperature of the feed is (a) 51.7°C, (b) 21.1°C, (c) 93.3°C. The specific heat of the feed solution is 3.77 J/g·°C, and the latent heat of vaporization of the solution may be taken equal to that of water. Radiation losses may be neglected.`,
        solution: String.raw`**Given:** $F = 20{,}000$ kg/h, $x_F = 0.08$, $x_L = 0.45$; $T_s = 120.5$ °C, $T = 51.7$ °C; $U = 2800$ W/m²·°C; $c_{pF} = 3.77$ kJ/kg·°C.

**Find:** $\dot m_s$, economy, $A$ for $T_F$ = 51.7, 21.1, 93.3 °C.

**Assumptions:** negligible BPE and heat of dilution, so MSH Eq. (16.8) applies: $q = \dot m_F c_{pF}(T - T_F) + V\lambda$; condensate leaves at 120.5 °C; steam tables: $\lambda_s(120.5\ ^\circ\mathrm{C}) = 2200.7$ kJ/kg, $\lambda(51.7\ ^\circ\mathrm{C}) = 2377.9$ kJ/kg.

1. **Material balance:** $L = 20{,}000(0.08)/0.45 = 3556$ kg/h; $V = 16{,}444$ kg/h.

2. **Latent load:** $V\lambda = 16{,}444(2377.9)/3600 = 10{,}862$ kW.

3. **Sensible load** $\dot m_F c_{pF}(51.7 - T_F)$ and results ($\Delta T = 120.5 - 51.7 = 68.8$ °C):

| | $T_F$, °C | sensible, kW | $q$, kW | $\dot m_s = q/\lambda_s$, kg/h | economy | $A = q/(U\Delta T)$, m² |
|---|---|---|---|---|---|---|
| (a) | 51.7 | 0 | 10,862 | 17,770 | 0.93 | 56.4 |
| (b) | 21.1 | +641 | 11,503 | 18,820 | 0.87 | 59.7 |
| (c) | 93.3 | −871 | 9991 | 16,340 | 1.01 | 51.9 |

For example (b): sensible $= 20{,}000(3.77)(30.6)/3600 = 641$ kW; $\dot m_s = 11{,}503(3600)/2200.7 = 18{,}820$ kg/h; $A = 11.503\times10^6/(2800 \times 68.8) = 59.7$ m².

**Result:** (a) 17,770 kg/h, 0.93, 56.4 m²; (b) 18,820 kg/h, 0.87, 59.7 m²; (c) 16,340 kg/h, 1.01, 51.9 m².

**Comment:** a cold feed lowers the economy (steam is spent heating the feed); a feed above the boiling point flashes on entry (in (c) 871 kW, about 1320 kg/h of vapour, comes free), so the economy can exceed 1 in a single effect.`,
        answer: String.raw`V = 16,444 kg/h. (a) steam 17,770 kg/h, economy 0.93, A = 56.4 m²; (b) 18,820 kg/h, 0.87, 59.7 m²; (c) 16,340 kg/h, 1.01, 51.9 m².` } ] },

    { id: "practice-evaporation-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P10", label: "", marks: "", topic: "evaporation",
        sub: "MSH Prob. 16.2: vertical-tube evaporator, 25,000 kg/h water removed", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Problem 16.2 (pp. 492–493)`,
        text: String.raw`A solution of organic colloids is to be concentrated from 15 to 50 percent solids in a vertical-tube evaporator. The solution has a negligible elevation in boiling point, and the specific heat of the feed is 0.93. Saturated steam is available at 0.8 atm abs, and the pressure in the condenser is 100 mm Hg abs. The feed enters at 15°C. The overall coefficient is 1700 W/m²·°C. The evaporator must evaporate 25,000 kg of water per hour. How many square meters of surface are required, and what is the steam consumption in kilograms per hour?`,
        solution: String.raw`**Given:** $V = 25{,}000$ kg/h, $x_F = 0.15$, $x_L = 0.50$, $c_{pF} = 0.93$ (cal/g·°C) $= 3.89$ kJ/kg·°C, $T_F = 15$ °C, steam 0.8 atm = 81.1 kPa, condenser 100 mm Hg = 13.33 kPa, $U = 1700$ W/m²·°C.

**Find:** $A$ and $\dot m_s$.

**Assumptions:** negligible BPE and heat of dilution; the liquor boils at the condenser saturation temperature (no pressure drop between body and condenser, no liquid head); condensate leaves at the steam temperature.

1. **Material balance:** $F(1 - 0.15/0.50) = 25{,}000 \Rightarrow F = 35{,}714$ kg/h, $L = 10{,}714$ kg/h.

2. **Steam tables:** 81.1 kPa: $T_s = 93.8$ °C, $\lambda_s = 2272.6$ kJ/kg. 13.33 kPa: $T = 51.5$ °C, $\lambda = 2378.2$ kJ/kg. $\Delta T = 42.3$ °C.

3. **Heat load:**
$$q = F c_{pF}(T - T_F) + V\lambda = \frac{35{,}714(3.89)(51.5 - 15) + 25{,}000(2378.2)}{3600} = 1412 + 16{,}515 = 17{,}927\ \mathrm{kW}$$

4. **Steam:** $\dot m_s = 17{,}927(3600)/2272.6 = 28{,}400$ kg/h; economy $= 0.88$.

5. **Area:**
$$A = \frac{17.927\times10^6}{1700 \times 42.3} = 249\ \mathrm{m^2}$$

**Result:** about 250 m² of heating surface and 28,400 kg/h of steam.

**Comment:** with steam below atmospheric pressure (0.8 atm) the driving force is small; a vertical (calandria) evaporator with a 3–4 m liquid head would in practice lose several more degrees to hydrostatic head at 100 mm Hg (see P20c), so the real area would be larger.`,
        answer: String.raw`F = 35,714 kg/h; q = 17,930 kW; ΔT = 93.8 − 51.5 = 42.3 °C; A ≈ 249 m²; steam ≈ 28,400 kg/h (economy 0.88).` } ] },

    { id: "practice-evaporation-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P11", label: "", marks: "", topic: "evaporation",
        sub: "MSH Prob. 16.8: rating a forward-feed triple effect of 140 m² per effect", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Problem 16.8 (p. 494)`,
        text: String.raw`A triple-effect standard vertical-tube evaporator, each effect of which has 140 m² of heating surface, is to be used to concentrate from 4 percent solids to 35 percent solids a solution possessing negligible boiling-point elevation. Forward feed is to be used. Steam is available at 120°C, and the vacuum in the last effect corresponds to a boiling temperature of 40°C. The overall coefficients, in W/m²·°C, are 2950 in I, 2670 in II, and 1360 in III; all specific heats may be taken as 4.2 J/g·°C, and radiation is negligible. Condensates leave at condensing temperature. The feed enters at 90°C. Calculate (a) the kilograms of 4 percent liquor that can be concentrated per hour, (b) the steam consumption in kilograms per hour.`,
        solution: String.raw`**Given:** $A = 140$ m² each; $x_F = 0.04$, $x_3 = 0.35$; $T_0 = 120$ °C, $T_3 = 40$ °C, $T_F = 90$ °C; $U$ = 2950, 2670, 1360 W/m²·°C; $c_p = 4.2$ kJ/kg·°C.

**Find:** feed rate $F$ and steam $V_0$ (a rating problem: the area is fixed, the throughput is unknown).

**Assumptions:** no BPE; each vapour condenses in the next chest at the boiling temperature of the effect it left; latent heats from steam tables: λ(120) = 2202.1, λ(40) = 2406.0 kJ/kg, others at the trial temperatures.

1. **First estimate** of the temperatures (1/U split of 80 °C): ΔT = 18.7, 20.7, 40.6 °C, so $T_1 \approx 101.3$, $T_2 \approx 80.6$ °C.

2. **Unknowns** $T_1$, $T_2$, $F$; equations (q in kW):
$$q_1 = U_1A(120 - T_1),\quad q_2 = U_2A(T_1 - T_2),\quad q_3 = U_3A(T_2 - 40)$$
$$V_1\lambda_1 = q_1 + F c_p(T_F - T_1),\quad q_2 = V_1\lambda_1$$
$$V_2\lambda_2 = q_2 + L_1 c_p(T_1 - T_2),\quad q_3 = V_2\lambda_2$$
$$V_3\lambda_3 = q_3 + L_2 c_p(T_2 - 40),\quad L_3 = F - V_1 - V_2 - V_3 = F x_F/x_3$$

3. **Solving** (trial and error on $T_1$, $T_2$, $F$):
$$T_1 = 101.1\ ^\circ\mathrm{C},\quad T_2 = 81.7\ ^\circ\mathrm{C}$$
$$q_1 = 2950(140)(18.9) = 7798\ \mathrm{kW},\quad q_2 = 7254\ \mathrm{kW},\quad q_3 = 7942\ \mathrm{kW}$$
$$V_1 = 11{,}590,\quad V_2 = 12{,}410,\quad V_3 = 13{,}190\ \mathrm{kg/h}$$
$$F = 41{,}990\ \mathrm{kg/h},\quad L_3 = 4800\ \mathrm{kg/h}\ (x = 0.35)$$
Checks: $\Sigma V = 37{,}190 = F - L_3$ ✓; $V_1\lambda_1 = 11{,}590(2253.5)/3600 = 7254$ kW $= q_2$ ✓.

4. **Steam:** $V_0 = q_1/\lambda_0 = 7798(3600)/2202.1 = 12{,}750$ kg/h.

**Result:** (a) about 42,000 kg/h of 4% liquor; (b) about 12,750 kg/h of steam (economy $37{,}190/12{,}750 = 2.92$).

**Comment:** the feed is hotter than the second and third effects, so forward feed makes it flash on the way down, which raises the economy close to 3.`,
        answer: String.raw`T₁ ≈ 101.1 °C, T₂ ≈ 81.7 °C; (a) F ≈ 42,000 kg/h (product 4800 kg/h); (b) steam ≈ 12,750 kg/h; economy ≈ 2.9.` } ] },

    { id: "practice-evaporation-P12", q: 12, section: "S", compulsory: false, stem: String.raw`Auxiliary equipment in Dr. Sowgath's outline (no slides): steam traps on evaporator steam chests.`,
      parts: [
        { id: "practice-evaporation-P12a", label: "(a)", marks: "15", topic: "evaporation",
          sub: "Five steam traps: seat, flow path, open/closed states and selection", type: "sketch", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Course outline "Auxiliary equipment"; MSH/Foust evaporator chapters (steam-chest condensate removal); trap practice as in Spirax-Sarco and Lieberman`,
          text: String.raw`With neat labelled sketches showing the valve, the seat and the flow path in both the open and the closed position, explain the working of (i) a ball-float trap with thermostatic air vent, (ii) an inverted-bucket trap, (iii) a balanced-pressure thermostatic trap, (iv) a bimetallic trap and (v) a thermodynamic disc trap. Which would you fit to the steam chest of the first effect of a multiple-effect evaporator, and which to the drip leg of a high-pressure steam main? Give reasons.`,
          solution: String.raw`A **steam trap** is an automatic valve that lets condensate (and air) out of a steam space but holds the steam back. On an evaporator chest it keeps the tubes from flooding with condensate (which would blanket heating surface and lower U) and stops live steam blowing through to the condensate line (which wastes steam and lowers the economy).

![Five steam traps, each shown open (discharging condensate) and closed (holding steam), with seat, valve and flow path](fig/practice-evaporation-P12-traps.svg)

| trap | property sensed | opens when | closes when | discharge |
|---|---|---|---|---|
| ball-float | density (level) | condensate raises the float; the lever lifts the valve off the seat at the bottom of the body | level falls; the float drops and seats the valve under water, so steam cannot reach the seat | continuous, at steam temperature |
| inverted bucket | density (buoyancy) | condensate fills the bucket, which sinks and pulls the valve off the top seat | steam fills the bucket, it floats and pushes the valve on its seat; a vent hole bleeds air/steam so the cycle repeats | intermittent, at steam temperature |
| balanced-pressure thermostatic | temperature | cool condensate or air contracts the liquid-filled capsule; valve lifts | at steam temperature the fill boils, the capsule expands and seats the valve; it "follows" the saturation curve at any pressure | a few °C sub-cooled, excellent air venting |
| bimetallic | temperature | cold strip is straight; valve held off the seat | two bonded metals with different expansion bend when hot and pull the valve onto the seat | sub-cooled by 10–30 °C, slow to respond |
| thermodynamic disc | velocity / pressure (Bernoulli) | cold condensate and air lift the disc and flow radially out to the outlet ring | hot condensate flashes; fast vapour under the disc lowers the pressure there, flash steam trapped in the control chamber above presses the disc on both seats; it reopens when the chamber steam condenses | intermittent, cycles audibly |

**Selection:**
- **Evaporator first-effect chest:** a **ball-float trap with a thermostatic air vent**. The load is large (the whole steam rate, here about 18,000 lb/h), continuous and modulating; the float discharges condensate as fast as it forms at steam temperature, so the tubes never water-log, and the air vent removes air at start-up (air in a chest lowers the condensing coefficient sharply). An inverted bucket is the second choice where water hammer or dirt is expected; it vents air slowly.
- **Drip leg of a high-pressure steam main:** a **thermodynamic disc trap** (or an inverted bucket). Loads are small, pressure is high, the trap may be outdoors (freezing, water hammer); the disc trap is compact, robust and cheap. It is unsuitable for the evaporator chest because it needs a pressure difference of about 0.25 bar and works badly at low or modulating chest pressure and with back pressure.
- Thermostatic traps (bellows, bimetal) suit tracers and air vents, where some sub-cooling is acceptable, not a process chest where back-up of condensate would cover tubes.`,
          answer: String.raw`Float (level) and bucket (buoyancy) are mechanical; capsule and bimetal are thermostatic; the disc trap is thermodynamic (flash-steam pressure over the disc). Fit a float trap with thermostatic air vent to the evaporator chest (large modulating load, no back-up, air venting); a disc or bucket trap to a high-pressure main drip leg.` },
        { id: "practice-evaporation-P12b", label: "(b)", marks: "10", topic: "evaporation",
          sub: "Trap sizing and stall of the first-effect chest at part load", type: "numerical", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Built on the converged design of P4 (first effect: 17,890 lb/h of 250 °F steam, U = 500, A = 1137 ft², liquor at 218.5 °F); stall concept from steam-trap practice`,
          text: String.raw`The first effect of the evaporator in P4 condenses 17,890 lb/h of steam at 250°F ($U$ = 500 Btu/h·ft²·°F, $A$ = 1137 ft², liquor boiling at 218.5°F). Its condensate is lifted 15 ft to a vented receiver at atmospheric pressure. The steam supply is throttled by a control valve when the plant runs at part load.

(i) What capacity and differential pressure would you specify for the trap at design load (safety factor 1.5)?
(ii) Below what fraction of the design load will the chest pressure fall below the back pressure, so that condensate can no longer leave through the trap ("stall")? What happens then, and how is it cured?
(iii) Repeat (ii) if the receiver is at 5 psig with no lift.`,
          solution: String.raw`**Given:** design condensate 17,890 lb/h; chest at 250 °F; $UA = 500 \times 1137 = 568{,}500$ Btu/h·°F; liquor 218.5 °F; lift 15 ft to an atmospheric receiver.

**Find:** trap rating; stall load fraction.

**Assumptions:** U constant at part load; liquor temperature fixed by the effect pressure (218.5 °F); water head 0.433 psi/ft; no line friction.

1. **Back pressure on the trap:** $p_b = 14.7 + 15(0.433) = 21.2$ psia. Chest pressure at design: saturation at 250 °F = 29.8 psia. Differential at design $= 29.8 - 21.2 = 8.6$ psi.

2. **(i) Rating:** capacity $\ge 1.5 \times 17{,}890 = 26{,}800$ lb/h at a differential of 8.6 psi (and the trap must still pass the part-load condensate at the smallest differential it will see; a float trap is chosen because its capacity depends on orifice size and it does not need a minimum differential to close).

3. **(ii) Stall:** the chest pressure follows the load. With $q = UA(T_{chest} - 218.5)$, the chest temperature falls toward 218.5 °F as the load falls. Condensate stops draining when $p_{chest} = p_b = 21.2$ psia, i.e. $T_{chest} = T_{sat}(21.2\ \mathrm{psia}) = 231.0$ °F:
$$q_{stall} = 568{,}500\,(231.0 - 218.5) = 7.1\times10^6\ \mathrm{Btu/h}$$
$$\frac{q_{stall}}{q_{design}} = \frac{7.1\times10^6}{17.89\times10^6} = 0.40$$
Below about **40% of design load** the trap stalls. Condensate backs up in the chest, floods the lower tubes, and the effective area and U fall; the flooding is unstable (hunting control, water hammer when the valve reopens, corrosion by carbonic acid in standing condensate).

4. **Cures:** fit a vacuum breaker plus a gravity drain to a receiver below the chest (remove the lift); use a pump-trap (steam- or air-operated condensate pump) in series with the float trap; or limit turndown/control the chest by liquor level rather than steam pressure.

5. **(iii) Receiver at 5 psig, no lift:** $p_b = 19.7$ psia, $T_{sat} = 227.1$ °F,
$$\frac{q_{stall}}{q_{design}} = \frac{568{,}500\,(227.1 - 218.5)}{17.89\times10^6} = 0.27$$

**Result:** specify about 26,800 lb/h at 8.6 psi; stall below about 40% load with a 15 ft lift to atmosphere (27% with a 5 psig receiver and no lift). Without lift and with an atmospheric receiver the chest (never below 218.5 °F, 16.7 psia) cannot stall.`,
          answer: String.raw`(i) ≈ 26,800 lb/h at ΔP ≈ 29.8 − 21.2 = 8.6 psi; (ii) stall when T_chest < 231.0 °F → q < 7.1 × 10⁶ Btu/h, i.e. below ≈ 40% load: condensate floods the chest; cure with a pump-trap, vacuum breaker and gravity drain; (iii) ≈ 27% load.` } ] },

    { id: "practice-evaporation-P13", q: 13, section: "S", compulsory: false, stem: String.raw`Auxiliary equipment in Dr. Sowgath's outline (no slides): condensers for the last effect.`,
      parts: [
        { id: "practice-evaporation-P13a", label: "(a)", marks: "10", topic: "evaporation",
          sub: "Barometric (contact) versus surface condensers for evaporators", type: "theory", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Course outline "Auxiliary equipment"; Ludwig Vol. 1 ch. 6 (barometric condenser outlet 5 °F above the water inlet; surface condenser vent 7.5 °F below steam saturation), Ejector slides "Barometric condensers are direct contact coolers and condensers"`,
          text: String.raw`Explain how the vapour from the last effect of an evaporator is condensed in (i) a counter-current barometric condenser and (ii) a shell-and-tube surface condenser. Why is a barometric condenser fitted with a 34 ft tail pipe? State when each type is preferred, and what load each passes to the vacuum ejector.`,
          solution: String.raw`### (i) Barometric (direct-contact) condenser
- A tall vessel with cascade trays or baffles. Vapour enters near the bottom, cooling water is sprayed in at the top; the two flow counter-currently and the vapour condenses directly on the water (no heat-transfer surface).
- The water and condensate leave through a **barometric leg (tail pipe)** into a hot well open to the atmosphere. Because the condenser is under vacuum, the water stands in the leg at a height equal to the pressure difference: $h = (p_{atm} - p)/\rho g$ ≤ 34 ft of water at perfect vacuum. A leg of about 34 ft therefore drains the condenser by gravity with no pump, whatever the vacuum.
- Non-condensables (air leakage, gases released from the liquor and air dissolved in the cooling water) leave from the top, cooled to about 5 °F above the inlet water, to a steam-jet ejector or vacuum pump.
- Cheap, no tubes to foul, very small temperature approach, low pressure drop. But condensate is mixed with the cooling water (cannot be recovered; contaminated if the vapour carries volatile organics), it needs about 40 ft of headroom, and dissolved air in the water increases the ejector load. A **low-level jet condenser** uses a water-jet pump instead of the leg when headroom is short.

### (ii) Surface condenser
- Vapour condenses outside (or inside) tubes cooled by water; condensate and cooling water stay separate. Non-condensables collect in a cooled vent zone and leave about 7.5 °F below the saturation temperature of the steam at condenser pressure.
- A condensate pump (or leg) removes the condensate from the hot well.
- Preferred when the condensate must be recovered (pure water, solvent), when the vapour is toxic or would contaminate the cooling water, or when cooling water is scarce or must be treated (closed circuits). Costs more, tubes foul, larger approach.

### Load passed to the ejector
Air (leakage + released gases) saturated with water vapour at the vent temperature; in a barometric condenser also the air liberated from the cooling water (HEI Fig. 6-22). The ejector must be sized for this mixture, converted to the 70 °F air equivalent (see ejector set).`,
          answer: String.raw`Barometric: direct contact, counter-current water spray, drained by a ≈34 ft leg (≥ (p_atm − p)/ρg), cheap, small approach, condensate lost, needs headroom, extra air from the water. Surface: tubes keep condensate separate (recoverable/non-contaminating), needs a condensate pump, costlier. Ejector load = air + gases saturated with vapour at the vent temperature (+ water-released air for barometric).` },
        { id: "practice-evaporation-P13b", label: "(b)", marks: "15", topic: "evaporation",
          sub: "Last-effect condenser: water rate, tail-pipe height and surface-condenser area", type: "numerical", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Built on P4 (last effect: 14,740 lb/h of vapour at 125 °F); Ludwig Vol. 1 Eq. (6-23) and Example 6-12 for the barometric condenser rules`,
          text: String.raw`The last effect of the evaporator in P4 sends 14,740 lb/h of water vapour at 125°F to a condenser. Cooling water is available at 85°F.

(i) For a counter-current barometric condenser with a terminal difference of 5°F (outlet water 5°F below the vapour temperature) find the cooling-water rate (lb/h and gal/min) and compare with Ludwig's short-cut $\mathrm{GPM} = W_sL/(500\,\Delta t_w)$ with L = 1000 Btu/lb. Find the minimum height of the barometric leg.
(ii) If 10 lb/h of air leaks into the system, how much water vapour leaves with it to the ejector (air outlet 5°F above the water inlet)?
(iii) For a surface condenser with water heated from 85 to 110°F and U = 500 Btu/h·ft²·°F, find the water rate and the area.`,
          solution: String.raw`**Given:** $W = 14{,}740$ lb/h vapour at 125 °F (saturation pressure 1.945 psia); water in at 85 °F.

**Find:** water rates, leg height, vapour to the ejector, surface-condenser area.

**Assumptions:** saturated vapour (no BPE); steam tables: $H_g(125\ ^\circ\mathrm{F}) = 1115.3$, $\lambda = 1022.3$ Btu/lb; condensate in the barometric condenser leaves with the water at 120 °F ($h = 88$ Btu/lb); 1 gal/min = 500 lb/h.

1. **(i) Water rate:** outlet water $= 125 - 5 = 120$ °F, rise 35 °F.
$$W_w = \frac{14{,}740\,(1115.3 - 88)}{120 - 85} = 432{,}700\ \mathrm{lb/h} = 865\ \mathrm{gal/min}$$
Ludwig short cut: $\mathrm{GPM} = 14{,}740(1000)/(500 \times 35) = 842$ gal/min (3% low, because it uses 1000 instead of 1027 Btu/lb).

2. **Leg height:** $h = (14.70 - 1.95)/0.433 = 29.4$ ft of water. Use the standard 34 ft leg (covers any vacuum, density changes and a seal in the hot well).

3. **(ii) Vapour with the air:** vent at $85 + 5 = 90$ °F, $p_v = 0.699$ psia; air partial pressure $1.945 - 0.699 = 1.246$ psia.
$$W_v = W_a\,\frac{18}{29}\,\frac{p_v}{p_a} = 10 \times 0.62 \times \frac{0.699}{1.246} = 3.5\ \mathrm{lb/h}$$
Ejector load ≈ 13.5 lb/h (plus air released from 865 gal/min of cooling water, HEI Fig. 6-22).

4. **(iii) Surface condenser:** $q = 14{,}740(1022.3) = 15.07\times10^6$ Btu/h. Water $= 15.07\times10^6/25 = 603{,}000$ lb/h = 1205 gal/min.
$$\Delta T_{lm} = \frac{(125 - 85) - (125 - 110)}{\ln(40/15)} = 25.5\ ^\circ\mathrm{F},\qquad A = \frac{15.07\times10^6}{500 \times 25.5} = 1180\ \mathrm{ft^2}$$

**Result:** barometric: 433,000 lb/h (865 gal/min, Ludwig 842), leg ≥ 29.4 ft (use 34 ft), 3.5 lb/h vapour per 10 lb/h air; surface: 1205 gal/min and about 1180 ft². The contact condenser needs 30% less water (larger temperature rise) and no surface, which is why most evaporators use it unless the condensate must be kept.`,
          answer: String.raw`(i) 4.33 × 10⁵ lb/h ≈ 865 gal/min (Ludwig 842); leg ≥ 29.4 ft → 34 ft; (ii) 3.5 lb/h vapour with 10 lb/h air; (iii) q = 15.1 × 10⁶ Btu/h, 1205 gal/min, ΔT_lm = 25.5 °F, A ≈ 1180 ft².` } ] },

    { id: "practice-evaporation-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P14", label: "", marks: "15", topic: "evaporation",
        sub: "Condensate discharge methods and flash recovery in a triple effect", type: "numerical", syllabus: "partial", repeats: [],
        origin: "potential", ref: String.raw`Course outline "Auxiliary equipment: condensate discharge"; MSH Ex. 16.3 (condensates at chest temperatures); built on the P4 design`,
        text: String.raw`(a) Describe the methods used to discharge condensate from the steam chests of a multiple-effect evaporator, and say where each condensate goes.
(b) In the evaporator of P4 the chest of effect II condenses 11,960 lb/h at 218.5°F and the chest of effect III 13,300 lb/h at 183.5°F; effect III boils at 125°F. If the condensate of chest II is flashed into chest III and the combined condensate of chest III is then flashed to the condenser pressure, how much flash vapour is produced at each stage? What is the pressure in chest III, and how is its condensate removed?`,
        solution: String.raw`### (a) Methods of condensate discharge
1. **First-effect chest (live steam):** clean condensate, drained through a float trap (or level-controlled pot) and returned to the boiler feed system; it is valuable (treated water, sensible heat).
2. **Later chests (vapour condensate):** condensed vapour from the liquor may carry entrainment or volatiles, so it is usually kept apart from boiler condensate. It is discharged **in cascade**: each chest drains through a trap or a flash pot (a small level-controlled vessel) into the next, lower-pressure chest, where part of it flashes and adds to the heating vapour.
3. **Last chest and condenser:** these are under vacuum, so condensate cannot drain to atmosphere by itself. It is removed by a **barometric leg** to a hot well, by a **condensate (extraction) pump** with enough NPSH, or mixed into the barometric condenser water.
4. **Traps** are used for small or single chests; **level-controlled pots with control valves** for large multiple-effect plants, because traps cannot hold a seal reliably at sub-atmospheric pressure.
5. **Pump-traps** where the chest pressure can fall below the back pressure (see P12b).

### (b) Flash cascade
**Assumptions:** saturated liquid at the chest temperature; steam tables: $h_f(218.5) = 186.8$, $h_f(183.5) = 151.5$, $h_f(125) = 93.0$ Btu/lb; $\lambda(183.5) = 988$, $\lambda(125) = 1022$ Btu/lb.

1. **Chest II → chest III:**
$$f_1 = \frac{h_f(218.5) - h_f(183.5)}{\lambda(183.5)} = 0.0357,\qquad 11{,}960 \times 0.0357 = 427\ \mathrm{lb/h}$$
of flash vapour joins the heating vapour of effect III.

2. **Chest III → condenser:** condensate $= 13{,}300 + (11{,}960 - 427) = 24{,}830$ lb/h at 183.5 °F;
$$f_2 = \frac{h_f(183.5) - h_f(125)}{\lambda(125)} = 0.0572,\qquad 24{,}830 \times 0.0572 = 1420\ \mathrm{lb/h}$$
(this one only adds to the condenser load; it does no useful work unless used to preheat feed).

3. **Chest III pressure** = saturation at 183.5 °F = **8.1 psia** (vacuum). Condensate needs a leg of at least $(14.7 - 8.1)/0.433 = 15.2$ ft to drain to an atmospheric hot well, or a condensate pump.

**Result:** 427 lb/h flash recovered in chest III (about 3% more heating vapour for effect III); 1420 lb/h flashes to the condenser; chest III is at 8.1 psia, so its condensate is pumped or drained by a leg of more than 15 ft.`,
        answer: String.raw`(a) Effect-I condensate via float trap to boiler; later condensates cascaded through flash pots/traps into the next chest; vacuum chests drained by barometric leg or extraction pump; pump-traps where stall occurs. (b) 427 lb/h flashes from chest II into chest III; 1420 lb/h of the 24,830 lb/h flashes to the condenser; chest III at 8.1 psia needs a > 15 ft leg or a pump.` } ] },

    { id: "practice-evaporation-P15", q: 15, section: "S", compulsory: false, stem: String.raw`Auxiliary equipment in Dr. Sowgath's outline (no slides): entrainment separators.`,
      parts: [
        { id: "practice-evaporation-P15a", label: "(a)", marks: "10", topic: "evaporation",
          sub: "Types of entrainment separators and the notes' vapour-separator dimensions", type: "sketch", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Handwritten notes "Evaporator Notes with methods (IIT)", pp. 10–11 (vapour–liquid separators: tangential entry, knitted-mesh demister, D_v ≥ 1 m, 0.4 m above the pad, D_v/2 ≥ 0.6 m; horizontal separators L/D = 3–5); MSH 5th ed. Sec. 16 (LTV impingement baffle)`,
          text: String.raw`Sketch a vertical vapour–liquid separator for an evaporator body with a tangential inlet and a wire-mesh demister and mark the minimum dimensions given in the notes. Briefly describe three other kinds of entrainment separator. When is a horizontal separator used, and what L/D ratios are recommended?`,
          solution: String.raw`![Vertical separator with tangential inlet and mesh pad, and sketches of an impingement baffle, a chevron separator and a cyclone](fig/practice-evaporation-P15-sketch.svg)

**Why needed:** vapour leaving the boiling liquor carries droplets (worse with foaming liquors and at low pressure where the vapour velocity is high). Entrainment loses product, contaminates the condensate, and fouls the next effect's chest.

**Vertical separator (notes):** the mixture enters **tangentially**, so the liquid is thrown to the wall by centrifugal force and drains to the liquor pool; the vapour rises through a **knitted wire-mesh pad**, where fine droplets impinge on the wires, coalesce and drain back. Minimum dimensions from the notes: vessel diameter $D_v \ge 1$ m; at least 0.4 m between the pad and the top; the space between the inlet and the pad at least $D_v/2$ and not less than 0.6 m. The diameter itself is set by the allowable vapour velocity (Souders–Brown, see (b)). Mesh pads give high separating efficiency (droplets down to about 5–10 μm) at a pressure drop of only a few mm of water.

**Other types:**
- **Impingement (deflector) baffle:** in a long-tube vertical evaporator the high-velocity vapour–liquid jet from the tubes hits a plate; liquid drops out and foam is broken (MSH).
- **Chevron / vane separator:** zig-zag plates; the vapour changes direction several times and droplets hit the vanes and drain. Handles higher velocity and dirtier liquids than mesh.
- **Cyclone / centrifugal separator:** tangential entry into a separate cylindrical vessel; used on forced-circulation and crystallising evaporators, and where solids would plug a mesh.

**Horizontal separators (notes):** used when a large liquid hold-up (residence time) is needed or the liquid load is high; the vapour path is long and the pad sits in the vapour space near the outlet, often with a weir. Recommended $L/D$ = 3 for 0–20 bar, 4 for 20–35 bar and 5 above 35 bar.`,
          answer: String.raw`Tangential entry + knitted-mesh demister; D_v ≥ 1 m, ≥ 0.4 m above the pad, inlet-to-pad ≥ D_v/2 and ≥ 0.6 m. Others: impingement baffle, chevron/vane, cyclone. Horizontal when large liquid hold-up is needed; L/D = 3 (0–20 bar), 4 (20–35 bar), 5 (> 35 bar).` },
        { id: "practice-evaporation-P15b", label: "(b)", marks: "10", topic: "evaporation",
          sub: "Souders–Brown sizing of the vapour bodies of the triple effect", type: "numerical", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Built on P4 (vapour rates and temperatures of the three effects); Souders–Brown relation as used for vapour–liquid separators (Ludwig Vol. 1 ch. 4)`,
          text: String.raw`Estimate the diameter of the vapour body (above the mesh pad) of each effect of the evaporator in P4, using $u_{max} = K\sqrt{(\rho_L - \rho_V)/\rho_V}$ with K = 0.35 ft/s for a mesh pad. Vapour rates: effect I 11,960 lb/h at 218.5°F, effect II 13,300 lb/h at 183.5°F, effect III 14,740 lb/h at 125°F (all saturated). Comment on the result.`,
          solution: String.raw`**Given:** vapour rates and temperatures above; $K = 0.35$ ft/s.

**Find:** body diameters.

**Assumptions:** saturated vapour and liquid densities from steam tables; vapour velocity limited to $u_{max}$ over the full cross-section.

1. **Densities and volumetric flows:**

| effect | T, °F | $\rho_V$, lb/ft³ | $\rho_L$, lb/ft³ | $Q = W/\rho_V$, ft³/s |
|---|---|---|---|---|
| I | 218.5 | 0.0421 | 59.7 | 78.9 |
| II | 183.5 | 0.0214 | 60.5 | 172.5 |
| III | 125.0 | 0.00561 | 61.6 | 730 |

2. **Allowable velocity** and area $A = Q/u_{max}$, $D = \sqrt{4A/\pi}$:

| effect | $u_{max}$, ft/s | A, ft² | D, ft (m) |
|---|---|---|---|
| I | $0.35\sqrt{59.7/0.0421} = 13.2$ | 6.0 | 2.8 (0.84) → use 1 m min. |
| II | 18.6 | 9.3 | 3.4 (1.05) |
| III | 36.7 | 19.9 | 5.0 (1.53) |

**Result:** about 1.0 m, 1.05 m and 1.5 m (2.8, 3.4 and 5.0 ft); effect I is set by the notes' minimum $D_v$ = 1 m.

**Comment:** although the mass rates are similar, the last effect at 1.9 psia handles nine times the vapour volume of the first, so it has the largest body and the highest entrainment risk; that is where mesh pads are most needed. Without a pad (K ≈ 0.2 ft/s) the last body would need 6.7 ft.`,
          answer: String.raw`u_max = 13.2, 18.6, 36.7 ft/s → D ≈ 2.8, 3.4, 5.0 ft (use ≥ 1 m, 1.05 m, 1.5 m); last effect largest because ρ_V = 0.0056 lb/ft³ (730 ft³/s).` } ] },

    { id: "practice-evaporation-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P16", label: "", marks: "20", topic: "evaporation",
        sub: "Optimum cleaning cycle from plant U–time data (SI)", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; method of the "Maintenance" slides (1/U² = 1/U₀² + βθ) and 2013-14 Q8(b), 2018-19 Q3(e)`,
        text: String.raw`An evaporator of 150 m² heating surface works with a constant temperature difference of 30°C; the latent heat of the vapour is 2300 kJ/kg. Plant records after a cleaning give:

| boiling time, h | 0 | 10 | 20 | 40 | 60 | 80 |
|---|---|---|---|---|---|---|
| U, W/m²·°C | 2800 | 2130 | 1780 | 1400 | 1190 | 1045 |

(a) Show that the data follow $1/U^2 = 1/U_0^2 + \beta t$ and find $U_0$ and β by least squares.
(b) A cleaning takes 6 h. Find the boiling time per cycle that maximises the average evaporation rate, and that rate.
(c) Compare with a fixed schedule of cleaning every 48 h (42 h boiling) and every 86 h (80 h boiling).`,
        solution: String.raw`**Given:** $A = 150$ m², $\Delta T = 30$ °C, $\lambda = 2300$ kJ/kg, $t_c = 6$ h, data above.

**Find:** $U_0$, β, $t_{b,opt}$, average evaporation rates.

**Assumptions:** constant ΔT and λ; no evaporation during cleaning.

1. **Linearise:** $1/U^2\times10^7$ = 1.276, 2.204, 3.156, 5.102, 7.062, 9.157. Plotted against t these lie on a straight line (correlation 0.9997). Least squares:
$$\beta = 9.83\times10^{-9}\ (\mathrm{W/m^2\,^\circ C})^{-2}\,\mathrm{h^{-1}},\qquad \frac1{U_0^2} = 1.218\times10^{-7} \Rightarrow U_0 = 2865\ \mathrm{W/m^2\,^\circ C}$$
Check: the fitted U at 40 h is 1393 (data 1400), at 80 h 1049 (data 1045).

2. **Water evaporated in a boiling period** $t_b$:
$$m = \frac{A\Delta T}{\lambda}\int_0^{t_b}U\,dt = \frac{A\Delta T}{\lambda}\,\frac{2}{\beta}\left[\sqrt{b + \beta t_b} - \sqrt b\right],\qquad b = 1/U_0^2$$
(with t in h, multiply by 3600 s/h).

3. **(b) Optimum boiling time:**
$$t_{b,opt} = t_c + 2\sqrt{\frac{b\,t_c}{\beta}} = 6 + 2\sqrt{\frac{1.218\times10^{-7}(6)}{9.83\times10^{-9}}} = 6 + 2(8.62) = 23.2\ \mathrm{h}$$
Evaporated per cycle:
$$m = \frac{150(30)}{2300\times10^3}\,\frac{2}{9.83\times10^{-9}}\left[\sqrt{1.218\times10^{-7} + 9.83\times10^{-9}(23.2)} - \sqrt{1.218\times10^{-7}}\right](3600) = 348{,}000\ \mathrm{kg}$$
Average rate $= 348{,}000/(23.2 + 6) = 11{,}900$ kg/h. (U at shutdown = 1690 W/m²·°C.)

4. **(c) Fixed schedules:**

| boiling time, h | per cycle, kg | cycle, h | average, kg/h |
|---|---|---|---|
| 23.2 (optimum) | 348,000 | 29.2 | 11,900 |
| 42 | 548,000 | 48 | 11,410 |
| 80 | 865,000 | 86 | 10,060 |

For comparison a permanently clean surface would give $150(30)(2865)(3600)/2.3\times10^6 = 20{,}200$ kg/h.

**Result:** $U_0 \approx 2870$ W/m²·°C, $\beta \approx 9.8\times10^{-9}$; boil about 23 h and clean (6 h): 11,900 kg/h on average, 4% more than a 48-h cycle and 18% more than an 86-h cycle. The optimum is flat near its maximum, so a daily (24 + 6 h) cleaning plan is the practical choice. Antiscalants that halve β would raise the average rate by about a third.`,
        answer: String.raw`U₀ ≈ 2865 W/m²·°C, β ≈ 9.83 × 10⁻⁹ (W/m²°C)⁻² h⁻¹; t_b,opt = 6 + 2√(b t_c/β) = 23.2 h; 348 t per cycle → 11,900 kg/h (vs 11,410 for 42 h and 10,060 for 80 h boiling).` } ] },

    { id: "practice-evaporation-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P17", label: "", marks: "25", topic: "evaporation",
        sub: "Double-effect forward feed with BPE: steam, economy and equal areas", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style; Badger–McCabe trial method of the notes with steam tables (as in 2017-18 Q1(a) but forward feed, given BPEs and SI units)`,
        text: String.raw`A double-effect forward-feed evaporator with equal areas concentrates 10,000 kg/h of an aqueous solution from 10% to 40% solids. The feed enters at 30°C. Saturated steam at 200 kPa is supplied to the first effect and the vapour space of the second effect is held at 15 kPa. The BPE is 1.0°C in the first effect and 4.0°C in the second. Specific heats: feed 3.9, liquor leaving I 3.6, product 3.2 kJ/kg·°C (enthalpy datum 0°C). $U_1$ = 2500 and $U_2$ = 1500 W/m²·°C. Find the boiling temperatures, the steam consumption, the economy and the area of each effect.`,
        solution: String.raw`**Given:** $F = 10{,}000$ kg/h, $x_F = 0.10$, $x_2 = 0.40$, $T_F = 30$ °C; steam 200 kPa; second vapour space 15 kPa; BPE 1.0 and 4.0 °C; $U_1 = 2500$, $U_2 = 1500$ W/m²·°C.

**Find:** $T_1$, $T_2$, $S$, economy, $A$.

**Assumptions:** vapour leaves each effect superheated by the BPE and condenses in the next chest at the saturation temperature of its pressure; condensates leave saturated; no losses.

1. **Steam tables:** 200 kPa: $T_s = 120.2$ °C, $\lambda_s = 2201.6$ kJ/kg. 15 kPa: $T_{sat} = 54.0$ °C, so $T_2 = 54.0 + 4.0 = 58.0$ °C.

2. **Material balance:** $L_2 = 10{,}000(0.10)/0.40 = 2500$ kg/h, $V_1 + V_2 = 7500$ kg/h.

3. **Available drop:** $\Sigma\Delta T = 120.2 - 54.0 - (1.0 + 4.0) = 61.2$ °C. First trial ∝ 1/U: $\Delta T_1 = 61.2(1/2500)/(1/2500 + 1/1500) = 23.0$, $\Delta T_2 = 38.3$ °C. So $T_1 = 97.2$ °C and the vapour from I is at 96.2 °C saturation (88.6 kPa).

4. **Enthalpy balances, trial 1:** $H_1$ (88.6 kPa, 97.2 °C) = 2671.7 kJ/kg; condensate in chest II $h_{c1} = 403.3$; $H_2$ (15 kPa, 58 °C) = 2606.1 kJ/kg; liquors $h = c_pT$.
Effect II: $L_1h_1 + V_1(H_1 - h_{c1}) = V_2H_2 + L_2h_2$ with $L_1 = F - V_1$, $V_2 = 7500 - V_1$:
$$V_1 = \frac{7500H_2 + L_2h_2 - Fh_1}{H_1 - h_{c1} - h_1 + H_2} = 3649\ \mathrm{kg/h},\qquad V_2 = 3851\ \mathrm{kg/h}$$
Effect I: $S\lambda_s = V_1H_1 + L_1h_1 - Fh_F \Rightarrow S = 4906$ kg/h.
Areas: $A_1 = q_1/(U_1\Delta T_1) = 3001\ \mathrm{kW}/(2500 \times 23.0) = 52.3$ m²; $A_2 = 2299\ \mathrm{kW}/(1500 \times 38.3) = 40.0$ m².

5. **Correct the ΔT's:** $\bar A = (52.3 \times 23.0 + 40.0 \times 38.3)/61.2 = 44.6$ m²; $\Delta T_1' = 23.0(52.3/44.6) = 26.9$, $\Delta T_2' = 34.3$ °C.

6. **Trial 2** ($T_1 = 93.3$ °C): $V_1 = 3660$, $V_2 = 3840$, $S = 4867$ kg/h; $A_1 = 44.3$, $A_2 = 45.0$ m² (within 1.5%). A final small correction gives:

| | value |
|---|---|
| $\Delta T_1$, $\Delta T_2$ | 26.7, 34.6 °C |
| $T_1$ (vapour sat. temp., pressure) | 93.5 °C (92.5 °C, 77 kPa) |
| $T_2$ | 58.0 °C |
| $V_1$, $V_2$ | 3660, 3840 kg/h |
| $x_1$ | 0.158 |
| steam $S$ | 4870 kg/h |
| $q_1$ | 2978 kW |
| area per effect | 44.7 m² |

**Result:** $T_1 \approx 93.5$ °C, $T_2 = 58.0$ °C; steam ≈ 4870 kg/h; economy $= 7500/4870 = 1.54$; area ≈ 45 m² in each effect.

**Comment:** the economy is well below 2 because the cold feed (30 °C) is heated to 93.5 °C in the first effect with live steam; a feed preheater on the first-effect vapour, or backward feed, would raise it.`,
        answer: String.raw`ΣΔT = 61.2 °C; trial 1 (23.0/38.3 °C) gives 52.3/40.0 m²; converged ΔT = 26.7/34.6 °C, T₁ = 93.5 °C, T₂ = 58.0 °C; V₁ = 3660, V₂ = 3840 kg/h; steam 4870 kg/h; economy 1.54; A ≈ 44.7 m² per effect.` } ] },

    { id: "practice-evaporation-P18", q: 18, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P18", label: "", marks: "15", topic: "evaporation",
        sub: "Mechanical vapour recompression versus single and triple effect", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Handwritten notes "IIT" p. 2 ("② vapor recompression" to improve steam economy); MSH 5th ed. Sec. "Vapor recompression" (Fig. 16.12: optimum ΔT about 5 °C, equivalent to 10–15 effects)`,
        text: String.raw`A dilute aqueous solution is evaporated at atmospheric pressure (101.3 kPa); it boils at 101°C (BPE 1°C) and 10,000 kg/h of water is to be removed. In a mechanical-recompression evaporator the vapour is compressed so that it condenses in the calandria at 107°C.

(a) Find the compressor discharge pressure, the shaft power for an isentropic efficiency of 75%, and the temperature of the compressed vapour.
(b) Compare the hourly energy cost with a single effect (economy 0.95) and a triple effect (economy 2.5), if electricity costs USD 0.10/kWh and steam USD 25/t.
(c) Express the compressor power as an "equivalent number of effects" if electricity is generated from steam with 30% efficiency, and state two limitations of vapour recompression.`,
        solution: String.raw`**Given:** $\dot m = 10{,}000$ kg/h = 2.778 kg/s of vapour at 101.3 kPa and 101 °C (1 K superheat); condensing at 107 °C; $\eta_s = 0.75$.

**Find:** $p_2$, power, $T_2$; costs; equivalent effects.

**Assumptions:** feed preheated to near its boiling point by the hot condensate and product (MSH Fig. 16.12), so the compressed vapour supplies only the latent load; IAPWS steam properties.

1. **Discharge pressure:** saturation pressure at 107 °C: $p_2 = 129.5$ kPa (compression ratio 1.28).

2. **Isentropic compression:** inlet $h_1 = 2677.7$ kJ/kg; at 129.5 kPa with $s_2 = s_1$: $h_{2s} = 2720.7$ kJ/kg.
$$w = \frac{h_{2s} - h_1}{\eta_s} = \frac{43.0}{0.75} = 57.3\ \mathrm{kJ/kg},\qquad P = 2.778 \times 57.3 = 159\ \mathrm{kW}$$
Actual outlet $h_2 = 2735.0$ kJ/kg → $T_2 = 130$ °C (superheated 23 K; it is usually desuperheated with a water spray before the calandria). Heat available on condensing to liquid at 107 °C: $2735.0 - 448.7 = 2286$ kJ/kg, just over the 2274 kJ/kg needed per kg evaporated, so only a little make-up steam is needed for losses.

3. **(b) Hourly cost:**

| system | energy | cost, USD/h |
|---|---|---|
| MVR | 159 kW electricity | 15.9 |
| triple effect | 10,000/2.5 = 4000 kg/h steam | 100 |
| single effect | 10,000/0.95 = 10,530 kg/h steam | 263 |

4. **(c) Equivalent effects:** 159 kW of electricity needs $159/0.30 = 530$ kW of steam heat ≈ $530 \times 3600/2257 = 845$ kg/h of steam. Equivalent economy $= 10{,}000/845 \approx 12$, i.e. the MVR unit behaves like about 12 effects (MSH: 10 to 15).

**Limitations:** the small ΔT (5–7 K) needs a large heating surface (and works only for liquors with small BPE, because the BPE must be added to the compression ratio); compressors are expensive, need maintenance and clean vapour (entrainment erodes blades); performance falls quickly if the liquor fouls.

**Result:** $p_2$ = 129.5 kPa, $P \approx 159$ kW, $T_2 \approx 130$ °C; about USD 16/h against USD 100/h (triple effect) and USD 263/h (single effect); equivalent to about 12 effects.`,
        answer: String.raw`(a) p₂ = 129.5 kPa, w = 57.3 kJ/kg, P ≈ 159 kW, T₂ ≈ 130 °C; (b) MVR USD 15.9/h vs triple USD 100/h vs single USD 263/h; (c) ≈ 845 kg/h steam equivalent → ≈ 12 effects; limited by small ΔT (large area, small BPE only) and compressor cost/maintenance.` } ] },

    { id: "practice-evaporation-P19", q: 19, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-evaporation-P19", label: "", marks: "15", topic: "evaporation",
        sub: "Optimum number of effects from steam cost and area cost with BPE", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style numerical version of 2013-14 Q8(b), 2014-15 Q5(a) and 2022-23 Q1(c) (optimum number of effects); MSH Sec. "Optimum number of effects"`,
        text: String.raw`An evaporator plant must remove 30,000 kg/h of water for 8000 h/yr. Steam costs USD 20/t and the economy of an N-effect unit may be taken as 0.85N. The total temperature drop available is 60°C and each effect loses 3°C to BPE. A single effect would need 400 m²; the area of each effect of an N-effect unit is then $A_N = 22{,}800/(60 - 3N)$ m². Installed heating surface costs USD 2500/m², and the annual fixed charges are 20% of the investment. Find the optimum number of effects.`,
        solution: String.raw`**Given:** $W = 30{,}000$ kg/h, 8000 h/yr, steam USD 20/t, economy $0.85N$; $A_N = 22{,}800/(60 - 3N)$ m² per effect; USD 2500/m², fixed charges 20%/yr.

**Find:** N giving the lowest total annual cost.

**Assumptions:** every effect has the same area (each transfers about 1/N of the heat at about 1/N of the net ΔT); other costs (pumps, condenser, labour) independent of N.

1. **Check the area formula:** for N = 1, $22{,}800/57 = 400$ m² ✓. Net drop $= 60 - 3N$, so each effect works at $(60 - 3N)/N$ while carrying $1/N$ of the load: area per effect $\propto 1/(60 - 3N)$.

2. **Annual steam cost:** $\dfrac{30{,}000}{0.85N}\times8000\times\dfrac{20}{1000} = \dfrac{5.647\times10^6}{N}$ USD/yr.

3. **Annual fixed charges:** $0.20 \times 2500 \times N A_N$.

| N | economy | steam, USD/yr | area/effect, m² | total area, m² | fixed, USD/yr | total, USD/yr |
|---|---|---|---|---|---|---|
| 1 | 0.85 | 5,647,000 | 400 | 400 | 200,000 | 5,847,000 |
| 2 | 1.70 | 2,824,000 | 422 | 844 | 422,000 | 3,246,000 |
| 3 | 2.55 | 1,882,000 | 447 | 1341 | 671,000 | 2,553,000 |
| 4 | 3.40 | 1,412,000 | 475 | 1900 | 950,000 | 2,362,000 |
| 5 | 4.25 | 1,129,000 | 507 | 2533 | 1,267,000 | 2,396,000 |
| 6 | 5.10 | 941,000 | 543 | 3257 | 1,629,000 | 2,570,000 |

**Result:** the minimum total cost is at **N = 4** (USD 2.36 M/yr); 5 effects cost only 1.5% more, so the optimum is flat and the decision would also weigh space, control and the BPE of the strongest liquor.

**Exam points:** steam cost falls as 1/N while fixed charges rise faster than N (because the BPE losses add up and cut the net ΔT), giving a minimum; higher steam prices push the optimum to more effects, high BPE or expensive materials (e.g. nickel for caustic) to fewer.`,
        answer: String.raw`Total annual cost = 5.647 × 10⁶/N + 0.2(2500)N·22,800/(60 − 3N): USD 5.85 M, 3.25 M, 2.55 M, 2.36 M, 2.40 M, 2.57 M for N = 1…6 → optimum N = 4.` } ] },

    { id: "practice-evaporation-P20", q: 20, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-evaporation-P20a", label: "(a)", marks: "12", topic: "evaporation",
          sub: "Choose the evaporator type and feed arrangement for four liquors", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides "Liquid characteristics", "Quick comparison table", "Forward feed / Backward feed"; MSH 5th ed. Sec. 16 (types of evaporators)`,
          text: String.raw`Recommend, with reasons, an evaporator type and (where relevant) a feed arrangement for: (i) concentrating sugar-cane juice from 15 to 65% Brix in a sugar mill, (ii) concentrating a foaming detergent (surfactant) solution, (iii) evaporating brine until salt crystallises, (iv) concentrating tomato pulp to a viscous paste (heat sensitive).`,
          solution: String.raw`| liquor | key characteristics | recommendation | reasons |
|---|---|---|---|
| (i) cane juice, 15 → 65% Brix | large throughput, moderate viscosity at the end, sugar caramelises (colour) at high temperature, scaling (calcium salts) | **multiple-effect (4–5) Robert/short-tube vertical (calandria) or long-tube rising-film units, forward feed** | forward feed needs no pumps, the juice is hot (clarified at ≈ 100 °C) so it flashes down the effects; the thickest syrup is in the last, coolest effect, which limits colour formation; high economy for the large duty; scale removed by periodic boil-out |
| (ii) foaming detergent | foams, moderate viscosity | **long-tube vertical (climbing-film) evaporator** | the high-velocity vapour–liquid mixture breaks the foam on the impingement baffle at the top (slides: LTV "suitable for foaming liquids") |
| (iii) brine to crystallisation | salt deposits, scaling, solid product | **forced-circulation evaporator (crystallising), often mixed or parallel feed** | high tube velocity (2–5 m/s) and boiling suppressed in the tubes stops salt from depositing on the surface; parallel feed suits crystallising evaporators (slides/notes: "used in crystallising evaporators, no liquid transfer") |
| (iv) tomato paste | heat sensitive, very viscous at the end | **falling-film for the first stages, finishing in an agitated-film (wiped-film) evaporator under vacuum** | short residence time and low temperature protect colour and flavour; the agitator keeps a thin turbulent film on the wall so U stays high for a very viscous product (slides: agitated film for "high viscosity/slurry") |

General rule from the slides: the choice is a matter of economics, but liquid characteristics (concentration, foaming, scale, temperature sensitivity, materials of construction) may limit it.`,
          answer: String.raw`(i) Multiple-effect calandria/LTV, forward feed; (ii) long-tube vertical climbing film (foam breaker); (iii) forced circulation (crystallising), mixed/parallel feed; (iv) falling film + agitated-film finisher under vacuum.` },
        { id: "practice-evaporation-P20b", label: "(b)", marks: "6", topic: "evaporation",
          sub: "Dühring line from two boiling points: BPE at another pressure", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides "Dühring's rule" (boiling point of a solution is a linear function of that of water at the same pressure)`,
          text: String.raw`A 20% NaCl solution boils at 105.2°C at 101.3 kPa and at 64.6°C when the pressure is such that water boils at 60°C. Using Dühring's rule, find the boiling point and the BPE of the solution at 30 kPa.`,
          solution: String.raw`**Given:** points (water 100 °C, solution 105.2 °C) and (60 °C, 64.6 °C).

**Find:** $T_{soln}$ and BPE at 30 kPa.

**Assumptions:** Dühring line straight between and beyond the points.

1. **Slope:** $k = (105.2 - 64.6)/(100 - 60) = 1.015$.

2. **Water at 30 kPa** (steam table): 69.1 °C.

3. **Solution:** $T = 64.6 + 1.015(69.1 - 60) = 73.8$ °C; BPE $= 73.8 - 69.1 = 4.7$ °C (against 5.2 °C at 1 atm; the BPE falls slightly as the pressure falls because the slope exceeds 1).

**Result:** about 73.8 °C, BPE ≈ 4.7 °C.`,
          answer: String.raw`Slope 1.015; water at 30 kPa boils at 69.1 °C → solution 73.8 °C, BPE ≈ 4.7 °C.` },
        { id: "practice-evaporation-P20c", label: "(c)", marks: "7", topic: "evaporation",
          sub: "Effect of liquid head on the boiling point at 100 mm Hg and at 1 atm", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`MSH 5th ed. Sec. "Effect of liquid head and friction on temperature drop"; past theory question 2017-18 Q1(b)`,
          text: String.raw`In a calandria evaporator the liquor (density 1200 kg/m³, negligible BPE) stands 3 m deep over the tubes. Estimate the boiling point at the mean depth (1.5 m) when the vapour space is at 100 mm Hg abs, and the loss of temperature drop this causes. Repeat for a vapour space at 1 atm and comment.`,
          solution: String.raw`**Given:** $\rho = 1200$ kg/m³, mean depth 1.5 m; vapour space 13.33 kPa or 101.3 kPa.

**Find:** boiling point at mid-depth, loss of ΔT.

**Assumptions:** hydrostatic pressure only (no friction or acceleration), saturated water properties.

1. **Hydrostatic rise:** $\Delta p = \rho g h = 1200(9.81)(1.5) = 17.7$ kPa.

2. **At 100 mm Hg:** surface boils at 51.5 °C (13.33 kPa); at mid-depth $p = 31.0$ kPa → 69.8 °C. Loss of driving force ≈ **18.3 °C**.

3. **At 1 atm:** $p = 101.3 + 17.7 = 119.0$ kPa → 104.5 °C. Loss ≈ **4.5 °C**.

**Comment:** the vapour-pressure curve is steep in relative terms at low pressure, so the same head costs four times more temperature under vacuum. This is why vacuum evaporators use long-tube film or forced-circulation designs (no deep pool), and why the last effect of a multiple-effect plant suffers most from liquid head.`,
          answer: String.raw`Δp = 17.7 kPa; at 100 mm Hg the mid-depth liquor boils at 69.8 °C instead of 51.5 °C (≈ 18 °C lost); at 1 atm 104.5 °C (4.5 °C lost).` } ] }
  ]
});
