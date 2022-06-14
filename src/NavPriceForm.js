import React, { useRef, useState, useEffect } from "react";
import Coin from "./Coin";
import CoinList from "./CoinList";
import { ReactComponent as SideCarat } from "./icons/SideCarat.svg";
import WalletControl from "./WalletControl";

const NavPriceForm = (props) => {
  const {
    coins,
    removeAllCoins,
    addCoin,
    removeCoin,
    tickerRef
  } = WalletControl.use()


  return (
    <div className="navPrices">
      <div className="coin__container">
        <CoinList coins={coins} removeCoin={removeCoin} />
      </div>
      <div className="navPrices__slider">
        <form onSubmit={addCoin} className="navPrices__form">
          <input
            ref={tickerRef}
            className="navPrices__input"
            placeholder="Ticker"
          />
          <button className="navPrices__button">Add</button>
        </form>
        <form onSubmit={removeAllCoins} className="navPrices__form">
          <button className="navPrices__button">Del All</button>
        </form>
      </div>
    </div>
  );
};

export default NavPriceForm;
