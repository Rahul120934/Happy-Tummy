import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import HowToOrder from "./components/HowToOrder";
import BulkOrders from "./components/BulkOrders";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyOrderBar from "./components/StickyOrderBar";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <HowToOrder />
        <BulkOrders />
        <Contact />
      </main>
      <Footer />
      <StickyOrderBar />
    </>
  );
}
