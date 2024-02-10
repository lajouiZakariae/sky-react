import { Link } from 'react-router-dom';
import { NavLink } from 'src/layout/Dashboard/types/types';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { Fragment } from 'react';

export default function NavItem({ name, href, Icon, current, links }: NavLink) {
    const hasDropDown = links && links.length > 0;

    const isDropDownActive = links?.some(({ current }) => current);

    const navItemLinkStyle = `w-full group relative flex items-center px-2 py-2 text-sm font-medium rounded-md transition duration-300 ${
        current
            ? 'bg-indigo-100/50 text-indigo-700/80'
            : 'text-gray-300 hover:text-gray-400'
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
                    <Disclosure.Button className={`${navItemLinkStyle}`}>
                        <Icon
                            className={`mr-3 flex-shrink-0 size-6`}
                            aria-hidden="true"
                        />
                        {name}
                        <ChevronRightIcon
                            className={`absolute right-3 top-2.5 size-5 transition-transform ${
                                open ? 'rotate-90' : ''
                            }`}
                        />
                    </Disclosure.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
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
                                            <span className="size-[6px] bg-indigo-700/80 rounded-full"></span>
                                        ) : (
                                            <span className="size-[4px] bg-gray-500/80 rounded-full"></span>
                                        )}
                                    </span>
                                    {name}
                                </Link>
                            ))}
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
}
