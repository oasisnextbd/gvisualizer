QB.paper({ year: "Practice", set: "Forced convection correlations", date: "", marks: 0, practice: true,
  rules: String.raw`Internal forced convection: Dittus–Boelter, Sieder–Tate (turbulent and laminar), the Nusselt entrance correlation, Hausen, constant wall temperature vs constant heat flux, iteration for the outlet temperature, hydraulic diameter for ducts and annuli, laminar Nu constants and liquid metals. Slide-type problems first (S), then likely final-exam problems (F).`,
  questions: [
    { id: "practice-forced-convection-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw`Air at 2 atm and 200°C is heated as it flows through a tube with a diameter of 1 in (2.54 cm) at a velocity of 10 m/s. A constant-heat-flux condition is maintained at the wall, and the wall temperature is 20°C above the air temperature all along the length of the tube. Air properties at the bulk temperature 200°C: Pr = 0.681, $\mu = 2.57\times10^{-5}$ kg/m·s, $k = 0.0386$ W/m·°C, $c_p = 1.025$ kJ/kg·°C.`,
      parts: [
        { id: "practice-forced-convection-P1a", label: "(a)", marks: "", topic: "forced-convection",
          sub: "Turbulent tube flow, constant flux: Dittus–Boelter (slide example)", type: "numerical",
          syllabus: "in", repeats: ["2016-17-Q8b"], origin: "slides", ref: String.raw`Slides 06, pp. 14–17 (air at 2 atm, 200°C, 1 in tube)`,
          text: String.raw`Calculate the heat transfer per unit length of tube.`,
          solution: String.raw`**Given:** p = 2 atm, $T_b = 473$ K, d = 0.0254 m, $u_m = 10$ m/s, $T_w - T_b = 20$°C (constant flux).

![Constant-flux tube: wall and bulk temperatures rise in parallel, 20°C apart](fig/practice-forced-convection-P1.svg)

**Assumptions:** fully developed turbulent flow, smooth tube, moderate ΔT, so Dittus–Boelter applies with n = 0.4 (the gas is heated).

1. **Density** (ideal gas):
$$\rho = \frac{p}{RT} = \frac{2(1.0132\times10^5)}{287(473)} = 1.493\,\mathrm{kg/m^3}$$
2. **Reynolds number:**
$$\mathrm{Re}_d = \frac{\rho u_md}{\mu} = \frac{1.493(10)(0.0254)}{2.57\times10^{-5}} = 14\,756 \quad(\text{turbulent})$$
3. **Dittus–Boelter:**
$$\mathrm{Nu}_d = 0.023\,\mathrm{Re}_d^{0.8}\mathrm{Pr}^{0.4} = 0.023(14\,756)^{0.8}(0.681)^{0.4} = 42.67$$
Validity: 0.6 < Pr < 100 ✓, 2500 < Re < $1.25\times10^5$ ✓, ΔT only 20°C ✓.
4. **Heat-transfer coefficient:**
$$h = \frac{k}{d}\mathrm{Nu}_d = \frac{0.0386(42.67)}{0.0254} = 64.85\,\mathrm{W/m^2\cdot^\circ C}$$
5. **Heat flow per unit length:**
$$\frac{q}{L} = h\pi d(T_w - T_b) = 64.85\pi(0.0254)(20) = 103.5\,\mathrm{W/m}$$`,
          answer: String.raw`ρ = 1.493 kg/m³, Re = 14 756, Nu = 42.7, h = 64.85 W/m²·°C, so q/L = 103.5 W/m.` },
        { id: "practice-forced-convection-P1b", label: "(b)", marks: "", topic: "forced-convection",
          sub: "Bulk-temperature rise from an energy balance", type: "numerical",
          syllabus: "in", repeats: ["2016-17-Q8b"], origin: "slides", ref: String.raw`Slides 06, p. 18`,
          text: String.raw`How much would the bulk temperature increase over a 3 m length of the tube?`,
          solution: String.raw`1. **Mass flow:**
$$\dot m = \rho u_m\frac{\pi d^2}{4} = 1.493(10)\frac{\pi(0.0254)^2}{4} = 7.565\times10^{-3}\,\mathrm{kg/s}$$
2. **Energy balance:**
$$q = \dot mc_p\Delta T_b = L\left(\frac{q}{L}\right) \Rightarrow (7.565\times10^{-3})(1025)\Delta T_b = 3.0(103.5)$$
$$\Delta T_b = 40.0^\circ\mathrm{C}$$

**Note:** with constant flux the bulk temperature rises linearly, and $T_w - T_b$ stays at 20°C all along the developed tube, as stated. Over 3 m the mean bulk temperature changes by about 20°C, so the properties at 200°C are only approximate. A careful solution would re-evaluate them at about 220°C.`,
          answer: String.raw`$\dot m = 7.565\times10^{-3}$ kg/s, so $\Delta T_b = 3(103.5)/(\dot mc_p) = 40.0$°C.` }
      ] },

    { id: "practice-forced-convection-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-forced-convection-P2", label: "", marks: "", topic: "forced-convection",
          sub: "Laminar tube flow, constant wall T: Sieder–Tate with iteration (slide example)", type: "numerical",
          syllabus: "in", repeats: ["2020-21-Q6c"], origin: "slides", ref: String.raw`Slides 06, pp. 19–24 (water at 60°C, 2 cm/s, 1 in tube, 3 m, wall at 80°C)`,
          text: String.raw`Water at 60°C enters a tube of 1 in (2.54 cm) diameter at a mean flow velocity of 2 cm/s. Calculate the exit water temperature if the tube is 3.0 m long and the wall temperature is constant at 80°C.

Water at 60°C: $\rho = 985$ kg/m³, $c_p = 4.18$ kJ/kg·°C, $\mu = 4.71\times10^{-4}$ kg/m·s, $k = 0.651$ W/m·°C, Pr = 3.02. At 66°C: $\rho = 982$, $c_p = 4185$, $\mu = 4.36\times10^{-4}$, $k = 0.656$, Pr = 2.78. At the wall (80°C): $\mu_w = 3.55\times10^{-4}$ kg/m·s.`,
          solution: String.raw`**Given:** d = 0.0254 m, $u_m = 0.02$ m/s, L = 3.0 m, $T_{b1} = 60$°C, $T_w = 80$°C (constant).

**Find:** $T_{b2}$.

![Laminar water flow with the wall at 80°C](fig/practice-forced-convection-P2.svg)

**Iteration 1** (properties at the inlet, 60°C, since $T_{b2}$ is unknown):
1. Regime:
$$\mathrm{Re}_d = \frac{\rho u_md}{\mu} = \frac{985(0.02)(0.0254)}{4.71\times10^{-4}} = 1062 \quad(\text{laminar})$$
$$\mathrm{Re}_d\mathrm{Pr}\frac{d}{L} = \frac{1062(3.02)(0.0254)}{3} = 27.15 > 10$$
So the Sieder–Tate laminar correlation (constant wall temperature) applies.
2. Sieder–Tate:
$$\overline{\mathrm{Nu}}_d = 1.86\left(\mathrm{Re}_d\mathrm{Pr}\frac{d}{L}\right)^{1/3}\left(\frac{\mu}{\mu_w}\right)^{0.14} = 1.86(27.15)^{1/3}\left(\frac{4.71}{3.55}\right)^{0.14} = 5.816$$
$$\bar h = \frac{k\overline{\mathrm{Nu}}_d}{d} = \frac{0.651(5.816)}{0.0254} = 149.1\,\mathrm{W/m^2\cdot^\circ C}$$
3. Energy balance. Sieder–Tate's h is based on the **arithmetic-mean** temperature difference:
$$q = \bar h\pi dL\left(T_w - \frac{T_{b1} + T_{b2}}{2}\right) = \dot mc_p(T_{b2} - T_{b1}) \qquad [a]$$
$$\dot m = \rho\frac{\pi d^2}{4}u_m = 985\frac{\pi(0.0254)^2}{4}(0.02) = 9.982\times10^{-3}\,\mathrm{kg/s}$$
$$(149.1)\pi(0.0254)(3.0)\left(80 - \frac{T_{b2} + 60}{2}\right) = (9.982\times10^{-3})(4180)(T_{b2} - 60)$$
$$35.69(50 - T_{b2}/2) = 41.73(T_{b2} - 60) \Rightarrow T_{b2} = 71.98^\circ\mathrm{C}$$

**Iteration 2** (properties at $T_{b,mean} = (60 + 71.98)/2 = 66$°C):
4. $\mathrm{Re}_d = 1062(4.71/4.36) = 1147$ (scaled by viscosity, as on the slides), and
$$\mathrm{Re\,Pr}\frac{d}{L} = \frac{1147(2.78)(0.0254)}{3} = 27.0$$
5. $\overline{\mathrm{Nu}}_d = 1.86(27.0)^{1/3}(4.36/3.55)^{0.14} = 5.743$, so $\bar h = 0.656(5.743)/0.0254 = 148.3\,\mathrm{W/m^2\cdot^\circ C}$
6. Inserting this h into [a] gives $T_{b2} = 71.9$°C. The slides quote 71.88°C; re-solving [a] with $\dot m$ and $c_p$ at 66°C gives 71.95°C, so the difference is rounding only.

**Result:** $T_{b2} \approx 71.9$°C and $q = \dot mc_p\Delta T_b \approx 9.98\times10^{-3}(4180)(11.9) \approx 0.50$ kW. The second iteration changed $T_{b2}$ by less than 0.1°C, so the solution has converged.

**Exam tip:** check $\mathrm{Re\,Pr}\,d/L > 10$ before using $1.86(\cdots)^{1/3}$, and use the arithmetic-mean ΔT in the energy balance, because that is how this correlation is defined.`,
          answer: String.raw`Re = 1062 (laminar), Re Pr d/L = 27.2, Nu = 5.82, h = 149 W/m²·°C, $T_{b2} = 72.0$°C; with properties at 66°C, h = 148.3 W/m²·°C and $T_{b2} \approx 71.9$°C.` }
      ] },

    { id: "practice-forced-convection-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-forced-convection-P3", label: "", marks: "", topic: "forced-convection",
          sub: "Turbulent entrance region, constant flux: Nu_x/Nu∞ from the chart (slide example)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 06, pp. 26–30 (air at 300 K, 40 m/s, 2 cm × 10 cm tube; Fig. 6-6)`,
          text: String.raw`Air at 300 K and 1 atm enters a smooth tube having a diameter of 2 cm and a length of 10 cm. The air velocity is 40 m/s. What constant heat flux must be applied at the tube surface to give an air temperature rise of 5°C? What average wall temperature would be needed? Air at 300 K: $\nu = 15.69\times10^{-6}$ m²/s, $k = 0.02624$ W/m·°C, Pr = 0.7, $c_p = 1006$ J/kg·°C, $\rho = 1.18$ kg/m³.`,
          solution: String.raw`**Given:** d = 0.02 m, L = 0.10 m (L/d = 5), $u_m = 40$ m/s, $\Delta T_b = 5$°C, constant flux.

![Short tube (L/d = 5) with constant flux: thermal entrance region](fig/practice-forced-convection-P3.svg)

**Assumptions:** smooth tube, properties at 300 K (ΔT_b is small).

1. **Regime:**
$$\mathrm{Re}_d = \frac{u_md}{\nu} = \frac{40(0.02)}{15.69\times10^{-6}} = 50\,988 \quad(\text{turbulent})$$
2. **Entrance effect:** L/d = 5 is short, so thermal entrance effects matter. The Nusselt entrance correlation needs 10 < L/d < 400, so it cannot be used. From the turbulent thermal-entry chart (Fig. 6-6, constant $q_w$) at Re = $5\times10^4$, Pr = 0.7, x/d = 5:
$$\frac{\mathrm{Nu}_x}{\mathrm{Nu}_\infty} \approx 1.15$$
i.e. h is about 15% above its fully developed value.
3. **Fully developed value** (Dittus–Boelter, heating):
$$\mathrm{Nu}_d = 0.023(50\,988)^{0.8}(0.7)^{0.4} = 116.3,\qquad h_\infty = \frac{0.02624(116.3)}{0.02} = 152.6\,\mathrm{W/m^2\cdot^\circ C}$$
$$h = 1.15(152.6) = 175.5\,\mathrm{W/m^2\cdot^\circ C}$$
4. **Heat required:**
$$\dot m = \rho u_m\frac{\pi d^2}{4} = 1.18(40)\frac{\pi(0.02)^2}{4} = 0.0148\,\mathrm{kg/s},\qquad q = \dot mc_p\Delta T_b = 0.0148(1006)(5) = 74.4\,\mathrm{W}$$
5. **Heat flux:**
$$A = \pi dL = \pi(0.02)(0.1) = 0.0628\,\mathrm{m^2},\qquad \frac{q}{A} = \frac{74.4}{0.0628} = 11\,841\,\mathrm{W/m^2} = h(T_w - T_b)$$
6. **Average wall temperature:** $\bar T_b = (300 + 305)/2 = 302.5$ K, so
$$\bar T_w = \bar T_b + \frac{11\,841}{175.5} = 302.5 + 67.5 = 370\,\mathrm{K}$$`,
          answer: String.raw`Re = 50 988; $\mathrm{Nu}_\infty = 116.3$; h = 1.15 × 152.6 = 175.5 W/m²·°C; q = 74.4 W, q/A ≈ 11 840 W/m², so $\bar T_w \approx 370$ K.` }
      ] },

    { id: "practice-forced-convection-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw`Oil at 20°C flows in a 30 cm diameter pipeline at an average velocity of 2 m/s. A 200 m long section of the pipeline passes through the icy waters of a lake at 0°C, and measurements show that the pipe surface is very nearly at 0°C. Disregard the thermal resistance of the pipe material. Oil properties at 20°C: $\rho = 888$ kg/m³, $\nu = 901\times10^{-6}$ m²/s, $k = 0.145$ W/m·°C, $c_p = 1880$ J/kg·°C, Pr = 10 400.`,
      parts: [
        { id: "practice-forced-convection-P4a", label: "(a)", marks: "", topic: "forced-convection",
          sub: "Laminar thermally developing flow: oil pipeline through a lake (slide example)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 06, pp. 31–33 (oil pipeline through a lake)`,
          text: String.raw`Determine the temperature of the oil when the pipe leaves the lake.`,
          solution: String.raw`**Given:** D = 0.3 m, L = 200 m, $V_m = 2$ m/s, $T_i = 20$°C, $T_s = 0$°C (constant).

![Oil pipeline crossing 200 m of lake at 0°C](fig/practice-forced-convection-P4.svg)

**Assumptions:** steady flow; properties at 20°C (checked afterwards).

1. **Regime:**
$$\mathrm{Re} = \frac{V_mD}{\nu} = \frac{2(0.3)}{901\times10^{-6}} = 666 < 2300 \quad(\text{laminar})$$
2. **Thermal entry length:**
$$L_t \approx 0.05\,\mathrm{Re\,Pr}\,D = 0.05(666)(10\,400)(0.3) \approx 104\,000\,\mathrm{m} \gg 200\,\mathrm{m}$$
The flow is thermally developing over the whole section, as is typical of high-Pr fluids. Use the laminar entrance relation for constant wall temperature (Hausen form, with 0.065 as on the slide):
$$\mathrm{Nu} = 3.66 + \frac{0.065(D/L)\mathrm{Re\,Pr}}{1 + 0.04[(D/L)\mathrm{Re\,Pr}]^{2/3}}$$
with $(D/L)\mathrm{Re\,Pr} = (0.3/200)(666)(10\,400) = 10\,388$:
$$\mathrm{Nu} = 3.66 + \frac{0.065(10\,388)}{1 + 0.04(10\,388)^{2/3}} = 37.3$$
3. **Heat-transfer coefficient:**
$$h = \frac{k}{D}\mathrm{Nu} = \frac{0.145}{0.3}(37.3) = 18.0\,\mathrm{W/m^2\cdot^\circ C}$$
4. **Area and flow:**
$$A_s = \pi DL = \pi(0.3)(200) = 188.5\,\mathrm{m^2},\qquad \dot m = \rho\frac{\pi D^2}{4}V_m = 888\frac{\pi(0.3)^2}{4}(2) = 125.5\,\mathrm{kg/s}$$
5. **Exit temperature** (constant $T_s$):
$$T_e = T_s - (T_s - T_i)\exp\left(-\frac{hA_s}{\dot mc_p}\right) = 0 - (0 - 20)\exp\left[-\frac{18.0(188.5)}{125.5(1880)}\right] = 19.71^\circ\mathrm{C}$$
6. **Property check:** the oil cools by only 0.29°C, so the mean bulk temperature (19.86°C) equals the inlet value for practical purposes, and no re-evaluation is needed.

(With Hausen's original constant 0.0668, Slides 06 p. 7, Nu = 38.3 and $T_e = 19.71$°C, unchanged.)`,
          answer: String.raw`Re = 666 (laminar), $L_t \approx 104$ km ≫ 200 m, so Nu = 37.3, h = 18.0 W/m²·°C, $\dot m = 125.5$ kg/s, and $T_e = 19.71$°C.` },
        { id: "practice-forced-convection-P4b", label: "(b)", marks: "", topic: "forced-convection",
          sub: "Heat loss with the LMTD", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 06, p. 33`,
          text: String.raw`Determine the rate of heat transfer from the oil.`,
          solution: String.raw`1. **Log-mean temperature difference:**
$$\Delta T_{ln} = \frac{T_i - T_e}{\ln\dfrac{T_s - T_e}{T_s - T_i}} = \frac{20 - 19.71}{\ln\dfrac{0 - 19.71}{0 - 20}} = -19.85^\circ\mathrm{C}$$
2. **Heat rate:**
$$\dot Q = hA_s\Delta T_{ln} = 18.0(188.5)(-19.85) = -6.74\times10^4\,\mathrm{W}$$
The negative sign means heat leaves the oil.

**Check:** $\dot mc_p(T_i - T_e) = 125.5(1880)(0.29) \approx 6.8\times10^4$ W. ✓ Here the arithmetic mean would be just as good, because the two end differences (20 and 19.71°C) are almost equal.`,
          answer: String.raw`$\Delta T_{ln} = -19.85$°C, so $\dot Q = 18.0(188.5)(-19.85) \approx -67.4$ kW: the oil loses about 67 kW.` }
      ] },

    { id: "practice-forced-convection-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-forced-convection-P5", label: "", marks: "", topic: "forced-convection",
          sub: "Laminar fully developed tube flow, constant flux: Nu = 4.364", type: "derivation",
          syllabus: "in", repeats: ["2021-22-Q7a"], origin: "slides", ref: String.raw`Slides 05, p. 38 (laminar tube flow; "deriving this equation by yourself is recommended")`,
          text: String.raw`For fully developed laminar flow in a tube of radius $r_0$ with constant wall heat flux, the velocity is $u = u_0[1 - (r/r_0)^2]$ and $\partial T/\partial x$ is constant. Starting from the energy equation, derive
$$T - T_c = \frac{1}{\alpha}\frac{\partial T}{\partial x}\frac{u_0r_0^2}{4}\left[\left(\frac{r}{r_0}\right)^2 - \frac14\left(\frac{r}{r_0}\right)^4\right]$$
and show that $\mathrm{Nu}_d = hd/k = 4.364$, independent of Re and Pr. What is the corresponding value for constant wall temperature?`,
          solution: String.raw`**Assumptions:** steady, laminar, hydrodynamically and thermally fully developed, constant properties, axial conduction and viscous dissipation negligible, constant $q_w$ (so $\partial T/\partial x = dT_b/dx$ = const).

![Parabolic velocity and the constant-flux temperature profile in the tube](fig/practice-forced-convection-P5.svg)

1. **Energy equation in cylindrical coordinates** (radial conduction balances axial convection):
$$u\frac{\partial T}{\partial x} = \frac{\alpha}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right)$$
2. **Insert u** and integrate once:
$$\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) = \frac{1}{\alpha}\frac{\partial T}{\partial x}u_0\left(r - \frac{r^3}{r_0^2}\right) \Rightarrow r\frac{\partial T}{\partial r} = \frac{1}{\alpha}\frac{\partial T}{\partial x}u_0\left(\frac{r^2}{2} - \frac{r^4}{4r_0^2}\right) + C_1$$
Symmetry at r = 0 (finite gradient) gives $C_1 = 0$.
3. **Integrate again** with $T = T_c$ at r = 0. Writing $C = \dfrac{1}{\alpha}\dfrac{\partial T}{\partial x}\dfrac{u_0r_0^2}{4}$:
$$T - T_c = \frac{1}{\alpha}\frac{\partial T}{\partial x}u_0\left(\frac{r^2}{4} - \frac{r^4}{16r_0^2}\right) = C\left[\left(\frac{r}{r_0}\right)^2 - \frac14\left(\frac{r}{r_0}\right)^4\right]$$
4. **Wall temperature:** $T_w - T_c = C(1 - \tfrac14) = \tfrac34C$.
5. **Bulk temperature** (velocity-weighted, with $\eta = r/r_0$):
$$T_b - T_c = \frac{\int_0^1(1 - \eta^2)C(\eta^2 - \eta^4/4)\eta\,d\eta}{\int_0^1(1 - \eta^2)\eta\,d\eta} = \frac{C(7/96)}{1/4} = \frac{7}{24}C$$
6. **Wall heat flux:**
$$q_w = k\left.\frac{\partial T}{\partial r}\right|_{r_0} = k\,C\left(\frac{2}{r_0} - \frac{1}{r_0}\right) = \frac{kC}{r_0}$$
7. **Heat-transfer coefficient:**
$$h = \frac{q_w}{T_w - T_b} = \frac{kC/r_0}{C(3/4 - 7/24)} = \frac{kC/r_0}{(11/24)C} = \frac{24}{11}\frac{k}{r_0}$$
$$\mathrm{Nu}_d = \frac{h(2r_0)}{k} = \frac{48}{11} = 4.364$$
C cancels, so Nu contains no $u_0$, α or ν: it is independent of Re and Pr.

**Constant wall temperature:** the corresponding fully developed value is $\mathrm{Nu}_d = 3.66$, the limit Hausen's equation approaches for a long tube. (Ducts: see Table 6-1, e.g. a square duct has $\mathrm{Nu}_H = 3.608$ and $\mathrm{Nu}_T = 2.976$.)`,
          answer: String.raw`$T_w - T_c = \tfrac34C$, $T_b - T_c = \tfrac{7}{24}C$, $q_w = kC/r_0$, so $h = 24k/(11r_0)$ and $\mathrm{Nu}_d = 48/11 = 4.364$ (constant flux); 3.66 for constant wall temperature.` }
      ] },

    { id: "practice-forced-convection-P6", q: 6, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-forced-convection-P6a", label: "(a)", marks: "", topic: "forced-convection",
          sub: "Laminar flow in a rectangular duct: D_h and Table 6-1", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation built on Slides 06, pp. 12–14 (hydraulic diameter, Table 6-1)`,
          text: String.raw`Air at 1 atm enters a 1 cm × 2 cm rectangular duct, 2 m long, at 20°C and 2 m/s. The duct walls are held at 80°C. Find the hydraulic diameter, check the flow regime, and estimate the exit air temperature and the heat transferred. Air at an assumed mean bulk temperature of 50°C: $\rho = 1.092$ kg/m³, $\mu = 1.964\times10^{-5}$ kg/m·s, $k = 0.02808$ W/m·°C, $c_p = 1007$ J/kg·°C, Pr = 0.704.`,
          solution: String.raw`**Given:** a = 2 cm, b = 1 cm (b/a = 1/2), L = 2 m, $V = 2$ m/s, $T_i = 20$°C, $T_s = 80$°C.

![Rectangular duct 1 cm × 2 cm, 2 m long, and its hydraulic diameter](fig/practice-forced-convection-P6a.svg)

1. **Hydraulic diameter:**
$$D_h = \frac{4A_c}{P} = \frac{4ab}{2(a + b)} = \frac{2ab}{a + b} = \frac{2(0.02)(0.01)}{0.03} = 0.01333\,\mathrm{m}$$
2. **Regime:**
$$\mathrm{Re} = \frac{\rho VD_h}{\mu} = \frac{1.092(2)(0.01333)}{1.964\times10^{-5}} = 1483 \quad(\text{laminar})$$
$L/D_h = 2/0.01333 = 150 > 100$, so Table 6-1 applies. The entry lengths are $L_h \approx 0.05\,\mathrm{Re}\,D_h = 0.99$ m and $L_t \approx \mathrm{Pr}\,L_h = 0.70$ m, so using the fully developed value is conservative.
3. **Nusselt number** (Table 6-1, b/a = 1/2, constant wall temperature): $\mathrm{Nu}_T = 3.391$.
$$h = \frac{3.391k}{D_h} = \frac{3.391(0.02808)}{0.01333} = 7.14\,\mathrm{W/m^2\cdot^\circ C}$$
4. **Exit temperature** (constant $T_s$):
$$\dot m = \rho Vab = 1.092(2)(0.02)(0.01) = 4.368\times10^{-4}\,\mathrm{kg/s},\qquad A_s = 2(a + b)L = 0.12\,\mathrm{m^2}$$
$$\frac{hA_s}{\dot mc_p} = \frac{7.14(0.12)}{4.368\times10^{-4}(1007)} = 1.948$$
$$T_e = 80 - (80 - 20)e^{-1.948} = 71.4^\circ\mathrm{C}$$
5. **Heat transferred:**
$$q = \dot mc_p(T_e - T_i) = 4.368\times10^{-4}(1007)(71.4 - 20) = 22.6\,\mathrm{W}$$
6. **Check:** the mean bulk temperature is (20 + 71.4)/2 = 45.7°C, close to the assumed 50°C. ✓`,
          answer: String.raw`$D_h = 1.333$ cm, Re = 1483 (laminar), $\mathrm{Nu}_T = 3.391$, h = 7.14 W/m²·°C, $hA_s/\dot mc_p = 1.95$, so $T_e \approx 71.4$°C and q ≈ 22.6 W.` },
        { id: "practice-forced-convection-P6b", label: "(b)", marks: "", topic: "forced-convection",
          sub: "Hydraulic diameter of an annulus and a square duct", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 06, pp. 12–13 ($D_H = 4A/P$)`,
          text: String.raw`Find the hydraulic diameter of (i) a 4 cm × 4 cm square duct and (ii) the annulus between a 2.5 cm OD inner tube and a 5 cm ID outer pipe when the fluid wets both surfaces.`,
          solution: String.raw`![Square duct and annulus with their wetted perimeters](fig/practice-forced-convection-P6b.svg)

1. **Square duct:** $D_h = \dfrac{4a^2}{4a} = a = 4\,\mathrm{cm}$.
2. **Annulus:**
$$D_h = \frac{4\cdot\frac{\pi}{4}(D_o^2 - D_i^2)}{\pi(D_o + D_i)} = D_o - D_i = 5 - 2.5 = 2.5\,\mathrm{cm}$$

**Note:** $D_h$ is used in Re and Nu so that circular-tube correlations can be applied to other cross-sections. In Kern's exchanger method the annulus heat-transfer diameter instead uses only the heated perimeter, $D_e = (D_o^2 - D_i^2)/D_i$. Use the definition the problem or method calls for.`,
          answer: String.raw`Square duct: $D_h = a = 4$ cm. Annulus: $D_h = D_o - D_i = 2.5$ cm.` }
      ] },

    { id: "practice-forced-convection-P7", q: 7, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-forced-convection-P7", label: "", marks: "", topic: "forced-convection",
          sub: "Laminar Sieder–Tate with iteration (variation)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 06, pp. 19–24 with fresh numbers`,
          text: String.raw`Water at 30°C enters a 1.5 cm diameter tube, 2.5 m long, at a mean velocity of 4 cm/s. The wall is held at 90°C. Find the exit temperature, iterating once on properties.

Water properties (CoolProp, 1 atm):

| T (°C) | ρ (kg/m³) | $c_p$ (J/kg·°C) | μ (kg/m·s) | k (W/m·°C) | Pr |
|---|---|---|---|---|---|
| 40 | 992.2 | 4179 | $6.53\times10^{-4}$ | 0.628 | 4.34 |
| 50 | 988.0 | 4181 | $5.47\times10^{-4}$ | 0.641 | 3.57 |
| 90 (wall) | – | – | $3.14\times10^{-4}$ | – | – |`,
          solution: String.raw`**Given:** d = 0.015 m, L = 2.5 m, $u_m = 0.04$ m/s, $T_{b1} = 30$°C, $T_w = 90$°C.

**Iteration 1** (guess $T_{b2} \approx 50$°C, so mean 40°C):
1. Regime:
$$\mathrm{Re} = \frac{992.2(0.04)(0.015)}{6.53\times10^{-4}} = 912 \quad(\text{laminar}),\qquad \mathrm{Re\,Pr}\frac{d}{L} = \frac{912(4.34)(0.015)}{2.5} = 23.7 > 10$$
2. Sieder–Tate:
$$\mathrm{Nu} = 1.86(23.7)^{1/3}\left(\frac{6.53}{3.14}\right)^{0.14} = 1.86(2.873)(1.108) = 5.92,\qquad h = \frac{0.628(5.92)}{0.015} = 248.0\,\mathrm{W/m^2\cdot^\circ C}$$
3. Energy balance (arithmetic-mean ΔT):
$$\dot m = 992.2\frac{\pi(0.015)^2}{4}(0.04) = 7.013\times10^{-3}\,\mathrm{kg/s},\qquad h\pi dL = 248.0\pi(0.015)(2.5) = 29.21\,\mathrm{W/^\circ C}$$
$$29.21\left(90 - \frac{30 + T_{b2}}{2}\right) = 7.013\times10^{-3}(4179)(T_{b2} - 30) \Rightarrow T_{b2} = 69.9^\circ\mathrm{C}$$

**Iteration 2** (mean $T_b = (30 + 69.9)/2 \approx 50$°C):
4. $\mathrm{Re} = \dfrac{988.0(0.04)(0.015)}{5.47\times10^{-4}} = 1084$, and $\mathrm{Re\,Pr}\,d/L = 23.2$
5. $\mathrm{Nu} = 1.86(23.2)^{1/3}(5.47/3.14)^{0.14} = 5.73$, so $h = 0.641(5.73)/0.015 = 245.1\,\mathrm{W/m^2\cdot^\circ C}$
6. $\dot m = 6.984\times10^{-3}$ kg/s and $h\pi dL = 28.87$ W/°C, giving
$$T_{b2} = 69.7^\circ\mathrm{C},\qquad q = 6.984\times10^{-3}(4181)(69.7 - 30) = 1.16\,\mathrm{kW}$$

**Comment:** the Reynolds number rose by 19% between iterations, but h changed by only 1.2%. The lower Pr offsets the higher Re, and $(\mu/\mu_w)^{0.14}$ also falls, so one iteration is enough.`,
          answer: String.raw`Re ≈ 910 to 1080 (laminar), Re Pr d/L ≈ 23 > 10; h ≈ 248 then 245 W/m²·°C, so $T_{b2} \approx 69.7$°C and q ≈ 1.16 kW.` }
      ] },

    { id: "practice-forced-convection-P8", q: 8, section: "F", compulsory: false,
      stem: String.raw`Water flowing at 0.3 kg/s is to be heated from 20°C to 70°C in a 2.0 cm ID smooth tube whose wall is kept at 100°C by condensing steam. Water at the mean bulk temperature 45°C: $\rho = 990.2$ kg/m³, $\mu = 5.96\times10^{-4}$ kg/m·s, $k = 0.635$ W/m·°C, $c_p = 4180$ J/kg·°C, Pr = 3.92. At the wall (100°C, saturated liquid): $\mu_w = 2.82\times10^{-4}$ kg/m·s.`,
      parts: [
        { id: "practice-forced-convection-P8a", label: "(a)", marks: "10", topic: "forced-convection",
          sub: "Required length, constant wall T: Dittus–Boelter + LMTD", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Ex. 6-1 / Çengel Ex. 8-6; close cousin of 2012-13 Q3(c) and 2013-14 Q7(b)`,
          text: String.raw`Using the Dittus–Boelter equation, find the heat-transfer coefficient and the tube length required.`,
          solution: String.raw`**Given:** $\dot m = 0.3$ kg/s, D = 0.02 m, $T_i = 20$°C, $T_e = 70$°C, $T_s = 100$°C.

![Water heated by condensing steam: wall at 100°C](fig/practice-forced-convection-P8.svg)

**Assumptions:** fully developed turbulent flow (checked), smooth tube, properties at $T_b = (20 + 70)/2 = 45$°C.

1. **Regime:**
$$\mathrm{Re} = \frac{4\dot m}{\pi D\mu} = \frac{4(0.3)}{\pi(0.02)(5.96\times10^{-4})} = 3.20\times10^4 \quad(\text{turbulent})$$
2. **Dittus–Boelter** (heating, n = 0.4):
$$\mathrm{Nu} = 0.023(3.20\times10^4)^{0.8}(3.92)^{0.4} = 159.8,\qquad h = \frac{159.8(0.635)}{0.02} = 5074\,\mathrm{W/m^2\cdot^\circ C}$$
Validity: 0.6 < Pr < 100 ✓, 2500 < Re < $1.25\times10^5$ ✓.
3. **Heat duty:** $q = \dot mc_p(T_e - T_i) = 0.3(4180)(50) = 62.7\,\mathrm{kW}$
4. **LMTD** (constant wall temperature):
$$\Delta T_{ln} = \frac{(100 - 20) - (100 - 70)}{\ln(80/30)} = \frac{50}{0.9808} = 51.0^\circ\mathrm{C}$$
(The end differences, 80°C and 30°C, are far apart, so do not use the arithmetic mean.)
5. **Length:**
$$L = \frac{q}{h\pi D\Delta T_{ln}} = \frac{62\,700}{5074\pi(0.02)(51.0)} = 3.86\,\mathrm{m}$$
6. **Check:** L/D = 193 > 10, so the fully developed assumption holds.`,
          answer: String.raw`Re = $3.2\times10^4$, Nu = 160, h ≈ 5070 W/m²·°C; q = 62.7 kW, ΔT_ln = 51.0°C, so L ≈ 3.9 m.` },
        { id: "practice-forced-convection-P8b", label: "(b)", marks: "5", topic: "forced-convection",
          sub: "Same tube with Sieder–Tate (wide ΔT)", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Sec. 6-2; cousin of 2012-13 Q3(c)`,
          text: String.raw`Repeat with the Sieder–Tate turbulent correlation, and explain the difference.`,
          solution: String.raw`1. **Viscosity factor:** $(\mu/\mu_w)^{0.14} = (5.96/2.82)^{0.14} = 1.110$
2. **Sieder–Tate:**
$$\mathrm{Nu} = 0.027\,\mathrm{Re}^{0.8}\mathrm{Pr}^{1/3}(\mu/\mu_w)^{0.14} = 0.027(3.20\times10^4)^{0.8}(3.92)^{1/3}(1.110) = 190.2$$
$$h = \frac{190.2(0.635)}{0.02} = 6039\,\mathrm{W/m^2\cdot^\circ C}$$
3. **Length:**
$$L = \frac{62\,700}{6039\pi(0.02)(51.0)} = 3.24\,\mathrm{m}$$

**Why the difference:** the wall-to-bulk difference is large (55°C at mid-tube). Heating a liquid lowers the viscosity near the wall, which thins the viscous sublayer and raises h. Sieder–Tate captures this through $(\mu/\mu_w)^{0.14}$, while Dittus–Boelter is meant only for moderate ΔT. The two correlations also scatter by about ±20% against each other, so a designer would take the longer length (3.9 m) for safety, or follow the correlation the question names.`,
          answer: String.raw`$(\mu/\mu_w)^{0.14} = 1.11$, Nu = 190, h ≈ 6040 W/m²·°C, so L ≈ 3.2 m (about 16% shorter than with Dittus–Boelter).` },
        { id: "practice-forced-convection-P8c", label: "(c)", marks: "5", topic: "forced-convection",
          sub: "Short tube: Nusselt entrance correlation", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Sec. 6-2 (Nusselt entrance relation, Slides 06 p. 6)`,
          text: String.raw`If only a 0.6 m length of the same tube were used (same flow and properties), estimate the average h from Nusselt's entrance-region correlation, and compare it with the fully developed Dittus–Boelter value.`,
          solution: String.raw`1. **Range check:** L/D = 0.6/0.02 = 30, which lies within 10 < L/d < 400 ✓; the flow is turbulent ✓.
2. **Nusselt entrance correlation:**
$$\mathrm{Nu} = 0.036\,\mathrm{Re}^{0.8}\mathrm{Pr}^{1/3}\left(\frac{d}{L}\right)^{0.055} = 0.036(3.20\times10^4)^{0.8}(3.92)^{1/3}(1/30)^{0.055} = 189.4$$
$$h = \frac{189.4(0.635)}{0.02} = 6014\,\mathrm{W/m^2\cdot^\circ C}$$
3. **Comparison:** $h/h_{DB} = 6014/5074 = 1.19$. The average h over a short tube is about 19% higher, because the thin, developing thermal boundary layer near the inlet transfers heat faster. The factor $(d/L)^{0.055}$ tends to 1 only slowly, so the entrance gain falls as the tube gets longer.

(Strictly, properties should be taken at the new mean bulk temperature. A 0.6 m tube heats the water only to about 33°C.)`,
          answer: String.raw`L/d = 30 (in range): Nu = 189, h ≈ 6010 W/m²·°C, about 19% above the fully developed Dittus–Boelter value.` }
      ] },

    { id: "practice-forced-convection-P9", q: 9, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-forced-convection-P9", label: "", marks: "12", topic: "forced-convection",
          sub: "Laminar tube, constant heat flux: length and exit wall temperature", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel Ex. 8-3 / Holman Ch. 6; close cousin of 2023-24 Q5(c) and 2011-12 Q7(c)`,
          text: String.raw`Water at 0.005 kg/s is heated from 20°C to 60°C in a 1.2 cm ID tube by an electric heating tape that supplies a uniform flux of 3000 W/m². Find (a) the tube length required, (b) the surface temperature at the exit, and (c) whether the fully developed assumption is reasonable. Water at 40°C: $\rho = 992.2$ kg/m³, $\mu = 6.53\times10^{-4}$ kg/m·s, $k = 0.629$ W/m·°C, $c_p = 4179$ J/kg·°C, Pr = 4.34.`,
          solution: String.raw`**Given:** $\dot m = 0.005$ kg/s, D = 0.012 m, $T_i = 20$°C, $T_e = 60$°C, $q_s'' = 3000$ W/m².

![Uniform-flux heating tape: bulk and surface temperatures](fig/practice-forced-convection-P9.svg)

**Assumptions:** steady, uniform flux, fully developed laminar flow at the exit, properties at 40°C.

1. **Regime:**
$$\mathrm{Re} = \frac{4\dot m}{\pi D\mu} = \frac{4(0.005)}{\pi(0.012)(6.53\times10^{-4})} = 812 \quad(\text{laminar})$$
2. **(a) Length** from the energy balance:
$$q = \dot mc_p(T_e - T_i) = 0.005(4179)(40) = 835.8\,\mathrm{W}$$
$$L = \frac{q}{q_s''\pi D} = \frac{835.8}{3000\pi(0.012)} = 7.39\,\mathrm{m}$$
3. **(b) Exit wall temperature.** For fully developed laminar flow with constant flux, Nu = 4.364:
$$h = \frac{4.364k}{D} = \frac{4.364(0.629)}{0.012} = 228.7\,\mathrm{W/m^2\cdot^\circ C}$$
$$T_{s,e} = T_e + \frac{q_s''}{h} = 60 + \frac{3000}{228.7} = 73.1^\circ\mathrm{C}$$
4. **(c) Entry lengths:**
$$L_h \approx 0.05\,\mathrm{Re}\,D = 0.05(812)(0.012) = 0.49\,\mathrm{m},\qquad L_t \approx \mathrm{Pr}\,L_h = 4.34(0.49) = 2.1\,\mathrm{m}$$
Both are well below 7.39 m, so the flow is fully developed at the exit and Nu = 4.364 is correct there. Near the inlet h is higher (thermal entrance), so the wall there runs cooler than $T_b + 13.1$°C.

**Note:** with constant flux, $T_s - T_b = q''/h = 13.1$°C stays constant in the developed region. The wall temperature therefore rises parallel to the bulk temperature, and its maximum is at the exit, which is the value to check against limits such as boiling or material temperature.`,
          answer: String.raw`Re = 812 (laminar); q = 836 W, so L ≈ 7.4 m; h = 4.364k/D = 229 W/m²·°C, so $T_{s,exit} \approx 73.1$°C; $L_t \approx 2.1$ m < L, so the exit is fully developed.` }
      ] },

    { id: "practice-forced-convection-P10", q: 10, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-forced-convection-P10", label: "", marks: "15", topic: "forced-convection",
          sub: "Turbulent flow in an annulus: hydraulic diameter, h and length", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Ex. 6-6 (annulus); close cousin of 2021-22 Q5(c) / 2023-24 Q8(a)`,
          text: String.raw`Water at 0.8 kg/s flows through the annulus of a double-pipe heater formed by a 3.0 cm OD inner tube and a 5.0 cm ID outer pipe. The water is heated from 20°C to 40°C by the inner tube, whose surface is held at 75°C; the outer pipe is insulated. Using the Dittus–Boelter equation with the hydraulic diameter, find the heat-transfer coefficient and the length of heater needed. Water at 30°C: $\rho = 995.6$ kg/m³, $\mu = 7.97\times10^{-4}$ kg/m·s, $k = 0.615$ W/m·°C, $c_p = 4178$ J/kg·°C, Pr = 5.42.`,
          solution: String.raw`**Given:** $D_i = 0.03$ m (heated surface), $D_o = 0.05$ m, $\dot m = 0.8$ kg/s, $T_i = 20$°C, $T_e = 40$°C, $T_s = 75$°C.

![Double-pipe heater annulus with the inner tube at 75°C](fig/practice-forced-convection-P10.svg)

**Assumptions:** fully developed turbulent flow, Dittus–Boelter applied with $D_h$ (as taught for non-circular channels), properties at the mean bulk temperature 30°C.

1. **Hydraulic diameter and flow area:**
$$D_h = \frac{4A_c}{P_{wetted}} = D_o - D_i = 0.02\,\mathrm{m},\qquad A_c = \frac{\pi}{4}(D_o^2 - D_i^2) = \frac{\pi}{4}(0.05^2 - 0.03^2) = 1.257\times10^{-3}\,\mathrm{m^2}$$
2. **Velocity and Re:**
$$V = \frac{\dot m}{\rho A_c} = \frac{0.8}{995.6(1.257\times10^{-3})} = 0.639\,\mathrm{m/s}$$
$$\mathrm{Re} = \frac{\rho VD_h}{\mu} = \frac{995.6(0.639)(0.02)}{7.97\times10^{-4}} = 1.60\times10^4 \quad(\text{turbulent})$$
3. **Dittus–Boelter** (water heated, n = 0.4):
$$\mathrm{Nu} = 0.023(1.60\times10^4)^{0.8}(5.42)^{0.4} = 104.3,\qquad h = \frac{104.3(0.615)}{0.02} = 3206\,\mathrm{W/m^2\cdot^\circ C}$$
4. **Duty and LMTD:**
$$q = \dot mc_p(T_e - T_i) = 0.8(4178)(20) = 66.8\,\mathrm{kW}$$
$$\Delta T_{ln} = \frac{(75 - 20) - (75 - 40)}{\ln(55/35)} = \frac{20}{0.452} = 44.2^\circ\mathrm{C}$$
5. **Length** (heat enters only through the inner-tube surface, $\pi D_iL$):
$$L = \frac{q}{h\pi D_i\Delta T_{ln}} = \frac{66\,848}{3206\pi(0.03)(44.2)} = 5.0\,\mathrm{m}$$
6. **Check:** $L/D_h = 250$, so the flow is essentially fully developed ✓; 0.6 < Pr < 100 ✓.

**Exam tip:** use $D_h$ (both wetted walls) in Re and Nu, but use the **heated** area ($\pi D_iL$) in $q = hA\Delta T$. Mixing these up is the usual mistake.`,
          answer: String.raw`$D_h = 2$ cm, V = 0.64 m/s, Re = $1.6\times10^4$, Nu = 104, h ≈ 3.2 kW/m²·°C; q = 66.8 kW, ΔT_ln = 44.2°C, so L ≈ 5.0 m.` }
      ] },

    { id: "practice-forced-convection-P11", q: 11, section: "F", compulsory: false,
      stem: String.raw`Engine oil at 0.08 kg/s enters a 2.5 cm ID tube, 12 m long, at 40°C. The tube wall is held at 100°C. Engine oil properties (Holman Table A-4; 50°C values interpolated):

| T (°C) | ρ (kg/m³) | $c_p$ (J/kg·°C) | μ (kg/m·s) | k (W/m·°C) | Pr |
|---|---|---|---|---|---|
| 50 | 870.0 | 2005 | 0.1235 | 0.142 | 1736 |
| 100 (wall) | – | – | 0.01705 | – | – |`,
      parts: [
        { id: "practice-forced-convection-P11a", label: "(a)", marks: "12", topic: "forced-convection",
          sub: "Viscous oil, laminar entrance: outlet T by Sieder–Tate", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Ex. 6-2 / Kern Ch. 7; cousin of 2014-15 Q4(b) and 2017-18 Q8(b)`,
          text: String.raw`Assume an outlet temperature, take properties at the mean bulk temperature, and use the Sieder–Tate laminar correlation to find the outlet temperature and the heat duty. Show that the assumed mean temperature is acceptable.`,
          solution: String.raw`**Given:** $\dot m = 0.08$ kg/s, D = 0.025 m, L = 12 m, $T_i = 40$°C, $T_w = 100$°C.

**Assumption:** guess $T_e \approx 60$°C, so the mean bulk temperature is 50°C (properties above).

1. **Regime:**
$$\mathrm{Re} = \frac{4\dot m}{\pi D\mu} = \frac{4(0.08)}{\pi(0.025)(0.1235)} = 33.0 \quad(\text{laminar})$$
$$\mathrm{Re\,Pr}\frac{D}{L} = \frac{33.0(1736)(0.025)}{12} = 119.3 > 10\ \checkmark$$
The thermal entry length, $0.05\,\mathrm{Re\,Pr}\,D \approx 72$ m ≫ 12 m, so the flow is thermally developing along the whole tube, which is why an entrance-type correlation is needed.
2. **Sieder–Tate laminar:**
$$\overline{\mathrm{Nu}} = 1.86(119.3)^{1/3}\left(\frac{0.1235}{0.01705}\right)^{0.14} = 1.86(4.924)(1.319) = 12.08$$
$$\bar h = \frac{12.08(0.142)}{0.025} = 68.6\,\mathrm{W/m^2\cdot^\circ C},\qquad \bar h\pi DL = 68.6\pi(0.025)(12) = 64.7\,\mathrm{W/^\circ C}$$
3. **Energy balance** (arithmetic-mean ΔT, as Sieder–Tate is defined):
$$64.7\left(100 - \frac{40 + T_e}{2}\right) = 0.08(2005)(T_e - 40) \Rightarrow T_e = 60.1^\circ\mathrm{C}$$
4. **Duty:**
$$q = 0.08(2005)(60.1 - 40) = 3.23\,\mathrm{kW}$$
5. **Check:** mean bulk = (40 + 60.1)/2 = 50.07°C, as assumed, so no further iteration is needed.`,
          answer: String.raw`Re = 33 (laminar), Re Pr D/L = 119, $(\mu/\mu_w)^{0.14} = 1.32$, Nu = 12.1, h = 68.6 W/m²·°C, so $T_e \approx 60.1$°C and q ≈ 3.2 kW.` },
        { id: "practice-forced-convection-P11b", label: "(b)", marks: "6", topic: "forced-convection",
          sub: "Same problem with Hausen; comparison", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Sec. 6-2 (Hausen, Slides 06 p. 7)`,
          text: String.raw`Repeat using Hausen's relation with the same properties, and explain why the two answers differ.`,
          solution: String.raw`1. **Hausen** (constant wall temperature; average Nu):
$$\overline{\mathrm{Nu}} = 3.66 + \frac{0.0668(D/L)\mathrm{Re\,Pr}}{1 + 0.04[(D/L)\mathrm{Re\,Pr}]^{2/3}} = 3.66 + \frac{0.0668(119.3)}{1 + 0.04(119.3)^{2/3}} = 7.71$$
$$\bar h = \frac{7.71(0.142)}{0.025} = 43.8\,\mathrm{W/m^2\cdot^\circ C},\qquad \frac{\bar hA_s}{\dot mc_p} = \frac{43.8\pi(0.025)(12)}{0.08(2005)} = 0.257$$
2. **Exit temperature** (exponential form, since Hausen's h is used with the LMTD):
$$T_e = 100 - (100 - 40)e^{-0.257} = 53.6^\circ\mathrm{C},\qquad q = 0.08(2005)(13.6) = 2.18\,\mathrm{kW}$$
(Re-evaluating properties at the new mean, 46.8°C, changes h by less than 0.2%.)

**Why they differ (≈ 48% in q):**
- Hausen assumes a fully developed velocity profile with constant properties and contains no viscosity correction. Sieder–Tate includes $(\mu/\mu_w)^{0.14} = 1.32$, and for a viscous oil heated by a much hotter wall that factor is large.
- Even without that factor, Sieder–Tate's laminar constant gives Nu = 9.2 against Hausen's 7.7. The correlations are empirical and their agreement is poor for very viscous liquids.
- In an exam, use the correlation the question names (Hausen when "thermal entrance, constant wall temperature" is stated; Sieder–Tate when a wall viscosity is given), and state the validity checks.`,
          answer: String.raw`Hausen: Nu = 7.7, h = 43.8 W/m²·°C, so $T_e \approx 53.6$°C and q ≈ 2.2 kW, against 60.1°C and 3.2 kW from Sieder–Tate; the gap comes mainly from the viscosity correction (1.32) and the different empirical fits.` }
      ] },

    { id: "practice-forced-convection-P12", q: 12, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-forced-convection-P12a", label: "(a)", marks: "6", topic: "forced-convection",
          sub: "Dittus–Boelter: statement, range and modifications", type: "theory",
          syllabus: "in", repeats: ["2015-16-Q8b", "2015-16-Q8c", "2016-17-Q1d", "2016-17-Q7a", "2017-18-Q6b", "2017-18-Q7c", "2020-21-Q6a", "2022-23-Q1a", "2022-23-Q2b"], origin: "potential", ref: String.raw`Asked in finals like 2015-16 Q8(b), 2016-17 Q7(a), 2017-18 Q6(b), 2020-21 Q6(a)`,
          text: String.raw`Write the Dittus–Boelter equation, state the conditions under which it is valid, and state which correlations replace it when (i) the wall-to-fluid temperature difference is large and (ii) the tube is short.`,
          solution: String.raw`**Equation:**
$$\mathrm{Nu}_d = 0.023\,\mathrm{Re}_d^{0.8}\mathrm{Pr}^n,\qquad n = 0.4\ \text{(fluid heated)},\quad n = 0.3\ \text{(fluid cooled)}$$
Properties are evaluated at the mean bulk temperature.

**Valid for:** fully developed turbulent flow, smooth tubes, $0.6 < \mathrm{Pr} < 100$, $2500 < \mathrm{Re}_d < 1.25\times10^5$, moderate temperature differences, L/d > 10 (≈ 60 for good accuracy).

**Modifications:**
- (i) Wide temperature differences: Sieder–Tate, $\mathrm{Nu}_d = 0.027\,\mathrm{Re}_d^{0.8}\mathrm{Pr}^{1/3}(\mu/\mu_w)^{0.14}$, with $\mu_w$ at the wall temperature and the rest at the bulk temperature.
- (ii) Entrance region (10 < L/d < 400): Nusselt, $\mathrm{Nu}_d = 0.036\,\mathrm{Re}_d^{0.8}\mathrm{Pr}^{1/3}(d/L)^{0.055}$. For L/d < 10, use the $\mathrm{Nu}_x/\mathrm{Nu}_\infty$ chart.
- Non-circular sections: use $D_h = 4A/P$.`,
          answer: String.raw`$\mathrm{Nu} = 0.023\,\mathrm{Re}^{0.8}\mathrm{Pr}^n$ (n = 0.4 heating, 0.3 cooling) for developed turbulent flow in smooth tubes, 0.6 < Pr < 100, moderate ΔT; Sieder–Tate for large ΔT; Nusselt's $(d/L)^{0.055}$ form for short tubes.` },
        { id: "practice-forced-convection-P12b", label: "(b)", marks: "6", topic: "forced-convection",
          sub: "Distortion of the laminar velocity profile by heating/cooling", type: "sketch",
          syllabus: "in", repeats: ["2015-16-Q8b", "2015-16-Q8c", "2016-17-Q1d", "2016-17-Q7a", "2017-18-Q6b", "2017-18-Q7c", "2020-21-Q6a", "2022-23-Q1a", "2022-23-Q2b"], origin: "potential", ref: String.raw`Asked in finals like 2015-16 Q8(c), 2016-17 Q1(d), 2017-18 Q7(c), 2022-23 Q2(b)`,
          text: String.raw`Sketch how the parabolic laminar velocity profile in a tube changes when (i) a liquid is heated and (ii) a gas is heated. Relate this to the $(\mu/\mu_w)^{0.14}$ factor.`,
          solution: String.raw`**Sketch:** the tube cross-section with the radius on the vertical axis (−R to +R) and the velocity on the horizontal axis. Draw three profiles with the same mean velocity:
1. **Isothermal:** a parabola, $u = 2u_m[1 - (r/R)^2]$.
2. **Liquid heating (or gas cooling):** the wall fluid is hotter. A liquid's μ falls with temperature, so the fluid near the wall flows faster and the centre slower: a **flatter, blunter** profile.
3. **Gas heating (or liquid cooling):** the wall fluid is hotter but a gas's μ rises with temperature, so the fluid near the wall is slowed and the centre speeds up: a **more peaked** profile.

![Velocity-profile distortion by heating and cooling](fig/common-velocity-distortion.svg)

**Link to correlations:** a flatter profile means a larger velocity gradient at the wall and better heat transfer. Sieder–Tate's $(\mu/\mu_w)^{0.14}$ is > 1 for a liquid being heated ($\mu_w < \mu$) and < 1 for a liquid being cooled. Dittus–Boelter's n = 0.4 versus 0.3 reflects the same effect.`,
          answer: String.raw`Liquid heated / gas cooled: flatter profile (faster near the wall); gas heated / liquid cooled: more peaked. This is captured by $(\mu/\mu_w)^{0.14}$ and by n = 0.4/0.3.` },
        { id: "practice-forced-convection-P12c", label: "(c)", marks: "5", topic: "forced-convection",
          sub: "Liquid metals in forced convection", type: "theory",
          syllabus: "in", repeats: ["2015-16-Q8b", "2015-16-Q8c", "2016-17-Q1d", "2016-17-Q7a", "2017-18-Q6b", "2017-18-Q7c", "2020-21-Q6a", "2022-23-Q1a", "2022-23-Q2b"], origin: "potential", ref: String.raw`Slides 06, p. 34 (liquid metal heat transfer); cousin of 2022-23 Q1(a)`,
          text: String.raw`Why are liquid metals used as coolants in some applications, and how does their low Prandtl number affect the velocity and thermal boundary layers?`,
          solution: String.raw`**Advantages:** very high thermal conductivity, giving high heat-transfer rates. This suits cases where a large heat load must be removed from a small space (e.g. nuclear reactors). They stay liquid at high temperature, which allows compact exchangers.

**Drawbacks:** they are corrosive and react violently with water or air, so they need special handling.

**Effect of Pr ≈ 0.01:** α ≫ ν, so the thermal boundary layer is much thicker than the velocity layer ($\delta_t \gg \delta$). Over most of the thermal layer the velocity is nearly uniform, a very blunt (slug-like) profile. Conduction across the whole flow dominates. Correlations built for Pr ≳ 0.6 (Dittus–Boelter, the $0.332\,\mathrm{Pr}^{1/3}$ relations) therefore do not apply; liquid metals need their own relations, which depend on the Peclet number $\mathrm{Pe} = \mathrm{Re\,Pr}$.`,
          answer: String.raw`High k, so high h, compact designs and high-temperature service (but corrosive and reactive). Pr ≈ 0.01 gives $\delta_t \gg \delta$ and a blunt velocity profile over the thermal layer, so Pr ≥ 0.6 correlations are invalid.` },
        { id: "practice-forced-convection-P12d", label: "(d)", marks: "4", topic: "forced-convection",
          sub: "Choosing a tube-flow correlation", type: "theory",
          syllabus: "in", repeats: ["2015-16-Q8b", "2015-16-Q8c", "2016-17-Q1d", "2016-17-Q7a", "2017-18-Q6b", "2017-18-Q7c", "2020-21-Q6a", "2022-23-Q1a", "2022-23-Q2b"], origin: "potential", ref: String.raw`Slides 06, p. 35 (convective heat-transfer calculation chart)`,
          text: String.raw`Outline the steps in choosing a correlation for convection inside a tube, listing the checks you must make.`,
          solution: String.raw`1. **Fluid properties at the right temperature:** mean bulk temperature (assume an outlet temperature and iterate if needed); $\mu_w$ at the wall temperature for Sieder–Tate.
2. **Re and Pr with the correct length:** d, or $D_h = 4A/P$ for ducts and annuli.
3. **Regime and region:** laminar (Re < 2300) or turbulent; entrance or fully developed ($L_h \approx 0.05\,\mathrm{Re}\,D$, $L_t \approx \mathrm{Pr}\,L_h$ in laminar flow; ≈ 10D in turbulent flow).
4. **Wall condition:** constant $T_w$ (laminar developed Nu = 3.66, Hausen, Sieder–Tate laminar if Re Pr d/L > 10) or constant $q_w$ (Nu = 4.364). Turbulent: Dittus–Boelter for moderate ΔT, Sieder–Tate for wide ΔT, Nusselt $(d/L)^{0.055}$ for 10 < L/d < 400.
5. **Average vs local Nu**, and which ΔT the correlation uses (arithmetic mean for Sieder–Tate laminar; LMTD or the exponential for constant $T_w$).
6. Then h = Nu k/d and $q = hA\Delta T$, with an energy balance $\dot mc_p\Delta T_b$ for the outlet temperature.`,
          answer: String.raw`Properties (bulk T, μ_w) → Re, Pr (d or D_h) → laminar/turbulent, entrance/developed → constant T or constant q → pick Nu (3.66/4.364/Hausen/Sieder–Tate/Dittus–Boelter/Nusselt) → h → q with the correct ΔT.` }
      ] }
  ] });
