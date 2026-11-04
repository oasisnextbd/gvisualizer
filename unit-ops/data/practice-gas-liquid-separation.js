QB.paper({ year: "Practice", set: "Gas–liquid separators & gravity settlers", date: "", marks: 0, practice: true,
  rules: String.raw`Gravity settling and gas–liquid separation: the slide problems (settling basin and its "do yourself", the 2 Mm³/day horizontal separator, the steam–water separator, the Stokes and design-flow derivations), MSH and Ludwig settling examples (terminal velocity, hindered settling, centrifuge capacity), and exam-style knock-out drum, wire-mesh and mist-eliminator questions.`,
  questions: [
    { id: "practice-gas-liquid-separation-P1", q: 1, section: "S", compulsory: false,
      stem: String.raw`A water treatment plant has a flow rate of 0.6 m³/s. The settling basin has an effective settling volume 20 m long, 3 m tall and 6 m wide.`,
      parts: [
        { id: "practice-gas-liquid-separation-P1a", label: "(a)", marks: "", topic: "gas-liquid-separation",
          sub: "Settling basin 0.6 m³/s, 20 × 6 × 3 m: removal of 0.004 m/s particles", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Mech. sep. Lecture 1, "Settling Tank", "Workout Example" and "Answer" slides`,
          text: String.raw`(i) Will particles that have a settling velocity of 0.004 m/s be completely removed? (ii) If not, what percent of the particles will be removed?`,
          solution: String.raw`**Given:** Q = 0.6 m³/s; L = 20 m, W = 6 m, H = 3 m; $v_p$ = 0.004 m/s.

**Find:** whether $v_p \ge V_c$; the fraction removed.

**Assumptions:** ideal settling basin: uniform horizontal flow, particles enter uniformly over the depth, a particle that reaches the floor stays there, no scour.

1. **Critical (overflow) velocity:** the slowest particle that is 100% removed must fall the full depth H during the detention time $t_d = V/Q$:
$$V_c = \frac{H}{t_d} = \frac{H}{HLW/Q} = \frac{Q}{A}$$
$$t_d = \frac{20 \times 6 \times 3}{0.6} = 600\ \mathrm{s} = 10\ \mathrm{min}, \qquad V_c = \frac{0.6}{20 \times 6} = 0.005\ \mathrm{m/s}$$

2. **(i)** $v_p = 0.004$ m/s $< V_c = 0.005$ m/s, so these particles are **not completely removed**: one entering at the top falls only $0.004 \times 600 = 2.4$ m before it leaves.

3. **(ii)** A particle is caught only if it enters within $v_p t_d$ of the floor. With a uniform entry over the depth the fraction removed is
$$\frac{v_p t_d}{H} = \frac{v_p}{V_c} = \frac{0.004}{0.005} = 0.80 = 80\%$$

![Ideal settling basin: the critical particle falls the full 3 m in 600 s; a 0.004 m/s particle is caught only if it enters in the lowest 2.4 m](fig/practice-gas-liquid-separation-P1-sol.svg)

**Result:** $V_c$ = 0.005 m/s > 0.004 m/s, so removal is incomplete: 80%.

> Slide note: the slide writes the flow as "0.6 m/sec"; it is a volumetric flow, 0.6 m³/s.`,
          answer: String.raw`V_c = Q/A = 0.6/120 = 0.005 m/s (t_d = 10 min) > 0.004 m/s → not completely removed; removal = v_p/V_c = 80%.` },
        { id: "practice-gas-liquid-separation-P1b", label: "(b)", marks: "", topic: "gas-liquid-separation",
          sub: "Do yourself: basin size for 100% removal of 0.004 m/s particles", type: "numerical", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Mech. sep. Lecture 1, "DO YOURSELF" box on the Answer slide`,
          text: String.raw`How big would the basin need to be to remove 100% of the particles that have a settling velocity of 0.004 m/s?`,
          solution: String.raw`**Given:** Q = 0.6 m³/s; required $V_c \le v_p = 0.004$ m/s.

**Find:** basin plan area and dimensions.

**Assumptions:** ideal basin as in (a); depth kept at 3 m.

1. **Required surface (plan) area:** $V_c = Q/A \le v_p$, so
$$A \ge \frac{Q}{v_p} = \frac{0.6}{0.004} = 150\ \mathrm{m^2}$$

2. **Dimensions:**
   - keeping the width at 6 m: $L = 150/6 = 25$ m (25 m × 6 m × 3 m; $t_d$ = 450/0.6 = 750 s = 12.5 min);
   - or keeping the same 20 : 6 proportions: $W = \sqrt{150 \times 6/20} = 6.7$ m, $L = 22.4$ m.

3. **Depth does not matter:** a deeper basin gives more time but the particle also has further to fall; they cancel ($V_c = Q/A$). Depth is set by sludge storage, scour (horizontal velocity) and short-circuiting, not by the settling criterion.

**Result:** plan area 150 m², e.g. 25 m long × 6 m wide (3 m deep), i.e. 25% more area than now.`,
          answer: String.raw`A = Q/v_p = 0.6/0.004 = 150 m² → e.g. 25 m × 6 m (depth unchanged, 3 m; t_d = 12.5 min).` } ] },

    { id: "practice-gas-liquid-separation-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P2", label: "", marks: "", topic: "gas-liquid-separation",
        sub: "Horizontal gravity separator, 2 Mm³/day gas, 150 µm droplets (slide problem)", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Mech. sep. Lecture 2_2, "Problem" and "Horizontal Gravity Settler – Worked Solution" slides (IPS design method)`,
        text: String.raw`A horizontal gravity separator (without mist extractor) is required to handle 2 Mm³/day of 0.75 relative density gas (MW = 21.72) at a pressure of 3500 kPa(ga) and a temperature of 40°C. Compressibility is 0.9, viscosity is 0.012 mPa·s, and liquid relative density is 0.50. It is desired to remove all entrainment greater than 150 µm in diameter. No liquid surge is required. Calculate the required area.

$$V_t = \sqrt{\frac{4gD_p(\rho_l - \rho_g)}{3\rho_g C_D}}, \qquad C_D(\mathrm{Re})^2 = \frac{1.31\times10^{7}\,\rho_g D_p^3(\rho_l - \rho_g)}{\mu^2}$$
(with $D_p$ in m, μ in mPa·s; chart of $C_D$ against $C_D(\mathrm{Re})^2$ on the slide).`,
        solution: String.raw`**Given:** $Q_{std}$ = 2×10⁶ m³/day (101.325 kPa, 15°C); M = 21.72; P = 3500 kPa(g) = 3601.3 kPa; T = 313.15 K; Z = 0.9; μ = 0.012 mPa·s; $\rho_l$ = 500 kg/m³; $D_p$ = 150 µm.

**Find:** gas-flow area A (and the vessel size).

**Assumptions:** vessel half full of liquid (no surge, gas in the upper half); 20% design margin on Q (slides: 15–25%).

1. **Gas density:**
$$\rho_g = \frac{PM}{ZRT} = \frac{3601.3 \times 21.72}{0.9 \times 8.314 \times 313.15} = 33.4\ \mathrm{kg/m^3}$$

2. **Drag parameter:**
$$C_D\mathrm{Re}^2 = \frac{1.31\times10^7 (33.38)(150\times10^{-6})^3(500 - 33.38)}{0.012^2} = 4.78\times10^3$$

3. **Drag coefficient:** on the slide chart go up from $C_D\mathrm{Re}^2 = 4.8\times10^3$ to the curve and across: $C_D \approx 1.4$. (Check with the standard drag curve: $Re = 58$, $C_D = 1.43$.)

4. **Terminal velocity:**
$$V_t = \sqrt{\frac{4(9.81)(150\times10^{-6})(466.6)}{3(33.38)(1.4)}} = 0.140\ \mathrm{m/s}$$

5. **Actual and design gas flow:**
$$Q_{op} = Q_{std}\frac{P_{std}}{P}\frac{T}{T_{std}}Z = \frac{2\times10^6}{86{,}400}\cdot\frac{101.325}{3601.3}\cdot\frac{313.15}{288.15}(0.9) = 0.637\ \mathrm{m^3/s}$$
$$Q_{max} = 1.2Q_{op} = 0.764\ \mathrm{m^3/s}$$

6. **Gas-capacity criterion (slides):** the density-corrected flow $Q = Q_{max}\sqrt{\rho_g/(\rho_l - \rho_g)}$ must satisfy $Q/A \le 0.1$ m/s:
$$Q = 0.764\sqrt{\frac{33.38}{466.6}} = 0.764 \times 0.2675 = 0.204\ \mathrm{m^3/s}, \qquad A \ge \frac{0.204}{0.1} = 2.04\ \mathrm{m^2}$$
   Half full, $A = \pi D_v^2/8$: $D_v = \sqrt{8(2.04)/\pi} = 2.28$ m → **take $D_v$ = 2.3 m** (A = 2.08 m², Q/A = 0.098 m/s).

7. **Settling (length) check:** a 150 µm drop entering at the top must fall $D_v/2$ while the gas crosses the effective length:
$$D_vL_{eff} \ge \frac{4Q_{max}}{\pi V_t} = \frac{4(0.764)}{\pi(0.140)} = 6.95\ \mathrm{m^2} \Rightarrow L_{eff} \ge 3.0\ \mathrm{m}$$
   With the suggested $L_v/D_v = 3$: $L_v$ = 6.9 m (> 3.0 m). Gas velocity 0.764/2.08 = 0.37 m/s, gas residence 19 s against a settling time 1.15/0.140 = 8.2 s.

**Result:** required gas area ≈ **2.0 m²**; vessel ≈ 2.3 m ID × 6.9 m (L/D = 3), half full.

> Slide check: the worked-solution slide takes $A = Q_{max}/0.1 = 7.64$ m², $D_v = 4.4$ m, $L_v = 13.2$ m. It divides the actual gas flow by 0.1 m/s without the factor $\sqrt{\rho_g/(\rho_l - \rho_g)} = 0.27$ that the slide's own "Design Flow Rate — Derivation" puts into Q. With the factor the area is 2.04 m²; without it the vessel is about 3.7 times larger in area (very conservative: the gas would move at only 0.10 m/s against a drop terminal velocity of 0.14 m/s). Both agree that the settling criterion is not limiting. The slide values of $\rho_g$ = 33.4 kg/m³, $C_D\mathrm{Re}^2$ = 4.8×10³, $C_D$ ≈ 1.4, $V_t$ = 0.14 m/s, $Q_{op}$ = 0.637 and $Q_{max}$ = 0.764 m³/s are confirmed.`,
        answer: String.raw`ρ_g = 33.4 kg/m³; C_D Re² = 4.8×10³ → C_D ≈ 1.4, V_t = 0.14 m/s; Q_op = 0.637, Q_max = 0.764 m³/s; Q√(ρg/(ρl−ρg)) = 0.204 m³/s → A ≥ 2.04 m², D ≈ 2.3 m, L = 3D ≈ 6.9 m (settling needs only L ≥ 3 m). Slide (no density factor): A = 7.64 m², D = 4.4 m, L = 13.2 m.` } ] },

    { id: "practice-gas-liquid-separation-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P3", label: "", marks: "", topic: "gas-liquid-separation",
        sub: "Vertical steam–water separator: diameter, liquid hold-up and depth", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Mech. sep. Lecture 2_2, steam–water separator "Problem" and "Solution" outline slides (same duty as Coulson & Richardson Vol. 6 / Sinnott Example 10.4)`,
        text: String.raw`Make a preliminary design of a separator to separate a mixture of steam and water: water 1000 kg/h, steam 2000 kg/h, operating pressure 4 bar. From steam tables: density of steam 2.16 kg/m³, water density 926.4 kg/m³. Use $u_v = 0.035\sqrt{\rho_l/\rho_v}$ (m/s). Follow the slide steps: velocity, vapour volumetric flow, vessel area, vessel diameter, liquid volumetric flow, volume for hold-up time, liquid depth.`,
        solution: String.raw`**Given:** $\dot m_v$ = 2000 kg/h, $\dot m_l$ = 1000 kg/h, $\rho_v$ = 2.16 kg/m³, $\rho_l$ = 926.4 kg/m³.

**Find:** $D_v$, liquid depth, overall height estimate.

**Assumptions:** vertical vessel without demister; liquid hold-up time 10 min (not given on the slide; the usual minimum, Sinnott).

1. **Allowable vapour velocity:**
$$u_v = 0.035\sqrt{\frac{926.4}{2.16}} = 0.035 \times 20.71 = 0.725\ \mathrm{m/s}$$

2. **Vapour volumetric flow:** $Q_v = \dfrac{2000}{3600 \times 2.16} = 0.257\ \mathrm{m^3/s}$

3. **Vessel area:** $A = Q_v/u_v = 0.257/0.725 = 0.355\ \mathrm{m^2}$

4. **Diameter:** $D = \sqrt{4A/\pi} = 0.672$ m → **round up to 0.70 m** (A = 0.385 m², actual $u_v$ = 0.67 m/s).

5. **Liquid volumetric flow:** $Q_l = \dfrac{1000}{3600 \times 926.4} = 3.0\times10^{-4}\ \mathrm{m^3/s}$

6. **Hold-up volume (10 min):** $V_h = 3.0\times10^{-4} \times 600 = 0.180\ \mathrm{m^3}$

7. **Liquid depth:** $h_l = V_h/A = 0.180/0.385 = 0.47$ m

8. **Height (guide):** liquid level to inlet ≥ D/2, minimum 0.6 m; inlet to top outlet ≥ D, minimum 1.0 m. Height ≈ 0.47 + 0.6 + 1.0 ≈ 2.1 m (plus heads and the inlet nozzle).

**Result:** vertical vessel ≈ 0.70 m diameter, liquid depth ≈ 0.47 m for 10 min hold-up, about 2.1 m tall.

> Comparison: Sinnott's correlation $u_t = 0.07\sqrt{(\rho_l - \rho_v)/\rho_v}$ = 1.45 m/s is for a vessel with a demister pad (D = 0.48 m); without a demister it is multiplied by 0.15 (0.22 m/s, D = 1.23 m). The slide coefficient 0.035 lies between these, i.e. half the demister value.`,
        answer: String.raw`u_v = 0.725 m/s; Q_v = 0.257 m³/s; A = 0.355 m² → D = 0.672 → 0.70 m; Q_l = 3.0×10⁻⁴ m³/s; 10 min hold-up 0.18 m³ → liquid depth 0.47 m; height ≈ 2.1 m.` } ] },

    { id: "practice-gas-liquid-separation-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-gas-liquid-separation-P4a", label: "(a)", marks: "", topic: "gas-liquid-separation",
          sub: "Derivation of Stokes' law for a settling sphere and its validity", type: "derivation", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Mech. sep. Lecture 2_2, "Stokes's law" slide`,
          text: String.raw`Derive Stokes' law for the terminal settling velocity of a small sphere of radius r and density ρ₁ in a fluid of density ρ₂ and viscosity η. State the conditions under which it applies.`,
          solution: String.raw`1. **Forces on the sphere** moving down at velocity v relative to the fluid:
   - gravity: $F_g = \tfrac{4}{3}\pi r^3\rho_1 g$ (down);
   - buoyancy: $F_b = \tfrac{4}{3}\pi r^3\rho_2 g$ (up);
   - drag in creeping flow (Stokes' solution of the Navier–Stokes equations): $F_d = 6\pi r\eta v$ (up).

2. **Terminal velocity:** the particle accelerates for a fraction of a second until the net force is zero:
$$\tfrac{4}{3}\pi r^3(\rho_1 - \rho_2)g = 6\pi r\eta v_t$$
$$\boxed{v_t = \frac{2}{9}\frac{(\rho_1 - \rho_2)gr^2}{\eta} = \frac{gD_p^2(\rho_1 - \rho_2)}{18\eta}}$$

3. **Drag-coefficient form:** with $F_d = C_D\tfrac{\pi D_p^2}{4}\tfrac{\rho_2 v^2}{2}$, Stokes' drag is $C_D = 24/Re_p$.

4. **Validity:**
   - $Re_p = \rho_2 v_t D_p/\eta < 1$ (about 2 at most); in gases this means droplets up to roughly 50–100 µm, in water solids up to about 60–80 µm;
   - rigid, smooth spheres far from walls and from other particles (dilute, no hindered settling);
   - particles large compared with the gas mean free path: below about 3 µm in gases a Cunningham correction is needed, below 0.1 µm Brownian motion dominates;
   - terminal velocity reached (acceleration period negligible).
   Above $Re_p \approx 1$ use the intermediate law ($C_D = 18.5Re^{-0.6}$) and above about 1000 Newton's law ($C_D \approx 0.44$).

**Result:** $v_t = 2(\rho_1 - \rho_2)gr^2/(9\eta)$, valid for $Re_p < 1$, rigid spheres, dilute suspensions, $D_p$ above a few µm in gases.`,
          answer: String.raw`(4/3)πr³(ρ₁−ρ₂)g = 6πrηv → v_t = 2(ρ₁−ρ₂)gr²/(9η) = gD²Δρ/(18η); C_D = 24/Re; valid for Re < 1, dilute rigid spheres, d > ~3 µm in gas (else Cunningham/Brownian).` },
        { id: "practice-gas-liquid-separation-P4b", label: "(b)", marks: "", topic: "gas-liquid-separation",
          sub: "Derivation of the design flow rate Q = Q_g√(ρg/(ρl−ρg)) = KA", type: "derivation", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Mech. sep. Lecture 2_2, "Design Flow Rate — Derivation" and "Vertical Gravity Settler" slides`,
          text: String.raw`For a vertical knock-out drum without mist extractor, start from the force balance on a droplet and derive the density-corrected design flow $Q = Q_g[\rho_g/(\rho_l - \rho_g)]^{1/2} = KA$. Explain its physical meaning and why the vessel is sized for the operating case with the highest Q.`,
          solution: String.raw`1. **Force balance at terminal velocity** (gravity = buoyancy + drag):
$$(\rho_l - \rho_g)\frac{\pi}{6}d^3g = C_D\frac{1}{2}\rho_g v_t^2\frac{\pi}{4}d^2$$

2. **Terminal velocity:**
$$v_t = \sqrt{\frac{4gd}{3C_D}\cdot\frac{\rho_l - \rho_g}{\rho_g}} = K\sqrt{\frac{\rho_l - \rho_g}{\rho_g}}, \qquad K = \sqrt{\frac{4gd}{3C_D}}$$
   K (m/s) groups the droplet size and drag terms: the Souders–Brown coefficient.

3. **Maximum gas capacity:** the upward gas velocity in the settling area A must not exceed $v_t$ of the smallest drop to be removed:
$$Q_g \le v_tA = KA\sqrt{\frac{\rho_l - \rho_g}{\rho_g}}$$

4. **Isolate the vessel term:**
$$Q \equiv Q_g\left(\frac{\rho_g}{\rho_l - \rho_g}\right)^{1/2} = KA$$
   The design rule $Q_{max}/(\pi D_v^2/4) \le 0.07$ m/s for vertical drums (0.1 m/s for horizontal drums, gas area above the liquid) is simply a chosen value of K for 150–2000 µm drops without a mist extractor.

5. **Physical meaning:** Q depends only on the vessel geometry (A) and the separation duty (K, i.e. drop size). The actual gas flow and its density enter only through this combination, so every operating case (start-up, turndown, winter/summer, different pressures) can be converted to one Q and compared directly.

6. **Severest case:** the case with the largest Q needs the largest area; sizing for it guarantees $v_g \le v_t$ in all others. A margin of 15–25% (50% in gas production) is added: $Q_{max} = Q + (0.15$–$0.25)Q$.

**Result:** $Q = Q_g\sqrt{\rho_g/(\rho_l - \rho_g)} = KA$, K = √(4gd/3C_D); size for the largest Q plus margin.`,
          answer: String.raw`(ρl−ρg)(π/6)d³g = C_D(½ρg v²)(π/4)d² → v_t = K√((ρl−ρg)/ρg), K = √(4gd/3C_D); Q_g ≤ v_tA → Q_g√(ρg/(ρl−ρg)) = KA. Q depends only on geometry and duty; size for the highest Q (plus 15–25% margin).` } ] },

    { id: "practice-gas-liquid-separation-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P5", label: "", marks: "", topic: "gas-liquid-separation",
        sub: "Limestone 80–100 mesh in water: terminal velocity at g and at 50g", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Example 7.1 (p. 161)`,
        text: String.raw`(a) Estimate the terminal velocity for 80-to-100-mesh particles of limestone ($\rho_p$ = 2800 kg/m³) falling in water at 30°C. (b) How much higher would the velocity be in a centrifugal separator where the acceleration is 50g?`,
        solution: String.raw`**Given:** 100 mesh = 0.147 mm, 80 mesh = 0.175 mm (MSH App. 20), so $D_p$ = 0.161 mm; water at 30°C: μ = 0.801 cP, ρ = 995.7 kg/m³ (MSH App. 14).

**Find:** $u_t$ at g and at 50g.

**Assumptions:** spheres; free settling.

1. **Settling-law criterion** (MSH Eq. 7.45):
$$K = D_p\left[\frac{g\rho(\rho_p - \rho)}{\mu^2}\right]^{1/3} = 0.161\times10^{-3}\left[\frac{9.807(995.7)(1804.3)}{(0.801\times10^{-3})^2}\right]^{1/3} = 4.86$$
   K is just above 2.6 (Stokes limit) and below 68.9 (Newton limit): intermediate range, so $C_D$ must be found by trial from the drag curve (MSH Fig. 7.6). Stokes' law would give 0.0318 m/s, too high.

2. **Trial:** assume $Re_p$ = 4.4, from Fig. 7.6 $C_D$ = 7.9 (curve reading):
$$u_t = \left[\frac{4g(\rho_p - \rho)D_p}{3C_D\rho}\right]^{1/2} = \left[\frac{4(9.807)(1804.3)(0.161\times10^{-3})}{3(7.9)(995.7)}\right]^{1/2} = 0.0220\ \mathrm{m/s}$$
   Check: $Re_p = 0.161\times10^{-3}(0.0220)(995.7)/0.801\times10^{-3} = 4.40$, as assumed.

3. **(b) At 50g:** only the acceleration changes, so $K = 4.86 \times 50^{1/3} = 17.9$, still intermediate. Assume $Re_p$ = 80, $C_D$ = 1.2 (Fig. 7.6):
$$u_t = \left[\frac{4(50)(9.807)(1804.3)(0.161\times10^{-3})}{3(1.2)(995.7)}\right]^{1/2} = 0.40\ \mathrm{m/s}$$
   Check: $Re_p$ = 79.8 ✓. The velocity is 0.40/0.022 = **18 times** higher, not 50 times: in the intermediate range $u_t \propto a^{0.71}$ ($50^{0.71}$ ≈ 16), and only in the Stokes range would it scale with a.

**Result:** (a) $u_t$ = 0.022 m/s; (b) 0.40 m/s, about 18 times higher.

> Book check: MSH gives 0.0220 and 0.40 m/s. With the Schiller–Naumann drag fit the answers are 0.0224 and 0.395 m/s.`,
        answer: String.raw`(a) K = 4.86 (intermediate), C_D = 7.9 at Re = 4.4 → u_t = 0.0220 m/s; (b) K = 17.9, C_D = 1.2 at Re = 80 → u_t = 0.40 m/s, ≈ 18 times higher (MSH: same).` } ] },

    { id: "practice-gas-liquid-separation-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P6", label: "", marks: "", topic: "gas-liquid-separation",
        sub: "Hindered settling of sphalerite in CCl₄ at 20% solids", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Example 7.2 (p. 163)`,
        text: String.raw`Particles of sphalerite (specific gravity 4.00) are settling under the force of gravity in carbon tetrachloride (CCl₄) at 20°C (specific gravity 1.594). The diameter of the sphalerite particles is 0.004 in. (0.10 mm). The volume fraction of sphalerite in CCl₄ is 0.20. What is the settling velocity of the sphalerite?`,
        solution: String.raw`**Given:** $\Delta\rho = 62.37(4.00 - 1.594) = 150.06$ lb/ft³; $\rho = 62.37 \times 1.594 = 99.42$ lb/ft³; μ = 1.03 cP = 1.03 × 6.72×10⁻⁴ lb/ft·s; $D_p$ = 0.004/12 ft; volume fraction of solids 0.20, so $\varepsilon = 0.80$.

**Find:** hindered settling velocity $u_s$.

**Assumptions:** uniform spheres; Richardson–Zaki form $u_s = u_t\varepsilon^n$ (MSH Eq. 7.46).

1. **Criterion K:**
$$K = \frac{0.004}{12}\left[\frac{32.174(99.42)(150.06)}{(1.03\times6.72\times10^{-4})^2}\right]^{1/3} = 3.34$$
   Close to the Stokes limit (2.6); use Stokes' law.

2. **Free-settling velocity:**
$$u_t = \frac{g_cD_p^2\Delta\rho}{18\mu} = \frac{32.174(0.004/12)^2(150.06)}{18(1.03)(6.72\times10^{-4})} = 0.043\ \mathrm{ft/s}$$

3. **Particle Reynolds number:**
$$Re_p = \frac{(0.004/12)(0.043)(99.42)}{1.03 \times 6.72\times10^{-4}} = 2.06$$

4. **Exponent:** from MSH Fig. 7.7 at $Re_p$ = 2.06, n = 4.1 (curve reading; the correlation $n = 4.45Re_p^{-0.1}$ gives 4.14).

5. **Hindered velocity:**
$$u_s = u_t\varepsilon^n = 0.043(0.80)^{4.1} = 0.017\ \mathrm{ft/s} = 5.2\ \mathrm{mm/s}$$

**Result:** free settling 0.043 ft/s; hindered settling at 20% solids 0.017 ft/s (5.2 mm/s), about 40% of the free value.

> Book check: MSH obtains $u_t$ = 0.043 ft/s, n = 4.1 and $u_s$ = 0.017 ft/s (5.2 mm/s).`,
        answer: String.raw`K = 3.34 (≈ Stokes); u_t = 0.043 ft/s, Re = 2.06, n = 4.1; u_s = 0.043(0.8)^{4.1} = 0.017 ft/s = 5.2 mm/s (MSH: same).` } ] },

    { id: "practice-gas-liquid-separation-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P7", label: "", marks: "", topic: "gas-liquid-separation",
        sub: "Hindered settling velocity, intermediate law (Carpenter, Ludwig Ex. 4-2)", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Ludwig Vol. 1, 3rd ed., Example 4-2 "Hindered Settling Velocities" (Carpenter's method, Eqs. 4-10 to 4-13)`,
        text: String.raw`Using the method of Carpenter: fluid density $\rho_f$ = 0.08 lb/ft³, viscosity μ = 0.02 cP, particle density $\rho_p$ = 500 lb/ft³, particle diameter $D'_p$ = 0.01 in., volume fraction solids c = 0.1. Find the settling regime, the free (unhindered) terminal velocity and the hindered settling velocity.

Data (Ludwig): $K = 34.81D'_p[\rho_f(\rho_p - \rho_f)/\mu^2]^{1/3}$ ($D'_p$ in in., μ in cP); Stokes K < 3.3 ($b_1$ = 24, n = 1); intermediate 3.3 ≤ K ≤ 43.6 ($b_1$ = 18.5, n = 0.6); Newton K > 43.6 ($b_1$ = 0.44, n = 0); $V_t = [4gD_p^{1+n}(\rho_p - \rho_f)/(3b_1\mu^n\rho_f^{1-n})]^{1/(2-n)}$; $V_s = V_t(1-c)^m$ with $m = 4.375Re^{-0.0875}$ for 0.5 ≤ Re ≤ 1300.`,
        solution: String.raw`**Given:** $\rho_f$ = 0.08, $\rho_p$ = 500 lb/ft³; μ = 0.02 cP = 1.344×10⁻⁵ lb/ft·s; $D_p$ = 0.01 in. = 8.333×10⁻⁴ ft; c = 0.1.

**Find:** regime, $V_t$, $V_s$.

**Assumptions:** spheres; consistent ft–lb–s units in $V_t$ and Re.

1. **Regime number:**
$$K = 34.81(0.01)\left[\frac{0.08(499.92)}{0.02^2}\right]^{1/3} = 0.3481(46.4) = 16.2$$
   3.3 < K < 43.6: **intermediate law**, $b_1$ = 18.5, n = 0.6.

2. **Free terminal velocity:**
$$V_t = \left[\frac{4(32.2)(8.333\times10^{-4})^{1.6}(499.92)}{3(18.5)(1.344\times10^{-5})^{0.6}(0.08)^{0.4}}\right]^{1/1.4} = 11.8\ \mathrm{ft/s}$$
   Check with Ludwig Eq. 4-4, $u_t = 0.153g^{0.71}D_p^{1.14}(\rho_p - \rho)^{0.71}/(\rho^{0.29}\mu^{0.43})$ = 11.9 ft/s ✓.

3. **Reynolds number:**
$$Re = \frac{D_pV_t\rho_f}{\mu} = \frac{8.333\times10^{-4}(11.8)(0.08)}{1.344\times10^{-5}} = 58.4$$
   (0.5 ≤ Re ≤ 1300, so the m-equation applies.)

4. **Exponent and hindered velocity:**
$$m = 4.375(58.4)^{-0.0875} = 3.06, \qquad V_s = 11.8(1 - 0.1)^{3.06} = 8.5\ \mathrm{ft/s}$$

**Result:** intermediate regime (K = 16.2); $V_t$ ≈ 11.8 ft/s (3.6 m/s); hindered $V_s$ ≈ 8.5 ft/s (2.6 m/s), 28% lower.

> Book check: Ludwig prints K = 16.28, $V_t$ = 9.77 ft/s, $N_{Re}$ = 48.46, m = 3.118 and $V_s$ = 7.03 ft/s. The K value agrees, but 9.77 ft/s cannot be reproduced from the printed equation with consistent units (both the equation and Ludwig's own Eq. 4-4 give 11.8–11.9 ft/s); the book's Re and m follow from its lower $V_t$. The method and the ratio $V_s/V_t = 0.72$ are the same either way.`,
        answer: String.raw`K = 16.2 → intermediate (b₁ = 18.5, n = 0.6); V_t ≈ 11.8 ft/s, Re = 58.4, m = 3.06, V_s = 11.8(0.9)^{3.06} ≈ 8.5 ft/s. (Ludwig prints 9.77 and 7.03 ft/s; its V_t does not follow from the equation.)` } ] },

    { id: "practice-gas-liquid-separation-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P8", label: "", marks: "", topic: "gas-liquid-separation",
        sub: "Clarifying centrifuge capacity for a 30 µm cut size", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`MSH 5th ed., Problem 30.13 (p. 1076); Eq. (30.78)`,
        text: String.raw`What is the capacity in cubic metres per hour of a clarifying centrifuge operating under the following conditions?

| Diameter of bowl | 600 mm | Specific gravity of liquid | 1.2 |
|---|---|---|---|
| Thickness of liquid layer | 75 mm | Specific gravity of solid | 1.6 |
| Depth of bowl | 400 mm | Viscosity of liquid | 2 cP |
| Speed | 1200 r/min | Cut size of particles | 30 µm |`,
        solution: String.raw`**Given:** $r_2$ = 0.300 m, $r_1$ = 0.300 − 0.075 = 0.225 m, b = 0.40 m; ω = 1200(2π/60) = 125.7 rad/s; Δρ = 1600 − 1200 = 400 kg/m³; μ = 2×10⁻³ Pa·s; $D_{pc}$ = 30 µm.

**Find:** volumetric capacity $q_c$ for which 30 µm particles are just removed (the cut size).

**Assumptions:** Stokes' law in the centrifugal field ($u_t = \omega^2r\Delta\rho D_p^2/18\mu$); liquid moves up the bowl in plug flow; the cut particle starts halfway through the liquid layer (MSH definition).

1. **Residence-time balance** (MSH Eq. 30.78):
$$q_c = \frac{\pi b\omega^2\Delta\rho D_{pc}^2}{18\mu}\cdot\frac{r_2^2 - r_1^2}{\ln[2r_2/(r_1 + r_2)]}$$

2. **Numbers:**
$$\frac{\pi(0.40)(125.7)^2(400)(30\times10^{-6})^2}{18(2\times10^{-3})} = \frac{7.144\times10^{-3}}{0.036} = 0.1984$$
$$r_2^2 - r_1^2 = 0.0900 - 0.0506 = 0.0394\ \mathrm{m^2}, \qquad \ln\frac{0.600}{0.525} = 0.1335$$
$$q_c = 0.1984 \times \frac{0.0394}{0.1335} = 0.0585\ \mathrm{m^3/s} = 211\ \mathrm{m^3/h}$$

3. **Checks:** separation factor at the wall $\omega^2r_2/g$ = 483. The thin-layer approximation (Eq. 30.82) gives 225 m³/h, 7% higher, because the layer (75 mm) is not thin compared with $r_2$. Sigma value $\Sigma = q_c/(2u_g)$ with $u_g = gD_{pc}^2\Delta\rho/18\mu = 9.8\times10^{-5}$ m/s gives Σ ≈ 300 m², i.e. this bowl does the work of a 300 m² gravity settler.

**Result:** capacity ≈ **211 m³/h** (0.0585 m³/s).`,
        answer: String.raw`ω = 125.7 rad/s; q_c = πbω²ΔρD²(r₂²−r₁²)/[18μ ln(2r₂/(r₁+r₂))] = 0.0585 m³/s ≈ 211 m³/h (Σ ≈ 300 m², separation factor 483).` } ] },

    { id: "practice-gas-liquid-separation-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P9", label: "", marks: "20", topic: "gas-liquid-separation",
        sub: "Vertical knock-out drum: diameter, degassing, hold-up, nozzles, height, ΔP", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`IPS method of Lecture 2_2 slides (vertical gravity settler, degassing, total vessel height, nozzle sizing, pressure drop); own numbers`,
        text: String.raw`A vertical knock-out drum without mist extractor is to separate 30,000 kg/h of gas ($\rho_g$ = 25 kg/m³) from 9,000 kg/h of hydrocarbon condensate ($\rho_l$ = 650 kg/m³, kinematic viscosity 0.8 cSt). Use a 20% design margin and a liquid hold-up time of 5 min. Determine:
(a) the vessel diameter from $Q_{max}/(\pi D_v^2/4) \le 0.07$ m/s with $Q = Q_g[\rho_g/(\rho_l - \rho_g)]^{1/2}$;
(b) whether the degassing criterion $Q_l/(\pi D_v^2/4) < (2.18\times10^{-2}/\gamma_l)(\rho_l - \rho_g)/\rho_l$ is met;
(c) the liquid hold-up height and the total tangent-to-tangent height $H = h + d_n + X + Y$ ($X$ = 0.3$D_v$, min 0.3 m; $Y$ = 0.9$D_v$, min 0.9 m);
(d) the nozzle diameters ($\rho_mV_m^2 \le 1500$ kg/m·s² feed, $\rho_gV_g^2 \le 3750$ kg/m·s² gas outlet, liquid outlet ≤ 1 m/s);
(e) the pressure drop $P_{in} - P_{out} = 8\times10^{-4}\rho_gV_{g,out}^2$ kPa.`,
        solution: String.raw`**Given:** $\dot m_g$ = 8.333 kg/s, $\dot m_l$ = 2.5 kg/s; $\rho_g$ = 25, $\rho_l$ = 650 kg/m³; $\gamma_l$ = 0.8 cSt; margin 20%; hold-up 5 min.

**Find:** $D_v$, degassing check, h, H, nozzles, ΔP.

**Assumptions:** margin applied to both phases for capacity and nozzles; hold-up on the normal liquid flow; standard pipe sizes.

1. **Flows:** $Q_g = 8.333/25 = 0.333$ m³/s, $Q_{g,max} = 0.400$ m³/s; $Q_l = 2.5/650 = 3.85\times10^{-3}$ m³/s, $Q_{l,max} = 4.62\times10^{-3}$ m³/s.

2. **(a) Diameter:**
$$Q = 0.400\sqrt{\frac{25}{650 - 25}} = 0.400(0.200) = 0.080\ \mathrm{m^3/s}, \qquad D_v \ge \sqrt{\frac{4(0.080)}{\pi(0.07)}} = 1.21\ \mathrm{m}$$
   **Choose $D_v$ = 1.25 m** (A = 1.227 m², Q/A = 0.065 m/s ≤ 0.07). Actual upward gas velocity 0.40/1.227 = 0.33 m/s.

3. **(b) Degassing:**
$$\text{limit} = \frac{2.18\times10^{-2}}{0.8}\cdot\frac{625}{650} = 0.0262\ \mathrm{m/s}, \qquad \frac{Q_{l,max}}{A} = \frac{4.62\times10^{-3}}{1.227} = 0.0038\ \mathrm{m/s}$$
   0.0038 ≪ 0.026 m/s: gas bubbles rise out of the liquid faster than it moves down. ✓

4. **(c) Hold-up and height:** $V_h = 3.85\times10^{-3}(300) = 1.15$ m³; $h = 1.15/1.227 = 0.94$ m.
   $X = 0.3(1.25) = 0.375$ m (> 0.3), $Y = 0.9(1.25) = 1.125$ m (> 0.9). With $d_n$ = 0.30 m (below):
$$H = 0.94 + 0.30 + 0.375 + 1.125 = 2.74\ \mathrm{m}, \qquad H/D_v = 2.2$$

5. **(d) Nozzles:**
   - Feed: $\rho_m = (8.333 + 2.5)/(0.333 + 0.00385) = 32.1$ kg/m³; $V_{m,max} = \sqrt{1500/32.1} = 6.83$ m/s; $d_n \ge \sqrt{4(0.4046)/(\pi \cdot 6.83)} = 0.275$ m → **0.30 m (12 in.)**: $V_m$ = 5.72 m/s, $\rho_mV_m^2$ = 1050 ✓.
   - Gas outlet: $V_{g,max} = \sqrt{3750/25} = 12.2$ m/s; $d \ge 0.204$ m → **0.25 m (10 in.)**: $V_g$ = 8.15 m/s, $\rho_gV_g^2$ = 1660 ✓.
   - Liquid outlet: $d \ge \sqrt{4(4.62\times10^{-3})/\pi} = 0.077$ m → **0.10 m (4 in.)**: V = 0.59 m/s ✓, with a vortex breaker.

6. **(e) Pressure drop:** $\Delta P = 8\times10^{-4}(25)(8.15)^2 = 1.33$ kPa, negligible against the operating pressure.

![Vertical knock-out drum: D = 1.25 m, liquid hold-up 0.94 m, feed nozzle 0.30 m, X = 0.375 m, Y = 1.125 m, H = 2.74 m](fig/practice-gas-liquid-separation-P9-sol.svg)

**Result:** $D_v$ = 1.25 m; degassing satisfied (0.004 ≪ 0.026 m/s); h = 0.94 m, H ≈ 2.75 m; nozzles 300 mm feed, 250 mm gas, 100 mm liquid; ΔP ≈ 1.3 kPa.

> The capacity K = 0.07 m/s corresponds to removing drops whose terminal velocity equals the gas velocity of 0.33 m/s, about 0.27 mm here, inside the 150–2000 µm design range of the slides.`,
        answer: String.raw`Q = 0.40√(25/625) = 0.080 m³/s → D ≥ 1.21 m, use 1.25 m; liquid 0.0038 < 0.026 m/s ✓; h = 0.94 m, H = 0.94 + 0.30 + 0.375 + 1.125 = 2.74 m; nozzles 0.30 m feed (ρV² = 1050), 0.25 m gas (1660), 0.10 m liquid (0.59 m/s); ΔP ≈ 1.3 kPa.` } ] },

    { id: "practice-gas-liquid-separation-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P10", label: "", marks: "12", topic: "gas-liquid-separation",
        sub: "Rating an existing 42-in. wire-mesh separator at 150 psig", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_2 wire-mesh slides (Souders–Brown, k vs pressure, velocity limitations, ΔP = 0.2V_D²ρ_v); own numbers`,
        text: String.raw`An existing vertical drum of 42 in. ID has a 2-in. wide support ring and a 4-in. standard (9 lb/ft³) stainless wire-mesh pad. It must handle 60,000 lb/h of vapour ($\rho_v$ = 0.85 lb/ft³) carrying droplets of liquid ($\rho_L$ = 40 lb/ft³) at 150 psig.
(a) Find k at this pressure and the maximum allowable velocity $V_a$.
(b) Rate the drum: what percentage of $V_a$ is the actual velocity, and what will happen?
(c) What is the largest vapour rate the pad can take at the design velocity $V_D = 0.75V_a$?
(d) Size a new drum (heads in 6-in. increments) and give the pad pressure drop at its operating velocity.`,
        solution: String.raw`**Given:** W = 60,000 lb/h; $\rho_v$ = 0.85, $\rho_L$ = 40 lb/ft³; P = 150 psig; ID 42 in., ring 2 in.

**Find:** k, $V_a$, % of $V_a$, maximum rate, new diameter, ΔP.

**Assumptions:** k = 0.35 at ≤ 30 psig falling to 0.30 at 250 psig (slides), linear between; free area at the support ring.

1. **(a) k and $V_a$:**
$$k = 0.35 - 0.05\frac{150 - 30}{250 - 30} = 0.323, \qquad V_a = 0.323\sqrt{\frac{40 - 0.85}{0.85}} = 0.323(6.79) = 2.19\ \mathrm{ft/s}$$

2. **(b) Actual velocity:** $Q_v = 60{,}000/(0.85 \times 3600) = 19.6$ ft³/s. Free diameter at the ring = 42 − 2(2) = 38 in.; $A = (\pi/4)(38/12)^2 = 7.88$ ft².
$$V = \frac{19.6}{7.88} = 2.49\ \mathrm{ft/s} = 114\%\ \text{of}\ V_a$$
   This is above $V_a$ and close to the flooding range (120–140% of $V_a$ = 2.63–3.07 ft/s): liquid held in the pad is re-entrained and carried over; any surge would flood it. Not acceptable (good range 30–100%, design 75%).

3. **(c) Maximum rate at $V_D$:** $V_D = 0.75(2.19) = 1.64$ ft/s; $Q = 1.64 \times 7.88 = 12.9$ ft³/s = 12.9(0.85)(3600) = **39,600 lb/h** (66% of the required rate).
   A high-capacity 5 lb/ft³ mesh (k = 0.40, pressure-corrected 0.37) would put the drum at 99% of its $V_a$, still no margin.

4. **(d) New drum:** $A_{req} = 19.6/1.64 = 11.9$ ft², free diameter $\sqrt{4(11.9)/\pi} = 3.90$ ft = 46.8 in.; adding the 2 × 2 in. ring, 50.8 in. → **54 in. ID** (next 6-in. head size).
   Check: free area $(\pi/4)(50/12)^2 = 13.6$ ft²; V = 19.6/13.6 = 1.44 ft/s = 66% of $V_a$ ✓ (inside 30–100%).
   Pad ΔP (4-in. standard weave): $\Delta P = 0.2V^2\rho_v = 0.2(1.44)^2(0.85) = 0.35$ in. water (well under the ~1 in. typical for 4–6 in. pads).

**Result:** k = 0.323, $V_a$ = 2.19 ft/s; existing drum runs at 2.49 ft/s = 114% of $V_a$ (carry-over, near flooding); limit at $V_D$ ≈ 39,600 lb/h; new drum 54 in. ID at 66% of $V_a$, ΔP ≈ 0.35 in. water.`,
        answer: String.raw`k = 0.323, V_a = 2.19 ft/s; V = 19.6/7.88 = 2.49 ft/s = 114% V_a → re-entrainment, near flooding; at V_D = 1.64 ft/s max ≈ 39,600 lb/h; new drum 54 in. ID (V = 1.44 ft/s, 66% V_a), ΔP = 0.2V²ρ_v ≈ 0.35 in. water.` } ] },

    { id: "practice-gas-liquid-separation-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P11", label: "", marks: "10", topic: "gas-liquid-separation",
        sub: "Settling basin for a size distribution: overall removal and critical size", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Ideal settling basin of Lecture 1 (V_c = Q/A, removal = v_p/V_c) with Stokes' law; own numbers`,
        text: String.raw`A rectangular settling basin 30 m long, 8 m wide and 3.5 m deep treats 0.25 m³/s of water at 20°C (μ = 1.002 mPa·s) carrying silt of density 2650 kg/m³ with the size distribution below. Find (a) the overflow rate and detention time, (b) the smallest particle removed completely, (c) the removal of each size and the overall removal.

| Size, µm | 10 | 20 | 30 | 40 | 60 |
|---|---|---|---|---|---|
| Mass fraction | 0.15 | 0.20 | 0.25 | 0.25 | 0.15 |`,
        solution: String.raw`**Given:** Q = 0.25 m³/s; A = 30 × 8 = 240 m²; H = 3.5 m; Δρ = 1650 kg/m³.

**Find:** $V_c$, $t_d$, critical size, overall removal.

**Assumptions:** ideal basin; discrete Stokes settling (checked below).

1. **(a)** $V_c = Q/A = 0.25/240 = 1.042\times10^{-3}$ m/s (3.75 m/h); $t_d = 240(3.5)/0.25 = 3360$ s = 56 min.

2. **(b) Critical diameter** ($v_t = V_c$):
$$d_c = \sqrt{\frac{18\mu V_c}{g\Delta\rho}} = \sqrt{\frac{18(1.002\times10^{-3})(1.042\times10^{-3})}{9.81(1650)}} = 34\ \mu\mathrm{m}$$

3. **(c) Removal of each size,** $v_t = gd^2\Delta\rho/18\mu$, fraction $= \min(1, v_t/V_c)$:

| d, µm | $v_t$, m/s | $Re_p$ | fraction removed | mass fraction | contribution |
|---|---|---|---|---|---|
| 10 | 8.97×10⁻⁵ | 0.0009 | 0.086 | 0.15 | 0.013 |
| 20 | 3.59×10⁻⁴ | 0.007 | 0.345 | 0.20 | 0.069 |
| 30 | 8.08×10⁻⁴ | 0.024 | 0.775 | 0.25 | 0.194 |
| 40 | 1.44×10⁻³ | 0.057 | 1.000 | 0.25 | 0.250 |
| 60 | 3.23×10⁻³ | 0.19 | 1.000 | 0.15 | 0.150 |

   All $Re_p < 1$ (Stokes valid). Overall removal = 0.013 + 0.069 + 0.194 + 0.250 + 0.150 = **0.676 = 67.6%**.

**Result:** $V_c$ = 1.04 mm/s, $t_d$ = 56 min; $d_c$ = 34 µm; overall removal ≈ 68%. To raise it, increase the plan area (or add inclined plates) or flocculate the fines; depth alone does not help.`,
        answer: String.raw`V_c = 0.25/240 = 1.04×10⁻³ m/s, t_d = 56 min; d_c = 34 µm; removals 8.6, 34.5, 77.5, 100, 100% → overall ≈ 67.6%.` } ] },

    { id: "practice-gas-liquid-separation-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P12", label: "", marks: "10", topic: "gas-liquid-separation",
        sub: "Fiber-bed mist eliminators: capture mechanisms and efficiency minimum", type: "sketch", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_2 slides "Fiber Beds/Pads Impingement Eliminators", "Fiber bed particle separation mechanism", "Overall Filter Efficiency Versus Particle Size"`,
        text: String.raw`Describe the construction and application of fiber-bed (packed) impingement mist eliminators. Explain interception, inertial impaction and diffusion, and sketch the overall efficiency against particle size, explaining why a minimum occurs between about 0.1 and 0.4 µm.`,
        solution: String.raw`### Construction and use
- Fibre packing (fine glass, polypropylene, fluoropolymer, ceramic) held between two wire-mesh screens, usually as large vertical cylinders; gas flows radially through the bed and collected liquid drains down the downstream face.
- Best for **0.1–3 µm** mists that pass mesh pads; efficiency up to **99.97 wt%**; ΔP 2–20 in. water.
- Used on corrosive plant streams: sulfuric acid, chlorine, nitric acid mists; compressed-air oil haze.
- Performance depends on liquid and gas properties, T, P, liquid viscosity, the drop size distribution, total entrainment and the separation level required.

### Mechanisms
1. **Interception:** a particle following a streamline that passes within one particle radius of a fibre touches it and is held. Grows with particle size ($\propto (d_p/d_f)^2$), independent of velocity.
2. **Inertial impaction:** a large or fast particle cannot follow the sharp bend of the streamlines round a fibre and hits it. Grows strongly with size and gas velocity ($\psi = \rho_pu d_p^2/18\mu d_f$); dominant at high velocity and dense packing.
3. **Diffusion (Brownian capture):** particles below ≈ 0.1 µm are knocked about by gas molecules and wander off the streamlines onto fibres. Grows as size and velocity fall (more time to wander).

### Efficiency vs size
![Fibre-bed collection efficiency against particle size: diffusion branch at the left, interception and impaction branch at the right, minimum near 0.1–0.4 µm](fig/practice-gas-liquid-separation-P12-sol.svg)

- $d_p$ < 0.1 µm: diffusion dominates, efficiency high.
- 0.1 ≤ $d_p$ ≤ 0.4 µm: particles too large for strong diffusion and too small for strong interception or impaction, so efficiency is lowest (the most-penetrating size).
- $d_p$ > 0.4 µm: interception and impaction take over and the efficiency rises to nearly 100%.

A designer can move the minimum: low velocity (deep beds) favours diffusion; high velocity favours impaction.`,
        answer: String.raw`Fibre packing between screens, 0.1–3 µm, up to 99.97%, ΔP 2–20 in. water, acid mists. Interception (∝ d²), impaction (∝ ρu d²), diffusion (fines, low velocity). Efficiency high below 0.1 µm (diffusion) and above 0.4 µm (interception/impaction), minimum at 0.1–0.4 µm.` } ] },

    { id: "practice-gas-liquid-separation-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P13", label: "", marks: "8", topic: "gas-liquid-separation",
        sub: "Severest design case for a knock-out drum operating in two modes", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_2 slides "Design flow rates" (Q = Q_g√(ρg/(ρl−ρg)), severest condition, margin) and horizontal-settler notes (L/D, Q/A ≤ 0.1 m/s)`,
        text: String.raw`A horizontal knock-out drum (half full of liquid, $\rho_l$ = 600 kg/m³) serves two operating modes: (i) normal: 1.10 m³/s of gas at $\rho_g$ = 40 kg/m³; (ii) start-up at low pressure: 2.10 m³/s at $\rho_g$ = 10 kg/m³. Which mode governs the design? With a 20% margin, find the minimum diameter from $Q_{max}/A \le 0.1$ m/s and a suitable length.`,
        solution: String.raw`**Given:** two cases of actual gas flow and density; $\rho_l$ = 600 kg/m³.

**Find:** governing case, $D_v$, $L_v$.

1. **Density-corrected flow** $Q = Q_g\sqrt{\rho_g/(\rho_l - \rho_g)}$:
   - (i) $Q = 1.10\sqrt{40/560} = 1.10(0.267) = 0.294$ m³/s
   - (ii) $Q = 2.10\sqrt{10/590} = 2.10(0.130) = 0.273$ m³/s
   Mode (i) governs, even though start-up has nearly twice the actual gas volume: at low density the drops settle faster ($v_t \propto \sqrt{(\rho_l - \rho_g)/\rho_g}$), which compensates.

2. **With 20% margin:** $Q_{max} = 1.2(0.294) = 0.353$ m³/s; $A \ge 0.353/0.1 = 3.53$ m² (gas area).

3. **Diameter (half full, $A = \pi D^2/8$):** $D_v = \sqrt{8(3.53)/\pi} = 3.0$ m.

4. **Length:** start at $L/D$ = 3 (normal 2.5–6; ≥ 6 for high pressure): $L_v$ ≈ 9 m, then check the droplet-settling length and the degassing limit $Q_l/(D_vL_v)$ once the liquid rate is known.

**Result:** normal mode governs (Q = 0.294 vs 0.273 m³/s); $D_v$ ≈ 3.0 m, $L_v$ ≈ 9 m.`,
        answer: String.raw`Q(i) = 1.10√(40/560) = 0.294; Q(ii) = 2.10√(10/590) = 0.273 m³/s → normal mode governs; Q_max = 0.353 m³/s → A ≥ 3.53 m² → D ≈ 3.0 m; L ≈ 3D ≈ 9 m.` } ] },

    { id: "practice-gas-liquid-separation-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-gas-liquid-separation-P14", label: "", marks: "10", topic: "gas-liquid-separation",
        sub: "Comparing mesh pads, fiber beds, dry-packed beds and chevron vanes", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Lecture 2_2 slides on impingement separators (knitted mesh, fiber beds, dry-packed beds, zig-zag plates)`,
        text: String.raw`Compare the four construction types of impingement separator (knitted wire mesh, fiber beds, dry-packed impingement beds, zig-zag plates) by particle size removed, efficiency, pressure drop, tolerance to solids and liquid load, and typical application. State which you would pick for (i) a high-liquid-load gas scrubber outlet with some solids, (ii) a sulfuric acid plant absorber outlet.`,
        solution: String.raw`| Type | Smallest drop removed | Efficiency | ΔP | Solids / liquid load | Typical use |
|---|---|---|---|---|---|
| Knitted wire mesh pad (4–12 in., 5–14 lb/ft³) | ≈ 4–10 µm (95%+ down to 4–6 µm) | 98–99%+ in the 30–100% $V_a$ range | ≈ 1 in. water (4–6 in. pad), 3 in. (12 in.) | plugs with solids (needs sprays); floods at high liquid load (120–140% $V_a$) | KO drums, evaporators, fractionators, compressor suction |
| Fiber bed | 0.1–3 µm | up to 99.97 wt% | 2–20 in. water | no solids; moderate liquid | acid mists (H₂SO₄, Cl₂, HNO₃), oil haze |
| Dry-packed bed (graded granules/ceramic, > 2 ft) | 0.5–5 µm | ≈ 99% | large | plugs on dust; must be back-washed | special cases, e.g. sulfuric acid mist |
| Zig-zag (chevron) plates | 12–15 µm | 97–99%+ for 15 µm | 0.1–3 psi (low) | tolerates solids, viscous liquids, high liquid load and high velocity | scrubber outlets, dirty or heavily loaded gas |

**Choices:**
- (i) Scrubber outlet with high liquid load and solids: **chevron (zig-zag) vanes**, which will not plug or flood and handle high velocities; a mesh pad would foul.
- (ii) Sulfuric acid absorber outlet (submicron mist): **fiber-bed mist eliminator** of glass or fluoropolymer fibres, the only type that removes 0.1–3 µm drops at high efficiency.`,
        answer: String.raw`Mesh: ≥ 4–10 µm, 98–99%, ~1 in. water, fouls; fiber bed: 0.1–3 µm, 99.97%, 2–20 in.; dry-packed: 0.5–5 µm, 99%, high ΔP, plugs; chevron: ≥ 12–15 µm, 97–99%, low ΔP, tolerates solids/high load. (i) chevron vanes; (ii) fiber bed.` } ] }
  ]
});
