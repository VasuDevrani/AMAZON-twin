// import firebase from "firebase";

// const firebaseApp = firebase.initializeAp({
//   apiKey: "AIzaSyBxwNPpnCveCtlts7dxd1wS8h1TDuyxrE0",
//   authDomain: "twin-a0abe.firebaseapp.com",
//   projectId: "twin-a0abe",
//   storageBucket: "twin-a0abe.appspot.com",
//   messagingSenderId: "923706042759",
//   appId: "1:923706042759:web:c37cad7b5a68f8c0594b22",
//   measurementId: "G-GLT2Z8J1BR",
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxwNPpnCveCtlts7dxd1wS8h1TDuyxrE0",
  authDomain: "twin-a0abe.firebaseapp.com",
  projectId: "twin-a0abe",
  storageBucket: "twin-a0abe.appspot.com",
  messagingSenderId: "923706042759",
  appId: "1:923706042759:web:c37cad7b5a68f8c0594b22",
  measurementId: "G-GLT2Z8J1BR",
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
  
export { db, auth };
