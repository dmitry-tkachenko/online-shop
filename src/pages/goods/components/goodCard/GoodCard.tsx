import React, { FC } from "react";
import { Button } from "@mui/material";

import { IGoodCardProps } from "./goodCard.interface";

export const GoodCard: FC<IGoodCardProps> = (props) => {
  const {
    good,
    handleRemoveGood,
    handlePostGood,
    basketIncludes,
  } = props;

  const variant = basketIncludes(good.id) 
    ? "outlined"
    : "contained";
  
  const onClick = basketIncludes(good.id)
    ? handleRemoveGood
    : handlePostGood;
  
  const innerButton = basketIncludes(good.id) 
    ? "Remove good"
    : "Add to basket";

  return (
    <>
      <img
        src={good.image}
        className="card-img-top"
        alt="watch"
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          {good.title}
        </h5>

        <p className="card-text">
          {good.description}
        </p>

        <button
          className="btn btn-secondary"
          value={good.id}
          onClick={ onClick }
        >
          {innerButton}
        </button>
      </div>
    </>
  )
};
