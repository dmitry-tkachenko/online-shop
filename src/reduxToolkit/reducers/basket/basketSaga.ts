import axios, { AxiosResponse } from "axios";
import {
  call,
  put,
  takeEvery,
} from "redux-saga/effects";

import { IGood } from "../goods/goodsSlice.interface";
import {
  getBasket,
  removeGoodFromBasket,
  postGoodToBasket,
} from "./basketSlice";
import { PayloadAction } from "@reduxjs/toolkit";

const fetchGoods = () => {
  return axios.get("http://localhost:5000/basket");
};

function* fetchBasketWorker() {
  try {
    const response: AxiosResponse<IGood[]> = yield call(fetchGoods);
    yield put(getBasket.request());
    yield put(getBasket.success(response.data));
  } catch (error) {
    yield put(getBasket.failure("An error occured while loading basket"))
  }
};

export function* fetchBasketWatcher() {
  yield takeEvery(getBasket.TRIGGER, fetchBasketWorker);
};

const removeGood = (good: IGood) => {
  return axios.delete(`http://localhost:5000/basket/${good.id}`);
};

function* removeGoodFromBasketWorker(action: PayloadAction<IGood>) {
  const { payload } = action;
  console.log(payload)
  try {
    yield call(removeGood, payload);
    yield put(removeGoodFromBasket.request());
    yield put(removeGoodFromBasket.success(payload.id));
  } catch (error) {
    yield put(removeGoodFromBasket.failure("An error occured while loading basket"))
  }
};

export function* removeGoodFromBasketWatcher() {
  yield takeEvery(removeGoodFromBasket.TRIGGER,  removeGoodFromBasketWorker);
};

const postGood = (good: IGood) => {
  return axios.post("http://localhost:5000/basket", good);
};

function* postGoodToBasketWorker(action: PayloadAction<IGood>) {
  const { payload } = action;
  console.log(action.payload)
  try {
    yield call(postGood, payload);
    yield put(postGoodToBasket.request());
    yield put(postGoodToBasket.success(payload));
  } catch (error) {
    yield put(postGoodToBasket.failure("An error occured while loading basket"))
  }
};

export function* postGoodToBasketWatcher() {
  yield takeEvery(postGoodToBasket.TRIGGER,  postGoodToBasketWorker);
};
