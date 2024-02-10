/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';

export default function DarkodeSwitch() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (enabled) {
            document.querySelector('html')?.classList.add('dark');
        } else {
            document.querySelector('html')?.classList.remove('dark');
        }
    }, [enabled]);

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`relative inline-flex flex-shrink-0 h-5 w-9 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                enabled ? 'bg-indigo-600' : 'bg-gray-200'
            }`}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`pointer-events-none inline-block size-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                    enabled ? 'translate-x-4' : 'translate-x-0'
                }`}
            />
        </Switch>
    );
}
