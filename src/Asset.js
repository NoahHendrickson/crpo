import React, { useState, useEffect } from "react";

const Asset = ({ assets }) => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${assets.name}usdt@trade`
    );

    ws.onmessage = (e) => {
      let priceObject = JSON.parse(e.data);
      let current = parseFloat(priceObject.p).toFixed(2);
      setPrices(() => {
        return [current];
      });
    };
  }, [assets]);

  return (
    <tr>
      <td>{assets.name.toUpperCase()}</td>
      <td>{assets.amount}</td>
      <td>{assets.exchange}</td>
      <td>{prices === undefined ? assets.price : prices}</td>
      <td>{Number(assets.amount * prices).toFixed(2)}</td>
    </tr>
  );
};

export default Asset;
