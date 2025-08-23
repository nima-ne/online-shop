"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface CartItems {
  id: number;
  qty: number;
}

interface TShoppingContext {
  cartItems: CartItems[];
  handleIncrease: (id: number) => void;
  qty: (id: number) => number;
  handleDecrease: (id: number) => void;
  totalQty: number;
  deleteProduct: (id: number) => void;
}

const ShoppingCartContext = createContext({} as TShoppingContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const handleIncrease = (id: number) => {
    let isNotProductExist = cartItems.find((item) => item.id === id) == null;

    setCartItems((currentItems) => {
      if (isNotProductExist) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          return item.id === id ? { ...item, qty: item.qty + 1 } : item;
        });
      }
    });
  };

  const handleDecrease = (id: number) => {
    let itemExist = cartItems.find((item) => item.id === id);

    setCartItems((currentItems) => {
      if (itemExist && itemExist.qty > 1) {
        return currentItems.map((item) => {
          return item.id === id ? { ...item, qty: item.qty - 1 } : item;
        });
      } else {
        return currentItems.filter((item) => item.id != id);
      }
    });
  };

  const qty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  let totalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  const deleteProduct = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    let localStorageCart = localStorage.getItem("cart");

    if (localStorageCart) {
      setCartItems(JSON.parse(localStorageCart));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncrease,
        qty,
        handleDecrease,
        totalQty,
        deleteProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
