import * as Yup from "yup";

const validatoinCondition = () => {
  return Yup
    .string()
    .min(1, "Too short!")
    .max(15, "too long")
    .required("Requaried")
};

export const validationSchemaRegistrationData = Yup.object().shape({
  email: Yup
    .string()
    .email("Invalid email")
    .required("Requaried"),
  password: Yup
    .string()
    .required("Requaried") 
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/,
      "Must Contain 7 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  username: validatoinCondition(),
});

export const validationSchemaUserInfo = Yup.object().shape({
  firstname: validatoinCondition(),
  lastname: validatoinCondition(),
  city: validatoinCondition(),
  street: validatoinCondition(),
  number: validatoinCondition(),
  zipcode: validatoinCondition(),
  lat: validatoinCondition(),
  long: validatoinCondition(),
  phone: validatoinCondition(),
});
