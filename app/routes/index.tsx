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
  const page = url.searchParams.get("page");
  const perPage = url.searchParams.get("per_page");
  const result = await searchGithubUser({
    query: term,
    page: Number(page),
    per_page: Number(perPage),
  });
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
  const [page, setPage] = useState<string>(() => {
    return searchParams.get("page") ?? "";
  });

  const query = queryValue.trim();

  const perPage = searchParams.get("per_page");

  useUpdateQueryStringValueWithoutNavigation("q", query);
  useUpdateQueryStringValueWithoutNavigation("page", page);

  return (
    <Stack spacing="3rem">
      <SearchQuery query={query} setQuery={setQuery} />
      <Loading transition={transition} />
      {queryValue === searchParams.get("q") && data && (
        <SearchResults
          page={Number(page)}
          per_page={Number(perPage)}
          setPage={setPage}
          {...data.result}
        />
      )}
    </Stack>
  );
}
