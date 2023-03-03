"use client";
import {
  Box,
  VStack,
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import {
  IoSpeedometer,
  IoServerSharp,
  IoBrush,
  IoFlashSharp,
} from "react-icons/io5";

function Highlights() {
  return (
    <Box py="50" as="section">
      <RevealWrapper
        delay={200}
        duration={1000}
        distance="500px"
        reset={true}
      >
        <VStack>
          <Text fontWeight={"bold"} fontSize="2xl" color="teal">
            Highlights
          </Text>
          <Heading>Why Chakra UI Pro?</Heading>
          <Text color={"gray.500"} fontSize={20} px={{ base: "5", md: "10" }}>
            Because these beautiful and responsive React components will help
            you realize your next idea in no time.
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
        <Container maxW="1200" mt={5}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5}>
            <Card p={2}>
              <CardHeader>
                <Box gap="10">
                  <IconButton
                    colorScheme="teal"
                    aria-label="IoSpeedometer"
                    size={"lg"}
                    icon={<IoSpeedometer color="white" size={30} />}
                  />
                </Box>
                <Heading color={"teal"} size="sm" mt={20} mb={-5}>
                  Speed up your workflow
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Quickly put together different components to create an nearly
                  infinite combination of user experiences.
                </Text>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Box gap="4">
                  <IconButton
                    colorScheme="teal"
                    aria-label="IoServerSharp"
                    size={"lg"}
                    icon={<IoServerSharp color="white" size={30} />}
                  />
                </Box>
                <Heading color={"teal"} size="sm" mt={20} mb={-5}>
                  Save good money
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Buying a license of Chakra UI Pro costs only a fraction of
                  what it would cost the components from scratch.
                </Text>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Box gap="4">
                  <IconButton
                    colorScheme="teal"
                    aria-label="IoBrush"
                    size={"lg"}
                    icon={<IoBrush color="white" size={30} />}
                  />
                </Box>
                <Heading color={"teal"} size="sm" mt={20} mb={-5}>
                  Easily customizable
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Ready-to-use components that are simple to integrate and easy
                  to customize to fit your business requirements.
                </Text>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Box gap="4">
                  <IconButton
                    colorScheme="teal"
                    aria-label="IoFlashSharp"
                    size={"lg"}
                    icon={<IoFlashSharp color="white" size={30} />}
                  />
                </Box>
                <Heading color={"teal"} size="sm" mt={20} mb={-5}>
                  Support Chakra UI
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  With every purchase of a Chakra UI Pro license you directly
                  support the development of Chakra UI.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Container>
      </RevealWrapper>
    </Box>
  );
}

export default Highlights;
