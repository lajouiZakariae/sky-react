import { useState } from 'react';

export default function MultiStepForm() {
    const [step, setStep] = useState(1);

    return (
        <div>
            <form>
                {step === 1 ? (
                    <div className="space-y-2">
                        <div className="mt-1">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:bg-slate-900 dark:border-slate-700 dark:caret-slate-300 dark:text-white rounded"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="px-4 py-2 min-w-20 text-sm inline-flex items-center justify-center border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                            onClick={() => setStep(2)}
                        >
                            Next
                        </button>
                    </div>
                ) : null}
                {step === 2 ? (
                    <div>
                        <input type="text" />
                        <button
                            type="button"
                            className="px-4 py-2 min-w-20 text-sm inline-flex items-center justify-center border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                            onClick={() => setStep(3)}
                        >
                            Next
                        </button>
                    </div>
                ) : null}
                {step === 3 ? (
                    <div>
                        <input type="text" />
                    </div>
                ) : null}
            </form>
        </div>
    );
}
