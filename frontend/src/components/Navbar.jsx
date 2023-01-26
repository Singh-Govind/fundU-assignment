import { NavLink } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      padding="1rem 3rem"
      alignItems="center"
      spacing={2}
      borderBottom="1px solid lightgray"
    >
      <Box>
        <Typography variant="h2" component="h1">
          FundU
        </Typography>
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </Stack>
    </Stack>
  );
}
