import React, {
  FC,
  MouseEvent,
  useEffect,
} from "react";

import Header from "../../components/header/Headre";
import { Loader } from "../../components/loader/Loader";
import { GoodsList } from "./components/goodsList/GoodsList";
import { findGood } from "../../helpers/findGoodHelper";
import { useAppSelector } from "../../reduxToolkit/hooks/useAppSelector";
import { useAppDispatch } from "../../reduxToolkit/hooks/useAppDispatch";
import {
  getBasket,
  postGoodToBasket,
  removeGoodFromBasket,
} from "../../reduxToolkit/reducers/basket/basketSlice";
import { getGoods } from "../../reduxToolkit/reducers/goods/goodsSlice";

const Goods: FC = () => {
  const { goods, isLoading, error } = useAppSelector(state => state.goodsReducer);
  const { basket } = useAppSelector(state => state.basketReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGoods());
    dispatch(getBasket());
  }, []);

  const basketIncludes = (id: string) => {
    return basket.some(item => item.id === id);
  };

  const handlePostGood = (event: MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.value;
    const good = findGood(goods, id);

    if (!basketIncludes(id) && good) {
      dispatch(postGoodToBasket(good))
    };
  };

  const handleRemoveGood = (event: MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.value;
    const good = findGood(basket, id);

    if (good) {
      dispatch(removeGoodFromBasket(good));
    };
  };

  return (
    <>
      <Header />

      {isLoading && 
        <Loader />
      }

      {error && 
        <h1 className="text-center">
          {error}
        </h1>
      }

      {goods &&
        <GoodsList
          goods={goods}
          handlePostGood={handlePostGood}
          handleRemoveGood={handleRemoveGood}
          basketIncludes={basketIncludes}
        />
      }
    </>
  )
};

export default Goods;
