import React, { useRef, useState, useEffect } from "react";
import Coin from "./Coin";
import CoinList from "./CoinList";

const NavPrices = (props) => {
  const tickerRef = useRef();
  const [coins, setCoins] = useState([]);
  const spanRef = useRef();
  let cryptoTicker;

  function handleSocket() {}

  function addCoin(e) {
    e.preventDefault();
    let ticker = tickerRef.current.value;
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${ticker}usdt@trade`
    );
    setCoins((prevCoins) => {
      ws.onmessage = (event) => {
        let coinData = JSON.parse(event.data);
        let price = parseFloat(coinData.p);
        spanRef.current.innerHTML = price;
      };
      return [...prevCoins, { name: ticker.toUpperCase() }];
    });
    console.log(ticker);
  }
  return (
    <div className="navPrices">
      <span ref={spanRef}></span>
      <CoinList coins={coins} />
      <div className="tickerPickerContainer">
        <form onSubmit={addCoin} className="slider">
          <label>Ticker</label>
          <input ref={tickerRef} className="tickerInput" placeholder="ticker" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NavPrices;
