'use client'

import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
} from '@chakra-ui/react'
import {
  GiOilDrum,
  GiFactory,
  GiRecycle,
} from 'react-icons/gi'
import {
  FaLeaf,
} from "react-icons/fa";
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack
      direction={'row'}
      align={'center'}
      spacing={4}
      _hover={{
        transform: 'translateY(-6px) scale(1.02)',
        transition: 'all 0.3s ease',
      }}
    >
      <Flex
        w={12}
        h={12}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
        shadow="lg"
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize="lg" color="gray.800">
        {text}
      </Text>
    </Stack>
  )
}

export default function OurStorySection() {
  return (
    <Box as="section" id="our-story" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={12}
          alignItems="center"
        >
          {/* Left Content */}
          <Stack spacing={4}>
            <Flex align="center" >
              <Box
                p={3}
                borderRadius="full"
                bg="brand.accent"
                color="brand.warning"
                fontSize="2xl"
              >
                <Icon as={FaLeaf} />
              </Box>
              <Text
                textTransform={'uppercase'}
                fontWeight={700}
                fontSize={'sm'}
                color="brand.warning"
                letterSpacing="wide"
              >
                Our Story
              </Text>
            </Flex>

            <Heading
              color="brand.blue"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
            >
              Shaping the Future of{" "}<br></br>
              <Text as="span" bgGradient="linear(to-r, green.400, blue.500)" bgClip="text">
                Oil Refining
              </Text>
            </Heading>

            <Text
              color={'gray.600'}
              fontSize={{ base: 'md', md: 'lg' }}
              maxW="lg"
            >
              At Thirumala Industries, we specialize in advanced oil refining
              solutions that maximize efficiency, ensure product purity, and
              prioritize sustainability. Our commitment to innovation and
              reliability powers industries, supports communities, and drives a
              cleaner energy future.
            </Text>

            <Stack
              spacing={3}
              divider={<StackDivider borderColor="gray.200" />}
              pt={4}
            >
              <Feature
                icon={
                  <Icon as={GiFactory} color={'teal.500'} w={6} h={6} />
                }
                iconBg={'teal.100'}
                text={'Efficiency Optimization'}
              />
              <Feature
                icon={
                  <Icon as={GiOilDrum} color={'orange.500'} w={6} h={6} />
                }
                iconBg={'orange.100'}
                text={'Purity & Quality Assurance'}
              />
              <Feature
                icon={
                  <Icon as={GiRecycle} color={'green.500'} w={6} h={6} />
                }
                iconBg={'green.100'}
                text={'Sustainable Innovation'}
              />
            </Stack>
          </Stack>

          {/* Right Image */}
          <Flex bg="gray.50" justify="center">
            <Image
              rounded={'2xl'}
              // shadow="2xl"
              alt={'Oil Refining Plant'}
              src={
                '/assets/banners/thirumala_industries_oil.png'
              }
              objectFit={'cover'}
              maxH={{ base: '300px', md: '420px' }}
              _hover={{
                transform: 'scale(1.05)',
                transition: 'all 0.5s ease',
              }}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
