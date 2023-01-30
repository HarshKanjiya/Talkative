import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import nativeSlice from "./slices/nativeSlice";
import userSlice from "./slices/userSlice";

const reducer = combineReducers({
    native: nativeSlice,
    user: userSlice,

})

let initialState = {}
const store = configureStore({
    initialState,
    reducer,
    devTools: true
})

export default store