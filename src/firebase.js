import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYAF4gr2UesohPt3JQp-d4_ZRkl83jmjI",
  authDomain: "clone-b9cb0.firebaseapp.com",
  projectId: "clone-b9cb0",
  storageBucket: "clone-b9cb0.appspot.com",
  messagingSenderId: "952653574788",
  appId: "1:952653574788:web:e4912f036f3862f56208d1",
});
// Initialize Firebase
const auth = firebase.auth();

export {auth}