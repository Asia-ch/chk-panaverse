import {
  Flex,
  Stack,
  Link,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
  HStack,
  List,
} from "@chakra-ui/react";
import { BiBarChart } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineUsers, HiOutlineBuildingStorefront } from "react-icons/hi2";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavMenu = () => {
  return (
    <>
      <List color="black" fontWeight="bold">
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "left", md: "center" }}
        >
          <Link href="/">Home</Link>
          <Link href="/support">Support</Link>
          <Link href="https://chakra-ui.com/getting-started" target={"_blank"}>
            Documentation
          </Link>
        </Stack>
      </List>
    </>
  );
};

export default NavMenu;
