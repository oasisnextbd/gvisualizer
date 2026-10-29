QB.paper({
  year: "2014-15", date: "16/01/2016", marks: 210,
  rules: String.raw`Section A: answer any three of Q1–Q4. Section B: answer any three of Q5–Q8. Heat Transfer data booklet supplied. Separate scripts for each section.`,
  questions: [
    { id: "2014-15-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q1a", label: "(a)", marks: "15",
          topic: "conduction", sub: "Hollow cylinder, radial conduction",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive an expression for the heat flow rate through a hollow cylinder of length $L$ with inside radius $r_i$, outside radius $r_o$ and constant thermal conductivity $k$. The inside and outside surfaces of the hollow cylinder are held at constant temperatures $T_i$ and $T_o$, respectively. State the assumptions, if any.`,
          solution: String.raw`**Assumptions**
- Steady state, no internal heat generation.
- One-dimensional conduction in the radial direction only (long cylinder, $L \gg r_o$, end effects negligible; $T$ independent of $\theta$ and $z$).
- Constant thermal conductivity $k$.
- Isothermal surfaces: $T(r_i)=T_i$, $T(r_o)=T_o$.

### 1. Governing equation
Take a thin cylindrical shell of radius $r$, thickness $dr$, length $L$. In steady state with no generation, the heat entering at $r$ equals the heat leaving at $r+dr$, so the radial heat rate $q_r$ is the same at every radius:

$$\frac{dq_r}{dr}=0,\qquad q_r=-k\,(2\pi r L)\,\frac{dT}{dr}=\text{constant}$$

Equivalently, from the heat-conduction equation in cylindrical coordinates:

$$\frac{1}{r}\frac{d}{dr}\left(r\frac{dT}{dr}\right)=0$$

### 2. Temperature distribution
Integrate twice:

$$r\frac{dT}{dr}=C_1 \;\Rightarrow\; T(r)=C_1\ln r + C_2$$

Apply the boundary conditions:

$$T_i=C_1\ln r_i+C_2,\qquad T_o=C_1\ln r_o+C_2$$

$$C_1=\frac{T_i-T_o}{\ln(r_i/r_o)}=-\frac{T_i-T_o}{\ln(r_o/r_i)}$$

$$\frac{T(r)-T_o}{T_i-T_o}=\frac{\ln(r/r_o)}{\ln(r_i/r_o)}$$

The profile is logarithmic, not linear as in a plane wall.

### 3. Heat flow rate
$$q_r=-k(2\pi rL)\frac{dT}{dr}=-k(2\pi rL)\frac{C_1}{r}=-2\pi kL\,C_1$$

$$\boxed{q_r=\frac{2\pi kL\,(T_i-T_o)}{\ln(r_o/r_i)}}$$

### 4. Thermal resistance form
$$q_r=\frac{T_i-T_o}{R_{cyl}},\qquad R_{cyl}=\frac{\ln(r_o/r_i)}{2\pi kL}$$

The heat rate $q_r$ is independent of $r$, but the heat flux $q''=q_r/(2\pi rL)$ falls as $1/r$.

**Exam tip:** state the assumptions, show both integrations and the boundary conditions, then write the resistance form; it is reused straight away in composite-cylinder and critical-radius problems.`,
          answer: String.raw`$q=\dfrac{2\pi kL(T_i-T_o)}{\ln(r_o/r_i)}$, i.e. $R_{cyl}=\ln(r_o/r_i)/(2\pi kL)$, with a logarithmic temperature profile $T(r)=T_o+(T_i-T_o)\ln(r/r_o)/\ln(r_i/r_o)$.` },
        { id: "2014-15-Q1b", label: "(b)", marks: "5+15",
          topic: "conduction", sub: "Split insulation A/B on a steam pipe",
          type: "numerical", syllabus: "in", repeats: ["2017-18-Q7a"],
          text: String.raw`Steam flowing through a long, thin-walled pipe maintains the pipe wall at a uniform temperature of 500 K. The pipe is covered with an insulation blanket comprised of two different materials, A and B, as shown in the figure. The interface between the two materials may be assumed to have an infinite contact resistance, and the entire outer surface is exposed to air at 300 K and $h = 25\ \mathrm{W/m^2K}$. Heat transfer resistance of the thin wall is negligible.

*[Figure: pipe of radius $r_1 = 50$ mm covered by insulation to $r_2 = 100$ mm. The upper half of the insulation is material A ($k_A = 2\ \mathrm{W/m\,K}$), the lower half is material B ($k_B = 0.25\ \mathrm{W/m\,K}$).]*

(i) Draw the thermal resistance circuit for the system. (5)

(ii) What is the total heat loss from the pipe? What are the insulation outer surface temperatures near A and B? (15)`,
          solution: String.raw`**Given:** $T_1 = 500$ K (pipe wall = inner surface of insulation), $T_\infty = 300$ K, $h = 25\ \mathrm{W/m^2K}$, $r_1 = 0.05$ m, $r_2 = 0.10$ m, $k_A = 2$, $k_B = 0.25\ \mathrm{W/m\,K}$. Each material covers half the circumference.

**Find:** circuit; $q'$ (per metre of pipe); $T_{s,A}$, $T_{s,B}$.

**Assumptions:** steady, 1-D radial conduction in each half (the infinite contact resistance means no heat crosses the A/B interface), constant $k$, per unit length $L = 1$ m, radiation neglected.

### (i) Thermal circuit
Because no heat flows between A and B, the two halves are **two parallel branches** between the pipe wall ($T_1$) and the air ($T_\infty$). Each branch is a half-cylinder conduction resistance in **series** with the convection resistance of its own half of the outer surface:

$$T_1 \;\to\; \big[R'_{cond,A}\to T_{s,A}\to R'_{conv,A}\big] \;\|\; \big[R'_{cond,B}\to T_{s,B}\to R'_{conv,B}\big] \;\to\; T_\infty$$

Sketch: two horizontal resistor chains drawn one above the other, both starting at the node $T_1$ and ending at the node $T_\infty$; the middle node of the top chain is $T_{s,A}$, of the bottom chain $T_{s,B}$.

### (ii) Resistances (per metre)
For half a cylinder the conduction area is half that of a full cylinder, so $2\pi k$ becomes $\pi k$:

$$R'_{cond}=\frac{\ln(r_2/r_1)}{\pi k},\qquad R'_{conv}=\frac{1}{h\,\pi r_2}$$

$$R'_{cond,A}=\frac{\ln 2}{\pi(2)}=0.1103\ \mathrm{m\,K/W},\qquad R'_{cond,B}=\frac{\ln 2}{\pi(0.25)}=0.8825\ \mathrm{m\,K/W}$$

$$R'_{conv,A}=R'_{conv,B}=\frac{1}{25\,\pi\,(0.10)}=0.1273\ \mathrm{m\,K/W}$$

### Heat loss
$$q'_A=\frac{T_1-T_\infty}{R'_{cond,A}+R'_{conv}}=\frac{200}{0.1103+0.1273}=841.6\ \mathrm{W/m}$$

$$q'_B=\frac{200}{0.8825+0.1273}=198.0\ \mathrm{W/m}$$

$$q'=q'_A+q'_B=1040\ \mathrm{W/m}$$

### Outer surface temperatures
$$T_{s,A}=T_\infty+q'_A R'_{conv}=300+841.6(0.1273)=407\ \mathrm{K}$$

$$T_{s,B}=300+198.0(0.1273)=325\ \mathrm{K}$$

**Why it matters:** the high-$k$ half (A) carries about 81 % of the heat; a poor insulator on even half the circumference spoils the whole blanket.`,
          answer: String.raw`Two parallel branches (half-cylinder conduction + convection in series). $q' \approx 1040\ \mathrm{W/m}$ (842 through A, 198 through B); $T_{s,A}\approx 407$ K, $T_{s,B}\approx 325$ K.` },
      ] },
    { id: "2014-15-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q2a", label: "(a)", marks: "9+6",
          topic: "insulation", sub: "Critical radius of a cylinder",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the equation for the critical radius of insulation in a cylindrical system. What would you do to reduce heat loss if the bare pipe radius is smaller than the critical radius of insulation? Explain your answer with a schematic of heat loss vs. radius.`,
          solution: String.raw`**Set-up:** a pipe of outer radius $r_i$ at $T_i$ is covered with insulation ($k$) to outer radius $r$; the outer surface loses heat by convection ($h$) to $T_\infty$. Steady state, 1-D radial conduction, constant $k$ and $h$.

### Derivation
Two resistances in series (length $L$):

$$q=\frac{T_i-T_\infty}{\dfrac{\ln(r/r_i)}{2\pi kL}+\dfrac{1}{2\pi rLh}}$$

As $r$ increases the conduction resistance rises but the convection resistance falls (outer area grows). Find the extremum:

$$\frac{dq}{dr}=-\frac{(T_i-T_\infty)\left[\dfrac{1}{2\pi kL\,r}-\dfrac{1}{2\pi L h r^2}\right]}{\left[\dfrac{\ln(r/r_i)}{2\pi kL}+\dfrac{1}{2\pi rLh}\right]^2}=0$$

$$\frac{1}{kr}-\frac{1}{hr^2}=0\;\Rightarrow\;\boxed{r_{cr}=\frac{k}{h}}$$

Second derivative at $r=r_{cr}$: $\dfrac{d}{dr}\left(\dfrac{1}{kr}-\dfrac{1}{hr^2}\right)=-\dfrac{1}{kr^2}+\dfrac{2}{hr^3}=\dfrac{1}{r_{cr}^2 k}>0$, so the total resistance is a **minimum** and $q$ is a **maximum** at $r_{cr}$. (For a sphere the same steps give $r_{cr}=2k/h$.)

### If the bare radius $r_i < r_{cr}$
- Adding a thin layer **increases** the heat loss, which keeps rising until $r = r_{cr}$, then falls.
- To reduce heat loss you must either:
  1. add insulation **thick enough** that the outer radius goes well past $r_{cr}$, beyond the radius $r^*$ at which $q$ drops back to the bare-pipe value; only then does insulation save heat; or
  2. choose an insulation with a **lower $k$** (or accept a higher $h$) so that $r_{cr}=k/h \le r_i$; then any added thickness reduces the loss.
- Conversely, for electric wires (small $r_i$) adding insulation up to $r_{cr}$ is used deliberately to increase cooling.

### Schematic
Sketch: heat loss $q$ (vertical axis) vs. outer radius $r$ (horizontal axis), starting at the bare value $q_{bare}$ at $r=r_i$. The curve rises to a peak $q_{max}$ at $r=r_{cr}=k/h$, then falls, crossing $q_{bare}$ again at $r=r^*$ and continuing to decrease. Mark the regions: $r_i<r<r^*$ "insulation increases loss", $r>r^*$ "insulation reduces loss". A second curve for a case with $r_i>r_{cr}$ falls monotonically from $r_i$.`,
          answer: String.raw`$r_{cr}=k/h$ (maximum heat loss). If $r_i<r_{cr}$, either insulate well beyond the radius where $q$ returns to the bare value, or use a lower-$k$ insulation so that $k/h\le r_i$.` },
        { id: "2014-15-Q2b", label: "(b)", marks: "20",
          topic: "conduction", sub: "Composite sphere: insulation k test rig",
          type: "numerical", syllabus: "in", repeats: ["2020-21-Q8c"],
          text: String.raw`A hollow aluminium sphere, with an electrical heater in the centre, is used in tests to determine the thermal conductivity of insulating materials. The inner and outer radii of the sphere are 0.15 and 0.18 m, respectively, and testing is done under steady-state conditions with the inner surface of the aluminium maintained at 250°C. A spherical shell of insulation is cast on the outer surface of the sphere to a thickness of 0.12 m. The outside air temperature is 20°C and the convection coefficient at the outer surface of the insulation is $30\ \mathrm{W/m^2K}$. If 80 W heat is dissipated during the test, what is the thermal conductivity of the insulation? Conductivity of aluminium at 250°C is 230 W/m·K.`,
          solution: String.raw`**Given:** $r_1=0.15$ m, $r_2=0.18$ m, $r_3=0.18+0.12=0.30$ m; $T_1=250$°C, $T_\infty=20$°C; $h=30\ \mathrm{W/m^2K}$; $q=80$ W; $k_{Al}=230\ \mathrm{W/m\,K}$.

**Find:** $k_{ins}$.

**Assumptions:** steady, 1-D radial conduction, constant properties, no contact resistance, radiation neglected.

### 1. Series resistances
$$R_{sph}=\frac{1/r_a-1/r_b}{4\pi k},\qquad R_{conv}=\frac{1}{h\,4\pi r_3^2}$$

$$R_{Al}=\frac{1/0.15-1/0.18}{4\pi(230)}=3.84\times10^{-4}\ \mathrm{K/W}$$

$$R_{conv}=\frac{1}{30\cdot4\pi(0.30)^2}=0.02947\ \mathrm{K/W}$$

### 2. Total resistance from the measured heat rate
$$R_{tot}=\frac{T_1-T_\infty}{q}=\frac{250-20}{80}=2.875\ \mathrm{K/W}$$

$$R_{ins}=R_{tot}-R_{Al}-R_{conv}=2.875-0.000384-0.02947=2.845\ \mathrm{K/W}$$

### 3. Conductivity of the insulation
$$k_{ins}=\frac{1/r_2-1/r_3}{4\pi R_{ins}}=\frac{1/0.18-1/0.30}{4\pi(2.845)}=0.0622\ \mathrm{W/m\,K}$$

Check: aluminium/insulation interface $T_2=250-80(3.84\times10^{-4})\approx 249.97$°C; outer surface $T_3=20+80(0.02947)=22.4$°C.

**Why it matters:** the aluminium and the outer film together take only about 1 % of the driving force, so almost all of the 230 K drop is across the insulation, which is what makes the rig a good k-tester.`,
          answer: String.raw`$k_{ins}\approx 0.062\ \mathrm{W/m\,K}$ ($R_{ins}=2.845$ K/W of $R_{tot}=2.875$ K/W).` },
      ] },
    { id: "2014-15-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q3a", label: "(a)", marks: "15",
          topic: "boundary-layer", sub: "Reynolds–Colburn analogy derivation",
          type: "derivation", syllabus: "in", repeats: ["2011-12-Q7a", "2015-16-Q8a", "2016-17-Q8a", "2017-18-Q8a", "2020-21-Q7a", "2022-23-Q3a"],
          text: String.raw`Consider a fluid flowing past a flat plate where the friction coefficient is $C_f$. The velocity distribution and the laminar boundary layer thickness for the fluid can be expressed by the following equations, respectively:

$$\frac{u}{u_\infty}=\frac{3}{2}\frac{y}{\delta}-\frac{1}{2}\left(\frac{y}{\delta}\right)^3,\qquad \delta=4.64\sqrt{\frac{\nu x}{u_\infty}}$$

where $u_\infty$ is the fluid velocity outside the boundary layer. Other symbols have their usual meanings. Derive a relation between fluid friction and heat transfer for laminar flow on a flat plate that is also known as the Reynolds–Colburn analogy:

$$St_x\,Pr^{2/3}=\frac{C_{fx}}{2}$$

where $St_x$ is the local Stanton number, $St_x=\dfrac{h_x}{\rho c_p u_\infty}$.`,
          solution: String.raw`**Assumptions:** steady, laminar, incompressible flow over a flat plate at zero pressure gradient; constant properties; constant wall temperature $T_w$ with heating starting at the leading edge; $Pr \ge 0.6$ so that $\delta_t \le \delta$.

### 1. Wall shear stress and friction coefficient
$$\tau_w=\mu\left.\frac{\partial u}{\partial y}\right|_{y=0}=\mu u_\infty\left[\frac{3}{2\delta}-\frac{3}{2}\frac{y^2}{\delta^3}\right]_{y=0}=\frac{3\mu u_\infty}{2\delta}$$

$$C_{fx}=\frac{\tau_w}{\tfrac12\rho u_\infty^2}=\frac{3\nu}{u_\infty\delta}=\frac{3\nu}{u_\infty\,4.64\sqrt{\nu x/u_\infty}}=\frac{3}{4.64}\,Re_x^{-1/2}$$

$$\frac{C_{fx}}{2}=0.323\,Re_x^{-1/2}\qquad(\text{exact Blasius: }0.332\,Re_x^{-1/2})$$

### 2. Thermal boundary layer
Use the same cubic shape for the temperature, $\theta=T-T_w$, over the thermal layer $\delta_t$:

$$\frac{\theta}{\theta_\infty}=\frac{3}{2}\frac{y}{\delta_t}-\frac12\left(\frac{y}{\delta_t}\right)^3$$

Substitute both profiles into the energy integral equation $\dfrac{d}{dx}\displaystyle\int_0^{\delta_t}(T_\infty-T)u\,dy=\alpha\left.\dfrac{\partial T}{\partial y}\right|_0$. With $\zeta=\delta_t/\delta<1$ the integral is $\theta_\infty u_\infty\delta\left(\tfrac{3}{20}\zeta^2-\tfrac{3}{280}\zeta^4\right)\approx\tfrac{3}{20}\theta_\infty u_\infty\delta\zeta^2$, so (for $\zeta$ constant, heating from the leading edge):

$$\frac{3}{20}u_\infty\zeta^2\frac{d\delta}{dx}=\frac{3\alpha}{2\delta\zeta}\;\Rightarrow\;\zeta^3\,\delta\frac{d\delta}{dx}=\frac{10\alpha}{u_\infty}$$

From $\delta^2=\tfrac{280}{13}\nu x/u_\infty$ (i.e. $\delta=4.64\sqrt{\nu x/u_\infty}$), $\delta\,d\delta/dx=\tfrac{140}{13}\nu/u_\infty$. Hence

$$\zeta^3=\frac{13}{14\,Pr}\;\Rightarrow\;\frac{\delta_t}{\delta}=0.976\,Pr^{-1/3}=\frac{Pr^{-1/3}}{1.026}$$

### 3. Local heat transfer coefficient
$$q''_w=-k\left.\frac{\partial T}{\partial y}\right|_0=\frac{3k(T_w-T_\infty)}{2\delta_t}\;\Rightarrow\;h_x=\frac{3k}{2\delta_t}=\frac{3k}{2\delta}\,(1.026\,Pr^{1/3})$$

$$Nu_x=\frac{h_xx}{k}=\frac{3(1.026)}{2(4.64)}\,Re_x^{1/2}Pr^{1/3}=0.332\,Re_x^{1/2}Pr^{1/3}$$

### 4. Stanton number and the analogy
$$St_x=\frac{h_x}{\rho c_p u_\infty}=\frac{Nu_x}{Re_x\,Pr}=0.332\,Re_x^{-1/2}Pr^{-2/3}$$

$$St_x\,Pr^{2/3}=0.332\,Re_x^{-1/2}$$

Comparing with step 1, the right-hand side is $C_{fx}/2$ (0.332 from the exact Blasius solution; the cubic profile gives 0.323, within 3 %):

$$\boxed{St_x\,Pr^{2/3}=\frac{C_{fx}}{2}}$$

This is the Reynolds–Colburn analogy. For $Pr = 1$ it reduces to Reynolds' analogy $St_x = C_{fx}/2$. Integrating over the plate gives the same relation for average values, $\overline{St}\,Pr^{2/3}=\overline{C_f}/2$.

**Exam tip:** state that it lets you get heat transfer from a friction (drag) measurement and vice versa, and that it holds for $0.6 < Pr < 60$ and zero pressure gradient.`,
          answer: String.raw`$C_{fx}/2 = 0.332\,Re_x^{-1/2}$ and $St_x = 0.332\,Re_x^{-1/2}Pr^{-2/3}$, so $St_x Pr^{2/3} = C_{fx}/2$ (Reynolds–Colburn analogy).` },
        { id: "2014-15-Q3b", label: "(b)", marks: "10+10",
          topic: "boundary-layer", sub: "Heat transfer and drag via the analogy",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Air at 27°C and 1 atm flows over a flat plate at a speed of 2 m/s. The plate is heated over its entire length to a temperature of 60°C. Calculate the heat transferred in the first 40 cm of the plate. Also compute the drag force exerted on the first 40 cm of the plate using the analogy between fluid friction and heat transfer.

[HINT: Use the average heat transfer coefficient to calculate the heat transfer Stanton number.]`,
          solution: String.raw`**Given:** $T_\infty=27$°C, $T_w=60$°C, $p=1$ atm, $u_\infty=2$ m/s, $L=0.4$ m. Take a plate width of 1 m.

**Find:** $q$ over the first 0.4 m; drag $D$ from $\overline{St}\,Pr^{2/3}=\overline{C_f}/2$.

**Assumptions:** steady, laminar (checked), constant properties at the film temperature, heating from the leading edge.

### 1. Properties at the film temperature
$T_f=(27+60)/2=43.5$°C $=316.7$ K. Air, Holman Table A-5 (interpolated between 300 K and 350 K):

| Property | Value |
|---|---|
| $\nu$ | $17.38\times10^{-6}\ \mathrm{m^2/s}$ |
| $k$ | $0.02750\ \mathrm{W/m\,K}$ |
| $Pr$ | 0.704 |
| $c_p$ | $1007\ \mathrm{J/kg\,K}$ |
| $\rho=p/(RT_f)$ | $101325/(287\times316.7)=1.115\ \mathrm{kg/m^3}$ |

### 2. Reynolds number
$$Re_L=\frac{u_\infty L}{\nu}=\frac{2(0.4)}{17.38\times10^{-6}}=4.60\times10^4<5\times10^5\;\Rightarrow\;\text{laminar}$$

### 3. Average heat transfer coefficient
Average of the local laminar result $Nu_x = 0.332Re_x^{1/2}Pr^{1/3}$:

$$\overline{Nu}_L=0.664\,Re_L^{1/2}Pr^{1/3}=0.664(4.60\times10^4)^{1/2}(0.704)^{1/3}=126.8$$

$$\bar h=\frac{\overline{Nu}_Lk}{L}=\frac{126.8(0.02750)}{0.4}=8.72\ \mathrm{W/m^2K}$$

### 4. Heat transferred (per metre width)
$$q=\bar h\,(L\times1)(T_w-T_\infty)=8.72(0.4)(60-27)=115\ \mathrm{W}$$

### 5. Drag from the analogy
$$\overline{St}=\frac{\bar h}{\rho c_p u_\infty}=\frac{8.72}{1.115(1007)(2)}=3.88\times10^{-3}$$

$$\frac{\overline{C_f}}{2}=\overline{St}\,Pr^{2/3}\;\Rightarrow\;\overline{C_f}=2(3.88\times10^{-3})(0.704)^{2/3}=6.15\times10^{-3}$$

(Check: Blasius $\overline{C_f}=1.328Re_L^{-1/2}=6.19\times10^{-3}$, consistent.)

$$\bar\tau_w=\overline{C_f}\,\frac{\rho u_\infty^2}{2}=6.15\times10^{-3}\,\frac{1.115(2)^2}{2}=0.0137\ \mathrm{N/m^2}$$

$$D=\bar\tau_w\,(L\times1)=0.0137(0.4)=5.48\times10^{-3}\ \mathrm{N}$$

**Exam tip:** use average values in the analogy for a whole plate, and give results "per metre width" if the width is not stated.`,
          answer: String.raw`$Re_L=4.6\times10^4$ (laminar), $\bar h\approx8.7\ \mathrm{W/m^2K}$, $q\approx115$ W per m width; $\overline{C_f}\approx6.15\times10^{-3}$, drag $\approx5.5\times10^{-3}$ N per m width.` },
      ] },
    { id: "2014-15-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q4a", label: "(a)", marks: "10",
          topic: "convection-basics", sub: "Nusselt and Prandtl numbers",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Define the Nusselt number and Prandtl number. Explain their physical significance. What are the typical values of Prandtl number for gases and liquid metals?`,
          solution: String.raw`### Nusselt number
$$Nu=\frac{hL_c}{k_f}$$

($k_f$ = conductivity of the **fluid**, $L_c$ = characteristic length.)

- It is the dimensionless heat transfer coefficient: the ratio of convective heat transfer to pure conductive heat transfer across the same fluid layer of thickness $L_c$,
$$Nu=\frac{q''_{conv}}{q''_{cond}}=\frac{h\Delta T}{k\Delta T/L_c}$$
- $Nu = 1$ means heat crosses the layer by conduction only (stagnant fluid); larger $Nu$ means more effective convection.
- It is also the dimensionless temperature gradient at the wall, $Nu=\left.\partial(\Delta T/\Delta T_\infty)/\partial(y/L_c)\right|_{0}$.

### Prandtl number
$$Pr=\frac{\nu}{\alpha}=\frac{\mu/\rho}{k/(\rho c_p)}=\frac{c_p\mu}{k}$$

- Ratio of momentum diffusivity to thermal diffusivity: how fast momentum diffuses through the fluid compared with heat.
- It fixes the relative thickness of the velocity and thermal boundary layers: $\delta_t/\delta \approx Pr^{-1/3}/1.026$ (laminar flat plate). $Pr \ll 1$: heat diffuses much faster, $\delta_t \gg \delta$. $Pr \gg 1$: $\delta_t \ll \delta$.
- It is a fluid property (depends only on the fluid and its state).

### Typical values

| Fluid | $Pr$ |
|---|---|
| Liquid metals (Hg, Na, NaK) | 0.004–0.03 |
| Gases (air ≈ 0.7) | 0.7–1.0 |
| Water | 1.7–13.7 |
| Light organics | 5–50 |
| Oils | 50–100 000 |

**Takeaway:** $Nu$ measures convection against conduction in the fluid; $Pr$ measures momentum against heat diffusion and sets $\delta/\delta_t$.`,
          answer: String.raw`$Nu = hL/k$ (convection vs conduction across the fluid); $Pr = \nu/\alpha$ (momentum vs thermal diffusivity, sets $\delta/\delta_t$). Gases $Pr\approx0.7$–1; liquid metals $Pr\approx0.004$–0.03.` },
        { id: "2014-15-Q4b", label: "(b)", marks: "25",
          topic: "forced-convection", sub: "Laminar oil in a tube, thermal entrance (Hausen)",
          type: "numerical", syllabus: "in", repeats: ["2017-18-Q8b"],
          text: String.raw`Engine oil is heated by flowing through a circular tube of diameter $D = 50$ mm and length $L = 25$ m, whose surface is maintained at 150°C. If the flow rate and inlet temperature of the oil are 0.5 kg/s and 20°C, what is the outlet oil temperature? What is the total heat transfer rate for the tube? Assume that the thermal entrance region prevails in the entire tube length.

[HINT: Assume an outlet temperature, evaluate the fluid properties at the mean temperature and from a heat balance calculate the outlet temperature. Iterate till you get a reasonable value for the outlet temperature.]`,
          solution: String.raw`**Given:** $D=0.05$ m, $L=25$ m, $T_s=150$°C (constant), $\dot m=0.5$ kg/s, $T_{m,i}=20$°C.

**Find:** $T_{m,o}$ and $q$.

**Assumptions:** steady; constant wall temperature; laminar flow with a developing temperature profile over the whole length (as stated); properties at the mean bulk temperature; viscous dissipation and axial conduction negligible.

### 1. Properties (first guess $T_{m,o}\approx 40$°C, then iterate)
Engine oil (unused), Incropera Table A.5, interpolated between 300 K and 310 K. The converged mean temperature is $\bar T_m=(20+36.4)/2=28.2$°C $=301.3$ K:

| Property at 301.3 K | Value |
|---|---|
| $\rho$ | $883\ \mathrm{kg/m^3}$ |
| $c_p$ | $1915\ \mathrm{J/kg\,K}$ |
| $\mu$ | $0.455\ \mathrm{N\,s/m^2}$ |
| $k$ | $0.145\ \mathrm{W/m\,K}$ |
| $Pr$ | 6000 |

### 2. Flow regime
$$Re_D=\frac{4\dot m}{\pi D\mu}=\frac{4(0.5)}{\pi(0.05)(0.455)}=28.0\quad(\text{laminar})$$

Thermal entry length $x_{fd,t}\approx0.05Re_DPr\,D=0.05(28.0)(6000)(0.05)\approx420$ m $\gg 25$ m, so the whole tube is indeed in the thermal entrance region.

### 3. Heat transfer coefficient: Hausen (constant $T_s$, average over the length)
$$Gz=Re_DPr\frac{D}{L}=28.0(6000)\frac{0.05}{25}=335.8$$

$$\overline{Nu}_D=3.66+\frac{0.0668\,Gz}{1+0.04\,Gz^{2/3}}=3.66+\frac{0.0668(335.8)}{1+0.04(335.8)^{2/3}}=11.31$$

$$\bar h=\frac{\overline{Nu}_Dk}{D}=\frac{11.31(0.145)}{0.05}=32.8\ \mathrm{W/m^2K}$$

### 4. Outlet temperature (constant wall temperature)
$$\frac{T_s-T_{m,o}}{T_s-T_{m,i}}=\exp\left(-\frac{\bar h\,\pi DL}{\dot mc_p}\right)=\exp\left(-\frac{32.8\,\pi(0.05)(25)}{0.5(1915)}\right)=0.874$$

$$T_{m,o}=150-130(0.874)=36.4\ ^\circ\mathrm C$$

### 5. Iteration summary

| Trial $T_{m,o}$ (°C) | $\bar T_m$ (K) | $Re_D$ | $\bar h$ | New $T_{m,o}$ (°C) |
|---|---|---|---|---|
| 40 | 303.2 | 30.9 | 32.83 | 36.32 |
| 36.32 | 301.3 | 27.95 | 32.80 | 36.37 |
| 36.37 | 301.3 | 27.99 | 32.80 | 36.37 (converged) |

### 6. Heat transfer rate
$$q=\dot mc_p(T_{m,o}-T_{m,i})=0.5(1915)(36.4-20)=1.57\times10^4\ \mathrm W$$

Check with the LMTD: $\Delta T_{lm}=\dfrac{130-113.6}{\ln(130/113.6)}=121.6$ K, $q=\bar h\pi DL\,\Delta T_{lm}=32.8(3.927)(121.6)=15.7$ kW. ✓

**Why it matters:** with $Re\approx28$ and $Pr\approx6000$ the oil warms only 16 K in 25 m; viscous oils have low $h$, which is why oil heaters use high velocities or extended surfaces. (The Sieder–Tate laminar form $1.86(RePrD/L)^{1/3}(\mu/\mu_w)^{0.14}$ is not used: at the 150°C wall the oil viscosity is roughly 40–85 times lower than at the bulk temperature, far outside the $\mu/\mu_w$ range the correlation was fitted for. Hausen, for constant wall temperature with a developing thermal profile, is the one that matches the hint.)`,
          answer: String.raw`$Re_D\approx28$ (laminar), Hausen $\overline{Nu}\approx11.3$, $\bar h\approx32.8\ \mathrm{W/m^2K}$; $T_{m,o}\approx36.4$°C, $q\approx15.7$ kW.` },
      ] },
    { id: "2014-15-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q5a", label: "(a)", marks: "5",
          topic: "natural-convection", sub: "Rayleigh number and transition",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`The Rayleigh number is important to characterize the laminar-to-turbulent transition of a free convection boundary layer flow. True/False? Explain your answer.`,
          solution: String.raw`**True.**

- In free convection there is no imposed velocity, so the Reynolds number cannot be used. The flow is driven by buoyancy and resisted by viscosity, and the thermal layer is spread by heat diffusion.
- The Grashof number $Gr=g\beta\Delta TL^3/\nu^2$ is the ratio of buoyancy to viscous forces; multiplying by $Pr=\nu/\alpha$ gives the Rayleigh number
$$Ra=Gr\,Pr=\frac{g\beta\Delta TL^3}{\nu\alpha}$$
which includes both the momentum and the thermal diffusion that damp disturbances.
- Transition on a vertical plate occurs at a critical value $Ra_{x,c}\approx10^9$: laminar for $Ra<10^9$, turbulent above. This is why the correlations $Nu=C(GrPr)^n$ change from $n=1/4$ (laminar) to $n=1/3$ (turbulent) at about $Ra=10^9$, and why Churchill–Chu is written in terms of $Ra$.

**Takeaway:** $Ra = Gr\,Pr$ plays the role that $Re$ plays in forced convection; transition at $Ra\approx10^9$ on vertical surfaces.`,
          answer: String.raw`True: transition is governed by $Ra = Gr\,Pr$ (buoyancy vs viscous and thermal diffusion), with $Ra_c\approx10^9$ on a vertical plate.` },
        { id: "2014-15-Q5b", label: "(b)", marks: "5",
          topic: "natural-convection", sub: "Forced vs free convection",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Write down the differences between forced convection and free convection.`,
          solution: String.raw`| Aspect | Forced convection | Free (natural) convection |
|---|---|---|
| Cause of motion | External agent: pump, fan, blower, wind | Buoyancy from density differences caused by temperature differences in a gravity field |
| Velocity | Imposed, independent of heat transfer | Created by the heat transfer itself; zero far from the surface and zero at the wall |
| Governing groups | $Nu=f(Re,Pr)$ | $Nu=f(Gr,Pr)$ or $f(Ra)$ |
| Transition | $Re_c\approx5\times10^5$ (plate), 2300 (tube) | $Ra_c\approx10^9$ (vertical plate) |
| Typical $h$ (gases) | 25–250 $\mathrm{W/m^2K}$ | 2–25 $\mathrm{W/m^2K}$ |
| Typical $h$ (liquids) | 50–20 000 $\mathrm{W/m^2K}$ | 50–1000 $\mathrm{W/m^2K}$ |
| Velocity profile | Maximum at the edge of the boundary layer ($u_\infty$) | Maximum inside the layer, zero at both the wall and the edge |
| Control | Rate can be set by the designer | Cannot be controlled directly; depends on $\Delta T$ and geometry/orientation |
| Examples | Car radiator, air-cooled CPU with fan | Hot plate in still air, room radiator, transformer fins |`,
          answer: String.raw`Forced: motion imposed externally, $Nu=f(Re,Pr)$, higher $h$. Free: motion from buoyancy, $Nu=f(Gr,Pr)$, lower $h$, velocity zero at wall and far away.` },
        { id: "2014-15-Q5c", label: "(c)", marks: "10",
          topic: "heat-exchangers", sub: "Shell-side equivalent diameter (square and triangular pitch)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the expression for the equivalent diameter for square-pitch and triangular-pitch tube arrangements of a shell-and-tube heat exchanger.`,
          solution: String.raw`**Definition (Kern):** for the shell side, the equivalent diameter is four times the free flow area divided by the wetted (heat-transfer) perimeter, taken for the repeating cell of the tube layout:

$$D_e=\frac{4\times\text{free flow area}}{\text{wetted perimeter}}$$

Let $P_T$ = tube pitch, $d_o$ = tube outside diameter.

### Square pitch
The repeating cell is a square of side $P_T$ with a tube at each corner; one quarter of four tubes = **one full tube** lies inside it.

- Free area: $P_T^2-\dfrac{\pi d_o^2}{4}$
- Wetted perimeter: $\pi d_o$ (one full tube circumference)

$$\boxed{D_e=\frac{4\left(P_T^2-\dfrac{\pi d_o^2}{4}\right)}{\pi d_o}}$$

### Triangular pitch
The repeating cell is an equilateral triangle of side $P_T$ joining three tube centres. Its height is $P_T\sin60°=0.866P_T\approx0.86P_T$. Each corner contains a $60°$ sector, $3\times60°=180°$, i.e. **half a tube**.

- Free area: $\dfrac12P_T(0.86P_T)-\dfrac12\cdot\dfrac{\pi d_o^2}{4}$
- Wetted perimeter: $\dfrac12\pi d_o$

$$\boxed{D_e=\frac{4\left(\dfrac12P_T\times0.86P_T-\dfrac12\cdot\dfrac{\pi d_o^2}{4}\right)}{\dfrac12\pi d_o}}$$

### Example values
- $\tfrac34$ in OD on 1 in square pitch: $D_e=\dfrac{4(1-0.4418)}{\pi(0.75)}=0.95$ in.
- $\tfrac34$ in OD on $\tfrac{15}{16}$ in triangular pitch: $D_e=0.53$ in (Kern's Fig. 28 table lists 0.55 in).

**Exam tip:** draw the square and the triangle cells with the shaded free area and the tube arcs; the key point is "one tube per square cell, half a tube per triangular cell".`,
          answer: String.raw`Square: $D_e=4(P_T^2-\pi d_o^2/4)/(\pi d_o)$. Triangular: $D_e=4(\tfrac12P_T\cdot0.86P_T-\tfrac12\pi d_o^2/4)/(\tfrac12\pi d_o)$.` },
        { id: "2014-15-Q5d", label: "(d)", marks: "5",
          topic: "heat-exchangers", sub: "Temperature profiles: boiling and condensing",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the temperature distribution profile for double-pipe heat exchanger equipment for (i) boiling and (ii) condensing cases.`,
          solution: String.raw`Axes for both sketches: temperature $T$ (vertical) vs. length along the exchanger, or area $A$ (horizontal), from inlet to outlet.

### (i) Boiling (cold fluid evaporates at constant $T_{sat}$)
- Cold fluid: a **horizontal straight line** at $T_{sat}$ (latent heat absorbed, temperature constant).
- Hot fluid: a curve falling from $T_{h,i}$ to $T_{h,o}$, concave upward, approaching the $T_{sat}$ line; the gap $\Delta T$ shrinks along the length.
- Label $\Delta T_1=T_{h,i}-T_{sat}$ and $\Delta T_2=T_{h,o}-T_{sat}$.

### (ii) Condensing (hot fluid condenses at constant $T_{sat}$)
- Hot fluid: a **horizontal straight line** at $T_{sat}$.
- Cold fluid: a curve rising from $T_{c,i}$ to $T_{c,o}$, concave downward, approaching $T_{sat}$.
- Label $\Delta T_1=T_{sat}-T_{c,i}$ and $\Delta T_2=T_{sat}-T_{c,o}$.

**Key points**
- Because one stream stays at constant temperature, its heat-capacity rate is effectively infinite ($C_{min}/C_{max}\to0$). Parallel flow and counterflow give the **same** profile and the same LMTD, and $F_T=1$ for any multipass arrangement.
- (Optional refinement: with superheated vapour or subcooled condensate the hot line has a short sloping section at each end.)`,
          answer: String.raw`Boiling: cold line flat at $T_{sat}$, hot curve falls towards it. Condensing: hot line flat at $T_{sat}$, cold curve rises towards it. Flow direction does not matter ($F=1$).` },
        { id: "2014-15-Q5e", label: "(e)", marks: "5",
          topic: "heat-exchangers", sub: "Counterflow vs parallel flow",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why is a counterflow heat exchanger more effective than a parallel-flow heat exchanger?`,
          solution: String.raw`- **More uniform $\Delta T$:** in counterflow the hot inlet meets the cold outlet and the hot outlet meets the cold inlet, so the temperature difference stays nearly constant along the length. In parallel flow $\Delta T$ is very large at the inlet and collapses towards the outlet.
- **Larger LMTD for the same terminal temperatures**, so less area is needed for the same duty ($q=UA\Delta T_{lm}$). Example: hot 100→60°C, cold 20→50°C: counterflow $\Delta T_{lm}=44.8$ K, parallel flow $\Delta T_{lm}=33.7$ K, so parallel flow needs about 33 % more area. The slides' example: hot 300→200°F, cold 100→150°F gives counterflow LMTD = 123.5°F against 108°F for parallel flow; with cold 150→200°F, parallel flow is impossible (outlet ΔT = 0) while counterflow still gives 72°F.
- **Outlet temperature limit:** in parallel flow the cold outlet can never exceed the hot outlet ($t_2<T_2$). In counterflow $t_2$ can exceed $T_2$ and approach $T_1$.
- **Higher maximum effectiveness** (ε–NTU view, from the textbook, not in the slides): as $NTU\to\infty$, counterflow $\varepsilon\to1$ for any $C_r$; parallel flow is limited to $\varepsilon_{max}=1/(1+C_r)$ (only 0.5 when $C_r=1$).
- Smaller thermal stresses (smaller local $\Delta T$ at any section).
- Exception: when one fluid changes phase at constant temperature ($C_r=0$) both arrangements perform the same.`,
          answer: String.raw`Counterflow keeps $\Delta T$ more uniform, gives the larger LMTD (less area), allows $t_2 > T_2$, and its effectiveness can approach 1; parallel flow is capped at $1/(1+C_r)$.` },
        { id: "2014-15-Q5f", label: "(f)", marks: "5",
          topic: "natural-convection", sub: "Criterion: natural vs forced (Gr/Re²)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the criteria to know whether natural or forced convection dominates?`,
          solution: String.raw`The ratio of buoyancy to inertia forces is $Gr/Re^2$:

$$\frac{Gr_L}{Re_L^2}=\frac{g\beta\Delta TL^3/\nu^2}{(u_\infty L/\nu)^2}=\frac{g\beta\Delta TL}{u_\infty^2}$$

| $Gr/Re^2$ | Regime | What to use |
|---|---|---|
| $\ll1$ (about $<0.1$) | Forced convection dominates; natural convection negligible | Forced correlation $Nu=f(Re,Pr)$ |
| $\approx1$ (0.1–10) | Mixed (combined) convection; both matter | Combine, e.g. $Nu^n=Nu_F^n\pm Nu_N^n$ (+ for assisting, − for opposing flow) |
| $\gg1$ (about $>10$) | Natural convection dominates | Free-convection correlation $Nu=f(Gr,Pr)$ |

Other points: if there is no imposed velocity it is natural convection; low velocities with large $\Delta T$ and large vertical dimensions favour natural convection; the relative direction of buoyancy and forced flow (assisting, opposing, transverse) also matters.`,
          answer: String.raw`Use $Gr/Re^2$: $\ll1$ forced, $\approx1$ mixed, $\gg1$ natural convection.` },
      ] },
    { id: "2014-15-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q6a", label: "(a)", marks: "25",
          topic: "condensation", sub: "Nusselt film condensation on a vertical plate",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`A vertical plate of length $L$ and width $b$ is maintained at temperature $T_s$. The outside vapour temperature is $T_{sat}$, where $T_s < T_{sat}$.

(i) Find the mass flow rate of the condensate at a location $x$ where the boundary layer (film) thickness is $\delta$.

(ii) Derive the relationship of the film thickness $\delta$ as a function of the vertical distance $x$.

(iii) The average heat transfer coefficient for vertical film condensation can be expressed in terms of a modified Nusselt number. Show that

$$\frac{\bar h\,(\nu^2/g)^{1/3}}{k}=1.47\,Re_\delta^{-1/3}\qquad\text{for } Re_\delta\le30$$`,
          solution: String.raw`**Nusselt's assumptions**
- Laminar film, plate and vapour at constant $T_s$ and $T_{sat}$; vapour is pure and at $T_{sat}$.
- Gravity and viscous forces only; inertia (acceleration) of the film negligible.
- No shear at the liquid–vapour interface ($\partial u/\partial y=0$ at $y=\delta$).
- Heat crosses the film by conduction only, so the temperature profile in the film is linear.
- Constant liquid properties; subcooling of the liquid neglected (or allowed for by $h^*_{fg}$).

Coordinates: $x$ downwards from the top of the plate, $y$ normal to the plate.

### (i) Velocity profile and condensate flow rate
Force balance on a liquid element between $y$ and $\delta$, of height $dx$ and unit width: weight $-$ buoyancy $=$ viscous shear at $y$:

$$\rho_l g(\delta-y)\,dx-\rho_v g(\delta-y)\,dx=\mu_l\frac{du}{dy}\,dx$$

$$\frac{du}{dy}=\frac{g(\rho_l-\rho_v)}{\mu_l}(\delta-y)$$

Integrate with $u(0)=0$:

$$u(y)=\frac{g(\rho_l-\rho_v)}{\mu_l}\left(\delta y-\frac{y^2}{2}\right)$$

Mass flow rate through a section at $x$ (width $b$):

$$\dot m(x)=\int_0^\delta\rho_l\,u\,b\,dy=\frac{\rho_lg(\rho_l-\rho_v)b}{\mu_l}\left[\frac{\delta^3}{2}-\frac{\delta^3}{6}\right]$$

$$\boxed{\dot m(x)=\frac{g\rho_l(\rho_l-\rho_v)\,b\,\delta^3}{3\mu_l}}$$

### (ii) Film thickness $\delta(x)$
Heat conducted through the film between $x$ and $x+dx$ condenses the extra mass $d\dot m$:

$$h_{fg}\,d\dot m=k_l\,(b\,dx)\,\frac{T_{sat}-T_s}{\delta}$$

From (i): $d\dot m=\dfrac{g\rho_l(\rho_l-\rho_v)b\,\delta^2}{\mu_l}\,d\delta$. Equating:

$$\frac{g\rho_l(\rho_l-\rho_v)h_{fg}}{\mu_l}\,\delta^3\,d\delta=k_l(T_{sat}-T_s)\,dx$$

Integrate from $\delta=0$ at $x=0$:

$$\frac{\delta^4}{4}=\frac{\mu_lk_l(T_{sat}-T_s)\,x}{g\rho_l(\rho_l-\rho_v)h_{fg}}$$

$$\boxed{\delta(x)=\left[\frac{4\mu_lk_l(T_{sat}-T_s)\,x}{g\rho_l(\rho_l-\rho_v)h_{fg}}\right]^{1/4}}$$

### Heat transfer coefficient
Local: $h_x=k_l/\delta(x)$, i.e.

$$h_x=\left[\frac{g\rho_l(\rho_l-\rho_v)h_{fg}k_l^3}{4\mu_l(T_{sat}-T_s)\,x}\right]^{1/4}\propto x^{-1/4}$$

Average over $L$: $\bar h=\dfrac1L\displaystyle\int_0^Lh_x\,dx=\dfrac43h_{x=L}$:

$$\bar h=0.943\left[\frac{g\rho_l(\rho_l-\rho_v)h_{fg}k_l^3}{\mu_l(T_{sat}-T_s)L}\right]^{1/4}$$

### (iii) Modified Nusselt number in terms of $Re_\delta$
Film Reynolds number at the bottom (wetted perimeter $p=b$):

$$Re_\delta=\frac{4\dot m}{b\,\mu_l},\qquad \dot m=\frac{q}{h_{fg}}=\frac{\bar h\,(bL)(T_{sat}-T_s)}{h_{fg}}$$

$$\Rightarrow\;\frac{L(T_{sat}-T_s)}{h_{fg}}=\frac{\mu_lRe_\delta}{4\bar h}$$

Raise $\bar h$ to the 4th power and substitute this group:

$$\bar h^4=(0.943)^4\frac{g\rho_l(\rho_l-\rho_v)k_l^3}{\mu_l}\cdot\frac{h_{fg}}{L(T_{sat}-T_s)}=(0.943)^4\frac{g\rho_l(\rho_l-\rho_v)k_l^3}{\mu_l}\cdot\frac{4\bar h}{\mu_lRe_\delta}$$

$$\bar h^3=4(0.943)^4\,\frac{g\rho_l(\rho_l-\rho_v)k_l^3}{\mu_l^2}\,Re_\delta^{-1}$$

With $\rho_v\ll\rho_l$, $\rho_l(\rho_l-\rho_v)/\mu_l^2\approx1/\nu_l^2$:

$$\bar h=\left[4(0.943)^4\right]^{1/3}k_l\left(\frac{g}{\nu_l^2}\right)^{1/3}Re_\delta^{-1/3},\qquad[4(0.7908)]^{1/3}=1.468$$

$$\boxed{\frac{\bar h(\nu_l^2/g)^{1/3}}{k_l}=1.47\,Re_\delta^{-1/3}}$$

Valid for wave-free laminar films, $Re_\delta\le30$. Above 30 the film becomes wavy-laminar and $\bar h$ is higher than this prediction.`,
          answer: String.raw`$\dot m=g\rho_l(\rho_l-\rho_v)b\delta^3/(3\mu_l)$; $\delta=[4\mu_lk_l\Delta T\,x/(g\rho_l(\rho_l-\rho_v)h_{fg})]^{1/4}$; $\bar h=0.943[\dots]^{1/4}$, which with $Re=4\dot m/(b\mu)$ gives $\bar h(\nu^2/g)^{1/3}/k=1.47Re^{-1/3}$.` },
        { id: "2014-15-Q6b", label: "(b)", marks: "10",
          topic: "condensation", sub: "Vertical plate in steam at 98°C",
          type: "numerical", syllabus: "in", repeats: ["2021-22-Q4c"],
          text: String.raw`A vertical plate ($0.1 \times 0.1$ m) is exposed to steam at atmospheric pressure. The plate temperature is maintained at 98°C. Calculate the mass of steam condensed per hour. Fluid properties at the film temperature are:

| $\rho_f$ | $\mu_f$ | $k_f$ |
|---|---|---|
| $960\ \mathrm{kg/m^3}$ | $2.82\times10^{-4}\ \mathrm{kg/m\,s}$ | $0.68\ \mathrm{W/m\,K}$ |`,
          solution: String.raw`**Given:** $L=b=0.1$ m, $T_{sat}=100$°C (1 atm), $T_s=98$°C, $\Delta T=2$ K; $\rho_l=960\ \mathrm{kg/m^3}$, $\mu_l=2.82\times10^{-4}$, $k_l=0.68\ \mathrm{W/m\,K}$.

**Find:** $\dot m$ (kg/h).

**Assumptions:** laminar Nusselt film (checked), pure saturated steam. From the Çengel saturated-water table at 100°C: $h_{fg}=2257\ \mathrm{kJ/kg}$, $\rho_v=0.598\ \mathrm{kg/m^3}$; $c_{p,l}\approx4.22\ \mathrm{kJ/kg\,K}$ at the 99°C film temperature.

### 1. Modified latent heat
$$h^*_{fg}=h_{fg}+0.68c_{p,l}\Delta T=2257+0.68(4.217)(2)=2262.7\ \mathrm{kJ/kg}$$

### 2. Average coefficient (Nusselt, vertical plate)
$$\bar h=0.943\left[\frac{g\rho_l(\rho_l-\rho_v)h^*_{fg}k_l^3}{\mu_l\Delta T\,L}\right]^{1/4}=0.943\left[\frac{9.81(960)(959.4)(2.2627\times10^6)(0.68)^3}{2.82\times10^{-4}(2)(0.1)}\right]^{1/4}$$

$$\bar h=1.73\times10^4\ \mathrm{W/m^2K}$$

### 3. Heat rate and condensate
$$q=\bar hA\Delta T=17\,330(0.1\times0.1)(2)=346.5\ \mathrm W$$

$$\dot m=\frac{q}{h^*_{fg}}=\frac{346.5}{2.2627\times10^6}=1.53\times10^{-4}\ \mathrm{kg/s}=0.551\ \mathrm{kg/h}$$

### 4. Check the regime
$$Re=\frac{4\dot m}{b\mu_l}=\frac{4(1.53\times10^{-4})}{0.1(2.82\times10^{-4})}=21.7<30$$

Laminar, wave-free, so the Nusselt equation is valid. (With $h_{fg}$ instead of $h^*_{fg}$: $\dot m=0.552$ kg/h, practically the same because $\Delta T$ is only 2 K.)`,
          answer: String.raw`$\bar h\approx1.73\times10^4\ \mathrm{W/m^2K}$, $q\approx347$ W, $\dot m\approx0.55$ kg/h ($Re\approx22$, laminar).` },
      ] },
    { id: "2014-15-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q7a", label: "(a)", marks: "10",
          topic: "natural-convection", sub: "Vertical cylinder treated as a plate",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A vertical cylinder having a length of 0.3 m is maintained at 100°C and exposed to indoor air at 15°C. Calculate the minimum diameter the cylinder can have in order to behave as a vertical plate.`,
          solution: String.raw`**Given:** $L=0.3$ m, $T_s=100$°C, $T_\infty=15$°C.

**Find:** $D_{min}$ such that the vertical-plate correlations apply.

**Criterion (slides, Holman):** a vertical cylinder may be treated as a vertical plate when the boundary layer is thin compared with the diameter:

$$\frac{D}{L}\ge\frac{35}{Gr_L^{1/4}}$$

### 1. Properties at the film temperature
$T_f=(100+15)/2=57.5$°C $=330.7$ K. Air, Holman Table A-5 (interpolated): $\nu=18.80\times10^{-6}\ \mathrm{m^2/s}$; $\beta=1/T_f=3.024\times10^{-3}\ \mathrm{K^{-1}}$.

### 2. Grashof number
$$Gr_L=\frac{g\beta(T_s-T_\infty)L^3}{\nu^2}=\frac{9.81(3.024\times10^{-3})(85)(0.3)^3}{(18.80\times10^{-6})^2}=1.93\times10^8$$

($Ra_L=Gr_LPr\approx1.35\times10^8$: laminar.)

### 3. Minimum diameter
$$D_{min}=\frac{35L}{Gr_L^{1/4}}=\frac{35(0.3)}{(1.93\times10^8)^{1/4}}=\frac{10.5}{117.8}=0.089\ \mathrm m$$

**Why it matters:** for $D \ge 8.9$ cm the curvature does not affect the boundary layer and the plate correlations ($Nu=C(GrPr)^n$ or Churchill–Chu) can be used with $L$ as the length scale.`,
          answer: String.raw`$Gr_L\approx1.93\times10^8$, $D_{min}=35L/Gr_L^{1/4}\approx0.089$ m (about 9 cm).` },
        { id: "2014-15-Q7b", label: "(b)", marks: "25",
          topic: "boiling", sub: "Film boiling on a horizontal bar with radiation",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A polished stainless-steel bar of 50 mm diameter and an emissivity of 0.1 is maintained at a surface temperature of 250°C, while horizontally submerged in water at 25°C under atmospheric pressure. Estimate the heat transfer rate per unit length of bar. The convection heat transfer coefficient can be evaluated from

$$Nu_d=0.62\left[\frac{g(\rho_l-\rho_v)\lambda d^3}{\nu_vk_v(T_s-T_{sat})}\right]^{1/4}$$

The total heat transfer coefficient $\bar h$ is expressed as

$$\bar h^{4/3}=\bar h_{conv}^{4/3}+\bar h_{rad}\,\bar h^{1/3}$$

Fluid properties:

| $\rho_l$ | $\rho_v$ | $k_v$ | $\mu_v$ | $\lambda$ |
|---|---|---|---|---|
| $958\ \mathrm{kg/m^3}$ | $0.5\ \mathrm{kg/m^3}$ | $0.03\ \mathrm{W/m\,K}$ | $15\times10^{-6}\ \mathrm{N\,s/m^2}$ | $2258.5\times10^3\ \mathrm{J/kg}$ |`,
          solution: String.raw`**Given:** $d=0.05$ m, $\varepsilon=0.1$, $T_s=250$°C $=523.15$ K, $T_{sat}=100$°C $=373.15$ K, so $\Delta T_e=150$ K; properties as in the table.

**Find:** $q'$ (W/m).

**Assumptions:** stable film boiling (a vapour blanket covers the bar at $\Delta T_e=150$ K, beyond the Leidenfrost point); the formula is based on $T_{sat}$, so the water's subcooling (bulk 25°C) is neglected; the bar radiates to the liquid at $T_{sat}$ through the vapour film; steady state.

### 1. Convection (film) coefficient
$$\nu_v=\frac{\mu_v}{\rho_v}=\frac{15\times10^{-6}}{0.5}=3.0\times10^{-5}\ \mathrm{m^2/s}$$

$$Nu_d=0.62\left[\frac{9.81(958-0.5)(2.2585\times10^6)(0.05)^3}{3.0\times10^{-5}(0.03)(150)}\right]^{1/4}=232.1$$

$$\bar h_{conv}=\frac{Nu_dk_v}{d}=\frac{232.1(0.03)}{0.05}=139.3\ \mathrm{W/m^2K}$$

### 2. Radiation coefficient
$$\bar h_{rad}=\frac{\varepsilon\sigma(T_s^4-T_{sat}^4)}{T_s-T_{sat}}=\frac{0.1(5.67\times10^{-8})(523.15^4-373.15^4)}{150}=2.10\ \mathrm{W/m^2K}$$

### 3. Total coefficient
Solve $\bar h^{4/3}=\bar h_{conv}^{4/3}+\bar h_{rad}\bar h^{1/3}$ by iteration, starting from $\bar h=\bar h_{conv}$:

$$\bar h=\left(139.3^{4/3}+2.10\,\bar h^{1/3}\right)^{3/4}\;\Rightarrow\;\bar h=140.8\ \mathrm{W/m^2K}$$

(The approximation $\bar h\approx\bar h_{conv}+\tfrac34\bar h_{rad}=140.8$ gives the same result because $h_{rad}\ll h_{conv}$.)

### 4. Heat rate per metre
$$q'=\bar h\,\pi d\,(T_s-T_{sat})=140.8\,\pi(0.05)(150)=3.32\times10^3\ \mathrm{W/m}$$

**Why it matters:** the polished bar ($\varepsilon=0.1$) gains only about 1 % from radiation; radiation becomes important for high-emissivity surfaces or $T_s$ above about 300°C.`,
          answer: String.raw`$\bar h_{conv}\approx139\ \mathrm{W/m^2K}$, $\bar h_{rad}\approx2.1$, $\bar h\approx141\ \mathrm{W/m^2K}$; $q'\approx3.3$ kW/m.` },
      ] },
    { id: "2014-15-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q8", label: "", marks: "35",
          topic: "shell-tube", sub: "Rating a 1-2 distilled-water / raw-water exchanger",
          type: "numerical", syllabus: "in", repeats: ["2018-19-Q1a", "2018-19-Q1b", "2018-19-Q1c", "2018-19-Q1d", "2018-19-Q1e"],
          text: String.raw`175,000 lb/hr of distilled water enters a 1-2 shell-and-tube heat exchanger at 93°F and leaves at 85°F. The heat will be transferred to raw water coming from the supply at 75°F and leaving the exchanger at 80°F. A 10 psi pressure drop may be expended on both streams while providing a fouling factor of 0.005 for the shell side and 0.0015 for the tube side.

A 1-2 shell-and-tube heat exchanger is available for this service, having:

| Shell side | Tube side |
|---|---|
| ID = $15\tfrac14$ in | Number = 160 |
| Baffle space = 12 in | Length = 16 ft |
| | $\tfrac34$ in OD, 18 BWG |
| | $\tfrac{15}{16}$ in triangular pitch |

Will the exchanger be suitable?

Fluid properties:

| | Distilled water | Raw water |
|---|---|---|
| $c_p$ | 1 Btu/lb·°F | 1 Btu/lb·°F |
| $\mu$ | 1.96 lb/ft·hr | 2.23 lb/ft·hr |
| $k$ | 0.36 Btu/hr·ft·°F | 0.36 Btu/hr·ft·°F |`,
          solution: String.raw`> Data note: the shell-side fouling factor is printed as 0.005. The same problem in 2018-19 Q1 (and Kern Example 7.4) uses 0.0005 for distilled water, so 0.005 is almost certainly a misprint. Both cases are checked at the end. The raw-water flow rate is not given here; it follows from the heat balance (it is printed as 280,000 lb/h in 2018-19).

**Given:** distilled water (hot) $W=175\,000$ lb/h, $T_1=93$°F, $T_2=85$°F; raw water (cold) $t_1=75$°F, $t_2=80$°F; $c_p=1$, $s=1$ ($\rho=62.5\ \mathrm{lb/ft^3}$) for both; $\Delta P_{allow}=10$ psi each side; $R_{d,shell}=0.005$ (printed), $R_{d,tube}=0.0015$.
Exchanger: 1-2, shell ID 15.25 in, $B=12$ in, 160 tubes, $\tfrac34$ in OD 18 BWG, $L=16$ ft, $P_T=\tfrac{15}{16}$ in triangular.

**Find:** $U_C$, $U_D$, $R_{d,calc}$ and $\Delta P$ on both sides, and decide whether the exchanger is suitable.

**Assumptions:** Kern method; raw water in the **tubes** (the dirtier, scale-forming stream with the higher flow, and the tube-side fouling factor 0.0015 is the raw-water value), distilled water in the **shell**; 25 % cut segmental baffles; $\phi=(\mu/\mu_w)^{0.14}=1$ ($\mu_w$ not given; at $t_w\approx83$°F it would be 1.01 for the tubes and 0.99 for the shell); no heat loss.

Tube data (Kern Table 10, $\tfrac34$ in 18 BWG): ID = 0.652 in, $a'_t=0.334\ \mathrm{in^2}$, $a''=0.1963\ \mathrm{ft^2/ft}$.

### 1. Heat balance
$$Q=Wc(T_1-T_2)=175\,000(1)(93-85)=1.40\times10^6\ \mathrm{Btu/h}$$

$$w=\frac{Q}{c(t_2-t_1)}=\frac{1.40\times10^6}{1(80-75)}=280\,000\ \mathrm{lb/h}$$

### 2. True temperature difference
Countercurrent terminal differences: $\Delta t_h=93-80=13$°F, $\Delta t_c=85-75=10$°F.

$$\mathrm{LMTD}=\frac{13-10}{\ln(13/10)}=11.43\ ^\circ\mathrm F$$

$$R=\frac{T_1-T_2}{t_2-t_1}=\frac{8}{5}=1.6,\qquad S=\frac{t_2-t_1}{T_1-t_1}=\frac{5}{18}=0.278$$

From Holman Fig. 10-8 (1 shell pass, 2 tube passes), or the analytic 1-2 formula, $F_T=0.947$:

$$\Delta t=F_T\,\mathrm{LMTD}=0.947(11.43)=10.82\ ^\circ\mathrm F$$

Caloric temperatures: for water with such small ranges, use the arithmetic means $T_c=89$°F, $t_c=77.5$°F (the viscosities are given at these temperatures).

### 3. Tube side (raw water)
$$a_t=\frac{N_ta'_t}{144n}=\frac{160(0.334)}{144(2)}=0.1856\ \mathrm{ft^2}$$

$$G_t=\frac{w}{a_t}=\frac{280\,000}{0.1856}=1.509\times10^6\ \mathrm{lb/h\,ft^2},\qquad V=\frac{G_t}{3600\rho}=\frac{1.509\times10^6}{3600(62.5)}=6.71\ \mathrm{fps}$$

$$D=\frac{0.652}{12}=0.0543\ \mathrm{ft},\qquad Re_t=\frac{DG_t}{\mu}=\frac{0.0543(1.509\times10^6)}{2.23}=3.68\times10^4$$

$L/D=16/0.0543=295$. Kern Fig. 24, turbulent region; curve fit $j_H\approx0.027Re^{0.8}$: $j_H=121$.

$$Pr=\frac{c\mu}{k}=\frac{1(2.23)}{0.36}=6.19$$

$$h_i=j_H\frac{k}{D}Pr^{1/3}\phi_t=121\left(\frac{0.36}{0.0543}\right)(6.19)^{1/3}=1476\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

$$h_{io}=h_i\frac{ID}{OD}=1476\left(\frac{0.652}{0.75}\right)=1283\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

### 4. Shell side (distilled water)
Clearance $C'=P_T-d_o=0.9375-0.75=0.1875$ in.

$$a_s=\frac{ID\,C'B}{144P_T}=\frac{15.25(0.1875)(12)}{144(0.9375)}=0.2542\ \mathrm{ft^2}$$

$$G_s=\frac{W}{a_s}=\frac{175\,000}{0.2542}=6.885\times10^5\ \mathrm{lb/h\,ft^2}\quad(V_s=3.06\ \mathrm{fps})$$

Triangular-pitch equivalent diameter:

$$D_e=\frac{4\left(\tfrac12P_T(0.86P_T)-\tfrac12\tfrac{\pi d_o^2}{4}\right)}{\tfrac12\pi d_o}=\frac{4(0.3779-0.2209)}{1.178}=0.533\ \mathrm{in}=0.0444\ \mathrm{ft}$$

$$Re_s=\frac{D_eG_s}{\mu}=\frac{0.0444(6.885\times10^5)}{1.96}=1.56\times10^4$$

Kern Fig. 28 (25 % cut); curve fit $j_H\approx0.36Re^{0.55}$: $j_H=72.9$.

$$Pr=\frac{1(1.96)}{0.36}=5.44$$

$$h_o=j_H\frac{k}{D_e}Pr^{1/3}\phi_s=72.9\left(\frac{0.36}{0.0444}\right)(5.44)^{1/3}=1039\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

(With Kern's tabulated $D_e=0.55$ in: $h_o=1024$, a 1.5 % difference.)

### 5. Clean and design coefficients
$$U_C=\frac{h_{io}h_o}{h_{io}+h_o}=\frac{1283(1039)}{1283+1039}=574\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

$$A=N_tLa''=160(16)(0.1963)=502.5\ \mathrm{ft^2}$$

$$U_D=\frac{Q}{A\Delta t}=\frac{1.40\times10^6}{502.5(10.82)}=257\ \mathrm{Btu/h\,ft^2\,^\circ F}$$

$$R_{d,calc}=\frac{U_C-U_D}{U_CU_D}=\frac{574-257}{574(257)}=0.00214\ \mathrm{h\,ft^2\,^\circ F/Btu}$$

### 6. Pressure drops
**Tube side.** Kern Fig. 26 at $Re_t=3.68\times10^4$: $f\approx0.000186\ \mathrm{ft^2/in^2}$. (Fit used: Kern's $f$ = 4 × Fanning, with Fanning $=0.0035+0.264Re^{-0.42}=0.00669$, so $f=4(0.00669)/144$.)

$$\Delta P_t=\frac{fG_t^2Ln}{5.22\times10^{10}Ds\phi_t}=\frac{0.000186(1.509\times10^6)^2(16)(2)}{5.22\times10^{10}(0.0543)(1)(1)}=4.78\ \mathrm{psi}$$

Return loss: $\dfrac{V^2}{2g'}\cdot\dfrac{62.5}{144}=\dfrac{6.71^2}{2(32.2)}(0.434)=0.303$ psi per velocity head (Kern Fig. 27):

$$\Delta P_r=\frac{4n}{s}\frac{V^2}{2g'}=\frac{4(2)}{1}(0.303)=2.43\ \mathrm{psi}$$

$$\Delta P_T=4.78+2.43=7.2\ \mathrm{psi}<10\ \mathrm{psi}\;✓$$

**Shell side.** Kern Fig. 29 at $Re_s=1.56\times10^4$: $f\approx0.00197\ \mathrm{ft^2/in^2}$ (fit $e^{0.576-0.19\ln Re}/144$). $N+1=12L/B=12(16)/12=16$; $D_s=15.25/12=1.271$ ft.

$$\Delta P_s=\frac{fG_s^2D_s(N+1)}{5.22\times10^{10}D_es\phi_s}=\frac{0.00197(6.885\times10^5)^2(1.271)(16)}{5.22\times10^{10}(0.0444)(1)(1)}=8.2\ \mathrm{psi}<10\ \mathrm{psi}\;✓$$

### 7. Verdict

| Check | Calculated | Allowed / required |
|---|---|---|
| $\Delta P$ tube | 7.2 psi | 10 psi ✓ |
| $\Delta P$ shell | 8.2 psi | 10 psi ✓ |
| $R_d$ (as printed: 0.005 + 0.0015) | 0.00214 | 0.0065 ✗ |
| $R_d$ (if 0.0005 + 0.0015, as in 2018-19) | 0.00214 | 0.0020 ✓ |

- **With the data as printed** ($R_{d,req}=0.0065$): $U_{D,req}=1/(1/574+0.0065)=121$, so the area needed is $Q/(U_{D,req}\Delta t)=1066\ \mathrm{ft^2}$, more than twice the 502.5 ft² available. **The exchanger is not suitable** thermally, although both pressure drops are acceptable.
- **With the intended 0.0005** ($R_{d,req}=0.0020$): $R_{d,calc}=0.00214>0.0020$; the required area is 484 ft², so the 502.5 ft² unit has about 4 % excess surface. **The exchanger is suitable** (only just), and $V_t=6.7$ fps > 6 fps justifies the raw-water fouling factor of 0.0015.

**Exam tip:** state which fluid goes in the tubes and why before calculating; a fouling factor that looks ten times too large is worth one line pointing out the misprint, followed by a verdict for each reading.`,
          answer: String.raw`$Q=1.40\times10^6$ Btu/h, $\Delta t=10.8$°F, $h_{io}\approx1283$, $h_o\approx1039$, $U_C\approx574$, $U_D\approx257$, $R_{d,calc}\approx0.0021$; $\Delta P_t\approx7.2$ psi, $\Delta P_s\approx8.2$ psi. Not suitable for the printed $R_d=0.0065$; suitable (just) if the shell-side value is 0.0005 ($R_{d,req}=0.002$).` },
      ] },
  ]
});
