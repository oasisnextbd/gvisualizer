/* ChE 313 preparation checklist: skills per topic, where to read, and which question parts test each skill.
   Each question part is assigned to the first skill in its topic whose pattern matches its title (sub). */
QB.CHECK={
  slides:{
    'RF':'Refrigeration and liquefaction slides (Dr. Kawnish Kirtania) + Chapter 9 class notes',
    'V1':'Lec 1: VLE (Faisal Ahmed)', 'V2':'Lec 2: solution thermodynamics theory (Faisal Ahmed)',
    'SA':'Chapter 12 solution thermodynamics: applications (Kaniz Fatema 2022, Faisal Ahmed) + Chapter 12 class notes',
    'RE':'Chemical reaction equilibria, parts 1 and 2 (Dr. Kawnish Kirtania)', 'PE':'Topics in phase equilibria (Dr. Kawnish Kirtania)'
  },
  topics:{
    'refrigeration':{slides:['RF'],books:['SVNA ch. 9','Çengel & Boles ch. 11'],skills:[
      {id:'carnot',name:'Carnot refrigerator and heat pump: COP, minimum power',re:/Carnot|heat.pump|minimum power|COP/i},
      {id:'vcr',name:'Vapour-compression cycle on T–S and ln P–H diagrams; circulation rate; compressor efficiency',re:/vapou?r.compression|circulation|R-?134a|tetrafluoro|ammonia|ln ?P|P–H|T–S/i},
      {id:'absorption',name:'Absorption refrigeration: cycle, schematic, Q_H/Q_C',re:/absorption/i},
      {id:'refrigerant',name:'Choice of refrigerant; CFC phase-out and alternatives; cascade and multistage',re:/refrigerant|CFC|cascade|multistage/i},
      {id:'liquefaction',name:'Liquefaction: Linde and Claude processes, fraction liquefied',re:/./}]},
    'vle-intro':{slides:['V1'],books:['SVNA ch. 10'],skills:[
      {id:'raoult',name:'Raoult and modified Raoult law; Henry law; bubble/dew P and T',re:/Raoult|Henry|bubble|dew|BUBL|DEW|azeotrope/i},
      {id:'flash',name:'Flash calculations (Rachford–Rice)',re:/flash/i},
      {id:'phase',name:'Phase diagrams: Pxy, Txy, P–T envelopes, retrograde condensation',re:/./}]},
    'solution-theory':{slides:['V2'],books:['SVNA ch. 11'],skills:[
      {id:'partial',name:'Partial molar properties, Gibbs–Duhem, infinite dilution',re:/partial|Gibbs.Duhem|infinite/i},
      {id:'fugacity',name:'Fugacity and fugacity coefficient: pure gas, pure liquid (Poynting), mixtures, virial/cubic EOS',re:/fugacity|Poynting|virial|residual/i},
      {id:'excess',name:'Ideal solution, excess properties, chemical potential and phase equilibrium',re:/./}]},
    'solution-applications':{slides:['SA'],books:['SVNA ch. 12'],skills:[
      {id:'fit',name:'Activity coefficients from VLE data; Margules/van Laar fit; P-x-y comparison; consistency',re:/data|fit|Margules|van Laar|consisten|correlat/i},
      {id:'gamma',name:'γ–φ formulation: bubble, dew and flash algorithms',re:/algorithm|γ.φ|gamma|block diagram/i},
      {id:'models',name:'G^E models: Wilson, NRTL, UNIFAC; ln γ from G^E',re:/excess Gibbs|Wilson|NRTL|G\^E|ln ?γ/i},
      {id:'mixing',name:'Property changes of mixing; heats of solution; H–x diagrams',re:/./}]},
    'reaction-equilibria':{slides:['RE'],books:['SVNA ch. 13'],skills:[
      {id:'extent',name:'Reaction coordinate; mole fractions for single and multiple reactions',re:/extent|coordinate|mole fraction/i},
      {id:'K',name:'K from ΔG°; effect of T (van \'t Hoff) and P; equilibrium conversions',re:/K\b|constant|conversion|temperature|pressure|van.t.Hoff/i},
      {id:'gmin',name:'Gibbs-energy minimization (Lagrange multipliers); phase rule for reacting systems',re:/minimi|Lagrange|λ|degrees of freedom|phase rule/i},
      {id:'fuel',name:'Fuel cells and multiphase reactions',re:/./}]},
    'phase-equilibria-topics':{slides:['PE'],books:['SVNA ch. 14'],skills:[
      {id:'stability',name:'Equilibrium and stability criteria',re:/stabilit/i},
      {id:'lle',name:'LLE and VLLE: diagrams, calculations',re:/LLE|liquid.liquid|VLLE/i},
      {id:'sle',name:'SLE, SVE (Poynting), osmotic equilibrium, adsorption',re:/./}]},
    'other':{slides:[],books:['Past papers only'],note:'not in the current slides',skills:[
      {id:'all',name:'Topics from older papers (evaporator energy balances, power cycles, earlier chapters)',re:/./}]}
  }
};
