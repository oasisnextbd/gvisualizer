QB.paper({ year: "Practice", set: "Crystallization", date: "", marks: 0, practice: true,
  rules: String.raw`Crystallization: the slide problems (theoretical yield, the copperas Swenson–Walker crystallizer, the McCabe ΔL-law seed-growth illustration), MSH 5th ed. chapter 27 worked examples and problems (hydrate yield, vacuum-crystallizer enthalpy balance, MSMPR crystal size distribution, recrystallization with purge) and exam-style questions on yield, cooling duty, vacuum crystallizers, MSMPR kinetics, nucleation and the RRS size distribution.`,
  questions: [
    { id: "practice-crystallization-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-crystallization-P1", label: "", marks: "", topic: "crystallization",
        sub: "Theoretical yield from the slide yield formula (40 → 10 kg per 100 kg water)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Crystallization slides (Md Kamrul Hasan), "Yield formula" example slide; Dr. Sowgath's crystallizer slides, "Yield"`,
        text: String.raw`A solution contains 40 kg of anhydrous solute per 100 kg of water. On cooling, the solubility of the solute in the final mother liquor is 10 kg per 100 kg of water. The total amount of solvent is 1000 kg of water. Using the yield formula

$$\text{Yield} = \frac{x_1 - x_2}{100}\,W_s$$

find the theoretical yield of crystals. State the conditions under which this formula is exact.`,
        solution: String.raw`**Given:** $x_1 = 40$ kg solute/100 kg water (feed), $x_2 = 10$ kg solute/100 kg water (solubility at the final temperature), $W_s = 1000$ kg water.

**Find:** theoretical crystal yield.

**Assumptions:** the mother liquor leaves saturated at the final temperature (equilibrium reached, supersaturation fully discharged); no solvent evaporates; the crystals are **anhydrous** (they carry no water of crystallization).

1. **Solute balance per 100 kg water:** the solution held $x_1 = 40$ kg; at the end it can hold only $x_2 = 10$ kg. The difference leaves the liquid as crystals:
$$x_1 - x_2 = 40 - 10 = 30\ \text{kg per 100 kg water}$$

2. **Scale to the batch:**
$$\text{Yield} = \frac{30}{100}(1000) = 300\ \text{kg crystals}$$

3. **When the formula is exact.** It assumes that all the water stays in the mother liquor. This is true only if
   - the crystals are anhydrous, and
   - no water evaporates during cooling.

   If the crystals are a hydrate, water of crystallization leaves with them, so less water is left to hold solute and the true crop is larger. A solute balance plus a water balance (see Problem P9) gives
$$C = \frac{R\,W_s\,(x_1 - x_2)}{100 - (R-1)\,x_2}, \qquad R = \frac{M_{hydrate}}{M_{anhydrous}}$$
   which reduces to the slide formula when $R = 1$. For example, if the solute crystallized as Na₂SO₄·10H₂O ($R = 322.2/142.0 = 2.268$), the same data would give $C = 2.268(1000)(30)/(100 - 1.268 \times 10) = 779$ kg of hydrate crystals.

**Result:** 300 kg of (anhydrous) crystals from 1000 kg water; this is the theoretical (maximum) yield. The actual yield is lower because of solute left in retained mother liquor, filtration and handling losses, and incomplete crystallization (slide note).`,
        answer: String.raw`Yield = (40 − 10)/100 × 1000 = **300 kg** of crystals (exact only for anhydrous crystals and no evaporation).` } ] },

    { id: "practice-crystallization-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-crystallization-P2", label: "", marks: "", topic: "crystallization",
        sub: "Swenson–Walker copperas crystallizer, cooling water 60 → 70 °F: gpm and sections", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Crystallization slides (Md Kamrul Hasan), "Swenson–Walker crystallizer, stepwise solution" (10 slides); Dr. Sowgath's crystallizer slides; Badger & Banchero, Example 11-2 with Fig. 11-9`,
        text: String.raw`A Swenson–Walker crystallizer is to be used to produce 1 ton/h of copperas (FeSO₄·7H₂O) crystals by cooling a saturated solution. The saturated solution enters the crystallizer at 120 °F, and the slurry leaving the crystallizer is at 80 °F. The solubility data are given in Fig. 11-9 (Badger & Banchero; curve D is plotted as parts hydrate FeSO₄·7H₂O per 100 parts excess water). Cooling water enters the crystallizer jacket at 60 °F and leaves at 70 °F. The overall heat-transfer coefficient is 35 Btu/(h·ft²·°F), and there are 3.5 ft² of cooling surface per foot of crystallizer length. Average specific heat of the initial solution is 0.70 Btu/(lb·°F); heat of solution of FeSO₄·7H₂O at 18 °C = −4400 cal/g formula weight.

(a) Estimate the cooling water required in gpm.

(b) Determine the number of crystallizer sections to be used.`,
        solution: String.raw`**Given:** crystal production $C = 1$ ton/h $= 2000$ lb/h FeSO₄·7H₂O; feed saturated at 120 °F; magma out at 80 °F; water 60 → 70 °F; $U = 35$ Btu/(h·ft²·°F); 3.5 ft² per ft of length; $c_p = 0.70$ Btu/(lb·°F); $\Delta H_{soln} = -4400$ cal/g mol.

**Find:** (a) cooling water, gpm; (b) number of 10-ft sections.

**Assumptions:** magma leaves in equilibrium (mother liquor saturated at 80 °F); no evaporation from the open trough; heat of crystallization at 18 °C may be used at 80 °F; countercurrent flow of water and solution; standard section length 10 ft.

1. **Solubility (Fig. 11-9, curve D):** reading up from 120 °F and 80 °F to curve D and across to the left axis:

| $T$, °F | parts FeSO₄·7H₂O per 100 parts excess water |
|---|---|
| 120 | 140 |
| 80 | 74 |

2. **Yield per 100 lb excess water:** the excess (free) water stays in the liquor, so
$$140 - 74 = 66\ \text{lb hydrate per 100 lb excess water}$$
and the feed that carries this is $100 + 140 = 240$ lb of saturated solution.

3. **Feed rate:**
$$F = 2000\left(\frac{240}{66}\right) = 7273\ \text{lb/h}\quad(\text{excess water } 3030,\ \text{hydrate } 4242\ \text{lb/h})$$

4. **Sensible heat removed:**
$$Q_s = F c_p \Delta T = 7273(0.70)(120 - 80) = 203{,}600\ \text{Btu/h}$$

5. **Heat of crystallization:** $M$(FeSO₄·7H₂O) $= 278.0$. Dissolution absorbs 4400 cal/g mol, so crystallization releases it:
$$\lambda_c = \frac{4400}{278.0}(1.8) = 28.5\ \text{Btu/lb}, \qquad Q_c = 2000(28.5) = 57{,}000\ \text{Btu/h}$$
(1 cal/g = 1.8 Btu/lb.)

6. **Total duty and cooling water (a):**
$$Q = 203{,}600 + 57{,}000 = 260{,}600\ \text{Btu/h}$$
$$\dot V = \frac{Q}{(8.34\ \text{lb/gal})(60\ \text{min/h})(1)(70 - 60)} = \frac{260{,}600}{5004} = 52.1\ \text{gpm}$$

7. **Mean temperature difference (countercurrent):** $\Delta T_1 = 120 - 70 = 50$ °F, $\Delta T_2 = 80 - 60 = 20$ °F,
$$\Delta T_{lm} = \frac{50 - 20}{\ln(50/20)} = 32.7\ ^\circ\mathrm{F}$$

8. **Area, length and sections (b):**
$$A = \frac{Q}{U\Delta T_{lm}} = \frac{260{,}600}{35(32.7)} = 227\ \mathrm{ft^2}, \qquad L = \frac{227}{3.5} = 65\ \text{ft}$$
$$N = \frac{65}{10} = 6.5 \;\Rightarrow\; \text{use 7 sections}$$

**Result:** 52 gpm of cooling water; 227 ft² of cooling surface = 65 ft of trough, i.e. seven 10-ft sections.

> Slide check: the slide numbers (7270 lb/h, 203,500 + 57,000 = 260,500 Btu/h, 52.0 gpm, ΔT_lm = 32.7 °F, 227.5 ft², 65 ft, 7 sections) agree with this solution and with Badger & Banchero (227 ft², seven sections). One small wording slip: the slides say "140 lb FeSO₄ per 100 lb excess H₂O"; curve D gives lb of **hydrate** FeSO₄·7H₂O per 100 lb excess water, which is why the difference (66 lb) is directly the hydrate crop.

**Exam tip:** the past papers use the same plant with water 50 → 75 °F (2014-15 Q8a, 2015-16 Q1a). Only steps 6–8 change; the material balance and the 260,600 Btu/h duty stay the same.`,
        answer: String.raw`Feed 7273 lb/h; Q = 260,600 Btu/h → (a) **52 gpm** of water; (b) ΔT_lm = 32.7 °F, A = 227 ft², L = 65 ft → **7 sections** of 10 ft.` } ] },

    { id: "practice-crystallization-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-crystallization-P3", label: "", marks: "", topic: "crystallization",
        sub: "McCabe ΔL law: product size distribution from seed crystals (mp/ms = 10)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Dr. Sowgath's crystallizer slides (Foust et al., Illustration 19.5 with Fig. 19.31)`,
        text: String.raw`A solute which forms cubic crystals is to be precipitated from solution at a rate of 10,000 lb of solid (dry basis) per hour using 1000 lb/h of seed crystals. If no nucleation occurs and the seed crystals have the following size distribution, determine the product size distribution.

| Tyler sieve mesh | −48 +65 | −65 +100 | −100 +150 | −150 +200 | −200 +270 |
|---|---|---|---|---|---|
| Weight fraction retained, $\Delta m_s$ | 0.10 | 0.30 | 0.50 | 0.05 | 0.05 |
| Average dimension $D_s$, in. | 0.0099 | 0.0070 | 0.0050 | 0.0035 | 0.0025 |`,
        solution: String.raw`**Given:** seeds $m_s = 1000$ lb/h, product $m_p = 10{,}000$ lb/h, so $m_p/m_s = 10$; seed classes as tabulated; cubic crystals.

**Find:** product size distribution.

**Assumptions:** McCabe ΔL law: every crystal in the same supersaturated liquor grows by the **same** linear increment $\Delta D$ regardless of its size; shape and density do not change; no nucleation and no breakage, so the number of crystals in each class is conserved.

1. **Growth of one class.** A crystal's mass is proportional to $D^3$, so a class of seeds of mass $\Delta m_s$ and size $D_s$ becomes
$$\Delta m_p = \Delta m_s\left(1 + \frac{\Delta D}{D_s}\right)^3, \qquad D_p = D_s + \Delta D$$

2. **Condition for $\Delta D$:**
$$\frac{m_p}{m_s} = \sum \Delta m_s\left(1 + \frac{\Delta D}{D_s}\right)^3 = 10$$
This is solved by trial.

3. **First trial, $\Delta D = 0.005$ in.:**

| $\Delta m_s$ | $D_s$, in. | $(1 + \Delta D/D_s)^3$ | $\Delta m_p$ |
|---|---|---|---|
| 0.10 | 0.0099 | 3.41 | 0.341 |
| 0.30 | 0.0070 | 5.04 | 1.511 |
| 0.50 | 0.0050 | 8.00 | 4.000 |
| 0.05 | 0.0035 | 14.32 | 0.716 |
| 0.05 | 0.0025 | 27.00 | 1.350 |
| | | **sum** | **7.92** |

The sum is below 10, so $\Delta D$ must be larger.

4. **Converged trial, $\Delta D = 0.0058$ in.** (solving exactly gives 0.00579 in.):

| $\Delta m_s$ | $(1 + \Delta D/D_s)^3$ | $\Delta m_p$ | $D_p = D_s + \Delta D$, in. | mass fraction of product | cumulative fraction smaller than $D_p$ |
|---|---|---|---|---|---|
| 0.10 | 3.98 | 0.398 | 0.0157 | 0.040 | 0.960 |
| 0.30 | 6.09 | 1.828 | 0.0128 | 0.183 | 0.777 |
| 0.50 | 10.04 | 5.019 | 0.0108 | 0.502 | 0.275 |
| 0.05 | 18.68 | 0.934 | 0.0093 | 0.093 | 0.182 |
| 0.05 | 36.41 | 1.821 | 0.0083 | 0.182 | 0.000 |
| | **sum** | **10.00** | | **1.000** | |

5. **Interpretation.** The same 0.0058 in. is a 59% increase in size for the largest seeds but a 232% increase for the smallest, so the small seeds gain mass much faster (factor 36 against 4). The product is far more uniform than the seed: sizes now span 0.0083–0.0157 in. (ratio 1.9) instead of 0.0025–0.0099 in. (ratio 4).

![Seed and product size distributions as step plots: each sieve class moves up by the same ΔD = 0.0058 in.](fig/practice-crystallization-P3-sol.svg)

**Result:** $\Delta D = 0.0058$ in.; product: 4.0% at 0.0157 in., 18.3% at 0.0128 in., 50.2% at 0.0108 in., 9.3% at 0.0093 in., 18.2% at 0.0083 in.

> Slide check: the slide tables give $\Delta D = 0.0058$ in. and the same product fractions (0.039, 0.180, 0.504, 0.094, 0.183) and sizes. A few growth factors on the slides are rounded low (first trial 3.37 and 4.94 instead of 3.41 and 5.04, so the sum is 7.89 instead of 7.92; final 3.95 and 6.00 instead of 3.98 and 6.09); the final distribution is unaffected.`,
        answer: String.raw`ΔD ≈ **0.0058 in.**; product sizes 0.0157, 0.0128, 0.0108, 0.0093, 0.0083 in. with mass fractions 0.040, 0.183, 0.502, 0.093, 0.182.` } ] },

    { id: "practice-crystallization-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-crystallization-P4", label: "", marks: "", topic: "crystallization",
        sub: "MgSO₄·7H₂O crop from a 30% solution cooled to 60 °F with 5% evaporation (yield)", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Example 27.1 (with Fig. 27.3)`,
        text: String.raw`A solution consisting of 30 percent MgSO₄ and 70 percent H₂O is cooled to 60 °F. During cooling, 5 percent of the total water in the system evaporates. How many kilograms of crystals are obtained per kilogram of original mixture? (Phase diagram of MgSO₄–H₂O: MSH Fig. 27.3.)`,
        solution: String.raw`**Given:** feed 30% MgSO₄, 70% H₂O; final temperature 60 °F; 5% of the water evaporates. Basis: 1000 kg of feed.

**Find:** crystal crop per kg of feed.

**Assumptions:** the magma reaches equilibrium at 60 °F; the mother liquor is saturated.

1. **Phase diagram (Fig. 27.3):** at 60 °F the stable solid phase is MgSO₄·7H₂O and the saturated mother liquor contains 24.5% MgSO₄ (75.5% H₂O). Molecular weights: MgSO₄ 120.4, MgSO₄·7H₂O 246.5.

2. **Express everything as hydrate + free water.** Total water $= 700$ kg; evaporated $= 0.05(700) = 35$ kg.
$$\text{MgSO₄·7H₂O equivalent} = 300\left(\frac{246.5}{120.4}\right) = 614.3\ \text{kg}$$
$$\text{free water} = 1000 - 35 - 614.3 = 350.7\ \text{kg}$$

3. **Mother liquor composition on the same basis:** 100 kg of mother liquor holds $24.5(246.5/120.4) = 50.17$ kg hydrate and $100 - 50.17 = 49.83$ kg free water.

4. **Free water stays in the liquor**, so the hydrate it can hold is
$$\frac{50.17}{49.83}(350.7) = 353.1\ \text{kg}$$

5. **Crop:**
$$C = 614.3 - 353.1 = 261.2\ \text{kg MgSO₄·7H₂O per 1000 kg feed}$$

**Check:** mother liquor $= 350.7 + 353.1 = 703.8$ kg; crystals + liquor + vapour $= 261.2 + 703.8 + 35 = 1000$ kg ✓.

**Result:** 0.261 kg of MgSO₄·7H₂O crystals per kg of original solution; book answer 261 kg per 1000 kg ✓.

> Why the hydrate basis matters: the crop contains only $261.2(120.4/246.5) = 127.6$ kg of MgSO₄; the other 133.6 kg is water of crystallization that has left the liquor. Treating the crystals as anhydrous (slide formula) would badly misjudge the yield.`,
        answer: String.raw`**0.261 kg** MgSO₄·7H₂O per kg of feed (261 kg per 1000 kg; book 261 kg).` } ] },

    { id: "practice-crystallization-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw`A continuous vacuum crystallizer is fed with a 31 percent MgSO₄ solution. The equilibrium temperature of the magma in the crystallizer is 86 °F (30 °C), and the boiling-point elevation of the solution is 2 °F (1.11 °C). A product magma containing 5 tons (4536 kg) of MgSO₄·7H₂O per hour is obtained. The volume ratio of solid to magma is 0.15; the densities of the crystals and mother liquor are 105 and 82.5 lb/ft³, respectively. (Enthalpy–concentration chart of MgSO₄–H₂O: MSH Fig. 27.4.)`,
      parts: [
        { id: "practice-crystallization-P5a", label: "(a)", marks: "", topic: "crystallization",
          sub: "Vacuum crystallizer MgSO₄: feed temperature, feed rate and evaporation (enthalpy balance)", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Example 27.5 (Figs. 27.4 and 27.13)`,
          text: String.raw`What is the temperature of the feed, the feed rate, and the rate of evaporation?`,
          solution: String.raw`**Given:** feed $c_F = 0.31$; magma at 86 °F; crystals $C = 10{,}000$ lb/h MgSO₄·7H₂O ($c = 0.488$); volume fraction solids 0.15; $\rho_c = 105$, $\rho_{ML} = 82.5$ lb/ft³.

**Find:** feed temperature, feed rate $F$, evaporation $V$.

**Assumptions:** adiabatic operation; the vapour leaves at the pressure whose saturation temperature is 84 °F (86 − 2) and its 2 °F superheat is neglected; points for feed $b$, vapour $a$ and magma $e$ lie on one straight line on the $H$–$x$ chart (centre-of-gravity principle).

1. **Chart values (Fig. 27.4):** vapour = saturated steam at 84 °F, $H_a = 1098$ Btu/lb, $c = 0$. On the 86 °F isotherm in the hydrate + liquor field: mother liquor $f$: $H = -43$ Btu/lb, $c = 0.285$; crystals $d$: $H = -149$ Btu/lb, $c = 0.488$.

2. **Crystal / mother-liquor ratio from the volume fraction:**
$$\frac{C}{ML} = \frac{0.15(105)}{0.85(82.5)} = 0.2246, \qquad ML = \frac{10{,}000}{0.2246} = 44{,}520\ \text{lb/h}$$
Magma $M = 54{,}520$ lb/h.

3. **Magma point $e$:**
$$c_e = \frac{0.2246(0.488) + 0.285}{1.2246} = 0.3222, \qquad H_e = \frac{0.2246(-149) + (-43)}{1.2246} = -62.4\ \text{Btu/lb}$$

4. **MgSO₄ balance (no chart needed):** $0.31F = 0.3222M$
$$F = \frac{0.3222(54{,}520)}{0.31} = 56{,}680\ \text{lb/h}, \qquad V = F - M = 2150\ \text{lb/h}$$

5. **Feed enthalpy from the energy balance** $FH_b = MH_e + VH_a$:
$$H_b = \frac{54{,}520(-62.4) + 2150(1098)}{56{,}680} = -18.4\ \text{Btu/lb}$$
On Fig. 27.4 the point $c = 0.31$, $H \approx -18$ to $-21$ Btu/lb lies on the **130 °F** isotherm (to within the chart reading).

**Result:** feed ≈ 130 °F; $F \approx 56{,}600$ lb/h (25,700 kg/h); evaporation ≈ 2000–2150 lb/h (≈ 930 kg/h).

> Book comparison: MSH reads $H_b = -21$ Btu/lb directly from the line $ae$ at $c = 0.31$ and then finds $V$ by the centre-of-gravity rule on enthalpies, $V = 54{,}520(-21 + 62.4)/(1098 + 21) = 2017$ lb/h and $F = 56{,}537$ lb/h. The exact MgSO₄ balance gives 2150 lb/h; the 6% difference is only the chart-reading error in $H_b$ (an enthalpy lever is very sensitive because $H_a - H_b$ is large). Both give the same feed temperature, 130 °F.`,
          answer: String.raw`Feed ≈ **130 °F**; F ≈ **56,600 lb/h**; V ≈ **2000–2150 lb/h** (book: 2017 lb/h, F = 56,537 lb/h; mass balance: 2150 and 56,680).` },
        { id: "practice-crystallization-P5b", label: "(b)", marks: "", topic: "crystallization",
          sub: "MSMPR design for the MgSO₄ vacuum crystallizer: magma volume, nucleation rate, screen analysis", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Example 27.6 (Eqs. 27.27–27.44, Table 27.2)`,
          text: String.raw`In the crystallizer of part (a), a growth rate $G$ of 0.0018 ft/h (0.00055 m/h) is anticipated, and a predominant crystal size of 20 mesh is desired. How large must the magma volume in the crystallizer be; what nucleation rate $B^\circ$ is necessary; and what is the screen analysis of the product, assuming that the operation conforms to all the requirements of mixed suspension–mixed product removal (MSMPR) crystallization?`,
          solution: String.raw`**Given:** $G = 0.0018$ ft/h; predominant size $L_{pr}$ = 20-mesh opening = 0.0328 in. = 0.00273 ft; $C = 10{,}000$ lb/h; mother liquor 44,520 lb/h; $\rho_c = 105$, $\rho_{ML} = 82.5$ lb/ft³; solids 15% by volume of magma.

**Find:** magma volume, $B^\circ$, screen analysis.

**Assumptions:** MSMPR (steady state, perfectly mixed, unclassified withdrawal, ΔL law, no seeds in feed, no breakage); shape factor $a = 1$ (cubes).

1. **MSMPR results used:** population density $n = n^\circ e^{-L/G\tau}$; the mass distribution peaks at $z = L/G\tau = 3$, so $L_{pr} = 3G\tau$; $B^\circ = Gn^\circ$; and the number of crystals per unit mass, $n_c/m_c = 9/(2a\rho_c L_{pr}^3)$, gives
$$B^\circ = \frac{9C}{2a\rho_c V_c L_{pr}^3}$$

2. **Drawdown time:**
$$\tau = \frac{L_{pr}}{3G} = \frac{0.00273}{3(0.0018)} = 0.506\ \text{h}$$

3. **Volumes:** mother-liquor flow $Q = 44{,}520/82.5 = 540$ ft³/h.
$$V_c = Q\tau = 540(0.506) = 273\ \mathrm{ft^3}\ \text{of liquor}, \qquad V_{magma} = \frac{273}{0.85} = 321\ \mathrm{ft^3} \approx 2400\ \text{gal}$$

4. **Nucleation rate:**
$$B^\circ = \frac{9(10{,}000)}{2(1)(105)(273)(0.00273)^3} = 7.72 \times 10^7\ \text{nuclei/(ft³ h)} \quad (2.7 \times 10^9\ \mathrm{m^{-3}\,h^{-1}})$$
$$n^\circ = \frac{B^\circ}{G} = \frac{7.72 \times 10^7}{0.0018} = 4.29 \times 10^{10}\ \mathrm{ft^{-4}}$$
so $\log n = 10.632 - 477L$ ($L$ in ft).

5. **Screen analysis:** cumulative mass fraction smaller than $L$:
$$x_m = 1 - e^{-z}\left(1 + z + \frac{z^2}{2} + \frac{z^3}{6}\right), \qquad z = \frac{L}{G\tau} = 1099L$$

| Mesh | $L$, ft | $z$ | cumulative % smaller | differential % |
|---|---|---|---|---|
| 8 | 0.00775 | 8.52 | 97.0 | 3.0 |
| 9 | 0.00650 | 7.14 | 92.5 | 4.5 |
| 10 | 0.00542 | 5.95 | 84.4 | 8.1 |
| 12 | 0.00458 | 5.04 | 74.0 | 10.4 |
| 14 | 0.00383 | 4.21 | 60.7 | 13.3 |
| 16 | 0.00325 | 3.57 | 47.9 | 12.8 |
| 20 | 0.00273 | 3.00 | 35.3 | 12.6 |
| 24 | 0.00230 | 2.53 | 24.8 | 10.5 |
| 28 | 0.00193 | 2.12 | 16.6 | 8.2 |
| 32 | 0.00162 | 1.78 | 10.6 | 6.0 |
| 35 | 0.00137 | 1.50 | 6.6 | 4.0 |
| 42 | 0.00115 | 1.27 | 4.0 | 2.6 |

**Result:** $\tau = 0.506$ h, magma volume 321 ft³ (2400 gal), $B^\circ = 7.7 \times 10^7$ nuclei/(ft³ h); 35% of the product passes 20 mesh and 97% passes 8 mesh. These agree with MSH Table 27.2 (97, 93, 84, 74, 61, 48, 35, 25, 17, 11, 6, 4%) ✓.`,
          answer: String.raw`τ = 0.506 h; V_liquor = 273 ft³, magma **321 ft³ (2400 gal)**; **B° = 7.7 × 10⁷ /(ft³ h)**, n° = 4.3 × 10¹⁰ ft⁻⁴; 35% finer than 20 mesh, 97% finer than 8 mesh (table).` } ] },

    { id: "practice-crystallization-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-crystallization-P6", label: "", marks: "", topic: "crystallization",
        sub: "Recrystallization of impure CuSO₄ with recycle and purge: water, recycle and yield", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Problem 27.1`,
        text: String.raw`CuSO₄·H₂O containing 3.5 percent of a soluble impurity is dissolved continuously in sufficient water and recycled mother liquor to make a saturated solution at 80 °C. The solution is then cooled to 25 °C and crystals of CuSO₄·5H₂O thereby obtained. These crystals carry 10 percent of their dry weight as adhering mother liquor. The crystals are then dried to zero free water (CuSO₄·5H₂O). The allowable impurity in the product is 0.6 percent. Calculate (a) the weight of water and of recycled mother liquor required per 100 kg of impure copper sulfate; (b) the percentage recovery of copper sulfate, assuming that the mother liquor not recycled is discarded. The solubility of CuSO₄·5H₂O at 80 °C is 120 g per 100 g of free H₂O and at 25 °C is 40 g per 100 g of free H₂O.`,
        solution: String.raw`**Given:** feed 100 kg = 96.5 kg CuSO₄·H₂O + 3.5 kg impurity; solubility (as pentahydrate per free water) 1.20 at 80 °C, 0.40 at 25 °C; adhering liquor = 10% of dry crystal mass; dried product ≤ 0.6% impurity.

**Find:** (a) fresh water $W$ and recycled mother liquor $R$; (b) % recovery.

**Assumptions:** steady state; the impurity stays dissolved and does not change the solubility; the mother liquor leaves the cooler saturated at 25 °C; drying removes only free water (dissolved hydrate and impurity in the adhering liquor stay on the product).

1. **Work in pentahydrate + free water.** $M$(CuSO₄) = 159.6, CuSO₄·H₂O = 177.6, CuSO₄·5H₂O = 249.7.
$$\text{CuSO₄} = 96.5\left(\frac{159.6}{177.6}\right) = 86.71\ \text{kg} \;\Rightarrow\; 86.71\left(\frac{249.7}{159.6}\right) = 135.65\ \text{kg pentahydrate equivalent}$$
Forming it ties up $135.65 - 96.5 = 39.15$ kg of water.

2. **Mother liquor per kg of free water** (subscript $w$): 0.40 kg hydrate + $q$ kg impurity, so total $(1.4 + q)$ kg. Let $F_w$ = free water in the hot solution. On cooling the free water stays in the liquor, so the crystals are
$$C = (1.20 - 0.40)F_w = 0.80F_w$$
Adhering liquor $= 0.1C = 0.08F_w$, containing free water $a = 0.08F_w/(1.4 + q)$, hydrate $0.40a$ and impurity $qa$.

3. **Purity specification fixes $q$:**
$$qa = 0.006\,[\,0.80F_w + 0.40a + qa\,] \;\Rightarrow\; q = 0.0925\ \text{kg impurity per kg free water}$$
Then $a = 0.0536F_w$; product per kg $F_w$: hydrate $0.8214F_w$, impurity $0.00496F_w$.

4. **Overall balances** with purge free water $p$ (purge also carries $0.40p$ hydrate and $0.0925p$ impurity):
$$\text{hydrate: } 135.65 = 0.8214F_w + 0.40p$$
$$\text{impurity: } 3.5 = 0.00496F_w + 0.0925p$$
Solving: $F_w = 150.6$ kg, $p = 29.76$ kg.

5. **Streams (per 100 kg feed):**
   - crystals $C = 0.80(150.6) = 120.5$ kg; adhering liquor 12.05 kg (free water 8.07 kg)
   - recycle free water $r = F_w - a - p = 150.6 - 8.07 - 29.76 = 112.8$ kg, so recycled liquor $R = 112.8(1.4925) = 168.4$ kg
   - purge liquor $= 29.76(1.4925) = 44.4$ kg (2.75 kg impurity)
   - fresh water $W$ = water into hydrate + water dried off + water in purge $= 39.15 + 8.07 + 29.76 = 77.0$ kg

**Check:** hot solution: hydrate $135.65 + 0.40(112.8) = 180.8$ kg on $F_w = 150.6$ kg free water, ratio 1.20 ✓ (saturated at 80 °C). Product $= 123.7$ kg hydrate + 0.75 kg impurity $= 124.5$ kg, impurity 0.60% ✓.

6. **Recovery (b):**
$$\frac{123.7}{135.65} = 91.2\%$$

**Result:** per 100 kg of impure CuSO₄·H₂O: 77 kg of fresh water and 168 kg of recycled mother liquor; 44 kg of liquor is purged; 124.5 kg of dried CuSO₄·5H₂O product; 91.2% recovery.

> The purge is what keeps the impurity at 0.6%: without it impurity would build up in the recycle loop until the adhering liquor contaminated the product. MSH gives no printed answer for this problem.`,
        answer: String.raw`(a) **W ≈ 77 kg** fresh water and **R ≈ 168 kg** recycled mother liquor per 100 kg feed (purge 44 kg); (b) **recovery ≈ 91%** (124.5 kg dried CuSO₄·5H₂O, 0.6% impurity).` } ] },

    { id: "practice-crystallization-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-crystallization-P7", label: "", marks: "", topic: "crystallization",
        sub: "MSMPR crystallizer, 1 ton/h at 35 mesh: growth rate, nucleation rate, screen analysis", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Problem 27.5`,
        text: String.raw`An MSMPR crystallizer produces 1 ton of product per hour having a predominant size of 35 mesh. The volume of crystals per unit volume of magma is 0.15. The temperature in the crystallizer is 120 °F, and the retention time is 2.0 h. The densities of crystals and mother liquor are 105 and 82.5 lb/ft³, respectively. (a) Plot the cumulative screen analysis of the theoretical product. (b) Determine the required growth rate $G$ and the necessary nucleation rate $B^\circ$.`,
        solution: String.raw`**Given:** $C = 2000$ lb/h; $L_{pr}$ = 35-mesh opening = 0.417 mm = 0.001368 ft; $\tau = 2.0$ h; solids volume fraction 0.15; $\rho_c = 105$, $\rho_{ML} = 82.5$ lb/ft³.

**Find:** (b) $G$, $B^\circ$; (a) cumulative screen analysis.

**Assumptions:** ideal MSMPR; shape factor $a = 1$.

1. **Growth rate:** the predominant size is $L_{pr} = 3G\tau$:
$$G = \frac{L_{pr}}{3\tau} = \frac{0.001368}{3(2.0)} = 2.28 \times 10^{-4}\ \text{ft/h} = 0.0695\ \text{mm/h}\ (1.93 \times 10^{-8}\ \text{m/s})$$

2. **Crystal mass per unit volume of liquor:**
$$m_c = \frac{0.15(105)}{0.85} = 18.53\ \text{lb crystals/ft³ liquor}$$
Liquor flow $Q = 2000/18.53 = 107.9$ ft³/h; liquor volume $V_c = Q\tau = 215.9$ ft³ (magma 254 ft³).

3. **Nucleation rate:**
$$B^\circ = \frac{9C}{2a\rho_c V_c L_{pr}^3} = \frac{9(2000)}{2(1)(105)(215.9)(0.001368)^3} = 1.55 \times 10^8\ \text{nuclei/(ft³ h)}$$
($= 1.5 \times 10^6\ \mathrm{m^{-3}\,s^{-1}}$); $n^\circ = B^\circ/G = 6.8 \times 10^{11}\ \mathrm{ft^{-4}}$.

4. **Screen analysis (a):** $z = L/G\tau = L/(0.139\ \text{mm})$, $x_m = 1 - e^{-z}(1 + z + z^2/2 + z^3/6)$:

| Mesh | opening, mm | $z$ | cumulative % smaller |
|---|---|---|---|
| 8 | 2.362 | 17.0 | 100.0 |
| 10 | 1.651 | 11.9 | 99.7 |
| 14 | 1.168 | 8.40 | 96.8 |
| 20 | 0.833 | 5.99 | 84.8 |
| 28 | 0.589 | 4.24 | 61.1 |
| 35 | 0.417 | 3.00 | 35.3 |
| 48 | 0.295 | 2.12 | 16.6 |
| 65 | 0.208 | 1.50 | 6.5 |
| 100 | 0.147 | 1.06 | 2.3 |

![Cumulative mass percent smaller than L versus screen opening for the MSMPR product; S-shaped curve through 35.3% at the predominant size 0.417 mm](fig/practice-crystallization-P7-sol.svg)

**Result:** $G = 2.28 \times 10^{-4}$ ft/h (0.07 mm/h); $B^\circ = 1.55 \times 10^8$ nuclei/(ft³ h). The theoretical product is 35% finer than 35 mesh, 85% finer than 20 mesh and almost entirely finer than 10 mesh. (No answer is printed in MSH.)`,
        answer: String.raw`**G = 2.28 × 10⁻⁴ ft/h** (0.07 mm/h); V_liquor = 216 ft³; **B° = 1.55 × 10⁸ /(ft³ h)**; cumulative % finer: 35 mesh 35%, 28 mesh 61%, 20 mesh 85%, 14 mesh 97%.` } ] },

    { id: "practice-crystallization-P8", q: 8, section: "S", compulsory: false,
      stem: String.raw`An existing Swenson–Walker crystallizer of **six** standard 10-ft sections (3.5 ft² of cooling surface per foot, $U$ = 35 Btu/(h·ft²·°F)) is available for copperas. Saturated feed enters at 120 °F and the magma leaves at 80 °F; use the solubility (curve D, Fig. 11-9: 140 and 74 parts FeSO₄·7H₂O per 100 parts excess water at 120 and 80 °F), $c_p$ = 0.70 Btu/(lb·°F) and heat of solution −4400 cal/g formula weight.`,
      parts: [
        { id: "practice-crystallization-P8a", label: "(a)", marks: "15", topic: "crystallization",
          sub: "Rating an existing six-section Swenson–Walker crystallizer: crystal output and water (heat)", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`New problem in the style of 2014-15 Q8a / 2015-16 Q1a (rating instead of design)`,
          text: String.raw`Cooling water enters at 50 °F and leaves at 70 °F. (i) What production rate of copperas crystals (ton/h) can the unit give, and how much cooling water (gpm) is needed? (ii) If the water rate is increased so that it leaves at 60 °F, find the new crystal output and water rate. Comment.`,
          solution: String.raw`**Given:** $A = 6(10)(3.5) = 210$ ft²; $U = 35$ Btu/(h·ft²·°F); solution 120 → 80 °F; water in at 50 °F.

**Find:** crystal output $C$ and water rate for water out at 70 °F and at 60 °F.

**Assumptions:** countercurrent jacket; magma leaves saturated at 80 °F; no evaporation; heat of crystallization 28.5 Btu/lb.

1. **Heat removed per lb of crystals** (from the material balance, 240 lb of feed per 66 lb of crystals):
$$q_C = \frac{240}{66}(0.70)(120 - 80) + \frac{4400}{278}(1.8) = 101.8 + 28.5 = 130.3\ \text{Btu/lb crystals}$$

2. **(i) Water 50 → 70 °F:** $\Delta T_1 = 120 - 70 = 50$, $\Delta T_2 = 80 - 50 = 30$ °F,
$$\Delta T_{lm} = \frac{50 - 30}{\ln(50/30)} = 39.2\ ^\circ\mathrm{F}, \qquad Q = UA\Delta T_{lm} = 35(210)(39.2) = 287{,}800\ \text{Btu/h}$$
$$C = \frac{287{,}800}{130.3} = 2208\ \text{lb/h} = 1.10\ \text{ton/h}, \qquad \text{feed} = 2208\left(\frac{240}{66}\right) = 8030\ \text{lb/h}$$
$$\text{water} = \frac{287{,}800}{8.34(60)(70 - 50)} = 28.8\ \text{gpm}$$

3. **(ii) Water 50 → 60 °F:** $\Delta T_1 = 60$, $\Delta T_2 = 30$ °F, $\Delta T_{lm} = 30/\ln 2 = 43.3$ °F,
$$Q = 35(210)(43.3) = 318{,}100\ \text{Btu/h}, \quad C = 2441\ \text{lb/h} = 1.22\ \text{ton/h}, \quad \text{water} = \frac{318{,}100}{8.34(60)(10)} = 63.6\ \text{gpm}$$

4. **Comment.** Halving the water temperature rise raises $\Delta T_{lm}$ by only 11%, so output rises 11% while the water rate more than doubles. The surface (number of sections), not the water, limits capacity. A design with a small water rise (as on the slides, 60 → 70 °F) needs less surface but much more water; the economic choice balances section cost against pumping/water cost.

**Result:** (i) 1.10 ton/h of crystals with 28.8 gpm; (ii) 1.22 ton/h with 63.6 gpm.`,
          answer: String.raw`q = 130.3 Btu/lb crystals. (i) ΔT_lm = 39.2 °F, Q = 287,800 Btu/h → **1.10 ton/h**, **28.8 gpm**; (ii) ΔT_lm = 43.3 °F → **1.22 ton/h**, **63.6 gpm** (surface-limited).` },
        { id: "practice-crystallization-P8b", label: "(b)", marks: "10", topic: "crystallization",
          sub: "Sketch of the Swenson–Walker crystallizer; spiral agitator functions and advantages", type: "sketch", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Dr. Sowgath's crystallizer slides (Swenson–Walker crystallizer, functions of the spiral stirrer, advantages); MKH slides`,
          text: String.raw`With a neat sketch describe the construction and working of a Swenson–Walker crystallizer. State the functions of the spiral agitator and the advantages of the unit over a tank crystallizer.`,
          solution: String.raw`![Swenson–Walker crystallizer: open round-bottomed trough with a cooling-water jacket, slow long-pitch spiral agitator on one shaft, feed at one end and magma overflow at the other](fig/practice-crystallization-P8b-sketch.svg)

**Construction**
- Open, round-bottomed trough, about 24 in. wide and 10 ft long per section; several sections are joined end to end (or stacked one above another, the solution falling from the upper row to the next) to give the required cooling length.
- A water jacket along the trough; cooling water flows countercurrent to the solution.
- A long-pitch spiral (ribbon) agitator on a single shaft running the whole length, turning slowly (about 7 rpm), set close to the trough bottom.

**Working**
1. Hot concentrated (saturated) solution is fed continuously at one end and flows slowly to the other end.
2. Heat passes through the wall to the jacket water; as the solution cools it becomes supersaturated (supersaturation by cooling alone) and crystals form and grow.
3. At the far end, crystals and mother liquor (the magma) overflow to a draining table; mother liquor returns to the process and wet crystals go to a centrifuge.

**Functions of the spiral agitator**
- Scrapes crystals off the cold surface, so the wall does not crust over (solubility is lowest at the cold wall, where crystals would otherwise build up and kill heat transfer).
- Lifts the crystals already formed and showers them down through the solution, so they grow uniformly while suspended in supersaturated liquor.
- Moves the magma gently along the trough without breaking crystals.

**Advantages (slides)**
- Continuous operation; large saving in floor space, in material in process and in labour compared with tank crystallizers.
- Fairly perfect individual crystals of uniform size, free from inclusions and aggregates.

**Limitation:** heat transfer is through the wall only, so $U$ is modest (about 35 Btu/(h·ft²·°F) in the copperas problem) and long troughs are needed for large duties.`,
          answer: String.raw`Jacketed open trough sections (24 in. × 10 ft) with a slow spiral agitator; feed at one end, magma overflow at the other; agitator scrapes the cold wall and showers crystals through the liquor; continuous, compact, uniform crystals.` } ] },

    { id: "practice-crystallization-P9", q: 9, section: "S", compulsory: false,
      stem: String.raw`5000 kg/h of a 25 wt% Na₂CO₃ solution is cooled to 10 °C in a continuous cooling crystallizer; 3% of the water present in the feed evaporates. At 10 °C the solid phase is Na₂CO₃·10H₂O and the solubility is 12.5 kg Na₂CO₃ per 100 kg water. Molecular weights: Na₂CO₃ 106.0, H₂O 18.0.`,
      parts: [
        { id: "practice-crystallization-P9a", label: "(a)", marks: "12", topic: "crystallization",
          sub: "Yield of Na₂CO₃·10H₂O from a cooling crystallizer with evaporation", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`New problem; yield method of MSH Example 27.1 and the slide yield formula`,
          text: String.raw`Calculate the mass of crystals produced per hour, the mother liquor flow and the percentage of Na₂CO₃ recovered. Show what the slide formula Yield = $(x_1 - x_2)W_s/100$ would give and explain the difference.`,
          solution: String.raw`**Given:** $F = 5000$ kg/h, 25% Na₂CO₃: solute 1250 kg/h, water 3750 kg/h; evaporation $E = 0.03(3750) = 112.5$ kg/h; solubility $s = 12.5$ kg/100 kg water; crystals Na₂CO₃·10H₂O.

**Find:** crystals $C$, mother liquor, % recovery.

**Assumptions:** mother liquor leaves saturated at 10 °C; crystals free of adhering liquor.

1. **Hydrate ratio:** $M_h = 106.0 + 10(18.0) = 286.0$, $R = M_h/M_a = 2.70$. Each kg of crystals holds $1/R = 0.370$ kg Na₂CO₃ and $0.630$ kg water.

2. **Balances** ($W'$ = water in the mother liquor):
$$\text{Na₂CO₃: } 1250 = 0.370C + 0.125W'$$
$$\text{water: } 3750 - 112.5 = 0.630C + W'$$

3. **Solve:** $W' = 3637.5 - 0.630C$; substituting, $1250 = 0.370C + 454.7 - 0.0787C$:
$$C = \frac{795.3}{0.2918} = 2726\ \text{kg/h of Na₂CO₃·10H₂O}$$
$W' = 1921$ kg/h; mother liquor $= 1921(1.125) = 2161$ kg/h.

**Check:** $2726 + 2161 + 112.5 = 5000$ kg/h ✓.

4. **Recovery:** Na₂CO₃ in crystals $= 2726/2.70 = 1010$ kg/h, i.e. $1010/1250 = 80.8\%$.

5. **Slide formula:** $x_1 = 1250/3750 \times 100 = 33.3$; $W_s = 3637.5$ kg (after evaporation):
$$\frac{33.3 - 12.5}{100}(3637.5) = 758\ \text{kg/h}$$
This is only "anhydrous Na₂CO₃ that leaves the solution if no water went with it". It is wrong on two counts: the crystals are a decahydrate (63% water), and the water that goes into the crystals is no longer available to hold solute, so more solute must come out. The correct crop is 2726 kg/h of hydrate (1010 kg/h of Na₂CO₃, 33% more Na₂CO₃ than the formula predicts).

**Result:** 2726 kg/h of Na₂CO₃·10H₂O; 2161 kg/h of mother liquor; 80.8% recovery.`,
          answer: String.raw`**C = 2726 kg/h** Na₂CO₃·10H₂O; mother liquor **2161 kg/h**; recovery **80.8%**. Slide formula gives 758 kg/h (wrong: ignores water of crystallization).` },
        { id: "practice-crystallization-P9b", label: "(b)", marks: "8", topic: "crystallization",
          sub: "Derivation: yield equation for hydrated crystals with solvent evaporation", type: "derivation", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Extends the slide yield formula; compare the formula printed in 2022-23 Q2b`,
          text: String.raw`Derive an expression for the mass of hydrated crystals $C$ obtained when a solution containing $W_0$ kg of water and $x_1$ kg of anhydrous solute per 100 kg of water is cooled with evaporation of $E$ kg of water, the final solubility being $x_2$ kg per 100 kg water and $R = M_{hydrate}/M_{anhydrous}$. Show that it reduces to the slide formula for anhydrous crystals and no evaporation, and check it against part (a).`,
          solution: String.raw`**Set-up:** feed water $W_0$, solute $S_0 = x_1W_0/100$; evaporation $E$; crystals $C$ (hydrate), mother liquor holding $W'$ kg water and $x_2W'/100$ kg solute.

1. **Solute balance:** each kg of crystals contains $1/R$ kg solute:
$$\frac{x_1W_0}{100} = \frac{C}{R} + \frac{x_2W'}{100}$$

2. **Water balance:** each kg of crystals contains $(R-1)/R$ kg water:
$$W_0 - E = \frac{R-1}{R}C + W'$$

3. **Eliminate $W'$:** $W' = W_0 - E - C(R-1)/R$. Substituting,
$$\frac{x_1W_0}{100} = \frac{C}{R} + \frac{x_2}{100}\left[W_0 - E - \frac{C(R-1)}{R}\right]$$
$$\frac{C}{R}\left[1 - \frac{(R-1)x_2}{100}\right] = \frac{x_1W_0 - x_2(W_0 - E)}{100}$$
$$\boxed{C = \frac{R\,[\,x_1W_0 - x_2(W_0 - E)\,]}{100 - (R-1)x_2}}$$

4. **Special case** $R = 1$ (anhydrous), $E = 0$:
$$C = \frac{(x_1 - x_2)W_0}{100}$$
which is the slide formula with $W_s = W_0$.

5. **Check with part (a):** $R = 2.70$, $x_1 = 33.33$, $W_0 = 3750$ kg/h, $E = 112.5$ kg/h, $x_2 = 12.5$:
$$x_1W_0 = 125{,}000, \qquad x_2(W_0 - E) = 12.5(3637.5) = 45{,}470$$
$$C = \frac{2.70(125{,}000 - 45{,}470)}{100 - 1.70(12.5)} = \frac{214{,}700}{78.76} = 2726\ \text{kg/h}\ ✓$$

> The 2022-23 paper prints the same result in the form $C = \{[F(1-x_F') - V]X' - Fx_F'\}/\{[(M_h - M_a)/M_h]X' - M_a/M_h\}$, with mass fractions instead of "per 100 kg water"; both come from the same two balances.`,
          answer: String.raw`C = R[x₁W₀ − x₂(W₀ − E)]/[100 − (R − 1)x₂]; R = 1, E = 0 gives (x₁ − x₂)W₀/100; part (a) check: 2726 kg/h ✓.` } ] },

    { id: "practice-crystallization-P10", q: 10, section: "S", compulsory: false,
      stem: String.raw`A vacuum crystallizer is used to recover KCl from a solution saturated at 80 °C.`,
      parts: [
        { id: "practice-crystallization-P10a", label: "(a)", marks: "8", topic: "crystallization",
          sub: "Sketch and principle of a continuous vacuum crystallizer (adiabatic cooling)", type: "sketch", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Dr. Sowgath's crystallizer slides, "Vacuum crystallizer" and the supersaturation-method classification`,
          text: String.raw`Sketch a continuous vacuum crystallizer and explain how supersaturation is produced in it. Why is it preferred to a cooling crystallizer for large-tonnage salts?`,
          solution: String.raw`![Continuous vacuum crystallizer: cone-bottomed body under vacuum, vapour to a barometric condenser and steam-jet ejector, circulating pump and heater, feed into the circulation line, product magma from the cone](fig/practice-crystallization-P10a-sketch.svg)

**Construction:** cone-bottomed closed vessel; vapour line from the top to a barometric condenser, with a steam-jet ejector (often two-stage, sometimes with a booster) to hold the vacuum; a slow, low-head circulating pump and heater; the hot feed enters the circulation line and comes into the body through a tangential inlet (swirling motion); propeller agitator or elutriation leg in the cone; product magma pumped out from the bottom.

**How supersaturation is produced (adiabatic cooling):**
1. The absolute pressure in the body is set so that the boiling point of the solution is **below** the feed temperature.
2. On entering, the hot feed flashes: part of the water evaporates and the solution cools itself to the equilibrium temperature. No cooling surface is involved.
3. Energy balance: sensible heat of the feed + heat of crystallization = latent heat of the vapour.
4. Supersaturation comes from **both** cooling and loss of solvent, so the yield is greater than from cooling alone (part (b)).

**Why preferred for large-tonnage salts:**
- No heat-transfer surface in contact with supersaturated liquor, so there is no wall crusting (the main trouble of cooling crystallizers).
- Large capacity in one simple vessel; continuous operation; good control of supersaturation by the vacuum.
- The cooling is spread through the boiling surface, giving uniform conditions.

**Drawbacks:** needs a vacuum system (ejector steam, condenser water) and a barometric leg; the heat of the vapour is usually not recovered.`,
          answer: String.raw`Hot feed flashes in a vessel held under vacuum below its boiling point: adiabatic evaporation cools the liquor and removes solvent, giving supersaturation without cold surfaces; vapour to barometric condenser + ejector.` },
        { id: "practice-crystallization-P10b", label: "(b)", marks: "15", topic: "crystallization",
          sub: "KCl vacuum crystallizer: crystal yield and evaporation by combined mass and heat balance", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`New problem; method of MSH Example 27.5 without a chart (as in Geankoplis-type vacuum-crystallizer balances)`,
          text: String.raw`10,000 kg/h of KCl solution saturated at 80 °C is fed to a vacuum crystallizer in which the magma is at 30 °C. Data: solubility of KCl 51.1 g/100 g water at 80 °C and 37.2 g/100 g water at 30 °C; mean specific heat of the solution 3.0 kJ/(kg·K); heat of crystallization of KCl 230 kJ/kg (evolved); latent heat of water at 30 °C 2430 kJ/kg; boiling-point elevation negligible. Calculate the crystals produced, the water evaporated and the recovery. Compare with simple cooling to 30 °C without evaporation.`,
          solution: String.raw`**Given:** $F = 10{,}000$ kg/h; feed mass fraction $w_F = 51.1/151.1 = 0.3382$: KCl 3382 kg/h, water 6618 kg/h; magma at 30 °C, solubility 0.372 kg/kg water; $c_p = 3.0$ kJ/(kg·K), $\lambda_c = 230$ kJ/kg, $\lambda = 2430$ kJ/kg.

**Find:** crystals $C$, vapour $V$, recovery.

**Assumptions:** adiabatic; crystals anhydrous; vapour leaves at 30 °C; mother liquor saturated at 30 °C; datum for enthalpy: solution at 30 °C.

1. **Unknowns:** $C$, $V$ and $W$ (water in the mother liquor).

2. **KCl balance:** $3382 = C + 0.372W$

3. **Water balance:** $6618 = V + W$

4. **Energy balance:** the feed's sensible heat above 30 °C plus the heat of crystallization supply the latent heat:
$$F c_p (80 - 30) + C\lambda_c = V\lambda$$
$$10{,}000(3.0)(50) + 230C = 2430V \;\Rightarrow\; 1.5 \times 10^6 + 230C = 2430V$$

5. **Solve** (from 2 and 3, $C = 3382 - 0.372(6618 - V) = 920.1 + 0.372V$; into 4):
$$1.5 \times 10^6 + 230(920.1 + 0.372V) = 2430V \;\Rightarrow\; V = \frac{1.712 \times 10^6}{2344.4} = 730\ \text{kg/h}$$
$$C = 920.1 + 0.372(730) = 1192\ \text{kg/h}, \qquad W = 5888\ \text{kg/h},\ \text{mother liquor} = 5888(1.372) = 8078\ \text{kg/h}$$

**Check:** $1192 + 730 + 8078 = 10{,}000$ kg/h ✓.

6. **Recovery:** $1192/3382 = 35.2\%$.

7. **Cooling only** (no evaporation, $W = 6618$): $C = 3382 - 0.372(6618) = 920$ kg/h (27.2%).

**Result:** vacuum crystallization gives 1192 kg/h of KCl (35% recovery) and evaporates 730 kg/h of water; cooling alone gives only 920 kg/h. The extra 30% of crop comes from the evaporated water, at no cost in heat-transfer surface.`,
          answer: String.raw`**V = 730 kg/h**, **C = 1192 kg/h** KCl, mother liquor 8078 kg/h, **recovery 35%** (cooling only: 920 kg/h, 27%).` } ] },

    { id: "practice-crystallization-P11", q: 11, section: "S", compulsory: false,
      stem: String.raw`Mixed suspension–mixed product removal (MSMPR) crystallizer.`,
      parts: [
        { id: "practice-crystallization-P11a", label: "(a)", marks: "10", topic: "crystallization",
          sub: "Derivation: MSMPR population density n = n° exp(−L/Gτ) and predominant size 3Gτ", type: "derivation", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`MSH 5th ed., section "MSMPR crystallizer" (Eqs. 27.20–27.43); Dr. Sowgath's slides (nucleation rate B, growth rate G, CSD)`,
          text: String.raw`State the assumptions of the MSMPR model. Derive the population density distribution $n(L)$ and show that the predominant (mass) size is $L_{pr} = 3G\tau$ and that $B^\circ = Gn^\circ$.`,
          solution: String.raw`**Assumptions (MSMPR):** steady state; perfectly mixed suspension (no classification); uniform supersaturation; ΔL law (growth rate $G$ independent of size); unclassified product withdrawal; no crystals in the feed; no breakage; product leaves in equilibrium with the magma.

1. **Population density:** $n = dN/dL$ = number of crystals per unit size range per unit volume of liquor. Retention time $\tau = V/Q$ ($V$ liquor volume, $Q$ liquor outflow).

2. **Number balance on the size range $L$ to $L + \Delta L$** (steady state, volume $V$): crystals grow into the range at $L$ and out at $L + \Delta L$, and are withdrawn with the product:
$$V G\,n(L) - V G\,n(L + \Delta L) = Q\,n\,\Delta L$$

3. **Let $\Delta L \to 0$:**
$$-VG\frac{dn}{dL} = Qn \;\Rightarrow\; \frac{dn}{n} = -\frac{dL}{G\tau}$$

4. **Integrate from $L = 0$, $n = n^\circ$:**
$$\boxed{n = n^\circ\exp\left(-\frac{L}{G\tau}\right)}$$
A plot of $\ln n$ against $L$ is a straight line of slope $-1/G\tau$ and intercept $\ln n^\circ$.

5. **Nucleation rate:** nuclei are born at $L = 0$ and leave that size at speed $G$:
$$B^\circ = \lim_{L \to 0}\frac{dN}{dt} = \frac{dL}{dt}\frac{dN}{dL} = Gn^\circ$$

6. **Mass distribution and predominant size.** The mass in $dL$ is $a\rho_c L^3 n\,dL$. With $z = L/G\tau$ this is proportional to $z^3e^{-z}$. Setting the derivative to zero:
$$\frac{d}{dz}(z^3e^{-z}) = (3z^2 - z^3)e^{-z} = 0 \;\Rightarrow\; z = 3, \qquad L_{pr} = 3G\tau$$
Integrating gives the cumulative mass fraction $x_m = 1 - e^{-z}(1 + z + z^2/2 + z^3/6)$, which is 0.353 at $z = 3$.`,
          answer: String.raw`Number balance −VG dn/dL = Qn → n = n° e^(−L/Gτ); B° = Gn°; mass ∝ z³e^(−z) peaks at z = 3 → L_pr = 3Gτ.` },
        { id: "practice-crystallization-P11b", label: "(b)", marks: "12", topic: "crystallization",
          sub: "MSMPR kinetics from population-density data: G, n°, B°, predominant size", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`New problem; MSH 5th ed. Eqs. 27.27, 27.40, 27.41`,
          text: String.raw`A sample of product from an MSMPR crystallizer with a retention time of 1.5 h gave the following population densities (number of crystals per m³ of liquor per m of size):

| $L$, mm | 0.2 | 0.4 | 0.6 | 0.8 | 1.0 | 1.2 |
|---|---|---|---|---|---|---|
| $n$, m⁻⁴ | 7.70 × 10¹¹ | 3.95 × 10¹¹ | 2.03 × 10¹¹ | 1.04 × 10¹¹ | 5.35 × 10¹⁰ | 2.75 × 10¹⁰ |

Determine the growth rate, the nuclei density $n^\circ$, the nucleation rate $B^\circ$, the predominant crystal size and the magma density (kg crystals per m³ liquor) for cubic crystals ($a$ = 1) of density 2000 kg/m³.`,
          solution: String.raw`**Given:** $\tau = 1.5$ h; $(L, n)$ data; $a = 1$; $\rho_c = 2000$ kg/m³.

**Find:** $G$, $n^\circ$, $B^\circ$, $L_{pr}$, $m_c$.

**Assumptions:** MSMPR, so $\ln n = \ln n^\circ - L/G\tau$.

1. **Linearize:** $\ln n$ = 27.37, 26.70, 26.04, 25.37, 24.70, 24.04 at $L$ = 0.2 … 1.2 mm. A least-squares line gives
$$\text{slope} = -3.33\ \mathrm{mm^{-1}}, \qquad \text{intercept} = 28.04$$

2. **Growth rate:** $G\tau = 1/3.33 = 0.300$ mm, so
$$G = \frac{0.300}{1.5} = 0.200\ \text{mm/h} = 5.56 \times 10^{-8}\ \text{m/s}$$

3. **Nuclei density:** $n^\circ = e^{28.04} = 1.50 \times 10^{12}\ \mathrm{m^{-4}}$.

4. **Nucleation rate:**
$$B^\circ = Gn^\circ = (5.56 \times 10^{-8})(1.50 \times 10^{12}) = 8.33 \times 10^4\ \text{nuclei/(m³ s)} = 3.0 \times 10^8\ \mathrm{m^{-3}\,h^{-1}}$$

5. **Predominant size:** $L_{pr} = 3G\tau = 0.90$ mm.

6. **Magma density:**
$$m_c = 6a\rho_c n^\circ(G\tau)^4 = 6(1)(2000)(1.50 \times 10^{12})(3.0 \times 10^{-4})^4 = 146\ \text{kg/m³ liquor}$$
Number of crystals $n_c = n^\circ G\tau = 4.5 \times 10^8$ per m³ (about $3.1 \times 10^6$ crystals per kg).

**Result:** $G = 0.20$ mm/h, $n^\circ = 1.5 \times 10^{12}$ m⁻⁴, $B^\circ = 8.3 \times 10^4$ m⁻³ s⁻¹, $L_{pr} = 0.90$ mm, $m_c = 146$ kg/m³.

**Exam tip:** to make crystals larger at the same production rate, raise $\tau$ (bigger vessel) or lower $B^\circ$ (lower supersaturation, fines destruction as in the DTB crystallizer); $L_{pr}$ grows only as $\tau^{1/4}$ when $m_c$ and production are fixed, so large crystals are expensive.`,
          answer: String.raw`Slope −3.33 mm⁻¹ → **Gτ = 0.30 mm, G = 0.20 mm/h**; **n° = 1.5 × 10¹² m⁻⁴**; **B° = 8.3 × 10⁴ m⁻³ s⁻¹**; **L_pr = 0.90 mm**; m_c ≈ 146 kg/m³.` } ] },

    { id: "practice-crystallization-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-crystallization-P12a", label: "(a)", marks: "6", topic: "crystallization",
          sub: "Nucleation rate equation dC_N/dθ = k(C − C₀)^m: effect of supersaturation", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Crystallization slides (MKH), "Crystallization from solution – nucleation", nucleation-rate equation`,
          text: String.raw`The nucleation rate in a crystallizer follows $dC_N/d\theta = k(C - C_0)^m$. (i) By what factor does the nucleation rate change if the supersaturation is doubled, for $m$ = 2, 4 and 9? (ii) If the operator lowers the supersaturation by 20% with $m$ = 4, what happens to the nucleation rate and to the crystal size? Explain why industrial crystallizers are run in the metastable zone.`,
          solution: String.raw`**Given:** $B = k\,\Delta c^m$ with $\Delta c = C - C_0$.

1. **(i) Doubling $\Delta c$:** $B_2/B_1 = 2^m$:

| $m$ | 2 | 4 | 9 |
|---|---|---|---|
| $B_2/B_1$ | 4 | 16 | 512 |

2. **(ii) Lowering $\Delta c$ by 20%:** $B_2/B_1 = 0.8^4 = 0.41$, a 59% fall in nucleation. Growth rate usually varies about linearly with $\Delta c$, so it falls only about 20%. Fewer nuclei share the same crop, so the crystals are **larger** (the product per crystal rises roughly as $1/B$ at fixed production).

3. **Why the metastable zone:**
   - Because $m$ is large (2–9), a small rise of supersaturation into the labile region triggers a burst of primary nucleation: many fines, poor filtration and washing, caking product.
   - In the metastable zone spontaneous (primary) nucleation is negligible; existing crystals grow, and new nuclei come only from contact (secondary) nucleation, which varies with about the first power of supersaturation and is easy to control.
   - So a modest, steady supersaturation with seeds or a suspended crystal bed gives a controlled number of nuclei and large, uniform crystals (the aim of the Oslo and DTB designs).`,
          answer: String.raw`(i) ×4, ×16, ×512 for m = 2, 4, 9; (ii) 0.8⁴ = 0.41 → nucleation falls 59%, crystals larger; operate in the metastable zone to avoid nucleation bursts and fines.` },
        { id: "practice-crystallization-P12b", label: "(b)", marks: "8", topic: "crystallization",
          sub: "Primary, secondary and contact nucleation; precipitation versus crystallization", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`MKH slides (precipitation vs crystallization, metastable region, secondary nucleation); MSH 5th ed. "Secondary nucleation", "Contact nucleation"`,
          text: String.raw`Distinguish precipitation from crystallization in terms of supersaturation and product. Explain fluid-shear and contact nucleation and state why contact nucleation is the dominant source of nuclei in industrial crystallizers.`,
          solution: String.raw`**Precipitation versus crystallization (slides)**

| | Precipitation | Crystallization |
|---|---|---|
| Supersaturation | very high, created suddenly | controlled, low to moderate |
| Nucleation | many nuclei at once (labile zone) | a limited number of nuclei |
| Product | tiny particles or amorphous solid | large, well-formed crystals |

**Primary nucleation** occurs without crystals present: homogeneous (from clusters in the bulk, needs high supersaturation) or heterogeneous (on foreign particles or surfaces, at lower supersaturation).

**Secondary nucleation** is caused by crystals already in the magma:
- **Fluid-shear nucleation:** supersaturated liquid flowing fast past a growing crystal face sweeps away embryos or loosely held clusters from the boundary layer; these survive as new nuclei (shown for sucrose and MgSO₄·7H₂O).
- **Contact nucleation:** a crystal is struck by another crystal, the impeller, a pump or the vessel wall. Very low impact energies (a few hundred ergs) are enough to detach microscopic dendrites and clusters, with no visible damage to the crystal. The number of nuclei per contact rises with supersaturation and with contact energy; a short healing time is needed between contacts.

**Why contact nucleation dominates in industry**
- It happens at the low supersaturations where crystal growth is at its best quality, i.e. in the metastable zone where industrial units run.
- It varies with about the first power of supersaturation (primary nucleation with a very high power), so it is stable and easy to control.
- It can be adjusted by impeller speed and tip velocity, circulation rate, and magma density, which are design variables.`,
          answer: String.raw`Precipitation: very high supersaturation, many nuclei, fines/amorphous; crystallization: controlled supersaturation, few nuclei, large crystals. Secondary nucleation by fluid shear or contact (impeller, wall, crystal–crystal); contact nucleation dominates because it works in the metastable zone and is ∝ supersaturation, so it is controllable.` },
        { id: "practice-crystallization-P12c", label: "(c)", marks: "8", topic: "crystallization",
          sub: "Rosin–Rammler–Sperling (RRS) crystal size distribution from two screen points", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Crystallization slides (MKH), "RRS equation"; Dr. Sowgath's slides, CSD`,
          text: String.raw`Screening of a crystal product shows 80% (by mass) oversize at 0.25 mm and 30% oversize at 0.50 mm. Assuming the RRS distribution $y = 100\exp[-(d/d_m)^n]$ ($y$ = cumulative % oversize), find $n$ and $d_m$, the % oversize at 0.70 mm and the median size. What does the value of $n$ indicate?`,
          solution: String.raw`**Given:** $y(0.25) = 80\%$, $y(0.50) = 30\%$.

**Find:** $n$, $d_m$, $y(0.70)$, $d_{50}$.

1. **Linear form:** $\ln(100/y) = (d/d_m)^n$, so $\ln\ln(100/y) = n\ln d - n\ln d_m$.

2. **Two points:** $\ln(100/80) = 0.2231$ and $\ln(100/30) = 1.2040$.
$$\left(\frac{0.50}{0.25}\right)^n = \frac{1.2040}{0.2231} = 5.397 \;\Rightarrow\; n = \frac{\ln 5.397}{\ln 2} = 2.43$$
$$d_m = \frac{0.50}{1.2040^{1/2.43}} = \frac{0.50}{1.079} = 0.463\ \text{mm}$$

3. **Oversize at 0.70 mm:**
$$y = 100\exp[-(0.70/0.463)^{2.43}] = 100e^{-2.73} = 6.5\%$$

4. **Median** ($y = 50\%$): $d_{50} = d_m(\ln 2)^{1/n} = 0.463(0.693)^{0.411} = 0.398$ mm.

5. **Meaning:** at $d = d_m$, $y = 100e^{-1} = 36.8\%$, so $d_m$ is the size with 36.8% oversize. The spread is set by $n$: the larger $n$, the steeper the curve and the more uniform the crystals (slides: "the greater n, the more nearly uniform the distribution"). $n = 2.4$ is a moderately wide distribution, typical of a mixed-suspension crystallizer.

**Result:** $n = 2.43$, $d_m = 0.463$ mm; 6.5% oversize at 0.70 mm; median 0.40 mm.`,
          answer: String.raw`**n = 2.43**, **d_m = 0.463 mm**; oversize at 0.70 mm ≈ **6.5%**; median ≈ **0.40 mm**; larger n = more uniform CSD.` } ] }
  ]
});
