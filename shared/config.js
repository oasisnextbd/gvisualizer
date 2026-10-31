// gvisualizer: Firebase settings shared by the site and the team dashboard.
// Paste the web-app config from the Firebase console here (see firebase/README.md).
// These values are not secret: firebase/firestore.rules protects the data.
// Set this to null to hide sign-in and comments everywhere (the site then works as before).
// For local tests add ?emu=1 to a page URL: it then uses the emulators and a demo project instead.
export const firebaseConfig = {
  apiKey: 'AIzaSyCyi7EeV170izkzQTHOwjlTAaLn5aiv5Ac',
  authDomain: 'gvisualizer-4cd05.firebaseapp.com',
  projectId: 'gvisualizer-4cd05',
  storageBucket: 'gvisualizer-4cd05.firebasestorage.app',
  messagingSenderId: '1066256793851',
  appId: '1:1066256793851:web:d260f282f52d1f0aa1b05e',
};

// The owner account: always has every permission, whatever the team list says.
export const OWNER = 'oasisnextbd@gmail.com';

// The founder's personal account: a built-in admin, always on the team (also fixed in firestore.rules).
export const FOUNDER = 'omayer120495@gmail.com';

// BUET student email domain and the default allowed ID ranges (the team can add more).
export const DOMAIN = 'che.buet.ac.bd';
export const DEFAULT_RANGES = [[2202001, 2202120], [2302001, 2302120]];

// Firebase JS SDK version loaded from the gstatic CDN.
export const SDK = 'https://www.gstatic.com/firebasejs/11.10.0';
