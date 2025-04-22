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
      logo: "/images/melange-logo.png"
    },
    {
      name: "Doro Soul Food",
      description: "Soul food reimagined through Ethiopian traditions, bringing warmth to every plate",
      logo: "/images/doro-logo.png"
    },
    {
      name: "Moya",
      description: "Ethiopian flavors meet Mexican traditions, creating a fresh take on tacos",
      logo: "/images/moya-logo.png"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        h="90vh" 
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
          bgImage="url('/images/Elias_hero.jpg')"
          bgPosition="center"
          bgSize="cover"
        />
        {/* Dark Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.4)"
          zIndex="-1"
        />
        {/* Creative Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="-1"
          bgGradient={`linear(to-br, 
            rgba(34, 93, 148, 0.85), 
            rgba(34, 93, 148, 0.4), 
            rgba(34, 93, 148, 0.7)
          )`}
          transform="skewY(-12deg)"
          transformOrigin="top left"
        />
        <Box
          position="absolute"
          top="0"
          left="-10%"
          right="-10%"
          bottom="0"
          zIndex="-1"
          bgGradient={`linear(to-l, 
            rgba(34, 93, 148, 0.3), 
            rgba(34, 93, 148, 0.6), 
            rgba(34, 93, 148, 0.2)
          )`}
          transform="skewX(-12deg)"
          transformOrigin="bottom right"
        />
        <Container maxW="container.xl" h="100%" display="flex" alignItems="center">
          <VStack spacing={6} align="flex-start" maxW="600px">
            <Heading 
              as="h1" 
              size="4xl" 
              fontFamily="heading"
            >
              Where Ethiopian Heritage Shapes Modern American Dining
            </Heading>
            <Text fontSize="xl" fontFamily="Inter">
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
            >
              Learn More About Chef Elias
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Restaurant Concepts Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <VStack spacing={6} mb={16}>
            <Heading textAlign="center" fontFamily="heading" size="2xl">
              Our Restaurant Concepts
            </Heading>
            <Text textAlign="center" fontSize="xl" fontFamily="Inter" maxW="container.md" color="gray.600">
              Three distinct restaurants where Ethiopian traditions meet American favorites
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="container.xl" mx="auto">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.name}
                name={restaurant.name}
                description={restaurant.description}
                logo={restaurant.logo}
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
                variant="outline"
                colorScheme="gold"
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
