import { AxiosResponse } from "axios";
import {
  call,
  put,
  takeEvery,
} from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { ISignInData } from "../../../pages/signIn/signIn.interface";
import { signIn } from "./signInSlice";
import { IToken } from "./signInSlice.interface";
import { instanse } from "../axiosInstanse/axiosInstatne";

const fetchSignIn = (SignInData: ISignInData) => {
  const {
    username,
    password,
  } = SignInData;

  return instanse({
    method: "post",
    baseURL: "https://fakestoreapi.com/auth/login",
    data: JSON.stringify({
      username,
      password,
    }),
  });
};

function* fetchSignInWorker(action: PayloadAction<ISignInData>) {
  const { payload } = action;

  try {
    const response: AxiosResponse<IToken> = yield call(fetchSignIn, payload);
    yield put(signIn.request());
    yield put(signIn.success());
    yield localStorage.setItem("token", response.data.token);
  } catch (error) {
    yield put(signIn.failure("An error occured while user sign in"))
  }
};

export function* fetchSignInWatcher() {
  yield takeEvery(signIn.TRIGGER, fetchSignInWorker);
};
