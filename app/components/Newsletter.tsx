import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import React from "react";

const Newsletter = () => {
  return (
    <RevealWrapper delay={200} duration={1000} distance="500px" reset={true}>
        
    <Box>
      <Container bg={"teal.900"} maxW={"100%"} py={14}>
        <Flex
          justifyContent={"space-around"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box>
            <Heading color={"white"} fontSize={30}>
              Join our newsletter
            </Heading>
            <Text color={"white"}>
              Don't miss any more news and subscribe to our newsletter today.
            </Text>
          </Box>
          <Box>
            <HStack>
              <Input
                colorScheme="teal"
                variant="outline"
                placeholder="Enter your Email"
              />
              <Button w={150} colorScheme="teal">
                Subscribe
              </Button>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
    </RevealWrapper>
  );
};

export default Newsletter;
