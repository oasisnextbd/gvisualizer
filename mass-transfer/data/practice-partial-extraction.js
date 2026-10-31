QB.paper({ year: "Practice", set: "Partially miscible extraction", date: "", marks: 0, practice: true,
  rules: String.raw`Ternary (partially miscible) extraction on right-triangle diagrams: mixing point and lever rule, single-stage and cross-flow, countercurrent difference point Δ, two-feed extractors and batch extraction. Slide problems first, then every starred Wankat 3e Chapter 13 partially miscible problem, then exam-style practice problems. Tie lines between tabulated ones were interpolated linearly (equivalent to the conjugate-line construction); graphical answers may differ by a few per cent.`,
  questions: [
    { id: "practice-partial-extraction-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-partial-extraction-P1a", label: "", marks: "", topic: "partial-extraction",
        sub: "Single equilibrium stage: mixing point, tie line and lever rule (water–chloroform–acetone)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Slides: Extraction of Partially Miscible Systems, pp. 4, 9–10 (Example 18-1, Wankat 2nd ed.; Table 13-4 in 3e)`,
        text: String.raw`A solvent of 10 wt % acetone and 90 wt % chloroform (400 kg/h) extracts acetone from a feed (250 kg/h) of 55 wt % acetone, 5 wt % chloroform and 40 wt % water in one equilibrium stage at 25 °C and 1 atm. Find the extract and raffinate compositions and flow rates. Equilibrium data (wt %, phases on the same line in equilibrium):

| Water phase $x_D$ | $x_S$ (chloroform) | $x_A$ (acetone) | Chloroform phase $y_D$ | $y_S$ | $y_A$ |
|---|---|---|---|---|---|
| 99.19 | 0.81 | 0.00 | 0.5 | 99.5 | 0.00 |
| 82.97 | 1.23 | 15.80 | 1.3 | 70.0 | 28.7 |
| 73.11 | 1.29 | 25.60 | 2.2 | 55.7 | 42.1 |
| 62.29 | 1.71 | 36.00 | 4.4 | 42.9 | 52.7 |
| 45.6 | 5.1 | 49.3 | 10.3 | 28.4 | 61.3 |
| 34.5 | 9.8 | 55.7 | 18.6 | 20.4 | 61.0 |`,
        solution: String.raw`**Given:** S = 400 kg/h, $y_{A,S} = 0.10$, $y_{D,S} = 0$; F = 250 kg/h, $x_{A,F} = 0.55$, $x_{D,F} = 0.40$.
**Find:** E, R, $y_{A,E}$, $y_{D,E}$, $x_{A,R}$, $x_{D,R}$.
**Assumptions:** isothermal, isobaric, one equilibrium stage; right-triangle diagram with abscissa = wt frac water (D), ordinate = wt frac acetone (A).

1. Mixing point (M = F + S = 650 kg/h):
$$x_{A,M} = \frac{Fx_{A,F} + Sy_{A,S}}{F + S} = \frac{250(0.55) + 400(0.1)}{650} = 0.273,\qquad x_{D,M} = \frac{250(0.40)}{650} = 0.154$$
M lies on the straight line S–F (lever rule: SM/MF = F/S).
2. M lies inside the two-phase dome, so it splits into E and R on the tie line through M. Interpolating between the tabulated tie lines (conjugate-line method) gives the tie line through M:
   - extract E: $y_A = 0.296$, $y_D = 0.014$ ($y_S = 0.690$);
   - raffinate R: $x_A = 0.164$, $x_D = 0.823$ ($x_S = 0.013$).
3. Lever rule / acetone balance, $M x_{A,M} = Ey_{A,E} + Rx_{A,R}$ with M = E + R:
$$R = M\frac{x_{A,M} - y_{A,E}}{x_{A,R} - y_{A,E}} = 650\frac{0.273 - 0.296}{0.164 - 0.296} = 113\ \mathrm{kg/h},\qquad E = 537\ \mathrm{kg/h}$$
(the water balance, which is better conditioned here, gives the same values).

![Right-triangle diagram: mixing line S–F, point M and the tie line E–R](fig/practice-partial-extraction-P1-sol.svg)

**Slide values:** read graphically $y_{A,E} = 0.30$, $y_{D,E} = 0.02$, $x_{A,R} = 0.16$, $x_{D,R} = 0.83$, giving R = 125.4 kg/h and E = 524.6 kg/h. The small difference comes from where the tie line through M is drawn; R is sensitive because M is close to E.

Acetone recovered in the extract ≈ 0.296(537)/[0.55(250) + 0.1(400)] ≈ 90 %, but the extract is dilute and much solvent is used (the slide's comment), so cross-flow or countercurrent cascades are better.`,
        answer: String.raw`M = (0.154, 0.273); E ≈ 537 kg/h with $y_A$ ≈ 0.30, $y_D$ ≈ 0.014; R ≈ 113 kg/h with $x_A$ ≈ 0.16, $x_D$ ≈ 0.82 (slide: E = 524.6, R = 125.4 kg/h).` } ] },

    { id: "practice-partial-extraction-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-partial-extraction-P2a", label: "", marks: "", topic: "partial-extraction",
        sub: "Countercurrent extraction: E_N, difference point and stage stepping (acetic acid–water–IPE)", type: "numerical", syllabus: "in", repeats: ["2015-16-Q5a", "2017-18-Q3a"],
        origin: "slides", ref: String.raw`Slides: Extraction of Partially Miscible Systems, pp. 17–19 (Example 18-2; Wankat 3e Example 13-4, Table 13-5)`,
        text: String.raw`1000 kg/h of 35 wt % acetic acid (A) in water (D) is extracted countercurrently with 1475 kg/h of pure isopropyl ether (S) at 20 °C and 1 atm. The raffinate leaving must contain 10 wt % acid. Find the outlet concentrations and the number of equilibrium stages. Equilibrium data (Treybal; wt %, rows in equilibrium):

| $x_A$ | $x_D$ | $x_S$ | $y_A$ | $y_D$ | $y_S$ |
|---|---|---|---|---|---|
| 0.69 | 98.1 | 1.2 | 0.18 | 0.5 | 99.3 |
| 1.41 | 97.1 | 1.5 | 0.37 | 0.7 | 98.9 |
| 2.89 | 95.5 | 1.6 | 0.79 | 0.8 | 98.4 |
| 6.42 | 91.7 | 1.9 | 1.93 | 1.0 | 97.1 |
| 13.30 | 84.4 | 2.3 | 4.82 | 1.9 | 93.3 |
| 25.50 | 71.1 | 3.4 | 11.40 | 3.9 | 84.7 |
| 36.70 | 58.9 | 4.4 | 21.60 | 6.9 | 71.5 |
| 44.30 | 45.1 | 10.6 | 31.10 | 10.8 | 58.1 |
| 46.40 | 37.1 | 16.5 | 36.20 | 15.1 | 48.7 |

(x: water layer = raffinate; y: ether layer = extract.)`,
        solution: String.raw`**Given:** $F = R_{N+1} = 1000$ kg/h at (x_D, x_A) = (0.65, 0.35); $E_0 = S = 1475$ kg/h pure IPE at (0, 0); $x_{A,1} = 0.10$ on the saturated raffinate curve.
**Find:** $E_N$ (flow, composition), $R_1$, N.
**Assumptions:** isothermal, isobaric, equilibrium stages; stage 1 is the raffinate-outlet (solvent-inlet) end. Plot x_A (ordinate) against x_D (abscissa).

1. **Mixing point** of the two entering streams (M = 2475 kg/h):
$$x_{A,M} = \frac{1475(0) + 1000(0.35)}{2475} = 0.1414,\qquad x_{D,M} = \frac{1000(0.65)}{2475} = 0.2626$$
2. **R₁** on the raffinate curve at $x_A = 0.10$: $x_D = 0.879$ ($x_S = 0.021$).
3. **E_N**: M lies on the line R₁–E_N (since M = R₁ + E_N), so extend R₁M to the extract curve: $y_{A,N} = 0.156$, $y_{D,N} = 0.051$ ($y_S = 0.793$).
4. **Flows** by the lever rule on the water coordinate:
$$E_N = M\frac{x_{D,M} - x_{D,1}}{y_{D,N} - x_{D,1}} = 2475\frac{0.2626 - 0.879}{0.051 - 0.879} = 1843\ \mathrm{kg/h},\quad R_1 = 632\ \mathrm{kg/h}$$
5. **Difference point** $\Delta = E_0 - R_1 = E_j - R_{j+1} = E_N - R_{N+1} = 1475 - 632 = 843$ kg/h:
$$x_{A,\Delta} = \frac{E_0y_{A,0} - R_1x_{A,1}}{\Delta} = \frac{0 - 632(0.10)}{843} = -0.075,\qquad x_{D,\Delta} = \frac{0 - 632(0.879)}{843} = -0.659$$
Δ lies to the left of the diagram, at the intersection of lines S–R₁ and E_N–F extended (graphical check).
6. **Stepping** from R₁: tie line R_j → E_j; then the line Δ–E_j meets the raffinate curve at R_{j+1}.

| Stage j | $R_j$: $x_D$, $x_A$ | $E_j$: $y_D$, $y_A$ |
|---|---|---|
| 1 | 0.879, 0.100 | 0.015, 0.034 |
| 2 | 0.811, 0.164 | 0.024, 0.065 |
| 3 | 0.756, 0.214 | 0.032, 0.092 |
| 4 | 0.710, 0.256 | 0.039, 0.115 |
| 5 | 0.676, 0.287 | 0.048, 0.144 |
| 6 | 0.635, 0.325 | 0.058, 0.178 |

$E_6$ passes $y_{A,N} = 0.156$: fraction of stage 6 = (0.156 − 0.144)/(0.178 − 0.144) = 0.35, so N ≈ 5.35.

![Δ point at (−0.659, −0.075) and 5.35 stages stepped on the triangle](fig/practice-partial-extraction-P2-sol.svg)

**Slide/book value:** N = 5.8 by hand construction. The difference (≈ 0.5 stage) comes from drawing the tie lines and the long operating lines to a distant Δ; the slide itself warns that small drawing errors give fairly large errors in N. Either way **6 equilibrium stages** are needed.`,
        answer: String.raw`$E_N$ = 1843 kg/h with 15.6 % acid, 5.1 % water; $R_1$ = 632 kg/h with 10 % acid, 87.9 % water; Δ = (−0.659, −0.075); N ≈ 5.4 (slide 5.8) → 6 stages.` } ] },

    { id: "practice-partial-extraction-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-partial-extraction-P3a", label: "", marks: "", topic: "partial-extraction",
        sub: "Three-stage countercurrent: stepping from E_N with Δ = E_N − F (no trial)", type: "numerical", syllabus: "in", repeats: ["2018-19-Q3a", "2021-22-Q3c"],
        origin: "slides", ref: String.raw`Slides: Extraction of Partially Miscible Systems, pp. 20–21 (Problem D9); Wankat 3e, Problem 13.D28*`,
        text: String.raw`Acetic acid is extracted from water with isopropyl ether at 20 °C and 1 atm (data of Problem 2) in a column with three equilibrium stages. The feed is 1000 kg/h of 40 wt % acid, 60 wt % water. The extract leaving is 2500 kg/h with 20 wt % acid. The entering extract (not pure ether) contains no water. Find (a) the exit raffinate concentration, (b) the entering extract concentration, and (c) the flow rates of the exit raffinate and entering extract.`,
        solution: String.raw`**Given:** $R_{N+1} = F = 1000$ kg/h at (0.60, 0.40); $E_N$ = 2500 kg/h, $y_{A,N} = 0.20$ on the extract curve; N = 3; $y_{D,0} = 0$.
**Assumptions:** isothermal, equilibrium stages, stage 1 = solvent-inlet end. No trial and error is needed because both streams at the feed end are known.

1. **E_N** on the extract curve at $y_A = 0.20$: $y_D = 0.064$ ($y_S = 0.736$).
2. **Difference point** from the feed end: $\Delta = E_N - R_{N+1} = 2500 - 1000 = 1500$ kg/h,
$$x_{A,\Delta} = \frac{2500(0.20) - 1000(0.40)}{1500} = 0.0667,\qquad x_{D,\Delta} = \frac{2500(0.064) - 1000(0.60)}{1500} = -0.293$$
(Δ is on line F–E_N extended; lever rule $R_{N+1}/\Delta = \overline{\Delta E_N}/\overline{R_{N+1}E_N} = 1.5$.)
3. **Step from E₃ = E_N** down to stage 1: tie line E_j → R_j; line Δ–R_j meets the extract curve at E_{j−1}.

| Stage | $E_j$: $y_D$, $y_A$ | $R_j$: $x_D$, $x_A$ |
|---|---|---|
| 3 | 0.064, 0.200 | 0.608, 0.349 |
| 2 | 0.057, 0.177 | 0.636, 0.324 |
| 1 | 0.053, 0.162 | 0.653, 0.308 |

(a) Exit raffinate $R_1$: $x_A = 0.308$, $x_D = 0.653$.
4. **E₀**: on line Δ–R₁ where $x_D = 0$ (no water): $y_{A,0} = 0.141$, $y_{S,0} = 0.859$. (b)
5. **Flows** (c): $E_0 - R_1 = \Delta = 1500$ and acid balance $E_0y_{A,0} + Fx_{A,F} = R_1x_{A,1} + E_Ny_{A,N}$:
$$0.141(R_1 + 1500) + 400 = 0.308R_1 + 500 \Rightarrow R_1 = 673\ \mathrm{kg/h},\quad E_0 = 2173\ \mathrm{kg/h}$$

![Δ = E_N − F and three stages stepped from E_N](fig/practice-partial-extraction-P3-sol.svg)

**Book/slide answer:** $x_{A,1} = 0.275$, $x_{D,1} = 0.675$, $y_{A,0} = 0.13$, $R_1$ = 655 kg/h, $E_0$ = 2155 kg/h. The method is identical; the computed raffinate is richer (0.308 vs 0.275) because the three tie lines are almost parallel to the operating lines here, so a small change in each tie line moves R₁ a lot. Both sets satisfy the overall balances.`,
        answer: String.raw`(a) $R_1$: 30.8 % acid, 65.3 % water (book 27.5 %, 67.5 %); (b) $E_0$: 14.1 % acid, 85.9 % IPE (book 13 %); (c) $R_1$ ≈ 673 kg/h, $E_0$ ≈ 2173 kg/h (book 655, 2155).` } ] },

    { id: "practice-partial-extraction-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-partial-extraction-P4a", label: "", marks: "", topic: "partial-extraction",
        sub: "Single stage with two feeds and solvent (methylcyclohexane–n-heptane–aniline)", type: "numerical", syllabus: "in", repeats: ["2023-24-Q5b"],
        origin: "slides", ref: String.raw`Slides: Extraction of Partially Miscible Systems, pp. 26–27 (Problem D1); Wankat 3e, Problem 13.D21*`,
        text: String.raw`Methylcyclohexane (A) is extracted from n-heptane (D) into aniline (S). Feed 1: 100 kg/h of 60 % A, 40 % D; feed 2: 50 kg/h of 20 % A, 80 % D; both are mixed with 200 kg/h of pure aniline in one equilibrium stage. (a) Find the extract and raffinate compositions. (b) Find the extract flow rate. Equilibrium data (wt %, Varteressian and Fenske):

| Hydrocarbon phase $x_A$ | $x_D$ | Aniline phase $y_A$ | $y_D$ |
|---|---|---|---|
| 0.0 | 92.6 | 0.0 | 6.2 |
| 9.2 | 83.1 | 0.8 | 6.0 |
| 18.6 | 73.4 | 2.7 | 5.3 |
| 22.0 | 69.8 | 3.0 | 5.1 |
| 33.8 | 57.6 | 4.6 | 4.5 |
| 40.9 | 50.4 | 6.0 | 4.0 |
| 46.0 | 45.0 | 7.4 | 3.6 |
| 59.0 | 30.7 | 9.2 | 2.8 |
| 67.2 | 22.8 | 11.3 | 2.1 |
| 71.6 | 18.2 | 12.7 | 1.6 |
| 73.6 | 16.0 | 13.1 | 1.4 |
| 83.3 | 5.4 | 15.6 | 0.6 |
| 88.1 | 0.0 | 16.9 | 0.0 |`,
        solution: String.raw`**Given:** $F_1$ = 100 (0.40 D, 0.60 A), $F_2$ = 50 (0.80 D, 0.20 A), S = 200 kg/h pure aniline at (0, 0).
**Assumptions:** one equilibrium stage, isothermal; type II system (both hydrocarbons partially miscible with aniline), so tie lines run from the aniline-rich curve near the S corner to the hydrocarbon curve.

1. Mixing point, M = 350 kg/h:
$$x_{A,M} = \frac{100(0.6) + 50(0.2) + 0}{350} = 0.200,\qquad x_{D,M} = \frac{100(0.4) + 50(0.8)}{350} = 0.229$$
(graphically: $F_1$ + $F_2$ → $F_T$ = (0.533, 0.467) on line $F_1F_2$; M on line S–$F_T$.)
2. Tie line through M (interpolated between the tie lines through 40.9 % and 46.0 %):
   - raffinate (hydrocarbon phase): $x_A = 0.41$, $x_D = 0.51$ (aniline 0.08);
   - extract (aniline phase): $y_A = 0.060$, $y_D = 0.040$ (aniline 0.90).
3. (b) Balances $M = E + R$, $Mx_{A,M} = Ey_A + Rx_A$:
$$E = 350\frac{0.200 - 0.407}{0.0596 - 0.407} = 208\ \mathrm{kg/h},\qquad R = 142\ \mathrm{kg/h}$$

![MCH–heptane–aniline triangle with M and the tie line through it](fig/practice-partial-extraction-P4-sol.svg)

**Book answer:** $y_{AE} = 0.06$, $y_{DE} = 0.05$, $x_{AR} = 0.42$, $x_{DR} = 0.48$; E = 214 kg/h. Agreement is within graph-reading accuracy (with the book's compositions the balance gives E = 214 kg/h, R = 136 kg/h).`,
        answer: String.raw`(a) Extract ≈ 6 % MCH, 4–5 % heptane; raffinate ≈ 41–42 % MCH, 48–51 % heptane; (b) E ≈ 210 kg/h (book 214), R ≈ 140 kg/h.` } ] },

    { id: "practice-partial-extraction-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-partial-extraction-P5a", label: "", marks: "", topic: "partial-extraction",
        sub: "Two-feed extraction column: external balances and the two difference points", type: "derivation", syllabus: "in", repeats: ["2022-23-Q3c"],
        origin: "slides", ref: String.raw`Slides: Extraction of Partially Miscible Systems, pp. 22–25 (Figs. 18-19, 18-20; Eqs. 18-22 to 18-25)`,
        text: String.raw`A countercurrent extraction column receives solvent $E_0 = S$ at stage 1, feed $F_1 = R_{N+1}$ at stage N and a second feed $F_2$ at an intermediate stage $N_F$. The feeds, solvent and the raffinate concentration $x_{A,1}$ are specified. Derive the external balances, show how to locate M, $E_N$ and $R_1$, and explain how the stages are stepped off with two difference points. Illustrate with $F_1$ = 1000 kg/h (40 % acetic acid, 60 % water), $F_2$ = 500 kg/h (15 % acid), S = 2000 kg/h pure IPE and $x_{A,1}$ = 0.05 (data of Problem 2).`,
        solution: String.raw`**External balances** (overall, acid, water):
$$E_0 + F_2 + R_{N+1} = M = E_N + R_1$$
$$E_0y_{A,0} + F_2x_{A,F_2} + R_{N+1}x_{A,N+1} = Mx_{A,M} = E_Ny_{A,N} + R_1x_{A,1}$$
$$E_0y_{D,0} + F_2x_{D,F_2} + R_{N+1}x_{D,N+1} = Mx_{D,M} = E_Ny_{D,N} + R_1x_{D,1}$$
so
$$x_{A,M} = \frac{E_0y_{A,0} + F_2x_{A,F_2} + R_{N+1}x_{A,N+1}}{E_0 + F_2 + R_{N+1}},\qquad x_{D,M} = \frac{E_0y_{D,0} + F_2x_{D,F_2} + R_{N+1}x_{D,N+1}}{E_0 + F_2 + R_{N+1}}$$
and, from M = $E_N$ + $R_1$,
$$E_N = M\frac{x_{A,M} - x_{A,1}}{y_{A,N} - x_{A,1}},\qquad R_1 = M\frac{y_{A,N} - x_{A,M}}{y_{A,N} - x_{A,1}}$$

**Equivalent "two-mixer" picture (Fig. 18-19B):** $F_1 + F_2 = F_T$ (point on line $F_1F_2$), $F_T + S = M$ (on line S–$F_T$), $M = E_N + R_1$: $E_N$ is where line $R_1M$ extended meets the extract curve.

**Difference points.** Passing-stream differences are constant only within a section:
- section 1 (stages 1 to $N_F - 1$): $\Delta_1 = E_0 - R_1 = E_j - R_{j+1}$;
- section 2 (stages $N_F$ to N): $\Delta_2 = E_N - R_{N+1} = E_k - R_{k+1}$;
- a balance around the feed stage gives $\Delta_2 = \Delta_1 + F_2$, so $\Delta_1$, $\Delta_2$ and $F_2$ lie on one straight line.

**Stepping:** start at $R_1$; tie line → $E_1$; operating line through $\Delta_1$ and $E_1$ → $R_2$; … Switch to $\Delta_2$ at the optimum feed stage, i.e. when the stepping crosses the line $\Delta_1$–$F_2$–$\Delta_2$, and continue until $E_j$ passes $E_N$.

**Illustration (computed):** $F_T$ = 1500 kg/h at (0.683, 0.317); M = 3500 kg/h at $x_{A,M}$ = 0.136, $x_{D,M}$ = 0.293; $R_1$ at $x_A$ = 0.05, $x_D$ = 0.932; extending $R_1M$ gives $E_N$ at $y_A$ = 0.168, $y_D$ = 0.055; $E_N$ = 2550 kg/h, $R_1$ = 950 kg/h.

![Construction of F_T, M and E_N for a two-feed extractor](fig/practice-partial-extraction-P5-sol.svg)

> Exam tip: feed the more dilute feed $F_2$ nearer the raffinate end; never mix two feeds of different composition if they can be fed separately (mixing is the opposite of separation).`,
        answer: String.raw`$x_{A,M}$ = ΣF_i x_i / ΣF_i, $E_N = M(x_{A,M} - x_{A,1})/(y_{A,N} - x_{A,1})$; Δ₁ = E₀ − R₁ above the feed, Δ₂ = E_N − R_{N+1} = Δ₁ + F₂ below; switch at the line Δ₁–F₂–Δ₂.` } ] },

    { id: "practice-partial-extraction-P6", q: 6, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-partial-extraction-P6a", label: "", marks: "", topic: "partial-extraction",
        sub: "Batch (single-stage) extraction: outlet compositions and solvent for a target raffinate", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 13.D14* (Table 13-5)`,
        text: String.raw`A mixed tank processes 15 kg of a feed of 30 wt % acetic acid and 70 wt % water with pure isopropyl ether (equilibrium data of Problem 2).
a. If 10 kg of solvent is used, find the extract and raffinate compositions.
b. How much solvent is needed for a raffinate with $x_A$ = 0.10?`,
        solution: String.raw`**Assumptions:** one equilibrium stage (batch mix-and-settle is identical to a continuous mixer-settler with kg instead of kg/h), isothermal at 20 °C.

**(a)**
1. Mixing point: $x_{A,M} = 15(0.30)/25 = 0.18$, $x_{D,M} = 15(0.70)/25 = 0.42$.
2. Tie line through M (interpolated between the 13.3 % and 25.5 % tie lines):
   - raffinate: $x_A = 0.240$, $x_D = 0.728$ ($x_S = 0.032$);
   - extract: $y_A = 0.106$, $y_D = 0.036$ ($y_S = 0.858$).
3. Amounts: $E = 25(0.18 - 0.240)/(0.106 - 0.240) = 11.1$ kg, R = 13.9 kg.

**(b)**
1. The raffinate is on the raffinate curve at $x_A = 0.10$: $x_D = 0.879$. Its tie line gives the extract $y_A = 0.0343$, $y_D = 0.0147$.
2. M must lie both on this tie line and on the mixing line F–S; the intersection is M = (0.0942, 0.0404).
3. Acid balance $Fx_{A,F} = (F + S)x_{A,M}$: $S = 15(0.30 - 0.0404)/0.0404 = 96$ kg; then E = 101 kg, R = 10.3 kg.

![Batch extraction: mixing line, tie lines for parts (a) and (b)](fig/practice-partial-extraction-P6-sol.svg)

**Book answer:** (a) $y_A$ = 0.115, $y_w$ = 0.04, $x_A$ = 0.23, $x_w$ = 0.73 ✓ (within reading accuracy); (b) S = 85.7 kg. Our 96 kg is about 12 % higher: in (b) M lies very close to the S corner, so a small shift of the low-concentration tie line changes S strongly. The point to remember is that removing acid down to 10 % in one stage needs about 6–7 kg of ether per kg of feed, a strong argument for countercurrent operation.`,
        answer: String.raw`(a) Extract ≈ 10.6–11.5 % acid, 4 % water; raffinate ≈ 23–24 % acid, 73 % water; E ≈ 11 kg, R ≈ 14 kg. (b) S ≈ 96 kg (book 85.7 kg).` } ] },

    { id: "practice-partial-extraction-P7", q: 7, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-partial-extraction-P7a", label: "", marks: "", topic: "partial-extraction",
        sub: "Countercurrent: solvent rate from specified extract and raffinate, then stages", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 13.D25* (Table 13-5)`,
        text: String.raw`Acetic acid is removed from water with pure isopropyl ether at 20 °C and 1 atm (data of Problem 2). The feed is 2000 kg/h of 45 wt % acid, 55 wt % water. In a countercurrent system the extract must leave at 20 wt % acid and the raffinate at 20 wt % acid. (a) How much solvent is needed? (b) How many equilibrium stages?`,
        solution: String.raw`**Given:** F = 2000 kg/h at (0.55, 0.45); S pure at (0, 0); $y_{A,N}$ = 0.20 (extract curve), $x_{A,1}$ = 0.20 (raffinate curve).
**Assumptions:** isothermal, equilibrium stages.

**(a) Solvent.**
1. Points: $R_1$ = (0.771, 0.20), $E_N$ = (0.064, 0.20). Both have 20 % acid, so the line $R_1E_N$ is horizontal at $x_A$ = 0.20.
2. M = F + S = $R_1$ + $E_N$ must lie on this line and on line S–F, so $x_{A,M}$ = 0.20 and the acid balance gives directly
$$Fx_{A,F} = (F + S)x_{A,M} \Rightarrow S = 2000\frac{0.45 - 0.20}{0.20} = 2500\ \mathrm{kg/h}$$
3. Flows from the water balance ($x_{D,M}$ = 1100/4500 = 0.244): $E_N = 4500(0.244 - 0.771)/(0.064 - 0.771) = 3353$ kg/h, $R_1$ = 1147 kg/h.

**(b) Stages.**
1. $\Delta = E_0 - R_1 = 2500 - 1147 = 1353$ kg/h, at
$$x_{A,\Delta} = \frac{-1147(0.20)}{1353} = -0.170,\qquad x_{D,\Delta} = \frac{-1147(0.771)}{1353} = -0.654$$
2. Stepping from $R_1$:

| Stage | $R_j$: $x_D$, $x_A$ | $E_j$: $y_D$, $y_A$ |
|---|---|---|
| 1 | 0.771, 0.200 | 0.030, 0.084 |
| 2 | 0.647, 0.314 | 0.055, 0.167 |
| 3 | 0.536, 0.396 | 0.084, 0.253 |

$E_N$ ($y_A$ = 0.20) is passed in stage 3: fraction = (0.20 − 0.167)/(0.253 − 0.167) = 0.38 → N ≈ 2.4.

![Horizontal R1–EN line fixes M; Δ and 2.4 stages](fig/practice-partial-extraction-P7-sol.svg)

**Book answer:** S = 2444 kg/h, N = 2. The solvent rate here follows exactly from the acid balance (both outlets at 20 %), so 2500 kg/h is the consistent value; the book's 2444 is a graph reading. The stage count (2.4 vs 2) is within graphical accuracy; 3 stages would be built.`,
        answer: String.raw`(a) S = 2500 kg/h (book 2444); $E_N$ = 3353, $R_1$ = 1147 kg/h. (b) N ≈ 2.4 (book 2) → 3 stages.` } ] },

    { id: "practice-partial-extraction-P8", q: 8, section: "W", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-partial-extraction-P8a", label: "", marks: "", topic: "partial-extraction",
        sub: "Solvent rate for a fixed number of stages (trial on S), impure solvent", type: "numerical", syllabus: "in", repeats: [],
        origin: "wankat", ref: String.raw`Wankat 3e, Problem 13.D26* (Table 13-5)`,
        text: String.raw`A countercurrent cascade with three equilibrium stages extracts acetic acid from water with isopropyl ether (data of Problem 2). Feed: 2000 kg/h of 40 wt % acid, 60 wt % water. The solvent contains 1 wt % acid and no water. The raffinate must contain 5 wt % acid. What solvent rate is needed, and what are the flow rates of $E_N$ and $R_1$?`,
        solution: String.raw`**Given:** F = 2000 at (0.60, 0.40); $E_0$ at (0, 0.01); $R_1$ on the raffinate curve at $x_A$ = 0.05, so $x_D$ = 0.932; N = 3.
**Assumptions:** isothermal, equilibrium stages.

**Procedure (trial and error on S):** for a guessed S: (1) M on line $E_0$–F; (2) $E_N$ = line $R_1$M extended to the extract curve; (3) flows by lever rule; (4) Δ = $E_0$ − $R_1$; (5) step from $R_1$ and count stages; adjust S until N = 3.

| S (kg/h) | 4000 | 5000 | 5600 | 7000 | 8000 | 10 000 |
|---|---|---|---|---|---|---|
| N | 8.1 | 5.6 | 5.0 | 4.0 | 3.4 | 2.96 |

N = 3 at **S ≈ 9.9 × 10³ kg/h**, which gives M = (0.101, 0.076), $E_N$ at $y_A$ = 0.078, $y_D$ = 0.028, $E_N$ = 10 900 kg/h, $R_1$ = 960 kg/h, Δ = 8920 kg/h at (−0.100, 0.006).

| Stage | $R_j$: $x_D$, $x_A$ | $E_j$: $y_D$, $y_A$ |
|---|---|---|
| 1 | 0.932, 0.050 | 0.009, 0.015 |
| 2 | 0.892, 0.087 | 0.013, 0.029 |
| 3 | 0.784, 0.188 | 0.028, 0.078 = $E_N$ |

![Three stages with an impure solvent: M, E_N and Δ near the solvent corner](fig/practice-partial-extraction-P8-sol.svg)

**Why so much solvent:** the solvent's 1 % acid is in equilibrium with a raffinate of about 3.5 % acid (K ≈ 0.29 at low concentration), close to the 5 % target, so the solvent end of the cascade is nearly pinched; IPE is also a weak solvent for acetic acid (K < 1).

**Book answer:** S = 5600, $E_N$ = 6830, $R_1$ = 770 kg/h (extract 10.5 % acid, 3.5 % water; raffinate 5 % acid, 93 % water). These values do **not** satisfy the balances: acid in = 800 + 56 = 856 kg/h but acid out = 0.105(6830) + 0.05(770) = 756 kg/h, and water in = 1200 kg/h but out = 0.035(6830) + 0.93(770) = 955 kg/h. With the tabulated equilibrium data, S = 5600 kg/h gives about 5 stages; three stages need roughly 10 000 kg/h.`,
        answer: String.raw`S ≈ 9.9 × 10³ kg/h for exactly 3 stages ($E_N$ ≈ 10 900 kg/h at 7.8 % acid, $R_1$ ≈ 960 kg/h); the book's S = 5600 kg/h does not close the mass balance (it gives ≈ 5 stages).` } ] },

    { id: "practice-partial-extraction-P9", q: 9, section: "F", compulsory: false, stem: String.raw`400 kg/h of a 40 wt % acetone, 60 wt % water solution is extracted with pure chloroform at 25 °C (equilibrium data of Problem 1).`,
      parts: [ { id: "practice-partial-extraction-P9a", label: "(a)", marks: "15", topic: "partial-extraction",
        sub: "Two-stage cross-flow on a triangular diagram", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); data Wankat Table 13-4`,
        text: String.raw`300 kg/h of pure chloroform is added to each of two cross-flow stages (the raffinate from stage 1 is fed to stage 2). Find the flow rates and compositions of $E_1$, $R_1$, $E_2$, $R_2$ and the overall acetone recovery.`,
        solution: String.raw`**Assumptions:** equilibrium stages, isothermal; pure chloroform is the S corner (0, 0) of the right triangle (x_D, x_A).

**Stage 1:** $M_1$ = 700 kg/h, $x_{A,M1} = 160/700 = 0.229$, $x_{D,M1} = 240/700 = 0.343$. Tie line through $M_1$: $R_1$ = (0.834, 0.154), $E_1$ = (0.013, 0.279). Lever rule (water): $E_1 = 700(0.343 - 0.834)/(0.013 - 0.834) = 419$ kg/h, $R_1$ = 281 kg/h.

**Stage 2:** $M_2 = R_1 + S = 581$ kg/h at $x_{A,M2} = 281(0.154)/581 = 0.074$, $x_{D,M2} = 281(0.834)/581 = 0.404$. Tie line through $M_2$: $R_2$ = (0.940, 0.051), $E_2$ = (0.008, 0.092). $E_2$ = 334 kg/h, $R_2$ = 247 kg/h.

| Stream | Flow (kg/h) | acetone | water | chloroform |
|---|---|---|---|---|
| $E_1$ | 419 | 0.279 | 0.013 | 0.708 |
| $R_1$ | 281 | 0.154 | 0.834 | 0.012 |
| $E_2$ | 334 | 0.092 | 0.008 | 0.900 |
| $R_2$ | 247 | 0.051 | 0.940 | 0.009 |

Overall recovery $= 1 - 247(0.0506)/160 = 92.2 %$ (stage 1 alone: 73 %).

![Two-stage cross-flow construction: M1, M2 and their tie lines](fig/practice-partial-extraction-P9-sol.svg)`,
        answer: String.raw`$E_1$ = 419 kg/h (27.9 % acetone), $R_1$ = 281 kg/h (15.4 %); $E_2$ = 334 kg/h (9.2 %), $R_2$ = 247 kg/h (5.1 %); recovery ≈ 92 %.` },
      { id: "practice-partial-extraction-P9b", label: "(b)", marks: "12", topic: "partial-extraction",
        sub: "Same total solvent in one stage", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`If all 600 kg/h of chloroform is used in a single stage, what are the outlet flows, compositions and the recovery? Compare with part (a).`,
        solution: String.raw`1. M = 1000 kg/h at $x_{A,M}$ = 0.160, $x_{D,M}$ = 0.240.
2. Tie line through M: R = (0.889, 0.100), E = (0.010, 0.181).
3. E = 1000(0.240 − 0.889)/(0.010 − 0.889) = 739 kg/h, R = 261 kg/h.
4. Recovery = 1 − 261(0.0998)/160 = 83.7 %.

Splitting the same solvent between two stages raises the recovery from 84 % to 92 %, because the second contact uses fresh solvent against an already-leaner raffinate. A countercurrent pair would do even better.`,
        answer: String.raw`E = 739 kg/h (18.1 % acetone), R = 261 kg/h (10.0 %), recovery 84 % vs 92 % for two cross-flow stages.` },
      { id: "practice-partial-extraction-P9c", label: "(c)", marks: "8", topic: "partial-extraction",
        sub: "Limits on solvent rate for a single stage", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); Wankat 3e Problem 13.A8`,
        text: String.raw`On the triangular diagram, explain what happens to M as S/F increases, and why there are both a minimum and a maximum solvent rate for a single-stage extraction.`,
        solution: String.raw`- M moves along the straight line F–S from F towards S as S/F increases (lever rule: $\overline{FM}/\overline{MS} = S/F$).
- **Minimum S:** while M is still outside the dome on the F side (between F and the raffinate curve) the mixture is one phase: no extract forms. $S_{min}$ puts M on the saturated raffinate curve.
- **Maximum S:** when M passes the saturated extract curve near S, the solvent dissolves everything and again only one phase exists. $S_{max}$ puts M on the extract curve.
- Between these limits the tie line through M moves to leaner raffinates as S increases (more extraction, but a more dilute extract and more solvent to recover).`,
        answer: String.raw`M slides from F towards S; S_min puts M on the raffinate curve, S_max on the extract curve; outside these limits only one phase forms.` } ] },

    { id: "practice-partial-extraction-P10", q: 10, section: "F", compulsory: false, stem: String.raw`1500 kg/h of an aqueous solution of 30 wt % acetic acid is extracted countercurrently with 3000 kg/h of pure isopropyl ether at 20 °C (equilibrium data of Problem 2). The raffinate must contain 8 wt % acid.`,
      parts: [ { id: "practice-partial-extraction-P10a", label: "(a)", marks: "12", topic: "partial-extraction",
        sub: "External balance: E_N and R_1 from the mixing point", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`Find the flow rates and compositions of the outlet extract $E_N$ and raffinate $R_1$.`,
        solution: String.raw`1. M = 4500 kg/h: $x_{A,M} = 450/4500 = 0.100$, $x_{D,M} = 1050/4500 = 0.233$.
2. $R_1$ on the raffinate curve at $x_A$ = 0.08: $x_D$ = 0.900 ($x_S$ = 0.020).
3. Line $R_1$M extended to the extract curve: $E_N$ at $y_A$ = 0.106, $y_D$ = 0.037 ($y_S$ = 0.857).
4. Lever rule (water): $E_N = 4500(0.233 - 0.900)/(0.037 - 0.900) = 3475$ kg/h; $R_1$ = 1025 kg/h.
5. Check (acid): 3475(0.106) + 1025(0.08) = 368 + 82 = 450 kg/h ✓.`,
        answer: String.raw`$E_N$ ≈ 3475 kg/h (10.6 % acid, 3.7 % water); $R_1$ ≈ 1025 kg/h (8 % acid, 90 % water).` },
      { id: "practice-partial-extraction-P10b", label: "(b)", marks: "8", topic: "partial-extraction",
        sub: "Locating the difference point", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`Locate the difference point Δ by coordinates and explain the graphical check.`,
        solution: String.raw`1. $\Delta = E_0 - R_1 = 3000 - 1025 = 1975$ kg/h (positive, so Δ lies on the side of $E_0$, to the left of the diagram).
2. Coordinates:
$$x_{A,\Delta} = \frac{0 - 1025(0.08)}{1975} = -0.042,\qquad x_{D,\Delta} = \frac{0 - 1025(0.900)}{1975} = -0.467$$
3. Graphical check: Δ is the intersection of line $R_1$–$E_0$ (extended beyond $E_0$) and line F–$E_N$ (extended beyond $E_N$), since $\Delta = E_0 - R_1 = E_N - R_{N+1}$.`,
        answer: String.raw`Δ = 1975 kg/h at (x_D, x_A) = (−0.467, −0.042).` },
      { id: "practice-partial-extraction-P10c", label: "(c)", marks: "15", topic: "partial-extraction",
        sub: "Stage-by-stage stepping with Δ", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style)`,
        text: String.raw`Step off the equilibrium stages and give the number required.`,
        solution: String.raw`Start at $R_1$; tie line gives $E_1$; the line Δ–$E_1$ meets the raffinate curve at $R_2$; repeat.

| Stage | $R_j$: $x_D$, $x_A$ | $E_j$: $y_D$, $y_A$ |
|---|---|---|
| 1 | 0.900, 0.080 | 0.012, 0.026 |
| 2 | 0.835, 0.142 | 0.020, 0.053 |
| 3 | 0.773, 0.198 | 0.030, 0.084 |
| 4 | 0.711, 0.255 | 0.039, 0.114 |

$E_4$ passes $y_{A,N}$ = 0.106: fraction = (0.106 − 0.084)/(0.114 − 0.084) = 0.74 → N ≈ 3.7 → 4 equilibrium stages.

![Countercurrent IPE extraction: Δ point and 3.7 stages](fig/practice-partial-extraction-P10-sol.svg)`,
        answer: String.raw`N ≈ 3.7 → 4 equilibrium stages.` } ] },

    { id: "practice-partial-extraction-P11", q: 11, section: "F", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-partial-extraction-P11a", label: "(a)", marks: "8", topic: "partial-extraction",
        sub: "Degrees of freedom of ternary liquid–liquid equilibrium", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); slides: Extraction of Partially Miscible Systems p. 3`,
        text: String.raw`Apply the Gibbs phase rule to a ternary system in two liquid phases and explain why one concentration fixes the equilibrium at constant T and p. What does this mean for the triangular diagram?`,
        solution: String.raw`- F = C − P + 2 = 3 − 2 + 2 = 3 degrees of freedom.
- Extraction is normally at fixed T and p, leaving 1 degree of freedom.
- So specifying one composition (e.g. acid wt frac in the raffinate) fixes every other composition of both phases: the raffinate lies on one curve, the extract on another, and they are joined by a unique tie line.
- On the diagram this gives the saturated extract and raffinate curves (the binodal), the tie lines between them, and the plait point where the two phases become identical.`,
        answer: String.raw`F = 3; at constant T and p one composition fixes both phases, i.e. a point on the binodal plus its tie line.` },
      { id: "practice-partial-extraction-P11b", label: "(b)", marks: "12", topic: "partial-extraction",
        sub: "Conjugate line: construction and use", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); slides pp. 5–6`,
        text: String.raw`With a sketch, explain how a conjugate line is constructed from tie-line data and how it is then used to draw a tie line through any point on the saturated extract curve.`,
        solution: String.raw`**Construction (right triangle, x_D horizontal, x_A vertical):**
1. For each experimental tie line, draw a horizontal line through the extract end E and a vertical line through the raffinate end R.
2. Mark their intersection; join all such points (and the plait point) with a smooth curve: this is the conjugate line (Conjugate Line A in the slide figure). (Alternatively vertical through E and horizontal through R gives conjugate line B.)

**Use:** for a new extract point $E'$ on the saturated extract curve, go horizontally to the conjugate line, then vertically to the saturated raffinate curve: that point is $R'$, and $E'R'$ is the tie line. The reverse path (from R′ vertically up/down, then horizontally) gives the extract in equilibrium with a known raffinate.

**Sketch:** binodal dome with plait point P; a few tie lines; the conjugate line starting at the plait point and running inside the dome; arrows showing E′ → conjugate line → R′.

The numerical equivalent, used in these practice solutions, is interpolation between the tabulated tie lines.`,
        answer: String.raw`Conjugate line = locus of (horizontal through E) ∩ (vertical through R) for the data tie lines; from any E go horizontal to it, then vertical to the raffinate curve.` },
      { id: "practice-partial-extraction-P11c", label: "(c)", marks: "15", topic: "partial-extraction",
        sub: "Derivation: mixing point lies on the line FS (lever-arm rule)", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Practice problem (exam style); Wankat 3e Problem 13.C6`,
        text: String.raw`Two streams F and S are mixed to give M. Prove that M lies on the straight line FS of the triangular diagram and that $M/F = \overline{FS}/\overline{MS}$ (lever-arm rule). Show that the same argument proves Δ, $E_j$ and $R_{j+1}$ lie on one straight line.`,
        solution: String.raw`1. Balances: total $F + S = M$; solute $Fx_{A,F} + Sy_{A,S} = Mx_{A,M}$; diluent $Fx_{D,F} + Sy_{D,S} = Mx_{D,M}$.
2. Eliminate M with M = F + S:
$$F(x_{A,F} - x_{A,M}) = S(x_{A,M} - y_{A,S}),\qquad F(x_{D,F} - x_{D,M}) = S(x_{D,M} - y_{D,S})$$
3. Divide the two equations:
$$\frac{x_{A,F} - x_{A,M}}{x_{D,F} - x_{D,M}} = \frac{x_{A,M} - y_{A,S}}{x_{D,M} - y_{D,S}}$$
The slope of FM equals the slope of MS and they share M, so F, M and S are collinear.
4. Lever arms: from step 2, $F/S = (x_{A,M} - y_{A,S})/(x_{A,F} - x_{A,M}) = \overline{MS}/\overline{FM}$, so $\overline{FM}/\overline{MS} = S/F$ and $M/F = (\overline{FM} + \overline{MS})/\overline{MS} = \overline{FS}/\overline{MS}$.
5. **Δ point:** $\Delta = E_j - R_{j+1}$ means $E_j = \Delta + R_{j+1}$: $E_j$ is the "mixture" of the fictitious stream Δ and $R_{j+1}$, so by the same algebra Δ, $R_{j+1}$ and $E_j$ are collinear, with $E_j$ between them if Δ > 0 (Δ on the solvent side) or Δ beyond $R_{j+1}$ if Δ < 0. If $E_0 = R_1$ (Δ = 0) the operating lines are parallel and Δ is at infinity.`,
        answer: String.raw`Component balances give equal slopes FM and MS ⇒ collinear; FM/MS = S/F. Since E_j = Δ + R_{j+1}, Δ, R_{j+1}, E_j are collinear too.` } ] }
  ] });
