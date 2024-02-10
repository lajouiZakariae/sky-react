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

export function Alert(props: DivProps) {
    const { variant = 'success', className, children, ...rest } = props;

    const variantsStyle = {
        success: 'border-green-500',
        info: 'border-teal-500',
        danger: 'border-red-500',
        warning: 'border-yellow-500',
    };

    const iconVariants = {
        success: <CheckIcon className="size-6 text-green-500" />,
        info: <InformationCircleIcon className="size-6 text-teal-500" />,
        danger: <ExclamationCircleIcon className="size-6 text-red-500" />,
        warning: <ExclamationTriangleIcon className="size-6 text-yellow-500" />,
    };

    return (
        <div
            className={`flex items-center px-5 py-3 border-l-4 bg-gray-100 text-slate-700 dark:bg-slate-900 dark:text-gray-100 ${variantsStyle[variant]} ${className}`}
            {...rest}
        >
            {iconVariants[variant]}
            <div className="ml-4">{children}</div>
        </div>
    );
}
