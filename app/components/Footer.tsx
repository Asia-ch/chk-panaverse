"use client";
import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Link,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { IoFlashSharp } from "react-icons/io5";

function Footer() {
  return (
    <Box mt={20}>
      <Container maxW={1200}>
        <Grid
          textAlign={{ lg: "start", base: "center" }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(5, 2fr)",
          }}
          gap={8}
        >
          <GridItem colSpan={{ md: 2 }}>
            <HStack alignItems={"center"}>
              <IoFlashSharp color="teal" size={30} />
              <Text fontSize={30} fontWeight="extrabold">
                chakra
              </Text>
              <Box as="span" px={1} bg={"teal"}>
                <Text fontWeight="extrabold" color={"white"}>
                  PRO
                </Text>
              </Box>
            </HStack>
            <Text lineHeight={2} color={"gray"}>
              Create beautiful websites remarkably fast.
            </Text>
          </GridItem>

          <GridItem>
            <Text lineHeight={2} color={"gray"}>
              COMPONENTS
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              Application
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              E-Commerce
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              Marketing
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              Community
            </Text>
          </GridItem>
          <GridItem>
            <Text lineHeight={2} color={"gray"}>
              RESOURCES
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              Blog
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              Docs
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              Themes
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              Pricing
            </Text>
          </GridItem>
          <GridItem>
            <Text lineHeight={2} color={"gray"}>
              LEGAL
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              License
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              Privacy
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              Terms
            </Text>
            <Text lineHeight={2} color={"gray"} fontWeight={"bold"}>
              Hire us
            </Text>
          </GridItem>
        </Grid>

        <Box mt={20}>
          <Divider></Divider>
        </Box>
      </Container>

      <Container maxW={"100%"} py={6}>
        <Flex justifyContent={"space-around"} alignItems="center">
          <Text color={"gray"}>© 2023 Chakra UI Pro. All rights reserved.</Text>
          <HStack>
            <Box as="span" pl={15} color={"gray"}>
              <Link href="https://github.com/" target={"_blank"}>
                <AiOutlineGithub size={25} />
              </Link>
            </Box>
            <Box as="span" pl={15} color={"gray"}>
              <Link href="https://https://twitter.com/" target={"_blank"}>
                <AiOutlineTwitter size={25} />
              </Link>
            </Box>
            <Box as="span" pl={15} color={"gray"}>
              <Link href="https://discord.com/" target={"_blank"}>
                <FaDiscord size={25} />
              </Link>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
