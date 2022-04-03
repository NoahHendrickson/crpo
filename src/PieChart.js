import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import WalletControl from "./WalletControl";

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

ChartJS.register(CategoryScale, LinearScale, ArcElement, Legend, Tooltip);

const options = {
  animation: true,
  plugins: {
    title: {
      display: true,
      text: "Portfolio",
    },
  },
};

const PieChart = () => {
  const pieData = WalletControl.tap((state) => {
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

  // const [liveAmt, setLiveAmt] = useState([]);

  // assets.map((assets) => {
  //   const ws = new WebSocket(
  //     `wss://stream.binance.com:9443/ws/${assets.name}usdt@trade`
  //   );
  //   ws.onmessage = (e) => {
  //     let priceObject = JSON.parse(e.data);
  //     let current = parseFloat(priceObject.p).toFixed(2);
  //     setLiveAmt(() => {
  //       return [current];
  //     });
  //   };
  // });
  return <Doughnut options={options} data={pieData} width={200} height={300} />;
};

export default PieChart;
