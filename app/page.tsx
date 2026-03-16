import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import DashboardGrid from "./components/DashboardGrid"

export default function Page() {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <Header />
        <DashboardGrid />
      </main>
    </>
  );
}
