import {
  Avatar,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import moment from "moment";
import { BiBuildings } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GoRepo, GoOctoface } from "react-icons/go";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { RiUser6Fill } from "react-icons/ri";

import type { UserInfo } from "~/lib/types/queryTypes";

export const loader: LoaderFunction = async ({ params }): Promise<Response> => {
  const user = params.slug;
  const { result } = await fetch(
    `${process.env.GITHUB_API}/users/${user}`
  ).then((res) => res.json());
  return json({ result });
};

export default function SearchSlug() {
  const data = useLoaderData<UserInfo>();

  const {
    name,
    login,
    avatar_url,
    html_url,
    company,
    bio,
    location,
    blog,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
  } = data;

  return (
    <Stack w={{ md: 700 }} mx="auto" spacing="1.3rem">
      <Avatar size="xl" src={avatar_url} />
      <Stack spacing="-0.1rem">
        <Heading as="h4" fontSize={{ md: "2xl" }}>
          {name}
        </Heading>
        <Link href={html_url} isExternal>
          <Text fontWeight="semibold" color="gray.400">
            @{login}
          </Text>
        </Link>
      </Stack>

      {bio && <Text>{bio}</Text>}

      <List as={Stack} spacing="0.7rem" fontSize="sm" gap={2} color="gray.400">
        {location && (
          <ListItem>
            <ListIcon as={HiOutlineLocationMarker} />
            {location}
          </ListItem>
        )}

        {company && (
          <ListItem>
            <ListIcon as={BiBuildings} />
            {company}
          </ListItem>
        )}

        {blog && (
          <ListItem>
            <ListIcon as={BsLink45Deg} />
            <Link href={`https://${blog}`} isExternal>
              {blog}
            </Link>
          </ListItem>
        )}

        {twitter_username && (
          <ListItem>
            <ListIcon as={FaTwitter} />
            <Link href={`https://twitter.com/${twitter_username}`} isExternal>
              @{twitter_username}
            </Link>
          </ListItem>
        )}

        {created_at && (
          <ListItem>
            <ListIcon as={MdDateRange} />
            Join {moment(created_at).format("YYYY")}
          </ListItem>
        )}

        {public_repos && (
          <ListItem>
            <ListIcon as={GoRepo} />
            {public_repos} public repos
          </ListItem>
        )}

        {public_gists && (
          <ListItem>
            <ListIcon as={GoOctoface} />
            {public_gists} public gists
          </ListItem>
        )}

        {followers && (
          <ListItem>
            <ListIcon as={FiUsers} />
            {followers} followers
          </ListItem>
        )}

        {following && (
          <ListItem>
            <ListIcon as={RiUser6Fill} />
            {following} following
          </ListItem>
        )}
      </List>
    </Stack>
  );
}
