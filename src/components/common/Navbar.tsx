import {
  Box,
  Flex,
  Image,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Slide,
  Button,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

const NavLink = ({ children, href, onClick }: NavLinkProps) => {
  return (
    <Link
      px={3}
      py={2}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: "ui.darkSlate",
      }}
      href={href}
      fontWeight="light"
      fontSize={{ base: "md", md: "sm", lg: "md" }}
      color="white"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const links = [
  { name: "Home", href: "#hero" },         // Hero section
  { name: "About Us", href: "#our-story" }, // OurStorySection
  { name: "Our Services", href: "#services" }, // OurServices
  { name: "Our Industries", href: "#expertise" }, // (if you have one)
  { name: "Our Products", href: "#ourproduct" }, // (if you have one)
];


  return (
    <>
      <Box
        as="nav"
        bg={scrolled || isOpen ? "brand.blue" : "transparent"}
        position="fixed"
        top={0}
        w="100%"
        zIndex={1000}
        transition="all 0.3s ease"
        boxShadow={scrolled ? "md" : "none"}
      >
        <Flex
          h={{ base: "60px", md: "80px" }}
          align="center"
          justify="space-between"
          maxW="7xl"
          mx="auto"
          px={{ base: 4, md: 6 }}
        >
          {/* Logo */}
          <Image
            src="/assets/Logo/Thirumala_Industries_Logo.png"
            alt="Logo"
            h={{ base: "50px", md: "70px" }}
            objectFit="contain"
          />

          {/* Desktop Navigation */}
          <HStack as="nav" spacing={3} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.name}
              </NavLink>
            ))}
            {/* Contact Us as Button */}
            <Button
              as="a"
              href="#contactus"
              variant="outline"
              color="white"
              borderColor="white"
              borderRadius="6px"
              size="sm"
              _hover={{ bg: "white", color: "brand.blue" }}
            >
              Contact Us
            </Button>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            size="lg"
            icon={isOpen ? <CloseIcon boxSize={4} /> : <HamburgerIcon boxSize={6} />}
            aria-label="Toggle Menu"
            display={{ base: "flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="solid"
            bg="transparent"
            color="white"
            _hover={{ bg: "ui.darkSlate" }}
            _active={{ bg: "ui.darkSlate" }}
          />
        </Flex>

        {/* Mobile Navigation */}
        <Slide direction="top" in={isOpen} style={{ zIndex: 999 }}>
          <Box
            bg="brand.blue"
            w="100%"
            py={6}
            px={4}
            display={{ md: "none" }}
            shadow="lg"
          >
            <Stack as="nav" spacing={4}>
              {links.map((link) => (
                <NavLink key={link.href} href={link.href} onClick={onClose}>
                  {link.name}
                </NavLink>
              ))}
              {/* Contact Us as Button (mobile) */}
              <Button
                as="a"
                href="#contactus"
                variant="outline"
                color="white"
                borderColor="white"
                size="md"
                borderRadius="6px"
                onClick={onClose}
                _hover={{ bg: "white", color: "brand.blue" }}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Slide>
      </Box>

      {/* Spacer for fixed navbar */}
      <Box h={{ base: "60px", md: "80px" }} />
    </>
  );
}
