import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgoWiPcmI8uh_MS6y120HvXf8OgcoNTBE",
  authDomain: "seba-7fa74.firebaseapp.com",
  projectId: "seba-7fa74",
  storageBucket: "seba-7fa74.appspot.com",
  messagingSenderId: "1021067103095",
  appId: "1:1021067103095:web:f867051e5425c5189daf72"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();