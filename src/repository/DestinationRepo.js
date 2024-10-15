import {
  collection,
  getDocs,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { data } from "autoprefixer";

export const fetchDestinationData = async (domestic, regionId, placeId) => {
  try {
    let destinationCollectionRef;
    if (domestic) {
      destinationCollectionRef = collection(
        db,
        "domDestinations",
        regionId,
        placeId
      );
    } else {
      destinationCollectionRef = collection(
        db,
        "intDestinations",
        regionId,
        placeId
      );
    }
    const querySnapshot = await getDocs(destinationCollectionRef);
    const destinationData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    let destinationPackageRef;

    if (domestic) {
      destinationPackageRef = collection(
        db,
        "domDestinations",
        regionId,
        placeId,
        destinationData[0].id,
        "packages"
      );
    } else {
      destinationPackageRef = collection(
        db,
        "intDestinations",
        regionId,
        placeId,
        destinationData[0].id,
        "packages"
      );
    }

    const packageQuerySnapshot = await getDocs(destinationPackageRef);
    const packageData = packageQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { destinationData: destinationData[0], packageData };
  } catch (error) {
    console.error("Error fetching destination data:", error);
  }
};

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

// ADMIN

export const fetchDestinationsCount = async () => {
  try {
    const internationalDataRef = collection(db, "intDestinations");
    const domesticDataRef = collection(db, "domDestinations");

    const internationalQuerySnapshot = await getDocs(internationalDataRef);
    const domesticQuerySnapshot = await getDocs(domesticDataRef);

    const internationalRegions = internationalQuerySnapshot.docs.length;
    const domesticRegions = domesticQuerySnapshot.docs.length;

    const internationalDests = internationalQuerySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    const domesticDests = domesticQuerySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    const internationalDestCount = internationalDests.reduce((acc, curr) => {
      return acc + curr.places.length;
    }, 0);

    const domesticDestCount = domesticDests.reduce((acc, curr) => {
      return acc + curr.places.length;
    }, 0);

    return {
      internationalRegions,
      domesticRegions,
      internationalDestCount,
      domesticDestCount,
    };
  } catch (error) {
    console.error("Error fetching destinations count:", error);
  }
};

export const fetchSearchBarDestinations = async () => {
  try {
    const internationalDestinations = await fetchInternationalCards();
    const domesticDestinations = await fetchDomesticCards();

    const searchArray = [];

    internationalDestinations.forEach((item) => {
      item.places.forEach((place) => {
        searchArray.push({
          label: place.title,
          value: "/international/" + item.id + "/" + place.title.toLowerCase(),
        });
      });
    });

    domesticDestinations.forEach((item) => {
      item.places.forEach((place) => {
        searchArray.push({
          label: place.title,
          value: "/domestic/" + item.id + "/" + place.title.toLowerCase(),
        });
      });
    });

    console.log(searchArray);

    return searchArray;
  } catch (error) {
    console.error("Error fetching search bar destinations:", error);
  }
};

//ADMIN DOMESTIC

export const fetchDomesticRegionPlaces = async (region) => {
  try {
    const docRef = doc(db, "domDestinations", region);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error("Region not found");
    }

    const places = docSnap.data().places;
    const dataArray = [];

    await Promise.all(
      places.map(async (place) => {
        const collectionRef = collection(db, "domDestinations", region, place);
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
          dataArray.push({ id: doc.id, colRef: place, ...doc.data() });
        });
      })
    );

    return dataArray;
  } catch (error) {
    console.error("Error fetching domestic region places:", error);
  }
};

export const fetchDomesticRegions = async () => {
  try {
    const domesticDataRef = collection(db, "domDestinations");
    const querySnapshot = await getDocs(domesticDataRef);
    const destinationData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return destinationData;
  } catch (error) {
    console.error("Error fetching domestic regions:", error);
  }
};

export const fetchDomesticPlacePackage = async (regionId, placeId, docId) => {
  try {
    const collectionRef = collection(
      db,
      "domDestinations",
      regionId,
      placeId,
      docId,
      "packages"
    );
    const querySnapshot = await getDocs(collectionRef);
    const packageData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return packageData;
  } catch (error) {
    console.error("Error fetching domestic place package:", error);
  }
};

export const addDomesticRegion = async (data, slug) => {
  try {
    const regionRef = doc(db, "domDestinations", slug);
    await setDoc(regionRef, data);
    return slug;
  } catch (error) {
    console.error("Error adding domestic region:", error);
  }
};

export const deleteDomesticRegion = async (id) => {
  try {
    const regionRef = doc(db, "domDestinations", id);
    await deleteDoc(regionRef);
  } catch (error) {
    console.error("Error deleting domestic region:", error);
  }
};

export const updateDomesticPlace = async (id, regionId, colRef, data) => {
  try {
    const placeRef = doc(db, "domDestinations", regionId, colRef, id);
    await updateDoc(placeRef, data);
  } catch (error) {
    console.error("Error updating domestic place:", error);
  }
};

export const deleteDomesticPlace = async (id, regionId, colRef) => {
  try {
    const regionDocRef = doc(db, "domDestinations", regionId);

    const regionDoc = await getDoc(regionDocRef);
    if (!regionDoc.exists()) {
      throw new Error("Region not found");
    }

    const regionData = regionDoc.data();
    regionData.places = regionData.places.filter((place) => place !== colRef);

    setDoc(regionDocRef, regionData);

    const placeRef = doc(db, "domDestinations", regionId, colRef, id);
    await deleteDoc(placeRef);
  } catch (error) {
    console.error("Error deleting domestic place:", error);
  }
};

export const addDomesticPlace = async (regionId, slug, data) => {
  try {
    const regionDocRef = doc(db, "domDestinations", regionId);

    const regionDoc = await getDoc(regionDocRef);
    if (!regionDoc.exists()) {
      throw new Error("Region not found");
    }

    const regionData = regionDoc.data();
    regionData.places.push(slug);

    setDoc(regionDocRef, regionData);

    const newPlaceColRef = collection(db, "domDestinations", regionId, slug);
    const newPlace = await addDoc(newPlaceColRef, data);

    return newPlace.id;
  } catch (error) {
    console.error("Error adding domestic place :", error);
  }
};

export const addDomesticPlacePackage = async (
  regionId,
  placeId,
  docId,
  data
) => {
  try {
    const placeDocRef = collection(
      db,
      "domDestinations",
      regionId,
      placeId,
      docId,
      "packages"
    );
    const docref = await addDoc(placeDocRef, data);
    
    return docref.id;
  } catch (error) {
    console.error("Error adding domestic place package :", error);
  }
};

export const deleteDomesticPlacePackage = async (id, regionId, placeId, docId) => {
  try {
    const placeDocRef = doc(
      db,
      "domDestinations",
      regionId,
      placeId,
      docId,
      "packages",
      id
    );
    await deleteDoc(placeDocRef);
  } catch (error) {
    console.error("Error deleting domestic place package :", error);
  }
};

export const updateDomesticPlacePackage = async (
  id,
  regionId,
  placeId,
  docId,
  data
) => {
  try {
    const placeDocRef = doc(
      db,
      "domDestinations",
      regionId,
      placeId,
      docId,
      "packages",
      id
    );
    await updateDoc(placeDocRef, data);
  } catch (error) {
    console.error("Error updating domestic place package :", error);
  }
};