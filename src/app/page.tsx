import Header from "./components/Header";
import Footer from "./components/Footer";
import Select from "./components/Select";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex-1 flex flex-col items-center justify-center gap-8">
        <Header />
        <Select />
      </main>
      <Footer />
    </div>
  );
}