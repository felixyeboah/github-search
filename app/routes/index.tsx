import { Stack } from "@chakra-ui/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData,
  useSearchParams,
  useTransition,
} from "@remix-run/react";
import { useState } from "react";

import Loading from "~/lib/components/Loading";
import SearchQuery from "~/lib/components/SearchQuery";
import SearchResults from "~/lib/components/SearchResults";
import type { SearchPayload } from "~/lib/types/queryTypes";
import { useUpdateQueryStringValueWithoutNavigation } from "~/lib/utils/msic";
import { searchGithubUser } from "~/lib/utils/services";

export const meta: MetaFunction = () => {
  return {
    title: "Github Search",
    description: "Search users on Github",
  };
};

export const loader: LoaderFunction = async ({
  request,
}): Promise<Response> => {
  const url = new URL(request.url);
  const term = url.searchParams.get("q");
  const result = await searchGithubUser(term);
  return json({ result });
};

export type SearchDataProp = {
  result: SearchPayload;
};

export default function Home() {
  const data = useLoaderData<SearchDataProp>();
  const transition = useTransition();

  const [searchParams] = useSearchParams();
  const [queryValue, setQuery] = useState<string>(() => {
    return searchParams.get("q") ?? "";
  });
  const query = queryValue.trim();

  useUpdateQueryStringValueWithoutNavigation("q", query);

  return (
    <Stack spacing="3rem">
      <SearchQuery query={query} setQuery={setQuery} />
      <Loading transition={transition} />
      {queryValue === searchParams.get("q") && data && (
        <SearchResults {...data.result} />
      )}
    </Stack>
  );
}
