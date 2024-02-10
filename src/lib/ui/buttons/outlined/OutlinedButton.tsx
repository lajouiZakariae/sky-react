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

export default function OutlinedButton({
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
            'dark:text-indigo-500 dark:border-indigo-500 dark:hover:border-indigo-700 border-indigo-700 text-indigo-700 hover:bg-indigo-700  focus:ring-indigo-500',
        secondary:
            'dark:text-slate-500 dark:border-slate-500 dark:hover:border-slate-700 border-slate-700 text-slate-700 hover:bg-slate-700  focus:ring-slate-500',
        success:
            'dark:text-green-500 dark:border-green-500 dark:hover:border-green-700 border-green-700 text-green-700 hover:bg-green-700  focus:ring-green-500',
        info: 'dark:text-sky-500 dark:border-sky-500 dark:hover:border-sky-700 border-sky-700 text-sky-700 hover:bg-sky-700  focus:ring-sky-500',
        warning:
            'dark:text-yellow-500 dark:border-yellow-500 dark:hover:border-yellow-700 border-yellow-700 text-yellow-700 hover:bg-yellow-700 focus:ring-yellow-500',

        danger: 'dark:text-red-500 dark:border-red-500 dark:hover:border-red-700 border-red-700 text-red-700 hover:bg-red-700  focus:ring-red-500',
    };

    return (
        <button
            type="button"
            className={`font-medium inline-flex items-center justify-center border rounded shadow-sm bg-transparent transition-colors duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-white dark:hover:text-white dark:focus:ring-offset-ui-dark ${sizesTw[size]} ${variantsTw[variant]}`}
            {...rest}
        >
            {children}
        </button>
    );
}
