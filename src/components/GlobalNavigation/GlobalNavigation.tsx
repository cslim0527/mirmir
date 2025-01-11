"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Button, IconButton, Text } from "@radix-ui/themes";
import styles from "./GlobalNavigation.module.scss";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Cross2Icon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export interface GlobalNavigationProps {}

export default function GlobalNavigation() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleGnb = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseGnb = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [path]);

  return (
    <>
      <IconButton
        className={styles["btn-toggle-gnb"]}
        onClick={handleToggleGnb}
      >
        <MagnifyingGlassIcon width="18" height="18" />
      </IconButton>

      <Box className={classNames(styles.gnb, { [styles.open]: isOpen })}>
        <IconButton
          className={styles["btn-close-gnb"]}
          onClick={handleCloseGnb}
        >
          <Cross2Icon width="18" height="18" color="#fff" />
        </IconButton>
        <Box className={styles["gnb-list"]}>
          <Link scroll={false} href="/skills/fire">
            <Text as="span" size="3">
              무공
            </Text>
          </Link>

          <Link scroll={false} href="/items/common">
            <Text as="span" size="3">
              아이템
            </Text>
          </Link>

          <Link scroll={false} href="/hair">
            <Text as="span" size="3">
              머리모양
            </Text>
          </Link>

          <Link scroll={false} href="/map">
            <Text as="span" size="3">
              지도
            </Text>
          </Link>
        </Box>
      </Box>
    </>
  );
}
