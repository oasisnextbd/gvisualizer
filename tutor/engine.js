// QForge topic engine: the small exact-arithmetic toolkit that topic files (tutor/topics/*.js) use to write
// questions with fresh numbers. Everything here is exact (integers and fractions), so a mark scheme can never
// carry a rounding slip. Maths is written as LaTeX between $...$ and typeset on the page by KaTeX.

// ---------------------------------------------------------------- random numbers (seeded, so a set can be rebuilt)
export function makeRng(seed) {
  let s = (seed >>> 0) || 1;
  const next = () => { s |= 0; s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const rng = {
    seed,
    next,
    int: (a, b) => a + Math.floor(next() * (b - a + 1)),
    // An integer in [a, b] that is not in `not`.
    intNot(a, b, not = [0]) { for (let i = 0; i < 200; i++) { const v = rng.int(a, b); if (!not.includes(v)) return v; } throw new Error("intNot: no value"); },
    pick: list => list[Math.floor(next() * list.length)],
    bool: (p = 0.5) => next() < p,
    shuffle(list) { const a = list.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(next() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
    sample: (list, n) => rng.shuffle(list).slice(0, n),
  };
  return rng;
}
// Keep drawing until `ok(value)` holds. Generators use this to reject awkward numbers instead of patching them.
export function until(make, ok, tries = 400) {
  for (let i = 0; i < tries; i++) { const v = make(); if (ok(v)) return v; }
  throw new Error("until: no acceptable value");
}

// ---------------------------------------------------------------- fractions
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
export class Frac {
  constructor(n, d = 1) {
    if (!Number.isInteger(n) || !Number.isInteger(d)) throw new Error("Frac needs integers");
    if (d === 0) throw new Error("Frac: zero denominator");
    if (d < 0) { n = -n; d = -d; }
    const g = gcd(n, d);
    this.n = n / g; this.d = d / g;
  }
  static of(v) { return v instanceof Frac ? v : new Frac(v); }
  add(o) { o = Frac.of(o); return new Frac(this.n * o.d + o.n * this.d, this.d * o.d); }
  sub(o) { o = Frac.of(o); return new Frac(this.n * o.d - o.n * this.d, this.d * o.d); }
  mul(o) { o = Frac.of(o); return new Frac(this.n * o.n, this.d * o.d); }
  div(o) { o = Frac.of(o); return new Frac(this.n * o.d, this.d * o.n); }
  neg() { return new Frac(-this.n, this.d); }
  eq(o) { o = Frac.of(o); return this.n === o.n && this.d === o.d; }
  get isInt() { return this.d === 1; }
  get isZero() { return this.n === 0; }
  valueOf() { return this.n / this.d; }
  tex() { return this.d === 1 ? String(this.n) : (this.n < 0 ? "-" : "") + `\\frac{${Math.abs(this.n)}}{${this.d}}`; }
  toString() { return this.d === 1 ? String(this.n) : `${this.n}/${this.d}`; }
}
export const F = (n, d = 1) => new Frac(n, d);

// ---------------------------------------------------------------- matrices (arrays of rows; entries are integers or Frac)
export const M = {
  rows: A => A.length,
  cols: A => A[0].length,
  order: A => `${A.length} \\times ${A[0].length}`,
  make: (r, c, fn) => Array.from({ length: r }, (_, i) => Array.from({ length: c }, (_, j) => fn(i, j))),
  identity: n => M.make(n, n, (i, j) => (i === j ? 1 : 0)),
  zero: (r, c) => M.make(r, c, () => 0),
  eq: (A, B) => A.length === B.length && A[0].length === B[0].length && A.every((r, i) => r.every((v, j) => Frac.of(v).eq(B[i][j]))),
  map: (A, fn) => A.map((r, i) => r.map((v, j) => fn(v, i, j))),
  add: (A, B) => M.map(A, (v, i, j) => v + B[i][j]),
  sub: (A, B) => M.map(A, (v, i, j) => v - B[i][j]),
  scale: (k, A) => M.map(A, v => k * v),
  T: A => M.make(A[0].length, A.length, (i, j) => A[j][i]),
  mul(A, B) {
    if (A[0].length !== B.length) throw new Error("mul: orders do not conform");
    return M.make(A.length, B[0].length, (i, j) => A[i].reduce((s, v, k) => s + v * B[k][j], 0));
  },
  pow(A, n) { let P = M.identity(A.length); for (let i = 0; i < n; i++) P = M.mul(P, A); return P; },
  trace: A => A.reduce((s, r, i) => s + r[i], 0),
  minorMatrix: (A, i, j) => A.filter((_, r) => r !== i).map(r => r.filter((_, c) => c !== j)),
  det(A) {
    const n = A.length;
    if (n !== A[0].length) throw new Error("det: not square");
    if (n === 1) return A[0][0];
    if (n === 2) return A[0][0] * A[1][1] - A[0][1] * A[1][0];
    return A[0].reduce((s, v, j) => s + (j % 2 ? -1 : 1) * v * M.det(M.minorMatrix(A, 0, j)), 0);
  },
  minor: (A, i, j) => M.det(M.minorMatrix(A, i, j)),
  cofactor: (A, i, j) => ((i + j) % 2 ? -1 : 1) * M.minor(A, i, j),
  cofactorMatrix: A => M.make(A.length, A.length, (i, j) => M.cofactor(A, i, j)),
  adj: A => (A.length === 1 ? [[1]] : M.T(M.cofactorMatrix(A))),
  // Inverse as { det, adj, inv } with exact fractions in inv.
  inverse(A) {
    const det = M.det(A);
    if (det === 0) throw new Error("inverse: singular");
    const adj = M.adj(A);
    return { det, adj, inv: M.map(adj, v => new Frac(v, det)) };
  },
  isSymmetric: A => M.eq(A, M.T(A)),
  isSkew: A => M.eq(M.T(A), M.scale(-1, A)),
  maxAbs: A => Math.max(...A.flat().map(v => Math.abs(Number(v)))),
  // A random integer matrix with entries in [lo, hi].
  random: (rng, r, c, lo = -4, hi = 5) => M.make(r, c, () => rng.int(lo, hi)),
};

// ---------------------------------------------------------------- LaTeX writers
const texNum = v => (v instanceof Frac ? v.tex() : String(v));
export const T = {
  num: texNum,
  // A number placed after an operator: "+ 3" / "- 3".
  signed: v => { const f = Frac.of(v); return (f.n < 0 ? "- " : "+ ") + (f.n < 0 ? f.neg() : f).tex(); },
  // "(-3)" for negatives so products read correctly.
  paren: v => { const f = Frac.of(v); return f.n < 0 ? `(${f.tex()})` : f.tex(); },
  mat: (A, env = "bmatrix") => `\\begin{${env}} ${A.map(r => r.map(texNum).join(" & ")).join(" \\\\ ")} \\end{${env}}`,
  det: A => T.mat(A, "vmatrix"),
  // Rows of already-written TeX cells (for symbolic matrices).
  cells: (rows, env = "bmatrix") => `\\begin{${env}} ${rows.map(r => r.join(" & ")).join(" \\\\ ")} \\end{${env}}`,
  // k·A written without a stray "1": coefficient k in front of a symbol.
  coef(k, sym, first = false) {
    const f = Frac.of(k);
    if (f.isZero) return "";
    const mag = f.n < 0 ? f.neg() : f;
    const body = (mag.eq(1) && sym ? "" : mag.tex()) + sym;
    return (f.n < 0 ? (first ? "-" : "- ") : (first ? "" : "+ ")) + body;
  },
  // A linear expression such as 2x - y + 3z from coefficients and symbols.
  linear(coefs, syms) {
    const parts = coefs.map((k, i) => [k, syms[i]]).filter(([k]) => !Frac.of(k).isZero);
    if (!parts.length) return "0";
    return parts.map(([k, s], i) => T.coef(k, s, i === 0)).join(" ");
  },
  // The 2x2 expansion "a·d − b·c" with brackets on negatives.
  det2Work: A => `${T.paren(A[0][0])} \\cdot ${T.paren(A[1][1])} - ${T.paren(A[0][1])} \\cdot ${T.paren(A[1][0])}`,
  // First-row expansion of a 3x3 determinant, written out.
  det3Work(A) {
    const m = j => M.minor(A, 0, j);
    return `${T.paren(A[0][0])}${T.det(M.minorMatrix(A, 0, 0))} - ${T.paren(A[0][1])}${T.det(M.minorMatrix(A, 0, 1))} + ${T.paren(A[0][2])}${T.det(M.minorMatrix(A, 0, 2))}`
      + ` = ${T.paren(A[0][0])}(${m(0)}) - ${T.paren(A[0][1])}(${m(1)}) + ${T.paren(A[0][2])}(${m(2)})`;
  },
  // 1/det · adj, with the scalar kept outside as tutors write it.
  invFromAdj: (det, adj) => (det === 1 ? T.mat(adj) : det === -1 ? T.mat(M.scale(-1, adj)) : `${det < 0 ? "-" : ""}\\frac{1}{${Math.abs(det)}}${T.mat(adj)}`),
};
export const tex = s => `$${s}$`;

// Bangla digits for marks in a mark scheme, e.g. [২].
const BN = "০১২৩৪৫৬৭৮৯";
export const bn = n => String(n).replace(/\d/g, d => BN[+d]);

// ---------------------------------------------------------------- typesetting on the page
function escapeHtml(str) {
  return String(str == null ? "" : str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
const mathCache = new Map();
// Text with $...$ maths -> safe HTML. Text outside the dollars is escaped; inside it is typeset by KaTeX
// (which never emits scripts or links: trust is off). Without KaTeX the TeX source is shown as it is.
export function renderMath(text) {
  const src = String(text == null ? "" : text);
  if (!src.includes("$")) return escapeHtml(src);
  let hit = mathCache.get(src);
  if (hit !== undefined) return hit;
  const katex = typeof window !== "undefined" ? window.katex : null;
  hit = src.split(/(\$[^$]+\$)/g).map(part => {
    if (part.length > 2 && part[0] === "$" && part[part.length - 1] === "$") {
      const body = part.slice(1, -1);
      if (!katex) return escapeHtml(body);
      try { return katex.renderToString(body, { throwOnError: true, displayMode: false, trust: false, strict: "ignore", maxExpand: 200, maxSize: 20 }); }
      catch (e) { return `<code class="tex-error" title="This formula could not be typeset">${escapeHtml(part)}</code>`; }
    }
    return escapeHtml(part);
  }).join("");
  if (mathCache.size > 4000) mathCache.clear();
  mathCache.set(src, hit);
  return hit;
}
