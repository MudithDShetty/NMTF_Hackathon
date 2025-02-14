import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYuxEXVZr997mUPK1D0pLbPlI3jVn-Bdw",
  authDomain: "hacknmtf.firebaseapp.com",
  projectId: "hacknmtf",
  storageBucket: "hacknmtf.firebasestorage.app",
  messagingSenderId: "670102433569",
  appId: "1:670102433569:web:582d977a6bcf6e0a9d5860",
  measurementId: "G-ZZZR61TX8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
