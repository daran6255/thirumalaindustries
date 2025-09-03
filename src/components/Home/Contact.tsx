'use client'

import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'

type ContactItem =
  | {
      icon: typeof MdLocationOn | typeof MdAccessTime
      title: string
      content: string
      link?: undefined
      color: string
    }
  | {
      icon: typeof MdPhone
      title: string
      content: string[]
      link: string[]
      color: string
    }
  | {
      icon: typeof MdEmail
      title: string
      content: string
      link: string
      color: string
    }

export default function ContactSection() {
  const contactItems: ContactItem[] = [
    {
      icon: MdLocationOn,
      title: 'Operational Address',
      content:
        'No:78, SIDCO Industrial Estate, Salem Bypass, Vennaimalai (po), Karur - 639006',
      color: 'red.400',
    },
    {
      icon: MdPhone,
      title: 'Phone',
      content: ['+91 77080 05322', '+91 81444 26660'],
      link: ['tel:+917708005322', 'tel:+918144426660'],
      color: 'teal.300',
    },
    {
      icon: MdEmail,
      title: 'Email',
      content: 'thirumalaindustrieskarur@gmail.com',
      link: 'mailto:thirumalaindustrieskarur@gmail.com',
      color: 'yellow.400',
    },
    {
      icon: MdAccessTime,
      title: 'Timing',
      content: 'Monday - Saturday: 9:00 AM - 6:00 PM',
      color: 'blue.300',
    },
  ]

  return (
    <Box bg="brand.blue" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        {/* Section Heading */}
        <Stack spacing={4} align="center" mb={12}>
          <Heading color="white" fontSize={{ base: '3xl', md: '4xl' }}>
            Contact Us
          </Heading>
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: 'sm', md: 'md' }}
            textAlign="center"
          >
            Reach out to us for any inquiries, support, or collaborations. We’re
            here to help.
          </Text>
        </Stack>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 16 }}
          align="start"
        >
          {/* Contact Info */}
          <VStack spacing={6} align="stretch" flex={1}>
            {contactItems.map((item, idx) => (
              <HStack
                key={idx}
                spacing={4}
                p={4}
                bg="whiteAlpha.100"
                rounded="xl"
                _hover={{
                  bg: 'whiteAlpha.200',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease',
                }}
                align="start"
              >
                <Icon as={item.icon} w={6} h={6} color={item.color} mt={1} />
                <VStack align="start" spacing={1}>
                  <Text fontWeight={600} color="white">
                    {item.title}
                  </Text>

                  {/* Handle multiple vs single vs no link */}
                  {Array.isArray(item.content) && Array.isArray(item.link) ? (
                    item.content.map((num, i) =>
                      item.link && item.link[i] ? (
                        <Link key={i} href={item.link[i]} color="whiteAlpha.900">
                          {num}
                        </Link>
                      ) : (
                        <Text key={i} color="whiteAlpha.900">
                          {num}
                        </Text>
                      )
                    )
                  ) : typeof item.link === 'string' ? (
                    <Link href={item.link} color="whiteAlpha.900">
                      {item.content}
                    </Link>
                  ) : (
                    <Text color="whiteAlpha.900">{item.content}</Text>
                  )}
                </VStack>
              </HStack>
            ))}
          </VStack>

          {/* Map */}
          <Box
            flex={1}
            h={{ base: '300px', md: '400px' }}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="xl"
            _hover={{ transform: 'scale(1.01)', transition: 'all 0.3s ease' }}
          >
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5178119667307!2d78.06151037570508!3d10.99972215503396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2e89ea25193f%3A0xf5b47222779bbb10!2sTHIRUMALA%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1756837483060!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
