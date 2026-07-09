import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext(null);

const STORAGE_KEY = "cravebites_cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);

      if (existing) {
        toast.success(`${product.name} quantity updated`);
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }

      toast.success(`${product.name} added to cart`);
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    toast.success("Item removed");
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }

    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              quantity,
            }
          : i
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success("Cart Cleared");
  };

  // ==========================
  // Calculations
  // ==========================

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const deliveryFee = items.length ? 40 : 0;

  const gst = Math.round(subtotal * 0.05);

  const discount =
    coupon === "WELCOME100"
      ? 100
      : coupon === "SAVE50"
      ? 50
      : 0;

  const grandTotal =
    subtotal + gst + deliveryFee - discount;

  const applyCoupon = (code) => {
    const value = code.trim().toUpperCase();

    if (value === "WELCOME100") {
      setCoupon(value);
      toast.success("Coupon Applied");
    } else if (value === "SAVE50") {
      setCoupon(value);
      toast.success("Coupon Applied");
    } else {
      setCoupon("");
      toast.error("Invalid Coupon");
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,

        subtotal,
        totalItems,
        deliveryFee,
        gst,
        discount,
        grandTotal,

        coupon,
        applyCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error(
      "useCart must be used within a CartProvider"
    );
  }

  return ctx;
}