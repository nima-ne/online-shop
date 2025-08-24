export const dynamic = "force-dynamic"; 
import Container from "@/components/container";
import ProductCard from "@/components/productCard";

export interface ProType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export default async function Page() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: ProType[] = await res.json();

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full p-5 box-border">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </Container>
  );
}
