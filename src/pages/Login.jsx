import GoogleAuth from "../components/GoogleAuth";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F2] via-white to-[#FFEFD8] flex items-center justify-center px-5">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-[430px]">

        <div className="flex justify-center">
          <img
            src={Logo}
            alt="CraveBites"
            className="w-28 mb-5"
          />
        </div>

        <h1 className="text-4xl font-bold text-center">
          Welcome Back to
          <br />
          <span className="text-orange-500">
            CraveBites
          </span>
        </h1>

        <p className="text-gray-500 text-center mt-4">
          Continue with your Google account
          <br />
          and order delicious food instantly.
        </p>

        <div className="mt-8">
          <GoogleAuth />
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?
          </p>

          <Link
            to="/signup"
            className="text-orange-500 font-semibold hover:underline"
          >
            Create Account
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Login;