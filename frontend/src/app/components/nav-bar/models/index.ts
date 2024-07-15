type NavItem = {
  label: string;
  link: string;
};

type NavBarLink = NavItem & { children?: NavItem[] };

export type NavBarLinks = NavBarLink[];
