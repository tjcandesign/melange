import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Stack,
  VStack,
  useDisclosure,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      position="fixed"
      w="full"
      bg="brand.primary"
      color="white"
      zIndex={1000}
      py={4}
    >
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Box as={RouterLink} to="/" display="flex" alignItems="center">
            <Box as="img" src="/images/SVG/logo.svg" height="60px" filter="brightness(0) invert(1)" />
          </Box>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={6} />}
            variant="ghost"
            color="white"
            aria-label="Toggle Navigation"
            _hover={{ bg: 'whiteAlpha.200' }}
            size="lg"
            zIndex={2000}
          />

          {/* Desktop Menu */}
          <Stack
            display={{ base: 'none', md: 'flex' }}
            direction="row"
            spacing={16}
            align="center"
          >
            <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Chef Elias Taddesse</Link>
            <Link as={RouterLink} to="/restaurants" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Our Restaurants</Link>
            <Link as={RouterLink} to="/press" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase">Press</Link>
          </Stack>
        </Flex>
      </Container>

      {/* Mobile Menu */}
      <Box
        display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="brand.primary"
        zIndex={1500}
        flexDirection="column"
        justifyContent="center"
      >
        <Container maxW="container.xl">
          <VStack spacing={16} align="flex-start">
            <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="white" fontWeight="bold" fontSize="xl" textTransform="uppercase">Chef Elias Taddesse</Link>
            <Link as={RouterLink} to="/restaurants" fontFamily="mono" color="white" fontWeight="bold" fontSize="xl" textTransform="uppercase">Our Restaurants</Link>
            <Link as={RouterLink} to="/press" fontFamily="mono" color="white" fontWeight="bold" fontSize="xl" textTransform="uppercase">Press</Link>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
