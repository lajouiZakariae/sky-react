import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import { navigation } from 'src/navigation-links';

export default function SidebarContent() {
    const { pathname } = useLocation();

    return (
        <>
            <div className="flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-8 w-auto" src="/vite.svg" alt="Workflow" />
            </div>

            <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation(pathname).map(item => (
                    <NavItem key={item.name} {...item} />
                ))}
            </nav>
        </>
    );
}
