import React from "react";
import { Flex, Box, Text, Card, Badge } from "@radix-ui/themes";

import ItemUnit from "@/components/ItemUnit";

import { ItemGroup, ItemTypes } from "@/types";
import SubNavigation from "@/components/SubNavigation/SubNavigation";

interface ItemsProps extends ItemGroup {
  type: ItemTypes;
}

const ITEM_NAVIGATION_LIST = [
  {
    key: "common",
    title: "공통",
  },
  {
    key: "fire",
    title: "화술사",
  },
  {
    key: "water",
    title: "수도사",
  },
  {
    key: "thunder",
    title: "천술사",
  },
  {
    key: "earth",
    title: "지도사",
  },
  {
    key: "dark",
    title: "음전사",
  },
  {
    key: "light",
    title: "양전사",
  },
];

export default function Items({ type, data }: ItemsProps) {
  return (
    <Box pt="80px">
      <SubNavigation path="items" list={ITEM_NAVIGATION_LIST} active={type} />
      <Flex
        direction={{ initial: "column", lg: "row" }}
        wrap={{ lg: "wrap" }}
        gap="16px"
      >
        {data.map((item) => (
          <Box width={{ initial: "100%", lg: "calc(50% - 8px)" }}>
            <ItemUnit
              {...item}
              image={`/assets/images/items/${type}/${item.name}.gif`}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
