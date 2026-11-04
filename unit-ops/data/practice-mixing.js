QB.paper({ year: "Practice", set: "Mixing and agitation", date: "", marks: 0, practice: true,
  rules: String.raw`Mixing and agitation: the slide derivation of the power number from the flow number, slide follow-ups to MSH Example 9.1 and the mixer-selection chart, MSH 5th ed. chapter 9 worked examples and problems (unbaffled tanks with the Froude correction, laminar power, solid suspension, gas dispersion, blending-time scale-up) and Ludwig Example 5-1, plus exam-style questions on turbulent and laminar power, scale-up criteria, Zwietering suspension speed, the blending-time correlation and flow patterns.`,
  questions: [
    { id: "practice-mixing-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P1", label: "", marks: "", topic: "mixing",
        sub: "Power number from impeller flow number and kinetic energy: N_P = (α²π²/2)N_Q = 5.2", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Mixing & Agitation 2026 slides, "Power consumption" (MSH 5th ed. Eqs. 9.10–9.12)`,
        text: String.raw`In turbulent flow the power required to drive an impeller can be estimated from the product of the flow $q$ produced by the impeller and the kinetic energy $E_k$ per unit volume of the fluid. Taking $q = nD_a^3N_Q$ and the fluid velocity leaving the blade tips as $V_2' = \alpha\pi nD_a$, derive an expression for the power number $N_P = Pg_c/(n^3D_a^5\rho)$. Evaluate it for a standard six-blade turbine with $N_Q = 1.3$ and $\alpha = 0.9$, and compare with the value from the $N_P$–$N_{Re}$ chart.`,
        solution: String.raw`**Given:** $q = nD_a^3N_Q$; $E_k = \rho V_2'^2/(2g_c)$; $V_2' = \alpha u_2 = \alpha\pi nD_a$ ($u_2$ = tip speed).

**Find:** $N_P$ in terms of $N_Q$ and $\alpha$.

1. **Power = volumetric flow × kinetic energy per unit volume:**
$$P = qE_k = nD_a^3N_Q\cdot\frac{\rho(\alpha\pi nD_a)^2}{2g_c}$$

2. **Collect terms:**
$$P = \frac{\rho n^3D_a^5}{g_c}\left(\frac{\alpha^2\pi^2}{2}N_Q\right)$$

3. **Dimensionless form:**
$$N_P = \frac{Pg_c}{n^3D_a^5\rho} = \frac{\alpha^2\pi^2}{2}N_Q$$
So the power number is a flow number times a velocity-ratio factor; both are constant for a given impeller in fully turbulent flow, which is why $N_P$ becomes independent of $N_{Re}$ there.

4. **Standard six-blade turbine:**
$$N_P = \frac{(0.9)^2\pi^2}{2}(1.3) = \frac{0.81(9.870)}{2}(1.3) = 5.20$$

5. **Comparison:** curve A of Fig. 9.12 (baffled, $S_4 = 0.2$) levels off at $N_P \approx 5.8$ for $N_{Re} > 10^4$, and MSH Table 9.3 gives $K_T = 5.75$. The estimate, 5.2, is within about 10%, "in good agreement with observation" (MSH).

**Result:** $N_P = (\alpha^2\pi^2/2)N_Q = 5.2$ for a standard turbine.`,
        answer: String.raw`P = qE_k = nD_a³N_Q · ρ(απnD_a)²/2g_c → **N_P = (α²π²/2)N_Q = 5.2** (chart: ≈ 5.8, K_T = 5.75).` } ] },

    { id: "practice-mixing-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P2", label: "", marks: "", topic: "mixing",
        sub: "Slide Example 9.1 turbine: Froude number, tip speed, power per unit volume, rules of thumb", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Mixing & Agitation 2026 slides, "Power requirement – Example 9.1" (answer 3.31 hp), "Rules of thumb", Froude-number slide`,
        text: String.raw`In the slide example (MSH Example 9.1) a six-blade flat turbine 2 ft in diameter, 2 ft above the floor of a 6-ft baffled tank filled to 6 ft with 50% caustic soda (93.5 lb/ft³, 12 cP), turns at 90 r/min and needs 3.31 hp. (a) Calculate the Froude number and the impeller tip speed, and explain why the Froude number can be ignored here. (b) Calculate the power per unit volume in hp/1000 gal and kW/m³ and classify the agitation. (c) Check the design against the slide rules of thumb.`,
        solution: String.raw`**Given:** $D_t = 6$ ft, $D_a = 2$ ft, $H = 6$ ft, $W = 5$ in., $n = 1.5$ r/s, $P = 3.31$ hp (2.47 kW), baffled.

1. **(a) Froude number and tip speed:**
$$N_{Fr} = \frac{n^2D_a}{g} = \frac{(1.5)^2(2)}{32.17} = 0.140$$
$$u_2 = \pi D_an = \pi(2)(1.5) = 9.42\ \text{ft/s}\ (2.87\ \text{m/s})$$
The Froude number measures inertial against gravity forces and matters only when the free surface is deformed (a vortex). Four wall baffles stop the swirl, so no vortex forms and $N_P$ depends on $N_{Re}$ alone (slides: "for adequately baffled systems or with an off-centre impeller, the Froude number may be neglected").

2. **(b) Power per unit volume:**
$$V = \frac{\pi}{4}(6)^2(6) = 169.6\ \mathrm{ft^3} = 1269\ \text{gal} = 4.80\ \mathrm{m^3}$$
$$\frac{P}{V} = \frac{3.31}{1.269} = 2.61\ \text{hp/1000 gal} = \frac{2.47}{4.80} = 0.51\ \mathrm{kW/m^3}$$
MSH guide: 0.5–1 hp/1000 gal mild, 2–3 vigorous, 4–10 intense. This is **vigorous** agitation.

3. **(c) Rules of thumb (slides):**

| Rule | This design | Verdict |
|---|---|---|
| industrial paddles/turbines turn at 20–150 rpm | 90 rpm | ✓ |
| total impeller length 30–50% of vessel diameter | $D_a/D_t = 2/6 = 33\%$ | ✓ |
| blade width about 1/12 of vessel diameter (slide) | $W/D_t = 5/72 = 1/14$ ($W/D_a = 0.21$) | close ✓ |
| standard geometry $E/D_t = 1/3$, $H/D_t = 1$ | 2/6, 6/6 | ✓ |

**Result:** $N_{Fr} = 0.14$, $u_2 = 9.4$ ft/s; $P/V = 2.6$ hp/1000 gal (0.51 kW/m³), vigorous agitation; the geometry follows the standard design and the rules of thumb.`,
        answer: String.raw`(a) N_Fr = **0.14**, tip speed **9.4 ft/s (2.9 m/s)**; baffles → no vortex → Fr ignored. (b) **2.6 hp/1000 gal = 0.51 kW/m³** (vigorous). (c) speed, D_a/D_t, blade width all within the rules of thumb.` } ] },

    { id: "practice-mixing-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P3", label: "", marks: "", topic: "mixing",
        sub: "Mixer and impeller selection from the viscosity-range chart and rules of thumb", type: "theory", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Mixing & Agitation 2026 slides: impeller types, "Rules of thumb", Fig. 5-1 "Range of operation of mixers" (Ludwig/Quillen)`,
        text: String.raw`Using the slide chart of the range of operation of mixers and the rules of thumb, select a mixing device for each duty and justify: (i) blending two low-viscosity solvents in a 2 m³ tank; (ii) dispersing air into a 50 cP fermentation broth; (iii) a 40,000 cP polymer solution; (iv) a dough or paste (above 10⁶ cP); (v) making a fine oil-in-water emulsion; (vi) keeping a 5000 m³ crude-oil storage tank uniform.`,
        solution: String.raw`**Basis (slides):** propellers are high-speed impellers for low viscosity; turbines cover moderate viscosities (flat-blade turbines suit most duties up to about 100,000 cP); for very viscous liquids helical-ribbon and anchor agitators are used; beyond the liquid range (pastes, plastic and solid states) kneaders, screws, pug mills, Banbury-type internal mixers and extruders. Rules of thumb: small propellers 1150/1750 rpm, large ones 400–800 rpm, rarely above 18 in. diameter; paddles/turbines 20–150 rpm, turbine length 30–50% of the vessel diameter.

| Duty | Choice | Reason |
|---|---|---|
| (i) low-viscosity blending, 2 m³ | **three-blade propeller** (top-entering, off-centre or angled, or with baffles) or pitched-blade turbine | axial flow gives top-to-bottom circulation at low power; viscosity ≪ 10³ cP is the propeller range |
| (ii) gas dispersion, 50 cP | **six-blade disk (Rushton) turbine**, four baffles, sparger under the impeller | radial discharge and high shear break the gas into fine bubbles; the disk stops gas rising up the shaft |
| (iii) 40,000 cP polymer | **helical-ribbon or anchor agitator** (a flat-blade turbine is at its upper limit) | at this viscosity $N_{Re}$ is laminar; the impeller must sweep the whole vessel close to the wall; anchors also scrape the wall for heat transfer |
| (iv) dough/paste, > 10⁶ cP | **kneader (sigma-blade) or internal mixer, pug mill, extruder** | liquids no longer flow to the impeller; the material must be cut, folded and pressed by close-clearance blades |
| (v) fine emulsion | **rotor–stator (shrouded turbine) or sawtooth (Cowles) disk; colloid mill / valve homogenizer** for very fine drops | very high local shear breaks drops; sawtooth impellers give "highly localized shearing action ideal for emulsification" |
| (vi) large storage tank | **side-entering propeller** (or jet mixer) | a top-entering impeller is impractical in a 5000 m³ tank; a side-entering propeller angled 80–83° to the tangent, or jets of recirculated liquid, give a slow bulk circulation |`,
        answer: String.raw`(i) propeller/pitched turbine; (ii) baffled disk (Rushton) turbine with sparger; (iii) helical ribbon/anchor; (iv) kneader, pug mill, extruder; (v) rotor–stator/sawtooth disk or colloid mill; (vi) side-entering propeller or jet mixer.` } ] },

    { id: "practice-mixing-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P4", label: "", marks: "", topic: "mixing",
        sub: "Unbaffled tank: turbine power with the Froude-number correction (curve D)", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Example 9.2 (Fig. 9.12 curve D, Table 9.1, Eq. 9.19)`,
        text: String.raw`What would the power requirement be in the vessel described in Example 9.1 (six-blade flat turbine, $D_a$ = 2 ft, $D_t$ = 6 ft, 50% caustic soda, 93.5 lb/ft³, 12 cP, 90 r/min) if the tank were unbaffled?`,
        solution: String.raw`**Given:** $D_a = 2$ ft, $n = 1.5$ r/s, $\rho = 93.5$ lb/ft³, $\mu = 8.06 \times 10^{-3}$ lb/(ft·s); $N_{Re} = 69{,}600$ (Example 9.1); unbaffled.

**Find:** $P$.

**Assumptions:** curve D of Fig. 9.12 applies; in its dashed region $N_P$ must be multiplied by $N_{Fr}^m$ with $m = (a - \log_{10}N_{Re})/b$.

1. **Froude number:**
$$N_{Fr} = \frac{n^2D_a}{g} = \frac{(1.5)^2(2)}{32.17} = 0.14$$

2. **Exponent** (Table 9.1, curve D: $a = 1.0$, $b = 40.0$):
$$m = \frac{1.0 - \log_{10}69{,}600}{40.0} = \frac{1.0 - 4.843}{40.0} = -0.096$$

3. **Power number:** Fig. 9.12, curve D at $N_{Re} = 69{,}600$ reads $N_P = 1.07$. Corrected:
$$N_P = 1.07(0.14)^{-0.096} = 1.07(1.208) = 1.29$$

4. **Power:**
$$P = \frac{N_P n^3D_a^5\rho}{g_c} = \frac{1.29(1.5)^3(2)^5(93.5)}{32.17} = 406\ \text{ft·lb}_f/\text{s} = 0.74\ \text{hp}\ (0.55\ \text{kW})$$

**Result:** 0.74 hp (0.55 kW), against 3.31 hp in the baffled tank; book answer 0.74 hp ✓.

> The unbaffled tank draws less than a quarter of the power because the liquid swirls round with the impeller (low relative velocity) and a vortex forms. It is not good practice: mixing is poor even though less power is used.`,
        answer: String.raw`N_Fr = 0.14, m = −0.096, N_P = 1.07 × 0.14^(−0.096) = 1.29 → **P = 406 ft·lbf/s = 0.74 hp (0.55 kW)** (book ✓).` } ] },

    { id: "practice-mixing-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P5", label: "", marks: "", topic: "mixing",
        sub: "Laminar-range power for a rubber-latex compound (K_L = 65)", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Example 9.3 (Eqs. 9.21–9.22, Table 9.3)`,
        text: String.raw`The mixer of Example 9.1 (six-blade turbine, $D_a$ = 2 ft, 90 r/min) is to be used to mix a rubber-latex compound having a viscosity of 1200 P and a density of 70 lb/ft³ (1120 kg/m³). What power will be required?`,
        solution: String.raw`**Given:** $D_a = 2$ ft, $n = 1.5$ r/s, $\mu = 1200$ P $= 1200(0.0672) = 80.6$ lb/(ft·s), $\rho = 70$ lb/ft³.

**Find:** $P$.

1. **Reynolds number:**
$$N_{Re} = \frac{nD_a^2\rho}{\mu} = \frac{1.5(4)(70)}{80.6} = 5.2$$
Below 10, so the flow is laminar: $N_P = K_L/N_{Re}$ (slope −1 on Fig. 9.12; baffled and unbaffled curves coincide).

2. **Power number:** Table 9.3, six-blade disk turbine $K_L = 65$:
$$N_P = \frac{65}{5.2} = 12.5$$

3. **Power:**
$$P = \frac{12.5(1.5)^3(2)^5(70)}{32.17} = 2938\ \text{ft·lb}_f/\text{s} = 5.34\ \text{hp}\ (3.99\ \text{kW})$$
Equivalently $P = K_Ln^2D_a^3\mu/g_c$, independent of density.

**Result:** 5.34 hp (3.99 kW); book ✓.

> A 10,000-fold rise in viscosity raises the power only about 60% (5.34 against 3.31 hp), because in laminar flow $P \propto \mu n^2D_a^3$ while the low-viscosity case was turbulent with $P \propto \rho n^3D_a^5$. Baffles are pointless in this regime; no vortex forms.`,
        answer: String.raw`N_Re = 5.2 (laminar), N_P = 65/5.2 = 12.5 → **P = 2938 ft·lbf/s = 5.34 hp (3.99 kW)** (book ✓).` } ] },

    { id: "practice-mixing-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P6", label: "", marks: "", topic: "mixing",
        sub: "Power for complete suspension of a fluorspar slurry and the critical stirrer speed", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Example 9.5 (Fig. 9.19, Zwietering Eq. 9.36, Table 9.3)`,
        text: String.raw`An agitated vessel 6 ft (1.8 m) in diameter with a working depth of 8 ft (2.44 m) is used to prepare a slurry of 150-mesh fluorspar in water at 70 °F. The solid has a specific gravity of 3.18, and the slurry is 25 percent solids by weight. The impeller is a four-blade pitched-blade turbine 2 ft (0.61 m) in diameter set 1.5 ft above the vessel floor. (a) What is the power required for complete suspension? (b) What is the critical stirrer speed?`,
        solution: String.raw`**Given:** $D_t = 6$ ft, $H = 8$ ft, $D_a = 2$ ft; fluorspar 150 mesh ($D_p = 104$ μm), $\Delta\rho = 2.18$ g/cm³, 25 wt% solids ($B = 100 \times 25/75 = 33.3$).

**Find:** (a) $P$ for complete suspension; (b) $n_c$.

**Assumptions:** use the data of Buurman et al. for sand in Fig. 9.19 (pitched-blade turbines) and correct with the exponents of Zwietering's equation, $n_c \propto D_p^{0.2}\Delta\rho^{0.45}B^{0.13}$; at fixed geometry $P \propto n_c^3$.

1. **Reference case (Fig. 9.19):** sand, $D_p = 200$ μm, $\Delta\rho = 1.59$ g/cm³, $B = 11.1$; at $D_t = 6$ ft the Buurman line reads $P/V = 2.1$ hp/1000 gal.

2. **Change in critical speed:**
$$\frac{n_{c,F}}{n_{c,S}} = \left(\frac{104}{200}\right)^{0.2}\left(\frac{2.18}{1.59}\right)^{0.45}\left(\frac{33.3}{11.1}\right)^{0.13} = 0.877(1.153)(1.154) = 1.167$$
Change in power: $1.167^3 = 1.59$.

3. **(a) Power:** $P/V = 2.1(1.59) = 3.33$ hp/1000 gal.
$$V = \frac{\pi}{4}(6)^2(8) = 226.2\ \mathrm{ft^3} = 1692\ \text{gal}, \qquad P = 3.33\left(\frac{1692}{1000}\right) = 5.6\ \text{hp}\ (4.2\ \text{kW})$$

4. **(b) Critical speed** from $P = N_Pn_c^3D_a^5\rho_m/g_c$ with $N_P = K_T = 1.27$ (four pitched blades, Table 9.3):
$$\rho_m = \frac{1}{0.25/3.18 + 0.75} = 1.207\ \mathrm{g/cm^3} = 75.2\ \mathrm{lb/ft^3}$$
$$n_c^3 = \frac{5.6(550)(32.17)}{1.27(75.2)(2)^5} = 32.5 \;\Rightarrow\; n_c = 3.19\ \text{r/s}\ (191\ \text{rpm})$$

**Result:** about 5.6 hp (4.2 kW) and $n_c \approx 3.2$ r/s; book: 5.58 hp (4.16 kW), 3.18 r/s ✓.`,
        answer: String.raw`n_c ratio 1.157–1.167 → P/V = 2.1 × 1.55–1.59 ≈ 3.3 hp/1000 gal → **P ≈ 5.6 hp (4.2 kW)**; ρ_m = 75.2 lb/ft³, K_T = 1.27 → **n_c ≈ 3.2 r/s** (book 5.58 hp, 3.18 r/s).` } ] },

    { id: "practice-mixing-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P7", label: "", marks: "", topic: "mixing",
        sub: "Gas dispersion by a turbine: ungassed and gassed power and power per unit volume", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Example 9.6(a) (Eq. 9.24, Table 9.3, Fig. 9.20)`,
        text: String.raw`A baffled cylindrical vessel 2 m in diameter is agitated with a turbine impeller 0.667 m in diameter turning at 180 r/min. The vessel contains water at 20 °C, through which 100 m³/h of air is to be passed at atmospheric pressure. Calculate the power input and the power input per unit volume of liquid.`,
        solution: String.raw`**Given:** $D_t = 2$ m, $D_a = 0.667$ m, $n = 3$ r/s, water $\rho = 1000$ kg/m³, $\mu = 10^{-3}$ Pa·s, $q_g = 100$ m³/h.

**Find:** gassed power $P_g$ and $P_g/V$.

**Assumptions:** standard geometry ($H = D_t$); flat-blade (disk) turbine, $K_T = 5.75$.

1. **Reynolds number:**
$$N_{Re} = \frac{nD_a^2\rho}{\mu} = \frac{3(0.667)^2(1000)}{10^{-3}} = 1.33 \times 10^6$$
fully turbulent, so $N_P = K_T$.

2. **Ungassed power** (Eq. 9.24):
$$P_0 = K_Tn^3D_a^5\rho = 5.75(27)(0.667)^5(1000) = 20{,}490\ \text{W} = 20.5\ \text{kW}$$

3. **Superficial gas velocity:**
$$\bar V_s = \frac{100/3600}{\pi(2)^2/4} = \frac{0.02778}{3.142} = 0.00884\ \text{m/s}$$

4. **Gassed power:** Fig. 9.20 at $\bar V_s = 8.8$ mm/s gives $P_g/P_0 \approx 0.60$:
$$P_g = 0.60(20.49) = 12.3\ \text{kW}$$

5. **Per unit volume:** $V = (\pi/4)(2)^2(2) = 6.28$ m³:
$$\frac{P_g}{V} = \frac{12.29}{6.28} = 1.96\ \mathrm{kW/m^3}\ (9.9\ \text{hp/1000 gal})$$

**Result:** 12.3 kW, 1.96 kW/m³; book ✓.

> Why the power falls with gassing: gas collects in cavities behind the turbine blades, lowering their drag. The drive must still be sized for the ungassed 20.5 kW, because the agitator will run at times with the gas off.`,
        answer: String.raw`N_Re = 1.33 × 10⁶; P₀ = 5.75 × 27 × 0.667⁵ × 1000 = **20.5 kW**; V_s = 8.84 mm/s → P_g/P₀ ≈ 0.60 → **P_g = 12.3 kW**, **1.96 kW/m³** (book ✓).` } ] },

    { id: "practice-mixing-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P8", label: "", marks: "", topic: "mixing",
        sub: "Blending-time scale-up from a 1-ft pilot vessel to a 6-ft vessel", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Example 9.8 (Fig. 9.15, Eq. 9.54)`,
        text: String.raw`A pilot-plant vessel 1 ft (305 mm) in diameter is agitated by a six-blade turbine impeller 4 in. (102 mm) in diameter. When the impeller Reynolds number is 10⁴, the blending time of two miscible liquids is found to be 15 s. The power required is 2 hp per 1000 gal (0.4 kW/m³) of liquid. (a) What power input would be required to give the same blending time in a vessel 6 ft (1830 mm) in diameter? (b) What would be the blending time in the 6-ft vessel if the power input per unit volume was the same as in the pilot-plant vessel?`,
        solution: String.raw`**Given:** geometrically similar vessels, scale ratio $D_{a6}/D_{a1} = 6$; pilot $t_T = 15$ s at $N_{Re} = 10^4$; $P/V = 2$ hp/1000 gal.

**Find:** (a) $P/V$ for equal $t_T$; (b) $t_T$ at equal $P/V$.

**Assumptions:** turbulent in both vessels, so $nt_T$ is constant (Fig. 9.15 is flat for $N_{Re} \ge 10^4$) and $N_P$ is constant; the Froude term is ignored.

1. **Power per unit volume:** $P \propto n^3D_a^5$ and $V \propto D_a^3$, so
$$\frac{P}{V} \propto n^3D_a^2, \qquad \frac{P_6/V_6}{P_1/V_1} = \left(\frac{n_6}{n_1}\right)^3\left(\frac{D_{a6}}{D_{a1}}\right)^2$$

2. **(a) Same blending time** → same $n$ (since $nt_T$ = constant):
$$\frac{P_6/V_6}{P_1/V_1} = 6^2 = 36 \;\Rightarrow\; \frac{P}{V} = 2(36) = 72\ \text{hp/1000 gal}\ (14.4\ \mathrm{kW/m^3})$$
an impractically large power for a low-viscosity liquid.

3. **(b) Same $P/V$:** $n^3D_a^2$ constant gives $n_6/n_1 = (D_{a1}/D_{a6})^{2/3}$; with $nt_T$ constant,
$$\frac{t_{T6}}{t_{T1}} = \frac{n_1}{n_6} = 6^{2/3} = 3.30, \qquad t_{T6} = 3.30(15) = 49.5\ \text{s}$$

**Result:** (a) 72 hp/1000 gal; (b) 49.5 s; book ✓. A moderate increase in blending time in the large vessel saves a factor of 36 in power per volume, the usual scale-up trade-off.`,
        answer: String.raw`(a) equal t_T → same n → P/V × 6² = **72 hp/1000 gal (14.4 kW/m³)**; (b) equal P/V → t_T × 6^(2/3) = **49.5 s** (book ✓).` } ] },

    { id: "practice-mixing-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P9", label: "", marks: "", topic: "mixing",
        sub: "Mixing time when the impeller size changes at equal P/V (blending-time correlation)", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Problem 9.5 (Eq. 9.32)`,
        text: String.raw`A mixing time of 29 s was measured for a 4.5-ft baffled tank with a 1.5-ft six-blade turbine and a liquid depth of 4.8 ft. The turbine speed was 75 r/min, and the fluid has a viscosity of 3 cP and a density of 65 lb/ft³. Estimate the mixing times if an impeller one-quarter or one-half the tank diameter were used with the speeds chosen to give the same power per unit volume.`,
        solution: String.raw`**Given:** $D_t = 4.5$ ft, $D_a = 1.5$ ft ($D_a/D_t = 1/3$), $H = 4.8$ ft, $n = 1.25$ r/s, $\mu = 3(6.72 \times 10^{-4}) = 2.02 \times 10^{-3}$ lb/(ft·s), $\rho = 65$ lb/ft³, $t_T = 29$ s.

**Find:** $t_T$ for $D_a = 1.125$ ft and $2.25$ ft at the same $P/V$.

**Assumptions:** turbulent flow ($N_P$ constant and the same for the three turbines); the blending-time relation Eq. 9.32, $nt_T(D_a/D_t)^2(D_t/H) = 4.3$, holds for each impeller, so in the same tank $t_T \propto 1/(nD_a^2)$.

1. **Check the regime:**
$$N_{Re} = \frac{1.25(1.5)^2(65)}{2.02 \times 10^{-3}} = 90{,}700\ \text{(turbulent)}$$
Eq. 9.32 predicts $nt_T = 4.3(3)^2(4.8/4.5) = 41.3$, i.e. $t_T = 33$ s, close to the 29 s measured.

2. **Same $P/V$ in the same tank:** $P \propto n^3D_a^5$, so $n \propto D_a^{-5/3}$. Then
$$nD_a^2 \propto D_a^{1/3}, \qquad \frac{t_{T2}}{t_{T1}} = \left(\frac{D_{a1}}{D_{a2}}\right)^{1/3}$$

3. **$D_a = D_t/4 = 1.125$ ft:** $n = 75(1.5/1.125)^{5/3} = 121$ rpm;
$$t_T = 29\left(\frac{1.5}{1.125}\right)^{1/3} = 29(1.101) = 31.9\ \text{s}$$

4. **$D_a = D_t/2 = 2.25$ ft:** $n = 75(1.5/2.25)^{5/3} = 38.2$ rpm;
$$t_T = 29\left(\frac{1.5}{2.25}\right)^{1/3} = 29(0.874) = 25.3\ \text{s}$$
Both remain turbulent ($N_{Re}$ = 82,000 and 104,000).

**Result:** about 32 s with the small impeller and 25 s with the large one: at equal power a large, slow impeller blends faster (it pumps more liquid), while a small fast one gives more shear. (No answer is printed in MSH.)`,
        answer: String.raw`t_T ∝ D_a^(−1/3) at equal P/V: D_a = D_t/4 (121 rpm) → **≈ 32 s**; D_a = D_t/2 (38 rpm) → **≈ 25 s**.` } ] },

    { id: "practice-mixing-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P10", label: "", marks: "", topic: "mixing",
        sub: "Scale-up of a pilot reactor: impeller speed by four scale-up criteria", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Problem 9.6`,
        text: String.raw`A pilot-plant reactor, a scale model of a production unit, is of such size that 1 g charged to the pilot-plant reactor is equivalent to 500 g of the same material charged to the production unit. The production unit is 2 m in diameter and 2 m deep and contains a six-blade turbine agitator 0.6 m in diameter. The optimum agitator speed in the pilot-plant reactor is found by experiment to be 330 r/min. (a) What are the significant dimensions of the pilot-plant reactor? (b) If the reaction mass has the properties of water at 70 °C and the power input per unit volume is to be constant, at what speed should the impeller turn in the large reactor? (c) At what speed should it turn if the mixing time is to be kept constant? (d) At what speed should it turn if the Reynolds number is held constant? (e) Which basis would you recommend for scaleup? Why?`,
        solution: String.raw`**Given:** volume ratio 500, so linear scale ratio $R = 500^{1/3} = 7.937$; plant $D_t = H = 2$ m, $D_a = 0.6$ m; pilot $n_1 = 330$ rpm; water at 70 °C: $\rho = 978$ kg/m³, $\mu = 0.404 \times 10^{-3}$ Pa·s.

**Assumptions:** geometric similarity; turbulent flow ($N_P$ constant, $nt_T$ constant).

1. **(a) Pilot dimensions:** $D_t = H = 2/7.937 = 0.252$ m; $D_a = 0.6/7.937 = 0.0756$ m. Pilot $N_{Re} = (5.5)(0.0756)^2(978)/(0.404 \times 10^{-3}) = 7.6 \times 10^4$: turbulent ✓.

2. **(b) Constant $P/V$** ($n^3D_a^2$ constant):
$$n_2 = n_1R^{-2/3} = \frac{330}{7.937^{2/3}} = \frac{330}{3.97} = 83\ \text{rpm}$$

3. **(c) Constant mixing time** ($nt_T$ constant): $n_2 = n_1 = 330$ rpm. Then $P/V$ rises by $R^2 = 63$ and the total power by $500 \times 63 = 31{,}500$ times: impractical.

4. **(d) Constant Reynolds number** ($nD_a^2$ constant):
$$n_2 = \frac{n_1}{R^2} = \frac{330}{63.0} = 5.2\ \text{rpm}$$
$P/V$ would fall by $R^{-4}$ (a factor of about 4000): the large tank would be almost unstirred.

5. **(e) Recommendation:** constant power per unit volume (83 rpm, about 1 m/s higher tip speed than at constant tip speed). In turbulent, low-viscosity systems the reaction or mass-transfer rate depends on the intensity of turbulence, which is set by $P/V$; it gives a reasonable motor size, and the mixing time grows only by $R^{2/3} = 4$. Constant mixing time is too costly; constant $N_{Re}$ is meaningless once both units are fully turbulent. (If the process is controlled by blending, accept the longer blending time or use a larger impeller.)

**Result:** (a) $D_t = H = 0.252$ m, $D_a = 0.076$ m; (b) 83 rpm; (c) 330 rpm; (d) 5.2 rpm; (e) constant $P/V$.`,
        answer: String.raw`R = 7.94: (a) **D_t = H = 0.252 m, D_a = 0.076 m**; (b) const P/V **83 rpm**; (c) const t_T **330 rpm**; (d) const N_Re **5.2 rpm**; (e) recommend **constant P/V**.` } ] },

    { id: "practice-mixing-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P11", label: "", marks: "", topic: "mixing",
        sub: "Equal blending time in a larger tank with a non-similar turbine; change in P/V", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Problem 9.7 (Eq. 9.32)`,
        text: String.raw`A stirred tank reactor 3 ft in diameter with a 12-in. flat-blade turbine has been used for a batch reaction in which the blending time of added reagents is considered critical. Satisfactory results were obtained with a stirrer speed of 400 r/min. The same reaction is to be carried out in a tank 7 ft in diameter, for which a 3-ft standard turbine is available. (a) What conditions would give the same blending time in the larger tank? (b) What would be the percentage change in the power per unit volume? Density $\rho$ = 60 lb/ft³; viscosity $\mu$ = 5 cP.`,
        solution: String.raw`**Given:** small: $D_t = 3$ ft, $D_a = 1$ ft, $n = 6.67$ r/s; large: $D_t = 7$ ft, $D_a = 3$ ft ($D_a/D_t = 0.43$); $\rho = 60$ lb/ft³, $\mu = 3.36 \times 10^{-3}$ lb/(ft·s).

**Assumptions:** liquid depth $H = D_t$ in both; turbulent; the same $N_P$ for both turbines; blending time from Eq. 9.32, $nt_T(D_a/D_t)^2(D_t/H) = 4.3$.

1. **Small tank:** $N_{Re} = 6.67(1)^2(60)/3.36 \times 10^{-3} = 1.19 \times 10^5$ (turbulent);
$$t_T = \frac{4.3(3/1)^2}{6.67} = 5.8\ \text{s}$$

2. **(a) Large tank, same $t_T$:**
$$n_2 = \frac{4.3(7/3)^2}{5.8} = 4.03\ \text{r/s} = 242\ \text{rpm}$$
($N_{Re} = 6.5 \times 10^5$, turbulent.)

3. **(b) Power per unit volume** ($P \propto n^3D_a^5$, $V \propto D_t^3$):
$$\frac{(P/V)_2}{(P/V)_1} = \left(\frac{4.03}{6.67}\right)^3\left(\frac{3}{1}\right)^5\left(\frac{3}{7}\right)^3 = 0.221(243)(0.0787) = 4.23$$
an increase of about **320%**.

**Result:** run the 3-ft turbine at about 240 rpm; $P/V$ rises about 4.2-fold (+320%). Using the relatively large turbine ($D_a/D_t = 0.43$) helps: a geometrically similar 7/3-ft turbine would need the full 400 rpm and $(7/3)^2 = 5.4$ times the $P/V$. (No answer is printed in MSH.)`,
        answer: String.raw`t_T(small) = 4.3 × 9/6.67 = 5.8 s → large tank **n ≈ 4.0 r/s (242 rpm)**; P/V ratio = 0.221 × 243 × 0.0787 = **4.2 (≈ +320%)**.` } ] },

    { id: "practice-mixing-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P12", label: "", marks: "", topic: "mixing",
        sub: "Ludwig scale-up from a 6-gal test unit to 10,000 gal using the scale-up exponent", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig, Applied Process Design Vol. 1, 3rd ed., chapter 5, Example 5-1 (Figs. 5-32, 5-33; Eqs. 5-46 to 5-54)`,
        text: String.raw`A pilot run in a laboratory test vessel gave satisfactory results. Design an equivalent 10,000-gal vessel.

| | Test unit | Proposed vessel |
|---|---|---|
| Vessel diameter $T$ | 12 in. | ? |
| Liquid level $Z$ | 12 in. | ? |
| Batch volume | 6 gal | 10,000 gal |
| Impeller diameter $D$ | 4 in. | ? |
| Impeller width $W$ | 1 in. | ? |
| Baffle width (4) | 1 in. | ? |
| Impeller off bottom $C$ | 4 in. | ? |
| Shaft speed $N$ | 450 rpm | ? |

Find the dimensions, the speed and shaft horsepower for (i) equal blend time and (ii) equal mass transfer, using $N_2 = N_1(1/R)^n$ and the pitched-blade turbine relation $D = 394(P_{hp}/S_gN^3)^{1/5}$ in. Choose the motor (85% drive efficiency).`,
        solution: String.raw`**Given:** $V_1 = 6$ gal, $V_2 = 10{,}000$ gal; $N_1 = 450$ rpm; water-like liquid, $S_g = 1$.

**Assumptions:** geometric similarity; turbulent power; scale-up exponent $n$ = 0 for equal blend time, 0.667 for equal mass transfer (Ludwig Fig. 5-32 guide: 1 equal liquid motion, 0.75 equal solids suspension, 0.667 equal mass transfer, 0.5 equal surface motion, 0 equal blend time).

1. **Scale ratio:**
$$R = \left(\frac{V_2}{V_1}\right)^{1/3} = \left(\frac{10{,}000}{6}\right)^{1/3} = 11.86 \approx 12$$
All dimensions × 12: $T_2 = Z_2 = 144$ in., $D_2 = 48$ in., $W_2 = 12$ in., baffles 12 in., $C_2 = 48$ in.

2. **Shaft power relation** (rearranged Eq. 5-54): $P_{hp} = (D/394)^5S_gN^3$. Check the test unit: $(4/394)^5(450)^3 = 0.0098$ hp ✓.

3. **(i) Equal blend time** ($n = 0$): $N_2 = 450$ rpm,
$$P = \left(\frac{48}{394}\right)^5(1)(450)^3 = 2.68 \times 10^{-5}(9.11 \times 10^7) = 2445\ \text{hp}$$
impossible to use.

4. **(ii) Equal mass transfer** ($n = 0.667$, i.e. equal $P/V$):
$$N_2 = 450\left(\frac{1}{12}\right)^{0.667} = 450(0.191) = 86\ \text{rpm}$$
Ludwig reads $N_1/N_2 \approx 0.2$ from Fig. 5-32 at $V_2/V_1 = 1667$ and takes $N_2 = 90$ rpm:
$$P = \left(\frac{48}{394}\right)^5(90)^3 = 19.5\ \text{hp}\ (16.9\ \text{hp at 86 rpm})$$

5. **Motor:** $19.5/0.85 = 22.9$ hp → next standard size **25 hp** with a gearbox output of 90 rpm (a 20-hp motor leaves no margin for gearbox losses).

**Result:** 144-in. vessel, 48-in. turbine; equal blend time would need 2445 hp at 450 rpm; equal mass transfer needs about 19.5 hp at 90 rpm, motor 25 hp; Ludwig's answers ✓.

| Basis | exponent $n$ | $N_2$, rpm | shaft hp |
|---|---|---|---|
| equal liquid motion (tip speed) | 1 | 37.5 | 1.4 |
| equal solids suspension | 0.75 | 70 | 9.1 |
| equal mass transfer ($P/V$) | 0.667 | 86 (90) | 16.9 (19.5) |
| equal surface motion (Froude) | 0.5 | 130 | 59 |
| equal blend time | 0 | 450 | 2445 |`,
        answer: String.raw`R = 12: T = Z = 144 in., D = 48 in., W = baffles = 12 in., C = 48 in. Equal blend time: 450 rpm, **2445 hp** (impractical); equal mass transfer: **≈ 90 rpm, 19.5 hp shaft → 25-hp motor**.` } ] },

    { id: "practice-mixing-P13", q: 13, section: "S", compulsory: false,
      stem: String.raw`A baffled vertical tank 1.5 m in diameter is filled to a depth of 1.5 m. It has a standard six-blade disk turbine 0.5 m in diameter, 0.5 m above the floor, with blades 0.1 m wide, and four baffles 0.15 m wide (shape factors as curve A of Fig. 9.12). The drive is a 4-kW motor with 85% transmission efficiency. Use $K_L$ = 65 and $K_T$ = 5.75 (curve A plateau ≈ 5.8).`,
      parts: [
        { id: "practice-mixing-P13a", label: "(a)", marks: "12", topic: "mixing",
          sub: "Turbine power in a baffled tank, turbulent regime, and motor check (SI units)", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`New problem in the style of 2016-17 Q3d, 2020-21 Q8a, 2022-23 Q7b, 2023-24 Q7c`,
          text: String.raw`The tank holds a solution of density 1100 kg/m³ and viscosity 5 cP, and the turbine turns at 150 r/min. (i) Calculate the power drawn and the power per unit volume. Is the motor adequate? (ii) What power would be drawn if the speed were doubled?`,
          solution: String.raw`**Given:** $D_t = H = 1.5$ m; $D_a = 0.5$ m; $n = 2.5$ r/s; $\rho = 1100$ kg/m³; $\mu = 0.005$ Pa·s; shaft power available $= 0.85(4) = 3.4$ kW.

**Find:** $P$, $P/V$, adequacy; $P$ at 300 rpm.

**Assumptions:** curve A applies ($S_1 = 1/3$, $S_2 = 1/3$, $S_4 = 0.2$, $S_5 = 0.1$, $S_6 = 1$); SI units, $g_c = 1$.

1. **Shape factors:** $D_a/D_t = 0.33$, $E/D_t = 0.33$, $W/D_a = 0.2$, $J/D_t = 0.1$, $H/D_t = 1$: curve A ✓.

2. **Reynolds number:**
$$N_{Re} = \frac{nD_a^2\rho}{\mu} = \frac{2.5(0.25)(1100)}{0.005} = 1.375 \times 10^5$$
fully turbulent: $N_P$ = 5.8 (curve A, flat part; $K_T$ = 5.75 gives the same within 1%).

3. **Power:**
$$P = N_P\rho n^3D_a^5 = 5.8(1100)(2.5)^3(0.5)^5 = 5.8(1100)(15.625)(0.03125) = 3115\ \text{W} = 3.1\ \text{kW}$$

4. **Per unit volume:** $V = (\pi/4)(1.5)^2(1.5) = 2.65$ m³, so $P/V = 1.18$ kW/m³ (about 6 hp/1000 gal: intense agitation).

5. **Motor:** 3.1 kW < 3.4 kW available: adequate, with about 9% margin.

6. **(ii) Doubled speed (300 rpm):** still turbulent, $N_P$ unchanged, $P \propto n^3$:
$$P = 3.115(2)^3 = 24.9\ \text{kW}$$
far beyond the motor.

**Result:** 3.1 kW (1.18 kW/m³); the 4-kW motor is adequate; at 300 rpm the agitator would need 25 kW.`,
          answer: String.raw`N_Re = 1.38 × 10⁵ → N_P = 5.8 → **P = 3.1 kW**, **1.18 kW/m³**; motor gives 3.4 kW at the shaft → adequate. At 300 rpm **≈ 25 kW** (P ∝ n³).` },
        { id: "practice-mixing-P13b", label: "(b)", marks: "8", topic: "mixing",
          sub: "Same turbine in a 100 Pa·s liquid: laminar power and maximum speed for the motor", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`New problem; MSH Eq. 9.22 and Table 9.3 (K_L = 65), as in MSH Example 9.3`,
          text: String.raw`The same tank is used for a syrup of density 1300 kg/m³ and viscosity 100 Pa·s at 150 r/min. Find the power. If it exceeds the motor capacity, find the highest speed at which the motor can drive the agitator.`,
          solution: String.raw`**Given:** $\rho = 1300$ kg/m³, $\mu = 100$ Pa·s, $n = 2.5$ r/s, $D_a = 0.5$ m; shaft power available 3.4 kW.

1. **Reynolds number:**
$$N_{Re} = \frac{2.5(0.25)(1300)}{100} = 8.1$$
Below 10: laminar, $N_P = K_L/N_{Re} = 65/8.1 = 8.0$.

2. **Power** (Eq. 9.22):
$$P = K_Ln^2D_a^3\mu = 65(2.5)^2(0.5)^3(100) = 5078\ \text{W} = 5.1\ \text{kW}$$
More than the 3.4 kW available, although the viscous liquid is only being stirred gently.

3. **Maximum speed:** in the laminar range $P \propto n^2$:
$$n_{max} = \sqrt{\frac{3400}{65(0.5)^3(100)}} = 2.05\ \text{r/s} = 123\ \text{rpm}$$
($N_{Re} = 6.6$, still laminar ✓.)

**Result:** 5.1 kW at 150 rpm, so the motor is overloaded; run at no more than about 120 rpm. For such a liquid an anchor or helical ribbon would give far better bulk mixing per kW than a disk turbine.`,
          answer: String.raw`N_Re = 8.1 (laminar), N_P = 8.0 → **P = 5.1 kW** > 3.4 kW; P ∝ n² → **n_max ≈ 2.05 r/s (123 rpm)**.` } ] },

    { id: "practice-mixing-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P14", label: "", marks: "15", topic: "mixing",
        sub: "Scale-up 0.3 m → 2.4 m tank: equal P/V, equal tip speed and equal blend time compared", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New problem; MSH Eqs. 9.24, 9.32, 9.54 and Ludwig scale-up exponents`,
        text: String.raw`A water-like liquid (1000 kg/m³, 1 cP) is blended satisfactorily in a pilot tank 0.3 m in diameter (liquid depth 0.3 m) by a standard six-blade disk turbine 0.1 m in diameter at 400 r/min. A geometrically similar plant tank 2.4 m in diameter is planned. For scale-up at (i) equal power per unit volume, (ii) equal tip speed and (iii) equal blending time, calculate the plant impeller speed, the power, the power per unit volume and the blending time (use $K_T$ = 5.75 and $nt_T(D_a/D_t)^2(D_t/H) = 4.3$). Recommend a basis.`,
        solution: String.raw`**Given:** $R = 2.4/0.3 = 8$; pilot $D_a = 0.1$ m, $n_1 = 6.67$ r/s; plant $D_a = 0.8$ m; $H = D_t$.

**Assumptions:** turbulent in both units ($N_P = K_T = 5.75$); Eq. 9.32 for blending time.

1. **Pilot unit:** $N_{Re} = 6.67(0.1)^2(1000)/10^{-3} = 6.7 \times 10^4$ (turbulent);
$$P_1 = 5.75(1000)(6.67)^3(0.1)^5 = 17.0\ \text{W}, \qquad V_1 = 0.0212\ \mathrm{m^3}, \qquad \frac{P_1}{V_1} = 803\ \mathrm{W/m^3}$$
$$t_{T1} = \frac{4.3(3)^2}{6.67} = 5.8\ \text{s}$$

2. **Plant speeds:**
   - (i) equal $P/V$: $n_2 = n_1R^{-2/3} = 400/4 = 100$ rpm
   - (ii) equal tip speed: $n_2 = n_1/R = 50$ rpm
   - (iii) equal blending time: $n_2 = n_1 = 400$ rpm

3. **Results** ($P_2 = 5.75(1000)n_2^3(0.8)^5$, $V_2 = 10.86$ m³, $t_T = 38.7/n_2$):

| Basis | $n_2$, rpm | $P_2$, kW | $P/V$, kW/m³ | $t_T$, s |
|---|---|---|---|---|
| (i) equal $P/V$ | 100 | 8.7 | 0.80 | 23 |
| (ii) equal tip speed | 50 | 1.09 | 0.10 | 46 |
| (iii) equal blend time | 400 | 558 | 51 | 5.8 |

All plant cases are turbulent ($N_{Re}$ = 1.1 × 10⁶, 5.3 × 10⁵, 4.3 × 10⁶).

4. **Recommendation:** equal blend time needs 558 kW (64 times the pilot $P/V$): impossible. Equal tip speed (same maximum shear, good for shear-sensitive material) gives only 1/8 of the pilot $P/V$ and doubles the blending time again. For general blending and mass-transfer duty choose **equal $P/V$**: 100 rpm, about 9 kW (a 11-kW motor), blending time 23 s, which is acceptable for a batch operation of minutes or hours.`,
        answer: String.raw`Pilot: 17 W, 803 W/m³, t_T = 5.8 s. Plant: equal P/V **100 rpm, 8.7 kW, 23 s**; equal tip speed **50 rpm, 1.1 kW, 46 s**; equal blend time **400 rpm, 558 kW, 5.8 s**. Recommend equal P/V.` } ] },

    { id: "practice-mixing-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P15", label: "", marks: "15", topic: "mixing",
        sub: "Zwietering critical speed and power for complete suspension of sand: turbine vs propeller", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New problem; MSH 5th ed. Zwietering Eq. 9.36, Table 9.4 (shape factor S), Table 9.3`,
        text: String.raw`A 10 wt% slurry of sand ($D_p$ = 300 μm, $\rho_s$ = 2650 kg/m³) in water ($\nu$ = 1.0 × 10⁻⁶ m²/s) is to be kept in complete suspension in a flat-bottomed baffled tank 1.8 m in diameter filled to 1.8 m. Using Zwietering's correlation $n_cD_a^{0.85} = S\nu^{0.1}D_p^{0.2}(g\Delta\rho/\rho)^{0.45}B^{0.13}$, find the critical speed and the power for (i) a six-blade turbine, $D_t/D_a$ = 3, $D_t/E$ = 4 ($S$ = 7.5, $N_P$ = 5.75); (ii) a three-blade propeller, $D_t/D_a$ = 3, $D_t/E$ = 4 ($S$ = 6.5, $N_P$ = 0.5). Which impeller would you choose?`,
        solution: String.raw`**Given:** $D_a = 0.6$ m for both; $\Delta\rho/\rho = 1650/1000 = 1.65$; $B = 100(10/90) = 11.1$; $D_p = 3 \times 10^{-4}$ m.

**Assumptions:** the correlation is dimensionless in SI units; power at $n_c$ from $P = N_P\rho_mn_c^3D_a^5$ (turbulent); slurry density $\rho_m = 1/(0.1/2650 + 0.9/1000) = 1066$ kg/m³.

1. **Common group:**
$$\nu^{0.1}D_p^{0.2}(g\Delta\rho/\rho)^{0.45}B^{0.13} = (10^{-6})^{0.1}(3 \times 10^{-4})^{0.2}(9.81 \times 1.65)^{0.45}(11.1)^{0.13}$$
$$= 0.2512(0.1974)(3.500)(1.368) = 0.2374$$
and $D_a^{0.85} = 0.6^{0.85} = 0.6475$.

2. **(i) Six-blade turbine** ($S = 7.5$):
$$n_c = \frac{7.5(0.2374)}{0.6475} = 2.75\ \text{r/s} = 165\ \text{rpm}$$
$$P = 5.75(1066)(2.75)^3(0.6)^5 = 9.9\ \text{kW}\quad(V = 4.58\ \mathrm{m^3},\ 2.2\ \mathrm{kW/m^3})$$

3. **(ii) Propeller** ($S = 6.5$):
$$n_c = \frac{6.5(0.2374)}{0.6475} = 2.38\ \text{r/s} = 143\ \text{rpm}$$
$$P = 0.5(1066)(2.38)^3(0.6)^5 = 0.56\ \text{kW}$$

4. **Check regime:** $N_{Re} = n_cD_a^2/\nu \approx 10^6$: turbulent ✓.

5. **Choice:** the propeller suspends the sand at a slightly lower speed and with about **1/18** of the power, in line with MSH's remark that the turbine takes 15–20 times the propeller power for complete suspension. Its axial downward jet sweeps the tank bottom, where suspension is decided. Use a propeller or pitched-blade turbine unless gas dispersion or high shear is also needed. (A larger turbine, $D_t/D_a = 2$, $S = 4.1$, would need only 64 rpm and 4.4 kW, but still eight times the propeller power.)`,
        answer: String.raw`Group = 0.237; turbine **n_c = 2.75 r/s (165 rpm), P ≈ 9.9 kW**; propeller **n_c = 2.38 r/s (143 rpm), P ≈ 0.56 kW** → choose the propeller (≈ 1/18 of the power).` } ] },

    { id: "practice-mixing-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P16", label: "", marks: "12", topic: "mixing",
        sub: "Derivation: blending-time correlation and scale-up rules for geometrically similar agitators", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`MSH 5th ed. Eqs. 9.30–9.32, 9.54; Ludwig ch. 5 scale-up exponent (Eqs. 5-47 to 5-53)`,
        text: String.raw`(a) A standard turbine discharges $q = 0.92nD_a^3(D_t/D_a)$, and blending is essentially complete after the tank contents have circulated about five times. Derive $nt_T(D_a/D_t)^2(D_t/H) = $ constant and evaluate the constant. (b) For geometrically similar vessels in turbulent flow with scale ratio $R = D_{a2}/D_{a1}$, derive the speed ratio $n_2/n_1$ for constant (i) power per unit volume, (ii) tip speed, (iii) Reynolds number, (iv) Froude number and (v) blending time, and relate them to Ludwig's exponent $n$ in $N_2 = N_1(1/R)^n$.`,
        solution: String.raw`**(a) Blending time**

1. Tank volume $V = (\pi/4)D_t^2H$; time for five circulations:
$$t_T \approx \frac{5V}{q} = \frac{5(\pi/4)D_t^2H}{0.92nD_a^3(D_t/D_a)} = \frac{5\pi}{4(0.92)}\,\frac{D_tH}{nD_a^2}$$

2. Rearranging:
$$nt_T\left(\frac{D_a}{D_t}\right)^2\left(\frac{D_t}{H}\right) = \frac{5\pi}{4(0.92)} = 4.27 \approx 4.3$$

3. For $D_a/D_t = 1/3$ and $H = D_t$: $nt_T = 4.3(9) = 39$, compared with 36 measured (Fig. 9.15) for $N_{Re} > 10^3$. So in turbulent flow $nt_T$ is constant: the blending time is a fixed number of impeller revolutions.

**(b) Scale-up rules** ($D_a$, $D_t$, $H$ all scale with $R$; $N_P$ constant)

| Criterion | quantity held constant | $n_2/n_1$ | Ludwig $n$ | $(P/V)_2/(P/V)_1$ |
|---|---|---|---|---|
| (i) power per volume | $P/V \propto n^3D_a^2$ | $R^{-2/3}$ | 0.667 (equal mass transfer) | 1 |
| (ii) tip speed (equal liquid motion, torque per volume) | $\pi nD_a$ | $R^{-1}$ | 1 | $R^{-1}$ |
| (iii) Reynolds number | $nD_a^2\rho/\mu$ | $R^{-2}$ | 2 | $R^{-4}$ |
| (iv) Froude number (equal surface motion, vortex) | $n^2D_a/g$ | $R^{-1/2}$ | 0.5 | $R^{1/2}$ |
| (v) blending time | $n$ (since $nt_T$ constant) | 1 | 0 | $R^2$ |

Derivations: (i) $n_2^3D_{a2}^2 = n_1^3D_{a1}^2 \Rightarrow n_2/n_1 = R^{-2/3}$; (ii) $n_2D_{a2} = n_1D_{a1}$; (iii) $n_2D_{a2}^2 = n_1D_{a1}^2$; (iv) $n_2^2D_{a2} = n_1^2D_{a1}$; (v) $t_T \propto 1/n$. The $P/V$ column follows from $P/V \propto n^3D_a^2$. Ludwig adds $n = 0.75$ for equal solids suspension (between (i) and (ii)).

**Conclusions:** constant blending time and constant $N_{Re}$ are extreme and impractical (power per volume up by $R^2$, or down by $R^4$); practical scale-up of low-viscosity systems lies between equal tip speed and equal $P/V$ ($n$ = 0.67–1.0, Ludwig's usual range), and blending times become longer in the large vessel.`,
        answer: String.raw`(a) t_T = 5V/q → nt_T(D_a/D_t)²(D_t/H) = 5π/(4 × 0.92) = **4.3**. (b) n₂/n₁ = R^(−2/3) (P/V), R^(−1) (tip speed), R^(−2) (N_Re), R^(−1/2) (N_Fr), 1 (t_T) ↔ Ludwig n = 0.667, 1, 2, 0.5, 0.` } ] },

    { id: "practice-mixing-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-mixing-P17", label: "", marks: "10", topic: "mixing",
        sub: "Sketch: flow patterns, vortexing, baffles, off-centre mounting and draft tubes", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Mixing & Agitation 2026 slides, "Flow pattern", "Off-center impeller mounting", "Draft tubes", "Baffles"; MSH Figs. 9.3–9.6`,
        text: String.raw`With sketches, compare the flow patterns produced by (a) a turbine in an unbaffled tank, (b) a flat-blade turbine in a baffled tank and (c) a propeller in a baffled tank. Explain how vortex formation can be prevented and the purpose of a draft tube.`,
        solution: String.raw`![Three tanks: unbaffled tank with swirl and a central vortex; baffled tank with a radial-flow turbine giving two circulation loops; baffled tank with an axial-flow propeller giving flow down the axis and up the walls](fig/practice-mixing-P17-sketch.svg)

**(a) Unbaffled, centrally mounted impeller (any type):** the whole liquid rotates with the impeller (swirling, tangential flow). There is little relative velocity between impeller and liquid, little top-to-bottom circulation, and a vortex forms; at high speed it reaches the impeller and draws in air. Suspended solids are thrown to the wall and settle in the centre. Power is low but mixing is poor.

**(b) Baffled, flat-blade turbine (radial flow):** the blades throw liquid radially outward to the wall; the jet splits into two streams, one going up and one going down the wall, which return to the impeller along the axis. Two circulation loops, one above and one below the impeller, with high shear near the blade tips: good for gas dispersion and liquid–liquid dispersion.

**(c) Baffled, propeller or pitched-blade turbine (axial flow):** liquid is driven down along the axis, strikes the floor, spreads out and rises along the walls, returning to the impeller from above. One large loop, strong flow across the bottom: good for blending and solids suspension at low power.

**Preventing vortex and swirl**
- **Wall baffles:** usually four vertical strips about $D_t/12$ wide (MSH: $J/D_t = 0.1$), often set slightly off the wall to avoid dead zones; they convert rotation into vertical circulation.
- **Off-centre (and angled) mounting** of a propeller or top-entering shaft, used in small tanks without baffles (slides).
- **Side-entering** impellers in large tanks.
- Not needed when $N_{Re}$ is below about 300 (laminar region: no vortex) or for very viscous liquids.

**Draft tube:** a cylindrical sleeve slightly larger than the impeller, placed around it. It confines the suction and discharge so that the flow is strictly axial: liquid is drawn down through the tube and returns up the annulus. Used when a definite, controlled circulation is required, for example to keep crystals or solids moving through a reaction or crystallization zone (as in the DTB crystallizer) or to pull floating solids down from the surface.`,
        answer: String.raw`Unbaffled: swirl + vortex, poor mixing. Baffled turbine: radial jet to wall, two loops, high shear. Baffled propeller: axial flow down the centre, up the walls, one loop. Prevent vortex with 4 baffles (~D_t/12), off-centre/angled or side-entering mounting; draft tube gives strictly axial, directed circulation.` } ] }
  ]
});
