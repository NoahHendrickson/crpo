import React from "react";
import Asset from "./Asset";

const WalletTable = ({ assets }) => {
  return assets.map((assets) => {
    return <Asset key={assets.id} assets={assets} />;
  });
};

export default WalletTable;
