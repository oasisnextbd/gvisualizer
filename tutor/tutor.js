// QForge tutor studio: question bank, exam-paper builder and print view for private tutors.
// Only people on the tutors list (team dashboard -> Tutors) get in. The shared question bank is not in
// this repository: it is read from Firestore (tutorBank/*) after sign-in, and firebase/firestore.rules
// refuses it to everyone else. A tutor's own questions and the current paper stay in their browser.
import { enabled, fb, onUser, signIn, googleSignIn, signOut, resendVerification, recheck, niceError } from '../shared/fb.js';


// =========================================================================
// 1. VERIFIED SYLLABUS TAXONOMY (NCTB HSC BANGLA + PEARSON EDEXCEL IAL & IGCSE)
// =========================================================================
const SYLLABUS_DATA = {
  HSC: {
    label: "HSC Bangla Version (1st & 2nd Year — NCTB)",
    subjects: {
      "HSC_PHY1": {
        name: "পদার্থবিজ্ঞান ১ম পত্র (Physics 1st Paper)",
        chapters: [
          "অধ্যায় ১: ভৌতজগৎ ও পরিমাপ (Physical World & Measurement)",
          "অধ্যায় ২: ভেক্টর (Vector)",
          "অধ্যায় ৩: গতিবিদ্যা (Dynamics / Kinematics)",
          "অধ্যায় ৪: নিউটনীয় বলবিদ্যা (Newtonian Mechanics)",
          "অধ্যায় ৫: কাজ, শক্তি ও ক্ষমতা (Work, Energy & Power)",
          "অধ্যায় ৬: মহাকর্ষ ও অভিকর্ষ (Gravitation & Gravity)",
          "অধ্যায় ৭: পদার্থের গাঠনিক ধর্ম (Structural Properties of Matter)",
          "অধ্যায় ৮: পর্যাবৃত্ত গতি (Periodic Motion)",
          "অধ্যায় ৯: তরঙ্গ (Waves)",
          "অধ্যায় ১০: আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব (Ideal Gas & Kinetic Theory)"
        ]
      },
      "HSC_PHY2": {
        name: "পদার্থবিজ্ঞান ২য় পত্র (Physics 2nd Paper)",
        chapters: [
          "অধ্যায় ১: তাপগতিবিদ্যা (Thermodynamics)",
          "অধ্যায় ২: স্থির তড়িৎ (Electrostatics)",
          "অধ্যায় ৩: চল তড়িৎ (Current Electricity)",
          "অধ্যায় ৪: তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব (Magnetic Effect of Current)",
          "অধ্যায় ৫: তাড়িতচৌম্বক আবেশ ও পরিবর্তী প্রবাহ (EM Induction & AC)",
          "অধ্যায় ৬: জ্যামিতিক আলোকবিজ্ঞান (Geometrical Optics)",
          "অধ্যায় ৭: ভৌত আলোকবিজ্ঞান (Physical Optics)",
          "অধ্যায় ৮: আধুনিক পদার্থবিজ্ঞানের সূচনা (Intro to Modern Physics)",
          "অধ্যায় ৯: পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান (Atomic & Nuclear Physics)",
          "অধ্যায় ১০: সেমিকন্ডাক্টর ও ইলেকট্রনিক্স (Semiconductor & Electronics)"
        ]
      },
      "HSC_CHEM1": {
        name: "রসায়ন ১ম পত্র (Chemistry 1st Paper)",
        chapters: [
          "অধ্যায় ১: ল্যাবরেটরির নিরাপদ ব্যবহার (Safe Use of Laboratory)",
          "অধ্যায় ২: গুণগত রসায়ন (Qualitative Chemistry)",
          "অধ্যায় ৩: মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন (Periodic Properties & Bonding)",
          "অধ্যায় ৪: রাসায়নিক পরিবর্তন (Chemical Changes — Equilibrium, Kp/Kc, pH, Buffer)",
          "অধ্যায় ৫: কর্মমুখী রসায়ন (Vocational Chemistry)"
        ]
      },
      "HSC_CHEM2": {
        name: "রসায়ন ২য় পত্র (Chemistry 2nd Paper)",
        chapters: [
          "অধ্যায় ১: পরিবেশ রসায়ন (Environmental Chemistry — Gas Laws & Acid-Base)",
          "অধ্যায় ২: জৈব রসায়ন (Organic Chemistry)",
          "অধ্যায় ৩: পরিমাণগত রসায়ন (Quantitative Chemistry — Titration & Redox)",
          "অধ্যায় ৪: তড়িৎ রসায়ন (Electrochemistry — Faraday & Nernst Equation)",
          "অধ্যায় ৫: অর্থনৈতিক রসায়ন (Economic Chemistry)"
        ]
      },
      "HSC_MATH1": {
        name: "উচ্চতর গণিত ১ম পত্র (Higher Math 1st Paper)",
        chapters: [
          "অধ্যায় ১: ম্যাট্রিক্স ও নির্ণায়ক (Matrices & Determinants)",
          "অধ্যায় ২: ভেক্টর (Vectors)",
          "অধ্যায় ৩: সরলরেখা (Straight Lines)",
          "অধ্যায় ৪: বৃত্ত (Circles)",
          "অধ্যায় ৫: বিন্যাস ও সমাবেশ (Permutations & Combinations)",
          "অধ্যায় ৬: ত্রিকোণমিতিক অনুপাত (Trigonometric Ratios)",
          "অধ্যায় ৭: সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত (Associated Angles)",
          "অধ্যায় ৮: ফাংশন ও ফাংশনের লেখচিত্র (Functions & Graphs)",
          "অধ্যায় ৯: অন্তরীকরণ (Differentiation)",
          "অধ্যায় ১০: যোগজীকরণ (Integration)"
        ]
      },
      "HSC_MATH2": {
        name: "উচ্চতর গণিত ২য় পত্র (Higher Math 2nd Paper)",
        chapters: [
          "অধ্যায় ১: বাস্তব সংখ্যা ও অসমতা (Real Numbers & Inequalities)",
          "অধ্যায় ২: যোগাশ্রয়ী প্রোগ্রাম (Linear Programming)",
          "অধ্যায় ৩: জটিল সংখ্যা (Complex Numbers)",
          "অধ্যায় ৪: বহুপদী ও বহুপদী সমীকরণ (Polynomials & Equations)",
          "অধ্যায় ৫: দ্বিপদী বিস্তৃতি (Binomial Expansion)",
          "অধ্যায় ৬: কণিক (Conics — Parabola, Ellipse, Hyperbola)",
          "অধ্যায় ৭: বিপরীত ত্রিকোণমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ (Inverse Trig)",
          "অধ্যায় ৮: স্থিতিবিদ্যা (Statics)",
          "অধ্যায় ৯: সমতলে বস্তুকণার গতি (Motion of Particles in a Plane)"
        ]
      }
    }
  },
  IAL: {
    label: "Pearson Edexcel International A Level (IAL)",
    subjects: {
      "IAL_PHY": {
        name: "IAL Physics (WPH11–WPH16)",
        chapters: [
          "WPH11 Unit 1: Mechanics and Materials (Kinematics, Projectiles, Moments, Fluids, Stress-Strain)",
          "WPH12 Unit 2: Waves and Electricity (Superposition, Photoelectric Effect, DC Circuits)",
          "WPH13 Unit 3: Practical Skills in Physics I (Uncertainties, Graphs & Planning)",
          "WPH14 Unit 4: Further Mechanics, Fields & Particles (2D Momentum, Circular, Capacitors, B-Fields)",
          "WPH15 Unit 5: Thermodynamics, Radiation, Oscillations & Cosmology (SHM, Nuclear, Astrophysics)",
          "WPH16 Unit 6: Practical Skills in Physics II (Log Graphs, Core Practical Analysis)"
        ]
      },
      "IAL_CHEM": {
        name: "IAL Chemistry (WCH11–WCH16)",
        chapters: [
          "WCH11 Unit 1: Structure, Bonding and Introduction to Organic Chemistry (Moles, Alkanes, Alkenes)",
          "WCH12 Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols (Hess, Redox, IR/MS)",
          "WCH13 Unit 3: Practical Skills in Chemistry I (Titrations, Enthalpy & Qualitative Tests)",
          "WCH14 Unit 4: Rates, Equilibria and Further Organic Chemistry (Rate Eq, Entropy, Kp, Ka/Buffers, Carbonyls, NMR)",
          "WCH15 Unit 5: Transition Metals and Organic Nitrogen Chemistry (Electrode Potentials, Arenes, Amines)",
          "WCH16 Unit 6: Practical Skills in Chemistry II (Multi-step Synthesis & Advanced Practical)"
        ]
      },
      "IAL_P1": {
        name: "IAL Pure Mathematics 1 (WMA11 / P1)",
        chapters: [
          "P1 Ch 1–2: Algebraic Expressions, Quadratics & Inequalities",
          "P1 Ch 3–4: Equations, Simultaneous Systems & Curve Sketching / Transformations",
          "P1 Ch 5: Straight Line Graphs",
          "P1 Ch 6: Trigonometric Ratios, Cosine/Sine Rule & Radian Measure (Arc/Sector)",
          "P1 Ch 7–8: Differentiation & Integration (Tangents, Normals, Area)"
        ]
      },
      "IAL_P2": {
        name: "IAL Pure Mathematics 2 (WMA12 / P2)",
        chapters: [
          "P2 Ch 1–2: Algebraic Methods (Remainder/Factor Theorem & Proof) & Coordinate Geometry of Circle",
          "P2 Ch 3–4: Exponentials & Logarithms, Binomial Expansion",
          "P2 Ch 5–6: Sequences & Series (Arithmetic & Geometric Progressions)",
          "P2 Ch 7: Trigonometric Identities & Equations",
          "P2 Ch 8–9: Differentiation (Stationary Points) & Integration (Trapezium Rule & Definite Area)"
        ]
      },
      "IAL_P3": {
        name: "IAL Pure Mathematics 3 (WMA13 / P3)",
        chapters: [
          "P3 Ch 1–2: Algebraic Fractions & Functions (Modulus, Inverse, Composite)",
          "P3 Ch 3–4: Trigonometric Addition Formulae (R sin(θ±α)) & Exponentials/Log Models",
          "P3 Ch 5–6: Differentiation (Chain, Product, Quotient, Parametric, Implicit)",
          "P3 Ch 7–8: Integration (Reverse Chain, Trig) & Numerical Methods (f(x)=0, Cobweb/Staircase)"
        ]
      },
      "IAL_P4": {
        name: "IAL Pure Mathematics 4 (WMA14 / P4)",
        chapters: [
          "P4 Ch 1–2: Proof by Contradiction & Partial Fractions",
          "P4 Ch 3–4: Coordinate Geometry (Parametric Curves) & General Binomial Expansion (1+x)^n",
          "P4 Ch 5: Differentiation (Implicit Rates of Change)",
          "P4 Ch 6: Integration (Substitution, By Parts, Differential Equations, Volumes of Revolution)",
          "P4 Ch 7: Vectors in 3D (Vector Equations of Lines & Scalar Product)"
        ]
      },
      "IAL_M1": {
        name: "IAL Mechanics 1 (WME01 / M1)",
        chapters: [
          "M1 Ch 1–2: Mathematical Models & Kinematics of a Particle (Constant Acceleration & v-t Graphs)",
          "M1 Ch 3: Dynamics of a Particle (Newton's Laws, Inclined Planes, Connected Pulleys/Towing)",
          "M1 Ch 4: Impulse & Conservation of Linear Momentum",
          "M1 Ch 5: Statics of a Particle (Friction & Limiting Equilibrium)",
          "M1 Ch 6–7: Moments (Tilting/Non-Uniform Rods) & Vectors in Mechanics"
        ]
      },
      "IAL_M2": {
        name: "IAL Mechanics 2 (WME02 / M2)",
        chapters: [
          "M2 Ch 1–2: Kinematics of Variable Acceleration (Calculus in 1D/2D) & Projectiles",
          "M2 Ch 3: Centres of Mass (Composite Laminae & Wire Frameworks, Hanging Equilibrium)",
          "M2 Ch 4: Work, Energy and Power (Work-Energy Principle on Rough Slopes & Tractive Effort)",
          "M2 Ch 5: Collisions (Direct Impact, Newton's Law of Restitution e, Successive Impacts)",
          "M2 Ch 6: Statics of Rigid Bodies (Ladders & Hinged Rods in Limiting Equilibrium)"
        ]
      },
      "IAL_S1": {
        name: "IAL Statistics 1 (WST01 / S1)",
        chapters: [
          "S1 Ch 1–3: Mathematical Models, Measures of Location/Spread & Representation of Data (Box Plots/Histograms)",
          "S1 Ch 4: Probability (Venn Diagrams, Tree Diagrams, Conditional Probability)",
          "S1 Ch 5: Correlation and Linear Regression (PMCC r & Coded Summary Statistics)",
          "S1 Ch 6: Discrete Random Variables (E(X), Var(X), Cumulative F(x))",
          "S1 Ch 7: The Normal Distribution (Standardising Z & Inverse Normal)"
        ]
      },
      "IAL_S2": {
        name: "IAL Statistics 2 (WST02 / S2)",
        chapters: [
          "S2 Ch 1–2: The Binomial and Poisson Distributions",
          "S2 Ch 3: Continuous Random Variables (PDF f(x), CDF F(x), Median, Mode, E(X), Var(X))",
          "S2 Ch 4: Normal Approximations (Continuity Correction for Binomial & Poisson)",
          "S2 Ch 5–6: Populations, Sampling Distributions & Hypothesis Testing (Binomial & Poisson Critical Regions)"
        ]
      }
    }
  },
  IGCSE: {
    label: "Pearson Edexcel International GCSE (O Level)",
    subjects: {
      "IGCSE_PHY": {
        name: "IGCSE Physics (4PH1)",
        chapters: [
          "4PH1 Topic 1: Forces and Motion (v-t Graphs, F=ma, Stopping Distance, Momentum, Moments)",
          "4PH1 Topic 2: Electricity (Mains Safety, IV Graphs, Series/Parallel Circuits, Q=It, E=QV)",
          "4PH1 Topic 3: Waves (Reflection, Snell's Law n=sin i/sin r, TIR, EM Spectrum, Sound)",
          "4PH1 Topic 4: Energy Resources and Energy Transfers (Efficiency, Work W=Fd, KE/GPE, Power)",
          "4PH1 Topic 5: Solids, Liquids and Gases (Density, Pressure p=hρg, Specific Heat Capacity, Gas Laws)",
          "4PH1 Topic 6: Magnetism and Electromagnetism (Motor Effect, Left-Hand Rule, Generators, Transformers)",
          "4PH1 Topic 7–8: Radioactivity & Particles (Half-Life, Fission/Fusion) and Astrophysics (Orbits, Redshift)"
        ]
      },
      "IGCSE_CHEM": {
        name: "IGCSE Chemistry (4CH1)",
        chapters: [
          "4CH1 Topic 1: Principles of Chemistry (Atomic Structure, Moles & Reacting Masses, Ionic/Covalent/Metallic Bonding, Electrolysis)",
          "4CH1 Topic 2: Inorganic Chemistry (Group 1, Group 7, Gases in Atmosphere, Reactivity Series, Acids/Bases/Salt Prep)",
          "4CH1 Topic 3: Physical Chemistry (Energetics Q=mcΔT & Bond Energies, Rates of Reaction, Reversible Equilibria)",
          "4CH1 Topic 4: Organic Chemistry (Crude Oil, Alkanes, Alkenes, Alcohols, Carboxylic Acids, Esters, Polymers)"
        ]
      },
      "IGCSE_MATHB": {
        name: "IGCSE Mathematics B (4MB1)",
        chapters: [
          "4MB1 Topic 1–2: Number, Sets & Venn Diagrams",
          "4MB1 Topic 3–4: Algebra, Factorisation, Algebraic Fractions & Functions/Graphs",
          "4MB1 Topic 5: Matrices (2x2 Multiplication, Determinants, Inverses & Transformations)",
          "4MB1 Topic 6–7: Geometry (Circle Theorems, Similarity) & Mensuration (3D Surface Area/Volume)",
          "4MB1 Topic 8: Vectors & Transformation Geometry (Collinearity & Ratio Theorem)",
          "4MB1 Topic 9–10: Trigonometry (3D Trig, Sine/Cosine Rule) & Statistics/Probability"
        ]
      },
      "IGCSE_4PM1": {
        name: "IGCSE Further Pure Mathematics (4PM1)",
        chapters: [
          "4PM1 Topic 1–2: Logarithmic Functions/Indices & The Quadratic Function (Roots α, β)",
          "4PM1 Topic 3–4: Identities, Inequalities & Graphs/Functions",
          "4PM1 Topic 5–6: Series (AP, GP, Σ Notation) & The Binomial Series (1+x)^n",
          "4PM1 Topic 7–8: Scalar & Vector Quantities and Rectangular Cartesian Coordinates (Perpendicular Lines/Internal Division)",
          "4PM1 Topic 9: Calculus (Differentiation, Stationary Points, Kinematics, Integration & Area/Volume of Revolution)",
          "4PM1 Topic 10: Trigonometry (Radians, Compound Angles sin(A±B), 3D Problems)"
        ]
      }
    }
  }
};

// =========================================================================
// 3. APPLICATION STATE & SAFE STORAGE
// =========================================================================
const STORAGE_KEY_MINE = "gv-tutor-mine-v1";     // questions this tutor wrote, cropped or cloned
const STORAGE_KEY_PAPER = "gv-tutor-paper-v1";   // ids on the current exam paper
const STORAGE_KEY_HIDDEN = "gv-tutor-hidden-v1"; // shared-bank questions this tutor hid from their own view
const STORAGE_KEY_HEADER = "gv-tutor-header-v1"; // exam header fields (title, instructor, time, set)

let state = {
  userEmail: "",
  activeTab: "bank",           // 'bank' | 'create' | 'paper' | 'backup' | 'gviz'
  activeCreateSubTab: "structured", // 'structured' | 'crop' | 'cloner'
  paperViewMode: "student",    // 'student' | 'markscheme'
  filters: {
    curriculum: "ALL",
    subject: "ALL",
    chapter: "ALL",
    microTopic: "ALL",
    type: "ALL",
    search: ""
  },
  bank: [],                    // shared bank, read from Firestore
  hiddenIds: [],
  questions: [],               // the tutor's own questions first, then the visible shared bank
  paperQueueIds: [],
  newQuestionSubparts: [
    { label: "ক", text: "সংজ্ঞামূলক প্রশ্ন লেখ।", marks: 1 },
    { label: "খ", text: "অনুধাবনমূলক ব্যাখ্যা দাও।", marks: 2 },
    { label: "গ", text: "উদ্দীপকের আলোকে রাশিটির মান নির্ণয় কর।", marks: 3 },
    { label: "ঘ", text: "গাণিতিক বিশ্লেষণের মাধ্যমে মতামত দাও।", marks: 4 }
  ],
  cropDataUrl: "",
  clonerTemplateId: "HSC_PHY_RIVER",
  clonerParams: {},
  clonerGeneratedQuestion: null
};

const isBankQuestion = q => !!q && q._bank === true;
const storageKey = k => k + ":" + state.userEmail;
const monthLabel = () => new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" });
const newId = prefix => prefix + "_" + Date.now() + "_" + Math.floor(Math.random() * 1e6);

function readStored(key, fallback) {
  try {
    const raw = localStorage.getItem(storageKey(key));
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

// Only a real raster image may be used as a figure (never a URL that could run or load anything else).
function isSafeImage(v) {
  return typeof v === "string" && v.length < 3000000 && /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(v);
}

// Inline SVG figures come from the bank or from an imported file, so only plain drawing elements and
// attributes are kept: no scripts, no event handlers, no links, no styles, nothing that loads a URL.
const SVG_TAGS = new Set(["svg", "g", "line", "path", "circle", "ellipse", "rect", "polygon", "polyline", "text", "tspan", "title", "desc", "defs", "marker"]);
const SVG_ATTRS = new Set(["viewbox", "width", "height", "x", "y", "x1", "y1", "x2", "y2", "cx", "cy", "r", "rx", "ry", "d", "points", "dx", "dy",
  "fill", "fill-opacity", "fill-rule", "stroke", "stroke-width", "stroke-dasharray", "stroke-linecap", "stroke-linejoin", "stroke-opacity", "opacity",
  "transform", "font-size", "font-weight", "font-style", "font-family", "text-anchor", "dominant-baseline", "id", "markerwidth", "markerheight",
  "refx", "refy", "orient", "marker-end", "marker-start", "preserveaspectratio", "xmlns"]);
const svgCache = new Map();
function safeSvg(markup) {
  if (typeof markup !== "string" || !markup || markup.length > 40000) return "";
  if (svgCache.has(markup)) return svgCache.get(markup);
  let out = "";
  try {
    const src = /<svg[^>]*\sxmlns=/.test(markup) ? markup : markup.replace(/<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    const root = new DOMParser().parseFromString(src, "image/svg+xml").documentElement;
    if (root && root.nodeName.toLowerCase() === "svg" && !root.querySelector("parsererror")) {
      const walk = el => {
        [...el.children].forEach(ch => { if (SVG_TAGS.has(ch.nodeName.toLowerCase())) walk(ch); else ch.remove(); });
        [...el.attributes].forEach(a => {
          const name = a.name.toLowerCase();
          if (!SVG_ATTRS.has(name) || /url\s*\(|javascript:|expression/i.test(a.value) && !/^url\(#[\w-]+\)$/.test(a.value.trim())) el.removeAttribute(a.name);
        });
      };
      walk(root);
      root.setAttribute("class", "exam-figure");
      out = new XMLSerializer().serializeToString(root);
    }
  } catch (e) {
    out = "";
  }
  svgCache.set(markup, out);
  return out;
}

// Every question that enters the page (shared bank, saved copy, imported file) goes through here,
// so a hand-edited or broken file cannot inject markup or crash the views.
function cleanQuestion(raw) {
  if (!raw || typeof raw !== "object") return null;
  const str = (v, max) => (typeof v === "string" ? v : v == null ? "" : String(v)).slice(0, max);
  const num = (v, max) => Math.min(Math.max(Number(v) || 0, 0), max);
  const stem = str(raw.stem, 8000);
  if (!stem.trim()) return null;
  const q = {
    id: typeof raw.id === "string" && /^[\w.-]{1,80}$/.test(raw.id) ? raw.id : newId("q_import"),
    curriculum: SYLLABUS_DATA[raw.curriculum] ? raw.curriculum : "HSC",
    subject: str(raw.subject, 40),
    chapter: str(raw.chapter, 240),
    microTopic: str(raw.microTopic, 240),
    type: ["CQ", "MCQ", "STRUCTURED"].includes(raw.type) ? raw.type : "STRUCTURED",
    highYield: !!raw.highYield,
    source: str(raw.source, 240),
    stem,
    subparts: Array.isArray(raw.subparts) ? raw.subparts.slice(0, 12).filter(sp => sp && typeof sp === "object")
      .map(sp => ({ label: str(sp.label, 12), text: str(sp.text, 3000), marks: num(sp.marks, 100) })) : [],
    options: Array.isArray(raw.options) ? raw.options.slice(0, 6).map(o => str(o, 600)) : [],
    marks: num(raw.marks, 300),
    solution: str(raw.solution, 16000)
  };
  if (typeof raw.clonableTemplate === "string" && CLONER_TEMPLATES[raw.clonableTemplate]) q.clonableTemplate = raw.clonableTemplate;
  if (isSafeImage(raw.imageDataUrl)) q.imageDataUrl = raw.imageDataUrl;
  if (typeof raw.svgDiagram === "string" && raw.svgDiagram.length <= 40000) q.svgDiagram = raw.svgDiagram;
  return q;
}

const DEFAULT_PAPER_IDS = ["q_hsc_phy1_vec1", "q_hsc_chem1_buf1", "q_ial_phy_wph11", "q_ial_p2_wma12"];

function loadStateFromStorage(bankRows) {
  const seen = new Set();
  state.bank = bankRows.map(cleanQuestion).filter(q => q && !seen.has(q.id) && seen.add(q.id)).map(q => ({ ...q, _bank: true }));
  const hidden = readStored(STORAGE_KEY_HIDDEN, []);
  state.hiddenIds = Array.isArray(hidden) ? hidden.filter(id => typeof id === "string" && seen.has(id)) : [];
  const saved = readStored(STORAGE_KEY_MINE, []);
  const mine = (Array.isArray(saved) ? saved : []).map(cleanQuestion).filter(q => q && !seen.has(q.id) && seen.add(q.id));
  const hiddenSet = new Set(state.hiddenIds);
  state.questions = mine.concat(state.bank.filter(q => !hiddenSet.has(q.id)));

  const paper = readStored(STORAGE_KEY_PAPER, null);
  const has = id => state.questions.some(q => q.id === id);
  state.paperQueueIds = (Array.isArray(paper) ? paper : DEFAULT_PAPER_IDS).filter(has);
}

// Returns false (and says so) when the browser refuses the save, so work is never lost silently.
function saveStateToStorage() {
  try {
    const mine = state.questions.filter(q => !isBankQuestion(q));
    localStorage.setItem(storageKey(STORAGE_KEY_MINE), JSON.stringify(mine));
    localStorage.setItem(storageKey(STORAGE_KEY_PAPER), JSON.stringify(state.paperQueueIds));
    localStorage.setItem(storageKey(STORAGE_KEY_HIDDEN), JSON.stringify(state.hiddenIds));
    return true;
  } catch (e) {
    showToast("Could not save in this browser (storage is full or blocked). Download a backup from Syllabus & Backup, then remove some image questions.", "!");
    return false;
  }
}

const HEADER_FIELDS = ["paperHeaderTitle", "paperHeaderInstructor", "paperHeaderTime", "paperHeaderDate"];
function loadHeaderFields() {
  const saved = readStored(STORAGE_KEY_HEADER, {}) || {};
  HEADER_FIELDS.forEach(id => {
    const el = document.getElementById(id);
    if (el && typeof saved[id] === "string") el.value = saved[id].slice(0, 300);
  });
  const date = document.getElementById("paperHeaderDate");
  if (date && !date.value) date.value = "Set A • " + monthLabel();
}
function saveHeaderFields() {
  const out = {};
  HEADER_FIELDS.forEach(id => { const el = document.getElementById(id); if (el) out[id] = el.value; });
  try { localStorage.setItem(storageKey(STORAGE_KEY_HEADER), JSON.stringify(out)); } catch (e) { /* header is re-typed easily */ }
}


function showToast(message, icon = "") {
  const container = document.getElementById("toastContainer");
  const msgEl = document.getElementById("toastMessage");
  if (!container || !msgEl) return;
  msgEl.textContent = message;
  container.classList.toggle("is-warn", icon === "!" || icon === "⚠️");
  container.classList.remove("hidden");
  if (window._toastTimer) clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    container.classList.add("hidden");
  }, icon === "!" || icon === "⚠️" ? 6000 : 3200);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// =========================================================================
// 4. PARAMETRIC "REAL-VIBE" VARIATION ENGINE (8 ARCHETYPES)
// =========================================================================
const CLONER_TEMPLATES = {
  HSC_MATH1_MATRIX_LOCUS: {
    curriculum: "HSC",
    subject: "HSC_MATH1",
    chapter: "অধ্যায় ১: ম্যাট্রিক্স ও নির্ণায়ক (Matrices & Determinants)",
    microTopic: "ম্যাট্রিক্স বহুপদী হতে বিপরীত ম্যাট্রিক্স ও নির্ণায়ক সঞ্চারপথ (Audited)",
    type: "CQ",
    source: "অক্ষর-পত্র ২০২৫ পৃষ্ঠা ৩৫ উদাহরণ-২৫ ও পৃষ্ঠা ৬৮ (বাস্তব সঞ্চারপথ প্যারামেট্রিক ক্লোন)",
    defaultParams: { diagVal: 1, offVal: 2, cubeRootC: 2 },
    paramFields: [
      { key: "diagVal", label: "কর্ণ ভুক্তি a", min: 1, max: 4, step: 1 },
      { key: "offVal", label: "অ-কর্ণ ভুক্তি b", min: 1, max: 3, step: 1 },
      { key: "cubeRootC", label: "ঘনমূল ধ্রুবক k (Δ = k³ ≥ 2³)", min: 2, max: 5, step: 1 }
    ],
    build(p) {
      const b = Number(p.offVal);
      const a = Math.max(Number(p.diagVal), b + 1); // a > b keeps B invertible and every coefficient positive
      const k = Number(p.cubeRootC);
      const sumRow = a + 2 * b;
      const eigDiff = a - b;
      const linCoeff = a + b;
      const constTerm = -(a - b) * (a + 2 * b);
      const deltaVal = Math.pow(k, 3);
      const radSq = k - 1;
      const areaVal = (Math.PI * radSq).toFixed(2);
      return {
        stem: `দৃশ্যকল্প-১: B = [[${a}, ${b}, ${b}], [${b}, ${a}, ${b}], [${b}, ${b}, ${a}]] একটি 3×3 প্রতিসম ম্যাট্রিক্স।\nদৃশ্যকল্প-২: Δ = |[1+x²-y², 2xy, 2y], [2xy, 1-x²+y², -2x], [-2y, 2x, 1-x²-y²]| যেখানে x, y ∈ ℝ এবং Δ = ${deltaVal}।`,
        subparts: [
          { label: "ক", text: `B - (${eigDiff})I₃ ম্যাট্রিক্সটির র‍্যাংক (Rank) ও নির্ণায়ক নির্ণয় কর।`, marks: 2 },
          { label: "খ", text: `দৃশ্যকল্প-১ হতে দেখাও যে B² - ${2 * a + b}B + ${(a - b) * (a + 2 * b)}I₃ = O₃ এবং এর সাহায্যে B⁻¹ নির্ণয় কর (যখন a ≠ b)।`, marks: 4 },
          { label: "গ", text: `দৃশ্যকল্প-২ হতে প্রমাণ কর যে Δ = (1 + x² + y²)³ এবং Δ = ${deltaVal} হলে বাস্তব সমতলে (x, y) বিন্দুর সঞ্চারপথের ব্যাসার্ধ ও ক্ষেত্রফল নির্ণয় কর।`, marks: 4 }
        ],
        marks: 10,
        solution: `ক [২]: B - (${eigDiff})I₃ এর প্রতিটি ভুক্তি ${b} হওয়ায় সব সারি অভিন্ন; তাই নির্ণায়ক = 0 এবং র‍্যাংক = 1।\nখ [৪]: বৈশিষ্ট্য সমীকরণ হতে B² - ${2 * a + b}B + ${(a - b) * (a + 2 * b)}I₃ = O₃ প্রমাণিত। অতএব B⁻¹ = [1 / (${(a - b) * (a + 2 * b)})] × (${2 * a + b}I₃ - B)।\nগ [৪]: কলাম অপারেশন C₁' = C₁ - yC₃ ও C₂' = C₂ + xC₃ দ্বারা Δ = (1 + x² + y²)³ = ${deltaVal} = ${k}³ ⇒ 1 + x² + y² = ${k} ⇒ x² + y² = ${radSq}, যা ব্যাসার্ধ r = √${radSq} = ${Math.sqrt(radSq).toFixed(2)} একক এবং ক্ষেত্রফল = ${radSq}π ≈ ${areaVal} বর্গএককবিশিষ্ট বাস্তব বৃত্ত।`
      };
    }
  },
  HSC_MATH1_CIRCLE_RADICAL: {
    curriculum: "HSC",
    subject: "HSC_MATH1",
    chapter: "অধ্যায় ৪: বৃত্ত (Circles)",
    microTopic: "রেখা ও বৃত্তের বাস্তব ছেদবিন্দুগামী বৃত্ত ও জ্যা-কে ব্যাস ধরে বৃত্ত (Audited)",
    type: "CQ",
    source: "অক্ষর-পত্র ২০২৫ পৃষ্ঠা ২৭৮ সৃজনশীল-২১ সংশোধিত প্যারামেট্রিক ক্লোন (সর্বদা বাস্তব জ্যা d < R)",
    defaultParams: { radiusR: 5, lineC: 5, paramK: 1 },
    paramFields: [
      { key: "radiusR", label: "মূল বৃত্তের ব্যাসার্ধ R", min: 4, max: 10, step: 1 },
      { key: "lineC", label: "রেখার ধ্রুবক c (3x-4y-c=0)", min: 5, max: 15, step: 5 },
      { key: "paramK", label: "প্যারামিটার k", min: 1, max: 3, step: 1 }
    ],
    build(p) {
      const R = Number(p.radiusR);
      const c = Math.min(Number(p.lineC), 5 * (R - 1));
      const k = Number(p.paramK);
      const d = c / 5;
      const chordLen = (2 * Math.sqrt(R * R - d * d)).toFixed(2);
      const kDiam = (-2 * c / 25).toFixed(2);
      const cx = (-1.5 * k).toFixed(2);
      const cy = (2 * k).toFixed(2);
      return {
        stem: `দৃশ্যকল্প: সমতলে একটি সরলরেখা (i) 3x - 4y - ${c} = 0 এবং একটি বৃত্ত (ii) x² + y² - ${R * R} = 0।`,
        subparts: [
          { label: "ক", text: `(ii) নং বৃত্তের কেন্দ্র হতে (i) নং রেখার লম্ব দূরত্ব নির্ণয় করে দেখাও যে রেখাটি বৃত্তটিকে দুইটি ভিন্ন বাস্তব বিন্দুতে ছেদ করে।`, marks: 2 },
          { label: "খ", text: `(i) নং রেখাটি (ii) নং বৃত্ত হতে যে জ্যা খণ্ডিত করে তার দৈর্ঘ্য এবং ঐ জ্যা-কে ব্যাস ধরে অঙ্কিত বৃত্তের সমীকরণ নির্ণয় কর।`, marks: 4 },
          { label: "গ", text: `(i) ও (ii) এর ছেদবিন্দুগামী এবং (${cx}, ${cy}) কেন্দ্রবিশিষ্ট বৃত্তের সমীকরণ ও বাস্তব ব্যাসার্ধ নির্ণয় কর।`, marks: 4 }
        ],
        marks: 10,
        solution: `ক [২]: কেন্দ্র (0,0) হতে 3x - 4y - ${c} = 0 এর লম্ব দূরত্ব d = ${c}/5 = ${d} একক < ব্যাসার্ধ R = ${R} একক; তাই রেখাটি বৃত্তকে দুইটি বাস্তব বিন্দুতে ছেদ করে।\nখ [৪]: জ্যা-এর দৈর্ঘ্য = 2√(${R * R} - ${d * d}) = ${chordLen} একক। জ্যা-কে ব্যাস ধরে বৃত্তে কেন্দ্র (-3k/2, 2k) রেখাটির উপর অবস্থিত হওয়ায় k = ${kDiam}; সমীকরণ: x² + y² - ${R * R} + (${kDiam})(3x - 4y - ${c}) = 0।\nগ [৪]: কেন্দ্র (-3k/2, 2k) = (${cx}, ${cy}) হওয়ায় k = ${k}; নির্ণেয় বৃত্ত: x² + y² + ${3 * k}x - ${4 * k}y - ${R * R + k * c} = 0।`
      };
    }
  },

  HSC_PHY_RIVER: {
    curriculum: "HSC",
    subject: "HSC_PHY1",
    chapter: "অধ্যায় ২: ভেক্টর (Vector)",
    microTopic: "নদী ও স্রোত (ন্যূনতম সময় ও ন্যূনতম দূরত্ব)",
    type: "CQ",
    source: "বোর্ড ও বুয়েট স্ট্যান্ডার্ড প্যারামেট্রিক ক্লোন",
    defaultParams: { widthKm: 1.5, currentU: 4, boatV: 8 },
    paramFields: [
      { key: "widthKm", label: "নদীর প্রস্থ d (km)", min: 0.8, max: 3.6, step: 0.2 },
      { key: "currentU", label: "স্রোতের বেগ u (km h⁻¹)", min: 2, max: 6, step: 0.5 },
      { key: "boatV", label: "নৌকার বেগ v (km h⁻¹)", min: 6.5, max: 14, step: 0.5 }
    ],
    build(p) {
      const d = Number(p.widthKm) || 1.5;
      const u = Number(p.currentU) || 4;
      const v = Math.max(Number(p.boatV) || 8, u + 1);
      const tMinH = d / v;
      const tMinMin = (tMinH * 60).toFixed(2);
      const driftKm = (u * tMinH).toFixed(3);
      const alphaDeg = (Math.acos(-u / v) * 180 / Math.PI).toFixed(2);
      const resV = Math.sqrt(v * v - u * u);
      const tShortMin = ((d / resV) * 60).toFixed(2);
      const diffMin = Math.abs(Number(tShortMin) - Number(tMinMin)).toFixed(2);
      return {
        marks: 10,
        stem: `একটি নদীর প্রস্থ d = ${d} km এবং নদীতে স্রোতের বেগ u = ${u} km h⁻¹। দুজন মাঝি A ও B স্থির পানিতে v = ${v} km h⁻¹ বেগে নৌকা চালাতে পারে। মাঝি A ন্যূনতম সময়ে এবং মাঝি B ন্যূনতম দূরত্বে নদী পার হওয়ার জন্য যাত্রা শুরু করল।`,
        subparts: [
          { label: "ক", text: "অবস্থান ভেক্টর কাকে বলে?", marks: 1 },
          { label: "খ", text: "গুণনের ক্ষেত্রে দুটি ভেক্টরের ক্রস গুণফল বিনিময় সূত্র মেনে চলে না কেন? ব্যাখ্যা কর।", marks: 2 },
          { label: "গ", text: `মাঝি A-এর নদী পার হতে কত মিনিট সময় লাগবে এবং সে অপর পাড়ে বিপরীত বিন্দু হতে কত দূরে পৌঁছাবে নির্ণয় কর।`, marks: 3 },
          { label: "ঘ", text: `মাঝি B-কে স্রোতের সাথে কত কোণে নৌকা চালাতে হবে এবং মাঝি A ও B-এর নদী পারাপারের সময়ের পার্থক্য গাণিতিকভাবে বিশ্লেষণ কর।`, marks: 4 }
        ],
        solution: `ক [১]: প্রসঙ্গ কাঠামোর মূলবিন্দুর সাপেক্ষে কোনো বিন্দুর অবস্থান নির্দেশকারী ভেক্টরকে অবস্থান ভেক্টর বলে।
খ [২]: A × B এবং B × A এর মান সমান হলেও ডানহাতি স্ক্রু নিয়ম অনুসারে এদের দিক পরস্পর বিপরীত (A × B = - B × A)।
গ [৩]: ন্যূনতম সময়ে পারাপারের জন্য α = 90°। t_min = d / v = ${d} / ${v} = ${tMinH.toFixed(4)} h = ${tMinMin} min। পার্শ্ব সরণ x = u × t_min = ${u} × ${tMinH.toFixed(4)} = ${driftKm} km (${(Number(driftKm)*1000).toFixed(0)} m)।
ঘ [৪]: ন্যূনতম দূরত্বে পারাপারের জন্য cos α = -u / v = -${u} / ${v} ⇒ α = ${alphaDeg}°। লব্ধি বেগ R = √(v² - u²) = √(${v*v} - ${u*u}) = ${resV.toFixed(3)} km h⁻¹। মাঝি B-এর সময় t_B = (${d} / ${resV.toFixed(3)}) × 60 = ${tShortMin} min। সময়ের পার্থক্য Δt = ${tShortMin} - ${tMinMin} = ${diffMin} min।`
      };
    }
  },
  HSC_CHEM_BUFFER: {
    curriculum: "HSC",
    subject: "HSC_CHEM1",
    chapter: "অধ্যায় ৪: রাসায়নিক পরিবর্তন (Chemical Changes — Equilibrium, Kp/Kc, pH, Buffer)",
    microTopic: "অম্লীয় বাফার দ্রবণের pH গণনা",
    type: "CQ",
    source: "বোর্ড ও হাজারী-নাগ স্যার অনুশীলনী প্যারামেট্রিক ক্লোন",
    defaultParams: { volAcid: 80, molAcid: 0.25, volBase: 40, molBase: 0.20 },
    paramFields: [
      { key: "volAcid", label: "CH₃COOH আয়তন V₁ (mL)", min: 50, max: 120, step: 10 },
      { key: "molAcid", label: "CH₃COOH ঘনমাত্রা M₁ (M)", min: 0.15, max: 0.50, step: 0.05 },
      { key: "volBase", label: "NaOH আয়তন V₂ (mL)", min: 20, max: 45, step: 5 },
      { key: "molBase", label: "NaOH ঘনমাত্রা M₂ (M)", min: 0.10, max: 0.25, step: 0.05 }
    ],
    build(p) {
      const vA = Number(p.volAcid) || 80;
      const mA = Number(p.molAcid) || 0.25;
      const vB = Number(p.volBase) || 40;
      const mB = Number(p.molBase) || 0.20;
      const nAcidInit = vA * mA;
      const nBaseInit = Math.min(vB * mB, nAcidInit - 1.5);
      const nSalt = nBaseInit;
      const nAcidRem = nAcidInit - nBaseInit;
      const pKa = 4.7447;
      const pH = (pKa + Math.log10(nSalt / nAcidRem)).toFixed(2);
      return {
        marks: 10,
        stem: `পাত্র-A: ${vA} mL ${mA.toFixed(2)} M CH₃COOH দ্রবণ (K_a = 1.8 × 10⁻⁵) এবং পাত্র-B: ${vB} mL ${mB.toFixed(2)} M NaOH দ্রবণ। পাত্র-A ও পাত্র-B এর দ্রবণ দুটিকে একত্রে মিশ্রিত করে পাত্র-C প্রস্তুত করা হলো।`,
        subparts: [
          { label: "ক", text: "বাফার দ্রবণ কাকে বলে?", marks: 1 },
          { label: "খ", text: "সকল বাফার দ্রবণই মিশ্র দ্রবণ কিন্তু সকল মিশ্র দ্রবণ বাফার নয় কেন?", marks: 2 },
          { label: "গ", text: "পাত্র-C এর মিশ্রিত দ্রবণের pH নির্ণয় কর।", marks: 3 },
          { label: "ঘ", text: "পাত্র-C এর দ্রবণে সামান্য পরিমাণ তীব্র অম্ল বা তীব্র ক্ষার যোগ করলে pH অপরিবর্তিত থাকার ক্রিয়াকৌশল সমীকরণসহ বিশ্লেষণ কর।", marks: 4 }
        ],
        solution: `ক [১]: যে দ্রবণে সামান্য পরিমাণ তীব্র অম্ল বা ক্ষার যোগ করলেও pH মানের উল্লেখযোগ্য পরিবর্তন ঘটে না, তাকে বাফার দ্রবণ বলে।
খ [২]: কেবল মৃদু অম্ল ও তার অনুবন্ধী ক্ষারক (বা মৃদু ক্ষার ও তার অনুবন্ধী অম্ল) বিশিষ্ট মিশ্র দ্রবণই বাফার ক্রিয়া প্রদর্শন করতে পারে।
গ [৩]: n(CH₃COOH) = ${vA} × ${mA.toFixed(2)} = ${nAcidInit.toFixed(2)} mmol; n(NaOH) = ${vB} × ${mB.toFixed(2)} = ${nBaseInit.toFixed(2)} mmol। প্রশমনের পর অবশিষ্ট n(CH₃COOH) = ${nAcidRem.toFixed(2)} mmol এবং উৎপন্ন লবণ n(CH₃COONa) = ${nSalt.toFixed(2)} mmol। pH = 4.7447 + log(${nSalt.toFixed(2)} / ${nAcidRem.toFixed(2)}) = ${pH}।
ঘ [৪]: H⁺ যোগ করলে CH₃COO⁻ + H⁺ ⇌ CH₃COOH এবং OH⁻ যোগ করলে CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O বিক্রিয়ার মাধ্যমে অতিরিক্ত আয়ন প্রশমিত হয়, ফলে pH (${pH}) স্থির থাকে।`
      };
    }
  },
  HSC_MATH_CALC: {
    curriculum: "HSC",
    subject: "HSC_MATH1",
    chapter: "অধ্যায় ৯: অন্তরীকরণ (Differentiation)",
    microTopic: "গুরুমান-লঘুমান ও পরাবৃত্ত-সরলরেখার আবদ্ধ ক্ষেত্রফল",
    type: "CQ",
    source: "কেতাব উদ্দিন স্যার ও বোর্ড সৃজনশীল প্যারামেট্রিক ক্লোন",
    defaultParams: { r1: 1, r2: 3, cVal: 5, kParab: 8, mLine: 2 },
    paramFields: [
      { key: "r1", label: "চরম বিন্দু x₁", min: 1, max: 3, step: 1 },
      { key: "r2", label: "চরম বিন্দু x₂ (> x₁)", min: 4, max: 7, step: 1 },
      { key: "kParab", label: "পরাবৃত্ত y² = kx এর k", min: 4, max: 16, step: 4 }
    ],
    build(p) {
      const r1 = Number(p.r1) || 1;
      const r2 = Math.max(Number(p.r2) || 4, r1 + 1);
      const k = Number(p.kParab) || 8;
      // f'(x) = 3(x - r1)(x - r2) = 3x^2 - 3(r1+r2)x + 3r1r2
      // Let's multiply by 2 so integer coefficients always! f'(x) = 6(x - r1)(x - r2) = 6x^2 - 6(r1+r2)x + 6r1r2
      // Then f(x) = 2x^3 - 3(r1+r2)x^2 + 6r1r2 x + 4
      const bCoeff = 3 * (r1 + r2);
      const cCoeff = 6 * r1 * r2;
      const fAt = (x) => 2 * x * x * x - bCoeff * x * x + cCoeff * x + 4;
      const maxVal = fAt(r1);
      const minVal = fAt(r2);
      // Area between y^2 = kx and y = x: intersection x^2 = kx => x = 0, k. Area = k^2 / 6
      const areaNum = (k * k / 6).toFixed(2);
      return {
        marks: 10,
        stem: `দৃশ্যকল্প-১: f(x) = 2x³ - ${bCoeff}x² + ${cCoeff}x + 4 একটি বহুপদী ফাংশন। দৃশ্যকল্প-২: y² = ${k}x পরাবৃত্ত এবং y = x সরলরেখা দ্বারা আবদ্ধ ক্ষেত্র।`,
        subparts: [
          { label: "ক", text: "d/dx (x^x) নির্ণয় কর।", marks: 2 },
          { label: "খ", text: "দৃশ্যকল্প-১ হতে f(x)-এর গুরুমান ও লঘুমান নির্ণয় কর।", marks: 4 },
          { label: "গ", text: `দৃশ্যকল্প-২ এ বর্ণিত y² = ${k}x পরাবৃত্ত ও y = x সরলরেখা দ্বারা আবদ্ধ ক্ষেত্রের ক্ষেত্রফল নির্ণয় কর।`, marks: 4 }
        ],
        solution: `ক [২]: d/dx (x^x) = x^x (1 + ln x)।
খ [৪]: f'(x) = 6x² - ${2*bCoeff}x + ${cCoeff} = 6(x - ${r1})(x - ${r2}) এবং f''(x) = 12x - ${2*bCoeff}। চরম মানের জন্য x = ${r1}, ${r2}। x = ${r1} বিন্দুতে f''(${r1}) < 0, সুতরাং গুরুমান f(${r1}) = ${maxVal}। x = ${r2} বিন্দুতে f''(${r2}) > 0, সুতরাং লঘুমান f(${r2}) = ${minVal}।
গ [৪]: ছেদবিন্দু: x² = ${k}x ⇒ x = 0, ${k}। আবদ্ধ ক্ষেত্রফল A = ∫₀^(${k}) (√(${k}x) - x) dx = k²/6 = ${k*k}/6 = ${areaNum} বর্গ একক।`
      };
    }
  },
  IAL_P1_P2_CIRC: {
    curriculum: "IAL",
    subject: "IAL_P2",
    chapter: "P2 Ch 1–2: Algebraic Methods (Remainder/Factor Theorem & Proof) & Coordinate Geometry of Circle",
    microTopic: "Circle Equation, Centre, Radius & Tangent Line",
    type: "STRUCTURED",
    source: "Pearson Edexcel IAL Pure Maths P2 (WMA12/01) Parametric Clone",
    defaultParams: { cx: 4, cy: -3, rad5: 5 },
    paramFields: [
      { key: "cx", label: "Centre x-coord (h)", min: 1, max: 8, step: 1 },
      { key: "cy", label: "Centre y-coord (k)", min: -6, max: 5, step: 1 },
      { key: "rad5", label: "Scale Factor s (Radius = 5s)", min: 1, max: 3, step: 1 }
    ],
    build(p) {
      const h = Number(p.cx) || 4;
      const k = Number(p.cy) || -3;
      const s = Number(p.rad5) || 1;
      const r = 5 * s;
      const px = h + 3 * s;
      const py = k + 4 * s;
      const gCoeff = -2 * h;
      const fCoeff = -2 * k;
      const cConst = h * h + k * k - r * r;
      // Tangent at P(px, py): normal vector is (3, 4) so 3(x - px) + 4(y - py) = 0 => 3x + 4y - (3px + 4py) = 0
      const rhs = 3 * px + 4 * py;
      return {
        marks: 9,
        stem: `A circle C has equation x² + y² ${gCoeff >= 0 ? '+ ' + gCoeff : '- ' + Math.abs(gCoeff)}x ${fCoeff >= 0 ? '+ ' + fCoeff : '- ' + Math.abs(fCoeff)}y ${cConst >= 0 ? '+ ' + cConst : '- ' + Math.abs(cConst)} = 0. The point P(${px}, ${py}) lies on C.`,
        subparts: [
          { label: "(a)", text: "Find the coordinates of the centre A of circle C and state the exact radius of C.", marks: 3 },
          { label: "(b)", text: `Verify that P(${px}, ${py}) lies on C and find the equation of the tangent to C at P in the form ax + by + c = 0.`, marks: 4 },
          { label: "(c)", text: "Find the shortest distance from the origin O(0, 0) to the tangent line at P.", marks: 2 }
        ],
        solution: `(a) [3]: Completing the square gives (x - ${h})² + (y - (${k}))² = ${r*r} [M1]. Centre A(${h}, ${k}) [A1], radius r = ${r} [A1].
(b) [4]: At P(${px}, ${py}): (${px} - ${h})² + (${py} - (${k}))² = ${(3*s)**2} + ${(4*s)**2} = ${r*r} ✓ [B1]. Gradient of radius AP = 4/3 [M1], so gradient of tangent m_T = -3/4 [M1]. Tangent: y ${py < 0 ? "+ " + (-py) : "- " + py} = (-3/4)(x ${px < 0 ? "+ " + (-px) : "- " + px}) ⇒ 3x + 4y - ${rhs} = 0 [A1].
(c) [2]: Perpendicular distance from (0,0) to 3x + 4y - ${rhs} = 0 is |-${rhs}| / √(3² + 4²) = ${Math.abs(rhs)} / 5 = ${(Math.abs(rhs)/5).toFixed(2)} units [M1, A1].`
      };
    }
  },
  IAL_M1_INCLINE: {
    curriculum: "IAL",
    subject: "IAL_M1",
    chapter: "M1 Ch 3: Dynamics of a Particle (Newton's Laws, Inclined Planes, Connected Pulleys/Towing)",
    microTopic: "Particle on Rough Inclined Plane (tan α = 3/4)",
    type: "STRUCTURED",
    source: "Pearson Edexcel IAL Mechanics 1 (WME01/01) Parametric Clone",
    defaultParams: { massKg: 6, muVal: 0.25, forceP: 55 },
    paramFields: [
      { key: "massKg", label: "Mass m (kg)", min: 4, max: 12, step: 1 },
      { key: "muVal", label: "Coefficient of Friction μ", min: 0.15, max: 0.40, step: 0.05 },
      { key: "forceP", label: "Applied Force P (N)", min: 50, max: 110, step: 5 }
    ],
    build(p) {
      const m = Number(p.massKg) || 6;
      const mu = Number(p.muVal) || 0.25;
      const P = Number(p.forceP) || 55;
      const g = 9.8;
      const R = m * g * 0.8;
      const Fmax = mu * R;
      const wtComp = m * g * 0.6;
      const netF = Math.max(P - wtComp - Fmax, 2.0);
      const acc = netF / m;
      const v2 = acc * 2.0;
      const decel = g * (0.6 + 0.8 * mu);
      const stopDist = (v2 * v2) / (2 * decel);
      return {
        marks: 10,
        stem: `A particle P of mass ${m.toFixed(1)} kg lies on a rough plane inclined at an angle α to the horizontal, where tan α = 3/4. The coefficient of friction between P and the plane is μ = ${mu.toFixed(2)}. A force of magnitude ${P} N acts on P parallel to and up a line of greatest slope of the plane (take g = 9.8 m s⁻²).`,
        subparts: [
          { label: "(a)", text: `Show that the normal reaction R of the plane on P is ${R.toFixed(2)} N.`, marks: 2 },
          { label: "(b)", text: "Find the magnitude of the acceleration of P up the plane.", marks: 4 },
          { label: "(c)", text: `After P has moved from rest for 2.0 s, the ${P} N force is removed. Find the further distance P moves up the plane before coming instantaneously to rest.`, marks: 4 }
        ],
        solution: `(a) [2]: R = mg cos α = ${m} × 9.8 × (4/5) = ${R.toFixed(2)} N [M1, A1].
(b) [4]: F_max = μR = ${mu.toFixed(2)} × ${R.toFixed(2)} = ${Fmax.toFixed(2)} N [B1]. Resolving up the plane: ${P} - mg sin α - F_max = m a [M1] ⇒ ${P} - ${wtComp.toFixed(2)} - ${Fmax.toFixed(2)} = ${m}a ⇒ a = ${acc.toFixed(3)} m s⁻² [M1, A1].
(c) [4]: Speed at t = 2.0 s: v = 2.0 × ${acc.toFixed(3)} = ${v2.toFixed(3)} m s⁻¹ [B1]. Deceleration after force removed: a' = -g(sin α + μ cos α) = -${decel.toFixed(3)} m s⁻² [M1]. Using 0 = v² + 2a's ⇒ s = (${v2.toFixed(3)})² / (2 × ${decel.toFixed(3)}) = ${stopDist.toFixed(3)} m [M1, A1].`
      };
    }
  },
  IAL_S1_NORMAL: {
    curriculum: "IAL",
    subject: "IAL_S1",
    chapter: "S1 Ch 7: The Normal Distribution (Standardising Z & Inverse Normal)",
    microTopic: "Normal Distribution Standardisation & Symmetry",
    type: "STRUCTURED",
    source: "Pearson Edexcel IAL Statistics 1 (WST01/01) Parametric Clone",
    defaultParams: { meanMu: 500, sdSigma: 10 },
    paramFields: [
      { key: "meanMu", label: "Mean μ (g)", min: 250, max: 750, step: 50 },
      { key: "sdSigma", label: "Std Dev σ (g)", min: 5, max: 20, step: 5 }
    ],
    build(p) {
      const mu = Number(p.meanMu) || 500;
      const sig = Number(p.sdSigma) || 10;
      const xHigh = mu + 1.5 * sig;
      const xLow = mu - 1.0 * sig;
      const kVal = (1.6449 * sig).toFixed(2);
      return {
        marks: 9,
        stem: `The masses, M grams, of packets of coffee produced by a machine are modelled by a normal distribution with mean μ = ${mu} g and standard deviation σ = ${sig} g.`,
        subparts: [
          { label: "(a)", text: `Find the probability that a randomly selected packet has a mass greater than ${xHigh} g.`, marks: 2 },
          { label: "(b)", text: `Find the value of k such that P(${mu} - k < M < ${mu} + k) = 0.90.`, marks: 3 },
          { label: "(c)", text: `Given that a packet weighs more than ${xLow} g, find the conditional probability that it weighs less than ${xHigh} g.`, marks: 4 }
        ],
        solution: `(a) [2]: Z = (${xHigh} - ${mu}) / ${sig} = 1.50 [M1]. P(M > ${xHigh}) = 1 - Φ(1.50) = 1 - 0.9332 = 0.0668 [A1].
(b) [3]: Φ(k / ${sig}) = 0.95 ⇒ k / ${sig} = 1.6449 [M1, B1] ⇒ k = ${kVal} g [A1].
(c) [4]: P(M > ${xLow}) = P(Z > -1.00) = 0.8413 [B1]. P(${xLow} < M < ${xHigh}) = 0.9332 - 0.1587 = 0.7745 [M1]. Conditional probability = 0.7745 / 0.8413 = 0.921 (3 s.f.) [M1, A1].`
      };
    }
  },
  IAL_PHY_PROJ: {
    curriculum: "IAL",
    subject: "IAL_PHY",
    chapter: "WPH11 Unit 1: Mechanics and Materials (Kinematics, Projectiles, Moments, Fluids, Stress-Strain)",
    microTopic: "Projectile Motion & Obstacle Clearance",
    type: "STRUCTURED",
    source: "Pearson Edexcel IAL Physics WPH11/01 Parametric Clone",
    defaultParams: { speedU: 30, angleDeg: 35, distD: 42 },
    paramFields: [
      { key: "speedU", label: "Launch Speed u (m s⁻¹)", min: 24, max: 38, step: 2 },
      { key: "angleDeg", label: "Launch Angle θ (°)", min: 30, max: 45, step: 5 },
      { key: "distD", label: "Wall Distance x (m)", min: 30, max: 50, step: 4 }
    ],
    build(p) {
      const u = Number(p.speedU) || 30;
      const deg = Number(p.angleDeg) || 35;
      const d = Number(p.distD) || 42;
      const rad = deg * Math.PI / 180;
      const ux = u * Math.cos(rad);
      const uy = u * Math.sin(rad);
      const t = d / ux;
      const y = uy * t - 0.5 * 9.81 * t * t;
      const wallH = 5.0;
      const diff = y - wallH;
      return {
        marks: 8,
        stem: `A ball is projected from ground level at point O with initial speed ${u.toFixed(1)} m s⁻¹ at an angle of ${deg}.0° above the horizontal towards a vertical wall of height ${wallH.toFixed(2)} m located ${d.toFixed(1)} m horizontally from O (g = 9.81 m s⁻²).`,
        subparts: [
          { label: "(a)", text: `Show that the initial vertical component of velocity is ${uy.toFixed(2)} m s⁻¹.`, marks: 2 },
          { label: "(b)", text: `Calculate the time taken for the ball to reach the horizontal distance of ${d.toFixed(1)} m.`, marks: 2 },
          { label: "(c)", text: `Determine by calculation whether the ball clears the ${wallH.toFixed(2)} m wall and state the vertical distance between the ball and the top of the wall.`, marks: 4 }
        ],
        solution: `(a) [2]: u_y = ${u.toFixed(1)} sin(${deg}.0°) = ${uy.toFixed(2)} m s⁻¹ [M1, A1].
(b) [2]: u_x = ${u.toFixed(1)} cos(${deg}.0°) = ${ux.toFixed(2)} m s⁻¹ [M1]; t = ${d.toFixed(1)} / ${ux.toFixed(2)} = ${t.toFixed(3)} s [A1].
(c) [4]: y = u_y t - ½ g t² = (${uy.toFixed(2)})(${t.toFixed(3)}) - 4.905(${t.toFixed(3)})² = ${y.toFixed(2)} m [M1, M1, A1]. Since ${y.toFixed(2)} m ${diff >= 0 ? '> ' : '< '} ${wallH.toFixed(2)} m, the ball ${diff >= 0 ? 'clears the wall by ' + diff.toFixed(2) + ' m' : 'hits the wall ' + Math.abs(diff).toFixed(2) + ' m below the top'} [A1].`
      };
    }
  },
  IGCSE_4PM1_QUAD: {
    curriculum: "IGCSE",
    subject: "IGCSE_4PM1",
    chapter: "4PM1 Topic 1–2: Logarithmic Functions/Indices & The Quadratic Function (Roots α, β)",
    microTopic: "Roots of Quadratic Equation (α, β) & Symmetric Sums",
    type: "STRUCTURED",
    source: "Pearson Edexcel IGCSE Further Pure Maths (4PM1/01) Parametric Clone",
    defaultParams: { aCoef: 2, bCoef: 7, cCoef: 4 },
    paramFields: [
      { key: "aCoef", label: "Coefficient a (ax² - bx + c = 0)", min: 1, max: 3, step: 1 },
      { key: "bCoef", label: "Coefficient b", min: 5, max: 11, step: 1 },
      { key: "cCoef", label: "Constant c", min: 2, max: 5, step: 1 }
    ],
    build(p) {
      const a = Number(p.aCoef) || 2;
      const b = Number(p.bCoef) || 7;
      const c = Number(p.cCoef) || 4;
      const sumVal = b / a;
      const prodVal = c / a;
      const sumSq = sumVal * sumVal - 2 * prodVal;
      const sumCube = sumVal * (sumSq - prodVal);
      return {
        marks: 9,
        stem: `The quadratic equation ${a}x² - ${b}x + ${c} = 0 has roots α and β.`,
        subparts: [
          { label: "(a)", text: "Without solving the equation, write down the value of (α + β) and the value of αβ.", marks: 2 },
          { label: "(b)", text: "Find the exact value of (i) α² + β² and (ii) α³ + β³.", marks: 4 },
          { label: "(c)", text: "Form a quadratic equation with roots (α + 2) and (β + 2).", marks: 3 }
        ],
        solution: `(a) [2]: α + β = ${b}/${a} = ${sumVal.toFixed(2)} [B1]; αβ = ${c}/${a} = ${prodVal.toFixed(2)} [B1].
(b) [4]: (i) α² + β² = (α + β)² - 2αβ = (${b}/${a})² - 2(${c}/${a}) = ${sumSq.toFixed(3)} [M1, A1]. (ii) α³ + β³ = (α + β)(α² - αβ + β²) = ${sumCube.toFixed(3)} [M1, A1].
(c) [3]: New sum = (α + β) + 4 = ${(sumVal + 4).toFixed(2)} [B1]; New product = αβ + 2(α + β) + 4 = ${(prodVal + 2 * sumVal + 4).toFixed(2)} [M1]. Equation: ${a}x² - ${(b + 4 * a)}x + ${(c + 2 * b + 4 * a)} = 0 [A1].`
      };
    }
  }
};

// =========================================================================
// 5. FILTERING, RENDERING & QUESTION BANK INTERACTIONS
// =========================================================================
function populateFilterDropdowns() {
  const currSelect = document.getElementById("filterCurriculum");
  const subjSelect = document.getElementById("filterSubject");
  const chapSelect = document.getElementById("filterChapter");
  if (!currSelect || !subjSelect || !chapSelect) return;

  const selectedCurr = state.filters.curriculum;
  const prevSubj = state.filters.subject;

  // Populate subjects
  let subjHtml = `<option value="ALL">All subjects</option>`;
  const currKeys = selectedCurr === "ALL" ? Object.keys(SYLLABUS_DATA) : [selectedCurr];
  currKeys.forEach(cKey => {
    const cObj = SYLLABUS_DATA[cKey];
    Object.keys(cObj.subjects).forEach(sKey => {
      const sObj = cObj.subjects[sKey];
      subjHtml += `<option value="${sKey}">${escapeHtml(sObj.name)}</option>`;
    });
  });
  subjSelect.innerHTML = subjHtml;
  if ([...subjSelect.options].some(o => o.value === prevSubj)) {
    subjSelect.value = prevSubj;
  } else {
    state.filters.subject = "ALL";
    subjSelect.value = "ALL";
  }

  // Populate chapters
  const activeSubj = state.filters.subject;
  const prevChap = state.filters.chapter;
  let chapHtml = `<option value="ALL">All chapters</option>`;
  currKeys.forEach(cKey => {
    const cObj = SYLLABUS_DATA[cKey];
    Object.keys(cObj.subjects).forEach(sKey => {
      if (activeSubj !== "ALL" && activeSubj !== sKey) return;
      cObj.subjects[sKey].chapters.forEach(chap => {
        chapHtml += `<option value="${escapeHtml(chap)}">${escapeHtml(chap)}</option>`;
      });
    });
  });
  chapSelect.innerHTML = chapHtml;
  if ([...chapSelect.options].some(o => o.value === prevChap)) {
    chapSelect.value = prevChap;
  } else {
    state.filters.chapter = "ALL";
    chapSelect.value = "ALL";
  }

  // Populate Micro-Topic & Set dropdown dynamically from matching questions
  const microSelect = document.getElementById("filterMicroTopic");
  if (microSelect) {
    const prevMicro = state.filters.microTopic || "ALL";
    const microSet = new Set();
    state.questions.forEach(q => {
      if (state.filters.curriculum !== "ALL" && q.curriculum !== state.filters.curriculum) return;
      if (state.filters.subject !== "ALL" && q.subject !== state.filters.subject) return;
      if (state.filters.chapter !== "ALL" && q.chapter !== state.filters.chapter) return;
      if (q.microTopic) microSet.add(q.microTopic);
    });
    let microHtml = `<option value="ALL">All topics (${microSet.size})</option>`;
    [...microSet].forEach(mt => {
      microHtml += `<option value="${escapeHtml(mt)}">${escapeHtml(mt)}</option>`;
    });
    microSelect.innerHTML = microHtml;
    if ([...microSelect.options].some(o => o.value === prevMicro)) {
      microSelect.value = prevMicro;
    } else {
      state.filters.microTopic = "ALL";
      microSelect.value = "ALL";
    }
  }
}

function getFilteredQuestions() {
  return state.questions.filter(q => {
    if (state.filters.curriculum !== "ALL" && q.curriculum !== state.filters.curriculum) return false;
    if (state.filters.subject !== "ALL" && q.subject !== state.filters.subject) return false;
    if (state.filters.chapter !== "ALL" && q.chapter !== state.filters.chapter) return false;
    if (state.filters.microTopic && state.filters.microTopic !== "ALL" && q.microTopic !== state.filters.microTopic) return false;
    if (state.filters.type === "HIGH_YIELD" && !q.highYield) return false;
    if (state.filters.type === "CLONABLE" && !q.clonableTemplate) return false;
    if (["CQ", "MCQ", "STRUCTURED"].includes(state.filters.type) && q.type !== state.filters.type) return false;

    if (state.filters.search.trim() !== "") {
      const term = state.filters.search.trim().toLowerCase();
      const haystack = `${q.stem} ${q.chapter} ${q.microTopic || ""} ${q.source || ""} ${(q.subparts || []).map(s => s.text).join(" ")}`.toLowerCase();
      if (!haystack.includes(term)) return false;
    }
    return true;
  });
}

function getSubjectName(curriculum, subjectKey) {
  if (SYLLABUS_DATA[curriculum] && SYLLABUS_DATA[curriculum].subjects[subjectKey]) {
    return SYLLABUS_DATA[curriculum].subjects[subjectKey].name;
  }
  return subjectKey;
}

function renderQuestionBank() {
  const listEl = document.getElementById("questionBankList");
  const summaryEl = document.getElementById("filteredResultSummary");
  const bankCountBadge = document.getElementById("bankCountBadge");
  const paperCountBadge = document.getElementById("paperCountBadge");
  const selectedCountInline = document.getElementById("selectedCountInline");

  if (bankCountBadge) bankCountBadge.textContent = String(state.questions.length);
  if (paperCountBadge) paperCountBadge.textContent = String(state.paperQueueIds.length);
  if (selectedCountInline) selectedCountInline.textContent = String(state.paperQueueIds.length);

  const filtered = getFilteredQuestions();
  if (summaryEl) {
    summaryEl.textContent = `${filtered.length} of ${state.questions.length} questions`;
  }

  if (!listEl) return;
  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="card col-span-full px-6 py-12 text-center">
        <h3 class="section-title">${state.questions.length ? "No questions match these filters" : "No questions yet"}</h3>
        <p class="section-sub">${state.questions.length ? "Clear the filters, or add a question of your own for this topic." : "Add a question of your own to get started."}</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = filtered.map(q => {
    const inPaper = state.paperQueueIds.includes(q.id);
    const subjName = getSubjectName(q.curriculum, q.subject);
    const own = !isBankQuestion(q);

    let body = "";
    if (isSafeImage(q.imageDataUrl)) {
      body += `<img src="${escapeHtml(q.imageDataUrl)}" alt="Question figure" class="q-figure" />`;
    }
    if (q.svgDiagram) {
      body += safeSvg(q.svgDiagram);
    }
    if (q.type === "MCQ" && Array.isArray(q.options)) {
      body += `<div class="q-options font-bangla">${q.options.map(opt => `<div>${escapeHtml(opt)}</div>`).join("")}</div>`;
    } else if (Array.isArray(q.subparts) && q.subparts.length > 0) {
      body += `
        <div class="q-parts font-bangla">
          ${q.subparts.map(sp => `
            <div class="q-part">
              <div><b>${escapeHtml(sp.label)}</b> ${escapeHtml(sp.text)}</div>
              <span class="q-part-marks">[${Number(sp.marks) || 0}]</span>
            </div>
          `).join("")}
        </div>
      `;
    }
    const topic = [q.chapter, q.microTopic].filter(Boolean).map(escapeHtml).join(" · ");

    return `
      <article class="q-card ${inPaper ? "is-selected" : ""}">
        <div class="q-meta">
          <span class="chip">${escapeHtml(q.curriculum)}</span>
          <span class="chip font-bangla">${escapeHtml(subjName)}</span>
          ${q.highYield ? `<span class="chip chip-accent">High priority</span>` : ""}
          ${own ? `<span class="chip chip-own">Yours</span>` : ""}
          <span class="q-marks">${Number(q.marks) || 0} ${Number(q.marks) === 1 ? "mark" : "marks"}</span>
        </div>
        <p class="q-topic font-bangla">${topic}</p>
        <p class="q-stem font-bangla">${escapeHtml(q.stem)}</p>
        ${body}
        <details class="q-solution">
          <summary>Mark scheme</summary>
          <div class="q-solution-body font-bangla">${escapeHtml(q.solution || "No mark scheme written yet.")}</div>
        </details>
        <div class="q-actions">
          <span class="q-source font-bangla" title="${escapeHtml(q.source || "")}">${escapeHtml(q.source || "")}</span>
          <div class="flex flex-wrap items-center gap-1.5">
            <button type="button" data-action="delete-question" data-id="${escapeHtml(q.id)}" class="btn btn-quiet btn-sm">${own ? "Delete" : "Hide"}</button>
            ${q.clonableTemplate ? `<button type="button" data-action="quick-clone" data-id="${escapeHtml(q.id)}" class="btn btn-secondary btn-sm" title="Make a copy with new numbers and a recalculated mark scheme">New numbers</button>` : ""}
            <button type="button" data-action="toggle-paper" data-id="${escapeHtml(q.id)}" class="btn btn-sm ${inPaper ? "btn-selected" : "btn-primary"}">${inPaper ? "On paper ✓" : "Add to paper"}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// =========================================================================
// 6. A4 PRINTABLE EXAM PAPER & MARK SCHEME RENDERER
// =========================================================================
function renderExamPaperView() {
  const pillsEl = document.getElementById("paperQueuePills");
  const totalMarksSummary = document.getElementById("paperTotalMarksSummary");
  const a4El = document.getElementById("printableA4Container");
  const mdBox = document.getElementById("exportMarkdownBox");

  const selectedQuestions = state.paperQueueIds
    .map(id => state.questions.find(q => q.id === id))
    .filter(Boolean);

  const totalMarks = selectedQuestions.reduce((acc, q) => acc + (Number(q.marks) || 0), 0);
  if (totalMarksSummary) {
    totalMarksSummary.textContent = `${selectedQuestions.length} question${selectedQuestions.length === 1 ? "" : "s"} · ${totalMarks} marks`;
  }

  // Render Reorder Pills
  if (pillsEl) {
    if (selectedQuestions.length === 0) {
      pillsEl.innerHTML = `<span class="text-sm text-slate-500">Nothing on the paper yet. Add questions from the question bank.</span>`;
    } else {
      pillsEl.innerHTML = selectedQuestions.map((q, idx) => `
        <div class="pill">
          <span class="font-semibold text-slate-900">Q${idx + 1}</span>
          <span class="max-w-[110px] truncate text-slate-600 font-bangla sm:max-w-[180px]">${escapeHtml(q.microTopic || q.chapter)}</span>
          <span class="tabular-nums text-slate-400">${Number(q.marks) || 0}m</span>
          <button type="button" data-paper-action="up" data-idx="${idx}" title="Move up" aria-label="Move up">↑</button>
          <button type="button" data-paper-action="down" data-idx="${idx}" title="Move down" aria-label="Move down">↓</button>
          ${q.clonableTemplate ? `<button type="button" data-paper-action="clone-in-place" data-id="${escapeHtml(q.id)}" title="New numbers for this question" aria-label="New numbers">↻</button>` : ""}
          <button type="button" data-paper-action="remove" data-id="${escapeHtml(q.id)}" title="Remove from paper" aria-label="Remove">✕</button>
        </div>
      `).join("");
    }
  }

  // Header values
  const titleVal = (document.getElementById("paperHeaderTitle") || {}).value || "Topic test";
  const instructorVal = (document.getElementById("paperHeaderInstructor") || {}).value || "";
  const timeVal = (document.getElementById("paperHeaderTime") || {}).value || "40 Minutes";
  const dateVal = (document.getElementById("paperHeaderDate") || {}).value || "Set A";

  const isCompact = (document.getElementById("chkCompactMode") || {}).checked !== false;
  const showDotted = (document.getElementById("chkShowDottedLines") || {}).checked === true;
  const showSource = (document.getElementById("chkShowSourceOnPrint") || {}).checked !== false;
  const showStudentBox = (document.getElementById("chkStudentInfoBox") || {}).checked !== false;
  const isMarkScheme = state.paperViewMode === "markscheme";

  if (!a4El) return;

  if (selectedQuestions.length === 0) {
    a4El.innerHTML = `
      <div class="py-16 text-center space-y-2 text-slate-400">
        <p class="text-base font-semibold text-slate-600">This paper is empty</p>
        <p class="text-sm">Add questions from the question bank, or load a ready-made topic test.</p>
      </div>
    `;
    return;
  }

  const questionsHtml = selectedQuestions.map((q, idx) => {
    const qNum = idx + 1;
    let subHtml = "";

    if (isSafeImage(q.imageDataUrl)) {
      subHtml += `<div class="my-2"><img src="${escapeHtml(q.imageDataUrl)}" alt="Question Figure" class="max-w-full h-auto rounded border border-slate-300 max-h-52" /></div>`;
    }
    if (q.svgDiagram) {
      subHtml += `${safeSvg(q.svgDiagram)}`;
    }

    if (q.type === "MCQ" && Array.isArray(q.options)) {
      subHtml += `
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1.5 text-xs sm:text-sm font-bangla">
          ${q.options.map(opt => `<div>${escapeHtml(opt)}</div>`).join("")}
        </div>
      `;
    } else if (Array.isArray(q.subparts) && q.subparts.length > 0) {
      subHtml += `
        <div class="mt-2 space-y-1.5 pl-2 sm:pl-4 font-bangla">
          ${q.subparts.map(sp => {
            const lineCount = Math.min(Math.max(Number(sp.marks) || 2, 1) * 2, 6);
            const dottedBlock = (showDotted && !isMarkScheme)
              ? `<div class="mt-1 mb-2 space-y-1">${Array.from({ length: lineCount }).map(() => `<div class="dotted-line"></div>`).join("")}</div>`
              : "";
            return `
              <div>
                <div class="flex items-start justify-between gap-3 text-xs sm:text-sm">
                  <div><strong class="font-bold">${escapeHtml(sp.label)}</strong> ${escapeHtml(sp.text)}</div>
                  <span class="shrink-0 font-bold text-slate-800">[${Number(sp.marks) || 0}]</span>
                </div>
                ${dottedBlock}
              </div>
            `;
          }).join("")}
        </div>
      `;
    }

    const markSchemeBlock = isMarkScheme ? `
      <div class="mt-2.5 rounded border border-slate-300 bg-slate-50 p-3 text-xs leading-relaxed text-slate-900 font-bangla">
        <div class="mb-1 text-[11px] font-bold uppercase tracking-wide text-slate-600">Mark scheme (Q${qNum})</div>
        <div class="whitespace-pre-line">${escapeHtml(q.solution || "")}</div>
      </div>
    ` : "";

    return `
      <div class="question-block-print ${isCompact ? 'py-3' : 'py-5'} border-b border-slate-200 last:border-b-0">
        <div class="flex items-start justify-between gap-3">
          <div class="text-xs sm:text-sm font-bangla leading-relaxed flex-1">
            <span class="font-extrabold text-slate-950 mr-1.5">Q${qNum}.</span>
            ${showSource ? `<span class="text-[11px] font-semibold text-slate-500 mr-1.5">[${escapeHtml(q.source || q.chapter)}]</span>` : ""}
            <span class="whitespace-pre-line">${escapeHtml(q.stem)}</span>
          </div>
          <span class="shrink-0 text-xs font-extrabold border border-slate-400 px-2 py-0.5 rounded">
            ${Number(q.marks) || 0} ${Number(q.marks) === 1 ? 'Mark' : 'Marks'}
          </span>
        </div>
        ${subHtml}
        ${markSchemeBlock}
      </div>
    `;
  }).join("");

  a4El.innerHTML = `
    <!-- Exam Sheet Top Header -->
    <div class="border-b-2 border-slate-900 pb-3 mb-4">
      <div class="flex items-start justify-between gap-4">
        <div class="min-w-0">
          <h1 class="text-lg sm:text-xl font-extrabold tracking-tight text-slate-950 font-bangla">${escapeHtml(titleVal)}</h1>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">${escapeHtml(instructorVal)}</p>
        </div>
        <div class="shrink-0 text-right text-xs sm:text-sm">
          <div class="font-extrabold text-slate-950">${isMarkScheme ? 'Mark scheme and solutions' : escapeHtml(dateVal)}</div>
          <div class="text-slate-700">Time: <strong>${escapeHtml(timeVal)}</strong> | Full Marks: <strong>${totalMarks}</strong></div>
        </div>
      </div>

      ${showStudentBox && !isMarkScheme ? `
        <div class="grid grid-cols-12 gap-2 mt-3 pt-2.5 border-t border-slate-300 text-xs">
          <div class="col-span-6 border border-slate-400 rounded px-2.5 py-1.5">
            <strong>Student Name:</strong>
          </div>
          <div class="col-span-3 border border-slate-400 rounded px-2.5 py-1.5">
            <strong>Batch / Roll:</strong>
          </div>
          <div class="col-span-3 border border-slate-400 rounded px-2.5 py-1.5">
            <strong>Score:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / ${totalMarks}
          </div>
        </div>
      ` : ""}
    </div>

    <!-- Questions Body -->
    <div class="divide-y divide-slate-200">
      ${questionsHtml}
    </div>

    <!-- Footer -->
    <div class="mt-6 pt-3 border-t border-slate-300 flex items-center justify-between text-[11px] text-slate-500">
      <span>${escapeHtml(instructorVal)}</span>
      <span>Total Marks: ${totalMarks} • End of Question Paper</span>
    </div>
  `;

  // Also update Markdown/LaTeX export box
  if (mdBox) {
    const mdLines = [
      `# ${titleVal}`,
      `**${instructorVal}** | **Time:** ${timeVal} | **Full Marks:** ${totalMarks} | **${dateVal}**`,
      ``
    ];
    selectedQuestions.forEach((q, idx) => {
      mdLines.push(`### Q${idx + 1}. [${q.marks} Marks] (${q.source || q.chapter})`);
      mdLines.push(`${q.stem}`);
      if (q.type === "MCQ" && Array.isArray(q.options)) {
        mdLines.push(q.options.join("   "));
      } else if (Array.isArray(q.subparts)) {
        q.subparts.forEach(sp => {
          mdLines.push(`- **${sp.label}** ${sp.text} **[${sp.marks}]**`);
        });
      }
      if (isMarkScheme) {
        mdLines.push(`\n> **Mark Scheme:**\n> ${(q.solution || "").replace(/\n/g, "\n> ")}`);
      }
      mdLines.push(``);
    });
    mdBox.value = mdLines.join("\n");
  }
}

// =========================================================================
// 7. CREATE TAB: STRUCTURED FORM, CROP CANVAS & CLONER UI
// =========================================================================
function populateCreateFormSelects(currId, subjId, chapId) {
  const currEl = document.getElementById(currId);
  const subjEl = document.getElementById(subjId);
  const chapEl = document.getElementById(chapId);
  if (!currEl || !subjEl || !chapEl) return;

  const cKey = currEl.value || "HSC";
  const cObj = SYLLABUS_DATA[cKey] || SYLLABUS_DATA.HSC;
  const subjKeys = Object.keys(cObj.subjects);

  const prevSubj = subjEl.value;
  subjEl.innerHTML = subjKeys.map(sk => `<option value="${sk}">${escapeHtml(cObj.subjects[sk].name)}</option>`).join("");
  if (subjKeys.includes(prevSubj)) {
    subjEl.value = prevSubj;
  }

  const activeSubj = subjEl.value || subjKeys[0];
  const chapters = (cObj.subjects[activeSubj] || {}).chapters || [];
  chapEl.innerHTML = chapters.map(ch => `<option value="${escapeHtml(ch)}">${escapeHtml(ch)}</option>`).join("");
}

function renderSubpartRows() {
  const listEl = document.getElementById("subpartRowsList");
  if (!listEl) return;
  listEl.innerHTML = state.newQuestionSubparts.map((sp, idx) => `
    <div class="flex items-center gap-2">
      <input type="text" aria-label="Part label" data-sp-field="label" data-idx="${idx}" value="${escapeHtml(sp.label)}" class="field w-16 shrink-0 text-center font-semibold" />
      <input type="text" aria-label="Part text" data-sp-field="text" data-idx="${idx}" value="${escapeHtml(sp.text)}" class="field font-bangla" />
      <input type="number" aria-label="Marks" min="1" max="20" data-sp-field="marks" data-idx="${idx}" value="${Number(sp.marks) || 1}" class="field w-20 shrink-0 text-center" />
      <button type="button" data-sp-remove="${idx}" class="btn btn-quiet btn-sm" aria-label="Remove this part">✕</button>
    </div>
  `).join("");
}

// --- Interactive Canvas Cropper ---
let rawCropSourceImage = null;

// Crop box in percent of the picture: { top, bottom, left, right }.
function readCropBox() {
  const v = (id, d) => { const el = document.getElementById(id); return el ? Number(el.value) : d; };
  return { top: v("cropTopRange", 0), bottom: v("cropBottomRange", 100), left: v("cropLeftRange", 0), right: v("cropRightRange", 100) };
}

// Draws the preview with the crop box marked, and keeps the cropped picture itself (at the picture's own
// resolution, never stretched) in state.cropDataUrl for the exam paper.
function drawCropCanvas() {
  const canvas = document.getElementById("cropCanvas");
  if (!canvas) return;
  const src = rawCropSourceImage || sampleCropFigure();
  const box = readCropBox();
  const sw = src.width, sh = src.height;
  const cx = Math.round(sw * box.left / 100), cy = Math.round(sh * box.top / 100);
  const cw = Math.max(20, Math.round(sw * (box.right - box.left) / 100)), ch = Math.max(20, Math.round(sh * (box.bottom - box.top) / 100));

  canvas.width = 640;
  canvas.height = Math.max(120, Math.min(900, Math.round(640 * sh / sw)));
  const ctx = canvas.getContext("2d");
  const k = canvas.width / sw;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(src, 0, 0, sw, sh, 0, 0, canvas.width, sh * k);
  ctx.fillStyle = "rgba(15, 23, 42, 0.45)";
  ctx.fillRect(0, 0, canvas.width, cy * k);
  ctx.fillRect(0, (cy + ch) * k, canvas.width, canvas.height - (cy + ch) * k);
  ctx.fillRect(0, cy * k, cx * k, ch * k);
  ctx.fillRect((cx + cw) * k, cy * k, canvas.width - (cx + cw) * k, ch * k);
  ctx.strokeStyle = "#4f46e5";
  ctx.lineWidth = 2;
  ctx.strokeRect(cx * k + 1, cy * k + 1, cw * k - 2, ch * k - 2);

  const scale = Math.min(1, 1400 / cw);
  const out = document.createElement("canvas");
  out.width = Math.round(cw * scale);
  out.height = Math.round(ch * scale);
  const octx = out.getContext("2d");
  octx.fillStyle = "#ffffff";
  octx.fillRect(0, 0, out.width, out.height);
  octx.drawImage(src, cx, cy, cw, ch, 0, 0, out.width, out.height);
  state.cropDataUrl = out.toDataURL("image/jpeg", 0.88);
}

// A drawn pulley figure, so the cropper can be tried before uploading anything.
let sampleFigureCanvas = null;
function sampleCropFigure() {
  if (sampleFigureCanvas) return sampleFigureCanvas;
  const c = document.createElement("canvas");
  c.width = 600; c.height = 280;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 600, 280);
  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 13px Inter, sans-serif";
  ctx.fillText("Figure 2 (sample)", 24, 34);
  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(220, 55); ctx.lineTo(380, 55); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(300, 55); ctx.lineTo(300, 82); ctx.stroke();
  ctx.beginPath(); ctx.arc(300, 96, 18, 0, Math.PI * 2); ctx.fillStyle = "#f1f5f9"; ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(282, 96); ctx.lineTo(282, 185); ctx.moveTo(318, 96); ctx.lineTo(318, 165); ctx.stroke();
  ctx.fillStyle = "#e2e8f0"; ctx.fillRect(256, 185, 52, 42); ctx.strokeRect(256, 185, 52, 42);
  ctx.fillStyle = "#0f172a"; ctx.font = "bold 12px Inter, sans-serif"; ctx.fillText("A (3m)", 262, 210);
  ctx.fillStyle = "#f8fafc"; ctx.fillRect(322, 165, 44, 36); ctx.strokeRect(322, 165, 44, 36);
  ctx.fillStyle = "#0f172a"; ctx.fillText("B (m)", 328, 188);
  sampleFigureCanvas = c;
  return c;
}


// --- Parametric Cloner Panel ---
function initClonerTemplate(templateId) {
  state.clonerTemplateId = templateId;
  const tpl = CLONER_TEMPLATES[templateId] || CLONER_TEMPLATES.HSC_PHY_RIVER;
  state.clonerParams = { ...tpl.defaultParams };
  renderClonerParamsAndPreview();
}

function renderClonerParamsAndPreview() {
  const tpl = CLONER_TEMPLATES[state.clonerTemplateId] || CLONER_TEMPLATES.HSC_PHY_RIVER;
  const paramsBox = document.getElementById("clonerParamsBox");
  const qPrev = document.getElementById("clonerQuestionPreview");
  const sPrev = document.getElementById("clonerSolutionPreview");
  const marksEl = document.getElementById("clonerPreviewMarks");

  if (paramsBox) {
    paramsBox.innerHTML = tpl.paramFields.map(pf => {
      const val = state.clonerParams[pf.key] !== undefined ? state.clonerParams[pf.key] : tpl.defaultParams[pf.key];
      return `
        <label class="block">
          <span class="mb-1 flex items-center justify-between text-sm">
            <span class="font-bangla text-slate-700">${escapeHtml(pf.label)}</span>
            <span class="font-semibold tabular-nums text-slate-900" data-cloner-value="${pf.key}">${val}</span>
          </span>
          <input type="range" data-cloner-param="${pf.key}" min="${pf.min}" max="${pf.max}" step="${pf.step}" value="${val}" class="w-full" />
        </label>
      `;
    }).join("");
  }
  renderClonerPreview();
}

// Rebuilds only the preview, so dragging a slider does not replace the slider being dragged.
function renderClonerPreview() {
  const tpl = CLONER_TEMPLATES[state.clonerTemplateId] || CLONER_TEMPLATES.HSC_PHY_RIVER;
  const qPrev = document.getElementById("clonerQuestionPreview");
  const sPrev = document.getElementById("clonerSolutionPreview");
  const marksEl = document.getElementById("clonerPreviewMarks");
  const built = tpl.build({ ...tpl.defaultParams, ...state.clonerParams });
  state.clonerGeneratedQuestion = {
    id: newId("q_clone"),
    curriculum: tpl.curriculum,
    subject: tpl.subject,
    chapter: tpl.chapter,
    microTopic: tpl.microTopic,
    type: tpl.type,
    highYield: true,
    clonableTemplate: state.clonerTemplateId,
    source: tpl.source,
    stem: built.stem,
    subparts: built.subparts,
    marks: built.marks,
    solution: built.solution
  };

  if (marksEl) marksEl.textContent = `${built.marks} marks`;
  if (qPrev) {
    qPrev.innerHTML = `
      <p class="q-topic font-bangla" style="margin-top:0">${escapeHtml(tpl.chapter)} · ${escapeHtml(tpl.microTopic)}</p>
      <p class="q-stem font-bangla">${escapeHtml(built.stem)}</p>
      <div class="q-parts font-bangla">
        ${built.subparts.map(sp => `
          <div class="q-part">
            <div><b>${escapeHtml(sp.label)}</b> ${escapeHtml(sp.text)}</div>
            <span class="q-part-marks">[${Number(sp.marks) || 0}]</span>
          </div>
        `).join("")}
      </div>
    `;
  }
  if (sPrev) sPrev.textContent = built.solution;
}

function randomizeTemplateParams(templateId) {
  const tpl = CLONER_TEMPLATES[templateId];
  if (!tpl) return null;
  const randomParams = {};
  tpl.paramFields.forEach(pf => {
    const stepsCount = Math.round((pf.max - pf.min) / pf.step);
    const randStep = Math.floor(Math.random() * (stepsCount + 1));
    const val = Number((pf.min + randStep * pf.step).toFixed(2));
    randomParams[pf.key] = val;
  });
  const built = tpl.build(randomParams);
  return {
    id: "q_clone_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
    curriculum: tpl.curriculum,
    subject: tpl.subject,
    chapter: tpl.chapter,
    microTopic: tpl.microTopic,
    type: tpl.type,
    highYield: true,
    clonableTemplate: templateId,
    source: tpl.source + " (New Numbers)",
    stem: built.stem,
    subparts: built.subparts,
    marks: built.marks,
    solution: built.solution
  };
}

// =========================================================================
// 8. SYLLABUS DIRECTORY RENDERER (VIEW 4)
// =========================================================================
function renderSyllabusDirectory() {
  const container = document.getElementById("syllabusDirectoryTree");
  if (!container) return;
  const count = {};
  state.questions.forEach(q => { count[q.subject] = (count[q.subject] || 0) + 1; });

  container.innerHTML = Object.keys(SYLLABUS_DATA).map(cKey => {
    const cObj = SYLLABUS_DATA[cKey];
    const subjectsHtml = Object.keys(cObj.subjects).map(sKey => {
      const sObj = cObj.subjects[sKey];
      const n = count[sKey] || 0;
      return `
        <details class="rounded-lg border border-slate-200 bg-white">
          <summary class="flex cursor-pointer items-center justify-between gap-3 px-3 py-2 text-sm">
            <span class="font-medium text-slate-900 font-bangla">${escapeHtml(sObj.name)}</span>
            <span class="flex shrink-0 items-center gap-2">
              <span class="text-xs tabular-nums ${n ? "text-slate-500" : "text-slate-400"}">${n} question${n === 1 ? "" : "s"}</span>
              <button type="button" data-jump-curr="${cKey}" data-jump-subj="${sKey}" class="btn btn-secondary btn-sm">Open</button>
            </span>
          </summary>
          <ul class="list-disc space-y-0.5 border-t border-slate-100 px-3 py-2 pl-8 text-xs text-slate-600 font-bangla">
            ${sObj.chapters.map(ch => `<li>${escapeHtml(ch)}</li>`).join("")}
          </ul>
        </details>
      `;
    }).join("");

    return `
      <div class="space-y-2">
        <h3 class="text-xs font-semibold uppercase tracking-wide text-slate-500">${escapeHtml(cObj.label)}</h3>
        <div class="space-y-1.5">${subjectsHtml}</div>
      </div>
    `;
  }).join("");
}

// =========================================================================
// 9. NAVIGATION & EVENT WIRING
// =========================================================================
function switchMainTab(tabName) {
  state.activeTab = tabName;
  const views = {
    bank: document.getElementById("viewBank"),
    create: document.getElementById("viewCreate"),
    paper: document.getElementById("viewPaper"),
    backup: document.getElementById("viewBackup"),
    gviz: document.getElementById("viewGviz")
  };
  const buttons = {
    bank: document.getElementById("navTabBank"),
    create: document.getElementById("navTabCreate"),
    paper: document.getElementById("navTabPaper"),
    backup: document.getElementById("navTabBackup"),
    gviz: document.getElementById("navTabGviz")
  };

  Object.keys(views).forEach(k => {
    if (views[k]) views[k].classList.toggle("hidden", k !== tabName);
    if (buttons[k]) {
      buttons[k].classList.toggle("is-active", k === tabName);
      buttons[k].setAttribute("aria-selected", k === tabName ? "true" : "false");
    }
  });
  window.scrollTo(0, 0);

  if (tabName === "bank") renderQuestionBank();
  if (tabName === "gviz") {
    renderGvizSimulation();
  }
  if (tabName === "paper") renderExamPaperView();
  if (tabName === "backup") {
    renderSyllabusDirectory();
    renderExamPaperView();
  }
}


// =========================================================================
// 8. DIAGRAM LAB: LIVE FIGURE -> QUESTION
// =========================================================================

function configureGvizSlidersForMode(mode) {
  const s1 = document.getElementById("gvizSlider1");
  const s2 = document.getElementById("gvizSlider2");
  const s3 = document.getElementById("gvizSlider3");
  const l1 = document.getElementById("gvizLbl1");
  const l2 = document.getElementById("gvizLbl2");
  const l3 = document.getElementById("gvizLbl3");
  if (!s1 || !s2 || !s3) return;

  if (mode === "CIRCLE") {
    l1.textContent = "Circle Radius R (units)";
    s1.min = "3"; s1.max = "9"; s1.step = "0.5"; s1.value = "5.0";
    l2.textContent = "Line Distance d from (0,0)";
    s2.min = "1"; s2.max = "8"; s2.step = "0.5"; s2.value = "3.0";
    l3.textContent = "Pencil Parameter k";
    s3.min = "-2"; s3.max = "2"; s3.step = "0.25"; s3.value = "1.0";
  } else if (mode === "CALCULUS") {
    l1.textContent = "Parabola Focal Param a (y²=4ax)";
    s1.min = "1"; s1.max = "4"; s1.step = "0.5"; s1.value = "2.0";
    l2.textContent = "Line Slope m (y=mx)";
    s2.min = "0.5"; s2.max = "2.5"; s2.step = "0.25"; s2.value = "1.0";
    l3.textContent = "Tangent Point x₀";
    s3.min = "1"; s3.max = "6"; s3.step = "0.5"; s3.value = "2.0";
  } else if (mode === "PROJECTILE") {
    l1.textContent = "Launch Speed u (m s⁻¹)";
    s1.min = "15"; s1.max = "40"; s1.step = "1"; s1.value = "28";
    l2.textContent = "Launch Angle θ (°)";
    s2.min = "20"; s2.max = "65"; s2.step = "1"; s2.value = "38";
    l3.textContent = "Wall Distance x_w (m)";
    s3.min = "15"; s3.max = "65"; s3.step = "1"; s3.value = "42";
  }
}

function renderGvizSimulation() {
  const canvas = document.getElementById("gvizSimCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const mode = document.getElementById("gvizModeSelect").value;
  const p1 = parseFloat(document.getElementById("gvizSlider1").value);
  const p2 = parseFloat(document.getElementById("gvizSlider2").value);
  const p3 = parseFloat(document.getElementById("gvizSlider3").value);

  document.getElementById("gvizVal1").textContent = p1.toFixed(2);
  document.getElementById("gvizVal2").textContent = p2.toFixed(2);
  document.getElementById("gvizVal3").textContent = p3.toFixed(2);

  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  // Subtle coordinate grid
  ctx.strokeStyle = "#eef2f7";
  ctx.lineWidth = 1;
  for (let gx = 40; gx < W; gx += 40) {
    ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke();
  }
  for (let gy = 30; gy < H; gy += 40) {
    ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
  }

  const badgeEl = document.getElementById("gvizReadoutBadge");
  const prevEl = document.getElementById("gvizQuestionPreview");

  if (mode === "CIRCLE") {
    const R = p1;
    const d = p2;
    const k = p3;
    const cx = W / 2;
    const cy = H / 2 + 10;
    const scale = 18;

    // Axes
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.moveTo(40, cy); ctx.lineTo(W - 40, cy); ctx.moveTo(cx, 20); ctx.lineTo(cx, H - 20); ctx.stroke();

    // Base Circle x² + y² = R²
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(cx, cy, R * scale, 0, Math.PI * 2); ctx.stroke();

    // Line x = d (or 3x - 4y - 5d = 0)
    const lineX = cx + d * scale;
    ctx.strokeStyle = "#be123c";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(lineX, 25); ctx.lineTo(lineX, H - 25); ctx.stroke();

    const intersects = d < R;
    const chordLen = intersects ? 2 * Math.sqrt(R * R - d * d) : 0;

    if (intersects) {
      const halfChordPx = Math.sqrt(R * R - d * d) * scale;
      ctx.strokeStyle = "#15803d";
      ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.moveTo(lineX, cy - halfChordPx); ctx.lineTo(lineX, cy + halfChordPx); ctx.stroke();
    }

    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 12px Inter, sans-serif";
    ctx.fillText(`HSC Higher Math 1st Ch 4: x² + y² = ${R*R} & Radical Line at d = ${d.toFixed(1)}`, 50, 26);
    ctx.fillStyle = intersects ? "#15803d" : "#be123c";
    ctx.fillText(intersects ? `Real intersection (d < R): Chord Length = ${chordLen.toFixed(2)} units` : `No real intersection (d ≥ R — Mymensingh Board 2025 Imaginary Circle Trap!)`, 50, 46);

    badgeEl.textContent = intersects
      ? `Real Chord Length = ${chordLen.toFixed(2)} units | d = ${d.toFixed(1)} < R = ${R.toFixed(1)}`
      : `No real intersection (d = ${d.toFixed(1)} ≥ R = ${R.toFixed(1)}) — No Real Chord!`;
    prevEl.textContent = intersects
      ? `সৃজনশীল প্রশ্ন (অধ্যায় ৪ — বৃত্ত): x² + y² - ${(R*R).toFixed(1)} = 0 বৃত্ত এবং 3x - 4y - ${(5*d).toFixed(1)} = 0 সরলরেখা প্রদত্ত। (ক) কেন্দ্র হতে রেখাটির লম্ব দূরত্ব d = ${d.toFixed(2)} নির্ণয় কর; (খ) খণ্ডিত জ্যা-এর দৈর্ঘ্য ${chordLen.toFixed(2)} একক এবং জ্যা-কে ব্যাস ধরে বৃত্তের সমীকরণ নির্ণয় কর; (গ) k = ${k.toFixed(2)} প্যারামিটারের জন্য ছেদবিন্দুগামী বৃত্তের কেন্দ্র ও ব্যাসার্ধ নির্ণয় কর।`
      : `পাঠ্যবই ত্রুটি সতর্কতা (ময়মনসিংহ বোর্ড ২০২৫): এখানে কেন্দ্র হতে রেখার দূরত্ব d = ${d.toFixed(2)} ≥ ব্যাসার্ধ R = ${R.toFixed(2)} হওয়ায় রেখাটি বৃত্তকে বাস্তব বিন্দুতে ছেদ করে না! বাস্তব জ্যা পেতে d < R রাখুন।`;
  } else if (mode === "CALCULUS") {
    const a = p1;
    const m = p2;
    const x0 = p3;
    const xInt = (4 * a) / (m * m);
    const yInt = (4 * a) / m;
    const area = (8 * a * a) / (3 * Math.pow(m, 3));
    const slopeAtX0 = Math.sqrt(a / x0);

    const ox = 90;
    const oy = H - 50;
    const sx = Math.min(45, 380 / Math.max(6, xInt + 1));
    const sy = Math.min(22, 180 / Math.max(6, yInt + 1));

    // Shaded Area between y = 2√(ax) and y = mx
    ctx.fillStyle = "rgba(56, 189, 248, 0.22)";
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    for (let i = 0; i <= 60; i++) {
      const xv = (i / 60) * xInt;
      const yv = 2 * Math.sqrt(a * xv);
      ctx.lineTo(ox + xv * sx, oy - yv * sy);
    }
    ctx.lineTo(ox, oy);
    ctx.closePath();
    ctx.fill();

    // Axes
    ctx.strokeStyle = "#64748b";
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(40, oy); ctx.lineTo(W - 40, oy); ctx.moveTo(ox, 20); ctx.lineTo(ox, H - 20); ctx.stroke();

    // Parabola y = 2√(ax)
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let i = 0; i <= 80; i++) {
      const xv = (i / 80) * (xInt * 1.15);
      const yv = 2 * Math.sqrt(a * xv);
      if (i === 0) ctx.moveTo(ox + xv * sx, oy - yv * sy);
      else ctx.lineTo(ox + xv * sx, oy - yv * sy);
    }
    ctx.stroke();

    // Line y = mx
    ctx.strokeStyle = "#b45309";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox + xInt * 1.15 * sx, oy - m * xInt * 1.15 * sy);
    ctx.stroke();

    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 12px Inter, sans-serif";
    ctx.fillText(`HSC Higher Math 1st Ch 9 & 10: Parabola y² = ${(4*a).toFixed(1)}x & Line y = ${m.toFixed(2)}x`, 50, 26);
    ctx.fillStyle = "#2563eb";
    ctx.fillText(`Bounded Area A = 8a²/(3m³) = ${area.toFixed(3)} sq. units | Intersection (${xInt.toFixed(2)}, ${yInt.toFixed(2)})`, 50, 46);

    badgeEl.textContent = `Bounded Area A = ${area.toFixed(3)} sq. units | Intersection (${xInt.toFixed(2)}, ${yInt.toFixed(2)}) | Tangent Slope at x₀=${x0}: ${slopeAtX0.toFixed(3)}`;
    prevEl.textContent = `সৃজনশীল প্রশ্ন (অধ্যায় ৯ ও ১০ — ক্যালকুলাস): দৃশ্যকল্প: পরাবৃত্ত y² = ${(4*a).toFixed(1)}x এবং সরলরেখা y = ${m.toFixed(2)}x। (ক) পরাবৃত্তটির x = ${x0.toFixed(1)} বিন্দুতে স্পর্শকের ঢাল (${slopeAtX0.toFixed(3)}) নির্ণয় কর; (খ) পরাবৃত্ত ও সরলরেখার ছেদবিন্দু (0,0) ও (${xInt.toFixed(2)}, ${yInt.toFixed(2)}) নির্ণয় কর; (গ) সমাকলনের সাহায্যে আবদ্ধ ক্ষেত্রের ক্ষেত্রফল A = ${area.toFixed(3)} বর্গএকক নির্ণয় কর।`;
  } else if (mode === "PROJECTILE") {
    const u = p1;
    const deg = p2;
    const xw = p3;
    const rad = deg * Math.PI / 180;
    const g = 9.81;
    const ux = u * Math.cos(rad);
    const uy = u * Math.sin(rad);
    const tWall = xw / ux;
    const yWall = uy * tWall - 0.5 * g * tWall * tWall;
    const wallH = 6.5;
    const clears = yWall > wallH;

    const ox = 55;
    const oy = H - 35;
    const range = (u * u * Math.sin(2 * rad)) / g;
    const sx = Math.min(8, 540 / Math.max(50, range));
    const sy = sx;

    // Ground
    ctx.strokeStyle = "#64748b";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(30, oy); ctx.lineTo(W - 30, oy); ctx.stroke();

    // Wall at xw
    ctx.strokeStyle = clears ? "#15803d" : "#be123c";
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(ox + xw * sx, oy); ctx.lineTo(ox + xw * sx, oy - wallH * sy); ctx.stroke();

    // Trajectory
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let i = 0; i <= 100; i++) {
      const xv = (i / 100) * Math.max(range, xw + 5);
      const tv = xv / ux;
      const yv = uy * tv - 0.5 * g * tv * tv;
      if (yv < 0 && i > 0) break;
      if (i === 0) ctx.moveTo(ox + xv * sx, oy - yv * sy);
      else ctx.lineTo(ox + xv * sx, oy - yv * sy);
    }
    ctx.stroke();

    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 12px Inter, sans-serif";
    ctx.fillText(`Edexcel WPH11 / HSC Phy 1st: u = ${u} m/s, θ = ${deg}°, Wall at x = ${xw} m (h = 6.5 m)`, 50, 26);
    ctx.fillStyle = clears ? "#15803d" : "#be123c";
    ctx.fillText(`Height at Wall y = ${yWall.toFixed(2)} m (t = ${tWall.toFixed(2)} s) → ${clears ? "CLEARS WALL by " + (yWall - wallH).toFixed(2) + " m" : "HITS / BELOW WALL"}`, 50, 46);

    badgeEl.textContent = `t_wall = ${tWall.toFixed(2)} s | Ball Height y = ${yWall.toFixed(2)} m | ${clears ? "clears the 6.5 m wall" : "does not clear the 6.5 m wall"}`;
    prevEl.textContent = `Structured Question (WPH11 / HSC Phy): A projectile is launched at u = ${u} m s⁻¹ at ${deg}° above the horizontal toward a 6.50 m wall at distance x = ${xw} m. (a) Show that the time to reach the wall is ${tWall.toFixed(2)} s [2]; (b) Calculate the height of the ball at the wall (${yWall.toFixed(2)} m) and state whether it clears the wall [4].`;
  }
}

function switchCreateSubTab(subTab) {
  state.activeCreateSubTab = subTab;
  const panels = {
    structured: document.getElementById("createPanelStructured"),
    crop: document.getElementById("createPanelCrop"),
    cloner: document.getElementById("createPanelCloner")
  };
  const btns = {
    structured: document.getElementById("subTabStructured"),
    crop: document.getElementById("subTabCrop"),
    cloner: document.getElementById("subTabCloner")
  };

  Object.keys(panels).forEach(k => {
    if (panels[k]) panels[k].classList.toggle("hidden", k !== subTab);
    if (btns[k]) btns[k].classList.toggle("is-active", k === subTab);
  });

  if (subTab === "crop") drawCropCanvas();
  if (subTab === "cloner") renderClonerParamsAndPreview();
}

function saveCustomQuestionFromForm(addToPaperToo) {
  const curr = document.getElementById("newQCurriculum").value;
  const subj = document.getElementById("newQSubject").value;
  const chap = document.getElementById("newQChapter").value;
  const qType = document.getElementById("newQType").value;
  const source = document.getElementById("newQSource").value.trim() || "Custom Tutor Question";
  const micro = document.getElementById("newQMicroTopic").value.trim() || "Topic Evaluation";
  const highYield = document.getElementById("newQHighYield").checked;
  const stem = document.getElementById("newQStem").value.trim();
  const solution = document.getElementById("newQSolution").value.trim() || "Step-by-step solution on tutor key.";

  if (!stem) {
    showToast("Write the question stem first.", "!");
    return;
  }

  let marks = 1;
  let subparts = [];
  let options = [];

  if (qType === "MCQ") {
    marks = 1;
    options = [
      document.getElementById("mcqOptA").value.trim() || "(A) Option 1",
      document.getElementById("mcqOptB").value.trim() || "(B) Option 2",
      document.getElementById("mcqOptC").value.trim() || "(C) Option 3",
      document.getElementById("mcqOptD").value.trim() || "(D) Option 4"
    ];
  } else {
    subparts = state.newQuestionSubparts.map(sp => ({
      label: sp.label.trim() || "(a)",
      text: sp.text.trim() || "Answer this part.",
      marks: Number(sp.marks) || 2
    }));
    marks = subparts.reduce((acc, s) => acc + s.marks, 0) || 10;
  }

  const newQ = {
    id: "q_custom_" + Date.now(),
    curriculum: curr,
    subject: subj,
    chapter: chap,
    microTopic: micro,
    type: qType,
    highYield,
    source,
    stem,
    subparts,
    options,
    marks,
    solution
  };

  state.questions.unshift(newQ);
  if (addToPaperToo) {
    state.paperQueueIds.push(newQ.id);
  }
  saveStateToStorage();
  renderQuestionBank();
  renderExamPaperView();

  if (addToPaperToo) {
    showToast("Saved and added to the exam paper.");
    switchMainTab("paper");
  } else {
    showToast("Saved to your questions.");
    switchMainTab("bank");
  }
}

function wireAllEvents() {
  // Main Navigation Tabs
  document.getElementById("navTabBank").addEventListener("click", () => switchMainTab("bank"));
  document.getElementById("navTabCreate").addEventListener("click", () => switchMainTab("create"));
  document.getElementById("navTabPaper").addEventListener("click", () => switchMainTab("paper"));
  document.getElementById("navTabBackup").addEventListener("click", () => switchMainTab("backup"));
  document.getElementById("navTabGviz").addEventListener("click", () => switchMainTab("gviz"));


  document.getElementById("gvizModeSelect").addEventListener("change", (e) => {
    configureGvizSlidersForMode(e.target.value);
    renderGvizSimulation();
  });
  ["gvizSlider1", "gvizSlider2", "gvizSlider3"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => renderGvizSimulation());
  });

  document.getElementById("btnGvizExportToExam").addEventListener("click", () => {
    const canvas = document.getElementById("gvizSimCanvas");
    const mode = document.getElementById("gvizModeSelect").value;
    const previewText = document.getElementById("gvizQuestionPreview").textContent;
    const badgeText = document.getElementById("gvizReadoutBadge").textContent;
    const newId = "q_gviz_" + Date.now();

    const newQ = {
      id: newId,
      curriculum: mode === "PROJECTILE" ? "IAL" : "HSC",
      subject: mode === "PROJECTILE" ? "IAL_PHY" : "HSC_MATH1",
      chapter: mode === "CIRCLE" ? "অধ্যায় ৪: বৃত্ত (Circles)" : mode === "CALCULUS" ? "অধ্যায় ১০: যোগজীকরণ (Integration)" : "WPH11 Unit 1: Mechanics and Materials (Kinematics, Projectiles, Moments, Fluids, Stress-Strain)",
      microTopic: "Diagram Lab figure question",
      type: mode === "PROJECTILE" ? "STRUCTURED" : "CQ",
      highYield: true,
      source: "Diagram Lab figure",
      stem: previewText,
      subparts: [
        { label: "(a)", text: "State the governing physical or geometric equation shown in the diagram.", marks: 2 },
        { label: "(b)", text: "Calculate the main quantity shown on the diagram readout.", marks: 4 },
        { label: "(c)", text: "Analyze how doubling the primary slider parameter affects the system output.", marks: 4 }
      ],
      marks: 10,
      imageDataUrl: canvas.toDataURL("image/jpeg", 0.9),
      solution: "Answer key (from the diagram readout): " + badgeText
    };

    state.questions.unshift(newQ);
    state.paperQueueIds.push(newId);
    saveStateToStorage();
    renderQuestionBank();
    renderExamPaperView();
    showToast("Figure and question added to the Exam Paper. Edit the sub-parts to suit your class.", "🔬");
  });


  // Sub-tabs in Create
  document.getElementById("subTabStructured").addEventListener("click", () => switchCreateSubTab("structured"));
  document.getElementById("subTabCrop").addEventListener("click", () => switchCreateSubTab("crop"));
  document.getElementById("subTabCloner").addEventListener("click", () => switchCreateSubTab("cloner"));

  // Filter Controls
  document.getElementById("filterCurriculum").addEventListener("change", (e) => {
    state.filters.curriculum = e.target.value;
    populateFilterDropdowns();
    renderQuestionBank();
  });
  document.getElementById("filterSubject").addEventListener("change", (e) => {
    state.filters.subject = e.target.value;
    populateFilterDropdowns();
    renderQuestionBank();
  });
  document.getElementById("filterChapter").addEventListener("change", (e) => {
    state.filters.chapter = e.target.value;
    populateFilterDropdowns();
    renderQuestionBank();
  });
  document.getElementById("filterMicroTopic").addEventListener("change", (e) => {
    state.filters.microTopic = e.target.value;
    renderQuestionBank();
  });
  document.getElementById("filterType").addEventListener("change", (e) => {
    state.filters.type = e.target.value;
    renderQuestionBank();
  });
  document.getElementById("filterSearch").addEventListener("input", (e) => {
    state.filters.search = e.target.value;
    renderQuestionBank();
  });
  document.getElementById("btnClearSearch").addEventListener("click", () => {
    state.filters = { curriculum: "ALL", subject: "ALL", chapter: "ALL", microTopic: "ALL", type: "ALL", search: "" };
    document.getElementById("filterCurriculum").value = "ALL";
    document.getElementById("filterType").value = "ALL";
    document.getElementById("filterSearch").value = "";
    populateFilterDropdowns();
    renderQuestionBank();
  });

  // Quick Topic Test Preset Buttons (including Uploaded HSC Chem Ch 3 Sets & Expanded WPH11 Pack)
  document.getElementById("btnPresetHMath1Part1").addEventListener("click", () => {
    state.filters = {
      curriculum: "HSC",
      subject: "HSC_MATH1",
      chapter: "ALL",
      microTopic: "ALL",
      type: "ALL",
      search: ""
    };
    document.getElementById("filterCurriculum").value = "HSC";
    populateFilterDropdowns();
    document.getElementById("filterSubject").value = "HSC_MATH1";
    state.filters.subject = "HSC_MATH1";
    populateFilterDropdowns();
    document.getElementById("filterSearch").value = "";
    state.paperQueueIds = [
      "q_hsc_math1_ch1_cq1",
      "q_hsc_math1_ch2_cq1",
      "q_hsc_math1_ch3_cq1",
      "q_hsc_math1_ch4_cq1",
      "q_hsc_math1_ch5_cq1",
      "q_hsc_math1_ch1_mcq1",
      "q_hsc_math1_ch2_mcq1",
      "q_hsc_math1_ch3_mcq1",
      "q_hsc_math1_ch4_mcq1",
      "q_hsc_math1_ch5_mcq1"
    ];
    document.getElementById("paperHeaderTitle").value = "উচ্চতর গণিত ১ম পত্র (অধ্যায় ১–৫ — অক্ষর-পত্র ২০২৫ সংশোধিত সেট): ম্যাট্রিক্স, ভেক্টর, সরলরেখা, বৃত্ত ও বিন্যাস";
    document.getElementById("paperHeaderTime").value = "১ ঘণ্টা ৩০ মিনিট (5 CQ + 5 MCQ = 55 Marks)";
    saveHeaderFields();
    saveStateToStorage();
    renderQuestionBank();
    renderExamPaperView();
    showToast("Loaded উচ্চতর গণিত ১ম পত্র (অধ্যায় ১–৫).");
  });

  document.getElementById("btnPresetHMath1Part2").addEventListener("click", () => {
    state.filters = {
      curriculum: "HSC",
      subject: "HSC_MATH1",
      chapter: "ALL",
      microTopic: "ALL",
      type: "ALL",
      search: ""
    };
    document.getElementById("filterCurriculum").value = "HSC";
    populateFilterDropdowns();
    document.getElementById("filterSubject").value = "HSC_MATH1";
    state.filters.subject = "HSC_MATH1";
    populateFilterDropdowns();
    document.getElementById("filterSearch").value = "";
    state.paperQueueIds = [
      "q_hsc_math1_ch6_cq1",
      "q_hsc_math1_ch7_cq1",
      "q_hsc_math1_ch8_cq1",
      "q_hsc_math1_ch9_cq1",
      "q_hsc_math1_ch10_cq1",
      "q_hsc_math1_ch6_mcq1",
      "q_hsc_math1_ch7_mcq1",
      "q_hsc_math1_ch8_mcq1",
      "q_hsc_math1_ch9_mcq1",
      "q_hsc_math1_ch10_mcq1"
    ];
    document.getElementById("paperHeaderTitle").value = "উচ্চতর গণিত ১ম পত্র (অধ্যায় ৬–১০ — অক্ষর-পত্র ২০২৫ সংশোধিত সেট): ত্রিকোণমিতি, ফাংশন, অন্তরীকরণ ও যোগজীকরণ";
    document.getElementById("paperHeaderTime").value = "১ ঘণ্টা ৩০ মিনিট (5 CQ + 5 MCQ = 55 Marks)";
    saveHeaderFields();
    saveStateToStorage();
    renderQuestionBank();
    renderExamPaperView();
    showToast("Loaded উচ্চতর গণিত ১ম পত্র (অধ্যায় ৬–১০).");
  });

  document.getElementById("btnPresetChemCh3SetA").addEventListener("click", () => {
    state.filters = {
      curriculum: "HSC",
      subject: "HSC_CHEM1",
      chapter: "অধ্যায় ৩: মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন (Periodic Properties & Bonding)",
      microTopic: "ALL",
      type: "ALL",
      search: "Set A"
    };
    document.getElementById("filterCurriculum").value = "HSC";
    populateFilterDropdowns();
    document.getElementById("filterSearch").value = "Set A";
    state.paperQueueIds = [
      "q_hsc_chem1_ch3_cq1",
      "q_hsc_chem1_ch3_cq3",
      "q_hsc_chem1_ch3_mcq1",
      "q_hsc_chem1_ch3_mcq2",
      "q_hsc_chem1_ch3_mcq6",
      "q_hsc_chem1_ch3_mcq7",
      "q_hsc_chem1_ch3_mcq9"
    ];
    document.getElementById("paperHeaderTitle").value = "রসায়ন ১ম পত্র (অধ্যায় ৩ — Set A): সংকরায়ন, VSEPR, জটিল আয়ন ও বন্ড অর্ডার";
    document.getElementById("paperHeaderTime").value = "৪০ মিনিট (2 CQ + 5 MCQ = 25 Marks)";
    saveHeaderFields();
    saveStateToStorage();
    renderQuestionBank();
    renderExamPaperView();
    showToast("Loaded রসায়ন ১ম পত্র (অধ্যায় ৩) Set A.");
  });

  document.getElementById("btnPresetChemCh3SetB").addEventListener("click", () => {
    state.filters = {
      curriculum: "HSC",
      subject: "HSC_CHEM1",
      chapter: "অধ্যায় ৩: মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন (Periodic Properties & Bonding)",
      microTopic: "ALL",
      type: "ALL",
      search: "Set B"
    };
    document.getElementById("filterCurriculum").value = "HSC";
    populateFilterDropdowns();
    document.getElementById("filterSearch").value = "Set B";
    state.paperQueueIds = [
      "q_hsc_chem1_ch3_cq5",
      "q_hsc_chem1_ch3_cq6",
      "q_hsc_chem1_ch3_mcq12",
      "q_hsc_chem1_ch3_mcq13",
      "q_hsc_chem1_ch3_mcq14",
      "q_hsc_chem1_ch3_mcq15",
      "q_hsc_chem1_ch3_mcq16"
    ];
    document.getElementById("paperHeaderTitle").value = "রসায়ন ১ম পত্র (অধ্যায় ৩ — Set B): ফাজানের নীতি, হাইড্রোজেন বন্ধন ও পর্যায়বৃত্ত ধর্ম";
    document.getElementById("paperHeaderTime").value = "৪০ মিনিট (2 CQ + 5 MCQ = 25 Marks)";
    saveHeaderFields();
    saveStateToStorage();
    renderQuestionBank();
    renderExamPaperView();
    showToast("Loaded রসায়ন ১ম পত্র (অধ্যায় ৩) Set B.");
  });

  document.getElementById("btnPresetChemCh3BUET").addEventListener("click", () => {
    state.filters = {
      curriculum: "HSC",
      subject: "HSC_CHEM1",
      chapter: "অধ্যায় ৩: মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন (Periodic Properties & Bonding)",
      microTopic: "ALL",
      type: "ALL",
      search: ""
    };
    document.getElementById("filterCurriculum").value = "HSC";
    populateFilterDropdowns();
    document.getElementById("filterSearch").value = "";
    state.paperQueueIds = [
      "q_hsc_chem1_ch3_cq7",
      "q_hsc_chem1_ch3_cq8",
      "q_hsc_chem1_ch3_mcq17",
      "q_hsc_chem1_ch3_mcq18",
      "q_hsc_chem1_ch3_mcq19",
      "q_hsc_chem1_ch3_mcq20"
    ];
    document.getElementById("paperHeaderTitle").value = "রসায়ন ১ম পত্র (অধ্যায় ৩ — Set C): BUET & Engineering Admission Special";
    document.getElementById("paperHeaderTime").value = "৪০ মিনিট (24 Marks)";
    saveHeaderFields();
    saveStateToStorage();
    renderQuestionBank();
    renderExamPaperView();
    showToast("Loaded রসায়ন ১ম পত্র, অধ্যায় ৩, admission set.");
  });

  document.getElementById("btnPresetWPH11Full").addEventListener("click", () => {
    state.filters = {
      curriculum: "IAL",
      subject: "IAL_PHY",
      chapter: "WPH11 Unit 1: Mechanics and Materials (Kinematics, Projectiles, Moments, Fluids, Stress-Strain)",
      microTopic: "ALL",
      type: "ALL",
      search: ""
    };
    document.getElementById("filterCurriculum").value = "IAL";
    populateFilterDropdowns();
    document.getElementById("filterSearch").value = "";
    state.paperQueueIds = [
      "q_ial_phy_wph11_kinematics",
      "q_ial_phy_wph11",
      "q_ial_phy_wph11_moments",
      "q_ial_phy_wph11_momentum",
      "q_ial_phy_wph11_fluids",
      "q_ial_phy_wph11_materials"
    ];
    document.getElementById("paperHeaderTitle").value = "Pearson Edexcel IAL Physics Unit 1 (WPH11) — Complete Mechanics & Materials Assessment";
    document.getElementById("paperHeaderTime").value = "60 Minutes (52 Marks)";
    saveHeaderFields();
    saveStateToStorage();
    renderQuestionBank();
    renderExamPaperView();
    showToast("Loaded the Edexcel WPH11 Unit 1 test.");
  });

  document.getElementById("btnPresetHSC").addEventListener("click", () => {
    const hscIds = state.questions.filter(q => q.curriculum === "HSC").slice(0, 4).map(q => q.id);
    state.paperQueueIds = hscIds;
    document.getElementById("paperHeaderTitle").value = "HSC সাপ্তাহিক মূল্যায়ন পরীক্ষা — পদার্থবিজ্ঞান, রসায়ন ও উচ্চতর গণিত";
    document.getElementById("paperHeaderTime").value = "৪৫ মিনিট (45 Mins)";
    saveHeaderFields();
    saveStateToStorage();
    renderQuestionBank();
    switchMainTab("paper");
    showToast("Loaded a mixed HSC test.");
  });

  document.getElementById("btnPresetIAL").addEventListener("click", () => {
    const ialIds = state.questions.filter(q => q.curriculum === "IAL").slice(0, 4).map(q => q.id);
    state.paperQueueIds = ialIds;
    document.getElementById("paperHeaderTitle").value = "Pearson Edexcel IAL Topic Assessment — Physics, Chemistry & Modular Maths";
    document.getElementById("paperHeaderTime").value = "45 Minutes";
    saveHeaderFields();
    saveStateToStorage();
    renderQuestionBank();
    switchMainTab("paper");
    showToast("Loaded a mixed Edexcel IAL test.");
  });

  document.getElementById("btnPresetIGCSE").addEventListener("click", () => {
    const igcseIds = state.questions.filter(q => q.curriculum === "IGCSE").map(q => q.id);
    state.paperQueueIds = igcseIds;
    document.getElementById("paperHeaderTitle").value = "Pearson Edexcel International GCSE Topic Test — 4MB1 & 4PM1";
    document.getElementById("paperHeaderTime").value = "30 Minutes";
    saveHeaderFields();
    saveStateToStorage();
    renderQuestionBank();
    switchMainTab("paper");
    showToast("Loaded a mixed Edexcel IGCSE test.");
  });

  document.getElementById("btnAddFilteredToPaper").addEventListener("click", () => {
    const filtered = getFilteredQuestions();
    let added = 0;
    filtered.forEach(q => {
      if (!state.paperQueueIds.includes(q.id)) {
        state.paperQueueIds.push(q.id);
        added++;
      }
    });
    saveStateToStorage();
    renderQuestionBank();
    showToast(`Added ${added} question(s) to the exam paper.`);
  });

  document.getElementById("btnGoToPrintFromBank").addEventListener("click", () => {
    switchMainTab("paper");
  });

  // Delegated clicks inside Question Bank List
  document.getElementById("questionBankList").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const action = btn.getAttribute("data-action");
    const qId = btn.getAttribute("data-id");

    if (action === "toggle-paper") {
      const idx = state.paperQueueIds.indexOf(qId);
      if (idx >= 0) {
        state.paperQueueIds.splice(idx, 1);
        showToast("Removed from the exam paper.");
      } else {
        state.paperQueueIds.push(qId);
        showToast("Added to the exam paper.");
      }
      saveStateToStorage();
      renderQuestionBank();
    } else if (action === "quick-clone") {
      const origQ = state.questions.find(q => q.id === qId);
      if (origQ && origQ.clonableTemplate) {
        const cloned = randomizeTemplateParams(origQ.clonableTemplate);
        if (cloned) {
          state.questions.unshift(cloned);
          state.paperQueueIds.push(cloned.id);
          saveStateToStorage();
          renderQuestionBank();
          showToast("New-numbers copy added to the exam paper, with its own mark scheme.");
        }
      }
    } else if (action === "delete-question") {
      const gone = state.questions.find(q => q.id === qId);
      if (!gone) return;
      if (!confirm(isBankQuestion(gone) ? "Hide this question from your bank? You can bring hidden questions back from the Syllabus & Backup tab." : "Delete this question of yours for good?")) return;
      if (isBankQuestion(gone)) state.hiddenIds.push(qId);
      state.questions = state.questions.filter(q => q.id !== qId);
      state.paperQueueIds = state.paperQueueIds.filter(id => id !== qId);
      saveStateToStorage();
      renderQuestionBank();
      showToast(isBankQuestion(gone) ? "Hidden from your bank." : "Deleted your question.");
    }
  });

  // Create Form Selects
  document.getElementById("newQCurriculum").addEventListener("change", () => {
    populateCreateFormSelects("newQCurriculum", "newQSubject", "newQChapter");
  });
  document.getElementById("newQSubject").addEventListener("change", () => {
    populateCreateFormSelects("newQCurriculum", "newQSubject", "newQChapter");
  });
  document.getElementById("newQType").addEventListener("change", (e) => {
    const isMcq = e.target.value === "MCQ";
    document.getElementById("newQSubpartsContainer").classList.toggle("hidden", isMcq);
    document.getElementById("newQMcqContainer").classList.toggle("hidden", !isMcq);
  });

  document.getElementById("btnAddSubpartRow").addEventListener("click", () => {
    const nextIdx = state.newQuestionSubparts.length + 1;
    state.newQuestionSubparts.push({ label: `(${String.fromCharCode(96 + nextIdx)})`, text: "", marks: 2 });
    renderSubpartRows();
  });

  document.getElementById("subpartRowsList").addEventListener("input", (e) => {
    const field = e.target.getAttribute("data-sp-field");
    const idx = Number(e.target.getAttribute("data-idx"));
    if (field && state.newQuestionSubparts[idx]) {
      state.newQuestionSubparts[idx][field] = field === "marks" ? Number(e.target.value) : e.target.value;
    }
  });

  document.getElementById("subpartRowsList").addEventListener("click", (e) => {
    const rmBtn = e.target.closest("button[data-sp-remove]");
    if (!rmBtn) return;
    const idx = Number(rmBtn.getAttribute("data-sp-remove"));
    if (state.newQuestionSubparts.length > 1) {
      state.newQuestionSubparts.splice(idx, 1);
      renderSubpartRows();
    }
  });

  document.getElementById("btnFillSampleHSCForm").addEventListener("click", () => {
    document.getElementById("newQCurriculum").value = "HSC";
    populateCreateFormSelects("newQCurriculum", "newQSubject", "newQChapter");
    document.getElementById("newQType").value = "CQ";
    document.getElementById("newQSubpartsContainer").classList.remove("hidden");
    document.getElementById("newQMcqContainer").classList.add("hidden");
    document.getElementById("newQSource").value = "ঢাকা বোর্ড ২০২৪ ও ইসহাক স্যার অনুশীলনী";
    document.getElementById("newQMicroTopic").value = "মহাকর্ষীয় বিভব ও মুক্তিবেগ";
    document.getElementById("newQStem").value = "পৃথিবীর ভর M = 6 × 10²⁴ kg এবং ব্যাসার্ধ R = 6.4 × 10⁶ m। ভূপৃষ্ঠ হতে h = 3.6 × 10⁶ m উচ্চতায় একটি কৃত্রিম উপগ্রহ বৃত্তাকার কক্ষপথে প্রদক্ষিণ করছে।";
    state.newQuestionSubparts = [
      { label: "ক", text: "মুক্তিবেগ (Escape Velocity) কাকে বলে?", marks: 1 },
      { label: "খ", text: "ভূ-স্থির উপগ্রহের কক্ষপথ বিষুবরেখার তলে অবস্থিত হতে হয় কেন?", marks: 2 },
      { label: "গ", text: "উদ্দীপকের উপগ্রহটির রৈখিক বেগ নির্ণয় কর।", marks: 3 },
      { label: "ঘ", text: "উপগ্রহটির বেগ শতকরা কত বৃদ্ধি করলে এটি পৃথিবীর মহাকর্ষ ক্ষেত্র অতিক্রম করে মহাশূন্যে হারিয়ে যাবে? গাণিতিকভাবে বিশ্লেষণ কর।", marks: 4 }
    ];
    document.getElementById("newQSolution").value = "গ [৩]: v = √(GM / (R+h)) = √((6.673×10⁻¹¹ × 6×10²⁴) / 10⁷) = 6.328 × 10³ m s⁻¹ = 6.33 km s⁻¹।\nঘ [৪]: ওই উচ্চতায় মুক্তিবেগ v_e = √2 × v = 8.95 km s⁻¹। শতকরা বৃদ্ধি = (√2 - 1) × 100% = 41.42%।";
    renderSubpartRows();
    showToast("Example loaded. Edit it and save.");
  });

  document.getElementById("btnFillSampleEdexcelForm").addEventListener("click", () => {
    document.getElementById("newQCurriculum").value = "IAL";
    populateCreateFormSelects("newQCurriculum", "newQSubject", "newQChapter");
    document.getElementById("newQSubject").value = "IAL_P3";
    populateCreateFormSelects("newQCurriculum", "newQSubject", "newQChapter");
    document.getElementById("newQType").value = "STRUCTURED";
    document.getElementById("newQSubpartsContainer").classList.remove("hidden");
    document.getElementById("newQMcqContainer").classList.add("hidden");
    document.getElementById("newQSource").value = "Pearson Edexcel IAL WMA13/01 (P3) Past Paper Style";
    document.getElementById("newQMicroTopic").value = "Harmonic Form R sin(θ - α)";
    document.getElementById("newQStem").value = "Given that f(θ) = 5 sin θ - 12 cos θ, for 0 ≤ θ ≤ 2π:";
    state.newQuestionSubparts = [
      { label: "(a)", text: "Express f(θ) in the form R sin(θ - α), where R > 0 and 0 < α < π/2, giving the value of α to 3 decimal places.", marks: 3 },
      { label: "(b)", text: "State the minimum value of f(θ) and find the smallest positive value of θ at which this minimum occurs.", marks: 3 },
      { label: "(c)", text: "Solve, for 0 ≤ θ < 2π, the equation 5 sin θ - 12 cos θ = 6.5, giving your answers to 2 decimal places.", marks: 4 }
    ];
    document.getElementById("newQSolution").value = "(a) [3]: R = √(5² + 12²) = 13 [B1]; tan α = 12/5 ⇒ α = 1.176 rad [M1, A1].\n(b) [3]: Minimum value = -13 [B1] when θ - 1.176 = 3π/2 (or -π/2 + 2π) ⇒ θ = 5.89 rad [M1, A1].\n(c) [4]: sin(θ - 1.176) = 6.5/13 = 0.5 ⇒ θ - 1.176 = π/6, 5π/6 ⇒ θ = 1.70 rad, 3.79 rad [M2, A2].";
    renderSubpartRows();
    showToast("Example loaded. Edit it and save.");
  });

  document.getElementById("btnSaveQuestionOnly").addEventListener("click", () => saveCustomQuestionFromForm(false));
  document.getElementById("btnSaveAndAddToPaper").addEventListener("click", () => saveCustomQuestionFromForm(true));

  // Crop Panel Events
  document.getElementById("cropCurriculum").addEventListener("change", () => {
    populateCreateFormSelects("cropCurriculum", "cropSubject", "cropChapter");
  });
  document.getElementById("cropSubject").addEventListener("change", () => {
    populateCreateFormSelects("cropCurriculum", "cropSubject", "cropChapter");
  });
  const resetCropBox = () => {
    [["cropTopRange", 0], ["cropBottomRange", 100], ["cropLeftRange", 0], ["cropRightRange", 100]].forEach(([id, v]) => { document.getElementById(id).value = v; });
  };
  ["cropTopRange", "cropBottomRange", "cropLeftRange", "cropRightRange"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => drawCropCanvas());
  });
  document.getElementById("btnLoadSampleDiagramCrop").addEventListener("click", () => {
    rawCropSourceImage = null;
    resetCropBox();
    drawCropCanvas();
    showToast("Sample figure loaded. Drag the sliders to crop it.");
  });
  document.getElementById("cropFileInput").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file) return;
    if (!/^image\//.test(file.type)) { showToast("Choose an image file (a screenshot or photo).", "!"); return; }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      rawCropSourceImage = img;
      resetCropBox();
      drawCropCanvas();
      showToast("Image loaded. Drag the sliders to keep only the question.");
    };
    img.onerror = () => { URL.revokeObjectURL(url); showToast("That image could not be opened.", "!"); };
    img.src = url;
  });
  document.getElementById("btnSaveCroppedQuestion").addEventListener("click", () => {
    const curr = document.getElementById("cropCurriculum").value;
    const subj = document.getElementById("cropSubject").value;
    const chap = document.getElementById("cropChapter").value;
    const marks = Number(document.getElementById("cropMarks").value) || 6;
    const source = document.getElementById("cropSource").value.trim() || "Cropped Past Paper Figure";
    const caption = document.getElementById("cropCaption").value.trim() || "Refer to the figure above and answer the questions.";
    const sol = document.getElementById("cropSolution").value.trim() || "See mark scheme notes.";

    const croppedQ = {
      id: "q_crop_" + Date.now(),
      curriculum: curr,
      subject: subj,
      chapter: chap,
      microTopic: "Cropped Past Paper / Diagram Question",
      type: "STRUCTURED",
      highYield: true,
      source,
      stem: caption,
      imageDataUrl: state.cropDataUrl,
      subparts: [],
      marks,
      solution: sol
    };
    state.questions.unshift(croppedQ);
    state.paperQueueIds.push(croppedQ.id);
    saveStateToStorage();
    renderQuestionBank();
    switchMainTab("paper");
    showToast("Saved and added to the exam paper.");
  });

  // Cloner Panel Events
  document.getElementById("clonerTemplateSelect").addEventListener("change", (e) => {
    initClonerTemplate(e.target.value);
  });
  document.getElementById("clonerParamsBox").addEventListener("input", (e) => {
    const key = e.target.getAttribute("data-cloner-param");
    if (key) {
      state.clonerParams[key] = Number(e.target.value);
      const out = document.querySelector('[data-cloner-value="' + key + '"]');
      if (out) out.textContent = e.target.value;
      renderClonerPreview();
    }
  });
  document.getElementById("btnRandomizeClonerParams").addEventListener("click", () => {
    const tpl = CLONER_TEMPLATES[state.clonerTemplateId];
    if (!tpl) return;
    tpl.paramFields.forEach(pf => {
      const stepsCount = Math.round((pf.max - pf.min) / pf.step);
      const randStep = Math.floor(Math.random() * (stepsCount + 1));
      state.clonerParams[pf.key] = Number((pf.min + randStep * pf.step).toFixed(2));
    });
    renderClonerParamsAndPreview();
    showToast("New numbers set. The mark scheme is recalculated.");
  });
  document.getElementById("btnSaveClonedVariant").addEventListener("click", () => {
    if (!state.clonerGeneratedQuestion) return;
    const copyQ = JSON.parse(JSON.stringify(state.clonerGeneratedQuestion));
    copyQ.id = newId("q_clone");
    state.questions.unshift(copyQ);
    state.paperQueueIds.push(copyQ.id);
    saveStateToStorage();
    renderQuestionBank();
    switchMainTab("paper");
    showToast("Added to the exam paper.");
  });

  // Paper View Events
  document.getElementById("btnViewStudentPaper").addEventListener("click", () => {
    state.paperViewMode = "student";
    document.getElementById("btnViewStudentPaper").classList.add("is-active");
    document.getElementById("btnViewMarkScheme").classList.remove("is-active");
    renderExamPaperView();
  });
  document.getElementById("btnViewMarkScheme").addEventListener("click", () => {
    state.paperViewMode = "markscheme";
    document.getElementById("btnViewMarkScheme").classList.add("is-active");
    document.getElementById("btnViewStudentPaper").classList.remove("is-active");
    renderExamPaperView();
  });
  document.getElementById("btnPrintPaper").addEventListener("click", () => {
    window.print();
  });

  ["paperHeaderTitle", "paperHeaderInstructor", "paperHeaderTime", "paperHeaderDate"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => { saveHeaderFields(); renderExamPaperView(); });
  });
  ["chkCompactMode", "chkShowDottedLines", "chkShowSourceOnPrint", "chkStudentInfoBox"].forEach(id => {
    document.getElementById(id).addEventListener("change", () => renderExamPaperView());
  });

  document.getElementById("btnCloneAllInPaper").addEventListener("click", () => {
    let clonedCount = 0;
    state.paperQueueIds = state.paperQueueIds.map(id => {
      const q = state.questions.find(item => item.id === id);
      if (q && q.clonableTemplate) {
        const newQ = randomizeTemplateParams(q.clonableTemplate);
        if (newQ) {
          state.questions.unshift(newQ);
          clonedCount++;
          return newQ.id;
        }
      }
      return id;
    });
    if (clonedCount) { document.getElementById("paperHeaderDate").value = "Set B • " + monthLabel(); saveHeaderFields(); }
    saveStateToStorage();
    renderExamPaperView();
    showToast(clonedCount ? `Set B: ${clonedCount} question(s) got new numbers and answers.` : "No question on this paper supports new numbers.", clonedCount ? "" : "!");
  });

  document.getElementById("btnClearPaper").addEventListener("click", () => {
    if (state.paperQueueIds.length && !confirm("Remove every question from this exam paper?")) return;
    state.paperQueueIds = [];
    saveStateToStorage();
    renderExamPaperView();
    renderQuestionBank();
    showToast("Exam paper cleared.");
  });

  document.getElementById("paperQueuePills").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-paper-action]");
    if (!btn) return;
    const act = btn.getAttribute("data-paper-action");
    if (act === "up") {
      const idx = Number(btn.getAttribute("data-idx"));
      if (idx > 0) {
        const tmp = state.paperQueueIds[idx - 1];
        state.paperQueueIds[idx - 1] = state.paperQueueIds[idx];
        state.paperQueueIds[idx] = tmp;
        saveStateToStorage();
        renderExamPaperView();
      }
    } else if (act === "down") {
      const idx = Number(btn.getAttribute("data-idx"));
      if (idx < state.paperQueueIds.length - 1) {
        const tmp = state.paperQueueIds[idx + 1];
        state.paperQueueIds[idx + 1] = state.paperQueueIds[idx];
        state.paperQueueIds[idx] = tmp;
        saveStateToStorage();
        renderExamPaperView();
      }
    } else if (act === "remove") {
      const id = btn.getAttribute("data-id");
      state.paperQueueIds = state.paperQueueIds.filter(x => x !== id);
      saveStateToStorage();
      renderExamPaperView();
      renderQuestionBank();
    } else if (act === "clone-in-place") {
      const id = btn.getAttribute("data-id");
      const q = state.questions.find(item => item.id === id);
      if (q && q.clonableTemplate) {
        const newQ = randomizeTemplateParams(q.clonableTemplate);
        if (newQ) {
          state.questions.unshift(newQ);
          const pos = state.paperQueueIds.indexOf(id);
          if (pos >= 0) state.paperQueueIds[pos] = newQ.id;
          saveStateToStorage();
          renderExamPaperView();
          showToast("New numbers set for this question.");
        }
      }
    }
  });

  // Syllabus Directory & Backup Events
  document.getElementById("syllabusDirectoryTree").addEventListener("click", (e) => {
    const jumpBtn = e.target.closest("button[data-jump-curr]");
    if (!jumpBtn) return;
    const cKey = jumpBtn.getAttribute("data-jump-curr");
    const sKey = jumpBtn.getAttribute("data-jump-subj");
    state.filters.curriculum = cKey;
    state.filters.subject = sKey;
    state.filters.chapter = "ALL";
    document.getElementById("filterCurriculum").value = cKey;
    populateFilterDropdowns();
    switchMainTab("bank");
  });

  document.getElementById("btnExportBankJson").addEventListener("click", () => {
    const mine = state.questions.filter(q => !isBankQuestion(q));
    if (!mine.length) { showToast("You have no questions of your own yet. The shared bank is always loaded from the server.", "!"); return; }
    const url = URL.createObjectURL(new Blob([JSON.stringify(mine, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-questions-backup.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    showToast(`Downloaded ${mine.length} of your own question(s).`);
  });

  // Importing adds to the tutor's own questions; nothing already there is replaced or removed.
  document.getElementById("inputImportBankJson").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file) return;
    if (file.size > 12 * 1024 * 1024) { showToast("That file is too large (over 12 MB).", "!"); return; }
    const reader = new FileReader();
    reader.onload = (ev) => {
      let parsed;
      try { parsed = JSON.parse(ev.target.result); } catch (err) { showToast("That file is not valid JSON.", "!"); return; }
      if (!Array.isArray(parsed) || !parsed.length) { showToast("No questions found in that file.", "!"); return; }
      const have = new Set(state.questions.map(q => q.id).concat(state.bank.map(q => q.id)));
      const fresh = [];
      let skipped = 0;
      parsed.slice(0, 2000).forEach(raw => {
        const q = cleanQuestion(raw);
        if (!q) { skipped++; return; }
        if (have.has(q.id)) q.id = newId("q_import");
        have.add(q.id);
        fresh.push(q);
      });
      if (!fresh.length) { showToast("None of the entries in that file looked like a question.", "!"); return; }
      if (!confirm(`Add ${fresh.length} question(s) from this file to your own questions?` + (skipped ? ` ${skipped} unreadable entr${skipped === 1 ? "y" : "ies"} will be skipped.` : ""))) return;
      const before = state.questions;
      state.questions = fresh.concat(state.questions);
      if (!saveStateToStorage()) { state.questions = before; return; }
      populateFilterDropdowns();
      renderQuestionBank();
      showToast(`Added ${fresh.length} question(s) to your own questions.`);
    };
    reader.readAsText(file);
  });

  document.getElementById("btnResetDefaultBank").addEventListener("click", () => {
    if (!state.hiddenIds.length) { showToast("You have not hidden any shared-bank questions."); return; }
    const n = state.hiddenIds.length;
    state.hiddenIds = [];
    const mine = state.questions.filter(q => !isBankQuestion(q));
    state.questions = mine.concat(state.bank);
    saveStateToStorage();
    populateFilterDropdowns();
    renderQuestionBank();
    showToast(`Brought back ${n} hidden question(s).`);
  });


  document.getElementById("btnCopyMarkdownExam").addEventListener("click", () => {
    const mdBox = document.getElementById("exportMarkdownBox");
    if (!mdBox) return;
    const text = mdBox.value;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast("Copied.");
        }).catch(() => {
          mdBox.select();
          document.execCommand("copy");
          showToast("Copied.");
        });
      } else {
        mdBox.select();
        document.execCommand("copy");
        showToast("Copied.");
      }
    } catch (err) {
      mdBox.select();
      document.execCommand("copy");
      showToast("Copied.");
    }
  });
}

// =========================================================================
// 10. SIGN-IN GATE AND START-UP
// =========================================================================
const gateEl = document.getElementById("tutorGate");
const appEl = document.getElementById("tutorApp");
let startedFor = null;

function showGate(html) {
  appEl.classList.add("hidden");
  gateEl.classList.remove("hidden");
  gateEl.innerHTML = `<div class="gate-card">
      <div class="brand-mark" aria-hidden="true">Q</div>
      ${html}
    </div>`;
  const out = gateEl.querySelector("[data-gate='out']");
  if (out) out.onclick = () => signOut();
  return gateEl;
}
const gateMsg = text => { const el = gateEl.querySelector("[data-gate='msg']"); if (el) el.textContent = text; };

function signInView() {
  const g = showGate(`
    <h1 class="gate-title">QForge tutor studio</h1>
    <p class="gate-text">Private preview. Sign in with the account you were invited with.</p>
    <button type="button" class="btn btn-primary w-full" data-gate="google">Continue with Google</button>
    <div class="gate-or"><span>or</span></div>
    <label class="field-label" for="gateEmail">Email or BUET student ID</label>
    <input class="field" id="gateEmail" autocomplete="username" inputmode="email" />
    <label class="field-label mt-3" for="gatePass">Password</label>
    <input class="field" id="gatePass" type="password" autocomplete="current-password" />
    <button type="button" class="btn btn-secondary w-full mt-4" data-gate="email">Sign in</button>
    <p class="gate-msg" data-gate="msg" role="status"></p>`);
  g.querySelector("[data-gate='google']").onclick = () => googleSignIn().catch(e => gateMsg(niceError(e)));
  const go = () => signIn(g.querySelector("#gateEmail").value, g.querySelector("#gatePass").value).catch(e => gateMsg(niceError(e)));
  g.querySelector("[data-gate='email']").onclick = go;
  g.querySelector("#gatePass").onkeydown = e => { if (e.key === "Enter") go(); };
}

function notInvitedView(email) {
  showGate(`
    <h1 class="gate-title">Not available yet</h1>
    <p class="gate-text">The tutor studio is in private preview and <b>${escapeHtml(email)}</b> has not been invited.
      If you were invited, sign in with the email you gave the team.</p>
    <button type="button" class="btn btn-secondary w-full" data-gate="out">Sign out</button>`);
}

// The shared bank is stored as a few documents, each holding a JSON list of questions.
async function fetchBank(c) {
  const snap = await c.F.getDocs(c.F.collection(c.db, "tutorBank"));
  const rows = [];
  snap.docs.slice().sort((a, b) => a.id.localeCompare(b.id)).forEach(d => {
    try { const part = JSON.parse(d.data().data); if (Array.isArray(part)) rows.push(...part); } catch (e) { /* skip a damaged part */ }
  });
  return rows;
}

async function onAccount(s) {
  if (!s.user) {
    if (startedFor) return location.reload();   // signed out: drop everything that was loaded
    return signInView();
  }
  if (startedFor) { if (startedFor !== s.email) location.reload(); return; }
  if (!s.verified) {
    const g = showGate(`
      <h1 class="gate-title">Verify your email</h1>
      <p class="gate-text">Open the verification link sent to <b>${escapeHtml(s.email)}</b> (check Junk), then press the button below.</p>
      <button type="button" class="btn btn-primary w-full" data-gate="check">I have verified</button>
      <button type="button" class="btn btn-secondary w-full mt-2" data-gate="resend">Send the email again</button>
      <button type="button" class="btn btn-quiet w-full mt-2" data-gate="out">Sign out</button>
      <p class="gate-msg" data-gate="msg" role="status"></p>`);
    g.querySelector("[data-gate='check']").onclick = () => recheck().catch(e => gateMsg(niceError(e)));
    g.querySelector("[data-gate='resend']").onclick = () => resendVerification().then(() => gateMsg("Sent. Check your inbox and Junk."), e => gateMsg(niceError(e)));
    return;
  }
  showGate(`<p class="gate-text" style="margin:0">Loading your studio…</p>`);
  let bank;
  try {
    const c = await fb();
    if (!s.isAdmin) {
      const t = await c.F.getDoc(c.F.doc(c.db, "tutors", s.email));
      if (!t.exists() || t.data().blocked === true) return notInvitedView(s.email);
    }
    bank = await fetchBank(c);
  } catch (e) {
    if (e && e.code === "permission-denied") return notInvitedView(s.email);
    const g = showGate(`
      <h1 class="gate-title">Could not load</h1>
      <p class="gate-text">${escapeHtml(niceError(e))}</p>
      <button type="button" class="btn btn-primary w-full" data-gate="retry">Try again</button>
      <button type="button" class="btn btn-quiet w-full mt-2" data-gate="out">Sign out</button>`);
    g.querySelector("[data-gate='retry']").onclick = () => location.reload();
    return;
  }
  startApp(s, bank);
}

function startApp(s, bank) {
  startedFor = s.email;
  state.userEmail = s.email;
  gateEl.classList.add("hidden");
  gateEl.innerHTML = "";
  appEl.classList.remove("hidden");
  document.getElementById("accountEmail").textContent = s.email;
  document.getElementById("btnSignOut").onclick = () => signOut();

  loadStateFromStorage(bank);
  loadHeaderFields();
  populateFilterDropdowns();
  populateCreateFormSelects("newQCurriculum", "newQSubject", "newQChapter");
  populateCreateFormSelects("cropCurriculum", "cropSubject", "cropChapter");
  renderSubpartRows();
  drawCropCanvas();
  initClonerTemplate("HSC_PHY_RIVER");
  configureGvizSlidersForMode(document.getElementById("gvizModeSelect").value);
  renderQuestionBank();
  renderExamPaperView();
  renderSyllabusDirectory();
  wireAllEvents();
  if (!bank.length) showToast("The shared question bank is empty. An admin uploads it from the team dashboard (Tutors tab).", "!");
}

if (!enabled) showGate(`<h1 class="gate-title">Not switched on</h1><p class="gate-text">Sign-in is not configured for this site yet.</p>`);
else onUser(s => { onAccount(s).catch(e => showGate(`<h1 class="gate-title">Something went wrong</h1><p class="gate-text">${escapeHtml(niceError(e))}</p>`)); });
