export type NavItemGroup = {
    name: string;
    _children: NavLink[];
};

export type NavLink = {
    name: string;
    href: string;
    Icon: any;
    current?: boolean;
    links?: DropDownLink[];
};

type DropDownLink = Omit<Omit<NavLink, 'links'>, 'Icon'>;
