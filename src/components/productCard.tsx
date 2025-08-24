import { ProType } from '@/app/page';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function ProductCard({ product }: { product: ProType }) {
  return (
    <Link
      href={product.id.toString()}
      className="flex flex-col justify-center items-center gap-5 border-gray-500 shadow-md p-5 box-border rounded-md cursor-pointer hover:shadow-2xl hover:scale-95 duration-500"
    >
      <div className="h-[60%]">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="w-[20%] mx-auto"
        />
      </div>
      <h1 className="text-center line-clamp-1 font-semibold p-2 box-border">
        {product.title}
      </h1>
      <p className="text-center line-clamp-1 p-2 box-border">
        {product.description}
      </p>
      <p>
        Price: <span>{product.price.toFixed(2)}$</span>
      </p>
    </Link>
  );
}
