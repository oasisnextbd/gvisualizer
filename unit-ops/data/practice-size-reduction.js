QB.paper({ year: "Practice", set: "Size reduction", date: "", marks: 0, practice: true,
  rules: String.raw`Size reduction: the slide exercises (Kick's-law statement, jaw-crusher and roll-crusher questions, the Lafarge Surma flowsheet), MSH 5th ed. chapter 29 (Bond work index example, Rittinger/Kick/Bond from screen analyses, ball-mill speed) and Coulson & Richardson Vol. 2 chapter 2 problems (crushing rolls, ball-mill speed), plus exam-style questions on Bond's law with dry/wet grinding and staging, finding the comminution law from test data, ball-mill operation, free versus choke feeding, fracture mechanics and equipment selection.`,
  questions: [
    { id: "practice-size-reduction-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-size-reduction-P1", label: "", marks: "", topic: "size-reduction",
        sub: "Kick's law claim: energy for 50→25 mm versus 40→20 mm under Kick, Rittinger and Bond", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Size-reduction slides (Md Kamrul Hasan), "Kick's law" slide statement and "Applicability of laws"`,
        text: String.raw`The slides state that, according to Kick's law, "the energy required to crush a given amount of material from a 50 mm to a 25 mm size is the same as that required to reduce the size from 40 mm to 20 mm". Verify this from the general equation $dE/dL = -CL^p$, and find the ratio $E_{40 \to 20}/E_{50 \to 25}$ predicted by Rittinger's law and by Bond's law. Which law is most appropriate for this size range?`,
        solution: String.raw`**Given:** two crushing duties with the same reduction ratio $L_1/L_2 = 2$: 50 → 25 mm and 40 → 20 mm.

**Find:** $E_{40 \to 20}/E_{50 \to 25}$ for each law.

1. **General law** $dE/dL = -CL^p$ integrated from $L_1$ to $L_2$:
   - $p = -1$ (Kick): $E = C\ln(L_1/L_2)$
   - $p = -2$ (Rittinger): $E = C(1/L_2 - 1/L_1)$
   - $p = -3/2$ (Bond): $E = 2C(1/\sqrt{L_2} - 1/\sqrt{L_1})$

2. **Evaluate:**

| Law | 50 → 25 mm | 40 → 20 mm | ratio |
|---|---|---|---|
| Kick, $\ln(L_1/L_2)$ | $\ln 2 = 0.693$ | $\ln 2 = 0.693$ | **1.00** |
| Rittinger, $1/L_2 - 1/L_1$ (mm⁻¹) | 0.0200 | 0.0250 | **1.25** |
| Bond, $1/\sqrt{L_2} - 1/\sqrt{L_1}$ (mm⁻⁰·⁵) | 0.0586 | 0.0655 | **1.12** |

3. **Why:** Kick's energy depends only on the reduction ratio (elastic-deformation argument, energy per unit mass for geometrically similar breakage), so any 2 : 1 reduction costs the same. Rittinger's energy is proportional to new surface, which grows as $1/L$; the finer duty creates 25% more surface. Bond lies between.

4. **Applicability:** both duties are coarse crushing (particles > 1 mm, little new surface per kg). The slides give Kick for coarse crushing above about 1000 μm, Bond for intermediate crushing and grinding, and Rittinger for fine grinding (10–1000 μm). Kick's law (or Bond) is the appropriate choice here.

**Result:** Kick: ratio 1.00 (statement verified); Rittinger: 1.25; Bond: 1.12.`,
        answer: String.raw`E(40→20)/E(50→25): **Kick 1.00**, **Rittinger 1.25**, **Bond 1.12**; Kick (coarse crushing) applies.` } ] },

    { id: "practice-size-reduction-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-size-reduction-P2a", label: "(a)", marks: "", topic: "size-reduction",
          sub: "Jaw crushers: slippage, types (Blake, Dodge, universal) and the type used most", type: "theory", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Size-reduction slides (MKH), "Type of jaw crusher: What is slippage in jaw crusher? Which type of jaw crusher is used mostly in industries?" and "Blake jaw crusher"`,
          text: String.raw`What is slippage in a jaw crusher? Name the types of jaw crusher and state which type is used most in industry, with reasons.`,
          solution: String.raw`**Slippage**
- A lump is crushed only if the jaws can grip ("nip") it. The jaw faces push on the lump with normal forces; friction must hold the lump in place against the upward component of those forces.
- If the angle between the jaws (the nip angle) is too large, or the lump surface is wet, slimy or smooth (low friction), the upward squeezing component exceeds friction and the lump **slips** upward or rides on the jaws without breaking. Energy is wasted, the capacity falls and the jaw plates wear by rubbing.
- To avoid slippage the nip angle is kept small: the angle between the fixed jaw (anvil) and the swing jaw is about 20–30° (slides), and corrugated or ribbed jaw faces are used.

**Types of jaw crusher** (classified by where the swing jaw is pivoted)
| Type | Pivot of swing jaw | Feature |
|---|---|---|
| Blake | at the top | largest movement at the bottom (discharge); large feed opening, high capacity, some variation in product size |
| Dodge | at the bottom | fixed discharge opening, more uniform product; small capacity, chokes easily; laboratory use |
| Universal | in the middle | intermediate movement at feed and discharge |

**Type used most: the Blake jaw crusher.**
- The feed opening is fixed and large, so it takes very big lumps (up to about 1.8 m; a 1.8 m × 2.4 m opening crushes about 1200 ton/h to 250 mm, slides).
- The large stroke at the bottom keeps the discharge free, so it does not choke; the toggle mechanism gives a large crushing force with a moderate drive.
- It is robust and simple to maintain, ideal as a primary crusher for hard rock and ore; secondary Blake crushers reduce pre-crushed feed to 6–50 mm.`,
          answer: String.raw`Slippage: the lump is not nipped (nip angle too large or slippery feed) and rides up the jaws without breaking. Types: Blake (pivot at top), Dodge (pivot at bottom), universal (pivot in middle); Blake is used most (large fixed feed opening, free discharge, high capacity, robust).` },
        { id: "practice-size-reduction-P2b", label: "(b)", marks: "", topic: "size-reduction",
          sub: "Smooth-roll crusher: why one roll is spring mounted; limits of reduction ratio", type: "theory", syllabus: "in", repeats: [],
          origin: "slides", ref: String.raw`Size-reduction slides (MKH), "Smooth-roll crusher … One roll must be spring mounted (Why?)"`,
          text: String.raw`In a smooth-roll crusher "one roll must be spring mounted". Explain why. Why is the reduction ratio of smooth rolls limited to about 3 or 4?`,
          solution: String.raw`**Why one roll is spring mounted**
- **Protection against tramp material:** a piece of tramp iron or another uncrushable lump that enters the gap would otherwise stall the drive, break the rolls, shafts or bearings. The spring lets the movable roll yield and open the gap so the object passes, then returns the roll to its setting.
- **Sets the crushing force:** the spring preload fixes the maximum force the rolls apply; the rolls exert pressure up to that value and then yield, giving controlled compression-only crushing.
- **Allows the gap to be set** (with stops/shims) to control the product size; with wear the gap can be readjusted.

**Why the reduction ratio is small (product/feed ≈ 1/3 to 1/4)**
- A particle is drawn in only if it is nipped: $\cos(\alpha/2) = (r_1 + b)/(r_1 + r_2)$, and the half nip angle must not exceed the friction angle ($\tan(\alpha/2) \le \mu$, giving $\alpha \approx 30$–$32°$ for $\mu \approx 0.3$). With rolls of practical diameter (600–2000 mm) this limits the feed size to a few times the gap (see Problem P7: 1-m rolls set 12.5 mm apart take at most about 51 mm feed).
- Larger lumps simply ride on top of the rolls. For bigger reductions rolls are used in series or a jaw/gyratory crusher precedes them.`,
          answer: String.raw`Spring mounting lets the roll yield to tramp iron or uncrushable lumps (protects rolls, shafts, bearings), limits the crushing force and allows gap setting. Nip condition (α/2 ≤ friction angle) limits feed to about 3–4 times the gap.` } ] },

    { id: "practice-size-reduction-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-size-reduction-P3", label: "", marks: "", topic: "size-reduction",
        sub: "Size-reduction steps in the Lafarge Surma dry-process cement plant", type: "theory", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Size-reduction slides (MKH), "Process flow diagram for Lafarge Surma dry process cement plant"`,
        text: String.raw`Using the slide flow diagram of the Lafarge Surma (Chhatak) dry-process cement plant, describe the size-reduction steps from the quarry to the cement silo. Name the equipment at each step, the type of force used and why a dry process suits this plant.`,
        solution: String.raw`**Flow of solids and the size-reduction steps**

| Step | Equipment (slide) | Size change (typical) | Force | Remarks |
|---|---|---|---|---|
| 1. Quarrying | limestone and shale quarries, Meghalaya (India) | blasted rock up to about 1 m | — | dumpers carry rock to the crusher |
| 2. Primary crushing | crusher at the quarry | about 1 m → below 75–100 mm | compression / impact | makes the rock small enough for the 17-km cross-border belt conveyor to Chhatak |
| 3. Transport and prebending | belt conveyor, raw-material prebending stockpile | — | — | evens out composition before grinding |
| 4. Raw grinding | raw mill (dry grinding, with filter and exhaust fan) | tens of mm → raw meal, mostly below 90 μm | attrition, compression (and impact) | limestone, shale and additives ground together; the mill is swept by hot gas that dries the feed; fines carried to a filter/separator and homogenising silos |
| 5. Burning | preheater, kiln, cooler (not size reduction) | raw meal → clinker nodules 5–25 mm | — | clinker stored in clinker silos |
| 6. Cement grinding | cement mill (tumbling ball mill) with gypsum addition, dynamic air separator, filter | clinker nodules → cement, mostly below 45 μm | impact and attrition | **closed circuit**: the separator returns coarse material to the mill and sends fines to the cement silos |

**Why a dry process here**
- Limestone and shale arrive dry; grinding them dry with hot gas avoids evaporating slurry water in the kiln, so fuel use is far lower than in the wet process (the older Chhatak Cement wet process grinds a limestone–clay slurry in a wet raw mill).
- The preheater/precalciner kiln that makes dry processes efficient needs a dry, finely ground, well-homogenised raw meal, which the raw mill + homogenising silos supply.

**Points to note for size reduction**
- Reduction is done in stages (crusher → raw mill; clinker → cement mill) because no single machine gives a reduction ratio of 10⁴ economically.
- Fine grinding is in closed circuit with air separation to avoid over-grinding and to save energy.
- Cement clinker (work index about 13.5 kWh/ton wet, ×4/3 dry) is the largest single power consumer of the plant.`,
        answer: String.raw`Quarry → primary crusher → 17-km belt conveyor → prebending → dry raw mill (attrition/compression, hot-gas swept, filter, homogenising silos) → kiln (clinker) → cement ball mill with gypsum in closed circuit with a dynamic air separator → cement silos. Dry process: dry raw materials and much lower kiln fuel use.` } ] },

    { id: "practice-size-reduction-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-size-reduction-P4", label: "", marks: "", topic: "size-reduction",
        sub: "Bond's law with work index: power to crush 100 ton/h of limestone", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Example 29.1 (Table 29.1 work indexes = slide Table 27-1)`,
        text: String.raw`What is the power required to crush 100 ton/h of limestone if 80 percent of the feed passes a 2-in. screen and 80 percent of the product a 1/8-in. screen? (Work index of limestone: 12.74.)`,
        solution: String.raw`**Given:** $\dot m = 100$ ton/h (short tons); $D_{pa} = 2$ in. $= 50.8$ mm; $D_{pb} = 1/8$ in. $= 3.175$ mm; $W_i = 12.74$ kWh/ton.

**Find:** power $P$.

**Assumptions:** Bond's law (crushing, dry crushing basis of the table: no 4/3 correction); $W_i$ includes friction, so $P$ is gross power.

1. **Bond's law** (MSH Eq. 29.10, $D$ in mm, $P$ in kW, $\dot m$ in ton/h):
$$\frac{P}{\dot m} = 0.3162W_i\left(\frac{1}{\sqrt{D_{pb}}} - \frac{1}{\sqrt{D_{pa}}}\right)$$

2. **Substitute:**
$$\frac{1}{\sqrt{3.175}} - \frac{1}{\sqrt{50.8}} = 0.5612 - 0.1403 = 0.4209$$
$$P = 100(0.3162)(12.74)(0.4209) = 169.6\ \text{kW}\ (227\ \text{hp})$$

**Result:** 169.6 kW, i.e. 1.70 kWh per ton; book answer 169.6 kW ✓.

> Where 0.3162 comes from: by definition $W_i$ takes very large feed to 80% passing 100 μm $= 0.1$ mm, so $W_i = K_b/\sqrt{0.1}$ and $K_b = \sqrt{0.1}\,W_i = 0.3162W_i$. The slide form $E = E_i\sqrt{100/L_2}(1 - 1/\sqrt{q})$ with $L_2$ in μm is the same equation.`,
        answer: String.raw`P = 100 × 0.3162 × 12.74 × (1/√3.175 − 1/√50.8) = **169.6 kW** (book ✓).` } ] },

    { id: "practice-size-reduction-P5", q: 5, section: "S", compulsory: false,
      stem: String.raw`Trap rock is crushed in a gyratory crusher. The feed is nearly uniform 2-in. spheres. The differential screen analysis of the product is given in column (1) of the table. The power required to crush this material is 400 kW [printed "400 kW/ton"]. Of this, 10 kW is needed to operate the empty mill. By reducing the clearance between the crushing head and the cone, the differential screen analysis of the product becomes that given in column (2). The feed rate is 110 ton/h.

| Mesh (Tyler) | 4/6 | 6/8 | 8/10 | 10/14 | 14/20 | 20/28 | 28/35 | 35/48 | 48/65 | −65 | 65/100 | 100/150 | −150 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| (1) first grind, % | 3.1 | 10.3 | 20.0 | 18.6 | 15.2 | 12.0 | 9.5 | 6.5 | 4.3 | 0.5 | | | |
| (2) second grind, % | | 3.3 | 8.2 | 11.2 | 12.3 | 13.0 | 19.5 | 13.5 | 8.5 | | 6.2 | 4.0 | 0.3 |`,
      parts: [
        { id: "practice-size-reduction-P5a", label: "(a)", marks: "", topic: "size-reduction",
          sub: "Gyratory crusher, finer setting: power by Rittinger's and Kick's laws from screen analyses", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Problem 29.1 (Table 29.5)`,
          text: String.raw`From (a) Rittinger's law and (b) Kick's law, calculate the power required for the second operation.`,
          solution: String.raw`**Given:** feed $D_{sa} = 2$ in. $= 50.8$ mm (uniform spheres); net power for grind 1 $= 400 - 10 = 390$ kW; feed rate constant (110 ton/h).

**Find:** total power for grind 2 by Rittinger and by Kick.

**Assumptions:** "400 kW/ton" is read as 400 kW total (400 kW per ton/h would be 44,000 kW, impossible for this duty; Bond in part (b) confirms about 370 kW); the empty-mill power (10 kW) is independent of the grind; constant crushing efficiency; Tyler openings (mm): 4: 4.699, 6: 3.327, 8: 2.362, 10: 1.651, 14: 1.168, 20: 0.833, 28: 0.589, 35: 0.417, 48: 0.295, 65: 0.208, 100: 0.147, 150: 0.104; each fraction takes the arithmetic mean of its two screens, a pan fraction half its screen opening.

1. **Volume–surface mean diameter** $\bar D_s = 1/\sum(x_i/\bar D_{pi})$:

| Fraction | $\bar D_{pi}$, mm | (1) $x_i/\bar D_{pi}$ | (2) $x_i/\bar D_{pi}$ |
|---|---|---|---|
| 4/6 | 4.013 | 0.0077 | — |
| 6/8 | 2.845 | 0.0362 | 0.0116 |
| 8/10 | 2.007 | 0.0997 | 0.0409 |
| 10/14 | 1.410 | 0.1320 | 0.0795 |
| 14/20 | 1.001 | 0.1519 | 0.1229 |
| 20/28 | 0.711 | 0.1688 | 0.1828 |
| 28/35 | 0.503 | 0.1889 | 0.3877 |
| 35/48 | 0.356 | 0.1826 | 0.3792 |
| 48/65 | 0.252 | 0.1710 | 0.3380 |
| −65 (1) / 65/100 (2) | 0.104 / 0.178 | 0.0481 | 0.3493 |
| 100/150 | 0.126 | — | 0.3187 |
| −150 | 0.052 | — | 0.0577 |
| **sum, mm⁻¹** | | **1.187** | **2.268** |
| $\bar D_s$, mm | | **0.843** | **0.441** |

2. **(a) Rittinger** $P = K_r\dot m(1/\bar D_{sb} - 1/\bar D_{sa})$:
$$K_r\dot m = \frac{390}{1/0.843 - 1/50.8} = \frac{390}{1.167} = 334.3\ \text{kW·mm}$$
$$P_2 = 334.3\left(\frac{1}{0.441} - \frac{1}{50.8}\right) = 751\ \text{kW net} \;\Rightarrow\; 761\ \text{kW total}$$

3. **(b) Kick** $P = K_k\dot m\ln(\bar D_{sa}/\bar D_{sb})$:
$$K_k\dot m = \frac{390}{\ln(50.8/0.843)} = \frac{390}{4.099} = 95.15\ \text{kW}$$
$$P_2 = 95.15\ln\frac{50.8}{0.441} = 95.15(4.747) = 452\ \text{kW net} \;\Rightarrow\; 462\ \text{kW total}$$

**Result:** Rittinger: about 760 kW; Kick: about 460 kW. The two laws differ by 65% because the new surface nearly doubles (Rittinger, $\propto 1/\bar D_s$) while the reduction ratio rises only from 60 to 115 (Kick, $\propto \ln$). (No answer is printed in MSH.)`,
          answer: String.raw`D̄s = 0.843 mm (grind 1), 0.441 mm (grind 2). **Rittinger: ≈ 761 kW**; **Kick: ≈ 462 kW** (each including 10 kW no-load).` },
        { id: "practice-size-reduction-P5b", label: "(b)", marks: "", topic: "size-reduction",
          sub: "Bond work-index power per ton for both gyratory-crusher grinds (D80 from screen data)", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Problem 29.2`,
          text: String.raw`Using the Bond method, estimate the power necessary per ton of rock in each of the operations above. (Work index of trap rock: 19.32.)`,
          solution: String.raw`**Given:** $W_i = 19.32$ kWh/ton (trap rock); feed $D_{pa} = 50.8$ mm (uniform 2-in. spheres, so 80% passes 50.8 mm); 110 ton/h.

**Find:** kWh/ton for each grind.

**Assumptions:** product $D_{80}$ found by interpolating the cumulative screen analysis (log-linear in size); dry crushing.

1. **Product $D_{80}$** = size at which 20% is retained (cumulative oversize):
   - Grind 1: cumulative oversize 13.4% on 8 mesh (2.362 mm), 33.4% on 10 mesh (1.651 mm). Interpolating to 20%:
$$D_{80} = 2.362\left(\frac{1.651}{2.362}\right)^{(20 - 13.4)/(33.4 - 13.4)} = 2.10\ \text{mm}$$
   - Grind 2: 11.5% on 10 mesh (1.651 mm), 22.7% on 14 mesh (1.168 mm):
$$D_{80} = 1.651\left(\frac{1.168}{1.651}\right)^{(20 - 11.5)/(22.7 - 11.5)} = 1.27\ \text{mm}$$

2. **Bond's law:**
$$\frac{P}{\dot m} = 0.3162(19.32)\left(\frac{1}{\sqrt{D_{80}}} - \frac{1}{\sqrt{50.8}}\right) = 6.109\left(\frac{1}{\sqrt{D_{80}}} - 0.1403\right)$$
   - Grind 1: $6.109(0.6903 - 0.1403) = 3.36$ kWh/ton → 370 kW at 110 ton/h
   - Grind 2: $6.109(0.8875 - 0.1403) = 4.56$ kWh/ton → 502 kW at 110 ton/h

3. **Comparison:** the measured power for grind 1 is 400 kW (3.64 kWh/ton); Bond predicts 370 kW, within 8%, which supports reading the data as 400 kW total. For grind 2 Bond gives about 500 kW, between Kick (460 kW) and Rittinger (760 kW), as expected for intermediate crushing.

**Result:** about 3.4 kWh/ton for the first operation and 4.6 kWh/ton for the second.`,
          answer: String.raw`D₈₀ ≈ 2.10 mm and 1.27 mm → **3.36 kWh/ton** (≈ 370 kW) and **4.56 kWh/ton** (≈ 500 kW).` } ] },

    { id: "practice-size-reduction-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-size-reduction-P6a", label: "(a)", marks: "", topic: "size-reduction",
          sub: "Recommended rotational speed for a 1200-mm ball mill with 75-mm balls (critical speed)", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`McCabe, Smith & Harriott, 5th ed., Problem 29.6 (Eq. 29.18)`,
          text: String.raw`What rotational speed, in revolutions per minute, would you recommend for a ball mill 1200 mm in diameter charged with 75-mm balls?`,
          solution: String.raw`**Given:** $R = 0.600$ m, $r = 0.0375$ m.

**Find:** recommended speed.

1. **Critical speed** (centrifugal force on the ball at the top equals its weight, Eq. 29.18):
$$n_c = \frac{1}{2\pi}\sqrt{\frac{g}{R - r}} = \frac{1}{2\pi}\sqrt{\frac{9.81}{0.5625}} = 0.665\ \text{r/s} = 39.9\ \text{rpm}$$

2. **Operating range:**
   - MSH: tumbling mills run at 65–80% of critical (lower values for wet grinding in viscous suspensions): 26–32 rpm.
   - Slides: 50–75% of critical: 20–30 rpm.

**Result:** run at about 28–30 rpm (70–75% of the critical 40 rpm); use the lower end (about 26 rpm) for wet grinding of a viscous slurry.`,
          answer: String.raw`n_c = (1/2π)√(9.81/0.5625) = **39.9 rpm**; recommend **≈ 28–30 rpm** (65–80% of n_c; slides 50–75% → 20–30 rpm).` },
        { id: "practice-size-reduction-P6b", label: "(b)", marks: "", topic: "size-reduction",
          sub: "Ball mill 1.2 m run at 0.8 Hz not working: diagnose from critical speed", type: "numerical", syllabus: "in", repeats: [],
          origin: "book", ref: String.raw`Coulson & Richardson, Chemical Engineering Vol. 2, chapter 2, Problem 2.5`,
          text: String.raw`A ball mill 1.2 m in diameter is run at 0.8 Hz and it is found that the mill is not working satisfactorily. Should any modification in the conditions of operation be suggested?`,
          solution: String.raw`**Given:** $D = 1.2$ m ($R = 0.6$ m); $n = 0.8$ Hz $= 48$ rpm.

**Find:** whether the speed is correct, and what to change.

**Assumptions:** ball radius small compared with the mill radius ($R - r \approx R$).

1. **Critical speed:**
$$n_c = \frac{1}{2\pi}\sqrt{\frac{g}{R}} = \frac{1}{2\pi}\sqrt{\frac{9.81}{0.6}} = 0.643\ \text{Hz}\ (38.6\ \text{rpm})$$

2. **Diagnosis:** $n/n_c = 0.8/0.643 = 1.24$. The mill runs 24% **above** its critical speed. The balls are held against the shell by centrifugal force and carried round with it (centrifuging); there is almost no relative motion and no cascading or impact, so little grinding occurs while the lining and drive still consume power.

3. **Remedy:** reduce the speed to 50–75% of critical (slides), i.e.
$$0.32\ \text{to}\ 0.48\ \text{Hz}\ (19\text{–}29\ \text{rpm}),\ \text{say about 0.45 Hz}$$
(MSH's 65–80% gives 0.42–0.51 Hz.) If the drive cannot be slowed, a mill of diameter below $2g/(2\pi \times 0.8/0.75)^2 = 0.44$ m would be needed for 0.8 Hz to be 75% of critical, which is not practical; changing the speed is the answer. Also check ball charge (30–50% of mill volume) and feed level once the speed is right.

**Result:** the mill is centrifuging (0.8 Hz > $n_c$ = 0.64 Hz); slow it to about 0.3–0.5 Hz.`,
          answer: String.raw`n_c = **0.643 Hz**; 0.8 Hz = 1.24 n_c → balls centrifuge, no grinding. **Reduce speed to ≈ 0.32–0.48 Hz** (50–75% of n_c), e.g. 0.45 Hz.` } ] },

    { id: "practice-size-reduction-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-size-reduction-P7", label: "", marks: "", topic: "size-reduction",
        sub: "Crushing rolls: largest feed from the nip angle and throughput of smooth rolls", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`Coulson & Richardson, Chemical Engineering Vol. 2, chapter 2, Example 2.3`,
        text: String.raw`If crushing rolls, 1 m in diameter, are set so that the crushing surfaces are 12.5 mm apart and the angle of nip is 31°, what is the maximum size of particle which should be fed to the rolls? If the actual capacity of the machine is 12 percent of the theoretical, calculate the throughput in kg/s when running at 2.0 Hz if the working face of the rolls is 0.4 m long and the feed density is 2500 kg/m³.`,
        solution: String.raw`**Given:** roll radius $r_1 = 0.5$ m; gap $2b = 12.5$ mm ($b = 6.25$ mm); nip angle $\alpha = 31°$; speed 2.0 Hz; face length 0.4 m; density 2500 kg/m³; actual = 12% of theoretical.

**Find:** maximum feed size $2r_2$; throughput.

1. **Nip geometry** (see figure): the lines from each roll centre to the particle centre make $\alpha/2$ with the line of centres when the particle just touches both rolls:
$$\cos\frac{\alpha}{2} = \frac{r_1 + b}{r_1 + r_2}$$

![Two crushing rolls with a particle just nipped in the gap; the half angle of nip α/2 between the line of centres and the line from roll centre to particle centre](fig/practice-size-reduction-P7-sol.svg)

2. **Solve for $r_2$:**
$$r_1 + r_2 = \frac{0.5 + 0.00625}{\cos 15.5°} = \frac{0.50625}{0.96363} = 0.52536\ \text{m} \;\Rightarrow\; r_2 = 0.0254\ \text{m}$$
Maximum particle size $= 2r_2 = 0.0507$ m ≈ **51 mm** (reduction ratio about 4).

3. **Theoretical throughput:** a ribbon of material as wide as the face and as thick as the gap leaves at the peripheral speed:
$$u = \pi D n = \pi(1.0)(2.0) = 6.28\ \text{m/s}$$
$$Q_{th} = (0.0125)(0.4)(6.28) = 0.0314\ \mathrm{m^3/s} \;\Rightarrow\; 0.0314(2500) = 78.5\ \text{kg/s}$$

4. **Actual throughput:** $0.12(78.5) = 9.4$ kg/s (34 ton/h).

**Result:** feed must be smaller than about 51 mm; throughput about 9.4 kg/s. C&R's answers: 50 mm (≈ 51 mm) and 9.4 kg/s ✓.

> Friction check: the particle is drawn in only if $\tan(\alpha/2) \le \mu$, i.e. $\mu \ge \tan 15.5° = 0.28$. With wet or slippery feed ($\mu$ smaller) the allowable feed size falls.`,
        answer: String.raw`cos 15.5° = (0.5 + 0.00625)/(0.5 + r₂) → **max feed ≈ 51 mm**; theoretical 0.0314 m³/s = 78.5 kg/s → **actual ≈ 9.4 kg/s**.` } ] },

    { id: "practice-size-reduction-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-size-reduction-P8a", label: "(a)", marks: "12", topic: "size-reduction",
          sub: "Bond's law for a cement-clinker mill: dry versus wet grinding power and motor size", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`New problem; slide work-index table (Table 27-1, "for dry grinding multiply by 4/3") and slide "dry and wet grinding"`,
          text: String.raw`A ball mill grinds 30 ton/h of cement clinker from 80% passing 8 mm to 80% passing 75 μm. Using the work index from the slide table (cement clinker $W_i$ = 13.45, for dry crushing or wet grinding), find the power for (i) dry grinding and (ii) wet grinding, and the motor rating for dry grinding if the drive efficiency is 90%. Comment on the saving and on why cement mills nevertheless grind dry.`,
          solution: String.raw`**Given:** $\dot m = 30$ ton/h; $D_{pa} = 8$ mm; $D_{pb} = 0.075$ mm; $W_i = 13.45$ kWh/ton (wet grinding basis); drive efficiency 0.90.

**Find:** dry and wet grinding power; motor rating.

**Assumptions:** Bond's law; for dry grinding the table value is multiplied by 4/3 (slide footnote).

1. **Wet grinding (table basis):**
$$\frac{1}{\sqrt{0.075}} - \frac{1}{\sqrt{8}} = 3.651 - 0.354 = 3.298\ \mathrm{mm^{-0.5}}$$
$$P_{wet} = 30(0.3162)(13.45)(3.298) = 420.8\ \text{kW}\ (14.0\ \text{kWh/ton})$$

2. **Dry grinding:**
$$P_{dry} = \frac{4}{3}(420.8) = 561.0\ \text{kW}\ (18.7\ \text{kWh/ton})$$

3. **Motor (dry):** $561.0/0.90 = 623$ kW → choose the next standard size, about 650 kW.

4. **Comment:** wet grinding needs $561 - 421 = 140$ kW (25%) less, in line with the slide figure of 20–30% saving; it also raises capacity, removes dust and eases product removal. But cement must be delivered **dry** and clinker reacts with water (hydration), so wet grinding is impossible for cement; in the raw-meal stage the water would have to be evaporated in the kiln (the wet process), costing far more fuel than the grinding power saved. Hence modern plants grind dry in closed circuit with air separators.`,
          answer: String.raw`P_wet = 30 × 0.3162 × 13.45 × 3.298 = **421 kW**; P_dry = 4/3 × 421 = **561 kW** (18.7 kWh/ton); motor ≈ **623 kW** (choose ~650 kW); wet saves 25% but clinker cannot be ground wet.` },
        { id: "practice-size-reduction-P8b", label: "(b)", marks: "10", topic: "size-reduction",
          sub: "Two-stage crushing of limestone by Bond's law: energy split and reasons for staging", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`New problem; slides "Introduction" (reduction in stages) and "Methods of operating crushers"`,
          text: String.raw`100 ton/h of limestone ($W_i$ = 12.74) is reduced from 80% passing 500 mm to 80% passing 6 mm in two stages: a primary crusher to 50 mm and a secondary crusher to 6 mm. Find the Bond power of each stage and of a hypothetical single machine doing the whole reduction. Why is the reduction done in stages?`,
          solution: String.raw`**Given:** $\dot m = 100$ ton/h; $W_i = 12.74$ kWh/ton; 500 → 50 → 6 mm.

**Find:** power per stage; single-stage power.

1. **Primary (500 → 50 mm, ratio 10):**
$$P_1 = 100(0.3162)(12.74)\left(\frac{1}{\sqrt{50}} - \frac{1}{\sqrt{500}}\right) = 402.8(0.1414 - 0.0447) = 39.0\ \text{kW}$$

2. **Secondary (50 → 6 mm, ratio 8.3):**
$$P_2 = 402.8\left(\frac{1}{\sqrt 6} - \frac{1}{\sqrt{50}}\right) = 402.8(0.4082 - 0.1414) = 107.5\ \text{kW}$$

3. **Total and single machine:** $P_1 + P_2 = 146.4$ kW; a single machine 500 → 6 mm gives $402.8(0.4082 - 0.0447) = 146.4$ kW, the same. Bond's law is additive, so staging does not change the theoretical energy; 73% of it is spent in the finer stage although its reduction ratio is smaller.

4. **Why stages are used anyway (slides):**
   - No single machine combines a feed opening for 500-mm lumps with a discharge setting of 6 mm; a large reduction ratio in one machine is not economical.
   - A coarse crusher at small setting would choke: long residence, cushioning by fines, over-grinding and high wear (choke-feeding effects).
   - Each stage can use the force that suits its size (compression in jaw/gyratory crushers for coarse lumps; rolls, cone crushers or hammer mills for intermediate sizes), and screens between stages remove material that is already fine (free crushing in closed circuit), so the actual energy is lower and the product has fewer fines.

**Result:** 39 kW + 107 kW = 146 kW in total, the same as the single-stage Bond estimate; staging is chosen for equipment, capacity and product-quality reasons, not because Bond predicts a saving.`,
          answer: String.raw`P₁ = **39.0 kW**, P₂ = **107.5 kW**, total **146.4 kW** = single-step Bond value (law is additive). Stages are needed because no machine takes 500-mm lumps and gives 6 mm efficiently without choking.` } ] },

    { id: "practice-size-reduction-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-size-reduction-P9", label: "", marks: "15", topic: "size-reduction",
        sub: "Finding the comminution law (exponent p) from two crushing tests; energy prediction", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`New problem; slide general equation dE/dL = −CL^p with p = −1, −3/2, −2`,
        text: String.raw`Laboratory tests on a material with feed of mean size 40 mm gave an energy consumption of 4.0 kJ/kg for a product of mean size 10 mm and 7.3 kJ/kg for a product of mean size 5 mm. (i) Decide which of Kick's, Bond's and Rittinger's laws describes the material, and find the exponent $p$ in $dE/dL = -CL^p$. (ii) Estimate the power needed to crush 5 kg/s of the same feed to a mean size of 2 mm, and compare with the other two laws.`,
        solution: String.raw`**Given:** $L_1 = 40$ mm; $E(10) = 4.0$ kJ/kg, $E(5) = 7.3$ kJ/kg; measured ratio $7.3/4.0 = 1.825$.

**Find:** law and $p$; power for 5 kg/s to 2 mm.

**Assumptions:** the same machine type and mechanical efficiency for the scaled duty; mean sizes represent the distributions.

1. **Predicted ratio $E(5)/E(10)$ for each law:**

| Law | $E(L_2) \propto$ | $E(5)/E(10)$ |
|---|---|---|
| Kick ($p = -1$) | $\ln(40/L_2)$ | $\ln 8/\ln 4 = 1.500$ |
| Bond ($p = -1.5$) | $1/\sqrt{L_2} - 1/\sqrt{40}$ | $0.2891/0.1581 = 1.828$ |
| Rittinger ($p = -2$) | $1/L_2 - 1/40$ | $0.175/0.075 = 2.333$ |

The measured 1.825 matches **Bond**.

2. **Exponent:** integrating $dE/dL = -CL^p$ gives $E \propto (L_2^{p+1} - L_1^{p+1})$; solving
$$\frac{5^{p+1} - 40^{p+1}}{10^{p+1} - 40^{p+1}} = 1.825$$
by trial gives $p = -1.50$ (Bond).

3. **Energy to 2 mm (Bond):**
$$E(2) = 4.0\,\frac{1/\sqrt 2 - 1/\sqrt{40}}{1/\sqrt{10} - 1/\sqrt{40}} = 4.0\,\frac{0.5490}{0.1581} = 13.9\ \text{kJ/kg}$$
$$P = 5(13.9) = 69.4\ \text{kW}$$

4. **Comparison:** Kick: $4.0\ln 20/\ln 4 = 8.6$ kJ/kg (43 kW); Rittinger: $4.0(0.475/0.075) = 25.3$ kJ/kg (127 kW). The laws diverge strongly as the product gets finer, which is why the right exponent must come from tests on the actual material.

**Result:** the material follows Bond's law ($p \approx -1.5$); about 13.9 kJ/kg, i.e. about 69 kW for 5 kg/s to 2 mm.`,
        answer: String.raw`Ratio 1.825 ≈ Bond's 1.828 → **Bond, p ≈ −1.5**; E(2 mm) = **13.9 kJ/kg → P ≈ 69 kW** (Kick 43 kW, Rittinger 127 kW).` } ] },

    { id: "practice-size-reduction-P10", q: 10, section: "S", compulsory: false,
      stem: String.raw`A ball mill has an internal diameter of 2.4 m and is charged with 80-mm steel balls.`,
      parts: [
        { id: "practice-size-reduction-P10a", label: "(a)", marks: "10", topic: "size-reduction",
          sub: "Ball mill 2.4 m: critical and operating speed, ball release angle, ball size for finer feed", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`New problem; slides "Critical speed of a ball mill", "speed should be 50–75% of critical", "optimum ball diameter ∝ √feed size"`,
          text: String.raw`(i) Calculate the critical speed and an operating speed of 70% of critical. (ii) At the operating speed, at what angle from the vertical does a ball in contact with the shell leave the wall? (iii) The 80-mm balls were chosen for a 25-mm feed. What ball size would you use if the feed were 9 mm?`,
          solution: String.raw`**Given:** $R = 1.2$ m, $r = 0.04$ m.

**Find:** $n_c$, $n_{op}$, release angle, ball size for 9-mm feed.

1. **(i) Critical speed:**
$$n_c = \frac{1}{2\pi}\sqrt{\frac{g}{R - r}} = \frac{1}{2\pi}\sqrt{\frac{9.81}{1.16}} = 0.463\ \text{r/s} = 27.8\ \text{rpm}$$
(27.3 rpm if the ball radius is neglected.) Operating speed: $0.70(27.8) = 19.4$ rpm.

2. **(ii) Release angle:** the ball leaves the wall where the radial component of its weight equals the centrifugal force (Eq. 29.17):
$$\cos\alpha = \frac{4\pi^2n^2(R - r)}{g} = \left(\frac{n}{n_c}\right)^2 = 0.70^2 = 0.49 \;\Rightarrow\; \alpha = 60.7°$$
measured from the vertical through the mill centre, on the rising side. The ball is carried about 119° round from the bottom (61° short of the top) and then falls (cataracts) across the mill onto the toe of the charge.

3. **(iii) Ball size:** the optimum ball diameter is roughly proportional to the square root of the feed size (slides):
$$d_b = 80\sqrt{\frac{9}{25}} = 80(0.6) = 48\ \text{mm} \;\Rightarrow\; \text{use 50-mm balls}$$
Smaller balls give more contacts per revolution and a finer product but cannot break the largest feed particles.

**Result:** $n_c = 27.8$ rpm; run at about 19–20 rpm; balls leave the wall at about 61° from the vertical; about 50-mm balls for a 9-mm feed.`,
          answer: String.raw`n_c = **27.8 rpm**, operating ≈ **19.4 rpm**; cos α = 0.49 → **α ≈ 61°**; ball ≈ 80√(9/25) = **48 → 50 mm**.` },
        { id: "practice-size-reduction-P10b", label: "(b)", marks: "8", topic: "size-reduction",
          sub: "Ball-mill speed regimes: rolling, cascading, cataracting and centrifuging", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides "Factors influencing the size of the product (g) speed of rotation" and "ball mill operating at the correct speed"`,
          text: String.raw`Describe what happens to the charge if the mill of part (a) is run at (i) 25%, (ii) 70% and (iii) 105% of the critical speed. Why is the optimum speed lower for wet grinding of viscous slurries?`,
          solution: String.raw`| Speed | Motion of the balls | Grinding |
|---|---|---|
| (i) 25% of $n_c$ (about 7 rpm) | the charge is lifted only a little and the balls roll and slide over one another (rolling/cascading at a shallow angle) | gentle attrition only; little impact, low capacity, product fine but rate very low |
| (ii) 70% of $n_c$ (about 19 rpm) | balls are carried up the wall to about 61° short of the top (part (a)) and are thrown in parabolic paths onto the toe of the charge (cataracting) | strong impact on the coarse feed plus attrition in the cascading charge: the best combination, maximum grinding per kWh |
| (iii) 105% of $n_c$ | the outer layer of balls is held against the shell by centrifugal force and rotates with it (centrifuging); at very high speed the whole charge does | almost no relative motion and no fall: very little grinding, power wasted, heavy liner wear at intermediate speeds |

Between (ii) and (iii) the balls are thrown farther and land on the liner rather than on the charge, causing wear (slides: "at still higher speeds they are thrown greater distances and considerable wear of the lining takes place").

**Wet grinding of viscous slurries:** the slurry damps the motion of the balls and lubricates the ball–shell contact, so balls slip and fall from a lower height; a viscous suspension also needs gentler, more cascading action to avoid splashing and excessive liner wear. Hence MSH recommends the lower end of the 65–80% range for wet grinding in viscous suspensions.`,
          answer: String.raw`25%: balls roll/cascade, mainly attrition, low rate; 70%: cataracting, impact + attrition, best grinding; 105%: centrifuging, no relative motion, no grinding. Viscous wet grinding → lower speed (damping, slip).` } ] },

    { id: "practice-size-reduction-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-size-reduction-P11a", label: "(a)", marks: "10", topic: "size-reduction",
          sub: "Free crushing versus choke feeding; open-circuit and closed-circuit operation (sketch)", type: "sketch", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides "Methods of operating crushers: free crushing (closed circuit) and choke feeding (open circuit)"`,
          text: String.raw`Distinguish between free crushing and choke feeding. Sketch open-circuit and closed-circuit arrangements and state when each is used.`,
          solution: String.raw`![Open circuit with choke feeding: one pass through a full crusher. Closed circuit with free crushing: low feed rate, screen or classifier, oversize recycled](fig/practice-size-reduction-P11a-sketch.svg)

| | Free crushing | Choke feeding |
|---|---|---|
| Feed rate | comparatively low, so the product escapes readily | machine kept full; discharge impeded |
| Residence time | short | long |
| Undersize (fines) | little; over-grinding avoided | much; material stays and is re-crushed |
| Energy | low per kg; no cushioning | high, because accumulated product cushions the blows |
| Capacity | high | reduced |
| Circuit | closed circuit: product screened/classified, oversize returned | open circuit: material passes once |
| Use | general practice, especially for large reductions in several units | small quantities, when the whole reduction must be done in one pass |

**Closed-circuit grinding** (generally preferred, slides): the crusher or mill discharges to a screen or air classifier; only undersize leaves as product and oversize is returned. This keeps the residence time short, avoids over-grinding and saves energy; with a ball mill the product can be removed continuously by an air current or through a screen.

**Open-circuit grinding**: one pass, simpler plant, but a wide size range in the product and more fines.`,
          answer: String.raw`Free crushing: low feed rate, short residence, few fines, low energy, used in closed circuit (screen/classifier, oversize recycled). Choke feeding: machine kept full, long residence, much fines, cushioning, high energy, open circuit (single pass) for small tonnages.` },
        { id: "practice-size-reduction-P11b", label: "(b)", marks: "8", topic: "size-reduction",
          sub: "Fracture mechanics of size reduction: crack criterion τ²a/Y, flaw size and loading rate", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides "Mechanism of size reduction" (crack propagation parameter F = τ²a/Y, flaws, rate of application of force)`,
          text: String.raw`Explain the crack-propagation criterion $F = \tau^2a/Y$ for size reduction. Use it to explain why (i) small particles need more energy per unit mass to break, (ii) the applied force should be only slightly above the crushing strength, and (iii) a smaller force can cause fracture if it is held longer.`,
          solution: String.raw`**The criterion.** Large lumps contain cracks (flaws). A crack of length $a$ under stress $\tau$ in a material of Young's modulus $Y$ propagates, and the particle breaks, only when
$$F = \frac{\tau^2a}{Y}$$
exceeds a critical value characteristic of the material. Below it the particle deforms elastically, stores strain energy and gives it back as heat when the load is removed: no size reduction.

**(i) Small particles are stronger.** The stress needed for fracture is $\tau_{crit} \propto \sqrt{Y/a}$. When large particles break, they break along their largest (weakest) flaws; the fragments contain only smaller flaws, so each further step needs a higher stress. Fine particles may contain almost no flaws and approach the theoretical strength. Hence energy per unit mass rises steeply as size falls, and there is a practical grind limit (persistent mode) for a given machine.

**(ii) Force slightly above crushing strength.** Energy stored by elastic deformation below the fracture point is wasted as heat, and a force far above that needed produces excess fines and heat. The most efficient use of energy is a force just exceeding the crushing strength, applied to particles that are free to escape once broken (free crushing). This is why only 0.1–2% of the energy supplied appears as new surface.

**(iii) Time effect.** There is a time lag between reaching the maximum load and fracture while the crack grows to its critical size. A slightly smaller force held long enough can therefore cause fracture; conversely very fast impact (hammer mills, jet mills) needs a higher peak stress.

**Consequences for machines:** coal and other fissured materials break easily at first along existing cracks; brittle crystalline materials break along cleavage planes; tough materials (rubber) absorb energy without crack growth and are hard to grind (slides: a soft but tough material may give more trouble than a hard brittle one).`,
          answer: String.raw`Fracture when τ²a/Y exceeds a critical value; τ_crit ∝ √(Y/a): breaking removes the biggest flaws, so smaller particles need higher stress; force just above crushing strength wastes least elastic energy; cracks need time to grow, so a smaller sustained force can fracture.` } ] },

    { id: "practice-size-reduction-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-size-reduction-P12", label: "", marks: "15", topic: "size-reduction",
        sub: "Selecting crushers and grinders for six duties from feed size and material properties", type: "theory", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Slides "Factors affecting size reduction", "Classification of size-reduction equipment", crusher and grinder slides`,
        text: String.raw`Recommend, with reasons, a size-reduction machine for each duty:

(i) run-of-mine granite, lumps up to 1.2 m, to below 200 mm at 2000 ton/h;
(ii) bituminous coal from 300 mm to below 25 mm for a boiler plant;
(iii) limestone from 25 mm to 75% passing 75 μm for a power-station desulfurization plant;
(iv) talc and pigments to 5–10 μm;
(v) a waxy pharmaceutical that softens at 50 °C, to 100 μm;
(vi) an explosive powder (an oxidizer) to 50 μm.`,
        solution: String.raw`| Duty | Recommended machine | Reasons |
|---|---|---|
| (i) granite 1.2 m → 200 mm, 2000 ton/h | **gyratory crusher** (primary) | hard, abrasive rock needs compression; gyratory is a jaw crusher with a circular jaw, continuous discharge, lower power and maintenance than a jaw crusher, capacities up to about 4500 ton/h; a Blake jaw crusher suits smaller tonnages |
| (ii) coal 300 → 25 mm | **toothed (single- or double-) roll crusher** | coal is soft, friable and fissured; toothed rolls tear as well as crush and give little fines; feed up to about 500 mm, capacity up to about 500 ton/h |
| (iii) limestone 25 mm → 75 μm | **ball mill (wet) in closed circuit with a classifier/hydrocyclone** | tumbling mills are unequalled for intermediate–fine grinding of abrasive minerals; feed up to about 50 mm; wet grinding saves 20–30% power and the slurry is used directly; closed circuit avoids over-grinding |
| (iv) talc, pigments → 5–10 μm | **fluid-energy (jet) mill / microniser**, or a pin mill | ultrafine product (jet mill 1–10 μm; pin mill to about 20 μm, 5 μm with two moving discs); attrition between particles in a turbulent jet, no grinding media, so no metal contamination; built-in classification |
| (v) waxy drug, softens at 50 °C | **hammer mill or pin mill with cooling** (water-jacketed casing or cold-air sweep; cryogenic grinding with liquid N₂ if needed) | heat generated in grinding would melt and smear the material; short residence and good heat removal; cleanable for pharmaceuticals |
| (vi) explosive powder | **ball (or pebble) mill run wet or under an inert atmosphere**, non-sparking (rubber or ceramic) lining and media | explosive materials must be ground wet or in inert gas (slides); a ball mill can be sealed and inerted, runs slowly with no high-speed rotor to give hot spots or sparks |

**General selection factors used:** feed and product size (crusher → intermediate grinder → fine/ultrafine grinder), hardness and abrasiveness (low-speed machines for abrasive materials), structure (fibrous materials need tearing), moisture (5–50% moisture gives caking), stickiness, softening temperature, explosiveness and dustiness, capacity, and whether contamination by metal from the mill is acceptable.`,
        answer: String.raw`(i) gyratory crusher; (ii) toothed roll crusher; (iii) wet ball mill in closed circuit; (iv) fluid-energy (jet) mill or pin mill; (v) cooled hammer/pin mill (or cryogenic); (vi) wet or inert-gas ball/pebble mill with non-sparking lining.` } ] }
  ]
});
