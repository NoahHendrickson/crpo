import React, { useState, useEffect } from "react";
import "./App.css";

const Asset = ({ assets, removeAsset }) => {
  const [prices, setPrices] = useState();

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
    return () => {};
  }, [assets]);

  return (
    <tr>
      <td>{assets.name.toUpperCase()}</td>
      <td>{assets.amount}</td>
      <td>{assets.exchange}</td>
      <td>{prices === undefined ? assets.price : prices}</td>
      <td>
        {assets.amount * prices === NaN
          ? "quick maths"
          : Number(assets.amount * prices).toFixed(2)}
      </td>
      <td className="tableData__button">
        <button onClick={removeAsset}>X</button>
      </td>
    </tr>
  );
};

export default Asset;
