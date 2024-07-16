export type NavItem = {
  label: string;
  link: string;
};

export type NavBarLink = NavItem & { children?: NavItem[] };

export type NavBarLinks = NavBarLink[];
