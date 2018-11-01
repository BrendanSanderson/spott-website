import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
require("firebase/firestore");
var config = {
  apiKey: "AIzaSyCMeHg3NjOWaC2K5P2UapcRS8ctk9UTWLc",
  authDomain: "spott-50a68.firebaseapp.com",
  databaseURL: "https://spott-50a68.firebaseio.com",
  projectId: "spott-50a68",
  storageBucket: "spott-50a68.appspot.com",
  messagingSenderId: "63628445287"
};
firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);
export {
  auth,
  db
};
