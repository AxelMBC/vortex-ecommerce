// app/products/[pId]/page.tsx
import { tecladosLista } from "../tecladosLista"; // Assuming this is in a data folder
import { notFound } from "next/navigation";
import ProductDetails from "./ProductoDetalles";

export default async function Page({
  params,
}: {
  params: Promise<{ pId: string }>;
}) {
  const { pId } = await params;
  const product = tecladosLista.find((item) => item.id === parseInt(pId));

  if (!product) {
    notFound(); // Trigger 404 if product not found
  }

  return <ProductDetails product={product} />;
}
