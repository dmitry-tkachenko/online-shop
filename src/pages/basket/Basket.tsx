import React, {
  FC,
  MouseEvent,
} from "react";

import Header from "../../components/header/Headre";
import { Loader } from "../../components/loader/Loader";
import { BasketList } from "./components/basketList/BasketList";
import { findGood } from "../../helpers/findGoodHelper";
import { useAppSelector } from "../../reduxToolkit/hooks/useAppSelector";
import { useAppDispatch } from "../../reduxToolkit/hooks/useAppDispatch";
import { removeGoodFromBasket } from "../../reduxToolkit/reducers/basket/basketSlice";

const Basket: FC = () => {
  const { basket, isLoading, error } = useAppSelector(state => state.basketReducer);
  const dispatch = useAppDispatch();

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
        <h1>
          {error}
        </h1>
      }

      {!basket.length &&
        <h1 className="text-center">
          You have no goods in basket
        </h1>
      }

      {basket &&
        <BasketList
          basket={basket}
          handleRemoveGood={handleRemoveGood}
        />
      }
    </>
  )
};

export default Basket;