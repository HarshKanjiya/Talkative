import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { apiHeaderConfig, logInAPI, logoutAPI, routineAPI } from "../../config";


export const logInThunk = createAsyncThunk(
    "user/logIn",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(logInAPI, { email, password }, apiHeaderConfig, { withCredentials: true })
            console.log('data :>> ', data);
            return data.user
        }
        catch (err) {
            rejectWithValue(err.response.data.message)
        }
    }
)

export const logOutThunk = createAsyncThunk(
    'user/logOut',
    async ({ }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(logoutAPI, { withCredentials: true })
            console.log('hi Harxh!!!', data);
            return data
        }
        catch (err) {
            rejectWithValue(err.response.data.message)
        }
    }
)


export const routineThunk = createAsyncThunk(
    'user/routine',
    async ({ }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(routineAPI, { withCredentials: true })
            return data.user
        }
        catch (err) {
            rejectWithValue(err.response.data.message)
        }
    }
)
