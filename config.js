import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBg-zbg5kd4nHIMRn6Jn16rtulvZnJNRLc",
    authDomain: "e-ride-stage-4-7c395.firebaseapp.com",
    projectId: "e-ride-stage-4-7c395",
    storageBucket: "e-ride-stage-4-7c395.appspot.com",
    messagingSenderId: "126593091786",
    appId: "1:126593091786:web:67b6fee868245e4fb1cc33"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
