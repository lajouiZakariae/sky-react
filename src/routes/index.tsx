import { Outlet, RouteObject } from 'react-router-dom';
import { authRoutes } from './auth';
import Dashboard from 'src/layout/Dashboard/Dashboard';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <Dashboard>
                <Outlet />
            </Dashboard>
        ),
        children: [...authRoutes],
    },
];
