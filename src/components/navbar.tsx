"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Input from "./Input";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface nav {
  id: number;
  tittle: string;
  path: string;
}

function Navbar() {
  const navLinks = [
    { id: 1, tittle: "Home", path: "/" },
    { id: 2, tittle: "About", path: "/about" },
    { id: 3, tittle: "Contact us", path: "/contact-us" },
    { id: 4, tittle: "Cart", path: "/shopping-cart" },
  ];

  const { totalQty } = useShoppingCartContext();
  const path = usePathname();

  return (
    <div className="w-full p-5 sm:p-10 box-border shadow-md mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      
      {/* لینک‌ها */}
      <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto mb-3 sm:mb-0">
        <div className="flex flex-col sm:flex-row">
          {navLinks.map((item: nav) =>
            item.tittle !== "Cart" ? (
              <Link
                href={item.path}
                key={item.id}
                className={`mb-2 sm:mb-0 sm:mr-4 pb-1.5 ${
                  path === item.path ? "border-b-2 border-red-600 font-bold" : ""
                }`}
              >
                {item.tittle}
              </Link>
            ) : (
              <Link
                href={item.path}
                key={item.id}
                className={`relative flex items-center mb-2 sm:mb-0 sm:mr-4 pb-1.5 ${
                  path === item.path ? "border-b-2 border-red-600 font-bold" : ""
                }`}
              >
                {item.tittle}
                <span className="ml-1 bg-red-600 text-white px-2 py-0.5 rounded-full text-sm">
                  {totalQty}
                </span>
              </Link>
            )
          )}
        </div>
      </div>

      {/* باکس جستجو */}
      <div className="w-full sm:w-[40%] flex justify-start sm:justify-center">
        <Input
          className="bg-gray-300 w-full sm:w-[80%] rounded-lg px-4 py-1 outline-none focus:w-full sm:focus:w-[100%] duration-500 text-gray-600"
          placeholder="search"
        />
      </div>
    </div>
  );
}

export default Navbar;
