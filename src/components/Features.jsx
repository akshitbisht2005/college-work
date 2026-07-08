function Features() {
  return (
    <section className="bg-[#FFF8F2] py-14">

      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Why Choose CraveBites?
        </h2>

        <p className="text-center text-gray-500 mt-2">
          We deliver happiness with every order.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl duration-300">

            <div className="text-6xl">🚴</div>

            <h3 className="text-2xl font-bold mt-4">
              Fast Delivery
            </h3>

            <p className="text-gray-500 mt-3">
              Get your favorite food delivered quickly at your doorstep.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl duration-300">

            <div className="text-6xl">🍽️</div>

            <h3 className="text-2xl font-bold mt-4">
              Fresh Food
            </h3>

            <p className="text-gray-500 mt-3">
              Freshly prepared meals from trusted restaurants.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl duration-300">

            <div className="text-6xl">⭐</div>

            <h3 className="text-2xl font-bold mt-4">
              Top Rated
            </h3>

            <p className="text-gray-500 mt-3">
              Order from the highest-rated restaurants near you.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;