import { Box, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";

export default function Login() {
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
      <LoginForm />
    </Box>
  );
}
