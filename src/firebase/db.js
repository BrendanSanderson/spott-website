import { db } from './firebase';
require("firebase/firestore");
// User API

export const doCreateUser = (id, username, email) => {
  console.log(1)
  db.collection("users").add({
    username,
    email
  })
}

export const onceGetUsers = () =>
  db.ref('businesses').once('value');
