import React from "react";
import { fetchItems } from "@/server-component";
import { ItemTypes } from "@/types";

const CommonItems = async ({
  params,
}: {
  params: Promise<{ type: ItemTypes }>;
}) => {
  const type = (await params).type;
  const response = await fetchItems(type);
  // const res = type && items ? items?.[type] : undefined;

  if (!response?.data) {
    return null;
  }

  console.log("[response]", response);

  return <>{response.type}</>;
};

export default CommonItems;
