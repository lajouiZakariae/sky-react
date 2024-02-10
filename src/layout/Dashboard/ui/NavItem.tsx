import { Link } from 'react-router-dom';
import { NavLink } from 'src/layout/Dashboard/types/types';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import DropDownTransition from '../DropDownTransition';

export default function NavItem({ name, href, Icon, current, links }: NavLink) {
    const hasDropDown = links && links.length > 0;
    const isDropDownActive = links?.some(({ current }) => current);

    const currentLinkStyle = 'bg-sky-50 text-sky-600';

    const navItemLinkStyle = `group relative flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
        current
            ? currentLinkStyle
            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
    }`;

    if (!hasDropDown) {
        return (
            <Link key={name} to={href} className={navItemLinkStyle}>
                <Icon
                    className={`mr-3 flex-shrink-0 size-6`}
                    aria-hidden="true"
                />
                {name}
            </Link>
        );
    }

    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button
                        className={`group w-full relative flex items-center p-2 text-sm font-medium rounded-md ${
                            isDropDownActive
                                ? currentLinkStyle
                                : 'text-gray-500/90 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                        }`}
                    >
                        <Icon
                            className={`mr-3 flex-shrink-0 size-6 ${
                                isDropDownActive
                                    ? ''
                                    : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300'
                            }`}
                            aria-hidden="true"
                        />
                        {name}
                        <ChevronRightIcon
                            className={`absolute right-3 top-2.5 size-5 transition-transform ${
                                open ? 'rotate-90' : ''
                            }`}
                        />
                    </Disclosure.Button>

                    <DropDownTransition>
                        <Disclosure.Panel className="flex flex-col">
                            {links?.map(({ name, href, current }) => (
                                <Link
                                    key={name}
                                    to={href}
                                    className={`group relative flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                                        current
                                            ? 'text-slate-800'
                                            : 'text-gray-500/90 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                                    }`}
                                >
                                    <span className="inline-flex items-center justify-center w-6 mr-3">
                                        {current ? (
                                            <span className="size-[6px] bg-sky-700/80 rounded-full"></span>
                                        ) : (
                                            <span className="size-[4px] bg-gray-500/80 rounded-full"></span>
                                        )}
                                    </span>
                                    {name}
                                </Link>
                            ))}
                        </Disclosure.Panel>
                    </DropDownTransition>
                </>
            )}
        </Disclosure>
    );
}
