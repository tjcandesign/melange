import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface RestaurantCardProps {
  name: string;
  description: string;
  logo: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, description, logo }) => {
  return (
    <MotionBox
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      bg="white"
      rounded="lg"
      overflow="hidden"
      shadow="md"
    >
      <Box
        h="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.50"
        p={8}
      >
        <Image
          src={logo}
          alt={`${name} logo`}
          maxH="100%"
          maxW="100%"
          objectFit="contain"
        />
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
