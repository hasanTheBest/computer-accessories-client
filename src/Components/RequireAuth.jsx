import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";

function RequireAuth({ children }) {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();

  // if (error) {
  //   return ""
  // }

  // if (loading) {
  //   return (
  //       Loading...
  //   );
  // }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
