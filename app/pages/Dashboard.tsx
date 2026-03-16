import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import MetricCard from "../components/MetricCard"
import SessionsChart from "../components/SessionsChart"
import PromoCard from "../components/PromoCard"
import ConversionCard from "../components/ConversionCard"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">

        <Header />

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          <MetricCard
            title="Total Sales"
            value="263k"
            change="15.6%"
            positive
          />

          <MetricCard
            title="Total Visitors"
            value="35k"
            change="6.2%"
            positive={false}
          />

          <MetricCard
            title="Total Orders"
            value="165k"
            change="3.5%"
            positive
          />

        </div>

        {/* Content Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

          <div className="lg:col-span-2">
            <SessionsChart />
          </div>

          <PromoCard />

          <ConversionCard />

        </div>

      </main>
    </div>
  )
}