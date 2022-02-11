import React from "react";

const Coin = ({ coins }) => {
  return (
    <div className="coin">
      {coins.name} {coins.price}
    </div>
  );
};

export default Coin;
