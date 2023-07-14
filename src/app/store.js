import { configureStore } from "@reduxjs/toolkit";

// Reducers
import cartSlice from "../reducers/cart/cartSlice";

export default configureStore({
    reducer: {
        cart: cartSlice
    }
})