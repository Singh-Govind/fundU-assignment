import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  First_Name: yup
    .string("Enter First your name")
    .required("first Name is required"),
  last_name: yup
    .string("Enter Last your name")
    .required("last name is required"),
  username: yup
    .string("Enter Last your username")
    .required("username is required"),
  Password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignupForm = () => {
  const navigate = useNavigate();

  const singUp = async (values) => {
    let res = await fetch(
      "https://easy-ruby-seahorse-garb.cyclic.app/users/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    if (res) {
      alert("created successfully");
      navigate("/login");
    } else {
      alert("something went wrong");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      Password: "",
      First_Name: "",
      last_name: "",
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      singUp(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box mb="1rem">
          <TextField
            fullWidth
            id="First_Name"
            name="First_Name"
            label="First_Name"
            value={formik.values.First_Name}
            onChange={formik.handleChange}
            error={
              formik.touched.First_Name && Boolean(formik.errors.First_Name)
            }
            helperText={formik.touched.First_Name && formik.errors.First_Name}
          />
        </Box>
        <Box mb="1rem">
          <TextField
            fullWidth
            id="last_name"
            name="last_name"
            label="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
          />
        </Box>
        <Box mb="1rem">
          <TextField
            fullWidth
            id="username"
            name="username"
            label="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </Box>
        <Box mb="1rem">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>
        <Box mb="2rem">
          <TextField
            fullWidth
            id="Password"
            name="Password"
            label="Password"
            type="Password"
            value={formik.values.Password}
            onChange={formik.handleChange}
            error={formik.touched.Password && Boolean(formik.errors.Password)}
            helperText={formik.touched.Password && formik.errors.Password}
          />
        </Box>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
