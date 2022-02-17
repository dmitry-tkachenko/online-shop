import { FunctionComponent } from "react";
import * as Yup from 'yup';

import { UserInfoForm } from "./UserInfoForm";
import { RegistrationDataForm } from "./RegistrationDataForm";
import {
  MultistepFormEnum,
  IUserInfoFormProps,
} from "./SignUp.interface";
import {
  validationSchemaRegistrationData,
  validationSchemaUserInfo,
} from "./formik/validationSchema"

export const FormStepper:{[key in MultistepFormEnum]: FunctionComponent<IUserInfoFormProps>} = {
  [MultistepFormEnum.REGISTRATION_DATA]: RegistrationDataForm,
  [MultistepFormEnum.SHIPPING_ADDRESS]: UserInfoForm,
};

export const ValidationStepper:{[key in MultistepFormEnum]: Yup.InferType<any>} = {
  [MultistepFormEnum.REGISTRATION_DATA]: validationSchemaRegistrationData,
  [MultistepFormEnum.SHIPPING_ADDRESS]: validationSchemaUserInfo,
};
