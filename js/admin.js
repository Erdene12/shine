import { auth, db } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "login.html";
  }
});

addNews.addEventListener("click", async () => {
  if (!title.value || !content.value) {
    alert("Мэдээллээ бүрэн бич");
    return;
  }

  await addDoc(collection(db, "news"), {
    title: title.value,
    content: content.value,
    time: serverTimestamp()
  });

  title.value = "";
  content.value = "";
  alert("News нэмэгдлээ");
});

logout.addEventListener("click", () => {
  signOut(auth);
});
