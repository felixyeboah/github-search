import type { SearchDataProp } from "~/routes";

export const searchGithubUser = async ({
  query,
  page,
  per_page = 20,
}: {
  query?: string | null;
  page: number | null;
  per_page?: number | null;
}): Promise<SearchDataProp> => {
  return fetch(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${per_page}`
  ).then((res) => res.json());
};
