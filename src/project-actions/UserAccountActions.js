import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : "user",
    initialState : [],
    reducers : {
        additionUser : (state , action)=>{
            let find = state.find(user => user.email === action.payload.email);
            if(!find){
                state.push({...action.payload})
            }
        },
        deleteUser : ()=>[]
    }
});
export default user.reducer;
export let {additionUser , deleteUser} = user.actions;