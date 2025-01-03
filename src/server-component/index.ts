import { database } from "@/network/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { ItemGroup, ItemTypes } from "@/types";

export async function fetchItems(key: ItemTypes) {
  try {
    const snapshot = await getDocs(collection(database, "items")); // 컬렉션 읽기
    const all = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as unknown as { id: string } & Record<ItemTypes, ItemGroup>[];
    return all.filter((group) => `${key}` in group).at(0);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
