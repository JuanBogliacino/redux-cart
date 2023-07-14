import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalCount: 0,
    productsList: [],
    totalPrice: 0,
    categoryActive: ''
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.productsList = [...state.productsList, action.payload]
            state.totalCount += 1
            state.totalPrice += action.payload.price
        },
        removeProductFromCart: (state, action) => {
            const product = action.payload
            state.totalCount -= 1
            state.productsList = state.productsList.filter(pdt => pdt.id !== product.id)
            state.totalPrice -= action.payload.price
        },
        clearCart: (state) => {
            state.totalCount = 0
            state.productsList = []
            state.totalPrice = 0

            localStorage.clear()
        },
        setCategoryActive: (state, action) => {
            state.categoryActive = action.payload
        }
    }
})

export const { addProductToCart, removeProductFromCart, clearCart, setCategoryActive } = cartSlice.actions

export default cartSlice.reducer