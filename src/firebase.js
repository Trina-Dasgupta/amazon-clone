import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRkoc2LzLrxpHq5Ny7jQ04Fq-YJ-Kepkg",
  authDomain: "clone-fe935.firebaseapp.com",
  projectId: "clone-fe935",
  storageBucket: "clone-fe935.appspot.com",
  messagingSenderId: "738479741585",
  appId: "1:738479741585:web:39603178900fee004a3d30"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };