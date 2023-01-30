
import { createSlice } from "@reduxjs/toolkit"
import { logInThunk } from "../thunk/userThunk"

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        userData: null,
        isAuthenticated: undefined,
        loading: false,
        error: false
    },
    reducers: {
        clearErrorsInUserSlice: (state) => {
            state.error = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logInThunk.pending, (state, { payload }) => {
            state.loading = true;
            state.isAuthenticated = false
        });
        builder.addCase(logInThunk.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true
            state.userData = payload
        });
        builder.addCase(logInThunk.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.userData = null;
            state.isAuthenticated = false;
        });
    }
})

export const { clearErrorsInUserSlice } = userSlice.actions
export default userSlice.reducer