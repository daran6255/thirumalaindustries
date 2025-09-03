'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Icon,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react'
import { FaIndustry, FaLeaf } from 'react-icons/fa'
import { MdEnergySavingsLeaf } from 'react-icons/md'
import { GiOilPump, GiRobotGolem } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons' // ✅ FIXED: Import IconType

const MotionBox = motion(Box)

interface Feature {
  icon: IconType
  title: string
  description: string
  color: string
}

export default function ExpertiseSection() {
  const features: Feature[] = [
    {
      icon: FaIndustry,
      title: 'Refining Excellence',
      description:
        'Harnessing advanced refining systems to produce cleaner, higher-quality fuels and products with unmatched efficiency.',
      color: '#86bfffff', // blue
    },
    {
      icon: GiOilPump,
      title: 'Crude Oil Expertise',
      description:
        'Precision-driven management from sourcing to processing, ensuring reliable performance and maximum value extraction.',
      color: '#ffba67ff', // deep orange
    },
    {
      icon: MdEnergySavingsLeaf,
      title: 'Sustainable Innovation',
      description:
        'Integrating eco-conscious methods to minimize emissions, conserve energy, and promote greener industrial growth.',
      color: '#a7ff7eff', // eco green
    },
    {
      icon: GiRobotGolem,
      title: 'Automation & Control',
      description:
        'Smart automation and AI monitoring deliver accuracy, safety, and real-time insights across every stage of production.',
      color: '#d3a8ffff', // purple tech
    },
  ]

  return (
    <Box bg="brand.blue" py={{ base: 16, md: 20 }} position="relative" overflow="hidden">
      {/* Subtle background pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="url('/assets/patterns/diagonal-stripes.svg')"
        opacity={0.04}
        zIndex={0}
      />

      <Container maxW="6xl" textAlign="center" position="relative" zIndex={1}>
        {/* Section Icon */}
        <Flex justify="center">
          <Box
            p={3}
            borderRadius="full"
            bg="brand.accent"
            color="brand.warning"
            fontSize="2xl"
            shadow="md"
          >
            <Icon as={FaLeaf} />
          </Box>
        </Flex>

        {/* Heading */}
        <Text
          fontWeight="bold"
          color="brand.warning"
          textTransform="uppercase"
          letterSpacing="wide"
          mb={2}
        >
          Expertise That Defines Us
        </Text>
        <Stack spacing={4} align="center" mb={14}>
          <Heading
            color="white"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            lineHeight="shorter"
          >
            Pioneering the Future of{' '}
            <Text
              as="span"
              bgGradient="linear(to-r, green.400, blue.500)"
              bgClip="text"
            >
              Oil Refining
            </Text>
          </Heading>
          <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }} maxW="2xl">
            Blending innovation, sustainability, and precision engineering to deliver world-class refining solutions that empower industries and protect the planet.
          </Text>
        </Stack>

        {/* Features Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {features.map((feature, idx) => (
            <MotionBox
              key={idx}
              p={8}
              rounded="2xl"
              bg="whiteAlpha.100"
              backdropFilter="blur(14px)"
              border="1px solid"
              borderColor="whiteAlpha.300"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <HStack spacing={6} align="start">
                {/* Icon */}
                <Box
                  p={5}
                  bg="whiteAlpha.200"
                  rounded="full"
                  boxShadow="lg"
                  display="inline-flex"
                  w={16}
                  h={16}
                  alignItems="center"
                  justifyContent="center"
                  fontSize="2xl"
                >
                  <Icon as={feature.icon} w={8} h={8} color={feature.color} />
                </Box>
                {/* Content */}
                <VStack align="start" spacing={2}>
                  <Text fontWeight={700} fontSize="xl" color="white" textAlign="left">
                    {feature.title}
                  </Text>
                  <Text color="whiteAlpha.900" fontSize="sm" lineHeight="tall" textAlign="left">
                    {feature.description}
                  </Text>
                </VStack>
              </HStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
