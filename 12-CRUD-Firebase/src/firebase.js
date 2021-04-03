import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const config = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx"
};

const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()