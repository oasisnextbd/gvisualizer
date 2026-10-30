QB.paper({ year: "Practice", set: "Natural convection", date: "", marks: 0, practice: true,
  rules: String.raw`Natural (free) convection: β, Gr, Ra, Gr/Re² for mixed convection, vertical plates (isothermal and constant flux, Churchill–Chu), vertical cylinders, horizontal cylinders, horizontal and inclined plates, spheres. Slide examples first (section S), then exam-style problems (section F).`,
  questions: [

    { id: "practice-natural-convection-P1", q: 1, section: "S", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-natural-convection-P1", label: "", marks: "", topic: "natural-convection",
          sub: "Large isothermal vertical plate (Churchill–Chu vs simple form)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 07, pp. 28–38 (4 m × 10 m vertical plate in air; Holman Ex. 7-1 style)`,
          text: String.raw`A large vertical plate 4.0 m high and 10 m wide is maintained at 60°C and exposed to atmospheric air at 10°C. Calculate the heat transfer from the plate. Compare the result with the simpler relation $\mathrm{Nu} = 0.10(\mathrm{Gr\,Pr})^{1/3}$.`,
          solution: String.raw`**Given:** $L = 4.0\,\mathrm{m}$ (height), width $10\,\mathrm{m}$, $T_w = 60^\circ\mathrm{C}$, $T_\infty = 10^\circ\mathrm{C}$, air at 1 atm.

**Find:** $\bar h$ and $q$.

**Assumptions:** steady; isothermal plate; one face transfers heat; radiation not asked; air an ideal gas so $\beta = 1/T_f$.

![Vertical plate 4 m high and 10 m wide at 60°C in still air at 10°C](fig/practice-natural-convection-P1.svg)

1. **Film temperature**

$$T_f = \frac{T_w + T_\infty}{2} = \frac{60 + 10}{2} = 35^\circ\mathrm{C} = 308\,\mathrm{K}$$

2. **Properties** of air at 308 K (Holman Table A-5, as on the slide): $k = 0.02685\,\mathrm{W/m\,K}$, $\nu = 16.5\times10^{-6}\,\mathrm{m^2/s}$, $\mathrm{Pr} = 0.7$, and

$$\beta = \frac{1}{T_f} = \frac{1}{308} = 3.25\times10^{-3}\,\mathrm{K^{-1}}$$

3. **Rayleigh number** (characteristic length = height $L$)

$$\mathrm{Ra}_L = \mathrm{Gr}_L\mathrm{Pr} = \frac{g\beta(T_w - T_\infty)L^3}{\nu^2}\mathrm{Pr} = \frac{9.8\times3.25\times10^{-3}\times50\times4^3}{(16.5\times10^{-6})^2}\times0.7 = 2.62\times10^{11}$$

$\mathrm{Ra} > 10^9$, so the boundary layer is turbulent over most of the plate.

4. **Churchill–Chu** (valid $10^{-1} < \mathrm{Ra}_L < 10^{12}$)

$$\overline{\mathrm{Nu}}^{1/2} = 0.825 + \frac{0.387\,\mathrm{Ra}^{1/6}}{[1 + (0.492/\mathrm{Pr})^{9/16}]^{8/27}} = 0.825 + \frac{0.387(2.62\times10^{11})^{1/6}}{[1 + (0.492/0.7)^{9/16}]^{8/27}} = 26.75$$

$$\overline{\mathrm{Nu}} = 26.75^2 = 716$$

5. **Heat-transfer coefficient and heat flow**

$$\bar h = \frac{\overline{\mathrm{Nu}}\,k}{L} = \frac{716\times0.02685}{4.0} = 4.80\,\mathrm{W/m^2K}$$

$$q = \bar hA(T_w - T_\infty) = 4.80\times(4\times10)\times(60 - 10) = 9606\,\mathrm{W} \approx 9.6\,\mathrm{kW}$$

6. **Simpler turbulent relation** (Table: vertical planes, $10^9$–$10^{13}$, $C = 0.10$, $n = 1/3$)

$$\mathrm{Nu} = 0.10(2.62\times10^{11})^{1/3} = 640 \;\Rightarrow\; \bar h = \frac{640\times0.02685}{4} = 4.30\,\mathrm{W/m^2K},\quad q = 8.59\,\mathrm{kW}$$

This is about 10% lower than Churchill–Chu.

> **Exam tip:** in the turbulent range $\mathrm{Nu} \propto \mathrm{Ra}^{1/3} \propto L$, so $\bar h$ does not depend on the plate height. That is why a very tall plate still has $h \approx 4$–$5\,\mathrm{W/m^2K}$ in air.`,
          answer: String.raw`$\mathrm{Ra} = 2.62\times10^{11}$; Churchill–Chu $\overline{\mathrm{Nu}} = 716$, $\bar h = 4.80\,\mathrm{W/m^2K}$, $q \approx 9.6\,\mathrm{kW}$; the simple $0.10\mathrm{Ra}^{1/3}$ gives $\mathrm{Nu} = 640$ (about 10% lower).` }
      ] },

    { id: "practice-natural-convection-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw`A 6-m-long section of an 8-cm-diameter horizontal hot-water pipe passes through a large room whose temperature is 20°C. The outer surface temperature of the pipe is 70°C.`,
      parts: [
        { id: "practice-natural-convection-P2a", label: "(a)", marks: "", topic: "natural-convection",
          sub: "Horizontal cylinder (Churchill–Chu)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 07, pp. 39–40 (6 m hot-water pipe, Çengel Ex. 9-2 style)`,
          text: String.raw`Determine the rate of heat loss from the pipe by natural convection.`,
          solution: String.raw`**Given:** $D = 0.08\,\mathrm{m}$, $L = 6\,\mathrm{m}$, $T_s = 70^\circ\mathrm{C}$, $T_\infty = 20^\circ\mathrm{C}$.

**Find:** $\dot Q_{conv}$.

**Assumptions:** steady; uniform surface temperature; quiescent air at 1 atm; ideal gas.

![Horizontal hot-water pipe: end view with the rising plume and side view](fig/practice-natural-convection-P2.svg)

1. **Film temperature and properties:** $T_f = (70 + 20)/2 = 45^\circ\mathrm{C} = 318\,\mathrm{K}$. Air at 45°C, 1 atm (Çengel Table A-15, as on the slide): $k = 0.02699\,\mathrm{W/m\,K}$, $\nu = 1.749\times10^{-5}\,\mathrm{m^2/s}$, $\mathrm{Pr} = 0.7241$, $\beta = 1/318\,\mathrm{K^{-1}}$.

2. **Rayleigh number** (characteristic length = diameter)

$$\mathrm{Ra}_D = \frac{g\beta(T_s - T_\infty)D^3}{\nu^2}\mathrm{Pr} = \frac{9.81\times(1/318)\times50\times0.08^3}{(1.749\times10^{-5})^2}\times0.7241 = 1.869\times10^6$$

3. **Churchill–Chu for a horizontal cylinder** (valid $\mathrm{Ra}_D \le 10^{12}$)

$$\mathrm{Nu} = \left\{0.6 + \frac{0.387\mathrm{Ra}_D^{1/6}}{[1 + (0.559/\mathrm{Pr})^{9/16}]^{8/27}}\right\}^2 = \left\{0.6 + \frac{0.387(1.869\times10^6)^{1/6}}{[1 + (0.559/0.7241)^{9/16}]^{8/27}}\right\}^2 = 17.40$$

4. **Coefficient, area and heat loss**

$$h = \frac{k}{D}\mathrm{Nu} = \frac{0.02699}{0.08}\times17.40 = 5.87\,\mathrm{W/m^2K}$$

$$A_s = \pi DL = \pi\times0.08\times6 = 1.508\,\mathrm{m^2}$$

$$\dot Q = hA_s(T_s - T_\infty) = 5.87\times1.508\times50 = 443\,\mathrm{W}$$

> Check with the table form ($10^4 < \mathrm{Ra} < 10^9$: $\mathrm{Nu} = 0.53\mathrm{Ra}^{1/4} = 19.5$): it gives about 12% more. Churchill–Chu is the recommended one.`,
          answer: String.raw`$\mathrm{Ra}_D = 1.87\times10^6$, $\mathrm{Nu} = 17.4$, $h = 5.87\,\mathrm{W/m^2K}$, $\dot Q_{conv} \approx 443\,\mathrm{W}$.` },
        { id: "practice-natural-convection-P2b", label: "(b)", marks: "", topic: "natural-convection",
          sub: "Radiation alongside natural convection", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 07, p. 41 (radiation from the same pipe)`,
          text: String.raw`Taking the pipe surface as black ($\varepsilon = 1$) and the room walls at 20°C, find the radiation heat loss and compare it with the natural-convection loss.`,
          solution: String.raw`**Assumptions:** the room is large compared with the pipe, so the pipe sees surroundings at $T_{surr} = 20^\circ\mathrm{C}$.

$$\dot Q_{rad} = \varepsilon A_s\sigma(T_s^4 - T_{surr}^4) = 1\times1.508\times5.67\times10^{-8}\times(343^4 - 293^4) = 553\,\mathrm{W}$$

So radiation (553 W, upper limit for $\varepsilon = 1$) is **larger** than natural convection (443 W). The total loss would be about $443 + 553 \approx 996\,\mathrm{W}$.

> **Why it matters:** natural-convection coefficients are small ($h \approx 5\,\mathrm{W/m^2K}$, the same size as the radiation coefficient $h_{rad} \approx 7\,\mathrm{W/m^2K}$ here). A natural-convection answer should normally include radiation unless the surface is shiny (low $\varepsilon$).`,
          answer: String.raw`$\dot Q_{rad} \approx 553\,\mathrm{W}$ (black surface), larger than the 443 W by natural convection; radiation must not be ignored.` }
      ] },

    { id: "practice-natural-convection-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw`Consider a 0.6 m × 0.6 m thin square plate in a room at 30°C. One side of the plate is maintained at 90°C, while the other side is insulated. Determine the rate of heat transfer from the plate by natural convection if the plate is (a) vertical, (b) horizontal with the hot surface facing up, and (c) horizontal with the hot surface facing down.

Air at the film temperature of 60°C, 1 atm: $k = 0.02808\,\mathrm{W/m\,K}$, $\nu = 1.896\times10^{-5}\,\mathrm{m^2/s}$, $\mathrm{Pr} = 0.7202$, $\beta = 1/333\,\mathrm{K^{-1}}$.`,
      parts: [
        { id: "practice-natural-convection-P3a", label: "(a)", marks: "", topic: "natural-convection",
          sub: "Square plate: vertical", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 07, pp. 42–48 (0.6 m plate at 90°C, Çengel Ex. 9-3 style)`,
          text: String.raw`The plate is vertical.`,
          solution: String.raw`**Given:** $L = 0.6\,\mathrm{m}$, $T_s = 90^\circ\mathrm{C}$, $T_\infty = 30^\circ\mathrm{C}$, $A_s = 0.36\,\mathrm{m^2}$ (one face).

**Assumptions:** steady; isothermal surface; back face insulated; radiation ignored.

![The 0.6 m square plate vertical, hot face up and hot face down](fig/practice-natural-convection-P3.svg)

1. **Rayleigh number** with $L_c = L = 0.6\,\mathrm{m}$ (height)

$$\mathrm{Ra}_L = \frac{g\beta(T_s - T_\infty)L^3}{\nu^2}\mathrm{Pr} = \frac{9.81\times(1/333)\times60\times0.6^3}{(1.896\times10^{-5})^2}\times0.7202 = 7.65\times10^8$$

2. **Churchill–Chu** (Eq. 9-21)

$$\mathrm{Nu} = \left\{0.825 + \frac{0.387(7.65\times10^8)^{1/6}}{[1 + (0.492/0.7202)^{9/16}]^{8/27}}\right\}^2 = 113.4$$

3. **Heat transfer**

$$h = \frac{k}{L}\mathrm{Nu} = \frac{0.02808}{0.6}\times113.4 = 5.31\,\mathrm{W/m^2K}$$

$$\dot Q = hA_s(T_s - T_\infty) = 5.31\times0.36\times60 = 115\,\mathrm{W}$$`,
          answer: String.raw`$\mathrm{Ra} = 7.65\times10^8$, $\mathrm{Nu} = 113.4$, $h = 5.31\,\mathrm{W/m^2K}$, $\dot Q \approx 115\,\mathrm{W}$.` },
        { id: "practice-natural-convection-P3b", label: "(b)", marks: "", topic: "natural-convection",
          sub: "Square plate: horizontal, hot side up", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 07, pp. 49–55`,
          text: String.raw`The plate is horizontal with the hot surface facing up.`,
          solution: String.raw`1. **Characteristic length** for a horizontal plate is area over perimeter:

$$L_c = \frac{A_s}{p} = \frac{L^2}{4L} = \frac{0.6}{4} = 0.15\,\mathrm{m}$$

2. **Rayleigh number**

$$\mathrm{Ra} = \frac{9.81\times(1/333)\times60\times0.15^3}{(1.896\times10^{-5})^2}\times0.7202 = 1.196\times10^7$$

3. **Nusselt number** (upper surface of a hot plate). The slide uses $\mathrm{Nu} = 0.54\mathrm{Ra}^{1/4}$:

$$\mathrm{Nu} = 0.54(1.196\times10^7)^{1/4} = 31.75,\qquad h = \frac{0.02808}{0.15}\times31.75 = 5.95\,\mathrm{W/m^2K}$$

$$\dot Q = 5.95\times0.36\times60 = 128\,\mathrm{W}$$

> **Note on the range:** $\mathrm{Ra} = 1.196\times10^7$ is just above the $10^7$ limit of Eq. 9-22, so strictly Eq. 9-23 applies: $\mathrm{Nu} = 0.15\mathrm{Ra}^{1/3} = 34.3$, $h = 6.42\,\mathrm{W/m^2K}$, $\dot Q = 139\,\mathrm{W}$. Near the boundary the two forms differ by about 8%; either is accepted if you state which one you used.`,
          answer: String.raw`$L_c = 0.15\,\mathrm{m}$, $\mathrm{Ra} = 1.20\times10^7$; with $0.54\mathrm{Ra}^{1/4}$ (slide) $h = 5.95\,\mathrm{W/m^2K}$, $\dot Q \approx 128\,\mathrm{W}$ (with $0.15\mathrm{Ra}^{1/3}$: 139 W).` },
        { id: "practice-natural-convection-P3c", label: "(c)", marks: "", topic: "natural-convection",
          sub: "Square plate: horizontal, hot side down", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 07, pp. 56–59`,
          text: String.raw`The plate is horizontal with the hot surface facing down.`,
          solution: String.raw`$L_c$, $A_s$ and $\mathrm{Ra}$ are the same as in (b). For the lower surface of a hot plate (Eq. 9-24, $10^5 < \mathrm{Ra} < 10^{11}$):

$$\mathrm{Nu} = 0.27\mathrm{Ra}^{1/4} = 0.27(1.196\times10^7)^{1/4} = 15.87$$

$$h = \frac{k}{L_c}\mathrm{Nu} = \frac{0.02808}{0.15}\times15.87 = 2.97\,\mathrm{W/m^2K}$$

$$\dot Q = hA_s(T_s - T_\infty) = 2.97\times0.36\times60 = 64.2\,\mathrm{W}$$

**Comparison:** vertical 115 W, facing up 128 W, facing down 64 W. The hot face pointing down gives the least heat transfer, because the plate blocks the rising warm air, which can escape only around the edges.`,
          answer: String.raw`$\mathrm{Nu} = 15.9$, $h = 2.97\,\mathrm{W/m^2K}$, $\dot Q \approx 64\,\mathrm{W}$, the lowest of the three orientations.` }
      ] },

    { id: "practice-natural-convection-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw`A vertical hot flat plate at $T_w$ is immersed in a quiescent fluid at $T_\infty$. The x-axis points upward along the plate and y is normal to it.`,
      parts: [
        { id: "practice-natural-convection-P4a", label: "(a)", marks: "", topic: "natural-convection",
          sub: "Free-convection momentum equation (Boussinesq)", type: "derivation",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 07, pp. 9–12 (velocity and temperature profiles)`,
          text: String.raw`Starting from the x-momentum boundary-layer equation with gravity, show that for free convection

$$\rho\left(u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}\right) = g\rho\beta(T - T_\infty) + \mu\frac{\partial^2u}{\partial y^2}$$

State the assumptions, including the Boussinesq approximation.`,
          solution: String.raw`![Natural-convection boundary layers on hot and cold vertical plates (x along the plate, y normal)](fig/common-nc-vertical-plate.svg)

**Assumptions:** steady, laminar, two-dimensional flow; Newtonian fluid with constant properties, **except** that the density difference that drives the flow is kept in the body-force term (Boussinesq approximation); gravity acts in the $-x$ direction.

1. **Boundary-layer x-momentum equation** with the weight of the fluid:

$$\rho\left(u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}\right) = -\frac{\partial p}{\partial x} - \rho g + \mu\frac{\partial^2u}{\partial y^2}$$

2. **Pressure gradient.** Outside the boundary layer the fluid is at rest ($u = 0$, $T = T_\infty$, $\rho = \rho_\infty$), so the equation reduces to hydrostatics. The pressure is impressed across the thin layer, so inside it too

$$\frac{\partial p}{\partial x} = -\rho_\infty g$$

Substituting:

$$\rho\left(u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}\right) = g(\rho_\infty - \rho) + \mu\frac{\partial^2u}{\partial y^2}$$

3. **Volume expansion coefficient.** By definition, and approximating the derivative by finite differences:

$$\beta = \frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_p = -\frac{1}{\rho}\left(\frac{\partial\rho}{\partial T}\right)_p \approx \frac{\rho_\infty - \rho}{\rho(T - T_\infty)}\;\Rightarrow\;\rho_\infty - \rho = \rho\beta(T - T_\infty)$$

(For an ideal gas $\beta = 1/T$, with T in kelvin.)

4. **Result**

$$\rho\left(u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}\right) = g\rho\beta(T - T_\infty) + \mu\frac{\partial^2u}{\partial y^2}$$

The first term on the right is the **buoyancy force**. It couples the velocity field to the temperature field, so the energy equation $\rho c_p(u\,\partial T/\partial x + v\,\partial T/\partial y) = k\,\partial^2T/\partial y^2$ must be solved together with it.`,
          answer: String.raw`Using $\partial p/\partial x = -\rho_\infty g$ and $\rho_\infty - \rho = \rho\beta(T - T_\infty)$ turns the gravity and pressure terms into the buoyancy term $g\rho\beta(T - T_\infty)$.` },
        { id: "practice-natural-convection-P4b", label: "(b)", marks: "", topic: "natural-convection",
          sub: "Integral profiles: temperature and velocity", type: "derivation",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 07, pp. 12–14`,
          text: String.raw`Take $\delta_t = \delta$. Using a quadratic temperature profile and a cubic velocity profile $u/u_x = a + by + cy^2 + dy^3$, derive

$$\frac{T - T_\infty}{T_w - T_\infty} = \left(1 - \frac{y}{\delta}\right)^2,\qquad \frac{u}{u_x} = \frac{\beta\delta^2g(T_w - T_\infty)}{4u_x\nu}\frac{y}{\delta}\left(1 - \frac{y}{\delta}\right)^2$$

and find where the velocity is greatest.`,
          solution: String.raw`**Temperature profile.** Let $\theta = (T - T_\infty)/(T_w - T_\infty) = a + by + cy^2$ with

- $T = T_w$ at $y = 0$: $a = 1$
- $T = T_\infty$ at $y = \delta$: $1 + b\delta + c\delta^2 = 0$
- $\partial T/\partial y = 0$ at $y = \delta$: $b + 2c\delta = 0$

From the last two equations, $b = -2/\delta$ and $c = 1/\delta^2$, so

$$\theta = 1 - \frac{2y}{\delta} + \frac{y^2}{\delta^2} = \left(1 - \frac{y}{\delta}\right)^2$$

**Velocity profile.** $u/u_x = a + by + cy^2 + dy^3$, where $u_x$ is a reference velocity that depends on x. The conditions are

1. $u = 0$ at $y = 0$ (no slip): $a = 0$.
2. $u = 0$ at $y = \delta$ (still fluid outside).
3. $\partial u/\partial y = 0$ at $y = \delta$.
4. At the wall $u = v = 0$, so the momentum equation of part (a) reduces to $0 = g\beta(T_w - T_\infty) + \nu\,\partial^2u/\partial y^2$:

$$\frac{\partial^2u}{\partial y^2}\bigg|_{y=0} = -\frac{g\beta(T_w - T_\infty)}{\nu}$$

Condition 4 gives $2cu_x = -g\beta\Delta T/\nu$, i.e. $c = -g\beta\Delta T/(2\nu u_x)$.

Conditions 2 and 3: $b\delta + c\delta^2 + d\delta^3 = 0$ and $b + 2c\delta + 3d\delta^2 = 0$. Three times the first divided by $\delta$, minus the second, gives $2b + c\delta = 0$, so $b = -c\delta/2$. Then $d = -c/(2\delta)$.

$$\frac{u}{u_x} = -\frac{c\delta}{2}\left(y - \frac{2y^2}{\delta} + \frac{y^3}{\delta^2}\right) = -\frac{c\delta^2}{2}\,\frac{y}{\delta}\left(1 - \frac{y}{\delta}\right)^2$$

Substituting c:

$$\frac{u}{u_x} = \frac{\beta\delta^2g(T_w - T_\infty)}{4u_x\nu}\,\frac{y}{\delta}\left(1 - \frac{y}{\delta}\right)^2$$

**Maximum velocity.** With $\eta = y/\delta$:

$$\frac{d}{d\eta}\left[\eta(1 - \eta)^2\right] = (1 - \eta)(1 - 3\eta) = 0\;\Rightarrow\;\eta = \frac{1}{3}$$

The maximum is at one third of the boundary-layer thickness, where $\eta(1 - \eta)^2 = 4/27 = 0.148$ (the peak of the $u/u_x$ curve on the slide).

![Integral profiles: θ = (1 − y/δ)² and the velocity hump with its maximum at y = δ/3](fig/practice-natural-convection-P4b-sol.svg)

> **Sketch:** u is zero at the wall and at $y = \delta$, with a single peak near $y = \delta/3$. T falls monotonically from $T_w$ to $T_\infty$ with zero slope at $y = \delta$. Unlike forced convection, the velocity is zero at the outer edge.`,
          answer: String.raw`$\theta = (1 - y/\delta)^2$; $u \propto (y/\delta)(1 - y/\delta)^2$ with $c = -g\beta\Delta T/(2\nu u_x)$; maximum at $y = \delta/3$.` },
        { id: "practice-natural-convection-P4c", label: "(c)", marks: "", topic: "natural-convection",
          sub: "Grashof number and Gr/Re² criterion", type: "theory",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 07, pp. 15–17 (Gr, Ra, Gr/Re²)`,
          text: String.raw`Define the Grashof and Rayleigh numbers and give their physical meaning. By making the momentum equation of (a) dimensionless, show why $\mathrm{Gr}/\mathrm{Re}^2$ decides whether natural or forced convection dominates. State the critical Gr for a vertical plate.`,
          solution: String.raw`**Definitions**

$$\mathrm{Gr}_L = \frac{g\beta(T_s - T_\infty)L_c^3}{\nu^2},\qquad \mathrm{Ra}_L = \mathrm{Gr}_L\,\mathrm{Pr} = \frac{g\beta(T_s - T_\infty)L_c^3}{\nu\alpha}$$

- Gr = buoyancy force / viscous force. It plays the role in free convection that Re plays in forced convection, and it fixes laminar vs turbulent flow.
- Ra combines buoyancy with the fluid's ability to diffuse momentum and heat; the correlations are written $\mathrm{Nu} = C\,\mathrm{Ra}^n$ ($n = 1/4$ laminar, $1/3$ turbulent).
- Critical value for a vertical plate: $\mathrm{Gr} \approx 10^9$ (above it the layer becomes turbulent).

**Non-dimensional form.** Let $x^* = x/L$, $y^* = y/L$, $u^* = u/V$, $v^* = v/V$, $T^* = (T - T_\infty)/(T_s - T_\infty)$, where V is a reference velocity. Divide the momentum equation by $\rho V^2/L$:

$$u^*\frac{\partial u^*}{\partial x^*} + v^*\frac{\partial u^*}{\partial y^*} = \left[\frac{g\beta(T_s - T_\infty)L^3}{\nu^2}\right]\frac{\nu^2}{V^2L^2}\,T^* + \frac{\nu}{VL}\frac{\partial^2u^*}{\partial y^{*2}} = \frac{\mathrm{Gr}_L}{\mathrm{Re}_L^2}T^* + \frac{1}{\mathrm{Re}_L}\frac{\partial^2u^*}{\partial y^{*2}}$$

The buoyancy term carries the coefficient $\mathrm{Gr}/\mathrm{Re}^2$ (the Archimedes number):

| $\mathrm{Gr}/\mathrm{Re}^2$ | Regime |
|---|---|
| $\ll 1$ | forced convection; natural convection negligible |
| $\approx 1$ | mixed convection; both must be considered |
| $\gg 1$ | natural convection dominates |`,
          answer: String.raw`Gr = buoyancy/viscous forces (critical about $10^9$ on a vertical plate); $\mathrm{Ra} = \mathrm{Gr\,Pr}$; the buoyancy term in the dimensionless momentum equation scales as $\mathrm{Gr}/\mathrm{Re}^2$, which therefore decides forced, mixed or free convection.` }
      ] },

    { id: "practice-natural-convection-P5", q: 5, section: "S", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-natural-convection-P5", label: "", marks: "", topic: "natural-convection",
          sub: "Vertical plate with uniform heat flux (midpoint temperature)", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation on Slides 07, p. 24 (constant heat flux: use the isothermal relation with the plate midpoint temperature)`,
          text: String.raw`A 0.5-m-high vertical panel releases a uniform heat flux of 200 W/m² from its front face (the back face is insulated) into still air at 25°C. Using the isothermal Churchill–Chu relation with the midpoint temperature, estimate the surface temperature at mid-height ($x = L/2$). Neglect radiation. Use air properties from Holman Table A-5.`,
          solution: String.raw`**Given:** $L = 0.5\,\mathrm{m}$, $\dot q_s = 200\,\mathrm{W/m^2}$, $T_\infty = 25^\circ\mathrm{C}$.

**Find:** $T_{L/2}$.

**Assumptions:** steady; laminar or turbulent handled by Churchill–Chu; radiation neglected; ideal gas.

![Uniform-flux vertical panel with the mid-height point](fig/practice-natural-convection-P5.svg)

**Method (slide):** for uniform flux, use the isothermal relation with $\Delta T = T_{L/2} - T_\infty$ and evaluate the properties at $T_f = (T_{L/2} + T_\infty)/2$:

$$\mathrm{Nu} = \frac{hL}{k} = \frac{\dot q_sL}{k(T_{L/2} - T_\infty)}$$

$\Delta T$ is unknown, so iterate.

1. **Guess** $\Delta T = 30^\circ\mathrm{C}$, so $T_f = 40^\circ\mathrm{C} = 313\,\mathrm{K}$. Air (A-5, interpolated): $\nu = 1.70\times10^{-5}\,\mathrm{m^2/s}$, $k = 0.02724\,\mathrm{W/m\,K}$, $\mathrm{Pr} = 0.705$, $\beta = 1/313.15\,\mathrm{K^{-1}}$.

$$\mathrm{Ra} = \frac{9.81\times(1/313.15)\times30\times0.5^3}{(1.702\times10^{-5})^2}\times0.705 = 2.86\times10^8$$

$$\mathrm{Nu} = \left\{0.825 + \frac{0.387\mathrm{Ra}^{1/6}}{[1 + (0.492/0.705)^{9/16}]^{8/27}}\right\}^2 = 83.7,\quad h = \frac{83.7\times0.02724}{0.5} = 4.56\,\mathrm{W/m^2K}$$

$$\Delta T = \frac{\dot q_s}{h} = \frac{200}{4.56} = 43.9^\circ\mathrm{C}\quad(\text{guess too low})$$

2. **Iterate.** The table shows the converged steps:

| Pass | $\Delta T$ used (°C) | $T_f$ (°C) | Ra | Nu | h (W/m²K) | new $\Delta T$ (°C) |
|---|---|---|---|---|---|---|
| 1 | 30.0 | 40.0 | $2.86\times10^8$ | 83.7 | 4.56 | 43.9 |
| 2 | 43.9 | 46.9 | $3.76\times10^8$ | 90.9 | 5.05 | 39.6 |
| 3 | 39.6 | 44.8 | $3.51\times10^8$ | 89.0 | 4.91 | 40.7 |
| 4 | 40.5 | 45.2 | $3.56\times10^8$ | 89.4 | 4.94 | 40.5 |

3. **Result:** $\Delta T \approx 40.5^\circ\mathrm{C}$, so

$$T_{L/2} = 25 + 40.5 = 65.5^\circ\mathrm{C},\qquad h \approx 4.94\,\mathrm{W/m^2K}$$

$\mathrm{Ra} = 3.6\times10^8 < 10^9$: laminar. The simple form $0.59\mathrm{Ra}^{1/4}$ would also be valid here.

> **Exam tip:** with a given flux, h depends on $\Delta T^{1/4}$, so one or two passes are enough. Start with a guess, then use $\Delta T_{new} = \dot q_s/h$, and say in your answer that you iterated.`,
          answer: String.raw`Converged $\Delta T_{L/2} \approx 40.5^\circ\mathrm{C}$, so $T_{L/2} \approx 65.5^\circ\mathrm{C}$; $h \approx 4.9\,\mathrm{W/m^2K}$, $\mathrm{Ra} \approx 3.6\times10^8$ (laminar).` }
      ] },

    { id: "practice-natural-convection-P6", q: 6, section: "S", compulsory: false,
      stem: String.raw`A vertical pipe 1.5 m tall carries hot water. Its outer surface is at 80°C and the surrounding air is at 20°C. Use Holman Table A-5 air properties at the film temperature of 50°C: $\nu = 1.804\times10^{-5}\,\mathrm{m^2/s}$, $k = 0.02799\,\mathrm{W/m\,K}$, $\mathrm{Pr} = 0.703$.`,
      parts: [
        { id: "practice-natural-convection-P6a", label: "(a)", marks: "", topic: "natural-convection",
          sub: "Vertical cylinder as a plate: criterion", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation on Slides 07, p. 25 (vertical cylinder treated as a plate when D ≥ 35L/Gr^(1/4))`,
          text: String.raw`Can a 10-cm-diameter pipe be treated as a vertical flat plate? What is the smallest diameter for which this is allowed?`,
          solution: String.raw`![Vertical pipe treated as a vertical plate when the boundary layer is thin compared with D](fig/practice-natural-convection-P6.svg)

1. **Grashof number on the height** ($T_f = 50^\circ\mathrm{C}$, $\beta = 1/323.15\,\mathrm{K^{-1}}$)

$$\mathrm{Gr}_L = \frac{g\beta(T_s - T_\infty)L^3}{\nu^2} = \frac{9.81\times(1/323.15)\times60\times1.5^3}{(1.804\times10^{-5})^2} = 1.89\times10^{10}$$

2. **Criterion**

$$D \ge \frac{35L}{\mathrm{Gr}_L^{1/4}} = \frac{35\times1.5}{(1.89\times10^{10})^{1/4}} = 0.142\,\mathrm{m}$$

A 10-cm pipe is **not** large enough: curvature thins the boundary layer and raises h, so the plate result would underestimate the loss. The pipe must be at least about 14.2 cm in diameter.`,
          answer: String.raw`$\mathrm{Gr}_L = 1.89\times10^{10}$; $D_{min} = 35L/\mathrm{Gr}^{1/4} \approx 0.142\,\mathrm{m}$, so the 10-cm pipe cannot be treated as a plate.` },
        { id: "practice-natural-convection-P6b", label: "(b)", marks: "", topic: "natural-convection",
          sub: "Vertical cylinder heat loss via plate correlation", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation on Slides 07, pp. 23–25`,
          text: String.raw`For a 25-cm-diameter pipe of the same height and temperatures, calculate the natural-convection heat loss.`,
          solution: String.raw`$D = 0.25\,\mathrm{m} > 0.142\,\mathrm{m}$, so the vertical-plate relation applies with $L = 1.5\,\mathrm{m}$. Gr does not depend on D.

$$\mathrm{Ra}_L = \mathrm{Gr}_L\mathrm{Pr} = 1.89\times10^{10}\times0.703 = 1.33\times10^{10}\quad(\text{turbulent})$$

**Churchill–Chu**

$$\mathrm{Nu} = \left\{0.825 + \frac{0.387(1.33\times10^{10})^{1/6}}{[1 + (0.492/0.703)^{9/16}]^{8/27}}\right\}^2 = 275.6$$

$$h = \frac{275.6\times0.02799}{1.5} = 5.14\,\mathrm{W/m^2K}$$

$$A = \pi DL = \pi\times0.25\times1.5 = 1.178\,\mathrm{m^2},\qquad \dot Q = hA\Delta T = 5.14\times1.178\times60 = 364\,\mathrm{W}$$

(The simple turbulent form $0.10\mathrm{Ra}^{1/3} = 236.8$ gives $h = 4.42\,\mathrm{W/m^2K}$, about 14% lower.)`,
          answer: String.raw`$\mathrm{Ra} = 1.33\times10^{10}$, $\mathrm{Nu} = 276$, $h = 5.14\,\mathrm{W/m^2K}$, $\dot Q \approx 364\,\mathrm{W}$.` }
      ] },

    { id: "practice-natural-convection-P7", q: 7, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-natural-convection-P7a", label: "(a)", marks: "6", topic: "natural-convection",
          sub: "Natural vs forced convection; Gr vs Re", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of finals 2011-12 Q2(a), 2021-22 Q3(a)(b), 2022-23 Q7(a)`,
          text: String.raw`Distinguish between natural and forced convection. What does the Grashof number represent, and how does its role compare with that of the Reynolds number?`,
          solution: String.raw`| | Forced convection | Natural convection |
|---|---|---|
| Cause of motion | external means (fan, pump, wind) | buoyancy from density differences caused by temperature differences in a gravity field |
| Typical velocity | set by the fan or pump; can be large | low, usually below 1 m/s |
| Governing group | Re (inertia/viscous) | Gr (buoyancy/viscous), or Ra = Gr Pr |
| Correlation form | $\mathrm{Nu} = f(\mathrm{Re}, \mathrm{Pr})$ | $\mathrm{Nu} = C\,\mathrm{Ra}^n$ |
| Typical h in gases | 25–250 W/m²K | 2–25 W/m²K |
| Velocity at outer edge of the boundary layer | equals the free-stream velocity | zero (fluid far away is still) |

**Grashof number:** $\mathrm{Gr} = g\beta\Delta TL^3/\nu^2$ = buoyancy force / viscous force. Like Re in forced flow, it fixes the flow regime (laminar below about $10^9$ on a vertical plate, turbulent above). When both mechanisms act, $\mathrm{Gr}/\mathrm{Re}^2$ measures their relative size: much less than 1 means forced dominates, about 1 means mixed, much more than 1 means natural dominates.

Without gravity (for example in an orbiting spacecraft) there is no buoyancy, so there is no natural convection.`,
          answer: String.raw`Natural convection is driven by buoyancy, forced convection by external means; Gr (buoyancy/viscous) plays the role of Re, sets laminar vs turbulent ($\mathrm{Gr}_{cr} \approx 10^9$), and $\mathrm{Gr}/\mathrm{Re}^2$ weighs the two modes.` },
        { id: "practice-natural-convection-P7b", label: "(b)", marks: "6", topic: "natural-convection",
          sub: "Profiles on hot and cold vertical plates", type: "sketch",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of finals 2016-17 Q2(a), 2018-19 Q3(a)`,
          text: String.raw`Sketch the velocity and temperature profiles in the natural-convection boundary layer on (i) a hot vertical plate and (ii) a cold vertical plate in a quiescent fluid. Show the laminar and turbulent parts.`,
          solution: String.raw`![Velocity and temperature profiles on a hot plate (layer grows upward) and a cold plate (mirror image, grows downward)](fig/common-nc-vertical-plate.svg)

**(i) Hot plate ($T_s > T_\infty$).** Fluid next to the plate is heated, becomes lighter and rises, so the boundary layer starts at the bottom edge and thickens upward.

- *Velocity profile:* u = 0 at the wall (no slip), rises to a maximum at about $\delta/3$, and falls back to zero at the outer edge $y = \delta$. Arrows point **upward**.
- *Temperature profile:* T falls from $T_s$ at the wall to $T_\infty$ at $y = \delta$, with zero slope at the edge.
- *Regimes:* laminar near the bottom; wavy transition; turbulent higher up once $\mathrm{Gr}_x \approx 10^9$, with a thicker, eddying layer.

**(ii) Cold plate ($T_s < T_\infty$).** Fluid next to the plate is cooled, becomes heavier and sinks. The picture is the mirror image: the boundary layer starts at the **top** edge and grows downward, the velocity arrows point **downward**, and T rises from $T_s$ at the wall to $T_\infty$ at the edge. The profile shapes are otherwise the same.

*Sketch:* two plates side by side, y horizontal. On each, draw the hump-shaped velocity curve (zero at both ends) and the monotone temperature curve, and mark the leading edge (bottom for hot, top for cold) and the turbulent zone farther along.`,
          answer: String.raw`Velocity: zero at the wall and at $y = \delta$, peak near $\delta/3$; temperature monotone from $T_s$ to $T_\infty$. On a hot plate the flow rises from the bottom edge; on a cold plate it falls from the top edge (mirror image).` },
        { id: "practice-natural-convection-P7c", label: "(c)", marks: "5", topic: "natural-convection",
          sub: "Orientation of horizontal hot plates", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of finals 2020-21 Q4(c), 2023-24 Q7(b)`,
          text: String.raw`A hot horizontal plate loses heat in a cooler room. Explain why the loss is much smaller when the hot face points down than when it points up. Which correlations apply for a cold plate?`,
          solution: String.raw`![Flow patterns over horizontal hot and cold plates facing up and down](fig/practice-natural-convection-P7c-sol.svg)

- **Hot face up:** heated air rises freely from the whole surface in plumes, and fresh cool air flows in from the sides. The currents are strong, so h is high: $\mathrm{Nu} = 0.54\mathrm{Ra}^{1/4}$ ($10^4$–$10^7$) or $0.15\mathrm{Ra}^{1/3}$ ($10^7$–$10^{11}$).
- **Hot face down:** the heated air wants to rise but the plate is in the way. It must creep sideways under the plate and escape at the edges, giving a thick, sluggish layer: $\mathrm{Nu} = 0.27\mathrm{Ra}^{1/4}$ ($10^5$–$10^{11}$), roughly half the hot-up value.
- **Cold plate:** gravity reverses the picture, since the cooled fluid sinks. A **cold face down** behaves like a hot face up (strong currents), and a **cold face up** behaves like a hot face down (weak).
- Use $L_c = A_s/p$ (area over perimeter) and the film temperature in all horizontal-plate correlations.`,
          answer: String.raw`Facing down, the plate blocks the rising warm air (only edge escape), so $\mathrm{Nu} = 0.27\mathrm{Ra}^{1/4}$ instead of $0.54\mathrm{Ra}^{1/4}$ or $0.15\mathrm{Ra}^{1/3}$; for cold plates swap the roles (cold-down ≈ hot-up).` }
      ] },

    { id: "practice-natural-convection-P8", q: 8, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-natural-convection-P8", label: "", marks: "15", topic: "natural-convection",
          sub: "Uninsulated horizontal steam line: convection + radiation", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel Ex. 9-2 and Holman horizontal-cylinder problems; close cousin of finals 2018-19 Q7(a) / 2022-23 Q8(c) (new numbers)`,
          text: String.raw`An uninsulated horizontal steam line of 15 cm outer diameter has a surface temperature of 160°C and runs through a still workshop where the air and the walls are at 25°C. The pipe surface emissivity is 0.8. Calculate, per metre of pipe, (i) the natural-convection loss, (ii) the radiation loss, and (iii) the combined heat-transfer coefficient.

Air at 92.5°C, 1 atm: $k = 0.03116\,\mathrm{W/m\,K}$, $\nu = 2.237\times10^{-5}\,\mathrm{m^2/s}$, $\mathrm{Pr} = 0.6945$.`,
          solution: String.raw`**Given:** $D = 0.15\,\mathrm{m}$, $T_s = 160^\circ\mathrm{C}$, $T_\infty = T_{surr} = 25^\circ\mathrm{C}$, $\varepsilon = 0.8$, $L = 1\,\mathrm{m}$.

**Assumptions:** steady; uniform surface temperature; large surroundings; ideal gas.

![Uninsulated horizontal steam line losing heat by natural convection and radiation](fig/practice-natural-convection-P8.svg)

1. **Film temperature:** $T_f = (160 + 25)/2 = 92.5^\circ\mathrm{C} = 365.65\,\mathrm{K}$, so $\beta = 1/365.65 = 2.735\times10^{-3}\,\mathrm{K^{-1}}$. (Properties are Holman A-5 values interpolated between 350 and 400 K.)

2. **Rayleigh number**

$$\mathrm{Ra}_D = \frac{g\beta\Delta TD^3}{\nu^2}\mathrm{Pr} = \frac{9.81\times2.735\times10^{-3}\times135\times0.15^3}{(2.237\times10^{-5})^2}\times0.6945 = 1.70\times10^7$$

3. **Churchill–Chu, horizontal cylinder**

$$\mathrm{Nu} = \left\{0.6 + \frac{0.387(1.70\times10^7)^{1/6}}{[1 + (0.559/0.6945)^{9/16}]^{8/27}}\right\}^2 = 32.96$$

$$h_c = \frac{32.96\times0.03116}{0.15} = 6.85\,\mathrm{W/m^2K}$$

4. **(i) Convection per metre** ($A = \pi D\times1 = 0.4712\,\mathrm{m^2}$)

$$\dot Q_c = h_cA\Delta T = 6.85\times0.4712\times135 = 436\,\mathrm{W/m}$$

5. **(ii) Radiation per metre**

$$\dot Q_r = \varepsilon\sigma A(T_s^4 - T_{surr}^4) = 0.8\times5.67\times10^{-8}\times0.4712\times(433.15^4 - 298.15^4) = 584\,\mathrm{W/m}$$

6. **(iii) Combined coefficient**

$$h_r = \frac{\dot Q_r}{A\Delta T} = \frac{584}{0.4712\times135} = 9.17\,\mathrm{W/m^2K},\qquad h_{comb} = h_c + h_r = 16.0\,\mathrm{W/m^2K}$$

Total loss: $436 + 584 \approx 1020\,\mathrm{W}$ per metre.

> Check: the table form $\mathrm{Nu} = 0.53\mathrm{Ra}^{1/4} = 34.0$ ($h = 7.07$) agrees within 3%. Radiation is larger than natural convection here, so insulating the line pays off quickly.`,
          answer: String.raw`$\mathrm{Ra}_D = 1.70\times10^7$, $\mathrm{Nu} = 33.0$, $h_c = 6.85\,\mathrm{W/m^2K}$; $\dot Q_c \approx 436\,\mathrm{W/m}$, $\dot Q_r \approx 584\,\mathrm{W/m}$ (total about 1.02 kW/m); $h_{comb} \approx 16.0\,\mathrm{W/m^2K}$.` }
      ] },

    { id: "practice-natural-convection-P9", q: 9, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-natural-convection-P9", label: "", marks: "12", topic: "natural-convection",
          sub: "Cold sphere in room air (ice melting)", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel sphere problems (Nu = 2 + 0.589Ra^(1/4)/…); sphere relation from Slides 07, p. 22`,
          text: String.raw`A thin-walled spherical vessel of 40 cm outer diameter is filled with an ice–water mixture, so its outer surface stays at 2°C. It stands in still air at 28°C. Determine the rate of heat gain by natural convection and the rate at which ice melts ($h_{if} = 333.7\,\mathrm{kJ/kg}$). Neglect radiation.

Air at 15°C, 1 atm: $k = 0.02530\,\mathrm{W/m\,K}$, $\nu = 1.465\times10^{-5}\,\mathrm{m^2/s}$, $\mathrm{Pr} = 0.7113$.`,
          solution: String.raw`**Given:** $D = 0.4\,\mathrm{m}$, $T_s = 2^\circ\mathrm{C}$, $T_\infty = 28^\circ\mathrm{C}$.

**Assumptions:** steady; uniform surface temperature; wall resistance negligible; radiation neglected.

![Cold sphere in still air: the cooled air sinks in a plume below it](fig/practice-natural-convection-P9.svg)

1. **Film temperature:** $T_f = (2 + 28)/2 = 15^\circ\mathrm{C} = 288.15\,\mathrm{K}$, so $\beta = 1/288.15\,\mathrm{K^{-1}}$. A cold surface drives a downward flow, but the correlation uses $|T_s - T_\infty| = 26\,\mathrm{K}$.

2. **Rayleigh number**

$$\mathrm{Ra}_D = \frac{9.81\times(1/288.15)\times26\times0.4^3}{(1.465\times10^{-5})^2}\times0.7113 = 1.88\times10^8$$

Within $\mathrm{Ra}_D \le 10^{11}$ and $\mathrm{Pr} \ge 0.7$, so the sphere relation applies.

3. **Sphere correlation**

$$\mathrm{Nu} = 2 + \frac{0.589\mathrm{Ra}_D^{1/4}}{[1 + (0.469/\mathrm{Pr})^{9/16}]^{4/9}} = 2 + \frac{0.589(1.88\times10^8)^{1/4}}{[1 + (0.469/0.7113)^{9/16}]^{4/9}} = 55.2$$

$$h = \frac{55.2\times0.02530}{0.4} = 3.49\,\mathrm{W/m^2K}$$

4. **Heat gain**

$$A = \pi D^2 = \pi\times0.4^2 = 0.5027\,\mathrm{m^2},\qquad \dot Q = hA(T_\infty - T_s) = 3.49\times0.5027\times26 = 45.6\,\mathrm{W}$$

5. **Melting rate**

$$\dot m_{ice} = \frac{\dot Q}{h_{if}} = \frac{45.6}{333.7\times10^3} = 1.37\times10^{-4}\,\mathrm{kg/s} = 0.49\,\mathrm{kg/h}$$

> The "2" in the sphere relation is the pure-conduction limit ($\mathrm{Nu} = 2$ for a sphere in a stagnant infinite medium).`,
          answer: String.raw`$\mathrm{Ra}_D = 1.88\times10^8$, $\mathrm{Nu} = 55.2$, $h = 3.49\,\mathrm{W/m^2K}$, $\dot Q \approx 45.6\,\mathrm{W}$; ice melts at about 0.49 kg/h.` }
      ] },

    { id: "practice-natural-convection-P10", q: 10, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-natural-convection-P10", label: "", marks: "12", topic: "natural-convection",
          sub: "Cold horizontal plate facing up vs down", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel horizontal-plate problems; uses Slides 07 Eqs. 9-22 to 9-24 with the cold-plate rule`,
          text: String.raw`The flat 1.0 m × 0.6 m evaporator plate of a display chiller is kept at 4°C in still room air at 26°C. Only one face is exposed. Calculate the heat gained by natural convection if the exposed cold face points (i) upward and (ii) downward. Comment on the result.

Air at 15°C: $k = 0.02530\,\mathrm{W/m\,K}$, $\nu = 1.465\times10^{-5}\,\mathrm{m^2/s}$, $\mathrm{Pr} = 0.7113$.`,
          solution: String.raw`**Given:** $A = 0.6\,\mathrm{m^2}$, perimeter $p = 2(1.0 + 0.6) = 3.2\,\mathrm{m}$, $T_s = 4^\circ\mathrm{C}$, $T_\infty = 26^\circ\mathrm{C}$, $\Delta T = 22\,\mathrm{K}$.

**Assumptions:** steady; isothermal plate; one face only; radiation neglected.

![Cold plate with the exposed face up (weak flow) and down (strong flow)](fig/practice-natural-convection-P10.svg)

1. **Characteristic length and Ra** ($T_f = 15^\circ\mathrm{C}$, $\beta = 1/288.15\,\mathrm{K^{-1}}$)

$$L_c = \frac{A}{p} = \frac{0.6}{3.2} = 0.1875\,\mathrm{m}$$

$$\mathrm{Ra} = \frac{9.81\times(1/288.15)\times22\times0.1875^3}{(1.465\times10^{-5})^2}\times0.7113 = 1.64\times10^7$$

2. **(i) Cold face up** = "upper surface of a cooled plate". It behaves like the lower surface of a heated plate: the cooled, heavier air is trapped on top and can drain only over the edges.

$$\mathrm{Nu} = 0.27\mathrm{Ra}^{1/4} = 0.27(1.64\times10^7)^{1/4} = 17.2$$

$$h = \frac{17.2\times0.02530}{0.1875} = 2.32\,\mathrm{W/m^2K},\qquad \dot Q = 2.32\times0.6\times22 = 30.6\,\mathrm{W}$$

3. **(ii) Cold face down** = "lower surface of a cooled plate". It behaves like the upper surface of a heated plate; $\mathrm{Ra} > 10^7$, so

$$\mathrm{Nu} = 0.15\mathrm{Ra}^{1/3} = 0.15(1.64\times10^7)^{1/3} = 38.1$$

$$h = \frac{38.1\times0.02530}{0.1875} = 5.14\,\mathrm{W/m^2K},\qquad \dot Q = 5.14\times0.6\times22 = 67.8\,\mathrm{W}$$

**Comment:** facing down, the cooled air falls away freely and is replaced by warm room air, so the heat gain is about 2.2 times larger. This is why evaporator coils of chillers are mounted high, with the cold surface facing downward.`,
          answer: String.raw`$L_c = 0.1875\,\mathrm{m}$, $\mathrm{Ra} = 1.64\times10^7$; cold face up: $h = 2.32\,\mathrm{W/m^2K}$, $\dot Q \approx 31\,\mathrm{W}$; cold face down: $h = 5.14\,\mathrm{W/m^2K}$, $\dot Q \approx 68\,\mathrm{W}$.` }
      ] },

    { id: "practice-natural-convection-P11", q: 11, section: "F", compulsory: false,
      stem: String.raw`The underside of a sloping roof panel, 0.6 m long along the slope and 0.8 m wide, is at 65°C. It is inclined at 40° from the vertical with the hot surface facing downward into a still attic at 25°C. Air at 45°C: $k = 0.02762\,\mathrm{W/m\,K}$, $\nu = 1.753\times10^{-5}\,\mathrm{m^2/s}$, $\mathrm{Pr} = 0.704$.`,
      parts: [
        { id: "practice-natural-convection-P11a", label: "(a)", marks: "10", topic: "natural-convection",
          sub: "Inclined plate (g cos θ)", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel inclined-plate problems; inclined-plate rule from Slides 07, p. 21`,
          text: String.raw`Find the natural-convection heat loss from the underside, and compare it with the loss if the panel were vertical.`,
          solution: String.raw`![Roof panel inclined 40° from the vertical, hot face down; g cos θ along the plate](fig/practice-natural-convection-P11.svg)

**Rule (slide):** for the lower surface of a hot inclined plate (or the upper surface of a cold one), use the vertical-plate relations with g replaced by $g\cos\theta$, provided $\mathrm{Ra} < 10^9$.

**Assumptions:** steady; isothermal; radiation neglected.

1. $T_f = 45^\circ\mathrm{C}$, $\beta = 1/318.15\,\mathrm{K^{-1}}$, and $g\cos\theta = 9.81\cos40^\circ = 7.515\,\mathrm{m/s^2}$.

2. **Rayleigh number** ($L = 0.6\,\mathrm{m}$ along the slope)

$$\mathrm{Ra} = \frac{g\cos\theta\,\beta\Delta TL^3}{\nu^2}\mathrm{Pr} = \frac{7.515\times(1/318.15)\times40\times0.6^3}{(1.753\times10^{-5})^2}\times0.704 = 4.68\times10^8 < 10^9\;\checkmark$$

3. **Churchill–Chu**

$$\mathrm{Nu} = \left\{0.825 + \frac{0.387(4.68\times10^8)^{1/6}}{[1 + (0.492/0.704)^{9/16}]^{8/27}}\right\}^2 = 97.2$$

$$h = \frac{97.2\times0.02762}{0.6} = 4.47\,\mathrm{W/m^2K}$$

$$\dot Q = hA\Delta T = 4.47\times(0.6\times0.8)\times40 = 85.9\,\mathrm{W}$$

(With $0.59\mathrm{Ra}^{1/4}$: $\mathrm{Nu} = 86.8$, $h = 3.99$, $\dot Q = 77\,\mathrm{W}$.)

4. **Vertical panel** (full g): $\mathrm{Ra} = 6.10\times10^8$, Churchill–Chu gives $h = 4.85\,\mathrm{W/m^2K}$ and $\dot Q = 93.2\,\mathrm{W}$.

Tilting the hot face downward by 40° cuts the loss by about 8%, because only the component of buoyancy along the plate drives the flow.`,
          answer: String.raw`$g\cos\theta = 7.52\,\mathrm{m/s^2}$, $\mathrm{Ra} = 4.68\times10^8$, $\mathrm{Nu} = 97.2$, $h = 4.47\,\mathrm{W/m^2K}$, $\dot Q \approx 86\,\mathrm{W}$ (vertical: 93 W).` },
        { id: "practice-natural-convection-P11b", label: "(b)", marks: "6", topic: "natural-convection",
          sub: "Mixed convection check (Gr/Re²)", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of final 2023-24 Q1(a) (Gr/Re²); Slides 07, p. 16`,
          text: String.raw`A draught then blows along the panel. Using $\mathrm{Gr}/\mathrm{Re}^2$, decide whether natural convection can be ignored for an air speed of (i) 0.4 m/s and (ii) 3 m/s. For case (ii) estimate h from the laminar flat-plate relation $\overline{\mathrm{Nu}} = 0.664\mathrm{Re}_L^{1/2}\mathrm{Pr}^{1/3}$.`,
          solution: String.raw`1. **Grashof number** (with the along-plate gravity component)

$$\mathrm{Gr}_L = \frac{g\cos\theta\,\beta\Delta TL^3}{\nu^2} = \frac{7.515\times(1/318.15)\times40\times0.6^3}{(1.753\times10^{-5})^2} = 6.64\times10^8$$

2. **(i) V = 0.4 m/s**

$$\mathrm{Re}_L = \frac{VL}{\nu} = \frac{0.4\times0.6}{1.753\times10^{-5}} = 1.37\times10^4,\qquad \frac{\mathrm{Gr}}{\mathrm{Re}^2} = \frac{6.64\times10^8}{(1.37\times10^4)^2} = 3.5$$

This is of order 1 (slightly greater): **mixed convection**. Buoyancy is significant, even dominant, and neither mode may be ignored.

3. **(ii) V = 3 m/s**

$$\mathrm{Re}_L = \frac{3\times0.6}{1.753\times10^{-5}} = 1.03\times10^5\;(<5\times10^5,\ \text{laminar}),\qquad \frac{\mathrm{Gr}}{\mathrm{Re}^2} = 0.063 \ll 1$$

**Forced convection dominates**, and natural convection can be neglected.

$$\bar h = \frac{k}{L}0.664\mathrm{Re}_L^{1/2}\mathrm{Pr}^{1/3} = \frac{0.02762}{0.6}\times0.664\times(1.03\times10^5)^{1/2}\times0.704^{1/3} = 8.7\,\mathrm{W/m^2K}$$

This is about twice the free-convection value of 4.5 W/m²K.`,
          answer: String.raw`$\mathrm{Gr} = 6.6\times10^8$. At 0.4 m/s, $\mathrm{Gr}/\mathrm{Re}^2 \approx 3.5$ (mixed; buoyancy matters). At 3 m/s, $\mathrm{Gr}/\mathrm{Re}^2 \approx 0.06$ (forced; $\bar h \approx 8.7\,\mathrm{W/m^2K}$).` }
      ] },

    { id: "practice-natural-convection-P12", q: 12, section: "F", compulsory: false,
      stem: "",
      parts: [
        { id: "practice-natural-convection-P12", label: "", marks: "15", topic: "natural-convection",
          sub: "Horizontal heater: surface temperature by iteration", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman/Çengel "find the surface temperature" horizontal-cylinder problems (iteration on film temperature)`,
          text: String.raw`A polished horizontal electric heater rod, 2 cm in diameter and 1 m long, dissipates 120 W into still air at 20°C. Radiation from the polished surface is negligible. Estimate the steady surface temperature of the rod using the Churchill–Chu correlation for a horizontal cylinder, with air properties from Holman Table A-5.`,
          solution: String.raw`**Given:** $D = 0.02\,\mathrm{m}$, $L = 1\,\mathrm{m}$, $\dot Q = 120\,\mathrm{W}$, $T_\infty = 20^\circ\mathrm{C}$.

**Find:** $T_s$.

**Assumptions:** steady; uniform surface temperature; radiation and end losses neglected.

1. **Heat flux**

$$\dot q_s = \frac{\dot Q}{\pi DL} = \frac{120}{\pi\times0.02\times1} = 1910\,\mathrm{W/m^2}$$

2. **First guess** $T_s = 200^\circ\mathrm{C}$, so $T_f = 110^\circ\mathrm{C}$ (383 K). Air (A-5, interpolated): $\nu = 2.417\times10^{-5}\,\mathrm{m^2/s}$, $k = 0.03243\,\mathrm{W/m\,K}$, $\mathrm{Pr} = 0.692$, $\beta = 1/383.15\,\mathrm{K^{-1}}$.

$$\mathrm{Ra}_D = \frac{9.81\times(1/383.15)\times180\times0.02^3}{(2.417\times10^{-5})^2}\times0.692 = 4.37\times10^4$$

$$\mathrm{Nu} = \left\{0.6 + \frac{0.387\mathrm{Ra}^{1/6}}{[1 + (0.559/0.692)^{9/16}]^{8/27}}\right\}^2 = 6.26,\qquad h = \frac{6.26\times0.03243}{0.02} = 10.16\,\mathrm{W/m^2K}$$

$$T_s = T_\infty + \frac{\dot q_s}{h} = 20 + \frac{1910}{10.16} = 208^\circ\mathrm{C}$$

3. **Second pass** with $T_s \approx 206^\circ\mathrm{C}$ ($T_f = 113^\circ\mathrm{C}$): $\nu = 2.45\times10^{-5}$, $k = 0.03267$, $\mathrm{Pr} = 0.691$. Then $\mathrm{Ra} = 4.36\times10^4$, $\mathrm{Nu} = 6.26$, $h = 10.23\,\mathrm{W/m^2K}$, and

$$T_s = 20 + \frac{1910}{10.23} = 206.7^\circ\mathrm{C}$$

This is converged: Ra barely changes, because the rise in $\Delta T$ is offset by the fall in $\beta/\nu^2$.

**Answer:** $T_s \approx 207^\circ\mathrm{C}$ ($h \approx 10.2\,\mathrm{W/m^2K}$). Ra is within the Churchill–Chu range ($10^{-5}$ to $10^{12}$).

> **Note:** a real heater is seldom polished. With $\varepsilon \approx 0.8$, radiation at about 200°C is roughly as large as convection, and the true surface temperature would be well below 200°C.`,
          answer: String.raw`$\dot q_s = 1910\,\mathrm{W/m^2}$; iteration gives $h \approx 10.2\,\mathrm{W/m^2K}$ ($\mathrm{Ra} \approx 4.4\times10^4$, $\mathrm{Nu} \approx 6.26$), so $T_s \approx 207^\circ\mathrm{C}$.` }
      ] }
  ] });
