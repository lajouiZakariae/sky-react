import { Outlet, RouteObject } from 'react-router-dom';
import { authRoutes } from './auth';
import Dashboard from 'src/layout/Dashboard/Dashboard';
import GrayDashboard from 'src/layout/GrayDashboard/GrayDashboard';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <GrayDashboard>
                <Outlet />
            </GrayDashboard>
        ),
        children: [...authRoutes],
    },
];
