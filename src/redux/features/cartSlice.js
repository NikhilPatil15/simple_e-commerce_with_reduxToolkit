import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    //add to cart

    addToCart: (state, action) => {
      //checking if item is already present

      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },

    //removeOneItem from the cart
    removeFromCart: (state, action) => {
      const updatedCarts = state.carts.filter((elem) => elem.id !== action.payload);

      state.carts = updatedCarts
    },

    //remove single qnty
    removeSingle:(state,action)=>{
      const itemIndex = state.carts.findIndex((item)=>item.id === action.payload)

        if(state.carts[itemIndex].qnty >= 1){
        state.carts[itemIndex].qnty -= 1;
      }

  },

    //remove all items from the cart
    removeAll: (state, action) => {
      state.carts = [];
    },
  },
});

export const { addToCart, removeFromCart, removeAll, removeSingle } = cartSlice.actions;
export default cartSlice.reducer;
