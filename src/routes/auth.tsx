import { RouteObject } from 'react-router-dom';
import AlertsPage from 'src/pages/AlertsPage';
import BreadCrumbsPage from 'src/pages/BreadCrumbsPage';
import { ButtonsPage } from 'src/pages/ButtonsPage';
import FormsPage from 'src/pages/FormsPage';
import HomePage from 'src/pages/HomePage';
import TablesPage from 'src/pages/TablesPage';
import InputsPage from '../pages/InputsPage';
import LinksPage from 'src/pages/LinksPage';

export const authRoutes: RouteObject[] = [
    {
        index: true,
        Component: HomePage,
    },
    {
        path: 'tables',
        Component: TablesPage,
    },
    {
        path: 'buttons',
        Component: ButtonsPage,
    },
    {
        path: 'breadcrumbs',
        Component: BreadCrumbsPage,
    },
    {
        path: 'forms',
        Component: FormsPage,
    },
    {
        path: 'alerts',
        Component: AlertsPage,
    },
    {
        path: 'inputs',
        Component: InputsPage,
    },
    {
        path: 'links',
        Component: LinksPage,
    },
    {
        path: '*',
        element: (
            <div>
                <h2 className="text-2xl font-bold text-slate-800 text-center">
                    404 Page Not Found
                </h2>
            </div>
        ),
    },
];
