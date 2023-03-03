"use client";
import {
  Box,
  VStack,
  Text,
  Heading,
  Container,
  Card,
  CardHeader,
  CardBody,
  HStack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import { TiTick } from "react-icons/ti";
function Pricing() {
  return (
    <Box py="50" as="section">
      <RevealWrapper delay={200} duration={1000} distance="500px" reset={true}>
        <VStack>
          <Text fontWeight={"bold"} fontSize={"2xl"} color="teal">
            Pricing
          </Text>
          <Heading>Get lifetime access</Heading>
          <Text color={"gray.500"} fontSize={20} px={{ base: "5", md: "10" }}>
            Get access to 220+ components and free updates. Customize it to your
            needs, and make it yours today!
          </Text>
        </VStack>
      </RevealWrapper>
      <RevealWrapper
        origin="left"
        delay={200}
        duration={1000}
        distance="500px"
        reset={true}
      >
        <Container maxW={"1200"}>
          <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gap={5}>
            <Card shadow={"lg"} rounded={"lg"}>
              <CardHeader>
                <Box gap="10" textAlign={"center"}>
                  <Heading>
                    <sup>$</sup>149
                  </Heading>
                  <Text fontWeight={"bold"} mt={4}>
                    Single
                  </Text>
                  <Text color={"gray.500"} mt={3} textAlign="center">
                    For the components of your choice
                  </Text>
                </Box>
              </CardHeader>
              <CardBody>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Single user license
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Unlimited projects
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Lifetime access
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Customer support
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Free Updates
                  </Text>
                </HStack>
                <Button
                  px={{ base: "5", md: "10", lg: "20" }}
                  my={10}
                  mt={20}
                  mr={10}
                  color="white"
                  bgColor="teal.500"
                >
                  Select a Lisences
                </Button>
              </CardBody>
            </Card>
            <Card shadow={"lg"}>
              <CardHeader>
                <Box gap="10" textAlign={"center"}>
                  <Heading>
                    <sup>$</sup>299
                  </Heading>
                  <Text fontWeight={"bold"} mt={4}>
                    Bundle
                  </Text>
                  <Text color={"gray.500"} mt={3} textAlign="center">
                    For the components of your choice
                  </Text>
                </Box>
              </CardHeader>
              <CardBody>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Single user license
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Access to all components
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Lifetime access
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Customer support
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Free Updates
                  </Text>
                </HStack>
                <Button
                  px={{ base: "5", md: "10", lg: "20" }}
                  my={10}
                  mt={20}
                  mr={10}
                  color="white"
                  bgColor="teal.500"
                >
                  Select a Lisences
                </Button>
              </CardBody>
            </Card>
            <Card shadow={"lg"}>
              <CardHeader>
                <Box gap="10" textAlign={"center"}>
                  <Heading>
                    <sup>$</sup>899
                  </Heading>
                  <Text fontWeight={"bold"} mt={4}>
                    Team
                  </Text>
                  <Text color={"gray.500"} mt={3} textAlign="center">
                    For the components of your choice
                  </Text>
                </Box>
              </CardHeader>
              <CardBody>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Single user license
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Access to all components
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Lifetime access
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Customer support
                  </Text>
                </HStack>
                <HStack spacing={5}>
                  icon={<TiTick color="teal" size={20} />}
                  <Text color={"gray.500"} lineHeight={2}>
                    Free Updates
                  </Text>
                </HStack>
                <Button
                  px={{ base: "5", md: "10", lg: "20" }}
                  my={10}
                  mt={20}
                  mr={10}
                  color="white"
                  bgColor="teal.500"
                >
                  Select a Lisences
                </Button>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Container>
      </RevealWrapper>
    </Box>
  );
}

export default Pricing;
