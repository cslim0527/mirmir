import { getDoc, setDoc, doc } from "firebase/firestore";
import { database } from "@/network/firebase";
import { BaseResponse, Item, ItemTypes, Job, Skill } from "@/types";

export interface ItemsResponse extends BaseResponse<Item[]> {
  title: string;
}

export async function fetchItems(key: ItemTypes) {
  try {
    const snapshot = await getDoc(doc(database, "items", key));

    if (snapshot.exists()) {
      return snapshot.data() as ItemsResponse;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

export interface SkillsResponse extends BaseResponse<Skill[]> {}

export async function fetchSkills(key: Job) {
  try {
    const snapshot = await getDoc(doc(database, "skills", key));

    if (snapshot.exists()) {
      return snapshot.data() as SkillsResponse;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

export async function addDataToFirestore(
  path: string,
  pathSegments: string[],
  data: any
) {
  try {
    const docRef = doc(database, path, ...pathSegments);
    await setDoc(docRef, data);
    console.log("데이터 추가 성공!");
  } catch (error) {
    console.error("데이터 추가 실패:", error);
  }
}
