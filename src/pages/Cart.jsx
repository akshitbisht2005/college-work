import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMinus,
  HiPlus,
  HiOutlineTrash,
  HiOutlineShoppingBag,
  HiOutlineTicket,
  HiOutlineShieldCheck,
  HiOutlineClock,
} from "react-icons/hi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    deliveryFee,
    gst,
    discount,
    grandTotal,
    applyCoupon,
  } = useCart();

  const [coupon, setCoupon] = useState("");

  const handleCoupon = () => {
    applyCoupon(coupon);
  };

  if (items.length === 0) {
    return (
      <>
        <Navbar />

        <section className="min-h-[75vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF8F2] via-white to-[#FFEFD8] px-6">
          <div className="w-28 h-28 rounded-full bg-orange-100 flex items-center justify-center">
            <HiOutlineShoppingBag className="w-14 h-14 text-orange-500" />
          </div>

          <h1 className="mt-7 text-4xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-center text-gray-500">
            Looks like you haven't added anything yet.
          </p>

          <Link to="/menu">
            <button className="mt-8 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 font-semibold text-white shadow-xl transition hover:scale-105">
              Browse Menu
            </button>
          </Link>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-[#FFF8F2] via-white to-[#FFEFD8] py-12">
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-center text-4xl font-bold">
            Your <span className="text-orange-500">Cart</span>
          </h1>

          <div className="mt-4 flex items-center justify-center gap-2 font-semibold text-green-600">
            <HiOutlineClock />
            Estimated Delivery : 25–30 mins
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 rounded-3xl border border-orange-100 bg-white p-5 shadow-md transition hover:shadow-xl"
              >
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-orange-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold">
                    {item.name}
                  </h2>

                  <p className="mt-2 font-semibold text-orange-500">
                    ₹{item.price}
                  </p>

                  <div className="mt-4 flex items-center gap-3">

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition hover:bg-orange-500 hover:text-white"
                    >
                      <HiMinus />
                    </button>

                    <span className="w-8 text-center text-lg font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition hover:bg-orange-500 hover:text-white"
                    >
                      <HiPlus />
                    </button>

                  </div>
                </div>

                <div className="text-right">

                  <p className="text-xl font-bold">
                    ₹{item.price * item.quantity}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-5 text-red-500 transition hover:scale-110"
                  >
                    <HiOutlineTrash className="h-6 w-6" />
                  </button>

                </div>
              </div>
            ))}

            <Link
              to="/menu"
              className="font-semibold text-orange-500 hover:underline"
            >
              + Add More Items
            </Link>

          </div>

          {/* Order Summary */}
          <div className="sticky top-24 h-fit rounded-3xl border border-orange-100 bg-white p-6 shadow-lg">

            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>

            <div className="mt-6 flex gap-3">

              <div className="relative flex-1">

                <HiOutlineTicket className="absolute left-4 top-4 text-orange-500" />

                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full rounded-xl border border-orange-200 py-3 pl-12 pr-4 outline-none"
                />
              </div>

              <button
                onClick={handleCoupon}
                className="rounded-xl bg-orange-500 px-5 text-white transition hover:bg-orange-600"
              >
                Apply
              </button>
            </div>
                        <div className="mt-8 space-y-4">

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-black">
                  ₹{subtotal}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>GST (5%)</span>
                <span className="font-semibold text-black">
                  ₹{gst}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className="font-semibold text-black">
                  ₹{deliveryFee}
                </span>
              </div>

              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span className="font-semibold">
                  -₹{discount}
                </span>
              </div>

              <hr className="border-dashed border-orange-200" />

              <div className="flex justify-between text-xl font-bold">
                <span>Grand Total</span>
                <span className="text-orange-500">
                  ₹{grandTotal}
                </span>
              </div>

            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-3 text-green-700">

              <HiOutlineShieldCheck className="h-6 w-6" />

              <span className="font-medium">
                100% Secure Checkout
              </span>

            </div>

            <Link to="/checkout">

              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]">

                Proceed to Checkout

              </button>

            </Link>

            <div className="mt-8">

              <h3 className="mb-4 text-lg font-bold">
                You may also like
              </h3>

              <div className="space-y-3">

                <div className="flex items-center justify-between rounded-xl border border-orange-100 p-3">

                  <div>
                    <h4 className="font-semibold">
                      Cheese Pizza
                    </h4>

                    <p className="text-sm text-gray-500">
                      ₹249
                    </p>
                  </div>

                  <Link to="/menu">
                    <button className="rounded-lg bg-orange-100 px-4 py-2 text-orange-500 transition hover:bg-orange-500 hover:text-white">
                      Add
                    </button>
                  </Link>

                </div>

                <div className="flex items-center justify-between rounded-xl border border-orange-100 p-3">

                  <div>
                    <h4 className="font-semibold">
                      Veg Burger
                    </h4>

                    <p className="text-sm text-gray-500">
                      ₹179
                    </p>
                  </div>

                  <Link to="/menu">
                    <button className="rounded-lg bg-orange-100 px-4 py-2 text-orange-500 transition hover:bg-orange-500 hover:text-white">
                      Add
                    </button>
                  </Link>

                </div>

                <div className="flex items-center justify-between rounded-xl border border-orange-100 p-3">

                  <div>
                    <h4 className="font-semibold">
                      Cold Coffee
                    </h4>

                    <p className="text-sm text-gray-500">
                      ₹149
                    </p>
                  </div>

                  <Link to="/menu">
                    <button className="rounded-lg bg-orange-100 px-4 py-2 text-orange-500 transition hover:bg-orange-500 hover:text-white">
                      Add
                    </button>
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Cart;