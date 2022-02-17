import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createRoutine } from "redux-saga-routines";

import { IGood } from "../goods/goodsSlice.interface";
import { IBasketState } from "./basketSlice.interface";
// import {
//   fetchBasket,
//   removeGoodFromBasket,
//   postGoodToBasket,
// } from "../../actionCreators/basket/basketActionCreators";
import { filteredBasketHelper } from "../../../helpers/filteredBasketHelper";

export const getBasket = createRoutine("getBasket");
export const removeGoodFromBasket = createRoutine("removeGoodFromBasket");
export const postGoodToBasket = createRoutine("postGoodToBasket")

const initialState: IBasketState = {
  basket: [],
  isLoading: false,
  error: "",
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder
      .addCase(
        getBasket.REQUEST, (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        getBasket.SUCCESS, (state, action: PayloadAction<IGood[]>) => {
          state.isLoading = false;
          state.error = "";
          state.basket = action.payload;
        }
      )
      .addCase(
        getBasket.FAILURE, (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      )
      .addCase(
        removeGoodFromBasket.REQUEST, (state) => {
          state.isLoading = true;
        },
      )
      .addCase(
        removeGoodFromBasket.SUCCESS, (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = "";
          state.basket = filteredBasketHelper(state.basket, action);
        },
      )
      .addCase(
        removeGoodFromBasket.FULFILL, (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      )
      .addCase(
        postGoodToBasket.REQUEST, (state) => {
          state.isLoading = true;
        },
      )
      .addCase(
        postGoodToBasket.SUCCESS, (state, action: PayloadAction<IGood>) => {
          state.isLoading = false;
          state.error = "";
          state.basket = [...state.basket, action.payload];
        },
      )
      .addCase(
        postGoodToBasket.FAILURE, (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      )
  }
});

export default basketSlice.reducer;
