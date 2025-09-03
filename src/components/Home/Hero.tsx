import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  createIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "../common/Navbar";
import ShinyText from '../common/ShinyText';

const MotionHeading = motion(Heading);
const MotionStack = motion(Stack);

export default function Hero() {
  return (
    <Box
      bg="brand.blue"
      position="relative"
      overflow="hidden"
    >
      <Navbar />

      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgGradient="radial(circle at 100% 20%, rgba(255,255,255,0.15), transparent 70%)"
        zIndex={0}
      />

      <Container maxW="7xl" position="relative" mb={5} zIndex={1}>
        <Stack
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 24 }}
          direction={{ base: "column", md: "row" }}
        >
          {/* Left Content */}
          <MotionStack
            flex={1}
            spacing={{ base: 3, md: 4 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ShinyText 
              text=" ⚙️ Excellence in Oil Refining" 
              disabled={false} 
              speed={3} 
              className='custom-class' 
            />

            <MotionHeading
              lineHeight={1.4}
              fontWeight="bold"
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              color="brand.backgroundLight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Refine Smarter, <br />
              <Text as="span" color="brand.redLight">
                Deliver Cleaner Energy!
              </Text>
            </MotionHeading>

            <Text
              color="brand.backgroundLight"
              opacity={0.9}
              fontSize="lg"
              maxW="lg"
            >
              At Thirumala Industries, we specialize in advanced oil refining
              solutions that maximize efficiency, ensure product purity, and
              prioritize sustainability. Experience innovation and reliability
              in every drop of energy we produce.
            </Text>

            <Stack direction={{ base: "column", sm: "row" }} spacing={6} pt={2}>
              <Button
                variant="primary"
                size="lg"
                px={8}
                rounded="full"
                backdropFilter="blur(6px)"
                bgGradient="linear(to-r, teal.400, blue.500)"
                color="white"
                _hover={{
                  transform: "scale(1.08)",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.25)",
                  bgGradient: "linear(to-r, teal.500, blue.600)",
                }}
                transition="all 0.3s ease"
              >
                Our Services
              </Button>

              <Button
                variant="secondary"
                size="lg"
                px={8}
                rounded="full"
                leftIcon={<PlayIcon h={4} w={4} color="white" />}
                backdropFilter="blur(6px)"
                bg="rgba(255,255,255,0.1)"
                border="1px solid rgba(255,255,255,0.2)"
                color="white"
                _hover={{
                  transform: "scale(1.08)",
                  bg: "rgba(255,255,255,0.2)",
                }}
                transition="all 0.3s ease"
              >
                How We Operate
              </Button>
            </Stack>
          </MotionStack>

          {/* Right Content */}
          <Flex flex={1} justify="center" align="center" position="relative">
              <Image
                alt="Hero Image"
                fit="cover"
                align="center"
                w="100%"
                h="100%"
                src="/assets/banners/3.png"
              />
          </Flex>
        </Stack>
      </Container>

      {/* ✅ Animated Wave SVG at Bottom */}
      <Box
        as="svg"
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="60px"
        zIndex={2}
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 
              88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3" />
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0" />
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" />
        </g>
      </Box>

      {/* ✅ Wave Animations */}
      <style>{`
        .wave1 use {
          animation: move-forever1 10s linear infinite;
          animation-delay: -2s;
          fill: #ffffff;
          opacity: 0.6;
        }
        .wave2 use {
          animation: move-forever2 8s linear infinite;
          animation-delay: -2s;
          fill: #ffffff;
          opacity: 0.4;
        }
        .wave3 use {
          animation: move-forever3 6s linear infinite;
          animation-delay: -2s;
          fill: #ffffff;
        }
        @keyframes move-forever1 {
          0% { transform: translate(85px, 0%); }
          100% { transform: translate(-90px, 0%); }
        }
        @keyframes move-forever2 {
          0% { transform: translate(-90px, 0%); }
          100% { transform: translate(85px, 0%); }
        }
        @keyframes move-forever3 {
          0% { transform: translate(-90px, 0%); }
          100% { transform: translate(85px, 0%); }
        }
      `}</style>
    </Box>
  );
}

// ▶️ Play Icon
const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});
