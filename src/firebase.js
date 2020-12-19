// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBmAuWvWiPKPJb5Lii-EhJKSUj4D6b4ZAk",
    authDomain: "tikk-a4ad8.firebaseapp.com",
    projectId: "tikk-a4ad8",
    storageBucket: "tikk-a4ad8.appspot.com",
    messagingSenderId: "800232304862",
    appId: "1:800232304862:web:c16b36c42d3d54f33a924f",
    measurementId: "G-YDFRJGQE5X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;