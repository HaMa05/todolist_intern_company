// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/analytics";

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PEOJECT_ID,
  VITE_STOREGE_BUCKET,
  VITE_MESSAGING_SENDER_ID,
  VITE_APP_ID,
  VITE_MEANSUREMENT_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PEOJECT_ID,
  storageBucket: VITE_STOREGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_APP_ID,
  measurementId: VITE_MEANSUREMENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
