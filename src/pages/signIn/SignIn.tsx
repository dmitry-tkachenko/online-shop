import React, {
  FC,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../reduxToolkit/hooks/useAppSelector";
import { useAppDispatch } from "../../reduxToolkit/hooks/useAppDispatch";
import { signIn } from "../../reduxToolkit/reducers/signIn/signInSlice";
import { SignInForm } from "./SignInForm";
import { ISignInData } from "./signIn.interface";

const SignIn: FC = () => {
  const { isAuth } = useAppSelector(state => state.signInReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if(isAuth) {
      navigate("/goods");
    }
  }, [isAuth]);

  const onSubmit = (values: ISignInData) => {
    const {
      username,
      password,
    } = values;

    dispatch(signIn({
      username,
      password,
    })); 
  };

  return (
    <>
      <h1 className="text-center">
        Autorization
      </h1>
      <SignInForm onSubmit={onSubmit} />
    </>
  );
};

export default SignIn;
