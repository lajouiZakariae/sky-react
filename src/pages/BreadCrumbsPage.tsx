import { BreadCrumb } from 'src/lib/ui/BreadCrumb';

export default function BreadCrumbsPage() {
    return (
        <div>
            <div className="mb-2">
                <div className="min-h-16 p-4 bg-ui-dark space-y-3 dark">
                    <div className="space-y-4">
                        <BreadCrumb
                            pages={[
                                { name: 'Projects', href: '#', current: false },
                                {
                                    name: 'Project Nero',
                                    href: '#',
                                    current: true,
                                },
                            ]}
                        />
                        <BreadCrumb
                            seperator="circle"
                            pages={[
                                { name: 'Projects', href: '#', current: false },
                                {
                                    name: 'Project Nero',
                                    href: '#',
                                    current: true,
                                },
                            ]}
                        />

                        <BreadCrumb
                            seperator="slash"
                            pages={[
                                { name: 'Projects', href: '#', current: false },
                                {
                                    name: 'Project Nero',
                                    href: '#',
                                    current: true,
                                },
                            ]}
                        />
                    </div>
                </div>

                <div className="min-h-16 p-4 bg-white space-y-3">
                    <div className="space-y-4">
                        <BreadCrumb
                            pages={[
                                { name: 'Projects', href: '#', current: false },
                                {
                                    name: 'Project Nero',
                                    href: '#',
                                    current: true,
                                },
                            ]}
                        />

                        <BreadCrumb
                            seperator="circle"
                            pages={[
                                { name: 'Projects', href: '#', current: false },
                                {
                                    name: 'Project Nero',
                                    href: '#',
                                    current: true,
                                },
                            ]}
                        />

                        <BreadCrumb
                            seperator="slash"
                            pages={[
                                { name: 'Projects', href: '#', current: false },
                                {
                                    name: 'Project Nero',
                                    href: '#',
                                    current: true,
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
