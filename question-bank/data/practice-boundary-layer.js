QB.paper({ year: "Practice", set: "Boundary layers & analogies", date: "", marks: 0, practice: true,
  rules: String.raw`Laminar flat-plate boundary layers by the integral method: δ = 4.64√(νx/u∞), the cubic temperature profile and δt/δ, Nu_x = 0.332 Re^½ Pr^⅓ (with and without an unheated starting length), average h, heat loss and drag through the Reynolds–Colburn analogy, and the effect of flow direction. Slide-type problems first (S), then likely final-exam problems (F).`,
  questions: [
    { id: "practice-boundary-layer-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-boundary-layer-P1", label: "", marks: "", topic: "boundary-layer",
          sub: "Integral momentum equation and δ = 4.64√(νx/u∞)", type: "derivation",
          syllabus: "in", repeats: ["2012-13-Q4c", "2013-14-Q6b", "2015-16-Q7a"], origin: "slides", ref: String.raw`Slides 05, pp. 18–21 (velocity conditions, momentum balance on the control volume, cubic profile)`,
          text: String.raw`For steady, incompressible laminar flow over a flat plate with constant free-stream velocity $u_\infty$, make a momentum balance on a control volume of height $H > \delta$ and length $dx$ to obtain the integral momentum equation. Then, with a cubic velocity profile, show that
$$\frac{\delta}{x} = \frac{4.64}{\mathrm{Re}_x^{1/2}}$$`,
          solution: String.raw`**Assumptions:** steady, 2-D, incompressible, constant properties, $\partial p/\partial x = 0$ (flat plate), unit depth.

**Step 1: mass and momentum flows** through the control volume between planes 1 and 2, $0 \le y \le H$:
- Mass in through plane 1: $\int_0^H\rho u\,dy$. Momentum in: $\int_0^H\rho u^2dy$.
- Momentum out through plane 2: $\int_0^H\rho u^2dy + \dfrac{d}{dx}\left(\int_0^H\rho u^2dy\right)dx$.
- No mass crosses the wall, so the extra mass leaving plane 2, $\dfrac{d}{dx}\left(\int_0^H\rho u\,dy\right)dx$, must enter through the top plane A–A. It carries x-momentum $u_\infty\dfrac{d}{dx}\left(\int_0^H\rho u\,dy\right)dx$.

**Step 2: momentum balance.** The only x-force is wall shear, $-\tau_w\,dx$, so
$$\frac{d}{dx}\left(\int_0^H\rho u^2dy\right)dx - u_\infty\frac{d}{dx}\left(\int_0^H\rho u\,dy\right)dx = -\tau_w\,dx$$
Since $u = u_\infty$ above δ, the upper limit becomes δ, and with $u_\infty$ constant:
$$\rho\frac{d}{dx}\int_0^\delta(u_\infty - u)u\,dy = \tau_w = \mu\left.\frac{\partial u}{\partial y}\right|_{y=0}$$
This is the integral momentum equation for the constant-pressure case.

**Step 3: velocity profile.** Take $u = C_1 + C_2y + C_3y^2 + C_4y^3$ with four conditions:
- $u = 0$ at $y = 0$
- $u = u_\infty$ at $y = \delta$
- $\partial u/\partial y = 0$ at $y = \delta$
- $\partial^2u/\partial y^2 = 0$ at $y = 0$ (the momentum equation at the wall, where $u = v = 0$ and $dp/dx = 0$)

These give $C_1 = 0$, $C_3 = 0$, $C_2 = \dfrac{3u_\infty}{2\delta}$, $C_4 = -\dfrac{u_\infty}{2\delta^3}$:
$$\frac{u}{u_\infty} = \frac32\frac{y}{\delta} - \frac12\left(\frac{y}{\delta}\right)^3$$

**Step 4: substitute.** With $\eta = y/\delta$:
$$\int_0^\delta(u_\infty - u)u\,dy = u_\infty^2\delta\int_0^1\left(\tfrac32\eta - \tfrac12\eta^3\right)\left(1 - \tfrac32\eta + \tfrac12\eta^3\right)d\eta = \frac{39}{280}u_\infty^2\delta$$
$$\tau_w = \mu\left.\frac{\partial u}{\partial y}\right|_0 = \frac32\frac{\mu u_\infty}{\delta}$$
so
$$\frac{d}{dx}\left(\frac{39}{280}\rho u_\infty^2\delta\right) = \frac32\frac{\mu u_\infty}{\delta}$$

**Step 5: integrate.** Separating variables:
$$\delta\,d\delta = \frac{140}{13}\frac{\mu}{\rho u_\infty}dx = \frac{140}{13}\frac{\nu}{u_\infty}dx \;\Rightarrow\; \frac{\delta^2}{2} = \frac{140}{13}\frac{\nu x}{u_\infty} + \text{const}$$
At $x = 0$, $\delta = 0$, so the constant is zero:
$$\delta = \sqrt{\frac{280}{13}}\sqrt{\frac{\nu x}{u_\infty}} = 4.64\sqrt{\frac{\nu x}{u_\infty}} \quad\Rightarrow\quad \frac{\delta}{x} = \frac{4.64}{\mathrm{Re}_x^{1/2}},\quad \mathrm{Re}_x = \frac{u_\infty x}{\nu}$$
The exact (Blasius) solution gives $\delta/x = 5.0/\mathrm{Re}_x^{1/2}$. The result is valid for laminar flow, $\mathrm{Re}_x < 5\times10^5$.`,
          answer: String.raw`$\rho\dfrac{d}{dx}\int_0^\delta(u_\infty - u)u\,dy = \tau_w$; the cubic profile gives $\dfrac{39}{280}u_\infty^2\dfrac{d\delta}{dx} = \dfrac{3\nu u_\infty}{2\delta}$, so $\delta = 4.64\sqrt{\nu x/u_\infty}$ (Blasius: 5.0).` }
      ] },

    { id: "practice-boundary-layer-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw`Air at 27°C and 1 atm flows over a flat plate at a speed of 2 m/s. The viscosity of air at 27°C is $1.85\times10^{-5}$ kg/m·s. Assume unit depth in the z direction.`,
      parts: [
        { id: "practice-boundary-layer-P2a", label: "(a)", marks: "", topic: "boundary-layer",
          sub: "δ at 20 cm and 40 cm (slide example)", type: "numerical",
          syllabus: "in", repeats: ["2015-16-Q7b", "2016-17-Q7d", "2017-18-Q7b"], origin: "slides", ref: String.raw`Slides 05, pp. 21–22 (air at 27°C, 2 m/s)`,
          text: String.raw`Calculate the boundary-layer thickness at 20 cm and 40 cm from the leading edge.`,
          solution: String.raw`**Given:** $p = 1.0132\times10^5$ Pa, $T = 300$ K, $u_\infty = 2$ m/s, $\mu = 1.85\times10^{-5}$ kg/m·s.

1. **Density** (ideal gas):
$$\rho = \frac{p}{RT} = \frac{1.0132\times10^5}{287(300)} = 1.177\,\mathrm{kg/m^3}$$
2. **Reynolds numbers** $\mathrm{Re}_x = \rho u_\infty x/\mu$:
$$x = 0.2\,\mathrm{m}: \mathrm{Re} = \frac{1.177(2)(0.2)}{1.85\times10^{-5}} = 25\,444;\qquad x = 0.4\,\mathrm{m}: \mathrm{Re} = 50\,887$$
Both are well below $5\times10^5$, so the layer is laminar.
3. **Thickness** $\delta = 4.64x/\mathrm{Re}_x^{1/2}$:
$$\delta_{20} = \frac{4.64(0.2)}{(25\,444)^{1/2}} = 0.00582\,\mathrm{m},\qquad \delta_{40} = \frac{4.64(0.4)}{(50\,887)^{1/2}} = 0.00823\,\mathrm{m}$$

**Check:** $\delta_{40}/\delta_{20} = \sqrt2$, since $\delta \propto x^{1/2}$.`,
          answer: String.raw`ρ = 1.177 kg/m³; Re = 25 444 and 50 887 (laminar); δ = 5.82 mm at 20 cm and 8.23 mm at 40 cm.` },
        { id: "practice-boundary-layer-P2b", label: "(b)", marks: "", topic: "boundary-layer",
          sub: "Mass flow entering the boundary layer", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 05, p. 23 (mass entrained between x = 20 cm and 40 cm)`,
          text: String.raw`Calculate the mass flow that enters the boundary layer from the free stream between $x = 20$ cm and $x = 40$ cm.`,
          solution: String.raw`1. **Mass flow inside the layer** at any x (per unit depth), with the cubic profile:
$$\int_0^\delta\rho u\,dy = \rho u_\infty\delta\int_0^1\left(\tfrac32\eta - \tfrac12\eta^3\right)d\eta = \rho u_\infty\delta\left(\tfrac34 - \tfrac18\right) = \frac58\rho u_\infty\delta$$
2. **Mass entering between the two stations:**
$$\Delta\dot m = \frac58\rho u_\infty(\delta_{40} - \delta_{20}) = \frac58(1.177)(2.0)(0.00823 - 0.00582) = 3.54\times10^{-3}\,\mathrm{kg/s}$$
per metre of depth. The slides, using δ rounded to 0.0082 and 0.0058 m, get $3.53\times10^{-3}$ kg/s.

**Why it matters:** the layer grows by entraining free-stream fluid through its outer edge. This is the mass that carries $u_\infty$-momentum into the control volume in the integral derivation.`,
          answer: String.raw`$\int_0^\delta\rho u\,dy = \tfrac58\rho u_\infty\delta$, so $\Delta\dot m = \tfrac58(1.177)(2)(0.00241) \approx 3.5\times10^{-3}$ kg/s per m depth.` }
      ] },

    { id: "practice-boundary-layer-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-boundary-layer-P3", label: "", marks: "", topic: "boundary-layer",
          sub: "Cubic temperature profile and δt/δ (with unheated starting length)", type: "derivation",
          syllabus: "in", repeats: ["2023-24-Q5a"], origin: "slides", ref: String.raw`Slides 05, pp. 24–26 (temperature conditions, cubic profile, ζ = Pr^(-1/3)/1.026); unheated length from Table 5-2, p. 40`,
          text: String.raw`A flat plate is unheated for $0 \le x < x_0$ and held at $T_w$ for $x \ge x_0$; the free stream is at $T_\infty$. (a) State the conditions the temperature profile must satisfy and obtain the cubic profile $\dfrac{T - T_w}{T_\infty - T_w} = \dfrac32\dfrac{y}{\delta_t} - \dfrac12\left(\dfrac{y}{\delta_t}\right)^3$. (b) Using the integral energy equation and the cubic velocity profile, show that
$$\zeta = \frac{\delta_t}{\delta} = \frac{1}{1.026}\mathrm{Pr}^{-1/3}\left[1 - \left(\frac{x_0}{x}\right)^{3/4}\right]^{1/3}$$
and state the key assumption.`,
          solution: String.raw`**Assumptions:** steady laminar flow, constant properties, no viscous dissipation, $\delta_t < \delta$ (ζ < 1).

**(a) Temperature profile.** Let $\theta = T - T_w$, $\theta_\infty = T_\infty - T_w$. The conditions are:
- $T = T_w$ at $y = 0$
- $T = T_\infty$ at $y = \delta_t$
- $\partial T/\partial y = 0$ at $y = \delta_t$
- $\partial^2T/\partial y^2 = 0$ at $y = 0$ (the energy equation $u\,\partial T/\partial x + v\,\partial T/\partial y = \alpha\,\partial^2T/\partial y^2$ with $u = v = 0$ at the wall)

A cubic $\theta = a + by + cy^2 + dy^3$ with these conditions gives $a = 0$, $c = 0$, $b = 3\theta_\infty/(2\delta_t)$, $d = -\theta_\infty/(2\delta_t^3)$:
$$\frac{\theta}{\theta_\infty} = \frac32\frac{y}{\delta_t} - \frac12\left(\frac{y}{\delta_t}\right)^3$$
This has the same form as the velocity profile, with $\delta_t$ in place of δ.

**(b) Integral energy equation.** An energy balance on a control volume of height $H > \delta_t$ (the same steps as the momentum balance, with enthalpy in place of momentum) gives
$$\frac{d}{dx}\int_0^{\delta_t}(T_\infty - T)u\,dy = \alpha\left.\frac{\partial T}{\partial y}\right|_{y=0}$$
Write $T_\infty - T = \theta_\infty - \theta$ and substitute both cubic profiles. With $\zeta = \delta_t/\delta$:
$$\int_0^{\delta_t}(\theta_\infty - \theta)u\,dy = \theta_\infty u_\infty\delta\left(\frac{3}{20}\zeta^2 - \frac{3}{280}\zeta^4\right) \approx \frac{3}{20}\theta_\infty u_\infty\delta\zeta^2$$
The ζ⁴ term is dropped because ζ < 1 makes it small. The right-hand side is $\alpha\,\dfrac{3\theta_\infty}{2\delta_t} = \dfrac{3\alpha\theta_\infty}{2\zeta\delta}$. Hence
$$\frac{1}{10}u_\infty\frac{d}{dx}(\delta\zeta^2) = \frac{\alpha}{\zeta\delta} \;\Rightarrow\; \frac{u_\infty}{10}\left(\zeta^3\delta\frac{d\delta}{dx} + 2\delta^2\zeta^2\frac{d\zeta}{dx}\right) = \alpha$$
From P1, $\delta\,\dfrac{d\delta}{dx} = \dfrac{140}{13}\dfrac{\nu}{u_\infty}$ and $\delta^2 = \dfrac{280}{13}\dfrac{\nu x}{u_\infty}$:
$$\zeta^3 + 4x\zeta^2\frac{d\zeta}{dx} = \frac{13}{14}\frac{\alpha}{\nu} = \frac{13}{14\,\mathrm{Pr}}$$
**Solve:** with $r = \zeta^3$, $r + \dfrac43x\dfrac{dr}{dx} = \dfrac{13}{14\mathrm{Pr}}$, whose solution is $r = \dfrac{13}{14\mathrm{Pr}} + Cx^{-3/4}$. Heating starts at $x_0$, so $\zeta = 0$ there and $C = -\dfrac{13}{14\mathrm{Pr}}x_0^{3/4}$:
$$\zeta = \left(\frac{13}{14}\right)^{1/3}\mathrm{Pr}^{-1/3}\left[1 - \left(\frac{x_0}{x}\right)^{3/4}\right]^{1/3} = \frac{1}{1.026}\mathrm{Pr}^{-1/3}\left[1 - \left(\frac{x_0}{x}\right)^{3/4}\right]^{1/3}$$
since $(13/14)^{1/3} = 0.976 = 1/1.025$, quoted as 1/1.026. For a plate heated over its whole length ($x_0 = 0$): $\delta_t/\delta = \mathrm{Pr}^{-1/3}/1.026$.

**Validity:** the assumption ζ < 1 holds for Pr ≳ 0.7 (most gases and liquids), but not for liquid metals (Pr ≈ 0.01).`,
          answer: String.raw`$\theta/\theta_\infty = \tfrac32(y/\delta_t) - \tfrac12(y/\delta_t)^3$; the energy integral gives $\zeta^3 + 4x\zeta^2\,d\zeta/dx = 13/(14\mathrm{Pr})$, so $\zeta = \mathrm{Pr}^{-1/3}[1 - (x_0/x)^{3/4}]^{1/3}/1.026$ (valid for ζ < 1, Pr ≳ 0.7).` }
      ] },

    { id: "practice-boundary-layer-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-boundary-layer-P4", label: "", marks: "", topic: "boundary-layer",
          sub: "Derivation of Nu_x = 0.332 Re^½ Pr^⅓ and h̄ = 2h_L", type: "derivation",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 05, pp. 26–27 (h from the wall gradient; average h over the plate)`,
          text: String.raw`Using the cubic temperature profile and the results for δ and $\delta_t/\delta$, derive the local Nusselt number for a flat plate heated over its entire length, $\mathrm{Nu}_x = 0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$. Show that the average coefficient over a length $L$ is $\bar h = 2h_{x=L}$, and write the form for an unheated starting length.`,
          solution: String.raw`1. **h from the wall gradient.** At the wall, heat leaves by conduction into the fluid:
$$q_w = -k\left.\frac{\partial T}{\partial y}\right|_0 = h_x(T_w - T_\infty) \;\Rightarrow\; h_x = \frac{-k(\partial T/\partial y)_w}{T_w - T_\infty}$$
2. From the cubic profile, $\left.\dfrac{\partial T}{\partial y}\right|_0 = \dfrac{3}{2}\dfrac{T_\infty - T_w}{\delta_t}$, so
$$h_x = \frac{3k}{2\delta_t} = \frac{3k}{2\zeta\delta}$$
3. **Substitute** $\delta = 4.64x\,\mathrm{Re}_x^{-1/2}$ and $\zeta = \mathrm{Pr}^{-1/3}/1.026$:
$$h_x = \frac{3(1.026)}{2(4.64)}\frac{k}{x}\mathrm{Pr}^{1/3}\mathrm{Re}_x^{1/2} = 0.332\,k\,\mathrm{Pr}^{1/3}\left(\frac{u_\infty}{\nu x}\right)^{1/2}$$
$$\mathrm{Nu}_x = \frac{h_xx}{k} = 0.332\,\mathrm{Pr}^{1/3}\mathrm{Re}_x^{1/2}$$
4. **Unheated starting length $x_0$:** ζ carries the factor $[1 - (x_0/x)^{3/4}]^{1/3}$ and $h_x \propto 1/\zeta$, so
$$\mathrm{Nu}_x = \frac{0.332\,\mathrm{Pr}^{1/3}\mathrm{Re}_x^{1/2}}{[1 - (x_0/x)^{3/4}]^{1/3}}$$
5. **Average over $0 \le x \le L$** ($x_0 = 0$). Since $h_x = Cx^{-1/2}$ with $C = 0.332k\mathrm{Pr}^{1/3}(u_\infty/\nu)^{1/2}$:
$$\bar h = \frac{\int_0^Lh_x\,dx}{\int_0^Ldx} = \frac{C}{L}\left[2x^{1/2}\right]_0^L = 2CL^{-1/2} = 2h_{x=L}$$
$$\overline{\mathrm{Nu}}_L = \frac{\bar hL}{k} = 0.664\,\mathrm{Re}_L^{1/2}\mathrm{Pr}^{1/3}$$
6. **Validity:** laminar, $\mathrm{Re}_x < 5\times10^5$, $0.6 < \mathrm{Pr} < 50$, constant $T_w$; properties at the film temperature $T_f = (T_w + T_\infty)/2$.`,
          answer: String.raw`$h_x = 3k/(2\delta_t)$ with $\delta_t = 4.64x\,\mathrm{Re}_x^{-1/2}\mathrm{Pr}^{-1/3}/1.026$ gives $\mathrm{Nu}_x = 0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$ (divided by $[1 - (x_0/x)^{3/4}]^{1/3}$ for an unheated start); $\bar h = 2h_L$, $\overline{\mathrm{Nu}}_L = 0.664\,\mathrm{Re}_L^{1/2}\mathrm{Pr}^{1/3}$.` }
      ] },

    { id: "practice-boundary-layer-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw`Air at 27°C and 1 atm flows over a flat plate at a speed of 2 m/s. The plate is heated over its entire length to 60°C. Air properties at the film temperature 316.5 K (Holman Appendix A, as on the slides): $\nu = 17.36\times10^{-6}$ m²/s, $k = 0.02749$ W/m·°C, Pr = 0.7, $c_p = 1.006$ kJ/kg·°C. Take unit depth.`,
      parts: [
        { id: "practice-boundary-layer-P5a", label: "(a)", marks: "", topic: "boundary-layer",
          sub: "Heat transferred in the first 20 cm (slide example)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 05, pp. 29–30`,
          text: String.raw`Calculate the heat transferred in the first 20 cm of the plate.`,
          solution: String.raw`**Given:** $T_\infty = 27$°C, $T_w = 60$°C, $u_\infty = 2$ m/s, $x = 0.2$ m, 1 m depth.

**Assumptions:** laminar (checked), properties at $T_f = (27 + 60)/2 = 43.5$°C = 316.5 K.

1. $\mathrm{Re}_x = \dfrac{u_\infty x}{\nu} = \dfrac{2(0.2)}{17.36\times10^{-6}} = 23\,041$ (laminar)
2. $\mathrm{Nu}_x = 0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3} = 0.332(23\,041)^{1/2}(0.7)^{1/3} = 44.74$
3. $h_x = \mathrm{Nu}_x\dfrac{k}{x} = \dfrac{44.74(0.02749)}{0.2} = 6.15\,\mathrm{W/m^2\cdot^\circ C}$
4. Average over the first 20 cm: $\bar h = 2h_x = 12.3\,\mathrm{W/m^2\cdot^\circ C}$
5. $q = \bar hA(T_w - T_\infty) = 12.3(0.2 \times 1)(60 - 27) = 81.2\,\mathrm{W}$`,
          answer: String.raw`Re = 23 041, Nu_x = 44.7, $h_x = 6.15$ and $\bar h = 12.3$ W/m²·°C, so $q = 81.2$ W (per m depth).` },
        { id: "practice-boundary-layer-P5b", label: "(b)", marks: "", topic: "boundary-layer",
          sub: "Heat transferred in the first 40 cm (slide example)", type: "numerical",
          syllabus: "in", repeats: ["2014-15-Q3b"], origin: "slides", ref: String.raw`Slides 05, p. 31`,
          text: String.raw`Calculate the heat transferred in the first 40 cm of the plate.`,
          solution: String.raw`1. $\mathrm{Re}_x = \dfrac{2(0.4)}{17.36\times10^{-6}} = 46\,083$ (laminar)
2. $\mathrm{Nu}_x = 0.332(46\,083)^{1/2}(0.7)^{1/3} = 63.28$
3. $h_x = \dfrac{63.28(0.02749)}{0.4} = 4.349\,\mathrm{W/m^2\cdot^\circ C}$, so $\bar h = 2(4.349) = 8.698\,\mathrm{W/m^2\cdot^\circ C}$
4. $q = 8.698(0.4 \times 1)(60 - 27) = 114.8\,\mathrm{W}$

**Check:** doubling the length raises q only by a factor $\sqrt2$ (81.2 → 114.8 W), because h falls as $x^{-1/2}$ while the thermal layer thickens. At 40 cm, $\delta = 4.64x/\mathrm{Re}^{1/2} = 8.6$ mm and $\delta_t = \delta\,\mathrm{Pr}^{-1/3}/1.026 = 9.5$ mm.`,
          answer: String.raw`Re = 46 083, $h_x = 4.35$ and $\bar h = 8.70$ W/m²·°C, so $q = 114.8$ W (per m depth).` },
        { id: "practice-boundary-layer-P5c", label: "(c)", marks: "", topic: "boundary-layer",
          sub: "Drag on the first 40 cm by the Reynolds–Colburn analogy", type: "numerical",
          syllabus: "in", repeats: ["2014-15-Q3b"], origin: "slides", ref: String.raw`Slides 05, pp. 42–45`,
          text: String.raw`Compute the drag force exerted on the first 40 cm of the plate using the analogy between fluid friction and heat transfer.`,
          solution: String.raw`**Method:** averaged Reynolds–Colburn analogy, $\overline{\mathrm{St}}\,\mathrm{Pr}^{2/3} = \bar C_f/2$.

1. **Density** at 316.5 K:
$$\rho = \frac{p}{RT} = \frac{1.0132\times10^5}{287(316.5)} = 1.115\,\mathrm{kg/m^3}$$
2. **Average Stanton number** for the 40 cm length, with $\bar h = 8.698$ W/m²·°C from (b):
$$\overline{\mathrm{St}} = \frac{\bar h}{\rho c_pu_\infty} = \frac{8.698}{1.115(1006)(2)} = 3.88\times10^{-3}$$
3. **Friction coefficient:**
$$\frac{\bar C_f}{2} = \overline{\mathrm{St}}\,\mathrm{Pr}^{2/3} = (3.88\times10^{-3})(0.7)^{2/3} = 3.06\times10^{-3}$$
4. **Average wall shear:**
$$\bar\tau_w = \bar C_f\frac{\rho u_\infty^2}{2} = \frac{\bar C_f}{2}\rho u_\infty^2 = (3.06\times10^{-3})(1.115)(2)^2 = 0.0136\,\mathrm{N/m^2}$$
5. **Drag** on 0.4 m × 1 m:
$$D = \bar\tau_wA = 0.0136(0.4) = 5.44\times10^{-3}\,\mathrm{N} = 5.44\,\mathrm{mN}$$

**Check:** the exact laminar result, $\bar C_f/2 = 0.664\,\mathrm{Re}_L^{-1/2} = 0.664/\sqrt{46\,083} = 3.09\times10^{-3}$, agrees within 1%.`,
          answer: String.raw`$\overline{\mathrm{St}} = 3.88\times10^{-3}$, $\bar C_f/2 = 3.06\times10^{-3}$, $\bar\tau_w = 0.0136$ N/m², so the drag is $D \approx 5.4$ mN per m depth.` }
      ] },

    { id: "practice-boundary-layer-P6", q: 6, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-boundary-layer-P6", label: "", marks: "", topic: "boundary-layer",
          sub: "Reynolds–Colburn analogy: St Pr^(2/3) = C_f/2", type: "derivation",
          syllabus: "in", repeats: ["2011-12-Q7a", "2014-15-Q3a", "2015-16-Q8a", "2016-17-Q8a", "2017-18-Q8a", "2020-21-Q7a", "2022-23-Q3a"], origin: "slides", ref: String.raw`Slides 05, pp. 31–33 (fluid friction and heat transfer)`,
          text: String.raw`Starting from the definition of the friction coefficient and the cubic velocity profile, derive the Reynolds–Colburn analogy for laminar flow over a flat plate,
$$\mathrm{St}_x\mathrm{Pr}^{2/3} = \frac{C_{fx}}{2}$$
State its use and its limitations.`,
          solution: String.raw`**Assumptions:** laminar flow over a flat plate, $dp/dx = 0$, constant properties, plate heated from the leading edge.

1. **Definition of the friction coefficient:**
$$\tau_w = C_f\frac{\rho u_\infty^2}{2}$$
2. **Wall shear from the velocity profile.** With $\tau_w = \mu(\partial u/\partial y)_w$ and $u/u_\infty = \tfrac32(y/\delta) - \tfrac12(y/\delta)^3$:
$$\tau_w = \frac32\frac{\mu u_\infty}{\delta}$$
3. **Insert δ** $= 4.64\sqrt{\nu x/u_\infty}$:
$$\tau_w = \frac{3}{2}\frac{\mu u_\infty}{4.64}\left(\frac{u_\infty}{\nu x}\right)^{1/2}$$
4. **Combine** steps 1 and 3:
$$\frac{C_{fx}}{2} = \frac{\tau_w}{\rho u_\infty^2} = \frac{3}{2(4.64)}\frac{\mu}{\rho u_\infty}\left(\frac{u_\infty}{\nu x}\right)^{1/2} = 0.323\,\mathrm{Re}_x^{-1/2}$$
The exact (Blasius) solution gives $C_{fx}/2 = 0.332\,\mathrm{Re}_x^{-1/2}$.
5. **Rewrite the heat-transfer result** $\mathrm{Nu}_x = 0.332\,\mathrm{Pr}^{1/3}\mathrm{Re}_x^{1/2}$ by dividing by $\mathrm{Re}_x\mathrm{Pr}$:
$$\frac{\mathrm{Nu}_x}{\mathrm{Re}_x\mathrm{Pr}} = \frac{h_x}{\rho c_pu_\infty} = \mathrm{St}_x = 0.332\,\mathrm{Pr}^{-2/3}\mathrm{Re}_x^{-1/2} \;\Rightarrow\; \mathrm{St}_x\mathrm{Pr}^{2/3} = 0.332\,\mathrm{Re}_x^{-1/2}$$
6. **Compare** with step 4 (exact constant 0.332):
$$\mathrm{St}_x\mathrm{Pr}^{2/3} = \frac{C_{fx}}{2}$$
Both sides vary as $\mathrm{Re}_x^{-1/2}$, so the relation also holds for plate averages: $\overline{\mathrm{St}}\,\mathrm{Pr}^{2/3} = \bar C_f/2$.

**Use:** h can be found from a friction or drag measurement made with no heat transfer, and vice versa (see P5(c)).

**Limits:** laminar flat plate with zero pressure gradient, 0.6 < Pr < 60 (also used approximately for turbulent plate flow); not valid where form drag exists (e.g. bluff bodies). For Pr = 1 it reduces to Reynolds' analogy, St = C_f/2.`,
          answer: String.raw`$C_{fx}/2 = \tau_w/\rho u_\infty^2 = 0.323\,\mathrm{Re}_x^{-1/2}$ (exact 0.332) and $\mathrm{St}_x = 0.332\,\mathrm{Pr}^{-2/3}\mathrm{Re}_x^{-1/2}$, so $\mathrm{St}_x\mathrm{Pr}^{2/3} = C_{fx}/2$.` }
      ] },

    { id: "practice-boundary-layer-P7", q: 7, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-boundary-layer-P7", label: "", marks: "", topic: "boundary-layer",
          sub: "Engine oil over a heated square plate (high-Pr laminar correlation)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 05, pp. 39–41 (engine oil at 20°C over a 20 cm square plate; Table 5-2)`,
          text: String.raw`Engine oil at 20°C is forced over a 20 cm square plate at 1.2 m/s. The plate is heated to a uniform 60°C. Calculate the heat lost by the plate. Oil properties at 40°C: $\rho = 876$ kg/m³, $\nu = 0.00024$ m²/s, $k = 0.144$ W/m·°C, Pr = 2870.`,
          solution: String.raw`**Given:** $u_\infty = 1.2$ m/s, $L = 0.2$ m (square, area 0.04 m²), $T_\infty = 20$°C, $T_w = 60$°C.

**Assumptions:** laminar (checked), properties at $T_f = (20 + 60)/2 = 40$°C, heat lost from one face.

1. **Reynolds number:**
$$\mathrm{Re}_L = \frac{u_\infty L}{\nu} = \frac{1.2(0.2)}{0.00024} = 1000 \quad(\text{laminar})$$
2. **Correlation:** Pr = 2870 is outside the 0.6–50 range of $0.332\,\mathrm{Re}^{1/2}\mathrm{Pr}^{1/3}$. Table 5-2 gives the Churchill–Ozoe form for any Pr with $\mathrm{Re}_x\mathrm{Pr} > 100$ (here $2.87\times10^6$ ✓):
$$\mathrm{Nu}_x = \frac{0.3387\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}}{[1 + (0.0468/\mathrm{Pr})^{2/3}]^{1/4}} = \frac{0.3387(1000)^{1/2}(2870)^{1/3}}{[1 + (0.0468/2870)^{2/3}]^{1/4}} = 152.2$$
3. **Local h at x = L:**
$$h_L = \frac{152.2(0.144)}{0.2} = 109.6\,\mathrm{W/m^2\cdot^\circ C}$$
4. **Average:** $\bar h = 2h_L = 219.2\,\mathrm{W/m^2\cdot^\circ C}$
5. **Heat loss:**
$$q = \bar hA(T_w - T_\infty) = 219.2(0.2)^2(60 - 20) = 350.6\,\mathrm{W}$$

**Check:** the simple $0.332\,\mathrm{Re}^{1/2}\mathrm{Pr}^{1/3}$ would give Nu = 149.2 and q = 344 W, only 2% lower, because the bracket is ≈ 1 at high Pr.`,
          answer: String.raw`Re = 1000 (laminar); Churchill–Ozoe gives $\mathrm{Nu}_L = 152.2$, $h_L = 109.6$ and $\bar h = 219.2$ W/m²·°C, so $q \approx 351$ W.` }
      ] },

    { id: "practice-boundary-layer-P8", q: 8, section: "S", compulsory: false,
      stem: String.raw`Variation with fresh numbers. Air at 20°C and 1 atm flows at 3 m/s along a plate 0.6 m long (in the flow direction) and 1 m wide, held at 80°C. Air at the film temperature 50°C (CoolProp): $\rho = 1.092$ kg/m³, $\nu = 1.797\times10^{-5}$ m²/s, $k = 0.02808$ W/m·°C, $c_p = 1007$ J/kg·°C, Pr = 0.704.`,
      parts: [
        { id: "practice-boundary-layer-P8a", label: "(a)", marks: "", topic: "boundary-layer",
          sub: "δ, δt and h at the trailing edge; heat loss", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 05, pp. 21–31 (air over a heated plate)`,
          text: String.raw`Find δ and $\delta_t$ at the trailing edge, the local and average heat-transfer coefficients, and the heat loss from one side.`,
          solution: String.raw`**Given:** $u_\infty = 3$ m/s, $L = 0.6$ m, $W = 1$ m, $T_w - T_\infty = 60$°C.

1. $\mathrm{Re}_L = \dfrac{3(0.6)}{1.797\times10^{-5}} = 1.002\times10^5$ (laminar)
2. $\delta = \dfrac{4.64L}{\mathrm{Re}_L^{1/2}} = \dfrac{4.64(0.6)}{(1.002\times10^5)^{1/2}} = 8.80\times10^{-3}$ m = 8.8 mm
3. $\delta_t = \dfrac{\delta\,\mathrm{Pr}^{-1/3}}{1.026} = \dfrac{8.80(1.124)}{1.026} = 9.64$ mm (ζ ≈ 1.1; Pr ≈ 0.7 is the borderline of the ζ < 1 assumption)
4. $\mathrm{Nu}_L = 0.332(1.002\times10^5)^{1/2}(0.704)^{1/3} = 93.5$, so $h_L = \dfrac{93.5(0.02808)}{0.6} = 4.37\,\mathrm{W/m^2\cdot^\circ C}$
5. $\bar h = 2h_L = 8.75\,\mathrm{W/m^2\cdot^\circ C}$
6. $q = \bar hWL(T_w - T_\infty) = 8.75(0.6)(1)(60) = 315\,\mathrm{W}$`,
          answer: String.raw`$\mathrm{Re}_L = 1.0\times10^5$; δ = 8.8 mm, $\delta_t$ = 9.6 mm; $h_L = 4.37$ and $\bar h = 8.75$ W/m²·°C; $q \approx 315$ W.` },
        { id: "practice-boundary-layer-P8b", label: "(b)", marks: "", topic: "boundary-layer",
          sub: "Drag from the Reynolds–Colburn analogy", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 05, pp. 42–45`,
          text: String.raw`Using the Reynolds–Colburn analogy, find the drag force on one side of the plate and check it against $\bar C_f = 1.328\,\mathrm{Re}_L^{-1/2}$.`,
          solution: String.raw`1. $\overline{\mathrm{St}} = \dfrac{\bar h}{\rho c_pu_\infty} = \dfrac{8.75}{1.092(1007)(3)} = 2.65\times10^{-3}$
2. $\dfrac{\bar C_f}{2} = \overline{\mathrm{St}}\,\mathrm{Pr}^{2/3} = 2.65\times10^{-3}(0.704)^{2/3} = 2.10\times10^{-3}$
3. $\bar\tau_w = \dfrac{\bar C_f}{2}\rho u_\infty^2 = 2.10\times10^{-3}(1.092)(3)^2 = 0.0206\,\mathrm{N/m^2}$
4. $D = \bar\tau_wWL = 0.0206(0.6 \times 1) = 0.0124\,\mathrm{N}$

**Check:** $\bar C_f = 1.328/\sqrt{1.002\times10^5} = 4.20\times10^{-3}$, i.e. $\bar C_f/2 = 2.10\times10^{-3}$, identical. The analogy is exact in laminar flow because both results come from the same boundary-layer solution.`,
          answer: String.raw`$\overline{\mathrm{St}} = 2.65\times10^{-3}$, $\bar C_f/2 = 2.10\times10^{-3}$, $\bar\tau_w = 0.0206$ N/m², so $D \approx 0.0124$ N (matches $1.328\,\mathrm{Re}^{-1/2}$).` }
      ] },

    { id: "practice-boundary-layer-P9", q: 9, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-boundary-layer-P9", label: "", marks: "12", topic: "boundary-layer",
          sub: "Effect of flow direction on heat loss and drag (water)", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Ex. 5-4 / Çengel Ch. 7; close cousin of 2020-21 Q7(b) (600 × 300 mm plate)`,
          text: String.raw`Water at 15°C flows at 0.3 m/s over a 50 cm × 25 cm flat plate kept at 45°C. Calculate the heat transfer from one side, and the drag on that side, when the flow is parallel to (a) the 50 cm side and (b) the 25 cm side. Which orientation would you choose to maximise heat transfer, and why?

Water at the film temperature 30°C: $\rho = 995.6$ kg/m³, $\nu = 0.801\times10^{-6}$ m²/s, $k = 0.614$ W/m·°C, Pr = 5.42.`,
          solution: String.raw`**Given:** $u_\infty = 0.3$ m/s, ΔT = 45 − 15 = 30°C, plate area 0.125 m².

**Assumptions:** laminar (checked), properties at $T_f = 30$°C, plate heated from the leading edge; $0.6 < \mathrm{Pr} = 5.42 < 50$, so the 0.332/0.664 relations apply.

**Relations:** $\overline{\mathrm{Nu}}_L = 0.664\,\mathrm{Re}_L^{1/2}\mathrm{Pr}^{1/3}$, $\bar C_f = 1.328\,\mathrm{Re}_L^{-1/2}$.

**(a) Flow along the 50 cm side** (L = 0.5 m, W = 0.25 m):
1. $\mathrm{Re}_L = \dfrac{0.3(0.5)}{0.801\times10^{-6}} = 1.873\times10^5$ (laminar)
2. $\overline{\mathrm{Nu}} = 0.664(1.873\times10^5)^{1/2}(5.42)^{1/3} = 504.7$, so $\bar h = \dfrac{504.7(0.614)}{0.5} = 620\,\mathrm{W/m^2\cdot^\circ C}$
3. $q = 620(0.125)(30) = 2324\,\mathrm{W}$
4. $\bar C_f = 1.328/\sqrt{1.873\times10^5} = 3.07\times10^{-3}$, so $D = \bar C_f\tfrac12\rho u_\infty^2A = 3.07\times10^{-3}(0.5)(995.6)(0.09)(0.125) = 0.0172\,\mathrm{N}$

**(b) Flow along the 25 cm side** (L = 0.25 m, W = 0.5 m):
1. $\mathrm{Re}_L = 9.36\times10^4$
2. $\overline{\mathrm{Nu}} = 356.9$, so $\bar h = 876.6\,\mathrm{W/m^2\cdot^\circ C}$
3. $q = 876.6(0.125)(30) = 3287\,\mathrm{W}$
4. $\bar C_f = 4.34\times10^{-3}$, so $D = 0.0243\,\mathrm{N}$

**Comparison:** for the same area, $q \propto WL^{1/2}$, so $q_b/q_a = \sqrt{0.5/0.25} = 1.41$. The drag rises by the same factor.

**Choice:** for maximum heat transfer, let the flow run along the **short** side. The boundary layer then stays thinner over the whole plate (δ at the trailing edge is 3.8 mm instead of 5.4 mm), so the average h is higher. The cost is a 41% higher drag (pumping power).`,
          answer: String.raw`(a) Along 50 cm: Re = $1.87\times10^5$, $\bar h = 620$ W/m²·°C, $q \approx 2.32$ kW, D = 0.017 N. (b) Along 25 cm: $\bar h = 877$ W/m²·°C, $q \approx 3.29$ kW, D = 0.024 N. The short side gives 41% more heat transfer (and 41% more drag).` }
      ] },

    { id: "practice-boundary-layer-P10", q: 10, section: "F", compulsory: false,
      stem: String.raw`Air at 25°C and 1 atm flows at 5 m/s over a flat plate. The first 10 cm from the leading edge is insulated (unheated); beyond that the plate is held at 75°C. Air at the film temperature 50°C: $\nu = 1.797\times10^{-5}$ m²/s, $k = 0.02808$ W/m·°C, Pr = 0.704.`,
      parts: [
        { id: "practice-boundary-layer-P10a", label: "(a)", marks: "10", topic: "boundary-layer",
          sub: "δ, δt, h_x and q″ with an unheated starting length", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Ex. 5-5 (unheated starting length, Table 5-2); cousin of 2023-24 Q5(b)`,
          text: String.raw`At $x = 30$ cm and $x = 50$ cm from the leading edge, calculate δ, $\delta_t$, the local heat-transfer coefficient and the local heat flux.`,
          solution: String.raw`**Given:** $u_\infty = 5$ m/s, $x_0 = 0.10$ m, $T_w - T_\infty = 50$°C.

**Relations** (Slides 05 / Table 5-2):
$$\delta = \frac{4.64x}{\mathrm{Re}_x^{1/2}},\quad \delta_t = \frac{\delta}{1.026}\mathrm{Pr}^{-1/3}\left[1 - \left(\frac{x_0}{x}\right)^{3/4}\right]^{1/3},\quad \mathrm{Nu}_x = \frac{0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}}{[1 - (x_0/x)^{3/4}]^{1/3}}$$

| Quantity | x = 0.30 m | x = 0.50 m |
|---|---|---|
| $\mathrm{Re}_x = u_\infty x/\nu$ | 83 470 (laminar) | 139 100 (laminar) |
| δ (mm) | 4.82 | 6.22 |
| $(x_0/x)^{3/4}$ | 0.4387 | 0.2991 |
| $[1 - (x_0/x)^{3/4}]^{1/3}$ | 0.8249 | 0.8883 |
| $\delta_t$ (mm) | 4.82(1.124)(0.8249)/1.026 = 4.35 | 6.05 |
| $h_x$ with $x_0 = 0$ (W/m²·°C) | 7.99 | 6.19 |
| $h_x$ with unheated start (W/m²·°C) | 7.99/0.8249 = 9.68 | 6.96 |
| $q'' = h_x(T_w - T_\infty)$ (W/m²) | 484 | 348 |

**Sample calculation at x = 0.3 m:**
$$\mathrm{Nu}_x = \frac{0.332(83\,470)^{1/2}(0.704)^{1/3}}{0.8249} = 103.4,\qquad h_x = \frac{103.4(0.02808)}{0.3} = 9.68\,\mathrm{W/m^2\cdot^\circ C}$$
**Check:** $h_x = 3k/(2\delta_t) = 1.5(0.02808)/0.00435 = 9.67$ W/m²·°C. ✓`,
          answer: String.raw`x = 0.3 m: δ = 4.8 mm, $\delta_t$ = 4.35 mm, $h_x = 9.7$ W/m²·°C, q″ = 484 W/m². x = 0.5 m: δ = 6.2 mm, $\delta_t$ = 6.05 mm, $h_x = 7.0$ W/m²·°C, q″ = 348 W/m².` },
        { id: "practice-boundary-layer-P10b", label: "(b)", marks: "5", topic: "boundary-layer",
          sub: "Why an unheated start raises the local h", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Sec. 5-6`,
          text: String.raw`Explain why the local heat-transfer coefficient is higher than for a plate heated from the leading edge, and why the difference shrinks downstream.`,
          solution: String.raw`- The velocity layer starts at x = 0, but the thermal layer starts only at $x_0$. Just after $x_0$ the thermal layer is very thin, so the wall gradient $(\partial T/\partial y)_w \approx 3\Delta T/(2\delta_t)$ and hence $h = 3k/(2\delta_t)$ are large. Theoretically h → ∞ at $x = x_0$.
- The factor $[1 - (x_0/x)^{3/4}]^{-1/3}$ is 1.21 at 0.3 m and 1.13 at 0.5 m. As $x \gg x_0$ the unheated part becomes a small fraction of the length, $\delta_t$ approaches its fully heated value $\delta\,\mathrm{Pr}^{-1/3}/1.026$, and the factor tends to 1.
- With an unheated start, $\delta_t$ is no longer a fixed fraction of δ: the ratio grows with x.`,
          answer: String.raw`The thermal layer begins only at $x_0$, so it is thinner (larger wall gradient) than for full heating; the factor $[1 - (x_0/x)^{3/4}]^{-1/3}$ falls from 1.21 to 1.13 between 0.3 m and 0.5 m and tends to 1 far downstream.` }
      ] },

    { id: "practice-boundary-layer-P11", q: 11, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-boundary-layer-P11", label: "", marks: "12", topic: "boundary-layer",
          sub: "Heat loss predicted from a measured drag (Reynolds–Colburn)", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Ch. 5 analogy problems; cousin of 2014-15 Q3(b) and 2021-22 Q5(b)`,
          text: String.raw`A thin flat plate 0.5 m long (in the flow direction) and 1 m wide is held parallel to an air stream at 6 m/s. In an isothermal wind-tunnel test the total drag on the plate (both sides) is measured as 0.060 N. The same plate is then heated to 45°C in air at 25°C at the same speed. Using the Reynolds–Colburn analogy, estimate the average heat-transfer coefficient and the heat loss from both sides. Compare with the laminar correlation. Take air properties at 35°C for both conditions: $\rho = 1.146$ kg/m³, $\nu = 1.652\times10^{-5}$ m²/s, $k = 0.02699$ W/m·°C, $c_p = 1007$ J/kg·°C, Pr = 0.706.`,
          solution: String.raw`**Given:** $L = 0.5$ m, $W = 1$ m, $u_\infty = 6$ m/s, $D = 0.060$ N on both sides, ΔT = 20°C.

**Assumptions:** laminar (checked), no pressure gradient, analogy valid (0.6 < Pr < 60).

1. **Flow regime:** $\mathrm{Re}_L = \dfrac{6(0.5)}{1.652\times10^{-5}} = 1.816\times10^5$ (laminar)
2. **Average wall shear** (area of two sides = 1.0 m²):
$$\bar\tau_w = \frac{D}{2WL} = \frac{0.060}{2(0.5)(1)} = 0.060\,\mathrm{N/m^2}$$
3. **Friction coefficient:**
$$\bar C_f = \frac{\bar\tau_w}{\frac12\rho u_\infty^2} = \frac{0.060}{0.5(1.146)(6)^2} = 2.91\times10^{-3}$$
(The theory value $1.328\,\mathrm{Re}^{-1/2} = 3.12\times10^{-3}$ is about 7% higher.)
4. **Analogy:**
$$\overline{\mathrm{St}} = \frac{\bar C_f}{2}\mathrm{Pr}^{-2/3} = (1.454\times10^{-3})(0.706)^{-2/3} = 1.834\times10^{-3}$$
5. **Heat-transfer coefficient:**
$$\bar h = \overline{\mathrm{St}}\,\rho c_pu_\infty = 1.834\times10^{-3}(1.146)(1007)(6) = 12.7\,\mathrm{W/m^2\cdot^\circ C}$$
6. **Heat loss from both sides:**
$$q = \bar h(2WL)(T_w - T_\infty) = 12.7(1.0)(20) = 254\,\mathrm{W}$$
7. **Check with the correlation:**
$$\overline{\mathrm{Nu}} = 0.664\,\mathrm{Re}^{1/2}\mathrm{Pr}^{1/3} = 0.664(1.816\times10^5)^{1/2}(0.706)^{1/3} = 252,\qquad \bar h = \frac{252(0.02699)}{0.5} = 13.6\,\mathrm{W/m^2\cdot^\circ C}$$
The analogy estimate is 7% lower, the same 7% by which the measured drag is below theory.

**Why it matters:** this is the practical use stated on the slides: h is obtained from a friction (drag) measurement made without any heat transfer.`,
          answer: String.raw`$\bar\tau_w = 0.060$ N/m², $\bar C_f = 2.91\times10^{-3}$, $\overline{\mathrm{St}} = 1.83\times10^{-3}$, so $\bar h \approx 12.7$ W/m²·°C and $q \approx 254$ W (the correlation gives 13.6 W/m²·°C).` }
      ] },

    { id: "practice-boundary-layer-P12", q: 12, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-boundary-layer-P12a", label: "(a)", marks: "6", topic: "boundary-layer",
          sub: "Velocity vs thermal boundary layer (sketch)", type: "sketch",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Asked in finals like 2013-14 Q6(a), 2017-18 Q6(a), 2018-19 Q7(b), 2020-21 Q5(b)`,
          text: String.raw`With a neat sketch, explain how the velocity and thermal boundary layers develop on a heated flat plate, and how their thicknesses are defined.`,
          solution: String.raw`**Sketch:** a flat plate along the x-axis, with flow at $u_\infty$, $T_\infty$ arriving from the left. Draw two curves growing from the leading edge roughly as $\sqrt x$:
- the velocity-layer edge δ, with the velocity profile rising from 0 at the wall to $0.99u_\infty$ at δ;
- the thermal-layer edge $\delta_t$, with the temperature profile running from $T_w$ at the wall to $T_\infty$ at $\delta_t$.

For Pr > 1 draw $\delta_t$ below δ. Mark "boundary-layer region" and "inviscid free stream".

**Velocity boundary layer:** the region next to the plate where viscous shear is felt. No slip makes u = 0 at the wall; δ is the distance where $u = 0.99u_\infty$. Outside it, friction is negligible and $u = u_\infty$.

**Thermal boundary layer:** forms when fluid at $T_\infty$ flows over a surface at $T_w \ne T_\infty$. It is the region where temperature varies normal to the wall; $\delta_t$ is where $T - T_w = 0.99(T_\infty - T_w)$.

**Relative thickness:** set by Pr = ν/α: $\delta_t/\delta \approx \mathrm{Pr}^{-1/3}/1.026$. Both layers thicken downstream ($\propto x^{1/2}$ in laminar flow), so $h_x \propto x^{-1/2}$ decreases along the plate.`,
          answer: String.raw`δ: where $u = 0.99u_\infty$; $\delta_t$: where $T - T_w = 0.99(T_\infty - T_w)$; both grow as $\sqrt x$ and their ratio is fixed by Pr ($\delta_t/\delta \approx \mathrm{Pr}^{-1/3}/1.026$).` },
        { id: "practice-boundary-layer-P12b", label: "(b)", marks: "5", topic: "boundary-layer",
          sub: "Liquid metals vs oils: relative boundary-layer thickness", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Cousin of 2016-17 Q7(c) and 2022-23 Q1(a)`,
          text: String.raw`Compare the velocity and thermal boundary layers for a liquid metal (Pr ≈ 0.01) and a heavy oil (Pr ≈ 1000). Why does the cubic-profile result for $\delta_t/\delta$ fail for liquid metals?`,
          solution: String.raw`- **Liquid metal (Pr ≪ 1):** α ≫ ν because the conductivity is very high, so heat diffuses much faster than momentum and $\delta_t \gg \delta$. Across most of the thermal layer the fluid moves at nearly $u_\infty$, giving a "blunt" (almost slug) velocity profile.
- **Heavy oil (Pr ≫ 1):** momentum diffuses much faster than heat, so $\delta_t \ll \delta$ (≈ 0.1δ for Pr = 1000). The whole thermal layer sits in the slow, nearly linear part of the velocity profile next to the wall.
- **Why the formula fails:** the derivation of $\zeta = \mathrm{Pr}^{-1/3}/1.026$ integrates the velocity profile only up to $\delta_t$, assumes ζ < 1 and drops the ζ⁴ term. For a liquid metal ζ ≫ 1, and beyond δ the velocity is $u_\infty$, not the cubic. The formula is acceptable for Pr ≳ 0.7.`,
          answer: String.raw`Liquid metal: $\delta_t \gg \delta$ (heat diffuses fast; blunt velocity profile). Oil: $\delta_t \ll \delta$. The cubic result assumes ζ < 1, so it is valid only for Pr ≳ 0.7.` },
        { id: "practice-boundary-layer-P12c", label: "(c)", marks: "4", topic: "boundary-layer",
          sub: "Why h decreases along the plate", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Sec. 5-6`,
          text: String.raw`Explain why the local heat-transfer coefficient on a laminar flat plate decreases with x, and why the average coefficient over a length L is twice the local value at L.`,
          solution: String.raw`- $h_x = 3k/(2\delta_t)$: the thermal layer thickens as $x^{1/2}$, so the insulating fluid layer between wall and free stream grows. The wall gradient falls and $h_x \propto x^{-1/2}$. At the leading edge $\delta_t \to 0$ and $h_x \to \infty$.
- Averaging $Cx^{-1/2}$ over 0 to L gives $\bar h = \frac1L\int_0^LCx^{-1/2}dx = 2CL^{-1/2} = 2h_L$. The high values near the leading edge pull the average up to twice the trailing-edge value.`,
          answer: String.raw`$h_x = 3k/(2\delta_t)$ and $\delta_t \propto x^{1/2}$, so $h_x \propto x^{-1/2}$; integrating gives $\bar h = 2h_L$.` }
      ] }
  ] });
