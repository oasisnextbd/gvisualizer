// gvisualizer: Firebase start-up and the sign-in state shared by the site and the team dashboard.
// Nothing is loaded while shared/config.js has no firebaseConfig (unless ?emu=1 for local testing).
import { firebaseConfig, OWNER, FOUNDER, DOMAIN, SDK } from './config.js';

export { OWNER, FOUNDER, DOMAIN };
export const emulator = /[?&]emu=1(&|$)/.test(location.search);
export const enabled = !!firebaseConfig || emulator;

let ctx = null;
export function fb() {
  if (!enabled) return Promise.resolve(null);
  if (!ctx) ctx = (async () => {
    const [A0, A, F] = await Promise.all([
      import(SDK + '/firebase-app.js'), import(SDK + '/firebase-auth.js'), import(SDK + '/firebase-firestore.js')]);
    const cfg = emulator || !firebaseConfig ? { apiKey: 'demo-key', authDomain: 'localhost', projectId: 'demo-gvisualizer', appId: 'demo-app' } : firebaseConfig;
    // The team dashboard uses its own named app, so its Google session is stored separately and
    // signing in there does not replace a student's sign-in on the solution pages (and vice versa).
    const app = A0.initializeApp(cfg, /\/team\//.test(location.pathname) ? 'team' : '[DEFAULT]');
    const auth = A.getAuth(app);
    const db = F.getFirestore(app);
    if (emulator) {
      A.connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
      F.connectFirestoreEmulator(db, '127.0.0.1', 8080);
    }
    return { app, auth, db, A, F };
  })();
  return ctx;
}

// "2202025" or "2202025@che.buet.ac.bd" -> the email; any other email is kept as typed.
export function toEmail(s) {
  s = String(s || '').trim().toLowerCase();
  return /^\d{7}$/.test(s) ? s + '@' + DOMAIN : s;
}
export function idOf(email) {
  const m = String(email || '').toLowerCase().match(/^(\d{7})@(.+)$/);
  return m && m[2] === DOMAIN ? m[1] : '';
}
export function shortName(email) {
  return idOf(email) || String(email || '').split('@')[0];
}

// Everything the pages need to know about the person signed in.
// state = { user, email, verified, emailVerified, teamVerified, request, member, blocked, role, isOwner, isAdmin, isMod, canPost }
// verified: the email link was opened (emailVerified), or the team verified this exact account
// (members/{email}.verifiedUid == uid) after checking the student's ID card. Team roles need emailVerified.
async function describe(c, user) {
  const s = { user, email: '', verified: false, emailVerified: false, teamVerified: false, request: null, member: null, blocked: false, role: '', isOwner: false, isAdmin: false, isMod: false, canPost: false, dbError: '' };
  if (!user) return s;
  s.email = (user.email || '').toLowerCase();
  s.emailVerified = !!user.emailVerified;
  const { F, db } = c;
  try { const m = await F.getDoc(F.doc(db, 'members', s.email)); if (m.exists()) { s.member = m.data(); s.blocked = !!s.member.blocked; } } catch (e) { s.dbError = e.code || 'error'; }
  s.teamVerified = !s.emailVerified && !!s.member && s.member.verifiedUid === user.uid;
  s.verified = s.emailVerified || s.teamVerified;
  if (!s.verified) {
    try { const r = await F.getDoc(F.doc(db, 'verifyRequests', user.uid)); if (r.exists()) s.request = r.data(); } catch (e) { /* rules not published yet */ }
    if (s.dbError === 'permission-denied') s.dbError = '';
    return s;
  }
  if (!s.emailVerified) { s.canPost = !s.dbError && !!s.member && !s.blocked; return s; }
  s.isOwner = s.email === OWNER;
  try { const t = await F.getDoc(F.doc(db, 'team', s.email)); if (t.exists()) s.role = t.data().role; } catch (e) { s.dbError = e.code || 'error'; }
  if (s.email === FOUNDER) s.role = 'admin';
  if (s.isOwner) s.role = 'owner';
  s.isAdmin = s.isOwner || s.role === 'admin';
  s.isMod = s.isAdmin || s.role === 'moderator';
  s.canPost = !s.dbError && (s.isMod || (!!s.member && !s.blocked));
  return s;
}

const listeners = new Set();
let current = null, started = false;
export function onUser(cb) {
  listeners.add(cb);
  if (current) cb(current);
  if (!started) {
    started = true;
    fb().then(c => {
      if (!c) return;
      c.A.onAuthStateChanged(c.auth, async user => { current = await describe(c, user); listeners.forEach(f => f(current)); });
    });
  }
  return () => listeners.delete(cb);
}
async function refresh() {
  const c = await fb();
  const u = c.auth.currentUser;
  if (u) { await u.reload(); await u.getIdToken(true); }
  current = await describe(c, c.auth.currentUser);
  listeners.forEach(f => f(current));
  return current;
}

const continueUrl = () => location.href.split('#')[0];
export async function signIn(id, password) {
  const c = await fb();
  await c.A.signInWithEmailAndPassword(c.auth, toEmail(id), password);
  return refresh();
}
export async function signUp(id, password) {
  const c = await fb();
  const cred = await c.A.createUserWithEmailAndPassword(c.auth, toEmail(id), password);
  await c.A.sendEmailVerification(cred.user, emulator ? undefined : { url: continueUrl() });
  return refresh();
}
export async function resendVerification() {
  const c = await fb();
  if (c.auth.currentUser) await c.A.sendEmailVerification(c.auth.currentUser, emulator ? undefined : { url: continueUrl() });
}
// "Email not arriving? Ask the team to verify me": the team checks the student's ID card and binds this account.
export async function requestTeamVerify(name) {
  const c = await fb();
  const u = c.auth.currentUser; if (!u) throw new Error('Sign in first.');
  const email = (u.email || '').toLowerCase();
  await c.F.setDoc(c.F.doc(c.db, 'verifyRequests', u.uid), { email, studentId: (idOf(email) || email.split('@')[0]).slice(0, 20),
    name: name ? String(name).trim().slice(0, 80) : null, accountCreated: (u.metadata && u.metadata.creationTime || '').slice(0, 40) || null, createdAt: c.F.serverTimestamp() });
  return refresh();
}
export async function resetPassword(id) {
  const c = await fb();
  await c.A.sendPasswordResetEmail(c.auth, toEmail(id));
}
export async function googleSignIn() {
  const c = await fb();
  const p = new c.A.GoogleAuthProvider();
  try { await c.A.signInWithPopup(c.auth, p); }
  catch (e) {
    if (e && (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment')) return c.A.signInWithRedirect(c.auth, p);
    throw e;
  }
  return refresh();
}
export async function signOut() {
  const c = await fb();
  await c.A.signOut(c.auth);
}
export { refresh as recheck };

// Friendly messages for the Firebase error codes students will meet.
export function niceError(e) {
  const code = (e && e.code) || '';
  const m = {
    'auth/invalid-credential': 'Wrong email/ID or password.',
    'auth/wrong-password': 'Wrong password.',
    'auth/user-not-found': 'No account for this email yet. Create one first.',
    'auth/email-already-in-use': 'An account already exists for this email. Sign in, or reset the password.',
    'auth/weak-password': 'Use at least 6 characters for the password.',
    'auth/invalid-email': 'That does not look like an email or a 7-digit student ID.',
    'auth/too-many-requests': 'Too many tries. Wait a few minutes and try again.',
    'auth/network-request-failed': 'No connection. Check your internet and try again.',
    'auth/popup-closed-by-user': 'Sign-in window closed.',
    'permission-denied': 'Not allowed. Your account may not be on the allowed list yet.'
  };
  return m[code] || (e && e.message) || String(e);
}
export const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export function when(ts) {
  const d = ts && ts.toDate ? ts.toDate() : ts instanceof Date ? ts : null;
  return d ? d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }) : '';
}
