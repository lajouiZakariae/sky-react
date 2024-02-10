import {
    CheckIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
} from '@heroicons/react/16/solid';
import { HTMLAttributes } from 'react';

type variant = 'success' | 'info' | 'warning' | 'danger';

interface DivProps extends HTMLAttributes<HTMLDivElement> {
    variant?: variant;
}

export function ShadowAlert(props: DivProps) {
    const { variant = 'success', className, children, ...rest } = props;

    const variantsStyle = {
        success: 'bg-green-200/80 dark:bg-green-500/15',
        info: 'bg-teal-200/80 dark:bg-teal-500/15',
        danger: 'bg-red-200/80 dark:bg-red-500/15',
        warning: 'bg-yellow-200/80 dark:bg-yellow-500/15',
    };

    const iconVariants = {
        success: <CheckIcon className="size-6 text-green-500" />,
        info: <InformationCircleIcon className="size-6 text-teal-500" />,
        danger: <ExclamationCircleIcon className="size-6 text-red-500" />,
        warning: <ExclamationTriangleIcon className="size-6 text-yellow-500" />,
    };

    return (
        <div
            className={`flex items-center rounded-lg px-5 py-3 text-slate-700 dark:text-gray-100 ${variantsStyle[variant]} ${className}`}
            {...rest}
        >
            {iconVariants[variant]}
            <div className="ml-4">{children}</div>
        </div>
    );
}
