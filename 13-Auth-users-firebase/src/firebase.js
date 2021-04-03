import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// TODO añadir la config del proyecto
var firebaseConfig = {
  apiKey: 'xxx',
  authDomain: 'xxx',
  databaseURL: 'xxx',
  projectId: 'xxx',
  storageBucket: 'xxx',
  messagingSenderId: 'xxx',
  appId: 'xxx',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
