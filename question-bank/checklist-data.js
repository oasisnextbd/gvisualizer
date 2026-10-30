/* CHE 301 preparation checklist: skills per topic, where to read, and which question parts test each skill.
   Each question part is assigned to the first skill in its topic whose pattern matches its title (sub). */
QB.CHECK={
  slides:{
    '01':'Slides 01 · Introduction', '02':'Slides 02 · Conduction (parts I and II)', '05':'Slides 05 · Convection',
    '06':'Slides 06 · Forced convection', '07':'Slides 07 · Natural convection', '08':'Slides 08 · Condensation and boiling',
    'HX1':'Heat Exchanger Part 1 slides', 'HX2':'Heat Exchanger Part 2 slides', '10':'Slides 10 · Evaporator'
  },
  topics:{
    'intro':{slides:['01'],books:['Holman ch. 1','Çengel ch. 1'],skills:[
      {id:'modes',name:'Modes of heat transfer, k ranges, units and short answers',re:/conductivity|short answers|mechanism|modes|units/i},
      {id:'combined',name:'Combined convection and radiation problems',re:/./}]},
    'conduction':{slides:['02'],books:['Holman ch. 2','Çengel ch. 2–3','Incropera ch. 3'],skills:[
      {id:'eqn',name:'General 3-D conduction equation and its special cases',re:/conduction equation|3-D/i},
      {id:'contact',name:'Contact resistance and R-value',re:/contact|R-value/i},
      {id:'cyl',name:'Cylinders and spheres: radial conduction, resistance and U',re:/cylinder|sphere|spherical|pipe|tank|LOX|LN/i},
      {id:'wall',name:'Plane and composite walls with resistance circuits (series and parallel)',re:/./}]},
    'insulation':{slides:['02'],books:['Holman ch. 2','Çengel ch. 3'],skills:[
      {id:'rc',name:'Critical radius derivation: cylinder (k/h) and sphere (2k/h)',re:/critical/i},
      {id:'app',name:'Insulated wires and pipes, superinsulation',re:/./}]},
    'generation':{slides:['02'],books:['Holman ch. 2','Çengel ch. 2–3','Incropera ch. 3'],skills:[
      {id:'gen',name:'Wall, cylinder and sphere with heat generation: centre temperature',re:/./}]},
    'convection-basics':{slides:['05'],books:['Holman ch. 5','Çengel ch. 6'],skills:[
      {id:'dimless',name:'Nu, Pr, St, Bi: physical meaning and typical values',re:/Nusselt|Prandtl|Stanton|Biot|Pr of|\bNu\b/i},
      {id:'bulk',name:'Bulk (mixing-cup) temperature, tube flow profiles, eddy viscosity',re:/./}]},
    'boundary-layer':{slides:['05'],books:['Holman ch. 5','Çengel ch. 6–7'],skills:[
      {id:'analogy',name:'Reynolds–Colburn analogy derivation and use',re:/analogy|colburn/i},
      {id:'integral',name:'Integral method: δ = 4.64√(νx/u∞) and the cubic profiles',re:/integral|4\.64|cubic|δ\(x\)/i},
      {id:'mixing',name:'Prandtl mixing length',re:/mixing length/i},
      {id:'layers',name:'Velocity and thermal boundary layers (δ vs δt)',re:/thermal boundary|hydrodynamic|velocity and thermal/i},
      {id:'plate',name:'Flat-plate numericals: δ, h, drag, orientation',re:/./}]},
    'forced-convection':{slides:['06'],books:['Holman ch. 6','Çengel ch. 7–8','Kern ch. 3'],skills:[
      {id:'distort',name:'Velocity-profile distortion on heating/cooling; liquid metals',re:/distort|velocity profile|property variation|liquid metal/i},
      {id:'db',name:'Dittus–Boelter and Sieder–Tate: range and use',re:/Dittus|Sieder|turbulent/i},
      {id:'annulus',name:'Annuli and non-circular ducts',re:/annulus|duct|concentric/i},
      {id:'cross',name:'Cross flow over cylinders and bars',re:/cross flow|Hilpert/i},
      {id:'lam',name:'Laminar tube flow and entrance region (Hausen, Nu = 3.66 / 4.36)',re:/./}]},
    'natural-convection':{slides:['07'],books:['Holman ch. 7','Çengel ch. 9'],skills:[
      {id:'gr',name:'Gr, Ra, Gr/Re²: meaning and natural vs forced criteria',re:/Grashof|Rayleigh|forced|criterion|mixed|velocity measurement/i},
      {id:'profiles',name:'Velocity and temperature profile sketches; plate orientation',re:/profile|boundary layer|facing|inclined/i},
      {id:'vert',name:'Vertical plates and cylinders (constant T and constant flux)',re:/vertical|flux|door|plate|average h/i},
      {id:'horiz',name:'Horizontal cylinders, spheres, blocks and ducts',re:/./}]},
    'condensation':{slides:['08'],books:['Holman ch. 9','Çengel ch. 10','Kern ch. 12'],skills:[
      {id:'nusselt',name:'Nusselt film-condensation derivation (vertical plate)',re:/Nusselt|analysis|Re-form/i},
      {id:'film',name:'Film vs dropwise, non-condensables, film Re, heat pipe',re:/dropwise|film Re|Reynolds number|heat pipe/i},
      {id:'bank',name:'Horizontal tubes and tube banks (N per column)',re:/bank|horizontal|tubes|condenser/i},
      {id:'vert',name:'Vertical plate and tube condensation numericals',re:/./}]},
    'boiling':{slides:['08'],books:['Holman ch. 9','Çengel ch. 10'],skills:[
      {id:'curve',name:'Boiling curve, regimes, burnout and Leidenfrost point',re:/curve|regime|Leidenfrost|burnout|h curves|Pool boiling;|mechanism/i},
      {id:'chf',name:'Critical heat flux (Zuber) and what affects it',re:/critical|CHF|q_max|Zuber|maximum flux/i},
      {id:'film',name:'Film boiling with radiation (the ¾ rule)',re:/film boiling|¾|3\/4/i},
      {id:'rohs',name:'Nucleate boiling with Rohsenow; excess temperature',re:/./}]},
    'heat-exchangers':{slides:['HX1','HX2'],books:['Kern ch. 5–6','Holman ch. 10','Çengel ch. 11'],skills:[
      {id:'lmtd',name:'LMTD derivation, assumptions, counterflow vs parallel flow',re:/LMTD|counter|parallel|co-current|correction factor/i},
      {id:'profiles',name:'Temperature profiles incl. phase change (F = 1)',re:/profile|F = 1|steam heater|boiling and condensing/i},
      {id:'de',name:'Equivalent diameters: annulus D_e, D′_e and shell-side pitch',re:/equivalent diameter|D_e|pitch/i},
      {id:'fouling',name:'Fouling and dirt factor, controlling resistance',re:/fouling|dirt|controlling/i},
      {id:'ntu',name:'ε–NTU rating and effectiveness limits',re:/NTU|effectiveness|isothermal stream/i},
      {id:'types',name:'Exchanger types and thermal design: plate-and-frame, compact, trombone cooler',re:/plate|compact|trombone|thermal design|equipment|pros/i},
      {id:'dp',name:'Double-pipe design: U_o, hairpins and pressure drops',re:/./}]},
    'shell-tube':{slides:['HX1','HX2'],books:['Kern ch. 7–8','TEMA standards'],skills:[
      {id:'design',name:'Design problems: assume U, size the exchanger, check',re:/^Design|open design|rating vs design/i},
      {id:'ft',name:'Heat balance, temperature profile, LMTD and F_T (1-2, 1-4, 1-6, 1-8, 2-4)',re:/F_T|LMTD|profile|schematic|heat balance|caloric|2-4/i},
      {id:'kern',name:'Kern rating: h_i / h_io and h_o (Figs. 24 and 28)',re:/h_io|h_i\b|h_o|rating|geometry drill/i},
      {id:'u',name:'U_C, U_D, dirt factor, pressure drops and suitability',re:/U_C|U_D|clean|dirt|pressure|ΔP|suitab|baffle spacing|tube passes|modification/i},
      {id:'tema',name:'TEMA designation, specification sheet and codes',re:/TEMA|codes/i},
      {id:'comp',name:'Components, pitch, BWG, U-tube; which fluid goes in the tubes',re:/component|pitch|U-tube|fluid|factors|tubesheet/i},
      {id:'comp2',name:'Other shell-and-tube questions',re:/./}]},
    'evaporator':{slides:['10'],books:['Kern ch. 14–15','McCabe ch. 16'],skills:[
      {id:'types',name:'Evaporator and vaporizer types; mechanism of vaporization',re:/types|classification|mechanism/i},
      {id:'feed',name:'Forward, backward and parallel feed',re:/forward vs backward|parallel/i},
      {id:'single',name:'Single-effect balances, area and economy',re:/single/i},
      {id:'multi',name:'Multiple-effect calculations (equal areas)',re:/effect|equal/i},
      {id:'vap',name:'Vaporizers: recirculation, zone loads, U and ΔP',re:/vaporizer/i},
      {id:'power',name:'Power-plant evaporators, flux limits and blowdown',re:/./}]},
    'other':{slides:[],books:['Holman ch. 4 and 8'],note:'Not in the current slides; asked only in older papers.',skills:[
      {id:'other',name:'Radiation view factors and transient conduction',re:/./}]}
  }
};
