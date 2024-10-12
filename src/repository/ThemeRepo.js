import { collection, deleteDoc, doc, addDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
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

    return querySnapshot.docs.length;
  } catch (error) {
    console.error("Error fetching theme slider data:", error);
  }
}

export const fetchAllThemeData = async () => {
  try {
    const themeCollectionRef = collection(db, "themes");
    const querySnapshot = await getDocs(themeCollectionRef);

    const themesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return themesData;
  } catch (error) {
    console.error("Error fetching theme data:", error);
  }
}

export const addTheme = async (newTheme, themeSlug) => {
  try {
    const themeDocRef = doc(db, "themes", themeSlug);
    await setDoc(themeDocRef, newTheme); 
    console.log("New theme added with ID:", themeDocRef.id);
  } catch (error) {
    console.error("Error adding theme:", error);
  }
}

export const updateTheme = async (id, updatedTheme) => {
  try {
    const docRef = doc(db, "themes", id);
    await updateDoc(docRef, updatedTheme);
    console.log("Theme updated with ID:", id);
  } catch (error) {
    console.error("Error updating theme:", error);
  }
}

export const deleteTheme = async (id) => {
  try {
    const docRef = doc(db, "themes", id);
    await deleteDoc(docRef);
    console.log("Theme deleted with ID:", id);
  } catch (error) {
    console.error("Error deleting theme:", error);
  }
}


export const addThemePackage = async (themeName, newPackage) => {
  try {
    const themeCollectionRef = collection(db, "themes", themeName, "packages");
    const docRef = await addDoc(themeCollectionRef, newPackage);
    console.log("New package added with ID:", docRef.id);
    return { id: docRef.id, ...newPackage };
  } catch (error) {
    console.error("Error adding package:", error);
  }
}

export const deleteThemePackage = async (themeName, id) => {
  try {
    const docRef = doc(db, "themes", themeName, "packages", id);
    await deleteDoc(docRef);
    console.log("Package deleted with ID:", id);
  } catch (error) {
    console.error("Error deleting package:", error);
  }
}

export const updateThemePackage = async (themeName, id, updatedPackage) => {
  try {
    const docRef = doc(db, "themes", themeName, "packages", id);
    await updateDoc(docRef, updatedPackage);
    console.log("Package updated with ID:", id);
  } catch (error) {
    console.error("Error updating package:", error);
  }
}