"use client";
import React, { useEffect, useState } from "react";
import AddToCartBtn from "./addToCartBtn";
import RemoveFromCart from "./RemoveFromCart";
import axios from "axios";
import Image from "next/image";
import { ProType } from "@/app/page";

interface TItemCart {
  id: number;
  qty: number;
}

export default function CartItems({ id, qty }: TItemCart) {
  const [Data, setData] = useState<ProType | null>(null);

  const finalProductPrice = qty * (Data?.price ?? 0);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((result) =>
      setData(result.data)
    );
  }, [id]);

  if (!Data) return null;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 shadow-md bg-gray-50 rounded-lg mb-10">
      <div className="col-span-1 lg:col-span-2 flex justify-center items-center p-4 box-border">
        <Image
          src={Data.image}
          alt={Data.title}
          width={200}
          height={200}
          className="w-[40%] lg:w-[60%]"
        />
      </div>

      <div className="col-span-1 lg:col-span-10 p-4 box-border">
        <h1 className="font-semibold mb-3 text-center lg:text-left">{Data.title}</h1>
        <p className="text-justify lg:text-left">{Data.description}</p>
        <p className="font-bold mt-5">
          Product number: <span>{qty}</span>
        </p>

        <div className="my-5 flex flex-col sm:flex-row lg:flex-row justify-center lg:justify-start items-center gap-6">
          <AddToCartBtn id={id.toString()} />
          <RemoveFromCart id={id.toString()} />
          <p>
            Price: <span>{finalProductPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> $
          </p>
        </div>
      </div>
    </div>
  );
}
