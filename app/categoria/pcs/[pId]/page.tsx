import { pcsLista } from "../pcsLista";
import { notFound } from "next/navigation";
import ProductoDetalles from "@/app/components/ProductoDetalles";

export default async function Page({
  params,
}: {
  params: Promise<{ pId: string }>;
}) {
  const { pId } = await params;
  const product = pcsLista.find((item) => item.id === parseInt(pId));

  if (!product) {
    notFound(); 
  }

  return <ProductoDetalles product={product} />;
}
