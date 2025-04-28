import { tecladosLista } from "../tecladosLista";
import { notFound } from "next/navigation";
import ProductDetails from "@/app/components/ProductoDetalles";

export default async function Page({
  params,
}: {
  params: Promise<{ pId: string }>;
}) {
  const { pId } = await params;
  const product = tecladosLista.find((item) => item.id === parseInt(pId));

  if (!product) {
    notFound(); 
  }

  return <ProductDetails product={product} />;
}
