QB.paper({ year: "Practice", set: "Heat generation", date: "", marks: 0, practice: true,
  rules: String.raw`Practice set on steady conduction with uniform internal heat generation: plane walls and cylinders from the slides, centre (maximum) temperature, electrically heated wires, rods between two plates and tubes cooled on one side. S = slide derivations, example and variations, F = exam-style problems.`,
  questions: [
    { id: "practice-generation-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-generation-P1", label: "", marks: "", topic: "generation",
          sub: "Derivation: plane wall with uniform generation, T0 = q̇L²/2k + Tw", type: "derivation",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 02 Conduction II, slides 5–10 and 12 (plane wall with heat sources, Eqs. 2-22, 2-23)`,
          text: String.raw`A large plane wall of thickness $2L$ generates heat uniformly at $\dot q$ (W/m³). Both faces ($x = \pm L$) are held at $T_w$. Starting from the steady 1-D conduction equation, derive the temperature distribution and the mid-plane temperature $T_0$. Show that the same $T_0$ follows from an overall energy balance.`,
          solution: String.raw`**Assumptions:** steady; 1-D in $x$ (wall large in $y$, $z$); uniform $\dot q$; constant $k$; both faces at $T_w$ (symmetric); $x = 0$ at the mid-plane.

![Plane wall 2L with uniform generation: parabolic profile, peak T0 at the mid-plane](fig/practice-generation-P1.svg)

### 1. Governing equation
Energy balance on a slice $\Delta x$ (conduction in − conduction out + generation = 0 at steady state) gives

$$\frac{d^2T}{dx^2} + \frac{\dot q}{k} = 0$$

### 2. General solution
Integrate twice:

$$\frac{dT}{dx} = -\frac{\dot q}{k}x + C_1,\qquad T = -\frac{\dot q}{2k}x^2 + C_1x + C_2$$

### 3. Boundary conditions
- Both faces are at the same temperature, so the profile is symmetric: $dT/dx = 0$ at $x = 0$, hence $C_1 = 0$.
- At $x = 0$, $T = T_0$, hence $C_2 = T_0$.

$$T - T_0 = -\frac{\dot q}{2k}x^2\qquad\text{(parabola)}$$

- At $x = L$, $T = T_w$: $T_w - T_0 = -\dot qL^2/(2k)$, so

$$\boxed{T_0 = \frac{\dot qL^2}{2k} + T_w},\qquad \frac{T - T_w}{T_0 - T_w} = 1 - \frac{x^2}{L^2}\ \ \left(\text{equivalently }\frac{T-T_0}{T_w-T_0} = \frac{x^2}{L^2}\right)$$

### 4. Energy-balance check
At steady state the heat generated equals the heat conducted out of both faces:

$$2\left(-kA\left.\frac{dT}{dx}\right|_{x=L}\right) = \dot qA(2L)$$

From the profile, $\left.\dfrac{dT}{dx}\right|_{L} = (T_w - T_0)\dfrac{2}{L}$, so $-k(T_w - T_0)\dfrac2L = \dot qL$, which again gives $T_0 = \dot qL^2/(2k) + T_w$ ✓.

**Exam tip:** the maximum temperature is at the mid-plane, where the heat flux is zero; the flux grows linearly, $q''(x) = \dot qx$, reaching $\dot qL$ at each face.`,
          answer: String.raw`$T - T_0 = -\dot qx^2/(2k)$; $T_0 = \dot qL^2/(2k) + T_w$; face flux $= \dot qL$.` }
      ] },
    { id: "practice-generation-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-generation-P2", label: "", marks: "", topic: "generation",
          sub: "Derivation: solid cylinder with uniform generation, T0 = q̇R²/4k + Tw", type: "derivation",
          syllabus: "in", repeats: ["2022-23-Q2a"], origin: "slides", ref: String.raw`Slides 02 Conduction II, slides 13–14 (cylindrical system with heat sources); asked in 2022-23 Q2(a)`,
          text: String.raw`A long solid cylinder of radius $R$ ($= r_0$) generates heat uniformly at $\dot q$ and its surface is held at $T_w$. Starting from

$$\frac1r\frac{d}{dr}\left(r\frac{dT}{dr}\right) + \frac{\dot q}{k} = 0$$

derive the temperature distribution and the centre temperature $T_0$.`,
          solution: String.raw`**Assumptions:** steady; radial 1-D (long cylinder, no angular variation); uniform $\dot q$; constant $k$.

![Solid cylinder with generation: parabolic T(r), peak at the axis](fig/practice-generation-P2.svg)

**Boundary conditions:** $T = T_w$ at $r = R$; $dT/dr = 0$ at $r = 0$ (symmetry, finite temperature at the axis).

### 1. First integration
Multiply by $r$: $\dfrac{d}{dr}\left(r\dfrac{dT}{dr}\right) = -\dfrac{\dot q}{k}r$, so

$$r\frac{dT}{dr} = -\frac{\dot q r^2}{2k} + C_1\ \Rightarrow\ \frac{dT}{dr} = -\frac{\dot q r}{2k} + \frac{C_1}{r}$$

At $r = 0$ the gradient must be zero (and finite), so $C_1 = 0$.

### 2. Second integration
$$T = -\frac{\dot q r^2}{4k} + C_2$$

At $r = R$: $T_w = -\dot qR^2/(4k) + C_2 \Rightarrow C_2 = T_w + \dot qR^2/(4k)$.

$$T - T_w = \frac{\dot q}{4k}(R^2 - r^2)$$

### 3. Centre temperature
At $r = 0$:

$$\boxed{T_0 = \frac{\dot qR^2}{4k} + T_w},\qquad \frac{T - T_w}{T_0 - T_w} = 1 - \left(\frac{r}{R}\right)^2$$

**Check (energy balance):** surface flux $-k\,dT/dr|_R = \dot qR/2$; times area $2\pi RL$ gives $\dot q\pi R^2L$ = total generation ✓.

**Note:** the cylinder has 4 in the denominator, the plane wall 2 (half-thickness $L$); a sphere would have 6.`,
          answer: String.raw`$T - T_w = \dot q(R^2 - r^2)/(4k)$; $T_0 = T_w + \dot qR^2/(4k)$.` }
      ] },
    { id: "practice-generation-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-generation-P3", label: "", marks: "", topic: "generation",
          sub: "Current-carrying stainless wire in liquid: centre temperature", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 02 Conduction II, slides 15–17 (200 A through a 3 mm stainless-steel wire)`,
          text: String.raw`A current of 200 A passes through a stainless-steel wire ($k = 19$ W/m·°C) of 3 mm diameter and 1 m length. The resistivity of the steel is 70 μΩ·cm. The wire is submerged in a liquid at 110°C with a convection coefficient of 4 kW/m²·°C. Calculate the centre temperature of the wire.`,
          solution: String.raw`**Given:** $I = 200$ A, $d = 3$ mm ($r_0 = 1.5\times10^{-3}$ m), $L = 1$ m, $k = 19$ W/m·°C, $\rho_e = 70\ \mu\Omega\cdot\mathrm{cm} = 70\times10^{-8}\ \Omega\cdot\mathrm m$, $T_\infty = 110$°C, $h = 4000$ W/m²·°C.

![Current-carrying wire in liquid and its radial temperature profile](fig/practice-generation-P3.svg)

**Assumptions:** steady; uniform generation (uniform current density); radial conduction; constant $k$ and $\rho_e$; all electrical power leaves by convection from the side surface.

### 1. Electrical resistance and power
$$R = \rho_e\frac{L}{A} = \frac{(70\times10^{-8})(1)}{\pi(1.5\times10^{-3})^2} = 0.099\ \Omega$$

$$P = I^2R = (200)^2(0.099) = 3961\ \mathrm W$$

### 2. Surface temperature (all power convected)
$$P = h\,\pi dL\,(T_w - T_\infty)\ \Rightarrow\ 3961 = 4000\,\pi(3\times10^{-3})(1)(T_w - 110)$$

$$T_w = 110 + 105.1 = 215\ ^\circ\mathrm C$$

### 3. Volumetric generation
$$\dot q = \frac{P}{\pi r_0^2L} = \frac{3961}{\pi(1.5\times10^{-3})^2(1)} = 5.60\times10^8\ \mathrm{W/m^3} = 560\ \mathrm{MW/m^3}$$

### 4. Centre temperature
$$T_0 = \frac{\dot qr_0^2}{4k} + T_w = \frac{(5.60\times10^8)(1.5\times10^{-3})^2}{4(19)} + 215 = 16.6 + 215 = 231.6\ ^\circ\mathrm C$$

**Why it matters:** the convection film takes 105°C of the rise but the conduction inside the thin wire only 17°C; the maximum temperature is at the axis.`,
          answer: String.raw`$R = 0.099\ \Omega$, $P \approx 3960$ W, $T_w \approx 215$°C, $\dot q \approx 560$ MW/m³, $T_0 \approx 231.6$°C.` }
      ] },
    { id: "practice-generation-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-generation-P4", label: "", marks: "", topic: "generation",
          sub: "Heat-generating plate cooled by water on both faces", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 02 Conduction II, slides 7–10 (plane wall with heat sources) with convection faces`,
          text: String.raw`A 4 cm thick plate ($k = 20$ W/m·°C) generates heat uniformly at $5\times10^6$ W/m³. Both faces are cooled by water at 80°C with $h = 1100$ W/m²·°C. Find the face temperature, the mid-plane temperature and the temperature halfway between the mid-plane and a face.`,
          solution: String.raw`**Given:** $2L = 0.04$ m ($L = 0.02$ m), $k = 20$ W/m·°C, $\dot q = 5\times10^6$ W/m³, $T_\infty = 80$°C, $h = 1100$ W/m²·°C.

![Heat-generating plate cooled on both faces: temperatures at the face, L/2 and centre](fig/practice-generation-P4.svg)

**Assumptions:** steady; 1-D; uniform $\dot q$; constant $k$; identical cooling on both faces (symmetric, so each face rejects half the heat).

### 1. Face temperature (energy balance on half the plate)
Heat generated in half the plate per unit area $= \dot qL$, all convected from one face:

$$\dot qL = h(T_w - T_\infty)\ \Rightarrow\ T_w = 80 + \frac{(5\times10^6)(0.02)}{1100} = 80 + 90.9 = 170.9\ ^\circ\mathrm C$$

### 2. Mid-plane temperature
$$T_0 = T_w + \frac{\dot qL^2}{2k} = 170.9 + \frac{(5\times10^6)(0.02)^2}{2(20)} = 170.9 + 50.0 = 220.9\ ^\circ\mathrm C$$

### 3. At $x = L/2$
$$\frac{T - T_w}{T_0 - T_w} = 1 - \frac{x^2}{L^2} = 1 - 0.25 = 0.75\ \Rightarrow\ T = 170.9 + 0.75(50.0) = 208.4\ ^\circ\mathrm C$$

**Check:** face flux $= -k\,dT/dx|_L = \dot qL = 10^5\ \mathrm{W/m^2}$, and $h\Delta T = 1100(90.9) = 10^5$ ✓.`,
          answer: String.raw`$T_w \approx 170.9$°C, $T_0 \approx 220.9$°C, $T(L/2) \approx 208.4$°C.` }
      ] },
    { id: "practice-generation-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-generation-P5", label: "", marks: "", topic: "generation",
          sub: "Maximum current in a nichrome heater wire", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 02 Conduction II, slides 15–17 (wire centre temperature) solved backwards for the current`,
          text: String.raw`A 1 mm diameter nichrome heating wire ($k = 12$ W/m·°C, resistivity $1.1\times10^{-6}$ Ω·m) is immersed in an oil bath at 40°C with $h = 2500$ W/m²·°C. The centre temperature of the wire must not exceed 120°C. Find the maximum current, the corresponding heat generation per metre and per unit volume, and the surface temperature.`,
          solution: String.raw`**Given:** $r_0 = 0.5\times10^{-3}$ m, $k = 12$ W/m·°C, $\rho_e = 1.1\times10^{-6}$ Ω·m, $T_\infty = 40$°C, $h = 2500$ W/m²·°C, $T_{0,max} = 120$°C.

**Assumptions:** steady; uniform generation; radial conduction; constant properties; all power convected from the side surface.

### 1. Express both temperature rises in terms of the power per metre $P'$
Resistance per metre: $R' = \rho_e/(\pi r_0^2) = 1.1\times10^{-6}/(\pi\times2.5\times10^{-7}) = 1.401$ Ω/m, so $P' = I^2R'$.

- Film: $T_w - T_\infty = \dfrac{P'}{h\,2\pi r_0}$
- Inside the wire: $T_0 - T_w = \dfrac{\dot qr_0^2}{4k} = \dfrac{P'}{\pi r_0^2}\,\dfrac{r_0^2}{4k} = \dfrac{P'}{4\pi k}$

Adding them:

$$T_0 - T_\infty = P'\left[\frac{1}{2\pi r_0h} + \frac{1}{4\pi k}\right] = P'[0.12732 + 0.00663] = 0.13395\,P'$$

### 2. Maximum power and current
$$P' = \frac{120 - 40}{0.13395} = 597\ \mathrm{W/m},\qquad I = \sqrt{\frac{P'}{R'}} = \sqrt{\frac{597}{1.401}} = 20.6\ \mathrm A$$

### 3. Generation rate and surface temperature
$$\dot q = \frac{P'}{\pi r_0^2} = \frac{597}{\pi(0.5\times10^{-3})^2} = 7.60\times10^8\ \mathrm{W/m^3}$$

$$T_w = 40 + 597(0.12732) = 116.0\ ^\circ\mathrm C,\qquad T_0 - T_w = 597/(4\pi\cdot12) = 4.0\ ^\circ\mathrm C$$

**Why it matters:** for thin wires the internal rise $P'/(4\pi k)$ is tiny; the outer film limits the current. The result $T_0 - T_w = P'/(4\pi k)$ is independent of the wire radius.`,
          answer: String.raw`$I_{max} \approx 20.6$ A ($P' \approx 597$ W/m, $\dot q \approx 7.6\times10^8$ W/m³); $T_w \approx 116$°C, $T_0 = 120$°C.` }
      ] },
    { id: "practice-generation-P6", q: 6, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-generation-P6", label: "", marks: "10+5", topic: "generation",
          sub: "Plane wall with generation: one face insulated, other face convective", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel ch. 2 (plane wall with generation, insulated on one side); extends Slides 02 Conduction II, slides 7–10`,
          text: String.raw`A large plane wall 8 cm thick ($k = 2.5$ W/m·°C) generates heat uniformly at $5\times10^4$ W/m³ by electrical resistance heating. The face at $x = 0$ is perfectly insulated, and the face at $x = L$ loses heat by convection to air at 25°C with $h = 40$ W/m²·°C.

(a) Write the governing equation and boundary conditions, and derive $T(x)$. **[10]**

(b) Find the surface and maximum temperatures and the temperature at the middle of the wall. **[5]**`,
          solution: String.raw`**Given:** $L = 0.08$ m, $k = 2.5$ W/m·°C, $\dot q = 5\times10^4$ W/m³, $h = 40$ W/m²·°C, $T_\infty = 25$°C.

![Wall insulated at x = 0, convective at x = L: maximum at the insulated face](fig/practice-generation-P6.svg)

**Assumptions:** steady; 1-D; uniform $\dot q$; constant $k$.

### (a) Formulation and solution
$$\frac{d^2T}{dx^2} + \frac{\dot q}{k} = 0$$

BCs: $\dfrac{dT(0)}{dx} = 0$ (insulated); $\;-k\dfrac{dT(L)}{dx} = h[T(L) - T_\infty]$ (convection).

General solution: $T = -\dfrac{\dot q}{2k}x^2 + C_1x + C_2$.
- At $x = 0$: $dT/dx = C_1 = 0$.
- At $x = L$: $-k\left(-\dfrac{\dot qL}{k}\right) = \dot qL = h[T(L) - T_\infty] \Rightarrow T(L) = T_\infty + \dfrac{\dot qL}{h}$.
- Then $C_2 = T(L) + \dfrac{\dot qL^2}{2k}$, so

$$T(x) = T_\infty + \frac{\dot qL}{h} + \frac{\dot q}{2k}(L^2 - x^2)$$

This is exactly one half of a symmetric wall of thickness $2L$: the insulated face plays the role of the mid-plane.

### (b) Numbers
$$T(L) = 25 + \frac{(5\times10^4)(0.08)}{40} = 25 + 100 = 125\ ^\circ\mathrm C$$

$$T_{max} = T(0) = 125 + \frac{(5\times10^4)(0.08)^2}{2(2.5)} = 125 + 64 = 189\ ^\circ\mathrm C$$

$$T(L/2) = 125 + \frac{5\times10^4}{2(2.5)}(0.0064 - 0.0016) = 125 + 48 = 173\ ^\circ\mathrm C$$

**Check:** all generated heat, $\dot qL = 4000\ \mathrm{W/m^2}$, leaves the right face: $h(125 - 25) = 4000$ ✓.`,
          answer: String.raw`$T(x) = T_\infty + \dot qL/h + \dot q(L^2 - x^2)/(2k)$; $T(L) = 125$°C, $T_{max} = T(0) = 189$°C, $T(L/2) = 173$°C.` }
      ] },
    { id: "practice-generation-P7", q: 7, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-generation-P7", label: "", marks: "15", topic: "generation",
          sub: "Heated bar between two blocks at different temperatures", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Ch. 2 problems on generation with unequal end temperatures; cousin of 2022-23 Q3(b)`,
          text: String.raw`A brass bar ($k = 110$ W/m·°C), 0.2 m long and 20 mm in diameter, connects two large blocks held at 60°C ($x = 0$) and 40°C ($x = L$). Its lateral surface is insulated. An electric current generates a total of 80 W uniformly in the bar. Derive the temperature distribution and find the maximum temperature, where it occurs, and the heat flowing into each block.`,
          solution: String.raw`**Given:** $L = 0.2$ m, $d = 0.02$ m, $k = 110$ W/m·°C, $T(0) = T_1 = 60$°C, $T(L) = T_2 = 40$°C, total generation 80 W.

![Heated bar between blocks at 60°C and 40°C: off-centre maximum](fig/practice-generation-P7.svg)

**Assumptions:** steady; 1-D axial (lateral surface insulated); uniform $\dot q$; constant $k$; perfect contact with the blocks.

### 1. Generation rate
$A = \pi d^2/4 = 3.142\times10^{-4}\ \mathrm{m^2}$, $V = AL = 6.283\times10^{-5}\ \mathrm{m^3}$:

$$\dot q = \frac{80}{6.283\times10^{-5}} = 1.273\times10^6\ \mathrm{W/m^3}$$

### 2. Temperature distribution
$d^2T/dx^2 + \dot q/k = 0 \Rightarrow T = -\dfrac{\dot q}{2k}x^2 + C_1x + C_2$.
- $T(0) = T_1 \Rightarrow C_2 = T_1$.
- $T(L) = T_2 \Rightarrow C_1 = \dfrac{T_2 - T_1}{L} + \dfrac{\dot qL}{2k}$.

$$T(x) = T_1 + \left[\frac{T_2 - T_1}{L} + \frac{\dot qL}{2k}\right]x - \frac{\dot q}{2k}x^2$$

$$C_1 = \frac{40 - 60}{0.2} + \frac{(1.273\times10^6)(0.2)}{2(110)} = -100 + 1157.5 = 1057.5\ \mathrm{^\circ C/m}$$

### 3. Maximum temperature
$dT/dx = C_1 - \dot qx/k = 0 \Rightarrow x_m = kC_1/\dot q = 110(1057.5)/(1.273\times10^6) = 0.0914$ m (nearer the hotter block).

$$T_{max} = 60 + 1057.5(0.0914) - \frac{1.273\times10^6}{2(110)}(0.0914)^2 = 108.3\ ^\circ\mathrm C$$

### 4. Heat to each block
At $x = 0$ the conducted heat in the $+x$ direction is $-kA\,C_1 = -110(3.142\times10^{-4})(1057.5) = -36.5$ W, i.e. **36.5 W into the 60°C block**.

At $x = L$: $-kA(C_1 - \dot qL/k) = -110(3.142\times10^{-4})(1057.5 - 2314.5) = +43.5$ W, i.e. **43.5 W into the 40°C block**.

Check: $36.5 + 43.5 = 80$ W ✓. The maximum lies at $x_m = 0.0914$ m, where the flux is zero; heat flows both ways from it, $\dot qx_mA = 36.5$ W ✓.

**Exam tip:** with unequal end temperatures the parabola is no longer centred; find $x_m$ from $dT/dx = 0$, and do not assume the heat splits equally.`,
          answer: String.raw`$\dot q \approx 1.27\times10^6$ W/m³; $T_{max} \approx 108$°C at $x \approx 9.1$ cm from the 60°C block; 36.5 W to the 60°C block and 43.5 W to the 40°C block.` }
      ] },
    { id: "practice-generation-P8", q: 8, section: "F", compulsory: false,
      stem: String.raw`A long hollow cylinder (inner radius $r_1$, outer radius $r_2$, conductivity $k$) generates heat uniformly at $\dot q$. The outer surface is insulated and the inner surface is cooled by a fluid.`,
      parts: [
        { id: "practice-generation-P8a", label: "(a)", marks: "10", topic: "generation",
          sub: "Derivation: tube with generation, insulated outside, cooled inside", type: "derivation",
          syllabus: "in", repeats: ["2021-22-Q8a"], origin: "potential", ref: String.raw`Style of Holman Prob. 2-series; cousin of 2021-22 Q8(a) (tube insulated at r2, cooled at r1)`,
          text: String.raw`Taking the inner surface temperature as $T_1$, derive the temperature distribution $T(r)$, state where the maximum temperature occurs and give the heat removed per unit length.`,
          solution: String.raw`**Assumptions:** steady; radial 1-D; uniform $\dot q$; constant $k$.

![Hollow cylinder with generation, insulated outside and cooled inside](fig/practice-generation-P8a.svg)

**Governing equation:** $\dfrac1r\dfrac{d}{dr}\left(r\dfrac{dT}{dr}\right) + \dfrac{\dot q}{k} = 0$.

**BCs:** $dT/dr = 0$ at $r = r_2$ (insulated); $T = T_1$ at $r = r_1$.

### 1. Integrate
$$r\frac{dT}{dr} = -\frac{\dot qr^2}{2k} + C_1,\qquad T = -\frac{\dot qr^2}{4k} + C_1\ln r + C_2$$

(Here $r = 0$ is not in the solid, so the $\ln r$ term stays.)

### 2. Apply the BCs
- At $r_2$: $0 = -\dfrac{\dot qr_2^2}{2k} + C_1 \Rightarrow C_1 = \dfrac{\dot qr_2^2}{2k}$.
- At $r_1$: $C_2 = T_1 + \dfrac{\dot qr_1^2}{4k} - \dfrac{\dot qr_2^2}{2k}\ln r_1$.

$$T(r) - T_1 = \frac{\dot q}{4k}(r_1^2 - r^2) + \frac{\dot qr_2^2}{2k}\ln\frac{r}{r_1}$$

### 3. Maximum and heat removed
$dT/dr = \dfrac{\dot q}{2kr}(r_2^2 - r^2) \ge 0$ throughout, so $T$ rises outward and is **maximum at the insulated surface** $r = r_2$:

$$T_{max} - T_1 = \frac{\dot q}{4k}(r_1^2 - r_2^2) + \frac{\dot qr_2^2}{2k}\ln\frac{r_2}{r_1}$$

All heat generated leaves through the inner surface: $q' = \dot q\pi(r_2^2 - r_1^2)$. Check: $-k\,2\pi r_1\,dT/dr|_{r_1} = -\pi\dot q(r_2^2 - r_1^2)$, i.e. flow inward (toward $-r$) ✓.`,
          answer: String.raw`$T - T_1 = \dfrac{\dot q}{4k}(r_1^2 - r^2) + \dfrac{\dot qr_2^2}{2k}\ln(r/r_1)$; maximum at $r_2$; $q' = \dot q\pi(r_2^2 - r_1^2)$, all removed at $r_1$.` },
        { id: "practice-generation-P8b", label: "(b)", marks: "8", topic: "generation",
          sub: "Numbers: inner wall and maximum temperatures of a cooled tube", type: "numerical",
          syllabus: "in", repeats: ["2021-22-Q8a"], origin: "potential", ref: String.raw`Numerical companion to part (a); style of Holman heat-generation exercises`,
          text: String.raw`For $r_1 = 1$ cm, $r_2 = 2$ cm, $k = 25$ W/m·°C and $\dot q = 4\times10^7$ W/m³, the coolant inside is at 50°C with $h = 10{,}000$ W/m²·°C. Find the heat removed per metre, the inner-surface temperature and the maximum temperature.`,
          solution: String.raw`**Given:** $r_1 = 0.01$, $r_2 = 0.02$ m, $k = 25$ W/m·°C, $\dot q = 4\times10^7$ W/m³, $T_c = 50$°C, $h = 10^4$ W/m²·°C.

### 1. Heat removed per metre
$$q' = \dot q\pi(r_2^2 - r_1^2) = (4\times10^7)\pi(4\times10^{-4} - 1\times10^{-4}) = 3.77\times10^4\ \mathrm{W/m}$$

### 2. Inner-surface temperature (convection to the coolant)
Flux at $r_1$: $q'/(2\pi r_1) = 37{,}700/(2\pi\times0.01) = 6.0\times10^5\ \mathrm{W/m^2}$.

$$T_1 = T_c + \frac{q''}{h} = 50 + \frac{6.0\times10^5}{10^4} = 110\ ^\circ\mathrm C$$

### 3. Maximum temperature (at $r_2$)
$$T_{max} - T_1 = \frac{4\times10^7}{4(25)}(10^{-4} - 4\times10^{-4}) + \frac{(4\times10^7)(4\times10^{-4})}{2(25)}\ln 2 = -120 + 221.8 = 101.8\ ^\circ\mathrm C$$

$$T_{max} = 110 + 101.8 = 211.8\ ^\circ\mathrm C$$

**Why it matters:** this is the design check for cooled heat-generating tubes (fuel elements, induction-heated pipes): the coolant film and the solid share the rise, and the hottest point is the insulated face.`,
          answer: String.raw`$q' \approx 37.7$ kW/m; $T_1 = 110$°C; $T_{max} \approx 212$°C at $r_2$.` }
      ] },
    { id: "practice-generation-P9", q: 9, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-generation-P9", label: "", marks: "15", topic: "generation",
          sub: "Sleeved heating cable: generation + insulation + convection", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Ch. 2 (wire with generation and insulation); combines Slides 02 Conduction II slides 14–17 with critical radius; cousin of 2016-17 Q6(b)`,
          text: String.raw`A heating cable has a 2 mm diameter nichrome core (resistivity $1.0\times10^{-6}$ Ω·m, $k = 13$ W/m·°C) carrying 12 A. The core is covered by a 1.5 mm thick ceramic-filled sleeve ($k = 0.5$ W/m·°C). The cable is in air at 25°C with $h = 20$ W/m²·°C (combined). Find the heat generated per metre and per unit volume, the temperatures of the outer sleeve surface, the core surface and the core centre. Would the core run hotter or cooler without the sleeve? Explain.`,
          solution: String.raw`**Given:** $r_1 = 1$ mm, $r_2 = 2.5$ mm, $I = 12$ A, $\rho_e = 1.0\times10^{-6}$ Ω·m, $k_w = 13$, $k_s = 0.5$ W/m·°C, $h = 20$ W/m²·°C, $T_\infty = 25$°C.

![Heating cable: core, sleeve and air with the radial temperature profile](fig/practice-generation-P9.svg)

**Assumptions:** steady; radial 1-D; uniform generation in the core only; constant properties; perfect contact.

### 1. Generation
$$P' = I^2\frac{\rho_e}{\pi r_1^2} = 144\,\frac{1.0\times10^{-6}}{\pi(10^{-3})^2} = 45.8\ \mathrm{W/m},\qquad \dot q = \frac{P'}{\pi r_1^2} = 1.46\times10^7\ \mathrm{W/m^3}$$

### 2. Outside the core: series resistances (per metre)
$$R_s = \frac{\ln(r_2/r_1)}{2\pi k_s} = \frac{\ln 2.5}{2\pi(0.5)} = 0.292,\qquad R_o = \frac{1}{h\,2\pi r_2} = \frac{1}{20(2\pi)(0.0025)} = 3.183\ \ \mathrm{m\,^\circ C/W}$$

Sleeve surface: $T_2 = 25 + 45.8(3.183) = 170.9$°C.

Core surface: $T_w = 170.9 + 45.8(0.292) = 184.3$°C.

### 3. Core centre
$$T_0 = T_w + \frac{\dot qr_1^2}{4k_w} = 184.3 + \frac{(1.46\times10^7)(10^{-3})^2}{4(13)} = 184.3 + 0.28 = 184.6\ ^\circ\mathrm C$$

### 4. Without the sleeve
Same $P'$ from a bare 2 mm core: $T_w = 25 + 45.8/(20\cdot2\pi\cdot0.001) = 390$°C, so the bare core would run about **205°C hotter**.

Reason: the sleeve's critical radius is $r_c = k_s/h = 0.5/20 = 25$ mm, far above the core radius, so the sleeve increases the outer surface and lowers the total resistance ($3.475$ vs $7.96$ m·°C/W).

**Exam tip:** with generation inside a covered wire, the core's own temperature rise ($P'/4\pi k_w$) is usually negligible; the sleeve and the outer film fix the temperature.`,
          answer: String.raw`$P' \approx 45.8$ W/m, $\dot q \approx 1.46\times10^7$ W/m³; sleeve surface $\approx 171$°C, core surface $\approx 184.3$°C, centre $\approx 184.6$°C; bare core would reach $\approx 390$°C (sleeve helps because $r_c = 25$ mm).` }
      ] },
    { id: "practice-generation-P10", q: 10, section: "F", compulsory: false,
      stem: String.raw`Answer briefly.`,
      parts: [
        { id: "practice-generation-P10a", label: "(a)", marks: "4", topic: "generation",
          sub: "Profiles: symmetric vs unequal faces vs one face insulated", type: "sketch",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 02 Conduction II, slides 7–10; sketch style of past finals`,
          text: String.raw`Sketch and describe the steady temperature profile in a plane wall with uniform generation when (i) both faces are at the same temperature, (ii) the faces are at different temperatures, and (iii) one face is insulated.`,
          solution: String.raw`All three are parabolas, $T = -\dfrac{\dot q}{2k}x^2 + C_1x + C_2$, curving downward (concave down) with the same curvature $-\dot q/k$.

Sketch: $T$ vertical, $x$ horizontal across the wall.
1. **Equal faces ($T_w$ both sides):** a symmetric parabola with the peak $T_0 = T_w + \dot qL^2/(2k)$ at the mid-plane; heat leaves equally through both faces.
2. **Unequal faces ($T_1 > T_2$):** the parabola is shifted toward the hotter face; the maximum lies inside the wall, nearer the hotter face (if generation is strong enough). More heat leaves through the colder face. If $\dot q$ is small, the maximum can fall at or outside the hot face, and heat then flows through the wall from $T_1$ to $T_2$.
3. **One face insulated:** the curve meets the insulated face with zero slope; the maximum is on that face; all heat leaves through the other face. It is half of case 1 with thickness $2L$.

![The three profiles: equal faces, unequal faces, one face insulated](fig/practice-generation-P10a-sol.svg)`,
          answer: String.raw`All concave-down parabolas: peak at mid-plane (equal faces), shifted toward the hotter face (unequal), at the insulated face (one face insulated).` },
        { id: "practice-generation-P10b", label: "(b)", marks: "3", topic: "generation",
          sub: "Scaling of the maximum temperature rise", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 02 Conduction II, slides 10 and 14 (T0 expressions)`,
          text: String.raw`A cylindrical fuel rod with fixed $\dot q$ has its diameter doubled. How does the centre-to-surface temperature difference change? What if instead $k$ is doubled?`,
          solution: String.raw`$T_0 - T_w = \dot qR^2/(4k)$.
- Doubling the diameter doubles $R$, so the rise grows by a factor of $2^2 = 4$ (more heat must travel a longer path).
- Doubling $k$ halves the rise.
- In terms of the heat per metre $P' = \dot q\pi R^2$, the rise is $P'/(4\pi k)$: for a fixed power per metre it does not depend on $R$.`,
          answer: String.raw`$\Delta T \propto \dot qR^2/k$: doubling $D$ gives 4 times the rise; doubling $k$ halves it.` },
        { id: "practice-generation-P10c", label: "(c)", marks: "4", topic: "generation",
          sub: "Sphere with uniform generation: T0 = q̇R²/6k + Tw", type: "derivation",
          syllabus: "partial", repeats: [], origin: "potential", ref: String.raw`Holman Sec. 2-9 analogue for a sphere (not worked in the slides); cousin of 2012-13 Q1(c) (spherical reactor)`,
          text: String.raw`By an energy balance on a sphere of radius $r$ inside a solid sphere of radius $R$ with uniform generation, show that $T_0 = T_w + \dot qR^2/(6k)$.`,
          solution: String.raw`> The slides derive only the plane wall and the cylinder; the sphere follows the same steps.

**Assumptions:** steady; radial; uniform $\dot q$; constant $k$; surface at $T_w$.

1. Heat generated inside radius $r$ must be conducted out through the sphere of radius $r$:
$$-k\,4\pi r^2\frac{dT}{dr} = \dot q\,\frac43\pi r^3\ \Rightarrow\ \frac{dT}{dr} = -\frac{\dot qr}{3k}$$
2. Integrate from $r$ to $R$: $T(r) - T_w = \dfrac{\dot q}{6k}(R^2 - r^2)$.
3. At $r = 0$: $T_0 = T_w + \dfrac{\dot qR^2}{6k}$.

So the denominators go 2 (slab), 4 (cylinder), 6 (sphere): more surface per unit volume gives a smaller rise.`,
          answer: String.raw`$T - T_w = \dot q(R^2 - r^2)/(6k)$, so $T_0 = T_w + \dot qR^2/(6k)$.` }
      ] }
  ] });
