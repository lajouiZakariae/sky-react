export function TableWithSubrows() {
    return (
        <div className="overflow-hidden overflow-x-auto border rounded-lg dark:border-slate-900 dark:bg-slate-900">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-slate-50 dark:bg-slate-900">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                            Age
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                            Address
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                        >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(3).keys()].map(() => (
                        <>
                            <tr className="border-y border-gray-200 dark:border-gray-700">
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

                            <tr className="bg-slate-100 dark:bg-slate-800">
                                <th className="text-start px-6 py-3 relative"></th>
                                <th className="text-start px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                    Name
                                </th>
                                <th className="text-start px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                    Quantity
                                </th>
                                <th className="text-start px-6 py-3 whitespace-nowrap text-sm">
                                    Price
                                </th>
                            </tr>

                            {[...Array(3).keys()].map(() => (
                                <tr className="bg-slate-100 dark:bg-slate-800">
                                    <td className="px-6 py-3 relative"></td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                        product 1
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                        25
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm font-medium">
                                        20
                                    </td>
                                </tr>
                            ))}

                            <tr className="bg-slate-100 dark:bg-slate-800">
                                <td className="px-6 py-3 relative"></td>
                                <td
                                    colSpan={2}
                                    className="font-bold px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                >
                                    Total
                                </td>
                                <td className="font-bold px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                    4800
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
