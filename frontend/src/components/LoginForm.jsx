import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, Stack, TextField } from "@mui/material";
import MyGoogleLogin from "./MyGoogleLogin";

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("username is required"),
  Password: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required"),
});

const LoginForm = ({ loginUser }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      Password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginUser(JSON.stringify(values));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box mb="1rem">
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </Box>
        <Box mb="2rem">
          <TextField
            fullWidth
            id="Password"
            name="Password"
            label="Password"
            type="password"
            value={formik.values.Password}
            onChange={formik.handleChange}
            error={formik.touched.Password && Boolean(formik.errors.Password)}
            helperText={formik.touched.Password && formik.errors.Password}
          />
        </Box>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Login
        </Button>
      </form>
      <Stack direction="row" justifyContent="center" mt="2rem">
        <MyGoogleLogin />
      </Stack>
    </div>
  );
};

export default LoginForm;
