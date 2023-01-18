import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Support from "./components/Support";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/> 
     <Hero/>
     <Services/>
     <About/>
     <Support/>
     <Pricing/>
     <Footer/>
    </div>
  );
}

export default App;
