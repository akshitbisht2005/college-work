import burger from "../assets/Restaurant1.png";
import pizza from "../assets/Restaurant2.png";
import biryani from "../assets/Restaurant3.png";
import noodles from "../assets/Restaurant4.png";

const restaurants = [
  {
    id: 1,
    image: burger,
    name: "McDonald's",
    category: "burger",
    rating: "4.5",
    time: "20-25 min",
    price: "₹199",
  },
  {
    id: 2,
    image: pizza,
    name: "Domino's Pizza",
    category: "pizza",
    rating: "4.6",
    time: "25-30 min",
    price: "₹249",
  },
  {
    id: 3,
    image: biryani,
    name: "Biryani By Kilo",
    category: "biryani",
    rating: "4.8",
    time: "30-35 min",
    price: "₹299",
  },
  {
    id: 4,
    image: noodles,
    name: "Wow! China",
    category: "noodles",
    rating: "4.4",
    time: "20-25 min",
    price: "₹179",
  },
];

function Restaurants({ search }) {

  const filteredRestaurants = restaurants.filter((item) => {
    if (!search.trim()) return true;

    return (
      item.category
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  return (
    <section
      id="restaurants"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F2] via-[#FFFDF9] to-[#FFF4E6] py-14"
    >

      <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-orange-300 opacity-20 blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200 opacity-20 blur-[140px]"></div>

      <div className="relative mx-auto max-w-[1150px] px-6">

        <h2 className="text-center text-4xl font-bold">
          Popular <span className="text-orange-500">Restaurants</span>
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Order from your favourite restaurants
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">

                  <h3 className="text-lg font-bold">
                    {item.name}
                  </h3>

                  <div className="mt-3 flex justify-between text-sm text-gray-500">

                    <span>⭐ {item.rating}</span>

                    <span>{item.time}</span>

                  </div>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-lg font-bold text-orange-500">
                      {item.price}
                    </span>

                    <button className="rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600">
                      Order
                    </button>

                  </div>

                </div>

              </div>
            ))
                      ) : (
            <div className="col-span-full flex flex-col items-center justify-center rounded-3xl border border-orange-100 bg-white py-16 shadow-md">

              <h3 className="text-2xl font-bold text-gray-700">
                No Restaurant Found 🍽️
              </h3>

              <p className="mt-3 text-center text-gray-500">
                Try searching for
                <span className="font-semibold text-orange-500">
                  {" "}Pizza
                </span>,
                <span className="font-semibold text-orange-500">
                  {" "}Burger
                </span>,
                <span className="font-semibold text-orange-500">
                  {" "}Biryani
                </span>
                {" "}or
                <span className="font-semibold text-orange-500">
                  {" "}Noodles
                </span>.
              </p>

            </div>
          )}

        </div>

      </div>

      <div className="absolute bottom-0 left-0 h-20 w-full">

        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="h-full w-full"
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