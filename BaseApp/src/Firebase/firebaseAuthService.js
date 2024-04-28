import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addData } from "./fireStoreService";
import { auth } from './firebase';

async function handleSignIn(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("signed in")
        return true;
    } catch (error) {
        return false;
    }
};

async function handleSignUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("signed up")
        const userId = userCredential.user.uid;
        await addData("users", userId, {
            userId: userId
        });
        return true;
    } catch (error) {
        return false;
    }
};


async function handleLogout() {
    try {
        const userCredential = await signOut(auth);
        console.log("logged out")
        return true;
    } catch (error) {
        return false;
    }
};

export { handleLogout, handleSignIn, handleSignUp };

