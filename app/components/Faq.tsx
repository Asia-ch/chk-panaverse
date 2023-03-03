"use client";
import {
  Box,
  Flex,
  Text,
  Heading,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Container,
  Button,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

function FAQ() {
  return (
    <Box>
      <Container maxW={1200} my={16}>
        <Flex flex={2} flexDirection={{ base: "column", md: "row", lg: "row" }}>
          <Box textAlign={{ base: "center" }}>
            <RevealWrapper
              origin="left"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Text fontWeight={"semibold"} color="teal">
                Support
              </Text>
              <Heading lineHeight={2}>FAQS</Heading>
              <Text color={"gray.500"}>
                Everthing you need to know about the product and
              </Text>
              <Text color={"gray.500"}>
                billing. For questions about licensing, please see our
              </Text>
              <Text color={"teal"}>licensing page.</Text>
            </RevealWrapper>
          </Box>

          <Box flex={3} ml={14} mt={{ base: "10" }}>
            <RevealWrapper
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        How is Chakra UI Pro different from Chakra UI?
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color={"gray.500"}>
                    Chakra UI Pro is built on top of the popular Chakra UI
                    component library. Compared to Chakra UI, the components we
                    offer here are more complex and range from simple banners to
                    full blown page layouts.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        What do I get when I buy a Chakra UI Pro license?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color={"gray.500"}>
                    After you have purchased a license from our payment
                    provider, you will receive an email from us with your
                    license key. You can then enter the license key in thesetup
                    wizard. The source code is provided to you via the website,
                    just like with the free components.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        Is there a Figma UI Kit?
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color={"gray.500"}>
                    Yes - with two options to choose from, you'll have
                    everything you need to bring your designs to life. The
                    official Chakra UI Figma Kit is the perfect starting point.
                    And if you want to take your designs to the next level, you
                    can find the UIKit Pro on the Marketplace, which offers an
                    advanced set of components designed to work ideal with the
                    Chakra UI Pro Components.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        How does the Team license work?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color={"gray.500"}>
                    The license grants permission to all employees and
                    contractors of the licensee to access and use the
                    components. When activating your team license, we recommend
                    that you use a shared email address that all of your
                    employees can access. For more information on team licensing
                    specifics, read through our license.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        Do you ofer a free trial?
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color={"gray.500"}>
                    We do not offer a free trial. Instead, some of our
                    components are available for free. Click here for an
                    overview of all free components.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Button display={"block"} variant={"outline"} mt={5} mx="auto">
                Show More FAQs
              </Button>
            </RevealWrapper>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default FAQ;
