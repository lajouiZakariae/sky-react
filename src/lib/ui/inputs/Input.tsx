import { Plates } from 'src/pages/ButtonsPage';
import { SubHeading } from '../SubHeading';
import InputGroup from './InputGroup';
import InputGroupWithMark from './InputGroupWithMark';

export function Input() {
    return (
        <>
            <SubHeading>Input Group</SubHeading>

            <Plates>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-slate-200"
                    >
                        Email
                    </label>

                    <div className="mt-1">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:bg-slate-800 dark:border-slate-700 dark:caret-slate-300 dark:text-white rounded"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                </div>
            </Plates>

            <Plates>
                <InputGroup error />
            </Plates>

            <Plates>
                <InputGroup success />
            </Plates>

            <SubHeading>Input Group With Mark</SubHeading>

            <Plates>
                <InputGroupWithMark error />
            </Plates>

            <Plates>
                <InputGroupWithMark success />
            </Plates>
        </>
    );
}
