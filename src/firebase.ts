import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp, Timestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  projectId: "happy-tummy-goa-2026",
  appId: "1:938422720773:web:36acf781e388f77408ff6c",
  storageBucket: "happy-tummy-goa-2026.firebasestorage.app",
  apiKey: "AIzaSyDTTzzHpvSoAptQm1-cFA-0IutrCKLfBjo",
  authDomain: "happy-tummy-goa-2026.firebaseapp.com",
  messagingSenderId: "938422720773",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc, getDocs, query, orderBy, serverTimestamp, Timestamp, ref, uploadBytesResumable, getDownloadURL };
