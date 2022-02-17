export interface IGood {
  id: string,
  title: string,
  description: string,
  image: string,
};

export interface IGoodsState {
  goods: IGood[],
  isLoading: boolean,
  error: string,
};
