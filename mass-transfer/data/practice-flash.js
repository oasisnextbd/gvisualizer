QB.paper({ year: "Practice", set: "Flash distillation", date: "", marks: 0, practice: true,
  rules: String.raw`Binary and multicomponent flash distillation: the slide problems (ethanol–water, methanol–water, cascades, constant α), every starred Wankat chapter 2 flash problem, and exam-style questions on the flash system, its degrees of freedom, the operating line, Rachford–Rice and drum sizing.`,
  questions: [
    { id: "practice-flash-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-flash-P1", label: "", marks: "", topic: "flash",
        sub: "Ethanol–water flash at 1 atm: limits of y and x, and V/F = 2/3", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 03 (Flash distillation), "Problem: Flash Separator for Ethanol and Water" and its solution slide; same as Wankat 3e, Example 2-1`,
        text: String.raw`A flash drum at 101.3 kPa separates an ethanol–water feed that is 40 mol% ethanol, F = 100 kmol/h.

(a) If V/F may take any value, what are the highest possible vapor mole fraction and the lowest possible liquid mole fraction of ethanol?

(b) Find the liquid and vapor mole fractions when V/F = 2/3.

(c) Repeat (b) for F = 1000 kmol/h.`,
        solution: String.raw`**Given:** $p_{drum} = 101.3$ kPa = 1 atm, $z = 0.40$, $F = 100$ kmol/h. Equilibrium: ethanol–water VLE at 1 atm (Wankat Table 2-1, the table on the slide).

**Find:** $y_{max}$, $x_{min}$; $x$ and $y$ at $V/F = 2/3$; the effect of $F$.

**Assumptions:** the drum is one equilibrium stage; $p_{drum}$ and $V/F$ are known, so the mass balance and equilibrium can be solved first (sequential solution) and the energy balance afterwards.

1. Mass balances: $F = L + V$ and $Fz = Lx + Vy$. Solving for $y$ gives the flash operating line
$$y = -\frac{L}{V}x + \frac{F}{V}z$$
It always passes through $y = x = z$ (put $x = z$: $y = z(F-L)/V = z$). Here it passes through (0.40, 0.40).

2. The slope follows from $V/F$:

| $V/F$ | $L/V$ | slope $-L/V$ | line |
|---|---|---|---|
| 0 | $\infty$ | $-\infty$ | vertical through $x = z$ |
| 2/3 | 1/2 | $-0.5$ | $y = -0.5x + 0.6$ |
| 1 | 0 | 0 | horizontal through $y = z$ |

3. **(a)** As $V/F \to 0$ the first bubble of vapor is in equilibrium with liquid $x = z = 0.40$. Interpolating Table 2-1 between $x = 0.3965$ ($y = 0.6122$) and $x = 0.5198$ ($y = 0.6599$):
$$y_{max} = y^*(0.40) = 0.614 \quad (T \approx 80.7\ ^\circ\mathrm{C})$$
As $V/F \to 1$ the last drop of liquid is in equilibrium with vapor $y = z = 0.40$. Between $y = 0.3891$ ($x = 0.0721$) and $y = 0.4375$ ($x = 0.0966$):
$$x_{min} = x^*(0.40) = 0.076 \quad (T \approx 88.6\ ^\circ\mathrm{C})$$

4. **(b)** Intersect $y = -0.5x + 0.6$ with the equilibrium curve. Solving numerically on the interpolated data:
$$x = 0.173, \qquad y = 0.513, \qquad T_{drum} \approx 83.9\ ^\circ\mathrm{C}$$
Then $V = (2/3)(100) = 66.7$ kmol/h and $L = 33.3$ kmol/h.

**Check:** $Vy + Lx = 66.7(0.513) + 33.3(0.173) = 34.2 + 5.8 = 40.0 = Fz$ ✓

5. **(c)** $F = 1000$ kmol/h with the same $z$, $p$ and $V/F$ gives the same operating line, so $x = 0.173$ and $y = 0.513$ again. Only the flows change: $V = 666.7$ and $L = 333.3$ kmol/h. Feed rate affects the drum diameter and the heater duty, not the compositions.

![Ethanol–water y–x diagram with flash operating lines for V/F = 0, 2/3 and 1 through z = 0.40](fig/practice-flash-P1-sol.svg)

> Slide and book check: the slide's graphical solution reads $y_{max} \approx 0.61$, $x_{min} \approx 0.08$, and for $V/F = 2/3$ about $y \approx 0.50$, $x \approx 0.17$. Wankat Example 2-1 gives 0.61, 0.075, 0.52 and 0.17. The interpolated values (0.614, 0.076, 0.513, 0.173) agree within graph-reading accuracy.

**Exam tip:** the two limiting cases are just the vertical and horizontal lines through $(z, z)$. Draw both before the real operating line; they bound every possible answer.`,
        answer: String.raw`(a) $y_{max} = 0.614$ (V/F → 0), $x_{min} = 0.076$ (V/F → 1). (b) $x = 0.173$, $y = 0.513$, V = 66.7, L = 33.3 kmol/h. (c) Same compositions; V = 666.7, L = 333.3 kmol/h.` } ] },

    { id: "practice-flash-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw`A flash drum at 1 atm separates methanol–water mixtures. Equilibrium data at 1 atm (Wankat Table 2-7, mol% methanol):

| $x$ | 0 | 2 | 4 | 6 | 8 | 10 | 15 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $y$ | 0 | 13.4 | 23.0 | 30.4 | 36.5 | 41.8 | 51.7 | 57.9 | 66.5 | 72.9 | 77.9 | 82.5 | 87.0 | 91.5 | 95.8 | 97.9 | 100 |
| $T$, °C | 100 | 96.4 | 93.5 | 91.2 | 89.3 | 87.7 | 84.4 | 81.7 | 78.0 | 75.3 | 73.1 | 71.2 | 69.3 | 67.6 | 66.0 | 65.0 | 64.5 |`,
      parts: [
        { id: "practice-flash-P2a", label: "(a)", marks: "", topic: "flash",
          sub: "Methanol–water: z = 0.60, 40% vaporized", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03 (Flash distillation), "Problem: Flash Separator for Methanol and Water"; Wankat 3e, Problem 2.D1*`,
          text: String.raw`The feed is 60 mol% methanol, F = 100 kmol/h, and 40% of the feed is vaporized. Find the vapor and liquid mole fractions and flow rates.`,
          solution: String.raw`**Given:** $z = 0.60$, $V/F = 0.40$, $F = 100$ kmol/h, $p = 1$ atm.

**Assumptions:** one equilibrium stage; sequential solution (the energy balance is not needed for compositions).

1. Flows: $V = 0.40(100) = 40$ kmol/h, $L = 60$ kmol/h, $L/V = 1.5$.

2. Operating line:
$$y = -\frac{L}{V}x + \frac{F}{V}z = -1.5x + \frac{0.60}{0.40} = -1.5x + 1.5$$

3. Intersection with the equilibrium curve. The line meets the data between $x = 0.40$ and $0.50$. A monotone (smooth) interpolation of Table 2-7 gives
$$x = 0.485, \qquad y = 0.772, \qquad T_{drum} \approx 73.4\ ^\circ\mathrm{C}$$
(Straight-line interpolation between the two table points gives $x = 0.486$, $y = 0.772$.)

4. **Check:** $40(0.772) + 60(0.485) = 30.9 + 29.1 = 60.0 = Fz$ ✓

![Methanol–water y–x diagram with the operating lines of Problem 2.D1 parts a, c, d, f and g](fig/practice-flash-P2-sol.svg)

> Book answer (2.D1a): $y = 0.77$, $x = 0.48$ ✓`,
          answer: String.raw`$x = 0.485$, $y = 0.772$; V = 40 kmol/h, L = 60 kmol/h ($T \approx 73.4$ °C).` },
        { id: "practice-flash-P2b", label: "(b)", marks: "", topic: "flash",
          sub: "Same flash with F = 1500 kmol/h", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, methanol–water problem; Wankat 3e, Problem 2.D1*`,
          text: String.raw`Repeat (a) for a feed rate of 1500 kmol/h.`,
          solution: String.raw`$z$, $p$ and $V/F$ are unchanged, so the operating line $y = -1.5x + 1.5$ and the compositions are unchanged: $x = 0.485$, $y = 0.772$.

Flows scale with $F$: $V = 0.40(1500) = 600$ kmol/h and $L = 900$ kmol/h.

> Book answer (2.D1b): $V = 600$, $L = 900$ ✓

**Exam tip:** a bigger feed needs a wider drum and a bigger heater; it does not change $x$ or $y$.`,
          answer: String.raw`Same $x = 0.485$, $y = 0.772$; V = 600 kmol/h, L = 900 kmol/h.` },
        { id: "practice-flash-P2c", label: "(c)", marks: "", topic: "flash",
          sub: "V/F needed for a specified liquid, z = 0.30, x = 0.20", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, methanol–water problem; Wankat 3e, Problem 2.D1*`,
          text: String.raw`The feed is 30 mol% methanol and a liquid product of 20 mol% methanol is wanted. What V/F is needed? For F = 1000 lbmol/h, find the product flow rates and compositions.`,
          solution: String.raw`**Given:** $z = 0.30$, $x = 0.20$, $F = 1000$ lbmol/h.

1. Equilibrium: $x = 0.20$ is a table point, so $y = 0.579$ and $T_{drum} = 81.7$ °C.

2. Lever rule from the mass balances, $V(y - z) = L(z - x)$:
$$\frac{V}{F} = \frac{z - x}{y - x} = \frac{0.30 - 0.20}{0.579 - 0.20} = 0.264$$

3. Flows: $V = 0.264(1000) = 263.9$ lbmol/h of vapor with $y = 0.579$; $L = 736.1$ lbmol/h of liquid with $x = 0.20$.

4. **Check:** $263.9(0.579) + 736.1(0.20) = 152.8 + 147.2 = 300 = Fz$ ✓

> Book answer (2.D1c): $V/F = 0.25$, $y = 0.58$. With $y = 0.58$ the lever rule gives $0.10/0.38 = 0.263$, so the book's 0.25 is a rounded graphical value; 0.264 is the consistent result.`,
          answer: String.raw`$V/F = 0.264$; vapor 263.9 lbmol/h at $y = 0.579$, liquid 736.1 lbmol/h at $x = 0.20$ ($T = 81.7$ °C).` },
        { id: "practice-flash-P2d", label: "(d)", marks: "", topic: "flash",
          sub: "Feed rate and composition from the liquid product", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, methanol–water problem; Wankat 3e, Problem 2.D1*`,
          text: String.raw`The drum is run so that the liquid is 45 mol% methanol, L = 1500 kmol/h and V/F = 0.2. What must the feed flow rate and composition be?`,
          solution: String.raw`1. Equilibrium at $x = 0.45$ (between the 40 and 50 mol% points): $y = 0.755$ ($T \approx 74.2$ °C).

2. Feed rate from $L = (1 - V/F)F$:
$$F = \frac{1500}{1 - 0.2} = 1875\ \mathrm{kmol/h}, \qquad V = 375\ \mathrm{kmol/h}$$

3. Feed composition from the component balance:
$$z = \frac{V}{F}y + \left(1 - \frac{V}{F}\right)x = 0.2(0.755) + 0.8(0.45) = 0.511$$

On the y–x diagram this is the line of slope $-L/V = -4$ through (0.45, 0.755); it meets the diagonal at $z = 0.511$.

> Book answer (2.D1d): $F = 37.5$ kmol/h. That value corresponds to $L = 30$ kmol/h ($30/0.8 = 37.5$), the number used in an earlier edition. With the 3rd-edition $L = 1500$ kmol/h, $F = 1875$ kmol/h; the feed composition does not depend on $L$.`,
          answer: String.raw`$F = 1875$ kmol/h (V = 375), $z = 0.511$. (Book's 37.5 kmol/h corresponds to L = 30 kmol/h.)` },
        { id: "practice-flash-P2e", label: "(e)", marks: "", topic: "flash",
          sub: "Vertical flash drum size for part (c)", type: "numerical", syllabus: "partial", repeats: [],
          origin: "slides", ref: String.raw`Wankat 3e, Problem 2.D1e* (not on the slide; drum sizing, Wankat Section 2.9, Eqs. 2-64 to 2-68)`,
          text: String.raw`Size a vertical flash drum for part (c). Data: $\rho_{water} = 1.00$ g/cm³, $\rho_{methanol,L} = 0.7914$ g/cm³, $MW_{water} = 18.01$, $MW_{methanol} = 32.04$. Treat the vapor as an ideal gas.`,
          solution: String.raw`> The slides show the drum components but not the sizing equations; the method is Wankat Section 2.9 and appears in past finals.

**Given (from part c):** $V = 263.9$ lbmol/h, $y = 0.579$; $L = 736.1$ lbmol/h, $x = 0.20$; $T = 81.7$ °C, $p = 1$ atm.

1. Molecular weights:
$$MW_V = 0.579(32.04) + 0.421(18.01) = 26.13, \qquad MW_L = 0.20(32.04) + 0.80(18.01) = 20.82$$

2. Liquid density (ideal mixture, additive volumes). Mass fraction methanol $w = 0.20(32.04)/20.82 = 0.308$:
$$\frac{1}{\rho_L} = \frac{0.308}{0.7914} + \frac{0.692}{1.00} = 1.081 \Rightarrow \rho_L = 0.925\ \mathrm{g/cm^3} = 57.74\ \mathrm{lb/ft^3}$$

3. Vapor density (ideal gas):
$$\rho_V = \frac{p\,MW_V}{RT} = \frac{101325(26.13)}{8314(354.9)} = 0.897\ \mathrm{kg/m^3} = 0.0560\ \mathrm{lb/ft^3}$$

4. Flow parameter, with $W_L = 736.1(20.82) = 15{,}324$ lb/h and $W_V = 263.9(26.13) = 6{,}895$ lb/h:
$$F_{lv} = \frac{W_L}{W_V}\sqrt{\frac{\rho_V}{\rho_L}} = 2.222\sqrt{\frac{0.0560}{57.74}} = 0.0692, \qquad \ln F_{lv} = -2.670$$

5. Drum constant (Wankat Eq. 2-65, ft/s):
$$K_{drum} = \exp\left[A + B\ln F_{lv} + C(\ln F_{lv})^2 + D(\ln F_{lv})^3 + E(\ln F_{lv})^4\right] = 0.444\ \mathrm{ft/s}$$
with $A = -1.877478$, $B = -0.814580$, $C = -0.187074$, $D = -0.014523$, $E = -0.001015$.

6. Permissible vapor velocity:
$$u_{perm} = K_{drum}\sqrt{\frac{\rho_L - \rho_V}{\rho_V}} = 0.444\sqrt{\frac{57.69}{0.0560}} = 14.26\ \mathrm{ft/s}$$

7. Cross-section and diameter:
$$A_c = \frac{V\,MW_V}{u_{perm}(3600)\rho_V} = \frac{6895}{14.26(3600)(0.0560)} = 2.40\ \mathrm{ft^2}, \qquad D = \sqrt{\frac{4A_c}{\pi}} = 1.75\ \mathrm{ft}$$
Round up to a standard $D = 2.0$ ft.

8. Height: $h_{total}/D = 3$ to 5, so $h_{total} = 6$ to 10 ft (for example 8 ft with $h/D = 4$).

![Vertical flash drum: diameter from the permissible vapor velocity, height from the hV, hf and hL rules](fig/practice-flash-P15-sol.svg)

> Book answer (2.D1e): $D = 1.705$ ft, use 2.0 ft; length 6 to 10 ft ✓. The small difference comes from the book using $V/F = 0.25$ (V = 250 lbmol/h) from its graphical part (c).`,
          answer: String.raw`$K_{drum} = 0.444$ ft/s, $u_{perm} = 14.3$ ft/s, $A_c = 2.40$ ft², $D = 1.75$ ft → use 2.0 ft; $h_{total} = 6$–10 ft.` },
        { id: "practice-flash-P2f", label: "(f)", marks: "", topic: "flash",
          sub: "Flash at a specified drum temperature, 77 °C", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, methanol–water problem part f; Wankat 3e, Problem 2.D1f*`,
          text: String.raw`If z = 0.4, p = 1 atm and $T_{drum}$ = 77 °C, find V/F, $x_m$ and $y_m$.`,
          solution: String.raw`1. With $p$ and $T$ fixed, a binary two-phase system has no freedom left ($F = C - P + 2 = 2$, both used), so $x$ and $y$ come straight from the T–x–y data.

2. 77 °C lies between $x = 0.30$ (78.0 °C) and $x = 0.40$ (75.3 °C). Interpolating the smooth T–x curve:
$$x_m = 0.334, \qquad y_m = 0.689$$
(straight-line interpolation: $x = 0.337$, $y = 0.689$).

3. Lever rule:
$$\frac{V}{F} = \frac{z - x}{y - x} = \frac{0.40 - 0.334}{0.689 - 0.334} = 0.186$$
(0.179 with the straight-line values).

> Book answer (2.D1f): $V/F = 0.17$. The result is very sensitive to $x$ because $z - x$ is small; 0.17 to 0.19 all agree within the accuracy of reading 77 °C off the data.`,
          answer: String.raw`$x_m \approx 0.334$, $y_m \approx 0.689$, $V/F \approx 0.18$ (book 0.17).` },
        { id: "practice-flash-P2g", label: "(g)", marks: "", topic: "flash",
          sub: "Flash with a specified vapor composition, y = 0.892", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, methanol–water problem part g; Wankat 3e, Problem 2.D1g*`,
          text: String.raw`If F = 50 mol/h, z = 0.8, p = 1 atm and $y_m$ = 0.892, find V, L and $x_m$.`,
          solution: String.raw`1. Equilibrium: $y = 0.892$ lies between $y = 0.870$ ($x = 0.70$) and $y = 0.915$ ($x = 0.80$):
$$x_m = 0.70 + \frac{0.892 - 0.870}{0.915 - 0.870}(0.10) = 0.749 \quad (T \approx 68.5\ ^\circ\mathrm{C})$$

2. Lever rule:
$$V = F\frac{z - x}{y - x} = 50\,\frac{0.80 - 0.749}{0.892 - 0.749} = 17.9\ \mathrm{mol/h}, \qquad L = 50 - 17.9 = 32.1\ \mathrm{mol/h}$$

3. **Check:** $17.9(0.892) + 32.1(0.749) = 16.0 + 24.0 = 40.0 = Fz$ ✓

> Book answer (2.D1g): $x = 0.756$, $V = 16.18$, $L = 33.82$ mol/h. The book read $x$ from a graph; the table gives 0.749. Because $y - x$ is only about 0.14, a 0.007 change in $x$ moves V by 10%. Use the table value when the data are given.`,
          answer: String.raw`$x_m = 0.749$, V = 17.9 mol/h, L = 32.1 mol/h (book, from a graph: 0.756, 16.2, 33.8).` } ] },

    { id: "practice-flash-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw`A methanol–water feed (55.0 mol% methanol, 1000 kmol/h) goes to two flash drums in series, both at 1.0 atm and adiabatic. The vapor from drum 1 is cooled, which partially condenses it, and is then flashed in drum 2. The liquid from drum 1 is to be 30.0 mol% methanol, and drum 2 runs at $(V/F)_2 = 0.25$. Use the methanol–water data of Wankat Table 2-7 (given in P2).`,
      parts: [
        { id: "practice-flash-P3a", label: "(a)", marks: "", topic: "flash",
          sub: "Sketch of the two-drum cascade", type: "sketch", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, "Problem: Cascade Flash Separator for Methanol and Water"; Wankat 3e, Problem 2.D5`,
          text: String.raw`Sketch the process and label the streams.`,
          solution: String.raw`![Cascade of two flash drums: vapor from drum 1 is partially condensed and flashed in drum 2](fig/practice-flash-P3-sol.svg)

- Drum 1 receives F (z = 0.55) and gives liquid $L_1$ ($x_1 = 0.30$) and vapor $V_1$ ($y_1$).
- $V_1$ goes through a cooler (partial condenser) and becomes the feed of drum 2: $F_2 = V_1$, $z_2 = y_1$.
- Drum 2 gives vapor $V_2$ ($y_2$) and liquid $L_2$ ($x_2$).
- Both drums are at 1 atm. No heater is needed on drum 2, because its feed is cooled, not heated.`,
          answer: String.raw`F → drum 1 → (L₁, V₁); V₁ → partial condenser → drum 2 → (L₂, V₂).` },
        { id: "practice-flash-P3b", label: "(b)", marks: "", topic: "flash",
          sub: "Drum 1: y₁, (V/F)₁ and V₁", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, cascade flash problem; Wankat 3e, Problem 2.D5`,
          text: String.raw`For the first drum find the vapor mole fraction $y_1$, the fraction vaporized $(V/F)_1$ and the vapor flow rate $V_1$.`,
          solution: String.raw`1. Equilibrium: $x_1 = 0.30$ is a table point, so $y_1 = 0.665$ and $T_1 = 78.0$ °C.

2. Lever rule:
$$\left(\frac{V}{F}\right)_1 = \frac{z - x_1}{y_1 - x_1} = \frac{0.55 - 0.30}{0.665 - 0.30} = 0.685$$

3. $V_1 = 0.685(1000) = 684.9$ kmol/h and $L_1 = 315.1$ kmol/h.

The drum-1 operating line has slope $-L/V = -0.315/0.685 = -0.46$ through (0.55, 0.55).`,
          answer: String.raw`$y_1 = 0.665$, $(V/F)_1 = 0.685$, $V_1 = 684.9$ kmol/h ($L_1 = 315.1$).` },
        { id: "practice-flash-P3c", label: "(c)", marks: "", topic: "flash",
          sub: "Drum 2: y₂, x₂ and V₂", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, cascade flash problem; Wankat 3e, Problem 2.D5`,
          text: String.raw`For the second drum find $y_2$, $x_2$ and $V_2$.`,
          solution: String.raw`1. Feed to drum 2: $F_2 = V_1 = 684.9$ kmol/h, $z_2 = y_1 = 0.665$.

2. Operating line with $(V/F)_2 = 0.25$, so $L/V = 0.75/0.25 = 3$:
$$y = -3x + \frac{z_2}{0.25} = -3x + 2.66$$

3. Intersection with the equilibrium curve (between $x = 0.60$ and 0.70):
$$x_2 = 0.610, \qquad y_2 = 0.830, \qquad T_2 \approx 71.0\ ^\circ\mathrm{C}$$

4. Flows: $V_2 = 0.25(684.9) = 171.2$ kmol/h and $L_2 = 513.7$ kmol/h.

5. **Check:** $171.2(0.830) + 513.7(0.610) = 142.1 + 313.4 = 455.5 = 684.9(0.665)$ ✓

![Methanol–water y–x diagram with the two operating lines of the cascade](fig/practice-flash-P3-sol2.svg)

The second drum raises the vapor purity from 0.665 to 0.830, at the cost of a small vapor flow. Repeating this idea (and sending liquids back) leads to the countercurrent column of the next chapter.`,
          answer: String.raw`$x_2 = 0.610$, $y_2 = 0.830$, $V_2 = 171.2$ kmol/h ($L_2 = 513.7$).` } ] },

    { id: "practice-flash-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-flash-P4", label: "", marks: "", topic: "flash",
        sub: "Benzene–toluene flash with α = 2.4 for a specified liquid", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 03, "Problem: Benzene-Toluene System (α given)"`,
        text: String.raw`A 40 mol% benzene, 60 mol% toluene mixture (100 kmol/day) is flashed. The liquid product must be 30 mol% benzene. The relative volatility is 2.4. Find (a) the vapor composition and (b) the liquid flow rate.`,
        solution: String.raw`**Given:** $z = 0.40$, $x = 0.30$, $F = 100$ kmol/day, $\alpha_{BT} = 2.4$.

**Assumptions:** constant relative volatility; the drum is an equilibrium stage.

1. **(a)** Equilibrium for constant $\alpha$:
$$y = \frac{\alpha x}{1 + (\alpha - 1)x} = \frac{2.4(0.30)}{1 + 1.4(0.30)} = \frac{0.72}{1.42} = 0.507$$

2. **(b)** Lever rule:
$$\frac{V}{F} = \frac{z - x}{y - x} = \frac{0.40 - 0.30}{0.507 - 0.30} = 0.483$$
$$V = 48.3\ \mathrm{kmol/day}, \qquad L = F - V = 51.7\ \mathrm{kmol/day}$$

3. **Check:** $48.3(0.507) + 51.7(0.30) = 24.5 + 15.5 = 40.0 = Fz$ ✓. The operating line has slope $-L/V = -1.07$.

![Benzene–toluene y–x curve for α = 2.4 with the operating line from (0.40, 0.40) to (0.30, 0.507)](fig/practice-flash-P4-sol.svg)

**Exam tip:** when $x$ (or $y$) is specified, no trial and error is needed: equilibrium gives the other phase directly and the lever rule gives V/F.`,
        answer: String.raw`(a) $y = 0.507$; (b) $V/F = 0.483$, L = 51.7 kmol/day (V = 48.3 kmol/day).` } ] },

    { id: "practice-flash-P5", q: 5, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [ { id: "practice-flash-P5", label: "", marks: "", topic: "flash",
        sub: "Two drums in series, liquid from drum 1 reflashed: work backwards", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 2.D2*`,
        text: String.raw`Two flash drums at 1 atm are connected as shown: the liquid from drum 1 is pumped, heated and flashed in drum 2. The feed to drum 1 is 10,000 kmol/h of methanol–water with 55 mol% methanol. Drum 2 runs at $(V/F)_2 = 0.7$ and its liquid product is 25 mol% methanol. Use Wankat Table 2-7 (data in P2).

(a) What fraction of the feed is vaporized in drum 1?

(b) Find $y_1$, $y_2$, $x_1$, $T_1$ and $T_2$.

![Two flash drums: liquid from drum 1 is pumped, heated and flashed in drum 2](fig/practice-flash-P5.svg)`,
        solution: String.raw`**Given:** $F = 10{,}000$ kmol/h, $z = 0.55$; drum 2: $x_2 = 0.25$, $(V/F)_2 = 0.7$; both at 1 atm.

**Plan:** drum 1 has two unknowns ($x_1$ and $(V/F)_1$), but drum 2 is fully specified by $x_2$ and $(V/F)_2$. So start with drum 2 and work backwards.

1. Drum 2 equilibrium at $x_2 = 0.25$ (between 0.20 and 0.30 in Table 2-7):
$$y_2 = 0.626 \ \text{(smooth interpolation; straight line gives 0.622)}, \qquad T_2 = 79.7\ ^\circ\mathrm{C}$$

2. Drum 2 feed composition (its feed is $L_1$, so $z_2 = x_1$):
$$x_1 = z_2 = \left(\frac{V}{F}\right)_2 y_2 + \left[1 - \left(\frac{V}{F}\right)_2\right]x_2 = 0.7(0.626) + 0.3(0.25) = 0.513$$

3. Drum 1 equilibrium at $x_1 = 0.513$ (between 0.50 and 0.60):
$$y_1 = 0.785, \qquad T_1 = 72.8\ ^\circ\mathrm{C}$$

4. **(a)** Lever rule on drum 1:
$$\left(\frac{V}{F}\right)_1 = \frac{z - x_1}{y_1 - x_1} = \frac{0.55 - 0.513}{0.785 - 0.513} = 0.136$$

5. Flows: $V_1 = 1358$ kmol/h, $L_1 = 8642$ kmol/h, $V_2 = 0.7(8642) = 6050$ kmol/h, $L_2 = 2593$ kmol/h.

**Check:** $1358(0.785) + 6050(0.626) + 2593(0.25) = 1066 + 3787 + 648 = 5500 = Fz$ ✓

![y–x diagram for Problem 2.D2: the drum-2 line is drawn first, then the drum-1 line through z = 0.55](fig/practice-flash-P5-sol.svg)

> Book answer (2.D2): $(V/F)_1 = 0.148$; $x_1 = 0.51$, $y_1 = 0.78$, $x_2 = 0.25$, $y_2 = 0.62$ ✓ for the compositions. $(V/F)_1$ is the ratio of two small differences, so it is sensitive: with the straight-line value $y_2 = 0.622$ it is 0.145, and with the book's rounded $x_1 = 0.51$, $y_1 = 0.78$ it is 0.148. Report $(V/F)_1 \approx 0.14$–0.15.

**Exam tip:** in a cascade, always start at the drum that has two specifications.`,
        answer: String.raw`(a) $(V/F)_1 \approx 0.14$ (0.136 here; book 0.148). (b) $x_1 = 0.513$, $y_1 = 0.785$, $y_2 = 0.626$, $T_1 \approx 72.8$ °C, $T_2 \approx 79.7$ °C.` } ] },

    { id: "practice-flash-P6", q: 6, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-flash-P6", label: "", marks: "", topic: "flash",
        sub: "Multicomponent isothermal flash, methane–propane–n-hexane (Rachford–Rice)", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 2.D8*`,
        text: String.raw`A feed of 2000 kmol/h (5 mol% methane, 10 mol% propane, rest n-hexane) is flashed in a drum at 2 atm and 25 °C. Using DePriester K values, find the fraction vaporized, the vapor and liquid mole fractions, and the vapor and liquid flow rates.`,
        solution: String.raw`> The slides cover K values and the DePriester chart; the Rachford–Rice equation for a multicomponent flash is in Wankat Section 2.6, not in the slides.

**Given:** $F = 2000$ kmol/h; $z$ = 0.05 (C₁), 0.10 (C₃), 0.85 (nC₆); $p = 2$ atm = 202.6 kPa; $T = 25$ °C.

**Assumptions:** K values independent of composition (DePriester). K values are taken from the McWilliams fit of the DePriester chart (Wankat Eq. 2-30, Table 2-3), which reproduces the chart within a few percent.

1. K values at 25 °C, 202.6 kPa: $K_{C1} = 71.6$, $K_{C3} = 4.11$, $K_{C6} = 0.126$.

2. Rachford–Rice equation (from $x_i = z_i/[1 + (K_i - 1)V/F]$, $y_i = K_i x_i$ and $\sum y_i - \sum x_i = 0$):
$$f\left(\frac{V}{F}\right) = \sum_i \frac{z_i(K_i - 1)}{1 + (K_i - 1)V/F} = 0$$
Two phases exist because $f(0) = \sum z_iK_i - 1 = 3.10 > 0$ and $f(1) = 1 - \sum z_i/K_i < 0$.

3. Newton steps, $(V/F)_{k+1} = (V/F)_k - f/f'$ with $f' = -\sum z_i(K_i - 1)^2/[1 + (K_i - 1)V/F]^2$:

| trial | $V/F$ | $f$ | $f'$ | next $V/F$ |
|---|---|---|---|---|
| 1 | 0.1000 | −0.1389 | −5.177 | 0.0732 |
| 2 | 0.0732 | +0.0321 | −7.935 | 0.0772 |
| 3 | 0.0772 | +0.0012 | −7.361 | 0.0774 |

4. Compositions at $V/F = 0.0774$:

| | $z_i$ | $K_i$ | $x_i$ | $y_i = K_ix_i$ |
|---|---|---|---|---|
| methane | 0.05 | 71.6 | 0.0077 | 0.5539 |
| propane | 0.10 | 4.11 | 0.0806 | 0.3311 |
| n-hexane | 0.85 | 0.126 | 0.9116 | 0.1151 |
| sum | 1.00 | | 1.0000 | 1.0000 |

5. Flows: $V = 0.0774(2000) = 154.8$ kmol/h, $L = 1845.2$ kmol/h.

![Rachford–Rice function for Problem 2.D8 with its single root at V/F = 0.0774](fig/practice-flash-P6-sol.svg)

> Book answer (2.D8): $V/F = 0.076$, $x_{methane} = 0.0077$, $x_{propane} = 0.0809$ ✓ (the small difference is chart reading versus the fitted K values).

**Exam tip:** write the Rachford–Rice form, not $\sum x_i = 1$ alone: it is monotonic in V/F, so Newton's method cannot wander off.`,
        answer: String.raw`$V/F = 0.077$; $x$ = 0.0077 / 0.0806 / 0.9116, $y$ = 0.554 / 0.331 / 0.115 (C₁/C₃/nC₆); V = 154.8, L = 1845 kmol/h.` } ] },

    { id: "practice-flash-P7", q: 7, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-flash-P7", label: "", marks: "", topic: "flash",
        sub: "Ethanol–water flash from a hot feed: simultaneous solution on the H–x chart", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 2.D9*`,
        text: String.raw`A 30 wt% ethanol–water feed, 1000 kg/h, is at 200 °C (as a pressurized liquid) and is flashed into a drum at 1 kg/cm². Find $T_{drum}$, the weight fractions of the liquid and vapor products, and the liquid and vapor flow rates. Use the ethanol–water enthalpy–composition chart at 1 kg/cm² (Wankat Fig. 2-4).`,
        solution: String.raw`**Given:** $F = 1000$ kg/h, $z = 0.30$ wt fraction ethanol, $T_F = 200$ °C, $p = 1$ kg/cm² (0.968 atm), adiabatic drum.

**Find:** $T_{drum}$, $x$, $y$ (wt fractions), $L$, $V$.

**Assumptions:** the H–x chart's reference state is liquid at 0 °C (its 0 °C liquid isotherm is at $h \approx 0$). The feed enthalpy is found from liquid heat capacities, because 200 °C is off the chart: $C_{P,L}$ ethanol = 37.96 kcal/(kmol·°C) = 0.824 kcal/(kg·°C), water = 18.0 kcal/(kmol·°C) = 0.999 kcal/(kg·°C) (the values Wankat uses for ethanol–water; heat of mixing neglected for the hot feed). Tie lines are taken from the 1-atm VLE data (Wankat Table 2-1), converted to weight fractions.

1. Feed enthalpy:
$$h_F = \left[0.30(0.824) + 0.70(0.999)\right](200 - 0) = 0.947(200) = 189.3\ \mathrm{kcal/kg}$$

2. Because $T_F$ is fixed, $T_{drum}$ is unknown and the balances must be solved together (simultaneous solution). On the H–x chart the adiabatic drum obeys
$$F h_F = L h_L + V H_V, \quad F z = L x + V y \Rightarrow \frac{H_V - h_F}{y - z} = \frac{h_F - h_L}{z - x}$$
so the feed point $(z, h_F)$ lies on the straight tie line joining $(x, h_L)$ and $(y, H_V)$. The answer is the tie line through (0.30, 189.3).

3. Chart readings used (kcal/kg vs weight fraction ethanol): saturated vapor $H_V$ = 640, 602, 566, 529, 491, 455, 411, 367 at $w$ = 0, 0.1, …, 0.7; saturated liquid $h_L$ = 100, 84, 77, 73, 70, 68, 65, 62 at the same $w$.

4. Trial tie lines (each $T$ gives $x$, $y$ from the VLE data; $h$ is the tie line's enthalpy at $w = 0.30$):

| $T$, °C | $x$ (wt) | $y$ (wt) | $h_L$ | $H_V$ | $h$ at $z$ |
|---|---|---|---|---|---|
| 88.0 | 0.185 | 0.641 | 78.0 | 392.9 | 157.3 |
| 89.0 | 0.166 | 0.620 | 79.4 | 402.4 | 174.9 |
| 89.7 | 0.152 | 0.601 | 80.4 | 410.6 | 189.4 |
| 90.0 | 0.146 | 0.592 | 80.8 | 414.5 | 196.3 |

The tie line passes through $h_F = 189.3$ at $T_{drum} = 89.7$ °C.

5. Products: $x = 0.152$ wt fraction (0.065 mol fraction), $y = 0.601$ wt fraction (0.371 mol fraction).

6. Lever rule (weight basis, valid because the chart is in weight units):
$$\frac{V}{F} = \frac{z - x}{y - x} = \frac{0.30 - 0.152}{0.601 - 0.152} = 0.330$$
$$V = 330\ \mathrm{kg/h}, \qquad L = 670\ \mathrm{kg/h}$$
Equivalently $V/F = (h_F - h_L)/(H_V - h_L) = (189.3 - 80.4)/(410.6 - 80.4) = 0.330$.

![Ethanol–water H–x diagram with the tie line through the feed point (0.30, 189 kcal/kg)](fig/practice-flash-P7-sol.svg)

> Book answer (2.D9): $T_{drum} \approx 88.2$ °C, $x_E = 0.146$, $y_E = 0.617$, $V = 326.9$ kg/h ✓. Flows and compositions agree within chart-reading accuracy. The drum temperature is about 1.5 °C higher here because the tie-line temperatures were taken from 1-atm data, while the chart's own tie lines are for 1 kg/cm² (0.968 atm), where everything boils about 1 °C lower.

**Exam tip:** state the heat capacities and the reference temperature you use for $h_F$; that line carries marks even if your chart reading differs slightly.`,
        answer: String.raw`$T_{drum} \approx 89.7$ °C (book 88.2 °C); $x = 0.152$, $y = 0.601$ wt fraction ethanol; V ≈ 330 kg/h, L ≈ 670 kg/h (book V = 326.9).` } ] },

    { id: "practice-flash-P8", q: 8, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-flash-P8", label: "", marks: "", topic: "flash",
        sub: "Find the feed composition for a given V/F (ethane, isobutane, n-butane)", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 2.D15*`,
        text: String.raw`A flash drum separates 50 kmol/h of ethane, isobutane and n-butane. The feed ratio of isobutane to n-butane is held at 0.8 ($z_{iC4}/z_{nC4} = 0.8$), but all three feed mole fractions may change. The drum is at 100 kPa and 20 °C and runs at V/F = 0.4. What must the feed mole fractions be? Use DePriester K values.`,
        solution: String.raw`> Multicomponent flash (Rachford–Rice) is in Wankat Section 2.6, not in the slides.

**Unknowns:** $z_E$, $z_{iC4}$, $z_{nC4}$ with $z_{iC4} = 0.8z_{nC4}$. **Equations:** $\sum x_i = 1$ and $\sum y_i = 1$ (together they also give $\sum z_i = 1$), with $x_i = z_i/d_i$, $d_i = 1 + (K_i - 1)(V/F)$ and $y_i = K_ix_i$. Both are linear in $z_E$ and $z_{nC4}$:
$$\frac{z_E}{d_E} + z_{nC4}\left(\frac{0.8}{d_{iC4}} + \frac{1}{d_{nC4}}\right) = 1, \qquad \frac{K_Ez_E}{d_E} + z_{nC4}\left(\frac{0.8K_{iC4}}{d_{iC4}} + \frac{K_{nC4}}{d_{nC4}}\right) = 1$$

1. **At the printed conditions (100 kPa, 20 °C):** $K_E = 27.2$, $K_{iC4} = 2.91$, $K_{nC4} = 2.16$ (Wankat Eq. 2-30). All three K values exceed 1, so $f(V/F) = \sum z_i(K_i - 1)/d_i > 0$ for every feed and every V/F: any such mixture is a superheated vapor at 20 °C and 100 kPa (n-butane boils at −0.5 °C at 1 atm). Solving the linear equations anyway gives $z_E = -0.68$: **no physical solution**.

2. **At 1000 kPa, 20 °C** (which reproduces the book's answer, so 100 kPa appears to be a misprint for 1000 kPa): $K_E = 2.805$, $K_{iC4} = 0.349$, $K_{nC4} = 0.235$; $d$ = 1.722, 0.739, 0.694.
$$0.5807z_E + 2.523z_{nC4} = 1, \qquad 1.629z_E + 0.7154z_{nC4} = 1$$
$$z_E = 0.489, \qquad z_{nC4} = 0.284, \qquad z_{iC4} = 0.8(0.284) = 0.227 \quad (\textstyle\sum z = 1.000)$$

3. Products at this feed: $x$ = 0.284 / 0.307 / 0.409 and $y$ = 0.797 / 0.107 / 0.096 (ethane / iC₄ / nC₄), each summing to 1.000. Flows: $V = 20$, $L = 30$ kmol/h.

> Book answer (2.D15): $z_{ethane} = 0.4677$, $z_{nC4} = 0.2957$ ✓ at 1000 kPa (DePriester chart readings versus the fitted K values explain the 0.02 difference). At the printed 100 kPa the problem has no two-phase solution.

**Exam tip:** before any flash calculation check $\sum z_iK_i > 1$ and $\sum z_i/K_i > 1$. If all $K_i > 1$ (or all $< 1$), there is no flash.`,
        answer: String.raw`At 100 kPa no solution (all K > 1, feed is vapor). At 1000 kPa: $z_E = 0.489$, $z_{iC4} = 0.227$, $z_{nC4} = 0.284$ (book 0.4677 and 0.2957).` } ] },

    { id: "practice-flash-P9", q: 9, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-flash-P9", label: "", marks: "", topic: "flash",
        sub: "Drum temperature for a specified liquid mole fraction (propane, n-butane, n-hexane)", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 2.D18*`,
        text: String.raw`A feed of 10 mol% propane, 30 mol% n-butane and 60 mol% n-hexane (10 kmol/h) is flashed at 200 kPa. The liquid must be 85 mol% n-hexane. Using DePriester K values, find $T_{drum}$ and V/F to within 0.5 °C. (This is a single trial and error, not a simultaneous mass and energy balance.)`,
        solution: String.raw`> Multicomponent flash with a specified product composition: Wankat Section 2.6, not in the slides.

**Plan:** guess $T$. The hexane specification fixes V/F at that $T$:
$$x_6 = \frac{z_6}{1 + (K_6 - 1)V/F} = 0.85 \Rightarrow \frac{V}{F} = \frac{z_6/0.85 - 1}{K_6 - 1} = \frac{-0.2941}{K_6 - 1}$$
Then the Rachford–Rice sum $f = \sum z_i(K_i - 1)/[1 + (K_i - 1)V/F]$ is the check: $f = 0$ at the right $T$. K values from Wankat Eq. 2-30 (DePriester fit) at 200 kPa.

| $T$, °C | $K_{C3}$ | $K_{C4}$ | $K_{C6}$ | $V/F$ | $f$ |
|---|---|---|---|---|---|
| 50 | 6.87 | 2.50 | 0.320 | 0.432 | −0.139 |
| 60 | 8.14 | 3.13 | 0.436 | 0.522 | −0.025 |
| 65 | 8.81 | 3.47 | 0.505 | 0.594 | +0.018 |
| 62.8 | 8.51 | 3.32 | 0.473 | 0.559 | 0.000 |

1. Interpolating between 60 and 65 °C and refining gives $T_{drum} = 62.8$ °C and $V/F = 0.559$.

2. Products: $x$ = 0.019 / 0.131 / 0.850, $y$ = 0.164 / 0.434 / 0.402 (C₃ / nC₄ / nC₆); $V = 5.59$, $L = 4.41$ kmol/h.

> Book answer (2.D18): $T_{drum} \approx 65.6$ °C, $V/F \approx 0.57$ ✓ for V/F. The 3 °C difference in temperature comes from the K values: the fitted equation has a mean error of about 5% for n-hexane, and $T$ is set mainly by $K_6$. Reading the DePriester chart directly reproduces the book's value.`,
        answer: String.raw`$T_{drum} \approx 63$ °C with fitted K values (book, chart: 65.6 °C); $V/F \approx 0.56$ (book 0.57).` } ] },

    { id: "practice-flash-P10", q: 10, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-flash-P10", label: "", marks: "", topic: "flash",
        sub: "Drum temperature for 90% recovery of n-hexane in the liquid", type: "numerical", syllabus: "partial", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 2.D19*`,
        text: String.raw`A flash drum at 300 kPa receives 1000 kmol/h of 40 mol% isobutane, 25 mol% n-pentane and 35 mol% n-hexane. 90% of the n-hexane fed must leave in the liquid. Find $T_{drum}$, $x_j$, $y_j$ and V/F.`,
        solution: String.raw`> Multicomponent flash: Wankat Section 2.6, not in the slides.

1. Recovery specification: $Lx_6 = 0.90Fz_6$. With $x_6 = z_6/[1 + (K_6 - 1)\psi]$, $\psi = V/F$:
$$\frac{1 - \psi}{1 + (K_6 - 1)\psi} = 0.90 \Rightarrow \psi = \frac{0.10}{1 + 0.90(K_6 - 1)}$$

2. Guess $T$, get $\psi$ from step 1, check the Rachford–Rice sum (K from Wankat Eq. 2-30 at 300 kPa):

| $T$, °C | $K_{iC4}$ | $K_{C5}$ | $K_{C6}$ | $\psi$ | $f$ |
|---|---|---|---|---|---|
| 50 | 2.22 | 0.583 | 0.227 | 0.329 | −0.135 |
| 55 | 2.47 | 0.669 | 0.266 | 0.295 | −0.010 |
| 57 | 2.57 | 0.705 | 0.283 | 0.282 | +0.040 |
| 55.4 | 2.49 | 0.676 | 0.269 | 0.292 | 0.000 |

3. Result: $T_{drum} = 55.4$ °C, $V/F = 0.292$, $V = 292$ kmol/h, $L = 708$ kmol/h.

| | $z$ | $K$ | $x$ | $y$ |
|---|---|---|---|---|
| isobutane | 0.40 | 2.487 | 0.279 | 0.694 |
| n-pentane | 0.25 | 0.676 | 0.276 | 0.187 |
| n-hexane | 0.35 | 0.269 | 0.445 | 0.120 |

**Check:** hexane in liquid $= 708(0.445) = 315 = 0.90(350)$ ✓

> Book answer (2.D19): $T_{drum} \approx 57$ °C, $V/F = 0.293$ ✓`,
        answer: String.raw`$T_{drum} \approx 55$–57 °C (55.4 °C here, book 57 °C), $V/F = 0.292$; $x$ = 0.279/0.276/0.445, $y$ = 0.694/0.187/0.120 (iC₄/nC₅/nC₆).` } ] },

    { id: "practice-flash-P11", q: 11, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-flash-P11", label: "", marks: "", topic: "flash",
        sub: "Adiabatic multicomponent flash: double trial and error (propane, n-pentane, n-octane)", type: "numerical", syllabus: "out", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 2.F3* (long problem; needs outside enthalpy data)`,
        text: String.raw`A feed of 0.517 mole fraction propane, 0.091 n-pentane and 0.392 n-octane (100 kmol/h) is at 95 °C (liquid under pressure) and is flashed adiabatically into a drum at 250 kPa. Find the drum temperature, V/F and the mole fractions of both products. Converge $|\Delta T_{drum}| < 0.2$ °C.`,
        solution: String.raw`> Not covered in the current ChE 303 slides: the adiabatic multicomponent flash (Wankat Section 2.7) needs both Rachford–Rice and an energy-balance loop.

**Data** (reference state: liquid at 0 °C):

| | $T_b$, °C | $\lambda$ at $T_b$, J/mol | $C_{P,L}$, J/(mol·K) | $C_{P,V}$, J/(mol·K), $T$ in °C |
|---|---|---|---|---|
| propane | −42.1 | 18,865 | 136.7 | $68.03 + 0.2259T - 1.311\times10^{-4}T^2 + 3.17\times10^{-8}T^3$ |
| n-pentane | 36.08 | 25,773 | 165.9 | $4.184(27.45 + 0.08148T - 4.538\times10^{-5}T^2 + 10.1\times10^{-9}T^3)$ |
| n-octane | 125.7 | 34,989 | 254.7 | $\approx 178 + 0.44T$ |

Sources: propane and octane $\lambda$ and liquid $C_P$ from Çengel Table A-2 (427.8 and 306.3 kJ/kg; propane $C_{P,L}$ = 3.1 kJ/(kg·K), the mean of its 0 °C and 50 °C values extrapolated to 95 °C; octane 2.23 kJ/(kg·K)); pentane from Wankat Table 2-5; vapor $C_P$ from Himmelblau-type ideal-gas polynomials. Enthalpies:
$$h_{L,i} = C_{P,L,i}\,T, \qquad H_{V,i} = C_{P,L,i}T_{b,i} + \lambda_i + \int_{T_{b,i}}^{T} C_{P,V,i}\,dT$$
K values from Wankat Eq. 2-30 at 250 kPa.

1. Feed enthalpy: $h_F = \sum z_iC_{P,L,i}(95) = 17{,}635$ J/mol. The feed's bubble and dew points at 250 kPa are 2.9 °C and 122.9 °C, so the drum is two-phase.

2. Loop (Wankat Fig. 2-13, wide-boiling feed): guess $T_{drum}$ → K values → solve Rachford–Rice for $V/F$ → energy-balance error
$$E = \frac{V}{F}\sum y_iH_{V,i} + \frac{L}{F}\sum x_ih_{L,i} - h_F$$
→ new temperature $T_{k+1} = T_k - d\,E/(dE/dT)$ with $dE/dT = (V/F)\sum y_iC_{P,V,i} + (L/F)\sum x_iC_{P,L,i}$ and damping $d = 0.5$ (Wankat Eq. 2-57; undamped Newton oscillates here).

| trial | $T$, °C | $V/F$ | $E$, J/mol | $dE/dT$ | next $T$ |
|---|---|---|---|---|---|
| 1 | 30.00 | 0.381 | −6508 | 162.4 | 50.04 |
| 2 | 50.04 | 0.481 | −1501 | 158.7 | 54.77 |
| 3 | 54.77 | 0.500 | −362 | 158.3 | 55.91 |
| 4 | 55.91 | 0.504 | −86 | 158.2 | 56.18 |
| 5 | 56.18 | 0.505 | −20 | 158.2 | 56.25 |

3. Converged: $T_{drum} = 56.3$ °C, $V/F = 0.506$, $V = 50.6$ and $L = 49.4$ kmol/h.

| | $z$ | $K$ | $x$ | $y$ |
|---|---|---|---|---|
| propane | 0.517 | 6.146 | 0.144 | 0.882 |
| n-pentane | 0.091 | 0.813 | 0.101 | 0.082 |
| n-octane | 0.392 | 0.048 | 0.756 | 0.036 |

> Book answer (2.F3): $T_{drum} \approx 57.3$ °C, $V/F = 0.513$ ✓ within the enthalpy-data uncertainty. The answer is most sensitive to propane's liquid heat capacity (propane is near its critical point at 95 °C): $C_{P,L}$ = 2.6 to 3.4 kJ/(kg·K) moves $T_{drum}$ from 50.5 to 59.8 °C.`,
        answer: String.raw`$T_{drum} \approx 56$ °C (book 57.3 °C), $V/F \approx 0.51$ (book 0.513); $x$ ≈ 0.144/0.101/0.756, $y$ ≈ 0.882/0.082/0.036 (C₃/nC₅/nC₈).` } ] },

    { id: "practice-flash-P12", q: 12, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-flash-P12a", label: "(a)", marks: "10", topic: "flash",
          sub: "Flash distillation system: sketch and role of each unit", type: "sketch", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 03 (flash system, process flow, drum components)`,
          text: String.raw`Draw a labelled sketch of a flash distillation system and explain the job of the pump, heater, valve, drum internals and demister. Why is the drum usually operated adiabatically, and where does the energy for vaporization come from?`,
          solution: String.raw`![Flash distillation system: pump, heater, valve and flash drum with demister](fig/practice-flash-P12-sol.svg)

1. **Pump:** raises the feed pressure so that the feed stays liquid when it is heated.
2. **Heater:** heats the pressurized liquid to $T_F$. This stored sensible heat is the energy that will vaporize part of the feed.
3. **Throttle valve:** the pressure drops suddenly to $p_{drum}$. The expansion is isenthalpic ($h$ constant), so the liquid is now above its bubble point and part of it flashes to vapor; the mixture cools to $T_{drum}$.
4. **Flash drum:** one equilibrium stage. An inlet distributor spreads the two-phase feed, the vapor disengagement zone lets drops settle, the liquid holdup zone gives surge volume.
5. **Demister pad:** a mesh near the top that catches entrained droplets so the vapor leaves dry.
6. Vapor (more volatile components) leaves at the top, liquid at the bottom, both at $T_{drum}$ and $p_{drum}$.

**Adiabatic operation:** the drum is insulated and $Q_{flash} = 0$. The latent heat for the vapor comes from the sensible heat of the hot feed: $Fh_F = Lh_L + VH_V$, so the products are colder than the feed ($T_{drum} < T_F$).`,
          answer: String.raw`Pump → heater → valve (isenthalpic, partial vaporization) → drum with distributor, disengagement space, demister and liquid holdup; energy for vaporization is the feed's sensible heat, so $T_{drum} < T_F$.` },
        { id: "practice-flash-P12b", label: "(b)", marks: "12", topic: "flash",
          sub: "Degrees of freedom of a flash system: C + 5", type: "derivation", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 03 ("DOF for a Flash System", "DOF for a Binary Flash Drum")`,
          text: String.raw`Count the variables and independent equations of the complete flash system (pump, heater, valve, drum) for a C-component feed and show that the degrees of freedom are C + 5. How many variables remain to be specified for a binary flash once the feed and $Q_{flash}$ are fixed? Give two common choices.`,
          solution: String.raw`**Variables $N_v$:**

| stream / item | variables | count |
|---|---|---|
| inlet feed | $F, T_1, p_1$ and $C - 1$ independent $z_i$ | $C + 2$ |
| pump work, heater duty | $W_P, Q_H$ | 2 |
| flash feed (after heater) | $T_F, p_F$ | 2 |
| drum conditions | $T_{drum}, p_{drum}$ | 2 |
| vapor product | $V$ and $C - 1$ independent $y_i$ | $C$ |
| liquid product | $L$ and $C - 1$ independent $x_i$ | $C$ |
| drum heat duty | $Q_{flash}$ | 1 |
| total | | $3C + 9$ |

**Independent equations $N_e$:**

| equation | count |
|---|---|
| component mass balances | $C$ |
| VLE in the drum, $y_i = K_ix_i$ | $C$ |
| pump performance | 1 |
| heater energy balance | 1 |
| isenthalpic valve | 1 |
| overall energy balance on the drum | 1 |
| total | $2C + 4$ |

(In each stream the last mole fraction is fixed by $\sum = 1$, so only $C - 1$ fractions are counted; the $C$ mass balances are $C - 1$ component balances plus the total balance.)

$$\mathrm{DOF} = N_v - N_e = (3C + 9) - (2C + 4) = C + 5$$

**Binary drum after feed specification:** fixing $F, T_F, p_F$, the $C - 1$ feed fractions and $Q_{flash}$ ($Q_{flash} = 0$ for adiabatic) uses $C + 3$ of them, leaving
$$(C + 5) - (C + 3) = 2$$
This matches the phase rule for the drum ($F = C - P + 2 = 2 - 2 + 2 = 2$). Typical pairs: $(p_{drum}, T_{drum})$; $(p_{drum}, V/F)$; $(p_{drum}, x)$ or $(p_{drum}, y)$. With $p_{drum}$ and $V/F$ the sequential solution works; with $T_F$ given instead, $T_{drum}$ is unknown and the balances are solved simultaneously.`,
          answer: String.raw`$N_v = 3C + 9$, $N_e = 2C + 4$, DOF = C + 5; after F, $T_F$, $p_F$, $z_i$, $Q_{flash}$ are fixed, 2 remain (e.g. $p_{drum}$ and V/F, or $p_{drum}$ and $T_{drum}$).` },
        { id: "practice-flash-P12c", label: "(c)", marks: "13", topic: "flash",
          sub: "Derive the flash operating line and its q and f forms", type: "derivation", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 03 ("Flash Equations", "Operating Line")`,
          text: String.raw`Starting from the drum mass balances, derive the flash operating line $y = -(L/V)x + (F/V)z$. Rewrite it in terms of the fraction vaporized $f = V/F$ and the fraction remaining liquid $q = L/F$. Show that it always passes through $y = x = z$, and state its slope for $f = 0$, $0.5$ and $1$.`,
          solution: String.raw`1. Mass balances on the drum (steady state):
$$F = L + V \quad (1), \qquad Fz = Lx + Vy \quad (2)$$

2. Solve (2) for $y$:
$$y = -\frac{L}{V}x + \frac{F}{V}z$$
This is the operating line: a straight line on y–x axes with slope $-L/V$.

3. **f form.** With $f = V/F$, $L = F - V = (1 - f)F$:
$$\frac{L}{V} = \frac{1 - f}{f}, \qquad \frac{F}{V} = \frac{1}{f} \Rightarrow y = -\frac{1 - f}{f}x + \frac{z}{f}$$

4. **q form.** With $q = L/F$, $V = (1 - q)F$:
$$y = -\frac{q}{1 - q}x + \frac{z}{1 - q}$$
(The same as the feed line of column distillation, which is why $q$ is used.)

5. **Intersection with $y = x$:** put $y = x$ in step 2: $x(1 + L/V) = (F/V)z \Rightarrow x(V + L) = Fz \Rightarrow x = z$. So every operating line passes through $(z, z)$, whatever $V/F$.

6. Slopes:

| $f = V/F$ | $q = L/F$ | slope $-q/(1 - q)$ | meaning |
|---|---|---|---|
| 0 | 1 | $-\infty$ (vertical) | feed just at its bubble point, $x = z$, $y = y_{max}$ |
| 0.5 | 0.5 | $-1$ | half vaporized |
| 1 | 0 | 0 (horizontal) | feed just at its dew point, $y = z$, $x = x_{min}$ |

7. The intersection of the operating line with the equilibrium curve gives the $x$ and $y$ leaving the drum (simultaneous solution of mass balance and equilibrium); $T_{drum}$ is then read from the T–x–y diagram.

**Exam tip:** always mark $(z, z)$ on the diagonal first, then draw the line with slope $-L/V$ from it.`,
          answer: String.raw`$y = -(L/V)x + (F/V)z = -\frac{1-f}{f}x + \frac{z}{f} = -\frac{q}{1-q}x + \frac{z}{1-q}$; passes through (z, z); slope −∞, −1, 0 for f = 0, 0.5, 1.` } ] },

    { id: "practice-flash-P13", q: 13, section: "F", compulsory: false,
      stem: String.raw`500 kmol/h of an ethanol–water feed with 25 mol% ethanol is flashed at 1 atm. Use the ethanol–water VLE data at 1 atm (Wankat Table 2-1):

| $x$ | 0 | 0.019 | 0.0721 | 0.0966 | 0.1238 | 0.1661 | 0.2337 | 0.2608 | 0.3273 | 0.3965 | 0.5198 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $y$ | 0 | 0.170 | 0.3891 | 0.4375 | 0.4704 | 0.5089 | 0.5445 | 0.5580 | 0.5826 | 0.6122 | 0.6599 |
| $T$, °C | 100 | 95.5 | 89.0 | 86.7 | 85.3 | 84.1 | 82.7 | 82.3 | 81.5 | 80.7 | 79.7 |`,
      parts: [
        { id: "practice-flash-P13a", label: "(a)", marks: "8", topic: "flash",
          sub: "Range of attainable vapor and liquid compositions", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Style of Slides 03 ethanol–water problem; own numbers`,
          text: String.raw`What are the richest vapor and the leanest liquid this drum can produce if V/F is free to vary? Give the drum temperature in each case.`,
          solution: String.raw`1. $V/F \to 0$: vertical operating line at $x = z = 0.25$. Between $x = 0.2337$ ($y = 0.5445$) and $0.2608$ ($y = 0.5580$):
$$y_{max} = y^*(0.25) = 0.553, \qquad T \approx 82.4\ ^\circ\mathrm{C}\ \text{(bubble point of the feed)}$$

2. $V/F \to 1$: horizontal line at $y = z = 0.25$. Between $y = 0.170$ ($x = 0.019$) and $0.3891$ ($x = 0.0721$):
$$x_{min} = x^*(0.25) = 0.033, \qquad T \approx 93.3\ ^\circ\mathrm{C}\ \text{(dew point of the feed)}$$

(Smooth interpolation of the data; a straight line between the two table points gives 0.553 and 0.036.)

So the vapor can never be richer than 0.553 and the liquid never leaner than 0.033.`,
          answer: String.raw`$y_{max} = 0.553$ at ≈ 82.4 °C; $x_{min} \approx 0.033$ at ≈ 93.3 °C.` },
        { id: "practice-flash-P13b", label: "(b)", marks: "15", topic: "flash",
          sub: "Products for V/F = 0.3 (graphical and checked numerically)", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Own numbers; method of Slides 03 (McCabe–Thiele for flash)`,
          text: String.raw`The drum vaporizes 30% of the feed. Write the operating line, find $x$, $y$, $T_{drum}$ and the product flow rates, and check the component balance.`,
          solution: String.raw`**Given:** $z = 0.25$, $V/F = 0.3$, $F = 500$ kmol/h. **Assumption:** equilibrium stage at 1 atm.

1. $V = 150$ kmol/h, $L = 350$ kmol/h, $L/V = 7/3$.

2. Operating line:
$$y = -\frac{7}{3}x + \frac{0.25}{0.3} = -2.333x + 0.833$$

3. Intersection: at $x = 0.1238$ the line gives $y = 0.544 > 0.470$ (equilibrium); at $x = 0.1661$ it gives $0.446 < 0.509$. So the answer lies between them. Solving on the interpolated curve:
$$x = 0.146, \qquad y = 0.493, \qquad T_{drum} \approx 84.6\ ^\circ\mathrm{C}$$

4. **Check:** $150(0.493) + 350(0.146) = 73.9 + 51.1 = 125.0 = 500(0.25)$ ✓

![Ethanol–water y–x diagram for z = 0.25 with the limiting lines and the operating lines for V/F = 0.3 and for x = 0.05](fig/practice-flash-P13-sol.svg)`,
          answer: String.raw`$y = -2.333x + 0.833$; $x = 0.146$, $y = 0.493$, $T \approx 84.6$ °C; V = 150, L = 350 kmol/h.` },
        { id: "practice-flash-P13c", label: "(c)", marks: "12", topic: "flash",
          sub: "V/F needed to strip the liquid to 5 mol% ethanol", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Own numbers`,
          text: String.raw`The liquid product is to contain only 5 mol% ethanol. Find the required V/F, the vapor composition and both flow rates. Comment on the result.`,
          solution: String.raw`1. Equilibrium at $x = 0.05$ (between 0.019 and 0.0721): $y = 0.320$, $T \approx 91.3$ °C.

2. Lever rule:
$$\frac{V}{F} = \frac{z - x}{y - x} = \frac{0.25 - 0.05}{0.320 - 0.05} = 0.741$$

3. $V = 370.7$ kmol/h at $y = 0.320$; $L = 129.3$ kmol/h at $x = 0.05$.

4. **Check:** $370.7(0.320) + 129.3(0.05) = 118.5 + 6.5 = 125.0$ ✓

**Comment:** to clean the liquid, three-quarters of the feed must be boiled off, and the vapor is then only 32% ethanol, barely richer than the feed. One flash stage cannot give both a pure vapor and a lean liquid; that needs a cascade (column).`,
          answer: String.raw`$y = 0.320$, $V/F = 0.741$; V = 370.7, L = 129.3 kmol/h — a single stage cannot make both products pure.` } ] },

    { id: "practice-flash-P14", q: 14, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-flash-P14a", label: "(a)", marks: "10", topic: "flash",
          sub: "Derive the Rachford–Rice equation", type: "derivation", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Wankat 3e, Section 2.6 (Eqs. 2-38 to 2-42); slides give K values only`,
          text: String.raw`For a multicomponent isothermal flash with known $F$, $z_i$, $T_{drum}$ and $p_{drum}$, derive the Rachford–Rice equation for V/F and explain why it is preferred to using $\sum x_i = 1$ directly.`,
          solution: String.raw`> The slides introduce K values and the DePriester chart; the Rachford–Rice equation is Wankat Section 2.6.

1. Component balance and equilibrium for each component $i$:
$$Fz_i = Lx_i + Vy_i, \qquad y_i = K_ix_i$$

2. Substitute $L = F - V$ and divide by $F$:
$$z_i = \left(1 - \frac{V}{F}\right)x_i + \frac{V}{F}K_ix_i \Rightarrow x_i = \frac{z_i}{1 + (K_i - 1)V/F}, \qquad y_i = \frac{K_iz_i}{1 + (K_i - 1)V/F}$$

3. Stoichiometric relations $\sum x_i = 1$ and $\sum y_i = 1$. Subtracting them, $\sum y_i - \sum x_i = 0$:
$$f\left(\frac{V}{F}\right) = \sum_{i=1}^{C}\frac{(K_i - 1)z_i}{1 + (K_i - 1)V/F} = 0$$
This is the Rachford–Rice equation; with T and p fixed, all $K_i$ are known and V/F is its only unknown.

4. Why this form: its derivative
$$\frac{df}{d(V/F)} = -\sum_i \frac{(K_i - 1)^2z_i}{[1 + (K_i - 1)V/F]^2} < 0$$
is always negative, so $f$ falls monotonically and has a single root between 0 and 1. Newton's method $(V/F)_{k+1} = (V/F)_k - f_k/f'_k$ converges quickly and safely. $\sum x_i - 1 = 0$ alone is not monotonic and can converge badly.

5. A two-phase answer exists only if $f(0) = \sum z_iK_i - 1 > 0$ (feed above its bubble point) and $f(1) = 1 - \sum z_i/K_i < 0$ (below its dew point).`,
          answer: String.raw`$\sum_i (K_i - 1)z_i/[1 + (K_i - 1)V/F] = 0$; monotonic (f′ < 0), single root, good Newton convergence.` },
        { id: "practice-flash-P14b", label: "(b)", marks: "25", topic: "flash",
          sub: "Isothermal flash of propane, n-butane, n-pentane with given K values", type: "numerical", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Own numbers; K values from the DePriester fit (Wankat Eq. 2-30) at 300 kPa, 40 °C`,
          text: String.raw`200 kmol/h of 30 mol% propane, 30 mol% n-butane and 40 mol% n-pentane is flashed at 300 kPa and 40 °C, where (DePriester) $K_{C3} = 3.86$, $K_{C4} = 1.32$ and $K_{C5} = 0.44$. Check that the feed splits into two phases, then find V/F, V, L and the product compositions. Start Newton's method at V/F = 0.5.`,
          solution: String.raw`**Given:** $z$ = 0.30 / 0.30 / 0.40, $K$ = 3.86 / 1.32 / 0.44, $F = 200$ kmol/h.

1. Two-phase check: $\sum z_iK_i = 1.158 + 0.396 + 0.176 = 1.730 > 1$ and $\sum z_i/K_i = 0.0777 + 0.2273 + 0.9091 = 1.214 > 1$. The feed is between its bubble and dew points ✓

2. Rachford–Rice with Newton steps:

| trial | $V/F$ | $f$ | $f'$ | next $V/F$ |
|---|---|---|---|---|
| 1 | 0.5000 | +0.1247 | −0.6804 | 0.6833 |
| 2 | 0.6833 | +0.0063 | −0.6310 | 0.6934 |
| 3 | 0.6934 | 0.0000 | −0.6316 | 0.6934 |

3. Products at $V/F = 0.693$: $x_i = z_i/[1 + (K_i - 1)(0.693)]$, $y_i = K_ix_i$:

| | $z$ | $K$ | $x$ | $y$ |
|---|---|---|---|---|
| propane | 0.30 | 3.86 | 0.1006 | 0.3882 |
| n-butane | 0.30 | 1.32 | 0.2455 | 0.3241 |
| n-pentane | 0.40 | 0.44 | 0.6539 | 0.2877 |
| sum | 1.00 | | 1.0000 | 1.0000 |

4. Flows: $V = 0.693(200) = 138.7$ kmol/h, $L = 61.3$ kmol/h.

5. **Check (propane):** $138.7(0.3882) + 61.3(0.1006) = 53.8 + 6.2 = 60.0 = 200(0.30)$ ✓

**Exam tip:** both sums must come to 1.000 at the converged V/F; if they do not, the iteration has not converged.`,
          answer: String.raw`$V/F = 0.693$; V = 138.7, L = 61.3 kmol/h; $x$ = 0.101/0.246/0.654, $y$ = 0.388/0.324/0.288 (C₃/C₄/C₅).` } ] },

    { id: "practice-flash-P15", q: 15, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-flash-P15a", label: "(a)", marks: "8", topic: "flash",
          sub: "Using an existing flash drum that is too small", type: "theory", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Wankat 3e, Section 2.10`,
          text: String.raw`An existing vertical drum must handle a new flash duty, but $(V/F)F$ exceeds the drum's maximum vapor capacity. List the options open to the engineer.`,
          solution: String.raw`The existing drum fixes $D$ and $h_{total}$, so its maximum vapor rate is $V_{max} = u_{perm}\,\rho_V A_c / MW_V$ (Wankat Eq. 2-70). It can be used only if $(V/F)F \le V_{max}$. If not:

- Add or improve a demister or chevrons, which raise $u_{perm}$ and cut entrainment.
- Reduce the feed rate to the drum.
- Reduce V/F (less vapor, but richer in the volatile components).
- Use two or more existing drums in parallel (less feed per drum).
- Use drums in series (cascade), which also changes the separation.
- Raise the operating pressure: $\rho_V$ rises, so the drum can take more moles of vapor, but the relative volatility and temperatures change.
- Buy or build a new drum, or combine the options above, choosing the cheapest and quickest.`,
          answer: String.raw`Demister/chevrons, lower F, lower V/F, drums in parallel or series, higher pressure, or a new drum.` },
        { id: "practice-flash-P15b", label: "(b)", marks: "27", topic: "flash",
          sub: "Benzene–toluene flash (α = 2.5) and vertical drum size", type: "numerical", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Own numbers; drum sizing by Wankat Eqs. 2-64 to 2-68`,
          text: String.raw`800 kmol/h of 50 mol% benzene, 50 mol% toluene is flashed at 1 atm with V/F = 0.5. Take $\alpha_{BT} = 2.5$; the drum temperature is 95.5 °C. (i) Find $x$ and $y$ analytically. (ii) Size a vertical drum ($h_{total}/D = 4$). Data: $\rho_L = 800$ kg/m³; vapor ideal gas; $MW_B = 78.11$, $MW_T = 92.14$; $K_{drum} = \exp[A + B\ln F_{lv} + C(\ln F_{lv})^2 + D(\ln F_{lv})^3 + E(\ln F_{lv})^4]$ ft/s with $A = -1.8775$, $B = -0.8146$, $C = -0.1871$, $D = -0.01452$, $E = -0.001015$.`,
          solution: String.raw`**(i) Compositions.** With $V/F = 0.5$, $L/V = 1$ and the operating line is $y = -x + z/0.5 = 1 - x$. Equating with $y = 2.5x/(1 + 1.5x)$:
$$2.5x = (1 - x)(1 + 1.5x) \Rightarrow 1.5x^2 + 2x - 1 = 0 \Rightarrow x = \frac{-2 + \sqrt{4 + 6}}{3} = 0.387$$
$$y = 1 - 0.387 = 0.613$$
$V = L = 400$ kmol/h. (Raoult's law with Antoine constants gives the same drum at 95.5 °C, which is where the temperature comes from.)

**(ii) Drum size.**

1. $MW_V = 0.613(78.11) + 0.387(92.14) = 83.55$; $MW_L = 0.387(78.11) + 0.613(92.14) = 86.70$.

2. $\rho_V = \dfrac{p\,MW_V}{RT} = \dfrac{101325(83.55)}{8314(368.7)} = 2.76$ kg/m³.

3. Mass flows: $W_V = 400(83.55) = 33{,}420$ kg/h, $W_L = 400(86.70) = 34{,}680$ kg/h.

4. Flow parameter:
$$F_{lv} = \frac{W_L}{W_V}\sqrt{\frac{\rho_V}{\rho_L}} = 1.038\sqrt{\frac{2.76}{800}} = 0.0610, \qquad \ln F_{lv} = -2.797$$

5. $K_{drum} = 0.446$ ft/s, and
$$u_{perm} = K_{drum}\sqrt{\frac{\rho_L - \rho_V}{\rho_V}} = 0.446\sqrt{\frac{797.2}{2.76}} = 7.58\ \mathrm{ft/s} = 2.31\ \mathrm{m/s}$$

6. Area and diameter:
$$A_c = \frac{W_V}{3600\,\rho_V\,u_{perm}} = \frac{33{,}420}{3600(2.76)(2.31)} = 1.45\ \mathrm{m^2}, \qquad D = \sqrt{\frac{4A_c}{\pi}} = 1.36\ \mathrm{m}$$
Use $D = 1.4$ m (about 4.5 ft).

7. Height: $h_{total} = 4D = 5.6$ m. Check that $h_V$ (≥ 48 in) and $h_f$ (≥ 18 in) fit and that the liquid pool gives the required surge time; if $h/D$ came out below 3 or above 5, change the surge volume or use a horizontal drum.

![Vertical flash drum: diameter from the permissible vapor velocity, height from the hV, hf and hL rules](fig/practice-flash-P15-sol.svg)

**Exam tip:** the diameter is set by the vapor, not the liquid. Keep $u_{perm}$, $\rho_V$ and $A_c$ in one unit system; $K_{drum}$ from the correlation is in ft/s.`,
          answer: String.raw`(i) $x = 0.387$, $y = 0.613$, V = L = 400 kmol/h. (ii) $F_{lv} = 0.061$, $K_{drum} = 0.446$ ft/s, $u_{perm} = 2.31$ m/s, $A_c = 1.45$ m², D ≈ 1.4 m, $h_{total} \approx 5.6$ m.` } ] }
  ] });
