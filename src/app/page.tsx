"use client";
import { Container, Flex, Text, Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <Container size={{ sm: "1", lg: "4" }} px="16px">
      <Flex direction="column" gap="2">
        <Text>Hello from Radix</Text>
        <Button>Lets go</Button>
      </Flex>
    </Container>
  );
}
