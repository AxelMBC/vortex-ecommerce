import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productoType } from '@/app/types/productoType';

interface CartState {
  items: productoType[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<productoType>) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addProductToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;