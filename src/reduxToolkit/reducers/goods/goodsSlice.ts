import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createRoutine } from "redux-saga-routines";

import { IGood, IGoodsState } from "./goodsSlice.interface";

export const getGoods = createRoutine("getGoods");

const initialState: IGoodsState = {
  goods: [],
  isLoading: false,
  error: "",
};

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getGoods.REQUEST, (state) => {
          state.isLoading = true;
        },
      )
      .addCase(
        getGoods.SUCCESS, (state, action: PayloadAction<IGood[]>) => {
          state.isLoading = false;
          state.error = "";
          state.goods = action.payload;
        },
      )
      .addCase(
        getGoods.FAILURE, (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      )
  }
});

export default goodsSlice.reducer;
