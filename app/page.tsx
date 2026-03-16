import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import DashboardGrid from "./components/DashboardGrid"

export default function Page() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8 xl:p-10 lg:ml-[260px] min-h-screen xl:h-screen xl:overflow-y-auto bg-bg-dash transition-all">
        <Header />
        <DashboardGrid />
      </main>
    </>
  );
}
