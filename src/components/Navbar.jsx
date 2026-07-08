import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md border-b border-orange-100">

      <div className="max-w-[1200px] mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}

        <div className="flex items-center">

          <img
            src={Logo}
            alt="CraveBites"
            className="w-40 h-20 object-contain hover:scale-105 duration-300 cursor-pointer"
          />

        </div>

        {/* Menu */}

        <ul className="hidden md:flex items-center gap-10 text-[17px] font-semibold">

          <li className="text-orange-500 border-b-2 border-orange-500 pb-1 cursor-pointer">
            Home
          </li>

          <li className="hover:text-orange-500 duration-300 cursor-pointer">
            Menu
          </li>

          <li className="hover:text-orange-500 duration-300 cursor-pointer">
            Restaurants
          </li>

          <li className="hover:text-orange-500 duration-300 cursor-pointer">
            About Us
          </li>

          <li className="hover:text-orange-500 duration-300 cursor-pointer">
            Contact
          </li>

        </ul>

        {/* Buttons */}

        <div className="flex items-center gap-4">

          <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300">

            Login

          </button>

          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">

            Sign Up

          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;