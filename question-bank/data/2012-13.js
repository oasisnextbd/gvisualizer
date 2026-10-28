QB.paper({
  year: "2012-13", date: "07/06/2014", marks: 210,
  rules: String.raw`Section A: answer any three of Q1–Q4. Section B: Q5 compulsory + any two of Q6–Q8. A data booklet was supplied.`,
  questions: [
    { id: "2012-13-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q1a", label: "(a)", marks: "10",
          topic: "insulation", sub: "Critical radius of insulation – sphere",
          type: "derivation", syllabus: "partial", repeats: [],
          text: String.raw`Derive a relationship for the critical radius of insulation for a sphere.`,
          solution: String.raw`> The slides derive the cylinder case ($r_c = k/h$); the sphere follows exactly the same steps.

**Assumptions:** steady state, 1-D radial conduction, constant $k$ of insulation, no generation, uniform outside $h$ and $T_\infty$, inner surface of the insulation held at $T_1$ (radius $r_1$), insulation outer radius $r$ (variable).

1. Resistance of a spherical shell (from $Q = -k\,4\pi r^2\,dT/dr$ integrated from $r_1$ to $r$):
$$R_{ins} = \frac{1}{4\pi k}\left(\frac{1}{r_1}-\frac{1}{r}\right)$$
2. Convection resistance on the outer surface:
$$R_{conv} = \frac{1}{h\,4\pi r^2}$$
3. Heat loss:
$$Q = \frac{T_1 - T_\infty}{\dfrac{1}{4\pi k}\left(\dfrac{1}{r_1}-\dfrac{1}{r}\right) + \dfrac{1}{4\pi r^2 h}}$$
4. $Q$ is maximum when the denominator $R_{tot}(r)$ is minimum:
$$\frac{dR_{tot}}{dr} = \frac{1}{4\pi k}\,\frac{1}{r^2} - \frac{2}{4\pi h\, r^3} = 0 \;\Rightarrow\; \boxed{r_c = \frac{2k}{h}}$$
5. Check it is a minimum: $\dfrac{d^2R_{tot}}{dr^2} = -\dfrac{2}{4\pi k r^3} + \dfrac{6}{4\pi h r^4}$; at $r = 2k/h$ this equals $\dfrac{1}{4\pi k r_c^3}\left(-2+3\right) > 0$, so $R_{tot}$ is a minimum and $Q$ a maximum.

**Interpretation:** for $r_1 < r_c$, adding insulation first *increases* heat loss (outer area grows faster than conduction resistance), until $r = r_c$; only beyond $r_c$ does insulation reduce $Q$. For $r_1 \ge r_c$, any insulation reduces $Q$.

**Exam tip:** cylinder $r_c = k/h$, sphere $r_c = 2k/h$ – the sphere value is twice as large.`,
          answer: String.raw`$r_{c,sphere} = 2k/h$ (minimum total resistance, maximum heat loss).` },
        { id: "2012-13-Q1b", label: "(b)", marks: "10",
          topic: "generation", sub: "Electrically heated wire – centre temperature",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A 3.2 mm diameter copper wire 30 cm long has a voltage of 10 V impressed on it. The outer surface of the wire is maintained at 366 K. Calculate the centre temperature of the wire if the thermal conductivity of copper is 50 W/m·K and the resistivity is 65 μΩ·cm.`,
          solution: String.raw`**Given:** $D = 3.2\,\mathrm{mm}$ ($R = 1.6\,\mathrm{mm}$), $L = 0.30\,\mathrm{m}$, $E = 10\,\mathrm{V}$, $T_w = 366\,\mathrm{K}$, $k = 50\,\mathrm{W/m\,K}$, $\rho_e = 65\,\mu\Omega\,\mathrm{cm} = 65\times10^{-8}\,\Omega\,\mathrm{m}$.

**Find:** $T_0$ (centre).

**Assumptions:** steady, 1-D radial, uniform generation, constant $k$ (the value 50 W/m·K is used as given, although real copper is ≈ 386).

1. Cross-section: $A = \pi D^2/4 = 8.042\times10^{-6}\,\mathrm{m^2}$.
2. Electrical resistance: $R_e = \rho_e L/A = (65\times10^{-8})(0.30)/(8.042\times10^{-6}) = 0.02425\,\Omega$.
3. Current and power: $I = E/R_e = 412.4\,\mathrm{A}$; $P = E^2/R_e = 4124\,\mathrm{W}$.
4. Volumetric generation:
$$\dot q = \frac{P}{AL} = \frac{4124}{(8.042\times10^{-6})(0.30)} = 1.709\times10^{9}\,\mathrm{W/m^3}$$
(equivalently $\dot q = E^2/(\rho_e L^2)$).
5. Solid cylinder with generation (slides): $T_0 - T_w = \dfrac{\dot q R^2}{4k}$
$$T_0 - T_w = \frac{(1.709\times10^9)(1.6\times10^{-3})^2}{4(50)} = 21.9\,\mathrm{K}$$
6. $T_0 = 366 + 21.9 = 387.9\,\mathrm{K}$ ($\approx 114.7^\circ\mathrm{C}$).`,
          answer: String.raw`$\dot q = 1.71\times10^9\,\mathrm{W/m^3}$, $T_0 \approx 388\,\mathrm{K}$ (21.9 K above the surface).` },
        { id: "2012-13-Q1c", label: "(c)", marks: "15",
          topic: "generation", sub: "Spherical reactor with insulation, convection + radiation",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`A chemically reacting mixture is stored in a thin-walled spherical container of radius $r_1 = 200$ mm, and the exothermic reaction generates heat at a uniform but temperature-dependent volumetric rate of $\dot q = 5000\exp\left(-\dfrac{75}{T_0}\right)\,\mathrm{W/m^3}$, where $T_0$ is the mixture temperature in kelvins. The reactor vessel is enclosed by an insulating material of outer radius $r_2$. Find the outer surface temperature of the insulation, $T_{s2}$, if you wish to maintain the reactor temperature at $T_0 = T_{r1} = 90^\circ$C under conditions for which $k = 0.05$ W/m·K, $r_2 = 208$ mm, $h = 5\,\mathrm{W/m^2K}$, $\varepsilon = 0.9$, $T_\infty = 25^\circ$C and $T_{surr} = 35^\circ$C.`,
          solution: String.raw`> Radiation exchange with surroundings ($\varepsilon\sigma(T_s^4-T_{sur}^4)$) is only touched on in the intro slides; the rest is spherical conduction + generation.

**Given:** $r_1 = 0.200\,\mathrm{m}$, $r_2 = 0.208\,\mathrm{m}$, $T_0 = 90^\circ\mathrm{C} = 363.15\,\mathrm{K}$, $k = 0.05\,\mathrm{W/m\,K}$, $h = 5\,\mathrm{W/m^2K}$, $\varepsilon = 0.9$, $T_\infty = 298.15\,\mathrm{K}$, $T_{sur} = 308.15\,\mathrm{K}$.

**Find:** $T_{s2}$.

**Assumptions:** steady state; well-mixed contents at $T_0$; thin container wall (no resistance); 1-D radial conduction in the insulation; all heat generated leaves the outer surface by convection + radiation.

1. Generation rate at $T_0 = 363.15$ K:
$$\dot q = 5000\exp(-75/363.15) = 4067\,\mathrm{W/m^3}$$
2. Total heat released:
$$Q = \dot q\,\tfrac{4}{3}\pi r_1^3 = 4067\times\tfrac{4}{3}\pi(0.2)^3 = 136.3\,\mathrm{W}$$
3. Outer surface energy balance (area $A_2 = 4\pi r_2^2 = 0.5437\,\mathrm{m^2}$):
$$Q = A_2\left[h(T_{s2}-T_\infty) + \varepsilon\sigma(T_{s2}^4 - T_{sur}^4)\right]$$
$$\frac{136.3}{0.5437} = 250.7 = 5(T_{s2}-298.15) + 0.9(5.67\times10^{-8})(T_{s2}^4 - 308.15^4)$$
Solved by iteration: $T_{s2} = 325.6\,\mathrm{K} = 52.5^\circ\mathrm{C}$ (radiation coefficient $h_r \approx 6.5\,\mathrm{W/m^2K}$, larger than $h$).
4. Check with conduction through the insulation:
$$R_{ins} = \frac{1}{4\pi k}\left(\frac{1}{r_1}-\frac{1}{r_2}\right) = \frac{1}{4\pi(0.05)}\left(\frac{1}{0.2}-\frac{1}{0.208}\right) = 0.306\,\mathrm{K/W}$$
$$T_{s2} = T_0 - Q R_{ins} = 90 - 136.3(0.306) = 48.3^\circ\mathrm{C}$$
The two values agree within about 4 °C. The data are over-specified: an exactly consistent insulation radius would be $r_2 \approx 207$ mm (for which both give $T_{s2} \approx 52.6^\circ$C), i.e. the given 208 mm is the rounded design thickness.

**Exam tip:** the outer surface temperature is fixed by the surface balance (heat generated must leave by convection + radiation); the conduction step then confirms that 8 mm of insulation keeps the core at 90 °C.`,
          answer: String.raw`$\dot q = 4067\,\mathrm{W/m^3}$, $Q = 136\,\mathrm{W}$, $T_{s2} \approx 52.5^\circ\mathrm{C}$ (conduction check with $r_2 = 208$ mm gives ≈ 48 °C).` },
      ] },
    { id: "2012-13-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q2a", label: "(a)", marks: "5",
          topic: "other", sub: "Lumped heat capacity – applicability",
          type: "theory", syllabus: "out", repeats: [],
          text: String.raw`Discuss the applicability of the lumped heat capacity system.`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

- Lumped analysis assumes the solid's temperature is **uniform in space** at every instant, $T = T(t)$ only; internal conduction resistance is negligible compared with surface convection resistance.
- Criterion: Biot number $\mathrm{Bi} = \dfrac{h L_c}{k_s} < 0.1$, with $L_c = V/A_s$ (plate: half-thickness; long cylinder: $r/2$; sphere: $r/3$). Error is then below about 5%.
- Result: $\dfrac{T-T_\infty}{T_i-T_\infty} = \exp\left(-\dfrac{hA_s}{\rho c V}t\right) = \exp(-\mathrm{Bi}\,\mathrm{Fo})$; time constant $\tau = \rho c V/(hA_s)$.
- Applicable: small bodies, high-$k$ metals, low $h$ (gases, natural convection) – e.g. thermocouple junctions, small steel balls quenched in air.
- Not applicable: large or poorly conducting bodies, high $h$ (boiling, liquid quench), where internal gradients matter (use Heisler charts / exact series).`,
          answer: String.raw`Valid when $\mathrm{Bi} = hL_c/k < 0.1$ ($L_c = V/A_s$); then $\theta/\theta_i = e^{-hA t/\rho c V}$.` },
        { id: "2012-13-Q2b", label: "(b)", marks: "12",
          topic: "other", sub: "Semi-infinite solid – step in surface temperature",
          type: "derivation", syllabus: "out", repeats: [],
          text: String.raw`Find the relationship for the temperature distribution and the surface heat transfer rate for transient heat flow in a semi-infinite solid.`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

**Assumptions:** solid occupies $x \ge 0$, constant properties, no generation, initially at $T_i$; at $t = 0$ the surface is suddenly set to $T_0$ and held there.

1. Governing equation: $\dfrac{\partial^2 T}{\partial x^2} = \dfrac{1}{\alpha}\dfrac{\partial T}{\partial t}$; with $\theta = T - T_0$: IC $\theta(x,0) = \theta_i = T_i - T_0$; BCs $\theta(0,t) = 0$, $\theta(\infty,t) = \theta_i$.
2. Similarity variable $\eta = \dfrac{x}{2\sqrt{\alpha t}}$ (no length scale exists, so $\theta$ depends on $x$ and $t$ only through $\eta$). Then $\dfrac{\partial\theta}{\partial t} = -\dfrac{\eta}{2t}\theta'$, $\dfrac{\partial^2\theta}{\partial x^2} = \dfrac{1}{4\alpha t}\theta''$, so the PDE becomes the ODE
$$\theta'' + 2\eta\,\theta' = 0$$
3. Let $p = \theta'$: $p'/p = -2\eta \Rightarrow \theta' = C_1 e^{-\eta^2} \Rightarrow \theta = C_1\int_0^\eta e^{-u^2}du + C_2$.
4. $\eta = 0$: $\theta = 0 \Rightarrow C_2 = 0$. $\eta\to\infty$: $\theta_i = C_1\sqrt{\pi}/2 \Rightarrow C_1 = 2\theta_i/\sqrt{\pi}$.
5. Temperature distribution:
$$\boxed{\frac{T(x,t) - T_0}{T_i - T_0} = \mathrm{erf}\left(\frac{x}{2\sqrt{\alpha t}}\right)}, \qquad \mathrm{erf}(\eta) = \frac{2}{\sqrt\pi}\int_0^\eta e^{-u^2}du$$
6. Surface heat flux: $q_0'' = -k\left.\dfrac{\partial T}{\partial x}\right|_{x=0} = -k\,\theta_i\,\dfrac{2}{\sqrt\pi}\,\dfrac{1}{2\sqrt{\alpha t}}$
$$\boxed{q_0'' = \frac{k(T_0 - T_i)}{\sqrt{\pi\alpha t}}}$$
It decays as $t^{-1/2}$; heat conducted in up to time $t$ is $Q/A = 2k(T_0-T_i)\sqrt{t/(\pi\alpha)}$.`,
          answer: String.raw`$\dfrac{T-T_0}{T_i-T_0} = \mathrm{erf}\,\dfrac{x}{2\sqrt{\alpha t}}$; $q_0'' = k(T_0-T_i)/\sqrt{\pi\alpha t}$.` },
        { id: "2012-13-Q2c", label: "(c)", marks: "18",
          topic: "other", sub: "Semi-infinite aluminium – step surface temperature",
          type: "numerical", syllabus: "out", repeats: [],
          text: String.raw`A semi-infinite solid of aluminium is at a uniform temperature of 30°C. The thermal diffusivity of aluminium is $8.4\times10^{-5}\,\mathrm{m^2/s}$ and its conductivity is 215 W/m·K. The surface is exposed to a heat flux by suddenly raising its surface temperature to 250°C. Calculate the temperature at a depth of 2.5 cm after a time of 60 s.`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

**Given:** $T_i = 30^\circ$C, $T_0 = 250^\circ$C, $\alpha = 8.4\times10^{-5}\,\mathrm{m^2/s}$, $k = 215\,\mathrm{W/m\,K}$, $x = 0.025\,\mathrm{m}$, $t = 60\,\mathrm{s}$.

**Find:** $T(x,t)$.

1. Similarity variable:
$$\eta = \frac{x}{2\sqrt{\alpha t}} = \frac{0.025}{2\sqrt{(8.4\times10^{-5})(60)}} = 0.176$$
2. $\mathrm{erf}(0.176) = 0.197$ (erf table).
3. $\dfrac{T - T_0}{T_i - T_0} = 0.197 \Rightarrow T = 250 + (30-250)(0.197) = 206.7^\circ\mathrm{C}$.
4. (Extra) surface heat flux at 60 s: $q_0'' = \dfrac{k(T_0-T_i)}{\sqrt{\pi\alpha t}} = \dfrac{215(220)}{\sqrt{\pi(8.4\times10^{-5})(60)}} = 3.76\times10^5\,\mathrm{W/m^2}$.`,
          answer: String.raw`$\eta = 0.176$, $T(2.5\,\mathrm{cm}, 60\,\mathrm{s}) \approx 207^\circ\mathrm{C}$.` },
      ] },
    { id: "2012-13-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q3a", label: "(a)", marks: "7",
          topic: "convection-basics", sub: "Order of Pr for liquids, liquid metals, polymers",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What would be the order of the Prandtl number for a normal liquid, a liquid metal and a polymeric liquid? Explain your answer.`,
          solution: String.raw`$\mathrm{Pr} = \dfrac{\nu}{\alpha} = \dfrac{c_p\mu}{k}$ = (momentum diffusivity)/(thermal diffusivity); it also fixes $\delta_t/\delta \approx \mathrm{Pr}^{-1/3}$.

| Fluid | Typical Pr | Reason |
|---|---|---|
| Gases (for comparison) | 0.7–1 | $\nu \approx \alpha$ (same molecular mechanism) |
| Normal liquids (water, light organics) | 1–10 (water ≈ 7 at 20 °C, ≈ 1.75 at 100 °C) | moderate viscosity, modest $k$ |
| Liquid metals (Hg, Na, NaK) | 0.001–0.03 | very high $k$ (free electrons) → $\alpha \gg \nu$ |
| Polymeric liquids / heavy oils | $10^2$ – $10^5$ and higher | very high $\mu$, low $k$ → $\nu \gg \alpha$ |

- Liquid metals: thermal boundary layer much thicker than velocity layer ($\delta_t \gg \delta$); heat diffuses far ahead of momentum, so special correlations are needed.
- Polymeric liquids: $\delta_t \ll \delta$; heat penetrates only a thin layer, so h is low and flows are usually laminar with long thermal entry lengths.`,
          answer: String.raw`Normal liquids Pr ~ 1–10, liquid metals ~ 0.001–0.03 (high k), polymer melts ~ $10^3$ and above (high μ).` },
        { id: "2012-13-Q3b", label: "(b)", marks: "10",
          topic: "convection-basics", sub: "Nusselt vs Biot number",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Distinguish the Nusselt number and the Biot number. Discuss their physical significance in heat transfer analysis.`,
          solution: String.raw`Both have the form $hL/k$, but the $k$ belongs to different materials.

| | Nusselt number | Biot number |
|---|---|---|
| Definition | $\mathrm{Nu} = \dfrac{hL}{k_f}$ | $\mathrm{Bi} = \dfrac{hL_c}{k_s}$ |
| $k$ of | the **fluid** | the **solid** |
| Unknown | $h$ is the unknown; Nu is the result of a convection correlation | $h$ is known (input); Bi is a parameter of a conduction problem |
| Length | flow length (plate length, tube D) | $L_c = V/A_s$ of the solid |
| Meaning | convection heat transfer / pure conduction across the same fluid layer; dimensionless temperature gradient at the wall | internal conduction resistance of the solid / external convection resistance |
| Use | forced/natural convection correlations, $\mathrm{Nu} = f(\mathrm{Re},\mathrm{Pr})$ or $f(\mathrm{Gr},\mathrm{Pr})$ | transient conduction: lumped if Bi < 0.1; fins; Heisler charts |

- $\mathrm{Nu} = 1$: heat crosses the fluid layer by conduction only; large Nu → strong convection.
- $\mathrm{Bi} \ll 1$: temperature nearly uniform inside the solid; $\mathrm{Bi} \gg 1$: large internal gradients, surface ≈ fluid temperature.

> Biot number is not treated in the current slides (transient conduction is out); Nusselt number is.`,
          answer: String.raw`Nu = $hL/k_{fluid}$ (dimensionless convection coefficient); Bi = $hL_c/k_{solid}$ (internal/external resistance ratio, lumped if < 0.1).` },
        { id: "2012-13-Q3c", label: "(c)", marks: "18",
          topic: "forced-convection", sub: "Sieder–Tate, water in a hot-wall tube",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A pipe of 2.5 cm ID has its wall temperature maintained at 100°C. Water flows through the tube at 0.5 kg/s with an inlet temperature of 25°C. Calculate the heat transfer coefficient and the length of the tube if the outlet temperature is 85°C. Use an appropriate heat transfer correlation which considers the variation of fluid properties with temperature.`,
          solution: String.raw`**Given:** $D = 0.025\,\mathrm{m}$, $T_w = 100^\circ$C, $\dot m = 0.5\,\mathrm{kg/s}$, $T_{b,in} = 25^\circ$C, $T_{b,out} = 85^\circ$C.

**Find:** $h$, $L$.

**Assumptions:** steady, fully developed turbulent flow, smooth tube, constant wall temperature; property variation handled by the Sieder–Tate viscosity correction (the correlation the question asks for).

1. Bulk mean temperature $T_b = (25+85)/2 = 55^\circ$C. Water at 55 °C (Çengel Table A-9): $c_p = 4183\,\mathrm{J/kg\,K}$, $k = 0.649\,\mathrm{W/m\,K}$, $\mu = 0.504\times10^{-3}\,\mathrm{kg/m\,s}$, Pr = 3.25. At $T_w = 100^\circ$C: $\mu_w = 0.282\times10^{-3}\,\mathrm{kg/m\,s}$.
2. Reynolds number:
$$\mathrm{Re} = \frac{4\dot m}{\pi D\mu} = \frac{4(0.5)}{\pi(0.025)(0.504\times10^{-3})} = 5.05\times10^4 \;(\text{turbulent})$$
3. Sieder–Tate: $\mathrm{Nu} = 0.027\,\mathrm{Re}^{0.8}\mathrm{Pr}^{1/3}(\mu/\mu_w)^{0.14}$, valid for Re > 10 000, 0.7 < Pr < 16 700, L/D > 10.
$$\mathrm{Nu} = 0.027(50\,525)^{0.8}(3.25)^{1/3}(0.504/0.282)^{0.14} = 251.2$$
($(\mu/\mu_w)^{0.14} = 1.085$.)
4. $h = \mathrm{Nu}\,k/D = 251.2(0.649)/0.025 = 6520\,\mathrm{W/m^2K}$.
5. Heat duty: $Q = \dot m c_p (T_{out}-T_{in}) = 0.5(4183)(60) = 1.255\times10^5\,\mathrm{W}$.
6. Constant wall temperature → LMTD (not arithmetic ΔT):
$$\Delta T_{lm} = \frac{(100-25)-(100-85)}{\ln(75/15)} = 37.28\,\mathrm{K}$$
7. Area and length: $A = Q/(h\Delta T_{lm}) = 1.255\times10^5/(6520\times37.28) = 0.516\,\mathrm{m^2}$
$$L = \frac{A}{\pi D} = \frac{0.516}{\pi(0.025)} = 6.57\,\mathrm{m}$$
8. Check: $L/D = 263 > 10$, so fully developed assumption is fine.

**Exam tip:** Dittus–Boelter ($n = 0.4$) would give $h \approx 5540\,\mathrm{W/m^2K}$ and $L \approx 7.7$ m; the question explicitly asks for the property-variation (Sieder–Tate) form.`,
          answer: String.raw`Re = $5.05\times10^4$, $h \approx 6.5\times10^3\,\mathrm{W/m^2K}$, $\Delta T_{lm} = 37.3$ K, $L \approx 6.6$ m.` },
      ] },
    { id: "2012-13-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q4a", label: "(a)", marks: "5+8",
          topic: "convection-basics", sub: "Bulk temperature; eddy viscosity & mixing length",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Write short notes on: (i) Bulk temperature; (ii) Eddy viscosity and Prandtl mixing length.`,
          solution: String.raw`### (i) Bulk (mixing-cup) temperature
- In a tube the temperature varies over the cross-section, so a single reference temperature is needed for $q = h(T_w - T_b)$.
- Defined by energy flow: the temperature the fluid would have if the whole cross-section were collected in a cup and mixed adiabatically:
$$T_b = \frac{\int_A \rho u c_p T\,dA}{\int_A \rho u c_p\,dA} \;\xrightarrow{\text{const. }\rho,c_p}\; \frac{\int_0^R u T\,2\pi r\,dr}{\int_0^R u\,2\pi r\,dr}$$
- Energy balance: $dq = \dot m c_p\,dT_b$; total $q = \dot m c_p(T_{b,out} - T_{b,in})$.
- Properties in tube correlations are evaluated at the mean bulk temperature $(T_{b,in}+T_{b,out})/2$.

### (ii) Eddy viscosity and Prandtl mixing length
> Not covered in the current CHE 301 slides.

- In turbulent flow $u = \bar u + u'$; velocity fluctuations carry extra momentum, giving a Reynolds (turbulent) shear stress $\tau_t = -\rho\overline{u'v'}$.
- Boussinesq: write it like the laminar law, $\tau = \rho(\nu + \varepsilon_M)\dfrac{d\bar u}{dy}$, where $\varepsilon_M$ (m²/s) is the **eddy viscosity (eddy diffusivity of momentum)** – a property of the flow, not of the fluid; $\varepsilon_M \gg \nu$ in the turbulent core, $\to 0$ at the wall. Similarly $q/(\rho c_p) = -(\alpha + \varepsilon_H)dT/dy$, with turbulent Prandtl number $\varepsilon_M/\varepsilon_H \approx 1$.
- **Prandtl mixing length** $l$: a fluid lump moves a distance $l$ across the flow (like a mean free path) before mixing with its new surroundings; then $u' \sim v' \sim l\,|d\bar u/dy|$ and
$$\tau_t = \rho\, l^2\left|\frac{d\bar u}{dy}\right|\frac{d\bar u}{dy}, \qquad \varepsilon_M = l^2\left|\frac{d\bar u}{dy}\right|$$
- Near a wall $l = \kappa y$ ($\kappa \approx 0.4$, von Kármán constant), which leads to the logarithmic velocity profile $u^+ = 2.5\ln y^+ + 5.5$.`,
          answer: String.raw`$T_b = \int\rho u c_p T\,dA/\int\rho u c_p\,dA$; $\varepsilon_M = l^2|d\bar u/dy|$ with mixing length $l = \kappa y$.` },
        { id: "2012-13-Q4b", label: "(b)", marks: "10",
          topic: "boundary-layer", sub: "Fluid friction vs heat transfer (Reynolds–Colburn)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Describe the relation between fluid friction and heat transfer.`,
          solution: String.raw`**Idea:** the same molecular/turbulent mechanism transports momentum and heat, so wall shear (friction) and wall heat flux are related – the Reynolds analogy.

**Assumptions:** flat plate, laminar boundary layer, constant properties, zero pressure gradient, negligible viscous dissipation.

1. Momentum and energy boundary-layer equations:
$$u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} = \nu\frac{\partial^2 u}{\partial y^2}, \qquad u\frac{\partial T}{\partial x} + v\frac{\partial T}{\partial y} = \alpha\frac{\partial^2 T}{\partial y^2}$$
2. If $\nu = \alpha$ (Pr = 1) and the BCs are similar ($u = 0$, $T = T_w$ at the wall; $u = u_\infty$, $T = T_\infty$ far away), $u/u_\infty$ and $(T-T_w)/(T_\infty-T_w)$ satisfy the same equation, so the profiles are identical.
3. Wall shear and heat flux:
$$\tau_w = \mu\left.\frac{\partial u}{\partial y}\right|_0 = C_f\,\tfrac12\rho u_\infty^2, \qquad q_w = -k\left.\frac{\partial T}{\partial y}\right|_0 = h(T_w - T_\infty)$$
4. With identical profiles, $\dfrac{h}{k} = \dfrac{\tau_w}{\mu u_\infty} = \dfrac{C_f \rho u_\infty}{2\mu}$, i.e.
$$\mathrm{St} = \frac{h}{\rho c_p u_\infty} = \frac{\mathrm{Nu}}{\mathrm{Re}\,\mathrm{Pr}} = \frac{C_f}{2} \quad (\text{Reynolds analogy, Pr} = 1)$$
5. Colburn's extension for other Pr (using $\delta_t/\delta \propto \mathrm{Pr}^{-1/3}$; check with $\mathrm{Nu}_x = 0.332\mathrm{Re}_x^{1/2}\mathrm{Pr}^{1/3}$ and $C_{fx} = 0.664\mathrm{Re}_x^{-1/2}$):
$$\boxed{\mathrm{St}\,\mathrm{Pr}^{2/3} = \frac{C_f}{2}} \quad (0.6 < \mathrm{Pr} < 60)$$
Also holds for turbulent plate flow and (with $f/8$) for turbulent tube flow: $\mathrm{St}\,\mathrm{Pr}^{2/3} = f/8$.

**Why it matters:** measuring a pressure drop (friction) gives h without heat transfer experiments; it also shows why raising velocity raises both h and pumping cost. Not valid where form drag dominates (flow separation, bluff bodies).`,
          answer: String.raw`Reynolds–Colburn analogy: $\mathrm{St}\,\mathrm{Pr}^{2/3} = C_f/2$ (= $f/8$ in tubes); Pr = 1 gives St = $C_f/2$.` },
        { id: "2012-13-Q4c", label: "(c)", marks: "12",
          topic: "boundary-layer", sub: "δ(x) from the integral momentum method",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Prove that the boundary layer thickness over a flat plate is a function of the distance from the leading edge and depends on the local Reynolds number.`,
          solution: String.raw`**Assumptions:** steady, incompressible, laminar flow over a flat plate, constant properties, $dp/dx = 0$ (free stream $u_\infty$ constant).

1. **Integral momentum equation** (von Kármán), from integrating continuity and x-momentum across the layer:
$$\frac{d}{dx}\int_0^\delta (u_\infty - u)\,u\,dy = \nu\left.\frac{\partial u}{\partial y}\right|_{y=0} = \frac{\tau_w}{\rho}$$
2. **Cubic profile** $u = a + by + cy^2 + dy^3$ with BCs: $u(0) = 0$; $\partial^2u/\partial y^2 = 0$ at $y = 0$ (from momentum eq. at the wall, $u = v = 0$); $u(\delta) = u_\infty$; $\partial u/\partial y = 0$ at $y = \delta$. This gives
$$\frac{u}{u_\infty} = \frac32\frac{y}{\delta} - \frac12\left(\frac{y}{\delta}\right)^3$$
3. **Left side:** $\int_0^\delta (u_\infty - u)u\,dy = u_\infty^2\delta\int_0^1\left(\tfrac32\eta - \tfrac12\eta^3\right)\left(1-\tfrac32\eta+\tfrac12\eta^3\right)d\eta = \dfrac{39}{280}u_\infty^2\delta$
4. **Right side:** $\nu\left.\dfrac{\partial u}{\partial y}\right|_0 = \dfrac{3\nu u_\infty}{2\delta}$
5. Equate: $\dfrac{39}{280}u_\infty^2\dfrac{d\delta}{dx} = \dfrac{3}{2}\dfrac{\nu u_\infty}{\delta} \Rightarrow \delta\,d\delta = \dfrac{140}{13}\dfrac{\nu}{u_\infty}dx$
6. Integrate with $\delta = 0$ at $x = 0$: $\dfrac{\delta^2}{2} = \dfrac{140}{13}\dfrac{\nu x}{u_\infty}$
$$\delta = \sqrt{\frac{280}{13}}\sqrt{\frac{\nu x}{u_\infty}} = 4.64\sqrt{\frac{\nu x}{u_\infty}}$$
7. Dividing by $x$:
$$\boxed{\frac{\delta}{x} = \frac{4.64}{\sqrt{\mathrm{Re}_x}}}, \qquad \mathrm{Re}_x = \frac{u_\infty x}{\nu}$$
So $\delta \propto x^{1/2}$ grows with distance from the leading edge, and $\delta/x$ depends only on the local Reynolds number (exact Blasius solution: 5.0 instead of 4.64). Valid for $\mathrm{Re}_x < 5\times10^5$.`,
          answer: String.raw`$\delta = 4.64\sqrt{\nu x/u_\infty}$, i.e. $\delta/x = 4.64\,\mathrm{Re}_x^{-1/2}$ ($\delta \propto \sqrt x$).` },
      ] },
    { id: "2012-13-Q5", q: 5, section: "B", compulsory: true,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q5a", label: "(a)", marks: "2+2+8+4+7+2",
          topic: "shell-tube", sub: "Kern rating – K₃PO₄ solution cooler (1-2)",
          type: "numerical", syllabus: "in", repeats: ["2015-16-Q1a", "2015-16-Q1b", "2015-16-Q1c", "2015-16-Q1d", "2015-16-Q1e", "2015-16-Q1f"],
          text: String.raw`20,000 lb/hr of a 30% $\mathrm{K_3PO_4}$ solution, specific gravity at 120°F = 1.30, is to be cooled from 150 to 90°F using well water from 68 to 90°F. Pressure drops of 10 psi are allowable on both streams, and a total dirt factor of 0.002 is required. Available for this service is a 10.02 in. ID 1-2 exchanger having 52 ¾ in. OD, 16 BWG tubes 16′0″ long laid out on 1-in. square pitch. The bundle is arranged for two passes, and the baffles are spaced 2 in. apart.

(i) Do the heat balance. (2)
(ii) Calculate the true temperature difference Δt. (2)
(iii) Calculate the individual heat transfer coefficients ($h_o$ and $h_i$). (8)
(iv) Calculate the dirt factor. (4)
(v) Will the exchanger be suitable? (7)
(vi) Fill in the TEMA sheet and attach it to your answer script. (2)`,
          solution: String.raw`**Given:** phosphate solution $W = 20\,000$ lb/h, $T_1 = 150$, $T_2 = 90^\circ$F, s = 1.30; well water $t_1 = 68$, $t_2 = 90^\circ$F; ΔP allowed 10 psi each; $R_d$ required 0.002 h·ft²·°F/Btu. Shell ID 10.02 in, B = 2 in, one shell pass; 52 tubes, ¾ in OD, 16 BWG (ID 0.62 in, flow area 0.302 in²/tube, $a'' = 0.1963$ ft²/ft – Kern Table 10), L = 16 ft, 1 in square pitch, 2 tube passes.

**Properties** (booklet not available; these are the standard Kern values for this problem, the same ones the 2015-16 paper prints):
- Phosphate at $T_c = 120^\circ$F: $c = 0.757$ Btu/lb·°F, $\mu = 1.2$ cP $= 2.90$ lb/ft·h, $k = 0.33$ Btu/h·ft·°F, s = 1.30.
- Water at $t_c = 79^\circ$F: $c = 1.0$, $\mu \approx 0.91$ cP $= 2.20$ lb/ft·h, $k = 0.386$ Btu/h·ft·°F (value as printed in the 2015-16 paper).

**Assumptions:** $\phi = (\mu/\mu_w)^{0.14} = 1$ on both sides (no wall viscosity data); no heat loss; caloric temperatures = arithmetic means (the $K_c$–$F_c$ chart is for petroleum fractions; for these low-viscosity aqueous streams the averages are adequate): $T_c = 120^\circ$F, $t_c = 79^\circ$F.

**Fluid allocation:** well water in the tubes (scaling, dirty, cleanable tubes, larger flow), phosphate solution in the shell (close baffles give turbulence).

### (i) Heat balance
$$Q = W c (T_1 - T_2) = 20\,000(0.757)(150-90) = 908\,400\ \mathrm{Btu/h}$$
$$w = \frac{Q}{c(t_2-t_1)} = \frac{908\,400}{1.0(90-68)} = 41\,290\ \mathrm{lb/h\ water}$$

### (ii) True temperature difference
- Counter-flow LMTD: $\Delta t_1 = 150 - 90 = 60$, $\Delta t_2 = 90 - 68 = 22^\circ$F
$$\mathrm{LMTD} = \frac{60-22}{\ln(60/22)} = 37.9^\circ\mathrm{F}$$
- $R = \dfrac{T_1-T_2}{t_2-t_1} = \dfrac{60}{22} = 2.73$, $S = \dfrac{t_2-t_1}{T_1-t_1} = \dfrac{22}{82} = 0.268$
- $F_T$ (Holman Fig. 10-8 / 1-2 formula) $= 0.81$
$$\Delta t = F_T\,\mathrm{LMTD} = 0.808(37.9) = 30.6^\circ\mathrm{F}$$
$F_T > 0.75$, so a single 1-2 shell is acceptable.

### (iii) Film coefficients
**Shell side (phosphate):**
1. $a_s = \dfrac{ID\,C'\,B}{144\,P_T} = \dfrac{10.02(0.25)(2)}{144(1)} = 0.0347\ \mathrm{ft^2}$ ($C' = P_T - d_o = 0.25$ in)
2. $G_s = W/a_s = 20\,000/0.0347 = 576\,400\ \mathrm{lb/h\,ft^2}$
3. $D_e = \dfrac{4(P_T^2 - \pi d_o^2/4)}{\pi d_o} = \dfrac{4(1 - \pi(0.75)^2/4)}{\pi(0.75)} = 0.95\ \mathrm{in} = 0.0792\ \mathrm{ft}$
4. $\mathrm{Re}_s = D_eG_s/\mu = 0.0792(576\,400)/2.90 = 15\,730$
5. $j_H \approx 73$ from Kern Fig. 28 (25% cut) at Re = $1.57\times10^4$ (curve fit $0.36\,\mathrm{Re}^{0.55} = 73.2$; the chart reads ≈ 70–75)
6. $(c\mu/k)^{1/3} = (0.757 \times 2.90/0.33)^{1/3} = 1.881$
7. $h_o = j_H\dfrac{k}{D_e}\left(\dfrac{c\mu}{k}\right)^{1/3}\phi_s = 73.2\left(\dfrac{0.33}{0.0792}\right)(1.881) = 574\ \mathrm{Btu/h\,ft^2\,^\circ F}$

**Tube side (water):**
1. $a_t = \dfrac{N_t a_t'}{144\,n} = \dfrac{52(0.302)}{144(2)} = 0.0545\ \mathrm{ft^2}$
2. $G_t = w/a_t = 41\,290/0.0545 = 757\,200\ \mathrm{lb/h\,ft^2}$; $V = G_t/(3600\rho) = 757\,200/(3600 \times 62.5) = 3.37$ ft/s (good water velocity)
3. $D = 0.62/12 = 0.0517$ ft; $\mathrm{Re}_t = DG_t/\mu = 0.0517(757\,200)/2.20 = 17\,780$; $L/D = 310$
4. $j_H \approx 68$ from Kern Fig. 24 (turbulent, Sieder–Tate line; fit $0.027\,\mathrm{Re}^{0.8} = 67.8$)
5. $(c\mu/k)^{1/3} = (1.0 \times 2.20/0.386)^{1/3} = 1.786$
6. $h_i = j_H\dfrac{k}{D}\left(\dfrac{c\mu}{k}\right)^{1/3} = 67.8\left(\dfrac{0.386}{0.0517}\right)(1.786) = 905\ \mathrm{Btu/h\,ft^2\,^\circ F}$
7. Referred to the outside: $h_{io} = h_i\dfrac{ID}{OD} = 905\left(\dfrac{0.62}{0.75}\right) = 748$

### (iv) Dirt factor
1. Clean coefficient: $U_C = \dfrac{h_{io}h_o}{h_{io}+h_o} = \dfrac{748(574)}{748+574} = 325\ \mathrm{Btu/h\,ft^2\,^\circ F}$
2. Surface: $A = N_t\,a''\,L = 52(0.1963)(16) = 163.3\ \mathrm{ft^2}$
3. Design coefficient: $U_D = \dfrac{Q}{A\,\Delta t} = \dfrac{908\,400}{163.3(30.6)} = 182\ \mathrm{Btu/h\,ft^2\,^\circ F}$
4. $R_d = \dfrac{U_C - U_D}{U_CU_D} = \dfrac{324.8 - 181.7}{324.8(181.7)} = 0.00243\ \mathrm{h\,ft^2\,^\circ F/Btu}$

### (v) Suitability – pressure drops
**Shell side:**
1. $f_s \approx 0.00197\ \mathrm{ft^2/in^2}$ at Re = 15 730 (Kern Fig. 29; fit $\exp(0.576 - 0.19\ln\mathrm{Re})/144$; chart ≈ 0.0019)
2. Number of crosses $N+1 = 12L/B = 12(16)/2 = 96$; $D_s = 10.02/12 = 0.835$ ft
3. $$\Delta P_s = \frac{f G_s^2 D_s (N+1)}{5.22\times10^{10} D_e\, s\,\phi_s} = \frac{0.00197(576\,400)^2(0.835)(96)}{5.22\times10^{10}(0.0792)(1.30)(1)} = 9.8\ \mathrm{psi}$$

**Tube side:**
1. $f_t \approx 0.00023\ \mathrm{ft^2/in^2}$ at Re = 17 780, read from Kern Fig. 26 (the fit $4(0.0035 + 0.264\mathrm{Re}^{-0.42})/144 = 0.000218$ runs slightly low; at the slides' Re = 11 571 it gives 0.00024 vs the chart's 0.00028)
2. $$\Delta P_t = \frac{f G_t^2 L n}{5.22\times10^{10} D\, s\,\phi_t} = \frac{0.00023(757\,200)^2(16)(2)}{5.22\times10^{10}(0.0517)(1.0)} = 1.56\ \mathrm{psi}$$
3. Return loss: $\dfrac{V^2}{2g'} = \dfrac{3.37^2}{2(32.2)}\times\dfrac{62.5}{144} = 0.076$ psi (Kern Fig. 27 ≈ 0.075); $\Delta P_r = \dfrac{4n}{s}\dfrac{V^2}{2g'} = \dfrac{4(2)}{1}(0.076) = 0.61$ psi
4. $\Delta P_T = 1.56 + 0.61 = 2.2$ psi

**Verdict:**

| | Calculated | Required / allowed |
|---|---|---|
| $R_d$ | 0.0024 | 0.002 |
| $\Delta P_s$ (phosphate) | 9.8 psi | 10 psi |
| $\Delta P_T$ (water) | 2.2 psi | 10 psi |

$R_d$(calc) ≥ $R_d$(required) and both pressure drops are within the allowance, so **the exchanger is suitable**. Margin: with $R_d = 0.002$ the required $U_D = 1/(1/325 + 0.002) = 197$ and the required area $= 908\,400/(197\times30.6) = 151$ ft², i.e. ≈ 8% excess surface. The shell side is right at its ΔP limit (2 in baffle spacing is the reason).

### (vi) TEMA sheet (key entries)
| Item | Shell side | Tube side |
|---|---|---|
| Size and type | 10.02 in ID × 16 ft, 1-2 (one shell pass, two tube passes) | |
| Surface | 163 ft² (one shell) | |
| Fluid | 30% K₃PO₄ solution | Well water |
| Flow rate, lb/h | 20 000 | 41 290 |
| Temperature in/out, °F | 150 / 90 | 68 / 90 |
| Specific gravity | 1.30 | 1.0 |
| Viscosity, lb/ft·h | 2.90 | 2.20 |
| Velocity | – | 3.37 ft/s |
| Passes | 1 | 2 |
| ΔP allowed / calculated, psi | 10 / 9.8 | 10 / 2.2 |
| Fouling resistance (total) | 0.002 required, 0.0024 available | |
| Film coefficient, Btu/h·ft²·°F | $h_o = 574$ | $h_{io} = 748$ |
| Heat exchanged | 908 400 Btu/h; Δt (corrected) = 30.6 °F | |
| $U_C$ / $U_D$ | 325 / 182 Btu/h·ft²·°F | |
| Tubes | 52, ¾ in OD, 16 BWG, 16 ft, 1 in square pitch | |
| Baffles | segmental (25% cut), 2 in spacing | |

**Exam tip:** Kern's own book solves this problem with the water-only chart (Fig. 25), $h_i \approx 800$, which gives $U_C \approx 283$ and $R_d \approx 0.0019$: still essentially the required 0.002, so you reach the same verdict (acceptable).`,
          answer: String.raw`Q = 908 400 Btu/h (41 290 lb/h water); Δt = 0.81 × 37.9 = 30.6 °F; $h_o \approx 574$, $h_i \approx 905$ ($h_{io} = 748$); $U_C = 325$, $U_D = 182$, $R_d = 0.0024 > 0.002$; ΔP_s ≈ 9.8 psi, ΔP_t ≈ 2.2 psi → suitable.` },
        { id: "2012-13-Q5b", label: "(b)", marks: "4+6",
          topic: "heat-exchangers", sub: "Double-pipe pros/cons; 1-2 Δt assumptions",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Write the advantages and disadvantages of using a double pipe heat exchanger. State the assumptions of the true temperature difference for a 1-2 shell-and-tube heat exchanger.`,
          solution: String.raw`### Double-pipe exchanger
**Advantages**
- Simple, cheap, built from standard pipe fittings; easy to assemble, clean and maintain (hairpins dismantle easily).
- True counter-flow → high $F_T = 1$, can handle temperature crosses.
- Good for high pressures (small diameters) and small duties.
- Area easily increased by adding hairpins in series/parallel.

**Disadvantages**
- Small area per unit (practical limit ≈ 100–200 ft²); large duties need many hairpins → large floor space, many joints and possible leak points.
- High cost per unit area for large surfaces.
- Annulus is hard to clean if dirty fluid is placed there; gland/packing leaks.

### Assumptions for the 1-2 true temperature difference ($\Delta t = F_T \times \mathrm{LMTD}$)
1. Shell fluid temperature is uniform over any cross-section (shell fluid well mixed).
2. Equal heat transfer surface in each tube pass.
3. Overall coefficient $U$ is constant along the exchanger.
4. Flow rate of each fluid is constant (steady state).
5. Specific heat of each fluid is constant.
6. No phase change (no condensation or boiling) in part of the exchanger.
7. Heat losses to the surroundings are negligible.`,
          answer: String.raw`Double pipe: cheap, true counter-flow, easy to clean, but small area and many joints. $F_T$ assumes mixed shell fluid, equal pass areas, constant U, flows and c, no phase change, no losses.` },
      ] },
    { id: "2012-13-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q6a", label: "(a)", marks: "6",
          topic: "natural-convection", sub: "Grashof vs Reynolds number",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the differences between the Grashof number and the Reynolds number? Mention their definitions, physical significance, etc.`,
          solution: String.raw`| | Reynolds number | Grashof number |
|---|---|---|
| Definition | $\mathrm{Re} = \dfrac{\rho u L}{\mu} = \dfrac{uL}{\nu}$ | $\mathrm{Gr} = \dfrac{g\beta(T_s - T_\infty)L^3}{\nu^2}$ |
| Ratio | inertia force / viscous force | buoyancy force / viscous force |
| Used in | forced convection, Nu = f(Re, Pr) | natural convection, Nu = f(Gr, Pr) = f(Ra) |
| Velocity | imposed externally (fan, pump) and known | not known in advance – created by density differences, so it does not appear |
| Laminar → turbulent | plate ≈ $5\times10^5$, tube ≈ 2300 | vertical plate Gr ≈ $10^9$ (Ra ≈ $10^9$) |
| Length | plate length, tube D | plate height, cylinder D |

- Gr/Re² measures the relative importance of natural to forced convection (≪ 1 forced; ≫ 1 natural; ≈ 1 mixed).
- Gr plays the same role in free convection that Re plays in forced convection.`,
          answer: String.raw`Re = inertia/viscous (forced flow); Gr = gβΔTL³/ν² = buoyancy/viscous (free flow); Gr/Re² decides which dominates.` },
        { id: "2012-13-Q6b", label: "(b)", marks: "3",
          topic: "natural-convection", sub: "Modified Grashof number (constant flux)",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`How is a modified Grashof number defined for a constant-heat-flux condition on a vertical plate?`,
          solution: String.raw`For a uniform wall flux $q_w''$ the wall-to-fluid ΔT is not known in advance, so ΔT is eliminated using $\Delta T = q_w''x/(k\,\mathrm{Nu}_x)$:
$$\mathrm{Gr}_x^* = \mathrm{Gr}_x\,\mathrm{Nu}_x = \frac{g\beta q_w'' x^4}{k\nu^2}$$
Local correlations (Holman): $\mathrm{Nu}_x = 0.60(\mathrm{Gr}_x^*\mathrm{Pr})^{1/5}$ for $10^5 < \mathrm{Gr}_x^*\mathrm{Pr} < 10^{11}$ (laminar), and $0.17(\mathrm{Gr}_x^*\mathrm{Pr})^{1/4}$ for $2\times10^{13} < \mathrm{Gr}_x^*\mathrm{Pr} < 10^{16}$ (turbulent). Properties at the film temperature based on the local (or mid-height) wall temperature.

> The slides instead use the isothermal correlations with the plate mid-height temperature; the modified Gr itself is from Holman.`,
          answer: String.raw`$\mathrm{Gr}^*_x = \mathrm{Gr}_x\mathrm{Nu}_x = g\beta q_w''x^4/(k\nu^2)$.` },
        { id: "2012-13-Q6c", label: "(c)", marks: "3",
          topic: "natural-convection", sub: "Velocity measurement in free convection",
          type: "theory", syllabus: "out", repeats: [],
          text: String.raw`Write some names of the devices which are used to measure velocity in free convection systems.`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

Free-convection velocities are very small (cm/s), so the probe must not disturb the flow or the temperature field:
- Hot-wire / hot-film anemometer (small probes, low-velocity calibration).
- Laser Doppler anemometer (LDA/LDV) – non-intrusive.
- Particle image velocimetry (PIV) and tracer methods: smoke, dye, suspended particles or hydrogen bubbles photographed with timed exposures.
- (Temperature field, often measured alongside: Mach–Zehnder interferometer, schlieren and shadowgraph.)`,
          answer: String.raw`Hot-wire/hot-film anemometer, laser Doppler anemometer, PIV, smoke/hydrogen-bubble tracer photography.` },
        { id: "2012-13-Q6d", label: "(d)", marks: "23",
          topic: "natural-convection", sub: "Isothermal copper block in room air",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A small copper block having a square bottom 2.5 by 2.5 cm and a vertical height of 5 cm cools in room air at 1 bar and 20°C. The block is isothermal at 93°C. Calculate the heat transfer rate.`,
          solution: String.raw`**Given:** block 2.5 × 2.5 × 5 cm (height), $T_s = 93^\circ$C, $T_\infty = 20^\circ$C, air at 1 bar.

**Find:** total natural-convection heat loss $q$.

**Assumptions:** block suspended in still air (all six faces exposed); four vertical faces treated as vertical plates of height L = 5 cm; top = hot surface facing up, bottom = hot surface facing down; radiation neglected (polished copper); properties at film temperature.

1. Film temperature $T_f = (93+20)/2 = 56.5^\circ\mathrm{C} = 329.7$ K; $\beta = 1/T_f = 3.03\times10^{-3}\,\mathrm{K^{-1}}$. Air (Holman Table A-5, interpolated 300–350 K): $\nu = 18.70\times10^{-6}\,\mathrm{m^2/s}$, $k = 0.02849\,\mathrm{W/m\,K}$, Pr = 0.701. ΔT = 73 K.

**Vertical sides** (L = 0.05 m, area $4(0.025)(0.05) = 0.005\,\mathrm{m^2}$)
2. $$\mathrm{Ra}_L = \frac{g\beta\Delta T L^3}{\nu^2}\mathrm{Pr} = \frac{9.81(3.03\times10^{-3})(73)(0.05)^3}{(18.70\times10^{-6})^2}(0.701) = 5.45\times10^5$$
3. Laminar ($10^4$–$10^9$): $\mathrm{Nu} = 0.59\,\mathrm{Ra}^{1/4}$ (Holman Table 9-1) $= 0.59(5.45\times10^5)^{1/4} = 16.0$
4. $h_v = 16.0(0.02849)/0.05 = 9.13\,\mathrm{W/m^2K}$; $q_v = 9.13(0.005)(73) = 3.33$ W
(Churchill–Chu laminar form gives Nu = 14.6, h = 8.3 W/m²K – within 10%.)

**Top and bottom** (each $A = 6.25\times10^{-4}\,\mathrm{m^2}$, characteristic length $L_c = A/P = 0.025^2/(4\times0.025) = 0.00625$ m)
5. $\mathrm{Ra}_{L_c} = 1.06\times10^3$
6. Hot surface up: $\mathrm{Nu} = 0.54\,\mathrm{Ra}^{1/4}$ → $h_{up} = 0.54(1064)^{1/4}(0.02849/0.00625) = 14.1\,\mathrm{W/m^2K}$; $q_{up} = 14.1(6.25\times10^{-4})(73) = 0.64$ W
7. Hot surface down: $\mathrm{Nu} = 0.27\,\mathrm{Ra}^{1/4}$ → $h_{down} = 7.0\,\mathrm{W/m^2K}$; $q_{down} = 0.32$ W
(Ra ≈ $10^3$ is below the nominal lower limit of these correlations ($10^4$ / $10^5$), so these are extrapolations; they contribute only ≈ 22% of the total.)

8. Total: $q = 3.33 + 0.64 + 0.32 = 4.3$ W

**Exam tip:** if the block sits on a table, drop the bottom face (q ≈ 4.0 W). Using the side length 2.5 cm as L for the horizontal faces gives ≈ 4.0 W – the answer is ≈ 4 W either way.`,
          answer: String.raw`$T_f = 56.5^\circ$C; sides h ≈ 9.1 W/m²K (3.3 W), top ≈ 0.64 W, bottom ≈ 0.32 W → q ≈ 4.3 W.` },
      ] },
    { id: "2012-13-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q7a", label: "(a)", marks: "2+2+3",
          topic: "condensation", sub: "Dropwise vs film; non-condensables; film Re",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why are higher heat transfer rates experienced in dropwise condensation than in film condensation? What will happen to the condensation phenomena if non-condensable gases are present in the system? How is the Reynolds number defined for film condensation?`,
          solution: String.raw`**Dropwise vs film.** In film condensation the whole wall is covered by a continuous liquid film, which is the main thermal resistance (heat must conduct through it). In dropwise condensation the vapour condenses as droplets that grow, coalesce and roll off, sweeping the surface clean; much of the surface is bare or covered by very thin films, so the resistance is far lower. h for dropwise can be 5–10 times (or more) the film value.

**Non-condensable gases** (air in a steam condenser): as vapour condenses, the gas is left behind and accumulates near the surface, forming a gas-rich layer. Vapour must diffuse through it, and the partial pressure (hence saturation temperature) of the vapour at the interface falls. Result: a large drop in h and condensation rate – even ~1% air by mass can halve h. Hence condensers are vented to remove non-condensables.

**Film Reynolds number** (slides, Çengel):
$$\mathrm{Re}_\delta = \frac{4A_c\rho_l V_l}{p\,\mu_l} = \frac{4\dot m}{p\,\mu_l}$$
$\dot m$ = condensate flow at the bottom (kg/s), $p$ = wetted perimeter (plate width $w$; vertical tube $\pi D$; horizontal tube $2L$), $D_h = 4A_c/p = 4\delta$. Regimes: Re < 30 laminar, smooth; 30–1800 wavy laminar; > 1800 turbulent.`,
          answer: String.raw`Dropwise: no continuous film resistance → h 5–10× higher. Non-condensables form a diffusion barrier and lower h sharply. $\mathrm{Re} = 4\dot m/(p\mu_l)$.` },
        { id: "2012-13-Q7b", label: "(b)", marks: "1+2+5",
          topic: "boiling", sub: "Pool boiling; subcooled vs saturated; nucleate vs film",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is pool boiling? What is meant by subcooled and saturated boiling? Distinguish between nucleate and film boiling.`,
          solution: String.raw`**Pool boiling:** boiling of a stagnant liquid on a submerged heated surface; liquid motion is caused only by natural convection and bubble motion (no forced bulk flow, unlike flow boiling).

**Subcooled (local) boiling:** bulk liquid is below $T_{sat}$; bubbles form at the hot surface but collapse as they rise into the cooler liquid. **Saturated (bulk) boiling:** bulk liquid is at $T_{sat}$; bubbles rise and escape from the free surface.

| | Nucleate boiling | Film boiling |
|---|---|---|
| Excess temperature (water, 1 atm) | ≈ 5–30 °C | > ≈ 120 °C (stable film beyond Leidenfrost point) |
| Mechanism | bubbles form at nucleation sites, detach, stir the liquid | continuous vapour blanket covers the surface; heat crosses vapour by conduction + radiation |
| h | very high | low (vapour is a poor conductor) |
| Heat flux | rises steeply with ΔT up to $q_{max}$ (critical heat flux) | rises again only at very high ΔT; radiation important |
| Correlation | Rohsenow | Bromley-type: $h = C[\ldots/(\mu_v D\Delta T)]^{1/4}$, C = 0.62 cylinder |
| Practical | desired operating regime | avoided (burnout risk), except quenching |`,
          answer: String.raw`Pool boiling = stagnant liquid on a heated surface; subcooled = bulk below $T_{sat}$ (bubbles collapse), saturated = bulk at $T_{sat}$; nucleate = discrete bubbles, high h; film = vapour blanket, low h.` },
        { id: "2012-13-Q7c", label: "(c)", marks: "20",
          topic: "condensation", sub: "Ammonia condensation on a 20×20 tube bank",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`An ammonia condenser uses a 20 × 20 array of 6 mm diameter tubes 0.3 m long. The ammonia condenses at 32°C and the tube walls are maintained at 28°C by a water flow inside. Calculate the rate of condensation of ammonia. $h_{fg}$ at 32°C is 1136 kJ/kg.`,
          solution: String.raw`**Given:** N = 20 rows (vertical), 20 columns → 400 tubes; D = 0.006 m; L = 0.3 m; $T_{sat} = 32^\circ$C; $T_w = 28^\circ$C; ΔT = 4 K; $h_{fg} = 1136$ kJ/kg.

**Find:** condensation rate $\dot m$.

**Assumptions:** laminar film condensation on horizontal tubes (Nusselt), condensate draining from tube to tube down each column ($h_N = h_1N^{-1/4}$), pure saturated vapour, liquid properties at film temperature.

1. Film temperature $T_f = (32+28)/2 = 30^\circ$C. Saturated liquid NH₃ (Holman Table A-4, interpolated 20–50 °C): $\rho_l = 594.9\,\mathrm{kg/m^3}$, $\nu_l = 0.355\times10^{-6}\,\mathrm{m^2/s}$ → $\mu_l = 2.11\times10^{-4}\,\mathrm{kg/m\,s}$, $k_l = 0.501\,\mathrm{W/m\,K}$, $c_{pl} = 4.89\,\mathrm{kJ/kg\,K}$. Vapour at 32 °C (NH₃ tables, $p_{sat} \approx 12.4$ bar): $\rho_v \approx 9.6\,\mathrm{kg/m^3}$.
2. Modified latent heat: $h_{fg}^* = h_{fg} + 0.68c_{pl}\Delta T = 1136 + 0.68(4.89)(4) = 1149$ kJ/kg.
3. Single horizontal tube (slides):
$$h_1 = 0.729\left[\frac{g\rho_l(\rho_l-\rho_v)h_{fg}^*k_l^3}{\mu_l\Delta T D}\right]^{1/4} = 0.729\left[\frac{9.81(594.9)(585.3)(1.149\times10^6)(0.501)^3}{(2.11\times10^{-4})(4)(0.006)}\right]^{1/4} = 12\,880\,\mathrm{W/m^2K}$$
4. Bank of N = 20 tubes in a vertical column: $h_N = h_1N^{-1/4} = 12\,880(20)^{-1/4} = 6090\,\mathrm{W/m^2K}$.
5. Area: $A = 400\pi DL = 400\pi(0.006)(0.3) = 2.262\,\mathrm{m^2}$.
6. Heat rate: $Q = h_NA\Delta T = 6090(2.262)(4) = 5.51\times10^4\,\mathrm{W}$.
7. Condensation rate: $\dot m = Q/h_{fg}^* = 5.51\times10^4/1.149\times10^6 = 0.048\,\mathrm{kg/s} \approx 173\,\mathrm{kg/h}$.

**Exam tip:** using $h_{fg}$ unmodified and Holman's coefficient 0.725 changes $\dot m$ by under 2%; neglecting $\rho_v$ changes it by under 1%.`,
          answer: String.raw`$h_1 \approx 12\,900$, $h_{20} \approx 6090\,\mathrm{W/m^2K}$; Q ≈ 55 kW; $\dot m \approx 0.048$ kg/s (≈ 173 kg/h).` },
      ] },
    { id: "2012-13-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2012-13-Q8a", label: "(a)", marks: "2+4",
          topic: "heat-exchangers", sub: "Thermal design; equipment types and purposes",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`What do you mean by thermal design of heat transfer equipment? Make a list of some heat transfer equipment types and their purpose of use in process industries.`,
          solution: String.raw`**Thermal design:** determining the heat transfer area and configuration (exchanger type, number/size/length of tubes, passes, shell diameter, baffles) needed to transfer a specified duty between given streams, with film coefficients, fouling allowance and true temperature difference, while keeping pressure drops within allowable limits. (Mechanical design – thicknesses, codes – follows it.)

| Equipment | Purpose |
|---|---|
| Heat exchanger | exchange heat between two process streams (heat recovery) |
| Cooler | cool a process stream with water or air |
| Heater | heat a process stream, usually with steam |
| Condenser | condense vapour (total or partial) |
| Chiller | cool below water temperature using a refrigerant (brine, NH₃) |
| Reboiler | supply heat to the bottom of a distillation column (vaporize part of the bottoms) |
| Vaporizer / evaporator | vaporize a liquid / concentrate a solution by boiling off solvent |
| Steam generator / waste-heat boiler | raise steam from hot process gases |
| Superheater | heat vapour above saturation |
| Cooling tower, air cooler | reject heat to atmosphere |`,
          answer: String.raw`Thermal design = sizing area/geometry for a duty within ΔP limits; types include exchangers, coolers, heaters, condensers, chillers, reboilers, evaporators, vaporizers.` },
        { id: "2012-13-Q8b", label: "(b)", marks: "3+2",
          topic: "shell-tube", sub: "Components; pitch, clearance, arrangement, BWG",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write the names of the components of shell-and-tube heat exchangers. Give the definitions of (i) tube pitch, (ii) clearance, (iii) arrangement, (iv) BWG.`,
          solution: String.raw`**Components:** shell, shell cover, tubes (tube bundle), tube sheets (stationary and floating), front (stationary) head / channel and channel cover, rear head, floating head and floating-head cover (with backing device/split ring), pass partition plates, baffles (segmental) and support plates, tie rods and spacers, impingement plate, shell and channel nozzles, vent and drain connections, expansion joint (fixed tube sheet units), supports/saddles.

- **(i) Tube pitch $P_T$:** centre-to-centre distance between adjacent tubes (e.g. 1 in for ¾ in tubes).
- **(ii) Clearance $C'$:** the shortest distance between the outer surfaces of adjacent tubes, $C' = P_T - d_o$ (e.g. 0.25 in).
- **(iii) Arrangement (layout):** the pattern of tubes on the tube sheet – square, rotated square, triangular, rotated triangular. Square pitch allows mechanical cleaning of the outside; triangular packs more tubes in a given shell.
- **(iv) BWG:** Birmingham Wire Gauge – the number that specifies the tube wall thickness; higher BWG = thinner wall (¾ in 16 BWG: wall 0.065 in, ID 0.62 in).`,
          answer: String.raw`Shell, tubes, tube sheets, heads/channels, baffles, tie rods, nozzles…; pitch = centre distance, clearance = $P_T - d_o$, arrangement = layout pattern, BWG = wall thickness gauge.` },
        { id: "2012-13-Q8c", label: "(c)", marks: "3+4",
          topic: "shell-tube", sub: "Codes and standards; TEMA specification sheet",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`Mention some commonly employed codes and standards for the design and construction of heat transfer equipment. What type of information does a TEMA specification sheet contain for a shell-and-tube heat exchanger?`,
          solution: String.raw`**Codes and standards:** TEMA (Tubular Exchanger Manufacturers Association) standards, classes R (refinery), C (commercial), B (chemical); ASME Boiler and Pressure Vessel Code, Section VIII Div. 1 (unfired pressure vessels); API 660 (shell-and-tube for petroleum service) and API 661 (air-cooled); HEI (Heat Exchange Institute) standards for surface condensers and feedwater heaters; British PD 5500 (BS 5500); IS 4503; ISO 16812.

**TEMA specification sheet contains:**
- Customer, plant, item number, service of unit.
- Size (shell ID – tube length) and type (e.g. AES), arrangement (shells in series/parallel), surface per unit and per shell.
- Performance of one unit, shell side and tube side: fluid name, total flow, vapour/liquid in and out, temperatures in/out, density, viscosity, specific heat, thermal conductivity, latent heat, inlet pressure, velocity, pressure drop allowed/calculated, fouling resistance.
- Heat exchanged, corrected MTD, transfer rate (service/clean).
- Construction: design/test pressure, design temperature, number of passes, corrosion allowance, connection sizes; tubes (number, OD, BWG, length, pitch, layout, material); shell ID/OD and material; channel, tube sheets, floating head; baffles (type, % cut, spacing), supports, tube-to-tube-sheet joint, gaskets; code requirements, TEMA class, weights, remarks.`,
          answer: String.raw`TEMA, ASME VIII, API 660/661, HEI; the TEMA sheet lists size/type, process data for both sides, duty, MTD, U, ΔP, fouling and full construction details.` },
        { id: "2012-13-Q8d", label: "(d)", marks: "2+2+6",
          topic: "shell-tube", sub: "TEMA designation; plate-and-frame limits; extended surfaces",
          type: "theory", syllabus: "partial", repeats: [],
          text: String.raw`What do you mean by "SIZE 23-192 TYPE AES"? Mention the design limitations of a plate-and-frame heat exchanger. Why are extended surface heat exchangers used? Explain with examples.`,
          solution: String.raw`**SIZE 23-192 TYPE AES** (TEMA designation):
- 23 = nominal shell inside diameter, 23 in; 192 = straight tube length, 192 in (16 ft).
- A = front (stationary) head: channel with removable cover; E = one-pass shell; S = rear head: floating head with backing device (split-ring), so the bundle is removable and free to expand.

**Plate-and-frame limitations:**
- Pressure limited by gaskets and plate thickness (≈ 25–30 bar max).
- Temperature limited by gasket elastomers (≈ 150–250 °C).
- Narrow channels → high pressure drop; unsuitable for large vapour or gas volumes and for fluids with large solids/fibres.
- Long gasket length → leakage risk; gasket compatibility with fluids; not for very toxic or flammable fluids at high pressure.
- Maximum size limits flow rates per unit (≈ 2500 m³/h).

**Extended surfaces (fins):** $Q = hA\Delta T$; when one fluid has a low h (gases, air, viscous oils), its resistance $1/(hA)$ controls U. Adding fins increases A on that side cheaply, balancing the two resistances and making the unit compact.
Examples: finned-tube air-cooled exchangers and car radiators (air side), air-conditioning and refrigeration coils, economizers and air preheaters in boilers (flue gas), longitudinal-fin double-pipe exchangers for viscous oils, fins on motorcycle engines and transformers.`,
          answer: String.raw`23 in ID × 192 in tubes, A-head/E-shell/S floating head; P&F limited by gasket T and P, high ΔP, no gases/solids; fins boost area on the low-h (gas) side.` },
        { id: "2012-13-Q8e", label: "(e)", marks: "4+3",
          topic: "heat-exchangers", sub: "Trombone (cascade) cooler; cooling tower",
          type: "sketch", syllabus: "out", repeats: [],
          text: String.raw`Write a short note on trombone or cascade coolers with the necessary diagram. Draw a schematic diagram of a cooling tower.`,
          solution: String.raw`> Not covered in the current CHE 301 slides.

**Trombone (cascade, trickle, serpentine) cooler**
- A bank of straight horizontal pipes stacked one above the other in a vertical plane and connected at the ends by U-return bends, forming a continuous serpentine (looks like a trombone slide).
- The hot process fluid flows inside the pipes (usually entering at the bottom and leaving at the top, or vice versa).
- Cooling water is distributed from a perforated trough or spray header along the top pipe and trickles down over the outside of the pipes as a thin film; it is collected in a pan or basin underneath. Part of the water evaporates, which adds evaporative cooling.
- Used for corrosive liquids (pipes of glass, graphite, lead, cast iron), where water is scarce or dirty; easy to inspect and clean; but large space, low U, water splashing, open system.
- Sketch: vertical stack of 6–10 horizontal pipes joined by return bends at alternate ends; trough with water distribution at top; arrows showing water running down over pipes into a collecting pan; process inlet/outlet nozzles.

**Cooling tower schematic (induced-draft counter-flow)**
- Sketch: vertical tower; at the bottom a cold-water basin with outlet to pump; above it air inlet louvres on the sides; in the middle a fill/packing section (splash bars or film fill); above the fill a hot-water distribution header with spray nozzles fed by the warm return water; above that drift eliminators; at the top a fan stack with induced-draft fan discharging warm moist air.
- Arrows: water flows down through the fill, air enters at the louvres and flows up (counter-current); make-up water line and blowdown at the basin.`,
          answer: String.raw`Trombone cooler: serpentine bank of horizontal pipes with cooling water trickling over the outside; cooling tower: hot water sprayed over fill, air drawn up by fan, cold water collected in basin.` },
      ] },
  ]
});
