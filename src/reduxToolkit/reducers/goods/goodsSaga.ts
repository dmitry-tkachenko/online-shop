import axios, { AxiosResponse } from "axios";
import {
  call,
  put,
  takeEvery,
} from "redux-saga/effects";

import { IGood } from "./goodsSlice.interface";
import { getGoods } from "./goodsSlice";

const fetchGoods = () => {
  return axios.get("http://localhost:5000/goods");
};

function* fetchGoodsWorker() {
  try {
    const response: AxiosResponse<IGood[]> = yield call(fetchGoods);
    yield put(getGoods.request());
    yield put(getGoods.success(response.data));
  } catch (error) {
    yield put(getGoods.failure("An error occured while loading products"))
  }
};

export function* fetchGoodsWatcher() {
  yield takeEvery(getGoods.TRIGGER, fetchGoodsWorker);
};
