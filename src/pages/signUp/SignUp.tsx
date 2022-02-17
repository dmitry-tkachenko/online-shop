import React, { FC } from "react";
import {
  Form,
  Formik,
} from "formik";
import {
  Box,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { getSignUp } from "./API/signUpAPI";
import { IUser } from "./SignUp.interface";
import { initialValues } from "./formik/initialValues";
import { FormStepper, ValidationStepper } from "./FormStepper";
import { useStepper } from "./useSteper";

const SignUp: FC = () => {
  const {
    currentStep,
    currentForm,
    steps,
    isLastStep,
    setCurrentStep,
    handlePreviousStep,
  } = useStepper();
  const navigate = useNavigate();

  const onSubmit = (values: IUser): void => {
    if(isLastStep) {
      getSignUp(values);
      navigate("/signIn");
    }
    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
    };
  };

  const CustomForm =  FormStepper[currentForm];
  return (
    <>
      <Box className="container d-flex flex-column align-items-center">
        <Stepper activeStep={currentStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ValidationStepper[currentForm]}
        >
          <Form className="w-25 gap-3 p-3 border border-3 d-flex flex-column align-items-center" >
            {
              <CustomForm handlePreviousStep={handlePreviousStep} />
            }
          </Form>
        </Formik>
      </Box>
    </>
  );
};

export default SignUp;
