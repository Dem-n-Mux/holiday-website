import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const fetchDestinationData = async (domestic, regionId, placeId) => {
  try {
    let destinationCollectionRef;
    if (domestic) {
      destinationCollectionRef = collection(db, "domDestinations", regionId, placeId);
    } else {
      destinationCollectionRef = collection(db, "intDestinations", regionId, placeId);
    }
    const querySnapshot = await getDocs(destinationCollectionRef);
    const destinationData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return destinationData[0];
  } catch (error) {
    console.error("Error fetching destination data:", error);
  }
}

export const fetchInternationalCards = async () => {
  try {
    const internationalDataRef = collection(db, "intDestinations");
    const querySnapshot = await getDocs(internationalDataRef);
    const destinationData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const data = await Promise.all(
      destinationData.map(async (item) => {
        const title = item.title;
        const places = item.places;
        const docRef = item.id;

        const arr = [];

        await Promise.all(
          places.map(async (place) => {
            const placeRef = collection(db, "intDestinations", docRef, place);
            const placeQuerySnapshot = await getDocs(placeRef);

            placeQuerySnapshot.docs.forEach((doc) => {
              arr.push({
                id: doc.id,
                ...doc.data(),
              });
            });
          })
        );

        return {
          id: docRef,
          title,
          places: arr,
        };
      })
    );

    return data;
  } catch (error) {
    console.error("Error fetching international cards:", error);
  }
};

export const fetchDomesticCards = async () => {
  try {
    const domesticDataRef = collection(db, "domDestinations");
    const querySnapshot = await getDocs(domesticDataRef);
    const destinationData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const data = await Promise.all(
      destinationData.map(async (item) => {
        const title = item.title;
        const places = item.places;
        const docRef = item.id;

        const arr = [];

        await Promise.all(
          places.map(async (place) => {
            const placeRef = collection(db, "domDestinations", docRef, place);
            const placeQuerySnapshot = await getDocs(placeRef);

            placeQuerySnapshot.docs.forEach((doc) => {
              arr.push({
                id: doc.id,
                ...doc.data(),
              });
            });
          })
        );

        return {
          id: docRef,
          title,
          places: arr,
        };
      })
    );

    return data;
  } catch (error) {
    console.error("Error fetching domestic cards:", error);
  }
};
