import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC5eH2TSw_x7pBgONo5A3FLhaAy15BQUHk",
    authDomain: "ugotexpressdatabase-7406b.firebaseapp.com",
    databaseURL: "https://ugotexpressdatabase-7406b.firebaseio.com",
    projectId: "ugotexpressdatabase-7406b",
    storageBucket: "ugotexpressdatabase-7406b.appspot.com",
    messagingSenderId: "732923096233",
    appId: "1:732923096233:web:20f4edda66dbdba5048db8"
  };

 if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
const db = firebase.database();

export default db;