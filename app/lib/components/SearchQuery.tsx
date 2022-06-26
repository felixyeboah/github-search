// eslint-disable-next-line import/no-extraneous-dependencies
import { Link as ChakraLink } from "@chakra-ui/layout";
import { Button, HStack, Icon, Input, Stack, Text } from "@chakra-ui/react";
import { Form, Link } from "@remix-run/react";
import { BiSearch } from "react-icons/bi";

const SearchQuery = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (value: string) => void;
}) => {
  return (
    <Stack>
      <HStack align="center">
        <Icon as={BiSearch} boxSize={7} />
        <Text fontSize={{ md: "2xl" }} fontWeight="semibold">
          Search more than 553M issues
        </Text>
      </HStack>

      <Form method="get" action="">
        <HStack>
          <Input
            value={query}
            type="search"
            size="sm"
            rounded="md"
            name="q"
            placeholder="Search Github"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <Button size="sm" type="submit">
            Search
          </Button>
        </HStack>
      </Form>

      <HStack fontSize="sm">
        <Text>
          <Text as="span" fontSize="bold">
            ProTip!
          </Text>
          {" For an "}
          <ChakraLink as={Link} to="#" color="blue.500">
            advanced search
          </ChakraLink>
          , use some of our{" "}
          <ChakraLink as={Link} to="#" color="blue.500">
            prefixes
          </ChakraLink>
        </Text>
      </HStack>
    </Stack>
  );
};

export default SearchQuery;
