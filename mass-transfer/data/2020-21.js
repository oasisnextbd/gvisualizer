QB.paper({
  year: "2020-21", date: "24/09/2022", marks: 210,
  rules: String.raw`Section A: four questions, answer any three. Section B: four questions, answer any three. Separate scripts for each section. All notations have their usual meanings.`,
  questions: [
    { id: "2020-21-Q1", q: 1, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q1a", label: "(a)", marks: "10",
          topic: "column-design", sub: "Valve trays: turndown and flexibility",
          type: "theory", syllabus: "in", repeats: ["2011-12-Q8b", "2012-13-Q4b", "2016-17-Q5e", "practice-column-design-P2a"],
          text: String.raw`"The main advantage of a valve tray over other trays is it offers a better turndown ratio and is more flexible" — justify this statement.`,
          solution: String.raw`**Turndown ratio** = (maximum vapor rate at which the tray works acceptably) / (minimum vapor rate at which it still works acceptably). At the top end the limit is flooding or entrainment. At the bottom end it is weeping or dumping and the efficiency loss that follows.

**Why a valve tray turns down well**
- Each hole is large and carries a movable cover (the valve). Feet or a cage limit how far it can rise.
- Valve lift follows the vapor rate. At low vapor flow many valves close, or open only part way, so the open slot area shrinks. The **vapor velocity through the open slots stays nearly constant**.
- With the slot velocity held up, the vapor still holds the liquid on the deck. **Weeping is prevented over a wide range** and the froth (the mass-transfer zone) is kept, so **efficiency stays nearly constant** as the vapor rate falls.
- At high rates the valves are fully open and the tray behaves like a sieve tray with large holes, so capacity is similar to a sieve tray.

**Comparison with the other trays (course slides)**

| Feature | Sieve | Valve | Bubble-cap |
|---|---|---|---|
| Open area | fixed holes | self-adjusting | fixed slots |
| Turndown | poor: efficiency drops below about 60% of design gas rate (weeping) | good: efficiency stays high as gas rate drops | can hold liquid (risers), but often worse in practice; large liquid gradient |
| Efficiency at design | good | about the same as sieve | same or lower |
| Cost | 1 (base) | about 1.2 × sieve | about 4 × valve |
| Fouling | best, easy to clean | more likely to foul or plug, moving parts wear | coking and polymer problems |

**"More flexible"**: a feed rate that swings seasonally, or a plant run at part load, is handled by one valve-tray design. It can also be designed for a lower pressure drop than a sieve tray. The price is about 20% more cost than sieve trays, a proprietary vendor design, valve feet that wear, and more risk of plugging with dirty feeds.

**Exam tip:** define turndown, then give the mechanism: variable open area → constant slot velocity → no weeping → constant efficiency.`,
          answer: String.raw`Valve lift adjusts the open area to the vapor rate, so slot velocity, and hence froth and efficiency, stay nearly constant from low to high rates. A sieve tray weeps below about 60% of its design rate.` },
        { id: "2020-21-Q1b", label: "(b)", marks: "8",
          topic: "column-design", sub: "Flooding velocity and column diameter",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Why flooding velocity is critical in distillation column design and how does it affect the sizing of the column?`,
          solution: String.raw`**Flooding.** When the vapor velocity is too high, liquid cannot flow down. Entrainment carries liquid up to the tray above (entrainment flooding), or the downcomer backs up until it reaches the tray above (downcomer flooding). The trays fill with liquid, pressure drop shoots up, and the separation collapses. The column cannot operate above $u_{flood}$.

**Why it is critical**
- It is the upper limit on vapor velocity, so it sets the **minimum cross-sectional area**.
- Designing too close to it gives heavy entrainment, which lowers the effective Murphree efficiency, and no margin for upsets. Designing far below it gives a needlessly large, expensive column and risks weeping at low rates.
- Hence the design velocity is a fraction of flooding: $u_{op} \approx 0.65$–$0.85\,u_{flood}$ (slides: about 75%).

**How it sizes the column** (Fair correlation, as on the figure for Q1(c)):

$$u_{flood} = C_{SB}\left(\frac{\sigma}{20}\right)^{0.2}\left(\frac{\rho_L-\rho_V}{\rho_V}\right)^{0.5}$$

$C_{SB}$ is read at the flow parameter $F_{lv} = (L/G)(\rho_V/\rho_L)^{0.5}$ and the tray spacing.

1. $u_{op} = f\,u_{flood}$ with $f \approx 0.75$.
2. $Q_V = \dfrac{V M_V}{3600\,\rho_V}$ (m³/s), from the largest vapor load (check both top and bottom).
3. $A_{net} = Q_V/u_{op}$, then $A_T = A_{net}/(1 - A_d/A_T)$ (downcomer area, e.g. $A_d/A_T = 0.12$).
4. $D = \sqrt{4A_T/\pi}$, rounded up.

So $D \propto u_{flood}^{-1/2}$. A larger tray spacing raises $C_{SB}$ and $u_{flood}$ and gives a smaller diameter, but a taller column. A higher $F_{lv}$ (more liquid) lowers $C_{SB}$ and needs a larger diameter.`,
          answer: String.raw`Flooding is the hydraulic upper limit, so the column is sized at about 75% of $u_{flood}$: $A = Q_V/(0.75u_{flood})$ and $D=\sqrt{4A_T/\pi}$, with $D \propto u_{flood}^{-1/2}$.` },
        { id: "2020-21-Q1c", label: "(c)", marks: "17",
          topic: "column-design", sub: "New flooding velocity for larger tray spacing and higher L/V",
          type: "numerical", syllabus: "partial", repeats: [],
          text: String.raw`You have designed a sieve tray column with 0.3048 m tray spacing to operate at a pressure of 1.0 atm. The value of the flow parameter is $F_{lv} = 0.090$ and the flooding velocity was calculated as 1.83 m/s. Unfortunately, your manager thinks that 0.3048 m tray spacing is not enough and that your reflux ratio is too low. You must redesign for a 0.6096 m tray spacing and increase L/V by 11%. Estimate the new flooding velocity. Assumptions: ideal gas; $\sigma$, $\rho_L$ and $\rho_G$ are unchanged. (See the figure for Question 1(c): Fair's flooding chart, $C_{SB,flood} = U_{nf}(20/\sigma)^{0.2}[\rho_G/(\rho_L-\rho_G)]^{0.5}$ in ft/s against $F_{lv} = (L/G)(\rho_G/\rho_L)^{0.5}$ for plate spacings 6–36 in, with

$$U_{N,f} = C_{SB}\left(\frac{\rho_L-\rho_V}{\rho_V}\right)^{0.5}\left(\frac{\sigma_L}{20}\right)^{0.2}$$

$$C_{SB}\,(\mathrm{ft\,s^{-1}}) = 0.04232 + 0.1674T_s + (0.0063 - 0.2686T_s)F_{lv} + (0.1448T_s - 0.008)F_{lv}^2$$

with $T_s$ in ft.)`,
          solution: String.raw`> The slides cover diameter sizing from an allowable velocity; the Fair flooding chart and its fit are given on the paper (Wankat Problem 10.D7).

**Given:** $T_{s,1} = 0.3048$ m = 1.0 ft, $F_{lv,1} = 0.090$, $u_{flood,1} = 1.83$ m/s; new $T_{s,2} = 0.6096$ m = 2.0 ft, $(L/V)_2 = 1.11(L/V)_1$; $\sigma$, $\rho_L$, $\rho_G$ unchanged.

**Find:** $u_{flood,2}$.

1. **Ratio form.** With $\sigma$, $\rho_L$ and $\rho_V$ unchanged, the property group in $U_{N,f}$ cancels:
$$\frac{u_{flood,2}}{u_{flood,1}} = \frac{C_{SB,2}}{C_{SB,1}}$$
2. **New flow parameter.** $F_{lv} = (L/G)(\rho_G/\rho_L)^{0.5}$. Compositions, and so molar masses, are essentially unchanged, so a +11% change in molar L/V is a +11% change in mass L/G:
$$F_{lv,2} = 1.11(0.090) = 0.0999$$
3. **$C_{SB}$ from the given fit** ($T_s$ in ft):
   - Old, $T_s = 1$ ft: $C_{SB,1} = 0.04232 + 0.1674 + (0.0063-0.2686)(0.090) + (0.1448-0.008)(0.090)^2 = 0.1872$ ft/s
   - New, $T_s = 2$ ft: $C_{SB,2} = 0.04232 + 0.3348 + (0.0063-0.5372)(0.0999) + (0.2896-0.008)(0.0999)^2 = 0.3269$ ft/s
   - Chart check: at $F_{lv} \approx 0.09$–$0.10$ the 12 in curve reads about 0.19 and the 24 in curve about 0.33 ft/s, which agrees.
4. **New flooding velocity**:
$$u_{flood,2} = 1.83 \times \frac{0.3269}{0.1872} = 1.83 \times 1.746 = 3.20\ \mathrm{m/s}$$

![C_SB against F_lv from the given fit for 12 in and 24 in spacing, with the old and new design points](fig/2020-21-Q1c-sol.svg)

**Comment:** doubling the spacing raises $C_{SB}$ by about 77%. The extra liquid (higher $F_{lv}$) takes back only about 1%. The net effect is +75% in allowable velocity, so the diameter can fall by a factor of about $1/\sqrt{1.75} = 0.76$, but there is more vapor (higher reflux) and a taller shell.

**Exam tip:** always form the ratio $u_2/u_1 = C_{SB,2}/C_{SB,1}$ when the properties are unchanged, and remember that $T_s$ in the fit is in feet.`,
          answer: String.raw`$F_{lv,2} = 0.0999$; $C_{SB}$: 0.187 → 0.327 ft/s; $u_{flood,2} = 1.83(0.327/0.187) \approx 3.2$ m/s.` } ] },
    { id: "2020-21-Q2", q: 2, section: "A", compulsory: false,
      stem: String.raw`We have a steam stripper operating isothermally at 100°C. The entering liquid stream contains 0.0004 mole frac nitrobenzene in water at 100°C. The flow rate of entering liquid is 2 kmol/min. The entering steam is pure water at 100°C. We desire an outlet liquid mole frac of 0.00001 nitrobenzene. L/V is set at 10. At 100°C, equilibrium is $y = 28x$ (in terms of nitrobenzene mole frac).`,
      parts: [
        { id: "2020-21-Q2a", label: "(a)", marks: "16",
          topic: "absorption", sub: "Steam stripper: outlet vapor and stages by Kremser",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find the outlet mole fraction of the nitrobenzene in the vapor stream and the number of stages.`,
          solution: String.raw`**Given:** $x_0 = 0.0004$, $x_N = 0.00001$, $y_{N+1} = 0$ (pure steam), $L = 2$ kmol/min, $L/V = 10$, $y = 28x$.

**Find:** $y_1$ and $N$.

**Assumptions:** dilute, so total $L$ and $V$ are constant (steam condensation ignored); isothermal and isobaric; straight equilibrium line $y = mx$ with $m = 28$, $b = 0$. These are the Kremser assumptions.

1. **Steam rate:** $V = L/10 = 0.2$ kmol/min.
2. **External balance** (stripper: liquid enters at the top at stage 1, steam at the bottom at stage N):
$$V y_1 = L(x_0 - x_N) + V y_{N+1} \Rightarrow y_1 = 10(0.0004 - 0.00001) + 0 = 0.0039$$
   - Check: $y_1^* = m x_0 = 0.0112 > 0.0039$, so the operating line lies below the equilibrium line and the design is feasible.
3. **Stripping factor:** $S = mV/L = 28/10 = 2.8$.
4. **Kremser, liquid-phase form** (slides):
$$\frac{x_N - x_N^*}{x_0 - x_N^*} = \frac{1 - mV/L}{1-(mV/L)^{N+1}}, \qquad x_N^* = \frac{y_{N+1}-b}{m} = 0$$
$$\frac{0.00001}{0.0004} = 0.025 = \frac{1-2.8}{1-2.8^{N+1}} \Rightarrow 2.8^{N+1} = 1 + \frac{1.8}{0.025} = 73$$
$$N + 1 = \frac{\ln 73}{\ln 2.8} = \frac{4.290}{1.030} = 4.167 \Rightarrow N = 3.17$$
5. **Use 4 equilibrium stages.** With 4 stages the outlet is $x_4 = 0.0004(1-2.8)/(1-2.8^5) = 4.2\times10^{-6}$, better than the specification.

**McCabe–Thiele check** (stepping from the top, $y_{j+1} = 10x_j - 0.0001$, $x_j = y_j/28$):

| Stage | $y_j$ | $x_j$ |
|---|---|---|
| 1 | 0.003900 | $1.393\times10^{-4}$ |
| 2 | 0.001293 | $4.62\times10^{-5}$ |
| 3 | 0.000362 | $1.29\times10^{-5}$ |
| 4 | 0.0000292 | $1.04\times10^{-6}$ (passes $x_N$) |

Fraction of the last stage = $(1.29-1.0)/(1.29-0.10) = 0.25$, so about 3.2 stages, the same as Kremser.

![Dilute McCabe–Thiele diagram for the steam stripper: operating line below y = 28x, about 3.2 stages](fig/2020-21-Q2a-sol.svg)

**Exam tip:** for a stripper the operating line is *below* the equilibrium line. Step from $(x_0, y_1)$ at the top down to $x_N$.`,
          answer: String.raw`$y_1 = 0.0039$; $S = mV/L = 2.8$; Kremser $N = 3.17$, so 4 equilibrium stages (giving $x_N \approx 4.2\times10^{-6}$).` },
        { id: "2020-21-Q2b", label: "(b)", marks: "12",
          topic: "absorption", sub: "Effect of L, V and temperature on stripped-liquid purity",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What will happen to the purity of the outlet liquid if we increase (i) liquid flow rate, (ii) steam flow rate, and (iii) temperature of inlet gas and inlet liquid? Explain your answer with appropriate equations.`,
          solution: String.raw`For an existing column ($N$ fixed), the Kremser equation with pure steam ($x_N^* = 0$) gives

$$\frac{x_N}{x_0} = \frac{S-1}{S^{N+1}-1}, \qquad S = \frac{mV}{L}$$

$x_N/x_0$ falls steeply as the stripping factor $S$ rises. Purity of the outlet liquid means a small $x_N$. The numbers below are for the column of part (a), $N = 3.17$, $x_0 = 0.0004$:

| Change (others fixed) | Effect on $S = mV/L$ | $x_N$ | Outlet liquid |
|---|---|---|---|
| Base case | 2.8 | $1.0\times10^{-5}$ | spec met |
| (i) $L$ up 20% | $S$ falls to 2.33 | $1.6\times10^{-5}$ | **less pure** |
| (ii) $V$ (steam) up 20% | $S$ rises to 3.36 | $6.1\times10^{-6}$ | **purer** |
| (iii) $T$ up ($m$ up 20%) | $S$ rises to 3.36 | $6.1\times10^{-6}$ | **purer** |

**Explanations**
- **(i) More liquid:** the operating line, slope $L/V$, gets steeper and moves toward the equilibrium line. Each stage does less, and a higher $x_N$ leaves. The external balance $y_1 = (L/V)(x_0 - x_N)$ also shows more solute must leave in the same steam.
- **(ii) More steam:** $L/V$ falls, the operating line moves away from equilibrium, and more driving force gives a lower $x_N$. The cost is more steam and a more dilute $y_1$. The minimum steam rate is set by the pinch at the top, $y_1 = m x_0$.
- **(iii) Higher temperature:** $m = K = \gamma P^{sat}(T)/P$ rises with temperature because the vapor pressure rises. The equilibrium line gets steeper and $S$ rises, so the liquid is purer. In practice a steam stripper at 1 atm is pinned near 100°C. To run hotter, the pressure must rise, which reduces $m$ through the $1/P$ term. Hotter feed also flashes some water.

**Exam tip:** reduce every "what happens if" stripping question to the direction in which $S = mV/L$ moves.`,
          answer: String.raw`Purity falls when $L$ rises (lower $S = mV/L$). Purity improves when steam rises or temperature rises (higher $S$; $m$ grows with $P^{sat}$).` },
        { id: "2020-21-Q2c", label: "(c)", marks: "7",
          topic: "column-design", sub: "Stripper height from tray spacing",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine the height of the stripping column using a tray spacing of 1.5 feet.`,
          solution: String.raw`**Given:** $N = 3.17$, so 4 equilibrium trays (from (a)); tray spacing $S = 1.5$ ft; no reboiler (live steam), so every stage is a tray.

**Assumptions:** no tray efficiency is given, so each tray is taken as an equilibrium stage ($E_o = 1$; with a real $E_o$, $N_{act} = 3.17/E_o$, rounded up). End allowances are assumed: about 3 ft above the top tray (liquid inlet and vapor disengagement) and about 4 ft below the bottom tray (steam sparger and liquid sump).

1. **Tray section** (slides: N trays have N − 1 spaces):
$$H_{trays} = (N_{act} - 1)S = (4-1)(1.5) = 4.5\ \mathrm{ft}$$
2. **Total height**:
$$H = (N_{act}-1)S + H_{top} + H_{bottom} \approx 4.5 + 3 + 4 \approx 11.5\ \mathrm{ft}\ (\approx 3.5\ \mathrm{m})$$

The quick textbook estimate $N \times S = 4 \times 1.5 = 6$ ft counts one tray space too many, but it is often accepted as "the height of the tray section".`,
          answer: String.raw`4 trays: tray section $(4-1)(1.5) = 4.5$ ft (6 ft by the quick $N\times S$ estimate); about 11–12 ft overall with end allowances.` } ] },
    { id: "2020-21-Q3", q: 3, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q3a", label: "(a)", marks: "10",
          topic: "immiscible-extraction", sub: "Solvent selection with sustainability",
          type: "theory", syllabus: "in", repeats: ["2017-18-Q4a", "2022-23-Q3a"],
          text: String.raw`In recent years sustainability has become one of the main concerns in chemical process design. How would you select a solvent if sustainability needs to be considered in designing an extraction process?`,
          solution: String.raw`**Technical criteria (slides)**
- **High distribution coefficient** $K_D = y/x$ for the desired solute, which gives a low solvent rate and few stages.
- **High selectivity** $\alpha = K_{desired}/K_{undesired}$, so contaminants stay behind.
- **Low mutual solubility** with the diluent (immiscible or easy to separate), so little solvent is lost in the raffinate.
- **Easy recovery:** a large boiling-point difference or no azeotrope with the solute. Solvent recovery is often the most expensive step of the whole process.
- **Density difference and interfacial tension** that allow fast phase separation without stable emulsions; low viscosity.
- Chemically stable, noncorrosive, and not reactive with the solute.

**Sustainability criteria added**
- **Hazard to people:** nontoxic, non-carcinogenic, low volatility (low worker exposure), high flash point and not flammable.
- **Environment:** biodegradable, low aquatic toxicity, no ozone-depletion or global-warming potential. Avoid chlorinated solvents (e.g. chloroform, CCl₄) and aromatics such as benzene where possible.
- **Energy and life cycle:** low heat of vaporization and a recovery route needing little energy; ability to recycle the solvent many times with small make-up; low life-cycle CO₂ to manufacture.
- **Renewable or green options:** bio-based solvents (ethyl lactate, 2-MeTHF, limonene), water-based systems, supercritical CO₂, ionic liquids or deep eutectic solvents (non-volatile, but check toxicity and cost).
- **Regulation and safety in use:** solvent selection guides (e.g. pharma "preferred / usable / undesirable" lists, REACH).
- **Cost and availability:** readily available, inexpensive, with a secure supply.

**Procedure:** screen candidates on $K_D$ and $\alpha$ (lab LLE data). Eliminate those that fail the safety, health and environment criteria. Rank the rest on total cost including recovery energy and losses. Confirm settling behavior and stability in pilot tests.`,
          answer: String.raw`Pick a solvent with high $K_D$ and selectivity, low miscibility and easy, low-energy recovery. Add sustainability filters: low toxicity and flammability, biodegradable, recyclable, renewable or green where possible, with low life-cycle impact and cost.` },
        { id: "2020-21-Q3b", label: "(b)", marks: "25",
          topic: "immiscible-extraction", sub: "Two-stage cross-flow extraction, acetic acid into 3-heptanol",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The equilibrium for extraction of acetic acid from water into 3-heptanol at 25°C is $y = 0.828x$, where y is wt frac acetic acid in 3-heptanol and x is wt frac acetic acid in water. We have a feed of 400 kg/h containing 0.005 wt frac acetic acid in water. We have a solvent containing 0.0001 wt frac acetic acid in 3-heptanol. Assume water and 3-heptanol are immiscible. If 200 kg/h of solvent is added to each stage of a cross-flow cascade with two stages, find the total recovery of acetic acid in the 3-heptanol solvent phase.`,
          solution: String.raw`**Given:** $F = 400$ kg/h, $x_0 = 0.005$; $F_{S,j} = 200$ kg/h to each stage with $y_{in} = 0.0001$; $y = 0.828x$; 2 cross-flow stages.

**Find:** total recovery of acid into the solvent.

**Assumptions:** immiscible diluent and solvent; dilute (below 0.5 wt%), so total flows are constant and $F_D \approx 400$, $F_S \approx 200$ kg/h; isothermal; equilibrium stages.

1. **Stage balance** (slides, Eq. 16-20):
$$F_D x_{j-1} + F_S y_{in} = F_D x_j + F_S y_j, \qquad y_j = m x_j$$
$$\Rightarrow x_j = \frac{F_D x_{j-1} + F_S y_{in}}{F_D + mF_S}$$
   - Each stage has its own operating line of slope $-F_D/F_{S,j} = -400/200 = -2$, through $(x_{j-1}, y_{in})$.
2. **Stage 1:**
$$x_1 = \frac{400(0.005) + 200(0.0001)}{400 + 0.828(200)} = \frac{2.020}{565.6} = 0.003571, \qquad y_1 = 0.828x_1 = 0.002957$$
3. **Stage 2:**
$$x_2 = \frac{400(0.003571) + 0.020}{565.6} = 0.002561, \qquad y_2 = 0.002121$$
4. **Recovery** (acid transferred to the solvent ÷ acid in the feed):
$$\text{Recovery} = \frac{F(x_0 - x_2)}{F x_0} = \frac{0.005 - 0.002561}{0.005} = 0.488 = 48.8\%$$
5. **Check by solvent-side balance:** acid leaving in the extracts = $200(0.002957 + 0.002121) = 1.0156$ kg/h. Acid entering with the solvent = $2(200)(0.0001) = 0.040$ kg/h. Net gain = 0.976 kg/h out of 2.000 kg/h in the feed, i.e. 48.8%.

A solute-free mass-ratio calculation ($X = x/(1-x)$, $F_D = 398$, $F_S = 199.98$ kg/h) gives 48.9%, so the dilute assumption is fine.

![Cross-flow McCabe–Thiele diagram: two operating lines of slope −2 from (x0, y_in) and (x1, y_in) to the equilibrium line](fig/2020-21-Q3b-sol.svg)

**Comment:** the small $m$ (0.828) and the low solvent-to-feed ratio per stage ($mF_S/F_D = 0.41$) give poor recovery. Countercurrent flow with the same 400 kg/h of solvent would do better.

**Exam tip:** in cross-flow, every stage starts again from $y_{in}$ on the x-axis. Draw each operating line from $(x_{j-1}, y_{in})$ with slope $-F_D/F_{S,j}$.`,
          answer: String.raw`$x_1 = 0.00357$, $y_1 = 0.00296$; $x_2 = 0.00256$, $y_2 = 0.00212$; recovery of acetic acid about 48.8% (0.976 of 2.0 kg/h).` } ] },
    { id: "2020-21-Q4", q: 4, section: "A", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q4", label: "", marks: "35",
          topic: "partial-extraction", sub: "Countercurrent extraction on a right triangle: solubility curve, Δ point, extract composition",
          type: "numerical", syllabus: "in", repeats: ["2013-14-Q4"],
          text: String.raw`Pure isopropyl ether (C) of 450 kg/h is being used to extract an aqueous solution of 150 kg/h with 30 wt% acetic acid (A) and 70% water (B) by countercurrent multistage extraction. The equilibrium data at 20°C, 1 atm, are given in the table. The desired exit acetic acid concentration in the aqueous phase is 4%.
(a) In a right-angle triangle, plot the solubility curve.
(b) Locate the delta point.
(c) Find the composition of the extract phase leaving the first stage.

| Water phase $x_A$ | $x_B$ | $x_C$ | Ether phase $y_A$ | $y_B$ | $y_C$ |
|---|---|---|---|---|---|
| 0.0069 | 0.9810 | 0.0120 | 0.0018 | 0.0050 | 0.9930 |
| 0.0141 | 0.9710 | 0.0150 | 0.0037 | 0.0070 | 0.9890 |
| 0.0289 | 0.9550 | 0.0160 | 0.0079 | 0.0080 | 0.9840 |
| 0.0642 | 0.9170 | 0.0190 | 0.0193 | 0.0100 | 0.9710 |
| 0.1330 | 0.8440 | 0.0230 | 0.0482 | 0.0190 | 0.9330 |
| 0.2550 | 0.7110 | 0.0340 | 0.1140 | 0.0390 | 0.8470 |
| 0.3670 | 0.5890 | 0.0440 | 0.2160 | 0.0690 | 0.7150 |
| 0.4430 | 0.4510 | 0.1060 | 0.3110 | 0.1080 | 0.5810 |
| 0.4640 | 0.3710 | 0.1650 | 0.3620 | 0.1510 | 0.4870 |

(Mass fractions; rows are tie lines. Same data as Wankat Table 13-5.)`,
          solution: String.raw`**Given:** $F = R_{N+1} = 150$ kg/h, $x_{A,F} = 0.30$, $x_{B,F} = 0.70$; solvent $E_0 = S = 450$ kg/h, pure C; outlet raffinate $R_1$ with $x_{A,1} = 0.04$ (on the saturated raffinate curve). Stages are numbered from the solvent end: $E_0$ enters stage 1 and $R_1$ leaves it; $F$ enters stage N and $E_N$ leaves it.

**Find:** the solubility curve, the Δ point, and the extract compositions.

**Assumptions:** isothermal (20°C) and isobaric; equilibrium stages; tie lines between data rows found by linear interpolation of $y_A$ against $x_A$ (equivalent to using a conjugate line).

### (a) Solubility (binodal) curve
- Axes: horizontal = wt frac water $x_B$ (diluent), vertical = wt frac acid $x_A$. The ether fraction is $1 - x_A - x_B$, so pure ether S is the origin.
- Plot the water-phase points $(x_B, x_A)$: the **saturated raffinate** branch near the hypotenuse (e.g. (0.981, 0.0069) … (0.371, 0.464)).
- Plot the ether-phase points $(y_B, y_A)$: the **saturated extract** branch hugging the vertical axis (e.g. (0.005, 0.0018) … (0.151, 0.362)).
- Join each pair with its tie line. The two branches meet near the plait point just above the last tie line (about 0.46–0.47 acid).

### (b) Mixing point, end streams and Δ
1. **Mixing point M** (overall balance $E_0 + R_{N+1} = M = R_1 + E_N$):
$$M = 600\ \mathrm{kg/h}, \quad x_{A,M} = \frac{150(0.30)}{600} = 0.075, \quad x_{B,M} = \frac{150(0.70)}{600} = 0.175$$
2. **$R_1$** on the raffinate curve at $x_A = 0.04$: interpolation gives $x_B = 0.943$ and $x_C = 0.017$.
3. **$E_N$:** extend the line $R_1M$ to the extract curve: $y_{A,N} = 0.0816$, $y_{B,N} = 0.0292$, $y_{C,N} = 0.889$.
4. **Flows** from the total and acid balances:
$$R_1 + E_N = 600, \quad 0.04R_1 + 0.0816E_N = 45 \Rightarrow R_1 = 95.7,\ E_N = 504.3\ \mathrm{kg/h}$$
   - Water check: $95.7(0.943) + 504.3(0.0292) = 105.0$ kg/h, equal to the 105 kg/h in the feed.
5. **Δ point.** $\Delta = E_0 - R_1 = E_N - R_{N+1} = 450 - 95.7 = 354.3$ kg/h. Since $E_0 > R_1$, Δ lies on the **left** of the diagram.
$$x_{A,\Delta} = \frac{E_0 y_{A,0} - R_1 x_{A,1}}{\Delta} = \frac{0 - 95.7(0.04)}{354.3} = -0.0108$$
$$x_{B,\Delta} = \frac{0 - 95.7(0.943)}{354.3} = -0.255$$
   - Graphically, Δ is the intersection of line $R_1E_0$ (extended beyond S) and line $FE_N$ (extended beyond $E_N$). Both pass through (−0.255, −0.011).

### (c) Extract compositions
Step from the feed end: tie line from $E_N$ to $R_N$; operating line Δ → $R_N$ extended to the extract curve gives $E_{N-1}$; repeat until $x_A \le 0.04$.

| Step (from feed end) | Extract leaving $y_A$ / $y_B$ | Raffinate leaving $x_A$ / $x_B$ |
|---|---|---|
| 1 (stage N) | 0.0816 / 0.029 | 0.195 / 0.776 |
| 2 | 0.0436 / 0.018 | 0.122 / 0.856 |
| 3 | 0.0209 / 0.011 | 0.068 / 0.913 |
| 4 (stage 1) | 0.0069 / 0.008 | 0.026 / 0.959 (passes 0.04) |

That is about 3.7 stages, so 4 equilibrium stages.

**Extract leaving the first stage**
- **Stage 1** (solvent end, where $R_1$ leaves; $E_1$ is on the tie line through $R_1$): $y_{A,1} = 0.0115$, $y_{B,1} = 0.0086$, ether 0.980.
- **The extract product** $E_N$ leaving the feed stage (if "first stage" means the stage the feed enters): $y_A = 0.082$, $y_B = 0.029$, ether 0.889, at 504 kg/h.

![Right-triangle diagram for acetic acid–water–isopropyl ether: binodal, tie lines, F, S, M, R1, EN, Δ at (−0.255, −0.011) and about 3.7 stages](fig/2020-21-Q4-sol.svg)

**Exam tip:** find M from the feed and solvent, then $E_N$ on line $R_1M$, then Δ as the crossing of $R_1S$ and $FE_N$. The Δ coordinates from the balance are a check on the graph.`,
          answer: String.raw`M = (0.175, 0.075); $R_1$ = 95.7 kg/h; $E_N$ = 504 kg/h at 8.2% acid, 2.9% water; Δ = 354 kg/h at $(x_B, x_A) = (-0.255, -0.011)$; $E_1$ = 1.15% acid, 0.86% water, 98.0% ether; about 3.7, so 4 stages.` } ] },
    { id: "2020-21-Q5", q: 5, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q5a", label: "(a)", marks: "7",
          topic: "vle", sub: "Thermal, mechanical and chemical equilibrium in VLE",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Do the thermal, mechanical and chemical, three equilibrium attain simultaneously for the establishment of vapor-liquid equilibrium? Justify your answer.`,
          solution: String.raw`**Yes. True VLE exists only when all three are satisfied at the same time.**

| Equilibrium | Condition | If it is violated |
|---|---|---|
| Thermal | $T^L = T^V$ | heat flows between the phases and compositions keep changing |
| Mechanical | $P^L = P^V$ (flat interface) | the interface moves, and one phase expands or compresses |
| Chemical (phase) | $\mu_i^L = \mu_i^V$ for every component i | net mass transfer of i from higher to lower $\mu_i$ |

**Justification:** the second law requires $dG_{T,P} = 0$ at equilibrium. For two phases at a common T and P:

$$dG = \sum_i (\mu_i^V - \mu_i^L)\,dn_i^V = 0 \quad \text{for any } dn_i^V \Rightarrow \mu_i^L = \mu_i^V$$

This criterion is written assuming T and P are already uniform. So chemical equilibrium cannot be defined without the other two, and the three must hold together. These are also the equations counted in the phase rule: with P phases there are (P − 1) equalities of T, (P − 1) of P and C(P − 1) of μ, which gives $F = C - P + 2$.

**In practice:** thermal and mechanical equilibrium are reached very quickly (heat transfer and pressure equalization are fast). Chemical equilibrium needs interphase mass transfer and is reached more slowly. On a real tray the phases are close to the same T and P but not fully at the same $\mu$, which is why Murphree efficiencies are below 1.`,
          answer: String.raw`Yes: VLE needs equal T, equal P and equal $\mu_i$ in both phases together ($dG_{T,P}=0$ gives $\mu_i^L=\mu_i^V$ only once T and P are uniform). T and P equalize fast; chemical equilibrium is the slow one, hence tray efficiency.` },
        { id: "2020-21-Q5b", label: "(b)", marks: "8",
          topic: "vle", sub: "Experimental y–x data vs constant-α equation",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Make a detailed comparison between y vs. x experimental data and y vs. x data obtained from equation based on relative volatility for the same pressure and chemical system.`,
          solution: String.raw`The constant-α curve (slides):

$$y = \frac{\alpha x}{1 + (\alpha - 1)x}, \qquad \alpha = \frac{y/x}{(1-y)/(1-x)} = \frac{K_A}{K_B}$$

This is exact if α is constant. For an ideal (Raoult's law) system $\alpha = P_A^{sat}/P_B^{sat}$, which changes only slowly with T.

| Aspect | Experimental y–x data | Constant-α equation |
|---|---|---|
| Basis | measured in an equilibrium still at fixed P | one number α (ideal-solution idea) |
| Non-ideality | included (activity coefficients) | ignored unless α is fitted |
| Variation of α with x and T | real α varies; e.g. methanol–water (slide data): α = 7.6 at x = 0.02, 3.5 at x = 0.5, 2.5 at x = 0.9 | α is constant |
| Azeotropes | shown (curve crosses y = x, e.g. ethanol–water at 0.894) | impossible for any α ≠ 1 |
| Shape | can be asymmetric or S-shaped, with tangent pinches (ethanol–water) | always a smooth symmetric hyperbola |
| Accuracy | best, within data scatter | good for close-boiling ideal pairs (benzene–toluene, α ≈ 2.4–2.5); poor for alcohol–water |
| Use | graphical McCabe–Thiele with interpolation | analytical stepping, Fenske, Underwood, quick estimates |

**Illustration (methanol–water, 1 atm):** using a single mean α = 3.5 at x = 0.10 gives y = 0.35/1.25 = 0.28, but the data say 0.418. The constant-α curve badly under-predicts at the dilute end, so stage counts near $x_B$ would be wrong.

**Conclusion:** the α equation is a convenient approximation. Use the experimental data whenever α varies by more than about 10–20% across the column, or whenever the system is non-ideal or azeotropic.`,
          answer: String.raw`Data include non-ideality, varying α, azeotropes and pinches. The α equation is a symmetric ideal-solution curve, adequate only when α is nearly constant (e.g. benzene–toluene); it fails for alcohol–water.` },
        { id: "2020-21-Q5c", label: "(c)", marks: "5+5",
          topic: "flash", sub: "Flash process sketch and role of the heater",
          type: "sketch", syllabus: "in", repeats: ["2011-12-Q5a", "2012-13-Q6a", "2017-18-Q5b", "2018-19-Q5a", "2023-24-Q2a"],
          text: String.raw`Sketch the basic flash distillation process and rationalize the use of a heater in this process.`,
          solution: String.raw`![Flash system: feed pumped to high pressure, heated, throttled through a valve into a drum with demister; vapor V, y leaves the top and liquid L, x the bottom](fig/2020-21-Q5c-sol.svg)

**Sequence (slides):** a pump raises the pressure; the heater heats the pressurized liquid (it stays liquid because $p_F > p^{sat}$); the valve drops the pressure suddenly, an isenthalpic step in which part of the liquid flashes; the two-phase mixture enters the drum; vapor rises through the demister and leaves at the top; liquid settles and leaves at the bottom.

**Why a heater?**
- The valve is adiabatic: $h_F$ is the same before and after it. The energy needed to vaporize the fraction $V/F$ must already be in the feed. Drum energy balance: $F h_F = V H_V + L h_L$, so $V/F = (h_F - h_L)/(H_V - h_L)$.
- A cold feed throttled to $p_{drum}$ would barely vaporize. The heater sets $h_F$ (that is, $T_F$) and therefore the **fraction vaporized and the product compositions**: it is the main control handle for the flash.
- Heating under pressure, before the valve, avoids vaporizing inside the heater tubes, which would cause poor heat transfer, vapor lock and two-phase flow problems. The flash then happens in one controlled step at the drum inlet.
- It also allows a single equilibrium stage to work at the chosen $T_{drum}$ and $p_{drum}$. Degrees of freedom: with the feed fixed, the heater duty $Q_H$ (or $T_F$) is one of the two specifications needed.`,
          answer: String.raw`Pump → heater → valve → drum (demister, V at top, L at bottom). The heater adds the enthalpy that the isenthalpic valve converts into vaporization; $Q_H$ sets $h_F$ and so V/F.` },
        { id: "2020-21-Q5d", label: "(d)", marks: "10",
          topic: "flash", sub: "Benzene–toluene flash with α = 2.4",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q2a", "practice-flash-P4"],
          text: String.raw`A mixture that is 40 mole % benzene and 60 mole % toluene is to be flashed in a flash distillation system. Feed is 100 kg moles/day. We desire a liquid product that is 30 mole % benzene. The relative volatility is 2.4. Determine (i) vapor composition, (ii) liquid flow rate.`,
          solution: String.raw`**Given:** $z = 0.40$, $F = 100$ kmol/day, $x = 0.30$, $\alpha = 2.4$.

**Find:** $y$ and $L$.

**Assumptions:** equilibrium flash; α constant.

1. **(i) Vapor in equilibrium with the liquid:**
$$y = \frac{\alpha x}{1+(\alpha-1)x} = \frac{2.4(0.30)}{1 + 1.4(0.30)} = \frac{0.72}{1.42} = 0.507$$
2. **Fraction vaporized** (lever rule, from $Fz = Lx + Vy$):
$$\frac{V}{F} = \frac{z - x}{y - x} = \frac{0.40 - 0.30}{0.507 - 0.30} = 0.483$$
3. **(ii) Liquid flow:**
$$L = F(1 - V/F) = 100(0.517) = 51.7\ \mathrm{kmol/day}, \qquad V = 48.3\ \mathrm{kmol/day}$$
4. **Check:** $51.7(0.30) + 48.3(0.507) = 15.5 + 24.5 = 40.0$ kmol/day of benzene, which matches the feed.

**Operating line:** $y = -(L/V)x + (F/V)z$, with slope $-L/V = -1.07$. It runs from $(z, z)$ to the equilibrium point.

![Flash McCabe–Thiele diagram: α = 2.4 equilibrium curve, operating line from (0.4, 0.4) with slope −1.07 to (0.30, 0.507)](fig/2020-21-Q5d-sol.svg)`,
          answer: String.raw`(i) $y = 0.507$ benzene; (ii) $L = 51.7$ kmol/day (V/F = 0.483, V = 48.3 kmol/day).` } ] },
    { id: "2020-21-Q6", q: 6, section: "B", compulsory: false,
      stem: String.raw`Answer the followings for column distillation:`,
      parts: [
        { id: "2020-21-Q6a", label: "(a)", marks: "8",
          topic: "column-balances", sub: "Purposes of reflux and boilup",
          type: "theory", syllabus: "in", repeats: ["2016-17-Q1b"],
          text: String.raw`What are the purposes of reflux and boilup?`,
          solution: String.raw`**Background (slides, cascade to column):** a simple flash cascade gives a pure top product only with large losses of intermediate streams. Returning streams countercurrently removes those losses. Reflux and boilup are the end versions of these returned streams.

**Reflux** (part of the condensed overhead $L_0$ returned to the top tray)
- Supplies the **liquid phase in the rectifying (enriching) section**. Without it there is no liquid above the feed to contact the rising vapor, and no countercurrent cascade.
- The liquid washes the heavy component out of the rising vapor, giving an enriched distillate $x_D$.
- Replaces the intermediate condensers of the flash cascade: all the cooling is done at one temperature in the condenser.
- $R = L_0/D$ is the control variable: higher R gives fewer stages but more condenser and reboiler duty. $R$ between $R_{min}$ (infinite stages) and total reflux ($N_{min}$).

**Boilup** (vapor $\bar{V}$ generated in the reboiler and returned to the bottom of the column)
- Supplies the **vapor phase in the stripping section** below the feed, to strip the light component out of the descending liquid and give a pure bottoms $x_B$.
- Supplies all the heat to the column. It replaces the intermediate reboilers of the flash cascade.
- The boilup ratio $\bar{V}/B$ sets the stripping operating line slope $\bar{L}/\bar{V}$.

**Together:** they create the countercurrent L and V flows on every stage, so that a whole column is a series of equilibrium contacts. This allows *both* products to be pure, unlike a single flash or a simple flash cascade, which give one pure product and large intermediate losses.`,
          answer: String.raw`Reflux provides the liquid for the enriching section (purifies the distillate); boilup provides the vapor and heat for the stripping section (purifies the bottoms). Together they make the countercurrent cascade, with R and $\bar V/B$ as control handles.` },
        { id: "2020-21-Q6b", label: "(b)", marks: "4",
          topic: "column-balances", sub: "Why constant-pressure rather than isothermal columns",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Explain the reason why a constant pressure distillation column is preferable to an isothermal distillation system.`,
          solution: String.raw`- Each stage must be at the bubble point of its liquid. For a binary at fixed P the phase rule gives $F = 2$, so fixing P makes T a function of composition. A temperature gradient (hot reboiler, cold condenser) therefore appears **automatically** as composition changes from stage to stage.
- An isothermal column would need the **pressure to change from stage to stage** to keep each stage at its bubble point at one T. That means compressing the vapor and throttling the liquid between every pair of stages: a compressor on every stage, high capital and power cost, and a complex design.
- At constant pressure all the heat enters in the reboiler and leaves in the condenser. One shell can hold all the stages, with only a small hydraulic pressure drop.
- Changing temperature with heat exchangers is much cheaper than changing pressure with compressors (Wankat ch. 3).`,
          answer: String.raw`At fixed P, T falls naturally up the column as composition changes. An isothermal column would need a different pressure on each stage, with compressors and valves between stages, which is costly and complex.` },
        { id: "2020-21-Q6c", label: "(c)", marks: "11",
          topic: "mccabe-thiele", sub: "CMO: statement, need, derivation and validity check",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`State what CMO is, discuss shortly the necessity of CMO, and determine if CMO is valid in a given situation.`,
          solution: String.raw`**Statement.** Constant molal overflow: within each column section the molar liquid and vapor flows do not change from stage to stage:

$$L_1 = L_2 = \dots = L,\quad V_1 = V_2 = \dots = V;\qquad \bar{L}_f = \bar{L}_{f+1} = \dots = \bar{L},\quad \bar{V} = \text{const}$$

Each mole of vapor that condenses on a tray releases just enough heat to vaporize one mole of liquid.

**Necessity**
- With CMO the energy balances are satisfied automatically. Only mass balances and equilibrium are needed, so each operating line is a **straight line**: $y = (L/V)x + (1 - L/V)x_D$ and $y = (\bar{L}/\bar{V})x - (\bar{L}/\bar{V}-1)x_B$.
- This makes the Lewis and McCabe–Thiele methods possible, together with the q-line, $R_{min}$ and Kremser-type shortcuts. Without CMO the flows must be found stage by stage from the energy balances (enthalpy–composition, or Ponchon–Savarit), which takes much more work.

**Derivation (enriching stage j, adiabatic column):**
- Mass balance: $V_{j+1} + L_{j-1} = V_j + L_j$
- Energy balance: $V_{j+1}H_{j+1} + L_{j-1}h_{j-1} = V_jH_j + L_jh_j$

Assume (slides): (1) the column is adiabatic; (2) sensible heat is negligible, so $h_{j-1} \approx h_j = h$ and $H_{j+1} \approx H_j = H$; (3) the molar latent heat $\lambda = H - h$ does not depend on composition (heat of mixing negligible). Eliminating $L_{j-1}$ with the mass balance:

$$V_{j+1}H + (V_j + L_j - V_{j+1})h = V_jH + L_jh \Rightarrow (V_{j+1} - V_j)(H - h) = 0 \Rightarrow V_{j+1} = V_j$$

and then $L_{j-1} = L_j$. The same steps apply in the stripping section.

**Checking validity for a given system**
1. Compare molar latent heats: $\lambda_A M_A$ against $\lambda_B M_B$. The ratio should be within about 10%.
2. Check that sensible heat (about $C_p\,\Delta T_{column}$) is small compared with λ.
3. Check that the heat of mixing is small and that the column is insulated.

**Example (Çengel Table A-2, normal boiling points):**

| Component | λ, kJ/kg | M | λ, kJ/kmol |
|---|---|---|---|
| Water | 2257 | 18.015 | 40,660 |
| Ethanol | 838.3 | 46.07 | 38,620 |
| Methanol | 1100 | 32.042 | 35,250 |

- Ethanol–water: $38{,}620/40{,}660 = 0.95$, about 5% apart. Sensible heat over 100 → 78°C is about $75.4 \times 22 \approx 1.7$ MJ/kmol (about 4% of λ). **CMO is acceptable.**
- Methanol–water: 13% apart, so CMO is only approximate. It is still widely used, since the errors partly cancel.

A mass-basis comparison would be misleading (ethanol 838 against water 2257 kJ/kg). CMO is about molar latent heats.`,
          answer: String.raw`CMO means L and V are constant within each section; it holds when molar λ is equal, sensible heat and heat of mixing are negligible, and the column is adiabatic. It makes the operating lines straight. Check: ethanol–water λ = 38.6 against 40.7 MJ/kmol (within 5%), so CMO is valid.` },
        { id: "2020-21-Q6d", label: "(d)", marks: "6+6",
          topic: "mccabe-thiele", sub: "Feed-line slopes: superheated vapor and subcooled liquid",
          type: "numerical", syllabus: "in", repeats: ["2011-12-Q6a", "practice-mccabe-thiele-P2a"],
          text: String.raw`Show the flow profile, calculate the feed line slope, and compare the feed lines for the following cases:
(i) A superheated vapor feed where 1 mole of liquid will vaporize on the feed stage for each 9 moles of feed input.
(ii) A liquid feed subcooled by 35°F. Average liquid heat capacity is 30 Btu/lb-mole·°F and λ = 15000 Btu/lb-mole.`,
          solution: String.raw`**Definitions (slides):** $q = \dfrac{\bar{L}-L}{F} \approx \dfrac{H - h_F}{H - h}$, with $\bar{L} = L + qF$, $\bar{V} = V - (1-q)F$. The feed line is $y = \dfrac{q}{q-1}x - \dfrac{z}{q-1}$, with slope $q/(q-1)$, passing through $(z, z)$.

![Flow profiles at the feed stage: superheated vapor feed vaporizes some liquid; subcooled liquid feed condenses some vapor](fig/2020-21-Q6d-sol.svg)

**(i) Superheated vapor**
1. The feed cools to saturation by vaporizing liquid on the feed stage: 1 mol of liquid per 9 mol of feed. So $\bar{L} = L - F/9$ and $V = \bar{V} + F + F/9$.
2. $q = (\bar{L} - L)/F = -1/9 = -0.111$
3. Slope $= \dfrac{q}{q-1} = \dfrac{-0.111}{-1.111} = 0.100$

**(ii) Subcooled liquid**
1. The feed must be heated to its bubble point by condensing vapor:
$$q = \frac{H - h_F}{H - h} = \frac{\lambda + C_p\Delta T}{\lambda} = 1 + \frac{30(35)}{15000} = 1.070$$
   - So $\bar{L} = L + 1.07F$ and $V = \bar{V} - 0.07F$: 0.07 mol of vapor condenses per mol of feed.
2. Slope $= \dfrac{1.070}{0.070} = 15.29$

**Comparison**

| | Feed (i) superheated vapor | Feed (ii) subcooled liquid |
|---|---|---|
| q | −0.111 (q < 0) | 1.070 (q > 1) |
| Slope q/(q − 1) | +0.100 (between 0 and 1, flatter than the diagonal) | +15.3 (greater than 1, close to vertical) |
| Direction from (z, z) | down to the left, close to horizontal (saturated vapor q = 0 is horizontal) | up to the right, close to vertical (saturated liquid q = 1 is vertical) |
| Effect | $\bar{L} < L$, $V > \bar{V} + F$ | $\bar{L} > L + F$, $V < \bar{V}$ |

![Feed lines through z: superheated q = −0.111 (slope 0.1) and subcooled q = 1.07 (slope 15.3), with the vertical saturated-liquid line](fig/2020-21-Q6d-sol2.svg)

**Exam tip:** "1 mol vaporizes per n mol of feed" gives $q = -1/n$. "1 mol condenses per n mol of feed" gives $q = 1 + 1/n$.`,
          answer: String.raw`(i) $q = -1/9 = -0.111$, slope 0.100; (ii) $q = 1.07$, slope 15.3. Feed (i) lies just above horizontal, feed (ii) just right of vertical.` } ] },
    { id: "2020-21-Q7", q: 7, section: "B", compulsory: false,
      stem: String.raw`Answer the followings for column distillation and advanced distillation:`,
      parts: [
        { id: "2020-21-Q7a", label: "(a)", marks: "23",
          topic: "mccabe-thiele", sub: "Ethanol–propanol, α = 2.1, L/D = 3, q = 0.4: stages and feed",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q3a", "practice-mccabe-thiele-P4a"],
          text: String.raw`Find the number of stages and the best feed location for a column separating ethanol and propanol, α = 2.1. Feed composition = 0.48, $x_D$ = 0.96, $x_B$ = 0.04. Constant molal overflow can be assumed, and reflux is a saturated liquid. Column has a total condenser and a partial reboiler. Pressure is 101.3 kPa. Reflux ratio and feed quality are 3 and 0.4, respectively.`,
          solution: String.raw`**Given:** $\alpha = 2.1$, $z = 0.48$, $x_D = 0.96$, $x_B = 0.04$, $L/D = 3$, $q = 0.4$; total condenser, partial reboiler.

**Find:** $N$ and the optimum feed stage.

**Assumptions:** CMO; constant α; saturated-liquid reflux; basis F = 1 mol.

1. **Equilibrium:** $y = 2.1x/(1+1.1x)$, inverted as $x = y/(2.1 - 1.1y)$.
2. **Top operating line:**
$$\frac{L}{V} = \frac{R}{R+1} = 0.75 \Rightarrow y = 0.75x + 0.25(0.96) = 0.75x + 0.24$$
3. **Feed line:** slope $q/(q-1) = 0.4/(-0.6) = -0.667$; $y = -0.667x + 0.80$.
4. **Intersection of the top line and the feed line:** $0.75x + 0.24 = -0.667x + 0.80$, so $x = 0.3953$, $y = 0.5365$.
5. **Bottom operating line**, from $(x_B, x_B)$ through the intersection. As a check with flows: $D = (0.48-0.04)/(0.96-0.04) = 0.478$, $L = 1.435$, $V = 1.913$; $\bar{L} = L + qF = 1.835$; $\bar{V} = V - (1-q)F = 1.313$; $\bar{L}/\bar{V} = 1.397$.
$$y = 1.397x - 0.397(0.04) = 1.397x - 0.0159$$
6. **Step off from $x_D$**, switching to the bottom line at the first step that crosses $x = 0.3953$ (optimum feed):

| Stage | $y$ | $x$ | Line used below |
|---|---|---|---|
| 1 | 0.9600 | 0.9195 | top |
| 2 | 0.9297 | 0.8629 | top |
| 3 | 0.8872 | 0.7892 | top |
| 4 | 0.8319 | 0.7021 | top |
| 5 | 0.7666 | 0.6099 | top |
| 6 | 0.6975 | 0.5233 | top |
| 7 | 0.6325 | 0.4504 | top |
| 8 (feed) | 0.5778 | 0.3946 | switch |
| 9 | 0.5354 | 0.3544 | bottom |
| 10 | 0.4793 | 0.3047 | bottom |
| 11 | 0.4099 | 0.2486 | bottom |
| 12 | 0.3314 | 0.1910 | bottom |
| 13 | 0.2510 | 0.1376 | bottom |
| 14 | 0.1764 | 0.0925 | bottom |
| 15 | 0.1134 | 0.0574 | bottom |
| 16 | 0.0643 | 0.0317 | passes $x_B$ |

Fraction of the last stage = $(0.0574 - 0.04)/(0.0574 - 0.0317) = 0.68$.

**Result:** 15.7 equilibrium stages, so **16 stages: 15 equilibrium trays plus the partial reboiler**, with the **optimum feed on stage 8** from the top.

![McCabe–Thiele diagram for ethanol–propanol at α = 2.1, L/D = 3, q = 0.4: about 15.7 stages with the feed on stage 8](fig/2020-21-Q7a-sol.svg)

**Exam tip:** with q = 0.4 the feed line slopes down to the left. The switch to the bottom line happens at x = 0.395, not at z = 0.48.`,
          answer: String.raw`Top line $y = 0.75x + 0.24$; bottom line $y = 1.397x - 0.0159$; 15.7 equilibrium stages, so 16 (15 trays + partial reboiler), optimum feed on stage 8 from the top.` },
        { id: "2020-21-Q7b", label: "(b)", marks: "12",
          topic: "advanced-distillation", sub: "McCabe–Thiele sketches: side stream, stripping column, total reflux, Murphree efficiency",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`With a hand-drawing, show the typical McCabe-Thiele diagram-analysis for each of the following systems/cases: (i) Column with one side stream (ii) Stripping column (iii) Column with total reflux (iv) Column with a given Murphree stage vapor efficiency of 0.75.`,
          solution: String.raw`The diagrams below were computed for an illustrative system with α = 2.5; the shapes are what the hand sketches should show.

### (i) Column with one liquid side stream
- A side draw S (saturated liquid at $x_S$, above the feed) splits the rectifying part into two sections, giving three operating lines.
  - Top: $y = (L/V)x + Dx_D/V$
  - Middle: $y = \dfrac{L - S}{V}x + \dfrac{Dx_D + Sx_S}{V}$ (the slope falls because the liquid falls by S)
  - Bottom: through $(x_B, x_B)$
- The top and middle lines meet on the vertical line $x = x_S$ (saturated-liquid draw). The middle and bottom lines meet on the feed line. The side draw must be taken from the stage whose liquid is at $x_S$.

![Side-stream column: top, middle and bottom operating lines; the top and middle lines meet at x = xS](fig/2020-21-Q7b-sol-i.svg)

### (ii) Stripping column
- The feed (saturated liquid) enters at the top; there is no condenser and no reflux. The vapor leaving the top is the distillate, so $D = V$.
- Only the stripping line is used: $y = (\bar{L}/\bar{V})x - (\bar{L}/\bar{V}-1)x_B$, with slope above 1 and set by the boilup ratio. It ends at the feed line at $x = z$; that point gives $y_D$.
- Step from the reboiler, $(x_B, x_B)$, up to $x = z$.

![Stripping column: one operating line above the diagonal end at xB, stages stepped from the reboiler up to the feed at the top](fig/2020-21-Q7b-sol-ii.svg)

### (iii) Total reflux
- $D = B = F = 0$, $L/V = \bar{L}/\bar{V} = 1$: both operating lines lie on the 45° line.
- Steps between the equilibrium curve and the diagonal give the **minimum number of stages $N_{min}$**. The feed and the q-line do not matter. (Here α = 2.5, $x_D = 0.95$, $x_B = 0.05$: $N_{min} \approx 6.5$, which matches Fenske: $\ln(361)/\ln 2.5 = 6.4$.)

![Total reflux: staircase between the equilibrium curve and the 45° line, about 6.5 stages](fig/2020-21-Q7b-sol-iii.svg)

### (iv) Murphree vapor efficiency $E_{MV} = 0.75$
$$E_{MV} = \frac{y_n - y_{n+1}}{y_n^* - y_{n+1}}$$
- On each vertical from the operating line (point A, $y_{n+1}$) to the equilibrium curve (point C, $y_n^*$), the actual $y_n$ (point B) lies 75% of the way: AB = 0.75 AC.
- Joining the B points gives the **pseudo-equilibrium curve**, $y = y_{op} + 0.75(y^* - y_{op})$. Step between the operating line and this curve; each step is a **real** tray. A partial reboiler is usually taken as a full equilibrium stage, so it is stepped to the true curve.

![Murphree efficiency 0.75: pseudo-equilibrium curve drawn 75% of the way from the operating line to the equilibrium curve, with steps to it](fig/2020-21-Q7b-sol-iv.svg)`,
          answer: String.raw`(i) Three operating lines; the top and middle lines meet at x = x_S. (ii) Only a stripping line from $(x_B,x_B)$ to the feed line at z. (iii) Operating lines on y = x, giving $N_{min}$. (iv) Step to a pseudo-equilibrium curve at 75% of the operating-line-to-equilibrium distance; steps are real trays.` } ] },
    { id: "2020-21-Q8", q: 8, section: "B", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "2020-21-Q8a", label: "(a)", marks: "6",
          topic: "batch", sub: "Advantages of batch over continuous distillation",
          type: "theory", syllabus: "in", repeats: ["2013-14-Q3a", "2015-16-Q7a", "2022-23-Q8a", "practice-batch-P6a"],
          text: String.raw`Discuss the advantages of batch distillation compared to continuous distillation.`,
          solution: String.raw`- **Flexibility:** one column can separate many different feeds and products at different times (campaigns). Product purity can be changed simply by changing the reflux policy.
- **Small or occasional throughput:** economical when the amount is small, or when distillation is needed only occasionally or the plant does not run continuously (a batch is finished in one or two shifts, 8–16 h).
- **Multicomponent cuts from one column:** several products (light cut, intermediate slop cuts, heavy) are taken from the top in sequence. A continuous plant needs about C − 1 columns for C products.
- **Varying feeds:** it handles feeds whose composition changes from batch to batch.
- **Dirty or difficult feeds:** heavy residues, solids, tars and polymers stay in the still pot and are dumped and cleaned after each batch.
- **Lower capital cost** for small capacities: a still, a column and a condenser, with no feed preheat train.
- **Batch identity and traceability:** each batch is identifiable, which matters in pharmaceuticals, fine chemicals and food (quality control, regulations).

The disadvantages, for balance: more energy per kmol of product for multistage systems, varying product composition, labor, and down time for charging, heating and cleaning.`,
          answer: String.raw`Flexible (many products in one column), suited to small or occasional or varying feeds, several cuts from one column, handles dirty residues, low capital cost, and batch traceability.` },
        { id: "2020-21-Q8b", label: "(b)", marks: "6",
          topic: "batch", sub: "Energy use: batch vs continuous",
          type: "theory", syllabus: "in", repeats: ["2016-17-Q1g", "practice-batch-P7a"],
          text: String.raw`Assuming that either batch or continuous distillation could be used, which would use less energy? Explain why.`,
          solution: String.raw`**For multistage (column) separations, continuous distillation uses less energy.**
- A continuous column runs at steady state at a chosen reflux close to the optimum (1.05–1.25 $R_{min}$). Its feed enters at the optimum stage, and heat integration is possible (feed–bottoms exchange, heat pumps).
- In multistage batch distillation the still composition keeps falling. To keep $x_D$ up, the reflux ratio must rise during the run (variable reflux), or the average reflux is high (constant reflux, with $x_D$ falling). The column effectively always works as an enriching column with the "feed" at the bottom. The whole charge must also be heated from cold every batch, and that heat is lost at dumping.

**Exceptions (slide MCQ, Wankat ch. 9):** for a *single stage* the batch is better.
- **Simple batch (Rayleigh) against a single continuous flash:** in the flash, all the vapor is in equilibrium with the final, leanest liquid. In the batch, early vapor is richer. For the same separation, the batch vaporizes less, so it uses less energy.
- **Batch steam distillation against continuous steam distillation:** the same argument applies. The continuous still always operates at the final, lowest organic concentration, so it needs more steam.

So the slide question "which systems need less energy in batch?" is answered by "a and c" (simple batch against one-stage continuous, and batch steam against continuous steam distillation), but not multistage batch against multistage continuous.`,
          answer: String.raw`Multistage: continuous uses less (steady optimum reflux, heat integration; batch needs rising reflux and reheating). Single-stage: simple batch and batch steam distillation use less than their continuous counterparts (slide answer: "a and c").` },
        { id: "2020-21-Q8c", label: "(c)", marks: "23",
          topic: "batch", sub: "Methanol–water batch, still + 1 stage, constant L0/D = 1.85: Rayleigh",
          type: "numerical", syllabus: "in", repeats: ["2015-16-Q7b", "practice-batch-P4a"],
          text: String.raw`We wish to use a distillation system with a still pot plus a column with one equilibrium stage to batch distill a mixture of methanol and water. A total condenser is used. The feed is 57 mole % methanol. We desire a final bottoms concentration of 15 mole % methanol. Pressure is 1 atm. Reflux is a saturated liquid, and $L_0/D$ is constant at 1.85. Find $W_{final}$, D, and $x_{D,avg}$. Calculate on the basis of 1 kg mole of feed.

VLE data for methanol–water, mole % methanol at 1 atm:

| Liquid | 0 | 2.0 | 4.0 | 6.0 | 8.0 | 10.0 | 15.0 | 20.0 | 30.0 | 50.0 | 70.0 | 90.0 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Vapor | 0 | 13.4 | 23.0 | 30.4 | 36.5 | 41.8 | 51.7 | 57.9 | 66.5 | 77.9 | 87.0 | 95.8 | 100 |`,
          solution: String.raw`**Given:** $F = 1$ kmol, $x_F = 0.57$, $x_{W,final} = 0.15$; still pot plus 1 equilibrium stage (2 equilibrium contacts); total condenser; $L_0/D = 1.85$.

**Find:** $W_{final}$, $D_{total}$, $x_{D,avg}$.

**Assumptions:** CMO; negligible holdup in the column and accumulator; equilibrium from the paper's table with linear interpolation; constant reflux ratio (so $x_D$ falls during the run).

1. **Operating line** (constant reflux, slides):
$$\frac{L}{V} = \frac{L_0/D}{1 + L_0/D} = \frac{1.85}{2.85} = 0.649, \qquad y = 0.649x + 0.351x_D$$
2. **Relation between $x_D$ and $x_W$.** For a trial $x_D$: stage 1 gives $x_1$ from $y_1 = x_D$. The operating line gives $y_W = 0.649x_1 + 0.351x_D$. The still pot gives $x_W$ from $y_W$.

| $x_W$ | $x_D$ | $1/(x_D - x_W)$ |
|---|---|---|
| 0.15 | 0.725 | 1.740 |
| 0.20 | 0.766 | 1.766 |
| 0.25 | 0.793 | 1.843 |
| 0.30 | 0.817 | 1.935 |
| 0.36 | 0.836 | 2.101 |
| 0.40 | 0.849 | 2.228 |
| 0.45 | 0.865 | 2.411 |
| 0.50 | 0.881 | 2.628 |
| 0.57 | 0.898 | 3.048 |

   - Example, $x_D = 0.836$: $x_1 = 0.625$, $y_W = 0.699$, $x_W = 0.360$.
3. **Rayleigh equation** (multistage, slides):
$$\ln\frac{W_{final}}{F} = -\int_{x_{W,final}}^{x_F}\frac{dx_W}{x_D - x_W}$$
   - Simpson's rule on the table (3 points: 0.15, 0.36, 0.57): $\frac{0.42}{6}[1.740 + 4(2.101) + 3.048] = 0.923$.
   - Fine numerical integration gives **0.919**.
4. **Products** (with area = 0.919):
$$W_{final} = 1.0\,e^{-0.919} = 0.399\ \mathrm{kmol}, \qquad D_{total} = 1 - 0.399 = 0.601\ \mathrm{kmol}$$
$$x_{D,avg} = \frac{Fx_F - W_{final}x_{W,final}}{D_{total}} = \frac{0.57 - 0.399(0.15)}{0.601} = 0.849$$

These agree with the slide solution (area 0.925, W = 0.397, $x_{D,avg}$ = 0.847).

![McCabe–Thiele for batch distillation: two equilibrium contacts at the start (xD = 0.898, xW = 0.57) and the end (xD = 0.725, xW = 0.15), operating lines of slope 0.649](fig/2020-21-Q8c-sol.svg)

![Rayleigh integrand 1/(xD − xW) against xW from 0.15 to 0.57; the shaded area is 0.919](fig/2020-21-Q8c-sol2.svg)

**Exam tip:** at constant reflux, $x_D$ changes. Build the $x_D$–$x_W$ table with parallel operating lines (same slope L/V, different $x_D$), then integrate $1/(x_D - x_W)$.`,
          answer: String.raw`L/V = 0.649; $\int dx_W/(x_D-x_W) = 0.919$; $W_{final} = 0.399$ kmol, $D_{total} = 0.601$ kmol, $x_{D,avg} = 0.849$ (per 1 kmol feed).` } ] }
  ]
});
