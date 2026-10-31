QB.paper({ year: "Practice", set: "Condensation", date: "", marks: 0, practice: true,
  rules: String.raw`Film condensation: Nusselt analysis on a vertical plate, film Reynolds number and regimes, modified latent heat, wavy-laminar and turbulent plates, inclined plates, horizontal tubes and tube banks, spheres, vertical vs horizontal tubes, dropwise condensation and non-condensables. Slide examples first (section S), then exam-style problems (section F).`,
  questions: [

    { id: "practice-condensation-P1", q: 1, section: "S", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-condensation-P1", label: "", marks: "", topic: "condensation",
          sub: "Square bank of 100 horizontal tubes (N^(−1/4))", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 08, pp. 32–38 (100 tubes of 1.27 cm at 98°C; Holman Ex. 9-3 style)`,
          text: String.raw`One hundred tubes of 0.50-in (1.27-cm) diameter are arranged in a square array and exposed to atmospheric steam. Calculate the mass of steam condensed per unit length of tubes for a tube wall temperature of 98°C.`,
          solution: String.raw`**Given:** 100 tubes in a square array, so a 10 × 10 bank with $N = 10$ tubes in each vertical column; $D = 0.0127\,\mathrm{m}$; $T_{sat} = 100^\circ\mathrm{C}$ (1 atm); $T_w = 98^\circ\mathrm{C}$.

**Find:** $\dot m/L$.

**Assumptions:** laminar film condensation; uniform wall temperature; condensate falls from tube to tube down each column; $\rho_v \ll \rho_l$.

![Square bank of 100 tubes: N = 10 tubes in each vertical column](fig/practice-condensation-P1.svg)

1. **Properties** (as on the slide). Liquid at $T_f = (100 + 98)/2 = 99^\circ\mathrm{C}$: $\rho_l = 960\,\mathrm{kg/m^3}$, $\mu_l = 2.82\times10^{-4}\,\mathrm{kg/m\,s}$, $k_l = 0.68\,\mathrm{W/m\,K}$. At $T_{sat}$: $h_{fg} = 2255\,\mathrm{kJ/kg}$.

With $\Delta T = 2^\circ\mathrm{C}$, the correction $0.68c_{pl}\Delta T \approx 5.7\,\mathrm{kJ/kg}$ is only 0.25% of $h_{fg}$, so the slide uses $h_{fg}$ directly. Also $\rho_l(\rho_l - \rho_v) \approx \rho_l^2$.

2. **Tube-bank coefficient** (Nusselt with $N^{-1/4}$; Holman's constant 0.725)

$$h_N = 0.725\left[\frac{\rho_l^2gh_{fg}k_l^3}{\mu_lND(T_{sat} - T_w)}\right]^{1/4} = 0.725\left[\frac{960^2\times9.8\times2.255\times10^6\times0.68^3}{2.82\times10^{-4}\times10\times0.0127\times2}\right]^{1/4}$$

$$h_N = 12{,}540\,\mathrm{W/m^2K}\quad[2209\,\mathrm{Btu/h\,ft^2\,^\circ F}]$$

(A single tube would have $h_1 = h_N N^{1/4} = 22{,}300\,\mathrm{W/m^2K}$.)

3. **Surface area per metre of length**

$$\frac{A}{L} = n\pi D = 100\times\pi\times0.0127 = 3.99\,\mathrm{m^2/m}$$

4. **Heat transfer per metre**

$$\frac{q}{L} = h_N\frac{A}{L}(T_{sat} - T_w) = 12{,}540\times3.99\times2 = 1.0007\times10^5\,\mathrm{W/m} = 100.07\,\mathrm{kW/m}$$

5. **Condensate per metre**

$$\frac{\dot m}{L} = \frac{q/L}{h_{fg}} = \frac{1.0007\times10^5}{2.255\times10^6} = 0.0444\,\mathrm{kg/s\,m} = 159.7\,\mathrm{kg/h\,m}$$

> **Exam tip:** "square array of n tubes" means $N = \sqrt{n}$ tubes per vertical column. Use N, not n, in the $N^{-1/4}$ factor, and n for the area.`,
          answer: String.raw`$N = 10$; $h_N \approx 12{,}540\,\mathrm{W/m^2K}$; $q/L \approx 100\,\mathrm{kW/m}$; $\dot m/L \approx 0.0444\,\mathrm{kg/s}$ per m ($\approx 160\,\mathrm{kg/h}$ per m).` }
      ] },

    { id: "practice-condensation-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw`The condenser of a steam power plant operates at 7.38 kPa. Steam at this pressure condenses on the outer surfaces of horizontal pipes through which cooling water circulates. The outer diameter of the pipes is 3 cm, and the outer surfaces are maintained at 30°C.

At $T_{sat} = 40^\circ\mathrm{C}$ (7.38 kPa): $h_{fg} = 2407\times10^3\,\mathrm{J/kg}$, $\rho_v = 0.05\,\mathrm{kg/m^3}$. Liquid at 35°C: $\rho_l = 994\,\mathrm{kg/m^3}$, $\mu_l = 0.720\times10^{-3}\,\mathrm{kg/m\,s}$, $k_l = 0.623\,\mathrm{W/m\,K}$, $c_{pl} = 4178\,\mathrm{J/kg\,K}$.`,
      parts: [
        { id: "practice-condensation-P2a", label: "(a)", marks: "", topic: "condensation",
          sub: "Single horizontal tube: heat transfer", type: "numerical",
          syllabus: "in", repeats: ["2015-16-Q3a", "2022-23-Q7d"], origin: "slides", ref: String.raw`Slides 08, pp. 39–45 (7.38 kPa condenser, Çengel Ex. 10-4 style; the finals' 3×4 version is 2015-16 Q3a / 2022-23 Q7d)`,
          text: String.raw`Determine the rate of heat transfer to the cooling water per metre length of one pipe.`,
          solution: String.raw`**Given:** $T_{sat} = 40^\circ\mathrm{C}$, $T_s = 30^\circ\mathrm{C}$, $D = 0.03\,\mathrm{m}$, $L = 1\,\mathrm{m}$.

**Assumptions:** steady laminar film condensation on a single isothermal horizontal tube; vapour at rest.

![Steam condensing on a horizontal condenser tube](fig/practice-condensation-P2.svg)

1. **Modified latent heat** (accounts for subcooling of the film)

$$h^*_{fg} = h_{fg} + 0.68c_{pl}(T_{sat} - T_s) = 2407\times10^3 + 0.68\times4178\times10 = 2435\times10^3\,\mathrm{J/kg}$$

2. **Horizontal-tube coefficient** (Nusselt, Çengel constant 0.729)

$$h = 0.729\left[\frac{g\rho_l(\rho_l - \rho_v)h^*_{fg}k_l^3}{\mu_l(T_{sat} - T_s)D}\right]^{1/4} = 0.729\left[\frac{9.81\times994\times(994 - 0.05)\times2435\times10^3\times0.623^3}{0.720\times10^{-3}\times10\times0.03}\right]^{1/4}$$

$$h = 9292\,\mathrm{W/m^2K}$$

(Holman's 0.725 gives 9244, only 0.5% lower.)

3. **Heat transfer per metre**

$$A_s = \pi DL = \pi\times0.03\times1 = 0.09425\,\mathrm{m^2}$$

$$\dot Q = hA_s(T_{sat} - T_s) = 9292\times0.09425\times10 = 8758\,\mathrm{W}$$

4. **Regime check:** $\mathrm{Re} = 4\dot m/(p\mu_l)$ with $p = 2L$ for a horizontal tube, and $\dot m$ from part (b): $\mathrm{Re} = 4\times0.0036/(2\times0.72\times10^{-3}) = 10 < 30$, so the film is laminar and wave-free.`,
          answer: String.raw`$h^*_{fg} = 2435\,\mathrm{kJ/kg}$, $h \approx 9290\,\mathrm{W/m^2K}$, $\dot Q \approx 8.76\,\mathrm{kW}$ per m of pipe.` },
        { id: "practice-condensation-P2b", label: "(b)", marks: "", topic: "condensation",
          sub: "Single horizontal tube: condensation rate", type: "numerical",
          syllabus: "in", repeats: ["2015-16-Q3a", "2022-23-Q7d"], origin: "slides", ref: String.raw`Slides 08, p. 45`,
          text: String.raw`Determine the rate of condensation of steam per unit length of a horizontal pipe.`,
          solution: String.raw`$$\dot m = \frac{\dot Q}{h^*_{fg}} = \frac{8758}{2435\times10^3} = 3.60\times10^{-3}\,\mathrm{kg/s} \approx 13.0\,\mathrm{kg/h}\ \text{per metre}$$

> The slide writes 8578 J/s in this step, a typo for 8758 W; the answer 0.00360 kg/s is correct. Divide by $h^*_{fg}$ (not $h_{fg}$): the extra 0.68$c_p\Delta T$ is heat released by subcooling the condensate, which also goes to the cooling water.`,
          answer: String.raw`$\dot m \approx 0.00360\,\mathrm{kg/s}$ per m ($\approx 13\,\mathrm{kg/h}$ per m).` }
      ] },

    { id: "practice-condensation-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw`Consider laminar film condensation of a saturated vapour at $T_{sat}$ on a vertical plate of height L and width b held at $T_s < T_{sat}$. x is measured downward from the top edge and y is normal to the plate.`,
      parts: [
        { id: "practice-condensation-P3a", label: "(a)", marks: "", topic: "condensation",
          sub: "Nusselt analysis: δ(x), h_x and average h", type: "derivation",
          syllabus: "in", repeats: ["2013-14-Q3a", "2014-15-Q6a", "2022-23-Q6a", "2023-24-Q7a"], origin: "slides", ref: String.raw`Slides 08, pp. 10–18 (Nusselt 1916 analysis; asked in finals 2013-14 Q3a, 2014-15 Q6a, 2022-23 Q6a)`,
          text: String.raw`State Nusselt's assumptions and derive the film thickness $\delta(x)$, the local coefficient $h_x$ and the average coefficient

$$h = 0.943\left[\frac{g\rho_l(\rho_l - \rho_v)h_{fg}k_l^3}{\mu_l(T_{sat} - T_s)L}\right]^{1/4}$$`,
          solution: String.raw`![Nusselt film on a vertical plate: δ(x), element dx, half-parabola velocity and linear temperature profiles](fig/practice-condensation-P3a-sol.svg)

**Assumptions (Nusselt):**
1. Plate and vapour at constant $T_s$ and $T_{sat}$; the temperature varies linearly across the film.
2. Heat crosses the film by conduction only.
3. The vapour is slow, so there is no shear at the liquid–vapour interface.
4. The condensate flow is laminar, with constant liquid properties.
5. The acceleration of the film is negligible, so the forces on any element balance.

**Step 1: velocity profile.** Take a liquid element of thickness dx, extending from y to the interface at $\delta$ (width b). Its weight acts down; the viscous shear at y and the buoyancy act up:

$$\rho_lg(\delta - y)(b\,dx) = \mu_l\frac{du}{dy}(b\,dx) + \rho_vg(\delta - y)(b\,dx)\;\Rightarrow\;\frac{du}{dy} = \frac{g(\rho_l - \rho_v)(\delta - y)}{\mu_l}$$

Integrate with $u = 0$ at $y = 0$:

$$u(y) = \frac{g(\rho_l - \rho_v)}{\mu_l}\left(y\delta - \frac{y^2}{2}\right)$$

**Step 2: mass flow of condensate at x**

$$\dot m(x) = \int_0^\delta\rho_lu(y)\,b\,dy = \frac{gb\rho_l(\rho_l - \rho_v)\delta^3}{3\mu_l},\qquad \frac{d\dot m}{dx} = \frac{gb\rho_l(\rho_l - \rho_v)\delta^2}{\mu_l}\frac{d\delta}{dx}$$

**Step 3: energy balance on dx.** The latent heat released by the vapour condensing on dx is conducted across the film (linear T profile):

$$d\dot Q = h_{fg}\,d\dot m = k_l(b\,dx)\frac{T_{sat} - T_s}{\delta}\;\Rightarrow\;\frac{d\dot m}{dx} = \frac{k_lb}{h_{fg}}\frac{T_{sat} - T_s}{\delta}$$

**Step 4: equate the two $d\dot m/dx$ expressions**

$$\delta^3d\delta = \frac{\mu_lk_l(T_{sat} - T_s)}{g\rho_l(\rho_l - \rho_v)h_{fg}}dx$$

Integrate from $\delta = 0$ at $x = 0$ (top edge):

$$\delta(x) = \left[\frac{4\mu_lk_l(T_{sat} - T_s)x}{g\rho_l(\rho_l - \rho_v)h_{fg}}\right]^{1/4}$$

**Step 5: local coefficient.** Since $\dot q_x = h_x(T_{sat} - T_s) = k_l(T_{sat} - T_s)/\delta$:

$$h_x = \frac{k_l}{\delta(x)} = \left[\frac{g\rho_l(\rho_l - \rho_v)h_{fg}k_l^3}{4\mu_l(T_{sat} - T_s)x}\right]^{1/4}$$

**Step 6: average over the height.** $h_x = Cx^{-1/4}$, so

$$h = \frac{1}{L}\int_0^Lh_x\,dx = \frac{1}{L}\,C\frac{L^{3/4}}{3/4} = \frac{4}{3}h_{x=L}$$

$$h = \frac{4}{3}\left(\frac{1}{4}\right)^{1/4}\left[\frac{g\rho_l(\rho_l - \rho_v)h_{fg}k_l^3}{\mu_l(T_{sat} - T_s)L}\right]^{1/4} = 0.943\left[\frac{g\rho_l(\rho_l - \rho_v)h_{fg}k_l^3}{\mu_l(T_{sat} - T_s)L}\right]^{1/4}$$

since $\frac{4}{3}\times0.25^{1/4} = 0.943$.

**Refinement (Rohsenow):** the linear-profile analysis under-predicts h, because the condensate is also subcooled below $T_{sat}$. Replace $h_{fg}$ with $h^*_{fg} = h_{fg} + 0.68c_{pl}(T_{sat} - T_s)$. Evaluate liquid properties at $T_f = (T_{sat} + T_s)/2$, and $h_{fg}$ and $\rho_v$ at $T_{sat}$. The result is valid for $0 < \mathrm{Re} < 30$.`,
          answer: String.raw`$\delta = [4\mu_lk_l\Delta Tx/(g\rho_l(\rho_l - \rho_v)h_{fg})]^{1/4}$, $h_x = k_l/\delta$, $h = \tfrac{4}{3}h_L = 0.943[g\rho_l(\rho_l - \rho_v)h_{fg}k_l^3/(\mu_l\Delta TL)]^{1/4}$.` },
        { id: "practice-condensation-P3b", label: "(b)", marks: "", topic: "condensation",
          sub: "Film Reynolds number and h = 1.47 k Re^(−1/3)(g/ν²)^(1/3)", type: "derivation",
          syllabus: "in", repeats: ["2013-14-Q3a", "2014-15-Q6a", "2022-23-Q6a", "2023-24-Q7a"], origin: "slides", ref: String.raw`Slides 08, pp. 6–9 and 20 (film Re, hydraulic diameter, regimes; asked in 2014-15 Q6a, 2023-24 Q7a(i))`,
          text: String.raw`Define the film Reynolds number and show that it equals $4\dot m/(p\mu_l)$. Give the flow regimes. Then show that for $\rho_v \ll \rho_l$ the laminar average coefficient can be written

$$h = 1.47\,k_l\,\mathrm{Re}^{-1/3}\left(\frac{g}{\nu_l^2}\right)^{1/3}$$`,
          solution: String.raw`![Film regimes down a vertical plate and the film cross-section used for D_h = 4δ](fig/practice-condensation-P3b-sol.svg)

**Film Reynolds number.** The hydraulic diameter of a film of thickness $\delta$ on a wetted perimeter p is $D_h = 4A_c/p = 4p\delta/p = 4\delta$. With mean velocity $V_l$ and $\dot m = \rho_lV_lA_c$:

$$\mathrm{Re} = \frac{D_h\rho_lV_l}{\mu_l} = \frac{4A_c\rho_lV_l}{p\mu_l} = \frac{4\rho_lV_l\delta}{\mu_l} = \frac{4\dot m}{p\mu_l}$$

Here $\dot m$ is the condensate flow at the lowest point. The wetted perimeter is $p = b$ (width) for a plate, $p = \pi D$ for a vertical tube and $p = 2L$ for a horizontal tube (two sides drain).

**Regimes:** $\mathrm{Re} < 30$ laminar, wave-free; $30 < \mathrm{Re} < 1800$ wavy laminar; $\mathrm{Re} > 1800$ turbulent. Re increases down the surface.

**h in terms of Re.** At the bottom ($x = L$), from part (a) with $\rho_v \ll \rho_l$:

$$\dot m = \frac{gb\rho_l^2\delta^3}{3\mu_l}\;\Rightarrow\;\mathrm{Re} = \frac{4\dot m}{b\mu_l} = \frac{4g\delta^3}{3\nu_l^2}\;\Rightarrow\;\delta_L = \left(\frac{3\nu_l^2\mathrm{Re}}{4g}\right)^{1/3}$$

$$h = \frac{4}{3}h_{x=L} = \frac{4}{3}\frac{k_l}{\delta_L} = \frac{4}{3}\left(\frac{4}{3}\right)^{1/3}k_l\,\mathrm{Re}^{-1/3}\left(\frac{g}{\nu_l^2}\right)^{1/3} = 1.47\,k_l\,\mathrm{Re}^{-1/3}\left(\frac{g}{\nu_l^2}\right)^{1/3}$$

since $(4/3)^{4/3} = 1.468$.

This form is handy when $\dot m$ (and so Re) is known instead of $\Delta T$. In the wavy and turbulent ranges the slides replace it with

$$h_{wavy} = \frac{\mathrm{Re}\,k_l}{1.08\mathrm{Re}^{1.22} - 5.2}\left(\frac{g}{\nu_l^2}\right)^{1/3},\qquad h_{turb} = \frac{\mathrm{Re}\,k_l}{8750 + 58\mathrm{Pr}^{-0.5}(\mathrm{Re}^{0.75} - 253)}\left(\frac{g}{\nu_l^2}\right)^{1/3}$$`,
          answer: String.raw`$\mathrm{Re} = 4\dot m/(p\mu_l)$ (with $D_h = 4\delta$); regimes: below 30, 30 to 1800, above 1800. Eliminating $\delta$ via $\mathrm{Re} = 4g\delta^3/(3\nu^2)$ gives $h = (4/3)^{4/3}k\mathrm{Re}^{-1/3}(g/\nu^2)^{1/3} = 1.47\ldots$` }
      ] },

    { id: "practice-condensation-P4", q: 4, section: "S", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-condensation-P4", label: "", marks: "", topic: "condensation",
          sub: "Vertical plate: wavy-laminar film (iteration on Re)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation on Slides 08, pp. 17–21 (vertical plate, regimes, wavy-laminar relation)`,
          text: String.raw`Saturated steam at 1 atm condenses on a 1.2-m-high vertical plate whose surface is held at 80°C. Determine the average heat-transfer coefficient and the condensation rate per metre width of plate. Check the flow regime.

Data: at 100°C, $h_{fg} = 2257\,\mathrm{kJ/kg}$, $\rho_v = 0.598\,\mathrm{kg/m^3}$. Liquid at 90°C: $\rho_l = 965.3\,\mathrm{kg/m^3}$, $\mu_l = 3.142\times10^{-4}\,\mathrm{kg/m\,s}$, $k_l = 0.6728\,\mathrm{W/m\,K}$, $c_{pl} = 4205\,\mathrm{J/kg\,K}$.`,
          solution: String.raw`**Given:** $L = 1.2\,\mathrm{m}$, $b = 1\,\mathrm{m}$, $T_{sat} = 100^\circ\mathrm{C}$, $T_s = 80^\circ\mathrm{C}$, $\Delta T = 20\,\mathrm{K}$.

**Assumptions:** steady; isothermal plate; quiescent saturated vapour; properties as given (IAPWS values).

![Condensate film on the 1.2 m vertical plate](fig/practice-condensation-P4.svg)

1. **Modified latent heat**

$$h^*_{fg} = 2257\times10^3 + 0.68\times4205\times20 = 2314\times10^3\,\mathrm{J/kg}$$

2. **First try: laminar Nusselt**

$$h_{lam} = 0.943\left[\frac{9.81\times965.3\times(965.3 - 0.598)\times2.314\times10^6\times0.6728^3}{3.142\times10^{-4}\times20\times1.2}\right]^{1/4} = 5097\,\mathrm{W/m^2K}$$

3. **Check Re.** With $\dot m = hbL\Delta T/h^*_{fg}$ and $p = b$:

$$\mathrm{Re} = \frac{4\dot m}{b\mu_l} = \frac{4hL\Delta T}{\mu_lh^*_{fg}} = \frac{4\times5097\times1.2\times20}{3.142\times10^{-4}\times2.314\times10^6} = 673$$

This is above 30, so the film is **wavy laminar** and the smooth-film result is not valid.

4. **Wavy-laminar relation, iterated.** With $\nu_l = \mu_l/\rho_l = 3.255\times10^{-7}\,\mathrm{m^2/s}$:

$$\left(\frac{g}{\nu_l^2}\right)^{1/3} = \left(\frac{9.81}{(3.255\times10^{-7})^2}\right)^{1/3} = 45{,}240\,\mathrm{m^{-1}}$$

$$h = \frac{\mathrm{Re}\,k_l}{1.08\mathrm{Re}^{1.22} - 5.2}\left(\frac{g}{\nu_l^2}\right)^{1/3},\qquad \mathrm{Re}_{new} = \frac{4hL\Delta T}{\mu_lh^*_{fg}} = 0.1320\,h$$

| Pass | Re used | h (W/m²K) | new Re |
|---|---|---|---|
| 1 | 673 | 6739 | 890 |
| 2 | 890 | 6334 | 836 |
| 3 | 836 | 6422 | 848 |
| 4 | 848 | 6402 | 845 |

Converged: $\mathrm{Re} \approx 846$ (between 30 and 1800, wavy laminar confirmed) and $h \approx 6406\,\mathrm{W/m^2K}$, about 26% above the smooth-film value. The slides quote about 20% on average.

5. **Heat transfer and condensation per metre width**

$$\dot Q = hA\Delta T = 6406\times(1.2\times1)\times20 = 1.54\times10^5\,\mathrm{W}$$

$$\dot m = \frac{\dot Q}{h^*_{fg}} = \frac{1.537\times10^5}{2.314\times10^6} = 0.0664\,\mathrm{kg/s} \approx 239\,\mathrm{kg/h}\ \text{per m width}$$

> **Exam tip:** always compute Re after the first estimate. If it is outside the range of the formula you used, switch formulas and iterate (two or three passes are enough).`,
          answer: String.raw`Laminar estimate 5097 W/m²K gives Re = 673 (wavy). The wavy relation converges to $\mathrm{Re} \approx 846$, $h \approx 6.41\,\mathrm{kW/m^2K}$, $\dot Q \approx 154\,\mathrm{kW}$ and $\dot m \approx 0.066\,\mathrm{kg/s}$ per m width.` }
      ] },

    { id: "practice-condensation-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw`A tube of 2.5 cm outer diameter and 1.5 m length, with its surface at 90°C, is exposed to saturated steam at 1 atm. Data: $h_{fg} = 2257\,\mathrm{kJ/kg}$, $\rho_v = 0.598\,\mathrm{kg/m^3}$. Liquid at 95°C: $\rho_l = 961.9\,\mathrm{kg/m^3}$, $\mu_l = 2.971\times10^{-4}\,\mathrm{kg/m\,s}$, $k_l = 0.6752\,\mathrm{W/m\,K}$, $c_{pl} = 4210\,\mathrm{J/kg\,K}$.`,
      parts: [
        { id: "practice-condensation-P5a", label: "(a)", marks: "", topic: "condensation",
          sub: "Vertical vs horizontal tube", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation on Slides 08, pp. 19, 23–25 (vertical tube as plate; horizontal tube; L = 2.77D)`,
          text: String.raw`Calculate the condensation rate when the tube is (i) vertical and (ii) horizontal, using the laminar Nusselt relations. Which orientation is better and why?`,
          solution: String.raw`![The same tube vertical and horizontal](fig/practice-condensation-P5.svg)

**Assumptions:** laminar film; the vertical tube is treated as a plate of height L (D is much larger than the film thickness); $T_{sat} = 100^\circ\mathrm{C}$, $\Delta T = 10\,\mathrm{K}$.

1. $h^*_{fg} = 2257\times10^3 + 0.68\times4210\times10 = 2286\times10^3\,\mathrm{J/kg}$

2. **Common group**

$$B = \frac{g\rho_l(\rho_l - \rho_v)h^*_{fg}k_l^3}{\mu_l\Delta T} = \frac{9.81\times961.9\times961.3\times2.286\times10^6\times0.6752^3}{2.971\times10^{-4}\times10}$$

3. **(i) Vertical** (characteristic length L = 1.5 m)

$$h_{vert} = 0.943(B/L)^{1/4} = 5801\,\mathrm{W/m^2K}$$

4. **(ii) Horizontal** (characteristic length D = 0.025 m)

$$h_{horiz} = 0.729(B/D)^{1/4} = 12{,}481\,\mathrm{W/m^2K}$$

5. **Condensation rates** ($A = \pi DL = 0.1178\,\mathrm{m^2}$)

$$\dot m_{vert} = \frac{5801\times0.1178\times10}{2.286\times10^6} = 2.99\times10^{-3}\,\mathrm{kg/s}\ (10.8\,\mathrm{kg/h})$$

$$\dot m_{horiz} = \frac{12{,}481\times0.1178\times10}{2.286\times10^6} = 6.43\times10^{-3}\,\mathrm{kg/s}\ (23.2\,\mathrm{kg/h})$$

6. **Ratio check**

$$\frac{h_{vert}}{h_{horiz}} = \frac{0.943}{0.729}\left(\frac{D}{L}\right)^{1/4} = 1.29\left(\frac{0.025}{1.5}\right)^{1/4} = 0.465$$

The horizontal tube condenses about 2.15 times more. The two are equal only when $L = 1.29^4D = 2.77D$ (7 cm here). Any practical tube is much longer than 2.77D, so condenser tubes are laid **horizontally**: the film only has to drain around a short half-circumference ($\pi D/2$) instead of the full length L, so it stays thin.

**Regime check:** horizontal $\mathrm{Re} = 4\dot m/(2L\mu_l) = 28.9 < 30$ (laminar ✓). Vertical $\mathrm{Re} = 4\dot m/(\pi D\mu_l) = 513$, which is wavy. The wavy relation (iterated as in Problem 4) gives $h_{vert} \approx 7110\,\mathrm{W/m^2K}$ at $\mathrm{Re} \approx 628$. The horizontal tube is still about 1.75 times better.`,
          answer: String.raw`$h_{vert} \approx 5.8\,\mathrm{kW/m^2K}$ (10.8 kg/h; wavy correction about 7.1 kW/m²K), $h_{horiz} \approx 12.5\,\mathrm{kW/m^2K}$ (23.2 kg/h); $h_v/h_h = 1.29(D/L)^{1/4} = 0.465$; horizontal is better whenever $L > 2.77D$.` },
        { id: "practice-condensation-P5b", label: "(b)", marks: "", topic: "condensation",
          sub: "Inclined surface (g cos θ)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 08, p. 22 (inclined plates: replace g by g cos θ)`,
          text: String.raw`If the condensing surface were instead a flat plate 1.5 m long, inclined at 60° from the vertical (condensing on its upper face, laminar film), by what factor would its coefficient differ from the vertical-plate value? Evaluate it.`,
          solution: String.raw`![Plate inclined 60° from the vertical: only g cos θ drives the film](fig/practice-condensation-P5b.svg)

For laminar film condensation on the upper face of a plate inclined at $\theta$ from the vertical, only the component $g\cos\theta$ drives the film down the plate. Since $h \propto g^{1/4}$:

$$h_{incl} = h_{vert}(\cos\theta)^{1/4} = 5801\times(\cos60^\circ)^{1/4} = 5801\times0.841 = 4878\,\mathrm{W/m^2K}$$

The coefficient drops by about 16%: the film drains more slowly and grows thicker. (For a horizontal plate, $\theta = 90^\circ$, the formula fails, since the condensate does not drain at all by gravity.)`,
          answer: String.raw`$h_{incl} = h_{vert}(\cos60^\circ)^{1/4} = 0.841h_{vert} \approx 4.88\,\mathrm{kW/m^2K}$.` }
      ] },

    { id: "practice-condensation-P6", q: 6, section: "S", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-condensation-P6", label: "", marks: "", topic: "condensation",
          sub: "Horizontal tube bank (16 × 16) at sub-atmospheric pressure", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation on Slides 08, pp. 26 and 32–38 (tube banks, h_N = h_1 N^(−1/4))`,
          text: String.raw`A surface condenser has 256 horizontal tubes, each 2.5 cm OD and 2 m long, arranged in a 16 × 16 square array. Saturated steam at 50 kPa condenses on the outside, and the tube walls are at 65°C. Find the total condensation rate, and the coefficient on the top tube compared with the bank average.

Data: at 50 kPa, $T_{sat} = 81.3^\circ\mathrm{C}$, $h_{fg} = 2304.7\,\mathrm{kJ/kg}$, $\rho_v = 0.309\,\mathrm{kg/m^3}$. Liquid at 73.2°C: $\rho_l = 975.9\,\mathrm{kg/m^3}$, $\mu_l = 3.867\times10^{-4}\,\mathrm{kg/m\,s}$, $k_l = 0.6622\,\mathrm{W/m\,K}$, $c_{pl} = 4192\,\mathrm{J/kg\,K}$.`,
          solution: String.raw`**Given:** $n = 256$, $N = 16$ tubes per column, $D = 0.025\,\mathrm{m}$, $L = 2\,\mathrm{m}$, $\Delta T = 81.3 - 65 = 16.3\,\mathrm{K}$.

**Assumptions:** laminar film; condensate drains straight down each column; uniform wall temperature; steam velocity low.

![16 × 16 tube bank: N = 16 tubes per column](fig/practice-condensation-P6.svg)

1. $h^*_{fg} = 2304.7\times10^3 + 0.68\times4192\times16.3 = 2351\times10^3\,\mathrm{J/kg}$

2. **Single (top) tube**

$$h_1 = 0.729\left[\frac{9.81\times975.9\times(975.9 - 0.309)\times2.351\times10^6\times0.6622^3}{3.867\times10^{-4}\times16.3\times0.025}\right]^{1/4} = 10{,}340\,\mathrm{W/m^2K}$$

3. **Bank average**

$$h_N = h_1N^{-1/4} = 10{,}340\times16^{-1/4} = 10{,}340\times0.5 = 5170\,\mathrm{W/m^2K}$$

The condensate dripping from the tubes above halves the average coefficient for a 16-deep bank.

4. **Total area and heat load**

$$A = n\pi DL = 256\times\pi\times0.025\times2 = 40.21\,\mathrm{m^2}$$

$$\dot Q = h_NA\Delta T = 5170\times40.21\times16.3 = 3.39\times10^6\,\mathrm{W}$$

5. **Condensation rate**

$$\dot m = \frac{\dot Q}{h^*_{fg}} = \frac{3.389\times10^6}{2.351\times10^6} = 1.44\,\mathrm{kg/s} \approx 5190\,\mathrm{kg/h}$$

**Check:** the condensate leaving the bottom tube of one column is $\dot m/16 = 0.090\,\mathrm{kg/s}$, so $\mathrm{Re} = 4(0.090)/(2\times2\times3.867\times10^{-4}) \approx 233$. That is in the wavy range near the bottom, which the simple $N^{-1/4}$ method ignores; it is the standard textbook approach, and it errs on the safe side.`,
          answer: String.raw`$h_1 \approx 10.3\,\mathrm{kW/m^2K}$, $h_{16} = h_1/2 \approx 5.17\,\mathrm{kW/m^2K}$; $\dot Q \approx 3.39\,\mathrm{MW}$; $\dot m \approx 1.44\,\mathrm{kg/s}$ ($\approx 5190\,\mathrm{kg/h}$).` }
      ] },

    { id: "practice-condensation-P7", q: 7, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-condensation-P7a", label: "(a)", marks: "6", topic: "condensation",
          sub: "Film vs dropwise condensation", type: "theory",
          syllabus: "in", repeats: ["2011-12-Q3a", "2012-13-Q7a"], origin: "potential", ref: String.raw`Style of finals 2011-12 Q3(a), 2012-13 Q7(a); Slides 08, pp. 3–4, 29–30`,
          text: String.raw`Distinguish between film and dropwise condensation. Why is dropwise condensation preferred, and why are condensers still designed for film condensation? How can dropwise condensation be promoted?`,
          solution: String.raw`| | Film condensation | Dropwise condensation |
|---|---|---|
| Surface | wetted by the condensate | not wetted (condensate beads up) |
| Appearance | continuous liquid film that thickens downward | countless drops; drops grow, merge and roll off, sweeping the surface clean |
| Resistance | the whole film is a conduction resistance | almost none; bare metal is exposed to vapour |
| h for steam | about 5–25 kW/m²K | more than 10 times higher (correlation for steam: $h = 51{,}104 + 2044T_{sat}$ for $22 < T_{sat} < 100^\circ\mathrm{C}$; 255,310 W/m²K above 100°C) |

**Why design for film condensation:** sustained dropwise condensation is hard to keep up. Promoters wash off or oxidise, and the surface reverts to film condensation after some time. Designing for the film mode is conservative.

**Promotion:** add a promoter to the vapour (waxes and fatty acids such as oleic, stearic or linoleic acid); treat the surface with a promoter chemical; or coat it with a non-wetting polymer (Teflon) or a noble metal (gold, silver, rhodium, palladium, platinum).`,
          answer: String.raw`Film: wetted surface with a resistive film; dropwise: non-wetted, drops roll off, h more than 10 times higher. It is hard to sustain, so equipment is designed for film condensation; it can be promoted with additives, surface treatments or Teflon/noble-metal coatings.` },
        { id: "practice-condensation-P7b", label: "(b)", marks: "5", topic: "condensation",
          sub: "Non-condensable gases and vapour velocity", type: "theory",
          syllabus: "in", repeats: ["2011-12-Q3a", "2012-13-Q7a"], origin: "potential", ref: String.raw`Style of final 2012-13 Q7(a); Slides 08, pp. 27–28`,
          text: String.raw`Explain the effect on the condensation heat-transfer coefficient of (i) a small amount of air in the steam and (ii) a high vapour velocity.`,
          solution: String.raw`**(i) Non-condensable gas.** As the vapour condenses, the air it carried cannot condense. It collects next to the liquid film as a gas-rich layer. Vapour must then *diffuse* through this layer to reach the film, and its partial pressure, and so the interface saturation temperature, drops. This adds a large resistance: less than 1% air (by mass) in steam can cut h by more than half. Condensers are therefore vented, and air is removed continuously (air ejectors). The effect is weaker when the vapour moves fast and sweeps the gas away.

**(ii) Vapour velocity.** At high speed the vapour drags the liquid at the interface (interfacial shear).
- Vapour flowing **downward** (with the condensate) speeds up the film and thins it, so h increases.
- Vapour flowing **upward** retards the film and thickens it, so h decreases; at very high speed it can strip the film off the surface.

Nusselt's analysis assumes zero interfacial shear, i.e. stagnant vapour.`,
          answer: String.raw`Air builds up a diffusion barrier at the interface and lowers the interface temperature (less than 1% air can halve h). Downward vapour flow thins the film and raises h; upward flow thickens it and lowers h.` },
        { id: "practice-condensation-P7c", label: "(c)", marks: "4", topic: "condensation",
          sub: "Modified latent heat (subcooling and superheat)", type: "theory",
          syllabus: "in", repeats: ["2011-12-Q3a", "2012-13-Q7a"], origin: "potential", ref: String.raw`Slides 08, pp. 16–18; style of final 2023-24 Q7(a)(ii) (superheated vapour, subcooled condensate)`,
          text: String.raw`Explain the terms in $h^*_{fg} = h_{fg} + 0.68c_{pl}(T_{sat} - T_s) + c_{pv}(T_v - T_{sat})$ and where each property is evaluated.`,
          solution: String.raw`- $h_{fg}$: latent heat released when 1 kg of saturated vapour condenses (evaluated at $T_{sat}$).
- $0.68c_{pl}(T_{sat} - T_s)$: the condensate film is cooled below $T_{sat}$ toward the wall temperature, releasing extra sensible heat. The factor 0.68 (Rohsenow) accounts for the actual, non-linear temperature profile and the enthalpy-flux weighting across the film. $c_{pl}$ is evaluated at the film temperature $(T_{sat} + T_s)/2$.
- $c_{pv}(T_v - T_{sat})$: if the vapour arrives superheated at $T_v$, it must first be cooled to $T_{sat}$. That heat also goes to the wall. $c_{pv}$ is evaluated at $(T_v + T_{sat})/2$.

Then $\dot Q = hA_s(T_{sat} - T_s) = \dot mh^*_{fg}$. Use $h^*_{fg}$ both in the h correlation and in finding $\dot m$ from $\dot Q$. The driving temperature difference stays $T_{sat} - T_s$ even for superheated vapour.`,
          answer: String.raw`$h^*_{fg}$ = latent heat + film subcooling (0.68$c_{pl}\Delta T$, Rohsenow) + vapour superheat ($c_{pv}(T_v - T_{sat})$); $h_{fg}$ at $T_{sat}$, $c_{pl}$ at the film temperature, $c_{pv}$ at the mean vapour temperature.` }
      ] },

    { id: "practice-condensation-P8", q: 8, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-condensation-P8", label: "", marks: "15", topic: "condensation",
          sub: "Tall vertical plate: turbulent film", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel vertical-plate problems with regime checks (laminar, then wavy, then turbulent); not in past finals`,
          text: String.raw`Saturated steam at 1 atm condenses on a 3-m-high, 1-m-wide vertical plate maintained at 60°C. Determine the average heat-transfer coefficient and the rate of condensation. Decide the film regime carefully.

Data: at 100°C, $h_{fg} = 2257\,\mathrm{kJ/kg}$, $\rho_v = 0.598\,\mathrm{kg/m^3}$. Liquid at 80°C: $\rho_l = 971.8\,\mathrm{kg/m^3}$, $\mu_l = 3.540\times10^{-4}\,\mathrm{kg/m\,s}$, $k_l = 0.6670\,\mathrm{W/m\,K}$, $c_{pl} = 4197\,\mathrm{J/kg\,K}$, $\mathrm{Pr}_l = 2.23$.`,
          solution: String.raw`**Given:** $L = 3\,\mathrm{m}$, $b = 1\,\mathrm{m}$, $\Delta T = 40\,\mathrm{K}$.

**Assumptions:** steady; quiescent saturated vapour; isothermal plate.

![Condensate film on the 3 m vertical plate](fig/practice-condensation-P8.svg)

1. $h^*_{fg} = 2257\times10^3 + 0.68\times4197\times40 = 2371\times10^3\,\mathrm{J/kg}$

2. **Useful constants**

$$\nu_l = \frac{3.540\times10^{-4}}{971.8} = 3.643\times10^{-7}\,\mathrm{m^2/s},\qquad \left(\frac{g}{\nu_l^2}\right)^{1/3} = 41{,}970\,\mathrm{m^{-1}}$$

$$\mathrm{Re} = \frac{4hL\Delta T}{\mu_lh^*_{fg}} = \frac{4\times3\times40}{3.540\times10^{-4}\times2.371\times10^6}h = 0.5718\,h$$

3. **Laminar trial:** $h = 0.943[\ldots/L]^{1/4} = 3318\,\mathrm{W/m^2K}$, giving $\mathrm{Re} = 1898$. This is not below 30.

4. **Wavy trial:** iterating the wavy relation converges at $\mathrm{Re} = 2624$, which is above 1800. So the film is **turbulent** at the bottom.

5. **Turbulent relation, iterated**

$$h = \frac{\mathrm{Re}\,k_l}{8750 + 58\mathrm{Pr}^{-0.5}(\mathrm{Re}^{0.75} - 253)}\left(\frac{g}{\nu_l^2}\right)^{1/3}$$

| Pass | Re used | h (W/m²K) | new Re = 0.5718h |
|---|---|---|---|
| 1 | 2500 | 5529 | 3162 |
| 2 | 3162 | 5784 | 3307 |
| 3 | 3307 | 5836 | 3337 |
| 4 | 3337 | 5846 | 3343 |

Converged: $\mathrm{Re} \approx 3344$ (turbulent ✓) and $h \approx 5849\,\mathrm{W/m^2K}$.

6. **Heat transfer and condensation**

$$\dot Q = hA\Delta T = 5849\times3\times40 = 7.02\times10^5\,\mathrm{W}$$

$$\dot m = \frac{\dot Q}{h^*_{fg}} = \frac{7.02\times10^5}{2.371\times10^6} = 0.296\,\mathrm{kg/s} \approx 1066\,\mathrm{kg/h}$$

> Note that h is 76% **higher** than the (invalid) laminar estimate. In turbulent films h rises with Re (see the slide chart, where the curves for Pr > 1 climb beyond Re = 1800). Using the laminar formula here would oversize the condenser.`,
          answer: String.raw`Laminar and wavy trials give Re > 1800, so the film is turbulent: $\mathrm{Re} \approx 3340$, $h \approx 5.85\,\mathrm{kW/m^2K}$, $\dot Q \approx 702\,\mathrm{kW}$, $\dot m \approx 0.296\,\mathrm{kg/s}$ ($\approx 1066\,\mathrm{kg/h}$).` }
      ] },

    { id: "practice-condensation-P9", q: 9, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-condensation-P9", label: "", marks: "15", topic: "condensation",
          sub: "Condenser sizing: tube length for a given duty", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Close cousin of final 2016-17 Q4(a) (find tube length for a given condensation rate), new numbers; Holman/Çengel tube-bank style`,
          text: String.raw`A condenser is to condense 1200 kg/h of saturated steam at 30 kPa. It uses 144 horizontal tubes of 19 mm OD in a 12 × 12 square arrangement, with the tube surfaces held at 50°C by cooling water. Determine the required tube length.

Data: at 30 kPa, $T_{sat} = 69.1^\circ\mathrm{C}$, $h_{fg} = 2335.3\,\mathrm{kJ/kg}$, $\rho_v = 0.191\,\mathrm{kg/m^3}$. Liquid at 59.5°C: $\rho_l = 983.4\,\mathrm{kg/m^3}$, $\mu_l = 4.692\times10^{-4}\,\mathrm{kg/m\,s}$, $k_l = 0.6505\,\mathrm{W/m\,K}$, $c_{pl} = 4185\,\mathrm{J/kg\,K}$.`,
          solution: String.raw`**Given:** $\dot m = 1200/3600 = 0.3333\,\mathrm{kg/s}$, $n = 144$, $N = 12$, $D = 0.019\,\mathrm{m}$, $\Delta T = 69.1 - 50 = 19.1\,\mathrm{K}$.

**Find:** L.

**Assumptions:** laminar film; condensate falls down each column of 12 tubes; uniform wall temperature; h does not depend on L for a horizontal tube.

![12 × 12 tube bank: N = 12 tubes per column, length to be found](fig/practice-condensation-P9.svg)

1. **Modified latent heat**

$$h^*_{fg} = 2335.3\times10^3 + 0.68\times4185\times19.1 = 2389.7\times10^3\,\mathrm{J/kg}$$

2. **Single tube**

$$h_1 = 0.729\left[\frac{9.81\times983.4\times(983.4 - 0.191)\times2.3897\times10^6\times0.6505^3}{4.692\times10^{-4}\times19.1\times0.019}\right]^{1/4} = 10{,}086\,\mathrm{W/m^2K}$$

3. **Bank average**

$$h_{12} = h_1N^{-1/4} = 10{,}086\times12^{-1/4} = 5419\,\mathrm{W/m^2K}$$

4. **Required heat-transfer rate**

$$\dot Q = \dot mh^*_{fg} = 0.3333\times2.3897\times10^6 = 7.966\times10^5\,\mathrm{W}$$

5. **Required area and length**

$$A = \frac{\dot Q}{h_{12}\Delta T} = \frac{7.966\times10^5}{5419\times19.1} = 7.70\,\mathrm{m^2}$$

$$L = \frac{A}{n\pi D} = \frac{7.70}{144\times\pi\times0.019} = 0.895\,\mathrm{m}$$

**Answer:** tubes about 0.9 m long (in practice 1 m would be chosen, with margin for fouling and non-condensables).

> Since h for horizontal tubes does not depend on length, there is no iteration. For vertical tubes h depends on L, so you would have to iterate.`,
          answer: String.raw`$h_1 \approx 10.1\,\mathrm{kW/m^2K}$, $h_{12} \approx 5.42\,\mathrm{kW/m^2K}$, $\dot Q \approx 797\,\mathrm{kW}$, $A \approx 7.70\,\mathrm{m^2}$, so $L \approx 0.90\,\mathrm{m}$.` }
      ] },

    { id: "practice-condensation-P10", q: 10, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-condensation-P10", label: "", marks: "8", topic: "condensation",
          sub: "Condensation on a sphere", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 08, p. 23 (sphere constant 0.815); Holman sphere-condensation style`,
          text: String.raw`A 5-cm-diameter copper sphere at 80°C is suspended in saturated steam at 1 atm. Estimate the initial rate of condensation on it, and compare its coefficient with that of a horizontal cylinder of the same diameter. Use the property data of Problem 4 (liquid at 90°C, $h_{fg}$ and $\rho_v$ at 100°C).`,
          solution: String.raw`**Assumptions:** laminar film; sphere surface uniform at 80°C (at the instant considered).

1. $h^*_{fg} = 2257\times10^3 + 0.68\times4205\times20 = 2314\times10^3\,\mathrm{J/kg}$ (as in Problem 4).

2. **Sphere** (Nusselt, constant 0.815)

$$h_{sph} = 0.815\left[\frac{g\rho_l(\rho_l - \rho_v)h^*_{fg}k_l^3}{\mu_l(T_{sat} - T_s)D}\right]^{1/4} = 0.815\left[\frac{9.81\times965.3\times964.7\times2.314\times10^6\times0.6728^3}{3.142\times10^{-4}\times20\times0.05}\right]^{1/4} = 9751\,\mathrm{W/m^2K}$$

3. **Rate**

$$A = \pi D^2 = 7.854\times10^{-3}\,\mathrm{m^2},\qquad \dot Q = 9751\times7.854\times10^{-3}\times20 = 1532\,\mathrm{W}$$

$$\dot m = \frac{1532}{2.314\times10^6} = 6.62\times10^{-4}\,\mathrm{kg/s} \approx 2.38\,\mathrm{kg/h}$$

4. **Comparison:** a horizontal cylinder has the same group with 0.729, so

$$\frac{h_{sph}}{h_{cyl}} = \frac{0.815}{0.729} = 1.12,\qquad h_{cyl} = 8722\,\mathrm{W/m^2K}$$

The sphere is about 12% better because its film drains over a shorter mean path. (As the sphere warms toward 100°C, $\Delta T$ and the rate fall.)`,
          answer: String.raw`$h_{sph} \approx 9.75\,\mathrm{kW/m^2K}$, $\dot Q \approx 1.53\,\mathrm{kW}$, $\dot m \approx 6.6\times10^{-4}\,\mathrm{kg/s}$ (2.4 kg/h); 12% above a horizontal cylinder ($h_{cyl} \approx 8.72\,\mathrm{kW/m^2K}$).` }
      ] },

    { id: "practice-condensation-P11", q: 11, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-condensation-P11", label: "", marks: "12", topic: "condensation",
          sub: "Refrigerant (R-134a) condensing on a horizontal tube", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of final 2012-13 Q7(c) (ammonia tube bank) and Çengel refrigerant-condenser problems; new fluid and numbers`,
          text: String.raw`Saturated R-134a vapour at 40°C (1.017 MPa) condenses on the outside of a horizontal 1.6-cm-OD tube whose surface is kept at 32°C. Find the condensation rate per metre of tube. Explain why the result is much lower than for steam under similar conditions.

Data: at 40°C, $h_{fg} = 163.0\,\mathrm{kJ/kg}$, $\rho_v = 50.1\,\mathrm{kg/m^3}$. Liquid at 36°C: $\rho_l = 1163.4\,\mathrm{kg/m^3}$, $\mu_l = 1.699\times10^{-4}\,\mathrm{kg/m\,s}$, $k_l = 0.0764\,\mathrm{W/m\,K}$, $c_{pl} = 1476\,\mathrm{J/kg\,K}$.`,
          solution: String.raw`**Given:** $D = 0.016\,\mathrm{m}$, $\Delta T = 8\,\mathrm{K}$, $L = 1\,\mathrm{m}$.

**Assumptions:** laminar film; single isothermal tube; quiescent vapour. Properties from CoolProp.

1. **Modified latent heat**

$$h^*_{fg} = 163.0\times10^3 + 0.68\times1476\times8 = 171.0\times10^3\,\mathrm{J/kg}$$

2. **Coefficient.** Keep $(\rho_l - \rho_v)$: the vapour is dense at this pressure.

$$h = 0.729\left[\frac{9.81\times1163.4\times(1163.4 - 50.1)\times1.710\times10^5\times0.0764^3}{1.699\times10^{-4}\times8\times0.016}\right]^{1/4} = 1884\,\mathrm{W/m^2K}$$

(Neglecting $\rho_v$ would give 1904 W/m²K, about 1% high. The approximation $\rho_l(\rho_l - \rho_v) \approx \rho_l^2$ is fine for steam at low pressure, but should be checked for refrigerants.)

3. **Heat transfer and condensation per metre**

$$\dot Q = h\pi DL\Delta T = 1884\times\pi\times0.016\times1\times8 = 757\,\mathrm{W}$$

$$\dot m = \frac{757}{1.710\times10^5} = 4.43\times10^{-3}\,\mathrm{kg/s} \approx 15.9\,\mathrm{kg/h}$$

**Why h is lower than for steam** (for steam on a tube $h \approx 10^4\,\mathrm{W/m^2K}$): $h \propto (k_l^3h_{fg})^{1/4}$. R-134a has $k_l$ about 8 times smaller and $h_{fg}$ about 14 times smaller than water. The film is a poorer conductor, and it is thicker for a given heat flux, because more liquid must condense to release the same heat. The condensation rate in kg/s is still comparable, because each kilogram carries far less latent heat.`,
          answer: String.raw`$h^*_{fg} = 171\,\mathrm{kJ/kg}$, $h \approx 1.88\,\mathrm{kW/m^2K}$, $\dot Q \approx 757\,\mathrm{W/m}$, $\dot m \approx 4.4\times10^{-3}\,\mathrm{kg/s}$ per m; h is low because $k_l$ and $h_{fg}$ are small ($h \propto (k^3h_{fg})^{1/4}$).` }
      ] }
  ] });
