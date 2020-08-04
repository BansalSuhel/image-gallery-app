import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBHmVxGyCwvGqqRxf_n4uE2aZvi9mNOZw8",
    authDomain: "image-gallery-9cfce.firebaseapp.com",
    databaseURL: "https://image-gallery-9cfce.firebaseio.com",
    projectId: "image-gallery-9cfce",
    storageBucket: "image-gallery-9cfce.appspot.com",
    messagingSenderId: "815627499540",
    appId: "1:815627499540:web:dcdbde9f654606fdb78f01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();

  const projectFireStore = firebase.firestore();

  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFireStore, timeStamp};


