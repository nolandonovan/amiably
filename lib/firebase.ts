import firebase from 'firebase/compat/app';
// commenting out analytics for now
// import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl5VkuyICvX2HY1yzoD1Kx_1d-5uFLQPI",
  authDomain: "amiably-io.firebaseapp.com",
  projectId: "amiably-io",
  storageBucket: "amiably-io.appspot.com",
  messagingSenderId: "1019369072078",
  appId: "1:1019369072078:web:50cf8961f50508cd61379f",
  measurementId: "G-42HM2HQZXX"
};

// Initialize Firebase
const app =  firebase.initializeApp(firebaseConfig);

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//Storage
export const firestore = firebase.firestore();
export const storage = firebase.storage();