import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazaarSlice = createSlice({
  name: "bazaar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },

    ClearCart: (state) => {
      state.productData = [];
    },
    resetCart: (state) => {
      state.productData = [];
    },
    increamentQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.productData = state.productData.filter(
            (item) => item._id !== action.payload._id
          );
        }
      }
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  ClearCart,
  resetCart,
  increamentQuantity,
  decrementQuantity,
  addUser,
  removeUser,
} = bazaarSlice.actions;
export default bazaarSlice.reducer;
