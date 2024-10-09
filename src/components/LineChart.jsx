import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import {
  Chart,
  TimeScale,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  TimeScale,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: [
      "2023-01",
      "2023-02",
      "2023-03",
      "2023-04",
      "2023-05",
      "2023-06",
      "2023-07",
      "2023-08",
      "2023-09",
      "2023-10",
    ],
    datasets: [
      {
        label: "Price (€)",
        data: [70, 75, 80, 85, 90, 95, 100, 105, 110, 115],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "Moving Average",
        data: [72, 76, 81, 86, 91, 96, 101, 106, 111, 116],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (€)",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Stock Price Chart</h2>
      <Line data={data} options={options} />
      <div className="mt-4 text-center">
        <p className="text-lg">
          Last Price / Share: <span className="font-semibold">115 €</span>
        </p>
        <p className="text-lg">
          Percentage Change:{" "}
          <span className="font-semibold text-green-500">
            +128% (15€ Total)
          </span>
        </p>
      </div>
    </div>
  );
};

export default LineChart;
