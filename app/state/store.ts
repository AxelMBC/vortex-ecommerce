import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import { productoType } from "@/app/types/productoType";

interface CartState {
  items: productoType[];
}

// Cargar el estado desde localStorage
const loadState = (): CartState | undefined => {
  if (typeof window === "undefined") {
    return undefined; // Si estamos en el servidor, no accedemos a localStorage
  }
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return undefined; // Si no hay datos, devolvemos undefined
    }
    return JSON.parse(serializedState); // Parseamos el estado guardado
  } catch (err) {
    console.error("Error al cargar el estado desde localStorage:", err);
    return undefined;
  }
};

// Función para guardar el estado en localStorage
const saveState = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.error("Error al guardar el estado en localStorage:", err);
  }
};

// Configuramos el store
export const store = () => {
  const preloadedState = loadState(); // Cargamos el estado inicial
  const storeInstance = configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState: preloadedState ? { cart: preloadedState } : undefined, // Aplicamos el estado precargado si existe
  });

  // Suscribimos el store para guardar el estado en localStorage cuando cambie
  storeInstance.subscribe(() => {
    saveState(storeInstance.getState().cart);
  });

  return storeInstance;
};

// Inferimos los tipos
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
