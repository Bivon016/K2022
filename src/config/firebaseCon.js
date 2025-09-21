import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpGzIuV2a0PcsVlPDfmHO9uZIwaAySJ3Y",
  authDomain: "k2022-7ce1e.firebaseapp.com",
  databaseURL: "https://k2022-7ce1e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "k2022-7ce1e",
  storageBucket: "k2022-7ce1e.firebasestorage.app",
  messagingSenderId: "246716820091",
  appId: "1:246716820091:web:bb32e98c5411dc637350de",
  measurementId: "G-FKHQH8K9B2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Make sure to import `getAnalytics` from 'firebase/analytics'
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();


export { app, db, auth, storage , googleProvider};
