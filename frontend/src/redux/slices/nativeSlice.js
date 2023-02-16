
import { createSlice } from "@reduxjs/toolkit"
import { getChatThunk, sendMsgThunk } from "../thunk/chatThunk";
import { addFriendThunk, searchFriendThunk } from "../thunk/newFriendThunk";

const nativeSlice = createSlice({
    name: "nativeSlice",
    initialState: {
        theme: "dark",
        searchResults: [],
        nativeLoading: false,
        nativeError: null,
        screen: "chats",
        currentChat: null,
        messageSent: false
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
        },
        clearMsgSentNative: (state) => {
            state.messageSent = false
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

        //* chat loader
        builder.addCase(getChatThunk.pending, (state, { payload }) => {
            state.nativeLoading = true
        });
        builder.addCase(getChatThunk.fulfilled, (state, { payload }) => {
            state.nativeLoading = false
            state.currentChat = payload
        });
        builder.addCase(getChatThunk.rejected, (state, { payload }) => {
            state.nativeLoading = false
            state.nativeError = payload
        });
        //* chat send msg
        builder.addCase(sendMsgThunk.fulfilled, (state, { payload }) => {
            state.currentChat = payload,
                state.messageSent = true
        });
        builder.addCase(sendMsgThunk.rejected, (state, { payload }) => {
            state.nativeError = payload
        });
    }
})

export const { ChangeTheme, clearNativeErrors, setScreen, clearMsgSentNative } = nativeSlice.actions
export default nativeSlice.reducer