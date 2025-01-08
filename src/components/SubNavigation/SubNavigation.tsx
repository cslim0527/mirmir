import React from "react";
import { Box, Container, TabNav } from "@radix-ui/themes";

export type BaseNavigationItem = {
  key: string;
  title: string;
};

export type SubNavigationProps<T extends BaseNavigationItem> = {
  list: T[];
  active: string;
  path: string;
};

export default function SubNavigation<T extends BaseNavigationItem>({
  list,
  active,
  path,
}: SubNavigationProps<T>) {
  return (
    <Box
      width="100%"
      height="40px"
      mb="20px"
      style={{
        position: "fixed",
        top: "50px",
        left: 0,
        zIndex: 1000,
        background: "black",
      }}
    >
      <Container size={{ sm: "1", lg: "4" }}>
        <TabNav.Root>
          {list.map(({ title, key }) => (
            <TabNav.Link href={`/${path}/${key}`} active={key === active}>
              {title}
            </TabNav.Link>
          ))}
        </TabNav.Root>
      </Container>
    </Box>
  );
}
