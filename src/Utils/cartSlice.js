import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],
    itemQut: 0,
    totalItemsQty: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const findIndexId = state.items.findIndex(
        (i) => i.id === action.payload.id
      );
      if (findIndexId >= 0) {
        state.items[findIndexId].qty += 1;
        toast.info(
          `Increse ${action.payload.name} - ${state.items[findIndexId].qty} in Cart`,
          { position: "top-right" }
        );
      } else {
        state.items.push({ ...action.payload, qty: 1 });
        toast.success(`${action.payload.name} Added to Cart`, {
          position: "top-right",
        });
      }
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const findIndexId = state.items.findIndex(
        (i) => i.id === action.payload.id
      );

      if (state.items[findIndexId].qty > 1) {
        state.items[findIndexId].qty -= 1;
        toast.error(
          `Decrese ${action.payload.name} - ${state.items[findIndexId].qty} in Cart`,
          { position: "top-right" }
        );
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        console.log(state.items, "aaaaaaaaaaaa");
        toast.error(`${action.payload.name} Removed to Cart`, {
          position: "top-right",
        });
      }
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      localStorage.setItem("items", []);
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
