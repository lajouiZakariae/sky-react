import { PropsWithChildren } from 'react';

export function SubHeading({ children }: PropsWithChildren) {
    return (
        <h2 className="text-lg font-semibold text-slate-800 dark:text-gray-100 mb-2">
            {children}
        </h2>
    );
}
