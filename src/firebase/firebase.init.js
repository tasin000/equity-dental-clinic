// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.apiKey,
  // authDomain: process.env.authDomain,
  // projectId: process.env.projectId,
  // storageBucket: process.env.storageBucket,
  // messagingSenderId: process.env.messagingSenderId,
  // appId: process.env.appId

  apiKey: "AIzaSyC4EEJKxvHZNU09VfrnvhhbmLic25hnDIU",
  authDomain: "equity-dental-clinic.firebaseapp.com",
  projectId: "equity-dental-clinic",
  storageBucket: "equity-dental-clinic.appspot.com",
  messagingSenderId: "754786624724",
  appId: "1:754786624724:web:88191e354e7973b4e4c741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;