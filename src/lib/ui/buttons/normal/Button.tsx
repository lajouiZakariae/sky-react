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

// 'ui-dark': '#23232c'

export function Button({
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
        primary: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
        secondary: 'bg-slate-600 hover:bg-slate-700 focus:ring-slate-500',
        success: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
        info: 'bg-sky-600 hover:bg-sky-700 focus:ring-sky-500',
        warning: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    };

    return (
        <button
            type="button"
            className={`inline-flex items-center justify-center border border-transparent font-medium shadow-sm text-white transition-colors duration-300 focus:outline-none focus:ring-2 dark:focus:ring-offset-ui-dark focus:ring-offset-2 ${sizesTw[size]} ${variantsTw[variant]} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
