import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: "navbar",
    initialState: { isActive: false },
    reducers: {
        toggleSidebar (state) {
            state.isActive = !state.isActive
        },
        hideSidebar (state) {
            state.isActive = false
        }
    }
})

export const navbarActions = navbarSlice.actions;

export default navbarSlice;