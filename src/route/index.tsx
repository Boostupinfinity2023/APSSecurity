import RouteMapping from "./components/RouteMapping";
import { BrowserRouter as Router, Route, Routes } from "react-router";

const routeMapping = new RouteMapping();

function AppRouter() {
    return (
        <Router>
            <Routes>
                {routeMapping.routes.map(({ path, component: Component }, index) => (
                    <Route
                        key={index}
                        path={path}
                        element={routeMapping.renderComponent(Component)}
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default AppRouter;
