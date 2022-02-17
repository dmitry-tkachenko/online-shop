import {
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";

import { ISignInState } from "./signInSlice.interface";
import { createRoutine } from "redux-saga-routines";

export const signIn = createRoutine("signIn");

const initialState: ISignInState = {
  isLoading: false,
  isAuth: !!localStorage.getItem("token"),
  error: "",
};

export const signInSlice = createSlice({
  name: "SignIn",
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        signIn.REQUEST, (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        signIn.SUCCESS, (state) => {
          state.isLoading = false;
          state.error = "";
          state.isAuth = true;
        }
      )
      .addCase(
        signIn.FAILURE, (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
  },
});

export default signInSlice.reducer;
