import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
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

export const fetchThemeSlideData = async () => {
  try {
    const themeCollectionRef = collection(db, "themes");
    const querySnapshot = await getDocs(themeCollectionRef);
    const themeData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return themeData;
  } catch (error) { 
    console.error("Error fetching theme slider data:", error);
  }
}

export const fetchInternationalDests = async () => {
  try {
    const internationalDataRef = collection(db, "intDestinations");
    const intDestSnapshot = await getDocs(internationalDataRef);
    const destinationData = await Promise.all(
      intDestSnapshot.docs.map(async (doc) => {
        const region = doc.id;
        const regionData = doc.data();

        const places = await Promise.all(
          regionData.places.map(async (place) => {
            const regionDataRef = collection(db, "intDestinations", region, place);
            const querySnapshot = await getDocs(regionDataRef);
            return { "values": querySnapshot.docs[0].data() };
          })
        );

        return { region, regionData, places };
      })
    );

    return destinationData;
  } catch (error) {
    console.error("Error fetching international destinations:", error);
  }
};

//ADMIN

export const addSliderItem = async (newItem) => {
  try {
    const sliderCollectionRef = collection(
      db,
      "homepage",
      "heroSection",
      "slider"
    );
    const docRef = await addDoc(sliderCollectionRef, newItem);
    console.log("New slider item added with ID:", docRef.id);
    return { id: docRef.id, ...newItem };
  } catch (error) {
    console.error("Error adding slider item:", error);
  }
};

export const updateSliderItem = async (id, updatedItem) => {
  try {
    const docRef = doc(db, "homepage", "heroSection", "slider", id);
    await updateDoc(docRef, updatedItem);
    console.log("Slider item updated with ID:", id);
  } catch (error) {
    console.error("Error updating slider item:", error);
  }
};

export const deleteSliderItem = async (id) => {
  try {
    const docRef = doc(db, "homepage", "heroSection", "slider", id);
    await deleteDoc(docRef);
    console.log("Slider item deleted with ID:", id);
  } catch (error) {
    console.error("Error deleting slider item:", error);
  }
};
