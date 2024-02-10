import { RouteObject } from 'react-router-dom';
import AlertsPage from 'src/pages/ui-elements/AlertsPage';
import BreadCrumbsPage from 'src/pages/ui-elements/BreadCrumbsPage';
import { ButtonsPage } from 'src/pages/ui-elements/ButtonsPage';
import FormsPage from 'src/pages/forms/FormsPage';
import HomePage from 'src/pages/HomePage';
import InputsPage from '../pages/ui-elements/InputsPage';
import LinksPage from 'src/pages/ui-elements/LinksPage';
import MultiSectionFormPage from 'src/pages/forms/MultiSectionFormPage';
import SimpleTablePage from 'src/pages/tables/SimpleTablePage';
import CategorizedTablePage from 'src/pages/tables/CategorizedTablePage';
import TableWithSubrowsPage from 'src/pages/tables/TableWithSubrowsPage';
// import MultiStepForm from 'src/lib/ui/forms/MultiStepForm';

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
            { path: 'with-subrows', Component: TableWithSubrowsPage },
        ],
    },
    {
        path: 'forms',
        children: [
            { index: true, Component: FormsPage },
            { path: 'multi-section', Component: MultiSectionFormPage },
            // { path: 'multi-step', Component: MultiStepForm },
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
