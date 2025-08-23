import React, { useEffect, useState } from "react";
import AddToCartBtn from "./addToCartBtn";
import RemoveFromCart from "./RemoveFromCart";
import axios from "axios";
import { ProType } from "@/app/page";

interface TItemCart {
  id: number;
  qty: number;
}

function CartItems({ id, qty }: TItemCart) {
  const [Data, setData] = useState<ProType>();

  let finalProductPrice = qty * (Data?.price ?? 0);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((result) =>
      setData(result.data)
    );
  }, [id]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 shadow-md bg-gray-50 rounded-lg mb-10">
      {/* تصویر */}
      <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-center items-center p-4 box-border">
        <img
          src={Data?.image}
          alt={Data?.title}
          className="w-[40%] lg:w-[60%]"
        />
      </div>

      {/* متن و دکمه‌ها */}
      <div className="col-span-1 lg:col-span-10 p-4 box-border">
        <h1 className="font-semibold mb-3 text-center lg:text-left">{Data?.title}</h1>
        <p className="text-justify lg:text-left">{Data?.description}</p>
        <p>
          Product number: <span>{qty}</span>
        </p>

        <div className="my-5 flex flex-col sm:flex-row lg:flex-row justify-center lg:justify-start items-center gap-6">
          <AddToCartBtn id={id.toString()} />
          <RemoveFromCart id={id.toString()} />
          <p>
            Price: <span>{finalProductPrice.toLocaleString("en-US")}</span> $
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
