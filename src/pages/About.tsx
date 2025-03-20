import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const About: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        h="60vh" 
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
          bgImage="url('/chef-kitchen.jpg')"
          bgPosition="center"
          bgSize="cover"
          filter="brightness(0.6)"
        />
        <Container maxW="container.xl">
          <Heading 
            as="h1" 
            size="2xl" 
            maxW="800px"
            fontFamily="heading"
          >
            Chef Elias Taddesse: Bridging Ethiopian Heritage with Modern American Cuisine
          </Heading>
        </Container>
      </Box>

      {/* Chef Bio Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="start">
            <Box>
              <Image
                src="/chef-portrait.jpg"
                alt="Chef Elias Taddesse"
                rounded="lg"
                shadow="xl"
                w="100%"
                h="auto"
              />
            </Box>
            <VStack align="flex-start" spacing={6}>
              <Heading size="xl" fontFamily="heading">The Journey</Heading>
              <Text fontSize="lg">
                From his roots in Ethiopia to earning Michelin recognition in some of the world's finest 
                kitchens, Chef Elias Taddesse's culinary journey is a testament to the power of 
                cultural fusion in modern cuisine.
              </Text>
              <Text fontSize="lg">
                As the owner of DC's acclaimed Mélange, Chef Taddesse has revolutionized the burger scene 
                by infusing Ethiopian spices with classic French techniques. His newest ventures, 
                Doro Soul Food and Moya, continue to push boundaries by reimagining traditional flavors 
                in exciting new contexts.
              </Text>
              <List spacing={4} pt={4}>
                <ListItem fontSize="lg">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Michelin-starred culinary background
                </ListItem>
                <ListItem fontSize="lg">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Ethiopian-born, French-trained expertise
                </ListItem>
                <ListItem fontSize="lg">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Pioneer in Ethiopian-American fusion cuisine
                </ListItem>
                <ListItem fontSize="lg">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Award-winning restaurant concepts
                </ListItem>
              </List>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Vision Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
            <VStack align="flex-start" spacing={6}>
              <Heading size="xl" fontFamily="heading">Our Vision</Heading>
              <Text fontSize="lg">
                At the heart of our restaurant group lies a commitment to innovation while honoring 
                tradition. Each concept represents a unique interpretation of Ethiopian culinary heritage, 
                reimagined through different cultural lenses.
              </Text>
              <Text fontSize="lg">
                Through Mélange, we elevate the humble burger with Ethiopian spices and French technique. 
                At Doro Soul Food, we celebrate the natural harmony between Ethiopian and Southern American 
                cuisines. And with Moya, we create an exciting dialogue between Ethiopian and Mexican 
                flavors.
              </Text>
            </VStack>
            <SimpleGrid columns={2} spacing={8}>
              <Box bg="white" p={6} rounded="lg" shadow="md">
                <Heading size="md" mb={4} fontFamily="heading">Innovation</Heading>
                <Text>Pushing culinary boundaries through unique flavor combinations</Text>
              </Box>
              <Box bg="white" p={6} rounded="lg" shadow="md">
                <Heading size="md" mb={4} fontFamily="heading">Heritage</Heading>
                <Text>Preserving and celebrating Ethiopian culinary traditions</Text>
              </Box>
              <Box bg="white" p={6} rounded="lg" shadow="md">
                <Heading size="md" mb={4} fontFamily="heading">Quality</Heading>
                <Text>Commitment to excellence in every dish we serve</Text>
              </Box>
              <Box bg="white" p={6} rounded="lg" shadow="md">
                <Heading size="md" mb={4} fontFamily="heading">Community</Heading>
                <Text>Creating welcoming spaces for cultural exchange</Text>
              </Box>
            </SimpleGrid>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
