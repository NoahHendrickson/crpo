import React, { useState, useRef, useEffect } from "react";
import { getPricingRt } from "./helpers";
import { ReactComponent as RemoveX } from "./icons/removeX-01.svg";
import Model, { set, ref } from "@expressive/mvc";

const Coin = ({ coins, removeCoin }) => {
  const [currentPrice, setCurrentPrice] = useState(coins.price);

  useEffect(() => {
    return getPricingRt(coins.name, (price) => {
      setCurrentPrice([price]);
    });
  }, [coins]);

  return (
    <div data={coins.id} className="coin">
      <ul className="coin__info">
        <li>{coins.name.toUpperCase()}</li>
        <li>${currentPrice}</li>
      </ul>
      <button onClick={removeCoin} className="coin__removeButton">
        <RemoveX />
      </button>
    </div>
  );
};

export default Coin;
