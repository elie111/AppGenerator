import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// insert firebase confiuration here

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
