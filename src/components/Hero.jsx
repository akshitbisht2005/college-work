import HeroDesign from "../assets/HeroDesign.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F2] via-[#FFFDF9] to-[#FFEFD8] py-10">

      {/* Background Effects */}

      <div className="absolute top-[-120px] left-[-120px] w-80 h-80 bg-orange-300 rounded-full blur-[130px] opacity-20"></div>

      <div className="absolute bottom-[-150px] right-[-100px] w-96 h-96 bg-orange-200 rounded-full blur-[140px] opacity-25"></div>

      <div className="absolute top-40 right-40 w-4 h-4 bg-orange-500 rounded-full"></div>

      <div className="absolute top-60 right-[420px] w-24 h-24 border-2 border-orange-300 rounded-full opacity-40"></div>

      <div className="absolute bottom-20 left-[48%] grid grid-cols-5 gap-2 opacity-40">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="w-1.5 h-1.5 bg-orange-400 rounded-full"
          ></span>
        ))}
      </div>

      {/* Bottom Wave */}

      <div className="absolute bottom-0 left-0 w-full h-24">

        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            fill="#FFE7CC"
            d="M0,256L60,245.3C120,235,240,213,360,202.7C480,192,600,192,720,202.7C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z"
          />
        </svg>

      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* Left */}

        <div className="w-1/2">

          <h1 className="text-6xl font-bold leading-tight text-black">

            Satisfy Every

            <br />

            <span className="text-orange-500">

              Craving

            </span>

          </h1>

          <p className="text-gray-600 text-xl mt-5">

            Fresh Food, Fast Delivery at Your Doorstep

          </p>

          {/* Search */}

          <div className="mt-8 w-[500px] h-14 bg-white rounded-xl shadow-xl flex items-center overflow-hidden">

            <input
              type="text"
              placeholder="Search Pizza, Burger, Biryani..."
              className="flex-1 px-5 text-lg outline-none bg-transparent"
            />

            <button className="bg-orange-500 h-full w-16 text-white text-2xl hover:bg-orange-600 duration-300">

              🔍

            </button>

          </div>

          {/* Button */}

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg duration-300">

            🚀 Order Now

          </button>

        </div>

        {/* Right */}

        <div className="w-1/2 flex justify-end">

          <img
            src={HeroDesign}
            alt="Hero Design"
            className="w-[560px] object-contain hover:scale-105 duration-300"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;