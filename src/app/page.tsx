"use client";
import { Flex, Text, Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix</Text>
      <Button>Lets go</Button>
    </Flex>
  );
}
