import { createSlice } from "@reduxjs/toolkit";

let plansReducer = createSlice({
    name :"plan",
    initialState : [],
    reducers : {
        additionPlan : (state , action) => {
            let find = state.find(plan => plan.id === action.payload.id);
            if(!find){
                // return state.push({...action.payload})
                return [...state , action.payload]
            }
        },
        deletePlan : ()=>[]
    }
});
export default plansReducer.reducer;
export let { additionPlan , deletePlan } = plansReducer.actions;