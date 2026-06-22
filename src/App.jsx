import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Rooms from "./components/Rooms";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Rooms />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
