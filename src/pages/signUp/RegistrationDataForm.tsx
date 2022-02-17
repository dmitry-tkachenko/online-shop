import React, { FC } from "react";
import { Button } from "@mui/material";

import InputField from "../../components/inputField/InputField";

export const RegistrationDataForm: FC = () => {
  return (
    <>
      <InputField
        name="email"
        label="Email"
        type="email"
      />

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
        variant="outlined"
      >
        Next step
      </Button>
    </>
  );
};
