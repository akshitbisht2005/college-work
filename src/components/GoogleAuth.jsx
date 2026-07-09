import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import google from "../assets/google.png";

export default function GoogleAuth() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setLoading(true);
      setUser(codeResponse);
    },

    onError: (error) => {
      console.log("Login Failed :", error);
      setLoading(false);
    },
  });

  useEffect(() => {

    if (user) {

      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )

        .then((res) => {

          setProfile(res.data);

          localStorage.setItem(
            "user",
            JSON.stringify(res.data)
          );

          setTimeout(() => {
            navigate("/menu");
          }, 2000);

        })

        .catch((err) => {
          console.log(err);
          setLoading(false);
        });

    }

  }, [user, navigate]);

  const logOut = () => {

    googleLogout();

    setUser(null);

    setProfile(null);

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="w-full">

      {profile ? (

        <div className="text-center">

          <img
            src={profile.picture}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-orange-500 mx-auto shadow-lg"
          />

          <h2 className="text-3xl font-bold mt-5 text-green-600">
            ✅ Login Successful
          </h2>

          <h3 className="text-xl font-semibold mt-3">
            Welcome Back,
          </h3>

          <h2 className="text-2xl font-bold text-orange-500">
            {profile.name}
          </h2>

          <p className="text-gray-500 mt-3">
            Redirecting to Menu...
          </p>

          <div className="flex justify-center mt-6">

            <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

          </div>

        </div>

      ) : (
                <>

          {loading ? (

            <div className="text-center">

              <div className="flex justify-center">

                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

              </div>

              <h2 className="text-2xl font-bold mt-6">
                Signing You In...
              </h2>

              <p className="text-gray-500 mt-2">
                Please wait while we connect your Google account.
              </p>

            </div>

          ) : (

            <button
              onClick={() => login()}
              className="w-full flex items-center justify-center gap-4 bg-white border border-gray-300 rounded-xl py-4 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >

              <img
                src={google}
                alt="Google"
                className="w-7 h-7"
              />

              <span className="font-semibold text-gray-700 text-lg">
                Continue with Google
              </span>

            </button>

          )}

        </>

      )}

    </div>

  );

}