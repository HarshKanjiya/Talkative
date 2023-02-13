
import { createSlice } from "@reduxjs/toolkit"
import { googleAuthThunk, logInThunk, logOutThunk, registerThunk } from "../thunk/userThunk"
import { routineThunk } from './../thunk/userThunk';

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

        //* routine check
        builder.addCase(routineThunk.pending, (state, { payload }) => {
            state.loading = true;
        });
        builder.addCase(routineThunk.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true
            state.userData = payload
        });
        builder.addCase(routineThunk.rejected, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = payload;
        });

        //* login
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
            state.isAuthenticated = false;
            state.loading = false;
            state.error = payload;
            state.userData = null;
        });
        //* register
        builder.addCase(registerThunk.pending, (state, { payload }) => {
            state.loading = true;
            state.isAuthenticated = false
        });
        builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true
            state.userData = payload
        });
        builder.addCase(registerThunk.rejected, (state, { payload }) => {
            state.isAuthenticated = false;
            state.loading = false;
            state.error = payload;
            state.userData = null;
        });

        //* logout
        builder.addCase(logOutThunk.pending, (state, { payload }) => {
            state.loading = true;
        });
        builder.addCase(logOutThunk.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.userData = null;
        });
        builder.addCase(logOutThunk.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        //* google auth
        builder.addCase(googleAuthThunk.pending, (state, { payload }) => {
        });
        builder.addCase(googleAuthThunk.fulfilled, (state, { payload }) => {
            state.isAuthenticated = true;
            state.userData = payload;
        });
        builder.addCase(googleAuthThunk.rejected, (state, { payload }) => {
            state.error = payload;
            state.isAuthenticated = false;
        });


    }
})

export const { clearErrorsInUserSlice } = userSlice.actions
export default userSlice.reducer