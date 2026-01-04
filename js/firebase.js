import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZLoXJbAJmFNM60dleBL5rztp6Ctrg",
  authDomain: "gyuyguy-3efcb.firebaseapp.com",
  projectId: "gyuyguy-3efcb",
  storageBucket: "gyuyguy-3efcb.appspot.com",
  messagingSenderId: "199804943420",
  appId: "1:199804943420:web:d7de87bf3d2231636a9739"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

