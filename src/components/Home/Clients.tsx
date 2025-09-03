import { Box, Container, Heading, Image, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

const Clients = () => {
  // Client logos - replace with your actual client logos
  const logos = [
    "/assets/clients/BHEL_logo.png",
    "/assets/clients/cat-machinery-logo.png",
    "/assets/clients/Dalmia.jpg",
    "/assets/clients/Hindustan_Aeronautics_Limited_Logo.png",
    "/assets/clients/il&fs_logo.png",
    "/assets/clients/ITC_Limited_Logo.png",
    "/assets/clients/NTPC_Logo.png",
    "/assets/clients/ramco_logo.png",
    "/assets/clients/Titan_Company_Logo.png",
    "/assets/clients/TN_Logo.jpg",
    "/assets/clients/TNPL_logo.png",
    "/assets/clients/tvs_logo.png",
  ];


  const duplicatedLogos = [...logos, ...logos];
  const [isPaused, setIsPaused] = useState(false);
  const logoHeight = useBreakpointValue({ base: "40px", md: "50px", lg: "60px" });
  const spacing = useBreakpointValue({ base: 8, md: 12, lg: 16 });

  return (
    <Box bg="white" py={16} position="relative" overflow="hidden">
      <Container maxW="7xl" textAlign="center" position="relative">
        {/* Section heading */}
        <Heading
          color="brand.blue"
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          lineHeight="shorter"
        >
          Our {' '}
          <Text
            as="span"
            bgGradient="linear(to-r, green.400, blue.500)"
            bgClip="text"
          >
           Clients
          </Text>
        </Heading>
        {/* Supportive text */}
        <Box maxW="2xl" mx="auto" mt={5} mb={10}>
          <Text size="sm" color="brand.textSecondary" fontWeight="normal">
            Proudly trusted by industry leaders who rely on our expertise in
            sustainable solutions and advanced technologies.
          </Text>
        </Box>

        {/* Scrolling container */}
        <Box
          position="relative"
          mt={5}
          overflow="hidden"
          w="100%"
          py={3}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Gradient overlays for fade effect */}
          <Box
            position="absolute"
            left="0"
            top="0"
            bottom="0"
            w="60px"
            bgGradient="linear(to-r, white, transparent)"
            zIndex="2"
          />
          <Box
            position="absolute"
            right="0"
            top="0"
            bottom="0"
            w="60px"
            bgGradient="linear(to-l, white, transparent)"
            zIndex="2"
          />

          {/* Animated scrolling track */}
          <Flex
            animation={isPaused ? "none" : "scroll 40s linear infinite"}
            sx={{
              "@keyframes scroll": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
            gap={spacing}
            align="center"
            w="max-content"
          >
            {duplicatedLogos.map((logo, index) => (
              <Box
                key={index}
                flexShrink={0}
                p={4}
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                <Image
                  src={logo}
                  alt={`Client ${index % logos.length + 1}`}
                  h={logoHeight}
                  w="auto"
                  objectFit="contain"
                  transition="all 0.3s ease"
                  _hover={{
                    filter: "grayscale(0%)",
                    opacity: "1",
                  }}
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;
