import { PlusIcon } from '@heroicons/react/16/solid';

export default function SlateCircleButton() {
    return (
        <div className="flex items-center space-x-5">
            <button
                type="button"
                className="size-9 inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors duration-300"
            >
                <PlusIcon className="size-6" />
            </button>

            <button
                type="button"
                className="size-10 inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors duration-300"
            >
                <PlusIcon className="size-7" />
            </button>

            <button
                type="button"
                className="size-12 inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors duration-300"
            >
                <PlusIcon className="size-9" />
            </button>

            <button
                type="button"
                className="size-14 text-base inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors duration-300"
            >
                <PlusIcon className="size-10" />
            </button>

            <button
                type="button"
                className="size-16 text-base inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors duration-300"
            >
                <PlusIcon className="size-11" />
            </button>
        </div>
    );
}
