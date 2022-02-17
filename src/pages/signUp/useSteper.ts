import React, { useState } from "react";

import {
  MultistepFormEnum,
  IUseStepper,
} from "./SignUp.interface";

export const useStepper = (): IUseStepper => {
  const [ currentStep, setCurrentStep ] = useState<number>(0);
  const { REGISTRATION_DATA, SHIPPING_ADDRESS } = MultistepFormEnum;
  const steps = [REGISTRATION_DATA, SHIPPING_ADDRESS];
  const isLastStep = currentStep === steps.length - 1;
  const currentForm = steps[currentStep];

  const handlePreviousStep = (): void => {
    if (currentStep >= 1) {
      setCurrentStep(currentStep - 1);
    };
  };

  return {
    currentStep,
    currentForm,
    steps,
    isLastStep,
    setCurrentStep,
    handlePreviousStep,
  };
};
