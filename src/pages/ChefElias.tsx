import React from 'react';
import { Box, Container, Heading, Text, VStack, UnorderedList, ListItem, Image, SimpleGrid } from '@chakra-ui/react';

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
            <Text fontSize="2xl" color="white">
              Ethiopian-born, French-trained Michelin-starred chef bringing innovative fusion cuisine to Washington DC
              through his acclaimed restaurants Mélange, Doro Soul Food, and Moya.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Biography Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="flex-start" maxW="container.lg">
            <Box>
              <Heading as="h2" size="xl" mb={4}>
                Career Highlights
              </Heading>
              <VStack spacing={4} align="flex-start">
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
            </Box>

            <Box>
              <Heading as="h2" size="xl" mb={4}>
                Recent Accolades
              </Heading>
              <UnorderedList spacing={2} fontSize="lg" styleType="none" ml={0}>
                <ListItem>• Semi-finalist for James Beard Foundation's Emerging Chef of the Year 2023</ListItem>
                <ListItem>• Finalist for RAMMY's Rising Culinary Star of the Year 2022</ListItem>
                <ListItem>• Eater DC's Chef of the Year 2021</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="xl" mb={4}>
                Culinary Philosophy
              </Heading>
              <Text fontSize="lg">
                Chef Elias uses food to delight people and tell stories with every ingredient. His unique approach combines
                his Ethiopian heritage with French culinary techniques, creating innovative fusion cuisine that bridges cultures
                and delivers memorable dining experiences across his three distinct restaurant concepts.
              </Text>
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
                src="/images/Chef-Elias-Taddesse.jpg"
                alt="Chef Elias cooking"
                rounded="lg"
                shadow="xl"
              />
            </Box>
            <VStack align="flex-start" spacing={8} order={{ base: 1, md: 2 }}>
              <Heading size="xl" fontFamily="heading">Culinary Journey</Heading>
              <Text fontSize="lg" lineHeight="tall">
                Chef Elias's DC journey began in 2016 with a pop-up at Neal Place Tap & Garden.
                His passion for crafting the perfect burger led to Salt n' Pepper Burgers at
                Harvey's Market in Union Market. This evolved into Mélange at Wet Dog Tavern
                before finding its permanent home in 2020. Building on this success, he opened
                Doro Soul Food in 2022, bringing Ethiopian warmth to American soul food classics.
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Accolades Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="flex-start" w="full">
            <Heading size="xl" fontFamily="heading">Accolades & Recognition</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <Box p={8} bg="white" rounded="lg" shadow="md">
                <VStack spacing={4} align="flex-start" w="full">
                  <Image
                    src="/images/jamesbeardfoundation.png"
                    alt="James Beard Foundation"
                    h="60px"
                    objectFit="contain"
                  />
                  <Text fontWeight="bold" fontSize="lg">James Beard Foundation</Text>
                  <Text>Semi-finalist for Emerging Chef of the Year 2023</Text>
                </VStack>
              </Box>
              <Box p={8} bg="white" rounded="lg" shadow="md">
                <VStack spacing={4} align="flex-start" w="full">
                  <Image
                    src="/images/rammys.png"
                    alt="RAMMYs"
                    h="60px"
                    objectFit="contain"
                  />
                  <Text fontWeight="bold" fontSize="lg">RAMMYs</Text>
                  <Text>Finalist for Rising Culinary Star of the Year 2022</Text>
                </VStack>
              </Box>
              <Box p={8} bg="white" rounded="lg" shadow="md">
                <VStack spacing={4} align="flex-start" w="full">
                  <Image
                    src="/images/eaterawards.png"
                    alt="Eater DC"
                    h="60px"
                    objectFit="contain"
                  />
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
