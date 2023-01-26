import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import PrivateRoute from "../components/PrivateRoute";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
