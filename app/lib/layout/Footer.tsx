import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import { footMenu } from "~/lib/utils/constants";

const Footer = () => {
  return (
    <HStack
      as="footer"
      align="center"
      justify="center"
      fontSize="sm"
      spacing="1rem"
      borderTopWidth={1}
      pt={5}
    >
      <HStack color="gray.500" fontWeight="semibold">
        <Icon as={FaGithub} boxSize={5} />
        <Text>
          &copy; {new Date().getFullYear()} -{" "}
          <Link href="https://sznm.dev" isExternal>
            GitHub, Inc.
          </Link>
        </Text>
      </HStack>

      <HStack fontWeight="medium">
        {footMenu.map((menu) => (
          <Link key={menu.id} href={menu.path} color="blue.400">
            {menu.name}
          </Link>
        ))}
      </HStack>
    </HStack>
  );
};

export default Footer;
