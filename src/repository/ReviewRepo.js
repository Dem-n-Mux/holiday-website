import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";


export const fetchReviewData = async () => {
  try {
    const reviewCollectionRef = collection(db, "reviews");
    const querySnapshot = await getDocs(reviewCollectionRef);
    const reviewData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return reviewData;
  } catch (error) {
    console.error("Error fetching slider data:", error);
  }
}

//ADMIN

export const fetchReviewsCount = async () => {
  try {
    const reviewCollectionRef = collection(db, "reviews");
    const querySnapshot = await getDocs(reviewCollectionRef);

    return querySnapshot.docs.length;
  } catch (error) {
    console.error("Error fetching theme slider data:", error);
  }
}

export const addReview = async (newReview) => {
  try {
    const reviewCollectionRef = collection(db, "reviews");
    const docRef = await addDoc(reviewCollectionRef, newReview);
    console.log("New review added with ID:", docRef.id);
    return { id: docRef.id, ...newReview }; 
  } catch (error) {
    console.error("Error adding review:", error);
  }
};

export const updateReview = async (id, updatedReview) => {
  try {
    const docRef = doc(db, "reviews", id);
    await updateDoc(docRef, updatedReview);
    console.log("Review updated with ID:", id);
  } catch (error) {
    console.error("Error updating review:", error);
  }
};

export const deleteReview = async (id) => {
  try {
    const docRef = doc(db, "reviews", id);
    await deleteDoc(docRef);
    console.log("Review deleted with ID:", id);
  } catch (error) {
    console.error("Error deleting review:", error);
  }
};