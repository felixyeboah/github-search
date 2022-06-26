import { Link as ChakraLink } from "@chakra-ui/layout";
import {
  Button,
  Divider,
  Grid,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { GoRepo } from "react-icons/go";
import { MdOutlineArrowDropDown } from "react-icons/md";

import type { SearchPayload } from "~/lib/types/queryTypes";
import { searchSideMenu, techUsed } from "~/lib/utils/constants";

const SearchResults = ({ total_count, items }: SearchPayload) => {
  return (
    <Grid templateColumns={{ md: "30% 70%" }} gap={4}>
      <Stack spacing="2rem">
        <Stack
          spacing="1rem"
          w="full"
          p={4}
          rounded="md"
          borderWidth={1}
          h={{ md: "26rem" }}
        >
          {searchSideMenu.map((repo) => (
            <HStack
              key={repo.id}
              align="center"
              fontSize="sm"
              justify="space-between"
            >
              <Text fontWeight="semibold">{repo.name}</Text>
              <Tag rounded="full">{repo.count}</Tag>
            </HStack>
          ))}
        </Stack>

        <Stack
          spacing="1rem"
          w="full"
          p={4}
          rounded="md"
          borderWidth={1}
          h={{ md: "26rem" }}
        >
          <Text fontWeight="bold">Languages</Text>
          {techUsed.map((repo) => (
            <HStack
              key={repo.id}
              align="center"
              fontSize="sm"
              justify="space-between"
            >
              <Text>{repo.name}</Text>
              <Text>{repo.count}</Text>
            </HStack>
          ))}
        </Stack>
      </Stack>
      <Stack divider={<Divider />}>
        <HStack align="center" justify="space-between" px={3}>
          <Text fontSize={{ md: "lg" }} fontWeight="bold">
            {total_count} repository results
          </Text>
          <Menu>
            <MenuButton
              h={8}
              as={Button}
              fontSize="xs"
              rightIcon={<MdOutlineArrowDropDown />}
            >
              <Text color="gray.400">
                Sort:{" "}
                <Text as="span" color="white">
                  Best match
                </Text>
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        <Stack divider={<Divider />}>
          {items.map((user) => (
            <ChakraLink
              as={Link}
              _hover={{ textDecor: "none", bg: "gray.800" }}
              py={6}
              px={3}
              rounded="md"
              key={user.login}
              to={`/search/${user.login}`}
            >
              <HStack>
                <Icon as={GoRepo} />
                <Text>{user.login}</Text>
              </HStack>
            </ChakraLink>
          ))}
        </Stack>
      </Stack>
    </Grid>
  );
};

export default SearchResults;
