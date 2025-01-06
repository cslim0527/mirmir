import React from "react";
import { Flex, Box, Text, Card, Badge } from "@radix-ui/themes";

import type { Item } from "@/types";
import Image from "next/image";

export type ItemProps = Item;

const Item = ({ acc, atk, def, etc, level, name, price, rep }: ItemProps) => {
  return (
    <Card size="1">
      <Flex gap="6">
        <Box style={{ textAlign: "center" }}>
          <Flex
            width="50px"
            height="50px"
            style={{
              backgroundColor: "#fff",
              borderRadius: "6px",
              padding: "4px",
              marginBottom: "4px",
            }}
            align="center"
            justify="center"
          >
            <Image
              layout="responsive"
              width={16}
              height={9}
              src="https://mir-nu.vercel.app/assets/images/items/thunder/%EC%88%98%EC%A0%95%EB%B0%98%EC%A7%80.gif"
              alt=""
            />
          </Flex>
          <Text as="p" weight="bold" size="3">
            {name}
          </Text>
          <Text as="p" size="1" color="gray">
            {typeof level === "number" ? "Lv." + level : level}
          </Text>
        </Box>
        <Box>
          {price || etc ? (
            <Flex
              gap="2"
              wrap="wrap"
              style={{ alignContent: "start", marginBottom: "8px" }}
            >
              {price && (
                <Badge color="gray" variant="outline" highContrast>
                  상점가: {price}
                </Badge>
              )}

              {etc && <Badge color="crimson">{etc}</Badge>}
            </Flex>
          ) : null}
          <Flex gap="2" wrap="wrap" style={{ alignContent: "start" }}>
            <Text as="span" size="1" style={{ flexShrink: 0 }}>
              정확도: {acc}
            </Text>
            <Text as="span" size="1" style={{ flexShrink: 0 }}>
              방어력: {def}
            </Text>
            <Text as="span" size="1" style={{ flexShrink: 0 }}>
              파괴력: {atk}
            </Text>
            <Text as="span" size="1" style={{ flexShrink: 0 }}>
              마항력: {rep}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Item;
