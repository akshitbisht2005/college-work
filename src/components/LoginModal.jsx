import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

function LoginModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-5"
        >
          <motion.div
            initial={{ y: 60, scale: 0.9 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 60, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-md overflow-hidden rounded-[32px] bg-white shadow-2xl"
          >
            {/* Orange Top Gradient */}

            <div className="h-2 w-full bg-gradient-to-r from-orange-500 via-red-400 to-yellow-400"></div>

            <div className="relative px-10 py-10">

              {/* Close Button */}

              <button
                onClick={onClose}
                className="absolute right-6 top-6 text-2xl text-gray-400 transition hover:text-red-500"
              >
                ✕
              </button>

              {/* Logo */}

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 shadow-lg">

                <span className="text-5xl">
                  🍔
                </span>

              </div>

              {/* Heading */}

              <h1 className="mt-7 text-center text-3xl font-bold">

                Welcome to

                <span className="text-orange-500">
                  {" "}CraveBites
                </span>

              </h1>

              <p className="mt-4 text-center leading-7 text-gray-500">

                Sign in to discover delicious food,
                exclusive offers and lightning-fast delivery.

              </p>

              {/* Google Login */}

              <div className="mt-8">
                <GoogleAuth />
              </div>

              {/* Divider */}

              <div className="my-8 flex items-center gap-4">

                <div className="h-[1px] flex-1 bg-gray-200"></div>

                <span className="text-sm text-gray-400">
                  OR
                </span>

                <div className="h-[1px] flex-1 bg-gray-200"></div>

              </div>
                            {/* Create Account Button */}

              <Link to="/signup">

                <button
                  onClick={onClose}
                  className="w-full rounded-xl border-2 border-orange-500 py-3 font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  Create Account
                </button>

              </Link>

              {/* Footer Text */}

              <p className="mt-8 text-center text-sm leading-6 text-gray-400">

                By continuing you agree to our

                <span className="font-medium text-orange-500">
                  {" "}Terms & Conditions
                </span>

                {" "}and{" "}

                <span className="font-medium text-orange-500">
                  Privacy Policy
                </span>

              </p>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default LoginModal;