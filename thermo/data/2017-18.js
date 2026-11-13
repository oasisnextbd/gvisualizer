QB.paper({
  year: "2017-18", date: "23/09/2018", marks: 210,
  rules: String.raw`L-3/T-1 B.Sc. Engineering Examinations 2017-2018, CHE 307 (Chemical Engineering Thermodynamics-II), 3 hours, 210 marks. Section A: four questions, answer any THREE. Section B: four questions, answer any THREE. The figures in the margin indicate full marks. A databooklet is to be supplied. Use separate scripts for each section. No charts or tables are attached to the paper.`,
  questions: [
    { id: "2017-18-Q1", q: 1, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q1a", label: "(a)", marks: "8",
          topic: "vle-intro", sub: "K-values in VLE: at least one above and one below 1.0",
          type: "theory", syllabus: "in", repeats: [],
          text: String.raw`If a system exhibits VLE, at least one of k-values must be greater than 1.0 and at least one must be less than 1.0. True/False – Explain your answer.`,
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
        { id: "2017-18-Q1b", label: "(b)", marks: "27",
          topic: "vle-intro", sub: "Modified Raoult, ln γ = 1.5x²: z₁ range at x₁ = 0.60, P and y₁, azeotrope",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A binary system of species 1 and 2 consists of vapor and liquid phase in equilibrium at temperature T, for which

$$\ln\gamma_1 = 1.5x_2^2 \qquad \ln\gamma_2 = 1.5x_1^2$$

$$P_1^{Sat} = 1.5\ bar \qquad P_2^{Sat} = 0.95\ bar$$

Assuming that modified Raoult's law is valid,

(i) For what range of values of the overall mole fraction $Z_1$ can this two phase system exist with a liquid mole fraction $x_1 = 0.60$?

(ii) What is the pressure P and vapor mole fraction $y_1$ within this range?

(iii) What are the pressure and composition of the azeotrope at temperature T?`,
          solution: String.raw`**Given:** $\ln\gamma_1 = 1.5x_2^2$, $\ln\gamma_2 = 1.5x_1^2$; $P_1^{sat}$ = 1.5 bar, $P_2^{sat}$ = 0.95 bar; liquid $x_1$ = 0.60.

**Find:** the range of $z_1$; P and $y_1$; the azeotrope.

**Assumptions:** modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$ (low pressure, ideal vapour).

1. **Degrees of freedom.** For two phases and two species, F = 2 − π + N = 2. With T and $x_1$ fixed, P and $y_1$ are fixed too, whatever the overall composition. Only the relative amounts of liquid and vapour depend on $z_1$.

2. **Activity coefficients at $x_1$ = 0.60:**
$$\gamma_1 = \exp[1.5(0.40)^2] = e^{0.24} = 1.2712, \qquad \gamma_2 = \exp[1.5(0.60)^2] = e^{0.54} = 1.7160$$

3. **(ii) Pressure and vapour composition** (bubble-point calculation):
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat} = 0.60(1.2712)(1.5) + 0.40(1.7160)(0.95) = 1.1441 + 0.6521 = 1.796\ \mathrm{bar}$$
$$y_1 = \frac{x_1\gamma_1P_1^{sat}}{P} = \frac{1.1441}{1.7962} = 0.637$$

4. **(i) Range of $z_1$.** Material balance on species 1 per mole of system, with vapour fraction $\mathcal V$:
$$z_1 = x_1(1 - \mathcal V) + y_1\mathcal V, \qquad 0 \le \mathcal V \le 1$$
   $\mathcal V = 0$ (saturated liquid) gives $z_1 = x_1$ = 0.60; $\mathcal V = 1$ (saturated vapour) gives $z_1 = y_1$ = 0.637. So two phases with $x_1$ = 0.60 exist for
$$\boxed{0.60 \le z_1 \le 0.637}$$

5. **(iii) Azeotrope test.** Relative volatility:
$$\alpha_{12} = \frac{y_1/x_1}{y_2/x_2} = \frac{\gamma_1P_1^{sat}}{\gamma_2P_2^{sat}} = \frac{P_1^{sat}}{P_2^{sat}}\exp[1.5(x_2^2 - x_1^2)] = \frac{P_1^{sat}}{P_2^{sat}}\exp[1.5(1 - 2x_1)]$$
$$(\alpha_{12})_{x_1 = 0} = \frac{1.5}{0.95}e^{1.5} = 7.076, \qquad (\alpha_{12})_{x_1 = 1} = \frac{1.5}{0.95}e^{-1.5} = 0.352$$
   $\alpha_{12}$ is continuous and passes from above 1 to below 1, so it equals 1 somewhere: **an azeotrope exists**.

6. **Azeotrope composition** from $\alpha_{12} = 1$:
$$1.5(1 - 2x_1^{az}) = \ln\frac{P_2^{sat}}{P_1^{sat}} = \ln\frac{0.95}{1.5} = -0.4568 \;\Rightarrow\; x_1^{az} = \frac12\left(1 + \frac{0.4568}{1.5}\right) = 0.652$$

7. **Azeotrope pressure.** At the azeotrope $y_1 = x_1$, so $P = \gamma_1P_1^{sat} = \gamma_2P_2^{sat}$:
$$\gamma_1^{az} = \exp[1.5(0.3477)^2] = 1.1989, \qquad P^{az} = 1.1989 \times 1.5 = 1.798\ \mathrm{bar}$$
   Check:
$$\gamma_2^{az}P_2^{sat} = \exp[1.5(0.6523)^2](0.95) = 1.8930 \times 0.95 = 1.798\ \mathrm{bar} \quad\checkmark$$
   This is a **maximum-pressure azeotrope** (positive deviations, A > 0). Note that $x_1$ = 0.60 lies just to its left, which is why $y_1$ (0.637) is only slightly larger than $x_1$ and P (1.796 bar) is very close to $P^{az}$.

**Result:** (i) $0.60 \le z_1 \le 0.637$; (ii) P = 1.796 bar, $y_1$ = 0.637; (iii) azeotrope at $x_1 = y_1$ = 0.652, P = 1.798 bar.`,
          answer: String.raw`γ₁ = 1.2712, γ₂ = 1.7160 at x₁ = 0.6 ⇒ P = 1.796 bar, y₁ = 0.637; two phases with x₁ = 0.60 for 0.60 ≤ z₁ ≤ 0.637. α₁₂ goes from 7.08 (x₁ = 0) to 0.352 (x₁ = 1) ⇒ azeotrope at x₁ = y₁ = 0.652, P = 1.798 bar (maximum-pressure).` }
      ] },
    { id: "2017-18-Q2", q: 2, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q2a", label: "(a)", marks: "20",
          topic: "vle-intro", sub: "Raoult's-law P,T-flash of acetone, acetonitrile and nitromethane at 80 °C and 120 kPa",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`The system acetone (1)/acetonitrile (2)/nitromethane (3) at 80°C and 120 kPa has the overall composition, $z_1 = 0.45$, $z_2 = 0.35$, $z_3 = 0.20$. Assuming that Raoult's law is appropriate to this system, determine L, V, $\{x_i\}$ and $\{y_i\}$. The vapor pressures of the pure species at 80°C are

$$P_1^{Sat} = 196 \quad P_2^{Sat} = 98 \quad\text{and}\quad P_3^{Sat} = 50\ \mathrm{kPa}$$`,
          solution: String.raw`**Given:** T = 80 °C, P = 120 kPa; $z$ = (0.45, 0.35, 0.20); $P^{sat}$ = (196, 98, 50) kPa.

**Find:** liquid and vapour fractions L, V (per mole of feed) and the phase compositions.

**Assumptions:** Raoult's law, $y_iP = x_iP_i^{sat}$ (ideal liquid solution, ideal-gas vapour). Basis: 1 mol of feed. This is the system of SVNA's Raoult's-law flash example, here at 120 kPa.

1. **Check that two phases exist.** Bubble pressure (x = z) and dew pressure (y = z):
$$P_{bubl} = \sum z_iP_i^{sat} = 0.45(196) + 0.35(98) + 0.20(50) = 132.50\ \mathrm{kPa}$$
$$P_{dew} = \frac{1}{\sum z_i/P_i^{sat}} = \frac{1}{0.45/196 + 0.35/98 + 0.20/50} = 101.34\ \mathrm{kPa}$$
   $P_{dew}$ < 120 kPa < $P_{bubl}$, so the feed splits into liquid and vapour.

2. **K-values** (Raoult's law, $K_i = P_i^{sat}/P$):
$$K_1 = \frac{196}{120} = 1.6333, \qquad K_2 = \frac{98}{120} = 0.8167, \qquad K_3 = \frac{50}{120} = 0.4167$$

3. **Flash equation.** Material balance $z_i = x_iL + y_iV$ with L = 1 − V and $y_i = K_ix_i$ gives $x_i = z_i/[1 + V(K_i - 1)]$. Then $\sum y_i = 1$ (equivalently $\sum y_i - \sum x_i = 0$) gives the Rachford–Rice equation:
$$F(V) = \sum_i\frac{z_i(K_i - 1)}{1 + V(K_i - 1)} = 0$$

4. **Solve for V** by Newton's method, $V_{new} = V - F/F'$ with $F' = -\sum z_i(K_i - 1)^2/[1 + V(K_i - 1)]^2$:

| V | F(V) | F′(V) |
|---|---|---|
| 0.5000 | −0.01889 | −0.2540 |
| 0.4256 | −0.00031 | −0.2463 |
| 0.4244 | 0.00000 | −0.2462 |

$$V = 0.4244, \qquad L = 1 - V = 0.5756$$

5. **Phase compositions:** $x_i = z_i/D_i$ and $y_i = K_ix_i$, where $D_i = 1 + V(K_i - 1)$ (1 = acetone, 2 = acetonitrile, 3 = nitromethane):

| i | $z_i$ | $K_i$ | $D_i$ | $x_i$ | $y_i$ |
|---|---|---|---|---|---|
| 1 | 0.45 | 1.6333 | 1.2688 | 0.3547 | 0.5793 |
| 2 | 0.35 | 0.8167 | 0.9222 | 0.3795 | 0.3099 |
| 3 | 0.20 | 0.4167 | 0.7525 | 0.2658 | 0.1107 |
| Σ | 1.00 | | | 1.0000 | 0.9999 |

   Check species 1:
$$x_1L + y_1V = 0.3547(0.5756) + 0.5793(0.4244)$$
$$= 0.2042 + 0.2458 = 0.4500 \quad\checkmark$$

**Result:** per mole of feed, L = 0.576 mol liquid with x = (0.355, 0.380, 0.266) and V = 0.424 mol vapour with y = (0.579, 0.310, 0.111).`,
          answer: String.raw`P_dew = 101.3 < 120 < P_bubl = 132.5 kPa; K = 1.633, 0.817, 0.417; Rachford–Rice ⇒ V = 0.424, L = 0.576; x = (0.355, 0.380, 0.266), y = (0.579, 0.310, 0.111).` },
        { id: "2017-18-Q2b", label: "(b)", marks: "15",
          topic: "solution-theory", sub: "Gibbs–Duhem equation Σxᵢ dM̄ᵢ = 0 from nM = M(T, P, n₁, n₂, …)",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`If the thermodynamic properties of a homogenious phase are function of pressure, temperature and the number of moles of the individual species which comprises the phase;

$$nM = M(T, P, n_1, n_2 \ldots n_i \ldots)$$

Show that $\sum x_i\,d\bar M_i = 0$ at constant T & P.`,
          solution: String.raw`1. **Total differential** of nM. By definition the partial molar property is $\bar M_i \equiv [\partial(nM)/\partial n_i]_{T,P,n_j}$, so
$$d(nM) = \left[\frac{\partial(nM)}{\partial P}\right]_{T,n}dP + \left[\frac{\partial(nM)}{\partial T}\right]_{P,n}dT + \sum_i\bar M_i\,dn_i$$
   In the first two derivatives n (and so x) is constant, so they equal $n(\partial M/\partial P)_{T,x}$ and $n(\partial M/\partial T)_{P,x}$.

2. **Substitute** $n_i = x_in$, so $dn_i = x_i\,dn + n\,dx_i$, and $d(nM) = n\,dM + M\,dn$:
$$n\,dM + M\,dn = n\left(\frac{\partial M}{\partial P}\right)_{T,x}dP + n\left(\frac{\partial M}{\partial T}\right)_{P,x}dT + \sum_i\bar M_i(x_i\,dn + n\,dx_i)$$
   Collect the terms in n and in dn:
$$\left[dM - \left(\frac{\partial M}{\partial P}\right)_{T,x}dP - \left(\frac{\partial M}{\partial T}\right)_{P,x}dT - \sum_i\bar M_i\,dx_i\right]n + \left[M - \sum_i x_i\bar M_i\right]dn = 0$$

3. **n and dn are independent and arbitrary** (the system size can be anything and can change in any way), so each bracket is zero:
$$M = \sum_i x_i\bar M_i \qquad\text{(summability relation)}$$
$$dM = \left(\frac{\partial M}{\partial P}\right)_{T,x}dP + \left(\frac{\partial M}{\partial T}\right)_{P,x}dT + \sum_i\bar M_i\,dx_i$$

4. **Differentiate the summability relation:**
$$dM = \sum_i x_i\,d\bar M_i + \sum_i\bar M_i\,dx_i$$
   Equate this with the second result of step 3; the $\sum\bar M_i\,dx_i$ terms cancel:
$$\left(\frac{\partial M}{\partial P}\right)_{T,x}dP + \left(\frac{\partial M}{\partial T}\right)_{P,x}dT - \sum_i x_i\,d\bar M_i = 0 \qquad\text{(Gibbs–Duhem equation)}$$

5. **At constant T and P** (dT = dP = 0):
$$\boxed{\sum_i x_i\,d\bar M_i = 0}$$
   For a binary at constant T, P: $x_1\,d\bar M_1/dx_1 + x_2\,d\bar M_2/dx_1 = 0$. The partial properties are therefore not independent; given $\bar M_1(x_1)$, $\bar M_2$ follows by integration. This is the basis of thermodynamic consistency tests of VLE data.`,
          answer: String.raw`d(nM) = n(∂M/∂P)dP + n(∂M/∂T)dT + ΣM̄ᵢdnᵢ with nᵢ = xᵢn ⇒ M = ΣxᵢM̄ᵢ and dM = (∂M/∂P)dP + (∂M/∂T)dT + ΣM̄ᵢdxᵢ; differentiating M = ΣxᵢM̄ᵢ and subtracting gives (∂M/∂P)dP + (∂M/∂T)dT = Σxᵢ dM̄ᵢ, so Σxᵢ dM̄ᵢ = 0 at constant T, P.` }
      ] },
    { id: "2017-18-Q3", q: 3, section: "A",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q3a", label: "(a)", marks: "15",
          topic: "solution-theory", sub: "Partial enthalpies from H = x₁(a₁ + b₁x₁) + x₂(a₂ + b₂x₂) and Gibbs–Duhem",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The molar enthalpy of mixtures are represented by the following equation at constant T and P,

$$H = x_1(a_1 + b_1x_1) + x_2(a_2 + b_2x_2)$$

(i) Find the expression for partial molar enthalpy of species 1 & 2 at T and P.

(ii) Show that this expression satisfy the Gibbs/Duhem equation.

(iii) Show that $\left.\dfrac{d\bar H_1}{dx_1}\right|_{x_1 = 1} = \left.\dfrac{d\bar H_2}{dx_1}\right|_{x_1 = 0} = 0$.`,
          solution: String.raw`**Given:** $H = a_1x_1 + b_1x_1^2 + a_2x_2 + b_2x_2^2$ at fixed T, P ($a_i$, $b_i$ constants).

1. **Total enthalpy in mole numbers.** Multiply by $n = n_1 + n_2$ and use $x_i = n_i/n$:
$$nH = a_1n_1 + a_2n_2 + \frac{b_1n_1^2 + b_2n_2^2}{n}$$

2. **(i) Partial enthalpy of species 1**, $\bar H_1 = [\partial(nH)/\partial n_1]_{T,P,n_2}$ (note $\partial n/\partial n_1 = 1$):
$$\bar H_1 = a_1 + \frac{2b_1n_1}{n} - \frac{b_1n_1^2 + b_2n_2^2}{n^2} = a_1 + 2b_1x_1 - b_1x_1^2 - b_2x_2^2$$
   Since $2x_1 - x_1^2 = 1 - (1 - x_1)^2 = 1 - x_2^2$:
$$\boxed{\bar H_1 = a_1 + b_1 - (b_1 + b_2)x_2^2}$$
   By symmetry ($1 \leftrightarrow 2$):
$$\boxed{\bar H_2 = a_2 + b_2 - (b_1 + b_2)x_1^2}$$
   **Check (summability):**
$$x_1\bar H_1 + x_2\bar H_2 = a_1x_1 + a_2x_2 + b_1x_1 + b_2x_2 - (b_1 + b_2)x_1x_2(x_2 + x_1)$$
   Using $b_1x_1 - b_1x_1x_2 = b_1x_1^2$ and $b_2x_2 - b_2x_1x_2 = b_2x_2^2$, this equals $a_1x_1 + b_1x_1^2 + a_2x_2 + b_2x_2^2 = H$ ✓.

3. **(ii) Gibbs–Duhem** at constant T, P: $x_1\,d\bar H_1/dx_1 + x_2\,d\bar H_2/dx_1 = 0$. With $dx_2/dx_1 = -1$:
$$\frac{d\bar H_1}{dx_1} = -(b_1 + b_2)(2x_2)(-1) = 2(b_1 + b_2)x_2, \qquad \frac{d\bar H_2}{dx_1} = -2(b_1 + b_2)x_1$$
$$x_1\frac{d\bar H_1}{dx_1} + x_2\frac{d\bar H_2}{dx_1} = 2(b_1 + b_2)x_1x_2 - 2(b_1 + b_2)x_1x_2 = 0 \quad\checkmark$$

4. **(iii) Slopes at the pure-component ends:**
$$\left.\frac{d\bar H_1}{dx_1}\right|_{x_1 = 1} = 2(b_1 + b_2)(0) = 0, \qquad \left.\frac{d\bar H_2}{dx_1}\right|_{x_1 = 0} = -2(b_1 + b_2)(0) = 0 \quad\checkmark$$
   This is general: from Gibbs–Duhem, $d\bar H_1/dx_1 = -(x_2/x_1)\,d\bar H_2/dx_1$, which vanishes at $x_2 = 0$ provided $d\bar H_2/dx_1$ is finite. So each partial-property curve is horizontal where that species is pure.

5. **Limiting values** (for interpretation): pure species $H_1 = a_1 + b_1$, $H_2 = a_2 + b_2$ (= $\bar H_i$ at $x_i = 1$); infinite dilution $\bar H_1^\infty = a_1 - b_2$, $\bar H_2^\infty = a_2 - b_1$.

**Result:** $\bar H_1 = a_1 + b_1 - (b_1 + b_2)x_2^2$, $\bar H_2 = a_2 + b_2 - (b_1 + b_2)x_1^2$; they satisfy Gibbs–Duhem and have zero slope at $x_1 = 1$ and $x_1 = 0$ respectively.`,
          answer: String.raw`H̄₁ = a₁ + b₁ − (b₁ + b₂)x₂², H̄₂ = a₂ + b₂ − (b₁ + b₂)x₁²; dH̄₁/dx₁ = 2(b₁ + b₂)x₂, dH̄₂/dx₁ = −2(b₁ + b₂)x₁ ⇒ x₁dH̄₁/dx₁ + x₂dH̄₂/dx₁ = 0, and both slopes vanish at x₁ = 1 and x₁ = 0 respectively.` },
        { id: "2017-18-Q3b", label: "(b)", marks: "20",
          topic: "solution-applications", sub: "Limit of G^E/x₁x₂RT as x₁ → 0 equals ln γ₁^∞",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`The excess Gibbs Energy for binary system is given as, $\dfrac{G^E}{RT} = x_1\ln\gamma_1 + x_2\ln\gamma_2$.

Show that $\displaystyle\lim_{x_1 \to 0}\frac{G^E}{x_1x_2RT} = \ln\gamma_1^\infty$.`,
          solution: String.raw`1. **Divide the summability relation by $x_1x_2$:**
$$\frac{G^E}{x_1x_2RT} = \frac{x_1\ln\gamma_1 + x_2\ln\gamma_2}{x_1x_2} = \frac{\ln\gamma_1}{x_2} + \frac{\ln\gamma_2}{x_1}$$

2. **First term.** As $x_1 \to 0$, $x_2 \to 1$ and $\ln\gamma_1 \to \ln\gamma_1^\infty$, a finite value. So
$$\lim_{x_1 \to 0}\frac{\ln\gamma_1}{x_2} = \ln\gamma_1^\infty$$

3. **Second term** is of the form 0/0. Species 2 becomes pure, and with the Lewis–Randall standard state $\gamma_2 \to 1$, so $\ln\gamma_2 \to 0$; also $x_1 \to 0$. By L'Hôpital's rule:
$$\lim_{x_1 \to 0}\frac{\ln\gamma_2}{x_1} = \lim_{x_1 \to 0}\frac{d\ln\gamma_2}{dx_1}$$

4. **Gibbs–Duhem equation** in activity coefficients at constant T, P (from $\sum x_i\,d\bar M_i^E = 0$ with $\bar G_i^E/RT = \ln\gamma_i$):
$$x_1\frac{d\ln\gamma_1}{dx_1} + x_2\frac{d\ln\gamma_2}{dx_1} = 0 \;\Rightarrow\; \frac{d\ln\gamma_2}{dx_1} = -\frac{x_1}{x_2}\frac{d\ln\gamma_1}{dx_1}$$
   As $x_1 \to 0$, $x_1/x_2 \to 0$ while $d\ln\gamma_1/dx_1$ stays finite, so $d\ln\gamma_2/dx_1 \to 0$. The second term therefore vanishes.

5. **Hence**
$$\boxed{\lim_{x_1 \to 0}\frac{G^E}{x_1x_2RT} = \ln\gamma_1^\infty}$$
   In the same way, $\lim_{x_2 \to 0} G^E/(x_1x_2RT) = \ln\gamma_2^\infty$.

6. **Example and use.** For the two-parameter Margules equation, $G^E/x_1x_2RT = A_{21}x_1 + A_{12}x_2$, which tends to $A_{12}$ as $x_1 \to 0$; and directly $\ln\gamma_1 = x_2^2[A_{12} + 2(A_{21} - A_{12})x_1] \to A_{12}$. Both routes agree. In data reduction (Q4), the intercepts of the $G^E/x_1x_2RT$ plot at $x_1$ = 0 and 1 give $\ln\gamma_1^\infty$ and $\ln\gamma_2^\infty$, i.e. the Margules parameters.`,
          answer: String.raw`G^E/x₁x₂RT = ln γ₁/x₂ + ln γ₂/x₁. As x₁ → 0 the first term → ln γ₁^∞; the second is 0/0 → d ln γ₂/dx₁ (L'Hôpital) = −(x₁/x₂) d ln γ₁/dx₁ (Gibbs–Duhem) → 0. Hence the limit is ln γ₁^∞ (= A₁₂ for Margules).` }
      ] },
    { id: "2017-18-Q4", q: 4, section: "A",
      stem: String.raw`The following is a set of VLE data for the system methanol (1)/water (2) at 333 K

| P/kPa | x₁ | y₁ |
|---|---|---|
| 20 | 0 | 0 |
| 40 | 0.17 | 0.57 |
| 50 | 0.33 | 0.71 |
| 60 | 0.52 | 0.80 |
| 70 | 0.72 | 0.89 |
| 80 | 0.81 | 0.96 |
| 85 | 1.00 | 1.00 |

*(35 marks for the whole question; the paper gives no split between (a) and (b).)*`,
      parts: [
        { id: "2017-18-Q4a", label: "(a)", marks: "",
          topic: "solution-applications", sub: "Methanol/water at 333 K: two-parameter Margules fit of G^E/RT to VLE data",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(a) Find parameters values for the Margules equation that provide the best fit of $G^E/RT$ to the data.`,
          solution: String.raw`**Given:** T = 333 K; $P_1^{sat}$ = 85 kPa (P at $x_1$ = 1), $P_2^{sat}$ = 20 kPa (P at $x_1$ = 0); five interior (P, $x_1$, $y_1$) points.

**Find:** $A_{12}$ and $A_{21}$ of the two-parameter Margules equation.

**Assumptions:** low pressure, so modified Raoult's law $y_iP = x_i\gamma_iP_i^{sat}$ applies (ideal vapour, Poynting factor ≈ 1). Margules (SVNA eq. 12.9–12.10):
$$\frac{G^E}{x_1x_2RT} = A_{21}x_1 + A_{12}x_2, \qquad \ln\gamma_1 = x_2^2[A_{12} + 2(A_{21} - A_{12})x_1], \qquad \ln\gamma_2 = x_1^2[A_{21} + 2(A_{12} - A_{21})x_2]$$

1. **Experimental activity coefficients and $G^E/RT$** (SVNA Example 12.1 method):
$$\gamma_1 = \frac{y_1P}{x_1P_1^{sat}}, \qquad \gamma_2 = \frac{y_2P}{x_2P_2^{sat}}, \qquad \frac{G^E}{RT} = x_1\ln\gamma_1 + x_2\ln\gamma_2$$
   For example, at $x_1$ = 0.33: $\gamma_1 = 0.71(50)/[0.33(85)] = 1.2656$ and $\gamma_2 = 0.29(50)/[0.67(20)] = 1.0821$.

| $x_1$ | $\gamma_1$ | $\gamma_2$ | $\ln\gamma_1$ | $\ln\gamma_2$ | $G^E/RT$ | $G^E/x_1x_2RT$ |
|---|---|---|---|---|---|---|
| 0.17 | 1.5779 | 1.0361 | 0.4561 | 0.0355 | 0.1070 | 0.7583 |
| 0.33 | 1.2656 | 1.0821 | 0.2355 | 0.0789 | 0.1306 | 0.5906 |
| 0.52 | 1.0860 | 1.2500 | 0.0825 | 0.2231 | 0.1500 | 0.6009 |
| 0.72 | 1.0180 | 1.3750 | 0.0178 | 0.3185 | 0.1020 | 0.5059 |
| 0.81 | 1.1155 | **0.8421** | 0.1093 | **−0.1719** | 0.0559 | 0.3630 |

2. **Screen the data.** Methanol/water shows positive deviations everywhere ($\gamma_i > 1$), and $\ln\gamma_2$ must rise steadily with $x_1$. The point at $x_1$ = 0.81 gives $\gamma_2$ = 0.84 < 1, against the trend of the other four points, and $\gamma_1$ jumps back up to 1.12. Its P = 80 kPa and $y_1$ = 0.96 are inconsistent with the rest (the correlation fitted to the other points predicts P ≈ 74.6 kPa and $y_1$ ≈ 0.927 there, which follows the smooth trend of the data). **That point is treated as a misprint and left out of the fit.**

3. **Best fit.** $G^E/x_1x_2RT$ is linear in $x_1$ for Margules: intercept $A_{12}$ at $x_1$ = 0 and $A_{21}$ at $x_1$ = 1. Least squares through the four consistent points:
$$\frac{G^E}{x_1x_2RT} = 0.7875 - 0.3990x_1 \;\Rightarrow\; \boxed{A_{12} = 0.788,\qquad A_{21} = 0.389}$$
   Hence $\gamma_1^\infty = e^{0.788} = 2.20$ and $\gamma_2^\infty = e^{0.389} = 1.47$.

![ln γ₁, ln γ₂ and G^E/x₁x₂RT from the data (points) with the Margules fit (lines); × marks the rejected x₁ = 0.81 point](fig/2017-18-Q4-fit.svg)

> If all five points are used, the line is $0.822 - 0.507x_1$, i.e. $A_{12}$ = 0.822, $A_{21}$ = 0.316, and the rms error in P rises from 0.2 to 2.7 kPa. This confirms that the 0.81 point is out of line.

**Result:** $A_{12}$ ≈ 0.788, $A_{21}$ ≈ 0.389, so $G^E/RT = (0.389x_1 + 0.788x_2)x_1x_2$.`,
          answer: String.raw`γᵢ from yᵢP = xᵢγᵢPᵢˢᵃᵗ (P₁ˢᵃᵗ = 85, P₂ˢᵃᵗ = 20 kPa); x₁ = 0.81 point inconsistent (γ₂ = 0.84 < 1), excluded. Least-squares G^E/x₁x₂RT = 0.7875 − 0.3990x₁ ⇒ A₁₂ = 0.788, A₂₁ = 0.389 (all five points: 0.822, 0.316).` },
        { id: "2017-18-Q4b", label: "(b)", marks: "",
          topic: "solution-applications", sub: "Methanol/water at 333 K: P-x-y data compared with the Margules correlation",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(b) Compare the experimental points with the curve determined from the correlation.`,
          solution: String.raw`**Given:** $A_{12}$ = 0.788, $A_{21}$ = 0.389 from (a); $P_1^{sat}$ = 85 kPa, $P_2^{sat}$ = 20 kPa.

**Assumptions:** modified Raoult's law, as in (a).

1. **Correlated P and $y_1$** (BUBL P at each $x_1$):
$$P = x_1\gamma_1P_1^{sat} + x_2\gamma_2P_2^{sat}, \qquad y_1 = \frac{x_1\gamma_1P_1^{sat}}{P}$$
   with $\gamma_1$, $\gamma_2$ from the Margules expressions. For example, at $x_1$ = 0.52: $\ln\gamma_1 = 0.48^2[0.788 + 2(0.389 - 0.788)(0.52)] = 0.0860$, $\ln\gamma_2 = 0.52^2[0.389 + 2(0.788 - 0.389)(0.48)] = 0.2088$, so
$$P = 0.52(1.0898)(85) + 0.48(1.2322)(20) = 48.17 + 11.83 = 59.99\ \mathrm{kPa}$$
   and $y_1 = 48.17/59.99 = 0.803$.

2. **Comparison:**

| $x_1$ | $P_{exp}$ / kPa | $P_{calc}$ / kPa | $y_{1,exp}$ | $y_{1,calc}$ |
|---|---|---|---|---|
| 0.17 | 40 | 39.75 | 0.57 | 0.570 |
| 0.33 | 50 | 50.31 | 0.71 | 0.706 |
| 0.52 | 60 | 59.99 | 0.80 | 0.803 |
| 0.72 | 70 | 69.92 | 0.89 | 0.890 |
| 0.81 | 80 | 74.62 | 0.96 | 0.927 |

   For the four points used in the fit, rms δP = 0.20 kPa (max 0.31) and rms δ$y_1$ = 0.003. The rejected point differs by 5.4 kPa and 0.033, as expected.

3. **P–x–y diagram:**

![P-x-y diagram for methanol/water at 333 K: data points and Margules curves](fig/2017-18-Q4-pxy.svg)

4. **Discussion.** The curves pass through the data almost exactly except at $x_1$ = 0.81. The system has moderate positive deviations from Raoult's law: the bubble curve lies above the straight Raoult line. There is **no azeotrope**, because $\alpha_{12} = \gamma_1P_1^{sat}/(\gamma_2P_2^{sat})$ is 9.3 at $x_1$ = 0 and 2.9 at $x_1$ = 1, always above 1.

**Result:** the two-parameter Margules fit reproduces P within 0.3 kPa and $y_1$ within 0.005 for the consistent points; there is no azeotrope.`,
          answer: String.raw`P_calc = 39.75, 50.31, 59.99, 69.92 kPa vs 40, 50, 60, 70; y₁,calc = 0.570, 0.706, 0.803, 0.890 vs 0.57, 0.71, 0.80, 0.89 (rms δP 0.2 kPa). The x₁ = 0.81 point (80 kPa, 0.96) is off the curve (74.6 kPa, 0.927). No azeotrope (α₁₂ from 9.3 to 2.9).` }
      ] },
    { id: "2017-18-Q5", q: 5, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q5a", label: "(a)", marks: "12",
          topic: "reaction-equilibria", sub: "Mole fractions versus two reaction coordinates: CO₂ hydrogenation to methanol and CO",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`A system formed initially of 2 mol CO₂, 5 mol H₂ and 1 mol CO undergoes the reactions:

$$\mathrm{CO_2(g) + 3H_2(g) \rightarrow CH_3OH(g) + H_2O(g)}$$
$$\mathrm{CO_2(g) + H_2(g) \rightarrow CO(g) + H_2O(g)}$$

Develop expressions for the mole fractions of the reacting species as function of the reaction coordinates for the two reactions.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2017-18-Q5b", label: "(b)", marks: "15",
          topic: "reaction-equilibria", sub: "Liquid-phase reaction equilibrium constant with the Poynting correction",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the following relationship between equilibrium constants to composition for liquid phase reactions:

$$\prod_i(x_i\gamma_i)^{\nu_i} = K\exp\left[\frac{(P^0 - P)}{RT}\sum_i(\nu_iV_i)\right]$$`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2017-18-Q5c", label: "(c)", marks: "8",
          topic: "vle-intro", sub: "Henry's law and the Henry's-law standard state for dilute aqueous solutes",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive Henry's law for standard state for dilute aqueous solution.`,
          solution: String.raw`1. **VLE criterion.** For a solute i (e.g. a gas such as CO₂, O₂ or N₂ dissolved in water) the fugacities in the two phases are equal:
$$\hat f_i^v = \hat f_i^l, \qquad \hat f_i^v = y_i\hat\phi_iP$$
   At low pressure the vapour is an ideal-gas mixture, $\hat\phi_i = 1$, so $\hat f_i^l = y_iP$ (the partial pressure of i).

2. **Behaviour at infinite dilution.** Plot $\hat f_i^l$ against $x_i$ at constant T and P. The curve passes through the origin, and as $x_i \to 0$ it becomes a straight line. **Henry's constant** is defined as its limiting slope:
$$\mathcal H_i \equiv \lim_{x_i \to 0}\frac{\hat f_i^l}{x_i}$$

3. **Henry's law.** For a dilute solution (small $x_i$) the curve is close to its tangent at the origin:
$$\hat f_i^l = x_i\mathcal H_i$$
   With the ideal-gas vapour of step 1,
$$\boxed{y_iP = x_i\mathcal H_i}$$
   $\mathcal H_i$ depends on T (and the solvent) and is found from experiment. Raoult's law, $y_iP = x_iP_i^{sat}$, would fail here because the solute is usually supercritical ($T > T_{c,i}$), so it has no $P_i^{sat}$.

4. **Henry's-law standard state.** In general $\hat f_i = x_i\gamma_if_i^\circ$, where $f_i^\circ$ is the standard-state fugacity. Choose $f_i^\circ = \mathcal H_i$: the **hypothetical pure i** whose fugacity is found by extending the Henry's-law tangent to $x_i = 1$. Then
$$\hat f_i = x_i\gamma_i^*\mathcal H_i, \qquad \gamma_i^* \equiv \frac{\hat f_i}{x_i\mathcal H_i} \to 1 \text{ as } x_i \to 0$$
   The ideal dilute solution is the reference. Relation to the Lewis–Randall convention ($\hat f_i = x_i\gamma_if_i$, $\gamma_i \to 1$ as $x_i \to 1$): taking the limit $x_i \to 0$ gives
$$\mathcal H_i = \gamma_i^\infty f_i, \qquad \gamma_i^* = \frac{\gamma_i}{\gamma_i^\infty}$$

5. **The solvent obeys Raoult's law in the same range.** For a binary (solute 1 in water 2) at constant T, P, Gibbs–Duhem gives $x_1\,d\ln\hat f_1 + x_2\,d\ln\hat f_2 = 0$. If $\hat f_1 = x_1\mathcal H_1$, then $d\ln\hat f_1 = dx_1/x_1$, so $d\ln\hat f_2 = -dx_1/x_2 = dx_2/x_2$. Integrating from pure water ($x_2$ = 1, $\hat f_2 = f_2$) gives $\hat f_2 = x_2f_2$, the Lewis–Randall rule. At low pressure this is $y_2P = x_2P_2^{sat}$. So for a dilute aqueous solution:
$$y_1P = x_1\mathcal H_1 \;(\text{solute}), \qquad y_2P = x_2P_2^{sat} \;(\text{water})$$

6. **Molality form** used for electrolytes and biochemical systems: $\hat f_i = m_i\gamma_i^\square\mathcal H_i'$, with the standard state a hypothetical ideal 1 mol/kg solution. It is equivalent to the mole-fraction form for dilute water solutions, since $m_i \approx x_i/(0.018015\ \mathrm{kg/mol})$.`,
          answer: String.raw`Henry's constant 𝓗ᵢ = lim(xᵢ→0) f̂ᵢ/xᵢ, so for dilute solute f̂ᵢ = xᵢ𝓗ᵢ and (ideal vapour) yᵢP = xᵢ𝓗ᵢ. Henry standard state: hypothetical pure i with f° = 𝓗ᵢ, γᵢ* = f̂ᵢ/(xᵢ𝓗ᵢ) → 1 as xᵢ → 0; 𝓗ᵢ = γᵢ^∞fᵢ. Gibbs–Duhem then gives Raoult/Lewis–Randall for the water: y₂P = x₂P₂ˢᵃᵗ.` }
      ] },
    { id: "2017-18-Q6", q: 6, section: "B",
      stem: String.raw`For the methanol synthesis reaction,

$$\mathrm{CO(g) + 2H_2(g) \rightarrow CH_3OH(g)}$$

the equilibrium conversion to methanol is large at 300 K but decreases rapidly with increasing T. However reaction rates become appreciable only at higher temperatures. For a feed mixture of carbon monoxide and hydrogen in the stoichiometric proportions.

*(35 marks for the whole question; the paper gives no split between (a) and (b).)*`,
      parts: [
        { id: "2017-18-Q6a", label: "(a)", marks: "",
          topic: "reaction-equilibria", sub: "Methanol synthesis: equilibrium methanol mole fraction at 1 bar and 300 K",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(a) What is equilibrium mole fraction of methanol at 1 bar and 300 K.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2017-18-Q6b", label: "(b)", marks: "",
          topic: "reaction-equilibria", sub: "Methanol synthesis: temperature at which y(CH₃OH) = 0.5 at 1 bar",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`(b) At what temperature does the equilibrium mole fraction of methanol equal to 0.5 for a pressure of 1 bar.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] },
    { id: "2017-18-Q7", q: 7, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q7a", label: "(a)", marks: "10",
          topic: "vle-intro", sub: "Flash calculation equations: material balance, K-values and Rachford–Rice",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive necessary equations for flash calculations.`,
          solution: String.raw`**Problem:** a liquid at a pressure above its bubble point is throttled ("flashed") to a lower pressure P at temperature T, and partly vaporizes. Given T, P and the overall composition $\{z_i\}$, find the vapour fraction $\mathcal V$, the liquid fraction $\mathcal L$, and the compositions $\{x_i\}$ and $\{y_i\}$ (SVNA §10.6).

1. **Total material balance** (basis: 1 mol of feed):
$$\mathcal L + \mathcal V = 1$$

2. **Species balance:**
$$z_i = x_i\mathcal L + y_i\mathcal V = x_i(1 - \mathcal V) + y_i\mathcal V$$

3. **Equilibrium relation.** Define the K-value $K_i \equiv y_i/x_i$; then $y_i = K_ix_i$.
   - Raoult's law: $K_i = P_i^{sat}/P$.
   - Modified Raoult's law: $K_i = \gamma_iP_i^{sat}/P$.
   - Light hydrocarbons: $K_i$ from the DePriester chart, a function of T and P only.

4. **Phase compositions.** Substitute $x_i = y_i/K_i$ into step 2:
$$z_i = \frac{y_i}{K_i}(1 - \mathcal V) + y_i\mathcal V \;\Rightarrow\; y_i = \frac{z_iK_i}{1 + \mathcal V(K_i - 1)}, \qquad x_i = \frac{z_i}{1 + \mathcal V(K_i - 1)}$$

5. **Equation for $\mathcal V$.** The mole fractions in each phase sum to 1, so $\sum y_i = 1$:
$$\sum_i\frac{z_iK_i}{1 + \mathcal V(K_i - 1)} = 1$$
   or, using $\sum y_i - \sum x_i = 0$ (the Rachford–Rice form, which is monotonic in $\mathcal V$ and converges well):
$$\boxed{F(\mathcal V) = \sum_i\frac{z_i(K_i - 1)}{1 + \mathcal V(K_i - 1)} = 0}, \qquad F'(\mathcal V) = -\sum_i\frac{z_i(K_i - 1)^2}{[1 + \mathcal V(K_i - 1)]^2}$$
   Solve by trial or Newton's method, $\mathcal V_{new} = \mathcal V - F/F'$, with $0 < \mathcal V < 1$.

6. **Condition for a flash.** Two phases exist only if $P_{dew} < P < P_{bubl}$, where $P_{bubl}$ comes from a BUBL P with $\{x_i\} = \{z_i\}$ and $P_{dew}$ from a DEW P with $\{y_i\} = \{z_i\}$. For Raoult's law, $P_{bubl} = \sum z_iP_i^{sat}$ and $P_{dew} = 1/\sum(z_i/P_i^{sat})$. A first guess is $\mathcal V \approx (P_{bubl} - P)/(P_{bubl} - P_{dew})$.

7. **Binary special case.** With two species, T and P alone fix the phase compositions:
$$x_1 = \frac{1 - K_2}{K_1 - K_2}, \qquad y_1 = K_1x_1, \qquad \mathcal V = \frac{z_1 - x_1}{y_1 - x_1}$$

8. **When $K_i$ depends on composition** (γ–φ formulation), iterate: guess γ and Φ, solve steps 4–5, update $\gamma_i(\{x\})$ and $\Phi_i(\{y\})$, and repeat until x, y and $\mathcal V$ stop changing.`,
          answer: String.raw`L + V = 1; zᵢ = xᵢL + yᵢV; yᵢ = Kᵢxᵢ (Kᵢ = Pᵢˢᵃᵗ/P or γᵢPᵢˢᵃᵗ/P) ⇒ xᵢ = zᵢ/[1 + V(Kᵢ − 1)], yᵢ = Kᵢxᵢ; Σyᵢ − Σxᵢ = 0 gives Rachford–Rice Σzᵢ(Kᵢ − 1)/[1 + V(Kᵢ − 1)] = 0, solved by Newton; valid when P_dew < P < P_bubl.` },
        { id: "2017-18-Q7b", label: "(b)", marks: "17",
          topic: "solution-applications", sub: "DEW T block diagram (gamma–phi formulation)",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`Write a block diagram for the calculation of Dew T.`,
          solution: String.raw`**Problem:** given P and the vapour composition $\{y_i\}$, find the dew-point temperature T and the composition $\{x_i\}$ of the first drop of liquid (SVNA §14.1). This is the hardest of the four bubble/dew calculations because neither T nor x is known, and $\gamma_i$ depends on both.

### Working equations
- **Gamma/phi VLE:** $y_i\Phi_iP = x_i\gamma_iP_i^{sat}$, so
$$x_i = \frac{y_i\Phi_iP}{\gamma_iP_i^{sat}}$$
- **Σx = 1** gives
$$P = \frac{1}{\sum_i y_i\Phi_i/(\gamma_iP_i^{sat})}$$
   Choose one species j and multiply through by $P_j^{sat}$:
$$P_j^{sat} = P\sum_i\frac{y_i\Phi_i}{\gamma_i}\frac{P_j^{sat}}{P_i^{sat}}$$
   The ratio $P_j^{sat}/P_i^{sat}$ depends only weakly on T, so this gives a stable iteration for T.
- **T from Antoine** for species j: $T = \dfrac{B_j}{A_j - \ln P_j^{sat}} - C_j$.
- **Φ factor:**
$$\Phi_i = \frac{\hat\phi_i}{\phi_i^{sat}}\exp\left[\frac{-V_i^l(P - P_i^{sat})}{RT}\right]$$
   $\hat\phi_i$ is from the virial equation at T, P, $\{y_i\}$: $\ln\hat\phi_k = \frac{P}{RT}\left[B_{kk} + \frac12\sum_i\sum_jy_iy_j(2\delta_{ik} - \delta_{ij})\right]$. Also $\ln\phi_i^{sat} = B_{ii}P_i^{sat}/RT$.
- **Activity coefficients** $\gamma_i(T, \{x\})$ from a $G^E$ model (Margules, van Laar, Wilson, NRTL…).

### Block diagram
![DEW T flowchart with the gamma–phi formulation](fig/2017-18-Q7b-sketch.svg)

1. **Read** P, $\{y_i\}$ and the constants: Antoine $A_i, B_i, C_i$; $G^E$-model parameters; $B_{ij}$ (Pitzer correlation from $T_c, P_c, \omega$); $V_i^l$.
2. **Initialize:** all $\Phi_i = 1$ and $\gamma_i = 1$. Then $T_i^{sat} = B_i/(A_i - \ln P) - C_i$ and the first estimate $T = \sum_i y_iT_i^{sat}$.
3. **First T update:** evaluate $P_i^{sat}(T)$; pick species j; $P_j^{sat} = P\sum(y_i\Phi_i/\gamma_i)(P_j^{sat}/P_i^{sat})$; T from Antoine for j.
4. **Evaluate** $P_i^{sat}(T)$ and $\Phi_i$ (from $\hat\phi_i$ at T, P, $\{y\}$, and $\phi_i^{sat}$).
5. **Liquid composition:** $x_i = y_i\Phi_iP/(\gamma_iP_i^{sat})$. Normalize, $x_i \leftarrow x_i/\sum x_i$, and evaluate $\gamma_i(T, \{x\})$.
6. **New T:** $P_j^{sat} = P\sum(y_i\Phi_i/\gamma_i)(P_j^{sat}/P_i^{sat})$, then T from Antoine. (An inner loop over steps 5–6 can be used to settle $\gamma_i$ at each T.)
7. **Converged** ($|\delta T| < \varepsilon$ and γ unchanged)? If no, return to step 4. If yes, print T and $\{x_i\}$.

At low pressure $\Phi_i = 1$ and the scheme reduces to the modified-Raoult DEW T; with also $\gamma_i = 1$ (Raoult) it needs no loop on γ.`,
          answer: String.raw`Given P, {yᵢ}: Φᵢ = γᵢ = 1, T = ΣyᵢTᵢˢᵃᵗ → Pⱼˢᵃᵗ = PΣ(yᵢΦᵢ/γᵢ)(Pⱼˢᵃᵗ/Pᵢˢᵃᵗ), T from Antoine → Pᵢˢᵃᵗ, Φᵢ (virial φ̂ᵢ, φᵢˢᵃᵗ, Poynting) → xᵢ = yᵢΦᵢP/(γᵢPᵢˢᵃᵗ), normalize, γᵢ(T, x) → new Pⱼˢᵃᵗ, T; repeat until δT < ε; print T, {xᵢ}.` },
        { id: "2017-18-Q7c", label: "(c)", marks: "8",
          topic: "reaction-equilibria", sub: "Equilibrium constant and the standard Gibbs-energy change of reaction",
          type: "derivation", syllabus: "in", repeats: [],
          text: String.raw`Derive the relationship between equilibrium constant and Gibbs free energy change at standard conditions.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] },
    { id: "2017-18-Q8", q: 8, section: "B",
      stem: String.raw``,
      parts: [
        { id: "2017-18-Q8a", label: "(a)", marks: "15",
          topic: "refrigeration", sub: "Absorption refrigeration unit: sketch and principle",
          type: "sketch", syllabus: "in", repeats: [],
          text: String.raw`With a neat sketch, explain the principle of an absorption refrigeration unit.`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` },
        { id: "2017-18-Q8b", label: "(b)", marks: "20",
          topic: "refrigeration", sub: "R-134a refrigerator, −26 °C evaporator and 27 °C condenser: circulation rate for 5.25 kW",
          type: "numerical", syllabus: "in", repeats: [],
          text: String.raw`A refrigerator with tetrafluoroethane as refrigerant operates with an evaporation temperature of −26°C and a condensation temperature of 27°C. Standard liquid refrigerant from the condenser flows through an expansion valve into the evaporator, from which it emerges as saturated vapor. For a cooling rate of 5.25 kW, what is the circulation rate of the refrigerant?`,
          solution: String.raw`*Full solution coming in the next update.*`,
          answer: String.raw`—` }
      ] }
  ]
});
