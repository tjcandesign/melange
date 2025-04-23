import React from 'react';
import { Box, Text, Image, VStack } from '@chakra-ui/react';
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
    <Box
      bg="white"
      rounded="lg"
      overflow="hidden"
      shadow="md"
    >
      <VStack spacing={0} h="full">
        <Box
          position="relative"
          h="200px"
          w="full"
          overflow="hidden"
          borderBottom="1px"
          borderColor="gray.100"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
          >
            <Image
              src={image}
              alt={name}
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>
        </Box>
        <Box
          h="100px"
          w="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.50"
          p={6}
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
    </Box>
  );
};

export default RestaurantCard;
