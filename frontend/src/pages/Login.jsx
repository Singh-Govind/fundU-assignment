import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { AuthConext } from "../context/AuthConext";

export default function Login() {
  const { isAuth, login } = useContext(AuthConext);

  const loginUser = async (values) => {
    let res = await fetch(
      "https://easy-ruby-seahorse-garb.cyclic.app/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: values,
      }
    );

    let data = await res.json();

    login(data.user);
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      sx={{
        mt: "3rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "3rem 4rem",
      }}
    >
      <Typography variant="h4" textAlign="center" component="h2" mb="3rem">
        Login
      </Typography>
      <LoginForm loginUser={loginUser} />
    </Box>
  );
}
