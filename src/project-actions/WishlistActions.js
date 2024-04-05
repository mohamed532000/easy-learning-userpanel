import { createSlice } from "@reduxjs/toolkit";
let wishlistReducer = createSlice({
    name : "widhlist",
    initialState : [],
    reducers : {
        addToWishList : (state , action) => {
            let find = state.find(product => product.overview.id === action.payload.overview.id);
            if(!find) {
                state.push({...action.payload})
            }
        },
        deleteFromWishlist : (state , action) => {
            return state.filter(product => {
                return product.overview.id !== action.payload.overview.id
            })
        }
    }
});
export default wishlistReducer.reducer;
export let {addToWishList , deleteFromWishlist} = wishlistReducer.actions;