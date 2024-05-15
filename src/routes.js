import PrivateRoute from "components/PrivateRoute";
import AuthLayout from "pages/auth";
import Home from "pages/Home";
import Login from "pages/Login";

const baseRoutes = [
  {
    path: "/",
    element: <Home />,
    requiresAuth: true, // Use `requiresAuth` for clarity
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

const withAuth = (routes) =>
  routes.map((route) => {
    if (route.requiresAuth) {
      // Wrap protected routes with PrivateRoute only if needed
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    // Recursively apply withAuth to child routes
    if (route.children) {
      route.children = withAuth(route.children);
    }
    return route; // Return the modified route
  });

const routes = withAuth(baseRoutes);

export default routes;
