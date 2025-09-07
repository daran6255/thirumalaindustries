'use client'

import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  IconButton,
  Link,
  Button,
} from '@chakra-ui/react'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function TeamSection() {
  return (
    <Box bg="white" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        {/* Section Heading */}
        <Heading
          color="brand.blue"
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          lineHeight="shorter"
          textAlign="center"
        >
          Meet Our{' '}
          <Text
            as="span"
            bgGradient="linear(to-r, green.400, blue.500)"
            bgClip="text"
          >
            Managing Director
          </Text>
        </Heading>
        <Stack spacing={4} align="center" mt={5} mb={12}>
          <Text color="brand.blueLight" fontSize={{ base: 'sm', md: 'md' }} maxW="2xl" textAlign="center">
            Our visionary leader drives our company forward with innovation, integrity, and excellence.
          </Text>
        </Stack>

        {/* Profile Card */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="center"
          gap={{ base: 8, md: 16 }}
        >
          {/* Vertical Image with Gradient Overlay */}
          <Box
            pos="relative"
            w={{ base: '80%', md: '300px' }}
            rounded="xl"
            overflow="hidden"
            boxShadow="2xl"
            _hover={{ transform: 'scale(1.05)', transition: 'all 0.3s ease-in-out' }}
          >
            <Image
              src="/assets/team/Nagarjun_CEO_Thirumala_Industries-v1.2.jpeg"
              alt="Managing Director"
              objectFit="cover"
              w="100%"
              h={{ base: '300px', md: '400px' }}
              transition="all 0.3s ease-in-out"
            />
            <Box
              pos="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              bgGradient="linear(to-b, rgba(0,0,0,0.2), rgba(0,0,0,0.4))"
            />
          </Box>

          {/* Bio */}
          <VStack
            spacing={4}
            align={{ base: 'center', md: 'start' }}
            maxW={{ base: 'md', md: 'lg' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Heading fontSize={{ base: '2xl', md: '3xl' }} color="brand.main">
              Mr. Nagarjun
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="brand.blue" fontWeight={600}>
              Managing Director
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="brand.textSecondary">
              Our Managing Director has over 15 years of experience in the tech and education
              industry. He has a proven track record of leading teams to success, driving
              innovation, and creating solutions that empower people worldwide. His vision and
              leadership have shaped the company's growth and inspired our mission to make
              learning accessible to everyone.
            </Text>

            {/* Social Icons */}
            <HStack spacing={4} mt={2}>
              <Link href="https://linkedin.com" isExternal>
                <IconButton
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  colorScheme="linkedin"
                  variant="ghost"
                  size="lg"
                  _hover={{ bg: 'brand.main', color: 'white' }}
                />
              </Link>
              <Link href="https://twitter.com" isExternal>
                <IconButton
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  colorScheme="twitter"
                  variant="ghost"
                  size="lg"
                  _hover={{ bg: 'brand.main', color: 'white' }}
                />
              </Link>
              <Link href="https://facebook.com" isExternal>
                <IconButton
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  colorScheme="facebook"
                  variant="ghost"
                  size="lg"
                  _hover={{ bg: 'brand.main', color: 'white' }}
                />
              </Link>
            </HStack>

            {/* Connect Button */}
            <Button
              size="md"
              colorScheme="brand"
              bg="brand.main"
              color="white"
              _hover={{ bg: 'brand.accent', transform: 'scale(1.05)' }}
              mt={4}
            >
              Connect with us
            </Button>
          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}
