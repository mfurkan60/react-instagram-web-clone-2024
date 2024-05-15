import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = false;
  const location = useLocation();

  if (!user) {
    // Redirect to login with return URL for better user experience
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  // Render the protected route's content if user is authenticated
  return children;
}
