"use client";
import Button from "@/components/button";
import CartItems from "@/components/CartItems";
import Container from "@/components/container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProType } from "../page";

function ShoppingCart() {
  const { cartItems } = useShoppingCartContext();

  const [Data, setData] = useState<ProType[]>();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products`).then((result) =>
      setData(result.data)
    );
  }, []);

  if (cartItems.length == 0)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        Your shopping cart is empty
      </div>
    );

  const finalTotalPrice = cartItems.reduce((total, item) => {
    let selectedPro = Data?.find((pro) => pro.id == item.id);
    return total + (selectedPro?.price || 0) * item.qty;
  }, 0);

  return (
    <Container>
      {/* کارت‌ها */}
      <div className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}
      </div>

      {/* نهایی قیمت و دکمه */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-md bg-gray-50 rounded-lg mb-10 p-5 box-border gap-3 mt-5">
        <p className="text-center sm:text-left">
          Final price: <span>{finalTotalPrice}$</span>
        </p>
        <Button className="bg-green-500 px-4 py-1 rounded-xl text-white cursor-pointer w-full sm:w-auto">
          Proceed to checkout
        </Button>
      </div>
    </Container>
  );
}

export default ShoppingCart;
