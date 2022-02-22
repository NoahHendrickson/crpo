import React, { useState, useRef, useEffect } from "react";
import WalletTable from "./WalletTable";
import { ReactComponent as DownCarat } from "./icons/DownCarat.svg";
import PieChart from "./PieChart";

const Wallet = (props) => {
  const [assets, setAssets] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const [chartAmounts, setChartAmounts] = useState([]);
  const [chartData, setChartData] = useState({});

  const inputNameRef = useRef();
  const inputAmountRef = useRef();
  const inputExchangeRef = useRef();
  const STORED_ASSETS = "assets list";
  const STORED_PIECHART_LABELS = "Pie Chart Labels";
  const STORED_PIECHART_AMOUNTS = "Pie Chart Amounts";

  function removeAllAssets(e) {
    window.location.reload(false);
    localStorage.removeItem(STORED_ASSETS);
    localStorage.removeItem(STORED_PIECHART_LABELS);
    localStorage.removeItem(STORED_PIECHART_AMOUNTS);
  }

  useEffect(() => {
    const storedAmounts = JSON.parse(
      localStorage.getItem(STORED_PIECHART_AMOUNTS)
    );
    if (storedAmounts) setChartAmounts(storedAmounts);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORED_PIECHART_AMOUNTS, JSON.stringify(chartAmounts));
  }, [chartAmounts]);

  useEffect(() => {
    const storedLabels = JSON.parse(
      localStorage.getItem(STORED_PIECHART_LABELS)
    );
    if (storedLabels) setChartLabels(storedLabels);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORED_PIECHART_LABELS, JSON.stringify(chartLabels));
  }, [chartLabels]);

  useEffect(() => {
    const storedAssets = JSON.parse(localStorage.getItem(STORED_ASSETS));
    if (storedAssets) setAssets(storedAssets);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORED_ASSETS, JSON.stringify(assets));
  }, [assets]);

  function removeAsset() {
    setAssets(() => {
      return [...assets.slice(0, -1)];
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

  let labelPassDown = [];
  let assetData = [];
  function addAsset() {
    let ticker = inputNameRef.current.value;
    let amount = inputAmountRef.current.value;
    let exchange = inputExchangeRef.current.value;

    for (let i = 0; i < assetData[0].length; i++) {
      if (assetData[0][i].symbol === ticker.toLowerCase()) {
        setAssets((prevAssets) => {
          return [
            ...prevAssets,
            {
              id: assetData[0][i].id,
              name: assetData[0][i].symbol,
              price: assetData[0][i].current_price,
              amount: amount,
              exchange: exchange,
            },
          ];
        });
        setChartLabels((prevChartLabels) => {
          return [...prevChartLabels, assetData[0][i].symbol];
        });
        setChartAmounts((prevChartAmounts) => {
          return [...prevChartAmounts, amount * assetData[0][i].current_price];
        });
      }
    }
  }
  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartAmounts,
        backgroundColor: [
          "rgba(241, 119, 4, .5)",
          "rgba(91, 28, 237, .5)",
          "rgba(145, 255, 156, .5)",
          "rgba(67, 123, 226, .5)",
          "rgba(0, 202, 202, .5)",
          "rgba(2, 142, 119, .5)",
        ],
        borderColor: [
          "rgba(241, 119, 4, 1)",
          "rgba(91, 28, 237, 1)",
          "rgba(145, 255, 156, 1)",
          "rgba(67, 123, 226, 1)",
          "rgba(0, 202, 202, 1)",
          "rgba(2, 142, 119, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  return (
    <>
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
              type="Number"
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
              onClick={() => window.location.reload(false)}
              type="submit"
              className="wallet__button--long short"
            >
              Delete All Assets
            </button>
          </form>
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
            <WalletTable removeAsset={removeAsset} assets={assets} />
          </tbody>
        </table>
      </div>
      <Content data={data} assets={assets} />
    </>
  );
};

const Content = ({ assets, data }) => {
  return (
    <div className="content">
      <h1 className="PieChartHeader">
        {assets.length < 1
          ? "Enter Your Assets on The Left to Visualize your Portfolio"
          : "Your Portfolio"}
      </h1>
      <div className="PieChart__container">
        <PieChart data={data} assets={assets} />
      </div>
    </div>
  );
};

export default Wallet;
