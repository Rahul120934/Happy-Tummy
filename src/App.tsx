import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import HowToOrder from "./components/HowToOrder";
import BulkOrders from "./components/BulkOrders";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyOrderBar from "./components/StickyOrderBar";


import Loader from "./components/Loader";

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <HowToOrder />
        <BulkOrders />
        <Contact />
      </main>
      <Footer />
      <StickyOrderBar />
    </>
  );
}
