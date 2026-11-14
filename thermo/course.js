/* ChE 313 Chemical Engineering Thermodynamics II (BUET L-3/T-1; CHE 307 up to 2021-22): course configuration read by ../question-bank/qb.js
   Textbook: Smith, Van Ness & Abbott, Introduction to Chemical Engineering Thermodynamics, 6th ed. in SI (adapted by B. I. Bhatt).
   Dr. Kawnish Kirtania: refrigeration and liquefaction (ch. 9), chemical-reaction equilibria (ch. 13), topics in phase equilibria (ch. 14).
   Faisal Ahmed / Kaniz Fatema: VLE (ch. 10), solution thermodynamics theory (ch. 11) and applications (ch. 12). */
window.QB_COURSE={
  id:'che313', code:'ChE 313', name:'Chemical Engineering Thermodynamics II', freeYear:'2023-24',
  topics:[
    {id:'refrigeration',name:'Refrigeration & liquefaction',ch:'09'},
    {id:'vle-intro',name:'VLE: Raoult, modified Raoult, bubble/dew, flash',ch:'10'},
    {id:'solution-theory',name:'Solution theory: partial properties, fugacity, excess properties',ch:'11'},
    {id:'solution-applications',name:'Solution thermodynamics: activity-coefficient models, mixing, heat effects',ch:'12'},
    {id:'reaction-equilibria',name:'Chemical-reaction equilibria',ch:'13'},
    {id:'phase-equilibria-topics',name:'Topics in phase equilibria: stability, LLE, VLLE, SLE, SVE',ch:'14'},
    {id:'other',name:'Other (not in current slides)',ch:'–'}
  ],
  years:['2023-24','2022-23','2021-22','2020-21','2018-19','2017-18','2016-17','2015-16','2014-15','2013-14'],   /* solved so far; still to add: 2021-22, 2020-21, 2018-19, 2017-18, 2016-17, 2015-16, 2014-15, 2013-14 */
  sets:['refrigeration','vle-intro','solution-theory','solution-applications','reaction-equilibria']   /* still to come: phase-equilibria-topics */
};
