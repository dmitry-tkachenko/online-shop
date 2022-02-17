import React, { FC } from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Basket from "../basket/Basket";
import Goods from "../goods/Goods";
import { IsAuthChecker } from "./IsAuthChecker";

export const ProtectedRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<IsAuthChecker />}>
        <Route index element={<Goods />} />

        <Route path="basket" element={<Basket />} />
      </Route>
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
};
