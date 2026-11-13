QB.paper({ year: "Practice", set: "Solution theory: partial properties, fugacity, ideal solution", date: "", marks: 0, practice: true,
  rules: String.raw`Solution thermodynamics theory (SVNA ch. 11, Faisal Ahmed Lec 2): the slide example (antifreeze partial volumes) and slide derivations (ideal-gas mixtures, fugacity), SVNA chapter-11 examples and end-of-chapter problems not set in past papers (virial and generalized fugacities, liquid fugacity with Poynting, steam-table fugacities, partial-property relations), and new exam-style problems on partial and excess properties, Gibbs–Duhem consistency, RK fugacity coefficients and the ideal solution.`,
  questions: [
    { id: "practice-solution-theory-P1", q: 1, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P1", label: "", marks: "", topic: "solution-theory",
        sub: "Antifreeze: volumes of methanol and water for 2000 cm³ of 30 mol% solution", type: "numerical", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lec 2 (Faisal Ahmed), slides 14–16, "Partial Molar Properties in Binary Solutions"; SVNA 6th ed. SI, Example 11.3`,
        text: String.raw`The need arises in a laboratory for 2000 cm³ of an antifreeze solution consisting of 30 mol% methanol in water. What volumes of pure methanol and of pure water at 25°C must be mixed to form the 2000 cm³ of antifreeze, also at 25°C? Partial molar volumes for methanol and water in a 30 mol% methanol solution and their pure-species molar volumes, both at 25°C, are:

Methanol(1): $\bar V_1$ = 38.632 cm³ mol⁻¹, $V_1$ = 40.727 cm³ mol⁻¹

Water(2): $\bar V_2$ = 17.765 cm³ mol⁻¹, $V_2$ = 18.068 cm³ mol⁻¹`,
        solution: String.raw`**Given:** $x_1$ = 0.30; the partial and pure molar volumes at 25 °C; $V^t$ = 2000 cm³.

**Find:** the volumes of pure methanol and pure water to mix.

**Assumptions:** isothermal mixing at 25 °C and 1 atm.

1. **Molar volume of the solution** (summability, $V = \sum x_i\bar V_i$):
$$V = 0.3(38.632) + 0.7(17.765) = 24.025\ \mathrm{cm^3\,mol^{-1}}$$

2. **Total moles:**
$$n = \frac{V^t}{V} = \frac{2000}{24.025} = 83.246\ \mathrm{mol}, \qquad n_1 = 0.3(83.246) = 24.974\ \mathrm{mol}, \qquad n_2 = 58.272\ \mathrm{mol}$$

3. **Volumes of the pure species** (pure molar volumes, not partial ones):
$$V_1^t = n_1V_1 = 24.974(40.727) = 1017\ \mathrm{cm^3}, \qquad V_2^t = n_2V_2 = 58.272(18.068) = 1053\ \mathrm{cm^3}$$

4. **Check.** The pure liquids add up to 2070 cm³, but the solution occupies only 2000 cm³. The volume change of mixing is $\Delta V = V - \sum x_iV_i$ = 24.025 − (0.3(40.727) + 0.7(18.068)) = −0.840 cm³/mol, i.e. −70 cm³ in total. Methanol and water molecules pack more efficiently together (hydrogen bonding). This is why partial, not pure, molar volumes must be used.

5. **Graphical meaning (slide 16).** The tangent to the V–x₁ curve at $x_1$ = 0.30 cuts the axis $x_1$ = 1 at $\bar V_1$ = 38.632 and the axis $x_1$ = 0 at $\bar V_2$ = 17.765 cm³/mol.

**Result:** mix 1017 cm³ of methanol and 1053 cm³ of water (2070 cm³ in all) to obtain 2000 cm³ of 30 mol% antifreeze.`,
        answer: String.raw`V = 0.3(38.632) + 0.7(17.765) = 24.025 cm³/mol ⇒ n = 83.246 mol (n₁ = 24.974, n₂ = 58.272) ⇒ V₁ᵗ = 1017 cm³ methanol, V₂ᵗ = 1053 cm³ water (ΔV_mix = −70 cm³).` } ] },
    { id: "practice-solution-theory-P2", q: 2, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P2", label: "", marks: "", topic: "solution-theory",
        sub: "Ideal-gas mixtures: Gibbs's theorem, entropy and Gibbs energy of mixing (air example)", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lec 2, slides 19–24 ("Ideal-Gas Mixtures", Gibbs's theorem); SVNA §11.4`,
        text: String.raw`State Gibbs's theorem for ideal-gas mixtures. Starting from it, derive expressions for the partial molar enthalpy, entropy and Gibbs energy (chemical potential) of species i in an ideal-gas mixture, and show that $\Delta S^{ig}_{mix} = -R\sum_iy_i\ln y_i$. Evaluate $\Delta S_{mix}$ and $\Delta G_{mix}$ for forming 1 mol of air (79% N₂, 21% O₂) from the pure gases at 25°C and 1 bar.`,
        solution: String.raw`1. **Ideal-gas model.** Molecules have zero volume and do not interact, so each species behaves as if it were alone. Its **partial pressure** is $p_i = y_iP$ (Dalton), and $\sum p_i = P$.

2. **Gibbs's theorem:** a partial molar property (other than volume) of a constituent species in an ideal-gas mixture equals the corresponding molar property of the species as a pure ideal gas at the mixture temperature but at a pressure equal to its partial pressure:
$$\bar M_i^{ig}(T, P) = M_i^{ig}(T, p_i), \qquad M \ne V$$
   For volume, $\bar V_i^{ig} = V_i^{ig} = RT/P$.

3. **Enthalpy.** $H^{ig}$ is independent of P, so $\bar H_i^{ig} = H_i^{ig}(T, p_i) = H_i^{ig}(T, P)$, and $H^{ig} = \sum y_iH_i^{ig}$, giving **$\Delta H_{mix}^{ig}$ = 0**. The same holds for U.

4. **Entropy.** At constant T, $dS_i^{ig} = -R\,d\ln P$. Integrating from $p_i$ to P:
$$S_i^{ig}(T, P) - S_i^{ig}(T, p_i) = -R\ln\frac{P}{y_iP} = R\ln y_i \;\Rightarrow\; \bar S_i^{ig} = S_i^{ig} - R\ln y_i$$
   Summability, $S^{ig} = \sum y_i\bar S_i^{ig}$, then gives
$$S^{ig} - \sum_iy_iS_i^{ig} = \Delta S^{ig}_{mix} = -R\sum_iy_i\ln y_i \;(> 0)$$

5. **Gibbs energy.** $\bar G_i^{ig} = \bar H_i^{ig} - T\bar S_i^{ig}$:
$$\mu_i^{ig} = \bar G_i^{ig} = G_i^{ig} + RT\ln y_i = \Gamma_i(T) + RT\ln(y_iP)$$
   since $G_i^{ig} = \Gamma_i(T) + RT\ln P$ from $dG_i^{ig} = RT\,d\ln P$ at constant T. Summability gives $\Delta G_{mix}^{ig} = RT\sum y_i\ln y_i$ (< 0).

6. **Air at 25 °C:**
$$\Delta S_{mix} = -8.314[0.79\ln 0.79 + 0.21\ln 0.21] = 4.27\ \mathrm{J\,mol^{-1}\,K^{-1}}$$
$$\Delta G_{mix} = -T\Delta S_{mix} = -298.15(4.27) = -1274\ \mathrm{J\,mol^{-1}}, \qquad \Delta H_{mix} = 0, \quad \Delta V_{mix} = 0$$
   Mixing is driven purely by entropy. Separating air (e.g. air-separation plants) needs at least 1.27 kJ of work per mol at 25 °C.`,
        answer: String.raw`Gibbs's theorem: M̄ᵢⁱᵍ(T, P) = Mᵢⁱᵍ(T, pᵢ) (M ≠ V) ⇒ H̄ᵢⁱᵍ = Hᵢⁱᵍ, S̄ᵢⁱᵍ = Sᵢⁱᵍ − R ln yᵢ, μᵢⁱᵍ = Gᵢⁱᵍ + RT ln yᵢ = Γᵢ(T) + RT ln yᵢP; ΔS_mix = −RΣyᵢ ln yᵢ. Air: ΔS_mix = 4.27 J/(mol K), ΔG_mix = −1274 J/mol, ΔH_mix = ΔV_mix = 0.` } ] },
    { id: "practice-solution-theory-P3", q: 3, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P3", label: "", marks: "", topic: "solution-theory",
        sub: "Fugacity of a pure species: definition, ln φ = ∫(Z − 1)dP/P and the generalized virial form", type: "derivation", syllabus: "in", repeats: [],
        origin: "slides", ref: String.raw`Lec 2, slides 25–27 ("Fugacity and Fugacity Coefficient: Pure Species"); SVNA §11.5, Eqs. (11.31)–(11.36), (11.65)`,
        text: String.raw`Why is fugacity introduced in place of the chemical potential? Define the fugacity $f_i$ and the fugacity coefficient $\phi_i$ of a pure species, show that $\ln\phi_i = G_i^R/RT = \int_0^P(Z_i - 1)\dfrac{dP}{P}$ at constant T, and hence obtain the generalized second-virial expression $\ln\phi_i = \dfrac{P_r}{T_r}(B^0 + \omega B^1)$.`,
        solution: String.raw`1. **Why fugacity.** For an ideal gas $G_i^{ig} = \Gamma_i(T) + RT\ln P$. As P → 0 (or $y_i$ → 0 in a mixture), μ → −∞. This makes μ awkward to use, and it is defined only relative to an arbitrary reference. Fugacity replaces P in this equation for real fluids. It has pressure units, a finite limit and a clear meaning, the "escaping tendency".

2. **Definition** (real fluid, constant T):
$$G_i \equiv \Gamma_i(T) + RT\ln f_i, \qquad\text{with}\quad \lim_{P \to 0}\frac{f_i}{P} = 1$$
   Subtracting the ideal-gas equation:
$$G_i - G_i^{ig} = G_i^R = RT\ln\frac{f_i}{P} \;\Rightarrow\; \phi_i \equiv \frac{f_i}{P}, \qquad \ln\phi_i = \frac{G_i^R}{RT}$$
   For an ideal gas $G^R$ = 0, so $\phi_i$ = 1 and $f_i$ = P.

3. **From PVT data.** At constant T, $dG_i = V_i\,dP$ and $dG_i^{ig} = (RT/P)\,dP$, so
$$d\left(\frac{G_i^R}{RT}\right) = \frac{V_i - RT/P}{RT}dP = (Z_i - 1)\frac{dP}{P}$$
   Integrating from P = 0, where $G^R/RT$ → 0:
$$\boxed{\ln\phi_i = \int_0^P(Z_i - 1)\frac{dP}{P}\quad(\text{const. }T)}$$

4. **Two-term virial equation**, $Z_i - 1 = B_{ii}P/RT$ (B a function of T only):
$$\ln\phi_i = \frac{B_{ii}P}{RT}$$

5. **Generalized (Pitzer) correlation**, $\dfrac{B_{ii}P_c}{RT_c} = B^0 + \omega B^1$ with $B^0 = 0.083 - 0.422/T_r^{1.6}$ and $B^1 = 0.139 - 0.172/T_r^{4.2}$:
$$\frac{B_{ii}P}{RT} = \frac{B_{ii}P_c}{RT_c}\cdot\frac{P/P_c}{T/T_c} \;\Rightarrow\; \boxed{\ln\phi_i = \frac{P_r}{T_r}(B^0 + \omega B^1)}$$
   This is valid where the virial equation is (roughly $V_r \ge 2$, i.e. low $P_r$, or the region above the line on SVNA Fig. 3.14); otherwise the Lee/Kesler tables are used.

6. **Phase equilibrium.** Since $G_i = \Gamma_i(T) + RT\ln f_i$, equal Gibbs energies of coexisting phases at the same T means $f_i^v = f_i^l = f_i^{sat}$: the VLE criterion for a pure species.`,
        answer: String.raw`G = Γ(T) + RT ln f with f/P → 1 as P → 0 ⇒ ln φ = Gᴿ/RT; d(Gᴿ/RT) = (Z − 1)dP/P ⇒ ln φ = ∫₀ᴾ(Z − 1)dP/P; with Z = 1 + BP/RT ⇒ ln φ = BP/RT = (P_r/T_r)(B⁰ + ωB¹). Equal fᵢ in coexisting phases at equilibrium.` } ] },
    { id: "practice-solution-theory-P4", q: 4, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P4", label: "", marks: "", topic: "solution-theory",
        sub: "N₂/CH₄ (40% N₂) at 200 K and 30 bar: virial fugacity coefficients", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Example 11.7 (p. 379)`,
        text: String.raw`Determine the fugacity coefficients as given by Eqs. (11.59) and (11.60) for nitrogen and methane in a N₂(1)/CH₄(2) mixture at 200 K and 30 bar if the mixture contains 40 mol% N₂. Experimental virial-coefficient data are as follows:

$$B_{11} = -35.2 \qquad B_{22} = -105.0 \qquad B_{12} = -59.8\ \mathrm{cm^3\,mol^{-1}}$$`,
        solution: String.raw`**Given:** $y_1$ = 0.40, T = 200 K, P = 30 bar, the three $B_{ij}$.

**Find:** $\hat\phi_1$, $\hat\phi_2$.

**Assumptions:** two-term virial equation (30 bar is moderate for these supercritical gases).

1. **Cross term:** $\delta_{12} = 2B_{12} - B_{11} - B_{22} = 2(-59.8) + 35.2 + 105.0 = 20.6$ cm³/mol.

2. **Equations (11.59)–(11.60):**
$$\ln\hat\phi_1 = \frac{P}{RT}(B_{11} + y_2^2\delta_{12}), \qquad \ln\hat\phi_2 = \frac{P}{RT}(B_{22} + y_1^2\delta_{12})$$
   with $P/RT = 30/(83.14 \times 200) = 1.804\times10^{-3}$ mol/cm³.

3. **Nitrogen:**
$$\ln\hat\phi_1 = 1.804\times10^{-3}[-35.2 + 0.36(20.6)] = -0.0501 \;\Rightarrow\; \hat\phi_1 = 0.951$$

4. **Methane:**
$$\ln\hat\phi_2 = 1.804\times10^{-3}[-105.0 + 0.16(20.6)] = -0.1835 \;\Rightarrow\; \hat\phi_2 = 0.832$$

5. **Comments.**
   - Pure-species values at the same T and P are $\phi_1 = e^{B_{11}P/RT}$ = 0.938 and $\phi_2$ = 0.827. The Lewis–Randall rule ($\hat\phi_i = \phi_i$) would be in error by about 1%, because $\delta_{12} \ne 0$.
   - The mixture has B = 0.16(−35.2) + 0.48(−59.8) + 0.36(−105.0) = −72.1 cm³/mol, so Z = 0.870.
   - At 300 bar the RK equation (2020-21 Q4b) gives much smaller values (0.789 and 0.298): the virial equation is not valid there.

**Result:** $\hat\phi_{N_2}$ = 0.951, $\hat\phi_{CH_4}$ = 0.832.`,
        answer: String.raw`δ₁₂ = 20.6 cm³/mol; ln φ̂₁ = (P/RT)(B₁₁ + y₂²δ₁₂) = −0.0501 ⇒ φ̂_N₂ = 0.951; ln φ̂₂ = (P/RT)(B₂₂ + y₁²δ₁₂) = −0.1835 ⇒ φ̂_CH₄ = 0.832.` } ] },
    { id: "practice-solution-theory-P5", q: 5, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P5", label: "", marks: "", topic: "solution-theory",
        sub: "Constant-T,V partial property M̃ᵢ: relation to M̄ᵢ and summability", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 11.15 (p. 395)`,
        text: String.raw`Analogous to the conventional partial property $\bar M_i$, one can define a constant-T,V partial property $\tilde M_i$:

$$\tilde M_i \equiv \left[\frac{\partial(nM)}{\partial n_i}\right]_{T,V,n_j}$$

Show that $\tilde M_i$ and $\bar M_i$ are related by the equation:

$$\tilde M_i = \bar M_i + (V - \bar V_i)\left(\frac{\partial M}{\partial V}\right)_{T,x}$$

Demonstrate that the $\tilde M_i$ satisfy a summability relation, $M = \sum_ix_i\tilde M_i$.`,
        solution: String.raw`1. **Choice of variables.** Regard nM as a function of T, the **total** volume $V^t = nV$, and the $n_i$. Equivalently, the molar M is a function of T, the molar V and x: $nM = n\,M(T, V, x)$.

2. **Change of variables.** At constant T and $n_j$, a change of $n_i$ at constant total *pressure* also changes $V^t$, by $\bar V_i\,dn_i$. Treat $nM = F(T, V^t, \{n\})$:
$$\left[\frac{\partial(nM)}{\partial n_i}\right]_{T,P,n_j} = \left[\frac{\partial(nM)}{\partial n_i}\right]_{T,V^t,n_j} + \left[\frac{\partial(nM)}{\partial V^t}\right]_{T,n}\left[\frac{\partial V^t}{\partial n_i}\right]_{T,P,n_j}$$
$$\bar M_i = \left[\frac{\partial(nM)}{\partial n_i}\right]_{T,V^t,n_j} + \left(\frac{\partial M}{\partial V}\right)_{T,x}\bar V_i \qquad (1)$$
   using $[\partial(nM)/\partial(nV)]_{T,n} = (\partial M/\partial V)_{T,x}$.

3. **Constant molar V versus constant $V^t$.** The definition holds the **molar** volume V constant. Write $nM = n\,M(T, V, x)$ with $V = V^t/n$. Adding $dn_i$ at constant $V^t$ changes V by $dV = -V\,dn_i/n$. So
$$\tilde M_i = \left[\frac{\partial(nM)}{\partial n_i}\right]_{T,V,n_j} = \left[\frac{\partial(nM)}{\partial n_i}\right]_{T,V^t,n_j} + n\left(\frac{\partial M}{\partial V}\right)_{T,x}\frac{V}{n} = \left[\frac{\partial(nM)}{\partial n_i}\right]_{T,V^t,n_j} + V\left(\frac{\partial M}{\partial V}\right)_{T,x} \qquad (2)$$

4. **Combine (1) and (2):**
$$\boxed{\tilde M_i = \bar M_i + (V - \bar V_i)\left(\frac{\partial M}{\partial V}\right)_{T,x}}$$

5. **Summability.** Multiply by $x_i$ and sum, using $\sum x_i\bar M_i = M$ and $\sum x_i\bar V_i = V$:
$$\sum_ix_i\tilde M_i = M + \left(V - \sum_ix_i\bar V_i\right)\left(\frac{\partial M}{\partial V}\right)_{T,x} = M + 0 = M\ \blacksquare$$

6. **Comment.** $\tilde M_i \ne \bar M_i$ in general, but both sets sum to M. For an ideal gas, $\bar V_i = V$, so $\tilde M_i = \bar M_i$. Constant-T,V partials arise naturally with pressure-explicit equations of state (cubic EOS), which are written in terms of V.`,
        answer: String.raw`Treat nM = f(T, Vᵗ, n): M̄ᵢ = (∂nM/∂nᵢ)_T,Vᵗ + (∂M/∂V)V̄ᵢ; holding molar V instead of Vᵗ adds V(∂M/∂V) ⇒ M̃ᵢ = M̄ᵢ + (V − V̄ᵢ)(∂M/∂V)_T,x; Σxᵢ(V − V̄ᵢ) = 0 ⇒ ΣxᵢM̃ᵢ = M.` } ] },
    { id: "practice-solution-theory-P6", q: 6, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P6", label: "", marks: "", topic: "solution-theory",
        sub: "CO₂ at 150 °C from Z data: fugacity and φ up to 500 bar vs. generalized virial", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 11.16 (p. 395); CO₂ constants from SVNA Table B.1 ($T_c$ = 304.2 K, $P_c$ = 73.83 bar, ω = 0.224)`,
        text: String.raw`From the following compressibility-factor data for CO₂ at 423.15 K (150°C) prepare plots of the fugacity and fugacity coefficient of CO₂ vs. P for pressures up to 500 bar. Compare results with those found from the generalized correlation represented by Eq. (11.65).

| P/bar | Z | P/bar | Z |
|---|---|---|---|
| 10 | 0.985 | 100 | 0.869 |
| 20 | 0.970 | 200 | 0.765 |
| 40 | 0.942 | 300 | 0.762 |
| 60 | 0.913 | 400 | 0.824 |
| 80 | 0.885 | 500 | 0.910 |`,
        solution: String.raw`**Given:** the Z(P) data at 423.15 K.

**Find:** φ(P) and f(P); comparison with $\ln\phi = (P_r/T_r)(B^0 + \omega B^1)$.

**Assumptions:** numerical integration of the smooth data. The integrand is extrapolated to P = 0 linearly: $(Z - 1)/P$ = −0.00150 bar⁻¹ at 10 and 20 bar, so it is −0.00150 at P → 0.

1. **Working equation:** $\ln\phi = \displaystyle\int_0^P\frac{Z - 1}{P}dP$, and f = φP.

2. **Integrand** $(Z - 1)/P$ (bar⁻¹): −0.00150 (10), −0.00150 (20), −0.00145 (40), −0.00145 (60), −0.00144 (80), −0.00131 (100), −0.00118 (200), −0.00079 (300), −0.00044 (400), −0.00018 (500). It rises towards zero at high P, where Z passes its minimum (about 0.76 near 250 bar) and repulsive forces take over.

3. **Integration** (monotone-cubic interpolation of the integrand, then quadrature):

| P / bar | ln φ | φ | f / bar | φ (Eq. 11.65) |
|---|---|---|---|---|
| 10 | −0.0150 | 0.985 | 9.85 | 0.986 |
| 40 | −0.0595 | 0.942 | 37.69 | 0.945 |
| 100 | −0.1449 | 0.865 | 86.51 | 0.869 |
| 200 | −0.2687 | 0.764 | 152.9 | 0.755 |
| 300 | −0.3685 | 0.692 | 207.5 | — |
| 400 | −0.4296 | 0.651 | 260.3 | — |
| 500 | −0.4599 | 0.631 | 315.7 | 0.495 |

4. **Generalized correlation.** $T_r$ = 423.15/304.2 = 1.391, so $B^0$ = −0.1659 and $B^1$ = 0.0960. Then
$$\ln\phi = \frac{P/73.83}{1.391}(-0.1659 + 0.224 \times 0.0960) = -0.001406P$$
   This agrees with the data within 0.5% up to about 100 bar ($P_r$ ≈ 1.4) and within about 1% at 200 bar. At 500 bar it gives φ = 0.495 against 0.631. The virial form is linear in P and cannot follow the rise of Z at high pressure. Beyond about $P_r$ = 2–3 the Lee/Kesler tables must be used.

5. **Plot description.** f rises almost linearly at first and then falls increasingly below the line f = P. φ decreases steadily but flattens above 300 bar, approaching a minimum, and would eventually rise above 1 at very high P where Z > 1.

**Result:** φ = 0.985, 0.865, 0.764, 0.631 at 10, 100, 200, 500 bar (f = 9.85, 86.5, 152.9, 315.7 bar). The generalized virial correlation is good to about 200 bar but much too low at 500 bar.`,
        answer: String.raw`ln φ = ∫(Z − 1)dP/P numerically: φ = 0.985 (10 bar), 0.942 (40), 0.865 (100), 0.764 (200), 0.692 (300), 0.651 (400), 0.631 (500); f = 9.85 … 315.7 bar. Eq. (11.65): ln φ = −0.001406P — agrees to ~200 bar, gives 0.495 at 500 bar (too low).` } ] },
    { id: "practice-solution-theory-P7", q: 7, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P7", label: "", marks: "", topic: "solution-theory",
        sub: "Isobutylene gas at 280 °C and 20 bar: fugacity by the generalized virial correlation", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 11.18(a) (p. 395); constants from SVNA Table B.1`,
        text: String.raw`Estimate the fugacity of isobutylene as a gas at 553.15 K (280°C) and 20 bar.

(Table B.1: isobutylene $T_c$ = 417.9 K, $P_c$ = 40.00 bar, ω = 0.194.)`,
        solution: String.raw`**Given:** T = 553.15 K, P = 20 bar; $T_c$ = 417.9 K, $P_c$ = 40.00 bar, ω = 0.194.

**Find:** f.

**Assumptions:** generalized second-virial correlation, Eq. (11.65). At $T_r$ = 1.32 and $P_r$ = 0.5 the state lies well inside the virial region ($V_r$ > 2).

1. **Reduced conditions:** $T_r$ = 553.15/417.9 = 1.3236, $P_r$ = 20/40 = 0.500.

2. **Virial functions:**
$$B^0 = 0.083 - \frac{0.422}{1.3236^{1.6}} = -0.1865, \qquad B^1 = 0.139 - \frac{0.172}{1.3236^{4.2}} = 0.0860$$

3. **Fugacity coefficient:**
$$\ln\phi = \frac{0.500}{1.3236}(-0.1865 + 0.194 \times 0.0860) = -0.0641 \;\Rightarrow\; \phi = 0.938$$

4. **Fugacity:** f = φP = 0.938(20) = **18.76 bar**.

**Note.** Part (b) of the book problem (100 bar, $P_r$ = 2.5) is outside the virial range and needs the Lee/Kesler tables ($\phi^0$, $\phi^1$).

**Result:** φ = 0.938, f ≈ 18.8 bar.`,
        answer: String.raw`T_r = 1.324, P_r = 0.5; B⁰ = −0.1865, B¹ = 0.0860 ⇒ ln φ = −0.0641, φ = 0.938 ⇒ f = 18.76 bar.` } ] },
    { id: "practice-solution-theory-P8", q: 8, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P8", label: "", marks: "", topic: "solution-theory",
        sub: "Compressed liquid cyclopentane at 110 °C and 275 bar: fugacity with Poynting factor", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 11.19(a) (p. 395); constants from SVNA Table B.1`,
        text: String.raw`Estimate the fugacity of cyclopentane at 383.15 K (110°C) and 275 bar. At 383.15 K (110°C) the vapor pressure of cyclopentane is 5.267 bar.

(Table B.1: cyclopentane $T_c$ = 511.8 K, $P_c$ = 45.02 bar, ω = 0.196, $Z_c$ = 0.273, $V_c$ = 258 cm³ mol⁻¹.)`,
        solution: String.raw`**Given:** T = 383.15 K, P = 275 bar (compressed liquid, since P ≫ $P^{sat}$ = 5.267 bar).

**Find:** f.

**Assumptions:**
- Saturated vapour by the generalized virial correlation (low $P^{sat}$).
- Liquid incompressible with $V^l$ = saturated-liquid volume from the Rackett equation, $V^{sat} = V_cZ_c^{(1 - T_r)^{2/7}}$ (SVNA Eq. 3.63).

1. **Working equation** (SVNA Eq. 11.44):
$$f = \phi^{sat}P^{sat}\exp\frac{V^l(P - P^{sat})}{RT}$$

2. **φˢᵃᵗ:** $T_r$ = 383.15/511.8 = 0.7486; $B^0$ = −0.5876, $B^1$ = −0.4412.
$$\ln\phi^{sat} = \frac{5.267/45.02}{0.7486}(-0.5876 + 0.196(-0.4412)) = -0.1053 \;\Rightarrow\; \phi^{sat} = 0.900, \qquad f^{sat} = 4.740\ \mathrm{bar}$$

3. **Liquid volume (Rackett):** $(1 - 0.7486)^{2/7}$ = 0.6743, so $V^l = 258(0.273)^{0.6743}$ = 107.5 cm³/mol.

4. **Poynting factor:**
$$\exp\frac{107.5(275 - 5.267)}{83.14(383.15)} = \exp(0.9107) = 2.486$$

5. **Fugacity:** f = 4.740(2.486) = **11.8 bar**. The fugacity coefficient is φ = f/P = 0.043.

**Comment.** At 275 bar the Poynting factor is large (about 2.5), so it cannot be neglected, unlike at moderate pressures. Even so, the liquid's fugacity (11.8 bar) is far below the system pressure, because a liquid has a low escaping tendency.

**Result:** f ≈ 11.8 bar.`,
        answer: String.raw`φˢᵃᵗ = 0.900 (virial, T_r = 0.749) ⇒ fˢᵃᵗ = 4.74 bar; Rackett Vˡ = 107.5 cm³/mol; Poynting exp[Vˡ(P − Pˢᵃᵗ)/RT] = 2.486 ⇒ f = 11.8 bar (φ = 0.043).` } ] },
    { id: "practice-solution-theory-P9", q: 9, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P9", label: "", marks: "", topic: "solution-theory",
        sub: "Justify ∂ln φ̂ᵢ/∂P = V̄ᵢᴿ/RT, ∂ln φ̂ᵢ/∂T = −H̄ᵢᴿ/RT², Gᴿ/RT = Σxᵢ ln φ̂ᵢ, Σxᵢ d ln φ̂ᵢ = 0", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 11.20 (p. 395)`,
        text: String.raw`Justify the following equations:

$$\left(\frac{\partial\ln\hat\phi_i}{\partial P}\right)_{T,x} = \frac{\bar V_i^R}{RT} \qquad \left(\frac{\partial\ln\hat\phi_i}{\partial T}\right)_{P,x} = -\frac{\bar H_i^R}{RT^2}$$

$$\frac{G^R}{RT} = \sum_ix_i\ln\hat\phi_i \qquad \sum_ix_i\,d\ln\hat\phi_i = 0\ \ (\text{const } T, P)$$`,
        solution: String.raw`1. **Residual fundamental property relation** (SVNA Eq. 11.53): for a mixture,
$$d\left(\frac{nG^R}{RT}\right) = \frac{nV^R}{RT}dP - \frac{nH^R}{RT^2}dT + \sum_i\frac{\bar G_i^R}{RT}dn_i$$

2. **ln φ̂ᵢ is the partial property of $G^R/RT$.** By definition $\bar G_i - \bar G_i^{ig} = \bar G_i^R = RT\ln\hat\phi_i$ (from $\mu_i = \Gamma_i + RT\ln\hat f_i$ and $\mu_i^{ig} = \Gamma_i + RT\ln y_iP$). So
$$\ln\hat\phi_i = \left[\frac{\partial(nG^R/RT)}{\partial n_i}\right]_{T,P,n_j}$$

3. **Pressure and temperature derivatives.** Each partial property satisfies the same relations as the solution property ("every linear relation among properties of a constant-composition solution has a counterpart in partial properties", slide 18). From step 1 at constant composition, $\left(\dfrac{\partial(G^R/RT)}{\partial P}\right)_{T,x} = \dfrac{V^R}{RT}$ and $\left(\dfrac{\partial(G^R/RT)}{\partial T}\right)_{P,x} = -\dfrac{H^R}{RT^2}$. Differentiating with respect to $n_i$ (order of differentiation exchangeable):
$$\left(\frac{\partial\ln\hat\phi_i}{\partial P}\right)_{T,x} = \frac{\bar V_i^R}{RT}, \qquad \left(\frac{\partial\ln\hat\phi_i}{\partial T}\right)_{P,x} = -\frac{\bar H_i^R}{RT^2}$$

4. **Summability:** $M = \sum x_i\bar M_i$ applied to $M = G^R/RT$:
$$\frac{G^R}{RT} = \sum_ix_i\ln\hat\phi_i$$

5. **Gibbs–Duhem:** $\sum x_i\,d\bar M_i = 0$ at constant T and P, applied to the partial properties $\ln\hat\phi_i$:
$$\sum_ix_i\,d\ln\hat\phi_i = 0\quad(\text{const }T, P)$$

**Uses:** these give the P- and T-dependence of fugacity coefficients from measurable $\bar V_i^R$ and $\bar H_i^R$, a summability check on EOS results, and a consistency test.`,
        answer: String.raw`ln φ̂ᵢ = [∂(nGᴿ/RT)/∂nᵢ]_T,P,nⱼ (partial property of Gᴿ/RT); from d(nGᴿ/RT) = (nVᴿ/RT)dP − (nHᴿ/RT²)dT + Σ ln φ̂ᵢ dnᵢ the partial-property counterparts give ∂ln φ̂ᵢ/∂P = V̄ᵢᴿ/RT, ∂ln φ̂ᵢ/∂T = −H̄ᵢᴿ/RT²; summability gives Gᴿ/RT = Σxᵢ ln φ̂ᵢ; Gibbs–Duhem gives Σxᵢ d ln φ̂ᵢ = 0.` } ] },
    { id: "practice-solution-theory-P10", q: 10, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P10", label: "", marks: "", topic: "solution-theory",
        sub: "Compressed water at 150 °C and 150 bar: f/fˢᵃᵗ from steam tables and by Poynting", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 11.21 (p. 395); steam data from Çengel Tables A-4 and A-7`,
        text: String.raw`From data in the steam tables, determine a good estimate for $f/f^{sat}$ for liquid water at 423.15 K (150°C) and 150 bar, where $f^{sat}$ is the fugacity of saturated liquid at 423.15 K (150°C).`,
        solution: String.raw`**Given:** T = 150 °C. Saturated liquid (Çengel A-4): $P^{sat}$ = 476.16 kPa, $v_f$ = 0.001091 m³/kg, $h_f$ = 632.18 kJ/kg, $s_f$ = 1.8418 kJ/(kg·K). Compressed liquid at 15 MPa (Çengel A-7), interpolated between 140 and 160 °C: v = 0.0010814 m³/kg, h = 641.38 kJ/kg, s = 1.8251 kJ/(kg·K).

**Find:** $f/f^{sat}$.

**Assumptions:** R = 8.314/18.015 = 0.46152 kJ/(kg·K).

1. **Rigorous route (G from tables).** At constant T, $RT\ln(f/f^{sat}) = G - G^{sat} = (H - H^{sat}) - T(S - S^{sat})$:
$$\ln\frac{f}{f^{sat}} = \frac{(641.38 - 632.18) - 423.15(1.8251 - 1.8418)}{0.46152(423.15)} = \frac{9.20 + 7.07}{195.29} = 0.0833$$
$$\frac{f}{f^{sat}} = 1.087$$

2. **Poynting route** (incompressible liquid, $V \approx v_f$):
$$\ln\frac{f}{f^{sat}} = \frac{v_f(P - P^{sat})}{RT} = \frac{0.001091(15\,000 - 476.16)}{195.29} = \frac{15.85}{195.29} = 0.0811 \;\Rightarrow\; \frac{f}{f^{sat}} = 1.085$$

3. **Comparison.** The two routes agree within 0.2%. The small difference comes from the slight compressibility of water (v falls from 0.001091 to 0.001081 m³/kg) and from interpolation in s. Since $\phi^{sat} \approx 1$ at 4.76 bar, the liquid fugacity is about 1.085 × 4.7 ≈ 5.1 bar.

**Result:** $f/f^{sat}$ ≈ 1.09.`,
        answer: String.raw`ln(f/fˢᵃᵗ) = [(H − Hˢᵃᵗ) − T(S − Sˢᵃᵗ)]/RT = (9.20 + 7.07)/195.29 = 0.0833 ⇒ f/fˢᵃᵗ = 1.087; Poynting with v_f gives 1.085.` } ] },
    { id: "practice-solution-theory-P11", q: 11, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P11", label: "", marks: "", topic: "solution-theory",
        sub: "Steam expanded isothermally from 9000 kPa to 300 kPa at 400 °C: fugacity ratio", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 11.22(a) (p. 396); steam data from Çengel Table A-6`,
        text: String.raw`Determine the ratio of the fugacity in the final state to that in the initial state for steam undergoing the isothermal change of state from 9000 kPa and 673.15 K (400°C) to 300 kPa.`,
        solution: String.raw`**Given:** superheated steam at 400 °C (Çengel A-6):
- State 1, 9 MPa: h = 3118.8 kJ/kg, s = 6.2876 kJ/(kg·K).
- State 2, 0.3 MPa: h = 3275.5 kJ/kg, s = 8.0347 kJ/(kg·K).

**Find:** $f_2/f_1$.

**Assumptions:** R = 0.46152 kJ/(kg·K); T = 673.15 K.

1. **Relation.** At constant T, $G = \Gamma(T) + RT\ln f$, so
$$\ln\frac{f_2}{f_1} = \frac{G_2 - G_1}{RT} = \frac{(H_2 - H_1) - T(S_2 - S_1)}{RT}$$

2. **Substitute:**
$$\ln\frac{f_2}{f_1} = \frac{156.7 - 673.15(1.7471)}{0.46152(673.15)} = \frac{156.7 - 1176.1}{310.67} = -3.281 \;\Rightarrow\; \frac{f_2}{f_1} = 0.0376$$

3. **Comparison with an ideal gas:** $f_2/f_1 = P_2/P_1$ = 300/9000 = 0.0333. The real ratio is 13% larger: $\phi_2/\phi_1$ = 0.0376/0.0333 = 1.127. Steam at 9 MPa is quite non-ideal ($\phi_1$ ≈ 0.88 if $\phi_2$ ≈ 0.99), while at 300 kPa it is nearly ideal.

**Result:** $f_2/f_1$ ≈ 0.038.`,
        answer: String.raw`ln(f₂/f₁) = [(H₂ − H₁) − T(S₂ − S₁)]/RT = (156.7 − 1176.1)/310.67 = −3.281 ⇒ f₂/f₁ = 0.0376 (ideal gas would give 0.0333).` } ] },
    { id: "practice-solution-theory-P12", q: 12, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P12", label: "", marks: "", topic: "solution-theory",
        sub: "Liquid n-pentane at its normal boiling point and 200 bar: fugacity", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 11.23(a) (p. 396); constants from SVNA Table B.1`,
        text: String.raw`Estimate the fugacity of n-pentane as a liquid at its normal-boiling-point temperature and 200 bar.

(Table B.1: n-pentane $T_c$ = 469.7 K, $P_c$ = 33.70 bar, ω = 0.252, $Z_c$ = 0.270, $V_c$ = 313 cm³ mol⁻¹, $T_n$ = 309.2 K.)`,
        solution: String.raw`**Given:** T = $T_n$ = 309.2 K, so $P^{sat}$ = 1.01325 bar; P = 200 bar.

**Find:** f.

**Assumptions:** virial correlation for $\phi^{sat}$; Rackett volume; incompressible liquid.

1. **φˢᵃᵗ:** $T_r$ = 309.2/469.7 = 0.6583; $B^0$ = −0.7408, $B^1$ = −0.8568.
$$\ln\phi^{sat} = \frac{1.01325/33.70}{0.6583}(-0.7408 + 0.252(-0.8568)) = -0.0437 \;\Rightarrow\; \phi^{sat} = 0.957, \qquad f^{sat} = 0.970\ \mathrm{bar}$$

2. **Liquid volume (Rackett):** $V^l = 313(0.270)^{(0.3417)^{2/7}}$ = 119.4 cm³/mol.

3. **Poynting factor:**
$$\exp\frac{119.4(200 - 1.013)}{83.14(309.2)} = \exp(0.9246) = 2.521$$

4. **Fugacity:** f = 0.970(2.521) = **2.45 bar**.

**Result:** f ≈ 2.4 bar. Compressing the liquid from 1 atm to 200 bar raises its fugacity about 2.5-fold, yet it stays far below P.`,
        answer: String.raw`T_r = 0.658, P_r = 0.030 ⇒ φˢᵃᵗ = 0.957, fˢᵃᵗ = 0.970 bar; Rackett Vˡ = 119.4 cm³/mol; Poynting = 2.521 ⇒ f ≈ 2.45 bar.` } ] },
    { id: "practice-solution-theory-P13", q: 13, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P13", label: "", marks: "", topic: "solution-theory",
        sub: "Ethylene/propylene gas at 150 °C, 30 bar: f̂ and φ̂ by virial and by the ideal-solution rule", type: "numerical", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 11.25 (p. 396); constants from SVNA Table B.1`,
        text: String.raw`For the system ethylene(1)/propylene(2) as a gas, estimate $\hat f_1$, $\hat f_2$, $\hat\phi_1$, and $\hat\phi_2$ at T = 423.15 K (150°C), P = 30 bar, and $y_1$ = 0.35:

(a) Through application of Eqs. (11.59) and (11.60).

(b) Assuming that the mixture is an ideal solution.

(Table B.1: ethylene $T_c$ = 282.3 K, $P_c$ = 50.40 bar, ω = 0.087, $Z_c$ = 0.281, $V_c$ = 131 cm³/mol; propylene $T_c$ = 365.6 K, $P_c$ = 46.65 bar, ω = 0.140, $Z_c$ = 0.289, $V_c$ = 188.4 cm³/mol.)`,
        solution: String.raw`**Assumptions:** two-term virial equation; $B_{ij}$ from the Pitzer correlation $\dfrac{B_{ij}P_{cij}}{RT_{cij}} = B^0 + \omega_{ij}B^1$ with SVNA's combining rules.
- $\omega_{12} = (\omega_1 + \omega_2)/2$
- $T_{c12} = \sqrt{T_{c1}T_{c2}}$ (k₁₂ = 0)
- $Z_{c12} = (Z_{c1} + Z_{c2})/2$
- $V_{c12} = [(V_{c1}^{1/3} + V_{c2}^{1/3})/2]^3$
- $P_{c12} = Z_{c12}RT_{c12}/V_{c12}$

1. **Parameters:**

| ij | $T_{cij}$/K | $P_{cij}$/bar | $\omega_{ij}$ | $T_{rij}$ | $B^0$ | $B^1$ | $B_{ij}$/cm³ mol⁻¹ |
|---|---|---|---|---|---|---|---|
| 11 | 282.3 | 50.40 | 0.087 | 1.4989 | −0.1378 | 0.1076 | −59.83 |
| 22 | 365.6 | 46.65 | 0.140 | 1.1574 | −0.2510 | 0.0459 | −159.35 |
| 12 | 321.26 | 48.19 | 0.1135 | 1.3172 | −0.1886 | 0.0849 | −99.18 |

   ($V_{c12}$ = 157.97 cm³/mol, $Z_{c12}$ = 0.285.) $\delta_{12} = 2(-99.18) + 59.83 + 159.35 = 20.81$ cm³/mol.

2. **(a) Virial:** P/RT = 30/(83.14 × 423.15) = 8.527 × 10⁻⁴ mol/cm³.
$$\ln\hat\phi_1 = 8.527\times10^{-4}[-59.83 + 0.65^2(20.81)] = -0.0435 \;\Rightarrow\; \hat\phi_1 = 0.957$$
$$\ln\hat\phi_2 = 8.527\times10^{-4}[-159.35 + 0.35^2(20.81)] = -0.1337 \;\Rightarrow\; \hat\phi_2 = 0.875$$
$$\hat f_1 = y_1\hat\phi_1P = 0.35(0.957)(30) = 10.05\ \mathrm{bar}, \qquad \hat f_2 = 0.65(0.875)(30) = 17.06\ \mathrm{bar}$$

3. **(b) Ideal solution (Lewis–Randall rule).** $\hat\phi_i = \phi_i$ (pure species at T, P), i.e. $\delta_{12}$ is ignored:
$$\phi_1 = e^{8.527\times10^{-4}(-59.83)} = 0.950, \qquad \phi_2 = e^{8.527\times10^{-4}(-159.35)} = 0.873$$
$$\hat f_1 = 0.35(0.950)(30) = 9.98\ \mathrm{bar}, \qquad \hat f_2 = 0.65(0.873)(30) = 17.02\ \mathrm{bar}$$

4. **Comparison.** The ideal-solution values differ by less than 1% (0.7% for ethylene). Two similar light olefins have a small $\delta_{12}$, so the Lewis–Randall rule is a good approximation here.

**Result:** (a) $\hat\phi_1$ = 0.957, $\hat\phi_2$ = 0.875, $\hat f_1$ = 10.05 bar, $\hat f_2$ = 17.06 bar; (b) 0.950, 0.873, 9.98 bar, 17.02 bar.`,
        answer: String.raw`B₁₁ = −59.8, B₂₂ = −159.3, B₁₂ = −99.2 cm³/mol, δ₁₂ = 20.8. (a) φ̂₁ = 0.957, φ̂₂ = 0.875, f̂₁ = 10.05, f̂₂ = 17.06 bar; (b) Lewis–Randall: φ₁ = 0.950, φ₂ = 0.873, f̂₁ = 9.98, f̂₂ = 17.02 bar (<1 % difference).` } ] },
    { id: "practice-solution-theory-P14", q: 14, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P14", label: "", marks: "", topic: "solution-theory",
        sub: "Rationalize ln φ ≈ Z − 1 at sufficiently low pressure", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 11.26 (p. 396)`,
        text: String.raw`Rationalize the following expression, valid at sufficiently low pressures, for estimating the fugacity coefficient: $\ln\phi \approx Z - 1$.`,
        solution: String.raw`1. **Exact relation** (constant T): $\ln\phi = \displaystyle\int_0^P(Z - 1)\frac{dP}{P}$.

2. **Low pressure.** Z is linear in P (two-term virial expansion in P): $Z - 1 = B'P$ with $B' = B/RT$, a function of T only. Then
$$\ln\phi = \int_0^PB'\,dP = B'P = Z - 1$$

3. **Alternative view:** $\ln\phi = G^R/RT = H^R/RT - S^R/R$. With the virial equation, $H^R/RT = (P/R)(B/T - dB/dT)$ and $S^R/R = -(P/R)\,dB/dT$. The difference is $BP/RT = Z - 1$.

4. **Validity.** The approximation fails once Z is no longer linear in P (dense gases, $P_r \gtrsim 0.5$–1, or near saturation), because then the average of $(Z - 1)/P$ over 0 to P differs from its value at P. Because $Z - 1$ is small at low P, $\phi \approx e^{Z - 1} \approx Z$ to first order. For example, Z = 0.985 gives φ ≈ 0.985 (CO₂ at 150 °C and 10 bar in P6).`,
        answer: String.raw`ln φ = ∫₀ᴾ(Z − 1)dP/P; at low P, Z − 1 = BP/RT is linear in P, so the integrand is constant (= B/RT) and ln φ = BP/RT = Z − 1 (fails when Z is non-linear in P).` } ] },
    { id: "practice-solution-theory-P15", q: 15, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P15", label: "", marks: "", topic: "solution-theory",
        sub: "Show that γᵢ = φ̂ᵢ/φᵢ", type: "derivation", syllabus: "in", repeats: [],
        origin: "book", ref: String.raw`SVNA 6th ed. SI, Problem 11.29 (p. 396)`,
        text: String.raw`Show that $\gamma_i = \hat\phi_i/\phi_i$.`,
        solution: String.raw`1. **Activity coefficient** (Lewis–Randall standard state: pure i at the mixture T and P):
$$\gamma_i \equiv \frac{\hat f_i}{x_if_i}$$
   where $\hat f_i$ is the fugacity of i in solution and $f_i$ that of pure i at the same T and P.

2. **Fugacity coefficients:** in solution $\hat\phi_i = \hat f_i/(x_iP)$, and pure $\phi_i = f_i/P$.

3. **Divide:**
$$\frac{\hat\phi_i}{\phi_i} = \frac{\hat f_i/(x_iP)}{f_i/P} = \frac{\hat f_i}{x_if_i} = \gamma_i\ \blacksquare$$

4. **Meaning.**
   - An ideal solution ($\gamma_i$ = 1) is equivalent to the Lewis–Randall rule $\hat\phi_i = \phi_i$.
   - The relation lets an EOS that gives both $\hat\phi_i$ and $\phi_i$ supply activity coefficients, for gases or liquids.
   - For the virial gas mixture, $\ln\gamma_1 = \ln\hat\phi_1 - \ln\phi_1 = (P/RT)\,y_2^2\delta_{12}$, so $\delta_{12}$ measures the non-ideality of the gas solution.`,
        answer: String.raw`γᵢ = f̂ᵢ/(xᵢfᵢ); dividing φ̂ᵢ = f̂ᵢ/(xᵢP) by φᵢ = fᵢ/P gives φ̂ᵢ/φᵢ = f̂ᵢ/(xᵢfᵢ) = γᵢ (ideal solution ⇔ Lewis–Randall rule φ̂ᵢ = φᵢ).` } ] },
    { id: "practice-solution-theory-P16", q: 16, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P16", label: "", marks: "(10+10=20)", topic: "solution-theory",
        sub: "Redlich–Kister Vᴱ = x₁x₂[−4.0 + 1.2(x₁ − x₂)]: partial excess and partial molar volumes", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem in the format of 2022-23 Q8(a) and 2018-19 Q3(b), with a Redlich–Kister excess volume`,
        text: String.raw`The excess molar volume (cm³ mol⁻¹) of a binary liquid mixture at T and P is represented by the Redlich–Kister expansion

$$V^E = x_1x_2[-4.0 + 1.2(x_1 - x_2)]$$

The pure-species molar volumes are $V_1$ = 58.0 and $V_2$ = 18.07 cm³ mol⁻¹.

(i) Find expressions for the partial excess volumes $\bar V_1^E$ and $\bar V_2^E$, and their infinite-dilution values.

(ii) Show that they satisfy the Gibbs–Duhem equation, and calculate V, $\bar V_1$ and $\bar V_2$ at $x_1$ = 0.40.`,
        solution: String.raw`**Method:** for any excess property, $\bar M_1^E = M^E + x_2\dfrac{dM^E}{dx_1}$ and $\bar M_2^E = M^E - x_1\dfrac{dM^E}{dx_1}$. Then $\bar V_i = V_i + \bar V_i^E$.

1. **(i) General result** for $M^E = x_1x_2[a + b(x_1 - x_2)]$ (with $x_2 = 1 - x_1$, so $x_1 - x_2 = 2x_1 - 1$):
$$\bar M_1^E = x_2^2[a + b(3x_1 - x_2)], \qquad \bar M_2^E = x_1^2[a - b(3x_2 - x_1)]$$
   Check by expanding: $V^E = -5.2x_1 + 7.6x_1^2 - 2.4x_1^3$, $dV^E/dx_1 = -5.2 + 15.2x_1 - 7.2x_1^2$, and $V^E + x_2\,dV^E/dx_1$ reproduces $x_2^2[a + b(3x_1 - x_2)]$.
   With a = −4.0 and b = 1.2:
$$\bar V_1^E = x_2^2[-4.0 + 1.2(3x_1 - x_2)], \qquad \bar V_2^E = x_1^2[-4.0 - 1.2(3x_2 - x_1)]$$

2. **(i) Infinite dilution:**
$$\bar V_1^{E,\infty} = \bar V_1^E(x_1 \to 0) = a - b = -4.0 - 1.2 = -5.2\ \mathrm{cm^3/mol}, \qquad \bar V_2^{E,\infty} = \bar V_2^E(x_1 \to 1) = a + b = -4.0 + 1.2 = -2.8\ \mathrm{cm^3/mol}$$
   Each partial excess volume vanishes at its own pure-species limit ($\bar V_1^E \to 0$ as $x_1 \to 1$).

3. **(ii) Gibbs–Duhem,** $x_1\,d\bar V_1^E/dx_1 + x_2\,d\bar V_2^E/dx_1 = 0$. As polynomials:
$$\bar V_1^E = -5.2 + 15.2x_1 - 14.8x_1^2 + 4.8x_1^3, \qquad \bar V_2^E = -7.6x_1^2 + 4.8x_1^3$$
$$x_1\frac{d\bar V_1^E}{dx_1} = 15.2x_1 - 29.6x_1^2 + 14.4x_1^3, \qquad x_2\frac{d\bar V_2^E}{dx_1} = (1 - x_1)(-15.2x_1 + 14.4x_1^2) = -15.2x_1 + 29.6x_1^2 - 14.4x_1^3$$
   The sum is **0** for all $x_1$ ✓. This is guaranteed, because both partials come from one function $V^E(x_1)$. The same holds for $\bar V_i = V_i + \bar V_i^E$, since the $V_i$ are constants.

4. **(ii) Values at $x_1$ = 0.40** ($x_2$ = 0.60, $x_1 - x_2$ = −0.20, $3x_1 - x_2$ = 0.60, $3x_2 - x_1$ = 1.40):
$$V^E = 0.24[-4.0 + 1.2(-0.2)] = -1.018, \qquad \bar V_1^E = 0.36[-4.0 + 0.72] = -1.181, \qquad \bar V_2^E = 0.16[-4.0 - 1.68] = -0.909$$
$$V = 0.4(58.0) + 0.6(18.07) - 1.018 = 33.02\ \mathrm{cm^3/mol}$$
$$\bar V_1 = 58.0 - 1.181 = 56.82, \qquad \bar V_2 = 18.07 - 0.909 = 17.16\ \mathrm{cm^3/mol}$$
   Summability check: 0.4(56.82) + 0.6(17.16) = 33.02 ✓.

**Result:** $\bar V_1^E = x_2^2[-4.0 + 1.2(3x_1 - x_2)]$, $\bar V_2^E = x_1^2[-4.0 - 1.2(3x_2 - x_1)]$; infinite-dilution values −5.2 and −2.8 cm³/mol. At $x_1$ = 0.4: V = 33.02, $\bar V_1$ = 56.82 and $\bar V_2$ = 17.16 cm³/mol.`,
        answer: String.raw`V̄₁ᴱ = x₂²[−4.0 + 1.2(3x₁ − x₂)], V̄₂ᴱ = x₁²[−4.0 − 1.2(3x₂ − x₁)]; V̄₁ᴱ,∞ = a − b = −5.2, V̄₂ᴱ,∞ = a + b = −2.8 cm³/mol; Gibbs–Duhem satisfied identically; at x₁ = 0.4: Vᴱ = −1.018, V = 33.02, V̄₁ = 56.82, V̄₂ = 17.16 cm³/mol.` } ] },
    { id: "practice-solution-theory-P17", q: 17, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P17", label: "", marks: "(15)", topic: "solution-theory",
        sub: "Are H̄₁ − H₁ = 3200x₂² and H̄₂ − H₂ = 2400x₁² thermodynamically consistent?", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style Gibbs–Duhem consistency question (cf. SVNA Problem 11.14 and the Gibbs–Duhem slides of Lec 2)`,
        text: String.raw`A student correlates enthalpy data for a binary liquid mixture at constant T and P (J mol⁻¹) by

$$\bar H_1 - H_1 = 3200x_2^2, \qquad \bar H_2 - H_2 = 2400x_1^2$$

(i) Test whether these expressions are thermodynamically consistent.

(ii) If they are not, find the restriction on the coefficients for expressions of the form $\bar H_1 - H_1 = ax_2^2$, $\bar H_2 - H_2 = bx_1^2$, and give the corresponding $\Delta H$ (heat of mixing) and its maximum value for the consistent choice $a = b$ = 2800 J mol⁻¹.`,
        solution: String.raw`1. **Test: Gibbs–Duhem** at constant T and P, $x_1\,d\bar H_1 + x_2\,d\bar H_2 = 0$. Since $H_1$ and $H_2$ are constants:
$$x_1\frac{d\bar H_1}{dx_1} + x_2\frac{d\bar H_2}{dx_1} = x_1(-2ax_2) + x_2(2bx_1) = 2x_1x_2(b - a)$$
   With a = 3200 and b = 2400 this is $-1600x_1x_2 \ne 0$ for $0 < x_1 < 1$. **The expressions are inconsistent.**

2. **(ii) Restriction:** consistency requires $2x_1x_2(b - a) = 0$ for all $x_1$, so **a = b**. Only the symmetric pair is consistent.

3. **Heat of mixing** (summability): $\Delta H = H - \sum x_iH_i = x_1(\bar H_1 - H_1) + x_2(\bar H_2 - H_2)$.
   With a = b:
$$\Delta H = ax_1x_2^2 + ax_2x_1^2 = ax_1x_2(x_1 + x_2) = ax_1x_2$$
   Cross-check by the reverse route: $\Delta H = ax_1x_2$ gives $\bar H_1 - H_1 = \Delta H + x_2\,d\Delta H/dx_1 = ax_1x_2 + x_2a(1 - 2x_1) = ax_2^2$ ✓.

4. **Maximum for a = 2800 J/mol:** $d(ax_1x_2)/dx_1 = a(1 - 2x_1) = 0$ at $x_1$ = 0.5:
$$\Delta H_{max} = 2800(0.25) = 700\ \mathrm{J\,mol^{-1}}\ (\text{endothermic mixing})$$
   Infinite-dilution partial enthalpies: $\bar H_1^\infty - H_1 = \bar H_2^\infty - H_2$ = 2800 J/mol.

5. **Lesson.** Partial properties cannot be fitted independently. One must fit the solution property (ΔH or $H^E$) and derive both partials from it, e.g. as in 2016-17 Q1(c) and 2023-24 Q5(b).

**Result:** (i) inconsistent: Gibbs–Duhem gives $-1600x_1x_2 \ne 0$. (ii) Requires a = b; then ΔH = $ax_1x_2$, with a maximum of 700 J/mol at $x_1$ = 0.5 for a = 2800.`,
        answer: String.raw`x₁dH̄₁/dx₁ + x₂dH̄₂/dx₁ = 2x₁x₂(b − a) = −1600x₁x₂ ≠ 0 ⇒ inconsistent; consistency needs a = b, then ΔH = ax₁x₂ (max a/4 = 700 J/mol at x₁ = 0.5 for a = 2800).` } ] },
    { id: "practice-solution-theory-P18", q: 18, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P18", label: "", marks: "(20)", topic: "solution-theory",
        sub: "Pure CO₂ at 300 K and 50 bar: Z, φ and f from the Redlich/Kwong equation vs. virial", type: "numerical", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`Exam-style problem in the format of 2020-21 Q4(b) (RK equations supplied), applied to a pure gas; constants from SVNA Table B.1`,
        text: String.raw`Using the Redlich/Kwong equation of state, determine Z, the fugacity coefficient and the fugacity of pure CO₂ vapor at 300 K and 50 bar. Compare with the generalized second-virial correlation. Use

$$Z = 1 + \beta - q\beta\frac{Z - \beta}{Z(Z + \beta)}, \qquad \ln\phi = Z - 1 - \ln(Z - \beta) - qI, \qquad I = \ln\frac{Z + \beta}{Z}$$

with $\beta = bP/RT$, $q = a/bRT$, $a = 0.42748\,T_r^{-1/2}R^2T_c^2/P_c$, $b = 0.08664\,RT_c/P_c$. (CO₂: $T_c$ = 304.2 K, $P_c$ = 73.83 bar, ω = 0.224.)`,
        solution: String.raw`**Given:** T = 300 K, P = 50 bar; R = 83.14 cm³·bar/(mol·K).

**Assumptions:** RK as given. CO₂ at 300 K has a vapour pressure of about 67 bar, so at 50 bar it is a vapour, and the largest root of the cubic is used. (Here the cubic has only one real root.)

1. **Parameters:** $T_r$ = 300/304.2 = 0.9862, $\alpha = T_r^{-1/2}$ = 1.0070.
$$a = 0.42748(1.0070)\frac{83.14^2(304.2)^2}{73.83} = 3.729\times10^6\ \mathrm{bar\,cm^6\,mol^{-2}}, \qquad b = 0.08664\frac{83.14(304.2)}{73.83} = 29.68\ \mathrm{cm^3\,mol^{-1}}$$
$$\beta = \frac{29.68(50)}{83.14(300)} = 0.05950, \qquad q = \frac{3.729\times10^6}{29.68(83.14)(300)} = 5.038$$

2. **Z (vapour root):** iterate $Z = 1 + \beta - q\beta(Z - \beta)/[Z(Z + \beta)]$ from Z = 1. It converges to **Z = 0.6972**.

3. **Fugacity coefficient:**
$$I = \ln\frac{0.6972 + 0.0595}{0.6972} = 0.08189$$
$$\ln\phi = (0.6972 - 1) - \ln(0.6972 - 0.0595) - 5.038(0.08189) = -0.3028 + 0.4499 - 0.4126 = -0.2655$$
$$\phi = 0.767, \qquad f = 0.767(50) = 38.3\ \mathrm{bar}$$

4. **Generalized virial:** $B^0$ = −0.3485, $B^1$ = −0.0433, $P_r$ = 0.677.
$$\ln\phi = \frac{0.677}{0.9862}(-0.3485 + 0.224(-0.0433)) = -0.2459 \;\Rightarrow\; \phi = 0.782, \qquad Z = 1 + \frac{P_r}{T_r}(B^0 + \omega B^1) = 0.754$$

5. **Comparison.** The virial results (Z = 0.754, φ = 0.782) are higher than RK (Z = 0.697, φ = 0.767). At $T_r$ ≈ 0.99 and $P_r$ ≈ 0.68, close to saturation, the two-term virial equation is near the limit of its validity. A cubic EOS represents this dense vapour better (the experimental Z is about 0.71).

**Result:** RK gives Z = 0.697, φ = 0.767, f = 38.3 bar; the virial correlation gives Z = 0.754, φ = 0.782.`,
        answer: String.raw`RK: a = 3.729×10⁶ bar cm⁶/mol², b = 29.68 cm³/mol, β = 0.0595, q = 5.038 ⇒ Z = 0.697, I = 0.0819, ln φ = −0.2655 ⇒ φ = 0.767, f = 38.3 bar; virial: Z = 0.754, φ = 0.782 (less reliable near saturation).` } ] },
    { id: "practice-solution-theory-P19", q: 19, section: "S", compulsory: false, stem: String.raw``,
      parts: [ { id: "practice-solution-theory-P19", label: "", marks: "(15)", topic: "solution-theory",
        sub: "Ideal solution: partial properties and the property changes of mixing", type: "derivation", syllabus: "in", repeats: [],
        origin: "potential", ref: String.raw`SVNA §11.8 (ideal solution) and §11.9 (excess properties); Lec 2 slides 19–24 (ideal-gas analogue)`,
        text: String.raw`Define an ideal solution through the chemical potential $\mu_i^{id} = G_i + RT\ln x_i$. Derive expressions for $\bar V_i^{id}$, $\bar S_i^{id}$ and $\bar H_i^{id}$, and show that for an ideal solution $\Delta V = \Delta H = 0$, $\Delta S = -R\sum x_i\ln x_i$ and $\Delta G = RT\sum x_i\ln x_i$. What is the Lewis–Randall rule, and how are excess properties defined relative to the ideal solution?`,
        solution: String.raw`1. **Definition** (by analogy with the ideal-gas mixture, $\mu_i^{ig} = G_i^{ig} + RT\ln y_i$):
$$\mu_i^{id} = \bar G_i^{id} = G_i(T, P) + RT\ln x_i$$
   where $G_i$ is the molar Gibbs energy of **pure i in its real state** (liquid or gas) at the solution T and P.

2. **Partial volume:** $\bar V_i = (\partial\bar G_i/\partial P)_{T,x}$, and $\ln x_i$ does not depend on P:
$$\bar V_i^{id} = \left(\frac{\partial G_i}{\partial P}\right)_T = V_i$$

3. **Partial entropy:** $\bar S_i = -(\partial\bar G_i/\partial T)_{P,x}$:
$$\bar S_i^{id} = S_i - R\ln x_i$$

4. **Partial enthalpy:** $\bar H_i = \bar G_i + T\bar S_i$:
$$\bar H_i^{id} = G_i + RT\ln x_i + TS_i - RT\ln x_i = H_i$$

5. **Summability** ($M = \sum x_i\bar M_i$):
$$V^{id} = \sum x_iV_i,\quad H^{id} = \sum x_iH_i,\quad S^{id} = \sum x_iS_i - R\sum x_i\ln x_i,\quad G^{id} = \sum x_iG_i + RT\sum x_i\ln x_i$$
   With $\Delta M \equiv M - \sum x_iM_i$:
$$\Delta V^{id} = 0, \qquad \Delta H^{id} = 0, \qquad \Delta S^{id} = -R\sum x_i\ln x_i > 0, \qquad \Delta G^{id} = RT\sum x_i\ln x_i < 0$$

6. **Lewis–Randall rule.** From $\mu_i = \Gamma_i(T) + RT\ln\hat f_i$ and $G_i = \Gamma_i(T) + RT\ln f_i$, the definition becomes
$$\hat f_i^{id} = x_if_i \qquad (\text{equivalently } \hat\phi_i^{id} = \phi_i)$$
   In an ideal solution, the fugacity of each species is proportional to its mole fraction, with the pure-species fugacity at the same T and P as the constant.

7. **Excess properties:** $M^E \equiv M - M^{id}$ (the real solution minus the ideal solution at the same T, P, x), e.g. $G^E = G - G^{id}$. Hence
$$\Delta M = M^E + \Delta M^{id}: \quad \Delta V = V^E,\quad \Delta H = H^E,\quad \Delta G = G^E + RT\sum x_i\ln x_i$$
   and $\bar G_i^E = RT\ln\gamma_i$, with $\gamma_i = \hat f_i/(x_if_i)$.
   Contrast residual properties, $M^R = M - M^{ig}$, which measure departure from the ideal **gas** at the same T and P.

**Real behaviour:** benzene/toluene and n-hexane/n-heptane are nearly ideal solutions. Methanol/water ($\Delta V < 0$, $\Delta H < 0$) and ethanol/hexane ($\Delta H > 0$) are not.`,
        answer: String.raw`μᵢⁱᵈ = Gᵢ + RT ln xᵢ ⇒ V̄ᵢⁱᵈ = Vᵢ, S̄ᵢⁱᵈ = Sᵢ − R ln xᵢ, H̄ᵢⁱᵈ = Hᵢ ⇒ ΔV = ΔH = 0, ΔS = −RΣxᵢ ln xᵢ, ΔG = RTΣxᵢ ln xᵢ; Lewis–Randall f̂ᵢⁱᵈ = xᵢfᵢ; Mᴱ = M − Mⁱᵈ (ΔH = Hᴱ, ΔV = Vᴱ, Ḡᵢᴱ = RT ln γᵢ).` } ] }
  ]
});
