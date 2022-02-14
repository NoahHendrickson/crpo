import React, { useState, useRef, useEffect } from "react";

const Coin = ({ coins }) => {
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
  }, [coins]);

  return (
    <ul className="coin">
      <li>{coins.name.toUpperCase()} 🚀</li>
      <li>${currentPrice === undefined ? coins.price : currentPrice}</li>
    </ul>
  );
};

export default Coin;
