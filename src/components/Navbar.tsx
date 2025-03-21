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
          <Box fontSize="xl" fontFamily="heading" fontWeight="bold">
            Eathiopian Foods
          </Box>
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
          <Link as={RouterLink} to="/chef-elias" fontWeight="medium">Chef Elias</Link>
          
          <Link as={RouterLink} to="/restaurants" fontWeight="medium">Our Restaurants</Link>

          <Link as={RouterLink} to="/press" fontWeight="medium">Press Mentions</Link>
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
          <Link as={RouterLink} to="/chef-elias">Chef Elias</Link>
          <Link as={RouterLink} to="/restaurants">Our Restaurants</Link>
          <Link as={RouterLink} to="/combined-location">Combined Location</Link>
          <Link as={RouterLink} to="/press">Press Mentions</Link>
          <Button colorScheme="gold" w="full">
            Reservations
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
