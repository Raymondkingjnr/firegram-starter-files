import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLupPG1CN-jLV37JrfRemQN4DF0nLuhnQ",
  authDomain: "photo-baf9a.firebaseapp.com",
  projectId: "photo-baf9a",
  storageBucket: "photo-baf9a.appspot.com",
  messagingSenderId: "657956066319",
  appId: "1:657956066319:web:0a75a49e15901d7fc77f7a",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timeStamp };
