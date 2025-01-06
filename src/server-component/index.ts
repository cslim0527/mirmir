import { database } from "@/network/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { ItemGroup, ItemTypes } from "@/types";

export async function fetchItems(key: ItemTypes) {
  try {
    const snapshot = await getDoc(doc(database, "items", key)); // 컬렉션 읽기

    if (snapshot.exists()) {
      return snapshot.data() as ItemGroup;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
