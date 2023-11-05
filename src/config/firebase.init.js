// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMQr0XjJa5v48NDuABUow4SmMNrg3j4kk",
  authDomain: "learnify-20090.firebaseapp.com",
  projectId: "learnify-20090",
  storageBucket: "learnify-20090.appspot.com",
  messagingSenderId: "857576822720",
  appId: "1:857576822720:web:8bb098225ca039750d5a25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;