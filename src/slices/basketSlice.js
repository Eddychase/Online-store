import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        basketItem => basketItem.Id === action.payload.id
      )

      let newBasket = [...state.items];

      if (index >= 0) {
        //the items exist in basket...remove it
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in the list`
        )
      }

      state.items = newBasket;
    },


  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
