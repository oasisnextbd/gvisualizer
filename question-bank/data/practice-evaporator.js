QB.paper({ year: "Practice", set: "Evaporators", date: "", marks: 0, practice: true,
  rules: String.raw`Book-style practice problems on the evaporator chapter, solved with the methods in the course slides (Kern ch. 14–15). No past CHE 301 final has asked about evaporators yet. Section S re-solves the slide examples (Ex. 14.1, Fig. 14.8, Ex. 14.2, Ex. 15.2) with variations; section F gives potential-final problems with fresh numbers. Steam properties are from the steam tables (IAPWS-IF97 values via CoolProp).`,
  questions: [

    // ===================== S1: Kern Ex. 14.1 =====================
    { id: "practice-evap-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw`10,000 lb/h of distilled water is required from **untreated** water. Steam is available at 300°F, and the condenser will vent to the atmosphere. Allow a pressure drop of about 5 psi through the condenser and lines, so the evaporator shell operates at 19.7 psia (saturation temperature about 226°F). Take a base design coefficient of 700 Btu/(h)(ft²)(°F) and Fig. 14.7 (commercial evaporation coefficients for water).`,
      parts: [
        { id: "practice-evap-P1a", label: "(a)", marks: "", topic: "evaporator",
          sub: "Power-plant evaporator surface (Kern Ex. 14.1)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 10 p. 6–7 (Kern Ex. 14.1, Fig. 14.7)`,
          text: String.raw`How much heating steam is needed and how much surface is required?`,
          solution: String.raw`**Given:** distillate $w = 10{,}000$ lb/h (untreated feed); steam saturated at $T_s = 300^\circ$F; shell at 19.7 psia; base $U_D = 700$ Btu/h·ft²·°F.

**Find:** steam rate $W_s$ and surface $A$.

**Assumptions:** feed enters near the shell saturation temperature (sensible heat neglected, as in Kern); steam condensate leaves saturated; no heat loss.

1. Steam-table data: shell at 19.7 psia → $t_{sat} = 227^\circ$F (slide uses 226°F), $\lambda = 961$ Btu/lb; steam at 300°F (67.0 psia) → $\lambda_s = 910$ Btu/lb.

2. Heat load (vaporisation):
$$Q = w\lambda = 10{,}000 \times 961 = 9.61\times10^{6}\ \mathrm{Btu/h}$$

3. Steam:
$$W_s = \frac{Q}{\lambda_s} = \frac{9.61\times10^6}{910} = 10{,}560\ \mathrm{lb/h}$$

4. Temperature head (both sides isothermal):
$$\Delta t = T_s - t_{sat} = 300 - 226 = 74^\circ\mathrm{F}$$

5. Overall coefficient from Fig. 14.7, untreated water, vapor 226°F, $\Delta t = 74^\circ$F: Kern reads **86.5% of base**. (Reading the curves on the slide: untreated 200° curve ≈ 82.5%, 300° curve ≈ 91% at 74°F, so linear interpolation to 226°F gives ≈ 85%; anything from 85 to 86.5% is within chart accuracy.)
$$U_D = 700 \times 0.865 = 605\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

6. Surface:
$$A = \frac{Q}{U_D\,\Delta t} = \frac{9.61\times10^6}{605\times74} = 215\ \mathrm{ft^2}$$

> The slide prints 2150 ft²; the arithmetic gives 215 ft² (9.61×10⁶ / 44,770 = 214.6). With 85% of base, $U_D = 594$ and $A = 219$ ft².

**Exam tip:** in a power-plant evaporator both fluids change phase, so no LMTD is needed: $\Delta t$ is simply steam temperature minus shell saturation temperature.`,
          answer: String.raw`$Q = 9.61\times10^6$ Btu/h, $W_s \approx 10{,}560$ lb/h, $U_D = 605$, $A \approx 215\ \mathrm{ft^2}$ (slide's "2150" is a decimal slip).` },
        { id: "practice-evap-P1b", label: "(b)", marks: "", topic: "evaporator",
          sub: "Flux check against the maximum flux", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 10 p. 8 (temperature differences at less than maximum flux)`,
          text: String.raw`The design $\Delta t = 74^\circ$F exceeds the critical temperature difference of about 45°F for water boiling at atmospheric pressure. Is the design acceptable? Compare the flux with $(Q/A)_{max} \approx 400{,}000$ Btu/(h)(ft²).`,
          solution: String.raw`1. Flux in the design:
$$\frac{Q}{A} = U_D\,\Delta t = 605 \times 74 = 44{,}800\ \mathrm{Btu/h\,ft^2}$$

2. Compare: $44{,}800 / 400{,}000 = 0.11$, i.e. about 11% of the maximum pool-boiling flux.

3. The critical $\Delta t$ (≈ 45°F) is the wall-to-liquid temperature difference **at the maximum flux** of a clean pool. In a commercial evaporator the overall $\Delta t$ includes the steam-film, wall, and scale resistances, so the actual boiling-side $\Delta t_w$ is much smaller, and the flux, which is the real index of vapor binding, is far below the maximum.

**Result:** acceptable. Kern's own check (slide): at 212°F vapor and $\Delta t = 100^\circ$F, flux $= 700 \times 0.85 \times 100 \approx 60{,}000$ Btu/h·ft², still well below 400,000.`,
          answer: String.raw`$Q/A \approx 44{,}800$ Btu/h·ft² ≈ 11% of $(Q/A)_{max}$, so $\Delta t = 74^\circ$F > 45°F is acceptable; flux, not $\Delta t$, governs vapor binding.` }
      ] },

    // ===================== S2: variation of Ex. 14.1 (treated water) =====================
    { id: "practice-evap-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw`A power-plant evaporator is to produce 25,000 lb/h of vapor from **treated** (softened) feed water. The vapor goes to a deaerating heater at 31.4 psia, and the line and separator pressure drop is 4 psi. Heating steam is saturated at 310°F. Use a base coefficient of 700 Btu/(h)(ft²)(°F) with Fig. 14.7. About 90% of the feed is vaporised and the rest is blown down.`,
      parts: [
        { id: "practice-evap-P2a", label: "(a)", marks: "", topic: "evaporator",
          sub: "Power-plant evaporator, treated water, interpolated vapor temperature", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 10 p. 6–7 (Kern Ex. 14.1)`,
          text: String.raw`Find the shell temperature, steam consumption, $U_D$ and the surface required.`,
          solution: String.raw`**Given:** $w = 25{,}000$ lb/h, treated water; shell pressure $= 31.4 + 4 = 35.4$ psia; $T_s = 310^\circ$F.

**Find:** $t_{sat}$, $W_s$, $U_D$, $A$.

**Assumptions:** feed near saturation; saturated condensate; base $U = 700$.

1. Steam tables: 35.4 psia → $t_{sat} = 260^\circ$F, $\lambda = 938.7$ Btu/lb. Steam at 310°F (77.7 psia) → $\lambda_s = 902.7$ Btu/lb.

2. Heat load:
$$Q = w\lambda = 25{,}000\times938.7 = 2.347\times10^{7}\ \mathrm{Btu/h}$$

3. Steam:
$$W_s = \frac{Q}{\lambda_s} = \frac{2.347\times10^7}{902.7} = 26{,}000\ \mathrm{lb/h}$$

4. Temperature head: $\Delta t = 310 - 260 = 50^\circ$F.

5. Fig. 14.7, **treated-water (dashed) curves** at $\Delta t = 50^\circ$F: 200° curve ≈ 82%, 300° curve ≈ 90%. Interpolating to 260°F:
$$\% = 81.8 + \frac{260-200}{100}(89.8-81.8) = 86.6\%$$
$$U_D = 700\times0.866 = 606\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

6. Surface:
$$A = \frac{Q}{U_D\Delta t} = \frac{2.347\times10^7}{606\times50} = 773\ \mathrm{ft^2}$$

**Why it matters:** with untreated water at the same conditions the chart gives ≈ 82% (solid curves), so treatment saves about 5% of the surface and, more importantly, slows scaling.`,
          answer: String.raw`$t_{sat} = 260^\circ$F, $W_s \approx 26{,}000$ lb/h, $U_D \approx 606$, $A \approx 770\ \mathrm{ft^2}$.` },
        { id: "practice-evap-P2b", label: "(b)", marks: "", topic: "evaporator",
          sub: "Flux check and blowdown", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 10 p. 6, 8`,
          text: String.raw`Check the flux against the maximum, and find the feed and blowdown rates.`,
          solution: String.raw`1. Flux:
$$\frac{Q}{A} = U_D\Delta t = 606\times50 = 30{,}300\ \mathrm{Btu/h\,ft^2}$$
This is about 8% of $(Q/A)_{max} \approx 400{,}000$, so there is no danger of vapor binding even though $\Delta t = 50^\circ$F is above the ≈ 45°F critical value of a clean pool at 1 atm.

2. Feed (90% vaporised):
$$w_F = \frac{25{,}000}{0.90} = 27{,}800\ \mathrm{lb/h}$$

3. Blowdown (the remaining 10%, which carries most of the dissolved solids):
$$w_B = 0.10\times27{,}800 = 2{,}780\ \mathrm{lb/h}$$`,
          answer: String.raw`$Q/A \approx 30{,}300$ Btu/h·ft² (≈ 8% of max, acceptable); feed ≈ 27,800 lb/h, blowdown ≈ 2,780 lb/h.` }
      ] },

    // ===================== S3: Fig. 14.8 parallel feed =====================
    { id: "practice-evap-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw`Fig. 14.8 of the slides shows multiple-effect evaporation of water with **parallel feed** (each effect receives fresh feed and blows down about 10%). Per 1 lb of prime steam: single effect, 1.0 lb feed → 0.90 lb vapor + 0.10 lb blowdown; double effect, 1.77 lb feed → vapors 0.85 and 0.75 lb; triple effect, 2.49 lb feed → vapors 0.85, 0.75 and 0.65 lb. All vapors and the steam condensate are collected as distilled water.`,
      parts: [
        { id: "practice-evap-P3a", label: "(a)", marks: "", topic: "evaporator",
          sub: "Parallel-feed multiple effect: distillate per lb steam", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 10 p. 9 (Kern Fig. 14.8)`,
          text: String.raw`Show how the figures of 1.9, 2.60 and 3.25 lb of distilled water per lb of steam arise, and explain why each succeeding effect makes less vapor than the steam it receives.`,
          solution: String.raw`Distilled water = steam condensate (1.0 lb) + all vapor condensed (in the next effect's tubes or in the condenser).

| Arrangement | Feed, lb | Vapor per effect, lb | Blowdown, lb | Distilled water, lb |
|---|---|---|---|---|
| Single | 1.00 | 0.90 | 0.10 | 1 + 0.90 = **1.90** |
| Double | 1.77 (0.94 + 0.83) | 0.85, 0.75 | 0.09, 0.08 | 1 + 0.85 + 0.75 = **2.60** |
| Triple | 2.49 (0.94 + 0.83 + 0.72) | 0.85, 0.75, 0.65 | 0.09, 0.08, 0.07 | 1 + 0.85 + 0.75 + 0.65 = **3.25** |

Each effect's material balance closes: e.g. triple, effect 1: 0.94 = 0.85 + 0.09.

**Why the vapor falls from effect to effect** (≈ 0.85, 0.75, 0.65 instead of 1, 1, 1):
- the latent heat rises as pressure falls, so 1 lb of vapor condensing at a higher temperature boils less than 1 lb at a lower temperature;
- part of the heat goes to raise cold feed to the boiling point of each effect;
- the blowdown leaves at the boiling temperature and carries heat away; plus small radiation losses.

So the gain per added effect shrinks: +0.70 lb going from single to double, +0.65 lb from double to triple.`,
          answer: String.raw`Distillate/steam = 1.90, 2.60, 3.25 for 1, 2, 3 effects (= 1 lb condensate + vapors); vapor per effect falls because λ rises at lower pressure, feed needs preheating, and blowdown removes heat.` },
        { id: "practice-evap-P3b", label: "(b)", marks: "", topic: "evaporator",
          sub: "Parallel feed: steam saving for a make-up requirement", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 10 p. 9 (Fig. 14.8 ratios)`,
          text: String.raw`A plant needs 20,000 lb/h of distilled make-up water. Using the Fig. 14.8 ratios, find the prime steam, the raw feed and the total blowdown for single, double and triple effect, and the steam saved by triple effect relative to single effect.`,
          solution: String.raw`**Method:** scale the per-lb-steam figures: $W_s = 20{,}000/(\text{distillate per lb steam})$; feed and blowdown scale with $W_s$.

| | Single | Double | Triple |
|---|---|---|---|
| Distillate / lb steam | 1.90 | 2.60 | 3.25 |
| Steam $W_s$, lb/h | 20,000/1.90 = **10,530** | 20,000/2.60 = **7,690** | 20,000/3.25 = **6,150** |
| Feed, lb/h | 1.00 × 10,530 = 10,530 | 1.77 × 7,690 = 13,620 | 2.49 × 6,150 = 15,320 |
| Vapor condensed, lb/h | 9,470 | 12,310 | 13,850 |
| Blowdown, lb/h | 1,050 | 1,310 | 1,480 |
| Vapor per lb steam | 0.90 | 1.60 | 2.25 |

Check (triple): steam condensate 6,150 + vapor 13,850 = 20,000 lb/h; feed − vapor = 15,320 − 13,850 = 1,470 ≈ blowdown.

Steam saved by triple effect:
$$10{,}530 - 6{,}150 = 4{,}380\ \mathrm{lb/h}\ (\approx 42\%)$$

**Why it matters:** the saving is paid for by roughly three times the heating surface, because the total $\Delta t$ is split among the effects.`,
          answer: String.raw`Steam ≈ 10,530 / 7,690 / 6,150 lb/h for 1/2/3 effects; feed ≈ 10,530 / 13,620 / 15,320 lb/h; triple saves ≈ 4,380 lb/h (42%).` }
      ] },

    // ===================== S4: Kern Ex. 14.2 =====================
    { id: "practice-evap-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw`It is desired to concentrate 50,000 lb/h of a chemical solution at 100°F and 10.0% solids to a product containing 50% solids. Steam is available at 12 psig, and the last effect of a **triple-effect forward-feed** evaporator with equal heat-transfer surfaces in each effect operates at a vacuum of 26.0 in. Hg referred to a 30-in. barometer. Water is available at 85°F for a barometric condenser (outlet 120°F). Assume negligible BPR, an average specific heat of 1.0 in all effects, condensate leaving at its saturation temperature and negligible radiation losses. $U_1 = 600$, $U_2 = 250$, $U_3 = 125$ Btu/(h)(ft²)(°F).`,
      parts: [
        { id: "practice-evap-P4", label: "", marks: "", topic: "evaporator",
          sub: "Triple-effect forward feed (Kern Ex. 14.2)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 10 p. 13, 15–19 (Kern Ex. 14.2, Eqs. 14.8–14.14)`,
          text: String.raw`Calculate (a) the steam consumption, (b) the heating surface of each body, (c) the condenser water requirement, and the economy.`,
          solution: String.raw`**Given:** $w_F = 50{,}000$ lb/h, $x_F = 0.10$, $x_P = 0.50$, $t_F = 100^\circ$F, steam 12 psig = 26.7 psia, last effect 26 in. Hg vacuum = 4 in. Hg abs = 1.95 psia; $c = 1.0$.

**Find:** $W_s$, $A_1, A_2, A_3$, condenser water, economy.

**Assumptions:** negligible BPR; $c = 1$; condensate saturated; no losses; start with equal pressure drop per effect.

1. Material balance:
$$\text{solids} = 0.10\times50{,}000 = 5000;\quad \text{product} = \frac{5000}{0.50} = 10{,}000;\quad w_{1-3} = 50{,}000 - 10{,}000 = 40{,}000\ \mathrm{lb/h}$$

2. Equal pressure-drop split:
$$\Delta P = \frac{26.70 - 1.95}{3} = 8.25\ \mathrm{psi/effect}$$

| | P, psia | t, °F | λ, Btu/lb |
|---|---|---|---|
| Steam chest 1 | 26.70 | $T_s = 244$ | $\lambda_s = 949$ |
| Steam chest 2 (vapor of 1) | 18.45 | $t_1 = 224$ | $\lambda_1 = 961$ |
| Steam chest 3 (vapor of 2) | 10.20 | $t_2 = 194$ | $\lambda_2 = 981$ |
| Vapor to condenser | 1.95 | $t_3 = 125$ | $\lambda_3 = 1022$ |

(Steam tables give 243.7, 223.7, 194.1, 125.1°F and 949.6, 962.7, 981.2, 1022.3 Btu/lb; the slide's rounded values are used.) Total $\Delta t = 244 - 125 = 119^\circ$F.

3. Heat balances (Eqs. 14.8–14.10, forward feed) and material balance (14.12):
$$949W_s + 50{,}000(100 - 224) = 961w_1$$
$$961w_1 + (50{,}000 - w_1)(224 - 194) = 981w_2$$
$$981w_2 + (50{,}000 - w_1 - w_2)(194 - 125) = 1022w_3$$
$$w_1 + w_2 + w_3 = 40{,}000$$

4. Solving the four linear equations simultaneously:
$$w_1 = 12{,}360,\quad w_2 = 13{,}260,\quad w_3 = 14{,}380,\quad W_s = 19{,}050\ \mathrm{lb/h}$$
(slide: 12,400; 13,300; 14,300; 19,100).

5. Surfaces (Eq. 14.13):
$$A_1 = \frac{W_s\lambda_s}{U_1(T_s - t_1)} = \frac{19{,}050\times949}{600\times20} = 1507\ \mathrm{ft^2}$$
$$A_2 = \frac{w_1\lambda_1}{U_2(t_1 - t_2)} = \frac{12{,}360\times961}{250\times30} = 1584\ \mathrm{ft^2}$$
$$A_3 = \frac{w_2\lambda_2}{U_3(t_2 - t_3)} = \frac{13{,}260\times981}{125\times69} = 1508\ \mathrm{ft^2}$$
The three areas agree within ±3%, so the equal-pressure-drop distribution is accepted without adjustment: use **1600 ft² per effect**.

6. Condenser:
$$Q_c = w_3\lambda_3 = 14{,}380\times1022 = 1.47\times10^7\ \mathrm{Btu/h}$$
$$\text{water} = \frac{1.47\times10^7}{120 - 85} = 420{,}000\ \mathrm{lb/h} = \frac{420{,}000}{500} = 840\ \mathrm{gpm}$$

7. Economy:
$$\frac{40{,}000}{19{,}050} = 2.10\ \mathrm{lb\ evaporated/lb\ steam}$$

**Exam tip:** write the balances in the order the liquor travels; in forward feed each effect receives hotter liquor from the one before, which flashes ($(w_F - \sum w)\,c\,(t_{i-1} - t_i)$ term) and adds to the evaporation.`,
          answer: String.raw`$W_s \approx 19{,}100$ lb/h; $A \approx 1510, 1580, 1510$ ft² → use 1600 ft²/effect; condenser water ≈ 420,000 lb/h (840 gpm); economy ≈ 2.09–2.10.` }
      ] },

    // ===================== S5: triple forward, equal areas with adjustment =====================
    { id: "practice-evap-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw`A triple-effect forward-feed evaporator with **equal surface in each effect** concentrates 60,000 lb/h of a solution from 8% to 40% solids. Feed enters at 160°F. Steam is saturated at 35 psia and the last effect operates at 1.5 psia. Overall coefficients: $U_1 = 700$, $U_2 = 400$, $U_3 = 200$ Btu/(h)(ft²)(°F). Take $c = 1.0$ Btu/lb·°F, negligible BPR, saturated condensate and no losses.`,
      parts: [
        { id: "practice-evap-P5a", label: "(a)", marks: "", topic: "evaporator",
          sub: "Triple forward feed: first trial with equal pressure drops", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 10 p. 15–19 (Kern Ex. 14.2 method)`,
          text: String.raw`Start with equal pressure drops per effect. Find the evaporation in each effect, the steam, and the three areas. Are the areas equal?`,
          solution: String.raw`**Given:** $w_F = 60{,}000$ lb/h, $x_F = 0.08$, $x_P = 0.40$, $t_F = 160^\circ$F; steam 35 psia; last effect 1.5 psia.

**Find:** $w_1, w_2, w_3, W_s$, $A_1, A_2, A_3$.

**Assumptions:** as stated; $c = 1$.

1. Material balance: solids $= 0.08\times60{,}000 = 4800$; product $= 4800/0.40 = 12{,}000$; evaporation $w_{1-3} = 48{,}000$ lb/h.

2. Equal pressure drop: $\Delta P = (35 - 1.5)/3 = 11.17$ psi. Steam tables:

| | P, psia | t, °F | λ, Btu/lb |
|---|---|---|---|
| Steam | 35.00 | 259.3 | 939.2 |
| Effect 1 vapor | 23.83 | 237.4 | 953.8 |
| Effect 2 vapor | 12.67 | 204.6 | 974.8 |
| Effect 3 vapor | 1.50 | 115.6 | 1027.7 |

$\Delta t_1 = 21.9$, $\Delta t_2 = 32.8$, $\Delta t_3 = 88.9^\circ$F (total 143.6°F).

3. Balances (Eqs. 14.8–14.10, 14.12):
$$939.2W_s + 60{,}000(160 - 237.4) = 953.8w_1$$
$$953.8w_1 + (60{,}000 - w_1)(237.4 - 204.6) = 974.8w_2$$
$$974.8w_2 + (60{,}000 - w_1 - w_2)(204.6 - 115.6) = 1027.7w_3$$
$$w_1 + w_2 + w_3 = 48{,}000$$

4. Solution (numpy):
$$w_1 = 14{,}610,\ w_2 = 15{,}820,\ w_3 = 17{,}570,\ W_s = 19{,}780\ \mathrm{lb/h}$$

5. Areas:
$$A_1 = \frac{19{,}780\times939.2}{700\times21.9} = 1214\ \mathrm{ft^2},\quad A_2 = \frac{14{,}610\times953.8}{400\times32.8} = 1061\ \mathrm{ft^2},\quad A_3 = \frac{15{,}820\times974.8}{200\times88.9} = 867\ \mathrm{ft^2}$$

The areas differ by about ±17%: the equal-pressure-drop assumption gives too little $\Delta t$ to effects 1 and 2 and too much to effect 3. An adjustment is needed.`,
          answer: String.raw`First trial: $W_s \approx 19{,}780$ lb/h, $w = 14{,}610 / 15{,}820 / 17{,}570$ lb/h, $A = 1214 / 1061 / 867$ ft² → not equal, adjust.` },
        { id: "practice-evap-P5b", label: "(b)", marks: "", topic: "evaporator",
          sub: "Adjusting the temperature distribution for equal areas", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 10 p. 13 (Eq. 14.14, $A_1 = A_2 = A_3$)`,
          text: String.raw`Redistribute the temperature differences so that the areas become equal, repeat the calculation once, and give the steam, area per effect and economy.`,
          solution: String.raw`1. **Adjustment rule.** Since $A_i = q_i/(U_i\Delta t_i)$ and the loads $q_i$ change little, an effect needing too much area needs more $\Delta t$. Make each new $\Delta t$ proportional to its trial area, keeping the total fixed:
$$\bar A = \frac{\sum A_i\Delta t_i}{\sum\Delta t_i} = \frac{1214(21.9) + 1061(32.8) + 867(88.9)}{143.6} = 964\ \mathrm{ft^2}$$
$$\Delta t_i' = \Delta t_i\frac{A_i}{\bar A}:\quad \Delta t_1' = 21.9\frac{1214}{964} = 27.5,\quad \Delta t_2' = 32.8\frac{1061}{964} = 36.1,\quad \Delta t_3' = 88.9\frac{867}{964} = 80.0^\circ\mathrm{F}$$
(sum 143.6°F ✓).

2. New boiling temperatures and steam-table data:
- $t_1 = 259.3 - 27.5 = 231.7^\circ$F → $P_1 = 21.5$ psia, $\lambda_1 = 957.5$ Btu/lb
- $t_2 = 231.7 - 36.1 = 195.6^\circ$F → $P_2 = 10.5$ psia, $\lambda_2 = 980.3$ Btu/lb
- $t_3 = 115.6^\circ$F, $\lambda_3 = 1027.7$ (unchanged); $\lambda_s = 939.2$.

3. Balances again:
$$939.2W_s + 60{,}000(160 - 231.7) = 957.5w_1$$
$$957.5w_1 + (60{,}000 - w_1)(231.7 - 195.6) = 980.3w_2$$
$$980.3w_2 + (60{,}000 - w_1 - w_2)(195.6 - 115.6) = 1027.7w_3$$
$$w_1 + w_2 + w_3 = 48{,}000$$
Solution: $w_1 = 14{,}590$, $w_2 = 15{,}920$, $w_3 = 17{,}480$, $W_s = 19{,}460$ lb/h.

4. Areas:
$$A_1 = \frac{19{,}460\times939.2}{700\times27.5} = 949,\quad A_2 = \frac{14{,}590\times957.5}{400\times36.1} = 967,\quad A_3 = \frac{15{,}920\times980.3}{200\times80.0} = 976\ \mathrm{ft^2}$$
Now within ±1.5% of the mean (964 ft²): accept, and specify **about 1000 ft² per effect**.

5. Economy: $48{,}000/19{,}460 = 2.47$ lb/lb.

6. (Condenser load, for completeness: $17{,}480\times1027.7 = 1.80\times10^7$ Btu/h.)

**Exam tip:** one adjustment of this kind is normally enough; the second trial changes the evaporation split only slightly but moves the areas a lot, because the $\Delta t$'s change.`,
          answer: String.raw`Adjusted $t_1 \approx 231.7^\circ$F (21.5 psia), $t_2 \approx 195.6^\circ$F (10.5 psia); $W_s \approx 19{,}460$ lb/h; $A \approx 950–975$ ft² each (use ≈ 1000 ft²); economy ≈ 2.47.` }
      ] },

    // ===================== S6: Kern Ex. 15.2 vaporizer =====================
    { id: "practice-evap-P6", q: 6, section: "S", compulsory: false,
      stem: String.raw`It is desired to provide 19,750 lb/h of butane vapor at 285 psi using cold feed from storage at 75°F. The butane boils isothermally at 235°F, and steam is available at 100 psig (115 psia). Available is a 15¼ in. ID 1-2 exchanger with 76 tubes, 1 in. OD, 16 BWG, 16 ft long, on 1¼-in. square pitch, two passes; baffles 5 in. apart. Vaporisation in the shell is limited to 80%; the unvaporised liquid is separated in a drum and recirculated to the pump suction.

Data (from Kern's charts, as used on the slides): liquid enthalpy at 108°F = 162, at 235°F = 248 Btu/lb; vapor enthalpy at 235°F = 358 Btu/lb. Shell side: $\mu$ = 0.115 cP at 172°F, 0.10 cP at 235°F; $k(c\mu/k)^{1/3}$ = 0.12 (172°F) and 0.115 (235°F); $D_e$ = 0.99 in.; $j_H$ = 159 (preheat) and 170 (vaporisation); $f$ = 0.00145 and 0.00142 ft²/in²; liquid s = 0.50 (inlet), 0.43 (outlet liquid); mol. wt. 58.1. Tube side: $a'_t$ = 0.594 in², ID = 0.87 in., surface 0.2618 ft²/ft; steam $\mu$ = 0.0363 lb/ft·h, $f$ = 0.000165 ft²/in², $h_{io}$ = 1500; steam table: $\lambda$ = 880.6 Btu/lb, $v$ = 3.88 ft³/lb at 115 psia (338°F).`,
      parts: [
        { id: "practice-evap-P6a", label: "(a)", marks: "", topic: "evaporator",
          sub: "Vaporizer: recirculation, heat balance, weighted Δt (Kern Ex. 15.2)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 10 p. 20–23 (Kern Ex. 15.2)`,
          text: String.raw`Find the liquid circulated, the shell inlet temperature, the heat loads of the preheat and vaporising zones, the steam required and the weighted temperature difference.`,
          solution: String.raw`**Given:** vapor 19,750 lb/h; feed 75°F; boiling 235°F; steam 338°F.

**Find:** $W$, $t_{in}$, $q_p$, $q_v$, steam, $\Delta t_w$.

**Assumptions:** 80% vaporisation; recycle liquid at 235°F; steam condenses isothermally.

1. Total liquid to the shell (limit vaporisation to 80%):
$$W = \frac{19{,}750}{0.80} = 24{,}700\ \mathrm{lb/h};\quad \text{recycle} = 24{,}700 - 19{,}750 = 4950\ \mathrm{lb/h}\ \text{at } 235^\circ\mathrm{F}$$
Mixing 19,750 lb/h at 75°F with 4950 lb/h at 235°F gives about 108°F (enthalpy mixing; Kern's value).

2. Heat balance:
$$q_p = 24{,}700(248 - 162) = 2.12\times10^6\ \mathrm{Btu/h}$$
$$q_v = 19{,}750(358 - 248) = 2.17\times10^6\ \mathrm{Btu/h}$$
$$Q = 4.29\times10^6\ \mathrm{Btu/h};\qquad W_{steam} = \frac{4.29\times10^6}{880.6} = 4880\ \mathrm{lb/h}$$

3. Zone temperature differences (steam at 338°F throughout):
$$(\Delta t)_p = \mathrm{LMTD} = \frac{(338-108)-(338-235)}{\ln(230/103)} = 158^\circ\mathrm{F}\ (\text{slide } 158.5)$$
$$(\Delta t)_v = 338 - 235 = 103^\circ\mathrm{F}$$

4. Weighted $\Delta t$:
$$\frac{q_p}{(\Delta t)_p} = \frac{2.12\times10^6}{158.5} = 13{,}400,\quad \frac{q_v}{(\Delta t)_v} = \frac{2.17\times10^6}{103} = 21{,}100,\quad \sum\frac{q}{\Delta t} = 34{,}500$$
$$\Delta t_w = \frac{Q}{\sum q/\Delta t} = \frac{4.29\times10^6}{34{,}500} = 124.5^\circ\mathrm{F}$$

(Note: the steam-table temperature at 115 psia is 338.1°F and $\lambda$ = 880.8 Btu/lb, matching Kern's Table 7.)`,
          answer: String.raw`$W = 24{,}700$ lb/h (4950 recycled), $t_{in} \approx 108^\circ$F; $q_p = 2.12$, $q_v = 2.17$, $Q = 4.29\times10^6$ Btu/h; steam 4880 lb/h; $\Delta t_w = 124.5^\circ$F.` },
        { id: "practice-evap-P6b", label: "(b)", marks: "", topic: "evaporator",
          sub: "Vaporizer: zone coefficients, clean and design U, dirt factor, flux", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 10 p. 24–28 (Kern Ex. 15.2)`,
          text: String.raw`Find the film coefficients, the clean surface of each zone, the weighted clean coefficient, $U_D$, the dirt factor and check the vaporising flux.`,
          solution: String.raw`1. Tube side (steam): $a_t = N_t a'_t/(144n) = 76\times0.594/(144\times2) = 0.157$ ft²; $G_t = 4880/0.157 = 31{,}100$ lb/h·ft²; $Re_t = 0.0725\times31{,}100/0.0363 = 62{,}000$ (for ΔP only); $h_{io} = 1500$ (condensing steam).

2. Shell side flow area and mass velocity:
$$a_s = \frac{ID\,C'B}{144P_T} = \frac{15.25\times0.25\times5}{144\times1.25} = 0.106\ \mathrm{ft^2},\quad G_s = \frac{24{,}700}{0.106} = 233{,}000\ \mathrm{lb/h\,ft^2}$$

3. Preheat zone ($t_c$ = 172°F): $\mu = 0.115\times2.42 = 0.278$ lb/ft·h, $D_e = 0.0825$ ft,
$$Re_s = \frac{0.0825\times233{,}000}{0.278} = 69{,}200,\ j_H = 159,\ h_o = j_H\frac{k}{D_e}\Big(\frac{c\mu}{k}\Big)^{1/3} = \frac{159\times0.12}{0.0825} = 231$$
$$U_p = \frac{h_{io}h_o}{h_{io}+h_o} = \frac{1500\times231}{1731} = 200,\quad A_p = \frac{q_p/(\Delta t)_p}{U_p} = \frac{13{,}400}{200} = 67.0\ \mathrm{ft^2}$$

4. Vaporising zone (235°F): $\mu = 0.242$ lb/ft·h, $Re_s = 79{,}500$, $j_H = 170$,
$$h_o = \frac{170\times0.115}{0.0825} = 237,\quad U_v = \frac{1500\times237}{1737} = 205,\quad A_v = \frac{21{,}100}{205} = 103\ \mathrm{ft^2}$$

5. Clean surface and weighted clean coefficient:
$$A_C = 67.0 + 103 = 170\ \mathrm{ft^2},\qquad U_C = \frac{\sum UA}{A_C} = \frac{13{,}400 + 21{,}100}{170} = 203$$

6. Design coefficient: $A = 76\times16\times0.2618 = 318$ ft²,
$$U_D = \frac{Q}{A\,\Delta t_w} = \frac{4.29\times10^6}{318\times124.5} = 108.5$$

7. Flux check: surface available for vaporisation $\approx (103/170)\times318 = 193$ ft²,
$$\frac{Q}{A} = \frac{2.17\times10^6}{193} \approx 11{,}000\ \mathrm{Btu/h\,ft^2}$$
(slide prints 10,700; exact division gives 11,300). Far below the maximum flux for organics: **satisfactory**.

8. Dirt factor:
$$R_d = \frac{U_C - U_D}{U_C U_D} = \frac{203 - 108.5}{203\times108.5} = 0.0043\ \mathrm{h\,ft^2\,^\circ F/Btu}$$`,
          answer: String.raw`$h_o = 231 / 237$, $U_p = 200$, $U_v = 205$; $A_C = 170$ ft², $U_C = 203$, $U_D = 108.5$; flux ≈ 11,000 Btu/h·ft² (OK); $R_d \approx 0.0043$.` },
        { id: "practice-evap-P6c", label: "(c)", marks: "", topic: "evaporator",
          sub: "Vaporizer: tube- and shell-side pressure drops", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 10 p. 29–31 (Kern Ex. 15.2 pressure drop)`,
          text: String.raw`Find the tube-side (steam) and shell-side pressure drops.`,
          solution: String.raw`1. Tube side (condensing steam; Kern takes half the full-flow value):
$$s = \frac{1}{3.88\times62.5} = 0.00413$$
$$\Delta P_t = \frac12\,\frac{fG_t^2Ln}{5.22\times10^{10}Ds\phi_t} = \frac12\,\frac{0.000165\times31{,}100^2\times16\times2}{5.22\times10^{10}\times0.0725\times0.00413\times1} = 0.16\ \mathrm{psi}$$

2. Shell, preheat zone: length in proportion to clean area, $L_p = 16\times67.0/170 = 6.3$ ft; $N+1 = 12L_p/B = 12\times6.3/5 = 15$; $s = 0.50$; $D_s = 15.25/12 = 1.27$ ft;
$$\Delta P_p = \frac{fG_s^2D_s(N+1)}{5.22\times10^{10}D_es\phi_s} = \frac{0.00145\times233{,}000^2\times1.27\times15}{5.22\times10^{10}\times0.0825\times0.50\times1.0} = 0.70\ \mathrm{psi}$$

3. Shell, vaporising zone: $L_v = 16 - 6.3 = 9.7$ ft; $N+1 = 12\times9.7/5 = 23$.
Mean specific gravity of the two-phase mixture:
$$\rho_{vap} = \frac{58.1}{359\times\frac{695}{492}\times\frac{14.7}{300}} = 2.34\ \mathrm{lb/ft^3},\quad \rho_{liq} = 0.43\times62.5 = 26.9\ \mathrm{lb/ft^3}$$
$$s_{out} = \frac{24{,}700/62.5}{19{,}750/2.34 + 4950/26.9} = 0.046,\qquad s_{mean} = \frac{0.50 + 0.046}{2} = 0.28$$
$$\Delta P_v = \frac{0.00142\times233{,}000^2\times1.27\times23}{5.22\times10^{10}\times0.0825\times0.28\times1.0} = 1.9\ \mathrm{psi}$$

4. Total shell side: $\Delta P_s = 0.70 + 1.9 = 2.6$ psi.`,
          answer: String.raw`$\Delta P_t \approx 0.16$ psi; $\Delta P_s \approx 0.70 + 1.9 = 2.6$ psi.` }
      ] },

    // ===================== S7: theory from the slides =====================
    { id: "practice-evap-P7", q: 7, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-evap-P7a", label: "(a)", marks: "", topic: "evaporator",
          sub: "Classification of vaporizing equipment", type: "theory",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 10 p. 4 (classification of vaporizing equipment)`,
          text: String.raw`Distinguish between a boiler and a vaporizing exchanger. Define evaporator, reboiler, vaporizer, power-plant evaporator and chemical evaporator.`,
          solution: String.raw`**Boiler vs vaporizing exchanger**
- *Boiler:* directly **fired** tubular apparatus; converts fuel energy into latent heat of vaporisation.
- *Vaporizing exchanger:* **unfired**; converts the latent or sensible heat of one fluid into the latent heat of vaporisation of another.

**Names of vaporizing exchangers (by service)**

| Name | Service |
|---|---|
| Evaporator | vaporises water or an aqueous solution |
| Reboiler | supplies the heat at the bottom of a distillation column (whether the vapor is steam or not) |
| Vaporizer | any other vaporizing exchanger: not making steam and not part of distillation |
| Power-plant evaporator | evaporator in a power-generating system, mainly to make pure boiler-feed water |
| Chemical evaporator | evaporator that concentrates a chemical solution by evaporating solvent water |

**Exam tip:** the difference between power-plant and chemical evaporators is the purpose: the product of the first is the **vapor** (distillate); the product of the second is the **concentrated liquor**.`,
          answer: String.raw`Boiler = fired; vaporizing exchanger = unfired. Evaporator (water/aqueous), reboiler (column bottoms), vaporizer (other); power-plant evaporator makes pure feed water, chemical evaporator concentrates a solution.` },
        { id: "practice-evap-P7b", label: "(b)", marks: "", topic: "evaporator",
          sub: "Types of chemical evaporators and selection", type: "theory",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 10 p. 10–12 (Kern Figs. 14.22–14.31)`,
          text: String.raw`Classify chemical evaporators. Briefly describe the horizontal-tube, calandria (standard vertical), basket, long-tube vertical, long-tube recirculation and forced-circulation types, and state when each is used. What is a catchall?`,
          solution: String.raw`**Two classes:** *natural circulation* (used singly or in multiple effect for the simpler duties) and *forced circulation* (viscous, salting and scale-forming solutions).

| Type | Construction | Use / remarks |
|---|---|---|
| Horizontal-tube (Fig. 14.22) | steam inside a horizontal tube bundle submerged in the liquor in the lower part of a vertical body | cheap, small duties, non-scaling, non-viscous liquors; good for venting non-condensables; scale on the outside of tubes is hard to remove |
| Calandria / standard vertical (Fig. 14.23) | short vertical tubes (liquor inside) between two tube sheets, steam in the shell; a large central **downtake** returns liquor; baffled steam side with non-condensable bleeds (Fig. 14.24) | the classic natural-circulation evaporator; tube insides easy to clean; moderate scaling, crystallising duties |
| Basket (Fig. 14.26) | the calandria is a removable "basket" hung in the body; the annulus between basket and shell acts as the downtake | easy to remove for cleaning; similar service to the calandria; deflector reduces entrainment |
| Long-tube vertical, LTV (Fig. 14.27) | long tubes (≈ 12–24 ft); liquor enters at the bottom and rises as a climbing film driven by the vapor; vapor separated at the top | high coefficients and short residence: foaming and heat-sensitive liquors; once-through or with little recirculation |
| Long-tube recirculation (Fig. 14.28) | LTV element with an external downcomer from the vapor head back to the bottom | when the concentration needed cannot be reached in one pass |
| Forced circulation (Figs. 14.29–14.31) | a pump drives liquor at high velocity through an internal vertical, or an external vertical/horizontal, heating element; boiling is suppressed in the tubes by static head and the liquor flashes in the body | viscous, salting and scale-forming liquors; high U at the cost of pumping power; external elements are easy to clean and replace |

**Catchall** (Fig. 14.25): a separator in the vapor line (centrifugal with a spiral, bottom or top outlet) that removes entrained liquor droplets from the vapor and drains them back, reducing product loss and contamination of the condensate.`,
          answer: String.raw`Natural circulation (horizontal-tube, calandria, basket, LTV, long-tube recirculation) for simple duties; forced circulation (internal or external elements) for viscous, salting, scaling liquors; catchall = entrainment separator in the vapor line.` }
      ] },

    // ===================== F8: power plant, untreated, 200°F =====================
    { id: "practice-evap-P8", q: 8, section: "F", compulsory: false,
      stem: String.raw`A power-plant evaporator is to supply 12,000 lb/h of distilled make-up water from **untreated** raw water. The vapor goes to a condenser operating at 9.5 psia; allow 2 psi for the lines and separator. Heating steam is saturated at 260°F. Use a base design coefficient of 700 Btu/(h)(ft²)(°F) and Fig. 14.7.`,
      parts: [
        { id: "practice-evap-P8a", label: "(a)", marks: "12", topic: "evaporator",
          sub: "Power-plant evaporator surface, untreated water", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Kern Ex. 14.1 (Slides 10 p. 7)`,
          text: String.raw`Find the shell temperature, the steam required, the design coefficient and the heating surface.`,
          solution: String.raw`**Given:** distillate 12,000 lb/h; shell $P = 9.5 + 2 = 11.5$ psia; steam 260°F.

**Find:** $t_{sat}$, $W_s$, $U_D$, $A$.

**Assumptions:** feed near saturation; condensate saturated; base 700.

1. Steam tables: 11.5 psia → $t_{sat} = 200^\circ$F, $\lambda = 977.7$ Btu/lb. Steam 260°F (35.4 psia) → $\lambda_s = 938.6$ Btu/lb.

2. Heat load:
$$Q = 12{,}000\times977.7 = 1.173\times10^7\ \mathrm{Btu/h}$$

3. Steam:
$$W_s = \frac{1.173\times10^7}{938.6} = 12{,}500\ \mathrm{lb/h}$$

4. $\Delta t = 260 - 200 = 60^\circ$F.

5. Fig. 14.7, untreated (solid) 200°F curve at $\Delta t = 60^\circ$F: ≈ **80.5%** of base.
$$U_D = 700\times0.805 = 564\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

6. Surface:
$$A = \frac{Q}{U_D\Delta t} = \frac{1.173\times10^7}{564\times60} = 346\ \mathrm{ft^2}$$`,
          answer: String.raw`$t_{sat} = 200^\circ$F; $W_s \approx 12{,}500$ lb/h; $U_D \approx 564$; $A \approx 346\ \mathrm{ft^2}$.` },
        { id: "practice-evap-P8b", label: "(b)", marks: "6", topic: "evaporator",
          sub: "Treated vs untreated feed; flux check", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 10 p. 6, 8 (Fig. 14.7, maximum flux)`,
          text: String.raw`If the feed were softened (treated water), how much surface would be needed? Check the flux in both cases against $(Q/A)_{max} \approx 400{,}000$ Btu/(h)(ft²).`,
          solution: String.raw`1. Fig. 14.7, treated (dashed) 200°F curve at 60°F: ≈ 83%.
$$U_D = 700\times0.83 = 581,\qquad A = \frac{1.173\times10^7}{581\times60} = 336\ \mathrm{ft^2}$$
(about 3% less surface than with untreated water).

2. Flux:
$$\text{untreated: } \frac{Q}{A} = 564\times60 = 33{,}800;\qquad \text{treated: } 581\times60 = 34{,}900\ \mathrm{Btu/h\,ft^2}$$
Both are less than 9% of 400,000 Btu/h·ft²: no vapor binding.

**Why it matters:** the chart reflects scale: untreated water fouls faster, so its average coefficient is lower; the bigger benefit of treatment is longer runs between descaling.`,
          answer: String.raw`Treated: $U_D \approx 581$, $A \approx 336$ ft² (≈ 3% less). Flux ≈ 34,000 Btu/h·ft² ≪ 400,000: acceptable.` }
      ] },

    // ===================== F9: single effect =====================
    { id: "practice-evap-P9", q: 9, section: "F", compulsory: false,
      stem: String.raw`A single-effect chemical evaporator concentrates 20,000 lb/h of an aqueous solution from 8% to 30% solids. The feed enters at 80°F. Heating steam is at 15 psig (29.7 psia), and the vapor space is held at 4.0 psia by a barometric condenser supplied with water at 80°F (outlet 145°F). Take $c = 1.0$ Btu/lb·°F, negligible BPR, saturated condensate and $U_D = 450$ Btu/(h)(ft²)(°F).`,
      parts: [
        { id: "practice-evap-P9", label: "", marks: "15", topic: "evaporator",
          sub: "Single-effect evaporator: steam, area, economy", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 10 p. 13 (Eqs. 14.8, 14.13 for one effect)`,
          text: String.raw`Calculate (a) the evaporation and product rates, (b) the steam consumption and the economy, (c) the heating surface, and (d) the condenser water.`,
          solution: String.raw`**Given:** $w_F = 20{,}000$ lb/h, $x_F = 0.08 \to x_P = 0.30$, $t_F = 80^\circ$F; steam 29.7 psia; vapor 4.0 psia; $U_D = 450$.

**Find:** $E$, product, $W_s$, economy, $A$, condenser water.

**Assumptions:** no BPR, $c = 1$, saturated condensate, no losses.

1. Material balance:
$$\text{solids} = 0.08\times20{,}000 = 1600;\quad \text{product} = \frac{1600}{0.30} = 5333\ \mathrm{lb/h};\quad E = 20{,}000 - 5333 = 14{,}667\ \mathrm{lb/h}$$

2. Steam tables: 29.7 psia → $T_s = 249.7^\circ$F, $\lambda_s = 945.6$ Btu/lb. 4.0 psia → $t_1 = 152.9^\circ$F, $\lambda_1 = 1006.0$ Btu/lb.

3. Heat balance (Eq. 14.8 for one effect):
$$W_s\lambda_s + w_Fc(t_F - t_1) = E\lambda_1$$
$$W_s = \frac{14{,}667\times1006.0 + 20{,}000\times1.0\times(152.9 - 80)}{945.6} = \frac{1.476\times10^7 + 1.46\times10^6}{945.6} = 17{,}150\ \mathrm{lb/h}$$

4. Economy:
$$\frac{E}{W_s} = \frac{14{,}667}{17{,}150} = 0.855\ \mathrm{lb/lb}$$
(less than 1 because the cold feed must first be heated to 152.9°F and $\lambda_1 > \lambda_s$.)

5. Surface:
$$A = \frac{W_s\lambda_s}{U_D(T_s - t_1)} = \frac{17{,}150\times945.6}{450\times(249.7 - 152.9)} = \frac{1.621\times10^7}{450\times96.8} = 372\ \mathrm{ft^2}$$

6. Condenser water:
$$\frac{E\lambda_1}{t_{out} - t_{in}} = \frac{1.476\times10^7}{145 - 80} = 227{,}000\ \mathrm{lb/h} \approx 454\ \mathrm{gpm}$$`,
          answer: String.raw`$E = 14{,}670$ lb/h, product 5330 lb/h; $W_s \approx 17{,}150$ lb/h, economy ≈ 0.86; $A \approx 372\ \mathrm{ft^2}$; condenser water ≈ 227,000 lb/h (≈ 454 gpm).` }
      ] },

    // ===================== F10: double effect forward =====================
    { id: "practice-evap-P10", q: 10, section: "F", compulsory: false,
      stem: String.raw`A double-effect **forward-feed** evaporator concentrates 30,000 lb/h of a solution from 12% to 40% solids. The feed enters the first effect at 150°F. Steam is at 25 psig (39.7 psia); the second effect operates at 26 in. Hg vacuum (30-in. barometer), and the designer has chosen the first-effect vapor pressure as 18.2 psia to give equal surfaces. $U_1 = 550$, $U_2 = 200$ Btu/(h)(ft²)(°F). Take $c = 1.0$, negligible BPR, saturated condensate, no losses. Barometric-condenser water is available at 85°F and leaves at 120°F.`,
      parts: [
        { id: "practice-evap-P10", label: "", marks: "18", topic: "evaporator",
          sub: "Double-effect forward feed", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 10 p. 13 (Eqs. 14.8, 14.9, 14.12–14.14); style of Kern Ex. 14.2`,
          text: String.raw`Find (a) the evaporation in each effect and the steam consumption, (b) the surface of each effect and verify that they are equal, (c) the concentration of the liquor leaving the first effect, (d) the economy and the condenser water.`,
          solution: String.raw`**Given:** $w_F = 30{,}000$ lb/h, $x_F = 0.12$, $x_P = 0.40$, $t_F = 150^\circ$F; $P_s = 39.7$, $P_1 = 18.2$, $P_2 = 30 - 26 = 4$ in. Hg abs = 1.96 psia.

**Find:** $w_1, w_2, W_s, A_1, A_2$, $x_1$, economy, condenser water.

**Assumptions:** $c = 1$; no BPR; saturated condensate.

1. Material balance: solids $= 3600$ lb/h; product $= 3600/0.40 = 9000$; $E = w_1 + w_2 = 21{,}000$ lb/h.

2. Steam tables:

| | P, psia | t, °F | λ, Btu/lb |
|---|---|---|---|
| Steam | 39.7 | $T_s$ = 266.8 | 934.0 |
| Effect 1 | 18.2 | $t_1$ = 222.9 | 963.1 |
| Effect 2 | 1.96 | $t_2$ = 125.4 | 1022.1 |

3. Heat balances:
$$\text{Effect 1: } 934.0W_s + 30{,}000(150 - 222.9) = 963.1w_1$$
$$\text{Effect 2: } 963.1w_1 + (30{,}000 - w_1)(222.9 - 125.4) = 1022.1w_2$$
$$w_1 + w_2 = 21{,}000$$

4. Solve. Substituting $w_2 = 21{,}000 - w_1$ in effect 2:
$$963.1w_1 + 97.5(30{,}000 - w_1) = 1022.1(21{,}000 - w_1)\ \Rightarrow\ w_1 = 9820\ \mathrm{lb/h},\quad w_2 = 11{,}180\ \mathrm{lb/h}$$
From effect 1:
$$W_s = \frac{963.1\times9820 + 30{,}000\times72.9}{934.0} = 12{,}470\ \mathrm{lb/h}$$

5. Surfaces:
$$A_1 = \frac{W_s\lambda_s}{U_1(T_s - t_1)} = \frac{12{,}470\times934.0}{550\times43.8} = 483\ \mathrm{ft^2}$$
$$A_2 = \frac{w_1\lambda_1}{U_2(t_1 - t_2)} = \frac{9820\times963.1}{200\times97.6} = 485\ \mathrm{ft^2}$$
Equal within 0.3% ✓ — specify about 500 ft² per effect.

6. Liquor leaving effect 1: $30{,}000 - 9820 = 20{,}180$ lb/h, concentration $3600/20{,}180 = 17.8\%$.

7. Economy: $21{,}000/12{,}470 = 1.68$ lb/lb.

8. Condenser:
$$\frac{w_2\lambda_2}{120 - 85} = \frac{11{,}180\times1022.1}{35} = 326{,}500\ \mathrm{lb/h} \approx 653\ \mathrm{gpm}$$

**Exam tip:** most of the total $\Delta t$ (97.6 of 141.4°F) goes to the second effect because its liquor is concentrated and viscous ($U_2$ is low); this is typical of forward feed.`,
          answer: String.raw`$w_1 \approx 9820$, $w_2 \approx 11{,}180$, $W_s \approx 12{,}470$ lb/h; $A_1 \approx A_2 \approx 484\ \mathrm{ft^2}$; $x_1 = 17.8\%$; economy 1.68; condenser water ≈ 326,500 lb/h (653 gpm).` }
      ] },

    // ===================== F11: triple effect backward =====================
    { id: "practice-evap-P11", q: 11, section: "F", compulsory: false,
      stem: String.raw`A triple-effect **backward-feed** evaporator concentrates 40,000 lb/h of a solution from 10% to 45% solids. The feed at 90°F enters the third (coldest) effect and the liquor is pumped from effect 3 to 2 to 1; the product leaves effect 1. Steam is at 20 psig (34.7 psia). The vapor pressures chosen are 15.8 psia (effect 1), 6.1 psia (effect 2) and 2.0 psia (effect 3). $U_1 = 450$, $U_2 = 400$, $U_3 = 350$ Btu/(h)(ft²)(°F). Take $c = 1.0$, negligible BPR, saturated condensate and no losses. Condenser water: 80°F in, 115°F out.`,
      parts: [
        { id: "practice-evap-P11", label: "", marks: "20", topic: "evaporator",
          sub: "Triple-effect backward feed", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 10 p. 14 (Eqs. 14.15–14.19, 14.13, 14.14)`,
          text: String.raw`Write the heat and material balances, and find the evaporation in each effect, the steam consumption, the surface of each effect, the concentration of the liquor leaving effects 3 and 2, the economy and the condenser water.`,
          solution: String.raw`**Given:** $w_F = 40{,}000$ lb/h, $x_F = 0.10 \to x_P = 0.45$, $t_F = 90^\circ$F.

**Find:** $w_1, w_2, w_3, W_s, A_i$, intermediate concentrations, economy, condenser water.

**Assumptions:** $c = 1$; no BPR; saturated condensate; pumps add negligible heat.

1. Material balance: solids 4000 lb/h; product $4000/0.45 = 8889$ lb/h; $E = w_1 + w_2 + w_3 = 31{,}111$ lb/h.

2. Steam tables:

| | P, psia | t, °F | λ, Btu/lb |
|---|---|---|---|
| Steam | 34.7 | $T_s$ = 258.7 | 939.5 |
| Effect 1 | 15.8 | $t_1$ = 215.6 | 967.8 |
| Effect 2 | 6.1 | $t_2$ = 170.7 | 995.4 |
| Effect 3 | 2.0 | $t_3$ = 126.0 | 1021.7 |

3. Balances for backward feed (Eqs. 14.15–14.19 written for three effects). Effect 3 receives the cold feed; effects 2 and 1 receive liquor that is **colder** than their boiling point, so it must be heated:
$$\text{Effect 3: } w_2\lambda_2 + w_Fc(t_F - t_3) = w_3\lambda_3:\quad 995.4w_2 + 40{,}000(90 - 126.0) = 1021.7w_3$$
$$\text{Effect 2: } w_1\lambda_1 + (w_F - w_3)c(t_3 - t_2) = w_2\lambda_2:\quad 967.8w_1 + (40{,}000 - w_3)(126.0 - 170.7) = 995.4w_2$$
$$\text{Effect 1: } W_s\lambda_s + (w_F - w_3 - w_2)c(t_2 - t_1) = w_1\lambda_1:\quad 939.5W_s + (40{,}000 - w_3 - w_2)(170.7 - 215.6) = 967.8w_1$$
$$w_1 + w_2 + w_3 = 31{,}111$$

4. Solving simultaneously (numpy):
$$w_1 = 12{,}090,\quad w_2 = 10{,}350,\quad w_3 = 8670,\quad W_s = 13{,}460\ \mathrm{lb/h}$$
Note that in backward feed the evaporation **decreases** from effect 1 to 3 (opposite of forward feed).

5. Surfaces:
$$A_1 = \frac{W_s\lambda_s}{U_1(T_s - t_1)} = \frac{13{,}460\times939.5}{450\times43.1} = 652\ \mathrm{ft^2}$$
$$A_2 = \frac{w_1\lambda_1}{U_2(t_1 - t_2)} = \frac{12{,}090\times967.8}{400\times44.9} = 651\ \mathrm{ft^2}$$
$$A_3 = \frac{w_2\lambda_2}{U_3(t_2 - t_3)} = \frac{10{,}350\times995.4}{350\times44.7} = 659\ \mathrm{ft^2}$$
Equal within about 1%: the chosen pressures satisfy Eq. 14.14. Use ≈ 660–700 ft² per effect.

6. Liquor concentrations:
- leaving effect 3: $40{,}000 - 8670 = 31{,}330$ lb/h, $x = 4000/31{,}330 = 12.8\%$
- leaving effect 2: $31{,}330 - 10{,}350 = 20{,}980$ lb/h, $x = 19.1\%$
- leaving effect 1 (product): 8889 lb/h, 45% ✓

7. Economy: $31{,}111/13{,}460 = 2.31$ lb/lb.

8. Condenser:
$$\frac{w_3\lambda_3}{115 - 80} = \frac{8670\times1021.7}{35} = 253{,}000\ \mathrm{lb/h} \approx 506\ \mathrm{gpm}$$

**Why it matters:** the most concentrated (most viscous) liquor boils in the hottest effect, where its viscosity is lowest, so $U$ stays reasonable; the cold feed is heated by low-grade vapor in effect 3 instead of by prime steam, which raises the economy.`,
          answer: String.raw`$w_1 \approx 12{,}090$, $w_2 \approx 10{,}350$, $w_3 \approx 8670$, $W_s \approx 13{,}460$ lb/h; $A \approx 652 / 651 / 659\ \mathrm{ft^2}$; 12.8% and 19.1% intermediate; economy 2.31; condenser water ≈ 253,000 lb/h.` }
      ] },

    // ===================== F12: forward vs backward comparison =====================
    { id: "practice-evap-P12", q: 12, section: "F", compulsory: false,
      stem: String.raw`25,000 lb/h of a 10% solution at 70°F is to be concentrated to 50% in a double-effect evaporator. Steam is at 30 psia, the first-effect vapor is at 16 psia and the second effect at 2.0 psia. Compare **forward feed** ($U_1 = 600$, $U_2 = 250$) with **backward feed** ($U_1 = 450$, $U_2 = 400$; in backward feed the hot first effect handles the strong liquor and the second effect the weak, cold feed). Take $c = 1.0$, negligible BPR, saturated condensate and no losses.`,
      parts: [
        { id: "practice-evap-P12a", label: "(a)", marks: "16", topic: "evaporator",
          sub: "Forward vs backward feed for the same duty", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 10 p. 13–14 (forward Eqs. 14.8–14.12, backward Eqs. 14.15–14.19)`,
          text: String.raw`For each arrangement find the steam consumption, the evaporation in each effect, the surface of each effect, the total surface and the economy.`,
          solution: String.raw`**Given:** $w_F = 25{,}000$ lb/h, $x_F = 0.10 \to 0.50$, $t_F = 70^\circ$F.

**Assumptions:** same pressures (temperatures) for both arrangements; $c = 1$.

1. Material balance: solids 2500 lb/h; product 5000 lb/h; $E = w_1 + w_2 = 20{,}000$ lb/h.

2. Steam tables: 30 psia → $T_s = 250.3^\circ$F, $\lambda_s = 945.2$; 16 psia → $t_1 = 216.3^\circ$F, $\lambda_1 = 967.4$; 2.0 psia → $t_2 = 126.0^\circ$F, $\lambda_2 = 1021.7$ Btu/lb. $\Delta t_1 = 34.0$, $\Delta t_2 = 90.3^\circ$F.

### Forward feed (feed to effect 1)
$$945.2W_s + 25{,}000(70 - 216.3) = 967.4w_1$$
$$967.4w_1 + (25{,}000 - w_1)(216.3 - 126.0) = 1021.7w_2$$
$$w_1 + w_2 = 20{,}000$$
Solution: $w_1 = 9573$, $w_2 = 10{,}427$, $W_s = 13{,}670$ lb/h.
$$A_1 = \frac{13{,}670\times945.2}{600\times34.0} = 633\ \mathrm{ft^2},\quad A_2 = \frac{9573\times967.4}{250\times90.3} = 411\ \mathrm{ft^2}$$

### Backward feed (feed to effect 2, liquor pumped to effect 1)
$$\text{Effect 2: } 967.4w_1 + 25{,}000(70 - 126.0) = 1021.7w_2$$
$$\text{Effect 1: } 945.2W_s + (25{,}000 - w_2)(126.0 - 216.3) = 967.4w_1$$
$$w_1 + w_2 = 20{,}000$$
Solution: $w_1 = 10{,}977$, $w_2 = 9023$, $W_s = 12{,}760$ lb/h.
$$A_1 = \frac{12{,}760\times945.2}{450\times34.0} = 788\ \mathrm{ft^2},\quad A_2 = \frac{10{,}977\times967.4}{400\times90.3} = 294\ \mathrm{ft^2}$$

### Comparison

| | Forward | Backward |
|---|---|---|
| Steam $W_s$, lb/h | 13,670 | 12,760 |
| $w_1$ / $w_2$, lb/h | 9573 / 10,427 | 10,977 / 9023 |
| $A_1$ / $A_2$, ft² | 633 / 411 | 788 / 294 |
| Total surface, ft² | 1043 | 1082 |
| Economy | 1.46 | 1.57 |

Backward feed saves $13{,}670 - 12{,}760 = 910$ lb/h of steam (6.6%) because the cold 70°F feed is heated in effect 2 by vapor rather than in effect 1 by prime steam. The total surface is about the same; neither set of areas is equal at these pressures, so for an equal-area design each arrangement would need its own temperature redistribution (move $\Delta t$ toward the effect with the larger area).`,
          answer: String.raw`Forward: $W_s \approx 13{,}670$ lb/h, $A = 633 + 411$ ft², economy 1.46. Backward: $W_s \approx 12{,}760$ lb/h, $A = 788 + 294$ ft², economy 1.57 → backward saves ≈ 7% steam for this cold feed.` },
        { id: "practice-evap-P12b", label: "(b)", marks: "6", topic: "evaporator",
          sub: "Forward vs backward feed: advantages and disadvantages", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 10 p. 13–14 (Fig. 14.21 a, b)`,
          text: String.raw`State the advantages and disadvantages of forward and backward feed, and say when each is preferred.`,
          solution: String.raw`| | Forward feed | Backward feed |
|---|---|---|
| Liquor flow | effect 1 → last, same direction as vapor; flows by pressure difference | last → effect 1, against the vapor; needs a **pump** between every pair of effects |
| Feed heating | feed must be heated to $t_1$ by prime steam (lower economy with cold feed) | cold feed heated by low-pressure vapor in the last effect (higher economy with cold feed) |
| Flashing | liquor entering a cooler effect flashes, giving free evaporation | liquor entering a hotter effect must be heated; no flash |
| Viscous product | strongest liquor at the **lowest** temperature → high viscosity, low $U$ in the last effect | strongest liquor at the **highest** temperature → lower viscosity, better $U$ |
| Heat-sensitive product | product leaves cold: good | product held at the highest temperature: risk of degradation |
| Cost / control | simple, no inter-effect pumps | pumps, more control loops, possible leakage at glands under vacuum |

**Choice:** forward feed for hot feed, heat-sensitive products, or liquors whose viscosity does not rise much; backward feed for cold feed and for liquors that become very viscous as they concentrate. (Mixed and parallel feed are used for special cases, e.g. parallel feed for salting liquors and for distilled-water plants as in Fig. 14.8.)`,
          answer: String.raw`Forward: no pumps, flash gain, product cold, but poor U for viscous strong liquor and low economy with cold feed. Backward: better economy with cold feed and better U for viscous liquor, but needs pumps and keeps the product hot.` }
      ] },

    // ===================== F13: fresh vaporizer =====================
    { id: "practice-evap-P13", q: 13, section: "F", compulsory: false,
      stem: String.raw`15,000 lb/h of n-butane vapor is required at 268 psia, where butane boils isothermally at 230°F. Liquid comes from storage at 80°F. Saturated steam at 125 psia is available. Vaporisation in the shell is limited to 80%; the remaining liquid is separated in a drum and recirculated. Available: a 13¼ in. ID 1-2 exchanger with 56 tubes, 1 in. OD, 16 BWG, 16 ft long, on 1¼-in. square pitch, two tube passes, baffles 6 in. apart. Butane in the shell, steam in the tubes.

**Data**

| Item | Value |
|---|---|
| Liquid butane mean $c$ | 0.675 Btu/lb·°F (so mixing is by mass-weighted temperature) |
| Enthalpy: liquid at 110°F / liquid at 230°F / vapor at 230°F | 164 / 245 / 355 Btu/lb |
| Shell, preheat zone (170°F): $\mu$, $k(c\mu/k)^{1/3}$ | 0.115 cP; 0.12 Btu/h·ft²·(°F/ft) |
| Shell, vaporising zone (230°F): $\mu$, $k(c\mu/k)^{1/3}$ | 0.10 cP; 0.115 Btu/h·ft²·(°F/ft) |
| Specific gravity of liquid: inlet / outlet | 0.50 / 0.44 |
| Butane mol. wt. | 58.1 (vapor as ideal gas) |
| Shell $D_e$; $j_H$ (Kern Fig. 28); $f$ (Kern Fig. 29) | 0.99 in.; $j_H \approx 0.36Re^{0.55}$; $f \approx e^{0.576 - 0.19\ln Re}/144$ ft²/in² |
| Tubes: $a'_t$, ID, surface | 0.594 in², 0.87 in., 0.2618 ft²/ft |
| Steam: $h_{io}$, $\mu$, tube $f$ (Kern Fig. 26) | 1500; 0.0363 lb/ft·h; $f \approx 4(0.0035 + 0.264Re^{-0.42})/144$ ft²/in² |`,
      parts: [
        { id: "practice-evap-P13a", label: "(a)", marks: "10", topic: "evaporator",
          sub: "Vaporizer: recirculation, zone loads, weighted Δt", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Kern Ex. 15.2 (Slides 10 p. 20–23)`,
          text: String.raw`Find the circulation rate, shell inlet temperature, the preheat and vaporisation loads, the steam required and the weighted $\Delta t$.`,
          solution: String.raw`**Given:** vapor 15,000 lb/h; 80% vaporisation; feed 80°F; boiling 230°F; steam 125 psia.

**Find:** $W$, $t_{in}$, $q_p$, $q_v$, $W_{steam}$, $\Delta t_w$.

**Assumptions:** constant liquid $c$ for mixing; steam condenses isothermally; condensate saturated.

1. Circulation: $W = 15{,}000/0.80 = 18{,}750$ lb/h; recycle $= 3750$ lb/h at 230°F.

2. Mixed inlet temperature (same $c$):
$$t_{in} = \frac{15{,}000\times80 + 3750\times230}{18{,}750} = 110^\circ\mathrm{F}$$

3. Loads:
$$q_p = 18{,}750(245 - 164) = 1.519\times10^6,\qquad q_v = 15{,}000(355 - 245) = 1.650\times10^6\ \mathrm{Btu/h}$$
$$Q = 3.169\times10^6\ \mathrm{Btu/h}$$

4. Steam tables at 125 psia: $T_s = 344.3^\circ$F, $\lambda = 875.7$ Btu/lb, $v_g = 3.59$ ft³/lb.
$$W_{steam} = \frac{3.169\times10^6}{875.7} = 3620\ \mathrm{lb/h}$$

5. Zone $\Delta t$:
$$(\Delta t)_p = \frac{(344.3 - 110) - (344.3 - 230)}{\ln\frac{234.3}{114.3}} = 167.2^\circ\mathrm{F},\qquad (\Delta t)_v = 344.3 - 230 = 114.3^\circ\mathrm{F}$$

6. Weighted:
$$\frac{q_p}{(\Delta t)_p} = 9083,\quad \frac{q_v}{(\Delta t)_v} = 14{,}432,\quad \sum = 23{,}515;\qquad \Delta t_w = \frac{3.169\times10^6}{23{,}515} = 134.8^\circ\mathrm{F}$$`,
          answer: String.raw`$W = 18{,}750$ lb/h (3750 recycled), $t_{in} = 110^\circ$F; $q_p = 1.52$, $q_v = 1.65$, $Q = 3.17\times10^6$ Btu/h; steam ≈ 3620 lb/h; $\Delta t_w \approx 134.8^\circ$F.` },
        { id: "practice-evap-P13b", label: "(b)", marks: "12", topic: "evaporator",
          sub: "Vaporizer: U_C, U_D, dirt factor and flux", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Kern Ex. 15.2 (Slides 10 p. 24–28)`,
          text: String.raw`Find the shell coefficients of both zones, the clean surfaces, the weighted $U_C$, $U_D$ and the dirt factor. Is the exchanger adequate if $R_d$ of at least 0.004 is required? Check the vaporising flux.`,
          solution: String.raw`1. Tube side: $a_t = 56\times0.594/(144\times2) = 0.1155$ ft²; $G_t = 3620/0.1155 = 31{,}330$ lb/h·ft²; $Re_t = 0.0725\times31{,}330/0.0363 = 62{,}600$ (ΔP only); $h_{io} = 1500$.

2. Shell flow area:
$$a_s = \frac{ID\,C'B}{144P_T} = \frac{13.25\times0.25\times6}{144\times1.25} = 0.1104\ \mathrm{ft^2},\qquad G_s = \frac{18{,}750}{0.1104} = 169{,}800\ \mathrm{lb/h\,ft^2}$$

3. Preheat zone: $\mu = 0.115\times2.42 = 0.278$ lb/ft·h; $D_e = 0.0825$ ft.
$$Re_s = \frac{0.0825\times169{,}800}{0.278} = 50{,}300,\quad j_H = 0.36(50{,}300)^{0.55} = 139$$
$$h_o = \frac{139\times0.12}{0.0825} = 202,\qquad U_p = \frac{1500\times202}{1500 + 202} = 178$$
$$A_p = \frac{9083}{178} = 51.0\ \mathrm{ft^2}$$

4. Vaporising zone: $\mu = 0.242$ lb/ft·h; $Re_s = 57{,}900$; $j_H = 150$;
$$h_o = \frac{150\times0.115}{0.0825} = 209,\qquad U_v = \frac{1500\times209}{1709} = 183,\qquad A_v = \frac{14{,}432}{183} = 78.7\ \mathrm{ft^2}$$

5. Clean totals:
$$A_C = 51.0 + 78.7 = 129.7\ \mathrm{ft^2},\qquad U_C = \frac{9083 + 14{,}432}{129.7} = 181$$

6. Design:
$$A = 56\times16\times0.2618 = 234.6\ \mathrm{ft^2},\qquad U_D = \frac{3.169\times10^6}{234.6\times134.8} = 100.2$$

7. Dirt factor:
$$R_d = \frac{U_C - U_D}{U_CU_D} = \frac{181 - 100.2}{181\times100.2} = 0.0045\ \mathrm{h\,ft^2\,^\circ F/Btu}$$
> 0.004 required: **adequate**.

8. Flux: vaporising surface provided $\approx (78.7/129.7)\times234.6 = 142$ ft²;
$$\frac{Q}{A} = \frac{1.650\times10^6}{142} = 11{,}600\ \mathrm{Btu/h\,ft^2}$$
about the same as in the slide example (≈ 11,000, judged satisfactory) and below the limit Kern recommends for organic vaporizers (≈ 12,000 natural circulation, ≈ 20,000 forced circulation; this limit is from Kern ch. 15, not the slides): satisfactory.`,
          answer: String.raw`$h_o \approx 202 / 209$; $A_C = 129.7$ ft²; $U_C \approx 181$; $U_D \approx 100$; $R_d \approx 0.0045$ (> 0.004, adequate); flux ≈ 11,600 Btu/h·ft².` },
        { id: "practice-evap-P13c", label: "(c)", marks: "8", topic: "evaporator",
          sub: "Vaporizer: tube- and shell-side pressure drops", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Kern Ex. 15.2 (Slides 10 p. 29–31)`,
          text: String.raw`Calculate the tube-side and shell-side pressure drops.`,
          solution: String.raw`1. Tube side: $f = 4(0.0035 + 0.264\times62{,}600^{-0.42})/144 = 0.000168$ ft²/in²; steam $s = 1/(3.59\times62.5) = 0.00446$.
$$\Delta P_t = \frac12\,\frac{fG_t^2Ln}{5.22\times10^{10}Ds\phi_t} = \frac12\,\frac{0.000168\times31{,}330^2\times16\times2}{5.22\times10^{10}\times0.0725\times0.00446} = 0.16\ \mathrm{psi}$$
(½ because the steam condenses and its velocity falls along the tubes.)

2. Shell, preheat zone: $L_p = 16\times51.0/129.7 = 6.3$ ft; $N + 1 = 12L_p/B = 12\times6.3/6 = 12.6 \approx 13$; $f = 0.00158$ ft²/in² at $Re = 50{,}300$; $s = 0.50$; $D_s = 13.25/12 = 1.104$ ft.
$$\Delta P_p = \frac{0.00158\times169{,}800^2\times1.104\times13}{5.22\times10^{10}\times0.0825\times0.50\times1.0} = 0.30\ \mathrm{psi}$$

3. Shell, vaporising zone: $L_v = 16 - 6.3 = 9.7$ ft; $N + 1 = 12\times9.7/6 = 19.4 \approx 19$; $f = 0.00154$ at $Re = 57{,}900$.
Vapor density (ideal gas, 230°F = 690°R, 268 psia):
$$\rho_v = \frac{58.1}{359\times\frac{690}{492}\times\frac{14.7}{268}} = 2.10\ \mathrm{lb/ft^3};\qquad \rho_l = 0.44\times62.5 = 27.5\ \mathrm{lb/ft^3}$$
$$s_{out} = \frac{18{,}750/62.5}{15{,}000/2.10 + 3750/27.5} = \frac{300}{7130 + 136} = 0.041,\qquad s_{mean} = \frac{0.50 + 0.041}{2} = 0.271$$
$$\Delta P_v = \frac{0.00154\times169{,}800^2\times1.104\times19}{5.22\times10^{10}\times0.0825\times0.271\times1.0} = 0.80\ \mathrm{psi}$$

4. Total shell side: $0.30 + 0.80 = 1.1$ psi.

**Exam tip:** the vaporising zone dominates the shell ΔP because the mean density of the two-phase mixture is so low; that is why the arithmetic mean of inlet and outlet specific gravities is used for it.`,
          answer: String.raw`$\Delta P_t \approx 0.16$ psi; $\Delta P_s \approx 0.30 + 0.80 = 1.1$ psi.` }
      ] },

    // ===================== F14: short theory =====================
    { id: "practice-evap-P14", q: 14, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-evap-P14a", label: "(a)", marks: "6", topic: "evaporator",
          sub: "Design flux below maximum; vapor binding", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 10 p. 2, 3, 8 (boiling curve, blanketing, flux at less than maximum)`,
          text: String.raw`What is vapor binding (blanketing)? Why are commercial evaporators designed for a flux well below the maximum, and why may the operating $\Delta t$ exceed the critical value of about 45°F?`,
          solution: String.raw`- **Boiling curve (Fig. 14.2):** for water boiling from a pool, the flux $Q/A$ rises steeply with the wall-to-liquid difference $(\Delta t)_w$ in nucleate boiling, reaches a maximum $(Q/A)_{max} \approx 400{,}000$ Btu/h·ft² at the **critical** $(\Delta t)_w \approx 45$–50°F (1 atm), and then falls; the coefficient $h_v$ also peaks there.
- **Vapor binding / blanketing:** beyond the critical point bubbles form faster than they can leave; they coalesce into a vapor film that covers the surface. The vapor's low conductivity insulates the surface, so $h$ and the flux drop sharply (and the wall temperature can rise dangerously).
- **Flux is the real index:** binding depends on how fast vapor is generated per unit area, i.e. on the flux, not on the overall $\Delta t$.
- **Why Δt may exceed 45°F:** the overall $\Delta t$ between steam and boiling liquid includes the condensing-film, wall and scale resistances. At a design flux far below the maximum (e.g. $700\times0.85\times100 = 60{,}000$ Btu/h·ft² at $\Delta t = 100^\circ$F), the actual boiling-film $(\Delta t)_w$ is small, so there is no binding.
- **Design practice:** commercial evaporators are designed for a flux well below the maximum attainable, which means providing **more surface** to reduce vaporisation per unit area rather than maximising $\Delta t$. This also gives margin for scale and pressure changes (the size of bubbles, and so blanketing, depends on pressure).`,
          answer: String.raw`Vapor binding = vapor film blanketing the surface beyond the maximum flux; design for a flux far below $(Q/A)_{max}$ (add surface), and then overall Δt may exceed the ≈ 45°F critical value safely.` },
        { id: "practice-evap-P14b", label: "(b)", marks: "6", topic: "evaporator",
          sub: "Power-plant evaporator practice: treatment, blowdown, descaling", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 10 p. 5–6 (power-plant evaporators, Figs. 14.4–14.6)`,
          text: String.raw`Describe the operating practice of a power-plant evaporator: feed treatment, the fraction vaporised and blowdown, separators, and descaling.`,
          solution: String.raw`- **Purpose:** produce relatively pure make-up water for boiler feed by evaporating raw or treated water (shell side), heated by steam in the tubes.
- **Feed treatment:** lime-soda or zeolite softening removes most scale-forming calcium and magnesium salts before the water enters the evaporator; treated water gives higher coefficients (Fig. 14.7) and longer runs.
- **Fraction vaporised and blowdown:** about **90%** of the feed is vaporised continuously; the remaining **≈ 10%**, in which the impurities concentrate, is removed continuously as **blowdown** (surface blowdown in Fig. 14.6). Without blowdown the solids would build up until scaling and carry-over became severe.
- **Separators:** bursting bubbles entrain droplets of untreated liquid; a separator (and baffles) at the vapor outlet removes them and returns them below the liquid level, so the distillate stays pure.
- **Descaling:** scale still forms on the tubes; normal practice is to descale about **once every 24 h**, often by **thermal shocking**: the tubes are heated with steam with the shell drained, then suddenly quenched with cold water or spray ("cracking water inlet", Fig. 14.6); differential contraction cracks the brittle scale off. Bundles are also built to be withdrawn (bundle tracks, removable heads) for mechanical cleaning.`,
          answer: String.raw`Soften feed; vaporise ≈ 90%, continuous ≈ 10% blowdown; separators return entrained liquid; descale about daily by thermal shocking (steam heat then cold-water quench).` },
        { id: "practice-evap-P14c", label: "(c)", marks: "5", topic: "evaporator",
          sub: "Mechanism of vaporization; surface tension and roughness", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 10 p. 2–3 (mechanism of vaporization, Fig. 14.1)`,
          text: String.raw`Explain the mechanism of vaporisation from a submerged heating surface. Why must the liquid be superheated, and how do surface roughness and interfacial tension affect bubble formation?`,
          solution: String.raw`- Bubbles form at random **nucleation points** on the submerged surface; elsewhere heat reaches the liquid by ordinary convection.
- Heat flows from the surrounding superheated liquid to each bubble and evaporates liquid at its inner surface until **buoyancy** frees the bubble from the surface.
- **Superheat is required:** the slides (after Kern) put it as a Kelvin effect: because of the curvature of a small bubble, the equilibrium vapor pressure at its concave inner surface is lower than over a flat surface at the same temperature, so the surrounding liquid must be superheated above the normal saturation temperature for the bubble to grow. (Equivalently, surface tension requires the vapor in a bubble of radius $r$ to exceed the liquid pressure by $2\sigma/r$.) Smaller bubbles need more superheat.
- **Roughness:** a rough surface has more cavities that hold vapor nuclei, so more nucleation points and a smaller superheat gap between liquid and vapor: higher boiling coefficients.
- **Interfacial tension (Fig. 14.1):** with low tension (liquid wets the surface well) the bubble necks and is released readily while small (a); with high tension the bubble spreads on the surface and must grow larger before buoyancy wins (c), so fewer bubbles leave per unit time and a vapor film forms more easily.
- **Pressure:** the coefficient changes with pressure (Jakob's relations on the slides correct an atmospheric $h_v$ to other pressures), and pressure fixes bubble size, which governs blanketing.`,
          answer: String.raw`Bubbles nucleate at surface sites and grow from superheated liquid until buoyancy frees them; superheat is needed because of the surface-tension pressure in small bubbles; roughness adds nuclei, and low interfacial tension releases small bubbles easily.` }
      ] }

  ] });
