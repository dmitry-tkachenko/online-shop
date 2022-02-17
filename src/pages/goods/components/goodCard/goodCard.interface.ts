import { IGood } from "../../../../reduxToolkit/reducers/goods/goodsSlice.interface";

export interface IGoodCardProps {
  good: IGood,
  handlePostGood: (event: any) => void,
  handleRemoveGood: (event: any) => void,
  basketIncludes: (id: string) => boolean,
};
