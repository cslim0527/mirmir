import React from "react";
import Link from "next/link";
import { Box, Card, Flex, Separator, Text } from "@radix-ui/themes";

export interface GlobalNavigationProps {}

export default function GlobalNavigation() {
  return (
    <Box
      position="fixed"
      top={{
        lg: "130px",
        md: "130px",
        sm: "initial",
        xs: "initial",
      }}
      right={{
        lg: "40px",
        md: "40px",
        sm: "initial",
        xs: "initial",
      }}
      bottom={{
        lg: "initial",
        md: "initial",
        sm: "0",
        xs: "0",
        initial: "0",
      }}
      left={{
        lg: "initial",
        md: "initial",
        sm: "0",
        xs: "0",
        initial: "0",
      }}
      style={{ zIndex: 9999 }}
    >
      <Box
        display="inline-block"
        p="16px"
        width="auto"
        style={{
          border: "1px solid #333",
          borderRadius: "6px",
          background: "#000",
        }}
      >
        <Flex direction={{ sm: "row", lg: "column" }} gap="2">
          <Link href="/skills/fire">
            <Text as="span" size="2">
              무공
            </Text>
          </Link>
          <Separator orientation="horizontal" size="3" />
          <Link href="/items/common">
            <Text as="span" size="2">
              아이템
            </Text>
          </Link>
          <Separator orientation="horizontal" size="3" />
          <Link href="/hair">
            <Text as="span" size="2">
              머리모양
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
