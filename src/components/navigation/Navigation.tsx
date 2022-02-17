import React, { FC } from "react";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { useAppSelector } from "../../reduxToolkit/hooks/useAppSelector";
import { useAppDispatch } from "../../reduxToolkit/hooks/useAppDispatch";
import { signInSlice } from "../../reduxToolkit/reducers/signIn/signInSlice";

export const Navigation: FC = (props) => {
  const { basket } = useAppSelector(state => state.basketReducer)
  const { logout } = signInSlice.actions;
  const dispatch = useAppDispatch();

  const basketCounter = basket.length;

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  }

  return (
    <div className="d-flex justify-content-between">
      <Link
        className="btn btn-secondary"
        to="/goods"
      >
        Store
      </Link>

      <Link
        className="btn btn-secondary"
        to="/signIn"
        onClick={handleLogout}
      >
        Loguot
      </Link>

      <Link
        className="btn btn-secondary"
        to="/basket"
      >
        Basket: {basketCounter}
      </Link>

      {/* <Button
        type="button"
        color="primary"
        variant="outlined"
        LinkComponent={Link}
        href={"/basket"}
      >
        Basket: {basketCounter} 
      </Button> */}
    </div>
  );
};
