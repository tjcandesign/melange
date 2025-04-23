import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
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
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { isOpen: isRestaurantsOpen, onToggle: onRestaurantsToggle } = useDisclosure();
  
  const handleNavigation = () => {
    onClose();
    onRestaurantsToggle();
  };

  const handleAnchorNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.includes('#')) {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        onClose();
        onRestaurantsToggle();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Box
      as="nav"
      position="fixed"
      w="full"
      bg="brand.primary"
      color="white"
      zIndex={10}
      py={4}
    >
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Box as={RouterLink} to="/" display="flex" alignItems="center" position="relative" zIndex={30}>
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
            zIndex={30}
          />

          {/* Desktop Menu */}
          <Stack
            display={{ base: 'none', md: 'flex' }}
            direction="row"
            spacing={16}
            align="center"
          >
            <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase" onClick={handleNavigation}>Chef Elias Taddesse</Link>
            <Link as={RouterLink} to="/restaurants" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase" onClick={handleNavigation}>Our Restaurants</Link>
            <Link as={RouterLink} to="/press" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase" onClick={handleNavigation}>Media Coverage</Link>
          </Stack>
        </Flex>
      </Container>

      {/* Mobile Menu */}
      <Box
        display={{ base: 'flex', md: 'none' }}
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="brand.primary"
        zIndex={20}
        transform={isOpen ? 'translateY(0)' : 'translateY(-100%)'}
        transition="transform 0.3s ease-in-out"
        opacity={1}
        visibility={isOpen ? 'visible' : 'hidden'}
        flexDirection="column"
        pt={170}
      >
        <Container maxW="container.xl">
          <VStack spacing={6} align="stretch" ml={8}>
            <Box borderBottom="1px" borderColor="whiteAlpha.200" pb={8}>
              <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="white" fontWeight="bold" fontSize="xl" textTransform="uppercase" onClick={handleNavigation}>Chef Elias Taddesse</Link>
            </Box>
            <Box borderBottom="1px" borderColor="whiteAlpha.200" pb={8}>
              <VStack spacing={isRestaurantsOpen ? 4 : 0} align="stretch" w="full">
                <Flex
                  align="center"
                  w="full"
                  cursor="pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    onRestaurantsToggle();
                  }}
                >
                  <Text fontFamily="mono" color="white" fontWeight="bold" fontSize="xl" textTransform="uppercase">
                    Our Restaurants
                  </Text>
                  <Box
                    as={ChevronDownIcon}
                    w={6}
                    h={6}
                    ml={2}
                    transform={isRestaurantsOpen ? 'rotate(180deg)' : 'rotate(0)'}
                    transition="transform 0.2s"
                    color="white"
                  />
                </Flex>
                <Box
                  h={isRestaurantsOpen ? 'auto' : 0}
                  opacity={isRestaurantsOpen ? 1 : 0}
                  transition="all 0.3s ease-in-out"
                  visibility={isRestaurantsOpen ? 'visible' : 'hidden'}
                  pl={4}
                >
                  <VStack spacing={4} align="flex-start">
                    <Link
                      as={RouterLink}
                      to="/restaurants#melange"
                      fontFamily="mono"
                      color="whiteAlpha.900"
                      fontSize="lg"
                      onClick={handleAnchorNavigation}
                    >
                      Mélange
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/restaurants#doro"
                      fontFamily="mono"
                      color="whiteAlpha.900"
                      fontSize="lg"
                      onClick={handleAnchorNavigation}
                    >
                      Doro Soul Food
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/restaurants#moya"
                      fontFamily="mono"
                      color="whiteAlpha.900"
                      fontSize="lg"
                      onClick={handleAnchorNavigation}
                    >
                      Moya
                    </Link>
                  </VStack>
                </Box>
              </VStack>
            </Box>
            <Box borderBottom="1px" borderColor="whiteAlpha.200" pb={8}>
              <Link as={RouterLink} to="/press" fontFamily="mono" color="white" fontWeight="bold" fontSize="xl" textTransform="uppercase" onClick={handleNavigation}>Media Coverage</Link>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
