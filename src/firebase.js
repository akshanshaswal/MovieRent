// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtOFwBGQ2RmNuUqaWd1JGmS_uDW-qAKCs",
  authDomain: "instagram-clone-9693a.firebaseapp.com",
  projectId: "instagram-clone-9693a",
  storageBucket: "instagram-clone-9693a.appspot.com",
  messagingSenderId: "39461435430",
  appId: "1:39461435430:web:e7067434c39b7fb6b68ee7",
  measurementId: "G-L7QJP42RWX"
};

// Initialize Firebase
//const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
const firestore=firebase.firestore();
export const database = {
  users: firestore.collections('users')
}