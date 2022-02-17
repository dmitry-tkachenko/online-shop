import { IGood } from "../../../../reduxToolkit/reducers/goods/goodsSlice.interface";

export interface IBasketListProps {
  basket: IGood[],
  handleRemoveGood: (event: any) => void,
};
