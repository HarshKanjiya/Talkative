
import { createSlice } from "@reduxjs/toolkit"

const nativeSlice = createSlice({
    name: "nativeSlice",
    initialState: {
        theme: "dark"
    },
    reducers: {
        ChangeTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
})

export const { ChangeTheme } = nativeSlice.actions
export default nativeSlice.reducer