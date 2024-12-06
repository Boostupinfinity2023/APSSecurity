import { lazy, Suspense } from "react";

const Home = lazy(() => import('../../App'));
class RouteMapping {
    routes = [
        {
            path: '/',
            component: Home,
            layout: 'Blank',
            className: '',
            is_Child: false,
        }
    ];

    renderComponent(Component: any) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component />
            </Suspense>
        );
    }
}

export default RouteMapping;
