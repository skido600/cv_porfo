import About from "@/components/About";
import Elsewhere from "@/components/Elsewhere";
import Experience from "@/components/Experince";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Top from "@/components/Top";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="">
      <Top />
      <Header />
      <About />
      <Work />
      <Experience />
      <Elsewhere />
      <Footer />
    </main>
  );
}
