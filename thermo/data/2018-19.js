QB.paper({
  year: "2018-19", date: "29/10/2019", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engineering Examination 2018-2019, CHE 307 (Chemical Engineering Thermodynamics-II), 3 hours, 210 marks. Section A: four questions, answer any THREE. Section B: four questions; Question 5 is compulsory (45 marks: any nine of ten parts, 5 each); answer any TWO of the remaining three. Use separate scripts for each section; the figures in the margin indicate full marks. Attached (pp. 6–8): Fig. 8(b1) vapour-compression cycle on ln P–H coordinates, Fig. 8(b2) P–H diagram of HFC-134a, Fig. 12.14 heats of solution of HCl(g) and LiCl(s) at 25 °C, and SVNA Table 9.1 (saturated HFC-134a, SI units).`,
  questions: [
    { id: "2018-19-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q1a", label: "(a)", marks: "10",
          topic: "vle-intro", sub: "Retrograde condensation and deep natural-gas wells",
          type: "theory", syllabus: "in", repeats: ["2022-23-Q5a", "2014-15-Q1a"],
          text: String.raw`Retrograde condensation is important in the operation of deep natural gas wells. True/False - Explain your answer.`,
          solution: String.raw`**True.**

1. **The phase envelope of a mixture.** For a mixture of fixed composition, the P–T diagram shows a bubble-point curve and a dew-point curve that meet at the critical point C. Unlike a pure substance, C is generally **not** the highest pressure or the highest temperature of the two-phase region. The maximum pressure is the cricondenbar (M); the maximum temperature is the cricondentherm (N).

![P–T phase envelope of a mixture showing the critical point C, cricondenbar M, cricondentherm N and the retrograde region](fig/2018-19-Q1a-sketch.svg)

2. **Retrograde condensation.** Between C and the cricondentherm N, the dew-point curve bends back. Take a vapour at a temperature $T_c < T < T_N$ and lower its pressure isothermally (the vertical arrow). It first reaches the upper branch of the dew curve and **liquid appears**. As P falls further, the amount of liquid rises to a maximum and then decreases, until the vapour is dry again at the lower dew point. Condensation on *decreasing* pressure is the reverse of normal behaviour, hence "retrograde".

3. **Why it matters in deep gas wells.** Deep gas-condensate reservoirs are at high pressure and at temperatures between the critical temperature and the cricondentherm of the hydrocarbon mixture. The fluid is a single-phase gas in the reservoir.
   - As gas is produced, the reservoir pressure falls isothermally into the retrograde region, and the heavy (C₅⁺) components condense **inside the rock pores**. This liquid wets the rock, is mostly immobile, and is lost to production. It also blocks gas flow near the well (condensate banking).
   - **Remedy: pressure maintenance** (gas cycling). Dry gas, stripped of liquids at the surface, is reinjected to keep the reservoir pressure above the dew point. The condensate is then recovered at the surface, where retrograde condensation is used deliberately in separators to drop out the valuable liquids.

**Conclusion:** the statement is true. Retrograde behaviour decides how gas-condensate fields are produced (pressure maintenance, gas recycling) and how the surface separators are operated.`,
          answer: String.raw`True. Between Tc and the cricondentherm the dew curve bends back, so an isothermal pressure drop of a gas condenses liquid (retrograde condensation). In deep gas-condensate reservoirs the falling pressure condenses heavy hydrocarbons in the rock (lost, blocking flow), so reservoir pressure is maintained by reinjecting dry gas and the liquids are recovered at the surface.` },
        { id: "2018-19-Q1b", label: "(b)", marks: "15",
          topic: "vle-intro", sub: "Sealed can of soda at 20 °C: phase compositions and pressure (Henry's law)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Carbonated water contains only CO₂ and H₂O. Determine the composition of the vapor and liquid phase in a sealed can of soda and the pressure exerted on the can at 20°C. Henry's constant for CO₂ at 20°C is about 1000 bar. The saturated vapor pressure of H₂O at 20°C is 0.0234 bar.`,
          solution: String.raw`**Given:** CO₂ (1)/H₂O (2) at 20 °C; $\mathcal H_1$ = 1000 bar; $P_2^{sat}$ = 0.0234 bar.

**Find:** $x_i$, $y_i$ and P.

**Assumptions:**
- Henry's law for dissolved CO₂: $y_1P = x_1\mathcal H_1$.
- Raoult's law for water: $y_2P = x_2P_2^{sat}$, since water is nearly pure.
- Ideal vapour.
- The problem has one degree of freedom too many: by the phase rule, F = 2 − 2 + 2 = 2, so T alone does not fix the state. One more specification is needed. Following SVNA Example 10.2, assume the liquid holds **$x_1$ = 0.01** (1 mol% CO₂, typical of a soft drink).

1. **Liquid phase:** $x_1$ = 0.01 and $x_2$ = 0.99.

2. **Pressure** (sum of the two equilibrium relations, $\sum y_i = 1$):
$$P = x_1\mathcal H_1 + x_2P_2^{sat} = 0.01(1000) + 0.99(0.0234) = 10.000 + 0.0232 = 10.02\ \mathrm{bar}$$

3. **Vapour phase:**
$$y_1 = \frac{x_1\mathcal H_1}{P} = \frac{10.000}{10.023} = 0.9977, \qquad y_2 = \frac{0.0232}{10.023} = 0.0023$$

4. **Comment.** The can holds about 10 bar, almost entirely CO₂ pressure. If the can is chilled, $\mathcal H_1$ falls (at 10 °C it is about 990 bar) and P falls slightly. Opening the can lowers $P_{CO_2}$, the liquid becomes supersaturated, and CO₂ bubbles out. Both laws apply because the liquid is very dilute in CO₂.

**Result:** liquid $x_{CO_2}$ = 0.01 (assumed), $x_{H_2O}$ = 0.99; vapour $y_{CO_2}$ = 0.9977, $y_{H_2O}$ = 0.0023; P ≈ 10.0 bar.`,
          answer: String.raw`With x_CO₂ = 0.01 (needed extra specification, as in SVNA Ex. 10.2): P = 0.01(1000) + 0.99(0.0234) = 10.02 bar; y_CO₂ = 0.9977, y_H₂O = 0.0023; x_H₂O = 0.99.` },
        { id: "2018-19-Q1c", label: "(c)", marks: "10",
          topic: "vle-intro", sub: "Flash calculation: derive Σ zᵢkᵢ/[1 + v(kᵢ − 1)] = 1",
          type: "derivation", syllabus: "in", repeats: ["2017-18-Q7a"],
          text: String.raw`For flash calculation, show that

$$\sum\frac{z_ik_i}{1 + v(k_i - 1)} = 1$$

Symbols have their usual meanings.`,
          solution: String.raw`**System:** 1 mol of feed with overall composition $\{z_i\}$ splits at T, P into $\mathcal L$ mol of liquid ($x_i$) and $\mathcal V$ = v mol of vapour ($y_i$), with $k_i \equiv y_i/x_i$ the equilibrium ratio (K-value).

1. **Total material balance:** $\mathcal L + \mathcal V = 1$, so $\mathcal L = 1 - v$.

2. **Component balance for species i:**
$$z_i = x_i\mathcal L + y_i\mathcal V = x_i(1 - v) + y_iv$$

3. **Eliminate $x_i$** with $x_i = y_i/k_i$:
$$z_i = \frac{y_i}{k_i}(1 - v) + y_iv = \frac{y_i}{k_i}\left[1 - v + vk_i\right] = \frac{y_i}{k_i}\left[1 + v(k_i - 1)\right]$$
$$\Rightarrow\quad y_i = \frac{z_ik_i}{1 + v(k_i - 1)}$$

4. **The mole fractions in the vapour sum to one,** $\sum_iy_i = 1$:
$$\boxed{\sum_i\frac{z_ik_i}{1 + v(k_i - 1)} = 1}$$

5. **Companion forms.** In the same way, $x_i = z_i/[1 + v(k_i - 1)]$ with $\sum_ix_i = 1$. Subtracting the two sums gives the Rachford–Rice form
$$F(v) = \sum_i\frac{z_i(k_i - 1)}{1 + v(k_i - 1)} = 0, \qquad \frac{dF}{dv} = -\sum_i\frac{z_i(k_i - 1)^2}{[1 + v(k_i - 1)]^2} < 0$$
   F is monotonic in v, so Newton's method converges reliably.

6. **Use.** At given T and P, $k_i$ is known (Raoult: $k_i = P_i^{sat}/P$; modified Raoult: $k_i = \gamma_iP_i^{sat}/P$; light hydrocarbons: DePriester charts). Solve the equation for v (0 < v < 1), then get $y_i$ and $x_i$. Limits: at v = 0 it gives the bubble point ($\sum z_ik_i = 1$); at v = 1 the dew point ($\sum z_i/k_i = 1$).`,
          answer: String.raw`Balances: zᵢ = xᵢ(1 − v) + yᵢv with xᵢ = yᵢ/kᵢ ⇒ yᵢ = zᵢkᵢ/[1 + v(kᵢ − 1)]; Σyᵢ = 1 gives Σ zᵢkᵢ/[1 + v(kᵢ − 1)] = 1 (also xᵢ = zᵢ/[1 + v(kᵢ − 1)], Rachford–Rice Σ zᵢ(kᵢ − 1)/[1 + v(kᵢ − 1)] = 0).` }
      ] },
    { id: "2018-19-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q2a", label: "(a)", marks: "20",
          topic: "vle-intro", sub: "Cyclohexanone/phenol at 144 °C: A from the azeotrope, then P and y at x₁ = 0.6",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q2a", "2014-15-Q1b"],
          text: String.raw`A liquid mixture of cyclohexane(1)/ phenol (2) for which $x_1$ = 0.6 is in equilibrium with its vapor at 144°C. Determine the equilibrium P and vapor composition y from the following information:

$$\ln\gamma_1 = Ax_2^2 \qquad \ln\gamma_2 = Ax_1^2$$

At 144°C, $P_1^{sat}$ = 75 and $P_2^{sat}$ = 32 kPa and $x_1^{az}$ = 0.30 [form an azeotrope]`,
          solution: String.raw`**Given:** T = 144 °C, $x_1$ = 0.6, $P_1^{sat}$ = 75 kPa, $P_2^{sat}$ = 32 kPa, azeotrope at $x_1^{az}$ = 0.30. (The textbook system, SVNA Problem 10.x, is **cyclohexanone**/phenol; the paper prints "cyclohexane".)

**Find:** P and $y_1$.

**Assumptions:** modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$; one-parameter symmetric model.

1. **A from the azeotrope.** At the azeotrope $x_i = y_i$, so $\gamma_1P_1^{sat} = \gamma_2P_2^{sat}$:
$$\ln\frac{\gamma_1}{\gamma_2} = A(x_2^2 - x_1^2) = A(1 - 2x_1) = \ln\frac{P_2^{sat}}{P_1^{sat}}$$
$$A = \frac{\ln(32/75)}{1 - 2(0.30)} = \frac{-0.8518}{0.40} = -2.1294$$
   A < 0: negative deviation (phenol and cyclohexanone hydrogen-bond), so this is a minimum-pressure azeotrope.

2. **Activity coefficients at $x_1$ = 0.6:**
$$\gamma_1 = e^{-2.1294(0.4)^2} = e^{-0.3407} = 0.7113, \qquad \gamma_2 = e^{-2.1294(0.6)^2} = e^{-0.7666} = 0.4646$$

3. **Bubble pressure:**
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat} = 0.6(0.7113)(75) + 0.4(0.4646)(32) = 32.01 + 5.95 = 37.95\ \mathrm{kPa}$$

4. **Vapour composition:**
$$y_1 = \frac{32.01}{37.95} = 0.843, \qquad y_2 = 0.157$$

5. **Check.** The azeotrope pressure is $P^{az} = \gamma_1P_1^{sat} = e^{-2.1294(0.49)}(75) = 26.42$ kPa, below both vapour pressures, consistent with a minimum-pressure azeotrope. At $x_1$ = 0.6 (to the right of the azeotrope) $y_1 > x_1$, as expected.

**Result:** A = −2.129; P = 37.95 kPa; $y_1$ = 0.843, $y_2$ = 0.157.`,
          answer: String.raw`A = ln(32/75)/(1 − 0.6) = −2.129; at x₁ = 0.6: γ₁ = 0.711, γ₂ = 0.465 ⇒ P = 32.01 + 5.95 = 37.95 kPa, y₁ = 0.843 (minimum-pressure azeotrope at 26.4 kPa).` },
        { id: "2018-19-Q2b", label: "(b)", marks: "15",
          topic: "solution-theory", sub: "Gibbs–Duhem for a binary: x₁dM̄₁ + x₂dM̄₂ = 0 at constant T and P",
          type: "derivation", syllabus: "in", repeats: ["2022-23-Q6a", "2017-18-Q2b"],
          text: String.raw`If $\bar M_i$ represents partial molal property of species i in solution, for binary mixture at constant temperature and pressure show that

$$x_1d\bar M_1 + x_2d\bar M_2 = 0$$`,
          solution: String.raw`1. **Definition.** $\bar M_i \equiv [\partial(nM)/\partial n_i]_{T,P,n_j}$, so the total property nM = M(T, P, n₁, n₂) has the differential
$$d(nM) = n\left(\frac{\partial M}{\partial P}\right)_{T,x}dP + n\left(\frac{\partial M}{\partial T}\right)_{P,x}dT + \sum_i\bar M_i\,dn_i \qquad (1)$$

2. **Express in mole fractions.** Put $n_i = x_in$, so $dn_i = x_i\,dn + n\,dx_i$, and $d(nM) = n\,dM + M\,dn$. Collect the terms in n and dn:
$$\left[dM - \left(\frac{\partial M}{\partial P}\right)dP - \left(\frac{\partial M}{\partial T}\right)dT - \sum_i\bar M_i\,dx_i\right]n + \left[M - \sum_ix_i\bar M_i\right]dn = 0$$

3. **n and dn are independent and arbitrary,** so both brackets vanish:
$$M = \sum_ix_i\bar M_i \quad\text{(summability)} \qquad (2)$$
$$dM = \left(\frac{\partial M}{\partial P}\right)dP + \left(\frac{\partial M}{\partial T}\right)dT + \sum_i\bar M_i\,dx_i \qquad (3)$$

4. **Differentiate the summability relation (2):**
$$dM = \sum_ix_i\,d\bar M_i + \sum_i\bar M_i\,dx_i \qquad (4)$$

5. **Subtract (3) from (4):** the $\sum\bar M_i\,dx_i$ terms cancel, leaving the Gibbs–Duhem equation
$$\left(\frac{\partial M}{\partial P}\right)_{T,x}dP + \left(\frac{\partial M}{\partial T}\right)_{P,x}dT - \sum_ix_i\,d\bar M_i = 0$$

6. **At constant T and P** (dT = dP = 0), for a binary:
$$\boxed{x_1\,d\bar M_1 + x_2\,d\bar M_2 = 0}$$
   Dividing by $dx_1$: $x_1\dfrac{d\bar M_1}{dx_1} + x_2\dfrac{d\bar M_2}{dx_1} = 0$.

7. **Consequences.** The two partial properties are not independent: if $\bar M_1(x_1)$ is known, $\bar M_2$ follows by integration. The slopes $d\bar M_1/dx_1$ and $d\bar M_2/dx_1$ have opposite signs. At $x_1 \to 1$, $d\bar M_1/dx_1 \to 0$ (and at $x_1 \to 0$, $d\bar M_2/dx_1 \to 0$), so each partial property approaches its pure-species value with zero slope. Applied to M = Gᴱ/RT this becomes $x_1\,d\ln\gamma_1 + x_2\,d\ln\gamma_2 = 0$, the basis of consistency tests.`,
          answer: String.raw`From d(nM) = n(∂M/∂P)dP + n(∂M/∂T)dT + ΣM̄ᵢdnᵢ with nᵢ = xᵢn: M = ΣxᵢM̄ᵢ and dM = (∂M/∂P)dP + (∂M/∂T)dT + ΣM̄ᵢdxᵢ; differentiating summability and subtracting gives (∂M/∂P)dP + (∂M/∂T)dT − ΣxᵢdM̄ᵢ = 0 ⇒ at const T, P: x₁dM̄₁ + x₂dM̄₂ = 0.` }
      ] },
    { id: "2018-19-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q3a", label: "(a)", marks: "15",
          topic: "solution-theory", sub: "Fugacity coefficient of a species in a binary gas mixture from the virial equation",
          type: "derivation", syllabus: "in", repeats: ["2016-17-Q3a", "2014-15-Q3b"],
          text: String.raw`How could you estimate fugacity co-efficient of species i in a binary mixture from Virial equation of state?`,
          solution: String.raw`1. **Starting relation.** $\ln\hat\phi_i$ is the partial property of $G^R/RT$, and at constant T and composition
$$\frac{G^R}{RT} = \int_0^P(Z - 1)\frac{dP}{P} \quad\Rightarrow\quad \ln\hat\phi_i = \int_0^P(\bar Z_i - 1)\frac{dP}{P}, \qquad \bar Z_i = \left[\frac{\partial(nZ)}{\partial n_i}\right]_{T,P,n_j}$$

2. **Virial equation for the mixture** (two terms, valid at low to moderate P):
$$Z = 1 + \frac{BP}{RT}, \qquad B = \sum_i\sum_jy_iy_jB_{ij}$$
   $B_{ij}$ depends only on T ($B_{ij} = B_{ji}$). For a binary, $B = y_1^2B_{11} + 2y_1y_2B_{12} + y_2^2B_{22}$.

3. **Integrate (B independent of P):** $nG^R/RT = nBP/RT$, so
$$\ln\hat\phi_k = \frac{P}{RT}\left[\frac{\partial(nB)}{\partial n_k}\right]_{T,n_j}$$

4. **Binary.** Write $B = y_1B_{11} + y_2B_{22} + y_1y_2\delta_{12}$ with $\delta_{12} \equiv 2B_{12} - B_{11} - B_{22}$. Then
$$nB = n_1B_{11} + n_2B_{22} + \frac{n_1n_2}{n}\delta_{12}$$
$$\left[\frac{\partial(nB)}{\partial n_1}\right]_{T,n_2} = B_{11} + \left(\frac{1}{n} - \frac{n_1}{n^2}\right)n_2\delta_{12} = B_{11} + (1 - y_1)y_2\delta_{12} = B_{11} + y_2^2\delta_{12}$$

5. **Result:**
$$\boxed{\ln\hat\phi_1 = \frac{P}{RT}\left(B_{11} + y_2^2\delta_{12}\right), \qquad \ln\hat\phi_2 = \frac{P}{RT}\left(B_{22} + y_1^2\delta_{12}\right)}$$
   General multicomponent form: $\ln\hat\phi_k = \dfrac{P}{RT}\left[B_{kk} + \tfrac12\sum_i\sum_jy_iy_j(2\delta_{ik} - \delta_{ij})\right]$, with $\delta_{ik} = 2B_{ik} - B_{ii} - B_{kk}$.

6. **How to estimate the B's (procedure):**
   - Pure $B_{ii}$ from data or from the generalized Pitzer correlation: $\dfrac{B_{ii}P_{ci}}{RT_{ci}} = B^0 + \omega_iB^1$, with $B^0 = 0.083 - 0.422/T_r^{1.6}$ and $B^1 = 0.139 - 0.172/T_r^{4.2}$.
   - Cross coefficient $B_{12}$ from the same correlation with combining rules: $\omega_{12} = (\omega_1 + \omega_2)/2$, $T_{c12} = (T_{c1}T_{c2})^{1/2}(1 - k_{12})$, $Z_{c12} = (Z_{c1} + Z_{c2})/2$, $V_{c12} = [(V_{c1}^{1/3} + V_{c2}^{1/3})/2]^3$, $P_{c12} = Z_{c12}RT_{c12}/V_{c12}$, and $B_{12} = \dfrac{RT_{c12}}{P_{c12}}(B^0 + \omega_{12}B^1)$ at $T_{r12} = T/T_{c12}$.
   - Compute $\delta_{12}$, then $\hat\phi_1$ and $\hat\phi_2$ from step 5; $\hat f_i = y_i\hat\phi_iP$.

7. **Limits.** As $y_1 \to 1$, $\ln\hat\phi_1 \to B_{11}P/RT$ (the pure-species value). At infinite dilution, $\ln\hat\phi_1^\infty = (P/RT)(B_{11} + \delta_{12})$. If $\delta_{12}$ = 0, the mixture follows the Lewis–Randall rule, $\hat\phi_i = \phi_i$.`,
          answer: String.raw`With Z = 1 + BP/RT, B = ΣΣyᵢyⱼBᵢⱼ: ln φ̂ₖ = (P/RT)[∂(nB)/∂nₖ] ⇒ ln φ̂₁ = (P/RT)(B₁₁ + y₂²δ₁₂), ln φ̂₂ = (P/RT)(B₂₂ + y₁²δ₁₂), δ₁₂ = 2B₁₂ − B₁₁ − B₂₂; Bᵢⱼ from data or the Pitzer correlation with combining rules for B₁₂.` },
        { id: "2018-19-Q3b", label: "(b)", marks: "20",
          topic: "solution-theory", sub: "V = 120x₁ + 70x₂ + (15x₁ + 8x₂)x₁x₂: partial volumes, Gibbs–Duhem and plot",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q2b", "2014-15-Q2b"],
          text: String.raw`The molar volume (cm³/mol) of a binary liquid mixture at T and P is given by

$$V = 120x_1 + 70x_2 + (15x_1 + 8x_2)x_1x_2$$

(i) Find the expressions for partial molar volume $\bar V_1$ and $\bar V_2$.

(ii) Show that these expressions satisfy Gibbs/Duhem equation

(iii) Plot molar volume and partial molar volume Vs composition and label the points of $V_1$, $V_2$, $\bar V_1^\infty$ and $\bar V_2^\infty$ with their values.`,
          solution: String.raw`**Given:** V(x₁) in cm³/mol at fixed T, P.

**Find:** $\bar V_1$ and $\bar V_2$; a Gibbs–Duhem check; the plot.

**Method:** for a binary, $\bar M_1 = M + x_2\dfrac{dM}{dx_1}$ and $\bar M_2 = M - x_1\dfrac{dM}{dx_1}$.

1. **V as a polynomial in $x_1$** ($x_2 = 1 - x_1$):
$$V = 70 + 50x_1 + (8 + 7x_1)(x_1 - x_1^2) = 70 + 58x_1 - x_1^2 - 7x_1^3$$
$$\frac{dV}{dx_1} = 58 - 2x_1 - 21x_1^2$$

2. **(i) Partial molar volumes:**
$$\bar V_1 = V + (1 - x_1)\frac{dV}{dx_1} = 70 + 58x_1 - x_1^2 - 7x_1^3 + (1 - x_1)(58 - 2x_1 - 21x_1^2)$$
$$\boxed{\bar V_1 = 128 - 2x_1 - 20x_1^2 + 14x_1^3}$$
$$\bar V_2 = V - x_1\frac{dV}{dx_1} = 70 + 58x_1 - x_1^2 - 7x_1^3 - 58x_1 + 2x_1^2 + 21x_1^3$$
$$\boxed{\bar V_2 = 70 + x_1^2 + 14x_1^3}$$
   Summability check: $x_1\bar V_1 + x_2\bar V_2 = V$, e.g. at $x_1$ = 0.5: 0.5(123.75) + 0.5(72.00) = 97.875 = V ✓.

3. **(ii) Gibbs–Duhem,** $x_1\dfrac{d\bar V_1}{dx_1} + x_2\dfrac{d\bar V_2}{dx_1} = 0$:
$$\frac{d\bar V_1}{dx_1} = -2 - 40x_1 + 42x_1^2, \qquad \frac{d\bar V_2}{dx_1} = 2x_1 + 42x_1^2$$
$$x_1(-2 - 40x_1 + 42x_1^2) + (1 - x_1)(2x_1 + 42x_1^2) = -2x_1 - 40x_1^2 + 42x_1^3 + 2x_1 + 42x_1^2 - 2x_1^2 - 42x_1^3 = 0\ ✓$$
   Also $d\bar V_1/dx_1 = 0$ at $x_1$ = 1 and $d\bar V_2/dx_1 = 0$ at $x_1$ = 0: each partial volume meets its pure value with zero slope.

4. **(iii) Values for the plot:**

| $x_1$ | V | $\bar V_1$ | $\bar V_2$ |
|---|---|---|---|
| 0 | 70.00 | 128.00 | 70.00 |
| 0.25 | 84.33 | 126.47 | 70.28 |
| 0.50 | 97.88 | 123.75 | 72.00 |
| 0.75 | 109.98 | 121.16 | 76.47 |
| 1 | 120.00 | 120.00 | 85.00 |

   Labelled points: $V_1$ = 120 (pure 1, $x_1$ = 1), $V_2$ = 70 (pure 2, $x_1$ = 0), $\bar V_1^\infty$ = 128 (at $x_1$ = 0), $\bar V_2^\infty$ = 85 (at $x_1$ = 1).

![V, V̄₁ and V̄₂ against x₁ with the pure-component and infinite-dilution values marked](fig/2018-19-Q3b-sol.svg)

5. **Reading the plot.** The tangent to the V curve at any $x_1$ meets the axis $x_1$ = 0 at $\bar V_2$ and the axis $x_1$ = 1 at $\bar V_1$ (tangent-intercept construction). $V^E = (15x_1 + 8x_2)x_1x_2 > 0$, an expansion on mixing, so both partial volumes exceed the pure-species volumes: $\bar V_1 \ge 120$ and $\bar V_2 \ge 70$.

**Result:** $\bar V_1 = 128 - 2x_1 - 20x_1^2 + 14x_1^3$ and $\bar V_2 = 70 + x_1^2 + 14x_1^3$ (cm³/mol). They satisfy Gibbs–Duhem. $V_1$ = 120, $V_2$ = 70, $\bar V_1^\infty$ = 128, $\bar V_2^\infty$ = 85.`,
          answer: String.raw`V = 70 + 58x₁ − x₁² − 7x₁³ ⇒ V̄₁ = 128 − 2x₁ − 20x₁² + 14x₁³, V̄₂ = 70 + x₁² + 14x₁³; x₁dV̄₁/dx₁ + x₂dV̄₂/dx₁ = 0 identically. V₁ = 120, V₂ = 70, V̄₁^∞ = 128, V̄₂^∞ = 85 cm³/mol.` }
      ] },
    { id: "2018-19-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q4a", label: "(a)", marks: "15",
          topic: "solution-applications", sub: "Gᴱ/x₁x₂RT linear in x₁ (Margules): derive ln γ₁",
          type: "derivation", syllabus: "in", repeats: ["2015-16-Q7b", "2013-14-Q6b"],
          text: String.raw`If excess Gibbs energy in a binary solution, $G^E/x_1x_2RT$ is linear function of $x_1$, find the corresponding equation for $\ln\gamma_1$.`,
          solution: String.raw`1. **Linear form.** Write the straight line in terms of its end values (intercepts) at $x_1$ = 0 and $x_1$ = 1:
$$\frac{G^E}{x_1x_2RT} = A_{21}x_1 + A_{12}x_2 \quad\Rightarrow\quad \frac{G^E}{RT} = (A_{21}x_1 + A_{12}x_2)x_1x_2$$
   This is the two-parameter **Margules equation**.

2. **ln γ₁ is the partial property of Gᴱ/RT.** Multiply by n and use $x_i = n_i/n$:
$$\frac{nG^E}{RT} = \frac{n_1n_2(A_{21}n_1 + A_{12}n_2)}{n^2}$$

3. **Differentiate with respect to $n_1$** ($n_2$ constant, $\partial n/\partial n_1 = 1$):
$$\ln\gamma_1 = \left[\frac{\partial(nG^E/RT)}{\partial n_1}\right]_{T,P,n_2} = \frac{n_2(A_{21}n_1 + A_{12}n_2) + n_1n_2A_{21}}{n^2} - \frac{2n_1n_2(A_{21}n_1 + A_{12}n_2)}{n^3}$$
$$= x_2(A_{21}x_1 + A_{12}x_2) + A_{21}x_1x_2 - 2x_1x_2(A_{21}x_1 + A_{12}x_2)$$

4. **Simplify** (take out $x_2$ and use $1 - x_1 = x_2$):
$$\ln\gamma_1 = x_2\left[2A_{21}x_1(1 - x_1) + A_{12}x_2(1 - 2x_1)\right] = x_2^2\left[2A_{21}x_1 + A_{12}(1 - 2x_1)\right]$$
$$\boxed{\ln\gamma_1 = x_2^2\left[A_{12} + 2(A_{21} - A_{12})x_1\right]}$$
   By symmetry, $\ln\gamma_2 = x_1^2\left[A_{21} + 2(A_{12} - A_{21})x_2\right]$.

5. **Checks.**
   - Summability: $x_1\ln\gamma_1 + x_2\ln\gamma_2 = x_1x_2[x_2A_{12} + 2(A_{21} - A_{12})x_1x_2 + x_1A_{21} + 2(A_{12} - A_{21})x_1x_2] = x_1x_2(A_{21}x_1 + A_{12}x_2) = G^E/RT$ ✓
   - Limits: $x_1 \to 0$ gives $\ln\gamma_1^\infty = A_{12}$, and $x_1 \to 1$ gives $\ln\gamma_1 \to 0$ ✓. So the intercepts of the $G^E/x_1x_2RT$ line give $\ln\gamma_1^\infty$ (at $x_1$ = 0) and $\ln\gamma_2^\infty$ (at $x_1$ = 1).
   - If $A_{12} = A_{21} = A$: $\ln\gamma_1 = Ax_2^2$, the one-parameter symmetric form.`,
          answer: String.raw`Gᴱ/x₁x₂RT = A₂₁x₁ + A₁₂x₂ (Margules) ⇒ ln γ₁ = ∂(nGᴱ/RT)/∂n₁ = x₂²[A₁₂ + 2(A₂₁ − A₁₂)x₁] (and ln γ₂ = x₁²[A₂₁ + 2(A₁₂ − A₂₁)x₂]); ln γ₁^∞ = A₁₂.` },
        { id: "2018-19-Q4b", label: "(b)", marks: "20",
          topic: "solution-applications", sub: "Single-effect evaporator, 10 % to 40 % LiCl at 2 kg/s: heat-transfer rate",
          type: "numerical", syllabus: "in", repeats: ["2016-17-Q4a"],
          text: String.raw`A single effect evaporator operating at atmospheric pressure concentrate 10% (wt) LiCl solution of 40%. The feed enters the evaporator at a rate 2 kg/s at 25°C. The normal boiling point of a 40% LiCl solution is about 132°C and its specific heat is estimated as 2.72 kJkg⁻¹°C⁻¹. What is the heat transfer rate in the evaporator? The enthalpy change per mole of water to produce 132°C superheated steam is 3636 kJ.`,
          solution: String.raw`**Given:** feed 2 kg/s of 10 wt% LiCl at 25 °C; product 40% LiCl at 132 °C (its normal boiling point), $C_p$ = 2.72 kJ/(kg·°C); vapour leaves as superheated steam at 132 °C and 1 atm.

**Find:** $\dot Q$.

**Assumptions:**
- Steady flow, 1 atm; kinetic and potential energy neglected, so $\dot Q = \Delta\dot H$.
- Heats of solution at 25 °C from the attached Fig. 12.14 (LiCl curve).
- **The printed "3636 kJ per mole" is a misprint.** Steam tables give H₂O(l, 25 °C) → steam (132 °C, 1 atm): 2740.3 − 104.8 = **2635.5 kJ per kg** (SVNA uses this value). It is used below; the literal 3636 kJ/kg is checked at the end.
- M(LiCl) = 42.39 and M(H₂O) = 18.015 g/mol.

1. **Material balance.**
   - LiCl: 0.10(2) = 0.2 kg/s = 4.718 mol/s.
   - Product: 0.2/0.40 = 0.5 kg/s (0.2 LiCl + 0.3 water).
   - Water evaporated: 2 − 0.5 = **1.5 kg/s**.
   - Feed: 1.8 kg/s water = 99.92 mol/s, so $\tilde n_F$ = 99.92/4.718 = 21.18.
   - Product: 0.3 kg/s water = 16.65 mol/s, so $\tilde n_P$ = 3.53.

2. **Chart readings (Fig. 12.14, LiCl(s) curve).** Go up from ñ on the log axis to the curve:
   - $\tilde n$ = 21.18: $\Delta\tilde H$ = **−34.9 kJ/mol LiCl**
   - $\tilde n$ = 3.53 (near the start of the curve at ñ ≈ 3): $\Delta\tilde H$ = **−23.4 kJ/mol LiCl**

![How to read Fig. 12.14: ñ = 21.18 → LiCl(s) curve → ΔH̃ ≈ −34.9 kJ/mol; ñ = 3.53 → ΔH̃ ≈ −23.4 kJ/mol](fig/2018-19-Q4b-read.svg)

3. **Path at 25 °C, then heating** (enthalpy is a state function). For each step:
   - (a) **Unmix** the feed into LiCl(s) and water at 25 °C: $\Delta\dot H_a = -4.718(-34.9) = +164.6$ kJ/s
   - (b) **Mix** 0.2 kg/s LiCl with 0.3 kg/s water into 40% solution at 25 °C: $\Delta\dot H_b = 4.718(-23.4) = -110.4$ kJ/s
   - (c) **Heat** the 40% solution from 25 to 132 °C: $\Delta\dot H_c = 0.5(2.72)(132 - 25) = 145.5$ kJ/s
   - (d) **Vaporise** 1.5 kg/s of water from liquid at 25 °C to steam at 132 °C and 1 atm: $\Delta\dot H_d = 1.5(2635.5) = 3953.3$ kJ/s

4. **Heat-transfer rate:**
$$\dot Q = 164.6 - 110.4 + 145.5 + 3953.3 = 4153\ \mathrm{kJ/s} \approx 4.15\ \mathrm{MW}$$

5. **Sensitivity to the printed value.** If 3636 kJ per kg of water were used literally, step (d) would be 5454 kJ/s and $\dot Q$ = 5654 kJ/s. Per *mole* the figure is impossible: about 83 mol/s × 3636 kJ ≈ 3 × 10⁵ kJ/s. Nearly 95% of the duty is the latent and sensible heat of the evaporated water; the heats of solution add only about +54 kJ/s.

**Result:** $\dot Q$ ≈ 4150 kJ/s (with 2635.5 kJ/kg for the water; 5654 kJ/s if the printed 3636 kJ/kg is taken literally).`,
          answer: String.raw`LiCl 4.718 mol/s; ñ = 21.18 (feed) → 3.53 (product); Fig. 12.14: −34.9 and −23.4 kJ/mol. Q̇ = 164.6 − 110.4 + 0.5(2.72)(107) + 1.5(2635.5) = 164.6 − 110.4 + 145.5 + 3953.3 ≈ 4153 kJ/s (printed "3636 kJ per mole" taken as the steam-table 2635.5 kJ/kg; literal 3636 kJ/kg gives 5654 kJ/s).` }
      ] },
    { id: "2018-19-Q5", q: 5, section: "B", compulsory: true,
      stem: String.raw`Answer any nine (9) of the ten (10) questions below. Justify your answer with **adequate reasoning.** Answering without any reasoning will bear zero marks. **(9×5 = 45)**`,
      parts: [
        { id: "2018-19-Q5i", label: "(i)", marks: "5",
          topic: "refrigeration", sub: "How absorption refrigeration maintains the pressure difference",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`In vapor compression refrigeration cycle, the temperature of condenser is higher than the evaporator. It is the same coolant which evaporates at a lower temperature and condenses at a higher temperature in the evaporator and condenser respectively. This is achieved by using a compressor. In case of absorption refrigeration, there is no compressor, therefore, the pressure difference is maintained by -

a) An external heat-source ad vacuum pump.
b) A compressor
c) A pump
d) A throttle valve`,
          solution: String.raw`**Answer: (c) A pump** — strictly, the **pump together with the external heat source** (generator), which takes the place of the compressor.

1. In the absorption cycle the low-pressure refrigerant vapour is **absorbed** into a liquid (e.g. NH₃ into water) at the evaporator pressure. Absorption turns the vapour into a liquid solution.
2. A **liquid pump** then raises the strong solution to the condenser pressure. Pumping a liquid needs very little work, $W = \int V\,dP$ with small V. This is what maintains the high side / low side pressure difference.
3. In the **generator**, an external heat source drives the refrigerant vapour out of the solution at high pressure, and the vapour goes to the condenser. The throttle valves (refrigerant expansion valve and solution return valve) only *let the pressure down*; they cannot create a pressure difference.
4. Option (a) mentions an external heat source, but a vacuum pump is not used. (b) is wrong: there is no compressor. (d) is wrong: a throttle valve only reduces pressure. The device that actually raises the pressure is the solution **pump** (c), with heat supplied in the generator.`,
          answer: String.raw`(c) A pump: the vapour is absorbed into liquid at low P and the solution is pumped (small ∫V dP) to high P, where generator heat releases the refrigerant; valves only reduce pressure, there is no compressor or vacuum pump.` },
        { id: "2018-19-Q5ii", label: "(ii)", marks: "5",
          topic: "reaction-equilibria", sub: "Effect of pressure on a gas-phase reaction with Σν > 0",
          type: "theory", syllabus: "in", repeats: ["2021-22-Q5i"],
          text: String.raw`If the total stoichiometric number $\nu = \sum\nu_i$ is positive, and increase in P at constant temperature (according to $\prod_i(y_i)^{\nu_i} = \left(\dfrac{P}{P_o}\right)^{-\nu}K$, symbols have their usual meanings)

a) will cause a shift of the reaction to the right
b) will cause a shift of the reaction to the left
c) will not affect the equilibrium at all
d) will cause an unpredictable effect`,
          solution: String.raw`**Answer: (b) shift of the reaction to the left.**

$$\prod_iy_i^{\nu_i} = \left(\frac{P}{P^\circ}\right)^{-\nu}K$$
K depends on T only. If ν = Σνᵢ > 0 (more moles of gaseous products than reactants), raising P at constant T makes $(P/P^\circ)^{-\nu}$ **smaller**. The equilibrium product $\prod y_i^{\nu_i}$ must then fall: fewer products and more reactants, so the equilibrium extent ε decreases. This is Le Chatelier's principle: higher pressure favours the side with fewer moles (smaller volume).

Example: $\mathrm{CH_4 + H_2O \rightleftharpoons CO + 3H_2}$ (ν = +2). Steam reforming is therefore favoured by **low** pressure. For ν < 0 (e.g. NH₃ synthesis, ν = −2) high pressure shifts the reaction right; for ν = 0 pressure has no effect (ideal gases).`,
          answer: String.raw`(b) Left: Πyᵢ^νᵢ = (P/P°)^−ν K with K = f(T); for ν > 0 a rise in P lowers the right side, so the product mole fractions fall (Le Chatelier — fewer moles favoured), e.g. steam reforming favoured by low P.` },
        { id: "2018-19-Q5iii", label: "(iii)", marks: "5",
          topic: "refrigeration", sub: "Most critical factor for choosing multistage (cascade) refrigeration",
          type: "theory", syllabus: "in", repeats: ["2021-22-Q5ii"],
          text: String.raw`Using cascade refrigeration loop, higher cooling efficiency can be achieved. In this case, we need to connect them in a way that one loops evaporator becomes condenser for the other. What is the most critical factor to choose multiple-stage refrigeration over single stage -

a) Limits of temperature difference
b) Limits on operating pressures
c) Limits on the condenser
d) Limits on the evaporator`,
          solution: String.raw`**Answer: (a) Limits of temperature difference** (with the pressure ratio that follows from it).

1. In a single-stage vapour-compression cycle, one refrigerant must evaporate at $T_C$ and condense at $T_H$. The required pressure ratio $P_{sat}(T_H)/P_{sat}(T_C)$ grows roughly exponentially with $T_H - T_C$ (Clausius–Clapeyron).

2. When $T_H - T_C$ is large (deep refrigeration, below about −30 to −40 °C with rejection to ambient):
   - **No single refrigerant suits both ends.** At $T_C$ its vapour pressure is far below 1 atm (air leaks in, vapour volume is huge), or near $T_H$ it approaches its critical point (little latent heat).
   - The **compression ratio is very high**, so compressor efficiency and volumetric efficiency fall and the discharge temperature becomes excessive.
   - **Throttling losses rise sharply**: a large fraction of the liquid flashes, and ω falls well below the Carnot value $T_C/(T_H - T_C)$.

3. **Cascade remedy.** Split $T_H - T_C$ into two or more smaller lifts, each with its own refrigerant (e.g. NH₃ or R-134a in the upper loop, ethane or CO₂ in the lower). The evaporator of the upper loop is the condenser of the lower loop. Each loop then works at a moderate pressure ratio, and the overall ω is much closer to Carnot.

4. The operating-pressure limits (b) and the condenser and evaporator conditions (c, d) all follow from the **overall temperature difference**, which is therefore the critical factor.`,
          answer: String.raw`(a) Limits of temperature difference: a large T_H − T_C needs a huge pressure ratio, with no single refrigerant suitable at both ends, poor compressor efficiency, high discharge temperature and big throttling losses. A cascade splits the lift between loops with different refrigerants.` },
        { id: "2018-19-Q5iv", label: "(iv)", marks: "5",
          topic: "refrigeration", sub: "Is the Linde process a limiting case of the Claude process?",
          type: "theory", syllabus: "in", repeats: ["2013-14-Q1a"],
          text: String.raw`Linde process is a limiting case of Claude process. True/False (Justify)`,
          solution: String.raw`**True.**

Energy balance on the cold section (heat exchanger, throttle, separator and expander; adiabatic) of the Claude process, per unit of gas entering (SVNA §9.6 numbering):
$$z = \frac{H_4 - H_{15}}{H_9 - H_{15}} + x\,\frac{H_{12} - H_5}{H_9 - H_{15}}$$
where x is the fraction of the high-pressure gas sent through the expansion engine (inlet 5, exhaust 12).

- The Claude process combines **heat exchange, work-producing expansion and throttling**. The Linde process uses heat exchange and throttling only.
- Setting **x = 0** (no gas to the expander) leaves only the first term, $z = (H_4 - H_{15})/(H_9 - H_{15})$, which is exactly the Linde result.

So the Linde process is the limiting case of the Claude process with zero expander flow. Since $H_{12} < H_5$ and $H_9 < H_{15}$, the second term is positive: the Claude process always liquefies a larger fraction at the same conditions.`,
          answer: String.raw`True: Claude z = (H₄ − H₁₅)/(H₉ − H₁₅) + x(H₁₂ − H₅)/(H₉ − H₁₅); with x = 0 (no gas to the expander) it reduces to Linde's z = (H₄ − H₁₅)/(H₉ − H₁₅). The expander term is positive, so Claude yields more.` },
        { id: "2018-19-Q5v", label: "(v)", marks: "5",
          topic: "phase-equilibria-topics", sub: "Do phase-stability criteria apply to non-equilibrium states?",
          type: "theory", syllabus: "in", repeats: ["2021-22-Q5iii"],
          text: String.raw`Phase stability criteria are applicable to both equilibrium and non-equilibrium states. True/False (Justify).`,
          solution: String.raw`**True.**

1. The criteria come from the second law: $dU^t + P\,dV^t - T\,dS^t \le 0$, i.e. $(dG^t)_{T,P} \le 0$. The **inequality** applies to every *irreversible* change of a closed system (a non-equilibrium state moving towards equilibrium). The **equality** holds at equilibrium (Kirtania: "this equation defines both irreversible and equilibrium processes").

2. The stability condition for a binary liquid,
$$\frac{d^2(\Delta G/RT)}{dx_1^2} > 0 \;\Leftrightarrow\; \frac{d\ln\gamma_1}{dx_1} > -\frac{1}{x_1} \;\Leftrightarrow\; \frac{d\hat f_1}{dx_1} > 0 \qquad (T, P\ \text{const.})$$
   is a property of the **homogeneous mixture at the given T, P, x**. It can be evaluated for any proposed single-phase state, whether or not that state is the final equilibrium one.

3. **Use for non-equilibrium states:** if a freshly mixed homogeneous liquid (not yet in equilibrium) violates the criterion, $G^t$ can still fall by splitting. The mixture will then separate spontaneously into two liquid phases (LLE). If the criterion is satisfied, the single phase is stable, or at most metastable between the binodal and the spinodal.

4. **Use at equilibrium:** a computed equilibrium state, e.g. from a $G^E$ model, must also meet the criterion. Otherwise it is not physically realisable (an S-shaped P–x curve, or $dy_1/dx_1 < 0$).`,
          answer: String.raw`True: derived from dUᵗ + PdVᵗ − TdSᵗ ≤ 0 [(dGᵗ)_T,P ≤ 0], which covers irreversible (non-equilibrium) changes and equilibrium alike; d²(ΔG/RT)/dx₁² > 0 tests any homogeneous state — if violated, a (non-equilibrium) mixture splits spontaneously; equilibrium solutions must satisfy it too.` },
        { id: "2018-19-Q5vi", label: "(vi)", marks: "5",
          topic: "refrigeration", sub: "Second law: moving heat from low to high temperature requires work",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`If heat is transferred from a low temperature level to a higher one, this requires ____________ according to the second law. Fill in the gap and justify.`,
          solution: String.raw`**Fill in: work (an input of external energy, work or high-temperature heat).** The full statement: transferring heat from a lower to a higher temperature level requires the expenditure of **work**.

1. **Clausius statement of the second law:** no process is possible whose *sole* result is the transfer of heat from a colder to a hotter body. Heat flows spontaneously only "downhill".

2. **Proof by entropy.** A cyclic device takes $|Q_C|$ at $T_C$ and rejects $|Q_H|$ at $T_H > T_C$. With ΔS(device) = 0 over a cycle,
$$\Delta S_{total} = \frac{|Q_H|}{T_H} - \frac{|Q_C|}{T_C} \ge 0 \;\Rightarrow\; |Q_H| \ge |Q_C|\frac{T_H}{T_C} > |Q_C|$$
   By the first law, $W = |Q_H| - |Q_C| > 0$. Work must be supplied. With W = 0, $\Delta S_{total} = |Q_C|(1/T_H - 1/T_C) < 0$, which is impossible.

3. **Minimum work** (Carnot refrigerator): $W_{min} = |Q_C|\dfrac{T_H - T_C}{T_C}$, so ω ≤ $T_C/(T_H - T_C)$. Every refrigerator and heat pump therefore needs a compressor (work) or, in absorption machines, heat from a high-temperature source (equivalent to work).`,
          answer: String.raw`Work (external energy input). Clausius statement: heat cannot by itself flow from cold to hot; ΔS_total = |Q_H|/T_H − |Q_C|/T_C ≥ 0 forces |Q_H| > |Q_C|, so W = |Q_H| − |Q_C| > 0, with W_min = |Q_C|(T_H − T_C)/T_C.` },
        { id: "2018-19-Q5vii", label: "(vii)", marks: "5",
          topic: "reaction-equilibria", sub: "Degrees of freedom for CaCO₃(s) → CaO(s) + CO₂(g)",
          type: "theory", syllabus: "in", repeats: ["2021-22-Q5v"],
          text: String.raw`If CaCO₃ breaks down in a reaction: CaCO₃(s) → CaO(s) + CO₂(g). How many degrees of freedom available for this case?

a) 0 b) 1 c) 2 d) 3`,
          solution: String.raw`**Answer: (b) 1.**

1. **Phase rule with reaction:** F = 2 − π + N − r − s.
2. **Phases:** CaCO₃(s), CaO(s) and CO₂(g) are three separate pure phases (the solids do not form a solution), so π = 3. **Species:** N = 3. **Reactions:** r = 1. **Special constraints:** s = 0. The usual "equal amounts" stoichiometric constraint does not apply, because CaO and CO₂ are in different phases.
$$F = 2 - 3 + 3 - 1 - 0 = 1$$
3. **Meaning:** $K = \hat f_{CO_2}/P^\circ \approx P_{CO_2}/P^\circ$, since the pure solids have unit activity. Fixing T fixes the decomposition pressure of CO₂, e.g. about 1 atm near 1170 K for limestone calcination. Only one variable (T or P) can be chosen independently.`,
          answer: String.raw`(b) 1: π = 3 (two pure solids + gas), N = 3, r = 1, s = 0 ⇒ F = 2 − 3 + 3 − 1 = 1; K ≈ P_CO₂/P°, so T fixes the decomposition pressure.` },
        { id: "2018-19-Q5viii", label: "(viii)", marks: "5",
          topic: "phase-equilibria-topics", sub: "Solid–vapour equilibrium: which species is insoluble in the solid",
          type: "theory", syllabus: "in", repeats: ["2021-22-Q5vi"],
          text: String.raw`In solid/vapor equilibrium, there would be a binary vapor phase containing species 1 and species 2. Among these two -

a) species 1 is insoluble in the solid
b) species 2 is insoluble in the solid
c) both of them are insoluble in the solid
d) both of them are soluble in the solid`,
          solution: String.raw`**Answer: (b) species 2 is insoluble in the solid** (with the usual SVNA numbering).

1. **The SVE problem** (SVNA §14.7, Kirtania slides): a pure **solid 1** (the solute) is in equilibrium with a binary **vapour** of species 1 and a "solvent" gas 2. Species 2 does not dissolve in the solid, so the solid phase is pure 1.

2. Because species 2 is absent from the solid, **only species 1** has an equilibrium equation:
$$f_1^s = \hat f_1^v \;\Rightarrow\; y_1 = \frac{P_1^{sat}}{P}\cdot\frac{\phi_1^{sat}}{\hat\phi_1}\exp\frac{V_1^s(P - P_1^{sat})}{RT}$$
   There is no equation for species 2; it simply fills the rest of the vapour ($y_2 = 1 - y_1$).

3. **Example:** naphthalene (1) in supercritical CO₂ (2), or in ethylene, at 35 °C and up to 300 bar. CO₂ does not enter the solid naphthalene crystal, but naphthalene sublimes into the compressed gas. Its solubility $y_1$ rises by orders of magnitude at high pressure because $\hat\phi_1 \ll 1$. This is the basis of **supercritical-fluid extraction** (caffeine from coffee with CO₂).`,
          answer: String.raw`(b) Species 2 (the gas "solvent") is insoluble in the solid; the solid is pure 1, so only f₁ˢ = f̂₁ᵛ applies (y₁ = (P₁ˢᵃᵗ/P)(φ₁ˢᵃᵗ/φ̂₁)exp[V₁ˢ(P − P₁ˢᵃᵗ)/RT]). Example: naphthalene in supercritical CO₂ (SCF extraction).` },
        { id: "2018-19-Q5ix", label: "(ix)", marks: "5",
          topic: "phase-equilibria-topics", sub: "When the Poynting factor matters in solid–vapour equilibrium",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Poynting factor becomes important when -

a) The pressure is low for solid/vapor equilibrium
b) The pressure is high for solid/vapor equilibrium
c) The solid solubility is high for solid/vapor equilibrium
d) The vapor phase enters in the critical state for solid/vapor equilibrium`,
          solution: String.raw`**Answer: (b) The pressure is high for solid/vapour equilibrium.**

For a pure solid 1 in equilibrium with a gas:
$$y_1 = \frac{P_1^{sat}}{P}\,\frac{\phi_1^{sat}}{\hat\phi_1}\exp\frac{V_1^s(P - P_1^{sat})}{RT}$$
The Poynting factor $\exp[V_1^s(P - P_1^{sat})/RT]$ corrects the solid's fugacity from its (very small) sublimation pressure to the system pressure. Since $V^s$ is small (about 10⁻⁴ m³/mol), the exponent is negligible at low P. For naphthalene ($V^s$ ≈ 125 cm³/mol) at 35 °C it is 1.005 at 1 bar, but 1.6 at 100 bar and 4.3 at 300 bar. It therefore matters only at **high pressure**.

(a) is wrong: at low P the factor ≈ 1. (c) Solubility does not set the factor. (d) Near the solvent's critical state the dominant effect is $\hat\phi_1 \ll 1$, not the Poynting factor.`,
          answer: String.raw`(b) High pressure: exp[V₁ˢ(P − P₁ˢᵃᵗ)/RT] ≈ 1 at low P since V₁ˢ is small (≈1.005 at 1 bar), but ~1.6 at 100 bar and ~4 at 300 bar for naphthalene.` },
        { id: "2018-19-Q5x", label: "(x)", marks: "5",
          topic: "phase-equilibria-topics", sub: "Most useful form of the equilibrium/stability criterion",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Among the following representations of the same stability criterion, which one is the most useful and why? (superscript t means total while rest of the symbols have their usual meanings)

a) $(dU^t)_{S^t,V^t} \le 0$
b) $(dS^t)_{U^t,V^t} \ge 0$
c) $(dG^t)_{T,P} \le 0$
d) None of the above`,
          solution: String.raw`**Answer: (c) $(dG^t)_{T,P} \le 0$.**

1. All three are the same second-law criterion, $dU^t + P\,dV^t - T\,dS^t \le 0$, written with different variables held constant.
2. (a) needs constant total entropy and volume, and (b) constant internal energy and volume. **$S^t$ and $U^t$ cannot be measured or controlled directly** in practice.
3. (c) holds **T and P constant**, the variables that are fixed in real laboratory and plant operations. G is directly related to measurable and correlated quantities: $\mu_i$, fugacities, activity coefficients, $\Delta G^\circ_f$.
4. From (c) come all the working results: equilibrium $\sum\nu_i\mu_i = 0$ and $\hat f_i^\alpha = \hat f_i^\beta$, reaction equilibrium $K = \exp(-\Delta G^\circ/RT)$, Gibbs-energy minimisation, and the stability criteria $d^2(\Delta G/RT)/dx_1^2 > 0$. It is therefore the most useful form. (d) is wrong.`,
          answer: String.raw`(c) (dGᵗ)_T,P ≤ 0 — same criterion as (a) and (b) but at constant T and P, which are controllable and measurable (unlike Sᵗ, Uᵗ); it leads to μ/fugacity equality, K = exp(−ΔG°/RT), Gibbs minimisation and the stability criteria.` }
      ] },
    { id: "2018-19-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q6a", label: "(a)", marks: "5",
          topic: "reaction-equilibria", sub: "Effect of temperature on the equilibrium constant (brief)",
          type: "theory", syllabus: "in", repeats: ["2023-24-Q4b", "2021-22-Q7a", "2016-17-Q8a"],
          text: String.raw`What is the effect of temperature on the equilibrium constant? Explain in brief.`,
          solution: String.raw`1. K depends on **temperature only**: $\ln K = -\Delta G^\circ/RT$, with ΔG° at the fixed standard pressure.
2. **van 't Hoff equation:**
$$\frac{d\ln K}{dT} = \frac{\Delta H^\circ}{RT^2}$$
   - **Exothermic** reaction (ΔH° < 0): K **decreases** as T increases, so equilibrium conversion falls (NH₃ and methanol synthesis, water-gas shift).
   - **Endothermic** reaction (ΔH° > 0): K **increases** with T (steam reforming, cracking, dehydrogenation).
   - ΔH° ≈ 0: K is almost independent of T.
3. With ΔH° roughly constant, $\ln(K_2/K_1) = -\dfrac{\Delta H^\circ}{R}\left(\dfrac{1}{T_2} - \dfrac{1}{T_1}\right)$, so ln K against 1/T is nearly a straight line of slope $-\Delta H^\circ/R$. The rigorous form is $K = K_0K_1K_2$, in which $K_1 = \exp[(\Delta H_0^\circ/RT_0)(1 - T_0/T)]$ carries most of the effect and $K_2$ (the $\Delta C_P^\circ$ correction) is close to 1.
4. This agrees with Le Chatelier's principle: raising T favours the heat-absorbing direction.`,
          answer: String.raw`K = f(T) only; d ln K/dT = ΔH°/RT²: exothermic ⇒ K falls with T, endothermic ⇒ K rises, ΔH° ≈ 0 ⇒ ~constant; ln K vs 1/T ≈ linear with slope −ΔH°/R (Le Chatelier).` },
        { id: "2018-19-Q6b", label: "(b)", marks: "10",
          topic: "reaction-equilibria", sub: "Liquid-phase reaction in ideal solution: Πxᵢ^νᵢ = K, with assumptions",
          type: "derivation", syllabus: "in", repeats: ["2017-18-Q5b", "2015-16-Q2c", "2014-15-Q6b"],
          text: String.raw`Derive the equation for liquid phase reactions for ideal solution $\left(\prod_i(x_i)^{\nu_i} = K\right)$. State all the necessary assumptions during the derivation.`,
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
          answer: String.raw`Σνᵢμᵢ = 0 ⇒ Π(f̂ᵢ/fᵢ°)^νᵢ = K; f̂ᵢ/fᵢ° = γᵢxᵢ exp[Vᵢ(P − P°)/RT] ⇒ Π(γᵢxᵢ)^νᵢ = K exp[(P° − P)ΣνᵢVᵢ/RT] → (Poynting ≈ 1, ideal solution γᵢ = 1) Πxᵢ^νᵢ = K. Assumptions: const T, P; single liquid phase; pure-liquid standard state at P°; incompressible, small Vᵢ, moderate P; ideal solution.` },
        { id: "2018-19-Q6c", label: "(c)", marks: "10",
          topic: "reaction-equilibria", sub: "CH₄/H₂O at 1000 K, 1 bar: Gibbs-minimisation equations (not solved)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The equilibrium compositions at 1000 K and 1 bar of a gas-phase system containing the species CH₄, H₂O, CO, CO₂ and H₂ are to be determined. In the initial unreacted state, there are 2 mol CH₄ ad 3 mol of H₂O present. Value of $G_f^o$ at 1000 K are:

$$\Delta G^0_{f\,CH_4} = 19.72\ \mathrm{kJ/mol} \qquad \Delta G^o_{f\,H_2O} = -192.42\ \mathrm{kJ/mol}$$
$$\Delta G^o_{f\,CO} = -200.24\ \mathrm{kJ/mol} \qquad \Delta G^o_{f\,CO_2} = -395.79\ \mathrm{kJ/mol}$$

From the system of equations for this system. You do not need to solve the equations, (necessary equation: $\Delta G^o_{f_i} + RT\ln\left(\dfrac{y_i\phi_iP}{P^o}\right) + \sum_k\lambda_ka_{ik} = 0$; symbols have their usual meanings)`,
          solution: String.raw`**Given:** T = 1000 K, P = 1 bar; feed 2 mol CH₄ and 3 mol H₂O; species CH₄, H₂O, CO, CO₂, H₂; $\Delta G^\circ_f$ (J/mol): CH₄ 19 720, H₂O −192 420, CO −200 240, CO₂ −395 790, H₂ 0 (element).

**Find:** the system of equations (not their solution).

**Assumptions:** ideal gases ($\hat\phi_i$ = 1) at $P = P^\circ$ = 1 bar, so $\ln(y_i\hat\phi_iP/P^\circ) = \ln y_i$. RT = 8314 J/mol.

1. **Element totals** $A_k = \sum_in_{i0}a_{ik}$:
$$A_C = 2, \qquad A_H = 4(2) + 2(3) = 14, \qquad A_O = 3$$

2. **Atom matrix $a_{ik}$:**

| | C | H | O |
|---|---|---|---|
| CH₄ | 1 | 4 | 0 |
| H₂O | 0 | 2 | 1 |
| CO | 1 | 0 | 1 |
| CO₂ | 1 | 0 | 2 |
| H₂ | 0 | 2 | 0 |

3. **One minimisation equation per species,** $\Delta G^\circ_{f_i}/RT + \ln(n_i/\sum n_i) + \sum_k\lambda_ka_{ik}/RT = 0$:
$$\text{CH}_4: \; \frac{19720}{RT} + \ln\frac{n_{CH_4}}{\sum n_i} + \frac{\lambda_C}{RT} + \frac{4\lambda_H}{RT} = 0$$
$$\text{H}_2\text{O}: \; \frac{-192420}{RT} + \ln\frac{n_{H_2O}}{\sum n_i} + \frac{2\lambda_H}{RT} + \frac{\lambda_O}{RT} = 0$$
$$\text{CO}: \; \frac{-200240}{RT} + \ln\frac{n_{CO}}{\sum n_i} + \frac{\lambda_C}{RT} + \frac{\lambda_O}{RT} = 0$$
$$\text{CO}_2: \; \frac{-395790}{RT} + \ln\frac{n_{CO_2}}{\sum n_i} + \frac{\lambda_C}{RT} + \frac{2\lambda_O}{RT} = 0$$
$$\text{H}_2: \; \ln\frac{n_{H_2}}{\sum n_i} + \frac{2\lambda_H}{RT} = 0$$

4. **Element balances:**
$$\text{C: } n_{CH_4} + n_{CO} + n_{CO_2} = 2, \qquad \text{H: } 4n_{CH_4} + 2n_{H_2O} + 2n_{H_2} = 14, \qquad \text{O: } n_{H_2O} + n_{CO} + 2n_{CO_2} = 3$$
   and $\sum n_i = n_{CH_4} + n_{H_2O} + n_{CO} + n_{CO_2} + n_{H_2}$.

5. **Count:** 8 equations (5 species equations + 3 balances) in 8 unknowns: 5 $n_i$ and $\lambda_C$, $\lambda_H$, $\lambda_O$. They are solved numerically, e.g. by Newton's method. For reference, the solution (Kirtania, Reaction Equilibria Part 2 slides) is $y_{CH_4}$ = 0.0196, $y_{H_2O}$ = 0.0980, $y_{CO}$ = 0.1743, $y_{CO_2}$ = 0.0371, $y_{H_2}$ = 0.6711, with $\lambda_C/RT$ = 0.7635, $\lambda_H/RT$ = 0.1994, $\lambda_O/RT$ = 25.068. I checked these by solving the system above.`,
          answer: String.raw`A_C = 2, A_H = 14, A_O = 3; five equations ΔG°fᵢ/RT + ln(nᵢ/Σn) + Σλₖaᵢₖ/RT = 0 (CH₄: λ_C + 4λ_H; H₂O: 2λ_H + λ_O; CO: λ_C + λ_O; CO₂: λ_C + 2λ_O; H₂: 2λ_H) plus C, H, O balances ⇒ 8 equations, 8 unknowns (solution: y = 0.0196, 0.0980, 0.1743, 0.0371, 0.6711).` },
        { id: "2018-19-Q6d", label: "(d)", marks: "5",
          topic: "reaction-equilibria", sub: "Gibbs-energy minimisation versus equilibrium-constant method",
          type: "theory", syllabus: "in", repeats: ["2021-22-Q6c"],
          text: String.raw`What are the advantages or disadvantages of determining equilibrium composition for reactions using Gibb's free energy minimization against equilibrium constant based calculation?`,
          solution: String.raw`| | Gibbs-energy minimisation (Lagrange multipliers) | Equilibrium-constant method |
|---|---|---|
| Set-up | One equation per **species**, $\Delta G^\circ_{f_i} + RT\ln(y_i\hat\phi_iP/P^\circ) + \sum_k\lambda_ka_{ik} = 0$, plus one atom balance per element | Choose a set of **independent reactions**, write $K_j = \prod_i(\hat f_i/f_i^\circ)^{\nu_{ij}}$ in terms of the extents $\varepsilon_j$ |
| Reactions | **Not needed**: no need to identify independent reactions or their stoichiometry | Must find the r independent reactions (phase rule / Denbigh method) |
| Data | Only $\Delta G^\circ_f$ of each species at T and the element balances | $\Delta G^\circ$ (hence K) of each reaction |
| Many species | Systematic and well suited to computers (complex gasification, combustion and refinery systems) | Becomes awkward: many coupled nonlinear equations in ε's, with sign problems for small extents |
| Phases | Naturally handles multiple phases and solids (a species absent from a phase is simply dropped) | Each phase needs its own treatment |

**Advantages of minimisation:** general and systematic; no reaction set needed; the λₖ (element potentials) are found as by-products; it is directly the criterion $(dG^t)_{T,P} = 0$.

**Disadvantages:** many unknowns (N species + w elements); it needs iterative numerical solution and good initial estimates, so it is not suited to hand calculation. It gives only the composition, with no insight into which reaction dominates. Every possible species must be listed: a missing species gives a wrong answer. For one or two reactions the K method is simpler, quicker and easier to interpret, e.g. for seeing pressure and temperature effects through ν and ΔH°.`,
          answer: String.raw`Minimisation: no need to choose independent reactions, only ΔG°f and atom balances, systematic for many species/phases, gives λₖ; but many unknowns, needs iterative numerical solution and good initial guesses and a complete species list. K-method: simple and insightful for few reactions, but requires identifying independent reactions and becomes unwieldy for complex systems.` }
      ] },
    { id: "2018-19-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q7a", label: "(a)", marks: "15",
          topic: "phase-equilibria-topics", sub: "Three stability conditions for a binary liquid in VLE; ideal gas and azeotrope",
          type: "derivation", syllabus: "in", repeats: ["2021-22-Q8a", "2020-21-Q7b"],
          text: String.raw`Derive the three conditions of stability for a system of binary liquid mixture in equilibrium with vapor phase. If the pressure is low enough for the system to consider as ideal gas, make necessary simplifications and show what happens if the mixture reaches azeotrope.`,
          solution: String.raw`**Assumptions:** binary liquid at constant T and P in equilibrium with its vapour.

1. **Stability of the liquid.** From $(dG^t)_{T,P} \le 0$, a homogeneous liquid is stable only if its Gibbs energy of mixing is convex in composition:
$$\frac{d^2(\Delta G/RT)}{dx_1^2} > 0, \qquad \frac{\Delta G}{RT} = x_1\ln x_1 + x_2\ln x_2 + \frac{G^E}{RT}$$

2. **Criterion 1 (activity coefficient).** With $d^2(G^E/RT)/dx_1^2 = (1/x_2)\,d\ln\gamma_1/dx_1$ (Gibbs–Duhem):
$$\frac{1}{x_1x_2} + \frac{1}{x_2}\frac{d\ln\gamma_1}{dx_1} > 0 \;\Rightarrow\; \boxed{\frac{d\ln\gamma_1}{dx_1} > -\frac{1}{x_1}}$$

3. **Criterion 2 (fugacity).** $\hat f_1 = x_1\gamma_1f_1$, so $\dfrac{d\ln\hat f_1}{dx_1} = \dfrac{1}{x_1} + \dfrac{d\ln\gamma_1}{dx_1} > 0 \Rightarrow \boxed{\dfrac{d\hat f_1}{dx_1} > 0}$ (and $d\hat f_2/dx_1 < 0$).

4. **Criterion 3 (chemical potential).** $\mu_1 = \Gamma_1(T) + RT\ln\hat f_1$, so $\boxed{d\mu_1/dx_1 > 0}$.

5. **Ideal-gas vapour (low P).** $\hat f_i^l = \hat f_i^v = y_iP$. Then
$$\frac{d\ln\hat f_1}{dx_1} = \frac{1}{y_1}\frac{dy_1}{dx_1} + \frac{d\ln P}{dx_1} > 0, \qquad \frac{d\ln\hat f_2}{dx_1} = -\frac{1}{y_2}\frac{dy_1}{dx_1} + \frac{d\ln P}{dx_1} < 0$$
   Subtracting the second from the first:
$$\frac{1}{y_1y_2}\frac{dy_1}{dx_1} > 0 \;\Rightarrow\; \boxed{\frac{dy_1}{dx_1} > 0}$$
   Gibbs–Duhem for the liquid, $x_1\,d\ln\hat f_1 + x_2\,d\ln\hat f_2 = 0$ at constant T (pressure effect on the liquid neglected), gives
$$\frac{1}{P}\frac{dP}{dx_1} = \frac{y_1 - x_1}{y_1y_2}\,\frac{dy_1}{dx_1}$$

6. **At an azeotrope** ($y_1 = x_1$): $dP/dx_1 = 0$, so the P–x curve (and the P–y curve) has an **extremum**. It is a maximum for positive deviations and a minimum for negative ones, and the bubble and dew curves are tangent there. Since $dy_1/dx_1 > 0$ everywhere, the y–x curve crosses the diagonal there and nowhere else. P rises with $x_1$ where $y_1 > x_1$ and falls where $y_1 < x_1$. A model giving $dy_1/dx_1 < 0$ (or an S-shaped P–x curve) violates stability: the liquid would split into two phases (VLLE).`,
          answer: String.raw`Stability: d²(ΔG/RT)/dx₁² > 0 ⇒ (1) d ln γ₁/dx₁ > −1/x₁, (2) df̂₁/dx₁ > 0, (3) dμ₁/dx₁ > 0. Ideal-gas vapour (f̂ᵢ = yᵢP): dy₁/dx₁ > 0 and (1/P)dP/dx₁ = (y₁ − x₁)/(y₁y₂)·dy₁/dx₁; at an azeotrope y₁ = x₁ ⇒ dP/dx₁ = 0 (P extremum, max for positive, min for negative deviations).` },
        { id: "2018-19-Q7b", label: "(b)", marks: "5",
          topic: "phase-equilibria-topics", sub: "Interpret ΔG of mixing curves with respect to liquid stability",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Interpret the figure below with respect to the stability criteria for binary mixture of liquids (not in equilibrium)

*(Figure 7(b): curves of ΔG (Gibbs energy change of mixing) against x₁ from 0 to 1 for a binary liquid: an upper curve that is concave upward everywhere, and a lower curve with two minima and an inflected middle section.)*`,
          solution: String.raw`The figure plots the Gibbs energy change of mixing, ΔG, against $x_1$ at constant T and P for two binary liquid systems. Both curves are **negative** (mixing always lowers G: ΔG < 0 between the pure-component end points, where ΔG = 0).

1. **Upper curve: concave upward over the whole range.**
$$\frac{d^2\Delta G}{dx_1^2} > 0 \quad\text{for all } x_1$$
   Every homogeneous mixture is **stable**. Any split into two phases would put the system on a chord lying *above* the curve, i.e. at higher G. The liquids are **completely miscible** at this T.

2. **Lower curve: two minima with an inflected (concave-down) middle section.**
   - Between the two inflection points, $d^2\Delta G/dx_1^2 < 0$, and the single phase is **unstable**. The two inflection points are the spinodal.
   - A straight line can be drawn tangent to the curve at two points, $x_1^\alpha$ and $x_1^\beta$ (the **common tangent**). Any overall composition between them has a lower G as a two-phase mixture α + β (on the tangent line) than as one phase. The liquid therefore **splits into two liquid phases** of compositions $x_1^\alpha$ and $x_1^\beta$, in proportions given by the lever rule.
   - Equal slopes at the tangent points mean $\mu_i^\alpha = \mu_i^\beta$ (equal fugacities): the LLE condition.
   - Between a tangent point and the adjacent inflection point, $d^2\Delta G/dx_1^2 > 0$ but G lies above the tangent. The mixture is **metastable** there.

3. **Conclusion:** stability requires $d^2(\Delta G/RT)/dx_1^2 > 0$, equivalently $d\ln\gamma_1/dx_1 > -1/x_1$ or $d\hat f_1/dx_1 > 0$. The upper curve meets this everywhere (one phase); the lower curve violates it in the middle (partial miscibility, LLE). Raising T usually moves the lower type towards the upper type, and the inflection points merge at the upper consolute temperature.`,
          answer: String.raw`Upper curve: d²ΔG/dx₁² > 0 everywhere ⇒ every mixture stable, complete miscibility. Lower curve: concave middle (d²ΔG/dx₁² < 0 between inflection points) ⇒ unstable; common tangent at x₁^α, x₁^β gives the two coexisting liquids (equal μᵢ), metastable between tangent and inflection points ⇒ LLE.` },
        { id: "2018-19-Q7c", label: "(c)", marks: "6+4=10",
          topic: "phase-equilibria-topics", sub: "Solid–vapour equilibrium at high pressure; interpret solubility vs P figure",
          type: "derivation", syllabus: "in", repeats: ["2022-23-Q1iv", "2021-22-Q7b"],
          text: String.raw`The general equation of Solid/Vapor eq. is: $y_1 = \dfrac{P_1^{sat}}{P}\dfrac{\phi_1}{\hat\phi}\exp\left(\dfrac{V_1^s(P - P_1^{sat})}{RT}\right)$.

Simplify the equation for high pressure applications and interpret the figure below (no numerical calculation is necessary).

*(Figure 7(c): solubility $y_1$ of a solid in a compressed gas (log scale, about 10⁻⁴ to 10⁻¹) against P/bar from 0 to 300; data points with curves "from SRK EOS" for two values of the interaction parameter (one labelled 0.088), and lower curves labelled "ideal solubility" and "Poynting effect".)*`,
          solution: String.raw`### Simplification for high pressure (6)
Solute 1 is a pure solid in equilibrium with a compressed gas (solvent 2 insoluble in the solid).
1. The solid's sublimation pressure $P_1^{sat}$ is very low, so its saturated vapour is an ideal gas: $\phi_1^{sat} \approx 1$.
2. The system pressure is much higher than the sublimation pressure: $P - P_1^{sat} \approx P$.
$$\boxed{y_1 = \frac{P_1^{sat}}{P}F_1, \qquad F_1 = \frac{1}{\hat\phi_1}\exp\frac{V_1^sP}{RT}}$$
   $F_1$ is the **enhancement factor**. $\hat\phi_1$ comes from a cubic EOS (e.g. SRK) for the gas mixture, which is essentially pure solvent with a trace of 1:
$$\ln\hat\phi_1 = \frac{b_1}{b}(Z - 1) - \ln(Z - \beta) - \bar q_1I$$
   with a binary interaction parameter $l_{12}$ (or $k_{12}$) in the mixing rule for $a_{12}$.

### Interpretation of Figure 7(c) (4)
This is the SVNA figure for the solubility of naphthalene (1) in compressed CO₂ (2) at 35 °C, with $y_1$ on a log scale against P up to about 300 bar.
- **Ideal solubility** $y_1 = P_1^{sat}/P$ (lowest curve) **decreases** steadily with P. Simple dilution: the solid's vapour pressure is fixed while P grows.
- **"Poynting effect" curve:** including only $\exp(V_1^sP/RT)$ raises $y_1$ a little, since the factor reaches only about 4 at 300 bar. The trend is still downward and far below the data.
- **Experimental points:** at low P, $y_1$ follows the ideal curve. Near the critical pressure of CO₂ (about 74 bar) it **rises steeply by three to four orders of magnitude** and then levels off at high P. The cause is $\hat\phi_1 \ll 1$: strong attractive solute–solvent interactions in the dense supercritical fluid, which acts almost like a liquid solvent. This is the basis of **supercritical-fluid extraction**.
- **SRK curves:** the EOS reproduces this behaviour only with a fitted interaction parameter. The curve with the fitted value ($l_{12}$ ≈ 0.088 on the figure) follows the data. The curve with the other value (e.g. $l_{12}$ = 0) badly over-predicts the plateau. Solubility is very sensitive to the mixing-rule parameter.`,
          answer: String.raw`High P: φ₁ˢᵃᵗ ≈ 1, P − P₁ˢᵃᵗ ≈ P ⇒ y₁ = (P₁ˢᵃᵗ/P)·exp(V₁ˢP/RT)/φ̂₁ (enhancement factor), φ̂₁ from SRK. Figure (naphthalene in CO₂): ideal solubility falls as 1/P, Poynting alone gives only a small rise, but data rise by 10³–10⁴ near CO₂'s Pc because φ̂₁ ≪ 1 (SCF extraction); SRK fits only with a fitted interaction parameter (≈ 0.088).` }
      ] },
    { id: "2018-19-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q8a", label: "(a)", marks: "8",
          topic: "refrigeration", sub: "Ground-source heat pump, 29 kJ/s heating and 55 kJ/s cooling: minimum power",
          type: "numerical", syllabus: "in", repeats: ["2023-24-Q3b"],
          text: String.raw`A house has a winter heating requirement of 29 kJ/s and a summer cooling requirement of 55 kJ/s. Consider a heat-pump installation to maintain the house temperature at 20°C in winter and 25°C in summer. This requires circulation of the refrigerant through interior exchanger coils at 30°C in winter and 5°C in summer. Underground coils provide the heat source in winter and the heat sink in summer. For a year-round ground temperature of 15°C, the heat-transfer characteristics of the coils necessitate refrigerant temperatures of 10°C in winter and 25°C in summer. What are the minimum power requirements for winter heating and summer cooling?`,
          solution: String.raw`**Given:** winter heating $|Q_H|$ = 29 kJ/s, delivered by refrigerant at 30 °C (interior coils), with heat drawn from the ground coils with refrigerant at 10 °C. Summer cooling $|Q_C|$ = 55 kJ/s, absorbed by refrigerant at 5 °C (interior coils), with heat rejected through the ground coils with refrigerant at 25 °C.

**Find:** the minimum power in each season.

**Assumptions:** reversible (Carnot) heat pump operating between the **refrigerant** temperatures, the temperatures at which heat actually enters and leaves the working fluid (SVNA Example 9.2 type).

1. **Winter (heating):** $T_H$ = 303.15 K, $T_C$ = 283.15 K.
$$W = |Q_H|\frac{T_H - T_C}{T_H} = 29 \times \frac{20}{303.15} = \mathbf{1.91\ kW}$$
   Heat from the ground: 29 − 1.91 = 27.09 kJ/s. Heating COP = 303.15/20 = 15.2.

2. **Summer (cooling):** $T_C$ = 278.15 K, $T_H$ = 298.15 K.
$$W = |Q_C|\frac{T_H - T_C}{T_C} = 55 \times \frac{20}{278.15} = \mathbf{3.95\ kW}$$
   Heat rejected to the ground: 55 + 3.95 = 58.95 kJ/s. ω = 278.15/20 = 13.9.

**Result:** the minimum power is 1.91 kW for winter heating and 3.95 kW for summer cooling. A real unit needs several times more because of compressor and throttling irreversibilities.`,
          answer: String.raw`Carnot between refrigerant temperatures: winter W = 29(303.15 − 283.15)/303.15 = 1.91 kW; summer W = 55(298.15 − 278.15)/278.15 = 3.95 kW.` },
        { id: "2018-19-Q8b", label: "(b)", marks: "4+9=13",
          topic: "refrigeration", sub: "HFC-134a refrigerator, −20 °C space, 21 °C water, 120 000 kJ/h: Carnot and VCR ω",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A refrigerated space is maintained at -20°C, and cooling water is available at 21°C. Refrigeration capacity is 120,000 kJ/h. The evaporator and condenser are of sufficient size that a 5°C minimum-temperature difference for heat transfer can be realized in each. The refrigerant is 1,1,1,2 - tetrafluoroethane (HFC-134a), (a) What is the value of ω for a Carnot refrigerator? (b) Calculate the circulation rate and ω for a vapor-compression cycle in Figure 8(b1) if the compressor efficiency is 0.80, (See Table 9.1 and Figure 8(b2) for necessary data).`,
          solution: String.raw`**Given:** cold space −20 °C, cooling water 21 °C, minimum ΔT 5 °C in each exchanger, so evaporation at $T_C$ = −25 °C (248.15 K) and condensation at $T_H$ = 26 °C (299.15 K). $|Q_C|$ = 120 000 kJ/h = 33.33 kJ/s; HFC-134a; compressor efficiency η = 0.80.

**Find:** (a) Carnot ω; (b) circulation rate and ω for the vapour-compression cycle of Fig. 8(b1).

**Assumptions:** saturated vapour leaves the evaporator (state 2) and saturated liquid leaves the condenser (state 4). The throttle is isenthalpic ($H_1 = H_4$). Data from the attached SVNA Table 9.1 and the P–H chart Fig. 8(b2); both use the reference H = 200 kJ/kg, S = 1.00 kJ/(kg·K) for saturated liquid at 0 °C.

![Vapour-compression cycle: schematic, T–S and ln P–H diagrams with states 1–4](fig/2018-19-Q8b-sketch.svg)

1. **(a) Carnot refrigerator:**
$$\omega_{Carnot} = \frac{T_C}{T_H - T_C} = \frac{248.15}{299.15 - 248.15} = \frac{248.15}{51} = \mathbf{4.87}$$

2. **Table 9.1 data:**
   - State 2 (saturated vapour, −25 °C): P = 1.064 bar, $H_2$ = 383.45 kJ/kg, $S_2$ = 1.746 kJ/(kg·K).
   - State 4 (saturated liquid, 26 °C): P = 6.854 bar, $H_4$ = 235.97 kJ/kg, so $H_1 = H_4$ = 235.97 kJ/kg.

3. **Isentropic compression (chart reading).** On Fig. 8(b2), start at state 2 on the saturated-vapour line at 0.106 MPa. Follow the constant-entropy line s = 1.746 kJ/(kg·K), between the 1.70 and 1.75 lines and close to 1.75, up to P = 0.685 MPa. Read $H_3' \approx$ **422 kJ/kg** (superheated, about 35 °C). The same value (421.9) follows from Çengel Table A-13 shifted to this reference.
$$\Delta H_S = 422 - 383.45 = 38.4\ \mathrm{kJ/kg}, \qquad \Delta H = \frac{\Delta H_S}{\eta} = \frac{38.4}{0.80} = 48.0\ \mathrm{kJ/kg}, \qquad H_3 = 431.5\ \mathrm{kJ/kg}$$

![How to read Fig. 8(b2): saturated vapour at −25 °C → isentrope s = 1.746 → 0.685 MPa → H₃′ ≈ 422 kJ/kg](fig/2018-19-Q8b-read.svg)

4. **(b) Circulation rate:**
$$\dot m = \frac{|Q_C|}{H_2 - H_1} = \frac{33.33}{383.45 - 235.97} = \frac{33.33}{147.48} = \mathbf{0.226\ kg/s}\ (814\ \mathrm{kg/h})$$

5. **(b) Coefficient of performance:**
$$\omega = \frac{H_2 - H_1}{H_3 - H_2} = \frac{147.48}{48.0} = \mathbf{3.07}$$
   Compressor power = 0.226(48.0) = 10.85 kW. Heat rejected in the condenser = 0.226(431.5 − 235.97) = 44.2 kJ/s.

**Result:** (a) ω(Carnot) = 4.87; (b) $\dot m$ = 0.226 kg/s and ω = 3.07, about 63% of Carnot. The losses come from irreversible compression and throttling.`,
          answer: String.raw`(a) T_C = 248.15 K, T_H = 299.15 K ⇒ ω_Carnot = 4.87. (b) Table 9.1: H₂ = 383.45, S₂ = 1.746, H₄ = H₁ = 235.97 kJ/kg; chart: H₃′ ≈ 422 kJ/kg at 6.854 bar ⇒ ΔH = 38.4/0.8 = 48.0 kJ/kg; ṁ = 33.33/147.48 = 0.226 kg/s (814 kg/h); ω = 147.48/48.0 = 3.07 (W = 10.9 kW).` },
        { id: "2018-19-Q8c", label: "(c)", marks: "2+7=9",
          topic: "refrigeration", sub: "Absorption refrigeration cycle: definition, sketch, working principle",
          type: "sketch", syllabus: "in", repeats: ["2023-24-Q1a", "2021-22-Q6b", "2020-21-Q6a", "2017-18-Q8a", "2015-16-Q1a", "2014-15-Q4a", "2013-14-Q4b"],
          text: String.raw`What is absorption refrigeration cycle? Draw a neat sketch of the absorption refrigeration process and explain its working principle.`,
          solution: String.raw`**Definition (2).** An absorption refrigeration cycle is a refrigeration cycle in which the vapour compressor is replaced by a **heat-driven "thermal compressor"**: an absorber, a solution pump and a generator. The refrigerant vapour is absorbed into a liquid absorbent at low pressure, the solution is pumped to high pressure, and the refrigerant is released again by supplying heat. The cycle runs mainly on **heat** (steam, waste heat, solar, gas flame) instead of shaft work. Working pairs: NH₃–H₂O, H₂O–LiBr.

![Absorption refrigeration cycle: generator, condenser, expansion valve, evaporator, absorber and solution pump](fig/2018-19-Q8c-sketch.svg)

### Working principle (10)
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
          answer: String.raw`Refrigeration driven by heat: compressor replaced by absorber + pump + generator. NH₃ evaporates at T_C (Q_C), is absorbed in weak solution (heat removed), the strong solution is pumped to high P, heated in the generator (Q_H) to release NH₃ → condenser → expansion valve; (Q_H/Q_C)min = [T_H/(T_H − T_S)][(T_S − T_C)/T_C]. NH₃–H₂O or H₂O–LiBr.` }
      ] }
  ]
});
