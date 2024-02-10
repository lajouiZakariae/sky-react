import { Disclosure } from '@headlessui/react';
import {
    CheckCircleIcon,
    ChevronDownIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/16/solid';
import { Fragment, PropsWithChildren, useEffect, useRef } from 'react';
import DropDownTransition from 'src/layout/Dashboard/DropDownTransition';

export function FormSection({
    title,
    children,
}: PropsWithChildren<{ title: string }>) {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        ref.current?.click();
    }, []);

    return (
        <Disclosure as="div" className="space-y-4">
            {({ open }) => (
                <>
                    <div className="relative">
                        <h3 className="text-lg font-bold">{title}</h3>

                        <Disclosure.Button
                            as="button"
                            type="button"
                            className="absolute right-0 top-1/2 -translate-y-1/2"
                            ref={ref}
                        >
                            <ChevronDownIcon
                                className={`text-gray-100 size-7 transition-transform duration-300 ${
                                    open ? '-rotate-90' : ''
                                }`}
                            />
                        </Disclosure.Button>
                    </div>

                    <DropDownTransition>
                        <Disclosure.Panel as="div" className="space-y-4">
                            {children}
                        </Disclosure.Panel>
                    </DropDownTransition>
                </>
            )}
        </Disclosure>
    );
}

export default function MultiSectionForm() {
    return (
        <form>
            <div className="space-y-4">
                <FormSection title="Section One">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                        >
                            Email
                        </label>

                        <div className="mt-1 relative rounded shadow-sm">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className={`rounded block w-full pr-10 sm:text-sm dark:bg-slate-900 dark:text-white dark:caret-slate-300 ${
                                    false
                                        ? 'border-red-500 placeholder-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500'
                                        : false
                                        ? 'border-green-600 placeholder-green-600 focus:outline-none focus:ring-green-600 focus:border-green-600'
                                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-900 dark:border-slate-700'
                                }`}
                                placeholder="you@example.com"
                                defaultValue="zakariaelajoui"
                                aria-invalid="true"
                                aria-describedby="email-error"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                {false ? (
                                    <ExclamationCircleIcon
                                        className="h-5 w-5 text-red-500"
                                        aria-hidden="true"
                                    />
                                ) : false ? (
                                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                                ) : null}
                            </div>
                        </div>

                        {false ? (
                            <p
                                className="mt-2 text-sm text-red-600"
                                id="email-error"
                            >
                                Your Email is Not Valid
                            </p>
                        ) : null}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                        >
                            Email
                        </label>

                        <div className="mt-1 relative rounded shadow-sm">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className={`rounded block w-full pr-10 sm:text-sm dark:bg-slate-900 dark:text-white dark:caret-slate-300 ${
                                    true
                                        ? 'border-red-500 placeholder-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500'
                                        : false
                                        ? 'border-green-600 placeholder-green-600 focus:outline-none focus:ring-green-600 focus:border-green-600'
                                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-900 dark:border-slate-700'
                                }`}
                                placeholder="you@example.com"
                                defaultValue="zakariaelajoui"
                                aria-invalid="true"
                                aria-describedby="email-error"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                {true ? (
                                    <ExclamationCircleIcon
                                        className="h-5 w-5 text-red-500"
                                        aria-hidden="true"
                                    />
                                ) : false ? (
                                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                                ) : null}
                            </div>
                        </div>

                        {true ? (
                            <p
                                className="mt-2 text-sm text-red-600"
                                id="email-error"
                            >
                                Your Email is Not Valid
                            </p>
                        ) : null}
                    </div>
                </FormSection>

                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                        >
                            Email
                        </label>

                        <div className="mt-1 relative rounded shadow-sm">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className={`rounded block w-full pr-10 sm:text-sm dark:bg-slate-900 dark:text-white dark:caret-slate-300 ${
                                    false
                                        ? 'border-red-500 placeholder-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500'
                                        : true
                                        ? 'border-green-600 placeholder-green-600 focus:outline-none focus:ring-green-600 focus:border-green-600'
                                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-900 dark:border-slate-700'
                                }`}
                                placeholder="you@example.com"
                                defaultValue="zakariaelajoui"
                                aria-invalid="true"
                                aria-describedby="email-error"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                {false ? (
                                    <ExclamationCircleIcon
                                        className="h-5 w-5 text-red-500"
                                        aria-hidden="true"
                                    />
                                ) : true ? (
                                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                                ) : null}
                            </div>
                        </div>

                        {false ? (
                            <p
                                className="mt-2 text-sm text-red-600"
                                id="email-error"
                            >
                                Your Email is Not Valid
                            </p>
                        ) : null}
                    </div>

                    <div className="flex flex-wrap md:gap-4 max-md:space-y-3">
                        <div className="basis-full md:basis-auto md:grow">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                            >
                                Email
                            </label>

                            <div className="mt-1 relative rounded shadow-sm">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={`rounded block w-full pr-10 sm:text-sm dark:bg-slate-900 dark:text-white dark:caret-slate-300 ${
                                        false
                                            ? 'border-red-500 placeholder-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500'
                                            : false
                                            ? 'border-green-600 placeholder-green-600 focus:outline-none focus:ring-green-600 focus:border-green-600'
                                            : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-900 dark:border-slate-700'
                                    }`}
                                    placeholder="you@example.com"
                                    defaultValue="zakariaelajoui"
                                    aria-invalid="true"
                                    aria-describedby="email-error"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    {false ? (
                                        <ExclamationCircleIcon
                                            className="h-5 w-5 text-red-500"
                                            aria-hidden="true"
                                        />
                                    ) : false ? (
                                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                                    ) : null}
                                </div>
                            </div>

                            {false ? (
                                <p
                                    className="mt-2 text-sm text-red-600"
                                    id="email-error"
                                >
                                    Your Email is Not Valid
                                </p>
                            ) : null}
                        </div>

                        <div className="basis-full md:basis-auto md:grow">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                            >
                                Email
                            </label>

                            <div className="mt-1 relative rounded shadow-sm">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={`rounded block w-full pr-10 sm:text-sm dark:bg-slate-900 dark:text-white dark:caret-slate-300 ${
                                        false
                                            ? 'border-red-500 placeholder-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500'
                                            : false
                                            ? 'border-green-600 placeholder-green-600 focus:outline-none focus:ring-green-600 focus:border-green-600'
                                            : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-900 dark:border-slate-700'
                                    }`}
                                    placeholder="you@example.com"
                                    defaultValue="zakariaelajoui"
                                    aria-invalid="true"
                                    aria-describedby="email-error"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    {false ? (
                                        <ExclamationCircleIcon
                                            className="h-5 w-5 text-red-500"
                                            aria-hidden="true"
                                        />
                                    ) : false ? (
                                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                                    ) : null}
                                </div>
                            </div>

                            {false ? (
                                <p
                                    className="mt-2 text-sm text-red-600"
                                    id="email-error"
                                >
                                    Your Email is Not Valid
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        className={`w-full inline-flex items-center justify-center border border-transparent font-medium shadow-sm text-white transition-colors duration-300 focus:outline-none focus:ring-2 dark:focus:ring-offset-slate-900 focus:ring-offset-2 px-4 py-2 min-w-20 text-sm rounded-md bg-indigo-800 hover:bg-indigo-600`}
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}
