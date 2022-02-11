import React from "react";
import Coin from "./Coin";

const CoinList = ({ coins }) => {
  return coins.map((coins) => {
    return <Coin key={coins.id} coins={coins} />;
  });
};

export default CoinList;
