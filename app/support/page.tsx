"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Hide,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import Newsletter from "../components/Newsletter";

function page() {
  return (
    <>
      <Box py="50" as="section">
        <VStack>
          <RevealWrapper
            origin="right"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Text fontWeight={"bold"} color="teal" fontSize={"2xl"}>
              Contact Us
            </Text>
            <Heading fontWeight={"semibold"}>Help & Support</Heading>
            <Text
              color={"gray.500"}
              py="3"
              fontSize={"20"}
              px={{ base: "5", md: "10" }}
              textAlign={{ base: "center" }}
            >
              Get in touch and let us know how we can help
            </Text>
          </RevealWrapper>

          <Hide below="lg">
            <FormControl>
              <FormLabel mx={700}>Subject</FormLabel>

              <Input
                placeholder="Enter Subject"
                ml={700}
                type="email"
                w={420}
              />

              <FormLabel mx={700} mt={5}>
                Message
              </FormLabel>

              <Input
                mb={7}
                ml={700}
                type="email"
                w={{ base: "100%", md: 420 }}
                h={220}
              />
            </FormControl>

            <Button
              w={{ base: "auto", lg: 420 }}
              colorScheme="teal"
              type="submit"
            >
              Submit ticket
            </Button>
          </Hide>
        </VStack>
      </Box>
      <Newsletter />
    </>
  );
}

export default page;
