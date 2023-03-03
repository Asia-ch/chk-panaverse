"use client";
import {
  Box,
  Link,
  Button,
  HStack,
  Show,
  Hide,
  Flex,
  List,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "@/public/Logo.webp";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { FiSearch } from "react-icons/fi";
import { BiBarChart } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineUsers, HiOutlineBuildingStorefront } from "react-icons/hi2";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NavMenu from "./NavMenu";
import Burger from "./Burger";

function Header() {
  return (
   <Box as="header" bgColor={"white"} position={"sticky"} top="0" zIndex={1}>
        {/* left area */}
        <Flex justifyContent={"space-around"} alignItems={"center"} py="4">
    
          <Box>
            <HStack>
              <Image src={logo} alt="logo"></Image>
            </HStack>
          </Box>
          <Hide below="md">
            {/* <List color="black" fontWeight="bold">
            <Link href="/">Home</Link>
            <Link href="/support">Support</Link>
            <Link
              href="https://chakra-ui.com/getting-started"
              target={"_blank"}
            >
              Documentation
            </Link>
          </List> */}
            <HStack spacing={10} pl="10">
              <NavMenu />
            </HStack>
          </Hide>
          <HStack color={"black"}>
            <Box pl={15}>
              <FiSearch width={200} height={200} scale="20" size={25} />
            </Box>
            <Box>
              <ColorModeSwitcher />
            </Box>
            <Show below="md">
              <Burger />
            </Show>
            <Link
              href="https://portal.piaic.org/signup"
              target={"_blank"}
              color={"black"}
            >
              <Button variant={"ghost"} color={"teal"}>
                PIAIC
              </Button>
            </Link>
          </HStack>
         
        </Flex>
        
      </Box>
   
  );
}

export default Header;
