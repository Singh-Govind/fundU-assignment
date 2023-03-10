import { NavLink } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import { AuthConext } from "../context/AuthConext";
import { useContext } from "react";
import { GoogleLogout } from "react-google-login";

export default function Navbar() {
  const { isAuth, user, logOut } = useContext(AuthConext);

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
        {isAuth ? (
          <>
            <NavLink to="/profile">Profile</NavLink>
            {user.googleId ? (
              <Box onClick={logOut}>
                <GoogleLogout />
              </Box>
            ) : (
              <Button onClick={logOut} color="warning">
                Logout
              </Button>
            )}
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </Stack>
    </Stack>
  );
}
