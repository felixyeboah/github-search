import { v4 as uuidv4 } from "uuid";

interface NavProps {
  id: number;
  name: string;
  path: string;
}

export const mainNav: NavProps[] = [
  { id: 1, name: "Pull requests", path: "/" },
  { id: 2, name: "Issues", path: "/" },
  { id: 3, name: "Marketplace", path: "/" },
  { id: 4, name: "Explore", path: "/" },
];

interface OptionsMenuProps {
  id: number;
  name: string;
}

interface SearchInfoProps {
  id: string;
  name: string;
  count: string;
}

export const optionsMenu: OptionsMenuProps[] = [
  { id: 1, name: "New repository" },
  { id: 2, name: "Import repository" },
  { id: 3, name: "New gist" },
  { id: 4, name: "New organization" },
  { id: 5, name: "New project" },
];

export const userMenu: OptionsMenuProps[] = [
  { id: 1, name: "Your profile" },
  { id: 2, name: "Your repositories" },
  { id: 3, name: "Your codespaces" },
  { id: 4, name: "Your enterprises" },
  { id: 5, name: "Your projects" },
  { id: 6, name: "Your discussions" },
  { id: 7, name: "Your stars" },
  { id: 8, name: "Your gists" },
];

export const footMenu: NavProps[] = [
  { id: 1, name: "Terms", path: "/" },
  { id: 1, name: "Privacy", path: "/" },
  { id: 1, name: "Security", path: "/" },
  { id: 1, name: "Status", path: "/" },
  { id: 1, name: "Docs", path: "/" },
  { id: 1, name: "Contact GitHub", path: "/" },
  { id: 1, name: "Pricing", path: "/" },
  { id: 1, name: "API", path: "/" },
  { id: 1, name: "Training", path: "/" },
  { id: 1, name: "Blog", path: "/" },
  { id: 1, name: "About", path: "/" },
];

export const searchSideMenu: SearchInfoProps[] = [
  { id: uuidv4(), name: "Repositories", count: "335" },
  { id: uuidv4(), name: "Code", count: "14K" },
  { id: uuidv4(), name: "Commits", count: "28" },
  { id: uuidv4(), name: "Issues", count: "11" },
  { id: uuidv4(), name: "Discussions", count: "0" },
  { id: uuidv4(), name: "Packages", count: "0" },
  { id: uuidv4(), name: "Marketplace", count: "0" },
  { id: uuidv4(), name: "Topics", count: "0" },
  { id: uuidv4(), name: "Wikis", count: "0" },
  { id: uuidv4(), name: "Users", count: "1K" },
];

export const techUsed: SearchInfoProps[] = [
  { id: uuidv4(), name: "HTML", count: "53" },
  { id: uuidv4(), name: "Javascript", count: "17" },
  { id: uuidv4(), name: "Java", count: "11" },
  { id: uuidv4(), name: "Python", count: "11" },
  { id: uuidv4(), name: "Jupiter Notebook", count: "10" },
  { id: uuidv4(), name: "C++", count: "4" },
  { id: uuidv4(), name: "CSS", count: "3" },
  { id: uuidv4(), name: "R", count: "2" },
  { id: uuidv4(), name: "Ruby", count: "2" },
  { id: uuidv4(), name: "SCSS", count: "2" },
];
