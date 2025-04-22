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
    <Box bg="white" px={4} boxShadow="sm" position="sticky" top={0} zIndex="sticky">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <RouterLink to="/">
          <Flex alignItems="center">
            <Box as="img" src="/images/SVG/logo.svg" height="40px" mr={3} />
            <Box fontSize="xl" fontFamily="heading" fontWeight="bold">
              Melange Foods, Inc.
            </Box>
          </Flex>
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
          spacing={8}
          align="center"
          display={{ base: 'none', md: 'flex' }}
        >
          <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="brand.blue" fontWeight="medium">Chef Elias</Link>
          
          <Link as={RouterLink} to="/restaurants" fontFamily="mono" color="brand.blue" fontWeight="medium">Our Restaurants</Link>

          <Link as={RouterLink} to="/press" fontFamily="mono" color="brand.blue" fontWeight="medium">Press Mentions</Link>
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
          <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="brand.blue">Chef Elias</Link>
          <Link as={RouterLink} to="/restaurants" fontFamily="mono" color="brand.blue">Our Restaurants</Link>

          <Link as={RouterLink} to="/press" fontFamily="mono" color="brand.blue">Press Mentions</Link>
          <Button colorScheme="gold" w="full">
            Reservations
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
