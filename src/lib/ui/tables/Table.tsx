export default function Table() {
    return (
        <div className="overflow-hidden overflow-x-auto border rounded-lg dark:border-slate-900 dark:bg-slate-900">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700/50">
                <thead className="bg-slate-50 dark:bg-slate-900">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase"
                        >
                            Age
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase"
                        >
                            Address
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-end text-xs font-medium text-gray-500 dark:text-gray-300 uppercase"
                        >
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-slate-700/50 [&_tr:odd]:bg-white [&_tr:even]:bg-gray-500">
                    {[...Array(3).keys()].map(() => (
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                John Brown
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                45
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                New York No. 1 Lake Park
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
