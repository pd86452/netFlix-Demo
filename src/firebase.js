// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2UlKiHjLRpYBoYSFm-oNNpgAiEz7pVJw",
  authDomain: "netflixdemo123-4b7ad.firebaseapp.com",
  projectId: "netflixdemo123-4b7ad",
  storageBucket: "netflixdemo123-4b7ad.appspot.com",
  messagingSenderId: "1017983932254",
  appId: "1:1017983932254:web:bf4fcdf93443dcee9221cf",
  measurementId: "G-JF0F9MS40T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth,provider, storage };
export default db;