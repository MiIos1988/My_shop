import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: {
        cart: [],
        totalCount: 0,
        totalPrice: 0   }
}

const cartSlicer = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart(state, action) {
           const copyState = action.payload
            state.productData.cart = [...copyState]
            // state.productData.totalCount = cart.length
            console.log(state.productData.totalCount.length)
        }
    }
});

export const { addToCart } = cartSlicer.actions;
export default cartSlicer.reducer;