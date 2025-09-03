"use client";

import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Container,
  Heading,
  Text,
  Icon,
  Flex,
  VStack,
} from "@chakra-ui/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, MapPin, Award, Briefcase } from "lucide-react";
import {
  FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface StatsCardProps {
  title: string;
  stat: number;
  suffix?: string;
  icon: React.ElementType;
}

function StatsCard({ title, stat, suffix = "+", icon }: StatsCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <MotionBox
      ref={ref}
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >
      <Stat
        px={{ base: 6, md: 8 }}
        py={12}
        rounded="2xl"
        textAlign="center"
        bgGradient="linear(to-br, whiteAlpha.200, whiteAlpha.100)"
        backdropFilter="blur(20px)"
        border="1px solid"
        borderColor="whiteAlpha.300"
        shadow="xl"
        _hover={{
          shadow: "2xl",
          borderColor: "brand.red",
          bgGradient: "linear(to-br, whiteAlpha.300, whiteAlpha.200)",
        }}
      >
        <VStack spacing={5}>
          {/* Icon */}
          <MotionBox
            w={16}
            h={16}
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="full"
            bgGradient="linear(to-br, brand.red, brand.blue)"
            shadow="lg"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Icon as={icon} boxSize={8} color="white" strokeWidth={2.5} />
          </MotionBox>

          {/* Number */}
          <StatNumber
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="extrabold"
            color="white"
            letterSpacing="tight"
          >
            {inView ? (
              <CountUp start={0} end={stat} duration={2.5} suffix={suffix} />
            ) : (
              `0${suffix}`
            )}
          </StatNumber>

          {/* Label */}
          <StatLabel
            fontWeight="semibold"
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.800"
            letterSpacing="wide"
          >
            {title}
          </StatLabel>
        </VStack>
      </Stat>
    </MotionBox>
  );
}

export default function StatsSection() {
  return (
    <Box
      bg="brand.blue"
      position="relative"
      overflow="hidden"
      py={{ base: 16, md: 24 }}
    >
      {/* Floating Glow Effects */}
      <Box
        position="absolute"
        top="-20%"
        left="-10%"
        w="60%"
        h="60%"
        bg="brand.red"
        filter="blur(140px)"
        opacity={0.25}
        rounded="full"
      />
      <Box
        position="absolute"
        bottom="-15%"
        right="-10%"
        w="60%"
        h="60%"
        bg="brand.yellow"
        filter="blur(10px)"
        opacity={0.25}
        rounded="full"
      />

      <Container maxW="7xl" position="relative" zIndex={2}>
        <Box textAlign="center" mb={16}>
          <Flex justify="center" >
            <Box
              borderRadius="full"
              bg="brand.accent"
              color="brand.warning"
              fontSize="2xl"
            >
              <Icon as={FaLeaf} />
            </Box>
          </Flex>

          <Text
            fontWeight="bold"
            color="brand.warning"
            textTransform="uppercase"
            letterSpacing="wide"
            mb={2}
          >
            Our Growth
          </Text>
          <Heading
            mb={5}
            color="white"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            lineHeight="shorter"
          >
            Driving Growth Through{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, green.400, blue.500)"
              bgClip="text"
            >
              Excellence
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="whiteAlpha.800"
            maxW="2xl"
            mx="auto"
          >
            Celebrating milestones, building trust, and fueling innovation across industries and communities worldwide.
          </Text>
        </Box>

        {/* Stats Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={12}>
          <StatsCard title={"Trusted Clients"} stat={150} icon={Users} />
          <StatsCard title={"Cities Served"} stat={25} icon={MapPin} />
          <StatsCard title={"Years of Expertise"} stat={10} icon={Award} />
          <StatsCard title={"Active Projects"} stat={35} icon={Briefcase} />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
