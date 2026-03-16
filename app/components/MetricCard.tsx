import { FaShoppingCart, FaUsers, FaClipboardList, FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Props {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  "Total Sales": <FaShoppingCart className="bg-indigo-100 text-indigo-600 p-2 rounded-lg" size={32} />,
  "Total Visitors": <FaUsers className="bg-indigo-100 text-indigo-600 p-2 rounded-lg" size={32} />,
  "Total Orders": <FaClipboardList className="bg-indigo-100 text-indigo-600 p-2 rounded-lg" size={32} />,
};

export default function MetricCard({ title, value, change, positive }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow flex flex-col gap-2">
      <div className="flex items-center gap-3">
        {iconMap[title]}
        <span className="text-gray-500 font-semibold text-sm">{title}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-3xl font-bold">{value}</h2>
        <span className={`flex items-center gap-1 font-semibold ${positive ? "text-green-500" : "text-red-500"}`}>
          {positive ? <FaArrowUp /> : <FaArrowDown />} {change}
        </span>
      </div>
    </div>
  );
}