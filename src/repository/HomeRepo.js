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
