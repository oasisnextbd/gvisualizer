QB.paper({ year: "Practice", set: "Critical insulation", date: "", marks: 0, practice: true,
  rules: String.raw`Practice set on the critical radius of insulation: cylinder and sphere derivations, and numericals on whether adding insulation raises or lowers the heat loss (small pipes, wires, beads). S = slide derivation, example and variation, F = exam-style problems.`,
  questions: [
    { id: "practice-insulation-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-insulation-P1", label: "", marks: "", topic: "insulation",
          sub: "Derivation: critical radius for a cylinder, r_c = k/h", type: "derivation",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 02 Conduction I, slides 38–40 (critical thickness of insulation, Holman Fig. 2-7)`,
          text: String.raw`A pipe of outer radius $r_i$ at $T_i$ is covered with insulation of conductivity $k$ to an outer radius $r_o$ and loses heat by convection ($h$) to $T_\infty$. Show that there is a critical radius $r_o = k/h$ at which the heat loss is a maximum. Sketch $q$ against $r_o$ and explain what it means for insulating a pipe.`,
          solution: String.raw`**Assumptions (slides):** (1) steady state; (2) 1-D radial heat flow; (3) negligible wall resistance (pipe surface at $T_i$); (4) constant insulation properties; (5) radiation between surface and surroundings neglected (or lumped into $h$); $h$ independent of $r_o$.

### 1. Heat loss from the thermal network
Insulation and outer film are in series:

$$R_{ins} = \frac{\ln(r_o/r_i)}{2\pi kL},\qquad R_{conv} = \frac{1}{2\pi r_oLh}$$

$$q = \frac{2\pi L\,(T_i - T_\infty)}{\dfrac{\ln(r_o/r_i)}{k} + \dfrac{1}{r_oh}}$$

### 2. Extremum
Adding insulation raises $R_{ins}$ (log term grows) but lowers $R_{conv}$ (outer area grows). Differentiate with respect to $r_o$:

$$\frac{dq}{dr_o} = \frac{-2\pi L(T_i - T_\infty)\left(\dfrac{1}{kr_o} - \dfrac{1}{hr_o^2}\right)}{\left[\dfrac{\ln(r_o/r_i)}{k} + \dfrac{1}{r_oh}\right]^2} = 0$$

$$\frac{1}{kr_o} = \frac{1}{hr_o^2}\ \Rightarrow\ r_{o,cr} = \frac{k}{h}$$

### 3. Maximum, not minimum
The total resistance $R'(r_o) = \ln(r_o/r_i)/k + 1/(r_oh)$ has

$$\frac{d^2R'}{dr_o^2} = -\frac{1}{kr_o^2} + \frac{2}{hr_o^3} = \frac{h^2}{k^3}\,(-1+2) > 0\ \ \text{at } r_o = k/h$$

so $R'$ is a **minimum** and $q$ a **maximum** at $r_c = k/h$.

### 4. Sketch and meaning
Sketch: $q$ (vertical) against $r_o$ (horizontal), starting at $r_o = r_i$ with $q_{bare}$; the curve rises to a peak $q_{max}$ at $r_c = k/h$, then falls slowly, crossing $q_{bare}$ again at some larger radius and tending to zero.
- If $r_i < r_c$, adding insulation **increases** the loss until $r_o = r_c$; it must be thick enough to pass the second crossing before it saves any heat (or use a material of lower $k$, which lowers $r_c$).
- If $r_i \ge r_c$, any insulation reduces the loss.
- For ordinary steam pipes $r_c$ is a few mm (e.g. $k = 0.04$, $h = 10$ gives 4 mm), so the effect matters only for wires, small tubes and low $h$. For electric wires it is useful: a cover near $r_c$ dissipates more heat and keeps the conductor cooler.

![Heat loss against outer radius: maximum at r_c = k/h](fig/common-critical-radius.svg)`,
          answer: String.raw`$q = 2\pi L\Delta T/[\ln(r_o/r_i)/k + 1/(r_oh)]$; $dq/dr_o = 0 \Rightarrow r_c = k/h$, a maximum of heat loss.` }
      ] },
    { id: "practice-insulation-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-insulation-P2", label: "", marks: "", topic: "insulation",
          sub: "Asbestos vs fiberglass on a 5 cm pipe (slide example)", type: "numerical",
          syllabus: "in", repeats: ["2011-12-Q6c"], origin: "slides", ref: String.raw`Slides 02 Conduction I, slides 41–42 (asbestos on a 200°C, 5 cm pipe; fiberglass alternative); also in 2011-12 Q6(c)`,
          text: String.raw`Calculate the critical radius of insulation for asbestos ($k = 0.17$ W/m·°C) on a pipe exposed to room air at 20°C with $h = 3.0$ W/m²·°C. Calculate the heat loss from a 200°C, 5.0 cm diameter pipe when it is covered with the critical radius of insulation and when it is bare. What happens if fiberglass ($k = 0.04$ W/m·°C) is used instead?`,
          solution: String.raw`**Given:** $k = 0.17$ W/m·°C, $h = 3.0$ W/m²·°C, $r_i = 2.5$ cm, $T_i = 200$°C, $T_\infty = 20$°C.

![q/L against r_o for asbestos and fiberglass on the 5 cm pipe](fig/practice-insulation-P2.svg)

**Assumptions:** as in the derivation (steady, radial, pipe wall at 200°C, $h$ constant, radiation neglected).

### 1. Critical radius
$$r_c = \frac{k}{h} = \frac{0.17}{3.0} = 0.0567\ \mathrm m = 5.67\ \mathrm{cm}$$

### 2. Loss with insulation to $r_c$
$$\frac qL = \frac{2\pi(T_i - T_\infty)}{\dfrac{\ln(r_c/r_i)}{k} + \dfrac{1}{r_ch}} = \frac{2\pi(200-20)}{\dfrac{\ln(5.67/2.5)}{0.17} + \dfrac{1}{(0.0567)(3.0)}} = 105.7\ \mathrm{W/m}$$

### 3. Bare pipe
$$\frac qL = h(2\pi r_i)(T_i - T_\infty) = 3.0(2\pi)(0.025)(180) = 84.8\ \mathrm{W/m}$$

So 3.17 cm of asbestos *increases* the loss by $105.7/84.8 - 1 = 25\%$.

### 4. Fiberglass
$$r_c = \frac{0.04}{3.0} = 0.0133\ \mathrm m = 1.33\ \mathrm{cm} < r_i = 2.5\ \mathrm{cm}$$

so any thickness of fiberglass decreases the loss (e.g. 2 cm of fiberglass gives $q/L = 51$ W/m).

**Exam tip:** compare $r_c$ with the bare radius first; that one line decides the answer. In practice radiation raises the effective $h$ and lowers $r_c$ further.`,
          answer: String.raw`$r_c = 5.67$ cm; $q/L = 105.7$ W/m at $r_c$ vs 84.8 W/m bare (25% more); fiberglass $r_c = 1.33$ cm $< 2.5$ cm, so it always reduces the loss.` }
      ] },
    { id: "practice-insulation-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-insulation-P3", label: "", marks: "", topic: "insulation",
          sub: "Heat loss vs insulation thickness on a 1 cm tube", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 02 Conduction I, slides 40–41 (q vs r_o curve, critical radius)`,
          text: String.raw`A 1 cm OD tube at 120°C is in air at 20°C with $h = 8$ W/m²·°C. It is to be covered with insulation of $k = 0.08$ W/m·°C. (a) Find the critical radius. (b) Tabulate the heat loss per metre for insulation thicknesses 0, 0.25, 0.5, 1.0, 1.5, 2.5 and 3.5 cm. (c) What thickness is needed just to get back to the bare-tube loss, and what thickness halves it?`,
          solution: String.raw`**Given:** $r_i = 0.005$ m, $T_i - T_\infty = 100$°C, $k = 0.08$ W/m·°C, $h = 8$ W/m²·°C.

![Heat loss per metre against insulation thickness for the 1 cm tube](fig/practice-insulation-P3.svg)

**Assumptions:** steady radial; tube wall at 120°C; $h$ unchanged by the outer radius; radiation neglected.

### (a) Critical radius
$$r_c = \frac kh = \frac{0.08}{8} = 0.01\ \mathrm m = 1.0\ \mathrm{cm}\quad(> r_i = 0.5\ \mathrm{cm})$$

### (b) Heat loss
$$q' = \frac{2\pi(100)}{\ln(r_o/0.005)/0.08 + 1/(8r_o)}$$

| Thickness, cm | $r_o$, cm | $q'$, W/m |
|---|---|---|
| 0 (bare) | 0.5 | 25.1 |
| 0.25 | 0.75 | 28.9 |
| 0.5 | 1.0 ($r_c$) | 29.7 (max) |
| 1.0 | 1.5 | 28.5 |
| 1.5 | 2.0 | 26.6 |
| 2.5 | 3.0 | 23.7 |
| 3.5 | 4.0 | 21.6 |

(Bare: $q' = h\,2\pi r_i\,\Delta T = 8(2\pi)(0.005)(100) = 25.1$ W/m.)

### (c) Break-even and halving
Setting $q'(r_o) = 25.1$ W/m and solving by trial gives $r_o = 2.46$ cm, a thickness of **1.96 cm**: any layer thinner than about 2 cm *increases* the loss. Halving the loss ($q' = 12.6$ W/m) needs $r_o = 26.3$ cm, about **25.8 cm** of insulation, which is impractical. A material with $k$ well below $hr_i = 0.04$ W/m·°C is the right choice here.

**Why it matters:** the maximum is broad and flat, so being "near" $r_c$ is still wasteful over a wide range of thickness.`,
          answer: String.raw`$r_c = 1.0$ cm; $q'$ rises from 25.1 W/m (bare) to 29.7 W/m at $r_c$; break-even thickness $\approx 2.0$ cm; halving needs $\approx 26$ cm.` }
      ] },
    { id: "practice-insulation-P4", q: 4, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-insulation-P4a", label: "(a)", marks: "10", topic: "insulation",
          sub: "Derivation: critical radius for a sphere, r_c = 2k/h", type: "derivation",
          syllabus: "in", repeats: ["2012-13-Q1a"], origin: "potential", ref: String.raw`Same method as Slides 02 slides 38–40 applied to a sphere; asked in 2012-13 Q1(a)`,
          text: String.raw`Derive the critical radius of insulation for a sphere of radius $r_i$ at $T_i$, insulated to $r_o$ with conductivity $k$ and exposed to convection $h$ at $T_\infty$. Show that it is a maximum of heat loss.`,
          solution: String.raw`**Assumptions:** steady; radial 1-D; constant $k$; $h$ independent of $r_o$; radiation neglected; sphere surface at $T_i$.

### 1. Thermal network
$$R_{ins} = \frac{r_o - r_i}{4\pi kr_ir_o} = \frac{1}{4\pi k}\left(\frac1{r_i} - \frac1{r_o}\right),\qquad R_{conv} = \frac{1}{4\pi r_o^2h}$$

$$q = \frac{4\pi\,(T_i - T_\infty)}{\dfrac1k\left(\dfrac1{r_i} - \dfrac1{r_o}\right) + \dfrac{1}{hr_o^2}}$$

### 2. Set $dq/dr_o = 0$
Only the denominator $D(r_o)$ depends on $r_o$; $q$ is extreme where $dD/dr_o = 0$:

$$\frac{dD}{dr_o} = \frac{1}{kr_o^2} - \frac{2}{hr_o^3} = 0\ \Rightarrow\ r_{c,sphere} = \frac{2k}{h}$$

### 3. Nature of the extremum
$$\frac{d^2D}{dr_o^2} = -\frac{2}{kr_o^3} + \frac{6}{hr_o^4} = \frac{1}{r_o^3}\left(-\frac2k + \frac{6}{hr_o}\right) = \frac{1}{r_o^3}\left(-\frac2k + \frac3k\right) > 0\ \ \text{at } r_o = 2k/h$$

$D$ is a minimum, so $q$ is a **maximum** at $r_c = 2k/h$, twice the cylinder value. Insulating a sphere with $r_i < 2k/h$ increases the loss at first.`,
          answer: String.raw`$q = 4\pi\Delta T/[(1/r_i - 1/r_o)/k + 1/(hr_o^2)]$; $dq/dr_o = 0 \Rightarrow r_c = 2k/h$ (a maximum).` },
        { id: "practice-insulation-P4b", label: "(b)", marks: "8", topic: "insulation",
          sub: "Coated spherical bead: does the coating help?", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Prob. 2-series on critical radius of a sphere; numerical companion to part (a)`,
          text: String.raw`A spherical electronic sensor of 12 mm diameter has its surface at 90°C in air at 20°C ($h = 20$ W/m²·°C). It is to be coated with epoxy ($k = 0.1$ W/m·°C). Find the critical radius, the heat loss bare and at the critical radius, and the coating radius at which the loss returns to the bare value. What is the least loss that any thickness of coating could achieve?`,
          solution: String.raw`**Given:** $r_i = 0.006$ m, $\Delta T = 70$°C, $k = 0.1$ W/m·°C, $h = 20$ W/m²·°C.

![Heat loss from the coated sensor against coating radius](fig/practice-insulation-P4b.svg)

**Assumptions:** as in (a); sensor surface held at 90°C.

### 1. Critical radius
$$r_c = \frac{2k}{h} = \frac{2(0.1)}{20} = 0.01\ \mathrm m = 10\ \mathrm{mm}\ (> r_i = 6\ \mathrm{mm})$$

### 2. Bare and at $r_c$
Bare: $q = h\,4\pi r_i^2\,\Delta T = 20(4\pi)(0.006)^2(70) = 0.633$ W.

At $r_c$:
$$q = \frac{4\pi(70)}{\dfrac{1}{0.1}\left(\dfrac{1}{0.006} - \dfrac{1}{0.01}\right) + \dfrac{1}{20(0.01)^2}} = \frac{879.6}{666.7 + 500} = 0.754\ \mathrm W\ \ (+19\%)$$

### 3. Break-even radius
Set the denominator equal to the bare value $1/(hr_i^2) = 1388.9$:

$$10\left(166.67 - \frac{1}{r_o}\right) + \frac{1}{20r_o^2} = 1388.9$$

The root above $r_c$ is $r_o = 0.030$ m (check: $1333.3 + 55.6 = 1388.9$ ✓), i.e. a coating 24 mm thick.

### 4. Lower limit
As $r_o \to \infty$, $q \to 4\pi kr_i\Delta T = 4\pi(0.1)(0.006)(70) = 0.528$ W: even an infinitely thick coating saves only 17%.

**Note:** for a sphere this limit is below the bare loss only if $r_i > k/h$ ($= r_c/2$). If $r_i \le k/h$, any coating at all increases the loss.`,
          answer: String.raw`$r_c = 10$ mm; bare 0.633 W, at $r_c$ 0.754 W; returns to bare at $r_o = 30$ mm; limit 0.528 W however thick the coating.` }
      ] },
    { id: "practice-insulation-P5", q: 5, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-insulation-P5", label: "", marks: "15", topic: "insulation",
          sub: "PVC-covered copper wire: insulation raises the current rating", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel ch. 3 (insulated electric wire); cousin of 2016-17 Q6(b)`,
          text: String.raw`A 2 mm diameter copper wire (electrical resistivity $1.72\times10^{-8}$ Ω·m) runs in still air at 30°C with $h = 10$ W/m²·°C. The conductor temperature must not exceed 75°C. PVC insulation ($k = 0.16$ W/m·°C) is available.

(a) Find the critical radius of the PVC. **[3]**

(b) Find the maximum heat dissipation per metre and the allowable current for (i) a bare wire, (ii) a standard 1 mm PVC cover, and (iii) a cover at the critical radius. **[9]**

(c) Comment on the result. **[3]**`,
          solution: String.raw`**Given:** $r_i = 0.001$ m, $T_i = 75$°C, $T_\infty = 30$°C, $\Delta T = 45$°C, $k = 0.16$ W/m·°C, $h = 10$ W/m²·°C, $\rho_e = 1.72\times10^{-8}$ Ω·m.

![Allowable current against PVC outer radius](fig/practice-insulation-P5.svg)

**Assumptions:** steady; radial 1-D; copper is nearly isothermal (its $k \approx 400$), so the PVC inner surface is at the conductor temperature; $h$ constant; radiation neglected; contact perfect.

### (a) Critical radius
$$r_c = \frac kh = \frac{0.16}{10} = 0.016\ \mathrm m = 16\ \mathrm{mm}\ \gg r_i = 1\ \mathrm{mm}$$

### (b) Dissipation and current
$$q' = \frac{2\pi\,\Delta T}{\ln(r_o/r_i)/k + 1/(hr_o)}$$

Electrical resistance per metre: $R' = \rho_e/(\pi r_i^2) = 1.72\times10^{-8}/(\pi\times10^{-6}) = 5.47\times10^{-3}$ Ω/m. At steady state $I^2R' = q'$, so $I = \sqrt{q'/R'}$.

| Case | $r_o$, mm | $q'$, W/m | $I_{max}$, A |
|---|---|---|---|
| Bare | 1 | $10(2\pi)(0.001)(45) = 2.83$ | 22.7 |
| 1 mm PVC | 2 | $\dfrac{2\pi(45)}{\ln 2/0.16 + 1/(10\times0.002)} = 5.20$ | 30.8 |
| Critical | 16 | $\dfrac{2\pi(45)}{\ln 16/0.16 + 1/(10\times0.016)} = 12.0$ | 46.8 |

With the 1 mm cover the outer PVC surface is at $30 + 5.20/(10\cdot2\pi\cdot0.002) = 71$°C.

### (c) Comment
Because the wire radius is far below $r_c$, the PVC acts as an extended surface: the 1 mm cover nearly doubles the heat the wire can shed and raises the safe current by 36% compared with a bare wire; a cover at $r_c$ would allow about twice the bare current. Electrical insulation on thin wires therefore also *helps* cooling, the useful side of the critical-radius effect.`,
          answer: String.raw`$r_c = 16$ mm; $q'_{max}$ = 2.83 / 5.20 / 12.0 W/m and $I_{max}$ ≈ 22.7 / 30.8 / 46.8 A for bare / 1 mm PVC / critical cover.` }
      ] },
    { id: "practice-insulation-P6", q: 6, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-insulation-P6", label: "", marks: "15", topic: "insulation",
          sub: "Small hot pipe: critical radius with combined convection + radiation", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Sec. 2-6 remark on radiation; uses h_combined from Slides 01 slide 47; cousin of 2023-24 Q4(b)`,
          text: String.raw`A 1.2 cm OD tube carrying hot fluid has its surface at 150°C. It stands in a room at 25°C (air and walls) with a convection coefficient of 6 W/m²·°C; the surface emissivity is 0.9 bare or insulated. Insulation with $k = 0.07$ W/m·°C is available.

(a) Find the critical radius based on convection only and say what it predicts. **[3]**

(b) Find the bare-tube loss per metre including radiation. **[4]**

(c) Using a combined coefficient evaluated at an estimated insulated-surface temperature of 50°C, find the true critical radius and the loss with 2 cm of insulation. Check the assumed surface temperature. **[8]**`,
          solution: String.raw`**Given:** $r_i = 0.006$ m, $T_i = 150$°C $= 423.15$ K, $T_\infty = T_{surr} = 25$°C $= 298.15$ K, $h_{conv} = 6$ W/m²·°C, $\varepsilon = 0.9$, $k = 0.07$ W/m·°C.

![Insulated tube with convection and radiation from the outer surface](fig/practice-insulation-P6.svg)

**Assumptions:** steady radial; tube surface at 150°C; room large compared with the tube; $h_{conv}$ independent of $r_o$.

### (a) Convection only
$r_c = k/h_{conv} = 0.07/6 = 11.7$ mm $> r_i = 6$ mm. This predicts that thin insulation would *increase* the loss.

### (b) Bare tube
$$h_{rad} = \varepsilon\sigma(T_s + T_{surr})(T_s^2 + T_{surr}^2) = 0.9(5.67\times10^{-8})(721.3)(423.15^2 + 298.15^2) = 9.86\ \mathrm{W/m^2\,^\circ C}$$

$$q'_{bare} = (h_{conv} + h_{rad})\,2\pi r_i\,(T_i - T_\infty) = (6 + 9.86)(2\pi)(0.006)(125) = 74.8\ \mathrm{W/m}$$

(Radiation is 62% of the bare loss.)

### (c) With radiation included
At an estimated surface temperature of 50°C (323.15 K):

$$h_{rad} = 0.9(5.67\times10^{-8})(323.15 + 298.15)(323.15^2 + 298.15^2) = 6.13,\qquad h_{comb} = 12.13\ \mathrm{W/m^2\,^\circ C}$$

$$r_c = \frac{k}{h_{comb}} = \frac{0.07}{12.13} = 5.8\ \mathrm{mm} < r_i = 6\ \mathrm{mm}$$

so insulation reduces the loss from the first millimetre.

With 2 cm insulation ($r_o = 0.026$ m):

$$q' = \frac{2\pi(125)}{\dfrac{\ln(0.026/0.006)}{0.07} + \dfrac{1}{0.026(12.13)}} = \frac{785.4}{20.95 + 3.17} = 32.6\ \mathrm{W/m}$$

Surface temperature check: $T_o = 25 + q'/(h_{comb}2\pi r_o) = 25 + 32.6/(12.13\cdot2\pi\cdot0.026) = 41.4$°C. Repeating with $h_{rad}$ at about 42°C ($h_{comb} = 11.9$) changes $q'$ by less than 0.5% ($q' = 32.5$ W/m, $T_o = 41.7$°C), so the estimate is good enough.

**Why it matters:** radiation adds to the outer coefficient, and a larger $h$ means a smaller $r_c$. Using convection alone here would give the wrong conclusion; the 2 cm layer actually cuts the loss by about 56%.`,
          answer: String.raw`(a) $r_c = 11.7$ mm (convection only, misleading); (b) $q'_{bare} \approx 74.8$ W/m; (c) $h_{comb} \approx 12.1$, $r_c \approx 5.8$ mm $< 6$ mm, $q' \approx 32.6$ W/m with 2 cm, surface $\approx 41$°C.` }
      ] },
    { id: "practice-insulation-P7", q: 7, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-insulation-P7", label: "", marks: "18", topic: "insulation",
          sub: "Hot-water copper tube: break-even thickness, rubber vs foam", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel ch. 3 critical-radius problems; cousin of 2023-24 Q4(b) and 2014-15 Q2(a) ("what would you do if the bare radius is below r_c?")`,
          text: String.raw`A 12 mm OD copper hot-water tube has its outer surface at 80°C in air at 20°C ($h = 9$ W/m²·°C). A plumber proposes a flexible rubber sleeve ($k = 0.12$ W/m·°C).

(a) Find the critical radius and the maximum possible loss per metre. **[4]**

(b) Find the rubber thickness at which the loss just equals the bare-tube loss, and the thickness needed to reduce it by 30%. **[8]**

(c) Repeat the 30% reduction for polyethylene foam ($k = 0.035$ W/m·°C), and compare 10 mm of each. Recommend a material. **[6]**`,
          solution: String.raw`**Given:** $r_i = 0.006$ m, $\Delta T = 60$°C, $h = 9$ W/m²·°C.

![Heat loss against outer radius for rubber and PE foam on the 12 mm tube](fig/practice-insulation-P7.svg)

**Assumptions:** steady radial; tube surface at 80°C; $h$ constant; radiation neglected.

$$q'(r_o) = \frac{2\pi\,\Delta T}{\ln(r_o/r_i)/k + 1/(hr_o)},\qquad q'_{bare} = h\,2\pi r_i\,\Delta T = 9(2\pi)(0.006)(60) = 20.4\ \mathrm{W/m}$$

### (a) Rubber
$$r_c = \frac kh = \frac{0.12}{9} = 13.3\ \mathrm{mm}$$

$$q'_{max} = \frac{2\pi(60)}{\ln(13.3/6)/0.12 + 1/(9\times0.0133)} = 25.2\ \mathrm{W/m}\ \ (24\%\ \text{above bare})$$

### (b) Rubber thicknesses (trial solution of $q'(r_o) = $ target)
- Break-even, $q' = 20.4$ W/m: $r_o = 39.5$ mm, thickness **33.5 mm**.
- 30% reduction, $q' = 14.3$ W/m: $r_o = 129$ mm, thickness **123 mm** (absurd for a 12 mm tube).

### (c) Foam
$r_c = 0.035/9 = 3.9$ mm $< 6$ mm, so foam reduces the loss from the start. The 30% target ($q' = 14.3$ W/m) is met at $r_o = 10.4$ mm, a thickness of only **4.4 mm**.

| 10 mm sleeve ($r_o = 16$ mm) | $q'$, W/m |
|---|---|
| Bare | 20.4 |
| Rubber, $k = 0.12$ | 24.9 (worse than bare) |
| Foam, $k = 0.035$ | 10.8 (−47%) |

**Recommendation:** use the foam. For a small tube, the rule is to choose an insulation with $k < hr_i$ ($= 0.054$ W/m·°C here) so that $r_c < r_i$; a high-$k$ sleeve near the critical radius only increases the loss.`,
          answer: String.raw`Rubber: $r_c = 13.3$ mm, $q'_{max} = 25.2$ W/m vs 20.4 bare; break-even 33.5 mm, 30% cut needs 123 mm. Foam: $r_c = 3.9$ mm, 30% cut with 4.4 mm; at 10 mm, rubber 24.9 vs foam 10.8 W/m, so choose the foam.` }
      ] },
    { id: "practice-insulation-P8", q: 8, section: "F", compulsory: false,
      stem: String.raw`Answer briefly.`,
      parts: [
        { id: "practice-insulation-P8a", label: "(a)", marks: "4", topic: "insulation",
          sub: "Why insulation can increase heat loss", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 02 Conduction I, slides 38–40; theory part of 2014-15 Q2(a), 2016-17 Q6(a)`,
          text: String.raw`Explain physically why adding insulation to a small pipe can increase the heat loss. Why is this rarely a concern for steam mains?`,
          solution: String.raw`- Adding insulation does two things: it adds conduction resistance $\ln(r_o/r_i)/(2\pi kL)$, which increases with $r_o$, and it enlarges the outer surface, so the convection resistance $1/(2\pi r_oLh)$ decreases.
- When $r_o < k/h$, the drop in convection resistance outweighs the added conduction resistance: total resistance falls and $q$ rises. Beyond $r_c$ the conduction term wins and $q$ falls.
- For steam mains $r_i$ is several cm while $r_c = k/h$ for good insulation ($k \approx 0.04$) and $h \approx 5$–$20$ is only 2–8 mm. Since $r_i \gg r_c$, every layer reduces the loss.

![Why the loss first rises: Q against r_o with the peak at r_c](fig/common-critical-radius.svg)`,
          answer: String.raw`Extra surface area cuts convection resistance faster than the layer adds conduction resistance while $r_o < k/h$; big pipes already have $r_i \gg r_c$.` },
        { id: "practice-insulation-P8b", label: "(b)", marks: "3", topic: "insulation",
          sub: "Effect of h and k on the critical radius", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Slides 02 Conduction I, slide 40 ("for sufficiently small values of h...")`,
          text: String.raw`How do the convection coefficient and the insulation conductivity affect the critical radius? Under which conditions is the critical radius most important?`,
          solution: String.raw`$r_c = k/h$ (cylinder), $2k/h$ (sphere).
- Lower $h$ (still air, natural convection) means larger $r_c$; high $h$ (forced flow, liquids) means a tiny $r_c$. Radiation adds to $h$ and so reduces $r_c$.
- Higher $k$ means larger $r_c$; good insulators have small $r_c$.
- The effect matters for **small radii, poor insulators and low $h$**: electric wires, thin instrument and refrigerant lines, small beads. With wires it is exploited to raise the current rating.`,
          answer: String.raw`$r_c \propto k/h$: largest for poor insulators in still air on thin wires and tubes.` },
        { id: "practice-insulation-P8c", label: "(c)", marks: "4", topic: "insulation",
          sub: "Remedy when the bare radius is below r_c", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Cousin of 2014-15 Q2(a) and 2020-21 Q8(a) (what to do if the bare radius is below r_c)`,
          text: String.raw`A pipe's bare radius is smaller than the critical radius of the insulation proposed. List what an engineer can do to reduce the heat loss.`,
          solution: String.raw`1. **Choose a lower-$k$ insulation** so that $k/h < r_i$; then any thickness helps (the best fix).
2. **Apply a thickness well beyond the break-even radius** (past the point where $q$ falls back to $q_{bare}$); a layer that only reaches $r_c$ is the worst choice.
3. **Lower the effective outer $h$** where possible, e.g. a low-emissivity (aluminium) jacket that cuts radiation, though this also raises $r_c$, so check the result.
4. If the aim is to *cool* (wires, electronics), keep the outer radius close to $r_c$; that maximises dissipation.`,
          answer: String.raw`Use insulation with $k < hr_i$, or go far beyond the break-even thickness; never stop near $r_c$ if the aim is to save heat.` }
      ] }
  ] });
