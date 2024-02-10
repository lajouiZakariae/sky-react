import { RouteObject } from 'react-router-dom';
import AlertsPage from 'src/pages/AlertsPage';
import BreadCrumbsPage from 'src/pages/BreadCrumbsPage';
import { ButtonsPage } from 'src/pages/ButtonsPage';
import FormsPage from 'src/pages/FormsPage';
import HomePage from 'src/pages/HomePage';
import InputsPage from '../pages/InputsPage';
import LinksPage from 'src/pages/LinksPage';
import MultiSectionFormPage from 'src/pages/MultiSectionFormPage';
import SimpleTablePage from 'src/pages/tables/SimpleTablePage';
import CategorizedTablePage from 'src/pages/tables/CategorizedTablePage';
import TableWithSubRowsPage from 'src/pages/tables/TableWithSubrowsPage';

export const authRoutes: RouteObject[] = [
    {
        index: true,
        Component: HomePage,
    },
    {
        path: 'tables',
        children: [
            { index: true, Component: SimpleTablePage },
            { path: 'categorized', Component: CategorizedTablePage },
            { path: 'with-subrows', Component: TableWithSubRowsPage },
        ],
    },
    {
        path: 'forms',
        children: [
            { index: true, Component: FormsPage },
            { path: 'multi-section', Component: MultiSectionFormPage },
        ],
    },
    {
        path: 'ui-elements',
        children: [
            {
                path: 'buttons',
                Component: ButtonsPage,
            },
            {
                path: 'breadcrumbs',
                Component: BreadCrumbsPage,
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
        ],
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
