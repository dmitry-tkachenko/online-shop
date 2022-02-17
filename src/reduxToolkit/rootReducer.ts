import { combineReducers } from "@reduxjs/toolkit";

import goodsSlice from "./reducers/goods/goodsSlice";
import basketSlice from "./reducers/basket/basketSlice";
import signInSlice from "./reducers/signIn/signInSlice";

const rootReducer = combineReducers({
  goodsReducer: goodsSlice,
  basketReducer: basketSlice,
  signInReducer: signInSlice,
});

export default rootReducer;
