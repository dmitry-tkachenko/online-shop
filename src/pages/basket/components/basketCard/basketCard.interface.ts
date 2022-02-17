import { IGood } from "../../../../reduxToolkit/reducers/goods/goodsSlice.interface";

export interface IBasketCardProps {
  good: IGood,
  handleRemoveGood: (event: any) => void,
};
