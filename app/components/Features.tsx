"use client";
import {
  Container,
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { WiStars } from "react-icons/wi";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { CgCode } from "react-icons/cg";
import { BiHandicap } from "react-icons/bi";
import { TfiText } from "react-icons/tfi";
import { IoBrush, IoRocketSharp, IoMoonSharp } from "react-icons/io5";
import { RevealWrapper } from "next-reveal";
function Features() {
  return (
    <>
      <Box py="50" as="section">
        <RevealWrapper
          delay={200}
          duration={1000}
          distance="500px"
          reset={true}
        >
          <VStack>
            <Text fontWeight={"bold"} color="teal" fontSize={"2xl"}>
              Features
            </Text>
            <Heading fontWeight={"semibold"}>What can you expect?</Heading>
            <Text
              color={"gray.500"}
              py="3"
              fontSize={"20"}
              px={{ base: "5", md: "10" }}
            >
              A bundle of 220+ ready-to-use, responsive and accessible
              components with clever structured sourcecode files.
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
          <Container maxW={1200} mt={10}>
            <Box>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
                <Box>
                  <HStack>
                    <IconButton
                      colorScheme={"teal"}
                      aria-label="WiStars"
                      size={"lg"}
                      icon={<WiStars color="White" size={40} />}
                    />
                    <Box ml={5}>
                      <Heading fontSize={18}>220+ Components</Heading>
                      <Text lineHeight={2}>
                        Chakra UI Pro has 220+ components with source code to
                        help
                      </Text>
                      <Text>you develop your project faster.</Text>
                    </Box>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <IconButton
                      colorScheme={"teal"}
                      aria-label="IoRocketSharp"
                      size={"lg"}
                      icon={<IoRocketSharp size={30} />}
                    />
                    <Box ml={5}>
                      <Heading fontSize={18}>Production Ready</Heading>
                      <Text lineHeight={2}>
                        Effortlessly create your next production-ready
                        experience with
                      </Text>
                      <Text>Chakra UI Pro components.</Text>
                    </Box>
                  </HStack>
                </Box>

                <Box mt={5}>
                  <HStack>
                    <IconButton
                      colorScheme={"teal"}
                      aria-label="IoMoonSharp"
                      size={"lg"}
                      icon={<IoMoonSharp color="White" size={40} />}
                    />
                    <Box ml={5}>
                      <Heading fontSize={18}>Light & Dark</Heading>
                      <Text lineHeight={2}>
                        All our components come with a light and dark color mode
                        by
                      </Text>
                      <Text>default.</Text>
                    </Box>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <IconButton
                      colorScheme={"teal"}
                      aria-label="IoBrush"
                      size={"lg"}
                      icon={<IoBrush size={30} />}
                    />
                    <Box mt={5} ml={5}>
                      <Heading fontSize={18}>Themeable</Heading>
                      <Text lineHeight={2}>
                        Your style. Your brand. Customize the components as you
                        need
                      </Text>
                      <Text>them. It's that simple.</Text>
                    </Box>
                  </HStack>
                </Box>

                <Box mt={5}>
                  <HStack>
                    <IconButton
                      colorScheme={"teal"}
                      aria-label="AiOutlineExpandAlt"
                      size={"lg"}
                      icon={<AiOutlineExpandAlt color="White" size={40} />}
                    />
                    <Box ml={5}>
                      <Heading fontSize={18}>Responsive Design</Heading>
                      <Text lineHeight={2}>
                        Our components look great everywhere - whether on
                        mobile,
                      </Text>
                      <Text>tablet or desktop</Text>
                    </Box>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <IconButton
                      colorScheme={"teal"}
                      aria-label="TfiText"
                      size={"lg"}
                      icon={<TfiText size={30} />}
                    />
                    <Box mt={5} ml={5}>
                      <Heading fontSize={18}>TypeScript</Heading>
                      <Text lineHeight={2}>
                        Each component is written in TypeScript, laying the
                        foundation for
                      </Text>
                      <Text>scalability of your project.</Text>
                    </Box>
                  </HStack>
                </Box>

                <Box>
                  <HStack>
                    <IconButton
                      colorScheme={"teal"}
                      aria-label="CgCode"
                      size={"lg"}
                      icon={<CgCode size={30} />}
                    />
                    <Box mt={5} ml={5}>
                      <Heading fontSize={18}>Developer Friendly</Heading>
                      <Text lineHeight={2}>
                        Components are semantically divided into several files
                        for better
                      </Text>
                      <Text>developer experience.</Text>
                    </Box>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <IconButton
                      colorScheme={"teal"}
                      aria-label="BiHandicap"
                      size={"lg"}
                      icon={<BiHandicap size={30} />}
                    />
                    <Box mt={5} ml={5}>
                      <Heading fontSize={18}>Accessible</Heading>
                      <Text lineHeight={2}>
                        Accessibility first. That's why we pay attention to
                        accessibility right
                      </Text>
                      <Text>from the start.</Text>
                    </Box>
                  </HStack>
                </Box>
              </SimpleGrid>
            </Box>
          </Container>
        </RevealWrapper>
      </Box>
    </>
  );
}

export default Features;
