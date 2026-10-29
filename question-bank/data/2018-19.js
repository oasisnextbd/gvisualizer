QB.paper({
  year: "2018-19", date: "24/10/2019", marks: 210,
  rules: String.raw`Section A: Q1 compulsory (45 marks) + any two of Q2–Q4. Section B: any three of Q5–Q8. Heat Transfer data booklet supplied. Separate scripts for each section.`,
  questions: [
    { id: "2018-19-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw`175,000 lb/hr of distilled water enters an exchanger at 93°F and leaves at 85°F. The heat will be transferred to 280,000 lb/hr of raw water coming from the supply at 75°F and leaving the exchanger at 80°F. A 10 psi pressure drop may be expended on both streams while providing a fouling factor of 0.0005 for distilled water and 0.0015 for raw water when the tube velocity exceeds 6 fps.

Available for this service is a $15\tfrac14$ in ID exchanger having 160 tubes, $\tfrac34$ in OD, 18 BWG, 16 ft 0 in long and laid out on $\tfrac{15}{16}$ in triangular pitch. The bundle is arranged for two passes, and baffles are spaced 12 in apart. Will the exchanger be suitable?

Viscosities at the caloric temperature for distilled water and raw water are 1.96 and 2.23 lb/ft·hr, respectively. All other fluid parameters can be considered the same for both streams. Thermal conductivity of water at the operating condition is 0.36 Btu/hr·ft·°F.

**Common data used in all parts:** $c_p=1$ Btu/lb·°F and $s=1$ ($\rho=62.5\ \mathrm{lb/ft^3}$) for both streams. Tube data (Kern Table 10, $\tfrac34$ in 18 BWG): ID = 0.652 in, flow area per tube $a'_t=0.334\ \mathrm{in^2}$, outside surface $a''=0.1963\ \mathrm{ft^2/ft}$. Kern method, $\phi=(\mu/\mu_w)^{0.14}=1$ ($\mu_w$ not given), 25 % cut segmental baffles assumed.`,
      parts: [
        { id: "2018-19-Q1a", label: "(a)", marks: "5",
          topic: "shell-tube", sub: "Which fluid in the tubes?",
          type: "theory", syllabus: "in", repeats: ["2014-15-Q8"],
          text: String.raw`Which fluid would you place in the tube side? Explain your reason.`,
          solution: String.raw`**Raw water goes in the tubes; distilled water in the shell.**

Reasons:
1. **Fouling and cleaning.** Raw (supply) water carries silt, dissolved salts and organisms, so it scales and fouls (its fouling factor, 0.0015, is three times that of distilled water). The inside of straight tubes can be cleaned mechanically (brushing, rodding); the shell side cannot be cleaned easily.
2. **Velocity and fouling factor.** The fouling factor 0.0015 is quoted for a tube velocity above 6 fps. With the larger stream (280,000 lb/h) in the tubes: $a_t=160(0.334)/(144\times2)=0.1856\ \mathrm{ft^2}$, $V=280\,000/(0.1856\times3600\times62.5)=6.7$ fps > 6 fps ✓. Distilled water (175,000 lb/h) in the same tubes would flow at only 4.2 fps, which encourages fouling and would invalidate the 0.0015 value.
3. **Corrosion.** Raw water is the more corrosive stream; in the tubes only the tubes, tube sheets and channels need corrosion-resistant material, not the shell.
4. **Larger flow in the tubes** gives a high, well-defined tube-side coefficient, and the supply pressure is easily handled by the tubes.
5. Distilled water is clean, so it can go in the shell, where cleaning is difficult.`,
          answer: String.raw`Raw water in the tubes (dirty and scale-forming, cleanable tubes, larger flow gives $V\approx6.7$ fps > 6 fps as the fouling factor requires); clean distilled water in the shell.` },
        { id: "2018-19-Q1b", label: "(b)", marks: "6",
          topic: "shell-tube", sub: "1-2 temperature profile, LMTD and F_T",
          type: "sketch", syllabus: "in", repeats: ["2014-15-Q8"],
          text: String.raw`Draw a temperature profile along the heat exchanger length, and find the log mean temperature difference.`,
          solution: String.raw`### Heat balance (check of the given data)
$$Q=Wc(T_1-T_2)=175\,000(1)(93-85)=1.40\times10^6\ \mathrm{Btu/h}$$
$$Q=wc(t_2-t_1)=280\,000(1)(80-75)=1.40\times10^6\ \mathrm{Btu/h}\;✓$$

### Temperature profile (sketch described)
Axes: temperature (°F) vertical, length along the exchanger horizontal (0 to $L$).
- **Shell side (distilled water):** a single, nearly straight line falling from 93°F at the shell inlet to 85°F at the shell outlet.
- **Tube side (raw water), 2 passes:** pass 1 enters at 75°F at the end where the shell fluid leaves (85°F), so it runs counter to the shell fluid, and rises to an intermediate temperature (about 77–78°F) at the floating/return head. Pass 2 comes back in parallel with the shell fluid and rises to 80°F at the outlet (same end as the 93°F inlet). The two tube lines form a "hairpin", one counterflow and one parallel-flow branch.
- Terminal differences: hot end $93-80=13$°F, cold end $85-75=10$°F.

### LMTD (counterflow basis)
$$\mathrm{LMTD}=\frac{\Delta t_h-\Delta t_c}{\ln(\Delta t_h/\Delta t_c)}=\frac{13-10}{\ln(13/10)}=11.43\ ^\circ\mathrm F$$

### Correction for the 1-2 arrangement
$$R=\frac{T_1-T_2}{t_2-t_1}=\frac{93-85}{80-75}=1.6,\qquad S=\frac{t_2-t_1}{T_1-t_1}=\frac{80-75}{93-75}=0.278$$

Holman Fig. 10-8 (one shell pass, even number of tube passes), confirmed with the analytic 1-2 formula:

$$F_T=\frac{\sqrt{R^2+1}}{R-1}\,\frac{\ln\left[(1-S)/(1-RS)\right]}{\ln\dfrac{2-S(R+1-\sqrt{R^2+1})}{2-S(R+1+\sqrt{R^2+1})}}=0.947$$

$$\Delta t=F_T\,\mathrm{LMTD}=0.947(11.43)=10.82\ ^\circ\mathrm F$$

$F_T>0.75$, so a single 1-2 shell is acceptable. Caloric temperatures: arithmetic means, $T_c=89$°F and $t_c=77.5$°F (water, small ranges; the Kc–Fc chart is for petroleum fractions).`,
          answer: String.raw`$Q=1.40\times10^6$ Btu/h; LMTD = 11.43°F; $R=1.6$, $S=0.278$, $F_T\approx0.947$, $\Delta t\approx10.8$°F.` },
        { id: "2018-19-Q1c", label: "(c)", marks: "11",
          topic: "shell-tube", sub: "Tube-side h_i and shell-side h_o (Kern)",
          type: "numerical", syllabus: "in", repeats: ["2014-15-Q8"],
          text: String.raw`Determine the tube-side and shell-side heat transfer coefficients, $h_i$ and $h_o$, respectively.`,
          solution: String.raw`**Arrangement:** raw water (280,000 lb/h) in the tubes, distilled water (175,000 lb/h) in the shell (see part a).

### Tube side: raw water, $\mu=2.23$ lb/ft·h
$$a_t=\frac{N_ta'_t}{144n}=\frac{160(0.334)}{144(2)}=0.1856\ \mathrm{ft^2}$$

$$G_t=\frac{w}{a_t}=\frac{280\,000}{0.1856}=1.509\times10^6\ \mathrm{lb/h\,ft^2}$$

$$V=\frac{G_t}{3600\rho}=\frac{1.509\times10^6}{3600(62.5)}=6.71\ \mathrm{fps}\;(>6\ \mathrm{fps},\ \text{so}\ R_d=0.0015\ \text{applies})$$

$$D=\frac{0.652}{12}=0.0543\ \mathrm{ft},\qquad Re_t=\frac{DG_t}{\mu}=\frac{0.0543(1.509\times10^6)}{2.23}=3.68\times10^4$$

$L/D=16/0.0543=295$. Kern Fig. 24 (turbulent; curve fit $j_H=0.027Re^{0.8}$): $j_H\approx121$.

$$Pr=\frac{c\mu}{k}=\frac{2.23}{0.36}=6.19$$

$$h_i=j_H\frac{k}{D}Pr^{1/3}\phi_t=121\left(\frac{0.36}{0.0543}\right)(6.19)^{1/3}(1)=1476\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

Referred to the outside surface:

$$h_{io}=h_i\frac{ID}{OD}=1476\left(\frac{0.652}{0.75}\right)=1283\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

### Shell side: distilled water, $\mu=1.96$ lb/ft·h
Clearance $C'=P_T-d_o=0.9375-0.75=0.1875$ in; $B=12$ in.

$$a_s=\frac{ID\,C'B}{144P_T}=\frac{15.25(0.1875)(12)}{144(0.9375)}=0.2542\ \mathrm{ft^2}$$

$$G_s=\frac{W}{a_s}=\frac{175\,000}{0.2542}=6.885\times10^5\ \mathrm{lb/h\,ft^2}\qquad(V_s=3.06\ \mathrm{fps})$$

Equivalent diameter for triangular pitch:

$$D_e=\frac{4\left(\tfrac12P_T\times0.86P_T-\tfrac12\cdot\tfrac{\pi d_o^2}{4}\right)}{\tfrac12\pi d_o}=\frac{4\left(0.5(0.9375)(0.806)-0.2209\right)}{\pi(0.375)}=0.533\ \mathrm{in}=0.0444\ \mathrm{ft}$$

$$Re_s=\frac{D_eG_s}{\mu}=\frac{0.0444(6.885\times10^5)}{1.96}=1.56\times10^4$$

Kern Fig. 28 (25 % cut segmental baffles; curve fit $j_H=0.36Re^{0.55}$): $j_H\approx72.9$.

$$Pr=\frac{1.96}{0.36}=5.44$$

$$h_o=j_H\frac{k}{D_e}Pr^{1/3}\phi_s=72.9\left(\frac{0.36}{0.0444}\right)(5.44)^{1/3}(1)=1039\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

(Using Kern's tabulated $D_e=0.55$ in instead gives $Re_s=1.61\times10^4$ and $h_o=1024$; the effect on the answer is about 1 %.)

**Check of $\phi=1$:** wall temperature $t_w=t_c+\dfrac{h_o}{h_{io}+h_o}(T_c-t_c)=77.5+\dfrac{1039}{2322}(11.5)=82.6$°F; water at 82.6°F has $\mu_w\approx2.05$ lb/ft·h, so $\phi_t=(2.23/2.05)^{0.14}=1.01$ and $\phi_s=0.99$. Taking $\phi=1$ is justified.`,
          answer: String.raw`Tube (raw water): $Re_t=3.68\times10^4$, $V=6.7$ fps, $h_i\approx1476$, $h_{io}\approx1283$. Shell (distilled water): $D_e=0.533$ in, $Re_s=1.56\times10^4$, $h_o\approx1039$ Btu/h·ft²·°F.` },
        { id: "2018-19-Q1d", label: "(d)", marks: "16",
          topic: "shell-tube", sub: "U_C, U_D, R_d and pressure drops: suitability",
          type: "numerical", syllabus: "in", repeats: ["2014-15-Q8"],
          text: String.raw`Perform all the necessary calculations and check if the exchanger is suitable for use.`,
          solution: String.raw`Using $h_{io}=1283$ and $h_o=1039$ from part (c), $Q=1.40\times10^6$ Btu/h and $\Delta t=10.82$°F from part (b).

### 1. Clean overall coefficient
$$U_C=\frac{h_{io}h_o}{h_{io}+h_o}=\frac{1283(1039)}{1283+1039}=574\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

### 2. Design overall coefficient (from the available area)
$$A=N_tLa''=160(16)(0.1963)=502.5\ \mathrm{ft^2}$$

$$U_D=\frac{Q}{A\,\Delta t}=\frac{1.40\times10^6}{502.5(10.82)}=257\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

### 3. Dirt factor
$$R_{d,calc}=\frac{U_C-U_D}{U_CU_D}=\frac{574-257}{574(257)}=0.00214\ \mathrm{h\,ft^2\,^\circ F/Btu}$$

$$R_{d,req}=0.0005+0.0015=0.0020$$

$R_{d,calc}=0.00214>R_{d,req}=0.0020$ ✓. Equivalently, $U_{D,req}=1/(1/574+0.002)=267$, so the area required is $Q/(U_{D,req}\Delta t)=484\ \mathrm{ft^2}$ against 502.5 ft² available: **over-design ≈ 3.8 %**.

### 4. Tube-side pressure drop
$Re_t=3.68\times10^4$: Kern Fig. 26, $f\approx0.000186\ \mathrm{ft^2/in^2}$ (Kern's $f$ is 4 × the Fanning factor; fit Fanning $=0.0035+0.264Re^{-0.42}=0.00669$, so $f=4(0.00669)/144$).

$$\Delta P_t=\frac{fG_t^2Ln}{5.22\times10^{10}Ds\phi_t}=\frac{0.000186(1.509\times10^6)^2(16)(2)}{5.22\times10^{10}(0.0543)(1)(1)}=4.78\ \mathrm{psi}$$

Return loss (Kern Fig. 27, $G_t=1.51\times10^6$): $\dfrac{V^2}{2g'}\cdot\dfrac{62.5}{144}=\dfrac{(6.71)^2}{2(32.2)}(0.434)=0.303$ psi:

$$\Delta P_r=\frac{4n}{s}\frac{V^2}{2g'}=\frac{4(2)}{1}(0.303)=2.43\ \mathrm{psi}$$

$$\Delta P_T=\Delta P_t+\Delta P_r=4.78+2.43=7.2\ \mathrm{psi}<10\ \mathrm{psi}\;✓$$

(The slides' alternative return-loss expression $1.334\times10^{-13}(2n-1.5)G_t^2/s$ gives 0.76 psi, so the total would be 5.5 psi; either way the drop is within 10 psi.)

### 5. Shell-side pressure drop
$Re_s=1.56\times10^4$: Kern Fig. 29, $f\approx0.00197\ \mathrm{ft^2/in^2}$ (fit $e^{0.576-0.19\ln Re}/144$).
Number of crossings $N+1=12L/B=12(16)/12=16$; $D_s=15.25/12=1.271$ ft; $D_e=0.0444$ ft.

$$\Delta P_s=\frac{fG_s^2D_s(N+1)}{5.22\times10^{10}D_es\phi_s}=\frac{0.00197(6.885\times10^5)^2(1.271)(16)}{5.22\times10^{10}(0.0444)(1)(1)}=8.2\ \mathrm{psi}<10\ \mathrm{psi}\;✓$$

### 6. Verdict

| Item | Calculated | Required / allowed |
|---|---|---|
| $U_C$ | 574 | — |
| $U_D$ | 257 | — |
| $R_d$ | 0.00214 | ≥ 0.0020 ✓ |
| $\Delta P$ tubes | 7.2 psi | ≤ 10 psi ✓ |
| $\Delta P$ shell | 8.2 psi | ≤ 10 psi ✓ |
| Tube velocity | 6.7 fps | > 6 fps ✓ |

**The exchanger is suitable**: it meets the required dirt factor with about 4 % excess surface, and both pressure drops are below 10 psi.

> Same problem as 2014-15 Q8. There the shell-side fouling factor is printed as 0.005 (total 0.0065), and with that value the same unit would fail ($R_{d,calc}=0.0021<0.0065$; it would need about 1066 ft²). Every other number is identical, because the 280,000 lb/h of raw water printed here is exactly what the heat balance gives in 2014-15.`,
          answer: String.raw`$U_C\approx574$, $U_D\approx257$ Btu/h·ft²·°F, $R_{d,calc}\approx0.0021>0.0020$ required; $\Delta P_t\approx7.2$ psi, $\Delta P_s\approx8.2$ psi (< 10). The exchanger is suitable (≈4 % over-design).` },
        { id: "2018-19-Q1e", label: "(e)", marks: "7",
          topic: "shell-tube", sub: "TEMA specification sheet",
          type: "numerical", syllabus: "in", repeats: ["2014-15-Q8"],
          text: String.raw`Fill in the attached TEMA sheet and attach it to your answer script.`,
          solution: String.raw`TEMA sheet filled with the results of parts (a)–(d):

| Item | Shell side | Tube side |
|---|---|---|
| Size and type | 15¼–192 (15.25 in ID × 16 ft), 1-2, horizontal, 1 shell | |
| Surface per unit (outside) | 502.5 ft² | |
| Fluid | Distilled water | Raw water |
| Total flow | 175,000 lb/h | 280,000 lb/h |
| Temperature in / out | 93°F / 85°F | 75°F / 80°F |
| Specific gravity / $c_p$ | 1.0 / 1.0 Btu/lb·°F | 1.0 / 1.0 Btu/lb·°F |
| Viscosity (caloric) | 1.96 lb/ft·h | 2.23 lb/ft·h |
| Thermal conductivity | 0.36 Btu/h·ft·°F | 0.36 Btu/h·ft·°F |
| Number of passes | 1 | 2 |
| Velocity | 3.1 ft/s | 6.7 ft/s |
| Pressure drop: allowed / calculated | 10 / 8.2 psi | 10 / 7.2 psi |
| Fouling resistance (required) | 0.0005 | 0.0015 |
| Film coefficient | $h_o=1039$ | $h_i=1476$ ($h_{io}=1283$) |
| Heat exchanged | 1,400,000 Btu/h | |
| LMTD / corrected | 11.43°F / 10.82°F ($F_T=0.947$) | |
| Clean coefficient $U_C$ | 574 Btu/h·ft²·°F | |
| Design coefficient $U_D$ | 257 Btu/h·ft²·°F | |
| Dirt factor: calculated / required | 0.00214 / 0.0020 | |
| Tubes | 160, ¾ in OD, 18 BWG (0.049 in wall, 0.652 in ID), 16 ft, ¹⁵⁄₁₆ in triangular pitch | |
| Shell | 15.25 in ID | |
| Baffles | Segmental, 25 % cut (assumed), 12 in spacing, $N=12L/B-1=15$ baffles | |
| Verdict | Suitable | |`,
          answer: String.raw`15¼–192, 1-2 exchanger, 502.5 ft²; $h_o=1039$, $h_{io}=1283$, $U_C=574$, $U_D=257$, $R_d=0.00214$ (req. 0.002); $\Delta P_s=8.2$, $\Delta P_t=7.2$ psi.` },
      ] },
    { id: "2018-19-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q2", label: "", marks: "30",
          topic: "heat-exchangers", sub: "Double pipe: benzene–toluene hairpins",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`It is desired to heat 9820 lb/hr of cold benzene from 80 to 120°F using 6330 lb/hr of hot toluene, which is cooled from 160 to 100°F. The specific gravities at 68°F are 0.88 and 0.87, respectively. A fouling factor of 0.001 should be provided for each stream. A number of 20 ft hairpins of 2 by $1\tfrac14$ in IPS pipe are available. How many hairpins are required?`,
          solution: String.raw`> This is Kern Example 6.1, worked in full in the slides (double-pipe "calculation involved", steps 1–7). The chart readings below are the slides' values.

**Given:** benzene (cold) $w=9820$ lb/h, $80\to120$°F; toluene (hot) $W=6330$ lb/h, $160\to100$°F; $R_d=0.001+0.001=0.002$; hairpins of 20 ft (40 ft of pipe each), 2 in × 1¼ in IPS.

**Find:** the number of hairpins.

**Assumptions:** counterflow; $\phi=(\mu/\mu_w)^{0.14}=1$; arithmetic-mean caloric temperatures (both liquids have $\mu<1$ cP and small ranges); properties from Kern's charts (values read below).

**Pipe data (Kern Table 11, schedule 40):** 1¼ in IPS: OD = 1.66 in, ID = 1.38 in, outside surface 0.435 ft²/ft; 2 in IPS: ID = 2.067 in.

**Properties at the average temperatures**

| | Benzene at 100°F | Toluene at 130°F |
|---|---|---|
| $c$ (Kern Fig. 2) | 0.425 Btu/lb·°F | 0.44 Btu/lb·°F |
| $\mu$ (Kern Fig. 14) | 0.50 cP = 1.21 lb/ft·h | 0.41 cP = 0.99 lb/ft·h |
| $k$ (Kern Table 4) | 0.091 Btu/h·ft·°F | 0.085 Btu/h·ft·°F |

### 1. Heat balance
$$Q=wc(t_2-t_1)=9820(0.425)(40)=1.669\times10^5\ \mathrm{Btu/h}$$
$$\text{check: }WC(T_1-T_2)=6330(0.44)(60)=1.671\times10^5\ \mathrm{Btu/h}\;✓$$

### 2. LMTD (counterflow)
$\Delta t_h=160-120=40$°F, $\Delta t_c=100-80=20$°F:

$$\mathrm{LMTD}=\frac{40-20}{\ln(40/20)}=28.85\ ^\circ\mathrm F$$

### 3. Flow areas and fluid allocation
$$a_p=\frac{\pi D^2}{4}=\frac{\pi(1.38/12)^2}{4}=0.01039\ \mathrm{ft^2},\qquad a_a=\frac{\pi(D_2^2-D_1^2)}{4}=\frac{\pi[(2.067/12)^2-(1.66/12)^2]}{4}=0.00827\ \mathrm{ft^2}$$

The inner pipe has the larger flow area, so the larger stream, **benzene, goes in the inner pipe** and toluene in the annulus.

### 4. Annulus (hot toluene)
Equivalent diameter for heat transfer:

$$D_e=\frac{D_2^2-D_1^2}{D_1}=\frac{(0.1723)^2-(0.1383)^2}{0.1383}=0.0761\ \mathrm{ft}$$

$$G_a=\frac{W}{a_a}=\frac{6330}{0.00827}=7.65\times10^5\ \mathrm{lb/h\,ft^2},\qquad Re_a=\frac{D_eG_a}{\mu}=\frac{0.0761(7.65\times10^5)}{0.99}=5.87\times10^4$$

Kern Fig. 24: $j_H\approx167$ (slides; the turbulent fit $0.027Re^{0.8}$ gives 177). $Pr=c\mu/k=0.44(0.99)/0.085=5.14$, $Pr^{1/3}=1.725$.

$$h_o=j_H\frac{k}{D_e}Pr^{1/3}\phi_a=167\left(\frac{0.085}{0.0761}\right)(1.725)(1)=321\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

### 5. Inner pipe (cold benzene)
$$G_p=\frac{w}{a_p}=\frac{9820}{0.01039}=9.45\times10^5\ \mathrm{lb/h\,ft^2},\qquad Re_p=\frac{DG_p}{\mu}=\frac{0.115(9.45\times10^5)}{1.21}=8.99\times10^4$$

Kern Fig. 24: $j_H\approx236$ (slides; fit gives 248). $Pr=0.425(1.21)/0.091=5.65$, $Pr^{1/3}=1.78$.

$$h_i=j_H\frac{k}{D}Pr^{1/3}\phi_p=236\left(\frac{0.091}{0.115}\right)(1.78)(1)=333\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

$$h_{io}=h_i\frac{ID}{OD}=333\left(\frac{1.38}{1.66}\right)=277\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

### 6. Clean and design coefficients
$$U_C=\frac{h_{io}h_o}{h_{io}+h_o}=\frac{277(321)}{277+321}=148.7\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

$$\frac{1}{U_D}=\frac{1}{U_C}+R_d=\frac{1}{148.7}+0.002\;\Rightarrow\;U_D=114.6\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

### 7. Required surface and hairpins
$$A=\frac{Q}{U_D\,\mathrm{LMTD}}=\frac{1.669\times10^5}{114.6(28.85)}=50.5\ \mathrm{ft^2}$$

$$\text{Required length}=\frac{50.5}{0.435}=116\ \mathrm{ft};\qquad\text{one 20 ft hairpin}=40\ \mathrm{ft}$$

$$\frac{116}{40}=2.9\;\Rightarrow\;\boxed{3\ \text{hairpins}}\ \text{(in series)}$$

### 8. Check with 3 hairpins
$A=3(40)(0.435)=52.2\ \mathrm{ft^2}$; $U_D=Q/(A\,\mathrm{LMTD})=1.669\times10^5/(52.2\times28.85)=110.8$;

$$R_{d,actual}=\frac{U_C-U_D}{U_CU_D}=\frac{148.7-110.8}{148.7(110.8)}=0.0023>0.002\;✓$$

These match the slides (149, 115, 50.5 ft², 116 ft, $R_d = 0.0023$). With the curve fits instead of the chart ($j_H$ 177 and 248) you get $U_C \approx 157$ and $A \approx 48.5$ ft²: still 3 hairpins.

**Exam tip:** pressure drops are not asked here. In the slides' full solution they use $D'_e=D_2-D_1=0.0345$ ft for the annulus ($\Delta F_a = 4fG_a^2L/(2g\rho^2D'_e) = 23.5$ ft plus one velocity head per hairpin, 0.7 ft, so $\Delta P_a = 9.2$ psi) and $\Delta P_p = 3.2$ psi for the pipe, both below 10 psi.`,
          answer: String.raw`$Q\approx1.67\times10^5$ Btu/h, LMTD = 28.9°F, $h_{io}\approx277$, $h_o\approx321$, $U_C\approx149$, $U_D\approx115$; $A\approx50.5$ ft² → 116 ft of pipe → **3 hairpins** (actual $R_d\approx0.0023$).` },
      ] },
    { id: "2018-19-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q3a", label: "(a)", marks: "12",
          topic: "natural-convection", sub: "Grashof number; profiles on a vertical plate",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is the Grashof number? Discuss its implication in a natural convection system. With a neat sketch show the temperature and velocity profiles on a vertical surface during natural convection.`,
          solution: String.raw`### Grashof number
$$Gr_L=\frac{g\beta(T_s-T_\infty)L^3}{\nu^2}=\frac{\text{buoyancy force}}{\text{viscous force}}\left(\times\frac{\text{inertia}}{\text{viscous}}\right)$$

$\beta$ = volume expansion coefficient ($=1/T$ in K for an ideal gas), $L$ = characteristic length (height for a vertical plate, $D$ for a horizontal cylinder).

### Implications
- It plays the role in natural convection that $Re$ plays in forced convection: $Nu=f(Gr,Pr)$, e.g. $Nu=C(GrPr)^n$.
- It decides the flow regime: on a vertical plate the flow is laminar for $Ra=GrPr<10^9$ and turbulent above it ($n=1/4$ laminar, $n=1/3$ turbulent).
- A larger $\Delta T$ or a larger size gives a larger $Gr$, so stronger buoyancy-driven flow and a higher $h$.
- $Gr/Re^2$ shows whether natural convection matters when there is also a forced flow: $\ll1$ forced, $\approx1$ mixed, $\gg1$ natural.
- Natural convection is not possible without gravity ($g=0$ gives $Gr=0$).

### Sketch: heated vertical plate ($T_s>T_\infty$)
Axes: distance from the wall $y$ (horizontal), with the plate drawn as a vertical line on the left; fluid rises along the plate.
- **Temperature profile:** maximum $T_s$ at the wall ($y=0$), decreasing smoothly and monotonically to $T_\infty$ at the edge of the thermal boundary layer $\delta_t$.
- **Velocity profile:** $u=0$ at the wall (no slip), rising to a maximum a short distance from the wall (about one third of the layer thickness), then falling back to $u=0$ at the edge of the boundary layer (quiescent fluid far away). There is no free-stream velocity.
- Both layers grow with height $x$; for $Pr\approx1$ (air), $\delta\approx\delta_t$.
- For a cooled plate ($T_s<T_\infty$) the picture is mirrored: the fluid sinks along the plate, and the temperature rises from $T_s$ to $T_\infty$.`,
          answer: String.raw`$Gr=g\beta\Delta TL^3/\nu^2$ (buoyancy vs viscous forces); it governs $Nu$ and transition ($Ra\approx10^9$). Velocity is zero at the wall and at the layer edge with a maximum between; temperature falls monotonically from $T_s$ to $T_\infty$.` },
        { id: "2018-19-Q3b", label: "(b)", marks: "18",
          topic: "boiling", sub: "Film boiling on a 10 mm heater with radiation",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A metal-clad heating element of 10 mm diameter and of emissivity 0.92 is submerged in a water bath horizontally. If the surface temperature of the metal is 260°C under steady boiling conditions, calculate the power dissipation per unit length for the heater. Assume that the water is exposed to atmospheric pressure and is at a uniform temperature.

Given: latent heat of vaporization of water at atmospheric pressure = 2257 kJ/kg; water density 958.4 kg/m³. Water vapour properties at the film temperature:

| Density | Heat capacity | Conductivity | Viscosity |
|---|---|---|---|
| 4.807 kg/m³ | 2.56 kJ/kg·K | 0.0331 W/m·K | $14.85\times10^{-6}$ N·s/m² |`,
          solution: String.raw`**Given:** $D=0.010$ m, $\varepsilon=0.92$, $T_s=260$°C $=533.15$ K, $T_{sat}=100$°C $=373.15$ K, so $\Delta T_e=160$ K. $h_{fg}=2257$ kJ/kg, $\rho_l=958.4$; vapour: $\rho_v=4.807$, $c_{pv}=2560$, $k_v=0.0331$, $\mu_v=14.85\times10^{-6}$ (SI).

**Find:** $q'$ (W/m).

**Assumptions:** $\Delta T_e=160$ K is beyond the Leidenfrost point, so stable **film boiling** on a horizontal cylinder; water saturated at 1 atm; radiation to the liquid at $T_{sat}$; the vapour properties are used as given (the printed $\rho_v=4.807$ is high for steam at 1 atm and 180°C, about 0.49, but the given value is used).

### 1. Film-boiling heat flux (cylinder, $C=0.62$)
$$\dot q_{film}=C\left[\frac{gk_v^3\rho_v(\rho_l-\rho_v)\left[h_{fg}+0.4c_{pv}\Delta T_e\right]}{\mu_vD\,\Delta T_e}\right]^{1/4}\Delta T_e$$

$$h_{fg}+0.4c_{pv}\Delta T_e=2.257\times10^6+0.4(2560)(160)=2.421\times10^6\ \mathrm{J/kg}$$

$$\dot q_{film}=0.62\left[\frac{9.81(0.0331)^3(4.807)(953.6)(2.421\times10^6)}{14.85\times10^{-6}(0.010)(160)}\right]^{1/4}(160)=6.33\times10^4\ \mathrm{W/m^2}$$

($h_{film}=\dot q_{film}/\Delta T_e=396\ \mathrm{W/m^2K}$.)

### 2. Radiation heat flux
$$\dot q_{rad}=\varepsilon\sigma(T_s^4-T_{sat}^4)=0.92(5.67\times10^{-8})(533.15^4-373.15^4)=3.20\times10^3\ \mathrm{W/m^2}$$

### 3. Total heat flux
The vapour film is thickened by radiation, so only about ¾ of $\dot q_{rad}$ is added:

$$\dot q_{total}=\dot q_{film}+\tfrac34\dot q_{rad}=63\,330+0.75(3203)=6.57\times10^4\ \mathrm{W/m^2}$$

### 4. Power per unit length
$$q'=\dot q_{total}\,\pi D=6.57\times10^4\,\pi(0.010)=2.07\times10^3\ \mathrm{W/m}$$

(Film part 1990 W/m, radiation part 75 W/m.)

**Why it matters:** even with $\varepsilon=0.92$, radiation adds only about 4 % at 260°C; it becomes significant above about 300°C.`,
          answer: String.raw`Film boiling: $\dot q_{film}\approx6.33\times10^4\ \mathrm{W/m^2}$, $\dot q_{rad}\approx3.2\times10^3\ \mathrm{W/m^2}$, $\dot q_{tot}\approx6.57\times10^4\ \mathrm{W/m^2}$; $q'\approx2.07$ kW/m.` },
      ] },
    { id: "2018-19-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q4a", label: "(a)", marks: "10",
          topic: "heat-exchangers", sub: "Steam heater: parallel or counterflow?",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`A cold fluid is heated from 100°F to 275°F by saturated steam at 300°F. Shall they be directed in parallel flow or counterflow? Draw a temperature profile for your preferred orientation.`,
          solution: String.raw`**Either orientation gives the same performance**, because the condensing steam stays at a constant 300°F along the whole length.

### Why
- Parallel flow: $\Delta t_1=300-100=200$°F, $\Delta t_2=300-275=25$°F.
- Counterflow: $\Delta t_1=300-275=25$°F, $\Delta t_2=300-100=200$°F.
- Same pair of terminal differences, so the same LMTD:
$$\mathrm{LMTD}=\frac{200-25}{\ln(200/25)}=84.2\ ^\circ\mathrm F$$
- This is the slides' third LMTD example: "heat transfer rate is independent of the flow pattern". For multipass units $R=0$, so $F_T=1$. (In ε–NTU terms, from the textbook, $C_r=0$ and $\varepsilon=1-e^{-NTU}$ for any arrangement.)

**Practical choice:** steam is admitted at the top and the condensate drained from the bottom (gravity drainage), with the cold fluid usually entering at the condensate end, i.e. counterflow. This gives a little condensate subcooling and makes it impossible for the cold fluid to reach its outlet against a cooler section if the steam is slightly superheated or the condensate subcools.

### Sketch (counterflow)
Axes: temperature (°F) vertical, length horizontal.
- Steam: a horizontal straight line at 300°F over the whole length.
- Cold fluid: enters at 100°F at the right-hand end and rises towards the left, concave downward (steep at first, where $\Delta t$ is 200°F, then flattening), to 275°F at the left-hand end, approaching but never reaching 300°F.
- Mark $\Delta t=200$°F at the cold-inlet end and $\Delta t=25$°F at the cold-outlet end.`,
          answer: String.raw`It does not matter thermally: with isothermal condensing steam both arrangements give LMTD = 84.2°F ($F=1$). Counterflow is drawn conventionally: flat steam line at 300°F, cold fluid rising from 100 to 275°F.` },
        { id: "2018-19-Q4b", label: "(b)", marks: "20",
          topic: "condensation", sub: "Condenser: 625 horizontal tubes (25×25 bank)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A steam condenser consisting of a square array of 625 horizontal tubes, each 6 mm in diameter, is installed at the exhaust hood of a steam turbine. The tubes are exposed to saturated steam at a pressure of 15 kPa. If the tube surface temperature is maintained at 25°C, calculate (i) the heat transfer coefficient, and (ii) the rate at which steam is condensed per unit length of the tubes.

At 15 kPa: saturation temperature = 54°C, vapour density = 0.098 kg/m³, $h_{fg}$ = 2373 kJ/kg.`,
          solution: String.raw`**Given:** $N_{total}=625$ in a square array, so $N=\sqrt{625}=25$ tubes per vertical column; $D=0.006$ m; $T_{sat}=54$°C, $T_s=25$°C, $\Delta T=29$ K; $\rho_v=0.098\ \mathrm{kg/m^3}$, $h_{fg}=2373$ kJ/kg.

**Find:** (i) $\bar h$ for the bank; (ii) $\dot m'$ (kg/s per metre of tube length).

**Assumptions:** laminar film condensation on horizontal tubes (Nusselt); pure vapour, no non-condensables; condensate from the upper tubes drips onto the lower ones (tube-bank correction $N^{-1/4}$); properties of liquid water at the film temperature.

### 1. Liquid properties
$T_f=(54+25)/2=39.5$°C. Çengel Table A-9 (interpolated between 35 and 40°C):

| $\rho_l$ | $c_{pl}$ | $k_l$ | $\mu_l$ |
|---|---|---|---|
| 992.3 kg/m³ | 4179 J/kg·K | 0.630 W/m·K | $6.60\times10^{-4}$ kg/m·s |

### 2. Modified latent heat
$$h^*_{fg}=h_{fg}+0.68c_{pl}\Delta T=2.373\times10^6+0.68(4179)(29)=2.455\times10^6\ \mathrm{J/kg}$$

### 3. Single horizontal tube
$$h_1=0.729\left[\frac{g\rho_l(\rho_l-\rho_v)h^*_{fg}k_l^3}{\mu_l\Delta T\,D}\right]^{1/4}=0.729\left[\frac{9.81(992.3)(992.2)(2.455\times10^6)(0.630)^3}{6.60\times10^{-4}(29)(0.006)}\right]^{1/4}$$

$$h_1=1.10\times10^4\ \mathrm{W/m^2K}$$

### 4. (i) Tube bank, $N=25$ rows
$$\bar h_N=h_1N^{-1/4}=10\,990(25)^{-1/4}=4.92\times10^3\ \mathrm{W/m^2K}$$

(Holman's constant 0.725 instead of 0.729 gives 4890, a 0.5 % difference.)

### 5. (ii) Condensation rate per metre of tube length
Heat per tube per metre:

$$q'_1=\bar h_N\,\pi D\,\Delta T=4916\,\pi(0.006)(29)=2687\ \mathrm{W/m}$$

All 625 tubes:

$$q'=625(2687)=1.68\times10^6\ \mathrm{W/m}$$

$$\dot m'=\frac{q'}{h^*_{fg}}=\frac{1.68\times10^6}{2.455\times10^6}=0.684\ \mathrm{kg/s\ per\ m}\;(\approx2460\ \mathrm{kg/h\ per\ m})$$

i.e. $1.09\times10^{-3}$ kg/s per metre of each tube.

**Why it matters:** condensate inundation from 24 tubes above cuts the average coefficient to $25^{-1/4}=0.45$ of the single-tube value.`,
          answer: String.raw`$h_1\approx1.10\times10^4$, bank average $\bar h\approx4.9\times10^3\ \mathrm{W/m^2K}$; $q'\approx1.68$ MW/m and $\dot m'\approx0.68$ kg/s per metre of length (all 625 tubes).` },
      ] },
    { id: "2018-19-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q5a", label: "(a)", marks: "4×6",
          topic: "intro", sub: "Short answers: α, k, units, h, radiation, emissivity",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write short answers to the following questions.

(i) A material that has a high thermal conductivity or a low heat capacity will have a large thermal diffusivity. Justify the statement.

(ii) Why do glass and glass fibre possess different thermal conductivities? How and why does thermal conductivity change with temperature?

(iii) Show that the unit of thermal conductivity ($k$) is W/m·°C and that of the convection heat transfer coefficient ($h$) is W/m²·°C.

(iv) The convection heat transfer coefficient for free convection of gases ranges from 2 to 25 W/m²·°C, and is about ten times higher for forced convection. What is the physical mechanism behind the high values of $h$ for forced convection of gases?

(v) What is the mechanism of radiation heat transfer? State briefly.

(vi) The emissivity ($\varepsilon$) of black paint (0.98) is close to that of a perfect black body ($\varepsilon = 1$). But why is the emissivity of white paper ($\varepsilon = 0.97$) very close to that of black paint? Explain.`,
          solution: String.raw`### (i) Thermal diffusivity
$$\alpha=\frac{k}{\rho c_p}=\frac{\text{heat conducted}}{\text{heat stored per unit volume per degree}}$$

A high $k$ means heat is conducted through the material quickly; a low $\rho c_p$ means little of that heat is stored in raising the local temperature, so more is passed on. Either way the temperature disturbance spreads faster, which is what a large $\alpha$ means (e.g. copper $\alpha\approx1.1\times10^{-4}$, water $1.4\times10^{-7}\ \mathrm{m^2/s}$).

### (ii) Glass vs glass fibre; effect of temperature
- Solid glass is a continuous solid, $k\approx0.8$–1.4 W/m·K. Glass fibre (glass wool) is mostly **trapped air** between thin fibres; heat must pass through air pockets ($k_{air}\approx0.026$) and small fibre-to-fibre contacts, so $k\approx0.04$ W/m·K. Same material, different structure (porosity).
- Temperature effect:
  - Gases: $k$ **increases** with $T$, since molecules move faster ($k\propto\sqrt{T}$ roughly).
  - Liquids: $k$ generally **decreases** with $T$ (water is an exception, increasing up to about 130°C).
  - Pure metals: $k$ generally **decreases** with $T$, because lattice vibrations scatter the free electrons more.
  - Alloys, non-metals and insulators: $k$ usually **increases** with $T$. In porous insulation, radiation across the pores also grows with temperature.

### (iii) Units
Fourier's law $\dot Q=-kA\,dT/dx$:

$$k=\frac{\dot Q}{A\,(dT/dx)}\;\Rightarrow\;\frac{\mathrm W}{\mathrm{m^2}\,(\mathrm{^\circ C/m})}=\mathrm{W/m\,^\circ C}$$

Newton's law of cooling $\dot Q=hA(T_s-T_\infty)$:

$$h=\frac{\dot Q}{A\,\Delta T}\;\Rightarrow\;\mathrm{W/m^2\,^\circ C}$$

### (iv) Why forced-convection $h$ is higher
$h$ is set by the thickness of the boundary layer through which heat must be conducted ($h\approx k/\delta_t$). In free convection the gas moves only by weak buoyancy, so velocities are small and the boundary layer is thick. In forced convection a fan or pump imposes a much higher velocity, which **thins the boundary layer**, steepens the wall temperature gradient, sweeps heated fluid away and brings fresh cold fluid to the surface (more advection and mixing, and turbulence at higher $Re$). So $h$ is roughly ten times larger.

### (v) Mechanism of radiation
All matter above 0 K emits energy as **electromagnetic waves (photons)**, produced by changes in the electronic, vibrational and rotational states of its atoms and molecules. Thermal radiation lies at about 0.1–100 μm. It needs no medium (it travels fastest in vacuum, at the speed of light), and the emitted flux depends on temperature, $E=\varepsilon\sigma T^4$. Net exchange occurs between surfaces at different temperatures.

### (vi) Emissivity of white paper
Emissivity depends on **wavelength**. "White" and "black" describe behaviour in the **visible** range (0.4–0.76 μm), where white paper reflects strongly. A body at room temperature emits almost entirely in the **infrared** (peak near 10 μm, from Wien's law $\lambda_{max}T=2898$ μm·K). In the infrared, paper (like white paint, snow and skin) absorbs and emits almost like a black body. Since the total emissivity at room temperature is governed by the infrared, $\varepsilon_{paper}\approx0.97$ is close to $\varepsilon_{black\ paint}=0.98$. Colour is not a guide to infrared emissivity.`,
          answer: String.raw`$\alpha=k/\rho c_p$; glass fibre traps air; $k$ units from Fourier's law, $h$ from Newton's law; forced flow thins the boundary layer; radiation is EM emission needing no medium; paper is "white" only in the visible range but nearly black in the infrared, where room-temperature emission occurs.` },
        { id: "2018-19-Q5b", label: "(b)", marks: "11",
          topic: "conduction", sub: "LN₂ sphere with superinsulation: boil-off",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A certain superinsulation material having a thermal conductivity of $2\times10^{-4}$ W/m·°C is used to insulate a tank of liquid nitrogen that is maintained at −196°C; 200 kJ is required to vaporize each kg of nitrogen at this temperature. Assuming that the tank is a sphere having an inner diameter (ID) of 0.61 m, estimate the amount of nitrogen vaporized per day for an insulation thickness of 2.5 cm and an ambient temperature of 21°C. Assume that the outer temperature of the insulation is 21°C.`,
          solution: String.raw`**Given:** $k=2\times10^{-4}$ W/m·°C; $r_1=0.61/2=0.305$ m, $r_2=0.305+0.025=0.330$ m; $T_1=-196$°C, $T_2=21$°C; $h_{fg}=200$ kJ/kg.

**Find:** $\dot m$ (kg/day).

**Assumptions:** steady, 1-D radial conduction through the insulation only; the tank wall is at the LN₂ temperature; outer surface at 21°C (given), so the outside convection resistance is ignored; constant $k$.

### 1. Heat leak through a spherical shell
$$\dot Q=\frac{4\pi k\,r_1r_2\,(T_2-T_1)}{r_2-r_1}=\frac{4\pi(2\times10^{-4})(0.305)(0.330)(21+196)}{0.025}=2.20\ \mathrm W$$

### 2. Boil-off
$$\dot m=\frac{\dot Q}{h_{fg}}=\frac{2.20}{200\times10^3}=1.10\times10^{-5}\ \mathrm{kg/s}$$

$$\dot m=1.10\times10^{-5}(86\,400)=0.95\ \mathrm{kg/day}$$

**Why it matters:** with $k$ about 100 times lower than glass wool, a 2.5 cm layer holds the boil-off of a 0.6 m tank to under 1 kg per day.`,
          answer: String.raw`$\dot Q\approx2.2$ W, boil-off $\approx0.95$ kg of N₂ per day.` },
      ] },
    { id: "2018-19-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q6a", label: "(a)", marks: "20",
          topic: "conduction", sub: "Composite furnace wall: insulation thickness",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A furnace wall is to be constructed with a 6 cm layer of fire brick ($k = 1.0$ W/m·°C) on the inside. This is covered on the exterior with a layer of block insulation ($k = 0.1$ W/m·°C). The interior of the furnace is at 800°C and the exterior surface is at 70°C. Determine the thickness of block insulation necessary to maintain the firebrick–block insulation interface temperature at 700°C.`,
          solution: String.raw`**Given:** $L_1=0.06$ m, $k_1=1.0$; $k_2=0.1$ W/m·°C; inner face $T_1=800$°C (taken as the inner wall surface temperature), interface $T_2=700$°C, outer face $T_3=70$°C.

**Find:** $L_2$.

**Assumptions:** steady, 1-D conduction through a plane composite wall, constant $k$, perfect contact (no contact resistance), per unit area.

### 1. Heat flux through the firebrick
$$q''=\frac{T_1-T_2}{L_1/k_1}=\frac{800-700}{0.06/1.0}=1667\ \mathrm{W/m^2}$$

### 2. The same flux passes through the insulation (series)
$$q''=\frac{T_2-T_3}{L_2/k_2}\;\Rightarrow\;L_2=\frac{k_2(T_2-T_3)}{q''}=\frac{0.1(700-70)}{1667}=0.0378\ \mathrm m$$

### 3. Check
Total resistance $=0.06/1.0+0.0378/0.1=0.438\ \mathrm{m^2K/W}$; $q''=(800-70)/0.438=1667\ \mathrm{W/m^2}$ ✓.

**Why it matters:** the insulation, only 3.8 cm thick, takes 630 of the 730°C drop because its $k$ is ten times lower; the firebrick protects the insulation from the 800°C face.`,
          answer: String.raw`$q''\approx1667\ \mathrm{W/m^2}$; block insulation thickness $\approx3.8$ cm.` },
        { id: "2018-19-Q6b", label: "(b)", marks: "15",
          topic: "generation", sub: "Wire with uniform generation: centre temperature",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`For a cylinder or wire with internal heat generation the temperature distribution is given by the expression

$$T-T_w=\frac{\dot q}{4k}\left(R^2-r^2\right)$$

A 5 mm diameter wire generates heat uniformly at the rate of 500 MW/m³. The outside surface temperature of the wire is 150°C, and the thermal conductivity is 20 W/m·°C. Calculate the temperature at the centre of the wire.`,
          solution: String.raw`**Given:** $R=2.5\times10^{-3}$ m, $\dot q=500\times10^6\ \mathrm{W/m^3}$, $T_w=150$°C, $k=20$ W/m·°C.

**Find:** $T_0=T(r=0)$.

**Assumptions:** steady, 1-D radial conduction, uniform generation, constant $k$ (this is what the given profile assumes).

### Centre temperature
Put $r=0$ in the profile:

$$T_0=T_w+\frac{\dot qR^2}{4k}=150+\frac{500\times10^6(2.5\times10^{-3})^2}{4(20)}=150+39.1=189.1\ ^\circ\mathrm C$$

Check by energy balance: heat generated per metre $=\dot q\pi R^2=9817$ W/m. Surface flux $=\dot qR/2=6.25\times10^5\ \mathrm{W/m^2}$, and $-k\,dT/dr|_R=k\cdot2\dot qR/(4k)=\dot qR/2$ ✓.

**Why it matters:** the maximum temperature (at the centre) rises with $R^2$; doubling the wire diameter at the same $\dot q$ would quadruple the 39°C rise.`,
          answer: String.raw`$T_0=T_w+\dot qR^2/(4k)\approx189$°C (a 39°C rise above the surface).` },
      ] },
    { id: "2018-19-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q7a", label: "(a)", marks: "17",
          topic: "natural-convection", sub: "Horizontal 20 cm steam pipe at 220°C",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q8c"],
          text: String.raw`A horizontal pipe of 20 cm outside diameter carrying steam is in ambient air at 32°C. The outside temperature of the pipe is 220°C. Calculate the natural convection coefficient and the heat loss per metre length of pipe. A table of properties of air is supplied. The correlation for natural convection:

$$Nu_f=C\left(Gr_f\,Pr_f\right)^m,\qquad Gr_f=\frac{g\beta(T_w-T_\infty)D^3}{\nu^2},\qquad \beta=\frac1T$$

Values of $C$ and $m$ for use with the correlation:

| $Gr_fPr_f$ | $C$ | $m$ |
|---|---|---|
| $10^4$–$10^9$ | 0.53 | 0.25 |
| $10^9$–$10^{12}$ | 0.13 | 0.33 |`,
          solution: String.raw`**Given:** $D=0.20$ m, $T_w=220$°C, $T_\infty=32$°C, $\Delta T=188$ K.

**Find:** $\bar h$ and $q'$.

**Assumptions:** steady; quiescent air at 1 atm; properties at the film temperature; radiation not asked (convection only).

### 1. Properties at the film temperature
$T_f=(220+32)/2=126$°C $=399.2$ K. Air, Holman Table A-5 (interpolated between 350 K and 400 K):

| $\nu$ | $k$ | $Pr$ | $\beta=1/T_f$ |
|---|---|---|---|
| $25.81\times10^{-6}\ \mathrm{m^2/s}$ | 0.03359 W/m·K | 0.689 | $2.505\times10^{-3}\ \mathrm{K^{-1}}$ |

### 2. Grashof and Rayleigh numbers
$$Gr_f=\frac{9.81(2.505\times10^{-3})(188)(0.20)^3}{(25.81\times10^{-6})^2}=5.55\times10^7$$

$$Gr_fPr_f=5.55\times10^7(0.689)=3.82\times10^7$$

This lies in $10^4$–$10^9$ (laminar), so $C=0.53$, $m=0.25$.

### 3. Nusselt number and $h$
$$Nu_f=0.53(3.82\times10^7)^{0.25}=41.7$$

$$\bar h=\frac{Nu_fk}{D}=\frac{41.7(0.03359)}{0.20}=7.00\ \mathrm{W/m^2\,^\circ C}$$

### 4. Heat loss per metre
$$q'=\bar h\,\pi D\,(T_w-T_\infty)=7.00\,\pi(0.20)(188)=827\ \mathrm{W/m}$$

**Exam tip:** always check $GrPr$ against the range before picking $C$ and $m$; for a hot pipe in air, radiation (not asked here) would add a loss of similar size.`,
          answer: String.raw`$T_f=399$ K, $GrPr\approx3.8\times10^7$ (laminar, $C=0.53$, $m=1/4$), $Nu\approx41.7$, $\bar h\approx7.0\ \mathrm{W/m^2K}$, $q'\approx827$ W/m.` },
        { id: "2018-19-Q7b", label: "(b)", marks: "11",
          topic: "boundary-layer", sub: "Velocity and thermal boundary layers on a heated plate",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Describe the thermal boundary layer formation and the hydrodynamic (velocity) boundary layer formation on a heated isothermal flat plate for forced convection heat transfer.`,
          solution: String.raw`Set-up: fluid at $u_\infty$, $T_\infty$ approaches a flat plate held at $T_s>T_\infty$; $x$ along the plate from the leading edge, $y$ normal to it.

### Hydrodynamic (velocity) boundary layer
- At the wall the fluid sticks (**no-slip**, $u=0$). Through viscosity this layer slows the next layer, and so on; the retarding effect diffuses outward with distance $x$.
- The **velocity boundary layer** is the region where $u$ rises from 0 at the wall to $0.99u_\infty$; its thickness $\delta(x)$ grows downstream. In laminar flow $\delta=4.64\sqrt{\nu x/u_\infty}$ (integral method, cubic profile), i.e. $\delta/x\propto Re_x^{-1/2}$.
- Inside it velocity gradients and shear stress $\tau=\mu\,\partial u/\partial y$ are large; outside, the flow is inviscid ($u=u_\infty$).
- Regimes: laminar near the leading edge; transition at $Re_{x,c}=u_\infty x/\nu\approx5\times10^5$; then turbulent (thicker layer with a thin laminar sublayer at the wall, and higher friction and heat transfer).

### Thermal boundary layer
- Fluid particles touching the plate reach thermal equilibrium with it ($T=T_s$ at $y=0$). They exchange energy with the next layer, setting up a temperature gradient.
- The **thermal boundary layer** is the region where $(T_s-T)/(T_s-T_\infty)$ goes from 0 to 0.99; its thickness $\delta_t(x)$ also grows with $x$.
- At the wall, heat is transferred by **conduction** only, since the fluid is at rest there: $q''_s=-k_f\,\partial T/\partial y|_{y=0}=h(T_s-T_\infty)$. So $h=-k_f(\partial T/\partial y)_0/(T_s-T_\infty)$, and as $\delta_t$ grows the gradient falls, so the local $h_x$ decreases downstream ($h_x\propto x^{-1/2}$ in laminar flow).

### Relation between the two
- The relative thickness depends on $Pr=\nu/\alpha$: $\delta_t/\delta\approx Pr^{-1/3}/1.026$ (laminar).
  - $Pr\approx1$ (gases): $\delta_t\approx\delta$.
  - $Pr\gg1$ (oils): $\delta_t\ll\delta$.
  - $Pr\ll1$ (liquid metals): $\delta_t\gg\delta$.
- If the plate is heated only beyond an unheated starting length $x_0$, the thermal layer starts at $x_0$ while the velocity layer starts at $x=0$.

Sketch: plate along the horizontal axis; two curves growing from the leading edge, $\delta(x)$ and $\delta_t(x)$, with a velocity profile (0 at the wall to $u_\infty$) and a temperature profile ($T_s$ at the wall to $T_\infty$) drawn at one station.`,
          answer: String.raw`No-slip creates a velocity layer ($u:0\to u_\infty$, $\delta\propto\sqrt{x}$); wall-fluid thermal equilibrium creates a thermal layer ($T:T_s\to T_\infty$); $h$ comes from conduction at the wall and falls as $\delta_t$ grows; $\delta_t/\delta\approx Pr^{-1/3}$.` },
        { id: "2018-19-Q7c", label: "(c)", marks: "7",
          topic: "boundary-layer", sub: "Colburn analogy → Nu = 0.0395 Re^¾ Pr^⅓",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Colburn recommended that for forced convection heat transfer in turbulent flow in tubes, over a wide range of Prandtl number, the relation

$$St\,Pr^{2/3}=\frac{C_f}{2}$$

may be used. Show that this relation yields the correlation

$$Nu=0.0395\,Re^{3/4}Pr^{1/3}$$

Given: $f=0.316/Re^{1/4}$, where $C_f=f/4$.`,
          solution: String.raw`**Assumptions:** fully developed turbulent flow in a smooth tube; Blasius friction factor $f=0.316Re^{-1/4}$ (valid for about $Re<10^5$); $C_f$ = Fanning friction coefficient $=f/4$ ($f$ = Darcy factor); $St=\dfrac{h}{\rho c_pu_m}=\dfrac{Nu}{Re\,Pr}$.

### Derivation
1. Friction coefficient:
$$\frac{C_f}{2}=\frac{f}{8}=\frac{0.316}{8}Re^{-1/4}=0.0395\,Re^{-1/4}$$

2. Colburn analogy:
$$St\,Pr^{2/3}=0.0395\,Re^{-1/4}$$

3. Replace $St$ by $Nu/(Re\,Pr)$:
$$\frac{Nu}{Re\,Pr}\,Pr^{2/3}=0.0395\,Re^{-1/4}$$

4. Solve for $Nu$:
$$Nu=0.0395\,Re^{1-1/4}\,Pr^{1-2/3}$$

$$\boxed{Nu=0.0395\,Re^{3/4}\,Pr^{1/3}}$$

**Note:** this is close to the Dittus–Boelter form $0.023Re^{0.8}Pr^n$; the $Re^{3/4}$ exponent comes directly from the $Re^{-1/4}$ dependence of the Blasius friction factor.`,
          answer: String.raw`$C_f/2=f/8=0.0395Re^{-1/4}$; with $St=Nu/(RePr)$, $Nu=0.0395Re^{3/4}Pr^{1/3}$.` },
      ] },
    { id: "2018-19-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q8a", label: "(a)", marks: "25",
          topic: "conduction", sub: "Insulated hot-water pipe: heat loss",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Hot water at 120°C flows in a stainless-steel pipe ($k = 15$ W/m·°C) with inner diameter 1.6 cm and thickness 0.2 cm. The pipe is covered with 0.7 cm thick fibreglass insulation ($k = 0.038$ W/m·°C) to ensure that the outer surface of the insulation does not exceed 40°C when the air temperature is 25°C. The heat transfer coefficients inside and outside the pipe are $h_i = 70$ W/m²·°C and $h_o = 20$ W/m²·°C, respectively. Determine the rate of heat loss from the pipe.`,
          solution: String.raw`**Given:** $T_{\infty,i}=120$°C, $T_{\infty,o}=25$°C; $r_1=0.008$ m, $r_2=0.010$ m, $r_3=0.017$ m; $k_s=15$, $k_{ins}=0.038$ W/m·°C; $h_i=70$, $h_o=20$ W/m²·°C.

**Find:** $q'$ (per metre) and a check that $T_{s,o}\le40$°C.

**Assumptions:** steady, 1-D radial conduction, constant properties, no contact resistance, radiation included in $h_o$ (or neglected), $L=1$ m.

### 1. Thermal resistances (per metre)
$$R_i=\frac{1}{h_i2\pi r_1}=\frac{1}{70(2\pi)(0.008)}=0.2842\ \mathrm{m\,^\circ C/W}$$

$$R_{steel}=\frac{\ln(r_2/r_1)}{2\pi k_s}=\frac{\ln(1.25)}{2\pi(15)}=0.00237\ \mathrm{m\,^\circ C/W}$$

$$R_{ins}=\frac{\ln(r_3/r_2)}{2\pi k_{ins}}=\frac{\ln(1.7)}{2\pi(0.038)}=2.2224\ \mathrm{m\,^\circ C/W}$$

$$R_o=\frac{1}{h_o2\pi r_3}=\frac{1}{20(2\pi)(0.017)}=0.4681\ \mathrm{m\,^\circ C/W}$$

$$R_{tot}=0.2842+0.0024+2.2224+0.4681=2.977\ \mathrm{m\,^\circ C/W}$$

### 2. Heat loss
$$q'=\frac{T_{\infty,i}-T_{\infty,o}}{R_{tot}}=\frac{120-25}{2.977}=31.9\ \mathrm{W/m}$$

### 3. Check the outer surface temperature
$$T_{s,o}=T_{\infty,o}+q'R_o=25+31.9(0.4681)=39.9\ ^\circ\mathrm C\le40\ ^\circ\mathrm C\;✓$$

(Inner wall $120-31.9(0.2842)=110.9$°C; steel/insulation interface 110.9°C.)

**Why it matters:** the insulation is 75 % of the total resistance; the 0.7 cm layer just meets the 40°C touch-temperature limit.`,
          answer: String.raw`$R_{tot}\approx2.98$ m·°C/W, $q'\approx31.9$ W per metre of pipe; outer surface $\approx39.9$°C (limit met).` },
        { id: "2018-19-Q8b", label: "(b)", marks: "10",
          topic: "heat-exchangers", sub: "Overall U_o for a double-pipe exchanger",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive an expression for the overall heat transfer coefficient based on the outside surface area of the inner pipe ($U_o$) for a double-pipe heat exchanger. Assume that the hot fluid flows in the inner pipe and the cold fluid in the annulus.`,
          solution: String.raw`**Set-up:** inner pipe of inside radius $r_i$, outside radius $r_o$, length $L$, wall conductivity $k$. Hot fluid inside ($T_h$, coefficient $h_i$), cold fluid in the annulus ($T_c$, coefficient $h_o$). Areas $A_i=2\pi r_iL$, $A_o=2\pi r_oL$.

**Assumptions:** steady state; 1-D radial conduction through the wall; constant properties; local fluid temperatures $T_h$, $T_c$ at a section; outer pipe insulated (all heat goes from hot to cold fluid).

### 1. Heat flow through the three resistances in series
Hot fluid to inner wall (convection):
$$q=h_iA_i(T_h-T_{w,i})\;\Rightarrow\;T_h-T_{w,i}=\frac{q}{h_iA_i}$$

Through the pipe wall (conduction, cylinder):
$$q=\frac{2\pi kL(T_{w,i}-T_{w,o})}{\ln(r_o/r_i)}\;\Rightarrow\;T_{w,i}-T_{w,o}=q\frac{\ln(r_o/r_i)}{2\pi kL}$$

Outer wall to cold fluid (convection):
$$q=h_oA_o(T_{w,o}-T_c)\;\Rightarrow\;T_{w,o}-T_c=\frac{q}{h_oA_o}$$

### 2. Add the three temperature differences
$$T_h-T_c=q\left[\frac{1}{h_iA_i}+\frac{\ln(r_o/r_i)}{2\pi kL}+\frac{1}{h_oA_o}\right]$$

### 3. Define $U_o$ on the outside area
$$q=U_oA_o(T_h-T_c)\;\Rightarrow\;\frac{1}{U_oA_o}=\frac{1}{h_iA_i}+\frac{\ln(r_o/r_i)}{2\pi kL}+\frac{1}{h_oA_o}$$

Multiply by $A_o=2\pi r_oL$:

$$\boxed{U_o=\frac{1}{\dfrac{A_o}{A_ih_i}+\dfrac{A_o\ln(r_o/r_i)}{2\pi kL}+\dfrac{1}{h_o}}=\frac{1}{\dfrac{r_o}{r_ih_i}+\dfrac{r_o\ln(r_o/r_i)}{k}+\dfrac{1}{h_o}}}$$

### 4. With fouling (design value)
$$\frac{1}{U_o}=\frac{r_o}{r_ih_i}+\frac{r_o}{r_i}R_{d,i}+\frac{r_o\ln(r_o/r_i)}{k}+R_{d,o}+\frac{1}{h_o}$$

In Kern's notation, for a thin metal wall, $h_{io}=h_i\,(ID/OD)$ and $U_C=\dfrac{h_{io}h_o}{h_{io}+h_o}$, $\dfrac{1}{U_D}=\dfrac{1}{U_C}+R_d$.

Note: $U_oA_o=U_iA_i$, so the product $UA$ is the same whichever area is chosen.`,
          answer: String.raw`$U_o=\left[\dfrac{r_o}{r_ih_i}+\dfrac{r_o\ln(r_o/r_i)}{k}+\dfrac1{h_o}\right]^{-1}$ (add $\tfrac{r_o}{r_i}R_{di}+R_{do}$ for fouling); thin wall gives $U_C=h_{io}h_o/(h_{io}+h_o)$.` },
      ] },
  ]
});
