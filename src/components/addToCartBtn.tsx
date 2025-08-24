"use client";
import React from "react";
import Button from "./button";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface AddToCartBtnProps {
  id: string;
}

export default function AddToCartBtn({ id }: AddToCartBtnProps) {
  const { handleIncrease, qty, handleDecrease } = useShoppingCartContext();

  return (
    <div className="flex flex-row">
      <Button
        className="bg-sky-500 text-white w-[27px] font-bold text-center px-2 rounded-lg cursor-pointer"
        onClick={() => handleDecrease(parseInt(id))}
      >
        -
      </Button>
      <span className="mx-5">{qty(parseInt(id))}</span>
      <Button
        className="bg-sky-500 text-white w-[27px] font-bold text-center px-2 rounded-lg cursor-pointer"
        onClick={() => handleIncrease(parseInt(id))}
      >
        +
      </Button>
    </div>
  );
}
