import React, { useRef, useState, useEffect } from "react";
import Coin from "./Coin";
import CoinList from "./CoinList";

const NavPrices = (props) => {
  const parentRef = useRef();
  const tickerRef = useRef();
  const [coins, setCoins] = useState([]);

  // let ws = new WebSocket("wss://dex.binance.org/api/ws");
  // function handleSocket(e) {
  //   const ticker = tickerRef.current.value.toUpperCase();
  //   e.preventDefault();
  //   let msg = {
  //     method: "subscribe",
  //     topic: "trades",
  //     symbols: ["ETH_USD"],
  //   };
  //   let jsonMsg = JSON.stringify(msg);
  //   ws.send(jsonMsg);

  //   ws.onmessage = (e) => {
  //     let data = JSON.parse(e.data);
  //     let price = data.p;
  //     let id = data.id;
  //     let name = data.product_id;
  //     console.log(data);
  //     setCoins(() => {
  //       return [{ id: id, name: name, price: price }];
  //     });
  //   };
  // }

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => coinData.push(data));
  }, [coins]);

  let coinData = [];
  function addCoin(e) {
    e.preventDefault();
    let ticker = tickerRef.current.value;

    console.log(coinData);
    for (let i = 0; i < coinData[0].length; i++) {
      if (coinData[0][i].symbol === ticker) {
        let price = coinData[0][i].current_price;
        let id = coinData[0][i].id;
        let name = coinData[0][i].symbol;
        let icon = coinData[0][i].image;
        console.log(price);
        setCoins((prevCoins) => {
          return [
            ...prevCoins,
            { id: id, name: name, price: price, image: icon },
          ];
        });
      }
    }
  }
  return (
    <div className="navPrices">
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
