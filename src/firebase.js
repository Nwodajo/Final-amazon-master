import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-tAvBr0nLnrxpUDL7DC-BJ5gmbbElUXk",
  authDomain: "clon-dbd14.firebaseapp.com",
  projectId: "clon-dbd14",
  storageBucket: "clon-dbd14.appspot.com",
  messagingSenderId: "465181167496",
  appId: "1:465181167496:web:5b756a4b99cc89afc4743d",
  measurementId: "G-Z9446DDH7S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

// export {auth,db}
