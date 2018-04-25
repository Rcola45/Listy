// src/firebase.js
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC3LNXk6RlYRmjlGXDD8N8LPQ-9t3Ecop4",
  authDomain: "listy-d2f11.firebaseapp.com",
  databaseURL: "https://listy-d2f11.firebaseio.com",
  projectId: "listy-d2f11",
  storageBucket: "",
  messagingSenderId: "530510626730"
};
firebase.initializeApp(config);

export default firebase;