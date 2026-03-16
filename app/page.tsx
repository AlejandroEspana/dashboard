import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import DashboardGrid from "./components/DashboardGrid"

export default function Page() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 p-8 ml-[260px] h-screen overflow-y-auto bg-bg-dash">
        <Header />
        <DashboardGrid />
      </main>
    </>
  );
}
