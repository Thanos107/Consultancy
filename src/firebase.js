// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgA1PrzjJD-1D_Aw73-vqw4p1GP6Xo-HU",
  authDomain: "consultancy-1f3d2.firebaseapp.com",
  projectId: "consultancy-1f3d2",
  storageBucket: "consultancy-1f3d2.appspot.com",
  messagingSenderId: "64576096509",
  appId: "1:64576096509:web:287780a75a410943605694",
  measurementId: "G-3K7585QEB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);