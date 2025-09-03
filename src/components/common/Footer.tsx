"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="whiteAlpha.100"
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "whiteAlpha.300",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg="ui.dark" color="ui.text">
  <Container
    as={Stack}
    maxW={"6xl"}
    py={4}
    direction={{ base: "column", md: "row" }}
    spacing={4}
    justify={{ base: "center", md: "space-between" }}
    align={{ base: "center", md: "center" }}
  >
    <Stack direction={{ base: "column", md: "row" }} align="center" spacing={2}>
      <Text fontWeight="light" fontSize="sm">
        © {new Date().getFullYear()} Thirumala Industries. All rights reserved.
      </Text>
      <Text fontWeight="light" fontSize="sm">
        Designed by COSVERS
      </Text>
    </Stack>

    <Stack direction={"row"} spacing={6}>
      <SocialButton label={"Twitter"} href={"#"}>
        <FaTwitter />
      </SocialButton>
      <SocialButton label={"YouTube"} href={"#"}>
        <FaYoutube />
      </SocialButton>
      <SocialButton label={"Instagram"} href={"#"}>
        <FaInstagram />
      </SocialButton>
    </Stack>
  </Container>
</Box>

  );
}
