import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const fetchTeamData = async () => {
  try {
    const teamCollectionRef = collection(db, "team");
    const querySnapshot = await getDocs(teamCollectionRef);
    const teamData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return teamData;
  } catch (error) {
    console.error("Error fetching team data:", error);
  }
}

// ADMIN

export const addTeamMember = async (memberData) => {
  try {
    const teamCollectionRef = collection(db, "team");
    const docRef = await addDoc(teamCollectionRef, memberData);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding team member:", error);
  }
};

export const updateTeamMember = async (id, updatedData) => {
  try {
    const teamMemberDocRef = doc(db, "team", id);
    await updateDoc(teamMemberDocRef, updatedData);
    console.log("Team member updated with ID:", id);
  } catch (error) {
    console.error("Error updating team member:", error);
  }
};

export const deleteTeamMember = async (id) => {
  try {
    const teamMemberDocRef = doc(db, "team", id);
    await deleteDoc(teamMemberDocRef);
    console.log("Team member deleted with ID:", id);
  } catch (error) {
    console.error("Error deleting team member:", error);
  }
};