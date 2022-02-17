import { IGood } from "../../../../reduxToolkit/reducers/goods/goodsSlice.interface";

export interface IGoodsListProps {
  goods: IGood[],
  handlePostGood: (event: any) => void,
  handleRemoveGood: (event: any) => void,
  basketIncludes: (id: string) => boolean,
};
