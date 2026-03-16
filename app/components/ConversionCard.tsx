import { FaArrowUp } from "react-icons/fa";

export default function ConversionCard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow flex flex-col h-full">
      <h3 className="font-semibold mb-2 text-gray-700">Conversion</h3>
      {/* Semicircular chart fake */}
      <div className="flex flex-col items-center justify-center my-2">
        <svg width="120" height="60" viewBox="0 0 120 60">
          <path d="M10,60 A50,50 0 0,1 110,60" fill="none" stroke="#6366F1" strokeWidth="14" />
          <path d="M10,60 A50,50 0 0,1 80,20" fill="none" stroke="#E5E7EB" strokeWidth="14" />
        </svg>
        <div className="absolute mt-[-2.5rem] text-4xl font-bold text-indigo-700">58,19%</div>
      </div>
      <div className="flex items-center justify-center gap-2 text-green-500 font-semibold mb-2">
        <FaArrowUp /> 3.5%
      </div>
      <div className="flex justify-between text-sm mt-auto pt-2">
        <span className="text-gray-500">Income <b className="text-gray-900">$542,317</b></span>
        <span className="text-gray-500">Expenses <b className="text-gray-900">$497,456</b></span>
      </div>
    </div>
  );
}