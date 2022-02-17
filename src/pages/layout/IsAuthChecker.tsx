import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../../reduxToolkit/hooks/useAppSelector";

export const IsAuthChecker = () => {   
  const { isAuth } = useAppSelector(state => state.signInReducer);

  return (
    isAuth
      ? <Outlet />
      : <Navigate to="/auth/signIn" />
  ) 
};
