/* MATH 327 preparation checklist: skills per topic, where to read, and which question parts test each skill.
   Each question part is assigned to the first skill in its topic whose pattern matches its title (sub). */
QB.CHECK={
  slides:{
    'CA':'Lecture notes: Complex Algebra; Graphical Representation', 'AN':'Lecture notes: Limit, Continuity and Differentiability; Chapter Two: Analytic Function',
    'EF':'Lecture notes: Chapter Three (elementary functions)', 'CI':'Lecture notes: Line Integral of a Complex Function; Cauchy Integral Theorem; Liouville\'s Theorem',
    'LS':'Lecture notes: Laurent\'s and Taylor\'s Problems', 'RS':'Lecture notes: Residue; Contour Integration', 'MP':'Lecture notes: Linear Transformation; Mapping',
    'MV':'Lecture notes: MANOVA', 'RG':'Lecture notes: Multiple Linear Regression Analysis', 'PC':'Lecture notes: Principal Component Analysis'
  },
  topics:{
    'complex-algebra':{slides:['CA'],books:['Spiegel, Complex Variables (Schaum) ch. 1'],skills:[
      {id:'roots',name:'Roots of complex numbers (De Moivre), principal root, factorization',re:/root|factor/i},
      {id:'geometry',name:'Geometry: |z₁ − z₂| as distance, loci, regions, triangle inequality',re:/./}]},
    'analytic':{slides:['AN'],books:['Spiegel ch. 3'],skills:[
      {id:'cr',name:'Differentiability and analyticity via Cauchy–Riemann (Cartesian and polar)',re:/differentiab|Cauchy.Riemann|analytic/i},
      {id:'harmonic',name:'Harmonic functions, harmonic conjugate, f(z) by Milne–Thomson',re:/./}]},
    'elementary-functions':{slides:['EF'],books:['Spiegel ch. 2'],skills:[
      {id:'all',name:'exp, Log and principal values, trig/hyperbolic equations',re:/./}]},
    'complex-integration':{slides:['CI'],books:['Spiegel ch. 4–5'],skills:[
      {id:'line',name:'Line integrals along paths (parametrisation)',re:/line|along|path|curve/i},
      {id:'cif',name:'Cauchy\'s theorem and integral formula; Liouville',re:/./}]},
    'series':{slides:['LS'],books:['Spiegel ch. 6'],skills:[
      {id:'laurent',name:'Laurent series in annuli; Taylor series; singularities',re:/./}]},
    'residues':{slides:['RS'],books:['Spiegel ch. 7'],skills:[
      {id:'residue',name:'Residue theorem for closed contours',re:/residue theorem|circle|contour C/i},
      {id:'real',name:'Real integrals: ∫₀²π R(cos θ, sin θ)dθ and ∫₋∞^∞ P/Q dx',re:/./}]},
    'mapping':{slides:['MP'],books:['Spiegel ch. 8'],skills:[
      {id:'all',name:'Linear and bilinear transformations; images of regions; conformality',re:/./}]},
    'multivariate-normal':{slides:['MV'],books:['Johnson & Wichern ch. 1–4'],skills:[
      {id:'descriptive',name:'Mean vector, covariance S_n, correlation matrix R from a data matrix',re:/mean vector|covariance|correlation|data matrix|x̄/i},
      {id:'joint',name:'Joint, marginal and conditional distributions; independence',re:/joint|independen|conditional|marginal|pdf/i},
      {id:'normal',name:'Bivariate and multivariate normal distribution',re:/./}]},
    'regression':{slides:['RG'],books:['Johnson & Wichern ch. 7; Spiegel, Statistics ch. 15'],skills:[
      {id:'all',name:'Least squares, normal equations, β = (XᵀX)⁻¹Xᵀy, prediction and interpretation',re:/./}]},
    'anova-manova':{slides:['MV'],books:['Johnson & Wichern ch. 6'],skills:[
      {id:'all',name:'ANOVA and MANOVA: assumptions, Wilks\' Λ, comparison',re:/./}]},
    'pca':{slides:['PC'],books:['Johnson & Wichern ch. 8'],skills:[
      {id:'all',name:'Principal components from covariance/correlation; eigenvalues; variance explained',re:/./}]},
    'other':{slides:[],books:['Past MATH 263 papers only'],note:'not in MATH 327',skills:[
      {id:'all',name:'Fourier series/integrals/transforms and partial differential equations (MATH 263)',re:/./}]}
  }
};
