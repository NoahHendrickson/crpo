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

ChartJS.register(CategoryScale, LinearScale, ArcElement, Legend, Tooltip);

const PieChart = ({ assets }) => {
  const [labels, setLabels] = useState([]);
  const [amounts, setAmounts] = useState([]);

  let label;
  let quantity;
  useEffect(() => {
    assets.map((assets) => {
      label = assets.name;
      quantity = assets.amount;
    });
    setLabels((prevLabels) => {
      return [...prevLabels, label];
    });
    setAmounts((prevQuantity) => {
      return [...prevQuantity, quantity];
    });
  }, [assets]);

  const data = {
    labels: labels === undefined ? "" : labels,
    datasets: [
      {
        data: amounts === undefined ? "" : amounts,
        backgroundColor: ["red"],
      },
    ],
  };

  return <Doughnut data={data} width={200} height={300} />;
};

export default PieChart;
