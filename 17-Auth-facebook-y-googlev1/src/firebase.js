const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const config = {
  apiKey: "AIzaSyDnC6ekK8Da-dJ4SqBoEHziVNLMNMEkc-c",
  authDomain: "facey-e9500.firebaseapp.com",
  databaseURL: "https://facey-e9500.firebaseio.com",
  projectId: "facey-e9500",
  storageBucket: "facey-e9500.appspot.com",
  messagingSenderId: "846830431981"
};
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}