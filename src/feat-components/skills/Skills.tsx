import React from "react";
import { Flex, Box, Text, Card, Badge, Table } from "@radix-ui/themes";

import { Job, Skill } from "@/types";
import SubNavigation from "@/components/SubNavigation/SubNavigation";

export interface SkillsProps {
  type: Job;
  data: Skill[];
}

const ITEM_NAVIGATION_LIST = [
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

export default function Skills({ type, data }: SkillsProps) {
  return (
    <Box pt="80px">
      <SubNavigation path="skills" list={ITEM_NAVIGATION_LIST} active={type} />

      <Table.Root variant="surface" size="1">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>이름</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>필요레벨</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>총수련치</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>설명</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map(({ name, level, training, description }) => (
            <Table.Row>
              <Table.RowHeaderCell>{name}</Table.RowHeaderCell>
              <Table.Cell>{level}</Table.Cell>
              <Table.Cell>{training}</Table.Cell>
              <Table.Cell>{description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
