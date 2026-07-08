import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Restaurants from "./components/Restaurants";
import GoogleAuth from "./components/GoogleAouth";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Restaurants/>
      <Features />
      <Footer />
      <GoogleAuth />
    </>
  );
}

export default App;