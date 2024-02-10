import {
    ChartBarIcon,
    HomeIcon,
    InboxIcon,
    TableCellsIcon,
    TvIcon,
} from '@heroicons/react/16/solid';
import { NavLink } from './layout/Dashboard/types/types';
import { DeviceTabletIcon } from '@heroicons/react/16/solid';

export const navigation = (currentPathname: string): NavLink[] => [
    {
        name: 'Dashboard',
        href: '/',
        Icon: HomeIcon,
        current: currentPathname === '/',
    },
    {
        name: 'Forms',
        href: '#',
        Icon: DeviceTabletIcon,
        links: [
            {
                name: 'Simple',
                href: '/forms',
                current: currentPathname === '/forms',
            },
            {
                name: 'Multi Section',
                href: '/forms/multi-section',
                current: currentPathname === '/forms/multi-section',
            },
            // {
            //     name: 'Multi Step',
            //     href: '/forms/multi-step',
            //     current: currentPathname === '/forms/multi-step',
            // },
        ],
    },
    {
        name: 'Tables',
        href: '#',
        Icon: TableCellsIcon,
        links: [
            {
                name: 'Simple',
                href: '/tables',
                current: currentPathname === '/tables',
            },
            {
                name: 'Categorized',
                href: '/tables/categorized',
                current: currentPathname === '/tables/categorized',
            },
            {
                name: 'With Subrows',
                href: '/tables/with-subrows',
                current: currentPathname === '/tables/with-subrows',
            },
        ],
    },
    {
        name: 'UI Elements',
        href: '#',
        Icon: TableCellsIcon,
        links: [
            {
                name: 'Alerts',
                href: '/ui-elements/alerts',
                current: currentPathname.includes('alerts'),
            },
            {
                name: 'Buttons',
                href: '/ui-elements/buttons',
                current: currentPathname.includes('buttons'),
            },
            {
                name: 'Inputs',
                href: '/ui-elements/inputs',
                current: currentPathname.includes('inputs'),
            },
            {
                name: 'Links',
                href: '/ui-elements/links',
                current: currentPathname.includes('links'),
            },
            {
                name: 'Breadcrumbs',
                href: '/breadcrumbs',
                current: currentPathname.includes('breadcrumbs'),
            },
        ],
    },
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
