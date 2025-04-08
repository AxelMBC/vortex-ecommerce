import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Incluye aquí todos los slices necesarios
      cart: cartReducer,
    },
  })
}

// Inferir los tipos
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']