import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// import * as firebase from 'firebase';
//
// const config = {
//   apiKey: 'AIzaSyBsmWr0rmsZM_hxlKzL4rl-NKUVG0xjpmo',
//   authDomain: 'expensify-f2795.firebaseapp.com',
//   databaseURL: 'https://expensify-f2795.firebaseio.com',
//   projectId: 'expensify-f2795',
//   storageBucket: 'expensify-f2795.appspot.com',
//   messagingSenderId: '322087073321'
// };
//
// firebase.initializeApp(config);
//
// const database = firebase.database();
//
// export { firebase, database as default };
