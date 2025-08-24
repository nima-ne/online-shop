export const dynamic = "force-dynamic";
import { ProType } from "../page";
import Container from "@/components/container";
import InsideProductPage from "@/components/ProductPage";

interface ProductPageProps {
  params: { id: string };
  searchParams?: object;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  let result: ProType | null = null;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    result = await res.json();
  } catch (err) {
    console.error(err);
  }

  if (!result) {
    return (
      <Container>
        <p className="text-center text-red-500">
          Product not found or failed to load.
        </p>
      </Container>
    );
  }

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
