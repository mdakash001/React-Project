import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  import { Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const LineChart = () => {
    const data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Revenue",
          data: [1000, 1500, 1200, 2200, 2800],
          tension: 0.4,
        },
      ],
    };
  
    const options = {
      responsive: true,
    };
  
    return <Line data={data} options={options} />;
  };
  
  export default LineChart;