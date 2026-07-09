import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";
import Features from "../components/Features";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";

function Home() {
  const [openModal, setOpenModal] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const user = localStorage.getItem("user");
    const popupShown = localStorage.getItem("popupShown");

    if (!user && !popupShown) {
      const timer = setTimeout(() => {
        setOpenModal(true);

        localStorage.setItem("popupShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Navbar />

      <section id="home">
        <Hero
          search={search}
          setSearch={setSearch}
        />
      </section>

      <Categories />

      <section id="restaurants">
        <Restaurants
          search={search}
                    search={search}
        />
      </section>

      <section id="features">
        <Features />
      </section>

      <footer id="footer">
        <Footer />
      </footer>

      <LoginModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}

export default Home;