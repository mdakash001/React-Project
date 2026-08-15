import Header from "../components/header";
import Sales from "../components/Sales";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#FAFBFF] ">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main >
          <Sales />
        </main>
      </div>
    </div>
  );
}
