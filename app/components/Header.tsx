import { FaSearch, FaRegUserCircle, FaChevronDown, FaDownload } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-2">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold mr-4">Dashboard</h1>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 w-56"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Your Balance <b className="text-indigo-600">$5.456</b>
        </span>
        <div className="flex items-center border rounded-lg px-3 py-2 text-sm bg-white shadow-sm">
          <span className="mr-2 text-gray-600">This Month</span>
          <FaChevronDown className="text-gray-400" size={14} />
        </div>
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow transition-all">
          <FaDownload size={16} /> Download Report
        </button>
        <div className="flex items-center gap-2">
          <FaRegUserCircle className="text-indigo-600" size={32} />
          <span className="font-semibold text-gray-700">Hi, Lay</span>
        </div>
      </div>
    </header>
  );
}