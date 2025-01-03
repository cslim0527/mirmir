import React from "react";
import { fetchItems } from "@/server-component";
import { ItemTypes } from "@/types";

const CommonItems = async ({
  params,
}: {
  params: Promise<{ id: ItemTypes }>;
}) => {
  const id = (await params).id;
  const items = await fetchItems(id);
  const res = id && items ? items?.[id] : undefined;

  if (!res) {
    return null;
  }

  return <div>{res.data.map((item) => item.name)}</div>;
};

export default CommonItems;
