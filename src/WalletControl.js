import Model, { from, ref, set } from "@expressive/mvc";
import { getJSON, getFromStorage, setToStorage, getPricingRt } from "./helpers";

const STORED_ASSETS = "assets list";
const STORED_PIECHART_LABELS = "Pie Chart Labels";
const STORED_PIECHART_AMOUNTS = "Pie Chart Amounts";
const COIN_GECKO = "https://api.coingecko.com/api/v3/coins/markets";
const STORED_COINS = "coins list";

const PIE_BACKGROUND = [
  "rgba(241, 119, 4, .5)",
  "rgba(91, 28, 237, .5)",
  "rgba(145, 255, 156, .5)",
  "rgba(67, 123, 226, .5)",
  "rgba(0, 202, 202, .5)",
  "rgba(2, 142, 119, .5)",
];

const PIE_BORDER = [
  "rgba(241, 119, 4, 1)",
  "rgba(91, 28, 237, 1)",
  "rgba(145, 255, 156, 1)",
  "rgba(67, 123, 226, 1)",
  "rgba(0, 202, 202, 1)",
  "rgba(2, 142, 119, 1)",
];

class WalletControl extends Model {
  assetData = [];

  // in general what the set() syntax loooks like
  coins = set(
    () => [],
    (nextCoin) => {
      setToStorage(STORED_COINS, nextCoin);
    }
  );

  tickerRef = ref();

  assets = set(
    () => [],
    (next) => {
      setToStorage(STORED_ASSETS, next);
    }
  );

  chartLabels = set(
    () => [],
    (next) => {
      setToStorage(STORED_PIECHART_LABELS, next);
    }
  );

  // i know whats going on here for the most part
  chartAmounts = set(
    () => [],
    (next) => {
      setToStorage(STORED_PIECHART_AMOUNTS, next);
    }
  );

  pieData = from(this, (state) => {
    // this is slightly confusing
    const { chartLabels, chartAmounts } = state;

    return {
      labels: chartLabels,
      datasets: [
        {
          data: chartAmounts,
          backgroundColor: PIE_BACKGROUND,
          borderColor: PIE_BORDER,
          borderWidth: 3,
        },
      ],
    };
  });

  inputNameRef = ref();
  inputAmountRef = ref();
  inputExchangeRef = ref();

  // this is basically useEffect? didmount, update, etc?
  didCreate() {
    const storedAssets = getFromStorage(STORED_ASSETS);
    const storedLabels = getFromStorage(STORED_PIECHART_LABELS);
    const storedAmounts = getFromStorage(STORED_PIECHART_AMOUNTS);
    const storedCoins = getFromStorage(STORED_COINS);

    if (storedCoins) this.coins = storedCoins;

    if (storedAmounts) this.chartAmounts = storedAmounts;

    if (storedLabels) this.chartLabels = storedLabels;

    if (storedAssets) this.assets = storedAssets;

    this.getCoinPrices();
  }

  async getCoinPrices() {
    const data = await getJSON(COIN_GECKO, {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 100,
      page: 1,
      sparkline: false,
    });

    this.assetData = this.assetData.concat(data);
  }

  addCoin = (e) => {
    e.preventDefault();
    const { assetData } = this;
    let ticker = this.tickerRef.current.value;

    for (let i = 0; i < assetData.length; i++) {
      const coin = assetData[i];

      if (coin.symbol !== ticker) continue;

      this.coins = this.coins.concat({
        id: coin.id,
        name: coin.symbol,
        price: coin.current_price,
      });
    }
  };

  removeCoin = (e) => {
    const selected = e.target.closest(".coin");
    const { coins } = this;

    for (let i = 0; i < coins.length; i++) {
      if (coins[i].id === selected.getAttribute("data")) {
        const loser = coins.indexOf(coins[i]);
        coins.splice(loser, 1);

        this.coins = [...coins];
      }
    }
  };

  addAsset = (e) => {
    e.preventDefault();

    const { assetData } = this;
    let ticker = this.inputNameRef.current.value;
    let amount = this.inputAmountRef.current.value;
    let exchange = this.inputExchangeRef.current.value;

    for (let i = 0; i < assetData.length; i++) {
      const coin = assetData[i];

      if (coin.symbol !== ticker.toLowerCase()) continue;

      this.assets = this.assets.concat({
        id: coin.id,
        name: coin.symbol,
        price: coin.current_price,
        amount: amount,
        exchange: exchange,
      });

      this.chartLabels = this.chartLabels.concat(coin.symbol.toUpperCase());
    }
  };

  removeAsset = (e) => {
    e.preventDefault();

    const selected = e.target.closest("tr");
    const { assets, chartAmounts, chartLabels } = this;

    for (let i = 0; i < assets.length; i++) {
      if (assets[i].name === selected.getAttribute("data")) {
        const loser = assets.indexOf(assets[i]);

        assets.splice(loser, 1);
        this.assets = [...assets];
      }
      if (chartLabels[i].toLowerCase() === selected.getAttribute("data")) {
        const loser = chartLabels.indexOf(chartLabels[i]);

        chartLabels.splice(loser, 1);
        this.chartLabels = [...chartLabels];

        chartAmounts.splice(loser, 1);
        this.chartAmounts = [...chartAmounts];
      }
    }
  };

  removeAllAssets = () => {
    localStorage.removeItem(STORED_ASSETS);
    localStorage.removeItem(STORED_PIECHART_LABELS);
    localStorage.removeItem(STORED_PIECHART_AMOUNTS);

    this.assets = [];
    this.chartLabels = [];
    this.chartAmounts = [];
  };

  removeAllCoins = () => {
    localStorage.removeItem(STORED_COINS);

    this.coins = [];
  };
}

export default WalletControl;
