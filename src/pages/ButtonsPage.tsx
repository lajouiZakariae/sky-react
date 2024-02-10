import { PlusIcon } from '@heroicons/react/16/solid';
import { Fragment, PropsWithChildren } from 'react';
import { CircleButton } from 'src/lib/ui/buttons/circle/CircleButton';
import GhostButton from 'src/lib/ui/buttons/ghost/GhostButton';
import { Button } from 'src/lib/ui/buttons/normal/Button';
import OutlinedButton from 'src/lib/ui/buttons/outlined/OutlinedButton';
import { SubHeading } from 'src/lib/ui/SubHeading';

export function Plates({ children }: PropsWithChildren) {
    return (
        <div className="max-md:flex mb-2">
            <div className="min-h-16 max-[400px]:basis-full max-md:flex-1 p-4 bg-slate-950 space-y-3 dark">
                <div className="space-y-3">{children}</div>
            </div>

            <div className="min-h-16 max-[400px]:basis-full max-md:flex-1 p-4 bg-white space-y-3">
                <div className="space-y-3">{children}</div>
            </div>
        </div>
    );
}

type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger';

export function ButtonsPage() {
    const Buttons = [Button, GhostButton, OutlinedButton];

    const variants: variant[] = [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
    ];

    const sizes: size[] = ['xs', 'sm', 'md', 'lg', 'xl'];

    const CircleButtonsIconSizes = [
        'size-6',
        'size-7',
        'size-8',
        'size-9',
        'size-10',
    ];

    return (
        <>
            <h1 className="text-2xl font-semibold mb-2">Buttons</h1>

            <Plates>
                <button
                    type="button"
                    className="px-4 py-2 min-w-20 text-sm inline-flex items-center justify-center border border-gray-300 rounded-md shadow-sm font-medium text-gray-700 bg-white hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:border-gray-600 dark:hover:border-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                    Edit
                </button>
            </Plates>

            {Buttons.map(Btn => (
                <Fragment key={Btn.name}>
                    <SubHeading>{Btn.name}</SubHeading>

                    {variants.map(variant => (
                        <Plates key={variant}>
                            <div className="flex items-center flex-col max-md:space-y-3 md:flex-row md:space-x-5">
                                {sizes.map(size => (
                                    <Btn
                                        size={size}
                                        variant={variant}
                                        key={size}
                                    >
                                        Click me
                                    </Btn>
                                ))}
                            </div>
                        </Plates>
                    ))}
                </Fragment>
            ))}

            <Fragment>
                <SubHeading>{CircleButton.name}</SubHeading>

                {variants.map(variant => (
                    <Plates key={variant}>
                        <div className="flex items-center flex-col max-md:space-y-3 md:flex-row md:space-x-5">
                            {sizes.map((size, index) => (
                                <CircleButton
                                    size={size}
                                    variant={variant}
                                    key={size}
                                >
                                    <PlusIcon
                                        className={
                                            CircleButtonsIconSizes[index]
                                        }
                                    />
                                </CircleButton>
                            ))}
                        </div>
                    </Plates>
                ))}
            </Fragment>
        </>
    );
}
