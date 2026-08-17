import BarChart from "../components/barchart";
import Header from "../components/header";
import LineChart from "../components/linechart";
import Sales from "../components/Sales";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#FAFBFF] ">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex-1 px-8 pb-8">
          <div>
            <div className="xl:col-span-2">
              <Sales />
            </div>
            <BarChart />
            <LineChart />
          </div>
        </main>
      </div>
    </div>
  );
}
