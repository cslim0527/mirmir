export type Job = "fire" | "water" | "thunder" | "earth" | "dark" | "light";

export type ItemTypes = Job | "common";
export interface ItemGroup {
  title: string;
  data: Item[];
}
export interface Item {
  price: number;
  acc: number;
  level: number;
  etc: string;
  rep: number;
  name: string;
  def: number;
  atk: number;
}
