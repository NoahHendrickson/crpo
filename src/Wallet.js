import React, { useState, useRef, useEffect } from "react";
import { Provider } from "@expressive/mvc";
import WalletTable from "./WalletTable";
import { ReactComponent as DownCarat } from "./icons/DownCarat.svg";
import PieChart from "./PieChart";
import WalletTableHead from "./WalletTableHead";
import WalletControl from "./WalletControl";
import { getJSON } from "./helpers";

const COIN_GECKO = "https://api.coingecko.com/api/v3/coins/markets";

const Wallet = (props) => {
  const {
    get: control,
    assets,
    removeAsset
  } = WalletControl.use();

  return (
    <Provider of={control}>
      <div className="wallet">
        <SlideDown />
        <h1 className="wallet__title">Wallet</h1>
        <table>
          <thead>{assets.length < 1 ? null : <WalletTableHead />}</thead>
          <tbody>
            <WalletTable removeAsset={removeAsset} assets={assets} />
          </tbody>
        </table>
      </div>
      <Content />
    </Provider>
  );
};

const SlideDown = () => {
  const {
    addAsset,
    inputNameRef,
    inputAmountRef,
    inputExchangeRef,
    removeAllAssets
  } = WalletControl.tap();

  return (
    <div className="wallet__slidedown">
      <form onSubmit={addAsset} className="wallet__form">
        <input
          ref={inputNameRef}
          className="wallet__input"
          placeholder="Ticker"
        />
        <input
          ref={inputAmountRef}
          className="wallet__input"
          placeholder="Quantity"
          type="Integer"
        />
        <input
          ref={inputExchangeRef}
          className="wallet__input"
          placeholder="Exchange"
        />
        <button className="wallet__button--long">Add</button>
      </form>
      <form onSubmit={removeAllAssets} className="wallet__form">
        <button
          type="submit"
          className="wallet__button--long short"
        >
          Delete All Assets
        </button>
      </form>
      <DownCarat className="DownCarat" />
    </div>
  )
}

const Content = () => {
  const { pieData, assets } = WalletControl.tap();

  return (
    <div className="content">
      <h1 className="PieChartHeader">
        {assets.length < 1
          ? "⬅️ Enter Your Assets on The Left"
          : "Your Portfolio"}
      </h1>
      <div className="PieChart__container">
        <PieChart data={pieData} assets={assets} />
      </div>
    </div>
  );
};

export default Wallet;
