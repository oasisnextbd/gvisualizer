QB.paper({
  year: "2021-22", date: "30/03/2023", marks: 210,
  rules: String.raw`Section A: Q1 compulsory + any two of Q2–Q4. Section B: any three of Q5–Q8. Heat Transfer Data Booklet supplied. Use separate scripts for each section.`,
  questions: [
    { id: "2021-22-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q1", label: "", marks: "35",
          topic: "shell-tube", sub: "Open design: 1-2 steam condenser (Kern method, two alternatives)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A shell and tube heat exchanger with one shell pass and two tube passes is to be designed to condense 3900 kg/hr of steam at 1 atm. The steam may be assumed to enter the shell side as saturated vapor and leave as saturated liquid. Water is employed as the cooling fluid in the tubes with an inlet temperature of 40°C. Using appropriate approximation, recommend a suitable design that specifies
(i) The number of tubes in each tube pass
(ii) Tube diameter and length in each tube pass
(iii) Tube arrangement inside the shell
(iv) Shell diameter

Consider at least two alternatives before selecting a final design and discuss the factors that influenced your design selection.`,
          solution: String.raw`This follows the course's kerosene–gasoline design procedure (Kern): heat balance → LMTD and $F_T$ → assumed $U$ (Kern Table 8) → area and tube count (Kern Table 9) → tube-side and shell-side $h$ → $U$ check → pressure drops → over-surface and over-design. It is done in SI units, with Kern's standard tube sizes.

![1-2 shell-and-tube exchanger and its flow paths](fig/common-st-1-2.svg)

**Given:** steam $\dot m_s = 3900$ kg/h = 1.083 kg/s, saturated at 1 atm, leaves as saturated liquid; water in tubes, $t_1 = 40$°C; 1 shell pass, 2 tube passes.

**Design decisions (assumptions):**
- Water outlet $t_2 = 70$°C. A 30°C rise keeps the water flow moderate. A higher outlet would cut the LMTD; a lower one (e.g. 50°C) would need about 3 times the water and many more tubes per pass.
- Steam in the shell (condensing fluid, clean, needs space for vapour and condensate drainage); water in the tubes (fouling fluid, easy to clean).
- Horizontal exchanger: for $L > 2.77D$ horizontal tubes give a higher condensing $h$ than vertical ones (slides).
- Fixed tube sheet: the temperatures are moderate and the shell side is clean, so no removable bundle is needed.
- **Square pitch** (Kern Table 9 in the slides), giving clear vertical lanes for condensate to drain and allowing mechanical cleaning lanes.
- Tube material admiralty brass, $k_w = 121$ W/m·K (70 Btu/h·ft·°F, as in the course example).
- Fouling (Kern Table 12): steam $R_{do} = 0.0005$ h·ft²·°F/Btu = $8.8\times10^{-5}$ m²K/W; treated cooling water $R_{di} = 0.001$ h·ft²·°F/Btu = $1.76\times10^{-4}$ m²K/W.
- Allowable ΔP: tube side 10 psi (69 kPa); shell side kept small (condensing at 1 atm).
- $\phi = (\mu/\mu_w)^{0.14} = 1$.

**Properties.** Steam at 1 atm (Çengel A-4): $T_{sat} = 100$°C, $h_{fg} = 2257$ kJ/kg, $\rho_v = 0.598$ kg/m³, $\mu_v = 1.23\times10^{-5}$ Pa·s. Water at mean 55°C (Çengel A-9): $\rho = 985.2$ kg/m³, $c_p = 4183$ J/kg·K, $\mu = 0.504\times10^{-3}$ Pa·s, $k = 0.649$ W/m·K, $Pr = 3.25$. Condensate at the film temperature (≈ 87–89°C, Çengel A-9 interpolated): $\rho_l \approx 967$ kg/m³, $\mu_l \approx 0.326\times10^{-3}$ Pa·s, $k_l \approx 0.674$ W/m·K, $c_{pl} \approx 4203$ J/kg·K.

### I. Heat balance
$$Q = \dot m_s h_{fg} = 1.0833(2257\times10^3) = 2.445\times10^6\ \mathrm{W}$$
$$\dot m_w = \frac{Q}{c_p(t_2 - t_1)} = \frac{2.445\times10^6}{4183(30)} = 19.48\ \mathrm{kg/s}\ (70{,}140\ \mathrm{kg/h})$$

### II. LMTD and correction factor
$$\Delta T_{lm} = \frac{(100-40) - (100-70)}{\ln(60/30)} = 43.28\ \mathrm{°C}$$
Shell fluid isothermal → $R = (T_1-T_2)/(t_2-t_1) = 0$ → **$F_T = 1$** (Holman Fig. 10-8). Caloric temperature of water: arithmetic mean 55°C (no Kc chart for water).

### III. Iteration #1
Kern Table 8, condensers, steam–water: $U_D = 350$–750 Btu/h·ft²·°F. Assume 500 Btu/h·ft²·°F = **2840 W/m²K**:
$$A = \frac{Q}{U_D F_T\Delta T_{lm}} = \frac{2.445\times10^6}{2840(1)(43.28)} = 19.9\ \mathrm{m^2}$$
With ¾-in OD, 16 BWG, 16 ft (4.877 m) tubes: $n_t = A/(\pi d_oL) = 19.9/(\pi\times0.01905\times4.877) = 68$ → Kern Table 9 (¾ in on 1 in square, 2-P): **12-in shell, 76 tubes**.
Check: 38 tubes per pass → $V = 2.67$ m/s, $Re = 8.2\times10^4$. Following steps IV–VI for this geometry gives $U_{o,cal} = 1736$ W/m²K, which is **−39%** from the assumed value (> 30%). The area is about 32% short, and tube-side $\Delta P = 88$ kPa (12.8 psi) exceeds 10 psi. **Rejected.** The assumed $U$ was too high, because it did not account for fouling. Revise to **$U_D = 1600$ W/m²K** (≈ 280 Btu/h·ft²·°F):
$$A = \frac{2.445\times10^6}{1600(43.28)} = 35.3\ \mathrm{m^2}$$

### IV. Two alternatives (iteration #2)
| | **Alternative 1** | **Alternative 2** |
|---|---|---|
| Tubes | ¾ in OD (19.05 mm), 16 BWG, ID 0.620 in (15.75 mm) | 1 in OD (25.4 mm), 14 BWG, ID 0.834 in (21.18 mm) |
| Pitch | 1 in square | 1¼ in square |
| Length | 16 ft (4.877 m) | 16 ft (4.877 m) |
| $n_t$ required $= A/(\pi d_oL)$ | $35.3/(\pi\times0.01905\times4.877) = 121$ | $35.3/(\pi\times0.0254\times4.877) = 91$ |
| Kern Table 9 (2-P) | **124 tubes, 15¼ in shell** | **112 tubes, 17¼ in shell** |
| Tubes per pass | 62 | 56 |
| Actual area $A = n_t\pi d_oL$ | 36.19 m² | 43.58 m² |

### V. Film coefficients
**Tube side (water).** Flow area per pass $a_t = (n_t/n)a'_t$ ($a'_t = 1.948$ cm² for ¾ in 16 BWG, 3.523 cm² for 1 in 14 BWG).

| | Alt. 1 | Alt. 2 |
|---|---|---|
| $a_t$ (m²) | $62(1.948\times10^{-4}) = 0.01208$ | $56(3.523\times10^{-4}) = 0.01973$ |
| $G_t = \dot m_w/a_t$ (kg/m²s) | 1613 | 988 |
| $V = G_t/\rho$ (m/s) | 1.64 | 1.00 |
| $Re = d_iG_t/\mu$ | $5.04\times10^4$ | $4.15\times10^4$ |
| $j_H$ (Kern Fig. 24; fit $0.027Re^{0.8}$) | 156 | 134 |
| $h_i = j_H(k/d_i)Pr^{1/3}$ (W/m²K) | 9530 | 6060 |
| $h_{io} = h_i(d_i/d_o)$ | 7875 | 5058 |

(Dittus–Boelter, $n = 0.4$: $h_i$ = 8780 and 5590, within about 8%.)

**Shell side (condensing steam).** Nusselt correlation for a horizontal tube bank (slides), with $N$ = tubes in a vertical row ≈ $\sqrt{n_t}$ (11.1 and 10.6):
$$h_o = 0.725\left[\frac{\rho_l(\rho_l-\rho_v)gh^*_{fg}k_l^3}{N d_o\mu_l(T_{sat}-T_w)}\right]^{1/4},\qquad h^*_{fg} = h_{fg} + 0.68c_{pl}(T_{sat}-T_w)$$
The wall temperature is found by iteration from $h_o(T_{sat}-T_w) = h_{io}(T_w - 55)$:

| | Alt. 1 | Alt. 2 |
|---|---|---|
| $T_w$ (°C) | 73.7 | 78.7 |
| Film temp. (°C) | 86.9 | 89.3 |
| $h^*_{fg}$ (kJ/kg) | 2332 | 2318 |
| $h_o$ (W/m²K) | 5614 | 5606 |

### VI. Overall coefficients
Clean: $\dfrac{1}{U_C} = \dfrac{1}{h_o} + \dfrac{d_o\ln(d_o/d_i)}{2k_w} + \dfrac{1}{h_{io}}$. Calculated design value (course eq. 1.6):
$$\frac{1}{U_{o,cal}} = \frac{1}{h_o} + R_{do} + \frac{d_o\ln(d_o/d_i)}{2k_w} + \frac{d_o}{d_i}\frac{1}{h_i} + \frac{d_o}{d_i}R_{di}$$

| | Alt. 1 | Alt. 2 |
|---|---|---|
| Wall resistance (m²K/W) | $1.50\times10^{-5}$ | $1.91\times10^{-5}$ |
| $U_C$ (W/m²K) | 3124 | 2531 |
| $U_{o,cal}$ (W/m²K) | **1610** | **1440** |
| Deviation from assumed 1600 | +0.6% (< 30%, OK) | −10% (OK) |
| $A_{reqd} = Q/(U_{o,cal}\Delta T_{lm})$ | 35.1 m² | 39.2 m² |
| Over-design $(A - A_{reqd})/A_{reqd}$ | **+3.1%** | **+11.1%** |
| Over-surface $(U_C - U_{o,cal})/U_C$ | 48% | 43% |
| $U_D$ actual $= Q/(A\Delta T_{lm})$ | 1561 | 1296 |
| $R_d$ available $= (U_C-U_D)/(U_CU_D)$ | $3.21\times10^{-4}$ | $3.76\times10^{-4}$ |
| $R_d$ required ($R_{do} + R_{di}d_o/d_i$) | $3.01\times10^{-4}$ | $2.99\times10^{-4}$ |

Both alternatives meet the duty with the required fouling allowance.

### VII. Pressure drops
**Tube side:** $f$ from Kern Fig. 26 (fit $f = 1.2\times4(0.0035 + 0.264Re^{-0.42})$, dimensionless), $\Delta P_t = \dfrac{fG_t^2Ln}{2\rho d_i\phi_t}$, return loss $\Delta P_r = 4n\dfrac{\rho V^2}{2}$.

**Shell side** (Kern, condensing: half the dry-vapour value, vapour density at inlet): $\Delta P_s = \dfrac12\dfrac{fG_s^2D_s(N+1)}{2\rho_vD_e\phi_s}$. Baffles (support plates) spaced at $B = D_s$; $a_s = D_sC'B/P_T$; $D_e$ = 0.95 in (¾ in on 1 in square) or 0.99 in (1 in on 1¼ in square); $f$ from Kern Fig. 29 (fit $e^{0.576-0.19\ln Re}$).

| | Alt. 1 | Alt. 2 |
|---|---|---|
| $f$ (tube) | 0.0302 | 0.0314 |
| $\Delta P_t$ + $\Delta P_r$ (kPa) | 24.7 + 10.6 = **35.3** (5.1 psi) | 7.1 + 4.0 = **11.1** (1.6 psi) |
| $a_s$ (m²), $G_s$ (kg/m²s) | 0.0375, 28.9 | 0.0384, 28.2 |
| $Re_s = D_eG_s/\mu_v$ | $5.7\times10^4$ | $5.8\times10^4$ |
| $N+1 = L/B$ | 12.6 | 11.1 |
| $\Delta P_s$ (kPa) | **15.7** (2.3 psi) | **14.3** (2.1 psi) |

Both are within the 69 kPa (10 psi) tube-side limit, and the shell-side drop is small compared with 1 atm.

### VIII. Other options checked (same method)
| Option | Shell / tubes | V (m/s) | Over-design | Verdict |
|---|---|---|---|---|
| ¾ in, 12 ft | 17¼ in / 166 | 1.22 | −2.0% | slightly short of area: reject |
| 1 in, 20 ft | 15¼ in / 76 | 1.48 | +2.2% | works, but $L/D_s = 15.7$ (long, slender, hard to handle) |

### IX. Selection and recommended design
**Factors weighed:**
- **Compactness and cost:** Alt. 1 needs 17% less surface (36.2 vs 43.6 m²) and a smaller shell (15¼ vs 17¼ in), so it is cheaper.
- **Tube velocity and fouling:** Alt. 1 runs water at 1.64 m/s (good range 1–2.5 m/s; higher velocity limits scaling). Alt. 2 at 1.0 m/s is at the lower limit and fouls faster.
- **Pressure drop:** Alt. 2 is lower (11 kPa vs 35 kPa), but Alt. 1 is still well within 69 kPa, so pumping cost is acceptable.
- **Safety margin:** Alt. 2 has more over-design (11% vs 3%). In Alt. 1 the fouling allowance is already included in $U_{o,cal}$, and $R_d$ available ≥ $R_d$ required.
- **Cleaning:** 1-in tubes are easier to clean mechanically, but the square pitch of either option allows cleaning lanes.
- **Proportions:** both have $L/D_s$ ≈ 11–13, acceptable for a horizontal condenser.

**Recommended (Alternative 1):**
- (i) **62 tubes per pass** (124 tubes, 2 tube passes)
- (ii) **¾-in OD (19.05 mm), 16 BWG (ID 15.75 mm), 16 ft (4.88 m) long** in each pass (U-turn in the return head)
- (iii) **1-in (25.4 mm) square pitch**, horizontal bundle, fixed tube sheets, steam in the shell, water in the tubes, condensate outlet at the bottom of the shell
- (iv) **Shell ID 15¼ in (387 mm)**, 1 shell pass

Performance: $Q = 2.45$ MW, water 19.5 kg/s from 40 to 70°C, $U_C = 3120$ W/m²K, $U_{o,cal} = 1610$ W/m²K, $A = 36.2$ m² (3% over-design), $\Delta P_t = 35$ kPa, $\Delta P_s = 16$ kPa.

**Exam tip:** in an open design, state the free choices (outlet water temperature, tube size, fouling factors) clearly, keep $F_T = 1$ for a condensing shell fluid, and show that the first assumed $U$ was checked and corrected. That iteration is what earns the marks.`,
          answer: String.raw`$Q = 2.45$ MW (water 40→70°C, 19.5 kg/s, LMTD = 43.3°C, $F_T = 1$). Recommended: 124 tubes (62 per pass), ¾ in OD 16 BWG × 16 ft, 1 in square pitch, 15¼ in shell; $U_{o,cal} \approx 1610$ W/m²K, $A = 36.2$ m², $\Delta P_t \approx 35$ kPa. The alternative (112 × 1 in tubes × 16 ft, 17¼ in shell) works but is larger, with $V = 1.0$ m/s.` },
      ] },
    { id: "2021-22-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q2a", label: "(a)", marks: "8",
          topic: "heat-exchangers", sub: "F = 1 for boiling/condensing; why F is needed",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"Values of the correction factor for LMTD calculation in a heat exchanger for boiling is considered 1 (one)" True/False. Explain your answer. Why do you need this correction factor?`,
          solution: String.raw`![Temperature profiles: parallel flow, counterflow, condensing and boiling](fig/common-hx-profiles.svg)

**True.**
- During boiling (or condensation) one fluid stays at its saturation temperature throughout the exchanger. For that fluid $\Delta T = 0$, so
$$R = \frac{T_1 - T_2}{t_2 - t_1} = 0\quad\text{(isothermal shell fluid)}\quad\text{or}\quad P = \frac{t_2-t_1}{T_1-t_1} = 0\ \ \text{(isothermal tube fluid)}$$
- On every $F$ chart (Holman Fig. 10-8 and others) $F \to 1$ when $R = 0$. Physically, when one stream is at a constant temperature it does not matter how the other stream is routed (parallel, counter, multipass, cross flow): the local driving force depends only on the other stream's temperature. All arrangements therefore have the same mean ΔT, the counterflow LMTD.

**Why the correction factor is needed**
- The LMTD $\Delta T_{lm} = (\Delta T_1 - \Delta T_2)/\ln(\Delta T_1/\Delta T_2)$ is exact only for **pure counter- or parallel-flow** (double pipe).
- In multipass shell-and-tube (1-2, 2-4) and cross-flow exchangers, part of the flow runs in parallel and part in counterflow, so the true mean temperature difference is **smaller** than the counterflow LMTD.
- $F \le 1$ corrects this: $q = UAF\Delta T_{lm,cf}$. It also flags poor designs: $F < 0.75$–0.8 indicates a likely temperature cross, and more shell passes are needed.`,
          answer: String.raw`True: with one fluid isothermal, $R$ (or $P$) = 0, so $F = 1$ for any flow arrangement. $F$ corrects the counterflow LMTD for multipass or cross flow: $q = UAF\Delta T_{lm}$.` },
        { id: "2021-22-Q2b", label: "(b)", marks: "10",
          topic: "shell-tube", sub: "2-4 shell-and-tube exchanger: schematic and temperature profile",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw and label a schematic of a 2-4 shell and tube heat exchanger. Show the corresponding temperature profile along the heat exchanger length.`,
          solution: String.raw`**Schematic (describe):** a horizontal shell with a **longitudinal baffle** along its axis, dividing it into two shell passes. Shell fluid enters at the top of one end (shell inlet nozzle), flows along the upper half across segmental (transverse) baffles, turns around the end of the longitudinal baffle, returns along the lower half, and leaves at the same end (shell outlet). Tube fluid enters a **front channel (stationary head)** split by pass partitions and makes **4 passes** (2 in each shell pass), turning in the **rear (floating) head** and front channel, then leaves from the channel outlet nozzle.

Labels: shell, shell inlet/outlet nozzles, longitudinal baffle, transverse (segmental) baffles, tube bundle, tube sheets (stationary and floating), channel with pass partition plates, channel cover, floating head cover, tube inlet/outlet nozzles, tie rods and spacers, support saddles, vent and drain.

![2-4 exchanger: longitudinal baffle, four tube passes, and the temperature profile along the shell path](fig/2021-22-Q2b-sol.svg)

**Temperature profile (describe):** horizontal axis is the length (or fraction of area), vertical axis is temperature.
- Shell fluid (say hot, $T_1 \to T_2$): one curve falling along pass 1 (left to right) and continuing to fall along pass 2 (right to left), i.e. a smooth monotonic decrease from $T_1$ to $T_2$.
- Tube fluid (cold, $t_1 \to t_2$): four branches. It rises in pass 1, continues rising in pass 2 (reverse direction), and so on; in each shell pass one tube pass runs counter-current and one co-current to the shell fluid. The curves are spaced so that the cold outlet $t_2$ may exceed the hot outlet $T_2$ (a temperature cross that a 1-2 unit cannot handle).
- Compared with a 1-2 exchanger, the 2-4 arrangement approaches true counterflow more closely, so it has a higher $F_T$ (Holman 2-shell-pass chart) for the same $R$ and $S$.`,
          answer: String.raw`A 2-4 exchanger has a longitudinal baffle (2 shell passes) and 4 tube passes. The profiles approach counterflow, allow $t_2 > T_2$, and give a higher $F$ than a 1-2 unit.` },
        { id: "2021-22-Q2c", label: "(c)", marks: "17",
          topic: "heat-exchangers", sub: "Ammonia condenser: ε–NTU sizing and reduced water flow",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`A shell and tube heat exchanger is used as an ammonia condenser with ammonia vapor entering the shell at 50°C as a saturated vapor. Water enters the single pass tube arrangement at 20°C and the total heat transfer required is 200 kW. You can assume the overall heat transfer coefficient is 1000 W/m²·°C. Determine the area to achieve a heat exchanger effectiveness of 60% with an exit temperature of 40°C. What percent reduction will result if the water flow is reduced by 25% while keeping the heat exchanger area and U the same?`,
          solution: String.raw`> The ε–NTU method is from the textbook (Holman/Çengel); it is not in the CHE 301 slides, which use LMTD with $F$. Both routes are shown. The data conflict slightly: ε = 0.6 gives a water exit of 38°C, while an exit of 40°C gives ε = 0.667. The main solution uses ε = 0.6 (the stated design target), and the 40°C case is given as a check.

**Given:** $T_{NH_3} = 50$°C (condensing, $C_h \to \infty$), $t_{c,in} = 20$°C, $q = 200$ kW, $U = 1000$ W/m²·°C.

**Assumptions:** condensation at constant temperature, so $C_{min} = C_{water}$ and $C_{min}/C_{max} = 0$. For $C_r = 0$, every exchanger type has $\varepsilon = 1 - e^{-NTU}$.

### Design area
1. $\Delta T_{max} = 50 - 20 = 30$°C. Water capacity rate:
$$C_w = \frac{q}{\varepsilon\Delta T_{max}} = \frac{200\times10^3}{0.6(30)} = 1.111\times10^4\ \mathrm{W/°C}$$
(water exit $= 20 + 0.6(30) = 38$°C)
2. $NTU = -\ln(1-\varepsilon) = -\ln(0.4) = 0.916$
3. Area:
$$A = \frac{NTU\,C_{min}}{U} = \frac{0.916(1.111\times10^4)}{1000} = 10.2\ \mathrm{m^2}$$
(LMTD check: $\Delta T_{lm} = (30-12)/\ln(30/12) = 19.6$°C, $A = q/(U\Delta T_{lm}) = 10.2$ m².)

### Water flow reduced by 25%
4. $C'_w = 0.75(1.111\times10^4) = 8333$ W/°C
$$NTU' = \frac{UA}{C'_w} = \frac{1000(10.18)}{8333} = 1.222,\qquad \varepsilon' = 1 - e^{-1.222} = 0.705$$
5. New heat transfer:
$$q' = \varepsilon' C'_w\Delta T_{max} = 0.705(8333)(30) = 176.3\ \mathrm{kW}$$
Reduction $= (200 - 176.3)/200 = $ **11.8%** (water now leaves at 41.2°C).

**LMTD route (slides' method):** with the ammonia isothermal, $q = C_w(t_2 - t_1)$ and $q = UA\,\Delta T_{lm}$ with $\Delta T_{lm} = (t_2 - t_1)/\ln[(T - t_1)/(T - t_2)]$. Equating the two gives
$$\ln\frac{T - t_1}{T - t_2} = \frac{UA}{C'_w}\ \Rightarrow\ t_2 = 50 - 30\,e^{-10{,}180/8333} = 41.2^\circ\mathrm{C},\qquad q' = 8333(41.2 - 20) = 176.3\ \mathrm{kW}$$
the same result, since $F = 1$ for a condensing shell fluid.

### Check with a 40°C exit
$C_w = 200/20 = 10$ kW/°C, $\varepsilon = 0.667$, $NTU = 1.099$, $A = 11.0$ m². With 25% less water: $NTU' = 1.465$, $\varepsilon' = 0.769$, $q' = 173.0$ kW, a 13.5% reduction.

**Why it matters:** cutting the flow by 25% cuts the duty by only about 12%, because the higher NTU raises the effectiveness. The outlet water gets hotter.`,
          answer: String.raw`$A \approx 10.2$ m² ($NTU = 0.916$, ε = 0.6). With 25% less water: ε' = 0.705, $q' \approx 176$ kW, about 11.8% less (11.0 m² and 13.5% if a 40°C exit is used).` },
      ] },
    { id: "2021-22-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q3a", label: "(a)", marks: "10",
          topic: "natural-convection", sub: "Grashof number and the onset of natural convection",
          type: "theory", syllabus: "in", repeats: ["practice-natural-convection-P4a"],
          text: String.raw`Define Grashof number. Discuss the application of Grashof number in determining the occurrence of natural heating convection.`,
          solution: String.raw`**Definition**
$$Gr_L = \frac{g\beta(T_w - T_\infty)L^3}{\nu^2}$$
$g$ is gravity, $\beta$ the volume expansion coefficient ($= 1/T$ in K for an ideal gas), $L$ the characteristic length (height of a vertical plate, diameter of a horizontal cylinder) and $\nu$ the kinematic viscosity. Properties are evaluated at the film temperature.

**Physical meaning:** ratio of **buoyancy forces to viscous forces** in the fluid, $Gr \sim \dfrac{g\beta\Delta T L^3}{\nu^2}$ = (buoyancy × inertia)/(viscous)². It plays the role in natural convection that $Re$ plays in forced convection.

**Applications**
1. **Whether natural convection matters (mixed convection):** compare with forced flow through $Gr/Re^2$ (Archimedes number):
   - $Gr/Re^2 \ll 1$: forced convection dominates, buoyancy negligible.
   - $Gr/Re^2 \gg 1$: natural convection dominates.
   - $Gr/Re^2 \approx 1$: both must be considered (mixed convection).
2. **Flow regime:** on a vertical plate the flow is laminar for $Gr \lesssim 10^9$ and turbulent above ($Ra = GrPr$ ≈ 10⁹ is the usual criterion), which fixes $C$ and $n$ in $Nu = C(GrPr)^n$ ($n = 1/4$ laminar, $1/3$ turbulent).
3. **Size of heat transfer:** $Nu = f(Gr, Pr)$, so $Gr$ (through $Ra$) gives $h$ directly.
4. **Onset in enclosed layers:** a fluid layer heated from below stays motionless (pure conduction, $Nu = 1$) until $Ra = GrPr > 1708$. Above that, convection cells form.
5. **Geometry checks:** a vertical cylinder can be treated as a plate if $D \ge 35L/Gr_L^{1/4}$.`,
          answer: String.raw`$Gr = g\beta\Delta TL^3/\nu^2$ (buoyancy/viscous). $Gr/Re^2$ shows whether natural convection matters, $Gr$ (or $Ra$) ≈ 10⁹ marks turbulence, and $Nu = C(GrPr)^n$ gives $h$.` },
        { id: "2021-22-Q3b", label: "(b)", marks: "5",
          topic: "natural-convection", sub: "Natural vs forced convection",
          type: "theory", syllabus: "in", repeats: ["practice-natural-convection-P7a"],
          text: String.raw`Distinguish natural and forced convection heat transfer.`,
          solution: String.raw`| | Natural (free) convection | Forced convection |
|---|---|---|
| Cause of motion | Buoyancy from density differences ($\rho$ varies with $T$) in a gravity field | External means: pump, fan, blower, wind |
| Velocity | Low (typically < 1 m/s), set by ΔT itself | Set independently by the device |
| Governing groups | $Nu = f(Gr, Pr)$ or $f(Ra)$ | $Nu = f(Re, Pr)$ |
| Laminar/turbulent criterion | $Gr$ or $Ra$ (≈ 10⁹ on a vertical plate) | $Re$ (5×10⁵ plate, 2300 tube) |
| Typical h (air) | 2–25 W/m²K | 25–250 W/m²K |
| Coupling | Velocity and temperature fields coupled (flow exists only because of ΔT) | Flow field can exist without heat transfer |
| Examples | Room radiator, cooling of transformer, oven door | Car radiator, shell-and-tube exchanger, hair dryer |`,
          answer: String.raw`Natural convection is driven by buoyancy, $Nu = f(Gr, Pr)$, and gives low h. Forced convection is driven by a pump or fan, $Nu = f(Re, Pr)$, and gives higher h.` },
        { id: "2021-22-Q3c", label: "(c)", marks: "20",
          topic: "natural-convection", sub: "Vertical plate with uniform heat flux (midpoint film temperature)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A vertical metal surface (4 m by 2 m) is exposed to constant heat flux of 800 W/m². The metal is insulated at the back side where no heat is lost. All the incoming heat is lost by free convection to the surrounding air at 30°C. Determine the average temperature attained by the plate.`,
          solution: String.raw`**Given:** $q'' = 800$ W/m², height $L = 4$ m (width 2 m), $T_\infty = 30$°C, back insulated, no radiation.

**Find:** average plate temperature $T_s$.

![Natural convection on a vertical plate: velocity and temperature profiles](fig/common-nc-vertical-plate.svg)

**Method (slides):** for uniform flux, use the isothermal-plate Churchill–Chu correlation with the plate (midpoint/average) temperature in the film temperature, and iterate since $T_s$ is unknown.

**Properties:** air, Holman Table A-5, interpolated at each trial film temperature; $\beta = 1/T_f$.

1. Trial and error: guess $T_s$ → $T_f = (T_s + 30)/2$ → $Ra_L$ → $Nu$ → $h$ → new $T_s = T_\infty + q''/h$. Converged values:
   - $T_s \approx 165$°C, $T_f = (165+30)/2 \approx 97.7$°C = 370.9 K
   - $\nu = 22.9\times10^{-6}$ m²/s, $k = 0.0315$ W/m·K, $Pr = 0.694$, $\beta = 1/370.9$ K⁻¹
2. Rayleigh number:
$$Ra_L = \frac{g\beta(T_s - T_\infty)L^3}{\nu^2}Pr = \frac{9.81(1/370.9)(135.4)(4)^3}{(22.9\times10^{-6})^2}(0.694) = 3.03\times10^{11}\ \ (\text{turbulent})$$
3. Churchill–Chu:
$$Nu = \left\{0.825 + \frac{0.387Ra^{1/6}}{\left[1 + (0.492/Pr)^{9/16}\right]^{8/27}}\right\}^2 = 749$$
$$h = \frac{Nu\,k}{L} = \frac{749(0.0315)}{4} = 5.91\ \mathrm{W/m^2K}$$
4. Plate temperature:
$$T_s = T_\infty + \frac{q''}{h} = 30 + \frac{800}{5.91} = 165\ \mathrm{°C}$$

**Check (Holman modified Grashof):** $Gr^*_x = g\beta q''x^4/(k\nu^2)$, turbulent $Nu_x = 0.17(Gr^*_xPr)^{1/4}$ gives $Gr^*Pr \approx 2.0\times10^{14}$, $h \approx 5.1$ W/m²K and $T_s \approx 186$°C. The simple form $Nu = 0.10Ra^{1/3}$ gives about 178°C. So the plate runs at roughly 165–185°C.

**Exam tip:** in turbulent natural convection $h$ hardly depends on $L$ ($h \propto Ra^{1/3}/L \approx$ constant), so the plate size barely affects the answer.`,
          answer: String.raw`$Ra \approx 3\times10^{11}$ (turbulent), $h \approx 5.9$ W/m²K → average plate temperature **≈ 165°C** (Churchill–Chu; the Holman $Gr^*$ method gives about 186°C).` },
      ] },
    { id: "2021-22-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q4a", label: "(a)", marks: "15",
          topic: "boiling", sub: "Regimes of pool boiling (boiling curve)",
          type: "sketch", syllabus: "in", repeats: ["practice-boiling-P3a"],
          text: String.raw`Discuss the different regimes of boiling heat transfer.`,
          solution: String.raw`![Pool boiling curve with its regimes, the critical heat flux and the Leidenfrost point](fig/common-boiling-curve.svg)

**Boiling curve (sketch):** heat flux $\dot q''$ (log scale) vs excess temperature $\Delta T_e = T_s - T_{sat}$ (log scale), for water at 1 atm. Points: A (onset of nucleate boiling, ΔT ≈ 5°C), B (bubbles merge into columns), C (critical heat flux, ΔT ≈ 30°C, ≈ 1 MW/m²), D (Leidenfrost / minimum heat flux, ΔT ≈ 120°C), then a rising branch to E (film boiling, radiation important). Under heat-flux control, raising the flux beyond C makes the surface jump along a horizontal line to E (burnout); lowering the flux in film boiling, the surface drops back from D to the nucleate curve (hysteresis).

| Regime | $\Delta T_e$ (water, 1 atm) | Mechanism | Heat transfer |
|---|---|---|---|
| **I. Natural convection boiling** (to A) | < 5°C | Liquid slightly superheated; no bubbles at the surface; evaporation at the free surface; motion by free convection | Low; $h$ from natural convection correlations |
| **II. Nucleate boiling, isolated bubbles** (A–B) | 5–10°C | Bubbles form at nucleation sites and collapse or detach; strong stirring of the liquid near the wall | $h$ rises steeply |
| **III. Nucleate boiling, jets and columns** (B–C) | 10–30°C | Bubbles merge into continuous columns and slugs; vapour starts to hinder liquid supply; $h$ peaks then falls, flux reaches $\dot q_{max}$ at C | Highest fluxes; Rohsenow correlation; most desirable operating region |
| **IV. Transition boiling** (C–D) | 30–120°C | Unstable, partly film-covered surface; vapour patches form and collapse | Flux **falls** as ΔT rises (unstable, avoided in practice) |
| **V. Film boiling** (D onward) | > 120°C | Stable vapour blanket covers the surface; heat crosses the film by conduction and radiation; minimum flux at D is the **Leidenfrost point** | Low $h$; $h_{total} = h_{film} + \tfrac34h_{rad}$ |
| **VI. Radiation-dominated film boiling** (high ΔT) | > 300°C | Radiation through the vapour film becomes dominant | Flux rises again with $T^4$ |

**Key relations (slides):** Rohsenow (nucleate): $\dot q = \mu_lh_{fg}\left[\frac{g(\rho_l-\rho_v)}{\sigma}\right]^{1/2}\left[\frac{c_{pl}\Delta T_e}{C_{sf}h_{fg}Pr_l^n}\right]^3$. Zuber: $\dot q_{max} = C_{cr}h_{fg}[\sigma g\rho_v^2(\rho_l-\rho_v)]^{1/4}$. Film boiling on cylinders and spheres: $Nu = C[\ldots]^{1/4}$, $C = 0.62$ / 0.67.

**Burnout:** with electric (flux-controlled) heating, exceeding $\dot q_{max}$ sends the surface to point E (above 1000°C), which may melt the heater. Designs therefore stay safely below the CHF.`,
          answer: String.raw`Natural convection (<5°C) → nucleate, isolated bubbles then columns (5–30°C, peak flux at C = CHF) → transition (30–120°C, flux falls) → film boiling beyond the Leidenfrost point, with radiation dominating at very high ΔT.` },
        { id: "2021-22-Q4b", label: "(b)", marks: "5",
          topic: "condensation", sub: "Film Reynolds number for condensation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`How is the Reynolds number defined for film condensation?`,
          solution: String.raw`The film Reynolds number is based on the hydraulic diameter of the condensate film, $D_h = 4A_c/p = 4\delta$:
$$Re_f = \frac{\rho_l V_l D_h}{\mu_l} = \frac{4\rho_l V_l\delta}{\mu_l} = \frac{4\dot m}{p\,\mu_l}$$
- $\dot m$: condensate mass flow rate at the bottom of the surface (kg/s), $= \dfrac{q}{h_{fg}^*} = \dfrac{hA(T_{sat}-T_s)}{h^*_{fg}}$
- $p$: **wetted perimeter**: plate width $b$ for a vertical plate, $\pi D$ for a vertical tube, $2L$ for a horizontal tube
- $\delta$: film thickness, $\mu_l$: liquid viscosity

**Regimes (vertical surface):** $Re < 30$ laminar (wave-free), $30 < Re < 1800$ wavy laminar, $Re > 1800$ turbulent. Re increases down the surface as more vapour condenses, so it is evaluated at the bottom (maximum value).`,
          answer: String.raw`$Re_f = 4\dot m/(p\mu_l) = 4\rho_lV\delta/\mu_l$ (p = wetted perimeter). Regimes: < 30 laminar, 30–1800 wavy, > 1800 turbulent.` },
        { id: "2021-22-Q4c", label: "(c)", marks: "15",
          topic: "condensation", sub: "Vertical plate in atmospheric steam (wavy-laminar check)",
          type: "numerical", syllabus: "in", repeats: ["2014-15-Q6b"],
          text: String.raw`A vertical plate (30 cm by 30 cm) is exposed to steam at atmospheric pressure. The plate temperature is 98°C. Calculate the heat transfer and the mass of steam condensed per hour.`,
          solution: String.raw`**Given:** $L = 0.3$ m (height), width $b = 0.3$ m, $T_{sat} = 100$°C, $T_s = 98$°C, $\Delta T = 2$°C.

**Find:** $q$ and $\dot m$ (kg/h).

**Assumptions:** film condensation on one face, pure stagnant vapour.

**Properties.** Steam at 1 atm: $h_{fg} = 2257$ kJ/kg, $\rho_v = 0.598$ kg/m³. Liquid at $T_f = 99$°C (Çengel A-9, interpolated): $\rho_l = 958.6$ kg/m³, $\mu_l = 0.285\times10^{-3}$ kg/m·s, $k_l = 0.679$ W/m·K, $c_{pl} = 4216$ J/kg·K.

1. Modified latent heat:
$$h^*_{fg} = h_{fg} + 0.68c_{pl}\Delta T = 2257\times10^3 + 0.68(4216)(2) = 2.263\times10^6\ \mathrm{J/kg}$$

2. Assume laminar; Nusselt vertical plate:
$$h = 0.943\left[\frac{\rho_l(\rho_l-\rho_v)gh^*_{fg}k_l^3}{\mu_l\Delta T L}\right]^{1/4} = 0.943\left[\frac{958.6(958.0)(9.81)(2.263\times10^6)(0.679)^3}{0.285\times10^{-3}(2)(0.3)}\right]^{1/4} = 1.31\times10^4\ \mathrm{W/m^2K}$$
$q = hA\Delta T = 13{,}100(0.09)(2) = 2358$ W, $\dot m = q/h^*_{fg} = 1.04\times10^{-3}$ kg/s.

3. Check the regime:
$$Re = \frac{4\dot m}{b\mu_l} = \frac{4(1.04\times10^{-3})}{0.3(0.285\times10^{-3})} = 48.8 > 30\ \Rightarrow\ \text{wavy laminar}$$

4. Wavy-laminar relation (Çengel, slides), with $\nu_l = \mu_l/\rho_l = 2.97\times10^{-7}$ m²/s and $(g/\nu_l^2)^{1/3} = 4.72\times10^4$ m⁻¹:
$$Re = \left[4.81 + \frac{3.70Lk_l\Delta T}{\mu_lh^*_{fg}}\left(\frac{g}{\nu_l^2}\right)^{1/3}\right]^{0.820} = 49.7$$
$$h = \frac{Re\,k_l}{1.08Re^{1.22} - 5.2}\left(\frac{g}{\nu_l^2}\right)^{1/3} = 1.33\times10^4\ \mathrm{W/m^2K}$$

5. Heat transfer and condensate:
$$q = hA\Delta T = 13{,}340(0.3\times0.3)(2) = 2.40\times10^3\ \mathrm{W}$$
$$\dot m = \frac{q}{h^*_{fg}} = \frac{2400}{2.263\times10^6} = 1.06\times10^{-3}\ \mathrm{kg/s} = 3.82\ \mathrm{kg/h}$$

**Exam tip:** always check Re after the laminar estimate. Here it is just in the wavy range, and the wave enhancement is small (~2%) because Re is close to 30.`,
          answer: String.raw`$h \approx 1.33\times10^4$ W/m²K (Re ≈ 50, wavy laminar), $q \approx 2.4$ kW, condensate ≈ **3.8 kg/h** (laminar Nusselt alone: 2.36 kW, 3.75 kg/h).` },
      ] },
    { id: "2021-22-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q5a", label: "(a)", marks: "12",
          topic: "conduction", sub: "Thermal resistance of a hollow cylinder",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive an equation for the thermal resistance offered by a hollow long cylinder of constant thermal conductivity.`,
          solution: String.raw`**Assumptions:** long cylinder (length $L \gg$ radius, so no end effects), steady state, 1-D radial conduction, constant $k$, no heat generation, inner surface at $T_1$ ($r = r_1$), outer surface at $T_2$ ($r = r_2$).

![Hollow cylinder: radial heat flow from r₁ to r₂ and its resistance ln(r₂/r₁)/(2πkL)](fig/2021-22-Q5a-sol.svg)

1. Fourier's law across a cylindrical surface of radius $r$ (area $A_r = 2\pi rL$):
$$q_r = -kA_r\frac{dT}{dr} = -2\pi krL\frac{dT}{dr}$$
2. At steady state with no generation, $q_r$ is the same at every $r$ (energy balance on the shell between $r$ and $r + dr$: $q_r = q_{r+dr}$). Equivalently, the heat equation $\frac{1}{r}\frac{d}{dr}\left(r\frac{dT}{dr}\right) = 0$.
3. Separate and integrate:
$$\frac{q_r}{2\pi kL}\int_{r_1}^{r_2}\frac{dr}{r} = -\int_{T_1}^{T_2}dT\ \Rightarrow\ \frac{q_r}{2\pi kL}\ln\frac{r_2}{r_1} = T_1 - T_2$$
$$q_r = \frac{2\pi kL(T_1 - T_2)}{\ln(r_2/r_1)}$$
4. Comparing with $q = \Delta T/R$ (electrical analogy):
$$\boxed{R_{cyl} = \frac{\ln(r_2/r_1)}{2\pi kL}}\quad(\mathrm{K/W})$$
5. Temperature profile (logarithmic): $\dfrac{T - T_1}{T_2 - T_1} = \dfrac{\ln(r/r_1)}{\ln(r_2/r_1)}$.

Notes: per unit length, $R' = \ln(r_2/r_1)/(2\pi k)$ (m·K/W). Composite cylinders add in series, $R = \sum\ln(r_{i+1}/r_i)/(2\pi k_iL)$, plus convection terms $1/(h\,2\pi rL)$. The equivalent form $R = (r_2 - r_1)/(kA_{lm})$ uses the log-mean area $A_{lm} = (A_2 - A_1)/\ln(A_2/A_1)$.`,
          answer: String.raw`$q = 2\pi kL(T_1 - T_2)/\ln(r_2/r_1)$ → $R_{cyl} = \ln(r_2/r_1)/(2\pi kL)$, with a logarithmic temperature profile.` },
        { id: "2021-22-Q5b", label: "(b)", marks: "8",
          topic: "boundary-layer", sub: "Reynolds–Colburn analogy and its use",
          type: "theory", syllabus: "in", repeats: ["practice-boundary-layer-P6"],
          text: String.raw`Explain the Reynolds Colburn analogy for laminar flow over a plate. How can it be used to calculate heat transfer coefficient?`,
          solution: String.raw`![Velocity and thermal boundary layers on a flat plate](fig/common-bl-flat-plate.svg)

**Analogy.** For laminar flow over a flat plate, the momentum and energy boundary-layer equations have the same form ($u\,\partial u/\partial x + v\,\partial u/\partial y = \nu\,\partial^2u/\partial y^2$ and $u\,\partial T/\partial x + v\,\partial T/\partial y = \alpha\,\partial^2T/\partial y^2$). The solutions are therefore similar, and they differ only through $Pr = \nu/\alpha$:
$$C_{fx} = \frac{\tau_w}{\frac12\rho u_\infty^2} = 0.664Re_x^{-1/2}\ (\text{Blasius}),\qquad St_x = \frac{h_x}{\rho c_pu_\infty} = \frac{Nu_x}{Re_xPr} = 0.332Re_x^{-1/2}Pr^{-2/3}$$
$$\Rightarrow\quad St_x\,Pr^{2/3} = \frac{C_{fx}}{2}\qquad(\text{also for averages: }\overline{St}\,Pr^{2/3} = \overline{C_f}/2)$$
This is the **Reynolds–Colburn analogy**. For $Pr = 1$ it reduces to the Reynolds analogy $St = C_f/2$. It is valid with no pressure gradient (no form drag), for about $0.6 < Pr < 60$.

**Using it to get $h$:**
1. Measure the drag force $F_D$ on the plate in an isothermal experiment (no heat transfer needed), or compute $C_f$ from a known friction relation.
2. $\overline{C_f} = \dfrac{F_D}{\frac12\rho u_\infty^2A}$
3. $\overline{St} = \dfrac{\overline{C_f}}{2}Pr^{-2/3}$
4. $\bar h = \overline{St}\,\rho c_pu_\infty$

The reverse is also used: from a known $h$, estimate the drag (slide example: air at 27°C, 2 m/s, drag on the first 40 cm of a heated plate).`,
          answer: String.raw`$St\,Pr^{2/3} = C_f/2$. Measure the drag to get $C_f$, then $h = (C_f/2)Pr^{-2/3}\rho c_pu_\infty$.` },
        { id: "2021-22-Q5c", label: "(c)", marks: "15",
          topic: "forced-convection", sub: "Annulus: ethylene glycol heated by the inner tube",
          type: "numerical", syllabus: "in", repeats: ["2023-24-Q8a"],
          text: String.raw`An annulus consists of the region between two concentric tubes having diameters of 4 cm and 5 cm. Ethylene glycol flows in this space at a velocity of 6.9 m/s. The entrance temperature is 20°C, and the exit temperature is 40°C. Only the inner tube is a heating surface, and it is maintained constant at 80°C. Calculate the length of annulus necessary to achieve the heat transfer. Properties of ethylene glycol at average temperature are listed below:

| Property | Value |
|---|---|
| $\mu$ | $15.46\times10^{-3}$ kg/m·s |
| $k$ | 0.252 W/m·K |
| $Pr$ | 148 |
| $c_p$ | 2.428 kJ/kg·K |
| $\rho$ | 1109 kg/m³ |
| $\mu_w$ | $3.30\times10^{-3}$ kg/m·s |`,
          solution: String.raw`**Given:** $D_1 = 0.04$ m (heated inner tube), $D_2 = 0.05$ m; $u = 6.9$ m/s; $T_{b1} = 20$°C, $T_{b2} = 40$°C; $T_w = 80$°C; properties as tabulated (at 30°C).

**Find:** length $L$.

![Annulus D₁ = 4 cm, D₂ = 5 cm: only the inner tube (80°C) heats the glycol](fig/2021-22-Q5c.svg)

**Assumptions:** steady, fully developed; correlations based on the hydraulic diameter (slides); $\mu_w$ given, so Sieder–Tate.

1. Hydraulic diameter and flow:
$$D_h = \frac{4A_c}{P_{wetted}} = D_2 - D_1 = 0.01\ \mathrm{m},\qquad A_c = \frac{\pi}{4}(0.05^2 - 0.04^2) = 7.069\times10^{-4}\ \mathrm{m^2}$$
$$\dot m = \rho uA_c = 1109(6.9)(7.069\times10^{-4}) = 5.41\ \mathrm{kg/s}$$
2. Heat duty:
$$q = \dot mc_p(T_{b2}-T_{b1}) = 5.41(2428)(20) = 2.627\times10^5\ \mathrm{W}$$
3. Reynolds number:
$$Re = \frac{\rho uD_h}{\mu} = \frac{1109(6.9)(0.01)}{15.46\times10^{-3}} = 4950$$
(transitional: below the $10^4$ limit of the turbulent correlations, so the result is an estimate).
4. Sieder–Tate:
$$Nu = 0.027Re^{0.8}Pr^{1/3}\left(\frac{\mu}{\mu_w}\right)^{0.14} = 0.027(4950)^{0.8}(148)^{1/3}\left(\frac{15.46}{3.30}\right)^{0.14} = 160$$
$$h = \frac{Nu\,k}{D_h} = \frac{160(0.252)}{0.01} = 4034\ \mathrm{W/m^2K}$$
5. Mean temperature difference (constant wall temperature):
$$\Delta T_{lm} = \frac{(80-20) - (80-40)}{\ln(60/40)} = 49.3\ \mathrm{°C}$$
6. Length (heat transfer area is the inner tube only, $\pi D_1L$):
$$L = \frac{q}{h\pi D_1\Delta T_{lm}} = \frac{2.627\times10^5}{4034\,\pi(0.04)(49.3)} = 10.5\ \mathrm{m}$$

**Checks:** Dittus–Boelter ($n = 0.4$) gives $h = 3863$ W/m²K and $L = 11.0$ m. Using Kern's heat-transfer equivalent diameter $D_e = (D_2^2 - D_1^2)/D_1 = 0.0225$ m (only the inner wall heated) for Re and Nu gives $Re = 1.11\times10^4$, $h = 3430$ W/m²K and $L = 12.4$ m.

**Exam tip:** state which equivalent diameter you use. $D_2 - D_1$ is the hydraulic diameter of Holman and the slides; $(D_2^2 - D_1^2)/D_1$ is Kern's heat-transfer diameter.`,
          answer: String.raw`$Re = 4950$, $Nu = 160$, $h \approx 4.0$ kW/m²K, $q = 263$ kW, LMTD = 49.3°C → $L \approx 10.5$ m (11.0 m with Dittus–Boelter).` },
      ] },
    { id: "2021-22-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q6a", label: "(a)", marks: "15",
          topic: "forced-convection", sub: "Turbulent gas heating in a pipe (Sieder–Tate)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Carbon dioxide at 300 K and 1 atm is to be pumped through a 5 cm ID pipe at a rate of 50 kg/h. The pipe wall will be maintained at a temperature of 450 K in order to raise the carbon dioxide temperature to 400 K. What length of pipe will be required? Viscosities of carbon dioxide at average and wall temperature are $17.21\times10^{-6}$ N·s/m² and $21.34\times10^{-6}$ N·s/m², respectively. At average temperature, heat capacity $c_p = 900$ J/kg·K, and conductivity $k = 0.02047$ W/m·K.`,
          solution: String.raw`**Given:** $\dot m = 50$ kg/h = 0.01389 kg/s, $d = 0.05$ m, $T_{b1} = 300$ K → $T_{b2} = 400$ K, $T_w = 450$ K; $\mu = 17.21\times10^{-6}$, $\mu_w = 21.34\times10^{-6}$ N·s/m², $c_p = 900$ J/kg·K, $k = 0.02047$ W/m·K (at 350 K).

**Find:** $L$.

**Assumptions:** steady, smooth pipe, fully developed (check $L/d$), constant wall temperature.

1. Reynolds and Prandtl numbers:
$$Re = \frac{4\dot m}{\pi d\mu} = \frac{4(0.01389)}{\pi(0.05)(17.21\times10^{-6})} = 2.06\times10^4\ \ (\text{turbulent})$$
$$Pr = \frac{c_p\mu}{k} = \frac{900(17.21\times10^{-6})}{0.02047} = 0.757$$
2. Wide wall-to-fluid ΔT and $\mu_w$ given → Sieder–Tate:
$$Nu = 0.027Re^{0.8}Pr^{1/3}\left(\frac{\mu}{\mu_w}\right)^{0.14} = 0.027(2.06\times10^4)^{0.8}(0.757)^{1/3}\left(\frac{17.21}{21.34}\right)^{0.14} = 67.3$$
$$h = \frac{Nu\,k}{d} = \frac{67.3(0.02047)}{0.05} = 27.6\ \mathrm{W/m^2K}$$
3. Heat duty:
$$q = \dot mc_p(T_{b2}-T_{b1}) = 0.01389(900)(100) = 1250\ \mathrm{W}$$
4. LMTD (constant wall temperature):
$$\Delta T_{lm} = \frac{(450-300) - (450-400)}{\ln(150/50)} = \frac{100}{\ln 3} = 91.0\ \mathrm{K}$$
5. Length:
$$L = \frac{q}{h\pi d\Delta T_{lm}} = \frac{1250}{27.6\,\pi(0.05)(91.0)} = 3.17\ \mathrm{m}$$
$L/d = 63 > 60$, so fully developed flow is a fair assumption.

(Dittus–Boelter, $n = 0.4$: $Nu = 58.0$, $h = 23.8$ W/m²K, $L = 3.68$ m. For gases the $(\mu/\mu_w)^{0.14}$ correction is less reliable, so the answer lies between about 3.2 and 3.7 m.)`,
          answer: String.raw`$Re = 2.06\times10^4$, $Pr = 0.757$, $h \approx 27.6$ W/m²K, $q = 1250$ W, LMTD = 91 K → $L \approx 3.2$ m (3.7 m with Dittus–Boelter).` },
        { id: "2021-22-Q6b", label: "(b)", marks: "20",
          topic: "conduction", sub: "Insulated LOX tank: cylinder plus two hemispheres",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A cylindrical tank of 1.0 m diameter and 5 m total length has hemispherical ends. It contains liquid oxygen which has boiling point and heat of vaporization −180°C and 210 kJ/kg, respectively. It is required to insulate the tank so as to reduce the boil-off rate of oxygen in steady state to 14 kg/h. Determine the thermal conductivity of the insulating material if its maximum thickness is limited to 70 mm. Assume room temperature outside the insulation as 25°C.

![Liquid-oxygen tank: 4 m cylinder with hemispherical ends (r₁ = 0.5 m), 70 mm of insulation](fig/2021-22-Q6b.svg)`,
          solution: String.raw`**Given:** $r_1 = 0.5$ m, $r_2 = 0.5 + 0.07 = 0.57$ m; cylindrical length $L = 5 - 2(0.5) = 4$ m; two hemispheres = one sphere; $t_i = -180$°C, $t_o = 25$°C; $\dot m = 14$ kg/h; $h_{fg} = 210$ kJ/kg.

**Find:** $k$ of insulation.

**Assumptions:** steady state; 1-D radial conduction in the cylinder and in the hemispheres (no interaction at the joints); tank wall and outside film resistances neglected (the given temperatures are the insulation surface temperatures); constant $k$.

1. Heat leak = heat to boil off the oxygen:
$$q = \dot mh_{fg} = \frac{14}{3600}(210\times10^3) = 816.7\ \mathrm{W}$$
2. Cylindrical part:
$$q_{cyl} = \frac{2\pi kL(t_o - t_i)}{\ln(r_2/r_1)} = k(205)\frac{2\pi(4)}{\ln(0.57/0.5)} = k(205)(191.8)$$
3. Two hemispherical ends (one complete sphere):
$$q_{sph} = \frac{4\pi kr_1r_2(t_o - t_i)}{r_2 - r_1} = k(205)\frac{4\pi(0.5)(0.57)}{0.07} = k(205)(51.2)$$
4. Total:
$$816.7 = k(205)(191.8 + 51.2) = k(205)(243.0)$$
$$k = \frac{816.7}{205(243.0)} = 0.0164\ \mathrm{W/m\cdot K}$$

Split: cylinder 645 W (79%), ends 172 W (21%).

**Why it matters:** $k \approx 0.016$ W/m·K is below still air (0.024), so it calls for a high-performance insulation (e.g. evacuated perlite, polyurethane foam or multilayer insulation), or a thicker layer than 70 mm.`,
          answer: String.raw`$q = 816.7$ W; $k(205)[2\pi L/\ln(r_2/r_1) + 4\pi r_1r_2/(r_2-r_1)] = q$ → $k \approx 0.0164$ W/m·K.` },
      ] },
    { id: "2021-22-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q7a", label: "(a)", marks: "20",
          topic: "forced-convection", sub: "Laminar tube flow, constant heat flux: Nu = 4.364",
          type: "derivation", syllabus: "in", repeats: ["practice-forced-convection-P5"],
          text: String.raw`Consider a tube-flow system under developed flow conditions where the flow remains laminar. The wall temperature is $T_w$, the radius of the tube is $r_0$, and the velocity at the center of the tube is $u_0$. If the temperature along the center of the tube is $T_c$, starting from the following temperature profile show that the Nusselt number is constant. State the necessary assumptions you made to derive the equation.
$$T - T_c = \frac{1}{\alpha}\frac{\partial T}{\partial x}\frac{u_0r_0^2}{4}\left[\left(\frac{r}{r_0}\right)^2 - \frac{1}{4}\left(\frac{r}{r_0}\right)^4\right]$$`,
          solution: String.raw`**Assumptions**
1. Steady, incompressible, laminar flow; constant properties ($\rho$, $c_p$, $k$, $\mu$).
2. Hydrodynamically and thermally **fully developed**: parabolic velocity $u = u_0\left[1 - (r/r_0)^2\right]$, and $\partial T/\partial x$ = constant, the same at all $r$.
3. **Constant wall heat flux** $q_w$ (this is what makes $\partial T/\partial x$ constant), so $dT_w/dx = dT_b/dx = \partial T/\partial x$.
4. Axial conduction and viscous dissipation negligible.

![Fully developed laminar flow: parabolic velocity, quartic temperature profile, constant wall flux](fig/2021-22-Q7a-sol.svg)

Let $C = \dfrac{1}{\alpha}\dfrac{\partial T}{\partial x}\dfrac{u_0r_0^2}{4}$ and $\eta = r/r_0$, so $T - T_c = C\left(\eta^2 - \tfrac14\eta^4\right)$.

### 1. Wall temperature ($\eta = 1$)
$$T_w - T_c = C\left(1 - \tfrac14\right) = \tfrac34C = \frac{3}{16}\frac{u_0r_0^2}{\alpha}\frac{\partial T}{\partial x}$$

### 2. Bulk (mixing-cup) temperature
$$T_b - T_c = \frac{\int_0^{r_0}\rho c_pu(T - T_c)2\pi r\,dr}{\int_0^{r_0}\rho c_pu\,2\pi r\,dr} = \frac{\int_0^1(1-\eta^2)C(\eta^2 - \tfrac14\eta^4)\eta\,d\eta}{\int_0^1(1-\eta^2)\eta\,d\eta}$$
Denominator: $\int_0^1(\eta - \eta^3)d\eta = \tfrac12 - \tfrac14 = \tfrac14$.

Numerator: $\int_0^1\left(\eta^3 - \tfrac54\eta^5 + \tfrac14\eta^7\right)d\eta = \tfrac14 - \tfrac{5}{24} + \tfrac{1}{32} = \tfrac{7}{96}$, times $C$.
$$T_b - T_c = C\frac{7/96}{1/4} = \frac{7}{24}C$$

### 3. Wall-to-bulk difference
$$T_w - T_b = \left(\frac34 - \frac{7}{24}\right)C = \frac{11}{24}C = \frac{11}{96}\frac{u_0r_0^2}{\alpha}\frac{\partial T}{\partial x}$$

### 4. Wall heat flux
By Fourier's law at the wall: $q_w = k\left.\dfrac{\partial T}{\partial r}\right|_{r_0} = \dfrac{kC}{r_0}\left(2\eta - \eta^3\right)_{\eta=1} = \dfrac{kC}{r_0}$, i.e.
$$q_w = \frac{k}{r_0}\cdot\frac{u_0r_0^2}{4\alpha}\frac{\partial T}{\partial x} = \frac{\rho c_pu_0r_0}{4}\frac{\partial T}{\partial x}$$
(Check by energy balance: $q_w2\pi r_0\,dx = \rho c_pu_m\pi r_0^2\,dT_b$ with $u_m = u_0/2$ gives the same result.)

### 5. Heat transfer coefficient and Nusselt number
$$h = \frac{q_w}{T_w - T_b} = \frac{\frac{k}{r_0}C}{\frac{11}{24}C} = \frac{24}{11}\frac{k}{r_0}$$
$$\boxed{Nu_d = \frac{h(2r_0)}{k} = \frac{48}{11} = 4.364}$$

Every flow and fluid quantity ($u_0$, $\partial T/\partial x$, $\alpha$) cancels, so $Nu_d$ is a **constant**, independent of $Re$ and $Pr$, for fully developed laminar flow with constant wall heat flux. (For a constant wall temperature the corresponding value is 3.66.)`,
          answer: String.raw`$T_w - T_c = \tfrac34C$, $T_b - T_c = \tfrac{7}{24}C$, $q_w = kC/r_0$ → $h = 24k/(11r_0)$ → $Nu_d = 48/11 = 4.364$, a constant independent of $Re$ and $Pr$.` },
        { id: "2021-22-Q7b", label: "(b)", marks: "15",
          topic: "conduction", sub: "Plastered brick wall with a glass window (parallel paths)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A wall 30 cm thick has size 5 m × 3 m made of red bricks ($k = 0.35$ W/m·K). It is covered on both sides by layers of plaster 2 cm thick ($k = 0.6$ W/m·K). The wall has a window of size 1 m × 2 m. The window door is made of glass, 12 mm thick, having thermal conductivity 1.2 W/m·K. Estimate the rate of heat flow through the wall. Inner and outer surface temperatures are 10°C and 40°C, respectively.`,
          solution: String.raw`**Given:** wall 5 m × 3 m = 15 m², window 1 m × 2 m = 2 m² → wall (net) area 13 m²; brick 0.30 m ($k = 0.35$), plaster 2 × 0.02 m ($k = 0.6$), glass 0.012 m ($k = 1.2$); $\Delta T = 40 - 10 = 30$°C on both paths.

![Wall and window as parallel heat-flow paths between 10°C and 40°C](fig/2021-22-Q7b.svg)

**Assumptions:** steady 1-D conduction; the wall and window are parallel paths between the same surface temperatures; no edge effects; surface temperatures given, so no convection resistances.

1. Wall path (three layers in series), per unit area:
$$R''_{wall} = \frac{0.02}{0.6} + \frac{0.30}{0.35} + \frac{0.02}{0.6} = 0.0333 + 0.8571 + 0.0333 = 0.9238\ \mathrm{m^2K/W}$$
$$q_{wall} = \frac{A\Delta T}{R''} = \frac{13(30)}{0.9238} = 422\ \mathrm{W}$$
2. Window path:
$$R''_{glass} = \frac{0.012}{1.2} = 0.010\ \mathrm{m^2K/W},\qquad q_{glass} = \frac{2(30)}{0.010} = 6000\ \mathrm{W}$$
3. Total (parallel paths add):
$$q = 422 + 6000 = 6422\ \mathrm{W} \approx 6.4\ \mathrm{kW}$$

**Why it matters:** the window is only 13% of the area but carries 93% of the heat, because its resistance is about 90 times lower. In reality the air films on the glass would dominate and the actual loss would be far smaller; with fixed surface temperatures they are excluded.`,
          answer: String.raw`Wall: $R'' = 0.924$ m²K/W, 422 W; glass: $R'' = 0.01$ m²K/W, 6000 W → total ≈ **6.42 kW**.` },
      ] },
    { id: "2021-22-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2021-22-Q8a", label: "(a)", marks: "14+6",
          topic: "generation", sub: "Tube with generation, insulated outside, cooled inside",
          type: "derivation", syllabus: "in", repeats: ["practice-generation-P8a"],
          text: String.raw`Consider a long solid tube, insulated at the outer radius $r_2$ and cooled at the inner radius $r_1$, with uniform heat generation $\dot q$ (W/m³) within the solid.
(i) Starting from the general energy equation (below), obtain the general solution for the temperature distribution in the tube.
$$\frac{1}{r}\frac{d}{dr}\left(r\frac{dT}{dr}\right) + \frac{\dot q}{k} = 0$$
(ii) Determine the heat removal rate per unit length of tube.

![Tube with uniform generation: cooled at r₁ by the coolant, insulated at r₂](fig/2021-22-Q8a.svg)`,
          solution: String.raw`**Assumptions:** steady, 1-D radial conduction, constant $k$, uniform $\dot q$, long tube (no axial or end effects).

### (i) Temperature distribution
Multiply by $r$ and integrate once:
$$\frac{d}{dr}\left(r\frac{dT}{dr}\right) = -\frac{\dot q}{k}r\ \Rightarrow\ r\frac{dT}{dr} = -\frac{\dot q}{2k}r^2 + C_1\ \Rightarrow\ \frac{dT}{dr} = -\frac{\dot q}{2k}r + \frac{C_1}{r}$$
Integrate again. The **general solution** is
$$T(r) = -\frac{\dot q}{4k}r^2 + C_1\ln r + C_2$$

**Boundary conditions**
1. Insulated outer surface: $\left.\dfrac{dT}{dr}\right|_{r_2} = 0\ \Rightarrow\ -\dfrac{\dot q}{2k}r_2 + \dfrac{C_1}{r_2} = 0\ \Rightarrow\ C_1 = \dfrac{\dot q r_2^2}{2k}$
2. Inner surface temperature $T(r_1) = T_{s,1}$: $C_2 = T_{s,1} + \dfrac{\dot q}{4k}r_1^2 - \dfrac{\dot q r_2^2}{2k}\ln r_1$

**Particular solution:**
$$\boxed{T(r) = T_{s,1} + \frac{\dot q}{4k}\left(r_1^2 - r^2\right) + \frac{\dot q r_2^2}{2k}\ln\frac{r}{r_1}}$$
The maximum temperature is at the insulated surface:
$$T_{s,2} = T_{s,1} + \frac{\dot q}{4k}(r_1^2 - r_2^2) + \frac{\dot qr_2^2}{2k}\ln\frac{r_2}{r_1}$$

### (ii) Heat removal rate per unit length
Energy balance: all heat generated in the solid leaves through the inner surface (the outer surface is adiabatic):
$$q' = \dot q\,\pi(r_2^2 - r_1^2)\quad(\mathrm{W/m})$$
Check with Fourier's law at $r_1$ (heat flows inward, toward $-r$):
$$q' = +k(2\pi r_1)\left.\frac{dT}{dr}\right|_{r_1} = 2\pi r_1k\left(-\frac{\dot q r_1}{2k} + \frac{\dot qr_2^2}{2kr_1}\right) = \pi\dot q(r_2^2 - r_1^2)\ \checkmark$$
The same heat is convected to the coolant, $q' = h(2\pi r_1)(T_{s,1} - T_\infty)$, which fixes the surface temperature:
$$T_{s,1} = T_\infty + \frac{\dot q(r_2^2 - r_1^2)}{2hr_1}$$`,
          answer: String.raw`$T = -\dot qr^2/4k + C_1\ln r + C_2$. With $dT/dr|_{r_2} = 0$: $T = T_{s,1} + \frac{\dot q}{4k}(r_1^2 - r^2) + \frac{\dot qr_2^2}{2k}\ln(r/r_1)$. Heat removal $q' = \pi\dot q(r_2^2 - r_1^2)$, and $T_{s,1} = T_\infty + q'/(2\pi r_1h)$.` },
        { id: "2021-22-Q8b", label: "(b)", marks: "15",
          topic: "forced-convection", sub: "Bus bar in cross flow (Hilpert) and allowable current",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`A metallic bar of 25 mm diameter is cooled by air at 30°C, cross-flowing past the bar with a velocity of 2.5 m/s. If the surface temperature of the bar is not to exceed 85°C and resistivity of the metal is $0.015\times10^{-6}$ Ω·m, calculate (i) the heat transfer coefficient from the surface to air, and (ii) the permissible current intensity for the bus bar.`,
          solution: String.raw`> Cross flow over cylinders is not in the current CHE 301 forced-convection slides; the Hilpert correlation (Holman Table 6-2) is used.

**Given:** $D = 0.025$ m, $T_\infty = 30$°C, $V = 2.5$ m/s, $T_s = 85$°C (max), $\rho_e = 0.015\times10^{-6}$ Ω·m (printed as "Ohm/m").

**Assumptions:** steady; uniform surface temperature; radiation neglected; heat generated $I^2R$ per unit length = convection per unit length.

**Properties** of air at $T_f = (85+30)/2 = 57.5$°C = 330.7 K (Holman Table A-5, interpolated): $\nu = 18.80\times10^{-6}$ m²/s, $k = 0.02856$ W/m·K, $Pr = 0.701$.

### (i) Heat transfer coefficient
1. $Re_D = \dfrac{VD}{\nu} = \dfrac{2.5(0.025)}{18.80\times10^{-6}} = 3325$
2. Hilpert, $40 < Re < 4000$: $C = 0.683$, $n = 0.466$:
$$Nu_D = CRe^nPr^{1/3} = 0.683(3325)^{0.466}(0.701)^{1/3} = 26.6$$
$$h = \frac{Nu\,k}{D} = \frac{26.6(0.02856)}{0.025} = 30.3\ \mathrm{W/m^2K}$$
(Churchill–Bernstein gives $Nu = 29.5$, $h = 33.8$ W/m²K.)

### (ii) Permissible current
3. Heat removed per metre:
$$q' = h\pi D(T_s - T_\infty) = 30.3\,\pi(0.025)(55) = 131\ \mathrm{W/m}$$
4. Electrical resistance per metre: $R' = \dfrac{\rho_e}{\pi D^2/4} = \dfrac{0.015\times10^{-6}}{\pi(0.025)^2/4} = 3.056\times10^{-5}$ Ω/m
5. $I^2R' = q'$:
$$I = \sqrt{\frac{q'}{R'}} = \sqrt{\frac{131.1}{3.056\times10^{-5}}} = 2.07\times10^3\ \mathrm{A}$$
(≈ 2.18 kA with Churchill–Bernstein.)

**Exam tip:** the allowable current scales as $I \propto \sqrt{h\,D^3\Delta T/\rho_e}$, so a modest gain in $h$ allows only a modest gain in current.`,
          answer: String.raw`(i) $Re = 3325$, $Nu = 26.6$, $h \approx 30$ W/m²K. (ii) $q' = 131$ W/m, $R' = 3.06\times10^{-5}$ Ω/m → $I \approx 2.07$ kA.` },
      ] },
  ]
});
