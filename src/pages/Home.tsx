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
      description: "DC's acclaimed restaurant featuring Ethiopian-spiced gourmet burgers crafted with French culinary techniques",
      image: images.melange.hero
    },
    {
      name: "Doro Soul Food",
      description: "Traditional American soul food infused with Ethiopian flavors, from Michelin-starred Chef Elias Taddesse",
      image: images.doro.hero
    },
    {
      name: "Moya",
      description: "Ethiopian-inspired tacos and innovative fusion cuisine that bridges cultures through flavor",
      image: images.moya.hero
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        h="90vh" 
        position="relative" 
        bgGradient="linear(to-b, rgba(0,0,0,0.7), rgba(0,0,0,0.5))"
        color="white"
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
        <Container maxW="container.xl" h="100%" display="flex" alignItems="center">
          <VStack spacing={6} align="flex-start" maxW="600px">
            <Heading 
              as="h1" 
              size="2xl" 
              fontFamily="heading"
            >
              Where Ethiopian Heritage Meets Culinary Innovation
            </Heading>
            <Text fontSize="xl">
              Experience the unique fusion of Ethiopian flavors with modern American cuisine,
              crafted by Michelin-starred Chef Elias Taddesse
            </Text>
            <Button size="lg" colorScheme="gold">
              Make a Reservation
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Restaurant Concepts Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={12} fontFamily="heading">
            Our Restaurant Concepts
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
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
              <Text fontSize="lg">
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
