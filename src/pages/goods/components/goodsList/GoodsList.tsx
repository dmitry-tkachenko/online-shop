import React, { FC } from "react";

import { GoodCard } from "../goodCard/GoodCard";
import { IGoodsListProps } from "./goodsList.interface";

export const GoodsList: FC<IGoodsListProps> = (props) => {
  const {
    goods,
    handlePostGood,
    handleRemoveGood,
    basketIncludes,
  } = props;

  return (
    <ul className="list-group list-group-flush flex-row flex-wrap">
      {goods.map((good) => (
        <li
          key={good.id}
          className="card goodCard w-25 p-3"
        >
          <GoodCard
            good={good}
            handlePostGood={handlePostGood}
            handleRemoveGood={handleRemoveGood}
            basketIncludes={basketIncludes}
          />
        </li>
      ))}
    </ul>
  )
};
