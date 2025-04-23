import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, Button, Divider, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
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
      <Box py={20} id="melange" sx={{ scrollMarginTop: { base: '170px', md: '100px' } }}>
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
              <Link href="https://www.melangedc.com" isExternal>
                <Button colorScheme="gold" rightIcon={<ExternalLinkIcon />}>Visit Website</Button>
              </Link>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      <Divider />

      {/* Doro Soul Food Section */}
      <Box py={20} id="doro" sx={{ scrollMarginTop: { base: '170px', md: '100px' } }}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
            <Box>
              <Image
                src="/images/Doro.png"
                alt="Doro Soul Food"
                rounded="lg"
                shadow="lg"
              />
            </Box>
            <VStack align="flex-start" spacing={6}>
              <Heading size="xl" fontFamily="heading">Doro Soul Food</Heading>
              <Text fontSize="lg">
                Doro Soul Food is where Ethiopian traditions meet American soul food classics.
                Each dish tells a story of cultural fusion, bringing warmth and comfort to
                every plate. Our menu features Ethiopian-spiced fried chicken, collard
                greens with berbere, and other innovative takes on soul food favorites.
              </Text>
              <Link href="https://www.dorosoulfood.com" isExternal>
                <Button colorScheme="gold" rightIcon={<ExternalLinkIcon />}>Visit Website</Button>
              </Link>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      <Divider />

      {/* Moya Section */}
      <Box py={20} id="moya" sx={{ scrollMarginTop: { base: '170px', md: '100px' } }}>
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
              <Link href="https://www.moyaethiopiantacos.com" isExternal>
                <Button colorScheme="gold" rightIcon={<ExternalLinkIcon />}>Visit Website</Button>
              </Link>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

    </Box>
  );
};

export default Restaurants;
