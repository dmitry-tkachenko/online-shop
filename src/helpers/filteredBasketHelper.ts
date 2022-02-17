import { PayloadAction } from "@reduxjs/toolkit";
import { IGood } from "../reduxToolkit/reducers/goods/goodsSlice.interface";

export const filteredBasketHelper = (array: IGood[], action: PayloadAction<string>) => {
  return array.filter(item => item.id !== action.payload);
};
