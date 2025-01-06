import React from "react";
import { Container, Box } from "@radix-ui/themes";
import Link from "next/link";

export default function Header() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="50px"
      style={{ zIndex: 9999, background: "black" }}
    >
      <Link href="/">
        <Container size={{ sm: "1", lg: "4" }} overflow="hidden">
          <Box
            width="100%"
            height="50px"
            style={{
              background: 'url("/assets/images/original_banner.gif") repeat',
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
            }}
          ></Box>
        </Container>
      </Link>
    </Box>
  );
}
