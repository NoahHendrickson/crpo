import React, { useState, useEffect } from "react";
import { ReactComponent as RemoveX } from "./icons/removeX-01.svg";
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
    <tr data={assets.name}>
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
        <button className="removeAsset__button" onClick={removeAsset}>
          <RemoveX className="removeX" />
        </button>
      </td>
    </tr>
  );
};

export default Asset;
