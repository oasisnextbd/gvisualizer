// HSC Higher Math 1st paper, chapter 1: matrices and determinants (ম্যাট্রিক্স ও নির্ণায়ক).
//
// Scope (NCTB syllabus): types of matrices, equality, sum, difference, scalar multiple and product (at most
// 3x3), transpose, trace, determinants of order 2 and 3, minors and cofactors, properties of determinants,
// singular and non-singular matrices, inverse of a square matrix (adjoint method), linear systems by Cramer's
// rule and by the inverse matrix (two or three unknowns, unique solution only).
// Deliberately NOT used: rank, eigenvalues, echelon forms / Gaussian elimination as a solving method,
// determinants of order 4, systems with no or infinitely many solutions, the Cayley-Hamilton theorem by name.
//
// Every question here is written for QForge; the numbers come from the seed. Marks follow the board pattern
// for this subject: ক 2, খ 4, গ 4.
import { M, T, F, Frac, until, bn } from '../engine.js';

const m = s => `$${s}$`;                       // inline maths
const I = n => `I_{${n}}`;
const eqMat = (name, A) => m(`${name} = ${T.mat(A)}`);
const small = (A, cap) => M.maxAbs(A) <= cap;
const ordBn = A => m(M.order(A));
// "x = 2, y = -1"
const assign = (names, vals) => names.map((n, i) => `${n} = ${T.num(vals[i])}`).join(",\\; ");
// a polynomial term list for f(x) = x^2 + p x + q I
function polyTex(p, q, v = "x") {
  return `${v}^{2} ${T.coef(p, v)} ${T.coef(q, "I")}`.replace(/\s+/g, " ").trim();
}
const polyOf = (A, p, q) => M.add(M.add(M.mul(A, A), M.scale(p, A)), M.scale(q, M.identity(A.length)));
// A unimodular integer matrix (det = +-1), built from a few shears, so its inverse is also integer.
function unimodular(rng, n, steps = 3) {
  let P = M.identity(n);
  for (let s = 0; s < steps; s++) {
    const i = rng.int(0, n - 1), j = rng.intNot(0, n - 1, [i]), k = rng.pick([-2, -1, 1, 1, 2]);
    P = P.map((row, r) => (r === i ? row.map((v, c) => v + k * P[j][c]) : row));
  }
  return P;
}
const conj = (P, D) => { const inv = M.inverse(P); return M.map(M.mul(M.mul(P, D), inv.adj), v => v / inv.det); };
const invertible3 = (rng, lo, hi, maxDet) => until(() => M.random(rng, 3, 3, lo, hi), A => { const d = Math.abs(M.det(A)); return d >= 1 && d <= maxDet && A.every(r => r.some(v => v !== 0)); });

// ============================================================================================ CQ families
const families = [];

// ---------------------------------------------------------------- 1. two 3x3 matrices: sums, transpose, products
families.push({
  id: "ops33", micro: "ops", title: "দুইটি 3×3 ম্যাট্রিক্সের যোগ, বিয়োগ ও গুণ",
  data(rng) {
    return until(() => {
      const A = M.random(rng, 3, 3, -3, 4), B = M.random(rng, 3, 3, -3, 4);
      return { A, B, AB: M.mul(A, B), BA: M.mul(B, A), k: rng.int(2, 4), l: rng.int(2, 3) };
    }, d => !M.eq(d.AB, d.BA) && !M.eq(d.A, d.B) && small(d.AB, 40) && small(d.BA, 40));
  },
  stem: d => `${eqMat("A", d.A)} এবং ${eqMat("B", d.B)} দুইটি বর্গ ম্যাট্রিক্স।`,
  ka: [
    { angle: "kA − lB নির্ণয়", q: d => {
      const R = M.sub(M.scale(d.k, d.A), M.scale(d.l, d.B));
      return { text: `${m(`${d.k}A - ${d.l}B`)} নির্ণয় কর।`, solution: `${m(`${d.k}A = ${T.mat(M.scale(d.k, d.A))}`)}, ${m(`${d.l}B = ${T.mat(M.scale(d.l, d.B))}`)}; অনুরূপ ভুক্তিগুলো বিয়োগ করে ${m(`${d.k}A - ${d.l}B = ${T.mat(R)}`)}।` };
    } },
    { angle: "(A + B) এর ট্রান্সপোজ", q: d => {
      const S = M.add(d.A, d.B);
      return { text: `${m("(A + B)^{t}")} নির্ণয় কর।`, solution: `${m(`A + B = ${T.mat(S)}`)}; সারি ও কলাম বিনিময় করে ${m(`(A + B)^{t} = ${T.mat(M.T(S))}`)}।` };
    } },
    { angle: "A − B এর ট্রেস", q: d => {
      const S = M.sub(d.A, d.B);
      return { text: `${m("A - B")} নির্ণয় কর এবং এর ট্রেস লেখ।`, solution: `${m(`A - B = ${T.mat(S)}`)}; প্রধান কর্ণের ভুক্তিগুলোর সমষ্টি, ট্রেস ${m(`= ${S.map((r, i) => T.paren(r[i])).join(" + ")} = ${M.trace(S)}`)}।` };
    } },
  ],
  kha: [
    { angle: "AB নির্ণয়", q: d => ({ text: `${m("AB")} নির্ণয় কর।`, solution: `${m("A")} এর প্রতিটি সারিকে ${m("B")} এর প্রতিটি কলাম দিয়ে গুণ করে যোগ করি। যেমন (1, 1)-তম ভুক্তি ${m(`= ${d.A[0].map((v, k) => `${T.paren(v)} \\cdot ${T.paren(d.B[k][0])}`).join(" + ")} = ${d.AB[0][0]}`)}। এভাবে ${m(`AB = ${T.mat(d.AB)}`)}।` }) },
    { angle: "(A + B)ᵗ = Aᵗ + Bᵗ প্রমাণ", q: d => {
      const L = M.T(M.add(d.A, d.B));
      return { text: `দেখাও যে, ${m("(A + B)^{t} = A^{t} + B^{t}")}।`, solution: `বামপক্ষ: ${m(`A + B = ${T.mat(M.add(d.A, d.B))}`)}, তাই ${m(`(A + B)^{t} = ${T.mat(L)}`)}। ডানপক্ষ: ${m(`A^{t} + B^{t} = ${T.mat(M.T(d.A))} + ${T.mat(M.T(d.B))} = ${T.mat(L)}`)}। ∴ বামপক্ষ = ডানপক্ষ (দেখানো হলো)।` };
    } },
    { angle: "A² নির্ণয়", q: d => {
      const A2 = M.mul(d.A, d.A);
      return { text: `${m("A^{2}")} নির্ণয় কর।`, solution: `${m(`A^{2} = A \\cdot A = ${T.mat(d.A)}${T.mat(d.A)} = ${T.mat(A2)}`)}।` };
    } },
  ],
  ga: [
    { angle: "AB ≠ BA প্রমাণ", q: d => ({ text: `দেখাও যে, ${m("AB \\neq BA")}।`, solution: `${m(`AB = ${T.mat(d.AB)}`)} এবং ${m(`BA = ${T.mat(d.BA)}`)}। অনুরূপ ভুক্তিগুলো সমান নয়, সুতরাং ${m("AB \\neq BA")} (দেখানো হলো)।` }) },
    { angle: "(AB)ᵗ = BᵗAᵗ প্রমাণ", q: d => {
      const L = M.T(d.AB);
      return { text: `দেখাও যে, ${m("(AB)^{t} = B^{t}A^{t}")}।`, solution: `${m(`AB = ${T.mat(d.AB)}`)}, তাই বামপক্ষ ${m(`(AB)^{t} = ${T.mat(L)}`)}। ডানপক্ষ ${m(`B^{t}A^{t} = ${T.mat(M.T(d.B))}${T.mat(M.T(d.A))} = ${T.mat(M.mul(M.T(d.B), M.T(d.A)))}`)}। ∴ ${m("(AB)^{t} = B^{t}A^{t}")} (দেখানো হলো)।` };
    } },
    { angle: "(A + B)(A − B) বনাম A² − B²", q: d => {
      const P = M.mul(M.add(d.A, d.B), M.sub(d.A, d.B)), Q = M.sub(M.mul(d.A, d.A), M.mul(d.B, d.B));
      return { text: `${m("(A + B)(A - B)")} এবং ${m("A^{2} - B^{2}")} নির্ণয় করে দেখাও যে এরা সমান নয়। কারণ ব্যাখ্যা কর।`, solution: `${m(`(A + B)(A - B) = ${T.mat(M.add(d.A, d.B))}${T.mat(M.sub(d.A, d.B))} = ${T.mat(P)}`)}; ${m(`A^{2} - B^{2} = ${T.mat(M.mul(d.A, d.A))} - ${T.mat(M.mul(d.B, d.B))} = ${T.mat(Q)}`)}। এরা সমান নয়, কারণ ${m("(A + B)(A - B) = A^{2} - AB + BA - B^{2}")} এবং এখানে ${m("AB \\neq BA")}।` };
    } },
  ],
});

// ---------------------------------------------------------------- 2. non-square products and order
families.push({
  id: "prod23", micro: "product", title: "2×3 ও 3×2 ম্যাট্রিক্সের গুণন ও ক্রম",
  data(rng) {
    return until(() => {
      const A = M.random(rng, 2, 3, -3, 4), B = M.random(rng, 3, 2, -3, 4), C = M.random(rng, 2, 2, -3, 4);
      return { A, B, C, AB: M.mul(A, B), BA: M.mul(B, A), k: rng.int(2, 4) };
    }, d => small(d.AB, 30) && small(d.BA, 30) && !M.eq(d.C, M.T(d.C)) && d.A.flat().filter(v => v === 0).length <= 1 && d.B.flat().filter(v => v === 0).length <= 1);
  },
  stem: d => `${eqMat("A", d.A)}, ${eqMat("B", d.B)} এবং ${eqMat("C", d.C)}।`,
  ka: [
    { angle: "AB ও BA এর ক্রম", q: () => ({ text: `${m("AB")} ও ${m("BA")} নির্ণয় করা সম্ভব কি? সম্ভব হলে প্রত্যেকটির ক্রম লেখ।`, solution: `${m("A")} এর ক্রম ${m("2 \\times 3")} ও ${m("B")} এর ক্রম ${m("3 \\times 2")}। ${m("A")} এর কলাম সংখ্যা = ${m("B")} এর সারি সংখ্যা = 3, তাই ${m("AB")} সম্ভব এবং এর ক্রম ${m("2 \\times 2")}। ${m("B")} এর কলাম সংখ্যা = ${m("A")} এর সারি সংখ্যা = 2, তাই ${m("BA")} সম্ভব এবং এর ক্রম ${m("3 \\times 3")}।` }) },
    { angle: "C + Cᵗ নির্ণয়", q: d => ({ text: `${m("C + C^{t}")} নির্ণয় কর।`, solution: `${m(`C^{t} = ${T.mat(M.T(d.C))}`)}; ${m(`C + C^{t} = ${T.mat(M.add(d.C, M.T(d.C)))}`)}।` }) },
    { angle: "kC − I₂ নির্ণয়", q: d => ({ text: `${m(`${d.k}C - ${I(2)}`)} নির্ণয় কর।`, solution: `${m(`${d.k}C - ${I(2)} = ${T.mat(M.scale(d.k, d.C))} - ${T.mat(M.identity(2))} = ${T.mat(M.sub(M.scale(d.k, d.C), M.identity(2)))}`)}।` }) },
  ],
  kha: [
    { angle: "AB নির্ণয়", q: d => ({ text: `${m("AB")} নির্ণয় কর।`, solution: `(1, 1)-তম ভুক্তি ${m(`= ${d.A[0].map((v, k) => `${T.paren(v)} \\cdot ${T.paren(d.B[k][0])}`).join(" + ")} = ${d.AB[0][0]}`)}; একইভাবে বাকি ভুক্তিগুলো নির্ণয় করে ${m(`AB = ${T.mat(d.AB)}`)}।` }) },
    { angle: "BA নির্ণয়", q: d => ({ text: `${m("BA")} নির্ণয় কর।`, solution: `${m("BA")} এর ক্রম ${m("3 \\times 3")}। (1, 1)-তম ভুক্তি ${m(`= ${d.B[0].map((v, k) => `${T.paren(v)} \\cdot ${T.paren(d.A[k][0])}`).join(" + ")} = ${d.BA[0][0]}`)}; এভাবে ${m(`BA = ${T.mat(d.BA)}`)}।` }) },
  ],
  ga: [
    { angle: "AB − C² + 2I₂ নির্ণয়", q: d => {
      const C2 = M.mul(d.C, d.C), R = M.add(M.sub(d.AB, C2), M.scale(2, M.identity(2)));
      return { text: `${m(`AB - C^{2} + 2${I(2)}`)} নির্ণয় কর।`, solution: `${m(`AB = ${T.mat(d.AB)}`)}, ${m(`C^{2} = ${T.mat(C2)}`)}, ${m(`2${I(2)} = ${T.mat(M.scale(2, M.identity(2)))}`)}। ∴ ${m(`AB - C^{2} + 2${I(2)} = ${T.mat(R)}`)}।` };
    } },
    { angle: "(AB)ᵗ = BᵗAᵗ প্রমাণ", q: d => ({ text: `দেখাও যে, ${m("(AB)^{t} = B^{t}A^{t}")}।`, solution: `${m(`AB = ${T.mat(d.AB)}`)}, তাই ${m(`(AB)^{t} = ${T.mat(M.T(d.AB))}`)}। আবার ${m(`B^{t}A^{t} = ${T.mat(M.T(d.B))}${T.mat(M.T(d.A))} = ${T.mat(M.mul(M.T(d.B), M.T(d.A)))}`)}। ∴ ${m("(AB)^{t} = B^{t}A^{t}")} (দেখানো হলো)।` }) },
    { angle: "(AB)C = A(BC) প্রমাণ", q: d => {
      const BC = M.mul(d.B, d.C), L = M.mul(d.AB, d.C);
      return { text: `দেখাও যে, ${m("(AB)C = A(BC)")}।`, solution: `বামপক্ষ: ${m(`(AB)C = ${T.mat(d.AB)}${T.mat(d.C)} = ${T.mat(L)}`)}। ডানপক্ষ: ${m(`BC = ${T.mat(BC)}`)}, তাই ${m(`A(BC) = ${T.mat(d.A)}${T.mat(BC)} = ${T.mat(M.mul(d.A, BC))}`)}। ∴ বামপক্ষ = ডানপক্ষ (দেখানো হলো)।` };
    } },
  ],
});

// ---------------------------------------------------------------- 3. polynomial of a 3x3 matrix
families.push({
  id: "poly33", micro: "power", title: "3×3 ম্যাট্রিক্সের ঘাত ও বহুপদী f(A)",
  data(rng) {
    return until(() => {
      const A = M.random(rng, 3, 3, -2, 3), p = rng.intNot(-5, 5, [0]), q = rng.intNot(-7, 7, [0]);
      return { A, p, q, A2: M.mul(A, A), fA: polyOf(A, p, q), fB: polyOf(M.T(A), p, q), k: rng.int(2, 3) };
    }, d => !M.isSymmetric(d.A) && small(d.A2, 25) && small(d.fA, 40) && d.A.flat().filter(v => v === 0).length <= 2);
  },
  stem: d => `${eqMat("A", d.A)} এবং ${m(`f(x) = ${polyTex(d.p, d.q)}`)}, যেখানে ${m("I")} একটি অভেদক ম্যাট্রিক্স।`,
  ka: [
    { angle: "ট্রান্সপোজ ও ট্রেস", q: d => ({ text: `${m("A^{t}")} এবং ${m("A")} এর ট্রেস নির্ণয় কর।`, solution: `${m(`A^{t} = ${T.mat(M.T(d.A))}`)}; ট্রেস ${m(`= ${d.A.map((r, i) => T.paren(r[i])).join(" + ")} = ${M.trace(d.A)}`)}।` }) },
    { angle: "kA − I₃ নির্ণয়", q: d => ({ text: `${m(`${d.k}A - ${I(3)}`)} নির্ণয় কর।`, solution: `${m(`${d.k}A - ${I(3)} = ${T.mat(M.scale(d.k, d.A))} - ${T.mat(M.identity(3))} = ${T.mat(M.sub(M.scale(d.k, d.A), M.identity(3)))}`)}।` }) },
    { angle: "A + Aᵗ প্রতিসম", q: d => ({ text: `দেখাও যে, ${m("A + A^{t}")} একটি প্রতিসম ম্যাট্রিক্স।`, solution: `${m(`S = A + A^{t} = ${T.mat(M.add(d.A, M.T(d.A)))}`)}। এখানে ${m("S^{t} = S")} (অর্থাৎ ${m("s_{ij} = s_{ji}")}), সুতরাং ${m("A + A^{t}")} প্রতিসম।` }) },
  ],
  kha: [
    { angle: "A² নির্ণয়", q: d => ({ text: `${m("A^{2}")} নির্ণয় কর।`, solution: `${m(`A^{2} = ${T.mat(d.A)}${T.mat(d.A)} = ${T.mat(d.A2)}`)}।` }) },
    { angle: "A·Aᵗ প্রতিসম", q: d => {
      const P = M.mul(d.A, M.T(d.A));
      return { text: `${m("AA^{t}")} নির্ণয় কর এবং দেখাও যে এটি একটি প্রতিসম ম্যাট্রিক্স।`, solution: `${m(`AA^{t} = ${T.mat(d.A)}${T.mat(M.T(d.A))} = ${T.mat(P)}`)}। এর ট্রান্সপোজ নিলে একই ম্যাট্রিক্স পাওয়া যায়, অর্থাৎ ${m("(AA^{t})^{t} = AA^{t}")}; সুতরাং এটি প্রতিসম।` };
    } },
  ],
  ga: [
    { angle: "f(A) নির্ণয়", q: d => ({ text: `${m("f(A)")} নির্ণয় কর।`, solution: `${m(`f(A) = ${polyTex(d.p, d.q, "A")}`)}। ${m(`A^{2} = ${T.mat(d.A2)}`)}, ${m(`${d.p}A = ${T.mat(M.scale(d.p, d.A))}`)}, ${m(`${d.q}I = ${T.mat(M.scale(d.q, M.identity(3)))}`)}। যোগ করে ${m(`f(A) = ${T.mat(d.fA)}`)}।` }) },
    { angle: "B = Aᵗ হলে f(B)", q: d => {
      const B = M.T(d.A);
      return { text: `${m("B = A^{t}")} হলে ${m("f(B)")} নির্ণয় কর।`, solution: `${m(`B = ${T.mat(B)}`)}, ${m(`B^{2} = ${T.mat(M.mul(B, B))}`)}। ${m(`f(B) = ${polyTex(d.p, d.q, "B")} = ${T.mat(d.fB)}`)}।` };
    } },
    { angle: "f(A) এর ট্রেস", q: d => ({ text: `${m("f(A)")} নির্ণয় কর এবং এর ট্রেস লেখ।`, solution: `${m(`A^{2} = ${T.mat(d.A2)}`)}; ${m(`f(A) = ${polyTex(d.p, d.q, "A")} = ${T.mat(d.fA)}`)}। ট্রেস ${m(`= ${d.fA.map((r, i) => T.paren(r[i])).join(" + ")} = ${M.trace(d.fA)}`)}।` }) },
  ],
});

// ---------------------------------------------------------------- 4. a 2x2 matrix: identity it satisfies, powers, inverse
families.push({
  id: "quad22", micro: "power", title: "2×2 ম্যাট্রিক্সের ঘাত, বহুপদী ও বিপরীত",
  avoid: [[0, 2]],                    // the same identity should not be asked in both খ and গ
  data(rng) {
    return until(() => {
      const A = M.random(rng, 2, 2, -4, 5), tr = M.trace(A), det = M.det(A);
      return { A, tr, det, A2: M.mul(A, A), a: rng.intNot(-4, 4, [0]), b: rng.intNot(-6, 6, [0]) };
    }, d => d.det !== 0 && Math.abs(d.det) <= 12 && d.tr !== 0 && !d.A.flat().includes(0) && d.A[0][1] !== d.A[1][0] && (d.a !== -d.tr || d.b !== d.det));
  },
  stem: d => `${eqMat("A", d.A)} এবং ${m(`g(x) = ${polyTex(d.a, d.b)}`)}, যেখানে ${m("I")} একটি অভেদক ম্যাট্রিক্স।`,
  ka: [
    { angle: "A² নির্ণয়", q: d => ({ text: `${m("A^{2}")} নির্ণয় কর।`, solution: `${m(`A^{2} = ${T.mat(d.A)}${T.mat(d.A)} = ${T.mat(d.A2)}`)}।` }) },
    { angle: "|A| ও ব্যতিক্রমী কিনা", q: d => ({ text: `${m("|A|")} নির্ণয় কর। ${m("A")} কি ব্যতিক্রমী ম্যাট্রিক্স?`, solution: `${m(`|A| = ${T.det2Work(d.A)} = ${d.det}`)}। যেহেতু ${m("|A| \\neq 0")}, ${m("A")} অব্যতিক্রমী (ব্যতিক্রমী নয়)।` }) },
    { angle: "A − Aᵗ বিপ্রতিসম", q: d => ({ text: `দেখাও যে, ${m("A - A^{t}")} একটি বিপ্রতিসম ম্যাট্রিক্স।`, solution: `${m(`K = A - A^{t} = ${T.mat(M.sub(d.A, M.T(d.A)))}`)}; ${m(`K^{t} = ${T.mat(M.T(M.sub(d.A, M.T(d.A))))} = -K`)}। সুতরাং ${m("A - A^{t}")} বিপ্রতিসম।` }) },
  ],
  kha: [
    { angle: "A² − (tr)A + |A|I = 0 প্রমাণ", q: d => {
      const expr = `A^{2} ${T.coef(-d.tr, "A")} ${T.coef(d.det, "I")}`;
      return { text: `দেখাও যে, ${m(`${expr} = \\mathbf{0}`)}, যেখানে ${m("\\mathbf{0}")} শূন্য ম্যাট্রিক্স।`, solution: `${m(`A^{2} = ${T.mat(d.A2)}`)}, ${m(`${-d.tr}A = ${T.mat(M.scale(-d.tr, d.A))}`)}, ${m(`${d.det}I = ${T.mat(M.scale(d.det, M.identity(2)))}`)}। যোগ করে ${m(`${expr} = ${T.mat(M.zero(2, 2))}`)} (দেখানো হলো)।` };
    } },
    { angle: "A³ নির্ণয়", q: d => ({ text: `${m("A^{3}")} নির্ণয় কর।`, solution: `${m(`A^{2} = ${T.mat(d.A2)}`)}; ${m(`A^{3} = A^{2} \\cdot A = ${T.mat(d.A2)}${T.mat(d.A)} = ${T.mat(M.mul(d.A2, d.A))}`)}।` }) },
  ],
  ga: [
    { angle: "A⁻¹ নির্ণয় ও যাচাই", q: d => {
      const adj = M.adj(d.A);
      return { text: `${m("A^{-1}")} নির্ণয় কর এবং ${m("AA^{-1} = I")} যাচাই কর।`, solution: `${m(`|A| = ${d.det} \\neq 0`)}, তাই ${m("A^{-1}")} বিদ্যমান। ${m(`\\text{adj}\\,A = ${T.mat(adj)}`)}; ${m(`A^{-1} = \\frac{1}{|A|}\\,\\text{adj}\\,A = ${T.invFromAdj(d.det, adj)}`)}। যাচাই: ${m(`A \\cdot \\text{adj}\\,A = ${T.mat(M.mul(d.A, adj))} = ${d.det}I`)}, সুতরাং ${m("AA^{-1} = I")}।` };
    } },
    { angle: "g(A) নির্ণয়", q: d => ({ text: `${m("g(A)")} নির্ণয় কর।`, solution: `${m(`g(A) = ${polyTex(d.a, d.b, "A")}`)}; ${m(`A^{2} = ${T.mat(d.A2)}`)}, ${m(`${d.a}A = ${T.mat(M.scale(d.a, d.A))}`)}, ${m(`${d.b}I = ${T.mat(M.scale(d.b, M.identity(2)))}`)}। ∴ ${m(`g(A) = ${T.mat(polyOf(d.A, d.a, d.b))}`)}।` }) },
    { angle: "বহুপদী সম্পর্ক হতে A⁻¹", q: d => {
      const expr = `A^{2} ${T.coef(-d.tr, "A")} ${T.coef(d.det, "I")}`, R = M.sub(M.scale(d.tr, M.identity(2)), d.A);
      return { text: `দেখাও যে, ${m(`${expr} = \\mathbf{0}`)} এবং এই সম্পর্কের সাহায্যে ${m("A^{-1}")} নির্ণয় কর।`, solution: `${m(`A^{2} = ${T.mat(d.A2)}`)}; ${m(`${expr} = ${T.mat(d.A2)} + ${T.mat(M.scale(-d.tr, d.A))} + ${T.mat(M.scale(d.det, M.identity(2)))} = ${T.mat(M.zero(2, 2))}`)}। উভয়পক্ষকে ${m("A^{-1}")} দ্বারা গুণ করে ${m(`A ${T.coef(-d.tr, "I")} ${T.coef(d.det, "A^{-1}")} = \\mathbf{0}`)}, ∴ ${m(`A^{-1} = ${F(1, d.det).tex()}(${T.coef(d.tr, "I", true)} - A) = ${T.invFromAdj(d.det, R)}`)}।` };
    } },
    { angle: "(Aᵗ)⁻¹ = (A⁻¹)ᵗ প্রমাণ", q: d => {
      const adj = M.adj(d.A), At = M.T(d.A);
      return { text: `দেখাও যে, ${m("(A^{t})^{-1} = (A^{-1})^{t}")}।`, solution: `${m(`A^{-1} = ${T.invFromAdj(d.det, adj)}`)}, তাই ${m(`(A^{-1})^{t} = ${T.invFromAdj(d.det, M.T(adj))}`)}। আবার ${m(`A^{t} = ${T.mat(At)}`)}, ${m(`|A^{t}| = ${d.det}`)} এবং ${m(`(A^{t})^{-1} = ${T.invFromAdj(d.det, M.adj(At))}`)}। ∴ ${m("(A^{t})^{-1} = (A^{-1})^{t}")} (দেখানো হলো)।` };
    } },
  ],
});

// ---------------------------------------------------------------- 5. special matrices
const pairsWithProduct = (rng, prod) => { const out = []; for (let b = -8; b <= 8; b++) if (b !== 0 && prod % b === 0 && Math.abs(prod / b) <= 8) out.push([b, prod / b]); return rng.pick(out); };
families.push({
  id: "special", micro: "special", title: "সমঘাতি, অভেদঘাতি ও শূন্যঘাতি ম্যাট্রিক্স",
  data(rng) {
    const a = rng.pick([-3, -2, -1, 2, 3, 4]);
    const [pb, pc] = pairsWithProduct(rng, a * (1 - a));          // P = [a b; c 1-a], P^2 = P
    const e = rng.pick([-4, -3, -2, 2, 3, 4]);
    const [qb, qc] = pairsWithProduct(rng, 1 - e * e);            // Q = [e b; c -e], Q^2 = I
    const J = [[0, 1, 0], [0, 0, 1], [0, 0, 0]];
    const N = until(() => conj(unimodular(rng, 3, 3), J), X => small(X, 6) && X.flat().filter(v => v === 0).length <= 2);
    return { P: [[a, pb], [pc, 1 - a]], Q: [[e, qb], [qc, -e]], N, N2: M.mul(N, N) };
  },
  stem: d => `${eqMat("P", d.P)}, ${eqMat("Q", d.Q)} এবং ${eqMat("N", d.N)}।`,
  ka: [
    { angle: "P সমঘাতি", q: d => ({ text: `দেখাও যে, ${m("P")} একটি সমঘাতি ম্যাট্রিক্স।`, solution: `${m(`P^{2} = ${T.mat(d.P)}${T.mat(d.P)} = ${T.mat(M.mul(d.P, d.P))} = P`)}। যেহেতু ${m("P^{2} = P")}, ${m("P")} সমঘাতি।` }) },
    { angle: "Q অভেদঘাতি", q: d => ({ text: `দেখাও যে, ${m("Q")} একটি অভেদঘাতি ম্যাট্রিক্স।`, solution: `${m(`Q^{2} = ${T.mat(d.Q)}${T.mat(d.Q)} = ${T.mat(M.mul(d.Q, d.Q))} = I`)}। যেহেতু ${m("Q^{2} = I")}, ${m("Q")} অভেদঘাতি।` }) },
    { angle: "P ও Q এর নির্ণায়ক", q: d => ({ text: `${m("|P|")} ও ${m("|Q|")} নির্ণয় কর। কোনটি ব্যতিক্রমী?`, solution: `${m(`|P| = ${T.det2Work(d.P)} = ${M.det(d.P)}`)}, ${m(`|Q| = ${T.det2Work(d.Q)} = ${M.det(d.Q)}`)}। ${m("|P| = 0")} বলে ${m("P")} ব্যতিক্রমী; ${m("|Q| \\neq 0")} বলে ${m("Q")} অব্যতিক্রমী।` }) },
  ],
  kha: [
    { angle: "N, 3 সূচকের শূন্যঘাতি", q: d => ({ text: `দেখাও যে, ${m("N")} একটি 3 সূচকের শূন্যঘাতি ম্যাট্রিক্স।`, solution: `${m(`N^{2} = ${T.mat(d.N2)} \\neq \\mathbf{0}`)} এবং ${m(`N^{3} = N^{2} \\cdot N = ${T.mat(M.mul(d.N2, d.N))} = \\mathbf{0}`)}। যেহেতু ${m("N^{2} \\neq \\mathbf{0}")} কিন্তু ${m("N^{3} = \\mathbf{0}")}, ${m("N")} একটি 3 সূচকের শূন্যঘাতি ম্যাট্রিক্স।` }) },
    { angle: "I − P ও সমঘাতি", q: d => {
      const R = M.sub(M.identity(2), d.P);
      return { text: `${m(`R = ${I(2)} - P`)} হলে দেখাও যে, ${m("R")} ও একটি সমঘাতি ম্যাট্রিক্স এবং ${m("PR = \\mathbf{0}")}।`, solution: `${m(`R = ${T.mat(R)}`)}; ${m(`R^{2} = ${T.mat(M.mul(R, R))} = R`)}, সুতরাং ${m("R")} সমঘাতি। আবার ${m(`PR = ${T.mat(d.P)}${T.mat(R)} = ${T.mat(M.mul(d.P, R))} = \\mathbf{0}`)}।` };
    } },
    { angle: "PQ ও QP তুলনা", q: d => ({ text: `${m("PQ")} ও ${m("QP")} নির্ণয় কর। এরা সমান কি?`, solution: `${m(`PQ = ${T.mat(M.mul(d.P, d.Q))}`)}, ${m(`QP = ${T.mat(M.mul(d.Q, d.P))}`)}। ${M.eq(M.mul(d.P, d.Q), M.mul(d.Q, d.P)) ? `এখানে ${m("PQ = QP")}।` : `অনুরূপ ভুক্তিগুলো সমান নয়, তাই ${m("PQ \\neq QP")}।`}` }) },
  ],
  ga: [
    { angle: "(I + N)(I − N + N²) = I", q: d => {
      const L = M.add(M.identity(3), d.N), R = M.add(M.sub(M.identity(3), d.N), d.N2);
      return { text: `দেখাও যে, ${m(`(${I(3)} + N)(${I(3)} - N + N^{2}) = ${I(3)}`)}।`, solution: `${m(`N^{2} = ${T.mat(d.N2)}`)}। ${m(`${I(3)} + N = ${T.mat(L)}`)} এবং ${m(`${I(3)} - N + N^{2} = ${T.mat(R)}`)}। গুণ করে ${m(`${T.mat(L)}${T.mat(R)} = ${T.mat(M.mul(L, R))} = ${I(3)}`)} (দেখানো হলো)।` };
    } },
    { angle: "N কে প্রতিসম + বিপ্রতিসম", q: d => {
      const S = M.add(d.N, M.T(d.N)), K = M.sub(d.N, M.T(d.N));
      return { text: `দেখাও যে, ${m("N + N^{t}")} প্রতিসম এবং ${m("N - N^{t}")} বিপ্রতিসম ম্যাট্রিক্স। এদের সাহায্যে ${m("N")} কে একটি প্রতিসম ও একটি বিপ্রতিসম ম্যাট্রিক্সের সমষ্টিরূপে প্রকাশ কর।`, solution: `${m(`S = N + N^{t} = ${T.mat(S)}`)}, ${m("S^{t} = S")} তাই প্রতিসম। ${m(`K = N - N^{t} = ${T.mat(K)}`)}, ${m("K^{t} = -K")} তাই বিপ্রতিসম। ${m(`N = \\frac{1}{2}S + \\frac{1}{2}K = \\frac{1}{2}${T.mat(S)} + \\frac{1}{2}${T.mat(K)}`)}।` };
    } },
    { angle: "Q⁻¹ = Q প্রমাণ", q: d => {
      const det = M.det(d.Q), adj = M.adj(d.Q);
      return { text: `${m("Q^{-1}")} নির্ণয় কর এবং দেখাও যে ${m("Q^{-1} = Q")}। এর কারণ ব্যাখ্যা কর।`, solution: `${m(`|Q| = ${T.det2Work(d.Q)} = ${det}`)}, ${m(`\\text{adj}\\,Q = ${T.mat(adj)}`)}; ${m(`Q^{-1} = \\frac{1}{${det}}${T.mat(adj)} = ${T.mat(M.map(adj, v => v / det))} = Q`)}। কারণ ${m("Q^{2} = I")}, অর্থাৎ ${m("Q \\cdot Q = I")}; বিপরীত ম্যাট্রিক্সের সংজ্ঞা অনুসারে ${m("Q^{-1} = Q")}।` };
    } },
  ],
});

// ---------------------------------------------------------------- 6. unknown entries from equality, symmetry, skew-symmetry
families.push({
  id: "unknowns", micro: "types", title: "সমতা ও বিশেষ ম্যাট্রিক্স হতে অজানা ভুক্তি নির্ণয়",
  data(rng) {
    const x = rng.intNot(-4, 5, [0]), y = rng.intNot(-4, 5, [0, x]);
    const b = rng.intNot(-5, 6, [0]), c = rng.intNot(-5, 6, [0, b]);
    const [a12, a13, a23] = [rng.intNot(-5, 6, [0]), rng.intNot(-5, 6, [0]), rng.intNot(-5, 6, [0])];
    // R = symmetric part + skew part, both integer, so the halves in the decomposition stay whole.
    const Sy = until(() => { const X = M.random(rng, 3, 3, -3, 4); return M.make(3, 3, (i, j) => (i <= j ? X[i][j] : X[j][i])); }, X => true);
    const Sk = until(() => { const u = rng.intNot(-3, 3, [0]), v = rng.intNot(-3, 3, [0]), w = rng.intNot(-3, 3, [0]); return [[0, u, v], [-u, 0, w], [-v, -w, 0]]; }, X => true);
    return { x, y, b, c, Nm: [[x + y, b], [c, x - y]], S: [[0, a12, a13], [-a12, 0, a23], [-a13, -a23, 0]], Sy, Sk, R: M.add(Sy, Sk) };
  },
  stem: d => `${m(`M = \\begin{bmatrix} x + y & ${d.b} \\\\ ${d.c} & x - y \\end{bmatrix}`)}, ${eqMat("N", d.Nm)}, ${m(`S = \\begin{bmatrix} 0 & ${d.S[0][1]} & p \\\\ q & 0 & ${d.S[1][2]} \\\\ ${d.S[2][0]} & r & 0 \\end{bmatrix}`)} এবং ${eqMat("R", d.R)}।`,
  ka: [
    { angle: "M = N হলে (x, y)", q: d => ({ text: `${m("M = N")} হলে ${m("(x, y)")} নির্ণয় কর।`, solution: `ম্যাট্রিক্সের সমতা অনুসারে ${m(`x + y = ${d.x + d.y}`)} এবং ${m(`x - y = ${d.x - d.y}`)}। যোগ করে ${m(`2x = ${2 * d.x}`)}, ${m(`x = ${d.x}`)}; বিয়োগ করে ${m(`2y = ${2 * d.y}`)}, ${m(`y = ${d.y}`)}। ∴ ${m(`(x, y) = (${d.x}, ${d.y})`)}।` }) },
    { angle: "S বিপ্রতিসম হলে p, q, r", q: d => ({ text: `${m("S")} একটি বিপ্রতিসম ম্যাট্রিক্স হলে ${m("p, q, r")} এর মান নির্ণয় কর।`, solution: `বিপ্রতিসম ম্যাট্রিক্সে ${m("s_{ij} = -s_{ji}")}। তাই ${m(`p = -(${d.S[2][0]}) = ${d.S[0][2]}`)}, ${m(`q = -(${d.S[0][1]}) = ${d.S[1][0]}`)}, ${m(`r = -(${d.S[1][2]}) = ${d.S[2][1]}`)}।` }) },
    { angle: "N + Nᵗ ও এর ধরন", q: d => ({ text: `${m("N + N^{t}")} নির্ণয় কর। এটি কোন ধরনের ম্যাট্রিক্স?`, solution: `${m(`N + N^{t} = ${T.mat(d.Nm)} + ${T.mat(M.T(d.Nm))} = ${T.mat(M.add(d.Nm, M.T(d.Nm)))}`)}। এর (1, 2) ও (2, 1)-তম ভুক্তি সমান, তাই এটি একটি প্রতিসম ম্যাট্রিক্স।` }) },
  ],
  kha: [
    { angle: "S² প্রতিসম", q: d => {
      const S2 = M.mul(d.S, d.S);
      return { text: `${m("S")} বিপ্রতিসম হলে ${m("S^{2}")} নির্ণয় কর এবং দেখাও যে ${m("S^{2}")} একটি প্রতিসম ম্যাট্রিক্স।`, solution: `${m(`p = ${d.S[0][2]}, q = ${d.S[1][0]}, r = ${d.S[2][1]}`)} বসিয়ে ${m(`S = ${T.mat(d.S)}`)}। ${m(`S^{2} = ${T.mat(S2)}`)}; এখানে ${m("(S^{2})^{t} = S^{2}")}, সুতরাং ${m("S^{2}")} প্রতিসম।` };
    } },
    { angle: "N·Nᵗ প্রতিসম", q: d => {
      const P = M.mul(d.Nm, M.T(d.Nm));
      return { text: `${m("NN^{t}")} নির্ণয় কর এবং দেখাও যে এটি প্রতিসম।`, solution: `${m(`NN^{t} = ${T.mat(d.Nm)}${T.mat(M.T(d.Nm))} = ${T.mat(P)}`)}; (1, 2)-তম ও (2, 1)-তম ভুক্তি সমান, অর্থাৎ ${m("(NN^{t})^{t} = NN^{t}")}; সুতরাং প্রতিসম।` };
    } },
  ],
  ga: [
    { angle: "R = প্রতিসম + বিপ্রতিসম", q: d => ({ text: `${m("R")} কে একটি প্রতিসম ও একটি বিপ্রতিসম ম্যাট্রিক্সের সমষ্টিরূপে প্রকাশ কর।`, solution: `${m(`R^{t} = ${T.mat(M.T(d.R))}`)}। ${m(`\\frac{1}{2}(R + R^{t}) = \\frac{1}{2}${T.mat(M.add(d.R, M.T(d.R)))} = ${T.mat(d.Sy)}`)}, যা প্রতিসম; ${m(`\\frac{1}{2}(R - R^{t}) = \\frac{1}{2}${T.mat(M.sub(d.R, M.T(d.R)))} = ${T.mat(d.Sk)}`)}, যা বিপ্রতিসম। ∴ ${m(`R = ${T.mat(d.Sy)} + ${T.mat(d.Sk)}`)}।` }) },
    { angle: "S³ বিপ্রতিসম", q: d => {
      const S3 = M.mul(M.mul(d.S, d.S), d.S);
      return { text: `${m("S")} বিপ্রতিসম হলে ${m("S^{3}")} নির্ণয় কর এবং দেখাও যে ${m("S^{3}")} ও একটি বিপ্রতিসম ম্যাট্রিক্স।`, solution: `${m(`S = ${T.mat(d.S)}`)}, ${m(`S^{2} = ${T.mat(M.mul(d.S, d.S))}`)}, ${m(`S^{3} = S^{2} \\cdot S = ${T.mat(S3)}`)}। এখানে ${m("(S^{3})^{t} = -S^{3}")} এবং প্রধান কর্ণের ভুক্তিগুলো শূন্য; সুতরাং ${m("S^{3}")} বিপ্রতিসম।` };
    } },
  ],
});

// ---------------------------------------------------------------- 7. determinant, cofactors, adjoint, inverse of a 3x3
families.push({
  id: "inv33", micro: "inverse", title: "3×3 ম্যাট্রিক্সের নির্ণায়ক, সহগুণক ও বিপরীত ম্যাট্রিক্স",
  avoid: [[0, 0], [0, 1]],            // if খ already finds adj A, গ should not be "find the inverse"
  data(rng) {
    const A = until(() => invertible3(rng, -2, 4, 9), X => X.flat().filter(v => v === 0).length <= 2 && Math.abs(M.det(X)) >= 2);
    return { A, det: M.det(A), cof: M.cofactorMatrix(A), adj: M.adj(A) };
  },
  stem: d => `${eqMat("A", d.A)} একটি বর্গ ম্যাট্রিক্স।`,
  ka: [
    { angle: "|A| ও ব্যতিক্রমী কিনা", q: d => ({ text: `${m("|A|")} নির্ণয় কর। ${m("A")} কি বিপরীতযোগ্য?`, solution: `প্রথম সারি বরাবর বিস্তার করে ${m(`|A| = ${T.det3Work(d.A)} = ${d.det}`)}। যেহেতু ${m("|A| \\neq 0")}, ${m("A")} অব্যতিক্রমী, সুতরাং বিপরীতযোগ্য।` }) },
    { angle: "একটি অনুরাশি ও একটি সহগুণক", q: d => ({ text: `${m("A")} এর (2, 3)-তম অনুরাশি এবং (1, 2)-তম সহগুণক নির্ণয় কর।`, solution: `(2, 3)-তম অনুরাশি ${m(`= ${T.det(M.minorMatrix(d.A, 1, 2))} = ${M.minor(d.A, 1, 2)}`)}। (1, 2)-তম সহগুণক ${m(`= (-1)^{1+2}${T.det(M.minorMatrix(d.A, 0, 1))} = -(${M.minor(d.A, 0, 1)}) = ${d.cof[0][1]}`)}।` }) },
    { angle: "Aᵗ ও ট্রেস", q: d => ({ text: `${m("A^{t}")} এবং ${m("A")} এর ট্রেস নির্ণয় কর।`, solution: `${m(`A^{t} = ${T.mat(M.T(d.A))}`)}; ট্রেস ${m(`= ${d.A.map((r, i) => T.paren(r[i])).join(" + ")} = ${M.trace(d.A)}`)}।` }) },
  ],
  kha: [
    { angle: "adj A নির্ণয়", q: d => ({ text: `${m("A")} এর অ্যাডজয়েন্ট ম্যাট্রিক্স নির্ণয় কর।`, solution: `সহগুণকগুলো: ${m(d.cof.map((r, i) => r.map((v, j) => `A_{${i + 1}${j + 1}} = ${v}`).join(",\\; ")).join(";\\; "))}। সহগুণক ম্যাট্রিক্স ${m(T.mat(d.cof))}; এর ট্রান্সপোজ ${m(`\\text{adj}\\,A = ${T.mat(d.adj)}`)}।` }) },
    { angle: "সহগুণকের দুটি ধর্ম যাচাই", q: d => {
      const own = d.A[0].map((v, j) => `${T.paren(v)}(${d.cof[0][j]})`).join(" + "), alien = d.A[1].map((v, j) => `${T.paren(v)}(${d.cof[0][j]})`).join(" + ");
      return { text: `${m("A")} এর ভুক্তি ${m("a_{ij}")} এর সহগুণক ${m("A_{ij}")} হলে দেখাও যে, ${m("a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13} = |A|")} এবং ${m("a_{21}A_{11} + a_{22}A_{12} + a_{23}A_{13} = 0")}।`, solution: `${m(`A_{11} = ${d.cof[0][0]},\\; A_{12} = ${d.cof[0][1]},\\; A_{13} = ${d.cof[0][2]}`)}। ${m(`a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13} = ${own} = ${d.det} = |A|`)}। ${m(`a_{21}A_{11} + a_{22}A_{12} + a_{23}A_{13} = ${alien} = 0`)} (দেখানো হলো)।` };
    } },
  ],
  ga: [
    { angle: "A⁻¹ নির্ণয়", q: d => ({ text: `${m("A^{-1}")} নির্ণয় কর।`, solution: `${m(`|A| = ${d.det} \\neq 0`)}, তাই ${m("A^{-1}")} বিদ্যমান। সহগুণক ম্যাট্রিক্স ${m(T.mat(d.cof))}, ${m(`\\text{adj}\\,A = ${T.mat(d.adj)}`)}। ∴ ${m(`A^{-1} = \\frac{1}{|A|}\\,\\text{adj}\\,A = ${T.invFromAdj(d.det, d.adj)}`)}।` }) },
    { angle: "A⁻¹ নির্ণয় ও AA⁻¹ = I যাচাই", q: d => ({ text: `${m("A^{-1}")} নির্ণয় কর এবং ${m(`AA^{-1} = ${I(3)}`)} যাচাই কর।`, solution: `${m(`|A| = ${d.det}`)}, ${m(`\\text{adj}\\,A = ${T.mat(d.adj)}`)}, ${m(`A^{-1} = ${T.invFromAdj(d.det, d.adj)}`)}। যাচাই: ${m(`A \\cdot \\text{adj}\\,A = ${T.mat(M.mul(d.A, d.adj))} = ${d.det}${I(3)}`)}, সুতরাং ${m(`AA^{-1} = \\frac{1}{${d.det}} \\cdot ${d.det}${I(3)} = ${I(3)}`)}।` }) },
    { angle: "A·adj A = |A|·I প্রমাণ", q: d => ({ text: `দেখাও যে, ${m(`A(\\text{adj}\\,A) = (\\text{adj}\\,A)A = |A|${I(3)}`)}।`, solution: `${m(`|A| = ${d.det}`)}, ${m(`\\text{adj}\\,A = ${T.mat(d.adj)}`)}। ${m(`A(\\text{adj}\\,A) = ${T.mat(M.mul(d.A, d.adj))}`)} এবং ${m(`(\\text{adj}\\,A)A = ${T.mat(M.mul(d.adj, d.A))}`)}; উভয়ই ${m(`${d.det}${I(3)} = |A|${I(3)}`)} (দেখানো হলো)।` }) },
  ],
});

// ---------------------------------------------------------------- 8. a linear system in three unknowns
function systemTex(A, B) {
  return `\\begin{aligned} ${A.map((r, i) => `${T.linear(r, ["x", "y", "z"])} &= ${B[i]}`).join(" \\\\ ")} \\end{aligned}`;
}
const replaceCol = (A, j, col) => A.map((r, i) => r.map((v, c) => (c === j ? col[i] : v)));
families.push({
  id: "system3", micro: "system", title: "তিন চলকের একঘাত সমীকরণ জোট",
  avoid: [[0, 1]],                    // do not ask for Cramer's rule twice
  data(rng) {
    return until(() => {
      const A = M.random(rng, 3, 3, -3, 4), X = [rng.int(-3, 4), rng.int(-3, 4), rng.int(-3, 4)];
      const B = A.map(r => r.reduce((s, v, k) => s + v * X[k], 0));
      return { A, X, B, D: M.det(A) };
    }, d => d.D !== 0 && Math.abs(d.D) <= 20 && Math.abs(d.D) >= 2 && d.A.flat().filter(v => v === 0).length <= 1 && new Set(d.X).size >= 2 && d.X.filter(v => v === 0).length <= 1 && d.B.every(v => Math.abs(v) <= 25));
  },
  stem: d => `একটি একঘাত সমীকরণ জোট: ${m(systemTex(d.A, d.B))}`,
  ka: [
    { angle: "AX = B আকারে প্রকাশ", q: d => ({ text: `সমীকরণ জোটটিকে ${m("AX = B")} আকারে প্রকাশ কর, যেখানে ${m("A")} সহগ ম্যাট্রিক্স।`, solution: `${m(`${T.mat(d.A)}${T.cells([["x"], ["y"], ["z"]])} = ${T.mat(d.B.map(v => [v]))}`)}; এখানে ${m(`A = ${T.mat(d.A)}`)}, ${m(`X = ${T.cells([["x"], ["y"], ["z"]])}`)}, ${m(`B = ${T.mat(d.B.map(v => [v]))}`)}।` }) },
    { angle: "সহগ নির্ণায়ক D", q: d => ({ text: `সহগ নির্ণায়ক ${m("D")} এর মান নির্ণয় কর। ক্রেমারের নিয়ম প্রয়োগ করা যাবে কি?`, solution: `${m(`D = ${T.det(d.A)} = ${T.det3Work(d.A)} = ${d.D}`)}। যেহেতু ${m("D \\neq 0")}, জোটটির একটি অনন্য সমাধান আছে এবং ক্রেমারের নিয়ম প্রয়োগ করা যাবে।` }) },
  ],
  kha: [
    { angle: "ক্রেমারের নিয়মে সমাধান", q: d => {
      const Ds = [0, 1, 2].map(j => M.det(replaceCol(d.A, j, d.B)));
      return { text: `ক্রেমারের নিয়মে সমীকরণ জোটটির সমাধান কর।`, solution: `${m(`D = ${T.det(d.A)} = ${d.D}`)}; ${m(`D_{x} = ${T.det(replaceCol(d.A, 0, d.B))} = ${Ds[0]}`)}, ${m(`D_{y} = ${T.det(replaceCol(d.A, 1, d.B))} = ${Ds[1]}`)}, ${m(`D_{z} = ${T.det(replaceCol(d.A, 2, d.B))} = ${Ds[2]}`)}। ∴ ${m(`x = \\frac{D_{x}}{D} = ${d.X[0]},\\; y = \\frac{D_{y}}{D} = ${d.X[1]},\\; z = \\frac{D_{z}}{D} = ${d.X[2]}`)}; নির্ণেয় সমাধান ${m(`(x, y, z) = (${d.X.join(", ")})`)}।` };
    } },
    { angle: "সহগ ম্যাট্রিক্সের adj", q: d => ({ text: `সহগ ম্যাট্রিক্স ${m("A")} এর অ্যাডজয়েন্ট ম্যাট্রিক্স নির্ণয় কর।`, solution: `${m(`A = ${T.mat(d.A)}`)}; সহগুণক ম্যাট্রিক্স ${m(T.mat(M.cofactorMatrix(d.A)))}; এর ট্রান্সপোজ ${m(`\\text{adj}\\,A = ${T.mat(M.adj(d.A))}`)}।` }) },
  ],
  ga: [
    { angle: "বিপরীত ম্যাট্রিক্সের সাহায্যে সমাধান", q: d => {
      const adj = M.adj(d.A), prod = adj.map(r => r.reduce((s, v, k) => s + v * d.B[k], 0));
      return { text: `বিপরীত ম্যাট্রিক্সের সাহায্যে সমীকরণ জোটটির সমাধান কর।`, solution: `${m("AX = B")}, যেখানে ${m(`A = ${T.mat(d.A)}`)}, ${m(`B = ${T.mat(d.B.map(v => [v]))}`)}। ${m(`|A| = ${d.D} \\neq 0`)}; ${m(`\\text{adj}\\,A = ${T.mat(adj)}`)}; ${m(`A^{-1} = ${T.invFromAdj(d.D, adj)}`)}। ${m(`X = A^{-1}B = \\frac{1}{${d.D}}${T.mat(adj)}${T.mat(d.B.map(v => [v]))} = \\frac{1}{${d.D}}${T.mat(prod.map(v => [v]))} = ${T.mat(d.X.map(v => [v]))}`)}। ∴ ${m(`(x, y, z) = (${d.X.join(", ")})`)}।` };
    } },
    { angle: "ক্রেমারের নিয়মে সমাধান ও যাচাই", q: d => {
      const Ds = [0, 1, 2].map(j => M.det(replaceCol(d.A, j, d.B)));
      return { text: `ক্রেমারের নিয়মে সমীকরণ জোটটির সমাধান কর এবং প্রথম সমীকরণে বসিয়ে সমাধানটি যাচাই কর।`, solution: `${m(`D = ${d.D}`)}, ${m(`D_{x} = ${T.det(replaceCol(d.A, 0, d.B))} = ${Ds[0]}`)}, ${m(`D_{y} = ${T.det(replaceCol(d.A, 1, d.B))} = ${Ds[1]}`)}, ${m(`D_{z} = ${T.det(replaceCol(d.A, 2, d.B))} = ${Ds[2]}`)}। ∴ ${m(`(x, y, z) = (${d.X.join(", ")})`)}। যাচাই: ${m(`${d.A[0].map((v, k) => `${T.paren(v)}(${d.X[k]})`).join(" + ")} = ${d.B[0]}`)}, যা প্রথম সমীকরণের ডানপক্ষের সমান।` };
    } },
  ],
});

// ---------------------------------------------------------------- 9. properties of determinants
families.push({
  id: "detprop", micro: "detprop", title: "নির্ণায়কের ধর্ম ও ব্যতিক্রমী ম্যাট্রিক্স",
  data(rng) {
    const [a, b, c] = rng.sample([-3, -2, -1, 1, 2, 3, 4, 5], 3);
    const s = rng.int(1, 6), step = rng.int(1, 4);
    const ap = M.make(3, 3, (i, j) => s + step * (3 * i + j));            // consecutive terms of an AP: value 0
    // W(lambda) = [[1, u, 2], [v, lambda, 1], [w, 1, 3]]: |W| is linear in lambda, with an integer root.
    const W = until(() => {
      const u = rng.intNot(-3, 4, [0]), v = rng.intNot(-3, 4, [0]), w = rng.intNot(-3, 4, [0]);
      const at = lam => M.det([[1, u, 2], [v, lam, 1], [w, 1, 3]]);
      const k = at(1) - at(0), c0 = at(0);
      return { u, v, w, k, c0, at };
    }, o => o.k !== 0 && o.c0 % o.k === 0 && Math.abs(o.c0 / o.k) <= 6 && o.c0 !== 0);
    const root = -W.c0 / W.k, lam = rng.intNot(-3, 5, [root]);
    return { a, b, c, V: [[1, 1, 1], [a, b, c], [a * a, b * b, c * c]], ap, W, root, lam, Wn: [[1, W.u, 2], [W.v, lam, 1], [W.w, 1, 3]], k: rng.int(2, 3) };
  },
  stem: d => `${m(`D_{1} = ${T.det(d.V)}`)}, ${m(`D_{2} = ${T.det(d.ap)}`)} এবং ${m(`W = \\begin{bmatrix} 1 & ${d.W.u} & 2 \\\\ ${d.W.v} & \\lambda & 1 \\\\ ${d.W.w} & 1 & 3 \\end{bmatrix}`)}।`,
  ka: [
    { angle: "বিস্তার না করে D₂ = 0", q: d => {
      const st = d.ap[0][1] - d.ap[0][0];
      return { text: `বিস্তার না করে দেখাও যে, ${m("D_{2} = 0")}।`, solution: `${m("c_{2}' = c_{2} - c_{1}")} এবং ${m("c_{3}' = c_{3} - c_{2}")} প্রয়োগ করে ${m(`D_{2} = ${T.det(d.ap.map(r => [r[0], st, st]))}`)}। দ্বিতীয় ও তৃতীয় কলাম অভিন্ন, সুতরাং ${m("D_{2} = 0")}।` };
    } },
    { angle: "D₁ এর একটি অনুরাশি ও সহগুণক", q: d => ({ text: `${m("D_{1}")} এর (3, 2)-তম ভুক্তির অনুরাশি ও সহগুণক নির্ণয় কর।`, solution: `(3, 2)-তম অনুরাশি ${m(`= ${T.det(M.minorMatrix(d.V, 2, 1))} = ${M.minor(d.V, 2, 1)}`)}; সহগুণক ${m(`= (-1)^{3+2}(${M.minor(d.V, 2, 1)}) = ${M.cofactor(d.V, 2, 1)}`)}।` }) },
  ],
  kha: [
    { angle: "ধর্ম ব্যবহার করে D₁ এর মান", q: d => {
      const { a, b, c } = d;
      return { text: `নির্ণায়কের ধর্ম ব্যবহার করে ${m("D_{1}")} এর মান নির্ণয় কর।`, solution: `${m("c_{2}' = c_{2} - c_{1}")}, ${m("c_{3}' = c_{3} - c_{1}")} প্রয়োগ করে ${m(`D_{1} = ${T.det([[1, 0, 0], [a, b - a, c - a], [a * a, b * b - a * a, c * c - a * a]])}`)}। প্রথম সারি বরাবর বিস্তার করে ${m(`D_{1} = ${T.det([[b - a, c - a], [b * b - a * a, c * c - a * a]])} = ${T.paren(b - a)} \\cdot ${T.paren(c * c - a * a)} - ${T.paren(c - a)} \\cdot ${T.paren(b * b - a * a)} = ${M.det(d.V)}`)}।` };
    } },
    { angle: "λ এর কোন মানে W ব্যতিক্রমী", q: d => ({ text: `${m("\\lambda")} এর কোন মানের জন্য ${m("W")} একটি ব্যতিক্রমী ম্যাট্রিক্স হবে?`, solution: `প্রথম সারি বরাবর বিস্তার করে ${m(`|W| = 1(3\\lambda - 1) - ${T.paren(d.W.u)}(${3 * d.W.v} - ${T.paren(d.W.w)}) + 2(${d.W.v} - ${T.paren(d.W.w)}\\lambda) = ${T.linear([d.W.k, d.W.c0], ["\\lambda", ""])}`)}। ব্যতিক্রমী হলে ${m("|W| = 0")}, অর্থাৎ ${m(`${T.linear([d.W.k, d.W.c0], ["\\lambda", ""])} = 0`)}, ∴ ${m(`\\lambda = ${d.root}`)}।` }) },
  ],
  ga: [
    { angle: "সাধারণ সূত্র প্রমাণ করে D₁ যাচাই", q: d => {
      const { a, b, c } = d;
      return { text: `প্রমাণ কর যে, ${m("\\begin{vmatrix} 1 & 1 & 1 \\\\ x & y & z \\\\ x^{2} & y^{2} & z^{2} \\end{vmatrix} = (x - y)(y - z)(z - x)")} এবং এর সাহায্যে ${m("D_{1}")} এর মান নির্ণয় কর।`, solution: `${m("c_{1}' = c_{1} - c_{2}")}, ${m("c_{2}' = c_{2} - c_{3}")} প্রয়োগ করে নির্ণায়ক ${m("= \\begin{vmatrix} 0 & 0 & 1 \\\\ x - y & y - z & z \\\\ x^{2} - y^{2} & y^{2} - z^{2} & z^{2} \\end{vmatrix}")}। প্রথম ও দ্বিতীয় কলাম হতে ${m("(x - y)")} ও ${m("(y - z)")} সাধারণ নিয়ে ${m("= (x - y)(y - z)\\begin{vmatrix} 0 & 0 & 1 \\\\ 1 & 1 & z \\\\ x + y & y + z & z^{2} \\end{vmatrix} = (x - y)(y - z)\\{(y + z) - (x + y)\\} = (x - y)(y - z)(z - x)")} (প্রমাণিত)। ${m(`x = ${a}, y = ${b}, z = ${c}`)} বসিয়ে ${m(`D_{1} = (${T.num(a - b)})(${T.num(b - c)})(${T.num(c - a)}) = ${M.det(d.V)}`)}।` };
    } },
    { angle: "|kW| ও |W⁻¹| নির্ণয়", q: d => {
      const det = M.det(d.Wn);
      return { text: `${m(`\\lambda = ${d.lam}`)} হলে ${m("|W|")}, ${m(`|${d.k}W|`)} এবং ${m("|W^{-1}|")} নির্ণয় কর।`, solution: `${m(`\\lambda = ${d.lam}`)} বসিয়ে ${m(`|W| = ${T.det(d.Wn)} = ${T.det3Work(d.Wn)} = ${det}`)}। ${m("W")} এর ক্রম 3, তাই ${m(`|${d.k}W| = ${d.k}^{3}|W| = ${d.k ** 3} \\times ${T.paren(det)} = ${d.k ** 3 * det}`)}। ${m(`|W^{-1}| = \\frac{1}{|W|} = ${F(1, det).tex()}`)}।` };
    } },
  ],
});

// ============================================================================================ MCQs
const mcqs = [];
const mcq = (id, micro, title, make) => mcqs.push({ id, micro, title, make });
const pm = v => m(T.num(v));

mcq("m-order", "product", "গুণফলের ক্রম", rng => {
  const [p, q, r] = until(() => [rng.int(1, 3), rng.int(1, 3), rng.int(1, 3)], v => new Set(v).size >= 2 && v[0] !== v[2]);
  const o = (a, b) => m(`${a} \\times ${b}`);
  return { text: `${m("A")} এর ক্রম ${o(p, q)} এবং ${m("B")} এর ক্রম ${o(q, r)} হলে ${m("AB")} এর ক্রম কত?`, correct: o(p, r), wrong: [o(r, p), o(q, q), o(p === q ? r : p, q === r ? p : q) === o(p, r) ? o(q, p) : o(p === q ? r : p, q === r ? p : q)].map((w, i, arr) => w), solution: `${m("A_{m \\times n}")} ও ${m("B_{n \\times r}")} হলে ${m("AB")} এর ক্রম ${m("m \\times r")}; এখানে ${o(p, r)}।` };
});
mcq("m-det2", "det", "2×2 নির্ণায়কের মান", rng => {
  const A = until(() => M.random(rng, 2, 2, -5, 6), X => !X.flat().includes(0) && X[0][0] * X[1][1] !== 0 && X[0][1] * X[1][0] !== 0 && M.det(X) !== X[0][0] * X[1][1] + X[0][1] * X[1][0]);
  const d = M.det(A);
  return { text: `${m(T.det(A))} এর মান কত?`, correct: pm(d), wrong: [pm(A[0][0] * A[1][1] + A[0][1] * A[1][0]), pm(-d), pm(A[0][0] * A[1][0] - A[0][1] * A[1][1])], solution: `${m(`${T.det2Work(A)} = ${d}`)}।` };
});
mcq("m-singular", "inverse", "ব্যতিক্রমী হওয়ার শর্ত", rng => {
  const [b, c, d] = until(() => [rng.intNot(-6, 6, [0]), rng.intNot(-6, 6, [0]), rng.intNot(-4, 4, [0])], v => (v[0] * v[1]) % v[2] === 0 && Math.abs(v[0] * v[1] / v[2]) <= 12);
  const k = b * c / d;
  return { text: `${m(`\\begin{bmatrix} k & ${b} \\\\ ${c} & ${d} \\end{bmatrix}`)} একটি ব্যতিক্রমী ম্যাট্রিক্স হলে ${m("k")} এর মান কত?`, correct: pm(k), wrong: [pm(-k), pm(F(d, 1).mul(F(1, 1)).n === k ? k + 1 : d), pm(b * c)].map((w, i) => w), solution: `ব্যতিক্রমী হলে নির্ণায়ক শূন্য: ${m(`${d}k - ${T.paren(b)} \\cdot ${T.paren(c)} = 0`)}, ∴ ${m(`k = ${k}`)}।` };
});
mcq("m-trace", "ops", "ট্রেস", rng => {
  const A = M.random(rng, 3, 3, -5, 6), k = rng.int(2, 4);
  const t = M.trace(A);
  return { text: `${eqMat("A", A)} হলে ${m(`${k}A`)} এর ট্রেস কত?`, correct: pm(k * t), wrong: [pm(t), pm(k * (A[0][2] + A[1][1] + A[2][0])), pm(k * t + k)], solution: `${m("A")} এর ট্রেস ${m(`= ${A.map((r, i) => T.paren(r[i])).join(" + ")} = ${t}`)}; ${m(`${k}A`)} এর ট্রেস ${m(`= ${k} \\times ${T.paren(t)} = ${k * t}`)}।` };
});
mcq("m-cofactor", "det", "সহগুণক নির্ণয়", rng => {
  const A = M.random(rng, 3, 3, -3, 5), [i, j] = rng.pick([[0, 1], [1, 0], [1, 2], [2, 1]]);
  const mi = M.minor(A, i, j);
  return { text: `${eqMat("A", A)} হলে ${m("A")} এর (${i + 1}, ${j + 1})-তম সহগুণক কত?`, correct: pm(-mi), wrong: [pm(mi), pm(-M.minor(A, j, i)), pm(A[i][j])], solution: `অনুরাশি ${m(`= ${T.det(M.minorMatrix(A, i, j))} = ${mi}`)}; সহগুণক ${m(`= (-1)^{${i + 1}+${j + 1}}(${mi}) = ${-mi}`)}।` };
});
mcq("m-inv2", "inverse", "2×2 ম্যাট্রিক্সের বিপরীত", rng => {
  const A = until(() => M.random(rng, 2, 2, -4, 5), X => Math.abs(M.det(X)) === 1 && !X.flat().includes(0) && X[0][0] !== X[1][1]);
  const inv = M.map(M.adj(A), v => v / M.det(A));
  return { text: `${eqMat("A", A)} হলে ${m("A^{-1}")} কোনটি?`, correct: m(T.mat(inv)), wrong: [m(T.mat(M.scale(-1, inv))), m(T.mat([[A[1][1], A[0][1]], [A[1][0], A[0][0]]])), m(T.mat(M.T(A)))], solution: `${m(`|A| = ${M.det(A)}`)}; ${m(`A^{-1} = \\frac{1}{|A|}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix} = ${T.mat(inv)}`)}।` };
});
mcq("m-kdet", "detprop", "|kA| এর মান", rng => {
  const d = rng.intNot(-6, 6, [0, 1, -1]), k = rng.int(2, 3);
  return { text: `${m("A")} একটি ${m("3 \\times 3")} ক্রমের ম্যাট্রিক্স এবং ${m(`|A| = ${d}`)} হলে ${m(`|${k}A|`)} এর মান কত?`, correct: pm(k ** 3 * d), wrong: [pm(k * d), pm(k * k * d), pm(3 * k * d)], solution: `${m("n")} ক্রমের ম্যাট্রিক্সের জন্য ${m("|kA| = k^{n}|A|")}; ${m(`|${k}A| = ${k}^{3} \\times ${T.paren(d)} = ${k ** 3 * d}`)}।` };
});
mcq("m-adjdet", "inverse", "|adj A| এর মান", rng => {
  const d = rng.intNot(-7, 7, [0, 1, -1, 2, -2]);
  return { text: `${m("A")} একটি ${m("3 \\times 3")} ক্রমের ম্যাট্রিক্স এবং ${m(`|A| = ${d}`)} হলে ${m("|\\text{adj}\\,A|")} এর মান কত?`, correct: pm(d * d), wrong: [pm(d), pm(d * d * d), pm(2 * d)], solution: `${m("|\\text{adj}\\,A| = |A|^{n-1}")}; ${m(`n = 3`)} বলে ${m(`|\\text{adj}\\,A| = ${T.paren(d)}^{2} = ${d * d}`)}।` };
});
mcq("m-equal", "types", "সমতা হতে অজানা মান", rng => {
  const x = rng.intNot(-5, 6, [0]), y = rng.intNot(-5, 6, [0, x, -x]);
  return { text: `${m(`\\begin{bmatrix} x + y & 3 \\\\ 1 & x - y \\end{bmatrix} = \\begin{bmatrix} ${x + y} & 3 \\\\ 1 & ${x - y} \\end{bmatrix}`)} হলে ${m("(x, y)")} = ?`, correct: m(`(${x}, ${y})`), wrong: [m(`(${y}, ${x})`), m(`(${x + y}, ${x - y})`), m(`(${x}, ${-y})`)], solution: `${m(`x + y = ${x + y}`)}, ${m(`x - y = ${x - y}`)}; সমাধান করে ${m(`x = ${x}, y = ${y}`)}।` };
});
mcq("m-cramer2", "system", "দুই চলকে ক্রেমারের নিয়ম", rng => {
  const o = until(() => { const A = M.random(rng, 2, 2, -4, 5), X = [rng.intNot(-4, 5, [0]), rng.intNot(-4, 5, [0])]; return { A, X, B: A.map(r => r[0] * X[0] + r[1] * X[1]), D: M.det(A) }; }, v => v.D !== 0 && !v.A.flat().includes(0) && v.X[0] !== v.X[1] && v.B.every(b => b !== 0));
  const Dx = M.det([[o.B[0], o.A[0][1]], [o.B[1], o.A[1][1]]]);
  return { text: `${m(`${T.linear(o.A[0], ["x", "y"])} = ${o.B[0]}`)} এবং ${m(`${T.linear(o.A[1], ["x", "y"])} = ${o.B[1]}`)} সমীকরণ জোটে ক্রেমারের নিয়ম অনুসারে ${m("D_{x}")} এর মান কত?`, correct: pm(Dx), wrong: [pm(o.D), pm(M.det([[o.A[0][0], o.B[0]], [o.A[1][0], o.B[1]]])), pm(-Dx)].map(w => w), solution: `${m(`D_{x} = ${T.det([[o.B[0], o.A[0][1]], [o.B[1], o.A[1][1]]])} = ${Dx}`)} (${m("x")} এর সহগের কলামের স্থলে ধ্রুবক পদ বসিয়ে)।` };
});
mcq("m-skew", "special", "বিপ্রতিসম ম্যাট্রিক্সের অজানা ভুক্তি", rng => {
  const [a, b, c] = [rng.intNot(-6, 7, [0]), rng.intNot(-6, 7, [0]), rng.intNot(-6, 7, [0])];
  return { text: `${m(`\\begin{bmatrix} 0 & ${a} & x \\\\ ${-a} & 0 & ${b} \\\\ ${c} & y & 0 \\end{bmatrix}`)} একটি বিপ্রতিসম ম্যাট্রিক্স হলে ${m("x + y")} এর মান কত?`, correct: pm(-c - b), wrong: [pm(c + b), pm(c - b), pm(b - c)], solution: `বিপ্রতিসম ম্যাট্রিক্সে ${m("a_{ij} = -a_{ji}")}; ${m(`x = ${-c}`)}, ${m(`y = ${-b}`)}, ∴ ${m(`x + y = ${-c - b}`)}।` };
});
mcq("m-tri", "det", "ত্রিভুজাকার ম্যাট্রিক্সের নির্ণায়ক", rng => {
  const dg = [rng.intNot(-4, 5, [0, 1]), rng.intNot(-4, 5, [0, 1]), rng.intNot(-4, 5, [0, 1])];
  const A = M.make(3, 3, (i, j) => (i === j ? dg[i] : i < j ? rng.intNot(-5, 6, [0]) : 0));
  const d = dg[0] * dg[1] * dg[2];
  return { text: `${m(T.det(A))} এর মান কত?`, correct: pm(d), wrong: [pm(dg[0] + dg[1] + dg[2]), pm(-d), pm(0)], solution: `ঊর্ধ্ব ত্রিভুজাকার ম্যাট্রিক্সের নির্ণায়ক প্রধান কর্ণের ভুক্তিগুলোর গুণফল: ${m(`${dg.map(T.paren).join(" \\times ")} = ${d}`)}।` };
});
mcq("m-invdet", "inverse", "|A⁻¹| এর মান", rng => {
  const A = until(() => M.random(rng, 2, 2, -4, 5), X => Math.abs(M.det(X)) >= 2 && Math.abs(M.det(X)) <= 12 && !X.flat().includes(0));
  const d = M.det(A);
  return { text: `${eqMat("A", A)} হলে ${m("|A^{-1}|")} এর মান কত?`, correct: m(F(1, d).tex()), wrong: [pm(d), m(F(-1, d).tex()), pm(-d)], solution: `${m(`|A| = ${T.det2Work(A)} = ${d}`)}; ${m(`|A^{-1}| = \\frac{1}{|A|} = ${F(1, d).tex()}`)}।` };
});
mcq("m-sq-entry", "power", "A² এর একটি ভুক্তি", rng => {
  const A = until(() => M.random(rng, 2, 2, -4, 5), X => !X.flat().includes(0)), A2 = M.mul(A, A), [i, j] = rng.pick([[0, 0], [0, 1], [1, 0], [1, 1]]);
  return { text: `${eqMat("A", A)} হলে ${m("A^{2}")} এর (${i + 1}, ${j + 1})-তম ভুক্তি কত?`, correct: pm(A2[i][j]), wrong: [pm(A[i][j] * A[i][j]), pm(A2[j][i] === A2[i][j] ? A2[i][j] + 1 : A2[j][i]), pm(2 * A[i][j])], solution: `${m(`A^{2} = ${T.mat(A2)}`)}; (${i + 1}, ${j + 1})-তম ভুক্তি ${m(`= ${T.paren(A[i][0])} \\cdot ${T.paren(A[0][j])} + ${T.paren(A[i][1])} \\cdot ${T.paren(A[1][j])} = ${A2[i][j]}`)}।` };
});
mcq("m-entries", "types", "ভুক্তি সংখ্যা হতে সম্ভাব্য ক্রম", rng => {
  const n = rng.pick([6, 8, 10, 12, 15, 18]);
  const count = k => { let c = 0; for (let i = 1; i <= k; i++) if (k % i === 0) c++; return c; };
  const c = count(n);
  return { text: `একটি ম্যাট্রিক্সের মোট ভুক্তি সংখ্যা ${n} হলে ম্যাট্রিক্সটির সম্ভাব্য ক্রম কয়টি?`, correct: `${c}টি`, wrong: [`${c / 2}টি`, `${c + 2}টি`, `${n}টি`], solution: `${m("m \\times n")} ক্রমের ম্যাট্রিক্সে ভুক্তি সংখ্যা ${m("mn")}। ${m(`mn = ${n}`)} এর জন্য ${m("(m, n)")} এর ক্রমজোড় ${c}টি (${n} এর উৎপাদক সংখ্যা)।` };
});

export default {
  id: "HSC_MATH1_CH1",
  curriculum: "HSC",
  subject: "HSC_MATH1",
  chapter: "অধ্যায় ১: ম্যাট্রিক্স ও নির্ণায়ক (Matrices & Determinants)",
  name: "উচ্চতর গণিত ১ম পত্র · অধ্যায় ১: ম্যাট্রিক্স ও নির্ণায়ক",
  micro: [
    { id: "types", name: "ম্যাট্রিক্সের প্রকারভেদ ও সমতা" },
    { id: "ops", name: "যোগ, বিয়োগ, স্কেলার গুণিতক ও ট্রান্সপোজ" },
    { id: "product", name: "ম্যাট্রিক্সের গুণন" },
    { id: "power", name: "ম্যাট্রিক্সের ঘাত ও বহুপদী" },
    { id: "special", name: "সমঘাতি, অভেদঘাতি, শূন্যঘাতি, প্রতিসম ও বিপ্রতিসম ম্যাট্রিক্স" },
    { id: "det", name: "নির্ণায়কের মান, অনুরাশি ও সহগুণক" },
    { id: "detprop", name: "নির্ণায়কের ধর্মাবলি" },
    { id: "inverse", name: "ব্যতিক্রমী ম্যাট্রিক্স ও বিপরীত ম্যাট্রিক্স" },
    { id: "system", name: "একঘাত সমীকরণ জোট (ক্রেমারের নিয়ম ও বিপরীত ম্যাট্রিক্স)" },
  ],
  families,
  mcqs,
};
