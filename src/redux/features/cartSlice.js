import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            const itemIndex = state.products.findIndex(
                (item) => item.id === action.payload
            );
            if (itemIndex !== -1) {
                const item = state.products[itemIndex];
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    state.products.splice(itemIndex, 1);
                }
            }
        },
        resetCart: (state) => {
            state.products = [];
        },
    },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
