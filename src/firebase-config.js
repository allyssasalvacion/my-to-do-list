import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAs9NvJCqE9I1wR_N3Mzp6jXitrrAG7jwo",
  authDomain: "to-do-list-11e06.firebaseapp.com",
  projectId: "to-do-list-11e06",
  storageBucket: "to-do-list-11e06.appspot.com",
  messagingSenderId: "159442149847",
  appId: "1:159442149847:web:925a996e1daa9478482b92",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
