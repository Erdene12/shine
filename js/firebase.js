import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZLoXJbAJmFNM60dleBL5cXr9ztp6Ctrg",
  authDomain: "gyuyguy-3efcb.firebaseapp.com",
  projectId: "gyuyguy-3efcb",
  storageBucket: "gyuyguy-3efcb.firebasestorage.app",
  messagingSenderId: "199804943420",
  appId: "1:199804943420:web:d7de87bf3d2231636a9739"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
