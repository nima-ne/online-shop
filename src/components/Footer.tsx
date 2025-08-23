import React from "react";
import Link from "next/link";
import Container from "./container";

function Footer() {
  return (
    <footer className="shadow-2xl text-black px-5 py-10 mt-10">

<Container>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">online shop</h1>
          <p className="text-black text-sm">
            Your favorite online store for trendy products.
          </p>
        </div>


        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">Quick Links</h2>
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="/about" className="hover:text-gray-600">About</Link>
            <Link href="/contact-us" className="hover:text-gray-600">Contact</Link>
            <Link href="/shop" className="hover:text-gray-600">Shop</Link>
          </div>


          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">Contact</h2>
            <p className="text-black text-sm">Email: nimaneshat44@gmail.com</p>
            <p className="text-black text-sm">Phone: +98 912 0124 703</p>
            <p className="text-black text-sm">Address: ir - tehran</p>
          </div>
        </div>
      </div>


      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} onlineShop. All rights reserved.
      </div>
</Container>

    </footer>
  );
}

export default Footer;
