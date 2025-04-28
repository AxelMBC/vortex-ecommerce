"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store"; // ajusta según tu estructura

export default function CarritoDebug() {
  const carrito = useSelector((state: RootState) => state.cart); // accede al estado del slice
  console.log("Estado actual del carrito:", carrito); // lo ves en consola

  return null; // este componente solo sirve para debug
}