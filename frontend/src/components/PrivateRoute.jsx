import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthConext } from "../context/AuthConext";

export default function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthConext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}
