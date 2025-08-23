"use client"
import React, { useState } from "react";
import Container from "@/components/container";
import Button from "@/components/button";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Message sent! " + JSON.stringify(formData));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container>
      <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-bold mb-5 text-center">Contact Us</h1>
        <p className="mb-6 text-center text-gray-600">
          Have any questions? We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          />

          <Button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
            Send Message
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default ContactUsPage;
