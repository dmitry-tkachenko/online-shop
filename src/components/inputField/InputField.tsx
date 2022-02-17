import { TextField } from "@mui/material";
import { useField } from "formik";
import { IInputFieldProps } from "./inputField.interface";

const InputField = (props: IInputFieldProps) => {
  const {
    label
  } = props;
  const [field, meta] = useField(props);
  
  return (
    <TextField
      fullWidth
      label={label}
      {...field}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default InputField;
