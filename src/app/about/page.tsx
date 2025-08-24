import React from "react";
import Container from "@/components/container";

export default function AboutPage() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md mt-10">
        <h1 className="text-3xl font-bold mb-5 text-center">About Us</h1>
        <p className="mb-6 text-center text-gray-600">
          Welcome to online shop! We are passionate about providing you with the best products at the best prices. Our goal is to make online shopping easy, enjoyable, and secure for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-xl font-semibold mb-3 mt-2">Our Mission</h2>
            <p className="text-gray-700">
              To offer high-quality products that meet the needs and preferences of our customers, while maintaining excellent customer service and fast delivery.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 mt-2">Our Values</h2>
            <p className="text-gray-700">
              Customer satisfaction, transparency, reliability, and innovation. We strive to build trust with every purchase and create a seamless shopping experience.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3 mt-2">Our Story</h2>
          <p className="text-gray-700">
            Online shop was founded with the vision of bringing a curated selection of quality products directly to your doorstep. From humble beginnings, we have grown into a community-focused online store that values our customers above all.
          </p>
        </div>
      </div>
    </Container>
  );
}
