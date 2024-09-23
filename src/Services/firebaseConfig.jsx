
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBQKqFH10dvfzUC51Bb2ab65PGmUP0m1oc",
  authDomain: "medical-forms-be326.firebaseapp.com",
  projectId: "medical-forms-be326",
  storageBucket: "medical-forms-be326.appspot.com",
  messagingSenderId: "365636741692",
  appId: "1:365636741692:web:04452e322b7d57ae003139",
  measurementId: "G-PJPXNHM5MZ" 
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


export default app;

