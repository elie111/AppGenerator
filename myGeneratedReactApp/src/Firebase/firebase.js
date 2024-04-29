import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// insert firebase confiuration here
const firebaseConfig = {
apiKey:"AIzaSyCyRavuKuxCaiUN_fVEZjcEaq_PPLqRWMw",
authDomain:"appgenerator-34bf5.firebaseapp.com",
projectId:"appgenerator-34bf5",
storageBucket:"appgenerator-34bf5.appspot.com",
messagingSenderId:"444415929111",
appId:"1:444415929111:web:37cde41d843aac851c2552",
measurementId:"G-91W5TTQM5M",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };

