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
  const { isOpen, onToggle, onClose } = useDisclosure();
  
  const handleNavigation = () => {
    onClose();
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
            <Link as={RouterLink} to="/media-coverage" fontFamily="mono" color="white" fontWeight="bold" fontSize="lg" textTransform="uppercase" onClick={handleNavigation}>Media Coverage</Link>
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
        zIndex={20}
        transform={isOpen ? 'translateX(0)' : 'translateX(-100%)'}
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        opacity={isOpen ? 1 : 0}
        backdropFilter="blur(8px)"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'brand.primary',
          opacity: 0.97,
          zIndex: -1
        }}
        flexDirection="column"
        justifyContent="center"
      >
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch" ml={8}>
            <Box borderBottom="1px" borderColor="whiteAlpha.200" pb={8}>
              <Link as={RouterLink} to="/chef-elias" fontFamily="mono" color="white" fontWeight="bold" fontSize="xl" textTransform="uppercase" onClick={handleNavigation}>Chef Elias Taddesse</Link>
            </Box>
            <Box borderBottom="1px" borderColor="whiteAlpha.200" pb={8}>
              <Link as={RouterLink} to="/restaurants" fontFamily="mono" color="white" fontWeight="bold" fontSize="xl" textTransform="uppercase" onClick={handleNavigation}>Our Restaurants</Link>
            </Box>
            <Box borderBottom="1px" borderColor="whiteAlpha.200" pb={8}>
              <Link as={RouterLink} to="/media-coverage" fontFamily="mono" color="white" fontWeight="bold" fontSize="xl" textTransform="uppercase" onClick={handleNavigation}>Media Coverage</Link>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
