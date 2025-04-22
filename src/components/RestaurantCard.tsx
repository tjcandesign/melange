import React from 'react';
import { Box, Text, Image, VStack } from '@chakra-ui/react';
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
      <VStack spacing={0} h="full">
        <Box
          h="200px"
          w="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.50"
          p={6}
          borderBottom="1px"
          borderColor="gray.100"
        >
          <Image
            src={logo}
            alt={`${name} logo`}
            maxH="100%"
            w="full"
            objectFit="contain"
            px={4}
          />
        </Box>
        <Box p={6} bg="white" w="full">
          <Text color="gray.600" fontSize="sm">
            {description}
          </Text>
        </Box>
      </VStack>
    </MotionBox>
  );
};

export default RestaurantCard;
