import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useRef, useState, useEffect } from "react";
import Coin from "./Coin";

const NavPrices = (props) => {
  const tickerRef = useRef();
  const [coins, setCoins] = useState([]);
  let cryptoTicker;
  function addCoin() {
    cryptoTicker = tickerRef.current.value;
    const coinData = new WebSocket(
      `wss://stream.binance.com:9443/ws/${cryptoTicker}usdt@trade`
    );
    coinData.onmessage = (e) => {
      const data = JSON.parse(e.data);
      const price = parseFloat(data.p);
      console.log(price);
    };
  }
  return (
    <div className="navPrices">
      <ul className="navPrices__list">{/* <Coin /> */}</ul>
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
