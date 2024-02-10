interface Props {
    success?: boolean;
    error?: boolean;
}

export default function InputGroup({ success = false, error = false }: Props) {
    return (
        <div>
            <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-slate-200"
            >
                Email
            </label>

            <div className="mt-1">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={`rounded block w-full pr-10 sm:text-sm dark:bg-slate-900 dark:text-white dark:caret-slate-300 ${
                        error
                            ? 'border-red-500 placeholder-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500'
                            : success
                            ? 'border-green-600 placeholder-green-600 focus:outline-none focus:ring-green-600 focus:border-green-600'
                            : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-900 dark:border-slate-700'
                    }`}
                    placeholder="you@example.com"
                    defaultValue="zakariaelajoui"
                    aria-invalid="true"
                    aria-describedby="email-error"
                />
            </div>

            {error ? (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                    Your Email is Not Valid
                </p>
            ) : null}
        </div>
    );
}
