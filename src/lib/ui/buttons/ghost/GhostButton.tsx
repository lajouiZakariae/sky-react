import { ButtonHTMLAttributes } from 'react';

type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: size;
    variant?: variant;
}

export default function GhostButton({
    size = 'md',
    variant = 'primary',
    children,
    className,
    ...rest
}: ButtonProps) {
    const sizesTw = {
        xs: 'px-2.5 py-1.5 min-w-20 text-xs rounded',
        sm: 'px-3 py-2 min-w-20 text-sm rounded-md leading-4',
        md: 'px-4 py-2 min-w-20 text-sm rounded-md',
        lg: 'px-4 py-2 min-w-20 text-base rounded-md',
        xl: 'px-6 py-3 min-w-20 text-base rounded-md',
    };

    const variantsTw = {
        primary:
            'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500',
        secondary:
            'text-slate-700 bg-slate-100 hover:bg-slate-200 focus:ring-slate-500',
        success:
            'text-green-700 bg-green-100 hover:bg-green-200 focus:ring-green-500',
        info: 'text-sky-700 bg-sky-100 hover:bg-sky-200 focus:ring-sky-500',
        warning:
            'text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:ring-yellow-500',

        danger: 'text-red-700 bg-red-100 hover:bg-red-200 focus:ring-red-500',
    };

    return (
        <button
            type="button"
            className={`inline-flex items-center justify-center border border-transparent font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-ui-dark ${sizesTw[size]} ${variantsTw[variant]} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
