// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOCr3CzfCa8gUoRN-HXm_jbc6GGhO8wKk",
    authDomain: "instagram-7b2af.firebaseapp.com",
    projectId: "instagram-7b2af",
    storageBucket: "instagram-7b2af.appspot.com",
    messagingSenderId: "810774870587",
    appId: "1:810774870587:web:e34bd363e2aeae056d7a1e",
    measurementId: "G-3FK5VFL1NF"
  };

  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };