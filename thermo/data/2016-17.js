QB.paper({
  year: "2016-17", date: "19/08/2017", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engineering Examinations 2016-2017, CHE 307 (Chemical Engineering Thermodynamics), 3 hours, 210 marks. Section A: four questions, answer any THREE. Section B: four questions, answer any THREE. The figures in the margin indicate full marks. Symbols have their usual meanings. A data booklet will be supplied. Use separate scripts for each section. Attached to the paper: SVNA Figure 12.14 (heats of solution of HCl(g) and LiCl(s) in water at 25 °C) for Q4(a).`,
  questions: [
    { id: "2016-17-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q1a", label: "(a)", marks: "8",
          topic: "vle-intro", sub: "K-values in VLE: at least one above and one below 1.0",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`For a system that exhibits VLE, at least one of the k-values must be greater than 1.0 and at least one must be less than 1.0. True/False. Explain your answer.`,
          solution: String.raw`**True** for any VLE system whose two phases differ in composition; the only exception is the case where every $K_i = 1$ (an azeotrope, or a pure species).

1. **Definition.** The K-value (equilibrium ratio) of species i is
$$K_i \equiv \frac{y_i}{x_i}$$
   For Raoult's law $K_i = P_i^{sat}/P$; for modified Raoult's law $K_i = \gamma_iP_i^{sat}/P$.

2. **Both phases must sum to one:** $\sum_i y_i = 1$ and $\sum_i x_i = 1$. Substituting $y_i = K_ix_i$:
$$\sum_i K_ix_i = \sum_i x_i \;\Rightarrow\; \sum_i x_i(K_i - 1) = 0$$

3. **Consequence.** Every $x_i > 0$, so the terms $x_i(K_i - 1)$ can sum to zero only if
   - some $K_i - 1$ are positive and some negative, i.e. **at least one $K_i > 1$ and at least one $K_i < 1$**; or
   - all $K_i = 1$.
   If every $K_i$ were above 1, $\sum y_i$ would exceed $\sum x_i$; if every $K_i$ were below 1, $\sum y_i$ would be less than 1. Neither is possible.

4. **Physical meaning.** Species with $K_i > 1$ (the "light", more volatile ones) concentrate in the vapour; those with $K_i < 1$ (the "heavy" ones) concentrate in the liquid. That difference is what makes distillation and flash separation possible.

5. **Exception.** At an **azeotrope** $y_i = x_i$ for every species, so all $K_i = 1$. The same holds for a single pure species boiling at $P^{sat}$. In these cases no K-value differs from 1, and no separation by simple vaporization is possible.`,
          answer: String.raw`True: Σyᵢ = Σxᵢ = 1 gives Σxᵢ(Kᵢ − 1) = 0, so unless every Kᵢ = 1 (azeotrope or pure species) at least one Kᵢ > 1 (light species, enriched in vapour) and one Kᵢ < 1 (heavy species).` },
        { id: "2016-17-Q1b", label: "(b)", marks: "12",
          topic: "vle-intro", sub: "Binary flash from K-values: x₁, y₁ and vapour fraction v",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`For a binary system that exhibits VLE, show that,

$$x_1 = \frac{1 - k_2}{k_1 - k_2} \qquad y_1 = \frac{k_1(1 - k_2)}{k_1 - k_2}$$

$$v = \frac{z_1(k_1 - k_2) - (1 - k_2)}{(k_1 - 1)(1 - k_2)}$$`,
          solution: String.raw`**Definitions:** $k_i = y_i/x_i$; basis 1 mol of system with overall mole fraction $z_1$, of which a fraction v is vapour and 1 − v liquid.

1. **Equilibrium relations:** $y_1 = k_1x_1$ and $y_2 = k_2x_2 = k_2(1 - x_1)$.

2. **Vapour mole fractions sum to one:**
$$y_1 + y_2 = k_1x_1 + k_2(1 - x_1) = 1 \;\Rightarrow\; x_1(k_1 - k_2) = 1 - k_2$$
$$\boxed{x_1 = \frac{1 - k_2}{k_1 - k_2}}$$

3. **Vapour composition:**
$$\boxed{y_1 = k_1x_1 = \frac{k_1(1 - k_2)}{k_1 - k_2}}$$
   For a binary the k-values depend only on T and P (exactly for Raoult's law, where $k_i = P_i^{sat}/P$), so T and P alone fix both phase compositions. This agrees with the phase rule: F = 2 − π + N = 2.

4. **Material balance on species 1:**
$$z_1 = x_1(1 - v) + y_1v \;\Rightarrow\; v = \frac{z_1 - x_1}{y_1 - x_1} = \frac{z_1 - x_1}{x_1(k_1 - 1)}$$

5. **Substitute $x_1$ from step 2.** Numerator:
$$z_1 - \frac{1 - k_2}{k_1 - k_2} = \frac{z_1(k_1 - k_2) - (1 - k_2)}{k_1 - k_2}$$
   Denominator:
$$x_1(k_1 - 1) = \frac{(1 - k_2)(k_1 - 1)}{k_1 - k_2}$$
   The factors $(k_1 - k_2)$ cancel:
$$\boxed{v = \frac{z_1(k_1 - k_2) - (1 - k_2)}{(k_1 - 1)(1 - k_2)}}$$

6. **Check of limits.** v = 0 when $z_1 = x_1$ (bubble point), and v = 1 when $z_1 = y_1$: substituting $z_1 = k_1(1 - k_2)/(k_1 - k_2)$ gives numerator $(1 - k_2)(k_1 - 1)$, so v = 1 ✓. Two phases exist only if $k_1 > 1 > k_2$ (or the reverse) and $z_1$ lies between $x_1$ and $y_1$.`,
          answer: String.raw`k₁x₁ + k₂(1 − x₁) = 1 ⇒ x₁ = (1 − k₂)/(k₁ − k₂); y₁ = k₁x₁; z₁ = x₁(1 − v) + y₁v ⇒ v = (z₁ − x₁)/[x₁(k₁ − 1)] = [z₁(k₁ − k₂) − (1 − k₂)]/[(k₁ − 1)(1 − k₂)].` },
        { id: "2016-17-Q1c", label: "(c)", marks: "15",
          topic: "solution-theory", sub: "H = 400x₁ + 600x₂ + x₁x₂(40x₁ + 20x₂): partial, pure and infinite-dilution enthalpies",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The enthalpy of a binary liquid system of species 1 and 2 at fixed T and P is represented by the equation,

$$H = 400x_1 + 600x_2 + x_1x_2(40x_1 + 20x_2)$$

where H is in J/mol.

(i) Show that

$$\bar H_1 = 420 - 60x_1^2 + 40x_1^3$$
$$\bar H_2 = 600 + 40x_1^3$$

(ii) Find the numerical values of pure species properties, and

(iii) Determine the numerical values for partial enthalpies at infinite dilution.`,
          solution: String.raw`**Given:** H in J/mol at fixed T and P.

1. **Write H in terms of $x_1$ only** ($x_2 = 1 - x_1$, so $40x_1 + 20x_2 = 20 + 20x_1$):
$$H = 400x_1 + 600(1 - x_1) + (20 + 20x_1)x_1(1 - x_1) = 600 - 180x_1 - 20x_1^3$$
$$\frac{dH}{dx_1} = -180 - 60x_1^2$$

2. **(i) Partial enthalpies.** For a binary at constant T, P, $\bar H_1 = H + x_2\,dH/dx_1$ and $\bar H_2 = H - x_1\,dH/dx_1$ (SVNA eqs. 11.15–11.16):
$$\bar H_1 = 600 - 180x_1 - 20x_1^3 + (1 - x_1)(-180 - 60x_1^2) = 600 - 180x_1 - 20x_1^3 - 180 - 60x_1^2 + 180x_1 + 60x_1^3$$
$$\boxed{\bar H_1 = 420 - 60x_1^2 + 40x_1^3}\ \mathrm{J/mol}$$
$$\bar H_2 = 600 - 180x_1 - 20x_1^3 - x_1(-180 - 60x_1^2) = 600 - 20x_1^3 + 60x_1^3$$
$$\boxed{\bar H_2 = 600 + 40x_1^3}\ \mathrm{J/mol}$$
   Check (summability):
$$x_1\bar H_1 + x_2\bar H_2 = 420x_1 - 60x_1^3 + 40x_1^4 + 600 - 600x_1 + 40x_1^3 - 40x_1^4 = 600 - 180x_1 - 20x_1^3 = H \quad\checkmark$$
   Gibbs–Duhem check:
$$x_1(-120x_1 + 120x_1^2) + x_2(120x_1^2) = -120x_1^2 + 120x_1^3 + 120x_1^2 - 120x_1^3 = 0 \quad\checkmark$$

3. **(ii) Pure-species enthalpies.** $H_1 = H(x_1 = 1)$ and $H_2 = H(x_1 = 0)$:
$$H_1 = 600 - 180 - 20 = 400\ \mathrm{J/mol}, \qquad H_2 = 600\ \mathrm{J/mol}$$
   The same values come from the partials: $\bar H_1(x_1 = 1) = 420 - 60 + 40 = 400$ and $\bar H_2(x_1 = 0) = 600$ ✓.

4. **(iii) Infinite dilution:**
$$\bar H_1^\infty = \bar H_1(x_1 \to 0) = 420\ \mathrm{J/mol}, \qquad \bar H_2^\infty = \bar H_2(x_1 \to 1) = 600 + 40 = 640\ \mathrm{J/mol}$$
   The differences from the pure values, $\bar H_1^\infty - H_1 = 20$ and $\bar H_2^\infty - H_2 = 40$ J/mol, are the partial enthalpies of mixing (= excess partial enthalpies) at infinite dilution. They equal the coefficients in the $x_1x_2(40x_1 + 20x_2)$ term: 20 at $x_1 \to 0$ and 40 at $x_1 \to 1$.

**Result:** $\bar H_1 = 420 - 60x_1^2 + 40x_1^3$, $\bar H_2 = 600 + 40x_1^3$ J/mol; $H_1$ = 400, $H_2$ = 600 J/mol; $\bar H_1^\infty$ = 420, $\bar H_2^\infty$ = 640 J/mol.`,
          answer: String.raw`H = 600 − 180x₁ − 20x₁³, dH/dx₁ = −180 − 60x₁² ⇒ H̄₁ = H + x₂dH/dx₁ = 420 − 60x₁² + 40x₁³, H̄₂ = H − x₁dH/dx₁ = 600 + 40x₁³ J/mol. Pure: H₁ = 400, H₂ = 600 J/mol. Infinite dilution: H̄₁^∞ = 420, H̄₂^∞ = 640 J/mol.` }
      ] },
    { id: "2016-17-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q2a", label: "(a)", marks: "20",
          topic: "vle-intro", sub: "Cyclohexanone/phenol at 144 °C: A from the azeotrope, then P and y₁ at x₁ = 0.6",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A liquid mixture of cyclohexanone(1)/ phenol(2) for which $x_1 = 0.6$ is in equilibrium with its vapor at 144°C. Determine the equilibrium pressure and vapor phase composition from the following information

$$\ln\gamma_1 = Ax_2^2 \qquad \ln\gamma_2 = Ax_1^2$$

$$P_1^{Sat}\Big|_{144°C} = 80\ \mathrm{kPa} \qquad P_2^{Sat}\Big|_{144°C} = 40\ \mathrm{kPa}$$

and $x^{az}\Big|_{144°C} = 0.304$`,
          solution: String.raw`**Given:** T = 144 °C; $P_1^{sat}$ = 80 kPa, $P_2^{sat}$ = 40 kPa; azeotrope at $x_1^{az}$ = 0.304; $\ln\gamma_1 = Ax_2^2$, $\ln\gamma_2 = Ax_1^2$; liquid $x_1$ = 0.6.

**Find:** P and $y_1$.

**Assumptions:** modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$ (low pressure, ideal vapour).

1. **Find A from the azeotrope.** At an azeotrope $y_i = x_i$, so modified Raoult's law gives $P = \gamma_1P_1^{sat} = \gamma_2P_2^{sat}$:
$$\ln\frac{\gamma_1}{\gamma_2} = A(x_2^2 - x_1^2) = A(1 - 2x_1^{az}) = \ln\frac{P_2^{sat}}{P_1^{sat}}$$
$$A = \frac{\ln(40/80)}{1 - 2(0.304)} = \frac{-0.6931}{0.392} = -1.768$$
   A < 0: negative deviations from Raoult's law (cyclohexanone and phenol hydrogen-bond with each other), so this is a **minimum-pressure** azeotrope.

2. **Activity coefficients at $x_1$ = 0.6:**
$$\gamma_1 = \exp[-1.768(0.4)^2] = e^{-0.2829} = 0.7536, \qquad \gamma_2 = \exp[-1.768(0.6)^2] = e^{-0.6366} = 0.5291$$

3. **Equilibrium pressure** (BUBL P; $\sum y_i = 1$):
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat} = 0.6(0.7536)(80) + 0.4(0.5291)(40) = 36.17 + 8.47 = 44.64\ \mathrm{kPa}$$

4. **Vapour composition:**
$$y_1 = \frac{x_1\gamma_1P_1^{sat}}{P} = \frac{36.17}{44.64} = 0.810, \qquad y_2 = 0.190$$

5. **Consistency check.** The azeotrope pressure is
$$P^{az} = \gamma_1^{az}P_1^{sat} = \exp[-1.768(0.696)^2](80) = 0.4246 \times 80 = 33.97\ \mathrm{kPa}$$
   This is below both vapour pressures, as a minimum-pressure azeotrope requires. At $x_1$ = 0.6, to the right of the azeotrope, cyclohexanone is the more volatile species ($y_1 > x_1$) ✓.

**Result:** P = 44.6 kPa, $y_1$ = 0.810 (A = −1.768).`,
          answer: String.raw`A = ln(P₂ˢᵃᵗ/P₁ˢᵃᵗ)/(1 − 2x^az) = −1.768; γ₁ = 0.7536, γ₂ = 0.5291 ⇒ P = 36.17 + 8.47 = 44.64 kPa, y₁ = 0.810 (minimum-pressure azeotrope at 33.97 kPa).` },
        { id: "2016-17-Q2b", label: "(b)", marks: "15",
          topic: "solution-theory", sub: "Partial molar volumes from V = 120x₁ + 70x₂ + (15x₁ + 8x₂)x₁x₂",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The molar volume of a binary liquid mixture at T and P is given by

$$V = 120x_1 + 70x_2 + (15x_1 + 8x_2)x_1x_2$$

(i) Find the expression for the partial molar volume of species 1 and 2 at T and P.

(ii) Show that these expressions satisfy the Gibbs/Duhen equation.`,
          solution: String.raw`**Given:** V in cm³/mol at fixed T and P.

1. **Write V in terms of $x_1$** ($x_2 = 1 - x_1$, so $15x_1 + 8x_2 = 8 + 7x_1$):
$$V = 120x_1 + 70(1 - x_1) + (8 + 7x_1)x_1(1 - x_1) = 70 + 58x_1 - x_1^2 - 7x_1^3$$
$$\frac{dV}{dx_1} = 58 - 2x_1 - 21x_1^2$$

2. **(i) Partial molar volumes** from $\bar V_1 = V + x_2\,dV/dx_1$ and $\bar V_2 = V - x_1\,dV/dx_1$:
$$\bar V_1 = 70 + 58x_1 - x_1^2 - 7x_1^3 + (1 - x_1)(58 - 2x_1 - 21x_1^2)$$
$$\boxed{\bar V_1 = 128 - 2x_1 - 20x_1^2 + 14x_1^3}\ \mathrm{cm^3/mol}$$
$$\bar V_2 = 70 + 58x_1 - x_1^2 - 7x_1^3 - x_1(58 - 2x_1 - 21x_1^2)$$
$$\boxed{\bar V_2 = 70 + x_1^2 + 14x_1^3}\ \mathrm{cm^3/mol}$$
   Check (summability):
$$x_1\bar V_1 + x_2\bar V_2 = 128x_1 - 2x_1^2 - 20x_1^3 + 14x_1^4 + 70 + x_1^2 + 14x_1^3 - 70x_1 - x_1^3 - 14x_1^4 = 70 + 58x_1 - x_1^2 - 7x_1^3 = V \quad\checkmark$$

3. **(ii) Gibbs–Duhem** at constant T, P: $x_1\,d\bar V_1/dx_1 + x_2\,d\bar V_2/dx_1 = 0$.
$$\frac{d\bar V_1}{dx_1} = -2 - 40x_1 + 42x_1^2, \qquad \frac{d\bar V_2}{dx_1} = 2x_1 + 42x_1^2$$
$$x_1(-2 - 40x_1 + 42x_1^2) + (1 - x_1)(2x_1 + 42x_1^2)$$
$$= -2x_1 - 40x_1^2 + 42x_1^3 + 2x_1 + 42x_1^2 - 2x_1^2 - 42x_1^3 = 0 \quad\checkmark$$
   As Gibbs–Duhem requires, $d\bar V_1/dx_1 = -2 - 40 + 42 = 0$ at $x_1 = 1$, and $d\bar V_2/dx_1 = 0$ at $x_1 = 0$: each curve is horizontal where that species is pure.

4. **Limiting values** (for a sketch): pure $V_1 = \bar V_1(1) = 120$, $V_2 = \bar V_2(0) = 70$ cm³/mol; infinite dilution $\bar V_1^\infty = 128$, $\bar V_2^\infty = 85$ cm³/mol.

**Result:** $\bar V_1 = 128 - 2x_1 - 20x_1^2 + 14x_1^3$, $\bar V_2 = 70 + x_1^2 + 14x_1^3$ cm³/mol, which satisfy $x_1\,d\bar V_1 + x_2\,d\bar V_2 = 0$.`,
          answer: String.raw`V = 70 + 58x₁ − x₁² − 7x₁³ ⇒ V̄₁ = 128 − 2x₁ − 20x₁² + 14x₁³, V̄₂ = 70 + x₁² + 14x₁³ cm³/mol; x₁(−2 − 40x₁ + 42x₁²) + x₂(2x₁ + 42x₁²) = 0 ✓. V₁ = 120, V₂ = 70; V̄₁^∞ = 128, V̄₂^∞ = 85 cm³/mol.` }
      ] },
    { id: "2016-17-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q3a", label: "(a)", marks: "20",
          topic: "solution-theory", sub: "Fugacity coefficient of species 1 in a binary gas from the virial equation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The virial equation of state for a gas mixture is represented by

$$nz = n + \frac{nBP}{RT}$$

where the second virial co-efficient

$$B = \sum_i\sum_j y_iy_jB_{ij}$$

Show that for binary mixture, fugacity co-efficient of species 1,

$$\ln\hat\phi_1 = \frac{P}{RT}\left(B_{11} + y_2^2\delta_{12}\right)$$`,
          solution: String.raw`**Assumptions:** constant T and composition; the two-term virial equation $Z = 1 + BP/RT$ holds; $\delta_{12} \equiv 2B_{12} - B_{11} - B_{22}$.

1. **Fugacity coefficient of a species in solution.** From the residual Gibbs energy, $\ln\hat\phi_i = \bar G_i^R/RT$, and (SVNA eq. 11.60)
$$\ln\hat\phi_i = \int_0^P(\bar Z_i - 1)\frac{dP}{P} \quad(\text{const } T, x), \qquad \bar Z_i \equiv \left[\frac{\partial(nZ)}{\partial n_i}\right]_{T,P,n_j}$$

2. **Partial molar Z from the virial equation.** With $nZ = n + nBP/RT$, and since $\partial n/\partial n_i = 1$:
$$\bar Z_i = 1 + \frac{P}{RT}\left[\frac{\partial(nB)}{\partial n_i}\right]_{T,n_j}$$

3. **Integrate.** The bracket does not depend on P, so
$$\ln\hat\phi_i = \int_0^P\frac{1}{RT}\left[\frac{\partial(nB)}{\partial n_i}\right]dP = \frac{P}{RT}\left[\frac{\partial(nB)}{\partial n_i}\right]_{T,n_j}$$

4. **B for a binary.** With $B_{12} = B_{21}$:
$$B = y_1^2B_{11} + 2y_1y_2B_{12} + y_2^2B_{22}$$
   Use $y_1^2 = y_1(1 - y_2) = y_1 - y_1y_2$ and $y_2^2 = y_2 - y_1y_2$:
$$B = y_1B_{11} + y_2B_{22} + y_1y_2(2B_{12} - B_{11} - B_{22}) = y_1B_{11} + y_2B_{22} + y_1y_2\delta_{12}$$

5. **Total form.** Multiply by n, with $y_i = n_i/n$:
$$nB = n_1B_{11} + n_2B_{22} + \frac{n_1n_2}{n}\delta_{12}$$

6. **Differentiate** with respect to $n_1$ at constant $n_2$ ($\partial n/\partial n_1 = 1$):
$$\left[\frac{\partial(nB)}{\partial n_1}\right]_{n_2} = B_{11} + \left(\frac{n_2}{n} - \frac{n_1n_2}{n^2}\right)\delta_{12} = B_{11} + y_2(1 - y_1)\delta_{12} = B_{11} + y_2^2\delta_{12}$$

7. **Substitute in step 3:**
$$\boxed{\ln\hat\phi_1 = \frac{P}{RT}\left(B_{11} + y_2^2\delta_{12}\right)}$$
   and similarly $\ln\hat\phi_2 = \dfrac{P}{RT}(B_{22} + y_1^2\delta_{12})$.

8. **Checks.** As $y_1 \to 1$ the result becomes the pure-species value $\ln\phi_1 = B_{11}P/RT$. Also $y_1\ln\hat\phi_1 + y_2\ln\hat\phi_2 = \frac{P}{RT}(y_1B_{11} + y_2B_{22} + y_1y_2\delta_{12}) = BP/RT = \ln\phi$ of the mixture (summability) ✓.`,
          answer: String.raw`ln φ̂ᵢ = ∫₀ᴾ(Z̄ᵢ − 1)dP/P with Z̄ᵢ = 1 + (P/RT)∂(nB)/∂nᵢ ⇒ ln φ̂ᵢ = (P/RT)∂(nB)/∂nᵢ. B = y₁B₁₁ + y₂B₂₂ + y₁y₂δ₁₂, nB = n₁B₁₁ + n₂B₂₂ + n₁n₂δ₁₂/n ⇒ ∂(nB)/∂n₁ = B₁₁ + y₂²δ₁₂, so ln φ̂₁ = (P/RT)(B₁₁ + y₂²δ₁₂).` },
        { id: "2016-17-Q3b", label: "(b)", marks: "15",
          topic: "solution-theory", sub: "Compressibility factor of equimolar propane/n-pentane at 50 °C and 2 bar (virial)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Estimate z for an equimolar mixture of propane(1)/n-pentane(2) at 50°C and 2 bar. Where,

$$B_{11} = -331\ \mathrm{cm^3/mol}$$
$$B_{12} = -558\ \mathrm{cm^3/mol}$$
$$B_{22} = -980\ \mathrm{cm^3/mol}$$`,
          solution: String.raw`**Given:** $y_1 = y_2$ = 0.5; T = 50 °C = 323.15 K; P = 2 bar; $B_{11}$ = −331, $B_{12}$ = −558, $B_{22}$ = −980 cm³/mol.

**Find:** Z of the mixture.

**Assumptions:** the two-term virial equation $Z = 1 + BP/RT$, valid at this low pressure.

1. **Mixture second virial coefficient:**
$$B = y_1^2B_{11} + 2y_1y_2B_{12} + y_2^2B_{22} = 0.25(-331) + 2(0.25)(-558) + 0.25(-980)$$
$$B = -82.75 - 279.0 - 245.0 = -606.75\ \mathrm{cm^3/mol}$$

2. **Compressibility factor.** With R = 83.14 cm³ bar mol⁻¹ K⁻¹:
$$\frac{BP}{RT} = \frac{(-606.75)(2)}{(83.14)(323.15)} = \frac{-1213.5}{26\,867} = -0.04517$$
$$Z = 1 + \frac{BP}{RT} = 1 - 0.04517 = \boxed{0.955}$$

3. **Comment.** The molar volume is $V = ZRT/P = 0.955(83.14)(323.15)/2 = 12\,830$ cm³/mol, compared with 13 434 cm³/mol for an ideal gas. Using the Q3(a) result, the fugacity coefficients are ($\delta_{12} = 2B_{12} - B_{11} - B_{22} = 195$ cm³/mol): $\ln\hat\phi_1 = \frac{2}{26\,867}(-331 + 0.25 \times 195) = -0.0210$, so $\hat\phi_1 = 0.979$; $\ln\hat\phi_2 = \frac{2}{26\,867}(-980 + 48.75) = -0.0693$, so $\hat\phi_2 = 0.933$.

**Result:** B = −606.75 cm³/mol; Z ≈ 0.955.`,
          answer: String.raw`B = Σ∑yᵢyⱼBᵢⱼ = 0.25(−331) + 0.5(−558) + 0.25(−980) = −606.75 cm³/mol; BP/RT = −606.75(2)/(83.14 × 323.15) = −0.0452 ⇒ Z = 0.955.` }
      ] },
    { id: "2016-17-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q4a", label: "(a)", marks: "18",
          topic: "solution-applications", sub: "Single-effect LiCl evaporator: heat duty from heats of solution (Fig. 12.14)",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A single effect evaporator operating at atmospheric pressure concentrates a 15% (by weight) LiCl solution to 40%. The feed enters the evaporator at the rate of 2 kg/s at 25°C. The normal boiling point of a 40% LiCl solution is about 132°C and its specific heat is estimated as 2.72 kJ/kg.°C. What is the heat transfer rate in the evaporator? The change of enthalpy for water [from 25°C (l) to 132°C (g)] is 2635 kJ/kg.

Attached to the paper (Fig. for Q4(a)): SVNA Figure 12.14, heats of solution at 25 °C, ΔH̃ in kJ per mol of solute against ñ, moles of H₂O per mole of solute (log scale 1–1000), for HCl(g) and LiCl(s).`,
          solution: String.raw`**Given:** feed 2 kg/s of 15 wt% LiCl at 25 °C; product 40 wt% LiCl leaving at its boiling point, 132 °C; $c_P$(40% solution) = 2.72 kJ/kg °C; water evaporated leaves as vapour at 132 °C with ΔH = 2635 kJ/kg from liquid at 25 °C. M(LiCl) = 42.39 g/mol, M(H₂O) = 18.015 g/mol.

**Find:** heat transfer rate Q.

**Assumptions:** steady flow; kinetic and potential energy changes neglected, no shaft work, so $Q = \Delta H$. Heats of solution are read from Fig. 12.14 at 25 °C. The vapour is treated as pure water (superheated slightly above 100 °C because of the boiling-point elevation). Method: SVNA §12.4 (Example 12.6-type), also in the course slides.

1. **Material balance:**
   - LiCl: $0.15 \times 2 = 0.30$ kg/s $= 300/42.39 = 7.076$ mol/s.
   - Product: $0.30/0.40 = 0.75$ kg/s, containing 0.45 kg/s water $= 24.98$ mol/s.
   - Feed water: 1.70 kg/s $= 94.37$ mol/s.
   - Water evaporated: $2.00 - 0.75 = 1.25$ kg/s.

2. **Hypothetical path** (enthalpy is a state function), all from 25 °C:
   - (a) separate the feed into pure LiCl(s) and water at 25 °C (unmixing);
   - (b) mix 7.076 mol/s LiCl with 0.45 kg/s water to make the 40% solution at 25 °C;
   - (c) heat the 40% solution from 25 to 132 °C;
   - (d) take the remaining 1.25 kg/s water from liquid at 25 °C to vapour at 132 °C.

3. **Heats of solution from Fig. 12.14 (LiCl(s) curve).**
   - Feed: $\tilde n = 94.37/7.076 = 13.34$ mol H₂O/mol LiCl. Go up from ñ ≈ 13.3 (a little past the 10 line) to the LiCl curve and across to the axis: $\Delta\tilde H \approx -33.8$ kJ/mol LiCl.
   - Product: $\tilde n = 24.98/7.076 = 3.53$. Go up from ñ ≈ 3.5 (halfway between the 3 and 4 lines on the log scale) to the steep start of the LiCl curve: $\Delta\tilde H \approx -23.0$ kJ/mol LiCl.

4. **Enthalpy changes of the steps:**
$$\Delta H_a = -(7.076)(-33.8) = +239.2\ \mathrm{kJ/s}$$
$$\Delta H_b = (7.076)(-23.0) = -162.8\ \mathrm{kJ/s}$$
$$\Delta H_c = \dot m\,c_P\,\Delta T = (0.75)(2.72)(132 - 25) = 218.3\ \mathrm{kJ/s}$$
$$\Delta H_d = (1.25)(2635) = 3293.8\ \mathrm{kJ/s}$$

5. **Heat transfer rate:**
$$Q = \Delta H = 239.2 - 162.8 + 218.3 + 3293.8 = 3588\ \mathrm{kJ/s} \approx \boxed{3.59\ \mathrm{MW}}$$

6. **Sensitivity.** The product reading lies on the steep part of the curve; each 1 kJ/mol error in it changes Q by only 7 kW (0.2%). Evaporating the water, $\Delta H_d$, is 92% of the duty. The net heat of concentration ($\Delta H_a + \Delta H_b$ = +76 kJ/s) is the extra energy needed to pull water away from LiCl. If ΔH̃ = −25.9 kJ/mol is read for ñ = 3.53, Q = 3568 kJ/s. Either way, Q ≈ 3.6 MW.

**Result:** Q ≈ 3590 kJ/s (about 3.6 MW) is supplied to the evaporator.`,
          answer: String.raw`LiCl 7.076 mol/s; feed ñ = 13.34 (ΔH̃ ≈ −33.8 kJ/mol), product 0.75 kg/s with ñ = 3.53 (ΔH̃ ≈ −23.0 kJ/mol); 1.25 kg/s water evaporated. Q = 239.2 − 162.8 + 218.3 + 3293.8 ≈ 3588 kJ/s ≈ 3.6 MW.` },
        { id: "2016-17-Q4b", label: "(b)", marks: "17",
          topic: "solution-applications", sub: "Margules form: limit of G^E/x₁x₂RT as x₁ → 0 equals ln γ₁^∞ = A₁₂",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The excess Gibbs energy of a binary liquid mixture at T and P is given by

$$\frac{G^E}{x_1x_2RT} = A_{21}x_1 + A_{12}x_2$$

Show that

$$\lim_{x_1 \to 0}\frac{G^E}{x_1x_2RT} = \ln\gamma_1^\infty = A_{12}$$`,
          solution: String.raw`1. **Limit of the given expression.** As $x_1 \to 0$, $x_2 \to 1$:
$$\lim_{x_1 \to 0}\frac{G^E}{x_1x_2RT} = A_{21}(0) + A_{12}(1) = A_{12}$$

2. **General result: the limit equals $\ln\gamma_1^\infty$.** Summability gives $G^E/RT = x_1\ln\gamma_1 + x_2\ln\gamma_2$, so
$$\frac{G^E}{x_1x_2RT} = \frac{\ln\gamma_1}{x_2} + \frac{\ln\gamma_2}{x_1}$$
   - As $x_1 \to 0$, the first term tends to $\ln\gamma_1^\infty$.
   - The second is 0/0 ($\gamma_2 \to 1$ as species 2 becomes pure). By L'Hôpital's rule it tends to $d\ln\gamma_2/dx_1$. Gibbs–Duhem, $x_1\,d\ln\gamma_1 + x_2\,d\ln\gamma_2 = 0$, gives $d\ln\gamma_2/dx_1 = -(x_1/x_2)\,d\ln\gamma_1/dx_1 \to 0$.
   Therefore
$$\lim_{x_1 \to 0}\frac{G^E}{x_1x_2RT} = \ln\gamma_1^\infty$$

3. **Direct check from ln γ₁.** Write $nG^E/RT = (A_{21}n_1 + A_{12}n_2)\dfrac{n_1n_2}{n^2}$ and differentiate with respect to $n_1$ ($\ln\gamma_1 = [\partial(nG^E/RT)/\partial n_1]_{T,P,n_2}$):
$$\ln\gamma_1 = A_{21}x_1x_2 + (A_{21}x_1 + A_{12}x_2)x_2 - 2(A_{21}x_1 + A_{12}x_2)x_1x_2$$
   This simplifies (using $1 - 2x_1 = x_2 - x_1$) to the Margules form
$$\ln\gamma_1 = x_2^2[A_{12} + 2(A_{21} - A_{12})x_1]$$
   At $x_1 = 0$, $x_2 = 1$: $\ln\gamma_1^\infty = A_{12}$.

4. **Hence**
$$\boxed{\lim_{x_1 \to 0}\frac{G^E}{x_1x_2RT} = \ln\gamma_1^\infty = A_{12}}$$
   Similarly $\lim_{x_2 \to 0} = \ln\gamma_2^\infty = A_{21}$. On a plot of $G^E/x_1x_2RT$ against $x_1$, the Margules equation is a straight line, and its intercepts at $x_1$ = 0 and 1 are $A_{12}$ and $A_{21}$. That is how the parameters are found from VLE data.`,
          answer: String.raw`Directly: x₁ → 0, x₂ → 1 gives A₁₂. Generally G^E/x₁x₂RT = ln γ₁/x₂ + ln γ₂/x₁ → ln γ₁^∞ + 0 (L'Hôpital + Gibbs–Duhem). Margules ln γ₁ = x₂²[A₁₂ + 2(A₂₁ − A₁₂)x₁] → A₁₂ at x₁ = 0. Hence lim = ln γ₁^∞ = A₁₂.` }
      ] },
    { id: "2016-17-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q5a", label: "(a)", marks: "15",
          topic: "refrigeration", sub: "Linde liquefaction process: schematic and working principle",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`With a schematic diagram write the working principle of a Linde liquefaction process.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2016-17-Q5b", label: "(b)", marks: "10+10=20",
          topic: "refrigeration", sub: "R-134a vapour-compression cycle at −12 °C: COP for 38 °C and 27 °C condensation, ideal and 75% compressor",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Consider the vapor compression refrigeration cycle with tetrafluoroethane as refrigerant. If the evaporation temperature is −12°C, show the effect of condensation temperature on the coefficient of performance by making calculation for condensation temperatures of 38°C and 27°C.

(i) Assume isentropic compression of vapor. (10)

(ii) Assume a compressor efficiency of 75%. (10)`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] },
    { id: "2016-17-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q6a", label: "(a)", marks: "10",
          topic: "refrigeration", sub: "Choice of refrigerant",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss on the choice of refrigerant.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2016-17-Q6b", label: "(b)", marks: "10",
          topic: "refrigeration", sub: "Ways of cooling a gas shown on a T–S diagram",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Write different ways of cooling process on a T-S diagram.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2016-17-Q6c", label: "(c)", marks: "15",
          topic: "reaction-equilibria", sub: "Mole fractions versus two reaction coordinates: CO₂ hydrogenation to methanol and CO",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`A system formed initially of 2 mol CO₂, 5 mol H₂ and 1 mol CO undergoes the reactions:

$$\mathrm{CO_2 + 3H_2 \rightarrow CH_3OH + H_2O}$$
$$\mathrm{CO_2 + H_2 \rightarrow CO + H_2O}$$

Develop expressions for the mole fractions of the reacting species as function of the reaction coordinates for the two reactions.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] },
    { id: "2016-17-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q7", label: "", marks: "35",
          topic: "reaction-equilibria", sub: "Methanol synthesis at 550 K and 100 bar with the shift reaction: equilibrium composition",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The feed gas to a methanol synthesis reactor is composed of 75% mol H₂, 15 mole% CO, 5 mole% CO₂ and 5 mole% N₂. The system comes to equilibrium at 550 K and 100 bar with respect to the reactions:

$$\mathrm{2H_2 + CO \rightarrow CH_3OH}$$
$$\mathrm{H_2 + CO_2 \rightarrow CO + H_2O}$$

Assuming ideal gases, determine the composition of the equilibrium mixture.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] },
    { id: "2016-17-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q8a", label: "(a)", marks: "20",
          topic: "reaction-equilibria", sub: "Temperature dependence of ΔG°/RT from ΔH°₀, ΔG°₀ and ΔC°P",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`For calculating the effect of temperature on the equilibrium constant, derive the following equation:

$$\frac{\Delta G^\circ}{RT} = \frac{\Delta G_0^\circ - \Delta H_0^\circ}{RT_0} + \frac{\Delta H_0^\circ}{RT} + \frac1T\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}dT - \int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}\frac{dT}{T}$$`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2016-17-Q8b", label: "(b)", marks: "15",
          topic: "reaction-equilibria", sub: "2H₂S + SO₂ → 3S + 2H₂O at 450 °C and 8 bar: equilibrium conversion",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Oil refineries frequently have both H₂S and SO₂ to dispose of. The following reactions suggests a means of getting rid of both at once:

$$\mathrm{2H_2S + SO_2 \rightarrow 3S + 2H_2O}$$

For reactants in the stoichiometric proportion, estimate the percent conversion of each reactant if the reaction comes to equilibrium at 450°C and 8 bar.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] }
  ]
});
