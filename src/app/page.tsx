"use client";
import { Flex, Text, Button, Box } from "@radix-ui/themes";
import styles from "./App.module.scss";

export default function Home() {
  return (
    <Flex direction="column" gap="2" pt="40px">
      <Box className={styles["main-contents"]}>
        <Text>Hello from Radix</Text>
        <Button>Lets go</Button>
      </Box>
    </Flex>
  );
}
