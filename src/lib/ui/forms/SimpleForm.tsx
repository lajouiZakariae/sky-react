import {
    CheckCircleIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/16/solid';

export default function SimpleForm() {
    return (
        <form>
            <div className="space-y-3">
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
        </form>
    );
}
