"use client";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Button,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Badge,
  ScaleFade,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaRecycle,
  FaOilCan,
  FaTrash,
  FaIndustry,
  FaLaptop,
  FaShip,
  FaExclamationTriangle,
  FaArrowRight,
  FaLeaf,
  FaFlask,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface Service {
  title: string;
  short: string;
  full: string;
  icon: IconType;
  category?: string;
}

const services: Service[] = [
  {
    title: "Waste Oil Disposal",
    short: "Safe and eco-friendly disposal of industrial and automotive waste oils.",
    full: "Our waste oil disposal service ensures that hazardous oils are collected and managed responsibly. By using advanced technology, we prevent contamination of soil and water, helping industries maintain compliance while reducing their environmental footprint. We follow government-approved guidelines to ensure maximum safety and sustainability.",
    icon: FaOilCan,
    category: "Oil Management",
  },
  {
    title: "Waste Oil Recycling",
    short: "Transforming waste oil into reusable industrial fuel for sustainability.",
    full: "Instead of discarding valuable resources, our recycling process refines waste oil into reusable products such as lubricants and industrial fuel. This circular approach reduces dependency on fresh resources, minimizes waste, and contributes to a greener economy. Our recycling solutions are efficient, cost-effective, and eco-friendly.",
    icon: FaRecycle,
    category: "Oil Management",
  },
  {
    title: "Used Oil Disposal",
    short: "Compliant disposal of used oil generated from industries and workshops.",
    full: "We offer secure disposal of used oils from automobiles, workshops, and factories. By following environmental regulations, we ensure that oils containing contaminants such as heavy metals or chemicals are safely treated and disposed of. This helps prevent toxic leaks and protects local communities and ecosystems.",
    icon: FaTrash,
    category: "Oil Management",
  },
  {
    title: "Used Oil Recycler",
    short: "Recovering valuable energy resources from used oil streams.",
    full: "Our used oil recycling solutions refine old oil into usable products, lowering industrial energy costs and reducing the carbon footprint. This process helps businesses adopt sustainable practices while contributing to resource conservation and circular economy principles.",
    icon: FaIndustry,
    category: "Oil Management",
  },
  {
    title: "E-Waste Recycler",
    short: "Sustainable recycling of electronic waste with zero landfill approach.",
    full: "We specialize in recycling discarded electronics including computers, mobile phones, and industrial equipment. Our certified process extracts reusable metals and components, reduces landfill burden, and ensures environmentally safe handling of toxic substances such as lead and mercury.",
    icon: FaLaptop,
    category: "E-Waste",
  },
  {
    title: "E-Waste Disposal",
    short: "Safe and compliant disposal of obsolete electronic devices.",
    full: "We manage e-waste disposal by dismantling and processing electronic products in compliance with government norms. This prevents harmful elements from entering the ecosystem while ensuring sensitive data security through safe destruction of digital components.",
    icon: FaTrash,
    category: "E-Waste",
  },
  {
    title: "Hazardous Waste Recycler",
    short: "Recycling hazardous materials to recover usable resources.",
    full: "Our team provides advanced solutions for recycling hazardous waste including chemicals, solvents, and industrial by-products. By extracting reusable components, we reduce both disposal costs and environmental damage, supporting industries in their sustainability goals.",
    icon: FaRecycle,
    category: "Hazardous Waste",
  },
  {
    title: "Hazardous Waste Disposal",
    short: "Safe and certified disposal of dangerous industrial waste materials.",
    full: "Our hazardous waste disposal service ensures strict compliance with environmental and safety regulations. Using specialized treatment and containment systems, we prevent harmful substances from polluting soil, air, or water, thereby protecting public health and the environment.",
    icon: FaExclamationTriangle,
    category: "Hazardous Waste",
  },
  {
    title: "Hazardous Waste Disposal for Ships",
    short: "Specialized waste management solutions for maritime industries.",
    full: "We provide ship-specific hazardous waste disposal, including oils, sludge, chemicals, and other marine pollutants. Our marine waste solutions comply with IMO and MARPOL standards, ensuring that shipping companies operate sustainably and avoid penalties while protecting marine ecosystems.",
    icon: FaShip,
    category: "Maritime",
  },
  {
    title: "Spent Solvent Management",
    short: "Safe collection, treatment, and recycling of spent solvents using EST and TNPCB-compliant systems.",
    full: "Spent solvents are used or contaminated solvents from industries like paints, pharmaceuticals, electronics, and printing that can no longer serve their original purpose. They often contain flammable, toxic, or corrosive compounds, requiring specialized handling. At Atlas Corporation, we provide comprehensive spent solvent management, including safe collection in sealed MS barrels or IBCs, recovery through fractional distillation, and waste-to-energy co-processing for non-recyclable residues. Our TNPCB and CPCB-compliant processes ensure zero discharge, full documentation support, and sustainable recycling practices, helping industries prevent contamination, reduce fire risks, and operate in an eco-friendly and legally compliant manner.",
    icon: FaFlask,
    category: "Spent Solvent",
  },
];

export default function ServicesSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
  "All",
  "Oil Management",
  "E-Waste",
  "Hazardous Waste",
  "Maritime",
  "Spent Solvent",
];


  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    onOpen();
  };

  return (
    <Box py={20} px={{ base: 4, md: 8 }} id="services" bg="white">
      <Container maxW="7xl">
        {/* Heading */}
        <Box textAlign="center" mb={16}>
          <Flex justify="center" >
            <Box
              p={3}
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
            Our Services
          </Text>

          <Heading
            color="brand.blue"
            mb={4}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
          >
            Environmental Solutions for a{" "}
            <Text as="span" bgGradient="linear(to-r, green.400, blue.500)" bgClip="text">
              Sustainable Future
            </Text>
          </Heading>

          <Text maxW="2xl" mx="auto" fontSize="lg" color="gray.700" mb={10}>
            We provide sustainable waste management solutions across India, helping industries,
            businesses, and maritime operators reduce their environmental footprint while staying
            compliant.
          </Text>

          {/* Category Filter */}
          <Flex justify="center" wrap="wrap" gap={3} mb={12}>
            {categories.map((category) => (
              <Button
                key={category}
                size="md"
                rounded="full"
                px={6}
                variant="outline"
                borderColor={activeCategory === category ? "brand.warning" : "brand.accent"}
                color={activeCategory === category ? "brand.warning" : "brand.accent"}
                _hover={{
                  bg: "brand.warning",
                  color: "brand.backgroundLight",
                }}
                onClick={() => setActiveCategory(category)}
                transition="all 0.3s"
                leftIcon={
                  category === "All" ? (
                    <Icon as={FaLeaf} />
                  ) : category === "Oil Management" ? (
                    <Icon as={FaOilCan} />
                  ) : category === "E-Waste" ? (
                    <Icon as={FaLaptop} />
                  ) : category === "Hazardous Waste" ? (
                    <Icon as={FaExclamationTriangle} />
                  ) : category === "Maritime" ? (
                    <Icon as={FaShip} />
                  ) : (
                    <Icon as={FaFlask} />
                  )
                }
              >
                {category}
              </Button>
            ))}
          </Flex>
        </Box>

        {/* Service Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {filteredServices.map((service, index) => (
            <ScaleFade in={true} initialScale={0.9} key={index}>
              <Card
                borderRadius="2xl"
                boxShadow="lg"
                bg="white"
                border="1px solid"
                borderColor="brand.redLight"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
                height="100%"
                display="flex"
                flexDirection="column"
              >
                <CardHeader pb={4}>
                  <Flex align="center" gap={3}>
                    <Box p={4} borderRadius="lg" color="brand.blue" display="flex" justifyContent="center" alignItems="center">
                      <Icon as={service.icon} boxSize={10} />
                    </Box>
                    <Text fontWeight="bold" color="brand.blue" fontSize="xl">
                      {service.title}
                    </Text>
                  </Flex>
                  <Badge
                    mt={3}
                    colorScheme={
                      service.category === "Oil Management"
                        ? "blue"
                        : service.category === "E-Waste"
                        ? "purple"
                        : service.category === "Hazardous Waste"
                        ? "red"
                        : service.category === "Maritime"
                        ? "teal"
                        : "orange"
                    }
                    variant="solid"
                    rounded="full"
                    px={3}
                    py={1}
                  >
                    {service.category}
                  </Badge>
                </CardHeader>

                <CardBody flex="1" pt={0}>
					<Text mb={6} color="gray.600">
					{service.short}
					</Text>

					<Button
						width="100%"
						variant="solid"
						bg="brand.blue"            
						color="white"               
						border="2px solid"
						borderColor="brand.accent"
						onClick={() => handleOpenModal(service)}
						rightIcon={<Icon as={FaArrowRight} />}
						size="md"
						mt="auto"
						_hover={{
							// bg: "brand.blue",
							borderColor: "brand.blue",
							color: "white",
						}}
						transition="all 0.2s"
						>
						Learn More
					</Button>
                </CardBody>
              </Card>
            </ScaleFade>
          ))}
        </SimpleGrid>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered motionPreset="scale">
          <ModalOverlay bg="blackAlpha.400" backdropFilter="blur(8px)" />
          <ModalContent borderRadius="2xl" overflow="hidden" bg="white">
            {selectedService && (
              <>
                <ModalHeader pt={6}>
                  <Flex align="center" gap={3}>
                    <Icon as={selectedService.icon} color="brand.warning" boxSize={6} />
                    <Text color="brand.blue" fontSize="2xl" fontWeight="bold">
                      {selectedService.title}
                    </Text>
                    <Badge
                      colorScheme={
                        selectedService.category === "Oil Management"
                          ? "blue"
                          : selectedService.category === "E-Waste"
                          ? "purple"
                          : selectedService.category === "Hazardous Waste"
                          ? "red"
                          : selectedService.category === "Maritime"
                          ? "teal"
                          : "orange"
                      }
                      variant="solid"
                      rounded="full"
                      px={3}
                      py={1}
                    >
                      {selectedService.category}
                    </Badge>
                  </Flex>
                </ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                  <Text color="gray.700" mb={6}>
                    {selectedService.full}
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button
                    mr={3}
                    onClick={onClose}
                    variant="outline"
                    borderColor="brand.accent"
                    color="brand.accent"
                    _hover={{
                      borderColor: "brand.red",
                      color: "brand.red",
                    }}
                  >
                    Close
                  </Button>
                  <Button
                    variant="outline"
                    borderColor="brand.warning"
                    color="brand.warning"
                    _hover={{
                      borderColor: "brand.blue",
                      color: "brand.blue",
                    }}
                  >
                    Contact Us
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}
