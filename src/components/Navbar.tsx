import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Link,
  Stack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  IconButton
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box 
      bg="brand.blue" 
      position="sticky" 
      top={0} 
      zIndex="sticky"
      backdropFilter="blur(5px)"
    >
      <Container maxW="container.xl">
        <Flex h={24} alignItems="center" justifyContent="space-between">

        <RouterLink to="/">
          <Box as="img" src="/images/SVG/logo.svg" height="60px" filter="brightness(0) invert(1)" />
        </RouterLink>

        {/* Mobile Menu */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={<HamburgerIcon boxSize={8} />}
          color="white"
          variant="ghost"
          aria-label="Toggle Navigation"
        />

        {/* Desktop Menu */}
        <Stack
          spacing={{ base: 8, md: 4 }}
          align={{ base: 'flex-start', md: 'center' }}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          w="full"
        >
          <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Chef Elias Taddesse</Link>
          
          <Link as={RouterLink} to="/restaurants" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Our Restaurants</Link>

          <Link as={RouterLink} to="/press" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Press Mentions</Link>
        </Stack>
        </Flex>
      </Container>

      {/* Mobile Menu Content */}
      <Box
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
        flexBasis={{ base: '100%', md: 'auto' }}
        ml={{ md: 8 }}
        position={{ base: 'fixed', md: 'static' }}
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg={{ base: 'brand.primary', md: 'transparent' }}
        zIndex="1000"
        flexDir={{ base: 'column', md: 'row' }}
        pt={{ base: '100px', md: 0 }}
        px={{ base: '6', md: 0 }}
      >
        <Stack spacing={12} p={4} align="center">
          <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Chef Elias Taddesse</Link>
          <Link as={RouterLink} to="/restaurants" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Our Restaurants</Link>

          <Link as={RouterLink} to="/press" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Press Mentions</Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
