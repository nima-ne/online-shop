export const dynamic = "force-dynamic"; 
import { ProType } from "../page";
import Container from "@/components/container";
import InsideProductPage from "@/components/ProductPage";

interface ProductPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<object>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  let result: ProType | null = null;

  try {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });

    if (!product.ok) {
      throw new Error("Failed to fetch");
    }

    result = await product.json();
  } catch (err) {
    console.log("PRODUCT FETCH ERROR:", err);
    result = null;
  }

  if (!result) return <p>Failed to load product...</p>;

  return (
    <Container>
      <div className="shadow-2xl p-5 sm:p-10 box-border rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-5">
          <InsideProductPage product={result} id={id} />
        </div>
      </div>
    </Container>
  );
}