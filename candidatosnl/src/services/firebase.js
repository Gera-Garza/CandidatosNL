import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyCZpCmTd9hlMYhZIJeD7sbgAaCkpKV0Z_w",
    authDomain: "candidatosnl-7199e.firebaseapp.com",
    projectId: "candidatosnl-7199e",
    storageBucket: "candidatosnl-7199e.appspot.com",
    messagingSenderId: "1029557888770",
    appId: "1:1029557888770:web:a17f08094f329f9bf9441b",
    measurementId: "G-7FW8V2EQHJ"
  };

    const firebaseApp=firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

  export default db