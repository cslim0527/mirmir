import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_Og2WWHAg6vywxBIRgT3GSbe6y-3D9qA",
  authDomain: "mirmir-95e62.firebaseapp.com",
  projectId: "mirmir-95e62",
  storageBucket: "mirmir-95e62.firebasestorage.app",
  messagingSenderId: "992394093172",
  appId: "1:992394093172:web:86adad8abff8b459d4a721",
  measurementId: "G-5MF0BZHWEL",
};

const firebase = initializeApp(firebaseConfig);
// getAnalytics(firebase);
const database = getFirestore(firebase);
export { firebase, database };
