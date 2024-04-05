import { createSlice } from "@reduxjs/toolkit";

let cartReducer = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        additionCoures : (state , action) => {
            state.push({...action.payload});
        },
        deleteCourse : (state , action)=>{
            return state.filter(product => {
                return product.overview.id !== action.payload.overview.id;
            })
        },
        clearCoursesCart : ()=>[]
    }
})

export default cartReducer.reducer;
export let {additionCoures , deleteCourse , clearCoursesCart} = cartReducer.actions;