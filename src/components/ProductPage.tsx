import { ProType } from "@/app/page";
import React from "react";
import AddToCartBtn from "./addToCartBtn";
import RemoveFromCart from "./RemoveFromCart";
import Image from "next/image";

interface PItype {
  product: ProType;
  id: string;
}

export default function InsideProductPage({ product, id }: PItype) {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="flex justify-center lg:justify-start lg:w-1/2">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-[40%] sm:w-[40%] lg:w-[40%] h-auto object-contain"
        />
      </div>

      <div className="flex flex-col justify-between lg:w-1/2">
        <h1 className="text-lg font-bold text-center lg:text-left mb-4 lg:mb-0">
          {product.title}
        </h1>

        <p className="mb-5 lg:mb-10 text-justify lg:text-left">{product.description}</p>

        <div className="flex flex-row sm:flex-row justify-start items-center gap-3 mt-auto">
          <AddToCartBtn id={id} />
          <RemoveFromCart id={id} />
          <p className="font-semibold">
            Price: <span>{product.price.toFixed(2)}$</span>
          </p>
        </div>
      </div>
    </div>
  );
}
