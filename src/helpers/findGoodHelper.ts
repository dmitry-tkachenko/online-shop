import { IGood } from "../reduxToolkit/reducers/goods/goodsSlice.interface";

export const findGood = (goods: IGood[], id: string): IGood | undefined => {
  return goods.find(good => good.id === id);
};
