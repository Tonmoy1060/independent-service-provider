// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEx8mniISYu-0U6XTfRvXTP8IvDmrSVwY",
  authDomain: "independent-service-prov-55676.firebaseapp.com",
  projectId: "independent-service-prov-55676",
  storageBucket: "independent-service-prov-55676.appspot.com",
  messagingSenderId: "600729295238",
  appId: "1:600729295238:web:6fdd9bcc1cfd9448dcf407",
  measurementId: "G-Z8NXCH4KRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;