import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXmbiUud2Rr4pPMnAFZqhWckGcXwxuW68",
  authDomain: "deepfake-383f8.firebaseapp.com",
  projectId: "deepfake-383f8",
  storageBucket: "deepfake-383f8.appspot.com",
  messagingSenderId: "1047008914537",
  appId: "1:1047008914537:web:c15896478d8bdbf3e486f8",
  measurementId: "G-E4PX6034C9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
