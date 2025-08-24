import { ProType } from '@/app/page';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function ProductCard({ product }: { product: ProType }) {
  return (
    <Link
      href={product.id.toString()}
      className="flex flex-col justify-between items-center shadow-lg p-5 box-border rounded-md cursor-pointer hover:shadow-2xl hover:scale-95 duration-500 min-h-[380px] bg-white"
    >
      {/* بخش عکس */}
      <div className="flex justify-center items-center h-[180px] w-full">
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
          className="object-contain max-h-[150px]"
        />
      </div>

      {/* بخش متن */}
      <div className="flex flex-col justify-between items-center gap-3 w-full flex-grow">
        <h1 className="text-center line-clamp-1 font-semibold">
          {product.title}
        </h1>
        <p className="text-center line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>
        <p className="font-semibold">
          Price: <span>{product.price.toFixed(2)}$</span>
        </p>
      </div>
    </Link>
  );
}
