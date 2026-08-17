import { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const data = {
  labels,
  datasets: [
    {
      label: "Online Sales",
      data: [14, 17, 6, 16, 13, 17, 21],
      backgroundColor: "#0095FF",
      borderRadius: 4,
      barPercentage: 0.6,
    },
    {
      label: "Offline Sales",
      data: [13, 12, 23, 7, 12, 13, 11],
      backgroundColor: "#00E096",
      borderRadius: 4,
      barPercentage: 0.6,
    },
  ],
};

export default function BarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    Chart.getChart(canvas)?.destroy();

    let chart: Chart | undefined;
    try {
      chart = new Chart(canvas, {
        type: "bar",
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                padding: 20,
                color: "#737791",
              },
            },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: "#737791" },
            },
            y: {
              beginAtZero: true,
              ticks: { color: "#737791", stepSize: 5 },
              grid: { color: "#E8E8EE" },
            },
          },
        },
      });
    } catch (error) {
      console.error("Failed to render bar chart", error);
    }

    return () => {
      chart?.destroy();
    };
  }, []);

  return (
    <section className="rounded-[20px] bg-white p-6 shadow-[0_2px_20px_rgba(21,19,75,0.04)]">
      <p className="m-0 mb-4 text-[18px] font-semibold tracking-tight text-[#15134B]">
        Total Revenue
      </p>
      <div className="relative h-[280px]">
        <canvas ref={canvasRef} />
      </div>
    </section>
  );
}
