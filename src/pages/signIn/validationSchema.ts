import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup
    .string()
    .required("Requaried"),
  password: Yup
    .string()
    .required("Requaried") 
});