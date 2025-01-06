export type ItemTypes = "common";

export interface ItemGroup {
  type: string;
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
