import Container from "@/components/container";
import ProductCard from "@/components/productCard";
import axios from "axios";

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
  const callProducts = await axios.get("https://fakestoreapi.com/products");
  const products = callProducts.data as ProType[];

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </Container>
  );
}
