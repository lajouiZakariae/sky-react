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

export function CircleButton({
    size = 'md',
    variant = 'primary',
    children,
    className,
    ...rest
}: ButtonProps) {
    const sizesTw = {
        xs: 'size-9',
        sm: 'size-10',
        md: 'size-12',
        lg: 'size-14',
        xl: 'size-16',
    };

    const variantsTw = {
        primary: 'focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700',
        secondary: 'focus:ring-slate-500 bg-slate-600 hover:bg-slate-700',
        success: 'focus:ring-green-500 bg-green-600 hover:bg-green-700',
        info: 'focus:ring-sky-500 bg-sky-600 hover:bg-sky-700',
        warning: 'focus:ring-yellow-500 bg-yellow-600 hover:bg-yellow-700',
        danger: 'focus:ring-red-500 bg-red-600 hover:bg-red-700',
    };

    return (
        <button
            type="button"
            className={`inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300 dark:focus:ring-offset-ui-dark ${sizesTw[size]} ${variantsTw[variant]} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
