import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface RestaurantCardProps {
  name: string;
  description: string;
  image: string;
  logo: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, description, image, logo }) => {
  return (
    <MotionBox
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      bg="white"
      rounded="lg"
      overflow="hidden"
      shadow="md"
    >
      <Box position="relative" h="200px">
        <Image
          src={image}
          alt={name}
          h="100%"
          w="100%"
          objectFit="cover"
          opacity={0.8}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <Image
            src={logo}
            alt={`${name} logo`}
            maxH="80%"
            maxW="80%"
            objectFit="contain"
          />
        </Box>
      </Box>
      <Box p={6}>
        <Heading size="md" mb={3} fontFamily="heading">
          {name}
        </Heading>
        <Text color="gray.600">
          {description}
        </Text>
      </Box>
    </MotionBox>
  );
};

export default RestaurantCard;
