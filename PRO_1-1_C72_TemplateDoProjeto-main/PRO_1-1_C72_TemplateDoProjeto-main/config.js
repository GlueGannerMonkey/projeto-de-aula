import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAD-WP1sDAC6MWchtYzEZtt3rB4p_JDKiY",
  authDomain: "fire-store-410b1.firebaseapp.com",
  projectId: "fire-store-410b1",
  storageBucket: "fire-store-410b1.appspot.com",
  messagingSenderId: "933737095282",
  appId: "1:933737095282:web:e114030038a70e0c5ae2eb"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
