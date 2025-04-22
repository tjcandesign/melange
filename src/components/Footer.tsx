import React from 'react';
import { Box, Container, Stack, Text, Link, SimpleGrid, VStack, HStack, Divider, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box bg="brand.primary" color="white" py={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <Stack spacing={6}>
            <Text fontSize="lg" fontFamily="heading" fontWeight="bold">
              Melange Foods, Inc.
            </Text>
            <Text fontSize="sm">
              Where Ethiopian heritage meets culinary innovation, under the vision of
              Michelin-starred Chef Elias Taddesse.
            </Text>
          </Stack>

          <Stack spacing={6}>
            <Text fontWeight="bold" fontFamily="mono">Our Restaurants</Text>
            <VStack align="flex-start" spacing={3}>
              <Link as={RouterLink} to="/restaurants#melange" fontFamily="mono">Mélange</Link>
              <Link as={RouterLink} to="/restaurants#doro" fontFamily="mono">Doro Soul Food</Link>
              <Link as={RouterLink} to="/restaurants#moya" fontFamily="mono">Moya</Link>
            </VStack>
          </Stack>

          <Stack spacing={6}>
            <Text fontWeight="bold" fontFamily="mono">Company</Text>
            <VStack align="flex-start" spacing={3}>
              <Link as={RouterLink} to="/chef-elias" fontFamily="mono">Chef Elias</Link>
              <Link as={RouterLink} to="/press" fontFamily="mono">Press</Link>
              <Link as={RouterLink} to="/media-kit" fontFamily="mono">Media Kit</Link>
            </VStack>
          </Stack>

          <Stack spacing={6}>
            <Text fontWeight="bold" fontFamily="mono">Contact</Text>
            <VStack align="flex-start" spacing={3}>
              <Text fontFamily="mono">info@eathiopianfoods.com</Text>
              <Text fontFamily="mono">202-555-0123</Text>
              <Text fontFamily="mono" pt={4}>Press Contact:</Text>
              <Text fontFamily="mono">press@eathiopianfoods.com</Text>
            </VStack>
          </Stack>
        </SimpleGrid>

        <Divider my={8} borderColor="whiteAlpha.400" />

        <HStack justify="space-between" fontSize="sm">
          <HStack spacing={2}>
            <Box as="img" src="/images/SVG/logo.svg" height="40px" filter="brightness(0) invert(1)" />
            <Text fontFamily="mono" fontWeight="bold" textTransform="uppercase">© {new Date().getFullYear()} All rights reserved.</Text>
          </HStack>
          <Text fontFamily="mono" fontWeight="bold" textTransform="uppercase" opacity={0.5}>Built by <Link href="https://wrkhrs.co" isExternal color="white" textDecoration="underline">Workhorse Collective</Link></Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
