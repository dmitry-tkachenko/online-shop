import { all } from "redux-saga/effects";

import { fetchGoodsWatcher } from "./reducers/goods/goodsSaga";
import { fetchSignInWatcher } from "./reducers/signIn/signInSaga";
import {
  fetchBasketWatcher,
  postGoodToBasketWatcher,
  removeGoodFromBasketWatcher,
} from "./reducers/basket/basketSaga";

export default function* rootSaga() {
  yield all([
    fetchGoodsWatcher(),
    fetchBasketWatcher(),
    postGoodToBasketWatcher(),
    removeGoodFromBasketWatcher(),
    fetchSignInWatcher()
  ]);
}
