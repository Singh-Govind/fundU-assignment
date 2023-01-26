import { Box, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

export default function Signup() {
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
