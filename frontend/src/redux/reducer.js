import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import nativeSlice from "./slices/nativeSlice";

const reducer = combineReducers({
    native: nativeSlice,

})

let initialState = {}
const store = configureStore({
    initialState,
    reducer,
    devTools: true
})

export default store