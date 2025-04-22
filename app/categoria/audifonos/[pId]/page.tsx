import { audifonosLista } from "../audifonosLista";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductoDetalles";

export default async function Page({
  params,
}: {
  params: Promise<{ pId: string }>;
}) {
  const { pId } = await params;
  const product = audifonosLista.find((item) => item.id === parseInt(pId));

  if (!product) {
    notFound(); 
  }

  return <ProductDetails product={product} />;
}
