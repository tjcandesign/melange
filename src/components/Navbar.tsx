import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
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
      bg="rgba(255, 255, 255, 0.95)" 
      px={4} 
      boxShadow="sm" 
      position="sticky" 
      top={0} 
      zIndex="sticky"
      backdropFilter="blur(5px)"
    >
      <Flex h={24} alignItems="center" justifyContent="space-between">
        <RouterLink to="/">
          <Box as="img" src="/images/SVG/logo.svg" height="60px" />
        </RouterLink>

        {/* Mobile Menu */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={<HamburgerIcon />}
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
          <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="brand.blue" fontWeight="bold" fontSize="lg" textTransform="uppercase">Chef Elias Taddesse</Link>
          
          <Link as={RouterLink} to="/restaurants" fontFamily="mono" color="brand.blue" fontWeight="bold" fontSize="lg" textTransform="uppercase">Our Restaurants</Link>

          <Link as={RouterLink} to="/press" fontFamily="mono" color="brand.blue" fontWeight="bold" fontSize="lg" textTransform="uppercase">Press Mentions</Link>
          <Button colorScheme="gold">
            Reservations
          </Button>
        </Stack>
      </Flex>

      {/* Mobile Menu Content */}
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
        pb={4}
      >
        <Stack spacing={4}>
          <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="brand.blue" fontWeight="bold" fontSize="lg" textTransform="uppercase">Chef Elias Taddesse</Link>
          <Link as={RouterLink} to="/restaurants" fontFamily="mono" color="brand.blue" fontWeight="bold" fontSize="lg" textTransform="uppercase">Our Restaurants</Link>

          <Link as={RouterLink} to="/press" fontFamily="mono" color="brand.blue" fontWeight="bold" fontSize="lg" textTransform="uppercase">Press Mentions</Link>
          <Button colorScheme="gold" w="full">
            Reservations
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
