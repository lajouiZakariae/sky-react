import { Link } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/16/solid';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    seperator?: 'slash' | 'chevron' | 'circle';
    pages: { name: string; href: string; current: boolean }[];
}

export function BreadCrumb({ seperator = 'chevron', pages }: Props) {
    const seperators = {
        chevron: (
            <ChevronRightIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
            />
        ),
        circle: (
            <span className="inline-block size-[5px] bg-gray-400 rounded-full"></span>
        ),
        slash: (
            <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
            >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
        ),
    };

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-3">
                <li>
                    <div>
                        <Link
                            to="#"
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <HomeIcon
                                className="transition-colors duration-300 flex-shrink-0 h-5 w-5"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Home</span>
                        </Link>
                    </div>
                </li>
                {pages.map(({ name, href, current }) => (
                    <li key={name}>
                        <div className="flex items-center">
                            {seperators[seperator]}
                            <Link
                                to={href}
                                className={`ml-4 text-sm font-medium transition duration-300 ${
                                    current
                                        ? 'text-indigo-600 hover:text-gray-700 dark:text-indigo-600 dark:hover:text-gray-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                                aria-current={current ? 'page' : undefined}
                            >
                                {name}
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
