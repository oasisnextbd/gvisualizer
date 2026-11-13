QB.paper({
  year: "2018-19", date: "29/10/2019", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engineering Examination 2018-2019, CHE 307 (Chemical Engineering Thermodynamics-II), 3 hours, 210 marks. Section A: four questions, answer any THREE. Section B: four questions; Question 5 is compulsory (45 marks: any nine of ten parts, 5 each); answer any TWO of the remaining three. Use separate scripts for each section; the figures in the margin indicate full marks. Attached (pp. 6–8): Fig. 8(b1) vapour-compression cycle on ln P–H coordinates, Fig. 8(b2) P–H diagram of HFC-134a, Fig. 12.14 heats of solution of HCl(g) and LiCl(s) at 25 °C, and SVNA Table 9.1 (saturated HFC-134a, SI units).`,
  questions: [
    { id: "2018-19-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q1a", label: "(a)", marks: "10",
          topic: "vle-intro", sub: "Retrograde condensation and deep natural-gas wells",
          type: "theory", syllabus: "in", repeats: [],
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
          type: "derivation", syllabus: "in", repeats: [],
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
          type: "numerical", syllabus: "in", repeats: [],
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
          type: "derivation", syllabus: "in", repeats: [],
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
          type: "derivation", syllabus: "in", repeats: [],
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
          type: "numerical", syllabus: "in", repeats: [],
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
          type: "derivation", syllabus: "in", repeats: [],
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
          type: "numerical", syllabus: "in", repeats: [],
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
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q5ii", label: "(ii)", marks: "5",
          topic: "reaction-equilibria", sub: "Effect of pressure on a gas-phase reaction with Σν > 0",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`If the total stoichiometric number $\nu = \sum\nu_i$ is positive, and increase in P at constant temperature (according to $\prod_i(y_i)^{\nu_i} = \left(\dfrac{P}{P_o}\right)^{-\nu}K$, symbols have their usual meanings)

a) will cause a shift of the reaction to the right
b) will cause a shift of the reaction to the left
c) will not affect the equilibrium at all
d) will cause an unpredictable effect`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q5iii", label: "(iii)", marks: "5",
          topic: "refrigeration", sub: "Most critical factor for choosing multistage (cascade) refrigeration",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Using cascade refrigeration loop, higher cooling efficiency can be achieved. In this case, we need to connect them in a way that one loops evaporator becomes condenser for the other. What is the most critical factor to choose multiple-stage refrigeration over single stage -

a) Limits of temperature difference
b) Limits on operating pressures
c) Limits on the condenser
d) Limits on the evaporator`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q5iv", label: "(iv)", marks: "5",
          topic: "refrigeration", sub: "Is the Linde process a limiting case of the Claude process?",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Linde process is a limiting case of Claude process. True/False (Justify)`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q5v", label: "(v)", marks: "5",
          topic: "phase-equilibria-topics", sub: "Do phase-stability criteria apply to non-equilibrium states?",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Phase stability criteria are applicable to both equilibrium and non-equilibrium states. True/False (Justify).`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q5vi", label: "(vi)", marks: "5",
          topic: "refrigeration", sub: "Second law: moving heat from low to high temperature requires work",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`If heat is transferred from a low temperature level to a higher one, this requires ____________ according to the second law. Fill in the gap and justify.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q5vii", label: "(vii)", marks: "5",
          topic: "reaction-equilibria", sub: "Degrees of freedom for CaCO₃(s) → CaO(s) + CO₂(g)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`If CaCO₃ breaks down in a reaction: CaCO₃(s) → CaO(s) + CO₂(g). How many degrees of freedom available for this case?

a) 0 b) 1 c) 2 d) 3`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q5viii", label: "(viii)", marks: "5",
          topic: "phase-equilibria-topics", sub: "Solid–vapour equilibrium: which species is insoluble in the solid",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`In solid/vapor equilibrium, there would be a binary vapor phase containing species 1 and species 2. Among these two -

a) species 1 is insoluble in the solid
b) species 2 is insoluble in the solid
c) both of them are insoluble in the solid
d) both of them are soluble in the solid`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q5ix", label: "(ix)", marks: "5",
          topic: "phase-equilibria-topics", sub: "When the Poynting factor matters in solid–vapour equilibrium",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Poynting factor becomes important when -

a) The pressure is low for solid/vapor equilibrium
b) The pressure is high for solid/vapor equilibrium
c) The solid solubility is high for solid/vapor equilibrium
d) The vapor phase enters in the critical state for solid/vapor equilibrium`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q5x", label: "(x)", marks: "5",
          topic: "phase-equilibria-topics", sub: "Most useful form of the equilibrium/stability criterion",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Among the following representations of the same stability criterion, which one is the most useful and why? (superscript t means total while rest of the symbols have their usual meanings)

a) $(dU^t)_{S^t,V^t} \le 0$
b) $(dS^t)_{U^t,V^t} \ge 0$
c) $(dG^t)_{T,P} \le 0$
d) None of the above`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] },
    { id: "2018-19-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q6a", label: "(a)", marks: "5",
          topic: "reaction-equilibria", sub: "Effect of temperature on the equilibrium constant (brief)",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What is the effect of temperature on the equilibrium constant? Explain in brief.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q6b", label: "(b)", marks: "10",
          topic: "reaction-equilibria", sub: "Liquid-phase reaction in ideal solution: Πxᵢ^νᵢ = K, with assumptions",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the equation for liquid phase reactions for ideal solution $\left(\prod_i(x_i)^{\nu_i} = K\right)$. State all the necessary assumptions during the derivation.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q6c", label: "(c)", marks: "10",
          topic: "reaction-equilibria", sub: "CH₄/H₂O at 1000 K, 1 bar: Gibbs-minimisation equations (not solved)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The equilibrium compositions at 1000 K and 1 bar of a gas-phase system containing the species CH₄, H₂O, CO, CO₂ and H₂ are to be determined. In the initial unreacted state, there are 2 mol CH₄ ad 3 mol of H₂O present. Value of $G_f^o$ at 1000 K are:

$$\Delta G^0_{f\,CH_4} = 19.72\ \mathrm{kJ/mol} \qquad \Delta G^o_{f\,H_2O} = -192.42\ \mathrm{kJ/mol}$$
$$\Delta G^o_{f\,CO} = -200.24\ \mathrm{kJ/mol} \qquad \Delta G^o_{f\,CO_2} = -395.79\ \mathrm{kJ/mol}$$

From the system of equations for this system. You do not need to solve the equations, (necessary equation: $\Delta G^o_{f_i} + RT\ln\left(\dfrac{y_i\phi_iP}{P^o}\right) + \sum_k\lambda_ka_{ik} = 0$; symbols have their usual meanings)`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q6d", label: "(d)", marks: "5",
          topic: "reaction-equilibria", sub: "Gibbs-energy minimisation versus equilibrium-constant method",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`What are the advantages or disadvantages of determining equilibrium composition for reactions using Gibb's free energy minimization against equilibrium constant based calculation?`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] },
    { id: "2018-19-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q7a", label: "(a)", marks: "15",
          topic: "phase-equilibria-topics", sub: "Three stability conditions for a binary liquid in VLE; ideal gas and azeotrope",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the three conditions of stability for a system of binary liquid mixture in equilibrium with vapor phase. If the pressure is low enough for the system to consider as ideal gas, make necessary simplifications and show what happens if the mixture reaches azeotrope.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q7b", label: "(b)", marks: "5",
          topic: "phase-equilibria-topics", sub: "Interpret ΔG of mixing curves with respect to liquid stability",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Interpret the figure below with respect to the stability criteria for binary mixture of liquids (not in equilibrium)

*(Figure 7(b): curves of ΔG (Gibbs energy change of mixing) against x₁ from 0 to 1 for a binary liquid: an upper curve that is concave upward everywhere, and a lower curve with two minima and an inflected middle section.)*`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q7c", label: "(c)", marks: "6+4=10",
          topic: "phase-equilibria-topics", sub: "Solid–vapour equilibrium at high pressure; interpret solubility vs P figure",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The general equation of Solid/Vapor eq. is: $y_1 = \dfrac{P_1^{sat}}{P}\dfrac{\phi_1}{\hat\phi}\exp\left(\dfrac{V_1^s(P - P_1^{sat})}{RT}\right)$.

Simplify the equation for high pressure applications and interpret the figure below (no numerical calculation is necessary).

*(Figure 7(c): solubility $y_1$ of a solid in a compressed gas (log scale, about 10⁻⁴ to 10⁻¹) against P/bar from 0 to 300; data points with curves "from SRK EOS" for two values of the interaction parameter (one labelled 0.088), and lower curves labelled "ideal solubility" and "Poynting effect".)*`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] },
    { id: "2018-19-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2018-19-Q8a", label: "(a)", marks: "8",
          topic: "refrigeration", sub: "Ground-source heat pump, 29 kJ/s heating and 55 kJ/s cooling: minimum power",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A house has a winter heating requirement of 29 kJ/s and a summer cooling requirement of 55 kJ/s. Consider a heat-pump installation to maintain the house temperature at 20°C in winter and 25°C in summer. This requires circulation of the refrigerant through interior exchanger coils at 30°C in winter and 5°C in summer. Underground coils provide the heat source in winter and the heat sink in summer. For a year-round ground temperature of 15°C, the heat-transfer characteristics of the coils necessitate refrigerant temperatures of 10°C in winter and 25°C in summer. What are the minimum power requirements for winter heating and summer cooling?`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q8b", label: "(b)", marks: "4+9=13",
          topic: "refrigeration", sub: "HFC-134a refrigerator, −20 °C space, 21 °C water, 120 000 kJ/h: Carnot and VCR ω",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A refrigerated space is maintained at -20°C, and cooling water is available at 21°C. Refrigeration capacity is 120,000 kJ/h. The evaporator and condenser are of sufficient size that a 5°C minimum-temperature difference for heat transfer can be realized in each. The refrigerant is 1,1,1,2 - tetrafluoroethane (HFC-134a), (a) What is the value of ω for a Carnot refrigerator? (b) Calculate the circulation rate and ω for a vapor-compression cycle in Figure 8(b1) if the compressor efficiency is 0.80, (See Table 9.1 and Figure 8(b2) for necessary data).`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2018-19-Q8c", label: "(c)", marks: "2+7=9",
          topic: "refrigeration", sub: "Absorption refrigeration cycle: definition, sketch, working principle",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`What is absorption refrigeration cycle? Draw a neat sketch of the absorption refrigeration process and explain its working principle.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] }
  ]
});
