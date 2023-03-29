import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    cart: [],
    totalCount: 0,
    totalPrice: 0



}

const cartSlicer = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart(state, action) {
            let exist = state.cart.find(el => {
                return el.id === action.payload.id
            })

            if (!exist) {
                let copyArray = [...state.cart];
                copyArray.push(action.payload)
                state.cart = [...copyArray];
                state.totalCount = state.cart.length
                console.log(JSON.stringify(state))
            } else {
                console.log("working")
                // state.cart.find(el => {
                //     el.id === action.payload.id
                // })
            }

        }
    }
});

export const { addToCart } = cartSlicer.actions;
export default cartSlicer.reducer;