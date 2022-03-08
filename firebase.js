import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtK-R3c0wezKVh7vh3Zali4xdq1R1XaLg",
  authDomain: "whatsapp-aee08.firebaseapp.com",
  projectId: "whatsapp-aee08",
  storageBucket: "whatsapp-aee08.appspot.com",
  messagingSenderId: "797589767969",
  appId: "1:797589767969:web:d7cef7ea6f891566a0a060"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}