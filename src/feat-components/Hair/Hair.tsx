import React from "react";
import Image from "next/image";
import { Badge, Box, Card, Flex, Table } from "@radix-ui/themes";

export default function Hair() {
  return (
    <Box pt="60px">
      <Table.Root variant="surface" size="1">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell justify="center">
              남자머리
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">
              여자머리
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Array(22)
            .fill(null)
            .map((_, i) => (
              <Table.Row>
                <Table.Cell>
                  <Card style={{ position: "relative" }}>
                    <Flex
                      width="135px"
                      height="60px"
                      style={{ margin: "0 auto" }}
                    >
                      <Badge
                        color="indigo"
                        style={{ position: "absolute", top: 5, left: 5 }}
                      >
                        {i}번
                      </Badge>
                      <Image
                        width={135}
                        height={60}
                        src={`/assets/images/hair/male/${i}.gif`}
                        alt=""
                      />
                    </Flex>
                  </Card>
                </Table.Cell>
                <Table.Cell>
                  <Card style={{ position: "relative" }}>
                    <Flex
                      width="135px"
                      height="60px"
                      style={{ margin: "0 auto" }}
                    >
                      <Badge
                        color="indigo"
                        style={{ position: "absolute", top: 5, left: 5 }}
                      >
                        {i}번
                      </Badge>
                      <Image
                        width={135}
                        height={60}
                        src={`/assets/images/hair/female/${i}.gif`}
                        alt=""
                      />
                    </Flex>
                  </Card>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
