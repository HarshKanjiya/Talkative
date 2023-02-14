
import { createSlice } from "@reduxjs/toolkit"
import { addFriendThunk, searchFriendThunk } from "../thunk/newFriendThunk";

const nativeSlice = createSlice({
    name: "nativeSlice",
    initialState: {
        theme: "dark",
        searchResults: [],
        nativeLoading: false,
        nativeError: null,
        screen: "chats"
    },
    reducers: {
        ChangeTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
        setScreen: (state, { payload }) => {
            state.screen = payload
        },
        clearNativeErrors: (state) => {
            state.nativeError = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(searchFriendThunk.pending, (state, { payload }) => {
            state.nativeLoading = true
        });
        builder.addCase(searchFriendThunk.fulfilled, (state, { payload }) => {
            state.nativeLoading = false
            state.searchResults = payload
        });
        builder.addCase(searchFriendThunk.rejected, (state, { payload }) => {
            state.nativeLoading = false
            state.nativeError = payload
        });
    }
})

export const { ChangeTheme, clearNativeErrors, setScreen } = nativeSlice.actions
export default nativeSlice.reducer