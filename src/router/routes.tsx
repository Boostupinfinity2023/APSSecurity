import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const Login = lazy(() => import('../pages/Auth/Login'));

const routes = [
    {
        path: '/dashboard',
        element: <Index />,
        layout: 'default',
    },
    {
        path: '/',
        element: <Login />,
        layout: 'blank',
    },

];

export { routes };
