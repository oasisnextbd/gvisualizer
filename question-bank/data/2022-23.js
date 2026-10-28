QB.paper({
  year: "2022-23", date: "06/06/2024", marks: 210,
  rules: String.raw`Section A: Q1 compulsory (35) + any two of Q2–Q4. Section B: Q5 compulsory (45) + any two of Q6–Q8. Heat transfer data booklet supplied; TEMA sheet to be attached.`,
  questions: [
    { id: "2022-23-Q1", q: 1, section: "A", compulsory: true,
      stem: "",
      parts: [
        { id: "2022-23-Q1a", label: "(a)", marks: "5",
          topic: "forced-convection", sub: "Liquid metals: blunt velocity profile",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`"For liquid metals the velocity profile has a very blunt shape over most of the thermal boundary layer." Explain.`,
          solution: String.raw`- Liquid metals (Na, K, NaK, Hg, Pb–Bi) have a very high thermal conductivity and a normal viscosity. Their Prandtl number is very low: $\mathrm{Pr} = \nu/\alpha \approx 0.004$–$0.03$.
- Heat diffuses much faster than momentum, so the thermal boundary layer is much thicker than the velocity boundary layer: $\delta_t/\delta \sim \mathrm{Pr}^{-1/2} \gg 1$. In a tube, the thermal entry length is also far shorter than the hydrodynamic one.
- The velocity changes from 0 to $u_\infty$ only within a thin layer $\delta$ near the wall. Over most of the thick thermal layer ($\delta < y < \delta_t$), the fluid moves at nearly the free-stream (or core) velocity.
- As the heat "sees" it, the velocity profile is therefore **blunt, almost flat (slug or plug flow)** across most of the thermal layer. In turbulent tube flow the profile is flat as well, and molecular conduction dominates even in the turbulent core.
- Consequence: liquid-metal analyses assume slug flow ($u = u_\infty$ everywhere). The ordinary correlations based on Pr ≈ 1 (Dittus–Boelter) do not apply. Special correlations in the Péclet number are used instead, e.g. Lyon: $\mathrm{Nu} = 7 + 0.025\,\mathrm{Pe}^{0.8}$ for constant flux, or Seban–Shimazaki: $\mathrm{Nu} = 5.0 + 0.025\,\mathrm{Pe}^{0.8}$ for constant wall temperature.

Sketch: wall at the bottom, a thin velocity layer $\delta$ with a steep $u$ profile, and a much thicker $\delta_t$ above it inside which $u \approx u_\infty$ (vertical straight line).`,
          answer: String.raw`Pr ≪ 1, so $\delta_t \gg \delta$. Over most of the thermal layer the fluid moves at ≈ $u_\infty$, giving a flat (slug-flow) profile, and correlations use the Péclet number.` },
        { id: "2022-23-Q1b", label: "(b)", marks: "5",
          topic: "conduction", sub: "Thermal contact resistance (two glass sheets)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Consider a window glass consisting of two 4 mm thick glass sheets pressed tightly against each other. Compare the heat transfer rate through this window with that of one consisting of a single 8 mm thick glass sheet under identical conditions.`,
          solution: String.raw`**Resistances in series** (per unit area):

$$R''_{single} = \frac{L}{k} = \frac{0.008}{k}, \qquad R''_{double} = \frac{0.004}{k} + R''_{tc} + \frac{0.004}{k} = \frac{0.008}{k} + R''_{tc}$$

- **Ideal (perfect) contact**, $R''_{tc} = 0$: the two windows have identical resistance, so the heat transfer rates are **equal**.
- **Real surfaces:** no surface is perfectly smooth. Even when pressed tightly, the sheets touch only at the peaks of their surface roughness. The gaps are filled with air ($k \approx 0.026\,\mathrm{W/m\,K}$, about 30 times lower than glass at $k \approx 0.78$). This adds a **thermal contact resistance** $R''_{tc}$.
- So $R''_{double} > R''_{single}$, and the double-sheet window transmits **somewhat less heat** than the single 8 mm sheet. With convection on both sides the difference is small, because the film resistances ($1/h$) dominate.

> Why it matters: contact resistance is usually small for metals pressed together under high pressure, but it can be significant for rough or low-pressure joints, or when the interface traps a gas.`,
          answer: String.raw`With perfect contact they are equal. In reality the contact resistance (air in the roughness gaps) makes the two-sheet window lose slightly less heat.` },
        { id: "2022-23-Q1c", label: "(c)", marks: "5",
          topic: "conduction", sub: "Al/Cu/Al pan bottom",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The bottom of a pan is made of a 4 mm thick aluminium layer. To increase the rate of heat transfer through the bottom, someone proposes a design that consists of a 3 mm thick copper layer sandwiched between two 2 mm thick aluminium layers. Will the new design conduct heat better? Explain. Assume perfect contact between the layers.`,
          solution: String.raw`**Given:** $k_{Al} = 237\,\mathrm{W/m\,K}$, $k_{Cu} = 401\,\mathrm{W/m\,K}$ (Çengel Table A-3, 300 K). Perfect contact.

**Assumptions:** 1-D steady conduction; same area and same $\Delta T$ across the bottom.

1. **Original bottom** (4 mm Al):

$$R''_1 = \frac{L_{Al}}{k_{Al}} = \frac{0.004}{237} = 1.69\times10^{-5}\,\mathrm{m^2K/W}$$

2. **Proposed bottom** (2 mm Al + 3 mm Cu + 2 mm Al, in series):

$$R''_2 = \frac{0.002}{237} + \frac{0.003}{401} + \frac{0.002}{237} = 1.69\times10^{-5} + 0.75\times10^{-5} = 2.44\times10^{-5}\,\mathrm{m^2K/W}$$

3. **Compare:** $R''_2/R''_1 = 1.44$. For the same $\Delta T$, the new design transfers about $1/1.44 = 0.69$ as much heat, i.e. about **31% less**.

**Answer: no.** The new bottom still contains the full 4 mm of aluminium, and the copper layer is *added* in series. Any extra layer adds resistance, however conductive it is. Copper would help only if it *replaced* aluminium: an all-copper 4 mm bottom has $R'' = 1.0\times10^{-5}$.

> Exam tip: layers in series always add resistance. Compare $L/k$ sums, not conductivities.`,
          answer: String.raw`No. $R''$ rises from $1.69\times10^{-5}$ to $2.44\times10^{-5}\,\mathrm{m^2K/W}$ (×1.44), so heat transfer drops by ≈ 31%.` },
        { id: "2022-23-Q1d", label: "(d)", marks: "4+9+4+3",
          topic: "conduction", sub: "Composite wall with convection",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A house has a composite wall of wood, fibreglass insulation and plaster board, as shown in the sketch. On a cold winter day the convection heat transfer coefficients are $h_o = 60$ W/m²·K and $h_i = 30$ W/m²·K. The total wall surface is 350 m². Thermal conductivities: glass fibre blanket $k_b = 0.038$ W/m·K, plywood siding $k_s = 0.12$ W/m·K, plasterboard $k_p = 0.17$ W/m·K.

*[Figure: composite wall, inside to outside: plasterboard ($L_p$ = 10 mm), glass fibre blanket (28 kg/m³, $L_b$ = 100 mm), plywood siding ($L_s$ = 20 mm). Inside air $T_{\infty,i}$ = 20°C with $h_i$; outside air $T_{\infty,o}$ = −15°C with $h_o$.]*

(i) Determine a symbolic expression for the total thermal resistance of the wall, including inside and outside convection effects.

(ii) Determine the total heat loss through the wall.

(iii) If the wind were blowing violently, raising $h_o$ to 300 W/m²·K, determine the percentage increase in the heat loss.

(iv) What is the controlling resistance that determines the amount of heat flow through the wall?`,
          solution: String.raw`**Assumptions:** steady, 1-D conduction; constant properties; radiation neglected; studs and framing neglected.

### (i) Total resistance

All resistances are in series:

$$R_{tot} = \frac{1}{A}\left[\frac{1}{h_i} + \frac{L_p}{k_p} + \frac{L_b}{k_b} + \frac{L_s}{k_s} + \frac{1}{h_o}\right]$$

### (ii) Heat loss

Resistance terms per unit area ($\mathrm{m^2K/W}$):

| Term | Expression | Value |
|---|---|---|
| Inside convection | $1/h_i = 1/30$ | 0.0333 |
| Plasterboard | $0.010/0.17$ | 0.0588 |
| Glass fibre | $0.100/0.038$ | 2.6316 |
| Plywood | $0.020/0.12$ | 0.1667 |
| Outside convection | $1/h_o = 1/60$ | 0.0167 |
| **Sum** | | **2.9071** |

$$R_{tot} = \frac{2.9071}{350} = 8.306\times10^{-3}\,\mathrm{K/W}$$

$$q = \frac{T_{\infty,i} - T_{\infty,o}}{R_{tot}} = \frac{20 - (-15)}{8.306\times10^{-3}} = 4214\,\mathrm{W} \approx 4.21\,\mathrm{kW}$$

### (iii) Violent wind, $h_o = 300\,\mathrm{W/m^2K}$

$1/h_o = 0.0033$, so $\sum R'' = 2.8938$ and

$$q = \frac{35\times350}{2.8938} = 4233\,\mathrm{W}$$

$$\%\ \text{increase} = \frac{4233 - 4214}{4214}\times100 = 0.46\%$$

### (iv) Controlling resistance

The **glass fibre blanket**: $2.632/2.907 = 90.5\%$ of the total resistance. Changes in the convection coefficients (even a fivefold rise in $h_o$) hardly affect the heat loss.`,
          answer: String.raw`$R_{tot} = \frac1A\left[\frac{1}{h_i} + \frac{L_p}{k_p} + \frac{L_b}{k_b} + \frac{L_s}{k_s} + \frac{1}{h_o}\right] = 8.31\times10^{-3}$ K/W; $q \approx 4.21\,\mathrm{kW}$; +0.46% with $h_o = 300$; the glass-fibre layer controls (≈ 90% of R).` },
      ] },

    { id: "2022-23-Q2", q: 2, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2022-23-Q2a", label: "(a)", marks: "12",
          topic: "generation", sub: "Solid cylinder with generation: centre temperature",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`From the given general heat conduction equation in a cylindrical system, derive the equation for the temperature at the centre of the cylinder.

$$\frac{1}{r}\frac{d}{dr}\left(r\frac{dT}{dr}\right) + \frac{\dot q}{k} = 0$$`,
          solution: String.raw`**Assumptions:** long solid cylinder of radius $R$ (= $r_0$); steady, 1-D radial conduction; uniform volumetric generation $\dot q$; constant $k$; surface held at $T_s$.

1. **Multiply by r and integrate:**

$$\frac{d}{dr}\left(r\frac{dT}{dr}\right) = -\frac{\dot q}{k}r \quad\Rightarrow\quad r\frac{dT}{dr} = -\frac{\dot q r^2}{2k} + C_1$$

2. **BC 1 (symmetry/finiteness):** $dT/dr = 0$ at $r = 0$, so $C_1 = 0$.

$$\frac{dT}{dr} = -\frac{\dot q r}{2k}$$

3. **Integrate again:**

$$T(r) = -\frac{\dot q r^2}{4k} + C_2$$

4. **BC 2:** $T = T_s$ at $r = R$, so $C_2 = T_s + \dfrac{\dot q R^2}{4k}$.

5. **Temperature distribution:**

$$T(r) = T_s + \frac{\dot q R^2}{4k}\left(1 - \frac{r^2}{R^2}\right)$$

6. **Centre temperature** ($r = 0$, the maximum):

$$\boxed{T_0 = T_{max} = T_s + \frac{\dot q R^2}{4k}} \qquad\text{and}\qquad \frac{T(r) - T_s}{T_0 - T_s} = 1 - \left(\frac{r}{R}\right)^2$$

7. **With a convective surface** (fluid at $T_\infty$, coefficient h): an energy balance $\dot q\pi R^2 L = h\,2\pi RL(T_s - T_\infty)$ gives $T_s = T_\infty + \dfrac{\dot q R}{2h}$, so

$$T_0 = T_\infty + \frac{\dot q R}{2h} + \frac{\dot q R^2}{4k}$$`,
          answer: String.raw`$T(r) = T_s + \frac{\dot qR^2}{4k}(1 - r^2/R^2)$, so $T_0 = T_s + \dot qR^2/(4k)$ $\left[= T_\infty + \frac{\dot qR}{2h} + \frac{\dot qR^2}{4k}\right]$.` },
        { id: "2022-23-Q2b", label: "(b)", marks: "6",
          topic: "forced-convection", sub: "Property variation distorts velocity profile",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`"Wide temperature differences can have a significant impact on fluid properties that ends up altering the velocity profile." Explain with appropriate schematics.`,
          solution: String.raw`- With a large wall-to-fluid temperature difference, viscosity varies strongly across the tube. This is especially true for liquids, where $\mu$ falls steeply with T. The parabolic laminar profile (or the turbulent profile) derived for constant properties is then distorted.
- **Liquid being heated** (wall hotter): the fluid near the wall is less viscous and flows faster, so it needs less shear. The profile becomes **flatter in the centre and steeper near the wall** than the isothermal parabola. The higher wall gradient raises $h$.
- **Liquid being cooled** (wall colder): the fluid near the wall is more viscous and slows down. The profile becomes **more peaked at the centre** with a gentler wall gradient, so $h$ drops.
- **Gases** are the opposite, because $\mu$ *increases* with T. A heated gas gives a more peaked profile; a cooled gas gives a flatter one.
- The density change also accelerates the flow (gases) and creates buoyancy effects.

**Schematic** (velocity $u$ vs radius $r$, three curves at the same flow rate): (1) the isothermal parabola; (2) liquid heating: flatter, fuller curve with steep wall slopes; (3) liquid cooling: narrower, sharper peak at the centre with flat wall slopes.

**How it is handled in correlations:** property-ratio corrections. Sieder–Tate: $\mathrm{Nu} = 0.027\,\mathrm{Re}^{0.8}\mathrm{Pr}^{1/3}(\mu/\mu_w)^{0.14}$; laminar: $1.86(\mathrm{Re\,Pr}\,d/L)^{1/3}(\mu/\mu_w)^{0.14}$. Dittus–Boelter does it differently, with $n = 0.4$ (heating) vs $0.3$ (cooling). Kern's $\phi = (\mu/\mu_w)^{0.14}$ does the same job.`,
          answer: String.raw`Viscosity variation near the wall reshapes the profile: heating a liquid gives a flatter profile and higher $h$; cooling a liquid gives a peaked profile and lower $h$; gases are the reverse. Correct with $(\mu/\mu_w)^{0.14}$.` },
        { id: "2022-23-Q2c", label: "(c)", marks: "17",
          topic: "forced-convection", sub: "Rectangular duct: required length",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A rectangular tube, 30 mm × 50 mm, carries water at a rate of 2 kg/s. Determine the length of tube required to heat the water from 30°C to 50°C if the wall temperature is maintained at 90°C. Properties: $\rho$ = 992.2 kg/m³, $c_p$ = 4.174 kJ/kg·K, $k_f$ = 0.634 W/m·K, $\mu$ = 6.531 × 10⁻⁴ kg/m·s. Use $\mathrm{Nu} = 0.023\,\mathrm{Re}^{0.8}\mathrm{Pr}^{0.4}$ and consider the LMTD.`,
          solution: String.raw`**Given:** duct $a\times b = 0.03\times0.05\,\mathrm{m}$, $\dot m = 2\,\mathrm{kg/s}$, $T_i = 30^\circ\mathrm{C}$, $T_e = 50^\circ\mathrm{C}$, $T_w = 90^\circ\mathrm{C}$.

**Find:** L.

**Assumptions:** steady state; fully developed turbulent flow; constant properties (given at the mean bulk temperature, $40^\circ\mathrm{C}$); hydraulic-diameter approach.

1. **Hydraulic diameter**

$$A_c = 0.03\times0.05 = 1.5\times10^{-3}\,\mathrm{m^2}, \quad P = 2(0.03 + 0.05) = 0.16\,\mathrm{m}, \quad D_h = \frac{4A_c}{P} = \frac{4\times1.5\times10^{-3}}{0.16} = 0.0375\,\mathrm{m}$$

2. **Reynolds and Prandtl numbers**

$$\mathrm{Re} = \frac{\dot m D_h}{A_c\mu} = \frac{2\times0.0375}{1.5\times10^{-3}\times6.531\times10^{-4}} = 7.66\times10^{4}\ (\text{turbulent}; V = 1.34\,\mathrm{m/s})$$

$$\mathrm{Pr} = \frac{c_p\mu}{k} = \frac{4174\times6.531\times10^{-4}}{0.634} = 4.30$$

3. **Nusselt number and h** (Dittus–Boelter, heating; valid for Re > 10⁴ and 0.6 < Pr < 160):

$$\mathrm{Nu} = 0.023\,(7.66\times10^4)^{0.8}(4.30)^{0.4} = 332.9, \qquad h = \frac{\mathrm{Nu}\,k}{D_h} = \frac{332.9\times0.634}{0.0375} = 5628\,\mathrm{W/m^2K}$$

4. **Heat duty**

$$Q = \dot m c_p(T_e - T_i) = 2\times4174\times(50 - 30) = 1.670\times10^{5}\,\mathrm{W}$$

5. **LMTD** (constant wall temperature): $\Delta T_1 = 90 - 30 = 60$, $\Delta T_2 = 90 - 50 = 40$.

$$\Delta T_{lm} = \frac{60 - 40}{\ln(60/40)} = 49.3^\circ\mathrm{C}$$

6. **Area and length**

$$A_s = \frac{Q}{h\,\Delta T_{lm}} = \frac{166{,}960}{5628\times49.33} = 0.601\,\mathrm{m^2}, \qquad L = \frac{A_s}{P} = \frac{0.601}{0.16} = 3.76\,\mathrm{m}$$

Check: $L/D_h = 100 > 10$, so the fully developed assumption holds.`,
          answer: String.raw`$D_h = 37.5$ mm, Re ≈ 7.7×10⁴, $h \approx 5630\,\mathrm{W/m^2K}$, $Q = 167\,\mathrm{kW}$, LMTD = 49.3°C, so $L \approx 3.76\,\mathrm{m}$.` },
      ] },

    { id: "2022-23-Q3", q: 3, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2022-23-Q3a", label: "(a)", marks: "16",
          topic: "boundary-layer", sub: "Reynolds–Colburn analogy",
          type: "derivation", syllabus: "in", repeats: ["2011-12-Q7a", "2014-15-Q3a", "2015-16-Q8a", "2016-17-Q8a", "2017-18-Q8a", "2020-21-Q7a"],
          text: String.raw`Consider a fluid flowing past a flat plate where the friction coefficient is $C_f$. The velocity distribution and laminar boundary-layer thickness can be expressed by

$$\frac{u}{u_\infty} = \frac32\frac{y}{\delta} - \frac12\left(\frac{y}{\delta}\right)^3, \qquad \delta = 4.64\sqrt{\frac{\nu x}{u_\infty}}$$

where $u_\infty$ is the velocity outside the boundary layer. Derive a relation between fluid friction and heat transfer for laminar flow on a flat plate, known as the Reynolds–Colburn analogy.`,
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
          answer: String.raw`$C_{fx}/2 = 0.323\,\mathrm{Re}_x^{-1/2}$ and $\mathrm{St}_x\mathrm{Pr}^{2/3} = 0.332\,\mathrm{Re}_x^{-1/2}$, so $\mathrm{St}_x\,\mathrm{Pr}^{2/3} = C_{fx}/2$.` },
        { id: "2022-23-Q3b", label: "(b)", marks: "6+5+8",
          topic: "generation", sub: "Rod with generation between two plates",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Two large steel plates at 150°C and 100°C are connected by a copper rod ($k$ = 390 W/m·K), 300 mm long and 25 mm in diameter, welded to each plate. The rod is insulated on its lateral surface, so heat flows only axially. An electric current through the rod generates heat at a rate of 150 W. Calculate:

(i) the equation of the temperature profile, if the heat conduction equation is $\frac{d^2T}{dx^2} + \frac{\dot q}{k} = 0$ ($\dot q$ = heat generation rate per unit volume);

(ii) the maximum temperature in the rod;

(iii) the heat flux at the two ends of the rod.

*[Figure: insulated rod, d = 25 mm, L = 300 mm; x measured from the left end; $T_1$ = 150°C at x = 0, $T_2$ = 100°C at x = L.]*`,
          solution: String.raw`**Given:** $L = 0.3\,\mathrm{m}$, $d = 0.025\,\mathrm{m}$, $k = 390\,\mathrm{W/m\,K}$, $\dot Q_{gen} = 150\,\mathrm{W}$, $T(0) = 150^\circ\mathrm{C}$, $T(L) = 100^\circ\mathrm{C}$.

**Assumptions:** steady state; 1-D axial conduction (lateral surface insulated); uniform $\dot q$; constant $k$.

**Volumetric generation**

$$V = \frac{\pi d^2}{4}L = \frac{\pi(0.025)^2}{4}\times0.3 = 1.473\times10^{-4}\,\mathrm{m^3}, \qquad \dot q = \frac{150}{1.473\times10^{-4}} = 1.019\times10^{6}\,\mathrm{W/m^3}$$

### (i) Temperature profile

1. **Integrate twice:**

$$\frac{dT}{dx} = -\frac{\dot q}{k}x + C_1, \qquad T = -\frac{\dot q}{2k}x^2 + C_1x + C_2$$

2. **Apply the BCs:** $T(0) = T_1$ gives $C_2 = 150$. $T(L) = T_2$ gives $C_1 = \dfrac{T_2 - T_1}{L} + \dfrac{\dot qL}{2k}$.

$$\frac{\dot q}{2k} = \frac{1.019\times10^6}{2\times390} = 1305.9\,\mathrm{K/m^2}, \qquad C_1 = \frac{100 - 150}{0.3} + 1305.9\times0.3 = 225.1\,\mathrm{K/m}$$

3. **Result:**

$$\boxed{T(x) = 150 + 225.1\,x - 1305.9\,x^2}\quad(^\circ\mathrm{C},\ x\ \text{in m})$$

### (ii) Maximum temperature

$$\frac{dT}{dx} = 0 \Rightarrow x^* = \frac{C_1k}{\dot q} = \frac{225.1}{2\times1305.9} = 0.0862\,\mathrm{m}$$

$$T_{max} = 150 + 225.1(0.0862) - 1305.9(0.0862)^2 = 159.7^\circ\mathrm{C}$$

### (iii) Heat flux at the ends

Fourier's law: $q'' = -k\,dT/dx$.

- At $x = 0$:

$$q''_0 = -390\times225.1 = -8.78\times10^{4}\,\mathrm{W/m^2}$$

The negative sign means the heat flows in the −x direction, out of the rod into the 150°C plate. The heat rate is $8.78\times10^4\times4.909\times10^{-4} = 43.1\,\mathrm{W}$.

- At $x = L$:

$$q''_L = -k\left(-\frac{\dot q L}{k} + C_1\right) = -390\,(225.1 - 783.5) = +2.18\times10^{5}\,\mathrm{W/m^2}$$

This flows in +x, into the 100°C plate. The heat rate is $106.9\,\mathrm{W}$.

**Check:** $43.1 + 106.9 = 150\,\mathrm{W}$, which equals the heat generated.`,
          answer: String.raw`$T(x) = 150 + 225.1x - 1305.9x^2$ °C; $T_{max} \approx 159.7^\circ\mathrm{C}$ at x = 86 mm; $q''(0) = 8.78\times10^4\,\mathrm{W/m^2}$ (to the 150°C plate, 43 W), $q''(L) = 2.18\times10^5\,\mathrm{W/m^2}$ (to the 100°C plate, 107 W).` },
      ] },

    { id: "2022-23-Q4", q: 4, section: "A", compulsory: false,
      stem: "",
      parts: [
        { id: "2022-23-Q4a", label: "(a)", marks: "6",
          topic: "conduction", sub: "Thermal circuit: firefighter's turnout coat",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`A firefighter's protective clothing (turnout coat) is typically constructed as an ensemble of three layers separated by air gaps. Considering all possible modes of heat transfer, draw the thermal resistance circuit for the system.

*[Figure: from the fire side to the firefighter: shell (s) ($k_s$, $L_s$), 1 mm air gap, moisture barrier (mb) ($k_{mb}$, $L_{mb}$), 1 mm air gap, thermal liner (tl) ($k_{tl}$, $L_{tl}$).]*`,
          solution: String.raw`**Modes**
- Conduction through each fabric layer.
- Across each thin (1 mm) air gap: **conduction** through the air (the gap is too narrow for free convection) **in parallel with radiation** between the facing surfaces.
- At the outer surface: convection and radiation from the fire, in parallel.

**Circuit** (from the fire at $T_{fire}$ to the firefighter's inner surface $T_{i}$; all resistances per unit area):

$$T_{fire}\ -\!\!\left[R_{conv,o}\ \|\ R_{rad,o}\right]\!\!-\ R_{s}\ -\!\!\left[R_{a}\ \|\ R_{rad,a}\right]\!\!-\ R_{mb}\ -\!\!\left[R_{a}\ \|\ R_{rad,a}\right]\!\!-\ R_{tl}\ -\ T_i$$

| Resistance | Expression |
|---|---|
| Outer convection | $R_{conv,o} = 1/h_o$ |
| Outer radiation | $R_{rad,o} = 1/h_{r,o}$, with $h_r = \varepsilon\sigma(T_s + T_{sur})(T_s^2 + T_{sur}^2)$ |
| Shell | $R_s = L_s/k_s$ |
| Air gap, conduction | $R_a = L_a/k_a$ ($L_a$ = 1 mm) |
| Air gap, radiation | $R_{rad,a} = 1/h_{r,a}$, $h_{r,a} = \dfrac{\sigma(T_1 + T_2)(T_1^2 + T_2^2)}{1/\varepsilon_1 + 1/\varepsilon_2 - 1}$ |
| Moisture barrier | $R_{mb} = L_{mb}/k_{mb}$ |
| Thermal liner | $R_{tl} = L_{tl}/k_{tl}$ |

The total is $R''_{tot} = (1/h_o + h_{r,o})^{-1} + R_s + 2\left(\frac{1}{R_a} + \frac{1}{R_{rad,a}}\right)^{-1} + R_{mb} + R_{tl}$. A contact or convection resistance to the skin can be added at the inner end if the liner is not in contact.

Sketch: draw it as a chain of resistors. At the outer surface and at each gap, two branches sit side by side (parallel pair); the fabric layers are single resistors in series.`,
          answer: String.raw`Series chain: [outer conv ∥ rad] – $R_s$ – [gap cond ∥ gap rad] – $R_{mb}$ – [gap cond ∥ gap rad] – $R_{tl}$.` },
        { id: "2022-23-Q4b", label: "(b)", marks: "11",
          topic: "convection-basics", sub: "Nusselt number from wall conduction",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Air at 6°C ($k$ = 0.024 W/m·K) is adjacent to a wall 3 m high and 0.15 m thick made of brick with $k$ = 0.3 W/m·K. The inside temperature of the wall is 18°C and the outside wall temperature is 12°C. Calculate the Nusselt number at both sides of the wall.`,
          solution: String.raw`**Given:** brick $k = 0.3\,\mathrm{W/m\,K}$, $L_w = 0.15\,\mathrm{m}$, height $H = 3\,\mathrm{m}$; surface temperatures $T_{s,i} = 18^\circ\mathrm{C}$, $T_{s,o} = 12^\circ\mathrm{C}$; outside air $T_\infty = 6^\circ\mathrm{C}$, $k_{air} = 0.024\,\mathrm{W/m\,K}$.

**Assumptions:** steady, 1-D conduction; the same flux leaves by convection on the air side; radiation neglected; characteristic length = wall height (vertical wall).

1. **Heat flux through the wall**

$$q'' = k\frac{T_{s,i} - T_{s,o}}{L_w} = 0.3\times\frac{18 - 12}{0.15} = 12\,\mathrm{W/m^2}$$

2. **Outside convection coefficient** (surface balance):

$$h_o = \frac{q''}{T_{s,o} - T_\infty} = \frac{12}{12 - 6} = 2.0\,\mathrm{W/m^2K}$$

3. **Outside Nusselt number**

$$\mathrm{Nu}_o = \frac{h_oH}{k_{air}} = \frac{2.0\times3}{0.024} = 250$$

If the wall thickness is used as the length instead, $\mathrm{Nu} = 2.0\times0.15/0.024 = 12.5$.

4. **Inside face.** The same flux, 12 W/m², enters from the room air. The paper does not give the room air temperature, so

$$\mathrm{Nu}_i = \frac{h_iH}{k_{air}} = \frac{q''H}{k_{air}(T_{\infty,i} - 18)} = \frac{1500}{T_{\infty,i} - 18}$$

If (as the statement implies) the same air conditions, $|\Delta T| = 6\,\mathrm{K}$, apply on the inside, then $h_i = 2.0\,\mathrm{W/m^2K}$ and $\mathrm{Nu}_i = 250$.

> Assumption: the paper gives only one air temperature. The inside Nu is computed for a 6 K film difference ($T_{\infty,i} = 24^\circ\mathrm{C}$), which gives the same value as the outside.

> Note: Nu is the ratio of convective to conductive heat transfer *in the fluid*, so $k$ of air (not brick) is used.`,
          answer: String.raw`$q'' = 12\,\mathrm{W/m^2}$, $h = 2\,\mathrm{W/m^2K}$, $\mathrm{Nu} = hH/k_{air} = 250$ (outside; same on the inside for a 6 K air–wall difference).` },
        { id: "2022-23-Q4c", label: "(c)", marks: "18",
          topic: "boundary-layer", sub: "Plate heated by convection + radiation",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Hot air at 470°C flows over a flat plate 40 cm × 20 cm and 3 mm thick at a velocity of 2 m/s along the 40 cm side. The initial plate temperature is 30°C. The specific heat of the plate is 450 J/kg·K and its density is 8000 kg/m³. Calculate the initial rate of temperature rise of the plate in °C/min, if the plate receives heat by convection and radiation on both sides. Assume the emissivity of the plate is 0.85.

[Hint: heat transferred by convection and radiation together raises the temperature of the plate.]`,
          solution: String.raw`**Given:** $L = 0.4\,\mathrm{m}$ (flow direction), $W = 0.2\,\mathrm{m}$, $t = 0.003\,\mathrm{m}$; $T_\infty = 470^\circ\mathrm{C}$, $u_\infty = 2\,\mathrm{m/s}$; $T_s = 30^\circ\mathrm{C}$ (initial); $c = 450$, $\rho = 8000$, $\varepsilon = 0.85$.

**Find:** $dT/dt$ at $t = 0$.

**Assumptions:**
- The plate is thin and metallic, so it is isothermal (lumped).
- Radiation is received from surroundings at the hot-gas temperature, $T_{sur} = 470^\circ\mathrm{C} = 743\,\mathrm{K}$, e.g. furnace walls (not stated; air itself barely radiates).
- Both faces are exposed equally. Edges are neglected.

1. **Air properties** at $T_f = (470 + 30)/2 = 250^\circ\mathrm{C} = 523\,\mathrm{K}$ (Holman Table A-5, interpolated between 500 and 550 K): $\nu = 40.9\times10^{-6}\,\mathrm{m^2/s}$, $k = 0.0419\,\mathrm{W/m\,K}$, $\mathrm{Pr} = 0.680$.

2. **Reynolds number**

$$\mathrm{Re}_L = \frac{u_\infty L}{\nu} = \frac{2\times0.4}{40.9\times10^{-6}} = 1.96\times10^{4} < 5\times10^5\ \text{(laminar)}$$

3. **Average h** (laminar flat plate, $\overline{\mathrm{Nu}} = 0.664\,\mathrm{Re}^{1/2}\mathrm{Pr}^{1/3}$):

$$\overline{\mathrm{Nu}} = 0.664\times(19{,}570)^{1/2}\times0.680^{1/3} = 81.7, \qquad \bar h = \frac{81.7\times0.0419}{0.4} = 8.55\,\mathrm{W/m^2K}$$

4. **Convection to both sides**

$$\dot Q_{conv} = 2\bar hA(T_\infty - T_s) = 2\times8.55\times0.08\times(470 - 30) = 602\,\mathrm{W}$$

5. **Radiation to both sides**

$$\dot Q_{rad} = 2\varepsilon\sigma A(T_{sur}^4 - T_s^4) = 2\times0.85\times5.67\times10^{-8}\times0.08\times(743.15^4 - 303.15^4) = 2287\,\mathrm{W}$$

6. **Lumped energy balance**

$$m = \rho LWt = 8000\times0.4\times0.2\times0.003 = 1.92\,\mathrm{kg}$$

$$\frac{dT}{dt} = \frac{\dot Q_{conv} + \dot Q_{rad}}{mc} = \frac{602 + 2287}{1.92\times450} = 3.34\,\mathrm{K/s} \approx 200^\circ\mathrm{C/min}$$

> Note: radiation supplies about 80% of the heat at these temperatures. This rate is the *initial* value; it falls as the plate heats up.`,
          answer: String.raw`$\mathrm{Re} = 1.96\times10^4$, $\bar h \approx 8.6\,\mathrm{W/m^2K}$; $Q_{conv} \approx 602\,\mathrm{W}$, $Q_{rad} \approx 2287\,\mathrm{W}$ (surroundings at 470°C); $dT/dt \approx 3.3\,\mathrm{K/s} \approx 200^\circ\mathrm{C/min}$.` },
      ] },

    { id: "2022-23-Q5", q: 5, section: "B", compulsory: true,
      stem: String.raw`Nitrobenzene, 55,400 lb/h, is produced in a reactor at an operating temperature of 365°F. The product stream must be cooled to 150°F by preheating benzene from 100°F to the maximum attainable temperature. Allowable pressure drop is 7 psi for the tube side and 10 psi for the shell side. Dirt factors of 0.001 (tube side) and 0.0025 (shell side) are required.

The available exchanger is a 2-6 shell-and-tube heat exchanger.

- **Shell side:** ID 25 in, 25% vertically cut baffles, baffle spacing 8 in.
- **Tube side:** 365 tubes, $\tfrac34$ in OD, 0.62 in ID, 16 BWG, 16 ft long, 1 in square pitch.

| Property (at average temperature) | Nitrobenzene | Benzene |
|---|---|---|
| Viscosity, lb/ft·h | 1.65 | 1.57 |
| Thermal conductivity, Btu/h·ft·°F | 0.085 | 0.0785 |
| Specific heat, Btu/lb·°F | 0.56 | 0.435 |`,
      parts: [
        { id: "2022-23-Q5a", label: "(a)", marks: "24",
          topic: "shell-tube", sub: "Kern rating: h_io and h_o",
          type: "numerical", syllabus: "in", repeats: ["2011-12-Q1a"],
          text: String.raw`Determine the tube-side and shell-side heat transfer coefficients.`,
          solution: String.raw`**Given**
- Hot: nitrobenzene, $W = 55{,}400\,\mathrm{lb/h}$, $T_1 = 365^\circ\mathrm{F} \to T_2 = 150^\circ\mathrm{F}$; $\mu = 1.65\,\mathrm{lb/ft\,h}$, $k = 0.085$, $c = 0.56\,\mathrm{Btu/lb\,^\circ F}$
- Cold: benzene from $t_1 = 100^\circ\mathrm{F}$; $\mu = 1.57\,\mathrm{lb/ft\,h}$, $k = 0.0785$, $c = 0.435$
- 2-6 exchanger (2 shell passes, 6 tube passes): $D_s = 25\,\mathrm{in}$, $B = 8\,\mathrm{in}$, 25% cut; $N_t = 365$ tubes, $\tfrac34\,\mathrm{in}$ OD, 0.62 in ID (16 BWG), $L = 16\,\mathrm{ft}$, 1 in square pitch
- $\Delta P_{allow}$: tube 7 psi, shell 10 psi; $R_{d,tube} = 0.001$, $R_{d,shell} = 0.0025$

**Find:** $h_i$ (as $h_{io}$) and $h_o$.

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
        { id: "2022-23-Q5b", label: "(b)", marks: "5",
          topic: "shell-tube", sub: "Clean overall coefficient U_C",
          type: "numerical", syllabus: "in", repeats: ["2011-12-Q1b"],
          text: String.raw`Find the clean overall heat transfer coefficient.`,
          solution: String.raw`$$U_C = \frac{h_{io}\,h_o}{h_{io} + h_o} = \frac{269.2\times171.7}{269.2 + 171.7} = 104.8\,\mathrm{Btu/h\,ft^2\,^\circ F}$$

The shell side (nitrobenzene) gives the larger resistance and controls $U_C$.`,
          answer: String.raw`$U_C \approx 105\,\mathrm{Btu/h\,ft^2\,^\circ F}$` },
        { id: "2022-23-Q5c", label: "(c)", marks: "10",
          topic: "shell-tube", sub: "U_D, dirt factor, ΔP: suitability",
          type: "numerical", syllabus: "in", repeats: ["2011-12-Q1c"],
          text: String.raw`Is the exchanger suitable for the specified use?`,
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

$$\Delta P_r = \frac{4n}{s}\frac{V^2}{2g'}\left(\frac{62.5}{144}\right) = \frac{4\times6}{0.83}\times\frac{4.95^2}{2\times32.2}\times0.434 = 4.8\,\mathrm{psi}$$

$$\Delta P_T = 7.1 + 4.8 = 11.9\,\mathrm{psi} > 7\,\mathrm{psi\ allowed}$$

**Shell side.** Kern Fig. 29 at $\mathrm{Re}_s = 1.53\times10^4$ reads $f \approx 0.0020\,\mathrm{ft^2/in^2}$, from the fit $e^{0.576 - 0.19\ln \mathrm{Re}}/144 = 1.98\times10^{-3}$. Crossings per shell pass: $N + 1 = 12L/B = 12\times16/8 = 24$, so 48 for the two shell passes.

$$\Delta P_s = \frac{f G_s^2 D_s (N+1)}{5.22\times10^{10} D_e s \phi_s} = \frac{1.98\times10^{-3}\times(3.191\times10^5)^2\times(25/12)\times48}{5.22\times10^{10}\times0.0790\times1.10} = 4.5\,\mathrm{psi} < 10\,\mathrm{psi}$$

### 5. Verdict

| Item | Calculated | Required | OK? |
|---|---|---|---|
| $R_d$ | 0.00238 | ≥ 0.0035 | No |
| $\Delta P$ tube (benzene) | 11.9 psi | ≤ 7 psi | No |
| $\Delta P$ shell (nitrobenzene) | 4.5 psi | ≤ 10 psi | Yes |

The exchanger is **not suitable** as specified. It is about 9% short of surface and the tube side exceeds its allowable pressure drop.

- Swapping the streams (nitrobenzene in the tubes) gives $h_{io} = 165$, $h_o = 229$, $U_C = 95.9$ and $R_d = 0.0015$. Shell $\Delta P$ becomes 23 psi, so it is worse.
- The verdict depends on the assumed $t_2$. With a lower benzene outlet, e.g. $t_2 = 220^\circ\mathrm{F}$, there is more benzene and a larger $\Delta t$, and $R_d \approx 0.0036$ just meets the requirement. A larger benzene flow also raises the tube $\Delta P$ further.

> Why it matters: an exchanger is "suitable" only if three checks all pass: $R_d \ge R_{d,req}$ (or $U_D \le U_C$ with margin), and both pressure drops within their limits.`,
          answer: String.raw`$\Delta t = 69.3^\circ\mathrm{F}$, $U_D = 83.9$, $R_d = 0.0024 < 0.0035$ required; tube $\Delta P \approx 11.9 > 7$ psi; shell $\Delta P \approx 4.5$ psi → **not suitable**.` },
        { id: "2022-23-Q5d", label: "(d)", marks: "6",
          topic: "shell-tube", sub: "TEMA specification sheet",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Fill in the attached TEMA sheet and attach it to your answer script.`,
          solution: String.raw`Filled TEMA specification sheet, using the values from parts (a)–(c): benzene in the tubes, $t_2 = 230^\circ\mathrm{F}$ assumed. Viscosity in cP = (lb/ft·h)/2.42.

| Line | Shell side | Tube side |
|---|---|---|
| Service | Nitrobenzene cooler / benzene preheater | |
| Size and type | 25 in ID × 16 ft, 2 shell passes – 6 tube passes, horizontal (e.g. TEMA AFU / AFS with longitudinal baffle) | |
| Surface per unit (eff.) | 1147 ft² | |
| Shells per unit | 1 (two shell passes) | |
| Fluid allocation | Nitrobenzene (hot) | Benzene (cold) |
| Fluid quantity, total | 55,400 lb/h | 117,950 lb/h (assumed from $t_2$) |
| Liquid | 55,400 lb/h | 117,950 lb/h |
| Temperature in / out | 365 / 150 °F | 100 / 230 °F |
| Specific gravity (assumed) | ≈ 1.10 | ≈ 0.83 |
| Viscosity | 0.68 cP (1.65 lb/ft·h) | 0.65 cP (1.57 lb/ft·h) |
| Specific heat | 0.56 Btu/lb·°F | 0.435 Btu/lb·°F |
| Thermal conductivity | 0.085 Btu/h·ft·°F | 0.0785 Btu/h·ft·°F |
| Velocity | ≈ 1.3 ft/s (cross-flow) | 4.95 ft/s |
| Pressure drop, allowed / calc. | 10 / 4.5 psi | 7 / 11.9 psi |
| Fouling resistance (min) | 0.0025 h·ft²·°F/Btu | 0.001 h·ft²·°F/Btu |
| Film coefficient | $h_o$ = 172 Btu/h·ft²·°F | $h_{io}$ = 269 Btu/h·ft²·°F |
| Heat exchanged | 6.67 × 10⁶ Btu/h | |
| MTD (corrected) | 69.3 °F ($F_T$ = 0.81, LMTD 85.6 °F) | |
| Transfer rate, service / clean | $U_D$ = 83.9 / $U_C$ = 104.8 Btu/h·ft²·°F | |
| Dirt factor, calc. / required | 0.0024 / 0.0035 | |
| Passes per shell | 2 | 6 |
| Tubes | 365 tubes, ¾ in OD, 16 BWG (0.065 in wall, 0.62 in ID), 16 ft long, 1 in pitch | |
| Tube pattern | 90° (square) | |
| Shell ID | 25 in | |
| Baffles | segmental, 25% cut (vertical), spacing 8 in; longitudinal baffle for 2 shell passes | |
| Remarks | **Not suitable:** $R_d$ below requirement, tube ΔP above allowable. Benzene side must be pressurised (230 °F > 176 °F b.p.) | |

> Exam tip: on the TEMA sheet the key lines are the fluids, flows, temperatures, ΔP allowed/calculated, fouling, $U$ (service, dirty, clean), corrected MTD and the construction data (tubes, pitch, shell ID, baffles, passes).`,
          answer: String.raw`TEMA sheet: 25 in × 16 ft, 2-6, 1147 ft²; Q = 6.67×10⁶ Btu/h; MTD 69.3°F; $U_C$ 104.8, $U_D$ 83.9; $R_d$ 0.0024 vs 0.0035; ΔP 4.5/10 (shell), 11.9/7 (tube) psi.` },
      ] },

    { id: "2022-23-Q6", q: 6, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2022-23-Q6a", label: "(a)", marks: "12",
          topic: "condensation", sub: "Nusselt analysis, vertical plate",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Analyse mathematically film condensation on a vertical plate (laminar condensate flow) and show that

$$\mathrm{Nu}_x = \frac{hx}{k} = \left[\frac{\rho(\rho - \rho_v)g\,h_{fg}\,x^3}{4\mu k(T_g - T_w)}\right]^{1/4}$$

All symbols have their usual meaning.`,
          solution: String.raw`**Nusselt's assumptions**
1. Laminar condensate film flowing down under gravity. The plate is at uniform $T_w$ and the vapour is saturated at $T_g = T_{sat}$.
2. Constant liquid properties. The vapour exerts no shear at the interface ($\partial u/\partial y = 0$ at $y = \delta$).
3. Heat crosses the film by conduction only, giving a **linear** temperature profile. Momentum and energy changes (inertia) in the film are negligible.
4. The interface temperature is $T_{sat}$. Sub-cooling of the condensate is neglected.

### 1. Velocity profile

Force balance on a liquid element from $y$ to $\delta$ (unit width, height dx). Weight minus buoyancy equals viscous shear:

$$(\rho - \rho_v)g(\delta - y)\,dx = \mu\frac{du}{dy}dx$$

Integrate with $u = 0$ at $y = 0$:

$$u(y) = \frac{(\rho - \rho_v)g}{\mu}\left(\delta y - \frac{y^2}{2}\right)$$

### 2. Mass flow rate per unit width

$$\Gamma = \dot m = \int_0^\delta \rho u\,dy = \frac{\rho(\rho - \rho_v)g\delta^3}{3\mu}$$

$$\frac{d\dot m}{dx} = \frac{\rho(\rho - \rho_v)g\delta^2}{\mu}\frac{d\delta}{dx}$$

### 3. Energy balance

Latent heat released by the condensate added over dx is conducted through the film to the wall:

$$h_{fg}\,d\dot m = k\frac{T_g - T_w}{\delta}dx$$

### 4. Film-thickness equation

Combine steps 2 and 3:

$$\frac{\rho(\rho - \rho_v)g h_{fg}}{\mu}\delta^3 d\delta = k(T_g - T_w)dx$$

Integrate with $\delta = 0$ at $x = 0$:

$$\frac{\rho(\rho - \rho_v)gh_{fg}}{4\mu}\delta^4 = k(T_g - T_w)x \quad\Rightarrow\quad \delta(x) = \left[\frac{4\mu k(T_g - T_w)x}{g\rho(\rho - \rho_v)h_{fg}}\right]^{1/4}$$

### 5. Local coefficient

$$h_x\,(T_g - T_w) = k\frac{T_g - T_w}{\delta} \quad\Rightarrow\quad h_x = \frac{k}{\delta} = \left[\frac{\rho(\rho - \rho_v)gh_{fg}k^3}{4\mu(T_g - T_w)x}\right]^{1/4}$$

### 6. Local Nusselt number

$$\mathrm{Nu}_x = \frac{h_xx}{k} = \frac{x}{\delta} = \left[\frac{\rho(\rho - \rho_v)g\,h_{fg}\,x^3}{4\mu k(T_g - T_w)}\right]^{1/4}$$

This is the required result.

**Average over height L:** $\bar h = \frac1L\int_0^L h_x\,dx = \frac43h_L$, so

$$\bar h = 0.943\left[\frac{\rho(\rho - \rho_v)gh_{fg}k^3}{\mu L(T_g - T_w)}\right]^{1/4}$$

Experiments run about 20% higher because of ripples, which gives $1.13$. Replace $h_{fg}$ by $h^*_{fg} = h_{fg} + 0.68c_p(T_g - T_w)$ to include sub-cooling.`,
          answer: String.raw`$\delta = [4\mu k\Delta T x/(g\rho(\rho - \rho_v)h_{fg})]^{1/4}$, $h_x = k/\delta$, so $\mathrm{Nu}_x = x/\delta = [\rho(\rho - \rho_v)gh_{fg}x^3/(4\mu k\Delta T)]^{1/4}$; the average is $\bar h = 0.943[\ldots]^{1/4}$.` },
        { id: "2022-23-Q6b", label: "(b)", marks: "18",
          topic: "condensation", sub: "Vertical tube in steam: Q and condensate rate",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The outer surface of a vertical tube, 1 m long with an outer diameter of 85 mm, is exposed to saturated steam at atmospheric pressure. The tube is maintained at 50°C by cold water flowing through it. Determine (i) the rate of heat transfer to the coolant and (ii) the rate at which steam is condensed on the surface.

Use the Nusselt correlation

$$\bar h = 1.13\left[\frac{\rho(\rho - \rho_v)g\,h_{fg}\,k_f^3}{\mu_f(T_{sat} - T_w)L}\right]^{1/4}$$

with $\rho_v$ negligible and $h_{fg}$ (at $T_{sat}$ = 100°C) = 2400 kJ/kg.`,
          solution: String.raw`**Given:** $L = 1\,\mathrm{m}$, $D = 0.085\,\mathrm{m}$, $T_{sat} = 100^\circ\mathrm{C}$, $T_w = 50^\circ\mathrm{C}$, $h_{fg} = 2400\,\mathrm{kJ/kg}$ (given), $\rho_v \approx 0$.

**Assumptions:** steady; film condensation; the tube is treated as a vertical plate (D ≫ film thickness); properties at the film temperature.

1. **Properties** of liquid water at $T_f = (100 + 50)/2 = 75^\circ\mathrm{C}$ (attached saturated-water table): $\rho = 974.7\,\mathrm{kg/m^3}$, $k = 0.667\,\mathrm{W/m\,K}$, $\mu = 0.378\times10^{-3}\,\mathrm{kg/m\,s}$.

2. **Heat transfer coefficient**

$$\bar h = 1.13\left[\frac{974.7^2\times9.81\times2.4\times10^6\times0.667^3}{0.378\times10^{-3}\times50\times1}\right]^{1/4} = 4892\,\mathrm{W/m^2K}$$

3. **(i) Heat transfer rate**

$$A = \pi DL = \pi\times0.085\times1 = 0.267\,\mathrm{m^2}$$

$$Q = \bar hA(T_{sat} - T_w) = 4892\times0.267\times50 = 6.53\times10^{4}\,\mathrm{W} = 65.3\,\mathrm{kW}$$

4. **(ii) Condensation rate**

$$\dot m = \frac{Q}{h_{fg}} = \frac{65{,}313}{2.4\times10^6} = 0.0272\,\mathrm{kg/s} \approx 98\,\mathrm{kg/h}$$

5. **Check the film Reynolds number**

$$\mathrm{Re} = \frac{4\dot m}{\pi D\mu} = \frac{4\times0.0272}{\pi\times0.085\times0.378\times10^{-3}} = 1078$$

This is $30 < \mathrm{Re} < 1800$: the film is laminar but wavy, which is consistent with the 1.13 coefficient (20% above Nusselt's 0.943).

> Exam tip: a refinement would use $h^*_{fg} = h_{fg} + 0.68c_p\Delta T$ (≈ 2543 kJ/kg). Here the question fixes $h_{fg} = 2400$ kJ/kg.`,
          answer: String.raw`$\bar h \approx 4.89\,\mathrm{kW/m^2K}$; $Q \approx 65.3\,\mathrm{kW}$; condensate $\approx 0.0272\,\mathrm{kg/s}$ (≈ 98 kg/h); Re ≈ 1080 (wavy laminar).` },
      ] },

    { id: "2022-23-Q7", q: 7, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2022-23-Q7a", label: "(a)", marks: "5",
          topic: "natural-convection", sub: "Rayleigh number",
          type: "theory", syllabus: "in", repeats: ["2011-12-Q2b"],
          text: String.raw`Define the term "Rayleigh number". What is the importance of the Rayleigh number?`,
          solution: String.raw`**Definition:** the Rayleigh number is the product of the Grashof and Prandtl numbers:

$$\mathrm{Ra}_L = \mathrm{Gr}_L\,\mathrm{Pr} = \frac{g\beta(T_s - T_\infty)L_c^3}{\nu\alpha}$$

It is the ratio of buoyancy forces to the product of momentum and thermal diffusivities, i.e. how strongly buoyancy drives the flow against viscous and thermal damping.

**Importance**
- Natural-convection correlations take the form $\mathrm{Nu} = C\,\mathrm{Ra}^n$ (Table 9-1). Ra alone fixes $\mathrm{Nu}$ for a given geometry and Pr.
- It identifies the regime. On a vertical plate the flow is laminar for $\mathrm{Ra} < 10^9$ ($n = 1/4$) and turbulent above ($n = 1/3$).
- In enclosures, below a critical Ra (about 1708 for a horizontal layer heated from below) there is no convection and only conduction.
- It tells you which correlation and constants to use.`,
          answer: String.raw`$\mathrm{Ra} = \mathrm{Gr}\,\mathrm{Pr} = g\beta\Delta TL^3/(\nu\alpha)$; it sets the free-convection regime (laminar < 10⁹ < turbulent) and $\mathrm{Nu} = C\,\mathrm{Ra}^n$.` },
        { id: "2022-23-Q7b", label: "(b)", marks: "5",
          topic: "heat-exchangers", sub: "Thermal design; equipment types",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What do you mean by the thermal design of heat transfer equipment? Make a list of some heat transfer equipment types and their purpose of use in the process industries.`,
          solution: String.raw`**Thermal design:** finding the heat-transfer surface and configuration that will carry out a specified duty (flow rates and terminal temperatures) within the allowable pressure drops and the fouling allowance. In practice this means:
- choosing the type, the fluid allocation and the flow arrangement;
- doing the heat balance and calculating the true temperature difference (LMTD × $F_T$);
- estimating $h_i$ and $h_o$, then $U_C$ and $U_D$;
- obtaining area, tube count, shell size, passes and baffles;
- checking $R_d$ and $\Delta P$, and iterating (Kern method, TEMA sheet).

Mechanical design (thickness, codes) is a separate step.

| Equipment | Purpose |
|---|---|
| Heat exchanger | Exchanges heat between two process streams (heat recovery), e.g. feed/effluent |
| Cooler | Cools a process stream with water or air |
| Heater | Heats a process stream, usually with steam or a hot oil |
| Condenser | Condenses a vapour (column overhead, turbine exhaust) |
| Partial condenser | Condenses part of a vapour mixture |
| Chiller | Cools below the cooling-water temperature using a refrigerant (e.g. NH₃, propane) |
| Reboiler | Supplies the boil-up at the bottom of a distillation column |
| Vaporiser | Vaporises a liquid (not water) |
| Evaporator | Concentrates a solution by boiling off solvent (water) |
| Steam generator / waste-heat boiler | Raises steam from hot process gases |
| Air-cooled exchanger (fin-fan) | Cools or condenses with ambient air where water is scarce |
| Superheater | Heats a vapour above saturation |`,
          answer: String.raw`Thermal design = sizing the surface and configuration to meet the duty within ΔP and fouling limits. Types: exchanger, heater, cooler, condenser, chiller, reboiler, vaporiser, evaporator, waste-heat boiler, air cooler.` },
        { id: "2022-23-Q7c", label: "(c)", marks: "5",
          topic: "heat-exchangers", sub: "Plate-and-frame exchanger",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write a short note on the plate-and-frame heat exchanger.`,
          solution: String.raw`**Construction:** a stack of thin, corrugated metal plates (stainless steel, titanium) clamped between a fixed and a movable frame plate by tie bolts. Gaskets around each plate's edge and ports form alternate channels. The hot fluid flows in every other channel and the cold fluid in the channels between, usually in counterflow.

**Features and advantages**
- The corrugations promote turbulence at low Re. $h$ is very high and $U$ is 3–5 times that of shell-and-tube units.
- Very compact (large area per volume), with close temperature approach (about 1°C) and high effectiveness.
- Easy to open for cleaning and inspection. Capacity can be changed by adding or removing plates.
- Low fluid hold-up, and less fouling owing to the high turbulence.
- Widely used in the food, dairy (pasteurisers), pharmaceutical and HVAC industries, and for liquid–liquid duties.

**Limitations**
- The gaskets limit operating pressure (about 25 bar) and temperature (about 150–250°C), and they restrict the fluids that can be handled.
- Not suitable for large vapour volumes, condensing gases or fluids carrying large particles. The narrow gaps give a high pressure drop.
- There is a risk of leakage at the gaskets. Brazed or welded versions avoid gaskets but cannot be opened.`,
          answer: String.raw`Gasketed corrugated plates clamped in a frame, giving alternate hot and cold channels. High $U$, compact, close approach, easy to clean and expand; limited by gasket pressure and temperature.` },
        { id: "2022-23-Q7d", label: "(d)", marks: "15",
          topic: "condensation", sub: "Horizontal tube bank condenser (3×4)",
          type: "numerical", syllabus: "in", repeats: ["2015-16-Q3a"],
          text: String.raw`The condenser of a steam power plant operates at a pressure of 7.38 kPa. Steam at this pressure condenses on the outer surfaces of 12 horizontal tubes (a rectangular array 3 tubes high and 4 tubes wide) through which cooling water circulates. The tube outer diameter is 3 cm and the outer surfaces are maintained at 30°C. Determine (i) the rate of heat transfer to the cooling water circulating in the pipes and (ii) the rate of condensation of steam per unit length of a horizontal pipe.

Properties of water at the saturation temperature of 40°C corresponding to 7.38 kPa: $h_{fg} = 2407\times10^3$ J/kg and $\rho_v$ = 0.05 kg/m³.`,
          solution: String.raw`**Given:** $T_{sat} = 40^\circ\mathrm{C}$, $T_s = 30^\circ\mathrm{C}$, $D = 0.03\,\mathrm{m}$, 12 tubes with $N = 3$ in each vertical column, $h_{fg} = 2407\,\mathrm{kJ/kg}$, $\rho_v = 0.05\,\mathrm{kg/m^3}$.

**Find:** $\dot Q$ and $\dot m$, per metre of tube length (the length is not given).

**Assumptions:** steady; laminar film condensation; uniform tube surface temperature; condensate drips from tube to tube down each column.

1. **Liquid properties** at $T_f = (40 + 30)/2 = 35^\circ\mathrm{C}$ (Çengel Table A-9): $\rho_l = 994\,\mathrm{kg/m^3}$, $\mu_l = 0.720\times10^{-3}\,\mathrm{kg/m\,s}$, $k_l = 0.623\,\mathrm{W/m\,K}$, $c_{pl} = 4178\,\mathrm{J/kg\,K}$.

2. **Modified latent heat**

$$h^*_{fg} = h_{fg} + 0.68c_{pl}(T_{sat} - T_s) = 2407\times10^3 + 0.68\times4178\times10 = 2435.4\times10^{3}\,\mathrm{J/kg}$$

3. **Single horizontal tube**

$$h_1 = 0.729\left[\frac{g\rho_l(\rho_l - \rho_v)h^*_{fg}k_l^3}{\mu_l(T_{sat} - T_s)D}\right]^{1/4} = 0.729\left[\frac{9.81\times994\times(994 - 0.05)\times2.4354\times10^6\times0.623^3}{0.720\times10^{-3}\times10\times0.03}\right]^{1/4}$$

$$h_1 = 9295\,\mathrm{W/m^2K}$$

4. **Tube bank** (N = 3 tubes per vertical column):

$$h_N = h_1N^{-1/4} = 9295\times3^{-1/4} = 7062\,\mathrm{W/m^2K}$$

5. **(i) Heat transfer rate per metre** (12 tubes):

$$\dot Q = h_N(12\pi DL)(T_{sat} - T_s) = 7062\times12\times\pi\times0.03\times1\times10 = 7.99\times10^{4}\,\mathrm{W}\ \text{per m}$$

6. **(ii) Condensation rate**

$$\dot m_{total} = \frac{\dot Q}{h^*_{fg}} = \frac{79{,}873}{2.4354\times10^6} = 0.0328\,\mathrm{kg/s}\ \text{per m (all 12 tubes)}$$

$$\dot m_{per\ tube} = \frac{0.0328}{12} = 2.73\times10^{-3}\,\mathrm{kg/s\ per\ m} \approx 9.8\,\mathrm{kg/h\ per\ m}$$

> Note: the drip from upper tubes thickens the film on the lower tubes. That is why the average coefficient falls as $N^{-1/4}$.`,
          answer: String.raw`$h_1 \approx 9.3$, $h_{3} \approx 7.06\,\mathrm{kW/m^2K}$; $\dot Q \approx 79.9\,\mathrm{kW}$ per m of length; condensation $\approx 0.0328\,\mathrm{kg/s}$ per m in total, i.e. $2.73\times10^{-3}\,\mathrm{kg/s}$ per m per tube.` },
      ] },

    { id: "2022-23-Q8", q: 8, section: "B", compulsory: false,
      stem: "",
      parts: [
        { id: "2022-23-Q8a", label: "(a)", marks: "10",
          topic: "boiling", sub: "Pool boiling curve; burnout",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw a typical pool boiling curve and discuss the heat transfer behaviour in the different regimes. Explain the "burnout" phenomenon.`,
          solution: String.raw`**Sketch:** heat flux $q''$ (log scale, W/m²) against excess temperature $\Delta T_e = T_s - T_{sat}$ (log scale, °C), for water at 1 atm. The curve rises gently, then steeply to a peak C ($\Delta T_e \approx 30^\circ\mathrm{C}$, $q''_{max} \approx 1.26\,\mathrm{MW/m^2}$). It falls to a minimum D (the Leidenfrost point, $\Delta T_e \approx 120^\circ\mathrm{C}$) and rises again. Mark points A (onset of nucleate boiling, $\Delta T_e \approx 5^\circ\mathrm{C}$), B, C, D and E. Draw a dashed horizontal arrow from C to the film-boiling branch E (burnout) and a return arrow from D on cooling (hysteresis).

| Regime | $\Delta T_e$ (water, 1 atm) | Behaviour |
|---|---|---|
| I. Natural convection boiling (to A) | < 5°C | Liquid slightly superheated; no bubbles. Heat moves by free convection, $q'' \propto \Delta T_e^{5/4}$; evaporation occurs at the free surface |
| II. Nucleate, isolated bubbles (A–B) | 5–10°C | Bubbles form at nucleation sites and collapse or rise; strong agitation of the liquid next to the wall |
| III. Nucleate, jets and columns (B–C) | 10–30°C | Bubbles merge into continuous vapour columns; $h$ is highest; $q''$ rises steeply ($\propto \Delta T_e^3$) up to the peak at C |
| IV. Transition boiling (C–D) | 30–120°C | Unstable partial vapour film alternates with nucleate patches; $q''$ falls as $\Delta T_e$ rises |
| V. Stable film boiling (D–E) | > 120°C | Continuous vapour blanket; conduction and radiation through the vapour; $q''$ rises slowly again |
| VI. Radiation-dominated film boiling (beyond E) | > ~500°C | Radiation across the vapour film dominates |

**Burnout**
- In heat-flux-controlled systems (electric heaters, nuclear fuel rods), the surface temperature responds to the flux applied.
- If $q''$ is raised past $q''_{max}$, the transition regime cannot carry it, because it requires a lower flux. The operating point jumps horizontally from C to the film-boiling curve at E.
- There $\Delta T_e$ is about 1000°C or more, which may exceed the melting point of the heater. The heater "burns out".
- This is why boiling equipment is operated below the critical heat flux with a margin. On cooling, the system returns along the film curve down to D before jumping back to nucleate boiling (hysteresis).`,
          answer: String.raw`Regimes: free convection → nucleate (isolated, then columns; peak at CHF) → transition → film boiling. Burnout: under heat-flux control, exceeding $q''_{max}$ makes $T_s$ jump to film boiling (~1000°C), which can melt the heater.` },
        { id: "2022-23-Q8b", label: "(b)", marks: "6",
          topic: "heat-exchangers", sub: "Effectiveness limits",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Discuss the criteria for maximum and minimum effectiveness of a heat exchanger.`,
          solution: String.raw`**Effectiveness**

$$\varepsilon = \frac{q_{actual}}{q_{max}} = \frac{q}{C_{min}(T_{h,in} - T_{c,in})}, \qquad 0 \le \varepsilon \le 1$$

Here $C = \dot mc_p$. The value $q_{max}$ is reached only if the fluid with $C_{min}$ undergoes the largest possible temperature change, $T_{h,in} - T_{c,in}$.

**Maximum effectiveness (ε → 1)**
- Requires a counterflow exchanger with infinite area ($\mathrm{NTU} = UA/C_{min} \to \infty$). The $C_{min}$ fluid then leaves at the inlet temperature of the other fluid.
- ε rises with NTU but with diminishing returns: beyond NTU ≈ 3, extra area adds little.
- For a given NTU and $C_r = C_{min}/C_{max}$, **counterflow gives the highest ε**, then multipass and cross-flow, with parallel flow lowest.
- ε is largest when $C_r = 0$, i.e. one fluid is condensing or boiling ($C_{max} \to \infty$). Then $\varepsilon = 1 - e^{-\mathrm{NTU}}$ for **every** flow arrangement.

**Minimum effectiveness**
- ε = 0 when NTU = 0 (no area or $U = 0$): no heat transfer.
- For a given NTU, ε is lowest when $C_r = 1$ (equal capacity rates).
- In **parallel flow** ε can never exceed $\varepsilon_{max} = \dfrac{1}{1 + C_r}$, however large the area. For $C_r = 1$ this is only 0.5, because both outlets approach the same mixed temperature.

**Design criterion:** choose counterflow (or high $F_T$ multipass) and an NTU of about 2–3 for high ε at reasonable cost.

> The ε–NTU method is not in the current Kern-based slides; this is the standard treatment from Holman/Çengel.`,
          answer: String.raw`ε = q/q_max ∈ [0, 1]. ε → 1 needs counterflow with NTU → ∞ (or $C_r = 0$, where $\varepsilon = 1 - e^{-NTU}$). ε = 0 at NTU = 0. Parallel flow is capped at $1/(1 + C_r)$ (0.5 for $C_r = 1$).` },
        { id: "2022-23-Q8c", label: "(c)", marks: "14",
          topic: "natural-convection", sub: "Horizontal steam pipe in air",
          type: "numerical", syllabus: "in", repeats: ["2018-19-Q7a"],
          text: String.raw`A horizontal pipe of 20 cm outside diameter carrying steam is in ambient air at 30°C. The outside surface temperature of the pipe is 220°C. Calculate the natural convection coefficient and the heat loss per metre length of pipe. Use the correlation $\mathrm{Nu}_f = C(\mathrm{Gr}_f\mathrm{Pr}_f)^m$ with

| $\mathrm{Gr}_f\mathrm{Pr}_f$ | C | m |
|---|---|---|
| 10⁴ – 10⁹ | 0.53 | 0.25 |
| 10⁹ – 10¹² | 0.13 | 0.33 |`,
          solution: String.raw`**Given:** $D = 0.2\,\mathrm{m}$, $T_s = 220^\circ\mathrm{C}$, $T_\infty = 30^\circ\mathrm{C}$, $\Delta T = 190\,\mathrm{K}$.

**Find:** $h$ and $q/L$.

**Assumptions:** steady; air is an ideal gas at 1 atm ($\beta = 1/T_f$); radiation not included (not asked).

1. **Film temperature:** $T_f = (220 + 30)/2 = 125^\circ\mathrm{C} = 398\,\mathrm{K}$. Air properties (Holman Table A-5, interpolated 350–400 K): $\nu = 25.71\times10^{-6}\,\mathrm{m^2/s}$, $k = 0.03352\,\mathrm{W/m\,K}$, $\mathrm{Pr} = 0.689$, $\beta = 1/398 = 2.51\times10^{-3}\,\mathrm{K^{-1}}$.

2. **Grashof and Rayleigh numbers**

$$\mathrm{Gr}_f = \frac{g\beta\Delta TD^3}{\nu^2} = \frac{9.81\times(1/398.15)\times190\times0.2^3}{(25.71\times10^{-6})^2} = 5.67\times10^{7}$$

$$\mathrm{Gr}_f\mathrm{Pr}_f = 5.67\times10^7\times0.689 = 3.91\times10^{7}$$

This lies in $10^4$–$10^9$ (laminar), so $C = 0.53$, $m = 0.25$.

3. **Nusselt number and h**

$$\mathrm{Nu}_f = 0.53\,(3.91\times10^7)^{0.25} = 41.9, \qquad h = \frac{\mathrm{Nu}\,k}{D} = \frac{41.9\times0.03352}{0.2} = 7.02\,\mathrm{W/m^2K}$$

4. **Heat loss per metre**

$$\frac{q}{L} = h\pi D(T_s - T_\infty) = 7.02\times\pi\times0.2\times190 = 838\,\mathrm{W/m}$$

> Note: radiation from a 220°C pipe would add a loss of similar size. It is excluded here because only natural convection is asked.`,
          answer: String.raw`$\mathrm{Gr\,Pr} \approx 3.9\times10^7$ (laminar), Nu ≈ 41.9, $h \approx 7.0\,\mathrm{W/m^2K}$, $q/L \approx 838\,\mathrm{W/m}$.` },
      ] },
  ]
});
