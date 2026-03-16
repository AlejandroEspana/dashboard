"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)

import { FaUsers } from "react-icons/fa";

export default function SessionsChart() {
  const data = {
    labels: ["21", "22", "23", "24", "25"],
    datasets: [
      {
        data: [3, 8, 2, 9, 15],
        borderColor: "#6366F1",
        backgroundColor: "rgba(99,102,241,0.08)",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#6366F1",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow flex flex-col h-full">
      <div className="flex justify-between mb-4 items-center">
        <div className="flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><FaUsers size={20} /></span>
          <div>
            <h3 className="font-semibold text-gray-700">Online Store Sessions</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-gray-100 text-indigo-600 text-xs px-2 py-1 rounded-full font-bold">Visitors</span>
              <span className="text-gray-700 font-bold text-sm">68</span>
              <span className="text-green-500 text-xs font-semibold">↑ 15.6%</span>
              <span className="text-red-500 text-xs font-semibold">↓ 1.6%</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">February</span>
          <button className="ml-2 px-3 py-1 bg-gray-100 rounded-lg text-xs font-semibold text-gray-600 shadow-sm">View Report</button>
        </div>
      </div>
      <div className="h-40">
        <Line data={data} options={{
          plugins: { legend: { display: false } },
          scales: { x: { grid: { display: false } }, y: { grid: { color: '#F3F4F6' } } },
          responsive: true,
          maintainAspectRatio: false,
        }} />
      </div>
    </div>
  );
}