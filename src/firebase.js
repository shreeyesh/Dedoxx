// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from 'firebase/app';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRRYXi6uFWLTouhAb5-nZzEeRGRaSeEZQ",
    authDomain: "dedoxx-ec959.firebaseapp.com",
    projectId: "dedoxx-ec959",
    storageBucket: "dedoxx-ec959.appspot.com",
    messagingSenderId: "282617523393",
    appId: "1:282617523393:web:d998a381e996199fc0f840",
    measurementId: "G-85VPTV2ET1"
  };

  // const app = initializeApp(firebaseConfig);
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = getFirestore(app);
  const database = firebase.firestore();

  export default database;