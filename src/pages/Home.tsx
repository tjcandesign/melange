import React from 'react';
import { Box, Container, Heading, Text, Button, SimpleGrid, Image, VStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import RestaurantCard from '../components/RestaurantCard';
import { images } from '../data/images';

const MotionBox = motion(Box);

const Home: React.FC = () => {
  const restaurants = [
    {
      name: "Mélange",
      description: "DC's acclaimed restaurant where Ethiopian spices meet French culinary precision in every handcrafted burger",
      image: "/images/Melange-card.png"
    },
    {
      name: "Doro Soul Food",
      description: "Soul food reimagined through Ethiopian traditions, bringing warmth to every plate",
      image: "/images/Doro-card.png"
    },
    {
      name: "Moya",
      description: "Ethiopian flavors meet Mexican traditions, creating a fresh take on tacos",
      image: "/images/Moya-card.png"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        h={{ base: '100vh', md: '90vh' }} 
        position="relative" 
        color="white"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="-2"
          overflow="hidden"
        >
          <Image
            src="/images/Elias_hero.jpg"
            alt="Chef Elias"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
        {/* Dark Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.4)"
          zIndex="-1"
          sx={{
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
              backgroundSize: '20px 20px',
            }
          }}
        />
        {/* Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="-1"
          bgGradient={`linear(to-br, 
            rgba(34, 93, 148, 0.8),
            rgba(34, 93, 148, 0.6)
          )`}
        />
        <Container maxW="container.xl" h="100%" display="flex" alignItems="center">
          <VStack spacing={{ base: 12, md: 10 }} align="flex-start" maxW="800px">
            <Heading
              as="h1"
              fontSize={{ base: '4xl', sm: '4xl', md: '5xl', lg: 'var(--chakra-fontSizes-6xl)' }}
              color="white"
              fontFamily="heading"
            >
              Where Ethiopian Heritage Shapes Modern American Dining
            </Heading>
            <Text fontSize={{ base: 'xl', sm: 'xl', md: '2xl' }} fontFamily="Inter">
              From Ethiopia to DC, Michelin-starred Chef Elias Taddesse brings his heritage
              and classical training to create memorable dining experiences
            </Text>
            <Button
              as={RouterLink}
              to="/chef-elias"
              size="lg"
              colorScheme="gold"
              variant="outline"
              fontFamily="mono"
              textTransform="uppercase"
              fontWeight="bold"
              letterSpacing="wide"
            >
              Learn More About Chef Elias →
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Restaurant Concepts Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <VStack spacing={6} mb={16}>
            <Heading textAlign="left" fontFamily="heading" size="2xl">
              Our Restaurant Concepts
            </Heading>
            <Text textAlign="left" fontSize="xl" fontFamily="Inter" maxW="container.md" color="gray.600">
              Three distinct restaurants where Ethiopian traditions meet American favorites
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full" alignItems="stretch">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.name}
                name={restaurant.name}
                description={restaurant.description}
                image={restaurant.image}

              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Chef Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Image
                src="/images/elias_melange.jpg"
                alt="Chef Elias Taddesse"
                rounded="lg"
                shadow="lg"
              />
            </Box>
            <VStack align="flex-start" spacing={6}>
              <Heading fontFamily="heading">Meet Chef Elias Taddesse</Heading>
              <Text fontSize="lg" fontFamily="Inter">
                Ethiopian-born and French-trained, Chef Elias Taddesse brings his Michelin-starred 
                expertise to create an unprecedented fusion of flavors. Through his acclaimed DC restaurant 
                Mélange and new ventures Doro Soul Food and Moya, he masterfully blends Ethiopian heritage 
                with diverse culinary traditions, creating unique dining experiences that celebrate both 
                innovation and tradition.
              </Text>
              <Button
                as={RouterLink}
                to="/chef-elias"
                variant="solid"
                colorScheme="gold"
                fontFamily="mono"
                textTransform="uppercase"
                fontWeight="bold"
                letterSpacing="wide"
                borderRadius="full"
              >
                Read Full Bio
              </Button>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
