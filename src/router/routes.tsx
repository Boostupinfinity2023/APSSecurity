import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const Login = lazy(() => import('../pages/Auth/Login'));
const Inventory = lazy(() => import('../pages/HRM/Inventory'));

const routes = [
    {
        path: '/dashboard',
        element: <Index />,
        layout: 'default',
    },
    {
        path: '/inventory',
        element: <Inventory />,
        layout: 'default',
    },
    {
        path: '/',
        element: <Login />,
        layout: 'blank',
    },

];

export { routes };
