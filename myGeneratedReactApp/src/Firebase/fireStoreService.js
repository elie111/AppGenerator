import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase";

async function addData(path, docId, newData) {
    try {
        if (docId) {
            await setDoc(doc(firestore, path, docId), newData);
        }
        else {
            await addDoc(collection(firestore, path), newData);
        }
        console.log("User ID saved to Firestore");
    } catch (error) {
        console.error("Error saving user ID to Firestore:", error);
    }
}

async function updateData(path, docId, newData) {
    try {
        const documentRef = doc(firestore, path, docId);
        await updateDoc(documentRef, newData);
        console.log("Document successfully updated in Firestore");
    } catch (error) {
        console.error("Error updating document in Firestore:", error);
    }
}

async function removeData(path, docId) {
    try {
        await deleteDoc(doc(firestore, path, docId));
        console.log("Document successfully deleted from Firestore");
    } catch (error) {
        console.error("Error removing document from Firestore:", error);
    }
}

async function getData(path, docId) {
    try {
        const documentRef = doc(firestore, path, docId);
        const docSnap = await getDoc(documentRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data();  // Returns the document data as an object
        } else {
            console.log("No such document!");
            return null;  // Returns null if the document does not exist
        }
    } catch (error) {
        console.error("Error reading document from Firestore:", error);
        return null;
    }
}

async function getCollection(collectionPath) {
    try {
        const collectionRef = collection(firestore, collectionPath);
        const querySnapshot = await getDocs(collectionRef);
        const documents = [];

        querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            documents.push({ id: doc.id, ...doc.data() });
        });

        console.log("All documents retrieved successfully");
        return documents;  // Returns an array of document objects
    } catch (error) {
        console.error("Error retrieving documents from Firestore:", error);
        return [];  // Returns an empty array in case of error
    }
}

export { addData, getCollection, getData, removeData, updateData };

