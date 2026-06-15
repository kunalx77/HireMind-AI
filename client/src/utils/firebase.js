import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "hiremindai-b4162.firebaseapp.com",
  projectId: "hiremindai-b4162",
  storageBucket: "hiremindai-b4162.firebasestorage.app",
  messagingSenderId: "596789895528",
  appId: "1:596789895528:web:a20c889ef07a27daf2b6dd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export { auth, provider }
