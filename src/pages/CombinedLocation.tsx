import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdRestaurant, MdLocalBar, MdPeople, MdCheckCircle } from 'react-icons/md';
import { motion } from 'framer-motion';
import { images } from '../data/images';

const MotionBox = motion(Box);

const CombinedLocation: React.FC = () => {
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
          bgImage={`url(${images.combinedLocation.hero})`}
          bgPosition="center"
          bgSize="cover"
          filter="brightness(0.6)"
        />
        <Container maxW="container.xl">
          <VStack spacing={6} align="flex-start" maxW="800px">
            <Heading 
              as="h1" 
              size="2xl"
              fontFamily="heading"
            >
              Three Unique Concepts, One Extraordinary Location
            </Heading>
            <Text fontSize="xl">
              Experience the complete vision of Chef Elias Taddesse in our new flagship location,
              featuring Mélange, Doro Soul Food, and Moya under one roof.
            </Text>
            <Button size="lg" colorScheme="gold">
              Join the Waitlist
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Concept Overview */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
            <VStack align="flex-start" spacing={8}>
              <Heading size="xl" fontFamily="heading">A New Dining Experience</Heading>
              <Text fontSize="lg">
                Our new combined location brings together the best of all three restaurants,
                creating a unique dining destination where you can explore the full range of
                Chef Elias Taddesse's culinary innovation. From Ethiopian-spiced gourmet burgers
                to soul food fusion and creative tacos, all complemented by a full-service bar.
              </Text>
              <List spacing={4}>
                <ListItem fontSize="lg">
                  <ListIcon as={MdRestaurant} color="brand.accent" />
                  Full menus from all three restaurants
                </ListItem>
                <ListItem fontSize="lg">
                  <ListIcon as={MdLocalBar} color="brand.accent" />
                  Craft cocktail bar featuring Ethiopian-inspired drinks
                </ListItem>
                <ListItem fontSize="lg">
                  <ListIcon as={MdPeople} color="brand.accent" />
                  Spacious dining room and private event spaces
                </ListItem>
              </List>
            </VStack>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={images.combinedLocation.interior}
                alt="Combined Restaurant Interior"
                rounded="lg"
                shadow="xl"
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Restaurant Features */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="white" p={8} rounded="lg" shadow="md">
              <VStack align="flex-start" spacing={4}>
                <Heading size="md" fontFamily="heading">Mélange Corner</Heading>
                <Text>
                  Our signature Ethiopian-spiced gourmet burgers and French-inspired dishes
                  in a dedicated space within the restaurant.
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Full burger menu
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    French-Ethiopian fusion specials
                  </ListItem>
                </List>
              </VStack>
            </Box>

            <Box bg="white" p={8} rounded="lg" shadow="md">
              <VStack align="flex-start" spacing={4}>
                <Heading size="md" fontFamily="heading">Doro Soul Food Station</Heading>
                <Text>
                  Ethiopian-infused soul food favorites in a comfortable, welcoming atmosphere.
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Classic soul food with Ethiopian twists
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Family-style dining options
                  </ListItem>
                </List>
              </VStack>
            </Box>

            <Box bg="white" p={8} rounded="lg" shadow="md">
              <VStack align="flex-start" spacing={4}>
                <Heading size="md" fontFamily="heading">Moya Taco Bar</Heading>
                <Text>
                  Creative Ethiopian-Mexican fusion tacos and small plates in a vibrant setting.
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Innovative fusion tacos
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Shareable appetizers
                  </ListItem>
                </List>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Bar Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={images.combinedLocation.bar}
                alt="Bar Area"
                rounded="lg"
                shadow="xl"
              />
            </MotionBox>
            <VStack align="flex-start" spacing={6}>
              <Heading size="xl" fontFamily="heading">The Bar</Heading>
              <Text fontSize="lg">
                Our full-service bar features craft cocktails inspired by Ethiopian flavors and
                spices, alongside a carefully curated wine list and local craft beers. The perfect
                spot to start your evening or wind down after dinner.
              </Text>
              <List spacing={4}>
                <ListItem fontSize="lg">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Ethiopian-inspired craft cocktails
                </ListItem>
                <ListItem fontSize="lg">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Curated wine selection
                </ListItem>
                <ListItem fontSize="lg">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Local craft beers
                </ListItem>
                <ListItem fontSize="lg">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Bar bites menu
                </ListItem>
              </List>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Coming Soon / Contact Section */}
      <Box py={20} bg="brand.primary" color="white">
        <Container maxW="container.xl">
          <VStack spacing={8} align="center" textAlign="center">
            <Heading size="xl" fontFamily="heading">Opening Soon</Heading>
            <Text fontSize="xl" maxW="600px">
              Be the first to experience our new combined location. Join our waitlist
              for exclusive updates and opening day information.
            </Text>
            <Button size="lg" colorScheme="gold">
              Join the Waitlist
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default CombinedLocation;
