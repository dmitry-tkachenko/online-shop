import { IGood } from "../goods/goodsSlice.interface";

export interface IBasketState {
  basket: IGood[];
  isLoading: boolean;
  error: string;
};
