// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdUeEKSCbeXF3vLtdFtxWf0DeoRHcumKI",
  authDomain: "generalstore-a5aac.firebaseapp.com",
  projectId: "generalstore-a5aac",
  storageBucket: "generalstore-a5aac.appspot.com",
  messagingSenderId: "588703181731",
  appId: "1:588703181731:web:141d8749af811fdc2bc816"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);