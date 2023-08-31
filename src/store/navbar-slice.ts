import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: "navbar",
    initialState: { isActive: false },
    reducers: {
        showSidebar (state) {
            state.isActive = !state.isActive
        }
    }
})

export const navbarActions = navbarSlice.actions;

export default navbarSlice;