import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXU1mYDusQ-0ukGZjzwNgw9newhMLxUyE",
  authDomain: "budget-6b353.firebaseapp.com",
  databaseURL: "https://budget-6b353-default-rtdb.firebaseio.com",
  projectId: "budget-6b353",
  storageBucket: "budget-6b353.firebasestorage.app",
  messagingSenderId: "862913696653",
  appId: "1:862913696653:web:6fd5ea779f6026c58063c4",
  measurementId: "G-8GXH6R3BVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
