import {
    ChartBarIcon,
    HomeIcon,
    InboxIcon,
    TableCellsIcon,
} from '@heroicons/react/16/solid';
import { NavLink } from './layout/Dashboard/types/types';

export const navigation = (currentPathname: string): NavLink[] => [
    {
        name: 'Dashboard',
        href: '/',
        Icon: HomeIcon,
        current: currentPathname === '/',
    },
    {
        name: 'UI Elements',
        href: '#',
        Icon: TableCellsIcon,
        links: [
            {
                name: 'Alerts',
                href: '/alerts',
                current: currentPathname.includes('alerts'),
            },
            {
                name: 'Buttons',
                href: '/buttons',
                current: currentPathname.includes('buttons'),
            },
            {
                name: 'Inputs',
                href: '/inputs',
                current: currentPathname.includes('inputs'),
            },
            {
                name: 'Links',
                href: '/links',
                current: currentPathname.includes('links'),
            },
            {
                name: 'Breadcrumbs',
                href: '/breadcrumbs',
                current: currentPathname.includes('breadcrumbs'),
            },
            {
                name: 'Tables',
                href: '/tables',
                current: currentPathname.includes('tables'),
            },
        ],
    },
    { name: 'Documents', href: '#', Icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', Icon: ChartBarIcon, current: false },
];

// export const navigation = (currentPathname: string) => [
//     {
//         name: 'Menu',
//         _children: [
//             {
//                 name: 'Dashboard',
//                 href: '/',
//                 Icon: HomeIcon,
//                 current: currentPathname === '/',
//             },
//             {
//                 name: 'UI Elements',
//                 href: '#',
//                 Icon: TableCellsIcon,
//                 links: [
//                     {
//                         name: 'Alerts',
//                         href: '/alerts',
//                         current: currentPathname.includes('alerts'),
//                     },
//                     {
//                         name: 'Buttons',
//                         href: '/buttons',
//                         current: currentPathname.includes('buttons'),
//                     },
//                     {
//                         name: 'Inputs',
//                         href: '/inputs',
//                         current: currentPathname.includes('inputs'),
//                     },
//                     {
//                         name: 'Links',
//                         href: '/links',
//                         current: currentPathname.includes('links'),
//                     },
//                     {
//                         name: 'Breadcrumbs',
//                         href: '/breadcrumbs',
//                         current: currentPathname.includes('breadcrumbs'),
//                     },
//                     {
//                         name: 'Tables',
//                         href: '/tables',
//                         current: currentPathname.includes('tables'),
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         name: 'Documents',
//         href: '#',
//         Icon: InboxIcon,
//         current: false,
//     },
//     {
//         name: 'Reports',
//         href: '#',
//         Icon: ChartBarIcon,
//         current: false,
//     },
// ];
