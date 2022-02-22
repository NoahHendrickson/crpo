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

const PieChart = ({ assets, data }) => {
  return <Doughnut data={data} width={200} height={300} />;
};

export default PieChart;
