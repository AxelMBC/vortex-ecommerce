// lib/features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productoType } from '@/app/types/productoType'

interface CartState {
  items: productoType[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<productoType>) => {
      state.items.push(action.payload)
    },
    // Puedes agregar más reducers según las necesidades (removeProduct, clearCart, etc.)
  },
})

export const { addProductToCart } = cartSlice.actions
export default cartSlice.reducer
