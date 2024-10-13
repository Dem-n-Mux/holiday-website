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

    let destinationPackageRef;

    if(domestic) {
      destinationPackageRef = collection(db, "domDestinations", regionId, placeId, destinationData[0].id, "packages");
    } else {
      destinationPackageRef = collection(db, "intDestinations", regionId, placeId, destinationData[0].id, "packages");
    }

    const packageQuerySnapshot = await getDocs(destinationPackageRef);
    const packageData = packageQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {destinationData : destinationData[0], packageData};
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
      }
    });

    const domesticDests = domesticQuerySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    });

    const internationalDestCount = internationalDests.reduce((acc, curr) => {
      return acc + curr.places.length;
    }, 0);

    const domesticDestCount = domesticDests.reduce((acc, curr) => {
      return acc + curr.places.length;
    }, 0);

    return { internationalRegions, domesticRegions, internationalDestCount, domesticDestCount };
  } catch (error) {
    console.error("Error fetching destinations count:", error);
  }
}

export const fetchSearchBarDestinations = async () => {
  try {
    const internationalDestinations = await fetchInternationalCards();
    const domesticDestinations = await fetchDomesticCards();

    const searchArray = [];

    internationalDestinations.forEach((item) => {
      item.places.forEach((place) => {
        searchArray.push({
          label : place.title,
          value : "/international/" + item.id + "/" + place.title.toLowerCase()
        })
      });
    })

    domesticDestinations.forEach((item) => {
      item.places.forEach((place) => {
        searchArray.push({
          label : place.title,
          value : "/domestic/" + item.id + "/" + place.title.toLowerCase()
        })
      }) 
    });

    console.log(searchArray);

    return searchArray;
  } catch (error) {
    console.error("Error fetching search bar destinations:", error);
  }
}
