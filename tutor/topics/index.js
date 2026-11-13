// Topic registry and question assembly for the topic builder.
//
// A topic file describes one chapter. It holds:
//   families: creative-question (CQ) families. Each makes its own data (the numbers), a stem, and several
//             alternative "angles" for each of the three parts. Picking different angles gives a different
//             question on the same data; a new seed gives the same question with new numbers.
//   mcqs:     multiple-choice makers, each returning the right answer and three wrong ones that come from
//             the usual mistakes.
// Everything is generated from a seed, so a question can be rebuilt (or re-rolled) from its `gen` record.
import { makeRng, bn } from '../engine.js';
import hscMath1Ch1 from './hsc-math1-ch1.js';

export const TOPICS = [hscMath1Ch1];
export const findTopic = id => TOPICS.find(t => t.id === id) || null;

const PART_KEYS = ["ka", "kha", "ga"];
const PART_LABELS = ["ক", "খ", "গ"];
const PART_MARKS = [2, 4, 4];           // HSC Higher Math creative question: 2 + 4 + 4
const MCQ_LABELS = ["(ক)", "(খ)", "(গ)", "(ঘ)"];

export const newSeed = () => (Math.floor(Math.random() * 0x7fffffff) + 1);
export const microName = (topic, id) => (topic.micro.find(m => m.id === id) || {}).name || "";

function base(topic, microId, title) {
  return { curriculum: topic.curriculum, subject: topic.subject, chapter: topic.chapter, microTopic: microName(topic, microId), highYield: false, source: "QForge · " + title };
}

// pick = [i, j, k]: which angle to use for ক, খ, গ. Missing or out-of-range entries are chosen from the seed.
export function buildCQ(topic, family, seed, pick = []) {
  const rng = makeRng(seed);
  const d = family.data(rng);
  const chosen = PART_KEYS.map((k, n) => {
    const fallback = rng.int(0, family[k].length - 1);   // always drawn, so the data never depends on `pick`
    return Number.isInteger(pick[n]) && pick[n] >= 0 && pick[n] < family[k].length ? pick[n] : fallback;
  });
  // When the angles were not chosen by hand, steer away from pairs that would ask the same work twice.
  if (!Number.isInteger(pick[2]) && (family.avoid || []).some(([j, k]) => j === chosen[1] && k === chosen[2])) {
    const free = family.ga.map((_, k) => k).filter(k => !(family.avoid || []).some(([j, kk]) => j === chosen[1] && kk === k));
    if (free.length) chosen[2] = free[seed % free.length];
  }
  const parts = PART_KEYS.map((k, n) => family[k][chosen[n]].q(d));
  return {
    ...base(topic, family.micro, family.title),
    type: "CQ",
    stem: family.stem(d),
    subparts: parts.map((p, n) => ({ label: PART_LABELS[n], text: p.text, marks: PART_MARKS[n] })),
    options: [],
    marks: PART_MARKS.reduce((a, b) => a + b, 0),
    solution: parts.map((p, n) => `${PART_LABELS[n]} [${bn(PART_MARKS[n])}]: ${p.solution}`).join("\n"),
    gen: { t: topic.id, f: family.id, s: seed, p: chosen },
  };
}

export function buildMCQ(topic, item, seed) {
  for (let bump = 0; bump < 40; bump++) {
    const rng = makeRng(seed + bump * 7919);
    const m = item.make(rng);
    const all = [m.correct, ...m.wrong];
    if (m.wrong.length !== 3 || new Set(all).size !== 4) continue;   // a wrong answer collided with the right one: redraw
    const order = rng.shuffle([0, 1, 2, 3]);
    const at = order.indexOf(0);
    return {
      ...base(topic, item.micro, item.title),
      type: "MCQ",
      stem: m.text,
      subparts: [],
      options: order.map((o, n) => `${MCQ_LABELS[n]} ${all[o]}`),
      marks: 1,
      solution: `সঠিক উত্তর: ${MCQ_LABELS[at]} ${m.correct}। ব্যাখ্যা: ${m.solution}`,
      gen: { t: topic.id, f: item.id, s: seed + bump * 7919 },
    };
  }
  throw new Error("buildMCQ: could not make four distinct options for " + item.id);
}

// A stored `gen` record is only trusted after this check (it may come from an imported file).
export function validGen(g) {
  if (!g || typeof g !== "object" || typeof g.t !== "string" || typeof g.f !== "string" || !Number.isInteger(g.s) || g.s < 1) return null;
  const topic = findTopic(g.t);
  if (!topic) return null;
  const family = topic.families.find(f => f.id === g.f), item = topic.mcqs.find(m => m.id === g.f);
  if (!family && !item) return null;
  const out = { t: g.t, f: g.f, s: g.s };
  if (family) out.p = Array.isArray(g.p) ? g.p.slice(0, 3).map(v => (Number.isInteger(v) ? v : -1)) : [];
  return out;
}

// Rebuild a question from its record; `fresh` gives the same question with new numbers.
export function fromGen(g, fresh = false) {
  const v = validGen(g);
  if (!v) return null;
  const topic = findTopic(v.t), seed = fresh ? newSeed() : v.s;
  const family = topic.families.find(f => f.id === v.f);
  return family ? buildCQ(topic, family, seed, v.p) : buildMCQ(topic, topic.mcqs.find(m => m.id === v.f), seed);
}

// The angle titles of a family, for the pickers: { ka: [...], kha: [...], ga: [...] }.
export const anglesOf = family => Object.fromEntries(PART_KEYS.map(k => [k, family[k].map(a => a.angle)]));
