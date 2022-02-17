import { Dispatch } from "react";

export interface IUser {
  email: string,
  username: string,
  password: string,
  firstname: string,
  lastname: string,
  city: string,
  street: string,
  number: string,
  zipcode: string,
  lat:  string,
  long: string,
  phone: string,
};

export interface IUserInfoFormProps {
  handlePreviousStep: () => void,
};

export interface IUseStepper {
  currentStep: number,
  currentForm: MultistepFormEnum,
  setCurrentStep: Dispatch<React.SetStateAction<number>>,
  steps: MultistepFormEnum[],
  isLastStep: boolean,
  handlePreviousStep: () => void,
};

export enum MultistepFormEnum {
  REGISTRATION_DATA = "Registration data",
  SHIPPING_ADDRESS = "Shipping address",
};
