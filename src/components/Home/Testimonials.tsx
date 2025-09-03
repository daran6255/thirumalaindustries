'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props
  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props
  return (
    <Stack
      bg="white"
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      boxShadow="lg"
      p={8}
      rounded="xl"
      align="center"
      pos="relative"
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: 'white',
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{ transform: 'translateY(-5px)', boxShadow: '2xl' }}
    >
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props
  return (
    <Heading
      as="h3"
      fontSize={{ base: 'md', md: 'lg' }}
      color="brand.main"
      textAlign="center"
    >
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props
  return (
    <Text
      textAlign="center"
      color="brand.blueLight"
      fontSize={{ base: 'sm', md: 'md' }}
      mt={4}
    >
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({ company }: { company: string }) => {
  return (
    <Flex align="center" mt={8} direction="column">
      <Avatar
        name={company}
        mb={2}
        size="lg"
        border="2px solid"
        borderColor="brand.main"
      />
      <Text fontWeight={600} color="white">
        {company}
      </Text>
    </Flex>
  )
}

export default function TestimonialSection() {
  return (
    <Box bg="brand.blue">
      <Container maxW="7xl" py={16} as={Stack} spacing={12}>
        <Stack spacing={4} align="center">
        <Heading
          color="brand.backgroundLight"
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          lineHeight="shorter"
          textAlign="center"
        >
          What Our{' '}
          <Text
            as="span"
            bgGradient="linear(to-r, green.400, blue.500)"
            bgClip="text"
          >
            Clients Say
          </Text>
        </Heading>
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            color={'whiteAlpha.800'}
            textAlign="center"
          >
            We are proud to collaborate with industry leaders, delivering
            excellence, innovation, and sustainable solutions.
          </Text>
        </Stack>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 6, lg: 10 }}
          justify="center"
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Seamless Operations</TestimonialHeading>
              <TestimonialText>
                Partnering with this team streamlined our refining processes,
                enhanced efficiency, and reduced downtime significantly.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar company="CAT" />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Sustainable Innovation</TestimonialHeading>
              <TestimonialText>
                Their eco-friendly solutions helped us align with global energy
                standards while cutting emissions and costs.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar company="IL&FS Energy" />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Reliable Partnership</TestimonialHeading>
              <TestimonialText>
                The expertise and commitment they bring have made them a trusted
                partner in our industrial projects.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar company="BHEL" />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
