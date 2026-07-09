import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F2] via-white to-[#FFEFD8] flex items-center justify-center">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-[450px]">

        <h1 className="text-4xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mt-3">
          Join CraveBites and start ordering delicious food.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mt-8 p-3 border rounded-xl outline-none focus:border-orange-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full mt-4 p-3 border rounded-xl outline-none focus:border-orange-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full mt-4 p-3 border rounded-xl outline-none focus:border-orange-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 p-3 border rounded-xl outline-none focus:border-orange-500"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mt-4 p-3 border rounded-xl outline-none focus:border-orange-500"
        />

        <button
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold duration-300"
        >
          Create Account
        </button>

        <div className="text-center mt-6">

          <p className="text-gray-600">
            Already have an account?
          </p>

          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Signup;