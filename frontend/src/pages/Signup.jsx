import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import { AuthConext } from "../context/AuthConext";

export default function Signup() {
  const { isAuth } = useContext(AuthConext);

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
        Signup
      </Typography>
      <SignupForm />
    </Box>
  );
}
