import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as RemoveX } from "./icons/removeX-01.svg";

const Coin = ({ coins, removeCoin }) => {
  const [currentPrice, setCurrentPrice] = useState();

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${coins.name}usdt@trade`
    );

    ws.onmessage = (e) => {
      let priceObject = JSON.parse(e.data);
      let current = parseFloat(priceObject.p).toFixed(2);
      setCurrentPrice(() => {
        return [current];
      });
    };
    return () => {};
  }, [coins]);

  return (
    <div data={coins.id} className="coin">
      <ul className="coin__info">
        <li>{coins.name.toUpperCase()}</li>
        <li>${currentPrice === undefined ? coins.price : currentPrice}</li>
      </ul>
      <button onClick={removeCoin} className="coin__removeButton">
        <RemoveX />
      </button>
    </div>
  );
};

export default Coin;
