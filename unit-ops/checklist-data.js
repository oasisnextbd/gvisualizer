/* CHE 311 preparation checklist: skills per topic, where to read, and which question parts test each skill.
   Each question part is assigned to the first skill in its topic whose pattern matches its title (sub). */
QB.CHECK={
  slides:{
    'EV':'Evaporator slides (Dr. Sowgath) + evaporator notes', 'DR':'Dryer slides (Dr. Sowgath)', 'EJ':'Ejector slides (Dr. Sowgath)',
    'PU':'Pump outline (Dr. Sowgath)', 'CO':'Compressor outline (Dr. Sowgath)', 'PR':'Relief system + relief sizing slides (Dr. Sowgath)',
    'MS':'Mechanical separation 1 and 2_1 (Md Kamrul Hasan)', 'GL':'Mechanical separation 2_2', 'DC':'Mechanical separation 2_3',
    'CR':'Crystallization slides (Md Kamrul Hasan, Dr. Sowgath)', 'SR':'Size reduction slides', 'MX':'Mixing and agitation slides', 'SH':'Solid handling machinery slides'
  },
  topics:{
    'evaporation':{slides:['EV'],books:['MSH ch. 16','Foust ch. 19'],skills:[
      {id:'bpe',name:'Boiling-point elevation and Dühring\'s rule; steam pressure and vacuum',re:/BPE|boiling.point|Dühring|Duhring|vacuum|steam pressure/i},
      {id:'single',name:'Single-effect balances: steam, economy, area',re:/single|economy|capacity/i},
      {id:'multi',name:'Multiple effect: feed arrangements, trial method, equal areas',re:/multiple|double|triple|effect|forward|backward/i},
      {id:'types',name:'Evaporator types, selection, scale and maintenance',re:/./}]},
    'drying':{slides:['DR'],books:['MSH ch. 24','Foust ch. 18'],skills:[
      {id:'curve',name:'Drying curves, rate periods, drying time',re:/curve|rate|time|period|moisture/i},
      {id:'rotary',name:'Rotary dryer design: diameter and length',re:/rotary/i},
      {id:'types',name:'Dryer types, gas–solid contact and dryer selection',re:/./}]},
    'ejectors':{slides:['EJ'],books:['Ludwig ch. 6'],skills:[
      {id:'perf',name:'Ejector performance: motive steam, entrainment ratios, loads',re:/entrain|load|capacity|steam|performance|ratio/i},
      {id:'types',name:'Ejector types, staging, condensers and vacuum systems',re:/./}]},
    'pumps':{slides:['PU'],books:['Ludwig ch. 3','MSH ch. 8'],skills:[
      {id:'curve',name:'Pump curves, impeller size, power, NPSH',re:/curve|impeller|power|NPSH|head/i},
      {id:'types',name:'Pump types and selection',re:/./}]},
    'compressors':{slides:['CO'],books:['Ludwig ch. 12'],skills:[
      {id:'all',name:'Compressor types, compression work, specification sheet',re:/./}]},
    'relief':{slides:['PR'],books:['Crowl & Louvar ch. 8–9'],skills:[
      {id:'sizing',name:'Relief sizing: liquids, vapours, rupture discs, two-phase (DIERS)',re:/siz|area|diameter|vent|styrene|runaway|two.phase/i},
      {id:'concepts',name:'Relief concepts, device types, location and scenarios',re:/./}]},
    'separator-selection':{slides:['MS'],books:['Ludwig ch. 4'],skills:[
      {id:'sylvan',name:'Particle size, concentration units and Sylvan chart selection',re:/Sylvan|select|recommend|size|concentration/i},
      {id:'basics',name:'Mechanical separation methods and their principles',re:/./}]},
    'gas-liquid-separation':{slides:['GL'],books:['Ludwig ch. 4'],skills:[
      {id:'settler',name:'Gravity settlers: Stokes law, terminal velocity, vessel sizing',re:/gravity|settl|Stokes|terminal|knock|vessel|diameter/i},
      {id:'impinge',name:'Impingement separators, demisters, entrainment separators',re:/./}]},
    'dust-collection':{slides:['DC'],books:['Ludwig ch. 4'],skills:[
      {id:'cyclone',name:'Cyclones: critical diameter, efficiency',re:/cyclone/i},
      {id:'fabric',name:'Fabric filters: air-to-cloth ratio, cloth area, cleaning',re:/fabric|bag|cloth/i},
      {id:'esp',name:'Electrostatic precipitators',re:/electro|ESP|precipitat/i},
      {id:'scrub',name:'Wet and dry scrubbers',re:/./}]},
    'crystallization':{slides:['CR'],books:['McKetta','Badger & Banchero','MSH ch. 27'],skills:[
      {id:'yield',name:'Yield, solubility, heat balance, Swenson–Walker design',re:/yield|Swenson|copperas|heat|design|section/i},
      {id:'theory',name:'Supersaturation, nucleation, growth, crystallizer types',re:/./}]},
    'size-reduction':{slides:['SR'],books:['Coulson & Richardson Vol. 2, ch. 2'],skills:[
      {id:'energy',name:'Rittinger, Kick and Bond laws; work index; energy',re:/Rittinger|Kick|Bond|energy|power|work index/i},
      {id:'ballmill',name:'Ball mill: critical speed and operating factors',re:/ball|critical speed|mill/i},
      {id:'equip',name:'Crushers, grinders and equipment selection',re:/./}]},
    'mixing':{slides:['MX'],books:['MSH ch. 9','Ludwig ch. 5'],skills:[
      {id:'power',name:'Power number, Reynolds and Froude numbers, power calculation',re:/power|Reynolds|Froude|Np|kW|hp/i},
      {id:'scale',name:'Scale-up and blending time',re:/scale|blend/i},
      {id:'types',name:'Impellers, flow patterns, baffles, mixer selection',re:/./}]},
    'solids-handling':{slides:['SH'],books:['Shamlou'],skills:[
      {id:'all',name:'Belt, screw and bucket conveyors; selection criteria',re:/./}]},
    'other':{slides:[],books:['Past papers only'],note:'not in the current slides',skills:[
      {id:'all',name:'Topics from older papers (turbines and others)',re:/./}]}
  }
};
