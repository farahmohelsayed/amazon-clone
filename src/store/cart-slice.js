import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [], totalQuantity: 0, totalPrice:0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          rating: newItem.rating,
          quantity: 1,
        });
        state.totalPrice +=newItem.price
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
     state.totalPrice+=existingItem.price
      }
    },
    removeItem(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalPrice-=existingItem.price
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
