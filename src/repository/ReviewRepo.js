import { collection, getDocs } from "firebase/firestore";
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