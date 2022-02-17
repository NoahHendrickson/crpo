import React from "react";
import Asset from "./Asset";

const WalletTable = ({ assets }) => {
  return assets.map((assets) => {
    return (
      <tbody>
        <Asset key={assets.id} assets={assets} />
      </tbody>
    );
  });
};

export default WalletTable;
