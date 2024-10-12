import { collection, getDocs } from "firebase/firestore";
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