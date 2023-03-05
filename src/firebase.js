// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl1aE6SQyu2rBADQU5kClt1C6RJpK1RU0",
  authDomain: "tesla-clone-9564e.firebaseapp.com",
  projectId: "tesla-clone-9564e",
  storageBucket: "tesla-clone-9564e.appspot.com",
  messagingSenderId: "44049750827",
  appId: "1:44049750827:web:1e821f42f30020e1f2836e"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


export { auth }
