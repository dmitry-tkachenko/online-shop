import React, { FC } from "react";

import { Navigation } from "../navigation/Navigation";

const Header: FC = () => {
  return (
    <>
      <h1 className="text-center">
        Marcket place
      </h1>
      <Navigation />
    </>
  )
};

export default Header;