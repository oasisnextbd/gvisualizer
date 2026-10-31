/* ChE 303 preparation checklist: skills per topic, where to read, and which question parts test each skill.
   Each question part is assigned to the first skill in its topic whose pattern matches its title (sub). */
QB.CHECK={
  slides:{
    '01':'Slides 1 · Introduction', '02':'Slides 2 · VLE', '03':'Slides 3 · Flash distillation',
    '3A':'Slides 3 · Fractional distillation Part A', '4B':'Slides 4 · Fractional distillation Part B', '05':'Slides 5 · Fractional distillation Part C',
    '06':'Slides 6 · Staged column design', 'BD':'Batch distillation slides', 'AS':'Absorption and stripping slides',
    'IE':'Immiscible extraction slides', 'PM':'Partially miscible extraction slides', 'WL':'Washing and leaching slides'
  },
  topics:{
    'intro':{slides:['01'],books:['Wankat ch. 1'],skills:[
      {id:'sep',name:'Separation processes, equilibrium-stage idea, industry examples',re:/./}]},
    'vle':{slides:['02'],books:['Wankat ch. 1–2'],skills:[
      {id:'eq',name:'Equilibrium criteria, phase rule, Raoult vs Henry',re:/equilibrium|phase rule|Raoult|Henry/i},
      {id:'kval',name:'DePriester K-values: bubble/dew point of multicomponent mixtures',re:/DePriester|bubble|dew|K\b|C4/i},
      {id:'diag',name:'T-x-y, y-x and H-x diagrams; lever rule; azeotropes; constant α',re:/./}]},
    'flash':{slides:['03'],books:['Wankat ch. 2'],skills:[
      {id:'sketch',name:'Flash system schematic: pump, heater, valve, drum, demister',re:/schematic|sketch|system|process/i},
      {id:'drum',name:'Flash drum sizing and reusing existing drums',re:/sizing|size|existing|height|reusing/i},
      {id:'binary',name:'Binary flash: operating line, McCabe–Thiele, α, H-x chart, drums in series',re:/./}]},
    'column-balances':{slides:['3A'],books:['Wankat ch. 3'],skills:[
      {id:'basic',name:'Reflux and boilup purposes; external mass balances (D, B)',re:/reflux and boilup|purpose|constant P|derive D/i},
      {id:'hx',name:'External energy balances with the H-x chart: QC, QR, direct steam, no condenser',re:/./}]},
    'mccabe-thiele':{slides:['4B'],books:['Wankat ch. 4'],skills:[
      {id:'cmo',name:'CMO: statement, derivation, checks; operating lines',re:/CMO|operating and equilibrium|short notes|Consistency/i},
      {id:'qline',name:'Feed quality q and feed-line slopes',re:/feed.line|feed line/i},
      {id:'mt',name:'Lewis and McCabe–Thiele stepping, optimum feed, effect of R and q',re:/./}]},
    'advanced-distillation':{slides:['05'],books:['Wankat ch. 4'],skills:[
      {id:'murphree',name:'Murphree efficiency (EMV > 1), stepping with efficiency',re:/Murphree|E_MV|efficiency/i},
      {id:'limits',name:'Total reflux, minimum reflux, optimum reflux, off-spec remedies',re:/reflux|limit|purity|remed/i},
      {id:'steam',name:'Open steam and partial condensers',re:/open steam|steam|partial condenser/i},
      {id:'multi',name:'Two feeds and side streams: section flows, operating lines, stepping',re:/./}]},
    'batch':{slides:['BD'],books:['Wankat ch. 9'],skills:[
      {id:'theory',name:'Batch vs continuous: advantages, industries, energy',re:/vs continuous|advantage|energy|industr|ideas|valid/i},
      {id:'rayleigh',name:'Rayleigh equation: derivation and simple batch numericals',re:/Rayleigh|simple/i},
      {id:'multi',name:'Multistage batch: constant reflux and variable reflux (constant xD)',re:/./}]},
    'column-design':{slides:['06'],books:['Wankat ch. 10'],skills:[
      {id:'trays',name:'Sieve vs valve vs bubble-cap trays; turndown; efficiency ranking',re:/sieve vs|valve|turndown|ranking|bubble-cap/i},
      {id:'layout',name:'Downcomers, weirs, flow patterns, tray geometry, pressure heads, regimes',re:/downcomer|weir|flow.pattern|geometry|pressure head|regime|support|hole|area|performance|Significance/i},
      {id:'size',name:'Column diameter (flooding) and height; O\'Connell efficiency; tray spacing',re:/./}]},
    'absorption':{slides:['AS'],books:['Wankat ch. 12'],skills:[
      {id:'theory',name:'Absorber vs stripper, gas treatment plant, assumptions, limiting conditions',re:/vs|plant|assumption|follow|reversing|coupled|types|limiting|straight|controls|effect of/i},
      {id:'kremser',name:'Kremser equation: derivation, assumptions, multisolute, numericals',re:/Kremser|multisolute/i},
      {id:'conc',name:'Concentrated absorbers in mole ratios, (L/G)min, McCabe–Thiele stepping',re:/./}]},
    'immiscible-extraction':{slides:['IE'],books:['Wankat ch. 13'],skills:[
      {id:'kremser',name:'Countercurrent Kremser and McCabe–Thiele extraction (incl. multisolute)',re:/Kremser|countercurrent|benzoic|linoleic|temperature-swing/i},
      {id:'theory',name:'Solvent selection, extractor types and selection, definitions',re:/solvent|extractor|equipment|propert|definition/i},
      {id:'cross',name:'Cross-flow extraction',re:/./}]},
    'partial-extraction':{slides:['PM'],books:['Wankat ch. 13'],skills:[
      {id:'single',name:'Triangular diagrams, single stage and cross-flow, ternary types',re:/single|mixer|cross|types/i},
      {id:'delta',name:'Difference point Δ: location methods, R1 = E0 case, two feeds',re:/difference|Δ|delta|two.feed|R1 = E0/i},
      {id:'cc',name:'Countercurrent stepping on the triangle: N, Smin, exit compositions',re:/./}]},
    'leaching':{slides:['WL'],books:['Wankat ch. 14'],skills:[
      {id:'theory',name:'Washing vs leaching; constant-flow assumptions; effective equilibrium constant',re:/vs|assumption|effective|faulty|classify|constant|underflow|efficiency|equilibrium.stage|solids/i},
      {id:'num',name:'Washing and leaching numericals: Kremser and McCabe–Thiele',re:/./}]},
    'other':{slides:[],books:['Wankat (other chapters)'],note:'Not in the current slides.',skills:[
      {id:'other',name:'Topics outside the current slides',re:/./}]}
  }
};
