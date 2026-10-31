QB.paper({ year: "Practice", set: "Introduction & separation processes", date: "", marks: 0, practice: true,
  rules: String.raw`Mass transfer and separation processes: why separations matter, where they are used (including Bangladesh industry), separating agents, the equilibrium-stage idea, and basic separator material balances. The introduction slides contain no worked problems, so all items are exam-style questions.`,
  questions: [
    { id: "practice-intro-P1", q: 1, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-intro-P1a", label: "(a)", marks: "8", topic: "intro",
          sub: "What mass transfer is; the three transport phenomena", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 01 (Introduction), "What sets Chemical Engineering apart?", "Mass Transfer"`,
          text: String.raw`Define mass transfer and state what drives it. Name the three transport phenomena and give three everyday examples of mass transfer, saying in each what moves and why.`,
          solution: String.raw`**Mass transfer** is the movement of a chemical species relative to the mixture, driven by a difference (gradient) in its chemical potential. It deals with the rate, direction, mechanism and limit of that movement within and between phases, and with engineering it into useful separations. In short: one species moves selectively because something is unequal, until the inequality disappears (equilibrium, $\mu_i$ equal everywhere).

**Three transport phenomena:** momentum transfer (driven by a velocity gradient), heat transfer (temperature gradient) and mass transfer (concentration or chemical-potential gradient).

**Everyday examples:**

| example | what moves | driving force |
|---|---|---|
| brewing coffee | soluble flavor compounds from grounds into hot water (leaching) | concentration difference between solid and water |
| drying wet clothes | water from the fabric into the air | water vapor pressure at the cloth > partial pressure in air |
| fizzing soft drink | dissolved CO₂ from liquid to air | CO₂ supersaturated after the pressure is released |
| sugar dissolving in tea | sugar from crystal into the liquid | solubility limit vs actual concentration |`,
          answer: String.raw`Movement of a species relative to the mixture driven by a chemical-potential gradient; momentum, heat and mass transfer; e.g. coffee brewing, drying clothes, CO₂ leaving a soft drink.` },
        { id: "practice-intro-P1b", label: "(b)", marks: "7", topic: "intro",
          sub: "Why separation processes matter: cost and energy", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 01, "Why Separation Processes?"`,
          text: String.raw`Why are separation processes said to sit at the heart of the chemical industry? Support your answer with figures for capital cost and energy use.`,
          solution: String.raw`- Raw materials are mixtures and products must be pure: crude oil is worth little until it is separated into LPG, petrol, kerosene/jet fuel, diesel and feedstocks for plastics.
- Separations fix **product purity**, **process yield** (recovery of valuable material and recycle of unreacted feed) and therefore **plant economics**.
- Typically **40–70% of the capital cost** of a chemical plant is separation equipment.
- About **50% of industrial energy** use goes into separating mixtures (distillation alone is a large share).
- No chemical, pharmaceutical, food or materials industry runs without them, and environmental duties (removing CO₂, H₂S, SOₓ, volatile organics) are also separations.

So small improvements in separation design (fewer stages, lower reflux, better solvent) give large savings.`,
          answer: String.raw`They set purity, yield and cost: 40–70% of plant capital and about half of industrial energy go to separations.` },
        { id: "practice-intro-P1c", label: "(c)", marks: "10", topic: "intro",
          sub: "Block diagram of a chemical plant: where separators sit", type: "sketch", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 01 (plant block diagram: separators, reactor, recycle); Wankat ch. 1`,
          text: String.raw`Draw a block diagram of a typical chemical plant showing the reactor, the separators and the recycle, and explain the job of each separation step.`,
          solution: String.raw`![Generic chemical plant: separators before and after the reactor, with recycle](fig/practice-intro-P1-sol.svg)

1. **Feed separation / purification** (before the reactor): removes impurities, water or catalyst poisons from the raw materials, e.g. sweetening natural gas before ammonia synthesis.
2. **Reactor:** converts reactants to products; conversion per pass is usually incomplete and side reactions occur.
3. **Product separation train** (after the reactor): splits the reactor effluent into the main product at specification, by-products and waste streams, usually by distillation, absorption, extraction or crystallization.
4. **Recycle:** unreacted feed recovered in the separation train is sent back to the reactor. This raises the overall yield but means the separators must handle the recycle flow too.

The diagram shows why separation equipment dominates plant cost: there are usually several separators for each reactor.`,
          answer: String.raw`Raw materials → feed purification → reactor → product separation train → pure products, with unreacted feed recycled to the reactor.` },
        { id: "practice-intro-P1d", label: "(d)", marks: "10", topic: "intro",
          sub: "Equilibrium-stage operations covered in the course", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 01, "Course at a Glance", "Course Outcomes"`,
          text: String.raw`List the equilibrium-stage separation operations studied in this course. For each, state the phases contacted, the equilibrium that governs it and the property difference that is exploited.`,
          solution: String.raw`| operation | phases | equilibrium | property exploited |
|---|---|---|---|
| flash distillation | vapor–liquid, one stage | VLE | volatility (vapor pressure) |
| column (fractional) distillation | vapor–liquid, many countercurrent stages | VLE | volatility; reflux and boilup |
| batch distillation | vapor–liquid, still plus stages | VLE | volatility, time-varying |
| absorption | gas–liquid (solvent added) | gas solubility (Henry's law) | solubility of the solute in the solvent |
| stripping | liquid–gas (stripping gas added) | gas solubility | low solubility at high T / low p |
| liquid–liquid extraction | two liquid phases | LLE (distribution coefficient, ternary diagram) | different solubility in two immiscible or partially miscible solvents |
| washing and leaching | solid–liquid | SLE / solution held in the solids | solubility of the solute; dilution of the adhering solution |

All are treated as **equilibrium stages**: phases are contacted, reach (or approach) equilibrium, and are separated. Stage counts come from mass balances plus equilibrium (McCabe–Thiele, Kremser, triangular diagrams), and stage efficiencies convert them to real trays; column diameter and height come from hydraulics (course outcomes CO4 and CO5).`,
          answer: String.raw`Flash, column and batch distillation (VLE), absorption/stripping (gas solubility), extraction (LLE), washing/leaching (SLE), all treated as equilibrium stages.` } ] },

    { id: "practice-intro-P2", q: 2, section: "F", compulsory: false, stem: String.raw``,
      parts: [
        { id: "practice-intro-P2a", label: "(a)", marks: "15", topic: "intro",
          sub: "Mass transfer operations in industry and in Bangladesh", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 01, "Mass Transfer in Chemical Process Industries" and "Bangladesh Context"`,
          text: String.raw`For each of the following, name the main mass transfer operation and what is transferred: (i) crude oil refining, (ii) natural gas processing at a Bangladesh gas field, (iii) a urea/ammonia fertilizer plant (e.g. KAFCO), (iv) recovering an active compound in a pharmaceutical plant, (v) producing ethanol or flavors in food and beverage plants, (vi) removing volatile organics from contaminated groundwater, (vii) bioprocessing.`,
          solution: String.raw`| industry | MT operation | what is transferred |
|---|---|---|
| (i) petroleum refining | distillation (crude and vacuum columns) | hydrocarbon fractions: LPG, naphtha, kerosene, diesel, residue |
| (ii) natural gas processing (e.g. SGFL, Bakhrabad) | absorption into amine or glycol, dehydration | CO₂ and H₂S (acid gases), water vapor |
| (iii) fertilizer plants (KAFCO, BCIC) | absorption (and stripping for solvent regeneration) | NH₃ into water, CO₂ removal from synthesis gas, SO₃ in acid plants |
| (iv) pharmaceuticals | liquid–liquid extraction, crystallization | the active compound from a broth or reaction mixture into a solvent |
| (v) food and beverage | distillation, drying, extraction | ethanol, moisture, flavor and aroma compounds |
| (vi) water treatment | air stripping, adsorption | volatile organics from water into air or onto carbon |
| (vii) bioprocessing | membrane separation, gas–liquid transfer | O₂ and nutrients to cells, products out |

The textile industry (dyeing, drying) is another local example: dye uptake by fibers and water removal in dryers are both mass transfer.`,
          answer: String.raw`Refining: distillation; gas: absorption of CO₂/H₂S (and dehydration); fertilizer: NH₃/CO₂ absorption; pharma: extraction/crystallization; food: distillation/drying/extraction; water: stripping/adsorption; bio: membranes, O₂ transfer.` },
        { id: "practice-intro-P2b", label: "(b)", marks: "10", topic: "intro",
          sub: "Energy-separating vs mass-separating agents", type: "theory", syllabus: "partial", repeats: [],
          origin: "potential", ref: String.raw`Wankat 3e, ch. 1 (separation concepts); not stated explicitly in the slides`,
          text: String.raw`What is a separating agent? Classify flash distillation, column distillation, absorption, stripping, extraction and leaching by whether they use an energy-separating agent (ESA) or a mass-separating agent (MSA), and give one advantage and one drawback of each kind.`,
          solution: String.raw`> The slides list the operations; the ESA/MSA classification is from Wankat ch. 1.

A **separating agent** is what is added to a feed to create a second phase in which the components distribute differently.

| operation | agent | type |
|---|---|---|
| flash distillation | heat (or pressure reduction) | ESA |
| column distillation | heat in the reboiler, removed in the condenser | ESA |
| absorption | liquid solvent | MSA |
| stripping | stripping gas or steam (plus heat) | MSA |
| liquid–liquid extraction | extracting solvent | MSA |
| leaching / washing | solvent (water, hexane …) | MSA |

- **ESA** (energy): nothing new is added to the products, so no solvent recovery step is needed; but the energy cost can be large, and it fails for azeotropes or heat-sensitive materials.
- **MSA** (mass): can exploit chemical differences (polarity, solubility) and work at mild temperatures; but the agent must be recovered and recycled (an extra separation, usually distillation or stripping), and some is lost to the products.`,
          answer: String.raw`Distillation and flash use energy (ESA); absorption, stripping, extraction and leaching add a mass-separating agent (MSA) that must later be recovered.` },
        { id: "practice-intro-P2c", label: "(c)", marks: "10", topic: "intro",
          sub: "The equilibrium stage and the three equilibria", type: "theory", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Slides 02 ("What Does Equilibrium Actually Mean?", "Chemical Potential"); Slides 03 (flash as a single stage)`,
          text: String.raw`What is an equilibrium stage? State the three conditions of phase equilibrium and the criterion in terms of chemical potential. Why is a flash drum treated as one equilibrium stage, and why are real stages less than ideal?`,
          solution: String.raw`- An **equilibrium (ideal) stage** is a unit in which the phases are mixed long enough to reach equilibrium and are then separated completely, so the leaving streams are in equilibrium with each other.
- **Three equilibria:**
  - mechanical: no net force, equal pressure in both phases;
  - thermal: no net heat flow, equal temperature;
  - chemical (phase): no net transfer of any species, $\mu_i^L = \mu_i^V$ for every species $i$.
- At constant $T$ and $p$ the whole system has $dG = 0$; if $\mu_i^L \neq \mu_i^V$, species $i$ moves to the phase of lower $\mu$ until they are equal ($\mu_i = (\partial G/\partial n_i)_{T,p}$).
- **Flash drum:** the feed flashes violently at the valve, the phases are well mixed and have time to equilibrate, and the drum (with a demister) separates them; so vapor and liquid leave at the same $T$ and $p$ with compositions on one tie line.
- **Real stages** fall short because contact time and interfacial area are finite (mass-transfer resistance), mixing is incomplete and some liquid is entrained in the vapor. This is handled with stage efficiencies (Murphree, overall).`,
          answer: String.raw`A stage whose outlet streams are in equilibrium; equal p, equal T and equal μᵢ in all phases; a flash drum approximates one; real trays need efficiencies.` } ] },

    { id: "practice-intro-P3", q: 3, section: "F", compulsory: false,
      stem: String.raw`A separator receives 1000 kmol/h of a benzene–toluene feed with 40 mol% benzene. The top product (distillate) must be 95 mol% benzene and must recover 90% of the benzene fed.`,
      parts: [
        { id: "practice-intro-P3a", label: "(a)", marks: "10", topic: "intro",
          sub: "Separator balance from purity and recovery specifications", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Own numbers; prerequisite material balances (Slides 01)`,
          text: String.raw`Find the distillate and bottoms flow rates, the bottoms composition and the recovery of toluene in the bottoms.`,
          solution: String.raw`**Given:** $F = 1000$ kmol/h, $z = 0.40$; $x_D = 0.95$; benzene recovery in D = 0.90. **Assumptions:** steady state, no reaction.

1. Benzene to the distillate: $Dx_D = 0.90(1000)(0.40) = 360$ kmol/h.

2. Distillate rate: $D = 360/0.95 = 378.9$ kmol/h (toluene in D = 18.9 kmol/h).

3. Bottoms: $B = F - D = 621.1$ kmol/h; benzene in B = 400 − 360 = 40 kmol/h, so
$$x_B = \frac{40}{621.1} = 0.0644$$

4. Toluene recovery in the bottoms: $(600 - 18.9)/600 = 0.968$.

**Check:** $378.9(0.95) + 621.1(0.0644) = 360 + 40 = 400 = Fz$ ✓`,
          answer: String.raw`D = 378.9 kmol/h, B = 621.1 kmol/h, $x_B = 0.064$; toluene recovery in the bottoms 96.8%.` },
        { id: "practice-intro-P3b", label: "(b)", marks: "10", topic: "intro",
          sub: "Effect of a tighter purity at fixed recovery; why two specifications", type: "numerical", syllabus: "in", repeats: [],
          origin: "potential", ref: String.raw`Own numbers`,
          text: String.raw`The distillate purity is raised to 99 mol% at the same 90% benzene recovery. Repeat (a). Why must a separation be specified by both purity and recovery (or two equivalent numbers)?`,
          solution: String.raw`1. $Dx_D = 360$ kmol/h, so $D = 360/0.99 = 363.6$ kmol/h (toluene in D = 3.6 kmol/h).

2. $B = 636.4$ kmol/h; benzene in B is still 40 kmol/h, so $x_B = 40/636.4 = 0.0629$.

3. Toluene recovery in the bottoms: $(600 - 3.6)/600 = 0.994$.

**Why two specifications:** for a binary split the external balances $F = D + B$ and $Fz = Dx_D + Bx_B$ have four unknowns ($D$, $B$, $x_D$, $x_B$) once the feed is known, so two must be specified. Purity alone does not fix how much product is made; recovery alone does not fix its quality. Tightening either one makes the separation harder (more stages or more reflux), which the external balance cannot show; that comes from the stage-by-stage design.`,
          answer: String.raw`D = 363.6, B = 636.4 kmol/h, $x_B = 0.063$, toluene recovery 99.4%; two specs are needed because the binary balance has two degrees of freedom.` } ] }
  ] });
