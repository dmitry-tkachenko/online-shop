import React, { FC } from "react";
import { BasketCard } from "../basketCard/BasketCard";
import { IBasketListProps } from "./basketList.interface";

export const BasketList: FC<IBasketListProps> = (props) => {
  const {
    basket,
    handleRemoveGood,
  } = props;

  return (
    <ul className="list-group list-group-flush">
      {basket.map((good) => (
        <li
          key={good.id}
          className="card flex-row justify-content-between"
        >
          <BasketCard
            good={good}
            handleRemoveGood={handleRemoveGood}
          />
        </li>
      ))}
    </ul>
  )
};
