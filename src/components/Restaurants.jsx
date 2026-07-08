import burger from "../assets/Restaurant1.png";
import pizza from "../assets/Restaurant2.png";
import biryani from "../assets/Restaurant3.png";
import noodles from "../assets/Restaurant4.png";

const restaurants = [
  {
    image: burger,
    name: "Burger House",
    rating: "4.8",
    time: "20 min",
    price: "₹199",
  },
  {
    image: pizza,
    name: "Pizza World",
    rating: "4.7",
    time: "25 min",
    price: "₹249",
  },
  {
    image: biryani,
    name: "Royal Biryani",
    rating: "4.9",
    time: "30 min",
    price: "₹299",
  },
  {
    image: noodles,
    name: "Chinese Corner",
    rating: "4.6",
    time: "22 min",
    price: "₹179",
  },
];

function Restaurants() {
  return (
    <section className="relative overflow-hidden py-14 bg-gradient-to-br from-[#FFF8F2] via-[#FFFDF9] to-[#FFF4E6]">

      {/* Orange Glow */}

      <div className="absolute -top-28 -left-24 w-72 h-72 bg-orange-300 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200 rounded-full blur-[140px] opacity-20"></div>

      {/* Dots */}

      <div className="absolute top-24 left-20 grid grid-cols-5 gap-2 opacity-40">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 bg-orange-400 rounded-full"
          ></span>
        ))}
      </div>

      <div className="absolute bottom-16 right-24 grid grid-cols-5 gap-2 opacity-40">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 bg-orange-400 rounded-full"
          ></span>
        ))}
      </div>

      {/* Circles */}

      <div className="absolute top-28 right-32 w-8 h-8 border-2 border-orange-300 rounded-full"></div>

      <div className="absolute bottom-24 left-24 w-6 h-6 bg-orange-300 rounded-full opacity-40"></div>

      <div className="relative max-w-[1150px] mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Popular <span className="text-orange-500">Restaurants</span>
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Order from your favorite restaurants
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

  {restaurants.map((item, index) => (

    <div
      key={index}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 duration-300 overflow-hidden border border-orange-100"
    >

      <img
        src={item.image}
        alt={item.name}
        className="w-full h-32 object-cover"
      />

      <div className="p-3">

        <h3 className="font-bold text-base">
          {item.name}
        </h3>

        <div className="flex justify-between text-sm text-gray-500 mt-2">

          <span>⭐ {item.rating}</span>

          <span>{item.time}</span>

        </div>

        <div className="flex justify-between items-center mt-3">

          <span className="font-bold text-orange-500">
            {item.price}
          </span>

          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-1 rounded-lg duration-300">
            Order
          </button>

        </div>

      </div>

    </div>

  ))}

</div>
      </div>

      {/* Bottom Wave */}

      <div className="absolute bottom-0 left-0 w-full h-20">

        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            fill="#FFEFD8"
            d="M0,224L60,218.7C120,213,240,203,360,208C480,213,600,235,720,240C840,245,960,235,1080,208C1200,181,1320,139,1380,117.3L1440,96L1440,320L0,320Z"
          />
        </svg>

      </div>

    </section>
  );
}

export default Restaurants;