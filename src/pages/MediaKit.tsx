import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Button, VStack, Icon, Divider } from '@chakra-ui/react';
import { MdFileDownload, MdImage, MdPictureAsPdf, MdStyle } from 'react-icons/md';

interface MediaAsset {
  title: string;
  description: string;
  icon: typeof MdFileDownload;
  downloadUrl: string;
  category: string;
}

const MediaKit: React.FC = () => {
  const mediaAssets: MediaAsset[] = [
    // Logos Section
    {
      title: "Mélange Logo Package",
      description: "High-resolution logo files in various formats (AI, EPS, PNG, SVG)",
      icon: MdStyle,
      downloadUrl: "/media/melange-logos.zip",
      category: "logos"
    },
    {
      title: "Doro Soul Food Logo Package",
      description: "Logo files for Doro Soul Food in all formats",
      icon: MdStyle,
      downloadUrl: "/media/doro-logos.zip",
      category: "logos"
    },
    {
      title: "Moya Logo Package",
      description: "Complete logo package for Moya restaurant",
      icon: MdStyle,
      downloadUrl: "/media/moya-logos.zip",
      category: "logos"
    },

    // Photography Section
    {
      title: "Chef Elias Taddesse Portraits",
      description: "High-resolution professional headshots and action shots",
      icon: MdImage,
      downloadUrl: "/media/chef-photos.zip",
      category: "photos"
    },
    {
      title: "Restaurant Interiors",
      description: "Professional photos of all restaurant locations",
      icon: MdImage,
      downloadUrl: "/media/interior-photos.zip",
      category: "photos"
    },
    {
      title: "Signature Dishes",
      description: "Food photography of signature menu items",
      icon: MdImage,
      downloadUrl: "/media/food-photos.zip",
      category: "photos"
    },

    // Documents Section
    {
      title: "Press Release Kit",
      description: "Latest press releases and media announcements",
      icon: MdPictureAsPdf,
      downloadUrl: "/media/press-kit.pdf",
      category: "documents"
    },
    {
      title: "Restaurant Fact Sheets",
      description: "Detailed information about each restaurant concept",
      icon: MdPictureAsPdf,
      downloadUrl: "/media/fact-sheets.pdf",
      category: "documents"
    },
    {
      title: "Chef Bio",
      description: "Detailed biography of Chef Elias Taddesse",
      icon: MdPictureAsPdf,
      downloadUrl: "/media/chef-bio.pdf",
      category: "documents"
    }
  ];

  const categories = [
    { id: "logos", title: "Brand Assets" },
    { id: "photos", title: "Photography" },
    { id: "documents", title: "Documents" }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        py={20} 
        bg="brand.primary"
        color="white"
      >
        <Container maxW="container.xl">
          <VStack spacing={6} align="flex-start">
            <Heading 
              as="h1" 
              size="2xl"
              fontFamily="heading"
            >
              Media Kit
            </Heading>
            <Text fontSize="xl" maxW="800px">
              Download official media assets including logos, photography, and press materials
              for Chef Elias Taddesse's restaurant group.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Media Assets Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          {categories.map((category) => (
            <Box key={category.id} mb={16}>
              <Heading size="lg" mb={8} fontFamily="heading">
                {category.title}
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {mediaAssets
                  .filter(asset => asset.category === category.id)
                  .map((asset, index) => (
                    <Box 
                      key={index}
                      p={6}
                      bg="white"
                      rounded="lg"
                      shadow="md"
                      borderWidth="1px"
                      borderColor="gray.100"
                    >
                      <VStack align="flex-start" spacing={4}>
                        <Icon as={asset.icon} boxSize={8} color="brand.accent" />
                        <Heading size="md" fontFamily="heading">
                          {asset.title}
                        </Heading>
                        <Text color="gray.600" fontSize="sm">
                          {asset.description}
                        </Text>
                        <Button
                          leftIcon={<MdFileDownload />}
                          colorScheme="gold"
                          variant="outline"
                          size="sm"
                          as="a"
                          href={asset.downloadUrl}
                          download
                        >
                          Download
                        </Button>
                      </VStack>
                    </Box>
                  ))}
              </SimpleGrid>
              <Divider mt={12} />
            </Box>
          ))}

          {/* Usage Guidelines */}
          <Box mt={16}>
            <Heading size="lg" mb={6} fontFamily="heading">
              Usage Guidelines
            </Heading>
            <Text fontSize="lg" mb={4}>
              When using our media assets, please follow these guidelines:
            </Text>
            <VStack align="flex-start" spacing={4} pl={4}>
              <Text>• Do not modify or alter the logos in any way</Text>
              <Text>• Maintain proper spacing and clear space around logos</Text>
              <Text>• Use the provided high-resolution images for print media</Text>
              <Text>• Credit photographers when using restaurant or food photography</Text>
              <Text>• Contact our media team for additional formats or special requests</Text>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MediaKit;
