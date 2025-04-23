import React from 'react';
import { Box, Container, Stack, Text, Link, SimpleGrid, VStack, HStack, Divider, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box bg="brand.dark" color="white" py={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <Stack spacing={6} w="full">
            <Box as="img" src="/images/SVG/logo.svg" height="60px" filter="brightness(0) invert(1)" alignSelf="flex-start" />
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

        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          spacing={{ base: 4, md: 0 }}
          fontSize="sm"
        >
          <Text fontFamily="mono" fontWeight="bold" textTransform="uppercase">© {new Date().getFullYear()} All rights reserved.</Text>
          <Text fontFamily="mono" fontWeight="bold" textTransform="uppercase" opacity={0.5}>Hand built with ❤️ in DC by <Link href="https://tjcandesign.github.io/" isExternal color="white" textDecoration="underline">TJ CICHECKI</Link></Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
