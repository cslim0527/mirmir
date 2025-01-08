import React from "react";
import { fetchItems } from "@/server-component";
import { ItemTypes } from "@/types";
import Items from "@/feat-components/Items";

const MirItems = async ({
  params,
}: {
  params: Promise<{ type: ItemTypes }>;
}) => {
  const type = (await params).type;
  const response = await fetchItems(type);

  if (!response?.data) {
    return null;
  }

  return <Items {...response} type={type} />;
};

export default MirItems;
