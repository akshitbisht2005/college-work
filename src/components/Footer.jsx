function Footer() {
  return (
    <footer className="bg-[#111827] text-white mt-10">

      <div className="max-w-[1200px] mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo */}

        <div>

          <h1 className="text-3xl font-bold">
            <span className="text-white">Crave</span>
            <span className="text-orange-500">Bites</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Fresh Food, Fast Delivery.
            <br />
            Enjoy your favourite meals
            at your doorstep.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h2 className="text-xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-400">

            <li className="hover:text-orange-500 cursor-pointer">
              Home
            </li>

            <li className="hover:text-orange-500 cursor-pointer">
              Menu
            </li>

            <li className="hover:text-orange-500 cursor-pointer">
              Restaurants
            </li>

            <li className="hover:text-orange-500 cursor-pointer">
              Contact
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h2 className="text-xl font-semibold mb-4">
            Contact
          </h2>

          <p className="text-gray-400">
            📍 Noida, India
          </p>

          <p className="text-gray-400 mt-2">
            📞 +91 8383940225
          </p>

          <p className="text-gray-400 mt-2">
            ✉️ support@cravebites.com
          </p>

        </div>

        {/* Social */}

        <div>

          <h2 className="text-xl font-semibold mb-4">
            Follow Us
          </h2>

          <div className="flex gap-4 text-3xl">

            <span className="cursor-pointer hover:text-orange-500">
              📘
            </span>

            <span className="cursor-pointer hover:text-orange-500">
              📷
            </span>

            <span className="cursor-pointer hover:text-orange-500">
              🐦
            </span>

            <span className="cursor-pointer hover:text-orange-500">
              ▶️
            </span>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700 text-center py-5 text-gray-400">

        © 2026 CraveBites | All Rights Reserved

      </div>

    </footer>
  );
}

export default Footer;