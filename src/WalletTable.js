import React from "react";
import Asset from "./Asset";

const WalletTable = ({ assets, removeAsset }) => {
  return assets.map((assets) => {
    return <Asset removeAsset={removeAsset} key={assets.id} assets={assets} />;
  });
};

export default WalletTable;
