import React from "react";
import WalletSlidedown from "./WalletSlidedown";

const Wallet = () => {
  return (
    <div className="wallet">
      <WalletSlidedown />
      <h1 className="wallet__title">Wallets</h1>
      <ul className="wallet__list">
        <li className="asset">
          <span>ETH</span>
          <p>2</p>
          <p>Coinbase</p>
          <p>3009</p>
        </li>
      </ul>
    </div>
  );
};

export default Wallet;
