import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface RestaurantCardProps {
  name: string;
  description: string;
  image: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, description, image }) => {
  return (
    <MotionBox
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      bg="white"
      rounded="lg"
      overflow="hidden"
      shadow="md"
    >
      <Image
        src={image}
        alt={name}
        h="200px"
        w="100%"
        objectFit="cover"
      />
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
