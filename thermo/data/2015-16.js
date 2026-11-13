QB.paper({
  year: "2015-16", date: "04/02/2017", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engineering Examinations 2015-2016, CHE 307 (Chemical Engineering Thermodynamics), 3 hours, 210 marks. Section A: four questions, answer any THREE. Section B: four questions, answer any THREE. The figures in the margin indicate full marks. A data booklet is to be provided; assume any missing data. Use separate scripts for each section. No charts or tables are attached to the paper.`,
  questions: [
    { id: "2015-16-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q1a", label: "(a)", marks: "15",
          topic: "refrigeration", sub: "Absorption refrigeration system: sketch and description",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`With a neat sketch, describe a absorption refrigeration system.`,
          solution: String.raw`![Absorption refrigeration cycle: generator, condenser, expansion valve, evaporator, absorber and solution pump](fig/2015-16-Q1a-sketch.svg)

### Working principle
In an absorption refrigerator the compressor is replaced by an **absorber–pump–generator** loop. Heat, rather than shaft work, lifts the refrigerant from evaporator pressure to condenser pressure.
1. **Evaporator (low P):** liquid refrigerant (NH₃) evaporates at $T_C$, taking heat $Q_C$ from the cold space.
2. **Absorber (low P):** the vapour is absorbed into a weak NH₃–water solution. The absorption is exothermic, and the heat is removed by cooling water at $T_S$.
3. **Pump:** the strong solution is pumped to high pressure. Pumping a liquid takes very little work ($\int V\,dP$ is small).
4. **Generator (high P):** heat $Q_H$ from a source at $T_H$ (steam, waste heat, flue gas, solar) boils NH₃ out of the solution. A rectifier removes the water vapour. The hot weak solution returns to the absorber through a valve, usually via a solution heat exchanger.
5. **Condenser (high P):** NH₃ condenses, rejecting heat at $T_S$.
6. **Expansion valve:** the liquid NH₃ is throttled back to evaporator pressure.

**Thermodynamic limit** (SVNA §9.4): the best performance is a Carnot engine between $T_H$ and $T_S$ driving a Carnot refrigerator between $T_C$ and $T_S$:
$$\frac{Q_H}{Q_C} = \frac{T_H}{T_H - T_S}\cdot\frac{T_S - T_C}{T_C}$$
For example, with $T_H$ = 373 K, $T_S$ = 303 K and $T_C$ = 263 K, $Q_H/Q_C$ = 0.81. Real units have $Q_C/Q_H$ ≈ 0.5–0.7.

### Examples
- **Ammonia–water** absorption refrigeration in cold storage and ice plants, and gas-fired domestic refrigerators (Electrolux / Platen–Munters, which use H₂ as a pressure-equalising gas and need no pump).
- **Water–lithium bromide** absorption chillers for building air conditioning, driven by steam or waste heat (water is the refrigerant, $T_C$ > 0 °C).`,
          answer: String.raw`Absorber + pump + generator replace the compressor: refrigerant (NH₃) evaporates at T_C, is absorbed in weak solution (heat to cooling water), pumped to high P, driven out of the strong solution by heat Q_H in the generator, condensed, throttled; (Q_H/Q_C)min = [T_H/(T_H − T_S)][(T_S − T_C)/T_C]. Examples: NH₃–H₂O cold storage/Electrolux fridge; LiBr–H₂O chillers.` },
        { id: "2015-16-Q1b", label: "(b)", marks: "20",
          topic: "refrigeration", sub: "Ammonia vapour-compression cycle cooling toluene from 100 °C to 20 °C: circulation rate",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Fifty kmol/h of liquid toluene at 1.2 bar is cooled from 100°C to 20°C. A vapor compression refrigeration cycle is used for the purpose. Ammonia is the working fluid. Condensation in the cycle is affected by an air-cooled fin-fan heat exchanger for which the air temperature may be assumed essentially constant at 20°C. Determine the circulation rate of ammonia.

Data for ammonia:

$$\Delta H^{lv} = 23.34\ \mathrm{kJ/mol}$$

$$\ln P^{Sat} = 45.3 - \frac{4104.6}{T} - 5.14T + 615\frac{P^{Sat}}{T^2}$$

where $P^{Sat}$ in bars and T in Kelvin.`,
          solution: String.raw`**Given:** 50 kmol/h of liquid toluene at 1.2 bar, cooled from 100 °C to 20 °C; ammonia vapour-compression cycle; condenser cooled by air at 20 °C; $\Delta H^{lv}$(NH₃) = 23.34 kJ/mol; the ammonia vapour-pressure equation.

**Find:** the ammonia circulation rate.

**Assumptions:**
- **Approach temperatures of 10 K** in both exchangers. Ammonia evaporates at $T_C$ = 10 °C (283.15 K), 10 K below the coldest toluene (20 °C), and condenses at $T_H$ = 30 °C (303.15 K), 10 K above the air.
- Saturated vapour leaves the evaporator and saturated liquid leaves the condenser. The throttle is isenthalpic.
- $\Delta H^{lv}$ = 23.34 kJ/mol is used as given, taken as independent of T. (It is the value at the normal boiling point; the real value at 10 °C is lower, so the circulation rate below is a slight underestimate.)
- Liquid heat capacities from SVNA Table C.3 (data booklet). Toluene: $C_P/R = 15.133 + 6.79\times10^{-3}T + 16.35\times10^{-6}T^2$. Ammonia: $C_P/R = 22.626 - 100.75\times10^{-3}T + 192.71\times10^{-6}T^2$.
- The printed vapour-pressure term "−5.14T" is a misprint for **−5.14 ln T**. With T itself the term would be about −1455 at 283 K, which is impossible. The equation used is
$$\ln P^{sat} = 45.3 - \frac{4104.6}{T} - 5.14\ln T + 615\frac{P^{sat}}{T^2}$$
  At 239.8 K it gives 1.03 bar, close to ammonia's normal boiling point, which confirms the reading.

1. **Refrigeration load (toluene):**
$$\dot n_{tol} = \frac{50\,000}{3600} = 13.89\ \mathrm{mol/s}, \qquad \int_{293.15}^{373.15}\frac{C_P}{R}dT = 15.133(80) + \frac{6.79\times10^{-3}}{2}(373.15^2 - 293.15^2) + \frac{16.35\times10^{-6}}{3}(373.15^3 - 293.15^3) = 1537.5\ \mathrm K$$
$$|\dot Q_C| = 13.89(8.314)(1537.5) = 177.5\times10^3\ \mathrm{J/s} = 177.5\ \mathrm{kW}$$
   The mean $C_P$ is 159.8 J/(mol·K).

2. **Cycle pressures** (vapour-pressure equation, solved by iteration because $P^{sat}$ appears on both sides):
   - Evaporator at 283.15 K: $P^{sat}$ = **6.24 bar**.
   - Condenser at 303.15 K: $P^{sat}$ = **11.80 bar**.
   - Compression ratio 1.9.

3. **Refrigeration effect per mole of ammonia.** State 1 (after the throttle) has $H_1 = H_4$ = saturated liquid at 30 °C. State 2 is saturated vapour at 10 °C. With saturated liquid at 10 °C as reference:
$$H_2 - H_1 = \Delta H^{lv}(10\ °\mathrm C) - \int_{283.15}^{303.15}C_P^l\,dT = 23\,340 - 8.314(193.2) = 23\,340 - 1606 = 21\,734\ \mathrm{J/mol}$$
   The 1606 J/mol is the part of the latent heat used to cool the liquid itself on throttling (flash), about 7% of the vaporised mass.

4. **Circulation rate:**
$$\dot n_{NH_3} = \frac{|\dot Q_C|}{H_2 - H_1} = \frac{177\,540}{21\,734} = 8.17\ \mathrm{mol/s}$$
$$= 29.4\ \mathrm{kmol/h} = 0.139\ \mathrm{kg/s}\ (M = 17.03)$$

5. **Remark (not asked).** The Carnot ω between 283.15 and 303.15 K is 14.2, so the minimum compressor power is about 177.5/14.2 = 12.5 kW. A real compressor needs more. With a smaller approach (say 5 K) the pressures change, but the circulation rate hardly does, because it is set mainly by $\Delta H^{lv}$.

**Result:** about 8.2 mol/s (29.4 kmol/h, 0.14 kg/s) of ammonia, evaporating at 10 °C (6.24 bar) and condensing at 30 °C (11.8 bar).`,
          answer: String.raw`Q_C = 13.89 mol/s × 8.314 × 1537.5 K = 177.5 kW (toluene, SVNA C.3 Cp). Assumed 10 K approaches: evaporate 10 °C (6.24 bar), condense 30 °C (11.8 bar) [printed "5.14T" read as 5.14 ln T]; refrigeration effect = 23 340 − 1606 = 21 734 J/mol ⇒ ṅ_NH₃ = 8.17 mol/s ≈ 29.4 kmol/h (0.139 kg/s).` }
      ] },
    { id: "2015-16-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q2a", label: "(a)", marks: "5+5=10",
          topic: "refrigeration", sub: "Refrigerator with 1.5 kW for 4 kJ/s: COP, heat rejected and lowest possible temperature",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A refrigeration system requires 1.5 kW of power for a refrigeration rate of 4 kJ/s.

(i) What is COP and how much heat is rejected in the condenser?

(ii) If heat rejection is at 40°C, what is the lowest temperature the system can possibly maintain?`,
          solution: String.raw`**Given:** W = 1.5 kW; $|Q_C|$ = 4 kJ/s; heat rejected at 40 °C (313.15 K).

**Find:** (i) COP and the heat rejected; (ii) the lowest temperature the system can possibly maintain.

**Assumptions:** steady cyclic operation (first law over a cycle). Part (ii) is limited by the Carnot cycle.

1. **(i) Coefficient of performance:**
$$\omega = \frac{|Q_C|}{W} = \frac{4}{1.5} = \mathbf{2.67}$$

2. **(i) Heat rejected** (energy balance on the cycle):
$$|Q_H| = |Q_C| + W = 4 + 1.5 = \mathbf{5.5\ kJ/s}$$

3. **(ii) Lowest possible temperature.** No refrigerator can beat a Carnot refrigerator working between the same temperatures, $\omega \le T_C/(T_H - T_C)$. The lowest $T_C$ this machine could possibly maintain is the one at which its ω equals the Carnot value:
$$\frac{T_C}{313.15 - T_C} = 2.667 \;\Rightarrow\; T_C = \frac{2.667(313.15)}{3.667} = \mathbf{227.7\ K\ (-45.4\ °C)}$$
   Any lower $T_C$ would need ω > Carnot, which violates the second law. A real system with irreversibilities would reach a higher $T_C$.

**Result:** (i) ω = 2.67, $|Q_H|$ = 5.5 kJ/s; (ii) $T_C$ ≥ 227.7 K (−45.4 °C).`,
          answer: String.raw`(i) ω = 4/1.5 = 2.67; |Q_H| = 4 + 1.5 = 5.5 kJ/s. (ii) Carnot limit T_C/(313.15 − T_C) = 2.667 ⇒ T_C,min = 227.7 K (−45.4 °C).` },
        { id: "2015-16-Q2b", label: "(b)", marks: "15",
          topic: "reaction-equilibria", sub: "Relation between the standard Gibbs-energy change and the equilibrium constant",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Find the relation between standard Gibbs-Energy change and the equilibrium constant.`,
          solution: String.raw`1. **Criterion of equilibrium.** For a closed system at constant T and P, $(dG^t)_{T,P} \le 0$, and at equilibrium $G^t$ is a minimum. For a single reaction $\sum_i\nu_iA_i = 0$, the reaction coordinate ε gives $dn_i = \nu_i\,d\varepsilon$. The fundamental relation $d(nG) = (nV)\,dP - (nS)\,dT + \sum_i\mu_i\,dn_i$ then gives
$$\left[\frac{\partial(nG)}{\partial\varepsilon}\right]_{T,P} = \sum_i\nu_i\mu_i = 0 \quad\text{at equilibrium}$$

2. **Chemical potential in terms of fugacity.** At constant T, $d\mu_i = RT\,d\ln\hat f_i$. Integrating from the **standard state** of i (pure i at T and the standard pressure $P^\circ$; Gibbs energy $G_i^\circ$, fugacity $f_i^\circ$) gives
$$\mu_i = G_i^\circ + RT\ln\frac{\hat f_i}{f_i^\circ}$$

3. **Substitute** into $\sum\nu_i\mu_i = 0$:
$$\sum_i\nu_iG_i^\circ + RT\sum_i\nu_i\ln\frac{\hat f_i}{f_i^\circ} = 0 \;\Rightarrow\; \ln\prod_i\left(\frac{\hat f_i}{f_i^\circ}\right)^{\nu_i} = \frac{-\sum_i\nu_iG_i^\circ}{RT}$$

4. **Define** the standard Gibbs-energy change of reaction, $\Delta G^\circ \equiv \sum_i\nu_iG_i^\circ = \sum_i\nu_i\Delta G^\circ_{f_i}$, and the equilibrium constant
$$\boxed{K \equiv \prod_i\left(\frac{\hat f_i}{f_i^\circ}\right)^{\nu_i} = \exp\left(\frac{-\Delta G^\circ}{RT}\right), \qquad \ln K = \frac{-\Delta G^\circ}{RT}}$$

5. **Comments.**
   - $G_i^\circ$ depends only on T, because $P^\circ$ is fixed. So ΔG° and **K are functions of T only**, independent of the equilibrium pressure and composition.
   - ΔG° < 0 gives K > 1 (products favoured); ΔG° > 0 gives K < 1. For example, ΔG° = +10 kJ/mol at 298 K gives K = 0.018.
   - The temperature dependence follows from Gibbs–Helmholtz: $d\ln K/dT = \Delta H^\circ/RT^2$ (van 't Hoff).
   - For gases ($f_i^\circ = P^\circ$, $\hat f_i = y_i\hat\phi_iP$): $\prod(y_i\hat\phi_i)^{\nu_i} = (P/P^\circ)^{-\nu}K$. For liquids: $\prod(x_i\gamma_i)^{\nu_i} \approx K$.`,
          answer: String.raw`Σνᵢμᵢ = 0 at equilibrium (min Gᵗ at const T, P); μᵢ = Gᵢ° + RT ln(f̂ᵢ/fᵢ°) ⇒ Π(f̂ᵢ/fᵢ°)^νᵢ = exp(−ΔG°/RT) ≡ K, i.e. ln K = −ΔG°/RT with ΔG° = ΣνᵢΔG°fᵢ; K = f(T) only; ΔG° < 0 ⇔ K > 1.` },
        { id: "2015-16-Q2c", label: "(c)", marks: "10",
          topic: "reaction-equilibria", sub: "Ideal-solution liquid-phase equilibrium: ∏xᵢ^νᵢ = K",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the relationship of $\prod_i(x_i)^{\nu_i} = K$.`,
          solution: String.raw`1. **Equilibrium criterion** for a reaction at constant T and P: $\sum_i\nu_i\mu_i = 0$. With $\mu_i = G_i^\circ + RT\ln(\hat f_i/f_i^\circ)$:
$$\prod_i\left(\frac{\hat f_i}{f_i^\circ}\right)^{\nu_i} = \exp\frac{-\Delta G^\circ}{RT} = K$$

2. **Liquid phase:** $\hat f_i = \gamma_ix_if_i$, where $f_i$ is the fugacity of pure liquid i at T and P. The standard state is pure liquid i at T and $P^\circ$, with fugacity $f_i^\circ$. So
$$\frac{\hat f_i}{f_i^\circ} = \gamma_ix_i\frac{f_i}{f_i^\circ}$$

3. **Pressure correction** (pure liquid, $d\ln f_i = V_i\,dP/RT$, $V_i$ constant):
$$\frac{f_i}{f_i^\circ} = \exp\frac{V_i(P - P^\circ)}{RT} \;\Rightarrow\; \prod_i(\gamma_ix_i)^{\nu_i} = K\exp\left[\frac{(P^\circ - P)}{RT}\sum_i\nu_iV_i\right]$$

4. **Moderate pressure:** $V_i$ is small, so the exponential ≈ 1 unless P is very high. Then $\prod_i(\gamma_ix_i)^{\nu_i} = K$.

5. **Ideal solution:** $\gamma_i = 1$, so
$$\boxed{\prod_i x_i^{\nu_i} = K}$$

**Assumptions:**
1. Constant T and P; equilibrium reached; a single reaction (or each independent reaction).
2. All species in a single liquid phase.
3. Standard state: pure liquid at T and $P^\circ$ = 1 bar, so K depends on T only.
4. Liquid molar volumes constant (incompressible) and small; P not far from $P^\circ$, so the Poynting term ≈ 1.
5. **Ideal solution** (Lewis–Randall rule): $\gamma_i = 1$ for all species, i.e. chemically similar species and no strong interactions.
6. ΔG° evaluated for the liquid species.`,
          answer: String.raw`Σνᵢμᵢ = 0 ⇒ Π(f̂ᵢ/fᵢ°)^νᵢ = K; f̂ᵢ/fᵢ° = γᵢxᵢ exp[Vᵢ(P − P°)/RT] ⇒ Π(γᵢxᵢ)^νᵢ = K exp[(P° − P)ΣνᵢVᵢ/RT] → (Poynting ≈ 1, ideal solution γᵢ = 1) Πxᵢ^νᵢ = K. Assumptions: const T, P; single liquid phase; pure-liquid standard state at P°; incompressible, small Vᵢ, moderate P; ideal solution.` }
      ] },
    { id: "2015-16-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q3", label: "", marks: "35",
          topic: "reaction-equilibria", sub: "Coal gasifier with steam and air at 20 bar: equilibrium gas composition at 1000 K and 1500 K",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A bed of coal (assume pure carbon) in a coal gasifier is fed with steam and air, and produces a gas stream containing H₂, CO, O₂, H₂O, CO₂ and N₂. If the feed to the gasifier consists of 1 mol of steam and 2.38 mole of air, calculate the equilibrium composition of the gas stream at P = 20 bar for temperature of 1000 and 1500 K.`,
          solution: String.raw`**Given:** carbon (excess solid) fed with 1 mol H₂O(g) and 2.38 mol air (0.50 mol O₂ + 1.88 mol N₂); P = 20 bar; T = 1000 K and 1500 K. Gas species: H₂, CO, O₂, H₂O, CO₂, N₂ (SVNA Example 13.13 problem).

**Find:** the equilibrium gas composition at each T.

**Assumptions:**
- Ideal gases; C is pure graphite with activity 1, present in excess (it does not appear in the K's).
- $\Delta G^\circ_f$ at T computed from SVNA App. C: $\Delta H^\circ_{f298}$ and $\Delta G^\circ_{f298}$ from Table C.4, $C_P$ constants from Tables C.1/C.2, with the K = K₀K₁K₂ (IDCPH/IDCPS) method.
- At 1000 K this gives −192.57 (H₂O), −200.21 (CO) and −395.94 kJ/mol (CO₂), within 0.1% of the tabulated −192.42, −200.24 and −395.79 used in the other papers.

1. **Formation reactions and K's** ($K = e^{-\Delta G^\circ/RT}$):

| Reaction | ΔG° (1000 K) | K (1000 K) | ΔG° (1500 K) | K (1500 K) |
|---|---|---|---|---|
| (a) C + ½O₂ → CO | −200 214 | 2.874 × 10¹⁰ | −243 865 | 3.108 × 10⁸ |
| (b) C + O₂ → CO₂ | −395 938 | 4.813 × 10²⁰ | −396 586 | 6.469 × 10¹³ |
| (c) H₂ + ½O₂ → H₂O | −192 571 | 1.146 × 10¹⁰ | −164 278 | 5.259 × 10⁵ |

   (ΔG° in J/mol.) The huge K's mean that **free O₂ is essentially absent** at equilibrium.

2. **Eliminate O₂** by combining the reactions into two independent O₂-free reactions:
   - (I) $\mathrm{C + H_2O \rightleftharpoons CO + H_2}$ = (a) − (c): $K_I = K_a/K_c$ = **2.507** (1000 K), **591** (1500 K).
   - (II) $\mathrm{C + CO_2 \rightleftharpoons 2CO}$ = 2(a) − (b): $K_{II} = K_a^2/K_b$ = **1.716** (1000 K), **1493** (1500 K).

   With O₂ ≈ 0, the 0.5 mol O₂ is first taken as burned to 0.5 mol CO₂ (C + O₂ → CO₂); reactions I and II then adjust the mixture. With extents $\varepsilon_I$, $\varepsilon_{II}$:

| Species | n |
|---|---|
| H₂O | $1 - \varepsilon_I$ |
| H₂ | $\varepsilon_I$ |
| CO | $\varepsilon_I + 2\varepsilon_{II}$ |
| CO₂ | $0.5 - \varepsilon_{II}$ |
| N₂ | 1.88 |
| total | $n = 3.38 + \varepsilon_I + \varepsilon_{II}$ |

3. **Equilibrium equations** (ν = +1 for each, P/P° = 20):
$$K_I = \frac{y_{CO}y_{H_2}}{y_{H_2O}}\left(\frac{P}{P^\circ}\right) = \frac{(\varepsilon_I + 2\varepsilon_{II})\varepsilon_I}{(1 - \varepsilon_I)\,n}(20)$$
$$K_{II} = \frac{y_{CO}^2}{y_{CO_2}}\left(\frac{P}{P^\circ}\right) = \frac{(\varepsilon_I + 2\varepsilon_{II})^2}{(0.5 - \varepsilon_{II})\,n}(20)$$
   Solved simultaneously (Newton). The O₂ left over follows from reaction (b), for which ν = 0: $y_{O_2} = y_{CO_2}/K_b$.

4. **Solution at 1000 K:** $\varepsilon_I$ = 0.5309 and $\varepsilon_{II}$ = −0.0518. The Boudouard reaction runs slightly backwards at 20 bar, depositing a little carbon. n = 3.859 mol.

5. **Solution at 1500 K:** $\varepsilon_I$ = 0.9865 and $\varepsilon_{II}$ = 0.4893 (both nearly complete); n = 4.856 mol.

6. **Equilibrium compositions:**

| | $y_{H_2}$ | $y_{CO}$ | $y_{H_2O}$ | $y_{CO_2}$ | $y_{N_2}$ | $y_{O_2}$ |
|---|---|---|---|---|---|---|
| 1000 K | 0.1376 | 0.1108 | 0.1215 | 0.1430 | 0.4871 | ≈ 3 × 10⁻²² |
| 1500 K | 0.2032 | 0.4047 | 0.0028 | 0.0022 | 0.3872 | ≈ 3 × 10⁻¹⁷ |

   Checks: H: $n_{H_2} + n_{H_2O}$ = 1 ✓. O: $n_{H_2O} + n_{CO} + 2n_{CO_2}$ = 2 ✓ (1000 K: 0.469 + 0.427 + 1.104 = 2.000). Carbon gasified: 0.98 mol at 1000 K, 1.98 mol at 1500 K.

7. **Interpretation.** Both reactions I and II are endothermic, so raising T from 1000 to 1500 K drives them to completion. The product becomes almost pure CO + H₂ (plus N₂): a producer/synthesis gas with about 61% combustibles, against 25% at 1000 K. At 1000 K much H₂O and CO₂ remain unconverted. The high pressure (20 bar) opposes reactions I and II (ν = +1), which is why 1000 K gives such low conversion. Oxygen is fully consumed at both temperatures.

**Result:** at 1000 K, y = 0.138 H₂, 0.111 CO, 0.122 H₂O, 0.143 CO₂, 0.487 N₂. At 1500 K, y = 0.203 H₂, 0.405 CO, 0.003 H₂O, 0.002 CO₂, 0.387 N₂. O₂ is negligible in both.`,
          answer: String.raw`O₂-free reactions C + H₂O ⇌ CO + H₂ (K = 2.507 at 1000 K, 591 at 1500 K) and C + CO₂ ⇌ 2CO (K = 1.716, 1493) at P/P° = 20 (ΔG°f from SVNA App. C). 1000 K: y_H₂ 0.138, y_CO 0.111, y_H₂O 0.122, y_CO₂ 0.143, y_N₂ 0.487; 1500 K: 0.203, 0.405, 0.003, 0.002, 0.387; y_O₂ ≈ 0 (10⁻²²/10⁻¹⁷).` }
      ] },
    { id: "2015-16-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q4a", label: "(a)", marks: "15",
          topic: "solution-applications", sub: "DEW T block diagram with the gamma–phi formulation and its equations",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Write a block diagram for the calculation of DEW T, by using Gamma-Phi formulation. Write necessary equations clearly.`,
          solution: String.raw`**Problem:** given P and the vapour composition $\{y_i\}$, find the dew-point temperature T and the composition $\{x_i\}$ of the first drop of liquid (SVNA §14.1). Neither T nor $\{x_i\}$ is known, and $\gamma_i$ depends on both, so this is the most iterative of the four bubble/dew calculations.

### Necessary equations
1. **Gamma/phi formulation of VLE:**
$$y_i\Phi_iP = x_i\gamma_iP_i^{sat} \;\Rightarrow\; x_i = \frac{y_i\Phi_iP}{\gamma_iP_i^{sat}}$$
2. **Σx = 1:**
$$P = \frac{1}{\sum_i y_i\Phi_i/(\gamma_iP_i^{sat})}$$
   For one chosen species j, multiply by $P_j^{sat}$:
$$P_j^{sat} = P\sum_i\frac{y_i\Phi_i}{\gamma_i}\frac{P_j^{sat}}{P_i^{sat}}$$
   The ratio $P_j^{sat}/P_i^{sat}$ depends only weakly on T, which makes the iteration stable.
3. **Antoine equation:** $\ln P_i^{sat} = A_i - \dfrac{B_i}{T + C_i}$, and inverted $T = \dfrac{B_j}{A_j - \ln P_j^{sat}} - C_j$. The starting values are $T_i^{sat} = B_i/(A_i - \ln P) - C_i$.
4. **Φ factor:**
$$\Phi_i = \frac{\hat\phi_i}{\phi_i^{sat}}\exp\left[\frac{-V_i^l(P - P_i^{sat})}{RT}\right]$$
5. **Vapour fugacity coefficients** from the virial equation (two terms):
$$\ln\hat\phi_k = \frac{P}{RT}\left[B_{kk} + \frac12\sum_i\sum_j y_iy_j(2\delta_{ik} - \delta_{ij})\right], \qquad \delta_{ik} = 2B_{ik} - B_{ii} - B_{kk}, \qquad \ln\phi_i^{sat} = \frac{B_{ii}P_i^{sat}}{RT}$$
   with $B_{ij}$ from the Pitzer correlation, $B_{ij}P_{cij}/RT_{cij} = B^0 + \omega_{ij}B^1$.
6. **Activity coefficients** $\gamma_i(T, \{x_i\})$ from a $G^E$ model, e.g. Wilson: $\ln\gamma_1 = -\ln(x_1 + x_2\Lambda_{12}) + x_2\left(\frac{\Lambda_{12}}{x_1 + x_2\Lambda_{12}} - \frac{\Lambda_{21}}{x_2 + x_1\Lambda_{21}}\right)$ (or Margules, van Laar, NRTL).

### Block diagram
![DEW T flowchart with the gamma–phi formulation](fig/2015-16-Q4a-sketch.svg)

1. **Read** P, $\{y_i\}$; Antoine constants, $G^E$ parameters, $T_c, P_c, \omega$ (for $B_{ij}$), $V_i^l$.
2. **Set** all $\Phi_i = 1$, $\gamma_i = 1$. Calculate $T_i^{sat}$ and $T = \sum_i y_iT_i^{sat}$.
3. **Evaluate** $P_i^{sat}(T)$; calculate $P_j^{sat} = P\sum(y_i\Phi_i/\gamma_i)(P_j^{sat}/P_i^{sat})$ and T from Antoine for j.
4. **Evaluate** $P_i^{sat}(T)$ and $\Phi_i$ (via $\hat\phi_i$ at T, P, $\{y\}$, and $\phi_i^{sat}$).
5. **Calculate** $x_i = y_i\Phi_iP/(\gamma_iP_i^{sat})$; normalize $x_i$; evaluate $\gamma_i(T, \{x\})$.
6. **Recalculate** $P_j^{sat}$ and T. If the γ's are still changing, repeat steps 5–6 at this T (inner loop).
7. **Test** $|\delta T| < \varepsilon$. If no, return to step 4; if yes, print T and $\{x_i\}$.

At low pressure ($\Phi_i = 1$) this reduces to the modified-Raoult DEW T, where only the γ–T loop remains.`,
          answer: String.raw`Equations: xᵢ = yᵢΦᵢP/(γᵢPᵢˢᵃᵗ); Pⱼˢᵃᵗ = PΣ(yᵢΦᵢ/γᵢ)(Pⱼˢᵃᵗ/Pᵢˢᵃᵗ); T = Bⱼ/(Aⱼ − ln Pⱼˢᵃᵗ) − Cⱼ; Φᵢ = (φ̂ᵢ/φᵢˢᵃᵗ)exp[−Vᵢˡ(P − Pᵢˢᵃᵗ)/RT] (virial φ̂); γᵢ from Gᴱ model. Loop: Φ = γ = 1, T = ΣyᵢTᵢˢᵃᵗ → T → Φ → x (normalize), γ → T … until δT < ε.` },
        { id: "2015-16-Q4b", label: "(b)", marks: "10+10=20",
          topic: "reaction-equilibria", sub: "Propane cracking C₃H₈ → C₂H₄ + CH₄ at 1 bar: conversion at 625 K and T for 85%",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`For the cracking reaction,

$$\mathrm{C_3H_8(g) \rightarrow C_2H_4(g) + CH_4(g)}$$

The equilibrium conversion is negligible at 300 K, but becomes close to equilibrium at temperature above 500 K. For a pressure of 1 bar, determine the

(i) fractional conversion of propane at 625 K. (10)

(ii) temperature at which fractional conversion is 85%. (10)`,
          solution: String.raw`**Given:** $\mathrm{C_3H_8(g) \rightarrow C_2H_4(g) + CH_4(g)}$, P = 1 bar, pure propane feed.

**Find:** (i) the equilibrium conversion at 625 K; (ii) T for 85% conversion.

**Assumptions:** ideal gases; data from SVNA App. C. Table C.4 (J/mol):

| | ΔH°f298 | ΔG°f298 |
|---|---|---|
| C₃H₈ | −104 680 | −24 290 |
| C₂H₄ | 52 510 | 68 460 |
| CH₄ | −74 520 | −50 460 |

Table C.1 ($C_P^{ig}/R = A + BT + CT^2$):

| | A | 10³B | 10⁶C |
|---|---|---|---|
| CH₄ | 1.702 | 9.081 | −2.164 |
| C₂H₄ | 1.424 | 14.394 | −4.392 |
| C₃H₈ | 1.213 | 28.785 | −8.824 |

1. **Standard changes at 298.15 K:**
$$\Delta H_0^\circ = 52510 - 74520 + 104680 = 82\,670\ \mathrm{J/mol}, \qquad \Delta G_0^\circ = 68460 - 50460 + 24290 = 42\,290\ \mathrm{J/mol}$$
   $K_{298} = e^{-42290/(8.314 \times 298.15)} = 3.9\times10^{-8}$: negligible conversion at room temperature, as stated. ΔA = 1.913, ΔB = −5.310 × 10⁻³, ΔC = 2.268 × 10⁻⁶.

2. **ΔG° at T** (SVNA eq. 13.18):
$$\Delta G^\circ = \Delta H_0^\circ + R\int_{T_0}^T\frac{\Delta C_P^\circ}{R}dT - T\left[\frac{\Delta H_0^\circ - \Delta G_0^\circ}{T_0} + R\int_{T_0}^T\frac{\Delta C_P^\circ}{R}\frac{dT}{T}\right]$$
   At 625 K: $\int\Delta C_P^\circ/R\,dT$ = −11.30 K, so ΔH° = 82 576 J/mol. $\int(\Delta C_P^\circ/R)\,dT/T$ = 0.0225, so ΔS° = 135.62 J/(mol·K).
$$\Delta G^\circ_{625} = 82576 - 625(135.62) = -2188\ \mathrm{J/mol}, \qquad K = e^{2188/(8.314 \times 625)} = 1.524$$

3. **Equilibrium relation.** Basis 1 mol C₃H₈, extent ε: $y_{C_3H_8} = \dfrac{1 - \varepsilon}{1 + \varepsilon}$, $y_{C_2H_4} = y_{CH_4} = \dfrac{\varepsilon}{1 + \varepsilon}$, ν = +1:
$$\frac{y_{C_2H_4}y_{CH_4}}{y_{C_3H_8}} = \frac{\varepsilon^2}{1 - \varepsilon^2} = K\left(\frac{P}{P^\circ}\right)^{-1} = K \;\Rightarrow\; \varepsilon = \sqrt{\frac{K}{1 + K}}$$

4. **(i) At 625 K:**
$$\varepsilon = \sqrt{\frac{1.524}{2.524}} = \mathbf{0.777}$$
   Fractional conversion 77.7%: y(C₃H₈) = 0.125, y(C₂H₄) = y(CH₄) = 0.437.

5. **(ii) 85% conversion:**
$$K = \frac{0.85^2}{1 - 0.85^2} = 2.604 \;\Rightarrow\; \Delta G^\circ = -RT\ln K$$
   Solve ΔG°(T) = −RT ln 2.604 by trial: T = 640 K gives K ≈ 2.17; 650 K gives K ≈ 2.82. Interpolating and checking: **T = 646.8 K**, where ΔG° = −5146 J/mol, K = 2.604.
   Check with the approximate van 't Hoff equation from 625 K (ΔH° ≈ 82.5 kJ/mol): $\ln(2.604/1.524) = 0.5357 = (82\,500/8.314)(1/625 - 1/T)$ gives T = 646.8 K ✓.

**Result:** (i) 77.7% conversion at 625 K (K = 1.52); (ii) 85% conversion at T ≈ 647 K (K = 2.60). The reaction is endothermic, so conversion rises steeply with T.`,
          answer: String.raw`ΔH°₂₉₈ = 82 670, ΔG°₂₉₈ = 42 290 J/mol (K₂₉₈ = 3.9×10⁻⁸). ε²/(1 − ε²) = K at 1 bar. (i) 625 K: ΔG° = −2188 J/mol, K = 1.524 ⇒ ε = 0.777 (77.7%). (ii) 85%: K = 2.604 ⇒ T = 646.8 K.` }
      ] },
    { id: "2015-16-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q5a", label: "(a)", marks: "15",
          topic: "vle-intro", sub: "Raoult's-law t-x-y diagram for benzene/ethylbenzene at 90 kPa",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Prepare a t-x-y diagram for a pressure of 90 kPa for Benzene (1)/Ethylbenzene (2) system. Assume the Raoult's law is valid. The parameter for Antoine equation

| | A | B | C |
|---|---|---|---|
| Benzene | 13.86 | 2774 | 220 |
| Ethylbenzene | 14.00 | 3279 | 213 |`,
          solution: String.raw`**Given:** P = 90 kPa; Antoine $\ln P^{sat}/\mathrm{kPa} = A - B/(t/°\mathrm{C} + C)$ with the constants above. (The units are not printed. They are taken as kPa and °C, as in SVNA Table B.2; then benzene boils at 80.1 °C and ethylbenzene at 136.2 °C at 101.3 kPa, as they should.)

**Find:** t–$x_1$–$y_1$ at 90 kPa.

**Assumptions:** Raoult's law $y_iP = x_iP_i^{sat}$ (ideal liquid solution of two similar aromatics, ideal-gas vapour at 90 kPa).

1. **Temperature range** (pure-species boiling points at 90 kPa), $t_i^{sat} = B_i/(A_i - \ln P) - C_i$ with $\ln 90 = 4.4998$:
$$t_1^{sat} = \frac{2774}{13.86 - 4.4998} - 220 = 76.36\ °\mathrm C, \qquad t_2^{sat} = \frac{3279}{14.00 - 4.4998} - 213 = 132.15\ °\mathrm C$$

2. **Equations at each t between them.** Adding $y_1P = x_1P_1^{sat}$ and $y_2P = x_2P_2^{sat}$ gives $P = x_1P_1^{sat} + (1 - x_1)P_2^{sat}$, so
$$x_1 = \frac{P - P_2^{sat}}{P_1^{sat} - P_2^{sat}}, \qquad y_1 = \frac{x_1P_1^{sat}}{P}$$
   For example, at t = 100 °C: $\ln P_1^{sat} = 13.86 - 2774/320 = 5.1913$, so $P_1^{sat}$ = 179.69 kPa; $\ln P_2^{sat} = 14.00 - 3279/313 = 3.5240$, so $P_2^{sat}$ = 33.92 kPa. Then
$$x_1 = \frac{90 - 33.92}{179.69 - 33.92} = 0.3847, \qquad y_1 = \frac{0.3847 \times 179.69}{90} = 0.7681$$

3. **Table:**

| t / °C | $P_1^{sat}$ / kPa | $P_2^{sat}$ / kPa | $x_1$ | $y_1$ |
|---|---|---|---|---|
| 76.36 | 90.00 | 14.41 | 1.0000 | 1.0000 |
| 80 | 100.82 | 16.59 | 0.8715 | 0.9763 |
| 85 | 117.32 | 20.02 | 0.7192 | 0.9375 |
| 90 | 135.86 | 24.00 | 0.5900 | 0.8907 |
| 95 | 156.59 | 28.61 | 0.4797 | 0.8346 |
| 100 | 179.69 | 33.92 | 0.3847 | 0.7681 |
| 105 | 205.33 | 39.99 | 0.3025 | 0.6900 |
| 110 | 233.68 | 46.91 | 0.2307 | 0.5990 |
| 115 | 264.91 | 54.76 | 0.1677 | 0.4935 |
| 120 | 299.22 | 63.63 | 0.1119 | 0.3721 |
| 125 | 336.78 | 73.61 | 0.0623 | 0.2330 |
| 130 | 377.77 | 84.79 | 0.0178 | 0.0746 |
| 132.15 | 396.51 | 90.00 | 0.0000 | 0.0000 |

4. **t–x–y diagram:** plot t against $x_1$ (bubble-point curve, lower) and against $y_1$ (dew-point curve, upper).

![t-x-y diagram for benzene/ethylbenzene at 90 kPa from Raoult's law](fig/2015-16-Q5a-sol.svg)

   Below the bubble curve the mixture is subcooled liquid; above the dew curve it is superheated vapour; between them liquid and vapour coexist, joined by horizontal tie lines. The wide lens (relative volatility about 4.5–6) shows that benzene and ethylbenzene are easy to separate by distillation, and there is no azeotrope.

**Result:** the boiling range at 90 kPa runs from 76.4 °C (pure benzene) to 132.2 °C (pure ethylbenzene); the table and figure give the bubble and dew curves.`,
          answer: String.raw`t₁ˢᵃᵗ = 76.36 °C, t₂ˢᵃᵗ = 132.15 °C at 90 kPa; x₁ = (P − P₂ˢᵃᵗ)/(P₁ˢᵃᵗ − P₂ˢᵃᵗ), y₁ = x₁P₁ˢᵃᵗ/P, e.g. 100 °C: x₁ = 0.385, y₁ = 0.768; 90 °C: 0.590, 0.891; 120 °C: 0.112, 0.372.` },
        { id: "2015-16-Q5b", label: "(b)", marks: "15",
          topic: "vle-intro", sub: "Dilute solution of 1 in 2 at 25 °C and 1 bar: x₁ and y₁ from Henry's and Raoult's laws",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A concentrated binary solution containing mostly species 2 (but $x_2 \ne 1$) is in equilibrium with a vapor phase containing both species 1 and 2. The pressure of this two phase system is 1 bar. The temperature is 25°C. Determine the good estimate of $x_1$ and $y_1$. $H_1$ = 200 bar and $P_2^{Sat}$ = 0.1 bar. State and justify all assumptions.`,
          solution: String.raw`**Given:** T = 25 °C, P = 1 bar; Henry's constant of species 1 in 2, $\mathcal H_1$ = 200 bar; $P_2^{sat}$ = 0.1 bar; the liquid is mostly species 2.

**Find:** $x_1$, $y_1$.

**Assumptions and justification:**
- **Ideal-gas vapour:** P = 1 bar is low, so $\hat\phi_i \approx 1$ and the vapour fugacity of i is its partial pressure $y_iP$.
- **Species 1 (dilute solute) obeys Henry's law,** $y_1P = x_1\mathcal H_1$. Henry's law is the limiting law as $x_1 \to 0$, and $x_1$ is small.
- **Species 2 (solvent, nearly pure) obeys Raoult's law,** $y_2P = x_2P_2^{sat}$. As $x_2 \to 1$ the Lewis–Randall rule holds ($\gamma_2 \to 1$). Gibbs–Duhem shows that when the solute follows Henry's law, the solvent follows Raoult's law over the same range. The Poynting factor is ≈ 1 at 1 bar.

1. **Sum the two equations** ($y_1 + y_2 = 1$):
$$P = x_1\mathcal H_1 + x_2P_2^{sat} = x_1\mathcal H_1 + (1 - x_1)P_2^{sat}$$

2. **Solve for $x_1$:**
$$x_1 = \frac{P - P_2^{sat}}{\mathcal H_1 - P_2^{sat}} = \frac{1 - 0.1}{200 - 0.1} = \frac{0.9}{199.9} = 0.00450$$

3. **Vapour composition:**
$$y_1 = \frac{x_1\mathcal H_1}{P} = \frac{0.004502 \times 200}{1} = 0.900, \qquad y_2 = \frac{x_2P_2^{sat}}{P} = \frac{0.9955 \times 0.1}{1} = 0.0995$$
   Check: $y_1 + y_2 = 0.9005 + 0.0995 = 1.000$ ✓.

4. **Check of the assumptions.** $x_1 = 0.0045 \ll 1$, so the dilute-solution (Henry/Raoult) limits are well justified. The vapour is 90% species 1 (a light, nearly insoluble "gas") even though the liquid is 99.5% species 2. A simpler estimate, setting $x_2 \approx 1$, gives $y_2 \approx 0.1$, $y_1 \approx 0.9$ and $x_1 = 0.9/200 = 0.0045$, the same to three figures.

**Result:** $x_1$ ≈ 0.0045, $y_1$ ≈ 0.90 (and $y_2$ ≈ 0.10).`,
          answer: String.raw`Henry for solute (y₁P = x₁𝓗₁), Raoult for nearly pure solvent (y₂P = x₂P₂ˢᵃᵗ), ideal-gas vapour at 1 bar: x₁ = (P − P₂ˢᵃᵗ)/(𝓗₁ − P₂ˢᵃᵗ) = 0.9/199.9 = 0.0045; y₁ = 0.0045 × 200/1 = 0.900 (y₂ = 0.0995).` },
        { id: "2015-16-Q5c", label: "(c)", marks: "5",
          topic: "vle-intro", sub: "Why helium-laced gases are used as breathing media for deep-sea divers",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Helium-laced gases are used as breathing media for deep-sea divers. Why?`,
          solution: String.raw`**Key idea: Henry's law.** The amount of a gas dissolved in blood and body tissue (essentially water and fat) is $x_i = y_iP/\mathcal H_i$. It is proportional to the gas's partial pressure and inversely proportional to its Henry's constant.

1. **High pressure at depth.** Pressure rises by about 1 bar for every 10 m of sea water. At 60 m, a diver breathes gas at about 7 bar. Breathing compressed air then means a N₂ partial pressure of about 5.5 bar, so a lot of nitrogen dissolves in the blood and tissues.

2. **Problems with nitrogen (and oxygen):**
   - **Decompression sickness ("the bends"):** on ascent the pressure falls and the dissolved N₂ comes out of solution as bubbles in the blood and joints, as in opening a carbonated drink.
   - **Nitrogen narcosis:** N₂ dissolved at high partial pressure has an anaesthetic, intoxicating effect (impaired judgement below about 30 m).
   - **Oxygen toxicity:** O₂ partial pressure must be kept below about 1.4–1.6 bar, so at depth its mole fraction in the breathing gas must be lowered and some inert gas must make up the rest.

3. **Why helium.** Helium has a **very large Henry's constant**: it is much less soluble in water and fat than N₂. At 25 °C, $\mathcal H_{He} \approx 1.5 \times 10^5$ bar compared with $\mathcal H_{N_2} \approx 8.8 \times 10^4$ bar in water (the difference is larger still in fatty tissue). For the same partial pressure, less helium dissolves. Also:
   - helium is small and diffuses fast, so the body loses it quickly on ascent and decompression is safer and shorter;
   - helium is chemically inert and has no narcotic effect;
   - it has low density, so the dense gas at depth is easier to breathe.
   So heliox (He + O₂) or trimix (He + N₂ + O₂) is used for deep dives, with the O₂ fraction set to keep its partial pressure safe.

4. **Side effects:** a "Donald Duck" voice (sound travels faster in the light gas) and faster loss of body heat (high thermal conductivity).`,
          answer: String.raw`At depth the breathing gas is at high pressure, and by Henry's law (xᵢ = yᵢP/𝓗ᵢ) much N₂ dissolves in blood: narcosis and bubbles ("bends") on ascent. Helium has a much larger Henry's constant (low solubility), diffuses out fast, is inert and non-narcotic and light, so He/O₂ mixtures (with reduced O₂ fraction to avoid O₂ toxicity) are used.` }
      ] },
    { id: "2015-16-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q6a", label: "(a)", marks: "25",
          topic: "vle-intro", sub: "Modified Raoult, ln γ = 1.8x²: z₁ range at x₁ = 0.65, P and y₁, azeotrope",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A binary system of species 1 and 2 consists of vapor and liquid phases in equilibrium at temperature T, for which

$$\ln\gamma_1 = 1.8x_2^2 \qquad \ln\gamma_2 = 1.8x_1^2$$

$$P_1^{Sat} = 1.24\ \mathrm{bar} \qquad P_2^{Sat} = 0.89\ \mathrm{bar}$$

Assuming the modified Raoult's law is valid.

(i) for what range of values of the overall mole fraction $z_1$ can this two phases system exist with a liquid mole fraction $x_1 = 0.65$?

(ii) What is the pressure P and vapor mole fraction $y_1$ within this range?

(iii) What are the pressure and composition of azeotrope at temperature T?`,
          solution: String.raw`**Given:** $\ln\gamma_1 = 1.8x_2^2$, $\ln\gamma_2 = 1.8x_1^2$; $P_1^{sat}$ = 1.24 bar, $P_2^{sat}$ = 0.89 bar; liquid $x_1$ = 0.65.

**Find:** the range of $z_1$; P and $y_1$; the azeotrope.

**Assumptions:** modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$ (low pressure, ideal vapour).

1. **Degrees of freedom.** Two phases, two species: F = 2 − 2 + 2 = 2. Fixing T and $x_1$ fixes P and $y_1$; only the split between liquid and vapour depends on $z_1$.

2. **Activity coefficients at $x_1$ = 0.65:**
$$\gamma_1 = \exp[1.8(0.35)^2] = e^{0.2205} = 1.2467, \qquad \gamma_2 = \exp[1.8(0.65)^2] = e^{0.7605} = 2.1393$$

3. **(ii) Pressure and vapour composition** (BUBL P):
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat} = 0.65(1.2467)(1.24) + 0.35(2.1393)(0.89) = 1.0048 + 0.6664 = 1.671\ \mathrm{bar}$$
$$y_1 = \frac{1.0048}{1.6712} = 0.601$$

4. **(i) Range of $z_1$.** Material balance $z_1 = x_1(1 - \mathcal V) + y_1\mathcal V$ with $0 \le \mathcal V \le 1$: $z_1 = x_1$ = 0.65 at $\mathcal V$ = 0 (bubble point) and $z_1 = y_1$ = 0.601 at $\mathcal V$ = 1 (dew point). Here $y_1 < x_1$, so
$$\boxed{0.601 \le z_1 \le 0.65}$$

5. **(iii) Azeotrope test.** $\alpha_{12} = \dfrac{\gamma_1P_1^{sat}}{\gamma_2P_2^{sat}} = \dfrac{P_1^{sat}}{P_2^{sat}}\exp[1.8(1 - 2x_1)]$:
$$(\alpha_{12})_{x_1 = 0} = \frac{1.24}{0.89}e^{1.8} = 8.429, \qquad (\alpha_{12})_{x_1 = 1} = \frac{1.24}{0.89}e^{-1.8} = 0.230$$
   $\alpha_{12}$ passes through 1, so **an azeotrope exists**.

6. **Azeotrope composition** ($\alpha_{12} = 1$):
$$1.8(1 - 2x_1^{az}) = \ln\frac{0.89}{1.24} = -0.3316 \;\Rightarrow\; x_1^{az} = \frac12\left(1 + \frac{0.3316}{1.8}\right) = 0.592$$

7. **Azeotrope pressure** ($y_1 = x_1$, so $P = \gamma_1P_1^{sat}$):
$$\gamma_1^{az} = \exp[1.8(0.4079)^2] = 1.3491, \qquad P^{az} = 1.3491 \times 1.24 = 1.673\ \mathrm{bar}$$
   Check:
$$\gamma_2^{az}P_2^{sat} = \exp[1.8(0.5921)^2](0.89) = 1.8797 \times 0.89 = 1.673\ \mathrm{bar} \quad\checkmark$$
   This is a **maximum-pressure azeotrope**. The given $x_1$ = 0.65 lies just to its right, so $y_1 < x_1$ and P is just below $P^{az}$.

**Result:** (i) 0.601 ≤ $z_1$ ≤ 0.65; (ii) P = 1.671 bar, $y_1$ = 0.601; (iii) azeotrope at $x_1 = y_1$ = 0.592, P = 1.673 bar.`,
          answer: String.raw`γ₁ = 1.2467, γ₂ = 2.1393 ⇒ P = 1.0048 + 0.6664 = 1.671 bar, y₁ = 0.601; two phases with x₁ = 0.65 for 0.601 ≤ z₁ ≤ 0.65. α₁₂ from 8.43 to 0.230 ⇒ azeotrope x₁ = y₁ = 0.592, P = 1.673 bar.` },
        { id: "2015-16-Q6b", label: "(b)", marks: "10",
          topic: "solution-theory", sub: "Partial properties from the solution property: M̄₁ = M + x₂ dM/dx₁, M̄₂ = M − x₁ dM/dx₁",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that the partial properties are readily calculated directly from an expression for the solution property as a function of composition at constant T and P.`,
          solution: String.raw`**Setting:** a binary solution at constant T and P, with the molar property known as a function of composition, $M = M(x_1)$. We want $\bar M_1$ and $\bar M_2$ from it (SVNA §11.3, eqs. 11.15–11.16).

1. **Summability relation:**
$$M = x_1\bar M_1 + x_2\bar M_2$$
   Differentiate:
$$dM = x_1\,d\bar M_1 + \bar M_1\,dx_1 + x_2\,d\bar M_2 + \bar M_2\,dx_2$$

2. **Gibbs–Duhem at constant T, P:** $x_1\,d\bar M_1 + x_2\,d\bar M_2 = 0$. So
$$dM = \bar M_1\,dx_1 + \bar M_2\,dx_2$$

3. **Binary:** $x_2 = 1 - x_1$, so $dx_2 = -dx_1$:
$$\frac{dM}{dx_1} = \bar M_1 - \bar M_2$$

4. **Solve the two equations** (summability and step 3) for the partial properties. Substitute $\bar M_2 = \bar M_1 - dM/dx_1$ into $M = x_1\bar M_1 + x_2\bar M_2$:
$$M = \bar M_1 - x_2\frac{dM}{dx_1} \;\Rightarrow\; \boxed{\bar M_1 = M + x_2\frac{dM}{dx_1}}$$
   Substitute $\bar M_1 = \bar M_2 + dM/dx_1$:
$$M = \bar M_2 + x_1\frac{dM}{dx_1} \;\Rightarrow\; \boxed{\bar M_2 = M - x_1\frac{dM}{dx_1}}$$

5. **Use.** Given an expression for M (V, H, $G^E/RT$…) as a function of $x_1$, differentiate once and substitute. For example, for $H = 600 - 180x_1 - 20x_1^3$: $\bar H_1 = 420 - 60x_1^2 + 40x_1^3$ and $\bar H_2 = 600 + 40x_1^3$. Applied to $M = G^E/RT$ the same equations give $\ln\gamma_1$ and $\ln\gamma_2$.

6. **Graphical meaning (tangent-intercept method).** The tangent to the M–$x_1$ curve at a given $x_1$ intercepts the axis $x_1 = 1$ at $\bar M_1$ and the axis $x_1 = 0$ at $\bar M_2$. At $x_1 = 0$ the tangent gives $\bar M_1^\infty$, and at $x_1 = 1$ it gives $\bar M_2^\infty$.`,
          answer: String.raw`From M = x₁M̄₁ + x₂M̄₂ and Gibbs–Duhem (x₁dM̄₁ + x₂dM̄₂ = 0): dM/dx₁ = M̄₁ − M̄₂. Solving: M̄₁ = M + x₂ dM/dx₁, M̄₂ = M − x₁ dM/dx₁ (tangent-intercept construction).` }
      ] },
    { id: "2015-16-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2015-16-Q7a", label: "(a)", marks: "10",
          topic: "solution-theory", sub: "Fugacity: definition and estimation for a pure liquid (φ^sat and Poynting factor)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Define fugacity. How would you estimate fugacity of a pure liquid?`,
          solution: String.raw`### Definition
1. For an ideal gas at constant T, $dG_i^{ig} = V_i^{ig}\,dP = RT\,d\ln P$, so $G_i^{ig} = \Gamma_i(T) + RT\ln P$.
2. For a real fluid, the **fugacity** $f_i$ (units of pressure) is defined so that the same simple form holds:
$$G_i \equiv \Gamma_i(T) + RT\ln f_i$$
   with the limit $f_i/P \to 1$ as $P \to 0$ (ideal-gas behaviour). The **fugacity coefficient** is $\phi_i = f_i/P$, and subtracting the two equations gives
$$\ln\phi_i = \frac{G_i^R}{RT} = \int_0^P(Z_i - 1)\frac{dP}{P} \quad(\text{const } T)$$
3. Fugacity is a "corrected pressure". Its use: phases at the same T are in equilibrium when the fugacity of each species is the same in all phases ($f_i^v = f_i^l$ for a pure species; $\hat f_i^\alpha = \hat f_i^\beta$ in mixtures).

### Fugacity of a pure liquid at T and P (P above $P_i^{sat}$)
Calculate it in three steps at constant T:

1. **Saturated vapour.** Find $\phi_i^{sat}$ of the vapour at $P_i^{sat}$:
   - two-term virial equation: $\ln\phi_i^{sat} = B_{ii}P_i^{sat}/RT$, with $B_{ii}$ from the Pitzer correlation $B_{ii}P_c/RT_c = B^0 + \omega B^1$;
   - or a cubic EOS, or the generalized (Lee/Kesler) correlation $\phi = (\phi^0)(\phi^1)^\omega$;
   - or, for water, steam tables: $\ln(f/f^*) = \frac1R\left[\frac{H - H^*}{T} - (S - S^*)\right]$.

2. **Vapour–liquid equilibrium at saturation:**
$$f_i^l(P_i^{sat}) = f_i^v(P_i^{sat}) = f_i^{sat} = \phi_i^{sat}P_i^{sat}$$

3. **Compress the liquid from $P_i^{sat}$ to P.** From $dG_i = V_i\,dP = RT\,d\ln f_i$, and treating the liquid as incompressible ($V_i^l$ constant):
$$\ln\frac{f_i^l}{f_i^{sat}} = \frac{V_i^l(P - P_i^{sat})}{RT}$$

4. **Combine:**
$$\boxed{f_i^l = \phi_i^{sat}P_i^{sat}\exp\left[\frac{V_i^l(P - P_i^{sat})}{RT}\right]}$$
   The exponential is the **Poynting factor**. With the virial result, $f_i^l = P_i^{sat}\exp\left[\dfrac{B_{ii}P_i^{sat} + V_i^l(P - P_i^{sat})}{RT}\right]$.

5. **Data needed:** $P_i^{sat}$ (Antoine or steam tables), $T_c, P_c, \omega$ (for $B_{ii}$), and $V_i^l$ (e.g. Rackett equation, $V^{sat} = V_cZ_c^{(1 - T_r)^{2/7}}$).

6. **Magnitudes.** The Poynting factor is close to 1 unless P − $P^{sat}$ is large (tens of bar). $\phi^{sat}$ is close to 1 at low $P^{sat}$. So at low pressure $f_i^l \approx P_i^{sat}$, which is the basis of Raoult's law.`,
          answer: String.raw`Gᵢ = Γᵢ(T) + RT ln fᵢ with fᵢ/P → 1 as P → 0; φᵢ = fᵢ/P, ln φᵢ = ∫₀ᴾ(Z − 1)dP/P. Pure liquid: φᵢˢᵃᵗ of saturated vapour (virial ln φˢᵃᵗ = BᵢᵢPᵢˢᵃᵗ/RT, Lee/Kesler, cubic EOS or steam tables); fᵢˡ(Pˢᵃᵗ) = φˢᵃᵗPˢᵃᵗ; Poynting compression: fᵢˡ = φᵢˢᵃᵗPᵢˢᵃᵗexp[Vᵢˡ(P − Pᵢˢᵃᵗ)/RT].` },
        { id: "2015-16-Q7b", label: "(b)", marks: "25",
          topic: "solution-applications", sub: "G^E/RT = (Ax₁ + Bx₂)x₁x₂: ln γ₁, ln γ₂, Gibbs–Duhem and end slopes",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The excess Gibbs energy of a binary liquid mixture at T and P is given by

$$G^E/RT = (Ax_1 + Bx_2)x_1x_2$$

(i) Find expressions for $\ln\gamma_1$ and $\ln\gamma_2$ at T and P.

(ii) Show that these expressions satisfy the Gibbs-Duhem equation.

(iii) Show that $\left(\dfrac{d\ln\gamma_1}{dx_1}\right)_{x_1 = 1} = \left(\dfrac{d\ln\gamma_2}{dx_1}\right)_{x_1 = 0} = 0$.`,
          solution: String.raw`**Given:** $g \equiv G^E/RT = (Ax_1 + Bx_2)x_1x_2$ at fixed T, P. This is the two-parameter Margules equation with $A = A_{21}$ and $B = A_{12}$.

1. **(i) Method.** $\ln\gamma_i$ is the partial property of $G^E/RT$: $\ln\gamma_i = [\partial(nG^E/RT)/\partial n_i]_{T,P,n_j}$. For a binary this is equivalent to $\ln\gamma_1 = g + x_2\,dg/dx_1$ and $\ln\gamma_2 = g - x_1\,dg/dx_1$.

2. **g in terms of $x_1$.** With $x_2 = 1 - x_1$, $Ax_1 + Bx_2 = B + (A - B)x_1$, so
$$g = [B + (A - B)x_1](x_1 - x_1^2)$$
$$\frac{dg}{dx_1} = (A - B)x_1x_2 + [B + (A - B)x_1](1 - 2x_1)$$

3. **ln γ₁:**
$$\ln\gamma_1 = g + x_2\frac{dg}{dx_1} = (Ax_1 + Bx_2)x_1x_2 + x_2\left[(A - B)x_1x_2 + (Ax_1 + Bx_2)(x_2 - x_1)\right]$$
   Collect terms:
$$x_2(Ax_1 + Bx_2)(x_1 + x_2 - x_1) + (A - B)x_1x_2^2 = x_2^2(Ax_1 + Bx_2) + (A - B)x_1x_2^2$$
   Write $Ax_1 + Bx_2 = B + (A - B)x_1$:
$$\boxed{\ln\gamma_1 = x_2^2\left[B + 2(A - B)x_1\right]}$$

4. **ln γ₂:**
$$\ln\gamma_2 = g - x_1\frac{dg}{dx_1} = x_1^2(Ax_1 + Bx_2) - (A - B)x_1^2x_2 = x_1^2[A - (A - B)x_2 - (A - B)x_2]$$
   Using $Ax_1 + Bx_2 = A - (A - B)x_2$:
$$\boxed{\ln\gamma_2 = x_1^2\left[A + 2(B - A)x_2\right]}$$
   Check (summability):
$$x_1\ln\gamma_1 + x_2\ln\gamma_2 = x_1x_2[x_2B + 2(A - B)x_1x_2 + x_1A + 2(B - A)x_1x_2] = x_1x_2(Ax_1 + Bx_2) = g \quad\checkmark$$
   Infinite dilution: $\ln\gamma_1^\infty = B$, $\ln\gamma_2^\infty = A$.

5. **(ii) Gibbs–Duhem** at constant T, P: $x_1\,d\ln\gamma_1/dx_1 + x_2\,d\ln\gamma_2/dx_1 = 0$. Let $h \equiv (3A - 3B)x_1 - A + 2B$. Differentiating the results of steps 3 and 4 (with $dx_2/dx_1 = -1$) gives, after collecting terms,
$$\frac{d\ln\gamma_1}{dx_1} = -2x_2\left[B + 2(A - B)x_1\right] + 2(A - B)x_2^2 = -2x_2h$$
$$\frac{d\ln\gamma_2}{dx_1} = 2x_1\left[A + 2(B - A)x_2\right] - 2(B - A)x_1^2 = 2x_1h$$
   For example, for the first:
$$-2x_2[B + 2(A - B)x_1 - (A - B)(1 - x_1)] = -2x_2[2B - A + 3(A - B)x_1] = -2x_2h$$
   Then
$$x_1(-2x_2h) + x_2(2x_1h) = 0 \quad\checkmark$$

6. **(iii) End slopes:**
$$\left(\frac{d\ln\gamma_1}{dx_1}\right)_{x_1 = 1} = -2(0)h = 0, \qquad \left(\frac{d\ln\gamma_2}{dx_1}\right)_{x_1 = 0} = 2(0)h = 0 \quad\checkmark$$
   Each $\ln\gamma_i$ curve approaches zero with zero slope as species i becomes pure. This is required by Gibbs–Duhem: $d\ln\gamma_1/dx_1 = -(x_2/x_1)\,d\ln\gamma_2/dx_1 \to 0$ as $x_2 \to 0$.

**Result:** $\ln\gamma_1 = x_2^2[B + 2(A - B)x_1]$, $\ln\gamma_2 = x_1^2[A + 2(B - A)x_2]$; $d\ln\gamma_1/dx_1 = -2x_2h$, $d\ln\gamma_2/dx_1 = 2x_1h$ with $h = 3(A - B)x_1 - A + 2B$, so Gibbs–Duhem holds and both end slopes are zero.`,
          answer: String.raw`ln γ₁ = x₂²[B + 2(A − B)x₁], ln γ₂ = x₁²[A + 2(B − A)x₂] (Margules, ln γ₁^∞ = B, ln γ₂^∞ = A). d ln γ₁/dx₁ = −2x₂h, d ln γ₂/dx₁ = 2x₁h with h = 3(A − B)x₁ − A + 2B ⇒ x₁(−2x₂h) + x₂(2x₁h) = 0; slopes vanish at x₁ = 1 and x₁ = 0.` }
      ] },
    { id: "2015-16-Q8", q: 8, section: "B",
      stem: String.raw`The following is a set of VLE data for the system acetone (1)/methanol (2) at 55°C.

| P/kPa | x₁ | y₁ | P/kPa | x₁ | y₁ |
|---|---|---|---|---|---|
| 68.73 | 0.000 | 0.000 | 98.46 | 0.543 | 0.617 |
| 75.28 | 0.057 | 0.129 | 99.95 | 0.633 | 0.677 |
| 78.95 | 0.104 | 0.219 | 100.46 | 0.733 | 0.738 |
| 86.76 | 0.217 | 0.363 | 101.06 | 0.792 | 0.787 |
| 93.20 | 0.358 | 0.478 | 99.80 | 0.945 | 0.934 |
| 96.36 | 0.448 | 0.551 | 96.88 | 1.00 | 1.00 |

*(35 marks for the whole question; the paper gives no split between (a) and (b).)*`,
      parts: [
        { id: "2015-16-Q8a", label: "(a)", marks: "",
          topic: "solution-applications", sub: "Acetone/methanol at 55 °C: two-parameter Margules fit of G^E/RT (12 data points)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(a) Find the parameter values for the two parameters Margules equation that provide the best fit of $G^E/RT$ to the data.`,
          solution: String.raw`**Given:** T = 55 °C = 328.15 K; $P_1^{sat}$ = 96.88 kPa ($x_1$ = 1), $P_2^{sat}$ = 68.73 kPa ($x_1$ = 0); ten interior data points.

**Find:** $A_{12}$, $A_{21}$.

**Assumptions:** low pressure (≤ 101 kPa), so modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$ applies. Two-parameter Margules (SVNA eq. 12.9–12.10):
$$\frac{G^E}{x_1x_2RT} = A_{21}x_1 + A_{12}x_2, \qquad \ln\gamma_1 = x_2^2[A_{12} + 2(A_{21} - A_{12})x_1], \qquad \ln\gamma_2 = x_1^2[A_{21} + 2(A_{12} - A_{21})x_2]$$

1. **Experimental activity coefficients** (SVNA Example 12.1 method):
$$\gamma_1 = \frac{y_1P}{x_1P_1^{sat}}, \qquad \gamma_2 = \frac{(1 - y_1)P}{(1 - x_1)P_2^{sat}}, \qquad \frac{G^E}{RT} = x_1\ln\gamma_1 + x_2\ln\gamma_2$$
   For example, at $x_1$ = 0.358: $\gamma_1 = 0.478(93.20)/[0.358(96.88)] = 1.2845$ and $\gamma_2 = 0.522(93.20)/[0.642(68.73)] = 1.1026$.

| $x_1$ | $\gamma_1$ | $\gamma_2$ | $\ln\gamma_1$ | $\ln\gamma_2$ | $G^E/RT$ | $G^E/x_1x_2RT$ |
|---|---|---|---|---|---|---|
| 0.057 | 1.7586 | 1.0117 | 0.5645 | 0.0116 | 0.0431 | 0.8022 |
| 0.104 | 1.7160 | 1.0013 | 0.5400 | 0.0013 | 0.0573 | 0.6149 |
| 0.217 | 1.4981 | 1.0270 | 0.4042 | 0.0266 | 0.1085 | 0.6388 |
| 0.358 | 1.2845 | 1.1026 | 0.2504 | 0.0976 | 0.1523 | 0.6627 |
| 0.448 | 1.2233 | 1.1404 | 0.2016 | 0.1314 | 0.1628 | 0.6584 |
| 0.543 | 1.1548 | 1.2006 | 0.1439 | 0.1828 | 0.1617 | 0.6516 |
| 0.633 | 1.1034 | 1.2799 | 0.0984 | 0.2468 | 0.1529 | 0.6580 |
| 0.733 | 1.0440 | 1.4343 | 0.0431 | 0.3607 | 0.1279 | 0.6534 |
| 0.792 | 1.0366 | 1.5057 | 0.0359 | 0.4093 | 0.1136 | 0.6894 |
| 0.945 | 1.0181 | 1.7425 | 0.0180 | 0.5553 | 0.0475 | 0.9147 |

2. **Best fit.** For Margules, $G^E/x_1x_2RT$ is a straight line in $x_1$, with intercept $A_{12}$ at $x_1$ = 0 and $A_{21}$ at $x_1$ = 1. Least squares through all ten points:
$$\frac{G^E}{x_1x_2RT} = 0.6430 + 0.1064x_1 \;\Rightarrow\; \boxed{A_{12} = 0.643,\qquad A_{21} = 0.749}$$
   Hence $\gamma_1^\infty = e^{0.643} = 1.90$ and $\gamma_2^\infty = e^{0.749} = 2.12$.

![ln γ₁, ln γ₂ and G^E/x₁x₂RT for acetone/methanol at 55 °C: data points and Margules fit](fig/2015-16-Q8-fit.svg)

3. **Comment on the scatter.** Near the ends, $G^E/x_1x_2RT$ divides a small $G^E/RT$ by a small $x_1x_2$, so small errors in y or P are magnified: the points at $x_1$ = 0.057 (0.80) and 0.945 (0.91) scatter most. Between $x_1$ = 0.2 and 0.8 the points lie on a nearly flat line at about 0.65–0.69, so the fitted line is a reasonable compromise.

**Result:** $A_{12}$ ≈ 0.643, $A_{21}$ ≈ 0.749, so $G^E/RT = (0.749x_1 + 0.643x_2)x_1x_2$.`,
          answer: String.raw`γᵢ = yᵢP/(xᵢPᵢˢᵃᵗ) with P₁ˢᵃᵗ = 96.88, P₂ˢᵃᵗ = 68.73 kPa; least-squares G^E/x₁x₂RT = 0.6430 + 0.1064x₁ ⇒ A₁₂ = 0.643, A₂₁ = 0.749 (γ₁^∞ = 1.90, γ₂^∞ = 2.12).` },
        { id: "2015-16-Q8b", label: "(b)", marks: "",
          topic: "solution-applications", sub: "Acetone/methanol at 55 °C: P-x-y diagram, data versus Margules correlation",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(b) Prepare a P-x-y diagram that compares the experimental points with the curves determined from the correlation.`,
          solution: String.raw`**Given:** $A_{12}$ = 0.643, $A_{21}$ = 0.749 from (a); $P_1^{sat}$ = 96.88 kPa, $P_2^{sat}$ = 68.73 kPa.

**Assumptions:** modified Raoult's law, as in (a).

1. **Correlated curves.** For each $x_1$, compute $\gamma_1$, $\gamma_2$ from the Margules expressions, then (BUBL P)
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat}, \qquad y_1 = \frac{x_1\gamma_1P_1^{sat}}{P}$$
   For example, at $x_1$ = 0.448: $\ln\gamma_1 = 0.552^2[0.643 + 2(0.106)(0.448)] = 0.2250$, so $\gamma_1$ = 1.2523; $\ln\gamma_2 = 0.448^2[0.749 + 2(-0.106)(0.552)] = 0.1268$, so $\gamma_2$ = 1.1352. Then
$$P = 0.448(1.2523)(96.88) + 0.552(1.1352)(68.73) = 54.35 + 43.07 = 97.42\ \mathrm{kPa}$$
   and $y_1 = 54.35/97.42 = 0.558$.

2. **Comparison:**

| $x_1$ | $P_{exp}$ | $P_{calc}$ | $y_{1,exp}$ | $y_{1,calc}$ |
|---|---|---|---|---|
| 0.057 | 75.28 | 74.82 | 0.129 | 0.132 |
| 0.104 | 78.95 | 79.14 | 0.219 | 0.217 |
| 0.217 | 86.76 | 87.39 | 0.363 | 0.367 |
| 0.358 | 93.20 | 94.38 | 0.478 | 0.494 |
| 0.448 | 96.36 | 97.42 | 0.551 | 0.558 |
| 0.543 | 98.46 | 99.71 | 0.617 | 0.618 |
| 0.633 | 99.95 | 101.11 | 0.677 | 0.674 |
| 0.733 | 100.46 | 101.80 | 0.738 | 0.739 |
| 0.792 | 101.06 | 101.72 | 0.787 | 0.781 |
| 0.945 | 99.80 | 99.09 | 0.934 | 0.926 |

   rms δP = 0.94 kPa (max 1.34 kPa); rms δ$y_1$ = 0.007 (max 0.016).

3. **P–x–y diagram:**

![P-x-y diagram for acetone/methanol at 55 °C: experimental points and Margules curves](fig/2015-16-Q8-pxy.svg)

4. **Discussion.**
   - **Positive deviations:** both $\gamma_i > 1$, and the bubble curve rises above both vapour pressures.
   - **Maximum-pressure azeotrope:** $\alpha_{12} = (P_1^{sat}/P_2^{sat})\gamma_1/\gamma_2$ is 2.68 at $x_1$ = 0 and 0.666 at $x_1$ = 1, so it passes through 1. The correlation places the azeotrope at $x_1 = y_1$ ≈ 0.75, P ≈ 101.8 kPa. The data show it between $x_1$ = 0.733 ($y_1 > x_1$) and 0.792 ($y_1 < x_1$), at about 101 kPa.
   - **Fit quality:** the correlation runs about 1 kPa high in the middle range, because the straight $G^E/x_1x_2RT$ line is pulled up by the scattered end points. Fitting P directly (Barker's method) gives $A_{12}$ = 0.633, $A_{21}$ = 0.682 with rms δP = 0.44 kPa. Either is an acceptable exam answer.

**Result:** Margules ($A_{12}$ = 0.643, $A_{21}$ = 0.749) reproduces P within about 1 kPa and $y_1$ within about 0.01, with a maximum-pressure azeotrope near $x_1$ = 0.75, 101.8 kPa.`,
          answer: String.raw`P_calc within ≈ 1 kPa (rms 0.94 kPa), y₁ within 0.016 (rms 0.007); P-x-y shows positive deviations and a maximum-pressure azeotrope at x₁ = y₁ ≈ 0.75, P ≈ 101.8 kPa (data: between x₁ = 0.733 and 0.792, ≈ 101 kPa).` }
      ] }
  ]
});
