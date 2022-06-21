// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB17eup6uRO5BvFcPXpecLxQbAn6cyQZI0",
  authDomain: "sportvaly-31a5b.firebaseapp.com",
  projectId: "sportvaly-31a5b",
  storageBucket: "sportvaly-31a5b.appspot.com",
  messagingSenderId: "180703967018",
  appId: "1:180703967018:web:7ee853ec8caf67b4341053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;