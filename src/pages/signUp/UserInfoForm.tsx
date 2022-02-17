import React, { FC } from "react";
import { Box, Button } from "@mui/material";

import InputField from "../../components/inputField/InputField";
import { IUserInfoFormProps } from "./SignUp.interface";

export const UserInfoForm: FC<IUserInfoFormProps> = (props) => {
  const {handlePreviousStep} = props;

  return (
    <>
      <InputField
        name="firstname"
        label="Firstname"
      />

      <InputField
        name="lastname"
        label="Lastname"
      />

      <InputField
        name="city"
        label="City"
      />

      <InputField
        name="street"
        label="Street"
      />
      
      <InputField
        name="number"
        label="Number"
      />

      <InputField
        name="zipcode"
        label="Zipcode"
      />

      <InputField
        name="phone"
        label="Phone"
      />

      <Box className="w-100 d-flex justify-content-between">
        <Button
          type="button"
          color="primary"
          variant="outlined"
          onClick={handlePreviousStep}
        >
          Back
        </Button>

        <Button 
          type="submit"
          color="primary"
          variant="contained"
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};
