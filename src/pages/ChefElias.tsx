import React from 'react';
import { Box, Container, Heading, Text, VStack, UnorderedList, ListItem, Image, SimpleGrid, HStack, Icon } from '@chakra-ui/react';
import { HiLocationMarker } from 'react-icons/hi';

const ChefElias: React.FC = () => {
  return (
    <Box as="main">
      {/* Hero Section */}
      <Box
        h={{ base: '100vh', md: '90vh' }}
        position="relative"
        color="white"
        display="flex"
        alignItems="center"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="-1"
          bgImage="url('/images/Elias_hero.jpg')"
          bgPosition="center"
          bgSize="cover"
          filter="brightness(0.6)"
        />
        <Container maxW="container.xl">
          <VStack spacing={6} align="flex-start" maxW="800px">
            <Heading 
              as="h1" 
              size="4xl"
              fontFamily="heading"
              color="white"
              mb={4}
            >
              Chef Elias Taddesse
            </Heading>
            <Text fontSize="2xl" color="white" pb={50}>
              Ethiopian-born, French-trained Michelin-starred chef bringing innovative fusion cuisine to Washington DC
              through his acclaimed restaurants Mélange, Doro Soul Food, and Moya.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Biography Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="flex-start" w="full">
            <Box w="full">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full" alignItems="center">
                <VStack spacing={6} align="flex-start" maxW="container.sm" justify="center">
                  <Box maxW="520px" mb={4}>
                    <Heading as="h2" size="xl">
                      Elias's Career Highlights
                    </Heading>
                  </Box>
                  <Text fontSize="lg">
                    Chef Elias's distinguished career includes earning a Michelin star as head chef at Caviar Russe in New York City.
                    His entrepreneurial journey in DC began with a pop-up at Neal Place Tap & Garden in 2016, followed by the
                    successful Salt n' Pepper Burgers pop-up at Harvey's Market.
                  </Text>
                  <Text fontSize="lg">
                    In 2020, he opened Mélange, DC's acclaimed restaurant featuring Ethiopian-spiced gourmet burgers with French techniques.
                    Following its success, he launched Doro Soul Food in October 2022, offering traditional American soul food infused with
                    Ethiopian flavors. His latest venture, Moya, brings Ethiopian-inspired tacos and fusion cuisine to the DC food scene.
                  </Text>
                </VStack>
                <Box>
                  <Image
                    src="/images/Chef-Elias-Taddesse.jpg"
                    alt="Chef Elias cooking"
                    rounded="lg"
                    shadow="lg"
                    w="full"
                    h="auto"
                    objectFit="cover"
                  />
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>
      {/* Journey Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
            <Box order={{ base: 2, md: 1 }}>
              <Image
                src="/images/elias_melange.jpg"
                alt="Chef Elias at Mélange"
                rounded="lg"
                shadow="xl"
                h="auto"
                w="full"
              />
            </Box>
            <VStack align="flex-start" spacing={8} order={{ base: 1, md: 2 }} maxW="510px">
              <Heading size="xl" fontFamily="heading">A DC Culinary Journey</Heading>
              <VStack spacing={8} align="stretch" w="full">
                <Text fontSize="lg" lineHeight="tall">
                  Chef Elias's DC journey began in 2016 with a pop-up at Neal Place Tap & Garden.
                  His passion for crafting the perfect burger led to Salt n' Pepper Burgers at
                  Harvey's Market in Union Market. This evolved into Mélange at Wet Dog Tavern
                  before finding its permanent home in 2020. Building on this success, he opened
                  Doro Soul Food in 2022, bringing Ethiopian warmth to American soul food classics.
                </Text>

                {/* Timeline */}
                <Box
                  position="relative"
                  pl={8}
                  _before={{
                    content: '""',
                    position: 'absolute',
                    left: '6px',
                    top: '0',
                    bottom: '0',
                    width: '0',
                    borderLeft: '2px dashed',
                    borderColor: 'gray.200',
                    zIndex: 1
                  }}
                >
                  <VStack spacing={8} align="stretch">
                    <Box position="relative">
                      <Box
                        position="absolute"
                        left={0}
                        w="12px"
                        h="12px"
                        borderRadius="full"
                        bg="brand.primary"
                        zIndex={2}
                      />
                      <HStack align="flex-start" spacing={{ base: 2, md: 3 }} flexWrap="wrap" pl={4}>
                        <Text fontFamily="Courier New" fontWeight="bold">2016</Text>
                        <Text>- Elias wins a burger challenge by a 13-1 vote</Text>
                      </HStack>
                    </Box>

                    <Box position="relative">
                      <Box
                        position="absolute"
                        left={0}
                        w="12px"
                        h="12px"
                        borderRadius="full"
                        bg="brand.primary"
                        zIndex={2}
                      />
                      <HStack align="flex-start" spacing={{ base: 2, md: 3 }} flexWrap="wrap" pl={4}>
                        <Text fontFamily="Courier New" fontWeight="bold">2016</Text>
                        <HStack flexWrap="wrap">
                          <Text>- Salt n' Pepper Burgers Pop-up</Text>
                          <Icon as={HiLocationMarker} color="brand.primary" />
                          <Text color="brand.primary">Harvey's Market</Text>
                        </HStack>
                      </HStack>
                    </Box>

                    <Box position="relative">
                      <Box
                        position="absolute"
                        left={0}
                        w="12px"
                        h="12px"
                        borderRadius="full"
                        bg="brand.primary"
                        zIndex={2}
                      />
                      <HStack align="flex-start" spacing={{ base: 2, md: 3 }} flexWrap="wrap" pl={4}>
                        <Text fontFamily="Courier New" fontWeight="bold" color="brand.primary">2017</Text>
                        <HStack flexWrap="wrap">
                          <Text>- Mélange Opens at Wet Dog Tavern</Text>
                          <Icon as={HiLocationMarker} color="brand.primary" />
                          <Text color="brand.primary">U Street</Text>
                        </HStack>
                      </HStack>
                    </Box>

                    <Box position="relative">
                      <Box
                        position="absolute"
                        left={0}
                        w="12px"
                        h="12px"
                        borderRadius="full"
                        bg="brand.primary"
                        zIndex={2}
                      />
                      <HStack align="flex-start" spacing={{ base: 2, md: 3 }} flexWrap="wrap" pl={4}>
                        <Text fontFamily="Courier New" fontWeight="bold" color="brand.primary">2020</Text>
                        <Text>- Mélange moves to new home</Text>
                        <HStack flexWrap="wrap">
                          <Icon as={HiLocationMarker} color="brand.primary" />
                          <Text color="brand.primary">9th St NW</Text>
                        </HStack>
                      </HStack>
                    </Box>

                    <Box position="relative">
                      <Box
                        position="absolute"
                        left={0}
                        w="12px"
                        h="12px"
                        borderRadius="full"
                        bg="brand.primary"
                        zIndex={2}
                      />
                      <HStack align="flex-start" spacing={{ base: 2, md: 3 }} flexWrap="wrap" pl={4}>
                        <Text fontFamily="Courier New" fontWeight="bold">2022</Text>
                        <Text>- Doro Soul Food opens</Text>
                      </HStack>
                    </Box>

                    <Box position="relative">
                      <Box
                        position="absolute"
                        left={0}
                        w="12px"
                        h="12px"
                        borderRadius="full"
                        bg="brand.primary"
                        zIndex={2}
                      />
                      <HStack align="flex-start" spacing={{ base: 2, md: 3 }} flexWrap="wrap" pl={4}>
                        <Text fontFamily="Courier New" fontWeight="bold">2025</Text>
                        <Text>- Melange Inc. opens including a new concept Moya</Text>
                      </HStack>
                    </Box>
                  </VStack>
                </Box>
              </VStack>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Accolades Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="flex-start" w="full" pb={150}>
            <Box maxW="520px">
              <Heading size="xl" fontFamily="heading">Accolades & Recognition</Heading>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <Box p={6} bg="white" rounded="lg" shadow="md" minH="200px">
                <VStack spacing={3} align="flex-start" w="full">
                  <Box h="60px" w="full" display="flex" alignItems="center">
                    <Image
                      src="/images/press mentions/jamesbeardfoundation.png"
                      alt="James Beard Foundation"
                      maxH="50px"
                      objectFit="contain"
                    />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg">James Beard Foundation</Text>
                  <Text>Semi-finalist for Emerging Chef of the Year 2023</Text>
                </VStack>
              </Box>
              <Box p={6} bg="white" rounded="lg" shadow="md" minH="200px">
                <VStack spacing={3} align="flex-start" w="full">
                  <Box h="60px" w="full" display="flex" alignItems="center">
                    <Image
                      src="/images/press mentions/rammys.png"
                      alt="RAMMYs"
                      maxH="50px"
                      objectFit="contain"
                    />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg">RAMMYs</Text>
                  <Text>Finalist for Rising Culinary Star of the Year 2022</Text>
                </VStack>
              </Box>
              <Box p={6} bg="white" rounded="lg" shadow="md" minH="200px">
                <VStack spacing={3} align="flex-start" w="full">
                  <Box h="60px" w="full" display="flex" alignItems="center">
                    <Image
                      src="/images/press mentions/eaterawards.png"
                      alt="Eater DC"
                      maxH="50px"
                      objectFit="contain"
                    />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg">Eater DC</Text>
                  <Text>Chef of the Year 2021</Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default ChefElias;
