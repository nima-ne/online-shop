"use client";

export const dynamic = "force-dynamic"; 
import { ProType } from "../page";
import Container from "@/components/container";
import InsideProductPage from "@/components/ProductPage";
import { useEffect, useState } from "react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<object>;
}

export default function ProductPage(props: ProductPageProps) {
  const [product, setProduct] = useState<ProType | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const { id } = await props.params;

        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("failed");

        const data = await res.json();
        setProduct(data);
      } catch (e) {
        setError("Failed to fetch product");
      }
    }
    load();
  }, [props.params]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <div className="shadow-2xl p-5 sm:p-10 box-border rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-5">
          <InsideProductPage product={product} id={product.id.toString()} />
        </div>
      </div>
    </Container>
  );
}
