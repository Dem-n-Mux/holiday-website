import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const fetchSliderData = async () => {
  try {
    const sliderCollectionRef = collection(
      db,
      "homepage",
      "heroSection",
      "slider"
    );
    const querySnapshot = await getDocs(sliderCollectionRef);
    const sliderData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return sliderData;
  } catch (error) {
    console.error("Error fetching slider data:", error);
  }
};