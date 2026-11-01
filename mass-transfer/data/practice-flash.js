QB.paper({ year: "Practice", set: "Flash distillation", date: "", marks: 0, practice: true,
  rules: String.raw`Binary and multicomponent flash distillation: the slide problems (ethanol–water, methanol–water, cascades, constant α), every starred Wankat chapter 2 flash problem, and exam-style questions on the flash system, its degrees of freedom, the operating line, Rachford–Rice and drum sizing; plus the Jan 2026 slide problems (isothermal and adiabatic multicomponent flash, drum sizing, flash concepts).`,
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
          sub: "Methanol–water: z = 0.60, 40% vaporized", type: "numerical", syllabus: "in", repeats: ["2013-14-Q6b", "2021-22-Q6b"],
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
          sub: "Same flash with F = 1500 kmol/h", type: "numerical", syllabus: "in", repeats: ["2013-14-Q6b", "2021-22-Q6b"],
          origin: "slides", ref: String.raw`Slides 03, methanol–water problem; Wankat 3e, Problem 2.D1*`,
          text: String.raw`Repeat (a) for a feed rate of 1500 kmol/h.`,
          solution: String.raw`$z$, $p$ and $V/F$ are unchanged, so the operating line $y = -1.5x + 1.5$ and the compositions are unchanged: $x = 0.485$, $y = 0.772$.

Flows scale with $F$: $V = 0.40(1500) = 600$ kmol/h and $L = 900$ kmol/h.

> Book answer (2.D1b): $V = 600$, $L = 900$ ✓

**Exam tip:** a bigger feed needs a wider drum and a bigger heater; it does not change $x$ or $y$.`,
          answer: String.raw`Same $x = 0.485$, $y = 0.772$; V = 600 kmol/h, L = 900 kmol/h.` },
        { id: "practice-flash-P2c", label: "(c)", marks: "", topic: "flash",
          sub: "V/F needed for a specified liquid, z = 0.30, x = 0.20", type: "numerical", syllabus: "in", repeats: ["2013-14-Q6b", "2021-22-Q6b"],
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
          sub: "Feed rate and composition from the liquid product", type: "numerical", syllabus: "in", repeats: ["2013-14-Q6b", "2021-22-Q6b"],
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
          sub: "Vertical flash drum size for part (c)", type: "numerical", syllabus: "partial", repeats: ["2013-14-Q6b", "2021-22-Q6b"],
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

![Vertical flash drum: diameter from the permissible vapor velocity, height from the hV, hf and hL rules](fig/practice-flash-P16-sol.svg)

> Book answer (2.D1e): $D = 1.705$ ft, use 2.0 ft; length 6 to 10 ft ✓. The small difference comes from the book using $V/F = 0.25$ (V = 250 lbmol/h) from its graphical part (c).`,
          answer: String.raw`$K_{drum} = 0.444$ ft/s, $u_{perm} = 14.3$ ft/s, $A_c = 2.40$ ft², $D = 1.75$ ft → use 2.0 ft; $h_{total} = 6$–10 ft.` },
        { id: "practice-flash-P2f", label: "(f)", marks: "", topic: "flash",
          sub: "Flash at a specified drum temperature, 77 °C", type: "numerical", syllabus: "in", repeats: ["2013-14-Q6b", "2021-22-Q6b"],
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
          sub: "Flash with a specified vapor composition, y = 0.892", type: "numerical", syllabus: "in", repeats: ["2013-14-Q6b", "2021-22-Q6b"],
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
        sub: "Benzene–toluene flash with α = 2.4 for a specified liquid", type: "numerical", syllabus: "in", repeats: ["2016-17-Q2a", "2020-21-Q5d"],
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
        sub: "Two drums in series, liquid from drum 1 reflashed: work backwards", type: "numerical", syllabus: "in", repeats: ["2022-23-Q5b"],
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

![How to read the DePriester chart: p = 202.6 kPa and T = 25 °C joined by a straight line give K = 71.6 (methane), 4.11 (propane), 0.126 (n-hexane)](fig/practice-flash-P6-read.svg)

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
        sub: "Ethanol–water flash from a hot feed: simultaneous solution on the H–x chart", type: "numerical", syllabus: "in", repeats: ["2012-13-Q6b"],
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

![How to find the tie line through the feed point on the H–x chart: F (0.30, 189.3) → auxiliary line → x = 0.152, y = 0.601](fig/practice-flash-P7-read.svg)

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

![How to read the DePriester chart: p = 1000 kPa and T = 20 °C give K = 2.805 (ethane), 0.349 (isobutane), 0.235 (n-butane); at the printed 100 kPa all K > 1](fig/practice-flash-P8-read.svg)

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

![How to read the DePriester chart: p = 200 kPa and the converged T = 62.8 °C give K = 8.51 (propane), 3.32 (n-butane), 0.473 (n-hexane)](fig/practice-flash-P9-read.svg)

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

![How to read the DePriester chart: p = 300 kPa and the converged T = 55.4 °C give K = 2.49 (isobutane), 0.676 (n-pentane), 0.269 (n-hexane)](fig/practice-flash-P10-read.svg)

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

![How to read the DePriester chart: p = 250 kPa and the converged T = 56.3 °C give K = 6.15 (propane), 0.813 (n-pentane), 0.048 (n-octane)](fig/practice-flash-P11-read.svg)

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

    { id: "practice-flash-P12", q: 12, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-flash-P12", label: "", marks: "", topic: "flash",
        sub: "Three-still cascade for ethylene glycol–water at 228 mmHg (Raoult's law)", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 2.F2 (answer listed in the back of the book; treated as starred)`,
        text: String.raw`Ethylene glycol–water is flash distilled in a cascade of three stills connected as shown; all operate at 228 mmHg. The feed is 40 mol% water (water is the more volatile component). One-third of the feed to still 1 is vaporized, two-thirds of the feed to still 2 is vaporized and one-half of the feed to still 3 is vaporized. Find the compositions of $L_3$ and $V_3$.

![Cascade of three flash stills: L1 feeds still 2, V2 feeds still 3](fig/practice-flash-P12.svg)`,
        solution: String.raw`**Given:** $p = 228$ mmHg in all stills; $z = 0.40$ water; $(V/F)_1 = 1/3$, $(V/F)_2 = 2/3$, $(V/F)_3 = 1/2$. From the figure: $L_1$ is the feed to still 2 and $V_2$ is the feed to still 3. Basis $F = 100$ kmol/h (the compositions do not depend on it).

**Assumptions:** each still is an equilibrium stage; the liquid is an ideal solution (Raoult's law), as asked; Antoine vapor pressures, $\log_{10}p^{sat}(\mathrm{mmHg}) = A - B/(T + C)$, $T$ in °C:
- water: $A = 8.07131$, $B = 1730.63$, $C = 233.426$ (1–100 °C) and $A = 8.14019$, $B = 1810.94$, $C = 244.485$ (100–374 °C), the standard constants tabulated in Perry's and Lange's handbooks;
- ethylene glycol: $A = 8.09083$, $B = 2088.936$, $C = 203.454$ (Lange's Handbook, Dean, as tabulated by Yaws). Check: it gives 756 mmHg at the normal boiling point 197.3 °C and 16 mmHg at 100 °C.

At 228 mmHg pure water boils at 69.5 °C and pure glycol at 160.9 °C.

1. **Binary flash with Raoult's law.** At a trial $T$ the tie line is
$$x = \frac{p - p_G^{sat}}{p_W^{sat} - p_G^{sat}}, \qquad y = \frac{x\,p_W^{sat}}{p}$$
and $T$ is adjusted until the lever rule $V/F = (z - x)/(y - x)$ is satisfied (the drum temperature lies between the feed's bubble and dew points).

2. **Still 1** ($z = 0.40$, $V/F = 1/3$; feed bubble point 91.4 °C, dew point 148.1 °C):
$$T_1 = 114.5\ ^\circ\mathrm{C}, \quad x_1 = 0.161, \quad y_1 = 0.878, \quad \alpha = p_W^{sat}/p_G^{sat} = 37.6$$
$V_1 = 33.3$, $L_1 = 66.7$ kmol/h.

3. **Still 2** (feed $L_1$: $z_2 = 0.161$, $V/F = 2/3$):
$$T_2 = 154.1\ ^\circ\mathrm{C}, \quad x_2 = 0.0136, \quad y_2 = 0.235, \quad \alpha = 22.3$$
$V_2 = 44.4$, $L_2 = 22.2$ kmol/h.

4. **Still 3** (feed $V_2$, partly condensed: $z_3 = 0.235$, $V/F = 1/2$):
$$T_3 = 146.5\ ^\circ\mathrm{C}, \quad x_3 = 0.031, \quad y_3 = 0.438, \quad \alpha = 24.4$$
$V_3 = L_3 = 22.2$ kmol/h.

5. **Check** (water over the whole cascade): $33.3(0.878) + 22.2(0.0136) + 22.2(0.438) + 22.2(0.031) = 29.3 + 0.3 + 9.7 + 0.7 = 40.0 = Fz$ ✓

![Water–ethylene glycol y–x diagram at 228 mmHg (Raoult's law) with the operating lines of the three stills](fig/practice-flash-P12-sol.svg)

> Book answer (2.F2): $x_3 = 0.22$, $y_3 = 0.461$. The ideal-solution model gives $y_3 = 0.438$, close to the book, but $x_3 = 0.031$, far from 0.22. The book's pair implies a local relative volatility $\alpha = (0.461/0.539)/(0.22/0.78) = 3.0$, while the pure-component vapor-pressure ratio at 120–150 °C is about 20–40. Water–glycol deviates somewhat from Raoult's law (water is held more strongly by glycol, $\gamma_W < 1$), which lowers $\alpha$ and raises the liquid water content. A drop to $\alpha \approx 3$, though, would need much more non-ideality than this system is usually reported to have. The book answer was most likely obtained from a different (experimental) data set, or it carries an error. With the data stated here, report $x_3 \approx 0.03$ and $y_3 \approx 0.44$, and note that measured VLE data should be used for design.`,
        answer: String.raw`Raoult's law: $x_3 = 0.031$, $y_3 = 0.438$ (stills at 114.5, 154.1 and 146.5 °C). Book: $x_3 = 0.22$, $y_3 = 0.461$; $y_3$ agrees, but $x_3$ does not, which points to non-ideal or different VLE data behind the book's answer.` } ] },

    { id: "practice-flash-P13", q: 13, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-flash-P13a", label: "(a)", marks: "10", topic: "flash",
          sub: "Flash distillation system: sketch and role of each unit", type: "sketch", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 03 (flash system, process flow, drum components)`,
          text: String.raw`Draw a labelled sketch of a flash distillation system and explain the job of the pump, heater, valve, drum internals and demister. Why is the drum usually operated adiabatically, and where does the energy for vaporization come from?`,
          solution: String.raw`![Flash distillation system: pump, heater, valve and flash drum with demister](fig/practice-flash-P13-sol.svg)

1. **Pump:** raises the feed pressure so that the feed stays liquid when it is heated.
2. **Heater:** heats the pressurized liquid to $T_F$. This stored sensible heat is the energy that will vaporize part of the feed.
3. **Throttle valve:** the pressure drops suddenly to $p_{drum}$. The expansion is isenthalpic ($h$ constant), so the liquid is now above its bubble point and part of it flashes to vapor; the mixture cools to $T_{drum}$.
4. **Flash drum:** one equilibrium stage. An inlet distributor spreads the two-phase feed, the vapor disengagement zone lets drops settle, the liquid holdup zone gives surge volume.
5. **Demister pad:** a mesh near the top that catches entrained droplets so the vapor leaves dry.
6. Vapor (more volatile components) leaves at the top, liquid at the bottom, both at $T_{drum}$ and $p_{drum}$.

**Adiabatic operation:** the drum is insulated and $Q_{flash} = 0$. The latent heat for the vapor comes from the sensible heat of the hot feed: $Fh_F = Lh_L + VH_V$, so the products are colder than the feed ($T_{drum} < T_F$).`,
          answer: String.raw`Pump → heater → valve (isenthalpic, partial vaporization) → drum with distributor, disengagement space, demister and liquid holdup; energy for vaporization is the feed's sensible heat, so $T_{drum} < T_F$.` },
        { id: "practice-flash-P13b", label: "(b)", marks: "12", topic: "flash",
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
        { id: "practice-flash-P13c", label: "(c)", marks: "13", topic: "flash",
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

    { id: "practice-flash-P14", q: 14, section: "F", compulsory: false,
      stem: String.raw`500 kmol/h of an ethanol–water feed with 25 mol% ethanol is flashed at 1 atm. Use the ethanol–water VLE data at 1 atm (Wankat Table 2-1):

| $x$ | 0 | 0.019 | 0.0721 | 0.0966 | 0.1238 | 0.1661 | 0.2337 | 0.2608 | 0.3273 | 0.3965 | 0.5198 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $y$ | 0 | 0.170 | 0.3891 | 0.4375 | 0.4704 | 0.5089 | 0.5445 | 0.5580 | 0.5826 | 0.6122 | 0.6599 |
| $T$, °C | 100 | 95.5 | 89.0 | 86.7 | 85.3 | 84.1 | 82.7 | 82.3 | 81.5 | 80.7 | 79.7 |`,
      parts: [
        { id: "practice-flash-P14a", label: "(a)", marks: "8", topic: "flash",
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
        { id: "practice-flash-P14b", label: "(b)", marks: "15", topic: "flash",
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

![Ethanol–water y–x diagram for z = 0.25 with the limiting lines and the operating lines for V/F = 0.3 and for x = 0.05](fig/practice-flash-P14-sol.svg)`,
          answer: String.raw`$y = -2.333x + 0.833$; $x = 0.146$, $y = 0.493$, $T \approx 84.6$ °C; V = 150, L = 350 kmol/h.` },
        { id: "practice-flash-P14c", label: "(c)", marks: "12", topic: "flash",
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

    { id: "practice-flash-P15", q: 15, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-flash-P15a", label: "(a)", marks: "10", topic: "flash",
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
        { id: "practice-flash-P15b", label: "(b)", marks: "25", topic: "flash",
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

    { id: "practice-flash-P16", q: 16, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-flash-P16a", label: "(a)", marks: "8", topic: "flash",
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
        { id: "practice-flash-P16b", label: "(b)", marks: "27", topic: "flash",
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

![Vertical flash drum: diameter from the permissible vapor velocity, height from the hV, hf and hL rules](fig/practice-flash-P16-sol.svg)

**Exam tip:** the diameter is set by the vapor, not the liquid. Keep $u_{perm}$, $\rho_V$ and $A_c$ in one unit system; $K_{drum}$ from the correlation is in ft/s.`,
          answer: String.raw`(i) $x = 0.387$, $y = 0.613$, V = L = 400 kmol/h. (ii) $F_{lv} = 0.061$, $K_{drum} = 0.446$ ft/s, $u_{perm} = 2.31$ m/s, $A_c = 1.45$ m², D ≈ 1.4 m, $h_{total} \approx 5.6$ m.` } ] },

    { id: "practice-flash-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-flash-P17a", label: "(a)", marks: "10", topic: "flash",
          sub: "Rachford–Rice: f′(ψ) ≤ 0, bracketing with f(0) and f(1), Newton–Raphson algorithm", type: "derivation", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, Flash Distillation (Jan 2026), "Rachford-Rice Equation", "Solving Rachford-Rice Equation" and "Algorithm: Isothermal Flash via Rachford-Rice"`,
          text: String.raw`For an isothermal multicomponent flash, the Rachford–Rice function is
$$f(\psi) = \sum_{i=1}^{n}\frac{z_i(K_i - 1)}{1 + (K_i - 1)\psi}$$
$$\psi = \frac{V}{F}$$
(i) Differentiate $f(\psi)$ and show that $f'(\psi) \le 0$. What does this tell you about the number of roots?

(ii) Show that $f(0) = \sum z_iK_i - 1$ and $f(1) = 1 - \sum z_i/K_i$. Why must $f(0) > 0$ and $f(1) < 0$ for a two-phase flash, and what does it mean if either condition fails?

(iii) List the steps of the isothermal flash algorithm using the Newton–Raphson method.`,
          solution: String.raw`> The derivation of $f(\psi)$ itself (from $Fz_i = Lx_i + Vy_i$, $y_i = K_ix_i$ and $\sum y_i - \sum x_i = 0$) is in P15a; this part covers the properties the slides use to solve it.

1. **Derivative:** only the denominator depends on $\psi$, and $\dfrac{d}{d\psi}[1 + (K_i - 1)\psi]^{-1} = -(K_i - 1)[1 + (K_i - 1)\psi]^{-2}$, so
$$f'(\psi) = -\sum_{i=1}^{n}\frac{z_i(K_i - 1)^2}{[1 + (K_i - 1)\psi]^2}$$
Every term has $z_i \ge 0$ times a square divided by a square, so the sum is $\ge 0$ and
$$f'(\psi) \le 0 \quad \text{for all } \psi$$
(equal to zero only if every $K_i = 1$, when no separation is possible).

2. **One root at most:** for $0 \le \psi \le 1$ every denominator $1 + (K_i - 1)\psi = (1 - \psi) + K_i\psi$ is positive, so $f$ is continuous there. A continuous function that only decreases can cross zero at most once, so there is **at most one** physical root. The poles of $f$, at $\psi = 1/(1 - K_i)$, are negative for $K_i > 1$ and greater than 1 for $K_i < 1$: they always lie outside $[0, 1]$.

3. **Bracketing values:** put $\psi = 0$ and $\psi = 1$ in $f$:
$$f(0) = \sum z_i(K_i - 1) = \sum z_iK_i - \sum z_i = \sum z_iK_i - 1$$
$$f(1) = \sum \frac{z_i(K_i - 1)}{K_i} = \sum z_i - \sum\frac{z_i}{K_i} = 1 - \sum\frac{z_i}{K_i}$$
If $f(0) > 0$ and $f(1) < 0$, the decreasing function must cross zero once between them: exactly one root $0 < \psi < 1$.

4. **Physical meaning of the two conditions:**

| condition | equivalent | meaning at $T_{drum}$, $p_{drum}$ |
|---|---|---|
| $f(0) > 0$ | $\sum z_iK_i > 1$ | above the feed's bubble point (at the bubble point $\sum z_iK_i = 1$) |
| $f(1) < 0$ | $\sum z_i/K_i > 1$ | below the feed's dew point (at the dew point $\sum z_i/K_i = 1$) |

So the drum feed (after the valve) must lie **between its bubble point and its dew point**.

5. **When a condition fails:**
- $f(0) \le 0$ ($\sum z_iK_i \le 1$): the feed is at or below its bubble point, a subcooled (or saturated) liquid. No vapor forms: $\psi = 0$, $L = F$, $x_i = z_i$.
- $f(1) \ge 0$ ($\sum z_i/K_i \le 1$): the feed is at or above its dew point, a superheated (or saturated) vapor: $\psi = 1$, $V = F$, $y_i = z_i$.
- Both cannot fail together, because $f$ decreases, so $f(0) > f(1)$ always. A root found outside $[0, 1]$ (a "negative flash") has no physical meaning; change $T_{drum}$ or $p_{drum}$ instead.

6. **Algorithm (isothermal flash, given $F$, $z_i$, $T_{drum}$, $p_{drum}$):**
- Step 1: get $K_i(T_{drum}, p_{drum})$ (DePriester chart, Eq. 2-30, or $K_i = p_i^{sat}/p$ for ideal systems).
- Step 2: feasibility check, $f(0) > 0$ and $f(1) < 0$; otherwise the feed is all liquid or all vapor.
- Step 3: Newton–Raphson. Write $f$ and $f'$; pick $\psi^{(0)}$ (0.5 is a safe start); iterate
$$\psi^{(n+1)} = \psi^{(n)} - \frac{f(\psi^{(n)})}{f'(\psi^{(n)})}$$
until $\lvert f(\psi^{(n+1)})\rvert < \varepsilon$ or $\lvert \psi^{(n+1)} - \psi^{(n)}\rvert < \varepsilon$. Keep the root bracketed: if a step lands outside $[0, 1]$, bisect instead. (Bisection or regula falsi also work; a calculator SOLVE is the exam shortcut.)
- Step 4: back-calculate $x_i = z_i/[1 + (K_i - 1)\psi]$ and $y_i = K_ix_i$.
- Step 5: verify $\sum x_i \approx 1$ and $\sum y_i \approx 1$.
- Step 6: flows $V = \psi F$, $L = (1 - \psi)F$.

**Exam tip:** state both feasibility numbers before iterating; it costs one line and shows the examiner that a two-phase answer exists.`,
          answer: String.raw`$f'(\psi) = -\sum z_i(K_i-1)^2/[1+(K_i-1)\psi]^2 \le 0$, so f decreases and has at most one root; $f(0) = \sum z_iK_i - 1 > 0$ (above bubble point) and $f(1) = 1 - \sum z_i/K_i < 0$ (below dew point) bracket it. If $f(0) \le 0$ the feed stays liquid (ψ = 0); if $f(1) \ge 0$ it is all vapor (ψ = 1).` },
        { id: "practice-flash-P17b", label: "(b)", marks: "20", topic: "flash",
          sub: "Isothermal flash of propane, n-butane, n-pentane, n-hexane at 50 °C and 200 kPa (Newton–Raphson)", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, Flash Distillation (Jan 2026), "Problem: Multicomponent Flash Distillation" and its solution slide; same as Wankat 3e, Example 2-2`,
          text: String.raw`A flash chamber operating at 50 °C and 200 kPa is separating 1000 kmol/h of a feed that is 30 mol% propane, 10 mol% n-butane, 15 mol% n-pentane and 45 mol% n-hexane. Find the product compositions and flow rates. From the DePriester chart: $K_{C3} = 7.00$, $K_{C4} = 2.40$, $K_{C5} = 0.80$, $K_{C6} = 0.30$.`,
          solution: String.raw`**Given:** $F = 1000$ kmol/h; $z$ = 0.30 / 0.10 / 0.15 / 0.45; $K$ = 7.00 / 2.40 / 0.80 / 0.30 (propane / n-butane / n-pentane / n-hexane) at 50 °C, 200 kPa.

**Find:** $\psi = V/F$, $x_i$, $y_i$, $V$, $L$.

**Assumptions:** the drum is one equilibrium stage; K values depend only on $T$ and $p$ (DePriester). $T_{drum}$ and $p_{drum}$ are both given, so this is a sequential (isothermal) flash: no energy balance is needed.

1. **Feasibility check:**
$$f(0) = \sum z_iK_i - 1 = (2.100 + 0.240 + 0.120 + 0.135) - 1 = 1.595 > 0$$
$$f(1) = 1 - \sum\frac{z_i}{K_i} = 1 - (0.0429 + 0.0417 + 0.1875 + 1.5000) = -0.772 < 0$$
The feed is between its bubble and dew points, so it splits into two phases ✓

2. **Function and derivative** with the numbers in:
$$f(\psi) = \frac{0.30(6.00)}{1 + 6.00\psi} + \frac{0.10(1.40)}{1 + 1.40\psi} + \frac{0.15(-0.20)}{1 - 0.20\psi} + \frac{0.45(-0.70)}{1 - 0.70\psi}$$
$$-f'(\psi) = \frac{0.30(6.00)^2}{(1 + 6.00\psi)^2} + \frac{0.10(1.40)^2}{(1 + 1.40\psi)^2}$$
$$+ \frac{0.15(0.20)^2}{(1 - 0.20\psi)^2} + \frac{0.45(0.70)^2}{(1 - 0.70\psi)^2}$$

3. **Newton–Raphson iterations,** $\psi_{n+1} = \psi_n - f/f'$, starting from a deliberately poor guess $\psi_0 = 0.1$ (as in the book):

| $n$ | $\psi_n$ | $f(\psi_n)$ | $f'(\psi_n)$ | $\psi_{n+1}$ |
|---|---|---|---|---|
| 0 | 0.1000 | 0.8785 | −4.631 | 0.2897 |
| 1 | 0.2897 | 0.3300 | −1.893 | 0.4640 |
| 2 | 0.4640 | 0.0610 | −1.317 | 0.5103 |
| 3 | 0.5103 | 0.0014 | −1.262 | 0.5114 |
| 4 | 0.5114 | 0.0000 | −1.261 | 0.5114 |

Converged: $\psi = V/F = 0.5114$. (Starting from $\psi_0 = 0.5$ takes only two steps: 0.5113, 0.5114.) The convergence is monotonic because $f$ is decreasing and nearly linear.

![Rachford–Rice function for the slide problem: f(0) = 1.595, f(1) = −0.772, Newton tangents from ψ = 0.1 reaching the root ψ = 0.5114](fig/practice-flash-P17-sol.svg)

4. **Phase compositions,** $x_i = z_i/[1 + (K_i - 1)\psi]$, $y_i = K_ix_i$:

| component | $z_i$ | $K_i$ | $1 + (K_i - 1)\psi$ | $x_i$ | $y_i$ |
|---|---|---|---|---|---|
| propane | 0.30 | 7.00 | 4.068 | 0.0737 | 0.5162 |
| n-butane | 0.10 | 2.40 | 1.716 | 0.0583 | 0.1399 |
| n-pentane | 0.15 | 0.80 | 0.898 | 0.1671 | 0.1337 |
| n-hexane | 0.45 | 0.30 | 0.642 | 0.7009 | 0.2103 |
| sum | 1.00 | | | 1.0000 | 1.0000 |

5. **Verify:** $\sum x_i = 1.0000$ and $\sum y_i = 1.0000$ ✓

6. **Flow rates:**
$$V = \psi F = 0.5114(1000) = 511.4\ \mathrm{kmol/h}$$
$$L = (1 - \psi)F = 488.6\ \mathrm{kmol/h}$$
**Check (propane):** $511.4(0.5162) + 488.6(0.0737) = 264.0 + 36.0 = 300.0 = Fz_{C3}$ ✓

> Book answer (Wankat Example 2-2): $V/F = 0.51$, $x_{C3} = 0.0739$, $y_{C3} = 0.5172$, $V = 510$, $L = 490$ kmol/h ✓. The book stops at $f(0.51) = 0.0017$, "within the accuracy of the DePriester charts"; one more step gives 0.5114.

**Exam tip:** the light components (K > 1) concentrate in the vapor and the heavy ones (K < 1) in the liquid; a quick look at $y_i/x_i = K_i$ in your table catches arithmetic slips.`,
          answer: String.raw`$V/F = 0.511$ (book 0.51); V = 511.4, L = 488.6 kmol/h; $x$ = 0.074 / 0.058 / 0.167 / 0.701, $y$ = 0.516 / 0.140 / 0.134 / 0.210 (C₃ / nC₄ / nC₅ / nC₆).` } ] },

    { id: "practice-flash-P18", q: 18, section: "S", compulsory: false,
      stem: String.raw`We have a liquid feed that is 20 mol% methane, 45 mol% n-pentane and 35 mol% n-hexane. Feed rate is 1500 kmol/h, feed temperature is 42 °C, and pressure is 100.0 psia. The flash drum operates at 30 psia and is adiabatic. Find: $T_{drum}$, V/F, $x_i$, $y_i$, L, V.

Data (Wankat Table 2-5, shown on the slide; source Himmelblau):

| component | $\lambda$, kcal/mol | normal boiling point, °C | $C_{P,L}$, cal/(mol·°C) |
|---|---|---|---|
| methane | 1.955 | −161.48 | 11.0 (est.) |
| n-pentane | 6.160 | 36.08 | 39.66 |
| n-hexane | 6.896 | 68.75 | 45.58 |

Vapor heat capacities in cal/(mol·°C), $T$ in °C:
$C_{PV,1} = 8.20 + 0.01307T + 8.75\times10^{-7}T^2 - 2.63\times10^{-9}T^3$;
$C_{PV,2} = 27.45 + 0.08148T - 4.538\times10^{-5}T^2 + 10.1\times10^{-9}T^3$;
$C_{PV,3} = 32.85 + 0.09763T - 5.716\times10^{-5}T^2 + 13.78\times10^{-9}T^3$.`,
      parts: [
        { id: "practice-flash-P18a", label: "(a)", marks: "15", topic: "flash",
          sub: "Adiabatic multicomponent flash: algorithm and first trial at 40 °C (methane, n-pentane, n-hexane)", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, Flash Distillation (Jan 2026), "System Where Tdrum is Unknown" and "Problem: Simultaneous Solution for Multicomponent Flash Distillation" (Steps 1–7); Wankat 3e, Example 2-3`,
          text: String.raw`Explain why $T_{drum}$ is unknown and outline the algorithm for this adiabatic flash. Then carry out the first trial with $T_{drum} = 40$ °C, using the DePriester values read on the slide ($K_{methane} = 80.00$, $K_{pentane} = 0.67$, $K_{hexane} = 0.20$ at 40 °C and 30 psia): find $\psi$, $x_i$, $y_i$, V and L, evaluate the energy balance and decide whether the next guess for $T_{drum}$ should be higher or lower.`,
          solution: String.raw`**Given:** $F = 1500$ kmol/h; $z$ = 0.20 / 0.45 / 0.35 (methane / n-pentane / n-hexane); $T_F = 42$ °C at 100 psia (liquid); $p_{drum} = 30$ psia; $Q_{flash} = 0$.

**Find:** the algorithm, and the first trial at $T_{drum} = 40$ °C.

**Assumptions:** one equilibrium stage; ideal solutions (no heats of mixing); K values from the DePriester chart; the valve is isenthalpic, so the drum energy balance uses $h_F$ at 42 °C.

1. **Why $T_{drum}$ is unknown:** the specified variables are $F$, $z_i$, $T_F$, $p_F$, $p_{drum}$ and $Q_{flash} = 0$. The feed temperature, not the drum temperature, is fixed, so the energy balance $Fh_F = Lh_L + VH_V$ must be solved together with the mass balances and equilibrium. The K values need $T_{drum}$, and $T_{drum}$ needs V/F from the energy balance: a double trial and error (simultaneous solution).

2. **Algorithm (adiabatic flash via Rachford–Rice):**
- guess $T_{drum}$;
- read $K_i(T_{drum}, p_{drum})$;
- solve the Rachford–Rice equation for $\psi$ (inner loop, Newton);
- find $x_i$ and $y_i$;
- compute $h_L(T_{drum})$ and $H_V(T_{drum})$;
- check the energy residual $g(T) = Fh_F(T_F) - Lh_L(T) - VH_V(T)$; if it is not close to zero, update $T$ by Newton, $T^{(n+1)} = T^{(n)} - g/g'$, and return to the K values.
For a wide-boiling feed like this one (methane boils at −161 °C, hexane at 69 °C) a change in $T$ hardly changes V/F, so V/F is converged first for each $T$ and the energy balance is used last (Wankat Fig. 2-13).

3. **Step 1–2, K values at 40 °C, 30 psia:** $K$ = 80.00 / 0.67 / 0.20 (slide's chart reading). The McWilliams fit of the chart (Wankat Eq. 2-30, Table 2-3) gives 77.1 / 0.606 / 0.221, the same within chart-reading accuracy.

4. **Step 3, Rachford–Rice:**
$$\frac{0.20(80 - 1)}{1 + 79\psi} + \frac{0.45(0.67 - 1)}{1 - 0.33\psi} + \frac{0.35(0.20 - 1)}{1 - 0.80\psi} = 0$$
Feasibility: $\sum z_iK_i - 1 = 15.37 > 0$, $1 - \sum z_i/K_i = -1.42 < 0$ ✓. Newton from $\psi = 0.25$: 0.3255, 0.3464, 0.3474, so
$$\psi = 0.347 \approx 0.35$$

5. **Step 4, compositions:**

| | $z_i$ | $K_i$ | $x_i$ | $y_i$ |
|---|---|---|---|---|
| methane | 0.20 | 80.00 | 0.0070 | 0.5625 |
| n-pentane | 0.45 | 0.67 | 0.5083 | 0.3405 |
| n-hexane | 0.35 | 0.20 | 0.4847 | 0.0969 |

(The slide rounds these to 0.007 / 0.509 / 0.484 and 0.560 / 0.340 / 0.100 ✓)

6. **Step 5, flows:** $V = 0.347(1500) = 521$ kmol/h, $L = 979$ kmol/h (the slide's 525 and 975 use $\psi = 0.35$).

7. **Step 6, energy balance (slide's quick version):** take saturated liquid at 40 °C as the reference, so $h_L(40) = 0$ and $H_V(40) \approx \sum y_i\lambda_i$:
$$H_V \approx 0.5625(8180) + 0.3405(25{,}773) + 0.0969(28{,}853) = 16{,}200\ \mathrm{kJ/kmol}$$
($\lambda$ = 1.955, 6.160, 6.896 kcal/mol × 4184 = 8180, 25,773, 28,853 kJ/kmol; the slide quotes ≈ 16,420 with its rounded $y_i$.) The feed is only 2 °C above the reference:
$$C_{P,mix} = \sum z_iC_{P,L,i} = 0.20(11.0) + 0.45(39.66) + 0.35(45.58) = 36.0\ \mathrm{cal/(mol\,^\circ C)} = 150.6\ \mathrm{kJ/(kmol\,^\circ C)}$$
$$h_F = C_{P,mix}(T_F - 40) = 150.6(42 - 40) = 301\ \mathrm{kJ/kmol}$$
$$g = Fh_F - Lh_L - VH_V = 1500(301) - 979(0) - 521(16{,}200) = 0.45\times10^6 - 8.44\times10^6 \approx -8.0\times10^6\ \mathrm{kJ/h}$$

> The slide prints $h_F \approx 807{,}500$ kJ/kmol and a residual of $+1.20\times10^9$ kJ/h. These appear to be typos: per kmol, 2 °C of sensible heat is only about 300 kJ, and even the whole latent heat of the mixture is only about 16,000 kJ/kmol. The residual is of order $10^6$–$10^7$ kJ/h and it is **negative**.

8. **Same trial with a consistent enthalpy basis** (pure liquid at 0 °C as reference, used for the full solution in (b)): $h_F = 6326$, $h_L(40) = 7084$, $H_V(40) = 18{,}548$ kJ/kmol, so
$$g(40) = 1500(6326) - 979(7084) - 521(18{,}548) = -7.1\times10^6\ \mathrm{kJ/h}$$
Both ways $g < 0$: the products would need more energy than the feed brings in.

9. **Step 7, next guess:** $g < 0$ means too much vapor has been formed, so the drum must be **colder**. Newton with $g' = -\left[V\sum y_iC_{PV,i} + L\sum x_iC_{P,L,i}\right] = -2.15\times10^5$ kJ/(h·°C):
$$T^{(2)} = 40 - \frac{-7.11\times10^6}{-2.15\times10^5} = 40 - 33.1 = 6.9\ ^\circ\mathrm{C}$$
This overshoots (the answer is near 24 °C, see (b)); a damped step $T^{(2)} = 40 - 0.5(33.1) = 23.4$ °C (Wankat Eq. 2-57, $d = 0.5$) lands almost on the answer.

**Exam tip:** the sign of $g$ is the decision: $g < 0$ (products hold more enthalpy than the feed) means lower $T_{drum}$; $g > 0$ means raise it.`,
          answer: String.raw`Trial at 40 °C: ψ ≈ 0.35 (0.347), $x$ = 0.007 / 0.508 / 0.485, $y$ = 0.563 / 0.341 / 0.097, V ≈ 521, L ≈ 979 kmol/h; $h_F \approx 301$ kJ/kmol relative to 40 °C liquid (not 807,500), residual ≈ −8×10⁶ kJ/h (not +1.2×10⁹) → $T_{drum}$ must be lower.` },
        { id: "practice-flash-P18b", label: "(b)", marks: "20", topic: "flash",
          sub: "Adiabatic flash converged: drum at ≈ 23.9 °C, V/F ≈ 0.255 (energy-balance Newton loop)", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, Flash Distillation (Jan 2026), "Problem: Simultaneous Solution for Multicomponent Flash Distillation" (iteration table); Wankat 3e, Example 2-3 and Table 2-6`,
          text: String.raw`Continue the calculation to convergence. Report $T_{drum}$, V/F, $x_i$, $y_i$, L and V, and compare with the slide's iteration table, which starts at $T_{drum} = 15$ °C and ends at $T_{drum} = 23.892$ °C, V/F = 0.2549.`,
          solution: String.raw`**Given:** as in (a). **Find:** converged $T_{drum}$, $\psi$, $x_i$, $y_i$, $L$, $V$.

**Assumptions:** ideal solutions; K values from the McWilliams fit of the DePriester chart (Wankat Eq. 2-30), so the iteration can be done by computer exactly as in the book:
$$\ln K = \frac{a_{T1}}{T^2} + \frac{a_{T2}}{T} + a_{T6} + a_{p1}\ln p + \frac{a_{p2}}{p^2} + \frac{a_{p3}}{p}$$
with $T$ in °R and $p$ in psia.

| | $a_{T1}$ | $a_{T2}$ | $a_{T6}$ | $a_{p1}$ | $a_{p2}$ | $a_{p3}$ |
|---|---|---|---|---|---|---|
| methane | −292,860 | 0 | 8.2445 | −0.8951 | 59.8465 | 0 |
| n-pentane | −1,524,891 | 0 | 7.33129 | −0.89143 | 0 | 0 |
| n-hexane | −1,778,901 | 0 | 6.96783 | −0.84634 | 0 | 0 |

1. **Enthalpy basis:** pure liquid at 0 °C ($T$ in °C), data of the stem:
$$h_{L,i}(T) = C_{P,L,i}\,T$$
$$H_{V,i}(T) = C_{P,L,i}T_{b,i} + \lambda_i + \int_{T_{b,i}}^{T} C_{PV,i}\,dT$$
(heat the liquid to its normal boiling point, vaporize, heat the vapor). Mixtures: $h_L = \sum x_ih_{L,i}$, $H_V = \sum y_iH_{V,i}$. Feed: $h_F = \sum z_iC_{P,L,i}(42) = 36.0(42) = 1512$ cal/mol = 6326 kJ/kmol.

2. **Energy residual and Newton step** (slide Step 7, Wankat Eqs. 2-51 to 2-56):
$$g(T) = Fh_F - Lh_L(T) - VH_V(T)$$
$$g'(T) \approx -\left[V\sum y_iC_{PV,i} + L\sum x_iC_{P,L,i}\right]$$
$$T^{(n+1)} = T^{(n)} - \frac{g(T^{(n)})}{g'(T^{(n)})}$$
For every trial $T$, the Rachford–Rice equation is first converged for $\psi$ (inner loop), then $g$ is evaluated.

3. **Iterations from $T = 15$ °C** (same start as the slide), compared with the slide's table:

| trial | $T$ guess, °C | $\psi$ | $g$, $10^6$ kJ/h | calc. $T$, °C | slide $\psi$ | slide calc. $T$ |
|---|---|---|---|---|---|---|
| 1 | 15.000 | 0.2303 | +2.904 | 28.195 | 0.2361 | 27.903 |
| 2 | 28.195 | 0.2696 | −1.524 | 21.209 | 0.2677 | 21.385 |
| 3 | 21.209 | 0.2458 | +0.935 | 25.474 | 0.2496 | 25.149 |
| 4 | 25.474 | 0.2594 | −0.529 | 23.056 | 0.2567 | 23.277 |
| 5 | 23.056 | 0.2514 | +0.314 | 24.491 | 0.2551 | 24.128 |
| 6 | 24.491 | 0.2560 | −0.182 | 23.661 | 0.2551 | 23.786 |
| 7 | 23.661 | 0.2533 | +0.107 | 24.148 | 0.2550 | 23.930 |
| 8 | 24.148 | 0.2549 | −0.062 | 23.865 | 0.2550 | 23.875 |
| 9 | 23.865 | 0.2540 | +0.036 | 24.031 | 0.2549 | 23.900 |
| 10 | 24.031 | 0.2545 | −0.021 | 23.934 | 0.2549 | 23.892 |

Solving $g(T) = 0$ directly: $T_{drum} = 23.97$ °C, $\psi = 0.2543$.

4. **Why the temperature oscillates:** the Newton slope holds V and L fixed, but in reality a warmer drum also vaporizes more liquid, which absorbs latent heat. At the answer the true slope is $dE/dT = 55.3$ cal/(mol·°C) per mol of feed, the frozen-flow slope only 34.9, so each step is about 1.6 times too long and the error changes sign (factor ≈ −0.6) every trial. Damping, $T^{(n+1)} = T^{(n)} - d\,g/g'$ with $d = 0.5$ (Wankat Eq. 2-57), converges smoothly: 15 → 21.60 → 23.44 → 23.86 → 23.95 → 23.97 °C.

![Energy residual g versus trial drum temperature: g = 0 at 23.97 °C; the Newton steps from 15 °C overshoot alternately because the slope is taken with V and L frozen](fig/practice-flash-P18-sol.svg)

5. **Converged products** at $T_{drum} = 23.97$ °C, $p = 30$ psia ($K$ = 69.60 / 0.3563 / 0.1188):

| | $z_i$ | $K_i$ | $x_i$ | $y_i$ |
|---|---|---|---|---|
| methane | 0.20 | 69.60 | 0.0108 | 0.7547 |
| n-pentane | 0.45 | 0.3563 | 0.5381 | 0.1917 |
| n-hexane | 0.35 | 0.1188 | 0.4511 | 0.0536 |
| sum | 1.00 | | 1.0000 | 1.0000 |

6. **Flows:** $V = 0.2543(1500) = 381.5$ kmol/h, $L = 1118.5$ kmol/h.

7. **Energy check:** $h_L = 4214$ kJ/kmol, $H_V = 12{,}520$ kJ/kmol:
$$\psi H_V + (1 - \psi)h_L = 0.2543(12{,}520) + 0.7457(4214)$$
$$= 3184 + 3142 = 6326\ \mathrm{kJ/kmol} = h_F\ ✓$$
The feed cools from 42 °C to about 24 °C, and that sensible heat vaporizes a quarter of it, mostly the methane.

> Comparison with the slide (and Wankat Table 2-6): this calculation gives $T_{drum} = 23.97$ °C and V/F = 0.2543, the slide 23.89 °C and 0.2549; Wankat's compositions are $x$ = 0.0108 / 0.5381 / 0.4513, $y$ = 0.7531 / 0.1925 / 0.0539, V = 382.3, L = 1117.7 kmol/h ✓. The tiny differences come from the K-value fit and rounding. The slide's 42 °C feed is the value its table was computed with: Wankat's printed text says 45 °C, but 45 °C gives $T_{drum} = 25.9$ °C and V/F = 0.261, which does not match the table. (Wankat also reports an Aspen Plus/Peng–Robinson check: $T_{drum} = 28.0$ °C, V = 392.2 kmol/h, close except for the temperature.)

**Exam tip:** in an exam, two or three hand trials are enough: get $g$ at two temperatures with opposite signs and interpolate for $g = 0$, then do one final Rachford–Rice at that temperature.`,
          answer: String.raw`$T_{drum} \approx 23.9$ °C (23.97 here; slide 23.89), $V/F \approx 0.255$ (0.2543; slide 0.2549); $x$ = 0.011 / 0.538 / 0.451, $y$ = 0.755 / 0.192 / 0.054 (C₁ / nC₅ / nC₆); V ≈ 382, L ≈ 1118 kmol/h.` } ] },

    { id: "practice-flash-P19", q: 19, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-flash-P19a", label: "(a)", marks: "15", topic: "flash",
          sub: "Flash drum sizing: vertical (Watkins K-drum correlation, permissible velocity, D and height rules) and horizontal drums", type: "theory", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, Flash Distillation (Jan 2026), "Flash Drum Sizing" (vertical, Steps 1–3; horizontal, Steps 1–3); Wankat 3e, Section 2.9`,
          text: String.raw`The flash has been solved, so $F$, $z_i$, $L$, $x_i$, $V$, $y_i$, $T_{drum}$ and $p_{drum}$ are known. Describe, with a labelled sketch, how a vertical flash drum is sized (permissible vapor velocity, diameter and height, including $h_V$, $h_f$ and $h_L$). What do you do if $h_{total}/D$ falls outside 3–5? How is the procedure changed for a horizontal drum, and why is its allowable vapor velocity higher?`,
          solution: String.raw`**Vertical drum** (Wankat Section 2.9; the vapor velocity sets the diameter, the liquid and nozzle rules set the height).

1. **Permissible vapor velocity:** the vapor must rise slowly enough for liquid drops to fall back against it:
$$u_{perm} = K_{drum}\sqrt{\frac{\rho_L - \rho_V}{\rho_V}} \quad (\mathrm{ft/s})$$
$K_{drum}$ is Watkins' (1967) chart, fitted by Blackwell (1984):
$$K_{drum} = \exp\left[A + B\ln F_{lv} + C(\ln F_{lv})^2 + D(\ln F_{lv})^3 + E(\ln F_{lv})^4\right]\ \mathrm{ft/s}$$
$$F_{lv} = \frac{W_L}{W_V}\sqrt{\frac{\rho_V}{\rho_L}}$$
with $W_L$, $W_V$ the mass flow rates (lb/h) and $A = -1.877478097$, $B = -0.8145804597$, $C = -0.1870744085$, $D = -0.0145228667$, $E = -0.0010148518$. The correlation is for 85% of flooding without a demister (about 5% entrainment); a demister cuts entrainment below 1%.

> The slide writes $\sqrt{\rho_L/(\rho_L - \rho_V)}$; that appears to be a typo, since that ratio is ≈ 1 and would make $u_{perm} \approx K_{drum}$. The correct group is $\sqrt{(\rho_L - \rho_V)/\rho_V}$ (Wankat Eq. 2-64), which is large because the vapor is much lighter than the liquid. (The slide's "C = 1 ft/s" is just the unit constant in front of the exponential, not the constant C inside it.)

2. **Cross-section and diameter:** the vapor mass flow divided by $\rho_Vu_{perm}$:
$$A_c = \frac{V\,MW_V}{u_{perm}(3600)\rho_V}$$
$$D = \sqrt{\frac{4A_c}{\pi}}$$
($V$ in lbmol/h, $MW_V$ in lb/lbmol, $\rho_V$ in lb/ft³, $u_{perm}$ in ft/s gives $A_c$ in ft².) Round D up to the next 6-in increment.

3. **Height:**
$$\frac{h_{total}}{D} = \frac{h_V + h_f + h_L}{D} \approx 3\ \text{to}\ 5$$
- $h_V$, top of the drum above the feed-nozzle centerline: 36 in + ½ (feed-line diameter), at least 48 in. This is the disengagement space where drops settle.
- $h_f$, feed-line centerline above the maximum liquid level: 12 in + ½ (feed-line diameter), at least 18 in, so the incoming jet does not splash the pool into the vapor.
- $h_L$, depth of the liquid pool, from the surge volume the plant needs (liquid flow × holdup time):
$$h_L = \frac{V_{surge}}{\pi D^2/4}$$
The best ratio within 3–5 minimizes vessel weight (cost).

4. **If the ratio is outside the range:** $h_{total}/D < 3$: allow a larger liquid surge volume (deeper pool). $h_{total}/D > 5$: use a horizontal drum.

![Vertical flash drum: D across the shell; h_V from the top to the feed-nozzle centerline, h_f from the centerline to the maximum liquid level, h_L the pool depth; demister pad near the top, inlet deflector at the feed nozzle](fig/practice-flash-P19-vert.svg)

**Horizontal drum** (used for large flows or large surge volumes; also cheaper to support):

5. **Velocity:** same $u_{perm}$ formula, but with
$$K_{horizontal} = 1.25\,K_{vertical}$$
The vapor flows along the drum, so a drop only has to fall part of a diameter while it travels the length h: the disengagement area is larger and the settling path is long. A 25% higher velocity is therefore allowed.

6. **Area and diameter:** the liquid occupies part of the circle, so instead of the circular-segment geometry the vapor area is taken as $A_c \approx Dh$ with $h/D = C$ (3 to 5, Seader):
$$A_c = Dh = CD^2 = \frac{V\,MW_V}{u_{perm}(3600)\rho_V} \Rightarrow D = \sqrt{\frac{V\,MW_V}{3600\,\rho_V\,C\,u_{perm}}}$$
For an ideal gas, $\rho_V = p\,MW_V/(RT)$ and
$$D = \sqrt{\frac{VRT}{3600\,C\,p\,u_{perm}}}$$
The vessel volume is $\pi D^2h/4 = \pi CD^3/4$; check that it holds the required liquid surge.

![Horizontal flash drum: length h, diameter D, feed at one end, vapor leaving at the other end above the liquid pool](fig/practice-flash-P19-horiz.svg)

**Exam tip:** keep the units consistent: $K_{drum}$ is in ft/s, so work in ft, lb and lbmol (or convert $u_{perm}$ to m/s before using SI flows).`,
          answer: String.raw`Vertical: $F_{lv}$ → $K_{drum}$ (Blackwell fit) → $u_{perm} = K_{drum}\sqrt{(\rho_L-\rho_V)/\rho_V}$ → $A_c = V\,MW_V/(3600\,u_{perm}\rho_V)$ → $D = \sqrt{4A_c/\pi}$; height from $h_V$ (36 in + ½d, ≥ 48 in), $h_f$ (12 in + ½d, ≥ 18 in), $h_L = V_{surge}/(\pi D^2/4)$, with $h/D$ = 3–5 (< 3: more surge; > 5: go horizontal). Horizontal: $K = 1.25K_{vert}$, $D = \sqrt{V\,MW_V/(3600\rho_V C u_{perm})}$.` },
        { id: "practice-flash-P19b", label: "(b)", marks: "20", topic: "flash",
          sub: "Vertical drum size for 1500 lbmol/h n-hexane–n-octane (Wankat Example 2-4)", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 03, Flash Distillation (Jan 2026), "Problem: Calculation of Drum Size"; same as Wankat 3e, Example 2-4`,
          text: String.raw`A vertical flash drum is to flash a liquid feed of 1500 lbmol/h that is 40 mol% n-hexane and 60 mol% n-octane at 101.3 kPa (1 atm). We wish to produce a vapor that is 60 mol% n-hexane. Solution of the flash equations with equilibrium data gives $x_H = 0.19$, $T_{drum} = 378$ K and V/F = 0.51. What size flash drum is required?`,
          solution: String.raw`**Given:** $F = 1500$ lbmol/h, $z_H = 0.40$; $y_H = 0.60$, $x_H = 0.19$, $V/F = 0.51$, $T = 378$ K, $p = 1$ atm.

**Find:** drum diameter D and height $h_{total}$.

**Assumptions:**
- ideal gas for the vapor; ideal liquid mixture (additive volumes);
- $MW_H = 86.17$, $MW_O = 114.22$;
- pure-liquid densities at 378 K: n-hexane 0.573 g/mL, n-octane 0.630 g/mL (saturated-liquid values from the Rackett equation, scaled to the 20 °C handbook densities 0.659 and 0.703 g/mL that Wankat uses; independent data give about 0.57–0.58 and 0.63 g/mL);
- $h_{total}/D = 4$; feed line no larger than 12 in, so the minimum $h_V = 48$ in and $h_f = 18$ in apply.

1. **Flows:** $V = 0.51(1500) = 765$ lbmol/h, $L = 735$ lbmol/h. (Check: $x_H = (0.40 - 0.51 \times 0.60)/0.49 = 0.192$ ✓)

2. **Molecular weights:**
$$MW_L = 0.19(86.17) + 0.81(114.22) = 108.89$$
$$MW_V = 0.60(86.17) + 0.40(114.22) = 97.39$$

3. **Liquid density** (additive volumes):
$$\bar V_L = 0.19\frac{86.17}{0.573} + 0.81\frac{114.22}{0.630} = 175.4\ \mathrm{mL/mol}$$
$$\rho_L = \frac{108.89}{175.4} = 0.621\ \mathrm{g/mL} = 38.75\ \mathrm{lb/ft^3}$$

4. **Vapor density** (ideal gas):
$$\rho_V = \frac{p\,MW_V}{RT} = \frac{(1)(97.39)}{82.0575(378)} = 3.14\times10^{-3}\ \mathrm{g/mL} = 0.1960\ \mathrm{lb/ft^3}$$

5. **Flow parameter:** $W_V = 765(97.39) = 74{,}503$ lb/h, $W_L = 735(108.89) = 80{,}035$ lb/h:
$$F_{lv} = \frac{W_L}{W_V}\sqrt{\frac{\rho_V}{\rho_L}} = 1.0742\sqrt{\frac{0.00314}{0.621}} = 0.0764$$
$$\ln F_{lv} = -2.572$$

6. **Drum constant** (Blackwell fit): $$K_{drum} = \exp[-1.8775 - 0.8146(-2.572) - 0.1871(-2.572)^2$$
$$- 0.01452(-2.572)^3 - 0.001015(-2.572)^4] = 0.4416\ \mathrm{ft/s}$$

7. **Permissible velocity:**
$$u_{perm} = K_{drum}\sqrt{\frac{\rho_L - \rho_V}{\rho_V}} = 0.4416\sqrt{\frac{0.621 - 0.00314}{0.00314}} = 6.19\ \mathrm{ft/s}$$
(1.89 m/s).

8. **Area and diameter:**
$$A_c = \frac{V\,MW_V}{u_{perm}(3600)\rho_V} = \frac{765(97.39)}{6.19(3600)(0.1960)}$$
$$A_c = 17.05\ \mathrm{ft^2}$$
$$D = \sqrt{\frac{4(17.05)}{\pi}} = 4.66\ \mathrm{ft}$$
Next 6-in increment: **D = 5.0 ft** (1.52 m). The vapor then moves at 87% of $u_{perm}$.

9. **Height:** $h_{total} = 4D = $ **20 ft** (6.1 m). With $h_V = 4.0$ ft and $h_f = 1.5$ ft, the pool can be $h_L = 20 - 5.5 = 14.5$ ft deep: $V_{surge} = 14.5(\pi \cdot 5^2/4) = 285$ ft³. The liquid flow is $80{,}035/38.75 = 2065$ ft³/h = 34.4 ft³/min, so this is about 8 min of holdup, a generous surge capacity.

10. **Surge check the other way:** if the plant wanted only 5 min of holdup, $h_L = 5(34.4)/19.63 = 8.8$ ft and $h_{total} = 14.3$ ft, $h/D = 2.85 < 3$. The rule then says to allow a larger surge volume, raising $h_{total}$ to at least $3D = 15$ ft.

11. **Horizontal alternative (for comparison):** $K_h = 1.25(0.4416) = 0.552$ ft/s, $u_{perm} = 7.74$ ft/s; with $h/D = C = 4$
$$D = \sqrt{\frac{V\,MW_V}{3600\,\rho_V\,C\,u_{perm}}} = \sqrt{\frac{74{,}503}{3600(0.1960)(4)(7.74)}} = 1.85\ \mathrm{ft}$$
so about 2 ft × 8 ft by the vapor rule. Half full, such a vessel holds only about 0.4 min of liquid, so for this duty the surge volume, not the vapor, would set the size of a horizontal drum.

> Book answer (Wankat Example 2-4, densities at 20 °C: $\rho_L = 0.696$ g/mL): $K_{drum} = 0.4433$, $u_{perm} = 6.585$ ft/s, $A_c = 16.05$ ft², "D = 4.01 ft, use 4.0 or 4.5 ft", $h_{total} = 4(4.5) = 18$ ft. The same 20 °C densities reproduce $K_{drum}$, $u_{perm}$ and $A_c$ here, but $D = \sqrt{4A_c/\pi} = \sqrt{4(16.05)/\pi} = 4.52$ ft; the printed 4.01 ft equals $\sqrt{A_c}$, so it appears to be a slip, and 4.5 ft is the safe choice the book ends with. Using the less dense liquid at 378 K raises D only to 4.66 ft (D varies roughly as $\rho_L^{-1/4}$).
>
> Slide formula check: with the slide's $u_{perm} = K_{drum}\sqrt{\rho_L/(\rho_L - \rho_V)}$ one would get $u_{perm} = 0.44$ ft/s and $D \approx 17$ ft, an absurd drum. Use $\sqrt{(\rho_L - \rho_V)/\rho_V}$.

**Exam tip:** most of the work is physical properties; write $\rho_L$, $\rho_V$, $MW_L$ and $MW_V$ in a small table first, all in one unit system.`,
          answer: String.raw`$\rho_L = 0.621$ g/mL, $\rho_V = 3.14\times10^{-3}$ g/mL; $F_{lv} = 0.076$, $K_{drum} = 0.442$ ft/s, $u_{perm} = 6.19$ ft/s, $A_c = 17.0$ ft², D = 4.66 ft → use 5.0 ft; $h_{total} = 4D = 20$ ft (≈ 8 min liquid holdup). Book (20 °C densities): $A_c = 16.05$ ft², D = 4.52 ft (printed 4.01), uses 4.5 ft × 18 ft.` } ] },

    { id: "practice-flash-P20", q: 20, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-flash-P20", label: "", marks: "10", topic: "flash",
        sub: "Flash concepts: why \"flash\", why only partial vaporization (μ equality), phase rule F = 2, isenthalpic valve, drum internals", type: "theory", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides 03, Flash Distillation (Jan 2026), "What is Flash Distillation?", "Flash System" and "Degrees of Freedom"`,
        text: String.raw`(i) What is flash distillation, and why is it called a "flash"? (ii) Why does the feed only partly vaporize instead of boiling completely? (iii) Apply the Gibbs phase rule to a binary two-phase flash drum and state what fixing $T$ and $P$ does. (iv) Why is the throttle valve treated as isenthalpic? (v) Name the parts of a flash drum and give the job of each.`,
        solution: String.raw`1. **(i) Flash distillation:** a single-equilibrium-stage separation in which a feed partly vaporizes (or partly condenses) because of a change in pressure and/or temperature. It gives two products: a vapor rich in the more volatile components and a liquid rich in the less volatile ones. It is called a *flash* because the vaporization is very rapid: when the hot, pressurized liquid passes the valve, its pressure suddenly drops below its bubble-point pressure, and vapor forms almost instantly throughout the liquid.

2. **(ii) Why only partial vaporization:**
- The energy for vaporization is the feed's own sensible heat (the drum is adiabatic): as vapor forms, the mixture cools. The amount of vapor is fixed by $Fh_F = Lh_L + VH_V$.
- As the light components leave, the remaining liquid becomes heavier and its bubble point rises.
- The system moves only until the phases are in equilibrium, i.e. for every component
$$\mu_i^L = \mu_i^V \quad (\text{with } T^L = T^V,\ p^L = p^V)$$
Then there is no driving force for further net transfer. Complete vaporization would need a feed enthalpy at least that of saturated vapor at drum conditions (a feed above its dew point).

3. **(iii) Gibbs phase rule** for $C = 2$ components and $P = 2$ phases:
$$F = C - P + 2 = 2 - 2 + 2 = 2$$
Two intensive variables can be fixed. Specifying **T and P fixes everything else intensive**: the equilibrium $x$ and $y$ (the tie line on the T–x–y diagram). The amounts V and L then follow from the feed composition by the lever rule, $V/F = (z - x)/(y - x)$. For a multicomponent feed ($C > 2$), $T$ and $P$ fix the $K_i$, and Rachford–Rice gives the split.

4. **(iv) Isenthalpic valve:** across a throttle valve there is no shaft work, the heat loss is negligible (fast flow, small surface), and kinetic and potential energy changes are small. The steady-flow energy balance then reduces to
$$h_{in} = h_{out}$$
The valve does not add or remove energy; it only drops the pressure, so part of the sensible heat of the liquid is turned into latent heat of vapor and the temperature falls ($T_{drum} < T_F$). This is why $h_F$ at the heater outlet is the enthalpy used in the drum energy balance.

5. **(v) Flash drum components:**

| part | job |
|---|---|
| inlet distributor (deflector or diverter at the feed nozzle) | slows and spreads the two-phase jet, starts the vapor–liquid split, and stops the jet from hitting the far wall or splashing the pool |
| vapor disengagement zone (space above the feed nozzle, $h_V$) | gives liquid drops time to fall out of the rising vapor; its cross-section is set by $u_{perm}$ |
| demister pad (wire mesh near the vapor outlet) | catches fine droplets, which coalesce and drip back, so the vapor leaves dry (entrainment from about 5% to under 1%) |
| liquid holdup zone (pool, $h_L$) | collects the liquid and gives surge volume, so the liquid level and the flow to downstream equipment stay steady |

**Exam tip:** "single equilibrium stage", "isenthalpic valve" and "$\mu_i^L = \mu_i^V$" are the three phrases examiners look for in this answer.`,
        answer: String.raw`Flash = one equilibrium stage, vaporization almost instantaneous after the pressure drop; it stops at equilibrium ($\mu_i^L = \mu_i^V$) because the feed's sensible heat is used up and the liquid gets heavier. Binary two-phase: F = 2 − 2 + 2 = 2, so T and P fix x and y. Valve: no work, no heat → $h_{in} = h_{out}$. Drum: inlet distributor, disengagement zone, demister, liquid holdup (pool).` } ] }
  ] });
