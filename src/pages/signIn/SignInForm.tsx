import React, { FC } from "react";
import { Link} from "react-router-dom";
import {
  Form,
  Formik,
} from "formik";
import {
  Box,
  Button,
} from "@mui/material";

import InputField from "../../components/inputField/InputField";
import { ISignInFormProps } from "./signIn.interface";
import { validationSchema } from "./validationSchema";
import { initialValues } from "./initialValues";

export const SignInForm: FC<ISignInFormProps> = (props) => {
  const {
    onSubmit,
  } = props;
  
  return (
    <Box className="container d-flex justify-content-center">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="w-25 gap-3 p-3 border border-3 d-flex flex-column align-items-center">
          <InputField
            name="username"
            label="Username"
          />

          <InputField
            name="password"
            label="Password"
          />

          <Button 
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Sign In
          </Button>

          <Button
            type="button"
            color="primary"
            variant="outlined"
            component={Link}
            to={"/auth/signUp"}
            fullWidth
          >
            Sign Up
          </Button>
        </Form>
      </Formik>
    </Box>
  )
};
