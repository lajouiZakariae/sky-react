import { Menu } from '@headlessui/react';
import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';
import { Dispatch, SetStateAction } from 'react';
import DropDownTransition from '../DropDownTransition';
import DarkodeSwitcher from './DarkModeSwitcher';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];

export default function StickyBar({
    setSidebarOpen,
}: {
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 border-b border-gray-200 dark:border-slate-800 shadow-sm bg-white text-slate-800 dark:bg-gray-950 dark:text-gray-100">
            <button
                type="button"
                className="px-4 border-r border-gray-200 dark:border-slate-800 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="size-6" aria-hidden="true" />
            </button>

            <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex">
                    <form
                        className="w-full flex md:ml-0"
                        action="#"
                        method="GET"
                    >
                        <label htmlFor="search-field" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </div>
                            <input
                                id="search-field"
                                className="block w-full h-full pl-8 pr-3 py-2 border-transparent bg-transparent dark:text-gray-100"
                                placeholder="Search"
                                type="search"
                                name="search"
                            />
                        </div>
                    </form>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                    <DarkodeSwitcher />

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                        <div className="flex items-center space-x-3">
                            <div className="hidden lg:block">
                                <h3 className="text-sm text-slate-800 dark:text-gray-50">
                                    Zakariae Lajoui
                                </h3>
                                <p className="text-xs italic text-gray-500 dark:text-gray-300">
                                    Admin
                                </p>
                            </div>
                            <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="size-9 rounded-full"
                                    src="/profile.jpg"
                                    alt=""
                                />
                            </Menu.Button>
                        </div>

                        <DropDownTransition>
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map(item => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <a
                                                href={item.href}
                                                className={`block px-4 py-2 text-sm transition duration-300 ${
                                                    active
                                                        ? 'bg-gray-100 text-slate-800'
                                                        : ''
                                                }`}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </DropDownTransition>
                    </Menu>
                </div>
            </div>
        </div>
    );
}
