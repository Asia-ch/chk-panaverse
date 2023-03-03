"use client";
import {
  Heading,
  Stack,
  Button,
  Text,
  Container,
  Flex,
  Box,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

function Compo() {
  return (
    <RevealWrapper delay={200} duration={1000} distance="500px" reset={true}>
      <Container maxW="1200" p={10} bg={"gray.50"} borderRadius={"lg"}>
        <Stack direction={{ base: "column", md: "row" }}>
          <Box flex={3}>
            <Heading color={"black"}>Try our free components</Heading>

            <Text color={"gray.500"} fontSize={20} p={3}>
              A bundle of 220+ ready-to-use, responsive and accessible
              components with clever structured sourcecode files.
            </Text>
          </Box>
          <Box flex={1} alignSelf="flex-start">
            <Button float={"right"} bg={"teal"} color="white">
              View components
            </Button>
          </Box>
        </Stack>
      </Container>
    </RevealWrapper>
  );
}

export default Compo;
