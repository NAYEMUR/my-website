// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD8ZVXO_Dmxfy4EfE9_oKJcgSO5Zfl5Fbs",
    authDomain: "test-f97f5.firebaseapp.com",
    projectId: "test-f97f5",
    storageBucket: "test-f97f5.firebasestorage.app",
    messagingSenderId: "729302428023",
    appId: "1:729302428023:web:85dcdc5a39179988219972"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Function to save data to Firestore
function saveData() {
    db.collection("users").add({
        name: "Nayemur Rahaman",
        email: "nayem@example.com"
    }).then(() => {
        alert("Data Saved Successfully!");
    }).catch((error) => {
        console.error("Error saving data: ", error);
    });
}
