import React from 'react';
import { Box, Container, Heading, Text, Image, VStack, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { images } from '../data/images';

const MotionBox = motion(Box);

const ChefElias: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        h="70vh" 
        position="relative" 
        bgGradient="linear(to-b, rgba(0,0,0,0.7), rgba(0,0,0,0.5))"
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
          bgImage="url('/images/hero.jpg')"
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
            >
              Chef Elias Taddesse
            </Heading>
            <Text fontSize="2xl">
              Ethiopian-born, French-trained Michelin-starred Chef
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Biography Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="start">
            <VStack align="flex-start" spacing={8}>
              <Heading size="xl" fontFamily="heading">About Chef Elias</Heading>
              <Text fontSize="lg" lineHeight="tall">
                Born in Ethiopia and classically trained in France, Chef Elias Taddesse earned a Michelin star
                before establishing his restaurants in Washington DC. His first venture, Mélange, opened in 2020,
                earning him recognition as Eater DC's Chef of the Year in 2021. His continued excellence led to
                a James Beard Foundation's Emerging Chef of the Year semi-finalist nomination in 2023 and
                a RAMMYs Rising Culinary Star of the Year finalist position in 2022.
              </Text>
              <Text fontSize="lg" lineHeight="tall">
                Chef Elias refined his craft under renowned chefs in France before earning a Michelin
                star as head chef at Caviar Russe in New York City. At Mélange, he continues this
                dedication to excellence, crafting dishes that honor both his Ethiopian heritage and
                classical training.
              </Text>
            </VStack>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/Chef-Elias-Taddesse-of-Melange-and-Doro-Soul-Food.jpeg"
                alt="Chef Elias Taddesse"
                rounded="lg"
                shadow="xl"
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Journey Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              order={{ base: 2, md: 1 }}
            >
              <Image
                src="/images/Chef-Elias-Taddesse.jpg"
                alt="Chef Elias cooking"
                rounded="lg"
                shadow="xl"
              />
            </MotionBox>
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
          <VStack spacing={12} align="center">
            <Heading size="xl" fontFamily="heading">Accolades & Recognition</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <Box p={8} bg="white" rounded="lg" shadow="md">
                <VStack spacing={4}>
                  <Text fontWeight="bold" fontSize="lg">James Beard Foundation</Text>
                  <Text>Semi-finalist for Emerging Chef of the Year 2023</Text>
                </VStack>
              </Box>
              <Box p={8} bg="white" rounded="lg" shadow="md">
                <VStack spacing={4}>
                  <Text fontWeight="bold" fontSize="lg">RAMMYs</Text>
                  <Text>Finalist for Rising Culinary Star of the Year 2022</Text>
                </VStack>
              </Box>
              <Box p={8} bg="white" rounded="lg" shadow="md">
                <VStack spacing={4}>
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
