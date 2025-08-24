"use client";
import Button from "./button";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface RemoveFromCartProps {
  id: string;
}

export default function RemoveFromCart({ id }: RemoveFromCartProps) {
  const { deleteProduct } = useShoppingCartContext();

  return (
    <Button
      className="bg-red-600 px-3 py-1.5 box-border rounded-xl text-white mx-10 cursor-pointer"
      onClick={() => deleteProduct(parseInt(id))}
    >
      Remove from cart
    </Button>
  );
}
