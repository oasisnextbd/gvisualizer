QB.paper({ year: "Practice", set: "Column distillation: external balances", date: "", marks: 0, practice: true,
  rules: String.raw`External mass and energy balances on whole distillation columns: the slide problems of deck 3A (ethanol–water with the enthalpy–composition chart, two feeds, open steam, cold reflux, side draw, pentane–hexane), every starred Wankat chapter 3 problem, and exam-style questions on D, B, Q_C and Q_R.`,
  questions: [
    { id: "practice-column-balances-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-column-balances-P1", label: "", marks: "", topic: "column-balances",
        sub: "Ethanol–water column: D, B, Q_C and Q_R from the H–x chart", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 3A (Fractional distillation Part A), "Problem: External Balances for Binary Distillation" and its solution slide (the H–x chart); same as Wankat 3e, Example 3-1`,
        text: String.raw`A steady-state countercurrent staged column separates ethanol from water at 1 kg/cm². The feed, 10 000 kg/h, is 30 wt% ethanol at 40 °C. The column has a total condenser and a partial reboiler; reflux is a saturated liquid and $L_0/D = 3.0$. The distillate must be 80 wt% ethanol and the bottoms 5 wt% ethanol.

Find $D$, $B$, $Q_C$ and $Q_R$. Use the ethanol–water enthalpy–composition diagram at 1 kg/cm² (Wankat Figure 2-4).`,
        solution: String.raw`**Given:** $F = 10\,000$ kg/h, $z = 0.30$, $x_D = 0.80$, $x_B = 0.05$ (all weight fractions ethanol), $T_F = 40\ ^\circ$C, $L_0/D = 3$, saturated reflux, $p = 1$ kg/cm².

**Find:** $D$, $B$, $Q_C$, $Q_R$.

**Assumptions:** steady state, adiabatic column ($Q_{col} = 0$), total condenser ($y_1 = x_D = x_0$), the bottoms leaves the partial reboiler as a saturated liquid. Work in mass units because the chart is in kcal/kg and weight fractions.

![Column with total condenser and partial reboiler, with the results of the external balances](fig/practice-column-balances-P1-sol.svg)

1. **Mass balances.** $F = D + B$ and $Fz = Dx_D + Bx_B$ give
$$D = F\frac{z - x_B}{x_D - x_B} = 10\,000\,\frac{0.30 - 0.05}{0.80 - 0.05} = 3333\ \mathrm{kg/h},\qquad B = F - D = 6667\ \mathrm{kg/h}$$

2. **Enthalpies from the H–x chart** (kcal/kg, reference liquid water and ethanol at 0 °C):

| Stream | State | Value |
|---|---|---|
| $h_F$ | liquid, 0.30, 40 °C | 30 |
| $h_D$ | saturated liquid, 0.80 | 60 |
| $H_1$ | saturated vapor, $y_1 = 0.80$ | 330 |
| $h_B$ | saturated liquid, 0.05 | 90 |

3. **Condenser.** Mass: $V_1 = L_0 + D = (1 + L_0/D)D = 4(3333) = 13\,333$ kg/h. Energy: $V_1H_1 + Q_C = (L_0 + D)h_D$, so
$$Q_C = -\left(1 + \frac{L_0}{D}\right)D\,(H_1 - h_D) = -(13\,333)(330 - 60) = -3.60\times10^6\ \mathrm{kcal/h}$$

4. **Overall energy balance** $Fh_F + Q_C + Q_R = Dh_D + Bh_B$:
$$Q_R = Dh_D + Bh_B - Fh_F - Q_C = 3333(60) + 6667(90) - 10\,000(30) + 3.60\times10^6 = 4.10\times10^6\ \mathrm{kcal/h}$$

**Check:** $Q_C < 0$ (heat removed) and $Q_R > 0$ (heat added); $Q_R - |Q_C| = Dh_D + Bh_B - Fh_F = 5.0\times10^5$ kcal/h is the heat carried out by the products above what the feed brings in. The slide (Wankat) gives $Q_C = -3\,599\,640$ and $Q_R = 4\,099\,650$ kcal/h, the same values with $D$ rounded to 3333.

> **Exam tip:** with a total condenser and saturated reflux, $H_1 - h_D$ is the latent heat at $x_D$; write $Q_C$ in symbols first, then read only the four enthalpies you need.`,
        answer: String.raw`D = 3333 kg/h, B = 6667 kg/h, Q_C = −3.60 × 10⁶ kcal/h, Q_R = 4.10 × 10⁶ kcal/h (h_F = 30, h_D = 60, H_1 = 330, h_B = 90 kcal/kg).` } ] },

    { id: "practice-column-balances-P2", q: 2, section: "S", compulsory: false, stem: String.raw`A column with two feeds separates ethanol from water at 1 kg/cm² and is adiabatic. Feed 1: 1000 kg/h, 60 wt% ethanol, a liquid–vapor mixture at 81 °C. Feed 2: 500 kg/h, 10 wt% ethanol, liquid at 20 °C. The bottoms must be 0.01 wt% ethanol and the distillate 85 wt% ethanol. The column has a total condenser and a partial reboiler (an equilibrium contact); distillate and reflux are saturated liquids. Find $B$ and $D$ (kg/h) and $Q_C$ and $Q_R$ (kcal/h), using the H–x diagram (Wankat Figure 2-4).`,
      parts: [
        { id: "practice-column-balances-P2a", label: "(a)", marks: "", topic: "column-balances",
        sub: "Two-feed ethanol–water column with L₀/D = 3", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 3A, "Problem: External Balances for two-feed Binary Distillation" (part a); Wankat 3e, Problem 3.D1`,
        text: String.raw`External reflux ratio $L_0/D = 3.0$.`,
        solution: String.raw`**Given:** $F_1 = 1000$ kg/h, $z_1 = 0.60$, two-phase at 81 °C; $F_2 = 500$ kg/h, $z_2 = 0.10$, liquid at 20 °C; $x_D = 0.85$, $x_B = 0.0001$ (weight fractions); $L_0/D = 3$.

**Find:** $D$, $B$, $Q_C$, $Q_R$.

**Assumptions:** adiabatic column, total condenser, saturated distillate and reflux, bottoms a saturated liquid that is practically pure water.

![Two-feed column flowsheet](fig/practice-column-balances-P2-sol.svg)

1. **Mass balances.** The two feeds act as one feed with $F = F_1 + F_2 = 1500$ kg/h and $Fz = F_1z_1 + F_2z_2 = 600 + 50 = 650$ kg/h ethanol ($z = 0.433$):
$$D = \frac{Fz - Fx_B}{x_D - x_B} = \frac{650 - 1500(0.0001)}{0.85 - 0.0001} = 764.6\ \mathrm{kg/h},\qquad B = 1500 - 764.6 = 735.4\ \mathrm{kg/h}$$

2. **Enthalpies** (H–x chart, kcal/kg):

| Stream | State | Value |
|---|---|---|
| $h_{F1}$ | 0.60 at 81 °C: on the 81 °C tie line (liquid ≈ 0.59, vapor ≈ 0.79), about 5 % vapor | ≈ 80 |
| $h_{F2}$ | liquid, 0.10, 20 °C | 16 |
| $h_D$ | saturated liquid, 0.85 | 57 |
| $H_1$ | saturated vapor, 0.85 | 309 |
| $h_B$ | saturated liquid, ≈ pure water (99.1 °C) | 100 |

The 81 °C tie line meets the boiling line just below 0.60 wt, so feed 1 is almost a saturated liquid; a lever-arm reading gives $h_{F1} \approx 66 + 0.05(330 - 66) \approx 80$ kcal/kg.

3. **Condenser:** $V_1 = 4D = 3058$ kg/h,
$$Q_C = -V_1(H_1 - h_D) = -3058(309 - 57) = -7.71\times10^5\ \mathrm{kcal/h}$$

4. **Overall energy balance:**
$$Q_R = Dh_D + Bh_B - F_1h_{F1} - F_2h_{F2} - Q_C = 764.6(57) + 735.4(100) - 1000(80) - 500(16) + 7.71\times10^5 = 8.00\times10^5\ \mathrm{kcal/h}$$`,
        answer: String.raw`D = 764.6 kg/h, B = 735.4 kg/h; Q_C ≈ −7.71 × 10⁵ kcal/h, Q_R ≈ 8.0 × 10⁵ kcal/h.` },
        { id: "practice-column-balances-P2b", label: "(b)", marks: "", topic: "column-balances",
        sub: "Same column specified by the boilup ratio V̄/B = 2.5", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 3A, "Problem: External Balances for two-feed Binary Distillation" (part b); Wankat 3e, Problem 3.D1b`,
        text: String.raw`Boilup ratio $\bar{V}/B = 2.5$.`,
        solution: String.raw`$D$ and $B$ do not change: $D = 764.6$, $B = 735.4$ kg/h. Now the reboiler is specified, so find $Q_R$ first and $Q_C$ from the overall balance.

1. **Reboiler balances.** Mass: $\bar{L} = \bar{V} + B$. Energy: $\bar{L}h_N + Q_R = \bar{V}H_{\bar{V}} + Bh_B$. At $x_B = 0.0001$ the liquid from the bottom stage, the bottoms and the boilup are all practically pure water, so $h_N \approx h_B = 100$ and $H_{\bar{V}} \approx 640$ kcal/kg (dew line at $x = 0$):
$$Q_R = \bar{V}(H_{\bar{V}} - h_B) = (2.5)(735.4)(640 - 100) = 1838.5(540) = 9.93\times10^5\ \mathrm{kcal/h}$$

2. **Overall energy balance:**
$$Q_C = Dh_D + Bh_B - F_1h_{F1} - F_2h_{F2} - Q_R = 43\,580 + 73\,540 - 80\,000 - 8\,000 - 992\,800 = -9.64\times10^5\ \mathrm{kcal/h}$$

3. **Implied reflux ratio:** $V_1 = -Q_C/(H_1 - h_D) = 963\,600/252 = 3824$ kg/h, so $L_0/D = V_1/D - 1 = 4.0$.

> **Exam tip:** when $\bar{V}/B$ is given instead of $L_0/D$, the reboiler balance gives $Q_R$ directly and the overall balance then gives $Q_C$ — the same equations in the reverse order.`,
        answer: String.raw`D = 764.6 kg/h, B = 735.4 kg/h; Q_R ≈ 9.93 × 10⁵ kcal/h, Q_C ≈ −9.64 × 10⁵ kcal/h (equivalent to L₀/D ≈ 4.0).` } ] },

    { id: "practice-column-balances-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-column-balances-P3", label: "", marks: "", topic: "column-balances",
        sub: "Open (direct) steam instead of a reboiler: find L/D", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 3A, "Problem: External Balances for No Reboiler Column"; Wankat 3e, Problem 3.D2*`,
        text: String.raw`An ethanol–water column at 1 kg/cm² has no reboiler: saturated steam (pure water vapor) is injected directly into the bottom at 100 kg/min. The feed is 100 kg/min of 30 wt% ethanol at 20 °C. Reflux is a saturated liquid. The distillate must be 60 wt% ethanol and the bottoms 5 wt% ethanol. The column is adiabatic and has a total condenser. Find the external reflux ratio $L/D$ (H–x data: Wankat Figure 2-4).`,
        solution: String.raw`**Given:** $F = 100$ kg/min, $z = 0.30$, 20 °C; steam $S = 100$ kg/min, $y_S = 0$, saturated vapor; $x_D = 0.60$, $x_B = 0.05$ (wt fractions); saturated reflux.

**Find:** $L/D$.

**Assumptions:** adiabatic column, total condenser, bottoms a saturated liquid.

![Column with open steam at the bottom](fig/practice-column-balances-P3-sol.svg)

1. **Mass balances** (the steam is an extra input): $F + S = D + B$ and $Fz + Sy_S = Dx_D + Bx_B$:
$$30 = 0.60D + 0.05(200 - D)\ \Rightarrow\ D = \frac{30 - 10}{0.55} = 36.36\ \mathrm{kg/min},\qquad B = 163.64\ \mathrm{kg/min}$$

2. **Enthalpies** (H–x chart, kcal/kg): $h_F(0.30, 20\ ^\circ\mathrm{C}) = 10$; $H_S$ (saturated steam, $x = 0$) $= 640$; $h_D(0.60,\ \mathrm{sat.\ liq.}) = 66$; $H_1(0.60,\ \mathrm{sat.\ vap.}) = 409$; $h_B(0.05,\ \mathrm{sat.\ liq.}) = 90$.

3. **Overall energy balance** (no $Q_R$): $Fh_F + SH_S + Q_C = Dh_D + Bh_B$:
$$Q_C = 36.36(66) + 163.64(90) - 100(10) - 100(640) = -4.79\times10^4\ \mathrm{kcal/min}$$

4. **Condenser:** $Q_C = -V_1(H_1 - h_D)$, so
$$V_1 = \frac{47\,870}{409 - 66} = 139.6\ \mathrm{kg/min},\qquad L = V_1 - D = 103.2\ \mathrm{kg/min}$$
$$\frac{L}{D} = \frac{103.2}{36.36} = 2.84$$

In one line: $\dfrac{L}{D} = \dfrac{Fh_F + SH_S - Dh_D - Bh_B}{D(H_1 - h_D)} - 1$.

**Book answer: $L/D = 2.77$ ✓** (2.5 % apart; the result is sensitive to $H_1 - h_D$ — reading $H_1 = 415$ and $h_D = 68$ gives 2.79).

> **Exam tip:** with open steam there is no $Q_R$ term, but the steam enters both the mass balance ($F + S = D + B$) and the energy balance ($SH_S$); $B$ is larger than $F - D$.`,
        answer: String.raw`D = 36.4 kg/min, B = 163.6 kg/min, Q_C ≈ −4.79 × 10⁴ kcal/min, L/D ≈ 2.8 (book 2.77 ✓).` } ] },

    { id: "practice-column-balances-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-column-balances-P4", label: "", marks: "", topic: "column-balances",
        sub: "Cold pure-ethanol reflux instead of a condenser; total reboiler: find V̄", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 3A, "Problem: External Balances for No Condenser Column"; Wankat 3e, Problem 3.D3*`,
        text: String.raw`An ethanol–water column at 1 kg/cm² has no condenser. Instead, a stream $C = 1000$ kg/h of pure saturated liquid ethanol is fed to the top stage as reflux. The feed is 2000 kg/h of 40 wt% ethanol at −20 °C. The distillate (vapor leaving the top stage) must be 80 wt% ethanol and the bottoms 5 wt% ethanol. A total reboiler is used and the boilup is a saturated vapor. Set up the balances, solve them in symbols for the boilup $\bar{V}$, read the enthalpies from Wankat Figure 2-4 and find $\bar{V}$.`,
        solution: String.raw`**Given:** $F = 2000$ kg/h, $z = 0.40$, −20 °C; $C = 1000$ kg/h, $x_C = 1.0$, saturated liquid; $y_D = 0.80$; $x_B = 0.05$; total reboiler; $Q_{col} = 0$.

**Find:** $\bar{V}$.

**Assumptions:** the distillate leaves the top stage as a saturated vapor; the bottoms and the boilup have the same composition (total reboiler: $y_{N+1} = x_N = x_B$).

![Column with cold reflux at the top and a total reboiler](fig/practice-column-balances-P4-sol.svg)

1. **Mass balances:** $F + C = D + B$ and $Fz + Cx_C = Dy_D + Bx_B$:
$$800 + 1000 = 0.80D + 0.05(3000 - D)\ \Rightarrow\ D = \frac{1650}{0.75} = 2200\ \mathrm{kg/h},\qquad B = 800\ \mathrm{kg/h}$$

2. **Overall energy balance** (no $Q_C$): $Fh_F + Ch_C + Q_R = DH_D + Bh_B$, so
$$Q_R = DH_D + Bh_B - Fh_F - Ch_C$$

3. **Total reboiler:** liquid $\bar{L} = \bar{V} + B$ of composition $x_N = x_B$ enters; all of $\bar{V}$ is vaporized at the same composition. Energy: $\bar{L}h_B + Q_R = \bar{V}H_{\bar{V}} + Bh_B$, hence
$$\bar{V} = \frac{Q_R}{H_{\bar{V}}(x_B) - h_B(x_B)} = \frac{DH_D + Bh_B - Fh_F - Ch_C}{H_{\bar{V}}(0.05) - h_B(0.05)}$$

4. **Enthalpies** (kcal/kg): $h_F$ (0.40 on the −20 °C liquid isotherm) ≈ −28; $h_C$ (saturated liquid ethanol) ≈ 48; $H_D$ (saturated vapor 0.80) = 330; $h_B$ (saturated liquid 0.05) = 90; $H_{\bar{V}}$ (saturated vapor 0.05) = 622.

5. **Numbers:**
$$Q_R = 2200(330) + 800(90) - 2000(-28) - 1000(48) = 8.06\times10^5\ \mathrm{kcal/h}$$
$$\bar{V} = \frac{8.06\times10^5}{622 - 90} = 1515\ \mathrm{kg/h}$$

**Book answer: $\bar{V} = 1532.4$ kg/h ✓** (1 % apart, from chart readings; the low-temperature reading $h_F$ is the least certain).

> **Exam tip:** the cold reflux stream is both the coolant and the reflux, so it appears in both balances; with a total reboiler the boilup has $y = x_B$, so its enthalpy is read on the dew line at $x_B$, not at the composition of a partial-reboiler vapor.`,
        answer: String.raw`D = 2200 kg/h, B = 800 kg/h, Q_R ≈ 8.06 × 10⁵ kcal/h, V̄ ≈ 1515 kg/h (book 1532.4 kg/h ✓).` } ] },

    { id: "practice-column-balances-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-column-balances-P5", label: "", marks: "", topic: "column-balances",
        sub: "Column with a liquid side draw and subcooled reflux: D, B, Q_C, Q_R", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 3A, "Problem: External Balances for Column with Side-Stream"; Wankat 3e, Problem 3.D5*`,
        text: String.raw`An ethanol–water column at 1 kg/cm² receives 100 kg/min of a two-phase feed, 20 wt% ethanol at 93 °C. It has a total condenser and a partial reboiler. The distillate is 90 wt% ethanol; distillate and reflux are at 20 °C; $L_0/D = 3$. The bottoms is 1 wt% ethanol. A saturated-liquid side stream of 10 kg/min, 70 wt% ethanol, is withdrawn above the feed stage. Find $D$, $B$, $Q_C$ and $Q_R$ (H–x data: Wankat Figure 2-4).`,
        solution: String.raw`**Given:** $F = 100$ kg/min, $z = 0.20$, 93 °C; $S = 10$ kg/min, $x_S = 0.70$; $x_D = 0.90$ at 20 °C; $x_B = 0.01$; $L_0/D = 3$.

**Find:** $D$, $B$, $Q_C$, $Q_R$.

**Assumptions:** adiabatic column; total condenser ($y_1 = x_D$); the side stream and bottoms are saturated liquids.

![Column with a liquid side draw above the feed](fig/practice-column-balances-P5-sol.svg)

1. **Mass balances:** $F = D + B + S$ and $Fz = Dx_D + Bx_B + Sx_S$:
$$20 = 0.90D + 0.01(90 - D) + 7\ \Rightarrow\ D = \frac{13 - 0.9}{0.89} = 13.60\ \mathrm{kg/min},\qquad B = 90 - 13.60 = 76.40\ \mathrm{kg/min}$$

2. **Feed enthalpy.** At 93 °C the tie-line ends are (Wankat Table 2-1, interpolated) $x = 0.0394$ and $y = 0.254$ mole fraction, i.e. 0.095 and 0.466 wt fraction. Lever rule (mass): vapor fraction $= (0.20 - 0.095)/(0.466 - 0.095) = 0.283$. With $h_L(0.095) = 88$ and $H_V(0.466) = 462$ kcal/kg:
$$h_F = 88 + 0.283(462 - 88) = 194\ \mathrm{kcal/kg}$$

3. **Other enthalpies** (kcal/kg): $H_1$ (saturated vapor 0.90) = 288; $h_D$ (liquid 0.90 at 20 °C) ≈ 9; $h_S$ (saturated liquid 0.70) = 63; $h_B$ (saturated liquid 0.01) = 99.

4. **Condenser:** $V_1 = 4D = 54.4$ kg/min and
$$Q_C = -V_1(H_1 - h_D) = -54.4(288 - 9) = -1.52\times10^4\ \mathrm{kcal/min}$$

5. **Overall energy balance** $Fh_F + Q_C + Q_R = Dh_D + Bh_B + Sh_S$:
$$Q_R = 13.60(9) + 76.40(99) + 10(63) - 100(194) + 15\,170 = 4.08\times10^3\ \mathrm{kcal/min}$$

**Book answer:** $B = 76.4$, $D = 13.6$ kg/min ✓; $Q_C = -13\,357$ and $Q_R = 3635$ kcal/min ✗. The book's $Q_C$ implies $H_1 - h_D = 13\,357/54.4 = 246$ kcal/kg, which is the latent heat at 0.90 wt (300 − 55): it treats the reflux as a saturated liquid. With the stated 20 °C reflux the condenser must also subcool the liquid by about 46 kcal/kg, so $|Q_C|$ and $Q_R$ are larger; with a saturated reflux our readings give $Q_C = -1.27\times10^4$ kcal/min.

> **Exam tip:** a liquid side draw adds a term to each balance ($Sx_S$, $Sh_S$); a subcooled reflux lowers $h_D$ and raises the condenser duty — always check the reflux temperature before taking $H_1 - h_D = \lambda$.`,
        answer: String.raw`D = 13.6 kg/min, B = 76.4 kg/min; Q_C ≈ −1.52 × 10⁴ kcal/min, Q_R ≈ 4.1 × 10³ kcal/min with 20 °C reflux (book D, B ✓; book Q_C = −13 357 and Q_R = 3635 correspond to saturated reflux).` } ] },

    { id: "practice-column-balances-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-column-balances-P6", label: "", marks: "", topic: "column-balances",
        sub: "Pentane–hexane at 2 atm with a recovery spec: D, B, x_B, Q_C, Q_R", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 3A, "Problem: External Balances for Pentane-Hexane System"; Wankat 3e, Problem 3.D10 (data of Problem 3.D6)`,
        text: String.raw`A column at 2.0 atm separates 1000 kmol/h of 55.0 mol% n-pentane, 45.0 mol% n-hexane at 65 °C. The distillate is 99.93 mol% n-pentane and 99.50 % of the pentane is recovered in it. Total condenser, saturated-liquid reflux, $L/D = 2.8$, partial reboiler. Find $D$, $B$, $x_B$, $Q_C$ and $Q_R$.

Data: $\lambda_{C5} = 11\,369$ and $\lambda_{C6} = 13\,572$ Btu/lbmol (at the normal boiling points); $C_{PL,C5} = 39.7$ and $C_{PL,C6} = 51.7$ cal/(mol °C) = Btu/(lbmol °F), constant. Use the DePriester chart (or vapor pressures) for boiling points.`,
        solution: String.raw`**Given:** $F = 1000$ kmol/h, $z = 0.55$, $x_D = 0.9993$, recovery 0.995, $L/D = 2.8$, $p = 2$ atm, $T_F = 65\ ^\circ$C.

**Find:** $D$, $B$, $x_B$, $Q_C$, $Q_R$.

**Assumptions:** adiabatic column; ideal mixture (no heat of mixing); the latent heats given at 1 atm are used at 2 atm; boiling points from the Antoine equation (mmHg, °C: pentane $A = 6.85296$, $B = 1064.84$, $C = 232.01$; hexane $6.87601$, $1171.17$, $224.41$) in place of the DePriester chart.

1. **Recovery and mass balances:**
$$Dx_D = 0.995Fz = 547.25\ \Rightarrow\ D = \frac{547.25}{0.9993} = 547.6\ \mathrm{kmol/h},\qquad B = 452.4\ \mathrm{kmol/h}$$
$$x_B = \frac{Fz - Dx_D}{B} = \frac{550 - 547.25}{452.4} = 0.00608$$

2. **Temperatures at 2 atm (1520 mmHg):** pure pentane boils at 58.0 °C and hexane at 92.6 °C; the distillate bubble point is 58.1 °C and the bottoms 92.3 °C. The feed bubble point at 2 atm is 69.9 °C, so the 65 °C feed is a subcooled liquid (its bubble pressure at 65 °C is 1323 mmHg < 1520).

3. **Units:** 1 Btu/lbmol = 0.5556 kcal/kmol, so $\lambda_{C5} = 6317$ and $\lambda_{C6} = 7541$ kcal/kmol; $C_P$ in cal/(mol °C) equals kcal/(kmol °C).

4. **Condenser:** $V_1 = (1 + L/D)D = 3.8(547.6) = 2081$ kmol/h; the vapor is essentially pure pentane, $\lambda_D = 0.9993(6317) + 0.0007(7541) = 6318$ kcal/kmol:
$$Q_C = -V_1\lambda_D = -2081(6318) = -1.315\times10^7\ \mathrm{kcal/h}$$

5. **Overall energy balance**, reference liquids at 65 °C (so $h_F = 0$):
$h_D = 39.7(58.1 - 65) = -275$ kcal/kmol; $h_B = [0.006(39.7) + 0.994(51.7)](92.3 - 65) = 1409$ kcal/kmol.
$$Q_R = Dh_D + Bh_B - Fh_F - Q_C = 547.6(-275) + 452.4(1409) - 0 + 1.315\times10^7 = 1.363\times10^7\ \mathrm{kcal/h}$$

(In Btu/h: $Q_C = -5.22\times10^7$, $Q_R = 5.41\times10^7$.)

> **Exam tip:** a recovery spec gives $Dx_D$ directly; then $D$, $B$ and $x_B$ follow. Choosing the feed temperature as the reference state makes $h_F = 0$ and shortens the energy balance.`,
        answer: String.raw`D = 547.6 kmol/h, B = 452.4 kmol/h, x_B = 0.0061; Q_C ≈ −1.32 × 10⁷ kcal/h, Q_R ≈ 1.36 × 10⁷ kcal/h.` } ] },

    { id: "practice-column-balances-P7", q: 7, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-column-balances-P7", label: "", marks: "", topic: "column-balances",
        sub: "Pentane–hexane at 1 atm with Cp and λ data: D, B, Q_C, Q_R", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 3.D6*`,
        text: String.raw`A column at 1 atm is fed 2500 lbmol/h of 40 mol% n-pentane, 60 mol% n-hexane at 30 °C. The distillate (total condenser, saturated-liquid reflux, $L_0/D = 3$) is 99.9 mol% pentane; the bottoms from the partial reboiler is 99.8 mol% hexane. Find $D$, $B$, $Q_R$ and $Q_C$. Data as in the previous problem: $\lambda_{C5} = 11\,369$, $\lambda_{C6} = 13\,572$ Btu/lbmol; $C_{PL,C5} = 39.7$, $C_{PL,C6} = 51.7$ Btu/(lbmol °F). Watch the temperature units.`,
        solution: String.raw`**Given:** $F = 2500$ lbmol/h, $z = 0.40$, $x_D = 0.999$, $x_B = 0.002$ (pentane), $T_F = 30\ ^\circ$C, $L_0/D = 3$, 1 atm.

**Find:** $D$, $B$, $Q_C$, $Q_R$.

**Assumptions:** adiabatic, ideal liquid mixture, boiling points from vapor pressures (Antoine constants as in the previous problem).

1. **Mass balances:**
$$D = F\frac{z - x_B}{x_D - x_B} = 2500\,\frac{0.40 - 0.002}{0.999 - 0.002} = 998.0\ \mathrm{lbmol/h},\qquad B = 1502.0\ \mathrm{lbmol/h}$$

2. **Temperatures at 1 atm:** distillate bubble point 36.1 °C (pure pentane 36.07 °C); bottoms 68.6 °C (hexane 68.7 °C); feed bubble point 51.6 °C, so the 30 °C feed is subcooled.

3. **Condenser:** $V_1 = 4D = 3992$ lbmol/h, $\lambda \approx \lambda_{C5}$:
$$Q_C = -V_1\lambda = -3992(11\,369) = -4.54\times10^7\ \mathrm{Btu/h}$$

4. **Reboiler duty**, reference liquids at 30 °C ($h_F = 0$). $C_P$ is per °F, so each °C difference is multiplied by 1.8:
$h_D = 39.7(36.1 - 30)(1.8) = 435$ Btu/lbmol; $h_B = 51.7(68.6 - 30)(1.8) = 3593$ Btu/lbmol.
$$Q_R = Dh_D + Bh_B - Fh_F - Q_C = 998(435) + 1502(3593) + 4.539\times10^7 = 5.12\times10^7\ \mathrm{Btu/h}$$

**Book answer:** $B = 1502$, $D = 998$ lbmol/h ✓; $Q_C = -45\,385\,050$ Btu/h ✓; $Q_R = 50\,861\,500$ Btu/h ✓ (ours 0.7 % higher, from the product temperatures used for $h_D$ and $h_B$).

> **Exam tip:** "watch your units": with $C_P$ in Btu/(lbmol °F) a temperature difference in °C must be multiplied by 1.8; forgetting it underestimates the sensible heats.`,
        answer: String.raw`D = 998 lbmol/h, B = 1502 lbmol/h, Q_C ≈ −4.54 × 10⁷ Btu/h, Q_R ≈ 5.12 × 10⁷ Btu/h (book −45 385 050 and 50 861 500 ✓).` } ] },

    { id: "practice-column-balances-P8", q: 8, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-column-balances-P8", label: "", marks: "", topic: "column-balances",
        sub: "Cryogenic air (O₂–N₂) column: D, B, Q_C, Q_R", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 3.F1* (its answer is printed as "3.F3" in the book's answer list)`,
        text: String.raw`An oxygen–nitrogen mixture is distilled at low temperature in an ordinary column (total condenser, partial reboiler) at 1 atm. The feed, 25 000 kmol/h of 21 mol% O₂ and 79 mol% N₂, is a superheated vapor at 100 K. The bottoms must be 99.6 mol% O₂ and the distillate 99.7 mol% N₂. $L_0/D = 4$ and the reflux is a saturated liquid. Find $D$, $B$, $Q_R$ and $Q_C$. (Physical-property data must be found from other sources.)`,
        solution: String.raw`> The balances are those of the slides; only the property data come from outside (Perry's Handbook values).

**Given:** $F = 25\,000$ kmol/h, $z_{N_2} = 0.79$, $x_{D,N_2} = 0.997$, $x_{B,N_2} = 0.004$, $L_0/D = 4$, feed vapor at 100 K, 1 atm.

**Data:** normal boiling points N₂ 77.4 K, O₂ 90.2 K; latent heats $\lambda_{N_2} = 5.58$ kJ/mol = 1333 kcal/kmol, $\lambda_{O_2} = 6.82$ kJ/mol = 1630 kcal/kmol; vapor heat capacities ≈ 6.96 (N₂) and 7.02 (O₂) kcal/(kmol K).

1. **Mass balances** (nitrogen):
$$D = F\frac{z - x_B}{x_D - x_B} = 25\,000\,\frac{0.79 - 0.004}{0.997 - 0.004} = 19\,788.5\ \mathrm{kmol/h},\qquad B = 5211.5\ \mathrm{kmol/h}$$

2. **Condenser:** $V_1 = 5D = 98\,943$ kmol/h of almost pure N₂:
$$Q_C = -V_1\lambda_{N_2} = -98\,943(1333) = -1.32\times10^8\ \mathrm{kcal/h}$$

3. **Reboiler**, reference vapor at 100 K (the feed state, $h_F = 0$). Each product is cooled as vapor to its boiling point and condensed:
$h_D = -[6.96(100 - 77.4) + 1333] = -1490$ kcal/kmol; $h_B = -[7.02(100 - 90.2) + 1630] = -1699$ kcal/kmol.
$$Q_R = Dh_D + Bh_B - Fh_F - Q_C = 19\,788.5(-1490) + 5211.5(-1699) + 1.319\times10^8 = 9.35\times10^7\ \mathrm{kcal/h}$$

**Book answer:** $B = 5211.5$, $D = 19\,788.5$ kmol/h ✓; $Q_C = -133\,572\,000$ ✓ and $Q_R = 95\,030\,000$ kcal/h ✓ (within 1.5 %: the book used $\lambda_{N_2} \approx 1350$ kcal/kmol; with that value our method gives $-1.336\times10^8$ and $9.49\times10^7$).

> **Exam tip:** $Q_R < |Q_C|$ here because the feed is a superheated vapor: the condenser must remove the feed's superheat and latent heat that the reboiler never supplied.`,
        answer: String.raw`D = 19 788.5 kmol/h, B = 5211.5 kmol/h, Q_C ≈ −1.32 × 10⁸ kcal/h, Q_R ≈ 9.4 × 10⁷ kcal/h (book −1.336 × 10⁸ and 9.50 × 10⁷ ✓).` } ] },

    { id: "practice-column-balances-P9", q: 9, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-column-balances-P9", label: "", marks: "", topic: "column-balances",
        sub: "Ammonia–water column at 6 kg/cm² per kmol feed: D, B, x_B, Q_C, Q_R", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 3.F2* (its answer is printed as "3.F4" in the book's answer list)`,
        text: String.raw`Ammonia–water is distilled in an ordinary column (total condenser, partial reboiler) at 6 kg/cm². The feed is 30 wt% NH₃ at 20 °C. The distillate must be 98 wt% NH₃ and contain 95 % of the ammonia fed. $L_0/D = 2.0$ and the reflux is returned at −20 °C. Find $D$, $B$, $x_B$, $Q_R$ and $Q_C$ per kmol of feed. (An NH₃–H₂O enthalpy–composition chart is needed.)`,
        solution: String.raw`> No NH₃–H₂O chart is in the course material, so the enthalpies below are estimates built from pure-component data plus the heat of mixing; treat $Q_C$ and $Q_R$ as ±3 %.

**Given:** basis 1 kmol feed, 30 wt% NH₃; $x_D = 0.98$ wt; recovery 0.95; $L_0/D = 2$; reflux at −20 °C; 6 kg/cm² (5.9 bar).

1. **Mass balances.** Feed molar mass: $1/M = 0.30/17.03 + 0.70/18.015 \Rightarrow M = 17.71$ kg/kmol; NH₃ in feed $= 0.30(17.71) = 5.312$ kg.
$$D = \frac{0.95(5.312)}{0.98} = 5.150\ \mathrm{kg},\qquad B = 17.71 - 5.15 = 12.56\ \mathrm{kg},\qquad x_B = \frac{0.05(5.312)}{12.56} = 0.0212\ \mathrm{wt\ NH_3}$$

2. **Estimated enthalpies** (kcal/kg, reference liquid NH₃ and liquid water at 0 °C):

| Stream | Estimate | Value |
|---|---|---|
| $H_1$ | 98 wt% vapor at its dew point (≈ 50 °C): $0.98(301 + 0.52\times50) + 0.02(597 + 0.45\times50)$ | 333 |
| $h_D$ | 98 wt% liquid at −20 °C: $C_P \approx 1.1$, small mixing term | −25 |
| $h_B$ | 2.1 wt% liquid at its bubble point (≈ 150 °C) | 146 |
| $h_F$ | 30 wt% at 20 °C: $20(1.0) - 43$ (heat of mixing ≈ −2.5 kcal/mol NH₃) | −23 |

3. **Condenser:** $V_1 = 3D = 15.45$ kg; $Q_C = -V_1(H_1 - h_D) = -15.45(333 + 25) = -5.53\times10^3$ kcal/kmol feed.

4. **Overall balance:**
$$Q_R = Dh_D + Bh_B - Fh_F - Q_C = 5.15(-25) + 12.56(146) - 17.71(-23) + 5530 = 7.64\times10^3\ \mathrm{kcal/kmol\ feed}$$

**Book answer:** $B = 12.54$, $D = 5.15$ kg/kmol feed ✓; $Q_C = -5562$ kcal/kmol feed ✓ (0.6 %); $Q_R = 7815$ kcal/kmol feed ✓ (2 %, the bottoms and feed enthalpies are the uncertain estimates).

> **Exam tip:** a large negative heat of mixing (NH₃–water) makes the feed enthalpy negative even at 20 °C; ignoring it would underestimate $Q_R$.`,
        answer: String.raw`Per kmol feed: D = 5.15 kg, B = 12.56 kg, x_B = 0.021 wt NH₃; Q_C ≈ −5.5 × 10³ kcal, Q_R ≈ 7.6 × 10³ kcal (book −5562 and 7815 ✓).` } ] },

    { id: "practice-column-balances-P10", q: 10, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-column-balances-P10a", label: "(a)", marks: "8", topic: "column-balances",
        sub: "From a cascade of flash drums to a distillation column", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Slides 3A, "Flash to Fractional" sequence; Wankat 3e, Section 3.1`,
        text: String.raw`Starting from a single flash drum, explain with sketches the successive steps that lead to a modern fractional distillation column. State the limitation that each step removes.`,
        solution: String.raw`| Step | What is done | Limitation removed / remaining |
|---|---|---|
| 1. Cascade of flash drums | vapor of each drum is flashed again (pressures rising upward), liquid flashed again downward | a single flash gives only one equilibrium stage; but intermediate streams ($L_1$, $L_2$, $V_4$, $V_5$) are of intermediate composition and are wasted |
| 2. Countercurrent cascade | intermediate liquids and vapors are returned as feeds to the neighbouring drums: vapor goes up, liquid goes down | no intermediate products, two pure end products in high yield; but each drum needs a different pressure, so many compressors and valves |
| 3. Constant pressure, varying temperature | intermediate heaters and coolers replace pressure changes ($T_1 < T_2 < \dots < T_5$) | no compressors; but vapor flow falls toward the top and liquid flow toward the bottom |
| 4. Reflux and boilup | part of $V_1$ is condensed and returned ($L_0$, reflux); part of the bottom liquid is vaporized and returned (boilup) | internal liquid and vapor flows can be set at any level; products $D$ and $B$ |
| 5. Heat exchange inside the column | all heat is added in the reboiler and removed in the condenser; on each tray the hot vapor and cold liquid exchange heat and mass by direct contact | intermediate exchangers disappear: the column of trays (rectifying section above the feed, stripping section below) |

Sketch: draw the five-drum countercurrent cascade (vapor arrows up, liquid arrows down, feed to the middle drum), then the column with total condenser, reflux drum, reflux $L_0$, distillate $D$, partial reboiler, boilup $\bar{V}$, bottoms $B$ (see the flowsheet below).

![Column with total condenser and partial reboiler](fig/practice-column-balances-P1-sol.svg)`,
        answer: String.raw`Flash cascade → countercurrent cascade (no intermediate products) → constant pressure with intermediate heat exchange (no compressors) → reflux and boilup → direct contact on trays with one condenser and one reboiler.` },
        { id: "practice-column-balances-P10b", label: "(b)", marks: "4", topic: "column-balances",
        sub: "The K V/L criterion for where a component goes", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Slides 3A, "Predicting Phase Distribution: The K_i V/L Criterion"`,
        text: String.raw`What is the $K_iV/L$ criterion? Use it to explain why, in a binary column, the more volatile component goes to the distillate and the less volatile one to the bottoms.`,
        solution: String.raw`On any equilibrium stage (a small flash drum) component $i$ leaves in the vapor at rate $y_iV$ and in the liquid at rate $x_iL$. With $y_i = K_ix_i$:
$$\frac{\text{flow of } i \text{ in vapor}}{\text{flow of } i \text{ in liquid}} = \frac{K_iV}{L}$$

- $K_iV/L > 1$: component $i$ moves mainly into the vapor leaving the stage, travels up and ends in the distillate.
- $K_iV/L < 1$: it moves mainly into the liquid, travels down and ends in the bottoms.

$K_i$ measures volatility, $V/L$ measures how much vaporization occurs. In a binary column $L/V$ lies between the two $K$ values on every stage, so $K_{MVC}V/L > 1$ and $K_{LVC}V/L < 1$: the MVC goes up and the LVC goes down. Raising the reflux (larger $L/V$ in the rectifying section) pushes the LVC back down and purifies the distillate.`,
        answer: String.raw`K_iV/L is the vapor-to-liquid flow ratio of component i on a stage; above 1 it goes up to the distillate, below 1 down to the bottoms; in a binary column K_MVC·V/L > 1 > K_LVC·V/L.` } ] },

    { id: "practice-column-balances-P11", q: 11, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-column-balances-P11", label: "", marks: "20", topic: "column-balances",
        sub: "Methanol–water column with subcooled reflux from Cp and λ data", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem, own numbers; method of slides 3A (external balances) and Wankat 3e, Section 3.4`,
        text: String.raw`A distillation column at 1 atm separates 200 kmol/h of 45 mol% methanol, 55 mol% water, fed as a liquid at 25 °C. The distillate is 96 mol% methanol and the bottoms 3 mol% methanol. The column has a total condenser that subcools the reflux and distillate to 45 °C, and a partial reboiler; $L_0/D = 1.6$.

Data: bubble points 64.9 °C at $x = 0.96$ and 95.0 °C at $x = 0.03$; $\lambda_{MeOH} = 8.43$ and $\lambda_{H_2O} = 9.72$ kcal/mol; $C_{PL,MeOH} = 19.4$ and $C_{PL,H_2O} = 18.0$ cal/(mol °C). Neglect heats of mixing.

(a) Find $D$ and $B$. (5)

(b) Find $Q_C$ and $Q_R$. (11)

(c) Because the reflux is subcooled, the internal reflux $L_1$ below the top stage differs from $L_0$. Find $L_1/V_2$ and compare it with $L_0/V_1$. (4)`,
        solution: String.raw`**Given:** $F = 200$ kmol/h, $z = 0.45$, $T_F = 25\ ^\circ$C; $x_D = 0.96$, $x_B = 0.03$; $L_0/D = 1.6$; reflux at 45 °C.

**Assumptions:** adiabatic column, ideal mixture, mole-fraction-weighted $C_P$ and $\lambda$, reference state pure liquids at 25 °C (so $h_F = 0$).

**(a)**
$$D = F\frac{z - x_B}{x_D - x_B} = 200\,\frac{0.45 - 0.03}{0.96 - 0.03} = 90.32\ \mathrm{kmol/h},\qquad B = 109.68\ \mathrm{kmol/h}$$

**(b)** Mixture properties: $C_{P,D} = 0.96(19.4) + 0.04(18.0) = 19.34$ cal/(mol °C); $\lambda_D = 0.96(8430) + 0.04(9720) = 8482$ cal/mol; $C_{P,B} = 18.04$ cal/(mol °C). (1 cal/mol = 1 kcal/kmol.)

| Enthalpy (kcal/kmol) | Expression | Value |
|---|---|---|
| $h_D$ (liquid, 45 °C) | $19.34(45 - 25)$ | 387 |
| $H_1$ (sat. vapor, 64.9 °C) | $19.34(64.9 - 25) + 8482$ | 9253 |
| $h_B$ (sat. liquid, 95.0 °C) | $18.04(95.0 - 25)$ | 1262 |
| $h_F$ | reference state | 0 |

Condenser: $V_1 = (1 + 1.6)D = 234.8$ kmol/h,
$$Q_C = -V_1(H_1 - h_D) = -234.8(9253 - 387) = -2.08\times10^6\ \mathrm{kcal/h}$$
Overall balance:
$$Q_R = Dh_D + Bh_B - Fh_F - Q_C = 90.32(387) + 109.68(1262) - 0 + 2.082\times10^6 = 2.26\times10^6\ \mathrm{kcal/h}$$

**(c)** Balances on stage 1 with $H_1 \approx H_2 = H$ and saturated liquid $h_1 = 19.34(64.9 - 25) = 772$ kcal/kmol: $V_2 + L_0 = V_1 + L_1$ and $V_2H + L_0h_0 = V_1H + L_1h_1$ give
$$L_1 = L_0\frac{H - h_0}{H - h_1} = 144.5\,\frac{9253 - 387}{9253 - 772} = 151.1\ \mathrm{kmol/h},\qquad V_2 = L_1 + D = 241.4\ \mathrm{kmol/h}$$
$$\frac{L_1}{V_2} = 0.626\quad\text{vs.}\quad\frac{L_0}{V_1} = \frac{1.6}{2.6} = 0.615$$
The cold reflux condenses extra vapor on stage 1, so the internal reflux is about 4.5 % larger than the external one.

> **Exam tip:** with $C_P$/$\lambda$ data, pick the feed temperature as reference so $h_F = 0$, and give each product a sensible-heat path (and a latent heat for vapors) from that reference.`,
        answer: String.raw`(a) D = 90.3, B = 109.7 kmol/h; (b) Q_C ≈ −2.08 × 10⁶ kcal/h, Q_R ≈ 2.26 × 10⁶ kcal/h; (c) L₁ = 151 kmol/h, L₁/V₂ = 0.626 > L₀/V₁ = 0.615.` } ] },

    { id: "practice-column-balances-P12", q: 12, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-column-balances-P12", label: "", marks: "15", topic: "column-balances",
        sub: "Derive D, B, Q_C, Q_R for two feeds and a side draw; open-steam L/D", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style derivation; slides 3A external balances; Wankat 3e, Problems 3.C1–3.C3`,
        text: String.raw`(a) A column has two feeds ($F_1, z_1, h_{F1}$ and $F_2, z_2, h_{F2}$), a saturated-liquid side draw ($S, x_S, h_S$), a total condenser and a partial reboiler. Derive expressions for $D$, $B$, $Q_C$ and $Q_R$ when $x_D$, $x_B$ and $L_0/D$ are specified. Show that for $S = 0$ the result reduces to the single-feed formula with $F = F_1 + F_2$ and $z = (F_1z_1 + F_2z_2)/F$. (10)

(b) For a column heated by open steam ($S$ kg/h of saturated steam, no reboiler) with one feed and a total condenser, derive an expression for $L/D$ in terms of stream flows and enthalpies. (5)`,
        solution: String.raw`![General column with two feeds and a side draw](fig/practice-column-balances-P12-sol.svg)

**Assumptions:** steady state, adiabatic column ($Q_{col} = 0$), total condenser ($y_1 = x_0 = x_D$), saturated reflux.

**(a)**

1. Total and component balances around the whole column:
$$F_1 + F_2 = D + B + S \qquad (1)$$
$$F_1z_1 + F_2z_2 = Dx_D + Bx_B + Sx_S \qquad (2)$$

2. Put $B = F_1 + F_2 - D - S$ from (1) into (2):
$$D = \frac{F_1(z_1 - x_B) + F_2(z_2 - x_B) - S(x_S - x_B)}{x_D - x_B},\qquad B = F_1 + F_2 - S - D$$

3. With $S = 0$, define $F = F_1 + F_2$ and $Fz = F_1z_1 + F_2z_2$: $D = F(z - x_B)/(x_D - x_B)$, the single-feed result. The external balances cannot tell where the feeds enter.

4. Condenser: $V_1 = L_0 + D = (1 + L_0/D)D$; energy $V_1H_1 + Q_C = (L_0 + D)h_D$, so
$$Q_C = -\left(1 + \frac{L_0}{D}\right)D\,(H_1 - h_D)$$

5. Overall energy balance: $F_1h_{F1} + F_2h_{F2} + Q_C + Q_R = Dh_D + Bh_B + Sh_S$:
$$Q_R = Dh_D + Bh_B + Sh_S - F_1h_{F1} - F_2h_{F2} - Q_C$$

**(b)** Open steam $S$ ($y_S = 0$, enthalpy $H_S$), no $Q_R$:

1. Mass: $F + S = D + B$ and $Fz = Dx_D + Bx_B$, so $D = (Fz - (F + S)x_B)/(x_D - x_B)$ and $B = F + S - D$.
2. Energy: $Fh_F + SH_S + Q_C = Dh_D + Bh_B$, so $Q_C = Dh_D + Bh_B - Fh_F - SH_S$.
3. Condenser: $-Q_C = V_1(H_1 - h_D) = (L + D)(H_1 - h_D)$. Therefore
$$\frac{L}{D} = \frac{Fh_F + SH_S - Dh_D - Bh_B}{D(H_1 - h_D)} - 1$$

> **Exam tip:** write the balances in symbols around the whole column before substituting; each extra stream (feed, side draw, steam, cold reflux) simply adds one term to each balance.`,
        answer: String.raw`D = [F₁(z₁ − x_B) + F₂(z₂ − x_B) − S(x_S − x_B)]/(x_D − x_B); Q_C = −(1 + L₀/D)D(H₁ − h_D); Q_R = Dh_D + Bh_B + Sh_S − ΣF h_F − Q_C; open steam: L/D = (Fh_F + SH_S − Dh_D − Bh_B)/[D(H₁ − h_D)] − 1.` } ] },

    { id: "practice-column-balances-P13", q: 13, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-column-balances-P13", label: "", marks: "20", topic: "column-balances",
        sub: "Ethanol–water with H–x chart, subcooled reflux; effect of preheating the feed", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem, own numbers; method of slides 3A, Example 3-1 type`,
        text: String.raw`A column at 1 kg/cm² separates 5000 kg/h of 25 wt% ethanol in water, fed as a liquid at 30 °C, into a distillate of 85 wt% ethanol and a bottoms of 2 wt% ethanol. The total condenser subcools the reflux and distillate to 30 °C; $L_0/D = 2.5$. A partial reboiler is used. Use the enthalpy–composition diagram for ethanol–water at 1 kg/cm² (attached).

(a) Find $D$ and $B$. (4)

(b) Find $Q_C$ and $Q_R$, stating every enthalpy you read. (12)

(c) If the feed were preheated to its bubble point with $L_0/D$ unchanged, how would $Q_C$ and $Q_R$ change? (4)`,
        solution: String.raw`**Given:** $F = 5000$ kg/h, $z = 0.25$, 30 °C; $x_D = 0.85$, $x_B = 0.02$ (wt); $L_0/D = 2.5$; reflux at 30 °C.

**Assumptions:** adiabatic column, total condenser, bottoms saturated liquid.

**(a)**
$$D = 5000\,\frac{0.25 - 0.02}{0.85 - 0.02} = 1385.5\ \mathrm{kg/h},\qquad B = 3614.5\ \mathrm{kg/h}$$

**(b)** Enthalpies read from the chart (kcal/kg):

| Stream | State | Reading |
|---|---|---|
| $h_F$ | 0.25, 30 °C (between the 20 °C and 40 °C isotherms) | 21 |
| $h_D$ | 0.85, 30 °C | 17 |
| $H_1$ | saturated vapor, 0.85 | 309 |
| $h_B$ | saturated liquid, 0.02 | 97 |

$$Q_C = -\left(1 + \frac{L_0}{D}\right)D(H_1 - h_D) = -3.5(1385.5)(309 - 17) = -1.42\times10^6\ \mathrm{kcal/h}$$
$$Q_R = Dh_D + Bh_B - Fh_F - Q_C = 1385.5(17) + 3614.5(97) - 5000(21) + 1.416\times10^6 = 1.68\times10^6\ \mathrm{kcal/h}$$

**(c)** With $L_0/D$ and the products fixed, $Q_C$ is unchanged ($-1.42\times10^6$ kcal/h). The feed enthalpy rises to the saturated-liquid value $h_F = 79$ kcal/kg, so
$$\Delta Q_R = -F\,\Delta h_F = -5000(79 - 21) = -2.9\times10^5\ \mathrm{kcal/h},\qquad Q_R = 1.39\times10^6\ \mathrm{kcal/h}$$
The heat is now supplied in the preheater (often by heat exchange with the hot bottoms), not in the reboiler.

> **Exam tip:** for a given $L_0/D$, any heat added to the feed is saved in the reboiler one-for-one; the condenser duty depends only on $V_1$ and the reflux temperature.`,
        answer: String.raw`(a) D = 1385.5, B = 3614.5 kg/h; (b) Q_C ≈ −1.42 × 10⁶, Q_R ≈ 1.68 × 10⁶ kcal/h; (c) Q_C unchanged, Q_R falls by 2.9 × 10⁵ to ≈ 1.39 × 10⁶ kcal/h.` } ] }
  ] });
