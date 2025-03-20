import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Link, VStack, Tag, HStack } from '@chakra-ui/react';

interface PressItem {
  title: string;
  publication: string;
  date: string;
  excerpt: string;
  link: string;
  tags: string[];
}

const Press: React.FC = () => {
  const pressItems: PressItem[] = [
    {
      title: "Chef Elias Taddesse to Open Doro Soul Food and Mélange in Shaw",
      publication: "Washington Business Journal",
      date: "March 12, 2025",
      excerpt: "Acclaimed Chef Elias Taddesse announced the opening of his newest locations in Shaw, where he will serve his renowned Ethiopian fried chicken and craft burgers.",
      link: "https://www.bizjournals.com/washington/news/2025/03/12/chef-elias-taddesse-melange-shaw-concepts.html",
      tags: ["Latest News", "Expansion"]
    },
    {
      title: "Chef Elias Taddesse Returns to Doro Soul Food with New Menu",
      publication: "PoPville",
      date: "July 2024",
      excerpt: "DC's beloved and award-winning Chef Elias Taddesse is back in the kitchen at Doro Soul Food with a completely revamped menu.",
      link: "https://www.popville.com/2024/07/michelin-starred-chef-elias-taddesse-is-back-in-the-kitchen-at-doro-soul-food/",
      tags: ["Latest News", "Menu Update"]
    },
    {
      title: "James Beard Award Semifinalist for 'Emerging Chef'",
      publication: "James Beard Foundation",
      date: "January 2023",
      excerpt: "Chef Elias Taddesse was named as a 2023 James Beard Awards Semifinalist in the 'Emerging Chef' category.",
      link: "https://www.theroot.com/james-beard-foundation-shows-love-to-black-restaurants-1850040497",
      tags: ["Award", "Recognition"]
    },
    {
      title: "Eater DC's 'Chef of the Year'",
      publication: "Eater DC",
      date: "December 2021",
      excerpt: "Chef Taddesse was honored as Eater DC's 'Chef of the Year' in 2021, recognizing his outstanding contributions to the District's culinary scene.",
      link: "https://www.melangedc.com/about",
      tags: ["Award", "Recognition"]
    },
    {
      title: "Doro Soul Food Opens in Shaw",
      publication: "Washingtonian",
      date: "November 2022",
      excerpt: "Michelin-starred Chef Elias Taddesse opened Doro Soul Food, bringing his Ethiopian-style fried chicken to the Shaw neighborhood.",
      link: "https://www.washingtonian.com/2022/11/01/first-look-inside-shaws-new-ethiopian-fried-chicken-joint/",
      tags: ["Opening", "Doro Soul Food"]
    },
    {
      title: "Mélange Brings Acclaimed Burgers to Mount Vernon Triangle",
      publication: "Eater DC",
      date: "2020",
      excerpt: "After successful pop-ups around DC, Chef Elias Taddesse opened his first brick-and-mortar restaurant, Mélange, in Mount Vernon Triangle.",
      link: "https://edenscatalyst.com/",
      tags: ["Opening", "Mélange"]
    },
    {
      title: "Chef Elias Taddesse Creates a Best-Selling Culinary Story",
      publication: "Cuisine Noir",
      date: "2022",
      excerpt: "This feature explores Chef Taddesse's culinary journey and his distinct approach to celebrating the marriage of Ethiopian flavors and American favorites.",
      link: "https://www.cuisinenoirmag.com/chef-elias-taddesse-doro-soul-food/",
      tags: ["Feature", "Profile"]
    },
    {
      title: "Mélange Named Among DC's Essential Restaurants",
      publication: "Eater DC",
      date: "2022",
      excerpt: "Mélange was featured on Eater DC's list of 18 Essential Restaurants, cementing its status as one of the must-visit dining destinations.",
      link: "https://www.cuisinenoirmag.com/chef-elias-taddesse-doro-soul-food/",
      tags: ["Recognition", "Mélange"]
    }
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
              Press & Media Coverage
            </Heading>
            <Text fontSize="xl" maxW="800px">
              Discover what the media is saying about our restaurants and 
              Chef Elias Taddesse's innovative approach to Ethiopian fusion cuisine.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Press Mentions Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {pressItems.map((item, index) => (
              <Box 
                key={index}
                p={8}
                bg="white"
                rounded="lg"
                shadow="md"
                borderWidth="1px"
                borderColor="gray.100"
              >
                <VStack align="flex-start" spacing={4}>
                  <HStack spacing={4}>
                    {item.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex} colorScheme="gold" size="sm">
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                  <Heading size="md" fontFamily="heading">
                    <Link href={item.link} isExternal color="brand.primary">
                      {item.title}
                    </Link>
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    {item.publication} • {item.date}
                  </Text>
                  <Text color="gray.700">{item.excerpt}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Press Contact Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="flex-start" spacing={6}>
              <Heading size="xl" fontFamily="heading">Press Inquiries</Heading>
              <Text fontSize="lg">
                For press inquiries, interviews, or additional information about our 
                restaurants and Chef Elias Taddesse, please contact our media relations team.
              </Text>
              <VStack align="flex-start" spacing={2}>
                <Text fontWeight="bold">Media Contact:</Text>
                <Text>press@eathiopianfoods.com</Text>
                <Text>202-555-0123</Text>
              </VStack>
            </VStack>
            <Box>
              <VStack align="flex-start" spacing={6}>
                <Heading size="xl" fontFamily="heading">Quick Facts</Heading>
                <VStack align="flex-start" spacing={4}>
                  <Box>
                    <Text fontWeight="bold">Chef Elias Taddesse</Text>
                    <Text>Ethiopian-born, French-trained Michelin-starred chef</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold">Restaurant Concepts</Text>
                    <Text>Mélange • Doro Soul Food • Moya</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold">Cuisine</Text>
                    <Text>Ethiopian fusion, combining traditional flavors with modern American and international cuisines</Text>
                  </Box>
                </VStack>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Press;
