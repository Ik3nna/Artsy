import { createSlice } from "@reduxjs/toolkit";
import { ItemsListProps } from "../types";

const initialCartState: ItemsListProps[] = JSON.parse(localStorage.getItem("cart")!) || [];

const cartSlice = createSlice({
    name: "cart",
    initialState: { 
        itemsList: initialCartState,
        totalQuantity: initialCartState.reduce((total, item) => total + item.quantity, 0),
        showCart: false
    },
    reducers: {
       increment (state, action) {
            const itemToUpdate = state.itemsList.find((item) => item.id === action.payload);
    
            if (itemToUpdate) {
                itemToUpdate.quantity += 1;
                state.totalQuantity += 1;
                localStorage.setItem("cart", JSON.stringify(state.itemsList));
            }
       },
       decrement (state, action) {
            const itemToUpdate = state.itemsList.find((item) => item.id === action.payload);

            if (itemToUpdate && itemToUpdate.quantity > 0) {
                itemToUpdate.quantity -= 1;
                state.totalQuantity -= 1;
                localStorage.setItem("cart", JSON.stringify(state.itemsList));
            }
       },
       addToCart (state, action) {
            const newItem: ItemsListProps = action.payload;

            const existingItem = state.itemsList.find((item: ItemsListProps)=> item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.itemsList.push(newItem);
            }

            state.totalQuantity += 1;

            localStorage.setItem("cart", JSON.stringify(state.itemsList));
       } 
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;