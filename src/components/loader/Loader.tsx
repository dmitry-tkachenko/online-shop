import React, { FC } from "react";

export const Loader: FC = () => {
  return (
    <div className="spinner-border d-flex justify-content-center" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
};
