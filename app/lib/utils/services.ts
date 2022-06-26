import type { SearchDataProp } from "~/routes";

export const searchGithubUser = async (
  username: string | null
): Promise<SearchDataProp> => {
  return fetch(`${process.env.GITHUB_API}/search/users?q=${username}`).then(
    (res) => res.json()
  );
};
