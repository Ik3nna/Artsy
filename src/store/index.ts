import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbar-slice";

const store = configureStore({
    reducer: {
        navbar: navbarSlice.reducer,
        
    }
})
export type RootState = ReturnType<typeof store.getState>; 

export default store;