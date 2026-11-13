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
   - LiCl: $0.15 \times 2 = 0.30$ kg/s $= 300/42.39 = 7.077$ mol/s.
   - Product: $0.30/0.40 = 0.75$ kg/s, containing 0.45 kg/s water $= 450/18.015 = 24.979$ mol/s.
   - Feed water: 1.70 kg/s $= 94.366$ mol/s.
   - Water evaporated: $2.00 - 0.75 = 1.25$ kg/s.

2. **Hypothetical path** (enthalpy is a state function; SVNA Fig. 12.16), all from 25 °C:
   - (a) separate the feed into pure LiCl(s) and water at 25 °C (unmixing);
   - (b) mix 7.077 mol/s LiCl with 0.45 kg/s water to make the 40% solution at 25 °C;
   - (c) heat the 40% solution from 25 to 132 °C;
   - (d) take the remaining 1.25 kg/s water from liquid at 25 °C to vapour at 132 °C.

3. **Heats of solution from Fig. 12.14 (LiCl(s) curve).**
   - Feed: $\tilde n = 94.366/7.077 = 13.33$ mol H₂O/mol LiCl. Go up from ñ = 13.3 (a little past the 10 line) to the LiCl curve and across to the axis: $\Delta\tilde H = -33.80$ kJ/mol LiCl.
   - Product: $\tilde n = 24.979/7.077 = 3.53$. Go up from ñ = 3.53 (just past the 3 line on the log scale) to the steep start of the LiCl curve: $\Delta\tilde H = -23.26$ kJ/mol LiCl.
   - These are the readings printed in SVNA 6th ed. (SI), Example 12.5, pp. 430–432, for exactly this evaporator. Unmixing has the same heat effect as mixing, with the opposite sign.

4. **Enthalpy changes of the steps:**
$$\Delta H_a = -(7.077)(-33.80) = +239.2\ \mathrm{kJ/s}$$
$$\Delta H_b = (7.077)(-23.26) = -164.6\ \mathrm{kJ/s}$$
$$\Delta H_c = \dot m\,c_P\,\Delta T = (0.75)(2.72)(132 - 25) = 218.3\ \mathrm{kJ/s}$$
$$\Delta H_d = (1.25)(2635) = 3293.8\ \mathrm{kJ/s}$$

5. **Heat transfer rate:**
$$Q = \Delta H = 239.2 - 164.6 + 218.3 + 3293.8 = 3586.7\ \mathrm{kJ/s} \approx \boxed{3.59\ \mathrm{MW}}$$

6. **Comment.** SVNA's Example 12.5 takes $\Delta H_d$ from the steam tables, $(1.25)(2740.3 - 104.8) = 3294.4$ kJ/s, and gets 3587.3 kW. The paper's 2635 kJ/kg gives 3586.7 kJ/s, the same to 0.02%. Evaporating the water ($\Delta H_d$) is 92% of the duty. The net heat of concentration, $\Delta H_a + \Delta H_b$ = +74.6 kJ/s, is the extra energy needed to separate water from LiCl. The product reading lies on the steep part of the curve, but each 1 kJ/mol of error in it changes Q by only 7 kW (0.2%).

**Result:** Q ≈ 3587 kJ/s (about 3.59 MW) is supplied to the evaporator.`,
          answer: String.raw`LiCl 7.077 mol/s; feed ñ = 13.33 (ΔH̃ = −33.80 kJ/mol), product 0.75 kg/s with ñ = 3.53 (ΔH̃ = −23.26 kJ/mol; Fig. 12.14 readings as in SVNA Ex. 12.5); 1.25 kg/s water evaporated. Q = 239.2 − 164.6 + 218.3 + 3293.8 ≈ 3587 kJ/s ≈ 3.59 MW.` },
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
          solution: String.raw`### Idea
A gas can be liquefied only if it is cooled below its critical temperature. The Linde process does this by **Joule–Thomson expansion** (throttling) of a compressed gas that has been precooled by **countercurrent heat exchange** with the cold gas returning from the separator. Throttling a real gas at constant enthalpy lowers its temperature when the gas is below its inversion temperature, i.e. when $\mu_{JT} = (\partial T/\partial P)_H > 0$.

![Linde and Claude liquefaction schematics: compressor, heat exchanger, throttle, separator, and in Claude an expansion engine](fig/2022-23-Q2a-sketch.svg)

### Working (Linde process, part (a) of the figure)
1. **Compression:** make-up gas plus recycled gas is compressed to high pressure (e.g. air to 100–200 bar).
2. **Cooling:** the hot compressed gas is cooled back to about ambient temperature in a water cooler (state 4 in SVNA Fig. 9.7).
3. **Heat exchanger:** the high-pressure gas is cooled further by the cold unliquefied low-pressure gas returning from the separator.
4. **Throttle valve:** the cold high-pressure gas expands at constant enthalpy to about 1 bar. Its temperature drops, and once the process is established part of the stream condenses.
5. **Separator:** the liquid fraction z is withdrawn as product (state 9). The saturated vapour (1 − z) returns through the heat exchanger, precooling the incoming gas, and leaves warm (state 15) to be recompressed with make-up gas.
6. **Start-up:** at first the throttle gives only a small cooling. The returning gas cools the feed a little more each pass, and the temperature falls progressively until liquid forms.

### Energy balance (SVNA §9.6)
For the control volume of heat exchanger, valve and separator (adiabatic, no work), 1 kg of gas enters at $H_4$; z kg of liquid leaves at $H_9$ and (1 − z) kg of gas at $H_{15}$:
$$H_4 = zH_9 + (1 - z)H_{15} \;\Rightarrow\; z = \frac{H_{15} - H_4}{H_{15} - H_9} = \frac{H_4 - H_{15}}{H_9 - H_{15}}$$
   z is positive only because $H_4 < H_{15}$: the high-pressure gas at ambient T has a lower enthalpy than the low-pressure gas at the same T (real-gas effect). For methane or air, z is typically only 0.05–0.15.

### Remarks
- The liquefied fraction is small, because isenthalpic expansion produces little cooling. **Precooling** (e.g. with an NH₃ or propane refrigeration stage) increases z.
- Gases with low inversion temperatures (H₂, He) warm on throttling at room temperature. They must first be precooled below their inversion temperature (e.g. H₂ with liquid N₂).
- The **Claude process** improves on Linde by sending part of the high-pressure gas through an expansion engine (turbine), which gives a much larger temperature drop and recovers work.`,
          answer: String.raw`Compressed gas, cooled to ambient, is further cooled in a countercurrent exchanger by returning cold gas and throttled (Joule–Thomson, below the inversion T) into a separator; liquid z is withdrawn, vapour (1 − z) returns through the exchanger. Energy balance: z = (H₄ − H₁₅)/(H₉ − H₁₅); small z, improved by precooling or by an expander (Claude).` },
        { id: "2016-17-Q5b", label: "(b)", marks: "10+10=20",
          topic: "refrigeration", sub: "R-134a vapour-compression cycle at −12 °C: COP for 38 °C and 27 °C condensation, ideal and 75% compressor",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Consider the vapor compression refrigeration cycle with tetrafluoroethane as refrigerant. If the evaporation temperature is −12°C, show the effect of condensation temperature on the coefficient of performance by making calculation for condensation temperatures of 38°C and 27°C.

(i) Assume isentropic compression of vapor. (10)

(ii) Assume a compressor efficiency of 75%. (10)`,
          solution: String.raw`**Given:** R-134a vapour-compression cycle; evaporation at −12 °C (saturated vapour to the compressor); condensation at 38 °C or 27 °C (saturated liquid from the condenser); (i) isentropic compression, (ii) compressor efficiency η = 0.75.

**Find:** COP for each condensation temperature.

**Data:** no table is attached, so the values are from Çengel & Boles, Table A-11 (saturated R-134a) and Table A-13 (superheated R-134a), kJ/kg and kJ/(kg K):
- −12 °C: $P^{sat}$ = 185.37 kPa, $H_1 = h_g$ = 243.34, $S_1 = s_g$ = 0.93925.
- 38 °C: $P^{sat}$ = 963.68 kPa, $h_f$ = 105.30.
- 27 °C (between 26 and 28 °C): $P^{sat}$ = 706.6 kPa, $h_f$ = 89.27.

**Assumptions:** steady flow; no pressure drops; throttling isenthalpic ($H_4 = H_3$); kinetic and potential energy neglected.

![Vapour-compression cycle: schematic, T–S and ln P–H diagrams with states 1–4](fig/2023-24-Q2b-sketch.svg)

1. **Refrigeration per kg,** $q_C = H_1 - H_4$:
$$q_C(38\,°\mathrm C) = 243.34 - 105.30 = 138.04\ \mathrm{kJ/kg}, \qquad q_C(27\,°\mathrm C) = 243.34 - 89.27 = 154.07\ \mathrm{kJ/kg}$$

2. **Isentropic compressor exit, $H_2'$ at $S = 0.93925$** (A-13, interpolating first in s along each isobar, then in P):
   - 0.9 MPa: between 40 °C (s = 0.9328, h = 274.19) and 50 °C (0.9661, 284.79), h = 276.24.
   - 1.0 MPa: between 40 °C (0.9180, 271.73) and 50 °C (0.9526, 282.76), h = 278.50.
   - At 0.9637 MPa (38 °C): $H_2' = 276.24 + 0.637(278.50 - 276.24) = 277.68$ kJ/kg (about 45 °C).
   - 0.7 MPa: between 30 °C (0.9314, 268.47) and 40 °C (0.9642, 278.59), h = 270.89.
   - 0.8 MPa: between saturation (0.9185, 267.34) and 40 °C (0.9481, 276.46), h = 273.73.
   - At 0.7066 MPa (27 °C): $H_2' = 270.89 + 0.066(273.73 - 270.89) = 271.08$ kJ/kg.

3. **(i) Isentropic compression:** $W_s = H_2' - H_1$ and COP = $q_C/W_s$:
$$38\,°\mathrm C:\; W_s = 277.68 - 243.34 = 34.34\ \mathrm{kJ/kg}, \qquad \mathrm{COP} = \frac{138.04}{34.34} = 4.02$$
$$27\,°\mathrm C:\; W_s = 271.08 - 243.34 = 27.74\ \mathrm{kJ/kg}, \qquad \mathrm{COP} = \frac{154.07}{27.74} = 5.55$$

4. **(ii) Compressor efficiency 75%:** $W = W_s/\eta$ (and $H_2 = H_1 + W$):
$$38\,°\mathrm C:\; W = \frac{34.34}{0.75} = 45.79\ \mathrm{kJ/kg}, \qquad \mathrm{COP} = \frac{138.04}{45.79} = 3.01 \quad(H_2 = 289.1)$$
$$27\,°\mathrm C:\; W = \frac{27.74}{0.75} = 36.99\ \mathrm{kJ/kg}, \qquad \mathrm{COP} = \frac{154.07}{36.99} = 4.17 \quad(H_2 = 280.3)$$

5. **Summary and effect of condensation temperature:**

| Condensation T | 38 °C | 27 °C |
|---|---|---|
| $q_C$ / kJ kg⁻¹ | 138.04 | 154.07 |
| $W_s$ / kJ kg⁻¹ | 34.34 | 27.74 |
| COP, isentropic | 4.02 | 5.55 |
| COP, η = 0.75 | 3.01 | 4.17 |
| Carnot COP, $T_C/(T_H - T_C)$ | 261.15/50 = 5.22 | 261.15/39 = 6.70 |

   Lowering the condensation temperature from 38 °C to 27 °C raises the COP by about 38% in both cases. The compressor works against a smaller pressure ratio (3.8 instead of 5.2), so it needs less work, and the colder liquid gives more refrigeration per kg (less flash vapour after the valve). This is why condensers are designed for the lowest practical cooling-water or air temperature.

**Result:** (i) COP = 4.02 (38 °C) and 5.55 (27 °C); (ii) COP = 3.01 (38 °C) and 4.17 (27 °C).`,
          answer: String.raw`Çengel A-11/A-13: H₁ = 243.34, S₁ = 0.93925; q_C = 138.04 (38 °C) and 154.07 kJ/kg (27 °C); isentropic H₂′ = 277.68 and 271.08 ⇒ W_s = 34.34, 27.74 ⇒ COP = 4.02, 5.55; η = 0.75: COP = 3.01, 4.17. Lower condensation T raises the COP by ≈ 38%.` }
      ] },
    { id: "2016-17-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q6a", label: "(a)", marks: "10",
          topic: "refrigeration", sub: "Choice of refrigerant",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`Discuss on the choice of refrigerant.`,
          solution: String.raw`The COP of an ideal cycle depends mainly on the evaporator and condenser temperatures, not on the refrigerant. The choice of refrigerant is therefore governed by its properties, equipment cost, safety and environment (SVNA §9.2).

### Thermodynamic and physical requirements
1. **Vapour pressures:** at the evaporator temperature the vapour pressure should be **above atmospheric**, so air and moisture cannot leak in. At the condenser temperature it should be **moderate**, so the equipment is not heavy and the compression ratio is low.
2. **Critical temperature** well above the condensing temperature (otherwise heat cannot be rejected by condensation, and the throttling losses become large). **Freezing point** well below the evaporator temperature.
3. **High latent heat of vaporization:** gives more refrigeration per kg, so a smaller circulation rate.
4. **Small specific volume of the suction vapour:** gives a smaller compressor displacement per kW of refrigeration.
5. **Good heat-transfer properties,** low viscosity, and a low discharge temperature after compression.

### Practical requirements
6. **Safety:** non-toxic and non-flammable, or at least easy to detect when leaking (NH₃ is toxic but its smell gives warning; hydrocarbons are flammable).
7. **Chemical stability** in the cycle, no corrosion of metals, compatibility with lubricating oil and seals.
8. **Low cost and availability.**

### Environmental requirements
9. **Zero ozone-depletion potential (ODP):** CFCs (R-11, R-12) and later HCFCs (R-22) destroy stratospheric ozone and were phased out under the Montreal Protocol.
10. **Low global-warming potential (GWP):** HFCs such as R-134a (GWP ≈ 1430) are being phased down (Kigali Amendment) in favour of R-1234yf, R-1234ze, CO₂ (R-744), ammonia (R-717) and hydrocarbons (propane R-290, isobutane R-600a).

### Typical choices
| Application | Refrigerant |
|---|---|
| Large industrial plants, cold stores | ammonia |
| Domestic refrigerators | R-134a, now isobutane (R-600a) |
| Car air conditioning | R-134a, now R-1234yf |
| Air conditioning, heat pumps | R-410A, R-32, CO₂ |
| Absorption units | NH₃–water, water–LiBr |
| Very low temperatures | cascade systems (e.g. ethane or ethylene in the low stage) |

No single fluid meets every requirement, so the selection is a compromise.`,
          answer: String.raw`COP depends mainly on T's; choose a refrigerant with P^sat > 1 atm at the evaporator and moderate P at the condenser, T_c well above and freezing point well below the operating range, high latent heat, small suction volume, non-toxic, non-flammable, stable, non-corrosive, cheap, and zero ODP and low GWP (CFCs banned; HFCs phased down; NH₃, CO₂, hydrocarbons, HFOs).` },
        { id: "2016-17-Q6b", label: "(b)", marks: "10",
          topic: "refrigeration", sub: "Ways of cooling a gas shown on a T–S diagram",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Write different ways of cooling process on a T-S diagram.`,
          solution: String.raw`A gas can be cooled in three ways, shown from the same starting state A (high pressure, ambient temperature) on a T–S diagram (SVNA §9.6, Fig. 9.6):

![Ways of cooling a gas on a T–S diagram: 1 constant-pressure cooling, 2 isentropic expansion, 3 throttling, and throttling of precooled gas A′ into the two-phase region](fig/2016-17-Q6b-sketch.svg)

1. **Heat exchange at constant pressure** (path 1, along the high-P isobar). The gas gives up heat to a colder medium and can be cooled until it condenses. Its limit is the temperature of the available coolant, so it needs a colder fluid (precooling refrigerant, or the cold returning gas in a countercurrent exchanger).

2. **Expansion in an engine or turbine with work output, ideally isentropic** (path 2, vertical line from the high-P to the low-P isobar). It gives the **largest** temperature drop for a given pressure ratio and always cools, because
$$\left(\frac{\partial T}{\partial P}\right)_S = \frac{T}{C_P}\left(\frac{\partial V}{\partial T}\right)_P > 0$$
   Starting close enough to the dome, the end point lies inside it and part of the gas condenses. Drawbacks: the expander is costly, and liquid in a turbine causes damage. Used in the Claude process.

3. **Throttling through a valve at constant enthalpy** (path 3, Joule–Thomson expansion). It cools only if the gas is below its inversion temperature, $\mu_{JT} = (\partial T/\partial P)_H > 0$, and the cooling is much smaller than in an isentropic expansion over the same pressure range. It is simple, has no moving parts, and works in the two-phase region. If the gas is first precooled at high pressure (point A′, path 1 + 3), the throttle ends inside the two-phase dome and part of the gas liquefies. That is the Linde process.

**In liquefaction processes:** Linde = constant-P cooling (heat exchanger) + throttling; Claude = constant-P cooling + partial isentropic expansion in an expander + throttling of the rest.`,
          answer: String.raw`On T–S from a high-P state A: (1) constant-P heat exchange along the isobar (limited by coolant T); (2) isentropic expansion in an expander, vertical drop, largest cooling, always cools; (3) isenthalpic throttling, small cooling, only below the inversion T, ends in the dome if the gas is precooled (Linde). Claude combines 1 + 2 + 3.` },
        { id: "2016-17-Q6c", label: "(c)", marks: "15",
          topic: "reaction-equilibria", sub: "Mole fractions versus two reaction coordinates: CO₂ hydrogenation to methanol and CO",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`A system formed initially of 2 mol CO₂, 5 mol H₂ and 1 mol CO undergoes the reactions:

$$\mathrm{CO_2 + 3H_2 \rightarrow CH_3OH + H_2O}$$
$$\mathrm{CO_2 + H_2 \rightarrow CO + H_2O}$$

Develop expressions for the mole fractions of the reacting species as function of the reaction coordinates for the two reactions.`,
          solution: String.raw`**Given:** initial moles $n_{CO_2,0} = 2$, $n_{H_2,0} = 5$, $n_{CO,0} = 1$, $n_{CH_3OH,0} = n_{H_2O,0} = 0$; $n_0 = 8$ mol. Reaction coordinates $\varepsilon_1$ (methanol reaction, j = 1) and $\varepsilon_2$ (reverse shift, j = 2).

**Method:** SVNA §13.2, multiple reactions: $n_i = n_{i0} + \sum_j\nu_{i,j}\varepsilon_j$, $n = n_0 + \sum_j\nu_j\varepsilon_j$ with $\nu_j = \sum_i\nu_{i,j}$, and $y_i = n_i/n$.

1. **Stoichiometric numbers:**

| Species i | $\nu_{i,1}$ | $\nu_{i,2}$ | $n_{i0}$ |
|---|---|---|---|
| CO₂ | −1 | −1 | 2 |
| H₂ | −3 | −1 | 5 |
| CH₃OH | +1 | 0 | 0 |
| CO | 0 | +1 | 1 |
| H₂O | +1 | +1 | 0 |
| $\nu_j = \sum_i\nu_{i,j}$ | −2 | 0 | 8 |

2. **Total moles:**
$$n = n_0 + \nu_1\varepsilon_1 + \nu_2\varepsilon_2 = 8 - 2\varepsilon_1$$

3. **Mole fractions:**
$$y_{CO_2} = \frac{2 - \varepsilon_1 - \varepsilon_2}{8 - 2\varepsilon_1}, \qquad y_{H_2} = \frac{5 - 3\varepsilon_1 - \varepsilon_2}{8 - 2\varepsilon_1}, \qquad y_{CH_3OH} = \frac{\varepsilon_1}{8 - 2\varepsilon_1}$$
$$y_{CO} = \frac{1 + \varepsilon_2}{8 - 2\varepsilon_1}, \qquad y_{H_2O} = \frac{\varepsilon_1 + \varepsilon_2}{8 - 2\varepsilon_1}$$
   Check: the numerators add to $(2 + 5 + 1) + (-1 - 3 + 1 + 1)\varepsilon_1 + (-1 - 1 + 1 + 1)\varepsilon_2 = 8 - 2\varepsilon_1$, so $\sum y_i = 1$ ✓.

4. **Limits on the coordinates** (every $n_i \ge 0$): $\varepsilon_1 \ge 0$; $\varepsilon_1 + \varepsilon_2 \ge 0$ (water); $\varepsilon_2 \ge -1$ (CO); $\varepsilon_1 + \varepsilon_2 \le 2$ (CO₂); $3\varepsilon_1 + \varepsilon_2 \le 5$ (H₂). $\varepsilon_2$ may be negative (the shift running backwards, CO + H₂O → CO₂ + H₂) as long as these hold.

5. **Use in the equilibrium problem.** With ideal gases, each reaction gives one equation, $\prod_i y_i^{\nu_{i,j}} = (P/P^\circ)^{-\nu_j}K_j$:
$$\frac{y_{CH_3OH}\,y_{H_2O}}{y_{CO_2}\,y_{H_2}^3} = \frac{\varepsilon_1(\varepsilon_1 + \varepsilon_2)(8 - 2\varepsilon_1)^2}{(2 - \varepsilon_1 - \varepsilon_2)(5 - 3\varepsilon_1 - \varepsilon_2)^3} = \left(\frac{P}{P^\circ}\right)^2K_1$$
$$\frac{y_{CO}\,y_{H_2O}}{y_{CO_2}\,y_{H_2}} = \frac{(1 + \varepsilon_2)(\varepsilon_1 + \varepsilon_2)}{(2 - \varepsilon_1 - \varepsilon_2)(5 - 3\varepsilon_1 - \varepsilon_2)} = K_2$$
   Two equations in the two unknowns $\varepsilon_1$, $\varepsilon_2$, solved simultaneously once $K_1(T)$ and $K_2(T)$ are known. Reaction 2 has $\nu_2 = 0$, so pressure does not affect it directly.

**Result:** $n = 8 - 2\varepsilon_1$; $y_{CO_2} = (2 - \varepsilon_1 - \varepsilon_2)/n$, $y_{H_2} = (5 - 3\varepsilon_1 - \varepsilon_2)/n$, $y_{CH_3OH} = \varepsilon_1/n$, $y_{CO} = (1 + \varepsilon_2)/n$, $y_{H_2O} = (\varepsilon_1 + \varepsilon_2)/n$.`,
          answer: String.raw`n = 8 − 2ε₁; y_CO₂ = (2 − ε₁ − ε₂)/(8 − 2ε₁), y_H₂ = (5 − 3ε₁ − ε₂)/(8 − 2ε₁), y_CH₃OH = ε₁/(8 − 2ε₁), y_CO = (1 + ε₂)/(8 − 2ε₁), y_H₂O = (ε₁ + ε₂)/(8 − 2ε₁); Σy = 1.` }
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
          solution: String.raw`**Given:** feed (basis 100 mol) 75 H₂, 15 CO, 5 CO₂, 5 N₂ (inert); T = 550 K, P = 100 bar.
Reaction 1: 2H₂ + CO → CH₃OH ($\nu_1$ = −2). Reaction 2: H₂ + CO₂ → CO + H₂O ($\nu_2$ = 0).

**Find:** equilibrium composition.

**Assumptions:** ideal gases (as stated); standard state pure ideal gas at 1 bar. Data from SVNA Appendix C: Table C.4 (pp. 637–638) and Table C.1 (p. 635):

| Species | $\Delta H^\circ_{f298}$ | $\Delta G^\circ_{f298}$ | A | 10³B | 10⁶C | 10⁻⁵D |
|---|---|---|---|---|---|---|
| H₂ | 0 | 0 | 3.249 | 0.422 | 0 | 0.083 |
| CO | −110 525 | −137 169 | 3.376 | 0.557 | 0 | −0.031 |
| CO₂ | −393 509 | −394 359 | 5.457 | 1.045 | 0 | −1.157 |
| H₂O(g) | −241 818 | −228 572 | 3.470 | 1.450 | 0 | 0.121 |
| CH₃OH(g) | −200 660 | −161 960 | 2.211 | 12.216 | −3.450 | 0 |

(J/mol; $C_P^{ig}/R = A + BT + CT^2 + DT^{-2}$.)

1. **K₁ at 550 K** ($K = K_0K_1K_2$, SVNA eq. 13.21):
   - $\Delta H_0^\circ$ = −90 135 J/mol; $\Delta G_0^\circ$ = −24 791 J/mol.
   - ΔA = −7.663, ΔB = 10.815 × 10⁻³, ΔC = −3.450 × 10⁻⁶, ΔD = −0.135 × 10⁵.
   - $K_0 = e^{24\,791/(8.314 \times 298.15)} = 2.205 \times 10^4$ and
$$K_1 = \exp\left[\frac{-90\,135}{8.314 \times 298.15}\left(1 - \frac{298.15}{550}\right)\right] = 5.872 \times 10^{-8}$$
   - $\int_{T_0}^T\frac{\Delta C_P^\circ}{R}dT = -956.43$ K and $\int_{T_0}^T\frac{\Delta C_P^\circ}{R}\frac{dT}{T} = -2.3906$, so $K_2 = \exp(956.43/550 - 2.3906) = e^{-0.6516} = 0.5212$.
$$K_1(550\ \mathrm K) = 2.205 \times 10^4 \times 5.872 \times 10^{-8} \times 0.5212 = 6.75 \times 10^{-4}$$

2. **K₂ at 550 K** (reverse water-gas shift):
   - $\Delta H_0^\circ$ = −110 525 − 241 818 + 393 509 = +41 166 J/mol; $\Delta G_0^\circ$ = −137 169 − 228 572 + 394 359 = +28 618 J/mol.
   - ΔA = −1.860, ΔB = +0.540 × 10⁻³, ΔC = 0, ΔD = +1.164 × 10⁵.
   - $K_0 = 9.684 \times 10^{-6}$, $K_1$ = 2007.3.
   - $\int\Delta C_P^\circ/R\,dT = -232.00$ K and $\int\Delta C_P^\circ/R\,dT/T = -0.5406$, so $K_2 = e^{0.4218 - 0.5406} = 0.888$.
$$K_2(550\ \mathrm K) = 9.684 \times 10^{-6} \times 2007.3 \times 0.888 = 0.0173$$

3. **Mole numbers** with extents $\varepsilon_1$, $\varepsilon_2$ (per 100 mol feed):

| H₂ | CO | CO₂ | H₂O | CH₃OH | N₂ | Total |
|---|---|---|---|---|---|---|
| 75 − 2ε₁ − ε₂ | 15 − ε₁ + ε₂ | 5 − ε₂ | ε₂ | ε₁ | 5 | 100 − 2ε₁ |

4. **Equilibrium equations** ($\prod_i y_i^{\nu_i} = (P/P^\circ)^{-\nu}K$; P/P° = 100):
$$\frac{y_{CH_3OH}}{y_{CO}\,y_{H_2}^2} = \frac{\varepsilon_1(100 - 2\varepsilon_1)^2}{(15 - \varepsilon_1 + \varepsilon_2)(75 - 2\varepsilon_1 - \varepsilon_2)^2} = 100^2(6.75 \times 10^{-4}) = 6.75$$
$$\frac{y_{CO}\,y_{H_2O}}{y_{CO_2}\,y_{H_2}} = \frac{(15 - \varepsilon_1 + \varepsilon_2)\,\varepsilon_2}{(5 - \varepsilon_2)(75 - 2\varepsilon_1 - \varepsilon_2)} = 0.0173$$

5. **Solve simultaneously.** Iterate: guess $\varepsilon_2$ (≈ 1), solve the first equation for $\varepsilon_1$, update $\varepsilon_2$ from the second, and repeat (or use Newton's method on both). The solution is
$$\varepsilon_1 = 11.86\ \mathrm{mol}, \qquad \varepsilon_2 = 0.888\ \mathrm{mol}, \qquad n = 100 - 2(11.86) = 76.28\ \mathrm{mol}$$

6. **Equilibrium composition:**

| Species | H₂ | CO | CO₂ | H₂O | CH₃OH | N₂ |
|---|---|---|---|---|---|---|
| mol | 50.39 | 4.03 | 4.11 | 0.89 | 11.86 | 5.00 |
| $y_i$ | 0.6606 | 0.0528 | 0.0539 | 0.0116 | 0.1555 | 0.0655 |

   Check: $0.1555/(0.0528 \times 0.6606^2) = 6.75$ ✓ and $0.0528 \times 0.0116/(0.0539 \times 0.6606) = 0.0173$ ✓.

**Result:** $y_{H_2}$ = 0.661, $y_{CO}$ = 0.053, $y_{CO_2}$ = 0.054, $y_{H_2O}$ = 0.012, $y_{CH_3OH}$ = 0.156, $y_{N_2}$ = 0.066. The methanol formed equals 79% of the CO fed; the net CO conversion is 73%, because the shift reaction converts 18% of the CO₂ to CO.`,
          answer: String.raw`K₁(550 K) = 2.205×10⁴ × 5.872×10⁻⁸ × 0.5212 = 6.75×10⁻⁴; K₂ = 9.684×10⁻⁶ × 2007 × 0.888 = 0.0173. Solving ε₁(100 − 2ε₁)²/[(15 − ε₁ + ε₂)(75 − 2ε₁ − ε₂)²] = 6.75 and (15 − ε₁ + ε₂)ε₂/[(5 − ε₂)(75 − 2ε₁ − ε₂)] = 0.0173: ε₁ = 11.86, ε₂ = 0.888 ⇒ y: H₂ 0.661, CO 0.053, CO₂ 0.054, H₂O 0.012, CH₃OH 0.156, N₂ 0.066.` }
      ] },
    { id: "2016-17-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2016-17-Q8a", label: "(a)", marks: "20",
          topic: "reaction-equilibria", sub: "Temperature dependence of ΔG°/RT from ΔH°₀, ΔG°₀ and ΔC°P",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`For calculating the effect of temperature on the equilibrium constant, derive the following equation:

$$\frac{\Delta G^\circ}{RT} = \frac{\Delta G_0^\circ - \Delta H_0^\circ}{RT_0} + \frac{\Delta H_0^\circ}{RT} + \frac1T\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}dT - \int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}\frac{dT}{T}$$`,
          solution: String.raw`**Starting point:** $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$ at temperature T, with known values $\Delta H_0^\circ$, $\Delta G_0^\circ$ at a reference temperature $T_0$ (usually 298.15 K) and $\Delta C_P^\circ = \sum_i\nu_iC_{P_i}^\circ$ as a function of T.

1. **ΔH° at T (Kirchhoff).** For each pure species in its standard state, $dH_i^\circ = C_{P_i}^\circ\,dT$ (the standard pressure is fixed). Multiply by $\nu_i$, sum, and integrate from $T_0$ to T:
$$\Delta H^\circ = \Delta H_0^\circ + R\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}dT$$

2. **ΔS° at T.** For each species, $dS_i^\circ = C_{P_i}^\circ\,dT/T$. Summing and integrating in the same way:
$$\Delta S^\circ = \Delta S_0^\circ + R\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}\frac{dT}{T}$$
   At $T_0$, $\Delta G_0^\circ = \Delta H_0^\circ - T_0\Delta S_0^\circ$, so
$$\Delta S_0^\circ = \frac{\Delta H_0^\circ - \Delta G_0^\circ}{T_0}$$

3. **Combine** in $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$:
$$\Delta G^\circ = \Delta H_0^\circ + R\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}dT - \frac{T}{T_0}(\Delta H_0^\circ - \Delta G_0^\circ) - RT\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}\frac{dT}{T}$$

4. **Divide by RT:**
$$\boxed{\frac{\Delta G^\circ}{RT} = \frac{\Delta G_0^\circ - \Delta H_0^\circ}{RT_0} + \frac{\Delta H_0^\circ}{RT} + \frac1T\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}dT - \int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}\frac{dT}{T}}$$
   This is SVNA eq. 13.18.

5. **Alternative route (check).** The Gibbs–Helmholtz relation gives $d(\Delta G^\circ/RT)/dT = -\Delta H^\circ/RT^2$, i.e. the van 't Hoff equation $d\ln K/dT = \Delta H^\circ/RT^2$. Integrating it from $T_0$ (where $\Delta G^\circ/RT = \Delta G_0^\circ/RT_0$) with ΔH° from step 1 and integrating by parts gives the same expression.

6. **Use for K.** Since $\ln K = -\Delta G^\circ/RT$, the result splits into three factors, $K = K_0K_1K_2$ (SVNA eq. 13.21):
$$K_0 = \exp\left(\frac{-\Delta G_0^\circ}{RT_0}\right), \qquad K_1 = \exp\left[\frac{\Delta H_0^\circ}{RT_0}\left(1 - \frac{T_0}{T}\right)\right], \qquad K_2 = \exp\left(-\frac1T\int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}dT + \int_{T_0}^{T}\frac{\Delta C_P^\circ}{R}\frac{dT}{T}\right)$$
   With $\Delta C_P^\circ/R = \Delta A + \Delta B\,T + \Delta C\,T^2 + \Delta D\,T^{-2}$ the integrals are analytical:
$$\int_{T_0}^T\frac{\Delta C_P^\circ}{R}dT = \Delta A(T - T_0) + \frac{\Delta B}{2}(T^2 - T_0^2) + \frac{\Delta C}{3}(T^3 - T_0^3) + \Delta D\frac{T - T_0}{TT_0}$$
$$\int_{T_0}^T\frac{\Delta C_P^\circ}{R}\frac{dT}{T} = \Delta A\ln\frac{T}{T_0} + \Delta B(T - T_0) + \frac{\Delta C}{2}(T^2 - T_0^2) + \frac{\Delta D}{2}\frac{T^2 - T_0^2}{T^2T_0^2}$$
   $K_2$ is usually close to 1. When $\Delta C_P^\circ \approx 0$, it reduces to the van 't Hoff result $\ln(K/K_0) = -(\Delta H_0^\circ/R)(1/T - 1/T_0)$.`,
          answer: String.raw`ΔH° = ΔH°₀ + R∫(ΔC°P/R)dT; ΔS° = (ΔH°₀ − ΔG°₀)/T₀ + R∫(ΔC°P/R)dT/T; ΔG° = ΔH° − TΔS°, divided by RT ⇒ ΔG°/RT = (ΔG°₀ − ΔH°₀)/RT₀ + ΔH°₀/RT + (1/T)∫(ΔC°P/R)dT − ∫(ΔC°P/R)dT/T; hence K = K₀K₁K₂.` },
        { id: "2016-17-Q8b", label: "(b)", marks: "15",
          topic: "reaction-equilibria", sub: "2H₂S + SO₂ → 3S + 2H₂O at 450 °C and 8 bar: equilibrium conversion",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Oil refineries frequently have both H₂S and SO₂ to dispose of. The following reactions suggests a means of getting rid of both at once:

$$\mathrm{2H_2S + SO_2 \rightarrow 3S + 2H_2O}$$

For reactants in the stoichiometric proportion, estimate the percent conversion of each reactant if the reaction comes to equilibrium at 450°C and 8 bar.`,
          solution: String.raw`**Given:** 2H₂S(g) + SO₂(g) → 3S + 2H₂O(g); feed 2 mol H₂S : 1 mol SO₂ (stoichiometric); T = 450 °C = 723.15 K; P = 8 bar.

**Find:** fractional conversion of each reactant.

**Assumptions:**
- Sulfur forms as a pure condensed phase, as in SVNA's statement of this problem (S(s); activity = 1, so it does not appear in the equilibrium expression). Its $C_P$ is from Table C.2, S (rhombic), used beyond its $T_{max}$ of 368 K. In reality sulfur at 450 °C is a liquid with a significant vapour pressure, so the answer is an estimate.
- The gases are ideal at 8 bar; standard states are 1 bar.
- Data: SVNA Table C.4 (pp. 637–638), Table C.1 (p. 635) and Table C.2 (p. 636).

| Species | ν | $\Delta H^\circ_{f298}$ | $\Delta G^\circ_{f298}$ | A | 10³B | 10⁻⁵D |
|---|---|---|---|---|---|---|
| H₂S(g) | −2 | −20 630 | −33 560 | 3.931 | 1.490 | −0.232 |
| SO₂(g) | −1 | −296 830 | −300 194 | 5.699 | 0.801 | −1.015 |
| S(s) | +3 | 0 | 0 | 4.114 | −1.728 | −0.783 |
| H₂O(g) | +2 | −241 818 | −228 572 | 3.470 | 1.450 | 0.121 |

1. **Standard changes at 298.15 K:**
$$\Delta H_0^\circ = 2(-241\,818) - 2(-20\,630) - (-296\,830) = -145\,546\ \mathrm{J/mol}$$
$$\Delta G_0^\circ = 2(-228\,572) - 2(-33\,560) - (-300\,194) = -89\,830\ \mathrm{J/mol}$$
$$\Delta A = 5.721, \qquad \Delta B = -6.065 \times 10^{-3}, \qquad \Delta D = -0.628 \times 10^5$$

2. **K at 723.15 K** ($K = K_0K_1K_2$):
$$K_0 = \exp\frac{89\,830}{8.314 \times 298.15} = 5.475 \times 10^{15}, \qquad K_1 = \exp\left[\frac{-145\,546}{8.314 \times 298.15}\left(1 - \frac{298.15}{723.15}\right)\right] = 1.032 \times 10^{-15}$$
   $\int\Delta C_P^\circ/R\,dT = 991.37$ K and $\int\Delta C_P^\circ/R\,dT/T = 2.1981$, so $K_2 = \exp(-991.37/723.15 + 2.1981) = e^{0.8272} = 2.287$.
$$K = 5.475 \times 10^{15} \times 1.032 \times 10^{-15} \times 2.287 = 12.9$$

3. **Mole numbers** (extent ε = fractional conversion X, since the feed is stoichiometric): H₂S 2(1 − X), SO₂ 1 − X, H₂O 2X; gas total 3 − X (sulfur is condensed).

4. **Equilibrium equation.** Gas-phase $\nu = 2 - 2 - 1 = -1$, so $\prod y_i^{\nu_i} = (P/P^\circ)^{1}K$:
$$\frac{y_{H_2O}^2}{y_{H_2S}^2\,y_{SO_2}} = \frac{[2X/(3 - X)]^2}{[2(1 - X)/(3 - X)]^2\,[(1 - X)/(3 - X)]} = \frac{X^2(3 - X)}{(1 - X)^3} = 8 \times 12.92 = 103.3$$

5. **Solve:** by trial, X = 0.7667. Check:
$$\frac{0.7667^2(2.2333)}{(0.2333)^3} = 103.4 \approx 103.3 \quad\checkmark$$

**Result:** about **77% conversion of both H₂S and SO₂** (they are fed in the stoichiometric ratio, so the fractional conversions are equal). The gas then contains $y_{H_2O}$ = 0.69, $y_{H_2S}$ = 0.21, $y_{SO_2}$ = 0.10. Higher pressure helps (at 1 bar X = 0.60), and so does lower temperature, since the reaction is strongly exothermic. This is the basis of the Claus process.`,
          answer: String.raw`ΔH°₂₉₈ = −145 546, ΔG°₂₉₈ = −89 830 J/mol; K(723 K) = 5.475×10¹⁵ × 1.032×10⁻¹⁵ × 2.287 = 12.9 (S as condensed phase). X²(3 − X)/(1 − X)³ = 8K = 103.3 ⇒ X ≈ 0.767: about 77% conversion of both H₂S and SO₂.` }
      ] }
  ]
});
