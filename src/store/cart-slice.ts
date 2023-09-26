import { createSlice } from "@reduxjs/toolkit";
import { ItemsListProps } from "../types";

const initialCartState: ItemsListProps[] = JSON.parse(localStorage.getItem("cart")!) || [];

const cartSlice = createSlice({
    name: "cart",
    initialState: { 
        itemsList: initialCartState,
        quantity: 1,
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
       increment (state) {
            state.quantity = state.quantity + 1;
       },
       decrement (state) {
            if (state.quantity > 0) {
                state.quantity = state.quantity - 1;
            } else {
                state.quantity = 0
            }
       },
       addToCart (state, action) {
            const newItem: ItemsListProps = action.payload;

            const existingItem = state.itemsList.find((item: ItemsListProps)=> item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.itemsList.push(newItem);
            }

            state.totalQuantity = state.itemsList.reduce((total, item) => total + item.quantity, 0);

            localStorage.setItem("cart", JSON.stringify(state.itemsList));
       } 
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;