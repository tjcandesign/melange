import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, Button, Divider, Link as ChakraLink } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { images } from '../data/images';

const MotionBox = motion(Box);

const Restaurants: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        py={20} 
        bg="brand.primary"
        color="white"
      >
        <Container maxW="container.xl">
          <VStack spacing={6} align="flex-start">
            <Heading 
              as="h1" 
              size="2xl"
              fontFamily="heading"
            >
              Our Restaurants
            </Heading>
            <Text fontSize="xl" maxW="800px">
              Experience the unique fusion of Ethiopian heritage with modern American cuisine
              across our three distinctive restaurant concepts.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Mélange Section */}
      <Box py={20} id="melange">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/burger.jpg"
                alt="Mélange Restaurant Interior"
                rounded="lg"
                shadow="xl"
              />
            </MotionBox>
            <VStack align="flex-start" spacing={6}>
              <Heading size="xl" fontFamily="heading">Mélange</Heading>
              <Text fontSize="lg">
                DC's acclaimed restaurant featuring Ethiopian-spiced gourmet burgers crafted with 
                French culinary techniques. At Mélange, Chef Elias Taddesse combines his Ethiopian 
                heritage with his Michelin-starred French training to create an unprecedented 
                burger experience.
              </Text>
              <Box>
                <Text fontWeight="bold" mb={2}>Location</Text>
                <Text>Washington, DC</Text>
                <ChakraLink href="https://www.melangedc.com" isExternal color="brand.accent" mt={2} display="block">
                  Visit Website
                </ChakraLink>
              </Box>
              <Button colorScheme="gold" size="lg">
                Make a Reservation
              </Button>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      <Divider />

      {/* Doro Soul Food Section */}
      <Box py={20} bg="gray.50" id="doro">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
            <VStack align="flex-start" spacing={6} order={{ base: 2, md: 1 }}>
              <Heading size="xl" fontFamily="heading">Doro Soul Food</Heading>
              <Text fontSize="lg">
                A revolutionary concept that infuses traditional American soul food with Ethiopian flavors. 
                From Michelin-starred Chef Elias Taddesse, Doro Soul Food creates a unique dining 
                experience that celebrates the natural harmony between these two rich culinary traditions.
              </Text>
              <ChakraLink href="https://www.dorosoulfood.com/" isExternal color="brand.accent">
                Visit Website
              </ChakraLink>
              <Box>
                <Text fontWeight="bold" mb={2}>Location</Text>
                <Text>Washington, DC</Text>
                <ChakraLink href="https://www.dorosoulfood.com" isExternal color="brand.accent" mt={2} display="block">
                  Visit Website
                </ChakraLink>
              </Box>
              <Button colorScheme="gold" size="lg">
                Order Online
              </Button>
            </VStack>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              order={{ base: 1, md: 2 }}
            >
              <Image
                src="/images/melange-chicken.jpg"
                alt="Doro Soul Food Interior"
                rounded="lg"
                shadow="xl"
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      <Divider />

      {/* Moya Section */}
      <Box py={20} id="moya">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/melange-chicken.jpg"
                alt="Moya Restaurant Interior"
                rounded="lg"
                shadow="xl"
              />
            </MotionBox>
            <VStack align="flex-start" spacing={6}>
              <Heading size="xl" fontFamily="heading">Moya</Heading>
              <Text fontSize="lg">
                Experience the innovative fusion of Ethiopian and Mexican cuisines at Moya. 
                Our creative tacos and fusion dishes showcase how traditional Ethiopian flavors 
                can harmoniously blend with international culinary traditions.
              </Text>
              <Box>
                <Text fontWeight="bold" mb={2}>Location</Text>
                <Text>Washington, DC</Text>
                <ChakraLink href="https://www.moyaethiopiantacos.com" isExternal color="brand.accent" mt={2} display="block">
                  Visit Website
                </ChakraLink>
              </Box>
              <Button colorScheme="gold" size="lg">
                View Menu
              </Button>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

    </Box>
  );
};

export default Restaurants;
