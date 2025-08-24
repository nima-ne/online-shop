"use client";

import React from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 p-5">
      <h1 className="text-6xl font-bold text-red-500 mb-5">Oops!</h1>
      <p className="text-xl text-gray-700 mb-3 text-center">
        Something went wrong.
      </p>
      <p className="text-gray-500 mb-5 text-center">
        {error.message || "Unexpected error occurred."}
      </p>

      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
