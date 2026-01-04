import { db } from "./firebase.js";
import {
  collection, getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const container = document.getElementById("newsList");

(async function () {
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    container.innerHTML += `
      <div class="post-card">
        <h2>${data.title}</h2>
        <img src="${data.imageURL}" alt="${data.title}" />
        <p>${data.content}</p>
      </div>
    `;
  });
})();
