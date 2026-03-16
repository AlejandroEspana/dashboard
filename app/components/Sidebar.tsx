import { FaHome, FaBoxOpen, FaChartBar, FaBullhorn, FaEnvelope, FaJira, FaSlack, FaIntercom, FaSignOutAlt, FaShoppingCart } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col justify-between rounded-3xl m-4 h-[calc(100vh-2rem)]">
      <div>
        <div className="flex items-center gap-2 p-6 text-xl font-bold text-yellow-500">
          <span className="bg-yellow-400 rounded-lg w-10 h-10 flex items-center justify-center text-white text-2xl">R</span>
          flex
        </div>
        <nav className="px-4 space-y-2 mt-2">
          <a className="flex items-center gap-3 p-3 rounded-lg bg-indigo-600 text-white font-semibold shadow transition-all">
            <FaHome size={20} /> Dashboard
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all text-gray-700">
            <FaShoppingCart size={20} /> Orders
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all text-gray-700">
            <MdOutlineProductionQuantityLimits size={20} /> Products
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all text-gray-700">
            <FaChartBar size={20} /> Analytics
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all text-gray-700">
            <FaBullhorn size={20} /> Marketing
          </a>
          <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-all text-gray-700">
            <span className="flex items-center gap-3">
              <FaEnvelope size={20} /> Messages
            </span>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">25</span>
          </div>
          <p className="text-xs text-gray-400 pt-6 pb-1 font-semibold tracking-wide">INTEGRATIONS</p>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all text-gray-700">
            <FaJira size={18} className="text-blue-600" /> Jira
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all text-gray-700">
            <FaSlack size={18} className="text-purple-500" /> Slack
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all text-gray-700">
            <FaIntercom size={18} className="text-blue-400" /> Intercom
          </a>
        </nav>
      </div>
      <div className="p-4">
        <button className="flex items-center gap-3 p-3 hover:bg-gray-100 w-full text-left rounded-lg text-gray-700 font-semibold transition-all">
          <FaSignOutAlt size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}