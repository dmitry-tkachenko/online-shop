import { Button } from "@mui/material";
import React, { FC } from "react";
import { IBasketCardProps } from "./basketCard.interface";

export const BasketCard: FC<IBasketCardProps> = (props) => {
  const {
    good,
    handleRemoveGood
  } = props;

  return (
    <>
      <img
        src={good.image}
        className="card-img-top w-25 d-inline-block"
        alt="watch"
      />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">
          {good.title}
        </h5>
        <p className="card-text">
          {good.description}
        </p>
        <button
          className="btn btn-secondary w-25"
          value={good.id}
          onClick={handleRemoveGood}
        >
          Delete
        </button>
      </div>
    </>
  )
};
