export const dynamic = "force-dynamic"; 
import axios from "axios";
import { ProType } from "../page";
import Container from "@/components/container";
import InsideProductPage from "@/components/ProductPage";

interface ProductPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<object>;
}

export default async function ProductPage(props: ProductPageProps) {
  const { id } = await props.params;
  const product = await axios(`https://fakestoreapi.com/products/${id}`);
  const result: ProType = product.data;

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
