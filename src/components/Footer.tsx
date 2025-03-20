import React from 'react';
import { Box, Container, Stack, Text, Link, SimpleGrid, VStack, HStack, Divider } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box bg="brand.primary" color="white" py={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <Stack spacing={6}>
            <Text fontSize="lg" fontFamily="heading" fontWeight="bold">
              Eathiopian Foods
            </Text>
            <Text fontSize="sm">
              Where Ethiopian heritage meets culinary innovation, under the vision of
              Michelin-starred Chef Elias Taddesse.
            </Text>
          </Stack>

          <Stack spacing={6}>
            <Text fontWeight="bold">Our Restaurants</Text>
            <VStack align="flex-start" spacing={3}>
              <Link as={RouterLink} to="/restaurants#melange">Mélange</Link>
              <Link as={RouterLink} to="/restaurants#doro">Doro Soul Food</Link>
              <Link as={RouterLink} to="/restaurants#moya">Moya</Link>
              <Divider borderColor="whiteAlpha.400" />
              <Link as={RouterLink} to="/combined-location">
                <Text fontWeight="medium">New Combined Location</Text>
                <Text fontSize="sm">Coming Soon</Text>
              </Link>
            </VStack>
          </Stack>

          <Stack spacing={6}>
            <Text fontWeight="bold">Company</Text>
            <VStack align="flex-start" spacing={3}>
              <Link as={RouterLink} to="/chef-elias">Chef Elias</Link>
              <Link as={RouterLink} to="/press">Press</Link>
              <Link as={RouterLink} to="/media-kit">Media Kit</Link>
              <Link href="https://www.dorosoulfood.com/" isExternal>Doro Soul Food Website</Link>
            </VStack>
          </Stack>

          <Stack spacing={6}>
            <Text fontWeight="bold">Contact</Text>
            <VStack align="flex-start" spacing={3}>
              <Text>General Inquiries:</Text>
              <Text>info@eathiopianfoods.com</Text>
              <Text>202-555-0123</Text>
              <Text>Washington, DC</Text>
              <Text fontSize="sm" pt={2}>Press Contact:</Text>
              <Text>press@eathiopianfoods.com</Text>
            </VStack>
          </Stack>
        </SimpleGrid>

        <Divider my={8} borderColor="whiteAlpha.400" />

        <HStack justify="space-between" fontSize="sm">
          <Text>© {new Date().getFullYear()} Eathiopian Foods. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
