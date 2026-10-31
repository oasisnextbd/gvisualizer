QB.paper({ year: "Practice", set: "Staged column design", date: "", marks: 0, practice: true,
  rules: String.raw`Staged and packed column design: every worked example and check question from slide deck 6, all starred Wankat 3e Chapter 10 problems with book-answer checks, and exam-style practice problems.`,
  questions: [
    { id: "practice-column-design-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw`An n-hexane–n-heptane column operates at 101.3 kPa with a distillate rate $D = 50$ kmol/h and reflux ratio $R = 2.2$. The vapor leaving the top tray is 96 mol% n-hexane at 70 °C. Molar masses: hexane 86.18, heptane 100.20 kg/kmol.`,
      parts: [
        { id: "practice-column-design-P1a", label: "(a)", marks: "", topic: "column-design",
          sub: "Column diameter from the top vapor flow (worked example)", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 06 (Staged Column Design), Worked Example: Column Diameter`,
          text: String.raw`The allowable vapor velocity is 1.2 m/s, based on the total cross-section. Find the column diameter. Also give the diameter if the 1.2 m/s were a net-area velocity with downcomers taking $A_d/A_T = 0.12$.`,
          solution: String.raw`**Given:** $D = 50$ kmol/h, $R = 2.2$, $y_1 = 0.96$ hexane, $T = 70$ °C $= 343.15$ K, $P = 101.3$ kPa, $u = 1.2$ m/s (total area).

**Find:** column diameter $D_c$.

**Assumptions:** total condenser and CMO, so the top vapor is $V = (R+1)D$. The vapor is an ideal gas.

**Method:** the slide's four-step chain $V \to \dot m_V \to Q_V \to A \to D_c$.

1. Vapor molar flow: $V = (R+1)D = (2.2+1)(50) = 160$ kmol/h.
2. Vapor molar mass: $M_V = \sum y_i M_i = 0.96(86.18) + 0.04(100.20) = 86.74$ kg/kmol. Mass flow: $\dot m_V = V M_V = 160 \times 86.74 = 13\,879$ kg/h.
3. Vapor density: $\rho_V = \dfrac{P M_V}{R T} = \dfrac{(101.3)(86.74)}{(8.314)(343.15)} = 3.080$ kg/m³. Volumetric flow: $Q_V = 13\,879/3.080 = 4506$ m³/h $= 1.252$ m³/s.
4. Area and diameter: $A = Q_V/u = 1.252/1.2 = 1.043$ m², so $D_c = \sqrt{4A/\pi} = \sqrt{4(1.043)/\pi} = 1.152$ m. Round up: **use 1.2 m**.

**Check:** $Q_V = V R T/P = (160/3600)(8.314)(343.15)/101.3 = 1.252$ m³/s, the same as step 3. $M_V$ cancels.

**Net-area basis:** $A_{net} = 1.043$ m², so $A_T = A_{net}/(1 - A_d/A_T) = 1.043/0.88 = 1.185$ m² and $D_c = 1.23$ m. Round up to the next standard size, about 1.25 m.

My numbers match the slide: 160 kmol/h, 86.74 kg/kmol, 13 879 kg/h, 3.08 kg/m³, 1.252 m³/s, 1.043 m², 1.15 m → 1.2 m.

**Exam tip:** divide by 3600 before you divide by $u$, and always round the diameter **up**.`,
          answer: String.raw`$V = 160$ kmol/h, $\rho_V = 3.08$ kg/m³, $Q_V = 1.252$ m³/s, $A = 1.043$ m², $D_c = 1.15$ m → use 1.2 m (1.23 m on a net-area basis).` },
        { id: "practice-column-design-P1b", label: "(b)", marks: "", topic: "column-design",
          sub: "Column height from equilibrium stages and overall efficiency (worked example)", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 06 (Staged Column Design), Worked Example: Column Height`,
          text: String.raw`The same column needs 17.8 equilibrium stages, including the partial reboiler, at an overall efficiency $E_O = 0.70$. Tray spacing is 0.50 m, with 1.2 m above the top tray and 2.0 m below the bottom tray. Find the column height.`,
          solution: String.raw`**Given:** $N_{equil} = 17.8$ (including the partial reboiler), $E_O = 0.70$, $S = 0.50$ m, $H_{top} = 1.2$ m, $H_{bottom} = 2.0$ m.

**Find:** the number of real trays and the column height $H$.

1. The partial reboiler is an equilibrium stage that sits outside the tray stack, so the trays must supply $17.8 - 1 = 16.8$ equilibrium stages.
2. Real trays: $N_{act} = 16.8/E_O = 16.8/0.70 = 24.0$, so **24 trays**.
3. Height: $H = (N_{act} - 1)S + H_{top} + H_{bottom} = (24-1)(0.50) + 1.2 + 2.0 = 11.5 + 3.2 = 14.7$ m.

![Column of 24 real trays: 23 tray spaces of 0.50 m plus 1.2 m top and 2.0 m bottom allowances give 14.7 m](fig/practice-column-design-P1b-sol.svg)

My result agrees with the slide (24 trays, 14.7 m).

**Common slip:** $N_{act} \times S + 3.2 = 15.2$ m counts one space too many, because 24 trays have only 23 spaces between them.`,
          answer: String.raw`$N_{act} = (17.8 - 1)/0.70 = 24$ trays; $H = 23(0.50) + 1.2 + 2.0 = 14.7$ m.` } ] },
    { id: "practice-column-design-P2", q: 2, section: "S", compulsory: false,
      stem: String.raw`Check-your-understanding questions on column equipment.`,
      parts: [
        { id: "practice-column-design-P2a", label: "(a)", marks: "", topic: "column-design",
          sub: "Tray choice for a clean feed that swings ±40%", type: "theory", syllabus: "in", repeats: ["2020-21-Q1a"],
          origin: "slides", ref: String.raw`Slides 06, Check Your Understanding: Equipment, Q1`,
          text: String.raw`A new column's feed rate swings ±40% from season to season, and the feed is clean. Would you choose sieve, valve or bubble-cap trays? Why?`,
          solution: String.raw`**Valve trays.**

- **Turndown.** At 60% of design rate a sieve tray is at the edge of its range: its efficiency falls sharply below about 60% of the design gas rate, and it starts to weep. A valve's lift follows the vapor rate, so the slot velocity and the efficiency stay nearly constant over a wide range.
- **Feed is clean.** The main weakness of valve trays, fouling or plugging with dirty liquids, does not apply.
- **Cost.** Valve trays cost about 1.2 × sieve trays. Bubble caps cost about 4 × valve trays, entrain about 3 × as much, and have turndown that is often no better. They are not justified for a new column.
- Valve and sieve trays have about the same efficiency at the design point, so nothing is lost there.`,
          answer: String.raw`Valve trays: good turndown for a ±40% swing, clean service removes their fouling drawback, and they are far cheaper than bubble caps.` },
        { id: "practice-column-design-P2b", label: "(b)", marks: "", topic: "column-design",
          sub: "Why two- and four-pass trays but not three-pass", type: "theory", syllabus: "in", repeats: ["2020-21-Q1a"],
          origin: "slides", ref: String.raw`Slides 06, Check Your Understanding: Equipment, Q2`,
          text: String.raw`Why are two-pass and four-pass trays common, while three-pass trays are avoided?`,
          solution: String.raw`- **Why multiple passes are needed:** liquid capacity grows with weir length ($\propto D$), while vapor capacity grows with area ($\propto D^2$). In a large column at high liquid rate, a single cross-flow pass runs out of weir length (and has a large liquid gradient) before it runs out of vapor area. Splitting the liquid into 2 or 4 passes shortens the flow path and raises the total weir length.
- **Why not three:** with 2 or 4 passes the layout is symmetric. Each pass gets the same weir length, path length and active area, so the liquid splits evenly by itself. Three passes cannot be made symmetric: the centre pass and the two side passes differ in length and weir length. The liquid then maldistributes, the passes are loaded unequally, and efficiency falls.`,
          answer: String.raw`Passes are added when weir length (∝ D) limits liquid capacity; 2 and 4 passes are symmetric and split the liquid evenly, while 3 passes cannot be made symmetric and maldistribute the liquid.` },
        { id: "practice-column-design-P2c", label: "(c)", marks: "", topic: "column-design",
          sub: "Adjustable weirs to fix turndown", type: "theory", syllabus: "in", repeats: ["2020-21-Q1a"],
          origin: "slides", ref: String.raw`Slides 06, Check Your Understanding: Equipment, Q3`,
          text: String.raw`An operator proposes adjustable weirs to fix poor turndown. What is your response?`,
          solution: String.raw`Avoid them.

- They look like the answer to turndown, but in practice they get **maladjusted**. Set too low, the tray runs dry or weeps (low liquid holdup). Set too high, the pressure drop and downcomer backup rise. Settings also drift or are changed by mistake, and every change needs a shutdown.
- **Better fixes:** a **notched (picket-fence) weir**, which keeps a reasonable crest height at low liquid rates and costs only a little more than a straight weir; or **valve trays**, if the problem is low vapor rate (weeping).`,
          answer: String.raw`Reject adjustable weirs (easily maladjusted: weeping or dry trays). Use notched weirs for low liquid rates, or valve trays for vapor turndown.` },
        { id: "practice-column-design-P2d", label: "(d)", marks: "", topic: "column-design",
          sub: "Chimney tray and the stage count", type: "theory", syllabus: "in", repeats: ["2020-21-Q1a"],
          origin: "slides", ref: String.raw`Slides 06, Check Your Understanding: Equipment, Q4`,
          text: String.raw`Why must a chimney tray be left out when converting equilibrium stages to real trays?`,
          solution: String.raw`A chimney tray has a **solid deck with no holes or valves**. Vapor passes up through chimneys with hats, and the liquid collects on the deck to be drawn off (side draw, pump feed). Vapor and liquid never bubble through each other, so **no mass transfer** happens there and it is not an equilibrium stage. If you count it as a tray, the column will be one real stage short. Add it to the height as an extra tray space, plus the liquid holdup it needs, but not to $N_{act}$.`,
          answer: String.raw`A chimney tray only collects liquid (solid deck, no vapor–liquid contact), so it gives no separation and must not be counted as a stage.` } ] },
    { id: "practice-column-design-P3", q: 3, section: "S", compulsory: false,
      stem: String.raw`Check-your-understanding questions on column sizing.`,
      parts: [
        { id: "practice-column-design-P3a", label: "(a)", marks: "", topic: "column-design",
          sub: "Diameter at the top of a methanol–water column", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 06, Check Your Understanding: Column Sizing, Q1`,
          text: String.raw`At the top of a methanol–water column, $V = 200$ kmol/h with $y = 0.98$ methanol at 66 °C and 101.3 kPa. The allowable velocity is $u = 1.5$ m/s (total area). Find the diameter. $M = 32.04$ (methanol) and 18.02 (water) kg/kmol.`,
          solution: String.raw`**Given:** $V = 200$ kmol/h, $y = 0.98$, $T = 339.15$ K, $P = 101.3$ kPa, $u = 1.5$ m/s.

1. $M_V = 0.98(32.04) + 0.02(18.02) = 31.76$ kg/kmol, so $\dot m_V = 200 \times 31.76 = 6352$ kg/h.
2. $\rho_V = PM_V/RT = (101.3)(31.76)/[(8.314)(339.15)] = 1.141$ kg/m³.
3. $Q_V = 6352/1.141/3600 = 1.546$ m³/s. Check: $VRT/P = (200/3600)(8.314)(339.15)/101.3 = 1.546$ m³/s.
4. $A = Q_V/u = 1.546/1.5 = 1.031$ m², so $D_c = \sqrt{4(1.031)/\pi} = 1.146$ m → **use 1.2 m**.`,
          answer: String.raw`$Q_V = 1.546$ m³/s, $A = 1.031$ m², $D_c = 1.15$ m → 1.2 m.` },
        { id: "practice-column-design-P3b", label: "(b)", marks: "", topic: "column-design",
          sub: "Height of a 30-tray column", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 06, Check Your Understanding: Column Sizing, Q2`,
          text: String.raw`A column has 30 real trays at 0.60 m spacing, with 1.5 m above the top tray and 2.5 m below the bottom tray. Find the column height.`,
          solution: String.raw`$H = (N_{act}-1)S + H_{top} + H_{bottom} = (30-1)(0.60) + 1.5 + 2.5 = 17.4 + 4.0 = 21.4$ m.

(Using $30 \times 0.60$ would give 22.0 m, one tray space too many.)`,
          answer: String.raw`$H = 29(0.60) + 1.5 + 2.5 = 21.4$ m.` },
        { id: "practice-column-design-P3c", label: "(c)", marks: "", topic: "column-design",
          sub: "Effect of a subcooled feed on top and bottom diameters", type: "theory", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 06, Check Your Understanding: Column Sizing, Q3`,
          text: String.raw`The feed changes from saturated liquid to subcooled liquid at the same reflux ratio. Which section's diameter grows, and why?`,
          solution: String.raw`- The top vapor $V = (R+1)D$ is fixed by $R$ and $D$, so the **rectifying (top) diameter does not change**.
- At the feed stage, $\bar V = V - (1-q)F$. A subcooled feed has $q > 1$, so $\bar V = V + (q-1)F > V$: the cold feed condenses $(q-1)F$ of rising vapor, and the reboiler must make that much extra vapor.
- The **stripping (bottom) section** therefore carries more vapor. Its $Q_V = \bar V R T/P$ rises (at the hottest temperature in the column too), and $D \propto \sqrt{Q_V}$, so **the bottom diameter grows**. The reboiler duty rises as well.`,
          answer: String.raw`The stripping section: q > 1 gives V̄ = V + (q − 1)F > V, so more vapor (and the highest T) at the bottom; the top is unchanged.` },
        { id: "practice-column-design-P3d", label: "(d)", marks: "", topic: "column-design",
          sub: "Volumetric vapor flow does not depend on molar mass", type: "derivation", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Slides 06, Check Your Understanding: Column Sizing, Q4`,
          text: String.raw`Show that the volumetric flow of an ideal-gas vapor does not depend on its molar mass. Where in the column is $Q_V$ usually largest?`,
          solution: String.raw`$$Q_V = \frac{\dot m_V}{\rho_V} = \frac{V M_V}{P M_V/(RT)} = \frac{V R T}{P}$$

$M_V$ cancels, so for an ideal gas the volume depends only on the molar flow, $T$ and $P$.

**Where it is largest:** $Q_V \propto V T/P$. With a saturated-liquid feed (or $q \ge 1$), $\bar V \ge V$. The bottom is also the hottest point, and in a real column it has the highest pressure (the trays' pressure drop), which works slightly the other way. So $Q_V$ is usually largest at the **bottom**. With a vapor or partly vaporized feed ($q < 1$), $V > \bar V$ and the top can carry the largest $Q_V$. That is why both ends are sized.

The allowable velocity, however, depends on densities ($u_{flood} \propto \sqrt{(\rho_L-\rho_V)/\rho_V}$), so the diameter itself still depends on $M_V$ through $\rho_V$.`,
          answer: String.raw`$Q_V = VM_V/(PM_V/RT) = VRT/P$, independent of $M_V$; usually largest at the bottom (largest V̄ and T) unless the feed is largely vapor.` } ] },
    { id: "practice-column-design-P4", q: 4, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-column-design-P4", label: "", marks: "", topic: "column-design",
          sub: "O'Connell overall efficiency for hexane–heptane at 700 kPa", type: "numerical", syllabus: "in", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D1* (repeat of Example 10-1 at 700 kPa)`,
          text: String.raw`A sieve-plate column separates a saturated-liquid feed of 50 mol% n-hexane and 50 mol% n-heptane into $x_D = 0.999$ and $x_B = 0.001$ (hexane), with $L/V = 0.8$, a total condenser and a total reboiler, 24-in tray spacing and $F = 1000$ lbmol/h. The average column pressure is now **700 kPa** (instead of 1 atm). Estimate the overall efficiency with the O'Connell correlation. Pure-liquid viscosities follow $\log_{10}\mu = A(1/T - 1/B)$ (μ in cP, T in K) with $A = 362.79$, $B = 207.08$ for n-C6 and $A = 436.73$, $B = 232.53$ for n-C7; for the mixture use $\ln\mu_{mix} = x_1\ln\mu_1 + x_2\ln\mu_2$.`,
          solution: String.raw`**Given:** $P = 700$ kPa, feed $x = 0.5$, nearly pure products.

**Find:** $E_O$ from O'Connell, which needs $\alpha$ and $\mu_{feed}$ at the average column temperature.

**Data:** K values from the DePriester chart, using the McWilliams fit (Wankat Eq. 2-30 with Table 2-3 constants; $T$ in °R, $p$ in psia). O'Connell fit, Wankat Eq. (10-6):
$$E_O = 0.52782 - 0.27511\log_{10}(\alpha\mu) + 0.044923[\log_{10}(\alpha\mu)]^2$$

1. **Column temperatures at 700 kPa** (boiling points where $K = 1$):

| x (hexane) | T, °C | y | α |
|---|---|---|---|
| 0 | 193.5 | 0 | 1.710 |
| 0.25 | 180.2 | 0.368 | 1.744 |
| 0.50 | 168.8 | 0.640 | 1.776 |
| 0.75 | 159.1 | 0.844 | 1.807 |
| 1.0 | 150.6 | 1 | 1.835 |

   Top (≈ pure hexane) is 150.6 °C and bottom (≈ pure heptane) is 193.5 °C. The arithmetic-average temperature is $T_{avg} = 172.1$ °C $= 445.2$ K.
2. **Relative volatility** at 172.1 °C: $\alpha = K_{C6}/K_{C7} = 1.767$. (At $x = 0.5$, $T = 168.8$ °C and $\alpha = 1.776$, which is almost the same.)
3. **Viscosities** at 445.2 K: $\mu_{C6} = 10^{362.79(1/445.2 - 1/207.08)} = 0.1156$ cP and $\mu_{C7} = 10^{436.73(1/445.2-1/232.53)} = 0.1267$ cP. Then $\ln\mu_{mix} = 0.5\ln 0.1156 + 0.5\ln 0.1267$, so $\mu_{mix} = 0.1210$ cP.
4. $\alpha\mu = 1.767 \times 0.1210 = 0.2138$, so $\log_{10}(\alpha\mu) = -0.670$ and
   $E_O = 0.52782 + 0.27511(0.670) + 0.044923(0.449) = 0.732$.

**Check:** with the same steps at 1 atm I get $T_{avg} = 86$ °C, $\alpha = 2.37$, $\mu = 0.199$ cP, $\alpha\mu = 0.47$ and $E_O = 0.62$, matching Example 10-1 ($E_O = 0.62$ from Eq. 10-6).

**Book answer: $E_O = 0.73$ ✓.**

**Why it rises with pressure:** at 700 kPa the column is about 90 °C hotter. That lowers both $\alpha$ (2.35 → 1.77) and $\mu$ (0.204 → 0.121 cP). A smaller $\alpha\mu$ means higher efficiency on O'Connell's curve, although more equilibrium stages are needed because α is lower.`,
          answer: String.raw`At 700 kPa: T_avg ≈ 172 °C, α = 1.77, μ_mix = 0.121 cP, αμ = 0.214 → E_O = 0.73 (book 0.73 ✓).` } ] },
    { id: "practice-column-design-P5", q: 5, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-column-design-P5", label: "", marks: "", topic: "column-design",
          sub: "Fair flooding diameter at the bottom of a hexane–heptane sieve column", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D2* (repeat of Example 10-2 at the column bottom)`,
          text: String.raw`For the column of Example 10-1 (F = 1000 lbmol/h saturated liquid, 50/50 hexane–heptane, D = 500 lbmol/h, L/V = 0.8 at the top, 24-in tray spacing, 1 atm, operation at 75% of flooding, η = 0.90), calculate the diameter at the **bottom** of the column. For n-heptane: M = 100.2, normal boiling point 98.4 °C, specific gravity 0.684, μ (98.4 °C) = 0.205 cP, σ (98.4 °C) = 12.5 dyn/cm.`,
          solution: String.raw`> The slides size a column from a given allowable velocity. Fair's flooding correlation that supplies that velocity (Wankat Eqs. 10-8 to 10-16) is only named in the deck.

**Given:** bottom liquid and vapor are practically pure n-heptane at 98.4 °C (371.55 K), 1 atm; 24-in spacing; 75% of flood; $\eta = A_{net}/A_T = 0.90$.

**Assumptions:** CMO; the saturated-liquid feed gives $\bar V = V$ and $\bar L = L + F$; ideal-gas vapor.

1. **Flows:** at the top, $V = D/(1 - L/V) = 500/0.2 = 2500$ lbmol/h and $L = 2000$ lbmol/h. In the stripping section, $\bar L = L + F = 3000$ and $\bar V = 2500$ lbmol/h, so $\bar L/\bar V = 1.2$.
2. **Densities:** $\rho_V = PM/RT = (1)(100.2)/[(1.314)(371.55)] = 0.2052$ lb/ft³ (R = 1.314 atm ft³/(lbmol K)). $\rho_L = 0.684(62.4) = 42.68$ lb/ft³.
3. **Flow parameter:** $F_{lv} = \dfrac{\bar L M_L}{\bar V M_V}\sqrt{\rho_V/\rho_L} = 1.2\sqrt{0.2052/42.68} = 0.0832$.
4. **Capacity factor (24-in spacing):** Eq. (10-10e), $\log_{10}C_{sb,f} = -0.94506 - 0.70234\log_{10}F_{lv} - 0.22618(\log_{10}F_{lv})^2$, gives $C_{sb,f} = 0.354$ ft/s. Figure 10-16 reads lower, about 0.33 ft/s. (At the top, Example 10-2 read 0.36 from the figure against 0.38 from the equation.) Use the conservative chart value, 0.33.
5. **Flooding velocity:** $u_{flood} = C_{sb,f}(\sigma/20)^{0.2}\sqrt{(\rho_L-\rho_V)/\rho_V} = 0.33(12.5/20)^{0.2}\sqrt{(42.68-0.205)/0.2052} = 0.300 \times 14.39 = 4.32$ ft/s.
6. **Diameter**, Eq. (10-16):
$$D_c = \sqrt{\frac{4\bar V M_V}{\pi\,\eta\,\rho_V\,(0.75\,u_{flood})\,3600}} = \sqrt{\frac{4(2500)(100.2)}{\pi(0.90)(0.2052)(0.75)(4.32)(3600)}} = 12.2 \text{ ft}$$
   With the equation value $C_{sb} = 0.354$, $D_c = 11.7$ ft.

**Book answer: D = 12.35 ft.** My 12.2 ft is within the chart-reading uncertainty (the book's value corresponds to $C_{sb} \approx 0.32$ ft/s). ✓ Either way the bottom (≈ 12–12.4 ft) needs a larger diameter than the top (11.0 ft, Example 10-2), so the column is designed at the bottom: about **12.5 ft** (next ½ ft).

**Why the bottom is bigger:** the vapor flow is the same, but heptane vapor is heavier and the bottom is hotter. The $(L/V)$ term is larger too, which lowers $C_{sb}$. This is the rule of thumb for a saturated-liquid feed and a homologous series.`,
          answer: String.raw`F_lv = 0.083, C_sb ≈ 0.33 ft/s, u_flood = 4.32 ft/s → D ≈ 12.2 ft at the bottom (book 12.35 ft ✓); design at the bottom, ≈ 12.5 ft.` } ] },
    { id: "practice-column-design-P6", q: 6, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-column-design-P6", label: "", marks: "", topic: "column-design",
          sub: "Valve-tray dry pressure drop vs hole velocity (Bolles)", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D4*`,
          text: String.raw`Repeat the distillation of Examples 10-2 and 10-3 (top of the column: $\rho_V = 0.1917$ lb/ft³, $\rho_L = 41.12$ lb/ft³) with valve trays. The valves have 2-inch-diameter heads and each weighs about 0.08 lb. Using the same $K_v$ and $C_v$ values as Bolles' data in Wankat's valve-tray figure ($K_{v,closed} = 33$, $K_{v,open} = 5.5$, $C_v = 1.25$), estimate the dry pressure drop vs hole velocity curve for the top of the column.`,
          solution: String.raw`> Valve trays are compared qualitatively in the slides ("Bolles' procedure: what changes from sieve trays"). The Bolles pressure-drop equations are from Wankat Section 10.6.

**Equations (Wankat 10-34 to 10-36):**
- Kinetic-energy loss: $h_{\Delta p,valve} = K_v\dfrac{\rho_V}{\rho_L}\dfrac{v_o^2}{2g}$ (ft of liquid), with $K_v = 33$ when all valves are closed and $5.5$ when all are open.
- Plateau set by the valve weight: $h_{\Delta p,valve} = C_v\dfrac{W_{valve}}{A_v\rho_L}$.

1. **All valves closed:** $h = 33\left(\dfrac{0.1917}{41.12}\right)\dfrac{v_o^2}{2(32.2)} = 0.002389\,v_o^2$ ft $= 0.0287\,v_o^2$ in of liquid.
2. **All valves open:** $h = 5.5(0.1917/41.12)\,v_o^2/64.4 = 0.000398\,v_o^2$ ft $= 0.00478\,v_o^2$ in.
3. **Plateau (balance-point head):** $A_v = \pi(2/12)^2/4 = 0.02182$ ft², so $h = 1.25(0.08)/[(0.02182)(41.12)] = 0.1115$ ft $= 1.34$ in of liquid.
4. **Balance points**, Eq. (10-36), where the plateau meets each line:
   - closed balance point: $v_o = \sqrt{1.338/0.0287} = 6.83$ ft/s
   - open balance point: $v_o = \sqrt{1.338/0.00478} = 16.73$ ft/s
5. **The curve:**
   - $v_o < 6.83$ ft/s: all valves closed, $h = 0.0287v_o^2$ in
   - $6.83 \le v_o \le 16.73$ ft/s: valves partly open, $h \approx 1.34$ in (constant)
   - $v_o > 16.73$ ft/s: all valves open, $h = 0.00478v_o^2$ in

![Dry valve-tray pressure drop vs hole velocity on log axes: rising line, plateau at 1.34 in between 6.83 and 16.7 ft/s, then a lower rising line](fig/practice-column-design-P6-sol.svg)

**Book answer:** balance-point head 1.34 in of liquid; closed $0.0287v_o^2$ for $v_o < 6.83$ ft/s; open $0.00478v_o^2$ for $v_o > 16.73$ ft/s ✓ (all identical).

**Why it matters:** across the plateau the dry pressure drop stays constant while the vapor rate changes by a factor of about 2.5. That is the valve tray's turndown advantage.`,
          answer: String.raw`Closed: h = 0.0287v₀² in (v₀ < 6.83 ft/s); plateau h = 1.34 in; open: h = 0.00478v₀² in (v₀ > 16.73 ft/s) — matches the book ✓.` } ] },
    { id: "practice-column-design-P7", q: 7, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-column-design-P7", label: "", marks: "", topic: "column-design",
          sub: "HETP of a new packing from a total-reflux test (methanol–water)", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D5*`,
          text: String.raw`A new packing is tested by distilling methanol–water at total reflux and 101.3 kPa. The packed section is 1.0 m long. The liquid leaving the total condenser is 96 mol% methanol and the reboiler liquid is 4 mol% methanol. Find the HETP at this gas rate. Use the methanol–water VLE data of Wankat Table 2-7.`,
          solution: String.raw`> HETP (packed columns) is not in the slides. The stage count itself is ordinary total-reflux McCabe–Thiele.

**Given:** total reflux ($y_{j+1} = x_j$, operating line $y = x$), $x_D = 0.96$, $x_B = 0.04$, packed height $h = 1.0$ m, total condenser, partial reboiler.

**Method:** step off equilibrium stages at total reflux from $x_D$ down to $x_B$, interpolating Table 2-7 linearly. Then $\text{HETP} = h/N_{packing}$. The partial reboiler is an equilibrium stage outside the packing, so $N_{packing} = N - 1$.

| stage | y (vapor) | x (liquid in equilibrium) |
|---|---|---|
| 1 | 0.9600 | 0.9048 |
| 2 | 0.9048 | 0.7772 |
| 3 | 0.7772 | 0.4965 |
| 4 | 0.4965 | 0.1396 |
| 5 (reboiler) | 0.1396 | 0.0212 |

The fraction of the last stage is $(0.1396 - 0.04)/(0.1396 - 0.0212) = 0.84$, so $N = 4.84$ equilibrium stages including the reboiler.

![Total-reflux McCabe–Thiele for methanol–water from 0.96 to 0.04: 4.84 stages](fig/practice-column-design-P7-sol.svg)

$N_{packing} = 4.84 - 1 = 3.84$, so $\text{HETP} = 1.0/3.84 = 0.26$ m.

**Book answer: HETP = 0.31 m.** My stepping gives 0.26 m. The book's value corresponds to about 3.2 stages in the packing (4.2 in total). I cannot reproduce that with Table 2-7: stepping from the bottom up instead also gives 4.8 stages. The difference is most likely graph reading in the book's solution. Both numbers sit in the usual 0.3–0.6 m range for small random packings.`,
          answer: String.raw`N = 4.84 equilibrium stages incl. reboiler → 3.84 in the packing → HETP ≈ 0.26 m (book quotes 0.31 m; difference noted).` } ] },
    { id: "practice-column-design-P8", q: 8, section: "W", compulsory: false,
      stem: String.raw`A benzene–toluene packed column (3.5 m of packing, total condenser, partial reboiler, 760 mm Hg) is tested at total reflux: the condenser liquid is 0.987 mole fraction benzene and the reboiler liquid 0.008. The relative volatility varies from 2.61 (pure benzene) to 2.315 (pure toluene). Find the HETP using the Fenske equation with each α below.`,
      parts: [
        { id: "practice-column-design-P8a", label: "(a)", marks: "", topic: "column-design",
          sub: "HETP from Fenske with α = 2.315", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D6a*`,
          text: String.raw`Use α = 2.315.`,
          solution: String.raw`> The Fenske equation and HETP are outside the slides, which cover total reflux only graphically. Fenske is the analytical form of total-reflux stepping with constant α.

**Fenske:**
$$N_{min} = \frac{\ln\left[\dfrac{x_D}{1-x_D}\,\dfrac{1-x_B}{x_B}\right]}{\ln\alpha} = \frac{\ln[(0.987/0.013)(0.992/0.008)]}{\ln\alpha} = \frac{\ln 9415}{\ln\alpha} = \frac{9.150}{\ln\alpha}$$

With α = 2.315: $N_{min} = 9.150/0.8394 = 10.90$ equilibrium stages, counting the partial reboiler.

**HETP** = packed height/stages:
- Book convention, using all $N_{min}$ stages: $3.5/10.90 = 0.32$ m.
- Counting the partial reboiler as a stage outside the packing: $3.5/(10.90 - 1) = 0.35$ m.

**Book answer: 0.32 m ✓** (the book divides by the full $N_{min}$).`,
          answer: String.raw`N_min = 10.90 → HETP = 3.5/10.90 = 0.32 m (book ✓); 0.35 m if the reboiler stage is excluded.` },
        { id: "practice-column-design-P8b", label: "(b)", marks: "", topic: "column-design",
          sub: "HETP from Fenske with α = 2.61", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D6b*`,
          text: String.raw`Use α = 2.61.`,
          solution: String.raw`$N_{min} = 9.150/\ln 2.61 = 9.150/0.9594 = 9.54$.

HETP $= 3.5/9.54 = 0.37$ m (or $3.5/8.54 = 0.41$ m if the reboiler is excluded).

**Book answer: 0.37 m ✓.**`,
          answer: String.raw`N_min = 9.54 → HETP = 0.37 m (book ✓).` },
        { id: "practice-column-design-P8c", label: "(c)", marks: "", topic: "column-design",
          sub: "HETP from Fenske with geometric-mean α", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D6c*`,
          text: String.raw`Use the geometric-average α.`,
          solution: String.raw`$\alpha_{avg} = \sqrt{2.315 \times 2.61} = 2.458$, so $N_{min} = 9.150/\ln 2.458 = 9.150/0.8994 = 10.17$.

HETP $= 3.5/10.17 = 0.34$ m (0.38 m excluding the reboiler).

**Book answer: α_avg = 2.46, HETP = 0.34 m ✓.**

**Comment:** a 13% change in α changes the HETP by 15%. HETPs measured at total reflux need good VLE data, especially for close-boiling systems.`,
          answer: String.raw`α_avg = 2.46, N_min = 10.17 → HETP = 0.34 m (book ✓).` } ] },
    { id: "practice-column-design-P9", q: 9, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-column-design-P9", label: "", marks: "", topic: "column-design",
          sub: "Sieve-tray diameter at the top of a methanol–water column (Fair)", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D9*`,
          text: String.raw`Methanol and water are distilled in a sieve-plate column at 1.0 atm and 75% of flooding velocity. The feed is 1000.0 kmol/h of saturated vapor, 60 mol% methanol. Products: $x_D = 0.999$, $x_B = 0.01$ (methanol). Use $L/V = 0.6$, 0.4572 m (18 in) tray spacing and η = 0.90. Pure liquid methanol density is 0.79 g/ml; the surface tension of methanol is about $\sigma = 24.0 - 0.0773\,T$ dyn/cm (T in °C). Assume an ideal gas. Calculate the diameter based on conditions at the top of the column.`,
          solution: String.raw`> Fair's flooding correlation is outside the slides. The rest (V from external balances, $\rho_V$, area, diameter) is the slide procedure.

**Given:** $F = 1000$ kmol/h, $z = 0.6$, $x_D = 0.999$, $x_B = 0.01$, $L/V = 0.6$ in the rectifying section, 18-in spacing, 75% of flood, η = 0.90.

1. **External balance:** $D = F\dfrac{z - x_B}{x_D - x_B} = 1000\dfrac{0.59}{0.989} = 596.6$ kmol/h. Then $V = D/(1 - L/V) = 596.6/0.4 = 1491$ kmol/h at the top.
2. **Top properties:** practically pure methanol at its boiling point, 64.5 °C (337.65 K). $M_V = 0.999(32.04) + 0.001(18.02) = 32.03$. $\rho_V = PM/RT = (1)(32.03)/[(0.08206)(337.65)] = 1.156$ kg/m³. $\rho_L = 790$ kg/m³. $\sigma = 24.0 - 0.0773(64.5) = 19.0$ dyn/cm.
3. **Flow parameter:** $F_{lv} = (L/V)\sqrt{\rho_V/\rho_L} = 0.6\sqrt{1.156/790} = 0.0230$ (liquid and vapor have the same M).
4. **Capacity factor** for 18-in spacing, Eq. (10-10d): $\log_{10}C_{sb,f} = -1.0262 - 0.63513\log_{10}F_{lv} - 0.20097(\log_{10}F_{lv})^2$, so $C_{sb,f} = 0.298$ ft/s.
5. **Flooding velocity:** $u_{flood} = 0.298(19.0/20)^{0.2}\sqrt{(790 - 1.16)/1.156} = 7.72$ ft/s $= 2.35$ m/s. Operating velocity: $u = 0.75(2.35) = 1.765$ m/s.
6. **Area:** $Q_V = VM_V/(3600\rho_V) = 1491(32.03)/(3600 \times 1.156) = 11.48$ m³/s. $A_{net} = 11.48/1.765 = 6.51$ m² and $A_T = A_{net}/\eta = 7.23$ m².
7. **Diameter:** $D_c = \sqrt{4(7.23)/\pi} = 3.03$ m $= 9.95$ ft.

**Book answer: D = 10.27 ft.** My 9.95 ft is 3% lower because I took $C_{sb}$ from the curve fit. The book's value corresponds to $C_{sb} \approx 0.28$ ft/s, read from Figure 10-16. ✓ within chart accuracy. Design: **10.5 ft** (next ½-ft size).

**Note:** with a saturated-vapor feed $V > \bar V$, so the top is the right place to size this column.`,
          answer: String.raw`D = 596.6 kmol/h, V = 1491 kmol/h, ρ_V = 1.156 kg/m³, F_lv = 0.023, u_flood = 2.35 m/s → D ≈ 3.03 m = 9.95 ft (book 10.27 ft ✓ within C_sb reading); use 10.5 ft.` } ] },
    { id: "practice-column-design-P10", q: 10, section: "W", compulsory: false,
      stem: String.raw`An ethanol–water column at 1 atm makes 2250 lb/day of distillate, 80 mol% ethanol, with L/D = 2.0 and a total condenser. The packed column uses 5/8-inch plastic Pall rings (packing factor F = 97 ft⁻¹, Wankat Table 10-3). Properties: $M_E = 46$, $M_W = 18$, ideal-gas vapor, liquid viscosity 0.52 cP at 176 °F, liquid density 0.82 g/ml. Calculate the diameter at the top of the column.`,
      parts: [
        { id: "practice-column-design-P10a", label: "(a)", marks: "", topic: "column-design",
          sub: "Packed-column diameter at 75% of flooding (Eckert GPDC)", type: "numerical", syllabus: "out", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D11a*`,
          text: String.raw`Operation is at 75% of flooding. What diameter is required?`,
          solution: String.raw`> Not covered in the current ChE 303 slides (packed-column flooding, Wankat Section 10.10).

**Given:** $\dot m_D = 2250$ lb/day; $x_D = y_1 = 0.80$; $L/D = 2$; F = 97 ft⁻¹; μ = 0.52 cP; $\rho_L = 0.82$ g/ml.

1. **Flows:** $M = 0.8(46) + 0.2(18) = 40.4$, so $D = 2250/40.4 = 55.69$ lbmol/day $= 2.320$ lbmol/h and $V = (L/D + 1)D = 6.962$ lbmol/h. Liquid and vapor at the top have the same composition, so $L'/G' = L/V = 2/3$.
2. **Densities:** at the top, $T \approx 78.2$ °C $= 351.35$ K, so $\rho_G = (1)(40.4)/[(1.314)(351.35)] = 0.0875$ lb/ft³. $\rho_L = 0.82(62.4) = 51.17$ lb/ft³. $\psi = \rho_{water}/\rho_L = 0.972/0.82 = 1.185$ (water at about 80 °C).
3. **Abscissa:** $F_{lv} = (L'/G')\sqrt{\rho_G/\rho_L} = 0.667\sqrt{0.0875/51.17} = 0.0276$.
4. **Flooding ordinate**, Eq. (10-39a): $\log_{10}[\ ] = -1.6678 - 1.085\log F_{lv} - 0.29655(\log F_{lv})^2$, so the ordinate is $0.201$.
5. $G'_{flood} = \sqrt{\dfrac{0.201\,\rho_G\rho_L g_c}{F\psi\mu^{0.2}}} = \sqrt{\dfrac{0.201(0.0875)(51.17)(32.2)}{97(1.185)(0.52)^{0.2}}} = 0.536$ lb/(s ft²). At 75%: $G' = 0.402$ lb/(s ft²).
6. **Area**, Eq. (10-41): $A = \dfrac{V M}{G'} = \dfrac{(6.962/3600)(40.4)}{0.402} = 0.194$ ft², so $D_c = \sqrt{4A/\pi} = 0.497$ ft $= 5.97$ in.

**Book answer: 6.05 in ✓** (1% difference: flooding curve fit vs figure).`,
          answer: String.raw`V = 6.96 lbmol/h, F_lv = 0.0276, G′_flood = 0.536 lb/(s ft²) → D ≈ 5.97 in (book 6.05 in ✓).` },
        { id: "practice-column-design-P10b", label: "(b)", marks: "", topic: "column-design",
          sub: "Packed-column diameter at a set pressure drop", type: "numerical", syllabus: "out", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D11b*`,
          text: String.raw`Operation is at a pressure drop of 0.25 inches of water per foot of packing. What diameter is required?`,
          solution: String.raw`> Not covered in the current ChE 303 slides.

Same abscissa, $F_{lv} = 0.0276$. On the 0.25 in H₂O/ft curve of Wankat Figure 10-27, the ordinate there reads about **0.034** (my reading).

$G' = \sqrt{\dfrac{0.034(0.0875)(51.17)(32.2)}{97(1.185)(0.52)^{0.2}}} = 0.221$ lb/(s ft²), so $A = (6.962/3600)(40.4)/0.221 = 0.353$ ft² and $D_c = 0.670$ ft $= 8.04$ in.

**Book answer: 8.01 in ✓.** The 0.25 in/ft design runs at only about 41% of flooding, so it needs a larger column than (a).`,
          answer: String.raw`Ordinate ≈ 0.034 at F_lv = 0.028 → G′ = 0.221 lb/(s ft²) → D ≈ 8.0 in (book 8.01 in ✓).` },
        { id: "practice-column-design-P10c", label: "(c)", marks: "", topic: "column-design",
          sub: "Scaling the diameter with throughput", type: "numerical", syllabus: "out", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D11c*`,
          text: String.raw`Repeat part (a) for 22,500 lb/day of distillate product.`,
          solution: String.raw`At the same compositions, L/D and fraction of flooding, $G'$ is unchanged and $V \propto D$. So $A \propto D$ and $D_c \propto \sqrt{D}$:

$D_c = 5.97\sqrt{22\,500/2250} = 5.97\sqrt{10} = 18.9$ in.

**Book answer: 19.14 in ✓** (the book scales its own 6.05 in: $6.05\sqrt{10} = 19.1$).`,
          answer: String.raw`D_c ∝ √D → 5.97√10 ≈ 18.9 in (book 19.14 in ✓).` } ] },
    { id: "practice-column-design-P11", q: 11, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-column-design-P11", label: "", marks: "", topic: "column-design",
          sub: "HETP of a packed enriching column for water–nitromethane", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D12* (data: Wankat Table 8-3, Problem 8.E1)`,
          text: String.raw`A packed enriching column (no stripping section) has 1.524 m of packing. A saturated-vapor feed, $F = 10$ kmol/h of 23.5 mol% water and 76.5% nitromethane, enters at the bottom. $L/V = 0.8$ is required. The overhead is condensed and decanted; the water-rich layer $x_\beta = 0.914$ (mole fraction water) is the distillate, $x_D = x_\beta = 0.914$, and the nitromethane-rich layer is refluxed. Find the HETP and the water mole fraction in the bottoms. Water–nitromethane VLE at 1 atm (mol% water):

| liquid | vapor | liquid | vapor |
|---|---|---|---|
| 7.9 | 34.0 | 81.4 | 50.1 |
| 16.2 | 45.0 | 88.0 | 50.2 |
| 23.2 | 49.7 | 91.4 | 50.3 |
| 31.2 | 50.0 | 92.5 | 51.3 |
| 39.2 | 50.2 | 93.5 | 52.9 |
| 45.0 | 50.2 | 95.1 | 55.9 |
| 55.2 | 50.2 | 95.9 | 57.5 |
| 63.8 | 50.2 | 97.5 | 65.8 |
| 73.0 | 50.2 | 97.8 | 68.4 |
| 77.0 | 50.2 | 98.6 | 79.2 |`,
          solution: String.raw`> HETP is outside the slides. The staging is an enriching-column McCabe–Thiele with a decanter (heterogeneous azeotrope), which the slides cover only in outline.

**Given:** $V = F = 10$ kmol/h saturated vapor, $y_{N+1} = 0.235$ water; $L/V = 0.8$; $x_D = 0.914$; packed height 1.524 m.

**Assumptions:** CMO; total condenser and decanter. The reflux is the nitromethane-rich layer at its saturation composition, $x_\alpha = 0.312$ water (the left end of the flat, two-liquid part of the table; Wankat uses 0.312 in Problem 8.D23).

1. **Flows:** $V = 10$, $L = 8$, $D = V - L = 2$ and $B = L = 8$ kmol/h.
2. **Bottoms:** $Fz = Dx_D + Bx_B$, so $x_B = \dfrac{10(0.235) - 2(0.914)}{8} = \mathbf{0.0653}$ water.
3. **Operating line** (balance around the top): $y_{j+1} = \dfrac{L}{V}x_j + \dfrac{D}{V}x_D = 0.8x_j + 0.1828$. It passes through $(x_D, x_D) = (0.914, 0.914)$. The top vapor is $y_1 = 0.8(0.312) + 0.1828 = 0.432$; check: 0.432 splits into the 0.312 and 0.914 layers with $D/V = (0.432-0.312)/(0.914-0.312) = 0.20$ ✓.
4. **Step from the top** (water is the more volatile component at low water content). Equilibrium is interpolated linearly, and taken linear to the origin below 7.9% ($y = 4.30x$):

| stage | y_j | x_j |
|---|---|---|
| 1 | 0.4324 | 0.1487 |
| 2 | 0.3018 | 0.0701 |
| 3 | 0.2389 | 0.0555 |

   $x_B = 0.0653$ is reached during stage 3: fraction $= (0.0701 - 0.0653)/(0.0701 - 0.0555) = 0.33$, so $N = 2.33$ equilibrium stages. (Check: below the last stage, $y = 0.8(0.0653) + 0.1828 = 0.235 = y_{feed}$ ✓.)

![Water–nitromethane enriching column: operating line y = 0.8x + 0.1828 and about 2.3 stages from the reflux composition down to x_B = 0.065](fig/practice-column-design-P11-sol.svg)

5. **HETP** $= 1.524/2.33 = 0.65$ m $= 2.1$ ft. All the stages are in the packing: there is no reboiler, and the decanter is not a stage.

**Book answer: HETP = 2.5 ft; x_B ≈ 0.65.** The book's $x_B$ must be a misprint for **0.065**: the mass balance fixes $x_B = 0.0653$ exactly ✓. Its HETP of 2.5 ft corresponds to exactly 2 stages. The fractional third stage depends on how the equilibrium curve is extrapolated below 7.9 mol% water, where there are no data, so I quote 2.1–2.5 ft.`,
          answer: String.raw`x_B = 0.065 water (book's "0.65" is 0.065); ≈2.3 stages (2 per the book) in 1.524 m → HETP ≈ 0.65–0.76 m (2.1–2.5 ft; book 2.5 ft).` } ] },
    { id: "practice-column-design-P12", q: 12, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-column-design-P12", label: "", marks: "", topic: "column-design",
          sub: "Packed diameter at fixed Δp: effect of a larger packing (3-in Intalox)", type: "numerical", syllabus: "out", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D16* (repeat of Example 10-4)`,
          text: String.raw`Repeat Example 10-4 using 3-inch Intalox saddles. In Example 10-4 a packed column separates n-hexane from n-heptane at 1 atm with an allowable pressure drop of 0.5 in water per ft; at the top L/V = 0.8, V = 2500 lbmol/h of nearly pure hexane (M = 86.17, 69 °C, specific gravity 0.659, μ = 0.22 cP; water density 0.9783 g/ml at 69 °C). With 1-inch ceramic Intalox saddles (F = 98) the diameter was 14.54 ft (graphical).`,
          solution: String.raw`> Not covered in the current ChE 303 slides.

**Same point on Figure 10-27:** the abscissa $F_{lv} = 0.8\sqrt{0.1917/41.12} = 0.055$ and the 0.5 in/ft curve are unchanged, so the ordinate is again 0.055 (as read in Example 10-4).

**Packing factor:** 3-inch ceramic Intalox saddles, $F = 22$ ft⁻¹ (Wankat Table 10-3).

$$G' = \sqrt{\frac{0.055\,\rho_G\rho_L g_c}{F\psi\mu^{0.2}}} = \sqrt{\frac{0.055(0.1917)(0.659 \times 62.4)(32.2)}{22(0.9783/0.659)(0.22)^{0.2}}} = 0.761 \text{ lb/(s ft}^2)$$

(With F = 98 the same formula gives 0.360, as in the example.)

$A = \dfrac{VM}{G'} = \dfrac{(2500/3600)(86.17)}{0.761} = 78.7$ ft², so $D_c = \sqrt{4(78.7)/\pi} = 10.0$ ft.

**Shortcut:** at fixed ordinate, $G' \propto F^{-1/2}$, so $D_c \propto F^{1/4}$: $14.54(22/98)^{1/4} = 10.0$ ft.

**Book answer: D = 10 ft ✓.** The larger packing has a lower F, so a smaller column is needed (but its HETP is larger).`,
          answer: String.raw`F = 22 → G′ = 0.761 lb/(s ft²), A = 78.7 ft², D = 10.0 ft (book 10 ft ✓).` } ] },
    { id: "practice-column-design-P13", q: 13, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-column-design-P13", label: "", marks: "", topic: "column-design",
          sub: "Packed-column diameter at the bottom (Example 10-4)", type: "numerical", syllabus: "out", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.D17* (repeat of Example 10-4 at the bottom)`,
          text: String.raw`Repeat Example 10-4 (hexane–heptane, 1-inch ceramic Intalox saddles, F = 98, α = 0.52, β = 0.16, Δp = 0.5 in water/ft, F = 1000 lbmol/h saturated-liquid feed, D = 500 lbmol/h, L/V = 0.8 at the top, 1 atm) but calculate the diameter at the bottom of the column. n-Heptane: M = 100.2, bp 98.4 °C, specific gravity 0.684, μ = 0.205 cP.`,
          solution: String.raw`> Not covered in the current ChE 303 slides.

1. **Flows (CMO, saturated-liquid feed):** $\bar V = V = 2500$ lbmol/h and $\bar L = L + F = 2000 + 1000 = 3000$ lbmol/h, so $\bar L/\bar V = 1.2$. Both streams are nearly pure heptane, so $L'/G' = 1.2$.
2. **Properties at 98.4 °C (371.55 K):** $\rho_G = 100.2/(1.314 \times 371.55) = 0.2052$ lb/ft³; $\rho_L = 0.684(62.4) = 42.68$ lb/ft³; water density at 98.4 °C ≈ 0.959 g/ml, so $\psi = 0.959/0.684 = 1.402$; $\mu = 0.205$ cP.
3. **Abscissa:** $F_{lv} = 1.2\sqrt{0.2052/42.68} = 0.083$. On the 0.5 in/ft curve of Figure 10-27 the ordinate reads about 0.050–0.051 (lower than the 0.055 at the top).
4. $G' = \sqrt{\dfrac{0.0505(0.2052)(42.68)(32.2)}{98(1.402)(0.205)^{0.2}}} = 0.378$ lb/(s ft²).
5. $A = \dfrac{(2500/3600)(100.2)}{0.378} = 184$ ft², so $D_c = 15.3$ ft.

**Alternative** (Eq. 10-42 with α = 0.52, β = 0.16): $0.5 = 0.52 \times 10^{0.16(1.2)G'}G'^2/0.2052$, so $G' = 0.406$ and $D_c = 14.8$ ft.

**Book answer: D = 15.4 ft ✓** (graphical). The bottom (15.3 ft) needs more than the top (14.5 ft), so design at the bottom.`,
          answer: String.raw`L̄/V̄ = 1.2, F_lv = 0.083, ordinate ≈ 0.050 → G′ = 0.378 lb/(s ft²), A = 184 ft², D ≈ 15.3 ft (book 15.4 ft ✓).` } ] },
    { id: "practice-column-design-P14", q: 14, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-column-design-P14", label: "", marks: "", topic: "column-design",
          sub: "Full tray-column design: stages, O'Connell, diameter at several points, height (ethanol–water)", type: "numerical", syllabus: "partial", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.F3*`,
          text: String.raw`An ethanol–water column at 1 atm has a total condenser and a partial reboiler; CMO can be assumed and the reflux is a saturated liquid. The feed is 100 lbmol/h of 30 mol% ethanol, subcooled so that 3 mol of feed condense 1 mol of vapor on the feed plate. $x_D = 0.80$, $x_B = 0.01$, $L/D = 2.0$. Tray spacing is 0.4572 m (18 in); operate at 75% of flooding; downcomers take 10% of the cross-section. Find the diameter needed (check several locations), the number of real stages (O'Connell) and the column height. Surface tensions, liquid densities and viscosities must be estimated from handbook data.`,
          solution: String.raw`> The stage count and the height are in the slides. Fair flooding and O'Connell with estimated properties go beyond them.

**Given:** $F = 100$ lbmol/h, $z = 0.30$, $x_D = 0.80$, $x_B = 0.01$, $L/D = 2$. 3 mol of feed condense 1 mol of vapor, so $q = 1 + 1/3 = 4/3$.

### 1. Flows (external balances, CMO)
$D = F(z - x_B)/(x_D - x_B) = 100(0.29/0.79) = 36.71$ and $B = 63.29$ lbmol/h. $L = 73.42$, $V = 110.13$; $\bar L = L + qF = 206.75$ and $\bar V = V + (q-1)F = 143.46$ lbmol/h.

### 2. Equilibrium stages (McCabe–Thiele, Wankat Table 2-1 data)
- Rectifying line: $y = 0.667x + 0.267$.
- Feed line: $y = \dfrac{q}{q-1}x - \dfrac{z}{q-1} = 4x - 0.90$.
- They intersect at $(0.350, 0.500)$.
- Stripping line: $y = 1.441x - 0.0044$.

| stage | y | x |
|---|---|---|
| 1 | 0.800 | 0.774 |
| 2 | 0.783 | 0.749 |
| 3 | 0.766 | 0.723 |
| 4 | 0.749 | 0.694 |
| 5 | 0.729 | 0.660 |
| 6 | 0.707 | 0.618 |
| 7 | 0.679 | 0.562 |
| 8 | 0.641 | 0.473 |
| 9 (feed) | 0.582 | 0.326 |
| 10 | 0.465 | 0.119 |
| 11 | 0.167 | 0.019 |
| 12 (reboiler) | 0.022 | 0.001 |

$N = 11.5$ equilibrium stages including the partial reboiler; optimum feed is stage 9.

![Ethanol–water McCabe–Thiele, L/D = 2, q = 4/3: 11.5 stages, feed on stage 9](fig/practice-column-design-P14-sol.svg)

### 3. Overall efficiency (O'Connell)
- $\alpha$ varies from 1.13 at the top ($x = 0.8$) to 11.0 at the bottom ($x = 0.01$); geometric mean $\alpha = \sqrt{1.13 \times 11.0} = 3.5$ (3.1 at the feed composition).
- Average temperature: $(78.2 + 99.6)/2 = 89$ °C.
- Feed viscosity with Eq. (10-7a): $\mu_E \approx 0.40$ cP and $\mu_W \approx 0.31$ cP at 89 °C (handbook estimates), so $\ln\mu = 0.3\ln 0.40 + 0.7\ln 0.31$ and $\mu = 0.335$ cP.
- $\alpha\mu = 1.18$, so $E_O = 0.52782 - 0.27511(0.071) + 0.044923(0.005) = 0.51$.
- Real trays: $N_{act} = (11.5 - 1)/0.51 = 20.6$ → **21 real trays + partial reboiler**. The feed goes on about tray $8/0.51 \approx 16$.

### 4. Diameter at four locations (Fair, 18-in spacing, η = 0.90, 75% of flood)
Assumed properties:
- ρ_L by ideal mixing of ethanol (≈ 0.74 g/ml at 78 °C) and water (0.958 at 100 °C).
- σ estimated from the strongly non-linear aqueous-ethanol curve: about 18 dyn/cm at the top, 20 above the feed, 30 below the feed and 55 at the bottom.
- ρ_V from the ideal gas law.

| location | V, lbmol/h | y | M_V | ρ_V, lb/ft³ | ρ_L, g/ml | F_lv | C_sb, ft/s | u_flood, ft/s | D, ft |
|---|---|---|---|---|---|---|---|---|---|
| top (78.2 °C) | 110.1 | 0.80 | 40.5 | 0.0876 | 0.754 | 0.028 | 0.299 | 6.77 | 1.98 |
| above feed | 110.1 | 0.64 | 36.0 | 0.0775 | 0.792 | 0.023 | 0.298 | 7.53 | 1.89 |
| below feed | 143.5 | 0.47 | 31.1 | 0.0661 | 0.893 | 0.034 | 0.297 | 9.35 | 1.94 |
| bottom (99.6 °C) | 143.5 | 0.02 | 18.6 | 0.0381 | 0.950 | 0.036 | 0.296 | 14.3 | 1.60 |

The largest diameter, about 2.0 ft, is at the **top of the enriching section**. There the vapor is heaviest ($M_V = 40$) and the liquid is light with low σ. The bottom, despite its larger molar $\bar V$, carries light water vapor. Columns this small are built at least 2.5 ft: **use 2.5 ft**.

### 5. Height
$H = (N_{act} - 1)S + H_{top} + H_{bottom} = 20(1.5 \text{ ft}) + 3 + 3 = 36$ ft. I assumed 3 ft above the top tray and 3 ft of sump and vapor return.

**Book answer:** maximum diameter 2.1 ft in the enriching section (use 2.5 ft); 22 real stages + partial reboiler; height about 36 ft. ✓ My 2.0 ft and 21 trays agree within the uncertainty of the estimated properties (σ, μ and the choice of average α).`,
          answer: String.raw`11.5 equilibrium stages (feed stage 9); E_O ≈ 0.51 → 21 real trays + PR (book 22); max D ≈ 2.0 ft at the top (book 2.1 ft) → use 2.5 ft; H ≈ 36 ft (book ≈ 36 ft).` } ] },
    { id: "practice-column-design-P15", q: 15, section: "W", compulsory: false,
      stem: String.raw``,
      parts: [
        { id: "practice-column-design-P15", label: "", marks: "", topic: "column-design",
          sub: "Same ethanol–water separation in a packed column (1-in metal Pall rings)", type: "numerical", syllabus: "out", repeats: [],
          origin: "wankat", ref: String.raw`Wankat 3e, Problem 10.F4*`,
          text: String.raw`Repeat Problem 10.F3 (previous problem) but design a packed column with 1-inch metal Pall rings, at 75% of flooding. Take HETP ≈ 0.366 m for ethanol–water.`,
          solution: String.raw`> Not covered in the current ChE 303 slides.

**Packing:** 1-inch metal Pall rings, $F = 48$ ft⁻¹ (Wankat Table 10-3).

**Diameter:** use Eq. (10-39a) at the same four locations, with the flows and properties of the previous problem. Assumed liquid viscosities: 0.48, 0.55, 0.50 and 0.29 cP (top to bottom). $G' = 0.75\,G'_{flood}$ and $A = VM_V/G'$.

| location | F_lv | flood ordinate | ψ | G′_flood, lb/(s ft²) | A, ft² | D, ft |
|---|---|---|---|---|---|---|
| top | 0.028 | 0.200 | 1.29 | 0.705 | 2.34 | 1.73 |
| above feed | 0.023 | 0.206 | 1.23 | 0.697 | 2.11 | 1.64 |
| below feed | 0.034 | 0.193 | 1.09 | 0.711 | 2.32 | 1.72 |
| bottom | 0.036 | 0.191 | 1.01 | 0.606 | 1.64 | 1.44 |

The maximum, about 1.7 ft, is again in the enriching section near the top (with a 1.32 area safety factor, 2.0 ft). Use about 2 ft. This is below 2.5 ft, where a packed column is the economic choice.

**Packing height:** the trays' share of the separation is $11.5 - 1 = 10.5$ equilibrium stages (the partial reboiler is outside the packing). So $h = 10.5 \times 0.366 = 3.84$ m $= 12.6$ ft.

**Book answer:** maximum diameter 2.1 ft in the enriching section; about 12 ft of packing ✓ (height). My diameter is about 20% smaller than the book's, which appears to repeat the tray-column value. Applying Bolles and Fair's 1.32 area safety factor gives 2.0 ft, close to the book.`,
          answer: String.raw`Max D ≈ 1.7 ft at the top (≈2.0 ft with a 1.32 area safety factor; book 2.1 ft); packing 10.5 × 0.366 = 3.8 m ≈ 12.6 ft (book ≈ 12 ft ✓).` } ] },
    { id: "practice-column-design-P16", q: 16, section: "F", compulsory: false,
      stem: String.raw`Answer the following on tray hardware for staged distillation columns.`,
      parts: [
        { id: "practice-column-design-P16a", label: "(a)", marks: "8", topic: "column-design",
          sub: "Sieve vs valve vs bubble-cap trays", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Slides 06, Tray Types at a Glance`,
          text: String.raw`Compare sieve, valve and bubble-cap trays on cost, efficiency, turndown, entrainment, pressure drop and fouling service. Which would you specify for (i) a dirty, fouling feed with a steady rate and (ii) a clean feed with a widely varying rate?`,
          solution: String.raw`| feature | sieve | valve | bubble-cap |
|---|---|---|---|
| relative cost | lowest (1) | ≈ 1.2 × sieve | ≈ 4 × valve |
| efficiency at design | good | ≈ sieve (≥ sieve) | same or lower |
| turndown | poor below ≈ 60% of design gas rate (weeps) | good: valve lift follows the vapor rate | very flexible on liquid rate, but often worse turndown |
| entrainment | reference | similar to sieve | ≈ 3 × sieve, so larger tray spacing |
| pressure drop | reference | standard design higher; can be designed lower | high |
| fouling / solids | best: flat deck, easy to clean | moving parts foul, plug and wear | coking and polymer problems |
| design data | open, non-proprietary | proprietary, vendor-designed | extensive (old) |

Efficiency ranking: valve ≥ sieve ≥ bubble-cap, except near flooding.

- **(i) Dirty, fouling feed at a steady rate: sieve trays.** They are easy to clean and cheapest, and turndown does not matter at a steady rate.
- **(ii) Clean feed with a varying rate: valve trays.** They have good turndown, and the clean feed removes their fouling drawback.`,
          answer: String.raw`Sieve: cheapest, best for fouling, poor turndown; valve: ≈1.2× cost, same efficiency, good turndown; bubble cap: ≈4× valve, 3× entrainment. (i) sieve, (ii) valve.` },
        { id: "practice-column-design-P16b", label: "(b)", marks: "9", topic: "column-design",
          sub: "Sieve-tray geometry and the column areas", type: "sketch", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Slides 06, Anatomy of a Cross-Flow Sieve Tray; Wankat 3e §10.5`,
          text: String.raw`With a neat sketch of two cross-flow sieve trays, show the liquid and vapor paths, the outlet weir, the downcomer and apron clearance, and the tray spacing. Define and contrast total, net, active and hole areas.`,
          solution: String.raw`![Two cross-flow sieve trays: vapor rises through the holes, liquid crosses the active area, flows over the outlet weir and down the downcomer to the tray below](fig/practice-column-design-P16b-sol.svg)

**Paths:**
- **Liquid** comes down the downcomer from the tray above, passes under the apron (the clearance gap acts as a seal), crosses the perforated active area as froth, flows over the outlet weir and drops into the downcomer to the next tray.
- **Vapor** rises through the holes, bubbles through the liquid to form froth where mass transfer happens, then disengages in the tray space above.

**Areas:**
- **Total area** $A_T = \pi D^2/4$.
- **Downcomer area** $A_d$, for one downcomer.
- **Net area** $A_{net} = A_T - A_d$: the area open to vapor in the space above the tray, where the flooding (entrainment) velocity applies. $A_{net} = \eta A_T$, with η ≈ 0.85–0.95.
- **Active (bubbling) area** $A_a \approx A_T - 2A_d$: the perforated deck between the inlet downcomer and the outlet weir.
- **Hole area** $A_h$: the total open area of the holes, typically $A_h/A_a \approx 0.1$. It sets the hole velocity, the dry pressure drop and weeping.

So $A_h < A_a < A_{net} < A_T$.`,
          answer: String.raw`Liquid: downcomer → under apron → across active area → over weir; vapor: up through holes. A_T total; A_net = A_T − A_d (flooding basis); A_a ≈ A_T − 2A_d (perforated deck); A_h ≈ 0.1A_a (holes).` },
        { id: "practice-column-design-P16c", label: "(c)", marks: "8", topic: "column-design",
          sub: "Tray efficiency vs vapor velocity: weeping, design point, flooding", type: "sketch", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Wankat 3e Fig. 10-13`,
          text: String.raw`Sketch how tray efficiency varies with vapor velocity. Mark the weeping region, the design point and the entrainment-flooding limit, and explain each region. How does the curve differ for a valve tray?`,
          solution: String.raw`![Tray efficiency vs vapor velocity: low at weeping, a broad maximum near the design point, then a sharp fall as entrainment flooding is approached](fig/practice-column-design-P16c-sol.svg)

- **Very low vapor velocity (weeping):** the vapor's pressure drop cannot hold the liquid on the deck. Liquid drains through the holes and bypasses the next tray's contacting, so efficiency plummets.
- **Rising velocity:** bubbling becomes vigorous and interfacial area grows, so efficiency rises.
- **Design point (≈ 75% of flood):** a broad maximum.
- **High velocity (entrainment):** liquid droplets are carried up to the tray above (back-mixing). Efficiency drops sharply, and at the limit the column floods.

A **valve tray** has a wider flat maximum (good turndown): the valves close at low rates and weeping is prevented. A **sieve tray** loses efficiency below about 60% of the design rate.`,
          answer: String.raw`Efficiency is low at weeping, rises to a broad maximum at the design point (~75% flood), then falls steeply with entrainment toward flooding; valve trays have a wider plateau.` },
        { id: "practice-column-design-P16d", label: "(d)", marks: "5", topic: "column-design",
          sub: "Choosing the liquid flow pattern (number of passes)", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Slides 06, Choosing the Number of Passes`,
          text: String.raw`Explain how column diameter and liquid rate decide between reverse-flow, cross-flow and multi-pass trays.`,
          solution: String.raw`- Liquid capacity grows with weir length ($\propto D$). Vapor capacity grows with area ($\propto D^2$).
- **Low liquid rate:** use reverse flow. A centre baffle sends the liquid across and back, lengthening its path and keeping the tray wet.
- **Average rates and diameters:** use single-pass cross-flow (the most common). It can handle suspended solids, and open design methods exist.
- **Large diameter with high liquid rate:** the tray runs out of weir length (large liquid gradient, overloaded downcomers) before it runs out of vapor area. Use double-pass, then four-pass trays. Three-pass trays are avoided because the passes cannot be made symmetric, so the liquid maldistributes.
- The selection chart plots liquid capacity (gal/min) against tower diameter (ft), with bands for reverse flow, cross flow and double pass.`,
          answer: String.raw`Low L → reverse flow; average → cross flow; large D and high L → 2- or 4-pass (weir length ∝ D limits liquid; area ∝ D² limits vapor); avoid 3-pass.` },
        { id: "practice-column-design-P16e", label: "(e)", marks: "5", topic: "column-design",
          sub: "Weir designs and turndown", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Slides 06, Weir Designs`,
          text: String.raw`Sketch straight, adjustable and notched (picket-fence) weirs and state when each is used.`,
          solution: String.raw`- **Straight weir:** a horizontal plate 2–4 in high. It is the cheapest option but does not give the best turndown: at a low liquid rate the crest over the full weir length becomes very thin and uneven, so parts of the tray run dry.
- **Adjustable weir:** a straight plate that slides up or down. It looks like the solution to turndown but is easily maladjusted (excessive weeping or trays running dry). Avoid it.
- **Notched (picket-fence) weir:** the liquid flows only through the notches, so the effective weir length is shorter. At low liquid rates the crest stays reasonably high and the liquid stays uniform. It suits low liquid rates and wide flexibility, and costs only a little more than a straight weir.`,
          answer: String.raw`Straight: cheap, poor turndown; adjustable: avoid (maladjustment → weeping/dry trays); notched: shorter effective length keeps a usable crest at low liquid rates, good turndown.` } ] },
    { id: "practice-column-design-P17", q: 17, section: "F", compulsory: false,
      stem: String.raw`A benzene–toluene column at 101.3 kPa receives $F = 200$ kmol/h of feed with 45 mol% benzene, 40% vaporized ($q = 0.6$). The products are $x_D = 0.97$ and $x_B = 0.03$, with a total condenser, partial reboiler and $R = 1.8$. The top vapor is at 81 °C. The vapor leaving the reboiler is 6 mol% benzene at 109 °C. The allowable vapor velocity is 0.85 m/s on a net-area basis, with $A_d/A_T = 0.12$. $M = 78.11$ (benzene) and 92.14 (toluene) kg/kmol.`,
      parts: [
        { id: "practice-column-design-P17a", label: "(a)", marks: "6", topic: "column-design",
          sub: "Internal vapor flows at the top and bottom", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style)`,
          text: String.raw`Find $D$, $B$, and the vapor flows in the rectifying and stripping sections.`,
          solution: String.raw`**External balances:** $D = F\dfrac{z - x_B}{x_D - x_B} = 200\dfrac{0.42}{0.94} = 89.36$ kmol/h and $B = 110.64$ kmol/h.

**Rectifying:** $V = (R+1)D = 2.8(89.36) = 250.2$ kmol/h and $L = RD = 160.9$ kmol/h.

**Stripping:** $\bar V = V - (1-q)F = 250.2 - 0.4(200) = 170.2$ kmol/h and $\bar L = L + qF = 280.9$ kmol/h.

Check: $\bar L - \bar V = 110.6 = B$ ✓.`,
          answer: String.raw`D = 89.4, B = 110.6 kmol/h; V = 250.2 kmol/h (top), V̄ = 170.2 kmol/h (bottom).` },
        { id: "practice-column-design-P17b", label: "(b)", marks: "15", topic: "column-design",
          sub: "Diameter at the top and bottom; choose the design value", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style)`,
          text: String.raw`Calculate the column diameter at the top and at the bottom and state the design diameter.`,
          solution: String.raw`**Method:** $V \to \dot m_V = VM_V \to \rho_V = PM_V/RT \to Q_V \to A_{net} = Q_V/u \to A_T = A_{net}/(1 - A_d/A_T) \to D_c$.

| quantity | top | bottom |
|---|---|---|
| vapor flow, kmol/h | 250.2 | 170.2 |
| y (benzene) | 0.97 | 0.06 |
| $M_V$, kg/kmol | 0.97(78.11) + 0.03(92.14) = 78.53 | 0.06(78.11) + 0.94(92.14) = 91.30 |
| $\dot m_V$, kg/h | 19 649 | 15 540 |
| T, K | 354.15 | 382.15 |
| $\rho_V$, kg/m³ | (101.3)(78.53)/(8.314 × 354.15) = 2.702 | 2.911 |
| $Q_V$, m³/s | 2.020 | 1.483 |
| $A_{net} = Q_V/0.85$, m² | 2.377 | 1.745 |
| $A_T = A_{net}/0.88$, m² | 2.701 | 1.983 |
| $D_c = \sqrt{4A_T/\pi}$, m | **1.85** | 1.59 |

Check: at the top, $Q_V = VRT/P = (250.2/3600)(8.314)(354.15)/101.3 = 2.020$ m³/s ✓.

**Design:** the top governs because the partly vaporized feed makes $V > \bar V$. Round up: **$D_c = 1.9$ m**. The whole column is built at this diameter, so the stripping section runs well below its allowable velocity.`,
          answer: String.raw`Top: Q_V = 2.02 m³/s, A_T = 2.70 m², D = 1.85 m; bottom: Q_V = 1.48 m³/s, D = 1.59 m → design 1.9 m (top governs).` },
        { id: "practice-column-design-P17c", label: "(c)", marks: "8", topic: "column-design",
          sub: "Real trays from O'Connell and column height", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style)`,
          text: String.raw`McCabe–Thiele gives 14.6 equilibrium stages including the partial reboiler. At the average column conditions α = 2.4 and the feed viscosity is 0.27 cP. Estimate the overall efficiency with O'Connell's correlation, $E_O = 0.52782 - 0.27511\log_{10}(\alpha\mu) + 0.044923[\log_{10}(\alpha\mu)]^2$, and the column height for 0.60 m tray spacing, 1.5 m above the top tray and 2.5 m below the bottom tray.`,
          solution: String.raw`1. $\alpha\mu = 2.4 \times 0.27 = 0.648$, so $\log_{10}(\alpha\mu) = -0.188$ and $E_O = 0.52782 + 0.27511(0.188) + 0.044923(0.0355) = 0.581$.
2. Equilibrium trays $= 14.6 - 1 = 13.6$ (the partial reboiler is not a tray). $N_{act} = 13.6/0.581 = 23.4$, so **24 real trays**.
3. $H = (N_{act} - 1)S + H_{top} + H_{bottom} = 23(0.60) + 1.5 + 2.5 = 17.8$ m.`,
          answer: String.raw`E_O = 0.58 → N_act = 13.6/0.58 = 23.4 → 24 trays; H = 23(0.6) + 4.0 = 17.8 m.` },
        { id: "practice-column-design-P17d", label: "(d)", marks: "6", topic: "column-design",
          sub: "Effect of changing the feed to saturated liquid", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style)`,
          text: String.raw`If the feed were preheated less, so that it enters as a saturated liquid (same R, $x_D$, $x_B$), which end would govern the diameter and what would it be?`,
          solution: String.raw`With $q = 1$, $\bar V = V = 250.2$ kmol/h. The top is unchanged at 1.85 m.

At the bottom, $Q_V \propto VT$ at the same composition and temperature, so $Q_V = 1.483(250.2/170.2) = 2.180$ m³/s and $D_c = 1.59\sqrt{250.2/170.2} = 1.93$ m.

The **bottom now governs** (it is hotter and its vapor is heavier, with the same molar flow), so the design becomes about 2.0 m. The reboiler duty also rises, because $\bar V$ increases by 80 kmol/h.`,
          answer: String.raw`q = 1 → V̄ = 250.2 kmol/h, Q_V,bottom = 2.18 m³/s, D_bottom = 1.93 m > D_top = 1.85 m → bottom governs, ≈2.0 m.` } ] },
    { id: "practice-column-design-P18", q: 18, section: "F", compulsory: false,
      stem: String.raw`Short questions on column sizing and efficiency.`,
      parts: [
        { id: "practice-column-design-P18a", label: "(a)", marks: "8", topic: "column-design",
          sub: "Ratio of top and bottom diameters at equal allowable velocity", type: "derivation", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Slides 06, Steps 1–4`,
          text: String.raw`Show that for an ideal-gas vapor and the same allowable velocity at both ends, $D_{top}/D_{bottom} = \sqrt{V T_{top}/(\bar V T_{bottom})}$ (at nearly constant pressure). Use this to explain when the top or the bottom governs.`,
          solution: String.raw`1. Area: $A = Q_V/u$ and $D = \sqrt{4A/\pi} = \sqrt{4Q_V/(\pi u)}$.
2. Ideal gas: $Q_V = \dot m_V/\rho_V = VM_V/(PM_V/RT) = VRT/P$, independent of $M_V$.
3. So $D = \sqrt{\dfrac{4VRT}{\pi u P}}$. Taking the ratio at the same $u$, $P$ and $R$:
$$\frac{D_{top}}{D_{bottom}} = \sqrt{\frac{V\,T_{top}}{\bar V\,T_{bottom}}}$$
4. Interpretation, using $\bar V = V - (1-q)F$:
   - $q \ge 1$ (saturated or subcooled liquid feed): $\bar V \ge V$ and $T_{bottom} > T_{top}$, so the **bottom governs**.
   - Vapor or partly vaporized feed: $V > \bar V$, and the top can govern if $V/\bar V > T_{bottom}/T_{top}$.

In practice $u$ itself differs at the two ends (it depends on $\rho_L$, $\rho_V$, σ and $L/V$ through the flooding correlation), so both ends must still be calculated.`,
          answer: String.raw`D = √(4VRT/(πuP)) ⇒ D_top/D_bottom = √(VT_top/(V̄T_bottom)); q ≥ 1 → bottom governs, vapor feeds can make the top govern.` },
        { id: "practice-column-design-P18b", label: "(b)", marks: "8", topic: "column-design",
          sub: "Effect of column pressure on the flooding-based diameter", type: "derivation", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Wankat 3e Eqs. 10-8, 10-16`,
          text: String.raw`A sieve-tray column was designed at 1.5 atm with $u_{flood} = C_{sb}(\sigma/20)^{0.2}\sqrt{(\rho_L-\rho_V)/\rho_V}$. It is to be rebuilt to run at 3.0 atm with the same molar vapor rate. Assuming an ideal gas, unchanged $C_{sb}$, σ, $\rho_L$ and T, and $\rho_L \gg \rho_V$, estimate the new flooding velocity and the ratio of diameters.`,
          solution: String.raw`1. $\rho_V = PM/RT \propto P$, so at 3 atm $\rho_V$ doubles.
2. With $\rho_L \gg \rho_V$: $u_{flood} \approx C_{sb}(\sigma/20)^{0.2}\sqrt{\rho_L/\rho_V} \propto \rho_V^{-1/2}$. So $u_{flood,new} = u_{flood,old}/\sqrt{2} = 0.707\,u_{flood,old}$.
3. Area at the same fraction of flood: $A = \dfrac{VM}{\rho_V u} \propto \dfrac{1}{\rho_V\,\rho_V^{-1/2}} = \rho_V^{-1/2}$, so $D \propto A^{1/2} \propto \rho_V^{-1/4} \propto P^{-1/4}$.
4. $D_{3\,atm}/D_{1.5\,atm} = 2^{-1/4} = 0.84$: the diameter falls by about 16%.

**Physical reason:** doubling P halves the vapor volume, but the allowable velocity falls only by $\sqrt 2$. In reality T rises at the higher pressure, which raises $Q_V$ a little and lowers α, so more stages are needed.`,
          answer: String.raw`u_flood ∝ ρ_V^{-1/2} → falls to 0.707×; D ∝ P^{-1/4} → D_new/D_old = 2^{-1/4} = 0.84.` },
        { id: "practice-column-design-P18c", label: "(c)", marks: "10", topic: "column-design",
          sub: "Murphree vapor efficiency, point efficiency and overall efficiency", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Wankat 3e Eqs. 10-2, 10-4, 10-5`,
          text: String.raw`Define the Murphree vapor efficiency, the point efficiency and the overall efficiency. Explain why $E_{MV}$ can exceed 1 in a large column. For a dilute section with straight lines, the overall and Murphree efficiencies are related by $E_O = \ln[1 + E_{MV}(\lambda - 1)]/\ln\lambda$, $\lambda = mV/L$; evaluate $E_O$ for $E_{MV} = 0.65$ and $\lambda = 1.4$.`,
          solution: String.raw`- **Overall efficiency:** $E_O = N_{equil}/N_{actual}$ for the whole column (not counting the reboiler as a tray). It is the simplest, and is what O'Connell's correlation predicts.
- **Murphree vapor efficiency:** $E_{MV} = \dfrac{y_{out} - y_{in}}{y^*_{out} - y_{in}}$, where $y^*_{out}$ is in equilibrium with the liquid **leaving** the tray, $x_{out}$. It assumes well-mixed vapor and liquid on the tray. (Liquid form: $E_{ML} = (x_{out} - x_{in})/(x^*_{out} - x_{in})$.) It is easy to measure and easy to use when stepping off stages, by drawing a pseudo-equilibrium curve at a fraction $E_{MV}$ of the way from the operating line to the equilibrium curve.
- **Point efficiency:** the same ratio at one point on the tray, $E_{pt} = (y'_{out} - y'_{in})/(y'^* - y'_{in})$. It is predicted from mass-transfer rates and used for scale-up. Integrating it over the tray's flow pattern gives $E_{MV}$.
- **Why $E_{MV} > 1$ is possible:** on a large tray the liquid is not mixed. It is richest where it enters and leanest at the outlet weir. $y^*_{out}$ is based on the leanest liquid, $x_{out}$, while the actual vapor is an average over the whole tray and has contacted richer liquid. So $y_{out} - y_{in}$ can exceed $y^*_{out} - y_{in}$.

**Numerical:**
$$E_O = \frac{\ln[1 + 0.65(1.4 - 1)]}{\ln 1.4} = \frac{\ln 1.26}{\ln 1.4} = \frac{0.2311}{0.3365} = 0.69$$

So $E_O$ (0.69) is a little larger than $E_{MV}$ (0.65) when λ > 1. The two are equal only when λ = 1.`,
          answer: String.raw`E_O = N_eq/N_act; E_MV = (y_out − y_in)/(y*_out − y_in); point efficiency is the local version; E_MV > 1 from liquid cross-flow gradients. E_O = ln 1.26/ln 1.4 = 0.69.` },
        { id: "practice-column-design-P18d", label: "(d)", marks: "5", topic: "column-design",
          sub: "When to use a packed instead of a tray column", type: "theory", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Wankat 3e §10.7, §10.12`,
          text: String.raw`Why are columns smaller than about 0.75 m (2.5 ft) usually packed, and why are packed columns preferred for vacuum distillation?`,
          solution: String.raw`- **Small diameters:** trays below about 2.5 ft are hard and expensive to install and maintain, because there is no room for workers and cartridge trays are needed. Random packing is cheap and works well at small $D_{column}/D_{packing}$. Calculated tray diameters under 2.5 ft are normally rounded up to 2.5 ft at little cost, or the column is packed instead.
- **Vacuum service:** packing has a much lower pressure drop per equilibrium stage than trays, which need the liquid head on each tray. Low Δp keeps the bottom pressure, and therefore the bottom temperature, low (important for heat-sensitive material). It also gives higher capacity and lower reflux than trays under vacuum.
- Packing also suits corrosive service (ceramic or plastic packing) and foaming systems. Large diameters, solids and fouling, high liquid rates and side draws favour trays.`,
          answer: String.raw`Small D: trays are costly to fit and service, packing is cheap; vacuum: packing's low Δp keeps bottom T low and capacity high.` },
        { id: "practice-column-design-P18e", label: "(e)", marks: "4", topic: "column-design",
          sub: "Meaning of the O'Connell correlation", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Practice (exam style); Wankat 3e Fig. 10-14`,
          text: String.raw`What do the variables in the O'Connell correlation represent, and why does $E_O$ fall as $\alpha\mu$ rises?`,
          solution: String.raw`- O'Connell correlates $E_O$ against **α (key components) × μ (liquid viscosity at the feed composition)**, both at the average column temperature and pressure. It was fitted to about 38 commercial and laboratory columns, mostly bubble-cap, so it is conservative for sieve and valve trays.
- **Higher μ:** slower liquid-phase diffusion and poorer interfacial renewal mean lower mass-transfer rates, so lower efficiency.
- **Higher α:** the vapor in equilibrium with the liquid differs more from the entering vapor, so more mass must transfer on each tray to approach equilibrium, and a smaller fraction is achieved.
- Typical values are 0.5–0.8 for hydrocarbons. Vacuum columns (15–20%) are not covered by the correlation.`,
          answer: String.raw`E_O = f(αμ) at average column T, P and feed composition; larger μ slows mass transfer and larger α demands more transfer per tray, so E_O falls.` } ] }
  ] });
