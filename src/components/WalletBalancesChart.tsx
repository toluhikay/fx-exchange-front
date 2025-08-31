/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface WalletBalancesChartProps {
  balances: { [currency: string]: number };
}

const WalletBalancesChart: React.FC<WalletBalancesChartProps> = ({ balances }) => {
  // Prepare data for pie chart
  const currencies = Object.keys(balances || {});
  const amounts = Object.values(balances || {});

  const data = {
    labels: currencies,
    datasets: [
      {
        label: "Wallet Balances",
        data: amounts,
        backgroundColor: [
          "#3B82F6", // Blue
          "#10B981", // Green
          "#F59E0B", // Yellow
          "#EF4444", // Red
          "#8B5CF6", // Purple
        ],
        borderColor: ["#1E40AF", "#047857", "#B45309", "#B91C1C", "#5B21B6"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#1F2937", // Tailwind gray-800
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const currency = context.label;
            const value = context.raw;
            return `${currency}: ${value.toFixed(4)}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Wallet Balances by Currency</h2>
      <div className="h-64">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default WalletBalancesChart;
