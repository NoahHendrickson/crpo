import React from "react";
import Coin from "./Coin";

const CoinList = ({ coins, removeCoin }) => {
  return coins.map((coins) => {
    return <Coin key={coins.id} coins={coins} removeCoin={removeCoin} />;
  });
};

export default CoinList;
