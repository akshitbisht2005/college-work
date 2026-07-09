import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiMenu,
  HiX,
  HiOutlineShoppingBag,
} from "react-icons/hi";

import Logo from "../assets/Logo.png";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { totalItems } = useCart();

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    setOpen(false);

    if (id === "home") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 350);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 350);

      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-orange-100 bg-white/90 backdrop-blur-md shadow-md">

      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5">

        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <img
            src={Logo}
            alt="CraveBites"
            className="h-20 w-40 object-contain transition hover:scale-105"
          />
        </Link>

        <ul className="hidden items-center gap-10 text-[17px] font-semibold lg:flex">

          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-orange-500 duration-300"
            >
              Home
            </button>
          </li>

          <li>
            <Link
              to="/menu"
              className="text-gray-700 hover:text-orange-500 duration-300"
            >
              Menu
            </Link>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("restaurants")}
              className="text-gray-700 hover:text-orange-500 duration-300"
            >
              Restaurants
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-orange-500 duration-300"
            >
              Why Us
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-gray-700 hover:text-orange-500 duration-300"
            >
              Contact
            </button>
          </li>

        </ul>

        <div className="flex items-center gap-4">

          <Link
            to="/cart"
            className="relative rounded-xl p-2 hover:bg-orange-50"
          >
            <HiOutlineShoppingBag className="h-7 w-7 text-orange-500" />

            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <Link to="/login" className="hidden md:block">
            <button className="rounded-xl border-2 border-orange-500 px-5 py-2 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
              Login
            </button>
          </Link>

          <Link to="/signup" className="hidden md:block">
            <button className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2 font-semibold text-white shadow-lg transition hover:scale-105">
              Sign Up
            </button>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 hover:bg-orange-50 lg:hidden"
          >
            {open ? (
              <HiX className="h-7 w-7" />
            ) : (
              <HiMenu className="h-7 w-7" />
            )}
          </button>
        </div>

      </div>
            <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-orange-100 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5 text-[17px] font-semibold">

              <button
                onClick={() => scrollToSection("home")}
                className="rounded-lg py-3 text-left text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              >
                Home
              </button>

              <Link
                to="/menu"
                onClick={() => setOpen(false)}
                className="rounded-lg py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              >
                Menu
              </Link>

              <button
                onClick={() => scrollToSection("restaurants")}
                className="rounded-lg py-3 text-left text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              >
                Restaurants
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="rounded-lg py-3 text-left text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              >
                Why Us
              </button>

              <button
                onClick={() => scrollToSection("footer")}
                className="rounded-lg py-3 text-left text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              >
                Contact
              </button>

              <div className="mt-5 flex gap-3">

                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="flex-1"
                >
                  <button className="w-full rounded-xl border-2 border-orange-500 py-2.5 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
                    Login
                  </button>
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="flex-1"
                >
                  <button className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-2.5 font-semibold text-white shadow-lg transition hover:scale-105">
                    Sign Up
                  </button>
                </Link>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;