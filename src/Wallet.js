import React, { useState, useRef, useEffect } from "react";
import WalletTable from "./WalletTable";
import { ReactComponent as DownCarat } from "./icons/DownCarat.svg";

const Wallet = (props) => {
  const [assets, setAssets] = useState([]);
  const inputNameRef = useRef();
  const inputAmountRef = useRef();
  const inputExchangeRef = useRef();
  const STORED_ASSETS = "assets list";

  // useEffect(() => {
  //   const storedAssets = JSON.parse(localStorage.getItem(STORED_ASSETS));
  //   setAssets(storedAssets);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(STORED_ASSETS, JSON.stringify(assets));
  // }, [assets]);

  function removeAsset() {
    console.log(assets);
    setAssets((prevAssets) => {
      return [prevAssets.slice(0, -1)];
    });
  }

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => assetData.push(data));
    return () => {};
  }, [assets]);

  let assetData = [];
  function addAsset(e) {
    e.preventDefault();
    let ticker = inputNameRef.current.value;
    let amount = inputAmountRef.current.value;
    let exchange = inputExchangeRef.current.value;
    for (let i = 0; i < assetData[0].length; i++) {
      if (assetData[0][i].symbol === ticker) {
        let price = assetData[0][i].current_price;
        let id = assetData[0][i].id;
        let name = assetData[0][i].symbol;
        setAssets((prevAssets) => {
          return [
            ...prevAssets,
            {
              id: id,
              name: name,
              price: price,
              amount: amount,
              exchange: exchange,
            },
          ];
        });
      }
    }
  }

  return (
    <div className="wallet">
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
          />
          <input
            ref={inputExchangeRef}
            className="wallet__input"
            placeholder="Exchange"
          />
          <button className="wallet__button--long">Add</button>
        </form>
        <button onClick={removeAsset} className="wallet__button--long">
          Remove
        </button>
        <DownCarat className="DownCarat" />
      </div>
      <h1 className="wallet__title">Wallet</h1>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Amount</th>
            <th>Exchanage</th>
            <th>Price</th>
            <th>Total Value</th>
          </tr>
        </thead>
        <tbody>
          <WalletTable assets={assets} />
        </tbody>
      </table>
    </div>
  );
};

export default Wallet;
