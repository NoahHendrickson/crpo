import React from "react";
import { ReactComponent as DownCarat } from "./icons/DownCarat.svg";

const WalletSlidedown = () => {
  return (
    <div className="wallet__slidedown">
      <form className="wallet__form">
        <input className="wallet__input" placeholder="Ticker" />
        <input className="wallet__input" placeholder="Quantity" />
        <input className="wallet__input" placeholder="Exchange" />
        <button className="wallet__button--long">Add</button>
      </form>
      <DownCarat className="DownCarat" />
    </div>
  );
};

export default WalletSlidedown;
