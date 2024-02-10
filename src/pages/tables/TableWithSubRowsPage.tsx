import { TableWithSubrows } from 'src/lib/ui/tables/TableWithSubrows';

export default function TableWithSubRowsPage() {
    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-gray-100 mb-2">
                    Table With Subrows
                </h2>

                <TableWithSubrows />
            </div>
        </>
    );
}
