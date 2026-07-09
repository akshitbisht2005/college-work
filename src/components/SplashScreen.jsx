import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";

function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center">

      {/* Background Blur */}

      <div className="absolute w-72 h-72 rounded-full bg-orange-300/30 blur-3xl top-10 left-20 animate-pulse"></div>

      <div className="absolute w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl bottom-10 right-20 animate-pulse"></div>

      {/* Floating Circles */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute top-24 left-32 w-10 h-10 rounded-full bg-orange-400 opacity-30"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute bottom-28 right-40 w-8 h-8 rounded-full bg-red-400 opacity-30"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute top-52 right-60 w-6 h-6 rounded-full bg-yellow-400 opacity-40"
      />

      {/* Main Card */}

      <motion.div

        initial={{
          opacity: 0,
          scale: 0.8,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 0.8,
        }}

        className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-[35px] px-14 py-14 border border-white"

      >

        <motion.img

          src={Logo}

          alt="logo"

          className="w-36 mx-auto"

          animate={{
            scale: [1, 1.08, 1],
          }}

          transition={{
            repeat: Infinity,
            duration: 2,
          }}

        />

        <h1 className="text-5xl font-extrabold text-center mt-8">

          Crave

          <span className="text-orange-500">

            Bites

          </span>

        </h1>

        <p className="text-center text-gray-600 mt-5 text-lg">

          Serving Happiness At Your Doorstep 🍔

        </p>

        <div className="mt-10 w-80 h-3 bg-orange-100 rounded-full overflow-hidden">

          <motion.div

            initial={{
              width: "0%",
            }}

            animate={{
              width: "100%",
            }}

            transition={{
              duration: 2.5,
            }}

            className="h-full bg-gradient-to-r from-orange-500 to-red-500"

          />

        </div>

        <p className="text-center mt-5 text-gray-500">

          Loading Amazing Experience...

        </p>

      </motion.div>

    </div>
  );
}

export default SplashScreen;