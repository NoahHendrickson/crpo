import React, { useState, useEffect } from "react";
import { ReactComponent as RemoveX } from "./icons/removeX-01.svg";
import { getPricingRt } from "./helpers";
import "./App.css";

const Asset = ({ assets, removeAsset }) => {
  const [prices, setPrices] = useState(assets.price);

  useEffect(() => {
    return getPricingRt(assets.name, (price) => {
      setPrices([price]);
    })
  }, [assets]);

  return (
    <tr data={assets.name}>
      <td>{assets.name.toUpperCase()}</td>
      <td>{assets.amount}</td>
      <td>{assets.exchange}</td>
      <td>{prices}</td>
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
