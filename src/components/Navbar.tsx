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
          direction="row"
          spacing={12}
          align="center"
          display={{ base: 'none', md: 'flex' }}
        >
          <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Chef Elias Taddesse</Link>
          
          <Link as={RouterLink} to="/restaurants" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Our Restaurants</Link>

          <Link as={RouterLink} to="/press" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Press Mentions</Link>
        </Stack>
        </Flex>
      </Container>

      {/* Mobile Menu Content */}
      <Box
        position="fixed"
        top="96px"
        left={0}
        right={0}
        bottom={0}
        display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
        bg="brand.blue"
        alignItems="center"
        justifyContent="center"
        zIndex={20}
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
