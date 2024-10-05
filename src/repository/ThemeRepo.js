import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const fetchThemeData = async (themeName) => {
  try {
    const themeCollectionRef = collection(db, "themes");
    const querySnapshot = await getDocs(themeCollectionRef);
    const themeData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const theme = themeData.find((theme) => theme.id === themeName);
    return theme;
  } catch (error) { 
    console.error("Error fetching theme slider data:", error);
  }
}

export const fetchThemePackages = async (themeName) => {
  try {
    const themeCollectionRef = collection(db, "themes", themeName, "packages");
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

// ADMIN

export const fetchThemesCount = async () => {
  try{
    const themeCollectionRef = collection(db, "themes");
    const querySnapshot = await getDocs(themeCollectionRef);

    return querySnapshot.docs.length
  } catch (error) {
    console.error("Error fetching theme slider data:", error);
  }
}