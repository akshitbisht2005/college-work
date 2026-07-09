import HeroDesign from "../assets/HeroDesign.png";

function Hero({ search, setSearch }) {
  const handleOrderNow = () => {
    document.getElementById("restaurants")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F2] via-[#FFFDF9] to-[#FFEFD8] py-10">

      {/* Background Effects */}

      <div className="absolute -left-[120px] -top-[120px] h-80 w-80 rounded-full bg-orange-300 opacity-20 blur-[130px]"></div>

      <div className="absolute -bottom-[150px] -right-[100px] h-96 w-96 rounded-full bg-orange-200 opacity-25 blur-[140px]"></div>

      <div className="absolute right-40 top-40 h-4 w-4 rounded-full bg-orange-500"></div>

      <div className="absolute right-[420px] top-60 h-24 w-24 rounded-full border-2 border-orange-300 opacity-40"></div>

      <div className="absolute bottom-20 left-[48%] grid grid-cols-5 gap-2 opacity-40">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-orange-400"
          ></span>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 h-24 w-full">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            fill="#FFE7CC"
            d="M0,256L60,245.3C120,235,240,213,360,202.7C480,192,600,192,720,202.7C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-[1200px] items-center justify-between px-6">

        <div className="w-1/2">

          <h1 className="text-6xl font-bold leading-tight text-black">
            Satisfy Every
            <br />
            <span className="text-orange-500">
              Craving
            </span>
          </h1>

          <p className="mt-5 text-xl text-gray-600">
            Fresh Food, Fast Delivery at Your Doorstep
          </p>

          <div className="mt-8 flex h-14 w-[500px] overflow-hidden rounded-xl bg-white shadow-xl">

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Pizza, Burger, Biryani..."
              className="flex-1 bg-transparent px-5 text-lg outline-none"
            />

            <button
              onClick={handleOrderNow}
              className="h-full w-16 bg-orange-500 text-2xl text-white transition hover:bg-orange-600"
            >
              🔍
            </button>

          </div>

          <button
            onClick={handleOrderNow}
            className="mt-8 rounded-xl bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
          >
            🚀 Order Now
          </button>

        </div>
                <div className="flex w-1/2 justify-end">

          <img
            src={HeroDesign}
            alt="Hero Design"
            className="w-[560px] object-contain transition hover:scale-105"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;