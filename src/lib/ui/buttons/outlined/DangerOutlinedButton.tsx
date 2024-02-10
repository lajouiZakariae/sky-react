export function DangerOutlinedButton({}) {
    const sizes = [
        'px-2.5 py-1.5 min-w-20 text-xs',
        'px-3 py-2 min-w-20 text-sm',
        'px-4 py-2 min-w-20 text-sm',
        'px-4 py-2 min-w-20 text-base',
        'px-6 py-3 min-w-20 text-base',
    ];

    return (
        <div className="space-x-5">
            <button
                type="button"
                className="px-2.5 py-1.5 min-w-20 text-xs font-medium inline-flex items-center justify-center border border-red-700  rounded shadow-sm text-red-700 bg-transparent dark:text-red-500 dark:hover:text-white dark:border-red-500 dark:hover:border-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
            >
                Click me
            </button>
            <button
                type="button"
                className="px-3 py-2 min-w-20 text-sm font-medium inline-flex items-center justify-center border border-red-700 leading-4  rounded-md shadow-sm text-red-700 bg-transparent dark:text-red-500 dark:hover:text-white dark:border-red-500 dark:hover:border-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
            >
                Click me
            </button>
            <button
                type="button"
                className="px-4 py-2 min-w-20 text-sm font-medium inline-flex items-center justify-center border border-red-700  rounded-md shadow-sm text-red-700 bg-transparent dark:text-red-500 dark:hover:text-white dark:border-red-500 dark:hover:border-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
            >
                Click me
            </button>
            <button
                type="button"
                className="px-4 py-2 min-w-20 text-base font-medium inline-flex items-center justify-center border border-red-700  rounded-md shadow-sm text-red-700 bg-transparent dark:text-red-500 dark:hover:text-white dark:border-red-500 dark:hover:border-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
            >
                Click me
            </button>
            <button
                type="button"
                className="px-6 py-3 min-w-20 text-base font-medium inline-flex items-center justify-center border border-red-700  rounded-md shadow-sm text-red-700 bg-transparent dark:text-red-500 dark:hover:text-white dark:border-red-500 dark:hover:border-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
            >
                Click me
            </button>
        </div>
    );
}
