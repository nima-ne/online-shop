"use client";
import React, { useContext, useEffect } from "react";
import Button from "./button";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

function AddToCartBtn({ id }: { id: string }) {
  const { cartItems, handleIncrease, qty, handleDecrease } =
    useShoppingCartContext();

  return (
    <div className="flex  flex-row">
      <Button
        children=" - "
        className="bg-sky-500 text-white w-[27px] font-bold text-center px-2 rounded-lg cursor-pointer"
        onClick={() => handleDecrease(parseInt(id))}
      />
      <span className="mx-5"> {qty(parseInt(id))} </span>
      <Button
        children=" + "
        className="bg-sky-500 text-white w-[27px] font-bold text-center px-2 rounded-lg cursor-pointer"
        onClick={() => handleIncrease(parseInt(id))}
      />
    </div>
  );
}

export default AddToCartBtn;
