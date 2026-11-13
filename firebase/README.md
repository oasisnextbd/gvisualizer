# gvisualizer: Firebase (sign-in, comments, team dashboard)

Firebase project: **gvisualizer-4cd05**, owned by **oasisnextbd@gmail.com**.
The web config is already in `shared/config.js`. The course content itself is still public
(served by GitHub Pages); Firebase only holds accounts, comments, photos, team notes and the team list.

- `firestore.rules`: who may read or change what (owner, built-in founder admin, admins, moderators, allowed students).
- `firebase.json`, `.firebaserc`, `firestore.indexes.json`: for the Firebase CLI (`firebase deploy --only firestore`) and the local emulators.

## Switching it on (once, in the Firebase console)

Open <https://console.firebase.google.com/project/gvisualizer-4cd05> signed in as oasisnextbd@gmail.com.

1. **Firestore**: *Build → Firestore Database*. (Already created in production mode, location asia-south1 / Mumbai.
   If you are creating it again: *Create database → Production mode → asia-south1*; the location cannot be changed later.)
2. **Rules**: *Firestore Database → Rules* → delete everything there, paste the whole of `firebase/firestore.rules` → **Publish**.
   Until this is done every request is refused: students see "Suggestions are being set up" and the team dashboard shows a reminder.
3. **Email/password sign-in** (students): *Build → Authentication → Get started → Sign-in method → Email/Password → Enable* (leave "Email link" off) → *Save*.
4. **Google sign-in** (team): same page → *Add new provider → Google → Enable*, support email oasisnextbd@gmail.com → *Save*.
5. **Allowed websites**: *Authentication → Settings → Authorized domains → Add domain* → `oasisnextbd.github.io`.
   (`localhost` is there by default.) Without this, Google sign-in and the verification-email return link fail on the live site.
6. **Email templates** (optional but recommended): *Authentication → Templates* → set the sender name to "gvisualizer" for
   *Email address verification* and *Password reset*. BUET mail is Outlook: the first emails may land in **Junk**;
   ask students to mark them "Not junk".

Then open <https://oasisnextbd.github.io/gvisualizer/team/>, sign in with Google as oasisnextbd@gmail.com
(or as omayer120495@gmail.com, the built-in admin) and:

- **Students → "Allow 2202001–2202120 and 2302001–2302120"** (one click, 240 accounts on the allowed list).
- **Team → Add person** for each moderator or admin (their own Gmail). Ask everyone to turn on 2-step verification.

## How students get in

On any solution page: **Sign in → Create account** with the student ID (e.g. 2202025, which means
2202025@che.buet.ac.bd) and a password → open the verification link in their BUET mailbox (outlook.office.com,
check Junk) → **I have verified**. Only verified emails on the allowed list can read approved comments or post.
Forgotten passwords: **Forgot password?** in the same box.

## When the verification email never arrives (BUET Outlook)

BUET's Microsoft 365 may silently drop mail from `noreply@gvisualizer-4cd05.firebaseapp.com`. Two fixes, use both:

**1. Send the emails through Gmail (better delivery).** Turn on 2-step verification for oasisnextbd@gmail.com,
create an app password at <https://myaccount.google.com/apppasswords>, then in the console:
*Authentication → Templates → SMTP settings → Enable* with

| Field | Value |
|---|---|
| Sender address | oasisnextbd@gmail.com |
| SMTP server host | smtp.gmail.com |
| Port | 587 |
| Username | oasisnextbd@gmail.com |
| Password | the 16-character app password |
| SMTP security mode | STARTTLS |

**2. Team verification (no email needed).** In the "Check your BUET email" box a student presses
**Ask the team to verify me** (this stores `verifyRequests/{their uid}`). A moderator or admin opens the
dashboard → **Students → Verification requests**, checks the student's ID card, asks when they created the
account (shown next to the request) and presses **Approve**. That binds `members/{email}.verifiedUid` to that one
account, so the student can post at once (they press *I have verified* or reload). **Decline** removes the request.
If the student says they did not create that account, someone else registered their email: decline, and an admin
blocks or removes that email (then delete the account under *Authentication → Users* so the student can register).
Team roles never come from team verification: team members still need Google sign-in or a verified email.

The rules changed for this, so **re-publish `firebase/firestore.rules`** (Firestore → Rules → paste → Publish).

## Tutor studio (`tutor/`)

A separate page for private tutors, with its own access list. See `tutor/README.md`.

1. **Re-publish `firebase/firestore.rules`** (Firestore → Rules → paste → Publish): it adds `tutors/{email}` and
   `tutorBank/{id}`. Until then the Tutors tab and the studio are refused.
2. Dashboard → **Tutors** (admins only) → **Add a tutor** with their email or 7-digit student ID.
   Being on the Students list gives no access to the studio; **Block** or **Remove** takes it away at once.
3. Same tab → **Upload and replace bank** with the question-bank JSON file. The file is never committed to this
   public repository; the bank lives only in Firestore, readable by tutors on the list and by admins.

Reads: opening the studio costs one read for the tutor entry plus one per bank part (a part holds about
600 KB of questions, so a few hundred questions are one or two reads).

## Free-plan limits (Spark)

- Firestore: 50,000 reads, 20,000 writes and 1 GiB stored per day/total; enough for a few hundred students.
- Photos are stored inside Firestore (resized to ≤ 1200 px JPEG, under 1 MiB each), because Firebase Storage needs the paid plan.
- Verification and password-reset emails have a daily sending quota; if many students sign up on the same day,
  some may need to press **Send again** the next day.

## Testing locally

From this folder, with the Firebase CLI (`npm i -g firebase-tools`) and Java installed:

```
firebase emulators:start --only firestore,auth --project demo-gvisualizer
```

Serve the repository (`python3 -m http.server 8765` from the repo root) and add `?emu=1` to any page URL,
e.g. `http://127.0.0.1:8765/team/?emu=1`. With `?emu=1` the site talks to the emulators and a demo project,
never to the real database.
