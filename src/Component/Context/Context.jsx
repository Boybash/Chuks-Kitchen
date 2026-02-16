import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. Initialize state by checking LocalStorage first
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("chuks_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. Every time 'cart' changes, save it to LocalStorage
  useEffect(() => {
    localStorage.setItem("chuks_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
