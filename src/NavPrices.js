import React, { useRef, useState, useEffect } from "react";
import Coin from "./Coin";
import CoinList from "./CoinList";

const NavPrices = (props) => {
  const parentRef = useRef();
  const tickerRef = useRef();
  const [coins, setCoins] = useState([]);

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
      <div className="navPrices__slider">
        <form onSubmit={addCoin} className="navPrices__form">
          <label>Ticker</label>
          <input
            ref={tickerRef}
            className="navPrices__input"
            placeholder="ticker"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NavPrices;
