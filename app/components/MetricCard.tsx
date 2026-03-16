import { FaShoppingCart, FaUsers, FaClipboardList, FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Props {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  "Total Sales": <FaShoppingCart className="bg-indigo-100 text-indigo-600 p-3 rounded-xl" size={42} />,
  "Total Visitors": <FaUsers className="bg-indigo-100 text-indigo-600 p-3 rounded-xl" size={42} />,
  "Total Orders": <FaClipboardList className="bg-indigo-100 text-indigo-600 p-3 rounded-xl" size={42} />,
};

export default function MetricCard({ title, value, change, positive }: Props) {
  return (
    <div className="bg-white px-8 py-7 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex flex-col gap-3 min-h-[130px] border border-gray-100/50">
      <div className="flex items-center gap-4">
        {iconMap[title]}
        <span className="text-gray-600 font-semibold text-base">{title}</span>
      </div>
      <div className="flex items-end justify-between mt-1">
        <span className="text-5xl font-extrabold text-gray-900">{value}</span>
        <span className={`flex items-center gap-1.5 font-bold text-lg ${positive ? "text-green-500" : "text-red-500"}`}>
          {positive ? <FaArrowUp size={14} /> : <FaArrowDown size={14} />} {change}
        </span>
      </div>
    </div>
  );
}