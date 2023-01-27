import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "./Profile";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
