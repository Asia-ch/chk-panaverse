"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  HStack,
  Button,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

function Hero() {
  return (
    <Box
      bgImage="url('https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20220228/47beb9201a40a4f652206b2295f12608.gif')"
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <RevealWrapper delay={200} duration={1000} distance="500px" reset={true}>
        <Box p={[10, 20, 40, 60]} ml={[10, 20, 40, 60, 80]} m={{ base: "0" }}>
          <Heading size={"3xl"} color="white">
            Build your next idea even faster.
          </Heading>
          <Text
            fontWeight={"medium"}
            fontSize={["md", "lg", "xl", "2xl"]}
            color={"white"}
            mt={5}
          >
            Choose from over 220+ beautiful designed components,
            <br />
            made by the creators of Chakra UI. The perfect starting line
            <br />
            for your next project.
          </Text>
          <Box mt={8}>
            <Button bg={"white"} mr={5} color="teal">
              Buy now
            </Button>
            <Button variant={"outline"} color="white">
              View components
            </Button>
          </Box>
          <HStack mt={10} display={["none", "none", "flex", "flex"]}>
            <AvatarGroup size="md" max={2}>
              <Avatar name="ch" src="/hira.jpeg" />
              <Avatar name="ayesha" src="/as.jpeg" />
            </AvatarGroup>
            <Text color={"black"}>Created by</Text>
            <Text fontWeight={"bold"}>Ayesha Ch</Text>
          </HStack>
        </Box>
      </RevealWrapper>
    </Box>
  );
}

export default Hero;
