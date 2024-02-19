// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwFanTFj2-L4hzTp3ZyQyxEV04138VeYI",
  authDomain: "oleaf-9f9d5.firebaseapp.com",
  projectId: "oleaf-9f9d5",
  storageBucket: "oleaf-9f9d5.appspot.com",
  messagingSenderId: "613919859510",
  appId: "1:613919859510:web:0a8d1d15a3f64da057c997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);