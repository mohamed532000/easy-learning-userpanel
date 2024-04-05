import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartCoursesActions";
import wishlistReducer from "./WishlistActions";
import user from "./UserAccountActions";
import userStatus from "./UserStatus";
import plansReducer from "./PlansActions";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import { REGISTER } from "redux-persist";

let persistConfigue = {
    key : "key",
    storage,
}
let pReducer = persistReducer(persistConfigue , combineReducers({
    cartReducer,
    wishlistReducer,
    user,
    userStatus,
    plansReducer,
}))

export let myStore = configureStore({
    reducer : pReducer,
    middleware : (gitDefaulteMiddelware) => {
        return gitDefaulteMiddelware({
            serializableCheck : {
                ignoreActions : [REGISTER]
            }
        });
    }
})

let pStore = persistStore(myStore);
export default pStore