QB.paper({
  year: "2011-12", date: "25/07/2013", marks: 210,
  rules: String.raw`Section A: any three of Q1–Q4. Section B: any three of Q5–Q8. Separate scripts for each section.`,
  questions: [
    { id: "2011-12-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw`Nitrobenzene, 55,400 lb/h, is produced in a reactor at an operating temperature of 365°F. The product stream must be cooled to 150°F by preheating benzene from 100°F to the maximum attainable temperature. Allowable pressure drop is 7 psi for the tube side and 10 psi for the shell side. Dirt factors of 0.001 (tube side) and 0.0025 (shell side) are required.

The available exchanger is a 2-6 shell-and-tube heat exchanger.

- **Shell side:** ID 25 in, 25% vertically cut baffles, baffle spacing 8 in.
- **Tube side:** 365 tubes, $\tfrac34$ in OD, 0.62 in ID, 16 BWG, 16 ft long, 1 in square pitch.

| Property (at average temperature) | Nitrobenzene | Benzene |
|---|---|---|
| Viscosity, lb/ft·h | 1.65 | 1.57 |
| Thermal conductivity, Btu/h·ft·°F | 0.085 | 0.0785 |
| Specific heat, Btu/lb·°F | 0.56 | 0.435 |

*(The paper prints "Nitrobenzene" for the second set; it is benzene.)*`,
      parts: [
        { id: "2011-12-Q1a", label: "(a)", marks: "15",
          topic: "shell-tube", sub: "Kern rating: h_io and h_o",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q5a"],
          text: String.raw`Determine the tube-side and shell-side heat transfer coefficients.`,
          solution: String.raw`**Given**
- Hot: nitrobenzene, $W = 55{,}400\,\mathrm{lb/h}$, $T_1 = 365^\circ\mathrm{F} \to T_2 = 150^\circ\mathrm{F}$; $\mu = 1.65\,\mathrm{lb/ft\,h}$, $k = 0.085$, $c = 0.56\,\mathrm{Btu/lb\,^\circ F}$
- Cold: benzene from $t_1 = 100^\circ\mathrm{F}$; $\mu = 1.57\,\mathrm{lb/ft\,h}$, $k = 0.0785$, $c = 0.435$
- 2-6 exchanger (2 shell passes, 6 tube passes): $D_s = 25\,\mathrm{in}$, $B = 8\,\mathrm{in}$, 25% cut; $N_t = 365$ tubes, $\tfrac34\,\mathrm{in}$ OD, 0.62 in ID (16 BWG), $L = 16\,\mathrm{ft}$, 1 in square pitch
- $\Delta P_{allow}$: tube 7 psi, shell 10 psi; $R_{d,tube} = 0.001$, $R_{d,shell} = 0.0025$

**Find:** $h_i$ (as $h_{io}$) and $h_o$.

![2-6 exchanger: nitrobenzene in the shell (365 → 150°F), benzene in the tubes (from 100°F)](fig/2011-12-Q1a.svg)

**Assumptions**
- Benzene flow is not given. "Maximum attainable temperature" in a 2-shell-pass unit is limited by $F_T$: Kern's rule is $F_T \ge 0.75$–0.8. I take $t_2 = 230^\circ\mathrm{F}$, which gives $F_T \approx 0.81$ (Holman Fig. 10-9 / Kern Fig. 19). At $t_2 \approx 232^\circ\mathrm{F}$, $F_T$ falls to 0.80, and above about $275^\circ\mathrm{F}$ the unit cannot work at all.
- The properties are given at the average temperature, so I use them as caloric values. $\phi = (\mu/\mu_w)^{0.14} = 1$ because $\mu_w$ is not given.
- Allocation: benzene is the larger, cleaner stream, so it goes **in the tubes** (takes $R_d = 0.001$, 6 passes keep its velocity high). The hot reactor product with the larger dirt factor (0.0025) goes in the **shell**.
- Specific gravities, not given, are estimated: benzene $s \approx 0.83$ at about $165^\circ\mathrm{F}$, nitrobenzene $s \approx 1.10$ at about $258^\circ\mathrm{F}$ (1.20 at $68^\circ\mathrm{F}$). They are needed only for velocity and $\Delta P$.
- Benzene boils at $176^\circ\mathrm{F}$ at 1 atm. It must be kept under pressure (about 2–3 atm) so it stays liquid at $230^\circ\mathrm{F}$.

### 1. Heat balance

$$Q = W c (T_1 - T_2) = 55{,}400 \times 0.56 \times (365 - 150) = 6.670\times10^{6}\,\mathrm{Btu/h}$$

$$w = \frac{Q}{c\,(t_2 - t_1)} = \frac{6.670\times10^{6}}{0.435\times(230 - 100)} = 117{,}950\,\mathrm{lb/h\ benzene}$$

### 2. Tube side: benzene

Flow area per tube $a'_t = 0.302\,\mathrm{in^2}$ (Kern Table 10, $\tfrac34$ in 16 BWG; $\pi(0.62)^2/4 = 0.302$).

$$a_t = \frac{N_t a'_t}{144\,n} = \frac{365 \times 0.302}{144 \times 6} = 0.1276\,\mathrm{ft^2}$$

$$G_t = \frac{w}{a_t} = \frac{117{,}950}{0.1276} = 9.245\times10^{5}\,\mathrm{lb/h\,ft^2}, \qquad V = \frac{G_t}{3600\,\rho} = \frac{9.245\times10^5}{3600 \times 51.9} = 4.95\,\mathrm{ft/s}$$

$$\mathrm{Re}_t = \frac{D G_t}{\mu} = \frac{(0.62/12)(9.245\times10^{5})}{1.57} = 3.04\times10^{4}\ \text{(turbulent)}$$

Kern Fig. 24 at $\mathrm{Re} = 3.0\times10^4$, $L/D = 16\times12/0.62 = 310$ reads $j_H \approx 104$ (fit $j_H = 0.027\,\mathrm{Re}^{0.8} = 104.2$).

$$\mathrm{Pr} = \frac{c\mu}{k} = \frac{0.435\times1.57}{0.0785} = 8.70, \qquad \mathrm{Pr}^{1/3} = 2.057$$

$$h_i = j_H \frac{k}{D}\,\mathrm{Pr}^{1/3}\phi_t = 104.2 \times \frac{0.0785}{0.62/12} \times 2.057 = 325.7\,\mathrm{Btu/h\,ft^2\,^\circ F}$$

$$h_{io} = h_i\frac{ID}{OD} = 325.7\times\frac{0.62}{0.75} = 269.2\,\mathrm{Btu/h\,ft^2\,^\circ F}$$

### 3. Shell side: nitrobenzene

Clearance $C' = P_T - d_o = 1 - 0.75 = 0.25\,\mathrm{in}$. The longitudinal baffle splits the shell, so each pass gets **half** the cross-flow area (Kern ch. 8, 2-n exchangers).

$$a_s = \frac{1}{2}\,\frac{D_s C' B}{144\,P_T} = \frac{1}{2}\times\frac{25\times0.25\times8}{144\times1} = 0.1736\,\mathrm{ft^2}$$

$$G_s = \frac{W}{a_s} = \frac{55{,}400}{0.1736} = 3.191\times10^{5}\,\mathrm{lb/h\,ft^2}$$

Equivalent diameter, square pitch:

$$D_e = \frac{4\left(P_T^2 - \pi d_o^2/4\right)}{\pi d_o} = \frac{4(1 - 0.4418)}{\pi\times0.75} = 0.948\,\mathrm{in} = 0.0790\,\mathrm{ft}\quad(\text{Kern Fig. 28 lists }0.95\,\mathrm{in})$$

$$\mathrm{Re}_s = \frac{D_e G_s}{\mu} = \frac{0.0790\times3.191\times10^{5}}{1.65} = 1.53\times10^{4}$$

Kern Fig. 28 (25% cut) at $\mathrm{Re}_s = 1.5\times10^4$ reads $j_H \approx 72$ (fit $0.36\,\mathrm{Re}^{0.55} = 72.0$, valid for $2\times10^3$ to $10^6$).

$$\mathrm{Pr} = \frac{0.56\times1.65}{0.085} = 10.87, \qquad \mathrm{Pr}^{1/3} = 2.215$$

$$h_o = j_H\frac{k}{D_e}\mathrm{Pr}^{1/3}\phi_s = 72.0\times\frac{0.085}{0.0790}\times2.215 = 171.7\,\mathrm{Btu/h\,ft^2\,^\circ F}$$

> Exam tip: say which fluid you put in the tubes and why. Then use $h_{io}$ (referred to the OD), not $h_i$, in $U_C$.`,
          answer: String.raw`With benzene in the tubes ($t_2 = 230^\circ\mathrm{F}$, $w = 117{,}950\,\mathrm{lb/h}$): $h_i = 326$, $h_{io} \approx 269\,\mathrm{Btu/h\,ft^2\,^\circ F}$; $h_o \approx 172\,\mathrm{Btu/h\,ft^2\,^\circ F}$.` },
        { id: "2011-12-Q1b", label: "(b)", marks: "5",
          topic: "shell-tube", sub: "Clean overall coefficient U_C",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q5b"],
          text: String.raw`Find the clean overall heat transfer coefficient.`,
          solution: String.raw`$$U_C = \frac{h_{io}\,h_o}{h_{io} + h_o} = \frac{269.2\times171.7}{269.2 + 171.7} = 104.8\,\mathrm{Btu/h\,ft^2\,^\circ F}$$

The shell side (nitrobenzene) gives the larger resistance and controls $U_C$.`,
          answer: String.raw`$U_C \approx 105\,\mathrm{Btu/h\,ft^2\,^\circ F}$` },
        { id: "2011-12-Q1c", label: "(c)", marks: "15",
          topic: "shell-tube", sub: "U_D, dirt factor, ΔP: suitability",
          type: "numerical", syllabus: "in", repeats: ["2022-23-Q5c"],
          text: String.raw`Calculate the overall (design) coefficient for the heat exchanger and check whether the exchanger is suitable for use.`,
          solution: String.raw`### 1. True temperature difference

$$\Delta t_{LM} = \frac{(T_1 - t_2) - (T_2 - t_1)}{\ln\frac{T_1 - t_2}{T_2 - t_1}} = \frac{(365-230) - (150-100)}{\ln(135/50)} = 85.6^\circ\mathrm{F}$$

$$R = \frac{T_1 - T_2}{t_2 - t_1} = \frac{215}{130} = 1.654, \qquad S = \frac{t_2 - t_1}{T_1 - t_1} = \frac{130}{265} = 0.491$$

From the 2-shell-pass chart (Kern Fig. 19, Holman Fig. 10-9), $F_T = 0.81$, so $\Delta t = F_T\,\Delta t_{LM} = 0.81\times85.6 = 69.3^\circ\mathrm{F}$.

### 2. Design (dirty) coefficient from the available surface

$$A = N_t\,\pi d_o L = 365\times\pi\times\frac{0.75}{12}\times16 = 1147\,\mathrm{ft^2}$$

$$U_D = \frac{Q}{A\,\Delta t} = \frac{6.670\times10^{6}}{1147\times69.3} = 83.9\,\mathrm{Btu/h\,ft^2\,^\circ F}$$

### 3. Dirt factor check

$$R_d = \frac{U_C - U_D}{U_C U_D} = \frac{104.8 - 83.9}{104.8\times83.9} = 0.00238\,\mathrm{h\,ft^2\,^\circ F/Btu}$$

Required: $R_{d,req} = 0.001 + 0.0025 = 0.0035$. Equivalently, with the required fouling the unit can only deliver

$$U_{D,achievable} = \left(\frac{1}{U_C} + R_{d,req}\right)^{-1} = \left(\frac{1}{104.8} + 0.0035\right)^{-1} = 76.7\,\mathrm{Btu/h\,ft^2\,^\circ F} < 83.9$$

That would need $A = 6.670\times10^6/(76.7\times69.3) = 1255\,\mathrm{ft^2}$, which is about 9% more than the 1147 ft² available.

### 4. Pressure drops

**Tube side.** Kern Fig. 26 at $\mathrm{Re}_t = 3.04\times10^4$ reads $f \approx 0.00019\,\mathrm{ft^2/in^2}$, from the fit $f = 4(0.0035 + 0.264\,\mathrm{Re}^{-0.42})/144 = 1.93\times10^{-4}$. The factor 4 converts the Fanning-type fit to Kern's chart basis; it reproduces the slide value $0.00028$ at Re = 11,571 to within about 15%.

$$\Delta P_t = \frac{f G_t^2 L n}{5.22\times10^{10} D s \phi_t} = \frac{1.93\times10^{-4}\times(9.245\times10^5)^2\times16\times6}{5.22\times10^{10}\times(0.62/12)\times0.83\times1} = 7.1\,\mathrm{psi}$$

Return loss (four velocity heads per pass). Kern Fig. 27 gives $\frac{V^2}{2g'}$, already in psi (×62.5/144), against $G_t$. The chart is drawn for water, so $V$ is taken as $G_t/(3600\times62.5)$ and the real density enters only through the $1/s$ in the formula (using the actual 4.95 ft/s and then dividing by $s$ would count $s$ twice):

$$V_w = \frac{9.245\times10^5}{3600\times62.5} = 4.11\,\mathrm{ft/s},\qquad \frac{V^2}{2g'} = \frac{4.11^2}{2\times32.2}\times\frac{62.5}{144} = 0.114\,\mathrm{psi}$$

$$\Delta P_r = \frac{4n}{s}\frac{V^2}{2g'} = \frac{4\times6}{0.83}\times0.114 = 3.3\,\mathrm{psi}$$

$$\Delta P_T = 7.1 + 3.3 = 10.4\,\mathrm{psi} > 7\,\mathrm{psi\ allowed}$$

**Shell side.** Kern Fig. 29 at $\mathrm{Re}_s = 1.53\times10^4$ reads $f \approx 0.0020\,\mathrm{ft^2/in^2}$, from the fit $e^{0.576 - 0.19\ln \mathrm{Re}}/144 = 1.98\times10^{-3}$. Crossings per shell pass: $N + 1 = 12L/B = 12\times16/8 = 24$, so 48 for the two shell passes.

$$\Delta P_s = \frac{f G_s^2 D_s (N+1)}{5.22\times10^{10} D_e s \phi_s} = \frac{1.98\times10^{-3}\times(3.191\times10^5)^2\times(25/12)\times48}{5.22\times10^{10}\times0.0790\times1.10} = 4.5\,\mathrm{psi} < 10\,\mathrm{psi}$$

### 5. Verdict

| Item | Calculated | Required | OK? |
|---|---|---|---|
| $R_d$ | 0.00238 | ≥ 0.0035 | No |
| $\Delta P$ tube (benzene) | 10.4 psi | ≤ 7 psi | No |
| $\Delta P$ shell (nitrobenzene) | 4.5 psi | ≤ 10 psi | Yes |

The exchanger is **not suitable** as specified. It is about 9% short of surface and the tube side exceeds its allowable pressure drop.

- Swapping the streams (nitrobenzene in the tubes) gives $h_{io} = 165$, $h_o = 229$, $U_C = 95.9$ and $R_d = 0.0015$. Shell $\Delta P$ becomes 23 psi, so it is worse.
- The verdict depends on the assumed $t_2$. With a lower benzene outlet, e.g. $t_2 = 220^\circ\mathrm{F}$, there is more benzene and a larger $\Delta t$, and $R_d \approx 0.0036$ just meets the requirement. A larger benzene flow also raises the tube $\Delta P$ further.

> Why it matters: an exchanger is "suitable" only if three checks all pass: $R_d \ge R_{d,req}$ (or $U_D \le U_C$ with margin), and both pressure drops within their limits.`,
          answer: String.raw`$\Delta t = 69.3^\circ\mathrm{F}$, $U_D = 83.9$, $R_d = 0.0024 < 0.0035$ required; tube $\Delta P \approx 10.4 > 7$ psi; shell $\Delta P \approx 4.5$ psi → **not suitable**.` },
      ] },

    { id: "2011-12-Q2", q: 2, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2011-12-Q2a", label: "(a)", marks: "8",
          topic: "natural-convection", sub: "Grashof number; Gr/Re²",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write down the physical significance of the Grashof number. How do you relate the Grashof number to the Reynolds number?`,
          solution: String.raw`**Definition**

$$\mathrm{Gr}_L = \frac{g\beta(T_s - T_\infty)L^3}{\nu^2} = \frac{\text{buoyancy force}}{\text{viscous force}}\times\frac{\text{inertia}}{\text{viscous}}$$

**Physical significance**
- It is the ratio of buoyancy forces to viscous forces acting on the fluid. It plays the same role in natural convection that Re plays in forced convection.
- It governs the flow regime. For a vertical plate the flow turns turbulent at about $\mathrm{Gr}\,\mathrm{Pr} = \mathrm{Ra} \approx 10^9$.
- A large Gr means strong buoyancy-driven motion, a thinner boundary layer and higher $h$.

**Relation with Re (mixed convection)**

In forced flow, inertia scales as $\rho u_\infty^2/L$. In free flow the buoyancy force per unit volume is $\rho g\beta\Delta T$. Taking the ratio:

$$\frac{\mathrm{Gr}_L}{\mathrm{Re}_L^2} = \frac{g\beta\Delta T L^3/\nu^2}{(u_\infty L/\nu)^2} = \frac{g\beta\Delta T L}{u_\infty^2} = \frac{\text{buoyancy}}{\text{inertia}}$$

| $\mathrm{Gr}/\mathrm{Re}^2$ | Regime |
|---|---|
| $\ll 1$ (< 0.1) | forced convection dominates; neglect natural convection |
| $\approx 1$ (0.1–10) | mixed convection; both must be considered |
| $\gg 1$ (> 10) | natural convection dominates |

> Exam tip: $\mathrm{Gr}/\mathrm{Re}^2$ is the standard test for whether free convection can be neglected in a forced-flow problem.`,
          answer: String.raw`Gr = buoyancy/viscous force ratio (the "Re" of free convection). $\mathrm{Gr}/\mathrm{Re}^2$ = buoyancy/inertia; $\ll1$ forced, $\sim1$ mixed, $\gg1$ natural convection.` },
        { id: "2011-12-Q2b", label: "(b)", marks: "7",
          topic: "natural-convection", sub: "Rayleigh number",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q7a"],
          text: String.raw`Define the term "Rayleigh number". What is the importance of the Rayleigh number?`,
          solution: String.raw`**Definition:** the Rayleigh number is the product of the Grashof and Prandtl numbers:

$$\mathrm{Ra}_L = \mathrm{Gr}_L\,\mathrm{Pr} = \frac{g\beta(T_s - T_\infty)L_c^3}{\nu\alpha}$$

It compares the buoyancy forces with the combined effect of momentum diffusion ($\nu$) and thermal diffusion ($\alpha$).

**Importance**
- All natural-convection correlations are written as $\mathrm{Nu} = C\,\mathrm{Ra}^n$ (Holman Table 9-1, Çengel Table 9-1). Ra is the single parameter that fixes $h$ for a given geometry.
- It decides laminar vs turbulent free convection. On a vertical plate the flow is laminar for $\mathrm{Ra} < 10^9$ ($n = 1/4$) and turbulent for $\mathrm{Ra} > 10^9$ ($n = 1/3$).
- In enclosures it fixes the onset of convection. Below a critical Ra (about 1708 for a horizontal layer heated from below) heat moves by conduction only.
- Using Ra tells you which correlation and which constants $C$, $n$ to pick.`,
          answer: String.raw`$\mathrm{Ra} = \mathrm{Gr}\,\mathrm{Pr} = g\beta\Delta T L^3/(\nu\alpha)$; it sets the free-convection regime (laminar < 10⁹ < turbulent) and the correlation $\mathrm{Nu} = C\,\mathrm{Ra}^n$.` },
        { id: "2011-12-Q2c", label: "(c)", marks: "20",
          topic: "natural-convection", sub: "Vertical plate in air",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A vertical plate 0.5 m high is maintained at 120°C and its outside surface is exposed to air at 1 atm and 20°C. Calculate the heat transfer coefficient and the heat loss if the plate is 0.4 m wide. Use the correlations below (a table of air properties is attached).

$$\overline{\mathrm{Nu}} = 0.68 + \frac{0.670\,\mathrm{Ra}_L^{1/4}}{\left[1 + (0.492/\mathrm{Pr})^{9/16}\right]^{4/9}}\qquad \mathrm{Ra}_L < 10^9$$

$$\overline{\mathrm{Nu}}^{1/2} = 0.825 + \frac{0.387\,\mathrm{Ra}_L^{1/6}}{\left[1 + (0.492/\mathrm{Pr})^{9/16}\right]^{8/27}}\qquad 10^{-1} < \mathrm{Ra}_L < 10^{12}$$`,
          solution: String.raw`**Given:** $L = 0.5\,\mathrm{m}$, $W = 0.4\,\mathrm{m}$, $T_s = 120^\circ\mathrm{C}$, $T_\infty = 20^\circ\mathrm{C}$, air at 1 atm.

**Find:** $\bar h$ and $q$.

![Vertical plate, 0.5 m high and 0.4 m wide, at 120°C in air at 20°C](fig/2011-12-Q2c.svg)

**Assumptions:** steady state; one face exposed ("its outside surface"); radiation neglected; ideal gas so $\beta = 1/T_f$.

1. **Film temperature:** $T_f = (120 + 20)/2 = 70^\circ\mathrm{C} = 343\,\mathrm{K}$. Air properties (Holman Table A-5, interpolated between 300 and 350 K): $\nu = 20.07\times10^{-6}\,\mathrm{m^2/s}$, $k = 0.02951\,\mathrm{W/m\,K}$, $\mathrm{Pr} = 0.6985$, $\beta = 1/343 = 2.914\times10^{-3}\,\mathrm{K^{-1}}$.

2. **Rayleigh number**

$$\mathrm{Gr}_L = \frac{g\beta\Delta T L^3}{\nu^2} = \frac{9.81\times(1/343)\times100\times0.5^3}{(20.07\times10^{-6})^2} = 8.88\times10^{8}$$

$$\mathrm{Ra}_L = \mathrm{Gr}_L\,\mathrm{Pr} = 8.88\times10^8\times0.6985 = 6.20\times10^{8} < 10^9\ \text{(laminar)}$$

3. **Nusselt number.** $\mathrm{Ra} < 10^9$, so the first (laminar) correlation applies:

$$\overline{\mathrm{Nu}} = 0.68 + \frac{0.670\,(6.20\times10^8)^{1/4}}{\left[1 + (0.492/0.6985)^{9/16}\right]^{4/9}} = 81.7$$

$$\bar h = \frac{\overline{\mathrm{Nu}}\,k}{L} = \frac{81.7\times0.02951}{0.5} = 4.82\,\mathrm{W/m^2K}$$

4. **Heat loss**

$$q = \bar h A (T_s - T_\infty) = 4.82\times(0.5\times0.4)\times100 = 96.4\,\mathrm{W}$$

5. **Check with the second (Churchill–Chu, all-Ra) correlation:** $\overline{\mathrm{Nu}} = 105.8$, $\bar h = 6.25\,\mathrm{W/m^2K}$, $q = 125\,\mathrm{W}$. The all-range form gives a higher value near the transition; the laminar form is the better choice for $\mathrm{Ra} < 10^9$.

> If both faces are exposed, double the heat loss: $q \approx 193\,\mathrm{W}$.`,
          answer: String.raw`$\mathrm{Ra}_L = 6.2\times10^8$ (laminar); $\bar h \approx 4.8\,\mathrm{W/m^2K}$, $q \approx 96\,\mathrm{W}$ (one face). Churchill–Chu full-range form gives 6.2 W/m²K, 125 W.` },
      ] },

    { id: "2011-12-Q3", q: 3, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2011-12-Q3a", label: "(a)", marks: "10",
          topic: "condensation", sub: "Film vs dropwise condensation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss the different types of condensation processes. Which process is more preferable and why?`,
          solution: String.raw`Condensation happens when a vapour touches a surface below its saturation temperature $T_{sat}$. The latent heat $h_{fg}$ is released to the surface.

**1. Film condensation**
- The condensate wets the surface and forms a continuous liquid film that drains under gravity.
- The film thickens downstream. All heat must be conducted through it, so the film is the main thermal resistance.
- It occurs on clean, wettable surfaces and is the normal case in practice.
- It is analysed by Nusselt's theory: $h = 0.943\left[\frac{g\rho_l(\rho_l - \rho_v)h_{fg}k_l^3}{\mu_l(T_{sat} - T_s)L}\right]^{1/4}$ for a vertical plate.

**2. Dropwise condensation**
- The condensate does not wet the surface. It forms many droplets of various sizes, which grow, merge and roll off, sweeping clean surface behind them.
- Much of the surface is bare vapour–wall contact, so the resistance is very small. $h$ can be 10 times or more the film value (often $10^5\,\mathrm{W/m^2K}$ for steam).
- It is obtained with non-wetting coatings (Teflon, silicones, waxes, fatty acids) or noble-metal plating (gold, silver).

*Note:* non-condensable gases in the vapour lower $h$ sharply because they form a diffusion barrier at the interface. Condensers are vented to remove them.

| | Film | Dropwise |
|---|---|---|
| Surface | wetted, continuous film | non-wetted, droplets |
| $h$ | lower | 5–10× higher |
| Stability | sustained indefinitely | promoters wear off/oxidise |
| Design basis | yes (conservative) | rarely |

**Preferable:** dropwise condensation, because of its much higher heat transfer coefficient (smaller, cheaper condenser). It is hard to sustain over long periods, because the promoter coatings degrade. Condensers are therefore **designed assuming film condensation**, which is the conservative choice.`,
          answer: String.raw`Film (continuous wetting film, film is the resistance) vs dropwise (droplets, bare surface, $h$ 5–10× higher). Dropwise is preferable for heat transfer, but it is not sustainable, so design uses film condensation.` },
        { id: "2011-12-Q3b", label: "(b)", marks: "5",
          topic: "shell-tube", sub: "U-tube exchanger pros and cons",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the advantages and disadvantages of a U-tube type heat exchanger?`,
          solution: String.raw`A U-tube exchanger (TEMA type **BEU** in the slides) has tubes bent into a U and rolled into a **single stationary tube sheet**. There is no second tube sheet and no floating head.

**Advantages (slides)**
- It absorbs thermal-expansion stress: each tube is free to expand, so large shell/tube temperature differences need no expansion joint.
- About the same price as a fixed-tube unit, but a significant saving at high pressure (one tube sheet, fewer gasketed joints).
- The bundle can be pulled out, so the shell side and the outside of the tubes can be cleaned.

**Disadvantages (slides)**
- Cleaning the inside of the tubes is very difficult (the U-bends cannot be rodded), so the tube side should carry the clean fluid.
- Complete counterflow is possible only with an **F shell** (two-pass shell with a longitudinal baffle). In an E shell it works as a 1-2 exchanger and needs the $F_T$ correction.

**Further points (textbook)**
- Individual inner tubes are hard to replace; a failed tube is usually plugged.
- The number of tube passes is always even, and fewer tubes fit in a given shell because of the minimum bend radius.`,
          answer: String.raw`Pros: absorbs thermal expansion, same price but cheaper at high pressure, removable bundle. Cons: tube insides very hard to clean, full counterflow only with an F shell, tubes hard to replace, even passes only.` },
        { id: "2011-12-Q3c", label: "(c)", marks: "10",
          topic: "heat-exchangers", sub: "Temperature profiles with phase change",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the temperature distribution profile for a parallel-flow heat exchanger where (i) both fluids change phase, and (ii) one fluid is partially condensed.`,
          solution: String.raw`![Parallel flow: (i) both fluids change phase; (ii) one fluid partially condensed](fig/2011-12-Q3c-sol.svg)

Axes for both sketches: temperature $T$ (vertical) against length or heat transferred along the exchanger, from inlet (left) to outlet (right). In parallel flow, both fluids enter at the left.

**(i) Both fluids change phase** (e.g. condensing steam heats a boiling liquid)
- The hot fluid condenses at constant $T_{sat,h}$: a **horizontal line** at the top.
- The cold fluid boils at constant $t_{sat,c}$: a **horizontal line** lower down.
- $\Delta T = T_{sat,h} - t_{sat,c}$ is the same at every point, so the lines are parallel. Flow direction does not matter (parallel = counter, $F = 1$, LMTD = $\Delta T$).

**(ii) One fluid partially condensed** (hot vapour enters saturated and leaves as a vapour–liquid mixture; the cold fluid is sensible-heated)
- Hot side: for a pure vapour it stays at $T_{sat}$, a **horizontal line** across the whole length, with the outlet still at $T_{sat}$ (only part condensed). For a mixture or a vapour with non-condensables, the line **falls gently** from the dew point toward the bubble point as the heavier components condense first.
- Cold side: starts at $t_1$ on the left and **rises, concave down**, approaching the hot line asymptotically. The gap between the curves narrows toward the outlet. In parallel flow $t_2$ can never exceed the hot-side outlet temperature.

Label on both sketches: $T_1$, $T_2$, $t_1$, $t_2$, the $\Delta T_1$ (inlet) and $\Delta T_2$ (outlet) gaps, and the flow arrows.`,
          answer: String.raw`(i) Two parallel horizontal lines (constant ΔT). (ii) Hot line flat at $T_{sat}$ (or gently falling for a mixture); cold curve rising and approaching it asymptotically.` },
        { id: "2011-12-Q3d", label: "(d)", marks: "5",
          topic: "heat-exchangers", sub: "Fouling factor",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is a fouling factor, and why do you need to consider the fouling factor in heat exchanger design calculations?`,
          solution: String.raw`**Fouling factor (dirt factor) $R_d$:** the extra thermal resistance, per unit area, caused by deposits that build up on the heat-transfer surfaces during service. Deposits include scale, corrosion products, biological growth, coke and sediment. Units: $\mathrm{m^2K/W}$ or $\mathrm{h\,ft^2\,^\circ F/Btu}$.

$$R_f = \frac{1}{U_{dirty}} - \frac{1}{U_{clean}},\qquad \frac{1}{U_D} = \frac{1}{U_C} + R_{di}\frac{A_o}{A_i} + R_{do} \quad\Rightarrow\quad R_d = \frac{U_C - U_D}{U_C U_D}$$

(The first form is the slides' definition; the last is Kern Eq. 6.13, used in every rating problem.)

**Why it is included in design**
- A new, clean exchanger has $U_C$. After months of operation the deposits lower $U$ to $U_D$. If the exchanger were sized on $U_C$, it would soon fail to meet its duty.
- Adding $R_d$ (values from TEMA or Kern tables) gives an over-surface so that the duty is still met just before scheduled cleaning.
- It sets the cleaning schedule and affects the choice of fluid allocation: the fouling fluid goes in the tubes because they are easier to clean.
- Deposits also narrow the flow passages, which raises pressure drop.`,
          answer: String.raw`$R_d$ = added deposit resistance; designing with $1/U_D = 1/U_C + R_d$ provides surface so the duty is still met after fouling builds up.` },
        { id: "2011-12-Q3e", label: "(e)", marks: "5",
          topic: "heat-exchangers", sub: "Compact heat exchangers",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write a short note on compact heat exchangers.`,
          solution: String.raw`**Compact heat exchanger:** an exchanger with a very large heat-transfer area per unit volume. In the slides' classification by surface compactness, an exchanger is **compact if its area density exceeds 700 m²/m³** and non-compact below that (a car radiator is about 1000; ordinary shell-and-tube about 100).

- **Construction (plate-fin, slides):** alternate layers of corrugated, die-formed metal fins placed between flat separator plates. The edges of each layer are sealed with solid bars, and integral welded headers feed the streams. Tube-fin types (finned tubes) are also compact.
- **Size (slides):** small in size and weight, about **9 times more compact than shell-and-tube** exchangers.
- **Use:** mainly gas-to-gas and gas-to-liquid service. The low $h$ of the gas is offset by the large finned area. Examples: car radiators, air-conditioner evaporators and condensers, gas-turbine regenerators, aircraft and cryogenic exchangers.
- **Flow:** usually **cross-flow**, with one or both fluids unmixed (fins divide the passages).
- **Advantages:** small size and weight, high effectiveness, low fluid inventory.
- **Limitations:** narrow passages foul and are hard to clean, so they need clean fluids; pressure and temperature limits are lower; pressure drop can be high.
- **Design:** the slides give no design equations for compact units. Textbooks (Kays and London) rate them by the ε–NTU method with $j$ and $f$ charts.`,
          answer: String.raw`Area density > 700 m²/m³ (plate-fin: corrugated fins between separator plates, about 9 times more compact than shell-and-tube); small and light, cross-flow gas service (radiators, A/C coils), but foul easily and need clean fluids.` },
      ] },

    { id: "2011-12-Q4", q: 4, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2011-12-Q4a", label: "(a)", marks: "10",
          topic: "boiling", sub: "Nucleate boiling and CHF",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write a short note on nucleate boiling and critical heat flux. Why is the critical heat flux important for designing boiling heat transfer equipment?`,
          solution: String.raw`![Pool boiling curve: nucleate regime and the critical (maximum) heat flux](fig/common-boiling-curve.svg)

**Nucleate boiling** (regime between points A and C of the pool boiling curve, $\Delta T_e \approx 5$–$30^\circ\mathrm{C}$ for water at 1 atm)
- Bubbles form at nucleation sites (pits and scratches) on the heated surface.
- At low $\Delta T_e$ (isolated bubbles), bubbles collapse or rise individually. At higher $\Delta T_e$ they merge into jets and columns.
- Bubble growth and departure stir the liquid next to the wall and carry latent heat away. $h$ is very high and $q'' \propto \Delta T_e^3$.
- The heat flux is predicted by the Rohsenow correlation: $q'' = \mu_l h_{fg}\left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2}\left[\frac{c_{pl}\Delta T_e}{C_{sf}h_{fg}\mathrm{Pr}_l^n}\right]^3$.

**Critical (peak) heat flux, CHF** (point C)
- The maximum heat flux of nucleate boiling. Bubbles form so fast that a vapour blanket begins to cover the surface and stops the liquid from reaching it.
- Zuber/Lienhard: $q''_{max} = C_{cr}h_{fg}[\sigma g\rho_v^2(\rho_l - \rho_v)]^{1/4}$, with $C_{cr} = 0.149$ for large horizontal heaters. For water at 1 atm it is about $1.26\,\mathrm{MW/m^2}$.

**Why CHF matters in design**
- If the heat input is controlled (electric heaters, nuclear fuel), raising $q''$ beyond $q''_{max}$ makes the surface jump along a horizontal line to the film-boiling curve. There $\Delta T_e \approx 1000^\circ\mathrm{C}$, and the surface may melt. This is **burnout**.
- Equipment is therefore run in nucleate boiling with a safety margin below CHF. Nucleate boiling also gives the highest $h$ for the smallest $\Delta T$, so CHF sets the maximum safe heat flux and the minimum surface area.`,
          answer: String.raw`Nucleate boiling: bubbles at nucleation sites, very high $h$. CHF is its upper limit (vapour blanketing). Exceeding it under heat-flux control causes burnout, so designs keep $q''$ safely below $q''_{max}$.` },
        { id: "2011-12-Q4b", label: "(b)", marks: "7",
          topic: "boiling", sub: "Leidenfrost phenomenon",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain the Leidenfrost phenomenon.`,
          solution: String.raw`- When a liquid touches a surface much hotter than its boiling point, the part of the liquid in contact flashes into a **stable vapour film**. The liquid then floats on this vapour cushion.
- Example: water droplets on a very hot skillet (above about $200^\circ\mathrm{C}$) dance around and last for minutes. On a moderately hot pan ($\sim 120^\circ\mathrm{C}$) they boil away in seconds.
- The vapour has a low thermal conductivity, so heat transfer through the film is poor. Evaporation is slow, and the droplet's lifetime is much longer than at lower wall temperatures.
- On the boiling curve, the **Leidenfrost point** (point D) is the **minimum heat flux** $q''_{min}$ at the onset of stable film boiling. For water it is at about $\Delta T_e \approx 120$–$200^\circ\mathrm{C}$. Zuber: $q''_{min} = 0.09\rho_v h_{fg}\left[\frac{\sigma g(\rho_l - \rho_v)}{(\rho_l + \rho_v)^2}\right]^{1/4}$.
- Beyond point D, $q''$ rises again with $\Delta T_e$ as radiation through the film becomes important.
- Practical relevance: quenching of metals, cooling of hot surfaces, and burnout after CHF (the surface jumps to the stable film regime).`,
          answer: String.raw`Above the Leidenfrost point (minimum heat flux on the boiling curve), a stable vapour film insulates the liquid from the hot surface, so drops "float" and evaporate slowly.` },
        { id: "2011-12-Q4c", label: "(c)", marks: "18",
          topic: "boiling", sub: "Critical heat flux, evaporation rate",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Estimate the critical boiling flux if the diameter of the bottom of a pan is 0.5 m and the heating surface is maintained at 120°C, with water boiling on it at 1 atm. What is the maximum possible evaporation rate? (Properties of saturated water: table attached.) The correlation for critical heat flux is

$$q_c = 0.149\,h_{fg}\,\rho_v\left[\frac{\sigma g(\rho_l - \rho_v)}{\rho_v^2}\right]^{1/4}$$`,
          solution: String.raw`**Given:** $D = 0.5\,\mathrm{m}$, $T_s = 120^\circ\mathrm{C}$, water at 1 atm, so $T_{sat} = 100^\circ\mathrm{C}$ and $\Delta T_e = 20^\circ\mathrm{C}$.

**Find:** $q''_{max}$ and $\dot m_{max}$.

**Assumptions:** large horizontal heater ($C_{cr} = 0.149$); properties at $T_{sat} = 100^\circ\mathrm{C}$.

**Properties** (Çengel Table A-9, saturated water, $100^\circ\mathrm{C}$): $\rho_l = 957.9\,\mathrm{kg/m^3}$, $\rho_v = 0.5978\,\mathrm{kg/m^3}$, $h_{fg} = 2257\,\mathrm{kJ/kg}$, $\sigma = 0.0589\,\mathrm{N/m}$.

1. **Critical heat flux**

$$q''_{max} = 0.149\,h_{fg}\rho_v\left[\frac{\sigma g(\rho_l - \rho_v)}{\rho_v^2}\right]^{1/4} = 0.149\times(2257\times10^3)\times0.5978\times\left[\frac{0.0589\times9.81\times(957.9 - 0.5978)}{0.5978^2}\right]^{1/4}$$

$$q''_{max} = 1.26\times10^{6}\,\mathrm{W/m^2}$$

2. **Heat rate at CHF**

$$A = \frac{\pi D^2}{4} = \frac{\pi(0.5)^2}{4} = 0.1963\,\mathrm{m^2}, \qquad \dot Q_{max} = q''_{max}A = 1.26\times10^6\times0.1963 = 2.48\times10^{5}\,\mathrm{W}$$

3. **Maximum evaporation rate**

$$\dot m_{max} = \frac{\dot Q_{max}}{h_{fg}} = \frac{2.476\times10^5}{2257\times10^3} = 0.110\,\mathrm{kg/s} \approx 395\,\mathrm{kg/h}$$

> Note: the CHF depends only on fluid properties, not on $T_s$. $\Delta T_e = 20^\circ\mathrm{C}$ is in the nucleate regime, just below the peak at about $30^\circ\mathrm{C}$ for water. The pan's actual flux at $120^\circ\mathrm{C}$ would come from Rohsenow and is somewhat less than $q''_{max}$. The value above is the upper limit.`,
          answer: String.raw`$q''_{max} \approx 1.26\,\mathrm{MW/m^2}$; $\dot Q \approx 248\,\mathrm{kW}$; maximum evaporation $\approx 0.110\,\mathrm{kg/s}$ (≈ 395 kg/h).` },
      ] },

    { id: "2011-12-Q5", q: 5, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2011-12-Q5a", label: "(a)", marks: "10",
          topic: "intro", sub: "Thermal conductivity ranges",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Using a diagram, show the relative thermal conductivity ranges of nonmetallic crystals, pure metals, metal alloys, nonmetallic solids, liquids, insulators and gases.`,
          solution: String.raw`![Thermal conductivity ranges of material classes (log scale)](fig/2011-12-Q5a-sol.svg)

Sketch: a horizontal **logarithmic** axis of $k$ in W/m·K from about 0.01 to 1000. Each material class is drawn as a horizontal bar spanning its range (Çengel Fig. 1-24):

| Class | Typical range of $k$ (W/m·K) | Examples |
|---|---|---|
| Pure metals | 50 – 430 (up to ~1000 log end) | Cu 401, Ag 429, Al 237, Fe 80 |
| Nonmetallic crystals | 2 – 2000 | diamond ≈ 2300, graphite, SiC, quartz, BeO |
| Metal alloys | 10 – 150 | stainless steel 15, brass 110, bronze |
| Nonmetallic solids | 0.3 – 10 | oxides, rock, brick, concrete, ice 2.2, glass 0.8 |
| Liquids (nonmetallic) | 0.1 – 0.7 (Hg ≈ 8) | water 0.6, oils 0.15 |
| Insulators | 0.02 – 0.2 | fibres, foams, glass wool 0.04 |
| Gases | 0.005 – 0.2 | air 0.026, CO₂, H₂ 0.18 |

The bar order from top (highest $k$) to bottom: nonmetallic crystals and pure metals, then alloys, nonmetallic solids, liquids, insulators, gases.

**Reasons:** metals conduct by free electrons plus lattice vibrations (phonons), which gives high $k$. Crystals conduct by well-ordered phonons. Liquids and gases conduct by molecular collisions and have low $k$. Insulators use trapped air in pores.`,
          answer: String.raw`On a log scale: gases (0.01–0.2) < insulators (0.02–0.2) < liquids (0.1–1) < nonmetallic solids (0.3–10) < alloys (10–150) < pure metals (50–430) ≈ nonmetallic crystals (2–2000).` },
        { id: "2011-12-Q5b", label: "(b)", marks: "7",
          topic: "intro", sub: "Combined convection + radiation (person)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Consider a person standing in a breezy room at 20°C. Determine the total rate of heat transfer from this person if the exposed surface area and the average outer surface temperature of the person are 1.6 m² and 29°C, respectively. The convective heat transfer coefficient is 6 W/m²·K and the emissivity of the person is ε = 0.95. State the necessary assumptions.`,
          solution: String.raw`**Given:** $A_s = 1.6\,\mathrm{m^2}$, $T_s = 29^\circ\mathrm{C} = 302.15\,\mathrm{K}$, $T_\infty = 20^\circ\mathrm{C}$, $h = 6\,\mathrm{W/m^2K}$, $\varepsilon = 0.95$.

**Assumptions**
- Steady operating conditions.
- Heat conduction through the feet to the floor is negligible.
- The surrounding walls, ceiling and floor are at the room air temperature, $T_{surr} = 20^\circ\mathrm{C} = 293.15\,\mathrm{K}$.
- The room is large compared with the person, so the person behaves as a small body in a large enclosure.
- Evaporation (sweat, breathing) is not included.

1. **Convection**

$$\dot Q_{conv} = hA_s(T_s - T_\infty) = 6\times1.6\times(29 - 20) = 86.4\,\mathrm{W}$$

2. **Radiation**

$$\dot Q_{rad} = \varepsilon\sigma A_s(T_s^4 - T_{surr}^4) = 0.95\times5.67\times10^{-8}\times1.6\times(302.15^4 - 293.15^4) = 81.8\,\mathrm{W}$$

3. **Total**

$$\dot Q_{total} = 86.4 + 81.8 = 168.2\,\mathrm{W}$$

> Note: radiation is as large as convection even with a breeze. Always use absolute temperatures in the radiation term.`,
          answer: String.raw`$\dot Q_{conv} = 86.4\,\mathrm{W}$, $\dot Q_{rad} \approx 81.8\,\mathrm{W}$, total $\approx 168\,\mathrm{W}$.` },
        { id: "2011-12-Q5c", label: "(c)", marks: "12+3+3",
          topic: "conduction", sub: "3-D heat conduction equation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the general three-dimensional heat conduction equation. From this general equation, derive the equations for the following conditions: (i) steady-state one-dimensional heat flow with no heat generation; (ii) two-dimensional heat flow without heat generation.`,
          solution: String.raw`![Control volume Δx Δy Δz with conduction in and out, generation and storage](fig/2011-12-Q5c-sol.svg)

**Assumptions:** stationary, isotropic solid with density $\rho$ and specific heat $c$. Volumetric heat generation $\dot q$ (W/m³). Fourier's law holds.

**Control volume:** element $\Delta x\,\Delta y\,\Delta z$ in Cartesian coordinates.

1. **Energy balance over the time interval $\Delta t$:**

$$\begin{pmatrix}\text{heat in}\end{pmatrix} - \begin{pmatrix}\text{heat out}\end{pmatrix} + \begin{pmatrix}\text{generated}\end{pmatrix} = \begin{pmatrix}\text{change in stored energy}\end{pmatrix}$$

2. **Conduction in the x direction** (Fourier): $Q_x = -k\,\Delta y\Delta z\,\frac{\partial T}{\partial x}$. By Taylor expansion, $Q_{x+\Delta x} = Q_x + \frac{\partial Q_x}{\partial x}\Delta x$, so the net inflow in x is

$$Q_x - Q_{x+\Delta x} = -\frac{\partial Q_x}{\partial x}\Delta x = \frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right)\Delta x\Delta y\Delta z$$

The same steps give the y and z terms.

3. **Generation:** $\dot q\,\Delta x\Delta y\Delta z$.

4. **Storage:** $\rho c\,\Delta x\Delta y\Delta z\,\frac{\partial T}{\partial t}$.

5. **Sum and divide by $\Delta x\Delta y\Delta z$:**

$$\frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\left(k\frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \dot q = \rho c\frac{\partial T}{\partial t}$$

6. **Constant $k$:** with $\alpha = k/\rho c$,

$$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} + \frac{\dot q}{k} = \frac{1}{\alpha}\frac{\partial T}{\partial t}$$

This is the general 3-D heat conduction equation.

**(i) Steady, 1-D, no generation:** $\partial T/\partial t = 0$, $\dot q = 0$, T depends on x only:

$$\frac{d^2T}{dx^2} = 0 \quad\Rightarrow\quad T = C_1x + C_2\ \ \text{(linear profile)}$$

**(ii) Two-dimensional, no generation** (steady): the Laplace equation

$$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = 0$$

If the 2-D flow is unsteady: $\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = \frac{1}{\alpha}\frac{\partial T}{\partial t}$.`,
          answer: String.raw`$\nabla^2T + \dot q/k = (1/\alpha)\,\partial T/\partial t$. (i) $d^2T/dx^2 = 0$; (ii) $\partial^2T/\partial x^2 + \partial^2T/\partial y^2 = 0$ (steady).` },
      ] },

    { id: "2011-12-Q6", q: 6, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2011-12-Q6a", label: "(a)", marks: "10+5",
          topic: "conduction", sub: "Spherical shell: T(r) and Q",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Consider a spherical container of inner radius $r_1 = 8$ cm, outer radius $r_2 = 10$ cm, and thermal conductivity $k = 45$ W/m·°C. The inner and outer surfaces are maintained at constant temperatures $T_1 = 200$°C and $T_2 = 80$°C, respectively, as a result of a chemical reaction occurring inside. First derive the general relation for the temperature distribution inside the shell under steady conditions, then determine the rate of heat loss from the system.`,
          solution: String.raw`![Spherical shell r₁ = 8 cm, r₂ = 10 cm and its hyperbolic temperature profile](fig/2011-12-Q6a.svg)

**Assumptions:** steady state; one-dimensional radial conduction; constant $k$; no heat generation in the wall.

### Derivation

1. **Governing equation** (spherical coordinates, radial only):

$$\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dT}{dr}\right) = 0$$

2. **Integrate twice:**

$$r^2\frac{dT}{dr} = C_1 \Rightarrow \frac{dT}{dr} = \frac{C_1}{r^2} \Rightarrow T(r) = -\frac{C_1}{r} + C_2$$

3. **Boundary conditions:** $T(r_1) = T_1$, $T(r_2) = T_2$.

$$T_1 - T_2 = C_1\left(\frac{1}{r_2} - \frac{1}{r_1}\right) \Rightarrow C_1 = -\frac{r_1r_2(T_1 - T_2)}{r_2 - r_1}, \qquad C_2 = T_1 + \frac{C_1}{r_1}$$

4. **Temperature distribution:**

$$\boxed{\frac{T(r) - T_1}{T_2 - T_1} = \frac{1/r_1 - 1/r}{1/r_1 - 1/r_2}} \quad\text{or}\quad T(r) = \frac{r_1 r_2 (T_1 - T_2)}{(r_2 - r_1)\,r} + \frac{r_2T_2 - r_1T_1}{r_2 - r_1}$$

With numbers: $T(r) = \dfrac{48}{r} - 400$ ($^\circ\mathrm{C}$, $r$ in m). Check: $r = 0.08$ gives $200^\circ\mathrm{C}$; $r = 0.10$ gives $80^\circ\mathrm{C}$.

5. **Heat rate:**

$$\dot Q = -k\,4\pi r^2\frac{dT}{dr} = 4\pi k\,\frac{r_1r_2}{r_2 - r_1}(T_1 - T_2)$$

### Numbers

$$\dot Q = 4\pi\times45\times\frac{0.08\times0.10}{0.10 - 0.08}\times(200 - 80) = 2.71\times10^{4}\,\mathrm{W} = 27.1\,\mathrm{kW}$$`,
          answer: String.raw`$T(r) = \frac{r_1r_2(T_1 - T_2)}{(r_2 - r_1)r} + \frac{r_2T_2 - r_1T_1}{r_2 - r_1} = 48/r - 400$ °C; $\dot Q = 4\pi k r_1r_2\Delta T/(r_2 - r_1) \approx 27.1\,\mathrm{kW}$.` },
        { id: "2011-12-Q6b", label: "(b)", marks: "5",
          topic: "insulation", sub: "Superinsulation",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`What is a super insulator? Briefly discuss its mechanism.`,
          solution: String.raw`**Super insulator (superinsulation):** a multilayer insulation with an extremely low apparent thermal conductivity, about $10^{-5}$–$10^{-4}\,\mathrm{W/m\,K}$. That is roughly 100–1000 times lower than ordinary insulation and below the $k$ of still air. It is used in cryogenic storage (liquid N₂, H₂, He dewars), spacecraft and vacuum flasks.

**Construction:** many (tens of) layers of highly reflective thin sheets (aluminised Mylar or aluminium foil), separated by low-conductivity spacers (glass-fibre paper or net). The whole stack is held in a **high vacuum** (below about $10^{-4}$ torr).

**Mechanism: it blocks all three modes**
- **Convection** is eliminated by the vacuum (no gas to circulate).
- **Gas conduction** is eliminated by the vacuum; molecules are too few to carry heat.
- **Solid conduction** is minimised by the very small point contacts through the thin, low-$k$ spacers.
- **Radiation** is cut down by the many low-emissivity reflective layers. Each layer acts as a radiation shield: $n$ shields reduce radiation roughly by a factor of $n + 1$.

> Not detailed in the slides (they cover ordinary insulation and the critical radius); answer from Holman's discussion of insulation.`,
          answer: String.raw`Multilayer reflective foils with spacers in a high vacuum: vacuum stops convection and gas conduction, foils act as radiation shields, so $k_{app} \sim 10^{-5}$ W/m·K (cryogenics).` },
        { id: "2011-12-Q6c", label: "(c)", marks: "8+7",
          topic: "insulation", sub: "Critical radius: derivation + pipe",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`What is the critical thickness of insulation? Derive the equation for the critical thickness. What will happen if the thickness of insulation is greater than the critical thickness?

Calculate the critical thickness of insulation for asbestos ($k = 0.17$ W/m·°C) surrounding a pipe exposed to room air at 20°C with $h = 3$ W/m²·°C. Calculate the heat loss from a 200°C, 5.0 cm diameter pipe when covered with the critical thickness of insulation and without insulation.`,
          solution: String.raw`![Heat loss vs outer radius: maximum at the critical radius rc = k/h](fig/common-critical-radius.svg)

**Critical radius:** adding insulation to a small cylinder raises the conduction resistance, but it also enlarges the outer surface and so lowers the convection resistance. The **critical radius** $r_c$ is the outer radius at which the total resistance is a minimum, so the heat loss is a **maximum**. The critical thickness is $r_c - r_i$.

### Derivation (cylinder, length L)

1. **Assumptions:** steady state, 1-D radial; constant $k$ and $h$; pipe surface at $T_i$; the pipe wall's own resistance is neglected.

2. **Heat rate through the insulation (outer radius $r_o$) to the surroundings:**

$$q = \frac{T_i - T_\infty}{R_{tot}} = \frac{2\pi L(T_i - T_\infty)}{\dfrac{\ln(r_o/r_i)}{k} + \dfrac{1}{hr_o}}$$

3. **Set $dq/dr_o = 0$** (minimise the denominator):

$$\frac{d}{dr_o}\left[\frac{\ln(r_o/r_i)}{k} + \frac{1}{hr_o}\right] = \frac{1}{kr_o} - \frac{1}{hr_o^2} = 0 \quad\Rightarrow\quad \boxed{r_c = \frac{k}{h}}$$

The second derivative is positive at $r_c$, so the resistance is a minimum and $q$ is a **maximum**. (For a sphere, $r_c = 2k/h$.)

**If the thickness exceeds the critical thickness** (pipe radius $r_i < r_c$):
- For $r_i < r_o < r_c$, adding insulation *increases* the heat loss.
- At $r_o = r_c$ the loss is a maximum.
- For $r_o > r_c$, more insulation *decreases* the loss. The insulation only reduces loss below the bare-pipe value once $r_o$ is well beyond $r_c$.
- If $r_i > r_c$ already (large pipes), any insulation reduces the loss.

### Numbers

**Given:** $k = 0.17\,\mathrm{W/m\,^\circ C}$, $h = 3\,\mathrm{W/m^2\,^\circ C}$, $r_i = 0.025\,\mathrm{m}$, $T_i = 200^\circ\mathrm{C}$, $T_\infty = 20^\circ\mathrm{C}$. Results are per metre of pipe.

1. **Critical radius:** $r_c = k/h = 0.17/3 = 0.0567\,\mathrm{m} = 5.67\,\mathrm{cm}$.

   Critical thickness $= r_c - r_i = 5.67 - 2.5 = 3.17\,\mathrm{cm}$.

2. **With critical insulation:**

$$\frac{q}{L} = \frac{2\pi(200 - 20)}{\dfrac{\ln(0.0567/0.025)}{0.17} + \dfrac{1}{3\times0.0567}} = \frac{1131}{4.815 + 5.882} = 105.7\,\mathrm{W/m}$$

3. **Bare pipe:**

$$\frac{q}{L} = h\,2\pi r_i(T_i - T_\infty) = 3\times2\pi\times0.025\times180 = 84.8\,\mathrm{W/m}$$

The critical insulation *raises* the loss by about 25% (105.7 vs 84.8 W/m).

> Exam tip: for small pipes and wires with low $h$, $r_c = k/h$ may be larger than the pipe radius. Then a thin layer of insulation increases the heat loss, which is useful for cooling electric cables.`,
          answer: String.raw`$r_c = k/h = 5.67\,\mathrm{cm}$ → critical thickness 3.17 cm; $q = 105.7\,\mathrm{W/m}$ insulated vs $84.8\,\mathrm{W/m}$ bare (≈ 25% higher).` },
      ] },

    { id: "2011-12-Q7", q: 7, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2011-12-Q7a", label: "(a)", marks: "10",
          topic: "boundary-layer", sub: "Reynolds–Colburn analogy",
          type: "derivation", syllabus: "in", repeats: ["2014-15-Q3a", "2015-16-Q8a", "2016-17-Q8a", "2017-18-Q8a", "2020-21-Q7a", "2022-23-Q3a"],
          text: String.raw`Derive the Reynolds–Colburn analogy and state its significance in heat transfer.`,
          solution: String.raw`**Assumptions:** steady, incompressible, laminar flow over a flat plate at zero pressure gradient; constant properties; plate at uniform $T_w$.

### 1. Friction side

The laminar velocity profile and boundary-layer thickness (integral method, cubic profile) are

$$\frac{u}{u_\infty} = \frac32\frac{y}{\delta} - \frac12\left(\frac{y}{\delta}\right)^3, \qquad \delta = 4.64\sqrt{\frac{\nu x}{u_\infty}} = \frac{4.64\,x}{\mathrm{Re}_x^{1/2}}$$

The wall shear stress follows from the slope of the profile at the wall:

$$\tau_w = \mu\left.\frac{\partial u}{\partial y}\right|_{y=0} = \frac{3}{2}\frac{\mu u_\infty}{\delta}$$

The local friction coefficient is

$$C_{fx} = \frac{\tau_w}{\tfrac12\rho u_\infty^2} = \frac{3\mu}{\rho u_\infty\delta} = \frac{3}{4.64}\frac{\nu}{u_\infty x}\mathrm{Re}_x^{1/2} = \frac{0.646}{\mathrm{Re}_x^{1/2}}$$

$$\Rightarrow\quad \frac{C_{fx}}{2} = 0.323\,\mathrm{Re}_x^{-1/2}$$

### 2. Heat-transfer side

Take the analogous cubic temperature profile, with $\theta = T - T_w$ and $\theta_\infty = T_\infty - T_w$:

$$\frac{\theta}{\theta_\infty} = \frac32\frac{y}{\delta_t} - \frac12\left(\frac{y}{\delta_t}\right)^3$$

Substituting both profiles in the integral energy equation $\frac{d}{dx}\int_0^{\delta_t}(T_\infty - T)u\,dy = \alpha\left.\frac{\partial T}{\partial y}\right|_0$ with $\zeta = \delta_t/\delta < 1$ gives

$$\zeta^3 \approx \frac{13}{14}\frac{1}{\mathrm{Pr}} \quad\Rightarrow\quad \frac{\delta_t}{\delta} = \frac{\mathrm{Pr}^{-1/3}}{1.026}$$

The local coefficient is

$$h_x = \frac{-k(\partial T/\partial y)_0}{T_w - T_\infty} = \frac{3k}{2\delta_t}$$

Hence

$$\mathrm{Nu}_x = \frac{h_x x}{k} = \frac{3}{2}\frac{x}{\delta_t} = \frac{3}{2}\frac{1.026\,\mathrm{Pr}^{1/3}}{4.64}\mathrm{Re}_x^{1/2} = 0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$$

### 3. Stanton number and the analogy

$$\mathrm{St}_x = \frac{h_x}{\rho c_p u_\infty} = \frac{\mathrm{Nu}_x}{\mathrm{Re}_x\mathrm{Pr}} = 0.332\,\mathrm{Re}_x^{-1/2}\mathrm{Pr}^{-2/3}$$

$$\mathrm{St}_x\,\mathrm{Pr}^{2/3} = 0.332\,\mathrm{Re}_x^{-1/2}$$

Compare with $C_{fx}/2 = 0.323\,\mathrm{Re}_x^{-1/2}$. The constants agree to within 3% (the exact Blasius value is 0.332 for both), so

$$\boxed{\mathrm{St}_x\,\mathrm{Pr}^{2/3} = \frac{C_{fx}}{2}}$$

This is the **Reynolds–Colburn analogy**. It also holds for the plate averages, $\overline{\mathrm{St}}\,\mathrm{Pr}^{2/3} = \bar C_f/2$. It is valid for $0.6 < \mathrm{Pr} < 60$ and also applies to turbulent flat-plate flow. For $\mathrm{Pr} = 1$ it reduces to Reynolds' original analogy, $\mathrm{St} = C_f/2$.

**Significance**
- It links momentum transfer (friction) and heat transfer. A measured or known friction coefficient (or pressure drop) gives $h$ without separate heat-transfer experiments, and vice versa.
- It shows that the mechanisms are the same: anything that raises wall shear also raises heat transfer, as long as the friction is pure skin friction. It does not apply to form drag, for example on bluff bodies.
- The factor $\mathrm{Pr}^{2/3}$ corrects Reynolds' analogy for fluids whose thermal and velocity boundary layers differ in thickness.`,
          answer: String.raw`$\mathrm{St}_x\,\mathrm{Pr}^{2/3} = C_{fx}/2$ (laminar flat plate; extended to turbulent flow and averages). It gives $h$ from friction data.` },
        { id: "2011-12-Q7b", label: "(b)", marks: "15",
          topic: "convection-basics", sub: "Laminar tube flow temperature profile",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the temperature distribution equation for heat transfer in laminar tube flow.`,
          solution: String.raw`**Assumptions**
- Steady, laminar, incompressible flow with constant properties.
- Hydrodynamically and thermally **fully developed**. The wall has a **constant heat flux**, so $\partial T/\partial x$ is constant, the same at every $r$.
- Axial conduction is negligible compared with axial convection. There is no viscous dissipation.

**Velocity profile** (Hagen–Poiseuille, $u_0$ = centreline velocity):

$$u = u_0\left[1 - \left(\frac{r}{r_0}\right)^2\right]$$

1. **Energy balance on an annular ring** (radius r, thickness dr, length dx). Net radial conduction equals the axial enthalpy carried out:

$$\text{conduction in at } r: \quad dq_r = -k\,2\pi r\,dx\,\frac{\partial T}{\partial r}$$

$$\text{net conduction} = \frac{\partial}{\partial r}\left(k\,2\pi r\,dx\,\frac{\partial T}{\partial r}\right)dr = \rho c_p u\,2\pi r\,dr\,\frac{\partial T}{\partial x}dx$$

2. **Simplify** with $\alpha = k/\rho c_p$:

$$\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) = \frac{u}{\alpha}\frac{\partial T}{\partial x}$$

3. **Insert u** with $\partial T/\partial x$ constant:

$$\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) = \frac{1}{\alpha}\frac{\partial T}{\partial x}u_0\left(r - \frac{r^3}{r_0^2}\right)$$

4. **Integrate once:**

$$r\frac{\partial T}{\partial r} = \frac{1}{\alpha}\frac{\partial T}{\partial x}u_0\left(\frac{r^2}{2} - \frac{r^4}{4r_0^2}\right) + C_1$$

5. **Integrate again:**

$$T = \frac{1}{\alpha}\frac{\partial T}{\partial x}u_0\left(\frac{r^2}{4} - \frac{r^4}{16r_0^2}\right) + C_1\ln r + C_2$$

6. **Boundary conditions**
- $\partial T/\partial r = 0$ at $r = 0$ (symmetry; finite T), so $C_1 = 0$.
- $T = T_c$ (centreline temperature) at $r = 0$, so $C_2 = T_c$.

7. **Result:**

$$\boxed{T - T_c = \frac{1}{\alpha}\frac{\partial T}{\partial x}\frac{u_0 r_0^2}{4}\left[\left(\frac{r}{r_0}\right)^2 - \frac{1}{4}\left(\frac{r}{r_0}\right)^4\right]}$$

At the wall: $T_w - T_c = \frac{3}{16}\frac{u_0r_0^2}{\alpha}\frac{\partial T}{\partial x}$.

Using this with the bulk temperature (see Q8c, $T_b - T_c = \frac{7}{96}\frac{u_0r_0^2}{\alpha}\frac{\partial T}{\partial x}$) gives $h = q_w/(T_w - T_b)$. The result is $\mathrm{Nu}_D = 48/11 = 4.364$ for constant heat flux.`,
          answer: String.raw`$T - T_c = \frac{1}{\alpha}\frac{\partial T}{\partial x}\frac{u_0r_0^2}{4}\left[(r/r_0)^2 - \tfrac14(r/r_0)^4\right]$, which leads to $\mathrm{Nu} = 4.364$ (constant $q''$).` },
        { id: "2011-12-Q7c", label: "(c)", marks: "10",
          topic: "forced-convection", sub: "Electrically heated tube: power, T_s exit",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Water is to be heated from 15°C to 65°C as it flows through a 3 cm internal diameter, 5 m long tube. The tube is equipped with an electric resistance heater that provides uniform heating throughout the surface of the tube. The outer surface of the heater is well insulated, so at steady state all the heat generated in the heater is transferred to the water in the tube. If the system is to provide hot water at a rate of 10 L/min, determine the power rating of the resistance heater. Also estimate the inner surface temperature of the tube at the exit.

Fluid properties at the bulk temperature: $\rho = 992.1$ kg/m³, $k = 0.631$ W/m·°C, $\nu = 0.658\times10^{-6}$ m²/s, $c_p = 4179$ J/kg·°C, Pr = 4.32.`,
          solution: String.raw`**Given:** $D = 0.03\,\mathrm{m}$, $L = 5\,\mathrm{m}$, $T_{b,i} = 15^\circ\mathrm{C}$, $T_{b,e} = 65^\circ\mathrm{C}$, $\dot V = 10\,\mathrm{L/min}$, properties at $T_b = 40^\circ\mathrm{C}$ (given).

**Find:** heater power $\dot Q$; $T_s$ at the exit.

![Uniformly heated tube: Tm rises linearly, Ts stays a constant q″/h above it](fig/2011-12-Q7c.svg)

**Assumptions:** steady state; uniform surface heat flux; fully developed flow at the exit; smooth tube.

1. **Mass flow and heat rate**

$$\dot m = \rho\dot V = 992.1\times\frac{10\times10^{-3}}{60} = 0.1654\,\mathrm{kg/s}$$

$$\dot Q = \dot m c_p(T_e - T_i) = 0.1654\times4179\times(65 - 15) = 3.45\times10^{4}\,\mathrm{W} = 34.5\,\mathrm{kW}$$

2. **Surface heat flux**

$$q''_s = \frac{\dot Q}{\pi DL} = \frac{34{,}550}{\pi\times0.03\times5} = 7.33\times10^{4}\,\mathrm{W/m^2}$$

3. **Reynolds number**

$$V = \frac{\dot V}{\pi D^2/4} = \frac{1.667\times10^{-4}}{7.069\times10^{-4}} = 0.236\,\mathrm{m/s}, \qquad \mathrm{Re} = \frac{VD}{\nu} = \frac{0.236\times0.03}{0.658\times10^{-6}} = 10{,}750$$

The flow is turbulent. The entry length is about $10D = 0.3\,\mathrm{m} \ll 5\,\mathrm{m}$ ($L/D = 167$), so the flow is fully developed at the exit.

4. **h by Dittus–Boelter** (heating, $n = 0.4$; valid for $\mathrm{Re} > 10^4$ and $0.6 < \mathrm{Pr} < 160$):

$$\mathrm{Nu} = 0.023\,\mathrm{Re}^{0.8}\mathrm{Pr}^{0.4} = 0.023\times(10{,}750)^{0.8}\times(4.32)^{0.4} = 69.4$$

$$h = \frac{\mathrm{Nu}\,k}{D} = \frac{69.4\times0.631}{0.03} = 1459\,\mathrm{W/m^2K}$$

5. **Surface temperature at the exit**

$$T_{s,e} = T_{b,e} + \frac{q''_s}{h} = 65 + \frac{73{,}317}{1459} = 115^\circ\mathrm{C}$$

> Note: with constant $q''$, $T_s - T_b$ stays constant in the fully developed region, so $T_s$ is highest at the exit. Here the water would boil at the wall unless the system is pressurised.`,
          answer: String.raw`$\dot Q \approx 34.5\,\mathrm{kW}$; Re ≈ 10,750, $h \approx 1460\,\mathrm{W/m^2K}$; $T_{s,exit} \approx 115^\circ\mathrm{C}$.` },
      ] },

    { id: "2011-12-Q8", q: 8, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2011-12-Q8a", label: "(a)", marks: "10",
          topic: "boundary-layer", sub: "Prandtl mixing length",
          type: "derivation", syllabus: "out", repeats: [],
          text: String.raw`What is the Prandtl mixing length? Derive the relationship between the Prandtl mixing length and the eddy diffusivity.`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

**Mixing length $\ell$:** in turbulent flow, eddies carry lumps of fluid across the stream. Prandtl assumed that a lump moves a transverse distance $\ell$ (the mixing length) while keeping its original x-momentum, and then mixes with its new surroundings. The mixing length is the turbulent analogue of the mean free path in kinetic theory.

**Derivation**

1. **Turbulent shear stress.** Write $u = \bar u + u'$, $v = v'$. The Reynolds stress is

$$\tau_t = -\rho\,\overline{u'v'} = \rho\,\varepsilon_M\frac{d\bar u}{dy}$$

This defines the eddy diffusivity of momentum, $\varepsilon_M$.

2. **Velocity fluctuation.** A lump displaced by $\ell$ arrives with a velocity that differs from the local mean by

$$|u'| \approx \ell\left|\frac{d\bar u}{dy}\right|$$

3. **Transverse fluctuation.** Continuity requires $|v'|$ to be of the same order: $|v'| \approx \ell\left|\frac{d\bar u}{dy}\right|$ (constants absorbed into $\ell$).

4. **Combine:**

$$\tau_t = \rho\,\ell^2\left|\frac{d\bar u}{dy}\right|\frac{d\bar u}{dy}$$

5. **Compare with the definition of $\varepsilon_M$:**

$$\boxed{\varepsilon_M = \ell^2\left|\frac{d\bar u}{dy}\right|}$$

6. **Heat.** Similarly, $q_t = -\rho c_p\overline{v'T'} = -\rho c_p\varepsilon_H\frac{d\bar T}{dy}$ with $\varepsilon_H \approx \varepsilon_M$ (turbulent Pr ≈ 1). Near a wall, $\ell = \kappa y$ ($\kappa \approx 0.4$), which leads to the logarithmic velocity profile.`,
          answer: String.raw`$\ell$ = distance a turbulent lump travels before mixing; $\tau_t = \rho\ell^2|d\bar u/dy|\,d\bar u/dy$ gives $\varepsilon_M = \ell^2|d\bar u/dy|$ (and $\varepsilon_H \approx \varepsilon_M$).` },
        { id: "2011-12-Q8b", label: "(b)", marks: "10",
          topic: "boundary-layer", sub: "Thermal boundary layer on a flat plate",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Describe the thermal boundary layer formation for forced convection on an isothermal flat plate. Indicate the relative thickness of the hydrodynamic and thermal boundary layers for common fluids.`,
          solution: String.raw`![Relative thickness of the velocity (δ) and thermal (δt) boundary layers](fig/2011-12-Q8b-sol.svg)

**Formation**
- Fluid at uniform $T_\infty$ and $u_\infty$ meets a plate held at $T_s$, starting at the leading edge (x = 0).
- Fluid particles touching the plate reach thermal equilibrium with it ($T = T_s$ at $y = 0$, no-slip). They exchange energy with the next layer, and temperature gradients develop in the fluid.
- The region where $T$ changes from $T_s$ to $T_\infty$ is the **thermal boundary layer**. Its thickness $\delta_t$ is the distance $y$ at which $\frac{T - T_s}{T_\infty - T_s} = 0.99$.
- $\delta_t$ grows with x as heat diffuses further into the stream. Because the gradient at the wall is steepest near the leading edge, the local $h_x = -k(\partial T/\partial y)_{y=0}/(T_s - T_\infty)$ is largest there and falls as $x^{-1/2}$ (laminar).
- Sketch: plate along the x axis. A velocity layer $\delta(x)$ and a thermal layer $\delta_t(x)$ both grow like $\sqrt x$ from the leading edge, with temperature profiles drawn from $T_s$ at the wall to $T_\infty$ at the edge.

**Relative thickness: set by Pr = ν/α**

Integral analysis with cubic profiles gives

$$\frac{\delta_t}{\delta} = \frac{1}{1.026}\mathrm{Pr}^{-1/3}\approx \mathrm{Pr}^{-1/3}, \qquad \delta = 4.64\sqrt{\frac{\nu x}{u_\infty}}$$

| Fluid | Pr | $\delta_t$ vs $\delta$ |
|---|---|---|
| Gases (air) | ≈ 0.7–1 | $\delta_t \approx \delta$ (slightly thicker) |
| Water | 1.7–13 | $\delta_t < \delta$ |
| Oils | 10²–10⁵ | $\delta_t \ll \delta$ |
| Liquid metals | 0.004–0.03 | $\delta_t \gg \delta$ |

Pr = 1 means momentum and heat diffuse at the same rate, so the two layers coincide.`,
          answer: String.raw`Thermal BL: region where T goes from $T_s$ to $T_\infty$, growing like $\sqrt x$. $\delta_t/\delta \approx \mathrm{Pr}^{-1/3}/1.026$: ≈ equal for gases, thinner for water and oils, much thicker for liquid metals.` },
        { id: "2011-12-Q8c", label: "(c)", marks: "5+10",
          topic: "convection-basics", sub: "Bulk (mixing-cup) temperature",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`What is the bulk temperature? Why is it called the "mixing cup" temperature? Determine the bulk temperature for laminar flow in a tube, given the temperature distribution

$$T - T_c = \frac{1}{\alpha}\frac{\partial T}{\partial x}\frac{u_0 r_0^2}{4}\left[\left(\frac{r}{r_0}\right)^2 - \frac{1}{4}\left(\frac{r}{r_0}\right)^4\right]$$

All terms have their usual meanings.`,
          solution: String.raw`**Bulk temperature:** the energy-averaged (flow-weighted) temperature of the fluid over the cross-section. It is the temperature that, multiplied by $\dot m c_p$, gives the actual rate of enthalpy flow:

$$T_b = \frac{\int_A \rho c_p u T\,dA}{\int_A \rho c_p u\,dA} = \frac{\int_0^{r_0} uT\,r\,dr}{\int_0^{r_0}u\,r\,dr}$$

**Why "mixing cup":** if the fluid leaving the tube at a section were collected in a cup and mixed thoroughly (adiabatically), it would reach a uniform temperature equal to $T_b$. It is the temperature used in $q = \dot m c_p\Delta T_b$ and in $h = q''/(T_w - T_b)$.

### Bulk temperature for laminar flow

1. **Profiles:** let $\eta = r/r_0$ and $A \equiv \frac{1}{\alpha}\frac{\partial T}{\partial x}\frac{u_0 r_0^2}{4}$. Then

$$u = u_0(1 - \eta^2), \qquad T - T_c = A\left(\eta^2 - \tfrac14\eta^4\right)$$

2. **Bulk temperature relative to the centreline:**

$$T_b - T_c = \frac{\int_0^1 u_0(1 - \eta^2)\,A\left(\eta^2 - \tfrac14\eta^4\right)\eta\,d\eta}{\int_0^1 u_0(1 - \eta^2)\eta\,d\eta}$$

3. **Numerator integral:**

$$\int_0^1\left(\eta^3 - \tfrac54\eta^5 + \tfrac14\eta^7\right)d\eta = \frac14 - \frac{5}{24} + \frac{1}{32} = \frac{7}{96}$$

4. **Denominator integral:**

$$\int_0^1(\eta - \eta^3)\,d\eta = \frac12 - \frac14 = \frac14$$

5. **Result:**

$$T_b - T_c = A\,\frac{7/96}{1/4} = \frac{7}{24}A \quad\Rightarrow\quad \boxed{T_b = T_c + \frac{7}{96}\,\frac{u_0 r_0^2}{\alpha}\frac{\partial T}{\partial x}}$$

6. **Use:** at the wall, $T_w - T_c = \frac34 A = \frac{3}{16}\frac{u_0r_0^2}{\alpha}\frac{\partial T}{\partial x}$, so $T_w - T_b = \frac{11}{96}\frac{u_0r_0^2}{\alpha}\frac{\partial T}{\partial x}$. Then $h = q_w/(T_w - T_b)$ gives $\mathrm{Nu}_D = 48/11 = 4.364$.`,
          answer: String.raw`$T_b = \int uT\,dA/\int u\,dA$ (the temperature of the fluid if mixed in a cup); for laminar flow $T_b = T_c + \frac{7}{96}\frac{u_0r_0^2}{\alpha}\frac{\partial T}{\partial x}$.` },
      ] },
  ]
});
