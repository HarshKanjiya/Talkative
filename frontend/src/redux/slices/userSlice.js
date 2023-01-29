
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        user: null,
        isAuthenticated: false
    },
    reducers: {
    }
})

export const { } = userSlice.actions
export default userSlice.reducer