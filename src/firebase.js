
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBx6JJCgriVJKrng4iM2SgrGTthQS3MSLg",
  authDomain: "k2022-eb080.firebaseapp.com",
  projectId: "k2022-eb080",
  storageBucket: "k2022-eb080.firebasestorage.app", 
  messagingSenderId: "764403851568",
  appId: "1:764403851568:web:1eecda5a1f3b8b9d1428f5",
  measurementId: "G-554G1D8PBJ",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


// let analytics;
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }
// export { analytics };
