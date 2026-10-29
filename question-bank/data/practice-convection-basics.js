QB.paper({ year: "Practice", set: "Convection basics & dimensionless numbers", date: "", marks: 0, practice: true,
  rules: String.raw`Buckingham π analysis as taught on the slides, meaning of Nu, Pr, Re, St and Gr, bulk (mixing-cup) temperature, film temperature, and LMTD vs arithmetic-mean ΔT in tubes. Slide-type problems first (S), then likely final-exam problems (F).`,
  questions: [
    { id: "practice-convection-basics-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-convection-basics-P1", label: "", marks: "", topic: "convection-basics",
          sub: "Buckingham π: forced convection in a pipe", type: "derivation",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 05, pp. 8–11 (dimensional analysis, forced convection through a circular pipe)`,
          text: String.raw`For forced-convection heat transfer to a fluid flowing in a circular pipe, the heat-transfer coefficient $h$ depends on the mean velocity $\bar v$, the pipe diameter $d$, and the fluid properties $k$, $c_p$, $\rho$ and $\mu$. Using Buckingham's π method with $d$, $k$, $\mu$ and $\bar v$ as the repeating variables, show that
$$\mathrm{Nu} = \phi(\mathrm{Re},\,\mathrm{Pr})$$
and give the physical meaning of each group.`,
          solution: String.raw`**Step 1: list the variables and their dimensions** (M mass, L length, θ time, T temperature; 1 W = 1 kg·m²/s³):

| Variable | Units | Dimensions |
|---|---|---|
| $h$ | W/m²·°C | $M\theta^{-3}T^{-1}$ |
| $\bar v$ | m/s | $L\theta^{-1}$ |
| $d$ | m | $L$ |
| $k$ | W/m·°C | $ML\theta^{-3}T^{-1}$ |
| $c_p$ | J/kg·°C | $L^2\theta^{-2}T^{-1}$ |
| $\rho$ | kg/m³ | $ML^{-3}$ |
| $\mu$ | kg/m·s | $ML^{-1}\theta^{-1}$ |

**Step 2: count the groups.** n = 7 variables and m = 4 fundamental dimensions (M, L, θ, T), so by Buckingham's theorem there are $p = n - m = 3$ dimensionless groups. Take the m = 4 repeating variables $d, k, \mu, \bar v$ (between them they contain all four dimensions) and combine them with one of the remaining variables each:
$$\Pi_1 = d^a k^b \mu^c \bar v^e \rho,\qquad \Pi_2 = d^a k^b \mu^c \bar v^e c_p,\qquad \Pi_3 = d^a k^b \mu^c \bar v^e h$$

**Step 3: $\Pi_1$.**
$$M^0L^0\theta^0T^0 = L^a(ML\theta^{-3}T^{-1})^b(ML^{-1}\theta^{-1})^c(L\theta^{-1})^e(ML^{-3})$$
- T: $-b = 0 \Rightarrow b = 0$
- M: $b + c + 1 = 0 \Rightarrow c = -1$
- θ: $-3b - c - e = 0 \Rightarrow e = 1$
- L: $a + b - c + e - 3 = 0 \Rightarrow a = 1$
$$\Pi_1 = \frac{d\bar v\rho}{\mu} = \mathrm{Re} = \frac{\rho\bar v^2}{\mu\bar v/d} = \frac{\text{inertia force}}{\text{viscous force}}$$

**Step 4: $\Pi_2$.**
$$M^0L^0\theta^0T^0 = L^a(ML\theta^{-3}T^{-1})^b(ML^{-1}\theta^{-1})^c(L\theta^{-1})^e(L^2\theta^{-2}T^{-1})$$
- T: $-b - 1 = 0 \Rightarrow b = -1$
- M: $b + c = 0 \Rightarrow c = 1$
- θ: $-3b - c - e - 2 = 0 \Rightarrow 3 - 1 - e - 2 = 0 \Rightarrow e = 0$
- L: $a + b - c + e + 2 = 0 \Rightarrow a = 0$
$$\Pi_2 = \frac{\mu c_p}{k} = \frac{\nu}{\alpha} = \mathrm{Pr} = \frac{\text{momentum diffusivity}}{\text{thermal diffusivity}}$$

**Step 5: $\Pi_3$.**
$$M^0L^0\theta^0T^0 = L^a(ML\theta^{-3}T^{-1})^b(ML^{-1}\theta^{-1})^c(L\theta^{-1})^e(M\theta^{-3}T^{-1})$$
- T: $-b - 1 = 0 \Rightarrow b = -1$
- M: $b + c + 1 = 0 \Rightarrow c = 0$
- θ: $-3b - c - e - 3 = 0 \Rightarrow e = 0$
- L: $a + b - c + e = 0 \Rightarrow a = 1$
$$\Pi_3 = \frac{hd}{k} = \mathrm{Nu} = \frac{\text{convective heat flux}}{\text{conductive heat flux across the same layer}}$$

**Step 6: result.** The relation $f(\Pi_1, \Pi_2, \Pi_3) = 0$ can be written
$$\mathrm{Nu} = \phi(\mathrm{Re},\,\mathrm{Pr})$$
which experiments fit as a power law $\mathrm{Nu} = C\,\mathrm{Re}^m\mathrm{Pr}^n$ (e.g. Dittus–Boelter, C = 0.023, m = 0.8, n = 0.4 or 0.3). Seven variables have been reduced to three groups, so far fewer experiments are needed.

**Exam tip:** state n, m and p explicitly, show the four exponent equations for each π, and give the physical meaning of each group; that is where the marks are.`,
          answer: String.raw`n = 7, m = 4 → 3 groups: $\Pi_1 = \rho\bar v d/\mu = \mathrm{Re}$, $\Pi_2 = c_p\mu/k = \mathrm{Pr}$, $\Pi_3 = hd/k = \mathrm{Nu}$, so $\mathrm{Nu} = \phi(\mathrm{Re},\mathrm{Pr}) \approx C\,\mathrm{Re}^m\mathrm{Pr}^n$.` }
      ] },

    { id: "practice-convection-basics-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-convection-basics-P2a", label: "(a)", marks: "", topic: "convection-basics",
          sub: "Buckingham π: local h on a flat plate (variation)", type: "derivation",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Variation of Slides 05, pp. 8–11 (same method applied to the flat plate of pp. 13–27)`,
          text: String.raw`For laminar forced flow over a flat plate, the local heat-transfer coefficient at distance $x$ from the leading edge is $h_x = f(u_\infty, x, \rho, \mu, k, c_p)$. Using $x$, $k$, $\mu$ and $u_\infty$ as repeating variables, find the dimensionless groups and write the functional relation.`,
          solution: String.raw`**Step 1: variables.** $h_x$, $u_\infty$, $x$, $\rho$, $\mu$, $k$, $c_p$, so n = 7. The dimensions are the same as in the pipe problem, with $x$ (dimension L) in place of $d$ and $u_\infty$ (dimension $L\theta^{-1}$) in place of $\bar v$. The fundamental dimensions are M, L, θ, T, so m = 4 and $p = 7 - 4 = 3$ groups.

**Step 2: groups.** The algebra is identical to the pipe case with $d \to x$ and $\bar v \to u_\infty$:
$$\Pi_1 = x^a k^b\mu^c u_\infty^e\rho:\quad b = 0,\ c = -1,\ e = 1,\ a = 1 \Rightarrow \Pi_1 = \frac{\rho u_\infty x}{\mu} = \mathrm{Re}_x$$
$$\Pi_2 = x^a k^b\mu^c u_\infty^e c_p:\quad b = -1,\ c = 1,\ e = 0,\ a = 0 \Rightarrow \Pi_2 = \frac{c_p\mu}{k} = \mathrm{Pr}$$
$$\Pi_3 = x^a k^b\mu^c u_\infty^e h_x:\quad b = -1,\ c = 0,\ e = 0,\ a = 1 \Rightarrow \Pi_3 = \frac{h_x x}{k} = \mathrm{Nu}_x$$

**Step 3: relation.**
$$\mathrm{Nu}_x = \phi(\mathrm{Re}_x,\,\mathrm{Pr})$$
The integral boundary-layer analysis of the slides fixes the form: $\mathrm{Nu}_x = 0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$.

**Why it matters:** the length in Re and Nu is the *local* distance $x$, not the plate length. For an average coefficient over a plate of length L you use $\mathrm{Re}_L$ and $\overline{\mathrm{Nu}}_L$.`,
          answer: String.raw`$\mathrm{Re}_x = \rho u_\infty x/\mu$, $\mathrm{Pr} = c_p\mu/k$, $\mathrm{Nu}_x = h_x x/k$, so $\mathrm{Nu}_x = \phi(\mathrm{Re}_x,\mathrm{Pr})$, which the integral method gives as $0.332\,\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$.` },
        { id: "practice-convection-basics-P2b", label: "(b)", marks: "", topic: "convection-basics",
          sub: "Stanton number as an alternative group", type: "theory",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 05, p. 33 (Stanton number in the Reynolds–Colburn analogy)`,
          text: String.raw`Show that the Stanton number $\mathrm{St} = h/(\rho c_p u)$ is also a valid dimensionless group for the same problem, and state what it represents.`,
          solution: String.raw`Any product of powers of π groups is itself dimensionless, so the set {Re, Pr, Nu} can be replaced by {Re, Pr, St} with
$$\frac{\mathrm{Nu}}{\mathrm{Re}\,\mathrm{Pr}} = \frac{hx/k}{(\rho u x/\mu)(c_p\mu/k)} = \frac{h}{\rho c_p u} = \mathrm{St}$$
Dimension check: $\dfrac{M\theta^{-3}T^{-1}}{(ML^{-3})(L^2\theta^{-2}T^{-1})(L\theta^{-1})} = 1$.

**Meaning:**
$$\mathrm{St} = \frac{h\,\Delta T}{\rho c_p u\,\Delta T} = \frac{\text{heat actually transferred to the wall per unit area}}{\text{heat capacity flow carried by the stream per unit area}}$$
St is the natural group in the Reynolds–Colburn analogy, $\mathrm{St}\,\mathrm{Pr}^{2/3} = C_f/2$, which links heat transfer to wall friction. The relation $\mathrm{Nu} = \phi(\mathrm{Re},\mathrm{Pr})$ can therefore be written equally well as $\mathrm{St} = \psi(\mathrm{Re},\mathrm{Pr})$.`,
          answer: String.raw`$\mathrm{St} = \mathrm{Nu}/(\mathrm{Re\,Pr}) = h/(\rho c_p u)$ is dimensionless. It is the ratio of the heat transferred to the heat capacity of the flow, and it is the group used in the Reynolds–Colburn analogy.` }
      ] },

    { id: "practice-convection-basics-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-convection-basics-P3a", label: "(a)", marks: "", topic: "convection-basics",
          sub: "Nusselt number of a fluid layer", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 05, pp. 11–12 (Nu as convection relative to conduction across a fluid layer)`,
          text: String.raw`A horizontal air layer 2 cm thick ($k = 0.0263$ W/m·°C) has its two bounding surfaces 10°C apart. The measured heat flux across the layer is (i) 13.15 W/m², (ii) 40 W/m², (iii) 200 W/m² for three different flow conditions. Find $h$ and Nu (based on the layer thickness) for each case and say what each value of Nu means.`,
          solution: String.raw`**Given:** $L = 0.02$ m, $k = 0.0263$ W/m·°C, $\Delta T = 10$°C; three heat fluxes.

**Find:** $h$ and $\mathrm{Nu} = hL/k$.

![The air layer for Nu = 1, ≈ 3 and ≈ 15](fig/practice-convection-basics-P3a.svg)

1. Heat-transfer coefficient: $h = \dfrac{\dot q}{\Delta T}$.
2. Nusselt number:
$$\mathrm{Nu} = \frac{\dot q_{conv}}{\dot q_{cond}} = \frac{h\Delta T}{k\Delta T/L} = \frac{hL}{k}$$

| Case | $\dot q$ (W/m²) | $h$ (W/m²·°C) | Nu |
|---|---|---|---|
| (i) | 13.15 | 1.315 | 1.00 |
| (ii) | 40 | 4.0 | 3.04 |
| (iii) | 200 | 20 | 15.2 |

3. Interpretation:
- (i) Nu = 1: the flux equals pure conduction, $k\Delta T/L = 0.0263(10)/0.02 = 13.15$ W/m². The fluid is effectively motionless, and heat crosses the layer by conduction only.
- (ii) Nu ≈ 3: fluid motion (for example natural-convection cells) triples the heat transfer compared with conduction.
- (iii) Nu ≈ 15: vigorous (forced) motion enhances heat transfer fifteen-fold.

**Exam tip:** Nu is the dimensionless heat-transfer coefficient. The larger Nu is, the more effective the convection; Nu = 1 means pure conduction.`,
          answer: String.raw`Nu = 1.00, 3.04 and 15.2 (h = 1.32, 4.0 and 20 W/m²·°C). Nu = 1 means pure conduction; a larger Nu means stronger convective enhancement.` },
        { id: "practice-convection-basics-P3b", label: "(b)", marks: "", topic: "convection-basics",
          sub: "Prandtl number and relative boundary-layer thickness", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 05, pp. 6–7 and 25 (Pr ranges; $\delta_t/\delta = \mathrm{Pr}^{-1/3}/1.026$)`,
          text: String.raw`Properties at 20°C are given below. Calculate Pr for each fluid and estimate $\delta_t/\delta$ on a flat plate heated from the leading edge using $\delta_t/\delta = \mathrm{Pr}^{-1/3}/1.026$. Comment on where the result is not valid.

| Fluid | $c_p$ (J/kg·°C) | $\mu$ (kg/m·s) | $k$ (W/m·°C) |
|---|---|---|---|
| Air | 1005 | $1.82\times10^{-5}$ | 0.0257 |
| Water | 4182 | $1.002\times10^{-3}$ | 0.598 |
| Engine oil | 1880 | 0.800 | 0.145 |
| Mercury | 139.4 | $1.552\times10^{-3}$ | 8.20 |`,
          solution: String.raw`**Find:** $\mathrm{Pr} = c_p\mu/k = \nu/\alpha$ and $\zeta = \delta_t/\delta = \mathrm{Pr}^{-1/3}/1.026$.

| Fluid | Pr | $\delta_t/\delta$ | Comment |
|---|---|---|---|
| Air | $\dfrac{1005(1.82\times10^{-5})}{0.0257} = 0.712$ | 1.09 | δ_t ≈ δ (gas, Pr ≈ 1) |
| Water | $\dfrac{4182(1.002\times10^{-3})}{0.598} = 7.01$ | 0.51 | thermal layer about half as thick |
| Engine oil | $\dfrac{1880(0.800)}{0.145} = 1.04\times10^4$ | 0.045 | very thin thermal layer |
| Mercury | $\dfrac{139.4(1.552\times10^{-3})}{8.20} = 0.0264$ | 3.27 | formula not valid |

**Comments:**
- The cubic-profile result assumes $\zeta = \delta_t/\delta < 1$, which the slides say is satisfactory for $\mathrm{Pr} \gtrsim 0.7$. For air it is borderline (ζ ≈ 1.09, but it is still used); for water and oils it is fine.
- For a liquid metal (Pr ≈ 0.01–0.03) heat diffuses much faster than momentum, so $\delta_t \gg \delta$ and the velocity is nearly uniform ($\approx u_\infty$) over most of the thermal layer. The formula does not apply.
- For oils (Pr ≫ 1) momentum diffuses much faster than heat, so the thermal layer lies deep inside the velocity layer.`,
          answer: String.raw`Pr: air 0.71, water 7.0, engine oil $1.04\times10^4$, mercury 0.026. $\delta_t/\delta \approx$ 1.09, 0.51, 0.045; it is invalid for mercury ($\delta_t \gg \delta$; the formula needs Pr ≳ 0.7).` }
      ] },

    { id: "practice-convection-basics-P4", q: 4, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-convection-basics-P4a", label: "(a)", marks: "", topic: "convection-basics",
          sub: "Bulk (mixing-cup) temperature: definition", type: "theory",
          syllabus: "in", repeats: ["2011-12-Q8c", "2012-13-Q4a", "2017-18-Q5c", "2020-21-Q5a"], origin: "slides", ref: String.raw`Slides 05, p. 36 (bulk temperature in tube flow)`,
          text: String.raw`Define the bulk temperature of a fluid flowing in a tube. Why is it called the "mixing-cup" temperature, and when may the simple form $T_b = (T_1 + T_2)/2$ be used?`,
          solution: String.raw`**Definition:** the bulk temperature at a cross-section is the temperature that carries the actual convected energy flow:
$$T_b = \bar T = \frac{\displaystyle\int_0^{r_0}\rho\,2\pi r\,dr\,u\,c_p\,T}{\displaystyle\int_0^{r_0}\rho\,2\pi r\,dr\,u\,c_p}$$
- The numerator is the total energy flow through the section ($\int \dot m\,c_pT$).
- The denominator is (mass flow × specific heat) integrated over the flow area.

**Mixing cup:** if the fluid leaving the section were collected in a cup and mixed adiabatically until uniform, it would reach $T_b$. Each fluid element is weighted by its mass flow, so fast-moving core fluid counts more than slow fluid near the wall. That is why $T_b$ differs from the centre-line temperature and from a plain area average.

**Use:** $T_b$ is the temperature in the energy balance $q = \dot m c_p(T_{b2} - T_{b1})$ and in $q = hA(T_w - T_b)$; tube-flow correlations take their properties at the mean bulk temperature.

**Simplified form:** $T_b \approx (T_1 + T_2)/2$, the arithmetic mean of the inlet and outlet bulk temperatures, is used as the *mean* bulk temperature for property evaluation. The slides stress that it is a less accurate simplification, to be used only when no other information is given.`,
          answer: String.raw`$T_b = \int\rho u c_p T\,dA/\int\rho u c_p\,dA$, the flow-weighted (mixing-cup) temperature that carries the energy flow; $(T_1 + T_2)/2$ is only an approximate mean bulk value.` },
        { id: "practice-convection-basics-P4b", label: "(b)", marks: "", topic: "convection-basics",
          sub: "Bulk vs area-average temperature for given profiles", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 05, pp. 36 and 38 (bulk-temperature integral applied to laminar profiles)`,
          text: String.raw`In laminar flow in a tube of radius $r_0$ the velocity is $u = u_0[1 - (r/r_0)^2]$, and at one section the temperature profile is approximately $T = T_w - (T_w - T_c)[1 - (r/r_0)^2]$ with $T_w = 90$°C and centre-line temperature $T_c = 50$°C. Find the bulk temperature and compare it with the area-average temperature and with $(T_w + T_c)/2$.`,
          solution: String.raw`**Given:** parabolic $u$ and parabolic $T$; $T_w = 90$°C, $T_c = 50$°C; constant $\rho$, $c_p$.

**Find:** $T_b$, $\bar T_{area}$.

![Velocity and temperature profiles in the tube; T_b lies below the area average](fig/practice-convection-basics-P4b.svg)

1. Let $\eta = r/r_0$ and $\phi = (T_w - T)/(T_w - T_c) = 1 - \eta^2$. With constant $\rho c_p$:
$$\frac{T_w - T_b}{T_w - T_c} = \frac{\int_0^1 u\phi\,\eta\,d\eta}{\int_0^1 u\,\eta\,d\eta} = \frac{\int_0^1(1 - \eta^2)^2\eta\,d\eta}{\int_0^1(1 - \eta^2)\eta\,d\eta} = \frac{1/6}{1/4} = \frac23$$
2. Bulk temperature:
$$T_b = 90 - \tfrac23(90 - 50) = 63.3^\circ\mathrm{C}$$
3. Area average (unweighted):
$$\frac{T_w - \bar T_{area}}{T_w - T_c} = 2\int_0^1(1 - \eta^2)\eta\,d\eta = \frac12 \Rightarrow \bar T_{area} = 90 - 20 = 70.0^\circ\mathrm{C}$$
4. $(T_w + T_c)/2 = 70.0$°C here.

**Check:** $T_b$ lies nearer the centre-line value because the fast core fluid (the cold fluid here) carries most of the flow. Both simple averages over-estimate $T_b$ by about 6.7°C, which would give a wall-to-bulk ΔT of 20°C instead of 26.7°C, so h deduced from a measured flux would come out 33% too high.`,
          answer: String.raw`$T_b = T_w - \tfrac23(T_w - T_c) = 63.3$°C; area average = $(T_w + T_c)/2 = 70.0$°C, so the simple averages over-estimate $T_b$.` }
      ] },

    { id: "practice-convection-basics-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-convection-basics-P5", label: "", marks: "", topic: "convection-basics",
          sub: "LMTD vs arithmetic-mean ΔT at constant wall temperature", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 05, p. 37 (mean temperature difference, 40 percent rule)`,
          text: String.raw`Water enters a tube at 20°C; the wall is held at 100°C. Calculate the arithmetic-mean and logarithmic-mean temperature differences, and the percentage error of the arithmetic mean, for exit temperatures of (a) 30°C, (b) 42.86°C, (c) 60°C and (d) 90°C. Use the results to explain the "40 percent" rule on the slides.`,
          solution: String.raw`**Given:** $T_s = 100$°C, $T_i = 20$°C, so $\Delta T_i = T_s - T_i = 80$°C.

![Bulk temperature along the tube for the four exit temperatures](fig/practice-convection-basics-P5.svg)

**Formulas (constant wall temperature):**
$$\Delta T_{am} = \frac{\Delta T_i + \Delta T_e}{2} = T_s - \frac{T_i + T_e}{2} = T_s - T_b$$
$$\Delta T_{ln} = \frac{T_i - T_e}{\ln[(T_s - T_e)/(T_s - T_i)]} = \frac{\Delta T_e - \Delta T_i}{\ln(\Delta T_e/\Delta T_i)}$$

| Case | $T_e$ (°C) | $\Delta T_e$ | $\Delta T_i/\Delta T_e$ | $\Delta T_{am}$ | $\Delta T_{ln}$ | Error of AM |
|---|---|---|---|---|---|---|
| (a) | 30 | 70 | 1.14 | 75.0 | 74.89 | +0.15% |
| (b) | 42.86 | 57.14 | 1.40 | 68.57 | 67.93 | +0.94% |
| (c) | 60 | 40 | 2.0 | 60.0 | 57.71 | +4.0% |
| (d) | 90 | 10 | 8.0 | 45.0 | 33.66 | +34% |

**Explanation:**
- $\Delta T_{ln}$ is exact for constant $T_s$ because it follows the real exponential approach of $T_b$ to $T_s$. $\Delta T_{am}$ always over-estimates it.
- When the larger end difference exceeds the smaller one by no more than 40% (ΔT_i ≤ 1.4 ΔT_e, case (b)), the error is below 1%. Then $\Delta T_{am}$, i.e. $T_s - T_b$ with the mean bulk temperature, is acceptable.
- When the fluid approaches the wall temperature (case d), the arithmetic mean is badly wrong (34%): a tube sized with it would be about 25% too short.

**Exam tip:** use LMTD whenever exit and inlet differences are very unequal. Use the arithmetic mean only where a correlation is defined with it (Sieder–Tate laminar), or when the differences are close.`,
          answer: String.raw`AM error: 0.15% (T_e = 30°C), 0.94% (ΔT_i/ΔT_e = 1.4), 4.0% (60°C), 34% (90°C; ΔT_am = 45 vs ΔT_ln = 33.7°C), so the AM is acceptable only while ΔT_i ≤ 1.4 ΔT_e.` }
      ] },

    { id: "practice-convection-basics-P6", q: 6, section: "S", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-convection-basics-P6", label: "", marks: "", topic: "convection-basics",
          sub: "Film temperature, Re, Nu and St from a plate test", type: "numerical",
          syllabus: "in", repeats: [], origin: "slides", ref: String.raw`Slides 05, pp. 28 and 33 (film temperature; Stanton number)`,
          text: String.raw`Air at 20°C and 1 atm flows at 4 m/s over a flat plate 0.4 m long held at 100°C. A test gives an average heat-transfer coefficient of 12 W/m²·°C. (a) At what temperature should the air properties be taken, and why? (b) Find $\mathrm{Re}_L$, $\overline{\mathrm{Nu}}_L$ and $\overline{\mathrm{St}}$. (c) Compare the measured $\bar h$ with the laminar flat-plate result $\overline{\mathrm{Nu}}_L = 0.664\,\mathrm{Re}_L^{1/2}\mathrm{Pr}^{1/3}$. (d) Find the heat loss per metre of width.

Air at 60°C, 1 atm (CoolProp): $\rho = 1.060$ kg/m³, $\nu = 1.897\times10^{-5}$ m²/s, $k = 0.02880$ W/m·°C, $c_p = 1008$ J/kg·°C, Pr = 0.703.`,
          solution: String.raw`**Given:** $T_\infty = 20$°C, $T_w = 100$°C, $u_\infty = 4$ m/s, $L = 0.4$ m, $\bar h = 12$ W/m²·°C.

![Flat plate in a parallel air stream with its velocity and thermal boundary layers](fig/common-bl-flat-plate.svg)

**(a) Film temperature.**
$$T_f = \frac{T_w + T_\infty}{2} = \frac{100 + 20}{2} = 60^\circ\mathrm{C}$$
The flat-plate analysis assumes constant properties. When wall and free-stream temperatures differ appreciably, the slides recommend evaluating properties at the film temperature, the mean of the two, as the best single representative value for the boundary layer.

**(b) Dimensionless groups.**
1. $\mathrm{Re}_L = \dfrac{u_\infty L}{\nu} = \dfrac{4(0.4)}{1.897\times10^{-5}} = 8.43\times10^4$ (laminar, < $5\times10^5$)
2. $\overline{\mathrm{Nu}}_L = \dfrac{\bar hL}{k} = \dfrac{12(0.4)}{0.02880} = 166.7$
3. $\overline{\mathrm{St}} = \dfrac{\bar h}{\rho c_p u_\infty} = \dfrac{12}{1.060(1008)(4)} = 2.81\times10^{-3}$

Check: $\mathrm{Nu}/(\mathrm{Re\,Pr}) = 166.7/(8.43\times10^4 \times 0.703) = 2.81\times10^{-3}$. ✓

**(c) Comparison with theory.**
$$\overline{\mathrm{Nu}}_L = 0.664(8.43\times10^4)^{1/2}(0.703)^{1/3} = 171.5,\qquad \bar h = \frac{171.5(0.02880)}{0.4} = 12.3\,\mathrm{W/m^2\cdot^\circ C}$$
The measured value is within 3% of the laminar prediction.

**(d) Heat loss** (one side, 1 m width):
$$q = \bar hA(T_w - T_\infty) = 12(0.4 \times 1)(100 - 20) = 384\,\mathrm{W}$$

**Note:** for air, taking properties at 20°C instead happens to give almost the same $\bar h$ (12.45 W/m²·°C), because the changes in ν and k partly cancel. For liquids, whose viscosity changes strongly with temperature, the choice of property temperature matters much more.`,
          answer: String.raw`$T_f = 60$°C; $\mathrm{Re}_L = 8.43\times10^4$ (laminar), $\overline{\mathrm{Nu}} = 167$, $\overline{\mathrm{St}} = 2.81\times10^{-3}$; theory gives $\bar h = 12.3$ W/m²·°C (within 3%); $q = 384$ W per m width.` }
      ] },

    { id: "practice-convection-basics-P7", q: 7, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-convection-basics-P7", label: "", marks: "12", topic: "convection-basics",
          sub: "Buckingham π: natural convection → Nu = φ(Gr, Pr)", type: "derivation",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Sec. 7-1 / Kern Ch. 2 dimensional analysis; cousin of the slide pipe example (Slides 05, pp. 8–11)`,
          text: String.raw`In natural convection from a vertical plate of height $L$, the average heat-transfer coefficient depends on $L$, $k$, $\mu$, $\rho$, $c_p$ and the buoyancy term $g\beta\Delta T$. Using Buckingham's π theorem, show that $\mathrm{Nu} = \phi(\mathrm{Gr}, \mathrm{Pr})$, where $\mathrm{Gr} = g\beta\Delta T L^3/\nu^2$. Why can $g$, $\beta$ and $\Delta T$ be grouped as a single variable?`,
          solution: String.raw`![Natural convection on a vertical plate: velocity and temperature profiles](fig/common-nc-vertical-plate.svg)

**Why one variable:** the buoyancy force per unit volume is $\rho g\beta\Delta T$, so $g$, $\beta$ and $\Delta T$ always appear together as the product $g\beta\Delta T$ (dimensions $L\theta^{-2}$, an acceleration) and can be treated as one variable.

**Step 1: variables.**

| Variable | Dimensions |
|---|---|
| $h$ | $M\theta^{-3}T^{-1}$ |
| $L$ | $L$ |
| $k$ | $ML\theta^{-3}T^{-1}$ |
| $\mu$ | $ML^{-1}\theta^{-1}$ |
| $\rho$ | $ML^{-3}$ |
| $c_p$ | $L^2\theta^{-2}T^{-1}$ |
| $g\beta\Delta T$ | $L\theta^{-2}$ |

n = 7 and m = 4 (M, L, θ, T), so p = 3 groups. Repeating variables: $L, k, \mu, \rho$ (there is no velocity in natural convection).

**Step 2: $\Pi_1 = L^a k^b\mu^c\rho^e h$.**
- T: $-b - 1 = 0 \Rightarrow b = -1$
- θ: $-3b - c - 3 = 0 \Rightarrow c = 0$
- M: $b + c + e + 1 = 0 \Rightarrow e = 0$
- L: $a + b - c - 3e = 0 \Rightarrow a = 1$
$$\Pi_1 = \frac{hL}{k} = \mathrm{Nu}$$

**Step 3: $\Pi_2 = L^a k^b\mu^c\rho^e c_p$.**
- T: $-b - 1 = 0 \Rightarrow b = -1$
- θ: $-3b - c - 2 = 0 \Rightarrow c = 1$
- M: $b + c + e = 0 \Rightarrow e = 0$
- L: $a + b - c - 3e + 2 = 0 \Rightarrow a = 0$
$$\Pi_2 = \frac{c_p\mu}{k} = \mathrm{Pr}$$

**Step 4: $\Pi_3 = L^a k^b\mu^c\rho^e(g\beta\Delta T)$.**
- T: $-b = 0 \Rightarrow b = 0$
- θ: $-3b - c - 2 = 0 \Rightarrow c = -2$
- M: $b + c + e = 0 \Rightarrow e = 2$
- L: $a + b - c - 3e + 1 = 0 \Rightarrow a + 2 - 6 + 1 = 0 \Rightarrow a = 3$
$$\Pi_3 = \frac{g\beta\Delta T L^3\rho^2}{\mu^2} = \frac{g\beta\Delta T L^3}{\nu^2} = \mathrm{Gr}$$

**Step 5: result.**
$$\mathrm{Nu} = \phi(\mathrm{Gr},\,\mathrm{Pr}) \quad\Rightarrow\quad \mathrm{Nu} = C(\mathrm{Gr\,Pr})^n = C\,\mathrm{Ra}^n$$
Gr is the ratio of buoyancy to viscous forces and plays the role that Re plays in forced convection.`,
          answer: String.raw`With $L, k, \mu, \rho$ repeating: $\Pi_1 = hL/k = \mathrm{Nu}$, $\Pi_2 = c_p\mu/k = \mathrm{Pr}$, $\Pi_3 = g\beta\Delta TL^3\rho^2/\mu^2 = \mathrm{Gr}$, so $\mathrm{Nu} = \phi(\mathrm{Gr},\mathrm{Pr}) = C(\mathrm{Gr\,Pr})^n$.` }
      ] },

    { id: "practice-convection-basics-P8", q: 8, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-convection-basics-P8a", label: "(a)", marks: "8", topic: "convection-basics",
          sub: "Physical significance of Re, Nu, Pr, St, Gr", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Asked in finals like 2014-15 Q4(a), 2015-16 Q8(d), 2017-18 Q6(c), 2020-21 Q6(b)`,
          text: String.raw`Define the Reynolds, Nusselt, Prandtl, Stanton and Grashof numbers and state the physical significance of each.`,
          solution: String.raw`| Group | Definition | Physical meaning |
|---|---|---|
| Reynolds | $\mathrm{Re} = \dfrac{\rho uL}{\mu} = \dfrac{uL}{\nu}$ | inertia force / viscous force; decides laminar or turbulent flow (tube ≈ 2300, plate $5\times10^5$) |
| Nusselt | $\mathrm{Nu} = \dfrac{hL}{k}$ | dimensionless h: convective flux / conductive flux across the same fluid layer; Nu = 1 means pure conduction |
| Prandtl | $\mathrm{Pr} = \dfrac{c_p\mu}{k} = \dfrac{\nu}{\alpha}$ | momentum diffusivity / thermal diffusivity; fixes $\delta_t/\delta$ ($\approx \mathrm{Pr}^{-1/3}$); a fluid property only |
| Stanton | $\mathrm{St} = \dfrac{h}{\rho c_p u} = \dfrac{\mathrm{Nu}}{\mathrm{Re\,Pr}}$ | heat transferred / heat-capacity flow of the stream; links to friction by $\mathrm{St\,Pr}^{2/3} = C_f/2$ |
| Grashof | $\mathrm{Gr} = \dfrac{g\beta\Delta TL^3}{\nu^2}$ | buoyancy force / viscous force; plays the role of Re in natural convection; $\mathrm{Gr}/\mathrm{Re}^2$ measures mixed convection |

Typical Pr: liquid metals 0.004–0.03, gases about 0.7–1, water 1.7–13, oils 50–100,000.`,
          answer: String.raw`Re: inertia/viscous; Nu: convection/conduction (dimensionless h); Pr: ν/α (momentum vs heat diffusion); St: Nu/(Re Pr) (heat transferred/heat capacity of flow); Gr: buoyancy/viscous.` },
        { id: "practice-convection-basics-P8b", label: "(b)", marks: "4", topic: "convection-basics",
          sub: "Nusselt vs Biot number", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Cousin of 2012-13 Q3(b)`,
          text: String.raw`Both Nu and Bi have the form $hL/k$. Explain the difference.`,
          solution: String.raw`- **Nusselt** $\mathrm{Nu} = hL/k_{fluid}$: $k$ is the conductivity of the **fluid**. It compares convection with conduction inside the same fluid layer, and it is what correlations predict.
- **Biot** $\mathrm{Bi} = hL/k_{solid}$: $k$ is the conductivity of the **solid**, and $h$ is the convection coefficient at its surface. It is the ratio of the internal (conduction) resistance of the solid, $L/k_s$, to the external convection resistance, $1/h$. Bi ≪ 1 (< 0.1) means the solid is nearly isothermal (lumped analysis).

Nu describes the fluid; Bi describes how the solid responds to that fluid.`,
          answer: String.raw`Nu uses $k$ of the fluid (convection vs conduction in the fluid); Bi uses $k$ of the solid (internal vs surface resistance of the body).` },
        { id: "practice-convection-basics-P8c", label: "(c)", marks: "3", topic: "convection-basics",
          sub: "What Nu ≈ 1 means", type: "theory",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Cousin of 2023-24 Q3(c)`,
          text: String.raw`A measurement across a fluid layer gives Nu ≈ 1. What does this say about the heat-transfer mechanism?`,
          solution: String.raw`$\mathrm{Nu} = \dot q_{conv}/\dot q_{cond} = 1$ means the heat flux equals what pure conduction through a stagnant layer would give. Either the fluid is not moving (e.g. a fluid layer heated from above, or a slow, very viscous laminar flow) or the motion does not help. Any bulk fluid motion that carries energy raises Nu above 1.`,
          answer: String.raw`Nu ≈ 1 means the heat transfer is by conduction only: the fluid is effectively stagnant.` }
      ] },

    { id: "practice-convection-basics-P9", q: 9, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-convection-basics-P9", label: "", marks: "15", topic: "convection-basics",
          sub: "Experimental h, Nu and St from an electrically heated tube", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Ch. 6 problems / Çengel Ch. 8 (heated-tube test); cousin of 2011-12 Q7(c)`,
          text: String.raw`Water at 0.12 kg/s enters a 2.0 cm ID tube, 2.5 m long, at 20°C. The tube is wrapped with an electric heater that delivers 10 kW uniformly along its length (well insulated outside). A thermocouple at mid-length reads a wall temperature of 59.0°C. Find (a) the exit temperature, (b) the local heat-transfer coefficient at mid-length, (c) Re, Pr, Nu and St at mid-length, and (d) compare Nu with the Dittus–Boelter equation.

Water at 30°C: $\rho = 995.6$ kg/m³, $\mu = 7.97\times10^{-4}$ kg/m·s, $k = 0.615$ W/m·°C, $c_p = 4178$ J/kg·°C, Pr = 5.42.`,
          solution: String.raw`**Given:** $\dot m = 0.12$ kg/s, $D = 0.02$ m, $L = 2.5$ m, $T_i = 20$°C, $q = 10$ kW (uniform flux), $T_w = 59.0$°C at $x = L/2$.

**Find:** $T_e$, $h$, Re, Pr, Nu, St.

![Electrically heated tube: bulk and wall temperatures rise in parallel](fig/practice-convection-basics-P9.svg)

**Assumptions:** steady, uniform wall flux, no heat loss, properties at 30°C (checked below).

1. **Exit temperature** (energy balance):
$$T_e = T_i + \frac{q}{\dot mc_p} = 20 + \frac{10\,000}{0.12(4178)} = 20 + 19.95 = 39.95^\circ\mathrm{C}$$
With uniform flux, $T_b$ rises linearly, so at mid-length $T_b = 20 + 19.95/2 = 29.97$°C. Properties at 30°C are therefore correct.
2. **Wall heat flux:**
$$q'' = \frac{q}{\pi DL} = \frac{10\,000}{\pi(0.02)(2.5)} = 6.366\times10^4\,\mathrm{W/m^2}$$
3. **Local h at mid-length:**
$$h = \frac{q''}{T_w - T_b} = \frac{6.366\times10^4}{59.0 - 29.97} = 2193\,\mathrm{W/m^2\cdot^\circ C}$$
4. **Dimensionless groups:**
$$\mathrm{Re} = \frac{4\dot m}{\pi D\mu} = \frac{4(0.12)}{\pi(0.02)(7.97\times10^{-4})} = 9585 \quad(\text{turbulent})$$
$$\mathrm{Pr} = 5.42,\qquad \mathrm{Nu} = \frac{hD}{k} = \frac{2193(0.02)}{0.615} = 71.3$$
$$\mathrm{St} = \frac{\mathrm{Nu}}{\mathrm{Re\,Pr}} = \frac{71.3}{9585(5.42)} = 1.37\times10^{-3}$$
(Check: $u_m = \dot m/(\rho\pi D^2/4) = 0.384$ m/s, and $h/(\rho c_pu_m) = 2193/(995.6 \times 4178 \times 0.384) = 1.37\times10^{-3}$. ✓)
5. **Dittus–Boelter** (heating, n = 0.4):
$$\mathrm{Nu} = 0.023\,\mathrm{Re}^{0.8}\mathrm{Pr}^{0.4} = 0.023(9585)^{0.8}(5.42)^{0.4} = 69.3$$
The measured Nu is 2.9% higher, well within the ±25% scatter of the correlation. Validity: $0.6 < \mathrm{Pr} < 100$ ✓; Re ≈ 9600 is above 2500 ✓ (but in the lower turbulent range); $x/D = 62.5 > 10$, so fully developed ✓.

**Exam tip:** with uniform flux, $T_w - T_b$ is the same all along the developed region, so one mid-length reading gives h for the whole developed tube.`,
          answer: String.raw`$T_e = 39.95$°C; $q'' = 6.37\times10^4$ W/m², $h = 2190$ W/m²·°C; Re = 9590, Pr = 5.42, Nu = 71.3, St = $1.37\times10^{-3}$; Dittus–Boelter gives Nu = 69.3 (3% lower).` }
      ] },

    { id: "practice-convection-basics-P10", q: 10, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-convection-basics-P10", label: "", marks: "12", topic: "convection-basics",
          sub: "Bulk temperature from measured u and T profiles", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Holman Sec. 5-10 (bulk temperature); cousin of the bulk-temperature questions in 2011-12 Q8(c) and 2020-21 Q5(a)`,
          text: String.raw`Velocity and temperature were measured across a 2 cm diameter tube carrying water in laminar flow (constant $\rho c_p$):

| $r/r_0$ | 0 | 0.25 | 0.50 | 0.75 | 1.00 |
|---|---|---|---|---|---|
| $u$ (m/s) | 0.1000 | 0.0938 | 0.0750 | 0.0438 | 0 |
| $T$ (°C) | 40.00 | 42.46 | 49.38 | 59.34 | 70.00 |

Calculate the bulk (mixing-cup) temperature with Simpson's rule, and compare it with the arithmetic mean of the wall and centre-line temperatures.`,
          solution: String.raw`**Given:** tabulated $u(r)$, $T(r)$ at $\eta = r/r_0 = 0, 0.25, \ldots, 1$; constant $\rho c_p$.

**Find:** $T_b$.

1. **Definition:** with constant $\rho c_p$ and $dA = 2\pi r\,dr$,
$$T_b = \frac{\int_0^{r_0}uT\,r\,dr}{\int_0^{r_0}u\,r\,dr} = \frac{\int_0^1 uT\eta\,d\eta}{\int_0^1 u\eta\,d\eta}$$
2. **Integrands** ($\Delta\eta = 0.25$):

| η | $u\eta$ | $uT\eta$ |
|---|---|---|
| 0 | 0 | 0 |
| 0.25 | 0.02344 | 0.9952 |
| 0.50 | 0.03750 | 1.8516 |
| 0.75 | 0.03281 | 1.9470 |
| 1.00 | 0 | 0 |

3. **Simpson's rule** $\int \approx \dfrac{\Delta\eta}{3}[f_0 + 4f_1 + 2f_2 + 4f_3 + f_4]$:
$$\int u\eta\,d\eta = \frac{0.25}{3}[0 + 4(0.02344) + 2(0.03750) + 4(0.03281) + 0] = 0.02500$$
$$\int uT\eta\,d\eta = \frac{0.25}{3}[0 + 4(0.9952) + 2(1.8516) + 4(1.9470) + 0] = 1.2893$$
4. **Bulk temperature:**
$$T_b = \frac{1.2893}{0.02500} = 51.6^\circ\mathrm{C}$$
5. **Comparison:** $(T_w + T_c)/2 = (70 + 40)/2 = 55.0$°C, 3.4°C too high. The area average ($2\int T\eta\,d\eta$) is about 56.6°C, even higher.

**Check:** the data follow the laminar constant-flux profile $T - T_c = C[\eta^2 - \eta^4/4]$ with $C = 40$°C, for which the exact result is $T_b = T_c + \tfrac{7}{24}C = 51.67$°C. Simpson's rule is within 0.1°C.

**Why it matters:** $T_w - T_b = 18.4$°C, not 15°C. Using the wrong mean would over-estimate h by about 23%.`,
          answer: String.raw`$\int u\eta\,d\eta = 0.0250$, $\int uT\eta\,d\eta = 1.289$ → $T_b \approx 51.6$°C (exact 51.7°C), versus 55.0°C for $(T_w + T_c)/2$.` }
      ] },

    { id: "practice-convection-basics-P11", q: 11, section: "F", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-convection-basics-P11a", label: "(a)", marks: "8", topic: "convection-basics",
          sub: "Exit temperature for constant wall T: derivation of the exponential law", type: "derivation",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel Sec. 8-4 (constant surface temperature); used on Slides 06 p. 33`,
          text: String.raw`Fluid of mass flow rate $\dot m$ and specific heat $c_p$ flows through a tube of perimeter $p$ whose wall is at constant temperature $T_s$. The average heat-transfer coefficient is $h$. Show that
$$\frac{T_s - T_e}{T_s - T_i} = \exp\left(-\frac{hA_s}{\dot mc_p}\right)$$
and hence that $q = hA_s\Delta T_{ln}$.`,
          solution: String.raw`**Assumptions:** steady flow, constant $h$, $c_p$ and $T_s$; axial conduction negligible.

![Energy balance on an element dx and the exponential approach to T_s](fig/practice-convection-basics-P11a.svg)

1. **Energy balance on a slice $dx$:** the heat convected from the wall raises the bulk temperature:
$$\dot mc_p\,dT_b = h(T_s - T_b)\,p\,dx$$
2. Since $T_s$ is constant, $dT_b = -d(T_s - T_b)$:
$$\frac{d(T_s - T_b)}{T_s - T_b} = -\frac{hp}{\dot mc_p}dx$$
3. **Integrate** from $x = 0$ ($T_b = T_i$) to $x = L$ ($T_b = T_e$), with $A_s = pL$:
$$\ln\frac{T_s - T_e}{T_s - T_i} = -\frac{hA_s}{\dot mc_p} \quad\Rightarrow\quad T_e = T_s - (T_s - T_i)\exp\left(-\frac{hA_s}{\dot mc_p}\right)$$
4. **Heat rate:** $q = \dot mc_p(T_e - T_i) = \dot mc_p[(T_s - T_i) - (T_s - T_e)]$. Substituting $\dot mc_p = -hA_s/\ln[(T_s - T_e)/(T_s - T_i)]$ from step 3:
$$q = hA_s\frac{T_i - T_e}{\ln[(T_s - T_e)/(T_s - T_i)]} = hA_s\,\Delta T_{ln}$$`,
          answer: String.raw`$\dot mc_p\,dT_b = hp(T_s - T_b)dx$ integrated over the tube gives $(T_s - T_e)/(T_s - T_i) = e^{-hA_s/\dot mc_p}$ and $q = hA_s\Delta T_{ln}$.` },
        { id: "practice-convection-basics-P11b", label: "(b)", marks: "10", topic: "convection-basics",
          sub: "Exit temperature: LMTD (exact) vs arithmetic-mean ΔT", type: "numerical",
          syllabus: "in", repeats: [], origin: "potential", ref: String.raw`Style of Çengel Ex. 8-5; contrast with the arithmetic-mean balance on Slides 06 p. 22`,
          text: String.raw`Water ($c_p = 4180$ J/kg·°C) at 0.05 kg/s enters a 1.5 cm ID, 5 m long tube at 15°C. Steam condensing outside keeps the wall at 100°C, and the average inside coefficient is 1200 W/m²·°C. Find the exit temperature and heat rate (i) exactly, using the result of part (a), and (ii) using an arithmetic-mean temperature difference, $q = hA_s[T_s - (T_i + T_e)/2]$. Comment.`,
          solution: String.raw`**Given:** $\dot m = 0.05$ kg/s, $D = 0.015$ m, $L = 5$ m, $T_i = 15$°C, $T_s = 100$°C, $h = 1200$ W/m²·°C.

1. **Area and NTU:**
$$A_s = \pi DL = \pi(0.015)(5) = 0.2356\,\mathrm{m^2},\qquad \frac{hA_s}{\dot mc_p} = \frac{1200(0.2356)}{0.05(4180)} = 1.353$$
2. **(i) Exact (exponential/LMTD):**
$$T_e = 100 - (100 - 15)e^{-1.353} = 100 - 85(0.2585) = 78.0^\circ\mathrm{C}$$
$$q = \dot mc_p(T_e - T_i) = 0.05(4180)(78.0 - 15) = 13.17\,\mathrm{kW}$$
Check: $\Delta T_{ln} = \dfrac{85 - 22.0}{\ln(85/22.0)} = 46.6$°C, and $hA_s\Delta T_{ln} = 1200(0.2356)(46.6) = 13.17$ kW. ✓
3. **(ii) Arithmetic mean:** solve $hA_s\left(T_s - \dfrac{T_i + T_e}{2}\right) = \dot mc_p(T_e - T_i)$, i.e. $282.7(100 - 7.5 - T_e/2) = 209(T_e - 15)$:
$$T_e = \frac{282.7(92.5) + 209(15)}{209 + 141.4} = 83.6^\circ\mathrm{C},\qquad q = 209(83.6 - 15) = 14.34\,\mathrm{kW}$$
4. **Comment:** the end differences are 85°C and 22°C (ratio 3.9, far beyond the 40% limit), so the arithmetic mean over-estimates q by 9% and $T_e$ by 5.6°C. Use the exponential/LMTD form at constant wall temperature unless the end differences are close.`,
          answer: String.raw`NTU = 1.353: exact $T_e = 78.0$°C, $q = 13.2$ kW ($\Delta T_{ln} = 46.6$°C); the arithmetic mean gives 83.6°C and 14.3 kW (+9%).` }
      ] }
  ] });
