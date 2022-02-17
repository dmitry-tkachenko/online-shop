export interface ISignInData {
  username: string,
  password: string,
};

export interface ISignInFormProps {
  onSubmit: (values: ISignInData) => void,
};
