import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC42HN1-MxjVW2ucZ7pixFsSlCWHNu-V2U",
  authDomain: "techwars-portal.firebaseapp.com",
  projectId: "techwars-portal",
  storageBucket: "techwars-portal.appspot.com",
  messagingSenderId: "852197808724",
  appId: "1:852197808724:web:bef44c747d5df6c9966bc1",
  measurementId: "G-4Z57QNB4G9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);    


export { db };