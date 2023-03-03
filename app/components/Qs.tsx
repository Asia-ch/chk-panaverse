"use client";
import {
  Heading,
  HStack,
  Button,
  Text,
  Container,
  Avatar,
  AvatarGroup,
  VStack,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

function Questions() {
  return (
    <RevealWrapper delay={200} duration={1000} distance="500px" reset={true}>
        
    <Container
      maxW="6xl"
      px={10}
      py={10}
      mt={10}
      bg={"gray.50"}
      borderRadius={"lg"}
    >
      <VStack>
        <AvatarGroup size="md" max={2}>
          <Avatar name="ch" src="/hira.jpeg" />
          <Avatar name="ayesha" src="/as.jpeg" />
        </AvatarGroup>
        <Text fontWeight={"bold"} color={"black"}>
          Still have questions?
        </Text>
        <Text mb={2} lineHeight={2} color={"gray.500"}>
          Can't find the answer you're looking for? Our team is happy to answer
          your questions.
        </Text>
        <Button
          bg={"teal"}
          color="white"
          my={5}
          p={5}
          border="1px"
          borderColor={"gray.400"}
          size={"md"}
        >
          Send us an email
        </Button>
      </VStack>
    </Container>
    </RevealWrapper>
  );
}

export default Questions;
