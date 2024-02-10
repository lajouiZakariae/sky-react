import Table from 'src/lib/ui/tables/Table';

export default function SimpleTablePage() {
    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-gray-100 mb-2">
                    Simple Table
                </h2>

                <Table />
            </div>
        </>
    );
}
