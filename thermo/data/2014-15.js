QB.paper({
  year: "2014-15", date: "26/01/2016", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engineering Examinations 2014-2015, CHE 307 (Chemical Engineering Thermodynamics II), 3 hours, 210 marks. Section A: four questions, answer any THREE (data booklet for CHE 307 supplied). Section B: four questions, answer any THREE. Use separate scripts for each section; the figures in the margin indicate full marks. Attached to the paper: SVNA Table 9.1 (saturated tetrafluoroethane, British units), Fig. G.2 (P–H diagram for HFC-134a, British units) and Fig. 12.17 (H–x diagram for H₂SO₄/H₂O).`,
  questions: [
    { id: "2014-15-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q1a", label: "(a)", marks: "10",
          topic: "vle-intro", sub: "Retrograde condensation on the P–T envelope near the critical region",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Explain the term Retrograde condensation using P-T diagram in the critical region.`,
          solution: String.raw`![P–T envelope of a mixture of fixed composition: bubble and dew curves meeting at the critical point C, with cricondenbar M, cricondentherm N and the retrograde region](fig/2014-15-Q1a-sketch.svg)

1. **P–T diagram of a mixture of fixed composition** (SVNA §10.3). A pure substance has a single vapour-pressure curve ending at its critical point. A mixture instead has a **phase envelope**: the **bubble-point curve** (saturated liquid) and the **dew-point curve** (saturated vapour). Between them liquid and vapour coexist. The two curves meet at the **mixture critical point C**, where the liquid and vapour phases become identical.

2. **C is not the highest point of the envelope.** For a mixture, C usually lies on the side of the envelope rather than at its top:
   - **M, the cricondenbar**, is the highest pressure at which two phases can coexist.
   - **N, the cricondentherm**, is the highest temperature at which two phases can coexist.
   So near the critical region there are states above $T_c$ (or above $P_c$) that are still two-phase.

3. **Retrograde condensation.** Take an isotherm between $T_c$ and the cricondentherm N (the vertical line in the figure) and lower the pressure from above the envelope:
   - Above the upper branch of the dew curve the mixture is a single dense vapour.
   - On reaching the dew curve, **liquid appears although the pressure is falling**. Normally lowering P vaporizes liquid, so this is the reverse ("retrograde") of normal behaviour.
   - The amount of liquid rises to a maximum and then falls. The liquid re-vaporizes completely when the isotherm crosses the dew curve a second time, at lower pressure.
   This is **retrograde condensation**. It happens because the dew curve bends back between M and N, so a vertical (isothermal) line cuts it twice.

4. **Retrograde vaporization** is the analogous effect between C and the cricondenbar M: along an isobar at a pressure between $P_c$ and $P_M$, liquid can vaporize on *cooling*.

5. **Importance.** Deep natural-gas (gas-condensate) reservoirs lie in this region. As the reservoir pressure falls during production, heavy hydrocarbons condense in the rock pores and are lost unless the pressure is maintained (gas cycling). Surface separators are run at the conditions of maximum liquid drop-out to recover the condensate.`,
          answer: String.raw`On the P–T envelope of a mixture the critical point C is not the maximum: the envelope extends to the cricondenbar M and cricondentherm N. For T between T_c and N, isothermal pressure reduction from the dense-gas region crosses the dew curve twice, so liquid forms on lowering P and then re-vaporizes: retrograde condensation (important in gas-condensate wells).` },
        { id: "2014-15-Q1b", label: "(b)", marks: "15",
          topic: "vle-intro", sub: "Cyclohexanone/phenol at 144 °C: Margules A from the azeotrope, P and y₁ at x₁ = 0.6",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A liquid mixture of cyclohexanone (1)/Phenol (2) for which $x_1 = 0.6$ is in equilibrium with its vapor at 144°C. Determine the equilibrium pressure P and vapor composition $y_1$ from the following information:

$$\ln\gamma_1 = Ax_2^2 \qquad \ln\gamma_2 = Ax_1^2$$

At 144°C, $\quad P_1^{sat} = 80\ \mathrm{kPa} \qquad P_2^{sat} = 40\ \mathrm{kPa}$

The system forms an azeotrope at 144°C for which $x_1^{az} = 0.3$.`,
          solution: String.raw`**Given:** T = 144 °C; $P_1^{sat}$ = 80 kPa, $P_2^{sat}$ = 40 kPa; one-parameter Margules model; azeotrope at $x_1^{az}$ = 0.3.

**Find:** A, then P and $y_1$ at $x_1$ = 0.6.

**Assumptions:** low pressure, so modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$ applies (ideal vapour, Poynting factor ≈ 1).

1. **Azeotrope condition.** At the azeotrope $y_i = x_i$, so modified Raoult's law gives $P = \gamma_1P_1^{sat} = \gamma_2P_2^{sat}$:
$$\ln\frac{\gamma_1}{\gamma_2} = A(x_2^2 - x_1^2) = A(1 - 2x_1) = \ln\frac{P_2^{sat}}{P_1^{sat}}$$

2. **Parameter A** at $x_1^{az}$ = 0.3:
$$A = \frac{\ln(40/80)}{1 - 2(0.3)} = \frac{-0.6931}{0.4} = -1.733$$
   A is negative: negative deviations from Raoult's law and a **minimum-pressure azeotrope**. At the azeotrope $\gamma_1 = e^{-1.733(0.49)} = 0.4278$, so $P^{az} = 0.4278 \times 80 = 34.22$ kPa.

3. **Activity coefficients at $x_1$ = 0.6** ($x_2$ = 0.4):
$$\gamma_1 = e^{-1.733(0.4)^2} = e^{-0.2773} = 0.7579, \qquad \gamma_2 = e^{-1.733(0.6)^2} = e^{-0.6238} = 0.5359$$

4. **Bubble pressure** (sum of $y_iP$):
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat} = 0.6(0.7579)(80) + 0.4(0.5359)(40) = 36.38 + 8.57 = 44.95\ \mathrm{kPa}$$

5. **Vapour composition:**
$$y_1 = \frac{x_1\gamma_1P_1^{sat}}{P} = \frac{36.38}{44.95} = 0.809$$
   Check: $x_1$ = 0.6 lies to the right of the azeotrope (0.3), where species 1 is the more volatile, so $y_1 > x_1$ ✓. P is above $P^{az}$ = 34.2 kPa, as it must be for a minimum-pressure azeotrope.

**Result:** A = −1.733; **P = 44.95 kPa, $y_1$ = 0.809**.`,
          answer: String.raw`A = ln(40/80)/(1 − 0.6) = −1.733; γ₁ = 0.758, γ₂ = 0.536; P = 36.38 + 8.57 = 44.95 kPa; y₁ = 0.809 (minimum-pressure azeotrope at 34.2 kPa).` },
        { id: "2014-15-Q1c", label: "(c)", marks: "10",
          topic: "vle-intro", sub: "Proof that a Raoult's-law system cannot form an azeotrope",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Prove that an equilibrium liquid/vapor system described by Raoult's law cannot exhibit an azeotrope.`,
          solution: String.raw`**Raoult's law** (ideal vapour, ideal liquid solution): $y_iP = x_iP_i^{sat}$, with $P_i^{sat}$ depending on T only.

1. **Definition of an azeotrope:** a state where the vapour and liquid compositions are equal, $y_i = x_i$ for all i (with $0 < x_1 < 1$).

2. **Apply Raoult's law at such a state.** For a binary, $y_1 = x_1$ and $y_2 = x_2$ give
$$x_1P = x_1P_1^{sat} \;\Rightarrow\; P = P_1^{sat}, \qquad x_2P = x_2P_2^{sat} \;\Rightarrow\; P = P_2^{sat}$$
   So an azeotrope would require $P_1^{sat} = P_2^{sat}$ at the system temperature. Two different species have different vapour pressures (except at an isolated temperature where their vapour-pressure curves happen to cross). Hence **no azeotrope can exist**.

3. **Even at that special temperature there is no azeotrope point.** If $P_1^{sat} = P_2^{sat}$, then $y_1 = x_1$ at **every** composition and P is the same for all $x_1$. Nothing distinguishes a particular composition, so there is no azeotrope in the usual sense.

4. **Second proof: the P–x curve has no extremum.** Summing Raoult's law,
$$P = x_1P_1^{sat} + x_2P_2^{sat} = P_2^{sat} + (P_1^{sat} - P_2^{sat})x_1, \qquad \frac{dP}{dx_1} = P_1^{sat} - P_2^{sat} \neq 0$$
   The bubble line is straight, so P is monotonic in $x_1$. At an azeotrope the P–x and P–y curves touch at an extremum, $dP/dx_1 = 0$, which a straight line cannot have.

5. **Third view: relative volatility.** $\alpha_{12} = \dfrac{y_1/x_1}{y_2/x_2} = \dfrac{P_1^{sat}}{P_2^{sat}}$, which is independent of composition. An azeotrope needs $\alpha_{12} = 1$ at some $x_1$, which happens only if $\alpha_{12} = 1$ everywhere.

**Conclusion:** azeotropes need non-ideal liquid behaviour. With modified Raoult's law, $\alpha_{12} = \gamma_1P_1^{sat}/(\gamma_2P_2^{sat})$ varies with $x_1$ and can pass through 1, as in part (b).`,
          answer: String.raw`At an azeotrope yᵢ = xᵢ; Raoult's law then gives P = P₁ˢᵃᵗ = P₂ˢᵃᵗ, impossible for two species at the same T (and if equal, y = x everywhere). Also P = P₂ˢᵃᵗ + (P₁ˢᵃᵗ − P₂ˢᵃᵗ)x₁ is linear (no dP/dx₁ = 0) and α₁₂ = P₁ˢᵃᵗ/P₂ˢᵃᵗ is constant ≠ 1, so no azeotrope.` }
      ] },
    { id: "2014-15-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q2a", label: "(a)", marks: "10",
          topic: "solution-theory", sub: "Partial molar property definition and M̄₁ = M + x₂ dM/dx₁ for a binary",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Define Partial Molar Properties and show that for a binary system

$$\bar M_1 = M + x_2\frac{dM}{dx_1}$$

where M is solution properties, $\bar M_i$ is partial properties.`,
          solution: String.raw`1. **Definition.** The partial molar property of species i in a solution is the change in the total property $nM$ when an infinitesimal amount of i is added at constant T, P and amounts of all other species:
$$\bar M_i \equiv \left[\frac{\partial(nM)}{\partial n_i}\right]_{T,P,n_j}$$
   It is a response function: it represents the contribution of one mole of i to the solution property in that particular solution, not the property of pure i. M can be V, U, H, S, A or G; for G, $\bar G_i = \mu_i$.

2. **Summability.** Because nM is homogeneous of degree one in the $n_i$ at constant T and P (Euler's theorem),
$$nM = \sum_i n_i\bar M_i \quad\Rightarrow\quad M = \sum_i x_i\bar M_i$$
   Combining $d(nM) = \sum_i\bar M_i\,dn_i$ (constant T, P) with the differential of the summability relation gives the **Gibbs–Duhem equation**, $\sum_i x_i\,d\bar M_i = 0$ at constant T and P.

3. **Binary, constant T and P.** From summability and Gibbs–Duhem,
$$M = x_1\bar M_1 + x_2\bar M_2, \qquad dM = \bar M_1\,dx_1 + \bar M_2\,dx_2 + \underbrace{(x_1\,d\bar M_1 + x_2\,d\bar M_2)}_{=0}$$
   With $dx_2 = -dx_1$:
$$\frac{dM}{dx_1} = \bar M_1 - \bar M_2$$

4. **Solve the two equations.** Eliminate $\bar M_2$ using $M = x_1\bar M_1 + (1 - x_1)\bar M_2$:
$$M = x_1\bar M_1 + (1 - x_1)\left(\bar M_1 - \frac{dM}{dx_1}\right) = \bar M_1 - x_2\frac{dM}{dx_1}$$
$$\boxed{\bar M_1 = M + x_2\frac{dM}{dx_1}}, \qquad \text{and similarly}\qquad \boxed{\bar M_2 = M - x_1\frac{dM}{dx_1}}$$

5. **Check by direct differentiation.** With $n = n_1 + n_2$ and $x_1 = n_1/n$, $(\partial x_1/\partial n_1)_{n_2} = n_2/n^2 = x_2/n$, so
$$\bar M_1 = \frac{\partial(nM)}{\partial n_1} = M + n\frac{dM}{dx_1}\frac{x_2}{n} = M + x_2\frac{dM}{dx_1}\ \checkmark$$

**Geometric meaning:** the tangent to the M–$x_1$ curve at a given $x_1$ intercepts $x_1 = 1$ at $\bar M_1$ and $x_1 = 0$ at $\bar M_2$ (tangent-intercept method).`,
          answer: String.raw`M̄ᵢ = [∂(nM)/∂nᵢ] at T, P, nⱼ. From M = x₁M̄₁ + x₂M̄₂ and Gibbs–Duhem (x₁dM̄₁ + x₂dM̄₂ = 0): dM/dx₁ = M̄₁ − M̄₂, so M̄₁ = M + x₂ dM/dx₁ and M̄₂ = M − x₁ dM/dx₁ (tangent intercepts).` },
        { id: "2014-15-Q2b", label: "(b)", marks: "25",
          topic: "solution-theory", sub: "Partial molar volumes from V = 120x₁ + 70x₂ + (15x₁ + 8x₂)x₁x₂: checks and plot",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The molar volume of a binary liquid mixture at T and P is given by

$$V = 120x_1 + 70x_2 + (15x_1 + 8x_2)x_1x_2$$

(i) Find the expression for the partial molar volume of species 1 and 2 at T and P.

(ii) Show that $V = \sum_i x_i\bar V_i$.

(iii) Show that the expressions of partial molar properties satisfy the Gibbs/Duhem equation.

(iv) Show that $\left(\dfrac{d\bar V_1}{dx_1}\right)_{x_1=1} = \left(\dfrac{d\bar V_2}{dx_1}\right)_{x_1=0} = 0$.

(v) Plot values of V, $\bar V_1$ and $\bar V_2$ versus $x_1$ and label points $\bar V_1^\infty$ and $\bar V_2^\infty$ and show their values.`,
          solution: String.raw`**Given:** V in cm³/mol (SVNA Problem 11.x; the same mixture as 2016-17 Q2b) at fixed T and P.

1. **Write V in terms of $x_1$ only.** With $x_2 = 1 - x_1$: $15x_1 + 8x_2 = 8 + 7x_1$ and $x_1x_2 = x_1 - x_1^2$:
$$V = 120x_1 + 70(1 - x_1) + (8 + 7x_1)(x_1 - x_1^2) = 70 + 58x_1 - x_1^2 - 7x_1^3$$
$$\frac{dV}{dx_1} = 58 - 2x_1 - 21x_1^2$$

2. **(i) Partial molar volumes** from $\bar V_1 = V + x_2\,dV/dx_1$ and $\bar V_2 = V - x_1\,dV/dx_1$:
$$\bar V_1 = 70 + 58x_1 - x_1^2 - 7x_1^3 + (1 - x_1)(58 - 2x_1 - 21x_1^2) \;\Rightarrow\; \boxed{\bar V_1 = 128 - 2x_1 - 20x_1^2 + 14x_1^3}$$
$$\bar V_2 = 70 + 58x_1 - x_1^2 - 7x_1^3 - x_1(58 - 2x_1 - 21x_1^2) \;\Rightarrow\; \boxed{\bar V_2 = 70 + x_1^2 + 14x_1^3}$$
   (cm³/mol). At $x_1$ = 1, $\bar V_1 = 128 - 2 - 20 + 14 = 120 = V_1$, and at $x_1$ = 0, $\bar V_2 = 70 = V_2$ ✓.

3. **(ii) Summability:**
$$x_1\bar V_1 + x_2\bar V_2 = (128x_1 - 2x_1^2 - 20x_1^3 + 14x_1^4) + (70 + x_1^2 + 14x_1^3 - 70x_1 - x_1^3 - 14x_1^4)$$
$$= 70 + 58x_1 - x_1^2 - 7x_1^3 = V\ \checkmark$$

4. **(iii) Gibbs–Duhem** at constant T, P: $x_1\,d\bar V_1/dx_1 + x_2\,d\bar V_2/dx_1 = 0$. The derivatives are
$$\frac{d\bar V_1}{dx_1} = -2 - 40x_1 + 42x_1^2, \qquad \frac{d\bar V_2}{dx_1} = 2x_1 + 42x_1^2$$
$$x_1(-2 - 40x_1 + 42x_1^2) + (1 - x_1)(2x_1 + 42x_1^2) = -2x_1 - 40x_1^2 + 42x_1^3 + 2x_1 + 42x_1^2 - 2x_1^2 - 42x_1^3 = 0\ \checkmark$$

5. **(iv) Zero end slopes:**
$$\left(\frac{d\bar V_1}{dx_1}\right)_{x_1=1} = -2 - 40 + 42 = 0, \qquad \left(\frac{d\bar V_2}{dx_1}\right)_{x_1=0} = 0 + 0 = 0\ \checkmark$$
   This follows from Gibbs–Duhem: $d\bar V_1/dx_1 = -(x_2/x_1)\,d\bar V_2/dx_1$, which → 0 as $x_2$ → 0, and vice versa.

6. **(v) Values and infinite-dilution limits:**
$$\bar V_1^\infty = \bar V_1(x_1 \to 0) = 128\ \mathrm{cm^3/mol}, \qquad \bar V_2^\infty = \bar V_2(x_1 \to 1) = 70 + 1 + 14 = 85\ \mathrm{cm^3/mol}$$

| $x_1$ | 0 | 0.2 | 0.4 | 0.5 | 0.6 | 0.8 | 1.0 |
|---|---|---|---|---|---|---|---|
| V | 70.00 | 81.50 | 92.59 | 97.88 | 102.93 | 112.18 | 120.00 |
| $\bar V_1$ | 128.00 | 126.91 | 124.90 | 123.75 | 122.62 | 120.77 | 120.00 |
| $\bar V_2$ | 70.00 | 70.15 | 71.06 | 72.00 | 73.38 | 77.81 | 85.00 |

![V, partial molar volumes of species 1 and 2 versus x1, with the infinite-dilution values 128 and 85 cm3/mol marked](fig/2014-15-Q2b-sol.svg)

   $\bar V_1$ falls from 128 to $V_1$ = 120 and meets V tangentially at $x_1$ = 1. $\bar V_2$ rises from $V_2$ = 70 to 85 and meets V tangentially at $x_1$ = 0. Both partial-property curves are flat at the pure-species ends.

**Result:** $\bar V_1 = 128 - 2x_1 - 20x_1^2 + 14x_1^3$, $\bar V_2 = 70 + x_1^2 + 14x_1^3$ cm³/mol; $\bar V_1^\infty$ = 128, $\bar V_2^\infty$ = 85 cm³/mol.`,
          answer: String.raw`V = 70 + 58x₁ − x₁² − 7x₁³; V̄₁ = 128 − 2x₁ − 20x₁² + 14x₁³, V̄₂ = 70 + x₁² + 14x₁³ cm³/mol; x₁V̄₁ + x₂V̄₂ = V ✓; x₁dV̄₁ + x₂dV̄₂ = 0 ✓; end slopes zero ✓; V̄₁^∞ = 128, V̄₂^∞ = 85 cm³/mol.` }
      ] },
    { id: "2014-15-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q3a", label: "(a)", marks: "20",
          topic: "solution-applications", sub: "Ternary Gᴱ/RT = A₁₂x₁x₂ + A₁₃x₁x₃ + A₂₃x₂x₃: ln γᵢ and infinite-dilution limit",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The excess Gibbs energy of a particular ternary liquid mixture is represented by empirical expression

$$\frac{G^E}{RT} = A_{12}x_1x_2 + A_{13}x_1x_3 + A_{23}x_2x_3$$

(i) Determine the expression for the activity coefficient of species 1, 2 and 3.

(ii) How do you calculate limiting value of activity coefficient of species 1?

(iii) What does the limiting case represent?`,
          solution: String.raw`**Basis:** $\ln\gamma_i$ is the partial property of $G^E/RT$ (SVNA eq. 11.91):
$$\ln\gamma_i = \left[\frac{\partial(nG^E/RT)}{\partial n_i}\right]_{T,P,n_j}$$

1. **Total excess Gibbs energy.** With $x_i = n_i/n$:
$$\frac{nG^E}{RT} = \frac{A_{12}n_1n_2 + A_{13}n_1n_3 + A_{23}n_2n_3}{n}, \qquad n = n_1 + n_2 + n_3$$

2. **(i) Differentiate with respect to $n_1$** (quotient rule, $\partial n/\partial n_1 = 1$):
$$\ln\gamma_1 = \frac{A_{12}n_2 + A_{13}n_3}{n} - \frac{A_{12}n_1n_2 + A_{13}n_1n_3 + A_{23}n_2n_3}{n^2} = A_{12}x_2 + A_{13}x_3 - \frac{G^E}{RT}$$
$$\boxed{\ln\gamma_1 = A_{12}x_2(1 - x_1) + A_{13}x_3(1 - x_1) - A_{23}x_2x_3}$$
   Using $1 - x_1 = x_2 + x_3$, this is also $\ln\gamma_1 = A_{12}x_2^2 + A_{13}x_3^2 + (A_{12} + A_{13} - A_{23})x_2x_3$.

   By symmetry (permuting indices):
$$\boxed{\ln\gamma_2 = A_{12}x_1(1 - x_2) + A_{23}x_3(1 - x_2) - A_{13}x_1x_3}$$
$$\boxed{\ln\gamma_3 = A_{13}x_1(1 - x_3) + A_{23}x_2(1 - x_3) - A_{12}x_1x_2}$$

3. **Check (summability):**
$$\sum_i x_i\ln\gamma_i = A_{12}x_1x_2(2 - x_1 - x_2 - x_3) + A_{13}x_1x_3(2 - x_1 - x_2 - x_3) + A_{23}x_2x_3(2 - x_1 - x_2 - x_3) = \frac{G^E}{RT}\ \checkmark$$
   For a binary ($x_3$ = 0) the result reduces to the one-parameter Margules form $\ln\gamma_1 = A_{12}x_2^2$, $\ln\gamma_2 = A_{12}x_1^2$.

4. **(ii) Limiting value of $\gamma_1$:** let $x_1 \to 0$ in the expression for $\ln\gamma_1$, with the solvent made of species 2 and 3 ($x_2 + x_3 = 1$):
$$\ln\gamma_1^\infty = \lim_{x_1\to0}\ln\gamma_1 = A_{12}x_2 + A_{13}x_3 - A_{23}x_2x_3$$
   Special cases: in pure solvent 2 ($x_2$ = 1), $\ln\gamma_1^\infty = A_{12}$; in pure solvent 3, $\ln\gamma_1^\infty = A_{13}$.
   Example: in an equimolar 2–3 solvent, $\ln\gamma_1^\infty = 0.5A_{12} + 0.5A_{13} - 0.25A_{23}$.

5. **(iii) What the limiting case represents:**
   - **Infinite dilution of species 1:** each molecule of 1 is surrounded only by solvent molecules (2 and 3), so $\gamma_1^\infty$ measures purely the 1–solvent interactions, with no 1–1 contacts.
   - It is the **Henry's-law region** for species 1: $\hat f_1 \to x_1\mathcal H_1$ with $\mathcal H_1 = \gamma_1^\infty f_1$ (at low pressure $\mathcal H_1 = \gamma_1^\infty P_1^{sat}$).
   - Practically, $\gamma^\infty$ values are what binary parameters are fitted to (here $A_{12} = \ln\gamma_1^\infty$ in 2), and they govern the separation of trace impurities (e.g. stripping the last traces of 1 from a 2–3 mixture).`,
          answer: String.raw`ln γ₁ = A₁₂x₂(1 − x₁) + A₁₃x₃(1 − x₁) − A₂₃x₂x₃ (and cyclic for γ₂, γ₃); Σxᵢ ln γᵢ = Gᴱ/RT ✓. ln γ₁^∞ = lim(x₁→0) = A₁₂x₂ + A₁₃x₃ − A₂₃x₂x₃ (= A₁₂ in pure 2, A₁₃ in pure 3): species 1 infinitely dilute in the 2–3 solvent (Henry's-law region, 𝓗₁ = γ₁^∞f₁).` },
        { id: "2014-15-Q3b", label: "(b)", marks: "15",
          topic: "solution-theory", sub: "Derivation of ln φ̂₁ = P(B₁₁ + y₂²δ₁₂)/RT from the virial equation",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Show that fugacity co-efficient for a binary mixture,

$$\hat\phi_1 = \exp\left[\frac{P}{RT}\left(B_{11} + y_2^2\delta_{12}\right)\right]$$

where,

$$\ln\hat\phi_i = \int_0^P(\bar Z_i - 1)\frac{dP}{P}, \qquad Z = 1 + \frac{BP}{RT}$$

and

$$B = \sum_i\sum_j y_iy_jB_{ij}, \qquad \delta_{12} = 2B_{12} - B_{11} - B_{22}$$`,
          solution: String.raw`**Basis:** two-term virial equation for the gas mixture, with B depending on T and composition only (not on P).

1. **Mixture second virial coefficient** for a binary ($B_{21} = B_{12}$):
$$B = y_1^2B_{11} + 2y_1y_2B_{12} + y_2^2B_{22}$$
   Substitute $y_1^2 = y_1(1 - y_2)$ and $y_2^2 = y_2(1 - y_1)$:
$$B = y_1B_{11} + y_2B_{22} + y_1y_2(2B_{12} - B_{11} - B_{22}) = y_1B_{11} + y_2B_{22} + y_1y_2\delta_{12}$$

2. **Total compressibility factor.** Multiply $Z = 1 + BP/RT$ by n:
$$nZ = n + \frac{P}{RT}(nB)$$
   Differentiate with respect to $n_1$ at constant T, P, $n_2$ to get the partial property:
$$\bar Z_1 = \left[\frac{\partial(nZ)}{\partial n_1}\right]_{T,P,n_2} = 1 + \frac{P}{RT}\bar B_1, \qquad \bar B_1 = \left[\frac{\partial(nB)}{\partial n_1}\right]_{T,n_2}$$

3. **Fugacity coefficient.** Because $\bar B_1$ is independent of P,
$$\ln\hat\phi_1 = \int_0^P(\bar Z_1 - 1)\frac{dP}{P} = \int_0^P\frac{\bar B_1}{RT}\,dP = \frac{P\bar B_1}{RT}$$

4. **Evaluate $\bar B_1$.** From step 1, with $y_i = n_i/n$:
$$nB = n_1B_{11} + n_2B_{22} + \frac{n_1n_2}{n}\delta_{12}$$
$$\bar B_1 = B_{11} + \left(\frac{n_2}{n} - \frac{n_1n_2}{n^2}\right)\delta_{12} = B_{11} + y_2(1 - y_1)\delta_{12} = B_{11} + y_2^2\delta_{12}$$

5. **Result:**
$$\ln\hat\phi_1 = \frac{P}{RT}\left(B_{11} + y_2^2\delta_{12}\right) \quad\Rightarrow\quad \boxed{\hat\phi_1 = \exp\left[\frac{P}{RT}\left(B_{11} + y_2^2\delta_{12}\right)\right]}$$
   and in the same way $\hat\phi_2 = \exp\left[\dfrac{P}{RT}\left(B_{22} + y_1^2\delta_{12}\right)\right]$.

**Checks:** as $y_2 \to 0$ the result becomes the pure-species value $\ln\phi_1 = B_{11}P/RT$. If $\delta_{12}$ = 0 (i.e. $B_{12}$ is the arithmetic mean of $B_{11}$ and $B_{22}$), $\hat\phi_1 = \phi_1$ and the gas mixture is an ideal solution (Lewis/Randall rule).`,
          answer: String.raw`B = y₁B₁₁ + y₂B₂₂ + y₁y₂δ₁₂; nZ = n + (P/RT)nB ⇒ Z̄₁ − 1 = PB̄₁/RT; ln φ̂₁ = ∫(Z̄₁ − 1)dP/P = PB̄₁/RT; B̄₁ = ∂(nB)/∂n₁ = B₁₁ + y₂²δ₁₂ ⇒ φ̂₁ = exp[P(B₁₁ + y₂²δ₁₂)/RT].` }
      ] },
    { id: "2014-15-Q4", q: 4, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q4a", label: "(a)", marks: "15",
          topic: "refrigeration", sub: "Absorption refrigeration: schematic, principle and (Q_H/Q_C)min at 30, −10 and 100 °C",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Draw the schematic diagram of an adsorption refrigeration unit. Discuss the working principle and find the expression for $(Q_H/Q_C)_{min}$. Estimate $(Q_H/Q_C)_{min}$ if the surrounding temperature is 30°C and $T_C = -10$°C and $T_H = 100$°C.`,
          solution: String.raw`### Schematic
![Absorption refrigeration cycle: generator, condenser, expansion valve, evaporator, absorber and solution pump](fig/2014-15-Q4a-sketch.svg)

The paper prints "adsorption"; the unit meant is the **absorption** refrigerator (SVNA §9.4). A solid-sorbent (adsorption) chiller, e.g. silica gel–water or zeolite–water, works on the same heat-driven principle and has the same thermodynamic limit.

### Working principle (NH₃–H₂O)
1. **Evaporator (low P):** liquid refrigerant (NH₃) evaporates at $T_C$ and takes heat $Q_C$ from the cold space, exactly as in a vapour-compression cycle.
2. **Absorber (low P):** the NH₃ vapour is absorbed into weak (NH₃-lean) aqueous solution. Absorption is exothermic, so cooling water removes heat at about the surroundings temperature $T_S$. This produces a strong solution.
3. **Pump:** the strong solution is pumped to condenser pressure. The work is very small because a liquid has a small specific volume ($W = \int V\,dP$).
4. **Generator (high P):** heat $Q_H$ from a source at $T_H$ (steam, waste heat, solar heat) boils NH₃ out of the solution. The weak solution returns to the absorber through a valve.
5. **Condenser (high P):** the NH₃ vapour condenses, rejecting heat at $T_S$.
6. **Expansion valve:** the liquid is throttled back to evaporator pressure.

The absorber–pump–generator train is a **"thermal compressor"**: it replaces the mechanical compressor, so the cycle is driven by heat instead of work.

### Expression for $(Q_H/Q_C)_{min}$
1. **Work needed to pump heat** $Q_C$ from $T_C$ to $T_S$ (Carnot refrigerator):
$$W = Q_C\,\frac{T_S - T_C}{T_C}$$
2. **Work obtainable from heat** $Q_H$ taken at $T_H$ and rejected at $T_S$ (Carnot engine):
$$W = Q_H\,\frac{T_H - T_S}{T_H}$$
3. **Equate them** (the most efficient possible process):
$$\boxed{\left(\frac{Q_H}{Q_C}\right)_{min} = \frac{T_S - T_C}{T_C}\cdot\frac{T_H}{T_H - T_S}}$$
   The overall energy balance is $Q_H + Q_C + W_{pump} = Q_{absorber} + Q_{condenser}$, with $W_{pump}$ negligible.

### Estimate
$T_S$ = 303.15 K, $T_C$ = 263.15 K, $T_H$ = 373.15 K:
$$\left(\frac{Q_H}{Q_C}\right)_{min} = \frac{303.15 - 263.15}{263.15}\cdot\frac{373.15}{373.15 - 303.15} = 0.1520 \times 5.331 = 0.810$$

**Result:** at least **0.81 kJ of heat at 100 °C per kJ of refrigeration** at −10 °C, so the ideal $Q_C/Q_H$ is 1.23. Real single-effect units need $Q_H/Q_C$ ≈ 1.5–2 ($Q_C/Q_H$ ≈ 0.5–0.7).`,
          answer: String.raw`Absorber + pump + generator replace the compressor (heat-driven). Carnot engine T_H→T_S drives Carnot refrigerator T_C→T_S: (Q_H/Q_C)min = [(T_S − T_C)/T_C]·[T_H/(T_H − T_S)] = (40/263.15)(373.15/70) = 0.81.` },
        { id: "2014-15-Q4b", label: "(b)", marks: "20",
          topic: "refrigeration", sub: "Tetrafluoroethane refrigerator −15/80 °F, 5 Btu/s: circulation rate, turbine instead of valve, COP",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A refrigerator with tetrafluoroethane as refrigerant operates with an evaporation temperature of −15°F and a condensation temperature of 80°F. Saturated liquid refrigerant from the condenser flows through an expression valve into the evaporator from which it emerges as saturated vapor.

(i) Estimate the circulation rate of the refrigerant for a cooling rate of 5 Btu/s.

(ii) By how much would the circulation rate be reduced if the throttle valve were replaced by a turbine in which refrigerant expands isentropically.

(iii) Determine COP for isentropic compression of vapor for case (i) and (ii).

Table 9.1 (thermodynamic properties of saturated tetrafluoroethane, British units) and Figure G.2 (P–H diagram for HFC-134a, British units) are attached to the paper.`,
          solution: String.raw`**Given:** HFC-134a; evaporation at −15 °F, condensation at 80 °F; saturated liquid leaves the condenser and saturated vapour leaves the evaporator; $\dot Q_C$ = 5 Btu/s.

**Data (Table 9.1 attached to the paper):**

| T (°F) | P (psia) | $H^l$ | $H^v$ | $S^l$ | $S^v$ |
|---|---|---|---|---|---|
| −15 | 14.667 | 7.505 | 100.799 | 0.01733 | 0.22714 |
| 80 | 101.37 | 37.978 | 113.880 | 0.07892 | 0.21957 |

H in Btu/lbm, S in Btu/(lbm R). States: 1 = liquid entering the evaporator, 2 = saturated vapour at −15 °F, 3 = compressed vapour at 101.37 psia, 4 = saturated liquid at 80 °F.

**Assumptions:** steady flow; kinetic and potential energy changes neglected; compressor and turbine isentropic.

1. **(i) Throttle valve:** $H_1 = H_4$ = 37.978 Btu/lbm. Refrigeration per lbm:
$$Q_C = H_2 - H_1 = 100.799 - 37.978 = 62.821\ \mathrm{Btu/lb_m}$$
$$\dot m = \frac{5}{62.821} = 0.0796\ \mathrm{lb_m/s}$$

2. **(ii) Isentropic turbine** from saturated liquid at 80 °F to −15 °F: $S_1' = S_4$ = 0.07892.
$$x = \frac{0.07892 - 0.01733}{0.22714 - 0.01733} = 0.2936, \qquad H_1' = 7.505 + 0.2936(100.799 - 7.505) = 34.892\ \mathrm{Btu/lb_m}$$
$$Q_C' = 100.799 - 34.892 = 65.907\ \mathrm{Btu/lb_m}, \qquad \dot m' = \frac{5}{65.907} = 0.0759\ \mathrm{lb_m/s}$$
   The circulation rate falls by $0.0796 - 0.0759 = 0.0037$ lbm/s, i.e. **4.7%**. The turbine also delivers $W_t = H_4 - H_1' = 3.086$ Btu/lbm.

3. **Isentropic compression** from state 2 ($S$ = 0.22714) to 101.37 psia. On Fig. G.2, follow the constant-entropy line S = 0.227 from the saturated-vapour curve at 14.7 psia up to the 101.4 psia isobar: **$H_3$ ≈ 118.0 Btu/lbm** (about 97 °F).
   Cross-check with Çengel Table A-13 (0.70 MPa ≈ 101.4 psia, interpolated at $s$ = 0.9515 kJ/(kg K)): $\Delta H_S$ = 39.98 kJ/kg = 17.19 Btu/lbm.
$$W_S = H_3 - H_2 = 118.0 - 100.799 = 17.20\ \mathrm{Btu/lb_m}$$

4. **(iii) COP, case (i):**
$$\omega = \frac{Q_C}{W_S} = \frac{62.821}{17.20} = 3.65$$

5. **(iii) COP, case (ii):** the turbine work is recovered, so the net work is $17.20 - 3.086 = 14.11$ Btu/lbm:
$$\omega' = \frac{65.907}{14.11} = 4.67$$
   Without crediting the turbine work, $\omega' = 65.907/17.20 = 3.83$. For comparison, the Carnot COP is $T_C/(T_H - T_C) = 444.67/95 = 4.68$. Case (ii) is almost reversible; the small difference comes from desuperheating above 80 °F.

**Result:** (i) $\dot m$ = 0.0796 lbm/s; (ii) $\dot m'$ = 0.0759 lbm/s, 0.0037 lbm/s (4.7%) less; (iii) COP = 3.65 with the valve, 4.67 with the turbine (net work).`,
          answer: String.raw`(i) Q_C = 100.799 − 37.978 = 62.82 Btu/lbm ⇒ ṁ = 0.0796 lbm/s. (ii) Turbine: x = 0.294, H = 34.89 ⇒ Q_C = 65.91 Btu/lbm, ṁ = 0.0759 lbm/s (−0.0037 lbm/s, 4.7%). (iii) H₃ ≈ 118.0 (Fig. G.2), W_S = 17.2 Btu/lbm: COP = 3.65 (valve), 4.67 (turbine work credited; 3.83 if not).` }
      ] },
    { id: "2014-15-Q5", q: 5, section: "B",
      stem: String.raw`The following is a set of VLE data for the system methanol (1)/water (2) at 60°C.

| P/kPa | $x_1$ | $y_1$ |
|---|---|---|
| 19.95 | 0.00 | 0.00 |
| 39.22 | 0.17 | 0.57 |
| 42.98 | 0.22 | 0.63 |
| 48.85 | 0.30 | 0.70 |
| 52.78 | 0.37 | 0.73 |
| 56.65 | 0.45 | 0.77 |

| P/kPa | $x_1$ | $y_1$ |
|---|---|---|
| 60.61 | 0.53 | 0.81 |
| 63.99 | 0.60 | 0.84 |
| 67.92 | 0.68 | 0.87 |
| 70.23 | 0.73 | 0.89 |
| 72.83 | 0.78 | 0.91 |
| 84.56 | 1.0 | 1.0 |`,
      parts: [
        { id: "2014-15-Q5a", label: "(a)", marks: "20",
          topic: "solution-applications", sub: "Methanol/water at 60 °C: Margules parameters from the Gᴱ/x₁x₂RT line",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Find parameter values for the Margules equation that provide the best fit of $G^E/RT$ to the data.`,
          solution: String.raw`**Given:** T = 333.15 K; $P_1^{sat}$ = 84.56 kPa ($x_1$ = 1), $P_2^{sat}$ = 19.95 kPa ($x_1$ = 0); ten interior data points.

**Find:** the two-parameter Margules constants $A_{12}$, $A_{21}$.

**Assumptions:** low pressure, so modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$ holds (ideal vapour, Poynting factor ≈ 1). Margules equation (SVNA eq. 12.9–12.10):
$$\frac{G^E}{x_1x_2RT} = A_{21}x_1 + A_{12}x_2, \qquad \ln\gamma_1 = x_2^2[A_{12} + 2(A_{21} - A_{12})x_1], \qquad \ln\gamma_2 = x_1^2[A_{21} + 2(A_{12} - A_{21})x_2]$$

1. **Experimental activity coefficients and $G^E/RT$:**
$$\gamma_1 = \frac{y_1P}{x_1P_1^{sat}}, \qquad \gamma_2 = \frac{y_2P}{x_2P_2^{sat}}, \qquad \frac{G^E}{RT} = x_1\ln\gamma_1 + x_2\ln\gamma_2$$
   For example, at $x_1$ = 0.30: $\gamma_1 = 0.70(48.85)/(0.30 \times 84.56) = 1.3480$ and $\gamma_2 = 0.30(48.85)/(0.70 \times 19.95) = 1.0494$.

| $x_1$ | $\gamma_1$ | $\gamma_2$ | $\ln\gamma_1$ | $\ln\gamma_2$ | $G^E/RT$ | $G^E/x_1x_2RT$ |
|---|---|---|---|---|---|---|
| 0.17 | 1.5551 | 1.0185 | 0.4416 | 0.0183 | 0.0903 | 0.6398 |
| 0.22 | 1.4555 | 1.0220 | 0.3754 | 0.0217 | 0.0995 | 0.5799 |
| 0.30 | 1.3480 | 1.0494 | 0.2986 | 0.0482 | 0.1233 | 0.5873 |
| 0.37 | 1.2315 | 1.1338 | 0.2082 | 0.1256 | 0.1562 | 0.6700 |
| 0.45 | 1.1463 | 1.1875 | 0.1366 | 0.1718 | 0.1560 | 0.6301 |
| 0.53 | 1.0954 | 1.2282 | 0.0912 | 0.2055 | 0.1449 | 0.5817 |
| 0.60 | 1.0594 | 1.2830 | 0.0577 | 0.2492 | 0.1343 | 0.5597 |
| 0.68 | 1.0276 | 1.3831 | 0.0273 | 0.3243 | 0.1223 | 0.5622 |
| 0.73 | 1.0126 | 1.4342 | 0.0125 | 0.3606 | 0.1065 | 0.5402 |
| 0.78 | 1.0048 | 1.4934 | 0.0048 | 0.4011 | 0.0920 | 0.5361 |

2. **Best straight line** (SVNA Example 12.1 method). For the Margules equation $G^E/x_1x_2RT$ is linear in $x_1$: intercept $A_{12}$ at $x_1$ = 0 and value $A_{21}$ at $x_1$ = 1. A least-squares fit of the last column gives
$$\frac{G^E}{x_1x_2RT} = 0.6586 - 0.1446\,x_1 \quad\Rightarrow\quad \boxed{A_{12} = 0.659, \qquad A_{21} = 0.659 - 0.145 = 0.514}$$
   The points scatter by about ±0.05 about the line. The $y_1$ values are given to only two decimals, which matters most at the dilute ends.

3. **Correlation:**
$$\ln\gamma_1 = x_2^2(0.659 - 0.290x_1), \qquad \ln\gamma_2 = x_1^2(0.514 + 0.290x_2)$$
   so $\gamma_1^\infty = e^{0.659} = 1.93$ and $\gamma_2^\infty = e^{0.514} = 1.67$. Both $\ln\gamma_i$ are positive (positive deviations from Raoult's law), and each falls to zero with zero slope at its pure-species end.

![ln γ1, ln γ2 and GE/x1x2RT versus x1 for methanol/water at 60 °C: data points and Margules lines](fig/2014-15-Q5a-sol.svg)

> **Note:** fitting P directly (Barker's method, minimize $\sum(\delta P)^2$) gives $A_{12}$ = 0.752, $A_{21}$ = 0.432 with rms δP = 0.20 kPa. The exam method is the $G^E/x_1x_2RT$ line above.

**Result:** $A_{12}$ ≈ 0.659, $A_{21}$ ≈ 0.514.`,
          answer: String.raw`γᵢ from yᵢP = xᵢγᵢPᵢˢᵃᵗ; least-squares line Gᴱ/x₁x₂RT = 0.6586 − 0.1446x₁ ⇒ A₁₂ = 0.659, A₂₁ = 0.514 (γ₁^∞ = 1.93, γ₂^∞ = 1.67).` },
        { id: "2014-15-Q5b", label: "(b)", marks: "15",
          topic: "solution-applications", sub: "Methanol/water at 60 °C: P–x–y diagram, data versus Margules correlation",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Prepare a $P_{xy}$ diagram that compares the experimental points with curves determined from the correlation.`,
          solution: String.raw`**Given:** $A_{12}$ = 0.659, $A_{21}$ = 0.514 from part (a); $P_1^{sat}$ = 84.56 kPa, $P_2^{sat}$ = 19.95 kPa.

**Assumptions:** modified Raoult's law (BUBL P with the correlated γ's).

1. **Calculated bubble pressure and vapour composition** at each $x_1$:
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat}, \qquad y_1 = \frac{x_1\gamma_1P_1^{sat}}{P}$$
   For example, at $x_1$ = 0.30: $\ln\gamma_1 = 0.49(0.659 - 0.290 \times 0.30) = 0.2803$, so $\gamma_1$ = 1.3235; $\ln\gamma_2 = 0.09(0.514 + 0.290 \times 0.70) = 0.0645$, so $\gamma_2$ = 1.0666.
$$P = 0.30(1.3235)(84.56) + 0.70(1.0666)(19.95) = 33.57 + 14.90 = 48.47\ \mathrm{kPa}, \qquad y_1 = 33.57/48.47 = 0.693$$

2. **Comparison with the data:**

| $x_1$ | $P_{exp}$ (kPa) | $P_{calc}$ (kPa) | $y_{1,exp}$ | $y_{1,calc}$ |
|---|---|---|---|---|
| 0.17 | 39.22 | 38.80 | 0.57 | 0.564 |
| 0.22 | 42.98 | 42.84 | 0.63 | 0.624 |
| 0.30 | 48.85 | 48.47 | 0.70 | 0.693 |
| 0.37 | 52.78 | 52.77 | 0.73 | 0.738 |
| 0.45 | 56.65 | 57.22 | 0.77 | 0.780 |
| 0.53 | 60.61 | 61.36 | 0.81 | 0.817 |
| 0.60 | 63.99 | 64.84 | 0.84 | 0.846 |
| 0.68 | 67.92 | 68.74 | 0.87 | 0.877 |
| 0.73 | 70.23 | 71.16 | 0.89 | 0.896 |
| 0.78 | 72.83 | 73.59 | 0.91 | 0.915 |

   rms δP = 0.64 kPa (max 0.93 kPa, about 1.5%); rms δ$y_1$ = 0.007 (max 0.010).

3. **P–x–y diagram:** the P–$x_1$ (bubble) curve and P–$y_1$ (dew) curve from the correlation, with the data points:

![P-x-y diagram for methanol/water at 60 °C: data points and Margules bubble and dew curves, no azeotrope](fig/2014-15-Q5b-sol.svg)

4. **Interpretation:**
   - The correlation follows the data within the scatter of the measurements, with a slight systematic over-prediction of P in the methanol-rich range ($x_1$ > 0.45).
   - The bubble curve lies above the straight Raoult's-law line (positive deviations), but **no azeotrope** forms: $\alpha_{12} = \gamma_1P_1^{sat}/(\gamma_2P_2^{sat})$ runs from $4.24 \times 1.93 = 8.2$ at $x_1$ = 0 to $4.24/1.67 = 2.5$ at $x_1$ = 1 and stays above 1.

**Result:** the Margules curves reproduce P within about 1 kPa and $y_1$ within 0.01; zeotropic system with a wide two-phase loop.`,
          answer: String.raw`With A₁₂ = 0.659, A₂₁ = 0.514: P = Σxᵢγᵢ Pᵢˢᵃᵗ and y₁ = x₁γ₁P₁ˢᵃᵗ/P reproduce the data with rms δP = 0.64 kPa (max 0.93) and rms δy₁ = 0.007; no azeotrope (α₁₂ from 8.2 to 2.5).` }
      ] },
    { id: "2014-15-Q6", q: 6, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q6a", label: "(a)", marks: "10",
          topic: "solution-applications", sub: "Henry's law for the solute implies the Lewis/Randall rule for the solvent (Gibbs–Duhem)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Prove that Henry's law is related to the Lewis/Randall rule through the Gibbs-Duhen equation.`,
          solution: String.raw`**Statements** (binary at constant T, P):
- **Henry's law** for species 1 as $x_1 \to 0$: $\hat f_1 = x_1\mathcal H_1$, where $\mathcal H_1 = \lim_{x_1\to0}\hat f_1/x_1$ is Henry's constant.
- **Lewis/Randall rule** for species 2 as $x_2 \to 1$: $\hat f_2 = x_2f_2$, where $f_2$ is the fugacity of pure 2.

1. **Gibbs–Duhem in fugacities.** At constant T and P, $\sum x_i\,d\bar G_i = 0$ and $d\bar G_i = d\mu_i = RT\,d\ln\hat f_i$, so
$$x_1\,d\ln\hat f_1 + x_2\,d\ln\hat f_2 = 0 \quad\Rightarrow\quad x_1\frac{d\ln\hat f_1}{dx_1} + x_2\frac{d\ln\hat f_2}{dx_1} = 0$$
   Since $dx_2 = -dx_1$:
$$x_1\frac{d\ln\hat f_1}{dx_1} = x_2\frac{d\ln\hat f_2}{dx_2}$$

2. **Apply Henry's law at the dilute end of species 1.** As $x_1 \to 0$, $\hat f_1 = x_1\mathcal H_1$, so $\ln\hat f_1 = \ln x_1 + \ln\mathcal H_1$ and
$$\lim_{x_1\to0}x_1\frac{d\ln\hat f_1}{dx_1} = x_1 \cdot \frac{1}{x_1} = 1$$

3. **Transfer to species 2.** The same limit is $x_2 \to 1$, so
$$\lim_{x_2\to1}x_2\frac{d\ln\hat f_2}{dx_2} = 1 \quad\Rightarrow\quad \lim_{x_2\to1}\frac{d\hat f_2/dx_2}{\hat f_2} = 1$$
   At $x_2$ = 1, $\hat f_2 = f_2$, therefore
$$\left(\frac{d\hat f_2}{dx_2}\right)_{x_2=1} = f_2$$

4. **Interpretation.** The tangent to the $\hat f_2$–$x_2$ curve at $x_2$ = 1 is the straight line through the origin with slope $f_2$, i.e. $\hat f_2 = x_2f_2$. **This is the Lewis/Randall rule**, valid in the limit $x_2 \to 1$. So whenever the solute obeys Henry's law, the Gibbs–Duhem equation forces the solvent to obey the Lewis/Randall rule over the same composition range. The reverse argument also holds.

5. **In activity-coefficient form:** $\ln\gamma_1 \to \ln\gamma_1^\infty$ (finite, so $\mathcal H_1 = \gamma_1^\infty f_1$) as $x_1 \to 0$ requires $\ln\gamma_2 \to 0$ with zero slope as $x_2 \to 1$. This is why dilute-solution VLE uses $y_1P = x_1\mathcal H_1$ for the solute together with $y_2P = x_2P_2^{sat}$ for the solvent.`,
          answer: String.raw`Gibbs–Duhem: x₁ d ln f̂₁/dx₁ = x₂ d ln f̂₂/dx₂. Henry's law f̂₁ = x₁𝓗₁ (x₁ → 0) makes the left side 1, so (df̂₂/dx₂)/f̂₂ → 1 at x₂ = 1, i.e. df̂₂/dx₂ = f₂ and f̂₂ = x₂f₂ (Lewis/Randall) as x₂ → 1.` },
        { id: "2014-15-Q6b", label: "(b)", marks: "10",
          topic: "reaction-equilibria", sub: "Liquid-phase reactions: relation of K to composition",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`For liquid-phase reactions, find the relation of equilibrium constants to composition.`,
          solution: String.raw`1. **Equilibrium constant** (SVNA eq. 13.11), with standard states at the system T and $P^\circ$ = 1 bar:
$$\prod_i\left(\frac{\hat f_i}{f_i^\circ}\right)^{\nu_i} = K = \exp\left(\frac{-\Delta G^\circ}{RT}\right)$$

2. **Liquid phase.** Write $\hat f_i = \gamma_ix_if_i$, where $f_i$ is the fugacity of pure liquid i at T and P. The usual standard state is the **pure liquid at T and 1 bar**, with fugacity $f_i^\circ$:
$$\frac{\hat f_i}{f_i^\circ} = \gamma_ix_i\frac{f_i}{f_i^\circ}$$

3. **Pressure correction (Poynting).** At constant T, $d\ln f_i = V_i\,dP/RT$. For an incompressible liquid,
$$\ln\frac{f_i}{f_i^\circ} = \frac{V_i(P - P^\circ)}{RT}$$

4. **General relation:**
$$\prod_i(x_i\gamma_i)^{\nu_i} = K\exp\left[\frac{-(P - P^\circ)}{RT}\sum_i\nu_iV_i\right]$$

5. **Simplifications:**
   - At low or moderate pressure the exponential is ≈ 1, because $\sum\nu_iV_i$ is small. Then $\prod_i(x_i\gamma_i)^{\nu_i} = K$.
   - For an **ideal solution**, $\gamma_i$ = 1:
$$\boxed{\prod_i x_i^{\nu_i} = K}$$
   - For a solute i at low concentration, use a **Henry's-law (molality) standard state**, $\hat f_i/f_i^\circ = \gamma_i^\ast m_i$ in a hypothetical ideal 1-molal solution. With $\gamma_i^\ast \to 1$ this gives $\prod_i m_i^{\nu_i} = K$ for the dissolved species, combined with $x_i$ for the solvent (≈ 1).

Unlike gas-phase reactions, pressure has almost no effect on liquid-phase equilibrium compositions.`,
          answer: String.raw`Πᵢ(f̂ᵢ/fᵢ°)^νᵢ = K with f̂ᵢ = γᵢxᵢfᵢ and fᵢ/fᵢ° = exp[Vᵢ(P − P°)/RT] ⇒ Π(xᵢγᵢ)^νᵢ = K exp[−(P − P°)ΣνᵢVᵢ/RT] ≈ K; ideal solution Π xᵢ^νᵢ = K (dilute solutes: molality standard state, Π mᵢ^νᵢ = K).` },
        { id: "2014-15-Q6c", label: "(c)", marks: "15",
          topic: "reaction-equilibria", sub: "Ammonia synthesis from 0.5 mol N₂ and 1.5 mol H₂: equilibrium extent with ideal gases",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`For the ammonia synthesis reaction written as

$$\frac12\mathrm{N_2(g)} + \frac32\mathrm{H_2(g)} \rightarrow \mathrm{NH_3(g)}$$

with 0.5 mol N₂ and 1.5 mol H₂ as the initial amounts of reactants and with the assumption that the equilibrium mixture is an ideal gas, show that

$$\varepsilon_e = 1 - \left(1 + 1.299K\frac{P}{P_0}\right)^{-1/2}$$`,
          solution: String.raw`**Given:** $\tfrac12$N₂ + $\tfrac32$H₂ → NH₃; initially 0.5 mol N₂ and 1.5 mol H₂; ideal-gas equilibrium mixture. Here $\nu = 1 - \tfrac12 - \tfrac32 = -1$.

1. **Mole numbers as functions of ε** ($n_i = n_{i0} + \nu_i\varepsilon$):
$$n_{N_2} = 0.5 - 0.5\varepsilon = 0.5(1 - \varepsilon), \qquad n_{H_2} = 1.5(1 - \varepsilon), \qquad n_{NH_3} = \varepsilon, \qquad n = 2 - \varepsilon$$

2. **Ideal-gas equilibrium relation:** $\prod_iy_i^{\nu_i} = (P/P^\circ)^{-\nu}K = (P/P^\circ)K$:
$$\frac{y_{NH_3}}{y_{N_2}^{1/2}\,y_{H_2}^{3/2}} = \frac{n_{NH_3}\,n}{n_{N_2}^{1/2}\,n_{H_2}^{3/2}} = \frac{\varepsilon(2 - \varepsilon)}{(0.5)^{1/2}(1.5)^{3/2}(1 - \varepsilon)^2} = K\frac{P}{P^\circ}$$
   The total moles $n^{1/2 + 3/2 - 1} = n^1$ appear in the numerator.

3. **Numerical constant:** $(0.5)^{1/2}(1.5)^{3/2} = 0.7071 \times 1.8371 = 1.299$, so
$$\frac{\varepsilon(2 - \varepsilon)}{(1 - \varepsilon)^2} = 1.299\,K\frac{P}{P^\circ}$$

4. **Solve for ε.** Note $\varepsilon(2 - \varepsilon) = 1 - (1 - \varepsilon)^2$:
$$\frac{1}{(1 - \varepsilon)^2} - 1 = 1.299K\frac{P}{P^\circ} \;\Rightarrow\; (1 - \varepsilon)^2 = \left(1 + 1.299K\frac{P}{P^\circ}\right)^{-1}$$
$$\boxed{\varepsilon_e = 1 - \left(1 + 1.299K\frac{P}{P^\circ}\right)^{-1/2}}$$
   The positive root is taken, since $0 \le \varepsilon_e < 1$.

**Check:** ε rises towards 1 as K or P rises, consistent with ν < 0 (fewer moles of product) and the exothermic reaction (larger K at lower T).`,
          answer: String.raw`n_N₂ = 0.5(1 − ε), n_H₂ = 1.5(1 − ε), n_NH₃ = ε, n = 2 − ε; ε(2 − ε)/[0.5^½·1.5^{3/2}(1 − ε)²] = K P/P° with 0.5^½·1.5^{3/2} = 1.299; since ε(2 − ε) = 1 − (1 − ε)², ε_e = 1 − (1 + 1.299K P/P°)^{−1/2}.` }
      ] },
    { id: "2014-15-Q7", q: 7, section: "B",
      stem: String.raw`Hydrogen gas is produced by the reaction of steam with 'water gas', an equimolar mixture of H₂ and CO obtained by the reaction of steam with coal. A stream of 'water gas' mixed with steam is passed over a catalyst to convert CO to CO₂ by reaction:

$$\mathrm{H_2O(g) + CO(g) \rightarrow H_2(g) + CO_2(g)}$$

Subsequently unreacted water is condensed and carbon dioxide is absorbed, leaving a product that is mostly hydrogen. The equilibrium conditions are 1 bar and 800°K.`,
      parts: [
        { id: "2014-15-Q7a", label: "(a)", marks: "22",
          topic: "reaction-equilibria", sub: "Water-gas shift at 800 K, 1 bar: steam-to-water-gas ratio for 2 mol% CO in product",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`Determine the molar ratio of steam to 'water gas' (H₂ + CO) required to produce a product gas containing only 2 mole % CO after cooling to 20°C, where the unreacted H₂O has been virtually all condensed.`,
          solution: String.raw`**Given:** H₂O + CO → H₂ + CO₂ at 800 K and 1 bar. Basis: 1 mol H₂ + 1 mol CO (2 mol water gas) with n mol steam. Product gas after condensing the water must contain 2 mol% CO.

**Assumptions:** ideal gases; SVNA App. C data (Tables C.1 and C.4); all water removed on cooling to 20 °C; CO₂ still present in the analysed gas (it is absorbed later).

1. **K at 800 K** (SVNA eq. 13.21, $K = K_0K_1K_2$):
$$\Delta H^\circ_{298} = -393\,509 - (-110\,525 - 241\,818) = -41\,166\ \mathrm{J/mol}$$
$$\Delta G^\circ_{298} = -394\,359 - (-137\,169 - 228\,572) = -28\,618\ \mathrm{J/mol}$$
   Heat-capacity differences: ΔA = 5.457 + 3.249 − 3.376 − 3.470 = 1.860; ΔB = 0.540 × 10⁻³; ΔC = 0; ΔD = −1.164 × 10⁵.
$$K_0 = e^{28\,618/(8.314 \times 298.15)} = 1.033 \times 10^5, \qquad K_1 = \exp\left[\frac{-41\,166}{8.314 \times 298.15}\left(1 - \frac{298.15}{800}\right)\right] = 2.989 \times 10^{-5}$$
$$\int_{298.15}^{800}\frac{\Delta C_P^\circ}{R}\frac{dT}{T} = 1.0011, \quad \frac{1}{T}\int_{298.15}^{800}\frac{\Delta C_P^\circ}{R}dT = \frac{539.7}{800} = 0.6747, \quad K_2 = e^{1.0011 - 0.6747} = 1.386$$
$$K = 1.033 \times 10^5 \times 2.989 \times 10^{-5} \times 1.386 = 4.28$$

2. **Equilibrium amounts** in terms of the extent ε:

| Species | CO | H₂O | H₂ | CO₂ | Total |
|---|---|---|---|---|---|
| mol | 1 − ε | n − ε | 1 + ε | ε | 2 + n |

   Δν = 0, so P cancels and
$$K = \frac{(1 + \varepsilon)\varepsilon}{(1 - \varepsilon)(n - \varepsilon)}$$

3. **Product specification.** The dry gas is CO + H₂ + CO₂ = 2 + ε mol:
$$\frac{1 - \varepsilon}{2 + \varepsilon} = 0.02 \;\Rightarrow\; \varepsilon = \frac{0.96}{1.02} = 0.9412$$

4. **Steam required:**
$$n - \varepsilon = \frac{(1 + \varepsilon)\varepsilon}{K(1 - \varepsilon)} = \frac{1.9412 \times 0.9412}{4.28 \times 0.0588} = 7.26 \;\Rightarrow\; n = 8.20\ \mathrm{mol}$$

5. **Ratio:**
$$\frac{\text{steam}}{\text{water gas}} = \frac{8.20}{2} = 4.10$$
   Reactor exit composition: y(CO) = 0.0058, y(CO₂) = 0.0923, y(H₂) = 0.1903, y(H₂O) = 0.7117.

**Result:** about **4.1 mol steam per mol of water gas** (K = 4.28 at 800 K).`,
          answer: String.raw`K(800 K) = K₀K₁K₂ = 1.033×10⁵ × 2.989×10⁻⁵ × 1.386 = 4.28; dry gas (1 − ε)/(2 + ε) = 0.02 ⇒ ε = 0.941; n − ε = (1 + ε)ε/[K(1 − ε)] = 7.26 ⇒ n = 8.20 mol steam per 2 mol water gas ⇒ ratio ≈ 4.1.` },
        { id: "2014-15-Q7b", label: "(b)", marks: "13",
          topic: "reaction-equilibria", sub: "Can solid carbon form by 2CO → CO₂ + C(s) at the shift-reactor conditions?",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`What happens if solid carbon will form at the equilibrium conditions by the reaction:

$$\mathrm{2CO(g) \rightarrow CO_2(g) + C(s)}$$`,
          solution: String.raw`**Question:** can carbon deposit by the Boudouard reaction 2CO(g) → CO₂(g) + C(s) at the equilibrium conditions of part (a), 800 K and 1 bar?

**Assumptions:** ideal gases; carbon as pure graphite, activity = 1; SVNA data (C(s): ΔA = 1.771, ΔB = 0.771 × 10⁻³, ΔD = −0.867 × 10⁵).

1. **K at 800 K:**
$$\Delta H^\circ_{298} = -393\,509 - 2(-110\,525) = -172\,459\ \mathrm{J/mol}, \qquad \Delta G^\circ_{298} = -394\,359 - 2(-137\,169) = -120\,021\ \mathrm{J/mol}$$
   ΔA = 5.457 + 1.771 − 2(3.376) = 0.476; ΔB = 0.702 × 10⁻³; ΔD = −1.962 × 10⁵.
$$K_0 = 1.066 \times 10^{21}, \qquad K_1 = \exp\left[\frac{-172\,459}{8.314 \times 298.15}\left(1 - \frac{298.15}{800}\right)\right] = 1.111 \times 10^{-19}, \qquad K_2 = e^{-0.1282 - 0.0244} = 0.859$$
$$K = 1.066 \times 10^{21} \times 1.111 \times 10^{-19} \times 0.859 = 102$$

2. **Equilibrium expression.** Carbon is a pure solid with $a_C$ = 1, and ν(gas) = 1 − 2 = −1:
$$K = \frac{a_C\,(y_{CO_2}P/P^\circ)}{(y_{CO}P/P^\circ)^2} = \frac{y_{CO_2}}{y_{CO}^2}\frac{P^\circ}{P}$$

3. **Reaction quotient of the shift-reactor gas** from part (a), with $y_{CO}$ = 0.00577, $y_{CO_2}$ = 0.0923 and P = 1 bar:
$$Q = \frac{0.0923}{(0.00577)^2} = 2.77 \times 10^3$$

4. **Test.**
   - Carbon can form only if Q < K, i.e. if $\Delta G = RT\ln(Q/K) < 0$ for the forward reaction.
   - Here $Q/K = 2775/102 = 27$, so $\Delta G = 8.314(800)\ln 27 = +21.9$ kJ/mol > 0.
   - The reaction would go **backwards**: any carbon present would be gasified by CO₂, so **no carbon deposits** at the equilibrium conditions.
   - The reason is the large excess of steam: it converts most of the CO, leaving $y_{CO}$ very small. Carbon formation would also be suppressed by the steam–carbon reaction C + H₂O → CO + H₂.

5. **Remark.** At the reactor inlet there is no CO₂ (Q = 0 < K), so carbon deposition is thermodynamically possible there until the shift reaction has produced CO₂. That is why a large steam ratio and an active shift catalyst are used. If carbon did form at equilibrium, the system would have to satisfy both reactions simultaneously, with $y_{CO_2}/y_{CO}^2 = K\,P/P^\circ$ = 102. That would fix a CO content far higher than the 2 mol% specified.

**Result:** K(800 K) ≈ 102 but Q ≈ 2.8 × 10³ > K, so **solid carbon does not form**; the Boudouard reaction would run in reverse.`,
          answer: String.raw`K(800 K) for 2CO → CO₂ + C = 102; at the part (a) equilibrium Q = y_CO₂/y_CO² (P°/P) = 0.0923/0.00577² = 2.8×10³ > K (ΔG = +21.9 kJ/mol) ⇒ no carbon deposits (excess steam keeps CO low); deposition is possible only near the inlet where CO₂ ≈ 0.` }
      ] },
    { id: "2014-15-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2014-15-Q8a", label: "(a)", marks: "10",
          topic: "solution-applications", sub: "Gamma/phi formulation: equations for dew-point and bubble-point calculations",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`By using Gamma/Phi formulation of VLE, derive necessary equations for Dew Point and Bubble Point calculations.`,
          solution: String.raw`1. **Equilibrium criterion.** For each species, $\hat f_i^v = \hat f_i^l$. Write the vapour fugacity with a fugacity coefficient and the liquid fugacity with an activity coefficient:
$$\hat f_i^v = y_i\hat\phi_iP, \qquad \hat f_i^l = x_i\gamma_if_i \quad\Rightarrow\quad y_i\hat\phi_iP = x_i\gamma_if_i$$

2. **Pure-liquid fugacity** at T and P: start at saturation ($f_i^{sat} = \phi_i^{sat}P_i^{sat}$) and compress the liquid (Poynting factor):
$$f_i = \phi_i^{sat}P_i^{sat}\exp\frac{V_i^l(P - P_i^{sat})}{RT}$$

3. **Gamma/phi equation.** Substitute and collect the vapour-side corrections into one factor $\Phi_i$:
$$\boxed{y_i\Phi_iP = x_i\gamma_iP_i^{sat}}, \qquad \Phi_i = \frac{\hat\phi_i}{\phi_i^{sat}}\exp\left[\frac{-V_i^l(P - P_i^{sat})}{RT}\right]$$
   At low pressure $\Phi_i \approx 1$ and this becomes modified Raoult's law.
   The supporting relations are:
   - $\hat\phi_i$ and $\phi_i^{sat}$ from the virial equation: $\ln\hat\phi_k = \dfrac{P}{RT}\left[B_{kk} + \tfrac12\sum_i\sum_jy_iy_j(2\delta_{ik} - \delta_{ij})\right]$ and $\ln\phi_i^{sat} = B_{ii}P_i^{sat}/RT$.
   - $\gamma_i$ from a $G^E$ model (Margules, van Laar, Wilson, NRTL) at T and $\{x_i\}$.
   - $P_i^{sat}$ from Antoine: $\ln P_i^{sat} = A_i - B_i/(T + C_i)$.

4. **Bubble-point equations** (liquid composition known). Sum $y_i = x_i\gamma_iP_i^{sat}/(\Phi_iP)$ over i and set $\sum y_i = 1$:
$$\text{BUBL P:}\quad P = \sum_i\frac{x_i\gamma_iP_i^{sat}}{\Phi_i}, \qquad y_i = \frac{x_i\gamma_iP_i^{sat}}{\Phi_iP}$$
   For BUBL T (P known), factor out the vapour pressure of a reference species j:
$$P_j^{sat} = \frac{P}{\sum_i(x_i\gamma_i/\Phi_i)(P_i^{sat}/P_j^{sat})}, \qquad T = \frac{B_j}{A_j - \ln P_j^{sat}} - C_j$$
   The ratios $P_i^{sat}/P_j^{sat}$ depend only weakly on T, which makes this iteration converge quickly.

5. **Dew-point equations** (vapour composition known). Sum $x_i = y_i\Phi_iP/(\gamma_iP_i^{sat})$ over i and set $\sum x_i = 1$:
$$\text{DEW P:}\quad P = \frac{1}{\sum_i y_i\Phi_i/(\gamma_iP_i^{sat})}, \qquad x_i = \frac{y_i\Phi_iP}{\gamma_iP_i^{sat}}$$
$$\text{DEW T:}\quad P_j^{sat} = P\sum_i\frac{y_i\Phi_i}{\gamma_i}\frac{P_j^{sat}}{P_i^{sat}}$$
   In dew calculations $\gamma_i$ depends on the unknown x, so an inner loop on γ is needed. In bubble calculations $\Phi_i$ depends on the unknown y. Both need iteration (see part (b)).`,
          answer: String.raw`yᵢΦᵢP = xᵢγᵢPᵢˢᵃᵗ with Φᵢ = (φ̂ᵢ/φᵢˢᵃᵗ)exp[−Vᵢˡ(P − Pᵢˢᵃᵗ)/RT]. Bubble (Σyᵢ = 1): P = Σxᵢγᵢ Pᵢˢᵃᵗ/Φᵢ, yᵢ = xᵢγᵢPᵢˢᵃᵗ/(ΦᵢP); Pⱼˢᵃᵗ = P/Σ(xᵢγᵢ/Φᵢ)(Pᵢˢᵃᵗ/Pⱼˢᵃᵗ). Dew (Σxᵢ = 1): P = 1/Σ(yᵢΦᵢ/γᵢPᵢˢᵃᵗ), xᵢ = yᵢΦᵢP/(γᵢPᵢˢᵃᵗ); Pⱼˢᵃᵗ = PΣ(yᵢΦᵢ/γᵢ)(Pⱼˢᵃᵗ/Pᵢˢᵃᵗ).` },
        { id: "2014-15-Q8b", label: "(b)", marks: "15",
          topic: "solution-applications", sub: "Block diagram for the DEW P calculation (gamma/phi)",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Write a block diagram for the calculation of Dew P.`,
          solution: String.raw`**Problem:** given T and the vapour composition $\{y_i\}$, find P and $\{x_i\}$ (SVNA §14.1, Fig. 14.2).

### Working equations
- $y_i\Phi_iP = x_i\gamma_iP_i^{sat}$, so with $\sum x_i = 1$:
$$P = \frac{1}{\sum_i y_i\Phi_i/(\gamma_iP_i^{sat})}, \qquad x_i = \frac{y_i\Phi_iP}{\gamma_iP_i^{sat}}$$
- $\Phi_i = \dfrac{\hat\phi_i}{\phi_i^{sat}}\exp\left[\dfrac{-V_i^l(P - P_i^{sat})}{RT}\right]$, with $\hat\phi_i$ from the virial equation at T, P and $\{y_i\}$, and $\ln\phi_i^{sat} = B_{ii}P_i^{sat}/RT$.
- $P_i^{sat}$ from Antoine at the given T (fixed); $\gamma_i$ from a $G^E$ model at T and $\{x_i\}$, which are unknown, so γ must be iterated.

### Block diagram
![DEW P flowchart with the gamma–phi formulation: inner loop on gamma, outer loop on P](fig/2014-15-Q8b-sketch.svg)

1. **Read** T, $\{y_i\}$ and the constants (Antoine, $G^E$ parameters, $B_{ij}$ or $T_c, P_c, \omega$ for them, $V_i^l$).
2. **Initialize:** all $\Phi_i$ = 1 and all $\gamma_i$ = 1. Evaluate $P_i^{sat}$ at T.
3. **First estimate** $P = 1/\sum(y_i\Phi_i/\gamma_iP_i^{sat})$, i.e. the ideal (Raoult) dew pressure.
4. **Calculate** $x_i = y_i\Phi_iP/(\gamma_iP_i^{sat})$ and evaluate $\gamma_i$ at these x.
5. **Evaluate** $\hat\phi_i$ and $\phi_i^{sat}$, then $\Phi_i$; **recalculate** P.
6. **Inner loop:** $x_i = y_i\Phi_iP/(\gamma_iP_i^{sat})$. **Normalize** ($x_i \leftarrow x_i/\sum x_i$, since the γ's are not yet consistent) and re-evaluate $\gamma_i$. If any $|\delta\gamma_i| > \varepsilon$, repeat step 6.
7. **Outer loop:** recalculate $P = 1/\sum(y_i\Phi_i/\gamma_iP_i^{sat})$. If $|\delta P| > \varepsilon$, return to step 5 (new $\Phi_i$).
8. **Print** P and $\{x_i\}$.

At low pressure $\Phi_i$ = 1 throughout and only the γ loop remains (modified Raoult's law).`,
          answer: String.raw`Read T, {yᵢ}; Φᵢ = γᵢ = 1; Pᵢˢᵃᵗ(T); P = 1/Σ(yᵢΦᵢ/γᵢPᵢˢᵃᵗ); xᵢ = yᵢΦᵢP/γᵢPᵢˢᵃᵗ, γᵢ(x); Φᵢ (virial) → P; inner loop: xᵢ, normalize, γᵢ until δγ < ε; outer loop: P until δP < ε; print P, {xᵢ}.` },
        { id: "2014-15-Q8c", label: "(c)", marks: "10",
          topic: "solution-applications", sub: "H₂SO₄ and water at 27 °C mixed adiabatically to 40 wt%: final temperature from the H–x chart",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`If pure liquid H₂SO₄ at 27°C is added adiabatically to pure liquid water at 27°C to form a 40 mass % solution, what is the final temperature of the solution?

Figure 12.17 (attached to the paper): H–x diagram for H₂SO₄/H₂O, H in kJ/(kg solution) from −500 to 700 against mass % H₂SO₄ (0–100), with isotherms from −20 °C to 140 °C, the boiling line, the freezing lines and the solid regions. Datum: enthalpy of pure liquid H₂O at 0°C = 0 and pure liquid H₂SO₄ at 25°C = 0.`,
          solution: String.raw`**Given:** pure H₂SO₄(l) and pure H₂O(l), both at 27 °C, mixed adiabatically to 40 wt% H₂SO₄. Chart datum: H = 0 for liquid water at 0 °C and liquid H₂SO₄ at 25 °C.

**Find:** the final temperature.

**Assumptions:** adiabatic, constant-pressure (1 atm) mixing, so $\Delta H$ = 0; water enthalpy from the steam tables; $c_P$ of liquid H₂SO₄ ≈ 1.40 kJ/(kg K).

1. **Energy balance.** Basis 1 kg of solution: 0.40 kg H₂SO₄ + 0.60 kg H₂O. For adiabatic mixing, the enthalpy of the solution equals that of the feeds (all on the chart datum):
$$H_{soln} = 0.40\,H_{H_2SO_4} + 0.60\,H_{H_2O}$$

2. **Feed enthalpies on the chart datum.**
   - Water at 27 °C (steam tables, $H^l$ relative to liquid water at 0 °C): $H_{H_2O}$ = 113.2 kJ/kg. This is the value at which the 27 °C isotherm meets x = 0 on the chart.
   - H₂SO₄ at 27 °C: $H_{H_2SO_4} = c_P(27 - 25) = 1.40 \times 2 = 2.8$ kJ/kg.
$$H_{soln} = 0.40(2.8) + 0.60(113.2) = 1.1 + 67.9 = 69.0\ \mathrm{kJ/kg}$$
   Graphically this is the lever rule: the mixture point lies on the straight line joining (0%, 113.2) and (100%, 2.8), at 40%.

3. **Locate (40 wt%, 69 kJ/kg) on Fig. 12.17.** Reading up the 40% line:
   - The 25 °C isotherm is at about −185 kJ/kg (strongly negative: a large heat of mixing).
   - The 100 °C isotherm is at about +15 to +25 kJ/kg.
   - The **boiling line** crosses 40% at about 50–60 kJ/kg.
   The point H = 69 kJ/kg lies **at, or just above, the boiling line**. Within chart accuracy (±10 kJ/kg) it is on the line.

4. **Final state.** The solution reaches its **boiling point**. Interpolating the isotherms (about 26 kJ/kg per 10 °C at 40%) between the 100 °C curve and the boiling line gives
$$T \approx 100 + \frac{55 - 20}{2.6} \approx 113\ ^\circ\mathrm{C}$$
   This is the normal boiling point of 40% H₂SO₄ (about 114 °C).
   - Any excess enthalpy above the boiling line flashes some water. At most $(69 - 50)/(2694 - 50) \approx 0.007$ kg of steam per kg of solution, using $H^v$ ≈ 2694 kJ/kg for saturated steam at about 113 °C. This is negligible.
   - Extrapolating the isotherms through H = 69 kJ/kg without noticing the boiling line would give about 120 °C, which cannot exist as a liquid at 1 atm.

5. **Why so hot:** the heat released by dissolving H₂SO₄ to 40% is about 250 kJ per kg of solution (the 25 °C isotherm lies about 250 kJ/kg below the line joining the pure components). The specific heat of the solution is only about 2.6 kJ/(kg K), so the temperature rises by about 90 K. In practice acid is always added slowly to water with cooling.

**Result:** $H_{soln}$ ≈ 69 kJ/kg; the final solution is at its **boiling point, about 113 °C (≈ 110–115 °C)**, with at most a trace (< 1%) of water vaporized.`,
          answer: String.raw`H = 0.4(2.8) + 0.6(113.2) = 69 kJ/kg at 40 wt%; on Fig. 12.17 this point lies on (just above) the boiling line, so the solution reaches its boiling point ≈ 113 °C (110–115 °C), with < 1% of the water flashing.` }
      ] }
  ]
});
