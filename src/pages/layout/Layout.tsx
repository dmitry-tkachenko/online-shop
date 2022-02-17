import React, { FC } from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const Layout: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/auth">
          <Route path="signUp" element={<SignUp />} />

          <Route path="signIn" element={<SignIn />} />
        </Route>

        <Route path="/*" element={<ProtectedRoutes />} />

        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </>
  );
};
