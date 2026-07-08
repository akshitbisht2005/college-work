import pizza from "../assets/Pizza.png";
import burger from "../assets/Burger.png";
import noodles from "../assets/Noodles.png";
import biryani from "../assets/Biryani.png";
import roll from "../assets/Roll.png";
import cake from "../assets/Cake.png";

const categories = [
  { name: "Pizza", image: pizza },
  { name: "Burger", image: burger },
  { name: "Noodles", image: noodles },
  { name: "Biryani", image: biryani },
  { name: "Roll", image: roll },
  { name: "Dessert", image: cake },
];

function Categories() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#FFF8F2] to-white">

      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Popular Categories
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Discover your favourite dishes
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">

          {categories.map((item, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 duration-300 p-5 cursor-pointer"
            >

              <div className="w-28 h-28 mx-auto bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-orange-100 duration-300">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain group-hover:scale-110 duration-300"
                />

              </div>

              <h3 className="text-center mt-5 text-lg font-semibold">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;