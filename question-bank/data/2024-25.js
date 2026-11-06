QB.paper({
  year: "2024-25", date: "31/10/2026", marks: 210,
  rules: String.raw`Section A: Q1 is compulsory + any two of Q2–Q4. Section B: any three of Q5–Q8. Heat Transfer Data Booklet supplied for missing properties and working equations. Attached: a natural-convection correlation table (Table 9-1: vertical, inclined and horizontal plates, vertical and horizontal cylinders, sphere) and, for Q8, the horizontal tube-bank condensation formula $h_{N} = 0.729[\,g\rho_l(\rho_l-\rho_v)h^*_{fg}k_l^3/(\mu_l(T_{sat}-T_s)ND)]^{1/4} = N^{-1/4}h_{1}$.`,
  questions: [
    { id: "2024-25-Q1", q: 1, section: "A", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q1a", label: "(a)", marks: "6",
          topic: "convection-basics", sub: "Why gas convection is weaker than liquid convection",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why is convection in gases generally less effective than in liquids, even though gases can have higher velocity fields?`,
          solution: String.raw`Convection is conduction into a moving fluid: $h = -k_f(\partial T/\partial y)_{wall}/(T_s - T_\infty)$, and the moving fluid must then carry the energy away. Gases are poor at both steps.

| Property (20°C, 1 atm) | Air | Water | Effect on $h$ |
|---|---|---|---|
| Conductivity $k$, W/m·K | 0.025 | 0.60 | the wall-layer conduction is ~24× weaker in air |
| Volumetric heat capacity $\rho c_p$, kJ/m³·K | 1.2 | 4170 | each m³ of air swept past carries ~3400× less energy per °C |
| Kinematic viscosity ν, m²/s | $1.5\times10^{-5}$ | $1.0\times10^{-6}$ | for the same V, Re in air is ~15× smaller (thicker boundary layer) |
| Prandtl number | 0.73 | 7.0 | thermal boundary layer in air is as thick as the velocity layer; in water it is much thinner |

- **Quantitative check (flat plate, same V and L):** $h \propto k\,(VL/\nu)^{1/2}\mathrm{Pr}^{1/3}/L$, so
$$\frac{h_{water}}{h_{air}} = \frac{0.598}{0.0251}\left(\frac{1.516\times10^{-5}}{1.004\times10^{-6}}\right)^{1/2}\left(\frac{7.01}{0.731}\right)^{1/3} = 23.8 \times 3.89 \times 2.12 \approx 196$$
To match water, laminar air flow would need about $196^2 \approx 4\times10^4$ times the velocity (turbulent flow, $h \propto V^{0.8}$: still ~2000 times).
- Higher gas velocities therefore raise $h$ only as $V^{0.5}$–$V^{0.8}$, which cannot make up for the low $k$ and the very low $\rho c_p$.
- Typical ranges confirm this: forced convection of gases 25–250 W/m²·K, of liquids 50–20,000 W/m²·K (Çengel Table 1-5).

**Exam tip:** name the two properties ($k$ and $\rho c_p$) and the dimensionless effect (lower Re and Pr). That is the full answer.`,
          answer: String.raw`Gases have ~24× lower $k$ and ~3400× lower $\rho c_p$, plus a larger ν (lower Re) and lower Pr; at equal V and L, $h_{water}/h_{air} \approx 200$, so even much higher gas velocities cannot compensate.` },
        { id: "2024-25-Q1b", label: "(b)", marks: "6",
          topic: "convection-basics", sub: "Why h is not a fluid property",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`If convection is "just conduction plus fluid motion", why can't we treat the convective heat transfer coefficient $h$ as a constant property of the fluid?`,
          solution: String.raw`- **Definition:** at the wall the fluid is at rest (no slip), so heat crosses the wall by conduction into the fluid:
$$h = \frac{-k_f\left(\partial T/\partial y\right)_{y=0}}{T_s - T_\infty}$$
$k_f$ is a property, but the wall temperature gradient is set by the **velocity and temperature fields** in the boundary layer. These depend on the flow, not just on the fluid.
- **What $h$ depends on**, besides the fluid properties ($k, \rho, c_p, \mu$):
  - flow velocity and regime (laminar, transitional, turbulent): $h \propto V^{0.5}$ laminar, $V^{0.8}$ turbulent;
  - geometry and size (plate, tube, cylinder in cross-flow, tube bank; $L$ or $D$);
  - position: the boundary layer grows, so the local $h_x \propto x^{-1/2}$ on a flat plate and is high in the entrance region of a tube;
  - type of flow (forced or natural); in natural convection $h$ depends on $\Delta T$ itself ($h \propto \Delta T^{1/4}$ laminar);
  - surface roughness and orientation; thermal boundary condition (constant $T_s$ or $q''$); phase change (boiling, condensation).
- **Consequence:** the same air gives $h \approx 5$ W/m²·K in still air and ≈ 100 W/m²·K in a fan-driven flow. $h$ is a **flow-dependent coefficient** found from correlations $\mathrm{Nu} = f(\mathrm{Re}, \mathrm{Pr})$ or $f(\mathrm{Gr}, \mathrm{Pr})$, not a tabulated property.
- Newton's law $q'' = h(T_s - T_\infty)$ is only a *definition* that lumps all these effects into $h$.`,
          answer: String.raw`$h = -k_f(\partial T/\partial y)_w/\Delta T$: the wall gradient depends on the flow field (velocity, regime, geometry, position, ΔT in natural convection, roughness, phase change), so $h$ is a flow/system coefficient, not a fluid property.` },
        { id: "2024-25-Q1c", label: "(c)", marks: "6",
          topic: "natural-convection", sub: "Hot and cold horizontal plates: upper vs lower face",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`For a hot horizontal plate in quiescent air, do you expect heat transfer to be larger for the top or bottom surface? Why? How about for a cold horizontal plate?`,
          solution: String.raw`![Hot and cold horizontal plates: plumes on the upper face of a hot plate (and the lower face of a cold one), weak edge flow on the other faces](fig/practice-natural-convection-P7c-sol.svg)

**Hot plate ($T_s > T_\infty$): the top surface transfers more heat.**
- Air heated at the **upper** face becomes lighter and rises freely as plumes; cooler air flows in from the sides to replace it. The boundary layer stays thin, so $h$ is high. Attached table: $\mathrm{Nu} = 0.54\,\mathrm{Ra}_L^{1/4}$ ($10^4$–$10^7$) or $0.15\,\mathrm{Ra}_L^{1/3}$ ($10^7$–$10^{11}$), with $L_c = A_s/p$.
- Air heated at the **lower** face also wants to rise, but the plate is in the way. It is trapped under the plate and must creep horizontally to the edges before it can rise. The layer is thick and slow, so $h$ is low: $\mathrm{Nu} = 0.27\,\mathrm{Ra}_L^{1/4}$ ($10^5$–$10^{11}$), about half the upper-face value in the same Ra range.

**Cold plate ($T_s < T_\infty$): the bottom surface transfers more heat.**
- Air cooled at the **lower** face becomes denser and sinks freely away, the mirror image of the hot upper face (same correlation, 0.54 / 0.15).
- Air cooled at the **upper** face is heavier and stays pooled on the plate, draining only over the edges (same correlation as the hot lower face, 0.27).

**Rule:** heat transfer is high when buoyancy moves the fluid *away* from the surface (hot face up, cold face down), and low when the plate blocks the buoyant motion (hot face down, cold face up).`,
          answer: String.raw`Hot plate: top > bottom (heated air rises freely from the top; under the plate it is trapped): Nu = 0.54 Ra^¼ vs 0.27 Ra^¼. Cold plate: the reverse, bottom > top (cooled air sinks freely from the lower face).` },
        { id: "2024-25-Q1d", label: "(d)", marks: "6",
          topic: "boiling", sub: "Burnout: pool boiling vs flow boiling",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why is burnout more dangerous in pool boiling than in flow boiling?`,
          solution: String.raw`![Pool boiling curve: at the critical heat flux a heat-flux-controlled surface jumps from C to E in film boiling](fig/common-boiling-curve.svg)

**Pool boiling (no forced flow):**
- The vapour leaves the surface only by buoyancy. At the critical heat flux $\dot q_{max}$ (point C) the bubbles and vapour columns merge into a vapour blanket that liquid can no longer penetrate.
- Most heaters are **heat-flux controlled** (electric elements, nuclear fuel, flue-gas tubes). If $\dot q$ is raised just above $\dot q_{max}$, the operating point cannot follow the transition-boiling branch. It jumps at the same flux to the film-boiling branch (point E), where $\Delta T_{excess}$ is of the order of 1000°C.
- The surface temperature rises suddenly by hundreds of degrees, usually above the melting point of the heater: **burnout**. There is no warning, and nothing in the system removes the vapour blanket.

**Flow boiling (forced flow in a tube or over a surface):**
- The flowing liquid sweeps bubbles off the wall and keeps re-wetting it, so the critical heat flux is much **higher** and rises with velocity (mass flux) and with subcooling.
- Along a tube the loss of wall liquid usually happens as **dry-out** of the annular film at high quality. Beyond dry-out the wall is still cooled by fast-moving vapour carrying droplets (mist flow). $h$ falls, but the wall-temperature rise is smaller and more gradual than the pool-boiling jump.
- Flow rate, pressure and inlet subcooling can be controlled to keep the operating flux safely below CHF.

**Conclusion:** in pool boiling CHF is lower and its excess leads to an abrupt, uncontrolled jump to film boiling, so burnout is sudden and destructive. In flow boiling the forced flow raises CHF and keeps cooling the wall after dry-out.`,
          answer: String.raw`Pool boiling: vapour is removed only by buoyancy, CHF is low, and a flux-controlled surface jumps at q_max to film boiling (ΔT ~ 1000°C), causing sudden melting. Flow boiling: forced flow removes vapour, raises CHF and still cools the wall (vapour/mist) after dry-out, so the excursion is milder and controllable.` },
        { id: "2024-25-Q1e", label: "(e)", marks: "6",
          topic: "heat-exchangers", sub: "Equivalent diameter: heat transfer vs pressure drop",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why is equivalent diameter for pressure drop calculations different from heat transfer coefficient calculations for the shell side?`,
          solution: String.raw`*Interpretation:* "shell side" here means the outer (annular) passage, for which two different equivalent diameters are used.

- **Definition:** $D_e = 4r_h = 4\times\dfrac{\text{flow area}}{\text{perimeter}}$. The question is which perimeter to use.
- **Heat transfer:** only the surface that actually transfers heat matters, so the **heated perimeter** is used. In a double-pipe annulus this is the outer surface of the inner pipe only:
$$D_e = \frac{4\cdot\frac{\pi}{4}(D_2^2 - D_1^2)}{\pi D_1} = \frac{D_2^2 - D_1^2}{D_1}$$
- **Pressure drop (friction):** the fluid rubs on **every wetted wall**, the inner pipe and the inside of the outer pipe (shell). The wetted perimeter $\pi(D_1 + D_2)$ is used:
$$D'_e = \frac{4\cdot\frac{\pi}{4}(D_2^2 - D_1^2)}{\pi(D_1 + D_2)} = D_2 - D_1$$
- Using the heated $D_e$ in the friction calculation would ignore the friction on the outer wall and under-predict ΔP. Using $D'_e$ for heat transfer would credit heat flow to a wall that is insulated. So the two diameters differ.
- **Kern shell-and-tube shell side:** $D_e$ is based on the wetted perimeter of the tubes in a pitch cell, e.g. square pitch $D_e = 4(P_T^2 - \pi d_o^2/4)/(\pi d_o)$, and the shell wall is neglected. Kern's shell-side friction chart (Fig. 29) is correlated with this same $D_e$, so the same value appears in $\Delta P_s = fG_s^2D_s(N+1)/(5.22\times10^{10}D_es\phi_s)$. The principle above explains why a separate pressure-drop diameter is needed wherever additional non-heat-transfer walls are wetted.

**Example:** 2 in × 1¼ in IPS annulus ($D_2 = 2.067$ in, $D_1 = 1.66$ in): $D_e = 0.915$ in for $h$, $D'_e = 0.407$ in for ΔP.`,
          answer: String.raw`$D_e = 4A/(\text{heated perimeter})$ for h (only the heat-transfer wall), but $D'_e = 4A/(\text{wetted perimeter})$ for ΔP (friction acts on all wetted walls); for an annulus $D_e = (D_2^2 - D_1^2)/D_1$ vs $D'_e = D_2 - D_1$.` },
        { id: "2024-25-Q1f", label: "(f)", marks: "5",
          topic: "heat-exchangers", sub: "Can LMTD exceed both end differences?",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`The temperature difference between the hot and cold fluids in a heat exchanger is given to be $\Delta T_1$ at one end and $\Delta T_2$ at the other end. Can the logarithmic temperature difference $\Delta T_{lm}$ of this heat exchanger be greater than both $\Delta T_1$ and $\Delta T_2$? Explain.`,
          solution: String.raw`**No.** $\Delta T_{lm}$ is a *mean* of the two end differences and always lies between them.

1. **Definition:** with $\Delta T_1 > \Delta T_2$ and $r = \Delta T_1/\Delta T_2 > 1$,
$$\Delta T_{lm} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1/\Delta T_2)} = \Delta T_2\,\frac{r - 1}{\ln r}$$

2. **Lower bound:** $\ln r < r - 1$ for $r > 1$, so $(r-1)/\ln r > 1$ and $\Delta T_{lm} > \Delta T_2$.

3. **Upper bound:** $\ln r > (r-1)/r$ for $r > 1$, so $(r-1)/\ln r < r$ and $\Delta T_{lm} < \Delta T_1$.

4. **Result:** $\Delta T_2 < \Delta T_{lm} < \Delta T_1$ (equality only when $\Delta T_1 = \Delta T_2$). It also lies below the arithmetic mean: e.g. $\Delta T_1 = 150$, $\Delta T_2 = 10$ gives $\Delta T_{lm} = 51.7$, between 10 and 150 and below the arithmetic mean of 80.

**Physical reason:** the local difference $\Delta T(x)$ varies monotonically (exponentially) from $\Delta T_1$ at one end to $\Delta T_2$ at the other. $\Delta T_{lm}$ is its area-weighted average, $\Delta T_{lm} = \frac{1}{A}\int \Delta T\,dA$, and an average of a monotonic function cannot exceed its largest value.`,
          answer: String.raw`No: $\Delta T_{lm} = (\Delta T_1 - \Delta T_2)/\ln(\Delta T_1/\Delta T_2)$ is the area-average of a monotonic ΔT(x), so $\min(\Delta T_1, \Delta T_2) < \Delta T_{lm} < \max(\Delta T_1, \Delta T_2)$ (it is also below the arithmetic mean).` },
      ] },

    { id: "2024-25-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q2a", label: "(a)", marks: "15",
          topic: "conduction", sub: "Conduction through a hollow sphere",
          type: "derivation", syllabus: "in", repeats: ["2013-14-Q5a", "2015-16-Q5b", "practice-conduction-P8a"],
          text: String.raw`Derive an expression for the heat flow rate through a hollow sphere with inside radius $r_i$, outside radius $r_o$ and constant thermal conductivity $k$. The inside and outside surfaces of the hollow sphere are held at constant temperatures $T_i$ and $T_o$, respectively. State the assumptions, if any.`,
          solution: String.raw`![Hollow sphere with a thin shell dr at radius r and its thermal resistance](fig/2024-25-Q2a.svg)

**Assumptions:** steady state; one-dimensional radial conduction ($T = T(r)$ only, uniform surface temperatures); constant $k$; no internal heat generation; homogeneous, isotropic material.

### Step 1: Energy balance on a thin spherical shell
Take a shell of radius $r$ and thickness $dr$. With steady state and no generation, the heat entering at $r$ equals the heat leaving at $r + dr$, so $q_r$ is the **same at every radius**:
$$q_r = q_{r+dr}\ \Rightarrow\ \frac{dq_r}{dr} = 0$$

### Step 2: Fourier's law with the spherical area
The area normal to the radial flow is $A = 4\pi r^2$:
$$q = -k\,(4\pi r^2)\frac{dT}{dr}$$
(Equivalently, the conduction equation $\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dT}{dr}\right) = 0$ gives $r^2\,dT/dr = C_1$.)

### Step 3: Separate the variables and integrate
$$q\int_{r_i}^{r_o}\frac{dr}{r^2} = -4\pi k\int_{T_i}^{T_o}dT$$
$$q\left(\frac{1}{r_i} - \frac{1}{r_o}\right) = 4\pi k\,(T_i - T_o)$$

### Step 4: Heat flow rate
$$\boxed{q = \frac{4\pi k\,(T_i - T_o)}{\dfrac{1}{r_i} - \dfrac{1}{r_o}} = \frac{4\pi k\,r_ir_o\,(T_i - T_o)}{r_o - r_i}}$$

### Step 5: Thermal resistance and temperature profile
$$R_{sph} = \frac{T_i - T_o}{q} = \frac{r_o - r_i}{4\pi k\,r_ir_o}$$
Integrating from $r_i$ to a general $r$:
$$\frac{T(r) - T_i}{T_o - T_i} = \frac{1/r_i - 1/r}{1/r_i - 1/r_o}$$
The profile is hyperbolic in $r$ (not linear as in a plane wall), because the area grows as $r^2$ and the gradient must fall as $1/r^2$.

### Step 6: Checks
- Thin shell, $r_o - r_i = t \ll r_i$: $4\pi r_ir_o \to A$ and $q \to kA(T_i - T_o)/t$, the plane-wall result.
- The result can be written as $q = kA_{gm}(T_i - T_o)/(r_o - r_i)$ with the geometric-mean area $A_{gm} = 4\pi r_ir_o = \sqrt{A_iA_o}$.`,
          answer: String.raw`$q = 4\pi k\,r_ir_o(T_i - T_o)/(r_o - r_i)$; $R_{sph} = (r_o - r_i)/(4\pi k r_ir_o)$; $T(r)$ hyperbolic: $(T - T_i)/(T_o - T_i) = (1/r_i - 1/r)/(1/r_i - 1/r_o)$.` },
        { id: "2024-25-Q2b", label: "(b)", marks: "10+10",
          topic: "conduction", sub: "Spherical reactor: heat loss and effect of 20 mm insulation",
          type: "numerical", syllabus: "in", repeats: ["2013-14-Q5b"],
          text: String.raw`A spherical vessel used as a reactor for producing pharmaceuticals has a 10-mm-thick stainless-steel wall ($k = 17$ W/m·K) and an inner diameter of 1 m. The exterior surface of the vessel is exposed to ambient air ($T = 25$°C) for which a convection coefficient of 6 W/m²·K may be assumed.

(i) During steady-state operation, an inner surface temperature of 50°C is maintained by energy generated within the reactor. What is the heat loss from the vessel? **[10]**

(ii) If a 20-mm-thick layer of fiberglass insulation ($k = 0.040$ W/m·K) is applied to the exterior of the vessel and the rate of thermal energy generation is unchanged, what is the inner surface temperature of the vessel? **[10]**`,
          solution: String.raw`**Given:** $r_1 = 0.50$ m, $r_2 = 0.51$ m, $k_s = 17$ W/m·K; $h = 6$ W/m²·K, $T_\infty = 25^\circ$C, $T_{s,i} = 50^\circ$C; insulation 20 mm, so $r_3 = 0.53$ m, $k_{ins} = 0.040$ W/m·K.

**Find:** (i) $q$; (ii) the new inner surface temperature for the same $q$.

**Assumptions:** steady, 1-D radial conduction; constant $k$; radiation neglected; no contact resistance between steel and insulation.

1. **Steel wall resistance (Q2a result):**
$$R_{wall} = \frac{1}{4\pi k_s}\left(\frac{1}{r_1} - \frac{1}{r_2}\right) = \frac{1}{4\pi(17)}\left(\frac{1}{0.50} - \frac{1}{0.51}\right) = 1.836\times10^{-4}\ \mathrm{K/W}$$

![Spherical reactor wall, the 20 mm fibreglass layer and the series circuit](fig/2024-25-Q2b.svg)

2. **Outside convection resistance (bare vessel):**
$$R_{conv} = \frac{1}{h\,4\pi r_2^2} = \frac{1}{6 \times 4\pi \times 0.51^2} = 0.05099\ \mathrm{K/W}$$

3. **(i) Heat loss:**
$$q = \frac{T_{s,i} - T_\infty}{R_{wall} + R_{conv}} = \frac{50 - 25}{0.05118} = 488.5\ \mathrm{W}$$
The steel wall carries only 0.4% of the total resistance; the air film controls.

4. **Critical-radius check:** for a sphere $r_{cr} = 2k_{ins}/h = 2(0.040)/6 = 0.0133$ m, far smaller than $r_2 = 0.51$ m. Adding insulation therefore always *increases* the total resistance.

5. **Insulation resistance:**
$$R_{ins} = \frac{1}{4\pi k_{ins}}\left(\frac{1}{r_2} - \frac{1}{r_3}\right) = \frac{1}{4\pi(0.040)}\left(\frac{1}{0.51} - \frac{1}{0.53}\right) = 0.1472\ \mathrm{K/W}$$

6. **New outside convection resistance (larger outer area):**
$$R'_{conv} = \frac{1}{6 \times 4\pi \times 0.53^2} = 0.04722\ \mathrm{K/W}$$

7. **Total resistance:**
$$R_{tot} = 1.836\times10^{-4} + 0.1472 + 0.04722 = 0.1946\ \mathrm{K/W}$$

8. **(ii) Inner surface temperature.** The generation is unchanged, so at steady state the same $q = 488.5$ W must leave:
$$T_{s,i} = T_\infty + qR_{tot} = 25 + 488.5 \times 0.1946 = 120.1^\circ\mathrm{C}$$
(The steel/insulation interface is at ≈ 120.0°C and the insulation's outer surface at $25 + 488.5 \times 0.04722 = 48.1^\circ$C.)

**Why it matters:** the same heat must escape through a resistance ≈ 3.8 times larger, so the reactor contents heat up by about 70°C. If the process must stay at 50°C, the insulation would cut the heat loss to $25/0.1946 = 128$ W, and the generation (or a cooling duty) must be adjusted.`,
          answer: String.raw`(i) $q \approx 489$ W ($R_{tot} = 0.0512$ K/W); (ii) with 20 mm fibreglass $R_{tot} = 0.195$ K/W, so the inner surface rises to ≈ 120°C.` },
      ] },

    { id: "2024-25-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q3a", label: "(a)", marks: "9+6",
          topic: "insulation", sub: "Critical radius of a cylinder; what to do if r < r_c",
          type: "derivation", syllabus: "in", repeats: ["2014-15-Q2a", "2015-16-Q6a", "2016-17-Q6a", "2017-18-Q5b", "2020-21-Q8a", "practice-insulation-P1"],
          text: String.raw`Derive the equation for critical radius of insulation in a cylinder system. What would you do to reduce heat loss if the bare pipe radius is smaller than the critical radius of insulation? Explain your answer with a schematic of heat loss vs. radius.`,
          solution: String.raw`**Assumptions:** steady, 1-D radial conduction; insulation conductivity $k$ constant; pipe outer surface at $T_i$ (radius $r_i$); outer surface of the insulation loses heat by convection to $T_\infty$ with a constant $h$ (independent of $r_o$); pipe length $L$; radiation neglected or lumped into $h$.

### Step 1: Heat loss through the insulation and the outside film
The two resistances are in series:
$$q = \frac{T_i - T_\infty}{R_{ins} + R_{conv}} = \frac{T_i - T_\infty}{\dfrac{\ln(r_o/r_i)}{2\pi kL} + \dfrac{1}{2\pi r_oLh}}$$
As $r_o$ increases, $R_{ins}$ grows (as $\ln r_o$) while $R_{conv}$ falls (as $1/r_o$, because the outer area grows). So $q(r_o)$ may have an extremum.

### Step 2: Set the derivative to zero
$q$ is extreme where $R_{tot}$ is extreme:
$$\frac{dR_{tot}}{dr_o} = \frac{1}{2\pi kLr_o} - \frac{1}{2\pi Lhr_o^2} = 0$$
$$\boxed{r_c = \frac{k}{h}}$$

### Step 3: Maximum or minimum?
$$\frac{d^2R_{tot}}{dr_o^2} = \frac{1}{2\pi L}\left(-\frac{1}{kr_o^2} + \frac{2}{hr_o^3}\right)_{r_o = k/h} = \frac{1}{2\pi L}\frac{h^2}{k^3} > 0$$
$R_{tot}$ is a **minimum**, so the heat loss is a **maximum** at $r_o = r_c$. The critical radius is the outer radius of maximum heat loss.

### Step 4: Schematic of heat loss vs radius
![Heat loss versus outer radius: maximum at the critical radius r_c = k/h](fig/common-critical-radius.svg)

Horizontal axis: outer radius $r_o$ (starting at $r_i$); vertical axis: heat loss $q$.
- If $r_i < r_c$: $q$ rises from the bare-pipe value $q_{bare}$, peaks at $r_o = r_c$, then falls. It drops back to $q_{bare}$ only at some larger radius $r^*$, and only beyond $r^*$ does the insulation actually save heat.
- If $r_i \ge r_c$: $q$ falls from the first layer onward, so any insulation helps.

### Step 5: What to do when $r_i < r_c$ (small pipes, wires, low $h$)
- A thin layer of that insulation **increases** the loss, so do not stop at a thin layer.
- **Choose an insulating material with a lower $k$**, so that $r_c = k/h$ becomes smaller than $r_i$. Then every thickness reduces the loss (best solution).
- Or apply a thickness large enough that $r_o > r^*$, so that $q < q_{bare}$ (a lot of material is needed).
- Note the reverse use: for electric cables and wires, insulating up to $r_c$ is done deliberately to *increase* heat dissipation and keep the conductor cool.
- Typical numbers: $k = 0.05$ W/m·K, $h = 10$ W/m²·K gives $r_c = 5$ mm, so only very small tubes are affected.

(For a sphere the same analysis gives $r_c = 2k/h$.)`,
          answer: String.raw`$r_c = k/h$ (maximum heat loss, since $d^2R/dr_o^2 > 0$). If $r_i < r_c$: use a lower-k insulation so $r_c < r_i$, or insulate well beyond $r^*$ where $q$ falls below the bare-pipe loss; a thin layer would increase the loss.` },
        { id: "2024-25-Q3b", label: "(b)", marks: "14+6",
          topic: "conduction", sub: "Contact resistance: two slabs with a partly air-filled gap",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Two slabs, each 120 mm thick, have thermal conductivities of 14.5 W/m°C and 210 W/m°C. These are placed in contact, but due to roughness, only 30 percent of area is in contact and the gap in the remaining area is 0.025 mm thick and is filled with air. Half of the contact area is made of each slab material as shown in the figure. If the temperature of the face of the hot surface is at 220°C and the outside side surface of other slab is at 30°C, determine

(i) heat flow through the composite system; **[14]**

(ii) the temperature drop across the surface. **[6]**

Assume that the conductivity of air is 0.032 W/m°C. You must show the resistance circuit for the system.

*[Figure: slab A ($L_A = 120$ mm, $k_A = 14.5$) at $t_1 = 220$°C on the left and slab B ($L_B = 120$ mm, $k_B = 210$) at $t_2 = 30$°C on the right. Between them a contact zone $L_{A1} = L_{B1} = L_C = 0.025$ mm thick: 15% of the area is slab-A material (A), 70% is the air gap (C), and 15% is slab-B material (B).]*`,
          solution: String.raw`**Given:** $L_A = L_B = 0.12$ m, $k_A = 14.5$, $k_B = 210$, $k_{air} = 0.032$ W/m·°C; contact zone thickness $L_c = 0.025\times10^{-3}$ m with area fractions 0.15 (A), 0.15 (B), 0.70 (air); $t_1 = 220^\circ$C, $t_2 = 30^\circ$C.

**Find:** (i) $q$; (ii) the temperature drop across the contact zone.

**Assumptions:** steady, 1-D conduction; the area is not given, so everything is per 1 m² of face area; radiation across the 0.025 mm gap and convection in it are negligible; the contact zone is added to the two 120 mm slabs.

1. **Resistance circuit:** $R_A$ (slab A) in series with the contact zone, which is three parallel paths ($R_{A1}$ solid A, $R_C$ air, $R_{B1}$ solid B), in series with $R_B$ (slab B):
$$t_1 \;-\; R_A \;-\; \left[R_{A1}\,\|\,R_C\,\|\,R_{B1}\right] \;-\; R_B \;-\; t_2$$

![Two slabs with the contact zone (enlarged) and the series–parallel resistance circuit](fig/2024-25-Q3b.svg)

2. **Slab resistances** ($R = L/kA$, $A = 1$ m²):
$$R_A = \frac{0.12}{14.5} = 8.276\times10^{-3}\ \mathrm{K/W},\qquad R_B = \frac{0.12}{210} = 5.714\times10^{-4}\ \mathrm{K/W}$$

3. **Contact-zone paths:**
$$R_{A1} = \frac{L_c}{k_A(0.15)} = \frac{0.025\times10^{-3}}{14.5 \times 0.15} = 1.149\times10^{-5}\ \mathrm{K/W}$$
$$R_{B1} = \frac{0.025\times10^{-3}}{210 \times 0.15} = 7.937\times10^{-7}\ \mathrm{K/W}$$
$$R_C = \frac{0.025\times10^{-3}}{0.032 \times 0.70} = 1.116\times10^{-3}\ \mathrm{K/W}$$

4. **Parallel combination (contact resistance):**
$$\frac{1}{R_{cont}} = \frac{1}{1.149\times10^{-5}} + \frac{1}{7.937\times10^{-7}} + \frac{1}{1.116\times10^{-3}} = 87{,}000 + 1{,}260{,}000 + 896 = 1.348\times10^{6}$$
$$R_{cont} = 7.419\times10^{-7}\ \mathrm{K/W}$$
About 93% of the heat crosses through the B-metal contact spots, 6.5% through the A spots and only 0.07% through the air.

5. **Total resistance:**
$$R_{tot} = R_A + R_{cont} + R_B = 8.276\times10^{-3} + 7.42\times10^{-7} + 5.714\times10^{-4} = 8.848\times10^{-3}\ \mathrm{K/W}$$

6. **(i) Heat flow:**
$$q = \frac{t_1 - t_2}{R_{tot}} = \frac{220 - 30}{8.848\times10^{-3}} = 2.147\times10^{4}\ \mathrm{W\ per\ m^2}$$

7. **(ii) Temperature drop across the contact surface:**
$$\Delta t_{cont} = qR_{cont} = 21{,}474 \times 7.419\times10^{-7} = 0.016^\circ\mathrm{C}$$
For comparison: drop across slab A $= 21{,}474 \times 8.276\times10^{-3} = 177.7^\circ$C, across slab B $= 12.3^\circ$C. The contact faces are at ≈ 42.29°C and 42.27°C.

**Why it matters:** the contact resistance is tiny here because the metal spots (especially the high-k slab B) short-circuit the air gap. If the gap were all air, $R$ would be $0.025\times10^{-3}/0.032 = 7.8\times10^{-4}$ K/W, about 1000 times larger.`,
          answer: String.raw`Circuit: $R_A$ + ($R_{A1}\|R_C\|R_{B1}$) + $R_B$; $R_{tot} = 8.85\times10^{-3}$ K/W per m². (i) $q \approx 2.15\times10^4$ W/m²; (ii) drop across the contact zone ≈ 0.016°C ($R_{cont} = 7.4\times10^{-7}$ K/W).` },
      ] },

    { id: "2024-25-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q4a", label: "(a)", marks: "14",
          topic: "boundary-layer", sub: "Reynolds–Colburn analogy from the cubic profile",
          type: "derivation", syllabus: "in", repeats: ["2011-12-Q7a", "2014-15-Q3a", "2015-16-Q8a", "2016-17-Q8a", "2017-18-Q8a", "2020-21-Q7a", "2022-23-Q3a", "practice-boundary-layer-P6"],
          text: String.raw`Consider a fluid flowing past a rough flat plate where the friction coefficient is $C_f$. The velocity distribution and the laminar boundary layer thickness for the fluid can be expressed by the following equations, respectively

$$\frac{u}{u_\infty} = \frac{3}{2}\frac{y}{\delta} - \frac{1}{2}\left(\frac{y}{\delta}\right)^3,\qquad \delta = 4.64\sqrt{\frac{\nu x}{u_\infty}}$$

where $u_\infty$ is the fluid velocity outside the boundary layer. Other symbols have their usual meanings. Derive a relation between fluid friction and heat transfer for laminar flow on a flat plate that is also known as Reynolds–Colburn analogy.`,
          solution: String.raw`![Velocity and thermal boundary layers on a flat plate](fig/common-bl-flat-plate.svg)

**Assumptions:** steady, incompressible, laminar 2-D flow; constant properties; zero pressure gradient; negligible viscous dissipation; plate at uniform $T_w$, heated from the leading edge; $\delta_t \le \delta$ ($\mathrm{Pr} \gtrsim 0.7$).

### Step 1: Friction coefficient from the velocity profile
$$\tau_w = \mu\left.\frac{\partial u}{\partial y}\right|_{y=0} = \mu\,\frac{3u_\infty}{2\delta}$$
$$C_{fx} = \frac{\tau_w}{\tfrac12\rho u_\infty^2} = \frac{3\nu}{u_\infty\delta} = \frac{3\nu}{u_\infty \times 4.64\sqrt{\nu x/u_\infty}} = \frac{3}{4.64}\left(\frac{\nu}{u_\infty x}\right)^{1/2}$$
$$\boxed{\frac{C_{fx}}{2} = 0.323\,\mathrm{Re}_x^{-1/2}}$$

### Step 2: Temperature profile
Let $\theta = T - T_w$ and $\theta_\infty = T_\infty - T_w$. Assume a cubic $\theta = a + by + cy^2 + dy^3$ with:
- $y = 0$: $\theta = 0$;
- $y = 0$: $\partial^2\theta/\partial y^2 = 0$ (energy equation with $u = v = 0$ at the wall);
- $y = \delta_t$: $\theta = \theta_\infty$ and $\partial\theta/\partial y = 0$.

These give the same shape as the velocity profile:
$$\frac{\theta}{\theta_\infty} = \frac{3}{2}\frac{y}{\delta_t} - \frac{1}{2}\left(\frac{y}{\delta_t}\right)^3$$

### Step 3: Integral energy equation
$$\frac{d}{dx}\int_0^{\delta_t}(\theta_\infty - \theta)\,u\,dy = \alpha\left.\frac{\partial\theta}{\partial y}\right|_0$$
Substitute both profiles with $\zeta = \delta_t/\delta < 1$:
$$\int_0^{\delta_t}(\theta_\infty - \theta)u\,dy = \theta_\infty u_\infty\delta\left(\frac{3}{20}\zeta^2 - \frac{3}{280}\zeta^4\right) \approx \frac{3}{20}\theta_\infty u_\infty\delta\zeta^2$$
$$\alpha\left.\frac{\partial\theta}{\partial y}\right|_0 = \frac{3\alpha\theta_\infty}{2\zeta\delta}$$
Hence
$$\frac{1}{10}u_\infty\left[\zeta^3\delta\frac{d\delta}{dx} + 2\delta^2\zeta^2\frac{d\zeta}{dx}\right] = \alpha$$

### Step 4: Use the given δ(x)
$$\delta^2 = 21.53\frac{\nu x}{u_\infty},\qquad \delta\frac{d\delta}{dx} = 10.76\frac{\nu}{u_\infty}$$
$$\zeta^3 + 4x\zeta^2\frac{d\zeta}{dx} = \frac{13}{14}\frac{\alpha}{\nu}$$
For a plate heated from the leading edge $\zeta$ is constant ($d\zeta/dx = 0$):
$$\zeta = \frac{\delta_t}{\delta} = \left(\frac{13}{14}\right)^{1/3}\mathrm{Pr}^{-1/3} = \frac{1}{1.026}\mathrm{Pr}^{-1/3}$$

### Step 5: Local heat transfer coefficient
$$h_x = \frac{-k(\partial T/\partial y)_0}{T_w - T_\infty} = \frac{3k}{2\delta_t} = \frac{3k}{2\zeta\delta}$$
$$\mathrm{Nu}_x = \frac{h_xx}{k} = \frac{3}{2}\cdot\frac{1.026\,\mathrm{Pr}^{1/3}\,x}{4.64\sqrt{\nu x/u_\infty}} = 0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$$

### Step 6: Stanton number and the analogy
$$\mathrm{St}_x = \frac{h_x}{\rho c_pu_\infty} = \frac{\mathrm{Nu}_x}{\mathrm{Re}_x\mathrm{Pr}} = 0.332\,\mathrm{Re}_x^{-1/2}\mathrm{Pr}^{-2/3}$$
$$\mathrm{St}_x\,\mathrm{Pr}^{2/3} = 0.332\,\mathrm{Re}_x^{-1/2}$$
Step 1 gives $C_{fx}/2 = 0.323\,\mathrm{Re}_x^{-1/2}$ (exact Blasius value 0.332; the cubic profile is within 3%). Therefore
$$\boxed{\mathrm{St}_x\,\mathrm{Pr}^{2/3} = \frac{C_{fx}}{2}}\qquad\text{(Reynolds–Colburn analogy)}$$
The same relation holds for the plate averages: $\overline{\mathrm{St}}\,\mathrm{Pr}^{2/3} = \bar C_f/2$.

**Meaning:** the heat transfer coefficient follows from a measured friction (drag) coefficient alone, $h = \rho c_pu_\infty(C_f/2)\mathrm{Pr}^{-2/3}$. That is why the question starts from a known $C_f$ for the rough plate. Valid for $0.6 < \mathrm{Pr} < 60$ without form drag; for Pr = 1 it reduces to Reynolds' analogy $\mathrm{St} = C_f/2$.`,
          answer: String.raw`$C_{fx}/2 = 0.323\,\mathrm{Re}_x^{-1/2}$ (Blasius 0.332); $\delta_t/\delta = \mathrm{Pr}^{-1/3}/1.026$; $\mathrm{Nu}_x = 0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$, hence $\mathrm{St}_x\mathrm{Pr}^{2/3} = C_{fx}/2$.` },
        { id: "2024-25-Q4b", label: "(b)", marks: "8",
          topic: "boundary-layer", sub: "Maximum boundary-layer thickness on a 15 cm plate",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Air at 1 atm and 300 K flows over a 15-cm-square plate at a velocity of 10 m/s. Calculate the maximum boundary layer thickness.`,
          solution: String.raw`**Given:** air, 1 atm, $T_\infty = 300$ K (26.85°C), $u_\infty = 10$ m/s, plate length in the flow direction $L = 0.15$ m.

**Find:** $\delta_{max}$.

**Assumptions:** smooth flat plate at zero incidence; transition at $\mathrm{Re}_{cr} = 5\times10^5$; isothermal flow (properties at 300 K).

1. **Property:** Çengel Table A-15, interpolated between 25°C and 30°C: $\nu = 1.562\times10^{-5} + 0.37(1.608 - 1.562)\times10^{-5} = 1.579\times10^{-5}$ m²/s (Holman gives 1.569×10⁻⁵ at 300 K; the difference is negligible).

2. **Where is δ maximum?** δ grows with $x$, so the maximum is at the trailing edge, $x = L = 0.15$ m.

3. **Flow regime:**
$$\mathrm{Re}_L = \frac{u_\infty L}{\nu} = \frac{10 \times 0.15}{1.579\times10^{-5}} = 9.50\times10^{4} < 5\times10^5$$
The boundary layer is laminar over the whole plate.

4. **Laminar thickness (integral method, slides):**
$$\delta = \frac{4.64\,x}{\sqrt{\mathrm{Re}_x}} = \frac{4.64 \times 0.15}{\sqrt{9.50\times10^4}} = 2.26\times10^{-3}\ \mathrm{m}$$

5. **Result:** $\delta_{max} \approx 2.26$ mm at the trailing edge. (The exact Blasius solution, $\delta = 5.0x/\sqrt{\mathrm{Re}_x}$, gives 2.43 mm.)

**Exam tip:** always check Re at the trailing edge first; if it exceeded $5\times10^5$ the maximum would be a turbulent thickness, $\delta = 0.381x\,\mathrm{Re}_x^{-1/5}$.`,
          answer: String.raw`$\nu = 1.58\times10^{-5}$ m²/s, $\mathrm{Re}_L = 9.5\times10^4$ (laminar), $\delta_{max} = 4.64L/\sqrt{\mathrm{Re}_L} \approx 2.26$ mm at the trailing edge.` },
        { id: "2024-25-Q4c", label: "(c)", marks: "13",
          topic: "forced-convection", sub: "Turbulent water heating, constant flux: tube length (Dittus–Boelter)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Water flows inside a smooth tube at a mean flow velocity of 3.0 m/s. The tube diameter is 25 mm and a constant heat flux condition is maintained at the tube wall such that the tube temperature is always 20°C above the water temperature. The water enters the tube at 30°C and leaves at 50°C. Calculate the tube length necessary to accomplish the indicated heating.`,
          solution: String.raw`**Given:** $u_m = 3.0$ m/s, $D = 0.025$ m, $T_{b,in} = 30^\circ$C, $T_{b,out} = 50^\circ$C, $T_w - T_b = 20^\circ$C everywhere (constant flux).

**Find:** the tube length $L$.

**Assumptions:** steady; fully developed turbulent flow over most of the length (checked below); properties at the mean bulk temperature; smooth tube.

1. **Properties** at $T_b = (30 + 50)/2 = 40^\circ$C (Çengel Table A-9): $\rho = 992.1$ kg/m³, $c_p = 4179$ J/kg·K, $k = 0.631$ W/m·K, $\mu = 0.653\times10^{-3}$ kg/m·s, $\mathrm{Pr} = 4.32$.

2. **Reynolds number:**
$$\mathrm{Re} = \frac{\rho u_mD}{\mu} = \frac{992.1 \times 3.0 \times 0.025}{0.653\times10^{-3}} = 1.139\times10^{5}\quad(\text{turbulent})$$

3. **Nusselt number** (Dittus–Boelter, heating, $n = 0.4$; valid for $\mathrm{Re} > 10^4$, $0.6 < \mathrm{Pr} < 160$, $L/D > 10$):
$$\mathrm{Nu} = 0.023\,\mathrm{Re}^{0.8}\mathrm{Pr}^{0.4} = 0.023\,(1.139\times10^5)^{0.8}(4.32)^{0.4} = 458.4$$

4. **Heat transfer coefficient:**
$$h = \frac{\mathrm{Nu}\,k}{D} = \frac{458.4 \times 0.631}{0.025} = 11{,}570\ \mathrm{W/m^2K}$$

5. **Mass flow rate and heat duty:**
$$\dot m = \rho u_m\frac{\pi D^2}{4} = 992.1 \times 3.0 \times \frac{\pi(0.025)^2}{4} = 1.461\ \mathrm{kg/s}$$
$$Q = \dot mc_p(T_{b,out} - T_{b,in}) = 1.461 \times 4179 \times 20 = 1.221\times10^{5}\ \mathrm{W}$$

6. **Tube length** from $Q = h(\pi DL)(T_w - T_b)$:
$$L = \frac{Q}{h\pi D(T_w - T_b)} = \frac{1.221\times10^5}{11{,}570 \times \pi \times 0.025 \times 20} = 6.72\ \mathrm{m}$$

7. **Checks:** $L/D = 6.72/0.025 = 269 > 60$, so the entrance effect is negligible and the fully developed correlation is justified. Wall heat flux $q'' = h\,\Delta T = 11{,}570 \times 20 = 2.31\times10^5$ W/m²; the wall temperature rises from 50°C at the inlet to 70°C at the exit.`,
          answer: String.raw`Re = 1.14×10⁵, Nu = 458 (Dittus–Boelter), h ≈ 11,570 W/m²K; Q = 122 kW; L = Q/(hπDΔT) ≈ 6.7 m (L/D ≈ 270).` },
      ] },

    { id: "2024-25-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q5a", label: "(a)", marks: "10",
          topic: "shell-tube", sub: "TEMA AES component naming",
          type: "theory", syllabus: "in", repeats: ["2016-17-Q1a"],
          text: String.raw`Identify the following labeled sections of a shell and tube heat exchanger from Figure 5(a): 5, 6, 9, 12, 15, 28, 29, 31, 33, 40.

![Figure 5(a): TEMA type AES shell-and-tube exchanger with numbered parts; the parts asked are shown in gold](fig/2024-25-Q5a.svg)`,
          solution: String.raw`The figure is the standard TEMA nomenclature drawing of an **AES** exchanger: front head **A** (channel with removable cover), shell **E** (one-pass shell), rear head **S** (floating head with backing device). The numbers are the TEMA part numbers.

| No. | Part | Function |
|---|---|---|
| 5 | Stationary head nozzle (channel nozzle) | tube-side fluid inlet/outlet |
| 6 | Stationary tubesheet | holds the tube ends at the channel end; separates the tube-side and shell-side fluids |
| 9 | Shell cover | closes the shell over the floating head at the rear end |
| 12 | Shell nozzle | shell-side fluid inlet/outlet |
| 15 | Floating tubesheet | holds the other tube ends; free to move, so the bundle can expand |
| 28 | Transverse baffles or support plates | direct the shell fluid across the tubes (raise $h_o$) and support the tubes |
| 29 | Impingement plate (baffle) | under the shell inlet nozzle; protects the tubes from erosion by the entering jet |
| 31 | Pass partition | divides the channel so the tube fluid makes two (or more) passes |
| 33 | Drain connection | drains the shell (or floating-head cover) |
| 40 | Floating-head support | plate that supports the bundle near the floating head (TEMA item 40) |

Other numbers in the figure: 1 channel, 3 channel flange, 4 channel cover, 7 tubes, 8 shell, 10/11 shell flanges, 13 shell cover flange, 16 floating head cover, 17 its flange, 18 floating head backing device, 27 tie rods and spacers, 32 vent, 34 instrument connection, 35 support saddle, 36 lifting lug.

**Exam tip:** learn the parts in flow order. Tube side: nozzle 5 → channel (split by pass partition 31) → stationary tubesheet 6 → tubes → floating tubesheet 15 → floating head cover → back. Shell side: nozzle 12 → impingement plate 29 → baffles 28 → outlet nozzle 12.`,
          answer: String.raw`5 stationary-head (channel) nozzle, 6 stationary tubesheet, 9 shell cover, 12 shell nozzle, 15 floating tubesheet, 28 transverse baffles/support plates, 29 impingement plate, 31 pass partition, 33 drain connection, 40 floating-head support.` },
        { id: "2024-25-Q5b", label: "(b)", marks: "5+15+5",
          topic: "shell-tube", sub: "Ammonia gas cooler (1-8): LMTD, h_i, h_o and dirt factor",
          type: "numerical", syllabus: "in", repeats: ["2023-24-Q2a", "2023-24-Q2b", "2023-24-Q2c"],
          text: String.raw`Dry ammonia gas at 83 psia and at a rate of 9872 lb/hr is discharged from a compressor at 245°F and is to be fed to a reactor at 95°F using cooling water from 85°F to 95°F. Available for the service is a 23¼ in. ID 1-8 exchanger having 364 ¾ in., 16 BWG tubes 8′0″ long and laid out on 15/16 in. triangular pitch. The bundle is arranged for eight passes, and baffles are spaced 12 in. apart.

Viscosities at caloric temperature of ammonia and water are 0.012 cP and 0.82 cP, respectively. Thermal conductivity and specific heat capacity of ammonia are 0.017 Btu/(hr)(ft²)(°F/ft) and 0.53 Btu/(lb)(°F), respectively.

(i) Draw the temperature profile along the heat exchanger length, and find the log mean temperature difference. **[5]**

(ii) Determine the tube side and shell side heat transfer coefficients, $h_i$ and $h_o$, respectively. **[15]**

(iii) Perform all the necessary calculations and check if the exchanger is suitable for use using only dirt factor. **[5]**`,
          solution: String.raw`**Given:** ammonia (shell) $T_1 = 245 \to T_2 = 95^\circ$F, $W = 9872$ lb/h, $c = 0.53$, $k = 0.017$, $\mu = 0.012$ cP; water (tubes) $t_1 = 85 \to t_2 = 95^\circ$F, $\mu = 0.82$ cP. Shell ID 23.25 in, 1 shell pass, 8 tube passes, $N_t = 364$, ¾ in OD 16 BWG (ID 0.620 in, $a'_t = 0.302$ in², $a'' = 0.1963$ ft²/ft, Kern Table 10), $L = 8$ ft, $P_T = 15/16$ in triangular, $C' = 0.1875$ in, $B = 12$ in.

**Find:** (i) profile, LMTD and $\Delta t$; (ii) $h_i$ ($h_{io}$) and $h_o$; (iii) $U_C$, $U_D$, $R_d$ and suitability.

**Assumptions:** water $c = 1.0$ Btu/lb·°F and $k = 0.36$ Btu/h·ft·°F at 90°F (Kern Table 4; not given in the paper); $\phi = (\mu/\mu_w)^{0.14} = 1$ on both sides; arithmetic caloric temperatures ($T_c = 170^\circ$F, $t_c = 90^\circ$F; the Kc–Fc chart is for petroleum fractions); μ (lb/ft·h) = 2.42 × cP; no heat loss.

1. **(i) Temperature profile (sketch):** T (°F) vertical, length horizontal. The ammonia curve falls steeply from 245°F to 95°F (dry gas, sensible cooling only, no condensation). The water line is nearly flat, rising from 85°F to 95°F, and zig-zags between the passes. Hot outlet = cold outlet = 95°F, with only a 10°F approach at the cold end.

![1-8 gas cooler: ammonia falls from 245°F to 95°F, water zig-zags from 85°F to 95°F](fig/2024-25-Q5b-sol.svg)

2. **Heat balance:**
$$Q = WC(T_1 - T_2) = 9872 \times 0.53 \times 150 = 784{,}800\ \mathrm{Btu/h}$$
$$w = \frac{Q}{c(t_2 - t_1)} = \frac{784{,}800}{1.0 \times 10} = 78{,}480\ \mathrm{lb/h\ water}$$

3. **LMTD (counterflow):** $\Delta t_h = 245 - 95 = 150^\circ$F, $\Delta t_c = 95 - 85 = 10^\circ$F:
$$\mathrm{LMTD} = \frac{150 - 10}{\ln(150/10)} = 51.7^\circ\mathrm{F}$$

4. **F_T for 1 shell pass, even tube passes (1-2 chart):**
$$R = \frac{T_1 - T_2}{t_2 - t_1} = \frac{150}{10} = 15,\qquad S = \frac{t_2 - t_1}{T_1 - t_1} = \frac{10}{160} = 0.0625$$
$$F_T = \frac{\sqrt{R^2+1}\,\ln\dfrac{1-S}{1-RS}}{(R-1)\ln\dfrac{2 - S(R+1-\sqrt{R^2+1})}{2 - S(R+1+\sqrt{R^2+1})}} = 0.838$$

![How to read F_T from the 1-2 chart: S = 0.0625 → R = 15 curve → F_T ≈ 0.838](fig/2024-25-Q5b-read.svg)

$$\Delta t = F_T \times \mathrm{LMTD} = 0.838 \times 51.7 = 43.3^\circ\mathrm{F}\quad(F_T > 0.75,\ \text{acceptable})$$

5. **(ii) Shell side (ammonia), flow area and mass velocity:**
$$a_s = \frac{\mathrm{ID} \times C'B}{144\,P_T} = \frac{23.25 \times 0.1875 \times 12}{144 \times 0.9375} = 0.3875\ \mathrm{ft^2},\qquad G_s = \frac{9872}{0.3875} = 25{,}480\ \mathrm{lb/h\,ft^2}$$

6. **Shell-side Reynolds number:** $D_e = 0.55$ in $= 0.0458$ ft (Kern Fig. 28 table for ¾ in on 15/16 in triangular pitch); $\mu = 0.012 \times 2.42 = 0.0290$ lb/ft·h:
$$\mathrm{Re}_s = \frac{D_eG_s}{\mu} = \frac{0.0458 \times 25{,}480}{0.0290} = 40{,}200$$

7. **Shell-side j_H:** Kern Fig. 28 fit $j_H = 0.36\,\mathrm{Re}^{0.55} = 0.36(40{,}200)^{0.55} = 123$.

![How to read Kern Fig. 28: D_e = 0.55 in from the table; Re_s = 4.02×10⁴ → shell-side curve → j_H ≈ 123](fig/2024-25-Q5b-read2.svg)

8. **Shell-side coefficient:**
$$\left(\frac{c\mu}{k}\right)^{1/3} = \left(\frac{0.53 \times 0.0290}{0.017}\right)^{1/3} = 0.967$$
$$h_o = j_H\frac{k}{D_e}\left(\frac{c\mu}{k}\right)^{1/3}\phi_s = 123 \times \frac{0.017}{0.0458} \times 0.967 = 44.0\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

9. **Tube side (water), flow area, mass velocity and velocity:**
$$a_t = \frac{N_ta'_t}{144\,n} = \frac{364 \times 0.302}{144 \times 8} = 0.0954\ \mathrm{ft^2},\qquad G_t = \frac{78{,}480}{0.0954} = 822{,}500\ \mathrm{lb/h\,ft^2}$$
$$V = \frac{G_t}{3600 \times 62.5} = 3.66\ \mathrm{ft/s}\quad(\text{good, 3–8 fps})$$

10. **Tube-side Reynolds number:** $D = 0.620/12 = 0.0517$ ft, $\mu = 0.82 \times 2.42 = 1.984$ lb/ft·h:
$$\mathrm{Re}_t = \frac{DG_t}{\mu} = \frac{0.0517 \times 822{,}500}{1.984} = 21{,}400,\qquad L/D = \frac{8}{0.0517} = 155$$

11. **Tube-side j_H:** Kern Fig. 24 gives $j_H \approx 70$ (the fit $0.027\,\mathrm{Re}^{0.8}$ would give 79; the chart reading is used).

![How to read j_H from Kern Fig. 24: Re = 2.14×10⁴ → L/D = 155 curve → j_H ≈ 70](fig/2024-25-Q5b-read3.svg)

12. **Tube-side coefficient:**
$$\left(\frac{c\mu}{k}\right)^{1/3} = \left(\frac{1.0 \times 1.984}{0.36}\right)^{1/3} = 1.766$$
$$h_i = j_H\frac{k}{D}\left(\frac{c\mu}{k}\right)^{1/3} = 70 \times \frac{0.36}{0.0517} \times 1.766 = 862\ \mathrm{Btu/h\,ft^2\,^\circ F}$$
$$h_{io} = h_i\frac{\mathrm{ID}}{\mathrm{OD}} = 862 \times \frac{0.620}{0.75} = 712\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

13. **(iii) Clean overall coefficient:**
$$U_C = \frac{h_{io}h_o}{h_{io} + h_o} = \frac{712 \times 44.0}{712 + 44.0} = 41.4\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

14. **Design overall coefficient:**
$$A = N_ta''L = 364 \times 0.1963 \times 8 = 571.6\ \mathrm{ft^2}$$
$$U_D = \frac{Q}{A\,\Delta t} = \frac{784{,}800}{571.6 \times 43.3} = 31.7\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

15. **Dirt factor and verdict:**
$$R_d = \frac{U_C - U_D}{U_CU_D} = \frac{41.4 - 31.7}{41.4 \times 31.7} = 0.0074\ \mathrm{h\,ft^2\,^\circ F/Btu}$$
Required: dry ammonia vapour ≈ 0.001 plus treated cooling water (< 125°F) ≈ 0.001–0.002, so $R_{d,req} \approx 0.003$. Since $R_{d,calc} = 0.0074 > 0.003$, **the exchanger is suitable** (over-surface $(U_C - U_D)/U_C \approx 24\%$).

**Why it matters:** the gas film ($h_o \approx 44$) is 16 times weaker than $h_{io}$ and controls $U$. Putting the low-density gas in the shell gives it a large flow area and a low pressure drop.`,
          answer: String.raw`(i) Q = 7.85×10⁵ Btu/h, water 78,480 lb/h; LMTD = 51.7°F, F_T = 0.838, Δt = 43.3°F. (ii) Shell: Re = 40,200, j_H ≈ 123, $h_o \approx 44$; tube: Re = 21,400, j_H ≈ 70, $h_i \approx 862$ ($h_{io} \approx 712$) Btu/h·ft²·°F. (iii) $U_C = 41.4$, $U_D = 31.7$, $R_d \approx 0.0074 > 0.003$ required, so suitable.` },
      ] },

    { id: "2024-25-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q6a", label: "(a)", marks: "3+7",
          topic: "natural-convection", sub: "Frosted patio-door window: frost line and heat loss",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`During a winter day, the window of a patio door, shown in Figure 6(a) with a height of 1.8 m and width of 1.0 m shows a frost line near its base. The room wall and air temperatures are 15°C.

*[Figure 6(a): a room with a sliding patio door; the glass window is 1.8 m high × 1.0 m wide.]*

(i) Explain why the window would show a frost layer at the base rather than at the top. **[3]**

(ii) Estimate the heat loss through the window. Assume the window has a uniform temperature of 0°C. If the room has electric baseboard heating, estimate the corresponding daily cost of the window heat loss for a utility rate of 0.18 USD/kWh. **[7]**`,
          solution: String.raw`**Given:** vertical glass $L = 1.8$ m high, $w = 1.0$ m wide, $A = 1.8$ m²; $T_s = 0^\circ$C; room air $T_\infty = 15^\circ$C; room walls at 15°C; electricity 0.18 USD/kWh.

**Find:** (i) why frost forms at the base; (ii) heat loss and daily cost.

**Assumptions:** steady; quiescent room air; window treated as an isothermal vertical plate; ideal gas ($\beta = 1/T_f$); for radiation, glass emissivity $\varepsilon = 0.94$ (not given in the paper; a typical value) and the room is a large enclosure at 15°C.

1. **(i) Why frost forms at the base:** room air next to the cold glass is cooled, becomes denser and **sinks**. The natural-convection boundary layer therefore starts at the **top** edge and grows downward ($\delta \propto x^{1/4}$, $x$ measured from the top). At the top the layer is thin and full of warm room air, so the local $h_x$ ($\propto x^{-1/4}$) and the heat supplied to the glass are largest, and the inner glass surface stays warmest. At the base the layer is thick, slow and already cold, so $h_x$ is smallest and the glass there is coldest. Its temperature first falls below the frost point of the room air, so moisture freezes there and a **frost line** forms along the base.

![Cold window: the cooled air sinks, the boundary layer thickens downward, and the local h is lowest at the base](fig/2024-25-Q6a.svg)

2. **(ii) Air properties** at $T_f = (0 + 15)/2 = 7.5^\circ$C = 280.65 K (Çengel Table A-15, between 5°C and 10°C): $k = 0.02420$ W/m·K, $\nu = 1.404\times10^{-5}$ m²/s, $\mathrm{Pr} = 0.7343$; $\beta = 1/280.65 = 3.563\times10^{-3}$ K⁻¹.

3. **Rayleigh number** ($L_c = L = 1.8$ m):
$$\mathrm{Ra}_L = \frac{g\beta(T_\infty - T_s)L^3}{\nu^2}\mathrm{Pr} = \frac{9.81 \times 3.563\times10^{-3} \times 15 \times 1.8^3}{(1.404\times10^{-5})^2} \times 0.7343 = 1.14\times10^{10}$$
This is turbulent ($> 10^9$). The cold plate behaves like a hot plate turned upside down, so the vertical-plate correlations apply.

4. **Nusselt number** (attached table, Churchill–Chu Eq. 9-21, entire range):
$$\mathrm{Nu} = \left\{0.825 + \frac{0.387\,\mathrm{Ra}^{1/6}}{[1 + (0.492/\mathrm{Pr})^{9/16}]^{8/27}}\right\}^2 = 264.1$$
(The simpler Eq. 9-20, $0.1\,\mathrm{Ra}^{1/3} = 225$, would give 15% less.)

5. **Convection coefficient and convective loss:**
$$h = \frac{\mathrm{Nu}\,k}{L} = \frac{264.1 \times 0.02420}{1.8} = 3.55\ \mathrm{W/m^2K}$$
$$Q_{conv} = hA(T_\infty - T_s) = 3.55 \times 1.8 \times 15 = 95.9\ \mathrm{W}$$

6. **Radiation from the room walls to the glass** (walls at 15°C, $\varepsilon = 0.94$ assumed):
$$Q_{rad} = \varepsilon\sigma A(T_w^4 - T_s^4) = 0.94 \times 5.67\times10^{-8} \times 1.8 \times (288.15^4 - 273.15^4) = 127.3\ \mathrm{W}$$
(equivalent $h_{rad} = 4.72$ W/m²·K, larger than the convective $h$).

7. **Total heat loss:**
$$Q = Q_{conv} + Q_{rad} = 95.9 + 127.3 = 223\ \mathrm{W}$$

8. **Daily cost** (the baseboard heaters must replace this loss):
$$E = \frac{223 \times 24}{1000} = 5.36\ \mathrm{kWh/day},\qquad \text{cost} = 5.36 \times 0.18 = 0.96\ \mathrm{USD/day}$$
Natural convection alone: $95.9 \times 24/1000 = 2.30$ kWh/day, i.e. 0.41 USD/day.

**Why it matters:** the room loses more heat to a cold window by radiation than by free convection, so the convection-only answer is only about 43% of the real loss.`,
          answer: String.raw`(i) The cooled air sinks: the boundary layer starts at the top and thickens downward, so $h_x$ is lowest and the glass coldest at the base, where frost forms. (ii) Ra = 1.14×10¹⁰, Nu = 264, h = 3.55 W/m²K: $Q_{conv} \approx 96$ W (2.3 kWh/day, ≈ 0.41 USD/day); with radiation (ε = 0.94) $Q \approx 223$ W, 5.36 kWh/day, ≈ 0.96 USD/day.` },
        { id: "2024-25-Q6b", label: "(b)", marks: "8+2",
          topic: "natural-convection", sub: "Grashof number from the non-dimensional momentum equation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Use the following equation and convert each variable to its corresponding dimensionless quantity to derive Grashof number. Also explain its significance.

$$u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} = \nu\frac{\partial^2u}{\partial y^2} + g\beta(T - T_\infty)$$`,
          solution: String.raw`![Natural convection on a hot vertical plate: velocity and temperature profiles](fig/common-nc-vertical-plate.svg)

**Assumptions:** steady, laminar 2-D boundary layer on a vertical plate (x upward along the plate, y normal to it); Boussinesq approximation (density varies only in the buoyancy term, $\rho_\infty - \rho = \rho\beta(T - T_\infty)$); constant properties; plate at uniform $T_s$.

### Step 1: Dimensionless variables
Choose a characteristic length $L$ (plate height), an arbitrary reference velocity $V$ and the temperature difference $T_s - T_\infty$:
$$x^* = \frac{x}{L},\quad y^* = \frac{y}{L},\quad u^* = \frac{u}{V},\quad v^* = \frac{v}{V},\quad T^* = \frac{T - T_\infty}{T_s - T_\infty}$$
so $x = Lx^*$, $u = Vu^*$, $T - T_\infty = (T_s - T_\infty)T^*$.

### Step 2: Substitute into each term
$$u\frac{\partial u}{\partial x} = \frac{V^2}{L}u^*\frac{\partial u^*}{\partial x^*},\qquad v\frac{\partial u}{\partial y} = \frac{V^2}{L}v^*\frac{\partial u^*}{\partial y^*}$$
$$\nu\frac{\partial^2u}{\partial y^2} = \frac{\nu V}{L^2}\frac{\partial^2u^*}{\partial y^{*2}},\qquad g\beta(T - T_\infty) = g\beta(T_s - T_\infty)T^*$$

### Step 3: Divide by $V^2/L$
$$u^*\frac{\partial u^*}{\partial x^*} + v^*\frac{\partial u^*}{\partial y^*} = \frac{\nu}{VL}\frac{\partial^2u^*}{\partial y^{*2}} + \frac{g\beta(T_s - T_\infty)L}{V^2}T^*$$
$$u^*\frac{\partial u^*}{\partial x^*} + v^*\frac{\partial u^*}{\partial y^*} = \frac{1}{\mathrm{Re}_L}\frac{\partial^2u^*}{\partial y^{*2}} + \left[\frac{g\beta(T_s - T_\infty)L^3}{\nu^2}\right]\frac{1}{\mathrm{Re}_L^2}T^*$$
using $\mathrm{Re}_L = VL/\nu$, since $\dfrac{g\beta\Delta T L}{V^2} = \dfrac{g\beta\Delta TL^3}{\nu^2}\cdot\dfrac{\nu^2}{V^2L^2}$.

### Step 4: The Grashof number
The bracketed group is the Grashof number:
$$\boxed{\mathrm{Gr}_L = \frac{g\beta(T_s - T_\infty)L^3}{\nu^2}}$$
and the dimensionless momentum equation becomes
$$u^*\frac{\partial u^*}{\partial x^*} + v^*\frac{\partial u^*}{\partial y^*} = \frac{\mathrm{Gr}_L}{\mathrm{Re}_L^2}T^* + \frac{1}{\mathrm{Re}_L}\frac{\partial^2u^*}{\partial y^{*2}}$$
In pure natural convection there is no imposed $V$. Choosing the buoyancy velocity $V = \sqrt{g\beta\Delta TL}$ makes the buoyancy coefficient 1, and the viscous coefficient becomes $1/\sqrt{\mathrm{Gr}_L}$. The flow then depends on $\mathrm{Gr}_L$ (and, through the energy equation, on Pr), so $\mathrm{Nu} = f(\mathrm{Gr}_L, \mathrm{Pr})$, usually as $\mathrm{Nu} = C\,\mathrm{Ra}^n$ with $\mathrm{Ra} = \mathrm{Gr}\,\mathrm{Pr}$.

### Step 5: Significance
- $\mathrm{Gr} = \dfrac{\text{buoyancy force}}{\text{viscous force}}$ (strictly buoyancy × inertia / viscous²). It plays the role in natural convection that Re plays in forced convection.
- It decides the **flow regime**: on a vertical plate the flow is laminar up to $\mathrm{Gr} \approx 10^9$ (Ra ≈ 10⁹) and turbulent above.
- $\mathrm{Gr}/\mathrm{Re}^2$ measures the relative importance of natural and forced convection: ≪ 1 forced dominates, ≈ 1 mixed convection, ≫ 1 natural dominates.`,
          answer: String.raw`With $x^* = x/L$, $u^* = u/V$, $T^* = (T - T_\infty)/(T_s - T_\infty)$: $u^*\partial u^*/\partial x^* + v^*\partial u^*/\partial y^* = (\mathrm{Gr}_L/\mathrm{Re}_L^2)T^* + (1/\mathrm{Re}_L)\partial^2u^*/\partial y^{*2}$, with $\mathrm{Gr}_L = g\beta(T_s - T_\infty)L^3/\nu^2$ = buoyancy/viscous force; it sets laminar/turbulent natural convection (Ra ≈ 10⁹) and, as Gr/Re², the natural vs forced balance.` },
        { id: "2024-25-Q6c", label: "(c)", marks: "15",
          topic: "natural-convection", sub: "60 W light bulb: natural convection + radiation from a sphere",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`The glass bulb of the lamp when turned on, heats up very quickly because of absorbing all that heat and then it dissipates the heat to surroundings by convection and radiation. Consider an 8-cm-diameter 60-W light bulb in a room at 25°C. The emissivity of the glass is 0.9. If 10 percent of the energy passes through the glass bulb as light with negligible absorption and the rest of the energy is absorbed and dissipated by the bulb itself, determine the equilibrium temperature of the glass bulb. Assume the interior surfaces of the room to be at room temperature.`,
          solution: String.raw`**Given:** sphere $D = 0.08$ m; 60 W lamp, 10% leaves as light, so the bulb dissipates $Q = 0.9 \times 60 = 54$ W; $T_\infty = T_{surr} = 25^\circ$C; $\varepsilon = 0.9$.

**Find:** the equilibrium glass temperature $T_s$.

**Assumptions:** steady; uniform bulb surface temperature; quiescent air at 1 atm; the bulb is a sphere (attached table, Eq. 9-26); the room is large compared with the bulb (radiation to a large enclosure); the base/stem neglected.

1. **Energy balance:**
$$Q = hA_s(T_s - T_\infty) + \varepsilon\sigma A_s(T_s^4 - T_{surr}^4),\qquad A_s = \pi D^2 = \pi(0.08)^2 = 0.02011\ \mathrm{m^2}$$
$h$ depends on $T_s$, so iterate: guess $T_s$, evaluate properties at $T_f$, check the balance.

2. **Air properties** (first guess $T_s = 170^\circ$C gives $T_f = 97.5^\circ$C; the converged $T_s = 169.4^\circ$C gives $T_f = 97.2^\circ$C). Çengel Table A-15, interpolated between 90 and 100°C at 97.2°C: $k = 0.03075$ W/m·K, $\nu = 2.276\times10^{-5}$ m²/s, $\mathrm{Pr} = 0.7117$; $\beta = 1/370.3 = 2.700\times10^{-3}$ K⁻¹.

3. **Rayleigh number** ($L_c = D$):
$$\mathrm{Ra}_D = \frac{g\beta(T_s - T_\infty)D^3}{\nu^2}\mathrm{Pr} = \frac{9.81 \times 2.700\times10^{-3} \times 144.4 \times 0.08^3}{(2.276\times10^{-5})^2} \times 0.7117 = 2.69\times10^{6}$$
Within the range of Eq. 9-26 ($\mathrm{Ra}_D \le 10^{11}$, $\mathrm{Pr} \ge 0.7$).

4. **Nusselt number (sphere, Eq. 9-26):**
$$\mathrm{Nu} = 2 + \frac{0.589\,\mathrm{Ra}_D^{1/4}}{[1 + (0.469/\mathrm{Pr})^{9/16}]^{4/9}} = 2 + \frac{0.589(2.69\times10^6)^{1/4}}{[1 + (0.469/0.7117)^{9/16}]^{4/9}} = 20.41$$
$$h = \frac{\mathrm{Nu}\,k}{D} = \frac{20.41 \times 0.03075}{0.08} = 7.84\ \mathrm{W/m^2K}$$

5. **Solve the energy balance for $T_s$:**
$$54 = 7.84 \times 0.02011(T_s - 298.15) + 0.9 \times 5.67\times10^{-8} \times 0.02011(T_s^4 - 298.15^4)$$
Trial $T_s = 170^\circ$C: $22.9 + 31.5 = 54.4$ W (slightly high). Trial $T_s = 169^\circ$C: $22.7 + 31.1 = 53.8$ W (slightly low). Interpolating, and recomputing $h$ at the new $T_f$:
$$T_s = 169.4^\circ\mathrm{C}\ (442.5\ \mathrm{K})$$

6. **Split of the 54 W at $T_s = 169.4^\circ$C:**
$$Q_{conv} = 7.84 \times 0.02011 \times 144.4 = 22.8\ \mathrm{W},\qquad Q_{rad} = 0.9 \times 5.67\times10^{-8} \times 0.02011 \times (442.5^4 - 298.15^4) = 31.2\ \mathrm{W}$$
Sum = 54.0 W.

**Result:** the glass settles at about **169°C**. Radiation carries about 58% of the heat, so neglecting it would give an unrealistically high temperature.`,
          answer: String.raw`$Q = 54$ W, $A = 0.0201$ m²; at $T_f \approx 97^\circ$C: Ra = 2.7×10⁶, Nu = 20.4 (sphere), h ≈ 7.8 W/m²K; balance gives $T_s \approx 169^\circ$C (convection 22.8 W + radiation 31.2 W).` },
      ] },

    { id: "2024-25-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q7a", label: "(a)", marks: "5+10+10",
          topic: "evaporator", sub: "Triple-effect forward feed (Kern Ex. 14.2): steam, areas, condenser water",
          type: "numerical", syllabus: "in", repeats: ["practice-evap-P4"],
          text: String.raw`It is desired to concentrate 50,000 lb/hr of a chemical solution at 100°F and 10.0 percent solids to a product which contains 50 percent solids. Steam is available at 12 psig, and the last effect of a triple-effect evaporator with equal heat-transfer surfaces in each effect will be assumed to operate at a vacuum of 26.0 in. Hg referred to a 30-in. barometer. Water is available at 85°F for use in a barometric condenser. Assume a negligible BPR, an average specific heat of 1.0 in all effects, that the condensate from each effect leaves at its saturation temperature and that there are negligible radiation losses. Calculate:

(i) Steam consumption, **[5]**

(ii) Heating surface required for each body, **[10]**

(iii) Condenser water requirement and economy. **[10]**

The accepted overall coefficients of heat transfer for the different effects will be $U_1 = 600$, $U_2 = 250$ and $U_3 = 125$ Btu/(hr)(ft²)(°F).`,
          solution: String.raw`**Given:** $w_F = 50{,}000$ lb/h, $x_F = 0.10$, $x_P = 0.50$, $t_F = 100^\circ$F; steam 12 psig = 26.7 psia; last effect 26 in. Hg vacuum = 30 − 26 = 4 in. Hg abs = $4 \times 0.491 = 1.96$ psia; $c = 1.0$; $U_1, U_2, U_3 = 600, 250, 125$.

**Find:** $W_s$; $A_1, A_2, A_3$; condenser water; economy.

**Assumptions:** forward feed (the usual arrangement when the feed is cold and the slides' Kern Ex. 14.2); negligible BPR; condensate leaves saturated; no losses; first trial with equal pressure drop per effect; barometric-condenser water leaves at 120°F (5°F below the 125°F vapour; not given in the paper).

1. **Material balance:**
$$\text{solids} = 0.10 \times 50{,}000 = 5000\ \mathrm{lb/h},\qquad \text{product} = \frac{5000}{0.50} = 10{,}000\ \mathrm{lb/h}$$
$$\text{total evaporation } w_1 + w_2 + w_3 = 50{,}000 - 10{,}000 = 40{,}000\ \mathrm{lb/h}$$

![Triple-effect forward-feed evaporator with the given data](fig/2024-25-Q7a.svg)

2. **Temperature distribution (equal pressure drops):**
$$\Delta P = \frac{26.70 - 1.96}{3} = 8.25\ \mathrm{psi\ per\ effect}$$

| | P, psia | t, °F | λ, Btu/lb |
|---|---|---|---|
| Steam to effect 1 | 26.70 | $T_s = 244$ | $\lambda_s = 949$ |
| Vapour of effect 1 (heats 2) | 18.45 | $t_1 = 224$ | $\lambda_1 = 961$ |
| Vapour of effect 2 (heats 3) | 10.20 | $t_2 = 194$ | $\lambda_2 = 981$ |
| Vapour of effect 3 (to condenser) | 1.96 | $t_3 = 125$ | $\lambda_3 = 1022$ |

(Steam tables, values rounded as on the slides.) Total $\Delta t = 244 - 125 = 119^\circ$F, split 20/30/69°F.

3. **Heat balances (forward feed, Kern Eqs. 14.8–14.10):**
$$949W_s + 50{,}000(100 - 224) = 961w_1$$
$$961w_1 + (50{,}000 - w_1)(224 - 194) = 981w_2$$
$$981w_2 + (50{,}000 - w_1 - w_2)(194 - 125) = 1022w_3$$
$$w_1 + w_2 + w_3 = 40{,}000$$
In effect 1 the cold feed must first be heated from 100°F to 224°F. In effects 2 and 3 the hotter liquor entering from the previous effect flashes and adds to the evaporation.

4. **(i) Steam consumption** (solving the four linear equations simultaneously):
$$w_1 = 12{,}360,\quad w_2 = 13{,}260,\quad w_3 = 14{,}380\ \mathrm{lb/h},\qquad \boxed{W_s = 19{,}050\ \mathrm{lb/h}}$$

5. **(ii) Heating surfaces** ($A = Q/U\Delta t$):
$$A_1 = \frac{W_s\lambda_s}{U_1(T_s - t_1)} = \frac{19{,}050 \times 949}{600 \times 20} = 1507\ \mathrm{ft^2}$$
$$A_2 = \frac{w_1\lambda_1}{U_2(t_1 - t_2)} = \frac{12{,}360 \times 961}{250 \times 30} = 1584\ \mathrm{ft^2}$$
$$A_3 = \frac{w_2\lambda_2}{U_3(t_2 - t_3)} = \frac{13{,}260 \times 981}{125 \times 69} = 1508\ \mathrm{ft^2}$$

6. **Equal-surface check:** the mean is 1533 ft² and every effect is within 3.4% of it, so the equal-pressure-drop distribution is accepted without readjusting the Δt's. Specify **≈ 1600 ft² per body** (equal surfaces, the largest rounded up).

7. **(iii) Condenser water:**
$$Q_c = w_3\lambda_3 = 14{,}380 \times 1022 = 1.47\times10^{7}\ \mathrm{Btu/h}$$
$$\text{water} = \frac{Q_c}{c(t_{out} - t_{in})} = \frac{1.47\times10^7}{1.0 \times (120 - 85)} = 420{,}000\ \mathrm{lb/h} = \frac{420{,}000}{500} \approx 840\ \mathrm{gpm}$$

8. **Economy:**
$$\text{economy} = \frac{\text{total evaporation}}{\text{steam}} = \frac{40{,}000}{19{,}050} = 2.10\ \mathrm{lb\ evaporated\ per\ lb\ steam}$$

**Exam tip:** write the heat balances in the order the liquor flows. The cold feed makes the first effect a poor evaporator ($w_1 < W_s$), and flashing in effects 2 and 3 makes up for it. That is why the economy (2.1) is below the ideal value of 3 for a triple effect.`,
          answer: String.raw`(i) $W_s \approx 19{,}050$ lb/h ($w_1, w_2, w_3 = 12{,}360$, 13,260, 14,380 lb/h). (ii) $A_1, A_2, A_3 \approx 1507$, 1584, 1508 ft², so use ≈ 1600 ft² per body. (iii) Condenser water ≈ 420,000 lb/h (≈ 840 gpm, 85 → 120°F); economy ≈ 2.10.` },
        { id: "2024-25-Q7b", label: "(b)", marks: "10",
          topic: "heat-exchangers", sub: "Which fluid limits the heat transfer (C_min)",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`The properties and flow rates for the hot and cold fluids of a heat exchanger are shown in the following table. Which fluid limits the heat transfer rate of the exchanger? Explain your choice.

| | Hot fluid | Cold fluid |
|---|---|---|
| Density, kg/m³ | 997 | 1247 |
| Specific heat, J/kg·K | 4179 | 2564 |
| Thermal conductivity, W/m·K | 0.613 | 0.287 |
| Viscosity, N·s/m² | $8.55\times10^{-4}$ | $1.68\times10^{-4}$ |
| Flow rate, m³/h | 14 | 16 |`,
          solution: String.raw`**Given:** the table above (volumetric flow rates).

**Find:** the fluid that limits the heat transfer rate.

**Assumptions:** steady; no heat loss; constant properties.

1. **Mass flow rates** ($\dot m = \rho\dot V$):
$$\dot m_h = \frac{997 \times 14}{3600} = 3.877\ \mathrm{kg/s},\qquad \dot m_c = \frac{1247 \times 16}{3600} = 5.542\ \mathrm{kg/s}$$

2. **Heat capacity rates** ($C = \dot mc_p$):
$$C_h = 3.877 \times 4179 = 16{,}200\ \mathrm{W/K},\qquad C_c = 5.542 \times 2564 = 14{,}210\ \mathrm{W/K}$$

3. **Which is smaller?** $C_c < C_h$, so $C_{min} = C_c = 14{,}210$ W/K and $C_r = C_{min}/C_{max} = 0.877$.

4. **Why the $C_{min}$ fluid limits $Q$:** the energy balance gives $Q = C_h\Delta T_h = C_c\Delta T_c$, so the fluid with the smaller $C$ undergoes the **larger temperature change**. The largest possible temperature change of any fluid is $T_{h,in} - T_{c,in}$ (in an infinitely long counterflow exchanger), and only the $C_{min}$ fluid can reach it. The other fluid would need an impossible temperature change. Hence
$$Q_{max} = C_{min}(T_{h,in} - T_{c,in}) = 14{,}210\,(T_{h,in} - T_{c,in})\ \mathrm{W}$$
and the actual rate is $Q = \varepsilon\,C_{min}(T_{h,in} - T_{c,in})$. **The cold fluid limits the heat transfer rate.**

5. **Note on the other properties:** $k$ and μ affect the film coefficients ($h$, hence $U$ and NTU $= UA/C_{min}$), i.e. how close the exchanger comes to $Q_{max}$. They do not set the thermodynamic limit. Here the cold fluid's lower $k$ (0.287 vs 0.613) also suggests it will have the lower $h$. On both counts it is the cold side that restricts the duty.`,
          answer: String.raw`$\dot m_h = 3.88$, $\dot m_c = 5.54$ kg/s; $C_h = 16{,}200$ W/K, $C_c = 14{,}210$ W/K, so the **cold fluid** is $C_{min}$: it has the larger ΔT, and $Q_{max} = C_{min}(T_{h,in} - T_{c,in})$.` },
      ] },

    { id: "2024-25-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2024-25-Q8a", label: "(a)", marks: "10",
          topic: "boiling", sub: "Evaporation vs boiling; flow vs pool boiling; permanent enhancement",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is the difference between evaporation and boiling? What does flow boiling differ from pool boiling? Discuss some methods of enhancing pool boiling heat transfer permanently.`,
          solution: String.raw`**Evaporation vs boiling**

| | Evaporation | Boiling |
|---|---|---|
| Where | at the liquid–vapour **interface** (free surface) | at a **solid–liquid interface** (heated surface) |
| Condition | vapour pressure of the liquid > partial pressure of the vapour in the gas above; any $T$ below $T_{sat}$ | surface temperature above $T_{sat}$ ($\Delta T_{excess} = T_s - T_{sat} > 0$) |
| Bubbles | none | vapour bubbles nucleate at cavities, grow and detach |
| Rate / $h$ | slow, mass-transfer controlled | very high $h$ (nucleate boiling ~ $10^4$–$10^5$ W/m²K) |
| Example | a lake or a wet towel drying | water in a kettle or a boiler tube |

**Flow boiling vs pool boiling**
- **Pool boiling:** the liquid is stagnant; fluid motion comes only from natural convection and bubble action (buoyancy removes the vapour). Example: kettle, kettle reboiler. Described by the boiling curve (natural convection → nucleate → transition → film).
- **Flow boiling (forced-convection boiling):** the liquid is pumped over the surface or through a heated tube. The bulk flow sweeps away bubbles, so $h$ and the critical heat flux are higher. Inside tubes the flow passes through regimes along the length: single-phase liquid → bubbly → slug → annular → (dry-out) mist → single-phase vapour, as the quality rises. It combines forced convection with boiling and is harder to analyse. Example: boiler and evaporator tubes, refrigerant evaporators.

**Permanent enhancement of pool (nucleate) boiling**

Simply roughening a surface (sand-blasting, scratches) raises $h$ only temporarily; the cavities fill with deposits or get "flooded" and the effect fades. Permanent methods create stable, re-entrant nucleation sites:
- **Porous coatings:** a thin layer of sintered metal particles (e.g. Linde High-Flux) on the surface gives many interconnected re-entrant cavities that trap vapour. $h$ rises up to about 10 times.
- **Mechanically machined or rolled surfaces** with re-entrant tunnels or cavities (e.g. Thermoexcel-E, GEWA-T, Turbo-B tubes): narrow-mouthed cavities that keep vapour nuclei and keep boiling at low $\Delta T_{excess}$.
- **Fins and extended surfaces** (integral low-fin tubes): more surface area and more nucleation sites per unit length.
- **Surface wettability engineering** (e.g. hydrophilic/hydrophobic coatings, micro/nano-structures) to raise the critical heat flux and lower the incipience superheat.
- Other active aids (surface vibration, electric fields, additives/surfactants) exist but are not permanent surface changes.`,
          answer: String.raw`Evaporation: at a liquid–vapour interface, $T < T_{sat}$, no bubbles; boiling: at a heated solid surface with $T_s > T_{sat}$, bubble nucleation. Pool boiling: stagnant liquid, buoyancy-driven; flow boiling: forced flow, higher h and CHF, with regimes along the tube. Permanent enhancement: porous sintered coatings, machined re-entrant cavities (Thermoexcel, GEWA-T), finned tubes, engineered surfaces (roughening alone is only temporary).` },
        { id: "2024-25-Q8b", label: "(b)", marks: "25",
          topic: "condensation", sub: "Steam condenser at 7.38 kPa: single horizontal tube and 3×4 bank",
          type: "numerical", syllabus: "in", repeats: ["2015-16-Q3a", "2022-23-Q7d", "practice-condensation-P2a"],
          text: String.raw`The condenser of a steam power plant operates at a pressure of 7.38 kPa. Steam at this pressure condenses on the outer surfaces of horizontal pipes through which cooling water circulates. The outer diameter of the pipes is 3 cm, and the outer surfaces of the pipes are maintained at 30°C (Figure 8(b)(i-ii)).

(i) Determine the rate of heat transfer to the cooling water circulating in the pipes.

(ii) Determine the rate of condensation of steam per unit length of a horizontal pipe.

(iii) Repeat the problem for the case of 12 horizontal tubes arranged in a rectangular array of 3 tubes high and 4 tubes wide, as shown in Figure 8(b)(iii).

Given: $h_{horiz,\,N\,tubes} = 0.729\left[\dfrac{g\rho_l(\rho_l - \rho_v)h^*_{fg}k_l^3}{\mu_l(T_{sat} - T_s)ND}\right]^{1/4} = \dfrac{1}{N^{1/4}}h_{horiz,\,1\,tube}$

*[Figure 8(b)(i-ii): a single horizontal tube in steam at 40°C, surface at 30°C, cooling water inside. Figure 8(b)(iii): 12 tubes, 3 high × 4 wide, condensate dripping down each column.]*`,
          solution: String.raw`**Given:** $P = 7.38$ kPa, so $T_{sat} = 40^\circ$C; $T_s = 30^\circ$C; $D = 0.03$ m; (iii) 12 tubes with $N = 3$ tubes in each vertical column. The tube length is not given, so results are per metre of tube length.

**Find:** $\dot Q$ and $\dot m$ per metre, for one tube and for the 3 × 4 bank.

**Assumptions:** steady; laminar film condensation (Nusselt); uniform tube-surface temperature; pure saturated vapour (no non-condensables); condensate drips straight down each column.

1. **Properties.** Saturated water at 40°C (Çengel Table A-9): $P_{sat} = 7.384$ kPa (confirms $T_{sat} = 40^\circ$C), $h_{fg} = 2407$ kJ/kg, $\rho_v = 0.0512$ kg/m³. Liquid at the film temperature $T_f = (40 + 30)/2 = 35^\circ$C: $\rho_l = 994$ kg/m³, $\mu_l = 0.720\times10^{-3}$ kg/m·s, $k_l = 0.623$ W/m·K, $c_{pl} = 4178$ J/kg·K.

![Tube bank 3 high × 4 wide: N = 3 tubes per column](fig/2024-25-Q8b.svg)

2. **Modified latent heat** (accounts for subcooling of the film):
$$h^*_{fg} = h_{fg} + 0.68c_{pl}(T_{sat} - T_s) = 2407\times10^3 + 0.68 \times 4178 \times 10 = 2.435\times10^{6}\ \mathrm{J/kg}$$

3. **(i) Single tube, heat transfer coefficient** ($N = 1$):
$$h_1 = 0.729\left[\frac{9.81 \times 994 \times (994 - 0.0512) \times 2.435\times10^6 \times 0.623^3}{0.720\times10^{-3} \times 10 \times 0.03}\right]^{1/4} = 9295\ \mathrm{W/m^2K}$$

4. **(i) Single tube, heat transfer rate per metre:**
$$A = \pi DL = \pi \times 0.03 \times 1 = 0.0942\ \mathrm{m^2}$$
$$\dot Q_1 = h_1A(T_{sat} - T_s) = 9295 \times 0.0942 \times 10 = 8.76\times10^{3}\ \mathrm{W}\ (8.76\ \mathrm{kW\ per\ m})$$

5. **(ii) Condensation rate, single tube:**
$$\dot m_1 = \frac{\dot Q_1}{h^*_{fg}} = \frac{8760}{2.435\times10^6} = 3.60\times10^{-3}\ \mathrm{kg/s\ per\ m}\ (\approx 12.9\ \mathrm{kg/h})$$

6. **(iii) Tube bank, average coefficient** ($N = 3$ per column):
$$h_3 = h_1N^{-1/4} = 9295 \times 3^{-1/4} = 7062\ \mathrm{W/m^2K}$$

7. **(iii) Tube bank, heat transfer rate per metre** (12 tubes):
$$\dot Q = h_3(12\pi DL)(T_{sat} - T_s) = 7062 \times 12 \times 0.0942 \times 10 = 7.99\times10^{4}\ \mathrm{W}\ (79.9\ \mathrm{kW\ per\ m})$$

8. **(iii) Tube bank, condensation rate:**
$$\dot m = \frac{\dot Q}{h^*_{fg}} = \frac{79{,}870}{2.435\times10^6} = 0.0328\ \mathrm{kg/s\ per\ m\ (all\ 12\ tubes)}$$
$$\text{per tube: } \frac{0.0328}{12} = 2.73\times10^{-3}\ \mathrm{kg/s\ per\ m}\ (\approx 9.8\ \mathrm{kg/h})$$

9. **Comparison:** each tube in the bank condenses $2.73/3.60 = 0.76 = 3^{-1/4}$ of what an isolated tube does. Condensate from the upper tubes falls onto the lower ones, thickens their film and adds resistance.

**Exam tip:** in the 3 × 4 array, $N$ is the number of tubes in a **vertical column** (3), not the total number (12) and not the number of columns (4).`,
          answer: String.raw`$h^*_{fg} = 2.435$ MJ/kg. (i) One tube: $h_1 \approx 9295$ W/m²K, $\dot Q \approx 8.76$ kW per m; (ii) $\dot m \approx 3.6\times10^{-3}$ kg/s per m. (iii) 3 × 4 bank: $h_3 = 7062$ W/m²K, $\dot Q \approx 79.9$ kW per m, $\dot m \approx 0.0328$ kg/s per m (2.73×10⁻³ kg/s per tube).` },
      ] },
  ]
});
