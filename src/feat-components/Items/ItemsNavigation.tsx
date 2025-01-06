import React from "react";

import { ItemTypes } from "@/types";
import { TabNav, Box } from "@radix-ui/themes";

interface ItemsNavigationProps {
  type: ItemTypes;
}

const ITEM_NAVIGATION_MAP: { type: ItemTypes; title: string }[] = [
  {
    type: "common",
    title: "공통",
  },
  {
    type: "fire",
    title: "화술사",
  },
  {
    type: "water",
    title: "수도사",
  },
  {
    type: "thunder",
    title: "천술사",
  },
  {
    type: "earth",
    title: "지도사",
  },
  {
    type: "dark",
    title: "음전사",
  },
  {
    type: "light",
    title: "양전사",
  },
];

export default function ItemsNavigation({ type }: ItemsNavigationProps) {
  return (
    <Box
      width="100%"
      height="40px"
      mb="20px"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "black",
      }}
    >
      <TabNav.Root>
        {ITEM_NAVIGATION_MAP.map(({ title, type: _type }) => (
          <TabNav.Link href={`/items/${_type}`} active={_type === type}>
            {title}
          </TabNav.Link>
        ))}
      </TabNav.Root>
    </Box>
  );
}
