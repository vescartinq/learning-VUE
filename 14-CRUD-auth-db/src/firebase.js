import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBNiQgM_52xr0DyFeNRauRvOHAs9l0Q_Og",
    authDomain: "auth-2020-2.firebaseapp.com",
    databaseURL: "https://auth-2020-2.firebaseio.com",
    projectId: "auth-2020-2",
    storageBucket: "auth-2020-2.appspot.com",
    messagingSenderId: "182909736795",
    appId: "1:182909736795:web:955a12ea6f2de75fdd2c7e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }