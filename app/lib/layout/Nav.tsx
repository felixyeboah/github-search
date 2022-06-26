import {
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { AiOutlineBell } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

import { mainNav, optionsMenu, userMenu } from "~/lib/utils/constants";

const Nav = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      px={{ md: 8 }}
      justify="space-between"
      borderBottomWidth={1}
      pb={2}
    >
      <HStack spacing="1.1rem" align="center">
        <Link to="/">
          <Icon as={FaGithub} boxSize={8} />
        </Link>

        <HStack fontWeight="bold" align="center" spacing="1rem" fontSize="sm">
          {mainNav.map((nav) => (
            <Link key={nav.id} to={nav.path}>
              {nav.name}
            </Link>
          ))}
        </HStack>
      </HStack>

      <HStack spacing="0.1rem">
        <Box pos="relative">
          <Icon as={AiOutlineBell} boxSize={6} />
          <Box
            pos="absolute"
            w={2.5}
            h={2.5}
            bg="blue.500"
            rounded="full"
            top={0}
            right={1}
          />
        </Box>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<Icon as={MdOutlineArrowDropDown} boxSize={6} />}
            variant="ghost"
            align="center"
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
            _active={{ bg: "none" }}
            w={20}
          >
            <Icon as={BiPlus} boxSize={6} />
          </MenuButton>
          <MenuList fontSize="sm" bg="gray.900" minW={{ md: 40 }}>
            {optionsMenu.map((menu) => (
              <MenuItem
                key={menu.id}
                fontWeight="semibold"
                _hover={{ bg: "blue.500", color: "white" }}
              >
                {menu.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<Icon as={MdOutlineArrowDropDown} boxSize={6} />}
            variant="ghost"
            align="center"
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
            _active={{ bg: "none" }}
            w={20}
          >
            <Avatar src="/me.jpeg" size="xs" />
          </MenuButton>
          <MenuList fontSize="sm" bg="gray.900" minW={{ md: 40 }}>
            {userMenu.map((menu) => (
              <MenuItem
                key={menu.id}
                fontWeight="semibold"
                _hover={{ bg: "blue.500", color: "white" }}
              >
                {menu.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Nav;
