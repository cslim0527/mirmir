import React from "react";
import { Flex, Box, Text, Card, Badge } from "@radix-ui/themes";

import ItemUnit from "@/components/ItemUnit";
import ItemsNavigation from "./ItemsNavigation";

import { ItemGroup, ItemTypes } from "@/types";

interface ItemsProps extends ItemGroup {
  type: ItemTypes;
}

export default function Items({ type, data }: ItemsProps) {
  return (
    <Box pt="60px">
      <ItemsNavigation type={type} />
      <Flex direction="column" gap="16px">
        {data.map((item) => (
          <ItemUnit
            {...item}
            image={`/assets/images/items/${type}/${item.name}.gif`}
          />
        ))}
      </Flex>
    </Box>
  );
}
